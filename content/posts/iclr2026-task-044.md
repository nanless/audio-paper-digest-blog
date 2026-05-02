---
title: "ICLR 2026 - 音频检索 论文列表"
date: 2026-05-03
draft: false
tags: ["音频检索"]
categories: [iclr-2026]
description: "共 4 篇 ICLR 2026 音频检索 方向论文"
hiddenInHomeList: true
---

# ICLR 2026 - 音频检索

共 **4** 篇论文

[← 返回 ICLR 2026 总览](/audio-paper-digest-blog/posts/iclr2026-summary/)

---

| 排名 | 论文 | 评分 | 分档 |
|------|------|------|------|
| 🥇 | [OmniCVR: A Benchmark for Omni-Composed Video Retrieval with ](/audio-paper-digest-blog/posts/2026-05-03-omnicvr-a-benchmark-for-omni-composed-video) | 8.3分 | 前25% |
| 🥈 | [WAVE: Learning Unified & Versatile Audio-Visual Embeddings w](/audio-paper-digest-blog/posts/2026-05-03-wave-learning-unified-versatile-audio-visual) | 7.5分 | 前25% |
| 🥉 | [Beyond Instance-Level Alignment: Dual-Level Optimal Transpor](/audio-paper-digest-blog/posts/2026-05-03-beyond-instance-level-alignment-dual-level) | 7.5分 | 前25% |
| 4. | [SupCLAP: Controlling Optimization Trajectory Drift in Audio-](/audio-paper-digest-blog/posts/2026-05-03-supclap-controlling-optimization-trajectory-drift) | 6.5分 | 前25% |

---

## 📋 论文详情

### 🥇 [OmniCVR: A Benchmark for Omni-Composed Video Retrieval with Vision, Audio, and Text](/audio-paper-digest-blog/posts/2026-05-03-omnicvr-a-benchmark-for-omni-composed-video)

🔥 **8.3/10** | 前25% | #音频检索 | #多模态模型 | #对比学习 #基准测试

👥 **作者与机构**

- 第一作者：Junyang Ji（清华大学，快手科技实习；南方科技大学）
- 通讯作者：Zhihai He（南方科技大学），Wenming Yang（清华大学深圳国际研究生院）
- 作者列表：
    - Junyang Ji（清华大学，快手科技，南方科技大学）
    - Shengjun Zhang（快手科技）
    - Da Li（中国科学院大学，快手科技）
    - Yuxiao Luo（北京大学，快手科技）
    - Yan Wang（快手科技）
    - Di Xu（快手科技）
    - Biao Yang（快手科技）
    - Wei Yuan†（快手科技，项目负责人）
    - Fan Yang†（快手科技，项目负责人）
    - Zhihai He‡（南方科技大学，通讯作者）
    - Wenming Yang‡（清华大学深圳国际研究生院，通讯作者）

💡 **毒舌点评**

论文的亮点在于它为音视频社区敲响了警钟：在组合视频检索领域，我们长期以来“只看不说不听”，提出的OmniCVR基准像一面镜子，照出了当前多模态模型在音频推理上的严重短板。然而，其提出的AudioVLM2Vec模型更像一个“音频翻译官”（先将音频转为文本再融合），而非真正让模型“听见”并理解声音本身，这种绕道方案在信息无损性和推理效率上存在固有缺陷。

🔗 **开源详情**

- 代码：论文中未提及具体的代码仓库链接，但“可复现性声明”中承诺将发布完整代码库（包括数据生成脚本、训练和评估代码）。
- 模型权重：论文中提到将发布AudioVLM2Vec的代码，但未明确是否公开训练好的模型权重文件。
- 数据集：论文明确表示OmniCVR基准（160k+ clips，50k+ triplets，gold-standard test set）将在论文发表后完全开源，并提供了HuggingFace数据集链接：https://huggingface.co/datasets/Jun-Yang/OmniCVR。
- Demo：论文中未提及在线演示。
- 复现材料：论文在附录G中提供了详细的构建提示词，在“可复现性声明”中列出了将要公开的材料（代码、数据、评估协议），为复现提供了良好基础。
- 论文中引用的开源项目：PySceneDetect（视频分割），Qwen2.5-Omni（标注），Gemini 2.5 Pro（验证），CLIP/CLAP（相似度计算），Qwen2-Audio-7B-Instruct和Qwen2-VL（模型骨干）。

