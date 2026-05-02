---
title: "ICLR 2026 - 音频检索 论文列表"
date: 2026-05-02
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
| 🥇 | [MindMix: A Multimodal Foundation Model for Auditory Percepti](/audio-paper-digest-blog/posts/2026-05-02-mindmix-a-multimodal-foundation-model-for) | 8.5分 | 前25% |
| 🥈 | [OmniCVR: A Benchmark for Omni-Composed Video Retrieval with ](/audio-paper-digest-blog/posts/2026-05-02-omnicvr-a-benchmark-for-omni-composed-video) | 8.5分 | 前25% |
| 🥉 | [Beyond Instance-Level Alignment: Dual-Level Optimal Transpor](/audio-paper-digest-blog/posts/2026-05-02-beyond-instance-level-alignment-dual-level) | 8.0分 | 前25% |
| 4. | [SupCLAP: Controlling Optimization Trajectory Drift in Audio-](/audio-paper-digest-blog/posts/2026-05-02-supclap-controlling-optimization-trajectory-drift) | 7.5分 | 前25% |

---

## 📋 论文详情

### 🥇 [MindMix: A Multimodal Foundation Model for Auditory Perception Decoding via Deep Neural-Acoustic Alignment](/audio-paper-digest-blog/posts/2026-05-02-mindmix-a-multimodal-foundation-model-for)

🔥 **8.5/10** | 前25% | #音频检索 | #多模态模型 | #对比学习 #自监督学习

👥 **作者与机构**

- 第一作者：Rui Liu（香港理工大学）
- 通讯作者：Jibin Wu（香港理工大学）
- 作者列表：Rui Liu（香港理工大学）、Zhige Chen（香港理工大学）、Shu Peng（香港理工大学）、Wenlong You（香港理工大学）、Zhi-An Huang（香港城市大学（东莞））、Jibin Wu（香港理工大学）、Kay Chen Tan（香港理工大学）

💡 **毒舌点评**

本文的核心创新“跨模态低秩对齐”（CALRA）模块设计得颇为精巧，通过类型感知、双向注意力与低秩融合的协同，确实实现了EEG与音频深度对齐，实验上也展示了“碾压式”的性能优势。然而，论文将几乎所有功劳归于这个对齐模块和多模态预训练，却轻描淡写地忽略了其巨大的模型规模（97M参数，是多数EEG基线模型的数十倍）和对高质量配对数据的强依赖，这些在现实部署中都是沉重的负担。

🔗 **开源详情**

- 代码：提供代码仓库链接：https://github.com/CookieMikeLiu/MindMix。
- 模型权重：论文中未明确提及是否公开预训练或微调后的模型权重。
- 数据集：所有使用的数据集均为公开数据集，论文详细列出了各数据集的名称和来源。
- Demo：论文中未提及提供在线演示。
- 复现材料：提供了详尽的训练细节、超参数配置（Table A2）、分阶段的训练策略说明、评估指标定义以及数据预处理流程，复现材料非常充分。
- 论文中引用的开源项目：使用了预训练的Wav2Vec 2.0模型作为音频编码器，并引用了PyTorch等深度学习框架。

📌 **核心摘要**

1. 解决的问题：现有EEG基础模型（如EEGPT, LaBraM）在听觉解码任务上表现不佳，因其为单模态预训练，缺乏与听觉刺激信息的深度耦合，导致泛化能力受限。
2. 方法核心：提出MindMix，一个两阶段的多模态基础模型。第一阶段，在大规模EEG数据上预训练一个高容量的EEG编码器。第二阶段，利用一个新颖的“跨注意力低秩对齐”（CALRA）模块，在配对的EEG-音频数据上通过对比学习，学习深度对齐的神经-声学表示。
3. 创新之处：这是首个专为学习精细对齐的神经-声学表示而设计的多模态基础模型。核心创新是CALRA模块，它超越了简单的投影对齐，通过类型特定对齐器、双向交叉注意力和共享低秩瓶颈融合，实现了模态间的深度交互。
4. 实验结果：MindMix在多个听觉解码任务上大幅超越所有基线。在语音注意力解码（KUL数据集）上平衡准确率高达99.82%，最强基线DARNet为94.81%。在情感分析（HR-EEG4EMO数据集）上达到88.78%，比LaBraM高近16个百分点。关键对比数据如下表所示：

