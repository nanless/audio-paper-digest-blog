---
title: "ICASSP 2026 - 语音活动检测 论文列表"
date: 2026-04-29
draft: false
tags: ["语音活动检测"]
categories: [icassp-2026]
description: "共 5 篇 ICASSP 2026 语音活动检测 方向论文"
hiddenInHomeList: true
---

# ICASSP 2026 - 语音活动检测

共 **5** 篇论文

[← 返回 ICASSP 2026 总览](/audio-paper-digest-blog/posts/icassp2026-summary/)

---

| 排名 | 论文 | 评分 | 分档 |
|------|------|------|------|
| 🥇 | [Lingometer: On-Device Personal Speech Word Counting System](/audio-paper-digest-blog/posts/2026-04-29-lingometer-on-device-personal-speech-word) | 8.0分 | 前25% |
| 🥈 | [EEND-SAA: Enrollment-Less Main Speaker Voice Activity Detect](/audio-paper-digest-blog/posts/2026-04-29-eend-saa-enrollment-less-main-speaker-voice) | 7.5分 | 前25% |
| 🥉 | [Dual Data Scaling for Robust Two-Stage User-Defined Keyword ](/audio-paper-digest-blog/posts/2026-04-29-dual-data-scaling-for-robust-two-stage-user) | 7.5分 | 前25% |
| 4. | [EdgeSpot: Efficient and High-Performance Few-Shot Model for ](/audio-paper-digest-blog/posts/2026-04-29-edgespot-efficient-and-high-performance-few-shot) | 7.5分 | 前25% |
| 5. | [TVP-UNet: Threshold Variance Penalty U-Net for Voice Activit](/audio-paper-digest-blog/posts/2026-04-29-tvp-unet-threshold-variance-penalty-u-net-for) | 7.0分 | 前25% |

---

## 📋 论文详情

### 🥇 [Lingometer: On-Device Personal Speech Word Counting System](/audio-paper-digest-blog/posts/2026-04-29-lingometer-on-device-personal-speech-word)

🔥 **8.0/10** | 前25% | #语音活动检测 | #端到端 | #低资源 #数据增强

👥 **作者与机构**

- 第一作者：Yuhwan Kim（Korea Advanced Institute of Science and Technology, South Korea）
- 通讯作者：Hyun W. Ka（Korea Advanced Institute of Science and Technology, South Korea）
- 作者列表：Yuhwan Kim（Korea Advanced Institute of Science and Technology, South Korea）、Junghun Lee（Korea Advanced Institute of Science and Technology, South Korea）、Baekho Kim（Korea Advanced Institute of Science and Technology, South Korea）、Hyun W. Ka（Korea Advanced Institute of Science and Technology, South Korea）
- 注：论文注明前两位作者贡献均等。

#

💡 **毒舌点评**

亮点：系统设计巧妙，通过“PVAD筛选 + WCE计数”的管道式架构，优雅地解决了设备端语音分析中的隐私与功耗矛盾，为数字生物标志物研究提供了合规的实用工具。
短板：WCE模型严重依赖词边界（音节起始点）的帧级标注，这在多语言或资源匮乏语言中可能成为瓶颈；实验部分缺少与更强基线（如大型端到端语音识别模型在相同轻量化约束下）的直接对比。

#

📌 **核心摘要**

