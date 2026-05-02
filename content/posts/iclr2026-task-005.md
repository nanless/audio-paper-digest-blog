---
title: "ICLR 2026 - 多模态模型 论文列表"
date: 2026-05-03
draft: false
tags: ["多模态模型"]
categories: [iclr-2026]
description: "共 7 篇 ICLR 2026 多模态模型 方向论文"
hiddenInHomeList: true
---

# ICLR 2026 - 多模态模型

共 **7** 篇论文

[← 返回 ICLR 2026 总览](/audio-paper-digest-blog/posts/iclr2026-summary/)

---

| 排名 | 论文 | 评分 | 分档 |
|------|------|------|------|
| 🥇 | [RoboOmni: Proactive Robot Manipulation in Omni-modal Context](/audio-paper-digest-blog/posts/2026-05-03-roboomni-proactive-robot-manipulation-in-omni) | 8.5分 | 前25% |
| 🥈 | [NExT-OMNI: Towards Any-to-Any Omnimodal Foundation Models wi](/audio-paper-digest-blog/posts/2026-05-03-next-omni-towards-any-to-any-omnimodal-foundation) | 8.5分 | 前10% |
| 🥉 | [Omni-Reward: Towards Generalist Omni-Modal Reward Modeling w](/audio-paper-digest-blog/posts/2026-05-03-omni-reward-towards-generalist-omni-modal-reward) | 8.0分 | 前25% |
| 4. | [Learning multimodal dictionary decompositions with group-spa](/audio-paper-digest-blog/posts/2026-05-03-learning-multimodal-dictionary-decompositions) | 8.0分 | 前25% |
| 5. | [MIAM: Modality Imbalance-Aware Masking for Multimodal Ecolog](/audio-paper-digest-blog/posts/2026-05-03-miam-modality-imbalance-aware-masking-for) | 8.0分 | 前25% |
| 6. | [TINY BUT MIGHTY: A SOFTWARE-HARDWARE CO- DESIGN APPROACH FOR](/audio-paper-digest-blog/posts/2026-05-03-tiny-but-mighty-a-software-hardware-co-design) | 7.5分 | 前25% |
| 7. | [Better Together: Leveraging Unpaired Multimodal Data for Str](/audio-paper-digest-blog/posts/2026-05-03-better-together-leveraging-unpaired-multimodal) | 7.0分 | 前25% |

---

## 📋 论文详情

### 🥇 [RoboOmni: Proactive Robot Manipulation in Omni-modal Context](/audio-paper-digest-blog/posts/2026-05-03-roboomni-proactive-robot-manipulation-in-omni)

🔥 **8.5/10** | 前25% | #多模态模型 | #端到端 | #跨模态 #数据集

👥 **作者与机构**

- 第一作者：Siyin Wang (复旦大学, 上海创新研究院)
- 通讯作者：Jinlan Fu (新加坡国立大学), Xipeng Qiu (复旦大学)
- 作者列表：
    - Siyin Wang (复旦大学, 上海创新研究院)
    - Jinlan Fu (新加坡国立大学)
    - Feihong Liu (未说明具体机构，隶属于作者单位列表中的机构)
    - Xinzhe He (未说明具体机构，隶属于作者单位列表中的机构)
    - Huangxuan Wu (未说明具体机构，隶属于作者单位列表中的机构)
    - Junhao Shi (复旦大学, 上海创新研究院)
    - Kexin Huang (未说明具体机构，隶属于作者单位列表中的机构)
    - Zhaoye Fei (未说明具体机构，隶属于作者单位列表中的机构)
    - Jingjing Gong (上海创新研究院)
    - Zuxuan Wu (复旦大学, 上海创新研究院)
    - Yu-Gang Jiang (复旦大学)
    - See-Kiong Ng (新加坡国立大学)
    - Tat-Seng Chua (新加坡国立大学)
    - Xipeng Qiu (复旦大学, 上海创新研究院)

💡 **毒舌点评**

亮点：论文敏锐地抓住了“机器人不应只听命行事，更要察言观色”这一核心痛点，并给出了一个从数据集到模型架构的完整端到端解决方案，其构建的大规模多模态动作数据集OmniAction本身就有独立价值。
短板：所谓的“真实环境声音”大部分是靠TTS和音效库合成的“高保真拟音”，其与真实世界中充满偶然性、信噪比极低的环境音差距不小；此外，一个基于Qwen2.5-Omni的框架在需要极高鲁棒性的复杂现实场景中是否依然可靠，仅靠有限的10人WidowX实验说服力稍显不足。

