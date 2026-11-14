---
title: "Duo: A Reciprocal World Model for Full-Duplex Interaction"
date: 2026-11-13
draft: false
tags: [音视频交互, 音视频生成, 全双工语音交互, 流匹配, 自回归模型]
categories: [论文速递]
description: "Duo v1 把全双工音视频交互拆成 17 帧块上的参与决策与音视频实现，用因果条件和双 rollout 蒸馏把两个模块接起来；人体评价中 180 项检查有 168 项通过，但内容回应性只有 73.3%（22/30），说明时序与生成保真较强而语义回应仍是主要限制。"
hiddenInHomeList: true
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_arxiv_id: "2611.15131"
paper_digest_workbench_contract: "researcher-workbench"
paper_digest_workbench_schema_fingerprint: "1f09b594c317cc38e934de27a5b0e8ceb4baa50ef79bd4f8683dd9adea720fe7"
paper_digest_reader_title: "全双工音视频交互中的参与决策与同步生成：Duo v1 解读"
paper_digest_original_title: "Duo: A Reciprocal World Model for Full-Duplex Interaction"
paper_digest_arxiv_version: 1
paper_digest_arxiv_versioned_id: "2611.15131v1"
paper_digest_arxiv_abs_url: "https://arxiv.org/abs/2611.15131v1"
paper_digest_arxiv_pdf_url: "https://arxiv.org/pdf/2611.15131v1.pdf"
paper_digest_primary_task: "音视频交互"
paper_digest_tags_contract: "paper-tag-flat-tags"
paper_digest_tags_schema_fingerprint: "27e36280a4b8d3df62ebe54d3ab037920f4d69feb2b554163f01bbae2caf4338"
paper_digest_tags_selection_contract: "paper-tag-selection"
paper_digest_tags_registry_version: "paper-tag-catalog"
paper_digest_tags_registry_sha256: "9673bc0122e1905a5dcfd8b223675400cc2fa4c36095bc0e5f817edf99a0ec5c"
paper_digest_tags_concepts: [{"facet":"task","id":"task.av-interaction","label":"音视频交互"},{"facet":"task","id":"task.av-generation","label":"音视频生成"},{"facet":"task","id":"task.full-duplex","label":"全双工语音交互"},{"facet":"method","id":"method.flow-matching","label":"流匹配"},{"facet":"method","id":"method.autoregressive","label":"自回归模型"}]
paper_digest_primary_method: "流匹配"
paper_digest_score: 6.1
paper_digest_rank_bucket: "前50%"
paper_digest_document_type: "模型报告"
paper_digest_one_sentence: "Duo v1 把全双工音视频交互拆成 17 帧块上的参与决策与音视频实现，用因果条件和双 rollout 蒸馏把两个模块接起来；人体评价中 180 项检查有 168 项通过，但内容回应性只有 73.3%（22/30），说明时序与生成保真较强而语义回应仍是主要限制。"
paper_digest_authors: [{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Hengyuan Cao"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Biao Gong"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Guoshan Lu"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Qiyuan Zhang"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Lin Liu"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Yiding Tian"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Yilei Jiang"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Yuxin Ma"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Chengzhang Wu"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Kun Chen"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Yiqian Xie"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Ting Liu"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Xin Zheng"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Xijun Gu"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Tianren Ma"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Jiancheng Pan"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Chi Zhang"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Xuzhe Zheng"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Siyi Li"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Zhenzhong Lan"}]
paper_digest_abstract_sha256: "f442e23b5198e8141c047eb068293d96fd65cc8f39e658f87262dd4d0c17230f"
paper_digest_sidecars: {"citation.bib":{"sha256":"d3ab49e151d30c5b612c1ef2a099d155455188686bd6e15e92a605b2270b57f3","url":"/audio-paper-digest-blog/client/papers/2026-11-13/2611-15131/citation.bib"},"citation.json":{"sha256":"f27ac722dfd580bf0108209aee84b22a05c1c0ccd2d6b5ad7cac5abddd694cde","url":"/audio-paper-digest-blog/client/papers/2026-11-13/2611-15131/citation.json"},"citation.ris":{"sha256":"c9f4434fd31c95f8f85e6cbb06ac1912b222efd05cb0e3ecabbe3ab28f552432","url":"/audio-paper-digest-blog/client/papers/2026-11-13/2611-15131/citation.ris"},"rethink-context.json":{"contract":"paper-research-context","schemaFingerprint":"5d4e79f7d3ee65b39ccb38281548bf20a1b2041ab7a27625eaf97ab9909a8383","sha256":"c9b9a429ad2ec999502cface60017dd9e9917aa43e2de6e22ab2babc149f646a","url":"/audio-paper-digest-blog/client/papers/2026-11-13/2611-15131/rethink-context.json"}}
paper_digest_api_reader_contract: "beginner-researcher"
paper_digest_api_reader_schema_fingerprint: "cd8baf5b8bda3a49eec64f6005931af63de4e9a13148cba5f354c661ca6e9df2"
paper_digest_api_reader_article_sha256: "d321ffc68dad9c324d1d03cbd42645d952cc829df02063ee3c39ab0d05a48a2d"
paper_digest_api_reader_plan_sha256: "955171383da927d9d7cd3a7e1fd84f1c4232496580a6f5dc626eb21c651d2dea"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings"
paper_digest_api_reader_source_binding_schema_fingerprint: "d2a2607a6e561909473022eb43f56332ee357af8568566a095c29083ffdec9cc"
paper_digest_api_reader_source_bindings_sha256: "94f887d28eba5d9d7c0a13393a99c28879a82c376f0afd0ebcae16df918691a7"
paper_digest_api_reader_source_table_count: 2
paper_digest_api_reader_source_formula_count: 5
paper_digest_api_reader_structured_artifacts_sha256: "1dbf676fd01bfbf1e96a136d0c76641b1f174da365ed4ded32a3c917ae1f93b9"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity"
paper_digest_api_reader_author_identity_schema_fingerprint: "1e3fd3a9a56c9a5bf52df8df5022690b9a3fa92e83e934f295af87c0e258ed2f"
paper_digest_api_reader_author_identity_sha256: "0f8ce04f5e8b4133f29ed8637d6da2700f5294510d9110ff126012b86308934d"
paper_digest_api_reader_author_count: 20
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity"
paper_digest_api_reader_resource_identity_schema_fingerprint: "33b0be17118be61f39b85ce690c8da17e91f2864bb65e85284f60c40067328e0"
paper_digest_api_reader_resource_identity_sha256: "1751a82533c5a48726e43f7ddc53f33240588d7381976dd81955dad102fe75b3"
paper_digest_api_reader_resource_count: 3
paper_digest_api_reader_figure_persistence: "ephemeral-no-persisted-figure-assets-v1"
paper_digest_api_reader_decision_projection: "api-reader-decision-projection"
paper_digest_api_reader_decision_projection_schema_fingerprint: "e56feb5ab75c8710904916b898f73dab9bb18bdf65bb60b7ed2edf7f99cea860"
---

# 📄 全双工音视频交互中的参与决策与同步生成：Duo v1 解读