1.  问题：传统的语音词数统计（WCE）系统需要在云端或设备端存储原始录音，包含非目标说话者语音，引发隐私风险。现有方法（如LENA）依赖后处理，计算成本高且不适用于实时设备端部署。
2.  方法核心：提出Lingometer，一个首个完全在设备端运行的隐私保护语音词数统计系统。它包含两个轻量级模块：上游个性化语音活动检测（PVAD），仅提取目标用户的语音；下游词数估计（WCE），直接预测提取语音中的单词数量。系统仅存储词数，不存储音频或文本。
3.  与已有方法新在哪里：(1) 范式创新：首次实现“只存计数，不存录音”的设备端系统，彻底规避隐私问题。(2) 架构优化：采用PVAD而非更重的说话人分离/日志系统，大幅降低上游计算开销。(3) WCE模型创新：抛弃传统的“音节-词”映射，采用基于TCN的轻量模型直接进行帧级新词起始点预测并求和，提升了精度和泛化能力。
4.  主要实验结果：
    - WCE模型对比（Oracle条件）：在LibriSpeech, AMI, CHiME数据集上，本文WCE模型的median ERR分别为3.0%, 6.9%, 6.3%，显著优于ALICE（23.1%, 10.4%, 14.0%）和SylNet-word（3.3%, 32.6%, 9.3%）。
    - 模型复杂度：本文WCE模型参数量（0.36M）仅为ALICE（2.23M）的1/6，FLOPs（65.1M/s）为ALICE（433.8M/s）的约1/6.7。
    - 系统性能（System条件）：Lingometer（PVAD+WCE）在三个数据集上的System ERR分别为5.6%, 11.1%, 10.4%，在除AMI的Oracle ALICE外，均优于所有基线系统。
    - 相关性：如图2所示，本文WCE模型在所有数据集上预测词数与真实词数的Pearson相关系数均≥0.97，而ALICE和SylNet-word在某些数据集上低于0.9。

    表2：词数估计（WCE）模型性能与复杂度对比
    | 模型 | LibriSpeech (Oracle/System) | AMI (Oracle/System) | CHiME (Oracle/System) | #参数 | 模型大小 | FLOPs/s |
    | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
    | ALICE | 23.1 / 17.2 | 10.4 / 19.8 | 14.0 / 32.4 | 2.23M | 8.50MB | 433.8M |
    | SylNet-word | 3.3 / 6.5 | 32.6 / 39.4 | 9.3 / 14.2 | 2.33M | 8.48MB | 433.8M |
    | WCE (ours) | 3.0 / 5.6 | 6.9 / 11.1 | 6.3 / 10.4 | 0.36M | 1.39MB | 65.1M |
    | Whisper-tiny | 1.1 / 5.3 | 7.3 / 11.2 | 2.9 / 6.6 | 39M | 144.05MB | 5676.3M |

    表3：PVAD模型在各数据集上的性能
    | 指标 | LibriSpeech | AMI | CHiME | #参数 | 大小 | FLOPs/s |
    | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
    | 准确率 | 0.92 | 0.94 | 0.90 | 37.66K | 0.14MB | 6.27M |
    | F1值 | 0.88 | 0.88 | 0.73 | | | |

    图2展示了各WCE模型预测词数与真实词数的皮尔逊相关系数散点图，直观显示了本文方法的优越性。
5.  实际意义：为心理健康监测、儿童语言发展跟踪、老年退行性疾病研究等提供了隐私安全且能耗友好的长期语音数据收集工具，推动该领域从实验室走向真实世界研究。
6.  主要局限性：(1) WCE模型训练依赖精确的词/音节边界标注，标注成本高且可能限制在多语言场景的应用。(2) 实验评估限于英语数据集，未验证在其他语言或强噪声环境下的鲁棒性。(3) 系统性能上限受限于PVAD的准确率，尤其在复杂重叠语音场景中。

#

---

### 🥈 [EEND-SAA: Enrollment-Less Main Speaker Voice Activity Detection Using Self-Attention Attractors](/audio-paper-digest-blog/posts/2026-04-29-eend-saa-enrollment-less-main-speaker-voice)

✅ **7.5/10** | 前25% | #语音活动检测 | #端到端 | #说话人分离 #流式处理

👥 **作者与机构**

- 第一作者：未说明（论文按顺序列出 Wen-Yung Wu, Pei-Chin Hsieh, Tai-Shih Chi，但未明确标注）
- 通讯作者：未说明（论文中未提供邮箱或标注通讯作者）
- 作者列表：Wen-Yung Wu（台湾阳明交通大学电气与计算机工程系），Pei-Chin Hsieh（台湾阳明交通大学电气与计算机工程系），Tai-Shih Chi（台湾阳明交通大学电气与计算机工程系）

