---
title: "ICLR 2026 - 动作生成 论文列表"
date: 2026-05-03
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
| 🥇 | [Unified Multi-Modal Interactive and Reactive 3D Motion Gener](/audio-paper-digest-blog/posts/2026-05-03-unified-multi-modal-interactive-and-reactive-3d) | 7.5分 | 前25% |

---

## 📋 论文详情

### 🥇 [Unified Multi-Modal Interactive and Reactive 3D Motion Generation via Rectified Flow](/audio-paper-digest-blog/posts/2026-05-03-unified-multi-modal-interactive-and-reactive-3d)

✅ **7.5/10** | 前25% | #动作生成 | #流匹配 | #多模态模型

👥 **作者与机构**

- 第一作者：Prerit Gupta（Purdue University Department of Computer Science）
- 通讯作者：未说明
- 作者列表：Prerit Gupta（Purdue University Department of Computer Science）、Shourya Verma（Purdue University Department of Computer Science）、Ananth Grama（Purdue University Department of Computer Science）、Aniket Bera（Purdue University Department of Computer Science）

💡 **毒舌点评**

亮点在于用一个统一的架构巧妙解决了交互和反应两种双人动作生成任务，并引入RAG模块利用LLM分解的文本和音乐特征来增强语义对齐，这在同类工作中确实少见。短板则是实验部分对比的最新SOTA基线稍显陈旧，且“代码将在接受后开源”的承诺在当前提交中无法验证，对于急于复现的研究者来说是个障碍。

🔗 **开源详情**

- 代码：论文承诺在论文接受后开源完整代码，但当前未提供具体链接（“Full code for this project along with the trained checkpoints for all tasks will be made open source and publicly available upon paper acceptance”）。
- 模型权重：同上，承诺提供训练检查点，但未提供下载地址。
- 数据集：论文使用InterHuman-AS， DD100， MDD三个公开数据集，未提及创建新数据集。
- Demo：论文中未提及在线演示链接。
- 复现材料：提供了详尽的训练细节、超参数、损失权重、模型参数量比较（456M vs InterGen的224M），以及多轮消融实验的结果，复现信息非常充分。
- 论文中引用的开源项目/模型：CLIP (Radford et al., 2021)， Jukebox (Dhariwal et al., 2020)， SMPL (Loper et al., 2015)， InterGen (Liang et al., 2024)， MDM (Tevet et al., 2022)等。
- 开源计划：论文明确提到将开源代码和模型，但属于未来计划，而非当前已实现。

📌 **核心摘要**

1. 该论文旨在解决生成协调、上下文感知的双人3D动作的核心挑战，特别是支持在交互（双方同步）和反应（一方响应另一方）两种模式之间灵活切换，并能处理文本、音乐等多模态条件。
2. 方法核心是提出名为DualFlow的统一框架，基于修正流（Rectified Flow）模型，采用级联的DualFlow块架构。关键创新包括：(1) 一个用于双人动作的新颖检索增强生成（RAG）模块，通过LLM分解文本和音乐特征检索相关动作范例；(2) 一个对比修正流目标函数，以提升运动质量及与条件信号的对齐；(3) 一个用于增强双人时间同步性的同步损失。
3. 与已有方法相比，该框架的创新性体现在：首次将交互和反应任务统一在同一架构中，无需重新训练即可切换；首次为双人动作生成引入基于多模态分解的RAG框架；将修正流的确定性直线采样与对比学习结合，以提升效率和语义保真度。
4. 主要实验在MDD、InterHuman-AS和DD100数据集上进行。关键结果表明，DualFlow在MDD数据集的交互任务中，R-Precision@3达到0.513，FID为0.415；在反应任务中，R-Precision@3达到0.471，FID为0.686。论文声称其方法在多项指标上超越了基线模型，并且仅需20个推理步骤，速度比基于DDIM的基线快2.5倍。下表总结了在MDD数据集上的部分关键定量结果：

| 方法 | 任务 | R-Precision@3↑ | FID↓ | MMDist↓ | BED↑ | BAS↑ |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| Ground Truth | - | 0.522 | 0.065 | 0.077 | 0.327 | 0.170 |
| InterGen(Both) | 交互 | 0.302 | 0.426 | 1.532 | 0.385 | 0.185 |
| DualFlow(Both) | 交互 | 0.513 | 0.415 | 0.513 | 0.286 | 0.179 |
| DuoLando(Both) | 反应 | 0.219 | 0.698 | 2.113 | 0.395 | 0.224 |
| DualFlow(Both) | 反应 | 0.471 | 0.686 | 1.056 | 0.215 | 0.226 |

![图5: 定性对比](icassp-img://QaAgHKbJop/4.png)
图5展示了DualFlow与基线模型在MDD数据集上的定性对比。论文指出，InterGen生成的交互动作在圈出区域存在手部翻转、距离过远等问题，而DualFlow生成的动作更流畅，与文本对齐更好。

5. 实际意义在于为VR/AR化身交互、智能编舞和响应式数字人等应用提供了一个更通用、高效的双人动作生成引擎。
6. 主要局限性包括：RAG模块的效果依赖于检索样本的质量和相关性；在反应设置中，模型有时难以保持精确的物理接触协调；生成长序列时可能出现时间漂移。

---

