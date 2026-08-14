---
title: "Drive-to-Music: Context-Aware Generative Audio for In-Vehicle Experiences"
date: 2026-08-14
draft: false
tags: [音乐生成, 多模态模型, 生成模型, 智能座舱, 实时处理]
categories: [论文速递]
description: "音乐生成 | 5.2/10"
hiddenInHomeList: true
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_arxiv_id: "2608.12615"
---

# 📄 Drive-to-Music: Context-Aware Generative Audio for In-Vehicle Experiences

标签：#音乐生成 #多模态模型 #生成模型 #智能座舱 #实时处理

**5.2/10** | 创新 1/2 | 严谨 0.8/1.5 | 实验 0.6/1.5 | 清晰 0.7/1 | 影响 0.8/1.5 | 开源 0/1.5 | 复现 0.1/0.5 | 工程 1.2/1.5

📝 **5.2/10** | 后50% | 文档类型：系统技术报告 | 评分置信度：中 | #音乐生成 | #多模态模型 | #生成模型 #智能座舱 | [arxiv](https://arxiv.org/abs/2608.12615)


### 👥 作者与机构

- 第一作者：Cosmin Dragoiu（Mercedes-Benz Research & Development North America）
- 通讯作者：未说明
- 作者列表：Cosmin Dragoiu（Mercedes-Benz Research & Development North America）、Nooshin Nabizadeh（Mercedes-Benz Research & Development North America）
- 邮箱信息：cosmin.dragoiu@mercedes-benz.com、nooshin.nabizadeh@mercedes-benz.com

### 💡 毒舌点评

该工作把 VLM、LLM、生成式音频模型和座舱氛围灯整合成一条完整的车载音乐生成流水线，组件选型基准和 safety check 清单对工业落地有参考价值。但论文最大的硬伤是 VLM 选型结论与自己的基准数据直接矛盾：Gemini 2.5 Flash Lite 延迟更低（0.6s vs 1.2s）、CLIP 分数更高（27.25 vs 26.43），最后却选了 LiquidAI，且正文没有给出任何解释；此外"实时""个性化""用户正向反馈"等关键声明缺少端到端延迟、真实车辆测试和任何可量化用户研究支撑。作为顶会投稿，这更像是一份工程 demo 报告而非研究论文。

### 📌 核心摘要

论文要解决的核心问题是：现有车载音乐系统多基于推荐、排序或混音已有音乐，无法根据实时驾驶场景直接生成新的音乐。Drive-to-Music 提出一个车载上下文感知生成音频系统，以前向摄像头图像、车速和温度为主要输入，通过 VLM 生成场景描述，再由 LLM 将场景描述与车辆遥测数据映射为音乐描述（mood、atmosphere、style 等高层文本属性），最后由生成式音频模型合成 90 秒以上无唱词器乐，并并行生成封面图、歌名，同时提取主导色用于氛围灯联动。相比已有系统，其主要新意在于将视觉场景语义和车辆遥测显式翻译成可解释的音乐属性，再驱动生成模型，实现云端低延迟组件化流水线。实验方面，论文提供了组件选型基准：Stable Audio 2.5 在音乐生成候选中延迟 6.2 秒、MuQ-MuLan 0.36、TAQS 78.03；Stable Diffusion 3.5 Large Turbo 在封面生成中延迟 1.4 秒但 GenEval 仅 0.66，明显低于 Qwen Image 的 0.91 和 Gemini 2.5 Flash Image 的 0.96；VLM 选型存在矛盾，Gemini 2.5 Flash Lite 延迟 0.6 秒、CLIP 27.25 都优于被选中的 LiquidAI（1.2 秒、26.43），但论文未解释该决策。实际意义在于展示了生成式 AI 进入智能座舱场景的可行性，并提供了一套可参考的工业流水线设计。主要局限是缺少端到端定量评估、用户研究数据不足、关键选型决策解释不充分，以及没有真实车辆部署结果。

