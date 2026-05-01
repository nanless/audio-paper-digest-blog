---
title: "ICASSP 2026 - 音视频 论文列表"
date: 2026-04-29
draft: false
tags: ["音视频"]
categories: [icassp-2026]
description: "共 6 篇 ICASSP 2026 音视频 方向论文"
hiddenInHomeList: true
---

# ICASSP 2026 - 音视频

共 **6** 篇论文

[← 返回 ICASSP 2026 总览](/audio-paper-digest-blog/posts/icassp2026-summary/)

---

| 排名 | 论文 | 评分 | 分档 |
|------|------|------|------|
| 🥇 | [Uncertainty-Aware 3D Emotional Talking Face Synthesis with E](/audio-paper-digest-blog/posts/2026-04-29-uncertainty-aware-3d-emotional-talking-face) | 8.0分 | 前25% |
| 🥈 | [RAP: Real-Time Audio-Driven Portrait Animation with Video Di](/audio-paper-digest-blog/posts/2026-04-29-rap-real-time-audio-driven-portrait-animation) | 7.0分 | 前25% |
| 🥉 | [Attentive AV-Fusionnet: Audio-Visual Quality Prediction with](/audio-paper-digest-blog/posts/2026-04-29-attentive-av-fusionnet-audio-visual-quality) | 7.0分 | 前25% |
| 4. | [Look, Listen and Segment: Towards Weakly Supervised Audio-Vi](/audio-paper-digest-blog/posts/2026-04-29-look-listen-and-segment-towards-weakly-supervised) | 7.0分 | 前25% |
| 5. | [Teacher-Guided Pseudo Supervision and Cross-Modal Alignment ](/audio-paper-digest-blog/posts/2026-04-29-teacher-guided-pseudo-supervision-and-cross-modal) | 7.0分 | 前25% |
| 6. | [AVO-65: A Large-Scale Hierarchical Audio-Visual Object Datas](/audio-paper-digest-blog/posts/2026-04-29-avo-65-a-large-scale-hierarchical-audio-visual) | 7.0分 | 前50% |

---

## 📋 论文详情

### 🥇 [Uncertainty-Aware 3D Emotional Talking Face Synthesis with Emotion Prior Distillation](/audio-paper-digest-blog/posts/2026-04-29-uncertainty-aware-3d-emotional-talking-face)

🔥 **8.0/10** | 前25% | #音视频 | #生成模型 | #不确定性估计 #多模态模型

👥 **作者与机构**

- 第一作者：Nanhan Shen（天津大学人工智能学院）
- 通讯作者：Zhilei Liu（天津大学人工智能学院）
- 作者列表：Nanhan Shen（天津大学人工智能学院）、Zhilei Liu（天津大学人工智能学院）

💡 **毒舌点评**

这篇论文精准地指出了3D情感说话人脸生成中“情感对齐差”和“多视图融合粗糙”两大痛点，并给出了模块化的解决方案，特别是首次引入不确定性建模来优化融合策略，思路值得肯定。然而，论文在工程实践上“留白”过多，关键代码和训练细节缺失，使得这个“不确定性”的黑盒更难被学界复现和验证。

🔗 **开源详情**

- 代码：论文中未提及代码链接。仅提供项目页面，内容未知。
- 模型权重：未提及公开权重。
- 数据集：使用了公开数据集（AD-NeRF, MEAD），但论文未说明是否提供处理后的数据或获取指引。
- Demo：未提及在线演示。
- 复现材料：给出了部分训练细节（迭代次数、损失权重、优化器选择），但缺少模型具体架构参数、完整训练配置、环境依赖、检查点等。论文中未提及开源计划。
- 论文中引用的开源项目：引用了多个开源项目作为基线或组件，如TalkingGaussian [5]、DEGSTalk [30]、EDTalk [22]、StableAvatar [31]、SadTalker [15]、Wav2Vec 2.0 [16]等。

📌 **核心摘要**

