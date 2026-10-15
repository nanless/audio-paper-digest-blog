---
title: "Evidential Multimodal Transformers with Dempster-Shafer Fusion for Emotion Recognition"
date: 2026-10-15
draft: false
tags: [语音情感识别, 多模态学习, 不确定性估计与校准, 语音]
categories: [论文速递]
description: "针对多模态情绪识别中 softmax 被迫自信的问题，论文提出每个模态输出狄利克雷证据并用 Dempster-Shafer 规则融合，在四个数据集上同时提升精度与校准，而代价是需要调冲突权重与 KL 退火且依赖条件独立假设。"
hiddenInHomeList: true
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_arxiv_id: "2610.13013"
paper_digest_workbench_contract: "researcher-workbench-v1"
paper_digest_reader_title: "用证据和冲突做多模态情绪识别：EMT-DS 解读"
paper_digest_original_title: "Evidential Multimodal Transformers with Dempster-Shafer Fusion for Emotion Recognition"
paper_digest_arxiv_version: 1
paper_digest_arxiv_versioned_id: "2610.13013v1"
paper_digest_arxiv_abs_url: "https://arxiv.org/abs/2610.13013v1"
paper_digest_arxiv_pdf_url: "https://arxiv.org/pdf/2610.13013v1.pdf"
paper_digest_primary_task: "语音情感识别"
paper_digest_tags_contract: "paper-tag-flat-tags-v2"
paper_digest_tags_selection_contract: "paper-tag-selection-v2"
paper_digest_tags_registry_version: "paper-tag-catalog-v2"
paper_digest_tags_registry_sha256: "cdef54423b5dfc00a1d017ef6639446d2ecd1d9c1acf71c8eb4f6219a46b7ba8"
paper_digest_tags_concepts: [{"facet":"task","id":"task.emotion-recognition","label":"语音情感识别"},{"facet":"method","id":"method.multimodal-learning","label":"多模态学习"},{"facet":"method","id":"method.uncertainty-estimation","label":"不确定性估计与校准"},{"facet":"signal","id":"signal.speech","label":"语音"}]
paper_digest_primary_method: "多模态学习"
paper_digest_score: 6.9
paper_digest_rank_bucket: "前50%"
paper_digest_document_type: "方法研究"
paper_digest_one_sentence: "针对多模态情绪识别中 softmax 被迫自信的问题，论文提出每个模态输出狄利克雷证据并用 Dempster-Shafer 规则融合，在四个数据集上同时提升精度与校准，而代价是需要调冲突权重与 KL 退火且依赖条件独立假设。"
paper_digest_authors: [{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Muhammad Usama"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Yeoreum Jung"}]
paper_digest_abstract_sha256: "f74da0baf9bd7ceb42d53c0f261a1f1197b8863a320a9d566de8647cb414a409"
paper_digest_sidecars: {"citation.bib":{"sha256":"d99f3b46c7602517529f207d3c4b567940e475006f72f9583dd31344ba98c9bf","url":"/audio-paper-digest-blog/data/papers/2026-10-15/2610-13013/citation.bib"},"citation.json":{"sha256":"3ce9d20bcae9e4b77840659756f98e2b8249fd90ac008ead31e76dad0a17b8fb","url":"/audio-paper-digest-blog/data/papers/2026-10-15/2610-13013/citation.json"},"citation.ris":{"sha256":"336cdec34eb5ca432069de35f23ca243d62ee2aa507fc6ea03c4ebe666958883","url":"/audio-paper-digest-blog/data/papers/2026-10-15/2610-13013/citation.ris"},"rethink-context.json":{"contract":"paper-research-context-v2","sha256":"e61d3493c3dafaef44ac057727c81989e5ccfac72a960ac34e4a980868c2285d","url":"/audio-paper-digest-blog/data/papers/2026-10-15/2610-13013/rethink-context.json"}}
paper_digest_api_reader_contract: "beginner-researcher-v3"
paper_digest_api_reader_article_sha256: "ed0808ce0abf5c88edff5e9e9fbd52cdaef1889401b98d2424a4b6e35bbbe6c3"
paper_digest_api_reader_plan_sha256: "429fffcbe7fa28937f2b3be7301e6ba0569b862fd7962cf28210195d60113a6f"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings-v4"
paper_digest_api_reader_source_bindings_sha256: "bf8696d3788840623a0f1f1f382bbaf2277c0ade71072729ac655bc498ab1a3b"
paper_digest_api_reader_source_table_count: 5
paper_digest_api_reader_source_formula_count: 5
paper_digest_api_reader_structured_artifacts_sha256: "92d4e512a9f17ee7e807c7b55063343bfa60fb374fb976b50ae3f5dd9abd1f2b"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity-v1"
paper_digest_api_reader_author_identity_sha256: "e92982a5b6430828bacec2b7c629645df7220b3521b822cb48765e25ce4c5c59"
paper_digest_api_reader_author_count: 2
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity-v1"
paper_digest_api_reader_resource_identity_sha256: "e59d3007a346231ecf0fd87dcb0ca295a7b11d5d050758cc24965520b40e943d"
paper_digest_api_reader_resource_count: 0
paper_digest_api_reader_figure_persistence: "ephemeral-no-persisted-figure-assets-v1"
paper_digest_api_reader_decision_projection: "api-reader-decision-projection-v2"
---

