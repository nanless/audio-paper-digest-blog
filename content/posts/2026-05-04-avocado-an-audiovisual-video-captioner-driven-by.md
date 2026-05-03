---
title: "AVoCaDO: An Audiovisual Video Captioner Driven by Temporal Orchestration"
date: 2026-05-04
draft: false
tags: [音视频, 强化学习, 预训练, 多模态模型]
categories: [iclr-2026]
description: "音视频 | 8.0/10"
hiddenInHomeList: true
---

# 📄 AVoCaDO: An Audiovisual Video Captioner Driven by Temporal Orchestration

#音视频 #强化学习 #预训练 #多模态模型

🔥 **8.0/10** | 前25% | #音视频 | #强化学习 | #预训练 #多模态模型

学术质量 6.0/7 | 选题价值 1.5/2 | 复现加成 0.5 | 置信度 高

### 👥 作者与机构

- 第一作者：Xinlong Chen (Kuaishou Technology, NLPR/CASIA, UCAS)
- 通讯作者：Qiang Liu (NLPR/CASIA, UCAS)
- 作者列表：Xinlong Chen (Kuaishou Technology, NLPR/CASIA, UCAS)、Yue Ding (NLPR/CASIA, UCAS)、Weihong Lin (Kuaishou Technology)、Jingyun Hua (Kuaishou Technology)、Linli Yao (Peking University)、Yang Shi (Peking University)、Bozhou Li (Peking University)、Qiang Liu (NLPR/CASIA, UCAS)、Yuanxing Zhang (Kuaishou Technology)、Pengfei Wan (Kuaishou Technology)、Liang Wang (NLPR/CASIA, UCAS)

### 💡 毒舌点评

这篇论文的实验设计堪称“教科书级”严谨，通过在四个互补的基准测试上进行详尽对比，并精心设计消融实验，无可辩驳地证明了其两阶段后训练流程的有效性。不过，其奖励模型的构建（如Checklist和Dialogue reward）严重依赖于GPT-4o/4.1等强大闭源模型，这虽然保证了当前研究的效果，却也为方法的可复现性和公平性打上了一个问号——毕竟不是所有人都有同等的API访问权限和预算。

### 🔗 开源详情

- 代码：论文中未提及代码仓库链接。
- 模型权重：论文中提到模型将会开源（“This model will be open-source”），但当前未提供具体下载地址。
- 数据集：构建的107K SFT数据集未提及是否公开。论文中引用的训练数据来源（TikTok-10M, Shot2Story等）本身是公开的。
- Demo：论文中未提及在线演示链接。提供了一个项目网页：`https://avocado-captioner.github.io/`。
- 复现材料：训练细节（SFT/GRPO超参数、奖励函数阈值、Prompt模板）在论文正文和附录中提供了较为详细的说明。
- 论文中引用的开源项目：主要依赖的开源模型为Qwen2.5-Omni。构建数据集和奖励函数时，使用了Gemini-2.5-Pro和GPT-4o/4.1等闭源模型的API。

### 📌 核心摘要

