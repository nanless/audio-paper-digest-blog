---
title: "ICASSP 2026 - 情感识别 论文列表"
date: 2026-04-29
draft: false
tags: ["情感识别"]
categories: [icassp-2026]
description: "共 2 篇 ICASSP 2026 情感识别 方向论文"
hiddenInHomeList: true
---

# ICASSP 2026 - 情感识别

共 **2** 篇论文

[← 返回 ICASSP 2026 总览](/audio-paper-digest-blog/posts/icassp2026-summary/)

---

| 排名 | 论文 | 评分 | 分档 |
|------|------|------|------|
| 🥇 | [APKD: Aligned And Paced Knowledge Distillation Towards Light](/audio-paper-digest-blog/posts/2026-04-29-apkd-aligned-and-paced-knowledge-distillation) | 7.5分 | 前25% |
| 🥈 | [DSSR: Decoupling Salient and Subtle Representations Under Mi](/audio-paper-digest-blog/posts/2026-04-29-dssr-decoupling-salient-and-subtle) | 7.5分 | 前25% |

---

## 📋 论文详情

### 🥇 [APKD: Aligned And Paced Knowledge Distillation Towards Lightweight Heterogeneous Multimodal Emotion Recognition](/audio-paper-digest-blog/posts/2026-04-29-apkd-aligned-and-paced-knowledge-distillation)

✅ **7.5/10** | 前25% | #情感识别 | #知识蒸馏 | #多模态模型 #语音情感识别

👥 **作者与机构**

- 第一作者：Yujian Sun（山东理工大学计算机科学学院）
- 通讯作者：Shanliang Yang（山东理工大学计算机科学学院，yangshanliang@sdut.edu.cn）
- 作者列表：Yujian Sun（山东理工大学计算机科学学院），Bingtian Qiao（福州大学莫纳什大学联合国际学院），Yiwen Wang（福州大学莫纳什大学联合国际学院），Shanliang Yang（山东理工大学计算机科学学院）

#

💡 **毒舌点评**

APKD框架的亮点在于其问题洞察力——指出异构蒸馏中“特征对齐”与“知识粒度调整”是深度耦合的，并用协同模块优雅地解决了这一矛盾。但短板也很明显：实验仅验证了预设的“大Transformer教师-CNN/MobileViT学生”这一种异构模式，对于其他类型的异构架构（如不同规模的Transformer）是否同样有效缺乏探索，结论的普适性有待加强。

#

🔗 **开源详情**

- 代码：提供了GitHub代码仓库链接：https://github.com/ItsDia/AP-KD。
- 模型权重：论文中未提及公开预训练学生模型权重。
- 数据集：使用了CMU-MOSEI和IEMOCAP两个公开数据集，论文中说明了数据集来源，获取方式未详细说明，通常需要按原数据集要求申请。
- Demo：论文中未提及在线演示。
- 复现材料：提供了详细的训练超参数（学习率、优化器、batch size、epoch数、损失权重等）、硬件配置、网络架构细节以及损失函数公式，复现材料较为充分。
- 引用的开源项目：明确引用了作为教师和学生模型的开源预训练模型，包括SSAST、ViT-B/16、RoBERTa、LightSERNet、MobileViT v3和TextCNN。也引用了GRL等基础模块的来源。

📌 **核心摘要**

1.  问题：在基于知识蒸馏的轻量级多模态情感识别中，教师与学生模型在架构和规模上的异质性导致两大耦合挑战：特征空间不匹配、不同模态教师的知识粒度差异大。
2.  方法核心：提出APKD框架，包含两个协同工作的模块：结构特征对齐（SFA）模块和自适应知识节奏（AKP）模块。SFA通过标准化将异构特征映射到共享空间；AKP为每个模态引入可学习的节奏系数，动态调整教师知识分布的软硬程度。
3.  创新点：首次明确将异构MER中的特征对齐与知识粒度调整作为耦合问题进行联合优化。AKP模块利用梯度反转层自适应学习每个模态的节奏系数，实现了“按需分配”知识。
4.  主要实验结果：在CMU-MOSEI和IEMOCAP数据集上取得SOTA。一个仅2.73M参数的超轻量学生模型，准确率分别达到49.51%和73.96%，超越或持平于参数量大得多的现有方法。消融实验证实SFA和AKP模块均不可或缺。
5.  实际意义：为将高性能的多模态情感识别模型部署到计算资源有限的边缘设备提供了有效的解决方案，推动了该技术在实际人机交互场景中的应用。
6.  局限性：异质性定义主要基于“大模型教师与小CNN/MobileViT学生”这一范式。对其他异质性组合的普适性未验证。节奏系数τₘ的调整范围（1.0-20.0）是经验值，其理论选择依据未深入探讨。

