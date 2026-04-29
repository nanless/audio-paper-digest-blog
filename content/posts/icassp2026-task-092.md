---
title: "ICASSP 2026 - 说话人脸生成 论文列表"
date: 2026-04-29
draft: false
tags: ["说话人脸生成"]
categories: [icassp-2026]
description: "共 1 篇 ICASSP 2026 说话人脸生成 方向论文"
hiddenInHomeList: true
---

# ICASSP 2026 - 说话人脸生成

共 **1** 篇论文

[← 返回 ICASSP 2026 总览](/audio-paper-digest-blog/posts/icassp2026-summary/)

---

| 排名 | 论文 | 评分 | 分档 |
|------|------|------|------|
| 🥇 | [Assessing Identity Leakage in Talking Face Generation: Metri](/audio-paper-digest-blog/posts/2026-04-29-assessing-identity-leakage-in-talking-face) | 7.5分 | 前25% |

---

## 📋 论文详情

### 🥇 [Assessing Identity Leakage in Talking Face Generation: Metrics and Evaluation Framework](/audio-paper-digest-blog/posts/2026-04-29-assessing-identity-leakage-in-talking-face)

✅ **7.5/10** | 前25% | #说话人脸生成 | #模型评估 | #基准测试 #音视频

👥 **作者与机构**

- 第一作者：Dogucan Yaman（Karlsruhe Institute of Technology, KIT Campus Transfer GmbH (KCT)）
- 通讯作者：未说明（根据惯例和贡献推测，Alexander Waibel 可能为通讯作者，但论文未明确标注）
- 作者列表：Dogucan Yaman (Karlsruhe Institute of Technology, KCT)、Fevziye Irem Eyiokur (Karlsruhe Institute of Technology, KCT)、Hazım Kemal Ekenel (Istanbul Technical University)、Alexander Waibel (Karlsruhe Institute of Technology, KCT, Carnegie Mellon University)

💡 **毒舌点评**

亮点：精准戳中了当前说话人脸生成领域评估体系的“阿喀琉斯之踵”——高lip-sync分数可能掩盖了严重的“身份参考泄漏”问题，并设计了一套精巧的、可量化的“体检方案”来揭露它。短板：它本质上是一份详尽的“验尸报告”和“检测标准”，对于如何从根本上“治愈”泄漏问题（即设计新模型）着墨较少，创新止步于评估方法论层面。

📌 **核心摘要**

1.  问题：现有音频驱动的说话人脸生成模型在修改唇部动作时，会错误地受到提供的身份参考图像（用于保持身份一致性）的影响，而非完全由驱动音频决定，这种现象称为“唇泄漏”。传统的唇同步指标和视觉质量评估无法有效检测此问题，导致评估结果失真。
2.  方法核心：提出一个模型无关的系统性评估框架，包含三个互补的测试设置：静音输入生成、不匹配音频-视频配对、匹配音频-视频合成。在此基础上，引入两个关键派生指标：唇同步差异（LSD）和基于静音音频的唇同步分数，用于量化泄漏程度。
3.  创新点：首次系统化定义和测量“唇泄漏”问题；设计能暴露泄漏的实验范式（特别是静音输入和不匹配音频测试）；提出可量化的泄漏评估指标（LSD-CR, LSD-AR, LSE-CS, LSE-DS）；分析了不同身份参考选择策略对泄漏的影响。
4.  实验结果：对Wav2Lip, TalkLip等6个主流模型进行了评估。实验表明（见下表），TalkLip和AVTFG在静音输入下仍获得较高唇同步分数，表明严重泄漏；Diff2Lip在不匹配音频场景下使用替代参考时泄漏较少。标准评估（AM设置）会掩盖泄漏，而新指标（如LSD-AR）能有效揭示问题。
    表6：唇泄漏指标评估结果（来源论文）
    | 方法 | LSE-Cs ↓ | LSE-Ds ↑ | LSD-CR ↓ | LSD-AR ↓ |
    | :--- | :--- | :--- | :--- | :--- |
    | Wav2Lip | 3.64 | 8.15 | 0.56 | 0.22 |
    | TalkLip | 5.21 | 8.34 | 4.16 | 2.31 |
    | IPLAP | 2.74 | 8.82 | 2.82 | 2.45 |
    | AVTFG | 6.31 | 6.81 | 1.36 | 1.66 |
    | PLGAN | 2.93 | 8.51 | 0.80 | 0.24 |
    | Diff2Lip | 2.79 | 9.52 | 0.98 | 0.15 |
    （注：LSE-Cs（静音LSE-C）越低表明泄漏越严重；LSD指标越高表明泄漏越严重）
5.  实际意义：为说话人脸生成领域提供了更严格、更可靠的评估基准，能帮助研究者识别模型的真实能力与缺陷（如泄漏），避免被传统指标误导。对虚拟形象、人机交互、视频配音等要求高可控性的应用至关重要。
6.  主要局限性：该框架专注于评估，本身并不提出解决泄漏的新生成模型。其有效性依赖于LSE-C/D等基础指标的可靠性。

---

