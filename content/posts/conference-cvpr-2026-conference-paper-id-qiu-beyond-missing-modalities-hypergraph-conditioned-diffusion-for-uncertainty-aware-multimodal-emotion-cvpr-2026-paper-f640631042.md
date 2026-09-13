---
title: "Beyond Missing Modalities: Hypergraph Conditioned Diffusion for Uncertainty-Aware Multimodal Emotion Recognition"
date: 2026-09-13
draft: false
description: "针对对话情感识别中随机缺失模态导致语义不一致与模态冲突，论文用掩码超图注意力为扩散恢复提供条件并用特征源与判别双通道估计不确定性做证据融合，在缺失率 0.0 至 0.7 下保持最高准确率，代价是两阶段训练与 300 步扩散采样开销。"
tags: ["扩散模型", "图神经网络", "多模态学习", "语音情感识别"]
categories: ["cvpr-2026 论文"]
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_paper_id: "conference:cvpr:2026:conference-paper-id:Qiu_Beyond_Missing_Modalities_Hypergraph_Conditioned_Diffusion_for_Uncertainty-Aware_Multimodal_Emotion_CVPR_2026_paper"
paper_digest_source_kind: conference
paper_digest_conference_id: "cvpr-2026"
paper_digest_conference_record_url: "https://openaccess.thecvf.com/content/CVPR2026/html/Qiu_Beyond_Missing_Modalities_Hypergraph_Conditioned_Diffusion_for_Uncertainty-Aware_Multimodal_Emotion_CVPR_2026_paper.html"
paper_digest_conference_pdf_url: "https://openaccess.thecvf.com/content/CVPR2026/papers/Qiu_Beyond_Missing_Modalities_Hypergraph_Conditioned_Diffusion_for_Uncertainty-Aware_Multimodal_Emotion_CVPR_2026_paper.pdf"
paper_digest_api_reader_contract: "beginner-researcher-v3"
paper_digest_api_reader_article_sha256: "ba30befb46a86d6b8d75f3318f0a9bb16b0fa9b07b7f1ce326b1834317ba1d63"
paper_digest_api_reader_plan_sha256: "7e5a519e48d646f0a5778fafa3fae7196f0320d0e24bb0824c15466a6f6b504f"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings-v4"
paper_digest_api_reader_source_bindings_sha256: "e85efd12d0faeff9b59a4d59372962097d002a11342f06a11227db58ca302825"
paper_digest_api_reader_source_table_count: 2
paper_digest_api_reader_source_formula_count: 0
paper_digest_api_reader_structured_artifacts_sha256: "2d52f50316fd3aec5616784a500808265fdb9ee0da9c1cb702e750b51671bbe4"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity-v1"
paper_digest_api_reader_author_identity_sha256: "4008b58f5dd49d6c9bb43a7261defa4aaae53cca1e1307e89e802134896bea3d"
paper_digest_api_reader_author_count: 9
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity-v1"
paper_digest_api_reader_resource_identity_sha256: "4f04b094f8a94cd9d26baa073415930fff463b4cae7a86ce91c9a49cb841d530"
paper_digest_api_reader_resource_count: 0
paper_digest_api_reader_decision_projection: "api-reader-decision-projection-v2"
paper_digest_scoring_contract: "api-scoring-audit-v2"
paper_digest_taxonomy_contract: "paper-taxonomy-flat-tags-compat-v1"
paper_digest_taxonomy_selection_contract: "paper-taxonomy-selection-v1"
paper_digest_taxonomy_registry_version: "paper-taxonomy-v1"
paper_digest_taxonomy_registry_sha256: "15c82a567ce5a55dc1175684ed08b64c158558639d9c8fb822c9587ec32a8778"
paper_digest_taxonomy_concepts: [{"facet":"method","id":"method.diffusion","label":"扩散模型"},{"facet":"method","id":"method.gnn","label":"图神经网络"},{"facet":"method","id":"method.multimodal-learning","label":"多模态学习"},{"facet":"task","id":"task.emotion-recognition","label":"语音情感识别"}]
paper_digest_primary_task: "语音情感识别"
paper_digest_primary_method: "扩散模型"
paper_digest_score: 6.2
paper_digest_rank_bucket: "前50%"
paper_digest_document_type: "方法研究"
paper_digest_conference_structure: replayable-pdf-layout-v1
---

# 📄 缺模态下先补语义再算不确定性：超图引导扩散与双通道证据融合

> 英文题目：*Beyond Missing Modalities: Hypergraph Conditioned Diffusion for Uncertainty-Aware Multimodal Emotion Recognition*

> 会议身份：`conference:cvpr:2026:conference-paper-id:Qiu_Beyond_Missing_Modalities_Hypergraph_Conditioned_Diffusion_for_Uncertainty-Aware_Multimodal_Emotion_CVPR_2026_paper`


> ✅ 来源为官方会议 PDF；表格与 Figure 按原文证据绑定。PDF 公式以原页区域图片展示，未冒称作者原始 TeX。

