---
title: "ICLR 2026 - 模型评估 论文列表"
date: 2026-05-03
draft: false
tags: ["模型评估"]
categories: [iclr-2026]
description: "共 4 篇 ICLR 2026 模型评估 方向论文"
hiddenInHomeList: true
---

# ICLR 2026 - 模型评估

共 **4** 篇论文

[← 返回 ICLR 2026 总览](/audio-paper-digest-blog/posts/iclr2026-summary/)

---

| 排名 | 论文 | 评分 | 分档 |
|------|------|------|------|
| 🥇 | [AudioTrust: Benchmarking The Multifaceted Trustworthiness of](/audio-paper-digest-blog/posts/2026-05-03-audiotrust-benchmarking-the-multifaceted) | 9.5分 | 前10% |
| 🥈 | [Compose and Fuse: Revisiting the Foundational Bottlenecks in](/audio-paper-digest-blog/posts/2026-05-03-compose-and-fuse-revisiting-the-foundational) | 8.0分 | 前25% |
| 🥉 | [The Deleuzian Representation Hypothesis](/audio-paper-digest-blog/posts/2026-05-03-the-deleuzian-representation-hypothesis) | 7.5分 | 前25% |
| 4. | [A Hidden Semantic Bottleneck in Conditional Embeddings of Di](/audio-paper-digest-blog/posts/2026-05-03-a-hidden-semantic-bottleneck-in-conditional) | 7.0分 | 前25% |

---

## 📋 论文详情

### 🥇 [AudioTrust: Benchmarking The Multifaceted Trustworthiness of Audio Large Language Models](/audio-paper-digest-blog/posts/2026-05-03-audiotrust-benchmarking-the-multifaceted)

🔥 **9.5/10** | 前10% | #模型评估 | #音频大模型 | #基准测试 #音频安全

👥 **作者与机构**

- 第一作者：Kai Li（清华大学计算机系、AI研究所、BNRist）（注：论文标注Kai Li, Can Shen, Yile Liu等多位作者为“Lead authors contribute equally”，故有多位共同第一作者，此处列出首位）
- 通讯作者：Xinfeng Li（未说明具体机构，根据上下文可能为NTU）
- 作者列表：Kai Li（清华大学计算机系、AI研究所、BNRist）、Can Shen（BNBU）、Yile Liu（Waseda University）、Jirui Han（独立研究者）、Kelong Zheng（HUST）、Xuechao Zou（BJTU）、Lionel Z. Wang（NTU）、Shun Zhang（QHU）、Xingjian Du（University of Rochester）、Hanjun Luo（Zhejiang University）、Yingbin Jin（Hong Kong Polytechnic University）、Xinxin Xing（独立研究者）、Ziyang Ma（NTU, 上海交通大学）、Yue Liu（NUS）、Yifan Zhang（CAS）、Junfeng Fang（NUS）、Kun Wang（NTU）、Yibo Yan（HKUST-GZ）、Gelei Deng（NTU）、Haoyang Li（Hong Kong Polytechnic University）、Yiming Li（NTU）、Xiaobin Zhuang（Bytedance）、Tianlong Chen（University of North Carolina at Chapel Hill）、Qingsong Wen（Squirrel Ai learning）、Tianwei Zhang（NTU）、Yang Liu（NTU）、Haibo Hu（Hong Kong Polytechnic University）、Zhizheng Wu（The Chinese University of Hong Kong (Shenzhen)）、Xiaolin Hu（清华大学计算机系、AI研究所、BNRist）、Eng-Siong Chng（NTU）、Wenyuan Xu（Zhejiang University）、XiaoFeng Wang（NTU）、Wei Dong（NTU）、Xinfeng Li（未说明具体机构）

💡 **毒舌点评**

亮点：这是首个为音频大模型量身定制的、覆盖六大安全维度的系统性“体检报告”，数据规模和评估深度堪称豪华，直接为火热的ALLM竞赛拉响了可信度警报，指明了未来必须攻克的难关。
短板：作为基准论文，其“金标准”地位依赖于自动化评估管道（GPT-4o/Qwen3）的可靠性，尽管有人工验证，但这类“用模型评估模型”的方法本身可能存在盲区，且部分评估维度（如音频幻觉的物理逻辑）的界定可能过于理想化。