🔗 **开源详情**

- 代码：论文提供GitHub仓库链接：https://github.com/OpenMOSS/RoboOmni。承诺将开源代码。
- 模型权重：承诺开源模型检查点。
- 数据集：承诺开源OmniAction数据集和OmniAction-LIBERO评估基准。
- Demo：论文中未提及在线演示。
- 复现材料：提供了详细的训练配置（第5.1节）、数据集构建过程（第3节及附录C）、模型架构描述（第4节）和评估设置，为复现提供了充分信息。
- 论文中引用的开源项目：
    - Qwen2.5-Omni（作为模型主干）
    - FAST+（动作token化工具）
    - LIBERO（模拟环境基准）
    - Open-X Embodiment（数据来源之一）
    - CosyVoice（TTS引擎）
    - MOSS-TTS（TTS引擎）
    - Gemini-TTS（TTS引擎）
    - Whisper (large-v3)（用于ASR基线）
    - DINOv2, SigLIP（用于VLA基线）
    - PaliGemma（用于π0基线）
- 开源计划：论文明确声明将公开所有数据集和代码（见摘要及第1页脚注）。

📌 **核心摘要**

1. 要解决什么问题：现有机器人操作模型大多依赖用户发出的明确指令，而无法像人类一样主动、从周围的多模态上下文（包括对话内容、说话语调、环境声音和视觉场景）中推断用户意图。
2. 方法核心是什么：提出了RoboOmni，一个基于端到端全模态大语言模型的Perceiver-Thinker-Talker-Executor框架。该框架能统一处理语音（含副语言特征）、环境音和视觉输入，实现意图识别、交互确认和动作执行的闭环。同时，构建了名为OmniAction的大规模多模态数据集（140k episodes）用于训练。
3. 与已有方法相比新在哪里：1）定义了新任务“跨模态上下文指令”，强调从多模态上下文主动推断意图；2）采用端到端模型，避免了级联系统（如ASR+VLA）的信息损失和延迟，能直接利用语调、情感等副语言线索；3）构建了首个支持此类任务的大规模、多类型指令数据集。
4. 主要实验结果如何：在模拟基准OmniAction-LIBERO-TTS上，RoboOmni平均成功率85.6%，远超最强文本基线NORA（25.9%）。在真实人类语音指令OmniAction-LIBERO-Real上，平均成功率76.6%，超越最强基线π0（73.8%）。在真实WidowX机器人实验中，成功率73.9%，显著高于ASR+VLA基线（52.2%）。意图识别准确率达88.89%。

| 模型/方法 (设置) | 数据集 | 指标 | 数值 |
| :--- | :--- | :--- | :--- |
| RoboOmni (全文本/ASR) | OmniAction-LIBERO-TTS (平均) | 成功率(%) | 85.6 / - |
| NORA (最强基线) | OmniAction-LIBERO-TTS (平均) | 成功率(%) | 25.9 |
| RoboOmni (音频输入) | OmniAction-LIBERO-Real (平均) | 成功率(%) | 76.6 |
| π0 (最强基线) | OmniAction-LIBERO-Real (平均) | 成功率(%) | 73.8 |
| RoboOmni | 真实机器人WidowX 250S (平均) | 成功率(%) | 73.9 |
| 最强ASR+VLA基线 | 真实机器人WidowX 250S (平均) | 成功率(%) | 52.2 |

5. 实际意义是什么：推动机器人从被动的指令执行器向能理解人类自然交流方式的主动助手演进，为更自然、高效的人机协作奠定了基础，并开源了重要的多模态数据集和模型。
6. 主要局限性是什么：训练数据和模拟评估环境主要基于合成生成，其与真实世界的“分布差距”可能影响模型在极端嘈杂、模糊场景下的鲁棒性；端到端框架依赖强大的omni-modal LLM骨干，计算资源要求较高。

---

### 🥈 [NExT-OMNI: Towards Any-to-Any Omnimodal Foundation Models with Discrete Flow Matching](/audio-paper-digest-blog/posts/2026-05-03-next-omni-towards-any-to-any-omnimodal-foundation)

🔥 **8.5/10** | 前10% | #多模态模型 | #流匹配 | #预训练 #音频生成

👥 **作者与机构**