📌 **核心摘要**

1. 问题：现有的组合视频检索（CoVR）基准仅关注视觉和文本，完全忽略了音频（如对话、音乐、音效）在视频语义中的关键作用，无法评估模型对多模态联合变换的推理能力。
2. 方法核心：提出首个全模态组合视频检索基准OmniCVR，以及一个音频感知的检索模型AudioVLM2Vec。OmniCVR包含5万组三元组（源视频、修改文本、目标视频），涵盖视觉中心、音频中心和视觉音频联合修改三类查询。
3. 与已有方法相比新在哪里：OmniCVR是首个将音频提升为与视觉、文本同等重要的一等模态的大规模检索基准。AudioVLM2Vec模型通过显式地将音频内容转写为详细文本描述，再将其与用户修改指令融合输入视觉语言模型，从而赋予检索模型强大的音频感知能力。
4. 主要实验结果：在OmniCVR基准上，AudioVLM2Vec在整体查询和音频中心查询上均达到最优（SOTA）。如表4所示，在整体查询上，其R@1为66.98%，大幅领先VLM2Vec的38.44%。如表5所示，在音频中心查询上，其R@1高达77.2%，而VLM2Vec仅为12.4%，证明了音频信息注入的决定性作用。消融实验（表7）也证明，移除源视频会导致性能暴跌，验证了任务组合推理的本质。
5. 实际意义：该工作推动了视频检索研究从“视觉-文本”向“视觉-音频-文本”全模态理解范式转变，为开发更全面的视频搜索引擎提供了关键基准和初步解决方案。
6. 主要局限性：模型的推理延迟因引入音频转文本步骤而增加（约2.7倍于VLM2Vec）。此外，音频转为文本可能丢失部分非语义的声学特征，且端到端联合表示学习的能力仍待探索。

---

### 🥈 [WAVE: Learning Unified & Versatile Audio-Visual Embeddings with Multimodal LLM](/audio-paper-digest-blog/posts/2026-05-03-wave-learning-unified-versatile-audio-visual)

✅ **7.5/10** | 前25% | #音频检索 | #对比学习 | #多模态模型 #视频检索

👥 **作者与机构**

- 第一作者：Changli Tang (清华大学)
- 通讯作者：Chao Zhang (清华大学)
- 作者列表：Changli Tang (清华大学)， Qinfan Xiao (清华大学)， Ke Mei (腾讯微信视觉)， Tianyi Wang (腾讯微信视觉)， Fengyun Rao (腾讯微信视觉)， Chao Zhang (清华大学)

#

💡 **毒舌点评**

亮点：这篇工作首次真正将文本、音频、视频统一到基于大语言模型（LLM）的单一嵌入空间，并实现了“任何到任何”的跨模态检索，架构设计（层次融合、双音频编码器）和联合训练策略带来了实打实的性能提升，在多个基准测试上达到SOTA。短板：论文对WAVE在基础多模态理解能力上可能存在的“灾难性遗忘”或性能下降（这是许多嵌入模型的通病）讨论不足，仅在音频问答上提及超越基础模型，缺乏系统性对比和分析，可能隐藏了统一表征带来的某些权衡。

#

🔗 **开源详情**

