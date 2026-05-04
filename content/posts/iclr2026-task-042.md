---
title: "ICLR 2026 - 音视频事件检测 论文列表"
date: 2026-05-04
draft: false
tags: ["音视频事件检测"]
categories: [iclr-2026]
description: "共 1 篇 ICLR 2026 音视频事件检测 方向论文"
hiddenInHomeList: true
---

# ICLR 2026 - 音视频事件检测

共 **1** 篇论文

[← 返回 ICLR 2026 总览](/audio-paper-digest-blog/posts/iclr2026-summary/)

---

| 排名 | 论文 | 评分 | 分档 |
|------|------|------|------|
| 🥇 | [Entropy-Monitored Kernelized Token Distillation for Audio-Vi](/audio-paper-digest-blog/posts/2026-05-04-entropy-monitored-kernelized-token-distillation) | 8.5分 | 前25% |

---

## 📋 论文详情

### 🥇 [Entropy-Monitored Kernelized Token Distillation for Audio-Visual Compression](/audio-paper-digest-blog/posts/2026-05-04-entropy-monitored-kernelized-token-distillation)

🔥 **8.5/10** | 前25% | #音视频事件检测 | #知识蒸馏 | #多模态模型 #音频分类

👥 **作者与机构**

- 第一作者：Hyoungseob Park (Yale University, Amazon AGI 实习期间完成)
- 通讯作者：未明确说明（论文未标注通讯作者信息）
- 作者列表：
    - Hyoungseob Park (Yale University)
    - Lipeng Ke (Amazon AGI)
    - Pritish Mohapatra (Amazon AGI)
    - Huajun Ying (Amazon AGI)
    - Sankar Venkataraman (Amazon AGI)
    - Alex Wong (Yale University)

💡 **毒舌点评**

亮点：将蒸馏对象从“特征本身”或“输出概率”巧妙地转换为“特征间的成对关系矩阵”（核化令牌），从而绕开了师生模型维度必须匹配的硬约束，这个思路非常实用且有效。短板：尽管实验全面，但核心方法（计算Gram矩阵 + 熵加权）更像是经典技术（核方法、信息熵）在现代Transformer蒸馏场景下的工程化应用组合，理论创新深度有限，更像是一个优秀、扎实的“系统解决方案”。

🔗 **开源详情**

- 代码：论文中明确表示“we will release the code and the pretrained weights”，但未提供具体仓库链接（如GitHub）。论文中未提及具体代码链接。
- 模型权重：承诺发布预训练权重，但未提供下载地址。
- 数据集：使用公开数据集VGGSound和AVS-Bench，并引用了获取方式。
- Demo：未提及。
- 复现材料：提供了极其详细的附录（Appendix E），包括：
    - 训练数据划分（VGGSound: 182,536训练，15,331测试）。
    - 模型架构规格（如教师/学生的维度、深度、MLP比率）。
    - 全部超参数（学习率、损失权重、批量大小等）。
    - 训练硬件（单卡A100 GPU，训练时长）。
    - 评估指标定义。
- 论文中引用的开源项目：引用了CAVMAE（Gong et al., 2022b）、UFE-AVS（Liu et al., 2024a）等作为教师模型基础，以及VGGSound和AVS-Bench数据集。
- 总体开源状态：论文承诺开源并提供了高水平的复现文档，是积极的信号，但当前版本中缺少可直接访问的代码和权重链接。

📌 **核心摘要**

1.  问题：如何将大型、复杂的音频-视觉教师模型高效压缩成小型学生模型，同时在资源受限的边缘设备上保持高性能，尤其需要解决师生模型架构/维度不同以及不同模态（音频、视觉）信息重要性动态变化带来的挑战。
2.  方法核心：提出熵监控的核化令牌蒸馏（EM-KTD）。首先，核化令牌蒸馏（KTD）：不直接蒸馏特征向量，而是将每个模态的特征令牌化后，计算其成对相似度矩阵（Gram矩阵，使用线性、多项式或RBF核），然后最小化师生模型该矩阵的差异。其次，熵监控（EM）：为每个模态添加一个任务头，通过测量其输出熵来量化该模态当前输入的信息量（不确定性），并以此为权重自适应地调节该模态的蒸馏损失。
3.  与已知方法相比新在：相较于传统的输出空间蒸馏（KD）或需要维度匹配的潜在特征蒸馏，KTD通过蒸馏关系矩阵实现了架构无关的潜在空间蒸馏。相较于同样基于关系的MTST方法，KTD保留了完整的、未经掩码和Softmax归一化的原始相似度信息。EM则提供了动态、自适应的蒸馏强度调节，避免了对不信息模态的过度监督。
4.  主要实验结果：在VGGSound音频-视觉事件分类上，EM-KTD（+KD）使用仅6%的教师参数（学生10M vs 教师164M），保留了96.9%的准确率和97.5%的mAP。在AVS-Bench音频-视觉分割的S4（单源）和MS3（多源）任务上，EM-KTD学生模型以仅4%的教师视觉编码器参数，达到了97.1%的教师性能（S4 MJ指标）。所有消融实验均证实了KTD、核函数选择以及熵监控的有效性。
5.  实际意义：提供了一种高效、通用的多模态模型压缩方案，特别适用于计算资源有限的边缘AI设备（如智能手机、物联网设备），使得复杂的音视频理解模型得以实际部署。
6.  主要局限性：KTD的计算复杂度随令牌数平方增长（O(N^2)），论文通过实例级计算和滑动窗口近似进行缓解，但仍是潜在瓶颈。熵监控的线性探针性能可能影响加权质量，尽管实验证明其鲁棒性。方法的有效性高度依赖于教师模型本身能为每个模态提供有意义的特征，且在回归等任务上需要重新设计熵监控方式。

---

