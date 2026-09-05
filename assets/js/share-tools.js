(() => {
  'use strict';

  document.querySelectorAll('.share-tools').forEach((section) => {
    const copy = section.querySelector('.share-tools__copy');
    const native = section.querySelector('.share-tools__native');
    const field = section.querySelector('.share-tools__link');
    const status = section.querySelector('.paper-tools__status');
    if (!copy || !native || !field || !status) return;
    let url;
    try {
      url = new URL(section.dataset.shareUrl);
      if (!['http:', 'https:'].includes(url.protocol) || url.username || url.password) return;
    } catch (_error) { return; }
    const data = { title: section.dataset.shareTitle || document.title, url: url.href };
    const showLink = () => {
      field.hidden = false;
      field.value = data.url;
      field.focus();
      field.select();
    };

    copy.hidden = false;
    copy.addEventListener('click', async () => {
      copy.disabled = true;
      let copied = false;
      try {
        if (window.isSecureContext && navigator.clipboard
          && typeof navigator.clipboard.writeText === 'function') {
          try {
            await navigator.clipboard.writeText(data.url);
            copied = true;
          } catch (_error) { /* Keep a selectable link if permission was denied. */ }
        }
        if (!copied) {
          showLink();
          try { copied = document.execCommand('copy') === true; } catch (_error) { /* Manual copy. */ }
        }
        status.textContent = copied
          ? '文章链接已复制。'
          : '浏览器不允许自动复制，请手动复制上方已选中的链接。';
      } finally {
        copy.disabled = false;
      }
    });

    let canShare = window.isSecureContext && typeof navigator.share === 'function';
    if (canShare && typeof navigator.canShare === 'function') {
      try { canShare = navigator.canShare(data); } catch (_error) { canShare = false; }
    }
    if (!canShare) return;
    native.hidden = false;
    native.addEventListener('click', async () => {
      native.disabled = true;
      try {
        await navigator.share(data);
        status.textContent = '链接已交给系统分享。';
      } catch (error) {
        if (error && error.name === 'AbortError') {
          status.textContent = '已取消分享。';
        } else {
          showLink();
          status.textContent = '系统分享未完成，可以复制上方链接后分享。';
        }
      } finally {
        native.disabled = false;
      }
    });
  });
})();
