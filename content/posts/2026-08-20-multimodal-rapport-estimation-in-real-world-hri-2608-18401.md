---
title: "Multimodal Rapport Estimation in Real-World HRI"
date: 2026-08-20
draft: false
tags: [多模态模型, 音视频理解, 模型融合, 模型评估]
categories: [论文速递]
description: "多模态模型 | 7.0/10"
hiddenInHomeList: true
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_arxiv_id: "2608.18401"
---

# 📄 Multimodal Rapport Estimation in Real-World HRI

标签：#多模态模型 #音视频理解 #模型融合 #模型评估

**7.0/10** | 创新 1.1/2 | 严谨 1.1/1.5 | 实验 1.2/1.5 | 清晰 0.9/1 | 影响 0.9/1.5 | 开源 0.5/1.5 | 复现 0.3/0.5 | 工程 1/1.5

✅ **7.0/10** | 前50% | 文档类型：应用研究 | 评分置信度：中 | #多模态模型 | #音视频理解 | #模型融合 #模型评估 | [arxiv](https://arxiv.org/abs/2608.18401)


### 👥 作者与机构

第一作者：Akihiro Sakuramoto（机构未说明）
通讯作者：未说明
作者列表：Akihiro Sakuramoto、Takato Hayashi、Ryo Miyoshi、Yuki Okafuji、Shogo Okada（机构信息未在当前正文中完整说明）

### 💡 毒舌点评

真实场景和模态互补分析是亮点；但数据规模与标注主观性让结果更像可靠起点而非通用 rapport 模型。 亮点是一是把 rapport 估计带到真实多人 HRI；二是系统比较 LLM、HuBERT、V-JEPA 的互补性；三是用条件分层揭示真实场景的上下文变化；短板是单地点、单文化和 62 会话限制外部效度；第三方 rapport 本身含主观性，真实多人参与还可能导致说话人归因错误。

### 📌 核心摘要

1. 这项工作把人机 rapport 估计从可控实验室带到真实日本药店。顾客可以随时靠近或离开，一人对话也会自然变成多人参与；最终保留 62 个 session、97 名可分析参与者，并由 3 位第三方标注者使用 CCR-8 打分。

2. 文本大模型在小数据真实场景中表现很强。Gemini 2.5 Flash 仅看文本时 CCC 为 0.580、PCC 0.665；直接输入文本+音频+视频后 CCC 为 0.618。冻结 embedding 模型中，HuBERT 音频最好，CCC 为 0.460。

3. 最佳结果不是把所有原始模态一次塞给大模型，而是把 Gemini 文本预测与 HuBERT 音频、V-JEPA 视频预测做预测级融合：MAE 0.471、PCC 0.717、CCC 0.656，优于最强单模型。Gemini 占一半权重，两个非文本分支各占四分之一。

4. 真实场景的上下文差异不可忽略。Gemini 在长短会话中的 CCC 只差 0.012，并在 3 人交互中达到 0.721；V-JEPA 则从 1 人的 0.503 降到 3 人的 0.043。模型总体分数相同，不代表在群体规模和互动时长变化下同样可靠。

5. 标签本身经过可靠性检查：个体 rapport 均值 3.72±0.80，三评审 ICC(2,3)=0.85、Cronbach’s α=0.95。音视频分支相对 Gemini 文本的 partial correlation 为 0.359、增量 R² 为 0.072，说明融合收益来自文本看不到的线索，而不是简单复制预测。

6. 数据仍只有 97 个个体，3 人条件仅 13 个；目标是第三方从行为看到的 rapport，不是用户自我体验。机器人又由真人远程操控，模型比较也存在 API 单次零样本与 30 折监督训练的条件差异。因此最佳融合是一个真实场景 baseline，不是跨文化自主机器人通用评价器。

### 🔗 开源详情

论文中未提及代码、模型权重或会话数据的公开方式。

### 🏗️ 方法概述和架构

**现场采集与过滤。** 高约 0.3 米的 Sota 在日本药店入口以 Wizard-of-Oz 方式运行 6 天、共 32 小时，真人远程控制语音、手势和注视，录得 131 个 session。研究排除 4 人以上、含约 6 岁以下儿童、全程少于 2 句用户发言的互动，剩 62 个 session、101 人；4 人无可用语音，最终 97 个个体进入估计。这样的过滤让 rapport 可标，却也排除了极早离开和几乎不说话的低参与案例。

**CCR-8 标签。** 3 位日语标注者先学习量表定义和示例行为，再分别对四项 Connection、四项 Coordination 做 1—5 分评价，个人真值取三人平均。34 个多人 session 另有群体分数，但模型只预测个人 rapport。研究先算各子量表与总分的 Cronbach’s α，再用双向绝对一致 ICC(2,3) 检查平均评分可靠性；总分 α=0.95、个人 ICC=0.85，支持把三人均值当连续回归目标。

