---
title: "LEVERAGING UNCERTAINTY IN VISUAL SPEECH RECOGNITION: ERROR ESTIMATION AND ACTIVE LEARNING FOR SPEAKER ADAPTATION"
date: 2026-09-13
draft: false
description: "针对唇读受视觉歧义和说话人差异影响且输出可靠性难判断的问题，论文引入贝叶斯不确定性和熵不确定性及其组合来估计词错误率并做主动学习选难样本微调，在 VoxLRS-SA 及合成池上显示不确定性与词错误率强相关且高不确定性微调在同等标注量下达到或超过随机采样，但估计需少量有标数据拟合映射且小数据微调本身不稳定。"
tags: ["SFT", "统计分析", "可解释性", "静默语音接口"]
categories: ["eusipco-2026 论文"]
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_paper_id: "conference:eusipco:2026:conference-paper-id:0000131"
paper_digest_source_kind: conference
paper_digest_conference_id: "eusipco-2026"
paper_digest_conference_record_url: "https://eurasip.org/Proceedings/Eusipco/Eusipco2026/HTML/session-index/index.html"
paper_digest_conference_pdf_url: "https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0000131.pdf"
paper_digest_api_reader_contract: "beginner-researcher-v3"
paper_digest_api_reader_article_sha256: "f3521ebc05929c1bfb98ec84720afee361a3f8dfb1f87596746163ca28eb80d4"
paper_digest_api_reader_plan_sha256: "0f88b08aaf25871b15345232813e0624748524616484e29d0841cddf3c096634"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings-v4"
paper_digest_api_reader_source_bindings_sha256: "53d72a623853d885dd1fe6c7583857760b9805c2825e90f6786bc8416e4ee87c"
paper_digest_api_reader_source_table_count: 2
paper_digest_api_reader_source_formula_count: 0
paper_digest_api_reader_structured_artifacts_sha256: "aa524445031b85067ae8e72941ba3eae95cc95e4c28bb76d45b1e35d83bb72fe"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity-v1"
paper_digest_api_reader_author_identity_sha256: "9e6d0fe2c78b090aa19dbe02b2984ff30d477c8e5e5e2455fafe124510857d7a"
paper_digest_api_reader_author_count: 3
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity-v1"
paper_digest_api_reader_resource_identity_sha256: "858e4c717541d9d8405e62e0879bb3078873234eeafddd87a577651946bc48f4"
paper_digest_api_reader_resource_count: 0
paper_digest_api_reader_decision_projection: "api-reader-decision-projection-v2"
paper_digest_scoring_contract: "api-scoring-audit-v2"
paper_digest_taxonomy_contract: "paper-taxonomy-flat-tags-compat-v1"
paper_digest_taxonomy_selection_contract: "paper-taxonomy-selection-v1"
paper_digest_taxonomy_registry_version: "paper-taxonomy-v1"
paper_digest_taxonomy_registry_sha256: "15c82a567ce5a55dc1175684ed08b64c158558639d9c8fb822c9587ec32a8778"
paper_digest_taxonomy_concepts: [{"facet":"method","id":"method.sft","label":"SFT"},{"facet":"method","id":"method.statistical-analysis","label":"统计分析"},{"facet":"research_focus","id":"research_focus.interpretability","label":"可解释性"},{"facet":"task","id":"task.silent-speech","label":"静默语音接口"}]
paper_digest_primary_task: "静默语音接口"
paper_digest_primary_method: "统计分析"
paper_digest_score: 5.8
paper_digest_rank_bucket: "前50%"
paper_digest_document_type: "方法研究"
paper_digest_conference_structure: replayable-pdf-layout-v1
---

# 📄 看不准也要说准：用不确定性估计误差并挑出难样本做说话人自适应

> 英文题目：*LEVERAGING UNCERTAINTY IN VISUAL SPEECH RECOGNITION: ERROR ESTIMATION AND ACTIVE LEARNING FOR SPEAKER ADAPTATION*

> 会议身份：`conference:eusipco:2026:conference-paper-id:0000131`


> ✅ 来源为官方会议 PDF；表格与 Figure 按原文证据绑定。PDF 公式以原页区域图片展示，未冒称作者原始 TeX。