- 第一作者：Run Luo（深圳先进技术研究院，中国科学院大学）
- 通讯作者：Xiaobo Xia（新加坡国立大学，中国科学技术大学），Min Yang（深圳先进技术研究院，中国科学院大学，深圳大学高级技术学院）
- 作者列表：Run Luo（深圳先进技术研究院，中国科学院大学），Xiaobo Xia（新加坡国立大学，中国科学技术大学），Lu Wang（Rtizz-AI），Longze Chen（深圳先进技术研究院，中国科学院大学），Renke Shan（Rtizz-AI），Jing Luo（深圳先进技术研究院，中国科学院大学），Min Yang（深圳先进技术研究院，中国科学院大学，深圳大学高级技术学院），Tat-Seng Chua（新加坡国立大学）

💡 **毒舌点评**

亮点：论文成功将离散流匹配这一新兴范式应用于构建全能态统一模型，跳出了自回归（AR）的固有局限，提供了一个更简洁、高效的“全能选手”架构，在跨模态检索和多轮交互上展现了AR模型不具备的潜力。短板：论文声称的“首个”或“优越性能”需要更审慎的对待，部分关键对比实验（如视觉交互）中的基线模型已非最新或最强状态，这在一定程度上削弱了其SOTA主张的绝对说服力。

🔗 **开源详情**

- 代码：提供代码仓库链接：https://github.com/ritzz-ai/Next-OMNI。
- 模型权重：论文中承诺“fully open-source”，并提到提供模型检查点，但未直接给出权重下载链接。预期将通过上述GitHub仓库发布。
- 数据集：论文中详细列出了所有使用的训练数据集名称和来源（见表8），大部分为公开数据集，部分为专有数据。论文未提及是否会发布策展后的数据集。
- Demo：论文中未提及提供在线演示。
- 复现材料：提供了非常充分的复现材料，包括：a) 详细的模型架构设计（附录D， 图4， 7）；b) 完整的三阶段数据策展详情（附录E， 表8）；c) 详细的训练超参数和配置（附录F， 表9）；d) 模型预热训练的消融实验（表6）和可视化结果（图5， 6）；e) 关键组件的消融研究（表5）。
- 论文中引用的开源项目/模型：CLIP-ViT-Large， Whisper-Turbo， Qwen2.5-7B， VQ-VAE， UniTok， WavTokenizer， LLaVA系列， PixMo， FLUX， MMEvol等。

📌 **核心摘要**

1. 问题：现有全能态模型大多基于自回归（AR）架构，存在理解和生成任务间的固有冲突，通常通过混合或解耦策略处理，导致架构冗余、不统一，限制了其在跨模态检索等更广泛场景的应用。
2. 核心方法：本文提出NExT-OMNI，一个完全基于离散流匹配（DFM）的开源全能态基础模型。它通过度量诱导的概率路径和动能最优速度进行建模，在统一的架构中并行地从完全损坏的序列迭代去噪，原生支持任何模态到任何模态的理解与生成。
3. 创新点：a) 首���完全基于DFM的开源全能态模型，支持文本、图像、视频、音频的任意交互，且推理效率更高；b) 设计了带重建损失增强的统一表征，并通过深层双向注意力进行特征融合，避免了额外的解耦模块，同时支持了跨模态检索和多轮交互；c) 引入动态长度生成策略和自适应缓存，在保持性能的同时加速了推理。
4. 主要实验结果：在全模态理解基准（OmniBench, WorldSense, AV-Odyssey）上平均得分（39.7）优于先前的统一模型OpenOmni（36.5）。在多轮语音交互（Spoken QA）和视觉交互（OpenING）基准上也取得了具有竞争力的表现。在跨模态检索任务（InfoSeek, OVEN等）上，NExT-OMNI（平均32.9）显著优于AR和混合架构模型（如Janus 26.6， Bagel 28.5）。消融实验证实了DFM、统一表征、动态生成策略和重建损失的有效性。
5. 实际意义：该工作为构建下一代多模态基础模型提供了一个更统一、高效的新范式，证明了DFM在统一理解、生成和检索任务上的巨大潜力，有望推动更自然、高效的人机交互系统发展。
6. 主要局限性：论文坦承，受资源限制，模型仅在7B参数规模和2T tokens数据上训练和验证，其全部潜力尚未展现；未来需要在更大规模的基础语言模型支持下进行探索。

---

### 🥉 [Omni-Reward: Towards Generalist Omni-Modal Reward Modeling with Free-Form Preferences](/audio-paper-digest-blog/posts/2026-05-03-omni-reward-towards-generalist-omni-modal-reward)

🔥 **8.0/10** | 前25% | #多模态模型 | #强化学习 | #基准测试 #数据集

👥 **作者与机构**

