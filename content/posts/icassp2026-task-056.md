---
title: "ICASSP 2026 - 语音伪造检测 论文列表"
date: 2026-04-29
draft: false
tags: ["语音伪造检测"]
categories: [icassp-2026]
description: "共 8 篇 ICASSP 2026 语音伪造检测 方向论文"
hiddenInHomeList: true
---

# ICASSP 2026 - 语音伪造检测

共 **8** 篇论文

[← 返回 ICASSP 2026 总览](/audio-paper-digest-blog/posts/icassp2026-summary/)

---

| 排名 | 论文 | 评分 | 分档 |
|------|------|------|------|
| 🥇 | [WaveSP-Net: Learnable Wavelet-Domain Sparse Prompt Tuning fo](/audio-paper-digest-blog/posts/2026-04-29-wavesp-net-learnable-wavelet-domain-sparse-prompt) | 8.0分 | 前25% |
| 🥈 | [Fine-Grained Frame Modeling in Multi-Head Self-Attention for](/audio-paper-digest-blog/posts/2026-04-29-fine-grained-frame-modeling-in-multi-head-self) | 8.0分 | 前25% |
| 🥉 | [Detecting and Attributing Synthetic Spanish Speech: The HISP](/audio-paper-digest-blog/posts/2026-04-29-detecting-and-attributing-synthetic-spanish) | 7.5分 | 前25% |
| 4. | [Multi-Task Transformer for Explainable Speech Deepfake Detec](/audio-paper-digest-blog/posts/2026-04-29-multi-task-transformer-for-explainable-speech) | 7.5分 | 前25% |
| 5. | [Fake Speech Wild: Detecting Deepfake Speech on Social Media ](/audio-paper-digest-blog/posts/2026-04-29-fake-speech-wild-detecting-deepfake-speech-on) | 7.0分 | 前25% |
| 6. | [Addressing Gradient Misalignment in Data-Augmented Training ](/audio-paper-digest-blog/posts/2026-04-29-addressing-gradient-misalignment-in-data) | 7.0分 | 前25% |
| 7. | [Mind Your [m]S, Cross Your [t]S: a Large-Scale Phonetic Anal](/audio-paper-digest-blog/posts/2026-04-29-mind-your-ms-cross-your-ts-a-large-scale-phonetic) | 7.0分 | 前25% |
| 8. | [Tri-Attention Fusion: Joint Temporal-Spectral and Bidirectio](/audio-paper-digest-blog/posts/2026-04-29-tri-attention-fusion-joint-temporal-spectral-and) | 7.0分 | 前25% |

---

## 📋 论文详情

### 🥇 [WaveSP-Net: Learnable Wavelet-Domain Sparse Prompt Tuning for Speech Deepfake Detection](/audio-paper-digest-blog/posts/2026-04-29-wavesp-net-learnable-wavelet-domain-sparse-prompt)

🔥 **8.0/10** | 前25% | #语音伪造检测 | #时频分析 #预训练 | #时频分析 #预训练

👥 **作者与机构**

- 第一作者：Xi Xuan（University of Eastern Finland）
- 通讯作者：Xi Xuan（University of Eastern Finland， 邮箱：xi.xuan@uef.fi）
- 作者列表：
  - Xi Xuan（University of Eastern Finland）
  - Xuechen Liu（National Institute of Informatics）
  - Wenxin Zhang（University of Chinese Academy of Sciences， University of Toronto）
  - Yi-Cheng Lin（National Taiwan University）
  - Xiaojian Lin（Tsinghua University）
  - Tomi Kinnunen（University of Eastern Finland）

💡 **毒舌点评**

亮点： 论文巧妙地将经典的、可解释的小波变换（多分辨率分析）与前沿的参数高效微调（Prompt Tuning）相结合，不仅提升了检测性能，还通过消融实验有力地证明了可学习小波滤波器和稀疏化机制的关键作用，这种“老树开新花”的思路值得肯定。  
短板： 尽管在DE24和SpoofCeleb两个基准上表现优异，但论文的实验验证相对局限，主要依赖于SSL模型XLSR和特定后端Mamba，未能探讨该小波提示框架在其他预训练模型（如HuBERT）或更轻量级端侧模型上的泛化能力与适用性，其“普适性”有待更广泛验证。

🔗 **开源详情**

- 代码： 提供代码仓库链接：https://github.com/xxuan-acoustics/WaveSP-Net。
- 模型权重： 论文未明确提及是否提供预训练模型权重下载。
- 数据集： 使用的DE24和SpoofCeleb均为公开基准数据集，论文提供了数据集获取链接（DE24: https://huggingface.co/datasets/nuriachandra/Deepfake-Eval-2024, SpoofCeleb: https://www.jungjee.com/spoofceleb/）。
- Demo： 未提及。
- 复现材料： 提供了完整的实现细节，包括：音频预处理方式、使用的SSL模型（XLSR-300M）、提示令牌数量、稀疏比率、Mamba块数量、dropout率、batch size、学习率、优化器、训练轮数、早停策略以及开发集选择标准。
- 论文中引用的开源项目： 依赖Facebook的XLSR-300M预训练模型（Hugging Face提供）。

