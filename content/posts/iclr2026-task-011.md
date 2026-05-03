---
title: "ICLR 2026 - 模型评估 论文列表"
date: 2026-05-03
draft: false
tags: ["模型评估"]
categories: [iclr-2026]
description: "共 3 篇 ICLR 2026 模型评估 方向论文"
hiddenInHomeList: true
---

# ICLR 2026 - 模型评估

共 **3** 篇论文

[← 返回 ICLR 2026 总览](/audio-paper-digest-blog/posts/iclr2026-summary/)

---

| 排名 | 论文 | 评分 | 分档 |
|------|------|------|------|
| 🥇 | [AudioTrust: Benchmarking The Multifaceted Trustworthiness of](/audio-paper-digest-blog/posts/2026-05-03-audiotrust-benchmarking-the-multifaceted) | 9.5分 | 前10% |
| 🥈 | [The Deleuzian Representation Hypothesis](/audio-paper-digest-blog/posts/2026-05-03-the-deleuzian-representation-hypothesis) | 7.5分 | 前25% |
| 🥉 | [Compose and Fuse: Revisiting the Foundational Bottlenecks in](/audio-paper-digest-blog/posts/2026-05-03-compose-and-fuse-revisiting-the-foundational) | 7.5分 | 前25% |

---

## 📋 论文详情

### 🥇 [AudioTrust: Benchmarking The Multifaceted Trustworthiness of Audio Large Language Models](/audio-paper-digest-blog/posts/2026-05-03-audiotrust-benchmarking-the-multifaceted)

🔥 **9.5/10** | 前10% | #模型评估 | #音频大模型 | #基准测试 #音频安全

👥 **作者与机构**

- 第一作者：Kai Li（清华大学计算机系、AI研究所、BNRist）（注：论文标注Kai Li, Can Shen, Yile Liu等多位作者为“Lead authors contribute equally”，故有多位共同第一作者，此处列出首位）
- 通讯作者：Xinfeng Li（未说明具体机构，根据上下文可能为NTU）
- 作者列表：Kai Li（清华大学计算机系、AI研究所、BNRist）、Can Shen（BNBU）、Yile Liu（Waseda University）、Jirui Han（独立研究者）、Kelong Zheng（HUST）、Xuechao Zou（BJTU）、Lionel Z. Wang（NTU）、Shun Zhang（QHU）、Xingjian Du（University of Rochester）、Hanjun Luo（Zhejiang University）、Yingbin Jin（Hong Kong Polytechnic University）、Xinxin Xing（独立研究者）、Ziyang Ma（NTU, 上海交通大学）、Yue Liu（NUS）、Yifan Zhang（CAS）、Junfeng Fang（NUS）、Kun Wang（NTU）、Yibo Yan（HKUST-GZ）、Gelei Deng（NTU）、Haoyang Li（Hong Kong Polytechnic University）、Yiming Li（NTU）、Xiaobin Zhuang（Bytedance）、Tianlong Chen（University of North Carolina at Chapel Hill）、Qingsong Wen（Squirrel Ai learning）、Tianwei Zhang（NTU）、Yang Liu（NTU）、Haibo Hu（Hong Kong Polytechnic University）、Zhizheng Wu（The Chinese University of Hong Kong (Shenzhen)）、Xiaolin Hu（清华大学计算机系、AI研究所、BNRist）、Eng-Siong Chng（NTU）、Wenyuan Xu（Zhejiang University）、XiaoFeng Wang（NTU）、Wei Dong（NTU）、Xinfeng Li（未说明具体机构）

#

💡 **毒舌点评**

亮点：这是首个为音频大模型量身定制的、覆盖六大安全维度的系统性“体检报告”，数据规模和评估深度堪称豪华，直接为火热的ALLM竞赛拉响了可信度警报，指明了未来必须攻克的难关。
短板：作为基准论文，其“金标准”地位依赖于自动化评估管道（GPT-4o/Qwen3）的可靠性，尽管有人工验证，但这类“用模型评估模型”的方法本身可能存在盲区，且部分评估维度（如音频幻觉的物理逻辑）的界定可能过于理想化。

#

🔗 **开源详情**

- 代码：论文明确提供了GitHub仓库链接（https://github.com/JusperLee/AudioTrust），其中包含评估框架、自动化评估脚本和排行榜生成代码。
- 模型权重：论文评估的是第三方模型（如GPT-4o, Gemini），未提及提供自己训练的模型权重。
- 数据集：论文声明公开了评估数据集，可通过上述GitHub仓库获取。数据集由合成数据和公共数据集（Common Voice, freesound）样本组成。
- Demo：论文中未提及在线演示（Demo）链接。
- 复现材料：论文提供了极其详尽的复现信息，包括：完整的两阶段评估平台架构描述、所有评估维度的具体子任务和数据集构建过程（在附录D-I中）、评估指标定义、自动化评估使用的提示模板，以及支持结果复现的脚本。
- 论文中引用的开源项目：明确使用了F5-TTS（用于音频合成）、Common Voice（语音数据集）、freesound（背景音数据集）等开源工具和数据。

