---
title: "Multimodal Fact-Level Attribution for Verifiable Reasoning"
date: 2026-07-04
draft: false
tags: [音频理解, 可解释性]
categories: [icml-2026]
description: "音频理解 | 6.4/10"
hiddenInHomeList: true
---

# 📄 Multimodal Fact-Level Attribution for Verifiable Reasoning

#音频理解 #可解释性

**6.4/10** | 创新 1.2/2 | 严谨 1/1.5 | 实验 1/1.5 | 清晰 0.8/1 | 影响 0.6/1.5 | 开源 0.5/1.5 | 复现 0.3/0.5 | 工程 1/1.5

✅ **6.4/10** | 前50% | #音频理解 | #多模态模型 | #可解释性 | [arxiv](https://openreview.net/forum?id=IEDC7yFpLe)


### 👥 作者与机构

- 第一作者：David Wan（UNC Chapel Hill）
- 通讯作者：David Wan（UNC Chapel Hill）
- 作者列表：David Wan（UNC Chapel Hill）、Han Wang（UNC Chapel Hill）、Ziyang Wang（UNC Chapel Hill）、Elias Stengel-Eskin（The University of Texas at Austin）、Hyunji Lee（UNC Chapel Hill）、Mohit Bansal（UNC Chapel Hill）

### 💡 毒舌点评

这篇论文在"可验证推理"的命题下，构建了一个精细的多模态事实级归因评估框架，将文本域的原子事实分解和Precision/Recall引用评估范式迁移到了视频+音频场景，实验覆盖了Gemini和Qwen等主流MLLM，揭示了"推理强不代表能正确举证"的核心洞察。然而，MURGAT-SCORE本质上是一个由多个LLM组件级联而成的评估pipeline，各子任务虽非单一模型，但最优模块几乎都来自Gemini家族，尽管论文进行了跨模型评估器对比以佐证其无显著偏差，但评估框架对顶级商用闭源模型的依赖，依然限制了其在开源社区的应用与复现深度。此外，人类评估样本仅20个视频/80条回答，虽在统计相关性上勉强站得住，但用于宣称构建"基准"，其ground truth的规模和多样性都显得单薄，这使得其"基准"定位的稳固性存疑。

### 📌 核心摘要

1.  问题：现有多模态大语言模型在多步推理和长文本生成中存在幻觉问题，但现有的多模态归因评估方法局限于简化场景（如直接观察）、单一模态（主要为视觉），无法评估复杂推理中跨模态（视频+音频+图表）的事实级归因质量。
2.  方法核心：提出MURGAT基准和MURGAT-SCORE自动化评估框架。评估分三步：（1）可验证声明识别——过滤掉推理性句子，只保留需要证据支撑的可验证句子；（2）原子事实分解——将句子拆分为最小可验证的原子事实并传播引用；（3）归因质量评估——评判每个原子事实是否被引用的多模态片段所蕴含（Recall）且每个引用片段是否必要（Precision）。



3.  创新点：首次在多模态复杂推理场景下引入"事实级"归因评估，显式区分可验证声明与推理步骤，并将时间戳+模态的双重引用要求纳入评估指标。这是将文本域FActScore/Gao et al.的引用评估体系系统性地迁移到多模态视频理解的早期工作之一。
4.  主要实验结果：
    *   人类评估（Table 1）：Gemini-2.5-Flash在WorldSense上MURGAT-S为59.9，但在Video-MMMU上仅21.8；所有模型的归因质量均远低于问答准确率。



    *   自动化评估（Table 5）：最强的Gemini-3-Flash在WorldSense上MURGAT-S为69.2，Video-MMMU为56.9。Post-hoc归因方法在WorldSense上能提升归因质量，但在Video-MMMU上则显著损害精确度（Gemini-3-Flash的归因F1从64.5降至47.2）。



    *   [图像补充] 图2清晰展示了推理投入缩放效应：Gemini-3-Flash的MURGAT-S随推理级别增加（Minimal→Low→High）而单调下降，而Gemini-3-Pro则上升。
5.  实际意义：为多模态模型的可信度评估提供了可自动化的框架，揭示了当前强模型"说得对但证不对"的系统性缺陷，对多模态RAG、视频QA等下游应用有直接参考价值。
6.  主要局限性：人类标注规模极小（20视频/80回答），自动评估器存在潜在的模型偏差，缺乏对开源MLLM的深度测试，未提供训练改进方案而仅限于评估。