1. 问题：现有3D情感说话人脸合成方法存在两大挑战：音视觉情感对齐差（难以从音频提取情感且微表情控制弱）；多视图融合采用“一刀切”策略，忽略了不同视图特征质量的不确定性，导致渲染效果受损。
2. 方法：提出UA-3DTalk框架，以3D高斯溅射为渲染骨干。其包含三个核心模块：先验提取模块，将音频解耦为内容同步特征和个性特征；情感蒸馏模块，通过多模态注意力融合和4D高斯编码，实现细粒度音频情感提取与表情控制；基于不确定性的变形模块，为每个视图估计偶然不确定性和认知不确定性，实现自适应多视图融合。
3. 创新：首次在该领域系统性地建模并利用不确定性；提出不确定性感知的自适应融合策略；通过情感先验蒸馏协同解决情感对齐问题。
4. 结果：在常规和情感数据集上的实验表明，UA-3DTalk在情感对齐（E-FID）、唇同步（SyncC）和渲染质量（LPIPS）上均优于SOTA方法。定量结果如下：

| 方法 | 数据集 | LMD↓ | PSNR↑ | LPIPS↓ | SSIM↑ | Sync-C↑ | E-FID↓ |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| UA-3DTalk (本文) | 常规/情感 | 2.492 / 5.407 | 28.923 / 28.408 | 0.032 / 0.067 | 0.928 / 0.938 | 5.750 / 5.152 | 0.072 / 0.145 |
| DEGSTalk | 常规/情感 | 1.960 / 3.923 | 27.104 / 28.051 | 0.042 / 0.162 | 0.891 / 0.924 | 5.663 / 5.007 | 0.076 / 0.154 |
| EDTalk | 常规/情感 | 3.827 / 6.548 | 25.627 / 18.061 | 0.073 / 0.297 | 0.888 / 0.864 | 6.173 / 7.550 | 0.483 / 0.668 |
| TalkingGaussian | 常规/情感 | 3.018 / 5.934 | 26.943 / 25.533 | 0.045 / 0.096 | 0.906 / 0.892 | 5.011 / 4.886 | 0.089 / 0.356 |
| StableAvatar | 常规/情感 | 4.117 / 7.150 | 18.403 / 19.290 | 0.258 / 0.228 | 0.480 / 0.619 | 4.421 / 3.972 | 0.546 / 0.430 |

消融研究（在MEAD情感数据集）显示，各模块均带来性能提升：完整模型（w/ P,E,U）相比基线，在E-FID上从0.356降至0.145，Sync-C从4.886提升至5.152。

![图1：UA-3DTalk整体框架](pdf-image-page2-idx0)
![图2：基于不确定性的变形模块](pdf-image-page3-idx1)
![图3：定性对比结果](pdf-image-page4-idx2)

5. 实际意义：推动了更自然、可控的情感数字人生成技术发展，可应用于虚拟助手、影视特效、在线教育等场景。
6. 局限性：未提供代码和完整训练细节，复现难度高；不确定性建模的计算开销和实际收益的权衡分析不足；情感蒸馏模块对不同音频的鲁棒性有待更广泛验证。

---

### 🥈 [RAP: Real-Time Audio-Driven Portrait Animation with Video Diffusion Transformer](/audio-paper-digest-blog/posts/2026-04-29-rap-real-time-audio-driven-portrait-animation)

✅ **7.0/10** | 前25% | #音视频 | #扩散模型 | #流匹配 #DiT

👥 **作者与机构**

- 第一作者：Fangyu Du (Soul AI, Xi’an Jiaotong University), Taiqing Li (Soul AI, Dalian University of Technology) （论文标注为共同第一作者）
- 通讯作者：Shunshun Yin (Soul AI), Siyuan Liu (Soul AI) （论文标注为共同通讯作者，且Siyuan Liu为项目负责人）
- 作者列表：Fangyu Du (Soul AI, Xi’an Jiaotong University), Taiqing Li (Soul AI, Dalian University of Technology), Qian Qiao (Soul AI), Tan Yu (Soul AI), Dingcheng Zhen (Soul AI), Ziwei Zhang (Soul AI), Xu Jia (Dalian University of Technology), Yang Yang (Xi’an Jiaotong University), Shunshun Yin (Soul AI), Siyuan Liu (Soul AI)

