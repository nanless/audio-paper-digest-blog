---
title: "ICLR 2026 - 语音增强 论文列表"
date: 2026-05-04
draft: false
tags: ["语音增强"]
categories: [iclr-2026]
description: "共 1 篇 ICLR 2026 语音增强 方向论文"
hiddenInHomeList: true
---

# ICLR 2026 - 语音增强

共 **1** 篇论文

[← 返回 ICLR 2026 总览](/audio-paper-digest-blog/posts/iclr2026-summary/)

---

| 排名 | 论文 | 评分 | 分档 |
|------|------|------|------|
| 🥇 | [SpeechOp: Inference-Time Task Composition for Generative Spe](/audio-paper-digest-blog/posts/2026-05-04-speechop-inference-time-task-composition-for) | 7.5分 | 前25% |

---

## 📋 论文详情

### 🥇 [SpeechOp: Inference-Time Task Composition for Generative Speech Processing](/audio-paper-digest-blog/posts/2026-05-04-speechop-inference-time-task-composition-for)

✅ **7.5/10** | 前25% | #语音增强 | #扩散模型 | #语音分离 #多任务学习

👥 **作者与机构**

- 第一作者：Justin Lovelace（Cornell University）
- 通讯作者：未明确说明（论文作者来自Cornell University和Adobe Research，从贡献描述看，Adobe Research团队的Rithesh Kumar, Jiaqi Su, Ke Chen, Zeyu Jin可能承担更多指导角色，但论文未明确标注通讯作者）
- 作者列表：
  - Justin Lovelace（Cornell University）
  - Rithesh Kumar（Adobe Research）
  - Jiaqi Su（Adobe Research）
  - Ke Chen（Adobe Research）
  - Kilian Q Weinberger（Cornell University）
  - Zeyu Jin（Adobe Research）

#

💡 **毒舌点评**

本文巧妙地将“资源过剩”的TTS模型改造为“资源匮乏”S2S任务的处理器，其提出的TC-CFG推理组合策略从原理上解释了如何优雅地融合不同生成任务的信号，避免了简单的分数平均带来的先验冲突。然而，论文的核心扩散架构（DiT+VAE）和多任务训练范式本身并无颠覆性创新，其真正亮点在于系统整合与工程设计，且在代码和模型开源方面显得较为吝啬，限制了社区的快速跟进与验证。

#

🔗 **开源详情**

- 代码：论文中提及项目网站 `https://justinlovelace.github.io/projects/speechop` 用于展示音频样本，但未提供代码仓库链接。
- 模型权重：未提及是否公开预训练模型或微调后的权重。
- 数据集：使用的是公开数据集（MLS, LibriTTS, LibriTTS-R, LibriMix等），但论文中未提供专门整理的数据集或下载脚本。
- Demo：提供了音频样本演示网站，但无交互式在线Demo。
- 复现材料：附录中提供了详尽的模型架构参数、训练配置、采样配置、数据模拟流程等，为复现提供了很好的指导。未提及提供训练检查点、预处理脚本或环境配置文件。
- 论文中引用的开源项目：主要依赖的开源项目包括：ByT5文本编码器、DAC音频编解码器、Whisper/WhisperX ASR模型、以及评估中使用的PESQ、MCD、WavLM-TDCNN等工具。
- 开源计划：论文中未提及明确的代码或模型开源计划。

📌 **核心摘要**

这篇论文针对语音到语音（S2S）处理任务（如语音增强、分离）因配对训练数据稀缺而导致内容与说话人信息易失真的问题，提出了一种名为SpeechOp的多任务潜在扩散模型。其核心思想是将一个在海量数据上预训练的TTS模型，通过适配训练转化为一个能执行多种S2S任务的通用语音处理器，并在推理时支持灵活的“任务组合”。与已有方法相比，新在三个方面：1）证明了TTS预训练能显著加速并提升S2S任务的训练与性能；2）提出了“任务组合分类器引导”（TC-CFG）策略，这是一种基于贝叶斯分解和无分类器引导原理的推理时组合方法，允许模型同时进行增强和文本引导，避免了简单分数平均的问题；3）设计了“隐式任务组合”（ITC）管线，利用Whisper等ASR模型生成的转录本，通过TC-CFG指导增强过程，无需在训练时提供转录本。主要实验结果显示：在零样本TTS和语音编辑上，SpeechOp超越或持平更强基线；在语音增强上，ITC将词错误率（WER）从基线模型的5.4%降至2.9%（相对降低46%），实现了SOTA的内容保留；在说话人分离的主观MOS评分上，SpeechOp显著优于SepFormer系列模型。该工作的实际意义在于提供了一个统一、灵活且高效的框架，能利用丰富的TTS数据知识来解决数据受限的S2S任务，并通过可调的TC-CFG在内容恢复和声学保真度间取得平衡。主要局限性是未提供代码和模型权重，其生成模型在客观信号保真度指标上仍逊于一些判别式方法。

#

---

