---
title: "HiPAD: A Unified Gait, Audio-Visual, and Personality Fusion Network for Depression Detection, with a Hierarchical Personality Ablation and the Calibration Limits of Domain-Adapted LLMs"
date: 2026-10-15
draft: false
tags: [病理语音评估, 多模态学习, 精神健康筛查, 大语言模型]
categories: [论文速递]
description: "论文用同一 BiLSTM 融合结构参加六个步态与音视频抑郁检测子赛道，发现约 150 词的人格描述带来约 0.5 的赛道分提升，而领域微调大模型虽提高二分类一致性却破坏 PHQ-9 回归校准，在每队列不足百人时小容量加深集成更稳妥。"
hiddenInHomeList: true
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_arxiv_id: "2610.14961"
paper_digest_workbench_contract: "researcher-workbench-v1"
paper_digest_reader_title: "HiPAD：用同一融合网络看清人格描述在抑郁检测中的分量"
paper_digest_original_title: "HiPAD: A Unified Gait, Audio-Visual, and Personality Fusion Network for Depression Detection, with a Hierarchical Personality Ablation and the Calibration Limits of Domain-Adapted LLMs"
paper_digest_arxiv_version: 1
paper_digest_arxiv_versioned_id: "2610.14961v1"
paper_digest_arxiv_abs_url: "https://arxiv.org/abs/2610.14961v1"
paper_digest_arxiv_pdf_url: "https://arxiv.org/pdf/2610.14961v1.pdf"
paper_digest_primary_task: "病理语音评估"
paper_digest_tags_contract: "paper-tag-flat-tags-v2"
paper_digest_tags_selection_contract: "paper-tag-selection-v2"
paper_digest_tags_registry_version: "paper-tag-catalog-v2"
paper_digest_tags_registry_sha256: "0a0847314ab2059d95efac33376414498e598a1f02a1486869bee0efc481d1f7"
paper_digest_tags_concepts: [{"facet":"task","id":"task.pathological-speech","label":"病理语音评估"},{"facet":"method","id":"method.multimodal-learning","label":"多模态学习"},{"facet":"application","id":"application.mental-health","label":"精神健康筛查"},{"facet":"model_family","id":"model_family.llm","label":"大语言模型"}]
paper_digest_primary_method: "多模态学习"
paper_digest_score: 5.6
paper_digest_rank_bucket: "前50%"
paper_digest_document_type: "系统技术报告"
paper_digest_one_sentence: "论文用同一 BiLSTM 融合结构参加六个步态与音视频抑郁检测子赛道，发现约 150 词的人格描述带来约 0.5 的赛道分提升，而领域微调大模型虽提高二分类一致性却破坏 PHQ-9 回归校准，在每队列不足百人时小容量加深集成更稳妥。"
paper_digest_authors: [{"affiliations":["Kozminski University, Warsaw, Poland","WarsawIQ, Warsaw, Poland"],"name":"Karol Chlasta"},{"affiliations":["WarsawIQ, Warsaw, Poland"],"name":"Piotr Struzik"}]
paper_digest_abstract_sha256: "2a5b34205b6c1c552a1904ad15b9be87fe09789896728791267dab9add884a06"
paper_digest_sidecars: {"citation.bib":{"sha256":"57c430d9c8a4f2b032cc0466b38f710affc174fe02172233a9aad3a338a5fcf1","url":"/audio-paper-digest-blog/data/papers/2026-10-15/2610-14961/citation.bib"},"citation.json":{"sha256":"f68485efb91bf745dcbc0c338fc9d1733635549cdaf01a03ddc3f37b0eab4d2e","url":"/audio-paper-digest-blog/data/papers/2026-10-15/2610-14961/citation.json"},"citation.ris":{"sha256":"51b40f7766dde86b522c91a9265e49a1f53598476ffa6912343fdb9f1d8c8d07","url":"/audio-paper-digest-blog/data/papers/2026-10-15/2610-14961/citation.ris"},"rethink-context.json":{"contract":"paper-research-context-v2","sha256":"ec1be513795fb56648848252cb71d405215229d3c06916b959e352b4bec1b1cf","url":"/audio-paper-digest-blog/data/papers/2026-10-15/2610-14961/rethink-context.json"}}
paper_digest_api_reader_contract: "beginner-researcher-v3"
paper_digest_api_reader_article_sha256: "ce5f36bbf2765fe3810a8c71d76cc10fec54856934ab6d2d78eefe5844667eb0"
paper_digest_api_reader_plan_sha256: "63a19747577d62e49876bcc268cbfeafa654206c458dc5b531cde54bdc1d4426"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings-v4"
paper_digest_api_reader_source_bindings_sha256: "391e626129c6ade564395e94000957b18d64e32437458cd6710cfcce498293e3"
paper_digest_api_reader_source_table_count: 4
paper_digest_api_reader_source_formula_count: 1
paper_digest_api_reader_structured_artifacts_sha256: "441d5a15087cee662cf4dd70037d8759acbf3786d97fb5496a19414e35132828"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity-v1"
paper_digest_api_reader_author_identity_sha256: "ce0bda24d2134d38a10c9166b3325c23997b84509929ecdeff19417efbe10114"
paper_digest_api_reader_author_count: 2
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity-v1"
paper_digest_api_reader_resource_identity_sha256: "fde569ddf496c7e2c2c232694e28fb0425bc445bf24d00cc638d6edbe5c327ec"
paper_digest_api_reader_resource_count: 0
paper_digest_api_reader_figure_persistence: "ephemeral-no-persisted-figure-assets-v1"
paper_digest_api_reader_decision_projection: "api-reader-decision-projection-v2"
---