📌 **核心摘要**

1.  问题： 当前基于全微调大型自监督模型（如XLSR）的语音深度伪造检测方法参数效率低，且在面对真实世界中未见过的复杂攻击、编解码器和压缩格式时，泛化能力可能不足。
2.  方法核心： 提出了一种新型参数高效前端 WaveSP-Net，其核心是“可学习小波域稀疏提示调优”（Partial-WSPT）。该方法冻结XLSR参数，为每一层引入一组可学习的提示令牌（Prompt Tokens），并创新性地对其中部分令牌进行小波域增强处理：通过可学习的小波分解（LWD）提取信号的多分辨率特征，利用随机稀疏化（WDS）进行正则化与去噪，最后通过可学习的小波重构（LWR）将处理后的特征合并回提示令牌序列。该前端与一个双向Mamba后端分类器相结合。
3.  创新之处： 与未结构化的普通提示调优相比，该方法首次将结构化的、具有时频局部化能力的小波变换引入到提示嵌入中，通过施加信号处理领域的先验知识来约束和增强提示令牌，使其能更有效、更稀疏地引导模型关注与伪造伪影相关的频带和时间局部特征。
4.  主要结果： 在两个具有挑战性的新基准 Deepfake-Eval-2024 (DE24) 和 SpoofCeleb 上，WaveSP-Net 取得了最佳性能。在DE24上，其EER为10.58%（相比最强基线XLSR-1B的11.85%有10.72%的相对改进）；在SpoofCeleb上，EER低至0.13%。同时，可训练参数量仅占模型总参数量的1.298%，体现了极高的参数效率。关键消融实验表明，移除稀疏化（WDS）会导致EER相对上升35.54%，而使用固定小波滤波器比使用可学习滤波器EER相对上升56.44%，验证了各组件的有效性。
5.  实际意义： 该工作为语音安全领域提供了一种高效、高性能的检测模型，尤其适用于需要更新或适配大规模预训练模型以应对新攻击的场景，降低了计算和存储成本。
6.  主要局限性： 论文主要评估了在两个特定大规模基准上的性能，未深入探讨在更极端退化条件（如高背景噪声、低比特率压缩）下的鲁棒性。此外，其Mamba后端虽然高效，但也引入了新的架构复杂性。

---

### 🥈 [Fine-Grained Frame Modeling in Multi-Head Self-Attention for Speech Deepfake Detection](/audio-paper-digest-blog/posts/2026-04-29-fine-grained-frame-modeling-in-multi-head-self)

🔥 **8.0/10** | 前25% | #语音伪造检测 | #自监督学习 | #模型评估 #Conformer

👥 **作者与机构**

-   第一作者：Phuong Tuan Dat (河内科技大学信息与通信技术学院)
-   通讯作者：Nguyen Thi Thu Trang (河内科技大学信息与通信技术学院)
-   作者列表：Phuong Tuan Dat (河内科技大学信息与通信技术学院)， Duc-Tuan Truong (南洋理工大学计算与数据科学学院)， Long-Vu Hoang (河内科技大学信息与通信技术学院)， Nguyen Thi Thu Trang (河内科技大学信息与通信技术学院)

#

💡 **毒舌点评**

亮点：论文将细粒度视觉分类的“投票选择”思想巧妙移植到语音领域，通过显式建模注意力头的“专长”并选择性聚合关键帧，有效解决了标准MHSA可能忽略局部伪造伪影的问题，方法新颖且有效。短板：高斯核增强的卷积核是固定的（`[1, 2, 3, 4, 3, 2, 1]`），缺乏理论依据或可学习性分析；且所选关键帧数量`v`需人工调优，在不同音频长度或任务下可能不具备普适性。

#

🔗 **开源详情**

-   代码：论文中未提及代码链接。
-   模型权重：未提及。
-   数据集：使用公开数据集（ASVspoof 2019, ASVspoof 2021, In-the-Wild），但未说明如何获取本文实验所用的具体版本或预处理后的数据。
-   Demo：未提及。
-   复现材料：论文描述了模型架构和主要超参数（如`v=24`），但未提供训练脚本、详细超参数（学习率、优化器等）、配置文件或检查点。复现需要较多额外工作。
-   引用的开源项目：论文中引用并依赖了预训练模型XLS-R作为特征提取器。

📌 **核心摘要**

