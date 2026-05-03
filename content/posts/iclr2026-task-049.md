---
title: "ICLR 2026 - 音频驱动动画 论文列表"
date: 2026-05-04
draft: false
tags: ["音频驱动动画"]
categories: [iclr-2026]
description: "共 1 篇 ICLR 2026 音频驱动动画 方向论文"
hiddenInHomeList: true
---

# ICLR 2026 - 音频驱动动画

共 **1** 篇论文

[← 返回 ICLR 2026 总览](/audio-paper-digest-blog/posts/iclr2026-summary/)

---

| 排名 | 论文 | 评分 | 分档 |
|------|------|------|------|
| 🥇 | [InterActHuman: Multi-Concept Human Animation with Layout-Ali](/audio-paper-digest-blog/posts/2026-05-04-interacthuman-multi-concept-human-animation-with) | 7.5分 | 前25% |

---

## 📋 论文详情

### 🥇 [InterActHuman: Multi-Concept Human Animation with Layout-Aligned Audio Conditions](/audio-paper-digest-blog/posts/2026-05-04-interacthuman-multi-concept-human-animation-with)

✅ **7.5/10** | 前25% | #音频驱动动画 | #扩散模型 #流匹配 | #扩散模型 #多模态模型

👥 **作者与机构**

- 第一作者：Zhenzhi Wang*（香港中文大学，字节跳动）
- 通讯作者：论文中未明确标注
- 作者列表：Zhenzhi Wang（香港中文大学，字节跳动）、Jiaqi Yang（字节跳动）、Jianwen Jiang*（字节跳动）、Chao Liang（字节跳动）、Gaojie Lin（字节跳动）、Zerong Zheng（字节跳动）、Ceyuan Yang（字节跳动）、Yuan Zhang（字节跳动）、Mingyuan Gao（字节跳动）、Dahua Lin（香港中文大学）
  （*表示共同第一作者）

💡 **毒舌点评**

这篇论文巧妙地将“鸡生蛋，蛋生鸡”的推理循环转化为一个迭代收敛的流程，用预测掩码来精准绑定多概念的音频条件，是解决多身份音视频生成难题一个务实且有效的工程创新。但模型严重依赖高质量、多身份的视频-掩码-音频配对数据，其数据构建流程本身可能就是主要门槛，且对“文本跟随能力较弱”的坦承，暴露了其作为人类动画专用模型在通用性上的短板。

🔗 **开源详情**

- 代码：论文提及提供了在公开视频扩散预训练模型Wan2.1上复现的代码，但未在文中给出具体代码仓库链接。
- 模型权重：未提及公开预训练或微调后的模型权重。
- 数据集：论文中描述了数据集构建流程，并提及基于OpenHumanVid等数据集，但未说明所构建的260万数据集是否公开及获取方式。
- Demo：提供了在线视频演示链接：https://zhenzhiwang.github.io/interacthuman/
- 复现材料��提供了详细的算法伪代码（Algorithm 1）、训练超参数（学习率、batch size、步数等）、硬件配置、损失函数细节以及消融实验设置。
- 论文中引用的开源项目：提到了依赖Wan2.1 (Wang et al., 2025a) 作为基础模型，Qwen2.5-VL (Bai et al., 2025)，Grounding-SAM2 (Ren et al., 2024)，wav2vec 2.0 (Baevski et al., 2020)，Florence-2 (Xiao et al., 2024)，Q-align (Wu et al., 2023a)，RTMpose (Jiang et al., 2023)，Raft (Teed & Deng, 2020)，SyncNet (Chung & Zisserman, 2017) 等工具和模型。
- 论文中未提及完整的开源代码库链接，但提供了复现所需的详细信息。

📌 **核心摘要**

1.  问题：现有音视频驱动的人类动画方法大多基于“单身份”假设，将所有条件（如文本、图像、音频）全局融合，无法处理视频中出现多个概念（多人、人与物）并需要精确控制各自外观和语音的场景。
2.  方法核心：提出InterActHuman框架。其核心是在预训练的Diffusion Transformer (DiT) 中引入一个轻量级的掩码预测器模块，该模块能从参考图像和生成中的视频潜在特征中，预测出每个参考概念在视频中的时空布局（掩码）。然后，利用迭代去噪过程中上一步预测的掩码，将局部音频条件（如说话人的语音）只注入到对应概念的空间区域内，而非全局注入。
3.  创新点：相比隐式学习（如特征融合、注意力）的现有方法，本文采用了显式的布局对齐策略，强制将不同模态的条件与其对应身份的时空足迹进行强绑定。通过迭代缓存掩码的策略，巧妙地解决了推理时“需要先有视频才能预测掩码，但需要掩码才能注入条件”的循环依赖问题。
4.  实验结果：在多个基准上优于基线。在多概念对话视频生成测试集上，本方法（Ours）的唇音同步距离（Sync-D）为6.670，远优于全局音频条件（9.482）和固定掩码（7.068）等消融变体；视频质量分布距离（FVD）为22.881，也显著优于基线（33.895-40.239）。用户研究显示，其在音频驱动和多概念定制任务上均获得最高平均评分和首选率（表2）。
5.  实际意义：该方法为生成包含多人对话、人与物体交互的高质量、可控人类中心视频提供了有效技术路径，是迈向更复杂、更真实的虚拟数字人生成的重要一步。
6.  主要局限性：1) 训练数据域较窄（主要为人说话、唱歌视频），限制了对多样化文本提示的跟随能力；2) 训练数据以2-3个身份的视频为主，可能影响对超过3个身份输入的泛化。

---