1.  要解决什么问题：现有的视频描述模型大多以视觉为中心，忽略了音频信息（如对话、背景音乐）对于全面理解视频内容的重要性。简单的音视频分别描述再拼接的方法无法建模两者之间细粒度的时间对齐和因果关联。
2.  方法核心是什么：提出了AVoCaDO，一个基于Qwen2.5-Omni-7B的音视频描述模型。核心是设计了一个两阶段后训练流程：1）AVoCaDO SFT：在精心构建的10.7万条高质量、时间对齐的音视频描述数据集上进行监督微调；2）AVoCaDO GRPO：采用组相对策略优化算法，并设计了三个互补的奖励函数（Checklist、Dialogue、Length）来进一步提升模型的时间连贯性、对话准确性和输出稳定性。
3.  与已有方法相比新在哪里：1）目标新：明确将“音视频时间对齐”作为描述生成的核心目标；2）流程新：设计了专门针对此目标的两阶段后训练流程，尤其是基于细粒度关键点分解和对话提取与比对的GRPO奖励设计，这比简单的通用奖励（如奖励模型打分）更具针对性和可解释性；3）数据新：构建了高质量、大规模的SFT数据集，并采用两阶段生成策略以确保音视频信息的完整性。
4.  主要实验结果如何：AVoCaDO在四个音视频描述基准测试上显著超越所有开源模型。在video-SALMONN-2测试集上，其总错误率（Total）为37.3，低于最强基线video-SALMONN-2（38.8）和大规模模型Qwen3-Omni-Captioner（47.6）。在UGC-VideoCap上，其平均分（Avg.）达到73.2，甚至超过了商业模型Gemini-2.5-Pro（72.6）和Gemini-2.5-Flash（73.0）。在QA类基准Daily-Omni和WorldSense上，其准确率分别为50.1和25.7，大幅领先其他开源模型。在纯视觉基准VDC Detailed和DREAM-1K上也取得了有竞争力的性能。
    | 模型 | 大小 | 模态 | video-SALMONN-2 测试集 (Total ↓) | UGC-VideoCap (Avg. ↑) | Daily-Omni (Acc ↑) | WorldSense (Acc ↑) |
    | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
    | Qwen2.5-Omni | 7B | A+V | 57.1 | 57.7 | 13.4 | 8.6 |
    | video-SALMONN-2* | 7B | A+V | 38.8 | 67.2 | 29.9 | 18.2 |
    | Qwen3-Omni-Captioner | 30B-A3B | A+V | 47.6 | 72.5 | 27.2 | 14.1 |
    | AVoCaDO (Ours) | 7B | A+V | 37.3 | 73.2 | 50.1 | 25.7 |
    注：`Total ↓`表示总错误率，`Avg. ↑`和`Acc ↑`表示分数/准确率，均为越高越好。
5.  实际意义是什么：该工作为需要深度理解视频内容（尤其是依赖于对话、音效等听觉线索的场景）的下游任务（如视频检索、问答、生成）提供了更强大的基础描述能力。其承诺的开源将推动相关领域的研究。
6.  主要局限性是什么：1）奖励模型（GPT-4o/4.1）本身可能引入偏见或错误，且计算成本高；2）论文未深入探讨生成描述中的幻觉（Hallucination）问题（尽管表1显示其幻觉率并非最低）；3）方法的通用性有待验证，目前主要在短、中时长视频上验证。

### 🏗️ 模型架构

AVoCaDO并非从头设计新架构，而是在强大的多模态基础模型Qwen2.5-Omni-7B之上进行针对性后训练。Qwen2.5-Omni本身通过交错的token序列对齐视频帧和音频信号。AVoCaDO的“架构”创新体现在其两阶段后训练流程的设计上。

完整流程：
1.  输入：原始视频（帧序列）和音频流。
2.  基础模型（Qwen2.5-Omni）：将视频和音频分别编码为token序列，送入LLM骨干网络。
3.  后训练阶段1：AVoCaDO SFT
    *   数据准备：如图2所示，采用两阶段方法构建107K高质量SFT数据。首先，用Gemini-2.5-Pro分别为视频帧和音频生成独立的详细描述（caption）。然后，再次使用Gemini-2.5-Pro，将两份独立描述融合成一份保持时间顺序的、连贯的音视频联合描述。最后通过质量过滤器（检查长度、重复和关键信息完整性）确保数据质量。
    *   训练：使用构建的SFT数据集对Qwen2.5-Omni进行监督微调。

![音视频联合描述数据构建流程](/audio-paper-digest-blog/images/iclr-2026/2026-05-04/vjEl1PuIDE-1.png)

4.  后训练阶段2：AVoCaDO GRPO
    *   优化目标：使用GRPO算法在2K样本子集上进一步优化模型，以提升时间连贯性、对话准确性和输出稳定性。
    *   核心：设计三个奖励函数（如图3所示）：
        *   Checklist-based Reward (RC)：将真实描述分解为五个维度的关键点（跨模态叙事逻辑、动态动作与交互、听觉元素、时空与摄影、静态实体描述）。奖励是模型生成描述覆盖这些关键点的比例。
        *   Dialogue-based Reward (RD)：提取描述中的对话（说话者+内容），通过编辑距离匹配生成对话与真实对话的内容，并验证说话者身份的一致性，最终计算F1分数。
        *   Length-regularized Reward (RL)：鼓励生成适中长度的描述（太短不完整，太长冗余），通过分段奖励/惩罚函数实现。

![GRPO阶段三个奖励函数示意](/audio-paper-digest-blog/images/iclr-2026/2026-05-04/vjEl1PuIDE-2.png)

