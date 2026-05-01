---
title: "ICASSP 2026 - 实体消歧 论文列表"
date: 2026-04-29
draft: false
tags: ["实体消歧"]
categories: [icassp-2026]
description: "共 1 篇 ICASSP 2026 实体消歧 方向论文"
hiddenInHomeList: true
---

# ICASSP 2026 - 实体消歧

共 **1** 篇论文

[← 返回 ICASSP 2026 总览](/audio-paper-digest-blog/posts/icassp2026-summary/)

---

| 排名 | 论文 | 评分 | 分档 |
|------|------|------|------|
| 🥇 | [Rethinking Entity Disambiguation in Complex Modalities](/audio-paper-digest-blog/posts/2026-04-29-rethinking-entity-disambiguation-in-complex) | 8.0分 | 前25% |

---

## 📋 论文详情

### 🥇 [Rethinking Entity Disambiguation in Complex Modalities](/audio-paper-digest-blog/posts/2026-04-29-rethinking-entity-disambiguation-in-complex)

🔥 **8.0/10** | 前25% | #实体消歧 | #多模态模型 | #对比学习 #音视频

👥 **作者与机构**

- 第一作者：Yingyao Ma（东南大学计算机科学与工程学院）
- 通讯作者：Jiasong Wu（*，东南大学计算机科学与工程学院）
- 作者列表：Yingyao Ma（东南大学计算机科学与工程学院），Yifan Xue（东南大学计算机科学与工程学院），Wanqiang Cai（东南大学计算机科学与工程学院），Yuanyuan Zhou（东南大学计算机科学与工程学院），Jiasong Wu（东南大学计算机科学与工程学院），Lotfi Senhadji（法国雷恩大学，INSERM，LTSI-UMR 1099），Huazhong Shu（东南大学计算机科学与工程学院）

💡 **毒舌点评**

亮点：论文系统性地将实体消歧任务从传统文本/静态图像扩展到动态的视频、音频等“复杂模态”，并为此构建了一个专用的多模态数据集，填补了特定场景下的研究空白。短板：音频模态的处理略显“工具化”，主要通过ASR转文本再匹配来利用，对音频波形本身的声学特征（如音色、韵律）利用不足，可能限制了其在语音主导场景下的性能上限。

🔗 **开源详情**

- 代码：提供了一个匿名代码仓库链接：https://anonymous.open.science/r/CMED-code-B0E8。
- 模型权重：未提及是否公开预训练或最终模型的权重。
- 数据集：构建并公开了Focus数据集（包括Focus-H和Focus-A两个版本），论文中未说明具体获取方式，通常需联系作者或通过提供链接下载。
- Demo：未提供在线演示。
- 复现材料：在论文的“Implementation Details”部分提供了训练所用的优化器（Adam）、学习率（1e-3）、batch size（64）、训练轮数（50 epochs）、GPU型号（NVIDIA GTX A6000）以及超参数调优方法（网格搜索）。
- 论文中引用的开源项目：依赖的开源工具/模型包括：CLIP（特征提取）、SBERT（句子编码）、BERT（基线）、BLINK（基线）以及多个多模态基线模型（ALBEF, MaPLe, ClipBERT等）。

📌 **核心摘要**

1.  问题：传统实体消歧方法主要依赖静态的文本或图像信息，难以处理真实世界中日益复杂的、包含动态视频和音频信息的多模态场景。
2.  方法核心：提出CMED（Complex-Modality Entity Disambiguation）框架，包含两个关键模块：提及中心特征定位与提取模块（通过关键帧采样、音频定位网络等定位与提及相关的多模态信息）和多级相似度计算模块（计算文本、全局视频、局部视频等多个层面的提及-实体相似度）。框架利用对比学习进行联合训练。
3.  新意：与现有仅处理文本或图文的方法相比，CMED首次统一处理文本、视频、音频三种模态。创新点在于设计了针对复杂模态的特征定位机制（如视频帧采样、音频上下文定位）以及多层次（全局/局部）的多模态特征融合与匹配策略。
4.  实验结果：论文构建了包含中文新闻视频、音频和文本的Focus数据集。在Focus-H（标题作为上下文）和Focus-A（音频转写作为上下文）两个版本上，CMED显著超越所有基线。例如，在Focus-H数据集上，CMED的Hits@1为74.41%，相比最强视频基线（CLIP4Clip）的64.49%提升近10个百分点，MRR从75.30提升至81.69。消融实验表明，全局特征、局部特征、视频帧采样网络、音频定位网络和上下文增强等所有组件对性能均有贡献。
5.  实际意义：为动态、复杂的多模态信息环境（如新闻视频分析）提供了更鲁棒的实体消歧解决方案，有助于提升下游任务（如信息抽取、问答）的准确性。
6.  主要局限性：1) Focus数据集规模中等（约7k样本），且来源于特定领域的中文新闻视频��模型的跨领域、跨语言泛化能力有待验证；2) 音频模态的利用方式相对间接（ASR转文本），未深度挖掘原始音频信号的特性；3) 实时性或流式处理能力未被讨论。

---