#

---

### 🥈 [DSSR: Decoupling Salient and Subtle Representations Under Missing Modalities for Multimodal Emotion Recognition](/audio-paper-digest-blog/posts/2026-04-29-dssr-decoupling-salient-and-subtle)

✅ **7.5/10** | 前25% | #情感识别 | #对比学习 | #多模态模型 #鲁棒性

👥 **作者与机构**

- 第一作者：Huan Zhao（湖南大学计算机科学与电子工程学院）
- 通讯作者：Yingxue Gao*（湖南大学计算机科学与电子工程学院）
- 作者列表：Huan Zhao（湖南大学计算机科学与电子工程学院）、Zhijie Yu（未说明）、Yong Wei（未说明）、Bo Li（未说明）、Yingxue Gao（湖南大学计算机科学与电子工程学院）

💡 **毒舌点评**

这篇论文最大的亮点在于其问题洞察和框架设计——将模糊的“模态缺失鲁棒性”问题，转化为对“显著”与“细微”情感表征的显式解耦与利用，MHDW机制对此提供了巧妙的工程实现。短板在于，其生成模块（GM）采用简单的1D卷积聚合可用模态信息来“补全”缺失模态，这一假设（缺失模态信息可由其他模态线性合成）可能过于理想，在更极端或语义不一致的缺失场景下其有效性值得怀疑，论文对此缺乏深入分析。

🔗 **开源详情**

- 代码：论文中提供了代码仓库链接：https://github.com/YYYYuZJ/DSSR.git。
- 模型权重：论文中未提及是否公开预训练模型权重。
- 数据集：使用的是公开的标准基准数据集（CMU-MOSI, CMU-MOSEI, IEMOCAP），如何获取未在论文中说明，通常需遵循各数据集官方协议。
- Demo：论文中未提及提供在线演示。
- 复现材料：论文中提供了一些实现细节（优化器、学习率、批大小、Dropout率），但缺乏训练轮数、具体硬件、关键超参数（如MHDW的头数h）的详细说明，也未提及是否提供训练好的检查点、详细配置文件或附录说明。
- 论文中引用的开源项目：论文未明确列出其代码依赖的具体开源工具或模型。根据架构图推测，可能使用了预训练的wav2vec、DeBERTa、MA-Net作为各模态的特征提取器，但未在文中引用。

📌 **核心摘要**

1. 问题：多模态情感识别（MER）在实际部署中常面临模态缺失问题（如传感器故障），导致关键情感信号（尤其是微妙线索）丢失或模糊。现有注意力方法易受主导但无关信号干扰，难以捕获细微但有辨别力的线索。
2. 方法核心：提出DSSR（解耦显著与细微表征）两阶段框架。第一阶段，通过动态对比学习在完整模态数据上训练通用编码器，提取跨模态不变的“显著”情感表征。第二阶段，针对缺失模态场景，先利用轻量生成模块补全缺失模态特征；然后，将显著表征作为自适应提示，通过多头动态加权（MHDW）机制，在多个子空间中评估并选择性地增强各模态的“细微”情感表征。
3. 创新点：相较于现有直接融合或恢复缺失模态的方法，DSSR首次将情感表征显式分解为“显著”和“细微”两部分，并设计了针对性的学习机制（动态对比学习提取显著表征，MHDW增强细微表征）来分别处理，框架设计新颖。
4. 主要实验结果：在CMU-MOSI、CMU-MOSEI和IEMOCAP三个基准数据集的多种模态缺失场景（如仅声学、仅文本、缺两模态等）下，DSSR整体性能达到了SOTA。例如，在CMU-MOSI上，平均准确率/F1为75.86%/75.05%，优于次优方法P-RMF（76.71%/未提供）。消融实验证实，去除MHDW模块导致性能下降最大（如CMU-MOSI平均准确率下降2.82%）。
5. 实际意义：该方法提高了MER系统在传感器故障、数据传输不完整等现实挑战下的可靠性，增强了其在人机交互、情感计算等应用中的实用性。
6. 主要局限性：生成模块（GM）的补全能力依赖于其他模态的“线性聚合”假设，其对于复杂或语义冲突的缺失情况可能效果有限，论文未对此进行深入探讨和验证。

---

