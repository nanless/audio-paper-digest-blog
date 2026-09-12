---
title: "Learning Personalised Human Internal Cognition from External Expressive Behaviours for Real Personality Recognition"
date: 2026-09-11
draft: false
description: "针对直接从外部行为回归真实人格偏向观察者印象的问题，该文用 10 秒音视频生成密钥修正通用面部反应生成器得到个性化认知权重，再编码为矩阵图用二维图网络回归自陈大五特质，在 NoXI 与 UDIVA 上报告了误差与相关提升，代价是仍需扩散预训练与双损失联合训练且细粒度言语未建模。"
tags: ["端到端学习", "图神经网络", "音视频", "语音", "音视频理解"]
categories: ["aaai-2026 论文"]
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_paper_id: "conference:aaai:2026:conference-paper-id:37167"
paper_digest_source_kind: conference
paper_digest_conference_id: "aaai-2026"
paper_digest_conference_record_url: "https://ojs.aaai.org/index.php/AAAI/article/view/37167"
paper_digest_conference_pdf_url: "https://ojs.aaai.org/index.php/AAAI/article/view/37167/41129"
paper_digest_api_reader_contract: "beginner-researcher-v3"
paper_digest_api_reader_article_sha256: "3244fbba4747f3c59f190952282377c3a49cac22f66709372cc110165919c30a"
paper_digest_api_reader_plan_sha256: "2137a5015eb7d7432fd6ca4220060a9a9dd6c7c37989c0f4eb900cfbe4f8e402"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings-v4"
paper_digest_api_reader_source_bindings_sha256: "ce7db47a61780b9ac2f643e196af264b433dc9a460e515f03b3e72e650422364"
paper_digest_api_reader_source_table_count: 2
paper_digest_api_reader_source_formula_count: 5
paper_digest_api_reader_structured_artifacts_sha256: "4f5a7c0e6fe8552813cf6fb951ad3a723a29ce7ad630892ed72f31f8db06072c"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity-v1"
paper_digest_api_reader_author_identity_sha256: "ce2549962ba584824e47d8a1e3f7a7317ed29a666c52f61902806c2cfad86a3b"
paper_digest_api_reader_author_count: 9
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity-v1"
paper_digest_api_reader_resource_identity_sha256: "2d4287cac417680939c3c3f87c738d59cc9a3ede534d28549012ec3fbc7dd0ca"
paper_digest_api_reader_resource_count: 1
paper_digest_api_reader_decision_projection: "api-reader-decision-projection-v2"
paper_digest_scoring_contract: "api-scoring-audit-v2"
paper_digest_taxonomy_contract: "paper-taxonomy-flat-tags-compat-v1"
paper_digest_taxonomy_selection_contract: "paper-taxonomy-selection-v1"
paper_digest_taxonomy_registry_version: "paper-taxonomy-v1"
paper_digest_taxonomy_registry_sha256: "15c82a567ce5a55dc1175684ed08b64c158558639d9c8fb822c9587ec32a8778"
paper_digest_taxonomy_concepts: [{"facet":"method","id":"method.end-to-end-learning","label":"端到端学习"},{"facet":"method","id":"method.gnn","label":"图神经网络"},{"facet":"signal","id":"signal.audiovisual","label":"音视频"},{"facet":"signal","id":"signal.speech","label":"语音"},{"facet":"task","id":"task.av-understanding","label":"音视频理解"}]
paper_digest_primary_task: "音视频理解"
paper_digest_primary_method: "图神经网络"
paper_digest_score: 5.6
paper_digest_rank_bucket: "前50%"
paper_digest_document_type: "方法研究"
paper_digest_conference_structure: replayable-pdf-layout-v1
---

# 📄 从短行为模拟内部认知：用个性化权重图回归真实人格

> 英文题目：*Learning Personalised Human Internal Cognition from External Expressive Behaviours for Real Personality Recognition*

> 会议身份：`conference:aaai:2026:conference-paper-id:37167`


> ✅ 来源为官方会议 PDF；可重放的表格、公式文本与 Figure 像素已按 PDF 抽取结果绑定，未成功恢复的结构不作推断。