- 代码：论文明确声明将开源代码，提供了GitHub仓库链接：https://github.com/TCL606/WAVE。但论文阅读时未提及代码是否已发布。
- 模型权重：论文承诺发布模型检查点（checkpoints），但未明确是否已公开。
- 数据集：训练数据主要来自公开数据集（Panda-70M, MSR-VTT, AudioCaps等），但论文提及对Panda-70M进行了重标注。未提及是否公开重标注后的数据。
- Demo：论文中未提及在线演示链接。
- 复现材料：论文提供了详细的模型规格（3.1节）、训练规格（4.2节）、评估规格（4.3节）以及附录中的推理流程（B）、更多结果（C）、案例研究（D），复现信息较为充分。
- 论文中引用的开源项目：主要引用了预训练模型：Qwen2.5-Omni（骨干）、BEATs（音频编码器）、InternVL-2.5-8B（用于视频重标注）、Whisper（隐含于Qwen2.5-Omni的语音编码器）。以及相关数据集和评估基准。

📌 **核心摘要**

本文旨在解决现有基于多模态大语言模型（MLLM）的嵌入模型主要聚焦于静态图像，而未能构建一个统一的、能处理文本、音频和视频（包括同步音视频）的表征空间的问题。为此，论文提出了WAVE，一个基于Qwen2.5-Omni构建的统一音视频嵌入MLLM。其核心创新在于：1）采用层次特征融合策略，聚合LLM多层输出的最后token特征，以捕获从低级感知到高级语义的综合信息；2）采用双编码器（语音编码器+音频事件编码器）处理音频，并通过交错策略输入LLM；3）实施联合多模态、多任务训练，同时进行跨模态检索和问答任务，使模型能生成通用嵌入和基于指令的提示感知嵌入。与以往分离编码器或仅处理图像的模型相比，WAVE首次实现了对四种模态（文本、音频、静音视频、音视频）的统一建模。实验结果表明，WAVE在MMEB-v2视频基准上达到SOTA（Overall 59.9），在音频检索（AudioCaps R@1 44.2）和音视频检索（VGGSound R@1 25.0）上也优于强基线。其提示感知能力在视频问答任务（平均72.5%准确率）上显著超越现有嵌入模型。消融实验证实了联合训练和层次融合的有效性。论文的意义在于开启了通用音视频表征学习的新方向，为任何到任何的跨模态应用奠定了基础。主要局限性包括对基础模型能力变化的讨论有限，以及训练数据中存在对Panda-70M视频进行重标注可能引入的噪声或偏差。

#

---

### 🥉 [Beyond Instance-Level Alignment: Dual-Level Optimal Transport for Audio-Text Retrieval](/audio-paper-digest-blog/posts/2026-05-03-beyond-instance-level-alignment-dual-level)

✅ **7.5/10** | 前25% | #音频检索 | #对比学习 | #跨模态 #鲁棒性

👥 **作者与机构**

- 第一作者：Wenqi Guo（上海交通大学）
- 通讯作者：Shikui Tu（上海交通大学），Lei Xu（上海交通大学，广东人工智能与数字经济实验室（深圳））
- 作者列表：Wenqi Guo（上海交通大学）、Shikui Tu（上海交通大学）、Lei Xu（上海交通大学，广东人工智能与数字经济实验室（深圳））

💡 **毒舌点评**

亮点：巧妙地将最优传输从实例匹配扩展到特征通道对齐，并引入基于统计量的可靠性权重来“过滤”噪声通道，为解决小批次训练下的特征噪声问题提供了一个优雅且理论自洽的方案。短板：虽然声称GPU内存开销可忽略，但计算特征级运输计划Pb需要在每个小批次解决一个du×dv的UOT问题，当特征维度d很大时（如768或1024），这可能成为训练速度的瓶颈，论文对此讨论不足。

🔗 **开源详情**

- 代码：论文中未提及代码仓库链接。
- 模型权重：论文中未提及公开的模型权重。
- 数据集：使用了公开数据集AudioCaps， Clotho和ESC-50，论文中未提供这些数据集的新版本或处理脚本。
- Demo：论文中未提供在线演示。
- 复现材料：提供了详细的训练伪代码（Algorithm 1）、超参数配置（Table 6, Appendix G）、各消融实验的具体设置以及关键组件（RAM）的计算公式（Appendix B）。这对于复现论文工作非常有帮助。
- 论文中引用的开源项目：论文引用了CLIP（Radford et al., 2021）、ONE-PEACE（Wang et al., 2023）、VAST（Chen et al., 2023）等作为基线，但未说明其实现依赖于这些项目的开源代码。
- 总体情况：论文提供了充分的复现信息（伪代码、超参数、实验设置），但未主动开源代码和模型。