💡 **毒舌点评**

亮点在于明确提出了“无注册主说话人VAD”这个在实际场景中更可行的任务定义，并通过设计双吸引子机制巧妙地将其融入端到端框架，实现了对背景说话人的抑制。短板在于，该工作的创新主要是对现有EEND架构的“改造”和“特化”，而非提出全新的、更强大的主说话人检测范式，且缺乏开源的模型权重和完整代码，限制了社区的快速跟进与验证。

📌 **核心摘要**

1.  问题：传统VAD仅检测有无语音，目标说话人VAD（TS-VAD）虽能检测特定说话人但依赖预先注册语音，这在会议、客服等开放场景中不实用。论文旨在解决“无注册主说话人VAD（MS-VAD）”问题，即在未知说话人和存在背景干扰的场景下，仅凭语音的连续性和音量等线索，实时识别出主要说话人的活动。
2.  方法核心：提出EEND-SAA框架。该框架在SA-EEND（基于Transformer的端到端神经说话人日志化）基础上进行扩展，核心创新是引入双自注意力吸引子（Dual Self-Attention Attractors）模块。该模块将Transformer的注意力头分为两组，分别专注于生成主说话人和背景说话人的吸引子表征，通过比较这些吸引子与帧级嵌入来输出说话人活动概率。同时，通过因果掩码和键值缓存实现流式处理。
3.  新意：相较于TS-VAD，本方法无需注册语音；相较于SA-EEND等说话人日志化方法，本方法直接输出“主说话人”标签而非所有说话人标签，且通过双吸引子设计增强了主/背景说话人的区分度，并具备了实时处理能力。
4.  主要实验结果：在合成的多说话人LibriSpeech混合数据集上，EEND-SAA（双吸引子）将主说话人DER（DERmain）从SA-EEND基线的6.63%降至3.61%，主说话人F1（F1main）从0.9667提升至0.9818。关键对比结果如表3所示：

| 模型 | DER (%) | DERmain (%) | F1main |
| :--- | :--- | :--- | :--- |
| SA-EEND [18] (w/ main speaker labels) | N/A | 6.63 | 0.9667 |
| EEND-SAA (dual) | 7.46 | 3.61 | 0.9818 |

5.  实际意义：为会议记录、实时转录、智能助手等需要区分主要发言人的应用场景，提供了一种无需预先登记、可实时运行的语音活动检测解决方案。
6.  主要局限性：模型性能高度依赖于主说话人相对于背景说话人的“连续性”和“音量”优势（如实验部分所示），在主说话人语音断续或背景音量较大时性能会下降；合成数据与真实复杂场景可能存在差距；未提供开源模型权重和完整代码。

---

### 🥉 [Dual Data Scaling for Robust Two-Stage User-Defined Keyword Spotting](/audio-paper-digest-blog/posts/2026-04-29-dual-data-scaling-for-robust-two-stage-user)

✅ **7.5/10** | 前25% | #语音活动检测 | #多任务学习 | #对比学习 #零样本

👥 **作者与机构**

- 第一作者：Zhiqi Ai（上海大学）
- 通讯作者：Yongjin Zhou（上海大学）、Shugong Xu（西安交通大学利物浦大学）
- 作者列表：Zhiqi Ai（上海大学），Han Cheng（上海大学），Yuxin Wang（上海大学），Shiyi Mu（上海大学），Yongjin Zhou（上海大学），Shugong Xu（西安交通大学利物浦大学）

💡 **毒舌点评**

亮点：提出了一种清晰的两阶段（检测+验证）框架，并创新性地将“双数据扩展”策略应用于两阶段模型的不同部分（声学模型和匹配器），在LibriPhrase-Hard子集上取得了显著优于现有方法的性能。短板：论文第二阶段中“轻量级注册模块”（nn.Embedding）与“跨模态对齐”的具体实现和有效性论证略显简略，且训练策略、超参数等关键复现信息缺失，降低了其作为完整工作发表的说服力。

📌 **核心摘要**

