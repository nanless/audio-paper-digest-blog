---
title: "AVE-Compass: Towards Holistic Evaluation for Audio-Video Editing Abilities"
date: 2026-07-29
draft: false
tags: [多模态模型, 音频理解, Transformer, 模型评估]
categories: [论文速递]
description: "多模态模型 | 8.3/10"
hiddenInHomeList: true
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_arxiv_id: "2607.24821"
---

# 📄 AVE-Compass: Towards Holistic Evaluation for Audio-Video Editing Abilities

标签：#多模态模型 #音频理解 #Transformer #模型评估

**8.3/10** | 创新 1.2/2 | 严谨 1.2/1.5 | 实验 1/1.5 | 清晰 0.9/1 | 影响 1/1.5 | 开源 1.5/1.5 | 复现 0.3/0.5 | 工程 1.2/1.5

🔥 **8.3/10** | 前25% | 文档类型：数据集与基准 | 评分置信度：高 | #多模态模型 | #Transformer | #音频理解 #模型评估 | [arxiv](https://arxiv.org/abs/2607.24821)


### 👥 作者与机构

- 第一作者：Yuqing Wen（National University of Singapore）
- 通讯作者：Jiaheng Liu（NJU-LINK Team, Nanjing University）
- 作者列表：Yuqing Wen（National University of Singapore）、Yukai Huang（Beijing University of Posts and Telecommunications）、Qianqian Xie（NJU-LINK Team, Nanjing University）、Jiangtao Wu（NJU-LINK Team, Nanjing University）、Yibin Lin（Xi’an Jiaotong University）、Yikai Gu（University of Illinois Urbana-Champaign）、Jialu Chen（Kling Team, Kuaishou Technology）、Yuanxing Zhang（Kling Team, Kuaishou Technology）、Jiaheng Liu（NJU-LINK Team, Nanjing University）

### 💡 毒舌点评

这项工作抓住了当前视觉编辑基准“静音”的盲区，用细粒度的 checklist 和跨模态同步评估，将音视频联合编辑推到了可诊断的层面，问题定义精准且工程落地扎实。但基准的规模偏小，仅 196 条指令，且 agent 方案本质上是对已有工具的 prompt-engineering 级编排，缺乏新的可学习组件，导致其长期价值在很大程度上受限于底层闭源工具的能力天花板。

### 📌 核心摘要

该论文针对现有视频编辑基准仅关注视觉变换、忽略音频‑视觉协同一致性的问题，提出了 AVE‑Compass 基准和 AVE‑Agent 编辑代理框架。AVE‑Compass 包含 145 个源视频、196 条音视频耦合编辑指令和 2688 条原子化 checklist 条目，评估维度解耦为编辑意图、指令遵循、内容保真与真实感，并辅以跨模态同步、视频/音频质量的自动化指标。在基准上评测 5 个代表性系统及 AVE‑Agent 发现，现有模型在跨模态指令执行和音频非目标内容保护上严重不足，而 AVE‑Agent 通过任务依赖图分解、自省循环与混合评估器显著提升了编辑执行与保真度。主要实验结果显示 AVE‑Agent 在 Editing Intent 上较最强基线 Wan2.7 提升 17.4（59.8 vs 42.4），在 Audio Instruction Following 上提升 9.1（69.4 vs 60.3）。该基准为音视频编辑的细粒度诊断提供了首个统一工具，agent 框架也为复杂多模态编辑提供了实用的流水线范式。主要局限在于基准规模有限、依赖闭源大模型评判与工具，以及 agent 本身未引入可学习的跨模态编辑模型。

下图说明了当前音视频编辑模型在相同指令下的典型漂移问题。

