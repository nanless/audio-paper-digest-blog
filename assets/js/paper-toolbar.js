(() => {
  'use strict';

  const MAX_SELECTED_TEXT_CHARS = 2000;
  const MAX_COMPANION_URL_CHARS = 8192;
  const COMPANION_HOST = ['127', '0', '0', '1'].join('.');
  const COMPANION_QUERY_KEYS = new Set(['title', 'arxivId', 'sourceUrl', 'contextUrl']);

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
    field.select();
    const copied = document.execCommand('copy');
    field.remove();
    if (!copied) throw new Error('copy command rejected');
  };

  const writeClipboard = async (value) => {
    if (navigator.clipboard && window.isSecureContext) {
      await navigator.clipboard.writeText(value);
      return;
    }
    writeFallback(value);
  };

  document.querySelectorAll('.paper-tools').forEach((toolbar) => {
    const status = toolbar.querySelector('.paper-tools__status');
    let clearTimer;
    const announce = (message) => {
      if (!status) return;
      window.clearTimeout(clearTimer);
      status.textContent = message;
      clearTimer = window.setTimeout(() => {
        status.textContent = '';
      }, 4000);
    };

    toolbar.querySelectorAll('.paper-tool-copy').forEach((button) => {
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
      selectionButton.addEventListener('click', () => {
        try {
          const target = buildSelectionUrl(
            selectionButton.dataset.companionUrl,
            window.getSelection ? window.getSelection().toString() : ''
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
          announce('已在本机 companion 中打开选中段落。');
        } catch (error) {
          announce(error instanceof Error ? error.message : '无法打开选中段落。');
        }
      });
    }
  });
})();
