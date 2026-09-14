---
title: "DeepInsert: Early Layer Bypass for Efficient and Performant Multimodal Understanding"
date: 2026-09-11
draft: false
description: "论文针对多模态 token 与文本从第 0 层共同走完全部语言模型层造成的算力负担，提出仅让文本走完全程而把多模态 token 直接送入中间层的 DeepInsert，并在视觉、音频、分子模态中显示第 4 层插入可持平基线，而更深插入可用可接受回落换取推理加速。"
tags: ["多模态学习", "大语言模型", "高效推理", "音频理解"]
categories: ["eacl-2026 论文"]
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_paper_id: "conference:eacl:2026:conference-paper-id:2026.eacl-long.332"
paper_digest_source_kind: conference
paper_digest_conference_id: "eacl-2026"
paper_digest_conference_record_url: "https://aclanthology.org/2026.eacl-long.332/"
paper_digest_conference_pdf_url: "https://aclanthology.org/2026.eacl-long.332.pdf"
paper_digest_api_reader_contract: "beginner-researcher-v3"
paper_digest_api_reader_article_sha256: "062c32f206b94030ccce021a1c23da55a9b1f9a62fb35a33bb6204116382ceac"
paper_digest_api_reader_plan_sha256: "4d3c158c1520b40937521628b3de835bb53c765f9eba0ccd0f725ea48e83ec06"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings-v4"
paper_digest_api_reader_source_bindings_sha256: "ec27f3a2a6039215f4bd3b6896b63a23279d0d5b47a3ec9058b5dfcd82acc9df"
paper_digest_api_reader_source_table_count: 4
paper_digest_api_reader_source_formula_count: 3
paper_digest_api_reader_structured_artifacts_sha256: "6abe1b22d9c7e41590e58868ec8a71dd80d35360eceae5d8cefcf7a82ee0b736"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity-v1"
paper_digest_api_reader_author_identity_sha256: "fea87848c893ba78227047e5c31852c1d5e30fb0314b142c3855535691c057aa"
paper_digest_api_reader_author_count: 8
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity-v1"
paper_digest_api_reader_resource_identity_sha256: "21eae8871e4c986f8b0d2d547b336e60b68d5e6381d10965b513920d9f4a7423"
paper_digest_api_reader_resource_count: 0
paper_digest_api_reader_decision_projection: "api-reader-decision-projection-v2"
paper_digest_scoring_contract: "api-scoring-audit-v2"
paper_digest_taxonomy_contract: "paper-taxonomy-flat-tags-compat-v1"
paper_digest_taxonomy_selection_contract: "paper-taxonomy-selection-v1"
paper_digest_taxonomy_registry_version: "paper-taxonomy-v1"
paper_digest_taxonomy_registry_sha256: "15c82a567ce5a55dc1175684ed08b64c158558639d9c8fb822c9587ec32a8778"
paper_digest_taxonomy_concepts: [{"facet":"method","id":"method.multimodal-learning","label":"多模态学习"},{"facet":"model_family","id":"model_family.llm","label":"大语言模型"},{"facet":"research_focus","id":"research_focus.efficiency","label":"高效推理"},{"facet":"task","id":"task.audio-understanding","label":"音频理解"}]
paper_digest_primary_task: "音频理解"
paper_digest_primary_method: "多模态学习"
paper_digest_score: 6.0
paper_digest_rank_bucket: "前50%"
paper_digest_document_type: "方法研究"
paper_digest_conference_structure: replayable-pdf-layout-v1
---

# 📄 把多模态 token 推迟送入：在中间层汇合为何能省算力

> 英文题目：*DeepInsert: Early Layer Bypass for Efficient and Performant Multimodal Understanding*

> 会议身份：`conference:eacl:2026:conference-paper-id:2026.eacl-long.332`


> ✅ 来源为官方会议 PDF；可重放的表格、公式文本与 Figure 像素已按 PDF 抽取结果绑定，未成功恢复的结构不作推断。