📌 **核心摘要**

1. 要解决什么问题：现有的跨模态检索方法（如对比损失）通常只关注实例级对齐，并隐式假设所有嵌入维度同等重要。在小批次训练和数据标签稀缺/有噪声的情况下，这种假设会放大噪声，导致对齐信号不稳定和性能下降。
2. 方法核心是什么：论文提出了DART（双层鲁棒传输对齐）框架，通过引入特征级正则化来增强传统的实例级对齐。核心是利用非平衡Wasserstein距离（UWD） 来最小化音频和文本特征在通道分布上的差异，并设计了可靠性感知边缘（RAM），根据通道的跨模态一致性、方差和峰度等统计量自适应地加权特征通道，强调稳定语义通道，抑制噪声通道。
3. 与已有方法相比新在哪里：新在将最优传输的应用从“样本-样本”层面扩展到了“特征通道-特征通道”层面，并引入数据驱动的可靠性权重作为OT问题的先验。理论分析表明，特征级目标的集中界由运输计划的Frobenius范数控制，比实例级目标所依赖的最大距离Dmax更紧、更鲁棒。
4. 主要实验结果如何：在AudioCaps和Clotho两个主要音频-文本检索基准上，DART在R@1和R@10指标上达到���当时最先进的性能。例如，在AudioCaps数据集上，使用ResNet38-BERT编码器，DART w/ RAM的T→A R@1比最强基线Luong et al. (2024)高4.55个百分点（55.27% vs 49.94%），A→T R@1高1.1个百分点（41.67% vs 40.20%）。在挑战场景（小批量大小=32、20%-40%噪声标签、20%-40%无标签数据）下，DART表现出显著的鲁棒性优势。此外，在ESC-50数据集的零样本声音事件检测任务上，DART的R@1（80.75%）也优于其他损失函数（三元组损失71.25%，对比损失72.25%）。DART还初步展示了在图像-文本检索任务（MSCOCO）上的迁移能力。

| 方法 | 编码器 | T→A (AuC) R@1 | A→T (AuC) R@1 | T→A (Clo) R@1 | A→T (Clo) R@1 |
| :--- | :--- | :--- | :--- | :--- | :--- |
| Luong et al., 2024 | ResNet38+BERT | 39.10 | 49.94 | 16.65 | 22.10 |
| DART w/ RAM | ResNet38+BERT | 41.67 | 55.27 | 17.18 | 23.54 |
| Chen et al., 2023 | Beats+BERT | 54.2 | 66.9 | 36.7 | 25.9 |
| DART w/ RAM | Beats+BERT | 56.9 | 72.1 | 37.5 | 27.9 |

5. 实际意义是什么：DART提出了一种更稳健的跨模态表示学习范式，特别适用于现实世界中常见的小批量训练（节省内存）和数据标签不完美的场景。其通道可靠性评估机制也为理解和解释跨模态表示提供了新的视角。
6. 主要局限性是什么：计算特征级运输计划会引入额外的计算开销，可能影响训练速度，尤其是在高维特征或超大批量设置下。RAM的计算依赖于小批次统计量，虽经EMA平滑，但仍可能受采样波动影响。论文虽然讨论了内存开销，但未详细分析训练时间的增加。

---

### 4. [SupCLAP: Controlling Optimization Trajectory Drift in Audio-Text Contrastive Learning with Support Vector Regularization](/audio-paper-digest-blog/posts/2026-05-03-supclap-controlling-optimization-trajectory-drift)

✅ **6.5/10** | 前25% | #音频检索 | #对比学习 | #预训练 #多语言

👥 **作者与机构**

