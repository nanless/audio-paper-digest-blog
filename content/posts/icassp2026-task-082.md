---
title: "ICASSP 2026 - 语音转换 论文列表"
date: 2026-04-29
draft: false
tags: ["语音转换"]
categories: [icassp-2026]
description: "共 9 篇 ICASSP 2026 语音转换 方向论文"
hiddenInHomeList: true
---

# ICASSP 2026 - 语音转换

共 **9** 篇论文

[← 返回 ICASSP 2026 总览](/audio-paper-digest-blog/posts/icassp2026-summary/)

---

| 排名 | 论文 | 评分 | 分档 |
|------|------|------|------|
| 🥇 | [FAC-FACodec: Controllable Zero-Shot Foreign Accent Conversio](/audio-paper-digest-blog/posts/2026-04-29-fac-facodec-controllable-zero-shot-foreign-accent) | 8.0分 | 前25% |
| 🥈 | [Conditional Diffusion Models for Mental Health-Preserving Vo](/audio-paper-digest-blog/posts/2026-04-29-conditional-diffusion-models-for-mental-health) | 8.0分 | 前25% |
| 🥉 | [CosyAccent: Duration-Controllable Accent Normalization using](/audio-paper-digest-blog/posts/2026-04-29-cosyaccent-duration-controllable-accent) | 7.8分 | 前25% |
| 4. | [QE-XVC: Zero-Shot Cross-Lingual Voice Conversion via Query-E](/audio-paper-digest-blog/posts/2026-04-29-qe-xvc-zero-shot-cross-lingual-voice-conversion) | 7.5分 | 前25% |
| 5. | [MeanVC: Lightweight and Streaming Zero-Shot Voice Conversion](/audio-paper-digest-blog/posts/2026-04-29-meanvc-lightweight-and-streaming-zero-shot-voice) | 7.5分 | 前25% |
| 6. | [Expressive Voice Conversion with Controllable Emotional Inte](/audio-paper-digest-blog/posts/2026-04-29-expressive-voice-conversion-with-controllable) | 7.5分 | 前25% |
| 7. | [Lightweight and Perceptually-Guided Voice Conversion for Ele](/audio-paper-digest-blog/posts/2026-04-29-lightweight-and-perceptually-guided-voice) | 7.5分 | 前25% |
| 8. | [MeanVoiceFlow: One-Step Nonparallel Voice Conversion with Me](/audio-paper-digest-blog/posts/2026-04-29-meanvoiceflow-one-step-nonparallel-voice) | 7.0分 | 前25% |
| 9. | [MaskVCT: Masked Voice Codec Transformer for Zero-Shot Voice ](/audio-paper-digest-blog/posts/2026-04-29-maskvct-masked-voice-codec-transformer-for-zero) | 6.5分 | 前50% |

---

## 📋 论文详情

### 🥇 [FAC-FACodec: Controllable Zero-Shot Foreign Accent Conversion with Factorized Speech Codec](/audio-paper-digest-blog/posts/2026-04-29-fac-facodec-controllable-zero-shot-foreign-accent)

🔥 **8.0/10** | 前25% | #语音转换 | #扩散模型 | #零样本 #语音编解码器

👥 **作者与机构**

- 第一作者：Yurii Halychanskyi（University of Illinois Urbana-Champaign, The Grainger College of Engineering, Siebel School of Computing and Data Science）
- 通讯作者：未说明
- 作者列表：Yurii Halychanskyi（UIUC）、Cameron Churchwell（UIUC）、Yutong Wen（UIUC）、Volodymyr Kindratenko（UIUC）

#

💡 **毒舌点评**

亮点在于巧妙地将扩散模型的噪声控制机制转化为口音强度的“旋钮”，首次实现了在口音转换中对“转多少”的显式、平滑控制，这对实际应用非常友好。短板是训练数据“作弊”——只用了美式英语单说话人（LJSpeech），这好比只学会了标准答案却没练习过如何修改各地“方言”作业，其面对真正多样化非母语口音时的泛化能力和适应性存疑，而论文对此缺乏深入验证。

#

🔗 **开源详情**

- 代码：提供代码仓库链接：https://claussss.github.io/accent_control_demo/
- 模型权重：论文中未提及是否公开预训练模型权重。
- 数据集：训练集LJSpeech和评测集L2-Arctic均为公开数据集，论文中给出了使用方式。
- Demo：论文提供的网站链接即为Demo页面（同上）。
- 复现材料：提供了完整的训练细节（优化器、学习率、批大小、epoch数、硬件）、模型架构细节、预处理流程（文本归一化、音素转换、对齐工具），以及关键超参数（网络尺寸、噪声调度、推理步数）。
- 引用的开源项目：Nvidia NeMo文本归一化、Phonemizer、Wav2Vec2 XLSR（对齐）、FACodec、Whisper（评测）、SpeechBrain/WavLM（说话人相似度评测）。

---

[← 返回 ICASSP 2026 论文分析](/audio-paper-digest-blog/posts/icassp2026-summary/)

📌 **核心摘要**

