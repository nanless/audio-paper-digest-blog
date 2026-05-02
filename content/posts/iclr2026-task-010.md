---
title: "ICLR 2026 - 生成模型 论文列表"
date: 2026-05-02
draft: false
tags: ["生成模型"]
categories: [iclr-2026]
description: "共 2 篇 ICLR 2026 生成模型 方向论文"
hiddenInHomeList: true
---

# ICLR 2026 - 生成模型

共 **2** 篇论文

[← 返回 ICLR 2026 总览](/audio-paper-digest-blog/posts/iclr2026-summary/)

---

| 排名 | 论文 | 评分 | 分档 |
|------|------|------|------|
| 🥇 | [LayerSync: Self-aligning Intermediate Layers](/audio-paper-digest-blog/posts/2026-05-02-layersync-self-aligning-intermediate-layers) | 7.5分 | 前25% |
| 🥈 | [A Hidden Semantic Bottleneck in Conditional Embeddings of Di](/audio-paper-digest-blog/posts/2026-05-02-a-hidden-semantic-bottleneck-in-conditional) | 6.5分 | 前50% |

---

## 📋 论文详情

### 🥇 [LayerSync: Self-aligning Intermediate Layers](/audio-paper-digest-blog/posts/2026-05-02-layersync-self-aligning-intermediate-layers)

✅ **7.5/10** | 前25% | #生成模型 | #扩散模型 | #流匹配 #自监督学习

👥 **作者与机构**

- 第一作者：Yasaman Haghighi (EPFL， 与Bastien van Delft共同第一作者)
- 通讯作者：Alexandre Alahi (EPFL)
- 作者列表：Yasaman Haghighi (EPFL VITA实验室)， Bastien van Delft (EPFL VITA实验室)， Mariam Hassan (EPFL VITA实验室)， Alexandre Alahi (EPFL VITA实验室)

💡 **毒舌点评**

亮点：本文用一个极其简单（对齐两个层的特征）且零开销的插件，就在多个模态上实现了显著的训练加速和质量提升，堪称扩散模型领域的“高效内部教练”，实用价值很高。短板：所谓的“内部强层指导弱层”缺乏坚实的理论分析，层的选择（如“避开最后20%”）更像是经验性的“土方子”，其有效性边界和内在机理有待更深入的剖析。

🔗 **开源详情**

- 代码：论文提供代码仓库链接：`https://github.com/vita-epfl/LayerSync.git`。
- 模型权重：论文中未提及公开训练好的模型权重。
- 数据集：使用公开数据集（ImageNet， MTG-Jamendo， HumanML3D， CLEVRER， MixKit），获取方式遵循各数据集原有许可，论文中未特别说明。
- Demo：论文中未提及在线演示。
- 复现材料：提供了非常详细的超参数设置表（表18，19）、模型架构细节（表20）、算法伪代码（算法1）以及计算资源描述。复现信息充分。
- 引用的开源项目：论文中引用并依赖以下开源项目/模型：SiT， Stable Diffusion VAE， Stable Audio Open VAE， DINOv2， MDM等。

📌 **核心摘要**

1.  解决的问题：扩散模型（如DiT/SiT）训练成本高昂。已有工作通过将模型内部表征与外部强大预训练模型（如DINOv2， VLM）对齐来加速训练，但这种方法依赖外部模型、引入计算开销且跨领域泛化能力有限。
2.  方法核心：提出LayerSync，一种自包含、即插即用的正则化方法。核心思想是利用扩散模型自身深度网络中表征质量的异质性，将语义信息更丰富的深层块（强层）的输出作为目标，通过最大化相似度（如余弦相似度）来对齐并指导浅层块（弱层）的表征学习，从而实现模型内部的自我提升。
3.  与已有方法相比的新意：与依赖外部模型的对齐方法（如REPA， REED）不同，LayerSync无需任何外部模型或数据，计算开销几乎为零。与另一种自包含方法Dispersive Loss（鼓励表征分散）相比，LayerSync提供了更直接的定向学习信号（强层对齐弱层）。
4.  主要实验结果：
    * 图像生成（ImageNet 256x256）：使用LayerSync的SiT-XL/2模型，训练800 epochs后FID达到1.89（使用CFG），比基线SiT-XL/2的2.06降低了8.3%，在纯自监督生成方法中达到SOTA。相比基线SiT-XL/2，训练160 epochs时的FID（8.29）已低于基线训练1400 epochs时的FID（8.3），实现了超过8.75倍的训练加速。相比Dispersive Loss，在相同epoch下FID改进幅度平均高出约20个百分点。
    * 音频生成（MTG-Jamendo）：使用LayerSync的SiT-XL模型，在650 epochs时FAD（CLAP）为0.199，相比基线的0.251降低了20.7%。收敛速度提升约23%。
    * 人体运动生成（HumanML3D）：使用LayerSync的MDM模型，在600K迭代后FID为0.4801，相比基线的0.5206降低了7.7%。
    * 表示分析：在相同生成质量（FID）下，使用LayerSync的模型在分类（+32.4%）和语义分割（+63.3%）任务的线性探测精度上远超基线模型，表明其学到了更优质、更同质化的内部表征。