1.  问题：基于Transformer的语音深度伪造检测模型虽然强大，但其多头自注意力机制倾向于生成全局聚合特征，可能忽略或稀释伪造语音中局部、短暂的细微伪影，导致检测漏洞。
2.  核心方法：提出细粒度帧建模（FGFM）框架，包含两个核心模块：a) 多头投票（MHV）模块：将每个注意力头视为弱学习器，通过投票机制为每个头选择信息量最大的`v`个语音帧，并用高斯核卷积增强选择结果；b) 跨层精炼（CLR）模块：将不同层选出的关键帧与分类符拼接输入额外的Transformer块，并通过并行的交叉注意力进行双向信息交换和融合，最终用DAFF模块聚合得到精炼的分类特征。
3.  创新点：首次将细粒度视觉分类中的内部集成学习（投票）思想应用于语音伪造检测，显式利用多头注意力头的多样性，并设计了跨层信息聚合机制来增强关键帧特征的表示。
4.  主要实验结果：在ASVspoof 2021 LA、DF和In-the-Wild（ITW）三个基准测试上，FGFM将强基线XLSR-Conformer的EER分别从0.97%、2.58%、8.42%降低至0.90%、1.88%、6.64%，在ITW数据集上取得了当时的最优性能。消融实验证明MHV中的增强操作和CLR中的DAFF模块均对性能有显著贡献。

| 模型 | EER (%) | | |
| :--- | :---: | :---: | :---: |
| | 21LA | 21DF | ITW |
| XLSR-Conformer [17]† (基线) | 0.97 | 2.58 | 8.42 |
| + FGFM (本文) | 0.90 | 1.88 | 6.64 |
| XLSR-Mamba [28] | 0.93 | 1.88 | 6.71 |
| XLSR-SLS [26] | 5.08 | 1.92 | 7.46 |
| XLSR-AASIST [23] | 1.00 | 3.69 | 10.46 |

5.  实际意义：为语音深度伪造检测提供了一种新的、可插拔的模块化改进方案，能有效提升现有MHSA基模型对局部伪影的敏感性，增强模型在跨域场景下的鲁棒性。
6.  主要局限性：a) 引入了额外的计算开销（两个额外的Conformer块和复杂的模块）；b) MHV模块中选择的帧数量`v`是超参数，需要根据数据分布调整；c) 论文未提供代码，阻碍了快速验证和应用。

#

---

### 🥉 [Detecting and Attributing Synthetic Spanish Speech: The HISPASpoof Dataset](/audio-paper-digest-blog/posts/2026-04-29-detecting-and-attributing-synthetic-spanish)

✅ **7.5/10** | 前25% | #语音伪造检测 | #数据集 | #多语言 #零样本

👥 **作者与机构**

- 第一作者：Maria Risques（普渡大学电气与计算机工程学院，视频与图像处理实验室 VIPER）
- 通讯作者：Edward J. Delp（普渡大学电气与计算机工程学院，视频与图像处理实验室 VIPER）
- 作者列表：Maria Risques（普渡大学 VIPER 实验室）、Kratika Bhagtani（普渡大学 VIPER 实验室）、Amit Kumar Singh Yadav（普渡大学 VIPER 实验室）、Edward J. Delp（普渡大学 VIPER 实验室）

💡 **毒舌点评**

亮点：论文精准地切入了一个关键且被忽视的研究空白——西班牙语语音伪造检测，通过构建首个大规模、多口音的合成/真实语音数据集 HISPASpoof，为后续研究提供了不可或缺的基石，填补了领域的重大缺口。短板：论文的核心贡献是“数据集+评估”，并未提出新的检测或归因模型或算法，其学术创新主要体现在数据工程和实验验证层面，而非方法论的突破。

🔗 **开源详情**

- 代码：提供了评估代码的GitLab仓库链接：https://gitlab.com/viper-purdue/s3d-spanish-syn-speech-det.git。论文中也提及了使用的具体方法代码库来源[47]。
- 模型权重：论文中未提及是否公开预训练或微调后的模型权重。
- 数据集：HISPASpoof数据集已公开，采用CC BY-SA 4.0许可，可通过上述GitLab仓库链接获取。
- Demo：论文中未提及提供在线演示。
- 复现材料：提供了数据集的详细分布说明（表I）和实验设置描述（如数据划分），但未提供具体的训练超参数（学习率、优化器、batch size等）、硬件信息和详细的配置文件。
- 论文中引用的开源项目：使用了多个开源的TTS系统生成数据（XTTS-v1/v2, YourTTS, FishSpeech, F5-Spanish），并评估了多个开源检测器实现（LFCC-GMM, MFCC-ResNet, Spec-ResNet, PaSST, Wav2Vec2-AASIST）。
- 总体开源情况：论文在数据集和评估代码开源方面做得较好，但完整复现所需的训练细节和模型权重未提供。

📌 **核心摘要**

