---
title: "Efficient and High-Fidelity Omni Modality Retrieval"
date: 2026-09-13
draft: false
description: "针对文本、视觉、音频三模态组合查询检索问题，OmniRet 用共享媒体重采样器压缩长媒体 token 序列提高效率、用注意力切片 Wasserstein 池化保留细粒度分布信息，在约 600 万对 30 个数据集训练下组合检索和音视频任务提升明显，而单向量压缩与有限主干仍是主要代价与边界。"
tags: ["基准测试", "对比学习", "多模态学习", "大语言模型", "音频检索"]
categories: ["cvpr-2026 论文"]
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_paper_id: "conference:cvpr:2026:conference-paper-id:Huynh_Efficient_and_High-Fidelity_Omni_Modality_Retrieval_CVPR_2026_paper"
paper_digest_source_kind: conference
paper_digest_conference_id: "cvpr-2026"
paper_digest_conference_record_url: "https://openaccess.thecvf.com/content/CVPR2026/html/Huynh_Efficient_and_High-Fidelity_Omni_Modality_Retrieval_CVPR_2026_paper.html"
paper_digest_conference_pdf_url: "https://openaccess.thecvf.com/content/CVPR2026/papers/Huynh_Efficient_and_High-Fidelity_Omni_Modality_Retrieval_CVPR_2026_paper.pdf"
paper_digest_api_reader_contract: "beginner-researcher-v3"
paper_digest_api_reader_article_sha256: "8be36ef87f4903afbaf81b2b68c30d73b89130958eacf11b38352a63c53389d5"
paper_digest_api_reader_plan_sha256: "423aca439e62f4cdedafc8d34881f93992635bdc982c99496de8489fbb3639c2"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings-v4"
paper_digest_api_reader_source_bindings_sha256: "98a25d7c20dfef61213630fef7ec1de4f4344d703c7d651c882f6aee06d40725"
paper_digest_api_reader_source_table_count: 3
paper_digest_api_reader_source_formula_count: 0
paper_digest_api_reader_structured_artifacts_sha256: "903f738ca5a39b36ed571f3949b316155869602c856cd296d892422f52304d16"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity-v1"
paper_digest_api_reader_author_identity_sha256: "b2587a674b6f65e0c3941885e88ad461ead2ab3d58a0143c8fb6e67b1d0c2728"
paper_digest_api_reader_author_count: 3
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity-v1"
paper_digest_api_reader_resource_identity_sha256: "0daabd03cf816c6d3eddd6226923a6f8fb11793b40b8ffe488f468cd054796d8"
paper_digest_api_reader_resource_count: 1
paper_digest_api_reader_decision_projection: "api-reader-decision-projection-v2"
paper_digest_scoring_contract: "api-scoring-audit-v2"
paper_digest_taxonomy_contract: "paper-taxonomy-flat-tags-compat-v1"
paper_digest_taxonomy_selection_contract: "paper-taxonomy-selection-v1"
paper_digest_taxonomy_registry_version: "paper-taxonomy-v1"
paper_digest_taxonomy_registry_sha256: "15c82a567ce5a55dc1175684ed08b64c158558639d9c8fb822c9587ec32a8778"
paper_digest_taxonomy_concepts: [{"facet":"artifact","id":"artifact.benchmark","label":"基准测试"},{"facet":"method","id":"method.contrastive","label":"对比学习"},{"facet":"method","id":"method.multimodal-learning","label":"多模态学习"},{"facet":"model_family","id":"model_family.llm","label":"大语言模型"},{"facet":"task","id":"task.audio-retrieval","label":"音频检索"}]
paper_digest_primary_task: "音频检索"
paper_digest_primary_method: "多模态学习"
paper_digest_score: 7.0
paper_digest_rank_bucket: "前50%"
paper_digest_document_type: "方法研究"
paper_digest_conference_structure: replayable-pdf-layout-v1
---

# 📄 压缩而不丢失细节：OmniRet 如何同时解决三模态检索的效率与保真矛盾

> 英文题目：*Efficient and High-Fidelity Omni Modality Retrieval*

> 会议身份：`conference:cvpr:2026:conference-paper-id:Huynh_Efficient_and_High-Fidelity_Omni_Modality_Retrieval_CVPR_2026_paper`


> ✅ 来源为官方会议 PDF；表格与 Figure 按原文证据绑定。PDF 公式以原页区域图片展示，未冒称作者原始 TeX。

