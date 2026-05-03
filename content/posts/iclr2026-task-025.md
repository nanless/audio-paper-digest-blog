---
title: "ICLR 2026 - 语音大模型 论文列表"
date: 2026-05-04
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
| 🥇 | [Latent Speech-Text Transformer](/audio-paper-digest-blog/posts/2026-05-04-latent-speech-text-transformer) | 8.0分 | 前25% |
| 🥈 | [VoxPrivacy: A Benchmark for Evaluating Interactional Privacy](/audio-paper-digest-blog/posts/2026-05-04-voxprivacy-a-benchmark-for-evaluating) | 7.5分 | 前25% |

---

## 📋 论文详情

### 🥇 [Latent Speech-Text Transformer](/audio-paper-digest-blog/posts/2026-05-04-latent-speech-text-transformer)

🔥 **8.0/10** | 前25% | #语音大模型 | #预训练 #自回归模型 | #预训练 #自回归模型

👥 **作者与机构**

- 第一作者：Yen-Ju Lu（Johns Hopkins University, Center for Language and Speech Processing）
- 通讯作者：Srinivasan Iyer（Meta Superintelligence Labs），Duc Le（Meta Superintelligence Labs）
- 作者列表：Yen-Ju Lu（Johns Hopkins University），Yashesh Gaur（Meta Superintelligence Labs），Wei Zhou（Meta Superintelligence Labs），Benjamin Muller（Meta Superintelligence Labs），Jesus Villalba（Johns Hopkins University），Najim Dehak（Johns Hopkins University），Luke Zettlemoyer（Meta Superintelligence Labs），Gargi Ghosh（Meta Superintelligence Labs），Mike Lewis（Meta Superintelligence Labs），Srinivasan Iyer（Meta Superintelligence Labs），Duc Le（Meta Superintelligence Labs）

💡 **毒舌点评**

这篇论文的架构设计逻辑清晰、实验验证相当扎实，针对语音大模型“序列长度不平衡”这一真实痛点，提出的“潜语音块”方案有效且优雅，在计算效率与模型性能间取得了不错的平衡。然而，其最佳性能（如对齐补丁、课程学习）严重依赖于外部强制对齐模型的质量与可用性，这在预训练和推理阶段都引入了额外的复杂性和潜在的误差传播，限制了方案的通用性和在资源受限场景下的实用性。

🔗 **开源详情**

- 代码：论文提供了代码仓库链接 `https://github.com/facebookresearch/lst`。
- 模型权重：论文中未提及是否公开预训练模型权重。
- 数据集：预训练所用语音数据（LibriLight, People’s Speech, MLS, Spotify Podcast）均为公开数据集，论文在附录中提供了许可证信息。评估所用的语音版HellaSwag、StoryCloze、TopicStoryCloze由论文使用Kokoro TTS重新合成，但论文未提及是否公开这些增强后的评估集。
- Demo：论文中未提及提供在线演示。
- 复现材料：论文在正文和附录中提供了非常详细的模型架构配置（表7）、优化器参数、训练硬件与时间、数据处理流程（附录A.1.1）、不同实验的设置细节等，复现材料充分。
- 论文中引用的开源项目：主要依赖的开源项目包括Llama 2 tokenizer、HuBERT模型、Wav2Vec2+CTC模型、HiFi-GAN声码器、Kokoro TTS模型等。

📌 **核心摘要**

