---
title: "SwanWeave:One-Stage Multi-Task Instruction-Guided 3D Spatial Audio Editing"
date: 2026-09-08
draft: false
tags: [空间音频渲染, 混合专家模型, 空间音频信号, 偏好优化, 流匹配]
categories: [论文速递]
description: "SwanWeave 针对 FOA 四通道声场的指令编辑任务，用可控房间仿真构造 125K/类单操作与 250K 复合操作的源-目标配对监督，以潜空间流匹配为生成器，配合双层路由的 SE-MoE 与面向错编负样本的 SPO 偏好对齐及分阶段课程，实现一阶段复合编辑，并在客观与人评上一致优于现有通用与立体声编辑基线，代价是依赖仿真数据与约 10 秒短场景。"
hiddenInHomeList: true
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_arxiv_id: "2609.04975"
paper_digest_workbench_contract: "researcher-workbench-v1"
paper_digest_reader_title: "一步到位改三维声场：SwanWeave 为何把事件、空间、运动与房间一起学"
paper_digest_original_title: "SwanWeave:One-Stage Multi-Task Instruction-Guided 3D Spatial Audio Editing"
paper_digest_arxiv_version: null
paper_digest_arxiv_versioned_id: null
paper_digest_arxiv_abs_url: "https://arxiv.org/abs/2609.04975"
paper_digest_arxiv_pdf_url: "https://arxiv.org/pdf/2609.04975.pdf"
paper_digest_primary_task: "空间音频渲染"
paper_digest_taxonomy_contract: "paper-taxonomy-flat-tags-compat-v1"
paper_digest_taxonomy_selection_contract: "paper-taxonomy-selection-v1"
paper_digest_taxonomy_registry_version: "paper-taxonomy-v1"
paper_digest_taxonomy_registry_sha256: "15c82a567ce5a55dc1175684ed08b64c158558639d9c8fb822c9587ec32a8778"
paper_digest_taxonomy_concepts: [{"facet":"task","id":"task.spatial-rendering","label":"空间音频渲染"},{"facet":"method","id":"method.moe","label":"混合专家模型"},{"facet":"signal","id":"signal.spatial-audio","label":"空间音频信号"},{"facet":"method","id":"method.preference-optimization","label":"偏好优化"},{"facet":"method","id":"method.flow-matching","label":"流匹配"}]
paper_digest_primary_method: "混合专家模型"
paper_digest_score: 6.7
paper_digest_rank_bucket: "前50%"
paper_digest_document_type: "方法研究"
paper_digest_one_sentence: "SwanWeave 针对 FOA 四通道声场的指令编辑任务，用可控房间仿真构造 125K/类单操作与 250K 复合操作的源-目标配对监督，以潜空间流匹配为生成器，配合双层路由的 SE-MoE 与面向错编负样本的 SPO 偏好对齐及分阶段课程，实现一阶段复合编辑，并在客观与人评上一致优于现有通用与立体声编辑基线，代价是依赖仿真数据与约 10 秒短场景。"
paper_digest_authors: [{"affiliations":["Zhejiang University"],"name":"Ke Lei"},{"affiliations":["Zhejiang University"],"name":"Chenyuhao Wen"},{"affiliations":["ByteDanceEqual contribution"],"name":"Yu Zhang"},{"affiliations":["Zhejiang University"],"name":"Wenxiang Guo"},{"affiliations":["Zhejiang University"],"name":"Changhao Pan"},{"affiliations":["Zhejiang University"],"name":"Sashuai Zhou"},{"affiliations":["Zhejiang University"],"name":"Yongshi Li"},{"affiliations":["ByteDanceEqual contribution"],"name":"Ruiqi Li"},{"affiliations":["Zhejiang University"],"name":"Ruofan Hu"},{"affiliations":["Zhejiang University"],"name":"Haorui Xu"},{"affiliations":["ByteDanceEqual contribution"],"name":"Xiang Yin"},{"affiliations":["Zhejiang University","Corresponding author"],"name":"Zhou Zhao"}]
paper_digest_abstract_sha256: "f4a28fc528dd0ee1039d821172be899382e40294d7be9703df6175aab1af7f9f"
paper_digest_sidecars: {"citation.bib":{"sha256":"cc9f15261950eb3a8af277cbbf73f6fb24b36b887dc588df6272ba0e24c2eeb6","url":"/audio-paper-digest-blog/data/papers/2026-09-08/2609-04975/citation.bib"},"citation.json":{"sha256":"7eabd114c50af3052b34f569772416eded334a04ec02e40bb5d238e141158b8f","url":"/audio-paper-digest-blog/data/papers/2026-09-08/2609-04975/citation.json"},"citation.ris":{"sha256":"7cc2df6c0828739ade842640ea0160caa68bbe28d248f9b5d5603d785ef70197","url":"/audio-paper-digest-blog/data/papers/2026-09-08/2609-04975/citation.ris"},"rethink-context.json":{"sha256":"6e864f661b79a8ccec354bb02e3346c24576e31043dd534f35bdfdb16b833bcc","url":"/audio-paper-digest-blog/data/papers/2026-09-08/2609-04975/rethink-context.json"}}
paper_digest_api_reader_contract: "beginner-researcher-v3"
paper_digest_api_reader_article_sha256: "c64469cffcd936f3f692b1da495735daa24e8177a40aa3db5f8bea8b17078990"
paper_digest_api_reader_plan_sha256: "e64a98866245f539b6616ef6dc8663e59a823ea2dd617d9e908390da6fcb5640"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings-v4"
paper_digest_api_reader_source_bindings_sha256: "f45fae2e93cba4af93b7d432b4236eba63cd20c4dcf92a8fab8c107a8efcb326"
paper_digest_api_reader_source_table_count: 4
paper_digest_api_reader_source_formula_count: 3
paper_digest_api_reader_structured_artifacts_sha256: "4b84bc4e947f0336ce98a7b486e7aa6984eccb75dcf809afc1c2ac869ecfe9bc"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity-v1"
paper_digest_api_reader_author_identity_sha256: "792bf792cc0b62eadf613693874b342744e6caf6da169c388a39e6602d8f72df"
paper_digest_api_reader_author_count: 12
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity-v1"
paper_digest_api_reader_resource_identity_sha256: "ed53e0b86e703b23a20d3bddd17b617547b719bee75bbf010f6175f060002d97"
paper_digest_api_reader_resource_count: 0
paper_digest_api_reader_figure_persistence: "ephemeral-no-persisted-figure-assets-v1"
paper_digest_api_reader_decision_projection: "api-reader-decision-projection-v2"
---