1.  问题：当前先进的语音合成（TTS）和语音克隆技术可生成高度逼真的合成语音，带来严重的欺诈和滥用风险。尽管针对英语和中文已有成熟的检测器和数据集，但作为全球6亿人使用的语言，西班牙语在语音取证领域却严重缺乏研究和评估基准。
2.  方法核心：本文提出了 HISPASpoof 数据集，这是首个大规模西班牙语合成语音检测与归因数据集。数据集包含来自6个公开语料库（涵盖6种西班牙语口音）的真实语音，以及由6种前沿的零样本TTS系统生成的合成语音。论文利用该数据集，系统评估了5种代表性的检测方法在跨语言（英语→西班牙语）和特定语言（西班牙语）训练下的性能。
3.  新意：这是首个专门针对西班牙语的、大规模、多口音、多合成器的语音伪造检测与归因数据集。与以往多语言数据集（如ODSS）相比，HISPASpoof在西班牙语音频数量（超过50万条）、口音多样性（6种）和合成系统多样性（6种）上均有显著提升。
4.  主要实验结果：
    *   检测性能：实验证明，在英语数据集（ASVspoof2019）上训练的检测器直接应用于西班牙语时性能急剧下降（EER普遍高于30%，最差达49.57%）。在HISPASpoof上训练后，检测性能大幅提升。具体关键结果见下表：
        | 训练集 | 测试集 | LFCC+GMM EER(%) | MFCC-ResNet EER(%) | Spec-ResNet EER(%) | PaSST EER(%) | Wav2Vec2-AASIST EER(%) |
        | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
        | ASVspoof2019 (英语) | UHIS (西班牙语) | 42.71 | 41.72 | 43.23 | 32.14 | 19.92 |
        | HISPASpoof (西班牙语) | UHIS (西班牙语) | 1.57 | 5.17 | 0.72 | 4.10 | 10.27 |
        | HISPASpoof (西班牙语) | UODSSSpa (跨数据集) | 0.85 | 48.72 | 17.09 | 17.95 | 43.59 |
    *   归因性能：在归因（识别合成器）任务中，闭集设置下各方法均接近完美（PaSST准确率100%）。开放集（需识别未见过的合成器）更具挑战性，PaSST表现最佳（准确率78.32%），Spec-ResNet次之（69.73%）。
5.  实际意义：HISPASpoof 为西班牙语语音安全研究提供了关键的评测基准，揭示了现有英语检测器在西班牙语上的失效，并验证了使用领域内数据训练的有效性，推动了语音取证研究的包容性发展。
6.  主要局限性：论文的核心是提出数据集并进行基线评估，没有提出新的检测或归因算法。开源计划中未提及模型权重的公开。

---

### 4. [Multi-Task Transformer for Explainable Speech Deepfake Detection via Formant Modeling](/audio-paper-digest-blog/posts/2026-04-29-multi-task-transformer-for-explainable-speech)

✅ **7.5/10** | 前25% | #语音伪造检测 | #多任务学习 | #Transformer #音频安全

👥 **作者与机构**

- 第一作者：Viola Negroni (Politecnico di Milano, 意大利米兰理工大学电子、信息与生物工程系)
- 通讯作者：未说明（论文中未明确标注通讯作者）
- 作者列表：Viola Negroni (Politecnico di Milano), Luca Cuccovillo† (Fraunhofer IDMT), Paolo Bestagini (Politecnico di Milano), Patrick Aichroth† (Fraunhofer IDMT), Stefano Tubaro (Politecnico di Milano)。 和 † 对应其所属机构。

#

💡 **毒舌点评**

这篇论文的亮点在于其“设计即解释”的思路，通过引入共振峰预测和发声区域检测作为辅助任务，让模型决策过程更具物理意义，而非纯粹的黑箱分类。然而，其短板也十分明显：与自身前代模型的对比固然重要，但若想在领域内立足，缺少与 AASIST、RawNet2 等经典基线的直接较量，说服力难免打折扣；更致命的是，全文只字未提开源计划，让“可复现性”在实践中沦为一句空话。

#

🔗 **开源详情**

- 代码：论文中未提及代码链接。
- 模型权重：未提及。
- 数据集：使用公开数据集（ASVspoof 5, In-the-Wild, FakeOrReal, TIMIT-TTS），但未提供额外数据。
- Demo：未提及。
- 复现材料：论文提供了详细的超参数、损失函数权重、训练硬件及时长等信息，但未提供训练好的模型检查点或完整的配置文件。
- 论文中引用的开源项目：Parselmouth (用于提取F1, F2)，pYIN算法（用于提取F0）。

📌 **核心摘要**

