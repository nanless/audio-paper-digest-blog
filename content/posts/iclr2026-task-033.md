---
title: "ICLR 2026 - 音乐信息检索 论文列表"
date: 2026-05-03
draft: false
tags: ["音乐信息检索"]
categories: [iclr-2026]
description: "共 2 篇 ICLR 2026 音乐信息检索 方向论文"
hiddenInHomeList: true
---

# ICLR 2026 - 音乐信息检索

共 **2** 篇论文

[← 返回 ICLR 2026 总览](/audio-paper-digest-blog/posts/iclr2026-summary/)

---

| 排名 | 论文 | 评分 | 分档 |
|------|------|------|------|
| 🥇 | [Bridging Piano Transcription and Rendering via Disentangled ](/audio-paper-digest-blog/posts/2026-05-03-bridging-piano-transcription-and-rendering-via) | 7.5分 | 前25% |
| 🥈 | [LadderSym: A Multimodal Interleaved Transformer for Music Pr](/audio-paper-digest-blog/posts/2026-05-03-laddersym-a-multimodal-interleaved-transformer) | 7.0分 | 前25% |

---

## 📋 论文详情

### 🥇 [Bridging Piano Transcription and Rendering via Disentangled Score Content and Style](/audio-paper-digest-blog/posts/2026-05-03-bridging-piano-transcription-and-rendering-via)

✅ **7.5/10** | 前25% | #音乐信息检索 | #扩散模型 #多任务学习 | #音乐生成 #扩散模型

👥 **作者与机构**

- 第一作者：Wei Zeng（新加坡国立大学，综合科学与工程项目 & 计算学院）
- 通讯作者：Ye Wang（新加坡国立大学，综合科学与工程项目 & 计算学院）
- 作者列表：Wei Zeng（新加坡国立大学，综合科学与工程项目 & 计算学院）、Junchuan Zhao（新加坡国立大学，计算学院）、Ye Wang（新加坡国立大学，综合科学与工程项目 & 计算学院）

💡 **毒舌点评**

亮点在于首次将EPR和APT这对“逆任务”用统一框架联合建模，通过解耦内容与风格表示实现了相互监督和风格迁移，思路优雅且实验验证了该范式的可行性。短板在于当前验证完全局限于古典钢琴领域，其方法对流行音乐等更广泛风格的泛化能力存疑，且“风格推荐”模块的“多样性”生成质量与真人演绎的细腻差别，仅靠有限的听测和聚类图难以充分证明。

🔗 **开源详情**

- 代码：论文中提供代码仓库链接：`https://github.com/wei-zeng98/joint-apt-epr`，并承诺接收后开源。
- 模型权重：未提及是否公开预训练权重。
- 数据集：使用了公开的ASAP和ATEPP数据集，并详细说明了无配对数据的收集和处理过程。
- Demo：提供在线演示页面：`https://wei-zeng98.github.io/joint-apt-epr/`。
- 复现材料：提供了完整的附录，详细说明了数据处理、模型实现、训练设置、主观测试指南，可复现性极高。
- 引用的开源项目：MuseScore（数据来源）、aria-amt（音频转MIDI模型）、MidiTok（MIDI分词库）、Partitura（乐谱处理库）。

📌 **核心摘要**

1. 要解决什么问题：传统的钢琴表现力渲染（EPR，从乐谱生成演奏）和自动钢琴转录（APT，从演奏恢复乐谱）任务被独立研究，浪费了两者作为互逆任务的内在关联性。
2. 方法核心是什么：提出一个基于Transformer的统一序列到序列（Seq2Seq）框架，通过两个编码器分别提取音符级的乐谱内容表示和全局的演奏风格表示，并在多个任务（配对的EPR/APT，无配对的掩码重建）上联合训练以实现解耦。此外，引入一个独立的、基于扩散模型的性能风格推荐（PSR）模块，能从乐谱内容中生成合适的风格嵌入。
3. 与已有方法相比新在哪里：
    - 联合建模：首次将EPR和APT统一在一个模型中，通过任务对偶性互相提供监督信号。
    - 对齐无关的Seq2Seq EPR：将EPR建模为Seq2Seq任务，无需细粒度的音符级对齐数据，降低了数据准备门槛。
    - 解耦表示与自动风格生成：显式分离内容与风格，并训练PSR模块实现从乐谱到风格的自动映射，模仿了钢琴家的诠释过程。
4. 主要实验结果如何：
    - APT任务：在ASAP数据集上，本模型（Ours）在多个MUSTER和ScoreSimilarity指标上达到或接近最佳水平，例如在Eextra（额外音符）指标上以7.33显著优于端到端基线（8.95）。
    - EPR任务：目标风格（Ours-Target）生成的演奏在各项客观指标（如KL散度、MAE）和主观听测评分上均表现最佳，PSR生成的风格（Ours-PSR）也接近或超过基线（如DExter, VirtuosoNet）。
    - 解耦与风格迁移：通过在ATEPP数据集上的分类实验和潜在空间可视化，证明了风格表示（zs）能有效编码作曲家和演奏家信息（作曲家识别准确率达77.46%）。风格迁移实验表明，迁移后的演奏在“风格相似度”上得分更高，且不损害“整体质量”。
    - PSR模块有效性：其生成的风格嵌入在历史时期聚类上与从真实演奏中提取的风格嵌入模式高度相似。

    关键实验结果表格：
    表1：APT结果（ASAP数据集，越低越好）
    | 方法 | Eextra (MUSTER) | Eavg (MUSTER) |
    |---|---|---|
    | End-to-end (Beyer & Dai, 2024) | 8.95 | 14.10 |
    | Ours | 7.33 | 12.48 |

    表2：EPR客观评估（关键指标）
    | 方法 | KL (V) ↓ | MAE (V) ↓ |
    |---|---|---|
    | Human | - | - |
    | DExter | 2.32 | 24.27 |
    | VirtuosoNet | 4.91 | 14.40 |
    | Ours (Target) | 1.76 | 10.33 |
    | Ours (PSR) | 2.67 | 15.24 |