# 📄 用证据和冲突做多模态情绪识别：EMT-DS 解读

> 英文题目：*[Evidential Multimodal Transformers with Dempster-Shafer Fusion for Emotion Recognition](https://arxiv.org/abs/2610.13013v1)*

<!--paper-tag-hierarchy-v1:start-->

**研究分类**

- **研究任务**：[语音情感识别](/audio-paper-digest-blog/papers/?concept=task.emotion-recognition)
- **研究方法**：[多模态学习](/audio-paper-digest-blog/papers/?concept=method.multimodal-learning)；[不确定性估计与校准](/audio-paper-digest-blog/papers/?concept=method.uncertainty-estimation)
- **信号**：[语音](/audio-paper-digest-blog/papers/?concept=signal.speech)

<!--paper-tag-hierarchy-v1:end-->

> 评分：**6.9/10** | 创新 1.3/2 | 技术严谨 1.2/1.5 | 实验充分 1.3/1.5 | 清晰度 0.8/1 | 影响力 0.8/1.5 | 开源 0/1.5 | 可复现 0.5/0.5 | 工程/实践 1/1.5


## 👥 作者与机构

- Muhammad Usama：机构信息未在 arXiv HTML 中可靠披露
- Yeoreum Jung：机构信息未在 arXiv HTML 中可靠披露

## 📌 核心摘要

输入为同一话语的多个异构信号，输出为离散情绪类别。难点是面部表情与语音韵律等模态给出矛盾指向时，常规平均会压制矛盾并给出过度自信的点估计。证据多模态变换器与邓普斯特-谢弗融合把每个模态预测表示为主观意见三元组，即信念质量向量、表征证据不足的不确定性质量与均匀先验，经证据到集中参数的换算得到投影概率，再用邓普斯特组合规则迭代两两融合，矛盾证据被量化为冲突并使融合决策变分散。在IEMOCAP音频加文本统一复现协议下，非加权准确率84.3%超过最强基线双重跨模态变换器81.7%，期望校准误差从0.129降至0.042。在DEAP脑电加生理信号留一被试评估下，准确率82.4%高于最强基线78.1%，在KEMDy20五类说话人无关评估下准确率96.8%。在CMU-MOSEI六分类官方划分下，准确率54.8%超过最强证据基线TMC的52.4%。在音频特征加σ=1.0高斯噪声的受控破坏试验中，准确率保持71.2%，高于注意力基线降至的45.3%。结论限于所测四个语料的给定模态组合与划分，严重噪声和跨语料零样本下准确率仍下降，在IEMOCAP受控消融中训练11.5毫秒每个样本、推理7.0毫秒每个样本，峰值显存8.7GB低于注意力融合的12.5GB。

## 🔗 开源与复现资源

本次未形成可展示的已核验资源记录，开放状态尚未核实。

可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 情绪识别要从哪些信号预测什么

这篇论文做的是多模态情绪分类。输入是同一段情绪表达的不同传感器记录，论文实际用到的有音频波形、人脸视频帧、转写文本以及脑电、皮电、心率变异性等生理信号。目标是输出离散情绪标签，例如 IEMOCAP 的 4 类、DEAP 按效价唤醒划分的四象限、KEMDy20 的 5 类和 CMU-MOSEI 的 6 类。必须保留的信息是各模态各自的倾向以及它们是否一致，因为脸说开心而声音说生气时，平均掉分歧会掩盖讽刺或传感器故障。输出不只是 1 个类别，还包括每个模态缺多少证据、模态之间分歧多大，供下游决定是否信任这次预测。

### 已有融合路线为什么处理不好分歧

论文把相关工作分成 3 条线。第一条是多模态融合本身，从早期拼接、低层拼接，到晚期融合、注意力、混合专家和 MulT 等多模态 Transformer，它们共同点是最后经 softmax 输出单纯形上的点估计。第二条是生理情绪识别，例如在 DEAP 上用时空注意力或跨模态可信度，论文指出那些可信度多是启发式权重。第 3 条是证据深度学习、主观逻辑与 Dempster-Shafer 理论，之前多是把组合规则套在已训练分类器输出之后。

与之最接近的是可信多视图分类 TMC 和 2026 年的谱带路由等方法，论文强调自己的不同在于融合层可微、冲突作为监督信号和拒判分数，并且配有校准与分布外分析。比较的前提是输入目标相同，论文把所有基线都重实现在同一特征、同一划分和同一调参预算下，因此表中的胜负是同条件比较。

### 被迫自信具体指什么困难

论文区分情绪识别任务与不确定性量化问题。标准做法学一个从多模态输入到概率单纯形的映射，softmax 约束所有类别概率和为 1，即使证据很弱或互相矛盾也必须给出确定分布。作者举了两类脆弱情形，一是传感器失效，噪声会被解读成自信预测；二是语义冲突，例如词义积极而韵律愤怒，简单平均会把不一致抹掉。解决思路是把输出改写成单纯形上的狄利克雷分布，用信念与不确定性分离表示知识状态，证据强时接近自信预测，证据弱时退回先验并报告高不确定性，冲突则被显式量化而不是归一化掉。

### EMT-DS 的输入到输出经过哪几步

整体流程可以沿一个样本走一遍。多种原始输入先各自进专用编码器得到定长特征向量，再经证据头输出每个类别的非负证据。证据换算成主观意见，即信念质量向量、不确定性和先验。多模态意见送入 Dempster-Shafer 融合模块，迭代做两两组合，算出冲突并得到融合信念与融合不确定性，最后按投影公式得到决策概率。下图展示了从模态编码、证据头、主观意见到失谐感知融合与最终预测的主路径，是理解分工的关键。

为初学者准备的读图说明：该架构图从左到右分为编码区、意见区、融合区和预测区，重点是 3 条模态支路在哪里汇合以及冲突在何处被计算，建议先看主箭头再看融合块的标注。需要按实际像素说明，左侧紫色框内实际只画了音频、视频、文本三支，生理 1 维卷积第四支不在本图像素中；生理编码器的 1 维卷积加时序注意力是原文图注与正文所述的一般扩展，后续 DEAP 与 KEMDy20 的生理讨论仍按原文保留。

> **看图路径：** 1. 沿音频视频文本三条支路看编码器到证据头的箭头；2. 看三个主观意见如何汇入中间蓝色融合块；3. 看融合块到融合意见再到投影概率的最后一步

[![原论文 Fig. 1：Overall architecture of EMT-DS.](https://arxiv.org/html/2610.13013v1/high_level.svg)](https://arxiv.org/html/2610.13013v1/high_level.svg)

*论文图 1。原论文 Fig. 1:：“Overall architecture of EMT-DS. Modality-specific encoders (e.g., Wav2Vec2, ViT-B/16, BERT/KoELECTRA, and a physiological 1D-CNN) extract features h^m\in\mathbbR^d from…”。*

图中左侧紫色框实际可见的是音频用 Wav2Vec2 加全局平均池化、视频用 ViT-B/16 取分类标记、文本用 BERT 或 KoELECTRA 取分类标记，各自接证据头输出 3 个主观意见；中间蓝色块把多个意见做迭代 Dempster-Shafer 组合并输出聚合意见；右侧红色框把融合意见经狄利克雷参数换算为投影概率。原文图注另述生理 1D-CNN 作为异构输入的一般扩展，可用于脑电与外周生理，但不冒充为本图已画出的分支。教学例子：若音频证据集中在一类而文本无证据，前者不确定性小、后者不确定性接近 1，融合后应主要听音频的，这正是引出后面公式要解释的机制。

### 每个模态的证据和主观意见怎么算

每个模态先用适合该信号的编码器提取特征。论文中音频用 Wav2Vec2-Large 取最后一层平均池化得到 1024 维，视频用人脸 ViT 取分类标记得到 768 维，文本用 BERT 或韩语 KoELECTRA 取分类标记得到 768 维，生理信号按原文用 4 层 1 维卷积加单块八头时序自注意力再平均池化得到 512 维。所有预训练编码器在实验中冻结，训练的是证据头与融合层，因此增益被归因于融合机制而非微调编码器。

**主观意见 × 狄利克雷分布：** 主观意见是每个模态对 K 个情绪类的信念质量加不确定性的表示，狄利克雷分布是它在概率单纯形上的具体参数化；证据向量经 softplus 得到后换算成信念质量与不确定性，二者搭配让模型既能给出类别倾向又能显式保留缺证据的状态，组合后融合层才能区分自信一致与证据不足。

主观意见的三元组定义如下，原式由代码显示：

\[\omega^{m}=(\mathbf{b}^{m},u^{m},\mathbf{a}^{m}),\]

其中信念质量是各类的证据支持，不确定性是缺证据的剩余，先验默认均匀。它们满足和为 1 的约束，投影概率是信念加不确定性乘先验，原式为：

\[p_{k}^{m}=\mathbb{E}[\pi_{k}]=b_{k}^{m}+u^{m}\cdot a_{k}^{m}.\]

证据的产生是对特征做线性投影再经 softplus 保证非负，并做 L1 球投影把总量限制在 Emax 以内，论文设为 1000。狄利克雷浓度参数是证据加 1，强度是浓度之和，信念与不确定性的换算为：

\[b_{k}^{m}=\frac{e_{k}^{m}}{S^{m}},\quad u^{m}=\frac{K}{S^{m}}.\]

论文给的例子是四分类时音频证据为 8 加 3 个 0，则强度为 12，第一类信念为 0.667，不确定性为 0.333，投影概率为 0.75；而零证据时信念全零、不确定性为 1。均匀 softmax 与空虚意见概率点相同但含义相反，前者是自信地平均，后者是承认无知。

**信念质量 × 不确定性：** 信念质量指分给每个情绪类的证据支持比例，不确定性指尚未被证据占据的剩余质量，二者之和为 1；信念质量决定投给哪一类，不确定性决定这票有多硬，搭配后投影概率才是在先验与证据之间的折中，而不是 softmax 那样必须把概率分完。

**认知不确定性 × 偶然不确定性：** 认知不确定性指缺证据导致的空虚，用 u 表示，证据越多越小；偶然不确定性指数据本身模糊或类别重叠，用信念分布的熵表示；前者对应分布外或损坏输入，后者对应悲伤与中性这类低唤醒易混淆样本，二者分工让损坏模态被降权而模糊样本仍保留多峰信念。

### Dempster-Shafer 融合如何处理一致与冲突

融合的输入是各模态的主观意见。两两融合先算冲突，即一个模态支持 k 而另一模态支持非 k 的信念乘积之和，原式为：

\[c_{ij}=\sum_{k=1}^{K}\sum_{\ell\neq k}b_{k}^{i}b_{\ell}^{j}.\]

它可化简为 2 模态非不确定质量乘积减去同类信念内积，原式为：

\[c_{ij}=\left(\sum_{k=1}^{K}b_{k}^{i}\right)\left(\sum_{k=1}^{K}b_{k}^{j}\right)-\sum_{k=1}^{K}b_{k}^{i}b_{k}^{j}=(1-u^{i})(1-u^{j})-\sum_{k=1}^{K}b_{k}^{i}b_{k}^{j}.\]

完全一致时冲突为 0，完全对立时趋近 1。归一化因子是 1 除以 1 减冲突，冲突低时接近 1，冲突高时变大。融合信念包括双方同投一类、一方支持而另一方不确定两部分，融合不确定性是双方不确定性的乘积再归一化，因此加信息模态越多不确定性指数下降。多于两个模态时迭代做两两融合，总冲突取所有无序对的平均，保证与融合顺序无关且落在 0 到 1 之间。论文为数值稳定把冲突裁剪在 0.999，对应归一化上限 1000，并指出这只是浮点保护而非调参。

**冲突系数 × Dempster-Shafer 融合：** 冲突系数度量两个模态把信念投给互斥类别的程度，Dempster-Shafer 融合用它做归一化分母；冲突负责发现讽刺或传感器故障式的不一致，融合负责按一致部分加不确定性加权求和，组合后一致时不确定性下降、分歧时决策变分散且冲突被显式保留。

### 损失如何监督证据、融合与冲突

因为输出是分布而非点估计，不能直接用交叉熵。每个模态的贝叶斯风险是预测期望与独热标签的平方误差加狄利克雷方差，促使积累判别证据。KL 正则项惩罚与均匀狄利克雷先验的偏离，输入无判别特征时鼓励回到最大不确定性，退火系数在前 10 轮从 0.01 线性升到 1。融合意见先把融合信念与不确定性逆映射回狄利克雷参数，再用同样的风险加 KL 监督，保证梯度从融合流回各模态。

冲突损失只在预测错误时惩罚总冲突低于阈值 0.5 的部分，正确时不罚，误分类指示器做截断不传梯度，梯度只走冲突大小。KEMDy20 因类别极不平衡还在风险项用 focal 损失并按类频重采样。优化用 AdamW，学习率 2 乘 10 的负 4 次方余弦退火到 1 乘 10 的负 6 次方，共 50 轮，融合层 dropout 为 0.3。

### 在哪些数据和条件下比较

四个数据集覆盖不同语言、规模与诱发方式。IEMOCAP 约 5531 条，音频加文本，4 类，会话独立五折，Excited 并入 Happy。DEAP 为 32 人各看 40 个音乐视频，脑电加外周生理，按效价唤醒阈值 5 划四象限，留一被试交叉验证，论文强调这比被试相关划分更严格。KEMDy20 为 80 位韩语对话者，音频文本生理视频 4 模态，保留中性、开心、悲伤、愤怒、惊讶 5 类，去掉极少的厌恶与恐惧，说话人独立五折，中性加开心约占 95%。CMU-MOSEI 约 23000 条约 1000 说话人，音频文本视频，用官方划分做 6 类联合分类。

所有预处理统计只在训练折估计，测试不做增强。指标按原文协议，IEMOCAP 与 KEMDy20 看加权与非加权精度及宏 F1，DEAP 看非加权精度，另加期望校准误差、负对数似然、Brier 分数与风险覆盖曲线下面积。所有基线统一重实现、统一特征划分与 50 次随机搜索预算，结果为 5 种子均值加 95% 置信区间。下表为数据集特征总览，说明互补性与评估严格程度。

该表回答比较是否在同等信息条件下进行，重点是模态、类别数与划分方式是否可比，阅读时注意 DEAP 与 KEMDy20 均为被试或说话人独立。

| Characteristic | IEMOCAP | DEAP | KEMDy20 | CMU-MOSEI |
| --- | --- | --- | --- | --- |
| Participants | 10 | 32 | 80 | roughly 1,000 |
| Utterances | 5,531 | 40 one-minute music videos | 13,440 | about 23,000 |
| Emotion Model | 4-class protocol | four valence-arousal quadrant classes | five emotion classes | six-class joint emotion classification task |
| Modalities Used | audio and text | EEG and peripheral signals | audio, text, physiological signals, and video | audio, text, and video |
| Evaluation | 5-fold session-independent cross-validation | subject-independent leave-one-subject-out cross-validation | 5-fold speaker-independent cross-validation | official train, validation, and test splits |

该表表明四个数据集在规模、平衡度与泛化难度上各不相同，因此主结果需要在小规模表演数据、生理数据、高度不平衡自然对话和大规模野外数据上分别成立，不能把某一集的数字直接推广到另一集。

### 主结果在什么条件下成立

主比较的公平条件是同一特征、同一划分与同一调参预算，报告的是非加权精度、宏 F1 与期望校准误差。IEMOCAP 上 EMT-DS 为 0.843 精度与 0.827 宏 F1，超过最强基线 DCT 约 2.6 个百分点，校准误差降到 0.042。DEAP 留一被试下为 0.824 精度，超过最强证据基线 TMC 约 4.3 个百分点。KEMDy20 5 类不平衡下为 0.968 精度与 0.949 宏 F1，超过 CAG-MoE 约 2.3 与 2.7 个百分点，少数类召回仍在 90% 以上。CMU-MOSEI 上为 0.548 精度，超过 2026 谱带路由约 1.7 个点、超过 TMC 约 2.4 个点，且负对数似然与 Brier 最低。

配对 t 检验经 Holm-Bonferroni 校正后在 3 个数据集上均显著。校准的读图说明如下：可靠性图横轴是置信度、纵轴是准确率，对角线为理想校准，重点看 2 条折线与对角线的距离。

> **看图路径：** 1. 看绿色折线与灰色对角线的贴合程度；2. 看红色虚线在高置信段如何系统性偏下；3. 结合图例中两个 ECE 数值判断校准差距

[![原论文 Fig. 6：Reliability diagram comparing EMT-DS (green) and standard Softmax (red).](https://arxiv.org/html/2610.13013v1/calibration_analysis.svg)](https://arxiv.org/html/2610.13013v1/calibration_analysis.svg)

*论文图 6。原论文 Fig. 6:：“Reliability diagram comparing EMT-DS (green) and standard Softmax (red). EMT-DS is well-calibrated (ECE=0.042), while Softmax is overconfident (ECE=0.153).”。*

绿色 EMT-DS 紧贴对角线，期望校准误差 0.042，红色 softmax 在高置信段系统性偏下，误差 0.153，说明前者报 70% 置信时真实准确率约 70%，适合需要信任的场景。

**期望校准误差 × 选择性复核：** 期望校准误差度量预测置信度与真实准确率的平均偏离，越小表示报 70% 置信就约对 70%；选择性复核是按冲突从高到低挑一小部分样本送人工检查的流程，二者搭配的意义是校准保证日常预测可信，冲突排序保证有限人力优先看到最可能错的样本。

下表为主基准比较，包含精度、宏 F1 与校准误差三列，阅读时注意精度越高越好而校准误差越低越好。

| Dataset | Method | Acc. | F1 | ECE |
| --- | --- | --- | --- | --- |
| IEMOCAP | TACFN [9] | 0.798 ± 0.011 | 0.782 ± 0.012 | 0.147 ± 0.012 |
| IEMOCAP | CAG-MoE [13] | 0.805 ± 0.009 | 0.791 ± 0.010 | 0.138 ± 0.010 |
| IEMOCAP | DCT [55] | 0.817 ± 0.010 | 0.803 ± 0.011 | 0.129 ± 0.009 |
| IEMOCAP | MulT [25] | 0.784 ± 0.012 | 0.769 ± 0.013 | 0.155 ± 0.014 |
| IEMOCAP | MISA [60] | 0.808 ± 0.010 | 0.793 ± 0.011 | 0.144 ± 0.011 |
| IEMOCAP | TMC [26] | 0.812 ± 0.008 | 0.798 ± 0.009 | 0.082 ± 0.007 |
| IEMOCAP | VMM-Dropout | 0.809 ± 0.011 | 0.794 ± 0.012 | 0.068 ± 0.006 |
| IEMOCAP | QMF [62] | 0.814 ± 0.009 | 0.799 ± 0.010 | 0.076 ± 0.006 |
| IEMOCAP | EMT-DS (Ours) | 0.843 ± 0.007 | 0.827 ± 0.008 | 0.042 ± 0.004 |
| DEAP | TACFN [9] | 0.752 ± 0.024 | 0.738 ± 0.026 | 0.214 ± 0.021 |
| DEAP | CAG-MoE [13] | 0.768 ± 0.021 | 0.754 ± 0.023 | 0.198 ± 0.018 |
| DEAP | ERTNet [58] | 0.742 ± 0.028 | 0.725 ± 0.030 | 0.225 ± 0.025 |
| DEAP | Ensemble-DL [59] | 0.774 ± 0.020 | 0.760 ± 0.022 | 0.185 ± 0.015 |
| DEAP | TMC [26] | 0.781 ± 0.018 | 0.766 ± 0.020 | 0.112 ± 0.011 |
| DEAP | VMM-Dropout | 0.778 ± 0.022 | 0.762 ± 0.024 | 0.098 ± 0.009 |
| DEAP | QMF [62] | 0.776 ± 0.020 | 0.761 ± 0.022 | 0.104 ± 0.010 |
| DEAP | EMT-DS (Ours) | 0.824 ± 0.015 | 0.808 ± 0.017 | 0.053 ± 0.005 |
| KEMDy20 | TACFN [9] | 0.897 ± 0.009 | 0.863 ± 0.011 | 0.162 ± 0.011 |
| KEMDy20 | CAG-MoE [13] | 0.945 ± 0.007 | 0.922 ± 0.008 | 0.124 ± 0.008 |
| KEMDy20 | MISA [60] | 0.928 ± 0.009 | 0.902 ± 0.010 | 0.139 ± 0.010 |
| KEMDy20 | TMC [26] | 0.938 ± 0.008 | 0.914 ± 0.009 | 0.078 ± 0.006 |
| KEMDy20 | VMM-Dropout | 0.935 ± 0.010 | 0.911 ± 0.011 | 0.062 ± 0.005 |
| KEMDy20 | QMF [62] | 0.941 ± 0.007 | 0.918 ± 0.008 | 0.071 ± 0.005 |
| KEMDy20 | EMT-DS (Ours) | 0.968 ± 0.005 | 0.949 ± 0.006 | 0.038 ± 0.003 |

结果支持的判断是冲突感知融合在不确定性高、分歧多的集上增益更大，且是唯一同时在精度与校准 2 个方面占优的方法；限制是 KEMDy20 的高绝对精度受益于中性主导分布，非加权指标与宏 F1 仍需一起看，跨数据集的绝对值不可直接对比。

### 不确定性与冲突的分布说明什么

为解释融合为什么有效，论文在 KEMDy20 上统计各模态不确定性，在 IEMOCAP 上看冲突与准确率的关系。读图说明：左图为各模态与融合的箱线图，比较中位线与离散程度；右图横轴为冲突、纵轴为预测准确率，颜色表示样本密度，红色虚线为趋势，重点看高冲突区是否准确率更低。

> **看图路径：** 1. 左图比较五个箱体的中位线与箱体高度；2. 右图看冲突增大时六边形密度中心如何下移；3. 注意右图红色虚线趋势与高冲突稀疏点的分布

[![原论文 Fig. 3：(Left) Average uncertainty by modality on KEMDy20.](https://arxiv.org/html/2610.13013v1/uncertainty_analysis.png)](https://arxiv.org/html/2610.13013v1/uncertainty_analysis.png)

*论文图 3。原论文 Fig. 3:：“(Left) Average uncertainty by modality on KEMDy20.”。*

左图显示文本不确定性最低约 0.176，生理最高约 0.263，融合后降到约 0.086，说明多模态整合缓解了单模态模糊。右图呈明显负相关，高冲突样本准确率显著更低，低冲突样本准确率更高，论文报告冲突与准确率的 Pearson 相关约负 0.68。模态贡献上，中性时文本信念最高，快乐悲伤愤怒时音频信念最高，体现语义与副语言互补。这些是相关性证据，不证明冲突导致错误，但支持把冲突用作不可靠预测的指示器。

### 证据编码与融合各贡献多少

受控消融在 IEMOCAP 上交叉编码输出与融合算子。softmax 加拼接精度 76.4%，换注意力升到 80.3% 但显存从 8.2 GB 涨到 12.3 GB；证据编码加拼接为 79.2%，证据加注意力为 82.1%，完整 D-S 融合为 84.3%，校准误差一路降到 0.042 且显存仅 8.7 GB。效率原因是 D-S 只在低维信念向量上做二次运算，而跨模态注意力是特征维度的二次。进一步去掉冲突损失会回落到 82.8% 且校准变差，说明监督冲突带来约 1.5 个点的增益。下表为 5 种配置的精度、宏 F1、校准误差与显存对照，比较问题是增益来自证据表示还是融合规则。

该表固定编码器与训练预算，只换输出层与融合方式，因此行间差异可归因于架构；指标方向为精度越高越好、校准误差与显存越低越好。

| Method | Acc. (%) | F1 (%) | ECE | Mem (GB) |
| --- | --- | --- | --- | --- |
| Transformer + Softmax + Concat | 76.4 | 74.8 | 0.153 | 8.2 |
| Transformer + Softmax + Attention | 80.3 | 78.6 | 0.147 | 12.3 |
| Transformer + Evidential + Concat | 79.2 | 77.5 | 0.089 | 8.4 |
| Transformer + Evidential + Attention | 82.1 | 80.3 | 0.067 | 12.5 |
| Transformer + Evidential + D-S (Ours) | 84.3 | 82.7 | 0.042 | 8.7 |

从 softmax 到证据编码主要改善校准，从注意力到 D-S 在更高精度下保持低显存；代价是需要 KL 退火与冲突权重配合，且显存数字依赖批量与实现，不宜当作绝对延迟。未胜出项是注意力证据模型，它精度次优但成本最高，说明单纯加注意力不如显式建模冲突。

### 换融合规则与加噪声缺模态会怎样

固定模态证据只换组合算子时，Dempster 规则精度 0.843 最优，PCR5 次之，Yager 与 Murphy 平均更低，直接把 softmax 概率套 D-S 最差，说明价值来自证据参数化与组合规则的协同而非规则本身。超参在 KL 退火约 0.8、冲突权重 IEMOCAP 取 0.10、学习率 1 乘 10 的负 4 次方到 5 乘 10 的负 4 次方平台最稳。噪声实验往音频特征加高斯噪声，原文正文报告噪声强度为 1 时注意力跌到 45.3% 而 EMT-DS 保持 71.2%，机理是损坏模态不确定性趋近 1 使融合自动依赖干净文本。读图说明：横轴为噪声强度、纵轴为精度，3 条曲线斜率越平越鲁棒，重点看最右端差距与误差棒。

> **看图路径：** 1. 横轴噪声强度从 0 到 1 看三条曲线的斜率差异；2. 比较噪声为 1 时绿色点与红蓝点的纵轴差距；3. 注意误差棒随噪声增大如何变宽

[![原论文 Fig. 5：Robustness to audio modality corruption.](https://arxiv.org/html/2610.13013v1/robustness_analysis.svg)](https://arxiv.org/html/2610.13013v1/robustness_analysis.svg)

*论文图 5。原论文 Fig. 5:：“Robustness to audio modality corruption.”。*

绿色 EMT-DS 随噪声缓慢下降，红蓝两条基线快速下滑，按原文正文报告末端为 45.3% 对 71.2%；而本图中实际标注为 Attention Fusion 44.9% 与 EMT-DS 71.1%，原文未解释该图文差异，此处分别归属以保留可核查性，主分析仍按正文报告值讨论。缺整个模态时，IEMOCAP 缺音频仍有 71.2% 而注意力仅 56.4%，KEMDy20 缺音频加视频仍有 82.6% 而注意力仅 54.2%，且融合不确定性随信息丢失上升。下表比较不同融合规则的精度、校准、冲突与风险覆盖，冲突列对不计算冲突的规则记为不可用。

该表回答规则本身是否关键，公平条件是输入证据完全相同，准确率越高、校准误差与风险覆盖越低越好。

| Fusion Rule | Acc. | F1 | ECE | Conflict | AURC |
| --- | --- | --- | --- | --- | --- |
| Softmax-then-DS | 0.788 | 0.771 | 0.118 | 0.254 | 0.145 |
| Reliability-Gated | 0.809 | 0.792 | 0.121 | N/A | 0.132 |
| Uncertainty-Weighted | 0.815 | 0.798 | 0.084 | N/A | 0.114 |
| Yager’s Rule | 0.821 | 0.804 | 0.072 | 0.182 | 0.102 |
| Murphy’s Average | 0.824 | 0.808 | 0.068 | 0.165 | 0.095 |
| PCR5 | 0.836 | 0.820 | 0.048 | 0.141 | 0.079 |
| EMT-DS (No Conflict Loss) | 0.828 | 0.811 | 0.058 | 0.143 | 0.088 |
| EMT-DS (Dempster, Ours) | 0.843 | 0.827 | 0.042 | 0.126 | 0.071 |

Dempster 在精度校准与拒判三项同时最优，可靠门控与不确定性加权因无显式冲突表示而落后；限制是该表为推理时替换规则，训练仍用 D-S 目标，不能理解为各规则都经端到端重训。缺模态对照见下一独立表格。

该表回答整模态丢失时的 graceful 降级问题，条件是缺失特征对基线补零而本方法置零证据，精度越高越好且不确定性应随缺失上升。

| Dataset | Missing | Attn. | CAG-MoE | EMT-DS | EMT-DS uu |
| --- | --- | --- | --- | --- | --- |
| IEMOCAP | None | 0.803 | 0.819 | 0.843 | 0.142 |
| IEMOCAP | Audio | 0.564 | 0.621 | 0.712 | 0.385 |
| IEMOCAP | Text | 0.482 | 0.556 | 0.653 | 0.468 |
| KEMDy20 | None | 0.897 | 0.945 | 0.968 | 0.086 |
| KEMDy20 | Audio | 0.768 | 0.852 | 0.884 | 0.182 |
| KEMDy20 | Text | 0.684 | 0.789 | 0.826 | 0.215 |
| KEMDy20 | Physio. | 0.851 | 0.912 | 0.927 | 0.114 |
| KEMDy20 | Video | 0.848 | 0.908 | 0.927 | 0.118 |
| KEMDy20 | Audio+Video | 0.542 | 0.648 | 0.826 | 0.342 |
| KEMDy20 | Physio+Video | 0.784 | 0.845 | 0.884 | 0.224 |

结果显示本方法在每行缺失下精度最高且不确定性单调上升，提供部分证据的显式信号；反例是缺文本比缺音频损失更大，说明文本在这些协议中信息量更大，不能认为各模态等价。

### 哪些结论还只是近似与待验证

论文明确贝叶斯一致性定理依赖模态给定标签条件独立且先验均匀，自信极限下融合等于贝叶斯后验；实测模态误差相关平均绝对值约 0.16，愤怒类最高约 0.28，因此只是弱相关下的近似校准，残余依赖可用 copula 等建模，属未来工作。稳定性定理依赖证据上界，架构用 L1 投影保证总量不超过 1000，实测范数约 100 使投影恒为恒等映射，理论 Lipschitz 常数很大但经验梯度范数远小于 1000，说明保证是构造性而非经验拟合。

KL 正则只证明空虚意见是唯一最小值子，并非全局凸，分布外输入在测试时不被强制回到空虚，只是经验上不确定性随损坏上升。跨数据集零样本转移精度自然大跌，例如 IEMOCAP 到 KEMDy20 仅 62.3%，但冲突与不确定性同步上升使半数拒判后剩余精度回升到 90% 以上，因此安全声明是能 flag 而非能直接泛化。

### 复现第一步要固定什么

复现应先按原文固定数据划分与特征。IEMOCAP 用会话独立五折，DEAP 用留一被试，KEMDy20 用说话人独立五折且 5 类协议，CMU-MOSEI 用官方划分；归一化均值方差与滤波参数只在训练折估计。特征用冻结的 Wav2Vec2、BERT 或 KoELECTRA、ViT 与论文给出的 1 维卷积结构，不要微调编码器以免混入增益。训练批量 IEMOCAP 与 KEMDy20 为 32、DEAP 为 16，学习率 2 乘 10 的负 4 次方余弦退火 50 轮，KL 退火前 10 轮从 0.01 到 1，冲突权重 IEMOCAP 与 DEAP 取 0.10、KEMDy20 取 0.15，阈值 0.5，冲突裁剪 0.999，证据上限 1000，种子用 7、13、21、42、2024。

模型选择看验证集非加权精度，早停耐心 10 轮。来源方面，本次未能确认作者已公开代码、模型或数据资源，复现时不应默认其可用；HTML 正文未展开的证明细节与部分超参扫描表，实际可在本次封存 PDF 第 19 到 23 页补充材料中核对：第 19 到 20 页含定理与引理证明，第 21 页含阈值、冲突权重和裁剪常数扫描表。

### 什么时候值得尝试与还缺什么验证

当任务同时需要精度与可信度，例如临床或车载中模态可能损坏或互相矛盾，且推理只有单次前向预算时，值得尝试证据头加 D-S 融合；若数据干净且只关心最高精度，普通注意力已接近，额外冲突监督的收益会变小。第一步建议在已有冻结特征上先加证据头跑通校准，再接入可微 D-S 并打开冲突损失，最后用噪声与缺模态检验不确定性是否上升。还需补的验证包括更大规模野外数据的长尾情绪、生理传感器的跨设备漂移，以及与说话人图等结构化融合的正交互补。

常见误解是把均匀 softmax 当作无知，把冲突当作可靠性分数，或把选择性复核当作主动学习循环；论文强调空虚意见与均匀概率含义相反，冲突度量分歧而非相似度，复核只是按冲突排序送检而不做迭代重训。

<details>
<summary>📎 论文与评分元数据</summary>

排名：前50% | 文档类型：方法研究 | [arXiv 原文](https://arxiv.org/abs/2610.13013v1)

</details>

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。

- 评分规则：type-aware-v1

- 评分模型：muse-spark-1.3-contributor

- 评分请求协议：openai_responses

---

[← 返回 2026-10-15 语音/音乐/音频论文速递](/audio-paper-digest-blog/posts/2026-10-15/)
