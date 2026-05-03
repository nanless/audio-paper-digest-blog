---
title: "ICLR 2026 - 3D动作生成 论文列表"
date: 2026-05-04
draft: false
tags: ["3D动作生成"]
categories: [iclr-2026]
description: "共 1 篇 ICLR 2026 3D动作生成 方向论文"
hiddenInHomeList: true
---

# ICLR 2026 - 3D动作生成

共 **1** 篇论文

[← 返回 ICLR 2026 总览](/audio-paper-digest-blog/posts/iclr2026-summary/)

---

| 排名 | 论文 | 评分 | 分档 |
|------|------|------|------|
| 🥇 | [Unified Multi-Modal Interactive and Reactive 3D Motion Gener](/audio-paper-digest-blog/posts/2026-05-04-unified-multi-modal-interactive-and-reactive-3d) | 7.0分 | 前25% |

---

## 📋 论文详情

### 🥇 [Unified Multi-Modal Interactive and Reactive 3D Motion Generation via Rectified Flow](/audio-paper-digest-blog/posts/2026-05-04-unified-multi-modal-interactive-and-reactive-3d)

✅ **7.0/10** | 前25% | #3D动作生成 | #流匹配 | #文本到动作 #音乐到动作

👥 **作者与机构**

- 第一作者：Prerit Gupta（普渡大学计算机科学系）
- 通讯作者：未明确说明（根据作者顺序和贡献标注，可能为Aniket Bera）
- 作者列表：Prerit Gupta（普渡大学计算机科学系）、Shourya Verma（普渡大学计算机科学系）、Ananth Grama（普渡大学计算机科学系）、Aniket Bera（普渡大学计算机科学系）

#

💡 **毒舌点评**

该工作的核心亮点在于用一个统一的流式（Rectified Flow）框架解决了交互和反应两种双人动作生成任务的割裂问题，并创新性地引入了面向双人交互的、基于LLM分解的多维度检索增强模块，在语义对齐上效果显著。但其短板在于，虽然号称“统一”，但两种任务模式仍依赖于注意力掩码切换，且模型复杂度（456M参数）和训练数据依赖（需LLM生成检索查询）可能限制了其在轻量级或资源受限场景下的实用性。

#

🔗 **开源详情**

- 代码：论文承诺“Full code for this project along with the trained checkpoints for all tasks will be made open source and publicly available upon paper acceptance.” 提供了项目主页链接：https://gprerit96.github.io/dualflow-page。但当前未直接提供代码仓库链接。
- 模型权重：论文承诺在论文接受后公开训练好的模型检查点。未提及当前是否可获取。
- 数据集：论文使用了InterHuman-AS和DD100，但未明确说明是否公开。其核心评估数据集MDD是作者提出的数据集，论文中未说明是否公开或如何获取。
- Demo：论文未提及在线演示。
- 复现材料：附录详细说明了模型架构（C节）、训练细节（实现细节部分、D节）、超参数（D.5节）和消融实验设置，提供了充分的复现信息。
- 论文中引用的开源项目：依赖并引用了CLIP (Radford et al., 2021)、Jukebox (Dhariwal et al., 2020)、SMPL (Loper et al., 2015)、GPT-4o (Hurst et al., 2024) 等开源模型或工具。

📌 **核心摘要**

1. 问题：生成协调、逼真的双人3D动作是一个挑战。现有方法通常将“交互式”（双方协调生成）和“反应式”（一方响应另一方）作为分离的任务，且大多只支持单一模态（文本或音乐）输入，无法满足VR/AR、游戏等场景中灵活切换和多模态条件的需求。
2. 方法核心：本文提出了DualFlow，首个统一的、基于Rectified Flow的多模态双人动作生成框架。其核心包括：a) 一个掩码机制，使同一架构能无缝切换于交互和反应两种生成模式；b) 一个专为双人动作设计的检索增强生成（RAG）模块，利用GPT-4o将文本描述分解为“空间关系”、“身体运动”、“节奏”三部分，并结合音乐特征检索相关动作样本，以增强语义引导；c) 对比Rectified Flow目标，通过对比损失强化运动嵌入与条件信号的对齐。
3. 与已有方法相比新在哪里：1) 统一架构：首次将交互与反应双人动作生成统一到一个框架中。2) 面向双人的RAG：首次为双人动作生成引入RAG，且其检索基于LLM分解的文本特征和音乐特征。3) 结合Rectified Flow与对比学习：利用Rectified Flow实现更快更稳定的采样，并通过对比学习提升语义保真度。4) 引入同步损失：通过加权的关节点对距离损失增强双人时序协调。
4. 主要实验结果：在MDD、InterHuman-AS和DD100三个数据集上进行了广泛评估。
   - 定量结果：在MDD数据集的交互任务中，DualFlow (Both) 在R-Precision@3（0.513）和Multi-Modal Distance（0.513）上取得最优；在反应任务中，DualFlow (Both) 在FID（0.686）和R-Precision@3（0.471）上领先。相比InterGen等基线，在FID上平均提升2.5%，在R-Precision上平均提升76%，在Multi-Modal Distance上提升3倍（交互任务），推理速度提升2.5倍（20步 vs 50步）。
   - 消融实验：验证了RAG模块、对比损失（L_triplet）、同步损失（L_sync）、因果注意力前瞻（CLA）等组件的有效性。移除任一模块均导致性能下降。
   - 定性结果：用户研究表明DualFlow生成的动作在文本对齐、音乐同步和整体质量上优于基线（见图3）。图5展示了DualFlow生成的动作比基线更自然、无畸变。
5. 实际意义：该框架为生成协调、表达丰富、节奏同步的双人动作提供了新方案，有望推动沉浸式虚拟角色交互、智能编舞和响应式数字人等领域的发展。
6. 主要局限性：a) RAG的效能依赖于检索样本的质量，对于模糊或抽象的文本描述，可能检索到不匹配的示例，导致风格漂移。b) 在反应任务中，模型偶尔难以保持精确的身体协调，可能出现手部或躯干穿透。c) 由于基于局部片段检索，生成长序列时可能出现时间漂移，影响节奏一致性。

#

---