💡 **毒舌点评**

这篇论文在“实时”这个硬约束下，非常工程化地解决了高压缩潜在空间中的唇形同步和长视频生成漂移这两个核心痛点，展现了不错的系统设计能力。但其核心创新（混合注意力和训练策略）更多是针对特定问题的有效工程组合，而非开辟新范式；此外，虽然强调实时，但高压缩率（LTX-VAE）对图像纹理细节的潜在损失并未被深入讨论，这可能是其实时性与质量权衡中一个未被充分审视的代价。

🔗 **开源详情**

- 代码：论文中未提及代码仓库链接。
- 模型权重：未提及是否公开预训练模型权重。
- 数据集：使用了公开数据集（AVSpeech, HDTF, VFHQ）和自有数据集，但未提及自有数据集的公开计划。
- Demo：未提及是否提供在线演示。
- 复现材料：提供了详细的训练配置（GPU数量、batch size、学习率、优化器）、模型架构细节（基于Wan2.1 T2V）、损失函数设计、消融实验超参数范围，具有较高的复现指导价值。
- 论文中引用的开源项目：明确使用了Wan2.1 T2V [12]、LTX-VAE [6]、Wav2Vec2 [13] 作为基础组件。

📌 **核心摘要**

1.  问题：现有音频驱动肖像动画方法质量高但计算成本高，难以实时部署。为实现低延迟，常使用高压缩潜在表示，但这导致空间时间细节丢失、音画失步和长视频中的身份漂移。
2.  方法核心：提出RAP框架。核心是混合注意力机制，在全局和局部（帧级）时间尺度上对音频进行交叉注意力，以在高压缩下实现精细的唇部控制和全局运动一致性。其次是静态-动态混合训练与推理范式，训练时随机从静态潜变量或动态潜变量起始以适应不同生成阶段；推理时通过软引导（复用前一片段的中间噪声潜变量）来继承信息，避免传统运动帧策略的误差累积。
3.  新在哪里：与以往使用复杂多阶段或显式运动控制的方法相比，RAP将解决方案统一到一个基于扩散Transformer（DiT）的框架中。混合注意力在单一模块内解决了多尺度音频控制问题；静态-动态范式则通过改变训练和推理的起始分布，无需显式运动监督即可实现稳定的长视频生成，解决了分布不匹配问题。
4.  主要实验结果：在HDTF和VFHQ数据集上，RAP在实时推理（约40 FPS）条件下，取得了最优的视觉时序质量（FVD：122.95/159.93）和音画同步度（Sync-C：4.85/4.78）。消融研究证实混合注意力（优于单独的全局或窗口注意力）和软引导推理策略的有效性。

| 方法 | FID↓ | FVD↓ | Sync-C↑ | Sync-D↓ | FPS↑ | 数据集 |
| :--- | :---: | :---: | :---: | :---: | :---: | :---: |
| SadTalker | 21.58 | 207.67 | 4.60 | 9.21 | 2.17 | HDTF |
| Aniportrait | 19.83 | 242.29 | 1.89 | 11.91 | 0.69 | HDTF |
| EchoMimic | 9.00 | 155.71 | 3.56 | 10.22 | 0.81 | HDTF |
| Ditto | 12.35 | 199.13 | 3.57 | 10.49 | 45.04 | HDTF |
| Hallo3 | 15.95 | 160.94 | 3.18 | 10.72 | 0.16 | HDTF |
| Ours | 10.24 | 122.95 | 4.85 | 8.85 | 42.41 | HDTF |

| 方法 | FID↓ | FVD↓ | Sync-C↑ | Sync-D↓ | FPS↑ | 数据集 |
| :--- | :---: | :---: | :---: | :---: | :---: | :---: |
| SadTalker | 29.80 | 191.81 | 4.49 | 8.78 | 1.60 | VFHQ |
| Aniportrait | 36.58 | 352.94 | 1.62 | 11.73 | 0.67 | VFHQ |
| EchoMimic | 24.69 | 193.45 | 2.93 | 10.30 | 0.79 | VFHQ |
| Ditto | 27.67 | 254.05 | 3.31 | 10.26 | 41.24 | VFHQ |
| Hallo3 | 23.45 | 171.00 | 4.19 | 9.60 | 0.11 | VFHQ |
| Ours | 22.68 | 159.93 | 4.78 | 8.40 | 39.87 | VFHQ |

