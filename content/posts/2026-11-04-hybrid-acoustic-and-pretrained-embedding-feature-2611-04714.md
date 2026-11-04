---
title: "Hybrid acoustic and pretrained embedding feature fusion for unmanned aerial vehicle detection using stacking ensemble learning under a leakage-aware evaluation protocol"
date: 2026-11-04
draft: false
tags: [音频分类, 集成学习, 环境声, 实时处理]
categories: [论文速递]
description: "论文解决用 1 秒音频判断有无无人机的问题，用手工声学描述子加 YAMNet 嵌入的双视角堆叠集成做判断，在按录音源隔离的分组协议下达到 95.29% 准确率，而随机切分会虚高 1.89 到 3.22 个百分点，融合只带来约 1.11 个百分点的小而稳的增益，单条处理约 51.0 毫秒。"
hiddenInHomeList: true
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_arxiv_id: "2611.04714"
paper_digest_workbench_contract: "researcher-workbench"
paper_digest_workbench_schema_fingerprint: "1f09b594c317cc38e934de27a5b0e8ceb4baa50ef79bd4f8683dd9adea720fe7"
paper_digest_reader_title: "听到无人机：手工声学特征与预训练嵌入如何分工、融合与防泄漏评测"
paper_digest_original_title: "Hybrid acoustic and pretrained embedding feature fusion for unmanned aerial vehicle detection using stacking ensemble learning under a leakage-aware evaluation protocol"
paper_digest_arxiv_version: 1
paper_digest_arxiv_versioned_id: "2611.04714v1"
paper_digest_arxiv_abs_url: "https://arxiv.org/abs/2611.04714v1"
paper_digest_arxiv_pdf_url: "https://arxiv.org/pdf/2611.04714v1.pdf"
paper_digest_primary_task: "音频分类"
paper_digest_tags_contract: "paper-tag-flat-tags"
paper_digest_tags_schema_fingerprint: "27e36280a4b8d3df62ebe54d3ab037920f4d69feb2b554163f01bbae2caf4338"
paper_digest_tags_selection_contract: "paper-tag-selection"
paper_digest_tags_registry_version: "paper-tag-catalog"
paper_digest_tags_registry_sha256: "9673bc0122e1905a5dcfd8b223675400cc2fa4c36095bc0e5f817edf99a0ec5c"
paper_digest_tags_concepts: [{"facet":"task","id":"task.audio-classification","label":"音频分类"},{"facet":"method","id":"method.ensemble-learning","label":"集成学习"},{"facet":"signal","id":"signal.environmental","label":"环境声"},{"facet":"setting","id":"setting.real-time","label":"实时处理"}]
paper_digest_primary_method: "集成学习"
paper_digest_score: 5.8
paper_digest_rank_bucket: "前50%"
paper_digest_document_type: "应用研究"
paper_digest_one_sentence: "论文解决用 1 秒音频判断有无无人机的问题，用手工声学描述子加 YAMNet 嵌入的双视角堆叠集成做判断，在按录音源隔离的分组协议下达到 95.29% 准确率，而随机切分会虚高 1.89 到 3.22 个百分点，融合只带来约 1.11 个百分点的小而稳的增益，单条处理约 51.0 毫秒。"
paper_digest_authors: [{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Zahid Iqbal"}]
paper_digest_abstract_sha256: "c547610751917e3e3720f5d3563f6f0526a72818fd80770e18cf82e73892dc62"
paper_digest_sidecars: {"citation.bib":{"sha256":"8641f77722f51aea00e8a8fbcf066df92d5ea51c646f31e9bbb58db28d423883","url":"/audio-paper-digest-blog/client/papers/2026-11-04/2611-04714/citation.bib"},"citation.json":{"sha256":"d4140a3c3b72b4dee5be86e24f4004dd8e3a5402f851e9389565f2f03682d266","url":"/audio-paper-digest-blog/client/papers/2026-11-04/2611-04714/citation.json"},"citation.ris":{"sha256":"eab3a6a97e1313c9c8da97260818bbe9181efccd39a6a56333438649039c5c00","url":"/audio-paper-digest-blog/client/papers/2026-11-04/2611-04714/citation.ris"},"rethink-context.json":{"contract":"paper-research-context","schemaFingerprint":"5d4e79f7d3ee65b39ccb38281548bf20a1b2041ab7a27625eaf97ab9909a8383","sha256":"30db0379898a74177eff74d2872917a60a2dfad17f86482d673eeb1a09da432e","url":"/audio-paper-digest-blog/client/papers/2026-11-04/2611-04714/rethink-context.json"}}
paper_digest_api_reader_contract: "beginner-researcher"
paper_digest_api_reader_schema_fingerprint: "cd8baf5b8bda3a49eec64f6005931af63de4e9a13148cba5f354c661ca6e9df2"
paper_digest_api_reader_article_sha256: "b803653e533e207386e753325ca7a7481eb2994303becf0a942c999235c52a29"
paper_digest_api_reader_plan_sha256: "7aa3f8b560e58fd740935c387a0fbcb6d3e77917602d7099f8bc6aaa994d65c9"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings"
paper_digest_api_reader_source_binding_schema_fingerprint: "d2a2607a6e561909473022eb43f56332ee357af8568566a095c29083ffdec9cc"
paper_digest_api_reader_source_bindings_sha256: "8122370e4e0e0165a638e25cdb17fe7094b75b83ddf2435b2649dced6969d658"
paper_digest_api_reader_source_table_count: 5
paper_digest_api_reader_source_formula_count: 4
paper_digest_api_reader_structured_artifacts_sha256: "b2bdba487f8ef36357115ef8d4a10bc78035f8f953ad53f911ef46d6331614b4"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity"
paper_digest_api_reader_author_identity_schema_fingerprint: "1e3fd3a9a56c9a5bf52df8df5022690b9a3fa92e83e934f295af87c0e258ed2f"
paper_digest_api_reader_author_identity_sha256: "610bed1cc5dc15e5fdb65ed28aa92bb2352e5c31097b45370c75ef31afa21324"
paper_digest_api_reader_author_count: 1
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity"
paper_digest_api_reader_resource_identity_schema_fingerprint: "33b0be17118be61f39b85ce690c8da17e91f2864bb65e85284f60c40067328e0"
paper_digest_api_reader_resource_identity_sha256: "9b0aeab6b0984310a92e0dafd23f7f2ba492a31cf7eb0b7ed1412d86df686721"
paper_digest_api_reader_resource_count: 0
paper_digest_api_reader_figure_persistence: "ephemeral-no-persisted-figure-assets-v1"
paper_digest_api_reader_decision_projection: "api-reader-decision-projection"
paper_digest_api_reader_decision_projection_schema_fingerprint: "e56feb5ab75c8710904916b898f73dab9bb18bdf65bb60b7ed2edf7f99cea860"
---

# 📄 听到无人机：手工声学特征与预训练嵌入如何分工、融合与防泄漏评测

> 英文题目：*[Hybrid acoustic and pretrained embedding feature fusion for unmanned aerial vehicle detection using stacking ensemble learning under a leakage-aware evaluation protocol](https://arxiv.org/abs/2611.04714v1)*

<!--paper-tag-hierarchy-v1:start-->

**研究分类**

- **研究任务**：[音频分类](/audio-paper-digest-blog/papers/?concept=task.audio-classification)
- **研究方法**：[集成学习](/audio-paper-digest-blog/papers/?concept=method.ensemble-learning)
- **研究条件**：[实时处理](/audio-paper-digest-blog/papers/?concept=setting.real-time)
- **信号**：[环境声](/audio-paper-digest-blog/papers/?concept=signal.environmental)

<!--paper-tag-hierarchy-v1:end-->

> 评分：**5.8/10** | 创新 1/2 | 技术严谨 1/1.5 | 实验充分 1.2/1.5 | 清晰度 0.8/1 | 影响力 0.5/1.5 | 开源 0/1.5 | 可复现 0.3/0.5 | 工程/实践 1/1.5


## 👥 作者与机构

- Zahid Iqbal：机构信息未能在本次解析中与作者逐人可靠绑定

## 📌 核心摘要

任务是对1秒单通道16 kHz波形判断是否含有小型多旋翼无人机声音，输出无人机概率与二值判定。难点在于无人机片段切自少数长录音，非无人机片段大量切自已有环境声音库，随机划分会让同一来源的片段同时出现在训练和测试中，测得的准确率会把记住录音误当成检出无人机。每个片段先表示成两路向量，一路是对57个描述频谱包络与谐波结构的统计量做混合筛选，另一路是冻结的预训练音频网络给出的1024维嵌入向量。随后随机森林与梯度提升树分别在两路上训练，得到每个片段的四路无人机概率。在训练池内用分组交叉验证产生样本外概率，再以逻辑回归元学习器学习四路概率的加权综合，基学习器在全训练池重拟合后用于测试，阈值0.5判定为无人机。相对只用手工特征的堆叠模型，两路融合在分组评测下把平均准确率从94.18%提高到95.29%，召回率提升是主要来源，未见过来源的环境声音识别为非无人机的比例为98.78%。结论只在该数据集的分组划分内成立，随机划分会把四个模型的准确率高估1.89至3.22个百分点。开销方面，原文在配有两个AMD EPYC 7513处理器的工作站上，以单CPU线程按100个片段取中位数测得处理一个片段需51.0 ms，可在一秒内完成。

## 🔗 开源与复现资源

本次未形成可展示的已核验资源记录，开放状态尚未核实。

可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 为什么用麦克风听无人机

任务的输入是一段约 1 秒的单声道音频，采样率 16 kHz，目标是二分类：判断这段声音里有没有小型多旋翼无人机。输出是一个概率，超过 0.5 就判为无人机。必须保留的信息是旋翼转动产生的稳定谐波结构，比如桨叶通过频率及其谐波在频谱上的能量分布。

用声音检测的好处是麦克风便宜、不依赖光线和视距，适合机场和活动周边的低空监测。难点在于环境声种类极多，而无人机录音本身很少，模型很容易记住某次录音的背景，而没有真正学会区分无人机声。如果把同一长录音切出的小片段同时放进训练和测试，测得的高准确率就不可信。本文后面所有设计都围绕这一点展开。

### 已有两条路线各解决什么

第一条路线是把时频表示直接送入深度网络，比如对数梅尔谱或梅尔倒谱系数加卷积网络，优点是特征自动学习，代价是需要更多数据和算力。第二条路线是先算一组片段级手工数值，再用随机森林这类树集成分类，优点是便宜可解释，缺点是效果依赖特征选得好不好。

本文属于第二条路线，但多做了一步：不只用手工特征，还把在大规模通用音频上预训练的 YAMNet 当作冻结的特征提取器，提供第二个视角。另一条相关工作是评测方式，Shulman 已指出按录音会话分组后分数会下降。本文把这个观察做成完整的分组源隔离协议，并排比较随机切分虚高了多少。

### 数据从哪里来，泄漏藏在哪里

公开的 DroneAudioDataset 二分类部分共有 11704 个 1 秒片段，其中无人机 1332 段，非无人机 10372 段。无人机声来自仅 7 次室内录音，切成 257 个 5 秒块再细切为 1 秒；非无人机中绝大部分是 ESC-50 环境声数据集的 2000 条 5 秒录音各切出的约 5 个 1 秒小块，另有 70 段语音命令背景噪声和 301 段静音。文件名本身记录了所属的 5 秒块、录音次和源片段，这是做分组的依据。

泄漏的意思是：随机把 1 秒小块打散分折，同一个 5 秒块的相邻小块声学上几乎一样，同一个 ESC-50 源的几个小块也高度相似，结果训练和测试同时见过同一个源。模型只要记住录音指纹就能答对，测的不是检测未见声源的能力。

下表整理了数据集的构成与分组依据，比较问题是每个子集的片段数对应哪种源隔离单位。

| 子集 | 片段数 | 分组单位 |
| --- | --- | --- |
| 无人机 | 1332 | 257 个 5 秒块，来自 7 次录音 |
| 非无人机 ESC-50 部分 | 10001 | 2000 个 ESC-50 源片段 |
| 非无人机其他 | 70 加 301 | 5 个噪声录音加静音组 |
| 全部 | 11704 | 按源隔离 |

表中无人机 1332 段对应 257 个 5 秒块和 7 次录音，ESC-50 部分 10001 段对应 2000 个源片段，其余为 70 段背景噪声和 301 段静音，总计 11704 段。分组时同源小块永不跨折，这是后文所有公平比较的前提。

下面示意图把两种划分并排画出，左侧同一源的小块被分到虚线两侧，右侧每个源整体只在一侧，这是理解全文实验条件差异的关键。

> **看图路径：** 1. 看左侧同一行小块如何被虚线分到训练和测试两侧；2. 看右侧同一行小块如何整体留在虚线一侧；3. 对照无人机块与 ESC-50 源片段两类行的处理是否一致

[![原论文 Figure 2：Random piece-level splitting places pieces of one source on both sides of the split (left); the…](https://arxiv.org/html/2611.04714v1/figures/F_split_schematic.png)](https://arxiv.org/html/2611.04714v1/figures/F_split_schematic.png)

*论文图 2。原论文 Figure 2:：“Random piece-level splitting places pieces of one source on both sides of the split (left); the grouped protocol keeps every recording chunk and every ESC-50 source clip on one…”。*

左图用四行分别表示两个无人机块和两个 ESC-50 源片段，每个小方块是一个 1 秒片段，中间虚线是训练与测试分界。可以看到左侧每行方块分散在虚线两边，底部标注为泄漏；右侧每行方块整体在训练侧或测试侧，标注为每个源完全在一侧。读这张图就明白，分组协议不是换模型，而是换了哪些片段允许进测试。

**随机片段切分 × 分组源隔离协议：** 随机片段切分是把 1 秒小块随机分到训练和测试，同一长录音或同一 ESC-50 源片段会同时出现在两侧；分组源隔离协议是按无人机 5 秒块和 ESC-50 源片段整体分组，保证每个源只在一侧；前者测的是记住录音的能力，后者才测遇到未听过声源时的检测能力，两者对比直接量化泄漏带来的虚高。

### 整个系统让一段音频经历什么

沿着一个 1 秒片段走一遍流程。输入同时进入两个视角。视角一用 librosa 算 57 个片段级数值，再做混合特征选择留下约 17 到 18 个，送给随机森林和 XGBoost 各一个分类器。视角二把波形按 0.96 秒窗、0.48 秒跳帧送入冻结的 YAMNet，得到每窗 1024 维向量再对时间平均成一个向量，同样送给随机森林和 XGBoost。这样得到 4 个基学习器输出的 4 个无人机概率。

4 个概率在训练池内部用分组 5 折交叉验证产生折外概率，再训练一个逻辑回归元学习器做加权综合，最后把基学习器在全训练池上重训一遍，测试时用元学习器输出最终概率。另有一条独立的 NSGA-II 路线，只在 44 个基线特征上搜索极小子集，给一个轻量随机森林用，不参与主堆叠。

下图把这条主路径和分支画全，读图时先分清上下两视角，再看中间概率列如何汇入右侧元学习器。

> **看图路径：** 1. 从左侧 1 秒音频出发，沿上下两条视角看到各自的特征与分类器；2. 注意上方混合选择与下方 NSGA-II 是两条不同的特征选择路线；3. 看四个基学习器的折外概率如何汇入中间的概率列

[![原论文 Figure 1：Overview of the detection pipeline.](https://arxiv.org/html/2611.04714v1/figures/F_pipeline.png)](https://arxiv.org/html/2611.04714v1/figures/F_pipeline.png)

*论文图 1。原论文 Figure 1:：“Overview of the detection pipeline. Feature selection, base learners and the meta-learner are fitted on the training folds only.”。*

图中左侧是 1 秒 16 kHz 单声道输入，向上是手工声学描述子分支，向下是预训练深层音频嵌入分支。手工分支依次是 57 个数值、混合选择、随机森林与 XGBoost；嵌入分支依次是 YAMNet、1024 维平均池化、随机森林与 XGBoost。中间灰色长条是 4 个折外概率，经分组感知的 5 折产生，最右侧是逻辑回归元学习器输出无人机或非无人机。底部还注明评测是 5 个源隔离折重复 3 次，无人机按录音块分组，ESC-50 按官方折分组。

### 手工特征算什么，混合选择怎么挑

57 个手工数值的分工是：13 个梅尔倒谱系数的均值和标准差共 26 个，加对数梅尔谱的均值和波动共 2 个，刻画频谱包络；谱质心、带宽、85% 滚降点和过零率共 4 个，定位能量在频率上的位置；12 个色度均值、7 个谱对比均值和 6 个 tonnetz 维度，响应音调和谐波结构。计算用 2048 点傅里叶变换、512 跳帧，谱对比从 100 Hz 起算以保证最高带低于 8 kHz 奈奎斯特频率。

选择时 mRMR 每次加入与类别互信息大、与已选特征冗余小的特征，互信息用最近邻估计在标准化特征上计算；ReliefF 则看每个采样点与其近邻同类和异类样本的距离差，给能分开近邻异类的特征加权，用 k 等于 100，在最大最小归一化特征上实现。混合子集是两者前 10 名的并集，每折得到 16 到 18 个特征。

\[J(X_{j})=I(X_{j};c)-\frac{1}{|S|}\sum_{X_{s}\in S}I(X_{j};X_{s}),\]

上式是要最大化的 mRMR 增益，Xj 是候选特征，c 是类别，S 是已选集合，I 是互信息。第一项是候选与类别的相关，第二项是与已选集合的平均冗余，差值越大越值得加入。

\[W(X_{j})\leftarrow W(X_{j})-\sum_{i=1}^{k}\frac{\mathrm{diff}(X_{j},R,H_{i})}{mk}+\sum_{i=1}^{k}\frac{\mathrm{diff}(X_{j},R,M_{i})}{mk},\]

上式是 ReliefF 的权重更新，R 是采样点，Hi 和 Mi 分别是近邻同类和异类点，diff 是归一化绝对差，m 是采样数。能拉开异类、拉近同类的特征权重上升。

**手工声学描述子 × YAMNet 嵌入：** 手工声学描述子是对同一段波形按声学知识算出的 57 个数值，负责刻画频谱包络与谐波结构；YAMNet 嵌入是把同一段波形送入在 AudioSet 上预训练的网络后取出的 1024 维向量，负责提供在大规模通用音频上学到的可迁移视角；两者是同一信号的两种表示，分工互补后在堆叠处汇合，多出对单一视角漏检样本的纠错能力。

**mRMR × ReliefF：** mRMR 按互信息选与类别相关且彼此不冗余的特征，偏好精简且信息不重复的子集；ReliefF 按近邻样本能否分开不同类来打分，能保留单独看不强但组合起来有用的特征；混合选择取两者各自前十名的并集，正好把相关性准则和近邻可分性准则搭配起来，兼顾去冗余和保协同。

### YAMNet 视角与四个概率如何堆成一个判决

YAMNet 是一个 MobileNetV1 风格的网络，在 AudioSet 的 521 类上有监督训练过，本文冻结它不微调，只取其 1024 维倒数第二层激活作为可迁移嵌入。不足一窗的片段补零，每窗一个向量，对同一 1 秒片段的多个窗向量平均，得到一个片段向量。这个视角不是为无人机设计的，论文要验证的是它是否给手工视角补了新信息。

堆叠时手工视角和 YAMNet 视角各训一个 200 棵树的随机森林和一个 300 棵树、学习率 0.05、深度 6 的 XGBoost。训练池内部再做分组 5 折，得到每个训练样本的折外概率，逻辑回归元学习器只在这些没见过的概率上学习权重。测试时阈值固定 0.5，概率大于等于 0.5 判无人机。因为元学习器没见过基学习器的训练拟合，它学到的是谁更值得信任。

\[\hat{P}(\mathrm{drone}\mid x)=\sigma\Big(\beta_{0}+\sum_{m=1}^{4}\beta_{m}\,p_{m}(x)\Big),\]

上式是元学习器的计算，pm 是第 m 个基学习器的概率，贝塔是学到的权重，sigmoid 后得到最终无人机概率。后面结果显示手工和 YAMNet 的随机森林权重约为 3.39 和 3.29，两个 XGBoost 权重较小，说明两视角贡献接近。

**基学习器 × 逻辑回归元学习器：** 基学习器是在两个视角上分别训练的随机森林和 XGBoost，共四个，负责从各自视角输出无人机概率；逻辑回归元学习器不直接看原始特征，只看四个基学习器在训练时没见过的折外概率，学四个权重做加权综合；这种堆叠分工让元学习器按泛化能力而非训练拟合程度来信任每个视角。

### 没有端到端训练时，什么被拟合、什么被冻结

本研究没有训练深度声学模型。YAMNet 参数全程冻结，只做前向推理；被拟合的是特征选择、4 个基学习器和元学习器，且都只在每折的训练池内拟合，测试折完全不参与。所有选择和调参都在训练侧完成，15 个分组测试折和 3 个随机切分共 18 次运行用同一版代码从保存的预测直接生成图表。

训练池有两种配置。配置 B 是无人机与非无人机 1 比 1 采样；配置 E 是 1 比 3 采样并给学习器加类别权重，让损失中两类平衡，但让模型见到更广的非无人机声音。测试折是平衡的，每折含等量无人机和非无人机，约 490 到 644 段，训练池约 2020 到 2174 段或 4040 到 4348 段。主模型固定为配置 E 下的双视角堆叠。此外每个测试折的 ESC-50 源片段还按源取平均概率做源级评分，用来算未见源特异度。

### 比较是否公平，指标方向怎么看

所有比较都是配对的：同一批测试片段、同一套设置，只改变划分方式、特征子集或是否融合。准确率、召回率、特异度、精确率和 F1 按无人机为正类计算，特异度是非无人机中判对的比例，AUC 是 ROC 曲线下面积，越大越好。测试集平衡时准确率等于平衡准确率。统计上用每折配对差和胜平负计数，以及把每轮 5 折合并后做的精确 McNemar 检验并经 Holm 校正，另给 2000 次自举的 95% 置信区间。延迟是在单 CPU 线程上测 100 个片段的中位数。

公平的关键是分组细节：无人机按 257 个 5 秒块分组，每次录音的块数均衡分到 5 折；ESC-50 按官方折让同源小块同折；语音命令噪声按 5 个录音分组，静音单独一组。每折重复 3 个随机种子，共 15 个测试折。随机对照臂用同样模型和同样设置，只把划分换成 80 比 20 随机分层切分。

### 随机切分把分数抬高了多少

要回答的核心问题是划分方式是否改变结论。4 个代表模型在随机切分下都更高，高出 1.89 到 3.22 个百分点。主堆叠从随机下的 97.18% 掉到分组下的 95.29%，随机森林混合子集差距最大为 3.22 点，双视角堆叠差距最小为 1.89 点。即使最小的差距也大于分组下 3 个最强模型之间的最大差距 1.11 点，说明划分带来的偏移和模型间差异同量级。随机切分的标准差还小 3 到 6 倍，会同时高估水平和稳定性。

下图左右两列分别显示准确率和 ESC-50 特异度，橙色是随机，蓝色是分组，可以直观看到整体右移和误差条缩短，读图前先确认横轴是百分比越大越好，圆点是均值横线是标准差。

> **看图路径：** 1. 对比左侧准确率图中橙色随机点与蓝色分组点的左右位置；2. 注意蓝色分组误差条明显长于橙色随机误差条的含义；3. 看右侧 ESC-50 特异度图中两类协议的差距是否同样存在

[![原论文 Figure 3：Accuracy and ESC-50 specificity under the random and grouped protocols (mean ± SD).](https://arxiv.org/html/2611.04714v1/figures/F_leakage.png)](https://arxiv.org/html/2611.04714v1/figures/F_leakage.png)

*论文图 3。原论文 Figure 3:：“Accuracy and ESC-50 specificity under the random and grouped protocols (mean ± SD).”。*

左图横轴是测试准确率，右图是 ESC-50 特异度，每行一个模型，圆点是均值，横线是标准差。橙色随机点系统性偏右，蓝色分组点偏左且横线更长；最下一行主堆叠在随机下接近 97.5%，在分组下回到 95% 附近。右图同样显示随机下 3 个强模型都在 99.5% 以上，分组下主堆叠为 98.78%，说明未见源上的特异度也被高估。

下表把同一结论用数字固定，比较问题是相同模型只换划分，指标方向是准确率越高越好。

| 划分 | 主堆叠准确率 | 全部模型虚高范围 |
| --- | --- | --- |
| 随机片段切分 | 97.18% | 高 1.89 到 3.22 个百分点 |
| 分组源隔离 | 95.29% | 基准 |

表中主堆叠随机比分组高，差值落在此前报出的 1.89 到 3.22 个百分点区间内。限制是随机列的 ESC-50 特异度并非未见源，因为测试源的其它片段已参与训练，只能当作泄漏对照，不能当作泛化证据。

### 加上 YAMNet 后增益来自哪里

在配置 E 下，手工单视角堆叠准确率为 94.18%，YAMNet 单视角堆叠为 92.38%，双视角堆叠为 95.29%，标准差从 2.10 降到 1.62。增益主要来自召回率：双视角检出 92.30% 的无人机片段，高于手工堆叠的 90.52% 和 YAMNet 堆叠的 87.29%，而特异度变化很小。也就是说嵌入主要捡回手工视角漏掉的无人机，而不是靠减少误报取胜。元学习器权重也支持互补解释：较弱的 YAMNet 随机森林权重几乎与手工随机森林持平，说明两者错误重叠不多。

下图按折画出每个模型的准确率和 AUC 分布，点越靠右越好，黑点是均值，横线是标准差，读图前先区分浅色小点是 15 个分组折，黑点是平均。

> **看图路径：** 1. 看每行浅色小点代表的 15 个分组测试折的分散程度；2. 对比单视角行与双视角行黑色均值点的位置高低；3. 注意最下一行双视角堆叠的均值与误差条长度

[![原论文 Figure 6：Fusion ablation in configuration E: accuracy and AUC per grouped test fold (dots) with mean ± SD…](https://arxiv.org/html/2611.04714v1/figures/F_fusion_ablation.png)](https://arxiv.org/html/2611.04714v1/figures/F_fusion_ablation.png)

*论文图 6。原论文 Figure 6:：“Fusion ablation in configuration E: accuracy and AUC per grouped test fold (dots) with mean ± SD (markers).”。*

左列是准确率，右列是 AUC，每行一个模型，浅蓝小点是 15 个分组折，黑点是均值。可以看到 YAMNet 单视角两行整体偏左且分散，双视角最下一行橙色均值最靠右，且点更集中。AUC 列同样显示双视角均值最高，说明阈值无关的排序能力也在改善，而不只是 0.5 阈值下的偶然。

配对检验显示双视角比手工堆叠平均高 1.11 个百分点，15 折中赢 12 折、平 3 折、输 0 折；比同手工子集的 XGBoost 高 0.80 个百分点。McNemar 检验在 3 轮中有两轮经 Holm 校正后仍显著，第 3 轮对手工堆叠的校正 p 为 0.074。自举区间在每轮内有重叠，说明这是小而稳的效应，需要配对检验才能看清。

### 特征选择省了多少，极小子集损失多少

混合选择用不到一半特征达到全量特征的精度：随机森林在混合子集上 91.71%，全 44 特征上 91.61%，两者在一个标准差内；单用 mRMR 前十为 91.33%，单用 ReliefF 前十为 90.69%，都略低于混合，支持两个准则互补。每折选出的稳定特征包括第 1 和第 9 梅尔倒谱均值、谱带宽、对数梅尔谱波动、一个色度和两个谱对比带，说明信息分散在多个家族，只用倒谱会丢信息。

要回答最少用几个够用，看 NSGA-II 在 44 个基线特征上的搜索。它同时最小化内层分组 3 折交叉验证误差和特征个数，种群 40、进化 40 代。操作点预先定为最终前沿上离最优内层精度 2 个百分点内的最小子集。

\[f_{1}(z)=1-\mathrm{Acc}_{\mathrm{CV}}(z),\qquad f_{2}(z)=\textstyle\sum_{j}z_{j},\]

上式中 f1 是 1 减内层准确率，f2 是选中特征数，z 是二进制掩码。搜索在两者之间找前沿，圆圈标记的是预先规则选出的操作点，不是事后挑的最优点。

下表是第一轮 5 个分组折的实际结果，比较问题是极小子集相对混合子集损失多少精度。

| Fold | Front size | Chosen kk | Inner-CV acc. | Test acc. | Test AUC | Hybrid kk | Hybrid test acc. |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | 10 | 6 | 92.07 | 88.46 | 0.953 | 17 | 92.69 |
| 2 | 12 | 5 | 91.19 | 91.54 | 0.972 | 16 | 94.62 |
| 3 | 10 | 6 | 92.44 | 86.97 | 0.959 | 16 | 92.15 |
| 4 | 10 | 5 | 91.04 | 87.20 | 0.951 | 18 | 90.00 |
| 5 | 10 | 4 | 92.68 | 86.54 | 0.968 | 17 | 87.38 |

表中每折前沿大小约 10 到 12，选中 4 到 6 个特征，内层精度约 91% 到 92%，测试精度 86.54% 到 91.54%，均值 88.14%，比同折混合子集均值 91.37% 低约 3 个百分点。代价是特征数降到约三分之一，适合特征计算或内存受限的设备。

**NSGA-II × 混合选择：** 混合选择是固定思路的过滤式选择，目标是用 16 到 18 个特征逼近全量特征的精度；NSGA-II 是同时最小化分类误差和特征个数的多目标搜索，目标是画出误差随特征数变化的权衡曲线；前者回答如何选得准，后者回答最少用几个够用，两者共同标定精度与成本的取舍点。

### 训练类比例和计算成本如何权衡

同样双视角堆叠，1 比 1 平衡训练达到更高准确率 95.97% 和召回率 95.48%，而 1 比 3 加权训练准确率 95.29% 但特异度 98.29% 对 96.46%，未见 ESC-50 特异度 98.78% 对 96.98%。在固定 0.5 阈值下，训练池决定漏检与误报的权衡，其对特异度的影响大于融合本身。怕误报选加权 1 比 3，怕漏检选平衡或调低阈值。

成本上手工 57 特征提取 14.4 毫秒，YAMNet 再加 7.7 毫秒。单 XGBoost 总计 14.67 毫秒、模型 0.69 MB，最便宜且准确率 94.50%；手工堆叠 28.75 毫秒；双视角堆叠 51.0 毫秒、12.60 MB，其中基学习器和元学习器占一半以上。三者处理 1 秒音频都在 1 秒内，单核实时都有余量，但双视角约 3 倍于单 XGBoost 的耗时换 0.80 个百分点增益，是否值得看应用对召回的要求。

下表是 3 轮合并精度的自举区间，比较问题是双视角与手工堆叠在相同分组测试下的稳定性。

| Model | Repeat 1 | Repeat 2 | Repeat 3 |
| --- | --- | --- | --- |
| RF, hybrid mRMR+ReliefF | 91.25 [90.17, 92.34] | 91.55 [90.43, 92.61] | 91.63 [90.61, 92.72] |
| XGBoost, hybrid-57 | 94.74 [93.88, 95.61] | 94.26 [93.36, 95.16] | 94.74 [93.88, 95.61] |
| Stacking: hand-crafted only | 94.41 [93.54, 95.27] | 94.11 [93.21, 95.01] | 94.18 [93.28, 95.08] |
| Stacking: hand-crafted + YAMNet (proposed) | 95.23 [94.41, 96.02] | 95.16 [94.33, 95.98] | 95.61 [94.78, 96.40] |

表中每轮 2664 个测试片段合并统计，方括号是 95% 自举区间。双视角 3 轮为 95.23%、95.16%、95.61%，手工堆叠约 94.1% 到 94.4%，随机森林约 91.3% 到 91.6%。区间重叠不代表无差异，因为配对检验利用了同一片段上 2 模型分歧的信息。

### 错误集中在哪里，结论的边界是什么

第一轮 5 折合并 2664 个测试片段中，主堆叠有 28 个误报和 99 个漏检，都少于随机森林基线的 75 个误报和 158 个漏检，漏检多于误报符合高特异度配置的特点。ROC 在低误报区主堆叠位于其它模型之上或持平，这正是误报代价高时关心的区域。

未见 ESC-50 源上，误报集中在持续机械或宽带噪声：洗衣机 20.00%、雨声 9.17%、吸尘器 5.00%，电锯和火车各 4.17%，飞机和直升机各 3.33%。按大类看动物和人类非语音为 0，室内家用 2.58%、室外城市 2.00%、自然 1.50%。错误不是均匀分布，而是集中在少数与旋翼声相似的稳态声。

下表按大类汇总误报率，比较问题是哪类负样本最难，指标方向是误报率越低越好。

| Major group | False-positive rate (%) |
| --- | --- |
| Animals | 0.00 |
| Exterior/urban | 2.00 |
| Human non-speech | 0.00 |
| Interior/domestic | 2.58 |
| Natural soundscapes | 1.50 |

表中 400 个源片段每类平均，室内家用最高，动物和人类非语音为零。这意味着在特定场地部署时，应有意采集该场地的机器和天气噪声做负样本，并做针对性外场测试。结论的边界也很清楚：无人机仅来自 7 次室内录音的两种四旋翼，没有室外多机型验证，不能直接推广到野外；YAMNet 未微调，其它预训练编码器也未比较。本表数值与单位依据论文 PDF。

本篇没有收到代码、模型或数据已公开的可用资源证据，不得声称作者已开源；来源未确认不是论文的技术缺陷。

### 要复现第一步做什么

先按文件名恢复分组：无人机按 5 秒块分为 257 组，每次录音的块均衡分到 5 折；ESC-50 按官方折让同源小块同折；语音命令噪声按 5 个录音分组，静音单独一组。每折测试取全部无人机和等量非无人机并固定下来，让所有模型测同一批片段。训练池按配置 B 或 E 采样，特征选择和调参只在训练池内做，YAMNet 冻结取 1024 维平均向量。

复现时保留关键超参数：librosa 用 2048 点窗、512 跳帧；mRMR 在标准化特征上用最近邻互信息，ReliefF 用 k 等于 100 并取前十并集；NSGA-II 种群 40、40 代、两点交叉加位翻变异；随机森林 200 棵、XGBoost300 棵、学习率 0.05、深度 6；元学习器是逻辑回归，阈值 0.5。先复现随机与分组的差值，再看融合的 1.11 点增益是否在多数折为正，这是检验泄漏控制是否生效的最快信号。

### 什么时候值得尝试，还缺哪项验证

当已有手工特征流程且想小幅提升召回时，值得尝试冻结的通用音频嵌入做第二视角，再用堆叠而不是简单拼接来融合；当设备受限时，NSGA-II 的 4 到 6 特征或单 XGBoost 是更便宜的操作点；当评测数据来自长录音切分或拼凑公开集时，必须先做源隔离分组，否则几点的模型差异会被划分虚高淹没。

还需要补的验证是独立室外录音、多机型和不同距离天气下的测试，以及更多预训练编码器的对比。训练资源、推理开销和实际延迟要分开报告，本文的 51.0 毫秒是在 AMD EPYC 7513 单线程上测得，换平台需重测。总体上，分组评测是公平前提，融合是小而稳的加分，错误分析指出的洗衣机、雨声等稳态噪声就是下一批训练负样本的来源。

<details>
<summary>📎 论文与评分元数据</summary>

排名：前50% | 文档类型：应用研究 | [arXiv 原文](https://arxiv.org/abs/2611.04714v1)

</details>

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。

- 评分规则：type-aware-v1

- 评分模型：muse-spark-1.3-contributor

- 评分请求协议：openai_responses

---

[← 返回 2026-11-04 语音/音乐/音频论文速递](/audio-paper-digest-blog/posts/2026-11-04/)
