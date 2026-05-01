---
title: "ICASSP 2026 - 音频大模型 论文列表"
date: 2026-04-29
draft: false
tags: ["音频大模型"]
categories: [icassp-2026]
description: "共 1 篇 ICASSP 2026 音频大模型 方向论文"
hiddenInHomeList: true
---

# ICASSP 2026 - 音频大模型

共 **1** 篇论文

[← 返回 ICASSP 2026 总览](/audio-paper-digest-blog/posts/icassp2026-summary/)

---

| 排名 | 论文 | 评分 | 分档 |
|------|------|------|------|
| 🥇 | [AR&D: A Framework for Retrieving and Describing Concepts for](/audio-paper-digest-blog/posts/2026-04-29-ard-a-framework-for-retrieving-and-describing) | 6.5分 | 前50% |

---

## 📋 论文详情

### 🥇 [AR&D: A Framework for Retrieving and Describing Concepts for Interpreting AudioLLMs](/audio-paper-digest-blog/posts/2026-04-29-ard-a-framework-for-retrieving-and-describing)

✅ **6.5/10** | 前50% | #音频大模型 | #自监督学习 | #模型评估

👥 **作者与机构**

- 第一作者：Townim Faisal（澳大利亚机器学习研究所，阿德莱德大学；杜比实验室）
- 通讯作者：未说明（论文中未明确标注通讯作者）
- 作者列表：
    - Townim Faisal（澳大利亚机器学习研究所，阿德莱德大学；杜比实验室）
    - Ta Duc Huy（澳大利亚机器学习研究所，阿德莱德大学；杜比实验室）
    - Siqi Pan（杜比实验室）
    - Jeremy Stoddard（杜比实验室）
    - Zhibin Liao（澳大利亚机器学习研究所，阿德莱德大学；计算机与数学科学学院）

#

💡 **毒舌点评**

亮点：这篇论文首次为音频大模型（AudioLLM）的“黑箱”问题提供了系统性的机械化解释工具链，将稀疏自编码器与音频时序特性巧妙结合，方法设计完整且逻辑自洽。短板：实验验证仅在单一模型（Qwen2-Audio-7B）和有限数据集上进行，其结论的普适性和在更大规模模型上的效果存疑，且缺乏对实际应用场景的深入探索，更像一个“方法论展示”而非“问题解决”。

#

🔗 **开源详情**

- 代码：论文提供了一个代码仓库链接：`https://bit.ly/autointerpret-audiollm`。
- 模型权重：未提及是否开源训练好的SAE模型或中间表示。
- 数据集：所使用的WavCaps， IEMOCAP， FSD50k， VoxCeleb1等均为公开数据集，论文未提供其修改版本或私有数据。
- Demo：未提及。
- 复现材料：论文提供了一些关键超参数（如K=250， e=8， lr=1e-5）和训练步数，但缺少详细的训练硬件、完整的配置文件、评估脚本和附录说明。复现细节不充分。
- 论文中引用的开源项目：TopK-SAE [17]， CLAP [19]， SeaLLM-Audio-7B [20]， Qwen2-Audio-7B-Instruct [1]， Llama-3-70B-Instruct。

---

[← 返回 ICASSP 2026 论文分析](/audio-paper-digest-blog/posts/icassp2026-summary/)

📌 **核心摘要**

1. 问题：音频大模型（AudioLLM）性能强大但内部决策机制不透明，神经元呈现多义性，限制了其在高风险领域的可信部署。
2. 方法核心：提出首个针对AudioLLM的机械可解释性框架AR&D。该框架包含三个阶段：1）使用TopK稀疏自编码器（SAE）将模型中间层激活解耦为稀疏、单义的特征；2）提出结合平均激活强度和覆盖率的“代表性评分”，自动检索最能代表每个特征的音频片段；3）利用单义性得分筛选最可靠的特征，并通过另一个AudioLLM生成描述，最后用大语言模型为这些特征自动命名，形成可解释的“概念”。
3. 创新点：1）首次将SAE方法系统应用于AudioLLM；2）针对音频时序性，设计了新的代表性评分机制（优于仅用平均激活）；3）构建了从特征检索、评估到自动命名的完整流水线；4）通过人工评估和特征引导（Steering）验证了概念的有效性。
4. 主要实验结果：在FSD50k数据集的可解释性评估中，AR&D（第26层）相比最强基线（Coverage），F1提升33%，mAP提升49%；在IEMOCAP和VoxCeleb1的情绪/性别引导任务中，AR&D的敏感度（如中性→快乐：0.75）远高于直接使用原始多义特征的方法（0.13）。消融实验证明深层（层26）和适中扩展因子（e=8）效果最佳。
5. 实际意义：为理解和控制AudioLLM的行为提供了基础工具，有望提升模型在医疗、辅助技术等敏感领域的透明度和可信度。
6. 主要局限性：框架仅在Qwen2-Audio-7B-Instruct上验证，普适性未证明；探针数据集规模中等；自动命名的质量仍依赖生成模型；未展示在具体下游任务（如音频分类）中提升性能的案例。

#

---