1.  问题：现有的口音转换方法缺乏对转换强度的显式控制，难以在“更地道”和“更像本人”之间灵活权衡。
2.  方法核心：提出FAC-FACodec框架，利用FACodec将语音解耦，仅对内容（发音）潜变量`zc1`进行建模。在训练时，模型学习从加噪的`zc1`中恢复出美式英语的先验分布。在推理时，通过选择初始加噪的时间步`t_start`来控制转换强度：`t_start`越大，表示从越“混乱”的状态开始去噪，结果越偏向先验（美式发音），但可能丢失更多原始特征。
3.  创新点：这是首个提供用户可控参数来调节口音转换强度的框架；仅需目标口音（美式英语）的语音和转录文本进行训练，实现零样本转换；专注于发音层面的修改，严格保留说话人的韵律和音色。
4.  主要实验结果：在L2-Arctic数据集（6种非母语口音）上测试，随着`t_start`从25增至100，美式口音分类器得分（Acc）从72.22平均提升至89.86，而说话人相似度（SS）从0.97降至0.88，词错误率（WER）从0.07升至0.15，证明了转换强度与身份保留之间的可控权衡。与基线系统相比，在` t_start=100`时，本方法在说话人相似度和WER上持平或更优，但在口音得分上通常低于同时重构韵律的系统。

关键数据表（节选）：
| 指标 | 重建 | t_start=25 | t_start=50 | t_start=75 | t_start=100 |
| :--- | :---: | :---: | :---: | :---: | :---: |
| WER (↓) | 0.05 | 0.07 | 0.08 | 0.10 | 0.15 |
| 说话人相似度 SS (↑) | 0.98 | 0.97 | 0.94 | 0.91 | 0.88 |
| 口音得分 Acc (↑) | 70.51 | 72.22 | 80.83 | 89.16 | 89.86 |

5.  实际意义：为语言学习（可调节到完全地道）、配音（可能需要保持部分口音特色）等不同应用场景提供了灵活的口音转换方案。
6.  主要局限：模型仅在单一母语者数据上训练，对训练中未见的口音模式适应能力未经检验；基线对比使用的是各论文的公开Demo子集，样本量小，比较存在局限性；主观评估规模有限。

---

### 🥈 [Conditional Diffusion Models for Mental Health-Preserving Voice Conversion](/audio-paper-digest-blog/posts/2026-04-29-conditional-diffusion-models-for-mental-health)

🔥 **8.0/10** | 前25% | #语音转换 | #扩散模型 | #语音匿名化 #语音生物标志物

👥 **作者与机构**

- 第一作者：Siddharth Kalyanasundaram（科罗拉多大学博尔德分校认知科学与计算机科学研究所）
- 通讯作者：未说明（从邮箱格式和惯例推断，Theodora Chaspari可能为通讯作者，但论文未明确标注）
- 作者列表：Siddharth Kalyanasundaram（科罗拉多大学博尔德分校认知科学与计算机科学研究所）、Theodora Chaspari（科罗拉多大学博尔德分校认知科学与计算机科学研究所）

💡 **毒舌点评**

这篇论文巧妙地将扩散模型用于一个“政治正确”但技术挑战十足的场景——在给抑郁症语音“变声”脱敏的同时，还要保住其病情线索，想法和落点都值得称赞。但遗憾的是，模型的训练“粮草”太少（仅28小时语音），导致其在通用语音质量（自然度、可懂度）上略逊于“吃得多”的基线，显得“巧妇难为无米之炊”。

🔗 **开源详情**

- 代码：论文中未提及代码链接。
- 模型权重：未提及公开权重。
- 数据集：使用了E-DAIC-WOZ数据集，这是一个公开但需要申请获取的数据集（论文未提供获取方式）。
- Demo：提供在线演示链接：https://sidks.github.io/icassp26_vcdemo/。
- 复现材料：给出了模型规模（23M/67M）、优化器（AdamW）、学习率（5e-5）、训练轮数（446）、批大小（32）、训练硬件（单A100）和时长（72小时）等关键信息。
- 论文中引用的开源项目/工具：引用了XLS-R (Wav2Vec 2.0)、VQ-VAE、YAAPT、OpenSMILE（eGeMAPS特征）、Whisper、StyleEncoder、Vevo-Voice、QuickVC等相关模型或工具，但未指明本文是否直接依赖这些项目的开源代码。
- 整体开源情况：论文中未提及完整的开源计划。

---

[← 返回 ICASSP 2026 论文分析](/audio-paper-digest-blog/posts/icassp2026-summary/)

📌 **核心摘要**

1.  解决的问题：语音是心理健康（如抑郁症）的重要生物标志物，但包含说话人身份等敏感信息，阻碍了数据共享与研究复现。需要在匿名化语音的同时，保留对心理健康研究至关重要的副语言信息。
2.  方法核心：提出一种基于条件扩散模型（DM）的语音转换（VC）框架。首先，将语音解耦为内容（w2v）、音高（f0）、说话人身份（s）和抑郁（d）四个嵌入表示。然后，以目标说话人嵌入（s'）和抑郁嵌入（d）作为条件，指导扩散模型的反向去噪过程，生成既改变身份又保留抑郁线索的新语音。
3.  与已有方法的新意：首次将扩散模型应用于明确保留抑郁线索的语音转换任务。现有VC方法（如基于VAE、GAN的模型）在匿名化时会严重退化副语言信息（如情绪、抑郁线索），而本文通过将抑郁嵌入作为扩散过程的显式条件，实现了对关键生物标志物的保护。
4.  主要实验结果：在未见说话人的零样本设置下，所提模型（DM-23M， DM-67M）与SOTA基线（Vevo-Voice， QuickVC）在语音可懂度（WER/CER）和说话人相似度（SECS）上表现相当。核心优势在于抑郁信息保留：所提模型转换后语音的抑郁严重程度（PHQ-8）预测平均绝对误差（MAE）显著低于基线（DM-23M：5.025 vs. Vevo-Voice：5.478, QuickVC：5.804），且预测分数分布与原始语音更接近（KL散度约0.06 vs. 24+）。
    | 模型 | WER ↓ | CER ↓ | SECS ↑ | PHQ-8 MAE ↓ | nMOS ↑ | sMOS ↑ |
    | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
    | 原始语音 | 0.046 | 0.025 | 0.872 | 4.522 | 4.17 | 3.85 |
    | Vevo-Voice | 0.078 | 0.043 | 0.850 | 5.478 | 4.14 | 3.74 |
    | QuickVC | 0.059 | 0.046 | 0.731 | 5.804 | 4.04 | 3.59 |
    | DM-23M (本文) | 0.082 | 0.047 | 0.804 | 5.025 | 3.97 | 3.71 |
    | DM-67M (本文) | 0.068 | 0.041 | 0.829 | 5.055 | 4.03 | 3.78 |