> 会议来源：[官方记录](https://openaccess.thecvf.com/content/CVPR2026/html/Huynh_Efficient_and_High-Fidelity_Omni_Modality_Retrieval_CVPR_2026_paper.html) · [官方 PDF](https://openaccess.thecvf.com/content/CVPR2026/papers/Huynh_Efficient_and_High-Fidelity_Omni_Modality_Retrieval_CVPR_2026_paper.pdf)

标签：#基准测试 #对比学习 #多模态学习 #大语言模型 #音频检索

评分：**7.0/10** | 创新 1.5/2 | 技术严谨 1.0/1.5 | 实验充分 1.2/1.5 | 清晰度 0.8/1 | 影响力 1.2/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 1.0/1.5

排名：前50% | 文档类型：方法研究

## 👥 作者与机构

- Chuong Huynh：机构信息未能从会议 PDF 纯文本可靠映射
- Manh Luong：机构信息未能从会议 PDF 纯文本可靠映射
- Abhinav Shrivastava：机构信息未能从会议 PDF 纯文本可靠映射

## 📌 核心摘要

该任务输入为跨文本、图像、视频与音频的组合查询与任意模态候选，输出为共享空间中的相似度排序，难点在于媒体编码器输出数百token导致大语言模型计算爆炸与批量受限，以及单向量压缩丢失细粒度细节。方法链分四步：专用视觉与音频编码器抽取媒体特征后由共享媒体重采样器压缩为定长latent，再与文本交织送入冻结并加LoRA的大语言模型作跨模态合成，随后由注意力模块压缩为集合再经注意力切片Wasserstein池化对照可学习参考系生成单向量，最后以难负例InfoNCE加间隔三元组与多样性损失联合优化。与平均池化或`[EOS]`向量及保留多向量的晚交互不同，该池化将输出视为分布并用切片投影下的一维Monge耦合保留分布结构，兼顾单向量索引效率。扩展M-BEIR上组合视频文本到视频任务达到86.2的Recall@5，显著高于VLM2VecV2的76.4，自建组合音频文本到音频任务为23.0。结论限于1.5B主干与约6.2M查询候选对训练，未验证更大主干、交织混合文档与语音、深度图、3D点云等外推，合成修改文本质量依赖生成模型。训练仅更新约84M参数并冻结编码器与主干，第二阶段批量为3072且每批采样4个任务，推理为单向量余弦检索故索引代价低。

## 🔗 开源与复现资源

- 复现相关资源：<https://hmchuong.github.io/omniret> → <https://hmchuong.github.io/omniret/> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 输入是什么，目标是什么，必须记住哪些信息？

本文面向刚进入语音音乐音频领域的研究生，解读 1 篇做全模态检索的工作。输入是一个检索查询，它可以是单模态，例如一张图、一段音频、一句话，也可以是组合查询，例如一张图加一句修改文本、一段音频加一句描述变化的文本。作为教学例子，可以想象查询是二胡演奏视频加一张人物图像加一段二胡声音，再加一句改为小提琴的文本。目标是从候选库中找到语义最匹配的目标，目标同样可以是文本、图像、视频或音频，例如拉小提琴的视频、声音与图像。

输出是共享向量空间中的查询向量与候选向量，检索时按余弦相似度排序返回。
为了能复述方法，必须记住 3 个信息条件。第一，查询侧带有自然语言指令说明任务定义，候选侧保持原始无指令形式。第二，同一模型同时编码查询与候选，查询向量与候选向量在同一维度空间比较。第三，最终只用单向量做大规模检索，因此所有细粒度信息必须在压缩进单向量之前被保留。

开篇先明确这一点，后续的效率模块与保真模块才有共同的评价基准。
论文要解决的矛盾是两方面的。一方面，媒体编码器输出的 token 序列很长，单张图像常超过 500 个 token，直接喂给大语言模型会导致计算爆炸和批量减小，进而削弱对比学习效果。另一方面，若简单用平均池化或句尾标记向量压缩，又会丢失细粒度细节。作者因此提出 OmniRet，同时处理文本、视觉、音频 3 种主要模态，论文报告这是首个能处理 3 模态复杂组合查询的检索框架，并配套提出音频为中心的评测基准。

训练规模约为 600 万查询目标对、覆盖 30 个数据集，评测覆盖 13 个检索任务与多模态嵌入基准子集。
下段导读图一，该图对比了传统系统与 OmniRet 的输入输出范围，并展示新增评测任务的版图，帮你先建立任务全景再进入结构细节。图前导读已经说明了观察顺序，重点是先看模态范围再看模块分工。

> **看图路径：** 1. 先看上半部分传统检索编码器支持的查询与目标模态图标，再看下半部分 OmniRet 新增的音频喇叭图标；2. 再看底部黄色与浅粉色方框标注的效率模块与高保真模块名称；3. 最后看下方四类任务框，区分组合视觉文本与组合音频文本的输入输出箭头

[![原论文 Figure 1：(a) Comparison of retrieval systems.](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/b0edfd049bcd/figure-1.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/b0edfd049bcd/figure-1.png)

*论文图 1。原论文 Figure 1：“(a) Comparison of retrieval systems. OmniRet is the first to handle composed queries from text, vision, and audio.”。*

图一上半部分显示传统多模态检索编码器主要处理图文与视频查询，下半部分显示 OmniRet 在查询与目标两侧都增加了音频图标，并明确标出底部两个新增模块的分工。黄色方框为共享媒体重采样器，对应效率，浅粉色方框为注意力切片 Wasserstein 池化，对应高保真。下方面板进一步把评测分为单模态、文本绑定、组合视觉文本、视觉音频、组合音频文本等类型，其中后两类是本文新补的音频中心任务。理解该图后，可以把效率问题定位为进入大语言模型之前的压缩，高保真问题定位为离开大语言模型之后的聚合。

### 已有路线在同输入同目标下走到哪里？

多模态嵌入路线先解决双模态对齐。文本视觉方向以 CLIP 及其变体、BLIP 系列为代表，文本音频方向以 CLAP 为代表，近期还有 SigLIP 与 AlignCLIP 改进预训练目标。大语言模型出现后，有工作用其表示能力构建统一嵌入空间。通用多模态检索方向上，UniIR 在 20 个数据集上训练双编码器建立任意到任意基准，但依赖多个专用编码器。另一些工作改造视觉语言模型做嵌入，或利用指令跟随与生成式奖励优化预测，并配套数据合成方法。

这些工作大多仍限于图文 2 模态。向更多模态扩展时，ImageBind 展示了 6 模态联合空间的可行性，但直接处理全部编码器 token，计算效率问题突出。
嵌入池化是第二个相关分支。简单方法用均值池化或句尾隐藏状态，快速但丢细节。NV-Embed 类方法用可学习查询生成更具描述性的单向量，但仍受单向量瓶颈的理论限制。

晚交互以 ColBERT 为代表，保留 token 级向量做精细比对，精度高但存储与计算代价大，不兼容高效近似最近邻索引。后续有 MetaEmbed 等试图降低晚交互开销，但仍偏离单向量形态。本文的定位是在单向量形态内引入切片 Wasserstein 思想的聚合，以兼顾细粒度与效率。

**单向量检索 × 晚交互检索：** 单向量检索负责把查询和候选各压缩为一个向量以兼容近似最近邻索引实现高效大规模检索，晚交互检索负责保留 token 级向量并在检索时做细粒度比对以提高精度，二者搭配讨论的原因是精度与效率存在直接冲突，OmniRet 选择单向量形态但用分布型池化逼近晚交互的细粒度保留能力。

该组合的意义在于明确比较条件。只有当输入模态、查询组合形式、监督信号与运行阶段相同时，精度与效率的比较才公平。把类别差异当成同条件胜负是初学者常见误解。例如专用文本绑定模型在图文对齐上强，但不能处理音频加文本的组合查询。后文实验部分会分别保留专用模型与多任务微调模型的分组，避免跨组误读。理解分组后，才能正确解读主结果中谁领先、谁持平。

### 组合查询检索的形式化问题是什么？

全模态检索要把查询与候选集合匹配，二者均可为任意模态。为处理多任务，查询前拼接指令，形式为指令加任务定义再加查询内容，候选保持无指令原始形式。这种指令调优方式增强了模型的泛化能力，使同一模型能区分图像到文本、音频加文本到音频等不同任务。统一嵌入模型把带指令查询映射为查询向量，把候选映射为候选向量，二者在同一维度空间用温度缩放的余弦相似度比较。

训练采用难负例加权的批量内 InfoNCE 对比损失，论文报告温度设为 0.07，加权参数设为 0.5，同时辅以间隔为 0.1 的铰链三元组损失提供判别信号。作为例子，查询可以是二胡视频加二胡声音加改为小提琴的文本，候选可以是小提琴视频、音频、图像或描述句，模型必须理解修改意图而非只匹配表面相似。该例子只是帮助理解输入输出形态，不代表论文报告了该样本的数值效果。
该定义的教学要点是区分原始目标与实现手段。

原始目标是让正例相似度高于所有负例，近似手段是用批量内负例代替全库负例，难负例加权让更难的负例获得更大梯度。指令的作用是区分任务，损失的作用是塑造空间。后续所有组件都服务于如何更便宜地得到更好的查询向量与候选向量。

### OmniRet 的全景数据流是怎样的？

OmniRet 以大语言模型为通用组合器。文本直接进入大语言模型，视觉与音频先经专用编码器，再经投影与重采样进入大语言模型的词嵌入空间，所有媒体 token 按查询模板交织排列。最后对大语言模型输出隐藏状态做聚合得到单嵌入向量，查询与候选共用同一模型编码。参数策略是冻结媒体编码器与大语言模型主体，只训练新增模块与注入大语言模型的低秩适配器，可训练参数总量约 84,000,000。编码器选择上，视觉用 SigLIP-SO400M-Patch14-384，音频用 QwenAudio 编码器，主干用 GTE-Qwen2-1.5B-Instruct，实现基于 LLaVA 代码库。

沿一个样本走完全程有助于记忆。底部查询框给出寻找相关内容的指令，视频占位符指向 3 帧演奏视频，图像占位符指向单帧人物图，音频占位符指向一段民族乐器声音波形并附带改为小提琴的文本。这些媒体先被各自编码器编码，再经共享重采样压缩，然后与指令文本一起进入大语言模型。顶部经池化得到查询向量，右侧候选侧的小提琴视频、声音与图像经同样流程得到候选向量，两侧用对比与三元组损失对齐，多样性损失约束中间重采样 token。

下段导读图二，该图是全文总装图，需沿箭头确认冻结与可训练边界以及 3 种损失的作用位置。重点观察左右对称结构与底部查询模板的占位符连线。

> **看图路径：** 1. 沿底部全模态查询框向上追踪视频图像音频占位符进入编码器的路径；2. 对比左右两侧查询嵌入与候选嵌入共用同一 OmniRet 框的对称结构；3. 观察左侧冰块与火焰图标区分冻结的编码器与可训练的投影器重采样器

[![原论文 Figure 2：Overall OmniRet architecture.](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/b0edfd049bcd/figure-2.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/b0edfd049bcd/figure-2.png)

*论文图 2。原论文 Figure 2：“Overall OmniRet architecture. Our universal retrieval model integrates specialized visual and audio encoders with a Large Language Model acting as a cross-modal composer.”。*

图二左侧用图标区分冻结与可训练。视觉与音频编码器冻结，视觉与音频投影器、共享媒体重采样器、注意力切片池化与低秩适配器可训练。中间绿色大框为 OmniRet 主体，自下而上依次为编码器、投影器、重采样器、大语言模型加低秩适配器、池化层，顶部输出查询向量。右侧粉色框为候选示例，包含小提琴视频、声音标注与图像及描述句。顶部虚线表示查询嵌入与候选嵌入之间的对比与三元组损失，左侧虚线表示多样性损失作用于重采样矩阵。读懂该图即掌握复现时需要冻结谁、训练谁、在哪里加损失。

### 重采样器如何压缩，池化器如何保真？

共享媒体重采样器是连接媒体 token 与大语言模型输入空间的中间层，采用感知器架构。它把大量媒体 token 压缩为少量固定隐向量。共享隐向量跨所有媒体类型共用以增强泛化，模态特有隐变量分别对应视觉与音频并与共享查询相加，使模块对模态类型敏感。视频输入先做 3 维三线性插值降低帧冗余，再与其他媒体 token 一起作为键值进入交叉注意力。

为保证压缩后 token 携带多样信息，作者对重采样输出矩阵计算成对相似度，去掉负值并减去单位阵去除自相似，再经丢弃采样后用平滑 L1 施加正交性约束，该丢弃机制使每步只在随机子集上计算损失，论文报告伽马设为 0.5 以抑制离群大相似度的梯度爆炸。

**共享媒体重采样器 × 模态特有隐变量：** 共享媒体重采样器负责把视觉和音频编码器输出的数百个 token 压缩为固定少量的隐向量以降低大语言模型计算量，模态特有隐变量负责在共享查询向量上叠加视觉或音频偏置以保留模态敏感性，二者搭配的原因是完全共享有利于跨模态泛化但会抹平模态差异，组合后形成共享计算路径加模态适配偏置的机制。

注意力切片 Wasserstein 池化负责高保真聚合。它先用与重采样器相同的注意力重采样把大语言模型输出的完整序列压缩为少量隐嵌入集合，再把该集合看作分布，与一组可学习参考点在多个 1 维投影方向上比较，计算 1 维 Monge 耦合得到类似可学习直方图的描述子。由于该描述子维度大于目标嵌入维度，再经逐列软评分加直通最大估计器的硬选择做聚合。前向等价于独热掩码，后向允许梯度经软评分回流，最后经逐元素乘与按列求和得到定长向量。实践中直接学习切片参考，论文报告默认投影数与参考数取 4096 与 128 的组合。

**大语言模型组合器 × 注意力切片 Wasserstein 池化：** 大语言模型组合器负责把指令文本与重采样后的媒体 token 交织建模并输出富含上下文的隐藏状态序列，注意力切片 Wasserstein 池化负责把该序列看作分布并与可学习参考点比较后聚合成单个检索向量，二者搭配的原因是前者擅长跨模态推理但输出仍是变长序列，后者则在保持单向量检索效率的同时保留分布级细粒度结构。

下段导读图三，该图左右分别给出两个模块的内部计算块，是复现时对照维度与残差连接的关键。需要区分进入大语言模型之前与离开之后的 2 次压缩。

> **看图路径：** 1. 先看左侧底部共享隐变量与媒体隐变量相加作为查询的入口；2. 再看交叉注意力以媒体 token 为键值的压缩方向与两次残差堆叠；3. 最后看右侧从隐藏状态经感知器到投影再到 Monge 耦合与逐切片最大池化的聚合链

[![原论文 Figure 3：Left: Our Shared Media Resampler condenses the out- put of media encoders into a compact set of…](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/b0edfd049bcd/figure-3.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/b0edfd049bcd/figure-3.png)

*论文图 3。原论文 Figure 3：“Left: Our Shared Media Resampler condenses the out- put of media encoders into a compact set of latent vectors before they are fed to the LLM.”。*

图三左侧显示底部共享隐变量与媒体隐变量相加作为查询，媒体 token 拼接后作为键值进入交叉注意力，再经前馈与 2 次残差加层归一化输出重采样 token。右侧显示底部隐藏状态经感知器得到集合，再经投影与切片参考进入 Monge 耦合，最后经逐切片最大池化得到嵌入。注意左右两侧共用感知器思想。左侧压缩进入大语言模型之前的信息，右侧压缩离开大语言模型之后的信息，二者共同决定效率与保真的权衡点。

### 两阶段训练与音频基准构造各做什么？

训练分 2 个阶段。第一阶段为预热，只在简单单模态与文本绑定任务上训练，排除视频与组合查询数据集，只训练投影器、重采样器与池化层，大语言模型保持冻结，用 2,000,000 样本、批量 2048 训练。第二阶段为微调，在全部数据集与任务上继续训练约 18,000,000 样本，视频媒体隐变量由图像媒体隐变量初始化，除第一阶段可训练模块外，对大语言模型施加秩 16、缩放 64 的低秩适配器，批量 3072 但每批只选 4 个随机任务并用两步梯度累积保持稳定。数据采样器平衡任务间样本数，每任务随机选 1 至 2 个数据集。最终损失为对比损失加三元组损失加 0.1 权重的多样性损失的线性组合。

**对比损失 × 三元组损失：** 对比损失负责在批量内用难负例加权的 InfoNCE 把正查询候选拉近、把众多负例推远，三元组损失负责对每个负例施加间隔约束以提供更强的判别信号，二者搭配的原因是对比损失提供全局批量分布信号而三元组损失补足局部难例边界，组合后共同优化查询向量与候选向量的共享空间。

音频为中心基准的构造是本文另一条主线。音频源选用 VGG-Sound，因其含大量野外音视对应且类别覆盖约 310 类，适合同时构造组合音频与音视任务。先按类别每类随机选 30 个音视对，共采样 9270 对作为代表子集。用 QwenOmni2.5 为每段音频生成字幕，再用语句相似度与 CLAP 音频嵌入做双重过滤，为每条查询音频找 3 至 5 个语义相近但不相同的目标，要求字幕相似度在 0.6 至 0.8 之间且相邻目标的文本与声学差异大于 0.05，最终保留 1292 条查询音频与 4251 条目标音频。

对每对查询目标用思考模式的 Gemini2.5-Flash-Lite 根据字幕生成描述差异的修改句，形成查询音频加修改文本到目标音频的三元组。同时复用 1292 条查询音频与其原始视频及中间帧图像构造音频到视频与音频到图像任务，剩余未被选为查询的样本加入候选池，形成 1292 个查询与 5480 个候选。

**组合音频检索 × 音频视觉检索：** 组合音频检索负责评测音频加修改文本到目标音频的组合理解能力，音频视觉检索负责评测音频到图像或视频的跨模态对应能力，二者搭配的原因是前者检验组合推理后者检验异构对齐，组合后共同构成音频为中心的全面评测，弥补已有基准只有图文组合的缺口。

该节的复现要点是区分训练计算与基准构造计算。前者是梯度优化过程，后者是生成字幕、过滤与生成修改文本的数据流水线，二者监督来源不同，不可混为一谈。训练用对比与三元组监督，基准构造用生成模型加人工抽检保证质量。

### 在什么数据、协议与基线下比较？

训练数据在 M-BEIR 基础上扩展文本、图像、视频、音频检索数据集，新增 MTEB 中 7 个文本检索集、3 个图文交互集、5 个视频文本集、4 个音频文本集与 VGGSound 音视集，共 30 个数据集。论文报告全量聚合约为 600 万查询目标对，另一处表述为约 620 万查询候选对，两处数字的统计口径存在细微差异，复现时应以补充材料中的数据集分布为准。评测除自建音频基准外，还用扩展版 M-BEIR 与 MMEBv2 子集。M-BEIR 扩展音频文本与视频文本交互，按分组平均而非全局候选池，多数用召回率前 5，FashionIQ 与 Fashion200K 用前 10。

MMEBv2 比较分类、检索与视频时刻检索，用召回率前 1。自建基准报告召回率前 5。基线分组保留文本绑定预训练模型与多任务微调模型，音频侧保留 CLAP 与 MMT，多任务侧保留 CLIPSF、MMEmbed 与 VLM2VecV2，音频基准侧比较 ImageBind、ViT-Lens、OmniBind 与 QwenOmni 加 Gemma 的多阶段文本流水线。
下段导读图四，用一个具体样本理解组合音频任务的输入输出形态，避免把修改文本当成普通字幕。该图是理解基准构造质量的关键单样本展示。

> **看图路径：** 1. 先读左侧查询音频的文字描述与右侧目标音频的文字描述；2. 再看底部修改文本如何逐条说明增加移除与变化；3. 最后核对图中增加移除变化三类颜色图例与文本颜色的对应关系

[![原论文 Figure 4：A composed audio retrieval example from our ACM benchmark where query composes both audio and text…](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/b0edfd049bcd/figure-4.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/b0edfd049bcd/figure-4.png)

*论文图 4。原论文 Figure 4：“A composed audio retrieval example from our ACM benchmark where query composes both audio and text modalities.”。*

图四左侧查询音频描述为狗吠加烟雾探测器蜂鸣叠加音乐背景，右侧目标音频描述为警笛长鸣加狗嚎叠加音乐背景，底部修改文本明确写出狗吠变嚎叫、蜂鸣消失、新增警笛三处变化，并用增加、移除、变化三色图例标注。该例子说明组合音频检索要求模型同时理解源音频内容与文本描述的编辑操作，而非仅匹配关键词。论文报告人工在 100 道三选一题目上达到 87% 准确率，纯文本输入的 Gemini 达到 96%，报告显示合成字幕与修改文本具有足够描述力但任务仍非平凡。

### 主结果在公平条件下说明什么？

比较的问题是：在保持单向量高效检索形态下，OmniRet 是否在已有的图文任务上不掉队，并在新增的音频视频与组合任务上取得优势。公平条件是分组比较：文本绑定组只看双模态对齐，多任务组比较同为多任务微调且主干小于 7,000,000,000 参数的模型，其中 MMEmbed 因用更大主干仅供参考。指标方向均为召回率越高越好。论文报告 OmniRet 在 1.5B 主干下于音频文本、视频文本与组合任务上领先，常大幅超出同尺寸模型，在图像到图像上未胜出。

作者报告在扩展 M-BEIR 的 13 任务中有 12 项领先，在 MMEBv2 视频分类检索与时刻检索上达到领先且图像检索保持中位竞争力，在自建基准的组合音频任务上显著优于单阶段基线。
下表为自建音频基准的性能比较，需先确认任务列含义再读数字，重点看组合任务与音视任务的权衡。该表包含组合音频与音频到视频图像等五列结果。

| QwenOmni [76] + Gemma [68] | 44.6 | 3.3 | 6.3 | 4.4 | 5.4 |
| --- | --- | --- | --- | --- | --- |
| ImageBind [16] | 7.32 | 35.5 | 36.3 | 30.1 | 29.7 |
| OmniRet | 23.0 | 35.5 | 34.4 | 24.5 | 26.0 |

表后解释主要收益与具体代价。多阶段文本流水线在组合音频任务上可达 44.6，但需先用音频字幕模型转写再用文本嵌入检索，计算链长且在音视任务上跌至个位数，原因是转写为文本破坏了音频与视觉的模态绑定。ImageBind 类模型在音频到视频与音频到图像上保持约 30 至 36 的水平，显示其音视对齐能力强，但组合音频任务仅 7.32 至 15.6，表明缺乏组合理解能力。OmniRet 在组合音频取得 23.0，在音频到视频保持 35.5 持平最优，在其余音视任务保持 24 至 34 区间，论文报告支持其兼顾组合与对齐的判断。

限制是该表未报告延迟与存储成本，不能据此承诺推理更快。且不同任务候选池与指标聚合方式不同，不可跨列直接相减排名。
未胜出项必须正视。图像到图像检索落后于 PE-Core 等专用模型，音频到图像也略低于 ImageBind 与 OmniBind，说明共享压缩与小主干在细粒度视觉区分上仍有损失，这是后续扩展数据与主干的动机。

### 拿掉每个组件后性能如何变化？

消融的问题是：在 1M 样本、6 任务平均召回的受控条件下，哪个模块对最终质量贡献最大。条件是资源密集型设置减半批量加倍步数以公平比较，默认配置为共享媒体重采样器加注意力切片池化加 3 种损失。指标方向为平均召回越高越好，变化列为相对基线的百分点差值。下表报告了基线 50.2 条件下各变体的平均召回与差值，覆盖池化、重采样器与损失 3 组对照。

| Our Baseline | 50.2 | 0.0 |
| --- | --- | --- |
| Single [EOS] Vector | 43.4 | -6.8 |
| Multi (16) Vectors | 49.8 | -0.4 |
| Average Pooling | 20.7 | -29.5 |
| Learnable Weighted Sum | 48.5 | -1.7 |
| Maximum Pooling | 49.2 | -1.0 |
| No Resampler | 46.7 | -3.5 |
| Separated Resamplers | 49.9 | -0.3 |
| Shared Resampler W/o Media Latents | 49.8 | -0.4 |
| W/o | 49.7 | -0.5 |
| W/o | 47.1 | -3.1 |

表后解释主要发现与反证。用单个句尾向量代替池化平均召回从 50.2 降至 43.4，下降 6.8，支持单向量简单压缩丢失信息的判断。用 16 向量晚交互为 49.8，仅低 0.4，但需更小批量限制难负例采样且不兼容单向量索引，因此不是可部署的免费收益。池化内部比较中，平均池化跌至 20.7，说明正负距离相消是灾难性的。可学习加权求和与最大池化分别低 1.7 与 1.0，而直通最大估计器最优，支持其改善梯度流动的解释。

重采样侧，无重采样器降至 46.7，下降 3.5，主因是批量被迫减小。分离重采样器与无媒体隐变量的共享重采样器分别低 0.3 与 0.4，支持共享数据加保持特异性的设计。损失侧，去三元组仅降 0.5，去多样性降 3.1，表明重采样 token 多样性约束至关重要。投影数与参考数越大越好，但以计算为代价，4096 与 128 为权衡点。未评测边界是消融仅在子规模训练下进行，不能直接推广到全量训练的绝对数值。

### 哪些结论还不能下，边界在哪里？

作者明确报告三点局限。第一，受资源限制未用更大主干与更多训练数据做扩展，预期扩大规模会显著提升，但本文未验证该趋势。第二，工作聚焦模态扩展，未像 MMEBv2 那样扩展任务类型与输入类型，深度图、3 维点云、语音等未纳入统一训练，未来需在更大规模上联合更多任务。第三，自建音频基准可扩展到更复杂的交错混合媒体文档检索，当前仅覆盖组合音频与音视两类。这些是缺失证据而非技术错误，相关性不等于因果，不应把总体趋势解读为每组每步都成立。

从学习角度还需补两项验证。一是未测量误判率、延迟与实际推理成本，不能承诺效率与保真同时在延迟上最优，训练资源、推理开销与输出延迟应分别讨论。二是合成基准的人评仅 100 题 3 人标注，报告准确率但未报告一致性与错误类型分布，音乐与细粒度声学变化的稳定性待验证。复述时应使用报告显示表达已测结果，用支持表达有限解释，用可能待验证表达推测。

### 复现先做什么，需要哪些可运行条件？

复现应先准备数据与评测，再搭模型，最后按 2 阶段训练。数据侧需按补充材料复现 30 数据集分布与采样器，保证每批任务平衡。音频基准需复现字幕生成、双重过滤阈值与修改句生成提示词，并保留查询与候选的划分。模型侧需冻结视觉音频编码器与大语言模型主体，只放开投影器、共享重采样器、池化层与低秩适配器，注意视频先做 3 维插值、视频媒体隐变量由图像初始化。训练侧先跑 2,000,000 样本预热排除视频与组合任务，再跑全量微调并用梯度累积维持大批量。

评测侧严格按分组与指标：扩展 M-BEIR 看分组平均召回，MMEBv2 看分类检索与时刻检索，自建基准看召回前 5。
下表整理训练与基准构造的规模证据，用于核对复现时应准备的数据量级。比较问题是训练量、采样量、查询量与候选量是否自洽，所有数字保留原文写法。

| 阶段 | 对象 | 规模数值 1 | 规模数值 2 | 原文表述 |
| --- | --- | --- | --- | --- |
| 全量训练聚合 | 查询目标对跨数据集 | approximately 6 million query-target pairs | spanning 30 datasets | 训练聚合量级 |
| 全量训练聚合 | 查询候选对 | approximately 6.2 million query-candidate pairs | spanning 30 datasets | 另一处统计口径 |
| 基准代表子集 | 采样音视对 | 9,270 pairs | — | 代表子集采样 |
| 组合音频过滤后 | 查询音频数 | 1,292 audios | 4,251 target audios | 查询与目标音频 |
| 音视检索池 | 查询与候选总量 | 1,292 queries | 5,480 total candidates | 查询候选池划分 |

表后解释规模含义与代价。训练聚合量级决定了 2 阶段中预热 200 万与微调约 18,000,000 样本的可行性，批量 2048 至 3072 配合任务平衡采样是对比学习的关键。基准侧从 9270 对经双重多样性过滤收敛到 1292 查询与 4251 目标，说明过滤条件严格且每个查询保留 3 至 5 个目标，音视池的 5480 候选包含未被选为查询的剩余样本，复现时需按同样流程划分查询与候选，不可直接用全量 VGG-Sound 代替。代价是合成字幕与修改文本依赖外部大模型，质量经人工抽检但未报告误判率分布，待验证其在音乐等细分类上的稳定性。

### 何时值得尝试 OmniRet 路线？

当检索查询同时包含音频与图文修改意图，且必须用单向量索引支撑大规模在线检索时，OmniRet 路线值得尝试。重采样器解决长媒体序列的效率瓶颈，分布型池化在单向量内保留细粒度，指令模板使同一模型覆盖多任务。若任务仅为纯图像到图像或纯文本检索，且已有专用模型精度更高，则不必强行切换，本文在该类任务上并未胜出。若候选库以音视对应为主而无组合需求，ImageBind 类对齐模型已足够，组合能力带来的额外训练与推理复杂度可能不划算。

对研究生而言，可复述的方法链是：长媒体 token 经共享加特有隐变量压缩进入大语言模型，大语言模型输出序列经分布与参考比较再硬选聚合为单向量，对比加三元组加多样性三损失联合优化，2 阶段由简到繁训练，音频基准由采样过滤加合成修改句构造。记住该链条与各处的公平比较条件，即可在组会上讲清效率与保真的矛盾是如何被分工解决的，以及剩余的规模与任务广度边界在哪里。
资源状态是正文开源声明的唯一依据。

本次收到的资源状态为可用，项目页链接当前可用，状态码 200，可用于获取代码与基准细节。若后续链接不可达，应以本次未能确认可达表述，不推定权重下载或系统可运行。关键超参数需保留：对比温度 0.07、难负例权重 0.5、三元组间隔 0.1、多样性权重 0.1、低秩秩 16 缩放 64、池化投影 4096 参考 128。缺项是原文未给出全部优化器细节与硬件预算，复现时需以官方实现为准，不从模型名称推定实现。

## 📐 原文公式与排版

以下展示论文原页中的数学表达区域，保留原始上下标、分式和符号排版。区域序号仅用于本文导航，不是论文公式编号。

[![原文数学表达区域 1，PDF 第 3 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/2d6fcae25a72/figure-1.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/2d6fcae25a72/figure-1.png)

区域 1 · [查看论文原页](https://openaccess.thecvf.com/content/CVPR2026/papers/Huynh_Efficient_and_High-Fidelity_Omni_Modality_Retrieval_CVPR_2026_paper.pdf#page=3)

[![原文数学表达区域 2，PDF 第 4 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/2d6fcae25a72/figure-2.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/2d6fcae25a72/figure-2.png)

区域 2 · [查看论文原页](https://openaccess.thecvf.com/content/CVPR2026/papers/Huynh_Efficient_and_High-Fidelity_Omni_Modality_Retrieval_CVPR_2026_paper.pdf#page=4)

[![原文数学表达区域 3，PDF 第 4 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/2d6fcae25a72/figure-3.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/2d6fcae25a72/figure-3.png)

区域 3 · [查看论文原页](https://openaccess.thecvf.com/content/CVPR2026/papers/Huynh_Efficient_and_High-Fidelity_Omni_Modality_Retrieval_CVPR_2026_paper.pdf#page=4)

[![原文数学表达区域 4，PDF 第 8 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/2d6fcae25a72/figure-4.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/2d6fcae25a72/figure-4.png)

区域 4 · [查看论文原页](https://openaccess.thecvf.com/content/CVPR2026/papers/Huynh_Efficient_and_High-Fidelity_Omni_Modality_Retrieval_CVPR_2026_paper.pdf#page=8)

[![原文数学表达区域 5，PDF 第 8 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/2d6fcae25a72/figure-5.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/2d6fcae25a72/figure-5.png)

区域 5 · [查看论文原页](https://openaccess.thecvf.com/content/CVPR2026/papers/Huynh_Efficient_and_High-Fidelity_Omni_Modality_Retrieval_CVPR_2026_paper.pdf#page=8)

[![原文数学表达区域 6，PDF 第 8 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/2d6fcae25a72/figure-6.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/2d6fcae25a72/figure-6.png)

区域 6 · [查看论文原页](https://openaccess.thecvf.com/content/CVPR2026/papers/Huynh_Efficient_and_High-Fidelity_Omni_Modality_Retrieval_CVPR_2026_paper.pdf#page=8)

[![原文数学表达区域 7，PDF 第 8 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/2d6fcae25a72/figure-7.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/2d6fcae25a72/figure-7.png)

区域 7 · [查看论文原页](https://openaccess.thecvf.com/content/CVPR2026/papers/Huynh_Efficient_and_High-Fidelity_Omni_Modality_Retrieval_CVPR_2026_paper.pdf#page=8)

另有 25 个候选区域因边界不明确或图片数量、尺寸限制未展开；请[查看完整论文](https://openaccess.thecvf.com/content/CVPR2026/papers/Huynh_Efficient_and_High-Fidelity_Omni_Modality_Retrieval_CVPR_2026_paper.pdf)中的原始排版。

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。
- 评分规则：type-aware-v1
- 评分模型：muse-spark-1.3-contributor
- 评分请求协议：openai_responses

---

[← 返回 cvpr-2026 论文汇总](/posts/conference-cvpr-2026/)