![图3：与现有方法在HDTF和VFHQ数据集上的定性对比](pdf-image-page2-idx2)
图3说明：展示了在相同参考图像和音频下，RAP生成的唇部动作更贴合真值，表情也更生动自然，而基线方法则相对静态或动作幅度较小。

![图4：时间一致性与视觉漂移对比](pdf-image-page2-idx3)
图4说明：通过帧间差异热力图显示，RAP在保持背景稳定的同时，面部动作持续且自然，而其他方法则出现闪烁或角色过于静态。

5.  实际意义：为虚拟主播、实时视频通信等对延迟敏感的交互式应用提供了高质量的音频驱动肖像动画解决方案。
6.  主要局限性：1）未讨论高压缩LTX-VAE对生成视频高频纹理细节的具体影响；2）主要实验在人脸正面、中等分辨率（512x512）数据上进行，对于极端姿态、大范围运动或更高分辨率的表现未验证；3）未提供开源代码和模型。

---

### 🥉 [Attentive AV-Fusionnet: Audio-Visual Quality Prediction with Hybrid Attention](/audio-paper-digest-blog/posts/2026-04-29-attentive-av-fusionnet-audio-visual-quality)

✅ **7.0/10** | 前25% | #音视频 | #注意力机制 | #多模态模型 #模型评估

👥 **作者与机构**

- 第一作者：Ina Salaj (Dolby Germany GmbH)
- 通讯作者：未说明（根据作者列表和常规署名，第一作者或第二作者可能为通讯作者，但论文中未明确标注）
- 作者列表：Ina Salaj (Dolby Germany GmbH)， Arijit Biswas (Dolby Germany GmbH)

💡 **毒舌点评**

亮点：论文提出的混合注意力融合框架（结合GML学习特征和VMAF手工特征）设计精巧，实验结果在内部数据集上显著优于基线（Rp提升至0.97），且提供了可解释的模态重要性估计。短板：论文严重依赖于Dolby的“内部数据集”和“内部实现的GML/VMAF特征”，外部可复现性存疑，且在公开基准LIVE-SJTU上的提升（如RMSE从0.47降至0.44）相对有限，未能完全证明其“鲁棒性”声称。

🔗 **开源详情**

- 代码：论文中未提及代码链接。
- 模型权重：未提及。
- 数据集：使用了内部数据集，未公开。外部使用的LIVE-SJTU为公开数据集，但论文中未提供获取链接。
- Demo：未提及。
- 复现材料：提供了模型架构描述、损失函数、部分超参数搜索空间，但缺少训练细节（如epoch数、硬件、精确的训练时间）和最终配置。
- 论文中引用的开源项目/模型：引用了GML [14]（未开源）和VMAF [11]（VMAF本身开源，但论文使用其内部特征）。依赖的框架包括AdamW优化器，但未提及具体深度学习框架。
- 总结：论文中未提及开源计划，复现主要依赖论文描述，门槛较高。

📌 **核心摘要**

