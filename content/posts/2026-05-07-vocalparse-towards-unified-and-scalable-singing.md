---
title: "VocalParse: Towards Unified and Scalable Singing Voice Transcription with Large Audio Language Models"
date: 2026-05-07
draft: false
tags: [歌唱语音转录, 自回归模型, 音频大模型, 预训练, 迁移学习]
categories: [论文速递]
description: "歌唱语音转录 | 8.5/10"
hiddenInHomeList: true
---

# 📄 VocalParse: Towards Unified and Scalable Singing Voice Transcription with Large Audio Language Models

#歌唱语音转录 #自回归模型 #音频大模型 #预训练 #迁移学习

🔥 **8.5/10** | 前25% | #歌唱语音转录 | #自回归模型 | #音频大模型 #预训练 | [arxiv](https://arxiv.org/abs/2605.04613v1)

学术质量 6.0/7 | 选题价值 1.5/2 | 复现加成 1.0 | 置信度 高


### 👥 作者与机构

- 第一作者：Yukun Chen（西安交通大学，南洋理工大学）
- 通讯作者：Yukun Chen（论文中标注为“Corresponding authors”，但未明确指定具体邮箱，根据脚注1推断为同一机构）
- 作者列表：
    - Yukun Chen（西安交通大学 1，南洋理工大学 2）
    - Tianrui Wang（天津大学 3，南洋理工大学 2）
    - Zhaoxi Mu（蚂蚁集团 4，浙江大学 5）
    - Xinyu Yang（西安交通大学 1）
    - EngSiong Chng（南洋理工大学 2，西安交通大学 1）
注：机构数字编号对应论文中的 affiliations。

### 💡 毒舌点评

论文巧妙地利用大型音频语言模型（LALM）来解决歌唱语音转录这一“脏活累活”，并通过链式思考提示词设计解决了交错生成带来的语义割裂问题，展现了LALM在音乐领域的强大迁移潜力。但其核心的全局BPM估计假设过于简单，对于有速度变化的流行歌曲可能成为性能瓶颈，且模型在多语言、多方言上的泛化能力未经验证。

### 🔗 开源详情