> 英文题目：*[Duo: A Reciprocal World Model for Full-Duplex Interaction](https://arxiv.org/abs/2611.15131v1)*

<!--paper-tag-hierarchy-v1:start-->

**研究分类**

- **研究任务**：[音视频交互](/audio-paper-digest-blog/papers/?concept=task.av-interaction)；[音视频生成](/audio-paper-digest-blog/papers/?concept=task.av-generation)；[语音交互](/audio-paper-digest-blog/papers/?concept=task.speech-interaction) → [全双工语音交互](/audio-paper-digest-blog/papers/?concept=task.full-duplex)
- **研究方法**：[生成模型](/audio-paper-digest-blog/papers/?concept=method.generative) → [流匹配](/audio-paper-digest-blog/papers/?concept=method.flow-matching)；[生成模型](/audio-paper-digest-blog/papers/?concept=method.generative) → [自回归模型](/audio-paper-digest-blog/papers/?concept=method.autoregressive)

<!--paper-tag-hierarchy-v1:end-->

> 评分：**6.1/10** | 创新 1.5/2 | 技术严谨 1/1.5 | 实验充分 0.6/1.5 | 清晰度 0.8/1 | 影响力 0.9/1.5 | 开源 0/1.5 | 可复现 0.1/0.5 | 工程/实践 1.2/1.5


## 👥 作者与机构

- Hengyuan Cao：机构信息未能在本次解析中与作者逐人可靠绑定
- Biao Gong：机构信息未能在本次解析中与作者逐人可靠绑定
- Guoshan Lu：机构信息未能在本次解析中与作者逐人可靠绑定
- Qiyuan Zhang：机构信息未能在本次解析中与作者逐人可靠绑定
- Lin Liu：机构信息未能在本次解析中与作者逐人可靠绑定
- Yiding Tian：机构信息未能在本次解析中与作者逐人可靠绑定
- Yilei Jiang：机构信息未能在本次解析中与作者逐人可靠绑定
- Yuxin Ma：机构信息未能在本次解析中与作者逐人可靠绑定
- Chengzhang Wu：机构信息未能在本次解析中与作者逐人可靠绑定
- Kun Chen：机构信息未能在本次解析中与作者逐人可靠绑定
- Yiqian Xie：机构信息未能在本次解析中与作者逐人可靠绑定
- Ting Liu：机构信息未能在本次解析中与作者逐人可靠绑定
- Xin Zheng：机构信息未能在本次解析中与作者逐人可靠绑定
- Xijun Gu：机构信息未能在本次解析中与作者逐人可靠绑定
- Tianren Ma：机构信息未能在本次解析中与作者逐人可靠绑定
- Jiancheng Pan：机构信息未能在本次解析中与作者逐人可靠绑定
- Chi Zhang：机构信息未能在本次解析中与作者逐人可靠绑定
- Xuzhe Zheng：机构信息未能在本次解析中与作者逐人可靠绑定
- Siyi Li：机构信息未能在本次解析中与作者逐人可靠绑定
- Zhenzhong Lan：机构信息未能在本次解析中与作者逐人可靠绑定

## 📌 核心摘要

论文提出 Reciprocal World Model（RWM，互惠世界模型），把智能与物理现实视为世界两个同等基本的方面，并以 Duo v1 作为模块化实例；全双工交互指双方可持续接收并回应，允许打断或沉默。已有世界模型多只预测视觉世界，用户靠键盘、鼠标或文本控制，系统内部不能持续理解并实时回应真实用户。Duo v1 以 17 帧视频块（24 fps 下约 0.71 s）为交互单位，接收用户音频、视频和转写文本，输出助手的语音、视频及发言或等待决策。多模态意图模块先读取截至当前块之前的历史，自回归地产生 `<speak>` 加文本或 `<wait>` 并保留隐藏状态，而不是只把语言模型当作扩散模型的指令编码器；随后，因果音视频实现模块以这些隐藏状态、参考图、用户音视频和自身历史为条件，用流匹配生成当前块的音频与视频潜变量。训练分 3 个阶段：块级因果监督微调意图模块，冻结它后训练实现模块，最后用双 rollout 分布匹配蒸馏压缩到 4 步。作者还构建合成双人视频通话和多种录制数据，通过统一时间线与质量检查保证对齐。原文未提供可核对的关键定量结果。评估仅来自小规模人工检查，未与基线或当前最佳系统直接比较；训练成本未披露，长时一致性、误解恢复和实际部署开销仍未充分验证，首帧可见还需初始解码与采样窗口等待。

## 🔗 开源与复现资源

- 第三方资源：<https://github.com/inclusionAI/Duo> — 链接可访问（HTTP 200）

- 第三方资源：<https://huggingface.co/collections/inclusionAI/duo-v1> — 链接可访问（HTTP 200）

- 第三方资源：<https://duo-v1.github.io> — 链接可访问（HTTP 200）

可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 全双工音视频交互要保留哪些输入、状态与输出

先把任务本身说清楚。Duo v1 面向的是一次持续的音频与视频通话：用户端不断送入声音、画面和由语音识别得到的文本，系统要一边接收新的输入，一边决定当前时刻是否开口、说什么，并输出与助手形象同步的立体声音频和视频。它要保留的不只是语义，还包括谁在说话、何时开始、何时停下、是否打断、嘴形是否对得上声音、同一人物在不同块中是否仍是同一张脸。

这与常见的世界模型设定不同。许多生成式世界模型接收过去观测和低自由度的控制信号，再预测场景如何变化；控制来自键盘、鼠标、手柄或文本提示，世界内部没有一个会实时理解用户并决定回应的参与者。Duo 的出发点是把智能和物理现实放在同一个交互回路里：Intent 负责理解与决策，Realization 负责把决策变成可听可见的行为，而生成出的行为又成为后续交互环境的一部分。

因此，系统的输入不是一个离线片段，而是一个持续增长的时间序列；输出也不是一次性的视频文件，而是要在播放过程中继续产生的音频和视频。交互被切成固定时长的块，本文的块长是 17 个视频帧，在 24 fps 下约为 0.71 s。这个块长既决定了模型多久做一次参与决策，也决定了音视频状态怎样被截断、编码、缓存和续写。

### 已有路线分别解决了哪一段，没有解决哪一段

相关工作可以按输入、输出和运行阶段分开看。世界模型与 Dreamer 一类工作学习预测表征或动作可控环境，重点在环境动态和后续观测；它们通常把语言理解与互动决策放在环境之外。Duo 要解决的不是单纯预测下 1 帧，而是让生成世界里的助手在同一个时间轴上接收用户音视频、决定是否参与，并继续生成自己的音视频。

全双工语音系统已经处理了同时输入与输出。Moshi 表示并发的用户与助手语音流，Qwen-Omni 把多模态理解与流式语音生成拆成 Thinker 和 Talker，Wan-Streamer 把流式设置扩展到音视频基础模型，ELLSA 进一步联合建模全双工语音、手势和表情。Duo 与这些工作共享参与时机和可见交流行为的问题，但它把语言模型的隐状态作为条件交给一个因果音视频生成器，输出的是助手画面、立体声和文本动作的统一序列。

联合音视频生成方面，Ovi、MOVA 和 LTX 通过耦合模态流实现同步生成，MiniMax-H3 是参考条件音视频生成器，EMO 与 OmniHuman 从给定语音驱动可见行为，LiveTalk 把蒸馏后的视频表演与流式音频连接。它们分别强调同步、参考保持或流式执行；Duo 的区别在于每个块先产生参与动作和语言隐状态，再由该隐状态条件化联合音视频生成。因果适配和少步训练方面，Diffusion Forcing、CausVid、Self Forcing、一致性模型和分布匹配提供了训练工具，Duo 的组合方式是用因果训练、四步分布匹配和双 rollout 把训练条件拉近推理条件。这里比较的是任务结构和训练阶段，不是在同一基准上宣布某一方法胜出。

### 为什么不能只把语音识别、语言模型和视频生成器串起来

直接串联会漏掉 3 个约束。第一，块边界必须因果：第 k 个块做决策时只能看到 k 之前已经到达的用户视频、用户文本、用户音频和助手历史，不能通过视觉编码时的帧分组把未来帧偷偷混进来。第二，参与动作必须与语言内容分开：一个块可以只说一个词的一部分，也可以明明在继续播放却不新增文本；如果模型只被训练生成文本，就容易在不合适的时刻插入一句话。第三，训练时看到的助手历史往往来自录制文本和录制媒体，而推理时历史来自模型自己生成的文本与音视频，二者分布不同，会让后续块越走越偏。

这里的时间单位叫 chunk，是一个固定时长的时间片，不对应单词、句子或完整回合。所有输入和输出要放到统一时间轴上：用户语音、用户视频、意图 token、助手文本和助手媒体都按实际播放时间对齐，每个块只取决策边界之前可用的条件。

**chunk × unified timeline：** chunk 是固定时长、用于因果决策和生成的时间片，不对应单词或句子；统一时间轴把用户语音、视频、意图 token 与助手媒体按实际播放时间排列，每个块只取决策边界前已到达的条件。没有 chunk，实时因果性没有离散执行单位；没有统一时间轴，音频、视频和文本就会在块间错位。两者合起来使中断、重叠和静默都能落在同一套条件与监督中。

于是问题变成：怎样在一个统一时间轴上表示块级因果条件，怎样让 Intent 学会在大多数块里等待、在需要时开口，怎样让 Realization 在自己的音视频历史上继续生成，而不是依赖录制数据的理想历史。Duo v1 的 3 个设计分别对应这三件事：自回归参与决策、块级因果条件与统一时间轴、以及双 rollout 的分布匹配蒸馏。

### Duo v1 的两个模块怎样在一个块上交接

Duo v1 是 Reciprocal World Model 的一个模块化实现：一个基于多模态语言模型的 Intent Module 负责理解和参与决策，一个因果音视频扩散 Transformer 组成的 Realization Module 负责生成助手的音频与视频。二者不共享全部参数，也不把对方的中间结果当作可随意回看的全局状态；它们通过 Intent Module 的隐状态和一个不断增长的块历史交接。

在第 k 个块，Intent Module 的条件包括全局指令 d、截至前一块的用户视频嵌入、用户文本历史和此前助手文本输出。它产生当前块的输出 y_k，y_k 要么是 `<speak>` 加一段文本，要么是 `<wait>`；同时保留前向计算得到的隐状态 h_k，作为语义接口交给 Realization Module。

\[\displaystyle C^{\phi}_{k}=\big(d,\ x^{v}_{u,<k},\ u_{t,<k},\ y_{\lt k}\big),\]

这个条件式表达的是决策边界：视觉、文本和助手语言都只取 k 之前的历史，当前块的动作和文本由这个条件产生。y_k 不只是给用户看的文字，它还告诉后续生成器这一块是否开始说话；h_k 则携带比解码文本更丰富的语义状态。

Realization Module 的条件包括参考图像 I_ref、当前块的意图隐状态 h_k、历史用户视频嵌入、历史用户音频、以及此前生成的助手音频和视频潜变量。它联合产生当前块的音频潜变量和视频潜变量，再解码为可播放的助手媒体。

\[\displaystyle C^{\theta}_{k}=\big(I_{\mathrm{ref}},\ h_{k},\ x^{v}_{u,<k},\ u_{a,<k},\ z^{a}_{\lt k},\ z^{v}_{\lt k}\big),\]

2 个条件式都有两个性质。其一是因果：两个模块只看 k 之前的历史，Realization 额外看当前块的 h_k，但不读取未来输入；用户在生成期间新送入的输入会进入后续块。其二是连续：y_k、z_k^a 和 z_k^v 都会加入各自的历史，下一块可以从上一块的文本、音频和视频继续。

**Intent Module × Realization Module：** Intent Module 负责把多模态用户输入与历史语言压缩成下一步的参与决策和语义隐状态；Realization Module 接收该隐状态、参考图像、用户音视频和已生成媒体，产生同步音视频。前者解决何时说、说什么和跨块的语义规划，后者解决怎样以可听可看的连续信号表达；两者共用块历史但保持独立参数与历史，组合后才形成可交互的生成回路。

图 2 把预填充阶段、流式块和两个模块放在同一张流程图中。读图时可以先沿着全局描述和用户文本、用户视频进入 Intent Module 的路径，观察它怎样产生 y_k 和 h_k；再看 h_k、参考图像、用户音频与视频编码、以及之前生成的助手媒体怎样一起进入 Realization Module；最后看解码器怎样把当前块的潜变量送回助手音视频。

> **看图路径：** 1. 先沿左侧 Global Description 与 User Text、User Video 进入 Intent Module 的路径看参与决策如何产生；2. 再看 h_k 如何进入 Realization Module，以及 User Audio、User Video 经 VAE 编码后与参考图像一起成为条件；3. 最后对照 Prefill 与 Streaming 的分界，确认每个 chunk 的输出只进入后续 chunk

[![原论文 Figure 2：The framework of Duo v1.](https://arxiv.org/html/2611.15131v1/duo-architecture-chy.png)](https://arxiv.org/html/2611.15131v1/duo-architecture-chy.png)

*论文图 2。原论文 Figure 2:：“The framework of Duo v1. A joint causal diffusion transformer is conditioned on hidden states from the Intent Module, directly encoded user video and audio, a visual reference,…”。*

图中左侧是预填充的全局描述，右侧按 chunk 展开用户文本、用户视频、用户音频和助手输出；Intent Module 位于上方，Realization Module 位于下方，h_k 以独立连线跨到生成器。这个排布正好说明两个模块的分工：用户文本经 Text Tokenizer、用户视频经 Vision Enc. (ViT) 后进入 Intent Module，汇同已有语言历史形成参与决策和隐状态；Realization Module 再把该隐状态、参考图像、用户音视频与已生成媒体合在一起，生成当前块的音频和视频。图中的媒体是离线、剧本条件的示例，不能把它当作实时运行截图。

### Intent Module 怎样把可用输入变成一个块的动作

Intent Module 的输入不是等所有模态都齐了再拼接，而是按各自可用的时间进入条件。用户音频先经过语音识别得到文本，再由强制对齐给每个文本 token 在源音频时间轴上分配一个跨度；一个 token 只有在其对齐跨度结束后才被允许进入模型。视频帧和音频样本也按源时间戳映射到同一个半开块区间。助手文本的目标按发声起点分配到块，初始块固定为 `<wait>`。这样构造出的每个块视图只包含决策边界上已经可用的信息，而细粒度对齐仍保留在构造块视图之前，避免过早把语音边界四舍五入。

视觉编码还有一层容易漏掉的因果性。时序 patch 可能把多帧合成一个 token，如果跨了块边界，后面的注意力掩码再严格也无法把已经混进去的未来信息剔除。因此 Duo v1 让每个时序组完全落在一个输入块内：原生 17 帧块内，最后 1 对重复第 16 帧，而不是与下一块的第 17 帧配对；每个组只在组内最晚的源帧时间之后可用。这保留了预训练视觉前端常见的输入格式，同时阻止时序分组跨越块边界。

输出层把参与动作和语言内容放在同一条 token 预测路径上。`<speak>` 后面跟文本主体，`<wait>` 不添加新文本；两者都不影响已经在播放的媒体，等待也可以与继续进行的声音或非语言行为共存。把动作单独分出来，是因为一句合适的话说在错误时刻仍然会造成交互失败；模型需要先决定当前块是否开始说话，再决定说什么。

**`<speak>` × `<wait>`：** `<speak>` 表示该块开始输出新文本，后面接实际词串；`<wait>` 表示不新增文本，但播放或非语言行为仍可继续。把参与动作单独作为一个 token，模型才能先决定是否开口，再决定说什么；如果只有文本内容，模型容易在错误时刻插入话语。训练时分别监督动作与内容，并处理等待在大多数块中占多数的问题。

图 3 用一个长对话展示了块、对齐和训练目标的关系。读图时先看用户文字如何按对齐结束时间落到后面的块，助手文字如何按发声起点落入块；再看被高亮的 chunk 82，它包含 17 帧、约 708.3 ms，逐帧画出了用户视频、助手视频和音频，并列出 assistant tokens 中的 `<speak>`、逗号、`though` 和句点；最后看训练目标面板，那里还要区分一个块内已经出现的助手 token 与由上一块上下文预测的“下一块” 目标。

> **看图路径：** 1. 看用户文字如何按对齐结束时间进入后面的块，助手文字如何按发声起点落入块；2. 看 chunk 82 的 17 帧，以及 assistant tokens 中的 `<speak>`、逗号、`though` 和句点；3. 对照 chunk 81 的上下文为何以‘下一块’ `<speak>`、逗号、`though` 和句点为训练目标，再看 chunk 82 输入 `Of` 后对应的下一块目标 `<wait>`

[![原论文 Figure 3：ASR-aligned chunk construction and causal supervision.](https://arxiv.org/html/2611.15131v1/fig3_chunking.png)](https://arxiv.org/html/2611.15131v1/fig3_chunking.png)

*论文图 3。原论文 Figure 3:：“ASR-aligned chunk construction and causal supervision.”。*

图中可见，用户说出的词不一定与助手文本同步落在同一个块里，assistant 的新增语音起点才决定 `<speak>` 出现在哪一块。chunk 82 的 assistant tokens 明确包含 `<speak>`、逗号、`though` 和句点，assistant text 也显示 `, though.`，所以不能把这一块说成助手没有新的发声起点。图 (c) 展示的是因果监督的错位：chunk 81 的上下文对应的“下一块” 目标是 `<speak>` 加 `, though .`；到 chunk 82，用户词 `Of` 已进入输入，对应的下一块目标才是 `<wait>`。这个对照说明等待不是空白，它可以与正在播放的语音和可见行为同时存在，也说明块级监督必须把动作和内容分开记录。

### Realization Module 怎样把语义条件变成同步音视频

Realization Module 先生成紧凑潜变量，再由解码器还原媒体。音频侧，每个立体声声道被压缩为每秒 40 个潜变量，每个向量 32 维；视频侧，编码器以 17 帧为一组处理，不足 17 帧时补 padding。每组按 1 个关键帧加 4 包 4 帧的 11-44-44-44-44 时间排列，17 帧被编码成 5 个潜帧；每个潜帧 24 维，空间分辨率降低 16 倍。

对于高 H、宽 W 的输入，一个 RGB 帧组编码为 5×H/16×W/16×24 的张量。进入扩散 Transformer 前，视频潜变量再做 2×2 空间合并，得到每个 token 96 维的输入；音频每个声道每个潜变量仍是 32 维。

生成器初始化自预训练的音视频扩散骨干，用 flow matching 从随机噪声生成当前块的音频与视频潜变量。Intent 条件先经线性投影到生成器宽度，再由 refiner 网络产生文本条件嵌入；注意力掩码把特征计算限制在与全局指令 d 和当前助手文本 y_k 对应的 token 上。用户音频和用户视频由各自的 VAE 编码为条件潜变量，参考图像由视频 VAE 编码为参考潜变量；此前生成的助手音频和视频潜变量提供媒体历史。

位置编码使用 3D-RoPE。文本条件只用时间坐标，两个空间坐标置零；音频 token 用两个极端空间位置区分左右声道；音频和视频的时间坐标按实际播放时间对齐，音频每个潜变量对应 25 ms，时间原点由用户输入音频的起点定义。视频的时间位置取对应帧段的播放时间，因此 17 个源帧到 5 个视频潜帧的非均匀映射仍然落在同一时间单位上。

注意力掩码规定了哪些条件可以合在一起。当前块的噪声媒体 token 可以读参考、全局指令、先前块的干净媒体历史、当前块的意图隐状态和自身，但不能读当前块自己的干净目标，也不能读任何后续块。训练时序列里确实会放入各块的干净媒体，但掩码会挡住当前块噪声 token 对自身干净目标的访问；这不是把干净媒体从训练中删除，而是让它只作为过去历史或其它块的监督条件存在。

**causal attention mask × clean media history：** causal attention mask 规定每个噪声媒体 token 能读参考、全局指令、当前意图隐状态、过去干净媒体和自身，不能读当前块干净目标或未来块；clean media history 是训练时插入的已实现媒体条件，但在当前块被掩码挡住。两者配合，既给生成器连续历史，又防止训练时偷看当前答案，使训练序列的条件与流式推理一致。

这样，Realization 的输入既有用户观察、参考外观和语义指导，又有已生成历史；它的输出不是一次性补齐整个视频，而是在每个块里联合采样音频和视频潜变量。块与块之间靠干净历史连接，块内部靠意图隐状态和当前噪声 token 互相约束。

### 第一阶段怎样训练参与动作和语言输出

第一阶段冻结不了 Intent，因为这时要先用因果监督把它训练成会看视频、读文本、决定何时参与的模块。训练样本按块对齐：在第 k 块开始时，模型从全局指令 d、截至 k−1 块可用的用户视频和 ASR 文本、以及此前助手文本中预测当前助手输出。决策上下文不包含助手视频；Intent 读取用户视频和 ASR 文本，并以此前助手文本为语言历史，但不以助手视频作为参与决策条件。

目标函数是加权的自回归负对数似然。每个 token 有类别相关的权重 w，监督掩码 m 决定它是否参与损失；初始 assistant 输出 y_0 固定为 `<wait>`，只作为上下文而不计入损失。分母把一段对话内有效权重加总，并设下限 1，避免空样本或极短样本把损失放大。

\[\mathcal{L}_{\mathrm{intent}}=-\mathbb{E}\!\left[\frac{\sum_{k,j}m_{k,j}w_{k,j}\log p_{\phi}\!\left(y_{k,j}\mid C^{\mathrm{I}}_{k},y_{k,<j}\right)}{\max\!\left(1,\sum_{k,j}m_{k,j}w_{k,j}\right)}\right],\]

公式里 j 遍历当前块的动作 token、内容 token 和结构 token；求和先在一个样本的块与 token 上做，再按样本有效权重归一化。这样，动作 token 和文本 token 可以有不同的损失尺度，初始固定等待也不会把模型推向永远等待。

大多数块没有新的助手语音，如果直接按 token 平均，模型会倾向输出 `<wait>`。Duo 在离线阶段根据录制的助手事件和块开始时用户是否在说话，为监督目标分类：空闲等待、用户说话中的等待、普通开口、打断开口、接续、以及前一轮用户问题引出的开口。它用这些标签对目标做子采样并加权，动作与内容分别设权重，开口类别再做调整；被抽掉的目标仍保留在对话历史中，模型只能看到因果上下文。验证时保留全部合法目标，并分别报告动作、语音和等待的 token 级指标。

为了适应不完美的助手历史，训练还会在选定的接续块里截断或重复文本，并屏蔽这些位置的损失，让后续有效目标继续监督；在错过开口的恢复样本里，把某些普通开口在历史中改成 `<wait>`，屏蔽其损失，并在同一助手回合的下一块只让 `<speak>` 参与损失。视觉与语言 grounding 通过数据检查把依赖用户视频的助手回合内容 token 加权，同时保持同一条因果视觉输入路径；提示增强只改变静态描述、格式、顺序和完整度，不编造新事实。可选情绪标签作为单独加权的附加项，只在标注的因果边界进入。该阶段用低秩适配微调 Intent Module，之后冻结它，为媒体训练提供隐藏状态。

### 第二阶段怎样让 Realization 只按过去生成同步媒体

第二阶段冻结 Intent Module，训练 Realization Module。训练序列按条件结构组织：参考媒体、全局指令、所有块的干净媒体，以及每个块的生成部分。生成部分由一个当前块的意图条件 x_k^t 和加噪后的助手视频、音频 token 组成；当前块还包含 5 个视频潜变量和 2×29 个音频潜变量，以匹配音视频编解码器的时间排列。

训练时把各块的干净媒体也放进序列，但注意力掩码保证当前块的噪声媒体只读取参考、全局描述、历史文本、历史干净媒体、当前块意图特征和自身，不能读取当前块自己的干净媒体或任何未来块。由于视频和音频 token 都按播放时间放位置，即使训练窗口从一段对话的中间开始，位置编码仍与实际时间对齐；窗口只截取连续块，避免超出初始化模型的上下文长度。

媒体的训练目标是 flow matching 的速度场。干净媒体为 z，噪声为 ε，噪声时间 τ=0，干净时间 τ=1，输入是 (1−τ)ε+τz，目标速度是 z−ε。这样训练的是从随机噪声指向干净潜变量的联合音频视频方向，而不是单独预测某一模态的下 1 帧。

图 5 把训练序列、位置编码和因果掩码放在一起。读图时先看 (a) 中参考、共享指令、各块干净媒体和当前块噪声媒体怎样排列；再看 (b) 中文本、视频和音频 token 的时间单位，文本与音频按索引前进，视频按帧段起点取时间；最后看 (c) 的读写关系，确认当前块噪声媒体能看到历史、参考与当前意图，却看不到自己的干净目标和未来。

> **看图路径：** 1. 先看 (a) 的训练序列怎样把参考、全局指令、干净媒体和当前块噪声媒体排在一起；2. 看 (b) 中文本、视频、音频使用的时间位置单位以及左右声道位置；3. 看 (c) 的注意力矩阵，确认当前块噪声媒体不能读取自身干净目标和未来块

[![原论文 Figure 5：Training sequence, positional encoding, and attention mask of the Realization Module.](https://arxiv.org/html/2611.15131v1/fig6_rope_mask.png)](https://arxiv.org/html/2611.15131v1/fig6_rope_mask.png)

*论文图 5。原论文 Figure 5:：“Training sequence, positional encoding, and attention mask of the Realization Module.”。*

图中 (a) 把干净 z_{k−1}、干净 z_k、h_{k−1} 与 h_k、加噪 z_{k−1} 和加噪 z_k 分开画，说明训练上下文不是简单把当前块答案拼进去；(b) 中 1 个单位等于 25 ms，视频位置取帧段起点而不是逐帧均匀编号；(c) 的掩码矩阵里，当前块噪声媒体的行只能读到左侧和对角附近允许的键。这个图帮助核对因果性到底落在哪个 token 对上，而不是只看流程框。

### 第三阶段怎样用双 rollout 把四步生成器拉近推理条件

第 3 阶段把因果模型蒸馏成四步生成器，使用分布匹配蒸馏而不是要求生成器沿着教师轨迹逐点一致。训练中有两个分数模型：冻结的真实分布分数模型估计条件数据分布，可训练的假分数模型跟踪当前生成器分布。生成器按因果方式合成一个潜变量窗口，两个分数模型则对完成的窗口做双向评估。这里的 score 不是分类分数，而是加噪分布对数密度对输入的梯度；2 个模型先给出干净估计，再按当前噪声水平换算成 score，因此反向 KL 的梯度可以化为两个干净估计之差。

直接使用随时间变化的系数会有数值尺度问题，Duo 用样本自适应尺度 κ 归一化估计差，再把更新写成向一个停止梯度目标回归。κ 取生成样本与真实干净估计的加权平均绝对差，并设下限 ε0；Δ 是两个干净估计之差除以 κ；z_DMD 是生成样本减去 Δ 后的停止梯度目标。

\[\kappa=\max\!\left(\left\langle|z_{\mathrm{gen}}-\hat{z}_{\mathrm{real}}|\right\rangle_{w},\ \varepsilon_{0}\right),\qquad\Delta=\frac{\hat{z}_{\mathrm{fake}}-\hat{z}_{\mathrm{real}}}{\kappa},\qquad z_{\mathrm{DMD}}=\operatorname{sg}\!\left[z_{\mathrm{gen}}-\Delta\right],\]

公式里的 sg 表示停止梯度，κ 只用来缩放不同样本的更新幅度，Δ 把真实与假分布估计的差转成目标位移；生成器通过可微输出朝这个目标移动。视频和音频分别计算加权均方误差，再按全局有效目标归一化。假分数模型自己用 flow matching 拟合停止梯度的生成样本，并且比生成器更新得更频繁，每次更新都重新取窗口和 rollout，使它跟得上当前生成器。

可选的 GAN 项在假分数骨干的中间层特征上接一个轻量判别器头，用学习到的注意力查询把每个对话的有效音频和视频 token 池化成一个 logit。判别器的输入物理上排除了文本、Intent、参考和干净上下文行，只判断联合音视频真实性，不要求生成媒体复现录制文本。生成器一侧把 DMD 损失与软 plus 判别损失相加，假分数模型一侧加上真假样本的判别损失。

双 rollout 解决的是条件来源不一致：在 DMD 之前，Realization 看到的是录制助手文本提取的特征和录制媒体前缀；推理时，文本由 Intent 自己决定，媒体历史由 Realization 自己生成。每个 DMD 样本因此先做语言 rollout：冻结的 Intent 对训练窗口最后一个助手回合，从 k0 开始回放录制文本，之后贪心地预测参与动作和文本；最后一个回合及之后的录制文本被移除，窗口之前的录制历史保留。然后做媒体 rollout：Realization 按块生成潜变量，遵循 Self Forcing 式做法，四步中若干步不带梯度，最后一步可微，选定的退出步 j* 在整条轨迹上共享。

每个干净输出在 τ=1 下做一次干净前向以更新 KV cache。录制回合的边界只定义训练窗口，不限制生成回答的长度或内容。

图 6 把这条训练回路拆成左右两部分。读图时先看左侧 recorded history 与 intent rollout 在 k0 处的切换，确认冻结的 Intent 只自己生成最后一个助手回合；再看右侧 z_gen 加噪后分别进入真实分数模型和假分数模型，二者之差形成 Δ 和 z_DMD；最后看红色、橙色箭头与停止梯度虚线，区分生成器、假分数模型和判别器各自接收哪条梯度。

> **看图路径：** 1. 看左侧 recorded history 与 intent rollout 在 k0 处切换，Intent Module 只对最终助手回合做语言 rollout；2. 看右侧 z_gen 加噪后如何分别经过真实分数模型和假分数模型，再形成 z_DMD 目标；3. 看停止梯度虚线、KV 提交与 VGGT 旋转权重分别连到哪些训练项

[![原论文 Figure 6：DMD training with dual rollout.](https://arxiv.org/html/2611.15131v1/duo-dmd-training.png)](https://arxiv.org/html/2611.15131v1/duo-dmd-training.png)

*论文图 6。原论文 Figure 6:：“DMD training with dual rollout. The frozen Intent Module replays recorded assistant text and generates the final assistant turn from chunk k_0 onward.”。*

图中左侧的 Intent 是冻结的，Realization 是可训练的；记录历史只提供前缀，最终回合由 Intent 自己预测。右侧可以看到，真实分数模型冻结，假分数模型可训练，判别器是可选的；z_DMD 由停止梯度目标给出，KV 提交用虚线表示。这个图直接说明 dual rollout 不是换一批离线文本，而是把推理时会遇到的文本生成和媒体生成都放进蒸馏采样。

**distribution matching distillation × dual rollout：** distribution matching distillation 用真实分布分数模型与跟踪生成分布的分数模型构造反向 KL 的更新方向，让四步生成器匹配数据分布；dual rollout 则在训练时让冻结的 Intent Module 和正在训练的 Realization Module 自己滚出文本条件与音视频历史。前者的优化目标需要来自生成样本，后者提供与推理同源的条件，二者结合才把少步蒸馏和流式自回归条件放在同一训练回路里。

DMD 可能带来相机旋转漂移，而分布匹配并没有显式惩罚这种漂移。Duo 用冻结的 VGGT 从解码后的 rollout 帧估计旋转，计算相对初始旋转的测地角和相邻帧旋转差，再用一个只作用于视频 DMD 项的权重 ρ 调整更新。稳定窗口可以拿到较高权重，强旋转窗口会被压低；该权重不回传梯度到 VGGT 或 VAE。原文也提醒，故意的视角变化和不可靠的旋转估计会影响权重，因此它只是一个重新平衡项，不是完整的几何正确性保证。

### 人体评价测的是什么，分母和判定规则怎样定

Duo 的报告使用人体评价，而不是自动图像或语音指标。评价集有 30 个实时双工交互案例，每个案例把用户的音视频输入和模型生成的音视频回复放在共享时间轴上并排回放，评判者按最终用户体验观看和收听，正常播放速度、带声音，不拆成逐帧特征。每个回复按 6 个二元标准判定：内容回应性、语言遵循、语音可懂度、视觉身份稳定性、音视频同步、音视频情绪一致性。每项都有书面失败条件，没有部分分。

这样一来，总检查数是 30 个案例乘以 6 项标准，即 180 项检查；每个标准的通过率都以 30 个案例为分母，不能把不同标准的通过数直接相加成另一个指标。内容回应性问的是回复是否实质回应用户刚说的话和刚展示的内容；语言遵循问是否用了期望语言；语音可懂度问语音是否完整可懂。

视觉身份稳定性问是否出现身份替换、面部或身体畸形、无法解释的外观变化；音视频同步重点看唇动是否与语音对齐；情绪一致性看声音情绪是否与面部表情和肢体语言一致。

这套协议衡量的是可体验的回复质量，不是逐帧 FID，也不是自动语音识别错误率。它的限制在开头就应记住：只有 30 个案例，判定是二元的，没有部分分，也没有在同一协议下报告其他模型的对照结果。因此后面的通过率可以说明这组样本上的表现和失败模式，不能单独证明系统在所有会话、所有口音、所有网络条件下都稳定。

### 人体评价的主结果：哪些项通过，哪些项仍是短板

人体评价要回答的是：在正常速度、带声音播放时，用户能否得到语言正确、声音清楚、身份稳定、音画同步且情绪一致的回复。下面把总体结果和分项结果放在同一张表里，比较的是同一套 30 个案例、6 项二元标准和同一个无部分分规则；百分比方向都是越高越好，但不同分项的判定对象不同，不能把百分比差值当成同一指标的连续提升。

| 检查对象 | 判定与聚合 | 原文报告结果 | 解释边界 |
| --- | --- | --- | --- |
| 总体 | 30 cases × 6 criteria；每项二元、无部分分 | 168 passed (93.3%)；180 checks (30 cases × 6 criteria) | 通过率按全部检查计 |
| 语言遵循、语音可懂度、视觉身份稳定 | 三项合计 90 checks | all 90 checks | 三项全部通过 |
| 声音情绪与表情、肢体一致 | 每例按正常速度有声音回放判断 | 96.7% of cases | 仍有少数案例不一致 |
| 唇动与语音对齐 | 每例按正常速度有声音回放判断 | 90.0% | 同步接近满分但非满分 |
| 内容回应性 | 是否实质回应用户刚说和展示的内容 | 73.3% (22/30) | 语义回应是最弱项 |

表中最强的证据是生成保真：语言遵循、语音可懂度和视觉身份稳定三项合计 90 项检查全部通过。声音情绪与面部表情、肢体语言一致的比例是 96.7%，唇动与语音对齐是 90.0%。这些结果支持的是这组案例中的语言、语音和身份表现较稳定，不能直接推出任意长会话都不会漂移，也不能推出在更复杂声学环境下仍保持同样比例。

内容回应性只有 73.3%（22/30），是六项里最低的。原文把失败分成两类：一类是玩笑、奇怪评论等长尾对话，需要读出字面之外的真实意图并实时回应；另一类是只有把语音和画面合起来才能看清的意图。文中给了一个例子：用户坐在室内说自己刚解锁共享单车就下雨了，室内画面使这句话更像抱怨，但模型把它当成寻求建议，建议等雨停再骑。这个例子说明，生成得清楚、同步和身份稳定，并不等于理解了用户为什么这样说。

这些数字都来自 30 个案例的人体评价，不是大规模自动评测。总体 168/180 与 93.3% 是同一组检查的两种写法，分项百分比的分母仍是 30 个案例，不能把 96.7% 和 90.0% 的差值直接解释成某项技术的因果效应。原文没有在同一协议下报告其他模型的通过率，因此这里只能说明 Duo v1 自身在这组样本上的表现，不能据此宣称它在所有全双工系统中最强。

### 固定开场参考是否真的抑制了长序列合成漂移

这里的比较不是端到端回答质量，而是合成数据在长序列中的视觉漂移：如果每一块只看上一块末帧，误差会不会越积越大；如果始终保留开场视频作画质参考，画面统计是否更稳定。比较对象是同一段 60 s、10 个 6 s 块的生成序列，评价量是整幅分屏画面的平均亮度 Y′，范围 0–255；亮度稳定不等于身份、结构或语义完全正确，但它能暴露明显的逐块累积变化。

| 合成策略 | 比较条件 | 原文报告结果 | 可读出的问题 |
| --- | --- | --- | --- |
| 只接上一块末帧 | 60 s sequence of ten 6 s blocks | loses 34.2 luma levels by block 9 | increasingly exaggerated facial textures |
| 固定使用开场视频作参考 | 同样的 60 s sequence of ten 6 s blocks | stabilizes at approximately 99 luma after a slight initial decline | maintaining consistent facial appearance through block 9 |

表中基线到第 9 块损失了 34.2 luma levels，并伴随越来越夸张的面部纹理；固定开场参考的策略在轻微初始下降后稳定在约 99 luma，面部外观在第 9 块仍较一致。这个对照支持固定参考确实能缓解这一段序列中的亮度漂移和视觉误差累积，但它只报告了一段 60 s、10 个块的例子，平均亮度也不是身份保持或唇形正确性的直接度量。

固定参考也并非没有代价：它需要保留开场视频并按块重复送入，增加了条件数据与计算组织；原文还指出光稳定也可能与内容本身有关，不能把亮度曲线当作通用质量分数。相机旋转加权是另一个方法细节，原文只描述它用 VGGT 旋转估计调整视频 DMD 损失，没有报告该权重在相同人体评价或自动指标上的量化收益，因此不能把这项设计写成已经验证的提升。

### 结论成立的范围与原文仍然缺少的验证

Duo v1 的报告把自己定位为初步实现，当前支持基本的音视频对话；原文明确说响应时机、较长会话中的一致性、以及从误解中恢复仍需要更广泛的评价。这个限定很重要。人体评价只有 30 个案例，每项是二元判定，没有部分分，也没有在同一协议下给出其他系统的对照；它能说明这组样本上的通过率和失败模式，不能证明任意用户、任意话题、任意噪声条件下都稳定。

最明显的短板是内容回应性 73.3%（22/30）。失败不只来自语音识别或画面生成，而来自实时理解用户意图：笑话、反话、奇怪评论，以及必须把室内画面和共享单车、下雨这句话合起来才能读出的抱怨。模型可能生成语言正确、声音清楚、口型同步的回复，却没有回应用户真正想表达的意思。这个结果不能反过来证明所有语义错误都来自同一个原因，原文也没有报告按失败类型分层的完整混淆矩阵。

生成保真方面的结论也有边界。语言遵循、语音可懂度和视觉身份稳定三项全部通过，说明这 30 个案例中没有出现可见的身份替换、面部或身体畸形、无法解释的外观变化；情绪一致性 96.7%、唇动同步 90.0%。但评价是正常速度有声音回放，不是逐帧几何测量，也不是多轮长会话；不能把它扩展成长时间身份保持、复杂手势、多人交互或强网络抖动下仍然成立。

运行层面，原文报告的是单台 8 卡服务器上的调度与分阶段测量，不是所有部署环境。17 帧块、约 0.71 s 的采样窗口、Intent 90–160 ms、生成 200–450 ms、解码约 30 ms、其他开销约 40 ms，这些数字依赖上下文长度、分辨率、并行配置和是否已有可读的 KV 历史；首帧可见还要加上初始解码和等待采样窗口结束，最坏可再加约 708 ms。没有跨硬件、跨网络或长时间运行的延迟分布，就不能承诺固定端到端时延。

### 复现流式系统时先核对哪些时间、缓存和并行条件

复现时容易只盯模型结构，忽略运行时的时间预算。Duo 在每个交互块中依次做输入采样、Intent 推理、联合潜变量生成和流式解码；输入采集在回复生成期间继续进行。24 fps 下每个采样窗包含 17 个视频帧和对应音频，约等于 708 ms。原文报告的 Intent 推理为 90–160 ms，768×576 分辨率的联合音视频生成是 200–450 ms，4 帧组解码约 30 ms，其他数据移动、传输和显示开销约 40 ms；三项相加得到约 330–650 ms 的核心延迟，但首帧可见还要加上初始解码和等待采样窗结束的时间。

原 VAE 解码 5 个潜帧需要 2 个潜帧的前瞻，这会增加块边界等待；Duo 改成对已生成的视频潜变量逐个增量解码，每个潜变量产生 4 帧，再做时间对齐以保持 17 帧块长。最短播放间隔是每组第一个潜变量对应的 1 帧，约 41.7 ms；实测每个潜变量解码约 30 ms，因此在潜变量按时到达时，解码可以跟上播放。这里说的是解码器速度，不是生成器一定能按时提供潜变量。

运行时把 Intent 的 VLM 放在 GPU 0–3 上做 4 路张量并行，Realization 的 DiT 在全部 8 张 GPU 上做张量并行或序列并行，流式 VAE 在 GPU 4–7 上做 4 路空间切分。一个块的四次去噪前向读取已提交的历史 KV，另一次干净前向处理当前生成潜变量并写入后续块可读的 KV；Intent 使用滑动窗口，Realization 周期性重置历史媒体 KV，重置时保留参考和共享条件，再由干净前向建立新历史。重启时要按原顺序回放已完成潜变量的干净前向来重建活跃媒体缓存。

每个块的目标周期由生成时间、下一块 Intent 推理与完整解码中的较大者、以及切换开销组成。若下一块输入已经可用，并且解码与 Intent 推理同时开始，则周期为下式；目标是让周期不超过 17/24 s，并给阶段波动留出余量。

\[T_{\mathrm{cycle},k}=t_{\mathrm{gen},k}+\max\!\left\{t_{\mathrm{intent},k+1},t_{\mathrm{decode},k}^{\mathrm{full}}\right\}+t_{\mathrm{switch},k}.\]

公式中 t_gen,k 包含四次去噪前向和一次干净前向，t_decode,k^full 是完整块解码，t_intent,k+1 是下一块 Intent 推理，t_switch,k 是切换开销。只有首包解码进入初始响应路径，完整解码进入吞吐预算；调度器通过保留解码槽位、限制输出领先播放的量、结合 KV 窗口和内存预算来接纳工作。

**tensor parallelism × sequence parallelism：** tensor parallelism 把权重和对应张量计算切到多卡，sequence parallelism 让每张卡保留完整权重并处理 token 序列的一段；前者减少单卡权重与矩阵计算压力，后者适合沿序列切分。运行时在每块内存预算内比较二者并选用较快的可行配置，以维持 17 帧块的生成周期；这只说明调度选择，不等同于端到端延迟必然低于播放速度。

原文列出项目主页、GitHub 和 Hugging Face 页面；这些页面可访问，不等于训练代码、权重和完整运行脚本都已一起公开。复现时要把代码、权重、系统运行分成三项核对：代码是否包含数据对齐、因果掩码、3 阶段训练和运行时调度；权重是否覆盖 Intent、Realization、VAE 与分数模型；系统是否能在目标 GPU 上达到目标块周期。少其中任何一项，都不能把页面存在等同于完整复现。

### 训练数据怎样同时提供受控事件和真实互动

Duo 的训练数据由合成和录制两条路线拼成。合成路线要解决的是受控事件：普通大模型生成的对话容易重复话题、关系和轮流说话模式，于是先用控制卡采样时长、语言、人物设定、微动作、互动类型、情绪和分辨率。时长候选包括 30 s、45 s、60 s，语言为中文或英文，互动包括日常交流、打断、追问或辩论、主动询问；分辨率只在视频合成时使用，候选是 1536×576 和 1152×768。控制卡被写入固定模板，由语言模型写成结构化剧本，规则校验器检查结构、块时长、语言和叙述里是否出现手机等拍摄设备词，错误会退回重写，最多尝试 3 次。

通过校验的剧本再按模板转成每个块的文本到视频提示，不再额外调用语言模型。提示里有一部分固定句子，分别规定参考的角色、画面内容和因果顺序：上一块末帧只作为起始状态，开场视频只提供画质参考，开场音频只提供声音和房间氛围；每个画面是参与者自己的前置摄像头，不能出现第三人称、镜像、背后视角、录制设备和字幕；反应必须等触发动作结束后才开始，避免助手在用户动作之前先回应。

视频合成按块进行。第 0 块接收提示和一张只有分屏几何的白色布局图，模型自己生成两个参与者和背景；后续块从上一块最后 1 帧延续姿态、表情和构图，同时以第 0 块的开场视频作为固定画质参考，以第 0 块完整音频锚定两个声音和房间音。固定参考的作用是抑制误差逐块累积：原图 7 展示了这种逐块合成流程，原文还用 60 s、10 个 6 s 块的比较说明，只接前一末帧的基线会在第 9 块损失 34.2 luma levels，而固定开场参考的策略在轻微初始下降后稳定在约 99 luma。

合成片段还要经过质量检查：首帧与条件图的 SSIM 至少 0.90，感知哈希汉明距离至多 4；生成音频与源音频经响度归一化、波形残差和 VAD 比较，若出现至少 0.40 s 无法解释的音频活动就拒绝；相机推近用 4 FPS 的人脸尺度跟踪，平滑尺度达到基线的 1.30 倍并持续 0.75 s，或在 0.50 s 内跳增 1.22 倍，会被拒绝；大范围视觉突变则用 LAB 差异、变化像素比例和颜色亮度直方图距离，在 4 FPS 采样下过滤。这些阈值是数据清洗参数，不是模型评价结果。

录制数据分成单流视频、同步双流视频、异步双流视频、带观众评论的直播、双人双工音频和开放数据集。共同标准包括真实说话人及原始声音、保留身份、转写和时间映射、视频至少 720p 有效分辨率、无视觉叠加、双流片段至少包含一次完整对话交换。直播数据用带时间戳的观众问题对齐主播回应，不能直接对齐时构造对应话语并按主播语音和可用静音安排插入；再用 Qwen3-ASR-1.7B、Qwen3-ForcedAligner-0.6B、Silero VAD、Qwen2.5-Omni-7B、FSMN-VAD、Paraformer 和 CAM++ 完成转写、对齐、语音活动、音频类型、说话人分离与说话人计数检查。

**synthetic data × recorded data：** synthetic data 用控制卡、剧本、规则校验和参考锚定生成双人视频通话，能精确控制打断、时长、语言和人物设定；recorded data 提供真实说话人、真实声纹、自然停顿和听者反应。前者补足受控事件和因果时间标注，后者补足真实外观、声音和互动分布；两者都需对齐到共享时间轴并经过质量过滤，才能监督 Intent 的参与决策和 Realization 的同步生成。

两条数据路线不是简单相加。合成数据给出可控的打断、重叠和事件顺序，录制数据给出自然声纹、真实外观和不可编排的互动细节；它们都必须落到共享时间轴，才能同时为 Intent 的动作监督和 Realization 的音视频目标提供条件。代价是数据管线很长，合成数据依赖上游生成器和多个质量阈值，录制数据依赖对齐、说话人分离和裁剪，任何一步出错都会改变块边界或引入伪事件。

### 什么时候值得尝试 Duo 的路线，第一步与后续验证是什么

如果任务本身就是块级、可打断的音视频对话，并且你能够构造带时间戳的用户语音、用户视频、助手语音和助手画面，那么 Duo 的路线值得研究：它把何时说、说什么和怎样同步生成拆成 Intent 与 Realization 两个可分别检查的环节，并用共享时间轴和因果掩码把训练条件与流式推理绑在一起。若任务只需要离线文本回答，或只需要生成一段无人交互的视频，这套双模块和双 rollout 的复杂度不是必要的。

复现的第一步不是直接训练完整模型，而是先核对数据与时间：17 帧块在 24 fps 下约 0.71 s，音频每个潜变量 25 ms，视频每块 5 个潜变量，音频每块 2×29 个潜变量；用户文本必须在对齐跨度结束后进入，视觉时序组不能跨块，初始块固定为 `<wait>`。这些条件一旦错位，后续的因果注意力掩码和 DMD rollout 都会在错误的历史上训练。第二步才是冻结 Intent，检查 Realization 的干净历史、当前块噪声媒体和意图隐状态是否按图 5 的掩码连接；第三步再检查四步生成器的退出步、KV 提交和双 rollout 是否真的复现了推理时的文本与媒体条件。

在结论上，值得保留的是有证据的部分：这组 30 个案例、6 项二元标准中，180 项检查通过 168 项，语言、语音可懂度和视觉身份三项合计 90 项全部通过，声音情绪一致性 96.7%，唇动同步 90.0%；同时内容回应性只有 73.3%（22/30），长尾语义和联合语音视频意图仍是主要限制。合成数据的固定开场参考在原文的一段 60 s、10 个 6 s 块上把亮度漂移压到约 99 luma，但这只是数据构造的局部证据。最后还要补 3 类验证：更长会话中的身份与内容一致性，真实打断、重叠和误解恢复，以及不同硬件和网络条件下的延迟分布。代码、权重和可运行系统要分别验证，不能互相替代。

<details>
<summary>📎 论文与评分元数据</summary>

排名：前50% | 文档类型：模型报告 | [arXiv 原文](https://arxiv.org/abs/2611.15131v1)

</details>

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。

- 评分规则：type-aware-v1

- 评分模型：deepseek-v4.1-flash

- 评分请求协议：openai_responses

---

[← 返回 2026-11-13 语音/音乐/音频论文速递](/audio-paper-digest-blog/posts/2026-11-13/)