# 📄 一步到位改三维声场：SwanWeave 为何把事件、空间、运动与房间一起学

> 英文题目：*[SwanWeave:One-Stage Multi-Task Instruction-Guided 3D Spatial Audio Editing](https://arxiv.org/abs/2609.04975)*

> 标签：#空间音频渲染 | #混合专家模型 | #空间音频信号 | #偏好优化 | #流匹配
>
> 评分：**6.7/10** | 创新 1.4/2 | 技术严谨 1.2/1.5 | 实验充分 1/1.5 | 清晰度 0.8/1 | 影响力 1/1.5 | 开源 0/1.5 | 可复现 0.1/0.5 | 工程/实践 1.2/1.5


## 👥 作者与机构

- Ke Lei：Zhejiang University
- Chenyuhao Wen：Zhejiang University
- Yu Zhang：ByteDanceEqual contribution
- Wenxiang Guo：Zhejiang University
- Changhao Pan：Zhejiang University
- Sashuai Zhou：Zhejiang University
- Yongshi Li：Zhejiang University
- Ruiqi Li：ByteDanceEqual contribution
- Ruofan Hu：Zhejiang University
- Haorui Xu：Zhejiang University
- Xiang Yin：ByteDanceEqual contribution
- Zhou Zhao：Zhejiang University；Corresponding author

## 📌 核心摘要

该工作处理指令引导的3D一阶Ambisonic空间音频编辑，输入为4通道FOA源波形与自然语言指令，输出为执行编辑后保留无关事件与房间特性的目标FOA，难点在于事件语义、方位/距离、时变轨迹与混响在波形层面强耦合且需一阶段完成复合指令的联合声学变换。第一步负责从开源语音与音效语料通过可控房间仿真生成源-指令-目标三元组及场景字幕，用于提供成对监督，生成的数据传递至下一步的表征学习。第二步用于在FOA变分自编码器潜空间以扩散Transformer做条件流匹配编辑，将源潜变量与加噪目标拼接并通过交叉注意力融合指令条件，得到的潜编辑结果送入下一步的专家路由。第三步负责以空间编辑混合专家实现双层路由，其中任务级路由用于复合指令的专家组合选择而帧级路由与空专家用于局部编辑决策，路由后的特征进入下一步的偏好对齐。第四步用于以空间偏好优化对错误编辑与无操作负样本做直接偏好优化对齐并配合阶梯式分类器无关引导，优化后的潜变量传递至解码器解码输出最终FOA波形。与现有通用编辑器相比，关键差异在于直接学习复合指令的一阶段源到目标变换而非串行执行原子操作，并在潜空间显式分离任务与局部路由以减少重建与空间误差的累积。在论文报告的评测设置下，本文方法相较SmartDJ的FD指标从8.47降至5.47，方向为更低。适用边界是：结论在基于PyRoomAcoustics的合成鞋盒房间与受控仿真分布内验证，对真实录音、遮挡与不规则房间响应的泛化尚未检验。成本方面，推理单样本平均耗时1.17秒优于SmartDJ的4.23秒，原文未披露训练硬件配置与总时长细节。

## 🔗 开源与复现资源

本次未形成可展示的已核验资源记录，开放状态尚未核实。

可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 任务在改什么：已有声场的定向修改与必须保留什么

输入是已有的 3 维声场与一句自然语言编辑指令，目标是输出改后仍为 3 维声场的波形。论文把声场限定为 1 阶 Ambisonics，简称 FOA，用 4 通道波形表示，长度记为 T，4 个通道共同编码方向与房间信息。编辑不是从零生成：模型拿到源 FOA 与指令 c，要生成目标 FOA，使得指令要求的变化已体现在最终声学后果中，而与指令无关的事件内容、轨迹与房间上下文应尽量保持。

为让初学者抓住边界，论文把可编辑维度归为四轴。第一轴是音频事件，指场景中出现什么声，例如添加、移除、替换、抽取、增强或衰减某个事件。第二轴是空间信息，指声源在 3 维空间的静态属性，例如方位角、仰角、距离与整体布局。第三轴是动态变化，指随时间连续演进的属性，例如增益的渐变、方位角的弧线运动与距离的远近运动。第四轴是环境信息，指房间声学条件，例如感知到的房间大小与混响。指令可能同时触及多轴，例如把人群从前方移到右侧并在左侧加入 1 次拨弦，这就要求模型同时处理重定位与事件添加，且未被提及的喇叭声应保持在原处。

这类编辑的难点在于四轴在波形层面是耦合的。把声源移远不仅改变方向增益，还会改变能量、方向性、混响与对其他声源的掩蔽。论文因此强调，复合指令应被学习为从源到最终目标的直接变换，而不是拆成多次独立操作再串行执行。评估时既要看语义与频谱保真，也要看空间保真，且人评要同时权衡音质与指令跟随度。

### 同类工作在哪个输入与输出上做编辑，本文与它们的分工有何不同

在通用音频编辑一侧，已有工作以文本到音频的生成先验为基础，做输入音频加指令到编辑后音频的映射。AUDIT 构造输入音频、指令与编辑后音频的三元组，用潜扩散模型覆盖添加、删除、替换、修复与超分等操作。ZETA 与 ZEUS 探索基于 DDPM 逆向的零样本编辑，AudioEditor 则把扩散逆向技术用于免训练编辑并关注精确修改与未改区域保持。SmartDJ 更接近空间编辑，它面向立体声场景，用音频语言模型做规划器把高层请求分解为依次执行的原子操作，再由扩散编辑器执行。这些方法的编辑空间主要停留在语义或立体声层面，未把 3 维空间属性、动态轨迹与房间声学变换当作可编辑控制量联合建模。

在空间音频生成与空间化一侧，研究涵盖从视觉或几何上下文生成空间声、把单声道转为双耳或空间声、以及基于文本或多模态输入的空间音频生成。另一条线做空间音频表示与空间-语言对齐，例如带事件与方向标签的空间数据集与在表示空间做方向操纵的 SALM。这些工作有助于理解、定位、空间化或生成，但不直接解决对已有 3 维声场景的指令级波形编辑。

SwanWeave 的定位是直接对已有 FOA 场景做波形级编辑，并在 1 次前向中完成复合空间指令的全部声学后果。输入是 4 通道 FOA 与自然语言，输出仍是 4 通道 FOA；监督是成对的源与最终目标，而非中间步骤序列。这一设定把事件、空间、动态与环境当作耦合编辑空间统一处理，与上述两类工作在输入通道、输出域与监督形态上形成对照。

### 问题形式化：从源 FOA 与指令到目标 FOA 的一阶段映射

形式化上，记源与目标 FOA 为 a_src 与 a_tgt，维度为 4×T，T 为波形长度，c 为编辑指令。编辑器记为 F_theta，满足 a_tgt_hat 等于 F_theta(a_src,c)。训练时提供三元组(a_src,c,a_tgt)，其中 a_tgt 已包含指令要求的全部声学后果，模型不观测中间操作。测试时同样给定源 FOA 与指令，模型直接预测最终 FOA，再经解码得到波形。

论文把任务按四轴组织：音频事件的增删改抽与增益控制，空间信息的方位、仰角、距离与布局编辑，动态变化的增益渐变与角度或距离轨迹，环境信息的房间大小与混响改变。复合编辑可能同时改变多轴，例如替换声源并移远，或改变房间大小同时保持所有事件与布局不变。关键约束是未提及的声源应保持内容、轨迹与房间上下文的一致性。

**1 阶段编辑 × 多阶段串行编辑：** 1 阶段编辑指模型直接从源 FOA 与复合指令映射到最终目标声场，1 次前向完成所有声学后果；多阶段串行编辑指把复合指令拆成若干原子操作依次执行、每次以前 1 次输出为输入。1 阶段避免中间重建与空间误差累积、能学习耦合的能量与混响变化，多阶段则便于复用现有编辑器但误差会逐级放大，SwanWeave 选择前者并用最终目标直接监督。

为帮助初学者建立直觉，下面用一个具体样本说明 1 阶段编辑的期望行为与图示对应关系。该样本的源场景包含前方人群与上方喇叭，指令要求人群弧线移到右侧并在左侧添加拨弦，理想输出需同时满足轨迹改变、新增事件定位准确且未改喇叭保持不变。

> **看图路径：** 1. 对比左右两个蓝色球面：左侧标注 Front 的人群与左上方喇叭，右侧人群沿绿色虚线弧线从 Front 移到 Right 并在 Left 新增红色吉他；2. 阅读中间编辑指令框中红色高亮的 arc around from front to right 与 add a strum to your left，确认同时涉及空间重定位与事件添加；3. 核对下方 Audio events 文字：左侧为 Crowd in front, car horn above，右侧变为 moves from front to right 并新增 strum in left，确认 car horn above 保持不变

[![原论文 Figure 1：Overview of SwanWeave, which follows natural-language instructions to edit FOA audio, such as…](https://arxiv.org/html/2609.04975v1/teaser-5.png)](https://arxiv.org/html/2609.04975v1/teaser-5.png)

*论文图 1。原论文 Figure 1:：“Overview of SwanWeave, which follows natural-language instructions to edit FOA audio, such as moving a crowd from the front to the right and adding a strum on the left while…”。*

图 1 左侧为原始 FOA 的球面示意，标注 Up、Down、Left、Right、Front、Back 与中心坐标系，球面上放置人群与喇叭图标；中间为编辑指令气泡与名为 SpatialEdit 的执行体，指令中红色高亮移动与添加要求；右侧为编辑后球面，人群图标沿绿色虚线弧线从 Front 移至 Right，Left 侧新增吉他图标，喇叭保持在原位。下方文字对照显示事件列表的变化与保持项。该图说明编辑需同时处理事件与空间，且未改事件应被保留，串行拆步执行则可能在中间重建中累积误差。

### 方法全景：潜空间流匹配编辑器如何组织输入、条件与输出

SwanWeave 不直接在波形域编辑长时 4 通道信号，而是在紧凑潜空间中完成变换。系统包含 FOA 编码器、指令编码器与带 SE-MoE 的流匹配潜编辑器。FOA 编解码采用立体声 FOA VAE，将源与目标波形映射为潜变量 z_src 与 z_tgt，形状为 L×d，L 为潜长度，d 为 128。指令 c 由预训练语言编码器编码，经交叉注意力注入编辑器。

生成骨干选用 Diffusion Transformer，原因是空间编辑需要在事件、时间区域与 FOA 通道间协调。由于 z_src 与带噪目标潜变量具有相同时间长度，模型在 Transformer 输入投影前沿特征维拼接二者，使自注意力能学习源场景与正在生成潜变量之间的帧级对应，交叉注意力则提供指令条件。编辑器以条件流匹配训练，学习从噪声到目标编辑后潜变量的向量场，直接匹配源到目标的 1 阶段监督。

**流匹配 × 潜空间编辑：** 潜空间编辑指先用 FOA VAE 编码器把 4 通道波形压缩为 L×128 的连续潜变量，在潜空间完成编辑再解码；流匹配指学习从高斯噪声到目标潜变量的向量场 v。潜空间降低了长时 4 通道波形的直接合成难度，让注意力专注于变换，流匹配则天然匹配源到目标的 1 阶段监督，二者结合使源潜变量可与噪声潜变量沿特征维拼接输入 Transformer，通过自注意力建立帧级对应、通过交叉注意力注入指令。

下面先看整体训练与推理管线的模块连接与参数冻结分工，再回到符号层面的映射定义。左侧管线展示了从 4 通道波形到潜变量再到编辑后波形的完整前向路径，右侧则展开 MoE 的双层路由结构。

> **看图路径：** 1. 沿左侧 Overall Pipeline 看主路径：Source FOA 的 W/Y/Z/X 四通道波形经冻结 VAE Encoder 得到 Original latent，与 Noisy latent 拼接送入可训练 Diffusion Transformer；2. 确认 Caption Encoder 冻结、Diffusion Transformer 内含 MoE block、Cross-attention 与 Self-attention 堆叠 N 层，timestep t 同时注入注意力与 MoE 路由；3. 在右侧 MoE Module 区分 Router 1 的 Caption conditioned 任务专家与 Router 2 的 Token conditioned 帧专家/空专家，最终两路加权求和输出

[![原论文 Figure 2：Overview of SwanWeave. The left panel shows the overall training and inference pipeline, and the…](https://arxiv.org/html/2609.04975v1/model-3.png)](https://arxiv.org/html/2609.04975v1/model-3.png)

*论文图 2。原论文 Figure 2:：“Overview of SwanWeave. The left panel shows the overall training and inference pipeline, and the right panel shows the SE-MoE module with instruction-level task routing and…”。*

图 2 左侧 Overall Pipeline 展示：上方 Source FOA Audio 的 W、Y、Z、X 4 通道波形经冻结的 VAE Encoder 得到 Original latent，与 Noisy latent 拼接后进入可训练的 Diffusion Transformer，Transformer 内部堆叠 N 层的 Self-attention、Cross-attention 与 MoE block，timestep t 同时注入；Caption Encoder 冻结并接收 Editing Instruction；输出 Target latent 经冻结的 VAE Decoder 还原为 Target FOA Audio 的 4 通道波形。右侧 MoE Module 区分两路路由：Router 1 基于 Caption embedding 选择 Task Experts，Router 2 基于 Token feature 选择 Routed/Null Experts，两路输出加权求和。该图明确了冻结与可训练参数的分工以及双层路由的汇合方式。

在符号层面，编辑器的 1 阶段映射可写作源 FOA 与指令到目标 FOA 的函数。

\[\hat{a}_{\mathrm{tgt}}=F_{\theta}(a_{\mathrm{src}},c),\]

该式中 a_src 与 a_tgt_hat 均为 4×T 的 FOA 波形，c 为自然语言指令，F_theta 为待学习编辑器。潜空间中的对应关系为 z_src 与 z_tgt 分别由编码器 E 对 a_src 与 a_tgt 编码得到，后续流匹配在 z 空间定义前向插值与速度回归目标。

### 关键组件：SE-MoE 的双层路由与 SPO 的编辑特异偏好对齐

异构编辑空间对单一前馈模块提出挑战：插入事件、重定位、改变轨迹与修改房间声学所需变换差异很大，复合指令下多种编辑类型还会相互作用。为此，论文在流匹配编辑器的每个 Transformer 层用 SE-MoE 替换前馈块，引入双层路由。

SE-MoE 包含 3 类专家。任务专家从指令表征中选择，对同一样本的所有潜变量帧保持不变，为不同编辑族与复合指令提供任务感知的专家组合。路由专家对每个潜变量 token 独立选择，实现对编辑区域与声事件的局部自适应。空专家返回零张量，使未改区域可避免不必要变换。帧级路由的输入为隐状态 x_i 与流匹配时间步嵌入 e_t 之和，经线性映射与 softmax 得到概率 p_i，采用 top-p 策略选择累计概率超过阈值 rho 的最小专家集合 S_i，使简单或未改帧激活更少专家、复杂编辑区域激活更多专家。

任务级路由对指令状态用学习到的任务查询池化得到专家概率 q(c)，同样做 top-p 选择得到任务专家集合 T(c) 并归一化权重 beta_e。最终输出为两路加权和：帧级路由专家与指令级任务专家分别加权求和，空专家被选中时贡献为零故在求和中省略。

**SE-MoE × SPO：** SE-MoE 负责结构化的能力分离：指令级任务专家为不同编辑族与复合指令提供组合，帧级路由/空专家为每个潜变量帧决定是否变换与用多少专家；SPO 负责行为对齐：用编辑特异的错编与不操作负样本做 DPO 式偏好对比，显式惩罚抄源、改错对象或放错方向。二者搭配的原因是 MoE 扩大了 1 阶段异构编辑的表达与局部控制，而 SPO 在监督流匹配之外补充判别性信号，组合后既能做对操作也能在相似错误中选对目标。

流匹配的训练目标是回归目标速度场。记 z1 为目标潜变量 z_tgt，z0 为高斯噪声潜变量，t 在 0 到 1 均匀采样，定义插值 z_t 等于(1-t) 乘 z0 加 t 乘 z1，速度 v 等于 z1 减 z0。优化目标为条件流匹配损失。

\[\mathcal{L}_{\mathrm{FM}}=\mathbb{E}_{z_{0},t}\left[\left\|v-v_{\theta}(z_{t},t,z_{\mathrm{src}},c)\right\|_{2}^{2}\right].\]

该损失对 z0 与 t 取期望，比较真实速度 v 与网络预测速度 v_theta(z_t,t,z_src,c) 的平方误差。源潜变量 z_src 作为显式保持条件，指令 c 指明期望编辑。

**任务专家 × 帧级路由/空专家：** 任务专家由指令表征经学习到的任务查询池化后做 top-p 选择，同一条样本内对所有帧固定，提供面向编辑族的全局组合；帧级路由/空专家对每个潜变量 token 独立做 top-p 选择，空专家输出零张量以让未改区域跳过变换。任务级保证复合指令的语义分工，帧级实现时间与事件维度的局部自适应，二者求和输出使同一模型既能处理异构任务也能精细保真未改片段。

仅靠监督流匹配，模型仍可能出现抄源、改错事件、放错方向或产生不合理空间变换等可信失败。论文引入空间偏好优化 SPO，基于直接偏好优化 DPO 构造带编辑特异负样本的对齐目标。对每种编辑类型设计两类负样本：错编负样本执行了合理但错误的编辑，例如抽取错事件、移至错角度、走错轨迹或施加错房间条件；不操作负样本保持源场景不变。SPO 数据构造中两类负样本按 2 比 1 混合，每种编辑类型构造 10,000 条偏好样本，平均时长约 9.17 秒。

训练时记正负目标潜变量为 z_pos 与 z_neg，策略模型与冻结参考模型分别计算对应流匹配损失 l_theta 与 l_ref，定义偏好差距 Delta 为 beta 乘以策略模型负正损失差减去参考模型负正损失差，再以负 log sigmoid 优化 L_SPO，并保留正样本监督与 MoE 正则项。正负样本共享相同噪声与时间步，使偏好比较聚焦于目标编辑本身而非采样随机性。

路由稳定性由轻量正则约束，包含负载均衡项、路由 z 损失与空专家路由损失，分别防止专家坍缩、保持数值稳定与引导未改区域使用空专家、编辑区域避免空专家。

### 数据构造与分阶段训练：如何得到成对 FOA 监督并逐步学会复合编辑

1 阶段编辑需要配对监督，使目标已包含指令的完整声学后果。论文从 AudioCaps、FSDKaggle2019、PicoAudio、LibriSpeech 与 Spatial LibriSpeech 等开源语音与音效语料采样，每条样本抽取 2 至 4 个音频事件组成源场景，再按请求编辑合成目标场景。可控房间仿真采用 PyRoomAcoustics，提供方向、距离、运动模式与房间声学条件的显式控制。默认房间尺寸为 21、21、10 米，对应长宽高。FOA 渲染通过鞋盒房间与房间脉冲响应实现：为每个事件构建房间、合成从声源到房间中心的麦克风的 RIR，再用源到听者的单位向量推导解析方向增益将中心 RIR 编码为 W、Y、Z、X 4 通道 FOA RIR，干声与 4 通道 RIR 卷积后按时间线混音。

每条训练样本为三元组(a_src,c,a_tgt)，目标在所有请求变化应用后渲染，使模型无需观测中间操作即可学习复合编辑。任务集覆盖四轴上十余种单操作与复合任务。数据规模为每种单操作约 125,000 条三元组，复合编辑 250,000 条，每条约 8.9 秒。为降低对固定指令风格的依赖，用 Gemini 2.5 Pro 为每条编辑指令生成 3 条改写。测试集每种单操作编辑类型各 50 条，另为二操作、三操作与四操作复合编辑各合成 50 条，且训练与测试不共享原始音频片段以防泄漏。

方向描述定义 10 个方向类别：右、前、左、后、右前、左前、左后、右后、上、下，前 8 个对应方位角 0 度、90 度、180 度、270 度、45 度、135 度、225 度、315 度，上下表示相对于听者的垂直位置；在标称方位与距离确定后，在以该点为中心的小球形区域内随机采样最终声源位置以引入变化，同时保持主方向类别不变。房间大小定义四档：小房间 2、2、2 米，中房间 6、6、4 米，大房间 21、21、10 米，特大房间 100、100、100 米视作开放空间。

训练采用分阶段课程。先把每对源目标拆为场景级 FOA-标题对，做文本到 FOA 预训练，使模型具备基础空间音频生成能力并对事件、空间布局、运动与房间声学建立语言接地。预训练后以该模型初始化编辑模型，先在四轴单操作编辑上微调以学习原子编辑能力，再加入多操作编辑数据联合训练。复合编辑的监督仍为最终目标场景而非中间序列，避免误差累积并促使模型学习复合空间编辑的联合声学效应。

实现上，基础文本到 FOA 模型在 975,000 样本上训练 300,000 步，编辑模型在此基础上训练 500,000 步，再做 2 轮 SPO 后训练。训练时源音频与文本条件各自以 10% 概率替换为空输入，以支持无条件、仅源条件与全条件 3 个分支，用于阶梯式无分类器引导。

推理采用阶梯式 CFG 以分别控制保持与编辑强度。每步可评估 3 种速度预测：无条件 v_empty、仅源条件 v_src 与全条件 v_all。引导速度为 v_empty 加 s_src 乘(v_src 减 v_empty) 再加 s_inst 乘(v_all 减 v_src)，其中 s_src 控制源保持，s_inst 控制编辑强度。该阶梯路径先锚定到源场景再以残差形式施加指令，相比在多条件编辑中对联合条件的单尺度或扁平双尺度 CFG 更易调参并减少保持与跟随之间的冲突。论文在 40 样本的人工权衡中选择 s_src 与 s_inst 均为 3.0 作为全部实验的固定配置，积分从 t 等于 0 到 1 后经解码得到最终 FOA 波形。

\[\tilde{v}_{\theta}=v_{\varnothing}+s_{\mathrm{src}}(v_{\mathrm{src}}-v_{\varnothing})+s_{\mathrm{inst}}(v_{\mathrm{all}}-v_{\mathrm{src}}),\]

该式明确了两段引导的分离：第一段从无条件到源条件，第二段从源条件到全条件，分别对应保持与编辑的独立缩放。

### 实验条件：数据、基线、指标方向与公平比较方式

评估面向语义与空间两类质量。语义与重建侧报告 FD、FAD、KL 与 LSD，其中 FD 与 FAD 在预训练音频嵌入空间度量分布距离，KL 度量事件级类别概率失配，LSD 度量生成与参考音频的频谱失真；指令跟随用 CLAP 分数，计算编辑指令与生成音频在 CLAP 嵌入空间的余弦相似度。空间保真在统一的双通道立体声空间中评估以公平对比立体声基线：模型直接生成 FOA，评估前将 FOA 输出与参考都用同一固定 FOA 到立体声解码器渲染为立体声，再计算基于 GCC-PHAT 的 GCC 均方误差、基于 StereoCRW 特征的 CRW 均方误差与 Fréchet 立体声音频距离 FSAD。指标方向为 FD、FAD、KL、LSD、GCC、CRW、FSAD 越低越好，CLAP 越高越好。

**FOA × 立体声代理评估：** FOA 是 1 阶 Ambisonics 的 4 通道声场表示，编码方向与房间信息；立体声代理评估指为与仅支持立体声的基线公平比较，把 FOA 输出与参考都用同一固定 FOA 到立体声解码器渲染为双通道后再算 GCC、CRW、FSAD 等空间指标。FOA 是模型真实生成域，立体声是度量对齐域，搭配可保留方向结构的同时实现跨基线可比。

基线选择覆盖通用音频编辑与空间音频编辑。由于此前无直接编辑 FOA 的方法，比较时将 FOA 结果解码为立体声代理；FOA 信号已包含 PyRoom 仿真的房间响应，不再额外施加 RIR 滤波。基线包括 AudioEditor、ZETA、SDEdit 与 SmartDJ。AudioEditor 将其原始 Auffusion 后端替换为 BEWO/SpatialSonic 空间音频生成器以支持双耳输出。

SDEdit 与 ZETA 沿用 SmartDJ 的做法以 Stable Audio Open 为生成骨干；SmartDJ 为适配 1 阶段设定，将所有编辑操作在单次推理中联合输入编辑器。

实现细节上，文本到 FOA 预训练与编辑训练的步数与数据量如前所述，SPO 后训练 2 轮。所有模型结果来自单次训练运行，客观指标在对应评测样本上平均。人评为成对偏好：每条测试用例向 3 名标注者提供源音频、编辑指令与两个编辑结果，要求在音质与指令跟随度上二选一，报告基线与本方法之间的偏好比例。推断速度在相同硬件与采样设置下统计单样本平均耗时。

数据与协议侧，训练与测试不共享原始片段，测试集覆盖单操作与二至四操作复合编辑，指令经改写以降低风格依赖。度量时所有方法在同一立体声度量管线下计算，避免解码器不一致带来的偏差。

### 主结果：在效率、语义与空间保真上是否一致优于可运行基线

主结果要回答的问题是：在相同立体声度量管线与相同指令下，1 个阶段 FOA 编辑是否在保持未改内容的同时更准确地实现空间变换，且不以大幅增加推理时间为代价。公平条件是所有方法在同一立体声代理空间计算空间指标，FOA 方法经同一解码器渲染，基线按各自可运行配置执行，指标方向为 FD、FAD、KL、LSD、GCC、CRW、FSAD 越低越好，CLAP 越高越好。

下表整理论文报告的平均客观结果与人评偏好，重点看推理时间、语义与重建指标以及空间指标的方向性。

| 指标族 | 具体指标与方向 | 最强基线表现 | SwanWeave 表现 | 结论要点 |
| --- | --- | --- | --- | --- |
| 效率 | 单样本推理时间 越低越好 | SmartDJ 4.23s | 1.17s | 1 阶段潜编辑显著更快 |
| 语义与重建 | FD/FAD/KL/LSD 越低越好，CLAP 越高越好 | 基线 FD 约 8.47 起，KL 约 2.41 起 | FD 5.47，KL 1.67，LSD 1.07，CLAP 0.21 | 分布与事件一致性及频谱失真全面改善 |
| 空间保真 | GCC/CRW/FSAD 越低越好 | 基线 GCC 约 20.32 起，CRW 约 22.12 起 | GCC 12.39，CRW 18.80，FSAD 0.31 | 方向结构与立体声空间特征更接近目标 |

上表显示 SwanWeave 在效率、语义与空间三族指标上同时取得领先，且人评偏好与客观趋势一致。论文报告的客观平均结果显示，模型在 FD、FAD、KL、LSD 上均优于最强基线，CLAP 取得最高，空间侧 GCC、CRW、FSAD 亦一致领先。效率侧模型平均 1.17 秒完成单样本编辑，快于需要多步扩散采样或串行操作的基线，这主要归因于 1 阶段潜编辑而非多次重建。人评中模型在与 ZETA、AudioEditor、SDEdit、SmartDJ 的成对比较中分别获得约 82.12%、74.33%、76.70%、61.56% 的偏好。代价与限制在于所有结果基于仿真 FOA 数据与固定解码器的立体声代理度量，未直接在真实录制 FOA 上验证，且场景时长约 8.9 秒、事件数 2 至 4 个，未覆盖更长更密集场景。

为验证动态空间编辑的优势，论文单独对比角度运动与距离运动两类操作，关注 GCC 与 CRW 的空间误差变化。

| 操作类型 | 对比维度 | 基线 SmartDJ | SwanWeave | 变化幅度 |
| --- | --- | --- | --- | --- |
| 角度运动 | GCC 越低越好 | 23.25 | 1.15 | 显著降低 |
| 角度运动 | CRW 越低越好 | 50.16 | 14.84 | 显著降低 |
| 距离运动 | GCC 越低越好 | 16.45 | 1.74 | 显著降低 |
| 距离运动 | CRW 越低越好 | 28.66 | 11.32 | 显著降低 |

该表显示动态编辑的空间误差下降尤为明显，说明模型对方向与距离随时间连续变化的建模更准确。论文也指出，复合编辑的 1 阶段优势主要体现在整体重建与空间一致性，而非在每个语义指标上都均匀领先，需结合具体任务看取舍。未胜出项在于部分语义指标的提升幅度在不同操作间不均匀，且所有对比仍在仿真短场景范围内。

### 消融与反证：去掉预训练、MoE 与 SPO 会发生什么，一阶段是否优于多阶段

消融要回答两个问题：各组件是否各自贡献可度量的增益，以及 1 阶段建模是否在复合编辑上优于把复合指令拆步执行。公平条件是保持数据、度量管线与推理配置一致，仅改变待考察组件或执行方式，指标方向与主结果一致。

下表汇总 3 类消融的关键数值变化，数值来自论文正文对消融表的逐字描述，重点看 FD、KL、CLAP 与空间误差的联动。

| 消融条件 | FD 变化 | KL 变化 | CLAP 变化 | 空间变化要点 |
| --- | --- | --- | --- | --- |
| 去掉预训练 | 5.47 升至 8.49 | 1.67 升至 2.78 | 0.21 降至 0.16 | GCC 与 CRW 明显上升 |
| 去掉 MoE | 整体退化 | 整体退化 | 保持或微降 | 空间误差上升 |
| 去掉任务专家 | 介于无 MoE 与完整之间 | 介于之间 | 0.21 降至 0.18 | 仍差于完整 |
| 去掉 SPO | 5.47 升至 5.94 附近 | 1.67 升至 1.85 附近 | 保持 0.21 | GCC 12.39 升至 15.45 附近 |

上表表明预训练、MoE 与 SPO 均带来可度量的增益，但作用点不同。去掉预训练直接在编辑数据上训练，FD 从 5.47 升至 8.49，KL 从 1.67 升至 2.78，CLAP 从 0.21 降至 0.16，空间侧 GCC 与 CRW 亦明显上升，支持预训练为 FOA 生成与语言接地提供了有效初始化。移除整个 MoE 块导致 FD、KL、LSD 等指标退化，说明单一共享前馈难以覆盖异构编辑行为。仅移除任务专家而保留帧级路由与空专家，性能优于无 MoE 但差于完整模型，表明帧级路由对局部时间自适应有用，而指令级任务专家提供互补的任务级特化。移除 SPO 后 FD、FAD、KL、LSD 均变差，空间侧 GCC 与 CRW 上升、FSAD 略升，说明仅靠正样本流匹配不足以抑制抄源、改错事件或放错位置等可信失败。

另一组对比直接检验 1 阶段与多阶段在复合编辑样本上的差异，选取各 100 条二操作、三操作与四操作复合样本，多阶段将复合编辑分解为多步依次执行，1 阶段直接从复合指令预测最终目标。

| 执行方式 | FD | FAD | LSD | GCC | CRW | FSAD |
| --- | --- | --- | --- | --- | --- | --- |
| SwanWeave 多阶段 | 7.16 | 1.67 | 1.82 | 19.45 | 22.29 | 0.37 |
| SwanWeave 1 个阶段 | 5.47 | 1.16 | 1.07 | 12.39 | 18.80 | 0.31 |
| SmartDJ 多阶段 | 9.88 | 3.12 | 2.99 | 27.99 | 47.99 | 0.44 |
| SmartDJ 1 个阶段 | 8.47 | 2.87 | 2.56 | 20.32 | 33.07 | 0.32 |

上表显示 1 阶段在复合编辑上同时改善质量与效率。对 SwanWeave，1 阶段将 FD 从 7.16 降至 5.47，FAD 从 1.67 降至 1.16，LSD 从 1.82 降至 1.07，空间侧三指标亦从 19.45、22.29、0.37 降至 12.39、18.80、0.31，推理时间从 3.96 秒降至 1.17 秒。SmartDJ 在多阶段下同样退化且耗时更长。这支持反复编辑中间输出会累积重建与空间误差，而直接预测最终目标能更好保持复合编辑的整体声学与空间结构。论文也提示 KL 与 CLAP 在该对比中呈混合趋势，说明 1 阶段的主要优势在于重建与空间一致性，而非在所有语义指标上单调领先。未评测边界是更长上下文与更密集事件混合下的多阶段误差累积是否进一步放大。

### 局限与适用边界：仿真监督、场景复杂度与评估代理的约束

论文在结论后明确列出两类局限。第一，成对监督由可控房间仿真构造，虽然提供精确的源目标对齐，但未完全覆盖真实录制 FOA 的声学复杂性，例如麦克风特性、背景噪声、遮挡与高度不规则的房间响应。将框架扩展到真实录制 FOA 是未来工作的重要方向。第二，当前场景在时长与复杂度上仍受限，多数样本约 10 秒、包含少量声事件，编辑更长、事件更密集、轨迹重叠更多或指令更开放的场景，可能需要更强的长上下文建模与更多样监督。

评估侧的边界同样需要说明。为与仅支持立体声的基线公平比较，空间指标在固定 FOA 到立体声解码后的立体声域计算，这是一种代理度量而非直接在 FOA 域的空间误差。度量对解码器选择敏感，且不同指标对分布、事件与频谱的敏感度不同，总体趋势不等于每组或每步都成立。

伦理与数据侧，训练数据来自开源语音与音效语料并经仿真渲染，用于建模空间编辑操作而非模仿特定说话人身份；若未来扩展到真实录制 FOA，需关注知情同意、隐私与数据集许可。仿真构造在一定程度上减少了对私密真实空间录制的采集需求。

对初学者的实践提示：若你的应用场景接近受控房间与短时稀疏事件，SwanWeave 的 1 阶段范式与 SE-MoE 加 SPO 的组合更可能复现论文收益；若场景为真实房间、长时密集事件或高度口语化与歧义指令，需额外验证并考虑引入真实 FOA 微调与更鲁棒的指令理解。

### 复现要点：数据、模型、训练与推理的关键可执行细节

数据复现先明确来源与规模。源语料包括 AudioCaps、FSDKaggle2019、PicoAudio、LibriSpeech 与 Spatial LibriSpeech；每条样本采样 2 至 4 个事件构成源场景，按编辑类型合成目标场景；单操作每类约 125,000 条，复合编辑 250,000 条，时长约 8.9 秒；每条指令用 Gemini 2.5 Pro 生成 3 条改写。

测试集每种单操作 50 条，二至四操作复合各 50 条，训练与测试不共享原始片段。房间仿真用 PyRoomAcoustics，默认房间 21、21、10 米，另定义小、中、大、特大四档房间尺寸；方向分 10 类并在标称位置的小球形区域内随机采样以引入变化；FOA 渲染为 W、Y、Z、X 4 通道，RIR 经解析方向增益编码后与干声卷积混音。

模型与训练的可执行清单包括：FOA 编解码采用立体声 FOA VAE，潜维度 128；指令编码器为预训练语言编码器并冻结；生成骨干为 Diffusion Transformer，源潜变量与噪声潜变量沿特征维拼接输入，自注意力学帧级对应、交叉注意力注入指令；每个 Transformer 层的前馈替换为 SE-MoE，帧级路由基于隐状态与时间步嵌入的和做 top-p 选择，任务级路由基于指令池化做 top-p 选择，空专家输出零；正则含负载均衡、路由 z 损失与空专家路由损失。

训练分 3 段：975,000 样本上文本到 FOA 预训练 300,000 步，编辑数据上微调 500,000 步，SPO 后训练 2 轮；SPO 每编辑类型 10,000 条偏好样本，错编与不操作负样本按 2 比 1 混合，平均时长约 9.17 秒，正负共享噪声与时间步；训练时源音频与文本条件各以 10% 概率置空以支持 3 个分支 CFG。

推理与评估的可执行细节：阶梯式 CFG 设 s_src 与 s_inst 均为 3.0，3 分支速度分别为无条件、仅源条件与全条件，引导速度按两段残差组合后积分 0 到 1 再经 VAE 解码；FOA 输出与参考经同一固定 FOA 到立体声解码器渲染后计算 GCC、CRW、FSAD；语义与重建侧计算 FD、FAD、KL、LSD 与 CLAP；人评为 3 名志愿研究生标注者对源音频、指令与两个结果的成对偏好。代码与演示地址在论文摘要中给出，复现时应优先对齐上述数据划分、仿真参数与 CFG 配置，再逐步验证单操作与复合编辑的指标趋势。

### 何时值得尝试 SwanWeave，首步做什么，还需补哪项验证

当你的任务输入是已有 FOA 场景加自然语言指令、输出仍需为 FOA 且指令常为复合空间操作时，SwanWeave 的 1 阶段潜空间流匹配加双层 MoE 与偏好对齐的组合值得优先尝试。它的核心判断是：把复合指令的全部声学后果当作直接监督目标，比拆步串行更能保持能量、混响与方向结构的联合一致性，且在效率上具有优势。

首步复现建议按学习依赖排序：先用 FOA-标题对跑通文本到 FOA 预训练以建立语言接地，再在单操作编辑上验证原子能力与 SE-MoE 的局部保持效果，最后加入复合编辑与 SPO 后训练并用阶梯式 CFG 固定 s_src 与 s_inst 为 3.0 进行推理。对齐数据侧的房间尺寸、十方向类别与小球形随机采样、以及 FOA 到立体声的固定解码器，是保证指标可比的关键。

还需补充的验证包括：在真实录制 FOA 上的泛化与麦克风、噪声、遮挡等复杂声学的鲁棒性；在更长时长与更密集事件混合下的长上下文与轨迹保真；在口语化、冗余或歧义指令下的指令鲁棒性与失败模式分析；以及直接在 FOA 域的空间误差度量与主观空间听感评估，以弥补立体声代理度量的局限。完成这些验证后，再根据应用对保持与编辑强度的权衡微调 CFG 与路由阈值，才能将论文在仿真短场景上的收益稳健地迁移到实际沉浸媒体制作中。

<details>
<summary>📎 论文与评分元数据</summary>

排名：前50% | 文档类型：方法研究 | [arXiv 原文](https://arxiv.org/abs/2609.04975)

</details>

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。

- 评分规则：type-aware-v1

- 评分模型：muse-spark-1.2-contributor

- 评分请求协议：openai_responses

---

[← 返回 2026-09-08 语音/音乐/音频论文速递](/audio-paper-digest-blog/posts/2026-09-08/)