1.  解决的问题：自回归语音-文本大模型中，语音token序列远长于文本token，导致计算资源分配不均，严重阻碍了高效的跨模态对齐和模型性能的规模化提升。
2.  方法核心：提出潜语音-文本转换器（LST），其核心是一个“潜语音块”（Latent Speech Patch）机制。该机制通过一个轻量级的块编码器，将冗长的语音token序列动态或静态地聚合为更紧凑的“块”（Patch），然后将这些块与文本token一起输入全局Transformer进行自回归建模。
3.  与已有方法相比新在哪里：不同于直接处理原始语音token或简单使用BPE压缩语音，LST引入了受BLT启发的层级化编解码结构。它提出了多种补丁策略（静态、对齐、课程学习），其中对齐补丁能根据文本边界（词/子词）切分语音，使语音和文本在语义单元上对齐；课程学习则在训练中逐渐从对齐补丁过渡到静态补丁，以摆脱推理时对对齐工具的依赖。
4.  主要实验结果：在故事续写基准（HellaSwag, StoryCloze, TopicStoryCloze）上，LST（课程学习策略）在计算控制设置下，语音HellaSwag准确率比基线提升6.5%（绝对），同时文本性能也提升5.2%。在数据控制设置下，LST以约20%的计算节省实现了相当的性能提升。模型缩放实验（420M到1.8B参数）表明，LST的优势随模型规模增长而扩大。在下游任务中，LST稳定了ASR微调，并将TTS推理的生成步长减少了约4倍，同时保持重建质量。关键结果表格如下：
    | 模型 | HellaSwag (S→S) | HellaSwag (T→T) | StoryCloze (S→S) | StoryCloze (T→T) | TopicStoryCloze (S→S) | TopicStoryCloze (T→T) |
    | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
    | 表3：计算控制设置 |
    | Base SpeechLLM | 39.0 | 47.0 | 59.1 | 67.8 | 87.5 | 95.7 |
    | LST (Curriculum) | 45.5 | 52.2 | 61.2 | 71.6 | 87.9 | 96.1 |
    | 表4：数据控制设置 |
    | Base SpeechLLM | 40.2 | 49.6 | 60.2 | 69.1 | 87.5 | 95.2 |
    | LST (Curriculum) | 45.5 | 52.2 | 61.2 | 71.6 | 87.9 | 96.1 |
5.  实际意义：LST通过压缩语音序列长度，显著提升了语音-文本大模型在预训练和推理阶段的计算效率，使得在相同计算预算下能处理更多数据或构建更大模型，加速了统一语音-文本基础模型的发展，对语音理解与生成（如ASR、TTS）的实用化部署有直接帮助。
6.  主要局限性：研究局限于半双工（交替发言）建模，未涉及实时全双工对话；分析集中在预训练阶段，未探索指令微调；最佳性能的补丁策略（对齐、课程）仍依赖预训练时的强制对齐信息，尽管课程学习旨在降低推理时的依赖，但完全无对齐的方法仍是挑战。

---

### 🥈 [VoxPrivacy: A Benchmark for Evaluating Interactional Privacy of Speech Language Models](/audio-paper-digest-blog/posts/2026-05-04-voxprivacy-a-benchmark-for-evaluating)

✅ **7.5/10** | 前25% | #语音大模型 | #基准测试 | #多语言 #数据集

👥 **作者与机构**

- 第一作者：Yuxiang Wang（香港中文大学（深圳））
- 通讯作者：未明确说明，根据署名和单位推测为Yuxiang Wang或Zhizheng Wu。
- 作者列表：Yuxiang Wang（香港中文大学（深圳）），Hongyu Liu（香港中文大学（深圳）），Dekun Chen（香港中文大学（深圳）），Xueyao Zhang（香港中文大学（深圳）），Zhizheng Wu（香港中文大学（深圳）；深圳湾区研究院；澳门城市大学；Amphion Technology Co., Ltd.）

💡 **毒舌点评**

这篇论文精准地戳中了语音大模型在多用户场景下“管不住嘴”的尴尬现状，首次用三级难度框架量化了“交互隐私”这个模糊概念，实验规模和分析深度都值得肯定。然而，它本质上是一份高质量的“体检报告”而非“治疗方案”，核心贡献是定义和度量了问题，但提出的基础微调解法相对常规，对于“为什么模型就是学不会”这一根本原因的剖析（如speaker continuity bias）虽然指出了方向，但解释力仍有提升空间。

🔗 **开源详情**