| 任务 | 数据集 | 方法 | 平衡准确率 | 加权F1分数 |
| :--- | :--- | :--- | :--- | :--- |
| 语音注意力解码 | KUL | DARNet | 0.9481 ± 0.036 | 0.9567 ± 0.025 |
| 语音注意力解码 | KUL | MindMix | 0.9982 ± 0.008 | 0.9991 ± 0.004 |
| 情感分析 | HR-EEG4EMO | LaBraM | 0.7295 ± 0.082 | 0.7829 ± 0.081 |
| 情感分析 | HR-EEG4EMO | MindMix | 0.8878 ± 0.045 | 0.8869 ± 0.046 |
| 音乐检索 | MAD-EEG | CBraMod | 0.8011 (Duo Acc.) | 0.7654 (Trio Acc.) |
| 音乐检索 | MAD-EEG | MindMix | 0.9475 (Duo Acc.) | 0.8824 (Trio Acc.) |

5. 实际意义：为非侵入式听觉脑机接口和跨模态神经解码建立了强大的基准，推动了从“信号处理”到“神经-声学语义对齐”的研究范式转变。
6. 主要局限性：论文明确指出，当前大规模配对EEG-音频数据的稀缺是制约该领域发展的首要瓶颈，也限制了对模型扩展规律的研究。

---

### 🥈 [OmniCVR: A Benchmark for Omni-Composed Video Retrieval with Vision, Audio, and Text](/audio-paper-digest-blog/posts/2026-05-02-omnicvr-a-benchmark-for-omni-composed-video)

🔥 **8.5/10** | 前25% | #音频检索 | #多模态模型 | #基准测试 #跨模态

👥 **作者与机构**

- 第一作者：Junyang Ji（清华大学、快手科技、南方科技大学）
- 通讯作者：Zhihai He（南方科技大学）、Wenming Yang（清华大学）
- 作者列表：Junyang Ji（清华大学、快手科技、南方科技大学）、Shengjun Zhang（快手科技）、Da Li（快手科技、中国科学院大学）、Yuxiao Luo（快手科技、北京大学）、Yan Wang（快手科技）、Di Xu（快手科技）、Biao Yang（快手科技）、Wei Yuan（快手科技）、Fan Yang（快手科技）、Zhihai He（南方科技大学）、Wenming Yang（清华大学）

💡 **毒舌点评**

本文核心贡献在于填补了组合视频检索基准中“音频模态缺失”的空白，并提出了一个扩展模型，其消融实验设计（如“盲目检索”、控制OmniEmbed骨干网络的音频表征方式）颇具巧思，有力地论证了“显式音频语义”的关键性。然而，其模型的核心创新“Audio-as-Text”在工程上略显“取巧”，完全依赖于现有大模型（Qwen2-Audio）的能力，并未在音频表征学习本身提出新方法，且额外的转录步骤带来了显著的延迟开销。

🔗 **开源详情**

- 代码：论文中提供了GitHub仓库链接：https://github.com/Kuaishou-Reasearch/OmniCVR，并声明将开源完整代码库。
- 模型权重：论文中声明将开源AudioVLM2Vec的模型权重。
- 数据集：论文中声明OmniCVR基准（包括160k+片段、50k+三元组和黄金测试集）将在发表后完全开源，数据集链接为：https://huggingface.co/datasets/Jun-Yang/OmniCVR。
- Demo：论文中未提及。
- 复现材料：论文提供了详细的数据生成流程、所有使用的提示词（见附录G）、以及对训练设置（基于开源预训练权重）的描述，为复现提供了良好基础。但部分具体训练超参数未在文中说明。
- 论文中引用的开源项目/模型：Qwen2-Audio, Qwen2-VL, Qwen2.5-Omni, PySceneDetect, CLIP, CLAP, Gemini 2.5 Pro等。

📌 **核心摘要**

