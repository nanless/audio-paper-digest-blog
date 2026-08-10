---
title: "Shape Your Feed: An LLM-based Agentic System for Conversational Recommendation"
date: 2026-08-10
draft: false
tags:
  - 音视频交互
  - 大语言模型
  - 多模态模型
categories: [论文速递]
description: "音视频交互 | 5.7/10"
hiddenInHomeList: true
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_arxiv_id: "2608.06632"
---

# 📄 Shape Your Feed: An LLM-based Agentic System for Conversational Recommendation

标签：#音视频交互 #大语言模型 #多模态模型

**5.7/10** | 创新 1.2/2 | 严谨 1/1.5 | 实验 1.1/1.5 | 清晰 0.7/1 | 影响 0.3/1.5 | 开源 0/1.5 | 复现 0.1/0.5 | 工程 1.3/1.5

📝 **5.7/10** | 前50% | 文档类型：系统技术报告 | 评分置信度：中 | #音视频交互 | #大语言模型 | #多模态模型 | [arxiv](https://arxiv.org/abs/2608.06632)


### 👥 作者与机构

- 第一作者：Ziyun Xu（Meta Platforms, Menlo Park, California, USA）
- 通讯作者：未说明（论文未标注通讯作者）
- 作者列表：Ziyun Xu（Meta Platforms）、Bosen Ding（Meta Platforms）、Yue Zhang（Meta Platforms）、Ji Qi（Meta Platforms）、Qingyuan Song（Meta Platforms）、Jizhou Huang（Meta Platforms）、Liwei Wang（Meta Platforms）、Jeffrey Santelli（Meta Platforms）、Yue Weng（Meta Platforms）、Qichao Que（Meta Platforms）、Zhenheng Yang（Meta Platforms）、Junfeng Pan（Meta Platforms）、Linhong Zhu（Meta Platforms）

### 💡 毒舌点评

用真实生产流量完成了闭环验证，76.02%的上下文感知Pill使用率与“Pills Only vs Full System”的在线消融，把“界面收集信号”和“服务流执行信号”拆得足够干净。但整篇论文在可复现性上近乎封闭：α/τ取值缺失、Semantic Profile的schema缺失、prompt模板缺失；更关键的是，LLM-as-a-Judge不仅用于SFT标注，还参与了DPO偏好对构造和离线评估集的构建，独立人工集只有1029条，循环评估风险并未真正消除。真正值得行业关注的是“减少政治类短剧”这类实时负向约束能在工业线上生效，这本身就是对被动行为表征的一次清晰否定——可惜论文没有把负向约束如何编码进列表式打分和剪枝的细节讲透。

### 📌 核心摘要

本文提出Shape Your Feed（SYF），一个基于LLM的对话式推荐代理系统，旨在解决工业推荐系统被动依赖隐式行为信号、用户无法实时表达细粒度偏好的问题。方法核心是三流架构：Perception Flow将文本、语音、UI交互统一解析为可编辑的Semantic Profile；Serving Flow基于该画像对生产候选池执行增强、对齐打分、剪枝、重排序和解释生成；Self-Evolution Flow通过LLM-as-a-Judge离线标注与线上行为反馈构成SFT+DPO双反馈对齐闭环。与已有CRS的主要区别在于面向高吞吐feed流而非静态目录，并将候选检索、语义记忆与实时重排序解耦为可异步执行的生产系统模块。离线实验中SFT+DPO对齐打分模块在自动评测与1029条人工标注集上分别达98.85%和95.8%准确率，远超few-shot基线；在线A/B测试中Post Dismiss降低1.70%、Post Dislike降低2.74%、新兴趣消费提升0.16%，且端到端关键路径延迟仅增加0.043%。实际意义在于证明了LLM驱动的实时用户可控推荐在工业规模下可落地。主要局限包括依赖显式用户反馈触发、核心超参数和画像结构未公开、以及跨人群泛化未经验证。

### 🔗 开源详情

