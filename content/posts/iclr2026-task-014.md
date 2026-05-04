---
title: "ICLR 2026 - 生成模型 论文列表"
date: 2026-05-04
draft: false
tags: ["生成模型"]
categories: [iclr-2026]
description: "共 2 篇 ICLR 2026 生成模型 方向论文"
hiddenInHomeList: true
---

# ICLR 2026 - 生成模型

共 **2** 篇论文

[← 返回 ICLR 2026 总览](/audio-paper-digest-blog/posts/iclr2026-summary/)

---

| 排名 | 论文 | 评分 | 分档 |
|------|------|------|------|
| 🥇 | [DiVeQ: Differentiable Vector Quantization Using the Reparame](/audio-paper-digest-blog/posts/2026-05-04-diveq-differentiable-vector-quantization-using) | 8.0分 | 前25% |
| 🥈 | [AUHead: Realistic Emotional Talking Head Generation via Acti](/audio-paper-digest-blog/posts/2026-05-04-auhead-realistic-emotional-talking-head) | 7.5分 | 前25% |

---

## 📋 论文详情

### 🥇 [DiVeQ: Differentiable Vector Quantization Using the Reparameterization Trick](/audio-paper-digest-blog/posts/2026-05-04-diveq-differentiable-vector-quantization-using)

🔥 **8.0/10** | 前25% | #生成模型 | #向量量化 | #图像生成 #语音编码

👥 **作者与机构**

- 第一作者：Mohammad Hassan Vali（ELLIS Institute Finland & Department of Computer Science, Aalto University, Finland）
- 通讯作者：未明确说明（论文提供了三位作者的共同邮箱，未指定单独通讯作者）
- 作者列表：Mohammad Hassan Vali（ELLIS Institute Finland & Department of Computer Science, Aalto University, Finland）、Tom Bäckström（Department of Information and Communications Engineering, Aalto University, Finland）、Arno Solin（ELLIS Institute Finland & Department of Computer Science, Aalto University, Finland）

#

💡 **毒舌点评**

这篇论文精准地“修理”了向量量化在深度学习应用中那个著名的老毛病——梯度消失，提出的DiVeQ和SF-DiVeQ方法就像是给量化层装了一个“梯度导管”，既保持了推理时硬编码的离散性，又让训练信号能顺畅回流，实验部分更是“地毯式轰炸”，在多个任务和数据集上全面碾压了包括NSVQ、RT在内的现有花式方案。不足之处在于SF-DiVeQ的初始化有点“娇气”，需要先跑几个epoch“热身”，而且虽然解决了码本错位问题，但本质上仍是在“码本空间”内做文章，对于如何突破固定码本大小的表达能力瓶颈并未触及。

#

🔗 **开源详情**

- 代码：论文承诺在GitHub（https://github.com/AaltoML/DiVeQ）开源代码，但截至审稿时尚未发布。论文中提供了完整的实现细节。
- 模型权重：论文中未提及公开预训练模型权重。
- 数据集：使用的是公开标准数据集（AFHQ, CELEBA-HQ, FFHQ, LSUN, VCTK），论文中未提及自己创建或发布新数据集。
- Demo：论文中未提及在线演示。
- 复现材料：附录A提供了非常详细的实现细节，包括VQ-VAE、VQGAN、DAC的模型架构表、所有超参数设置（学习率、batch size、优化器、训练轮数、码本替换策略、DiVeQ/SF-DiVeQ的σ²选择等）、以及其他方法的实现参考（如ST-GS、RT的代码库）。复现指南充分。
- 论文中引用的开源项目：引用了DeepMind的VQ-VAE实现、zalandoresearch的PyTorch VQ-VAE、dome272的VQGAN实现、Karpathy的ST-GS实现、Lucidrains的RT实现、Pikku NAC（DAC变体）以及clean-fid评估工具。

📌 **核心摘要**

1.  要解决什么问题：向量量化（VQ）层因其最近邻赋值操作的不可微性，阻碍了端到端梯度回传（梯度崩溃问题），使得依赖VQ的模型（如VQ-VAE）难以训练。
2.  方法核心是什么：提出了两种基于重参数化技巧的可微向量量化方法：DiVeQ和SF-DiVeQ。DiVeQ 将量化误差建模为一个方向与最近码本向量对齐、大小等于输入-码本距离的误差向量（`z_q = z + ||c-z||_2  (v_d / ||v_d||_2)`, 其中 `v_d = v + (c*-z)`, `v~N(0, σ^2 I)`）。通过令噪声方差σ^2趋近于零，使 `z_q` 精确指向最近码本向量。SF-DiVeQ 将量化从离散码本点扩展到连接相邻码本向量的线段上，通过在训练中随机采样线段上的点进行量化，实现了连续空间填充。
3.  与已有方法相比新在哪里：与STE、EMA、RT、ST-GS等需要辅助损失或存在训练-测试不匹配的方法不同，DiVeQ/SF-DiVeQ无需额外损失项或温度调度，实现了硬分配下的端到端可微训练。与NSVQ相比，DiVeQ通过方向性约束避免了随机方向导致的额外量化误差。SF-DiVeQ进一步避免了码本错位和坍塌问题，实现了码本的完全利用。
4.  主要实验结果如何：在VQ-VAE图像压缩（AFHQ, CELEBA-HQ等数据集）、VQGAN图像生成（CELEBA-HQ等）和DAC语音编码（VCTK数据集）任务上，DiVeQ和SF-DiVeQ在各项指标上一致优于其他方法。例如，在AFHQ图像压缩（11位码本）中，DiVeQ的LPIPS（越低越好）为0.349，优于NSVQ的0.473和STE的0.373。在CELEBA-HQ生成任务（HP2设置，9位码本）中，SF-DiVeQ的FID（越低越好）为6.66，远优于ST-GS的41.1和NSVQ的70.1。详见论文中表2、图6等。
5.  实际意义是什么：DiVeQ和SF-DiVeQ可作为标准VQ层的即插即用替代品，简化了涉及VQ的深度模型（如压缩、生成模型）的训练流程，提高了训练稳定性和最终性能。
6.  主要局限性是什么：1）SF-DiVeQ需要特定的初始化策略（先训练几个epoch再引入量化），增加了使用复杂度；2）虽然解决了码本利用率问题，但模型性能仍受限于固定的码本大小；3）论文未探讨该方法在更复杂的VQ变体（如残差VQ的更多层）或更大规模模型中的表现。

