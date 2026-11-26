"""Rebase portal inputs before Hugo/contract export; never edit signed output."""
import argparse
import hashlib
import json
from pathlib import Path
import re
import shutil
import subprocess
from urllib.parse import urlsplit
from xml.etree import ElementTree as ET

OLD = "https://nanless.github.io/audio-paper-digest-blog/"
NEW = "https://nanless.github.io/audio-research-portal/"
PREFIX = "/audio-paper-digest-blog/"
SOURCE_PREFIX = re.compile(rb'(?<![\w./-])/audio-research-portal(?=/|["\'])')
TEXT = {".js", ".json", ".html", ".xml", ".md", ".yaml", ".css", ".toml",
        ".txt", ".bib", ".ris"}


def rebase(source):
    paths = subprocess.check_output(
        ["git", "-C", str(source), "ls-files", "-z", "--", "hugo.yaml",
         "scripts", "layouts", "data", "static", "content", "assets"]
    )
    changed = 0
    for name in paths.decode().split("\0"):
        path = source / name
        if not name or path.suffix.lower() not in TEXT or path.is_symlink() or not path.is_file():
            continue
        raw = path.read_bytes()
        rewritten = SOURCE_PREFIX.sub(
            b"/audio-paper-digest-blog", raw.replace(NEW.encode(), OLD.encode())
        )
        if rewritten != raw:
            path.write_bytes(rewritten)
            changed += 1
    if OLD not in (source / "hugo.yaml").read_text(encoding="utf-8"):
        raise ValueError("Hugo does not declare the legacy base")
    print(f"Rebased {changed} tracked source files in the build checkout")


def verify(public):
    def local(route):
        url = urlsplit(route)
        if url.scheme or url.netloc or url.query or url.fragment or url.path.startswith("/"):
            raise ValueError(f"Expected a relative artifact URL: {route}")
        file = (public / url.path).resolve()
        if not file.is_relative_to(public.resolve()):
            raise ValueError(f"URL escaped output: {route}")
        return file

    def load(route):
        return json.loads(local(route).read_bytes())

    def checked(entry):
        raw = local(entry["url"]).read_bytes()
        if len(raw) != entry["bytes"] or hashlib.sha256(raw).hexdigest() != entry["sha256"]:
            raise ValueError(f"Size or digest mismatch: {entry['url']}")
        return json.loads(raw)

    channel = ET.parse(public / "index.xml").find("channel")
    items = channel.findall("item")
    ids = [item.findtext("guid") for item in items]
    if not ids or len(set(ids)) != len(ids) or not all(
        guid and guid.startswith(OLD + "posts/") for guid in ids
    ):
        raise ValueError("Daily RSS must retain unique old-site item identifiers")
    for item, guid in zip(items, ids):
        if guid != item.findtext("link") or not local(guid.removeprefix(OLD) + "index.html").is_file():
            raise ValueError(f"Unresolvable legacy RSS permalink: {guid}")
    manifest = load("client/details/manifest.json")
    if manifest["contract"] != "paper-desktop-manifest" or manifest["basePath"] != PREFIX:
        raise ValueError("Native detail manifest is not scoped to the legacy base")
    snapshot = checked(manifest["snapshot"])
    if snapshot["contract"] != "paper-desktop-snapshot" or snapshot["recordCount"] < 1:
        raise ValueError("Empty or unsupported native detail snapshot")
    search = load("client/index.json")
    if search["contract"] != "paper-search-index-manifest" or search["recordCount"] < 1:
        raise ValueError("Empty or unsupported native search manifest")
    load("index.json")
    for group in (snapshot["catalogShards"], snapshot["tombstoneShards"],
                  snapshot["tagCatalogs"].values(), search["shards"]):
        for entry in group:
            checked(entry)
    print(f"Verified {len(items)} daily RSS items, {snapshot['recordCount']} catalog records, "
          f"{search['recordCount']} search records, and their manifest references")


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("action", choices=("rebase", "verify", "assemble"))
    parser.add_argument("path", type=Path)
    args = parser.parse_args()
    if args.action == "rebase":
        rebase(args.path)
    else:
        verify(args.path)
        if args.action == "assemble":
            root = Path(__file__).resolve().parents[1]
            for name in (".nojekyll", "index.html", "404.html"):
                shutil.copyfile(root / name, args.path / name)
            (args.path / "robots.txt").write_text("User-agent: *\nDisallow: /\n", encoding="utf-8")
            sitemap = args.path / "sitemap.xml"
            if sitemap.exists():
                sitemap.unlink()


if __name__ == "__main__":
    main()