🔗 **开源详情**

- **代码**：论文明确提供了GitHub仓库链接（https://github.com/JusperLee/AudioTrust），其中包含评估框架、自动化评估脚本和排行榜生成代码。
- **模型权重**：论文评估的是第三方模型（如GPT-4o, Gemini），未提及提供自己训练的模型权重。
- **数据集**：论文声明公开了评估数据集，可通过上述GitHub仓库获取。数据集由合成数据和公共数据集（Common Voice, freesound）样本组成。
- **Demo**：论文中未提及在线演示（Demo）链接。
- **复现材料**：论文提供了极其详尽的复现信息，包括：完整的两阶段评估平台架构描述、所有评估维度的具体子任务和数据集构建过程（在附录D-I中）、评估指标定义、自动化评估使用的提示模板，以及支持结果复现的脚本。
- **论文中引用的开源项目**：明确使用了F5-TTS（用于音频合成）、Common Voice（语音数据集）、freesound（背景音数据集）等开源工具和数据。

📌 **核心摘要**

1.  **要解决什么问题**：随着音频大语言模型（ALLMs）快速发展，现有评估框架主要针对文本，无法系统评估ALLMs特有的安全可信风险（如基于音色、口音、情感的攻击）。
2.  **方法核心是什么**：提出AudioTrust，第一个全面评估ALLMs可信度的基准框架，涵盖公平性、幻觉、安全、隐私、鲁棒性、认证六大维度，设计26个子任务，并构建了4420个真实世界场景音频样本的数据集。
3.  **与已有方法相比新在哪里**：首次将评估重点从文本转向音频模态，系统性地识别并建模了由声学特性（如非语义线索）引入的全新攻击面和可信度风险，并设计了相应的评估任务和指标。
4.  **主要实验结果如何**：对14个SOTA ALLMs的评估揭示了显著局限。例如，在隐私推断泄露测试中，模型的平均拒绝率仅为9.02%（使用GPT-4o评估）；在认证任务中，许多开源模型面对声音克隆欺骗的拒绝率（IRR）低于60%；而在公平性评估中，模型在群体公平性得分（Γ）上普遍表现不佳（平均仅约0.3）。
    *   **关键实验数据表**：
        | 维度 | 指标（示例） | 代表模型表现（示例） |
        | :--- | :--- | :--- |
        | **公平性** | 群体公平性得分 Γ | GPT-4o Audio (Γstereo=0.926), Kimi-Audio (Γdecision=0.086) |
        | **幻觉** | 内容不匹配检测准确度 | Gemini-2.5 Flash (8.36), GPT-4o Audio (2.68) (Qwen3评估) |
        | **安全** | 越狱防御成功率 (DSR) | Kimi-Audio (99.8), OpenS2S (47.6) (Qwen3评估) |
        | **隐私** | 推断泄露拒绝率 (w/提示) | GPT-4o mini Audio (40.0%), Qwen2.5-Omni (0.00%) |
        | **鲁棒性** | 环境音理解准确度 | Gemini-2.5 Pro (8.68), SALMONN (6.42) (GPT-4o评估) |
        | **认证** | 身份验证绕过拒绝率 (IVB) | GPT-4o mini Audio (100), Kimi-Audio (74) (GPT-4o评估) |
    *   **关键结果图表**：论文中的概览与排行榜图显示了各模型在六个维度上的得分差异巨大。例如，图2(b)显示GPT-4o Audio在认证维度得分0.938，但在公平性维度仅0.600。
    ![论文中的概览与排行榜图](icassp-img://E823AY0taq/1.png)
    *   图2：展示了AudioTrust的六大评估维度和初步模型排行榜。排行榜显示，没有模型在所有维度上都表现优异，GPT-4o Audio在认证上领先，而Kimi-Audio在安全上表现突出。
5.  **实际意义是什么**：为ALLMs的研发、评估和安全部署提供了急需的标准化基准和工具集，明确了当前模型在真实高风险场景下的脆弱环节，为构建可信赖的音频AI系统指明了方向。
6.  **主要局限性是什么**：评估框架的有效性高度依赖于其自动化评估管道（基于LLM的评估器）的准确性；数据集虽大，但可能无法覆盖所有长尾分布和方言；部分攻击场景设计相对理想化，可能与复杂多变的真实攻击存在差距。

---

### 🥈 [Compose and Fuse: Revisiting the Foundational Bottlenecks in Multimodal Reasoning](/audio-paper-digest-blog/posts/2026-05-03-compose-and-fuse-revisiting-the-foundational)

🔥 **8.0/10** | 前25% | #模型评估 | #多模态模型 | #音视频 #鲁棒性

👥 **作者与机构**

- 第一作者：Yucheng Wang（ETH Zurich）, Yifan Hou（ETH Zurich）（论文中注明“Equal contribution”，故视为共同第一作者）
- 通讯作者：Mrinmaya Sachan（ETH Zurich）
- 作者列表：Yucheng Wang（ETH Zurich）、Yifan Hou（ETH Zurich）、Aydin Javadov（ETH Zurich, MTEC）、Mubashara Akhtar（ETH Zurich）、Mrinmaya Sachan（ETH Zurich）

💡 **毒舌点评**

这篇论文像是一把精巧的手术刀，系统性地解剖了多模态大模型“推理差”的病灶，明确指出问题不在“看得见”或“听得懂”（感知），而在“想得明白”（任务组合与信息融合），其诊断框架本身就是一个重要贡献。然而，其诊断主要基于精心构造的合成数据，如同在实验室里研究疾病却较少涉及真实复杂的临床环境；而提出的“治疗方案”（如两步提示）更像是临时性的行为干预，未能触及模型架构或训练目标的根本性变革。

🔗 **开源详情**

- **代码**：论文明确提供代码，公开在仓库中（论文中声明“Our code and data are publicly available”）。
- **模型权重**：未提及。论文评估的是已有的开源模型（Baichuan, Qwen, MiniCPM, Phi-4），但未提供其本身修改或训练的模型。
- **数据集**：论文提供了生成合成评估数据的脚本。此外，也提及在真实世界数据集IsoBench上进行了部分验证（见附录C）。
- **Demo**：未提及。
- **复现材料**：提供了详细的提示模板（附录A.3）、线性探针设置（附录A.2）、模型推理设置（float16，贪心解码）等，有助于复现核心实验。但未提供超参数搜索过程、探针模型的具体训练轮数等细节。
- **论文中引用的开源项目**：CosyVoice 2（用于TTS），Graphviz（用于生成视觉图示），以及评估所使用的四个基础MLLM（Baichuan-Omni, Qwen2.5-Omni, MiniCPM-v, Phi-4 Multimodal）。

📌 **核心摘要**

1.  **要解决什么问题**：多模态大模型在加入额外模态（如视觉、音频）后，推理性能时好时坏，现有研究结论矛盾且缺乏系统性分析。论文旨在厘清“何时、为何”额外模态能帮助或损害推理能力，并理解其内部机制。
2.  **方法核心是什么**：提出一个基于命题逻辑的评估框架，将多模态推理分解为六种规范的交互模式（如冗余、替代、蕴含等），系统地控制事实信息在跨模态中的分布与逻辑组合方式，以实现受控评估。
3.  **与已有方法相比新在哪里**：突破了以往将模型视为“黑箱”进行整体评估的范式。通过受控的逻辑框架，首次系统性地区分了“识别”与“推理”两个阶段，并定量刻画了不同类型的跨模态信息交互对推理的影响，从而精准定位了两个核心瓶颈：**任务组合瓶颈**（识别与推理无法在一步中可靠完成）和**融合瓶颈**（早期融合引入模态偏见）。
4.  **主要实验结果如何**：实验在四个主流开源多模态大模型上验证了框架。主要结果包括：
    - 当额外模态提供独立、充足的推理路径时（Alternative模式），性能略有提升（平均提升12.7%）；但当信息是冗余的（Equivalence模式）或需要跨模态链式推理时（Entailment模式），性能显著下降（平均下降5.7%和7.1%）。
    - 模型存在**性能偏见**（弱模态拖累整体表现）和**偏好偏见**（冲突信息下倾向于特定模态）。
    - 在互补信息融合（Complementary模式）上表现最差，平均准确率（52.0%）远低于任何单一模态基线（V:73.2%， A:82.4%， T:94.6%）。
    - 内部分析表明，注意力机制未能有效编码信息的“有用性”；模态身份在早期层被强保留，通过“软化”早期层注意力温度能显著改善推理。
    - 实验结果表格示例（来自论文表1）：

| 模型 | 等价模式 (≡) | 替代模式 (∨) | 蕴含模式 (→)（最终事实在T） |
| :--- | :--- | :--- | :--- |
| Baichuan | 84.8% | 97.6% | 80.7% (-13.6%) |
| Qwen | 98.9% | 100.0% | 83.9% (-12.8%) |
| MiniCPM | 94.8% | 99.1% | 88.4% (-6.8%) |
| Phi4 | 84.1% | 97.9% | 79.7% (-18.0%) |
| **平均** | **90.7%** | **98.7%** | **83.2% (-12.8%)** |

    - 内部机制分析图表：注意力探针显示模型难以区分有用与干扰事实；模态身份在早期层（如前4层）信号最强。

    ![注意力探针与推理性能](icassp-img://oIvIsK5AwB/1.png)
    *图2: (a) 信息有用性探针准确率较低，表明注意力模式无法可靠区分相关与无关事实。(b) 模型在单独的事实识别和文本推理上表现优异，但在需要组合的多模态推理上性能大幅下降。*

    ![模态探针与注意力操作](icassp-img://oIvIsK5AwB/2.png)
    *图3: (a) 模态身份探针达到完美准确率，说明模型内部清晰保留了模态信息。(b) 对Qwen模型的线性探针权重显示，模态信息主要集中在前4层。(c) 在早期层（前4层）调整注意力温度可显著提升推理准确率。*

5.  **实际意义是什么**：本研究为理解和改进多模态推理提供了清晰的诊断工具和路线图。它指出，未来提升多模态推理的关键不在于更强的感知，而在于设计能**解耦识别与推理**（如引入显式步骤）以及**实现公平、受控融合**（如控制早期融合层）的模型架构与训练目标。
6.  **主要局限性是什么**：评估框架基于逻辑构建的合成数据，虽然控制严格，但可能无法完全代表现实世界中复杂、模糊的多模态推理场景。提出的缓解方法（两步提示、温度调整）是推断时的权宜之计，并未从模型架构或训练方法上根本解决问题。论文未提供新的模型或大规模真实世界任务上的验证。

---

### 🥉 [The Deleuzian Representation Hypothesis](/audio-paper-digest-blog/posts/2026-05-03-the-deleuzian-representation-hypothesis)

✅ **7.5/10** | 前25% | #模型评估 | #概念提取 | #多模态模型 #聚类

👥 **作者与机构**

- 第一作者：Clément Cornet（Université Paris-Saclay, CEA, List）
- 通讯作者：论文中未明确标注通讯作者。根据署名顺序和邮箱格式，三位作者单位相同，均为通讯作者的可能性较高。
- 作者列表：
    * Clément Cornet（Université Paris-Saclay, CEA, List, F-91120, Palaiseau, France）
    * Romaric Besançon（Université Paris-Saclay, CEA, List, F-91120, Palaiseau, France）
    * Hervé Le Borgne（Université Paris-Saclay, CEA, List, F-91120, Palaiseau, France）

💡 **毒舌点评**

本文用一套简洁的“差异聚类”框架，在概念提取的质量和一致性上打趴了一众结构复杂的稀疏自编码器，堪称“大道至简”的漂亮示范。然而，其评估体系高度依赖预先标注的属性数据集，如果模型学到了人类尚未命名或标签库未覆盖的“新概念”，该方法可能就会显得“眼瞎”，这暴露了当前可解释性研究普遍存在的评估困境。

🔗 **开源详情**

- **代码**：提供。论文明确给出了代码仓库链接：https://github.com/ClementCornet/Deleuzian-Hypothesis。
- **模型权重**：未提供。该方法用于分析预训练模型，不产生新的模型权重。论文中使用的预训练模型（CLIP， DinoV2， DeBERTa等）均为公开可用。
- **数据集**：均为公开标准数据集（ImageNet， WikiArt， IMDB， CoNLL-2003， AudioSet）。
- **Demo**：未提供在线演示。
- **复现材料**：非常充分。论文在附录A中详细说明了所有实验设置，包括：
    * 基线SAE（Vanilla， Gated， JumpReLU， TopK， Matryoshka， Archetypal）的具体超参数（L1系数、学习率、k值、层级结构等）。
    * ICA的实现库（scikit-learn）和设置。
    * 所有数据集的来源和划分方式（附录B表4）。
    * 所有使用的预训练模型版本和来源（附录B表5）。
    * 概念评估指标（Probe Loss， MPPC）的计算细节（附录C， D）。
- **论文中引用的开源项目**：主要依赖scikit-learn（用于ICA和可能用于KMeans），以及Hugging Face、PyTorch Hub上的预训练模型。论文还提到了公开的预训练SAE作为基线（ViT-Prisma， EleutherAI的SAE）。

📌 **核心摘要**

1. **问题**：当前从神经网络中提取可解释概念的主流方法（如稀疏自编码器，SAE）面临训练困难、特征多义性以及过度依赖“稀疏性”作为可解释性代理等问题。
2. **方法**：本文提出了一种受德勒兹哲学启发的新方法，将“概念”视为数据表示之间的“差异”。核心流程是：随机采样激活差异向量，使用偏度加权的KMeans聚类来发现重复出现的差异模式，聚类质心即作为概念向量。该方法可视为一种无监督的判别分析。
3. **新意**：与SAE通过重构激活来学习“普遍本质”不同，本方法直接建模样本间的“差异”。在技术上，它避免了SAE复杂的训练和超参数调优，整个过程更简单、透明，仅需一个可解释的超参数（概念数量k），并支持无损的概念引导。
4. **结果**：在跨视觉（CLIP， DinoV2）、语言（DeBERTa， BART）和音频（AST）三种模态、五个模型、多个数据集的大规模评估中，该方法在衡量概念质量的**Probe Loss**指标上，平均排名显著优于所有对比的SAE变体和ICA，并接近有监督的线性判别分析（LDA）。具体而言，在20项任务中有13项取得了最低的Probe Loss。消融实验证明了差异表示和偏度加权的关键作用。在概念一致性（MPPC）上表现也最佳。
5. **意义**：证明了基于“差异”的原则能有效提取高质量、多样化且一致的可解释概念，为机制可解释性提供了新的、简单有效的工具。提取的概念可用于引导模型行为（如风格迁移、文本编辑），展示了其因果影响力。
6. **局限性**：评估依赖于带有已知属性标签的数据集，可能无法发现未被标注的新概念；方法假设概念可在线性投影中表示；所有评估在固定的概念维度（6144）下进行，更高维度的影响未知。

---

### 4. [A Hidden Semantic Bottleneck in Conditional Embeddings of Diffusion Transformers](/audio-paper-digest-blog/posts/2026-05-03-a-hidden-semantic-bottleneck-in-conditional)

✅ **7.0/10** | 前25% | #模型评估 | #扩散模型 | #音频生成 #图像生成

👥 **作者与机构**

- 第一作者：Trung X. Pham (Korea Advanced Institute of Science and Technology (KAIST))
- 通讯作者：Chang D. Yoo (Korea Advanced Institute of Science and Technology (KAIST))
- 作者列表：Trung X. Pham (KAIST), Kang Zhang (KAIST), Ji Woo Hong (KAIST), Chang D. Yoo (KAIST)

💡 **毒舌点评**

这篇论文像一位细心的“模型解剖师”，敏锐地发现了扩散Transformer中条件嵌入“高度对齐却高度稀疏”这一反常现象，实验设计严谨，视觉证据充分。然而，其本质更像一篇高质量的“诊断报告”，虽然指出了现有架构可能存在“语义瓶颈”和“参数冗余”，但并未开出有效的“新药方”——即未提出一种能从根本上克服此瓶颈的创新架构或训练方法，价值更多停留在认知层面。

🔗 **开源详情**

- **代码**：论文中未提及分析代码或评估代码的开源链接。
- **模型权重**：论文明确说明使用了多个SOTA模型的**官方公开预训练权重**（在GitHub发布）进行分析，但未提供其修改（剪枝）后的模型。
- **数据集**：分析所用数据集（ImageNet-1K, DeepFashion, VGGSound）为公开标准数据集。
- **Demo**：未提及。
- **复现材料**：论文提供了详细的实验设置（生成5000样本、评估指标）和附录中的大量可视化结果，但未提供一键复现的脚本。
- **论文中引用的开源项目**：引用了被分析模型的代码库（如DiT, MDT, SiT, REPA等）。

📌 **核心摘要**

1.  **要解决的问题**：扩散Transformer模型中的条件嵌入（由类别和时间步嵌入相加而成）是如何编码语义信息的？其内部结构和冗余性尚未被系统研究。
2.  **方法核心**：对六个SOTA图像生成扩散Transformer（DiT, MDT, SiT, REPA等）以及两个连续条件任务（姿态引导图像生成、视频到音频生成）的预训练模型，系统分析其条件嵌入向量的**余弦相似度**和**幅度分布**。通过**参与率（PR）** 量化稀疏性，并通过**剪枝实验**验证冗余维度的影响。
3.  **与已有方法相比新在哪里**：首次在扩散Transformer领域揭示并量化了条件嵌入的两个核心现象：a) 极端的角相似性（余弦相似度>99%）；b) 语义信息高度集中在少数几个高幅度（head）维度，而绝大部分低幅度（tail）维度接近零值。这与对比学习中的“表征坍缩”不同，因其仍保持了生成质量。
4.  **主要实验结果**：
    *   **相似性**：在ImageNet-1K上，六个模型的类别条件向量两两余弦相似度普遍高于90%，其中REPA等模型超过99.4%。在连续条件任务（X-MDPT, MDSGen）上，相似度甚至超过99.9%。
    *   **稀疏性**：条件向量维度为1152，但REPA的归一化参与率（nPR）仅为1.53%，意味着有效维度仅约17.67个。详见论文Table 1。
    *   **剪枝效果**：对REPA，剪除幅度低于0.01的尾部维度（移除约39%），FID（7.169 -> 7.1598）基本不变甚至微优，CLIP分数提升。移除约66%维度后，质量才开始明显下降。详见论文Table 2。

    | 方法 | 剪枝策略 | 移除维度 | FID ↓ | IS ↑ | CLIP ↑ |
    | :--- | :--- | :--- | :--- | :--- | :--- |
    | REPA (基线) | 无 | 0/1152 (0%) | 7.1694 | 176.02 | 29.746 |
    | τ=0.01 (每一步) | 尾部 | 448/1152 (38.94%) | 7.2143 | 171.99 | 29.737 |
    | τ=0.01 (仅初始) | 尾部 | 448/1152 (38.94%) | 7.1690 | 175.97 | 29.807 |
    | τ=0.01 (最后k步) | 尾部 | 448/1152 (38.94%) | 7.1598 | 175.49 | 29.805 |
    | τ=0.02 (每一步) | 尾部 | 762/1152 (66.21%) | 9.2202 | 125.15 | 29.221 |
    | τ=5.0 (每一步) | 头部 | 2/1152 (0.20%) | 7.8478 | 164.15 | 29.555 |

5.  **实际意义**：揭示了当前扩散Transformer在条件编码上的巨大冗余性，为设计更轻量、更高效的条件注入机制（如低维条件编码）提供了实证依据和新思路。剪枝尾部维度甚至能轻微提升生成质量，暗示了潜在的“噪声抑制”效果。
6.  **主要局限性**：核心贡献是**分析与发现**，而非提出新的生成模型。论文对“为何产生高相似性和稀疏性”的解释停留在假说层面，缺乏严格的理论分析。研究局限于特定架构（AdaLN注入的Transformer），结论能否推广至其他条件注入方式（如交叉注意力）有待验证。

---