> 会议来源：[官方记录](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/HTML/session-index/index.html) · [官方 PDF](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0000131.pdf)

标签：#SFT #统计分析 #可解释性 #静默语音接口

评分：**5.8/10** | 创新 1.2/2 | 技术严谨 1.0/1.5 | 实验充分 1.0/1.5 | 清晰度 0.8/1 | 影响力 0.8/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 0.7/1.5

排名：前50% | 文档类型：方法研究

## 👥 作者与机构

- Yuasa, Hayata：机构信息未能从会议 PDF 纯文本可靠映射
- Tanaka, Keitaro：机构信息未能从会议 PDF 纯文本可靠映射
- Morishima, Shigeo：机构信息未能从会议 PDF 纯文本可靠映射

## 📌 核心摘要

视觉语音识别以唇部视频为输入估计词序列，输出可靠性难判断，且未见说话人因外观与发音差异性能波动大。为此先以无dropout预测为参考，对Monte Carlo dropout多次采样预测计算相对参考的词错误率均值，得到贝叶斯不确定性Ub，刻画模型结构扰动下的输出分歧。接着对解码器logits做softmax得词表分布并在全部输出token上平均香农熵，得到熵不确定性Ue，再将二者秩和取负得用于池内排序的相对度量Urel、线性组合得用于单句可靠性估计的绝对度量Uabs。Uabs经目标说话人10分钟标注数据的最小二乘线性映射直接估计词错误率，Urel按高不确定性从未标注池挑选样本标注后微调，使估计输出进入选择再进入自适应。与音频识别中熵与误差弱相关的经验不同，该链条在唇读中发现两类不确定性均与误差强相关且互补，单次前向的熵可作为低成本替代。在VoxLRS-SA说话人自适应微调任务下，Ue选择的120分钟数据的WER为0.352，低于随机采样的WER 0.362。该结论适用边界受限于英语室内语料与合成人脸数据池，尚未验证多语言、强遮挡与真实采集条件下的外推。原文未披露训练、推理或部署成本。

## 🔗 开源与复现资源

本次未形成可展示的已核验资源记录，开放状态尚未核实。
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 输入是什么，目标是什么，为什么唇读特别难？

这篇论文研究的输入是无声唇部视频，目标是从唇动估计说出的句子内容，属于视觉语音识别。输出是词序列，评价用词错误率，越低越好。作者开场交代的目标有两个：一是在没有人工转录时判断每条输出有多可信，二是在说话人自适应标注预算有限时挑出值得标注的样本。必须保留的信息是模型是视觉-only 的 AutoAVSR，已在大规模多说话人数据上预训练，但在未见说话人上性能会下降且不同说话人之间差异大。

唇读特别难的原因在原文中有两点：一是视觉本身有歧义，不同音在唇形上可能很接近；二是说话人的人脸外观和发音习惯不同，带来跨说话人泛化问题。相比音频语音识别，视觉语音识别平均错误率更高，但其中一部分输入其实被识别得很可靠，所以实践问题不是只提高平均准确率，而是要对每条预测给出可信度。

本文的输出就是 1 篇可核对的方法解读：先讲任务与路线，再走完一个样本的计算链，再讲训练与数据构造，最后按证据讲相关性、估计误差和自适应效果与限制。

### 已有路线解决了什么，还剩什么没有解决？

按同输入、同目标、同监督来对照，已有路线主要有两支。第一支是用更大规模多说话人数据训练，例如引用的大规模前后端与 Transformer 工作，做法是增加数据覆盖来提升平均准确率，代价是模型更像黑盒，出错时难以评估输出可靠性。第二支是说话人自适应微调，包括减少可训练参数、引入可学习填充、加适配器模块等模型侧高效化做法，以及用少量说话人相关数据直接微调的做法，限制是标注成本和对说话人的负担，实际可用数据量受限。

论文指出数据准备侧的实际约束研究较少，而不确定性在其他领域已被用作无标签的预测可靠性度量和数据难度的反映，并被用于主动学习，但其在视觉语音识别中的作用尚未被系统研究。与音频语音识别中熵与词错误率仅弱相关的已有报告不同，本文在视觉模态下观察到强相关，这是需要按模态区分的关键对照。因此本文不是再提出一个新的唇读网络结构，而是把不确定性作为统一工具，同时承担可解释的可靠性估计和高效的数据选择。