### 🔗 开源详情

*   代码：https://github.com/meetdavidwan/murgat
*   模型权重：论文中未提供自研模型权重；实验使用的预训练模型包括 Gemini-2.5-Flash、Gemini-3-Flash、Gemini-3-Pro、Qwen3-Omni-Instruct、Qwen3-Omni-Thinking、Qwen3-VL-Instruct、Qwen3-VL-Thinking、Molmo2-8B，这些模型的权重获取方式请参见对应官方仓库（闭源模型除外）
*   数据集：MURGAT 基准构建在已有数据集 WorldSense 和 Video-MMMU 之上，论文中未发布新的独立数据集下载链接，但代码仓库中包含了采样与处理脚本（详见仓库 README），部分原始数据集需按原数据集许可获取
*   Demo：论文中未提及
*   复现材料：代码仓库提供了完整的评估流水线（MURGAT-SCORE）以及生成与评估所需的全部提示词（附录E中有详细提示模板）；训练配置、检查点等未提及
*   论文中引用的开源项目：
    *   Qwen3-Omni: https://github.com/QwenLM/Qwen3-Omni
    *   Qwen3-VL: https://github.com/QwenLM/Qwen3-VL
    *   Molmo2: https://huggingface.co/allenai/Molmo-8B-0924
    （其余文中使用的闭源模型如 Gemini 未列入开源项目）

### 🏗️ 方法概述和架构

MURGAT是一个评估框架和基准，而非一个训练好的模型，其核心贡献在于定义了一套多模态事实级归因的评估协议和相应的自动化实现（MURGAT-SCORE）。整体架构可以被理解为一个三阶段级联评估pipeline：[图1]

输入：多模态输入源I（视频流、音频流、图表等多模态数据）+ 自然语言问题Q → MLLM生成包含引用标注的回答R（每个句子附带 `(modality, timestamp_start-timestamp_end)` 格式的引用集）

阶段1：可验证声明识别（Verifiable Claim Identification）
*   功能：从MLLM生成的回答中筛选出需要证据支撑的句子，排除纯推理、常识陈述或主观表达。比如，结论性的"因此，选项A是正确的"会被过滤掉。
*   实现：使用LLM（最终选择Gemini-3-Pro + JSON Structured Prompt）对每个句子做二分类——"该声明是否可以直接从输入源I中观察到？" [图14]。这种句子级别的过滤被证明与事实级别有相似的性能，但成本更低。
*   关键设计：这是与传统归因评估最关键的差异点。传统方法将所有句子都视为需要归因，而MURGAT明确区分"推理步骤"和"可验证声明"，避免因推理步骤无法归因而无谓扣分。
*   输出：过滤后并带有非空引用集的可验证句子集 \(R_{vc}\)

阶段2：原子事实分解（Atomic Fact Decomposition）
*   功能：将每个可验证句子拆分为最小独立声明的集合，同时保持引用传播，以实现更细粒度的评估。
*   实现：采用两阶段设计——先做Decontextualization（代词消解、上下文补全，使每个句子独立可读），再做Atomic Fact Decomposition（使用Gemini-3-Flash + 句子级生成 + 显式消解上下文）。



*   引用传播规则：若原句子有引用集 \(C_i\)，则所有从该句拆分出的原子事实自动继承 \(C_i\)；若为内联引用（如"A (visual,1:00) hits B (visual,2:00)"），则分别分配给对应事实。
*   关键设计决策：采用句子级而非全文级分解，因为全文级容易导致模型丢失上下文，句子级F1（81.8）优于全文级（80.1）。消解上下文作为独立的预处理步骤，比让模型内部隐式处理效果好（F1提升约2点）。[图12]
*   输出：原子事实-引用集对集合 \(\{(a_i^j, C_i)\}\)

阶段3：归因质量评估（Attribution Quality）
*   功能：评判每个原子事实是否被其引用的多模态片段所蕴含。这是一个两维评估:[图15]
    *   Recall（充分性）：将所有引用片段的内容合并后，是否充分蕴含该原子事实？——评估"证据是否足够"
    *   Precision（必要性）：逐个检查每个引用片段，判断该片段是否对蕴含该事实是严格必需的——剔除"引用堆砌"中无关的片段。Precision的计算是在Recall被满足的事实基础上进行的，即只对已被充分支持的事实检查其引用的必要性。