1.  问题：现有语音深度伪造检测模型往往缺乏可解释性，决策可能依赖于背景噪声等与语音内容无关的线索，且部分模型计算复杂度高。
2.  方法核心：提出SFATNet-4，一个基于Transformer的多任务检测模型。其核心思想是：将伪造检测设计为语音表征学习和韵律分析的副产品。模型包含两个编码器（处理幅度与相位）和三个解码器，分别用于：（1）预测基频F0及共振峰F1/F2的轨迹（多共振峰解码器）；（2）区分语音的浊音/清音区域（发声解码器）；（3）进行伪造/真实分类，同时通过注意力机制输出帧级重要性权重（合成预测器）。
3.  创新点：相比其前代SFATNet-3，主要改进包括：（a）将输入分块策略从二维时频块改为一维时间帧，提升效率并支持帧级解释；（b）重新设计共振峰解码器，直接预测连续轨迹；（c）用发声预测任务取代幅度重建任务；（d）在分类器中引入基于注意力的池化机制，实现决策的帧级可解释性。
4.  主要实验结果：
    - 性能：在ASVspoof 5等4个数据集上，模型在EER和AUC指标上均优于SFATNet-3。例如，在ASVspoof 5测试集上，EER从8.85%降至4.41%，AUC从96.69%升至98.89%。
    - 效率：参数量从64.7M减少至41.8M（减少约22.9%），在NVIDIA A40 GPU上单次epoch训练时间从60多分钟缩短至约15分钟，训练速度提升约4倍。
    - 鲁棒性：对常见音频编码（如MP3, Opus）具有一定的内在鲁棒性，但性能在编码处理后有所下降。
    - 可解释性：通过注意力权重分析发现，模型对真实语音在域内数据上均衡使用浊音/清音信息，但对伪造语音则更依赖清音区域，这为伪造伪影的定位提供了新视角。
    ![图3](pdf-image-page1-idx2)
    图3展示了模型在不同数据集上，对正确分类的真实和伪造语音样本中，浊音与清音帧的注意力权重占比。
5.  实际意义：为构建更透明、可信、高效的语音伪造检测系统提供了新思路，有助于理解模型决策依据，符合可信赖AI的发展趋势。
6.  主要局限性：（1）缺乏与当前领域内SOTA模型的直接性能对比；（2）未提供开源代码或模型，复现性不足；（3）其可解释性分析依赖于注意力权重，这本身也是一种近似，并非绝对的因果解释；（4）模型对编码压缩等真实世界条件的鲁棒性仍有待通过数据增强进一步提升。

#

---

### 5. [Fake Speech Wild: Detecting Deepfake Speech on Social Media Platform](/audio-paper-digest-blog/posts/2026-04-29-fake-speech-wild-detecting-deepfake-speech-on)

✅ **7.0/10** | 前25% | #语音伪造检测 | #自监督学习 | #数据增强 #鲁棒性

👥 **作者与机构**

- 第一作者：Yuankun Xie（Communication University of China, Beijing, China）
- 通讯作者：Ruibo Fu（Institute of Automation, Chinese Academy of Sciences, Beijing, China），Long Ye（Communication University of China, Beijing, China）
- 作者列表：Yuankun Xie（中国传媒大学），Ruibo Fu（中国科学院自动化研究所），Xiaopeng Wang（北京理工大学），Zhiyong Wang（中国科学院自动化研究所），Ya Li（北京邮电大学），Yingming Gao（北京邮电大学），Zhengqi Wen（北京国家信息科学与技术研究中心，清华大学），Haonan Cheng（中国传媒大学），Long Ye（中国传媒大学）

#

💡 **毒舌点评**

这篇论文最大的亮点是做了一件“脏活累活”——构建了一个贴近真实世界、多平台、多账户的中文深度伪造语音数据集（FSW），并用它系统性地戳穿了现有检测模型在“温室”数据集上虚假的高性能泡沫，为社区提供了更严格的评估标准。短板在于，它本质上是“评估”和“诊断”工作，虽然实用，但并未提出一种具有突破性的新型检测模型架构，更像是为后续工作铺设了一条更真实的跑道。

#

🔗 **开源详情**

- 代码：论文中提及数据集链接（https://github.com/xieyuankun/FSW），但未明确提供模型训练和推理的代码仓库链接。
- 模型权重：未提及公开任何训练好的模型权重。
- 数据集：已公开。论文提供了FSW数据集的GitHub仓库链接（同上），可获取。
- Demo：未提及。
- 复现材料：提供了数据集，部分训练细节（优化器、学习率、轮数）在论文中说明。但未提供配置文件、检查点、环境配置、硬件信息等。
- 论文中引用的开源项目：使用了pyannote进行VAD分割（https://huggingface.co/pyannote/segmentation），以及预训练SSL模型WavLM-large和XLS-R（来自Hugging Face）。

📌 **核心摘要**