### 论文把问题拆成哪两个可验证的任务？

论文把大问题拆成两个可验证的任务。第一个任务是误差估计：在只有模型输出而没有人工转录时，能否用不确定性估计词错误率。验证方式是计算不确定性与真实词错误率的相关系数，再用少量有标数据拟合从不确定性到词错误率的线性映射，用平均绝对误差评价估计精度。第二个任务是说话人自适应的主动学习：在无标池中按不确定性选出一部分数据，标注后微调，比较同等时长下与随机采样的微调后词错误率。

验证方式是固定基座模型、固定微调时长、固定测试集，比较不同选择准则的词错误率。2 个任务共享同一个前提：模型能感知哪些输入难。论文还明确了一个反证任务：如果选低不确定性或低词错误率的易样本，是否反而效果差，这用来检验难度假设的方向性。教学例子是：同样是 30 分钟标注预算，选模型觉得难的 30 分钟和随机 30 分钟，微调后谁在测试集上词错误率更低，这就是主动学习要回答的问题，例子不附带任何数值，数值只在结果节按原文引用。

### 方法全景：一个样本走完输入到两个出口需要哪几步？

沿一个样本走完全程有助于建立学习依赖。输入是一段无标唇视频，先经过视觉-only AutoAVSR 的前端、基于 Conformer 的编码器和基于 Transformer 的解码器，得到词序列预测。接着进入不确定性计算分支：一条分支做多次带 dropout 的前向得到多个预测，另一条分支做 1 次前向得到每个词位置的词表分布。然后分别算出贝叶斯不确定性和熵不确定性，再按任务走向两个出口。第一个出口是词错误率估计，把绝对组合量经最小二乘拟合的线性函数映射为估计的词错误率。

第二个出口是说话人自适应的数据选择，把相对排序量或绝对量从大到小排序，取高不确定性子集送人工标注，再用标注数据微调模型。原文图 1 展示的正是这条总览，包括不确定性计算、词错误率估计输出和为说话人自适应做数据选择与标注微调，但本次没有收到该图像素，因此这里只依据正文与图注转述结构，不描述图中颜色、位置或曲线形状。

**词错误率估计 × 主动学习：** 词错误率估计分工是在无转录时用量化不确定性经最小二乘映射给出输出可信度；主动学习分工是用不确定性排序从无标池中选高不确定性样本送标注再微调。搭配原因是两者共享同一不确定性计算，只在后端用法不同：一个向左做可靠性判断，一个向右做数据选择；组合意义是把可解释性与说话人自适应效率统一到一个无需标签的度量上。

### 两种不确定性各自算什么，为什么要组合？

先讲贝叶斯不确定性。它的输入是同一视频，模型是不加 dropout 的基准参数与多次施加 dropout 掩码得到的参数集合。计算目标是输出序列在参数小扰动下的变化程度。原文明确的实现是：把无 dropout 预测记为参考转录，把每次 dropout 预测与它的词错误率求平均，记为 Ub。句子长度可能随采样变化，但用词错误率度量差异就绕开了逐词对齐问题。直觉是如果换一组 dropout 掩码输出就大变，说明该输入对模型结构变化敏感，不确定性高。

再讲熵不确定性。它的输入是单次前向的解码器 logits。计算目标是输出分布的平均不自信程度。原文明确的实现是：对第 t 个词的 logits 做 softmax 得到词表分布，算香农熵，再对全部 L 个输出词取平均，记为 Ue。如果分布尖锐，熵低；如果在多个词之间摇摆，熵高。

再讲组合。相对组合 Urel 是把 Ub 和 Ue 分别在无标池内排名后求和取负，双高样本得分更高，适合做池内排序选择。绝对组合 Uabs 是 Ub 加 alpha 乘 Ue，alpha 在有标优化集上按与词错误率的相关系数最大化来确定，适合给单个样本打分并做词错误率估计。组合的理由是两者信息源不同，一个看多次扰动的稳定性，一个看单次分布的分散度，论文报告组合后相关性、采样分离度和估计误差都优于单一指标。