*   实现：使用Gemini-2.5-Flash（Simple Prompt）作为蕴含判定器，输入为原子事实文本+对应的时间戳/模态下的音视频内容。
*   指标聚合：
    *   Coverage = \(|R_{vc}|/|R_v|\)（有引用的可验证句子比例）
    *   Attribution F1 = \(2 \times \text{Precision} \times \text{Recall}/(\text{Precision} + \text{Recall})\)
    *   MURGAT-SCORE = \(\text{Coverage} \times \text{Attribution F1}\)

自动化评估器选择：论文对多个LLM（Gemini-2.5-Flash、Gemini-3-Flash、Gemini-3-Pro、Gemma-3-27b、GPT-5.2）在不同提示策略（Simple/CoT/JSON）下做了系统对比，各子任务选用与人类标注相关最高的配置，最终构成评估器组合。这保证了自动化评估与人类判断的高相关性（Pearson r=0.84）。[图3, 图4, 图5, 图10]

与自动化评估并行的程序化归因方法（Section 5.4）：论文进一步探索了通过结构化生成程序来改进归因质量的方法。设计空间包括：[图8, 图20]
*   推理范式轴：Logic-Centric（命令式Python代码，使用条件/循环等控制流）vs Narrative-Centric（声明式自然语言函数调用，如describe/synthesize）
*   归因机制轴：Planner-Defined（Declarative，模型直接预测时间戳）vs Executor-Discovered（Imperative，模型生成检索query，由检索工具返回时间戳）
*   运行时优化：执行循环中加入归因检查步骤，验证每个函数输出是否严格被输入证据蕴含，以保证高归因保真度。

该框架本质上是将"生成-验证"解耦为"规划-执行-验证"的三元结构，试图通过结构化的中间人（程序代码）来约束模型的归因行为，并自动生成可验证的引用。

### 💡 核心创新点

1.  首次多模态事实级归因基准：此前多模态归因工作（MCiteBench、MAVIS、MIRAGE）要么局限于图像/文档视觉QA，要么只在整段视频/文档级别做源级归因而不管时间戳和模态粒度。MURGAT是第一个要求模型在复杂推理场景下提供"精准到秒级时间戳+模态区分"的引用，并将评估拆分为可验证声明→原子事实→蕴含判定的完整链路。[图18, 图19]
2.  可验证声明与推理步骤的显式分离：现有归因评估方法将生成文本中的所有声明同等对待，导致推理性句子或过渡语被错误地计入归因评分。MURGAT在评估的第一步就过滤掉不可验证的推理步骤，使得归因质量的度量更纯粹——这是评估框架设计上的重要洞察。[图14]
3.  归因质量的两维精细化（Recall+Precision）：借鉴文本引用评估工作（Liu et al., 2023a; Gao et al., 2023b）并迁移到多模态场景，既检查"给的证据够不够"，也检查"有没有多余引用"。这种对待"引用堆砌"行为的惩罚机制使得MURGAT-SCORE比简单的"引用覆盖率"更有区分度。[图15]
4.  揭示推理-归因能力解耦现象：通过大规模的MLLM实验，论文系统性地展示了多个反直觉发现：（a）强推理能力不意味着强归因能力（Gemini-3-Pro问答准但归因差）；（b）引用生成对简单识别任务是"推理税"，但可能为复杂推理任务提供脚手架（Qwen3-VL-Thinking加入引用后准确率从51%升至60%）；（c）增加推理投入对归因的影响在强弱模型间呈相反趋势。这些发现为后续研究提供了明确的方向。


5.  评估框架的自动化验证：通过20视频/80回答的人类标注数据，论文系统验证了级联LLM评估器与人类判断的高相关性（Pearson r=0.84），并对比了Disentangled (sent-level) 等方法 (r=0.58)，为多模态归因评估提供了一套可扩展的自动化方案——这比手工评审方式有实质进步。[图6, 图11]

### 📊 实验结果

基于20个视频、80条模型回答、580条句子级标注、635个原子事实的人评结果：


