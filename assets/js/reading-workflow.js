(function (global, factory) {
  'use strict';
  var api = factory();
  if (typeof module === 'object' && module.exports) module.exports = api;
  if (global && global.document) {
    global.ResearchReadingWorkflow = api;
    var start = function () { api.mount(global); };
    // This body script precedes the deferred reading-store/controls footer scripts.
    if (global.document.readyState !== 'complete') global.document.addEventListener('DOMContentLoaded', start, { once: true });
    else start();
  }
}(typeof window !== 'undefined' ? window : null, function () {
  'use strict';
  var MAX_POSITIONS = 200;
  function storageKey(basePath) { return 'research-reading-position-v1:' + (basePath || '/'); }
  function normalizeStore(input) {
    var positions = Object.create(null);
    if (input && input.version === 1 && input.positions && typeof input.positions === 'object' && !Array.isArray(input.positions)) {
      Object.keys(input.positions).map(function (pathname) { return { pathname: pathname, value: input.positions[pathname] }; })
        .filter(function (entry) {
          var value = entry.value;
          return entry.pathname.startsWith('/') && !entry.pathname.startsWith('//') && entry.pathname.length <= 1000
            && value && typeof value.anchor === 'string' && value.anchor.length > 0 && value.anchor.length <= 300
            && Number.isFinite(value.progress) && value.progress >= 0 && value.progress <= 100
            && typeof value.updatedAt === 'string' && Number.isFinite(Date.parse(value.updatedAt));
        }).sort(function (a, b) { return Date.parse(b.value.updatedAt) - Date.parse(a.value.updatedAt); })
        .slice(0, MAX_POSITIONS).forEach(function (entry) {
          positions[entry.pathname] = { anchor: entry.value.anchor, progress: entry.value.progress, updatedAt: entry.value.updatedAt };
        });
    }
    return { version: 1, positions: positions };
  }
  function readStore(storage, key, readingStore) {
    try {
      if (readingStore) {
        if (!readingStore.refresh()) return normalizeStore(null);
        return normalizeStore({ version: 1, positions: readingStore.positions() });
      }
      return normalizeStore(JSON.parse(storage.getItem(key)));
    }
    catch (_) { return normalizeStore(null); }
  }
  function writePosition(storage, key, pathname, position, readingStore) {
    try {
      if (readingStore) { readingStore.updatePosition(pathname, position); return true; }
      var state = readStore(storage, key);
      state.positions[pathname] = position;
      storage.setItem(key, JSON.stringify(normalizeStore(state)));
      return true;
    } catch (_) { return false; }
  }
  function currentHeading(headings, threshold) {
    var current = headings[0] || null;
    headings.forEach(function (heading) { if (heading.getBoundingClientRect().top <= threshold) current = heading; });
    return current;
  }
  function mount(window) {
    var document = window.document;
    var article = document.getElementById('article-body');
    var workbench = document.querySelector('[data-reading-base-path]');
    if (!article || !workbench) return;
    var headings = Array.from(article.querySelectorAll('h2[id], h3[id]'));
    if (!headings.length) return;
    var base = workbench.dataset.readingBasePath || '/';
    var key = storageKey(base);
    var pathname = window.location.pathname;
    var storage;
    try { storage = window.localStorage; } catch (_) { storage = null; }
    var readingStore = window.ResearchReading && window.ResearchReading.store;
    if (readingStore && (readingStore.basePath !== base || readingStore.origin !== window.location.origin)) readingStore = null;
    if (!readingStore && window.ResearchReadingStore && storage) {
      try { readingStore = window.ResearchReadingStore.create({ storage: storage, basePath: base, origin: window.location.origin }); } catch (_) {}
    }
    var saved = readStore(storage, key, readingStore).positions[pathname];
    var resume = document.getElementById('reading-resume');
    var note = document.getElementById('reading-resume-note');
    var continuation = document.getElementById('reading-resume-continue');
    var dismiss = document.getElementById('reading-resume-dismiss');
    if (resume && saved && !window.location.hash && saved.progress > 1 && saved.progress < 98) {
      var destination = headings.find(function (heading) { return heading.id === saved.anchor; });
      if (destination) {
        note.textContent = '上次读到「' + destination.textContent + '」（约 ' + Math.round(saved.progress) + '%）。进度仅保存在此浏览器。';
        resume.hidden = false;
        continuation.addEventListener('click', function () {
          resume.hidden = true;
          jumpTo(destination);
        });
        dismiss.addEventListener('click', function () { resume.hidden = true; });
      }
    }
    var trigger = document.getElementById('reading-chapters-trigger');
    var panel = document.getElementById('reading-chapters-panel');
    var close = document.getElementById('reading-chapters-close');
    var linksContainer = document.getElementById('reading-chapters-links');
    var mobileLinks = [];
    var desktopLinks = Array.from(document.querySelectorAll('.workbench-toc a[href^="#"]'));
    function jumpTo(heading) {
      window.history.replaceState(null, '', window.location.pathname + window.location.search + '#' + encodeURIComponent(heading.id));
      heading.setAttribute('tabindex', '-1');
      heading.scrollIntoView({ block: 'start', behavior: 'auto' });
      heading.focus({ preventScroll: true });
    }
    function closePanel(returnFocus) {
      if (!panel) return;
      panel.hidden = true;
      trigger.setAttribute('aria-expanded', 'false');
      document.body.classList.remove('reading-chapters-open');
      if (returnFocus) trigger.focus();
    }
    if (trigger && panel && close && linksContainer) {
      headings.forEach(function (heading) {
        var link = document.createElement('a');
        link.href = '#' + encodeURIComponent(heading.id);
        link.textContent = heading.textContent;
        link.dataset.headingId = heading.id;
        if (heading.tagName === 'H3') link.className = 'reading-chapters-subsection';
        link.addEventListener('click', function (event) { event.preventDefault(); closePanel(false); jumpTo(heading); });
        mobileLinks.push(link);
        linksContainer.appendChild(link);
      });
      trigger.hidden = false;
      trigger.addEventListener('click', function () {
        panel.hidden = false;
        trigger.setAttribute('aria-expanded', 'true');
        document.body.classList.add('reading-chapters-open');
        close.focus();
      });
      close.addEventListener('click', function () { closePanel(true); });
      panel.addEventListener('click', function (event) { if (event.target === panel) closePanel(true); });
      panel.addEventListener('keydown', function (event) {
        if (event.key === 'Escape') { event.preventDefault(); closePanel(true); }
        if (event.key === 'Tab') {
          var first = close, last = mobileLinks[mobileLinks.length - 1];
          if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
          else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
        }
      });
      var media = window.matchMedia('(max-width: 860px)');
      if (media.addEventListener) media.addEventListener('change', function (event) { if (!event.matches) closePanel(false); });
    }
    var position = null;
    var frame = false;
    var timer = null;
    function save() {
      if (!position || position.progress <= 1) return;
      if (writePosition(storage, key, pathname, position, readingStore)) {
        window.dispatchEvent(new window.CustomEvent('research-reading-position-change', { detail: { pathname: pathname, position: position, storageKey: key } }));
      }
    }
    function update() {
      frame = false;
      var current = currentHeading(headings, document.documentElement.clientHeight * .25);
      var top = article.getBoundingClientRect().top;
      var range = Math.max(1, article.offsetHeight - document.documentElement.clientHeight);
      var progress = Math.min(100, Math.max(0, -top / range * 100));
      position = { anchor: current.id, progress: Math.round(progress * 10) / 10, updatedAt: new Date().toISOString() };
      if (trigger) trigger.textContent = '章节 · ' + current.textContent.slice(0, 24);
      desktopLinks.concat(mobileLinks).forEach(function (link) {
        var id;
        try { id = decodeURIComponent(link.hash.slice(1)); } catch (_) { id = link.hash.slice(1); }
        var selected = id === current.id;
        link.classList.toggle('active', selected);
        if (selected) link.setAttribute('aria-current', 'location');
        else link.removeAttribute('aria-current');
      });
      if (timer) window.clearTimeout(timer);
      timer = window.setTimeout(save, 800);
    }
    window.addEventListener('scroll', function () { if (!frame) { frame = true; window.requestAnimationFrame(update); } }, { passive: true });
    window.addEventListener('pagehide', save);
    update();
  }
  return { mount: mount, storageKey: storageKey, normalizeStore: normalizeStore, readStore: readStore,
    writePosition: writePosition, currentHeading: currentHeading };
}));