**贝叶斯不确定性 × 熵不确定性：** 贝叶斯不确定性分工是度量模型参数小扰动下整句输出是否稳定，用多次 dropout 解码结果之间的词错误率平均变化来刻画；熵不确定性分工是度量单次前向中每个词位置上词表分布是否尖锐，用平均香农熵来刻画。两者搭配的理由是前者看结构扰动敏感性、后者看输出分布自信度，信息来源互补；组合后既能捕捉自信但不稳定的错误，也能捕捉不自信的模糊，从而得到与词错误率相关性更强的统一指标。

**相对不确定性 × 绝对不确定性：** 相对不确定性分工是在无标数据池内做排序比较，把两种不确定性的秩相加取负，用于挑出双高样本；绝对不确定性分工是把两种不确定性做线性加权求和，用于给单个样本打可跨样本比较的分数。搭配原因是排序组合不需要定权重且适合主动学习选序，而线性组合保留绝对量级适合词错误率估计；两者新增作用是把同一对底层信号分别适配选择任务和估计任务。

### 哪些参数训练了，哪些冻结了，不确定性计算要跑几遍？

论文没有提出新网络训练算法，训练部分实际是复用 AutoAVSR 流程并讲清微调条件。模型结构按原文是前端加 Conformer 编码器加 Transformer 解码器，编码器和解码器都施加 dropout，预处理遵循 AutoAVSR 管线，最大输入长度为 24 seconds。预训练在 VoxLRS-SA 的基线部分上按与 AutoAVSR 相同步骤进行，基线集覆盖 9K speakers、1.7K hours。所有微调实验学习率设为 1.0 × 10−4，five warm-up epochs，余弦调度。原文没有逐层说明哪些参数冻结、哪些更新，也没有给出梯度是否截断、优化器类型之外的细节，这部分属于具体缺项，不从模型名称推定实现。

不确定性计算的运行过程是明确的：熵方法只需 1 次前向，贝叶斯方法需要 T was fixed at 20 次带 dropout 的前向，该取值依据先前工作。词错误率估计还需要用少量未参与训练的有标数据做最小二乘拟合，建立不确定性到词错误率的线性映射。主动学习微调的真实计算是：先对池内样本算不确定性并排序，取高不确定性子集，获得人工转录后用于微调，再在固定测试集上测词错误率。

### 数据、划分与合成池是如何构造的，测什么指标？

数据方面，论文采用 VoxLRS-SA，这是一个整合 VoxCeleb2 和 LRS3 的野外英语数据集，分为基线集和自适应集。自适应集包含 20 个不在基线中的说话人，每人约 1 小时视频。原文明确指出每人约 1 小时不足以评价数据选择对微调的影响，因此为其中 5 个说话人各构造约 20 小时的合成数据池。合成方法是：把 LRS2 转录文本用 FastSpeech2 转换成语音，为不同说话人分配不同的 LibriTTS 说话人标识以保持音色一致但区分说话人；人脸图像固定使用 VoxLRS-SA 自适应集中 01 至 05 号说话人的图像。

再用 SadTalker 把合成语音与固定人脸图像结合生成说话脸视频。每个说话人固定输入图像、只改变说话内容，这样排除了人脸朝向和录制条件等非语言因素，便于检验是否是语句难度本身影响自适应。指标是词错误率，越低越好；不确定性与词错误率的关系用相关系数衡量，越高表示单调关联越强；词错误率估计用平均绝对误差衡量，越低越好。

自适应效果用微调后在 30 分钟测试集上的词错误率衡量。聚合方式包括按说话人分别报告和跨说话人汇总，微调小数据不稳定时对随机采样重复 3 次、对不确定性条件重复 2 次再平均。

**VoxLRS-SA 自适应集 × talking face generation 合成池：** VoxLRS-SA 自适应集分工是提供真实野外未见说话人，用于验证不确定性与词错误率的相关性和词错误率估计；talking face generation 合成池分工是为 5 个说话人各构造约 20 小时内容可变但人脸与拍摄条件固定的大池，用于可控地比较不同选择策略微调效果。搭配原因是真实集每人仅约 1 小时不足以做选择消融，合成池补足了可选择的数据量并固定了非语言视觉变量；组合后既保留真实性检验，又得到可复述的选择对照。

### 不确定性与词错误率的相关性有多强，能否挑出难易样本？

