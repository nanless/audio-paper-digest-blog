---
title: "ICLR 2026 - 视频生成 论文列表"
date: 2026-05-04
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
| 🥇 | [InterActHuman: Multi-Concept Human Animation with Layout-Ali](/audio-paper-digest-blog/posts/2026-05-04-interacthuman-multi-concept-human-animation-with) | 7.5分 | 前25% |
| 🥈 | [Stable Video Infinity: Infinite-Length Video Generation with](/audio-paper-digest-blog/posts/2026-05-04-stable-video-infinity-infinite-length-video) | 7.0分 | 前25% |

---

## 📋 论文详情

### 🥇 [InterActHuman: Multi-Concept Human Animation with Layout-Aligned Audio Conditions](/audio-paper-digest-blog/posts/2026-05-04-interacthuman-multi-concept-human-animation-with)

✅ **7.5/10** | 前25% | #视频生成 | #扩散模型 | #音频条件 #多概念定制

👥 **作者与机构**

- 第一作者：Zhenzhi Wang*（香港中文大学）
- 通讯作者：论文中未明确标注通讯作者
- 作者列表：Zhenzhi Wang（香港中文大学）、Jiaqi Yang（字节跳动）、Jianwen Jiang*B（字节跳动）、Chao Liang（字节跳动）、Gaojie Lin（字节跳动）、Zerong Zheng（字节跳动）、Ceyuan Yang（字节跳动）、Yuan Zhang（字节跳动）、Mingyuan Gao（字节跳动）、Dahua Lin（香港中文大学）

💡 **毒舌点评**

论文提出的显式布局预测模块有效解决了多人动画中的“鸡和蛋”困境，是音视频对齐领域一个清晰的技术进步。但论文的致命短板是零开源支持——没有代码、模型权重或训练数据，这使得其标榜的“基线”价值大打折扣，复现难度极高。

🔗 **开源详情**

- 代码：论文中未提及代码仓库链接。
- 模型权重：未提及公开的模型权重。
- 数据集：论文中描述了自建的大规模数据集，但未提及如何获取。
- Demo：论文中提供了视频演示的链接 (`https://zhenzhiwang.github.io/interacthuman/`)。
- 复现材料：论文提供了详细的算法伪代码（算法1）、训练超参数（学习率、batch size、硬件、步数等）、损失函数设计和数据处理流程的描述，为复现提供了重要信息。附录包含更多实验细节。
- 论文中引用的开源项目：Wan2.1（预训练模型基础）、Qwen2.5-VL（提示重述）、Qwen2-VL（数据标注）、Gemini-2.0-Flash（描述解析）、Grounding-SAM2（掩码生成）、wav2vec 2.0（音频特征）、Florence-2（主体检测）、CLIP/DINO（特征提取）、SyncNet（唇音同步）、Raft（光流）、RTMpose（人体关键点）、PaddleOCR（字幕检测）、PySceneDetect（视频剪辑）等。

📌 **核心摘要**

1. 问题：现有的端到端人体动画方法大多假设单一主体并采用全局条件注入，无法处理需要精确区域控制的多概念（多人、人-物）交互场景，尤其是将不同音频信号准确分配给对应人物的挑战。
2. 方法：本文提出InterActHuman框架，其核心是一个轻量级掩码预测模块，能自动从参考图像中推断每个身份在视频中的时空布局（掩码）。在推理时，利用迭代扩散过程，将上一步预测的掩码用于指导当前步的局部音频注入，解决了布局预测与条件注入的相互依赖问题。
3. 创新：与隐式学习（如特征融合）的已有方法不同，该工作首次提出并验证了显式布局约束对于多概念、多模态人体动画的重要性。它提供了一个统一的接口，通过布局来同步注入图像和音频等全局与局部条件。
4. 实验结果：在多人音频驱动动画测试集上，该方法在唇音同步距离（Sync-D）和视频FVD指标上显著优于基线（如OmniHuman），具体数值见表1。用户研究也表明其在唇音同步和主体一致性上大幅领先（表2）。在多概念视频定制任务中，其身份保真度指标（如CLIP-I， DINO-I）也达到最佳（表3）���
5. 实际意义：为高质量、可控的多角色对话视频生成和基于多参考图像的视频定制提供了新的技术路径，有望应用于数字内容创作、虚拟交互等领域。
6. 局限性：训练数据域较窄（主要为人像），限制了文本提示的多样性；模型主要针对2-3人场景训练，对更多人数的泛化能力未充分验证。

