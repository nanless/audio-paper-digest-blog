(() => {
  'use strict';

  const isArxivId = (value) => /^([0-9]{4}\.[0-9]{4,5}|[a-z][a-z0-9.-]*\/[0-9]{7})(v[1-9][0-9]*)?$/.test(value || '');

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
    const packButton = toolbar.querySelector('.paper-tool--pack');
    if (packButton && citationRecord && citationApi) {
      packButton.hidden = false;
      packButton.addEventListener('click', () => {
        let text;
        try {
          const links = content ? Array.from(content.querySelectorAll('a[href]')).map((entry) => ({ label: entry.textContent, url: entry.href })) : [];
          text = citationApi.buildResearchPack(citationRecord, { content: content ? content.innerText || content.textContent : '', links });
          downloadText(text, '-research'); announce('已请求下载导读与引用；包含官方链接和来源版本提示。');
        } catch (error) { if (text) showFallback(text); announce(error.message || '资料包未能下载，可手动复制。'); }
      });
    }
  });
  if (document.readyState !== 'complete') document.addEventListener('DOMContentLoaded', init, { once: true });
  else init();
})();
