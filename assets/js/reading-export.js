(function (root, factory) {
  'use strict';
  var citation = typeof module === 'object' && module.exports ? require('./citation-source.js') : root.ResearchCitation;
  var api = factory(citation);
  if (typeof module === 'object' && module.exports) module.exports = api;
  else root.ResearchReadingExport = api;
}(typeof globalThis !== 'undefined' ? globalThis : this, function (citation) {
  'use strict';
  function plain(value) { return String(value || '').replace(/[\u0000-\u0008\u000b\u000c\u000e-\u001f\u007f-\u009f]/g, '').trim(); }
  function markdown(value) { return plain(value).replace(/[\\`*_{}\[\]<>#|]/g, '\\$&'); }
  function csv(value) {
    var text = plain(value);
    if (/^\s*[=+\-@]/.test(text)) text = "'" + text;
    return '"' + text.replace(/"/g, '""') + '"';
  }
  function url(value, origin) {
    try { var parsed = new URL(value, origin); return /^https?:$/.test(parsed.protocol) && !parsed.username && !parsed.password ? parsed.href : ''; } catch (_error) { return ''; }
  }
  function build(entries, format, options) {
    if (!Array.isArray(entries) || entries.length > 10000 || !['md', 'csv', 'bib', 'ris'].includes(format)) throw new Error('导出格式或条目数量无效');
    var settings = options || {}, seen = new Set(), skipped = 0, incomplete = 0;
    var rows = entries.filter(function (entry) {
      var key = entry.paperGroup && entry.paperGroup.key || entry.readingKey || entry.permalink || entry.url;
      if (!key || seen.has(key)) return false; seen.add(key); return true;
    });
    var created = new Date().toISOString(), lines = [];
    if (format === 'md') lines.push('# 论文清单', '', '导出时间：' + created, '筛选条件：' + markdown(settings.filter || '当前选择'), '导出内容为所选论文的导读与可核实来源信息，未替代原论文。', '');
    if (format === 'csv') lines.push(['论文标题', '论文标识', '身份状态', '导读链接', '官方来源', '作者', '出版日期', 'DOI', '来源版本限制', '来源记录说明'].map(csv).join(','));
    if (format === 'bib') lines.push('% 仅导出可核实身份与已有来源字段，缺失作者和日期未补造。\n');
    rows.forEach(function (entry, position) {
      var record = citation ? citation.normalize(entry.citation || {}) : {};
      var link = url(entry.permalink || entry.url, settings.origin);
      var title = plain(entry.originalTitle || entry.title || record.title);
      var identifier = record.arxivId || record.paperKey || entry.paperId || '';
      if (format === 'bib' || format === 'ris') {
        try {
          if (!citation) throw new Error('引用模块未就绪');
          var formatted = citation.formatCitation(entry.citation || {}, format);
          lines.push(formatted);
          if (!record.authors.length || !record.date) incomplete++;
        } catch (_error) { skipped++; }
        return;
      }
      if (format === 'csv') { lines.push([title, identifier, record.identityStatus || entry.identityStatus || 'unknown', link,
        record.url || record.sourceUrl || '', (record.authors || []).join('; '), record.date || '', record.doi || '', record.sourceVersionWarning || '', record.provenanceDisclosure || ''].map(csv).join(',')); return; }
      lines.push('## ' + (position + 1) + '. ' + markdown(title), '');
      if (link) lines.push('导读：<' + link + '>');
      lines.push('论文身份：' + markdown(identifier || '待核'), '身份状态：' + markdown(record.identityStatus || entry.identityStatus || 'unknown'));
      if (record.url || record.sourceUrl) lines.push('官方记录：<' + (record.url || record.sourceUrl) + '>');
      if (record.sourceVersionWarning) lines.push('来源版本限制：' + markdown(record.sourceVersionWarning));
      if (record.provenanceDisclosure) lines.push('来源记录说明：' + markdown(record.provenanceDisclosure));
      lines.push('作者：' + markdown((record.authors || []).join('；') || '未提供'), '出版日期：' + markdown(record.date || '未提供'), 'DOI：' + markdown(record.doi || '未提供'));
      if (Array.isArray(entry.guides) && entry.guides.length > 1) {
        lines.push('', '同一已核论文的其他导读：');
        entry.guides.forEach(function (guide) { var guideUrl = url(guide.permalink, settings.origin); if (guideUrl) lines.push('- ' + markdown(guide.title) + '：<' + guideUrl + '>'); });
      }
      lines.push('');
    });
    var exported = rows.length - skipped;
    if (!exported) throw new Error(format === 'bib' || format === 'ris' ? '所选条目均缺少可验证引用身份；可先导出Markdown或CSV阅读清单。' : '请先选择要导出的论文。');
    return { text: lines.join(format === 'csv' ? '\r\n' : '\n') + '\n', filename: 'reading-list-' + created.slice(0, 10) + '.' + format,
      mime: format === 'csv' ? 'text/csv;charset=utf-8' : 'text/plain;charset=utf-8', exported: exported, skipped: skipped, incomplete: incomplete };
  }
  function download(result) {
    var objectUrl = URL.createObjectURL(new Blob([result.text], { type: result.mime || 'text/plain;charset=utf-8' })), link = document.createElement('a');
    link.href = objectUrl; link.download = result.filename; document.body.appendChild(link); link.click(); link.remove();
    setTimeout(function () { URL.revokeObjectURL(objectUrl); }, 1000);
  }
  return { build: build, download: download, csv: csv };
}));