**参与者级多模态对齐。** DEIMv2/DETR 逐帧检测人框，Whisper-large 自动转录并切出带时间戳的发言，人工补 speaker ID 后，将每段文本、对应音频波形与同一参与者的视频框绑定。文本用 Sentence-T5-large 取 utterance 表示，音频用 HuBERT，视频 clip 用 V-JEPA；每个冻结表示接一个预测头，以 1-CCC 为损失。CCC 同时惩罚相关性不足、均值偏移和方差失配，最终另报 MAE/PCC 以区分绝对误差和线性趋势。

**零样本 LLM 条件。** GPT-5.4、Claude Sonnet 4.6 与 Gemini 2.5 Flash 读取带 speaker ID 的 transcript 后直接给分；Gemini 还测试追加 wav 的 T+A，以及追加每人 bounding box 视频的 T+A+V。Gemini 使用 API 默认 thinking，Claude 不开 extended thinking，GPT-5.4 reasoning effort 为 none，均在 2026 年 4 月各运行一次。这样能衡量即用型模型，却无法估计多次调用波动。

**监督划分与融合。** embedding 模型用预定义的 30 折 session 级 train/val/test；同一 session 中的所有参与者必须同折，测试折不参与早停或模型选择。随机基线从训练分数分布有放回采样，重复 100 个种子。基础 late fusion 对预测无参数平均；加权平均未见明显增益，因此保持简单。

**互补性筛选与情境分层。** 研究先以相关真值为 utility、相关 Gemini 文本预测为 redundancy 画图，再计算 HuBERT+V-JEPA 在控制 Gemini 后的 partial correlation 与增量 R²。最终给 Gemini 文本 1/2、HuBERT 和 V-JEPA 各 1/4。97 个个体再按时长中位数 40 秒分短/长，并按 session 全部参与人数分成 1/2/3 人；即使某人无可用语音，也计入群体规模。该分层把总体融合结果与自由退出、多人加入这两个现场因素联系起来。报告连接与协调两个子量表时也单独计算 CCC，例如 Gemini 文本的 Connection/Coordination 为 0.614/0.473，帮助判断总体 rapport 增益来自关系温暖还是互动协调。

