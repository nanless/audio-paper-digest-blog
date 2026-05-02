---
title: "ICLR 2026 - 情感识别 论文列表"
date: 2026-05-03
draft: false
tags: ["情感识别"]
categories: [iclr-2026]
description: "共 1 篇 ICLR 2026 情感识别 方向论文"
hiddenInHomeList: true
---

# ICLR 2026 - 情感识别

共 **1** 篇论文

[← 返回 ICLR 2026 总览](/audio-paper-digest-blog/posts/iclr2026-summary/)

---

| 排名 | 论文 | 评分 | 分档 |
|------|------|------|------|
| 🥇 | [Human Behavior Atlas: Benchmarking Unified Psychological And](/audio-paper-digest-blog/posts/2026-05-03-human-behavior-atlas-benchmarking-unified) | 7.0分 | 前25% |

---

## 📋 论文详情

### 🥇 [Human Behavior Atlas: Benchmarking Unified Psychological And Social Behavior Understanding](/audio-paper-digest-blog/posts/2026-05-03-human-behavior-atlas-benchmarking-unified)

✅ **7.0/10** | 前25% | #情感识别 | #多任务学习 | #多模态模型 #基准测试

👥 **作者与机构**

- 第一作者：Keane Ong (MIT, National University of Singapore)，Wei Dai (MIT) - 论文标注为共同第一作者（*Equal contribution）
- 通讯作者：未明确标注
- 作者列表：Keane Ong (MIT, NUS), Wei Dai (MIT), Carol Li (MIT), Dewei Feng (MIT), Hengzhi Li (MIT, Imperial College London), Jingyao Wu (MIT), Jiaee Cheong (Harvard), Rui Mao (NTU), Gianmarco Mengaldo (NUS), Erik Cambria (NTU), Paul Pu Liang (MIT)

#

💡 **毒舌点评**

这篇论文做了一件非常“工程化”但又极具价值的事情：它没有提出一个全新的复杂模型架构，而是致力于为“理解人类心理与社会行为”这个混乱的领域“立法”——建立了一个规模空前（10万+样本）、任务全面（10类行为任务）、格式统一的基准测试库，并在此基础上训练了三个强基线模型。亮点在于其系统性的构建工作和扎实的实验证明了统一训练带来的跨任务收益与迁移能力。短板则在于，其核心模型（OMNISAPIENS-7B）本质上是现有强大基座模型（Qwen2.5-Omni）在特定数据上的适配，在架构创新层面略显不足，更像是一个优秀的“领域适配+评测”工作。

#

🔗 **开源详情**

- 代码：论文提供GitHub仓库链接：`https://github.com/MIT-MI/human_behavior_atlas`，承诺将发布代码。
- 模型权重：承诺发布训练好的OMNISAPIENS-7B SFT, BAM, RL模型权重。
- 数据集：HUMAN BEHAVIOR ATLAS基准测试将发布，包含统一格式的样本。数据来源于多个公开数据集（已在文中列出）。
- Demo：论文中未提及在线演示。
- 复现材料：附录B和C提供了极其详细的模型架构、训练目标、超参数设置（如LoRA配置、GRPO参数、学习率、批大小等）和实验步骤。
- 引用的开源项目：依赖的开源工具/模型包括Qwen2.5-Omni-7B（骨干）、MediaPipe（视觉描述符提取）、OpenSMILE（音频描述符提取）、Whisper v3（转录）、GPT-5-nano（LLM评判）。

📌 **核心摘要**

1.  问题：现有对人类心理和社会行为（如情感、认知、病理、社交）的理解多依赖专用数据集和单任务系统，缺乏可扩展、可迁移、能形成通用理解的基础模型。
2.  方法核心：构建了 Human Behavior Atlas，一个包含超过10万多样本、涵盖文本/音频/视觉模态的统一基准测试。所有数据被标准化为提示-目标格式，评估指标也统一。在此基础上，训练了三个7B参数的多模态模型变体：OMNISAPIENS-7B SFT（监督微调）、OMNISAPIENS-7B BAM（集成残差式行为适配器模块，融入行为描述符）、OMNISAPIENS-7B RL（基于GRPO的强化学习）。
3.  创新点：
    *   统一基准测试：首次大规模（10万+样本）地将分散的情感、认知、病理、社交行为任务标准化到一个框架下。
    *   标准化格式与评估：设计了通用的提示-目标格式，并为不同任务类型定义了统一的评估指标（如二分类加权F1、LLM评判准确率）。
    *   行为适配器模块（BAM）：提出了一种轻量级的残差适配器，可将提取的面部/身体关键点、韵律等行为描述符非侵入式地整合到冻结的LLM骨干中，为目标任务提供可选增强。
    *   系统性实验：通过多任务训练、迁移学习（至未见过的数据集和新任务）以及行为描述符消融实验，全面验证了统一训练的优势和BAM的有效性。
4.  主要结果：
    *   多任务表现：在10类行为任务中的8类上，训练后的OMNISAPIENS-7B变体（SFT/BAM）优于现有通用多模态大模型（如Qwen2.5-Omni）。具体见下表。

    | 模型 | EMO (均值) | HUM | INT | PTSD | ANX | DEP | SEN | SAR | SOC | NVC |
    | :--- | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
    | Qwen 2.5-Omni-7B | .580 | .543 | .254 | .760 | .793 | .791 | .636 | .700 | .714 | .602 |
    | OMNISAPIENS-7B SFT | .614 | .532 | .256 | 1.00 | .909 | .839 | .626 | .746 | .813 | .744 |
    | OMNISAPIENS-7B BAM | .607 | .644 | .177 | 1.00 | .909 | .839 | .738 | .744 | .837 | .775 |
    *   迁移学习：在留出数据集（MOSEI, MELD, DAIC-WOZ, MUStARD）上微调1个epoch后，OMNISAPIENS-7B SFT显著优于未在HBA上预训练的Qwen2.5-Omni SFT。例如，在MUStARD（讽刺检测，训练时未见任务）上，得分从0.473提升至0.658（+39.1%）。
    *   BAM效果：集成BAM后，在NVC（+33%）、SAR（+29%）、HUM（+21%）等任务上带来显著提升，证明其可针对性地利用行为描述符增强特定任务性能。
5.  实际意义：为构建通用的“人类行为理解”基础模型提供了首个大规模、标准化的公共基准和强基线，推动该领域从零散研究走向系统化、可比较的发展阶段。
6.  主要局限性：(1) 模型本身（OMNISAPIENS-7B）的架构创新有限，主要贡献在于数据集构建和训练方法。(2) 基准测试所用数据集主要来自特定文化背景（英语为主），可能影响其普适性。(3) 部分自由文本生成任务（SOC, INT, NVC）的整体得分仍然较低，表明该领域仍有很大挑战。

#

---

