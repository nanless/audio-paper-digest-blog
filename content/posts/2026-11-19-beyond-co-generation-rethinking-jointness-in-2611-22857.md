---
title: "Beyond Co-Generation: Rethinking Jointness in Joint Audio-Video Generation"
date: 2026-11-19
draft: false
tags: [音视频生成, 知识蒸馏, 基准测试, LoRA]
categories: [论文速递]
description: "论文追问文本到音频视频生成中语义细节未指明时两模态能否自行选到同一实现，用三级抽象提示诊断四款模型并提出跨模态表征对齐的轻量后训练 JointREPA，在三个基准上提升音频视频语义一致性但文本一致性和单模态质量有涨有跌。"
hiddenInHomeList: true
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_arxiv_id: "2611.22857"
paper_digest_workbench_contract: "researcher-workbench"
paper_digest_workbench_schema_fingerprint: "1f09b594c317cc38e934de27a5b0e8ceb4baa50ef79bd4f8683dd9adea720fe7"
paper_digest_reader_title: "提示没说清时，声音和画面还能对上吗：联合音视频生成的内在协同"
paper_digest_original_title: "Beyond Co-Generation: Rethinking Jointness in Joint Audio-Video Generation"
paper_digest_arxiv_version: 1
paper_digest_arxiv_versioned_id: "2611.22857v1"
paper_digest_arxiv_abs_url: "https://arxiv.org/abs/2611.22857v1"
paper_digest_arxiv_pdf_url: "https://arxiv.org/pdf/2611.22857v1.pdf"
paper_digest_primary_task: "音视频生成"
paper_digest_tags_contract: "paper-tag-flat-tags"
paper_digest_tags_schema_fingerprint: "27e36280a4b8d3df62ebe54d3ab037920f4d69feb2b554163f01bbae2caf4338"
paper_digest_tags_selection_contract: "paper-tag-selection"
paper_digest_tags_registry_version: "paper-tag-catalog"
paper_digest_tags_registry_sha256: "9673bc0122e1905a5dcfd8b223675400cc2fa4c36095bc0e5f817edf99a0ec5c"
paper_digest_tags_concepts: [{"facet":"task","id":"task.av-generation","label":"音视频生成"},{"facet":"method","id":"method.distillation","label":"知识蒸馏"},{"facet":"artifact","id":"artifact.benchmark","label":"基准测试"},{"facet":"method","id":"method.lora","label":"LoRA"}]
paper_digest_primary_method: "知识蒸馏"
paper_digest_score: 6.6
paper_digest_rank_bucket: "前50%"
paper_digest_document_type: "方法研究"
paper_digest_one_sentence: "论文追问文本到音频视频生成中语义细节未指明时两模态能否自行选到同一实现，用三级抽象提示诊断四款模型并提出跨模态表征对齐的轻量后训练 JointREPA，在三个基准上提升音频视频语义一致性但文本一致性和单模态质量有涨有跌。"
paper_digest_authors: [{"affiliations":["KAIST"],"name":"Jihoo Jung"},{"affiliations":["Chung-Ang University"],"name":"Ji-Hoon Kim"},{"affiliations":["KAIST"],"name":"Suyeon Lee"},{"affiliations":["KAIST"],"name":"Gia Thinh Pham"},{"affiliations":["KAIST"],"name":"Joon Son Chung"}]
paper_digest_abstract_sha256: "8009a88a47d8957808c71529f09ccf84da0d243d7d6453fffc089db77da781fe"
paper_digest_sidecars: {"citation.bib":{"sha256":"e29e2099f1f90e673d07cb7d9527afbd127576079489882757bb8a47b6302597","url":"/audio-paper-digest-blog/client/papers/2026-11-19/2611-22857/citation.bib"},"citation.json":{"sha256":"a1f99c6cc677d9c0b6ce06577043b80fa4b8faea4e0ba1f4469d8c501aa5d261","url":"/audio-paper-digest-blog/client/papers/2026-11-19/2611-22857/citation.json"},"citation.ris":{"sha256":"20951ef6473add80143a022292d818294333a9eb6d76f30b61d720520eaceaf8","url":"/audio-paper-digest-blog/client/papers/2026-11-19/2611-22857/citation.ris"},"rethink-context.json":{"contract":"paper-research-context","schemaFingerprint":"5d4e79f7d3ee65b39ccb38281548bf20a1b2041ab7a27625eaf97ab9909a8383","sha256":"7bb02a343145f167fc460d6f147142e071903a9a4a09bc33f1cba723c4cd49da","url":"/audio-paper-digest-blog/client/papers/2026-11-19/2611-22857/rethink-context.json"}}
paper_digest_api_reader_contract: "beginner-researcher"
paper_digest_api_reader_schema_fingerprint: "cd8baf5b8bda3a49eec64f6005931af63de4e9a13148cba5f354c661ca6e9df2"
paper_digest_api_reader_article_sha256: "c8c29948f0c8a8b1e06c474f89fde69e12a02022c1ac59df79908901c1e90753"
paper_digest_api_reader_plan_sha256: "b5ee37026623be3d6b153952fd6142340274ffc131ce7840823093a88e28545f"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings"
paper_digest_api_reader_source_binding_schema_fingerprint: "d2a2607a6e561909473022eb43f56332ee357af8568566a095c29083ffdec9cc"
paper_digest_api_reader_source_bindings_sha256: "5c33e06d0cc1f857283025a22555d1b3d189b8b8395a73a89a6641eee1c81e00"
paper_digest_api_reader_source_table_count: 3
paper_digest_api_reader_source_formula_count: 2
paper_digest_api_reader_structured_artifacts_sha256: "167010fff279a0614ce227b7999459506cb81bf8e575064d7203d97c5ce6b011"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity"
paper_digest_api_reader_author_identity_schema_fingerprint: "1e3fd3a9a56c9a5bf52df8df5022690b9a3fa92e83e934f295af87c0e258ed2f"
paper_digest_api_reader_author_identity_sha256: "c1dbe55183b7c97b8728b099a5b423ad48a84b60de5ec799d5b94bf72c9a209d"
paper_digest_api_reader_author_count: 5
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity"
paper_digest_api_reader_resource_identity_schema_fingerprint: "33b0be17118be61f39b85ce690c8da17e91f2864bb65e85284f60c40067328e0"
paper_digest_api_reader_resource_identity_sha256: "621aaac898203f13f4f098db25ca85ff4953397bc961d6f7a451b2bd1bfe3c10"
paper_digest_api_reader_resource_count: 0
paper_digest_api_reader_figure_persistence: "ephemeral-no-persisted-figure-assets-v1"
paper_digest_api_reader_decision_projection: "api-reader-decision-projection"
paper_digest_api_reader_decision_projection_schema_fingerprint: "e56feb5ab75c8710904916b898f73dab9bb18bdf65bb60b7ed2edf7f99cea860"
---

