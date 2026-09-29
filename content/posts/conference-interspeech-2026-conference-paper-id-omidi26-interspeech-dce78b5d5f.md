---
title: "Learning from Annotation Uncertainty: Entropy-Aware Curriculum for Speech Emotion Recognition"
date: 2026-09-28
draft: false
description: "该研究在 MSP-Podcast 2.0 九类任务上对比硬共识与主次投票分布监督，报告分布目标把 Test1/Test2 的 JSD/KLD 系统性压低而 Macro-F1 差异较小，代价是 Other 类 F1 大幅下降且高熵区硬判决依然困难。"
tags: ["课程学习", "多任务学习", "语音", "语音情感识别"]
categories: ["interspeech-2026 论文"]
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_paper_id: "conference:interspeech:2026:conference-paper-id:omidi26_interspeech"
paper_digest_source_kind: conference
paper_digest_conference_id: "interspeech-2026"
paper_digest_conference_record_url: "https://www.isca-archive.org/interspeech_2026/omidi26_interspeech.html"
paper_digest_conference_pdf_url: "https://www.isca-archive.org/interspeech_2026/omidi26_interspeech.pdf"
paper_digest_api_reader_contract: "beginner-researcher-v3"
paper_digest_api_reader_article_sha256: "d30d07718d55262a7d5254368f4b85112d8a81b80f90883d1d9285a27af0c789"
paper_digest_api_reader_plan_sha256: "c0a4e1369dcd7d36e554ae6d74f13d31c4968e2eafa5199e89cf9f55b0ad3a38"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings-v4"
paper_digest_api_reader_source_bindings_sha256: "726dbd380ede2fbcc01cbbf3e719177d89532b830b5ada1d256c00ae4b909001"
paper_digest_api_reader_source_table_count: 3
paper_digest_api_reader_source_formula_count: 0
paper_digest_api_reader_structured_artifacts_sha256: "4f0429815ceb0eae58ecea233381ba699e647c35f8db364ed57eace1fb86d6e7"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity-v1"
paper_digest_api_reader_author_identity_sha256: "e9b174824b3e723d4ada9b17149f5e51c125fd19144915922ae8f63e30153f2d"
paper_digest_api_reader_author_count: 2
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity-v1"
paper_digest_api_reader_resource_identity_sha256: "1aa1b9516a8645f99dc29966fcd4de59823df03fff1088ca8757c2b329666fb4"
paper_digest_api_reader_resource_count: 0
paper_digest_api_reader_decision_projection: "api-reader-decision-projection-v2"
paper_digest_scoring_contract: "api-scoring-audit-v2"
paper_digest_taxonomy_contract: "paper-taxonomy-flat-tags-compat-v1"
paper_digest_taxonomy_selection_contract: "paper-taxonomy-selection-v1"
paper_digest_taxonomy_registry_version: "paper-taxonomy-v1"
paper_digest_taxonomy_registry_sha256: "15c82a567ce5a55dc1175684ed08b64c158558639d9c8fb822c9587ec32a8778"
paper_digest_taxonomy_concepts: [{"facet":"method","id":"method.curriculum","label":"课程学习"},{"facet":"method","id":"method.multitask","label":"多任务学习"},{"facet":"signal","id":"signal.speech","label":"语音"},{"facet":"task","id":"task.emotion-recognition","label":"语音情感识别"}]
paper_digest_primary_task: "语音情感识别"
paper_digest_primary_method: "课程学习"
paper_digest_score: 5.7
paper_digest_rank_bucket: "前50%"
paper_digest_document_type: "方法研究"
paper_digest_conference_structure: pdf-visual-quote-evidence-v1
---

# 📄 把标注分歧留下来：用熵感知课程学习九类语音情感分布

> 英文题目：*Learning from Annotation Uncertainty: Entropy-Aware Curriculum for Speech Emotion Recognition*

> 会议身份：`conference:interspeech:2026:conference-paper-id:omidi26_interspeech`



> 来源为官方会议 PDF；图片依据原页像素，表格数字依据原文引用。PDF 文字层不视为原始 TeX，未可靠恢复的结构不作推断。


