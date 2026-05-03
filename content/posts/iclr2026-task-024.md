---
title: "ICLR 2026 - 语音大模型 论文列表"
date: 2026-05-04
draft: false
tags: ["语音大模型"]
categories: [iclr-2026]
description: "共 3 篇 ICLR 2026 语音大模型 方向论文"
hiddenInHomeList: true
---

# ICLR 2026 - 语音大模型

共 **3** 篇论文

[← 返回 ICLR 2026 总览](/audio-paper-digest-blog/posts/iclr2026-summary/)

---

| 排名 | 论文 | 评分 | 分档 |
|------|------|------|------|
| 🥇 | [Closing the Gap Between Text and Speech Understanding in LLM](/audio-paper-digest-blog/posts/2026-05-04-closing-the-gap-between-text-and-speech) | 8.0分 | 前25% |
| 🥈 | [VoxPrivacy: A Benchmark for Evaluating Interactional Privacy](/audio-paper-digest-blog/posts/2026-05-04-voxprivacy-a-benchmark-for-evaluating) | 7.5分 | 前25% |
| 🥉 | [Latent Speech-Text Transformer](/audio-paper-digest-blog/posts/2026-05-04-latent-speech-text-transformer) | 7.0分 | 前25% |

---

## 📋 论文详情

### 🥇 [Closing the Gap Between Text and Speech Understanding in LLMs](/audio-paper-digest-blog/posts/2026-05-04-closing-the-gap-between-text-and-speech)

🔥 **8.0/10** | 前25% | #语音大模型 | #知识蒸馏 | #跨模态 #迁移学习

👥 **作者与机构**

- 第一作者：Santiago Cuervo（Université de Toulon, Aix-Marseille Université, CNRS, LIS；论文注明实习期间在Apple完成工作）
- 通讯作者：未说明（论文未明确指出通讯作者）
- 作者列表：Santiago Cuervo（Université de Toulon, Aix-Marseille Université, CNRS, LIS，实习单位Apple）、Skyler Seto（Apple）、Maureen de Seyssel（Apple）、Richard He Bai（Apple）、Zijin Gu（Apple）、Tatiana Likhomanenko（Apple）、Navdeep Jaitly（Apple）、Zakaria Aldeneh（Apple）

💡 **毒舌点评**

本文最漂亮的点在于它清晰地解构了“语音适应型LLM理解能力下降”的两大元凶——遗忘与错位，并用可量化的指标证明了其影响，这比以往很多“堆数据”的黑箱尝试更具洞察力；然而，其依赖的合成语音质量（如TTS瑕疵）以及架构上刻意选择“最差对齐情况”（Mimi编码器）来验证方法鲁棒性，在一定程度上限制了结论在最佳实践上的普适性。

🔗 **开源详情**

- 代码：论文中未提及代码链接。
- 模型权重：未提及是否公开训练好的SALAD模型权重。
- 数据集：使用了公开的LibriHeavy、Emilia、FineWeb-Edu数据集。合成语音部分，论文说明了使用Kokoro-TTS模型（链接为开源项目）和af-heart音色。
- Demo：未提及。
- 复现材料：提供了非常充分的复现材料，包括：详细的模型架构描述（A.1节）、训练超参数（A.2, A.3节）、主动选择算法细节和消融实验（A.8节）、评估协议和提示模板（A.5节）、生成质量评估方法（A.9节）。
- 论文中引用的开源项目：Mimi语音编码器、Kokoro-TTS、Whisper-v3-large、BAAI/bge-large-en-v1.5嵌入、SmolLM语料库。

📌 **核心摘要**