1.  问题：现有音视频质量评估（AVQ）方法常采用简单的融合策略（如加权求和），无法有效建模内容相关的跨模态动态依赖关系（例如，高质量视频可补偿音频瑕疵），且依赖过时的单模态特征。
2.  方法：提出Attentive AV-FusionNet。模型首先提取视频VMAF内部特征（6维）和音频GML深层特征（512维）。通过可学习投影将视频特征对齐到音频空间。核心融合阶段采用双向多头交叉注意力，使音频和视频特征相互关注，生成1024维联合表征；随后使用自注意力进一步精炼该表征，以捕捉模态内依赖。最终通过浅层全连接网络预测质量分数。
3.  创新：1) 融合了深度学习（GML）和传统感知模型（VMAF）的异构特征；2) 利用混合注意力机制显式建模跨模态和模态内交互；3) 引入了模态相关性估计器，可量化每个模态对最终预测的贡献。
4.  结果：在内部数据集（1500训练，125测试）上，该模型达到 Pearson (Rp) = 0.97, Spearman (Rs) = 0.96, RMSE = 0.22，显著优于加权乘积基线（Rp=0.84）和SVR方法（Rp=0.90）。在外部LIVE-SJTU数据集上，取得 Rp=0.92, Rs=0.92, RMSE=0.44，表现与SVR-8F（Rp=0.90）和Recursive AV-FusionNet（Rp=0.92）相当或略优。
5.  意义：该模型为流媒体平台提供了更准确、可解释的音视频联合质量预测工具，其模态重要性估计为实现内容自适应的音视频比特率分配提供了可能。
6.  局限：模型依赖于未公开的内部数据集和特定特征提取器（GML、VMAF内部表示），外部验证数据集（LIVE-SJTU）规模有限，且未能提供代码或详细复现指南。

---

### 4. [Look, Listen and Segment: Towards Weakly Supervised Audio-Visual Semantic Segmentation](/audio-paper-digest-blog/posts/2026-04-29-look-listen-and-segment-towards-weakly-supervised)

✅ **7.0/10** | 前25% | #音视频 | #对比学习 | #音视频语义分割 #弱监督学习

👥 **作者与机构**

- 第一作者：Chengzhi Li（北京理工大学计算机学院）
- 通讯作者：Ping Jian（北京理工大学计算机学院）
- 作者列表：Chengzhi Li（北京理工大学计算机学院）、Heyan Huang（北京理工大学计算机学院）、Ping Jian（北京理工大学计算机学院）、Yanghao Zhou（北京理工大学计算机学院）

#

💡 **毒舌点评**

亮点：论文的“先看后听”直觉式框架设计非常巧妙，将人类感知顺序转化为模型中的“时序视觉提示”模块，有效提升了弱监督下的音频理解精度，是解决该问题的一个新颖且合理的思路。短板：作为一篇方法论论文，开源信息的完全缺失是硬伤，极大削弱了其可复现性和对社区的即时贡献，也与顶级会议推动可重复研究的目标背道而驰。

#

🔗 **开源详情**

论文中未提及任何开源计划、代码仓库链接、预训练模型权重或数据集获取方式。也未提供在线演示（Demo）。虽然文中提到了依赖的基线方法（如AST）和工具（如Dense CRF），但并未给出其具体使用的开源实现版本。因此，复现该工作需要读者自行实现所有模块并调试训练流程，门槛较高。

📌 **核心摘要**

本文旨在解决音视频语义分割（AVSS） 任务中标注成本高昂的问题。为此，作者首次提出了弱监督音视频语义分割（WSAVSS） 任务，仅使用视频级标签训练模型，以生成帧级的发声物体类别掩码。论文提出了渐进式跨模态语义对齐（PCAS） 框架，其核心包含两个模块：1）“先看后听” 模块，利用视觉特征作为提示来增强帧级音频理解；2）“先听后分割” 模块，通过实例级和令牌级的渐进式对比学习，实现从粗到细的跨模态对齐。与已有方法相比，新在：首次定义WSAVSS任务；首次在音视频分割中引入“视觉提示”来指导音频理解；设计了新颖的渐进式跨模态对比学习框架。实验结果显示，在弱监督设置下，PCAS在AVS-S4和AVS-MS3数据集上的性能大幅超越了现有弱监督基线（例如，在AVS-S4上以ViT-base为主干达到74.2 F-score 和 60.50 mIoU）。在更难的AVSS子集上，PCAS甚至达到了与全监督方法相竞争的性能（52.2 F-score， 42.07 mIoU）。其实际意义在于能够以低成本获取高质量的音视频语义分割数据，推动该技术的应用。主要局限性在于论文未开源代码，部分训练细节不完整，且实验主要在AVSS相关数据集上进行，泛化性有待进一步验证。

