---
title: "StreamArena: Toward Continuous, Interactive, and Long-Horizon Agentic Streaming Video Understanding"
date: 2026-08-10
draft: false
tags: [多模态模型, 大语言模型, 基准测试]
categories: [论文速递]
description: "多模态模型 | 7.6/10"
hiddenInHomeList: true
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_arxiv_id: "2608.05703"
---

# 📄 StreamArena: Toward Continuous, Interactive, and Long-Horizon Agentic Streaming Video Understanding

标签：#多模态模型 #大语言模型 #基准测试

**7.6/10** | 创新 1.3/2 | 严谨 1.2/1.5 | 实验 0.8/1.5 | 清晰 0.8/1 | 影响 0.3/1.5 | 开源 1.5/1.5 | 复现 0.5/0.5 | 工程 1.2/1.5

✅ **7.6/10** | 前25% | 文档类型：数据集与基准 | 评分置信度：中 | #多模态模型 | #大语言模型 | #基准测试 | [arxiv](https://arxiv.org/abs/2608.05703)


### 👥 作者与机构

- 第一作者：Xichen Zhang（The Hong Kong University of Science and Technology; Xiaohongshu Inc.）
- 通讯作者：未说明
- 作者列表：Xichen Zhang（The Hong Kong University of Science and Technology; Xiaohongshu Inc.）、Guankai Li（Xiaohongshu Inc.）、Yinghao Zhu（The University of Hong Kong）、Shijian Wang（Xiaohongshu Inc.）、Sitong Wu（The Chinese University of Hong Kong）、Shaozuo Yu（The Chinese University of Hong Kong）、Meng Chu（The Hong Kong University of Science and Technology）、Yuan Lu（Xiaohongshu Inc.）、Jiaya Jia（The Hong Kong University of Science and Technology）

### 💡 毒舌点评

把流式视频评测从短视频/选择题推向“小时级+开放问答+主动监测”，并给出前端/后端两层 worker 的系统方案，工程量和开放材料都很完整，这是明显亮点。但系统级比较的核心结论被骨干规模差异污染：StreamMind 用 Qwen3.5-397B-A17B 对比多个 3B/7B/8B 流式基线，且没有组件消融，因此“架构带来增益”的归因并不牢靠。Tool 的 228.1% 相对提升只建立在 MiniCPM-o 17.1% 的弱基准上，绝对准确率仍与人类参考 95.2% 差距巨大，不能据此宣称工具调用能力已接近实用。

### 📌 核心摘要

论文针对现有流式视频理解评测以短视频、选择题为主、容易受语言先验和近因捷径影响的问题，提出 StreamArena：一个包含 243 个平均时长 88.8 分钟完整视频、3646 个开放问答对的小时级因果流式视频基准，每个问题都带有查询时间戳和支撑证据时间戳，并覆盖实时感知、历史回顾、多模态工具调用、主动交互四类能力。论文同时提出 StreamMind，一个将低延迟交互与持久化多模态记忆分离的两层 worker 架构：前端 Front Worker 和 Monitor Worker 负责即时对话与主动监测，后端 Memory Writer、Router、Recall、Search 异步完成记忆构建和检索。相对最强流式基线，StreamMind 在四类能力上分别相对提升 58.4%、53.7%、228.1%、54.7%；与共享 Qwen3.5-397B-A17B 骨干的离线查询式推理相比，StreamMind 将查询到回答的平均延迟降低 66.2%，同时保留约 89.7% 的池化准确率。主要局限是：系统对比混入了骨干规模差异，缺少组件级消融，LLM 评判协议和标注一致性未做专门验证。

下图提供了StreamArena基准的全面概述，包括数据集统计和四类任务示例。