- 第一作者：Zhuoran Jin, Hongbang Yuan, Kejian Zhu （论文注明三者共同第一作者）
- 通讯作者：Jun Zhao （论文注明为通讯作者）
- 作者列表：Zhuoran Jin（清华大学人工智能学院，中国科学院自动化研究所复杂系统认知与决策智能重点实验室），Hongbang Yuan（同上），Kejian Zhu（同上），Jiachun Li（同上），Pengfei Cao（同上），Yubo Chen（同上），Kang Liu（同上），Jun Zhao（同上）

💡 **毒舌点评**

这篇论文的最大亮点在于首次构建了一个覆盖五大模态、支持自由形式偏好描述的系统性奖励建模评测与数据体系，直接戳中了当前奖励模型“偏科”且“一言堂”的痛点。但略显尴尬的是，其核心生成式奖励模型（Omni-RewardModel-R1）的探索深度有限，性能也未显著超越判别式版本，感觉像是为了概念完整性而做的初步尝试。

🔗 **开源详情**

- 代码：论文中提供了代码仓库链接：https://github.com/HongbangYuan/OmniReward
- 模型权重：论文中提到将开源Omni-RewardModel，并提供了Hugging Face链接（https://hf.co/datasets/HongbangYuan/OmniRewardBench 和 https://hf.co/datasets/jinzhuoran/OmniRewardData 链接指向数据集，模型权重链接未在文中明确，但根据上下文“我们将开源...模型”推断将提供）。
- 数据集：论文中提供了Omni-RewardBench和Omni-RewardData的Hugging Face链接，表明将公开。
- Demo：论文中未提及在线演示。
- 复现材料：论文提供了详细的实验设置、评估协议（两种设置w/o Ties和w/ Ties）、数据构建流程（图4，附录D）和标注指南（附录D.2），并在附录中补充了更多细节（如伦理声明、数据集统计等），复现材料较为充分。
- 论文中引用的开源项目：引用了多个开源模型和数据集，如MiniCPM-o-2.6, Qwen2.5-VL, Gemma-3, Skywork-Reward-Preference, RLAIF-V, HPDv2, VLFeedback等，但这些是作为基线或数据来源，并非本文开发的工具。

📌 **核心摘要**

1.  要解决什么问题：当前的多模态奖励模型（RM）面临两大挑战：一是“模态不平衡”，主要局限于文本和图像，对视频、音频、3D等模态支持不足；二是“偏好僵化”，基于二元偏好对训练的模型难以捕捉复杂、个性化的用户偏好。
2.  方法核心是什么：提出Omni-Reward框架，包含三个核心组件：Omni-RewardBench（首个支持自由形式偏好的全模态RM基准）、Omni-RewardData（包含通用与指令微调的多模态偏好数据集）以及Omni-RewardModel（包括判别式BT模型和生成式R1模型）。
3.  与已有方法相比新在哪里：这是首个在统一框架下，系统性地将奖励建模扩展到文本、图像、视频、音频、3D五种模态，并允许使用自然语言自由描述评估标准（自由形式偏好）的工作。它超越了以往工作在单一模态或固定偏好上的局限。
4.  主要实验结果如何：
    *   在自身的Omni-RewardBench上，Omni-RewardModel-BT在w/o Ties设置下达到73.68%准确率，在w/ Ties设置下达到65.36%，显著高于强基线（如Claude 3.5 Sonnet的66.54%）。
    *   在公共基准VL-RewardBench上，Omni-RewardModel-BT达到76.3%的SOTA准确率。
    *   消融实验表明，使用混合多模态数据训练和引入指令微调数据对模型性能和泛化能力至关重要。
    *   具体结果见下表：

    表1：在Omni-RewardBench (w/ Ties) 上的部分关键结果
    | 模型 | T2T | TI2T | TV2T | TA2T | T2I | T2V | T2A | T23D | TI2I | Overall |
    | :--- | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
    | Claude 3.5 Sonnet | 76.74 | 61.55 | 67.04 | - | 61.69 | 64.27 | - | 68.54 | 65.94 | 66.54 |
    | Gemma-3 27B | 77.22 | 61.17 | 67.04 | - | 59.14 | 61.44 | - | 63.91 | 65.94 | 65.12 |
    | Omni-RewardModel-BT | 75.30 | 60.23 | 68.85 | 70.59 | 58.35 | 64.08 | 63.99 | 67.88 | 58.95 | 65.36 |
    | Omni-RewardModel-R1 | 71.22 | 56.06 | 63.88 | - | 61.69 | 58.22 | - | 63.91 | 46.29 | 60.18 |

