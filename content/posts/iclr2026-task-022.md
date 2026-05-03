---
title: "ICLR 2026 - 语音分词 论文列表"
date: 2026-05-04
draft: false
tags: ["语音分词"]
categories: [iclr-2026]
description: "共 1 篇 ICLR 2026 语音分词 方向论文"
hiddenInHomeList: true
---

# ICLR 2026 - 语音分词

共 **1** 篇论文

[← 返回 ICLR 2026 总览](/audio-paper-digest-blog/posts/iclr2026-summary/)

---

| 排名 | 论文 | 评分 | 分档 |
|------|------|------|------|
| 🥇 | [Scaling Speech Tokenizers with Diffusion Autoencoders](/audio-paper-digest-blog/posts/2026-05-04-scaling-speech-tokenizers-with-diffusion) | 8.5分 | 前25% |

---

## 📋 论文详情

### 🥇 [Scaling Speech Tokenizers with Diffusion Autoencoders](/audio-paper-digest-blog/posts/2026-05-04-scaling-speech-tokenizers-with-diffusion)

🔥 **8.5/10** | 前25% | #语音分词 | #扩散模型 | #语音大模型 #流匹配

👥 **作者与机构**

- 第一作者：Yuancheng Wang (Meta Superintelligence Labs， 同时隶属香港中文大学深圳)
- 通讯作者：未说明（论文未明确标注）
- 作者列表：Yuancheng Wang (Meta Superintelligence Labs, CUHK-SZ)、Zhenyu Tang (Meta Superintelligence Labs)、Yun Wang (Meta Superintelligence Labs)、Arthur Hinsvark (Meta Superintelligence Labs)、Yingru Liu (Meta Superintelligence Labs)、Yinghao Aaron Li (Meta Superintelligence Labs)、Kainan Peng (Meta Superintelligence Labs)、Junyi Ao (Meta Superintelligence Labs, CUHK-SZ)、Mingbo Ma (Meta Superintelligence Labs)、Mike Seltzer (Meta Superintelligence Labs)、Qing He (Meta Superintelligence Labs)、Xubo Liu (Meta Superintelligence Labs)

💡 **毒舌点评**

亮点：该工作在极低的比特率（0.2 kbps）和令牌率（12.5 Hz）下，同时实现了出色的语音重建质量和强大的下游理解性能，为“一个表征统一理解与生成”提供了有力的实证。  
短板：尽管规模宏大，但论文承认其离散表征与连续特征表示相比仍存在性能差距，且其扩散解码器的结构天然不利于流式处理，这为实际部署留下了明确的改进空间。

🔗 **开源详情**

- 代码：论文中提及“我们将发布完整的推理代码和预训练模型检查点”，但未提供具体链接或仓库地址。
- 模型权重：同上，计划发布但未提供。
- 数据集：使用200万小时内部数据，未提及公开数据集。
- Demo：提供了在线演示页面链接：https://sitok-demo.github.io/
- 复现材料：附录（Appendix）中提供了非常详细的架构描述（伪代码）、训练循环（伪代码）和实现细节，为复现提供了充分信息。
- 论文中引用的开源项目：Vocos（声码器）、Llama（模型架构基础）。

📌 **核心摘要**

1.  问题：现有语音分词器在平衡压缩率、重建质量和语义丰富性方面面临根本性挑战，尤其是在低令牌率下，确定性重建目标会导致语义信息丢失。
2.  方法核心：提出SiTok，一个基于扩散自编码器的语音分词器。它通过一个编码器将语音梅尔谱图映射到潜在特征，经向量量化（VQ）得到离散令牌，再利用一个基于流匹配的扩散解码器从噪声中重建原始梅尔谱图。关键创新是引入基于CTC损失的语义正则化，直接监督量化后的离散表征。
3.  与已有方法相比新在哪里：a) 端到端联合优化：将向量量化器与扩散解码器在一个统一框架内端到端训练，避免了传统两阶段方法的次优解耦。b) 生成式解码克服瓶颈：用扩散模型替代确定性解码，显式建模了激进压缩带来的不确定性。c) 显式语义监督：通过CTC损失直接约束离散令牌的语义内容，而非依赖间接的特征对齐。
4.  主要实验结果：SiTok在极低比特率下表现优异。在SeedTTS test-en数据集上，其基础版本（单码本）达到：WER 4.06，说话人相似度(SIM) 0.641，UTMOS 3.44。通过解码器微调和令牌分类器引导（Token CFG），WER可进一步降至3.34。在理解任务上，其LLM-ASR WER为4.95，显著优于所有基线。消融研究证实，扩散目标优于回归目标，CTC损失权重（λ_ctc=0.1）是关键超参，模型扩展存在最优平衡点（L型）。
5.  实际意义：为语音大模型提供了一种高效、统一的接口。其极低的令牌率显著缩短了自回归建模的序列长度，从而加速了下游语音语言模型的训练和推理。
6.  主要局限性：离散表征的性能仍不及连续特征表示；基于扩散的解码过程需要迭代步骤，对实时流式生成不友好，未来需探索分块自回归扩散等方案。

---