- 第一作者：Jiehui Luo（中央音乐学院），Yuguo Yin（北京大学）*（论文注明两人贡献相等）
- 通讯作者：Yuguo Yin（北京大学）
- 作者列表：Jiehui Luo（中央音乐学院）、Yuguo Yin（北京大学）、Yuxin Xie（北京大学）、Jinghan Ru（北京大学）、Xianwei Zhuang（北京大学）、Minghua He（北京大学）、Aofan Liu（北京大学）、Zihan Xiong（电子科技大学）、Dongchao Yang（香港中文大学）

💡 **毒舌点评**

亮点：将对比学习的梯度分解为“拉力”和“推力”，并犀利指出“推力”的垂直分量是导致训练不稳定的“双刃剑”，这一理论洞察清晰且富有启发性，为设计正则化项提供了坚实依据。
短板：所提SVR方法本质上是对InfoNCE损失增加了一个设计精巧的辅助项，属于“优化技巧”层面的改进，对模型架构或表征学习范式没有根本性革新，其普适性和在更大规模模型上的效果有待验证。

🔗 **开源详情**

- 代码：论文中未提及代码链接。
- 模型权重：未提及公开训练好的SupCLAP模型权重。
- 数据集：使用了公开的AudioCaps, Clotho, ESC-50, US8K等数据集，多语言版本为论文作者翻译，获取方式未详细说明。
- Demo：未提及。
- 复现材料：提供了详细的实验设置（优化器、学习率、批大小、温度、硬件等）和超参数（SVR权重α，约束权重β），以及关键架构信息（编码器型号、MLP层数）。但缺少预处理脚本、具体模型配置文件等。
- 论文中引用的开源项目：音频编码器CED-Base (Dinkel et al., 2024)， 文本编码器SONAR-TE (Duquenne et al., 2023)， 基线模型SigLIP (Zhai et al., 2023)， 预训练权重来源ML-CLAP (Yan et al., 2024)。
- 整体开源情况：论文中未提及具体的开源计划（如GitHub仓库）。

📌 **核心摘要**

1. 本文针对音频-文本对比预训练（CLAP）中标准InfoNCE损失导致的“优化轨迹漂移”问题展开研究。作者发现，负样本推力的垂直于正样本拉力的分量是导致训练不稳定和收敛缓慢的“双刃剑”。
2. 方法核心是提出支持向量正则化（SVR）。通过构造一个沿正样本拉力方向偏移原始文本嵌入的“支持向量”，并增加一项基于该支持向量的辅助对比损失，来主动抑制负样本推力中的垂直分量，从而稳定优化轨迹。
3. 与已有方法（InfoNCE， SigLIP）相比，新在两点：一是首次从“力分解”视角系统分析并量化了优化轨迹漂移；二是设计了SVR这一即插即用的正则化模块，并探索了两种无需监督的语义半径R建模策略（静态和动态）。
4. 实验在AudioCaps和Clotho数据集上的单语、多语言音频-文本检索，以及ESC-50等数据集的零样本分类任务上进行。主要结果显示，所提出的`bi-DynamicSVR`显著超越了基线。例如在AudioCaps数据集上，`InfoNCE-bi-DynamicSVR`相比`InfoNCE`基线，文本到音频检索的R@1从41.87%提升至44.16%，音频到文本检索的R@1从56.72%提升至59.66%。在零样本分类上，ESC-50数据集Top-1准确率从89.6%提升至92.1%。消融实验验证了双向SVR和约束项的有效性。
5. 实际意义：该方法以极低的额外计算开销（几乎可忽略的训练时间和显存增加），稳定了对比学习的训练过程，提升了模型在检索和分类等下游任务上的性能，可直接应用于现有CLAP模型的训练优化。
6. 主要局限性：SVR的有效性高度依赖于语义半径R的建模质量；该方法主要针对优化过程，不改变模型的推理管道和最终架构，因此对模型表征的最终“容量”上限影响有限；实验主要在中等规模数据集（AudioCaps, Clotho）上进行，在大规模网络噪声数据上的效果仍需进一步验证。

---