1.  解决什么问题：现有深度伪造语音检测（ADD）模型在公开的“干净”数据集上性能极佳，但在社交媒体等真实世界的跨域场景下性能严重下降，泛化能力不足。
2.  方法核心是什么：作者首先构建了首个针对中文社交媒体平台的Fake Speech Wild (FSW)数据集，涵盖四个平台、128个账户、254小时音频。然后，以自监督学习（SSL）模型（如WavLM， XLS-R）为前端，AASIST为后端，建立了检测基准。通过在不同公开数据集上训练，并探索数据增强（MUSAN/RIR， Rawboost）策略，最终采用多数据集联合训练（包括FSW训练集）来提升模型在真实场景下的鲁棒性。
3.  与已有方法相比新在哪里：主要新意在于：a) 数据集：FSW数据集比之前的“In the Wild (ITW)”数据集覆盖了更多中文平台、账户和语言，并包含了更现代的基于音频语言模型（ALM）的伪造方法。b) 评估框架：系统性地评估了不同数据集、不同SSL前端和不同数据增强策略组合下的跨域性能，并揭示了联合训练对泛化的关键作用。
4.  主要实验结果：实验表明，仅用公开数据集训练的模型在FSW上表现不佳（最高EER超30%）。通过数据增强和包含FSW训练集的联合训练，性能大幅提升。最终，最佳模型（XLS-R-AASIST， 使用MR数据增强，在四个数据集上联合训练）在所有评估集（包括公开数据集和FSW测试集）上的平均等错误率（EER）达到3.54%。关键结果见下表。

    | 训练集 | 数据增强 | 对抗模型 | 公共数据集 (19LA/ CFAD/ Codecfake) EER (%) | ITW EER (%) | FSW各子集 EER (%) | 平均 EER (%) |
    | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
    | 联合训练 (Co-trained) | MR | XLS-R-AASIST | 0.43 / 0.31 / 0.20 | 3.58 | 19.08 / 4.72 / 18.58 / 14.86 | 12.67 |
    | 联合训练+FSW (Co-trained + FSW) | 无 | XLS-R-AASIST | 0.57 / 0.13 / 0.23 | 9.35 | 12.55 / 4.57 / 9.71 / 12.16 | 9.99 |
    | 联合训练+FSW (Co-trained (MR) + FSW) | MR | XLS-R-AASIST | 0.45 / 0.21 / 0.20 | 5.24 | 11.58 / 3.54 / 13.21 / 13.03 | 6.62 (论文报告为3.54) |

    注：论文报告最终平均EER为3.54%，表中间接反映了联合训练结合数据增强的协同提升效果。FSW子集列顺序为 B/Y/D/X平台。
5.  实际意义：为中文社交媒体环境下的深度伪造语音检测提供了更可靠的数据基准和优化方向，推动了检测模型从实验室走向真实场景。
6.  主要局限性：a) FSW训练集规模相对较小（仅约2万条），可能限制了模型从中学到更全面的特征。b) 论文核心创新是数据集和评估，未提出全新的检测模型架构。c) 实验未提供训练所用的具体GPU型号和时长等硬件信息。

#

---

### 6. [Addressing Gradient Misalignment in Data-Augmented Training for Robust Speech Deepfake Detection](/audio-paper-digest-blog/posts/2026-04-29-addressing-gradient-misalignment-in-data)

✅ **7.0/10** | 前25% | #语音伪造检测 | #数据增强 | #鲁棒性 #梯度优化

👥 **作者与机构**

- 第一作者：Duc-Tuan Truong（南洋理工大学，新加坡）
- 通讯作者：Ruijie Tao（新加坡国立大学）、Kong Aik Lee（香港理工大学）（论文中标注为共同通讯作者）
- 作者列表：Duc-Tuan Truong（南洋理工大学）、Tianchi Liu（新加坡国立大学）、Junjie Li（香港理工大学）、Ruijie Tao（新加坡国立大学）、Kong Aik Lee（香港理工大学）、Eng Siong Chng（南洋理工大学）

#

💡 **毒舌点评**

亮点：论文首次敏锐地指出了“数据增强双路径训练中同一语句的原始与增强版本梯度冲突”这一被忽视却普遍存在的现象，并设计了优雅的DPDA框架加以解决，理论分析（损失曲面可视化）与实验证据结合得很有说服力。短板：核心的“梯度对齐”技术（PCGrad等）是直接“借用”自多任务学习领域，本文的创新更多在于问题发现和技术迁移应用，而非算法本身的原创性突破。

#

🔗 **开源详情**

- 代码：论文明确提供了代码仓库链接：`github.com/ductuantruong/dpda_ga`。
- 模型权重：论文中未提及是否公开预训练模型权重。
- 数据集：论文使用的ASVspoof2019 LA、ASVspoof2021 DF、In-the-Wild、FoR均为公开数据集，但未说明具体获取方式。
- Demo：未提供在线演示。
- 复现材料：提供了代码仓库，是核心复现材料。论文描述了模型架构、数据增强方法（RawBoost配置4）、训练策略（如早停、批大小）等关键细节，但缺少如学习率、优化器、具体硬件等训练超参数。
- 引用的开源项目：论文依赖并提及了XLSR模型（来自Hugging Face）、RawBoost增强工具、以及作为对比的多种SDD模型代码。

📌 **核心摘要**