本节回答第一个实证问题：不确定性能否反映预测质量。论文在自适应集 10 个未见说话人上计算两种不确定性与词错误率的相关系数。报告显示所有说话人上两种度量与词错误率的相关系数都超过 0.6，跨全部说话人汇总后超过 0.75，贝叶斯整体略强于熵，但谁更强因说话人而异。论文特别对照了音频语音识别已有工作，指出此前在音频中熵与词错误率仅弱相关，而在视觉中观察到强相关，支持的解释是视觉误识别很少出现单个词 logit 过度占优的那种过度自信错误，但这属于有限解释而非因果证明。

第二个对照是能否从无标池中挑出高词错误率和低词错误率子集。做法是按不确定性取前 10% 和后 10%，各占总时长 10%，算平均词错误率，并以按真实词错误率直接排序的子集作为上下界参考。报告显示前 10% 子集的词错误率远高于随机选择，后 10% 低于随机选择，说明不确定性两侧都能有效采样。汇总层面贝叶斯对高词错误率采样更有效，低词错误率采样上两者差异不明显，而熵只需 1 次前向，计算代价远低于需要多次前向的贝叶斯，因此低难度采样上熵更实用。

下表按原文整理了 10 个说话人及汇总的相关系数，指标方向是相关系数越高越好，比较条件是同一预训练模型对同一自适应数据的两种不确定性，公平性在于都不用转录标签。表前问题已经提出：两种度量是否都强相关以及谁更强。表中 Ub 行与 Ue 行分别对应贝叶斯与熵，ALL 列为跨说话人汇总。

| 条件 | 指标 | 说话人 01 | 说话人 08 | 全部说话人汇总 |
| --- | --- | --- | --- | --- |
| 贝叶斯不确定性 Ub | 与词错误率相关系数 | 0.752 | 0.797 | 0.761 |
| 熵不确定性 Ue | 与词错误率相关系数 | 0.770 | 0.779 | 0.750 |
| 组合 Uabs | 与词错误率相关系数 | 未在该表报告 | 未在该表报告 | 高于单一指标 |

表后解释需要同时讲收益与代价。收益是两种不确定性都达到强相关且汇总超过 0.75，支持用其做无标签可靠性判断；代价是贝叶斯需要 20 次前向，推理开销大，而熵只需 1 次但在高难度采样上汇总略弱。未胜出项是部分说话人上贝叶斯弱于熵，例如 01 号上 0.752 低于 0.770，说明总体趋势不等于每组都成立。组合指标在 01 至 07 上优化 alpha 后在 08 至 10 上取得更高相关，具体见消融节的新对照，这里不提前断言数值。

### 词错误率估计的误差有多大，组合为什么更有效？

本节回答可靠性估计的精度问题。做法是用目标数据中随机抽的 10 分钟有标数据做最小二乘拟合，把不确定性映射到词错误率，模拟真实场景，随机抽样重复 3 次后报告平均绝对误差，评估在 01 至 10 号合并数据上进行。报告显示贝叶斯和熵的平均绝对误差都在 0.1 左右，贝叶斯略好。论文判断这是粗粒度但有用的精度，支持在无标数据上接受可信输出、选择性使用每条信息，但未测量误判率或下游使用成本，因此不承诺部署后一定降低人工复核量。

组合效果在原文中有独立验证。相对组合 Urel 在跨 10 个说话人汇总上比单一不确定性更清晰地分离高低词错误率子集；绝对组合 Uabs 先在 01 至 07 号上优化得到 alpha 等于 0.43，再在 08 至 10 号上评价，在 3 个说话人上相关系数都高于单一指标，采样性能也更好，且词错误率估计的平均绝对误差低于单一不确定性。支持的判断是不同类型不确定性互补，组合得到更有效的指示器。限制是 alpha 需要有标优化集，存在跨说话人迁移问题，论文只在部分说话人上验证，是否对新说话人稳定属于待验证事项。

### 同等标注时长下，选难样本微调是否真的更划算？