5.  实际意义：为心理健康研究提供了一种潜在的隐私保护工具，可以在保护参与者隐私的前提下，促进脱敏语音数据的共享与分析，有助于推动该领域的研究复现和跨机构合作。
6.  主要局限性：训练数据规模较小（仅28小时），限制了模型生成语音的自然度和可懂度；仅针对抑郁症进行评估，未验证对其他副语言信息（如情绪、认知状态）的保留能力；隐私-效用权衡（EER指标）显示匿名化程度还有提升空间。

---

### 🥉 [CosyAccent: Duration-Controllable Accent Normalization using Source-Synthesis Training Data](/audio-paper-digest-blog/posts/2026-04-29-cosyaccent-duration-controllable-accent)

✅ **7.8/10** | 前25% | #语音转换 | #流匹配 | #语音合成 #数据增强

👥 **作者与机构**

- 第一作者：Qibing Bai（香港中文大学（深圳）数据科学学院、腾讯天籁音频实验室）
- 通讯作者：Shuai Wang（南京大学智能科学与技术学院，标注†）
- 作者列表：Qibing Bai（香港中文大学（深圳）数据科学学院、腾讯天籁音频实验室）、Shuhao Shi（香港中文大学（深圳）数据科学学院）、Shuai Wang（南京大学智能科学与技术学院）、Yukai Ju（腾讯天籁音频实验室）、Yannan Wang（腾讯天籁音频实验室）、Haizhou Li（香港中文大学（深圳）数据科学学院、深圳市大数据研究院、香港中文大学（深圳）高等金融研究院）

💡 **毒舌点评**

亮点在于“源合成”数据策略的构思巧妙——通过合成非母语语音来使用纯净母语语音作为目标，从根本上规避了TTS伪影污染，这一思路颇具启发性。短板则是其宣称的“无需真实L2数据”在泛化到真实、多样且含噪声的L2语音时可能面临挑战，且模型在说话人相似度上略逊于基线。

🔗 **开源详情**

- 代码：提供了GitHub代码仓库链接：https://github.com/P1ping/CosyAccent。
- 模型权重：论文中未明确提及是否公开预训练模型权重。
- 数据集：论文中描述了使用LibriTTS-R和L2-ARCTIC构建合成数据集的方法，但未明确说明是否公开最终的合成数据集。
- Demo：提供了在线演示链接：https://p1ping.github.io/CosyAccent-Demo。
- 复现材料：论文详细描述了模型架构、数据构建流水线、关键训练技术（CTC损失、位置缩放、CFG）。但未提供训练的具体超参数（如学习率、Batch size）、训练硬件信息和检查点。
- 论文中引用的开源项目：
    - CosyVoice2 [19]：用于合成L2语音的提示式TTS模型。
    - Whisper [27]：用作冻结的语音编码器前端。
    - Resemblyzer：用于提取说话人嵌入。
    - HiFTNet [34]：用作声码器。
    - 其他基准模型代码：FramAN [13], TokAN [18]。
- 论文中未提及开源计划的其他方面：如合成数据集权重。

---

[← 返回 ICASSP 2026 论文分析](/audio-paper-digest-blog/posts/icassp2026-summary/)

📌 **核心摘要**

这篇论文针对口音归一化（AN）中训练数据稀缺和时长建模生硬两大挑战，提出了一种新的解决方案。核心方法包括：1）提出“源合成”训练数据构建策略，使用强大的提示式TTS（CosyVoice2）从大规模母语语料中合成非母语语音，从而在完全不使用真实L2数据的情况下，构建以高质量母语语音为目标的平行训练对。2）提出了CosyAccent模型，一个基于流匹配的非自回归（NAR）系统，它通过隐式韵律建模保证自然度，并引入“位置缩放”技术实现对输出总时长的显式控制。实验结果显示，尽管未使用真实L2数据训练，CosyAccent在内容保持（WER降至12.96% vs. 基线16.21%）和自然度（主观NAT评分64.62）上显著优于使用真实数据的基线模型。该工作证明了合成数据策略的有效性，为减少对稀缺口音数据的依赖提供了新途径。其主要局限性在于合成数据可能缺乏真实L2语音的声学复杂性和副语言特征。

---

### 4. [QE-XVC: Zero-Shot Cross-Lingual Voice Conversion via Query-Enhancement and Conditional Flow Matching](/audio-paper-digest-blog/posts/2026-04-29-qe-xvc-zero-shot-cross-lingual-voice-conversion)

✅ **7.5/10** | 前25% | #语音转换 | #流匹配 | #跨语言 #零样本

👥 **作者与机构**

