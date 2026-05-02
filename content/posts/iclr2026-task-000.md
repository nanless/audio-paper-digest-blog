---
title: "ICLR 2026 - 3D重建 论文列表"
date: 2026-05-02
draft: false
tags: ["3D重建"]
categories: [iclr-2026]
description: "共 1 篇 ICLR 2026 3D重建 方向论文"
hiddenInHomeList: true
---

# ICLR 2026 - 3D重建

共 **1** 篇论文

[← 返回 ICLR 2026 总览](/audio-paper-digest-blog/posts/iclr2026-summary/)

---

| 排名 | 论文 | 评分 | 分档 |
|------|------|------|------|
| 🥇 | [Characterizing and Optimizing the Spatial Kernel of Multi Re](/audio-paper-digest-blog/posts/2026-05-02-characterizing-and-optimizing-the-spatial-kernel) | 7.0分 | 前25% |

---

## 📋 论文详情

### 🥇 [Characterizing and Optimizing the Spatial Kernel of Multi Resolution Hash Encodings](/audio-paper-digest-blog/posts/2026-05-02-characterizing-and-optimizing-the-spatial-kernel)

✅ **7.0/10** | 前25% | #3D重建 | #哈希编码 | #神经场 #计算机图形学

👥 **作者与机构**

- 第一作者：Tianxiang Dai (斯坦福大学电气工程系)
- 通讯作者：Jonathan Fan (斯坦福大学电气工程系)
- 作者列表：Tianxiang Dai (斯坦福大学电气工程系), Jonathan Fan* (斯坦福大学电气工程系)

💡 **毒舌点评**

这篇论文的亮点在于用物理光学里的“点扩散函数”概念，给多分辨率哈希编码（Instant-NGP的核心）做了一次彻底的“体检”，发现其默认设置下不仅模糊（有效分辨率由平均分辨率决定而非最细分辨率）而且方向敏感（各向异性），并据此提出了零成本改进的“旋转哈希编码”。短板在于，在标准的3D重建基准测试上，这种改进带来的收益相当微弱，几乎在统计噪声范围内，让人怀疑其宣称的普适优势在常见场景下是否真的那么关键。

🔗 **开源详情**

- 代码：论文中未提及代码链接或开源计划。
- 模型权重：未提及。
- 数据集：使用了公开的数据集（Synthetic NeRF，标准SDF网格，三张高分辨率图像），但论文中未提供其额外处理或获取的专门链接。
- Demo：未提供。
- 复现材料：论文在附录中提供了部分实验细节（如2D图像回归的超参数、3D实验配置），以及推导过程，但不足以完全复现所有核心实验（尤其是PSF测量框架）。
- 论文中引用的开源项目：论文中提及了基于Instant-NGP框架进行实现。

📌 **核心摘要**

1.  问题：多分辨率哈希编码（MHE）是Instant Neural Graphics Primitives的核心，但其空间行为缺乏从物理系统视角的严格分析，导致其超参数选择依赖经验启发式规则。
2.  方法核心：本文引入点扩散函数（PSF）作为分析工具，将优化MHE建模为对一个理想点源的响应，从而量化编码的空间分辨率和保真度。
3.  创新之处：与已有方法相比，本文首次推导了MHE的无碰撞PSF的封闭形式近似，揭示了其固有的各向异性和对数空间轮廓；更重要的是，通过理论和实验揭示了优化动态（如频谱偏差）导致的“空间展宽”效应，证明了实际有效分辨率由平均分辨率（Navg）决定，而非理论最细分辨率（Nmax）。
4.  主要实验结果：
    *   理论推导与实验高度吻合：在2D验证中，理论预测的PSF轮廓与实验测量的PSF曲线几乎重合（如图2所示）。总展宽因子βemp ≈ 3.0（对于Adam优化器）。
    *   两相互作用分析：实证表明，可分辨两点的临界距离dcrit与经验FWHM（即与1/Navg成正比）线性相关，而非Nmax（如图3）。
    *   哈希碰撞影响：有限容量的哈希表碰撞会引入类似散斑的噪声并降低信噪比（SNR）（如图4）。
    *   旋转MHE (R-MHE) 性能：在2D图像回归任务中，R-MHE（M=8）相比标准MHE实现了平均+0.94 dB的PSNR提升（从23.88 dB到24.82 dB）（表1，图5）。在3D NeRF任务中，R-MHE（Icosa）仅带来约+0.13 dB的边际提升（35.346 vs 35.479 dB），在误差范围内（表2，图8）。在3D SDF任务中，所有方法均达到近乎完美的重建（IoU > 0.996），收益饱和（表3，图9）。
5.  实际意义：建立了一套基于物理原则的MHE分析框架，能指导超参数（如增长因子b）的选择；提出的R-MHE是一种即插即用的、零参数增加的改进，能提升各向同性。
6.  主要局限性：R-MHE在标准3D重建基准测试（NeRF， SDF）上的性能提升统计上不显著，可能在内存受限或视角稀疏的场景下优势更明显；该框架主要针对稀疏约束下的MHE行为，未完全解决MHE在实际训练中的所有复杂性。

---