---

### 🥈 [Stable Video Infinity: Infinite-Length Video Generation with Error Recycling](/audio-paper-digest-blog/posts/2026-05-04-stable-video-infinity-infinite-length-video)

✅ **7.0/10** | 前25% | #视频生成 | #扩散模型 | #流匹配 #多模态模型

👥 **作者与机构**

- 第一作者：Wuyang Li (VITA@EPFL)
- 通讯作者：未说明 (论文末尾致谢部分提及Alexandre Alahi教授，但未明确标注为通讯作者)
- 作者列表：Wuyang Li (VITA@EPFL), Wentao Pan (VITA@EPFL), Po-Chien Luan (VITA@EPFL), Yang Gao (VITA@EPFL), Alexandre Alahi (VITA@EPFL)

💡 **毒舌点评**

论文最大的亮点在于提出了“错误回收”这一新颖且直觉上合理的范式来解决长视频生成中的误差累积问题，通过让模型“吃自己生成的错误”来提升鲁棒性，理论分析深刻且实验效果显著。短板在于其核心理论框架（尤其是错误注入与计算的数学部分）稍显复杂，部分实现细节（如错误银行的动态更新）的工程可行性分析略显不足，且在超长视频（15分钟）展示中，角色身份一致性等更高级挑战的解决方案尚处萌芽阶段。

🔗 **开源详情**

- 代码：论文提及将开源完整代码库，项目主页为 `https://stable-video-infinity.github.io/homepage/`，但具体代码仓库链接未在文中提供。
- 模型权重：论文承诺将提供模型，但具体发布平台（如Hugging Face）和权重链接未提及。
- 数据集：论文承诺将公开所有基准数据集。
- Demo：提供了项目主页，但未明确说明是否提供在线交互式Demo。
- 复现材料：论文提供了详细的超参数表（表12）、数据集描述和部分实现细节（如基于Wan 2.1，使用LoRA），为复现提供了重要信息。
- 引用的开源项目：明确基于 Wan 2.1 视频生成模型；音频说话任务参考了 Hallo 3；舞蹈任务参考了 UniAnimate-DiT；自动提示流生成使用了 Qwen2.5 大语言模型。
- 论文中未提及开源计划的具体时间表或权重文件的最终发布地址。

📌 **核心摘要**

这篇论文旨在解决长视频生成中的关键瓶颈——误差累积（drifting）问题。现有方法多通过调整噪声调度器或引入参考帧来缓解而非根除误差，导致生成的视频长度有限且场景单一。为此，论文提出了Stable Video Infinity (SVI)，其核心是“错误回收微调”方法：在训练时，人为地将模型（DiT）历史生成中可能出现的误差注入到干净的输入数据中，模拟推理时的误差累积场景；模型随后学习从这些“被污染”的输入中恢复出正确的预测结果，相当于学会了自我纠错。与已有方法相比，SVI的根本创新在于它弥合了训练时假设输入无误差与推理时条件中包含误差之间的“假设鸿沟”，使模型能够主动修正错误而非被动缓解。实验在一致性、创意和条件生成三个基准上进行，结果显示SVI在视频质量、一致性和动态程度等核心指标上均显著超越Wan 2.1、StreamingT2V、FramePack等最新方法（例如，在超长一致性生成中，SVI-Shot的Subject Consistency达到97.89%，比最强基线FramePack高出约11%）。该工作的实际意义在于首次将视频生成从“秒级”推进到“无限长度”，并支持文本流、音频、骨架等多条件控制。主要局限性包括：训练数据规模较小（仅数千条视频），可能导致风格泛化不足；当前版本为并行生成，暂不支持实时流式输出；以及超长片段中的身份一致性等高级语义控制仍有提升空间。

---

