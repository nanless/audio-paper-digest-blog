(() => {
  'use strict';

  const MAX_SELECTED_TEXT_CHARS = 2000;
  const isArxivId = (value) => /^([0-9]{4}\.[0-9]{4,5}|[a-z][a-z0-9.-]*\/[0-9]{7})(v[1-9][0-9]*)?$/.test(value || '');
  const normalizeSelection = (value) => {
    const normalized = String(value || '').replace(/\r\n?/g, '\n').normalize('NFC').trim();
    if (!normalized) throw new Error('请先选择正文，或在文本框粘贴一段文字。');
    if (/[\u0000-\u0008\u000b\u000c\u000e-\u001f\u007f-\u009f]/u.test(normalized)) {
      throw new Error('选中文字包含不支持的控制字符。');
    }
    if (normalized.length > MAX_SELECTED_TEXT_CHARS) {
      throw new Error('选中文字不能超过 2000 个字符。');
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

  document.querySelectorAll('.paper-tools').forEach((toolbar) => {
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

    const promptButton = toolbar.querySelector('.paper-tool--selection-copy');
    const field = toolbar.querySelector('.paper-tools__selected-text');
    if (!promptButton || !field) return;
    const sourceLines = [];
    const paperTitle = String(toolbar.dataset.paperTitle || '').replace(/[\r\n]+/g, ' ').trim();
    if (paperTitle) sourceLines.push('论文 / 页面标题：' + paperTitle);
    try {
      const pageUrl = new URL(toolbar.dataset.paperUrl);
      if (['https:', 'http:'].includes(pageUrl.protocol) && !pageUrl.username && !pageUrl.password) {
        sourceLines.push('博客导读：' + pageUrl.href);
      }
    } catch (_error) { /* An absent source link must not prevent copying the selected text. */ }
    if (isArxivId(toolbar.dataset.paperArxivId)) {
      sourceLines.push('arXiv 原文：https://arxiv.org/abs/' + toolbar.dataset.paperArxivId);
    }
    const panel = toolbar.querySelector('.paper-tools__selection-panel');
    const quickButton = toolbar.querySelector('.paper-tool--selection-quick');
    const article = toolbar.closest('article');
    const content = article && article.querySelector('.post-content');
    let capturedText = '';
    let selectedContext = {};
    const taskSelect = toolbar.querySelector('.paper-tools__prompt-task');
    const sourceSelect = toolbar.querySelector('.paper-tools__selection-source');
    const contextNote = toolbar.querySelector('.paper-tools__selection-context');
    const captureSelection = () => {
      const selection = window.getSelection && window.getSelection();
      if (!selection || selection.isCollapsed || !selection.rangeCount || !content) return;
      if (!content.contains(selection.anchorNode) || !content.contains(selection.focusNode)) return;
      const text = selection.toString();
      if (!text.trim()) return;
      capturedText = text;
      if (document.activeElement === field) return;
      field.value = text;
      selectedContext = {};
      const anchorNode = selection.anchorNode && (selection.anchorNode.nodeType === 1 ? selection.anchorNode : selection.anchorNode.parentElement);
      if (anchorNode && content.querySelectorAll) {
        const headings = Array.from(content.querySelectorAll('h1[id],h2[id],h3[id],h4[id]'));
        const heading = headings.filter((node) => node === anchorNode || node.contains(anchorNode) || (node.compareDocumentPosition(anchorNode) & 4)).pop();
        if (heading) {
          try { const anchor = new URL(toolbar.dataset.paperUrl); anchor.hash = heading.id; selectedContext = { heading: heading.textContent, anchor: anchor.href }; } catch (_error) { /* No inferred locator. */ }
        }
      }
      if (contextNote) contextNote.textContent = selectedContext.heading ? '已记录章节：' + selectedContext.heading : '该选段未取得章节定位；不会补造图表位置。';
      if (quickButton) quickButton.hidden = false;
    };
    document.addEventListener('selectionchange', captureSelection);
    if (field.addEventListener) field.addEventListener('input', () => { selectedContext = {}; if (contextNote) contextNote.textContent = '手动编辑选段：章节定位已清除。'; });
    if (panel) {
      panel.addEventListener('pointerdown', captureSelection);
      panel.addEventListener('toggle', () => {
        if (panel.open && capturedText && !field.value) field.value = capturedText;
      });
    }
    if (quickButton) quickButton.addEventListener('click', () => {
      if (!panel) return;
      panel.open = true;
      quickButton.hidden = true;
      panel.scrollIntoView({ block: 'center', behavior: 'auto' });
      field.focus({ preventScroll: true });
    });
    promptButton.hidden = false;
    promptButton.addEventListener('click', async () => {
      try {
        const selected = normalizeSelection(field.value);
        const prompt = citationRecord && citationApi ? citationApi.buildPrompt(citationRecord, {
          task: taskSelect ? taskSelect.value : 'mechanism', source: sourceSelect ? sourceSelect.value : 'blog', selection: selected, context: selectedContext
        }) : '请用适合初学研究者的语言解释以下阅读选段。先解释术语，再说明机制与前提；请区分段落已有信息和需要查证的推测。\n'
          + sourceLines.join('\n') + '\n'
          + '选段来源：本站博客导读或用户粘贴，未核验为原论文逐字引用。\n\n' + selected;
        try {
          await writeClipboard(prompt);
          announce('已复制 AI 提问，可以粘贴到你使用的 AI 工具。');
        } catch (_error) {
          showFallback(prompt);
          announce('浏览器不允许复制，请手动复制下方已选中的提问。');
        }
      } catch (error) {
        announce(error instanceof Error ? error.message : '无法生成提问。');
      }
    });
    const packButton = toolbar.querySelector('.paper-tool--pack');
    if (packButton && citationRecord && citationApi) {
      packButton.hidden = false;
      packButton.addEventListener('click', () => {
        let text;
        let objectUrl;
        let link;
        try {
          const links = content && content.querySelectorAll ? Array.from(content.querySelectorAll('a[href]')).map((entry) => ({ label: entry.textContent, url: entry.href })) : [];
          text = citationApi.buildResearchPack(citationRecord, { content: content ? content.innerText || content.textContent : '', selection: field.value, links });
          objectUrl = URL.createObjectURL(new Blob([text], { type: 'text/markdown;charset=utf-8' }));
          link = document.createElement('a'); link.href = objectUrl; link.download = 'research-pack.md'; document.body.appendChild(link); link.click();
          announce('已请求下载研究资料包；导读与个人选段已注明来源区别。');
        } catch (_error) { if (text) showFallback(text); announce('资料包未能下载；可手动复制已选中的文本。'); }
        finally { if (link) link.remove(); if (objectUrl) window.setTimeout(() => URL.revokeObjectURL(objectUrl), 1000); }
      });
    }
  });
})();