本文针对语音深度伪造检测（SDD）模型在使用数据增强（DA）训练时，原始输入与增强输入反向传播梯度方向不一致（冲突）导致优化矛盾、影响模型泛化的问题，提出了一种双路径数据增强训练框架与梯度对齐方法。该框架将每个训练语句同时通过原始路径和增强路径输入共享模型，计算损失后，在梯度更新前使用PCGrad等梯度对齐技术处理冲突。主要创新在于首次在SDD领域系统研究并量化了DA训练中的梯度冲突（约25%的迭代存在冲突），并通过损失曲面可视化证明冲突源于不同的损失景观。实验表明，该方法在XLSR-AASIST、XLSR-Conformer-TCM、XLSR-Mamba三种架构上，配合RawBoost等多种增强方法，在ASVspoof2021-DF、In-the-Wild、FoR等挑战性测试集上均能稳定提升性能。例如，在XLSR-Conformer-TCM上，使用PCGrad在ITW数据集上将EER从7.97%降至6.48%，相对降低约18.69%。该方法能加速收敛（提前至第4个epoch达到最低验证损失）。其实际意义在于提供了一种即插即用、与模型和增强技术无关的训练优化策略，以提升SDD的鲁棒性。局限性在于主要从经验层面分析，缺乏对梯度冲突产生理论条件的深层探究，且梯度对齐技术本身非本文原创。

#

---

### 7. [Mind Your [m]S, Cross Your [t]S: a Large-Scale Phonetic Analysis of Speech Reproduction in Modern Speech Generators](/audio-paper-digest-blog/posts/2026-04-29-mind-your-ms-cross-your-ts-a-large-scale-phonetic)

✅ **7.0/10** | 前25% | #语音伪造检测 | #音位分析 | #语音合成 #模型比较

👥 **作者与机构**

- 第一作者：Boo Fullwood（佐治亚理工学院 ECE & School of Cybersecurity and Privacy）
- 通讯作者：未说明
- 作者列表：Boo Fullwood（佐治亚理工学院 ECE & School of Cybersecurity and Privacy）、Fabian Monrose（佐治亚理工学院 ECE & School of Cybersecurity and Privacy）

💡 **毒舌点评**

本文如同一份详尽的“现代语音合成器体检报告”，首次对如此多种类的生成器进行了大规模“病理学”扫描，发现了鼻音和阻塞音这个普遍存在的“病灶”，并精准定位问题主要出在“文本到频谱”的环节，为后续“治疗”（改进生成器或设计更精准的检测器）提供了清晰的诊断书。其短板在于只开出了“诊断书”，却没有附上“药方”或“手术指南”——即基于这些发现提出具体的、新的检测算法或生成器改进方案，且复现门槛较高。

🔗 **开源详情**

-   代码：论文中未提及代码链接。
-   模型权重：未提及。
-   数据集：使用了公开的LJSpeech和VCTK语料库，但论文未提供其生成的合成语音数据集。
-   Demo：未提及。
-   复现材料：未提供训练细节、配置、检查点或详细附录说明。分析方法描述足够，但执行所需资源和具体操作细节缺失。
-   论文中引用的开源项目：明确引用了Montreal Forced Aligner (MFA) 作为强制对齐工具。此外，评估的生成器（如HiFi-GAN, VITS, YourTTS等）大多是公开的开源项目，但论文未列出具体依赖链接。
-   论文中未提及开源计划。

📌 **核心摘要**

1.  要解决的问题：现代高质量语音生成器的具体失效模式（即无法准确再现哪些语音特征）尚不清楚，这限制了基于语音内在特征的深伪检测器的优化。
2.  方法核心：对23种现代语音生成器配置（涵盖纯声码器、文本到语音、端到端系统、语音克隆模型）在单说话人（LJSpeech）和多说话人（VCTK，110位说话人）数据集上生成的语音进行大规模音位分析。通过强制对齐提取音位，计算多种声学特征（如基频、频谱质心、过零率等）的分布，并与真实语音分布进行统计比较（KS检验，Wasserstein距离）。
3.  与已有方法相比新在哪里：这是首个针对现代、多样化架构的大规模音位分析。超越了先前仅研究少量旧模型或特定音位类（如擦音）的工作，系统性地覆盖了多种音位类，并首次发现鼻音是生成器的普遍弱点。同时，将错误模式与生成器架构（TTS阶段 vs. 声码器阶段）和检测器的注意力机制进行了关联分析。
4.  主要实验结果：
    *   所有测试模型都能准确再现基频（F0）特征。
    *   主要错误集中在阻塞音（如[t]）和鼻音（如[m]），表现为频谱特征（如过零率、谐波噪声比）的分布偏移。
    *   纯声码器（从真实梅尔谱合成波形）的错误极小；而文本到语音（TTS）系统是主要错误来源，其错误主要发生在将文本转换为梅尔谱的阶段。
    *   在多说话人设置下，语音克隆（VC）模型的表现显著优于同等的文本到语音模型，例如FreeVC在除频谱倾斜外的所有特征上都接近零错误。
    *   现代深伪检测器（AST）的注意力区域与高错误音位类（如擦音、鼻音）大致对齐，但并未充分利用所有错误显著的音位类（如塞擦音的注意力远低于擦音），且在单说话人场景下过度依赖非语音（静音）区域。

