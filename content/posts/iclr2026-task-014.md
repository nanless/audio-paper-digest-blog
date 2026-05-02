---
title: "ICLR 2026 - 空间音频 论文列表"
date: 2026-05-03
draft: false
tags: ["空间音频"]
categories: [iclr-2026]
description: "共 1 篇 ICLR 2026 空间音频 方向论文"
hiddenInHomeList: true
---

# ICLR 2026 - 空间音频

共 **1** 篇论文

[← 返回 ICLR 2026 总览](/audio-paper-digest-blog/posts/iclr2026-summary/)

---

| 排名 | 论文 | 评分 | 分档 |
|------|------|------|------|
| 🥇 | [OWL : Geometry-Aware Spatial Reasoning for Audio Large Langu](/audio-paper-digest-blog/posts/2026-05-03-owl-geometry-aware-spatial-reasoning-for-audio) | 8.5分 | 前25% |

---

## 📋 论文详情

### 🥇 [OWL : Geometry-Aware Spatial Reasoning for Audio Large Language Models](/audio-paper-digest-blog/posts/2026-05-03-owl-geometry-aware-spatial-reasoning-for-audio)

🔥 **8.5/10** | 前25% | #空间音频 | #音频问答 | #音频大模型 #跨模态

👥 **作者与机构**

- 第一作者：未说明
- 通讯作者：未说明
- 作者列表：Subrata Biswas（未说明）、Mohammad Nur Hossain Khan（未说明）、Bashima Islam（未说明）

💡 **毒舌点评**

亮点：论文的亮点在于为音频大模型引入了显式的几何感知（通过SAGE模块），用3D结构信息“监督”声学特征，使其真正拥有空间“概念”，而非依赖粗糙的双耳线索，这比纯数据驱动的隐式学习更具可解释性和潜力。短板：其空间推理链（chain-of-thought）的设计目前仍依赖于“o’clock”这类预定义的离散方向描述符，在连续空间推理和超精细分辨率上的突破能力有待进一步验证，且课程学习策略增加了训练的复杂性。

🔗 **开源详情**

- 代码：是。提供了GitHub仓库链接：https://github.com/BASHLab/OWL
- 模型权重：未提及。
- 数据集：是。公开了名为BiDepth的大型数据集，包含超过百万QA对，可通过提供的链接获取。
- Demo：未提及。
- 复现材料：论文摘要中未提及是否提供了详细的训练配置、超参数或检查点。
- 论文中引用的开源项目：未在摘要中提及依赖的特定开源工具或模型。

📌 **核心摘要**

1.  问题：当前的音频大模型（ALLMs）在进行空间推理（如声源定位）时，主要依赖未结构化的双耳线索和单步推理，导致方向和距离估计的准确性与可解释性不足。
2.  方法核心：提出OWL模型，其核心是一个名为空间-声学几何编码器（SAGE）的模块。SAGE在训练时利用全景深度图像和房间脉冲响应，将双耳声学特征与3D空间结构对齐，从而学习几何感知的表示，而推理时仅需音频输入。
3.  创新之处：1) 提出SAGE，首次在音频编码阶段引入显式的几何监督；2) 将SAGE集成到ALLM中，并设计了空间感知的链式推理机制，以逐步推断方向和距离；3) 构建并发布了大规模数据集BiDepth（超过百万QA对），结合了双耳音频、全景深度图和房间脉冲响应。
4.  实验结果：在自建的BiDepth数据集和公开的SpatialSoundQA基准上，OWL相比基线BAT模型，将平均方向（DoA）误差降低了11°，并将空间推理QA准确率最高提升了25%。关键对比如下表所示：

| 数据集 | 模型/方法 | 平均DoA误差（°） | 空间QA准确率 |
| :--- | :--- | :--- | :--- |
| SpatialSoundQA | BAT | 未提供 | 未提供 |
| SpatialSoundQA | OWL (w/ SAGE) | 降低 11° | 提升 25% |
| BiDepth | BAT | 未提供 | 未提供 |
| BiDepth | OWL (w/ SAGE) | 显著降低 | 显著提升 |

注：具体绝对数值未在摘要中给出，相对提升数据来自摘要描述。
5.  实际意义：该工作推动了音频大模型从“听到”向“理解空间”的迈进，增强了模型在复杂环境中的感知和推理能力，为构建具有空间智能的音频AI（如智能家居助手、沉浸式交互系统）奠定了基础。
6.  主要局限性：推理时对“o’clock”方向的量化可能限制了其对连续、高精度空间方位的表达能力；所提出的课程学习和链式推理增加了模型的复杂度和训练成本。

---