### 🔗 开源详情

该章节正文为空；机器摘要资源状态：has_code=否, has_model=否, has_dataset=否。论文原文未披露代码、模型权重、数据集或开源地址。

### 🏗️ 方法概述和架构

Drive-to-Music 是一个云端生成、车端采集与回放的模块化推理流水线，而非端到端训练的单一生成模型。车端专用服务（dedicated in-vehicle service）负责从前向摄像头采集图像，并从车辆传感器读取车速等级和车外温度等级，将数据上传到云端；云端依次完成图像描述、音乐描述生成、音乐合成、封面图生成、歌名生成、主导色提取和安全性校验，最后将音频和相关媒体元素返回车机播放。论文明确要求所有生成式 AI 模型运行在云端，车端仅需互联网连接即可支持周期性通信。论文没有报告模型训练过程，整个系统表现为基于预训练模型的推理管线。

下图直观地展示了Drive-to-Music系统的模块化推理流水线和数据流向。

![Figure 1: The Drive-to-Music system architecture showcasing the main components and the data flow.](https://arxiv.org/html/2608.12615v1/images/diagram.png)

图中可见，车辆数据（图像、传感器）经由VLM和LLM分别生成场景描述和音乐描述，进而并行生成音乐、封面、歌名和主导色，最后经安全检查输出至车机功能。


**图像描述阶段（Image Description Stage）**：使用 VLM 获得驾驶场景的语义级理解。选型为 LiquidAI LFM 2.5 VL 1.6B（本地托管在 NVIDIA T4 16GB）。该模型接收前向摄像头图像，使用提示词要求模型关注 surroundings、landmarks、vegetation、weather，并忽略人物和冒犯性内容，输出一句话紧凑场景描述。该阶段将高维视觉信号压缩成语义表示，为下游所有生成任务提供基础，避免下游模块直接处理原始图像。

**音乐描述阶段（Music Description Stage）**：使用 LLM 将场景描述与车辆遥测数据映射为音乐描述。选型为 LiquidAI LFM 2.5 1.2B Instruct（本地托管在 NVIDIA T4 16GB）。它接收图像描述，同时拼接车速等级（`<speed_level>`）和温度等级（`<temperature_level>`）输入，提示词要求返回最匹配的音乐描述，仅返回音乐描述文本。输出的音乐描述不是严格的音乐理论参数（如 BPM、调式），而是 mood、atmosphere、style 等高层次文本属性，例如 "upbeat indie folk with gentle rhythms, soft acoustic guitar, and subtle electronic undertones" 或 "high-energy electronic or synthwave tracks with driving rhythms"。这种设计以可解释的文本描述作为中间表示，避免了人工规则映射，也避免直接训练视觉到音频的难训练跨模态模型。

**音乐生成阶段（Music Payload Generation Stage）**：核心组件，选型为 Stable Audio 2.5（API 调用）。输入为音乐描述文本，要求生成 90 秒以上、无唱词的器乐，原因在于带唱词的歌曲可能分散驾驶员注意力，同时较长生成时长可减少歌曲切换频率、提供更沉浸的体验。论文中该阶段平均延迟约 6.2 秒。

**封面艺术生成阶段**：与音乐生成并行。选型为 Stable Diffusion 3.5 Large Turbo（本地托管在 NVIDIA A100 80GB）。输入为图像描述 `<image_description>`，要求生成彩色图像、不包含人物或冒犯内容、宽高比为 1:1。目标是在保持原始场景的情绪和语义内容的同时，允许更风格化的视觉输出。

**歌名生成阶段**：使用与音乐描述相同的 LiquidAI LFM 2.5 1.2B Instruct。输入为音乐描述 `<music_description>`，输出一个 Title Case 格式的短标题，要求仅返回歌名。

**主导色提取阶段（Dominant Color Extraction Stage）**：使用直方图方法增强座舱沉浸感。先遮蔽天空区域以及道路、建筑等低信息灰区（muted sky regions and low-information gray areas），再将剩余像素映射到车辆支持的舱内氛围灯调色板，最终提取主导颜色，用于动态调整车内氛围灯，与生成音乐和视觉元素形成和谐环境。

**安全校验阶段（Safety Check Stage）**：对所有 AI 生成产物进行约束检查。音频校验包括音乐质量评分（music quality scoring）、响度检查（loudness checks）、真峰检查（true-peak checks）、突变检测（sudden-jump detection）和底噪分析（noise-floor analysis），确保音乐自然、无突变或过量噪声；封面图筛查是否包含冒犯视觉内容；歌名过滤粗俗或不合适语言。若任一产物未通过检查，系统重新生成直至满足要求。论文没有给出具体安全阈值或失败概率数据。

**数据流与系统交互**：图像描述是核心中间表示：它同时进入音乐描述生成和封面生成路径；音乐描述则进入音乐生成和歌名生成路径。封面图生成与音乐生成并行执行，歌名生成依赖音乐描述。各生成任务在云端并行或准并行执行，最后由安全校验汇总后返回到车端。系统设计目标是低延迟、可接受质量、低资源消耗以及适合车载场景的无唱词约束。

### 💡 核心创新点

1. **车载上下文到生成音乐的多模态映射系统**：论文提出 Drive-to-Music，将前视图像、车速和温度等驾驶信号映射为音乐描述并生成新音乐。此前车载音频研究（如 SoundsRide 的实时混音、基于情绪的驾驶员音乐推荐）多集中在推荐、重排或实时混音已有曲库，未直接合成新音乐。论文明确区分了自己与这些方法的差异。

2. **两级语义中转的跨模态生成链路**：不是直接训练视觉到音频模型，而是先用 VLM 生成场景描述，再用 LLM 生成音乐描述，最后驱动音频生成模型。这个组合降低了跨模态学习难度，并提高了中间描述的可解释性和模块可替换性。

3. **音乐、视觉与座舱灯光联动的多模态体验生成**：除音乐外，系统并行生成封面图、歌名和主导氛围灯颜色，使输出不只是一段音频，而是相对完整的座舱媒体体验。主导色提取采用遮蔽天空和低信息灰区后映射到支持调色板的直方图方法。

4. **面向车载部署的约束式安全生成闭环**：系统引入音频质量、响度、真峰、突变、底噪以及视觉和文本内容安全检查，并在失败时重新生成。相比普通生成音乐 demo，这一设计更接近生产级座舱应用。

5. **面向资源约束的组件选型基准**：论文在推理延迟、CLIP、GenEval、MuQ-MuLan、TAQS 等指标上对比了多组候选模型，为车载或实时生成音频流水线提供了工程参考，尽管 VLM 选型逻辑存在明显矛盾。

### 📊 实验结果

论文主要给出组件级模型选型结果，而不是与最强基线或 SOTA 的直接比较。作者表示每个指标基于每模型平均约十个样本（on average about ten samples per model）评估，未报告方差或显著性检验。

VLM 场景描述基准中，Gemini 2.5 Flash Lite 延迟 0.6s、CLIP 27.25，两项指标均为最佳；LiquidAI LFM 2.5 VL 1.6B 延迟 1.2s、CLIP 26.43；Qwen 3 VL 2B Instruct 延迟 3.9s、CLIP 26.59。论文最终选择 LiquidAI，但未解释为何不选数据上更优的 Gemini。值得注意的是，LiquidAI 为本地 T4 部署（1.6B），Gemini 为 API 调用（150B），资源使用差异可能是未言明的选择因素，但正文并未说明。

音乐描述 LLM 基准中，LiquidAI LFM 2.5 1.2B Instruct 延迟 0.7s、质量 5/5，在所有候选中延迟最低且质量满分；Qwen 3.5 2B 延迟 2.4s、质量 4/5；Gemini 2.5 Flash Lite 延迟 1.2s、质量 5/5。该阶段选择 LiquidAI 与数据一致。

音乐生成基准中，Stable Audio 2.5 延迟 6.2s、MuQ-MuLan 0.36、TAQS 78.03；ElevenLabs 延迟 15.7s、MuQ-MuLan 0.09、TAQS 72.22；Mubert 延迟 7.4s、MuQ-MuLan 0.29、TAQS 91.26。论文选择 Stable Audio 2.5，理由是综合考虑实时性和语义对齐（MuQ-MuLan 最高且延迟最低），尽管 TAQS 略低于 Mubert。

封面艺术生成基准中，Stable Diffusion 3.5 Large Turbo 延迟 1.4s、GenEval 0.66；Qwen Image 延迟 40.4s、GenEval 0.91；Gemini 2.5 Flash Image 延迟 6.5s、GenEval 0.96。论文选择 Stable Diffusion 3.5 Large Turbo，明显偏向低延迟，但 GenEval 分数显著低于另两个候选（0.66 vs 0.91/0.96），且正文未讨论这一质量损失的可接受性。

论文提供了五个代表性输出案例（表 5），展示城市街道、高速公路、秋日道路、公路卡车和雪地山路场景对应不同音乐风格和封面图。这些案例定性地展示了系统输出多样性，但不构成定量评估。端到端媒体同步、失败重建率、真实车辆部署延迟、用户研究统计结果均未提供。

下图是另一个秋日驾驶场景的输入与输出案例。

![秋日林间道路驾驶场景输入图：前向摄像头捕获的道路画面](https://arxiv.org/html/2608.12615v1/images/img_3.png)

左图为秋日林间道路的输入，右图生成的封面艺术保留了秋日氛围但风格更抽象，展示了系统在不同视觉语境下的生成多样性。


论文通过表5展示了系统在不同驾驶场景下的生成结果，下图是其中一个典型案例的输入与输出。

![城市街道驾驶场景输入图：前向摄像头捕获的道路画面](https://arxiv.org/html/2608.12615v1/images/img_1.png)

左图为城市街道的前向摄像头输入图像，右图为系统据此生成的封面艺术，体现了从真实场景到风格化视觉输出的映射。


表 1 保留论文表 1 和表 2 的全部候选模型结果，覆盖 VLM 和 LLM 两个阶段；这些数据是论文组件选型决策的核心证据，其中 VLM 阶段 Gemini 的延迟和 CLIP 双优但未选中是审稿中发现的关键矛盾。

**表 1：VLM 与 LLM 候选模型选型结果**

| 阶段 | 模型 | 容量 | 推理延迟 | 质量指标 | 得分 |
| --- | --- | --- | --- | --- | --- |
| VLM | LiquidAI LFM 2.5 VL 1.6B | 1.6B | 1.2s | CLIP | 26.43 |
| VLM | Qwen 3 VL 2B Instruct | 2B | 3.9s | CLIP | 26.59 |
| VLM | Gemini 2.5 Flash Lite | 150B | 0.6s | CLIP | 27.25 |
| LLM | LiquidAI LFM 2.5 1.2B Instruct | 1.2B | 0.7s | 5 分制质量 | 5/5 |
| LLM | Qwen 3.5 2B | 2B | 2.4s | 5 分制质量 | 4/5 |
| LLM | Gemini 2.5 Flash Lite | 150B | 1.2s | 5 分制质量 | 5/5 |

表 2 保留论文表 3 和表 4 的全部候选模型结果，覆盖音乐生成和封面艺术两个阶段；论文在这些候选模型中分别选择了 Stable Audio 2.5 和 Stable Diffusion 3.5 Large Turbo。

**表 2：音乐生成与封面艺术候选模型选型结果**

| 阶段 | 模型 | 推理延迟 | MuQ-MuLan | TAQS | GenEval |
|---|---:|---:|---:|---:|---:|
| 音乐生成 | ElevenLabs | 15.7s | 0.09 | 72.22 | — |
| 音乐生成 | Mubert | 7.4s | 0.29 | 91.26 | — |
| 音乐生成 | Stable Audio 2.5 | 6.2s | 0.36 | 78.03 | — |
| 封面艺术 | Stable Diffusion 3.5 Large Turbo | 1.4s | — | — | 0.66 |
| 封面艺术 | Qwen Image | 40.4s | — | — | 0.91 |
| 封面艺术 | Gemini 2.5 Flash Image | 6.5s | — | — | 0.96 |

### 🔬 细节详述

- **训练数据**：未说明。论文没有报告任何训练数据集、来源、规模、预处理或数据增强策略。系统全部使用预训练模型。
- **损失函数**：未说明。论文没有给出任何训练损失或目标函数。
- **训练策略**：未说明。没有给出学习率、warmup、batch size、优化器、训练步数或 epoch。论文不涉及模型训练。
- **关键超参数**：部分模型容量已给出：LiquidAI LFM 2.5 VL 1.6B、LiquidAI LFM 2.5 1.2B Instruct、Stable Diffusion 3.5 Large Turbo 8B、Qwen Image 20B、Gemini 模型 150B。系统约束包括生成 90 秒以上器乐、封面 1:1 比例、输出低延迟。其余如生成温度、采样步数、CFG 权重等未说明。
- **训练硬件**：未说明。推理硬件方面，LiquidAI 模型本地托管在 NVIDIA T4（16GB），Stable Diffusion 3.5 Large Turbo 本地托管在 NVIDIA A100（80GB）；Gemini、ElevenLabs、Mubert、Stable Audio 2.5 等通过 API 调用。
- **推理细节**：各阶段提示词完整列于附录表 6。音频生成直接使用 `generate `<music_description>``；歌名生成要求 Title Case 且只返回标题；封面生成禁止人物和冒犯内容。图像描述提示词要求忽略人物和冒犯性内容并限制输出为一句话。解码策略、temperature、beam size、流式设置、歌曲预生成策略均未说明。
- **正则化或稳定训练技巧**：未说明。系统层面提到失败重新生成和安全校验，但没有具体正则化或训练稳定技巧。
- **系统部署要求**：论文明确要求所有生成式 AI 模型运行在云端，车端服务仅负责数据采集和播放；唯一要求是支持周期性车云通信的互联网连接。这在实际部署中引入了网络依赖和断网可用性问题，论文未讨论。
- **平滑过渡设计目标**：论文摘要中提到系统"supports smooth transitions as driving conditions evolve"，但正文没有说明具体实现机制（如是否通过音乐描述渐变、交叉淡入淡出、预生成缓存等）。该声明缺少技术细节支撑。

### ⚖️ 评分理由

*   创新性 (1.0/2)：[A_METHOD] 论文构建了从驾驶图像、车速和温度到音乐描述、音频合成、封面、歌名与座舱氛围灯联动的完整生成式系统，两级语义中转链路具备系统级新意；但各生成组件主要复用预训练模型，核心算法层面的创新有限。

*   技术严谨性 (0.8/1.5)：[A_RESULTS] VLM选型存在明显逻辑矛盾：Gemini 2.5 Flash Lite在延迟0.6s和CLIP 27.25上均优于LiquidAI的1.2s和26.43，论文却选择后者且未解释；[A_LIMITS] 封面生成中选中的模型GenEval 0.66显著低于候选0.91和0.96，也未论证该质量损失为何可接受。

*   实验充分性 (0.6/1.5)：[A_RESULTS] 论文仅提供组件级选型基准，每模型平均约十个样本且未报告方差或显著性检验；[A_LIMITS] 缺少端到端延迟、吞吐、成本、压力测试、失败重建率、真实车辆部署和可量化用户研究，难以支撑实时车载系统的整体有效性声明。

*   清晰度 (0.7/1)：[A_SUMMARY] 分阶段架构、数据流和候选模型表格整体表述清晰，但摘要中“smooth transitions”等关键系统能力在正文缺乏对应实现机制说明，造成关键声明与细节说明之间的表达脱节。

*   影响力 (0.8/1.5)：[A_SUMMARY] 论文面向音乐生成核心场景，展示了生成式AI进入智能座舱的系统级可行性，并提供组件选型基准和工业流水线参考，对车载音频和生成音乐应用具有明确的领域相关性和潜在影响。

*   开源 (0.0/1.5)：[A_OPEN] 论文未发布核心代码、模型权重或数据资源，也未给出明确的后续开源承诺。

*   可复现性 (0.1/0.5)：[A_METHOD] 虽然给出了各阶段提示词、组件选型和部分推理硬件，但生成温度、采样步数、解码策略、安全校验阈值与失败重建逻辑等关键配置大量缺失，端到端流水线难以按论文完整重建。

*   工程/实践价值 (1.2/1.5)：[A_METHOD] 模块化云端推理流水线将场景描述、音乐描述、音频合成、封面、歌名、主导色氛围灯联动和安全校验解耦，并给出候选模型的延迟与质量基准，为智能座舱场景的工程落地提供直接参考。

### 🚨 局限与问题

- **VLM 选型逻辑与基准数据矛盾**：在表 1 中，Gemini 2.5 Flash Lite 的推理延迟最低（0.6s），CLIP 分数最高（27.25），但论文最终选择 LiquidAI LFM 2.5 VL 1.6B（1.2s、26.43），且正文未解释决策理由。可能的资源/部署因素（1.6B 本地 T4 vs 150B API 调用）仅为外部推断，原文没有明确说明，不能替代作者论证。
- **缺少端到端定量评估**：论文只给出各组件独立延迟和质量指标，没有报告端到端延迟、吞吐、成本、失败率、并发性能或压力测试结果，无法验证系统整体是否真正满足车载实时性要求。
- **用户研究数据不足**：结论中仅一句“Limited user studies showed positive reception”，未提供参与人数、实验协议、测量指标、统计显著性等，无法支撑“enhance driver experience, attention, and well-being”“personalized”等强声明。
- **样本量与统计可靠性有限**：每个模型平均仅约十个样本，且未报告方差或显著性检验。CLIP 26.43 与 27.25 之间的差距可能完全在噪声范围内，不能作为稳健的选型依据。
- **封面生成质量损失未讨论**：Stable Diffusion 3.5 Large Turbo 的 GenEval 仅 0.66，显著低于 Qwen Image（0.91）和 Gemini 2.5 Flash Image（0.96），但论文未解释这种明显质量损失为何可接受。
- **“平滑过渡”缺乏实现细节**：摘要声称系统支持驾驶条件变化时的平滑过渡，但正文没有说明过渡机制（如交叉淡化、预生成缓存、音乐描述渐变等）。
- **安全校验缺少可操作参数**：论文列举了音频质量、响度、真峰、突变、底噪等检查项，但未给出具体阈值、失败率或重新生成策略的详细逻辑，难以复现或审计。
- **没有真实车辆部署结果**：论文未提供在真实车辆或真实驾驶条件下的部署延迟、网络稳定性、传感器一致性和用户接受度结果。
- **云端依赖与断网可用性未讨论**：所有生成式 AI 模型均要求云端运行，车端仅依赖互联网连接，但未讨论网络不可用、高延迟或隐私合规对系统可用性的影响。
- **未报告训练数据、训练策略与推理关键参数**：系统完全复用预训练模型，没有给出训练数据、损失函数、训练策略、解码温度、采样步数等细节；这虽然符合系统报告特点，但限制了可复现性。
- **缺少与现有车载音乐系统比较**：论文没有与基于推荐、混音或规则映射的车载音乐系统进行端到端质量、延迟或用户体验比较，无法证明生成式方法的相对优势。

---

[← 返回 2026-08-14 语音/音乐/音频论文速递](/audio-paper-digest-blog/posts/2026-08-14/)