*   模型整体数据流：视频+音频 → Qwen2.5-Omni编码 → LLM骨干 → 生成Token序列 → 解码为文本描述。整个过程中，视频和音频编码器被冻结，仅更新适配器和LLM骨干。

### 💡 核心创新点

1.  明确将“音视频时间对齐”作为描述生成的核心目标并系统验证：论文通过先导实验（图1）和四个专门设计的基准测试，有力证明了音视频时间对齐的描述对于下游QA任务的重要性，并以此作为整个工作的核心驱动。这超越了现有模型简单融合模态信息或独立生成描述的范式。
2.  构建大规模、高质量、时间对齐的SFT数据集：提出并实施了一套严谨的两阶段（独立描述-智能融合-质量过滤）数据构建流程，利用强大的闭源模型生成监督信号，解决了高质量音视频对齐描述数据稀缺的难题。
3.  设计针对音视频描述特性的GRPO奖励函数：创新性地设计了基于内容分解的Checklist奖励（确保完整性）和基于对话提取与比对的Dialogue奖励（确保准确性），这两个奖励函数比通用的基于相似度或人类偏好的奖励更具体、更可解释，并且能有效引导模型优化关键能力。

### 🔬 细节详述

- 训练数据：SFT数据来自6个视频数据集：TikTok-10M (24K)、ShortVideo (18K)、Shot2Story (20K)、FineVideo (29K)、YouTube-Commons (11K)、CinePile (5K)，共计约107K视频。数据构建过程如上文所述。
- 损失函数：未明确说明。推测在SFT阶段使用标准的下一个token预测损失；在GRPO阶段使用论文公式(2)所示的GRPO目标函数，其损失由策略比率、优势函数和KL散度项构成。
- 训练策略：
    - SFT阶段：2个epoch，批量大小128，学习率2e-5。
    - GRPO阶段：1个epoch，批量大小64，学习率1e-5。每个查询采样8个响应（G=8），温度为1.0。KL散度系数β=0.04。
- 关键超参数：基础模型为Qwen2.5-Omni-7B。长度奖励阈值τ1=2048，τ2=4096。对话匹配的相似度阈值γ=0.6。视频采样率2fps，单帧最大512 tokens，视频总token上限25600。
- 训练硬件：16张NVIDIA H200 GPU。
- 推理细节：未明确说明解码策略（如贪心、核采样）。从实验设置描述看，评估时可能使用标准解码。
- 正则化/稳定训练技巧：GRPO本身通过clip机制和KL散度正则化（β=0.04）来稳定训练。奖励函数的设计（尤其是长度奖励）也有助于防止生成崩溃（repetition collapse）。

### 📊 实验结果

论文在多个基准上进行了全面评估，结果如下。

表1：音视频描述基准性能对比（主实验）

| 模型 | 大小 | 模态 | video-SALMONN-2 (Miss ↓) | video-SALMONN-2 (Hall. ↓) | video-SALMONN-2 (Total ↓) | UGC-VideoCap (Audio ↑) | UGC-VideoCap (Visual ↑) | UGC-VideoCap (Detail ↑) | UGC-VideoCap (Avg. ↑) |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| Gemini-2.5-Pro | - | A+V | 18.1 | 13.3 | 31.3 | 69.5 | 74.7 | 73.7 | 72.6 |
| InternVL3.5 | 8B | V | 53.8 | 25.5 | 79.4 | 47.9 | 64.8 | 59.5 | 57.4 |
| Qwen2.5-VL | 7B | V | 40.5 | 17.0 | 57.5 | 46.6 | 69.1 | 62.3 | 59.3 |
| Qwen2.5-Omni | 7B | A+V | 41.7 | 15.4 | 57.1 | 46.9 | 66.1 | 60.0 | 57.7 |
| video-SALMONN-2* | 7B | A+V | 21.2 | 17.6 | 38.8 | 61.8 | 71.4 | 68.5 | 67.2 |
| Qwen3-Omni-Captioner | 30B-A3B | A+V | 31.0 | 16.6 | 47.6 | 69.0 | 75.5 | 72.3 | 72.5 |
| AVoCaDO (Ours) | 7B | A+V | 21.1 | 16.2 | 37.3 | 73.0 | 74.6 | 71.8 | 73.2 |

注：`Total ↓`表示总错误率（缺失率+幻觉率），越低越好。`Avg. ↑`为三项平均分，越高越好。号表示同期工作。*

表2：基于QA的描述评估（使用Gemini-2.5-Pro作为judge）