#

---

### 🥈 [AUHead: Realistic Emotional Talking Head Generation via Action Units Control](/audio-paper-digest-blog/posts/2026-05-04-auhead-realistic-emotional-talking-head)

✅ **7.5/10** | 前25% | #生成模型 | #扩散模型 | #动作单元 #大语言模型

👥 **作者与机构**

- 第一作者：Jiayi Lyu (中国科学院大学)
- 通讯作者：Jian Xue (中国科学院大学)
- 作者列表：
  - Jiayi Lyu (中国科学院大学)
  - Leigang Qu (National University of Singapore)
  - Wenjing Zhang (中国科学院大学)
  - Hanyu Jiang (中国科学院大学)
  - Kai Liu (Zhejiang University)
  - Zhenglin Zhou (Zhejiang University)
  - Xiaobo Xia (National University of Singapore)
  - Jian Xue (中国科学院大学)
  - Tat-Seng Chua (National University of Singapore)

💡 **毒舌点评**

亮点在于首次尝试将大型音频语言模型（ALM）作为“情感理解-表情生成”的推理引擎，将模糊的语音情感线索解耦为结构化、可解释的动作单元（AU）序列，这一思路为跨模态生成任务提供了新颖的中间表示范式。短板则是第一阶段的AU预测精度完全依赖ALM的“想象”能力，其生成的AU序列可能并不完全忠于原始音频的真实口型运动，导致第二阶段生成时唇音同步性可能妥协，消融实验也表明其Sync得分略有下降。

🔗 **开源详情**

*   代码：提供了代码仓库链接：https://github.com/laura990501/AUHead_ICLR。
*   模型权重：论文中未明确说明是否公开训练好的模型权重检查点。
*   数据集：实验使用公开数据集MEAD和CREMA，论文中未说明如何获取或预处理脚本。
*   Demo：论文中未提供在线演示链接。
*   复现材料：论文正文和附录（Appendix）详细描述了模型架构、训练目标（损失函数）、实现细节（学习率、硬件、GPU小时数）、评估设置，并提供了关键的超参数（如λ, γ, n, 引导尺度s）。附录还包含了使用的AU定义列表、数据验证工具说明、Prompt模板示例，以及额外的定性结果和视频链接。复现信息较为充分。
*   论文中引用的开源项目：
    *   Qwen-Audio-Chat：作为第一阶段的核心ALM。
    *   Hallo V1 和 MEMO：作为第二阶段的基础扩散模型。
    *   LoRA：用于第一阶段的微调。
    *   SyncNet：用于评估音唇同步。
    *   EAT：用于情感分类评估模型。

📌 **核心摘要**

1.  要解决什么问题：现有的音频驱动说话头像生成方法缺乏对细微、丰富情感表达的精细控制，往往生成中性或表情单一的视频。
2.  方法核心是什么：提出一个两阶段框架AUHead。第一阶段，利用大型音频语言模型（ALM，如Qwen-Audio-Chat）通过“情感先于动作单元”的思维链（CoT）机制，从音频中生成细粒度的动作单元（AU）序列。第二阶段，将AU序列映射为2D面部表示（如关键点或网格渲染），并设计一个AU驱动的可控扩散模型，通过上下文感知的AU嵌入和跨注意力机制，合成情感丰富且身份一致的说话头像视频。
3.  与已有方法相比新在哪里：首次探索利用ALM作为中间桥梁，将音频理解为可解释的AU序列来控制视频生成。与直接使用情感标签或潜在码的方法相比，AU序列提供了更细粒度、结构化的空间和时间控制信号。
4.  主要实验结果如何：
    *   在MEAD和CREMA数据集上，与多个基线（如HalloV1, MEMO, AniPortrait等）对比，在视觉质量（PSNR, SSIM, FID）、表情真实度（Emotion ACC）和面部结构保真度（M/F-LMD）上均取得竞争力甚至领先的性能。
    *   关键消融实验显示：采用“先情感后AU”的CoT策略比直接预测AU的精度更高（AU精度0.58 vs 0.50）；使用2D AU表示（LMK/RoM）比1D AU序列显著提升了生成质量（例如MEAD上FID从11.11降至10.87）。
    *   用户研究显示，在情感表达、视频质量和音唇同步方面，AUHead（64.63%， 63.63%， 71.00%）均显著优于强基线HalloV2。
5.  实际意义是什么：为虚拟形象、影视制作和交互式系统提供了一种更可控、更具表现力的情感说话头像生成方案，增强了AI生成内容的真实感和情感交互能力。
6.  主要局限性是什么：1) AU预测的准确性依赖于ALM的理解与生成能力，可能无法完美还原真实面部运动；2) 将1D AU序列上采样并映射为2D表示可能引入信息损失或模糊；3) 当前实验主要在受控数据集上进行，对复杂场景（如大角度头部运动、复杂背景）的泛化能力有待验证。

---

