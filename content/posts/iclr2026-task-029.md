---
title: "ICLR 2026 - 语音转换 论文列表"
date: 2026-05-03
draft: false
tags: ["语音转换"]
categories: [iclr-2026]
description: "共 1 篇 ICLR 2026 语音转换 方向论文"
hiddenInHomeList: true
---

# ICLR 2026 - 语音转换

共 **1** 篇论文

[← 返回 ICLR 2026 总览](/audio-paper-digest-blog/posts/iclr2026-summary/)

---

| 排名 | 论文 | 评分 | 分档 |
|------|------|------|------|
| 🥇 | [TVTSyn: Content-Synchronous Time-Varying Timbre for Streamin](/audio-paper-digest-blog/posts/2026-05-03-tvtsyn-content-synchronous-time-varying-timbre) | 7.5分 | 前25% |

---

## 📋 论文详情

### 🥇 [TVTSyn: Content-Synchronous Time-Varying Timbre for Streaming Voice Conversion and Anonymization](/audio-paper-digest-blog/posts/2026-05-03-tvtsyn-content-synchronous-time-varying-timbre)

✅ **7.5/10** | 前25% | #语音转换 | #生成模型 | #语音匿名化 #端到端

👥 **作者与机构**

- 第一作者：Waris Quamer（德克萨斯A&M大学计算机科学与工程系）
- 通讯作者：未明确说明
- 作者列表：Waris Quamer（德克萨斯A&M大学计算机科学与工程系），Mu-Ruei Tseng（德克萨斯A&M大学计算机科学与工程系），Ghady Nasrallah（德克萨斯A&M大学计算机科学与工程系），Ricardo Gutierrez-Osuna（德克萨斯A&M大学计算机科学与工程系）

💡 **毒舌点评**

论文提出的“内容同步时变音色”表征，巧妙地解决了实时语音转换中“静态说话人”与“动态内容”的表示错配问题，其全局音色记忆和门控插值机制设计颇具巧思，且在极低延迟下取得了优于主流基线的隐私-效用平衡。然而，论文未能提供开源代码或模型，且与部分最强离线匿名化系统相比仍有差距，其时变表征的实际可解释性和可控性有待进一步挖掘。

📌 **核心摘要**

本文针对实时语音转换（VC）和说话人匿名化（SA）中表示不匹配的核心问题——即动态的内容嵌入与静态的全局说话人嵌入之间的不匹配——提出了TVTSyn。该方法的核心是引入一种与内容帧同步的时变音色（TVT）表征，通过一个全局音色记忆（GTM）将全局说话人嵌入扩展为多个可学习的“音色切面”，并通过注意力机制选择、门控调节和球面线性插值，生成平滑变化的帧级音色嵌入，从而与动态内容对齐。同时，使用因子化矢量量化瓶颈进一步正则化内容，减少说话人泄漏。实验表明，TVTSyn在VPC 2024协议下，于流式设置中取得了优于SLT24、DarkStream等基线的隐私（EER）和效用（WER）平衡，并具有极低的延迟（<80ms GPU）。其主要局限性在于未开源，且与顶尖的离线系统相比，在匿名化强度上仍有提升空间。

主要实验结果：

| 任务/模型 | 指标 | 数值 | 说明 |
| :--- | :--- | :--- | :--- |
| 语音转换 (VC) | NISQA MOS (质量) | 3.91 | 高于 DarkStream (3.49) 等基线 |
| | 目标说话人相似度 (Trg-SIM) | 0.77 | 与真实语音间相似度相当 |
| | 源说话人相似度 (Src-SIM) | 0.48 | 与真实语音间差异相当 |
| 说话人匿名化 (SA) | WER (效用) | 5.35% | 优于 SLT24 (5.70%)， DarkStream (10.80%) |
| | EER (lazy-informed) | 47.55% | 高于 SLT24 (31.40%)， DS (49.09%) |
| | EER (semi-informed) | 14.57% | 略低于 DS (20.83%)， SLT24 (10.12%) |
| 延迟 (Latency) | GPU (60ms chunk) | 78.51 ms | |
| | CPU (60ms chunk) | 131.76 ms | |
| 消融实验 (TVT) | 去除GTM | NISQA: 3.45 | 质量显著下降 |
| | 去除可学习先验 | NISQA: 3.62 | 质量下降 |
| | 去除TVT整体 | NISQA: 3.44 | 质量显著下降 |

---