1. 要解决什么问题：现有的组合视频检索（CoVR）基准和方法主要关注视觉与文本的对齐，系统性地忽略了音频模态（语音、音乐、环境声）在视频理解中的关键作用，导致无法评估模型在需要同时修改视觉和音频的复杂现实场景中的检索能力。
2. 方法核心是什么：论文提出了OmniCVR基准，这是首个将视觉、音频和文本视为同等重要模态的大规模组合视频检索基准。同时，提出了一种名为AudioVLM2Vec的模型，该模型通过将音频轨道转录为细粒度文本描述，并将其与视觉信息和用户查询一同输入大语言模型骨干，从而显式地注入音频语义。
3. 与已有方法相比新在哪里：1) 任务定义：首次定义了“全模态组合检索”，涵盖视觉中心、音频中心和集成型查询；2) 数据构建：设计了一套包含内容感知分割、全模态标注和由大模型与人类专家双重验证的自动化数据生成流程；3) 模型架构：提出了一种将原始音频转换为文本描述再与视觉信息融合的简单但有效的音频表征学习范式，区别于其他“全模态”模型（如ImageBind、OmniEmbed）直接处理原始音频token的方式。
4. 主要实验结果如何：AudioVLM2Vec在OmniCVR基准上取得了全面的最佳性能。例如，在整体查询上R@1达到66.98%，比强基线VLM2Vec（38.44%）高出28.54个百分点；在音频中心查询上R@1达到77.2%，而VLM2Vec仅为12.4%。消融实验证明，移除源视频会导致性能暴跌，证实了任务对组合推理的严格要求；将OmniEmbed的骨干从原生音频token替换为Audio-as-Text机制，其R@1从13.6%大幅提升至32.7%。
5. 实际意义是什么：该工作为评估和推动真正具备多模态理解能力的视频检索系统建立了新的标准，揭示了当前最先进模型在音频理解和组合推理上的重大缺陷，并证明了将音频转化为语义文本是提升相关性能的有效途径，对智能视频搜索、内容审核、跨模态生成等应用具有指导意义。
6. 主要局限性是什么：1) 推理效率：引入的音频转录步骤显著增加了推理延迟（从1.72s增加到4.77s），限制了实时应用；2) 音频表征依赖：性能高度依赖于Qwen2-Audio的转录质量，可能引入偏差或错误；3) 任务范围：专注于检索任务，未探索音频修改指令的生成等更复杂的交互。

---

### 🥉 [Beyond Instance-Level Alignment: Dual-Level Optimal Transport for Audio-Text Retrieval](/audio-paper-digest-blog/posts/2026-05-02-beyond-instance-level-alignment-dual-level)

🔥 **8.0/10** | 前25% | #音频检索 | #最优传输 | #对比学习 #鲁棒性

👥 **作者与机构**

- 第一作者：Wenqi Guo（上海交通大学）
- 通讯作者：Shikui Tu（上海交通大学），Lei Xu（上海交通大学，深圳人工智能与数字经济广东省实验室）
- 作者列表：Wenqi Guo（上海交通大学）、Shikui Tu（上海交通大学）、Lei Xu（上海交通大学，深圳人工智能与数字经济广东省实验室）

💡 **毒舌点评**

这篇论文的亮点在于它聪明地将最优传输（OT）从“实例级对齐”推广到“特征级正则化”，为解决小批量训练下的噪声敏感性问题提供了新颖且理论扎实的视角，实验结果在多个基准上确实很强。然而，其短板也很明显：提出的“可靠性感知边缘分布”计算依赖于批次统计量，在实际大规模分布式训练中的稳定性和计算开销可能成为落地隐患，且论文未提供代码，复现门槛较高。

🔗 **开源详情**

- 代码：论文中未提及代码仓库链接。
- 模型权重：未提及公开模型权重。
- 数据集：使用的AudioCaps, Clotho, ESC-50均为公开数据集，论文中给出了获取来源引用。
- Demo：未提及在线演示。
- 复现材料：提供了极其详细的复现材料：完整的训练算法伪代码（算法1）、所有实验的超参数设置（表6）、可靠性分数计算的具体公式（附录B）、理论证明（附录C）、以及所有消融和敏感性实验（表5, 7-13）。
- 论文中引用的开源项目：引用了Sinkhorn算法（Cuturi, 2013），并使用了预训练的编码器（如BERT, Beats等）。

📌 **核心摘要**

1. 问题：现有的跨模态检索（如音频文本检索）方法主要依赖实例级对齐（如对比损失），隐含假设所有特征维度贡献相等。在小批量训练和标签稀缺时，这种假设会放大噪声，导致对齐信号不稳定且有偏差。
2. 方法核心：提出DART（Dual-level Alignment via Robust Transport）框架，在实例级对齐（基于逆最优传输IOT）的基础上，增加了基于非平衡Wasserstein距离（UWD）的特征级正则化。同时，设计了“可靠性感知边缘分布”，根据通道的跨模态一致性、方差和峰度统计量，自适应地为特征通道赋权，以抑制噪声通道。
3. 创新点：首次将OT视角从样本对齐拓展到特征通道对齐；引入可靠性先验引导特征级运输计划；提供了理论分析，证明特征级目标比实例级目标具有更紧的集中界，对异常值和噪声更鲁棒。
4. 实验结果：在AudioCaps、Clotho两个音频文本检索基准和ESC-50零样本声音事件检测任务上，DART均取得了SOTA性能。例如，在AudioCaps上，与最强基线相比，文本到音频R@1提升1.1%，音频到文本R@1提升4.5%。在小批量（k=32）和40%标签缺失的困难设定下，性能下降幅度显著小于基线方法（见表2）。
5. 实际意义：为资源受限（小批量训练）或数据质量不高（标签噪声）场景下的跨模态检索提供了更鲁棒的解决方案，提升了模型在实际应用中的可靠性和泛化能力。
6. 主要局限性：引入的特征级正则化和可靠性计算增加了训练时的计算复杂度（虽然论文分析内存开销可控）。可靠性估计依赖于小批量统计，其稳定性有待更广泛验证。此外，论文未开源代码。