> 会议来源：[官方记录](https://aclanthology.org/2026.eacl-long.332/) · [官方 PDF](https://aclanthology.org/2026.eacl-long.332.pdf)

标签：#多模态学习 #大语言模型 #高效推理 #音频理解

评分：**6.0/10** | 创新 1.2/2 | 技术严谨 1.0/1.5 | 实验充分 1.2/1.5 | 清晰度 0.8/1 | 影响力 0.5/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 1.0/1.5

排名：前50% | 文档类型：方法研究

## 👥 作者与机构

- Moulik Choraria：机构信息未能从会议 PDF 纯文本可靠映射
- Xinbo Wu：机构信息未能从会议 PDF 纯文本可靠映射
- Akhil Bhimaraju：机构信息未能从会议 PDF 纯文本可靠映射
- Nitesh Sekhar：机构信息未能从会议 PDF 纯文本可靠映射
- Yue Wu：机构信息未能从会议 PDF 纯文本可靠映射
- Xu Zhang：机构信息未能从会议 PDF 纯文本可靠映射
- Prateek Singhal：机构信息未能从会议 PDF 纯文本可靠映射
- Lav R. Varshney：机构信息未能从会议 PDF 纯文本可靠映射

## 📌 核心摘要

多模态语言模型需将编码器输出的多模态令牌与文本提示拼接后送入大语言模型，冗长多模态上下文贯穿全部层导致交互冗余与开销，难点在于早期层跨模态交互稀少却仍消耗全部计算。先将文本提示分词嵌入并送入全部Transformer层进行语言建模，输出缓存的语言隐状态以保留深度语义演化。再将多模态编码器特征经投影模块映射到语言嵌入空间，输出对齐后的多模态令牌，使其维度与缓存的语言隐状态兼容可拼接。最后在选定中间层将对齐令牌按原始交错顺序与缓存语言隐状态重组并统一位置编码，重组序列共同经过剩余层完成跨模态融合与自回归生成，输出文本回答。与首层拼接及删减令牌式剪枝不同，该方法属于晚进入而非丢弃信息，只跳过多模态早期无效交互且复用基线超参数重训，实际意义在于同时降低训练与推理负担并兼容剪枝。在Pubchem324k分子描述评测下，DeepInsert-9的BLEU-4为27.2，高于基线的26.4。音频与分子可压缩约一半深度而视觉在第8层后衰减更快，插入层仍需经验扫描选择，其免重训直接移植与更深层外推尚未验证，构成适用边界受限。推理开销随插入层后移下降，在80GB A100等硬件上单次前向时间显著缩短，但扫描多层候选带来额外训练成本。

## 🔗 开源与复现资源

本次未形成可展示的已核验资源记录，开放状态尚未核实。
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 输入是什么，目标是什么，先保留哪些信息？

这篇解读面向刚进入语音、音乐或音频方向的研究生，目标是帮助读者核对论文做法并用自己的语言复述方法。输入仅限论文正文证据与本次收到的官方原图像素，不引入其他解读或外部评价。必须保留的信息包含任务范围、模型与模态、插入层位置、是否重训、基线是否重训、指标方向、硬件条件与已知缺数据情况。

输出按学习依赖展开，从任务与相关路线讲到方法全景，再讲到组件与计算，最后讲到实验条件与复现细节。多模态语言模型在此指固定组合：冻结感知编码器负责把图像、音频或分子图变为特征，可训练映射模块负责把特征转为语言模型可读向量，大语言模型负责读取文本加这些向量并生成回答。常规做法把两类向量在第 0 层拼接，随后共同走完所有层，论文研究早期层对多模态 token 是否必要。

**注意力热图 × 互近邻对齐：** 注意力热图刻画拼接后多模态大模型前向中视觉 token 对语言 token 的注意力随层数分布，分工是回答模型在何处使用模态信息；互近邻对齐刻画拼接前独立视觉编码器与独立语言模型各层表示之间的核相似度，分工是回答预训练表示本身在何处更为接近。两者搭配的原因在于前者观察拼接后的使用位置，后者观察拼接前的可拼接性，组合起来共同支持把插入点放在中间层而非第 0 层。

为理解动机，需区分两种证据。拼接后使用证据来自 Visual7W 多选题子集，仅保留模型答对样本做单次前向，观察视觉 token 对负责预测的最后语言 token 的注意力，以及视觉 token 对回答 token 的注意力占比。仅看答对样本的原因在于幻觉样本会改变注意力行为。拼接前表示证据来自配对图文数据分别送入独立视觉编码器与独立语言模型，计算各层表示之间的互近邻对齐，两类证据均指向深层更强。

### 同类路线有哪些，DeepInsert 与它们是什么关系？

论文把相关工作分成 3 条线索。第 1 条是多模态大模型的通用架构与对齐做法：冻结编码器加轻量或较重映射器，先做特征对齐预训练，再做多任务指令微调，必要时再做偏好调优。多数工作把预训练部件当作黑盒，改动集中在训练算法或数据，DeepInsert 则改动 token 进入语言模型的位置。

**跨模态对齐 × 模型拼接：** 跨模态对齐指让视觉或音频编码器表示与语言模型输入空间可互相检索，分工是解决语义对应；模型拼接指把某个网络前段接到另个网络后段并用仿射层桥接，分工是解决结构复用。论文把 DeepInsert 解释为多模态模型拼接：感知编码器加映射模块等价于前段，语言模型后半截等价于后段，插入层等价于拼接点，搭配原因是单模态预训练表示在深层本来更为接近，组合后无需辅助路由模块即可实现晚进入。

第 2 条是靠减少参数省计算的做法，例如低秩适配器与模型压缩蒸馏。前者节省微调显存但推理开销依旧，后者把大模型蒸馏为小模型。论文认为这些做法利用参数冗余，而 DeepInsert 利用功能冗余，即早期层对多模态 token 的处理冗余，因此两者互补，可在不同层面叠加使用。

**早退与剪 token × 晚进入：** 早退与剪 token 指在推理途中丢弃次要 token 或提前退出，分工是缩短已进入模型的序列长度；晚进入指多模态 token 起始阶段就不进入前若干层，分工是减少其经过的层数。两者正交的原因在于前者管宽度、后者管深度，论文因此说明 DeepInsert 可与 FastV、VTW、PruMerge 叠加，组合意义是把深度节省与宽度节省相加，同时保持精度稳定。

第 3 条是跳层与减 token。跳层在单模态大模型中用于推测解码与加速，在多模态中已有尝试，但论文指出部分做法在 LLaVA 配置下低于基线 10 到 20 个百分点，部分做法仅利用视觉 token 之间冗余而未必跨模态通用。减 token 方法包含 FastV、VTW、PruMerge 等，做法是剪掉次要 token。论文把自身定位为晚进入，与早退和剪 token 正交，并报告叠加后仍保持或超过基线。

### 为什么说早期层可能是冗余的？

论文先从预训练单模态模型的层间对齐讲起。做法是取 LLaVA 所用视觉编码器与 Vicuna 语言模型，把图文对分别送入两者，计算每对层表示之间的互近邻相似度。报告结果是视觉编码器靠后层与语言模型靠后层对齐更强，对自监督训练的视觉编码器也有类似趋势。论文把这理解为深层可能共享更为通用的语义，但也说明这本身难以定量回答多模态训练中早期层的作用。

下面这张图是论文用来说明视觉 token 在何处与语言发生交互的核心证据，左为预测前视觉到语言的注意力，右为预测后视觉对回答 token 的注意力占比。阅读时先看层数方向，再看 token 或注意力头方向，随后结合颜色标尺判断高值集中位置。

> **看图路径：** 1. 先看左图横轴视觉 token 位置与纵轴层数，定位颜色最亮的横向条带所处层段；2. 再看右图横轴按活跃度排序的注意力头与纵轴层数，定位左侧高值集中所处层段；3. 对照正文说明，确认最初 2 层的高激活被单独讨论而不作为主要跨模态证据

![原论文 Figure 2：Attention activity of vision tokens, visualized pre-prediction in Fig.](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eacl-2026/6565f09f6b9b/figure-2.png)

*论文图 2。原论文 Figure 2：“Attention activity of vision tokens, visualized pre-prediction in Fig.”。*

从像素可见，左图纵轴为层数、横轴为视觉 token，亮带集中在中间层附近，浅层大面积偏暗。右图纵轴为层数、横轴为按活跃度排序的注意力头，左侧高活跃头的高值同样集中在中深层。论文据此报告视觉 token 与语言的交互主要在中间层。需要同时保留的边界是完整层展示中最初 2 层有强激活，但论文引用已有工作说明这是 LLaVA 特有现象。

### DeepInsert 让单个样本走完什么路径？

沿单个样本走过全程最为清楚。以图像加文本指令为例，图像先经冻结多模态编码器得到特征，再经映射器得到多模态 token。文本指令经分词和嵌入得到文本 token，常规结构把两组 token 在第 0 层拼接后共同送入全部语言模型层。DeepInsert 改为文本 token 仍从第 0 层开始逐层处理，多模态 token 不进入前若干层。

多模态 token 仅在选定插入层与已处理过的文本表示汇合，再共同走完剩余层并生成输出。插入在第几层就记为 DeepInsert 加该层号，例如第 4 层记为 DI-4，这种记法在后文结果中反复出现。文本必须走完全程的原因是保证语言处理本身准确，多模态 token 跳过早期层的原因是前文注意力证据显示早期交互很少。

**多模态 token × 语言提示：** 多模态 token 指图像、音频或分子图经冻结感知编码器加可训练映射模块转换后得到的向量组，分工是携带模态内容；语言提示指文本经分词加嵌入得到的向量组，分工是给出指令与问题。常规做法要求两组向量在第 0 层拼接后共同走完全程，DeepInsert 要求语言提示仍走完全程，而多模态 token 仅在选定中间层与已处理过的文本表示汇合，搭配理由是注意力证据显示跨模态交互集中在中深层，组合意义是省去多模态 token 在早期层的投影、注意力和前馈开销。

下图把左右两种结构并排对比，左侧是常规拼接，右侧是中间插入。阅读时重点看红色箭头的落点，以及右侧下半段仅有文本 token 的独立通路，随后观察上半段两类 token 合流后的输出路径。

> **看图路径：** 1. 先沿底部向上看左侧多模态编码器加映射器与右侧文本分词加嵌入这两条输入通路；2. 再对比红色箭头在常规结构中落到最底层、在 DeepInsert 中落到中间插入层的差异；3. 最后观察右侧下半段仅有文本 token 独立向上传递而上半段才出现两类 token 合流

![原论文 Figure 3：The DeepInsert architecture contrasts with conventional MLLMs: We propose to entirely skip…](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eacl-2026/6565f09f6b9b/figure-3.png)

*论文图 3。原论文 Figure 3：“The DeepInsert architecture contrasts with conventional MLLMs: We propose to entirely skip initial layers for the multimodal tokens to exploit underlying redundancies and improve…”。*

从实现角度看，这并非简单加掩码。论文说明用掩码遮住早期层的视觉 token 虽然概念可行，但会降低效率收益且性能明显更差。实际做法是重构语言模型前向与键值缓存结构，使生成仍高效，并对交错文本与多模态数据保证切分与重组前后位置嵌入吻合。论文还讨论权衡：若仅在最后几层插入，则效率最高但模型利用该模态的容量会下降。

### 插入层越深省多少计算，公式如何拆解？

论文把单层前向浮点运算拆成 3 部分解释。先看投影部分，输入矩阵与查询、键、值 3 个投影矩阵相乘是主要开销。再看自注意力部分，包含查询键相乘、按行归一化、注意力矩阵乘值矩阵以及输出投影。最后看前馈部分，即 2 层线性层的乘法，其余激活和层归一化相对可忽略。记语言模型有 N 层，隐维度为模型维度，前馈维度为另个常数，多模态 token 数为多模态长度。

某次前向的文本 token 数为文本长度，插入层为选定层号。前若干层仅看到文本长度，后续层才看到两者之和，因此总计算量随插入层单调下降。多模态 token 越多，则插入越深带来的下降越陡，这个定性关系可直接从序列长度的 2 次项理解。论文进一步把分项按插入层前后两段求和，得到总计算量的解析式。

**插入层 × 计算量：** 插入层指多模态 token 首次进入语言模型的层编号，分工是决定省去多少层多模态计算并保留多少层跨模态交互容量；计算量指随序列长度与层数增长的前向浮点运算数，分工是量化效率收益。搭配原因是插入越深，则前若干层仅处理文本 token，后续层才处理长序列，论文解析式说明总计算量随插入层单调下降，组合意义是可用插入层在性能与效率之间选点。

下面 3 条是论文给出的分项计算式，先看投影，再看注意力和前馈。符号含义按上段理解，输入是序列长度，目标是估计单层或全模型的前向前向运算量，阅读时可对照维度逐项核对。

\[Projection FLOPs = 6Ld2\]

\[Attention FLOPs = 4L2dmodel + 2Ld2\]

\[Feed forward FLOPs = 4Ldmodeldff.\]

论文用 LLaVA 在显卡上的实测前向时间对照理论曲线，报告两者贴合很好，因此可用该式作为不同插入层效率的代理。复述时要注意这是前向推理的估计，不直接等同端到端训练时间或实际延迟。实际运行还受硬件、显存、数据加载与集群干扰影响，需结合后文硬件条件理解。

### 训练时动哪些参数，如何选插入层？

论文训练策略是尽量沿用各开源仓库的默认超参数和流程，不做额外调参。视觉部分用 LLaVA v1.5 的 7 B 与 13 B 2 阶段流程，先做特征对齐预训练再做对话微调。音频部分用 LTU 的 4 阶段流程，第 1 阶段仅训练音频投影层，后续阶段引入可训练低秩适配器并逐步增加任务复杂度。分子部分用 MolCA 流程，先用第 1 阶段预训练好的查询器做第 2 阶段图文对齐，再微调单模态适配器做分子描述。

基线均为按同样流程重训的版本，以消除训练设置和缺数据带来的差异。选插入层目前靠扫描加低成本启发式，具体做法是把基线多模态大模型权重直接装到 DeepInsert 结构上。让映射器把多模态 token 送入更深层，不做微调先看性能随层数的下降趋势，这种直接插入仍能保持部分能力。

论文报告这种趋势可预示哪个模型或模态更适合深插，但直接插入会让生成长度单调变短。在描述任务上退化明显，因此最终仍需从头重训，分类尚可不能代替生成能力的验证。论文还用轻量强化学习适配器做探索：在冻结 LLaVA 上加多层感知机，根据提示嵌入预测插入层。奖励由负的下个 token 预测损失和鼓励跳层的冗余奖励组成，用系数平衡性能与效率。

下表整理论文明确给出的模型规模与 token 负载，阅读时先看模态与模型列，再看 token 数量列表示的负载差异，随后结合后文性能曲线理解深插耐受度的差异。

| 模态与代表模型 | 语言模型规模区间 | 多模态 token 负载原文 | 负载数量 | 对深插的含义 |
| --- | --- | --- | --- | --- |
| 视觉 LLaVA 与 BLIP | starting from 350M to 13B parameters | LLaVA uses all 576 vision tokens from the encoder | 576 | 全量 token 负载大 |
| 音频 LTU | starting from 350M to 13B parameters | compress modality information into 32 QFormer tokens | 32 | 压缩后负载小 |
| 分子 MoLCA | starting from 350M to 13B parameters | compress modality information into 32 QFormer tokens | 32 | 压缩后负载小 |
| 跨模态总览 | starting from 350M to 13B parameters | LLaVA uses all 576 vision tokens from the encoder | 576 对 32 | 负载差异支持后文推测 |

表后需要说明代价与适用条件。视觉用全量视觉 token，负载大，深插后性能下降更快。音频与分子仅用少量查询 token，且训练曝光相对更为充分，深插到约半程仍可保持。论文把这作为推测而非定论，复述时应保留可能与待验证的措辞，不能把 token 数量直接当作因果证明。

### 在什么数据、指标和硬件上比较，条件是否吻合？

视觉评估用 LLaVA v1.5 的常用基准，包含通用问答、读图问答、科学图问答、幻觉评测、多模态综合基准和图表理解等。平均分计算时不含 MME，以免数值尺度带偏平均，这个聚合口径在复述数字时必须保留。音频评估沿用 LTU 流程，分类在环境声、人声、视频声等划分上报告准确率或平均精度。描述在音频描述数据集上报告语义命题评价分数，分子评估沿用 MolCA 的分子描述流程。

分子训练按报告轮数跑并每隔若干轮检查，取训练全程中的最优而非最后轮，因为基线最后并非最优。为保证公平，论文对 LLaVA、LTU、MolCA 都重训基线并使用各自仓库默认配置。BLIP 因代码、超参数、采样比例缺失以及预训练数据下线无法复刻，论文改为自设小规模多任务流程。LLaVA-NeXT 因算力有限直接用公开检查点做基线，深插模型存在约 1000 到 2000 个数据点缺失。

下表整理论文明确报告的硬件与数据缺失条件，读表时注意训练步数、显卡型号与显存是实际开销的来源。缺数据比例是复现差异的来源，需结合基线重训条件理解公平性，随后才能讨论效率数字。

| 条件类别 | 原文报告的硬件与数据 | 关键数量 | 适用阶段 | 对比较的影响 |
| --- | --- | --- | --- | --- |
| 推理与部分训练硬件 | completed on Nvidia’s 80 GB A100 GPUs on a standalone machine | 80 GB A100 | 推理前向与部分训练 | 推理时间的测量基准 |
| 大规模视觉与音频训练 | we used 4× 96 GB H100s and 2× 141 GB H200 GPUs respectively | 96 GB H100s 与 141 GB H200 | 13 B 视觉与音频全阶段 | 实际算力预算来源 |
| 音频训练步数 | LTU training with ∼10m steps across all stages | ∼10m steps | 音频 4 个阶段 | 训练曝光充分的旁证 |
| 音频缺数据 | roughly 10% of the data samples are no longer usable during training | 10% | 音频训练集 | 基线与深插模型均受影响 |

表后补充常被忽略的细节。13 B 的微调时间在共享学术集群上受他人占用和磁盘速度影响，论文明确说明此时看不到清晰的随插入层下降趋势。因此不能把某次训练时长直接当作理论节省的精确值，推理前向时间与理论计算量的对照才是更为客观的效率证据。

### 插入第 4 层与插入更深层各得到什么？

论文核心判断分 2 层。第 1 层是在第 4 层插入时，多模态处理量减少但平均性能至少持平甚至超过基线。第 2 层是在第 12 层附近插入时，性能仍有竞争力但推理加速可达约 2 成。左图看视觉，右图看音频，横轴都是插入层，柱高是性能，折线是运行时间。阅读时先看柱高是否守住基线虚线，再看折线下降多少，随后结合图例确认分类与描述的对应关系。

> **看图路径：** 1. 先看左图 LLaVA 的 3 组性能柱随插入层从 0 到 24 的高度变化；2. 再看右图 LTU 分类与描述平均柱高度几乎持平而红色运行时间线持续下降；3. 最后看红色运行时间折线在层 12 附近相对基线的下降幅度

![原论文 Figure 1：Tradeoff between performance and computational efficiency (inference) in (a) LLaVA v1.5-7B and…](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eacl-2026/6565f09f6b9b/figure-1.png)

*论文图 1。原论文 Figure 1：“Tradeoff between performance and computational efficiency (inference) in (a) LLaVA v1.5-7B and (b) LTU-7B highlight our two contributions.”。*

从像素可见，LLaVA 侧第 0 层基线与第 4 层的 3 组性能柱高度基本齐平，运行时间折线已明显下探。到第 12 层柱高开始回落但仍接近基线，折线继续下降。LTU 侧分类与描述平均柱在第 4 层甚至略高于基线虚线，到第 24 层仍未大幅坍塌。运行时间线从基线到深层持续下降，论文据此支持音频冗余更高的判断，同时报告视觉在第 8 层后下降加快。

下表把论文原句中的效率与代价数量放在共同框架下，读表时注意加速区间与平均下降是不同指标。跳层比例是按模型层数折算的计算节省口径，不能把不同指标相减或换算，随后需结合具体基准看代价分布。

| 比较维度 | 基线侧条件 | 深插侧原文数量 | 插入层 | 解释与成本含义 |
| --- | --- | --- | --- | --- |
| 推理加速 | stay competitive with the baseline | ∼20–25%speedup | see layer 12 | 深插保持竞争力下的加速区间 |
| 视觉平均性能 | baseline 为第 0 层参照 | average performance drop ∼1% | DI-8 附近 | 兼顾性能与效率的值选点 |
| 跳过比例 7 B | baseline 用全部层处理多模态 | skipping 1/4th in 7B | 第 8 层 | 约 4 分之 1 多模态计算省去 |
| 跳过比例 13 B | baseline 用全部层处理多模态 | skipping 1/5th in 13B | 第 8 层 | 约 5 分之 1 多模态计算省去 |

表后必须讲代价与反例。视觉的代价是插入到第 12 层后多个基准回落更为明显，分子与音频的代价较小但并非全胜。例如音频某些分类子项在深插后波动，分子描述指标的边际提升也难以用现有描述指标精确量化。论文还报告直接把基线权重装到深插结构而不重训时，分类尚可但生成变短，说明生成能力仍需重训恢复。

### 哪些对照说明收益来自晚进入而不是偶然？

论文做了 3 类对照。第 1 类是插入层扫描本身：对 LLaVA 7 B、13 B、LTU、MolCA 都训练多个插入层。报告性能随插入加深先持平后下降，训练与推理时间随插入加深单调下降，说明存在可复现的权衡曲线而非单点偶然。第 2 类是与减 token 方法叠加：在基线与深插模型上分别加 FastV、VTW、PruMerge。

报告深插模型对剪 token 同样稳健甚至更为稳健，平均分不低于基线加剪 token，支持正交与可叠加的判断。第 3 类是选层启发式与强化学习选层：直接插入的性能下降趋势预示深插可行性。强化学习预测的平均插入位置落在第 4.8 层附近，与重训最优点接近，支持用低成本信号先筛层再重训的流程。

下表整理选层相关的原文数量，读表时注意归一化深度与实际层号是同个预测的两种表达。近邻数与样本数是表示对齐实验的计算条件，不是性能指标，随后需结合对齐热图理解深层可拼接性。

| 环节 | 原文数量 | 归一化或计数表达 | 对应层或样本 | 含义与边界 |
| --- | --- | --- | --- | --- |
| 强化学习预测插入 | approximately 0.14 in normalized layer index | 0.14 | 归一化深度 | 数据驱动选层的预测位置 |
| 强化学习对应层号 | corresponding to layer 4.8 in a 32-layer transformer | 4.8 与 32 | 第 4.8 层 | 与第 4 层经验最优接近 |
| 表示对齐计算 | k= 10 nearest neighbors | 10 | 近邻数 | 视觉与语言相似度估计条件 |
| 表示对齐样本 | over 1024 samples from WIT | 1024 | 图文样本数 | 估计条件的样本规模 |

表后补充失败条件与限制。直接插入不重训在描述任务上失败，说明分类与描述对深插的敏感度不同。BLIP 自设流程中跳过编码器直接进解码器带来大提升，但因训练流程与官方不同，不能直接推广为官方 BLIP 的结论。LLaVA-NeXT 深插缺数据点的比较需打折扣，这些都是复现时必须保留的边界。

### 还有哪些没测到，不能承诺什么？

论文在局限中明确 3 点。第 1 点是仅在选定的开源多模态模型上测试，没有覆盖所有模型与数据多样性。视频等多模态密集场景只是未来方向，不能把现有结论直接推广到长视频。第 2 点是即使有选层启发式，仍无法在不重训的情况下保证性能，重训本身要花算力。

第 3 点是沿用基线评估流程会继承其缺陷，例如分子描述指标的已知缺点。以及多模态大模型常见的幻觉、公平获取、问责与数据归属问题，效率提升本身不增加也不减少对抗提示与分布偏移的脆弱性。从证据等级看，性能持平或超过基线的部分属于直接报告，有表格与曲线支持。

token 数量与训练曝光导致冗余差异的部分属于有限解释，论文用推测措辞。多模态 token 作为查询、分 2 阶段检索的机制讨论属于未验证推测，放在附录的理论联想中。未测量误判率细项、真实服务延迟和端到端成本时，不应承诺这些量必然改善，总体趋势不等于每组或每步都成立。

### 要复现应先做什么，需要补哪项验证？

复现的第 1 步是按模态搭好基线并重训，而不是直接下载分数对照。因为音频有约 10% 样本不可用，视觉大模型在共享集群上时间波动大。仅有重训基线才能让插入层比较公平，这个公平条件是后文所有数字比较的前提。第 2 步是实现双通路前向：文本走完全部层，多模态 token 在插入层汇合。

重写键值缓存以支持高效生成，并保证交错输入的位置嵌入在切分重组后吻合。不要用早期层加掩码的捷径替代，论文已报告这种做法效率与性能都更差。第 3 步是先用直接插入做低成本扫描，看性能随层数下降的斜率。再选第 4 层附近重训验证持平，用第 8 层与第 12 层验证权衡曲线，这个顺序可节省算力。

关键超参数与信息条件是沿用各仓库默认配置，不额外调参。视觉用全量视觉 token，音频与分子用少量查询 token。分子训练跑足报告轮数并取全程最优，评估时注意平均分是否含 MME。资源状态方面，本次没有发现来源绑定且完成验证的开源地址，因此不能写代码、模型或数据当前可用或已公开，只能按论文描述的流程重做。

还需补的验证包含在更多编码器与语言模型组合上重复注意力分析，确认最初 2 层强激活的处理方式。在视频长序列上验证深插是否仍守住性能，把理论计算量换成同硬件上的端到端延迟与显存占用对照。对描述任务补充人工或更为可靠的语义评测，避免仅依赖自动描述指标，这些补充可提升结论的稳健性。

### 何时值得尝试，复述方法的主干是什么？

当多模态序列很长而文本指令相对短，且推理或微调成本主要花在多模态 token 走完全部层上时。值得尝试把多模态 token 推迟到中间层进入，先用第 4 层验证是否持平或更好。复述方法是文本全程处理，多模态晚进入，中深层才发生主要跨模态交互，插入层控制性能与效率的权衡。

再用更深层在可接受的回落内换加速，并与剪 token 方法叠加看是否还有增益。需要记住的边界是视觉全量 token 对深插更为敏感，音频与分子少量查询 token 更为耐受深插。直接插入不重训不能用于生成任务，基线必须重训才公平，这些边界决定了方法是否值得在特定项目中尝试。

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。
- 评分规则：type-aware-v1
- 评分模型：muse-spark-1.3-contributor
- 评分请求协议：openai_responses

---

[← 返回 eacl-2026 论文汇总](/posts/conference-eacl-2026/)
