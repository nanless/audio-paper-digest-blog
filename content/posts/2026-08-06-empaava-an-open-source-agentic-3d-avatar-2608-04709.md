---
title: "EmpaAva: An Open-source Agentic 3D-Avatar Empathetic Live Chatbot"
date: 2026-08-06
draft: false
tags: [音视频交互, 大语言模型, 语音合成, 语音情感识别, 多模态模型]
categories: [论文速递]
description: "音视频交互 | 7.1/10"
hiddenInHomeList: true
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_arxiv_id: "2608.04709"
---

# 📄 EmpaAva: An Open-source Agentic 3D-Avatar Empathetic Live Chatbot

标签：#音视频交互 #大语言模型 #语音合成 #语音情感识别 #多模态模型

**7.1/10** | 创新 1.1/2 | 严谨 0.9/1.5 | 实验 0.7/1.5 | 清晰 0.8/1 | 影响 1/1.5 | 开源 1.2/1.5 | 复现 0.3/0.5 | 工程 1.1/1.5

✅ **7.1/10** | 前50% | 文档类型：系统技术报告 | 评分置信度：中 | #音视频交互 | #大语言模型 | #语音合成 #语音情感识别 | [arxiv](https://arxiv.org/abs/2608.04709)


### 👥 作者与机构

- 第一作者：Jie Yang（新加坡国立大学，National University of Singapore）
- 通讯作者：Hao Fei（牛津大学，University of Oxford；论文中标注为 Corresponding author）
- 作者列表：Jie Yang（新加坡国立大学）、Wenhao Xu（新加坡国立大学）、Shuhui Lin（清华大学，Tsinghua University）、Hao Fei（牛津大学，University of Oxford）

### 💡 毒舌点评

把 ASR/SER/TTS/3DGS 这些开源模块用 LLM 编排成一个可运行的 empathetic avatar 系统，工程完成度和开源诚意值得肯定，尤其在“Response Planning”将情感意图显式传给语音和渲染模块这一点上设计清晰。但论文把“Tri-Agent”和“Response Planning”讲得很重，实际更像分层提示词与 JSON 合约，实验也没有对这两项做任何组件消融；45.8 秒的平均端到端延迟更让它离“live chatbot”还有实质性距离。整体是一个有价值的工程基线和测试平台，但不是论文所暗示的智能突破。

### 📌 核心摘要

EmpaAva 解决的是将文本级情感回复生成（ERG）扩展到“实时面对面的 3D 数字人对话”的问题：用户通过类似视频通话的界面说话，系统从语音和可选视觉中感知情绪，再以情感语音、唇形同步面部动作和 3D 高斯渲染的虚拟人做出回应。方法核心是一个由 LLM 协调的 Tri-Agent 架构，包含 PerceptionAgent、ResponseAgent 和 RenderAgent，并在 LLM 与渲染后端之间加入 Response Planning 层，让回复文本、语音音色、情绪表达和渲染背景服从同一份结构化情感意图。与已有 2D talking-face 或仅输出文本/语音的多模态 ERG 系统相比，主要新意在于把感知、规划和具身渲染整合成闭环，并发布可运行、可检查的开源系统。自动评测方面，在 EmpatheticDialogues 测试集上 Acc 10.26、Dist-1 4.01、Dist-2 30.54，均高于所列基线；在 AvaMERG 端到端评测上 Dist-2 45.81、Emo.Acc 53.85、Cause.M 74.81，也优于对比系统。人类评测中 10 名参与者对 5 轮用户输入进行 4 系统匿名比较，EmpaAva 在 Empathy 4.42、Relevance 4.65、Specificity 4.35 上最高，50 票偏好中获得 18 票。实际意义是提供了一个可复现、可扩展的具身共情对话测试平台；主要局限是平均单轮延迟 45.8 秒，尚未达到真正实时，且对人类评测、模块消融和跨模态一致性指标的统计支撑较弱。

下图是 EmpaAva 的实际交互界面截图。