# 📄 提示没说清时，声音和画面还能对上吗：联合音视频生成的内在协同

> 英文题目：*[Beyond Co-Generation: Rethinking Jointness in Joint Audio-Video Generation](https://arxiv.org/abs/2611.22857v1)*

<!--paper-tag-hierarchy-v1:start-->

**研究分类**

- **研究任务**：[音视频生成](/audio-paper-digest-blog/papers/?concept=task.av-generation)
- **研究方法**：[知识蒸馏](/audio-paper-digest-blog/papers/?concept=method.distillation)；[参数高效微调](/audio-paper-digest-blog/papers/?concept=method.peft) → [LoRA](/audio-paper-digest-blog/papers/?concept=method.lora)
- **研究产物**：[基准测试](/audio-paper-digest-blog/papers/?concept=artifact.benchmark)

<!--paper-tag-hierarchy-v1:end-->

> 评分：**6.6/10** | 创新 1.3/2 | 技术严谨 1.2/1.5 | 实验充分 1.1/1.5 | 清晰度 0.8/1 | 影响力 0.9/1.5 | 开源 0/1.5 | 可复现 0.3/0.5 | 工程/实践 1/1.5


## 👥 作者与机构

- Jihoo Jung：KAIST
- Ji-Hoon Kim：Chung-Ang University
- Suyeon Lee：KAIST
- Gia Thinh Pham：KAIST
- Joon Son Chung：KAIST

## 📌 核心摘要

联合文本到音视频生成以同一段文字同时合成声音与视频，难点在于文字常留下多种合理实现，模型需在无直接规定处自行对齐选择。本文引入内在联合性刻画这种能力，并聚焦其中语义维度，即在事件身份未被文字限定时音频与视频能否给出同一身份。为诊断该能力，作者构造3个语义具体程度不同的探针提示，逐层抽象事件身份，并用分类器分别判定音频与视频的实现后统计一致率。针对发现的对齐不足，作者提出JointREPA，先取出生成模型中间层汇聚后的音频隐状态与视频隐状态，再用两组多层感知机投射后分别送入单模态对齐与跨模态对齐，最后将两种对齐损失与流匹配损失加权联合做轻量后训练。其中单模态对齐把各模态投射后表示靠近同模态冻结目标以丰富语义信号，跨模态对齐则靠近另一模态目标以促进语义交换，两路梯度与流匹配更新共同改善音视频注意力可用的表征。为衡量效果，作者还构建UNSAIDBench，将真实复杂提示中的细粒度事件抽象为上位类别，每条提示保留一个未充分限定的共享因素。在UNSAIDBench上，22B参数的LTX-2.3加JointREPA后音频视频语义一致性指标AV-IB从0.244提升到0.302，方向为越高越好，超过同一基准上的原始模型。该增益在另外2个基准上依然存在，但文本一致性与单模态质量变化不一，表明改进集中在跨模态协调；结论只验证显式事件身份的语义联合性，时序对齐与材质重量等物理属性尚未验证，原文未披露训练、推理或部署成本。

## 🔗 开源与复现资源

本次未形成可展示的已核验资源记录，开放状态尚未核实。

可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 联合生成要从一段文字变出什么

联合文本到音频视频生成的输入是一段自然语言提示，输出是一段视频加一段音频，要求两者能配成同一个场景。对刚接触音频的读者，可以把一次生成想象成抽奖加填充：提示只规定大方向，模型每次用不同随机种子都要把没说清的细节补全，例如乐器到底是吉他还是小提琴，人声是男声还是女声，动物是狗叫还是猫叫。

这类任务比单模态的文本到图像或文本到视频多了一个必须保留的信息，那就是跨模态对应关系。论文把这种对应分成两类，一类是语义一致，声音和画面讲的是同一件事；另一类是时间同步，鼓点落在鼓槌敲下去的那一刻。本文只研究语义这一半，时间对齐不在本次诊断和改进的范围内。

理解后续内容只需要抓住一个判断标准：如果提示已经把每个细节都写死，那么两边各自照着文字做也能看起来一致，这种一致不能证明它们真的商量过。只有当提示故意留出多种合理解释，而两边仍然经常选到同一个解释，才能说它们有真正的协同。论文把这种能力称为内在协同，本文后面都围绕它展开。

### 已有模型用什么结构让声音和画面交换信息

论文考察的四款近期模型都属于基于扩散变换器的生成模型。扩散变换器在这里指用多层变换器块逐步去噪生成内容的网络，每个块里有处理本模态内部关系的自注意力，有读取文字提示的文本交叉注意力，还有让音频和视频互相看到对方的音频视频注意力。训练主目标是流匹配，可以理解为学习从噪声到数据的连续去噪路径。

在结构上，LTX-2.3、LTX-2 和 JavisDiT 是双塔结构，音频塔和视频塔分开，只在特定位置通过交叉注意力交换；JavisDiT++ 是单塔结构，把音频和视频 token 展平拼接后送进同一个塔，用联合自注意力实现交换。论文为了统一称呼，把这两种架构中音频和视频 token 之间的注意力都叫作音频视频注意力，后文敲除实验就是直接关掉这条通路。

**双塔模型 × 单塔模型：** 双塔模型为音频和视频各设一个扩散变换器塔，再用音频视频交叉注意力交换信息；单塔模型把两类 token 拼起来送进同一个变换器塔，用联合自注意力让它们直接看到彼此。两者都要经过文本交叉注意力接受提示，都以流匹配为主要训练目标，区别只在跨模态信息走专用交叉注意力还是共享自注意力。

在方法 lineage 上，表征对齐最早在图像生成中被提出，用冻结视觉编码器的干净图像表示去约束去噪网络的隐状态，以提升语义含量和训练效率。后续有视频、音频、视频到音频等扩展，本文的 JointREPA 是把它第一次系统地用于同时生成两个模态的场景，并且同时做本模态和跨模态两路对齐，这与只做单路对齐的前作形成直接对照。

### 什么叫内在协同，为什么要用欠指明的提示来测

论文把一次联合生成形式化为先为欠指明的共享因子选实现，再分别生成音频和视频。例如提示说有人在演奏乐器，共享因子包括乐器种类、演奏时机等，每种因子都有一个可能实现集合，吉他、小提琴都在其中。音频选了一个实现，视频选了一个实现，只有当两者选到同一个实现时才算协同。内在协同就是在给定提示下两者实现相同的概率。

这个定义的关键是把提示没说清的部分单独拿出来。如果提示直接写电吉他，那么两边都选吉他可能只是各自听话，不需要商量；如果提示只写乐器，那么两边都选吉他就更可能来自真正的跨模态协调。图 1 正是用这个对比来说明诊断思路，初学者可以把它当作全文的题眼。

下面这张示意图需要仔细读，它把详细提示和欠指明提示并排放在一起，中间都画了同样的双塔和双向注意力，区别只在底部输出是否一致。请先看提示措辞和底部标注的对应关系，再思考为什么同样的结构在右边会失败。

> **看图路径：** 1. 先看左右两栏的提示措辞差异：详细栏点名电吉他，欠指明栏只说乐器；2. 再看中间视频与音频扩散块之间的双向音频视频注意力箭头是否相同；3. 最后看底部输出标注：左边两边都是吉他为一致，右边视频吉他而音频小提琴为不一致

[![原论文 Figure 1：Intrinsic jointness. Under detailed prompts, output consistency can arise from each modality…](https://arxiv.org/html/2611.22857v1/main.png)](https://arxiv.org/html/2611.22857v1/main.png)

*论文图 1。原论文 Figure 1:：“Intrinsic jointness. Under detailed prompts, output consistency can arise from each modality independently following the text prompt alone, without audio–visual interaction.”。*

这张图确实可见的是左栏提示点名电吉他，视频和音频输出都被标成吉他并连成一致；右栏提示只说乐器，视频仍是吉他而音频变成小提琴并标成不一致。它帮助理解的是诊断逻辑不是结构差异：结构和注意力通路左右相同，输出一致性差异只能从提示具体程度和协同是否发生来解释，而不是说右边模型坏了。

**语义一致性 × 时间同步：** 语义一致性指音频和视频描绘同一事件身份，例如同为吉他演奏；时间同步指对应事件在时间上对齐，例如发声时刻与动作时刻吻合。本文只研究前者，因为自然提示很少写精确时间戳，时间维度的协同已被较多考察，而语义细节常在基准中被写死，导致语义协同是否来自真正的跨模态协调一直没有被分离出来。

为了把定义落成可计算的量，论文用分类器分别预测音频和视频各自实现成哪一类，再统计判成同一类的比例，这就是后文的身份一致率。同时还报告 AV-IB 和 AVHScore 两个已有的语义连贯指标。诊断用的提示按 AudioSet 本体组织成 3 级，从粗到细实现集合逐渐缩小，例如乐器到弦乐器再到吉他或小提琴，模板其余文字保持不变，每个提示用不同随机种子生成 100 个样本。

\[J_{\theta}(c)=\Pr_{\theta}\!\left(\mathbf{z}^{a}=\mathbf{z}^{v}\mid c\right)=\sum_{\mathbf{z}\in\mathcal{R}(c)}\pi_{\theta}(\mathbf{z},\mathbf{z}\mid c).\]

上式计算的是在给定提示下音频实现与视频实现完全相同的概率，求和遍历该提示下所有可能的联合实现空间。它对应的统计做法就是上段说的分类加数一致比例，只是公式把抽样补全细节的思想写清楚了：先有两边各自选择的联合分布，再把对角线即相同的部分加起来，值越大说明欠指明时越能对上。

### JointREPA 想让中间表示发生什么变化

诊断发现协同不足后，论文提出 JointREPA，一种作用在中间层的轻量后训练方法。它的输入不是改提示也不是改采样，而是拿真实配对的音频和视频去约束生成模型某一中间层的池化隐状态。具体来说，音频隐状态和视频隐状态各经过两个多层感知机投影头，一个对准本模态冻结编码器的表示，一个对准另一模态冻结编码器的表示。

这里的冻结编码器指训练时参数不动的外部表示提取器，音频侧默认用 CLAP，视频侧用 V-JEPA。它们的作用是提供语义丰富的目标，让生成模型的隐状态向有意义的声音和画面概念靠拢。对初学者而言，可以把单模态对齐理解为先让每边自己说清楚是什么，跨模态对齐理解为再让每边去靠近另一边的说法，从而更容易选到同一个身份。

要看清两路对齐的走向，需要看方法总览图。它把顶部主目标、中间双塔和底部冻结编码器画在一起，实线和虚线分别表示两类对齐，读图时重点跟两条线的起点和终点。

> **看图路径：** 1. 沿顶部流匹配目标向下看视频与音频两塔及其中间层引出的隐状态；2. 区分实线跨模态与虚线单模态两类对齐箭头各自指向哪个冻结编码器；3. 注意每侧两个多层感知机投影头分别承担本模态和跨模态两条支路

[![原论文 Figure 5：Overview of JointREPA. JointREPA aligns each modality’s features with pretrained encoder…](https://arxiv.org/html/2611.22857v1/method.png)](https://arxiv.org/html/2611.22857v1/method.png)

*论文图 5。原论文 Figure 5:：“Overview of JointREPA. JointREPA aligns each modality’s features with pretrained encoder representations from both its own modality and the other modality.”。*

这张图确实可见的是视频塔和音频塔各有 3 个示意块，中间层引出视频隐状态和音频隐状态，每侧分出两个投影头分别指向单模态对齐和跨模态对齐，下方真实视频和真实音频经冻结编码器得到目标表示后用交叉的箭头送上来。它帮助理解的是信息汇合位置：本模态目标走回本模态，另一模态目标交叉送过来，两路在投影头处汇合再与主生成目标相加。

**音频视频注意力 × 文本交叉注意力：** 文本交叉注意力负责让每个模态跟随文字提示，音频视频注意力负责让两个模态互相看到对方的中间 token。本文诊断的核心是当提示故意留白时，文本交叉注意力给不出唯一答案，此时音频视频注意力是否能把语义选择传过去并收敛到同一实现，这正是后文敲除和非对称提示要检验的分工。

论文强调这种设计是同时解决两个缺口：本模态对齐让隐状态语义更清晰，给音频视频注意力提供更可用的信号；跨模态对齐直接鼓励两边隐状态互相靠近，促进语义交换。后文消融会分别关掉这两部分，看看到底是哪一路在起作用。

### 两路对齐各自约束什么，相似度怎么算

单模态对齐损失约束的是音频隐状态靠近音频编码器表示、视频隐状态靠近视频编码器表示；跨模态对齐损失约束的是音频隐状态靠近视频编码器表示、视频隐状态靠近音频编码器表示。两者都写成负期望相似度的形式，相似度越高损失越小。相似度在这里指向量贴近程度，默认用余弦相似度，只有单模态视频对齐按 VideoREPA 的做法用 token 关系蒸馏，以更好地保留视频内部结构。

实现上对齐加在中间变换器层，JavisDiT++ 是 30 层中的第 15 层，LTX-2.3 是 48 层中的第 24 层。选择中间层的原因在后文探针分析中得到呼应：欠指明时中间层附近的一致率抬升最明显，说明约束加在这里确实影响了语义形成的关键位置。投影头是每个模态各两个多层感知机，训练时更新，冻结编码器本身不更新。

**单模态对齐 × 跨模态对齐：** 单模态对齐是把音频隐状态向冻结音频编码器表示靠拢、视频隐状态向冻结视频编码器表示靠拢，让各自语义更清晰；跨模态对齐是把音频隐状态向视频编码器表示靠拢、视频隐状态向音频编码器表示靠拢，主动在隐空间制造语义交换。两者搭配后，前者提供更清楚的信号供注意力利用，后者直接鼓励两边选到同一语义。

需要提醒的是，论文没有报告投影头维度、池化细节和 token 关系蒸馏的完整超参数，也没有说明梯度是否回传到全部主干还是只到 LoRA 参数之外。阅读时不要从模型名字猜实现，理解时应仅以已披露的层号和损失权重为准，并用探针一致率判断中间层是否真的变好，而不是默认所有层都会改善。本文没有经核验可达的作者开源资源，不能说模型、代码或数据已公开或当前可用。

### 后训练用什么数据和更新方式，总目标怎么写

JointREPA 是后训练，不是重新训练生成模型。训练数据是 VGGSound 中按 52 类均衡取的子集，并且排除了诊断分析用过的类别，以便后文再做 3 级诊断时是公平的未见类别。训练时在原流匹配损失上加上两项对齐损失，权重都设为 0.5。优化器用 AdamW，学习率设为 0.0001，只训练一个轮次，有效批量 JavisDiT++ 为 16，LTX-2.3 为 4。

参数更新用秩为 32 的 LoRA，这是一种只在原权重旁加小秩可训练旁路的方法，主干大参数基本不动，只调少量增量。这样做的好处是成本低、改动小，代价是表达能力受限，如果协同需要大幅重排内部表示，轻量旁路可能不够。后文与全模型强化学习的对比正是在这个成本差异下讨论的。

**流匹配损失 × 对齐损失权重：** 流匹配损失是原生成模型的去噪类主目标，维持基本的音频视频生成能力；对齐损失权重控制单模态和跨模态两项表征对齐在总目标中的占比。训练时主损失不撤，只用小权重加上对齐项做轻量后训练，这样既保留原模型行为，又在中间层注入跨模态约束。

总目标把三部分加在一起，流匹配维持生成能力，两项对齐分别管本模态清晰度和跨模态靠近程度。公式中各符号的含义是总损失等于流匹配损失加上加权后的单模态对齐损失和跨模态对齐损失，权重控制后两项的强度。

\[\mathcal{L}=\mathcal{L}_{\mathrm{FM}}+\lambda_{\mathrm{uni}}\mathcal{L}_{\mathrm{uni}}+\lambda_{\mathrm{cross}}\mathcal{L}_{\mathrm{cross}},\]

上式要约束的是训练时最小化的标量目标，先分别形成主生成损失和两路对齐损失，再按权重合并成一个数用于反向传播。它不直接计算一致率，而是通过让隐状态靠近冻结语义表示来间接促进一致，实际效果要到基准上用身份一致率和语义连贯指标来验证。

### 用什么提示和指标来评价协同

评价分诊断和基准两套。诊断用表 1 的 3 级简单模板，覆盖乐器演奏、人的说话、动物发声 3 类，每类从粗到细共享模板只换关键词，例如动物到宠物再到狗或猫，弦乐器再到吉他或小提琴，男人再到成年男人或小男孩。目的是控制除语义具体程度之外的所有文字，保持实现集合大小是唯一的变量。

基准用新提出的 UNSAIDBench 加两个已有基准。UNSAIDBench 把 JavisBench 的复杂真实提示中的细粒度事件身份按本体抽象成上位类别，同时保留上下文自然，共 524 条，每条含一个欠指明的共享因子。JavisBench-mini 和 Verse-Bench 作为通用条件下的泛化检验，其中 Verse-Bench 原本支持文本加图像条件，但因 JavisDiT++ 不支持图像条件，论文统一只用其文本提示。

**身份一致率 × AV-IB × AVHScore：** 身份一致率是用分类器分别判断音频和视频各实现成哪一类，再统计两者判成同一类的样本比例，直接对应内在协同定义；AV-IB 和 AVHScore 是已有的音频视频语义连贯指标，不依赖诊断用的封闭类别集合。三者分工是前者可解释地数对错，后两者在开放复杂提示上度量整体语义贴近程度，方向都是越高越一致。

4 个评价维度是音频视频一致性、音频视频同步性、文本一致性和音频视频质量。一致性用 AV-IB 和 AVHScore，越高越连贯；同步性用 JavisScore 越高越好和 DeSync 越低越好；文本一致性用 ImageBind、CLIP、CLAP，越高表示与文字越贴；质量用 VideoAlign 的视觉质量和 Audiobox-Aesthetics 的音频质量，越高越好。诊断阶段还用打乱配对基线，把同提示下不同种子的音频和视频随机配对，看真实配对是否明显高于随机配对。

下表是诊断用的 3 级提示组织，它说明比较问题是当实现集合从大变小时一致性如何变化，公平条件是模板和采样数相同，指标方向是身份一致率越高越好。阅读时注意它不是结果表，而是理解后文曲线横轴的钥匙。

| L1 | L2 | L3 |
| --- | --- | --- |
| “A/An is vocalizing.” |  |  |
| animal | pet | dog / cat |
|  | farm animal | cow / sheep |
|  | wild animal | lion / wolf |
| “A person is playing a .” |  |  |
| musical instrument | string inst. | guitar / violin |
|  | percussion inst. | drum / xylophone |
|  | wind inst. | flute / trumpet |
| “A/An is speaking.” |  |  |
| person | man | adult man / young boy |
|  | woman | adult woman / young girl |

这张表支撑的判断是后文所有按具体程度展开的曲线都有相同的文字控制，只在关键词抽象级别上不同，因此曲线下滑可以归因于欠指明程度而非措辞风格变化。它的限制是只覆盖 3 类清晰可分的事件，材料、重量等物理属性和更开放的场景不在其中，结论不能直接推广到所有语义维度。

### 欠指明时模型表现如何，JointREPA 改变了什么

诊断的 3 个问题先给出基线现状。第一，随着提示从细到粗，一致率和两个语义连贯指标总体下滑，在最粗 1 级多数模型的一致率接近打乱配对基线，说明两边几乎是独立做选择。第二，用线性探针分别读每一块每一去噪步的平均 token 并预测本模态输出身份，再数两边探针预测相同的比例，同样看到从细到粗下滑且最粗 1 级贴近打乱基线，说明分歧不只在最终输出，内部表示就已经分开了。第三，关掉音频视频注意力后 LTX 家族指标明显掉而 JavisDiT 家族几乎不变；非对称提示下一边给细一边给粗，粗一侧跟随细一侧指定身份的比例明显低于双侧都给细，说明跨模态通路没有被有效用来传语义。

主结果在两个骨干和 3 个基准上检验 JointREPA。论文报告它在所有基准和骨干上都提升音频视频一致性指标，在 UNSAIDBench 上提升最明显，同步性多数设置也变好，而文本一致性和单模态质量有涨有跌。这意味着收益主要体现在跨模态协调，不是单边质量全面变好。定性例子中基线把牛群画面配成鸡叫、把齐特琴画面配成笛声，每边单独看都符合上位词但合在一起不一致，而新方法能收敛到牛叫和吉他。

要理解欠指明基准上的行为差异，需要看定性对比图。它把基线和新方法在相同欠指明提示下的视频帧和声谱并排放置，重点不是画面美观度，而是标注的类别是否跨模态相同。

> **看图路径：** 1. 先读每组左上角提示中被抽象的上位词如农场动物和乐器；2. 对比同一组中基线行视频帧与声谱图标注的类别是否相同；3. 再看 JointREPA 行是否把声音标注改成与画面相同的牛叫和吉他

[![原论文 Figure 6：Qualitative results on UNSAIDBench.](https://arxiv.org/html/2611.22857v1/fig_qual_uvisbench_2x2_v3.png)](https://arxiv.org/html/2611.22857v1/fig_qual_uvisbench_2x2_v3.png)

*论文图 6。原论文 Figure 6:：“Qualitative results on UNSAIDBench. Generated video frames and audio spectrograms from the base model (top) and its JointREPA variant (bottom).”。*

这张图确实可见的是左侧农场动物组基线视频标牛而音频标鸡并框出咯咯声，新方法两边都标牛并框出哞声；右侧乐器组基线视频标齐特琴而音频标笛子，新方法两边都标吉他。它帮助理解的是前文数字提升对应的实际现象：欠指明时基线各说各话，新方法把声音向画面靠拢或反之，最终选到同一身份。

下表是跨 3 个基准的主结果比较，它要回答的问题是在不同提示复杂度和不同骨干下新方法是否稳定提升跨模态语义一致，公平条件是同一骨干前后对比，指标方向是前三列越高越好而 DeSync 越低越好。阅读时把一致性列作为主要证据，同步、文本和质量列作为代价和边界。

|  |  | AV-Consistency | AV-Consistency | AV-Synchrony | AV-Synchrony | Text-Consistency | Text-Consistency | Text-Consistency | Text-Consistency | AV-Quality | AV-Quality |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Model | Size | AV-IB ↑ | AVHScore ↑ | JavisScore ↑ | DeSync ↓ | TV-IB ↑ | TA-IB ↑ | CLIP ↑ | CLAP ↑ | VQ ↑ | AQ ↑ |
| UNSAIDBench |  |  |  |  |  |  |  |  |  |  |  |
| JavisDiT++ [27] | 2.1B | 0.176 | 0.163 | 0.133 | 0.815 | 0.180 | 0.138 | 0.313 | 0.343 | 1.455 | 4.595 |
| + JointREPA | 2.1B | 0.207 | 0.196 | 0.164 | 0.804 | 0.174 | 0.163 | 0.310 | 0.369 | 1.655 | 4.628 |
| LTX-2.3 [15] | 22B | 0.244 | 0.236 | 0.209 | 0.468 | 0.173 | 0.101 | 0.298 | 0.287 | 2.354 | 5.050 |
| + JointREPA | 22B | 0.302 | 0.288 | 0.261 | 0.440 | 0.169 | 0.124 | 0.298 | 0.327 | 2.256 | 4.852 |
| JavisBench-mini [26] |  |  |  |  |  |  |  |  |  |  |  |
| JavisDiT++ [27] | 2.1B | 0.200 | 0.182 | 0.157 | 0.784 | 0.283 | 0.170 | 0.316 | 0.429 | 1.538 | 4.987 |
| + JointREPA | 2.1B | 0.221 | 0.204 | 0.179 | 0.782 | 0.278 | 0.187 | 0.316 | 0.447 | 1.715 | 4.917 |
| LTX-2.3 [15] | 22B | 0.249 | 0.238 | 0.214 | 0.555 | 0.280 | 0.171 | 0.306 | 0.412 | 2.458 | 5.348 |
| + JointREPA | 22B | 0.285 | 0.271 | 0.247 | 0.575 | 0.277 | 0.186 | 0.304 | 0.433 | 2.339 | 5.157 |
| VerseBench [39] |  |  |  |  |  |  |  |  |  |  |  |
| JavisDiT++ [27] | 2.1B | 0.213 | 0.201 | 0.172 | 0.905 | 0.182 | 0.189 | 0.325 | 0.479 | 1.580 | 4.280 |
| + JointREPA | 2.1B | 0.237 | 0.223 | 0.195 | 0.958 | 0.175 | 0.216 | 0.323 | 0.489 | 1.850 | 4.260 |
| LTX-2.3 [15] | 22B | 0.332 | 0.317 | 0.287 | 0.284 | 0.167 | 0.191 | 0.317 | 0.447 | 2.760 | 5.004 |
| + JointREPA | 22B | 0.369 | 0.351 | 0.322 | 0.241 | 0.165 | 0.211 | 0.317 | 0.472 | 2.677 | 4.809 |

这张表支撑的判断是跨模态一致性收益具有一定的泛化性，不只在为欠指明设计的基准上成立，在已有详细基准上也有提升。但它同时显示文本一致性和单模态质量并非一致变好，例如个别视觉质量和音频质量有回落，说明对齐可能以轻微改变单边分布为代价。读者应把它和后文消融对照，看看到底是本模态变清晰还是跨模态交换在起主要作用，也不要把自动语义指标的提升等同于人工听看评价。

### 哪一路对齐在起作用，超参数是否敏感

消融在 JavisDiT++ 上比较只用流匹配微调、加上单模态对齐、再加上跨模态对齐的完整版本。论文报告只用流匹配只有微弱提升，加上单模态对齐已有明显增益，再加上跨模态对齐达到最好。把默认音频编码器换成 BEATs 后性能相当，说明方法对音频编码器类型不敏感。跨模态权重在非零范围内都优于去掉跨模态项，0.5 平均最好，表明只要有跨模态约束就有帮助，具体数值不必过分调优。

与 AV-GRPO 的对比提供了成本视角。AV-GRPO 用组相对策略优化并以模态质量、提示对齐和同步分数为奖励，需要全模型微调；JointREPA 只用轻量 LoRA 表征对齐，没有显式奖励设计，却在 LTX-2.3 上取得可比的一致性和同步性。这不能理解为对齐全面替代强化学习，只能说在提升语义协同这个目标上，中间层对齐是一种更便宜且有效的选择。

重新做诊断三问能看到机制变化。提示具体程度曲线在各级都有提升且在最粗 1 级增益最大，一致率与打乱基线的差距拉大；内部探针在施加对齐的中间层附近对粗提示的一致率抬升最明显；非对称提示下跟随率在 2 个方向都有提升，视频跟随音频的相对比例和音频跟随视频的比例都高于原来。双侧都给粗或都给细时也有小幅上涨，论文解释为单模态对齐让整体语义表示变强。

下图把这 3 组重测放在一起，读图时不要只看末端数值，要看差距在哪里拉大，因为这对应方法起作用的位置和条件。

> **看图路径：** 1. 在左子图看从粗到细提示下基线与新方法曲线的差距在最欠指明端是否最大；2. 在中子图看中间层附近新方法对欠指明提示的探针一致率抬升是否最明显；3. 在右子图比较非对称提示下跟随率相对双侧详细提示的比例变化

[![原论文 Figure 7：Revisiting Q1, Q2 and Q3 after applying JointREPA.](https://arxiv.org/html/2611.22857v1/fig_revisit_avm_bothL3.svg)](https://arxiv.org/html/2611.22857v1/fig_revisit_avm_bothL3.svg)

*论文图 7。原论文 Figure 7:：“Revisiting Q1, Q2 and Q3 after applying JointREPA.”。*

这张图确实可见的是左子图 3 条具体程度上的曲线在新方法下整体上移且在最欠指明端与打乱基线的间隔更大，中子图中间层附近粗提示的探针一致率出现凸起，右子图非对称跟随的柱子向双侧详细提示的柱子靠近。它帮助理解的是改进不是均匀的单边质量提升，而是在最需要协同的条件和最直接受约束的层上最明显，这与跨模态交换被激活的解释是一致的。

下表是微调损失的消融比较，它要回答的问题是增益到底来自额外训练、本模态变清晰还是跨模态交换，公平条件是同一骨干同一数据只换损失组合，指标方向是一致性和同步分数越高越好而 DeSync 越低越好。

|  | AV-Consistency | AV-Consistency | AV-Synchrony | AV-Synchrony |
| --- | --- | --- | --- | --- |
| Model | AV-IB↑ | AVHScore↑ | JavisScore↑ | DeSync↓ |
| UNSAIDBench |  |  |  |  |
| JavisDiT++ [27] | 0.176 | 0.163 | 0.133 | 0.815 |
| + FM loss | 0.181 | 0.171 | 0.141 | 0.826 |
| + Unimodal REPA | 0.199 | 0.188 | 0.158 | 0.832 |
| + JointREPA (Ours) | 0.207 | 0.196 | 0.164 | 0.804 |
| + BEATs JointREPA | 0.213 | 0.201 | 0.170 | 0.818 |
| JavisBench-mini |  |  |  |  |
| JavisDiT++ [27] | 0.200 | 0.182 | 0.157 | 0.784 |
| + FM loss | 0.204 | 0.187 | 0.160 | 0.780 |
| + Unimodal REPA | 0.215 | 0.199 | 0.174 | 0.787 |
| + JointREPA (Ours) | 0.221 | 0.204 | 0.179 | 0.782 |
| + BEATs JointREPA | 0.221 | 0.204 | 0.179 | 0.772 |

这张表支撑的判断是单模态对齐已能带来较大提升，跨模态对齐在此基础上再进一步，说明两路都有用且组合最好。它的限制是只在一个骨干和两个基准上报告，没有给出多次随机种子的方差，也没有测量训练时长和推理开销，因此不能从这张表推断方法在所有模型上都同等有效，更不能把同步分数的小幅波动解读为时间对齐已彻底解决。

### 这些结论在什么条件下才成立，还有哪些没测

首先，内在协同的诊断依赖分类器判定的身份一致率，分类器本身会犯错，乐器、说话人、动物声在音频和视频侧的难易程度不同。如果某类声音本来就难分，那么一致率低可能混入了分类误差，而不全是模型没协同。论文用多个指标交叉印证，但没有报告分类器在生成数据上的误判率，这是解释诊断数字时必须留的余地。

其次，协同只验证了显式语义身份，没有验证材料、大小、重量等物理属性。论文在结尾明确把物理一致生成作为未来方向，这意味着当前方法是否能让未说清的物体属性同时塑造声音和画面还是未知。把语义身份上的成功直接推广到物理连贯是不恰当的。

再次，改进的证据来自两个骨干和 3 个基准，虽然架构和规模有差异，但训练数据只用 VGGSound 子集且只训一个轮次，批量也很小。文本一致性和单模态质量出现混合结果，说明对齐可能改变单边分布，长期训练或更大批量下是否稳定没有数据。同步性虽多数变好，但个别设置下 DeSync 也有波动，不能理解为时间对齐已顺带解决。

### 要复现和验证，第一步该做什么

复现 JointREPA 的第一步不是直接跑大模型，而是先搭出 3 级诊断流水线。用论文模板写出从粗到细的提示，每条用不同随机种子生成足够样本，再用与论文同类的视频和音频分类器分别预测身份并数一致比例，同时计算打乱配对基线。只有当基线复现出从细到粗下滑且粗端贴近打乱基线的趋势，后续的改进数字才有意义，否则很难区分是协同变好还是分类器或采样变了。

第二步再加轻量对齐。冻结 CLAP 和 V-JEPA，按论文层号引出池化隐状态，各加两个多层感知机投影头，分别算本模态和跨模态相似度损失，与流匹配损失按 0.5 权重相加，用秩 32 的 LoRA 训练一个轮次。复现时要记录中间层探针一致率是否在对齐层附近抬升，这是比最终指标更直接的机制检查。

关于资源需要分开说：论文提到的基座模型和外部编码器是各自已有的研究产物，本文证据没有绑定可验证的作者代码或权重链接，因此不能写成作者资源当前可用或已公开。来源未确认只是本次未能确认可达，不代表技术有缺陷。复现者应按已披露的超参数自行实现，并先用小批量验证梯度和损失是否正常下降，再补做多次种子的方差和人工听看抽查，因为自动指标不等于人的感受。

### 什么时候值得尝试，还缺哪项验证

当你的联合生成系统在详细提示下看起来一致，但一换成乐器、动物、人声等上位词就经常声画对不上，而且你怀疑两边只是各自听话而没有商量时，这套诊断值得尝试。它成本不高，只需要写 3 级抽象提示并数一致率，就能判断问题出在单边跟随能力还是跨模态协同。如果关掉音频视频注意力后一致性几乎不变，或者非对称提示下粗一侧跟不上细一侧，那么加上跨模态对齐的理由就更充分。

如果决定尝试 JointREPA，建议顺序是先做诊断基线，再加单模态对齐看提升，最后再加跨模态对齐。因为消融显示单模态变清晰本身就有较大收益，直接上完整版会分不清功劳。超参数上跨模态权重不必精调，非零即可，编码器换型也相对稳健，精力应放在验证中间层探针和欠指明端增益是否出现，而不是在权重小数点上反复搜索。

还缺的验证有三项。第一，分类器之外的开放词汇或人工评价，以排除分类误差对一致率的影响；第二，物理属性和更开放场景下的协同测试，以确认方法不只对显式身份有效；第三，训练和推理成本的完整报告，包括显存、时长和输出帧率，因为轻量 LoRA 的卖点需要用实测开销来支撑。只有补上这些，才能把当前在两个骨干和 3 个基准上的语义一致性提升，稳妥地理解为可部署的协同改进。

<details>
<summary>📎 论文与评分元数据</summary>

排名：前50% | 文档类型：方法研究 | [arXiv 原文](https://arxiv.org/abs/2611.22857v1)

</details>

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。

- 评分规则：type-aware-v1

- 评分模型：muse-spark-1.3-contributor

- 评分请求协议：openai_responses

---

[← 返回 2026-11-19 语音/音乐/音频论文速递](/audio-paper-digest-blog/posts/2026-11-19/)
