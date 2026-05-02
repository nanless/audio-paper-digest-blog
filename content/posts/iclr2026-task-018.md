---
title: "ICLR 2026 - 视频生成 论文列表"
date: 2026-05-03
draft: false
tags: ["视频生成"]
categories: [iclr-2026]
description: "共 2 篇 ICLR 2026 视频生成 方向论文"
hiddenInHomeList: true
---

# ICLR 2026 - 视频生成

共 **2** 篇论文

[← 返回 ICLR 2026 总览](/audio-paper-digest-blog/posts/iclr2026-summary/)

---

| 排名 | 论文 | 评分 | 分档 |
|------|------|------|------|
| 🥇 | [Stable Video Infinity: Infinite-Length Video Generation with](/audio-paper-digest-blog/posts/2026-05-03-stable-video-infinity-infinite-length-video) | 9.0分 | 前10% |
| 🥈 | [InterActHuman: Multi-Concept Human Animation with Layout-Ali](/audio-paper-digest-blog/posts/2026-05-03-interacthuman-multi-concept-human-animation-with) | 8.5分 | 前25% |

---

## 📋 论文详情

### 🥇 [Stable Video Infinity: Infinite-Length Video Generation with Error Recycling](/audio-paper-digest-blog/posts/2026-05-03-stable-video-infinity-infinite-length-video)

🔥 **9.0/10** | 前10% | #视频生成 | #扩散模型 #流匹配 #微调 | #扩散模型 #流匹配

👥 **作者与机构**

- 第一作者：Wuyang Li（VITA@EPFL）
- 通讯作者：未明确说明
- 作者列表：Wuyang Li（VITA@EPFL）、Wentao Pan（VITA@EPFL）、Po-Chien Luan（VITA@EPFL）、Yang Gao（VITA@EPFL）、Alexandre Alahi（VITA@EPFL）

💡 **毒舌点评**

亮点：论文没有停留在对误差“打补丁”的层面，而是犀利地指出了训练与测试之间的根本矛盾（假设鸿沟），并设计了让模型从自身错误中学习的“闭环”训练范式，理论优雅且效果显著，首次展示了理论上“无限”长度的视频生成能力。短板：实验中使用的训练数据量非常小（仅几千条视频进行LoRA微调），虽然突显了方法的效率，但也引发了对其在大规模、复杂场景下泛化能力和长期一致性的进一步疑问，例如图9中“潜在”的身份一致性仍需更强的验证。

🔗 **开源详情**

- 代码：论文中提到项目主页 `https://stable-video-infinity.github.io/homepage/`，并声明将公开全部代码库。具体链接在论文截稿时尚未生效，但承诺开源。
- 模型权重：论文中提到将基于Wan2.1进行LoRA微调，并承诺公开训练好的SVI系列模型权重。
- 数据集：论文中提到将公开用于评测的基准数据集，包括一致性和创意视频生成的样本（附录A.2）。
- Demo：论文提供了匿名项目页面 `https://anonymous.4open.science/w/Stable-Video-Infitity-51DE/` 用于展示视频结果。
- 复现材料：论文在附录D中提供了极其详细的训练超参数表（表12），涵盖了从优化器、LoRA配置到误差注入概率等所有关键设置，复现信息非常充分。
- 论文中引用的开源项目：主要依赖 Wan 2.1 (`Wang et al., 2025a`) 作为基础视频DiT模型。其他条件生成模块参考了 Hallo 3 (`Cui et al., 2025`) 和 UniAnimate-DiT (`Wang et al., 2025b`)。训练使用了 MixKit 和 TikTok 等公开数据集。
- 论文中未提及开源计划：论文明确表示将公开所有模型、代码和数据集。

📌 **核心摘要**

1.  问题：现有长视频生成方法受限于自回归生成过程中的误差累积，导致视频质量随长度增加而严重下降，且生成内容单一重复，无法满足真实世界中对超长、多样化视频内容的需求。
2.  方法核心：提出稳定视频无限（SVI）框架，其核心是错误循环微调（ERFT）。该方法在训练时，主动将模型（DiT）自动生成的误差注入到干净输入中，模拟推理时的退化轨迹，并训练模型预测指向干净视频的“误差循环速度”，从而让模型学会主动识别和纠正自身错误。
3.  创新点：相比已有方法仅缓解误差（如修改噪声、锚定帧），SVI从根本上改变了训练假设，使模型具备误差鲁棒性。其创新包括：a) 系统分析并形式化了训练-测试假设鸿沟及两类误差；b) 提出了高效的闭环错误循环微调流程（误差注入、双向一步积分计算误差、记忆库存储与重采样）；c) 无需增加推理成本即可扩展视频长度。
4.  主要实验结果：在多个基准上取得SOTA（详见论文表格）。例如，在超长一致性视频生成（单提示） 中，SVI-Shot的场景一致性达97.50%，显著高于次优方法FramePack的79.37%；在超长创意视频生成（提示流） 中，SVI-Film的背景一致性为51.22%，动态程度达78.57%，远超基线。消融实验（表4）表明，移除对参考图像的误差注入（Eimg）会导致性能显著下降，验证了其关键作用。
5.  实际意义：该工作打破了视频生成的长度限制，使得生成任意长度、非循环、质量稳定的视频成为可能，为影视创作、游戏、机器人世界模型等应用开辟了新途径。
6.  主要局限性：训练数据规模较小（约6K视频），可能导致对训练分布外风格（如颜色）的误判；在创意生成中，当角色离开场景再返回时，身份一致性（ID Consistency）仍是未完全解决的挑战；模型尚未实现实时流式生成。

