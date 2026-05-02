---
title: "ICLR 2026 - 多模态推理 论文列表"
date: 2026-05-03
draft: false
tags: ["多模态推理"]
categories: [iclr-2026]
description: "共 2 篇 ICLR 2026 多模态推理 方向论文"
hiddenInHomeList: true
---

# ICLR 2026 - 多模态推理

共 **2** 篇论文

[← 返回 ICLR 2026 总览](/audio-paper-digest-blog/posts/iclr2026-summary/)

---

| 排名 | 论文 | 评分 | 分档 |
|------|------|------|------|
| 🥇 | [Compose and Fuse: Revisiting the Foundational Bottlenecks in](/audio-paper-digest-blog/posts/2026-05-03-compose-and-fuse-revisiting-the-foundational) | 8.0分 | 前25% |
| 🥈 | [TINY BUT MIGHTY: A SOFTWARE-HARDWARE CO- DESIGN APPROACH FOR](/audio-paper-digest-blog/posts/2026-05-03-tiny-but-mighty-a-software-hardware-co-design) | 8.0分 | 前25% |

---

## 📋 论文详情

### 🥇 [Compose and Fuse: Revisiting the Foundational Bottlenecks in Multimodal Reasoning](/audio-paper-digest-blog/posts/2026-05-03-compose-and-fuse-revisiting-the-foundational)

🔥 **8.0/10** | 前25% | #多模态推理 | #基准测试 | #多模态模型 #逻辑推理

👥 **作者与机构**

- 第一作者：Yucheng Wang（苏黎世联邦理工学院， ETH Zurich）
- 通讯作者：未明确说明（作者列表后为邮箱，但未标注通讯作者）
- 作者列表：Yucheng Wang（苏黎世联邦理工学院）、Yifan Hou（苏黎世联邦理工学院）、Aydin Javadov（苏黎世联邦理工学院 MTEC 研究所）、Mubashara Akhtar（苏黎世联邦理工学院）、Mrinmaya Sachan（苏黎世联邦理工学院）

💡 **毒舌点评**

亮点在于，它用一套极其清晰的逻辑组合设计（六类交互模式），像手术刀一样精准剖开了多模态推理“有时有益有时有害”这团乱麻，把模糊的直觉变成了可量化的“任务组合”与“融合偏差”两个具体瓶颈。短板则是，它更像一份详尽的“病理诊断报告”而非“治疗方案”——虽然发现了问题，也提出了两步提示和注意力温度调整等权宜之计，但并未给出能从根本上解决这些瓶颈的全新模型架构或训练范式。

🔗 **开源详情**

- 代码：论文中明确提到“Our code and data are publicly available”并将在发表后公开，但当前提供的文本中未直接给出代码仓库链接。
- 模型权重：论文评估了四个开源的第三方多模态模型（Baichuan-Omni, Qwen2.5-Omni, MiniCPM-o, Phi-4 Multimodal），这些模型的权重应由各自团队开源，但论文本身未提供或声称开源其分析的模型权重。
- 数据集：论文构建了合成数据集用于实验，并说明会公开。此外，验证使用了公开的IsoBench数据集。
- Demo：未提及。
- 复现材料：论文在附录中提供了极其详细的复现信息，包括：数据构建细节（事实/规则生成）、模型推理设置（精度、解码参数）、线性探针的具体实现（特征提取、分类器设置）、以及所有六种交互模式、识别任务和两步推理的完整提示模板（见图4-图11）。
- 论文中引用的开源项目：CosyVoice 2（用于TTS）、Graphviz（用于生成视觉图表）。

📌 **核心摘要**

1. 问题：现有研究表明，向多模态大语言模型添加额外模态（如视觉、音频）对推理能力的影响不一致，有时有益，有时有害，缺乏系统的理论框架来解释其原因。
2. 方法核心：提出了一个基于命题逻辑的六类模态交互评估框架（等价、替代、蕴含、独立、矛盾、互补），通过合成可控的数据实例，系统性地控制事实信息在不同模态间的分布和组合逻辑，以隔离和量化多模态对推理的影响。
3. 创新点：与以往黑箱性能评测不同，该框架首次从逻辑交互模式的角度系统性地诊断多模态推理的瓶颈。它揭示了感知能力并非主要障碍，而“任务组合”（识别与推理的联合执行）和“多源融合”（早期融合引入偏差）是核心失败点。
4. 主要实验结果：
    - 表1显示，只有当额外模态提供独立、充分的推理路径（替代模式）时，性能略有提升（平均+12.7%视觉，+14.8%音频），而冗余信息（等价模式）或跨模态链式推理（蕴含模式）常导致性能下降。
    - 表2显示，当关键事实仅存在于单一模态（独立模式），而其他模态为干扰项时，多模态平均准确率（70.3%）显著低于文本单模态（94.5%），揭示了“性能偏差”。
    - 表3显示，在信息矛盾时，模型对不同模态存在不一致的“偏好偏差”。
    - 表4显示，当需要集成所有模态互补信息时（互补模式），多模态准确率（52.0%）甚至低于任何单模态设置，揭示了“融合偏差”。
    - 内部机制探查发现，注意力模式无法有效编码信息有用性，而早期层融合会导致模态身份信号被保留但引入偏差。通过简单两步提示或调整早期层注意力温度可缓解问题。