5. 实际意义是什么：该工作为音乐信息检索领域提供了一个统一的建模范式，有望促进音乐理解与生成技术的协同发展。自动风格推荐模块降低了非专业用户生成富有表现力演奏的门槛，对音乐教育和创作工具有应用潜力。
6. 主要局限性是什么：
    - 领域局限：当前评估和训练数据主要集中在古典钢琴音乐，对流行、爵士等更广泛音乐风格的适用性未验证。
    - 输入模态：模型仅处理符号化的MIDI输入，而非原始音频，因此无法直接应用于真实世界的音频转录或生成。
    - 风格表示的解释性：虽然证明了风格表示包含信息，但其具体编码了哪些音乐维度（如情感、乐句划分）仍不清晰。

---

### 🥈 [LadderSym: A Multimodal Interleaved Transformer for Music Practice Error Detection](/audio-paper-digest-blog/posts/2026-05-03-laddersym-a-multimodal-interleaved-transformer)

✅ **7.0/10** | 前25% | #音乐信息检索 | #多模态模型 | #错误检测 #数据集

👥 **作者与机构**

- 第一作者：Benjamin Shiue-Hal Chou（Purdue University）
- 通讯作者：未明确说明（论文提供了多位作者的邮箱，但未明确标注通讯作者）
- 作者列表：Benjamin Shiue-Hal Chou¹， Purvish Jajal¹， Nick John Eliopoulos¹， James C. Davis¹， George K. Thiruvathukal²， Kristen Yeon-Ji Yun¹， Yung-Hsiang Lu¹
- 机构信息：¹ Purdue University（普渡大学）， ² Loyola University Chicago（芝加哥洛约拉大学）

💡 **毒舌点评**

这篇论文在解决一个非常具体且实际的“小问题”（音乐练习纠错）上，展现了扎实的工程创新和严谨的实验精神，特别是通过自建真实数据集来验证模型泛化能力的做法值得称赞。不过，其核心架构思想（频繁跨模态对齐、利用符号信息作为提示）并非颠覆性突破，更像是一种精心设计的、针对特定任务的高效解决方案，其更广泛的影响力可能受限于应用场景的垂直性。

🔗 **开源详情**

- 代码：论文中提供了代码仓库链接 `https://github.com/ben2002chou/LadderSYM`。
- 模型权重：论文中未明确提及是否公开预训练好的模型权重文件。
- 数据集：论文使用了公开的部分合成数据集MAESTRO-E和CocoChorales-E。论文中自建的真实初学者演奏评估集，其获取方式未明确说明。
- Demo：论文中提到了在线演示页面（`our demo page`），但未给出具体URL。
- 复现材料：提供了极其详细的复现材料，包括：完整的训练超参数配置（表7）、MIDI错误生成算法（算法1）、数据集构建细节、评估指标定义、以及确保可复现性的随机种子设置方法（附录A.12）。
- 引用的开源项目：论文中引用了MT3、Polytune、MIDI-DDSP、EfficientTTMs、mir_eval等作为基础或对比工具。其代码也基于EfficientTTMs（MIT许可）和Polytune（BSD 3-Clause，非商业）进行修改。
- 其他：论文明确说明了使用了OpenAI GPT-5进行文案润色。

📌 **核心摘要**

1. 问题：现有的音乐练习错误检测方法存在两个主要局限：一是采用“晚融合”策略导致音频流之间对齐能力不足；二是仅用音频表示参考乐谱，当多个音符同时响起时会产生频率歧义，影响检测准确性。
2. 方法核心：提出了LadderSym模型。其核心包括：(1) Ladder编码器，一个交错式双流Transformer编码器，在每一层都使用交叉注意力模块进行跨流对齐，实现特征提取与对齐的解耦；(2) 多模态提示策略，将符号化乐谱作为提示输入T5解码器，提供清晰的参考以减少歧义。
3. 创新点：与传统早期/晚期融合不同，LadderSym在编码器中引入频繁的层间跨模态对齐；首次将符号乐谱信息以提示形式直接注入解码器，作为音频编码的补充。
4. 实验结果：在MAESTRO-E和CocoChorales-E数据集上取得SOTA性能。在MAESTRO-E上，漏音检测F1从26.8%提升至56.3%（翻倍以上），多余音符检测F1从72.0%提升至86.4%。在自建的真实初学者演奏数据集上，漏音检测F1也从63.9%显著提升至78.5%。
5. 实际意义：为音乐学习者提供更精细的练习反馈工具，有望辅助解决音乐教育资源不平等问题。其模型也可作为“人机回环”标注工具，加速高质量错误数据集的构建。
6. 主要局限性：对于高度密集和弦中的漏音检测仍是挑战；在音乐片段边界处可能出现错误累积；设计上不适用于处理整体速度发生巨大变化的演奏。

---