---

### 4. [SupCLAP: Controlling Optimization Trajectory Drift in Audio-Text Contrastive Learning with Support Vector Regularization](/audio-paper-digest-blog/posts/2026-05-02-supclap-controlling-optimization-trajectory-drift)

✅ **7.5/10** | 前25% | #音频检索 | #对比学习 | #多语言 #预训练

👥 **作者与机构**

- 第一作者：Jiehui Luo（中央音乐学院，2∗）
- 通讯作者：Yuguo Yin（北京大学，1†）
- 作者列表：
  - Jiehui Luo（中央音乐学院）
  - Yuguo Yin（北京大学）
  - Yuxin Xie（北京大学）
  - Jinghan Ru（北京大学）
  - Xianwei Zhuang（北京大学）
  - Minghua He（北京大学）
  - Aofan Liu（北京大学）
  - Zihan Xiong（电子科技大学）
  - Dongchao Yang（香港中文大学）

💡 **毒舌点评**

本文的亮点在于从优化动力学的角度（力分解）为对比学习中的“轨迹漂移”现象提供了新颖的理论解释，并据此设计出简洁有效的SVR正则化方法，理论自洽且实验证据扎实。短板在于其验证主要依赖于相对较小规模的数据集（AudioCaps， Clotho），且未与更多、更强的近期基线（如一些大规模的CLIP式音频-文本模型）进行对比，其实效性和普适性在更大规模场景下有待进一步证明。

🔗 **开源详情**

- 代码：论文中未提及代码链接。
- 模型权重：论文中未提及公开预训练模型权重。
- 数据集：使用了公开的AudioCaps和Clotho数据集，并自行构建了多语言翻译版本。多语言测试集的质量在附录E.9中进行了评估。
- Demo：论文中未提及在线演示。
- 复现材料：论文在正文和附录中提供了较为详尽的训练设置（超参数、优化器、硬件）、模型架构细节（编码器型号、MLP结构）以及评估方法，为复现提供了基础。
- 引用的开源项目：论文依赖的编码器模型为CED（Dinkel et al., 2024）和SONAR-TE（Duquenne et al., 2023），均为公开可用模型。
- 总结：论文中未提及开源计划。

📌 **核心摘要**

1. 本文针对音频-文本对比语言-音频预训练（CLAP）中优化轨迹漂移的问题，该问题源于负样本推力中不受控的垂直分量，导致训练不稳定和收敛缓慢。
2. 方法核心是提出支持向量正则化（SVR），通过在原损失函数中添加一个辅助损失项，利用构造的文本“支持向量”来选择性地抑制推力的垂直分量，从而稳定优化轨迹。
3. 与已有方法（如InfoNCE、SigLIP）相比，本文新在：(1) 首次从梯度力分解视角明确剖析了轨迹漂移问题；(2) 设计了SVR方法进行针对性干预，且无需额外数据和推理开销；(3) 提出了无监督的语义半径建模策略（StaticSVR 和 DynamicSVR）来控制干预强度。
4. 主要实验结果：在AudioCaps和Clotho数据集上，bi-DynamicSVR 方法在单语和多语言文本-音频检索任务上均显著超越InfoNCE和SigLIP基线。例如，在AudioCaps的T2A R@1指标上，InfoNCE为41.87，而bi-DynamicSVR达到44.16（提升约2.3%）；在零样本ESC-50分类上，InfoNCE为89.6，bi-DynamicSVR为92.1（提升2.5%）。
5. 实际意义在于，该方法以极低的额外计算成本（训练开销可忽略），提升了对比学习的训练效率和最终对齐质量，可直接应用于各种基于对比学习的音频-文本模型训练流程中。
6. 主要局限性包括：(1) 实验数据集规模相对较小；(2) 与更先进的、可能已包含复杂技巧的基线对比不完全；(3) DynamicSVR的性能依赖于预测半径的准确性，在极端噪声环境下可能不稳定（论文附录E.7对其鲁棒性有一定分析）。

---

