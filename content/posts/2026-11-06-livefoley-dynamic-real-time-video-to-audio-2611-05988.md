---
title: "LiveFoley: Dynamic Real-Time Video-to-Audio Generation for Immersive Interactive Worlds"
date: 2026-11-06
draft: false
tags: [视频到声音生成, 自回归模型, 扩散模型, 流式处理, 实时处理]
categories: [论文速递]
description: "LiveFoley 针对流式视频到音频中视觉前端等待未来帧和音频后端逐块独立去噪的两处瓶颈，用尾部对齐滑动窗口保留感受野并以可变步长统一模型和加宽局部去噪窗口，在 156 毫秒端到端延迟下把时间对齐做到接近离线模型并在流式系统中取得较好生成质量。"
hiddenInHomeList: true
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_arxiv_id: "2611.05988"
paper_digest_workbench_contract: "researcher-workbench"
paper_digest_workbench_schema_fingerprint: "1f09b594c317cc38e934de27a5b0e8ceb4baa50ef79bd4f8683dd9adea720fe7"
paper_digest_reader_title: "LiveFoley：为实时交互画面即时配音的流式视频到音频生成"
paper_digest_original_title: "LiveFoley: Dynamic Real-Time Video-to-Audio Generation for Immersive Interactive Worlds"
paper_digest_arxiv_version: 1
paper_digest_arxiv_versioned_id: "2611.05988v1"
paper_digest_arxiv_abs_url: "https://arxiv.org/abs/2611.05988v1"
paper_digest_arxiv_pdf_url: "https://arxiv.org/pdf/2611.05988v1.pdf"
paper_digest_primary_task: "视频到声音生成"
paper_digest_tags_contract: "paper-tag-flat-tags"
paper_digest_tags_schema_fingerprint: "27e36280a4b8d3df62ebe54d3ab037920f4d69feb2b554163f01bbae2caf4338"
paper_digest_tags_selection_contract: "paper-tag-selection"
paper_digest_tags_registry_version: "paper-tag-catalog"
paper_digest_tags_registry_sha256: "9673bc0122e1905a5dcfd8b223675400cc2fa4c36095bc0e5f817edf99a0ec5c"
paper_digest_tags_concepts: [{"facet":"task","id":"task.video-to-audio","label":"视频到声音生成"},{"facet":"method","id":"method.autoregressive","label":"自回归模型"},{"facet":"method","id":"method.diffusion","label":"扩散模型"},{"facet":"setting","id":"setting.streaming","label":"流式处理"},{"facet":"setting","id":"setting.real-time","label":"实时处理"}]
paper_digest_primary_method: "自回归模型"
paper_digest_score: 8.3
paper_digest_rank_bucket: "前25%"
paper_digest_document_type: "方法研究"
paper_digest_one_sentence: "LiveFoley 针对流式视频到音频中视觉前端等待未来帧和音频后端逐块独立去噪的两处瓶颈，用尾部对齐滑动窗口保留感受野并以可变步长统一模型和加宽局部去噪窗口，在 156 毫秒端到端延迟下把时间对齐做到接近离线模型并在流式系统中取得较好生成质量。"
paper_digest_authors: [{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Yusheng Dai"},{"affiliations":["Monash University Nanjing University ShengShu Technology Tampere University"],"name":"Vladimir Iashin"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Kangdi Wang"},{"affiliations":["Alibaba Token Hub, Alibaba Group Tsinghua University Corresponding author"],"name":"Yuxuan Jiang"},{"affiliations":["Monash University Nanjing University ShengShu Technology Tampere University"],"name":"Ilpo Viertola"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Weiqiang Wang"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Qiuhong Ke"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Min Zhao"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Jianfei Cai"}]
paper_digest_abstract_sha256: "c94edbd24e3e934d30f3e1e74af926ffb369b8a8df93c7bb41f57c20d16a827a"
paper_digest_sidecars: {"citation.bib":{"sha256":"d26f929b1b4144dab15ad9d4ba11db88506a46fce4b280492f4cff832b655d25","url":"/audio-paper-digest-blog/client/papers/2026-11-06/2611-05988/citation.bib"},"citation.json":{"sha256":"d327c278dc0917d2f3d338a2cc3f3486a3653c94c3cd68beb9a9a9a4ca6b3bfc","url":"/audio-paper-digest-blog/client/papers/2026-11-06/2611-05988/citation.json"},"citation.ris":{"sha256":"94f1e23e19ce4621ad23e487f5a404d056ed7f322d0674a9c236b4f20d0f8516","url":"/audio-paper-digest-blog/client/papers/2026-11-06/2611-05988/citation.ris"},"rethink-context.json":{"contract":"paper-research-context","schemaFingerprint":"5d4e79f7d3ee65b39ccb38281548bf20a1b2041ab7a27625eaf97ab9909a8383","sha256":"5ee93d7866f7ff1d5c6560811a825c4aa399a935aca1d50dd017a728cd06f387","url":"/audio-paper-digest-blog/client/papers/2026-11-06/2611-05988/rethink-context.json"}}
paper_digest_api_reader_contract: "beginner-researcher"
paper_digest_api_reader_schema_fingerprint: "cd8baf5b8bda3a49eec64f6005931af63de4e9a13148cba5f354c661ca6e9df2"
paper_digest_api_reader_article_sha256: "7fa75e791ad03a425e566d204c9eec6f7a8c999880edfecda751e614b2741e63"
paper_digest_api_reader_plan_sha256: "70dd85097fe7039684ac108a216c939ce0d2852e1236ffb2e45203b6aab0e733"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings"
paper_digest_api_reader_source_binding_schema_fingerprint: "d2a2607a6e561909473022eb43f56332ee357af8568566a095c29083ffdec9cc"
paper_digest_api_reader_source_bindings_sha256: "1b923884f7b0c0b42280fecd1208a4045da7c054b0119baf40deea9c09384832"
paper_digest_api_reader_source_table_count: 5
paper_digest_api_reader_source_formula_count: 2
paper_digest_api_reader_structured_artifacts_sha256: "260bd892967757f407302218f83860fe40ab53e5d184b1f128ee7330019eba4f"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity"
paper_digest_api_reader_author_identity_schema_fingerprint: "1e3fd3a9a56c9a5bf52df8df5022690b9a3fa92e83e934f295af87c0e258ed2f"
paper_digest_api_reader_author_identity_sha256: "255cb48ed360dfc6ba328a0dce85ff2342f4c2739df481139ee11dae904cb554"
paper_digest_api_reader_author_count: 9
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity"
paper_digest_api_reader_resource_identity_schema_fingerprint: "33b0be17118be61f39b85ce690c8da17e91f2864bb65e85284f60c40067328e0"
paper_digest_api_reader_resource_identity_sha256: "07fccf57eb6c8d287203bb7f84bd84da8876bdaa657a79f6c53481ebd6b4f8ea"
paper_digest_api_reader_resource_count: 2
paper_digest_api_reader_figure_persistence: "ephemeral-no-persisted-figure-assets-v1"
paper_digest_api_reader_decision_projection: "api-reader-decision-projection"
paper_digest_api_reader_decision_projection_schema_fingerprint: "e56feb5ab75c8710904916b898f73dab9bb18bdf65bb60b7ed2edf7f99cea860"
---