- 代码：https://github.com/pymaster17/VocalParse
- 模型权重：论文中未提及具体的权重下载链接。论文指出VocalParse是基于 `Qwen3-ASR` 初始化的，但未提供VocalParse预训练权重的直接获取方式。
- 数据集：
  - 开源数据集：论文使用了多个公开数据集进行评估，包括：GTSinger (https://github.com/yyyang121/GTSinger)、M4Singer (https://github.com/M4Singer/M4Singer)、Opencpop (https://github.com/MagiaBao/Opencpop)、ACE-KiSing (https://github.com/BillCui520/ACE-KiSing)、OpenSinger (https://github.com/voidful/OpenSinger)、PopCS (https://github.com/gaopengcuhk/Unified-Singing-Voice-Synthesis).
  - 自有数据：论文中通过 SingCrawl 管道构建的约2000小时训练数据集，因涉及版权和伦理原因，不会公开原始音频或歌词。
- Demo：论文中未提及在线演示链接。
- 复现材料：论文在附录C（Appendix C）中提供了详细的训练配置信息，包括初始化模型（Qwen3-ASR）、GPU数量、训练步数、学习率设置等。但未提供检查点文件的具体下载链接。
- 论文中引用的开源项目：
  - SOFA (用于强制对齐): https://github.com/qiuqiao/SOFA
  - ROSVOT (用于音符估计): https://github.com/chitralekha18/ROSVOT (注：论文引用链接为 https://github.com/chitralekha18/ROSVOT)
  - MSST-WebUI (用于人声分离): https://github.com/SUC-DriverOld/MSST-WebUI
  - Qwen3-ASR (基础模型): 论文未提供具体链接，但指明是基于其进行初始化。
  - DiTAR (用于SVS实验的基线模型): 论文未提供具体链接，仅作为基线架构被提及。

## 补充信息

- [开源详情] 补充：论文明确提供了模型检查点（checkpoint）的下载链接。在摘要末尾写道：“The source code and checkpoint are available at https://github.com/pymaster17/VocalParse。” 此外，在附录D（SVS实验）中，论文说明了为减少教师-评估者偏差，所有用于SVS评估的对齐和音符转录均使用STARS模型提取，而非数据标注中使用的SOFA+ROSVOT流水线。

除此之外，分析报告已全面覆盖了论文的核心内容、方法细节、实验数据及局限性，无需其他补充。

### 📌 核心摘要

1.  解决的问题：高质量歌唱注释（歌词、音符、对齐）获取成本高昂，现有自动转录系统依赖复杂多级流水线，易出错、难以扩展，且对分布外（OOD）歌唱数据泛化能力差。
2.  方法核心：基于大型音频语言模型Qwen3-ASR构建VocalParse，将歌唱转录重构为一个统一的自回归序列生成问题。核心是设计“交错提示”格式（歌词-音符交错）来显式编码词-音符对应关系，并引入“链式思考”策略——先生成纯歌词序列作为语义骨架，再生成交错序列，以解决语义连贯性问题。
3.  与已有方法相比新在哪里：将传统多阶段流水线（ASR+对齐+旋律转录）统一到一个端到端的自回归模型中；通过交错提示和链式思考，在保留LALM语义理解能力的同时，实现了歌词、旋律及精细对齐的联合建模；无需额外后处理或复杂解码结构。
4.  主要实验结果：在多个歌唱数据集上达到SOTA。在Opencpop数据集上：
    *   自动歌词转录 (ALT)：WER为3.79%，显著优于LyricWhiz (9.68%) 和Whisper-adapted (8.67%)。
    *   自动旋律转录 (AMT)：在音频-歌词条件下，MAE_pitch为0.35，MAE_note为0.43，MAE_dur为0.33，均优于ROSVOT、MusicYOLO和STARS。消融实验表明，去除链式思考会使WER从3.79%上升至7.18%，去除SingCrawl数据会使MAE_pitch从0.56上升至0.94。
    *   下游歌唱语音合成（SVS）实验证明，使用VocalParse自动标注的大规模数据（2000小时）能显著提升节奏相似性（IOU从0.46提升至0.59）和旋律相似性（RPA从0.39提升至0.74）。
5.  实际意义：为构建大规模、高质量歌唱数据集提供可扩展的自动标注方案，有望降低歌唱语音合成等下游任务的门槛；展示了LALM通过适当提示策略可有效迁移到复杂音乐信息检索任务。
6.  主要局限性：BPM估计假设全局恒定速度，对含速度变化的音乐不友好；自回归生成无法绝对保证两阶段生成的歌词一致性；性能上限受教师模型（自动标注流水线）质量制约；实验仅在普通话数据上进行。

### 🏗️ 模型架构

VocalParse是一个基于大型音频语言模型（LALM）的端到端歌唱语音转录（SVT）模型，其架构如图2所示。

![Figure 2: Overview of VocalParse.](https://arxiv.org/html/2605.04613v1/main.png)

*   整体流程：
    1.  输入：歌唱音频波形。
    2.  音频编码：通过音频tokenizer将波形转换为离散音频token（12.5 Hz）。
    3.  目标序列生成：模型以自回归方式预测一个两阶段的目标序列`S_cot`。
        *   第一阶段（纯歌词序列`W`）：生成连续的歌词文本序列。此阶段与标准ASR任务相同，旨在恢复与预训练LALM兼容的连续语义解码上下文。
        *   第二阶段（交错歌词-音符序列`S_il`）：生成显式编码词-音符对应关系的交错序列。对于歌词中的每个词`w_i`，紧跟其对应的音符序列`M_i`（包含音高`p_i,j`和时值`n_i,j` token）。整个序列以全局BPM token结束。
    4.  输出：结构化的歌词-旋律分数。
*   骨干模型：使用Qwen3-ASR，这是一个在ASR任务上微调过的LALM，具备强大的音频-语义建模能力，同时保留了基础的音乐理解能力。
*   推理模式（如图2右侧所示）：
    *   仅音频推理：模型完全自回归解码，先输出歌词`W`，再输出交错序列`S_il`。
    *   音频-歌词联合推理：当提供准确歌词时，将其作为前缀（即`W`），模型只需解码后续的交错序列`S_il`。这避免了歌词识别错误传播，并让模型更专注于音符预测。
*   核心设计动机：该架构旨在解决统一SVT中的一个关键权衡：输出序列需要保留歌唱的层级结构（词-音符对应），但直接交错生成会破坏预训练LALM依赖的连续文本上下文。链式思考策略（先`W`后`S_il`）正是为了调和这一矛盾。

### 💡 核心创新点

1.  交错提示格式：定义了一种新的序列化格式`S_il = ⊕[w_i ⊕ M_i]`，将每个词与其对应的音符序列紧密排列。这超越了传统方法将歌词和旋律分开预测再对齐的做法，在序列生成层面显式、无损地编码了词-音符对应关系，更贴合歌唱数据的内在结构。
2.  链式思考提示策略：为解决交错格式对预训练语义解码能力的破坏，提出先生成纯歌词序列`W`作为“语义脚手架”，再生成交错序列。这种两步分解与预训练LALM的ASR行为高度兼容，稳定了歌词识别性能，同时为后续的结构化生成提供了全局语义上下文。
3.  SingCrawl大规模数据构建流水线：设计并实现了从网络歌曲到伪标签训练数据的全自动、可扩展流程，涵盖元数据过滤、音频处理（人声分离、去混响）、强制对齐、音符提取和时值量化，解决了SVT领域训练数据稀缺的核心瓶颈。
4.  统一且灵活的推理框架：同一模型无需任何修改或重训，即可支持“仅音频”和“音频+歌词”两种推理模式，展现了架构的优雅性和实用性。

### 🔬 细节详述

*   训练数据：
    *   规模：约2050小时。其中，通过SingCrawl流水线收集并处理的网络歌曲数据约2000小时；两个开源数据集GTSinger（中文子集）和M4Singer约50小时。
    *   预处理与增强：SingCrawl流水线（详见附录A）包含严格的元数据过滤、波形静音检测切分、基于mel-RoFormer的人声分离与去混响、质量控制。数据增强未明确提及。
*   损失函数：标准因果语言建模目标（交叉熵损失），针对整个两阶段目标序列`S_cot`进行训练。
*   训练策略：
    *   优化器：未明确提及，但采用分布式数据并行训练。
    *   学习率：峰值学习率为`2e-5`，使用余弦退火调度，预热步数为12k。
    *   Batch Size：动态批处理，每个GPU的最大token数为18,000，每个batch最多64个样本。
    *   训练步数/轮数：总训练步数为120k步。
    *   调度策略：余弦学习率调度。
*   关键超参数：
    *   模型大小：骨干模型Qwen3-ASR为1.7B参数。
    *   音符词汇：定义了128个`<PITCH>` token（对应MIDI音高）和12个`<NOTE>` token（表示从三十二分音符到全音符及其附点的时值），以及一个全局`<BPM>` token。
*   训练硬件：2块NVIDIA H100 GPU。
*   训练时长：总计约17小时。
*   推理细节：论文未明确提及解码策略（如beam search宽度、温度等），默认为标准自回归解码。
*   正则化/稳定训练技巧：采用动态批处理以提高硬件利用率，并针对变长音频-文本对进行优化。

### 📊 实验结果

主要对比实验

表1：自动旋律转录（AMT）在Opencpop和ACE-KiSing数据集上的性能（音频-歌词条件）。
| 模型 | Opencpop MAE_pitch↓ | Opencpop MAE_note↓ | Opencpop MAE_dur↓ | Opencpop Num_note↓ | ACE-KiSing MAE_pitch↓ | ACE-KiSing MAE_note↓ | ACE-KiSing MAE_dur↓ | ACE-KiSing Num_note↓ |
| :--- | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| STARS | 1.12 | 0.57 | 0.47 | 0.17 | 1.42 | 0.60 | 0.57 | 0.35 |
| MusicYOLO | 0.64 | 0.54 | 0.56 | 0.41 | 1.63 | 0.73 | 0.63 | 0.55 |
| ROSVOT | 0.38 | 0.45 | 0.40 | 0.20 | 1.08 | 0.62 | 0.54 | 0.23 |
| VocalParse (音频-歌词) | 0.35 | 0.43 | 0.33 | 0.11 | - | - | - | - |
| VocalParse (仅音频) | 0.56 | 0.44 | 0.34 | 0.11 | 0.53 | 0.52 | 0.49 | 0.29 |

注：ACE-KiSing数据集仅提供音素级标注，因此未报告音频-歌词设置。

![Figure 5: Illustration of the note quantization process.](https://arxiv.org/html/2605.04613v1/quantization.png)
图5展示了音符时值从连续时长到离散符号token的量化过程，这是VocalParse表示旋律的关键步骤。

表2：自动歌词转录（ALT）性能（WER%， 越低越好）。
| 模型 | Opencpop | OpenSinger | PopCS |
| :--- | :---: | :---: | :---: |
| Qwen3-ASR | 3.41 | 5.93 | 7.83 |
| LyricWhiz | 9.68 | 12.76 | 11.64 |
| Whisper-adapted | 8.67 | 16.55 | 21.68 |
| VocalParse | 3.79 | 5.69 | 8.16 |

关键结论：
1.  AMT：VocalParse在公平条件（音频-歌词）下，在Opencpop上所有AMT指标均达到SOTA。其“仅音频”设置在不依赖歌词的情况下，性能依然强劲，在结构指标（Num_note）上表现最佳，显示了统一转录的优势。
2.  ALT：VocalParse在所有三个歌唱ALT基准上，性能显著优于专用歌唱转录系统（LyricWhiz, Whisper-adapted），并与ASR专家模型Qwen3-ASR性能相当，表明引入旋律建模并未损害歌词识别能力。

消融实验（表3）

表3：在Opencpop上的消融研究。
| 方法 | WER (%) ↓ | MAE_pitch ↓ | MAE_note ↓ | MAE_dur ↓ | Num_note ↓ |
| :--- | :---: | :---: | :---: | :---: | :---: |
| VocalParse | 3.79 | 0.56 | 0.44 | 0.34 | 0.11 |
| - w/o CoT | 7.18 | 0.92 | 0.46 | 0.38 | 0.12 |
| - w/o SingCrawl | 4.86 | 0.94 | 0.47 | 0.37 | 0.11 |

*   去除CoT策略（w/o CoT）：WER几乎翻倍（3.79% → 7.18%），音高误差显著增加（0.56 → 0.92），验证了链式思考对保持语义连贯性的关键作用。
*   去除SingCrawl数据（w/o SingCrawl）：所有指标均明显下降，尤其是音高误差（0.56 → 0.94），证明了大规模、高质量伪标签数据对于模型性能的必要性。

下游歌唱合成（SVS）实验

![Figure 6: SVS results under different data construction settings.](https://arxiv.org/html/2605.04613v1/val_loss.png)
![Figure 6: AB Test on different data constructions.](https://arxiv.org/html/2605.04613v1/AB_Test.png)
图6(a)显示了随数据规模增大，SVS模型验证损失单调下降。图6(b)的AB测试表明，使用2000小时自动标注数据（Scale_L）训练的SVS模型在主观上更受青睐。

表5：SVS实验结果。
| 设置 | SingMOS ↑ | CE ↑ | PQ ↑ | BER ↓ | IOU ↑ | RPA ↑ |
| :--- | :---: | :---: | :---: | :---: | :---: | :---: |
| Ac1 (GT数据) | 4.56 | 5.94 | 7.50 | 0.50 | 0.46 | 0.39 |
| + Scale_M (200h伪标签) | 4.54 | 5.91 | 7.62 | 0.47 | 0.58 | 0.72 |
| + Scale_L (2000h伪标签) | 4.52 | 5.90 | 7.63 | 0.47 | 0.59 | 0.74 |
| Ac2 (OpenSinger+VocalParse标注) | 4.37 | 6.02 | 7.53 | 0.50 | 0.40 | 0.39 |

注：BER为词边界错误率，IOU为词对齐交并比，RPA为原始音高准确率。
关键结论：使用VocalParse自动标注的大规模数据（Scale_M, Scale_L）训练下游SVS模型，能在保持合成质量（SingMOS, CE, PQ）基本不变的前提下，大幅提升模型对歌词和旋律的跟随能力（IOU, RPA显著提升）。这直接验证了VocalParse作为自动标注工具的实用价值。

### ⚖️ 评分理由

*   学术质量：6.0/7 - 创新性明确，提出的交错提示和链式思考策略针对性地解决了统一SVT的关键挑战，设计合理。技术实现基于成熟的LALM和伪标签流水线，逻辑正确。实验设置全面，覆盖了AMT、ALT和下游SVS任务，对比基线充分，消融研究有力。证据可信度高，尤其下游实验直接证明了方法的实际效用。扣分点在于，论文对一些核心组件（如音频tokenizer、LALM预训练细节）的内部机制描述不足，且全局BPM假设是一个明显简化。
*   选题价值：1.5/2 - 歌唱语音转录是音乐信息检索和歌唱语音合成的关键前置任务，具有明确的前沿性和应用价值（为大规模SVS提供数据）。虽然任务相对垂直，但与语音/音频领域的研究者高度相关。模型展示了LALM跨任务迁移的潜力，具有启发性。未给满分是因为该任务本身的影响力范围相对特定。
*   开源与复现加成：1.0/1 - 论文明确提供了代码仓库（VocalParse模型与SingCrawl流水线）和模型检查点的链接。训练细节（超参数、硬件、时长）在附录中给出得非常充分，损失函数、架构图、数据处理流程等关键信息完整。复现门槛较低，开源支持力度强。

---

[← 返回 2026-05-07 论文速递](/audio-paper-digest-blog/posts/2026-05-07/)