5.  实际意义是什么：为构建更通用、更灵活、能理解复杂人类偏好的多模态AI对齐系统提供了关键的基础设施（评测标准、训练数据）和模型范例，推动了奖励模型研究从“单一模态-固定偏好”向“全模态-自由偏好”的范式转变。
6.  主要局限性是什么：基准数据集规模（3.7K）仍属有限；任务类型虽多但定义相对粗粒度；偏好数据仅涉及单轮交互，未建模多轮对话场景；生成式奖励模型的强化学习训练仅为初步探索。

---

### 4. [Learning multimodal dictionary decompositions with group-sparse autoencoders](/audio-paper-digest-blog/posts/2026-05-03-learning-multimodal-dictionary-decompositions)

🔥 **8.0/10** | 前25% | #多模态模型 | #多任务学习 | #跨模态 #音频检索

👥 **作者与机构**

- 第一作者：Chiraag Kaushik (Georgia Institute of Technology)
- 通讯作者：未说明
- 作者列表：Chiraag Kaushik (Georgia Institute of Technology), Davis Barch (Dolby Laboratories), Andrea Fanelli (Dolby Laboratories)

💡 **毒舌点评**

亮点： 论文从理论和实践上系统性地解决了多模态稀疏自编码器的“分字典”痛点，并创新性地将分析扩展到了音频/文本（CLAP）领域，实验对比全面且结果显著。
短板： 理论证明中“非负稀疏编码”等假设较强，实验主要依赖固定的超参数（K=32，扩展因子16），未充分探讨模型在不同稀疏度下的行为变化及计算开销的增加。

🔗 **开源详情**

- 代码： 论文中未提及代码链接。
- 模型权重： 未提及。
- 数据集： 使用了公开数据集（CC3M， JamendoMaxCaps， MS COCO， MusicBench），论文中给出了获取途径的参考文献。
- Demo： 未提及。
- 复现材料： 提供了详尽的实验设置、超参数搜索过程、损失函数定义和评估方法。附录包含补充实验的详细结果表格。这为复现提供了良好基础。
- 论文中引用的开源项目： 引用了`dictionary_learning`库（Marks et al., 2024）作为TopK SAE的实现基础。其他引用的多为数据集和预训练模型（CLIP， CLAP）。
- 总体评价： 论文在方法描述和实验细节上非常透明，但未主动开源代码和模型，这使得“一键复现”成为不可能。

📌 **核心摘要**

1.  问题： 现有稀疏自编码器在分解CLIP等多模态对齐嵌入时，会学习出“分字典”，即大部分特征仅对单模态数据激活，这破坏了模态间的语义对齐，限制了其在跨模态任务中的解释和控制能力。
2.  方法核心： 提出群稀疏自编码器。核心是引入两项技术：1）基于配对样本的群稀疏损失（L2,1范数），强制不同模态的稀疏编码共享支持集；2）跨模态随机掩码，在编码前对不同模态输入应用相同的随机掩码，进一步鼓励共享特征。
3.  新意： 1）提出了多模态单义性度量（MMS） 来量化神经元的跨模态语义一致性；2）从理论上证明了在对齐嵌入空间上，分字典分解总存在一个模态对齐更好的非分字典分解；3）设计了结合群稀疏与掩码的新型训练流程，有效解决了现有SAE的偏向性。
4.  主要实验结果： 在CLIP（图像/文本）和CLAP（音乐/文本）嵌入上，相比标准SAE：死神经元显著减少；MMS分数大幅提升；零样本跨模态性能（如CIFAR-10分类）提升近20%。具体结果见下表。
    | 模型 | CIFAR-10 (ZS) | CIFAR-100 (ZS) | ImageNet (ZS) |
    | :--- | :--- | :--- | :--- |
    | SAE - TopK | 0.657 | 0.418 | 0.303 |
    | MGSAE (Ours) | 0.842 | 0.554 | 0.373 |
    | 原始CLIP | 0.916 | 0.687 | 0.686 |
5.  实际意义： 使从多模态嵌入中提取的概念（字典元素）本身具有跨模态一致性，从而可以更准确地解释模型（如概念命名）和进行可控操作（如通过修改“小提琴”神经元来引导音乐检索）。
6.  主要局限： 增加了群稀疏损失和掩码操作，可能略微增加训练复杂度；理论分析依赖于稀疏分解精确成立的假设；未评估在超大规模模型上的表现。

---

### 5. [MIAM: Modality Imbalance-Aware Masking for Multimodal Ecological Applications](/audio-paper-digest-blog/posts/2026-05-03-miam-modality-imbalance-aware-masking-for)