# 📄 HiPAD：用同一融合网络看清人格描述在抑郁检测中的分量

> 英文题目：*[HiPAD: A Unified Gait, Audio-Visual, and Personality Fusion Network for Depression Detection, with a Hierarchical Personality Ablation and the Calibration Limits of Domain-Adapted LLMs](https://arxiv.org/abs/2610.14961v1)*

> 标签：#病理语音评估 | #多模态学习 | #精神健康筛查 | #大语言模型
>
> 评分：**5.6/10** | 创新 1.2/2 | 技术严谨 1/1.5 | 实验充分 1/1.5 | 清晰度 0.7/1 | 影响力 0.4/1.5 | 开源 0/1.5 | 可复现 0.3/0.5 | 工程/实践 1/1.5


## 👥 作者与机构

- Karol Chlasta：Kozminski University, Warsaw, Poland；WarsawIQ, Warsaw, Poland
- Piotr Struzik：WarsawIQ, Warsaw, Poland

## 📌 核心摘要

MPDD-AVG 2026要求在老年组和青年组上按步态惯性信号、访谈音视频及约150词人格描述判断抑郁状态、严重程度和PHQ-9分数，每组训练不足百人而模态多，强模态易掩盖弱模态。HiPAD对可用步态、音频、视频各用两层双向长短期记忆网络编码并做时间注意力池化，音视频先在至多4个访谈段内再做一次学习式段间池化，缺失模态补零。仅当步态、音频、视频中至少存在两个时才做跨模态注意力，人格流将文本嵌入与Big Five等结构特征经多层感知机编码后绕过注意力直接拼接，再进入分类与回归头，同一宽度h=128配置覆盖6个子赛道中5个。在官方CodaBench排行榜老年步态加人格赛道上，任务特定混合集成将Track-Level Score（赛道分，分类F1、一致性相关系数与Kappa的平均）从0.632提高到0.647。在官方CodaBench排行榜步态加人格赛道上，去掉全部人格派生特征后Track-Level Score下降0.499至0.507并回到随机水平。在官方CodaBench排行榜老年步态加人格赛道上，领域适应的大模型编码器相对冻结RoBERTa-large将二分类Cohen's Kappa提高0.13，却因PHQ-9回归输出失准拉低总分。在固定HiPAD结构下官方CodaBench老年音频视频加步态加人格赛道上，手工eGeMAPS的Track-Level Score为0.477，高于wav2vec2的0.459。结论只适用于该中文小样本挑战数据，原文未披露训练时长、推理或部署成本。

## 🔗 开源与复现资源

本次未形成可展示的已核验资源记录，开放状态尚未核实。

可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 抑郁自动评估为什么要同时看特质和状态

论文面对的是基于行为信号的抑郁程度估计。输入按子赛道组合，包括惯性传感器记录的步态、访谈录音与录像、以及一段约 150 词的人格描述文本，后者还附带大五分数、人口学与老年疾病类等结构化信息。输出对每名被试同时给出三样东西：PHQ-9 是否达到 10 分的二分类、按小于 5、5 到 10、大于等于 10 划分的三分类、以及 0 到 27 分的连续 PHQ-9 分数。必须保留的信息很明确：既要有稳定的特质风险，例如神经质与尽责性，也要有当下的精神运动与言语表情状态。

评价把分类与回归绑在一起，赛道分是宏 F1、CCC 与 kappa 的平均，跨赛道总分是 6 个子赛道的平均。这种设计使得只把分类做对是不够的，连续分数的尺度是否准确同样决定总分。

读者需要先建立一个直觉：人格描述讲的是这个人平时是谁，音频视频步态讲的是这段访谈里表现如何。前者稳定而信息密集，后者在小样本下噪声大。本文后面所有关于融合方式、消融与校准的讨论，都是围绕强弱信号如何共存展开的。

### 已有路线在哪里留下了可比性缺口

抑郁检测长期沿着音频、视频、文本转写与步态各自推进，访谈多用半结构化流程，PHQ-9 是常用严重度量，小序列行为数据上带注意力池化的 BiLSTM 仍有竞争力。MPDD 系列的特殊之处是把人格自由文本作为显式模态加入，背景是高神经质低尽责性与抑郁风险的关联。先前的 P3HF 与 Fosafer 已经意识到人格重要，但它们的基线属于软消融，也就是拿掉文本却保留数值型大五分数，因此量到的人格增量偏小。

另一条线是大模型做临床文本与 LoRA 在 DAIC-WOZ 等小数据上做领域适配，已知微调可能在任务指标变好的同时损害校准，且跨库适配可能学到一般性痛苦而非抑郁特异标记。音频视频特征方面，eGeMAPS 与 OpenFace 动作单元带有抑郁文献中的具体生物标记含义，而 wav2vec2 与 DenseNet 这类通用深度表示缺少这种先验。本文的比较正是卡在相同输入、相同任务与相同运行阶段上：统一结构下比较人格有无、比较编码器、比较声学特征，而不是把不同模型类得到的不同数字直接对比。

### 六个子赛道到底在比什么

挑战赛把老年组与青年组分开，老年训练 87 人测试 23 人，青年训练 88 人测试 22 人。模态组合有 3 种：步态加人格、音视频加人格、音视频步态全加人格，每种都含人格与转写向量。老年描述多一个疾病类，青年没有。两组训练集 PHQ-9 均值接近，青年 4.8 老年 4.5，重度人数 10 对 11，但青年标准差更小，轻度区间人数几乎是老年的 2 倍，分数挤在三分类边界附近。这意味着同样的预测误差在青年组更容易造成跨阈值错误。

访谈音频是中文，用 Whisper large-v3 转写后再用中文 RoBERTa 编码并按被试的 3 到 4 次访谈平均，得到转写向量。论文特别说明转写向量在所有子赛道都进入人格支路，子赛道的命名只是研究侧重而非准入规则。理解这一点很重要，否则会误把人格增量当成转写带来的假象，而消融设计让转写在两侧都存在，从而把增量干净地归因于人格。

### 同一套网络如何覆盖全部子赛道

HiPAD 的核心选择是结构完全固定，只靠模态清单实例化。每个非人格模态各自走两层双向 LSTM 加时间注意力与层归一化，得到等宽向量。音频视频先按最多 4 个访谈段各自编码，再经第二层可学习的 softmax 段间池化合并，缺段则补零加掩码。当存在两个以上非人格模态时，有序对之间做残差单头缩放点积注意力，顺序固定为步态、音频、视频且未调优；只有一个非人格模态的步态赛道则不做跨模态注意力。

人格支路始终绕过注意力，只在最后拼接。分类头是三层 MLP，二分类与三分类分开训练再集成，需要时并联两层 MLP 做 PHQ-9 回归。模型宽度取 128，双向输出每方向 64，融合宽度等于宽度乘以模态数。5 到 6 个子赛道共用这一容量，使得赛道间差异反映数据而非结构。

下图是全文理解融合分工的总览，先看主路径再看人格旁路的位置。

> **看图路径：** 1. 先从底部三个输入框沿箭头向上看各自编码与汇合位置；2. 注意虚线框标注只有不少于两个非人格模态才做注意力；3. 对比右侧人格分支直接连到拼接层而不进入虚线框；4. 看顶部两个输出头分别对应分类与 PHQ-9 回归

[![原论文 Figure 1.：HiPAD pipeline. Gait, audio, and video pass through cross-modal attention only when at least two…](https://arxiv.org/html/2610.14961v1/fig_architecture.svg)](https://arxiv.org/html/2610.14961v1/fig_architecture.svg)

*论文图 1。原论文 Figure 1.：“HiPAD pipeline. Gait, audio, and video pass through cross-modal attention only when at least two are present; personality always bypasses attention and joins at concatenation.”。*

图中底部是步态、音频、视频与人格加结构加转写的输入，中间是各自编码与段间池化，虚线框是条件触发的跨模态注意力，顶部是拼接后的分类与回归头。关键细节是缺失模态补零、人格向量记为 zp 且维度同样为 128、注意力只更新非人格向量。这种不对称融合是作者在小样本验证上试出来的：让占优的人格信号去注意微弱的音视频反而损害验证性能，因此干脆只拼接。

### 时序编码与条件注意力具体做了什么

对步态、音频、视频，每个时刻的原始帧先线性投影到模型宽度，再进两层 BiLSTM，时间注意力对每个时刻给一个标量权重并经 softmax 归一化，加权求和后层归一化即为该模态向量。音频视频的段间池化是同样的思想，只是对象从时刻变成访谈段。跨模态更新是残差形式，用查询、键、值矩阵做缩放点积，注意力权重作用于对方模态的值向量后再加回自身。由于向量已经是池化后的单个向量，这一步更像模态间的门控修正而非时序对齐。

论文没有调访问顺序，也没有报告拿掉注意力或段间池化的对照，因此这部分只能按实现原样复述，不能推断其增量。代价方面，注意力矩阵都是 128 乘 128，参数量不大，真正的容量压力来自拼接后融合宽度的扩大与人格嵌入维度，后文会看到加模态反而降分就与此有关。

**步态 × 音频 × 视频：** 步态指 IMU 惯性序列反映的行走节律与不对称，音频指访谈语音的韵律与频谱，视频指 OpenFace 动作单元与头眼姿态；三者都是随时间变化的非人格模态，各自先经共享 BiLSTM 加时间注意力压缩为等宽向量，只有当同一子赛道出现两个以上时才做两两残差注意力，目的是在小样本下只让弱信号之间交换上下文而不去干扰强信号。

### 人格支路如何把文本分数和转写拼在一起

人格支路的输入是三块拼接：人格文本嵌入、经小 MLP 投影的 18 维结构向量、经小 MLP 投影的转写向量，再过三层 MLP 加一条从拼接输入到输出的残差线性映射，最后层归一化得到同样 128 维的人格向量。公式中 x 是三块拼接，MLP3 是主体，Wres 把不同维度的拼接映射回 128 维以便相加。文本嵌入默认是冻结的 RoBERTa-large 的 CLS 向量 1024 维，结构向量包含大五、年龄性别、经济压力、家庭人数与老年疾病类独热。转写向量 768 维来自中文 RoBERTa 对访谈文本的编码。这种设计把强信号内部先充分混合，再以等宽身份与其他模态拼接，避免在注意力中被稀释。

\[\mathbf{z}_{p}=\mathrm{LN}\big(\mathrm{MLP}_{3}(\mathbf{x})+W_{\text{res}}\mathbf{x}\big),\quad\mathbf{x}=[\mathbf{e}_{p};\,\mathrm{MLP}_{s}(\mathbf{s});\,\mathrm{MLP}_{t}(\mathbf{t})],\]

上式就是人格编码的计算目标：先把异构信息拼成 x，再用深 MLP 提炼并保留原始拼接的直接通路。原文没有给出 MLP 每层宽度与激活的完整细节，复现时只能按 released 代码与支持材料补齐，不能从名称猜测。需要强调的是，转写虽然语义上来自音视频访谈，但在实现上被划入人格支路，因此步态赛道实际也含有访谈语言信息。

**人格描述 × 结构化特征 × 文本嵌入：** 人格描述是挑战赛提供的约 150 词英文文本，连同大五分数、年龄性别与老年疾病类构成人格模态；结构化特征是把其中可解析部分变成 18 维向量，文本嵌入是用 RoBERTa-large 取 CLS 得到的 1024 维语义向量，二者再与访谈转写向量拼接后经残差 MLP 压缩，组合后既保留可解释的分数也保留自由文本的细微表述。

### 多任务损失集成与解码如何设置

每个任务头单独训练。二分类与三分类用焦点损失加标签平滑，三分类额外加有序期望秩惩罚，回归头启用时加对数归一化分数上的均方误差，权重分别为 0.5 与 0.3。优化用 AdamW，批量 8，最多 120 轮，按验证宏 F1 早停，步态与音视频的学习率与权重衰减不同，并用 MixUp 增强。交叉验证主实验为 4 折，集成深度研究用 8 折，每折 6 个种子并按验证 kappa 选前 5 个检查点集成。特征按训练划分做 z 分数归一化。

三分类解码在步态赛道分队列处理：老年直接取三分类头 argmax，青年则对模型自身的回归输出按 5.0 与 7.0 切分，且阈值作用于预测值而非标签，是按该队列分数分布调的。论文没有报告单模型与集成的完整对照数值，也没有给出注意力与残差编码器等模块消融，因此训练部分的结论只限于超参数与集成策略本身，不能外推为结构优劣。

### 分数指标与可比性条件是什么

官方赛道分是分类宏 F1、CCC 与 kappa 三者平均，其中宏 F1 与 kappa 各自先在二分类与三分类上平均，CCC 是 PHQ-9 的一致性相关系数。表格还额外报告三分类 kappa 作为对不均衡严重度更敏感的诊断。跨赛道总分是 6 个赛道分的平均。所有人格层级与音频特征比较都强调固定结构，只有编码器或特征不同；提交编号与检查点映射在支持材料中给出。

需要小心的可比性陷阱是老年音视频赛道的最优提交来自另一条非 HiPAD 流水线，它用了文本可靠性门控与人格条件交叉注意力，没有 k 折验证且只发布预测值，因此不能用来论证 HiPAD 或音频特征。统一 HiPAD 总分用的是该赛道 HiPAD 自身的 0.397，而非 0.484。最终排名以组织者可复现的终榜为准，青年 3 条赛道第二，老年未进前三，表中的名次只是截止时的中期 standing。

**Track-Level Score × Cohen kappa × CCC：** Track-Level Score 是官方赛道分，等于二分类与三分类各自平均后的宏 F1、PHQ-9 一致性相关系数 CCC、二分类与三分类平均后的 Cohen kappa 三者再平均；Cohen kappa 衡量扣除偶然一致后的分类一致性，CCC 衡量连续 PHQ-9 预测与真值的趋势与绝对偏差一致性，三者平均后分类好但回归失准仍会被拉低，这正是后文校准分析的关键。

### 六个赛道的总体分数呈现什么格局

下表比较 6 个子赛道的赛道分与分量指标，公平条件是除特别标注行外均为同一 HiPAD 结构，指标方向都是越高越好，G-Score 为六赛道平均。

| Sub-track | TLS | Bin κ | Ter κ‡ | CCC | Rank† |
| --- | --- | --- | --- | --- | --- |
| Elder G+P (16079) | 0.647 | 0.572 | 0.677 | 0.549 | #7/31 |
| Young G+P (16035) | 0.578 | 0.636 | 0.405 | 0.527 | #2 |
| Elder A-V+P (16078) | 0.397 | — | — | — | — |
| Elder A-V-G+P (16077) | 0.477 | 0.330 | 0.319 | 0.504 | #14/47 |
| Young A-V-G+P (16034) | 0.397 | 0.455 | 0.103 | 0.338 | #2 |
| Young A-V+P (16033) | 0.396 | 0.364 | 0.272 | 0.300 | #2 |
| Elder A-V+P, non-HiPAD§ | 0.484 | 0.439 | 0.434 | 0.374 | #10/34 |
| G-Score (unified HiPAD) | 0.482 |  |  |  |  |
| G-Score (best submitted§) | 0.496 |  |  |  |  |

表中步态加人格明显高于音视频相关赛道，老年步态 0.647、青年步态 0.578，而音视频与全模态在 0.396 到 0.477 之间，统一 HiPAD 总分 0.482，含非 HiPAD 最优提交的总分 0.496。结果支持的判断是人格描述的贡献压过了音频视频步态之和：仅步态加人格就超过所有加入音视频的配置。但限制同样清楚：每队列测试仅 22 到 23 人，几个误分类就能改变名次；老年音视频的 HiPAD 行只有总分而无分量，无法做细粒度诊断；非 HiPAD 行必须排除在跨赛道比较之外。

### 拿掉人格后模型还剩多少能力

下表是人格描述模态的真消融，基线去掉一切人格派生特征，只留步态加转写，对比加入结构特征加 RoBERTa-large 的配置，条件是相同结构与相同折数种子，分数来自官方排行榜。读表前先明确：转写两侧都有，因此增量不是转写假象，比较问题是人格描述模态带来多少赛道分增量。

| Level | Features | Elder | Young | ΔE | ΔY |
| --- | --- | --- | --- | --- | --- |
| L0 | Gait+transcript, no personality | 0.099 | 0.113 | — | — |
| L2 | +struct + RoBERTa-large (k=4) | 0.632 | 0.578 | +0.533 | +0.465 |
| final | +task-specific ensemble | 0.647 | 0.578 | +0.548 | +0.465 |

表中老年从 0.099 升到 0.632，青年从 0.113 升到 0.578，最终集成老年再到 0.647。协议对齐层级平均增量为 0.499，含最终集成为 0.507。无人格时两队列二分类 kappa 均为 0.00，模型退到多数类，说明在此容量与样本量下步态加转写没有恢复出严重度信号。论文进一步在验证集拆分结构与文本：仅 18 维结构已在验证上达到老年二分类 kappa 约 0.67、青年约 0.53，加入 RoBERTa 文本后青年大幅改善而老年验证上相当，但验证显著高估泛化，不能直接当成测试结论。

与先前软消融相比，这里的增量大有两个结构原因：基线去掉了大五分数且步态基线更弱，指标与消融定义也不同，不可直接换算。该比较的限制是排行榜关闭前未能对纯结构配置打分，因此结构与文本的拆分只在验证集完成。

下图把同样的真消融画成柱状，左侧浅柱是无人格基线接近零，右侧深柱是加入人格后的赛道分，便于直观记住老年和青年两个队列的效应量级和差异。

> **看图路径：** 1. 对比每组左侧浅色柱与右侧深色柱的高度差；2. 注意纵轴是赛道分而非准确率；3. 记住转写向量在两侧都存在故增量只归因于人格

[![原论文 Figure 4.：Track-Level Score with and without personality (true ablation), Elder and Young G+P.](https://arxiv.org/html/2610.14961v1/fig_personality_gain.svg)](https://arxiv.org/html/2610.14961v1/fig_personality_gain.svg)

*论文图 4。原论文 Figure 4.：“Track-Level Score with and without personality (true ablation), Elder and Young G+P.”。*

图中外侧两组柱子分别对应老年步态加人格和青年步态加人格，老年从 0.099 升到 0.647、增量 0.548，青年从 0.113 升到 0.578、增量 0.465，深色人格柱都接近 0.6 而浅色基线柱接近零。限制是老年描述含疾病类这一直接临床相关变量，因此人格增量中包含人口学与疾病信息，不能把全部增量都解读为人格特质本身，论文对此有明确提醒。

**LoRA 微调 × 冻结编码器 × 校准失配：** LoRA 微调指只训练低秩旁路来适配 7B 或 72B 大模型，冻结编码器指 RoBERTa-large 参数完全不动只取现成表示；校准失配指微调后二分类变好但连续 PHQ-9 预测区间被拉宽，导致 CCC 下降并使固定阈值切出的三分类出错，说明判别能力与回归输出的尺度准确性是两回事。

### 领域微调大模型为什么分类变好总分反而下降

编码器比较固定在老年步态排行榜上，RoBERTa-large、LoRA 7B、QLoRA 72B、混合头与 e5-mistral 等并列，指标仍是越高越好。LoRA 7B 二分类 kappa 达到 0.776，比 RoBERTa-large 高约 0.13，但赛道分从 0.632 降到 0.582；混合头用 LoRA 做二分类加 BERT 做三分类后回到 0.624，72B 混合达到 0.631，而 72B 全量与 e5-mistral 更低。机制是回归校准：LoRA 在 PHQ 回归上微调后验证预测区间拉宽到 0.67 到 9.78，而 RoBERTa-large 只在 2.0 到 5.0 之间，过宽的连续输出直接压低 CCC 并使固定的 5.0 与 7.0 三分类阈值失灵。混合实验把三分类质量恢复后总分回升而二分类不变，从而把损伤定位到回归输出。

青年组伤害更大，三分类 kappa 从 0.405 掉到 0.177，与青年分数压缩在边界附近有关。对实践的含义是领域适配后必须做 PHQ-9 重校准，例如等渗回归或 Platt scaling，否则不能直接用于赛道分优化的系统。未评测的范围是校准后的 LoRA 是否反超，论文没有给出该实验。

下图是二分类 kappa 与总分的散点，横轴向右越好而纵轴向上越好，两者不一致即为 dissociation。

> **看图路径：** 1. 横轴向右为二分类 kappa 变好，纵轴向上为总分变好；2. 找到左下角孤立的 1 号点即无人格基线；3. 观察右上方高 kappa 但纵轴不高的点即校准失配

[![原论文 Figure 5.：Binary \\kappa vs. TLS for all Elder G+P personality encoders (Table 4, main paper): 1 None (L0),…](https://arxiv.org/html/2610.14961v1/fig_calibration_scatter.svg)](https://arxiv.org/html/2610.14961v1/fig_calibration_scatter.svg)

*论文图 5。原论文 Figure 5.：“Binary \kappa vs. TLS for all Elder G+P personality encoders (Table 4, main paper): 1 None (L0), 2 RoBERTa-large (L2), 3 LoRA 7B (L3a), 4 L3a bin+BERT ter, 5 QLoRA72B+BERT ter, 6…”。*

图中左下角 1 号点是无人格基线，中间菱形 2 号与 8 号总分最高但横轴位置差异很大，右下方 7 号点验证曾达 0.91 而排行榜只有 0.439，是典型过拟合。这张图不支持只看分类指标选模型的习惯。

**eGeMAPS × wav2vec2 × OpenFace 动作单元：** eGeMAPS 是 65 维手工声学特征集，覆盖基频范围、响度方差与抖动闪烁等已有抑郁生物标记，wav2vec2 是 768 维自监督语音表示，没有临床先验，OpenFace 动作单元把面部肌肉活动映射到情感平淡与精神运动迟滞等症状；在不足百人时前者与后者因维度小且与症状直接相关而更不易过拟合。

### 同样结构下手工特征为何赢过深度表示

下表比较固定 HiPAD 结构下 wav2vec2 与 eGeMAPS 的赛道分，问题是音频表示本身是否有差异，公平条件要求同一模型类，指标越高越好。

| Sub-track | Cohort | wav2vec2 | eGeMAPS | Winner |
| --- | --- | --- | --- | --- |
| A-V+P (16078) | Elder | — | 0.397 | — |
| A-V-G+P (16077) | Elder | 0.459 | 0.477 | eGeMAPS |
| A-V+P (16033) | Young | 0.336 | 0.396 | eGeMAPS |
| A-V-G+P (16034) | Young | 0.386 | 0.397 | eGeMAPS |
| A-V+P (16078), non-HiPAD§ | Elder | 0.484 | — | — |

表中 3 个可比的同结构对照全部由 eGeMAPS 获胜，老年全模态 0.477 对 0.459，青年音视频 0.396 对 0.336，青年全模态 0.397 对 0.386；老年音视频的 wav2vec2 栏为空，而 0.484 的 wav2vec2 数字属于非 HiPAD 流水线，不能用来论证表示优劣。开发中 DenseNet 视频特征同样输给 OpenFace 动作单元而未提交。解释是小样本下 65 维手工特征与 710 维动作单元带有抑郁先验且维度可控，而 768 维自监督表示与 4096 维以上大嵌入更容易记住验证划分。

反例是老年语音的震颤气息等发音细节可能恰是 eGeMAPS 统计量概括不足的部分，论文把该假设列为未验证，需要同结构老年音视频重训才能回答。容量分析也一致：隐宽从 128 加到 256 在验证持平或略好但排行榜全部回落，e5-mistral 验证很高而提交最低，加模态使全模态低于纯步态，都是在不足 100 人时扩大容量而信号未同步增加。唯一增加而不加参数的手段是加深集成，青年 4 折到 8 折加 0.021，老年混合任务头再加 0.015，但混合跨两次交叉验证挑检查点，对复现方差更敏感。

| Sub-track | Gait | Audio | Video | Personality | Transcript |
| --- | --- | --- | --- | --- | --- |
| G+P | ✓ | — | — | ✓ | ✓ |
| A-V+P | — | ✓ | ✓ | ✓ | ✓ |
| A-V-G+P | ✓ | ✓ | ✓ | ✓ | ✓ |

上表是各子赛道的输入矩阵，说明转写在所有赛道都存在而缺失模态补零，有助于复现时对齐特征开关。老年与青年的差异还体现在严重度分级而非检出：青年二分类 kappa 在步态上最优，但三分类远低于老年，与青年分数压缩在阈值附近一致；加步态对老年全模态带来 0.08 提升而对青年几乎为零，也指向精神运动通道在老年更有效。

### 这些结论在什么条件下才成立

样本量是首要边界。每队列训练 87 到 88 人、测试 22 到 23 人，迫使隐宽 128 与不超过 1024 维嵌入，交叉验证噪声大，不报告置信区间与显著性检验。注意力、段间池化、残差人格编码器、单模型与集成的受控模块消融仍是未来工作，因此不能说这些模块各自贡献多少。统一结构的主张只覆盖 6 个子赛道中的 5 个，第 6 个老年音视频最优提交是不可重训的预测值。临床人群完全是中文访谈加英文人格描述，跨语言与跨人群泛化未经检验。

每次提交只暴露总分，限制了事后误差分析。伦理上系统只能作为筛查支持以优先分配临床注意，不能作为独立诊断，部署需要知情同意、医生监督、偏倚审计与更大队列验证。把缺证据说成技术缺陷是不对的，例如来源未确认只说明链接状态，不能用来否定方法。

### 复现第一步要对齐哪些信息条件

先按子赛道打开特征开关并确认转写始终进入人格支路，缺失模态补零且音频视频缺段时用掩码。音频按 eGeMAPS 65 维或 wav2vec2 768 维、视频按 OpenFace 710 维、步态按 IMU 加步幅步频不对称、人格按 RoBERTa-large 1024 维加 18 维结构准备，训练划分内做 z 分数归一化。训练用论文给出的焦点损失、有序惩罚与回归权重、AdamW 学习率与权重衰减、MixUp 与早停 patience 30、4 折 6 种子选前 5 检查点集成，青年步态三分类用回归输出 5.0 与 7.0 切分。5 个子赛道有可重训检查点与配置、训练脚本与步态一键推理脚本，编码器消融可从 released 嵌入重训。

老年音视频的 0.484 只有预测值，无法在同一协议下重训对照。硬件涉及 AMD 890M、RTX 3090 与仅用于 72B QLoRA 的 A100，随机种子与提交编号在支持材料中列出。值得尝试的时机是手头也是小临床队列且有人格或人口学文本时，优先用冻结中等编码器加深集成；若要用领域微调大模型，务必先留出校准集做 PHQ-9 重校准。还需要补的验证是模块消融、校准后重比、非中文人群与按分量报告的误差分析。

### 读完可以带走的三句话

第一，人格描述是本文信息量最大的模态，真消融下平均带来约 0.5 的赛道分，没有它模型在步态赛道回到机会水平，而仅步态加人格就超过所有加入音视频的配置，但增量含疾病类等临床相关变量，不能全归因于人格特质。第二，领域适配大模型提高了二分类一致性却因回归尺度失准拉低总分，混合头实验证明损伤在回归输出，冻结 RoBERTa-large 加深集成在当前样本量下更稳。

第三，固定结构下手工临床特征赢过通用深度特征，加宽、加维、加模态都因容量超过数据而在测试集回落，青年组分数压缩使三分类更难，进步更可能来自语言特征与更细的严重度标注而非继续改结构。这些判断都绑定在每队列不足 100 人、中文访谈、赛道分平均分类与回归的条件下，换条件需要重新验证。

<details>
<summary>📎 论文与评分元数据</summary>

排名：前50% | 文档类型：系统技术报告 | [arXiv 原文](https://arxiv.org/abs/2610.14961v1)

</details>

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。

- 评分规则：type-aware-v1

- 评分模型：muse-spark-1.3-contributor

- 评分请求协议：openai_responses

---

[← 返回 2026-10-15 语音/音乐/音频论文速递](/audio-paper-digest-blog/posts/2026-10-15/)
