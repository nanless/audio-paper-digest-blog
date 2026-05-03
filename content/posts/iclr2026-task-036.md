---
title: "ICLR 2026 - 音乐信息检索 论文列表"
date: 2026-05-04
draft: false
tags: ["音乐信息检索"]
categories: [iclr-2026]
description: "共 1 篇 ICLR 2026 音乐信息检索 方向论文"
hiddenInHomeList: true
---

# ICLR 2026 - 音乐信息检索

共 **1** 篇论文

[← 返回 ICLR 2026 总览](/audio-paper-digest-blog/posts/iclr2026-summary/)

---

| 排名 | 论文 | 评分 | 分档 |
|------|------|------|------|
| 🥇 | [Bridging Piano Transcription and Rendering via Disentangled ](/audio-paper-digest-blog/posts/2026-05-04-bridging-piano-transcription-and-rendering-via) | 8.0分 | 前25% |

---

## 📋 论文详情

### 🥇 [Bridging Piano Transcription and Rendering via Disentangled Score Content and Style](/audio-paper-digest-blog/posts/2026-05-04-bridging-piano-transcription-and-rendering-via)

🔥 **8.0/10** | 前25% | #音乐信息检索 | #解耦表示学习 | #扩散模型 #多任务学习

👥 **作者与机构**

- 第一作者：Wei Zeng（新加坡国立大学 NUS Graduate School Integrative Sciences and Engineering Programme；School of Computing）
- 通讯作者：Ye Wang（新加坡国立大学 School of Computing；邮箱: dcswangy@nus.edu.sg）
- 作者列表：Wei Zeng（新加坡国立大学）、Junchuan Zhao（新加坡国立大学 School of Computing）、Ye Wang（新加坡国立大学 School of Computing）

💡 **毒舌点评**

亮点：论文的框架设计颇具巧思，将本质上互逆的钢琴转录和表情渲染任务统一建模，并通过序列到序列的转换巧妙规避了对耗时费力的音符级对齐数据的依赖，这在该领域是一个显著的工程和方法学进步。短板：作为核心模块之一的风格推荐模型（PSR）的评估稍显间接，主要依赖于生成嵌入与真实嵌入在潜在空间的相似性，缺乏更直接的“生成风格是否匹配乐谱”的用户端评估，说服力略有不足。

🔗 **开源详情**

- 代码：论文中提及“代码将在接受后发布”，但未提供具体链接或仓库地址。
- 模型权重：未提及公开预训练权重。
- 数据集：训练数据集ASAP和ATEPP为公开数据集。无配对数据集的构建方法已说明。
- Demo：论文提供了演示页面链接：https://wei-zeng98.github.io/joint-apt-epr/。
- 复现材料：在附录A、B、C中提供了极其详尽的数据处理、模型架构、训练设置、超参数、评估协议等信息，复现材料非常充分。
- 论文中引用的开源项目：Partitura (Cancino-Chac´on et al., 2022), MidiTok (Fradet et al., 2021), Aria AMT (https://github.com/EleutherAI/aria-amt)。

📌 **核心摘要**

1. 问题：音乐信息检索（MIR）中的表情性能渲染（EPR，从乐谱生成表演）和自动钢琴转录（APT，从表演恢复乐谱）是两个互逆的基础任务，但此前被独立研究，且大多数EPR方法依赖于难以获取的音符级对齐数据。
2. 方法核心：提出一个统一的Transformer序列到序列框架，通过解耦“音符级乐谱内容表示”和“全局性能风格表示”来联合建模APT和EPR。该框架可使用配对数据和无配对数据（仅需序列级对齐）训练。此外，独立训练一个基于扩散模型的性能风格推荐（PSR）模块，能仅从乐谱内容生成合适的风格嵌入。
3. 新意：与已有方法相比，其新意在于：(1) 任务的统一联合建模，利用互逆性进行互相监督；(2) 提出了一种无需音符级对齐的EPR的Seq2Seq表述；(3) 通过PSR模块实现了从乐谱到自动风格推荐的端到端流程。
4. 主要实验结果：
    * APT：在ASAP数据集上，与最先进的基于Seq2Seq的端到端模型Beyer & Dai (2024)相比，本方法在多个指标上取得更优结果，例如ScoreSimilarity的Eavg从14.10降至12.48，Eextra从11.29降至9.48（具体见Table 1）。
    * EPR：在客观评估中（Table 2），本方法（Ours-Target）在时长和力度的KL散度、MAE上优于VirtuosoNet和DExter等基线。主观听测（Figure 2）显示，本方法（Target Style）在动态、节奏、风格和整体人性化方面获得最高评分。
    * 解耦验证：使用风格嵌入进行演奏家/作曲家分类的准确率（如作曲家77.46%）远高于使用内容嵌入（29.99%），证明了解耦的有效性（Table 4）。风格迁移实验（Figure 5）也表明了控制的可行性。
    * PSR有效性：通过t-SNE可视化（Figure 4），PSR生成的风格嵌入在音乐历史时期聚类上与从真实表演提取的嵌入高度相似。
5. 实际意义：该工作为音乐AI应用（如自动伴奏、音乐教育、个性化演奏生成）提供了一个更灵活、数据需求更低的基础框架。它允许非专业用户通过简单的乐谱输入获得风格恰当的演奏，或从演奏中恢复乐谱。
6. 主要局限性：目前主要在古典钢琴音乐上验证，向爵士、流行等更具即兴性和多样性的风格扩展是未来挑战（论文Section E）。此外，风格推荐模块的评估相对间接。

---

