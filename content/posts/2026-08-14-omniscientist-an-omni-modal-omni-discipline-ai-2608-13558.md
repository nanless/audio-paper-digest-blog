---
title: "OmniScientist: An Omni-Modal Omni-Discipline AI Scientist"
date: 2026-08-14
draft: false
tags: [多模态模型, 大语言模型, 开源工具]
categories: [论文速递]
description: "多模态模型 | 7.6/10"
hiddenInHomeList: true
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_arxiv_id: "2608.13558"
---

# 📄 OmniScientist: An Omni-Modal Omni-Discipline AI Scientist

标签：#多模态模型 #大语言模型 #开源工具

**7.6/10** | 创新 1.2/2 | 严谨 1.2/1.5 | 实验 1.2/1.5 | 清晰 0.8/1 | 影响 0.5/1.5 | 开源 1.2/1.5 | 复现 0.3/0.5 | 工程 1.2/1.5

✅ **7.6/10** | 前25% | 文档类型：系统技术报告 | 评分置信度：高 | #多模态模型 | #大语言模型 | #开源工具 | [arxiv](https://arxiv.org/abs/2608.13558)


### 👥 作者与机构

- 第一作者：Bobo Li（National University of Singapore）
- 通讯作者：Hao Fei（University of Oxford）
- 作者列表：Bobo Li（National University of Singapore）、Hao Fei（University of Oxford）、Tianjie Ju（National University of Singapore）、Mong-Li Lee（National University of Singapore）、Wynne Hsu（National University of Singapore）

### 💡 毒舌点评

这是一套完成度较高、由代码强制审计的工程系统，但“感知具有决定性作用”的主张只建立在 5 组 blind 配对和 1 组 vision-off 配对上，个别单元甚至出现负增益（如 Cardiology 的多模态 grounding 为 -1.7）。摘要所谓“七个评估维度均提升”指宏平均，而非每个案例都改善；同时，LLM 生成的论文仍由 LLM 裁判评分，缺少人类领域专家验证。它更像可扩展的系统演示，而非已经充分验证的科学结论。

### 📌 核心摘要

现有 AI scientist 系统大多只接收文本、代码、标签或预计算特征，原始证据中的空间、时间、跨通道与过程信息被丢失。OmniScientist 提出感知优先、多智能体流水线，包含感知层与 ideation/experiment/writeup 三个 ReAct 智能体，并用代码强制 idea/rigour/claim 检查。其主要特点在于原始多模态证据（图像、信号、频谱、音频、视频、3D 结构、轨迹、表格、公式、序列、场、图）在选题、实验设计与论文声明中持续参与。系统在 36 个真实数据案例、5 个学科家族上端到端生成论文，9 个 backbone 中 Sonnet 5 覆盖率最高，总体均分 6.3。与仅接收标量特征的 blind 变体配对比较，感知版在 85% 头对头判断中获胜；同一 judge 评分显示多模态 grounding 提升 2.8、显著性提升 1.8。盲消融样本为 5 个 blind 配对加 1 个 vision-off 配对，且个别维度出现负增益。其实际价值在于提供领域无关的自动化科研引擎和可审计流程。主要局限是评估依赖 LLM 自动裁判、盲消融样本量小且有个别维度负增益，且系统并非以语音/音频/音乐为核心应用对象。

### 🔗 开源详情

- 项目主页：https://omni-scientist.github.io
- 代码与技能仓库：https://github.com/Omni-Scientist/OmniScientist
- 代码：已开源（has_code=是）
- 模型发布：论文未披露模型权重或独立模型产物（has_model=未说明）
- 数据集：未披露自有数据集发布；评估使用公开可下载数据集（has_dataset=否）

### 🏗️ 方法概述和架构

OmniScientist 的输入是一个任务规范文件（discipline specification）和该领域对应的原始数据集；任务规范文件声明了角色（role）、研究对象（subject）、属性（property）、研究请求（request）以及参与者/样本成员（members）等字段，系统据此自动解锁相关感知工具并组织下游流程。完整输出包括可编译的 PDF 论文、Markdown 摘要、结构化 JSON 记录以及可回放的 execution trace，其中 execution trace 记录了每一步工具调用、代码执行输出和最终结果溯源，是后续审计与验证的事实基础。

下图以三个案例为例，说明了从原始证据到经验证发现的完整工作路径。

