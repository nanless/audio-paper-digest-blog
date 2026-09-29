---
title: "Whisper Hallucination Detection and Mitigation via Hidden Representation Steering and Sparse AutoEncoders"
date: 2026-09-25
draft: false
description: "论文把非语音幻觉当作编码器表示中线性可分的方向来检测，用原始激活转向和稀疏自编码器潜变量加性转向做免微调干预，最强证据是完整非语音测试集上 small 从 72.63% 降到 14.11%、large-v3 从 86.88% 降到 27.33%，代价是中文 CER 明显上升和语音 WER 小幅波动。"
tags: ["自监督学习", "可解释性", "环境声", "语音", "语音识别"]
categories: ["interspeech-2026 论文"]
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_paper_id: "conference:interspeech:2026:conference-paper-id:aparin26_interspeech"
paper_digest_source_kind: conference
paper_digest_conference_id: "interspeech-2026"
paper_digest_conference_record_url: "https://www.isca-archive.org/interspeech_2026/aparin26_interspeech.html"
paper_digest_conference_pdf_url: "https://www.isca-archive.org/interspeech_2026/aparin26_interspeech.pdf"
paper_digest_api_reader_contract: "beginner-researcher-v3"
paper_digest_api_reader_article_sha256: "85828efb0f90e735b586fdd76e762284736c0d9203e88b33cc8ee7c7cddff4b5"
paper_digest_api_reader_plan_sha256: "06de57d200e28c54ba4e874f5b465fe2172745bbac3ca6c5de41a3addd6f4475"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings-v4"
paper_digest_api_reader_source_bindings_sha256: "eb85adce8a1c7385afe4ff99f61c139b1c3dd9d006a2c90822c69d3e239f2cef"
paper_digest_api_reader_source_table_count: 2
paper_digest_api_reader_source_formula_count: 0
paper_digest_api_reader_structured_artifacts_sha256: "4962690cd2d99f2cba30a432459d9f86a7644264c6297cf89310639307e2a60b"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity-v1"
paper_digest_api_reader_author_identity_sha256: "49244a2cc2365002b0307160977702de8db30f8f1c01ffd2092b5eb06f9f9797"
paper_digest_api_reader_author_count: 4
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity-v1"
paper_digest_api_reader_resource_identity_sha256: "1ace2887b04b3742daf3e537513156906b80e231c1adce5cb9d8f2513c926ab9"
paper_digest_api_reader_resource_count: 0
paper_digest_api_reader_decision_projection: "api-reader-decision-projection-v2"
paper_digest_scoring_contract: "api-scoring-audit-v2"
paper_digest_taxonomy_contract: "paper-taxonomy-flat-tags-compat-v1"
paper_digest_taxonomy_selection_contract: "paper-taxonomy-selection-v1"
paper_digest_taxonomy_registry_version: "paper-taxonomy-v1"
paper_digest_taxonomy_registry_sha256: "15c82a567ce5a55dc1175684ed08b64c158558639d9c8fb822c9587ec32a8778"
paper_digest_taxonomy_concepts: [{"facet":"method","id":"method.self-supervised","label":"自监督学习"},{"facet":"research_focus","id":"research_focus.interpretability","label":"可解释性"},{"facet":"signal","id":"signal.environmental","label":"环境声"},{"facet":"signal","id":"signal.speech","label":"语音"},{"facet":"task","id":"task.asr","label":"语音识别"}]
paper_digest_primary_task: "语音识别"
paper_digest_primary_method: "自监督学习"
paper_digest_score: 6.6
paper_digest_rank_bucket: "前50%"
paper_digest_document_type: "方法研究"
paper_digest_conference_structure: pdf-visual-quote-evidence-v1
---

# 📄 幻觉不在解码器里开始：在编码器表示中检测并转向 Whisper 的非语音幻觉

> 英文题目：*Whisper Hallucination Detection and Mitigation via Hidden Representation Steering and Sparse AutoEncoders*