- 第一作者：Han-Jie Guo (中国科学技术大学，语音及语言信息处理国家工程研究中心)
- 通讯作者：Zhen-Hua Ling (中国科学技术大学，语音及语言信息处理国家工程研究中心)
- 作者列表：Han-Jie Guo (中国科学技术大学，语音及语言信息处理国家工程研究中心)、Hui-Peng Du (中国科学技术大学，语音及语言信息处理国家工程研究中心)、Shi-Ming Wang (中国科学技术大学，语音及语言信息处理国家工程研究中心)、Xiao-Hang Jiang (中国科学技术大学，语音及语言信息处理国家工程研究中心)、Ying-Ying Gao (中国移动九天人工智能研究院)、Shi-Lei Zhang (中国移动九天人工智能研究院)、Zhen-Hua Ling (中国科学技术大学，语音及语言信息处理国家工程研究中心)

#

💡 **毒舌点评**

亮点：论文针对跨语言对齐难这一核心痛点，设计了“全局说话人嵌入”和“扰动内容表示”两阶段查询来增强和对齐帧级说话人表征，思路清晰且有效。短板：实验部分虽然全面，但对说话人相似度（SMOS/SECS）未达最优的原因分析过于表面，且缺乏对生成语音在不同语速、情感等更复杂条件下的鲁棒性讨论，研究深度稍显不足。

#

🔗 **开源详情**

-   代码：论文中未提及完整的模型代码仓库链接。但提到了声码器（HiFi-GAN）使用了官方开源代码。
-   模型���重：未提及公开模型权重。
-   数据集：实验使用了公开的LibriTTS和MLS数据集，但论文未提供处理后的数据或下载脚本。
-   Demo：提供了一个在线语音样本展示页面：https://hjguo01.github.io/QE-XVC/。
-   复现材料：给出了部分关键实现细节（如优化器、学习率、推理步数），但未提供完整的训练配置文件、环境依赖列表或预训练模型链接。
-   引用的开源项目：XLSR-53（预训练SSL模型）、CAM++（说话人验证模型）、HiFi-GAN（声码器）、Whisper（用于计算CER）。

---

[← 返回 ICASSP 2026 论文分析](/audio-paper-digest-blog/posts/icassp2026-summary/)

📌 **核心摘要**

1.  问题：现有的零样本跨语言语音转换（XVC）方法面临发音错误、说话人建模不足以及跨语言对齐困难等挑战。
2.  方法核心：提出QE-XVC框架，包含三大组件：利用预训练SSL模型（XLSR-53）提取共享多语言表征；设计查询增强模块，通过两阶段注意力机制（先用说话人嵌入作查询，再用扰动内容作查询）结合小波卷积来精炼帧级说话人表征；采用条件流匹配（CFM） 模型，以内容表征和说话人表征为条件，非自回归地生成转换后的梅尔频谱图。
3.  创新：与已有方法相比，新在：a) 提出两阶段查询增强机制，在跨语言场景下稳定对齐；b) 构建统一的多语言连续表征空间，避免量化损失；c) 采用高效的CFM模型进行生成，速度优于扩散模型。
4.  主要实验结果：在英语到西班牙语的跨语言任务上，QE-XVC相比最佳基线（vec2wav 2.0）在CER上显著降低（2.18% vs 4.86%），在F0-PCC上提升（0.753 vs 0.692），表明发音准确性和韵律保持更好。主观评估（NMOS和SMOS）也表现优异。推理效率（RTF=0.051）远高于扩散基线。
5.  实际意义：该方法为构建低资源语言语音数据集、影视配音等应用提供了更高质量、更高效的零样本跨语言语音转换解决方案。
6.  主要局限性：说话人相似度（SECS和SMOS）略低于使用离散token的vec2wav 2.0，论文对此分析不足；未探讨在更复杂声学环境或非平稳语音下的性能。

---

### 5. [MeanVC: Lightweight and Streaming Zero-Shot Voice Conversion via Mean Flows](/audio-paper-digest-blog/posts/2026-04-29-meanvc-lightweight-and-streaming-zero-shot-voice)

✅ **7.5/10** | 前25% | #语音转换 | #流匹配 | #零样本 #自回归模型

👥 **作者与机构**

-   第一作者：Guobin Ma（西北工业大学计算机学院， Audio, Speech and Language Processing Group (ASLP@NPU)）
-   通讯作者：Lei Xie（西北工业大学计算机学院， ASLP@NPU）、Pengcheng Zhu（吉利汽车研究院(宁波)有限公司）
-   作者列表：
    1.  Guobin Ma（西北工业大学计算机学院， ASLP@NPU）
    2.  Jixun Yao（西北工业大学计算机学院， ASLP@NPU）
    3.  Ziqian Ning（西北工业大学计算机学院， ASLP@NPU）
    4.  Yuepeng Jiang（西北工业大学计算机学院， ASLP@NPU）
    5.  Lingxin Xiong（吉利汽车研究院(宁波)有限公司）
    6.  Lei Xie（西北工业大学计算机学院， ASLP@NPU）
    7.  Pengcheng Zhu（吉利汽车研究院(宁波)有限公司）

💡 **毒舌点评**

亮点：用仅14M参数的轻量模型，在流式推理中实现了远超100M级模型的零样本转换质量与效率（RTF低至0.136），是“小模型办大事”的典范。
短板：系统依赖固定的预训练ASR和说话人编码器模块，这些模块的性能上限决定了最终效果，核心创新更像是对现有组件的巧妙“集成”与“调参”。

🔗 **开源详情**

