---
title: "ICASSP 2026 - 音视频实例分割 论文列表"
date: 2026-04-29
draft: false
tags: ["音视频实例分割"]
categories: [icassp-2026]
description: "共 1 篇 ICASSP 2026 音视频实例分割 方向论文"
hiddenInHomeList: true
---

# ICASSP 2026 - 音视频实例分割

共 **1** 篇论文

[← 返回 ICASSP 2026 总览](/audio-paper-digest-blog/posts/icassp2026-summary/)

---

| 排名 | 论文 | 评分 | 分档 |
|------|------|------|------|
| 🥇 | [Learning What to Hear: Boosting Sound-Source Association for](/audio-paper-digest-blog/posts/2026-04-29-learning-what-to-hear-boosting-sound-source) | 7.5分 | 前25% |

---

## 📋 论文详情

### 🥇 [Learning What to Hear: Boosting Sound-Source Association for Robust Audiovisual Instance Segmentation](/audio-paper-digest-blog/posts/2026-04-29-learning-what-to-hear-boosting-sound-source)

✅ **7.5/10** | 前25% | #音视频实例分割 | #查询学习 | #多模态模型 #注意力机制

👥 **作者与机构**

- 第一作者：Jinbae Seo（Yonsei University）
- 通讯作者：Jiyoung Lee（School of AI and Software, Ewha Womans University），Kwanghoon Sohn（Yonsei University, Korea Institute of Science and Technology (KIST)）
- 作者列表：Jinbae Seo（Yonsei University）、Hyeongjun Kwon（Yonsei University）、Kwonyoung Kim（Yonsei University）、Jiyoung Lee（Ewha Womans University）、Kwanghoon Sohn（Yonsei University & KIST）

💡 **毒舌点评**

这篇论文精准地指出了现有音视频实例分割（AVIS）方法中“视觉偏见”的核心痛点（均匀加法融合和纯视觉训练目标），并用两个直观且有效的模块（交叉注意力的查询生成与序数回归的计数监督）予以解决，实验增益明确。然而，其创新性相对局部，本质上是AVISM框架的“插件式”改进，且最大性能提升（Swin-L骨干）仍依赖于更强的预训练视觉模型，未能完全摆脱对视觉主导性的依赖。

🔗 **开源详情**

- 代码：提供代码仓库链接：https://github.com/jinbae-s/ACVIS。
- 模型权重：论文中未提及是否公开预训练模型权重。
- 数据集：使用AVISeg基准数据集，论文中未提及该数据集是否为公开数据集或如何获取。
- Demo：论文中未提供在线演示链接。
- 复现材料：论文提供了部分训练细节（如分辨率、查询数量、窗口大小、损失权重），但缺少关键的超参数（学习率、优化器、批量大小、训练轮数、`λ_SAOC`）和完整的配置文件。
- 论文中引用的开源项目：论文引用的开源工具/模型包括：
    1.  基线模型：AVISM [1]
    2.  视觉骨干：ResNet-50 [18], Swin Transformer [22]
    3.  音频骨干：VGGish [19]
    4.  匈牙利匹配算法 [15]
    5.  预训练数据集：ImageNet [20], COCO [21]
    6.  段匹配与目标检测框架：DETR [12], Mask2Former [13]
    7.  序数回归参考方法 [14]

📌 **核心摘要**

1.  问题：现有音视频实例分割方法存在“视觉偏见”，因为音频特征被均匀地加到所有查询上，导致查询无法特化于不同声源；同时，纯视觉的监督目标（掩码和分类损失）会使查询收敛于任意显著视觉对象，而非发声对象。
2.  方法核心：提出音视频实例分割框架ACVIS，包含两个关键组件：（1）音频中心查询生成器：用交叉注意力替代简单的加法融合，使每个查询能选择性关注音频信号中的不同模式，生成带有声源特异性先验的查询；（2）声音感知序数计数损失：通过一个可学习的计数令牌，以序数回归的方式显式监督模型预测发声对象的数量，强制单调一致性，防止训练过程中退化为仅依赖视觉信息。
3.  创新点：相较于基线方法AVISM，ACVIS用音频条件化的查询生成取代均匀融合，并引入了额外的、显式的音频中心约束（计数监督），以更好地保持音视频平衡。
4.  实验结果：在AVISeg基准测试上，使用ResNet-50骨干和IN+COCO预训练时，相比基线AVISM，ACVIS在mAP上提升1.64（45.04→46.68），HOTA上提升0.60（64.52→65.12），FSLA上提升2.06（44.42→46.48）。消融实验证明音频中心查询生成器和SAOC损失是互补的，且SAOC损失优于标准交叉熵损失。在多发声源帧（FSLAm）上提升尤为显著（+3.82）。
5.  实际意义：提升了模型在复杂、多声源场景（如拥挤房间、乐器合奏）中准确分割和跟踪发声对象的能力，减少了掩码粘连和身份互换。
6.  主要局限性：论文未深入探讨当发声对象数量超过预设的最大计数（K_max）或静默对象数量极大时的性能边界；其改进高度依赖于基线框架AVISM，且最强性能依赖于更强大的视觉骨干（如Swin-L）。

---