> 会议来源：[官方记录](https://www.isca-archive.org/interspeech_2026/omidi26_interspeech.html) · [官方 PDF](https://www.isca-archive.org/interspeech_2026/omidi26_interspeech.pdf)

标签：#课程学习 #多任务学习 #语音 #语音情感识别

评分：**5.7/10** | 创新 1.1/2 | 技术严谨 1.0/1.5 | 实验充分 1.0/1.5 | 清晰度 0.8/1 | 影响力 0.8/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 0.7/1.5

排名：前50% | 文档类型：方法研究

## 👥 作者与机构

- Zahra Omidi：机构信息未能从会议 PDF 纯文本可靠映射
- John Hansen：机构信息未能从会议 PDF 纯文本可靠映射

## 📌 核心摘要

语音情感识别输入为播客语音，输出为9类离散情感与效价激活支配三维连续评分，难点是多人标注存在系统性分歧而硬共识标签会抹除混合感知。该工作先由官方多人投票构造硬共识独热、主投票归一化分布、主次投票加权合并分布三类监督目标并计算归一化标注熵，再以WavLM-Base编码加时序卷积与两层门控循环单元提炼话语嵌入，随后用分类与效价激活支配回归双分支联合训练并仅在分类分支施加熵过滤或加权课程以先学低熵清晰样本再逐步引入高熵样本。与硬标签训练相比，分布监督保留跨类别不确定性而非将其挤入剩余类，从而在保持宏观指标的同时显著改善与人类投票分布的一致性。在MSP-Podcast 2.0 Test1测试集评测下，M90-Filter的Macro-F1为34.8±.5，高于Hard-CE的Macro-F1 28.7±2.1。高熵话语仍难以用硬指标评价，结论仅适用于有多标注且保留 Other 类的 9 分类体系。原文未披露训练时长、推理延迟与部署成本。

## 🔗 开源与复现资源

本次未形成可展示的已核验资源记录，开放状态尚未核实。
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 输入是什么：为什么语音情感不能只给一个标准答案？

这篇论文研究的是语音情感识别，也就是听一段说话语音，判断说话人表达的是中性、高兴、生气、悲伤、恐惧、厌恶、轻蔑、惊讶中的哪一种，或者是否属于难以归类的其他类。初学者容易把这个任务想成普通分类：一段语音对应一个正确标签，模型猜对就行。但语音情感的主观性很强，同一段语音，不同听众可能听到不同的情绪，有人觉得偏生气，有人觉得带轻蔑，还有人觉得说不清。

论文使用的 MSP-Podcast 2.0 正好记录了这种分歧。每条语音至少有 5 名标注者给出主要情绪，还可以给出次要情绪，并对效价、激活度、优势度打 1 到 7 分。传统做法是把多数人的主要情绪取出来，做成独热硬标签，训练时只让模型学这一个答案。作者要追问的是，这种把分歧压成一个答案的做法，会不会丢掉有意义的感知信息。于是研究目标很明确：在同一个模型和同一套训练流程下，比较硬标签训练与保留投票比例的分布训练，看哪种更贴近人类投票，以及标注不确定度如何影响效果。

对研究生而言，关键先建立学习依赖：先理解标注是怎么产生的，再理解模型把什么当监督信号，最后才看指标。硬标签对应交叉熵，分布对应 KL 散度，两类指标回答的是不同问题。本文不声称代码或数据当前可用，本次收到的证据也没有提供可验证的公开资源状态，因此复述时只讲论文报告的模型、划分与训练条件，不推断外部可下载性。

### 相关路线如何处理标注分歧？

在进入方法前，需要把论文所处的位置讲清楚。第一条路线是继续用自监督语音编码器提升鲁棒性，例如 WavLM、HuBERT 和 wav2vec2，本文也沿用 WavLM-Base 做声学 backbone。这条路线解决的是表示能力，但默认每条语音仍有一个离散真值。

第二条路线开始正视分歧本身。有工作用贝叶斯网络或软标签学习属性不确定度，有工作学习标注者一致性，还有工作把混合情绪写成多标签问题，指出压成单标签会掩盖组合式情绪。论文引用了这些工作，说明分歧可能不是噪声，而是结构化的模糊信息。

第 3 条路线是标签修正，例如对会话情绪做标签精炼，改写或生成新的监督目标。作者明确与这类方法划清界限：本文不改写目标，而是原样保留官方投票分布，只改变监督形式和损失函数。这样做的好处是可控，坏处是不能期待修正标签带来的额外增益。理解这个选择，后面看到分布方法在硬指标上没有大胜，就不会误判为方法失败，因为它的设计目标本来就是保真于原始分歧。

### 要解决的矛盾：硬判决评价与人类分歧并存怎么办？

论文要处理的矛盾是，训练与评价长期依赖硬共识，但数据本身提供的是分布。MSP-Podcast 保留完整 9 类，不做类别合并，目的就是不改动投票分布，不掩盖类别相关的模糊模式。次要标签先映射到同一 9 类空间，再与主标签合并。

从学习角度看，硬标签把模糊语音推给残差类 Other 是方便的，因为 Other 可以当作说不清的筐。但这样模型学到的是把不确定度集中到一个筐里，而不是把不确定度摊到高兴、生气、轻蔑等具体情绪上。分布监督则相反，它要求模型输出一个 9 维概率，去接近投票比例。

**硬共识标签 × 分布监督：** 硬共识标签把多人主情绪投票取 plurality 多数后写成独热向量，分工是给出唯一可做交叉熵的类别；分布监督把主投票计数归一化为 9 维概率向量，分工是保留分歧强度。两者搭配的理由是同一语音可同时被听成多种情绪，组合意义在于用分布目标让模型输出去拟合投票比例，而不是把模糊样本硬压进 Other。

这个桥接决定了后文的评价必须双轨：既要看 Macro-F1 这类硬判决指标，也要看 JSD 与 KLD 这类分布拟合指标。如果只看硬指标，会低估分布方法的价值；如果只看分布指标，又会忽略实际部署时仍需做硬决策的代价。

### 方法全景：一条语音走完模型要经过哪些部件？

先沿一个样本走完全程。输入是一段播客切出的语音波形。波形先进入 WavLM-Base 得到帧级表示，再经过时域卷积和两层 GRU 做时序建模，最后池化或映射为一个 256 维的话语嵌入。这个嵌入是全句情感的紧凑表示，后面两个头都用它。

类别头输出 9 类情绪分布，维度头输出效价、激活度、优势度的均值与方差。类别损失按监督方式切换，维度损失用异方差高斯负对数似然加一致性相关系数正则。多任务权重是类别 1.0、维度 0.3，维度正则权重是 0.1。熵课程只作用于类别分支，不改变维度分支。

**类别分支 × VAD 回归分支：** 类别分支预测 9 类情绪分布，分工是承担离散情绪的分布或硬分类损失；VAD 回归分支用均值和方差预测效价、激活度、优势度，分工是刻画连续情感结构与异方差不确定度。搭配理由是离散类别与连续维度描述同一情感的不同侧面，组合意义在于共享 256 维话语嵌入后多任务联合训练，让声学表示同时对齐类别投票与维度评分。

下面这张结构图把上述路径画了出来，阅读时先看主干再看分叉，有助于把参数冻结、损失权重与课程调度的各自位置对号入座。

> **看图路径：** 1. 沿左侧波形经 WavLM-Base、时域卷积、两层 GRU 到 256 维嵌入的主箭头走一遍；2. 找到 WavLM 到第一层 GRU 的 Skip Connection 支路；3. 确认嵌入后分叉为离散情绪 PDF 柱状图与效价激活度优势度三条色带

[![原论文 Figure 2：WavLM–TC-GRU multitask architecture with shared 256-dimensional embedding and separate…](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/interspeech-2026/0fd4c2bcb971/figure-2.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/interspeech-2026/0fd4c2bcb971/figure-2.png)

*论文图 2。原论文 Figure 2：“WavLM–TC-GRU multitask architecture with shared 256-dimensional embedding and separate categorical emotion and VAD prediction heads.”。*

从像素可见，主干从左到右是波形箭头、浅蓝色 WavLM-Base 方块、斜叠的时域卷积、两个紫色 GRU 方块、粉色嵌入条。嵌入条之后分出上下两个黄色决策块，上为离散情绪概率柱状图，下为 3 条横向色带分别标注效价、激活度、优势度。图中还有一条从 WavLM 直连第一层 GRU 的跳连，说明时序模块同时看到编码器输出与卷积后特征。底部 3 段标注把系统切为骨干模型、时域卷积门控循环模块与决策 3 段。这种画法对应正文所说的共享嵌入加双头结构，课程与损失切换都发生在决策段的类别头一侧，没有改动声学编码器的前向主路。

### 监督与不确定度如何构造：三种目标与熵的计算口径是什么？

监督构造是本文最需要核对的部分，共有 3 种。第一种是硬共识监督，对每条语音取主要情绪的多数票，转成独热向量。第二种是主分布监督，把主投票计数除以总数，得到 9 维概率向量。第 3 种是合并主次分布监督，按加权平均把次投票分布掺进来，权重取 0.9 比 0.1 和 0.8 比 0.2 两档，分别记为 M90 与 M80。主票刻画占优感知，次票给非占优情绪补质量。

**主分布 × 合并主次分布：** 主分布只用主情绪票计算 Pi，分工是刻画占优感知；合并主次分布按 yi 等于 αPi 加 1 减 α 乘 Si 引入次情绪票，分工是给非占优情绪补概率质量。搭配理由是次标签记录了混合感知，组合意义在于 0.9P/0.1S 与 0.8P/0.2S 两种权重可以控制捕捉次情绪与过度平滑之间的折中。

不确定度按合并后的分布算归一化香农熵，类别数取 9，取值在 0 到 1 之间，越大表示投票越分散或混合情绪支持越强。关键设计是熵只算 1 次且固定不变，硬标签系统、主分布系统、合并分布系统对同一条语音拿到同一个熵值。熵不作为模型输出，只用于按模糊程度分组评价和课程调度。论文提醒，用少数标注者估计的熵只是模糊的近似代理，但仍可做受控分析。

在看熵的类别结构前，先明确比较口径：同一模型结构、同一多任务框架，只换类别目标与损失，这样分布带来的变化才能归因于监督与目标选择，而非换了 backbone。

> **看图路径：** 1. 先看横轴 9 个情绪类与纵轴 Entropy/bits，确认每类有三把小提琴；2. 对比同一类内浅色 Primary 与两个深色 Merged 的宽度与中线高度；3. 重点观察 Fear、Disgust、Contempt、Surprise、Other 的中线是否高于 Neutral 和 Happy

[![原论文 Figure 1：1](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/interspeech-2026/0fd4c2bcb971/figure-1.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/interspeech-2026/0fd4c2bcb971/figure-1.png)

*论文图 1。原论文 Figure 1：“1”。*

从像素可见，横轴是 9 个情绪类，纵轴是熵，单位为比特。每类有三把并排小提琴，浅色对应主分布，另两种灰度对应两种合并比例。可见规律是中性与高兴的小提琴集中在低熵区，中线较低；恐惧、厌恶、轻蔑、惊讶与其他类的主体明显上移，尾部更重。0.8 比 0.2 的合并比较 0.9 比 0.1 更分散，符合掺入更多次情绪会平滑掉原型类、增加多类支持的解释。这张图不支持把熵当成与类别无关的噪声强度，因为不同情绪的模糊基线本身不同，后文按熵分箱时必须同时记住类别不平衡的影响。

### 训练与课程如何调度：冻结、优化与加权各管哪一段？

训练细节按原文交代。优化器用 AdamW，WavLM 骨干学习率为 1×10−5，任务头为 1×10−4，各自配 NewBob 调度，改善阈值 0.0025，退火因子 0.9。批量 32，混合精度，最多 18 轮，按开发集 Macro-F1 早停，耐心为 4。硬件为得州大学达拉斯分校 Juno 集群的 A30，固定随机种子。WavLM 从预训练权重初始化并渐进解冻，在第 1、2、4、8 轮分别解冻 2、4、8、12 层 Transformer，并用逐层学习率缩放稳定优化。完整模型参数量为 95.96M。

**标注熵 × 课程学习：** 标注熵是对合并分布算归一化香农熵，分工是把每条语音的不确定度变成与训练目标无关的固定属性；课程学习按熵分位数决定先学哪部分样本，分工是控制优化顺序或样本权重。搭配理由是低熵样本类别结构更清晰，组合意义在于先学清晰样本再引入高熵样本，或反向加权，以检验不确定度调度是否改善分布拟合与跨划分稳定性。

课程有过滤与加权两类，各有标准与反向。过滤是按熵分位数在第 1、2、4、8、12 轮把激活子集从 0.50、0.60、0.80、0.90 扩大到 1.00 分位数，标准方向先学低熵再纳入高熵，反向则从全量逐渐收缩到高熵区。加权是保留全部样本，只按熵缩放类别损失的样本权重，标准加权重视低熵，反向加权重视高熵。所有课程只动类别分支。

下表把可直接核对的优化与目标权重放在一起，阅读时注意学习率、批量、轮数与损失权重是不同维度的超参数，不能互相替代。

| 部分 | 对象 | 数值 | 作用 | 适用条件 |
| --- | --- | --- | --- | --- |
| 模型规模 | 完整模型 | 95.96M 参数 | 说明容量与复现成本 | WavLM-Base 加 TC-GRU 双头 |
| 优化 | 骨干学习率 | 1×10−5 | 控制预训练编码器更新步长 | AdamW 加 NewBob 调度 |
| 优化 | 任务头学习率 | 1×10−4 | 控制新初始化头更新步长 | 与骨干分别调度 |
| 训练 | 批量与轮数 | 32，至多 18 轮 | 控制每步样本数与总预算 | 混合精度，按开发集 Macro-F1 耐心 4 早停 |
| 目标 | 类别与 VAD 权重 | 1.0 与 0.3 | 平衡离散与连续任务 | 另有 CCC 正则权重 0.1 |

表后需要点明代价与边界。渐进解冻与双学习率有助于稳定微调，但也意味着复现时必须严格对齐解冻时刻与调度阈值，否则前期只训头、后期才动骨干的节奏会被打乱。加权课程保留全部样本，计算量不变；过滤课程前期样本少、后期才用全量，单轮耗时不同。论文未报告每轮时长与推理延迟，因此不能从训练配置推断部署成本，复现时应另测前向耗时与显存占用。

### 实验条件：在什么数据、划分与指标下比较才算公平？

数据用 MSP-Podcast 2.0 全量 9 类，官方说话人无关划分，同时在 Test1 与 Test2 上评价。论文报告训练、开发、Test1、Test2 的归一化熵中位数、四分位与高熵比例，指出中位数相近但评测集高熵更多，尤其是 Test2。这解释了为什么跨划分稳定性是考察重点。

类别损失按监督切换：硬标签用交叉熵或类别平衡交叉熵，分布用 KL 散度及其加权变体。维度分支统一用高斯负对数似然加 CCC 正则。评价用 Macro-F1 与 UAR 看硬判决，用 JSD 与 KLD 看预测分布与标注分布的贴合，用 CCC 看效价、激活度、优势度。模糊分层把测试按归一化熵切为低中高三箱，分别算 Macro-F1。

下表按原文语句核对数据规模、标注密度与解冻节奏，凡涉及划分内样本数与熵分位数的具体数字，复现时应以官方划分脚本为准，不自行重切。

| 环节 | 条件 | 数值与口径 | 教学要点 | 复现动作 |
| --- | --- | --- | --- | --- |
| 语料 | 总量与说话人 | 267,905 条，3,641 人 | 规模决定方差与 imbalance | 核对官方划分而非随机切分 |
| 标注 | 每条标注者与量表 | 至少 5 人，1-7 分 | 主次标签加维度评分并存 | 主次先映射到同一 9 类再合并 |
| 模型 | 渐进解冻 | 2，4，8，12 层对应第 1，2，4，8 轮 | 前期稳头后期调骨干 | 记录每轮解冻层数与学习率缩放 |
| 课程 | 分位调度 | 0.50，0.60，0.80，0.90，1.00 对应第 1，2，4，8，12 轮 | 过滤改组成加权改重要性 | 标准与反向分别跑一遍 |
| 评价 | 双轨指标 | Macro-F1/UAR 与 JSD/KLD/CCC | 硬判决与分布拟合分开看 | 高熵箱结果不单独当成败判据 |

表后要强调公平条件。所有系统共享同一 WavLM-TC-GRU 结构与多任务协议，熵信号固定且与目标类型无关，因此 JSD/KLD 下降可以归因于分布目标与课程，而不是换了容量或换了数据。反过来说，Macro-F1 相近不能直接判平，因为硬系统的一部分分数来自 Other 筐，分布系统把概率摊到了具体情绪上，两者的错误分布不同。

### 主结果回答什么：分布拟合变好是否等于硬分类变强？

论文报告，相对于硬交叉熵与类别平衡交叉熵，所有分布目标在 Test1 与 Test2 上都一致降低 JSD 与 KLD，且自助法置信区间较窄，说明在话语级重采样下稳健。这是全文最强的证据，支持把分歧当结构化信息来学。

Macro-F1 的差异则小得多，且需要结合类别行为一起读。硬系统在 Other 类上明显占优，论文给出硬交叉熵在 Test1/Test2 的 Other 类 F1 为 22.8/20.5，硬类别平衡版本为 36.0/33.0，而主分布的 KL 版本仅为 0.9/0.9，M90 版本为 1.4/近零。作者明确说 Other 类 F1 低不代表更好，只说明标签空间用法不同：硬训练把 Other 当离散残差类来学，分布训练把模糊摊到多个情绪类上。

**Macro-F1 × JSD/KLD：** Macro-F1 对单次硬判决按类平均，分工是评价取 argmax 后的类别命中；JSD/KLD 比较预测分布与标注投票分布，分工是评价对人类分歧的拟合程度。搭配理由是高熵语音本来就没有唯一正确答案，组合意义在于同时看两套指标才能发现硬标签靠 Other 类保 Macro-F1、分布监督靠摊开概率降散度的不同行为。

课程进一步改变平衡。M90 过滤在 Test1 Macro-F1 最高，M90 加权在 Test2 Macro-F1 最高且 Test2 KLD 最低，提示先学清晰样本有助于同分布硬判决，保留模糊样本但按熵加权有助于跨划分稳定。反向课程没有超过对应标准课程，支持先清晰后模糊更稳。

> **看图路径：** 1. 对比左中右三幅子图粉紫色 Other 区域的面积变化；2. 看黄色 Happy、红色 Angry、蓝色 Sad、灰色 Neutral 是否在分布监督下分区更整块；3. 注意棕色 Contempt 与橙色 Surprise 是否落在过渡带而非独立大团

[![原论文 Figure 3：UMAP projection of utterance-level embeddings, col- ored by predicted emotion.](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/interspeech-2026/0fd4c2bcb971/figure-3.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/interspeech-2026/0fd4c2bcb971/figure-3.png)

*论文图 3。原论文 Figure 3：“UMAP projection of utterance-level embeddings, col- ored by predicted emotion.”。*

从像素可见，三幅 UMAP 子图从左到右为硬类别平衡、M90 熵过滤、M90 熵加权。左侧大面积粉紫色 Other 覆盖中部与底部，黄色、红色、蓝色被挤到边缘；中右两幅粉紫大团明显收缩，灰色中性占据中下部，黄色高兴在左、红色生气在上、蓝色悲伤在右，分区更整块，棕色轻蔑与橙色惊讶散在过渡带。结合正文，这与定量结果一致：分布监督降低对残差类的依赖，学到更能反映情绪渐变关系的表示。但需记住 UMAP 只是定性可视化，不能当成分类精度的证明，降维距离不等于可分性。

### 分熵看效果：哪一段模糊真正吃到分布监督的红利？

按熵分箱后，所有方法都从低熵到高熵下降，说明高分歧语音的硬判决本来就难。分布监督最清晰的增益在中熵区，论文指出 M90 加权 KL 在 Test1 中熵最高且高熵持平最优，在 Test2 中熵也最强。这支持一个判断：当标注有实质分歧但尚未完全模糊时，分布目标最有效。

高熵区增益有限，最优配置相对硬监督只有温和提升，且各方法得分挤在一起，说明极端模糊仍挑战类别识别。作者提醒，低分不应直接读成分布监督无效，而是硬类别评价与高熵本质之间存在错配：本来就没有唯一答案，却非要模型猜中一个多数票。

下表聚焦 Other 类的用法差异与课程取舍，避免把聚合 Macro-F1 当成唯一依据。

| 监督与调度 | 目标构造 | Test1 Other 类 | Test2 Other 类 | 应如何解读 |
| --- | --- | --- | --- | --- |
| 硬交叉熵 | 多数票独热 | 22.8 | 20.5 | 靠残差筐保硬指标，分布拟合差 |
| 硬类别平衡交叉熵 | 独热加类别平衡 | 36.0 | 33.0 | Other 更高，聚合 Macro-F1 部分来自该类 |
| 主分布 KL | 主票归一化 | 0.9 | 0.9 | 概率摊开，Other 几乎不用 |
| 合并 M90 KL | 0.9 主加 0.1 次 | 1.4 | 近零 | 引入次情绪，仍不依赖残差类 |
| M90 过滤与加权 | 熵课程 | Test1 过滤 Macro-F1 最高，Test2 加权 Macro-F1 最高且 KLD 最低 | 跨划分稳定性更好 | 先清晰后模糊优于反向调度 |

表后必须补一个未胜出项。反向过滤与反向加权更早暴露高熵样本，但都没有超过标准课程，说明课程方向不是对称的。主分布与 M80 在部分设置下 Macro-F1 与 UAR 各有起伏，也说明合并比例需要在捕捉次情绪与过度平滑之间权衡，0.8 比 0.2 更分散但不一定在所有划分上都赢。若只汇报最优的一行，会掩盖这种条件依赖。

### 边界与反证：哪些结论不能从当前证据推出？

首先，熵来自少数标注者的投票，是模糊的代理信号，不是感知不确定度的真值。类别相关的熵基线不同，Test2 高熵更多，因此跨划分比较时不能把熵效应与领域偏移完全分开。

其次，分布拟合改善不等于每个类别都变好，也不等于延迟、误判成本或部署收益改善。论文未测量推理开销、帧率与实际延迟，训练只报告 A30 与轮数预算，没有给出可比的耗时曲线，因此不能承诺分布训练更便宜或更快。

再次，评价仍依赖硬多数票做 Macro-F1，高熵区的低分存在评价错配。UMAP 显示的过渡结构与类别关系是定性佐证，不能替代统计检验。最后，合并比例只试了 0.9 比 0.1 与 0.8 比 0.2，课程分位数与解冻时刻是固定 schedule，没有搜索最优，也没有 oracle 事后最优可比，因此最优行应读成在给定 schedule 下可运行策略的表现，而非全局上界。

### 复现先做什么：按什么顺序对齐才能重放关键对比？

复现的第一步是对齐数据口径。按官方说话人无关划分取训练、开发、Test1、Test2，不合并类别，不丢弃次标签。把次标签映射到同一 9 类空间，再构造主分布与两种合并分布，熵用合并分布算 1 次并冻结，保证硬系统与分布系统对同一语音共享同一熵值。

第二步是对齐模型与优化。用 WavLM-Base 初始化，按第 1、2、4、8 轮解冻 2、4、8、12 层，骨干与任务头分别设 1×10−5 与 1×10−4，NewBob 阈值 0.0025、退火 0.9，批量 32、至多 18 轮，按开发集 Macro-F1 耐心 4 早停，固定随机种子。多任务权重取类别 1.0、维度 0.3，CCC 正则 0.1，课程只缩放或筛选类别分支。

第三步是跑全对照而非只跑最优。至少包括硬交叉熵、硬类别平衡、主分布 KL、M80 KL、M90 KL、M90 加权 KL，再加标准过滤、反向过滤、标准加权、反向加权。评价同时输出 Macro-F1、UAR、JSD、KLD 与 VAD 的 CCC，并按熵分低中高三箱输出 Macro-F1。需要补的验证是报告自助置信区间、Other 类分项 F1 与嵌入可视化的随机种子稳定性，以及在 Test2 上的重复性，避免把单次最优当成稳定增益。

### 何时值得尝试分布监督：一句话的取舍指南是什么？

当你的语音情感数据有多人标注且分歧明显，又希望模型输出能反映人类投票比例而非只猜一个多数票时，值得尝试把主票归一化为分布，并用小权重掺入次票，再用 KL 散度训练，同时保留硬指标做对照。预期收益是 JSD/KLD 下降与中熵区硬判决更稳，预期代价是 Other 类 F1 会大幅下降，聚合 Macro-F1 可能看不出大胜。

如果任务必须输出唯一硬标签且 Other 是业务上的合法拒识类，就不要照搬本文的解读，需要另设拒识阈值或代价矩阵，否则分布方法摊开概率的行为会被误判为变差。如果数据本身标注者很少或次标签缺失，合并分布与熵调度的效果待验证，应先做小规模消融。

回到中心矛盾：硬标签方便评价，分布更忠实于听众分歧。本文的证据支持向前者之外补上后者，用双轨评价与熵分层去理解模糊，而不是用单 1 Macro-F1 裁决一切。这也是研究生可直接复述的方法结论。

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。
- 评分规则：type-aware-v1
- 评分模型：muse-spark-1.3-contributor
- 评分请求协议：openai_responses

---

[← 返回 interspeech-2026 论文汇总](/posts/conference-interspeech-2026/)
