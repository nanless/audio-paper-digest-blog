---
title: "VibeVideoBench: Evaluating Multimodal Agents on Code-Driven Video Generation"
date: 2026-10-29
draft: false
tags: [音视频生成, 基准设计, 基准测试, 音视频]
categories: [论文速递]
description: "VibeVideoBench 要求智能体在一小时内只用代码渲染画面并合成声音来交付 239 个中英文成品视频，用程序检查加约 1.3 万条任务细则加五维质量分三层打分，最强的 GPT-6 Astra 与 Claude Opus 5.5 也只在约四分之三任务上通过全部核心要求，而交不出片会显著改变排名且多因收尾渲染太晚。"
hiddenInHomeList: true
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_arxiv_id: "2610.35864"
paper_digest_workbench_contract: "researcher-workbench-v1"
paper_digest_reader_title: "让智能体写代码做视频：VibeVideoBench 考什么、怎么判"
paper_digest_original_title: "VibeVideoBench: Evaluating Multimodal Agents on Code-Driven Video Generation"
paper_digest_arxiv_version: null
paper_digest_arxiv_versioned_id: null
paper_digest_arxiv_abs_url: "https://arxiv.org/abs/2610.35864"
paper_digest_arxiv_pdf_url: "https://arxiv.org/pdf/2610.35864.pdf"
paper_digest_primary_task: "音视频生成"
paper_digest_tags_contract: "paper-tag-flat-tags-v2"
paper_digest_tags_selection_contract: "paper-tag-selection-v2"
paper_digest_tags_registry_version: "paper-tag-catalog-v2"
paper_digest_tags_registry_sha256: "cdef54423b5dfc00a1d017ef6639446d2ecd1d9c1acf71c8eb4f6219a46b7ba8"
paper_digest_tags_concepts: [{"facet":"task","id":"task.av-generation","label":"音视频生成"},{"facet":"method","id":"method.benchmark-design","label":"基准设计"},{"facet":"artifact","id":"artifact.benchmark","label":"基准测试"},{"facet":"signal","id":"signal.audiovisual","label":"音视频"}]
paper_digest_primary_method: "基准设计"
paper_digest_score: 6.8
paper_digest_rank_bucket: "前50%"
paper_digest_document_type: "数据集与基准"
paper_digest_one_sentence: "VibeVideoBench 要求智能体在一小时内只用代码渲染画面并合成声音来交付 239 个中英文成品视频，用程序检查加约 1.3 万条任务细则加五维质量分三层打分，最强的 GPT-6 Astra 与 Claude Opus 5.5 也只在约四分之三任务上通过全部核心要求，而交不出片会显著改变排名且多因收尾渲染太晚。"
paper_digest_authors: [{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Muxi Diao"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Wenbin Xu"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Lele Yang"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Xuyang Ma"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Yuzhe Chen"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Jiankang Chen"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Kaiyu Jiang"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Changyi Liu"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Haoyu Zhang"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Hongyi Fu"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Jianxiong Wang"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Tianke Zhang"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Haonan Fan"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Yingxin Li"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Bingyi Li"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Xu Wang"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Xuanyu Zheng"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Bin Wen"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Tingting Gao"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Han Li"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Wentao Zhang"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Weiran Xu"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Kongming Liang"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Zhanyu Ma"}]
paper_digest_abstract_sha256: "c7d4ff2457b05c848a3b112341504a15fb0b93ea61cea3daea52a6ecc91696e2"
paper_digest_sidecars: {"citation.bib":{"sha256":"6cf2122bf21c12b29d72499bf578f4251762a699a58ec0b886a3d27953888554","url":"/audio-paper-digest-blog/data/papers/2026-10-29/2610-35864/citation.bib"},"citation.json":{"sha256":"96f15f5e0b664e1c58e72e80ff4b5188bca54427803459eca48aca6205ca6936","url":"/audio-paper-digest-blog/data/papers/2026-10-29/2610-35864/citation.json"},"citation.ris":{"sha256":"40bf7e71ee88cdf298e675f7becc9edee51bafc964f92737feea3c0d7425a086","url":"/audio-paper-digest-blog/data/papers/2026-10-29/2610-35864/citation.ris"},"rethink-context.json":{"contract":"paper-research-context-v2","sha256":"39efb877de12028e3a4655f68205375a4df0f8d7cae7c12b769389ccdb79445a","url":"/audio-paper-digest-blog/data/papers/2026-10-29/2610-35864/rethink-context.json"}}
paper_digest_api_reader_contract: "beginner-researcher-v3"
paper_digest_api_reader_article_sha256: "cab94811eb7af5d9cbe91580b7913d1bb1aefde0cd494bf91dc6211f115482db"
paper_digest_api_reader_plan_sha256: "8c298985bba49d2c524f7c45e69529f6dc4f9b7be810ef641b63004517124cba"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings-v4"
paper_digest_api_reader_source_bindings_sha256: "4ff0df5815d588d6378974e2f9281690617449aee6e2427775959604ebc8c90e"
paper_digest_api_reader_source_table_count: 4
paper_digest_api_reader_source_formula_count: 0
paper_digest_api_reader_structured_artifacts_sha256: "7d1e3fa6bbcc9ade74928863af8780bdadf035b6903d3d0447b6015a192bd943"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity-v1"
paper_digest_api_reader_author_identity_sha256: "6965217dd1ee41168820f696ed91ce618a33754d4fb2979a6b07951e384e1dd7"
paper_digest_api_reader_author_count: 24
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity-v1"
paper_digest_api_reader_resource_identity_sha256: "616a8db10992aa126332d1c3deddf531731fa6b5e3306187e633b8959805abd6"
paper_digest_api_reader_resource_count: 0
paper_digest_api_reader_figure_persistence: "ephemeral-no-persisted-figure-assets-v1"
paper_digest_api_reader_decision_projection: "api-reader-decision-projection-v2"
---

