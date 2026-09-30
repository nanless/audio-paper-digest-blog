(function () {
  'use strict';
  if (typeof document === 'undefined' || window.ResearchReading) return;
  var settingsNode = document.getElementById('research-reading-settings');
  var settings;
  try { settings = JSON.parse(settingsNode.textContent); } catch (_error) { return; }
  var store;
  try {
    store = window.ResearchReadingStore.create({ storage: window.localStorage, origin: window.location.origin, basePath: settings.basePath,
      onChange: function () { window.dispatchEvent(new CustomEvent('research-reading-change')); } });
  } catch (error) {
    window.ResearchReading = { error: error, mount: function () {} }; return;
  }
  var views = new Set();
  function paperOf(button) {
    var host = button.closest('[data-paper-url]') || button;
    return { title: button.dataset.paperTitle || host.dataset.paperTitle || '', permalink: button.dataset.paperUrl || host.dataset.paperUrl,
      arxivId: button.dataset.paperArxivId || host.dataset.paperArxivId || '', paperId: button.dataset.paperKey || host.dataset.paperKey || '',
      identityStatus: button.dataset.paperIdentityStatus || host.dataset.paperIdentityStatus || (String(button.dataset.paperKey || '').startsWith('page:') ? 'unknown' : '') };
  }
  function mount(container) {
    Array.from(container.querySelectorAll('[data-reading-bookmark]')).forEach(function (button) {
      if (button.dataset.readingBound) return;
      button.dataset.readingBound = 'true';
      var paper = paperOf(button), key;
      try { key = store.key(paper); } catch (_error) { button.disabled = true; button.textContent = '收藏信息待核'; return; }
      var controls = document.createElement('div'); controls.className = 'reading-controls';
      button.parentNode.insertBefore(controls, button); controls.appendChild(button); button.hidden = false;
      button.classList.add('rw-action');
      var label = document.createElement('label'); label.textContent = '阅读状态';
      var select = document.createElement('select'); select.setAttribute('aria-label', '阅读状态：' + paper.title);
      [['unread', '待读'], ['reading', '阅读中'], ['read', '已读']].forEach(function (value) { var option = document.createElement('option'); option.value = value[0]; option.textContent = value[1]; select.appendChild(option); });
      label.appendChild(select); controls.appendChild(label);
      var details = document.createElement('details'), summary = document.createElement('summary'); summary.textContent = '个人备注'; details.appendChild(summary);
      var noteLabel = document.createElement('label'); noteLabel.textContent = '只保存在此浏览器，最多2000字符';
      var note = document.createElement('textarea'); note.rows = 3; note.maxLength = 2000; note.setAttribute('aria-label', '个人备注：' + paper.title); noteLabel.appendChild(note); details.appendChild(noteLabel);
      var save = document.createElement('button'); save.type = 'button'; save.className = 'rw-action'; save.textContent = '保存备注'; details.appendChild(save); controls.appendChild(details);
      var status = document.createElement('span'); status.className = 'reading-controls__status'; status.setAttribute('role', 'status'); controls.appendChild(status);
      var dirty = false;
      note.addEventListener('input', function () { dirty = true; });
      function refresh() {
        var record = store.get(key);
        button.textContent = record && record.bookmarked ? '已收藏 · 取消' : '收藏';
        button.setAttribute('aria-pressed', String(!!(record && record.bookmarked)));
        select.value = record ? record.status : 'unread';
        if (!dirty) note.value = record ? record.note : '';
      }
      function update(patch, message) { try { store.update(paper, patch); status.textContent = message; refresh(); } catch (error) { status.textContent = error.message; } }
      button.addEventListener('click', function () { var old = store.get(key); update({ bookmarked: !(old && old.bookmarked) }, old && old.bookmarked ? '已取消收藏，阅读状态与备注保留' : '已收藏到此浏览器'); });
      select.addEventListener('change', function () { update({ status: select.value }, '已保存阅读状态'); });
      save.addEventListener('click', function () { try { store.update(paper, { note: note.value }); dirty = false; status.textContent = '备注已保存在此浏览器'; refresh(); } catch (error) { status.textContent = error.message; } });
      refresh(); if (store.error) status.textContent = store.error.message + '；原资料未覆盖，请导出备份后恢复。';
      views.add({ node: controls, refresh: refresh });
    });
  }
  window.ResearchReading = { store: store, mount: mount, error: store.error };
  window.addEventListener('research-reading-change', function () {
    views.forEach(function (view) { if (!view.node.isConnected) views.delete(view); else view.refresh(); });
  });
  window.addEventListener('storage', function (event) {
    if (event.key === 'research-reading-store-v1:' + settings.basePath) {
      store.refresh();
      window.dispatchEvent(new CustomEvent('research-reading-change'));
    }
  });
  mount(document);
}());