1.  要解决的问题：在用户自定义关键词检测任务中，现有基于零样本或微调的方法在区分易混淆词和处理边界不精确、误报率高的问题上存在不足。
2.  方法核心：提出DS-KWS，一个两阶段框架。第一阶段：使用基于CTC的声学模型和流式音素搜索模块定位候选片段。第二阶段：使用基于查询文本（QbyT）的音素匹配器在音素级和话语级进行验证。
3.  新在哪里（创新）：1) 提出“双数据扩展”策略：将第一阶段声学模型的训练数据从460小时扩展到1460小时，并将第二阶段匹配器的训练锚点类别从约78k扩展到155k，以分别增强模型的鲁棒性和区分力。2) 设计了轻量级的音素匹配器架构，采用简单的nn.Embedding进行文本注册，降低了复杂度。
4.  主要实验结果：在LibriPhrase-Hard数据集上，DS-KWS-M2取得6.13% EER和97.85% AUC，显著优于对比方法。在Hey-Snips数据集上，实现零样本性能，召回率达99.80%（在1次/小时误报率下）。关键实验数据见表1、表2、表3和表4。

    表1：LibriPhrase数据集对比实验结果
    | 方法 | 参数量 | AUC (%) ↑ | EER (%) ↓ |
    | :--- | :--- | :--- | :--- | :--- | :--- |
    | | | LPH | LPE | LPH | LPE |
    | CMCD [1] | 0.7M | 73.58 | 96.70 | 32.90 | 8.42 |
    | EMKWS [16] | 3.7M | 84.21 | 97.83 | 23.36 | 7.36 |
    | CED [17] | 3.6M | 92.70 | 99.84 | 14.40 | 1.70 |
    | SLiCK [19] | 0.6M | 94.90 | 99.82 | 11.10 | 1.78 |
    | MM-KWS-T [3] | 3.9M | 95.36 | 99.94 | 10.41 | 0.82 |
    | MM-KWS-AT [3] | 3.9M | 96.25 | 99.95 | 9.30 | 0.68 |
    | DS-KWS-M2 | 4.1M | 97.85 | 99.98 | 6.13 | 0.45 |

    表2：双数据扩展实验结果
    | 设置 | P-WER (%) ↓ | AUC (%) ↑ | EER (%) ↓ |
    | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
    | | LSclean | LSother | LPH | LPE | LPH | LPE |
    | 阶段1: LS-100 | | | | | | |
    | LP-100-M1 | 6.98 | 18.79 | 91.78 | 99.85 | 15.34 | 1.35 |
    | LP-100-M2 | - | - | 93.10 | 99.88 | 13.71 | 1.14 |
    | 阶段1: LS-460 | | | | | | |
    | LP-460-M1 | 4.44 | 13.39 | 95.33 | 99.96 | 10.78 | 0.72 |
    | LP-460-M2 | - | - | 97.03 | 99.96 | 7.97 | 0.59 |
    | 阶段1: LS-GS-1460 | | | | | | |
    | LP-GP-1460-M1 | 4.45 | 11.80 | 95.77 | 99.98 | 10.02 | 0.52 |
    | LP-GP-1460-M2 | - | - | 97.85 | 99.98 | 6.13 | 0.45 |

    表3：锚点扩展消融实验结果
    | 设置 | 锚点数量 | AUC (%) ↑ | EER (%) ↓ |
    | :--- | :--- | :--- | :--- | :--- | :--- |
    | | | LPH | LPE | LPH | LPE |
    | LP-100 | 12k | 93.22 | 99.88 | 13.38 | 1.19 |
    | LP-460 (r20k) | 20k | 93.95 | 99.94 | 12.50 | 0.82 |
    | LP-460 (r40k) | 40k | 94.75 | 99.96 | 11.62 | 0.69 |
    | LP-460 | 78k | 95.33 | 99.96 | 10.78 | 0.72 |
    | LP-GP-1460 | 155k | 95.45 | 99.97 | 10.65 | 0.64 |

    表4：Hey-Snips零样本性能
    | 方法 | 训练数据 | 召回率 (%) @FARs |
    | :--- | :--- | :--- | :--- |
    | | | 0.5 | 1 |
    | RIL-KWS [26] | 官方Snips数据 | 96.47 | 97.18 |
    | MDTC [5] | 99.88 | 99.92 |
    | DS-KWS-M0 (3.6M) | 零样本 | 98.89 | 98.97 |
    | DS-KWS-M1 (4.1M) | 98.58/99.28 | 98.93/99.45 |
    | DS-KWS-M2 (7.7M) | 98.97/99.76 | 99.13/99.80 |