📌 **核心摘要**

1.  要解决什么问题：随着音频大语言模型（ALLMs）快速发展，现有评估框架主要针对文本，无法系统评估ALLMs特有的安全可信风险（如基于音色、口音、情感的攻击）。
2.  方法核心是什么：提出AudioTrust，第一个全面评估ALLMs可信度的基准框架，涵盖公平性、幻觉、安全、隐私、鲁棒性、认证六大维度，设计26个子任务，并构建了4420个真实世界场景音频样本的数据集。
3.  与已有方法相比新在哪里：首次将评估重点从文本转向音频模态，系统性地识别并建模了由声学特性（如非语义线索）引入的全新攻击面和可信度风险，并设计了相应的评估任务和指标。
4.  主要实验结果如何：对14个SOTA ALLMs的评估揭示了显著局限。例如，在隐私推断泄露测试中，模型的平均拒绝率仅为9.02%（使用GPT-4o评估）；在认证任务中，许多开源模型面对声音克隆欺骗的拒绝率（IRR）低于60%；而在公平性评估中，模型在群体公平性得分（Γ）上普遍表现不佳（平均仅约0.3）。
    *   关键实验数据表：
        | 维度 | 指标（示例） | 代表模型表现（示例） |
        | :--- | :--- | :--- |
        | 公平性 | 群体公平性得分 Γ | GPT-4o Audio (Γstereo=0.926), Kimi-Audio (Γdecision=0.086) |
        | 幻觉 | 内容不匹配检测准确度 | Gemini-2.5 Flash (8.36), GPT-4o Audio (2.68) (Qwen3评估) |
        | 安全 | 越狱防御成功率 (DSR) | Kimi-Audio (99.8), OpenS2S (47.6) (Qwen3评估) |
        | 隐私 | 推断泄露拒绝率 (w/提示) | GPT-4o mini Audio (40.0%), Qwen2.5-Omni (0.00%) |
        | 鲁棒性 | 环境音理解准确度 | Gemini-2.5 Pro (8.68), SALMONN (6.42) (GPT-4o评估) |
        | 认证 | 身份验证绕过拒绝率 (IVB) | GPT-4o mini Audio (100), Kimi-Audio (74) (GPT-4o评估) |
    *   关键结果图表：论文中的概览与排行榜图显示了各模型在六个维度上的得分差异巨大。例如，图2(b)显示GPT-4o Audio在认证维度得分0.938，但在公平性维度仅0.600。
    ![论文中的概览与排行榜图](icassp-img://E823AY0taq/1.png)
    *   图2：展示了AudioTrust的六大评估维度和初步模型排行榜。排行榜显示，没有模型在所有维度上都表现优异，GPT-4o Audio在认证上领先，而Kimi-Audio在安全上表现突出。
5.  实际意义是什么：为ALLMs的研发、评估和安全部署提供了急需的标准化基准和工具集，明确了当前模型在真实高风险场景下的脆弱环节，为构建可信赖的音频AI系统指明了方向。
6.  主要局限性是什么：评估框架的有效性高度依赖于其自动化评估管道（基于LLM的评估器）的准确性；数据集虽大，但可能无法覆盖所有长尾分布和方言；部分攻击场景设计相对理想化，可能与复杂多变的真实攻击存在差距。

#

---

### 🥈 [The Deleuzian Representation Hypothesis](/audio-paper-digest-blog/posts/2026-05-03-the-deleuzian-representation-hypothesis)

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

- 代码：提供。论文明确给出了代码仓库链接：https://github.com/ClementCornet/Deleuzian-Hypothesis。
- 模型权重：未提供。该方法用于分析预训练模型，不产生新的模型权重。论文中使用的预训练模型（CLIP， DinoV2， DeBERTa等）均为公开可用。
- 数据集：均为公开标准数据集（ImageNet， WikiArt， IMDB， CoNLL-2003， AudioSet）。
- Demo：未提供在线演示。
- 复现材料：非常充分。论文在附录A中详细说明了所有实验设置，包括：
    * 基线SAE（Vanilla， Gated， JumpReLU， TopK， Matryoshka， Archetypal）的具体超参数（L1系数、学习率、k值、层级结构等）。
    * ICA的实现库（scikit-learn）和设置。
    * 所有数据集的来源和划分方式（附录B表4）。
    * 所有使用的预训练模型版本和来源（附录B表5）。
    * 概念评估指标（Probe Loss， MPPC）的计算细节（附录C， D）。
- 论文中引用的开源项目：主要依赖scikit-learn（用于ICA和可能用于KMeans），以及Hugging Face、PyTorch Hub上的预训练模型。论文还提到了公开的预训练SAE作为基线（ViT-Prisma， EleutherAI的SAE）。

📌 **核心摘要**

1. 问题：当前从神经网络中提取可解释概念的主流方法（如稀疏自编码器，SAE）面临训练困难、特征多义性以及过度依赖“稀疏性”作为可解释性代理等问题。
2. 方法：本文提出了一种受德勒兹哲学启发的新方法，将“概念”视为数据表示之间的“差异”。核心流程是：随机采样激活差异向量，使用偏度加权的KMeans聚类来发现重复出现的差异模式，聚类质心即作为概念向量。该方法可视为一种无监督的判别分析。
3. 新意：与SAE通过重构激活来学习“普遍本质”不同，本方法直接建模样本间的“差异”。在技术上，它避免了SAE复杂的训练和超参数调优，整个过程更简单、透明，仅需一个可解释的超参数（概念数量k），并支持无损的概念引导。
4. 结果：在跨视觉（CLIP， DinoV2）、语言（DeBERTa， BART）和音频（AST）三种模态、五个模型、多个数据集的大规模评估中，该方法在衡量概念质量的Probe Loss指标上，平均排名显著优于所有对比的SAE变体和ICA，并接近有监督的线性判别分析（LDA）。具体而言，在20项任务中有13项取得了最低的Probe Loss。消融实验证明了差异表示和偏度加权的关键作用。在概念一致性（MPPC）上表现也最佳。
5. 意义：证明了基于“差异”的原则能有效提取高质量、多样化且一致的可解释概念，为机制可解释性提供了新的、简单有效的工具。提取的概念可用于引导模型行为（如风格迁移、文本编辑），展示了其因果影响力。
6. 局限性：评估依赖于带有已知属性标签的数据集，可能无法发现未被标注的新概念；方法假设概念可在线性投影中表示；所有评估在固定的概念维度（6144）下进行，更高维度的影响未知。

---

### 🥉 [Compose and Fuse: Revisiting the Foundational Bottlenecks in Multimodal Reasoning](/audio-paper-digest-blog/posts/2026-05-03-compose-and-fuse-revisiting-the-foundational)

✅ **7.5/10** | 前25% | #模型评估 | #基准测试 | #多模态模型 #音视频

👥 **作者与机构**

- 第一作者：Yucheng Wang（共同第一作者）、Yifan Hou（共同第一作者）（ETH Zurich， Inf. T&I）
- 通讯作者：Mrinmaya Sachan（未明确标注，但为最后作者且邮箱为学校邮箱）
- 作者列表：Yucheng Wang（ETH Zurich）， Yifan Hou（ETH Zurich）， Aydin Javadov（ETH Zurich， MTEC）， Mubashara Akhtar（ETH Zurich， Inf. T&I）， Mrinmaya Sachan（ETH Zurich， Inf. T&I）

💡 **毒舌点评**

亮点是这篇论文没有盲目吹嘘多模态模型的“全能”，而是用一套精心设计的逻辑交互框架，像手术刀一样精准地解剖了多模态推理失败的两个核心病灶：任务组合和融合偏差。短板在于，虽然框架很漂亮，但所有实验都基于高度简化和合成的逻辑任务，其结论对于模型在真实世界复杂场景（如自然图像问答）中的表现有多少指导意义，可能要打个问号。

🔗 **开源详情**

- 代码：论文中提供代码仓库链接，但明确说明将在发表后公开。
- 模型权重：评估使用的是四个公开的MLLMs，但未提供任何新训练的模型权重。
- 数据集：论文中提供合成数据的生成代码和脚本，数据集本身是动态生成的，可在运行时构建。
- Demo：未提及。
- 复现材料：附录提供了非常详细的实验设置，包括线性探测的具体参数、所有六种交互类型及识别任务、两步推理的完整提示模板，复现细节充分。
- 论文中引用的开源项目：CosyVoice 2 TTS用于音频生成，GraphViz用于图像生成。

📌 **核心摘要**

本文旨在解决当前多模态大语言模型在推理任务中作用模糊、研究结论矛盾的问题。其方法核心是提出一个基于命题逻辑的六种模态交互类型（等价、替代、蕴含、独立、矛盾、互补）的评估框架，通过合成任务系统性地控制事实信息在不同模态间的分布与组合方式。与已有黑盒评估不同，该框架新在能主动隔离变量，诊断失败模式，并深入模型内部机制进行探查。主要实验结果显示：文本单模态基线性能已接近天花板；多模态输入仅在提供独立、充分的推理路径（“替代”类型）时有轻微帮助；冗余信息（“等价”）和跨模态多跳链条（“蕴含”）常损害性能。论文通过内部探测发现两个根本性瓶颈：一是任务组合瓶颈，即模型无法在单次推理中同时完成跨模态事实识别和逻辑推理，但采用两步提示可显著缓解；二是融合瓶颈，即早期层的信息整合引入了偏差，调整早期注意力温度可改善。该研究的实际意义在于明确了多模态推理的瓶颈在于信息“整合”而非“感知”，指出了未来模型应关注组合感知训练和早期融合控制。主要局限性在于评估任务局限于简化的合成逻辑问题，其发现能否推广至更复杂的自然任务有待验证。

---

