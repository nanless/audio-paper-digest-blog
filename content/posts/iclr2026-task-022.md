---
title: "ICLR 2026 - 语音大模型 论文列表"
date: 2026-05-03
draft: false
tags: ["语音大模型"]
categories: [iclr-2026]
description: "共 2 篇 ICLR 2026 语音大模型 方向论文"
hiddenInHomeList: true
---

# ICLR 2026 - 语音大模型

共 **2** 篇论文

[← 返回 ICLR 2026 总览](/audio-paper-digest-blog/posts/iclr2026-summary/)

---

| 排名 | 论文 | 评分 | 分档 |
|------|------|------|------|
| 🥇 | [TASTE: Text-Aligned Speech Tokenization and Embedding for Sp](/audio-paper-digest-blog/posts/2026-05-03-taste-text-aligned-speech-tokenization-and) | 7.5分 | 前25% |
| 🥈 | [Latent Speech-Text Transformer](/audio-paper-digest-blog/posts/2026-05-03-latent-speech-text-transformer) | 7.0分 | 前25% |

---

## 📋 论文详情

### 🥇 [TASTE: Text-Aligned Speech Tokenization and Embedding for Spoken Language Modeling](/audio-paper-digest-blog/posts/2026-05-03-taste-text-aligned-speech-tokenization-and)

✅ **7.5/10** | 前25% | #语音大模型 | #端到端 | #语音合成 #生成模型

👥 **作者与机构**

- 第一作者：Liang-Hsuan Tseng（国立台湾大学通信工程研究所，MediaTek Research实习生）
- 通讯作者：未说明（论文未明确指定）
- 作者列表：
    - Liang-Hsuan Tseng（国立台湾大学通信工程研究所，MediaTek Research实习生）
    - Yi-Chang Chen（MediaTek Research，共同第一作者）
    - Kuan-Yi Lee（国立台湾大学通信工程研究所，MediaTek Research实习生）
    - Da-Shan Shiu（MediaTek Research）
    - Hung-yi Lee（国立台湾大学人工智能卓越研究中心）

💡 **毒舌点评**

这篇论文的亮点在于，它巧妙地将ASR的文本对齐能力“借用”过来，为语音标记创造了一个简洁的“文本对齐”解决方案，显著降低了语音语言模型联合建模的复杂度，并在极低比特率下实现了不错的重建质量。但其核心弱点在于，方法严重依赖外部ASR提供的文本转录，这在无文本或ASR错误传播的场景下可能成为瓶颈，且“文本对齐”的设计哲学可能限制了其捕获超越文本转录的更复杂声学信息（如环境声、非语言声音）的能力。

🔗 **开源详情**

- 代码：论文明确提供了代码仓库链接：https://mtkresearch.github.io/TASTE-SpokenLM.github.io。
- 模型权重：论文提及提供模型（`Our demo, code, and models are available at...`），但未具体说明公开权重的托管平台和获取方式。
- 数据集：未提及公开TASTE的特定数据集，但使用了公开的Emilia和LibriTTS进行训练。
- Demo：提供在线演示（同上链接）。
- 复现材料：在附录中提供了详细的训练细节、超参数配置、硬件信息以及算法描述（如算法1），复现信息充分。
- 引用的开源项目：论文依赖并引用了多个开源工具和模型，包括：
    - ASR/编码器：Whisper (OpenAI)
    - 语音单元/声码器：S3 token (CosyVoice), HiFiGAN, Flow-based vocoder
    - 基座LLM：LLaMA系列 (Meta)
    - 训练工具：DeepSpeed, Liger Kernel
    - 评估工具：HuBERT (用于WER评估), UTMOS, DNS-MOS, ViSQOL, Montreal Forced Aligner (MFA), GPT-4o
    - 数据集：Emilia, LibriTTS, LibriSpeech

📌 **核心摘要**

1.  问题：现有用于联合文本-语音建模的语音标记存在两个主要问题：与文本内容冗余，以及与文本标记存在严重的长度不匹配，导致联合建模复杂。
2.  方法核心：提出TASTE，一种端到端的文本对齐语音标记化与嵌入方法。其核心是一个基于交叉注意力的聚合器，以ASR生成的文本转录作为查询，以冻结的Whisper编码器输出作为键/值，生成与文本标记序列一一对应的语音表示，再经残差向量量化（RVQ）离散化。
3.  创新点：1) 首次提出专为联合文本-语音建模设计的、端到端训练的文本对齐语音标记化方法。2) 该标记动态频率与文本对齐，序列极短（~3 tokens/秒，~150 bps）。3) 标记专注于编码副语言信息，允许简单的文本对齐语音编辑。
4.  主要实验结果：
    - 语音重建：在极低比特率（~150 bps）下，TASTE在质量（WER 4.4%，UTMOS 4.29）和相似性（说话人相似度0.80，MUSHRA 68.3）上与高比特率基线（如S3 token@600 bps）性能相当甚至更优。
    - 语音语言建模：基于TASTE的1.3B SLM（TASLM）在语音续写任务上（GPT-4o评分3.16，人类MOS 4.16）显著优于其他7B预训练SLM；在SALMON和StoryCloze基准测试上取得最佳综合表现（68.7/67.2）；并展示了少样本口语问答能力（Web-Q 27.1， LLaMA-Q 57.6）。