# 📄 LiveFoley：为实时交互画面即时配音的流式视频到音频生成

> 英文题目：*[LiveFoley: Dynamic Real-Time Video-to-Audio Generation for Immersive Interactive Worlds](https://arxiv.org/abs/2611.05988v1)*

<!--paper-tag-hierarchy-v1:start-->

**研究分类**

- **研究任务**：[音频生成](/audio-paper-digest-blog/papers/?concept=task.audio-generation) → [视频到声音生成](/audio-paper-digest-blog/papers/?concept=task.video-to-audio)
- **研究方法**：[生成模型](/audio-paper-digest-blog/papers/?concept=method.generative) → [自回归模型](/audio-paper-digest-blog/papers/?concept=method.autoregressive)；[生成模型](/audio-paper-digest-blog/papers/?concept=method.generative) → [扩散模型](/audio-paper-digest-blog/papers/?concept=method.diffusion)
- **研究条件**：[流式处理](/audio-paper-digest-blog/papers/?concept=setting.streaming)；[实时处理](/audio-paper-digest-blog/papers/?concept=setting.real-time)

<!--paper-tag-hierarchy-v1:end-->

> 评分：**8.3/10** | 创新 1.5/2 | 技术严谨 1.2/1.5 | 实验充分 1.3/1.5 | 清晰度 0.8/1 | 影响力 1/1.5 | 开源 1/1.5 | 可复现 0.3/0.5 | 工程/实践 1.2/1.5


## 👥 作者与机构

- Yusheng Dai：机构信息未能在本次解析中与作者逐人可靠绑定
- Vladimir Iashin：Monash University Nanjing University ShengShu Technology Tampere University
- Kangdi Wang：机构信息未能在本次解析中与作者逐人可靠绑定
- Yuxuan Jiang：Alibaba Token Hub, Alibaba Group Tsinghua University Corresponding author
- Ilpo Viertola：Monash University Nanjing University ShengShu Technology Tampere University
- Weiqiang Wang：机构信息未能在本次解析中与作者逐人可靠绑定
- Qiuhong Ke：机构信息未能在本次解析中与作者逐人可靠绑定
- Min Zhao：机构信息未能在本次解析中与作者逐人可靠绑定
- Jianfei Cai：机构信息未能在本次解析中与作者逐人可靠绑定

## 📌 核心摘要

流式视频到声音生成要求从任意到达的像素流连续合成声音，输入是25 fps视频帧序列，输出是与画面在时间上对齐的波形，难点是编码器需要足够长的上下文才能判断动作时刻，而等待未来帧会带来可感知的延迟。LiveFoley的视觉前端把非因果的Synchformer分段编码器窗口尾部固定在当前帧，并用首帧填充补齐历史缺失，使每个0.08 s跳步只等待一个新到达的片段，同时保留完整的16帧双向注意力上下文。两层同步器把不同跳步取出的尾部token映射到同一12.5 Hz隐空间，使同一个自回归主干可以在推理时切换延迟与计算量。该共享表示进入后端，先由因果语言模型给出粗略声学状态，再用局部流匹配头在连续变分自编码器隐空间内精修当前音频块，默认的历史扩展把过去两个干净块加入去噪窗口而不增加前视。与离线联合去噪不同，这种因果逐块提交只依赖已观测帧，避免了等待整段视频。在VGGSound测试集上，48 kHz版本的去同步误差为0.48，与离线MMAudio-L的0.47基本持平，明显好于流式基线的0.67到1.03，而16 kHz版本在流式系统中取得最好的生成分布指标。结论适用于8 s短片评测和单卡实时仿真，作者报告默认配置端到端延迟为156 ms，未来预热变体为236 ms，离线质量差距和更长序列的漂移尚未完全解决。

## 🔗 开源与复现资源

- 第三方资源：<https://dalision.github.io/livefoley-page/> — 链接可访问（HTTP 200）

- 代码相关资源：<https://github.com/dalision/livefoley> — 链接可访问（HTTP 200）

可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 流式视频到音频要解决什么输入输出问题

流式视频到音频的输入是不断到来的像素流，例如游戏引擎渲染画面、增强现实眼镜的相机画面或直播视频帧，输出是与画面在时间上对齐的声音波形。论文强调这不是轮流对话那样的回合制生成，而是连续同步，脚步、撞击与开关门这类瞬态事件要求声音与动作帧精确对应。系统必须在音频相对视频的延迟被人察觉之前完成视觉编码和音频合成，否则沉浸感会被打破。

输出需要同时保留两类信息，一是语义对应，画面里下雨就不能配成车流声，二是时间对应，声音事件不能明显迟到或早到。评价因此分成分布相似度、音频质量、语义对齐和时间对齐 4 个维度。论文把时间对齐单独拿出来作为流式系统的关键约束，因为离线系统可以看到整段视频再统一生成，而流式系统只能根据已到达的帧做因果决策，天然处于信息劣势。

这种因果约束带来两个具体代价。视觉侧若要看清动作上下文就需要缓存未来帧，缓存即延迟；音频侧若要保证音质就需要联合考虑前后块，而流式只能逐块提交，提交即锁定。因此后文分别在视觉前端和音频后端做文章，目标都是在不明显增加延迟的前提下补回上下文。

### 离线拟音与已有流式路线各自卡在哪里

离线视频到音频已经从逐帧的 CLIP、RGB 和光流特征发展到片段级特征，Synchformer 这类片段级编码器大幅改善了时间对齐，成为 MMAudio 等离线系统的视觉条件。离线扩散或流匹配模型可以对所有音频块做全局双向去噪，质量较高，但需要完整视频输入，无法直接用于实时交互。

已有流式路线分为两类困难。视觉侧若用 Synchformer 这类非因果片段编码器，需要等齐整个片段才能输出特征，V-AURA 的例子是 0.64 秒前视；若改用 DINOv2 这类逐帧编码器，前视可以降到 0.08 秒左右，但时间对齐明显变差。音频侧的连续自回归扩散结构用因果语言模型加局部扩散头逐块生成，每块独立去噪，只能通过隐藏状态看到历史，看不到未来块，因此质量落后于离线模型。

同期 WorldSonus 用时移对比损失向冻结的 Synchformer 教师对齐，在 100 毫秒块延迟下有所改善，但仍落后于离线模型。论文把这种差距归因于两点，一是感受野被压缩，二是局部头缺少跨块交互。理解这两点才能明白后文为何一处改取窗方式，一处加宽去噪窗口，而不是简单放大模型规模。

### 人能察觉的延迟是多少，现有折中为什么不可接受

论文先用用户实验确定延迟预算。参与者在没有参考同步版本的情况下判断声音是否落后于画面，动作声、语音和自由漫游环境声的可察觉阈值分别约为 0.34 秒、0.49 秒和 0.85 秒，其中网球击球这类瞬态最敏感。这意味着动作游戏需要极低延迟，而开放世界漫游允许较大延迟，理想系统应能按场景在延迟和算力之间切换。

接着论文在 V-AURA 主干上做受控对比，说明传统分块窗口把窗口变小确实降低前视，但感受野同步变窄，下游对齐分数随之变差。也就是说，现有做法把延迟和对齐绑在同一个窗口长度上，无法兼得。下面先给出读图任务，再展示原图，最后解释两张子图各自证明什么。

下图左图比较 3 类声音的可察觉延迟阈值高低，右图比较两种取窗方式在前视缩短时对齐分数的不同走向，是全文延迟预算和动机的主要依据，请按提示顺序观察阈值与曲线分叉。

> **看图路径：** 1. 先看左图三类声音的可感知延迟阈值高低顺序；2. 再看右图两条曲线随前视缩短时对齐分数的变化趋势；3. 对照横轴前视时长理解延迟与对齐的权衡位置

[![原论文 Figure 1：(a) User study: the minimum audio delay at which participants notice the sound lagging behind the…](https://arxiv.org/html/2611.05988v1/motivation.svg)](https://arxiv.org/html/2611.05988v1/motivation.svg)

*论文图 1。原论文 Figure 1:：“(a) User study: the minimum audio delay at which participants notice the sound lagging behind the video, for action sounds, speech, and ambient sounds in free roaming (mean ± 95%…”。*

左图动作声阈值最低而环境声容忍度最高，说明统一用一个延迟目标会浪费算力或损失体验。右图传统分块窗口的前视从 0.32 秒降到 0.08 秒时对齐明显恶化，而尾部滑动窗口缩短步长时对齐几乎不变，这正是后文视觉前端要复现的效果。图注明确指出右图实验基于 V-AURA 主干，因此它只证明取窗方式的影响，不直接证明完整 LiveFoley 系统的最终分数。

### LiveFoley 的整体数据流与两个加宽方向

LiveFoley 的输入是 25 帧每秒的视频帧，视觉前端用冻结的 Synchformer 片段视觉编码器加 Synchronizer 产生 12.5 赫兹的同步特征流，即每 0.08 秒一个视觉 token。音频侧用因果音频变分自编码器的连续潜变量，按同样 12.5 赫兹把潜变量帧组成块，16 千赫兹单声道是每 2 帧一组，48 千赫兹立体声是每 4 帧一组。因果语言模型融合当前视觉 token 和上一块音频的压缩嵌入得到隐藏状态，局部扩散头再以隐藏状态为条件精修当前块的声学细节，生成的干净块一方面送去解码成波形，一方面回送给语言模型做下一步。

整体改进沿 2 个方向展开。视觉侧不再缩小窗口，而是把窗口尾端锚定在当前帧并调节滑动步长，前视只与步长有关；再用统一可变步长框架让同一套权重支持多种步长。音频侧把局部扩散头的去噪窗口向过去加宽得到默认的历史版本，向未来加宽得到可选的未来预热版本，前者零额外前视，后者增加 0.08 秒后端前视。下面先说明 3 张子图的观察顺序，再给出总览图。

下图展示 3 种视觉前端取窗方式的对比，左侧延迟随窗口长度变化，中间延迟随步长变化，右侧展示多步长如何共享同一后端，是理解全文结构的关键总览，请重点看延迟由什么决定。

> **看图路径：** 1. 先比较左图分块窗口缩短窗口与中图缩短步长的箭头方向；2. 再看中图首帧填充和丢弃标记表示哪些帧只提供上下文；3. 最后看右图不同步长如何汇入同一个生成主干

[![原论文 Figure 2：Streaming visual frontend. Each dot denotes the token at one window position.](https://arxiv.org/html/2611.05988v1/video_encode.svg)](https://arxiv.org/html/2611.05988v1/video_encode.svg)

*论文图 2。原论文 Figure 2:：“Streaming visual frontend. Each dot denotes the token at one window position.”。*

中间子图显示窗口长度固定为 8 个 token 即 0.64 秒时，步长取不同值分别对应 0.08、0.16 与 0.32 秒前视，且感受野保持完整；左侧子图显示分块窗口缩短窗口会同步缩小感受野。右侧子图显示不同步长的输出先经过共享的 Synchronizer 再进入流式音频生成，因此推理时可以按场景切换步长。首帧不足时用重复首帧填充，避免开头等待凑满整个窗口。

### 尾部滑动窗口如何不重训就把非因果编码器变流式

Synchformer 原本把视频切成 16 帧一段即 0.64 秒，每段输出 8 个视觉 token，段内注意力是双向的，因此一个 token 要等整段到齐才能输出。传统流式分块把视频切成不重叠的固定窗口依次送入编码器，窗口含 w 个 token 就对应 2w 帧，前视随 w 线性增长，w 从 4 降到 1 时前视从 0.32 秒降到 0.08 秒，但时间感受野同步变窄。

尾部滑动窗口改为把窗口尾端锚定在当前帧，输入序列写成从历史帧到当前帧的连续段，早期不足时重复首帧填充。这样编码器仍然做原来的双向注意力计算，不需要重训，只是输入全部来自历史，不再等待未来帧。连续流式时窗口每隔固定帧数向前滑动一次并输出新的尾部 token，步长取 1、2、4 时前视分别为 0.08、0.16 与 0.32 秒。论文的经验结论是减小步长保持完整上下文，因此对齐得以保留，而减小窗口会损失上下文。

**尾部滑动窗口 × 步长 × 前端前视：** 尾部滑动窗口指把编码窗口尾端固定在当前帧、只用历史帧补齐上下文的取窗方式，步长指窗口每次向前滑动并输出新特征的帧数，前端前视指为凑齐一次编码必须等待的视频时长；三者组合后前视不再由窗口长度决定而由步长决定，因此可以在不缩小感受野的情况下把等待时间压到一个步长。

### Synchronizer 如何让同一后端兼容不同步长

不同步长从固定窗口截取不同数量的尾部 token，直接切片会造成特征分布偏移，下游音频后端难以共用。Synchronizer 的输入是 Synchformer 窗口的 8 个 token 组成的矩阵，先经过两层变换器加入位置嵌入并聚合窗内上下文，再截取最后若干个 token 并加上可学习的延迟模式嵌入，输出对每种步长都是恒定 12.5 赫兹的 token 流。公式中输出表示步长为 s 时的结果，下标表示取最后 s 个位置，模式嵌入区分延迟模式。

\[V_{s}=\operatorname{Synchronizer}(W)[-s:]+e_{\mathrm{mode}},\]

训练时 3 种步长按相等比例在不同批次间轮换，同一套权重学习所有延迟模式。推理时可以根据场景切换步长，例如射击或节奏游戏用小步长保延迟，开放世界漫游用大步长降低前端提取频率。论文报告大步长时视觉前端计算开销约为小步长时的 1/4，这是用允许的延迟换算力，而不牺牲感受野。

**Synchronizer × 统一可变步长框架：** Synchronizer 是对同一窗口输出先做位置编码和窗内聚合再按步长截取并加上模式嵌入的对齐模块，统一可变步长框架是让同一套生成主干兼容多种步长的训练与推理机制；前者消除不同步长下特征分布偏移，后者让一个权重在动作场景用小步长保延迟、在漫游场景用大步长省算力。

### 自回归主干每一步融合哪些信号并输出什么

音频主干每 12.5 赫兹走一步，与视觉同步 token 一一对应。LocEnc 是把上一块干净潜变量压缩成单个音频嵌入的模块，当前视觉同步 token 与该音频嵌入经线性投影后按通道拼接再过线性层送入 MiniCPM 结构的因果语言模型，得到隐藏状态。语言模型从零训练，负责长期跨块依赖，给出粗粒度的声学条件。

局部扩散头是轻量扩散变换器，负责把噪声块变成干净的变分自编码器潜变量块。每个被去噪的潜变量 token 的条件向量由隐藏状态、当前视觉 token 和时间步嵌入拼接而成，再通过自适应层归一化注入到变换器块中。原有流式做法是独立局部扩散头，只对当前块做块内双向注意力，历史只能通过隐藏状态间接看到。下面先给出读图任务，再展示主干与 3 种局部扩散头的数据路径。

下图左侧展示语言模型融合视觉嵌入与上一块音频嵌入并驱动独立去噪的过程，右侧分别展示加入过去干净块和加入未来预热块的窗口构成，请重点看每一步的输入来自哪里与输出送往哪里。

> **看图路径：** 1. 先沿左侧从下往上看音频潜变量到隐藏状态再到噪声块的路径；2. 再对比右上历史上下文与右下未来预热块的输入构成；3. 注意右下被丢弃标记的块在推理时如何处理

[![原论文 Figure 3：Continuous autoregressive audio generation backbone.](https://arxiv.org/html/2611.05988v1/audio_generate.png)](https://arxiv.org/html/2611.05988v1/audio_generate.png)

*论文图 3。原论文 Figure 3:：“Continuous autoregressive audio generation backbone.”。*

左侧每一步用当前视觉 token 和上一块音频嵌入得到隐藏状态，再对含噪块去噪得到干净块并回送。右上把过去两块干净块作为上下文拼入输入，不引入额外前视。右下把当前含噪块与下一个含噪块联合去噪，未来块用当前隐藏状态和未来视觉 token 构造近似条件，推理时丢弃该未来块并在下一步用真实条件重做。条件向量的构造方式如下式所示，它说明每个去噪 token 能看到语言模型记忆、当前画面同步信息和扩散时间步 3 部分。

\[c_{i}=\mathrm{Concat}(h_{i},\,v_{i},\,\phi(t)).\]

**因果语言模型 × 局部扩散头：** 因果语言模型指按时间顺序逐块产生粗粒度隐藏状态的自回归主干，局部扩散头指以该隐藏状态为条件在块内做双向精细去噪的轻量变换器；前者负责跨块的长期依赖，后者负责块内声学细节，二者以 12.5 赫兹的节奏交替推进，一个给条件一个给波形潜变量。

**历史局部扩散头 × 未来预热局部扩散头：** 历史局部扩散头指把已生成的过去干净块拼入当前去噪窗口提供上下文的做法，未来预热局部扩散头指把下一块也拼入窗口联合去噪但推理时丢弃并在下一步重做的做法；前者不增加后端前视，后者用 0.08 秒后端前视换取当前块与未来块的双向协同，分别对应零代价改进和可接受代价的升级选项。

### 向过去和向未来加宽去噪窗口时各自的代价

历史局部扩散头把过去两块干净块拼到局部扩散头输入作为上下文，双向注意力因此看到更长的声学轨迹，但信息仍只从过去流向现在，不需要等待未来视频，所以后端前视仍为零，论文把它作为默认配置。未来预热局部扩散头则把下一块也拼入窗口，使当前块与下一块双向交互，这需要下一个视觉 token，因此带来 0.08 秒后端前视。

直接把下一块加入窗口会遇到自回归死锁，因为下一块的条件依赖于下一个隐藏状态，而下一个隐藏状态又依赖于当前干净块的编码结果，在当前块尚未去噪完成时无法计算。论文的近似是用当前隐藏状态搭配未来视觉 token 构造下一块的条件，从而解除循环依赖。训练时当前块和未来块都计入损失，推理时未来块只起预热作用，丢弃后在下一步用真实隐藏状态重新生成。

作为对照的低速率版本把自回归速率减半、每步联合去噪两块，但主干时间分辨率也减半，论文报告其对齐变差，因此不采用。这说明加宽窗口的前提是保持 12.5 赫兹全速率，否则用时间分辨率换上下文得不偿失。

### 模型在什么数据上训练并用什么目标优化

训练语料约 2000 小时共 74.5 万片段，包含野外视频和第一人称视频。野外部分来自经音画一致性过滤的 SoundAtlas 即 VGGSound 和 AudioSet 部分，第一人称部分来自 EPIC-Sounds 和 Ego4D-Sounds 并保留高音画相似度片段。所有视频按 25 帧每秒解码并截到 10 秒，训练时再裁到最多 9.92 秒即 12.5 赫兹下的 124 块。视觉前端冻结官方 Synchformer 权重，语言模型与局部扩散头联合优化。

下表说明训练数据的来源构成，野外与第一人称两类域名的片段数与小时数分别列出，是复现数据配比的依据，请先看各来源的规模再看总量。

| Source | Domain | Clips | Hours |
| --- | --- | --- | --- |
| SoundAtlas (VGGSound) | in-the-wild | 146K | 401 |
| SoundAtlas (AudioSet) | in-the-wild | 340K | 929 |
| EPIC-Sounds | egocentric | 49K | 134 |
| Ego4D-Sounds | egocentric | 210K | 578 |
| Total |  | 745K | 2,042 |

该表显示 AudioSet 部分在时长上占比最大，第一人称的 Ego4D-Sounds 在片段数上占比显著，说明模型同时见到大量野外事件声和穿戴设备视角的交互声。训练与评测的划分、过滤阈值和裁剪长度都影响结论外推，换用其他分布时需要重新验证。优化目标是条件整流流目标，同一去噪窗口内的目标块共享同一个时间步，历史版本与未来预热版本的目标集与上下文集划分不同。

为减轻长序列生成的暴露偏差，送入 LocEnc 的历史潜变量块在训练时以一半概率混入方差保持高斯噪声，推理时则以固定混合强度加入少量噪声。推理另用滚动键值缓存加注意力沉槽支持超训练长度的流式生成，键缓存时不带旋转位置编码，计算注意力时再按相对距离动态施加，因此淘汰最旧表项不需要重算其余缓存。

### 评测在什么视频和指标下比较，延迟如何定义

主结果在标准 VGGSound 测试集上用 8 秒片段评测，另构造 VGGSound-Curated 共 1485 片段用于视觉前端消融，该子集从稀疏子集与高相似度候选中取相似度高于阈值的片段，排除含语音或可见人脸并只保留测试集片段，以减少画外旁白和背景音乐等视觉不对齐声音的干扰。所有系统接收同样的 25 帧每秒视频，只有 WorldSonus 按官方设置跑 30 帧每秒。

指标分 4 组，分布匹配用 PANNs 和 PaSST 特征空间的 Fréchet 距离以及 PANNs 预测的 KL 散度，数值越小越好；音频质量用 Inception 分数和 Audiobox 美学的生产质量分，数值越大越好；语义对齐用 ImageBind 分数越大越好，时间对齐用 Synchformer 预测的去同步分数越小越好。前端前视指视觉编码器为编码一个新块或新步长必须缓存的视频时长，与硬件无关；端到端延迟指从首帧到达至首段可播放波形输出的实际墙钟时间。主观评测另用音频质量与音画对齐两个 5 分制分数，两者都是越大越好。

**DeSync × 生成图像与参考样本的特征分布差异指标：** DeSync 是由 Synchformer 预测的音画时间错位分数，数值越小表示打击与脚步等事件与画面越同步，生成图像与参考样本的特征分布差异指标是在 PANNs 或 PaSST 特征空间计算的 Fréchet 距离，数值越小表示生成音频总体分布越接近真实音频；前者回答对没对准，后者回答像不像真实声音，二者需要分开看。

### 主结果在对齐和质量上分别达到什么位置

系统级比较要回答流式系统能否在极低前视下接近离线对齐，并在流式组内取得较好质量。比较条件是同一 VGGSound 测试集和 8 秒评测流程，离线模型可看完整片段，流式模型只能因果输入，前端前视单独报告。LiveFoley 默认用历史局部扩散头且步长为 1，前端前视为 0.08 秒。

下表聚焦论文正文明确报告的关键数字，比较离线最强基线、流式基线与 LiveFoley 在时间对齐和分布质量上的位置，分布距离越小越好，质量分越大越好，请先看对齐列再看质量列。

| 比较对象 | 时间对齐 DeSync 越小越好 | 分布质量 FDPANNs 越小越好 | 分布质量 FDPaSST 越小越好 | 音频质量 PQ 越大越好 |
| --- | --- | --- | --- | --- |
| 离线 MMAudio-L | 0.47 | 8.48 | 74.16 | 6.18 |
| 流式基线区间 | 0.67 到 1.03 | 9.82 到 16.43 | 92.48 到 245.25 | 5.74 到 6.26 |
| LiveFoley-16k | 0.50 | 9.56 | 92.48 | 6.14 |
| LiveFoley-48k | 0.48 | 9.92 | 128.34 | 6.26 |

表中 LiveFoley-48k 的去同步分数为 0.48，与离线 MMAudio-L 的 0.47 基本持平，明显好于 0.67 到 1.03 的流式基线区间，支持在 0.08 秒前端前视下达到离线级时间对齐的结论。质量侧 LiveFoley-16k 的两个分布距离为流式组内最好，48k 版本的质量分较高，但 16k 版本的 PaSST 距离仍落后于离线最强基线。论文把剩余差距归因于因果模型必须根据已见帧提前承诺声音，而离线模型可对所有块全局双向去噪。

下图展示包含离线与在线系统的主观评分，左为音频质量，右为音画对齐，虚线分隔离线与在线，是客观指标之外的人听验证，请先区分分组再比较相对高度。

> **看图路径：** 1. 先区分虚线左侧离线系统与右侧在线系统的分组；2. 再比较同一系统在音频质量与音画对齐两张子图中的相对高度

[![原论文 Figure 4：Subjective evaluation of LiveFoley against offline and online baselines: mean opinion scores for…](https://arxiv.org/html/2611.05988v1/subjective_mos.svg)](https://arxiv.org/html/2611.05988v1/subjective_mos.svg)

*论文图 4。原论文 Figure 4:：“Subjective evaluation of LiveFoley against offline and online baselines: mean opinion scores for audio quality (MOS-Q, left) and audio-visual alignment (MOS-A, right).”。*

主观结果显示 LiveFoley 在在线组内两项均为最高，音频质量分为 3.23，音画对齐分为 3.58，接近离线 MMAudio-L 的对齐分 3.79，但音频质量仍落后于离线的 3.62。值得注意的是免训练在线改编的 MMAudio 在客观分布指标上尚可，但人听能察觉分块边界的接缝，说明自动分布距离不能完全代替听感。

### 视觉前端与去噪窗口的消融各证明什么代价

视觉前端消融固定 V-AURA 主干、解码和训练预算，只换视觉编码器，在过滤后的子集上比较，目的是隔离前端的影响。下表列出论文正文给出连续证据的关键对照，重点看前视与对齐的权衡是否被打破，前视越小越好，对齐分数越小越好。

| 视觉编码器 | 前端前视 | DeSync 越小越好 |
| --- | --- | --- |
| DINOv2 逐帧 | 0.08 秒 | 1.10 |
| VideoMAE-V2 片段级 | 0.64 秒 | 0.88 |
| 尾部滑动 Synchformer | 0.08 秒 | 0.61 |
| 分块窗口 0.32 秒到 0.08 秒 | 0.32 秒到 0.08 秒 | 0.67 恶化到 0.88 |
| 尾部滑动 0.32 秒到 0.08 秒 | 0.32 秒到 0.08 秒 | 0.60 变为 0.61 |

尾部滑动窗口下的 Synchformer 仅用 0.08 秒前视达到 0.61 的去同步分数，优于需要 0.64 秒前视的 VideoMAE-V2 的 0.88，也优于逐帧编码器大于 1.0 的区间。当分块窗口的前视从 0.32 秒降到 0.08 秒时分数从 0.67 恶化到 0.88，而尾部滑动窗口仅从 0.60 变为 0.61，说明延迟下降不再以感受野为代价。该结论成立条件是同一后端和同一过滤子集，换主干或换含大量不对齐声音的完整集时数值会变化。

统一可变步长框架的消融在多种步长下比较独立专家、统一模型和去掉 Synchronizer 的变体。统一模型在对齐上与专家基本持平，分布指标只有轻微损失，说明一套权重可以支持多延迟模式并在推理时切换。去掉 Synchronizer 后各步长的对齐约变差 0.03 且分布距离变差，证明直接截取原始尾部 token 缺少窗内位置与上下文聚合。

去噪窗口消融在同一主干下比较 4 种局部扩散头，下表只收录正文有连续原句覆盖的分布与对齐变化，分布距离越小越好，对齐分数越小越好。

| 去噪窗口 | FDPANNs 越小越好 | FDPaSST 越小越好 | DeSync 越小越好 | IB 越大越好 |
| --- | --- | --- | --- | --- |
| 独立版本 | 21.08 | 154.62 | 0.47 | 0.31 |
| 历史版本 | 17.55 | 158.04 | 0.47 | 0.32 |
| 未来预热版本 | 16.88 | 143.92 | 0.46 | 0.32 |
| 低速率对照 | 18.90 | 180.52 | 0.54 | 0.30 |

向过去加宽把分布距离从 21.08 改善到 17.55，语义分数从 0.31 改善到 0.32，且其他指标基本相当，代价为零额外前视。向未来加宽在同样窗口长度下把另一分布距离从 158.04 改善到 143.92，对齐从 0.47 小幅改善到 0.46，代价是 0.08 秒后端前视和训练推理不对称的预热丢弃。低速率对照因主干时间分辨率减半而对齐恶化到 0.54 且分布距离恶化到 180.52，不如独立版本，说明保持 12.5 赫兹全速率是前提。

### 结论在哪些条件下成立，还有什么没有解决

时间对齐接近离线的结论依赖于 VGGSound 测试集和 Synchformer 定义的去同步分数，以及 0.08 秒前端前视加历史局部扩散头的默认配置。在过滤掉旁白和背景音乐的子集上前端优势更明显，在完整集上仍有大量视觉不对齐声音会稀释前端差异。质量接近离线的程度也有限，多个分布和质量指标仍落后于最强离线模型，未来预热版本缩小但未关闭差距。

延迟低于感知阈值的结论依赖于单张 A800 的实测分解和 6 人小规模用户实验。动作声阈值是小规模自适应阶梯的均值，自由漫游阈值在部分阶梯中到 1.0 秒仍未察觉因而是下界，不同设备、耳机、任务投入度和瞬态密度都会改变阈值。文本扩展实验显示加入语义提示主要改善分布匹配但轻微损害对齐，说明语义与时间目标存在张力，不能默认文本越多越好。

下表把端到端延迟与 3 类感知阈值放在一起，说明默认配置为何被认为不可察觉，以及未来预热版本的额外代价仍在何种范围内，延迟越小越好，阈值越大表示越能容忍。

| 系统延迟与感知阈值 | 数值 |
| --- | --- |
| 默认历史版本端到端 | 156 毫秒 |
| 未来预热版本端到端 | 236 毫秒 |
| 动作声可察觉阈值 | 0.34 秒 |
| 语音可察觉阈值 | 0.49 秒 |
| 漫游环境声可察觉阈值 | 0.85 秒 |

默认历史版本 156 毫秒低于动作声 0.34 秒阈值，未来预热版本 236 毫秒仍低于该阈值，但已接近广播标准中更严格的可接受界。表中除 156 毫秒为实测外其余为算法前视叠加推算，假设每块计算量不变，换硬件或增大批量时需要重测。

### 复现第一步做什么，需要哪些权重与代码

复现应先固定评测管线再跑模型。数据侧按 25 帧每秒解码并统一截到 8 秒评测片段，过滤子集需按相似度阈值、排除语音人脸、只保留测试集的规则重建，否则前端差异会被不对齐声音淹没。评测用配套工具计算分布距离、KL 散度、Inception 分数、生产质量分、语义分数和去同步分数，注意前者越小越好，后者越大越好，对齐分数越小越好。

模型侧视觉前端用冻结的官方 Synchformer 权重，音频变分自编码器先按非因果配方预训练再把卷积换成因果并微调，语言模型按 28 层 MiniCPM 结构从零训练，局部编码器和局部扩散头为 12 层变换器。训练超参数为 AdamW、学习率经热身、梯度裁剪、批量 64 片段、多卡跑 200,000 步，分类器无关引导的条件丢弃与视觉条件丢弃分别设置，推理用引导尺度 6 和 20 步欧拉去噪。流式推理需实现 3 阶段异步流水线和滚动键值缓存加注意力沉槽，键缓存不含旋转嵌入、按相对距离动态施加。

作者资源方面，论文给出项目页面与代码仓库链接，本次核验显示第三方项目页面可达且代码仓库可达，但仓库说明完整度为部分，因此代码可下载不等于权重已公开或一键可运行，复现前应先确认检查点、环境与评测脚本是否齐备。

### 什么时候值得尝试，还缺哪项验证

当应用是游戏引擎、增强现实或直播像素流且需要连续音画同步时，LiveFoley 值得尝试，特别是动作音效要求低延迟而漫游场景希望省算力的混合负载。此时可先用小步长加历史局部扩散头把前端前视控制在 0.08 秒、端到端约 156 毫秒，若质量仍不足且能容忍约 236 毫秒延迟，再升级到未来预热版本。若已有文本提示且延迟预算允许解析文本，可考虑同一检查点的视频加文本模式，但要接受对齐轻微下降。

还缺的验证包括更大规模听音者在真实交互任务中的延迟感知、不同 GPU 与端侧芯片上的实际端到端分解、长时直播下的稳定性与内存上界，以及在强混响、遮挡和快速镜头切换下的失败模式。论文的客观表与 6 人主观实验支持方向性判断，但把微小差距解读为严格相等时应谨慎，更稳妥的表述是在所测条件下达到同一水平。下一步复现应先重跑主表和前端消融，再补测目标硬件的延迟，最后再做人听确认。

<details>
<summary>📎 论文与评分元数据</summary>

排名：前25% | 文档类型：方法研究 | [arXiv 原文](https://arxiv.org/abs/2611.05988v1)

</details>

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。

- 评分规则：type-aware-v1

- 评分模型：muse-spark-1.3-contributor

- 评分请求协议：openai_responses

---

[← 返回 2026-11-06 语音/音乐/音频论文速递](/audio-paper-digest-blog/posts/2026-11-06/)
