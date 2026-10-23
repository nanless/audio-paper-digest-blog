---
title: "Qwen-Audio-3.1-ASR Technical Report"
date: 2026-10-23
draft: false
tags: [语音识别, 指令微调, 说话人分离标注, 音频字幕生成, 多语言]
categories: [论文速递]
description: "Qwen-Audio-3.1-ASR 针对说什么、谁何时说、音频还传达什么三个问题，用音频编码器加指令控制解码统一转写、说话人日志转写与音频理解，并用加权说话人损失、帧对齐时间戳、强化学习与多教师蒸馏改进结构化输出，在多语、方言、说话人日志与音频理解评测上给出条件明确的对比结果。"
hiddenInHomeList: true
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_arxiv_id: "2610.28711"
paper_digest_workbench_contract: "researcher-workbench-v1"
paper_digest_reader_title: "Qwen-Audio-3.1-ASR：从语音转写到说话人与音频理解"
paper_digest_original_title: "Qwen-Audio-3.1-ASR Technical Report"
paper_digest_arxiv_version: 1
paper_digest_arxiv_versioned_id: "2610.28711v1"
paper_digest_arxiv_abs_url: "https://arxiv.org/abs/2610.28711v1"
paper_digest_arxiv_pdf_url: "https://arxiv.org/pdf/2610.28711v1.pdf"
paper_digest_primary_task: "语音识别"
paper_digest_tags_contract: "paper-tag-flat-tags-v2"
paper_digest_tags_selection_contract: "paper-tag-selection-v2"
paper_digest_tags_registry_version: "paper-tag-catalog-v2"
paper_digest_tags_registry_sha256: "cdef54423b5dfc00a1d017ef6639446d2ecd1d9c1acf71c8eb4f6219a46b7ba8"
paper_digest_tags_concepts: [{"facet":"task","id":"task.asr","label":"语音识别"},{"facet":"method","id":"method.instruction-tuning","label":"指令微调"},{"facet":"task","id":"task.diarization","label":"说话人分离标注"},{"facet":"task","id":"task.audio-captioning","label":"音频字幕生成"},{"facet":"setting","id":"setting.multilingual","label":"多语言"}]
paper_digest_primary_method: "指令微调"
paper_digest_score: 7.3
paper_digest_rank_bucket: "前50%"
paper_digest_document_type: "模型报告"
paper_digest_one_sentence: "Qwen-Audio-3.1-ASR 针对说什么、谁何时说、音频还传达什么三个问题，用音频编码器加指令控制解码统一转写、说话人日志转写与音频理解，并用加权说话人损失、帧对齐时间戳、强化学习与多教师蒸馏改进结构化输出，在多语、方言、说话人日志与音频理解评测上给出条件明确的对比结果。"
paper_digest_authors: [{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Chuanmeng Bian"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Daren Chen"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Peixin Chen"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Zhigao Chen"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Chong Deng"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Zhiyun Fan"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Zhifu Gao"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Bo Gong"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Qing Gu"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Jiajun He"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Yawei Hu"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Yunjie Ji"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Wei Ju"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Jingbei Li"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Xiangang Li"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Xu Li"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Zengxi Li"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Zheng Li"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Chengdong Liang"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Baiji Liu"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Yaming Liu"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Ying Liu"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Bin Ma"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Yiping Peng"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Yuezhang Peng"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Zhendong Peng"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Yu Pu"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Yang Shi"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Xin Shu"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Jian Tang"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Biao Tian"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Peiyao Wang"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Tianzi Wang"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Wen Wang"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Wupeng Wang"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Cheng Wen"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Yuzhong Wu"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Zijian Xia"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Yunchong Xiao"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Nan Yang"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Jianwei Yu"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Jixing Yu"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Binbin Zhang"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Lei Zhang"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Sitong Zhao"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Guangdong Zhou"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Yuan Zhou"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Jianheng Zhuo"}]
paper_digest_abstract_sha256: "6ea2f94febf758cf788ff1e511c38d0e5710de3778baff2092156951928a1ec7"
paper_digest_sidecars: {"citation.bib":{"sha256":"ce7179e8381fdb3cd7bd2e695460e57180d43603a84b53e0af8e380823395353","url":"/audio-paper-digest-blog/data/papers/2026-10-23/2610-28711/citation.bib"},"citation.json":{"sha256":"58af61cce5635d452c43173e16cd257b980038ea5e66c6252681fb681c25db2c","url":"/audio-paper-digest-blog/data/papers/2026-10-23/2610-28711/citation.json"},"citation.ris":{"sha256":"b6e53ac3c921945e40522bd4439a3a55fe1d8e571c08db1815778ff39eb7b561","url":"/audio-paper-digest-blog/data/papers/2026-10-23/2610-28711/citation.ris"},"rethink-context.json":{"contract":"paper-research-context-v2","sha256":"d1ef8ed5051c5d04eba072c6c5ccd49f42f588396d2c932610d7f034be68c872","url":"/audio-paper-digest-blog/data/papers/2026-10-23/2610-28711/rethink-context.json"}}
paper_digest_api_reader_contract: "beginner-researcher-v3"
paper_digest_api_reader_article_sha256: "5cd388884c34e1a27d182ac839656d63b623881b9b65a1ac0d7ae401c9c959ce"
paper_digest_api_reader_plan_sha256: "9a84fea0043797793fe678d6291f1183b3fdb3ac9aa37a905a70df276a88e462"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings-v4"
paper_digest_api_reader_source_bindings_sha256: "194872ef1877bca19beaf8d50551936646054cdcb923dc040316d5047de31e14"
paper_digest_api_reader_source_table_count: 4
paper_digest_api_reader_source_formula_count: 4
paper_digest_api_reader_structured_artifacts_sha256: "ff618a84f7f0b64de519581b74b403ad045a63cfc55189592e0fc9a3f557170e"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity-v1"
paper_digest_api_reader_author_identity_sha256: "6a62f8d3dee2f49f5fb3a2755d802987682aff9e842f2df5f3d0f29adaa0b2c0"
paper_digest_api_reader_author_count: 48
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity-v1"
paper_digest_api_reader_resource_identity_sha256: "83a516060b9af89602c661738af430c12584193574e333b5a1db45612800a350"
paper_digest_api_reader_resource_count: 1
paper_digest_api_reader_figure_persistence: "ephemeral-no-persisted-figure-assets-v1"
paper_digest_api_reader_decision_projection: "api-reader-decision-projection-v2"
---