| 模型 | WorldSense MURGAT-S | WorldSense Acc(%) | Video-MMMU MURGAT-S | Video-MMMU Acc(%) |
|------|---------------------|-------------------|----------------------|-------------------|
| Qwen3-Omni-Instruct | 27.3 | 56.0 | 5.6 | 67.4 |
| Qwen3-Omni-Thinking | 23.1 | 56.0 | 21.8 | 76.0 |
| Gemini-2.5-Flash | 59.9 | 58.0 | 21.8 | 72.0 |
| Gemini-3-Pro | 49.7 | 60.0 | 16.3 | 86.0 |

关键发现：最高MURGAT-S仅59.9（满分100），所有模型归因质量远低于问答准确率。Gemini-3-Pro在Video-MMMU上准确率最高（86.0）但MURGAT-S仅16.3，说明其"答对但证不对"的问题最严重。

### 自动化大规模评估（Table 5, 每数据集100样本）
[图像补充] 图10以热图形式直观展示了不同LLM评估器在不同提示策略（Simple, CoT, JSON）下，对Verifiability（左图）和Entailment（右图）任务的性能（准确率/F1），为评估器选择提供了清晰依据。

| 模型 | 方法 | WorldSense Cov. | WorldSense Attr. F1 | WorldSense MURGAT-S | WorldSense Acc | Video-MMMU Cov. | Video-MMMU Attr. F1 | Video-MMMU MURGAT-S | Video-MMMU Acc |
|------|------|-----------------|----------------------|---------------------|----------------|------------------|-----------------------|----------------------|----------------|
| Gemini-3-Flash | BASE | - | - | - | 67.0 | - | - | - | 86.8 |
| | +CITATION | 95.9 | 66.5 | 64.4 | 66.2 | 88.2 | 64.5 | 56.9 | 86.0 |
| | +POST-HOC | 95.1 | 71.4 | 69.2 | 67.0 | 87.9 | 47.2 | 44.1 | 86.8 |
| Gemini-3-Pro | BASE | - | - | - | 71.4 | - | - | - | 85.3 |
| | +CITATION | 78.3 | 64.9 | 51.7 | 70.0 | 63.4 | 67.3 | 41.8 | 86.0 |
| | +POST-HOC | 97.0 | 67.1 | 65.2 | 71.4 | 68.0 | 43.7 | 36.9 | 85.3 |
| Qwen3-Omni-Thinking | BASE | - | - | - | 56.5 | - | - | - | 53.0 |
| | +CITATION | 52.7 | 56.3 | 31.3 | 61.0 | 36.3 | 7.6 | 4.8 | 51.0 |
| | +POST-HOC | 93.2 | 60.0 | 56.3 | 56.5 | 76.3 | 16.8 | 12.8 | 53.0 |

关键发现：Post-hoc归因在WorldSense（识别型）提升MURGAT-S，但在Video-MMMU（推理性）因"强行对齐推理步骤与随机视频片段"而显著损害归因精确度（Gemini-3-Flash归因F1从64.5降至47.2）。此外，纯视觉模型（Vision-Language Only）在缺失音频编码器的情况下，仍会生成大量音频引用（如Qwen3-VL-Instruct的31.6%引用为音频），表明其"归因"高度依赖视觉代理或幻觉。

### 推理投入缩放（Figure 2, Table 15）
[图2]

| 模型 | Reasoning Level | WorldSense MURGAT-S | WorldSense Acc |
|------|-----------------|---------------------|----------------|
| Gemini-3-Flash | Minimal | 69.7 | 70.0 |
| | Low | 65.2 | 71.0 |
| | High | 64.4 | 66.2 |
| Gemini-3-Pro | Low | 45.6 | 62.6 |
| | High | 51.7 | 70.0 |

关键发现：Flash模型推理投入越高归因越差（69.7→64.4），Pro模型相反（45.6→51.7），揭示强弱模型在"内部推理vs外部验证"对齐上的本质差异。

### 程序化归因（Section 5.4, Gemini-3-Flash, WorldSense）
[图像补充] 图8直观对比了程序化方法（Logic Imperative, Narrative Declarative）与基线（+CITATION）在WorldSense上的MURGAT-S和Accuracy，清晰展示了归因-准确率权衡。图9进一步显示了程序化方法在Video-MMMU上对MURGAT-S的提升有限（最高仅49.7），与WorldSense的显著提升（最高76.4）形成对比，表明该方法在更复杂的推理任务上效果减弱。