![Figure 1. Robot-view examples from the real-world HRI corpus: (a) a single-participant interaction, (b) a two-participant interaction, and (c) a three-participant interaction.Three robot-view example frames from the real-world HRI corpus: (a) a single-participant interaction, (b) a two-participant interaction, and (c) a three-participant interaction.](https://arxiv.org/html/2608.18401v1/figures/robot_view_examples_top.png)

![Figure 4. CCC trends across one-, two-, and three-participant interactions for each prediction model.Line plot showing CCC values for each prediction model across one-, two-, and three-person interactions. Gemini 2.5 Flash (T) shows relatively high CCC values across the analyzed group-size conditions, whereas V-JEPA (V) declines as the number of participants increases.](https://arxiv.org/html/2608.18401v1/figures/party_size_ccc_trends.png)

### 💡 核心创新点

1. 建立真实零售场景中的第三方 rapport 多模态基准，包含自由退出、12—227 秒不等的短长会话与自然多人加入，而不是把参与人数和对话长度预先固定。

2. 标签流程同时检查量表内部一致性与评审间一致性：个人 CCR-8 的 α=0.95、ICC(2,3)=0.85，使后续误差能相对一个稳定的第三方观察目标解释。

3. 系统比较零样本 LLM、冻结文本/音频/视觉表示与预测级融合，而不是只在单一建模范式内选模型；文本 LLM 强、HuBERT 单流较强、V-JEPA 在多人中退化，各自对应不同信息与数据需求。

4. 用 partial correlation=0.359 和增量 R²=0.072 量化 HuBERT+V-JEPA 相对 Gemini 文本预测的互补信息，再据此选择融合组件，而不是穷举后只报告最高分。

5. 最终融合只做无参数平均，Gemini/HuBERT/V-JEPA 权重为 1/2、1/4、1/4；它在 97 个样本的小数据条件下避免另训复杂融合器，同时把每个分支保留为可独立替换的模块。

6. 按会话时长和参与人数拆解 CCC，显示真实 HRI 模型的失效条件会被总体平均掩盖：Gemini 对长短会话稳定，而 V-JEPA 随参与者从 1 人增到 3 人出现明显下降。

7. 把参与者级对齐与 session 级防泄漏同时写进评价：人工 speaker ID 保证音频、文字、画面属于同一个人，30 折划分又保证同场多人的信息不会跨训练和测试，为真实多人互动建立了比随机个体切分更严格的 baseline。

采用真实药店场景的动机是检验实验室 rapport 指标能否外部迁移；prediction-level fusion 易于替换组件，但可能忽略跨模态时间对齐。作者还按互动时长和群体大小分层分析，避免只报总体平均。

Gemini 2.5 Flash 单模型表现强，文本 Gemini 与 HuBERT/V-JEPA 融合总体最好；论文还发现效果随互动时长和群体规模变化。摘要未提供完整相关系数、误差和置信区间。

处理链包括会话切分、文本/音频/视觉编码、单模型预测与融合；相较受控实验室，真实场景允许用户退出、多人同时参与，因此模型需要处理时长和群体规模条件。融合层不强制把所有模态拼成一个表示，而是先保留各模型决策，再比较互补信息。

### 📊 实验结果

| 模型 | 模态 | MAE ↓ | PCC ↑ | CCC ↑ |
|---|---|---:|---:|---:|
| Gemini 2.5 Flash | T | 0.634 | 0.665 | 0.580 |
| Gemini 2.5 Flash | T+A+V | 0.549 | 0.625 | 0.618 |
| ST5 | T | 0.633 | 0.327 | 0.281 |
| HuBERT | A | 0.616 | 0.464 | 0.460 |
| V-JEPA | V | 0.666 | 0.331 | 0.310 |
| Gemini(T)+HuBERT+V-JEPA | T+A+V | **0.471** | **0.717** | **0.656** |

数据标签质量较好：个体 rapport 均值 3.72±0.80，三标注者 ICC(2,3)=0.85，整体 Cronbach’s α=0.95。62 个 session 中 28 个单人、34 个多人；平均 session 时长 54.23±42.42 秒、平均 11.85±9.08 句。

时长分层中，Gemini 文本短/长会话 CCC 为 0.563/0.551，ST5 为 0.168/0.411。人数分层中，Gemini 在 3 人条件达到 0.721；V-JEPA 从 1 人 0.503、2 人 0.286 降到 3 人 0.043，但 3 人样本仅 13 个，结论应视为探索性。

数据为日本药店 62 sessions，模型含 Gemini、HuBERT、V-JEPA，输出为第三方 rapport 分数；标注协议、音频采样、时间对齐、融合权重和训练/验证划分未完整说明。

### 🔬 细节详述

**标签不是用户自评。** CCR-8 由第三方观看视频后评分，测量可观察到的连接与协调。个人分数范围 1.38—4.88；高分常伴随主动提问和持续笑声，低分包括忽视提示或机器人说话中途离开。

**为什么文本 LLM 胜过 ST5。** 平均互动只有约 54 秒，冻结文本 embedding 在少量训练样本上很难学到复杂语用线索；零样本 LLM 可利用既有对话知识。音频和视觉虽然单独较弱，却与语言预测不完全重复，因此融合后继续增益。

**比较并非完全同条件。** embedding 模型通过 30 折 session 级训练，LLM 则调用 2026 年 4 月的公开 API、每条件只运行一次；输入格式、推理成本和随机性均不同。这里的数表是实用 baseline，不是模型家族优劣的严格因果比较。

**多人场景的难点。** 视觉框、说话人 ID 与音频片段要绑定到具体参与者。当前 bounding box 自动检测、speaker ID 人工修正，说明核心估计还依赖人工预处理；完全自动化后可能出现身份串线。

### ⚖️ 评分理由

* 创新性 (1.1/2)：真实药店、多人数与自由退出场景有价值，建模主要采用成熟 backbone 和简单后融合。

* 技术严谨性 (1.1/1.5)：session 级防泄漏、30 折与标签可靠性较扎实；LLM/embedding 不同评测条件限制公平比较。

* 实验充分性 (1.2/1.5)：多模型、多模态、互补性和条件分层较全面，97 个个体仍是小样本。

* 清晰度 (0.9/1)：数据过滤、标签、模态和融合权重都可追踪，结论没有把第三方 rapport 等同于内心体验。

* 影响力 (0.9/1.5)：对真实公共空间 HRI 评价有启发，跨文化与自主机器人外推仍受限。

* 开源 (0.5/1.5)：模型依赖公开，但现场音视频受隐私限制，数据和完整代码开放方式不明确。

* 可复现性 (0.3/0.5)：划分和指标清楚；闭源 API 版本、人工说话人校正和现场数据不可得会阻碍复现。

* 工程/实践价值 (1.0/1.5)：简单预测融合取得最好总体结果，适合模块化系统；预处理自动化与成本仍未解决。

### 🚨 局限与问题

1. 数据只来自日本一家药店、单一机器人形态和日语文化环境，且机器人由真人远程操控；结果不能直接代表自主 HRI。

2. 仅 97 个个体样本，时长和人数分层后更小，尤其 3 人条件 n=13，趋势可能受少数 session 驱动。

3. 目标是第三方观察到的 rapport，不是参与者自评的亲近感、满意度或享受；算法不应被当作读取内心状态。

4. 低语音、极早退出和学龄前儿童被过滤，恰恰排除了真实部署中最难、最可能低 rapport 的互动。

5. LLM 与 embedding 模型的输入、训练和推理框架不同，且 API 只单次运行；不能据此宣称 LLM 天生优于监督模型。

6. 自动 person detection 后仍需人工标记说话人，尚未验证完全自动多人跟踪时的身份错误。

7. 模型版本、提示格式与 API 行为会变化，现场部署还需隐私告知、数据最小化和防止以 rapport 分数单独评价个人。

---

[← 返回 2026-08-20 语音/音乐/音频论文速递](/audio-paper-digest-blog/posts/2026-08-20/)
