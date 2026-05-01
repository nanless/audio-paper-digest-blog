---
title: "ICASSP 2026 - 音频检索 #音频分类 论文列表"
date: 2026-04-29
draft: false
tags: ["音频检索 #音频分类"]
categories: [icassp-2026]
description: "共 1 篇 ICASSP 2026 音频检索 #音频分类 方向论文"
hiddenInHomeList: true
---

# ICASSP 2026 - 音频检索 #音频分类

共 **1** 篇论文

[← 返回 ICASSP 2026 总览](/audio-paper-digest-blog/posts/icassp2026-summary/)

---

| 排名 | 论文 | 评分 | 分档 |
|------|------|------|------|
| 🥇 | [Hashing-Baseline: Rethinking Hashing in the Age of Pretraine](/audio-paper-digest-blog/posts/2026-04-29-hashing-baseline-rethinking-hashing-in-the-age-of) | 8.0分 | 前25% |

---

## 📋 论文详情

### 🥇 [Hashing-Baseline: Rethinking Hashing in the Age of Pretrained Models](/audio-paper-digest-blog/posts/2026-04-29-hashing-baseline-rethinking-hashing-in-the-age-of)

🔥 **8.0/10** | 前25% | #音频检索 #音频分类 | #预训练 | #音频检索 #图像检索

👥 **作者与机构**

- 第一作者：未说明（论文作者列表顺序为并列贡献）
- 通讯作者：未说明
- 作者列表：Ilyass Moummad（INRIA, LIRMM, Université de Montpellier, France），Kawtar Zaher（INRIA, LIRMM, Université de Montpellier, France；Institut National de l’Audiovisuel, France），Lukas Rauch（University of Kassel, Germany），Alexis Joly（INRIA, LIRMM, Université de Montpellier, France）

💡 **毒舌点评**

亮点在于论文极其简洁地证明了“大力出奇迹”的道理：利用强大的预训练模型（如DINOv2、CLAP）的冻结嵌入，搭配几个无需训练的经典降维与二值化“零件”（PCA、随机正交投影），就能在图像和音频检索任务上达到与昂贵训练的深度哈希方法相竞争的性能，这为实际应用提供了一个极其简单且强大的基线。短板在于方法本身的创新性有限，本质上是现有技术的拼接，且虽然提出了音频哈希基准，但在更大规模、更贴近真实场景的跨域检索任务上的验证仍然不足。

🔗 **开源详情**

- 代码：论文中提供了代码仓库链接：`https://github.com/ilyassmoummad/hashing-baseline`。
- 模型权重：论文中未提及公开预训练模型权重（使用的是现有公开模型如DINOv2, CLAP等）。
- 数据集：论文中使用的标准图像检索数据集（CIFAR-10， Flickr25K等）是公开的。新提出的音频检索基准包含的四个数据集（GTZAN， ESC-50， CREMA-D， VocalSound）也是公开的。
- Demo：论文中未提及在线演示。
- 复现材料：提供了代码仓库，但论文正文中未详细列出具体的训练（PCA拟合）配置、超参数、检查点或附录说明。
- 论文中引用的开源项目：论文中明确引用的预训练模型代码/项目包括：DINOv2 [5], Dasheng [6], LAION-CLAP [15], CED [16]。方法部分提到了随机正交投影的生成方式和Johnson-Lindenstrauss引理。

📌 **核心摘要**

1.  问题：现有的深度哈希方法（无论是监督还是无监督）通常需要针对特定任务、数据集和码长进行昂贵且耗时的从头训练，缺乏灵活性和通用性。同时，预训练基础模型已经能产生强大的语义嵌入。
2.  方法：提出Hashing-Baseline，一种无需训练的哈希方法。其核心流程是：利用冻结的预训练模型（如ViT、音频编码器）提取嵌入，然后依次进行PCA降维、随机正交投影、Sigmoid激活后阈值二值化。检索时采用非对称汉明距离。
3.  新意：与传统哈希直接处理原始特征或深度哈希需要训练不同，本文首次系统性地论证并展示了将预训练模型的强大表示能力与经典、无需训练的哈希技术相结合，能够产生一个简单、高效且跨模态（图像/音频）通用的强基线。
4.  结果：在多个图像检索基准（CIFAR-10， Flickr25K等）和一个新的音频检索基准（GTZAN， ESC-50等）上，该方法仅使用16-64位二进制码，性能就能接近甚至达到当前无监督哈希的SOTA水平（见下表）。
    *   图像检索关键结果（mAP@K）：
        | 模型 | 特征 | CIFAR10 (Orig/16/32/64) | FLICKR25K (Orig/16/32/64) | COCO (Orig/16/32/64) | NUS-WIDE (Orig/16/32/64) |
        | :--- | :--- | :--- | :--- | :--- | :--- |
        | DFN | Orig/Float/Binary | 93.3/94.6/94.4/94.2 | 80.7/83.7/83.9/83.6 | 85.3/77.1/82.3/85.3 | 83.2/81.9/83.1/83.2 |
        | DINOv2 | Orig/Float/Binary | 95.4/95.9/96.0/95.9 | 76.3/77.8/78.2/77.7 | 88.3/81.2/86.5/88.8 | 79.8/76.4/78.0/78.7 |
        | SimDINOv2 | Orig/Float/Binary | 89.6/90.8/91.1/91.1 | 81.1/81.6/81.6/81.4 | 87.4/82.7/86.0/87.3 | 84.3/83.2/83.7/83.6 |
        | SOTA (Binary) | | 87.6/91.2/92.6 | 81.8/83.8/84.9 | 76.0/78.9/81.6 | 81.2/83.2/84.4 |
    *   音频检索关键结果（mAP）：
        | 模型 | 特征 | GTZAN (Orig/16/32/64) | ESC50 (Orig/16/32/64) | VocalSound (Orig/16/32/64) | CREMA-D (Orig/16/32/64) |
        | :--- | :--- | :--- | :--- | :--- | :--- |
        | CLAP | Orig/Float/Binary | 41.2/41.2/38.2/37.4 | 88.1/81.4/87.3/87.7 | 62.7/59.3/57.0/55.7 | 25.1/25.1/25.0/24.9 |
        | CED | Orig/Float/Binary | 51.5/53.7/50.0/48.3 | 82.7/50.0/72.8/83.2 | 60.2/58.7/58.5/58.5 | 19.3/20.6/20.6/20.7 |
5.  意义：为实际部署提供了一个极其简单、无需训练、高性能的哈希检索方案，降低了使用门槛，并揭示了预训练模型特征中存在高度冗余。
6.  局限：方法的性能高度依赖于预训练模型嵌入的质量；提出的音频基准数据集规模相对较小；未在超大规模数据库上进行验证；与专门训练的深度哈希方法在特定任务上可能存在差距。

---