5. 实际意义：为多模态大模型的评估和改进提供了重要的诊断工具和理论依据，指出未来应着重于设计“组合感知”的训练目标和控制早期融合的架构机制，使多模态成为推理资产而非干扰源。
6. 主要局限性：研究主要基于简化的单步逻辑推理任务，可能不适用于更复杂、连续的多模态推理场景（如视频理解）。提出的缓解方法（提示工程、温度调整）是临时方案，根本性的架构或训练创新尚未提出。

---

### 🥈 [TINY BUT MIGHTY: A SOFTWARE-HARDWARE CO- DESIGN APPROACH FOR EFFICIENT MULTIMODAL IN- FERENCE ON BATTERY-POWERED SMALL DEVICES](/audio-paper-digest-blog/posts/2026-05-03-tiny-but-mighty-a-software-hardware-co-design)

🔥 **8.0/10** | 前25% | #多模态推理 | #软硬件协同设计 | #边缘计算 #模型优化

👥 **作者与机构**

- 第一作者：Yilong Li (University of Wisconsin – Madison)
- 通讯作者：未说明
- 作者列表：Yilong Li (University of Wisconsin – Madison), Shuai Zhang (Amazon Web Services AI), Yijing Zeng (University of Wisconsin – Madison), Chengpo Yan (University of Wisconsin – Madison), Hao Zhang (University of Wisconsin – Madison), Xinmiao Xiong (University of Wisconsin – Madison), Jingyu Liu (University of Wisconsin – Madison), Pan Hu (Uber), Suman Banerjee (University of Wisconsin – Madison)

💡 **毒舌点评**

这篇论文最大的亮点是它并非纸上谈兵，而是提供了一个从硬件PCB设计到软件调度框架的“全家桶”式解决方案，并在一个真实的低成本电池设备上完成了验证，实现了在边缘设备上长时间运行多模态模型。然而，其主要短板在于对特定硬件（RK3566 SoC）及其私有驱动/SDK的高度依赖，这虽然保证了在该平台上的最优性能，但也使得框架的可移植性和通用性存疑，更像一个针对特定硬件的深度定制项目，而非一个广泛适用的开源生态。

🔗 **开源详情**

- 代码：论文中未提及代码链接。
- 模型权重：未提及是否公开。
- 数据集：实验使用了公开数据集（InfoVQA, DocVQA, MMBench, MME），但论文未提及是否提供或制作了新数据集。
- Demo：论文描述了构建的电池供电原型设备（如图11、12所示），但未提供在线演示链接。
- 复现材料：论文提供了部分硬件设计框图、软件架构描述和算法细节（如TABM、融合内核），但缺乏完整的训练/推理脚本、超参数配置、检查点等可直接复现的材料。
- 论文中引用的开源项目：论文大量引用和依赖以下开源项目：llama.cpp (推理框架), Whisper.cpp (语音识别), Piper (语音合成), Rockchip RKNN Toolkit2 (NPU开发), 以及多个预训练模型（LLaVA-OneVision, Qwen2-VL, SigLIP, SmolVLM等）。
- 开源计划：论文中未提及开源计划。

📌 **核心摘要**

这篇论文旨在解决在电池供电的小型边缘设备上高效运行大型多模态模型（LMM）的挑战，核心问题是现有方案通常将模型作为单一整体执行，未能充分利用现代片上系统（SoC）中的异构计算单元（如NPU、GPU），导致资源浪费和延迟过高。论文提出的核心方法是NANOMIND，一个软硬件协同设计的推理框架，其创新点在于将LMM分解为模块化的“砖块”（如视觉编码器、语言解码器），并基于统一内存架构（UMA）动态地将每个模块卸载到最合适的加速器上执行。与已有方法相比，其新意在于实现了跨加速器的模块级动态调度、定制的硬件设计（专用PMU、并行内存）、以及为移动端优化的计算内核和零拷贝数据传输机制。实验结果表明，NANOMIND相比现有实现，在能耗上降低了42.3%，GPU内存使用减少了11.2%，使得一个搭载标准2000mAh电池的设备能够以低功耗模式连续运行LlaVA-OneVision-qwen2-05B模型长达20.8小时。其实际意义在于为在隐私敏感、离线或低连接场景下部署响应式多模态AI提供了可行路径。主要局限性是框架深度绑定了特定的Rockchip SoC及其驱动，跨平台的普适性和开源生态的缺乏可能限制其更广泛的应用。

---