-   代码：论文明确提供了代码仓库链接：`https://aslp-lab.github.io/MeanVC`。
-   模型权重：论文中提及“Audio demos and code are publicly available”，但未明确说明预训练模型权重是否公开。
-   数据集：训练使用了公开的Emilia数据集，但论文中未提及是否提供其筛选后的子集或具体获取方式。评估使用了公开的Seed-TTS测试集和Aishell3。
-   Demo：论文中明确提供了在线演示（Audio demos）链接。
-   复现材料：论文提供了模型结构、数据集处理方法、关键超参数（块大小、模型维度等）、基线系统选择和评估指标，为复现提供了坚实基础。未提及完整的训练脚本、配置文件或检查点。
-   引用的开源项目：
    1.  流式ASR：Fast-U2++ (通过WeNet工具包实现)
    2.  说话人编码器：ECAPA-TDNN
    3.  声码器：Vocos
    4.  数据集：Emilia, WenetSpeech, Aishell3, Seed-TTS Test Set
    5.  评估工具：Paraformer-zh (用于计算CER)， Seed-tts-eval (用于计算SSIM)， DNSMOS (用于评估语音质量)

---

[← 返回 ICASSP 2026 论文分析](/audio-paper-digest-blog/posts/icassp2026-summary/)

📌 **核心摘要**

1.  问题：现有的流式零样本语音转换方法要么模型庞大、延迟高（如基于AR的StreamVoice），要么牺牲转换质量与泛化能力（如基于NAR的DualVC2和Seed-VC），无法同时满足“快速、轻量、高保真”的需求。
2.  方法核心：提出MeanVC，一种基于条件流匹配（CFM）和扩散Transformer（DiT）的轻量级框架。其核心创新在于：a) 采用分块自回归去噪策略，结合了AR的长程一致性优势和NAR的并行潜力；b) 引入均值流（Mean Flows） 技术，通过回归平均速度场，实现单步（1-NFE）高质量频谱图生成，解决了扩散模型多步采样效率低的问题；c) 采用扩散对抗后训练（DAPT） 消除生成频谱图的过平滑问题。
3.  与已有方法相比新在哪里：首次将“均值流”应用于语音转换领域，实现了真正的单步高效生成。设计了专门的分块因果掩码机制，在流式场景下有效利用历史上下文，平衡了延迟与生成质量。整个架构非常轻量（14M参数）。
4.  主要实验结果：在零样本测试集上，MeanVC在各项指标上均显著优于基线系统。其SMOS（说话人相似度）达3.87，远高于StreamVoice（3.67）和Seed-VC（3.62）；CER（字错误率）降至5.01%，优于Seed-VC（6.03%）；模型参数量仅为14M，RTF（实时率）为0.136，延迟为211.52ms，远优于StreamVoice（RTF 13.632，延迟2379.52ms）。在已知说话人场景下的微调也带来了显著提升。
5.  实际意义：为需要实时、低延迟、高质量语音转换的场景（如直播、游戏、通信隐私保护）提供了一种可行的轻量级解决方案，显著降低了部署门槛和计算成本。
6.  主要局限性：性能上限受限于固定的ASR和说话人编码器。单步生成的质量虽优，但与Ground Truth仍有差距（如DNSMOS略低于Seed-VC）。分块大小（如160ms）的选择是延迟与质量的折衷，需要根据具体场景调整。

---

### 6. [Expressive Voice Conversion with Controllable Emotional Intensity](/audio-paper-digest-blog/posts/2026-04-29-expressive-voice-conversion-with-controllable)

✅ **7.5/10** | 前25% | #语音转换 | #数据增强 | #注意力机制 #语音情感识别

👥 **作者与机构**

- 第一作者：Nannan Teng（丝绸之路多语种认知计算联合国际研究实验室，新疆大学计算机科学与技术学院）
- 通讯作者：Ying Hu（丝绸之路多语种认知计算联合国际研究实验室，新疆大学计算机科学与技术学院）
- 作者列表：Nannan Teng（丝绸之路多语种认知计算联合国际研究实验室，新疆大学计算机科学与技术学院）、Ying Hu（丝绸之路多语种认知计算联合国际研究实验室，新疆大学计算机科学与技术学院）、Zhijian Ou（清华大学电机工程与应用电子技术系）、Sheng Li（东京科学大学工程学院）

#

💡 **毒舌点评**

这篇论文最亮眼的地方在于它清晰的“问题-方案”对应逻辑：用“特定属性增强”制造更鲁棒的特征，用“联合注意力”优雅地融合并控制说话人与情感风格，最后用“扰动归一化”来提升合成的表现力，模块设计环环相扣且动机明确。短板则在于情感控制的粒度仍显粗糙，一个标量α控制所有情绪类别的强度，缺乏对不同情绪（如“喜悦”与“愤怒”）可能具有不同强度响应曲线的建模，这在一定程度上限制了其实用性和精细度。

#

🔗 **开源详情**

- 代码：提供了代码仓库链接：`https://tengnn.github.io/ExpressiveVC/`。
- 模型权重：论文中未提及是否公开预训练模型权重。
- 数据集：使用ESD英文数据集和RAVDESS数据集进行测试，这两个均为公开数据集，但论文未提供具体的获取或预处理脚本。
- Demo：提供了在线演示链接：`https://tengnn.github.io/ExpressiveVC/`。
- 复现材料：论文提供了方法的基本描述和公式，但缺乏具体的训练细节（如优化器、学习率、批大小、训练时长）和模型配置信息。
- 引用的开源项目：论文未明确列出所有依赖项，但可以推断其使用了Wav2vec 2.0（用于特征提取）、以及可能的HiFi-GAN（作为声码器）等开源模型。