![图1](pdf-image-page3-idx0)
图1：单说话人（a）和多说话人（b）数据集上，各生成器样本与真实语音的特征分布差异（Wasserstein距离）。颜色越亮表示差异越大。可以看到阻塞音、鼻音和部分元音区域差异明显。

![图2](pdf-image-page3-idx1)
图2：检测器注意力与特征分布距离的对齐情况。检测器对擦音、鼻音、塞音的注意力较高，但对塞擦音的注意力相对其错误率而言不足。在单说话人组，静音区获得了最高注意力，尽管其分布错误很低。

5.  实际意义：为语音合成技术改进提供了明确方向（需重点提升阻塞音和鼻音的频谱再现能力），并为深伪检测器指明了优化路径（应更关注特定音位类的语音特征，而非非语音伪影），有助于构建更鲁棒的检测系统。
6.  主要局限性：研究聚焦于分析和诊断，未提出新的检测或生成模型。分析依赖于特定特征选择和音位对齐工具。结论基于英文语音，对其他语言适用性未验证。未公开分析代码、生成器细节或合成数据。

---

### 8. [Tri-Attention Fusion: Joint Temporal-Spectral and Bidirectional Modeling for Speech Spoofing Detection](/audio-paper-digest-blog/posts/2026-04-29-tri-attention-fusion-joint-temporal-spectral-and)

✅ **7.0/10** | 前25% | #语音伪造检测 | #注意力机制 | #状态空间模型 #端到端

👥 **作者与机构**

- 第一作者：Minjiao Yang（北京邮电大学网络空间安全学院）
- 通讯作者：Kangfeng Zheng（北京邮电大学网络空间安全学院，姓名后带星号*）
- 作者列表：Minjiao Yang（北京邮电大学网络空间安全学院）、Kangfeng Zheng（北京邮电大学网络空间安全学院）、Jujie Wang（北京邮电大学网络空间安全学院）、Xiaoyu Zhang（北京邮电大学网络空间安全学院）、Yaru Zhao（国际关系学院）

💡 **毒舌点评**

这篇论文在Mamba日益火热的语音防伪赛道上，为BiMamba-ST模型量身打造了一个结构精巧、消融实验扎实的融合模块，实验结果在多个公开基准上取得了稳定的提升，尤其是端到端方案在In-the-Wild数据集上的相对EER下降31%，显示了不错的泛化能力。然而，核心创新主要集中在对已有骨干网络输出端的信息整合方式，而非提出全新的检测范式或发现更本质的伪造痕迹，且缺乏代码和模型开源，限制了其在社区内被快速验证和应用的可能性。

🔗 **开源详情**

- 代码：论文中未提及代码链接。
- 模型权重：未提及公开权重。
- 数据集：使用了公开的ASVspoof 2019/2021系列数据集和In-the-Wild数据集，但论文本身未公开额外数据集。
- Demo：未提供在线演示。
- 复现材料：论文给出了较为详细的训练细节、超参数设置（学习率、批大小、优化器、训练轮数）、损失函数权重、数据增强算法选择以及硬件信息（单卡A800）。部分超参数（如Sinc卷积的具体参数、SE-Res2Net的内部结构）引用了先前工作[17, 19]，但未在附录中完整复述。
- 论文中引用的开源项目：论文引用了多个开源项目或其官方实现作为基线进行对比，如RawBMamba [19], BiCrossMamba-ST [14], AASIST [6], SE-Rawformer [9], XLSR-Mamba [10]等。
- 总体开源情况：论文中未提及开源计划（代码、模型）。

📌 **核心摘要**

这篇论文针对语音伪造检测任务中，需要同时建模时频域、短时与长时依赖关系的挑战，提出了一种名为“三重注意力融合”（Tri-Attention Fusion）的模块。该方法以BiMamba-ST（一种双向Mamba的时频双分支骨干网络）的输出为基础，通过三个子模块逐步整合信息：局部域注意力（LDA）在通道维度自适应融合前向和反向扫描得到的特征；跨域注意力（CDA）通过通道Gram矩阵在共享通道空间内实现时域与频域特征的交互；全局表示池化（GRP）将序列特征聚合为固定维度的嵌入。该模块被集成到端到端和预训练（XLSR）两种前端中进行评估。实验结果在ASVspoof 2019 LA、2021 LA、2021 DF以及In-the-Wild四个数据集上，均取得了与现有最佳方法持平或超越的性能。例如，在端到端前端下，其在In-the-Wild数据集上的EER为33.48%，相比基线RawBMamba（48.53%）有31%的相对下降。该工作的核心意义在于证明了一个设计良好的渐进式融合模块能显著提升Mamba类模型在复杂伪造检测任务中的特征建模能力。主要局限性在于其创新是模块级的，且未开源代码与模型，复现依赖论文中的细节描述。

---