5.  实际意义：为构建更自然、高效的人机交互语音语言模型提供了新的标记化范式，通过简化联合建模流程，有望降低开发门槛。
6.  主要局限性：1) 依赖外部ASR系统，其错误和延迟可能影响性能。2) 目前仅评估英语，多语言泛化能力待验证。3) 专注于单说话人语音，未处理多说话人、重叠语音或非语言声音。4) 未优化系统延迟，未适用于流式场景。

---

### 🥈 [Latent Speech-Text Transformer](/audio-paper-digest-blog/posts/2026-05-03-latent-speech-text-transformer)

✅ **7.0/10** | 前25% | #语音大模型 | #自回归模型 | #自监督学习 #数据集

👥 **作者与机构**

- 第一作者：Yen-Ju Lu (Johns Hopkins University, Center for Language and Speech Processing)
- 通讯作者：未明确说明。论文将Srinivasan Iyer和Duc Le标注为“Joint last author”，通常在学术中可能承担通讯职责，但未明确指明。
- 作者列表：
    - Yen-Ju Lu (Johns Hopkins University, Center for Language and Speech Processing)
    - Yashesh Gaur (Meta Superintelligence Labs)
    - Wei Zhou (Meta Superintelligence Labs)
    - Benjamin Muller (Meta Superintelligence Labs)
    - Jesus Villalba (Johns Hopkins University, Center for Language and Speech Processing)
    - Najim Dehak (Johns Hopkins University, Center for Language and Speech Processing)
    - Luke Zettlemoyer (Meta Superintelligence Labs)
    - Gargi Ghosh (Meta Superintelligence Labs)
    - Mike Lewis (Meta Superintelligence Labs)
    - Srinivasan Iyer (Meta Superintelligence Labs)
    - Duc Le (Meta Superintelligence Labs)

💡 **毒舌点评**

这篇论文巧妙地将字节级语言模型的“patching”思想移植到语音模态，直击了语音token序列过长导致的计算瓶颈，思路清晰且实验扎实。然而，其核心创新（静态patching）略显简单，且依赖外部对齐工具的课程策略增加了系统复杂度与不确定性，使其更像是一个稳健的工程优化而非概念性突破。

🔗 **开源详情**

- 代码：论文明确提供了代码仓库链接：https://github.com/facebookresearch/lst。
- 模型权重：论文中未提及是否公开预训练模型权重。
- 数据集：论文使用的是公开数据集（LibriLight, People‘s Speech, Multilingual LibriSpeech, Spotify Podcast），并说明了各数据集的许可信息。用于生成评估集语音的Kokoro TTS模型也提供了引用链接。
- Demo：论文中未提及提供在线演示。
- 复现材料：论文在附录中提供了相当详细的复现信息，包括：模型架构配置（表7）、优化器设置、训练超参数（学习率、batch size）、硬件规格（H100数量）、训练时长。
- 论文中引用的开源项目：HuBERT (语音分词器)、Llama 2 (文本分词器及数据)、Wav2Vec2+CTC (用于强制对齐)、Kokoro TTS (用于生成评估语音)、HiFi-GAN (论文提及但未直接使用)、Whisper (用于计算TTS的CER)。

📌 **核心摘要**

1.  问题：当前基于交错文本和离散语音token的自回归模型，在语音理解和生成上虽有潜力，但计算效率远低于纯文本大模型，主要原因是语音序列长度远超文本，导致计算资源分配严重失衡，阻碍了有效的跨模态对齐与性能扩展。
2.  方法核心：提出Latent Speech-Text Transformer (LST)，其核心是引入一个语音Patch编码器，将一系列细粒度的语音token（如HuBERT token）动态聚合为更高层次、信息更密集的潜在语音patch。全局Transformer在这些patch和文本token上进行自回归建模，而一个轻量级的Patch解码器则负责将patch解码回语音token。
3.  创新与比较：与直接对语音token使用BPE（效果不佳）或简单跳过某些token的方法不同，LST通过端到端学习的patch机制，有选择地聚合信息。相比基线模型，它在计算控制和数据控制设置下，同时提升了语音和文本任务的准确率。
4.  主要实验结果：
    *   在HellaSwag故事补全任务上，计算控制训练下，LST（课程patching）相比基线在语音（S→S）上获得+6.5%（39.0% → 45.5%）的绝对提升，文本（T→T）提升+5.2%（47.0% → 52.2%）。
    *   在数据控制设置下，LST在减少约19.7%计算量的同时，仍获得显著提升（S→S：40.2% → 45.5%， T→T：49.6% → 52.2%）。
    *   缩放分析表明，从420M到1.8B参数，LST的优势随模型规模增大而增长。
    *   下游任务中，LST使ASR适应更快（1k步即达6.8%/10.4% WER），TTS推理步数减少约4倍且质量不降。
5.  实际意义：LST通过统一语音和文本的建模粒度，有效提升了语音语言模型的计算效率和样本效率，为构建更高效、可扩展的语音-文本基础模型提供了实用路径。
6.  主要局限性：1）研究仅限于半双工（轮流）语音-文本建模，未涉及全双工实时对话。2）分析集中在预训练阶段，未探索指令微调。3）对齐patching和课程学习策略依赖预训练时的强制对齐信息，增加了系统依赖性。

---