> 会议来源：[官方记录](https://openaccess.thecvf.com/content/CVPR2026/html/Qiu_Beyond_Missing_Modalities_Hypergraph_Conditioned_Diffusion_for_Uncertainty-Aware_Multimodal_Emotion_CVPR_2026_paper.html) · [官方 PDF](https://openaccess.thecvf.com/content/CVPR2026/papers/Qiu_Beyond_Missing_Modalities_Hypergraph_Conditioned_Diffusion_for_Uncertainty-Aware_Multimodal_Emotion_CVPR_2026_paper.pdf)

标签：#扩散模型 #图神经网络 #多模态学习 #语音情感识别

评分：**6.2/10** | 创新 1.4/2 | 技术严谨 1.0/1.5 | 实验充分 1.2/1.5 | 清晰度 0.7/1 | 影响力 0.8/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 0.8/1.5

排名：前50% | 文档类型：方法研究

## 👥 作者与机构

- Xihang Qiu：机构信息未能从会议 PDF 纯文本可靠映射
- Yuhao Fang：机构信息未能从会议 PDF 纯文本可靠映射
- Qing Zhou：机构信息未能从会议 PDF 纯文本可靠映射
- Bin Zhai：机构信息未能从会议 PDF 纯文本可靠映射
- Jialong Hong：机构信息未能从会议 PDF 纯文本可靠映射
- Wanpeng Zhang：机构信息未能从会议 PDF 纯文本可靠映射
- Yao Lu：机构信息未能从会议 PDF 纯文本可靠映射
- Ye Zhang：机构信息未能从会议 PDF 纯文本可靠映射
- Chun Li：机构信息未能从会议 PDF 纯文本可靠映射

## 📌 核心摘要

对话多模态情感识别（Multimodal Emotion Recognition in Conversations，MERC）需从每轮话语的音频、文本与视觉信号推断情感标签，现实中传感器失效与传输错误导致随机模态缺失，恢复特征与可用特征的语义错位及模态冲突使精度骤降。该工作提出Hypergraph Diffusion and Evidence Fusion based Emotion Recognition（HyperEF）框架，先以掩码超图注意力（Masked Hypergraph Attention，MHGAT）从不完整对话抽取高阶上下文与多模态关系，再以该表征为条件引导扩散模型在隐空间补全缺失模态，最后由双通道证据融合（Dual Channel Evidence Fusion，DCEF）按源层与判别层不确定性做证据级自适应融合输出。与融合空间补全和等权融合相比，差异在于显式建模高阶可变贡献关系并将恢复可信度纳入主观逻辑融合。在IEMOCAP四分类缺失率0.1设置下准确率达82.1%，超出次优基线3.5个百分点，且在3个数据集划分8档缺失率下均保持领先。结论限于两说话人与多人英文影视对话、每样本至少保留1个模态的随机缺失协议，未验证完全缺失、非随机缺失与跨语种外推。训练分100轮扩散预训练加50轮主干训练，在单张NVIDIA L40S上完成，MHGAT双层每轮约0.82秒，原文未披露端到端推理时延与采样步数折中曲线。

## 🔗 开源与复现资源

本次未形成可展示的已核验资源记录，开放状态尚未核实。
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 输入是什么，目标是什么，为什么缺模态会难倒多模态融合？

本文的研究对象是对话中的多模态情感识别，输入是一个多人多轮对话，包含按时间排列的多个话语，每个话语同时有文本与视觉与声学 3 种单模态观测，输出是每个话语的情感类别。初学者可以这样理解学习依赖：先要能表示单条话语的多模态内容，再要能利用对话上下文，最后才能在部分观测缺失时仍然判对。必须保留的信息是恢复发生在模态的隐特征层而非融合后的表示层，融合发生在证据层而非简单的特征拼接。

现实部署中传感器故障或传输错误会导致随机缺失，例如某条话语的文本丢失而视觉和声学保留，或声学丢失而文本保留。论文把每个话语每种模态是否可用记为掩码，可用记为 1，缺失记为 0，并要求每个样本至少保留一种模态。缺失带来的第一个困难是语义不一致：生成模型补出的特征可能与同话语的可用模态在情感含义上对不上。第二个困难是可信度不同：补出的特征与真实观测的可靠程度不同。

不同模态在不同样本上的判别信心也不同，若平均对待或固定加权就会放大冲突。因此论文把问题拆成两步：先在隐特征空间恢复缺失模态并保持话语级语义一致，再在证据层面自适应融合多模态信息。评估时缺失率从 0.0 到 0.7 变化，缺失率定义与可用模态数有关。本文当前没有可用的代码与模型资源声明，不得声称代码已公开。

### 同输入同目标的已有路线如何处理缺失，超图与证据理论各补什么？

在相同输入与相同目标下，已有缺失处理路线可分为两类。第一类是融合空间补全，代表是图补全网络与谱域重构图网络，它们在多模态融合后的特征层恢复缺失信息，优点是流程短，缺点是论文指出其可解释性弱且恢复质量受限。第二类是模态空间补全，代表是缺失模态想象网络及其对比扩展，以及基于分数的扩散恢复方法，它们直接重建缺失模态的隐特征。

图神经网络在对话情感识别中用于建模话语关系，早期有用傅里叶图算子缓解过平滑，有用关系图网络分别捕捉说话人与时间信息，但传统图只能表达两两关系。超图允许一条超边连接两个以上节点，适合表达多变量关系，已有工作用超图探索多频率情感动态或区分独白一致情感与情感转折，但未区分不同节点与超边的贡献差异。
证据理论常被称为 Dempster-Shafer 理论，它把信念质量分配给可能结果的子集，再用组合规则融合多源证据。

与贝叶斯方法依赖参数概率分布不同，它更直接地表达支持不足与证据冲突。传统做法主要关注空虚度，即缺乏支持证据导致的不确定性，后续扩展引入不和谐与和谐等概念，分别对应证据冲突与证据一致。

**模态空间补全 × 融合空间补全：** 模态空间补全负责直接在隐特征层恢复缺失模态的表示，融合空间补全负责在多模态已融合的表示层做信息填补，搭配比较的理由是二者恢复位置不同导致可解释性与恢复质量不同，论文选择前者并新增超图条件约束，是为了保证恢复特征与同话语可用模态的语义一致。

上述对照说明论文的位置：恢复位置选模态空间，不确定性建模选证据理论的扩展形式，新增点是用带掩码与注意力的超图同时解决高阶依赖与缺失区分，再把生成误差引入不确定性分解。

### 为什么一条看似中性的话需要同时看模态内与上下文？

论文用一个 5 轮对话例子说明高阶依赖。教学例子中左侧给出每条话语的文本与声音描述、视觉图像与情感标注，右侧画出指向第三条话语文本缺失节点的语义推理过程。第三条话语的文本含义模糊，声学语调平直，单独看难以判定，但结合其视觉模态可以指向厌恶。在上下文维度，第三条的隐含情感与第一条与第四条与第五条有关。
该例子同时说明注意力应是非均匀的。

在模态维度，视觉模态的贡献大于声学模态；在上下文维度，第一条与第四条与第二条的贡献依次递减。因此需要一种能选择性建模多变量关系的语义捕获网络，这正是后文掩码超图注意力的动机。教学例子仅用于理解依赖结构，不代表模型在所有对话中都按相同权重推理。

> **看图路径：** 1. 先看左侧五条话语的文本声学与视觉表情及标注情感，确认 u3 文本模糊而视觉指向厌恶；2. 再看右侧指向 u3 文本缺失节点的箭头粗细，比较视觉模态与声学模态的贡献差异；3. 最后对照底部图例区分空心缺失节点与实心可用节点，确认上下文中 u1 与 u4 与 u5 的指向

[![原论文 Figure 1：An example of multimodal dialogue (a) and the semantic inference process of text utterance u3 (b).](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/106ddf73a5d7/figure-1.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/106ddf73a5d7/figure-1.png)

*论文图 1。原论文 Figure 1：“An example of multimodal dialogue (a) and the semantic inference process of text utterance u3 (b).”。*

从像素看，左图第三条文本为转折加无所谓的表述并标注厌恶，右图第三行文本节点为空心缺失节点，多条来自其他文本节点与同行视觉声学节点的箭头指向它，且箭头粗细不同。底部图例明确区分空心为缺失、实心为可用。这支持论文的判断：恢复缺失文本必须同时利用同话语其他模态与跨话语上下文，且贡献需要加权。

### 沿一个缺失样本走完从编码到分类的主路径

以一条文本缺失而视觉声学可用的话语为例，完整流程可分为 4 段。第一段是单模态编码：文本与视觉与声学经各自预训练编码器得到隐特征，缺失位置先置零并保留其在超图中的位置与连接关系。第二段是条件构造：掩码超图注意力网络在不完整对话图上做两步聚合，输出沿模态维拼接成条件。第三段是恢复：条件扩散模型以该条件引导去噪，把噪声逐步还原为缺失文本的隐特征。

第 4 段是分类与融合：完整表示再次经过超图注意力提炼，每模态经证据网络输出证据向量，再经双通道证据融合得到最终情感分布。这种安排的理由在原文中是显式的：恢复阶段解决缺什么，融合阶段解决信什么。恢复放在隐特征空间是为了保留模态身份以便后续按可信度加权。融合放在证据层是为了把生成误差与分类模糊分开处理。

> **看图路径：** 1. 先沿最左框从编码器到条件扩散到插值到超图注意力到 DST 的纵向主路径走一遍；2. 再看右上掩码超图注意力框内超图与点到边与边到点的三段结构与掩码相加位置；3. 最后对照右下证据理论框内熵支路与扩散误差支路如何汇合得到全集质量

[![原论文 Figure 2：The detailed structure of the HyperEF.](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/106ddf73a5d7/figure-2.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/106ddf73a5d7/figure-2.png)

*论文图 2。原论文 Figure 2：“The detailed structure of the HyperEF.”。*

从像素看，最左纵框完整呈现上述主路径，文本与图像与波形在顶部输入，中部条件扩散与掩码超图注意力相连，底部经超图注意力与 DST 得到情感。右上框展示掩码与超图相加后进入点到边再到点的过程，右中框展示噪声与时间步进入的采样公式，右下框展示熵支路与扩散误差支路汇合为全集质量。图注声明图中数学符号与正文公式一致，因此阅读时应以正文符号定义为准。

### 掩码超图注意力如何区分缺失并加权高阶关系？

先用白话解释术语：超图是一种图，普通边只连两个点，超边可以 1 次连多个点；注意力权重是给每个邻居的打分，分数高的在聚合时占比大。掩码超图注意力就是在超图聚合中加入缺失指示，并用注意力区分重要程度的网络。后文简称固定为掩码超图注意力与超图与注意力权重。
具体构造上，一个对话的所有单模态话语作为节点，若对话有 N 轮则节点数为 3N。

超边包括上下文边与多模态边，上下文边按模态把跨话语的同模态节点连起来，多模态边把同话语的 3 个模态节点连起来。构造节点时保留缺失节点的位置与超边关系，仅将其数值置零，再把掩码嵌入加到节点表示上。这一步让网络在后续聚合中能感知哪个是补零的缺失节点。
聚合分两步：先从点到边得到下一层超边表示，再从边到点更新节点。两步都用注意力实现，超边初始用可学习嵌入表示。

点到边时对超边连接的所有节点计算注意力，突出情感词强烈或语义清晰的节点；边到点时对节点连接的所有超边计算注意力，突出可靠的上下文边或多模态边。论文报告该网络层数为 2。

**掩码超图注意力 × 条件扩散：** 掩码超图注意力负责从不完整对话中抽取高阶上下文与多模态依赖并区分缺失节点，条件扩散负责在隐特征空间逐步去噪恢复缺失模态，二者搭配的理由是单纯生成容易与同话语可用模态语义脱节，而超图条件把上下文约束注入每一步去噪，组合后新增的作用是恢复特征在话语级语义一致。

**超图 × 注意力权重：** 超图负责用一条边同时连接多个单模态话语节点以表达上下文边与多模态边，注意力权重负责在点到边和边到点两步聚合中区分不同节点与超边的贡献，搭配理由是固定关联矩阵无法突出信息量大的关系，组合后新增的作用是让恢复时自动偏向情感词强烈的话语和可靠的可用模态。

复述时要注意：掩码的作用是区分可用与缺失，注意力的作用是区分重要与次要，超图的作用是提供 1 次聚合多个相关节点的高阶结构。三者缺一不可，否则要么把补零节点当真观测，要么把所有上下文平均对待。

### 条件扩散如何把超图语义注入缺失特征的生成？

先用白话解释术语：扩散模型是先加噪再去噪的生成模型，训练时学习从带噪特征预测所加噪声，采样时从纯噪声逐步去噪得到目标特征；条件扩散是在去噪的每一步都额外输入一段语义描述，让生成结果受该描述约束。本文的条件就是上节超图网络输出沿模态维拼接后的表示。条件扩散后文简称保持一致。
训练过程使用 U-Net 作为条件噪声预测网络，中间层用交叉注意力把 U-Net 特征与线性映射后的条件融合。

为增强条件作用，训练时以固定概率随机丢弃条件，从而同时学会无条件预测。目标是预测噪声与真实噪声的均方误差。采样过程把条件预测与无条件预测加权合并，权重记为 w，论文取值为 7.5，再按保留率与方差计算逆向均值并加随机扰动逐步采样。
该设计沿袭无分类器引导的思想：条件分支提供语义方向，无条件分支提供多样性与稳定性，加权合并控制条件强度。超图条件在训练与采样 2 阶段都使用，目的是让恢复特征与可用模态在同话语内语义一致。

原文未给出 U-Net 的具体通道数与丢弃概率数值，这是复现时需要补看附录的具体缺项。
需要区分原始目标与实现：原始目标是恢复缺失模态的隐特征分布，实现上是最小化噪声预测误差的代理目标，不能把噪声误差小直接等同于情感分类正确，分类正确还依赖后文的融合。扩散步数设置为 300。

### 双通道证据融合如何把生成误差与分类模糊分开算？

先用白话解释术语：证据是指模型对每个情感类别给出的非负支持数，由分类头把 Softmax 换成 ReLU 得到；基本概率指派是把证据换算成每个类别与全集上的信念质量，全集上的质量越大表示不知道的程度越高。本文的双通道是指从特征源与判别层两个视角分别估计全集质量。特征源不确定性与判别层不确定性后文简称固定。

特征源通道估计恢复引入的不确定性：取条件扩散采样最后一步的预测噪声与真实噪声的平方误差，经均值中心化与映射，再用缩放系数调整到合适范围，原始特征的该项置零。判别层通道估计分类模糊：用预测分布的归一化熵，熵越高表示决策越模糊。两者按缩放因子加权相加得到全集的基本概率指派，再按比例分配到各类别概率。
多模态融合时按 Dempster 组合规则两两迭代融合不同模态的概率分布，分子是交集为目标类的质量乘积，分母扣除空集冲突。

这种融合能自然处理冲突：一致证据相互增强，冲突证据被归一化削弱。论文还比较了第二解耦方向的选择：在缺失率 0.3 的 MELD 上试验，发现基于熵的判别层不确定性是最优的第二方向。

**特征源不确定性 × 判别层不确定性：** 特征源不确定性负责度量扩散恢复引入的生成误差，用采样末步预测噪声与真实噪声的均方误差经映射得到，判别层不确定性负责度量分类分布的模糊程度，用归一化交叉熵即熵估计得到，搭配理由是恢复可信度与分类可分性是两个不同来源的不可靠，组合后新增的作用是通过加权得到全集的基本概率指派再做 Dempster 融合，实现自适应证据融合。

基线是基于空虚度的融合。这为双通道选择提供了已验证对照，而非仅凭直觉。复述时要唯一回指：特征源项来自扩散误差，判别项来自熵，两者汇合为全集质量后再进入模态间融合。

### 目标函数由哪三项组成，训练分几个阶段、参数如何设置？

最终优化目标由三项组成：分类交叉熵与 KL 正则与空虚度。交叉熵让融合后的概率接近独热标签，KL 正则把错误类别的狄利克雷参数压向均匀分布以惩罚错误证据，空虚度约束证据总量不足的不确定性。三项用平衡系数加权，论文经贝叶斯优化确定系数，并先做粗网格再细搜其他缩放参数。空虚度与 KL 正则后文简称固定。

**空虚度 × KL 正则：** 空虚度负责因证据总量不足导致的不确定性，随狄利克雷强度增大而减小，KL 正则负责把错误类别的证据压向均匀分布，搭配理由是只加空虚度会无差别放大所有类别的证据，组合后新增的作用是在目标函数中形成互补约束，使正确类证据保留而错误类证据被惩罚。

训练分两个阶段：先预训练带掩码超图条件的扩散模型 100 轮，再训练主干网络 50 轮。优化器均用 AdamW，IEMOCAP 批大小为 8 个对话、学习率为 5 乘 10 的负 5 次方，MELD 批大小为 64 个对话、学习率为 1 乘 10 的负 4 次方。超图层数为 2，扩散步数为 300，条件权重为 7.5。所有实验在一张 48 GB 显存的显卡上运行，并做五折交叉验证后报告测试集均值。
原文明确报告了冻结与更新的粗粒度安排，但未逐层说明哪些编码器冻结、梯度是否截断回传到预训练编码器。

复现时应先按 2 阶段流程跑通，再核对附录中的编码器配置，不能从模型名称推定其全部可训练。超参数起点可直接用论文报告值，记录随机种子与划分。

### 数据、缺失协议、基线与指标如何保证可比？

数据集有两个。IEMOCAP 包含 151 个对话与 7433 条话语，均为双人对话，为公平比较采用两种常见标注法分别生成 4 类与 6 类版本。MELD 包含 1432 个多人对话片段、13708 条话语与 304 位说话人，情感类型为 7 类，来源于电视剧老友记。2 数据集说话人数与类别数不同，因此分别设置参数与模型。
缺失协议采用常见的随机缺失，缺失率定义为 1 减去所有样本可用模态总数除以样本数与模态数的乘积，保证每个样本至少保留一种模态，模态数为 3 时缺失率取值从 0.0 到 0.7。

指标上 IEMOCAP 报告 4 类准确率与 6 类准确率，MELD 报告 7 类准确率，消融中同时报告 F1。准确率方向是越高越好，恢复质量用均方误差衡量单样本保真度。
恢复质量还用带径向基核的平方最大均值差异衡量分布级对齐，两者都是越低越好。基线覆盖两条路线：融合空间补全的图补全网络与谱域重构图网络，模态空间补全的缺失模态想象网络及其对比扩展与基于分数扩散的缺失模态恢复方法。论文声明在统一环境与数据集设置下比较，这是判断公平性的关键条件。

### 主结果在不同缺失率下是否稳定领先，恢复质量如何？

要回答的问题是：在相同随机缺失协议下，新方法相对实际可运行基线在各缺失率上能带来多少准确率提升，以及恢复的特征是否同时保真且分布对齐。下表整理 3 个数据集在部分缺失率下的准确率对比，指标方向为越高越好。表前已说明比较问题是随机缺失下的情感分类准确率，公平条件是统一环境与相同缺失协议，指标为各数据集的分类准确率。

| 数据集 | 缺失率 | 指标 | 基线方法 | 本方法准确率 |
| --- | --- | --- | --- | --- |
| 4 类对话数据 | 0.1 | 准确率 | 谱域重构图网络 78.6 | 82.1 |
| 6 类对话数据 | 0.6 | 准确率 | 谱域重构图网络 55.5 | 59.5 |
| 7 类多人对话数据 | 0.0 | 准确率 | 基于分数扩散恢复 67.1 | 69.3 |
| 7 类多人对话数据 | 0.7 | 准确率 | 基于分数扩散恢复 55.3 | 57.1 |

> **看图路径：** 1. 先按行确认上为 IEMOCAP 下为 MELD，按列确认左为 IMDer 右为 HyperEF；2. 再按图例区分深色原始特征与浅色生成特征，观察同模态两色点云是否重叠；3. 最后比较左右两列中文本与声学与视觉三色簇的分离与混杂程度

[![原论文 Figure 4：t-SNE visualization of recovered and original features from HyperEF and IMDer on two datasets.](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/106ddf73a5d7/figure-4.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/106ddf73a5d7/figure-4.png)

*论文图 4。原论文 Figure 4：“t-SNE visualization of recovered and original features from HyperEF and IMDer on two datasets.”。*

上表显示新方法在 3 个数据集与 0.0 至 0.7 的 8 个缺失率下均为最高，次高用下划线标出。关键数字上，4 类数据缺失率 0.1 时比谱域重构图网络高 3.5 个百分点，6 类数据缺失率 0.6 时高 4.0 个百分点，7 类数据完整模态时比基于分数扩散方法高 2.2 个百分点。论文报告所有配对差异方向一致，检验取得极端统计量与双侧 p 为 0.0078。总体趋势不等于每一轮对话都更优。代价是扩散采样与超图聚合的额外计算。从像素看，右列新方法的浅色生成点云与深色原始点云在同色簇内高度重叠，而左列基线的深浅色簇分离更明显。

### 注意力是否真在看情感词与缺失，目标函数每项是否必要？

要回答的问题是：超图注意力的可解释性是否成立，以及目标函数中两项正则是否都必要。下表是在缺失率 0.3 下去掉不同正则项后的准确率与 F1 对比，指标方向为越高越好。表前已说明比较问题是正则项对分类的贡献，公平条件是同数据集同缺失率同主干，指标为准确率与 F1。

| 配置 | 4 类准确率 | 4 类 F1 | 7 类准确率 | 7 类 F1 |
| --- | --- | --- | --- | --- |
| 去掉两项 | 76.85 | 76.71 | 55.06 | 43.35 |
| 只保留空虚度 | 48.75 | 38.55 | 62.92 | 59.76 |
| 只保留 KL 正则 | 77.60 | 77.42 | 50.40 | 33.78 |
| 保留两项 | 80.31 | 79.77 | 63.78 | 61.47 |

> **看图路径：** 1. 先看上面板中指向文本上下文超边的多条细箭头数值与指向多模态超边的粗细差异；2. 再看下面板三行文本与视觉与声学节点在缺失下虚线缺失框的位置与注意力数值变化；3. 最后对照底部上下文注意力与多模态注意力色条，确认数值范围与颜色深浅对应关系

[![原论文 Figure 3：Aggregation process of MHGAT and visualization of attention assigned to each node and edge.](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/106ddf73a5d7/figure-3.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/106ddf73a5d7/figure-3.png)

*论文图 3。原论文 Figure 3：“Aggregation process of MHGAT and visualization of attention assigned to each node and edge.”。*

上表显示两项同时保留时最优，且数据集敏感性不同：在 4 类数据上去掉 KL 正则导致无法有效惩罚错误类别，准确率明显下降；在 7 类数据上去掉空虚度导致证据不足，准确率大幅下降。只保留空虚度在 4 类数据上甚至低于去掉两项，这是一个重要的负结果，说明单加空虚度会无差别放大证据，必须与 KL 正则配合。论文还报告超图与两层编码器的对比：超图仅用约 23% 参数即达到相当或略高精度。从像素看，上面板文本上下文边中含强烈情感词的话语获得更高注意力，模糊表达得分更低，当文本语义不足时多模态超边权重增强。

### 哪些边界没有测，哪些改善不能承诺？

首先是缺失假设的边界：实验只覆盖随机缺失且每个样本至少保留一种模态，未评测整段对话全缺、系统性缺失或模态完全不可用的极端情况，也未报告跨数据集泛化。其次是成本边界：论文给出参数量与每轮训练时间的相对比较，并在附录讨论扩散引入的时间复杂度，但未报告推理延迟、帧率与部署内存，缺失这些测量就不能承诺实时性得到改善。

其次是统计与指标边界：主结果报告五折交叉验证的测试集均值与检验，但未给出方差与置信区间，不同指标的差值不能混放，百分点提升不等于相对百分比提升。恢复指标中均方误差与最大均值差异越低越好，不能把分布对齐直接等同于分类错误率下降。相关性不是因果，注意力可视化支持模型偏向情感词，但未验证拿掉该偏向必然导致多少下降。

最后是实现缺项：U-Net 丢弃概率、编码器冻结细节、贝叶斯优化搜索空间与最优值选择过程在正文中不完整，需查附录。总体上，论文直接报告的是准确率与恢复误差的领先，有限解释是注意力与不确定性分解的合理性，待验证的是真实传感器故障分布与在线推理成本。未胜出项方面，基于分数扩散方法在 7 类数据上仍是较强的第二基线。

### 要复现应先准备什么，按什么顺序跑通？

复现前先准备数据与划分：按论文的 4 类与 6 类与 7 类标注分别处理 2 个数据集，复刻随机缺失协议并保证每个样本至少一种模态可用，缺失率从 0.0 到 0.7 以 0.1 步进。编码器按附录配置准备文本与视觉与声学特征，不要自行更换主干，否则失去可比性。记录随机种子与五折划分，分别设置参数与模型。
顺序上先跑通超图条件构造：实现节点数与超边数、补零保留位置、掩码嵌入相加、两步注意力聚合，检查缺失节点的注意力是否被压低。

再跑通条件扩散：实现 U-Net 交叉注意力条件注入、训练时随机丢弃条件、300 步加噪去噪与权重 7.5 的采样合并，用均方误差与分布差异检查恢复质量。最后跑通双通道融合：分别实现基于扩散误差的特征源项与基于熵的判别项。
超参数起点可直接用论文报告值：超图 2 层、扩散 300 步、条件权重 7.5、主干训练 50 轮加扩散预训练 100 轮、优化器与批大小按数据集区分。资源状态是正文开源声明的唯一依据，本次未发现完成验证的资源，不得声称代码已公开，复现应以论文正文与附录为准。

### 何时值得尝试这种先恢复再融合的方案？

当任务同时满足 3 个条件时值得尝试：输入是多轮对话且上下文对情感判断重要；缺失发生在模态层且每个样本仍有至少一种可用模态；不同模态的可信度差异大且需要解释为何信某模态。此时用超边 1 次聚合多个相关话语，用注意力区分贡献，用扩散恢复保留模态身份，再用双通道证据融合处理生成误差与分类模糊，是一条完整链路。
不适合的情况也很明确：若缺失是系统性的或整段全缺，随机缺失协议下的结论不能直接推广。

若部署对延迟敏感，而 300 步扩散采样未经优化，则需先补延迟与内存测量，或考虑蒸馏与少步采样。复现时先做缺失率 0.3 的单点验证，再扩展到全缺失率曲线，最后补方差与失败样例分析。还需补的一项验证是真实故障分布下的表现。
回到中心矛盾：缺模态不仅是信息变少，更是语义对齐与可信度估计同时失效。

论文的回答是恢复阶段用高阶语义约束对齐，融合阶段用解耦的不确定性定权，这两步的配合在已报告的准确率与恢复误差上得到支持，但成本与边界仍需按上述清单补齐才能走向可用系统。

## 📐 原文公式与排版

以下展示论文原页中的数学表达区域，保留原始上下标、分式和符号排版。区域序号仅用于本文导航，不是论文公式编号。

[![原文数学表达区域 1，PDF 第 4 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/1cfebdb7a267/figure-1.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/1cfebdb7a267/figure-1.png)

区域 1 · [查看论文原页](https://openaccess.thecvf.com/content/CVPR2026/papers/Qiu_Beyond_Missing_Modalities_Hypergraph_Conditioned_Diffusion_for_Uncertainty-Aware_Multimodal_Emotion_CVPR_2026_paper.pdf#page=4)

[![原文数学表达区域 2，PDF 第 4 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/1cfebdb7a267/figure-2.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/1cfebdb7a267/figure-2.png)

区域 2 · [查看论文原页](https://openaccess.thecvf.com/content/CVPR2026/papers/Qiu_Beyond_Missing_Modalities_Hypergraph_Conditioned_Diffusion_for_Uncertainty-Aware_Multimodal_Emotion_CVPR_2026_paper.pdf#page=4)

[![原文数学表达区域 3，PDF 第 4 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/1cfebdb7a267/figure-3.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/1cfebdb7a267/figure-3.png)

区域 3 · [查看论文原页](https://openaccess.thecvf.com/content/CVPR2026/papers/Qiu_Beyond_Missing_Modalities_Hypergraph_Conditioned_Diffusion_for_Uncertainty-Aware_Multimodal_Emotion_CVPR_2026_paper.pdf#page=4)

[![原文数学表达区域 4，PDF 第 4 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/1cfebdb7a267/figure-4.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/1cfebdb7a267/figure-4.png)

区域 4 · [查看论文原页](https://openaccess.thecvf.com/content/CVPR2026/papers/Qiu_Beyond_Missing_Modalities_Hypergraph_Conditioned_Diffusion_for_Uncertainty-Aware_Multimodal_Emotion_CVPR_2026_paper.pdf#page=4)

[![原文数学表达区域 5，PDF 第 4 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/1cfebdb7a267/figure-5.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/1cfebdb7a267/figure-5.png)

区域 5 · [查看论文原页](https://openaccess.thecvf.com/content/CVPR2026/papers/Qiu_Beyond_Missing_Modalities_Hypergraph_Conditioned_Diffusion_for_Uncertainty-Aware_Multimodal_Emotion_CVPR_2026_paper.pdf#page=4)

[![原文数学表达区域 6，PDF 第 4 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/1cfebdb7a267/figure-6.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/1cfebdb7a267/figure-6.png)

区域 6 · [查看论文原页](https://openaccess.thecvf.com/content/CVPR2026/papers/Qiu_Beyond_Missing_Modalities_Hypergraph_Conditioned_Diffusion_for_Uncertainty-Aware_Multimodal_Emotion_CVPR_2026_paper.pdf#page=4)

[![原文数学表达区域 7，PDF 第 4 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/1cfebdb7a267/figure-7.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/1cfebdb7a267/figure-7.png)

区域 7 · [查看论文原页](https://openaccess.thecvf.com/content/CVPR2026/papers/Qiu_Beyond_Missing_Modalities_Hypergraph_Conditioned_Diffusion_for_Uncertainty-Aware_Multimodal_Emotion_CVPR_2026_paper.pdf#page=4)

[![原文数学表达区域 8，PDF 第 4 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/1cfebdb7a267/figure-8.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/1cfebdb7a267/figure-8.png)

区域 8 · [查看论文原页](https://openaccess.thecvf.com/content/CVPR2026/papers/Qiu_Beyond_Missing_Modalities_Hypergraph_Conditioned_Diffusion_for_Uncertainty-Aware_Multimodal_Emotion_CVPR_2026_paper.pdf#page=4)

[![原文数学表达区域 9，PDF 第 5 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/1cfebdb7a267/figure-9.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/1cfebdb7a267/figure-9.png)

区域 9 · [查看论文原页](https://openaccess.thecvf.com/content/CVPR2026/papers/Qiu_Beyond_Missing_Modalities_Hypergraph_Conditioned_Diffusion_for_Uncertainty-Aware_Multimodal_Emotion_CVPR_2026_paper.pdf#page=5)

[![原文数学表达区域 10，PDF 第 5 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/1cfebdb7a267/figure-10.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/1cfebdb7a267/figure-10.png)

区域 10 · [查看论文原页](https://openaccess.thecvf.com/content/CVPR2026/papers/Qiu_Beyond_Missing_Modalities_Hypergraph_Conditioned_Diffusion_for_Uncertainty-Aware_Multimodal_Emotion_CVPR_2026_paper.pdf#page=5)

[![原文数学表达区域 11，PDF 第 5 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/1cfebdb7a267/figure-11.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/1cfebdb7a267/figure-11.png)

区域 11 · [查看论文原页](https://openaccess.thecvf.com/content/CVPR2026/papers/Qiu_Beyond_Missing_Modalities_Hypergraph_Conditioned_Diffusion_for_Uncertainty-Aware_Multimodal_Emotion_CVPR_2026_paper.pdf#page=5)

[![原文数学表达区域 12，PDF 第 5 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/1cfebdb7a267/figure-12.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/1cfebdb7a267/figure-12.png)

区域 12 · [查看论文原页](https://openaccess.thecvf.com/content/CVPR2026/papers/Qiu_Beyond_Missing_Modalities_Hypergraph_Conditioned_Diffusion_for_Uncertainty-Aware_Multimodal_Emotion_CVPR_2026_paper.pdf#page=5)

[![原文数学表达区域 13，PDF 第 5 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/1cfebdb7a267/figure-13.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/1cfebdb7a267/figure-13.png)

区域 13 · [查看论文原页](https://openaccess.thecvf.com/content/CVPR2026/papers/Qiu_Beyond_Missing_Modalities_Hypergraph_Conditioned_Diffusion_for_Uncertainty-Aware_Multimodal_Emotion_CVPR_2026_paper.pdf#page=5)

[![原文数学表达区域 14，PDF 第 5 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/1cfebdb7a267/figure-14.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/1cfebdb7a267/figure-14.png)

区域 14 · [查看论文原页](https://openaccess.thecvf.com/content/CVPR2026/papers/Qiu_Beyond_Missing_Modalities_Hypergraph_Conditioned_Diffusion_for_Uncertainty-Aware_Multimodal_Emotion_CVPR_2026_paper.pdf#page=5)

[![原文数学表达区域 15，PDF 第 5 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/1cfebdb7a267/figure-15.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/1cfebdb7a267/figure-15.png)

区域 15 · [查看论文原页](https://openaccess.thecvf.com/content/CVPR2026/papers/Qiu_Beyond_Missing_Modalities_Hypergraph_Conditioned_Diffusion_for_Uncertainty-Aware_Multimodal_Emotion_CVPR_2026_paper.pdf#page=5)

[![原文数学表达区域 16，PDF 第 5 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/1cfebdb7a267/figure-16.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/1cfebdb7a267/figure-16.png)

区域 16 · [查看论文原页](https://openaccess.thecvf.com/content/CVPR2026/papers/Qiu_Beyond_Missing_Modalities_Hypergraph_Conditioned_Diffusion_for_Uncertainty-Aware_Multimodal_Emotion_CVPR_2026_paper.pdf#page=5)

[![原文数学表达区域 17，PDF 第 5 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/1cfebdb7a267/figure-17.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/1cfebdb7a267/figure-17.png)

区域 17 · [查看论文原页](https://openaccess.thecvf.com/content/CVPR2026/papers/Qiu_Beyond_Missing_Modalities_Hypergraph_Conditioned_Diffusion_for_Uncertainty-Aware_Multimodal_Emotion_CVPR_2026_paper.pdf#page=5)

[![原文数学表达区域 18，PDF 第 5 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/1cfebdb7a267/figure-18.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/1cfebdb7a267/figure-18.png)

区域 18 · [查看论文原页](https://openaccess.thecvf.com/content/CVPR2026/papers/Qiu_Beyond_Missing_Modalities_Hypergraph_Conditioned_Diffusion_for_Uncertainty-Aware_Multimodal_Emotion_CVPR_2026_paper.pdf#page=5)

[![原文数学表达区域 19，PDF 第 5 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/1cfebdb7a267/figure-19.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/1cfebdb7a267/figure-19.png)

区域 19 · [查看论文原页](https://openaccess.thecvf.com/content/CVPR2026/papers/Qiu_Beyond_Missing_Modalities_Hypergraph_Conditioned_Diffusion_for_Uncertainty-Aware_Multimodal_Emotion_CVPR_2026_paper.pdf#page=5)

[![原文数学表达区域 20，PDF 第 5 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/1cfebdb7a267/figure-20.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/1cfebdb7a267/figure-20.png)

区域 20 · [查看论文原页](https://openaccess.thecvf.com/content/CVPR2026/papers/Qiu_Beyond_Missing_Modalities_Hypergraph_Conditioned_Diffusion_for_Uncertainty-Aware_Multimodal_Emotion_CVPR_2026_paper.pdf#page=5)

[![原文数学表达区域 21，PDF 第 5 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/1cfebdb7a267/figure-21.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/1cfebdb7a267/figure-21.png)

区域 21 · [查看论文原页](https://openaccess.thecvf.com/content/CVPR2026/papers/Qiu_Beyond_Missing_Modalities_Hypergraph_Conditioned_Diffusion_for_Uncertainty-Aware_Multimodal_Emotion_CVPR_2026_paper.pdf#page=5)

[![原文数学表达区域 22，PDF 第 5 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/1cfebdb7a267/figure-22.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/1cfebdb7a267/figure-22.png)

区域 22 · [查看论文原页](https://openaccess.thecvf.com/content/CVPR2026/papers/Qiu_Beyond_Missing_Modalities_Hypergraph_Conditioned_Diffusion_for_Uncertainty-Aware_Multimodal_Emotion_CVPR_2026_paper.pdf#page=5)

[![原文数学表达区域 23，PDF 第 5 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/1cfebdb7a267/figure-23.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/1cfebdb7a267/figure-23.png)

区域 23 · [查看论文原页](https://openaccess.thecvf.com/content/CVPR2026/papers/Qiu_Beyond_Missing_Modalities_Hypergraph_Conditioned_Diffusion_for_Uncertainty-Aware_Multimodal_Emotion_CVPR_2026_paper.pdf#page=5)

[![原文数学表达区域 24，PDF 第 5 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/1cfebdb7a267/figure-24.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/1cfebdb7a267/figure-24.png)

区域 24 · [查看论文原页](https://openaccess.thecvf.com/content/CVPR2026/papers/Qiu_Beyond_Missing_Modalities_Hypergraph_Conditioned_Diffusion_for_Uncertainty-Aware_Multimodal_Emotion_CVPR_2026_paper.pdf#page=5)

[![原文数学表达区域 25，PDF 第 6 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/1cfebdb7a267/figure-25.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/1cfebdb7a267/figure-25.png)

区域 25 · [查看论文原页](https://openaccess.thecvf.com/content/CVPR2026/papers/Qiu_Beyond_Missing_Modalities_Hypergraph_Conditioned_Diffusion_for_Uncertainty-Aware_Multimodal_Emotion_CVPR_2026_paper.pdf#page=6)

[![原文数学表达区域 26，PDF 第 6 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/1cfebdb7a267/figure-26.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/1cfebdb7a267/figure-26.png)

区域 26 · [查看论文原页](https://openaccess.thecvf.com/content/CVPR2026/papers/Qiu_Beyond_Missing_Modalities_Hypergraph_Conditioned_Diffusion_for_Uncertainty-Aware_Multimodal_Emotion_CVPR_2026_paper.pdf#page=6)

另有 32 个候选区域因边界不明确或图片数量、尺寸限制未展开；请[查看完整论文](https://openaccess.thecvf.com/content/CVPR2026/papers/Qiu_Beyond_Missing_Modalities_Hypergraph_Conditioned_Diffusion_for_Uncertainty-Aware_Multimodal_Emotion_CVPR_2026_paper.pdf)中的原始排版。

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。
- 评分规则：type-aware-v1
- 评分模型：muse-spark-1.3-contributor
- 评分请求协议：openai_responses

---

[← 返回 cvpr-2026 论文汇总](/posts/conference-cvpr-2026/)