1. 要解决什么问题：语音适应型大语言模型在语言理解任务上，性能持续落后于其纯文本基座模型及级联系统，这一差距被称为“文本-语音理解差距”。现有方法要么依赖昂贵的大规模语音合成，要么依赖不可复现的私有数据。
2. 方法核心是什么：论文提出SALAD方法，通过分析将性能差距归因于适应过程中的文本能力遗忘和语音-文本跨模态错位。方法核心是两阶段训练：第一阶段（Stage I）使用交叉模态知识蒸馏，以原始文本LLM为教师，有效缓解遗忘和错位；第二阶段（Stage II）采用主动学习策略，基于模型自身的错位信号，从宽领域文本库中采样并合成少量关键领域的语音数据，以最小成本弥合自然语音与文本语料间的领域鸿沟。
3. 与已有方法相比新在哪里：新在（1）提出了一个清晰、可量化的分析框架（用KL散度定义遗忘和错位），并实证其与下游任务性能高度相关；（2）设计了数据高效的两阶段训练策略，特别是主动选择算法，避免了大规模合成数据的需求；（3）证明了仅在自然语音上使用蒸馏目标，再结合极少量靶向合成数据，即可达到与使用超大规模数据训练的顶尖模型可比的性能。
4. 主要实验结果如何：
    - 主实验结果：SALAD-7B在六个广泛领域的口语理解基准（StoryCloze, MMSU, OBQA, HellaSwag, ARC-C, PIQA）上平均准确率达75.4%，性能超越除Qwen2.5-Omni-7B外的所有端到端基线模型（见下表），且文本-语音性能差距平均为6.2%，与顶级模型（Qwen2.5-Omni平均差距5.0%）具有竞争力，同时训练数据量减少超过一个数量级（约14.1万小时 vs 超百万小时）。
    - 数据效率：如图1所示，SALAD在远少于基线模型的训练数据量下，实现了显著更小的文本-语音理解差距。
    - 消融实验：表4表明，主动选择（Active Selection）相比均匀采样（Uniform），在MMSU、OBQA、ARC-C等科学性更强的任务上带来明显提升（如MMSU从49.5%提升至52.5%）。
    - 能力保持：表5显示，SALAD模型在语音适应后，其处理文本输入时的性能与原始文本LLM相比几乎没有下降（平均差距为-0.9%），显著优于其他产生遗忘的基线模型（如GLM-4-Voice平均差距13.6%）。

| 模型 | 平均语音准确率 (%) | 平均文本-语音差距 (Gap) |
| :--- | :---: | :---: |
| Qwen2.5-7B (文本基座) | 未提供 | - |
| ASR + Qwen2.5-7B (级联) | 79.4 | 2.2 |
| Qwen2-Audio-7B | 53.7 | 17.8 |
| DiVA-Llama3.1-8B | 52.6 | 26.1 |
| GLM-4-Voice-9B | 63.4 | 20.1 |
| Qwen2.5-Omni-7B | 76.7 | 5.0 |
| SALAD-7B | 75.4 | 6.2 |

5. 实际意义是什么：为构建高效的端到端语音理解系统提供了一条可行路径，证明了通过精巧的训练策略（蒸馏+主动学习），可以以远低于前人的数据成本，训练出性能接近顶尖闭源模型、且能更好地保持文本基座能力的语音大模型，推动了该领域向更可复现、更经济的方向发展。
6. 主要局限性是什么：（1）合成语音数据的质量受限于当前TTS模型（如Kokoro），可能引入伪影（论文中过滤了字符错误率高的簇）；（2）实验仅在英语公开数据集上进行；（3）架构选择（Mimi编码器+简单适配器）是为了验证方法有效性而设计的“最差情况”，未探索更先进的跨模态对齐模块；（4）评估聚焦于文本生成（中间表示），未涉及端到端的语音输出能力。

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

### 🥉 [Latent Speech-Text Transformer](/audio-paper-digest-blog/posts/2026-05-04-latent-speech-text-transformer)

✅ **7.0/10** | 前25% | #语音大模型 | #自回归模型 | #预训练 #跨模态

👥 **作者与机构**

- 第一作者：Yen-Ju Lu（约翰斯·霍普金斯大学语言与语音处理中心；工作完成于Meta）
- 通讯作者：Srinivasan Iyer, Duc Le（Meta超级智能实验室，论文标注为共同末位作者）
- 作者列表：Yen-Ju Lu（约翰斯·霍普金斯大学/Meta）、Yashesh Gaur（Meta超级智能实验室）、Wei Zhou（Meta超级智能实验室）、Benjamin Muller（Meta超级智能实验室）、Jesus Villalba（约翰斯·霍普金斯大学）、Najim Dehak（约翰斯·霍普金斯大学）、Luke Zettlemoyer（Meta超级智能实验室）、Gargi Ghosh（Meta超级智能实验室）、Mike Lewis（Meta超级智能实验室）、Srinivasan Iyer（Meta超级智能实验室）、Duc Le（Meta超级智能实验室）

