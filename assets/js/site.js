(function () {
  'use strict';

  function onReady(callback) {
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', callback, { once: true });
    } else {
      callback();
    }
  }

  onReady(function () {
    var progress = document.getElementById('reading-progress');
    var ticking = false;

    function updateScrollUi() {
      var scrollTop = window.scrollY || document.documentElement.scrollTop;
      var scrollRange = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      var percent = scrollRange > 0 ? Math.min(100, Math.max(0, scrollTop / scrollRange * 100)) : 0;
      if (progress) {
        progress.style.width = percent + '%';
        progress.setAttribute('aria-valuenow', String(Math.round(percent)));
      }
      ticking = false;
    }

    window.addEventListener('scroll', function () {
      if (!ticking) {
        window.requestAnimationFrame(updateScrollUi);
        ticking = true;
      }
    }, { passive: true });
    updateScrollUi();

    document.querySelectorAll('a[href]').forEach(function (anchor) {
      var value = anchor.getAttribute('href');
      if (!value || !/^https?:/i.test(value)) return;
      try {
        var target = new URL(value, window.location.href);
        if (target.origin !== window.location.origin) {
          anchor.target = '_blank';
          var rel = new Set((anchor.rel || '').split(/\s+/).filter(Boolean));
          rel.add('noopener');
          rel.add('noreferrer');
          anchor.rel = Array.from(rel).join(' ');
        }
      } catch (_) {
        return;
      }
    });

    document.querySelectorAll('img:not([loading])').forEach(function (image) {
      image.loading = 'lazy';
      image.decoding = 'async';
    });

    if (typeof window.mediumZoom === 'function') {
      window.mediumZoom('.post-content img', {
        margin: 24,
        background: 'rgba(0,0,0,0.85)',
        scrollOffset: 0
      });
    }

    document.querySelectorAll('.highlight').forEach(function (block) {
      var code = block.querySelector('pre code[class*="language-"]');
      var match = code && code.className.match(/(?:^|\s)language-([\w-]+)/);
      if (match) block.dataset.lang = match[1];
    });

    var toc = document.querySelector('.post-single .toc');
    if (!toc || !('IntersectionObserver' in window)) return;
    var tocLinks = Array.prototype.slice.call(toc.querySelectorAll('a[href^="#"]'));
    var linksById = new Map();
    tocLinks.forEach(function (link) {
      try {
        linksById.set(decodeURIComponent(link.hash.slice(1)), link);
      } catch (_) {
        linksById.set(link.hash.slice(1), link);
      }
    });
    var headings = Array.prototype.slice.call(document.querySelectorAll('.post-content h2[id], .post-content h3[id]'));
    var visible = new Set();
    function markCurrent() {
      var current = headings.find(function (heading) { return visible.has(heading.id); });
      if (!current) return;
      tocLinks.forEach(function (link) { link.classList.toggle('active', link === linksById.get(current.id)); });
    }
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) visible.add(entry.target.id);
        else visible.delete(entry.target.id);
      });
      markCurrent();
    }, { rootMargin: '-15% 0px -70% 0px', threshold: 0 });
    headings.forEach(function (heading) { observer.observe(heading); });
  });
}());