5.  实际意义：为构建高效、鲁棒的用户自定义语音交互系统（如智能助手唤醒词）提供了一个新框架，其双数据扩展策略验证了数据规模对两阶段系统各模块性能提升的有效性。
6.  主要局限性：论文未详细说明第二阶段音素匹配器的训练细节（如是否冻结第一阶段编码器、具体训练配置），也缺少对模型在真实噪声、低功耗设备上部署可行性的深入讨论。

---

### 4. [EdgeSpot: Efficient and High-Performance Few-Shot Model for Keyword Spotting](/audio-paper-digest-blog/posts/2026-04-29-edgespot-efficient-and-high-performance-few-shot)

✅ **7.5/10** | 前25% | #语音活动检测 | #知识蒸馏 | #自监督学习 #少样本

👥 **作者与机构**

- 第一作者：Oguzhan Buyuksolak (Analog Devices, Istanbul, Turkey)
- 通讯作者：未说明
- 作者列表：Oguzhan Buyuksolak (Analog Devices, Istanbul, Turkey)、Alican Gok (Analog Devices, Istanbul, Turkey)、Osman Erman Okman (Analog Devices, Istanbul, Turkey)

💡 **毒舌点评**

这篇论文的亮点在于其工程上的“务实”——它没有追求复杂的新奇架构，而是像组装精密仪器一样，将PCEN、Fused Block和轻量级自注意力这三个针对性优化组合在一起，精准地提升了边缘少样本场景下的关键性能（低FAR下的准确率）。但它的短板也同样明显：消融实验严重缺失，读者无法判断这三板斧中哪一斧头最关键，以及它们组合是否真的有“1+1>2”的效果，这在一定程度上削弱了其学术贡献的说服力。

📌 **核心摘要**

这篇论文旨在解决传统关键词识别系统依赖大量数据和计算资源、难以在边缘设备上灵活适应新关键词的问题。其核心方法是提出EdgeSpot模型，一个专为边缘设备设计的高效少样本关键词识别模型。它以BC-ResNet为骨干，并引入了三个关键改进：一个可训练的PCEN前端以提升跨领域泛化能力；融合早期阶段的Fused BC-ResBlock以简化计算并优化训练；以及一个轻量的时序自注意力层以捕捉长程依赖。在训练方法上，采用自监督预训练的Wav2Vec2.0作为教师模型，通过知识蒸馏和子中心ArcFace损失来训练EdgeSpot学生模型。

与已有方法相比，新在三个方面：1）将原本用于固定词汇KWS的高效架构BC-ResNet适配并优化到少样本场景；2）将PCEN前端从固定处理变为可端到端学习的模块；3）在极轻量的模型中引入了时序自注意力。实验结果显示，在MSWC和GSC数据集上，EdgeSpot在固定误报率下的一致优于重新训练的BC-ResNet基线。例如，最大的EdgeSpot-4在1-shot、1% FAR下的GSC准确率从基线的44.5%提升至51.8%，同时仅需29.4M MACs和128k参数，性能接近大型教师模型。

其实际意义在于为边缘设备提供了一种高精度、低开销的少样本关键词识别解决方案，使得用户可以用极少的样本自定义唤醒词。主要局限性在于论文缺乏对各改进组件贡献的消融分析，且未验证在非英语等更多语言上的效果。

#

---