> 会议来源：[官方记录](https://ojs.aaai.org/index.php/AAAI/article/view/37167) · [官方 PDF](https://ojs.aaai.org/index.php/AAAI/article/view/37167/41129)

标签：#端到端学习 #图神经网络 #音视频 #语音 #音视频理解

评分：**5.6/10** | 创新 1.3/2 | 技术严谨 1.0/1.5 | 实验充分 1.0/1.5 | 清晰度 0.7/1 | 影响力 0.7/1.5 | 开源 0.0/1.5 | 可复现 0.1/0.5 | 工程/实践 0.8/1.5

排名：前50% | 文档类型：方法研究

## 👥 作者与机构

- Xiangyu Kong：机构信息未能从会议 PDF 纯文本可靠映射
- Hengde Zhu：机构信息未能从会议 PDF 纯文本可靠映射
- Haoqin Sun：机构信息未能从会议 PDF 纯文本可靠映射
- Zhihao Guo：机构信息未能从会议 PDF 纯文本可靠映射
- Jiayan Gu：机构信息未能从会议 PDF 纯文本可靠映射
- Xinyi Ni：机构信息未能从会议 PDF 纯文本可靠映射
- Wei Zhang：机构信息未能从会议 PDF 纯文本可靠映射
- Shizhe Liu：机构信息未能从会议 PDF 纯文本可靠映射
- Siyang Song：机构信息未能从会议 PDF 纯文本可靠映射

## 📌 核心摘要

真实人格识别需从个体的短时音频与面部行为推断自陈大五人格，其难点在于外部表情与内在特质弱相关，直接回归行为易偏向表观印象而非真实人格。该方法先以通用面部反应生成器学习通用人类认知，再由行为编码器从10秒音视频片段生成个性化偏移并精调通用权重，得到可复演个体专属面部反应的个性化认知权重。随后认知图学习将每块权重编码为二维矩阵值节点并构建边特征以保留结构关系，最后由二维图神经网络从认知图推断人格，且端到端联合优化反应重建与人格预测损失。与既往需长时双人交互搜索训练个性化网络的策略不同，本路线仅经前向推理生成权重并保留权重结构，避免了推理期重训练。与直接回归短片段行为的范式相比，其以可复演反应的权重作为认知的计算代理更贴近人格成因。在NoXI基准下，加法精调个性化认知的平均Pearson Correlation Coefficient为0.324，高于乘法精调基线的0.223。该结论的适用边界受限于NoXI与UDIVA双人交互语料，对长时跨场景泛化与缺失言语语义时的失败条件尚未验证。原文未披露训练、推理或部署成本

## 🔗 开源与复现资源

- 代码相关资源：<https://github.com/xk0720/DeepPersonality> — 链接不可用（HTTP 404）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 输入是什么，要预测什么，为什么直接回归不够？

本文输入是目标个体的外部可观测音视频行为，默认实现是 10 秒左右的短音频加面部片段。音频用预训练语音模型按 25 帧每秒抽特征，面部用人脸可形变模型抽系数。

目标是预测该个体自陈的大五真实人格，包含外向性、宜人性、开放性、尽责性和神经质。监督标签来自自陈问卷而非观察者打分，评价用均方误差、皮尔逊相关和一致性相关。

输出是 5 个连续分值，其中误差越小越好、相关越大越好。本文要解决的矛盾是既有模型大多扮演外部观察者，直接从行为特征回归分数。作者认为这种结构理论上更接近表观印象，而真实特质由内部认知决定。

**真实人格识别 × 表观人格识别：** 真实人格识别的分工是预测个体自陈的大五特质，与其内部认知相关；表观人格识别的分工是预测外部观察者对该个体的印象。搭配理由是两者可用同一段音视频作输入，但监督来源不同。组合意义是把前者从观察者回归改为先模拟内部认知再回归，避免用印象模型套真实标签。

下面先看示意图如何把两条路线画成不同闭环，再进入具体做法。上半部分画出已有方法，从表情语音经特征提取到行为特征再到回归器。最终只得到表观人格印象，下半部分画出本文方法，外部刺激进入多块个性化权重构成的网络。

> **看图路径：** 1. 先沿上分支从表情语音经特征提取到印象回归看单向箭头；2. 再看下分支外部刺激进入多块 Transformer 并受底部认知调制的回路；3. 对比上下分支输出框分别是表观印象与真实人格

[![原论文 Figure 1：Upper: Existing methods play the role of an external observer to directly infer personality…](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/aaai-2026/7d10e0b96e37/figure-1.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/aaai-2026/7d10e0b96e37/figure-1.png)

*论文图 1。原论文 Figure 1：“Upper: Existing methods play the role of an external observer to directly infer personality impressions from the individual’s external behaviours.”。*

该图下路的核心是中间多块权重与底部人头符号表示的认知模拟，右侧强调生成反应要向真实反应对齐。顶部输出框明确区分印象与真实人格，初学者可以沿箭头先走通主路径再看调制路径。

由此得到的方法全景是先学通用反应能力，再用短片段生成个性化修正。最后把修正后的权重当作认知表示来回归人格，而不是把行为向量直接回归人格。

### 同输入同目标的已有路线差在哪里？

按同输入、同目标、同监督来对照更公平。第一类是常规音视频人格识别，输入同样是人脸、身体、语音或其组合。代表做法是用残差网络或 Transformer 直接抽行为特征再回归。

这类方法运行阶段通常只需前向推理，但结构上等价于观察者打分。即使监督用自陈标签，也容易偏向表观印象，文中对比的 CR-Net 与 Dyadformer 属于此类。

第二类是基于认知模拟的路线，代表是探索每人专属网络结构来表示认知。目标上更接近本文，但在运行阶段需要对每人在长双人交互片段上搜索与训练。推理成本极高且依赖难获取的长双人数据。

第三类是心理学与神经科学依据，讨论外向与神经质等特质与认知偏向的关联。这类证据为用反应映射近似认知提供动机，但属于相关性而非因果证明。本文与第一类的区别是插入认知权重中间表示，与第二类的区别是用前向生成密钥代替逐人搜索。

### 把短行为变成可回归的认知表示难在哪里？

问题可分解为 3 步。第一步是如何从少量行为得到稳定个性化表示，单人只有短片段。直接学整套权重容易过拟合且参数量大。

第二步是如何让表示保留结构信息，权重是无序矩阵集合。压成向量会丢失层间与块间关系，而标准深度模型不直接处理这种对象。

第 3 步是如何保证学到的是人格相关认知，而非任意表情复刻能力。若只优化反应重建，模型可能记住表情纹理而忽略特质差异。

本文把第一步转化为学习与通用权重同形的偏移密钥，把第二步转化为学习矩阵型节点与边的认知图。把第 3 步转化为双损失联合训练，适用边界是输入限定为短音频加面部系数。

### 两阶段全景如何串起一个样本？

沿个体走一遍流程最清楚。记该人的短音频与面部为输入，行为编码器先得到行为向量。超生成器据此生成个性化密钥，修正函数把预学习通用权重修正为个性化认知权重。

此时通用面部反应生成器被改写为该人专属生成器，给定外部刺激音频面部。它应只生成该人风格的面部反应，随后图学习模块把个性化权重编码为认知图。

认知图包含多个矩阵节点与有向矩阵边，最后 2 维图网络在该图上传播。经池化与全连接头输出 5 个特质分，通用权重可复用。

**通用人类认知 × 个性化认知模拟：** 通用人类认知的分工是提供一套能对多种刺激生成合情理面部反应的基础权重；个性化认知模拟的分工是从目标人短片段提取偏移密钥去修正这套权重。搭配理由是单人数据少而共性认知多。组合意义是用冻结通用权重加轻量个性化修正高效得到个人专属网络。

全景图把 2 阶段画成左右并列结构，左侧是通用与个性化两层认知学习。右侧是图学习与图网络回归，初学者应先看清权重流与行为流两类箭头。

> **看图路径：** 1. 先沿左侧编号 1.1 到 1.2 看通用权重到个性化权重的演化；2. 再看底部从音视频经编码器到超生成器再到密钥的生成路径；3. 接着看右侧从矩阵节点边到多层二维图网络再到回归头的堆叠

[![原论文 Figure 2：The pipeline of our method, which consists of two main stages: (1) Personalised Human Cognition…](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/aaai-2026/7d10e0b96e37/figure-2.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/aaai-2026/7d10e0b96e37/figure-2.png)

*论文图 2。原论文 Figure 2：“The pipeline of our method, which consists of two main stages: (1) Personalised Human Cognition Simulation (PCS) including (1.1) generic human cognition learning and (1.2)…”。*

该图左上通用分支输出多种通用面部反应，左下个性化分支输出该人专属反应。右下多层图网络逐层更新矩阵节点，图中还标出块嵌入与拼接操作。

记住这个全景后，再看组件公式就不会迷失输入来源。密钥不是 1 次生成整网而是分块生成，这一点对理解效率很关键。

### 编码器、超生成器与图网络各自算什么？

行为编码器是一个基于 Transformer 的编码器，输入是短音频面部片段。输出是行为向量，该向量概括外部行为模式。

\[Zτ = PBPL(Aτ, Fτ)\]

该式先交代符号与输入，计算目标是压缩时序行为为定长表示。本身不直接用于回归人格，而是作为生成密钥的条件。

超生成器由全连接层构成，为高效生成多块多层矩阵。它从标准高斯分布采样与块层位置对应的可学习块嵌入。每个嵌入与行为向量拼接后经共享映射器投影为密钥矩阵。

\[Keyτ = {[PWHG(Zτ, hn,k)]}n=1:N,k=1:K = {[Keyτ n,k]}n=1:N,k=1:K\]

该式说明分块生成的拼接与共享映射逻辑，输入是行为向量加块嵌入。输出是与通用权重同形的密钥集合，相比独立投影器大幅减少参数。

修正操作把密钥作用于通用权重得到个性化认知权重，原文对比了直接生成、相乘与相加。实验显示加法更优，且修正函数可微。

\[Θτ = fREF(Keyτ, Θ)\]

该式中修正后的权重定义了专属生成器，使两路梯度都能回传到编码器。

**个性化行为模式学习 × 个性化权重超生成器：** 个性化行为模式学习的分工是把短音频面部编码为行为向量；个性化权重超生成器的分工是把该向量与块嵌入拼接并映射为与通用权重同形的密钥。搭配理由是直接回归全部权重参数量过大。组合意义是用共享映射器分块生成密钥实现大幅参数压缩。

节点编码把每块的多个权重矩阵经卷积提取再经全连接得到矩阵节点。做法上保持矩阵形态，避免压向量，边编码对每对节点施加注意力再细化。

\[Gτ(V, E) = CGL(Θτ)\]

该式输入是整套个性化权重，输出是含矩阵节点边集的图。边为有向矩阵边，动机是单标量边难以表达复杂关系。

2 维图网络每层对节点与边矩阵做投影，再按邻接用边矩阵加权聚合邻居。最后用自注意力图池化加回归头输出 5 维人格。

\[Pτ = 2D-GNNφ(Gτ(V, E))\]

该式输入是认知图，输出是人格预测，计算目标是在保留 2 维结构下完成传播。

**认知图学习 × 2 维图神经网络：** 认知图学习的分工是把无序权重矩阵组织为矩阵型节点与边，保留层级结构关系；2 维图神经网络的分工是直接在矩阵节点和矩阵边上传播与聚合。搭配理由是标准图网络只处理向量会压扁结构。组合意义是让权重结构信息不失真地进入人格回归。

复述时要强调组合新增作用是结构保留加结构感知传播。这区别于把权重展平接多层感知机的做法。

### 通用预训练与双损失联合训练如何分工？

训练分两段。第一段预训练通用面部反应生成器，采用扩散方式。用双人音视频交互片段训练网络从加噪反应恢复干净反应。

条件是触发该反应的对方音频面部行为，此时学习的是通用认知权重。它能生成不同人格个体都可能表达的合情理反应，结构固定为堆叠 Transformer 块。

第二段是端到端联合训练，冻结通用生成器权重。只更新行为编码器与超生成器、图学习与图网络，第一个损失比较个性化输出与真实反应。

第二个损失比较预测人格与自陈真值，两者共同迫使密钥携带人格线索。梯度经冻结生成器与密钥回传到编码器与超生成器。执行顺序上先完成通用预训练再进入联合训练，联合阶段不再改动通用权重，只让密钥通道承载个性化。

**面部反应重建损失 × 人格回归损失：** 面部反应重建损失的分工是约束个性化生成器复现该个体面对同一刺激的真实反应；人格回归损失的分工是约束图网络输出逼近自陈大五标签。搭配理由是单靠重建可能学到与人格无关的表情细节。组合意义是两路梯度共同迫使模拟出的认知保留人格相关线索。

训练示意图把扩散加噪去噪环与双损失回传画在一起，左侧短片段进入编码器生成密钥。底部去噪过程生成反应与真值比较，右上人格预测与真值比较。

> **看图路径：** 1. 先看左下扩散加噪与中部去噪恢复构成的反应生成闭环；2. 再看右上人格预测与真值之间的人格损失回传虚线；3. 确认个性化认知处于两路损失交汇的中心节点位置

[![原论文 Figure 3：Our end-to-end joint training strategy is driven by two loss functions: (1) Lτ compares the…](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/aaai-2026/7d10e0b96e37/figure-3.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/aaai-2026/7d10e0b96e37/figure-3.png)

*论文图 3。原论文 Figure 3：“Our end-to-end joint training strategy is driven by two loss functions: (1) Lτ compares the generated fa- cial reaction RΘτ with the GT personalised real facial re- action Rτ,GT.”。*

该图明确了通用生成器在联合阶段不再更新，密钥是唯一注入个性化的通道。人格梯度经图模块回传到认知节点后再影响编码器，初学者可据此核对冻结边界。

原文未报告优化器类型、学习率与扩散步数等取值，复现时应标记为缺项。推理阶段对新人只需 1 次前向得到密钥与认知图，无需逐人训练。

### 在什么数据、特征与指标下比较？

评估用两个公开音视频数据集，均带片段级自陈大五标签。NoXI 是多语言双人专家新手视频会议交互，共 84 个会话多话题。

UDIVA 是 147 人共 188 段面对面双人交互，含 4 种任务。特征上音频用预训练语音模型抽帧级特征，面部用人脸可形变模型抽系数。

帧率为 25 帧每秒，默认送入编码器的片段长 10 秒。指标沿用已有基准，用均方误差、皮尔逊相关与一致性相关。

其中 UDIVA 侧重误差与一致性相关，NoXI 侧重误差与皮尔逊相关。比较对象包括常规外部观察者模型与基于认知搜索的模型，输入时长存在差异。

硬件与统计显著性在给定证据中未交代，聚合口径为五特质平均与分特质并存。复现前应先确认划分与特征版本一致，否则相同数值也可能对应不同指标。比较时应先对齐数据集与标签口径，再看误差与相关方向是否一致。

### 主结果在误差、相关与效率上说明什么？

先提出比较问题：在相同自陈标签下，认知模拟路线是否比直接回归路线更好。公平条件是同数据集同标签体系，指标方向为误差越低越好、相关越高越好。

下表整理推理成本与 NoXI 平均皮尔逊相关的对应关系，数字来自原文连续句逐字证据。表前已交代问题与方向，表后将解释收益与反例。

| 条件 | 模型 | 推理耗时 | NoXI 平均相关 | 路线 |
| --- | --- | --- | --- | --- |
| 10 分钟音视频 | OCEAN-AI | 1.3 minutes | 0.216 | 外部观察者 |
| 10 分钟音视频 | DCC | 1.8 minutes | 0.008 | 外部观察者 |
| 10 分钟音视频 | Dyadformer | 4.46 minutes | 0.224 | 外部观察者 |
| 10 分钟音视频 | Amb-Fac | 3.20 minutes | 0.040 | 外部观察者 |
| 10 分钟音视频 | P-NAS | 8.3 days | 0.351 | 认知搜索 |
| 10 分钟音视频 | Ours | 5.29 minutes | 0.324 | 前向认知模拟 |

表后解释主要收益与具体代价。收益是本方法在 UDIVA 与 NoXI 上优于常规路线，原文报告了平均误差与相关提升。尤其在外向与宜人上取得最优，作者解释为这两特质更关联外部表达。对照时先确认同为 10 分钟片段口径再比较耗时与相关，避免把搜索式长交互成本与短片段前向成本直接等同。

代价是推理耗时 5.29 minutes，高于多数常规模型的 1 至 4 分钟水平。平均相关仍略低于需 8.3 days 的搜索式认知模型，且个别特质上未胜出。

可视化显示人格分布相近的组具有相似权重条纹，面对同一刺激时一组表情克制、一组更生动。这支持权重携带人格线索，但像素不能精确读出数值。

下面先看权重与反应对照图如何把组内相似与组间差异并置，再回到消融确认组件贡献。该图左侧为权重矩阵面板，右侧为同刺激下反应序列。

> **看图路径：** 1. 先看左侧两组个性化权重矩阵的颜色条纹分布差异；2. 再看右侧同一刺激下两组个体反应序列的表情活跃程度；3. 对照每行左侧大五柱状图是否组内相近

[![原论文 Figure 4：(a) Example personalised weight matrices learned for different individuals; (b) Individuals’…](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/aaai-2026/7d10e0b96e37/figure-4.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/aaai-2026/7d10e0b96e37/figure-4.png)

*论文图 4。原论文 Figure 4：“(a) Example personalised weight matrices learned for different individuals; (b) Individuals’ facial reactions generated by FRG with different personalised weights in response to…”。*

该图左侧权重矩阵面板可见组内条纹相近、组间有差，右侧反应序列可见同刺激下不同权重的表情差异。每行左侧大五柱状图显示组内分布相近对应反应风格相近，这与用重建约束个性的设计一致。

### 哪些组件与修正方式真正起作用？

消融按问题组织：密钥如何作用于通用权重，认知模拟与预训练是否必要。先看修正方式对比，指标方向为误差越低越好、相关越高越好。

下表为不同修正策略的表现，含可运行的加法与乘法及直接生成对照。表前已交代问题与方向，表后将解释收益与未胜出项。

| 指标 | 策略 | Open | Cons | Extrav | Agree | Neuro |
| --- | --- | --- | --- | --- | --- | --- |
| 误差越低越好 | Keyτ | 0.075 | 0.067 | 0.034 | 0.064 | 0.046 |
| 误差越低越好 | Keyτ x Θ | 0.058 | 0.055 | 0.034 | 0.037 | 0.053 |
| 误差越低越好 | Keyτ + Θ | 0.074 | 0.052 | 0.024 | 0.037 | 0.053 |
| 相关越高越好 | Keyτ | 0.005 | 0.240 | 0.258 | 0.241 | 0.246 |
| 相关越高越好 | Keyτ x Θ | 0.248 | 0.447 | 0.170 | 0.349 | -0.100 |
| 相关越高越好 | Keyτ + Θ | 0.099 | 0.520 | 0.424 | 0.515 | 0.061 |

表后解释是直接把密钥当作认知而不利用预学习通用权重时表现差。这说明短片段难以从零得到可靠认知，加法在平均相关上优于乘法。

但开放性上乘法更高，神经质上三者均不强，构成未胜出项。提示修正方式存在特质差异，不能只看平均值下结论。

再看组件消融，直接从短片段回归人格的基线最差。加入生成器模拟后大幅改善，预训练起关键作用，块级节点优于分散编码。

矩阵节点优于向量节点，矩阵边带来任务相关的消息交换增益。端到端训练一致提升，支持其迫使模拟保留人格线索的判断。

### 还有哪些边界与未验证的推测？

论文直接报告的局限包括未充分融入细粒度言语特征，网络结构较为简单。未来拟改进这两点，这属于报告而非推测。

有限解释是外向与宜人更易从外部行为捕捉，这得到分特质最优的支持。但未做因果干预，不能说表情决定特质，相关性不是因果。

未验证推测是堆叠 Transformer 可近似人类认知的假设，本文仅通过反应复现与人格提升间接支持。未测量认知保真度本身，可能待验证。

未测量项包括误判率分布、实际延迟分解与跨语言泛化，不承诺这些量得到改善。数据边界是仅在 NoXI 与 UDIVA 双人交互上验证，短片段默认为 10 秒。

评价边界是不同数据集用不同相关指标，跨数据集比较相关数值需谨慎。资源边界是代码链接当前不可用，状态显示 404，无法确认权重下载条件。

### 要复现应先固定什么，再跑什么？

复现先做信息条件固定。数据侧固定 NoXI 与 UDIVA 的划分、片段采样与自陈标签版本。特征侧固定语音模型与人脸模型版本、帧率对齐与窗口切分。

指标侧固定均方误差、皮尔逊与一致性相关的计算库与平均方式。避免把不同聚合当同指标比较，百分点与相对百分比含义不同。

模型侧按两段实现：先按扩散目标预训练通用生成器，堆叠块数与层数对应原文设定。再冻结通用权重，实现编码器、共享超生成器加块嵌入、加法修正。

再实现节点边编码与 2 维图网络，用重建与人格双损失联合训练。超参数缺项需自行搜索并记录，不从名称推定优化器与步数。

验证时先复现无认知基线与加模拟的差距，再复现预训练开关与矩阵化开关。最后核对推理耗时口径是否为 10 分钟音视频全流程，由于代码不可达应重写。

### 何时值得尝试这个路线？

当任务目标是自陈真实人格而非观众印象，且只能采集到短单人音视频时。该路线值得尝试，因为它用可复用通用生成器加轻量密钥。

这避免了逐人长时搜索，同时保留权重结构给图网络。尝试前应确认有足够双人交互数据用于预训练，否则个性化修正缺乏起点。

当已有长双人数据且能承受天级搜索成本时，搜索式模型可能在平均相关上略高。需权衡效率，当输入以文本语义为主时本文方法不占优。

教学上记住一条样本闭环：短行为到行为向量到密钥到个性化权重。到认知图再到 5 维分数，双损失保证中间权重既能复现反应又能预测特质。

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。
- 评分规则：type-aware-v1
- 评分模型：muse-spark-1.3-contributor
- 评分请求协议：openai_responses

---

[← 返回 aaai-2026 论文汇总](/posts/conference-aaai-2026/)