关键实验结果表格

表1：弱监督方法在AVS-S4和AVS-MS3上的性能对比

| 方法 | 主干网络 | AVS-S4 F-score | AVS-S4 mIoU | AVS-MS3 F-score | AVS-MS3 mIoU |
| :--- | :--- | :--- | :--- | :--- | :--- |
| AVS (ws) [3] | ResNet-50 | 24.99 | 12.63 | 15.72 | 8.76 |
| CAM [11] | ResNet-50 | 27.88 | 19.26 | 19.83 | 12.65 |
| EZ-VSL [12] | ResNet-50 | 35.70 | 29.40 | 27.31 | 23.58 |
| C2AM [13] | ResNet-50 | 36.55 | 30.87 | 29.58 | 25.33 |
| WS-AVS [10] | ResNet-50 | 51.76 | 34.13 | 46.87 | 30.85 |
| PCAS (Ours) | ResNet-50 | 68.5 | 56.41 | 51.7 | 45.76 |
| PCAS (Ours) | ViT-base | 74.2 | 60.50 | 60.0 | 46.04 |

表2：与全监督方法在AVS-Semantic上的性能对比

| 训练设置 | 方法 | 主干网络 | F-score | mIoU |
| :--- | :--- | :--- | :--- | :--- |
| 全监督 | COMBO [6] | PVT-v2 | 46.1 | 42.1 |
| 弱监督 | PCAS (Ours) | PVT-v2 | 44.6 | 36.30 |
| 弱监督 | PCAS (Ours) | ViT-base | 52.2 | 42.07 |

#

---

### 5. [Teacher-Guided Pseudo Supervision and Cross-Modal Alignment for Audio-Visual Video Parsing](/audio-paper-digest-blog/posts/2026-04-29-teacher-guided-pseudo-supervision-and-cross-modal)

✅ **7.0/10** | 前25% | #音视频 | #知识蒸馏 | #视频理解 #弱监督学习

👥 **作者与机构**

- 第一作者：Yaru Chen (Centre for Vision Speech and Signal Processing, University of Surrey, United Kingdom)
- 通讯作者：未说明
- 作者列表：
  - Yaru Chen (Centre for Vision Speech and Signal Processing, University of Surrey, United Kingdom)
  - Ruohao Guo (School of Intelligence Science and Technology, Peking University, China)
  - Liting Gao (Centre for Vision Speech and Signal Processing, University of Surrey, United Kingdom)
  - Yang Xiang (Centre for Vision Speech and Signal Processing, University of Surrey, United Kingdom)
  - Qingyu Luo (Centre for Vision Speech and Signal Processing, University of Surrey, United Kingdom)
  - Zhenbo Li (College of Information and Electrical Engineering, China Agricultural University, China)
  - Wenwu Wang (Centre for Vision Speech and Signal Processing, University of Surrey, United Kingdom)

💡 **毒舌点评**

这篇论文的亮点在于其系统性和针对性：它精准地指出了现有弱监督AVVP方法的两个痛点（缺乏稳定段监督、粗糙的跨模态对齐），并用EMA和CMA这两个成熟但组合起来很有效的方案“对症下药”，在LLP数据集上的视觉和音视频联合指标上取得了实实在在的提升。但短板也十分明显：创新程度更像是一个“集大成”的工程优化方案，而非提出一个全新的学习范式；而且，论文在追求性能报告上非常详细，却在开源复现信息上极为吝啬，这对于一个旨在推动领域前进的会议论文来说，是减分项。

🔗 **开源详情**

- 代码：论文中未提及代码链接或开源计划。
- 模型权重：未提及公开权重。
- 数据集：LLP和UnAV-100均为公开数据集，论文中给出了引用和基本描述。
- Demo：未提供在线演示。
- 复现材料：论文详细描述了模型架构、损失函数和主要思路，并报告了在标准数据集上的结果。然而，关键的训练超参数（如学习率、EMA动量α、阈值γ、Top-k的k值等）未在正文中明确给出，这使得精确复现存在困难。
- 论文中引用的开源项目：论文明确指出其基线是CoLeaF [8]，并使用了预训练模型CLIP [12] 和 CLAP [13]。在UnAV-100实验中使用了I3D [19] 和VGGish [20] 模型提取特征。这些都是可公开获取的开源项目/预训练模型。

