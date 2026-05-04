---
title: "ICLR 2026 - 动作生成 论文列表"
date: 2026-05-04
draft: false
tags: ["动作生成"]
categories: [iclr-2026]
description: "共 1 篇 ICLR 2026 动作生成 方向论文"
hiddenInHomeList: true
---

# ICLR 2026 - 动作生成

共 **1** 篇论文

[← 返回 ICLR 2026 总览](/audio-paper-digest-blog/posts/iclr2026-summary/)

---

| 排名 | 论文 | 评分 | 分档 |
|------|------|------|------|
| 🥇 | [Unified Multi-Modal Interactive and Reactive 3D Motion Gener](/audio-paper-digest-blog/posts/2026-05-04-unified-multi-modal-interactive-and-reactive-3d) | 7.5分 | 前25% |

---

## 📋 论文详情

### 🥇 [Unified Multi-Modal Interactive and Reactive 3D Motion Generation via Rectified Flow](/audio-paper-digest-blog/posts/2026-05-04-unified-multi-modal-interactive-and-reactive-3d)

✅ **7.5/10** | 前25% | #动作生成 | #流匹配 | #检索增强 #多模态

👥 **作者与机构**

- 第一作者：Prerit Gupta (Purdue University, Department of Computer Science)
- 通讯作者：未说明（但Aniket Bera为最后作者，通常为通讯作者）
- 作者列表：Prerit Gupta (Purdue University), Shourya Verma (Purdue University), Ananth Grama (Purdue University), Aniket Bera (Purdue University)

💡 **毒舌点评**

亮点在于将交互和反应式双人动作生成统一到一个框架中，并创新性地为动作生成引入了基于LLM分解的检索增强生成，有效提升了语义对齐。短板在于该领域相对小众，实际应用场景（如VR/AR游戏）的验证可能有限，且模型参数量（456M）相比基线（224M）显著增大，提升了部署门槛。

🔗 **开源详情**

- 代码：论文明确承诺将开源代码（“Full code for this project... will be made open source... upon paper acceptance”），但未提供具体链接。
- 模型权重：承诺将提供训练好的检查点。
- 数据集：使用了InterHuman-AS、DD100、MDD三个公开数据集，论文中给出了获取参考。
- Demo：未提及在线演示。
- 复现材料：附录提供了详尽的LLM提示词设计、架构细节（公式）、损失权重配置、超参数选择等，复现信息充分。
- 引用的开源项目：SMPL模型（动作表示），CLIP（文本编码），Jukebox（音乐编码），GPT-4o（文本分解），FlashAttention（加速）。

📌 **核心摘要**

1. 问题：生成真实、与上下文相关的双人3D动作，需同时支持交互式（双向协调）和反应式（单向响应）两种模式，且能融合文本、音乐等多种模态条件输入，是当前计算机图形学和具身AI的挑战。
2. 方法：提出DualFlow，首个基于矫正流匹配（Rectified Flow）的统一框架。通过可切换的“双流块”架构，同一模型可处理交互与反应任务；引入专为双人动作设计的检索增强生成模块，利用GPT-4o分解文本为空间关系、身体动作和节奏三类描述，并结合音乐特征检索动作范例，以增强生成动作的语义准确性；采用对比矫正流匹配目标，提升运动嵌入与条件信号的对齐度。
3. 创新：(1) 统一架构实现交互与反应任务的无缝切换；(2) 首个用于双人动作的RAG框架；(3) 结合同步损失的对比矫正流匹配，提升生成质量与采样效率。
4. 实验结果：在MDD、InterHuman-AS、DD100三个数据集上进行广泛评估。在MDD的交互任务上，DualFlow(Both)的R-Precision@3达0.513，MMDist为0.513；在反应任务上，FID为0.686，R-Precision@3为0.471，均优于基线。相比InterGen，DualFlow仅需20步（2.5倍加速）即可达到更优的FID。
5. 意义：为VR/AR、游戏、社交机器人等需要协调人际行为的领域提供了高效且高质量的多模态动作生成方案。
6. 局限：在长序列生成时可能存在节奏偏移；反应模式下可能出现轻微的肢体穿插；RAG检索质量依赖于库的覆盖度与查询的清晰度。

---