---

[← 返回 ICASSP 2026 论文分析](/audio-paper-digest-blog/posts/icassp2026-summary/)

📌 **核心摘要**

1.  解决的问题：现有的表现力语音转换（VC）方法要么专注于说话人身份和情感风格的迁移，要么专注于情感强度的可控调节，未能很好地将两者结合。本文旨在提出一个能同时实现高质量说话人转换、情感迁移，并允许用户精细控制目标情感强度的VC模型。
2.  方法核心：提出了CEI-VC模型，包含三个关键组件：a) 特定属性增强（SAA）：通过共振峰偏移和音高单调化等数据扰动策略，增强模型对说话人和情感特征的鲁棒性。b) 情感解耦与强度控制（EDIC）模块：利用解耦损失和基于联合注意力的风格融合机制，将说话人与情感特征分离，并引入可调参数α在推理时控制情感强度。c) 扰动自适应实例归一化（PbAdaIN）：在归一化层中对风格特征施加扰动，提升合成语音的自然度和表现力。
3.  与已有方法相比新在哪里：主要新意在于系统性地结合了数据增强、特征解耦与可控生成三个环节。具体创新包括：1）提出了针对性的SAA策略来同时扰动说话人和情感属性；2）设计了UDIA模块，通过联合注意力机制和可调参数实现情感强度的连续控制；3）提出了PbAdaIN，通过在特征归一化时引入可控噪声来增强表达力。
4.  主要实验结果：在ESD英语数据集上的实验表明，CEI-VC在多项指标上优于5个对比模型。在Unseen-to-Unseen场景下，其自然度MOS（nMOS）为4.02，情感相似度MOS（eMOS）为3.30，情感嵌入余弦相似度（EECS）为0.6663，均为最佳或次佳。消融实验证明SAA、PbAdaIN和UDIA模块均对性能有显著贡献。通过调节参数α（0.2， 0.5， 0.9），转换语音的平均音高和情感分类准确率随强度增加而变化，验证了情感强度控制的有效性。
5.  实际意义：该模型可应用于需要情感表现力和身份控制的语音合成场景，如个性化有声读物生成、影视配音、以及更自然的人机交互对话系统。
6.  主要局限性：论文未讨论模型在极短语音或噪声环境下的鲁棒性；情感强度控制机制（标量α）可能对所有情绪类型过于简化；未公开模型权重和详细训练配置，限制了完全复现。

#

---

### 7. [Lightweight and Perceptually-Guided Voice Conversion for Electro-Laryngeal Speech](/audio-paper-digest-blog/posts/2026-04-29-lightweight-and-perceptually-guided-voice)

✅ **7.5/10** | 前25% | #语音转换 | #自监督学习 | #语音增强 #低资源

👥 **作者与机构**

- 第一作者：Benedikt Mayrhofer（格拉茨理工大学 信号处理与语音通信实验室；维也纳医科大学 综合人工智能医学中心）
- 通讯作者：未说明（论文提供了多位作者的邮箱，未明确指定通讯作者）
- 作者列表：Benedikt Mayrhofer（格拉茨理工大学 信号处理与语音通信实验室；维也纳医科大学 综合人工智能医学中心）、Franz Pernkopf（格拉茨理工大学 信号处理与语音通信实验室）、Philipp Aichinger（维也纳医科大学 耳鼻喉科，语音学与语言治疗科；维也纳医科大学 综合人工智能医学中心）、Martin Hagmüller（格拉茨理工大学 信号处理与语音通信实验室；维也纳医科大学 综合人工智能医学中心）

💡 **毒舌点评**

这篇论文的亮点在于精准的“临床需求驱动工程适配”，它没有空谈大模型，而是针对电子喉语音的具体缺陷（无F0、机械噪声），对现有流式架构StreamVC进行了务实而有效的“减法”改造（移除音高/能量模块）和“加法”增强（感知引导损失），实验设计严谨且消融分析充分。短板在于创新更多是“组合”与“调优”，缺乏一个能引发范式思考的核心算法突破，且模型在韵律生成和极端噪声下的可懂度方面仍有明显差距。

🔗 **开源详情**

- 代码：论文中提供了项目主页链接 `https://spsc-tugraz.github.io/lw-elvc-icassp26/`，其中可能包含代码。论文正文提到模型代码基于一个非官方StreamVC实现2（`https://github.com/yuval-reshef/StreamVC`），但未明确说明本文所有组件的代码是否完全开源。
- 模型权重：未提及是否公开预训练或微调后的模型权重。
- 数据集：使用了公开的德语语料（Common Voice, HUI, MLS）和公开的EL-HE平行数据库[20]。论文未提及自建新数据集。
- Demo：未提及在线演示。
- 复现材料：论文给出了详细的超参数设置（学习率、批大小、训练步数、优化器参数、模型大小等）、数据预处理流程（对齐、增强）和损失函数组合，复现信息较为充分。
- 论文中引用的开源项目：StreamVC非官方实现、mHuBERT-147、Whisper、FCPE音高估计器、FastSpeech2（未直接使用，但在相关工作提及）。

---

[← 返回 ICASSP 2026 论文分析](/audio-paper-digest-blog/posts/icassp2026-summary/)

📌 **核心摘要**