🔥 **8.0/10** | 前25% | #多模态模型 | #数据增强 | #鲁棒性 #生态应用

👥 **作者与机构**

- 第一作者：Robin Zbinden（洛桑联邦理工学院 EPFL，瑞士）
- 通讯作者：Robin Zbinden（洛桑联邦理工学院 EPFL，瑞士）
- 作者列表：Robin Zbinden（洛桑联邦理工学院 EPFL，瑞士）、Wesley Monteith-Finas（洛桑联邦理工学院 EPFL，瑞士）、Gencer Sumbul（洛桑联邦理工学院 EPFL，瑞士）、Nina van Tiel（洛桑联邦理工学院 EPFL，瑞士）、Chiara Vanalli（洛桑联邦理工学院 EPFL，瑞士）、Devis Tuia（洛桑联邦理工学院 EPFL，瑞士）。*表示共同第一作者。

💡 **毒舌点评**

论文针对生态领域多模态学习中数据不完整与模态不平衡的真实痛点，提出了一种理论上自洽、实验验证充分的动态掩码策略（MIAM），其设计巧妙地将掩码概率分布的构造与模态的实时学习状态挂钩，显著优于多种基线方法。然而，其对“模态不平衡”的量化定义（如性能比率）相对朴素，且论文在生态领域的成功案例（如NDVI分析）令人信服，但该方法在更广泛的多模态任务（如视觉-语言）中的普适性与竞争力尚需更多验证。

🔗 **开源详情**

- 代码：提供了代码仓库链接：https://github.com/zbirobin/MIAM。
- 模型权重：提供了预训练模型权重的下载地址：https://huggingface.co/zbirobin/MIAM。
- 数据集：使用的是已发表的公开数据集GeoPlant和TaxaBench，论文中给出了引用和获取说明。
- Demo：论文中未提及在线演示。
- 复现材料：论文在附录（A.1, A.3, A.4）中提供了详尽的训练细节、超参数设置、数据划分代码（Python代码片段）、基线方法实现细节以及额外的消融实验结果（如不同模型大小、自监督预训练设置），复现信息非常充分。
- 引用的开源项目：论文中引用了多个开源工具和模型，包括：AdamW优化器、schedule-free训练策略、verde库（用于空间交叉验证）、MultiMAE框架（用于自监督预训练实验）、来自TaxaBench的预训练编码器、以及ResNet-18等基础模型。

📌 **核心摘要**

这篇论文旨在解决多模态生态应用中数据模态间和模态内经常缺失，以及主导模态抑制其他模态学习（模态不平衡）的核心挑战。方法核心是提出了MIAM，一种动态、基于得分的掩码策略。与现有静态或仅模态级的掩码策略不同，MIAM的新颖之处在于：1）将掩码策略形式化为单位超立方体上的概率分布，并设计了一种基于混合Beta分布的“Beta超立方体”分布，以优先采样输入组合的“角落”（即近乎全有或全无）；2）引入基于模态独立性能及其学习速度（性能的绝对导数）的自适应调节系数，动态调整分布参数，对占主导的模态施加更高的掩码概率，从而缓解模态不平衡。主要实验结果表明，在GeoPlant（物种分布建模）和TaxaBench（多模态物种分类）两个数据集上，MIAM在平均AUC/准确率上显著优于其他掩码策略。例如，在GeoPlant上，MIAM的平均AUC为86.1%，比第二好的OPM（83.8%）高出2.3个百分点，并能有效提升受压制模态（如卫星图像）的性能。实际意义在于，MIAM不仅提高了模型在数据缺失情况下的鲁棒性和预测性能，还支持细粒度的贡献分析，能够揭示哪些具体变量、时间片段或图像区域对预测最重要，从而提供生态洞察（如确认NDVI和热浪事件的重要性）。主要局限性是，MIAM的有效性在更简单（如仅两个模态）的数据集上不明显，且其对生态外的多模态任务的泛化能力有待进一步研究。

---

### 6. [TINY BUT MIGHTY: A SOFTWARE-HARDWARE CO- DESIGN APPROACH FOR EFFICIENT MULTIMODAL IN- FERENCE ON BATTERY-POWERED SMALL DEVICES](/audio-paper-digest-blog/posts/2026-05-03-tiny-but-mighty-a-software-hardware-co-design)

✅ **7.5/10** | 前25% | #多模态模型 | #系统优化 | #大语言模型 #边缘计算

👥 **作者与机构**