💡 **毒舌点评**

亮点：论文成功地将文本领域的“块级预测”思想（BLT）创造性地移植到语音-文本联合建模中，并通过精巧的课程学习策略解决了对齐依赖问题，显著提升了计算效率和叙事理解性能，方法设计有巧思。短板：所有“高级理解”能力的验证都集中在故事补全类任务（HellaSwag等）上，对于语音大模型更重要的开放式对话、细粒度控制生成、长时序一致性等核心能力的评估付之阙如，使得结论的普适性打了折扣。

🔗 **开源详情**

- 代码：论文明确提供代码仓库链接：`https://github.com/facebookresearch/lst`。
- 模型权重：论文中未提及公开预训练模型权重。
- 数据集：使用的是公开数据集（LibriLight, People’s Speech, MLS, Spotify Podcast），论文未提及是否公开其处理后的数据或交织数据的生成代码。
- Demo：未提供在线演示。
- 复现材料：在附录中提供了详细的模型架构配置（表7）、优化参数（附录A.3）、训练硬件及配置、数据集描述和交织数据构建流程，复现材料较为充分。
- 引用的开源项目：主要依赖HuBERT（语音令牌化）、Llama 2分词器（文本令牌化）、Wav2Vec2+CTC（强制对齐）、Kokoro TTS（评估用语音合成）、HiFi-GAN（提及但未直接使用）。

📌 **核心摘要**

1. 要解决的问题：自回归语音-文本大模型因语音令牌序列过长，导致计算效率远低于纯文本大模型，这严重制约了模型的训练与推理效率以及跨模态知识对齐。
2. 方法核心：提出Latent Speech-Text Transformer (LST)。其核心是引入一个“潜在语音块”机制，通过一个轻量级编码器将一段连续的语音令牌聚合为一个高信息密度的“块”表示，使得全局Transformer可以在与文本令牌粒度相近的“块”序列上进行自回归建模，而非原始的细粒度语音令牌。
3. 与已有方法相比新在哪里：
    - 压缩方式：不同于简单的BPE或固定大小分块，LST探索了基于文本对齐的动态分块，并提出了“课程补丁”策略，训练时从依赖对齐信息逐渐过渡到无需对齐的静态分块，解决了推理时对对齐工具的依赖。
    - 模型结构：采用“编码器-全局Transformer-解码器”的三层结构，实现了从令牌到潜在块再到令牌的“信息瓶颈”，在压缩序列的同时保留了必要的声学细节。
4. 主要实验结果：在叙事理解任务HellaSwag上，LST（课程补丁）相比基线模型，在计算量控制下实现了+6.5%的绝对准确率提升（语音模式），在数据量控制下也有+5.3%的提升。该优势随模型规模从420M扩展至1.8B而增大，并持续到7B模型。在下游任务中，LST稳定了ASR自适应过程，并在TTS推理中减少了约4倍的生成步骤而未降低质量。关键结果对比如下表：
    | 模型 | 实验设置 | HellaSwag (S→S) | HellaSwag (T→T) |
    | :--- | :--- | :--- | :--- |
    | Base SpeechLLM | 计算量控制 | 39.0% | 47.0% |
    | LST (Curriculum) | 计算量控制 | 45.5% | 52.2% |
    | Base SpeechLLM | 数据量控制 | 40.2% | 49.6% |
    | LST (Curriculum) | 数据量控制 | 45.5% | 52.2% |

![LST模型在HellaSwag故事补全任务上的性能对比图](icassp-img://krGpQzo8Mz/0.png)
（图1：在计算量控制(a)和数据量控制(b)两种设置下，LST与基线模型在语音和文本HellaSwag任务上的性能对比，LST均显著优于基线。）

5. 实际意义：通过压缩语音序列，LST大幅降低了自回归语音-文本模型的训练和推理成本，使得更高效的跨模态大模型训练成为可能，并为构建统一的语音-文本基础模型迈出了实用一步。
6. 主要局限性：1) 高级理解能力评估仅限于故事补全类任务，缺乏在更广泛、更复杂的语音任务上的验证；2) 对齐补丁和课程学习策略仍依赖外部的对齐模型（Wav2Vec2+CTC），增加了系统复杂度；3) 论文未探讨指令微调、全双工对话等更贴近实际应用的关键场景。

---

