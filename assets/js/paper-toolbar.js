(() => {
  'use strict';

  const MAX_SELECTED_TEXT_CHARS = 2000;
  const isArxivId = (value) => /^([0-9]{4}\.[0-9]{4,5}|[a-z][a-z0-9.-]*\/[0-9]{7})(v[1-9][0-9]*)?$/.test(value || '');
  const normalizeSelection = (value) => {
    const normalized = String(value || '').replace(/\r\n?/g, '\n').normalize('NFC').trim();
    if (!normalized) throw new Error('请先写下笔记，或选择正文后收录选段。');
    if (/[\u0000-\u0008\u000b\u000c\u000e-\u001f\u007f-\u009f]/u.test(normalized)) {
      throw new Error('选中文字包含不支持的控制字符。');
    }
    if (normalized.length > MAX_SELECTED_TEXT_CHARS) {
      throw new Error('阅读笔记最多 2000 字符，请缩短后再保存或导出。');
    }
    return normalized;
  };

  const writeClipboard = async (value) => {
    if (navigator.clipboard && window.isSecureContext) {
      try {
        await navigator.clipboard.writeText(value);
        return;
      } catch (_error) { /* Try legacy copy when browser permissions deny clipboard access. */ }
    }
    const field = document.createElement('textarea');
    field.value = value;
    field.setAttribute('readonly', '');
    field.style.position = 'fixed';
    field.style.inset = '-9999px auto auto -9999px';
    document.body.appendChild(field);
    try {
      field.select();
      if (!document.execCommand('copy')) throw new Error('copy command rejected');
    } finally {
      field.remove();
    }
  };

  const citationText = (id, titleValue, format) => {
    if (!isArxivId(id)) {
      throw new Error('缺少可验证的 arXiv 标识。');
    }
    const title = String(titleValue || '').replace(/[\u0000-\u001f\u007f-\u009f]+/g, ' ').trim();
    if (!title || title.length > 2000) throw new Error('没有可用于引用的有效标题。');
    const url = 'https://arxiv.org/abs/' + id;
    if (format === 'ris') {
      return ['TY  - UNPB', 'TI  - ' + title, 'ID  - ' + id, 'UR  - ' + url, 'ER  - ', ''].join('\n');
    }
    if (format !== 'bib') throw new Error('引用格式无效。');
    const escapes = {
      '\\': '\\textbackslash{}', '{': '\\{', '}': '\\}', '%': '\\%',
      '&': '\\&', '#': '\\#', '_': '\\_', '$': '\\$', '^': '\\textasciicircum{}',
      '~': '\\textasciitilde{}',
    };
    const safeTitle = title.replace(/[\\{}%&#_$^~]/g, (character) => escapes[character]);
    return '@misc{arxiv_' + id.replace(/[^a-z0-9]/g, '_')
      + ',\n  title = {' + safeTitle + '},\n  eprint = {' + id
      + '},\n  archivePrefix = {arXiv},\n  url = {' + url + '}\n}\n';
  };

  const init = () => document.querySelectorAll('.paper-tools').forEach((toolbar) => {
    const citationApi = window.ResearchCitation;
    let citationRecord = null;
    try { if (toolbar.dataset.citationRecord) citationRecord = JSON.parse(toolbar.dataset.citationRecord); } catch (_error) { /* Refuse malformed source data below. */ }
    const status = toolbar.querySelector('.paper-tools__status');
    const announce = (message) => { if (status) status.textContent = message; };
    const showFallback = (value) => {
      const field = toolbar.querySelector('.paper-tools__copy-fallback');
      if (!field) return;
      field.hidden = false;
      field.value = value;
      field.focus();
      field.select();
    };

    toolbar.querySelectorAll('.paper-tool-copy').forEach((button) => {
      button.hidden = false;
      button.addEventListener('click', async () => {
        const value = button.dataset.copyText || '';
        const label = button.dataset.copyLabel || '论文标识';
        if (!value) { announce('没有可复制的论文标识。'); return; }
        try {
          await writeClipboard(value);
          announce('已复制 ' + label + '：' + value);
        } catch (_error) {
          showFallback(value);
          announce('浏览器不允许自动复制，请手动复制下方已选中的文本。');
        }
      });
    });

    toolbar.querySelectorAll('.paper-tool-citation').forEach((button) => {
      button.hidden = false;
      button.addEventListener('click', () => {
        let text;
        let objectUrl;
        let link;
        try {
          const format = button.dataset.citationFormat;
          const id = button.dataset.citationId || (citationRecord && citationRecord.arxivId) || '';
          text = citationRecord && citationApi ? citationApi.formatCitation(citationRecord, format) : citationText(id, button.dataset.citationTitle, format);
          objectUrl = URL.createObjectURL(new Blob([text], { type: 'text/plain;charset=utf-8' }));
          link = document.createElement('a');
          link.href = objectUrl;
          link.download = (id ? 'arxiv_' + id.replace(/[^a-z0-9]/g, '_') : 'paper_' + String(citationRecord && citationRecord.paperKey || 'reference').replace(/[^a-z0-9]/gi, '_')) + '.' + format;
          document.body.appendChild(link);
          link.click();
          announce(citationRecord ? '已请求下载引用；仅包含当前有来源记录的字段，缺失信息请核对官方记录。' : '已请求浏览器下载简要引用；作者与出版日期未提供，请到 arXiv 核对补全。');
        } catch (error) {
          if (text) {
            showFallback(text);
            announce('浏览器未能启动下载，请手动复制下方引用文本并保存。');
          } else {
            announce(error instanceof Error ? error.message : '无法生成引用。');
          }
        } finally {
          if (link) link.remove();
          if (objectUrl) window.setTimeout(() => URL.revokeObjectURL(objectUrl), 1000);
        }
      });
    });

    const article = toolbar.closest('article');
    const content = article && article.querySelector('.post-content');
    const referenceButton = toolbar.querySelector('.paper-tool--reference-copy');
    if (referenceButton && citationRecord && citationApi) {
      referenceButton.hidden = false;
      referenceButton.addEventListener('click', async () => {
        let text;
        try { text = citationApi.formatReference(citationRecord); await writeClipboard(text);
          announce('已复制引用；仅包含已核来源字段，缺失作者或日期时不会补造。'); }
        catch (error) { if (text) { showFallback(text); announce('请手动复制下方引用。'); } else announce(error.message); }
      });
    }
    const downloadText = (text, suffix) => {
      let objectUrl; let link;
      try {
        objectUrl = URL.createObjectURL(new Blob([text], { type: 'text/markdown;charset=utf-8' }));
        link = document.createElement('a'); link.href = objectUrl;
        link.download = 'paper-' + String(toolbar.dataset.paperKey || 'reading').replace(/[^a-zA-Z0-9_-]/g, '-').slice(0, 100) + suffix + '.md';
        document.body.appendChild(link); link.click();
      } finally { if (link) link.remove(); if (objectUrl) window.setTimeout(() => URL.revokeObjectURL(objectUrl), 1000); }
    };
    // Reuse the existing global reading editor/store. No duplicate note field,
    // bookmark, storage schema or backup format is introduced.
    if (window.ResearchReading && window.ResearchReading.mount) window.ResearchReading.mount(toolbar);
    const notesPanel = toolbar.querySelector('.reading-controls > details');
    const note = notesPanel && notesPanel.querySelector('textarea');
    let captured = null;
    if (note) {
      notesPanel.querySelector('summary').textContent = '阅读笔记';
      const saveNote = notesPanel.querySelector('button.rw-action');
      if (saveNote) saveNote.textContent = '保存笔记';
      note.setAttribute('aria-label', '阅读笔记：' + toolbar.dataset.paperTitle);
      note.placeholder = '写下要点、疑问或复现计划；也可选择正文后收录选段。';
      const actions = document.createElement('div'); actions.className = 'paper-tools__note-actions';
      const capture = document.createElement('button'); capture.type = 'button'; capture.className = 'paper-tool paper-tool--capture-note'; capture.textContent = '收录正文选段'; capture.disabled = true;
      const exportNote = document.createElement('button'); exportNote.type = 'button'; exportNote.className = 'paper-tool paper-tool--export-note'; exportNote.textContent = '导出当前笔记';
      const context = document.createElement('p'); context.className = 'paper-tools__selection-context'; context.textContent = '选择导读正文后，可收录到笔记。已有笔记不会被自动替换。';
      actions.appendChild(capture); actions.appendChild(exportNote); notesPanel.appendChild(actions); notesPanel.appendChild(context);
      capture.addEventListener('click', () => {
        try {
          if (!captured) throw new Error('请先选择导读正文。');
          const addition = '选段（本站导读，非原论文逐字引文）：\n' + normalizeSelection(captured.text)
            + (captured.heading ? '\n章节：' + captured.heading + '\n定位：' + captured.anchor : '');
          const value = normalizeSelection((note.value.trim() ? note.value.trim() + '\n\n' : '') + addition);
          note.value = value; note.dispatchEvent(new Event('input', { bubbles: true }));
          announce('选段已加入当前笔记，点击“保存笔记”保存在此浏览器。');
        } catch (error) { announce(error.message); }
      });
      exportNote.addEventListener('click', () => {
        let text;
        try {
          const value = normalizeSelection(note.value);
          const record = citationRecord && citationApi ? citationApi.normalize(citationRecord) : {};
          text = ['# 阅读笔记：' + String(toolbar.dataset.paperTitle || '').replace(/[\r\n]/g, ' '), '',
            '本站导读：' + toolbar.dataset.paperUrl, '官方记录：' + (record.url || '未确认'),
            '原文 PDF：' + (record.pdfUrl || '未确认'), '', '以下是当前编辑的个人笔记，不代表原论文事实或逐字引用。', '', value,
            record.sourceVersionWarning ? '\n来源版本限制：' + record.sourceVersionWarning : '',
            record.provenanceDisclosure ? '\n来源说明：' + record.provenanceDisclosure : ''].filter(Boolean).join('\n') + '\n';
          downloadText(text, '-notes'); announce('已请求下载当前笔记，包含尚未保存的编辑。');
        } catch (error) { if (text) showFallback(text); announce(error.message); }
      });
      document.addEventListener('selectionchange', () => {
        const selection = window.getSelection && window.getSelection();
        if (!selection || selection.isCollapsed || !selection.rangeCount || !content
          || !content.contains(selection.anchorNode) || !content.contains(selection.focusNode)) return;
        const text = selection.toString(); if (!text.trim()) return;
        captured = { text };
        const node = selection.anchorNode.nodeType === 1 ? selection.anchorNode : selection.anchorNode.parentElement;
        const heading = Array.from(content.querySelectorAll('h1[id],h2[id],h3[id],h4[id]'))
          .filter((entry) => entry === node || entry.contains(node) || (entry.compareDocumentPosition(node) & 4)).pop();
        if (heading) { const anchor = new URL(toolbar.dataset.paperUrl); anchor.hash = heading.id;
          const headingCopy = heading.cloneNode(true);
          headingCopy.querySelectorAll('.anchor,[aria-hidden="true"]').forEach((node) => node.remove());
          captured.heading = headingCopy.textContent.trim(); captured.anchor = anchor.href; }
        capture.disabled = false; context.textContent = '已选择 ' + text.length + ' 字符' + (captured.heading ? ' · ' + captured.heading : '') + '。点击收录后再保存。';
      });
    }
    const packButton = toolbar.querySelector('.paper-tool--pack');
    if (packButton && citationRecord && citationApi) {
      packButton.hidden = false;
      packButton.addEventListener('click', () => {
        let text;
        try {
          const links = content ? Array.from(content.querySelectorAll('a[href]')).map((entry) => ({ label: entry.textContent, url: entry.href })) : [];
          const value = note && note.value.trim() ? normalizeSelection(note.value) : '';
          text = citationApi.buildResearchPack(citationRecord, { content: content ? content.innerText || content.textContent : '', note: value, links });
          downloadText(text, '-research'); announce('已请求下载研究资料包；导读、引用和当前个人笔记分别标明。');
        } catch (error) { if (text) showFallback(text); announce(error.message || '资料包未能下载，可手动复制。'); }
      });
    }
  });
  if (document.readyState !== 'complete') document.addEventListener('DOMContentLoaded', init, { once: true });
  else init();
})();