这篇论文针对喉切除患者使用的电子喉（EL）语音存在音高单调、韵律缺失和机械噪声的问题，提出了一种轻量级且感知引导的语音转换（VC）方法。其核心方法是在现有的流式Voice Conversion架构StreamVC基础上进行针对性适配：1）移除了不适用于EL语音的音高（F0）和能量估计模块以简化模型；2）设计了一种利用Whisper编码器特征和DTW对EL-HE（健康语音）平行数据进行时间对齐的预处理流程；3）在训练中引入了包括WavLM感知损失、人类反馈（HF）损失、可懂度损失等多种感知引导损失函数。与已有方法相比，本文的新意在于为EL语音转换这一特殊场景提供了端到端的轻量级流式解决方案，并系统评估了不同感知损失组合的影响。实验结果表明，最佳模型配置（+WavLM+HF）将EL语音的字符错误率（CER）从88.2%大幅降低至41.9%，将自然度评分（nMOS）从1.1提升至3.3，显著缩小了与健康语音的差距。其实际意义在于为语音康复提供了一种低延迟、轻量化的潜在工具。主要局限性是韵律生成和极端条件下的可懂度仍是瓶颈。

---

### 8. [MeanVoiceFlow: One-Step Nonparallel Voice Conversion with Mean Flows](/audio-paper-digest-blog/posts/2026-04-29-meanvoiceflow-one-step-nonparallel-voice)

✅ **7.0/10** | 前25% | #语音转换 | #流匹配 | #非并行训练 #零样本

👥 **作者与机构**

- 第一作者：Takuhiro Kaneko（NTT, Inc., Japan）
- 通讯作者：未说明
- 作者列表：Takuhiro Kaneko（NTT, Inc., Japan）、Hirokazu Kameoka（NTT, Inc., Japan）、Kou Tanaka（NTT, Inc., Japan）、Yuto Kondo（NTT, Inc., Japan）

#

💡 **毒舌点评**

该工作巧妙地将“均值流”这一前沿生成建模思想移植到语音转换任务，并针对性地设计了零输入约束和条件扩散输入训练来解决训练稳定性与一致性问题，思路清晰且实验扎实。但美中不足的是，其提出的“一步”模型在最终性能上并未对先前通过复杂蒸馏训练的“一步”模型形成代差优势，且完全未开源代码，让“可复现”的承诺大打折扣。

#

🔗 **开源详情**

- 代码：论文中未提及代码仓库链接。仅提供了音频样本链接：`https://www.kecl.ntt.co.jp/people/kaneko.takuhiro/projects/meanvoiceflow/`。
- 模型权重：未提及公开任何预训练模型权重。
- 数据集：使用了公开数据集VCTK和LibriTTS，但未提供处理后的数据或特定子集划分。
- Demo：未提供在线交互式演示，仅有音频样本文件。
- 复现材料：论文提供了相当详细的实验设置、网络架构、超参数和训练策略，具备较高的可复现性潜力，但缺少官方代码实现。
- 依赖的开源项目：论文中引用并可能依赖了以下开源工具/模型：HiFi-GAN（声码器）、说话人编码器（基于Jia et al. 2018）、瓶颈特征提取器（基于Liu et al. 2021）、UTMOS/DNSMOS/DNSMOS Pro（评测指标）、WavLM（提取说话人嵌入）、Whisper（计算CER）。

---

[← 返回 ICASSP 2026 论文分析](/audio-paper-digest-blog/posts/icassp2026-summary/)

📌 **核心摘要**

1. 要解决的问题：基于扩散和流匹配的语音转换模型虽然质量高，但由于需要迭代推理，转换速度慢，限制了其实时应用。
2. 方法核心：提出MeanVoiceFlow，一个基于“均值流”的一步非并行语音转换模型。其核心是用“平均速度”替代传统流匹配中的“瞬时速度”，使得路径积分可以在单步内直接计算，无需数值近似。
3. 主要创新：1）提出零输入约束，通过基于SSIM的结构性损失和对高质量样本设置margin的策略，稳定平均速度的训练，避免输出模糊。2）提出条件扩散输入训练，在训练时也使用混合了噪声的源语音作为输入，消除了训练和推理时的输入分布不匹配问题。
4. 主要实验结果：在VCTK数据集的零样本语音转换任务上，MeanVoiceFlow（一步推理）的客观指标（如pMOSs=3.90, SECS=0.883）和主观评测（nMOS=3.87, sMOS=2.92）均显著优于其他一步基线模型（如VoiceGrad-FM-1），并与多步模型（如VoiceGrad-FM-30）和通过蒸馏训练的FastVoiceGrad+性能相当。关键实验数据见下表。

| 模型 | NFE↓ | nMOS↑ | sMOS↑ | pMOSs↑ | pMOSn↑ | pMOSv↑ | CER↓ | SECS↑ |
| :--- | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| VoiceGrad-FM-1 | 1 | 3.14±0.11 | 2.60±0.13 | 3.81 | 3.69 | 4.01 | 1.1 | 0.885 |
| FastVoiceGrad† | 1 | 3.73±0.09* | 2.93±0.11 | 3.96 | 3.77 | 4.04 | 1.3 | 0.888 |
| FastVoiceGrad+† | 1 | 3.81±0.10 | 2.99±0.13 | 3.99 | 3.79 | 4.03 | 1.2 | 0.888 |
| MeanVoiceFlow | 1 | 3.87±0.09 | 2.92±0.13 | 3.98 | 3.78 | 4.10 | 1.2 | 0.886 |
| VoiceGrad-FM-30 | 30 | 3.79±0.10 | 2.92±0.12 | 3.88 | 3.79 | 4.05 | 1.1 | 0.885 |
| († 表示需要预训练教师和判别器) | | | | | | | | |

