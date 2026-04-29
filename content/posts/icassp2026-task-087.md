---
title: "ICASSP 2026 - 说话人合成 论文列表"
date: 2026-04-29
draft: false
tags: ["说话人合成"]
categories: [icassp-2026]
description: "共 1 篇 ICASSP 2026 说话人合成 方向论文"
hiddenInHomeList: true
---

# ICASSP 2026 - 说话人合成

共 **1** 篇论文

[← 返回 ICASSP 2026 总览](/audio-paper-digest-blog/posts/icassp2026-summary/)

---

| 排名 | 论文 | 评分 | 分档 |
|------|------|------|------|
| 🥇 | [PSTalker: Realistic 3D Talking Head Synthesis via a Semantic](/audio-paper-digest-blog/posts/2026-04-29-pstalker-realistic-3d-talking-head-synthesis-via) | 7.5分 | 前25% |

---

## 📋 论文详情

### 🥇 [PSTalker: Realistic 3D Talking Head Synthesis via a Semantic-Aware Audio-Driven Point-Based Shape](/audio-paper-digest-blog/posts/2026-04-29-pstalker-realistic-3d-talking-head-synthesis-via)

✅ **7.5/10** | 前25% | #说话人合成 | #3D音频 | #语音合成 #音视频

👥 **作者与机构**

- 第一作者：Zhongyuan Zhao（北京大学电子与计算机工程学院，鹏城实验室）
- 通讯作者：Kanglin Liu（鹏城实验室）
- 作者列表：Zhongyuan Zhao（北京大学电子与计算机工程学院，鹏城实验室）、Qing Li（鹏城实验室）、Kanglin Liu（鹏城实验室）

💡 **毒舌点评**

论文巧妙地将语义先验融入点基形状表示，有效解决了头颈接合处的“断裂”伪影，这是当前3DGS方法的一个显著痛点，体现了其工程洞察力。然而，其对非刚性形变（如头发细节）的建模能力、以及在多人种、复杂表情下的泛化能力验证略显不足，且“高保真”渲染的细节处理（如动态光照、微表情）仍有提升空间。

📌 **核心摘要**

1.  问题：现有的音频驱动3D说话头生成方法（基于NeRF或3DGS）存在唇同步不准确、在头部转动时头颈接合处产生伪影、以及合成结果缺乏参数化可控性三大挑战。
2.  核心方法：提出PSTalker框架，包含两大核心：语义感知点基形状模型——在FLAME网格上基于语义标签采样点，并沿法线方向偏移，以统一建模面部与非面部（如头发、躯干）结构；刚柔耦合合成模型——将音频驱动的灵活面部变形与基于线性混合蒙皮的头部刚体运动显式耦合，增强运动稳定性。
3.  创新性：1）提出SAPS模型，首次用统一的点基表示解决了头颈几何连贯性问题；2）设计RFC模型，将高自由度的音频到运动映射锚定在稳定的几何先验上，提升了唇同步精度和运动自然性；3）继承了FLAME的参数化控制能力，实现了对合成结果的姿态编辑。
4.  主要实验结果：在四个说话人数据集上进行自驱动和跨驱动测试。在跨驱动设置下，本文方法（Sync-C: 6.9982, Sync-D: 7.9911）显著优于最强基线TalkingGaussian（Sync-C: 6.4075, Sync-D: 8.4689）。消融实验表明，移除SAPS或RFC均导致唇同步指标（Sync-C）和运动自然度指标（AUE）明显下降。
5.  实际意义：为生成可控、逼真、无伪影的3D说话头像提供了高效方案，可应用于虚拟社交、数字人直播、影视配音等场景。
6.  主要局限性：方法依赖于针对特定说话人的短视频进行训练，限制了其对高度发散音频模式（如歌唱）的泛化能力；论文未提供代码和模型，开源信息不足。

---