---

### 🥈 [InterActHuman: Multi-Concept Human Animation with Layout-Aligned Audio Conditions](/audio-paper-digest-blog/posts/2026-05-03-interacthuman-multi-concept-human-animation-with)

🔥 **8.5/10** | 前25% | #视频生成 | #扩散模型 #多模态模型 | #多模态模型 #扩散模型

👥 **作者与机构**

- 第一作者：Zhenzhi Wang (The Chinese University of Hong Kong) [论文中标记为共同第一作者，但通常第一作者排在首位]
- 通讯作者：Jianwen Jiang (ByteDance) [论文中标记为共同第一作者及邮箱后缀为@bytedance.com，可推断为通讯作者]
- 作者列表：
  Zhenzhi Wang (The Chinese University of Hong Kong)
  Jiaqi Yang (ByteDance) [共同第一作者]
  Jianwen Jiang (ByteDance) [共同第一作者，通讯作者]
  Chao Liang (ByteDance)
  Gaojie Lin (ByteDance)
  Zerong Zheng (ByteDance)
  Ceyuan Yang (ByteDance)
  Yuan Zhang (ByteDance)
  Mingyuan Gao (ByteDance)
  Dahua Lin (The Chinese University of Hong Kong)

💡 **毒舌点评**

该工作的亮点在于精准地识别并解决了多概念、多模态条件下“鸡生蛋”的布局预测与条件注入循环依赖问题，通过迭代掩码预测与缓存机制实现了优雅的解耦，并构建了大规模高质量数据集。然而，其局限性也很明显：模型在人物数量增多时的泛化能力未得到充分验证（数据集以2-3人为主），且由于训练数据域的限制，其文本遵循能力相较于通用文本到视频模型较弱，这在一定程度上限制了其应用场景。

🔗 **开源详情**

- 代码：论文中提供了代码复现的说明，并给出了在公开视频扩散预训练模型Wan2.1上的实现细节和伪代码。附录中提到了数据集处理代码。但未直接提供代码仓库链接。
- 模型权重：论文未明确提及是否公开训练好的InterActHuman模型权重。
- 数据集：论文明确提到构建了超过260万的视频-实体对数据集，但未说明是否公开发布及获取方式。
- Demo：论文提供了在线视频演示链接（https://zhenzhiwang.github.io/interacthuman/）。
- 复现材料：提供了详细的训练策略、损失函数设计、超参数配置、硬件信息以及完整的推理算法伪代码。
- 引用的开源项目：依赖并引用了Wan2.1 (视频扩散预训练模型)、Qwen2-VL/Qwen2.5-VL (视觉语言模型)、Gemini (视觉语言模型)、Grounding-SAM2 (分割与检测)、RTMPose (姿态估计)、Florence-2 (视觉检测)、wav2vec 2.0 (音频特征)、Raft (光流)、PySceneDetect、PaddleOCR等开源工具或模型。

📌 **核心摘要**

1.  要解决的问题：现有音视频驱动的人类动画方法大多基于“单身份假设”，即全局地、隐式地将所有条件（图像、音频）应用于整个视频，无法处理包含多人物或人物与物体复杂交互的场景，导致音频条件错配、身份混淆等问题。
2.  方法核心：提出InterActHuman框架，其核心是一个轻量级的掩码预测器，用于显式地预测每个参考概念在生成视频中的时空布局。通过在扩散去噪步骤间迭代地使用上一步预测的掩码来指导当前步的局部音频条件注入，打破了布局预测与条件注入的循环依赖。
3.  新在哪里：摒弃了隐式特征融合，首次在多概念人类动画任务中引入显式的布局对齐条件注入机制，特别是针对音频这种强局部性的模态。这为每个身份提供了精确的、时空绑定的条件控制。
4.  主要实验结果：在多人物对话视频生成任务上，本方法（Sync-D: 6.670, FVD: 22.881）显著优于强基线如Kling1.6+Lip-sync（Sync-D: 8.401, FVD: 33.555）和OmniHuman（Sync-D: 9.482, FVD: 33.895）。在多概念视频定制任务上，在主体一致性（CLIP-I: 0.744, DINO-I: 0.533）和视觉质量（IQA: 4.903）等指标上也优于Phantom、Kling等方法。用户研究中，本方法在唇形同步和主体一致性两个任务上均获得最高评分和最高首选率。
5.  实际意义：为多角色、多物体的交互式视频生成（如多人对话、虚拟主播互动）提供了新的技术框架和基线，推动了更复杂、更可控的人类动画应用。
6.  主要局限性：1) 模型的文本遵循能力受训练数据域限制，弱于通用T2V模型；2) 训练数据集中的人物数量主要为2-3人，可能限制了模型向更多人物场景的泛化能力。

---