5. 实际意义：证明了无需知识蒸馏或对抗训练等复杂流程，也能从头训练出高质量的一步语音转换模型，降低了训练门槛，简化了部署流程。
6. 主要局限性：一步推理模型的语音自然度和说话人相似度与多步模型相比仍存在微小差距；论文未讨论模型对基频等精细声学特征的转换能力；未提供开源代码和模型，限制了社区的验证与应用。

#

---

### 9. [MaskVCT: Masked Voice Codec Transformer for Zero-Shot Voice Conversion with Increased Controllability via Multiple Guidances](/audio-paper-digest-blog/posts/2026-04-29-maskvct-masked-voice-codec-transformer-for-zero)

✅ **6.5/10** | 前50% | #语音转换 | #掩码建模 | #无分类器引导 #零样本

👥 **作者与机构**

- 第一作者：Junhyeok Lee（Johns Hopkins University, Center for Language and Speech Processing）
- 通讯作者：Najim Dehak（Johns Hopkins University, Center for Language and Speech Processing）
- 作者列表：
    - Junhyeok Lee（Johns Hopkins University, Center for Language and Speech Processing）
    - Helin Wang（Johns Hopkins University, Center for Language and Speech Processing）
    - Yaohan Guan（Johns Hopkins University, Center for Language and Speech Processing）
    - Thomas Thebaud（Johns Hopkins University, Center for Language and Speech Processing）
    - Laureano Moro-Velazquez（Johns Hopkins University, Center for Language and Speech Processing）
    - Jesús Villalba（Johns Hopkins University, Center for Language and Speech Processing）
    - Najim Dehak（Johns Hopkins University, Center for Language and Speech Processing）

#

💡 **毒舌点评**

这篇论文的亮点在于其前所未有的控制灵活性，通过巧妙设计让用户能在推理时“拧旋钮”来平衡音色、音高和音素，而非被固定在一种模式里。然而，其短板也很明显：MaskVCT-Spk模式为了极致音色模仿，可懂度（WER）比最强基线差了近一倍，且论文对如何系统化地选择那些“旋钮”权重（CFG系数）的讨论略显薄弱，更像是试错后的结果。

#

🔗 **开源详情**

- 代码：论文中未提及代码链接。
- 模型权重：未提及。
- 数据集：使用了多个公开数据集（LibriTTS-R, MLS, VCTK等），但未提供统一处理后的数据或下载说明。
- Demo：提供在线音频示例页面：https://maskvct.github.io/。
- 复现材料：论文中给出了一些训练细节（如优化器、学习率、步数、硬件、数据增强方法），但缺少关键的超参数搜索细节（如最终CFG权重的确定方法）和预处理脚本。
- 引用的开源项目：使用了以下开源工具/模型：
    - DAC (Descript Audio Codec)：音频编解码器。
    - SylBoost：提供音节表示。
    - Praat：用于音高提取。
    - Whisper (large-v3)：用于计算WER/CER。
    - WavLM：用于提取说话人嵌入计算S-SIM。
    - CommonAccent：用于计算口音相似度A-SIM。
    - UTMOS v2：用于计算自动质量评分。
- 论文中未提及完整的开源计划。

---

[← 返回 ICASSP 2026 论文分析](/audio-paper-digest-blog/posts/icassp2026-summary/)

📌 **核心摘要**

1.  问题：零样本语音转换面临两大挑战：一是难以彻底分离音高与语言内容（信息泄露），导致转换后语音保留源语音的语调；二是现有模型通常固定了条件输入模式，缺乏动态调节生成目标（如优先保留音色还是跟随源音高）的能力。
2.  方法核心：提出MaskVCT，一个基于掩码生成Transformer的零样本VC模型。其核心是结合音节表示（来自SylBoost，旨在剥离音高信息）与多个无分类器引导。模型可以接受连续或离散的语言特征，并可选择是否使用音高轮廓进行条件控制。
3.  新在哪里：与以往固定条件模式的模型不同，MaskVCT在单一模型中集成了多种条件（音高有/无、语言特征连续/离散），并通过三重无分类器引导的系数（ω_all, ω_spk, ω_ling）在推理时实现动态平衡，从而衍生出不同模式（如MaskVCT-All优先可懂度，MaskVCT-Spk优先说话人相似度）。
4.  主要实验结果：在LibriTTS-R测试集上，MaskVCT-Spk取得了最高的说话人相似度（S-SIM: 0.895，主观SS-MOS: 3.69），但可懂度最差（WER: 6.47，CER: 3.09）。MaskVCT-All在可懂度上表现较好（WER: 4.68）并精确跟踪源音高（FPC: 0.417）。在口音转换任务（L2-ARCTIC）中，MaskVCT-Spk在说话人相似度和口音相似度上表现突出。
5.  实际意义：该模型为语音转换提供了高灵活性的控制接口，用户可根据应用需求（如是否需要严格保持源语调，或是否需要模仿目标音色）调整模型行为，在语音编辑、个性化内容生成等场景有潜在价值。
6.  主要局限性：a) 可懂度与说话人相似度之间存在明显权衡，MaskVCT-Spk模式的错误率较高；b) 音节表示依赖K-means聚类，可能因错误映射导致误读，且难以纠正；c) 模型解码需要64次迭代，效率可能低于自回归或单次生成模型；d) 论文未提供代码和模型权重，限制了可复现性和直接应用。

#

---