- 代码：论文中未提及代码链接。
- 模型权重：论文中未提及模型权重下载链接；论文基于Llama3-8B等模型进行微调，但未提供对应的HuggingFace/ModelScope获取地址。
- 数据集：论文中未提及公开数据集名称、链接或开源协议；论文使用历史feed-serving用户行为数据构造SFT/DPO数据集，但未开源。
- Demo：论文中未提及。
- 复现材料：论文中未提及可下载的复现材料、检查点或附录代码。复现相关训练配置为：SFT阶段基于Llama3-8B，8×80GB GPU，batch size=1，model parallelism=1，学习率2e-5，约2.5 GPU小时/epoch；DPO阶段使用2台8×A100 80GB机器，batch size=4，model parallelism=1，学习率2e-6，训练1 epoch。
- 论文中引用的开源项目：论文仅提及使用以下开源模型/方法，但未给出具体项目链接：Llama 4 Maverick、Qwen3-VL-235B-A22B、Llama3-8B、Llama3-70B、Llama3.2-1B；另提及SFT（Ouyang et al., 2022）与DPO（Rafailov et al., 2023），原文未提供链接。

### 🏗️ 方法概述和架构

SYF是一个面向工业feed推荐的多阶段闭环代理系统。整体流程为：用户通过三类交互入口（Context-Aware Feedback Pills、Content Preference Settings、MetaAI Assistant文本/语音对话）输入意图，经Perception Flow解析为半结构化Semantic Profile \(S_t\)；随后Serving Flow将画像映射到生产候选池进行实时精排；最终排序结果通过线上行为与离线标注回流到Self-Evolution Flow，对感知阶段和服务阶段模型做持续优化。论文将整体定义为闭环系统而非单一模型，核心组件是持续维护画像、意图轨迹并执行实时候选策略的agentic系统。

下图提供了Shape Your Feed系统三流架构的全局视图，展示了感知、记忆、服务和自进化模块如何协同工作。