📌 **核心摘要**

1.  解决的问题：本文针对弱监督音视频视频解析（AVVP）任务，旨在仅使用视频级标签训练模型，以定位视频中仅音频、仅视频以及音视频事件的时间范围与类别。核心挑战在于缺乏精确的段级监督信号，以及现有跨模态对齐方法过于全局化，忽略了不同类别事件在不同模态、不同时间出现的特性。
2.  方法核心：提出E-CMA框架，包含两大核心策略：(1) 指数移动平均（EMA）引导的伪监督：构建教师-学生模型，教师模型参数由学生模型参数的EMA更新，能更稳定地生成段级二值伪掩码（通过自适应阈值或Top-k选择），为学生提供比视频级标签更精细、动态更新的监督信号。(2) 类感知跨模态一致性（CMA）损失：仅对那些音频和视觉预测置信度均高且与视频级标签一致的“可靠”片段-类别对，强制其音频和视觉特征向量的余弦相似度接近1，实现选择性的细粒度跨模态对齐。
3.  与已有方法的创新：相比之前仅使用静态伪标签或全局跨模态相似度方法，本工作创新在于：a) 引入动态的、由教师模型生成的伪监督，提升了段级监督的稳定性；b) 提出类感知的选择性对齐策略，避免了强制对齐不相关事件带来的噪声。
4.  主要实验结果：在LLP基准数据集上，E-CMA在段级解析上达到SOTA，音频F1为66.1%（+0.2%），视觉F1为69.9%（+2.8%），音视频联合F1为61.7%（+1.1%）。在事件级解析上，视觉F1达到66.6%。在UnAV-100数据集上，音视频段级F1为41.8%（+0.3%）。消融实验表明，同时去除CMA和EMA会导致所有指标下降，证实了二者的互补有效性。

| 模型 (数据集) | 音频F1 (段级) | 视觉F1 (段级) | 音视频F1 (段级) | 类别平均F1 (段级) | 事件平均F1 (段级) |
| :--- | :---: | :---: | :---: | :---: | :---: |
| CoLeaF (LLP) | 64.2 | 67.1 | 59.8 | 63.8 | 61.9 |
| E-CMA (LLP) | 66.1 | 69.9 | 61.7 | 65.9 | 65.4 |

表1：在LLP数据集上的关键段级性能对比（论文表1节选）。

| 模型 | 音视频段级F1 | 音视频事件级F1 |
| :--- | :---: | :---: |
| CoLeaF (UnAV-100) | 41.5 | 47.8 |
| E-CMA (UnAV-100) | 41.8 | 47.4 |

表2：在UnAV-100数据集上的性能对比（论文表2）。

| 消融设置 | 段级AV F1 | 事件级AV F1 |
| :--- | :---: | :---: |
| CoLeaF† (基线) | 59.9 | 52.4 |
| w/o CMA | 60.4 | 52.3 |
| w/o EMA | 61.0 | 52.9 |
| E-CMA (完整) | 61.7 | 53.5 |

表3：消融实验结果，展示EMA和CMA模块的贡献（论文表3节选）。

5.  实际意义：该工作提升了弱监督条件下音视频事件解析的精度，为减少视频分析中的密集人工标注成本提供了更优的算法方案，对智能安防、视频内容理解与检索等领域有应用价值。
6.  主要局限性：论文承认其伪标签生成策略（自适应阈值/Top-k）是固定的，可能无法充分适应视频中复杂的事件分布变化。此外，论文未提供代码和完整的复现实例，限制了其可重复性和社区快速跟进。

---

### 6. [AVO-65: A Large-Scale Hierarchical Audio-Visual Object Dataset](/audio-paper-digest-blog/posts/2026-04-29-avo-65-a-large-scale-hierarchical-audio-visual)

