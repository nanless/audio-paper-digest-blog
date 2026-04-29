---
title: "ICASSP 2026 - 音频编辑 论文列表"
date: 2026-04-29
draft: false
tags: ["音频编辑"]
categories: [icassp-2026]
description: "共 1 篇 ICASSP 2026 音频编辑 方向论文"
hiddenInHomeList: true
---

# ICASSP 2026 - 音频编辑

共 **1** 篇论文

[← 返回 ICASSP 2026 总览](/audio-paper-digest-blog/posts/icassp2026-summary/)

---

| 排名 | 论文 | 评分 | 分档 |
|------|------|------|------|
| 🥇 | [RFM-Editing: Rectified Flow Matching for Text-Guided Audio E](/audio-paper-digest-blog/posts/2026-04-29-rfm-editing-rectified-flow-matching-for-text) | 7.5分 | 前25% |

---

## 📋 论文详情

### 🥇 [RFM-Editing: Rectified Flow Matching for Text-Guided Audio Editing](/audio-paper-digest-blog/posts/2026-04-29-rfm-editing-rectified-flow-matching-for-text)

✅ **7.5/10** | 前25% | #音频编辑 | #流匹配 | #扩散模型 #数据集

👥 **作者与机构**

- 第一作者：Liting Gao（英国萨里大学视觉、语音与信号处理中心）
- 通讯作者：未说明
- 作者列表：Liting Gao（英国萨里大学视觉、语音与信号处理中心），Yi Yuan（英国萨里大学视觉、语音与信号处理中心），Yaru Chen（英国萨里大学视觉、语音与信号处理中心），Yuelan Cheng（英国萨里大学视觉、语音与信号处理中心），Zhenbo Li（中国农业大学信息与电气工程学院），Juan Wen（中国农业大学信息与电气工程学院），Shubin Zhang（中国海洋大学水产学院），Wenwu Wang（英国萨里大学视觉、语音与信号处理中心）

#

💡 **毒舌点评**

亮点：论文巧妙地利用Rectified Flow Matching的确定性ODE过程，将音频编辑重新定义为学习从噪声到目标音频的“速度场”，并通过对原始音频潜变量的拼接作为条件，实现了一个优雅的、端到端且无需掩码的训练范式。短板：虽然整体表现均衡，但在衡量编辑忠实度的关键指标CLAP分数上，训练完整数据集的RFM-Editingfull（0.4398）仍略低于需要复杂优化的AudioEditor（0.4579），显示出其“效率换精度”的妥协，且编辑时间并非最快。

#

📌 **核心摘要**

1. 要解决什么问题：现有的文本引导音频编辑方法要么依赖昂贵的训练时优化（如null-text optimization），要么需要完整的目标描述文本或人工掩码，在复杂重叠声音场景下编辑效果不佳且实用性受限。
2. 方法核心是什么：提出RFM-Editing，一个基于Rectified Flow Matching（RFM）的端到端音频编辑框架。其核心是训练一个U-Net来学习从含噪潜变量指向目标音频潜变量的“速度场”，并以原始音频的潜变量和文本指令为条件，从而直接学习编辑区域，无需显式掩码。
3. 与已有方法相比新在哪里：首次将RFM范式应用于指令引导的音频编辑；实现了纯指令驱动的端到端训练，摒弃了对完整描述或掩码的依赖；同时构建了一个包含复杂重叠声音事件的新音频编辑数据集用于训练和评测。
4. 主要实验结果如何：在自建数据集上，RFM-Editingfull在FD（13.27）和KL（2.77）指标上优于所有基线，表明其分布一致性更好；在CLAP分数（0.4398）上优于AUDIT（0.1113）和Zero-Shot（0.4333），但略低于AudioEditor（0.4579）。编辑速度（约11秒/音频）远快于AudioEditor（约102秒）。
5. 实际意义是什么：提供了一种更高效、更实用的音频编辑方案，用户只需给出简单的编辑指令（如“移除警报声”），无需专业知识或复杂标注，即可完成高质量的音频内容修改，在内容创作和后期制作中有直接应用价值。
6. 主要局限性是什么：在最高精度的CLAP分数上尚未超越最优的免训练方法；新构建的数据集规模虽大但基于AudioCaps2合成，可能与真实世界复杂音频分布存在差距；论文未明确提供代码和模型权重的开源链接。

#

---