| 方法 | MURGAT-S | Acc |
|------|----------|-----|
| BASE + CITATION | 64.4 | 66.2 |
| Logic Imperative | 76.4 | 60.0 |
| Narrative Declarative | 70.9 | 55.7 |

关键发现：归因质量提升+9.6，但准确率下降7.4——呈现清晰的归因-准确率权衡。

### 🔬 细节详述

*   训练数据：不涉及训练，为纯评估工作
*   人类标注数据：从WorldSense和Video-MMMU各选10个视频，收集4个MLLM（Gemini-2.5-Flash、Gemini-3-Pro、Qwen3-Omni-Instruct、Qwen3-Omni-Thinking）的生成回答共80条，共标注580条句子级数据、635个原子事实、917个蕴含判定样本。标注由2名标注者完成，verifiability分类使用Union策略（OR-gate），attribution判定达86.1%一致率。


*   评估器配置：Verifiability用Gemini-3-Pro JSON模式（BAcc=84.2），Decomposition用Gemini-3-Flash（F1=81.4，Citation Accuracy=85.3%），Entailment用Gemini-2.5-Flash Simple模式（F1=72.9）。自动评估MURGAT-SCORE与人类标注分数的Pearson r=0.86，Spearman ρ=0.84。[图3, 图4, 图5, 图6, Table 4]
*   评估数据集：WorldSense和Video-MMMU各100样本用于大规模自动评估，与人类标注的10+10样本不重叠
*   提示策略：所有LLM评估器实验了3种提示风格——Simple（直接输出二元判断）、CoT（推理后输出）、JSON Structured（结构化推理+判断在JSON字段中）[图10]
*   被评估的MLLM：音频-视频双模（Gemini-2.5-Flash、Gemini-3-Flash、Gemini-3-Pro、Qwen3-Omni-Instruct、Qwen3-Omni-Thinking）和纯视觉（Qwen3-VL-Instruct、Qwen3-VL-Thinking、Molmo2-8B）
*   损失函数：未说明（评估工作）
*   训练策略：未说明（评估工作）
*   关键超参数：未说明（评估工作）
*   训练硬件：未说明（评估工作）
*   推理细节：MLLM生成时使用何种解码策略未明确说明
*   程序化归因实现：Python框架，三个原子操作——`find event(query)`→`List[Timestamp]`、`describe(timestamp, instruction)`→`str`、`synthesize(evidence_list, instruction)`→`str`
*   正则化或稳定训练技巧：未说明（评估工作）
*   核心指标定义：[图15]

### ⚖️ 评分理由

*   创新性 (1.2/2)：将文本域成熟的事实级归因评估（FActScore、Gao et al. 2023b的Precision/Recall框架）迁移到多模态推理场景，在问题定义和评估体系上有明确贡献——尤其是"可验证声明 vs 推理步骤"的分离和多模态时间+模态双维度引用。但方法层面的创新有限：三阶段评估pipeline的每个环节（verifiability过滤、原子事实分解、蕴含判定）都是已有技术的组合，程序化归因部分也是Generation Programs/Wan et al. 2025的延续。真正的洞察在于通过大量实验揭示了"推理-归因解耦"这一现象，这更多是实验发现而非方法论创新。整体属于"将一套好框架应用到新领域并得到有价值发现"的类型。[图18, 图19]

*   技术严谨性 (1.0/1.5)：三阶段评估协议的逻辑清晰，各阶段的评估指标定义明确，从Coverage→Atomic Fact→Precision/Recall的递进关系合理。[图15] 人类标注协议考虑了细节（Union策略处理verifiability分歧、引用传播处理句子-子事实关系、Per-fact验证避免多模态引用误判），且有86.1%的一致率支撑。[图11] 论文也对评估器偏差进行了讨论，如Table 10对比了不同模型作为评估器的相关性，并论证了其多模型pipeline减少了自评偏差。但存在几个问题：（1）尽管有跨模型对比，最优评估组件仍高度集中于Gemini家族，这依然令人对潜在的内部偏见有所保留；（2）人类标注数据仅20视频/80回答，虽然bootstrap检验声称稳定（Table 12），但对于宣称建立基准的工作，ground truth规模明显不足；（3）MURGAT-SCORE = Coverage × Attribution的乘法公式缺乏理论或实证依据，可能过度惩罚低覆盖率但高精度的模型。