# 📄 让智能体写代码做视频：VibeVideoBench 考什么、怎么判

> 英文题目：*[VibeVideoBench: Evaluating Multimodal Agents on Code-Driven Video Generation](https://arxiv.org/abs/2610.35864)*

<!--paper-tag-hierarchy-v1:start-->

**研究分类**

- **研究任务**：[音视频生成](/audio-paper-digest-blog/papers/?concept=task.av-generation)
- **研究方法**：[评测协议](/audio-paper-digest-blog/papers/?concept=method.evaluation-protocol) → [基准设计](/audio-paper-digest-blog/papers/?concept=method.benchmark-design)
- **信号**：[音视频](/audio-paper-digest-blog/papers/?concept=signal.audiovisual)
- **研究产物**：[基准测试](/audio-paper-digest-blog/papers/?concept=artifact.benchmark)

<!--paper-tag-hierarchy-v1:end-->

> 评分：**6.8/10** | 创新 1.5/2 | 技术严谨 1.2/1.5 | 实验充分 1.3/1.5 | 清晰度 0.8/1 | 影响力 0.5/1.5 | 开源 0/1.5 | 可复现 0.3/0.5 | 工程/实践 1.2/1.5


## 👥 作者与机构

- Muxi Diao：机构信息未能在本次解析中与作者逐人可靠绑定
- Wenbin Xu：机构信息未能在本次解析中与作者逐人可靠绑定
- Lele Yang：机构信息未能在本次解析中与作者逐人可靠绑定
- Xuyang Ma：机构信息未能在本次解析中与作者逐人可靠绑定
- Yuzhe Chen：机构信息未能在本次解析中与作者逐人可靠绑定
- Jiankang Chen：机构信息未能在本次解析中与作者逐人可靠绑定
- Kaiyu Jiang：机构信息未能在本次解析中与作者逐人可靠绑定
- Changyi Liu：机构信息未能在本次解析中与作者逐人可靠绑定
- Haoyu Zhang：机构信息未能在本次解析中与作者逐人可靠绑定
- Hongyi Fu：机构信息未能在本次解析中与作者逐人可靠绑定
- Jianxiong Wang：机构信息未能在本次解析中与作者逐人可靠绑定
- Tianke Zhang：机构信息未能在本次解析中与作者逐人可靠绑定
- Haonan Fan：机构信息未能在本次解析中与作者逐人可靠绑定
- Yingxin Li：机构信息未能在本次解析中与作者逐人可靠绑定
- Bingyi Li：机构信息未能在本次解析中与作者逐人可靠绑定
- Xu Wang：机构信息未能在本次解析中与作者逐人可靠绑定
- Xuanyu Zheng：机构信息未能在本次解析中与作者逐人可靠绑定
- Bin Wen：机构信息未能在本次解析中与作者逐人可靠绑定
- Tingting Gao：机构信息未能在本次解析中与作者逐人可靠绑定
- Han Li：机构信息未能在本次解析中与作者逐人可靠绑定
- Wentao Zhang：机构信息未能在本次解析中与作者逐人可靠绑定
- Weiran Xu：机构信息未能在本次解析中与作者逐人可靠绑定
- Kongming Liang：机构信息未能在本次解析中与作者逐人可靠绑定
- Zhanyu Ma：机构信息未能在本次解析中与作者逐人可靠绑定

## 📌 核心摘要

读者需要理解的对象是多模态智能体，指能读输入材料、写代码、调用渲染与语音工具并检查自身输出的系统，困难在于成品视频同时要求文字数字准确、状态变化合规、多分钟结构完整与声音事件对齐，而这类性质没有单元测试可以直接判定。真实来源被改写为自包含任务说明，附输入素材、交付规格与音频要求，共239个中英文任务，其输出作为沙箱 rollout 的输入。智能体在一小时沙箱内在无图像与视频生成模型下只用代码渲染画面并合成声音，输出带声音的MP4，只有可解码交付的视频才进入后续核验。程序核验先用代码判定容器、分辨率、帧率、时长与可听声音等交付规格，通过的交付进入条目核验逐条判定是否展示要求的过程，再连同视频进入质量评分从视觉质量、美学、内容逻辑、时间运动与音频同步五个维度打分。在九个系统239个任务的对照中，Claude Opus 5.5在严格任务成功率上为76.3%，即全部核心条目无失败的任务占比，高于其余八个系统，但仍有约四分之一任务存在核心缺失。在全部239个任务盲测人类偏好对照中，三评审均值与人类Elo的系统Spearman相关为0.98，高于单对视频73.3%的一致率，表明系统排序一致性强于单视频判定。按单任务平均清单价格API成本计，GLM-5.3-Flash为0.32美元，低于Claude Opus 5.5的15.38美元，跨系统相差约49倍；结论适用于一小时、仅允许代码渲染加语音合成的条件，缺失视频按零分计入后排名明显变化。

## 🔗 开源与复现资源

本次未形成可展示的已核验资源记录，开放状态尚未核实。

可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 为什么要用写代码的方式做视频

这篇论文面对的是课堂讲解、论文解读、数据故事、产品演示、搭建过程和节奏游戏这类视频。它们要求文字数字分毫不差、状态变化符合规则、能撑几分钟的结构、声音对准画面事件，还要留下一个可修改的工程。直接画像素的扩散视频模型能产出好看的短片段，但论文指出它保证不了公式、图表、游戏规则和旁白与事件同步。

另一条路是人已经在用的做法：用 Manim 或 Remotion 这类库写程序来画每 1 帧，再配语音合成的旁白、程序合成的音乐音效，最后用 ffmpeg 合成。编码智能体可以在沙箱里自己调渲染器、无头浏览器、语音合成和 ffmpeg，读输入素材、写代码、看自己的渲染再改。VibeVideoBench 就是把这种真实用法变成可测的任务：给自包含的说明和可选素材，智能体在原生工具链里 1 小时内交出带声成品 MP4。

**扩散视频模型 × 代码驱动视频：** 扩散视频模型指直接从文本或图像逐像素合成短片段的生成器，擅长看起来合理但难保证文字数字、规则状态和长结构精确；代码驱动视频指智能体写程序调用渲染器、语音合成与 ffmpeg 逐帧生成画面和声音，内容精确、可改、时长声音可控，二者是像素范式与程序范式的分工，本文只测后者。

### 已有评测为什么回答不了这个问题

论文把相关工作分成三块来定位。第一块是像素范式的视频生成评测，如 VBench 和 EvalCrafter，它们评的是几秒、无声为主的片段看起来是否合理、是否跟提示词对齐，不涉及精确内容和声音。第二块是程序做视觉的工作，如图表网页 SVG 与 3 维场景，以及 Manim 讲课视频、论文转讲解视频等，但它们是为单一领域和单一渲染器手搭的语言模型流水线，或一次模型调用写代码，没有执行反馈和修复，也没有声音，不测通用智能体自己选工具、渲染检查修改的能力。

第三块是智能体评测，如 SWE-bench、Terminal-Bench、OSWorld 等，它们用单元测试验文本或功能结果，而视频是感知、时序和视听结果，没有单元测试。离得最近的 AgenticVBench 是对给定素材做后期剪辑，而本文要求每 1 帧和声音都由代码从头构造。论文用一张定位表说明只有 VibeVideoBench 同时满足通用智能体、开放领域、评判音频、有输入素材和任务专属量表。

### 任务的输入是什么、要交什么

每个任务被形式化为说明文本、只读素材包、机器可读交付规格、音频策略和创作自由度声明。说明固定事实、身份、阶段、停留时间和 4 通道音频策略，4 通道是旁白、音乐、音效和环境声，每个通道标为必需、可选或不用。交付规格固定分辨率、帧率、时长区间和可选的精确帧数。智能体在全新容器里拿到说明和素材，必须在截止前交出视频、可编辑源工程和时间表。没有标准答案视频，只对照冻结的说明判。

关键限制是沙箱里不提供图像或视频生成模型，唯一的生成式服务是基于 Qwen3-TTS-Flash 的命令行语音合成。也就是说画面必须靠 three.js、Canvas、SVG 或 cairo 这类代码渲染画出来，声音靠 TTS 念旁白、靠代码合成音乐音效，再用 ffmpeg 复用。目标时长从 8 秒到 15 分钟，一轮全部任务要求产出 11.1 小时成品视频。

### 基准的全流程是怎样的

要理解全流程，先看总览图的上中下三排分别回答任务从哪来、量表怎么做、 rollout 与打分怎么做，图中数字与后文表格是一致的。

> **看图路径：** 1. 先看上排从四类来源到 239 题的任务构造链条；2. 再看中排每题三层量表如何引用题面并做人审；3. 最后看下排沙箱 rollout 与三组评委的分工

[![原论文 Figure 2：Overview of VibeVideoBench.](https://arxiv.org/html/2610.35864v2/overview_art.png)](https://arxiv.org/html/2610.35864v2/overview_art.png)

*论文图 2。原论文 Figure 2:：“Overview of VibeVideoBench. (a) Tasks seeded from four kinds of real-world sources are drafted under a shared contract, given the assets they need (searched for or synthesized by…”。*

上排是任务构造：4 类真实来源只做种子，包括写给代码视频工具的真实请求、真实视频的稠密描述、3D 扫描档案游戏贴图等真实素材包、讲义笔记和研究论文。大模型按统一合同起草改写，固定一切可查的事实数字对象身份，划分阶段与停留时间，写明音频策略，缺的素材去搜或合成；人类再选可查的任务、改成无写作痕迹的自包含提示、核实事实并跨来源去重，最终 239 题、12 类、43 子类，209 英文加 30 中文，201 题带素材，中位 7 个文件共 2.7 GB。

中排是量表：每题三层，L1 程序检查来自交付规格与音频策略，L2 每条引用所执行的题面原句、标核心或细节、要求看到过程而非只看结果宣称、带视觉音频或音画标签，L3 5 维每维按本任务写 1、3、5 分锚定语。量表经过多轮模型审查加人工复核直到无确认问题，且评委看不到输入素材，每条检查自己写明正确内容。下排是执行与打分：智能体在各自原生 harness 里跑相同的 1 小时沙箱，程序判 L1，3 个 VLM 评委组判 L2 与 L3，其中一组按模态分流，人类盲测做偏好验证。

### 三层打分各判什么、证据从哪来

L1 完全不用模型。先看是否留下可解码可判的 MP4，算交付率；再用 ffprobe、完整解码、音频电平、语音活动检测和 Whisper 语种识别去对交付规格：容器可解码、分辨率、帧率正负 0.01、时长落在区间上下各放宽 0.5 秒。205 个核心任务加查源工程、54 题要求的精确帧数、在要求通道时峰值高于负 50 dBFS 的可听音频；课堂与论文任务加查旁白覆盖、旁白语种、无长黑场或冻帧。全部适用检查都过才算规格合规，缺片全失败。

**L1 程序检查 × L2 任务细则 × L3 质量分：** L1 程序检查只由代码判定交付规格如分辨率帧率时长和可听声音；L2 任务细则是每题平均约 54 条的通过或失败检查，每条引用所执行的题面要求并区分核心与细节；L3 质量分是在视觉质量、美学、内容逻辑、时间运动、音频与音画同步五个维度上按本任务锚定语打 1 到 5 分，三者组合是规格合格、要求做到、观感好三个层次。

L2 是约 12985 条原子检查，每条返回通过、失败、未知或不适用并附时间戳证据。论文举超级马里奥关卡为例：马里奥吃蘑菇后变大可辨才算过，若跳过变大则整轮严格意义失败，即使其余 58 条里 57 条都过，单条通过率仍有 98%。L3 是 5 维 1 到 5 分，取 5 维均值，不把 L1 到 L3 加权求和；看不清就记未知而不默认给 3 分。评委被明确告知屏幕上或旁白里的自称达标不是证据，抽帧之间没采样的瞬间不能断言。

### 核心与细节、通过率与严格成功率怎么分工

每题检查事先标好核心或细节，全集约 85.8% 是核心。L2 通过率是汇总口径，用通过数除以通过加失败数，未知与不适用剔除，它反映平均每条做对多少。严格任务成功率是按轮次口径，要求核心检查零失败且至少通过一条核心，未知与不适用不算错，但缺片直接失败，它反映整题一次做全对多少。原文数据显示已交付视频上单条通过率多在 80.5% 到 97.3% 接近天花板，而严格成功率从 26.6% 拉到 76.3%，说明难在把所有核心同时做对。

**核心检查 × 细节检查 × 严格任务成功率：** 核心检查是事先标定的必须满足的要求，细节检查是辅助要求；单条通过率把所有条目汇总容易接近天花板，严格任务成功率要求一次运行中没有核心检查失败且至少通过一条核心，缺片直接算失败，因此更能拉开系统差距，二者搭配看平均正确与整题做对。

质量锚定语也是按题写的。以马里奥的时间运动维为例，1 分是关键过程难跟踪，3 分是能跟踪但转场或停留别扭，5 分是关键变化清晰且运动服务任务，2 或 4 分要说明更靠近哪端。这种写法让不同题的 4 分含义不同，只能在同题内比，跨题只能比均值。附录还给课堂与论文任务加了基于讲义与论文的知识点与旁白检查，以及另行报告、不计入榜单的 404 道带时间戳证据的测验。

### 本研究训练了什么、实际计算是什么

本研究没有训练任何视频模型或评委模型，9 个智能体系统与 3 组评委用的都是现成模型。实际执行的计算是 rollout 与打分两类：前者在 Docker 沙箱里跑智能体调工具链，后者跑程序检查与 VLM 判分。论文明确说每个系统任务组合恰跑一次 scored run，基础设施故障丢的轮次才重跑，所有模型流量都记录 token 与工具调用。

**VLM 评委组 × 模态分流：** VLM 评委组指看片打分的三个独立视觉语言模型面板，J1 与 J2 看完整带声视频判全部内容，J3 把视觉检查交给看抽帧的模型、音频与音画检查交给能听的模型；模态分流就是按每条细则的视觉、音频、音画标签把题分给能听或能看的评委，避免让听不见的模型判声音，保证证据与能力匹配。

评委实现上，J1 是 Gemini 4 Argon，J2 是 Gemini 3.8 Flash，都看完整带声视频；J3 把视觉检查与视觉质量、美学、内容逻辑、时间运动交给 GPT-5.6 Sol 看 24 到 300 张抽帧，把音频与音画检查及音频维交给 Qwen3.8-Omni-Flash 听完整原声代理，音频观察再作为参考传给视觉评委。每块指标先在组内算再 3 组平均，不在指标内混分。3 个面板都包含被测模型，因此附录专门测了自偏好，结论是排名不依赖它。

### 九个系统在什么相同条件下比、人类怎么验

比较的公平条件是每家用自家原生 harness、以供应商接受的最高思考强度、全自主、无追问、工具权限预先全批，在相同镜像与 8 核 32 GB 无 GPU 容器里跑 1 小时，含模型等待、工具、语音合成、预览与终渲。预装 Python、Node、无头 Chromium 与软件 WebGL、ffmpeg 等，允许联网装包。指令固定为读 ENVIRONMENT.md 与 prompt.txt 并在截止前自主完成，截止即杀容器。9 个系统来自六家实验室，共 2151 轮，1927 个可播放视频被 3 组全判。

人类验证是 239 题全覆盖的盲测成对偏好：同题两系统成品并排同步播，标注者能看到完整题面但看不到系统身份与评委分，按整体质量与题面符合度选 A 好、B 好、平局或都差，只在可播放视频之间比，因此验的是质量排序而非交付率。再用 Bradley-Terry 拟合 Elo，几何均值 1000，自助法给区间。指标方向都是越大越好：交付率、规格合规率、L2 通过率、严格成功率、L3 5 分制、人类 Elo 皆如此。

### 谁领先、领先多少、什么条件下成立

主结果要同时看质量与交付，下面是 239 题的完整主表，行按已交付 L3 总分排，灰色数字是缺片记零后的名次，评委分是 3 组均值。

| Model | Harness | L1 program checks | L1 program checks | Delivered videos | Delivered videos | Delivered videos | No video =0=0 | No video =0=0 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Model | Harness | Videos | Spec (%) | L2 pass (%) | L3 overall | Human Elo | L2 strict (%) | L3 overall (rank) |
| GPT-6 Astra | Codex CLI | 238 | 93.7 | 97.1 | 4.126 | 1242 | 74.5 | 4.109 (1) |
| Claude Opus 5.5 | Claude Code | 239 | 99.6 | 97.3 | 4.074 | 1203 | 76.3 | 4.074 (2) |
| Claude Sonnet 5.5 | Claude Code | 232 | 94.6 | 93.9 | 3.999 | 1121 | 67.0 | 3.880 (4) |
| Gemini 4 Argon | Antigravity CLI | 184 | 76.6 | 96.5 | 3.989 | 1081 | 55.2 | 3.069 (7) |
| DeepSeek-V4.1-Flash | DSH | 236 | 94.6 | 93.1 | 3.961 | 1022 | 57.6 | 3.911 (3) |
| Kimi K3 | Kimi Code | 213 | 85.8 | 91.1 | 3.864 | 997 | 46.3 | 3.440 (5) |
| GLM-5.3-Flash | ZCode | 179 | 66.9 | 85.3 | 3.736 | 905 | 33.5 | 2.790 (9) |
| GPT-5.6 Sol | Codex CLI | 213 | 84.5 | 89.5 | 3.735 | 705 | 39.0 | 3.317 (6) |
| Gemini 3.8 Flash | Antigravity CLI | 193 | 77.4 | 80.5 | 3.470 | 723 | 26.6 | 2.798 (8) |

表前说明比较问题：在相同一小时沙箱与各自原生 harness 下，9 个系统谁的成品更符合题面且观感更好，L1 看程序规格，L2 与 L3 看评委，缺片记零看可靠性与质量合成。从这些结果可以看出，Astra 与 Opus 在已交付 L3 上以 4.126 与 4.074 居前二，且在除音频维外的每维都居前二，人类 Elo 以 1242 与 1203 同样居前二，人类排序与已交付 L3 的 Spearman 相关系数为 0.98，仅末 2 位交换。但严格成功率上最强的 Opus 也只有 76.3%，Astra 74.5%，说明约 1/4 任务仍有核心要求失败。交付是第二轴：Gemini 4 Argon 已交付质量排第四，但只交出 184 个视频，缺片记零后总分从 3.989 掉到 3.069，名次从第四掉到第七；GPT-5.6 Sol 有 48 个可播放视频无音轨，音频维最低。

**仅看已交付 × 缺片记零：** 仅看已交付指只在能播放的视频上算 L2 通过率与 L3 均分，衡量做出来的质量；缺片记零指交不出可播放视频就在所有维度记零并判所有检查失败，把可靠性和质量合成一个数，二者并列报告才能看出质量高但常交不出片的系统会被拉下排名。

下图把交付与质量合成后的落差画出来，左为缺片记零总分，右为只看已交付，行序相同。

读图任务是看同一系统在左右两幅里的位置如何因缺片而上下移动，重点看 Argon 与 Sol 的反向移动。

> **看图路径：** 1. 对比左图只看已交付时人类偏好与评委总分几乎同序；2. 看右图计入缺片后两类排名如何错开

[![原论文 Figure H.1：Figure H.1: Human BT-Elo against the three-panel overall (nine systems; vertical bars: 95%…](https://arxiv.org/html/2610.35864v2/human_judge.svg)](https://arxiv.org/html/2610.35864v2/human_judge.svg)

*论文图 10。原论文 Figure H.1:：“Figure H.1: Human BT-Elo against the three-panel overall (nine systems; vertical bars: 95% bootstrap CI of the Elo, Tab.”。*

该图确实可见左图人类 Elo 与已交付总分几乎同序，相关系数 0.98，而右图计入缺片后 Argon 下沉、Sol 上升，人类 Elo 与缺片记零总分的相关系数只有 0.77。这帮助理解人类盲测只验质量部分，交付率必须另看交付率本身，不能用人类偏好证明可靠性。

### 为什么交不出片、成功系统的时间余量

论文逐轮读了全部 224 个无可播放视频轮次的记录并归主因，再看成功轮次在截止前多久写完终版。

读图任务是先认 a 子图 4 种主因的条形长度，再看 b 子图成功者剩余分钟数，最后看 c 渲染栈与 d 自看帧数的分布。

> **看图路径：** 1. 对比 a 子图迟开慢渲与根本没开终渲的占比；2. 看 b 子图成功系统在截止前剩余分钟数的差异；3. 看 c 与 d 子图渲染栈分布与自看帧数和质量的关系

[![原论文 Figure 4：Failures and process. (a) Main cause of the 224 runs without a playable video.](https://arxiv.org/html/2610.35864v2/analysis2.svg)](https://arxiv.org/html/2610.35864v2/analysis2.svg)

*论文图 4。原论文 Figure 4:：“Failures and process. (a) Main cause of the 224 runs without a playable video.”。*

该图可见四分之三失败是终渲开得太晚、跑得太慢或根本没开，其中晚开或太慢 104 轮、从未开终渲 65 轮；卡住的渲染 45 轮只出现在两个 Gemini 系统，多因把帧 pipe 给 ffmpeg 却从不读错误流而死锁，或回合结束时后台渲染被截断；自己覆盖或删掉成品 7 轮。成功侧 Opus 无失败且中位提前 24 分钟写完，Sol 与 GLM 只剩 10 到 11 分钟。渲染管线恒为代码到帧再到 ffmpeg，Manim 只出现 8 轮、MoviePy 13 轮。

Claude 系与 Argon 多用 cairo 矢量，Sol、Kimi 与 GLM 多用 PIL 与 numpy 光栅，Astra、DeepSeek 与 Flash 多用浏览器画布与 three.js。95% 轮次会看自己的帧，但跨系统看多少与质量相关系数为负 0.07，Astra 看得最少中位 3 张却分最高，终版报告常写已验证而实际规格未过。

参测系统与 harness 的完整清单如下，行是 9 个实际可运行的智能体，列是实验室、原生 harness 与强度档。

| System | Lab | Harness | Effort |
| --- | --- | --- | --- |
| GPT-6 Astra | OpenAI | Codex CLI 0.162 | max |
| GPT-5.6 Sol | OpenAI | Codex CLI 0.162 | max |
| Claude Opus 5.5 | Anthropic | Claude Code 2.1.301 | max |
| Claude Sonnet 5.5 | Anthropic | Claude Code 2.1.301 | max |
| Gemini 4 Argon | Google | Antigravity CLI | high |
| Gemini 3.8 Flash | Google | Antigravity CLI | high |
| DeepSeek-V4.1-Flash | DeepSeek | DSH 0.2.1 | max |
| Kimi K3 | Moonshot | Kimi Code 2.2.0 | max |
| GLM-5.3-Flash | Zhipu | ZCode 0.17.0 | max |

这份清单只界定比较对象，不包含成绩：OpenAI 两系统同用 Codex CLI，Anthropic 两系统同用 Claude Code，Google 两系统同用 Antigravity CLI，其余三家各用自家 harness，强度均为供应商接受的最高档。这说明渲染栈与 harness 耦合，cairo 与浏览器 2 维交付率 88% 与 85% 高于 three.js 的 78%，只能说关联，不能说换渲染器必然提分。

### 评委在系统级可靠、在单片上有多不可靠

评委可靠性的比较问题是 3 组之间是否同序、与人类在系统级与单对上各有多一致，指标方向都是越大越一致。

|  | J1–J2 | J1–J3 | J2–J3 |  |
| --- | --- | --- | --- | --- |
| System Spearman ρ (overall) | 0.950 | 0.967 | 0.983 |  |
| Check-level agreement / Cohen’s κ | 94.6 / 0.54 | 91.3 / 0.51 | 91.6 / 0.42 |  |
| Video-level Pearson r (overall) | 0.44 | 0.49 | 0.50 |  |
| Same-task pair ordering accuracy | 69.1 | 69.7 | 65.6 |  |
|  | J1 | J2 | J3 | Mean |
| Human vs. judge, system ρ | 0.98 | 0.80 | 0.90 | 0.98 |
| Human vs. judge, pair agreement (%) | 70.5 | 73.3 | 69.6 | 73.3 |
| Judge ties on human-decisive pairs (%) | 18 | 46 | 14 | 6 |

3 组在系统级 Spearman 相关系数为 0.95 到 0.983，Kendall W 为 0.98，3 组均值与人类 Elo 的相关系数为 0.98；但单片上总体分 Pearson 相关系数只有 0.44 到 0.50，同题两片的排序一致率只有 65.6% 到 69.7%，检查级原始一致率虽有 91% 到 95%，Cohen kappa 只有 0.42 到 0.54，因为多数检查本来就通过。均值与人类在可判对上一致率为 73.3%，分差小于 0.2 时只有 63%，分差 0.5 以上才到 86%。人类标都差的对子评委仍给 3.81 分，与其他对子无异，说明评委分能排序不能发合格证。严格成功率对宽严敏感，Opus 在 3 组下为 83.7%、93.3% 与 51.9%，只能比 3 组均值。

宽严与量尺的完整分布如下，含每组在已交付上的均分、L2 通过率、未知占比、相对另两组的宽严与最好最差 spread。

| Panel | L3 (deliv.) | L2 pass | Unknown | Leniency | Spread nv==0 | Spread deliv. | 1 | 2 | 3 | 4 | 5 | unk. |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| J1 | 3.61 | 90.9% | 0.9% | −-0.41 | 1.47 | 0.89 | 0.8 | 6.0 | 28.6 | 57.4 | 6.0 | 1.3 |
| J2 | 4.01 | 95.7% | 0.4% | ++0.19 | 1.19 | 0.46 | 0.2 | 2.5 | 9.2 | 69.9 | 17.3 | 0.8 |
| J3 | 4.03 | 88.2% | 6.3% | ++0.22 | 1.39 | 0.65 | 2.1 | 2.2 | 16.3 | 46.8 | 31.4 | 1.2 |

J1 最严，均分 3.61 且对弱系统更严，spread 最大；J2 最宽且压缩，70% 维度分是 4 分；J3 检查最严且未知最多 6.3%，但在美学与音频维最宽。这意味着单评委的绝对值不可比，论文坚持先组内算再平均。自偏好上 J2 给自家 Flash 高 0.16，J3 视觉给自家 Sol 高 0.20，J1 对自家 Argon 无偏好，去掉自家面板或按宽严平移后榜首顺序基本不变。

### 费用花在哪、加时间加核有没有用

费用的比较问题是每题平均调用价与总分的关系，价格按记录用量算标价，方向是同分越便宜越好。

读图任务是看 a 子图每家费用条中缓存写与新鲜输入的占比，再看 b 子图对数横轴下谁在前沿。

> **看图路径：** 1. 看 a 子图各系统每题平均费用的 token 类型构成；2. 看 b 子图对数横轴下费用与总分的前沿是哪三家

[![原论文 Figure 5：Where the money goes (239 tasks).](https://arxiv.org/html/2610.35864v2/cost_239.svg)](https://arxiv.org/html/2610.35864v2/cost_239.svg)

*论文图 5。原论文 Figure 5:：“Where the money goes (239 tasks). (a) Mean list-price API cost per task, split by token type: the Claude agents spend most on prompt-cache writes, GPT-5.6 Sol on fresh input.”。*

该图确实可见均价从 GLM 的 0.32 美元到 Opus 的 15.38 美元差 49 倍，Opus 76% 是提示缓存写，Sol 55% 是未缓存输入；前沿是 GLM 到 DeepSeek-V4.1-Flash 再到 Astra，DeepSeek 以 0.47 美元拿到 3.911 的缺片记零总分，性价比突出。费用与总分的秩相关为 0.55 但置换 p 为 0.13，不能说越贵必然越好，且同系统内跑得越久分越低。

时间与 CPU 的消融进一步限定结论适用条件。在 20 题子集上从 15 分钟拉到 120 分钟，可播放数从 DeepSeek、Flash、GLM 的 16、10、0 个涨到 20、19、16 个，但已交付均分在同系统内至多动 0.17，说明预算决定交不交得出，不决定交出来的有多好。GLM 在每个更大预算下都多交一些，Flash 常自己提前结束，DeepSeek 用满给的时间。CPU 从 2 核到 8 核到 16 核， pooled 差异为正 0.09、正 0.13、正 0.22 但 p 为 0.57、0.44、0.20，可播放数 99 到 101 到 103，无显著帮助，重渲染任务在 16 核下仍会超时。压力测试还显示 J1 对黑场、模糊、冻帧、错配音轨与前后半交换都能点名并在相关维扣 1.5 到 1.9 分，但 0.5 或 1.5 秒的音频延迟从未被点名，音画时序是评委与程序检查的共同盲区。

### 这些结论的边界在哪

论文在附录明确列了 4 条局限。固定 1 小时是最大边界，更长预算能多交片但已交付质量未必涨，GLM 是例外。量表重遵循轻创意，创意只通过美学维部分进入，没有单独评原创性。评委依赖私有模型且对音画时序不敏感，绝对值随面板漂移，只能比 3 组均值。覆盖上 239 题里 209 英文、输出以 1080p 为主、超长片少，中文课堂 24 题与论文 10 题的结论不能外推到一般中文长视频。

对音频读者要补一条：70% 任务至少要求一个音频通道，49% 要求语音，每节课堂与论文都要求旁白，但音频检查只有 7.4%，音画 23.2%，视觉 69.4%。J1 与 J2 能听完整音轨，J3 靠能听的模型判音频，未知率也最高。压力测试里无声窗口只在 15 个里点名 7 个，外来配乐与交换 halves 虽被点名但多数目标检查仍通过，说明细则对声音事件存在但对齐容差没有硬阈值，论文也因此只要求对的声配对的事，不设毫秒级偏移上限。

还有一处易误解：单条通过率高不等于任务做对，严格成功率低才是常态；人类 Elo 高不等于可靠，Argon 就是反例；自看帧多不等于质量高，跨系统相关为负。

### 要复现第一步做什么、需要什么

复现第一步是拿到任务包与沙箱镜像，按 ENVIRONMENT.md 的 1 小时、交付物与 TTS 说明跑通一条最短任务，再跑通 L1 程序链：ffprobe 读分辨率帧率时长、完整解码、音频电平、语音活动检测与语种识别。论文给出容器为 Ubuntu 24.04、8 核 32 GB 无 GPU，预装 Python、Node、无头 Chromium 与软件 WebGL、ffmpeg、SoX、three.js 与大字库，允许联网装包，输入文件只读，TTS 是唯一生成式接口。9 个 harness 版本在附录 C 表中固定，最高强度档也要照抄，否则时间管理行为会变。

来源校验方面，本次未发现完成 HTTPS 验证的代码模型数据资源，不得声称代码模型数据已公开。论文正文只说量表与任务映射随基准发布，没有给出可验证的下载链接，复现时应以实际收到的任务包为准。成本上全量一轮约 1.28 万美元标价，Opus 最贵，GLM 与 DeepSeek 最便宜，先用 20 题子集与 J2 单面板冒烟再谈全量。人类盲测要双同步播放器、可切音轨、四选项与 Bradley-Terry 拟合，不能只看自动分。

### 什么时候值得尝试、还缺哪项验证

当你的需求是精确可改的讲解、数据故事、操作演示或规则游戏，且能接受先出完整可播版再迭代的流程，这套代码驱动路线值得尝试。选型上要质量选 Astra 或 Opus，要性价比看 DeepSeek-V4.1-Flash，要便宜看 GLM 但要给更长预算并早开终渲；若交付率优先，避开终渲用逐帧浏览器截屏的慢管线，优先 cairo 矢量或 2 维画布，先保可播再 polish，终渲前留至少二十余分钟余量，写临时文件而非原地覆盖。

还缺的验证是音画对齐的硬指标、长片与中文长课的覆盖、以及单片奖励可否用于训练。当前评委只能做数百题的系统排序，单片 verdict 与单片奖励需留 0.5 分以上 margin 或多面板共识加人工抽查。论文的 grounded 测验显示前四系统能覆盖 93% 到 96% 的知识点，丢分多因没讲而非讲错，这支持把覆盖率作为下一次的独立目标。总之，这是一个远未做满的基准：最好系统仍有约 1/4 任务过不了全部核心，而丢片多是时间规划问题，不是不会画。

<details>
<summary>📎 论文与评分元数据</summary>

排名：前50% | 文档类型：数据集与基准 | [arXiv 原文](https://arxiv.org/abs/2610.35864)

</details>

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。

- 评分规则：type-aware-v1

- 评分模型：muse-spark-1.3-contributor

- 评分请求协议：openai_responses

---

[← 返回 2026-10-29 语音/音乐/音频论文速递](/audio-paper-digest-blog/posts/2026-10-29/)