# 📄 Qwen-Audio-3.1-ASR：从语音转写到说话人与音频理解

> 英文题目：*[Qwen-Audio-3.1-ASR Technical Report](https://arxiv.org/abs/2610.28711v1)*

<!--paper-tag-hierarchy-v1:start-->

**研究分类**

- **研究任务**：[语音识别](/audio-paper-digest-blog/papers/?concept=task.asr)；[说话人分离标注](/audio-paper-digest-blog/papers/?concept=task.diarization)；[音频理解](/audio-paper-digest-blog/papers/?concept=task.audio-understanding) → [音频字幕生成](/audio-paper-digest-blog/papers/?concept=task.audio-captioning)
- **研究方法**：[指令微调](/audio-paper-digest-blog/papers/?concept=method.instruction-tuning)
- **研究条件**：[多语言](/audio-paper-digest-blog/papers/?concept=setting.multilingual)

<!--paper-tag-hierarchy-v1:end-->

> 评分：**7.3/10** | 创新 1.3/2 | 技术严谨 1.2/1.5 | 实验充分 1.3/1.5 | 清晰度 0.8/1 | 影响力 1.2/1.5 | 开源 0/1.5 | 可复现 0.1/0.5 | 工程/实践 1.4/1.5


## 👥 作者与机构

- Chuanmeng Bian：机构信息未能在本次解析中与作者逐人可靠绑定
- Daren Chen：机构信息未能在本次解析中与作者逐人可靠绑定
- Peixin Chen：机构信息未能在本次解析中与作者逐人可靠绑定
- Zhigao Chen：机构信息未能在本次解析中与作者逐人可靠绑定
- Chong Deng：机构信息未能在本次解析中与作者逐人可靠绑定
- Zhiyun Fan：机构信息未能在本次解析中与作者逐人可靠绑定
- Zhifu Gao：机构信息未能在本次解析中与作者逐人可靠绑定
- Bo Gong：机构信息未能在本次解析中与作者逐人可靠绑定
- Qing Gu：机构信息未能在本次解析中与作者逐人可靠绑定
- Jiajun He：机构信息未能在本次解析中与作者逐人可靠绑定
- Yawei Hu：机构信息未能在本次解析中与作者逐人可靠绑定
- Yunjie Ji：机构信息未能在本次解析中与作者逐人可靠绑定
- Wei Ju：机构信息未能在本次解析中与作者逐人可靠绑定
- Jingbei Li：机构信息未能在本次解析中与作者逐人可靠绑定
- Xiangang Li：机构信息未能在本次解析中与作者逐人可靠绑定
- Xu Li：机构信息未能在本次解析中与作者逐人可靠绑定
- Zengxi Li：机构信息未能在本次解析中与作者逐人可靠绑定
- Zheng Li：机构信息未能在本次解析中与作者逐人可靠绑定
- Chengdong Liang：机构信息未能在本次解析中与作者逐人可靠绑定
- Baiji Liu：机构信息未能在本次解析中与作者逐人可靠绑定
- Yaming Liu：机构信息未能在本次解析中与作者逐人可靠绑定
- Ying Liu：机构信息未能在本次解析中与作者逐人可靠绑定
- Bin Ma：机构信息未能在本次解析中与作者逐人可靠绑定
- Yiping Peng：机构信息未能在本次解析中与作者逐人可靠绑定
- Yuezhang Peng：机构信息未能在本次解析中与作者逐人可靠绑定
- Zhendong Peng：机构信息未能在本次解析中与作者逐人可靠绑定
- Yu Pu：机构信息未能在本次解析中与作者逐人可靠绑定
- Yang Shi：机构信息未能在本次解析中与作者逐人可靠绑定
- Xin Shu：机构信息未能在本次解析中与作者逐人可靠绑定
- Jian Tang：机构信息未能在本次解析中与作者逐人可靠绑定
- Biao Tian：机构信息未能在本次解析中与作者逐人可靠绑定
- Peiyao Wang：机构信息未能在本次解析中与作者逐人可靠绑定
- Tianzi Wang：机构信息未能在本次解析中与作者逐人可靠绑定
- Wen Wang：机构信息未能在本次解析中与作者逐人可靠绑定
- Wupeng Wang：机构信息未能在本次解析中与作者逐人可靠绑定
- Cheng Wen：机构信息未能在本次解析中与作者逐人可靠绑定
- Yuzhong Wu：机构信息未能在本次解析中与作者逐人可靠绑定
- Zijian Xia：机构信息未能在本次解析中与作者逐人可靠绑定
- Yunchong Xiao：机构信息未能在本次解析中与作者逐人可靠绑定
- Nan Yang：机构信息未能在本次解析中与作者逐人可靠绑定
- Jianwei Yu：机构信息未能在本次解析中与作者逐人可靠绑定
- Jixing Yu：机构信息未能在本次解析中与作者逐人可靠绑定
- Binbin Zhang：机构信息未能在本次解析中与作者逐人可靠绑定
- Lei Zhang：机构信息未能在本次解析中与作者逐人可靠绑定
- Sitong Zhao：机构信息未能在本次解析中与作者逐人可靠绑定
- Guangdong Zhou：机构信息未能在本次解析中与作者逐人可靠绑定
- Yuan Zhou：机构信息未能在本次解析中与作者逐人可靠绑定
- Jianheng Zhuo：机构信息未能在本次解析中与作者逐人可靠绑定

## 📌 核心摘要

读者需要理解的对象是一段可能含多说话人、方言、噪声和音乐环境声的录音，困难在于既要写对文字，又要分清谁在何时说话，还要回答录音中超出文字的声学问题，处理过程是把波形变成声学表示后再按任务指令生成不同形式的文本。Qwen-Audio-3.1-ASR 家族沿用音频编码器加适配器加语言模型解码器的结构，输入波形经编码器和适配器得到音频嵌入，解码器同时看到音频嵌入、任务指令和可选文本条件，输出转写、带说话人标签和时间戳的结构化记录或音频描述与答案。训练按音频编码器预训练、音频语言模型预训练、冷却适配、有监督微调、强化学习和在策略蒸馏六个阶段推进，冻结与更新的对象在各阶段不同，部署按文件转写、流式、交互语音、非流式和增强理解划分能力，流式不支持说话人分离与通用理解。相对上一代 Qwen-Audio-3.0-ASR 的差异是新增说话人分离转写和 Next 变体的通用音频理解，并保留历史上下文、分层热词和单遍润色等控制。在包含 7 个东亚与东南亚语言的 GigaSpeechBench 子集上，Qwen-Audio-3.1-ASR 的无加权宏平均错误率为 15.09%，低于上一代的 22.50%，且 7 个语言均为该表最低。结论适用于报告所列的公开与内部评测条件，重叠语音、远场噪声和低资源方言仍可能出错，原文未披露训练、推理或部署成本。

## 🔗 开源与复现资源

- 第三方资源：<https://huggingface.co/openai/whisper-large-v3> — 链接可访问（HTTP 200）

可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 这篇报告要解决的输入输出问题是什么

这篇技术报告处理的对象是包含语音、环境声与音乐的录音。输入是一段或多段音频，有时还附带文字指令，例如指定目标语言、给出历史转写、给出热词候选或要求润色。输出不只是一串文字，而是按任务变化：普通识别输出转写文本，说话人日志转写输出带说话人标签与起止时间的分段文本，音频理解输出描述、时间区间或问题答案。

只给扁平转写会丢失两类信息。第一类是会话结构，多人会议中谁在何时说了哪句、是否有短插话与重叠，直接影响对会议的理解。第二类是词以外的声学信息，例如环境事件、说话方式与音乐属性，以及事件之间的时间关系。报告把任务归纳为说什么、谁何时说、音频除转写外还传达什么，并强调部署形态不同，异步文件、实时流、交互语音与非流分析不必支持完全相同的能力。

### 已有路线与本报告的位置

报告回顾了两条已有路线。一条是基于具备音频能力的语言模型做多语识别，例如 Qwen3-ASR 把多语识别建在音频语言模型上，Qwen3-Omni 把音频感知纳入多模态框架，FireRedAudio 把识别、理解与语音生成放在通用音频语言模型中。另一条是面向结构化与时间感知的扩展，例如 MOSS-Audio 支持描述、带时间戳转写与时间感知理解，MOSS Transcribe Diarize 与 VibeVoice-ASR 把转写、说话人日志与时间戳联合建模，而不是用多个独立阶段拼接。

在评测侧，报告提到 MMAU 考察语音、声音与音乐的理解推理，MMSU 考察细粒度口语理解中的语义、副语言与音系信息。两者视角互补，促使评价不只看转写错误率。本报告的位置是生产导向的模型家族：在保留上一代指令控制识别的基础上，补上说话人日志转写与通用音频理解，并按不同部署变体开放不同能力。

### 必须保留的信息与容易混淆的边界

普通识别必须保留的是词内容，评价用字错率或词错率。说话人日志转写还必须保留录音内部的说话人一致性与时间边界，同一说话人在多次出现时保持同一标签，不同说话人的区间可以重叠。标签只区分录音内部的说话人，不识别真实身份。通用音频理解还必须保留声学证据支撑的语义与时间定位，而不是只生成 plausible 的文本。

几个边界需要分清。方言转写与方言到普通话翻译是不同语言任务，前者保留方言措辞，后者转成书面普通话。转写润色是呈现控制，管是否去掉填充词、重复与口误并规范标点，不改变语言任务本身。流式识别只做增量转写，不提供说话人日志与音频理解，这些能力只在对应非流变体中提供。

### 家族整体流程与变体分工

模型家族的核心是音频编码器、音频适配器与基于大语言模型的解码器。音频编码器把波形变成声学表示，适配器把它映射到解码器输入空间，解码器在音频嵌入、任务指令与可选文本条件共同作用下逐词生成输出。还有一个辅助的 CTC 分支，作用是为热词定制提供初步识别假设，并为长音频上下文注入提供粗对齐信号，报告明确它不是说话人日志时间戳或事件边界的唯一表示。

下面的总览图把 7 类能力放在同一家族下，有助于先建立整体地图再读细节。读图时注意每类能力的输入条件与输出形式不同，以及底部流式链路与右上结构化输出的可用范围标注。

> **看图路径：** 1. 先看中央模型与左右六个能力框的连接关系；2. 再看右上说话人时间条中重叠段如何标示；3. 比较左下热词 P0 与 P1 在条件转写中的不同位置

[![原论文 Figure 2：Overview of Qwen-Audio-3.1-ASR and its capabilities.](https://arxiv.org/html/2610.28711v1/qwen-audio-3.1-asr-overview.png)](https://arxiv.org/html/2610.28711v1/qwen-audio-3.1-asr-overview.png)

*论文图 2。原论文 Figure 2:：“Overview of Qwen-Audio-3.1-ASR and its capabilities.”。*

该图中央是 Qwen-Audio-3.1-ASR，周围分别展示多语方言识别、长音频上下文与领域实体、分层热词、说话人日志、通用音频理解、原生润色与流式识别。说话人日志面板用时间条显示 SPK0、SPK2、SPK3 的重叠，通用理解面板区分描述、定位与问答，底部链路显示增量解码、可配置右上下文、端点检测与全上下文刷新。能力可用性依赖变体，流式不支持说话人日志与通用理解。

### 音频如何变成受指令控制的输出

沿一个样本走一遍，输入音频 x 先经过编码器 E 与适配器 A 得到音频嵌入序列 H，再与任务指令 q、可选文本条件 c 一起决定输出序列 y。文本条件可以是目标语言、历史转写、分层热词或润色开关，音频理解任务中指令则指定描述、目标事件或问题。解码是自回归的，每个词都以前面已生成词、音频嵌入与指令条件为依据。

**音频编码器 × 音频适配器 × 解码器：** 音频编码器负责把波形变成声学表示序列，音频适配器负责把该序列映射到解码器能接受的嵌入空间，解码器负责结合音频嵌入与文字指令逐词生成输出。三者搭配后，同一套声学证据可以被不同指令复用，分别得到转写、带说话人与时间的结构化转写或音频描述与问答。

公式上，报告把该过程写成条件生成连乘，每个因子是给定前缀、音频嵌入与指令条件的下一个词概率。先理解对象含义再看公式：H 是向量序列，y 是目标词序列，下标 t 是位置，theta 是模型参数。

\[H=A(E(x)),\qquad p_{\theta}(y\mid x,q,c)=\prod_{t=1}^{T}p_{\theta}(y_{t}\mid y_{\lt t},H,q,c),\]

该公式的计算意义是逐步形成输出，先有音频嵌入，再逐位置预测并把已生成词反馈给下一步，最终输出形式由指令决定。这种表述保留了对原始声学输入的直接访问，而不是先把录音压缩成一份中间文本再做问答。

下面的解码工作流图展示了这种条件组合的具体形态，值得对照公式阅读。图中底部是音频输入与任务指令、可选控制，中间是统一解码，顶部是 3 类输出示例。

> **看图路径：** 1. 沿底部音频输入到顶部任务输出的主路径看数据流向；2. 注意任务指令与可选控制如何与音频嵌入并列进入解码；3. 对比左中右三类输出示例的形式差异

[![原论文 Figure 3：Overview of the instruction-controlled decoding workflow of Qwen-Audio-3.1-ASR.](https://arxiv.org/html/2610.28711v1/qwen-audio-3.1-asr-v5.png)](https://arxiv.org/html/2610.28711v1/qwen-audio-3.1-asr-v5.png)

*论文图 3。原论文 Figure 3:：“Overview of the instruction-controlled decoding workflow of Qwen-Audio-3.1-ASR.”。*

该图可见左侧润色开关与语言指定的输出差异，中间说话人标签加时间戳加文本的分段示例，右侧时间定位、问答与描述 3 种音频理解形式。底部音频嵌入与任务加上下文两路并列进入解码，已生成词逐个反馈，顶部用 y1 到 yT 与结束符表示自回归过程。

### 说话人日志转写输出什么结构

说话人日志转写的目标不是单一文本，而是一个分段集合。每个分段包含起始时间、结束时间、说话人标签与对应转写。报告用集合符号写出该语义内容，强调这是语义规定而非实现格式的字面约束。M 是分段数，bi 与 ei 是起止时间，ki 是录音内部标签，wi 是文本。

\[\mathcal{S}=\left\{\left(b_{i},e_{i},k_{i},w_{i}\right)\right\}_{i=1}^{M},\]

实现上目标回复按行序列化为[SPK|start-end]text 形式，按起始时间升序排列，区间可以重叠。示例中 SPK3 的短回应与 SPK2 重叠，SPK0 在 SPK2 结束前恢复，同一说话人重复出现保持同一标签与颜色。时间戳相对输入音频，放在 80 ms 网格上。

**说话人标签 × 时间戳 × 转写文本：** 说话人标签回答录音内部的谁，时间戳回答何时起止，转写文本回答说了什么。三者联合序列化在一个输出中，才能保留轮流发言、短回应与重叠语音的会话结构，这是扁平纯文本转写做不到的。

这种联合表示的代价是输出更长且包含大量时间戳与格式词元，监督在不同词元类别上分布不均，后文训练部分用加权与量化来处理该问题。

### 音频理解与部署变体如何取舍

Next 变体把指令生成扩展到 3 类音频理解任务。音频描述按音频类型给出说话人与副语言特征、声源与环境或音乐的流派乐器节奏情绪等属性。时间定位把语义查询与录音中的时间位置关联，单区间定位预测一个目标区间的起止，多区间检索找出所有匹配区间。音频问答则按录音回答开放式或选择题，融合听觉感知与语义推理。

部署上家族有 5 个变体，分别面向异步文件转写、实时转写、交互语音输入、非流转写与非流转写加音频分析。所有变体都支持普通识别与上下文、热词，润色在文件与流以外的变体提供，说话人日志只在两个非流变体提供，通用理解只在 Next 提供。实验中 Flash 指非流转写基座，Next 指支持音频分析的变体，Flash-Message 指交互语音变体。

**历史上下文 conditioning × 分层热词定制：** 历史上下文 conditioning 指把同一会话此前转写作为参考信息，帮助消解同音实体与主题；分层热词定制指把候选实体分成高置信 P0 与更宽 P1 两层并给予不同偏好强度。前者利用已出现的会话证据，后者利用外部给定的词表证据，两者都以文本条件形式与音频证据一起进入解码。

**原生转写润色 × 方言转写 × 方言到普通话翻译：** 原生转写润色控制是否在同一次解码中去掉语气词、重复与口误并规范标点，方言转写要求保留方言措辞，方言到普通话翻译要求传达含义而不保留方言表达。前者管呈现形式，后两者管语言任务，论文用不同指令把它们分开。

流式变体用短块与有限右上下文做增量转写，先给临时文本，端点检测后再用完整话语刷新定稿。块大小与右上下文长度构成延迟与精度的可调工作点。Message 变体在此基础上加入历史上下文、分层热词与原生润色，交互中先显示增量假设，话语结束再做全上下文刷新。

### 编码器与音频语言模型怎样预训练

训练共 6 个阶段：音频编码器预训练、音频语言模型预训练、大语言模型冷却适配、有监督微调、强化学习与多教师在策略蒸馏。编码器先做两步，先在数千万小时量级的多场景无标注语音上做 BEST-RQ 自监督，随机掩码声学帧并预测由固定随机投影与冻结码本从未掩码特征生成的离散目标，再在以中英文为主的大规模有标注音频文本数据上做注意力编码器解码器监督训练，数据经过语音活动检测、多系统伪标签与逆文本规范化，解码器随后丢弃，编码器用于初始化后续音频大模型。

编码器兼容 Transformer 层按先前跨模态初始化研究从 Qwen3 大语言模型初始化，非流编码器把因果注意力换成双向注意力，声学前端单独初始化。音频语言模型预训练用约 20,000,000 小时多语数据，以识别与图文音频交错数据为主，冻结编码器，联合优化适配器与解码器，用目标文本词元上的交叉熵做音频文本对齐。解码器从 Qwen 语言模型部分初始化，采用混合专家结构，视觉部分不用。

冷却阶段用约 1,000,000 小时更高质量数据，侧重语言方言均衡、转写质量与任务指令多样性，还混入音频理解、说话人日志与语音问答对话数据。数据质量过滤用 VibeVoice 重转写与原参考比较，词错率大于 0.3 的样本去掉，该步骤只做过滤，不用重识别结果替换参考。

### 微调中的结构化监督与两处关键调整

有监督微调把编码器、适配器与冷却后大模型整合成指令控制模型，联合更新编码器与适配器，基座大模型参数冻结并用低秩适配调整解码器。识别部分覆盖多语、方言、语码切换、噪声远场与应用语音，指令可指定语言、历史上下文、分层热词或润色。说话人日志与音频理解数据按变体能力配置混入。领域实体用大模型生成含实体的短句，经 CosyVoice3 合成与部分人工录制，再用当前识别模型重解码过滤明显实体错配。

润色数据一半来自真实语音配大模型按生产指令重写并做保真过滤，一半来自规范文本注入填充重复自我纠正后合成。历史上下文只用前文原样，不做大模型改写，还构造同音实体在正确、冲突、噪声与空上下文下的合成例，防止无条件复制。

说话人日志监督有两处关键调整。第一是说话人词元损失加权，统计显示说话人编号词元占监督词元 2.90% 但只占无加权损失 1.97%，时间戳占 33.44% 与 49.51%，格式占 14.48% 与约 0.23%，转写占 46.50% 与 47.74%，其余占 2.68% 与约 0.55%。模型已能可靠输出格式，因此只把说话人编号词元的交叉熵权重乘 10，其余保持 1，不改变目标序列与词元数。读图时先确认左右两栏的占比条与加权标注。

> **看图路径：** 1. 先看左侧五类词元的数量占比与无加权损失占比；2. 再看右侧只有说话人编号词元权重变为 10；3. 确认目标序列与词元数保持不变的标注

[![原论文 Figure 5：Speaker-token loss reweighting.](https://arxiv.org/html/2610.28711v1/speaker_token_weighting.svg)](https://arxiv.org/html/2610.28711v1/speaker_token_weighting.svg)

*论文图 5。原论文 Figure 5:：“Speaker-token loss reweighting. Left: token-count and unweighted-loss shares for five categories in the speaker-diarized ASR training data.”。*

该图左侧给出 5 类词元的数量与无加权损失份额，右侧显示只有说话人编号从 1 变为 10，时间戳、格式、转写与其余保持 1，示意损失正比于加权交叉熵之和。第二是帧对齐时间戳量化，把 1 ms 精度目标量化到与编码器适配器 12.5 Hz 输出对应的 80 ms 网格，加快训练损失与说话人错误率、级联最小置换词错率的收敛，并在相同数据混合下得到更好结果。

### 强化学习与多教师蒸馏补什么

微调后强化学习直接优化序列级转写与说话人日志质量。数据侧重难例，包括与 Whisper、FireRed-ASR、SenseVoice 等外部系统不一致的难例、超 20 秒长话语、幻觉与貌似幻觉的真实长重复、关键词热词样本，以及防灾难遗忘的常规数据。FunVerl 框架把音频预处理、多模态 rollout、任务奖励与 Megatron 策略训练用 Ray 编排并异步执行，轨迹队列解耦生成与优化，NCCL 同步权重，陈旧轨迹按版本阈值排除。策略优化用组相对策略优化，对同一音频指令采样 G 个候选，用组内均值标准差归一化奖励得到词共享优势，无需单独价值网络。

组内优势的含义是同一组内相对好坏，delta 是数值稳定小常数，G 是每组候选数，Ri 是任务奖励。

\[\hat{A}_{i,t}=\frac{R_{i}-\operatorname{mean}\!\left(\{R_{j}\}_{j=1}^{G}\right)}{\operatorname{std}\!\left(\{R_{j}\}_{j=1}^{G}\right)+\delta},\]

识别奖励按样本类型路由，包括 1 减词错率的主奖励、关键词召回与精度、P0 与 P1 非对称权重的热词奖励、上下文实体命中与误插惩罚、按幻觉跨度长度惩罚的幻觉抑制。说话人日志奖励包括基于说话人错误率的日志奖励、基于级联最小置换词错率的转写奖励与要求时间兼容对齐的时间约束奖励，误差越低奖励越好。

在策略蒸馏把多个任务专用教师并入同一学生。学生当前策略采样回复，固定教师在相同输入与学生生成前缀上打分，用 k3 估计学生到教师的反向 KL，词级惩罚为概率比减对数减 1，目标是对学生生成回复做词元平均。教师按任务路由，识别、说话人日志、音频理解各有专用教师，文本对话用 Qwen3.5 保持语言与对话能力。

**组相对策略优化 × 在策略蒸馏：** 组相对策略优化用同一输入下多个候选的序列级奖励做组内归一化优势，直接优化词错率、说话人错误率等序列指标；在策略蒸馏让学生在自己生成的回复前缀上接受固定教师的词级概率监督。两者分工是序列级任务反馈与词级教师反馈，都在学生实际访问的状态上训练。

该词级目标中 rho 是教师概率除以学生概率，d 是 k3 惩罚，x 含指令与音频或上下文，k 是教师标识，y 波浪线是学生生成回复。

\[\rho_{t}(\theta)=\frac{p_{\phi_{k}}(\tilde{y}_{t}\mid x,\tilde{y}_{\lt t})}{\pi_{\theta}(\tilde{y}_{t}\mid x,\tilde{y}_{\lt t})},\qquad d_{t}^{(k_{3})}(\theta)=\rho_{t}(\theta)-\log\rho_{t}(\theta)-1.\]

训练混合含识别、说话人日志、音频理解与文本对话，音频 3 组各配对应教师，文本对话同样用学生生成 rollout 与 k3 目标从 Qwen3.5 蒸馏。

### 评测用什么数据与指标

评测覆盖常规识别、多语方言、说话人日志与音频理解。常规与多语用 AISHELL-1、AISHELL-2、FLEURS、LibriSpeech、WeNetSpeech、GigaSpeechBench 与 Common Voice 15，方言加 KeSpeech 与 WSYue，说话人日志用 AISHELL-4、AliMeeting-test、MLC-SLM 与 MagicData-RAMC，音频理解用 MMAU、MMSU、CochlScene、Nonspeech7k、MELD、NSynth、DiDiSpeech，时间定位用 Clotho-Moment 与 DESED。另有内部方言、行业实体、热词、润色与流式评测。

**字错率 × 词错率 × 级联最小置换词错率：** 字错率用于中文等按字计分的转写，词错率用于英文等按词计分的转写，级联最小置换词错率把每个说话人的文本拼接后在最优说话人置换下计词错率，用于说话人日志转写。它不依赖任意的说话人编号名称，能同时反映说什么与谁说是否对应。

指标方向要先记牢。字错率与词错率、说话人错误率与级联最小置换词错率越低越好，准确率与平均交并比越高越好。中文集报字错率，英文集报词错率，多语按语言协议报字或词错率并做跨语言无加权宏平均。说话人日志为公平比较把长音频切成约 4 分钟块。内部方言翻译用语义句准确率，即保留参考含义且关键信息无误的比例，由 Qwen3.7-Max 按命名实体与关键信息标准打分，并在子集上与人工达到 95.35% 一致后用于全集。结果表中 Flash 指非流基座的识别与说话人日志，Next 指支持理解的变体，Flash-Next 指尺寸标注，Flash-Message 指交互语音的流显示加非流刷新。

### 中英文与多语识别在什么条件下成立

先看总览图的三栏，有助于把握主结果的量级与方向，再读分表。a 栏是 GigaSpeechBench 七语宏平均误差，b 栏是 4 个说话人日志集的平均级联最小置换词错率，c 栏是 MMAU 与 MMSU 准确率。注意 a 与 b 越低越好，c 越高越好。

> **看图路径：** 1. 对比 a 栏多语平均误差条的长度与数值方向；2. 对比 b 栏说话人日志平均误差的两个紫色条；3. 看 c 栏 MMAU 与 MMSU 准确率越高越好的表格数值

[![原论文 Figure 1：Performance overview of Qwen-Audio-3.1-ASR on selected benchmarks.](https://arxiv.org/html/2610.28711v1/qwen31-frontpage-overview.svg)](https://arxiv.org/html/2610.28711v1/qwen31-frontpage-overview.svg)

*论文图 1。原论文 Figure 1:：“Performance overview of Qwen-Audio-3.1-ASR on selected benchmarks.”。*

该图 a 栏显示 Qwen-Audio-3.1-ASR 宏平均 15.09%，低于上一代 22.50%，标注相对误差下降 32.9%。b 栏显示两个 Qwen 变体分别为 14.12% 与 12.93%，为最低。c 栏显示 Next 在 MMAU81.60% 与 MMSU82.24%，其中 MMAU 为表中最高。完整分语言与分集结果见正文第 5 节。

分表比较要分两个口径。公开来源口径下中英文七集上两代总体接近，AISHELL-1 字错率 1.08% 对 1.03%，AISHELL-2 为 2.05% 对 2.02%，FLEURS 中文 2.25% 对 2.08%，LibriSpeech-clean 词错率 1.23% 对 1.19%，LibriSpeech-other 为 2.19% 对 2.24%，FLEURS 英文 4.72% 对 4.17%。该口径因各来源预处理计分不同，只宜看大致相当，不宜做严格定量排序。

下表是统一接口评测口径的节选，比较问题是在相同测试集与修正参考下两代基座的相对位置，指标方向为越低越好。表前已说明条件，表后解释限制。

| Panel A: Published Benchmark Results |  |  |  |
| --- | --- | --- | --- |
| AISHELL-1 | CER | 1.03 | 1.08 |
| AISHELL-2 | CER | 2.02 | 2.05 |
| FLEURS-zh | CER | 2.08 | 2.25 |
| LibriSpeech-other | WER | 2.24 | 2.19 |

该表节选显示在所选集上 3.1 与 3.0 接近，差异随测试集变化，LibriSpeech-other 上 3.1 更低。完整统一口径下 3.1 在七集中的四集最低，在 FLEURS 中文、英文与 LibriSpeech-clean、other 上相对当集最强基线分别低 0.13、0.23、0.12、0.32 个百分点，其余三集 Fun-ASR-Flash 最低。WeNetSpeech-net 统一用修正参考，AISHELL-2 用 test-ios 子集，结论只在该计分与子集下成立。

多语上 GigaSpeechBench 7 个亚语 3.1 每语最低，宏平均 15.09% 对上一代 22.50%，日韩马来泰降幅大。Common Voice 15 八语子集 3.1 宏平均 3.74% 为完整结果中最低，在印尼、日、泰、韩、葡五语最低，日语字错率从 5.64% 到 1.40%，韩语从 3.09% 到 0.73%，越南语 Tencent 更低，西法语上一代更低。FLEURS 九语子集 3.1 在印尼日韩最低，宏平均 3.85% 对上一代 4.94%，Azure 在该子集宏平均 3.25% 最低。相对高低随语言与基准变化，不能推广为所有语言全面最优。

### 方言、实体与热词的效果与边界

公开方言用 9 个 KeSpeech 翻译集与 WSYue 粤语长短转写集，内部用 16 方言转写与 11 方言到普通话翻译，分别按字符错率与语义句准确率评价。公开 11 个子集宏平均 3.1 为 4.55%，Doubao 为 7.15%，Tencent 为 4.61%，3.1 在其中 6 个子集最低。内部 16 方言转写宏平均 3.1 为 10.38%，对 Doubao20.23% 与 Tencent17.13%，在 11 个子集最低，温州从 68.22% 与 64.74% 降到 19.21%，但各基线公开文档未列出的方言不代表无能力，缺席名单不能当作零分证据。

内部翻译按对方明确覆盖范围分别比较，对 Doubao 的沪客粤 3 个子集宏平均 88.03% 对 78.69%，3 个子集都更高。对 Tencent 的赣湘粤青 4 个子集宏平均 89.03% 对 77.53%，其中 3 个子集更高，南昌从 57.44% 到 89.26%，粤语 93.55% 略低于对方 94.15%。该指标接受语义等价的方言与普通话表达及不影响含义的措辞差异，评估的是语义保真而非语言形式是否合规。

行业实体 15 个域内部集上 3.1 在 9 个域最高并在 2 个域并列最高，召回 94.9% 到 99.5%，在人工智能、农业、商贸物流相对次优分别高 2.3、2.2、2.1 个百分点，其余 4 个域 Tencent 更高。报告明确该对比不分离实体挖掘合成管线的独立贡献。热词上 P0 的 6 类在加条件下 3.1 均为最高，召回 97.95% 到 99.46%，P1 在学科词与流行语虽有提升但不是最高，符合 P0 更强条件的设计预期。长音频上下文只给代表性纠正例，例如同会话出现过的 unigram、softmax、debug 与人名 code 名帮助后续识别，不能当作量化提升。

### 流式延迟、说话人日志与音频理解

Message 语音结合流显示与话语结束非流刷新，延迟指 spoken 内容结束到上屏的时间。比较问题是相同输出阶段内的响应与行业词召回，延迟越低越好，召回越高越好。测试条件是 Doubao 走接口、Qwen 走 H100 自托管服务，10 路并发，假设网络相当，结论只在该部署条件下成立。

| Metric | Doubao Streaming ASR 2.0 | Qwen-Audio-3.1-ASR-Flash-Message |
| --- | --- | --- |
| Text-emission latency | 530 | 220 |
| First-character latency | 570 | 100 |
| Last-character latency | 307 | 103 |

该表显示文本发射延迟 220 对 530 ms，首字延迟 100 对 570 ms，末字延迟 103 对 307 ms，Qwen 三项都更低。流输出九域行业词平均召回 63.93% 对 46.28%，高 17.64 个百分点，股票、畜牧、信息技术增益大。非流刷新后平均 92.82% 对 78.27%，高 14.54 个百分点，两系统刷新后都高于各自流输出，说明流管响应、非流管定稿的分工成立，但延迟数字不能直接当作其他硬件与负载下的承诺。本表数值与单位依据论文 PDF。

说话人日志在四集上报说话人错误率、词错率与级联最小置换词错率，越低越好，比较问题是联合输出的字词、说话人与时间质量。下表整理 AliMeeting-test 上两变体的关键差异，数值单位为百分比，越低越好。

| 条件 | 指标 | Qwen-Audio-3.1-ASR | Qwen-Audio-3.1-ASR-Next |
| --- | --- | --- | --- |
| AliMeeting-test | cpWER | 15.78% | 12.04% |
| 差值 | 绝对降低 | 3.74 个百分点 | Next 更低 |

该表只回答两变体在该集该指标的相对位置，Next 低 3.74 个百分点。完整四集上两 Qwen 变体包揽 12 个数据集指标组合的最低，Next 在 AISHELL-4 与 AliMeeting-test 的字词与级联指标以及两集的说话人错误率最低，基座在 AliMeeting-test 说话人错误率、MLC-SLM 字词与级联以及 MagicData 三项最低，两者都优于级联 Fun-ASR 基线。VibeVoice 与 SoulX 为报告引用值，切块为约 4 分钟，结论不推广到未切块长音频。

音频理解比较问题是 Next 在综合、专用与时间定位上的位置，准确率与平均交并比越高越好，基线为接口实测。

| Benchmark | Gemini-3.1-Pro | Qwen-Audio-3.1-ASR-Flash-Next |
| --- | --- | --- |
| MMAU | 80.90 | 81.60 |
| MMSU | 85.30 | 82.24 |
| CochlScene | 63.90 | 76.30 |
| Clotho-Moment | 52.56 | 82.20 |

该表节选显示 MMAU 上 Next81.60% 高于 Gemini-3.1-Pro80.90%，MMSU82.24% 低于最优 85.30%。完整九项中 Next 七项最高，专用五项全最高，CochlScene76.30% 与 NSynth66.90% 分别领先次优 12.40 与 27.70 个百分点，Clotho-Moment82.20% 领先 10.41 个百分点，DESED66.60% 低于最优 0.04 个百分点。优势集中在场景、乐器与单区间定位，MMSU 与 DESED 存在未胜出项，不能读成全面领先。

### 润色与训练调整带来什么代价

原生润色把润色放在同一次解码中，用指令开关选择原文或润色输出，省掉 1 次额外文本改写调用。内部 5 分制上可读性从 2.53 到 3.44，级联为 3.51，保真 3.44 对级联 3.47 与原文 3.51。也就是说可读性大幅提升，代价是 rated 保真小幅低于原文，接近级联。示例中 um、uh、the 重复与 I just to put it 等 false start 被整理，DRR 等字母序列规范大小写，中文同样去填充与重复并纳入自我纠正。

训练侧两处调整的意义在消融描述中给出。说话人加权只提高说话人编号权重而不动时间戳与格式，因为时间戳已占近半损失而格式已可靠，目标是让 diarization 更受重视。时间戳量化把 1 ms 目标对到 80 ms 帧网格，加快损失与两项误差收敛并在相同混合下更好。报告未给出拿掉其中一项的完整数字表，机制解释有证据但量化分离不完整，不宜断言各自的独立贡献大小。

### 结论的适用范围与未验证部分

首先是口径限制。中英文公开来源结果因预处理计分不同只能看大致相当，严格排序以统一接口口径为准，且 WeNetSpeech 用修正参考、AISHELL-2 用特定子集。方言内部集的名单缺席不等于无能力，翻译指标只管语义保真不管语言形式，行业实体对比不分离合成管线贡献，热词 P1 本就不是最强目标，长上下文只有示例没有量化。

其次是部署与数据限制。流延迟在特定服务与并发下测得，换硬件负载会变。说话人日志切成约 4 分钟块，长整会的不稳定性已被切块缓解，未评估更长未切块录音。音频理解基线为作者接口实测，MMSU 与 DESED 有更优者。训练资源、推理开销、帧率与真实延迟未系统报告，不能从趋势承诺成本改善。来源未确认的链接不可达不属于技术缺陷，第三方链接只证明论文提到该地址。

### 复现第一步与需要补的验证

若要复现，先按变体选接口。普通识别与上下文热词润色可用对应变体，说话人日志用非流 Flash 或 Next 并按[SPK|start-end]text 解析，音频理解必须用 Next，流式不测说话人与理解。方言先明确任务是保留方言还是译成普通话，润色先明确开关，计分先固定字或词、宏平均是否无加权、参考是否修正。说话人日志先复现约 4 分钟切块与脚本，再报三项误差。

值得补的验证包括未切块长会议的稳定性、P1 大候选下的误插率、润色在关键实体与否定因果上的语义保持率，以及不同并发与硬件下的延迟与召回。论文未开源权重与代码的明确状态，报告只给出模型家族与评测脚本信息，复现应先从公开基准与接口条件对齐做起，不把搜索最优或事后最优当作部署可得。

### 什么时候值得尝试这个家族

当任务同时需要词内容、说话人时间结构与声学理解，且能接受按变体取舍能力时，该家族值得尝试。会议转写优先非流说话人日志，语音输入优先 Message 的流显示加非流刷新，环境与音乐分析优先 Next 的描述定位问答。多语中日韩泰等亚语与中文方言是报告中证据较强的位置，但具体语言仍要看分集结果。

使用时把指令条件当作一等输入：目标语言、历史上下文、P0 与 P1 热词、润色开关都会改变输出，评测必须连同条件一起固定。预期收益是结构化输出与理解能力的扩展，主要代价是更长输出、更复杂监督与变体限制。未胜出的数据集与指标提醒我们，它不是在所有条件下全面最优，选择前应在自己的划分与部署预算上重测。

<details>
<summary>📎 论文与评分元数据</summary>

排名：前50% | 文档类型：模型报告 | [arXiv 原文](https://arxiv.org/abs/2610.28711v1)

</details>

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。

- 评分规则：type-aware-v1

- 评分模型：muse-spark-1.3-contributor

- 评分请求协议：openai_responses

---

[← 返回 2026-10-23 语音/音乐/音频论文速递](/audio-paper-digest-blog/posts/2026-10-23/)