> 会议身份：`conference:interspeech:2026:conference-paper-id:aparin26_interspeech`



> 来源为官方会议 PDF；图片依据原页像素，表格数字依据原文引用。PDF 文字层不视为原始 TeX，未可靠恢复的结构不作推断。


> 会议来源：[官方记录](https://www.isca-archive.org/interspeech_2026/aparin26_interspeech.html) · [官方 PDF](https://www.isca-archive.org/interspeech_2026/aparin26_interspeech.pdf)

标签：#自监督学习 #可解释性 #环境声 #语音 #语音识别

评分：**6.6/10** | 创新 1.4/2 | 技术严谨 1.1/1.5 | 实验充分 1.2/1.5 | 清晰度 0.8/1 | 影响力 1.0/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 0.8/1.5

排名：前50% | 文档类型：方法研究

## 👥 作者与机构

- Georgii Aparin：机构信息未能从会议 PDF 纯文本可靠映射
- Vadim Popov：机构信息未能从会议 PDF 纯文本可靠映射
- Tasnima Sadekova：机构信息未能从会议 PDF 纯文本可靠映射
- Assel Yermekova：机构信息未能从会议 PDF 纯文本可靠映射

## 📌 核心摘要

Whisper在静音、噪声与音乐等非语音输入上仍输出流畅但无关的转写，基于平均对数概率与无语音概率阈值的过滤因高置信幻觉而失效。该工作从Whisper音频编码器残差流抽取经时序平均池化的层表示，先用逻辑回归验证幻觉可线性分离且判别力向深层增强。再以FULL非语音训练集估计非幻觉均值减幻觉均值的对比向量与SAE隐维度重要性，推理时对选定层残差流做激活加性平移，或对权重绝对值选出的少量SAE维度做校准加性偏移并经SAE解码器重构回注。与直接平移稠密激活相比，仅干预稀疏子集保留了其余编码表征，因而在抑制幻觉的同时更好地维持英语识别质量。在FULL非语音测试集下，SAE转向的Whisper large-v3的HR指标为27.33%，低于基线Whisper large-v3的HR指标86.88%。结论限于 LibriSpeech、FLEURS 英中文、AISHELL-1 语音侧监控与所列环境声非语音集，音乐与人声重叠过滤口径外推尚未验证。原文未披露训练、推理或部署成本。

## 🔗 开源与复现资源

本次未形成可展示的已核验资源记录，开放状态尚未核实。
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 输入是什么，输出是什么，为什么非语音会出问题？

这篇论文的输入是两类音频。第一类是非语音音频，包括噪声、城市环境声、背景音乐和各类声音事件，里面没有需要转写的语音内容。第二类是正常语音，包括英文朗读和中文朗读，用于检查干预之后识别能力是否还在。输出是 Whisper 给出的转写文本，以及模型在推理时附带的两个内部量：no speech prob 和 avg logprob。前者是模型对特殊符号表示无语音的概率，越高越倾向于判断没有语音。

后者是生成词元的平均对数概率，越高表示模型对自己生成的文本越自信。正常情况下，无语音输入应该被过滤掉，不产生有效转写。但论文要解决的矛盾是，Whisper 在 680000 小时弱监督数据上训练，训练对里可能把无意义音频配了任意文本，于是模型学会了看到噪声也自信地编出流畅句子。更麻烦的是，论文报告这类幻觉输出常常 avg logprob 偏高而 no speech prob 偏低，恰好能穿过 Whisper 自带的双阈值过滤器。也就是说，输入明明没有语音，输出却像真有说话一样，过滤器还拦不住。

研究生复述时要抓住这个链条：训练数据噪声导致虚假关联，推理时自信度误导过滤器，最终需要比阈值更深入的表示层干预。本文默认从原文独立写作，不引入外部评价，所有数字回到原文核对。当前没有可用资源状态声明，因此不声称代码模型数据已公开。

### 已有路线如何处理幻觉，本文站在哪条线上？

论文把已有做法分成 3 类。第一类是输入预处理，用非识别模型先清洗音频。第二类是文本后处理或对中间输出做修正。第 3 类是微调与幻觉有关的特定神经元。论文选择的是第四条更轻的路线：在推理时直接改内部表示，不改模型参数。

这条路线在语言模型里叫激活转向，已经用于控制情感、毒性、真实性，做法通常是拿两组对比样本的平均激活相减得到方向向量，再按系数加回去。近期还有在稀疏自编码器潜空间里转向的做法，认为稀疏维度更解耦，可以只动少数维度。与本文最接近的对照是 Calm-Whisper。它研究同一个问题，但位置在解码器。它先在 UrbanSound8K 上做注意力头屏蔽，找到少数导致幻觉的解码器头，再做两种处理：直接置零这些头，以及进一步微调。

论文明确说，Calm-Whisper 只评估了 Whisper large-v3。这为后文比较留下公平边界：编码器侧免微调方法，能否接近解码器侧微调方法。

**编码器干预 × 解码器干预：** 编码器干预分工是在解码开始前改变非语音输入的声学表示，使其远离幻觉易发区域，解码器干预以 Calm-Whisper 为代表分工是屏蔽或微调解码器中导致幻觉的注意力头；搭配对照的理由是判断幻觉只是生成阶段的语言模型惯性还是编码表示已经可分，组合意义是论文证明只动编码器也能接近微调解码器头的效果，说明幻觉信号在编码阶段已经存在。

### 论文把幻觉检测变成什么可计算问题？

论文没有去争论幻觉的哲学定义，而是沿用流畅且与输入完全无关的输出这一操作定义，并只研究其中最常见的一类：给非语音片段配上连贯转写。为了让检测可计算，论文先固定 Whisper 原生的过滤规则。设 p 为 no speech prob，l 为 avg logprob，阈值分别取 0.6 和负 1.0，这两个阈值与 Whisper 推理代码默认值一致。当 p 小于阈值或 l 大于阈值时，样本被判定为含有语音。检测率就是被判为有语音的样本比例。

对非语音数据，检测率越高说明幻觉越多，因此幻觉率等于检测率；对语音数据则相反，幻觉率等于一减检测率，表示真语音被错误抑制的比例。论文把被过滤器误判为有语音的非语音样本称为幻觉样本。这个定义非常关键，因为后文所有分类标签、转向向量、超参数搜索的优化目标都来自这条规则，而不是人工逐句判断转写是否离谱。举例来说，一个纯噪声片段如果模型给出高置信英文句子且 no speech prob 很低，它就会被标为 1，进入幻觉集合。

反之被正确过滤的非语音标为 0。

**幻觉 × 检测率：** 幻觉指对非语音输入给出流畅但与输入无关的转写，检测率是论文用 no speech prob 和 avg logprob 两个阈值判断样本是否被当作有语音的规则；幻觉负责定义要解决的错误类型，检测率负责把这个定义变成可计算的标签和幻觉率 HR，二者组合才让后续分类和转向都有监督信号。

### 整体方法分几步，一个样本走完全流程是什么样？

全流程可以沿一个非语音样本走一遍。第一步，音频进入 Whisper 音频编码器，逐层产生残差流表示。论文在每一层后取残差相加后的隐藏状态，记为该层的激活矩阵，时间维度上做平均池化，得到每个音频片段一个定长向量。第二步，这条向量有两条观察路径。一条是直接使用原始激活，另一条是送入为该层训练好的稀疏自编码器，得到高维稀疏潜向量，再对非零位置做平均，同样得到定长表示。

第三步，用非语音训练集上的幻觉标签训练线性分类器，检验两类样本是否线性可分，同时从稀疏分类器权重中取出最重要的少数维度，作为后续转向的掩码。第四步，做转向干预。激活转向是把幻觉组均值与非幻觉组均值相减得到方向，推理时在选定层把该向量按系数加到每个时间位置的残差流上。稀疏转向是只动选出的 top-k 潜维度，按平均激活幅度做加性或乘性调整，再经稀疏自编码器解码器重构回激活并写回残差流。

第五步，用非语音测试集看幻觉率是否下降，用语音集看词错误率和字错误率是否可接受。整个过程不更新 Whisper 参数，也不更新稀疏自编码器参数，干预只发生在推理时的前向过程中。论文用非语音数据做分析和转向，用语音数据做能力监护，这种双数据源设计是为了同时优化幻觉抑制和转写保留。

### 两种表示空间各自算什么，为什么要同时做？

原始激活空间的做法很直接。对每一层，把时间维度平均，得到维度为模型隐藏维度的向量。对 small 是 768 维，对 large-v3 是 1280 维。它的优点是没有额外重构误差，干预方向直接作用于模型真正使用的表示。缺点是稠密且多义，多个概念挤在重叠方向上，很难说清到底动了什么。

稀疏自编码器空间的做法是把上述激活编码到高得多的维度。论文使用的检查点扩张系数为 8，small 潜空间是 6144 维，large-v3 是 10240 维，每个词元恰好保留 50 个激活维度。这种结构来自 AudioSAE 在多样音频上按层训练的结果，目标是把声学、语义和副语言信息拆开。论文对潜变量的时间聚合不用普通平均，而是只对非零元素平均，以保留稀疏结构。两种空间都要做分类，原因不是重复，而是互相验证。

如果幻觉信息只在稠密空间可分而在稀疏空间消失，说明稀疏投影丢了关键信号；如果稀疏空间可分且只需少数维度，说明幻觉信号本身是稀疏的，可以做更小扰动的干预。这为后文只动 10 到 25 个维度埋下依据。

**原始激活 × 稀疏自编码器潜变量：** 原始激活是 Whisper 音频编码器残差流的稠密 hidden state，直接携带模型内部状态，稀疏自编码器潜变量是把该激活投影到更高维并只保留少量非零维度的解耦表示；前者分工是保留完整信息便于直接加向量干预，后者分工是把幻觉相关信息压缩到少数可解释维度以便只动关键维度，二者搭配的理由是验证稠密空间的方向是否能在稀疏空间更干净地定位，组合意义是得到更小副作用的转向掩码。

转向部分同样要区分两种粒度。激活转向只用一个向量和一个系数，推理时对选定层每个位置做加法。稀疏转向先得到分类器权重，正值表示该维度推高幻觉概率，取绝对值最大的 k 个维度组成稀疏掩码，再把方向取反以远离幻觉。加性版本按参考集平均激活幅度缩放偏移，乘性版本按方向对激活做放大或缩小。论文最终主要采用加性稀疏转向。

**激活转向 × 稀疏潜变量转向：** 激活转向分工是在选定编码器层把幻觉均值减非幻觉均值得到的向量按系数加回残差流，稀疏潜变量转向分工是先用分类器重要性选出 top-k 潜维度再按平均激活幅度做加性或乘性偏移并经解码器重构后写回；前者搭配理由是验证线性可分方向是否可直接搬移，后者搭配理由是只扰动少数维度以保留语音能力，组合意义是论文能对比粗粒度整体平移与细粒度稀疏干预的幻觉收益和语音代价。

### 本研究训练了什么，没有训练什么，真实计算是什么？

这是一个需要仔细说明的点，避免把免微调误解为没有学习。本研究没有训练或微调 Whisper 本身。Whisper small 和 large-v3 的参数在全部实验中保持冻结，解码采用贪心解码，温度为零，不用束搜索。稀疏自编码器也不是本文新训练的，而是直接调用已有的 AudioSAE 检查点和批量 Top-k 实现，扩张系数和稀疏度沿用原检查点设置。真正需要拟合的是每层的逻辑回归分类器。

论文用 scikit-learn 的 saga 求解器，先做最大绝对值缩放，再做分层五折交叉验证。缩放器只在训练折上拟合，再作用于验证折和所有测试集，避免信息泄漏。每折的 AUC 平均后报告，稀疏分类器的权重跨折平均后用于选择 top-k 维度。转向向量和超参数也在非语音训练集上计算和网格搜索，测试集严格留到最后评估。换句话说，学习发生在分类器权重和转向方向的估计上，推理干预是确定性加法或缩放，没有梯度回传到 Whisper。

因此复现时不需要准备大规模训练算力，重点是正确抽取残差流、正确做时间池化、正确复现阈值标签和交叉验证划分。

### 数据、划分、指标和基线条件是否一致？

非语音训练集由三部分组成：MUSAN 噪声子集 930 条，WHAM 训练子集 20000 条，FSD50K 开发集 40966 条。为了排除语音污染，论文还构造 FSD50K 过滤版，去掉标注中含语音、音乐或人类类别的样本，训练侧保留 3463 条的说法在正文过滤描述中出现，与表格总量需要结合理解。完整训练集是上述非语音的并集，共 61896 条。非语音测试集包括 UrbanSound8K 的 8732 条，WHAM 验证加测试共 8000 条，FSD50K 评估集 10231 条及其过滤版 9127 条，完整测试集共 26963 条。训练和测试的划分严格分开，分类器训练、转向向量计算和超参数选择只用训练侧，非语音测试侧只做最终评估。

语音侧只用于监控识别质量。英文用 LibriSpeech 测试干净集 2620 条、测试难集 2939 条和 FLEURS 英文 647 条，指标为词错误率。中文用 FLEURS 中文 945 条和 AISHELL-1 的 141600 条，指标为字错误率。幻觉侧主指标是幻觉率，越低越好；语音侧是词错误率和字错误率，越低越好。

基线包括未转向模型、只过稀疏自编码器但不转向的重构基线、激活转向、稀疏转向的不同层和多层组合，以及外部可运行对照 Calm-Whisper 的屏蔽版和微调版。论文报告 large-v3 的基线幻觉问题比 small 更重，完整测试集上 small 基线为 72.63%，large-v3 基线为 86.88%，不同非语音域之间也有大幅波动，因此不能只看单一数据集。

### 表示中真有幻觉信号吗，转向后数字变成多少？

分类实验先回答表示中是否有信号。论文在 FULL 训练集上训练、逐层评估，发现无论原始激活还是稀疏潜变量，AUC 都随层数加深而上升，最高集中在编码器末层。这支持一个判断：幻觉相关信息在深层更线性可分，因此后文把末层作为单层干预点。稀疏表示在部分数据集上达到与稠密相当或更好的 AUC，说明稀疏投影没有丢掉判别结构。进一步只用 top-k 稀疏维度做分类时，50 到 100 个特征后性能趋于稳定，表明判别信息集中在少数维度。

这直接导出转向时可以用很小的 k。下图是 large-v3 逐层 AUC 曲线，左右分别对应两种表示空间，阅读时应先确认横轴层数和纵轴 AUC，再看深层是否整体更高。

> **看图路径：** 1. 先对比左右两块面板：左侧是原始激活，右侧是稀疏潜变量，横轴都是编码器层数；2. 再看每条曲线的纵轴 AUC 随层数是否总体向上，重点看最后几层是否最高；3. 找出橙色 URBAN 曲线在中层附近的跳变位置，对比其他数据集曲线是否也有分层现象；4. 确认图例中 CV 与 FULL-test 等曲线的相对高低，判断深层表示是否更具判别性

[![原论文 Figure 1：Layer-wise AUC scores for classifiers trained on raw Whisper activations (left) and SAE latent…](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/interspeech-2026/bf4878595a57/figure-1.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/interspeech-2026/bf4878595a57/figure-1.png)

*论文图 1。原论文 Figure 1：“Layer-wise AUC scores for classifiers trained on raw Whisper activations (left) and SAE latent representations (right) for Whisper large-v3.”。*

上图显示深层曲线整体高于浅层，橙色城市声音曲线在中层后上升明显，稀疏右侧浅层波动更大但深层同样收敛到高 AUC。这支持只在深层或末层干预，而不是逐层平均用力。下图进一步把维度压缩到 top-k，横轴是保留维度数，纵轴是跨层平均 AUC，可以看到少量维度已能恢复大部分可分性。

> **看图路径：** 1. 先看横轴 Top k 为对数刻度，从 1 到上万，纵轴为 AUC；2. 对比实线 Large 与虚线 Small 在相同 k 下的高低，确认模型规模差异；3. 观察曲线在 50 到 100 附近是否变平，判断增加维度是否还有收益

[![原论文 Figure 2：AUC score against the number of top-k SAE features for Whisper small and large-v3, with…](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/interspeech-2026/bf4878595a57/figure-2.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/interspeech-2026/bf4878595a57/figure-2.png)

*论文图 2。原论文 Figure 2：“AUC score against the number of top-k SAE features for Whisper small and large-v3, with cross-validation (CV) and FULL-test curves shown for both models, averaged by layers.”。*

上图表明 large 实线高于 small 虚线，但两类模型都在几十个维度后进入平台期，这与后文 small 选 25 维、large-v3 选 10 维是一致的。主转向结果是全文最需要核对的部分。下表比较基线与稀疏加性转向在完整集和分数据集上的幻觉率，最后一列同时提醒语音代价，阅读时先看比较问题是否为同模型同测试集，再看指标方向是否都是越低越好。

| 模型与测试条件 | 指标与方向 | 基线幻觉率 | 稀疏转向后幻觉率 | 同条件语音代价 |
| --- | --- | --- | --- | --- |
| Whisper small 完整非语音测试集 | 幻觉率越低越好 | 72.63% | 14.11% | 语音词错误率小幅波动 |
| Whisper large-v3 完整非语音测试集 | 幻觉率越低越好 | 86.88% | 27.33% | 语音词错误率小幅上升 |
| Whisper small 分数据集 | 幻觉率越低越好 | 67.09% 到 81.95% 区间 | 8.68% 到 26.12% 区间 | 英文词错误率部分改善 |
| Whisper large-v3 分数据集 | 幻觉率越低越好 | 高基线区间 | 19.88% 到 33.92% 区间 | 中文字符错误率明显上升 |

上表的主要收益是稀疏转向在 2 个模型和全部非语音测试集上都大幅压低幻觉率，small 完整集下降约 58 个百分点，large-v3 下降约 59 个百分点。分数据集上 small 的 UrbanSound8K 从 67.09% 降到 8.68%，WHAM 从 66.93% 降到 4.68%，FSD50K 从 81.95% 降到 26.12%；large-v3 对应降到 19.88%、27.05% 和 33.92%。代价并不对称：英文语音质量基本保持，small 甚至出现词错误率改善，但中文字符错误率在两种转向下都上升，论文解释是稀疏自编码器训练时中文语音属于域外，重构本身就会扭曲中文所需表示。未胜出的对照是激活转向，它在各非语音集上的下降幅度一致小于稀疏转向，例如 large-v3 单层激活转向只能从 86.88% 降到 82.37% 左右，说明粗粒度平移不如稀疏细粒度干预。

### 系数和维度如何取舍，加性和乘性差在哪里？

超参数搜索只在非语音训练集上以幻觉率为目标做网格搜索，语音指标只做并行监控。激活转向只有一个系数。对 small，8 被选为幻觉下降和转写保留的平衡点；对 large-v3，只需 2 就足够，更大的系数会迅速推高语音误差。下图展示激活转向的帕累托折线，纵轴是幻觉率，横轴同时有英文词错误率和中文字符错误率，阅读时不要把曲线向下直接当成全面变好，而要看同一点的横轴代价。

> **看图路径：** 1. 先区分上下两块面板分别对应 small 和 large-v3，再区分绿色 WER 与黄色 CER 两条折线；2. 沿标注的 α 取值从小到大移动，观察纵轴非语音幻觉率是否下降；3. 对比横轴语音误差同时向右移动多少，判断幻觉收益对应的语音代价

[![原论文 Figure 3：Trade-off between HR (left axis) and ASR quality (WER bottom, CER top) for activation steering…](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/interspeech-2026/bf4878595a57/figure-3.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/interspeech-2026/bf4878595a57/figure-3.png)

*论文图 3。原论文 Figure 3：“Trade-off between HR (left axis) and ASR quality (WER bottom, CER top) for activation steering across α val- ues, for Whisper small (top) and Whisper large-v3 (bottom).”。*

上图上半 small 面板中系数增大时幻觉率先降后语音误差上升，下半 large-v3 面板中系数从 0 到 3 的移动带来幻觉小幅下降但语音误差急剧拉长，说明 large-v3 对激活平移更敏感。稀疏转向有两个超参数：系数和 top-k。论文固定小系数对比不同 k，发现 small 在小 k 下加性更好，大 k 下乘性在语音保留上有优势。机制解释很具体：乘性只能缩放已激活特征，若某维度当前为零则保持为零；加性即使对非激活维度也能引入非零偏移。

这对非语音输入很重要，因为幻觉可能正来自少数本应激活却缺失的潜特征。最终选择 small 用加性、系数 3、25 维，large-v3 用加性、系数 5、10 维。

**加性转向 × 乘性转向：** 加性转向分工是给选中的潜维度加上与平均激活成比例的偏移，即使该维度当前为零也能被激活，乘性转向分工是按方向对已有激活做放大或缩小，为零的维度保持为零；搭配比较的理由是检验非语音输入中缺失激活是否也是幻觉诱因，组合意义是解释为什么小 top-k 下加性方法更有效而乘性方法受限于只能缩放已激活特征。

下表把可选配置放在同一条件下比较，指标方向仍是幻觉率、词错误率和字错误率越低越好，重点是可部署的单层配置，而不是事后多层最优。

| 模型与干预类型 | 系数条件 | 稀疏维度条件 | 非语音幻觉变化 | 语音侧变化 |
| --- | --- | --- | --- | --- |
| Whisper small 激活转向 | α = 8 | 不使用稀疏维度 | 幻觉率下降但幅度小于稀疏转向 | 英文基本保持中文波动 |
| Whisper large-v3 激活转向 | α = 2 | 不使用稀疏维度 | 幻觉率小幅下降 | 语音误差随系数 быстро上升 |
| Whisper small 稀疏加性转向 | α = 3 | top-k = 25 | 幻觉率大幅下降 | 英文可保持中文上升 |
| Whisper large-v3 稀疏加性转向 | α = 5 | top-k = 10 | 幻觉率大幅下降 | 英文小幅上升中文明显上升 |

上表说明可部署收益来自小 k 加性配置，而不是把 k 调到 500 或把系数调到很大。论文还报告多层组合可以进一步压低幻觉，例如 large-v3 同时动 26 层和 32 层能降到 27.33% 附近，但语音代价更大，因此单层末层是更稳妥的默认。失败条件也值得记住：第一层做稀疏转向几乎会破坏识别，英文词错误率超过 100%，说明浅层表示不适合按幻觉方向修改；只过稀疏自编码器而不转向，已经会让中文字符错误率明显变差，说明域外重构本身就是代价来源。

### 哪些结论有边界，什么还没有被证明？

第一，语言边界很清楚。英文语音在转向后基本可用，small 甚至有改善，但中文字符错误率在两种转向下都上升。论文把部分原因归于稀疏自编码器未见过中文语音，这属于有限解释，不是严格因果证明，因为没有做中文数据重训稀疏自编码器的对照。第二，层选择边界。分类 AUC 支持末层最具判别性，但最优系数不保证跨层迁移，论文为简化把末层调出的超参数直接用于其他层评估，这可能低估或高估某些层的真实潜力。

第三，标签边界。所有幻觉标签来自双阈值规则，而不是人工听感或语义无关性标注，因此分类器学到的是过滤器误判方向，不等同于人类判断的幻觉。第四，对照边界。与 Calm-Whisper 的比较只在 large-v3、UrbanSound8K 和 LibriSpeech 上对齐，Calm-Whisper 屏蔽版幻觉率为 24.10%，微调版为 15.51%，本文单层稀疏转向为 30.68%，双层为 19.88%，接近但并未在全部数据集和中文语音上对齐比较。第五，成本边界。

论文没有报告延迟、吞吐和显存开销，稀疏编码加解码加写回必然增加推理步骤，不能从幻觉下降推定系统更快更便宜。总体趋势不等于每条样本都改善，个别非语音域的残留幻觉仍然超过 25%。

### 要复现先做什么，需要保留哪些关键细节？

复现的第一步是重建数据划分。非语音训练只用 MUSAN 噪声、WHAM 训练集和 FSD50K 开发集，非语音测试只用 UrbanSound8K、WHAM 验证测试和 FSD50K 评估集，FSD50K 过滤版要按标签去掉语音音乐人类相关样本。语音集只用于评估，不参与转向估计。第二步是固定推理条件。Whisper 用贪心解码、温度零、无束搜索，阈值取 no speech prob 为 0.6、avg logprob 为负 1.0，据此生成每条样本的幻觉标签。

第三步是抽取表示。对每个编码器层取残差流，时间平均得到定长向量；稀疏路径用对应模型的 AudioSAE 检查点，潜维度按非零平均聚合。第四步是训练分类器。每层独立做最大绝对值缩放加逻辑回归，分层五折，缩放器只在训练折拟合，权重跨折平均后选 top-k。

第五步是搜索超参数。激活转向搜系数，稀疏加性转向联合搜系数和 k，目标是训练侧幻觉率，语音侧只监控。论文给出的可直接尝试的起点是 small 激活系数 8、large-v3 激活系数 2、small 稀疏加性系数 3 加 25 维、large-v3 稀疏加性系数 5 加 10 维，干预放在末层。还需补的验证包括中文稀疏自编码器重训、多层系数分别调优、人工抽查幻觉标签与阈值标签的一致性，以及测量端到端延迟和显存。由于未发现可验证的公开资源状态，本解读不声称代码权重数据当前可用，复现前应先确认所用检查点与实现版本。

### 何时值得尝试这种转向，何时应该换路线？

如果任务是把 Whisper 放在长音频、会议转写或数据清洗管线里，且输入中混有大量静音、噪声和音乐，又不希望微调大模型，那么编码器侧稀疏加性转向值得优先尝试。它的操作成本低，只动末层少数维度，对英文语音影响小，对非语音幻觉压制明显，且与解码器头屏蔽路线互补，未来可以考虑编码器加解码器联合干预。

如果任务以中文识别质量为首要目标，或者输入本身就是中文语音为主，那么直接套用本文检查点风险较大，应先解决稀疏自编码器的中文域外问题，否则字符错误率代价可能超过幻觉收益。如果目标是彻底消除某类固定幻觉短语，文本后处理或针对性微调可能更直接。

复述方法时记住一句话：先用阈值规则定义幻觉标签，再证明深层表示线性可分且信号稀疏，最后只动少数潜维度做加性偏移并用语音集看住能力，任何跳过语音代价只谈幻觉下降的转述都是不完整的。

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。
- 评分规则：type-aware-v1
- 评分模型：muse-spark-1.3-contributor
- 评分请求协议：openai_responses

---

[← 返回 interspeech-2026 论文汇总](/posts/conference-interspeech-2026/)