![Figure 1. An Overview of Shape Your Feed System Architecture.](https://arxiv.org/html/2608.06632v1/x1.png)

图中可见，用户交互通过Perception Flow解析，状态存储于Memory层，Serving Flow执行实时精排，而Self-Evolution Flow形成持续优化闭环。


Perception Flow是系统意图前端，其形式化更新为 \(S_t = \mathcal{A}_P(\mathcal{I}_t, S_{t-1}, \mathcal{T}_{t-1})\)，其中 \(\mathcal{I}_t\) 是多模态交互，\(\mathcal{T}_{t-1}\) 是历史意图轨迹。它由四个子模块构成。（1）Interaction Interfaces接收三种多模态输入：Context-Aware Feedback Pills由LLM分析帖子语义生成细粒度反馈选项；Content Preference Settings允许用户通过话题气泡或自由文本主动配置偏好；MetaAI Assistant处理文本/语音对话历史与环境上下文并统一为查询 \(q_t\)。（2）Orchestrator解析统一查询 \(q_t\)，提取意图并将任务并行路由到推荐工具链和非推荐工具（如通用问答），是系统意图中枢。（3）Recommendation Toolchain包含四个LLM模块：Intent Detection对模糊输入进行行为动机消歧；Preference Synthesis对历史画像与当前意图执行去重、强化、冲突消解、语义扩展四种更新操作，输出新的 \(S_t\)；Candidate Sourcing在检测到新增正向兴趣 \(\Delta S_t^+\) 时异步触发，对每个新兴趣执行InventorySearch检索候选，用轻量模型 \(f'_\theta\) 打分，再SelectTopK写入Candidate Cache；GenerateConfirmation生成用户可读的确认消息。（4）Response Generator将各工具结果合成最终回复，增强透明度。

下图以一个具体查询为例，说明Perception Flow如何通过Orchestrator解析意图并更新用户的Semantic Profile。

![Figure 2. An Illustrative Example of the Perception Flow.](https://arxiv.org/html/2608.06632v1/x2.png)

图中展示了从用户请求到意图检测、偏好合成，最终生成新Semantic Profile和候选检索的完整步骤。


Serving Flow是实时精排执行器，形式化为 \(\mathcal{R} = \mathcal{A}_S(\mathcal{V}_{\mathrm{final}}, S_t; f_\theta)\)。Context Generation模块将生产环境中的hash ID或稠密向量解码为自然语言属性（话题字符串、创作者元数据），并与Semantic Profile拼接成对齐提示 \(\mathcal{P}_{\mathrm{align}}\)。Agentic Refinement模块基于该提示执行四个连续操作：Augmentation从Candidate Cache中抽取高相关项并入生产候选池；Alignment Scoring由微调的Llama3-8B以列表式方式一次性输出所有候选的对齐分数 \(\hat{y}_{v|S_t}\)，对匹配正向偏好的项取正值、对匹配负向约束的项取负值；Pruning将低于阈值 \(\tau\) 的候选硬性剔除；Re-ranking通过线性融合公式 \(s_{\mathrm{final}} = \alpha \cdot \hat{y}_{v|S_t} + (1-\alpha) \cdot \hat{y}_{u,v}\) 将语义对齐分数与生产预估分数融合，兼顾显式意图与基础engagement预估；最后Justification为顶部条目生成自然语言解释。异步设计的核心在于将候选检索从实时同步路径剥离，使感知阶段延迟不影响主链路。

下图详细展示了Serving Flow如何执行从内容准备到最终生成排序列表的完整流程。

![Figure 4. An Illustrative Example of the Serving Flow.](https://arxiv.org/html/2608.06632v1/copy_of_serving.png)

图中可见，系统首先构建上下文感知提示，随后进行列表式对齐打分、硬剪枝、重排序和解释生成，最终产出个性化的Feed。


Self-Evolution Flow包含两条闭环路径。Agentic-to-Production Propagation将Semantic Profile与Intent Trajectory作为表示增强特征输入生产模型、把 \(S_t\) 编码进初始检索阶段，并用于晚期个性化精调，从而将agent学到的高层语义蒸馏回基础排序器。Dual-Feedback Policy Alignment则是一个两阶段训练流程：先以LLM-as-a-Judge集成（Llama 4 Maverick、Qwen3-VL-235B-A22B）产生标注做SFT，建立基础打分能力；再用从Behavioral Feedback中提取的真实用户选择/拒绝对以及judge补全的偏好对做DPO，迭代强化偏好边界。Memory Persistence Layer将Semantic Profile、Intent Trajectory、Candidate Cache、Behavioral Feedback四类状态统一持久化，作为各flow共享的数据底座。

下图阐明了Dual-Feedback Policy Alignment的两阶段训练流程，即SFT数据准备与训练，以及DPO数据准备与训练。

![Figure 5. Overview of the Dual-Feedback Policy Alignment.](https://arxiv.org/html/2608.06632v1/x4.png)

图中展示了LLM Judges如何通过多数投票生成标注用于SFT，以及如何结合真实行为反馈构造偏好对用于DPO训练。


整体架构的取舍在于：用一个小型8B模型做列表式打分以满足严格的生产延迟预算（论文仅写p99<δ ms，未给出δ具体值）；用异步缓存解耦重检索；用LLM-as-a-Judge扩大稀疏人工标注，但这也引入了评估偏置风险。

### 💡 核心创新点

1. **Semantic Profile与Intent Trajectory的持久化语义记忆机制**：此前CRS多依赖多轮对话状态，缺少跨会话持久记忆。SYF将用户反馈转化为半结构化文本画像，支持可视化与编辑，并通过去重、强化、冲突消解、语义扩展维持多轮一致性。收益是用户可理解、可修正系统推断，在线指标中体现为负反馈下降与兴趣消费提升。
2. **三流分离的代理系统架构**：将Perception、Serving、Self-Evolution解耦，异步候选检索配合异步缓存规避了LLM推理对在线主链路的延迟冲击。相比端到端单模型方案，这种模块化解耦是唯一能兼容高吞吐生产的可行约束，实测关键路径仅增加0.043%延迟。
3. **列表式双向对齐打分机制**：区别于逐点打分，SYF对整批候选一次性输出对齐分数，并利用正负双向信号：匹配正向偏好加分、匹配负向约束减分并剪枝，使“少看政治类内容”这类负向约束能即时生效。论文报告SFT+DPO对不匹配内容的判别准确率达99.4%。
4. **Dual-Feedback Policy Alignment训练框架**：先以LLM-as-a-Judge生成伪标注做SFT，再用真实用户负反馈与judge补全偏好对做DPO，缓解工业场景下显式信号稀疏问题，同时避免单独训练reward model。离线F1从76.97提升到79.51，精准率从78.20提升到79.16。
5. **Agentic-to-Production的语义蒸馏闭环**：将agent学到的语义画像蒸馏回基础排序模型，使不主动交互的被动用户也能间接受益，这是解决冷启动和低信号用户问题的可行思路，但论文未给出针对该模块的独立实验结果。

### 📊 实验结果

离线评估以LLM-as-a-Judge集成标注构造自动评测集，并与few-shot Llama3-8B基线对比。SFT+DPO在四个指标上均显著领先，延迟从few-shot的650ms降至323ms。独立人工评估集（1029条）上准确率95.8%、精准率75.6%、召回率74.7%、F1 75.1%，论文据此认为LLM-as-a-Judge标注未引入明显系统性偏差。与生产模型P(CSL)/P(CSM)的对比显示，传统隐式信号对语义匹配/不匹配内容的区分度很低：P90(CSL)在匹配与不匹配条件下分别为0.208和0.199，仅差0.009；P90(CSM)为0.289与0.212，仍缺乏足够判别力。而SYF的打分模块在不匹配偏好条件下SFT+DPO准确率达99.4%。

模型规模消融显示8B是准确率与延迟的最佳平衡点：1B模型严重退化（F1仅12.9%），70B虽然precision更高（78.2%）但延迟与显存不可接受。

在线A/B测试在美加地区18岁以上用户的真实生产流量上进行，持续数月，交互入口限定为Context-Aware Feedback Pills以隔离界面效应。Context-Aware Pills在公平曝光条件下捕获了76.02%的交互，远超静态Pill。完整SYF系统相对生产基线Post Dismiss降低1.70%、Post Dislike降低2.74%、Interest Consumption提升0.16%。消融对比表明，仅部署Pills界面可带来UI点击+3.30%提升，但不会改善feed质量指标；完整系统才带来Post Dismiss和Post Dislike的显著下降以及Interest Consumption的提升，由此证明持久化画像、候选增强与重排序才是质量提升来源。论文未提供α与τ的灵敏度分析，也未提供不同人群、不同国家条件下的细分结果。

| 方法 | Accuracy | Precision | Recall | F1 | latency (ms) |
|---|---|---|---|---|---|
| Few-shot baseline | 83.84% | 47.06% | 60.22% | 53.00% | 650 |
| SFT | 98.21% | 78.20% | 74.86% | 76.97% | 325 |
| SFT+DPO | 98.85% | 79.16% | 79.41% | 79.51% | 323 |

| 指标 | Pills Only | Full System |
|---|---|---|
| UI Click | +3.30%* | +2.90%* |
| Post Dismiss | +0.68% | -1.70%* |
| Post Dislike | -0.13% | -2.74%* |
| Interest Consumption | -0.029% | +0.16%* |
表注：离线表保留论文主结果与最优基线；在线表保留论文表6的关键消融项。*表示p<0.05。

### 🔬 细节详述

- 训练数据：论文未说明SFT与DPO数据集的具体规模、采样窗口、负样本配比与candidate数量，仅说明采样自历史feed serving上下文，每个实例含当前Semantic Profile与候选集。DPO偏好对由显式用户反馈上下文与judge标注上下文共同构成。
- 数据标注：LLM-as-a-Judge集成使用Llama 4 Maverick与Qwen3-VL-235B-A22B，多数投票；论文称judge与人工标注一致率达96%。SFT标签、DPO部分偏好对以及自动评估集均由同一类judge管道构建，但论文称显式用户反馈在SFT阶段被保留、仅用于DPO。
- 损失函数：SFT采用标准交叉熵；DPO采用Direct Preference Optimization目标函数，论文未给出权重或正则细节。
- 训练策略：SFT：batch size 1、model parallelism 1、学习率2e-5；DPO：batch size 4、学习率2e-6、训练1个epoch。论文未说明优化器类型、warmup步数、权重衰减。
- 模型规模：主模型Llama 3 8B；对比Llama 3.2 1B与Llama 3 70B；judge模型为Llama 4 Maverick与Qwen3-VL-235B-A22B。
- 训练硬件：SFT单机8×80GB GPU，训练约2.5 GPU小时/epoch；DPO双机各8×A100 80GB。
- 推理细节：列表式单次推理输出K个候选的对齐分数，避免逐点解码；对齐打分耗时323ms。未说明温度、beam、prompt模板、K值选取。
- 排序融合：公式中的α与τ未给出具体数值建议，也未说明α是否动态调整。
- 多模态处理：论文明确说明文本、语音、UI三类输入，但未说明语音输入使用的ASR模型、音频编码方式与语音特征处理。
- 正则化/稳定训练：未说明。
- 延迟优化：异步候选检索、LLM列表式推理、缓存复用；总关键路径开销+0.043%、直接tier开销+0.412%。未说明缓存逐出策略、Cache容量与TTL。

### ⚖️ 评分理由

*   创新性 (1.2/2)：[A_METHOD] 提出三流分离的agentic推荐系统架构，将感知、服务与自进化解耦，并用持久化Semantic Profile和列表式双向对齐打分解决feed流实时用户控制，属于系统级组合创新，但核心组件多基于已有LLM与CRS方法，范式突破有限。

*   技术严谨性 (1.0/1.5)：[A_LIMITS] DPO偏好对、SFT标签与自动评估集均由同一LLM-judge管道构造，独立人工集仅1029条，存在循环评估污染风险；τ硬剪枝缺乏下界保护可能导致候选池萎缩，构成算法逻辑漏洞。

*   实验充分性 (1.1/1.5)：[A_RESULTS][A_LIMITS] 离线评测、模型规模消融和在线A/B测试及组件消融齐全，但未与并发CRS方法进行公平对比，缺乏α/τ灵敏度分析和分人群/分国家细分结果，证据强度有限。

*   清晰度 (0.7/1)：[A_METHOD] 系统模块和流程描述清晰，但Semantic Profile的结构、语音识别与多模态冲突仲裁等关键设计未展开，读者难以完整理解系统机制。

*   影响力 (0.3/1.5)：[A_SUMMARY] 核心贡献是工业feed推荐系统，语音仅作为三种交互入口之一且无独立实验，面向语音/音频读者的领域相关性低，故影响力受限。

*   开源 (0.0/1.5)：[A_OPEN] 论文未发布核心代码、模型权重或数据资源，也未给出明确的后续开源承诺。

*   可复现性 (0.1/0.5)：[A_METHOD][A_OPEN] 披露了SFT/DPO的基础超参与硬件，但α/τ取值、Semantic Profile结构、prompt模板、训练数据规模和损失细节等关键配置大量缺失，复现难度高。

*   工程/实践价值 (1.3/1.5)：[A_METHOD][A_RESULTS] 通过异步候选检索、缓存和列表式打分将关键路径延迟控制在+0.043%，在线A/B验证Post Dismiss降1.70%、Post Dislike降2.74%，工程实践可落地。

### 🚨 局限与问题

**论文明确承认的局限**：1) 系统依赖显式用户输入触发主动个性化，高吞吐环境下主动交互用户比例有限，被动消费者仍依赖baseline排序；2) 未来拟通过用户旅程关键节点的主动偏好引导来缓解输入稀疏性；3) 计划用迁移学习将已学习画像传播到低信号用户；4) 论文未对Agentic-to-Production Propagation和Self-Evolution中的部分领域优化细节展开说明。

**审稿人发现的潜在问题**：1) DPO数据中LLM judge标注与SFT标签同源，且自动评估集也由同类judge构造，存在系统性偏差，独立人工集只有1029条且构建方式未充分说明，无法完全排除评估污染；2) 硬剪枝策略τ缺乏下界保护，在负向约束密集时可能导致候选池萎缩、相关性与多样性同时下降，造成过滤气泡；3) α融合权重固定为常数，未考虑用户交互活跃度、内容类型与画像置信度的自适应调节；4) 在线结果“+0.16% Interest Consumption”统计显著但业务显著性存疑，未报告置信区间与效应量；5) 语音交互入口虽在接口清单中，但语音识别、语义理解与多模态融合的具体技术细节完全缺失；6) 多模态反馈（text/voice/UI）融合仅体现为统一 \(q_t\)，未说明三种模态冲突时如何裁决；7) 离线基准仅选择few-shot Llama3-8B和生产隐式信号，未与并发CRS工作比较，证据强度有限。

---

[← 返回 2026-08-10 语音/音乐/音频论文速递](/audio-paper-digest-blog/posts/2026-08-10/)