- 第一作者：Yilong Li（University of Wisconsin – Madison）
- 通讯作者：未说明（论文未明确标注通讯作者）
- 作者列表：Yilong Li（University of Wisconsin – Madison）， Shuai Zhang（Amazon Web Services AI）， Yijing Zeng（University of Wisconsin – Madison）， Chengpo Yan（University of Wisconsin – Madison）， Hao Zhang（University of Wisconsin – Madison）， Xinmiao Xiong（University of Wisconsin – Madison）， Jingyu Liu（University of Wisconsin – Madison）， Pan Hu（Uber）， Suman Banerjee（University of Wisconsin – Madison）

💡 **毒舌点评**

这篇论文提供了一个将大型多模态模型“肢解”并塞进电池小设备的完整工程蓝图，从模型分解、异构调度到定制硬件，思路完整且实验数据显示了明确的节能效果，是一个扎实的系统级优化工作。但它的“里程碑”成色不足，验证严重依赖于Rockchip RK3566/3588这一特定硬件平台，框架的通用性和在主流消费级设备（如手机）上的可部署性未得到充分证明，更像一个成功的原型系统而非普适性方案。

🔗 **开源详情**

- 代码：论文中未提及代码链接。文中提到依赖的开源项目包括llama.cpp、Whisper.cpp、Piper、RKNN Toolkit2等，但NANOMIND本身的框架代码未开源。
- 模型权重：未提及。论文使用的是公开的预训练模型（如LLaVA-OneVision-Qwen2-0.5B），但未提供经过其框架适配或优化的权重。
- 数据集：未提及。实验使用了公开数据集（InfoVQA, DoCVQA, MMBench, MME, MegaFace），但未提供自定义数据集。
- Demo：论文中提到了在头戴设备上的原型部署（图12），但未提供在线演示链接。
- 复现材料：论文在附录中提供了硬件设计框图（图4）和PCB图，以及详细的实验测量方法描述，但缺乏完整的软硬件复现指南、驱动源码和配置文件。
- 论文中引用的开源项目：llama.cpp, Whisper.cpp, Piper, RKNN Toolkit2, NanoVLM, PowerInfer-2, MLC-LLM。

📌 **核心摘要**

1. 问题：在电池供电的小型边缘设备上运行大型多模态模型（LMM）面临高延迟、高功耗和内存瓶颈，现有方案大多采用单一加速器部署，未能充分利用片上系统（SoC）中的异构计算单元（NPU、GPU等）。
2. 方法：提出NANOMIND软硬件协同设计框架。其核心是将LMM分解为视觉编码器、投影器、语言解码器等独立模块，并根据各模块计算特性（如低比特张量运算 vs. 浮点并行计算）和硬件优势（NPU擅长整型运算，GPU擅长浮点并行），动态调度到最合适的加速器上执行。同时，设计了定制硬件（基于RK3566 SoC）和配套的系统级优化，如零拷贝缓冲区管理（TABM）和电池感知调度策略。
3. 新意：与现有仅关注软件量化或单一加速器优化的方案不同，NANOMIND提出了在统一内存（UMA）架构下进行模块级跨加速器动态卸载的完整解决方案，并结合了定制硬件设计，实现了深度的软硬件协同。
4. 实验结果：在自制设备上，运行LlaVA-OneVision-qwen2-0.5B模型，与基线（llama.cpp）相比，能耗降低42.3%，GPU内存使用减少11.2%。在低功耗事件触发模式下，2000mAh电池可支持约20.8小时运行。系统在吞吐量和延迟上优于或持平于在更强硬件（如RK3588）上运行的其他框架。关键数据见表1和图5-9。
5. 实际意义：证明了通过精心设计的软硬件协同方案，即使在低成本、低功耗的边缘芯片上，也能实现完全本地化、响应迅速的多模态智能助理，摆脱对云服务的依赖，保护用户隐私。
6. 主要局限性：系统验证高度依赖于自研的、基于Rockchip SoC的特定硬件原型；对其他主流移动平台（如Qualcomm、Apple Silicon）的支持仅为部分或理论分析；音频处理部分（Whisper, Piper）直接使用现有开源实现，未展示本框架对音频模态的深度优化。

---

### 7. [Better Together: Leveraging Unpaired Multimodal Data for Stronger Unimodal Models](/audio-paper-digest-blog/posts/2026-05-03-better-together-leveraging-unpaired-multimodal)

✅ **7.0/10** | 前25% | #多模态模型 | #自监督学习 | #少样本学习 #音频分类

👥 **作者与机构**