*   实验充分性 (1.0/1.5)：正面评价：（1）被评估模型覆盖了多个主流MLLM家族（Gemini 2.5/3 + Qwen3-Omni + 纯视觉VL），数量充足；（2）消融实验丰富——包括三种引用生成方式（BASE/+CITATION/+POST-HOC）、推理投入缩放（Minimal/Low/Medium/High四档）、程序化归因的设计空间探索（Logic/Narrative × Declarative/Imperative的4种组合）；（3）发现了多个有价值的反直觉现象。[图2, 图8, 图9] 不足之处：（1）所有实验仅基于WorldSense和Video-MMMU两个数据集，且二者均偏向教育/科普类视频，缺乏新闻、体育、监控、生活Vlog等更广泛场景的覆盖；（2）人类标注样本量过小，虽用bootstrap支撑但难以完全说服；（3）缺少统计显著性检验（如不同模型的MURGAT-S差距是否显著）；（4）未分析不同错误类型的分布（如时间偏移错误、模态混淆错误、无关引用错误等），使得定量结果难以转化为可操作的改进方向。

*   清晰度 (0.8/1)：论文整体组织良好，图1对评估协议的三阶段可视化清晰易懂，图2对推理投入缩放的可视化直观。[图1, 图2] 但存在一些问题：（1）方法部分对三个子任务的描述不够独立——Section 3（任务定义）和Section 4（自动评估）之间存在概念重复，初次阅读时容易混淆"评估协议本身"和"自动化方案的实现"；（2）程序化归因（Section 5.4）部分的描述过于简略，两种推理范式和两种归因机制的实际运行机制、工具调用细节、Python代码示例都未在正文中充分展开（仅在Appendix中部分细节）；（3）某些表格的列名不统一（如有的用Attribution有的用Attr.），给跨表对比带来困扰。

*   影响力 (0.6/1.5)：对于多模态大模型的可信度评估和多模态RAG社区，MURGAT提供了一个有价值的新视角和实用工具，将文本归因评估的理念推广到视频+音频场景具有明确的后续工作潜力。但影响力受限于：（1）对音频/语音领域的直接贡献较弱：虽然评估涉及音频模态，但核心任务仍是"视频理解+引用"，音频在其中作为辅助证据源，并未对音频处理技术（如音频大模型、音频事件检测、语音识别等）产生直接推动。论文发表在ICML（通用ML顶会）而非音频/语音专门会议，也印证了其定位；（2）这是评估基准而非解决方案，对算法设计的指导意义有限——知道"哪里差"但没指出"如何改"；（3）鉴于20视频的人类标注规模，MURGAT本身作为基准的可信度还需更大规模验证。

*   开源 (0.5/1.5)：论文声称提供代码和数据（摘要和Impact Statement中都提到`https://github.com/meetdavidwan/murgat`），这是一个良好的开源信号。但从当前提供的信息来看：（1）该GitHub仓库在论文撰写时是否已真正开放、包含完整代码和标注数据不可知——顶会论文经常在accept后/开会前才开放仓库；（2）即使开放，论文未提及README文档质量、是否包含复现指南。根据评审规则，未经验证的"宣称开源"只能给中等分数。

*   可复现性 (0.3/0.5)：论文在标准化方面做得不错——所有提示模板在Appendix中完整给出，自动评估器的选型和对比过程清晰，数据来源（WorldSense和Video-MMMU）公开可获取。[图21, 图22, 图23] 但关键缺失包括：（1）MLLM生成回答时的具体推理参数（temperature、max_tokens、采样策略等）未明确说明，这直接影响回答质量和评估结果；（2）自动化评估阶段各LLM评估器被调用时的参数配置（如Gemini API的具体版本号、temperature设置）未提及；（3）若需完整复现实验，从视频下载→MLLM推理→自动评估的完整pipeline细节（如视频帧采样率、音频采样率、API调用并发控制等）未在论文中充分记录——这些信息通常在GitHub仓库里，但论文本身应该包含关键复现参数。