| 模型 | 大小 | Daily-Omni (Acc ↑) | WorldSense (Acc ↑) |
| :--- | :--- | :--- | :--- |
| Gemini-2.5-Pro | - | 60.2 | 33.8 |
| Qwen2.5-Omni | 7B | 13.4 | 8.6 |
| video-SALMONN-2* | 7B | 29.9 | 18.2 |
| AVoCaDO (Ours) | 7B | 50.1 | 25.7 |

注：准确率越高越好。

表3：纯视觉描述基准性能

| 模型 | 大小 | VDC Detailed (Acc) | VDC Detailed (VDCscore) | DREAM-1K (F1 score) |
| :--- | :--- | :--- | :--- | :--- |
| Qwen2.5-VL | 7B | 44.5 | 2.4 | 30.1 |
| Qwen2.5-Omni | 7B | 39.7 | 2.2 | 31.6 |
| video-SALMONN-2* | 7B | 46.1 | 2.5 | 34.4 |
| AVoCaDO (Ours) | 7B | 47.4 | 2.5 | 35.9 |

注：各项指标均为越高越好。

表4：消融实验（Ablation Study）

| 模型 | 奖励RC | 奖励RD | 奖励RL | video-SALMONN-2 (Total ↓) | video-SALMONN-2 (Dlg. F1 ↑) | video-SALMONN-2 (RepCol % ↓) | Daily-Omni (Avg. ↑) | Daily-Omni (Dlg. F1 ↑) | Daily-Omni (RepCol % ↓) |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| Qwen2.5-Omni | - | - | - | 57.1 | 7.1 | 7.1 | 13.4 | 16.9 | 8.1 |
| AVoCaDO-SFT | - | - | - | 41.4 | 74.4 | 3.5 | 48.1 | 73.6 | 5.1 |
| AVoCaDO-GRPO | ✓ | - | - | 41.3 | 76.5 | 2.4 | 49.5 | 76.1 | 6.0 |
| AVoCaDO-GRPO | ✓ | ✓ | - | 37.3 | 75.9 | 3.9 | 49.5 | 75.2 | 4.9 |
| AVoCaDO-GRPO | ✓ | ✓ | ✓ | 37.3 | 76.9 | 0.4 | 50.1 | 76.2 | 1.0 |

注：`Dlg. F1`是对话质量指标，`RepCol`是生成出现重复崩溃的比例。加粗为最优。

关键结论：表1和表2显示AVoCaDO在所有音视频基准上大幅领先开源模型，在UGC-VideoCap上甚至略超Gemini系列。表4的消融实验清晰地证明了：SFT阶段大幅提升整体性能；GRPO阶段，RD奖励提升对话F1，RC奖励降低总错误率，RL奖励极大缓解重复崩溃（从3.5%/5.1%降至0.4%/1.0%），三者协同取得最佳效果。

图4：AVoCaDO生成样本示例

![定性结果示例](/audio-paper-digest-blog/images/iclr-2026/2026-05-04/vjEl1PuIDE-3.png)

该图展示了一个由AVoCaDO生成的完整描述。描述不仅详细描述了视觉内容（人物、动作、场景），还准确转录了对话内容，并恰当地引入了背景音乐和音效的描述，体现了其在音视频时间对齐和内容全面性上的优势。

### ⚖️ 评分理由

- 学术质量：6.0/7 - 论文工作扎实，创新点清晰且有技术深度（特别是奖励函数设计）。实验极其充分，涵盖直接评估、QA评估和纯视觉评估，并有深入的消融研究，证据链完整可信。扣分点在于核心后训练框架（SFT+GRPO）并非首创，且关键组件（如奖励判断）依赖强大闭源模型。
- 选题价值：1.5/2 - 音视频时间对齐描述是一个重要且具有挑战性的问题，对视频理解与生成下游任务有明确价值。选题前沿，潜在应用空间广。1.5分是因为任务相对垂直，且论文未深入探讨幻觉等关键可靠性问题。
- 开源与复现加成：0.5/1 - 论文承诺开源AVoCaDO模型，这对社区是重要贡献。训练细节（数据集、超参数、奖励公式、Prompt）在附录中给出得非常充分，有利于复现。但论文发表时未提供代码、模型权重或SFT数据集的下载链接，因此加成有限。

---

[← 返回 ICLR 2026 论文分析](/audio-paper-digest-blog/posts/iclr2026-summary/)
