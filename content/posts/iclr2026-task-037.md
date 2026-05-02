---
title: "ICLR 2026 - 音视频描述 论文列表"
date: 2026-05-03
draft: false
tags: ["音视频描述"]
categories: [iclr-2026]
description: "共 1 篇 ICLR 2026 音视频描述 方向论文"
hiddenInHomeList: true
---

# ICLR 2026 - 音视频描述

共 **1** 篇论文

[← 返回 ICLR 2026 总览](/audio-paper-digest-blog/posts/iclr2026-summary/)

---

| 排名 | 论文 | 评分 | 分档 |
|------|------|------|------|
| 🥇 | [AVoCaDO: An Audiovisual Video Captioner Driven by Temporal O](/audio-paper-digest-blog/posts/2026-05-03-avocado-an-audiovisual-video-captioner-driven-by) | 7.5分 | 前25% |

---

## 📋 论文详情

### 🥇 [AVoCaDO: An Audiovisual Video Captioner Driven by Temporal Orchestration](/audio-paper-digest-blog/posts/2026-05-03-avocado-an-audiovisual-video-captioner-driven-by)

✅ **7.5/10** | 前25% | #音视频描述 | #强化学习 | #多模态模型 #视频理解

👥 **作者与机构**

- 第一作者：Xinlong Chen (快手技术Kling团队、中国科学院自动化研究所NLPR、中国科学院大学人工智能学院)
- 通讯作者：Qiang Liu (中国科学院自动化研究所NLPR、中国科学院大学人工智能学院)
- 作者列表：
    - Xinlong Chen (快手技术Kling团队、中国科学院自动化研究所NLPR、中国科学院大学人工智能学院)
    - Yue Ding (中国科学院自动化研究所NLPR、中国科学院大学人工智能学院)
    - Weihong Lin (快手技术Kling团队)
    - Jingyun Hua (快手技术Kling团队)
    - Linli Yao (北京大学)
    - Yang Shi (北京大学)
    - Bozhou Li (北京大学)
    - Qiang Liu (中国科学院自动化研究所NLPR、中国科学院大学人工智能学院)
    - Yuanxing Zhang (快手技术Kling团队)
    - Pengfei Wan (快手技术Kling团队)
    - Liang Wang (中国科学院自动化研究所NLPR、中国科学院大学人工智能学院)

💡 **毒舌点评**

亮点：针对音视频时序对齐这一核心痛点，设计了一套从数据构建（两阶段融合）到优化目标（三重奖励）的完整解决方案，工程设计和实验验证都很扎实，在多个基准上取得了开源模型SOTA。  
短板：其“创新”很大程度上是将已有的RLHF范式（GRPO）与精心设计的规则奖励结合，基础模型（Qwen2.5-Omni）并非最新最强，且训练和评估严重依赖强大的外部闭源模型（Gemini， GPT-4），这既可能影响方法的普适性，也带来了公平性质疑。

🔗 **开源详情**

- 代码：论文中未提及具体的代码仓库链接。仅承诺“该模型将开源以促进未来研究”。
- 模型权重：未提及模型权重的下载地址或发布平台。
- 数据集：明确说明训练数据（107K音视频描述对）将开源（“This model will be open-source”），但未说明具体发布平台和获取方式。论文列出了所有原始视频数据的来源。
- Demo：未提及在线演示链接。
- 复现材料：提供了详细的训练超参数（学习率、batch size等）、奖励函数实现细节（包括公式和示例）、数据构建流程图（图2）和提示词（附录G），复现指南相对充分。
- 论文中引用的开源项目：依赖的基础模型为Qwen2.5-Omni（来自Qwen团队）。数据生成和评估依赖了Gemini-2.5-Pro和GPT-4o/4.1。

📌 **核心摘要**

1.  要解决的问题：现有视频描述模型大多为视觉中心，忽略了音频（对话、音乐、音效）的语义信息及其与视觉事件的时序对齐，导致对视频内容的理解不全面。
2.  方法核心：提出AVoCaDO，一个基于Qwen2.5-Omni的音视频视频描述器。核心是两阶段后训练流程：第一阶段（SFT）在精心构建的107K高质量、时序对齐的音视频描述数据上进行监督微调；第二阶段（GRPO）设计三个互补的奖励函数（检查表奖励、对话奖励、长度奖励），通过强化学习进一步优化描述的完整性、对话准确性和输出稳定性。
3.  与已有方法相比的新颖之处：1）数据层面：提出了两阶段融合策略生成高质量音视频对齐描述，而非简单拼接单模态描述或端到端直接生成。2）优化层面：针对音视频描述任务特性，设计了多目标、可量化的奖励函数组合，而非通用的相似度或任务型奖励。3）评估层面：系统性地在多个音视频描述基准（包括直接评估和QA评估）上进行对比。
4.  主要实验结果：
    - 在UGC-VideoCap基准上，AVoCaDO平均得分73.2，超越所有开源模型（最强基线video-SALMONN-2为67.2）和商业模型Gemini-2.5-Flash（73.0），与Gemini-2.5-Pro（72.6）持平。
    - 在Daily-Omni基准的QA评估中，AVoCaDO准确率50.1%，显著领先于最强开源基线video-SALMONN-2（29.9%）和Qwen3-Omni-Captioner（27.2%），接近Gemini-2.5-Pro（60.2%）。
    - 消融实验证实了SFT数据和三个GRPO奖励函数各自的有效性，例如加入长度奖励后，重复崩溃率从3.9%降至0.4%。
    - 关键实验结果表格（Table 1， 音视频描述直接评估）：
| Model | Size | Modality | UGC-VideoCap (Avg. ↑) |
| :--- | :--- | :--- | :--- |
| Gemini-2.5-Pro | - | A + V | 72.6 |
| Gemini-2.5-Flash | - | A + V | 73.0 |
| Qwen3-Omni-Captioner | 30B-A3B | A + V | 72.5 |
| video-SALMONN-2* | 7B | A + V | 67.2 |
| AVoCaDO (Ours) | 7B | A + V | 73.2 |
5.  实际意义：为需要全面理解视频内容（如视频摘要、检索、生成）的下游任务提供了更强的基础能力，特别是需要精确理解音视频事件关联的应用场景。
6.  主要局限性：1）模型性能和数据构建严重依赖Gemini、GPT-4等闭源大模型。2）论文承诺开源但未提供具体链接，可复现性受限。3）在仅视觉任务（VDC， DREAM-1K）上虽表现有竞争力，但优势不明显，说明音视频模态融合的收益在纯视觉场景下有限。

---