*   代码：论文中未提及具体的代码仓库链接（如GitHub），仅提供了一个Demo页面：https://myflashbarry.github.io/VoxPrivacy.github.io/
*   模型权重：论文明确表示将发布“fine-tuned model”，但未提及具体模型名称（应为基于Kimi-Audio���调的版本）的发布平台或链接。
*   数据集：论文明确表示将发布“VoxPrivacy benchmark”（32小时）和“large-scale training set”（4000小时），但未说明获取方式（如HuggingFace链接）。
*   Demo：提供了在线演示页面：https://myflashbarry.github.io/VoxPrivacy.github.io/
*   复现材料：论文在附录中提供了详尽的Prompt模板（生成、润色、评估）、数据统计、训练配置（学习率、硬件等）和评估细节，复现信息较为充分。
*   论文中引用的开源项目：CosyVoice2 (TTS)， Whisper-large-v3 (ASR/编码器)， Deepseek-V3/Gemini (LLM Judge)， 以及用于说话人验证的预训练模型 (Chen et al., 2022)。

📌 **核心摘要**

1. 要解决什么问题：当前语音语言模型（SLMs）正从个人设备走向智能家居等多用户共享环境，但它们缺乏区分不同用户并据此管理信息流的能力，可能导致向一个用户泄露另一个用户的私密信息，即“交互隐私”失败。现有基准测试忽略了对这一能力的评估。
2. 方法核心是什么：论文提出了首个专门评估SLMs交互隐私能力的基准——VoxPrivacy。该基准包含三个难度递增的任务层级：Tier 1（遵守直接保密指令）、Tier 2（基于说话人身份的条件性披露）、Tier 3（无指令下的主动隐私保护）。基准包含7107个中英文样本，总时长32.86小时。此外，论文还构建了一个4000小时的训练集，并微调了一个模型以展示改进路径。
3. 与已有方法相比新在哪里：现有基准要么是说话人无关的通用对话测试，要么仅分析“谁说了什么”而不评估模型如何据此生成恰当回复，要么只关注密码等全局敏感信息而忽略上下文敏感信息。VoxPrivacy首次系统性地、分层次地评估了SLMs在多用户对话中“根据谁在问来决定是否透露信息”的能力。
4. 主要实验结果如何：对9个SLMs的评估显示，大多数开源模型在需要条件判断的Tier 2和Tier 3任务上准确率仅约50%（等同于随机猜测），表明它们根本无法有效利用声纹信息管理隐私。最强的闭源模型（如Gemini-2.5-pro）表现更好，但在Tier 3（主动推理）上仍显不足。论文通过微调将Kimi-Audio的性能提升至与闭源模型相当的水平。

    主要结果表格（Tier 2 & 3）

    | 模型 | Tier 2 (EN) Acc | Tier 2 (EN) F1 | Tier 3 (EN) Acc | Tier 3 (EN) F1 |
    | :--- | :--- | :--- | :--- | :--- |
    | LLM (上界) | 88.37% | 90.64 | 85.21% | 86.71 |
    | Gemini-2.5-pro | 76.05% | 76.39 | 66.28% | 67.06 |
    | Kimi-Audio (基线) | 49.61% | 59.14 | 50.13% | 55.39 |
    | Ours (微调后) | 83.93% | 82.65 | 77.57% | 77.83 |
    | 大多数开源模型 | ~50% | 波动大 | ~50% | 波动大 |

    关键分析图表
    ![图1：VoxPrivacy三级任务概览图](icassp-img://GNo1qMqgPD/0.png)
    图1直观展示了三级任务的难度递进关系，从直接服从指令到基于声纹的条件控制，再到无指令下的主动判断。

5. 实际意义是什么：为评估和开发更安全、更适合多用户共享环境的语音AI提供了关键工具和方向。指出了当前模型在声纹与语义推理结合上的重大缺陷，并证明了通过针对性训练可以提升该能力，为未来SLM的安全部署铺平道路。
6. 主要局限性：基准构建主要依赖合成语音（CosyVoice2），可能缺乏真实对话中的副语言特征；评估依赖LLM-as-a-Judge，存在潜在偏差；所提出的解决方案（监督微调）相对基础，未来需探索更优的训练范式（如强化学习）。

---