*   工程/实践价值 (1.0/1.5)：作为评估框架和基准建设的工作，MURGAT-SCORE有明确的工程参考价值——三阶段pipeline的模块化设计使得其他人可以替换各子任务的评估器，不同提示策略的对比（Simple/CoT/JSON）为如何构建可靠的多模态LLM评估器提供了实用指导。[图10] 程序化归因部分的结构化框架也可复用于多模态应用的可靠性改进。但当前版本更偏向学术验证而非工业部署——评估需要多次调用商用LLM API且涉及原始视频流处理，成本较高；Coverage×Attribution的单一分数掩盖了不同错误类型的分布，对工业场景的实际指导不够细粒度。

### 🚨 局限与问题

1.  自动评估器依赖模型（LLM-as-judge），可能携带固有偏见，不应在有严重偏见风险时作为唯一的正确性仲裁者（Impact Statement）
2.  人类标注仅基于两个数据集、四个模型，规模有限
3.  程序化归因方法在提升归因质量的同时损害任务准确率，存在归因-准确率权衡，找到最优平衡点仍是开放问题
4.  仅评估了英文视频内容，多语言扩展是未来工作

### 审稿人发现的潜在问题
1.  评估器偏差问题虽有讨论但未根治：论文在Table 10和Appendix B.3中通过更换Subtasks 1-2的模型（如全用Gemini-3-Pro或换用GPT-5.2）论证了无系统性家族偏差。然而，这些对比显示，全用或部分使用GPT-5.2时，与人类的相关性（r=0.757）明显低于全用Gemini模型的方案（最高r=0.879）。这依然暗示了评估框架的性能天花板可能与特定模型家族绑定，其在新一代模型或开源评估器上的适用性存疑。
2.  Precision/Recall在时域上的模糊性：判定一个引用片段是否"必要"、是否"充分"，在视频场景中远比文本场景复杂——一个5秒片段是否"严格必要"？如果3秒就够但模型引用了整段5秒，是否算Precision损失？论文未讨论这种时间粒度的主观性及其对评估一致性的影响。
3.  数据集选择的生态效度：WorldSense和Video-MMMU均为教育/科普风格视频，问题类型偏向知识推理。这种设置下，模型可能通过预训练知识而非视频内容来回答问题（尤其Gemini-3-Pro在Video-MMMU上准确率86但归因仅16.3，暗示大量参数知识参与），MURGAT-SCORE在这种"知识密集型"场景下的有效性可能被高估——如果换成监控视频的事件检测或体育视频的动作描述，结果是否会显著不同？
4.  MURGAT-SCORE的单一分数聚合公式的武断性：Coverage×Attribution的乘法组合在Coverage和Attribution差距较大时（如Qwen Thinking：Coverage 52.7，Attribution 56.3 → MURGAT-S 31.3）会过度惩罚低覆盖率模型。是否存在更合理的聚合方式（如加权平均），论文未做讨论或消融。[图15]
5.  未控制生成回答的风格对评估的影响：Gemini-2.5-Flash倾向于"逐帧描述"，而Gemini-3-Pro倾向于"综合推理"，这两种风格天然地适合Precision/Recall的不同维度——逐帧描述的句子更短、更易归因，不等于模型更可信。论文虽在Section D.2进行了定性分析，但未通过控制回答长度或风格来隔离这一混杂因素。
6.  程序化归因的实验仅限WorldSense：程序化方法在Video-MMMU上的完整MURGAT-S数据（如Logic Imperative: 49.7, Narrative Declarative: 46.0）出现在Appendix的Table 13中，但正文Section 5.4对此一笔带过，仅提及准确率下降，这种选择性报告削弱了程序化归因作为通用解决方案的说服力。
7.  人类评估规模削弱"基准"定位：20个视频、80条回答的标注量对于一个旨在成为社区基准的工作而言过于单薄。与更成熟的基准（如MMLU的数千题）相比，MURGAT当前版本的ground truth规模更像是一个概念验证（proof-of-concept），其评分排名的稳定性和泛化能力在法律、新闻等其他视频领域完全未知。

---

[← 返回 ICML 2026 论文速递](/audio-paper-digest-blog/posts/icml2026-summary/)