5.  实际意义：提供了一种简单、通用且高效的扩散模型训练加速方案，可无缝应用于不同模态（图像、音频、视频、运动），为降低生成模型训练门槛、推动其广泛应用提供了新思路。
6.  主要局限性：对齐的层对选择依赖启发式规则（如避开最后20%的解码层、保证一定距离），其最优策略可能因架构而异；缺乏对“为何此对齐有效”的理论解释；虽然实验跨领域，但在更复杂任务（如高分辨率视频生成）上的大规模验证尚不充分。

---

### 🥈 [A Hidden Semantic Bottleneck in Conditional Embeddings of Diffusion Transformers](/audio-paper-digest-blog/posts/2026-05-02-a-hidden-semantic-bottleneck-in-conditional)

✅ **6.5/10** | 前50% | #生成模型 | #扩散模型 | #多模态模型 #模型评估

👥 **作者与机构**

- 第一作者：Trung X. Pham (韩国科学技术院 KAIST)
- 通讯作者：Chang D. Yoo (韩国科学技术院 KAIST)
- 作者列表：Trung X. Pham (韩国科学技术院 KAIST)、Kang Zhang (韩国科学技术院 KAIST)、Ji Woo Hong (韩国科学技术院 KAIST)、Chang D. Yoo (韩国科学技术院 KAIST)

💡 **毒舌点评**

这篇论文以系统性的实验揭开了扩散Transformer条件嵌入的“假满汉全席”——看似丰盛的1152维向量里，99%都是“凑数”的摆设，证明了模型在条件表达上存在惊人的冗余。遗憾的是，论文止步于“发现并解释现象”，未能将此洞察转化为一个新的、更高效的条件注入架构，更像是给Transformer扩散模型做了一次精确诊断却没开出新药方。

🔗 **开源详情**

- 代码：论文中未提及分析代码的开源仓库链接。
- 模型权重：论文分析所用模型权重为公开发布的预训练权重（如DiT， REPA等），论文本身未发布新模型。
- 数据集：使用公开数据集ImageNet-1K， DeepFashion， VGGSound。
- Demo：未提供在线演示。
- 复现材料：附录（Appendix）提供了更详细的实验设置、额外可视化（如t-SNE图、更多剪枝结果）和分析，但未提供具体的代码或配置文件。
- 论文中引用的开源项目：引用了多个SOTA模型的官方代码库（DiT， MDT， SiT， LightningDiT， MG， REPA， X-MDPT， MDSGen）。

📌 **核心摘要**

1.  解决的问题：扩散Transformer（如DiT， MDT等）通过自适应层归一化（AdaLN）注入条件向量（如类别、姿态），但这些高维向量内部的结构与信息编码方式尚不明确。
2.  方法核心：对多个SOTA扩散Transformer的预训练条件嵌入进行系统性分析，量化其成对余弦相似度、幅度分布和维度贡献度（参与率PR），并通过剪枝实验验证其冗余性。
3.  新意：首次系统揭示了扩散Transformer条件嵌入的两个反直觉涌现特性：1) 极端相似性（离散任务>99%， 连续任务>99.9%）；2) 极端稀疏性（仅约1-2%的维度携带主要语义信息）。这与对比学习中的特征坍塌不同，且未损害生成质量。
4.  主要结果：
    *   在ImageNet-1K上，6个SOTA模型的条件向量两两余弦相似度在90%-99.5%之间（如REPA为99.46%）。
    *   在DeepFashion（姿态生成）和VGGSound（视频转音频）上，相似度超过99.98%。
    *   条件向量的有效维度（参与率PR）极低。例如，REPA模型在1152维中仅有约17.67个有效维度（nPR=1.53%）。
    *   关键消融：以REPA为例，剪枝绝对值低于阈值τ=0.02的尾部维度（移除762维，占66.21%），FID仅从7.1694微升至9.2202，而CLIP分数下降有限（29.746->29.221）。在τ=0.01时（移除38.94%），性能基本保持不变。
    *   反之，移除少量高幅度“头部”维度（如8维）会严重破坏生成质量（FID>500）。

| 模型/方法 | 数据集 | 指标 (FID↓ / IS↑ / CLIP↑) |
| :--- | :--- | :--- |
| REPA (基线) | ImageNet-1K | 7.1694 / 176.02 / 29.746 |
| REPA (剪枝 τ=0.01, t0) | ImageNet-1K | 7.1690 / 175.97 / 29.807 |
| REPA (剪枝 τ=0.02, ti) | ImageNet-1K | 9.2202 / 125.15 / 29.221 |
| REPA (剪枝 τ=5.0, ti，移除头部) | ImageNet-1K | 356.135 / 1.77 / 21.922 |

![剪枝尾部维度生成结果](icassp-img://FetaeuGsEs/7.jpg)
图8：不同阈值τ剪枝尾部维度后的生成图像。即使剪枝高达80%以上（τ=0.03），图像质量仍与基线REPA（τ=0）相当。

5.  实际意义：揭示了扩散Transformer在条件编码上存在严重的过参数化，为设计更轻量、高效的条件注入机制（如使用稀疏向量、或只保留关键维度）提供了直接依据和理论洞察。
6.  主要局限性：论文以分析和现象揭示为主，未提出一种新的、基于此发现的条件编码架构或训练方法；对于“为何高相似度仍能生成正确结果”的深层机理，仍停留在假设层面。

---

