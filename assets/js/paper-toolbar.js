(() => {
  'use strict';

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
  });
})();