![Figure 1: EmpaAva. In a video-call-like booth, the user speaks to a 3D digital human that senses their emotion and replies face to face, with emotional speech, lip-synced facial motion, and photorealistic 3D-avatar rendering.](https://arxiv.org/html/2608.04709v1/illus/booth_empaava.png)

界面采用左右分栏的视频通话布局：左侧为用户端，右侧显示 3D 数字人头像及其共情回复文本，底部提供麦克风、摄像头和渲染控制选项，体现了系统“实时面对面”的产品形态。


**表 1：系统定位对比（原文 Table 1）**
| 系统 | OS | LLM | MM | 3D | Emp. | Live |
|---|---|---|---|---|---|---|
| Text ERG (Lin et al., 2019) | ✓ | × | × | × | ✓ | × |
| 2D Talking-Face (Zhang et al., 2022) | ✓ | × | × | × | × | × |
| 3D Avatar (Qian et al., 2023) | ✓ | × | × | ✓ | × | × |
| AvaMERG (Zhang et al., 2025) | × | ✓ | ✓ | × | ✓ | × |
| EmpathyEar (Fei et al., 2024) | ✓ | ✓ | ✓ | × | ✓ | ✓ |
| EmpaAva (Ours) | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |

**表 2：EmpatheticDialogues 文本级自动指标（原文 Table 2）**
| 模型 | Acc | Dist-1 | Dist-2 |
|---|---|---|---|
| MoEL | 3.88 | 0.67 | 2.81 |
| MIME | 3.52 | 0.34 | 0.96 |
| EmpDG | 3.81 | 1.19 | 4.65 |
| CASE | 3.03 | 0.49 | 1.59 |
| ESCM | 1.58 | 0.98 | 2.38 |
| Alpaca | 9.38 | 3.35 | 28.05 |
| Flan-T5 | 8.51 | 2.92 | 27.05 |
| ChatGLM | 0.00 | 0.02 | 0.00 |
| Qwen | 8.73 | 3.11 | 26.10 |
| GPT-style LLM | 6.89 | 3.30 | 24.58 |
| EmpathyEar | 0.00 | 0.04 | 0.04 |
| AvaMERG | 8.64 | 3.30 | 28.09 |
| EmpaAva (Ours) | 10.26 | 4.01 | 30.54 |

**表 3：AvaMERG 端到端完整自动数值（原文 Table 6）**
| 方法 | Dist-2↑ | Emo.Acc↑ | Cause.M↑ |
|---|---|---|---|
| BlenderBot | 11.35 | 21.75 | 68.01 |
| EmpathyEar | 38.75 | 39.33 | 74.51 |
| AvaMERG | 37.43 | 30.97 | 69.13 |
| EmpaAva (Ours) | 45.81 | 53.85 | 74.81 |

**表 4：人工评测（10 人 × 5 轮，50 次偏好投票；原文 Table 3）**
| 方法 | Empathy | Relevance | Specificity | Preference |
|---|---|---|---|---|
| BlenderBot | 4.36 | 4.53 | 4.17 | 7 |
| EmpathyEar | 4.36 | 4.47 | 4.25 | 12 |
| AvaMERG | 4.18 | 4.43 | 4.07 | 13 |
| EmpaAva (Ours) | 4.42 | 4.65 | 4.35 | 18 |

**表 5：Avatar 表情/唇形/音视频一致性自动指标（原文 Table 4）**
| 方法 | LSE-C↑ | LSE-D↓ | A-V Cos↑ |
|---|---|---|---|
| TTS-only | 0.416 | 16.846 | 0.274 |
| Wav2Lip | 6.452 | 7.940 | 0.339 |
| SadTalker | 3.727 | 11.186 | 0.226 |
| DEEPTalk | 1.432 | 13.491 | 0.338 |
| 3DGS | 0.826 | 16.526 | 0.294 |
| EmpaAva (Ours) | 7.649 | 8.242 | 0.346 |

### 🔗 开源详情

- 代码：论文未给出 GitHub/HuggingFace/ModelScope 等传统代码仓库的直接链接，但正文与摘要提供了官方项目地址 https://empaava.top，并声明“We open-source EmpaAva”；该网站包含在线 demo（https://empaava.top/demo）。是否包含完整代码、模型资源、安装脚本和复现文档，论文中未给出详细目录，需要实际访问确认。
- 模型：未发布新模型权重。系统使用 Whisper-small、emotion2vec/FunASR、OpenAI-compatible LLM、EmotiVoice、DEEPTalk、FLAME、3DGS/GaussianAvatars 等已有开源模块，论文未提供微调后的模型文件或适配层权重。
- 数据：未发布新数据集。评测使用 EmpatheticDialogues 和 AvaMERG 两个已有数据集。

### 🏗️ 方法概述和架构

EmpaAva 是一个多阶段、模块化的实时对话系统，而不是端到端训练模型。其完整流程为：浏览器端采集麦克风/可选摄像头输入 → PerceptionAgent 把音频和视觉信号转成结构化文本状态 → ResponseAgent 由 LLM 生成“回复计划”JSON → RenderAgent 按该计划合成情感语音、预测 FLAME 面部参数并通过 3DGS 渲染出虚拟人视频。系统通过共享的人类可读状态而非不透明张量连接各模块，因此每个代理可独立替换和测试。

下图进一步说明了用户与 EmpaAva 交互的完整流程。

![Figure 2: Workflow of the EmpaAva system.](https://arxiv.org/html/2608.04709v1/x1.png)

从进入系统、设置昵称与头像、开启视频通话、提供音视频输入，到接收 3D 头像回复并导出历史记录，图中以步骤化方式呈现了用户侧的使用闭环。


下图给出了 EmpaAva 的 Tri-Agent 整体架构，展示从用户输入到具身回复的完整链路。

![Figure 3: The Tri-Agent architecture of EmpaAva. PerceptionAgent understands the user, ResponseAgent plans an empathetic reply, and RenderAgent turns the plan into an embodied 3D-avatar video.](https://arxiv.org/html/2608.04709v1/x2.png)

图中 PerceptionAgent 负责将音频/视频转换为结构化状态，ResponseAgent 生成包含情感意图的回复计划 JSON，RenderAgent 再据此合成语音、面部动作并渲染 3D 头像；三个 Agent 通过共享状态完成跨模块协调。


**PerceptionAgent** 承担感知子任务。输入是用户原始音频、可选视频帧、对话历史和元数据；内部先做格式转换、重采样和去噪，再用 Whisper-small 做 ASR，用 emotion2vec/FunASR 做语音情感识别。如果摄像头开启，还会采样少量帧作为视觉上下文；摄像头关闭时系统仍可工作。最终输出一个“对话 schema”，包含转写文本、SER 情感标签、视觉线索、对话历史和输入元数据。

**ResponseAgent** 是决策中心，主要由 OpenAI-compatible LLM 实现，在不可用时回退到 AvaMERG。它接收 PerceptionAgent 的融合状态，先推理用户当前情绪、可能原因和对话趋势，然后不输出裸文本，而是输出结构化的 Reply Plan JSON。该计划包含 reply_text、emotion&tone、selected_avatar_id、selected_tts_speaker_id、background、evidence 等字段，相当于一个“表达契约”：后续 TTS、表情预测、3D 渲染都服从同一情感意图。提示词中还内置了共情策略：先承认感受，再指认原因，再验证情绪，最后给低负担建议。附录 C 给出了回复计划的完整 JSON 示例。

**RenderAgent** 负责执行计划。先用 EmotiVoice 按计划中的 tone 合成情感语音；再用 DEEPTalk 从语音预测帧级 FLAME 参数，覆盖下巴、唇形、头部姿态和面部表情；然后把表情/动作迁移到由 3DGS/GaussianAvatars 构建的身份化高斯头部模型上，通过 FLAME 作为低维控制空间完成渲染。外观与运动被刻意分离，以保留个性化面貌。三个质量控制杠杆是：表情/下巴/唇形范围截断、时序平滑与偏移校正、3DGS 渲染与背景合成。

**Tri-Agent 闭环与状态传递** 的要点是：PerceptionAgent 的摘要和 ResponseAgent 的 Reply Plan 都被写进对话历史，下一轮可再次进入 PerceptionAgent，从而在跨轮层面追踪用户情绪变化。这种设计不同于“ASR→LLM→TTS”的扁平流水线，也不同于只做给定语音驱动的 talking-head 系统。关键设计动机是可控性、可检查性和模块化：用户可以在浏览器中重播回复、旋转头部检查 3D 一致性，也可以单独替换更强的 ASR 或渲染器。系统运行延迟约 45.8 秒，其中 3DGS 渲染/导出占 41.5 秒，说明当前版本的最主要瓶颈在渲染后端而非 LLM 规划。系统支持英文和中文，语言自动检测；输入检测基于 VAD 自动分段，无需按钮。

### 💡 核心创新点

1. **论文声称（to our knowledge）首个开源、可运行的 3D-avatar 共情聊天机器人系统**。此前系统中，文本 ERG 只输出文字，2D talking-face 缺乏 3D 一致性，3D avatar 工作通常只做“文本/语音到动画”而没有完整“感知—共情—具身表达”回路。EmpaAva 用 LLM 编排 Whisper、EmotiVoice、DEEPTalk、FLAME、3DGS 等开源模块，使完整闭环可复现。收益是提供了表 1 中唯一同时满足 OS/LLM/MM/3D/Emp./Live 的系统，并配有在线 demo。
2. **Tri-Agent 架构**。将长链路拆成感知、回复规划、具身渲染三个 agent，形成可跨轮追踪用户情绪的闭环。相比扁平 pipeline，其优势是状态可见、模块可替换、可单独升级；例如更好的 ASR 可直接替换而不影响渲染。论文还给出完整 prompt 模板和状态 schema，便于社区复现。
3. **Response Planning 层**。LLM 输出的不是裸文本，而是包含语音、表情、 avatar ID、背景和“证据”的 JSON 回复计划。这让 TTS 音色、面部表情和 3D 渲染执行同一情感意图，理论上可提升跨模态一致性；实验中以 A-V Cos 0.346 取得最佳情感一致性，并报告 MECS 22.0%、AV-Agree 40.0%。
4. **透明、可检查的工程发布**。系统公开了部署延迟分解、模块 backbone 列表、agent 提示词和评价协议。相比封闭商业 demo，这为后续研究提供了可直接运行的 testbed，也支持研究者替换强项组件。

### 📊 实验结果

论文按三个层次做评价：文本级 ERG、端到端 avatar 系统、以及单独的表情/唇形/音视频一致性。

下图展示了两个多轮对话的定性案例。

![Figure 5: Qualitative multi-turn case studies of EmpaAva.](https://arxiv.org/html/2608.04709v1/x3.png)

每个案例包含三轮用户输入、系统识别的情绪/原因/策略标签，以及对应生成的 3D 头像回复帧；可以看出系统在多轮中追踪情绪变化并调整共情策略。


### 文本级 ERG（EmpatheticDialogues 测试集）
在 5,255 条带情感标签和参考回复的完整测试集上，EmpaAva 在 Acc、Dist-1、Dist-2 三个指标上都高于所有基线（Acc 10.26、Dist-1 4.01、Dist-2 30.54）。优势最大的是与 AvaMERG 对比：Acc 从 8.64 提升到 10.26，Dist-2 从 28.09 提升到 30.54。但 ChatGLM 和 EmpathyEar 的 Acc 为 0.00，显示部分基线在此评测协议下可能未正确触发，使对比公平性存疑。

**表：EmpatheticDialogues 文本级自动指标（原文 Table 2）**

| 类别 | 模型 | Acc | Dist-1 | Dist-2 |
|---|---|---|---|---|
| Non-LLMs | MoEL | 3.88 | 0.67 | 2.81 |
| Non-LLMs | MIME | 3.52 | 0.34 | 0.96 |
| Non-LLMs | EmpDG | 3.81 | 1.19 | 4.65 |
| Non-LLMs | CASE | 3.03 | 0.49 | 1.59 |
| Non-LLMs | ESCM | 1.58 | 0.98 | 2.38 |
| LLMs | Alpaca | 9.38 | 3.35 | 28.05 |
| LLMs | Flan-T5 | 8.51 | 2.92 | 27.05 |
| LLMs | ChatGLM | 0.00 | 0.02 | 0.00 |
| LLMs | Qwen | 8.73 | 3.11 | 26.10 |
| LLMs | GPT-style LLM | 6.89 | 3.30 | 24.58 |
| Avatar-based | EmpathyEar | 0.00 | 0.04 | 0.04 |
| Avatar-based | AvaMERG | 8.64 | 3.30 | 28.09 |
| Avatar-based | EmpaAva (Ours) | 10.26 | 4.01 | 30.54 |

### 端到端 AvaMERG 自动评测
EmpaAva 得到 Dist-2 45.81、Emo.Acc 53.85、Cause.M 74.81。Dist-2 和 Emo.Acc 比最优基线 EmpathyEar 分别提高 7.06 和 14.52 个百分点；Cause.M 只比 EmpathyEar 高 0.30。值得注意的是 Cause.M 上 BlenderBot 也有 68.01，说明该指标对基线区分度有限。论文还在 100 个完整 avatar 输出上报告 MECS 22.0%、AV-Agree 40.0%，但没有给出更多样本量或统计检验。

**表：AvaMERG 端到端完整自动数值（原文 Table 6）**

| 方法 | Dist-2↑ | Emo.Acc↑ | Cause.M↑ |
|---|---|---|---|
| BlenderBot | 11.35 | 21.75 | 68.01 |
| EmpathyEar | 38.75 | 39.33 | 74.51 |
| AvaMERG | 37.43 | 30.97 | 69.13 |
| EmpaAva (Ours) | 45.81 | 53.85 | 74.81 |

### 人工评测
10 名参与者、5 轮用户输入、每轮 4 个匿名系统，共 50 次偏好。EmpaAva 在 Empathy、Relevance、Specificity 上分别 4.42、4.65、4.35，均为最高；偏好票 18/50，未形成压倒性优势。该评测规模过小，不足以支撑强结论；Empathy 只比 BlenderBot/EmpathyEar 高 0.06，可能来自随机噪声。

**表：人工评测（10 人 × 5 轮，50 次偏好投票；原文 Table 3）**

| 方法 | Empathy | Relevance | Specificity | Preference |
|---|---|---|---|---|
| BlenderBot | 4.36 | 4.53 | 4.17 | 7 |
| EmpathyEar | 4.36 | 4.47 | 4.25 | 12 |
| AvaMERG | 4.18 | 4.43 | 4.07 | 13 |
| EmpaAva (Ours) | 4.42 | 4.65 | 4.35 | 18 |

### Avatar 表情表达质量
固定回复文本、目标情感、语音、avatar 身份和视频格式后，在 2,308 个 AvaMERG 样本上，EmpaAva 取得 LSE-C 7.649、A-V Cos 0.346 最优；LSE-D 8.242 仅次于 Wav2Lip 的 7.940。这说明 EmpaAva 在唇音同步和情感一致性之间有更好的平衡，但 Wav2Lip 仍是纯粹的唇同步优化基线。

**表：Avatar 表情/唇形/音视频一致性自动指标（原文 Table 4）**

| 方法 | LSE-C↑ | LSE-D↓ | A-V Cos↑ |
|---|---|---|---|
| TTS-only | 0.416 | 16.846 | 0.274 |
| Wav2Lip | 6.452 | 7.940 | 0.339 |
| SadTalker | 3.727 | 11.186 | 0.226 |
| DEEPTalk | 1.432 | 13.491 | 0.338 |
| 3DGS | 0.826 | 16.526 | 0.294 |
| EmpaAva (Ours) | 7.649 | 8.242 | 0.346 |

### 多轮案例分析
论文给出两个定性案例，分别涉及学业压力/自我怀疑和人际冲突/情感否定。案例显示系统能识别用户情绪状态随轮次的变化，并避免把“疲惫”误判为“能力不足”。但这属于定性展示，没有量化打分，也没有与其他系统做同样的多轮对比。

### 关键结论
EmpaAva 在文本级 ERG、端到端 Avatar 自动评测和人工评测的多数指标上均优于对比系统，并在唇音同步与情感一致性之间取得了较好的平衡；但其人工评测规模较小、部分基线未正确触发、以及渲染延迟较高等问题仍限制结论的强度。

### 🔬 细节详述

- 训练数据：论文未提供专门训练过程。评测使用 EmpatheticDialogues（约 25K 文本对话，32 个 emotion labels）和 AvaMERG（过滤后 6,288 个多模态实例）。论文未说明模型在这些数据上的训练步数、数据划分细节或数据增强。
- 损失函数：未说明。系统本身不训练端到端模型，使用的开源子模块各有其训练目标，但论文未给出 EmotiVoice、DEEPTalk 或 3DGS 的损失配置。
- 训练策略：未说明。未给出学习率、warmup、batch size、优化器、训练轮数或调度策略，因为论文没有训练新模型，只进行推理编排。
- 关键超参数：未说明完整的模型大小/层数/隐藏维度。只列出各模块 backbone：ASR 为 Whisper-small；SER 为 emotion2vec/FunASR；Response 为 OpenAI-compatible LLM 或 AvaMERG 回退；TTS 为 EmotiVoice；audio-to-motion 为 DEEPTalk；控制空间为 FLAME；渲染为 3DGS/GaussianAvatars。LLM 温度、JSON schema 校验、表情 clamp 范围、时序平滑窗口等未给出明确数值。
- 训练硬件：未说明。端到端推理在 NVIDIA H200 上测试，平均 warm-start 单轮延迟 45.8s，其中感知 2.1s、规划 0.002s、TTS 0.27s、audio-to-motion 0.05s、3DGS 渲染/导出 41.5s。
- 推理细节：未说明解码策略、beam size、流式设置。只说明使用 OpenAI-compatible LLM，并有 AvaMERG fallback；对话支持英文和中文，语言自动检测。
- 正则化或稳定训练技巧：未说明。工程层面提到表情/下巴/唇形范围 clamp、时序平滑与 offset correction 用于稳定 lip-sync。
- 评价指标公式：Acc、Dist-n、Cause.M、MECS、人类评分均值、LSE-D、LSE-C 均在附录 E 中给出公式；MECS 定义为 text/audio/video 三者与标注情感一致的比例。

### ⚖️ 评分理由

*   创新性 (1.1/2)：基于[A_SUMMARY][A_METHOD]，系统将ASR/SER/情感TTS/FLAME/3DGS等模块编排为Tri-Agent闭环，是表1中唯一同时具备OS/LLM/MM/3D/Emp./Live的系统，并以Reply Plan JSON统一多模态表达意图，属有证据支持的系统级新能力；但核心算法多为既有开源模块，新意主要在编排层。

*   技术严谨性 (0.9/1.5)：Tri-Agent通过人类可读schema传递状态、模块可独立替换，状态流逻辑自洽[A_METHOD]；但响应提示词同时要求'Think step by step'与'只输出JSON'，解析失败行为未定义，且以'Live'描述45.8秒往返的系统，系统声明与实现约束存在矛盾[A_LIMITS]。

*   实验充分性 (0.7/1.5)：评测覆盖文本级ERG、端到端AvaMERG、人工评测和音视频一致性，多数指标领先[A_RESULTS]；但Tri-Agent与Response Planning无组件消融，人工评测仅10人×5轮且无统计检验，部分基线Acc=0提示触发协议不一致，MECS/AV-Agree仅基于100样本[A_LIMITS]。

*   清晰度 (0.8/1)：工作流图、Tri-Agent状态传递、Reply Plan示例、模块表和延迟分解组织清晰，附录给出prompt与指标公式[A_METHOD][A_SUMMARY]；但正文对MECS 22.0%与AV-Agree 40.0%为何差异较大缺乏解释，需读者自行推断[A_RESULTS][A_LIMITS]。

*   影响力 (1.0/1.5)：ASR、SER与情感TTS处于系统主干而非附属模态，系统为3D共情数字人对话提供了可运行测试平台，表1定位独特[A_SUMMARY][A_RESULTS]；但尚未呈现真实部署或外部用户采用证据，影响仍以研究验证为主。

*   开源 (1.2/1.5)：论文声明We open-source EmpaAva并提供官方项目站和在线demo[A_OPEN]，说明核心产物已开放；但未给出传统仓库直接链接，也未说明安装脚本/复现文档/模型资源是否齐全，按核心产物开放但文档不完整锚点给1.2。

*   可复现性 (0.3/0.5)：模块backbone、prompt模板、Reply Plan schema、H200延迟分解和评价公式均已披露，主干流程可追踪[A_METHOD][A_RESULTS]；但LLM温度/解析失败处理、DEEPTalk与EmotiVoice推理配置、数据划分细节和完整复现步骤仍缺失，关键配置不完整[A_LIMITS][A_OPEN]。

*   工程/实践价值 (1.1/1.5)：系统实现为浏览器端视频通话式界面，VAD自动分段、中英文检测、可选摄像头输入、模块可替换和延迟分解展现出完整工程闭环[A_METHOD][A_SUMMARY]；作为可运行系统，其工程装配和可检查性具有实践价值。

### 🚨 局限与问题

1. **论文明确承认的局限**：
   - 用户语音情感识别可能误读情绪，生成的安慰有时可能偏笼统。
   - 系统仍在追求更丰富的身体表达、更长期的情绪记忆和更低延迟，并把这些列为未来工作。
   - 作者强调系统是研究 demo，不是医疗或心理服务，提示词禁止临床/诊断建议；遇到严重 distress 时只鼓励寻求专业帮助。
   - 隐私方面仅用于识别与生成，不用于训练或第三方共享；但这属于声明而非系统审计结果。论文还声明不提供克隆用户或第三方人脸/声音的能力，但未给出技术验证。

2. **审稿人发现的潜在问题**：
   - “Live”名不副实：平均 45.8s 延迟中，3DGS 渲染占 41.5s，用户在视频通话式界面中几乎不可能获得自然对话节奏。系统更像“异步生成 avatar 回复”，而不是实时交互。
   - Response Planning 是论文核心创新之一，却没有组件消融：若删掉 JSON 计划、直接让 LLM 输出文本再由固定规则选 tone/voice，效果会否显著下降？论文未回答。
   - 人工评测规模太小且没有统计检验；Empathy 4.42 与 BlenderBot 4.36 只差 0.06，可能来自随机噪声。
   - 端到端自动评测中 Emo.Acc 53.85 对 EmpathyEar 39.33 的提升很显著，但论文只给出公式，未说明 emotion label 的标注来源、标签集合和人工复标一致性，读者难以判断是否只是标签空间设计带来的优势。
   - MECS（22.0%）和 AV-Agree（40.0%）只在 100 个完整输出上报告，未提供置信区间或人工复标信度，且正文没有对“两个指标为何一个低一个中等”作出解释。
   - “首个开源”声明以“to our knowledge”修饰，难以通过论文自身验证；需要检查历史系统发布记录。
   - 3DGS/FLAME 的渲染质量没有与真实用户感知结合做更细粒度评测，例如是否因表情 clamp 导致情感强度不足；也没有与真人视频或商用数字人做对比。
   - Prompt 中“Think step by step”与“Do not add any text outside the JSON”同时出现，LLM 是否真的只输出 JSON 未做校验失败率统计；若解析失败，系统行为未说明。

---

[← 返回 2026-08-06 语音/音乐/音频论文速递](/audio-paper-digest-blog/posts/2026-08-06/)
