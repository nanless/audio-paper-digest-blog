(() => {
  'use strict';

  const MAX_SELECTED_TEXT_CHARS = 2000;
  const MAX_COMPANION_URL_CHARS = 32768;
  const COMPANION_HOST = ['127', '0', '0', '1'].join('.');
  const COMPANION_QUERY_KEYS = new Set(['title', 'arxivId', 'sourceUrl', 'contextUrl', 'pageExcerpt']);

  const normalizeSelection = (value) => {
    const normalized = String(value || '').replace(/\r\n?/g, '\n').normalize('NFC').trim();
    if (!normalized) throw new Error('请先在论文正文中选择一段文字。');
    if (/[\u0000-\u0008\u000b\u000c\u000e-\u001f\u007f-\u009f]/u.test(normalized)) {
      throw new Error('选中文字包含不支持的控制字符。');
    }
    if (normalized.length > MAX_SELECTED_TEXT_CHARS) {
      throw new Error(`选中文字不能超过 ${MAX_SELECTED_TEXT_CHARS} 个字符。`);
    }
    return normalized;
  };

  const buildSelectionUrl = (baseValue, selectionValue) => {
    const selectedText = normalizeSelection(selectionValue);
    let url;
    try {
      url = new URL(String(baseValue || ''));
    } catch (_error) {
      throw new Error('本机 companion 地址无效。');
    }
    if (url.protocol !== 'http:' || url.hostname !== COMPANION_HOST || url.port !== '43128'
      || url.pathname !== '/ui' || url.username || url.password || url.hash) {
      throw new Error('本机 companion 地址无效。');
    }
    const seen = new Set();
    for (const key of url.searchParams.keys()) {
      if (!COMPANION_QUERY_KEYS.has(key) || seen.has(key)) {
        throw new Error('本机 companion 参数无效。');
      }
      seen.add(key);
    }
    url.searchParams.delete('pageExcerpt');
    url.searchParams.set('selectedText', selectedText);
    const target = url.toString();
    if (target.length > MAX_COMPANION_URL_CHARS) {
      throw new Error('选中文字编码后过长，请缩短选择。');
    }
    return target;
  };

  const writeFallback = (value) => {
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

  const writeClipboard = async (value) => {
    if (navigator.clipboard && window.isSecureContext) {
      try {
        await navigator.clipboard.writeText(value);
        return;
      } catch (_error) { /* Browsers may deny clipboard permission; try legacy copy. */ }
    }
    writeFallback(value);
  };

  document.querySelectorAll('.paper-tools').forEach((toolbar) => {
    const status = toolbar.querySelector('.paper-tools__status');
    const announce = (message) => {
      if (!status) return;
      status.textContent = message;
    };

    toolbar.querySelectorAll('.paper-tool-copy').forEach((button) => {
      button.hidden = false;
      button.addEventListener('click', async () => {
        const value = button.dataset.copyText || '';
        const label = button.dataset.copyLabel || '论文标识';
        if (!value) {
          announce('没有可复制的论文标识。');
          return;
        }
        try {
          await writeClipboard(value);
          announce(`已复制 ${label}：${value}`);
        } catch (_error) {
          announce(`复制失败，请手动选择：${value}`);
        }
      });
    });

    const selectionButton = toolbar.querySelector('.paper-tool--selection');
    if (selectionButton) {
      const field = toolbar.querySelector('.paper-tools__selected-text');
      const panel = toolbar.querySelector('.paper-tools__selection-panel');
      const quickButton = toolbar.querySelector('.paper-tool--selection-quick');
      const promptButton = toolbar.querySelector('.paper-tool--selection-copy');
      const article = toolbar.closest('article');
      const content = article && article.querySelector('.post-content');
      let capturedText = '';
      const captureSelection = () => {
        const selection = window.getSelection && window.getSelection();
        if (!selection || selection.isCollapsed || !selection.rangeCount || !content) return;
        // Both ends must belong to this article's body, not navigation or tool labels.
        if (!content.contains(selection.anchorNode) || !content.contains(selection.focusNode)) return;
        const text = selection.toString();
        if (!text.trim()) return;
        capturedText = text;
        if (field && document.activeElement !== field) field.value = text;
        if (quickButton) quickButton.hidden = false;
      };
      document.addEventListener('selectionchange', captureSelection);
      // Capture before a mouse click clears selection; touch and keyboard use the cache.
      if (panel) {
        panel.addEventListener('pointerdown', captureSelection);
        panel.addEventListener('toggle', () => {
          if (panel.open && field && capturedText && !field.value) field.value = capturedText;
        });
      }
      if (quickButton) quickButton.addEventListener('click', () => {
        if (!panel) return;
        panel.open = true;
        quickButton.hidden = true;
        panel.scrollIntoView({ block: 'center', behavior: 'auto' });
        if (field) field.focus({ preventScroll: true });
      });
      if (promptButton) {
        promptButton.hidden = false;
        promptButton.addEventListener('click', async () => {
          try {
            const selected = normalizeSelection(field ? field.value : capturedText);
            const prompt = `请用适合初学研究者的语言解释以下阅读选段。先解释术语，再说明机制与前提；请区分段落已有信息和需要查证的推测。\n选段来源：本站博客导读或用户粘贴，未核验为原论文逐字引用。\n\n${selected}`;
            try {
              await writeClipboard(prompt);
              announce('已复制解释提问，可以粘贴到你使用的 AI 工具。');
            } catch (_error) {
              // Keep the full prompt selectable when clipboard APIs are unavailable.
              const fallback = toolbar.querySelector('.paper-tools__copy-fallback');
              if (fallback) {
                fallback.hidden = false;
                fallback.value = prompt;
                fallback.focus();
                fallback.select();
              }
              announce('浏览器不允许复制，请手动复制下方已选中的提问。');
            }
          } catch (error) {
            announce(error instanceof Error ? error.message : '无法生成提问。');
          }
        });
      }
      selectionButton.hidden = false;
      selectionButton.addEventListener('click', () => {
        try {
          const target = buildSelectionUrl(
            selectionButton.dataset.companionUrl,
            field ? field.value : capturedText
          );
          const opened = window.open('', '_blank');
          if (!opened) {
            announce('浏览器阻止了新窗口，请允许弹窗后重试。');
            return;
          }
          try {
            opened.opener = null;
            opened.location.replace(target);
          } catch (_error) {
            try { opened.close(); } catch (_closeError) { /* The browser owns the popup. */ }
            announce('无法安全打开本机 companion，请检查浏览器设置后重试。');
            return;
          }
          announce('已尝试打开本机 AI 确认页。若新页无法连接，请先在同一台电脑运行 npm run paper:rethink。');
        } catch (error) {
          announce(error instanceof Error ? error.message : '无法打开选中段落。');
        }
      });
    }
  });
})();