- 第一作者：Sharut Gupta (MIT CSAIL)
- 通讯作者：未说明
- 作者列表：Sharut Gupta (MIT CSAIL), Shobhita Sundaram (MIT CSAIL), Chenyu Wang (MIT CSAIL), Stefanie Jegelka (TU Munich, MIT CSAIL), Phillip Isola (MIT CSAIL)

💡 **毒舌点评**

本文的亮点在于用一套干净、统一的“权重共享”框架，从理论上严格证明了即使没有配对数据，来自其他模态的样本也能为当前模态的建模提供额外信息（甚至价值超过同模态样本），并且在多个基准上取得了稳健的增益，这无疑为“数据匮乏”场景下的多模态学习提供了一种新思路。但其短板也同样明显：核心机制（共享权重）本身非常简单，缺乏更精巧的架构或对齐设计，且实验主要集中在图像分类和少数音频任务上，对于如何解决优化中的模态冲突、推广到生成任务或处理语义完全无关的模态等问题讨论不足，使得这项工作的实际适用边界略显模糊。

🔗 **开源详情**

- 代码：论文中未提及代码仓库链接。提供了项目主页，但内容未知。
- 模型权重：未提及公开的预训练或微调后的模型权重。
- 数据集：使用的是公开数据集（如MultiBench, ImageNet-ESC等），未提及发布新数据集。
- Demo：未提供在线演示。
- 复现材料：论文附录（Appendix B）提供了详细的实验设置，包括硬件环境、数据集信息、训练协议（学习率、批次大小、优化器等）、超参数搜索范围，这为复现提供了重要信息。
- 引用的开源项目/模型：论文中提到了使用的预训练模型：DINOv2, CLIP, OpenLLaMA, BERT, GPT-2, AudioCLIP等，这些是重要的依赖项。
- 总体：论文中未提及具体的开源计划。项目主页可能包含部分信息，但根据提供的文本无法确认。

📌 **核心摘要**

1. 要解决的问题：传统多模态表示学习依赖昂贵的配对数据，而现实中存在大量未配对的多模态数据。本文探讨一个根本问题：能否利用来自辅助模态的未配对数据来直接增强目标模态的表示学习？
2. 方法核心：提出UML（Unpaired Multimodal Learner）。这是一个模态无关的训练框架，使用同一个模型（共享参数）交替处理不同模态的输入（如图像、文本）。通过权重共享，模型能够从不同模态的梯度中累积信息，从而隐式地利用跨模态结构，无需显式的对齐或配对。
3. 与已有方法相比新在哪里：
    - 理论上：在线性数据生成假设下，证明了未配对数据能严格增加共享参数方向上的Fisher信息，从而降低估计方差。甚至证明了在某些情况下，来自辅助模态的一个样本，对建模目标模态的价值超过同模态的一个额外样本。
    - 方法上：与需要显式对齐、成对数据或复杂生成目标��现有方法不同，UML仅通过简单的权重共享，在完全未配对的设置下实现了跨模态信息迁移。
    - 实验上：系统性地在自监督和监督（全数据、少样本）两种范式下验证了其有效性，覆盖了图像、文本和音频模态，并量化了模态间的“交换率”。
4. 主要实验结果：
    - 自监督（MultiBench等）：在5个数据集上，UML的图像表示在线性探测精度上均优于仅用图像训练的基线，平均提升约2-3个百分点（例如MUSTARD从59.66%提升至63.28%）。
    - 监督（图像分类）：在9个数据集上，UML在全量微调和少样本线性探测（k=1,2,4）设置下均持续优于单模态基线。少样本增益尤为明显（例如1-shot平均从45.52%提升至51.36%）。在分布外鲁棒性测试（如ImageNet变体）中也表现出更强的泛化能力。
    - 音频任务：在ImageNet-ESC数据集上，使用未配对的图像和文本数据进行联合训练，一致提升了音频分类的性能。
    - 模态交换率：在Oxford Pets上，使用CLIP编码器时，1张图像 ≈ 228个文本单词；使用未对齐的DINOv2+OpenLLaMA时，1张图像 ≈ 1034个文本单词。
5. 实际意义：为利用互联网上海量未配对的多模态数据（如独立的图像库和文本语料）提升特定模态模型性能提供了理论依据和实用算法。这在医疗、科学计算等领域（数据多模态但配对困难）具有潜在应用价值。
6. 主要局限性：实验主要聚焦于分类任务，未验证在生成任务中的效果；未深入探讨和解决多模态训练中已知的模态冲突和模态坍缩问题；方法的有效性依赖于模态间存在共享语义，对于语义无关的模态组合（实验证明）无效。

---