![Figure 1: Illustration of AVE-Compass. Given the same editing instruction, the four panels illustrate characteristic ways current audio-visual editing models drift, with IF (Instruction Following) and FP (Fidelity Preserving) marks indicati](https://arxiv.org/html/2607.24821v1/x1.png)

图中展示了模型在指令遵循（IF）和内容保真（FP）上的多种失败模式，例如未能理解跨模态编辑意图或破坏原始背景音乐。

### 🔗 开源详情

- 代码：https://github.com/NJU-LINK/AVE-Compass
- 模型权重：论文中未提及（AVE‑Agent 为模块化代理框架，依赖第三方模型，未发布独立权重）
- 数据集：AVE‑Compass 数据集，获取链接 https://huggingface.co/datasets/NJU-LINK/AVE-Compass
- Demo：论文中未提及
- 复现材料：代码仓库已开源，数据集在 Hugging Face 公开，论文附录（Appendix A–F）提供了完整的客观/主观评价公式、AVE‑Agent 各模块实现细节、提示词模板及实验设置，可用于复现。
- 论文中引用的开源项目：论文中提及/使用的第三方开源工具包括 MMAudio V2、SAM Audio (AudioSep)、SyncNet、Synchformer、DINOv2、AMT‑G、NISQA、VideoCLIP‑XL、AudioBox Aesthetics 等，但论文未提供这些工具的直接下载链接（仅在参考文献中给出原始论文引用，部分为开源项目）。

### 🏗️ 方法概述和架构

AVE‑Compass 是一套面向音视频联合编辑的基准构造与评估方法论，而 AVE‑Agent 是其配套的模块化编辑代理框架。整体分为两大板块：基准的策划与自动评估，以及基于规划‑执行‑评估循环的 agent 流水线。

下图提供了AVE-Compass基准的数据集统计概览。

![Figure 2: Dataset statistics of the AVE-Compass benchmark.](https://arxiv.org/html/2607.24821v1/x2.png)

图中包括编辑指令类型分布、视频内容统计以及难度分层信息，直观体现了基准的细粒度设计和全面覆盖。


### 基准构造
**源视频收集**：从 OmniVideoBench、UltraVideo、网络视频和 AIGC 生成视频中收集候选，剔除音频无效或声画不对齐的样本，最终保留 145 个涵盖不同主体、场景、镜头和视觉风格的视频。
**编辑指令生成**：按照 28 种细粒度操作类型（跨关节音频‑视觉、语音、纯视频、纯音频四支，覆盖物体、场景、动作、声学环境、语音等）由 LLM 生成候选指令，经批评模型过滤与人审复核，最终确定 196 条指令。每条指令还附有难度分层标签（如目标定位难度、音频源复杂度、跨模态关联度）。
**Checklist 生成**：每条指令被进一步转化为原子化的二进制 checklist 条目，合计 2688 个。采用“绝对肯定”范式，即所有问题均以成功状态的 “Yes” 作为期望答案，避免了否定句带来的歧义。生成器为视频‑only、音频‑only、关节、语音四种场景分别设计 prompt，强制要求指令遵循、内容保真和编辑响应三类问题独立出现且不冗余，并由人工进行去重和修正。

### 评估协议
评估分为 MLLM‑as‑Judge 和自动化指标两部分。
**MLLM 评判**：通过拆分调用实现：音频题仅听音频，视频题仅看视频，同步/耦合问题看完整音视频流，以抑制跨模态偏差。每一题的回答被二值化为 Yes/No，维度级得分取该维度下所有题的 Yes 率。编辑意图被定义为指令遵循与内容保真的逐例乘积，以防止模型以拒绝编辑换取高保真分数。真实感由独立的 MLLM 量规单独评分，覆盖物体完整性、物理交互、视觉自然性、音频信号纯度和材料‑空间声学匹配五个子维度。
**自动化指标**：包括 Lip Sync 和 AV Sync（基于 SyncNet/Synchformer 估计声画偏移）、视频美学分、主体一致性、运动平滑度、音频美学分和语音质量（NISQA），并按编辑类别选择性激活，避免非目标模态被错误惩罚。

### AVE‑Agent 框架
**Planner agent**：首先用 Gemini 2.5 Flash 生成源视频的结构化描述（视觉、音频、镜头分割），然后将指令分解为带依赖关系的子任务 DAG，每个子任务指定动作类型、镜头范围、依赖项，并匹配对应的音频清单与评估准则。PlanValidator 检查音频‑视觉一致性，触发自动重规划。
**Executor agent**：按依赖顺序执行子任务，通过 ToolRegistry 路由到视频、音频或语音分支：视频侧使用 Wan2.7 或 Seedance 2.0 的图生视频 API；音频侧先做源分离（SAM Audio/AudioSep），再用 MMAudio V2 进行视觉条件生成；语音侧则结合 SAM 分离、Qwen3 Voice Clone/Design 进行语音 TTS 和 Sync Lipsync 2 对齐。每个子任务执行后，由分离/生成评估器打分，并触发最高 3 次的自我完善循环：评估器反馈缺失或多余声源，improver 据此微调提示词，仅调整相关词汇并保持原提示 70% 以上不变。
**Mixed evaluator agent**：在完整合成后对全局指令遵循、保真度和质量打分，输出最小化修正信号：仅音量问题通过 ffmpeg 重新混音；局部音频问题触发相关子任务重新生成；结构性矛盾则回退给 Planner 进行全面重规划。整个循环始终保留历史最高分结果，避免不稳定尝试覆盖更优版本。

### 💡 核心创新点

1. **首个全维度音视频联合编辑基准**：首次将纯视觉、纯音频、关节音频‑视觉和语音编辑统一到同一评估框架下，覆盖 28 种操作类型，超越已有基准仅关注无声视觉或孤立音频对象的局限。
2. **细粒度解耦评估体系**：将编辑质量拆解为编辑意图、指令遵循、内容保真和真实感四个正交维度，并用原子化 checklist 与独立 MLLM 量规实现诊断级评测，避免简单全局分数掩盖具体失败模式。
3. **规划‑执行‑反思代理框架**：提出 AVE‑Agent，利用大模型将自由格式指令分解为带依赖的子任务 DAG，并引入子任务级自我反思与全局混合评估，在无新增可训练模型的情况下显著提升编辑完成度和保真度。
4. **跨模态因果性显式建模**：在规划阶段强制梳理视觉编辑对音频的隐性需求（如动作改变必须更新声效），通过音频‑视觉一致性校验与负向约束自动推导，将隐式耦合关系转为可执行的操作链。

下图详细描绘了AVE-Agent的模块化编辑代理框架架构。

![Figure 3: Overview of AVE-Agent. Given a source video with audio and an edit instruction, the planner agent first preprocesses the input audio-visual clip and analyzes it through structured captioning. Conditioned on this analysis, it decom](https://arxiv.org/html/2607.24821v1/x3.png)

图中展示了Planner Agent进行任务分解、Executor Agent执行工具调用以及Evaluator Agent进行评估和反思的完整循环。

### 📊 实验结果

主要结果基于 AVE‑Compass 对 6 个系统（包括 AVE‑Agent）的评测。MLLM‑as‑Judge 指标显示 AVE‑Agent 在 Editing Intent 上达 59.8，较大幅度领先 Wan2.7（42.4）和 HappyHorse（41.3）。下表列出完整对比：

| 模型 | Editing Intent (Overall/Video/Audio) | Instruction Following (Overall/Video/Audio) | Fidelity Preserving (Overall/Video/Audio) | Realism (Overall/Video/Audio) |
|------|--------------------------------------|---------------------------------------------|------------------------------------------|-------------------------------|
| AVE‑Agent (Wan) | 59.8 / 66.7 / 50.2 | 77.3 / 84.8 / 69.4 | 77.6 / 80.1 / 74.8 | 62.1 / 45.3 / 78.9 |
| Wan2.7 | 42.4 / 60.1 / 24.8 | 69.3 / 78.3 / 60.3 | 64.2 / 78.5 / 48.1 | 60.4 / 43.5 / 77.4 |
| HappyHorse | 41.3 / 56.7 / 18.8 | 66.9 / 75.5 / 54.5 | 63.9 / 74.5 / 53.3 | 63.0 / 49.9 / 76.0 |
| Gemini‑Omni | 38.0 / 56.1 / 10.0 | 44.9 / 74.0 / 10.8 | 84.9 / 76.8 / 96.1 | 66.9 / 49.2 / 84.5 |
| Seedance | 26.6 / 36.1 / 13.5 | 37.4 / 50.5 / 24.4 | 81.7 / 83.0 / 80.4 | 69.2 / 54.0 / 84.4 |
| LTX2 | 15.2 / 10.7 / 26.4 | 70.1 / 72.8 / 66.2 | 30.6 / 24.5 / 42.3 | 64.1 / 42.0 / 86.2 |

自动化指标：

| 模型 | Lip Sync | AV Sync | Video Aesthetic | Subject Consistency | Motion Smoothness | Audio Aesthetic | Speech Quality |
|------|----------|---------|-----------------|---------------------|-------------------|-----------------|----------------|
| AVE‑Agent (Wan) | 0.622 | 0.766 | 0.452 | 0.972 | 0.987 | 0.614 | 0.368 |
| Wan2.7 | 0.531 | 0.693 | 0.451 | 0.969 | 0.986 | 0.609 | 0.428 |
| HappyHorse | 0.620 | 0.695 | 0.439 | 0.975 | 0.989 | 0.650 | 0.726 |
| Gemini‑Omni | – | 0.701 | 0.434 | 0.974 | 0.988 | 0.627 | – |
| Seedance | 0.431 | 0.718 | 0.430 | 0.971 | 0.987 | 0.629 | 0.388 |
| LTX2 | 0.618 | 0.758 | 0.468 | 0.968 | 0.986 | 0.641 | 0.522 |

进一步分析表明，去掉 Planner 的 prompt 增强导致 Editing Intent 下降 7.76，移除自我反思循环则下降 8.75。通过对比响应率和门控保真度（仅统计实际发生了编辑的样本），AVE‑Agent 的保真度和真实感下降最少，说明其成绩并非来自“编辑不响应”。在不同音源复杂度、目标定位难度和跨模态关联度下的分层分析中，AVE‑Agent 也展现了比基线更强的鲁棒性。此外，自动化指标与主观评估之间的 Spearman 相关性较弱，验证了多维度评估体系的有效性，避免了单一指标带来的信息冗余。

下图分析了AVE-Agent在不同难度条件下的鲁棒性表现。

![Figure 4: Robustness under difficulty. Left: Editing Intent across source-video duration. Right: object-localization hardness, audio-source complexity, and cross-modal linkage degree evaluated with modality-matched metrics. Hatched audio-so](https://arxiv.org/html/2607.24821v1/x4.png)

图中显示，随着源视频时长增加，编辑意图略有下降；在物体定位难度、音频复杂度和跨模态关联度分层评估中，AVE-Agent均优于基线模型。

### 🔬 细节详述

- **训练数据**：未涉及模型训练，全部编辑基于预训练 API 或工具，无训练集。
- **损失函数**：无，不涉及训练。
- **训练策略**：不适用。
- **关键超参数**：Agent 内部设定了同步容忍窗口（\(τ=2.0s\)）、Synchformer 阈值 2.0、MMAudio 引导系数 7.0/4.5、自我反思最大重试 3 次、重规划最大 2 次、混合评估中 ffmpeg 重混音最多 2 次等，详见附录 B。
- **训练硬件**：未提供，所有评测以 API 调用为主。
- **推理细节**：基准评估中 MLLM 评判使用 Gemini 3.1 Pro 等，自动化指标涉及多个预训练模型推理，无特殊解码策略。
- **正则化与稳定训练技巧**：无训练，不适用。

### ⚖️ 评分理由

*   创新性 (1.2/2)：首次构建全维度音视频联合编辑基准AVE-Compass，覆盖28种操作类型，设计原子化checklist与解耦评估体系，将编辑意图量化为指令遵循与保真度的乘积，显式建模跨模态因果关系。

*   技术严谨性 (1.2/1.5)：评估协议采用模态拆分调用和绝对肯定范式，有效抑制跨模态偏差与否定歧义；编辑意图乘积公式防止以拒编换取高分；自动化指标与主观评估正交，整体设计严谨无逻辑漏洞。

*   实验充分性 (1.0/1.5)：包含6个代表性系统的全面对比、分层难度分析和错误分类，但基准仅196条指令，规模有限；评估仅依赖单一MLLM裁判，未进行跨裁判模型稳健性验证，且源视频缺乏真实复杂声学环境，场景覆盖有待扩展。

*   清晰度 (0.9/1)：论文结构清晰，方法描述、评估公式和附录中的提示模板详尽，图表和实验说明易懂，仅极少数细节可进一步澄清。

*   影响力 (1.0/1.5)：为音视频编辑领域提供首个细粒度诊断基准，对音频社区具有直接价值，能推动跨模态编辑研究；基准规模及评估工具依赖性略限制其即用影响力。

*   开源 (1.5/1.5)：AVE-Compass数据集在Hugging Face完全公开，基准代码在GitHub开源，附带完整文档和附录，核心产物开放且文档充分。

*   可复现性 (0.3/0.5)：虽然评价公式和提示模板全面，且无训练过程，但评测依赖Gemini等第三方API且未固化模型版本，长期复现步骤存在少量关键缺失。

*   工程/实践价值 (1.2/1.5)：AVE-Agent提供模块化规划-执行-评估流水线，显著提升编辑意图和跨模态同步，工程落地扎实；但其编排式设计未引入可学习组件，技术天花板受限于底层工具。

### 🚨 局限与问题

**论文明确承认的局限**：基准规模受 API 成本限制；AVE‑Agent 依赖第三方工具行为可能随时间变化影响长期复现性；同时也承认当前音频编辑质量和跨模态同步仍有提升空间。

**审稿人发现的潜在问题**：
1) 整个基准构建和评估中大量使用闭源 MLLM（Gemini），虽然通过人工一致性进行了验证，但未分析不同 MLLM 评判的变异性，若 Gemini 存在某种模态或文化偏差，评估结果可能系统性偏向不同模型类型。
2) 自动化指标中 AV Sync 仅使用 Synchformer 一种工具，且容忍窗口 2.0s 对于精细口型编辑过于宽松。
3) 基准的视频素材多数来自已有数据集和 AIGC，可能缺乏真实生活场景中的复杂声学环境（如强混响、重叠音），任务难度覆盖仍有扩展空间。
4) AVE‑Agent 的规划器并未显式学习编辑策略，当面对超出底层工具能力的指令时可能反复重规划直至超限，失败模式未被系统分析。
5) 论文在比较 AVE-Agent 与其他模型时，并未严格隔离底层视觉生成模型版本带来的影响，这在一定程度上混淆了 agent 框架的能力与基座模型本身的生成质量。

---

[← 返回 2026-07-29 语音/音乐/音频论文速递](/audio-paper-digest-blog/posts/2026-07-29/)