![Figure 1: Overview of StreamArena. The top row summarizes (a) source domains, (b) task types, (c) video durations,](https://arxiv.org/html/2608.05703v1/x1.png)

图中展示了源域分布、视频时长分布、证据时间间隔分布，以及实时感知、历史回顾、工具调用和主动交互的典型示例。

### 🔗 开源详情

- 代码：完整 StreamMind 实现（Front、Monitor、Router、Search、Recall、Memory Writer 各 worker）、评测框架（帧采样、ASR fallback、字幕提取、LLM 评判调用）以及 Table 3 中所有基线适配器，均以 Apache-2.0 许可通过论文首页公开的代码仓库发布。
- 数据：StreamArena 的标注（问题、答案、查询时间戳、证据时间戳、任务类型、推理模式、监控时距等）以 CC BY 4.0 许可发布；原始视频内容不重新分发，仅公开 YouTube 视频 ID。
- 视频可用性处理：论文声明会跟踪视频可用性并定期刷新索引；当某 YouTube 视频 ID 不可达时，将对应标注重定向到公共保存平台上的兼容存档副本，并在发布说明中列出所有替换。
- 代码到论文映射：每个 StreamMind worker 模块的 docstring 都映射到 Appendix C.5 中对应的超参数；数据预处理脚本位于 tools/preprocess/。
- 随机性控制：所有非 LLM 随机性（离线均匀帧采样、基线 tie-breaking、Monitor 调度）由单一全局 seed=42 控制；所有本地 vLLM 解码请求也使用 seed=42；Gemini 3.1 Pro 评判使用 temperature=0。
- 未披露：具体代码仓库 URL 未在论文文本中体现；模型权重未开放（StreamMind 不训练新模型）；预计算好的记忆库或已处理视频特征未说明是否提供。

### 🏗️ 方法概述和架构

StreamArena 本质上是一个评测协议加配套系统。评测协议要求被测系统从 \(t=0\) 开始按因果顺序连续消费视频流；显式提问时只能访问查询时间点之前的内容，主动监测任务则要求系统在用户注册监控条件后自行判断触发时机，并在事件发生后输出提醒。评测指标上，开放问答由 Gemini 3.1 Pro 按“是否包含答案事实核心”做严格二值判定；主动任务同时要求触发时间满足 \(\operatorname{TimeOK}\)，即允许 \(t_{\text{pred}} - t_{\text{gt}} \in [-0.5\,\text{s},\, 2.0\,\text{s}]\)，且触发后不等待文本生成完成。

数据构建采用三层人工标注：30 名博士级标注员先按每部视频约 20 个多轮问答起草问题、答案、查询时间戳与证据段；两名独立交叉验证者不看草稿直接作答并修正事实、措辞和时间戳；第三名审计员再盲审。经过约 27% 的淘汰后，最终保留 3646 个任务。任务被定义为四类：RTP 要求用查询时间附近 \(\pm 10\) 秒内的音视频证据回答；HR 要求检索事件发生时刻与查询时刻之间最大间隔可超过一小时的过去证据；Tool 要求先从视频中识别视觉所指，再通过图像/文本搜索补齐外部信息；Pro 要求系统在事件发生前 0.5 秒到事件发生后 2.0 秒内自主触发提醒，不能等待用户再次提问。

StreamMind 是持续吃流的多 worker 系统，而不是端到端训练模型。核心数据流是：OpenCV 以 2 fps 解码视频帧，写入 60 秒 FIFO FrameBuffer，并由 Memory Writer 按固定周期写入各 worker 共享的 Memory Bank。Memory Bank 包括实体关系图、micro/macro/super 三级事件层和关键帧存储。Memory Writer 每 4 秒读取 30 帧和最近 15 秒 ASR 文本，产生事件边界决策、关键帧、微事件记录、实体更新和关系边；微事件在预测边界、6 个 tick 或 30 秒后关闭，宏事件在 5 个微事件或 180 秒后关闭，超事件在 4 个宏事件或 900 秒后关闭。前端 Front Worker 根据最新 12 帧、对话历史、当前事实、最近宏摘要和活跃检索简报，判断是直接回答、派发检索任务、创建 Monitor 还是取消 Monitor。Monitor Worker 独立于 Front Worker 运行，每 2 秒检查最新 4 帧，以 JSON 方式输出是否满足条件，置信度达到 0.6 才触发通知。后端 Router Worker 以 ReAct 形式最多运行 4 轮，把请求拆成 Recall 和 Search 子任务，收集证据后合成最终答案。Recall Worker 在事件层级和实体图上执行时间窗搜索、实体搜索、微事件搜索、实体条件事件/帧检索、关系遍历；Search Worker 执行文本搜索、整帧反向图像搜索和裁剪图像搜索。所有查询驱动的记忆读取都被查询时间边界约束，保证不看到未来信息。

下图展示了StreamMind系统的整体架构，包括前端和后端的分工。

![Figure 2: Overview of StreamMind. The frontend handles interaction and monitoring; the backend maintains memory and performs retrieval. The Memory Bank combines hierarchical events, entity relations, and key frames.](https://arxiv.org/html/2608.05703v1/x2.png)

图中可见前端Front Worker处理实时交互和监控，后端Memory Bank维护层次事件和实体关系图，Router、Recall、Search worker执行异步检索。


该架构的关键设计动机是：把延迟敏感的前端交互与可异步进行的长期记忆构建分离，从而避免“既要快速响应又要长期记忆”的互斥。相比只用最近窗口的方法，它保留历史视觉证据；相比把过去视频压成文本摘要的方法，它保留关键帧；相比单模型内压缩，它把检索与推理放在独立的可调度 worker 中。系统不训练新模型，所有 worker 统一调用同一个 Qwen3.5-397B-A17B 端点，前端口使用非思考模式以保证低延迟，后端检索与记忆 worker 使用思考模式。

### 💡 核心创新点

1. 提出小时级因果流式视频基准 StreamArena。已有流式基准多为几分钟短视频和多选题，存在近因捷径与语言先验；StreamArena 使用平均 88.8 分钟完整视频、开放问答、查询与证据双时间戳，并能通过证据间隔考察真实长期记忆。证据是最长间隔超过六十分钟的 HR 问题有 49 个，且 189 个 HR 问题需要联合关注至少两段分离证据，最难问题涉及 15 个证据段。
2. 将实时感知、历史回顾、工具调用、主动交互四类能力放进同一评测协议。已有基准通常只测其中一两类，无法揭示“持续交互”与“长期理解”之间的架构冲突。实验显示不同设计各有短板，例如 AURA 在 5 分钟内 HR 准确率 25.4%，超过 30 分钟后降到 10.5%。
3. 提出 StreamMind 两层级 worker 架构，把交互与监控放在前端，把持久化记忆与检索放在后端。相比文本摘要法 VST，它保留关键帧视觉证据；相比模型内压缩法 StreamForest/ThinkStream，它能按需检索结构化事件与实体。证据是 StreamMind 在四类能力上都成为最强流式系统。
4. 通过持久状态复用显著降低查询延迟。与相同 Qwen3.5-397B-A17B 骨干的离线查询式推理相比，StreamMind 将 RTP/HR/Tool 三类问题的平均延迟从 81.4 秒降至 27.5 秒，相对降低 66.2%，并保留约 89.7% 的池化准确率，说明“状态预计算”对在线响应很重要。

### 📊 实验结果

StreamArena 共 243 个视频、3646 个开放问答对，其中 RTP 263 个、HR 877 个、Tool 1732 个、Proactive 774 个。视频平均时长 88.8 分钟，最长 134.2 分钟；189 个视频为中文音轨，25 个为英文，26 个为中英混合，3 个为其他语言；17 个为直播录制，226 个为长视频。人类参考准确率在 RTP 上约 91.8%、Tool 上约 95.2%、Proactive 上约 91.5%；人类在允许回看时 HR 准确率约 80.7%，改为纯流式不重看时降至约 63.4%，说明小时级流式记忆本身很困难。

在系统对比中，StreamMind 相对最强流式基线：RTP 相对提升 58.4%（44.5% vs AURA 28.1%），HR 相对提升 53.7%（34.9% vs VST 21.2%），Tool 相对提升 228.1%（56.1% vs MiniCPM-o 17.1%），Proactive 相对提升 54.7%（11.6% vs MiniCPM-o 7.5%）；HR 的四个证据间隔桶上相对提升范围约 24.0% 至 73.0%。需要指出，Tool 的 228.1% 是以 MiniCPM-o 的 17.1% 为基数的相对增幅，绝对水平仍远低于人类 95.2%；此外多个流式基线不支持工具调用，但这不会直接改变“最强支持者”的基数。诊断实验显示：ASR-only 的 RTP 准确率仅 4.2%，纯视觉 128 帧为 26.8%，视觉加 ASR 为 32.4%，说明 RTP 必须联合音视频；提高帧数主要改善 HR，提高分辨率三类任务都提升；打开思考模式改善 HR 和 Tool 但轻微降低 RTP。

下图展示了在诊断子集上，帧数、分辨率和推理模式对模型准确率的影响。

![Figure 3: Accuracy (%) on the diagnostic subset under changes to (a) frame count, (b) resolution, and (c) reasoning mode.](https://arxiv.org/html/2608.05703v1/x3.png)

图中可见增加帧数对历史回顾任务提升最大，提高分辨率使各类任务准确率均上升，思考模式显著提升工具调用任务的准确率。


表：延迟对比（保留本文方法与代表性离线基线，对应论文 Table 4）

| 方法 | 池化准确率 (%) | RTP 延迟 (s) | HR 延迟 (s) | Tool 延迟 (s) |
|---|---|---|---|---|
| Gemini 3.5 Flash | 63.1 | 86.9 | 123.9 | 139.5 |
| Kimi-K2.6 | 54.5 | 162.8 | 187.9 | 128.2 |
| Qwen3.5-397B-A17B | 54.2 | 83.8 | 117.4 | 62.8 |
| Qwen3.5-Omni | 44.6 | 50.8 | 56.4 | 103.7 |
| MiMo-V2.5 | 43.3 | 224.5 | 266.5 | 187.4 |
| StreamMind | 48.6 | 12.9 | 30.7 | 28.1 |

表中准确率为 RTP/HR/Tool 三类任务的池化正确率，延迟为查询到达至最终回答生成的墙钟时间。StreamMind 比同骨干离线推理大幅降低延迟，但准确率并未超过同骨干离线模型（48.6% vs 54.2%）。

### 🔬 细节详述

- 训练数据：StreamMind 不训练新模型，因此不适用；基准数据来自 YouTube 七个域共 243 个时长不低于 60 分钟、分辨率不低于 1080p、含英文或中文音轨的视频，平均时长 88.8 分钟。影片分布为 Film & TV 66、Tutorial 57、Press Conference 43、E-commerce Live 21、Egocentric 20、Sports 19、Meeting & Interview 17。论文声明公开 YouTube 视频 ID，但未在文本中给出具体列表 URL。
- 损失函数：不适用，未训练模型。
- 训练策略：不适用，未进行模型训练或微调；所有 worker 使用预训练 Qwen3.5-397B-A17B 作为共享骨干。注意 AURA、MiniCPM-o-4.5、VST 是作者微调后的骨干。
- 关键超参数：Front Worker 使用 \(T=0.3\)、\(K=256\)、最新 12 帧；Monitor Worker 每 2 秒检查 4 帧、触发置信度阈值 0.6、最多 8 个并行 Monitor；Router 最多 4 轮 ReAct、\(T=0.2\)、\(K=2048\)、8 帧；Search 最多 3 轮、\(T=0.2\)、\(K=4096\)、30 帧；Recall 最多 4 轮、\(T=0.2\)、\(K=2048\)、4 帧；Memory Writer 每 4 秒写一次、读 30 帧、\(T=0.2\)、\(K=2560\)。FrameBuffer 为 60 秒，FrameStore 最多 4000 张关键帧，实体规范化阈值 0.85，关键帧去重使用 8 秒回看的 dHash 海明阈值 6。
- 训练硬件：8×NVIDIA H800 80GB 服务器；2×Intel Xeon Platinum 8563C（208 逻辑核）；系统内存 2TB DDR5；CUDA 12.8；推理引擎 vLLM 0.25.0；PyTorch 2.11。

### ⚖️ 评分理由

*   创新性 (1.3/2)：[A_SUMMARY][SCORING_SOURCE_5/32] StreamArena是首个把实时感知、历史回顾、工具调用和主动交互四类能力放进同一小时级因果流式视频基准的工作，并以243个平均88.8分钟完整视频和3646个开放问答对落地；[A_RESULTS] StreamMind的两层worker与状态复用将同骨干查询延迟降低66.2%，也是有证据的系统性贡献。

*   技术严谨性 (1.2/1.5)：[A_METHOD][SCORING_SOURCE_7/32][SCORING_SOURCE_8/32] 评测协议强制因果消费，所有查询驱动读取都被查询时间边界约束，主动任务用-0.5秒至2.0秒的TimeOK判定触发；数据经30名博士级标注员、双人交叉验证和第三人盲审，约27%淘汰后保留3646任务，作为数据集/基准其协议设计和泄漏控制严谨。

*   实验充分性 (0.8/1.5)：[A_RESULTS][SCORING_SOURCE_11/32] 对比覆盖五类架构且诊断实验证明RTP需音视频联合；[A_LIMITS][SCORING_SOURCE_32/32] 但主要性能对比混入397B对7-8B骨干的规模差异且无组件消融，Table 3/4/5与Figure 3均单次运行无显著性检验，LLM评判与标注一致性也缺定量验证，实验证据不足。

*   清晰度 (0.8/1)：[A_METHOD] 对各worker的职责、输入输出和因果边界有具体说明，[A_RESULTS] 的延迟表也便于核对；但系统流程与评测协议交织，多worker并行关系在正文中叙述密度较高，需依赖附录才能完全厘清，故给0.8。

*   影响力 (0.3/1.5)：[A_SUMMARY] StreamArena面向小时级流式视频理解，核心贡献落在视觉/多模态视频而非语音/音乐/音频；按本速递领域相关性约束，影响力上限为0.5，且目前仍属研究基准而非广泛生态，故给0.3。

*   开源 (1.5/1.5)：[A_OPEN][SCORING_SOURCE_31/32] 核心标注以CC BY 4.0发布，完整实现（Front、Monitor、Router、Search、Recall、Memory Writer、评测框架及基线适配器）以Apache-2.0经论文首页公开仓库发布，并含代码到附录映射和视频可用性刷新；原始视频只公开ID不重分发符合平台条款，核心产物完整开放且文档充分。

*   可复现性 (0.5/0.5)：[A_METHOD][A_OPEN][SCORING_SOURCE_32/32] 论文披露了数据构建协议、2fps解码、FrameBuffer与各worker的配置、8×H800硬件和单一全局seed=42，Gemini judge固定temperature=0，本地vLLM解码也使用相同seed；复现步骤和配置基本齐全。

*   工程/实践价值 (1.2/1.5)：[A_METHOD][A_RESULTS][SCORING_SOURCE_13/32] StreamMind提供完整可运行的持续流系统：OpenCV 2fps采集、60秒FIFO、三级事件/实体/关键帧Memory Bank，Front/Monitor/Router/Search/Recall/Memory Writer分工明确；共享Qwen3.5-397B骨干下平均查询延迟从81.4秒降至27.5秒且保留89.7%池化准确率，工程价值有直接数据支撑。

### 🚨 局限与问题

1. 架构对比的公平性不足：StreamMind 使用 Qwen3.5-397B-A17B 作为骨干，而 AURA、MiniCPM-o-4.5、VST 等流式基线分别基于 8B/8B/7B 量级骨干；相对提升可能部分来自骨干规模差异，而非 StreamMind 架构本身。
2. 缺少组件级消融：没有分别移除或替换 Front Worker、Router、Recall、Search、Memory Writer、Monitor Worker 等组件，无法证明每个组件对四类能力的独立贡献；诊断实验只改变输入模态、帧数、分辨率和思考模式。
3. 统计可靠性不足：原文明确说明 Table 3、Table 4、Table 5 和 Figure 3 的每个数值均来自单次运行，未报告标准差或显著性检验；完整跑一遍 StreamArena 成本太高，重复运行不经济。
4. 评判与标注一致性未专门验证：LLM 评判（Gemini 3.1 Pro）的可靠性，以及三层人工标注之间的信度，均未提供定量一致性指标（如 Cohen’s kappa）。
5. Tool 任务绝对水平偏低：StreamMind 的 Tool 准确率为 56.1%，相对 MiniCPM-o 的 17.1% 提升 228.1%，但离人类参考 95.2% 仍有巨大差距；多个流式基线不支持工具调用，导致“最强支持者”的对比池很小。
6. Proactive 任务绝对准确率很低：StreamMind 的 Proactive 准确率仅为 11.6%，即使相对提升 54.7%，实际可用性仍很有限。
7. 未做超参搜索：所有 StreamMind worker 超参数均为直接确定，没有进行自动化搜索；作者将诊断 sweeps 视为消融而非调参，但这也意味着可能存在未充分优化的配置。
8. 没有提供具体开源链接：原文说明代码和注释已公开，但未在可见文本中给出代码仓库 URL 和视频 ID 列表的具体链接。

---

[← 返回 2026-08-10 语音/音乐/音频论文速递](/audio-paper-digest-blog/posts/2026-08-10/)
