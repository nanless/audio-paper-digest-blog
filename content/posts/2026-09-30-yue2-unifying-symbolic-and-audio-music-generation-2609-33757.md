---
title: "YuE2: Unifying Symbolic and Audio Music Generation at Frontier Quality"
date: 2026-09-30
draft: false
tags: [歌唱生成, 混合专家模型, 符号音乐生成, 音乐, 自回归模型]
categories: [论文速递]
description: "YuE2 用同一模型先写包含旋律与和声的可读乐谱再生成语义与声学表示，在相同检查点对照中符号规划提升了专家感知的整体质量，并以可编辑的乐谱接口支持改编与零样本翻唱，但多候选筛选与自动指标仍带来额外代价与解释边界。"
hiddenInHomeList: true
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_arxiv_id: "2609.33757"
paper_digest_workbench_contract: "researcher-workbench-v1"
paper_digest_reader_title: "先写可读的谱再唱完整首歌：YuE2 用符号规划统一作曲与音频生成"
paper_digest_original_title: "YuE2: Unifying Symbolic and Audio Music Generation at Frontier Quality"
paper_digest_arxiv_version: null
paper_digest_arxiv_versioned_id: null
paper_digest_arxiv_abs_url: "https://arxiv.org/abs/2609.33757"
paper_digest_arxiv_pdf_url: "https://arxiv.org/pdf/2609.33757.pdf"
paper_digest_primary_task: "歌唱生成"
paper_digest_taxonomy_contract: "paper-taxonomy-flat-tags-compat-v1"
paper_digest_taxonomy_selection_contract: "paper-taxonomy-selection-v1"
paper_digest_taxonomy_registry_version: "paper-taxonomy-v1"
paper_digest_taxonomy_registry_sha256: "a3b75a149852076933ec2895de77c09c73667c8334bff046dde3b20b69ded03d"
paper_digest_taxonomy_concepts: [{"facet":"task","id":"task.singing","label":"歌唱生成"},{"facet":"method","id":"method.moe","label":"混合专家模型"},{"facet":"task","id":"task.symbolic-music","label":"符号音乐生成"},{"facet":"signal","id":"signal.music","label":"音乐"},{"facet":"method","id":"method.autoregressive","label":"自回归模型"}]
paper_digest_primary_method: "混合专家模型"
paper_digest_score: 8.9
paper_digest_rank_bucket: "前25%"
paper_digest_document_type: "模型报告"
paper_digest_one_sentence: "YuE2 用同一模型先写包含旋律与和声的可读乐谱再生成语义与声学表示，在相同检查点对照中符号规划提升了专家感知的整体质量，并以可编辑的乐谱接口支持改编与零样本翻唱，但多候选筛选与自动指标仍带来额外代价与解释边界。"
paper_digest_authors: [{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Ruibin Yuan"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Jiahao Pan"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Junyan Jiang"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Zhiyue Wu"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Ziya Zhou"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Jiankai Sun"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Yizhi Li"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Ge Zhang"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Yicheng Gu"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Zeyue Tian"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Junyu Dai"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Hanfeng Lin"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Kai Li"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Shangda Wu"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Xuanjie Liu"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Jiaming Wang"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Zihan Liu"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Yue Wang"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Yinghao Ma"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Hanzhi Yin"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Kangrui Chen"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Xinyue Zhang"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Ziyang Ma"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Mengqi Liao"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Hejia Zhao"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Guowei Huang"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Chao Yan"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Lei Ke"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Jianwei Yu"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Bei Liu"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Joe Guo"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Liumeng Xue"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Gus Xia"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Wei Xue"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Yike Guo"}]
paper_digest_abstract_sha256: "4dfaac5e68fb587240163157f32d085378e02edccdcbf4452ba9470564a30a70"
paper_digest_sidecars: {"citation.bib":{"sha256":"a2b9c679f02ebd6a7896fc8470915360415bdfd2e43f3a46b35bac8e9cf4079a","url":"/audio-paper-digest-blog/data/papers/2026-09-30/2609-33757/citation.bib"},"citation.json":{"sha256":"a068f9e6317d01d529ce88dc066fe66feedd2341d0872f4cf0d8c17ff1fdc0f3","url":"/audio-paper-digest-blog/data/papers/2026-09-30/2609-33757/citation.json"},"citation.ris":{"sha256":"f3ad0db5de21272ce0e56f2d2fc24f1dedb0958bf8a4b9bc678124d20f8190a4","url":"/audio-paper-digest-blog/data/papers/2026-09-30/2609-33757/citation.ris"},"rethink-context.json":{"sha256":"c3be50fdd7cfa4b94305004c96109819f28d3e6d34702fd5babab5992d807f1e","url":"/audio-paper-digest-blog/data/papers/2026-09-30/2609-33757/rethink-context.json"}}
paper_digest_api_reader_contract: "beginner-researcher-v3"
paper_digest_api_reader_article_sha256: "f9ac90cb63420dafe76608d6bb070336fa9444a392d85a49b0c7e4a87a047ef0"
paper_digest_api_reader_plan_sha256: "9a2aeb188aae98bf5ef43c2347e8497ba0bc31e57a03d9d3ff92563f7c09aece"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings-v4"
paper_digest_api_reader_source_bindings_sha256: "d09774c5601ad0f2b2ebb2b8fbf73bfb37c3d1ef5c805c0f5b1e188c7bfbdacc"
paper_digest_api_reader_source_table_count: 4
paper_digest_api_reader_source_formula_count: 2
paper_digest_api_reader_structured_artifacts_sha256: "f70d2d7a68ec34735d2b4f8541439d15499967ecfe9917ff3fd49c5baf7b8fa6"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity-v1"
paper_digest_api_reader_author_identity_sha256: "f5bf8d9973b02365a36a9baa2414945f78d3df842f04c42ea1d874b863aff1af"
paper_digest_api_reader_author_count: 35
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity-v1"
paper_digest_api_reader_resource_identity_sha256: "c03090f58f34543058f21ff1de051b6c5fa4ff4dec79c774f93f8bfff4e572d6"
paper_digest_api_reader_resource_count: 12
paper_digest_api_reader_figure_persistence: "ephemeral-no-persisted-figure-assets-v1"
paper_digest_api_reader_decision_projection: "api-reader-decision-projection-v2"
---

# 📄 先写可读的谱再唱完整首歌：YuE2 用符号规划统一作曲与音频生成

> 英文题目：*[YuE2: Unifying Symbolic and Audio Music Generation at Frontier Quality](https://arxiv.org/abs/2609.33757)*

> 标签：#歌唱生成 | #混合专家模型 | #符号音乐生成 | #音乐 | #自回归模型
>
> 评分：**8.9/10** | 创新 1.7/2 | 技术严谨 1.2/1.5 | 实验充分 1.3/1.5 | 清晰度 0.9/1 | 影响力 1.3/1.5 | 开源 1.2/1.5 | 可复现 0.3/0.5 | 工程/实践 1/1.5


## 👥 作者与机构

- Ruibin Yuan：机构信息未在 arXiv HTML 中可靠披露
- Jiahao Pan：机构信息未在 arXiv HTML 中可靠披露
- Junyan Jiang：机构信息未在 arXiv HTML 中可靠披露
- Zhiyue Wu：机构信息未在 arXiv HTML 中可靠披露
- Ziya Zhou：机构信息未在 arXiv HTML 中可靠披露
- Jiankai Sun：机构信息未在 arXiv HTML 中可靠披露
- Yizhi Li：机构信息未在 arXiv HTML 中可靠披露
- Ge Zhang：机构信息未在 arXiv HTML 中可靠披露
- Yicheng Gu：机构信息未在 arXiv HTML 中可靠披露
- Zeyue Tian：机构信息未在 arXiv HTML 中可靠披露
- Junyu Dai：机构信息未在 arXiv HTML 中可靠披露
- Hanfeng Lin：机构信息未在 arXiv HTML 中可靠披露
- Kai Li：机构信息未在 arXiv HTML 中可靠披露
- Shangda Wu：机构信息未在 arXiv HTML 中可靠披露
- Xuanjie Liu：机构信息未在 arXiv HTML 中可靠披露
- Jiaming Wang：机构信息未在 arXiv HTML 中可靠披露
- Zihan Liu：机构信息未在 arXiv HTML 中可靠披露
- Yue Wang：机构信息未在 arXiv HTML 中可靠披露
- Yinghao Ma：机构信息未在 arXiv HTML 中可靠披露
- Hanzhi Yin：机构信息未在 arXiv HTML 中可靠披露
- Kangrui Chen：机构信息未在 arXiv HTML 中可靠披露
- Xinyue Zhang：机构信息未在 arXiv HTML 中可靠披露
- Ziyang Ma：机构信息未在 arXiv HTML 中可靠披露
- Mengqi Liao：机构信息未在 arXiv HTML 中可靠披露
- Hejia Zhao：机构信息未在 arXiv HTML 中可靠披露
- Guowei Huang：机构信息未在 arXiv HTML 中可靠披露
- Chao Yan：机构信息未在 arXiv HTML 中可靠披露
- Lei Ke：机构信息未在 arXiv HTML 中可靠披露
- Jianwei Yu：机构信息未在 arXiv HTML 中可靠披露
- Bei Liu：机构信息未在 arXiv HTML 中可靠披露
- Joe Guo：机构信息未在 arXiv HTML 中可靠披露
- Liumeng Xue：机构信息未在 arXiv HTML 中可靠披露
- Gus Xia：机构信息未在 arXiv HTML 中可靠披露
- Wei Xue：机构信息未在 arXiv HTML 中可靠披露
- Yike Guo：机构信息未在 arXiv HTML 中可靠披露

## 📌 核心摘要

完整歌曲生成需兼顾作曲可读性与录音完成度，输入为风格文本与歌词，输出为全曲立体声录音，其难点在于无对齐乐谱录音难以同时学到旋律和声结构与声学细节。YuE2采用单AR-NAR混合专家三级渐进生成，先写可读ABC谱规定调式拍号段落和弦与人声器乐旋律，再将其扩展为25Hz语义令牌，最后经流匹配生成声学隐变量并由变分自编码器解码为波形。为构造对齐训练序列，冻结的SheetSage2提供符号监督，多视角目标合成支撑的MERT2提供语义监督，二者离线转录真实录音得到统一词汇与时间规约。与跳过乐谱的音频模型不同，该系统将旋律和声显式提交为可编辑中间态，同一检查点复用该接口支持受控编辑与零样本翻唱。在GTZAN基准下，SheetSage2-AR的节拍F1指标为86.27，高于SheetSage2-Prober的节拍F1指标82.93。在WildSongBench192提示词上标准双候选取得SongBench全局平均得分6.73，best-of-8达6.96为观测最高。其边界在于最优候选依赖音乐性指标排序、HeartMuLa 存在 SongEval 与 AudioBox 训练复用、翻唱放松和声约束后作品一致性与风格适配需权衡。训练时长与推理成本原文未披露。

## 🔗 开源与复现资源

- 代码相关资源：<https://github.com/multimodal-art-projection/YuE> — 链接可访问（HTTP 200）

- 模型相关资源：<https://huggingface.co/m-a-p/YuE2-3B> — 链接可访问（HTTP 200）

- 模型相关资源：<https://huggingface.co/m-a-p/MERT-v2-30s> — 链接可访问（HTTP 200）

- 模型相关资源：<https://huggingface.co/m-a-p/MERT-v2-FullSong> — 链接可访问（HTTP 200）

- 模型相关资源：<https://huggingface.co/m-a-p/SheetSage2> — 链接可访问（HTTP 200）

- 模型相关资源：<https://huggingface.co/m-a-p/YuE2-Vae> — 链接可访问（HTTP 200）

- 模型相关资源：<https://huggingface.co/m-a-p/YuE2-Vae-legacy> — 链接可访问（HTTP 200）

- 数据相关资源：<https://huggingface.co/datasets/m-a-p/WildSongBench> — 链接可访问（HTTP 200）

- 演示资源：<https://map-yue2.github.io/> — 链接可访问（HTTP 200）

- 复现相关资源：<https://huggingface.co/datasets/m-a-p/WildSongBench> — 链接可访问（HTTP 200）

- 第三方资源：<https://music-ir.org/mirex/wiki/2025:Audio_Key_Detection> — 链接可访问（HTTP 200）

- 第三方资源：<https://rockcorpus.midside.com/melodic_transcriptions.html> — 链接可访问（HTTP 200）

可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 输入是什么，输出是什么，哪些信息必须保留？

这篇解读的输入是论文正文证据与官方原图像素，目标是让刚进入音频领域的研究生能复述 YuE2 的方法与实验条件。必须保留的信息是任务定义、表示层级、模型分工、监督来源、评估协议与关键数字，输出是 1 篇可核对的技术解读。

YuE2 研究的任务是完整歌曲生成。输入是风格文本与歌词，输出是数分钟的立体声成品歌曲。论文把创作看作渐进承诺：文本与歌词先定意图，乐谱再固定旋律、和声、节奏与曲式，演出与音频最后解决音色、 articulation 与制作。传统符号模型止于可读作曲，音频模型直接产出录音但作曲隐式，YuE2 要让同一模型走完这个层级。

为理解这种层级，先看金字塔示意的教学导读。该图把从意图到波形的决策逐层堆叠，越向上越稀疏可读，越向下越稠密难改，中间的谱是可检查的承诺点。

> **看图路径：** 1. 从金字塔顶端向下读出文本加歌词、符号谱、语义 token、声学隐变量与波形的层级；2. 观察越向下承诺的细节越多，但上层符号仍保持可检查；3. 对照正文说的谱与声音之间留有演绎空间

[![原论文 Figure 2：YuE2 progressively commits to musical detail while keeping the symbolic score explicit and…](https://arxiv.org/html/2609.33757v1/music_hierarchy.svg)](https://arxiv.org/html/2609.33757v1/music_hierarchy.svg)

*论文图 2。原论文 Figure 2:：“YuE2 progressively commits to musical detail while keeping the symbolic score explicit and inspectable.”。*

像素显示金字塔从上到下依次为文本加歌词、符号谱、语义 token、声学隐变量与波形，纵轴标注渐进承诺方向。符号层用音符示意，语义与声学层用色块序列示意，波形层用波形示意。这支持正文说法：每阶段固定一部分决策，剩余选择留给下层，谱与声音之间留有演绎空间。初学者例子：把同一句歌词先写成主歌谱，再换编曲渲染，谱相同但声音可以不同，这就是层级带来的可解释性。

### 同输入同目标的路线如何对照？

按同输入、同目标、同监督作对照。音频生成路线以 MusicLM、MusicGen 等为代表，输入文本条件、输出离散音频表示或连续音频，作曲过程隐式。符号生成路线以可读谱为输出，旋律与和声显式但通常止于成品录音之前。YuE2 的差异是有源可核对的：它在同一检查点内同时生成符号与音频，并用对照证明规划改善了成品。

表示学习路线上，MERT、MuQ、MusicFM 等提供音乐理解基线，YuE2 引入的 MERT2 在 MARBLE 上报告了新的领先结果。转录路线上，Beat This、ChordFormer、SongFormer 等分别专攻节拍、和弦与结构，SheetSage2 则用一个模型联合预测旋律、和弦、调式、节拍与段落。类别差异不能当作同条件胜负，论文的比较都固定了评估集与协议，相关工作节只记这种对照关系。

另一个相关设计是语言模型加扩散 Transformer 的分离结构。许多近期歌曲系统用自回归语言模型预测语义 token，再用独立扩散 Transformer 生成声学。YuE2 用统一混合 Transformer 替代这种分离，论文在相同数据量与相同规划方法下做了直接比较，细节在结果节展开。

### 要回答的核心问题是什么？

核心问题有两个。第一，先写谱是否让最终歌曲更好听，而不只是更可解释。论文用同一检查点、同一提示、同一候选预算与同一解码器比较有规划与无规划生成，由专家盲听评价整体质量与音乐性。第二，语义预测与声学生成应该分开训练还是联合学习。论文比较统一混合 Transformer 与分离的语言模型加扩散结构，固定表示与规划方法。

附带问题是监督从何而来。普通音频语料没有对齐的音符、和弦、节拍与段落，论文因此构造 MERT2 语义监督与 SheetSage2 符号监督。评估问题是如何在野外用户请求上度量歌曲质量、提示 adherence 与歌词准确性，论文用 WildSongBench 的 192 个提示与自动加专家两套证据回答。

### 一个样本如何走完输入到输出？

沿一个样本走完全程。输入是风格描述文本与歌词 y。模型先生成符号作曲 s，内容包括速度、拍号、调号、小节线、段落标记、和弦符号与人声及乐器旋律声部，采用 ABC 文本记谱并用字节对编码序列化。然后生成 25 赫兹的 MERT2 语义 token 序列 c，它提供乐谱难写密的稠密音乐走向。最后生成 25 赫兹、64 维的连续声学隐变量 z，再经单独训练的 48 千赫立体声变分自编码器解码为波形。创作、编辑与翻唱的区别只在谱从何来：创作由模型生成，编辑由用户提供修改谱，翻唱由 SheetSage2 从参考录音转写得到，下游语义与声学由同一 YuE2 检查点生成。

**符号作曲规划 × 语义音乐 token：** 符号作曲规划负责写出人可读、可改的旋律、和弦、调式、拍号、速度与段落，语义音乐 token 负责补足乐谱难写密的连续音乐走向，两者搭配的理由是前者先固定作曲决策、后者再把剩余演绎细节带给声学生成，组合意义是同一检查点既能检查作曲又能渲染完整歌曲。

下图是方法全景的导读。顶部从左到右是符号谱、语义、声学隐变量与生成音频，底部是离线目标构造，中间是因果预测与流预测共享混合注意力。

> **看图路径：** 1. 沿顶部从符号谱经语义到声学隐变量再到 VAE 解码的主路径看生成顺序；2. 比较下方离线目标分支如何从训练音频得到谱、token 与隐变量；3. 确认创作、翻唱与编辑三种模式在何处接入同一检查点

[![原论文 Figure 3：Composing in symbols, performing in audio.](https://arxiv.org/html/2609.33757v1/yue2_overview.png)](https://arxiv.org/html/2609.33757v1/yue2_overview.png)

*论文图 3。原论文 Figure 3:：“Composing in symbols, performing in audio.”。*

像素显示顶部符号谱框内有五线谱与和弦标记，语义框为圆点序列，声学框为色块矩阵，右侧经 VAE 得到波形。中间左侧为因果专家含前馈与因果查询键值，右侧为双向非自回归专家预测流速度，中间横跨混合自注意力。底部训练音频分别经 SheetSage2、MERT2 加量化与 VAE 编码器得到 3 类目标。这对应正文的创建、翻唱与编辑 3 种接口共用同一检查点的说法。

### 混合 Transformer 的两种信息流如何分工？

符号与语义是离散有序序列，用因果方式预测。声学隐变量在完整规划已知后可用全局上下文，用双向流匹配生成。YuE2 在 28 层主干中实现两种计算：每层有各自的归一化、查询键值投影与多层感知机专家，但共享 1 次注意力计算。离散位置不能读声学目标，声学状态可读全部文本、谱与语义并在隐变量序列内双向通信。声学位置用噪声隐变量投影替代词嵌入，结合时间与帧位置嵌入，用线性头预测流速度，多帧在每次速度评估中并行更新。

**自回归流 × 非自回归流：** 自回归流负责按顺序预测离散的符号与语义序列，非自回归流负责在完整规划条件下双向预测连续声学隐变量的流速度，两者搭配的理由是作曲需要因果顺序而声学渲染需要全局上下文，组合意义是在 28 层共享注意力的混合 Transformer 中一次实现作曲与表演两种信息流。

整体生成可写成条件分解，符号含义是 s 为符号作曲、c 为语义 token、z 为连续声学隐变量。

\[p_{\theta}(s,c,z\mid y)=p_{\theta,\mathrm{AR}}(s,c\mid y)\,p_{\theta,\mathrm{NAR}}(z\mid y,s,c).\]

该式目标是把联合分布拆为自回归部分预测符号与语义、非自回归部分在给定文本、谱与语义下生成声学。训练时 4 种任务混合，分别保留或省略谱与语义，使同一检查点支持有无规划的匹配比较。自回归流用下 1 token 交叉熵，声学流用条件流匹配损失，两者按权重联合优化。ABC 与语义共用文本词表但分属不相交区间，类型掩码防止互相发射对方符号，ABC 采样不加语法约束。

### 三类监督与联合目标如何构造？

对每段训练录音 x，3 条冻结分析路径离线构造对齐视图，分别经 SheetSage2 得到谱，经 MERT2 分词器得到语义，经 VAE 得到声学隐变量。这些构造器在训练前运行，转录用双向全曲上下文，语义分词用因果注意力以对齐生成器的从左到右顺序。YuE2 训练语料约为 346000 小时，主模型约 3,580,000,000 参数，整曲打包进 24576 位置上下文而不跨样本切分歌曲，文本与歌词可分别或同时丢弃以支持无分类器引导。

**MERT2 × SheetSage2：** MERT2 负责从录音离线构造稠密语义监督，SheetSage2 负责从录音恢复可读主歌谱，分工是前者提供 25 赫兹语义 ID、后者提供符号乐谱目标，搭配理由是普通音频语料缺少对齐的音符与和弦标注，组合意义是让 YuE2 能从无对齐谱的录音中学到从谱到音频的层级。

MERT2 目标合成的导读如下。左侧离线合成把同一录音的两种冻结编码器特征融合进共享残差量化瓶颈，中间基础预训练从掩码音频预测缓存编码，右侧分叉为全曲双向延续与因果分词课程。

> **看图路径：** 1. 先看 A 分支两个冻结编码器如何汇入共享量化瓶颈；2. 再看 B 分支掩码音频如何预测四路缓存编码；3. 比较 C 分支全曲双向延续与因果 tokenizer 分支的分叉点

[![原论文 Figure 4：MERT2 learns from discrete targets jointly derived from two encoder views of the same audio.](https://arxiv.org/html/2609.33757v1/mert2_ssl.png)](https://arxiv.org/html/2609.33757v1/mert2_ssl.png)

*论文图 4。原论文 Figure 4:：“MERT2 learns from discrete targets jointly derived from two encoder views of the same audio.”。*

像素显示 A 栏底部为音频经 MuQ 层与 Qwen2-Audio 层再经拼接投影与残差量化得到 4 路 25 赫兹编码，B 栏为掩码音频经对数梅尔与 ConvNeXt 进 24 层双向 Conformer 再线性预测，C 栏上支为全曲双向 Conformer 做转录，下支为因果 Conformer 走分词课程。这对应正文多视角目标合成与 4 阶段课程的描述。

联合优化目标是自回归损失与流匹配损失的加权和，权重为 0.25 乘自回归加流匹配。

\[\mathcal{L}=0.25\mathcal{L}_{\mathrm{AR}}+\mathcal{L}_{\mathrm{FM}}.\]

该式中自回归项只对生成载荷与结束符计算，流匹配项对非填充声学位置计算 64 维均方误差。训练分 3 个阶段：先自回归预训练 60000 步，再联合训练 40000 步，最后退火 6000 步，非自回归专家由自回归对应部分初始化。分词器另有因果适配、歌词与梅尔色度监督、32 维 32768 词条聚类量化的 4 步课程，部署只保留前端、0 至 13 层与量化器，每 40 毫秒输出一个语义 ID，名义码率为 375 比特每秒。

### 在什么提示、基线与指标下比较？

系统比较用 WildSongBench，共 192 个野外用户请求，覆盖 15 个风格桶，其中中文 94 条、英文 98 条，保留自然中英混杂。用户提示文本与歌词经各模型原生接口输入。自动评估报告 SongBench 音乐性与全局平均、SongEval 音乐性与全局平均、Qwen3-Omni 提示 adherence、音素错误率，以及 AudioBox 生产质量与 MuQ-MuLan、AllMusicCaps 音频文本对齐。SongBench 全局平均为 7 维均值，SongEval 全局平均为 5 维均值，Q3O 为 0 至 5 分的提示加权分。

公开基线包括 YuE1、SongBloom、LeVo 2、ACE-Step 1.5、HeartMuLa、DiffRhythm 2、Muse 与 MiniMax Music 3，用公开权重与官方改写器。专有比较包括 Suno 多个版本与 Mureka 9 等。标准比较为每提示两候选选口音素错误率更低者，YuE2 八候选按音乐性、Q3O 再错误率筛选，两种 YuE2 设置都用符号规划。专家听评用 351 场参与、4439 组保留成对评价中的专家子集，评价整体质量、音乐性、文本对齐、音质、人声与伴奏 6 维，隐藏系统身份并随机左右顺序。

资源状态依据本次收到的官方像素核对：代码仓库当前可用，模型 YuE2-3B、MERT 两个版本、SheetSage2 与 VAE 当前可用，数据集 WildSongBench 当前可用，演示页当前可用，可作为复现起点。

### 完整歌曲质量与规划增益的证据是什么？

先看自动指标的比较问题：在相同 192 提示与相同选择预算下，YuE2 是否在公开系统中领先，八候选上限又落在何处。指标方向是 SongBench 越高越好，生产质量越高越好，口音素错误率越低越好。两种 YuE2 设置都使用符号规划，标准比较从每提示两候选选低口音素错误率输出，八候选按音乐性再提示 adherence 再错误率筛选。

| 设置 | SongBench 音乐性 | SongBench 全局平均 | 选择预算 | 选择规则 |
| --- | --- | --- | --- | --- |
| YuE2 常规 | 5.9075 | 6.7316 | 每提示两候选 | 低错误率留一 |
| YuE2 八候选 | 6.2666 | 6.9632 | 每提示八候选 | 音乐性优先再错误率 |
| 公开基线最强对照 | 低于上述常规值 | 低于上述常规值 | 同为两候选 | 同规则 |

表后解释：常规两候选已领先所有被评估公开系统的音乐性与全局平均，八候选达到所有被评估系统的最高观测均值。代价是候选与计算翻倍，且 AudioBox 等未参与筛选的指标只作补充，未参与筛选的生产质量同样超过所有被评估专有系统。未胜出项是 SongEval 上 HeartMuLa 更高，但该系统报告在后训练中用过 SongEval 与 AudioBox 筛选数据，存在评估器复用，需谨慎解读。专家听评中八候选对 Suno v4.5 整体偏好占优，对 Suno v5 接近持平，对 Suno v6 则对方占优，音质平均偏好是其相对强项。

**乐谱编辑 × 翻唱生成：** 乐谱编辑负责由用户提供修改后的谱并重新生成下游语义与声学，翻唱生成负责由 SheetSage2 从参考录音转写谱再换风格渲染，分工是前者改局部作曲内容、后者迁移整首作品身份，搭配理由是两者共用同一谱接口与同一生成检查点，组合意义是作曲修改与风格迁移不需要重新训练专用模型。

再看符号规划的直接对照。比较问题是同一检查点有无旋律加和弦规划是否改变感知质量，公平条件是提示、歌词、候选预算与解码器全固定，每条件每提示两候选选低错误率输出，专家匿名随机成对听评至少 30 秒。

| 评价维度 | 偏好有规划 | 偏好无规划 | 其余为持平 | 判断口径 |
| --- | --- | --- | --- | --- |
| 整体质量 | 49.3% | 34.6% | 持平补足 | 同题 211 有效判断 |
| 音乐性 | 45.0% | 29.4% | 持平补足 | 同题 211 有效判断 |
| 旋律 | 44.0% | 29.5% | 持平补足 | 每项 200 判断 |
| 和弦进行 | 39.0% | 21.0% | 持平补足 | 每项 200 判断 |

表后解释：有规划在整体与音乐性上均获更多偏好，且旋律与和弦单项也占优，支持先定作曲再渲染的安排。代价是规划需额外生成谱 token。专家修正的配对谱例显示有规划版本的主歌动机在副歌高八度再现，无规划版本重复同一音高模式，和声连续性也较弱，但这只是单例展示，不能推广为每首必现。

专家对专有系统的偏好导读如下。左右列分别为常规与八候选，上排整体、下排音质，深蓝偏向 YuE2、浅蓝偏向基线，中间为持平。

> **看图路径：** 1. 先区分左右两列常规设置与八候选设置的条件；2. 再按行比较与不同专有系统的整体与音质偏好条带；3. 注意深蓝、浅蓝与中间 ties 各自的含义

[![原论文 Figure 7：Expert preferences against proprietary song generators.](https://arxiv.org/html/2609.33757v1/arena_frontier.svg)](https://arxiv.org/html/2609.33757v1/arena_frontier.svg)

*论文图 7。原论文 Figure 7:：“Expert preferences against proprietary song generators.”。*

像素显示八候选对 Suno v4.5 整体与音质多为深蓝占优，对 Suno v5 接近均衡，对 Suno v6 浅蓝占比较高，音质在多数行仍偏向 YuE2 一侧。上排常规整体对 v4.5 为 50% 对 38% 持平 12%，八候选整体对 v4.5 为 57% 对 31% 持平 12%；八候选整体对 v5 为 40% 对 40% 持平 20%，与正文报告的 57.3% 对 30.5% 胜 Suno v4.5、40.4% 对 39.9% 持平 Suno v5 的整体偏好一致，自动指标与专家偏好共同构成互补证据。

### 谱音频一致性与统一架构的反证是什么？

谱音频一致性检验生成音频是否真跟随所给谱。方法是用转写比对记谱音高与速度，旋律与和弦用一减归一化编辑距离，调式用主音加调式精确与加权一致，节奏用声乐起音间隔 F1，速度用对数比与 8% 容差准确率。

| 音频条件 | 旋律序列相似度 | 和弦序列相似度 | 调精确一致 | 速度 8% 准确率 |
| --- | --- | --- | --- | --- |
| 对应录音 | 0.9464 | 0.9246 | 0.9307 | 0.9869 |
| 错配录音 | 0.2160 | 0.2473 | 0.3004 | 0.6806 |
| 无谱生成 | 0.2055 | 0.1897 | 0.2234 | 0.5366 |

表后解释：对应录音远高于同提示错配录音，说明恢复内容指向特定作曲而不只是共享文本提示。允许整曲移调后优势仍在，说明不只是全局调性差异。限制是转写器本身参与度量，专家虽校对转写，但指标仍在该录音队列上开发，未在全新队列上重复。

统一架构对照固定表示与规划，比较统一混合 Transformer 与分离语言模型加扩散。两系统训练数据量匹配，分离基线语言模型与扩散各 1,700,000,000 参数共 3,400,000,000，对统一模型 3,580,000,000。专家在有旋律加和弦规划下更偏好统一模型，覆盖整体、音乐性、音质、人声与伴奏，无规划下整体等维度同样偏好统一模型。这支持联合学习语义预测与声学生成的选择，但未报告延迟与训练成本的完整分解，不能据此承诺推理更快。

### 编辑、翻唱与理解力的边界在哪里？

受控编辑检验局部改谱是否只改目标并保留未改内容。旋律、和声与节奏编辑作用于首段副歌至多四小节，调式与速度作用于整谱，共 3844 段录音全部保留。

| 编辑类型 | 依从指标 | 得分 |
| --- | --- | --- |
| 旋律 | 目标音高准确率 | 84.17 |
| 和声 | 目标和弦一致 | 79.54 |
| 节奏 | 相对起音准确率 | 73.43 |
| 调式 | 加权调得分 | 90.58 |
| 速度 | Acc2 | 95.68 |

表后解释：局部编辑达到较高依从，未改旋律与和声保留在 90.16% 至 94.34% 之间，SongBench 质量与未编辑对照接近。代价是节奏覆盖率约 80%，未解析对应计为 miss，调速全局变化仍可能影响演唱自然度。未胜出或未评测边界是极端改写与长曲 6 分钟截断样本的处理，论文保留但未单独分解。

**最佳候选选择 × 两候选基线比较：** 两候选基线比较负责在每个提示只选口音素错误率更低的一个输出以对齐各系统 Best-of-8 负责从八个候选按音乐性、提示 adherence 与错误率筛选，分工是前者保证公平预算、后者探索质量上限，搭配理由是生成质量随筛选预算变化，组合意义是报告时必须区分可部署的常规设置与事后筛选的最优值。

翻唱用 948 个 SHS100K 测试作品评估作品身份保持，每法每作品四输出共 3792 输出无筛选。完整谱的 CLEWS 与 Discogs-VINet 平均精度达 0.647 与 0.288，高于 SongEcho 的 0.419 与 0.122，去掉和弦与去掉整谱后检索下降，但风格对齐与质量分上升，说明保留源和声利于忠实、放松利于适配目标风格。理解力上 MERT2 在 15 项 MARBLE 指标中领先 14 项，全曲延续版本仍接近，375 比特每秒分词器在六项量化探针中领先五项。SheetSage2 单模型在 15 对基准指标中领先 12 对，并在 10 对上超过其标签生成器。这些是直接报告，相关性不等于因果，延迟与误判率未测量时不作改善承诺。

### 复现先做什么，需要哪些权重与数据？

先从可用资源拉取代码与权重。代码仓库、YuE2-3B、MERT 全曲与 30 秒版本、SheetSage2、VAE 与 WildSongBench 数据集本次均确认可用，演示页可试听。复现常规两候选结果时，用 192 提示经原生接口生成两候选，每候选 4 次自动语音识别取最低口音素错误率再选优，自动指标覆盖全部 192 首。八候选需按音乐性、Q3O 再错误率的顺序筛选，不能把事后最优当作可部署收益。

转写与分词复现需固定 24 千赫单声道、300 秒窗与重叠、语法约束贪心解码等细节，节拍容差 70 毫秒、旋律 50 毫秒起音容差需与原文一致。翻唱复现需排除训练重叠作品，用相同检索库与相同目标风格描述。训练复现需注意 3 阶段学习率与打包不切歌，硬件为 64 卡 H800、全局批量 256，退火仅 6000 步，缺失的梯度路径与未报告超参不要自行补齐。

### 何时值得尝试这种先谱后声的路线？

当需要可检查、可改的作曲与完整歌曲同时交付时值得尝试。同一谱接口把创作、编辑与翻唱统一，外部语言模型可把用户反馈改写为 ABC 修订再渲染，案例中的多步改编展示了这种智能体编辑的可行性。当只需要最快产出单首 Demo 或对延迟敏感时，符号规划的额外 token 与多候选筛选是明确代价，应先用两候选常规设置验证。

还需补的验证是全新提示队列上的转写一致性、不同标注者下的专家偏好稳定性，以及推理开销与输出帧率的实测分解。总体趋势不等于每组必胜，论文特有的误解是把自动指标领先等同于人评全面胜出，原文已用 Suno v6 的反例说明两者可以分歧。复述方法是：先写谱、再补语义、最后流匹配声学，3 类监督离线来自 SheetSage2、MERT2 与 VAE，评估固定提示、预算与解码器后同时看自动与专家证据。

<details>
<summary>📎 论文与评分元数据</summary>

排名：前25% | 文档类型：模型报告 | [arXiv 原文](https://arxiv.org/abs/2609.33757)

</details>

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。

- 评分规则：type-aware-v1

- 评分模型：muse-spark-1.3-contributor

- 评分请求协议：openai_responses

---

[← 返回 2026-09-30 语音/音乐/音频论文速递](/audio-paper-digest-blog/posts/2026-09-30/)