✅ **7.0/10** | 前50% | #音视频 | #数据集 | #多模态模型 #模型评估

👥 **作者与机构**

- 第一作者：未说明（论文中注明“† These authors contributed equally”，但未明确排序）
- 通讯作者：Dongchen Zhu12, （注有号）
- 作者列表：Zehao Yao1,2,†; Guanghui Zhang1,†; Lei Wang1,2; Dongchen Zhu1,2,* （注1：1为Bio-Vision System Laboratory, Science and Technology on Micro-system Laboratory, Shanghai Institute of Microsystem and Information Technology, Chinese Academy of Sciences； 2为University of Chinese Academy of Sciences）

💡 **毒舌点评**

这篇论文的亮点在于提出了一套严谨、系统化的多模态数据集构建流程，并特别强调了音视频“多重一致性”和层次化标注，填补了现有数据集的空白。然而，其短板也十分明显：论文的核心贡献本质上是一个高质量的“工程产物”（数据集），而在算法、模型或理论层面几乎没有提出新的方法，实验部分主要使用现成的模型进行基线测试，创新性不足。

🔗 **开源详情**

- 代码：论文明确提供了代码仓库链接：https://github.com/siyunye/AVO-65。
- 模型权重：论文中未提及公开预训练模型权重。
- 数据集：论文明确提供了数据集的获取方式（通过同一GitHub链接），并声明数据集公开可用。
- Demo：论文中未提及在线演示。
- 复现材料：论文在“实验设置”和“训练与验证细节”部分详细描述了数据预处理（音频/视频）、训练超参数（优化器、学习率、批大小、轮数、调度策略）和评估指标，为复现提供了必要信息。
- 论文中引用的开源项目：使用了VIA标注工具（引用[19]），并在相关工作部分引用了多个开源数据集和模型（如AudioSet, VGGSound, Kinetics等）。

📌 **核心摘要**

1. 问题：现有音视频数据集大多以单一模态（视觉或音频）为中心，难以满足多模态学习中对语义、时域和空间一致性的多重要求，引入了训练噪声，限制了模型性能。
2. 方法核心：设计并实施了一个四阶段（定义类别与收集视频、人工验证与标注、数据检查与合并、多粒度层次标注）的数据收集与标注流程，构建了以“音视频物体”为中心、给予两种模态同等地位的AVO-65数据集。
3. 新颖之处：与先前以单模态为中心或规模有限的数据集相比，AVO-65通过流程设计确保了多重一致性，并采用了基于霍恩博斯特尔-萨克斯（H-S）分类法的四层（5、11、16、65个类别）层次化标签，提供了多粒度的监督信息。
4. 主要结果：
    - 数据集规模：包含30154个视频片段（总时长83.3小时），覆盖65个类别。
    - 基线性能：在Level-4（细粒度）分类任务上，使用Gated融合的VGG16模型达到了最佳Top-1准确率75.829%。音视频融合模型（如UAVM，Top-1: 76.275%）普遍优于单模态模型（音频最佳VGG16: 73.750%；视觉最佳ResNet50: 49.348%）。随着标签层级变细，所有模型性能均下降。关键数据见下表。

| 模型 | 融合方式 | Top-1(%) | Top-5(%) | mAP | mAUC | d-prime |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| VGG16 (AV) | Gated | 75.565 | 94.258 | 0.740 | 0.987 | 3.355 |
| ResNet50 (AV) | Concat | 75.449 | 93.664 | 0.751 | 0.987 | 3.374 |
| UAVM (AV) | - | 76.275 | 94.011 | 0.753 | 0.988 | 3.394 |

5. 实际意义：为音视频学习领域提供了一个具有多重一致性和层次化标签的大规模基准数据集，有望促进相关任务（如识别、分离、生成、检测等）的算法研究与发展。
6. 主要局限性：论文的主要贡献集中于数据集本身，而非提出新的学习算法。实验部分主要评估了现有模型在该数据集上的性能，未深入探索利用其“多重一致性”或“层次标签”进行模型设计的具体方法。数据分布呈长尾，部分类别样本较少。

---