本节组织主动学习微调的对照。测的是在合成池上用不同准则选 15、30、60、120 分钟数据微调后的词错误率，越低越好。与谁比包括随机采样、按 Ub 选、按 Ue 选、按 Urel 选，以及按真实词错误率选的高难度和低难度参考，其中按真实词错误率的选择需要标签，属于事后最优参考，不能当作可部署收益。条件一致性方面，由于预训练模型在合成数据上表现不佳，论文先用另外 10 个说话人的 4 小时合成数据微调得到基座，再以此为起点算不确定性并做选择性微调。

评估在 30 分钟测试集上进行并对 5 个说话人平均，以缓解小数据微调不稳定。关键数字是 120 分钟时高不确定性选择一致优于随机，而低词错误率数据在所有时长上都导致性能下降。支持的判断是模型感知的数据难度确实影响自适应，补已会的数据收益有限，练难句更有效。限制是合成池固定了人脸与拍摄条件，只改变文本内容，因此结论在真实野外多变条件下是否同样成立需要补验证。

下表按原文整理了不同子集微调后的词错误率，比较对象包含实际可运行的随机、Ub、Ue、Urel，以及需要标签的事后参考。表前问题是同等时长下哪种选择更有效，公平条件是同一基座、同时长、同一测试集，指标方向是词错误率越低越好。

| 条件 | 指标 | 15 分钟 | 30 分钟 | 60 分钟 | 120 分钟 |
| --- | --- | --- | --- | --- | --- |
| 随机采样 | 微调后词错误率 | 0.483 | 0.457 | 0.418 | 0.362 |
| 贝叶斯 Ub 选择 | 微调后词错误率 | 0.482 | 0.452 | 0.417 | 0.356 |
| 熵 Ue 选择 | 微调后词错误率 | 0.481 | 0.453 | 0.415 | 0.352 |
| 相对组合 Urel 选择 | 微调后词错误率 | 0.475 | 0.449 | 0.417 | 0.352 |
| 按真实高词错误率选择 | 微调后词错误率 | 0.484 | 0.456 | 0.419 | 0.353 |

表后需要讲具体代价与反例。主要收益是在 120 分钟时不确定性选择达到或超过随机，例如 Ue 的 0.352 优于随机的 0.362；具体代价是小数据时差距很小，15 分钟时各方法几乎相同，且实验本身重复次数有限，稳定性有限。必须就近说明的负结果是按真实低词错误率选择的子集在 15 至 120 分钟上分别为 0.507、0.489、0.459、0.397，全面差于随机，这反向支持了难度假设，但也提醒不能把易样本当作无害数据，其微调反而更差。未评测边界包括超过 120 分钟后差距是否持续扩大，以及在真实非合成池上的表现，原文未报告。

### 哪些结论有边界，哪些成本没有被测量？

首先区分报告、支持与推测。论文直接报告的是相关系数、子集平均词错误率、估计平均绝对误差和微调后词错误率；有限解释是视觉误识别较少出现过度自信错误，以及难句更值得学；未验证推测是该方法能直接降低实际部署的标注总成本，因为原文没有测量标注时间、推理延迟或人力复核成本。相关性不是因果，不确定性高与识别错同时出现，不代表不确定性导致错误。

其次，词错误率估计依赖少量有标数据拟合线性映射，10 分钟的选择是否稳定、跨说话人是否需要重拟合，原文只做了 3 次随机重复，证据有限。再次，贝叶斯方法需要 20 次前向，训练资源、推理开销与实际延迟需要分别讨论，不能把 1 次前向的熵成本与 20 次前向的贝叶斯成本混为一谈。最后，合成池固定了视觉非语言因素，真实野外的人脸朝向、光照和遮挡未被覆盖；自适应集每人仅约 1 小时，真实小样本下的选择方差可能更大。

资源状态方面，本次收到的证据中没有绑定且完成验证的代码、模型或数据资源，因此不得声称代码或权重已公开，复现需按论文文字重写流程。

### 要复现这套流程，先做什么，需要哪些超参数？

复现的第一步是准备数据与基座。按原文需要 VoxLRS-SA 基线集做预训练、自适应集做评价；若要复现选择消融，还需按描述构造合成池：用 FastSpeech2 把 LRS2 转录转语音并分配 LibriTTS 说话人标识，用固定人脸图像经 SadTalker 生成视频，每说话人约 20 小时，测试集 30 分钟。第二步是固定模型与推理条件：采用视觉-only AutoAVSR 管线，最大输入 24 秒，编码器解码器保留 dropout，微调学习率 1.0 乘 10 的负 4 次方、5 轮热身、余弦调度。第三步是实现两种不确定性：熵分支对解码 logits 做 softmax 后算平均熵。

