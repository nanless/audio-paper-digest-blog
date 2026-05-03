---
title: "ICLR 2026 - 跨模态理解 论文列表"
date: 2026-05-04
draft: false
tags: ["跨模态理解"]
categories: [iclr-2026]
description: "共 1 篇 ICLR 2026 跨模态理解 方向论文"
hiddenInHomeList: true
---

# ICLR 2026 - 跨模态理解

共 **1** 篇论文

[← 返回 ICLR 2026 总览](/audio-paper-digest-blog/posts/iclr2026-summary/)

---

| 排名 | 论文 | 评分 | 分档 |
|------|------|------|------|
| 🥇 | [OmniVinci: Enhancing Architecture and Data for Omni-Modal Un](/audio-paper-digest-blog/posts/2026-05-04-omnivinci-enhancing-architecture-and-data-for) | 8.5分 | 前10% |

---

## 📋 论文详情

### 🥇 [OmniVinci: Enhancing Architecture and Data for Omni-Modal Understanding LLM](/audio-paper-digest-blog/posts/2026-05-04-omnivinci-enhancing-architecture-and-data-for)

🔥 **8.5/10** | 前10% | #跨模态理解 | #多模态模型 | #大语言模型 #强化学习

👥 **作者与机构**

- 第一作者：Hanrong Ye (论文标注*，表示核心贡献，机构为NVIDIA)
- 通讯作者：Hongxu Yin† (NVIDIA), Pavlo Molchanov† (NVIDIA) (论文标注†，表示通讯作者)
- 作者列表：Hanrong Ye, Chao-Han Huck Yang, Arushi Goel, Wei Huang, Ligeng Zhu, Yuanhang Su, Sean Lin, An-Chieh Cheng, Zhen Wan, Jinchuan Tian, Yuming Lou, Dong Yang (均为NVIDIA，表示核心贡献); Zhijian Liu, Yukang Chen, Ambrish Dantrey, Ehsan Jahangiri, Sreyan Ghosh, Daguang Xu, Ehsan Hosseini-Asl, Danial Mohseni Taheri, Vidya Murali, Sifei Liu, Yao Lu, Oluwatobi Olabiyi, Yu-Chiang Frank Wang, Rafael Valle, Bryan Catanzaro, Andrew Tao, Song Han, Jan Kautz, Hongxu Yin§†, Pavlo Molchanov§† (§Equal Advisory)。机构主要为NVIDIA，部分作者有学术单位背景（如Yu-Chiang Frank Wang为台湾大学教授），但论文主体机构为NVIDIA。

💡 **毒舌点评**

亮点：论文不仅提出了新颖的全模态对齐架构（OmniAlignNet），还设计了从数据合成到强化学习后训练的完整pipeline，且效率惊人（用6倍少的训练数据超越基线），展现了强大的系统工程能力。  
短板：绝对时间编码（CRTE）严重依赖精确的时间戳对齐，在现实场景中（如异步音视频流）的鲁棒性存疑；合成数据的“全模态QA”虽巧妙，但其质量高度依赖上游模型，可能引入难以察觉的“模态幻觉”，论文对此风险讨论不足。

🔗 **开源详情**

- 代码：论文中提及代码将开源（“Code”链接在标题下方），但未给出具体的GitHub仓库URL。
- 模型权重：论文中提及模型将开源（“Model”链接在标题下方），但未给出具体的下载链接。
- 数据集：论文提到生成了24M对话，但未明确说明此合成数据集是否会公开发布。
- Demo：论文中未提及在线演示链接。
- 复现材料：论文提供了详细的模型架构（第2节）、训练策略（第3节）和超参数设置（附录D.4），以及全面的消融实验（第4.1节），复现信息较为充分。
- 引用的开源项目：依赖的开源模型/工具包括：视觉编码器（未具体说明，可能基于ViT）、音频编码器（未具体说明）、LLM骨干（基于Qwen2.5架构？）、Magpie TTS（用于生成语音提示）、CLIP（用于对比损失参考）、ImageBind（对齐思想灵感）、Long-RL（用于强化学习训练）。

📌 **核心摘要**

1.  解决的问题：如何构建一个能同时理解视觉、音频（含语音和自然声）和文本的全模态大语言模型（Omni-modal LLM），并解决跨模态对齐、时序建模以及高质量全模态训练数据稀缺的核心挑战。
2.  方法核心：提出OmniVinci架构，包含三大技术：(1) OmniAlignNet，通过对比学习将视觉和音频嵌入对齐到共享潜空间；(2) 时序分组（TEG），按时间戳对嵌入进行分组以捕捉相对时序；(3) 受限旋转时间编码（CRTE），通过旋转嵌入注入绝对时间信息。同时，设计了全模态数据合成引擎，生成带推理链的对话数据。
3.  与已有方法相比新在哪里：相较于现有全模态模型（如Qwen2.5-Omni），OmniVinci的架构创新更系统（同时处理跨模态对齐和精细时序建模），数据策略更先进（结合隐式和显式全模态学习），训练效率极高（仅需0.2T token），并在多个基准上显著超越基线。
4.  主要实验结果：在DailyOmni（跨模态理解）上达到66.50分（+19.05），在Worldsense（视频-音频）上48.23分（+2.83），在MMAR（音频）上58.4分（+1.7），在Video-MME（视频）上68.2分（+3.9）。模型仅用0.2T token训练，是Qwen2.5-Omni（1.2T token）的1/6。消融实验表明，各架构模块均带来稳定增益。强化学习后训练进一步提升了性能。
5.  实际意义：推动了全模态AI的发展，使模型能更自然地像人一样同时感知视觉和听觉信息。在机器人导航、体育视频分析、跨语言语音翻译、医疗影像分析（结合医生语音解说）、工业质检等领域展示了应用潜力。
6.  主要局限性：CRTE等时序编码依赖精确的时间戳信息；合成数据的质量受限于生成模型；论文虽声称开源，但核心代码和权重链接在发表时可能未就绪；与GPT-4o等闭源最强模型的对比尚不完全。

---