![Figure 2: Progression from raw evidence to verified findings across three demonstration cases. The top three rows track workflows in seismology, pathology,](https://arxiv.org/html/2608.13558v1/fig_interface.png)

与底部所示的预计算特征接口相比，该图直观地表明，持续参与原始证据（如地震波形、病理图像、3D模型）使系统能够发现更具体的研究问题和结构线索，从而驱动后续的假设与行动。


整体流程采用“感知层 + 三个顺序阶段”的架构，顶部为统一感知层，中间依次为 ideation（选题与提案）、experiment（实验执行与验证）、writeup（论文撰写与声明审计）三个 ReAct 智能体阶段。每个阶段内部使用观察—推理—行动（observe-reason-act）的循环模式，允许模型自由调用工具、生成中间思考并迭代修正；但阶段之间的转换不由模型自评决定，而由一个位于代码层的退出谓词 `g` 控制。当模型调用 `finalize` 提交阶段成果时，谓词 `g` 会检查该成果与累计状态 σ（包括 good_runs、searched、img_used、stdout 等计数和记录）是否满足硬性条件；若检查失败，系统将失败原因 `why` 写回对话历史，模型继续在同一阶段内补全或修正。experiment 阶段若多次失败，系统允许回退到 ideation 阶段重新生成提案，最多回退 2 次，以防无限循环。该设计的核心动机是：阶段内保持开放推理的灵活性，阶段间保持确定、可审计的状态转换，避免将重要的转换决策交给模型自评或模糊的文本判断。

下图展示了OmniScientist的整体流程架构。

![Figure 3: Architecture of the OmniScientist framework. At the top, raw evidence from multiple disciplines enters the system,](https://arxiv.org/html/2608.13558v1/fig_pipeline.png)

图中清晰呈现了从顶部多学科原始证据输入，经过感知层与 Ideation、Experiment、Writeup 三个顺序阶段的处理，最终产出可编译 PDF 论文及审计记录的完整管线。


**感知层**首先将输入证据抽象为四类科学证据家族：感知类（perceptual，如图像、显微图、光谱、波形、3D 结构等）、符号类（symbolic，如文档、公式、序列、知识图谱等）、定量统计类（quantitative-statistical，如表格、测量结果、分布等）和过程类（procedural，如轨迹、模拟轨迹、agent trace 等）。这四类证据覆盖了多种模态，包括图像、信号、频谱、音频、视频、3D 结构、轨迹、表格、公式、序列、场和图等。每个模态在感知层解锁两类配套工具：一类是 `look_at_*` 工具，将原始数据或分析产物渲染为图像后交给视觉语言模型阅读，用于提取空间结构、形态模式或视觉关系；另一类是 `analyze_*` 或 `read_trace` 工具，直接返回原生数值特征，用于精确量化。例如，针对信号模态，`analyze_signal` 返回趋势、主导 FFT 频率、峰值和统计量，而 `look_at_signal` 则将多通道信号渲染为按通道排列的时间面板图像供 VLM 读取；针对 3D 模态，`analyze_3d` 返回点数、包围盒、质心和 PCA 主轴，`look_at_3d` 则渲染 XY/XZ/YZ 三个正交投影图。感知预算由数据中的标签组数 g 决定，公式为 `min(24, max(8, 2g))`，即至少 8 次、至多 24 次视觉检视机会。系统在感知策略上优先执行原生数值分析，只有在需要判断空间/结构模式时才调用视觉检视工具，以此在信息充分性和计算成本之间取得平衡。

下图展示了感知层在不同学科和模态下的实际工作案例。

![Figure 4: Raw observations and derived discoveries processed by the perception layer across 16 cases, 11 modalities, and all 4 evidence families.](https://arxiv.org/html/2608.13558v1/fig_perception_gallery.png)

图中展示了16个真实案例，覆盖11种模态和4个证据家族；每个案例均用红框标注了智能体从原始记录中读取的结构线索，并列出了由此引导的已验证发现。


**Ideation 阶段**首先由智能体进行材料清单整理，并可选择性地调用感知层工具对原始数据进行初步观察。随后通过 OpenAlex 进行文献检索（OpenAlex 不可用时回退到 Crossref），获取已有工作信息。该阶段要求生成至少 5 个候选研究项目，并对每个候选评估其 `novelty_risk`（新颖性风险）和 `fully_computational`（是否完全可计算）。之后从候选中选出主提案，形成结构化 proposal，内容必须包含研究问题、假设、实验协议、可证伪判据、最小可发表声明、新颖性证据、声明范围、有效样本量估计、数据泄漏检查和视觉审计计划。`idea check` 在代码层验证该 proposal 是否满足以下条件：schema 完整、至少包含 5 个候选、完全可计算、新颖性表述不使用绝对化语言（如“首次”“完全解决”等）等。若验证失败，系统将失败原因写回对话，智能体继续补充修改，直至通过检查或达到预算上限。

**Experiment 阶段**接收通过 idea check 的 proposal，将其转化为可执行代码，并在受控的 `run_python` 子进程中运行。每次运行严格执行 150 秒超时，阶段总步数上限为 50 步，视觉检视预算为 8 次。智能体需要完成一个完整的测试电池，包括：primary hypothesis（主假设）、baseline（基线）、ablation（消融）、mechanism（机制分析）、breakdown（分组分解）、sensitivity（敏感性分析）以及 grouping/leakage（分组/泄漏检查），并保存所有分析图。`rigour check`（对应伪代码 Algorithm 1）在代码层验证以下硬性条件：至少有一次真实成功的代码执行；数据集从磁盘实际读取（而非在代码中硬编码生成）；所有报告数字都能在 stdout 输出中找到可溯源记录；所有已执行的统计测试（包括被降级的分析）均纳入多重比较校正；论文 headline 必须来自 supported 分析集合，而不是事后从多个噪声结果中挑出最好结果；不符合显著性要求的分析必须被降级到 trace 中，不得进入论文正文。Algorithm 2 描述了带门控的阶段循环：模型产生 action（可能包含多个工具调用），系统执行工具并更新状态 σ；当模型调用 finalize 时，谓词 `g` 检查 payload 和状态 σ，若谓词不通过则将 `why` 写回对话，继续循环。

**Writeup 阶段**使用 5 种学科写作模板（分别对应不同学科家族）控制论文的 skeleton。`thesis planner` 首先从 verified result 的 supported 分析集合中选择 headline，并把其他结果归类为 supporting evidence、controls 或 robustness；被 demoted 的分析不得进入论文。每节只使用对应实验记录的分片展开，避免串用不同来源的数字。摘要（abstract）在正文各节完成后最后撰写，参考文献则通过 OpenAlex 检索生成。`claim check` 在论文编译为 PDF 之前对成稿进行验证，要求每个数字必须与 grounded set 中的溯源记录精确匹配；任何修订都不得改变数字、引用或声明强度；禁止过度声称（over-reaching）。如果编译失败，系统按优先级回退到修复版本、pre-polish 草稿、无引用 build 或基础模板，确保最终能产出可编译文档。

**数据流与组件交互**上，任务规范文件决定 role、subject、property、request 及 members，进而自动解锁对应模态的感知工具。感知层的输出（数值特征或视觉描述）作为证据输入 ideation 阶段，驱动候选项目的生成和选题。ideation 阶段通过 `finalize` 提交的 proposal 成为 experiment 阶段的输入。experiment 阶段产生的 verified result（带有 provenance 的可执行记录）是 writeup 阶段的唯一事实来源；writeup 阶段基于这些记录和 thesis planner 的分片选择撰写论文。成稿经 claim check 审计后进入 LaTeX 编译，最终输出 PDF、Markdown、JSON 和 trace。整个流程以 execution record 而非模型叙述作为信任源，所有声明和数字都必须能追溯到具体代码输出或感知记录，从而在系统层面抑制幻觉、事后挑选结果（HARKing）和声明过强等问题。

### 💡 核心创新点

- 提出感知层 + ideation/experiment/writeup 三智能体的统一科研流水线，从原始多模态证据直接工作，而非仅依赖文本、代码、标签或预计算特征。
- 阶段间转换由代码层退出谓词 `g` 控制，阶段内保持 ReAct 自由推理；ideation/experiment/writeup 分别对应 idea、rigour、claim 三道可审计代码检查，而非模型自评。
- 感知层采用“原生数值读取 + 视觉渲染”双通道工具，兼顾精确定量与空间/结构判断；感知预算按标签组数自适应。
- 通过 execution record 与 provenance 机制抑制幻觉、HARKing 和过度声称；非显著分析被降级至 trace，论文 headline 必须来自 supported 分析集合。
- 领域无关设计：新增学科只需写一个 specification 文件（role, subject, property, request, members），不改引擎。

### 📊 实验结果

OmniScientist 在 36 个真实数据案例、5 个学科家族、4 类科学证据上端到端生成论文；9 个 reasoning backbone 中 Sonnet 5 覆盖率最高，总体均分 6.3。下表给出骨干评分，随后给出感知消融的维度增益。

| Backbone | 新颖性 | 可靠性 | 清晰度 | 显著性 | 可复现性 | 多模态依据 | 事实准确性 | 总体 |
|---|---:|---:|---:|---:|---:|---:|---:|---:|
| Sonnet 5 | 6.3 | 7.0 | 7.0 | 6.3 | 6.1 | 5.1 | 7.7 | 6.3 |
| GPT-5.6 | 5.2 | 6.3 | 6.3 | 5.0 | 5.2 | 4.2 | 7.7 | 5.6 |
| GLM-5.2 | 6.2 | 7.1 | 6.8 | 6.4 | 5.9 | 6.6 | 7.5 | 6.5 |
| Kimi K2.7 | 6.2 | 7.2 | 6.7 | 6.2 | 5.5 | 5.8 | 8.0 | 6.2 |
| Qwen3.5-122B | 4.7 | 5.5 | 6.2 | 4.8 | 4.8 | 4.8 | 6.5 | 5.1 |
| Qwen3.5-27B | 5.0 | 5.6 | 5.9 | 4.9 | 4.6 | 4.9 | 6.4 | 5.1 |
| Qwen3.5-9B | 4.0 | 4.1 | 4.8 | 3.7 | 3.7 | 3.9 | 4.8 | 4.0 |
| Gemma-4-31B | 4.7 | 5.0 | 5.6 | 4.5 | 4.4 | 4.6 | 6.5 | 4.8 |
| Gemma-4-26B | 4.4 | 4.4 | 5.0 | 4.0 | 3.7 | 3.8 | 5.1 | 4.2 |

| Case (Δ = on - baseline) | 新颖性 | 可靠性 | 清晰度 | 显著性 | 可复现性 | 多模态依据 | 事实准确性 | 总体 |
|---|---:|---:|---:|---:|---:|---:|---:|---:|
| Galaxy cross-survey | +2.5 | +1.2 | +1.0 | +2.3 | +0.7 | +1.3 | +2.0 | +1.7 |
| Seismology | +1.0 | +1.5 | -1.0 | +1.5 | +0.5 | +1.5 | +0.5 | +1.5 |
| Pathology | +1.5 | +1.0 | +0.5 | +1.0 | +0.5 | +3.0 | -0.5 | +1.5 |
| Mechanical CAD | +0.5 | +0.5 | +3.5 | +2.5 | +2.5 | +1.0 | +2.0 | +3.0 |
| Plant phenotyping | +1.0 | +0.0 | +0.0 | +0.5 | +0.7 | +4.0 | +0.3 | +0.3 |
| Cardiology† | +0.3 | +0.3 | +0.3 | +0.0 | +1.3 | -1.7 | +0.0 | +0.3 |
| Macro-average Δ | +1.14 | +0.75 | +0.72 | +1.31 | +1.03 | +1.53 | +0.72 | +1.39 |

† Cardiology 使用较弱的 vision-off run。

盲消融与 vision-off 对比中，感知版在 85% 头对头判断中平均获胜；同一 judge 评分显示多模态 grounding 提升 2.8、显著性提升 1.8，但宏观平均表和 Cardiology 案例的负增益表明感知优势并非每案均成立。

### 🔬 细节详述

实现与评估的关键细节如下：

- 任务规范文件：新增学科只需提供 role、subject、property、request 和 members；引擎不感知领域特例，modality 字段自动解锁对应工具。
- 阶段预算与感知预算：ideation 步数上限 24，experiment 步数上限 50；experiment 视觉检视预算 8；每次 `run_python` 严格 150 秒超时；感知总预算按 `min(24, max(8, 2g))` 计算。
- 运行统计：36 个主运行中，ideation 平均 8.8 步、最多 19 步；experiment 平均 36.0 步、最多 49 步；experiment 平均执行代码 31.8 次。ideation 平均感知调用 8.4 次（其中视觉 `look_at_*` 4.5），experiment 平均感知调用 1.0 次（视觉 0.9）。
- 代码检查拒绝：idea check 在 36 次运行中触发 28 次拒绝（涉及 23 次运行）；rigour check 触发 87 次拒绝（涉及 32 次运行）；合计 115 次。最常见 rigour 拒绝原因是“非显著分析仍在论文中”（51 次），其次是 verdict 字段缺失（21 次）和 lead selection 问题（9 次）。
- 输出产物：36/36 运行产出完整草稿与图；35/36 实验阶段通过 rigour check 退出；自报结论中 16 个 supported、17 个 mixed、2 个 refuted、1 个无 verdict。平均每 run 有 7.4 项分析进入论文，1.9 项被降级到 trace。
- 成本：Sonnet 5 约 \(2.63/篇、29 分钟；GPT-5.6 约 \)4.34/篇、12 分钟；Qwen3.5-27B（本地）约 \(0.06/篇、30 分钟；Gemma-4-31B（本地）约 \)0.03/篇、14 分钟。
- 模板与检索：writeup 使用 5 种学科写作模板；参考文献通过 OpenAlex 检索，OpenAlex 不可用时回退 Crossref。

### ⚖️ 评分理由

*   创新性 (1.2/2)：提出感知层与 ideation/experiment/writeup 三智能体流水线，并通过代码层 idea/rigour/claim 检查约束阶段转换，属于有证据支持的系统级新能力，而非纯产品宣传。

*   技术严谨性 (1.2/1.5)：阶段转换由退出谓词 g 控制，rigour check 强制多重比较校正、防止 HARKing，并要求 headline 来自 supported 分析集合，公开方法中未见明显逻辑漏洞。

*   实验充分性 (1.2/1.5)：在36个真实案例、5个学科家族和多骨干上完成端到端评测，并给出感知消融维度增益；但显示消融样本仅6配对且出现负增益，评测依赖LLM裁判而缺少人类专家验证，证据强度受一定限制。

*   清晰度 (0.8/1)：摘要中“在所有7个评价维度上提升”的表述实为宏观平均，容易被误解为逐案例证明，存在措辞过于绝对的问题；其余部分有结构化模板和 execution trace 支撑，整体表达仍较清楚。

*   影响力 (0.5/1.5)：本速递面向语音/音乐/音频读者，但该系统中的音频/语音仅作为多模态证据之一，并非核心应用对象，按领域相关性约束影响力不超过0.5。

*   开源 (1.2/1.5)：代码与技能仓库已开源，has_code=是；但模型权重与自有数据集未发布，作为系统技术报告核心代码已开放但配套资产和文档完整性有限，按固定锚点给1.2。

*   可复现性 (0.3/0.5)：论文披露了架构、阶段预算和 execution trace，但服务部署与完整可复现协议仍未完整披露，关键复现配置存在缺口，按固定锚点给0.3。

*   工程/实践价值 (1.2/1.5)：新增学科只需编写一个 specification 文件而无需修改引擎；显示36/36案例端到端生成论文，且 execution trace 有利于审计，工程实践价值明确。

### 🚨 局限与问题

- 评估主要依赖 LLM 裁判（如 deepseek-v4-flash 与 gemini-2.5-flash-lite 面板）评分 LLM 生成的论文，缺少人类专家验证；裁判一致性 alpha=0.66 仅刚过预设阈值 0.6。
- 感知消融样本很小：5 个 blind 配对 + 1 个 vision-off 配对；85% 头对头获胜是平均结论，且表 12 显示 Cardiology 多模态依据 -1.7、Seismology 清晰度 -1.0、Pathology 事实准确性 -0.5 等负增益，不能支持“所有维度均改善”的强声明。
- 摘要中“在所有 7 个评价维度上提升”的说法是宏观平均，而非每案例证据；个别 backbone 在部分模态/学科覆盖失败。
- 系统以多学科自动科研验证为主，并非以语音/音频/音乐为核心应用对象；代码与 trace 有利于审计，但模型权重、服务部署和可复现协议未有完整披露。
- 没有人类专家对新颖性和科学价值做独立复核，存在 LLM 评判偏差和数据集偏置风险。

---

[← 返回 2026-08-14 语音/音乐/音频论文速递](/audio-paper-digest-blog/posts/2026-08-14/)