### 5. [TVP-UNet: Threshold Variance Penalty U-Net for Voice Activity Detection in Dysarthric Speech](/audio-paper-digest-blog/posts/2026-04-29-tvp-unet-threshold-variance-penalty-u-net-for)

✅ **7.0/10** | 前25% | #语音活动检测 | #U-Net | #阈值方差惩罚 #构音障碍

👥 **作者与机构**

- 第一作者：Aditya Pandey (School of Computer Science and Engineering, Vellore Institute of Technology, Chennai, India)
- 通讯作者：未明确说明（从贡献描述和作者排序推测，核心研究者为来自IISc的Prasanta Kumar Ghosh）
- 作者列表：Aditya Pandey（VIT Chennai），Tanuka Bhattacharjee, Prasanta Kumar Ghosh（Indian Institute of Science, Bengaluru），Madassu Keerthipriya, Darshan Chikktimmegowda, Dipti Baskar, Yamini BK, Seena Vengalil, Atchayaram Nalini, Ravi Yadav（National Institute of Mental Health and Neurosciences, Bengaluru）。

#

💡 **毒舌点评**

亮点：这是首个专门针对构音障碍语音的VAD研究，问题定义精准且临床意义明确；提出的TVP损失通过“阈值方差惩罚”巧妙地稳定了弱分类器在模糊边界上的决策，是一个可解释性强的正则化技巧。
短板：实验基线过于陈旧（2022年的方法），未能与当前先进的自监督、基于变换器的VAD模型对比，削弱了方法在通用场景下竞争力的说服力；且未提供任何代码或模型，在开源盛行的今天，严重阻碍了其影响力扩散。

#

📌 **核心摘要**

1.  解决的问题：传统语音活动检测（VAD）方法在应对构音障碍（如ALS、PD患者）语音时失效，因其具有异常韵律、发音不精准、强度多变等特征，导致误检和漏检。
2.  方法核心：提出一个紧凑的1D U-Net自编码器，在重构100ms音频帧的同时，通过一个新颖的“阈值方差惩罚”（TVP）损失，联合学习帧级语音/非语音决策。TVP通过惩罚多个分类阈值下的决策方差，稳定了基于统计量（均值、方差）的弱分类器输出。
3.  与已有方法相比新在哪里：a) 问题新颖性：首次将VAD研究聚焦于构音障碍语音；b) 技术创新：提出TVP损失，使模型能在有监督、半监督和无监督等多种标注条件下有效训练，减少对稀缺临床标注数据的依赖。
4.  主要实验结果：在自有构音障碍数据集上进行0%~100%标签比例的实验。在最具实用价值的50%标签比例下，该方法平均F1值达到92.46%（精确率95.59%，召回率89.57%），性能接近全监督（100%标签）基线，并显著优于无监督基线。关键对比数据见下表：

| 方法 | 标签比例 | 精确率 (%) | 召回率 (%) | F1值 (%) | AUCROC (%) |
| :--- | :--- | :--- | :--- | :--- | :--- |
| TVP-UNet (本文) | 0% | 84.33 (15.2) | 79.63 (17.5) | 79.3 (1.3) | 68.20 (16.0) |
| TVP-UNet (本文) | 100% | 96.50 (3.2) | 87.86 (1.0) | 91.98 (5.1) | 91.70 (2.8) |
| Mihalache et al. [9] | 100% (监督基线) | 89.01 (7.2) | 93.23 (3.6) | 90.75 (2.6) | 94.79 (0.5) |
| Sarkar et al. [14] | 0% (无监督基线) | 70.55 (1.5) | 71.19 (0.2) | 70.86 (0.8) | 73.30 (0.5) |

5.  实际意义：该方法减少了对专业语言病理学家耗时标注的依赖，使得为构音障碍患者开发可靠的语音识别前端、辅助沟通工具或临床监测系统成为可能。
6.  主要局限性：a) 对比基线较少且陈旧，未与当前先进的VAD模型对比；b) 实验数据集为自建私有数据集，虽然描述详细，但社区无法直接获取和验证；c) 论文未提供代码和模型权重。

#

---

