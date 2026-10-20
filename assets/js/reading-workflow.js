(function (global, factory) {
  'use strict';
  var api = factory();
  if (typeof module === 'object' && module.exports) module.exports = api;
  if (global && global.document) {
    global.ResearchReadingWorkflow = api;
    var start = function () { api.mount(global); };
    // Mount only chapter navigation; legacy storage helpers are never invoked.
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
    // Headings are collected in normal article flow. Probe their live positions
    // so images/math changing height do not stale a cached offset array.
    var low = 0, high = headings.length - 1, current = headings[0] || null;
    while (low <= high) {
      var middle = Math.floor((low + high) / 2);
      if (headings[middle].getBoundingClientRect().top <= threshold) { current = headings[middle]; low = middle + 1; }
      else high = middle - 1;
    }
    return current;
  }
  function headingLabel(heading) {
    if (!heading.cloneNode) return heading.textContent.trim();
    var copy = heading.cloneNode(true);
    copy.querySelectorAll('.anchor[aria-hidden="true"]').forEach(function (anchor) { anchor.remove(); });
    return copy.textContent.trim();
  }
  function mount(window) {
    var document = window.document;
    var article = document.getElementById('article-body');
    var workbench = document.querySelector('[data-reading-base-path]');
    if (!article || !workbench) return;
    var headings = Array.from(article.querySelectorAll('h2[id], h3[id]'));
    if (!headings.length) return;
    function inClosedDisclosure(heading) {
      var child = heading, parent = heading.parentElement;
      while (parent && parent !== article) {
        // A summary remains visible even when its owning details is closed.
        if (parent.tagName === 'DETAILS' && !parent.open && child.tagName !== 'SUMMARY') return true;
        child = parent; parent = parent.parentElement;
      }
      return false;
    }
    var flowHeadings = headings.filter(function (heading) { return !inClosedDisclosure(heading); });
    var trigger = document.getElementById('reading-chapters-trigger');
    var panel = document.getElementById('reading-chapters-panel');
    var close = document.getElementById('reading-chapters-close');
    var linksContainer = document.getElementById('reading-chapters-links');
    var searchGroup = document.getElementById('reading-chapters-search-group');
    var search = document.getElementById('reading-chapters-search');
    var clear = document.getElementById('reading-chapters-clear');
    var empty = document.getElementById('reading-chapters-empty');
    var searchable = !!(headings.length > 20 && searchGroup && search && clear && empty);
    var mobileLinks = [];
    var desktopLinks = Array.from(document.querySelectorAll('.workbench-toc a[href^="#"]'));
    function refreshFlowHeadings() {
      flowHeadings = headings.filter(function (heading) { return !inClosedDisclosure(heading); });
      update();
    }
    function jumpTo(heading, pushHistory) {
      var parent = heading.parentElement;
      while (parent && parent !== article) {
        if (parent.tagName === 'DETAILS') parent.open = true;
        parent = parent.parentElement;
      }
      refreshFlowHeadings();
      var next = window.location.pathname + window.location.search + '#' + encodeURIComponent(heading.id);
      window.history[pushHistory ? 'pushState' : 'replaceState'](window.history.state, '', next);
      heading.setAttribute('tabindex', '-1');
      heading.scrollIntoView({ block: 'start', behavior: 'auto' });
      heading.focus({ preventScroll: true });
    }
    var headingsById = new Map(headings.map(function (heading) { return [heading.id, heading]; }));
    desktopLinks.forEach(function (link) {
      link.addEventListener('click', function (event) {
        // Keep native fragments and modified/new-tab clicks untouched unless
        // this particular target requires revealing a closed disclosure.
        if (event.defaultPrevented || event.button > 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
        var id;
        try { id = decodeURIComponent(link.hash.slice(1)); } catch (_) { id = link.hash.slice(1); }
        var heading = headingsById.get(id);
        if (!heading || !inClosedDisclosure(heading)) return;
        event.preventDefault();
        jumpTo(heading, true);
      });
    });
    function closePanel(returnFocus) {
      if (!panel) return;
      panel.hidden = true;
      trigger.setAttribute('aria-expanded', 'false');
      document.body.classList.remove('reading-chapters-open');
      if (returnFocus) trigger.focus();
    }
    if (trigger && panel && close && linksContainer) {
      linksContainer.setAttribute('aria-label', '文章章节');
      headings.forEach(function (heading) {
        var link = document.createElement('a');
        link.hidden = false;
        link.href = '#' + encodeURIComponent(heading.id);
        link.textContent = headingLabel(heading);
        link.dataset.headingId = heading.id;
        if (heading.tagName === 'H3') link.className = 'reading-chapters-subsection';
        link.addEventListener('click', function (event) {
          if (event.defaultPrevented || event.button > 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
          var target = link.getAttribute('target');
          if ((target && target.toLowerCase() !== '_self') || link.hasAttribute('download')) return;
          event.preventDefault(); closePanel(false); jumpTo(heading);
        });
        mobileLinks.push(link);
        linksContainer.appendChild(link);
      });
      if (searchable) {
        searchGroup.hidden = false;
        trigger.classList.add('reading-chapters-trigger--searchable');
        function filterChapters() {
          var query = search.value.trim().toLocaleLowerCase();
          var visible = 0;
          mobileLinks.forEach(function (link) {
            link.hidden = query !== '' && !link.textContent.toLocaleLowerCase().includes(query);
            if (!link.hidden) visible++;
          });
          clear.hidden = search.value === '';
          empty.hidden = visible !== 0;
        }
        search.addEventListener('input', filterChapters);
        clear.addEventListener('click', function () { search.value = ''; filterChapters(); search.focus(); });
        filterChapters();
      }
      trigger.hidden = false;
      trigger.addEventListener('click', function () {
        panel.hidden = false;
        trigger.setAttribute('aria-expanded', 'true');
        document.body.classList.add('reading-chapters-open');
        if (searchable) search.focus();
        else close.focus();
      });
      close.addEventListener('click', function () { closePanel(true); });
      panel.addEventListener('click', function (event) { if (event.target === panel) closePanel(true); });
      panel.addEventListener('keydown', function (event) {
        if (event.key === 'Escape') { event.preventDefault(); closePanel(true); }
        if (event.key === 'Tab') {
          var focusable = [close];
          if (searchable) { focusable.push(search); if (!clear.hidden) focusable.push(clear); }
          focusable = focusable.concat(mobileLinks.filter(function (link) { return !link.hidden; }));
          var index = focusable.indexOf(document.activeElement);
          if (event.shiftKey && index === 0) { event.preventDefault(); focusable[focusable.length - 1].focus(); }
          else if (!event.shiftKey && index === focusable.length - 1) { event.preventDefault(); focusable[0].focus(); }
        }
      });
      var media = window.matchMedia('(max-width: 860px)');
      if (media.addEventListener) media.addEventListener('change', function (event) {
        if (!event.matches && !searchable) {
          var wasOpen = !panel.hidden;
          closePanel(false);
          if (wasOpen) {
            var target = currentHeading(flowHeadings, document.documentElement.clientHeight * .25) || article;
            target.setAttribute('tabindex', '-1'); target.focus({ preventScroll: true });
          }
        }
      });
    }
    var linksById = new Map();
    desktopLinks.concat(mobileLinks).forEach(function (link) {
      var id;
      try { id = decodeURIComponent(link.hash.slice(1)); } catch (_) { id = link.hash.slice(1); }
      if (!linksById.has(id)) linksById.set(id, []);
      linksById.get(id).push(link);
    });
    var frame = false, activeId = null;
    function markLinks(id, selected) {
      (linksById.get(id) || []).forEach(function (link) {
        link.classList.toggle('active', selected);
        if (selected) link.setAttribute('aria-current', 'location');
        else link.removeAttribute('aria-current');
      });
    }
    function update() {
      frame = false;
      var current = currentHeading(flowHeadings, document.documentElement.clientHeight * .25);
      if (!current) { if (activeId !== null) markLinks(activeId, false); activeId = null; return; }
      if (current.id === activeId) return;
      if (trigger) trigger.textContent = (searchable ? '查找章节 · ' : '章节 · ') + headingLabel(current).slice(0, 24);
      if (activeId !== null) markLinks(activeId, false);
      markLinks(current.id, true);
      activeId = current.id;
    }
    window.addEventListener('scroll', function () { if (!frame) { frame = true; window.requestAnimationFrame(update); } }, { passive: true });
    // toggle does not bubble; capture observes nested native disclosures. The
    // complete chapter directory is retained while only visible flow is probed.
    article.addEventListener('toggle', function (event) { if (event.target && event.target.tagName === 'DETAILS') refreshFlowHeadings(); }, true);
    update();
  }
  return { mount: mount, storageKey: storageKey, normalizeStore: normalizeStore, readStore: readStore,
    writePosition: writePosition, currentHeading: currentHeading, headingLabel: headingLabel };
}));