贝叶斯分支固定 T 等于 20 次 dropout 前向，以无 dropout 预测为参考算平均词错误率。第四步是组合与映射：在优化集上搜索使相关系数最大的 alpha，原文报告值为 0.43，再用 10 分钟有标数据做最小二乘拟合得到估计函数；选择时用相对排序或绝对分数取高不确定性子集。第五步是评价：报告相关系数、上下 10% 子集平均词错误率、估计平均绝对误差，以及同等时长下与随机采样的微调后词错误率，并对随机条件做多次重复。

还需补的验证是更换优化说话人后 alpha 是否稳定、在真实池上是否仍有效，以及记录多次前向带来的 wall-clock 开销。

### 何时值得尝试这个方法，一句话如何记住它？

当系统已经有一个在大规模数据上预训练的唇读模型，但要在新说话人上部署且标注预算有限时，值得尝试先算不确定性再决定信哪条输出、标哪段数据。具体做法是：对无标视频同时算熵和贝叶斯扰动稳定性，若两者都高则优先送标；若只需快速过滤易样本，单次前向的熵已具实用性；若要估计词错误率，则需留少量有标数据拟合映射，并接受约 0.1 量级的平均绝对误差。

需要记住的判断是：不确定性在这项工作中不是模型自信的装饰，而是可执行的排序与估计工具，其价值在同等时长微调对照中得到支持，但代价是贝叶斯分支的多遍计算和对少量有标拟合数据的依赖。常见误解是把高相关当成高精度逐句预测，实际上论文支持的是粗粒度可靠性判断和池内难样本富集；另一个误解是把事后按真实词错误率选出的上下界当作可部署方法，它们只是参考，不能替代无标签的不确定性选择。

后续若要落地，还需补真实野外池、跨说话人 alpha 稳定性与端到端时间成本的测量。

## 📐 原文公式与排版

以下展示论文原页中的数学表达区域，保留原始上下标、分式和符号排版。区域序号仅用于本文导航，不是论文公式编号。

[![原文数学表达区域 1，PDF 第 2 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/897d9438032a/figure-1.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/897d9438032a/figure-1.png)

区域 1 · [查看论文原页](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0000131.pdf#page=2)

[![原文数学表达区域 2，PDF 第 2 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/897d9438032a/figure-2.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/897d9438032a/figure-2.png)

区域 2 · [查看论文原页](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0000131.pdf#page=2)

[![原文数学表达区域 3，PDF 第 2 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/897d9438032a/figure-3.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/897d9438032a/figure-3.png)

区域 3 · [查看论文原页](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0000131.pdf#page=2)

[![原文数学表达区域 4，PDF 第 2 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/897d9438032a/figure-4.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/897d9438032a/figure-4.png)

区域 4 · [查看论文原页](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0000131.pdf#page=2)

[![原文数学表达区域 5，PDF 第 2 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/897d9438032a/figure-5.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/897d9438032a/figure-5.png)

区域 5 · [查看论文原页](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0000131.pdf#page=2)

[![原文数学表达区域 6，PDF 第 2 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/897d9438032a/figure-6.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/897d9438032a/figure-6.png)

区域 6 · [查看论文原页](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0000131.pdf#page=2)

[![原文数学表达区域 7，PDF 第 2 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/897d9438032a/figure-7.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/897d9438032a/figure-7.png)

区域 7 · [查看论文原页](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0000131.pdf#page=2)

[![原文数学表达区域 8，PDF 第 3 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/897d9438032a/figure-8.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/897d9438032a/figure-8.png)

区域 8 · [查看论文原页](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0000131.pdf#page=3)

另有 5 个候选区域因边界不明确或图片数量、尺寸限制未展开；请[查看完整论文](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0000131.pdf)中的原始排版。

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。
- 评分规则：type-aware-v1
- 评分模型：muse-spark-1.3-contributor
- 评分请求协议：openai_responses

---

[← 返回 eusipco-2026 论文汇总](/posts/conference-eusipco-2026/)
