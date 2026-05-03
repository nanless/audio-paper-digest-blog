---
title: "ICLR 2026 - 音频生成 #语音合成 论文列表"
date: 2026-05-03
draft: false
tags: ["音频生成 #语音合成"]
categories: [iclr-2026]
description: "共 1 篇 ICLR 2026 音频生成 #语音合成 方向论文"
hiddenInHomeList: true
---

# ICLR 2026 - 音频生成 #语音合成

共 **1** 篇论文

[← 返回 ICLR 2026 总览](/audio-paper-digest-blog/posts/iclr2026-summary/)

---

| 排名 | 论文 | 评分 | 分档 |
|------|------|------|------|
| 🥇 | [Continuous Audio Language Models](/audio-paper-digest-blog/posts/2026-05-03-continuous-audio-language-models) | 7.5分 | 前25% |

---

## 📋 论文详情

### 🥇 [Continuous Audio Language Models](/audio-paper-digest-blog/posts/2026-05-03-continuous-audio-language-models)

✅ **7.5/10** | 前25% | #音频生成 #语音合成 | #自回归模型 #一致性模型 #流匹配 | #音频生成 #语音合成

👥 **作者与机构**

- 第一作者：Simon Rouard（Kyutai, UMR STMS IRCAM-CNRS Sorbonne Univ.）
- 通讯作者：未明确说明（论文中Alexandre Défossez提供了联系邮箱，且通常为通讯作者，但格式未严格标注）
- 作者列表：Simon Rouard（Kyutai, UMR STMS IRCAM-CNRS Sorbonne Univ.）、Manu Orsini（Kyutai）、Axel Roebel（UMR STMS IRCAM-CNRS Sorbonne Univ.）、Neil Zeghidour（Kyutai）、Alexandre Défossez（Kyutai）

💡 **毒舌点评**

**亮点**：论文系统性地用“连续潜变量+一致性模型头”替代了困扰音频生成已久的“离散RVQ token+RQ-Transformer”范式，在语音和音乐任务上同时实现了质量与速度的双重提升，尤其是将采样头推理加速了12-19倍，非常实用。  
**短板**：创新更多是架构和训练技巧的工程化组合（MAR+一致性模型+各种Tricks），理论突破有限；短上下文Transformer在语音任务上未带来增益（Tab. 2未提及该组件），说明其作用可能局限于音乐等高动态内容，通用性有待验证。

📌 **核心摘要**

1. **解决的问题**：传统音频语言模型依赖离散音频token（如RVQ），导致生成质量与计算成本之间存在难以调和的权衡：高质量需要更多token，从而增加计算负担。
2. **方法核心**：提出**连续音频语言模型（CALM）**，直接在VAE的连续潜空间进行自回归建模。模型由三个核心组件构成：（1）带噪声注入的因果主干Transformer，用于建模长程依赖并抑制误差累积；（2）短上下文Transformer，为预测头提供干净的局部细节；（3）基于**一致性模型**的小型MLP头，负责从噪声中一步生成下一个连续潜变量。
3. **与已有方法相比的新意**：完全绕过了离散量化，避免了有损压缩；用一步一致性模型采样取代了多步扩散采样或自回归解码RVQ层级，极大提升了推理效率；通过引入短上下文和噪声注入，解决了纯连续自回归模型在长序列生成上的稳定性问题。
4. **主要实验结果**：
    * **语音续写**：CALM（1步一致性）在自动指标（PPX: 23.8 vs. 26.8, VERT: 31.2 vs. 33.1）和人类评估（声学质量Elo: 2023 vs. 1870）上均优于32 RVQ的RQ-Transformer基线，采样头速度提升**12.3倍**。
    * **文本转语音（TTS）**：CALM（1步LSD）在Librispeech test-clean上WER为1.81%，优于F5-TTS（2.42%）、DSM（1.95%）等强基线。经蒸馏后的**Pocket TTS（100M参数）** 可在CPU上实时运行。
    * **音乐续写**：CALM（1步一致性）的FAD为0.83，优于32 RVQ基线的1.06，整体推理速度提升**2.2倍**，采样头速度提升**19.3倍**。人类评估的声学质量与享受度Elo均高于基线。
5. **实际意义**：为高效、高质量的音频生成（特别是边缘设备部署）提供了新的技术路径，开源的Pocket TTS模型具有直接应用价值。
6. **主要局限性**：短上下文Transformer在语音任务上的作用不明确；一致性模型在极少步（如1步）采样时的质量上界有待更深入探索；训练所用的大规模数据集未开源。

---

