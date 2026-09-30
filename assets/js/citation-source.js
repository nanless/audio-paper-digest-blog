(function (root, factory) {
  'use strict';
  var api = factory();
  if (typeof module === 'object' && module.exports) module.exports = api;
  else root.ResearchCitation = api;
}(typeof globalThis !== 'undefined' ? globalThis : this, function () {
  'use strict';
  var line = function (value) { return String(value || '').replace(/[\u0000-\u001f\u007f-\u009f]+/g, ' ').trim(); };
  function url(value) {
    try { var parsed = new URL(value); return parsed.protocol === 'https:' && !parsed.username && !parsed.password ? parsed.href : ''; }
    catch (_error) { return ''; }
  }
  function validDate(value) {
    var text = line(value);
    if (!/^\d{4}-\d{2}-\d{2}$/.test(text)) return '';
    var date = new Date(text + 'T00:00:00Z');
    return Number.isFinite(date.getTime()) && date.toISOString().slice(0, 10) === text ? text : '';
  }
  function normalize(raw) {
    var item = raw || {};
    var verified = item.identityStatus ? item.identityStatus === 'verified' : item.verified === true;
    var kind = ['arxiv', 'conference'].includes(item.sourceKind) ? item.sourceKind : '';
    var id = verified && kind === 'arxiv' && /^([0-9]{4}\.[0-9]{4,5}|[a-z][a-z0-9.-]*\/[0-9]{7})(v[1-9][0-9]*)?$/.test(item.arxivId || '') ? item.arxivId : '';
    var authors = verified && Array.isArray(item.authors) ? item.authors.map(function (author) {
      return line(typeof author === 'string' ? author : author && author.name);
    }).filter(Boolean) : [];
    var doi = verified && /^10\.[0-9]{4,9}\/[^\s<>"\\]+$/.test(item.doi || '') ? item.doi : '';
    return { title: line(item.title), paperKey: line(item.paperKey || item.paperId), identityStatus: verified ? 'verified' : 'unknown',
      sourceKind: kind, arxivId: id, authors: authors, date: verified ? validDate(item.date) : '', doi: doi,
      venue: verified ? line(item.venue) : '', url: verified ? (id ? 'https://arxiv.org/abs/' + id : url(item.sourceUrl || item.url)) : '',
      pdfUrl: verified ? (id ? 'https://arxiv.org/pdf/' + id + '.pdf' : url(item.pdfUrl)) : '', pageUrl: url(item.pageUrl) };
  }
  function bibEscape(value) {
    var escapes = { '\\': '\\textbackslash{}', '{': '\\{', '}': '\\}', '%': '\\%', '&': '\\&', '#': '\\#', '_': '\\_', '$': '\\$', '^': '\\textasciicircum{}', '~': '\\textasciitilde{}' };
    return line(value).replace(/[\\{}%&#_$^~]/g, function (character) { return escapes[character]; });
  }
  function formatCitation(raw, format) {
    var record = normalize(raw);
    if (record.identityStatus !== 'verified' || !record.title || (!record.arxivId && !(record.sourceKind === 'conference' && record.paperKey.startsWith('conference:') && record.url))) {
      throw new Error('缺少可验证的论文身份，无法生成引用。');
    }
    if (format === 'ris') {
      var fields = ['TY  - ' + (record.sourceKind === 'conference' ? 'CONF' : 'UNPB'), 'TI  - ' + record.title];
      record.authors.forEach(function (author) { fields.push('AU  - ' + author); });
      if (record.date) fields.push('PY  - ' + record.date.slice(0, 4), 'DA  - ' + record.date.replace(/-/g, '/'));
      if (record.doi) fields.push('DO  - ' + record.doi);
      if (record.venue) fields.push('T2  - ' + record.venue);
      fields.push('ID  - ' + (record.arxivId || record.paperKey));
      if (record.url) fields.push('UR  - ' + record.url);
      return fields.concat('ER  - ', '').join('\n');
    }
    if (format !== 'bib') throw new Error('引用格式无效。');
    var key = (record.arxivId ? 'arxiv_' + record.arxivId : record.paperKey).replace(/[^a-zA-Z0-9]/g, '_');
    var lines = ['  title = {' + bibEscape(record.title) + '}'];
    if (record.authors.length) lines.push('  author = {' + record.authors.map(bibEscape).join(' and ') + '}');
    if (record.date) lines.push('  date = {' + record.date + '}', '  year = {' + record.date.slice(0, 4) + '}');
    if (record.venue) lines.push('  booktitle = {' + bibEscape(record.venue) + '}');
    if (record.doi) lines.push('  doi = {' + bibEscape(record.doi) + '}');
    if (record.arxivId) lines.push('  eprint = {' + record.arxivId + '}', '  archivePrefix = {arXiv}');
    if (record.url) lines.push('  url = {' + bibEscape(record.url) + '}');
    return '@' + (record.sourceKind === 'conference' && record.venue ? 'inproceedings' : 'misc') + '{' + key + ',\n' + lines.join(',\n') + '\n}\n';
  }
  function buildPrompt(raw, options) {
    var settings = options || {};
    var record = normalize(raw);
    var selected = String(settings.selection || '').replace(/\r\n?/g, '\n').normalize('NFC').trim();
    if (!selected || selected.length > 2000 || /[\u0000-\u0008\u000b\u000c\u000e-\u001f\u007f-\u009f]/u.test(selected)) throw new Error('选段须为 1–2000 字符，且不能含控制字符。');
    var tasks = { mechanism: '请用适合初学研究者的语言解释术语、机制分工、搭配原因与成立前提。',
      verify: '请逐条核对选段结论的证据、实验协议与数字。引用原文具体章节、表格或公式；无法访问原文时明确无法核验，不补造证据。',
      limitations: '请分析选段结论的适用条件、失败情形与尚未验证的边界。区分论文已有结果、作者讨论与你提出的后续研究假设。' };
    if (!tasks[settings.task || 'mechanism']) throw new Error('提问任务无效。');
    var lines = [tasks[settings.task || 'mechanism'], '所有回答请区分原文事实、博客解释与推测。', '论文 / 页面标题：' + record.title];
    if (record.pageUrl) lines.push('博客导读：' + record.pageUrl);
    if (record.url) lines.push((record.sourceKind === 'arxiv' ? 'arXiv 原文：' : '官方论文记录：') + record.url);
    lines.push('来源版本：' + (record.arxivId || (record.sourceKind === 'conference' ? '官方会议记录；未提供独立版本号' : '未确认')));
    var context = settings.context || {};
    if (context.heading && context.anchor) lines.push('博客章节：' + line(context.heading) + '；定位：' + url(context.anchor));
    var references = Array.from(new Set(selected.match(/(?:Figure|Fig\.?|图|Table|表)\s*[0-9]+[A-Za-z]?/gi) || []));
    if (references.length) lines.push('选段出现的图表编号：' + references.join('、') + '（仅为文本中的编号，未核验对应原图表）');
    lines.push(settings.source === 'original' ? '选段来源：用户声明来自原文，本站未核验。' : '选段来源：本站博客导读或用户粘贴，未核验为原论文逐字引用。');
    return lines.join('\n') + '\n\n' + selected;
  }
  function buildResearchPack(raw, options) {
    var record = normalize(raw);
    var settings = options || {};
    var lines = ['# 研究资料包：' + record.title, '', '身份状态：' + record.identityStatus,
      '本站导读：' + record.pageUrl, '官方记录：' + (record.url || '未确认'), '原文 PDF：' + (record.pdfUrl || '未确认'),
      '版本：' + (record.arxivId || '未提供'), '作者：' + (record.authors.join('；') || '未提供'),
      '出版日期：' + (record.date || '未提供'), 'DOI：' + (record.doi || '未提供'), '',
      '## 本站导读内容', '以下内容来自本页可见导读，不代表原论文逐字引用。', '', String(settings.content || '')];
    if (settings.selection) lines.push('', '## 个人选段', '个人选段来源未由本站核验。', '', String(settings.selection));
    if (Array.isArray(settings.links) && settings.links.length) lines.push('', '## 本页已有链接', ...settings.links.map(function (link) {
      return url(link.url) ? line(link.label) + '：' + url(link.url) : '';
    }).filter(Boolean));
    if (record.identityStatus === 'verified') {
      try { lines.push('', '## 引用（仅可得字段）', '```bibtex', formatCitation(record, 'bib'), '```'); }
      catch (_error) { lines.push('', '引用字段不足，未生成引用。'); }
    }
    return lines.join('\n') + '\n';
  }
  return { normalize: normalize, validDate: validDate, formatCitation: formatCitation, citation: formatCitation,
    buildPrompt: buildPrompt, buildResearchPack: buildResearchPack };
}));
