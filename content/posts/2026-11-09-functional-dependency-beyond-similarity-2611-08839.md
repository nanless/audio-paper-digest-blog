---
title: "Functional Dependency beyond Similarity: Hierarchical Decomposition of Training Data Attribution in Music Generative Models"
date: 2026-11-09
draft: false
tags: [音乐生成, 聚类与类别匹配, 音乐, 可解释性]
categories: [论文速递]
description: "论文把一个训练样本对一次生成的归因分数拆成全局、分组、特定三层，证明四种音乐模型和多种归因方法下前两层都不可忽略，且每层删除后都会在对应范围内降低似然。"
hiddenInHomeList: true
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_arxiv_id: "2611.08839"
paper_digest_workbench_contract: "researcher-workbench"
paper_digest_workbench_schema_fingerprint: "1f09b594c317cc38e934de27a5b0e8ceb4baa50ef79bd4f8683dd9adea720fe7"
paper_digest_reader_title: "相似之外的影响：音乐生成模型训练数据归因的分层分解"
paper_digest_original_title: "Functional Dependency beyond Similarity: Hierarchical Decomposition of Training Data Attribution in Music Generative Models"
paper_digest_arxiv_version: 1
paper_digest_arxiv_versioned_id: "2611.08839v1"
paper_digest_arxiv_abs_url: "https://arxiv.org/abs/2611.08839v1"
paper_digest_arxiv_pdf_url: "https://arxiv.org/pdf/2611.08839v1.pdf"
paper_digest_primary_task: "音乐生成"
paper_digest_tags_contract: "paper-tag-flat-tags"
paper_digest_tags_schema_fingerprint: "27e36280a4b8d3df62ebe54d3ab037920f4d69feb2b554163f01bbae2caf4338"
paper_digest_tags_selection_contract: "paper-tag-selection"
paper_digest_tags_registry_version: "paper-tag-catalog"
paper_digest_tags_registry_sha256: "9673bc0122e1905a5dcfd8b223675400cc2fa4c36095bc0e5f817edf99a0ec5c"
paper_digest_tags_concepts: [{"facet":"task","id":"task.music-generation","label":"音乐生成"},{"facet":"method","id":"method.clustering","label":"聚类与类别匹配"},{"facet":"signal","id":"signal.music","label":"音乐"},{"facet":"research_focus","id":"research_focus.interpretability","label":"可解释性"}]
paper_digest_primary_method: "聚类与类别匹配"
paper_digest_score: 5.8
paper_digest_rank_bucket: "前50%"
paper_digest_document_type: "方法研究"
paper_digest_one_sentence: "论文把一个训练样本对一次生成的归因分数拆成全局、分组、特定三层，证明四种音乐模型和多种归因方法下前两层都不可忽略，且每层删除后都会在对应范围内降低似然。"
paper_digest_authors: [{"affiliations":["Chalmers University of Technology and University of Gothenburg, Department of Computer Science and Engineering, Gothenburg, Sweden"],"name":"Changheon Han"},{"affiliations":["Chalmers University of Technology and University of Gothenburg, Department of Computer Science and Engineering, Gothenburg, Sweden"],"name":"Hugh Xuechen Liu"},{"affiliations":["Chalmers University of Technology and University of Gothenburg, Department of Computer Science and Engineering, Gothenburg, Sweden"],"name":"Ashkan Panahi"},{"affiliations":["Chalmers University of Technology and University of Gothenburg, Department of Computer Science and Engineering, Gothenburg, Sweden"],"name":"Kıvanç Tatar"}]
paper_digest_abstract_sha256: "c7874739b4540435e8aeaaa8edb797f37254cde4bcb5cbefc7ad89b0c4cb229b"
paper_digest_sidecars: {"citation.bib":{"sha256":"7989f0ae49d19d3019581546405573d0cef8380851697a14e02f72c977169711","url":"/audio-paper-digest-blog/client/papers/2026-11-09/2611-08839/citation.bib"},"citation.json":{"sha256":"198b01f4b29e232a4a341ee3e21fb8c259eb8052569652f5626e7520a83c95e6","url":"/audio-paper-digest-blog/client/papers/2026-11-09/2611-08839/citation.json"},"citation.ris":{"sha256":"d4a59c75ec9f1412ec357d1bd00d4f97da781870fefa5384c4e8d264025fcafa","url":"/audio-paper-digest-blog/client/papers/2026-11-09/2611-08839/citation.ris"},"rethink-context.json":{"contract":"paper-research-context","schemaFingerprint":"5d4e79f7d3ee65b39ccb38281548bf20a1b2041ab7a27625eaf97ab9909a8383","sha256":"74995fc51644a81c5b6fa21fcacb5df144ebd33cc584c99f8acda0b978ccd0ba","url":"/audio-paper-digest-blog/client/papers/2026-11-09/2611-08839/rethink-context.json"}}
paper_digest_api_reader_contract: "beginner-researcher"
paper_digest_api_reader_schema_fingerprint: "cd8baf5b8bda3a49eec64f6005931af63de4e9a13148cba5f354c661ca6e9df2"
paper_digest_api_reader_article_sha256: "2336282c5c4a5637cfc5dcbf3e275d89dc5d387bd712856397862afb797bd120"
paper_digest_api_reader_plan_sha256: "b27751456fc58826421e3389d36309e06a393b2f99ec2946c94a7d44621c1789"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings"
paper_digest_api_reader_source_binding_schema_fingerprint: "d2a2607a6e561909473022eb43f56332ee357af8568566a095c29083ffdec9cc"
paper_digest_api_reader_source_bindings_sha256: "587a25998dcd966691feca48a54e8c247b0bd82ea19f5bedf839c3fa899dce34"
paper_digest_api_reader_source_table_count: 4
paper_digest_api_reader_source_formula_count: 4
paper_digest_api_reader_structured_artifacts_sha256: "64ae200b63f09ae70b96a17c376f3e60e1780dc28a58e4e6f81b307fbdfacac2"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity"
paper_digest_api_reader_author_identity_schema_fingerprint: "1e3fd3a9a56c9a5bf52df8df5022690b9a3fa92e83e934f295af87c0e258ed2f"
paper_digest_api_reader_author_identity_sha256: "048183c18ad69814136289eb10761dd6b3b65b91131dc5248fb36aa5b41570af"
paper_digest_api_reader_author_count: 4
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity"
paper_digest_api_reader_resource_identity_schema_fingerprint: "33b0be17118be61f39b85ce690c8da17e91f2864bb65e85284f60c40067328e0"
paper_digest_api_reader_resource_identity_sha256: "efda4d3c082620f2c0724eb19409cd25627fdf5dd233bc464639ed16fafaed44"
paper_digest_api_reader_resource_count: 1
paper_digest_api_reader_figure_persistence: "ephemeral-no-persisted-figure-assets-v1"
paper_digest_api_reader_decision_projection: "api-reader-decision-projection"
paper_digest_api_reader_decision_projection_schema_fingerprint: "e56feb5ab75c8710904916b898f73dab9bb18bdf65bb60b7ed2edf7f99cea860"
---

# 📄 相似之外的影响：音乐生成模型训练数据归因的分层分解

> 英文题目：*[Functional Dependency beyond Similarity: Hierarchical Decomposition of Training Data Attribution in Music Generative Models](https://arxiv.org/abs/2611.08839v1)*

<!--paper-tag-hierarchy-v1:start-->

**研究分类**

- **研究任务**：[音乐生成](/audio-paper-digest-blog/papers/?concept=task.music-generation)
- **研究方法**：[聚类与类别匹配](/audio-paper-digest-blog/papers/?concept=method.clustering)
- **信号**：[音乐](/audio-paper-digest-blog/papers/?concept=signal.music)
- **研究重点**：[可解释性](/audio-paper-digest-blog/papers/?concept=research_focus.interpretability)

<!--paper-tag-hierarchy-v1:end-->

> 评分：**5.8/10** | 创新 1.2/2 | 技术严谨 1/1.5 | 实验充分 1/1.5 | 清晰度 0.8/1 | 影响力 0.8/1.5 | 开源 0/1.5 | 可复现 0.3/0.5 | 工程/实践 0.7/1.5


## 👥 作者与机构

- Changheon Han：Chalmers University of Technology and University of Gothenburg, Department of Computer Science and Engineering, Gothenburg, Sweden
- Hugh Xuechen Liu：Chalmers University of Technology and University of Gothenburg, Department of Computer Science and Engineering, Gothenburg, Sweden
- Ashkan Panahi：Chalmers University of Technology and University of Gothenburg, Department of Computer Science and Engineering, Gothenburg, Sweden
- Kıvanç Tatar：Chalmers University of Technology and University of Gothenburg, Department of Computer Science and Engineering, Gothenburg, Sweden

## 📌 核心摘要

音乐生成模型需判断每个训练实例对生成结果的影响，难点是一个归因分数同时混入对全部生成结果的整体依赖、对一类生成结果的依赖和对单个生成结果的依赖。方法输入训练实例的训练梯度与生成音频输出梯度的原始归因分数，先按生成结果标准化得到标准分数矩阵，再减去全部结果均值得到全局层并送入分组计算，最后在同归因分数簇内减去全局层均值得到分组层并取剩余残差为特定层。输出是每个训练实例对每个生成结果的全局层、分组层和特定层分数，其中全局层是跨全部生成结果的均值，分组层是同簇内去全局后的组内均值，特定层是去掉前两层后的残差。与已有归因方法只给单个分数不同，关键差异是三层平方占比之和等于总方差，可量化每层在总方差中的构成并分别对应不同范围的报酬讨论。在MusicGen-S的删除重训练评测中，以特定层对数似然差D^spec为指标，GradDot为-5.89（×10^3），高于Trak的-7.23（×10^3），两者均为负值说明删高分实例后目标提示生成结果的似然低于随机删除相同数量实例。结论适用于自回归音乐生成模型的梯度类归因，扩散模型因去噪过程改变归因而不适用，且分组簇与体裁等音频特征不一致、含义尚未识别。原文未披露训练、推理或部署成本。

## 🔗 开源与复现资源

- 第三方资源：<https://anonymous.4open.science/r/decompose-tda-F6BA/> — 链接可访问（HTTP 200）

可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 版权只看相似，为什么生成模型还要谈功能关系？

这篇论文面对的任务是音乐生成中的报酬归因：模型用大量已有作品训练后产生新音频，如果要按贡献付费，应该依据什么来衡量每个训练样本的作用。版权侵权讨论常比较两部作品是否实质相似，但生成模型的利用不止于复制式相似，一个训练片段可能通过训练改变模型参数，进而影响很多次生成，这种参数中介的依赖就是论文要处理的对象。

输入是已训练好的自回归音乐模型、它的训练集和它的一批生成输出，目标是把每个训练样本对每次生成的影响分数解释成不同范围的贡献，输出是分解后的 3 层分数和每层占比。必须保留的信息是同一分数同时混有模型整体行为和单次生成特性的事实，输出不能只给一个笼统的总分，否则每次付费都会把一部分分给几乎所有生成都靠前的样本。

读者要先接受一个前提：相似度编码器能告诉你两段音频听起来像不像，但它不回答去掉某个训练样本后生成会不会变。论文选择训练数据归因这条技术路线，正是因为它估计的是反事实影响，而不是听感相似。

### 已有归因方法提供了什么，又混淆了什么？

已有工作包括用外部音频编码器比较生成与训练的相似度，以及让用户在生成时指定参考歌曲再做归属。前者捕捉的是编码器敏感的音乐相似维度，后者是系统设计的选择机制，都不是训练对生成的因果影响。另一条工作直接对音乐生成模型用归因分数分配版税，但它用的是未分解的总分。

训练数据归因本身对每个训练样本和每次生成给一个分数。基于梯度的方法比较训练损失的梯度与生成输出负对数似然的梯度，例如点积、余弦、多检查点求和、加权投影或近似逆海森加权。评估常用删除后重训，看去掉高分样本是否比随机去掉更能改变模型行为。

问题在于已有文献反复发现全局影响：少数训练样本在几乎每次生成中都排在最前面，被解释为梯度范数大、离群或拟合差。这部分反映的是模型整体行为，而不是某次生成的特性。如果直接按总分付费，就等于每次都给这些样本分钱。更细地看，即使去掉全局部分，残差里还可能有被一组生成共享的部分，所以需要比单个总分更细的分辨率。

### 论文要解决的具体混叠是什么？

论文把问题定义为一个分数里混有 3 种范围的依赖：对训练好模型本身的依赖、对一组输出的依赖、对单次输出的依赖。解决困难在于它们在观测上叠加在一起，排序时互相抬升，只看总分无法指明报酬到底为哪种依赖付费。

各部分分工是：先提出功能依赖这个总称，把模型本身的依赖和单次生成的依赖统一为不同范围的依赖；再提出只用分数矩阵就能做的分层分解，不依赖特定归因方法的内部结构；最后用占比和删除检验分别回答构成有多大、是否真有对应范围的效应。

**训练数据归因 × 功能依赖：** 训练数据归因指估计每个训练样本对一次生成输出的影响分数，是可计算的操作；功能依赖是论文提出的概念，指训练好的模型本身或某次生成在功能上依赖哪些训练样本。归因分数是观测手段，功能依赖是它要解释的关系，分解就是把混合在一起的不同范围依赖分开，以便报酬讨论能指明付的是哪一种依赖。

### 分解的总体流程是怎样的？

方法不重新训练来估计影响，而是以后处理方式分解已算好的分数。沿一个样本走一遍：取一个训练片段和一次生成，先有该方法给出的原始分数；把同一次生成对应的全部训练样本分数做标准化，消除不同生成之间均值和尺度的差异但保留排序；把标准化矩阵按行平均得到全局层，按列聚类后再在簇内按行平均得到分组层，两次相减的剩余就是特定层。

下图把这个矩阵变换过程画了出来，是理解后文 3 层定义的关键，建议按箭头顺序阅读行操作与列操作的区别。

> **看图路径：** 1. 先从左上原始分数矩阵看行列含义：行是训练样本，列是生成输出；2. 再看每列标准化、每行取平均得到全局层的箭头走向；3. 再看右下按列聚类后在簇内按行取平均得到分组层的两色框；4. 最后看最左特定层是两次相减后的剩余矩阵

[![原论文 Figure 1.：Decomposition of the standardized score matrix into the three levels.](https://arxiv.org/html/2611.08839v1/decomposition_overview.svg)](https://arxiv.org/html/2611.08839v1/decomposition_overview.svg)

*论文图 1。原论文 Figure 1.：“Decomposition of the standardized score matrix into the three levels.”。*

该图确实可见 6 个矩阵网格：左上原始分数矩阵、顶部中标准化矩阵、右上全局层矩阵、右下减去全局后的矩阵、底部中分组层矩阵、左下特定层矩阵。主流程箭头有 5 个：按列标准化、按行取平均、减去全局层、在簇内按行取平均、减去全局和分组层，另有绿线标出同列的标准化对应关系，黄框标出同一训练样本的一行，蓝红框标出两个不同的生成簇。它帮助理解分解只是行平均与簇内行平均的两次剥离，没有引入新的影响估计，代价是需要先选定聚类数和聚类依据。

### 标准化与三层加法如何保证不重不漏？

标准化处理的对象是每次生成对应的一列分数。记训练样本为行，生成为列，原始分数经该列均值和标准差变换后得到标准分数，这样不同列不再因整体偏高或波动大而不可比。论文明确标准化的范围是对训练样本做，不改变同列内的排序。

\[z_{it}=\frac{\tau_{it}-\mu_{t}}{\sigma_{t}},\]

分解把每个标准分数写成三项之和：全局项只与训练样本有关，分组项与训练样本和该生成所在簇有关，特定项与训练样本和该次生成有关。这种加法保证每一分都被归到某一层，不丢失也不重复计算。

\[z_{it}=z^{\mathrm{glob}}_{i}+z^{\mathrm{grp}}_{i,c(t)}+z^{\mathrm{spec}}_{it},\]

全局项是该训练样本在全部生成上的平均标准分数，代表模型本身对该样本的依赖，而不是某次生成的依赖。

\[z^{\mathrm{glob}}_{i}=\frac{1}{T}\sum_{t=1}^{T}z_{it}.\]

分组项是先减去全局后，在该生成所在簇内再平均，代表被同一簇生成共享的部分。特定项是再减去分组项后的剩余，代表单次生成独有的部分。

\[z^{\mathrm{grp}}_{i,c}=\frac{1}{|G_{c}|}\sum_{t\in G_{c}}\bigl(z_{it}-z^{\mathrm{glob}}_{i}\bigr),\]

**全局影响 × 全局层：** 全局影响是已有文献发现的现象：少数训练样本对几乎每次生成都排在最前；全局层是本文分解中对该现象的定量承接，即一个训练样本在全部生成上的平均标准化分数。前者是待解释的问题，后者是分解后归到模型本身的那部分分量，移除它才能看到与单次生成更相关的残差。

### 分组依据从哪里来，为什么不是流派？

分组的关键是生成之间如何算同组。论文把每次生成表示为它在全部训练样本上的分数向量，先减去全局向量，再做 L2 归一化后用 k 均值聚类，得到 TDA 分数簇。也就是说，分组依据是归因模式相似，而不是提示词的流派标签或音频听感。

这样做的理由在正文有明确交代：先减去全局是为了不在分组层里重复计算全局部分；同一训练样本减去同一个全局值，不改变它在不同生成之间的差异。簇内再减去同一个分组值，也不改变簇内生成之间的差异，只是把共享部分剥离出来。

**TDA 分数簇 × 风格：** TDA 分数簇指把每次生成对应的训练样本分数向量做 k 均值聚类得到的分组；论文所说的风格指模型自己形成的这种分组，不是外部定义的流派。两者搭配是因为分组层必须先有分组依据，而该依据来自分数模式相似性，因此它反映的是模型内部的关联方式，能否对应听感或流派需要另行检验。

论文把聚类数取为 12，与流派数相同，目的是后面能与流派对照，但这不意味着簇就等于流派。对照结果放在后文，簇与流派或声学特征的一致性都很低，这正是要说明模型自己形成的关联不同于外部音乐分类。

### 模型和训练数据是如何准备的？

论文用两类自回归音乐模型各两种规模：MusicGen 的小和大版本，以及 InspireMusic 的基础和 1.5B 版本。共同点是先生成音频词元再解码成波形，不同点是 MusicGen 用冻结的文本编码器加 EnCodec 词元，InspireMusic 直接把文本词元输入 Transformer 并用另一种词元与超分流模型渲染。微调时只更新 Transformer 主体，文本编码器、音频解码相关部分冻结且不参与归因。

训练数据是把 MTG-Jamendo 中抽出的 10000 首曲目切成 30000 个 10 秒片段，每个 10 秒片段就是一个训练样本。论文用分布图说明这次抽样没有明显偏离全集，理解该图有助于判断结论的适用范围。

> **看图路径：** 1. 比较灰色全部数据与蓝色微调数据的每根柱高是否接近；2. 注意纵轴是带该标签的曲目百分比，一首曲目可带多个标签；3. 看 electronic 是否明显高于其他标签，两组是否同为最高

[![原论文 Figure 2.：Distribution of genre tags in the whole MTG-Jamendo dataset (55,525 tracks) and in the…](https://arxiv.org/html/2611.08839v1/catalogue_overview.svg)](https://arxiv.org/html/2611.08839v1/catalogue_overview.svg)

*论文图 2。原论文 Figure 2.：“Distribution of genre tags in the whole MTG-Jamendo dataset (55,525 tracks) and in the fine-tuning dataset (10,000 tracks), for the 25 most frequent genre tags.”。*

该图确实可见横轴为 25 个最常见流派标签、纵轴为带该标签的曲目百分比的两组并排柱，灰色是全集 55525 首，蓝色是微调集 10000 首，两组柱高总体接近，electronic 在两组中都是最高约 30%。它支持微调集在标签分布上与全集相似的说法，但也要记住一首曲目可带多个标签，百分比之和不为 100，且这只是标签分布相似，不保证音频内容或质量无偏。

微调超参数是同一套优化器、学习率、有效批量和步数，大模型只是把批量拆小再累积以装入显存，每种模型做 3 个随机种子，数据顺序也由种子固定，删除检验时保持剩余样本顺序不变以保证可比。

**删除检验 × 对数似然：** 删除检验指去掉某层打分最高的训练样本后重新微调，再比较模型行为是否变化的反事实检验；对数似然在这里是行为度量，指重训后模型赋予目标生成的平均每词元对数似然。删除是干预，对数似然是读数，两者组合才能判断该层的分数是否真有因果层面的对应范围效应，而不只是数值占比大。

### 生成、归因方法和检验条件是如何对齐的？

生成固定为 480 次：12 个流派各 8 个提示，每个提示用 5 个随机种子各生成一次，提示来自未参与微调的曲目标签串。归因对每个训练片段和每次生成算一个原始分数，共用 6 种方法加 Trak 的 3 个变体，包括直接点积、余弦、多检查点求和、加权投影与集成，以及两种近似逆海森的方法。除多检查点和集成外，其余都用最终检查点。

删除检验是本文的因果对照：按某层分数选出 3000 个训练样本去掉后重新微调，再与去掉同样数量随机样本的重训模型比较目标生成的对数似然。全局层看全部生成的平均下降，分组层看目标簇相对其他簇的额外下降，特定层看目标提示相对同簇内其他提示的额外下降。负值表示该层确有对应范围的效应。删除只对 GradDot 和 Trak 做，每层需要多次重训，计算代价集中在这里。

占比用平方和衡量每层在总平方和中的份额，3 层之和为 1。随机基线用于判断观测是否超出偶然：全局随机基线约为 1 除以生成数，分组随机基线与簇数和生成数有关。相关性用 Spearman 秩相关，分组一致性用 Wallace 系数，都是只看排序或配对是否同组，不直接比较绝对分值。

### 三层在分数中占比多大，是否只是偶然？

要回答的比较问题是：在不同模型和方法下，全局层和分组层占总平方的比例是否系统性高于随机基线，以及加权方法是否比较低。公平条件是先对每列标准化再分解，分组统一用 TDA 分数簇且簇数固定为 12，随机基线按相同矩阵尺寸计算。指标方向是比例越大表示该层在分数构成中越大，但它本身不等于因果强度。

|  | global | global | global | global | group | group | group | group |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Method | S | L | IM | IM-1.5B | S | L | IM | IM-1.5B |
| Random | 0.002 | 0.002 | 0.002 | 0.002 | 0.02 | 0.02 | 0.02 | 0.02 |
| GradDot | 0.106 | 0.131 | 0.360 | 0.403 | 0.212 | 0.151 | 0.113 | 0.118 |
| Grad-Cos | 0.106 | 0.128 | 0.359 | 0.401 | 0.209 | 0.148 | 0.113 | 0.119 |
| TracIn | 0.135 | 0.139 | 0.454 | 0.651 | 0.239 | 0.214 | 0.128 | 0.173 |
| LoGra | 0.059 | 0.070 | 0.132 | 0.134 | 0.073 | 0.070 | 0.076 | 0.101 |
| FactGraSS | 0.054 | 0.058 | 0.114 | 0.115 | 0.063 | 0.055 | 0.075 | 0.089 |
| Trak λ=1 | 0.032 | 0.023 | 0.042 | 0.036 | 0.038 | 0.032 | 0.041 | 0.048 |
| Trak λ=0.1 | 0.021 | 0.015 | 0.022 | 0.023 | 0.034 | 0.029 | 0.036 | 0.043 |
| Trak λ=0.01 | 0.019 | 0.014 | 0.019 | 0.022 | 0.033 | 0.028 | 0.035 | 0.041 |
| Trak (ensemble) | 0.033 | 0.023 | 0.043 | 0.040 | 0.040 | 0.032 | 0.040 | 0.052 |

上表完整呈现原文的全局与分组占比矩阵，行是随机基线与各归因方法，列是 4 种模型。读数时注意同一方法在不同模型下的量级差异，以及未加权点积类与加权类的分界。表后解释给出主要模式与限制。

结果显示所有模型和方法下全局和分组比例都高于随机基线，随机全局约 0.002、分组约 0.02，而实测全局最小也在 0.014 以上，分组最小也在 0.028 以上。同一模型内，未加权的点积类最高，例如 TracIn 在 InspireMusic-1.5B 全局达 0.651，而加权的 LoGra、FactGraSS 和 Trak 变体明显更小。这支持分数里混有共享成分的判断，但也说明占比高度依赖方法和模型，不能把某一个数值推广为通用常数。限制是占比只描述构成，不证明去掉该层一定改变行为，需要删除检验补足因果证据。

### 每层删除后，模型行为是否在对应范围内变化？

要回答的比较问题是：按分组层分数删掉某簇的高分样本后，是否主要降低该簇生成的对数似然，而不是均匀降低所有生成。公平条件是删除集与随机集大小相同且重训种子相同，分组按 TDA 分数簇划分，评估时比较目标簇相对其他簇的额外下降。指标方向是负值表示该簇受到更大影响，对角越显著说明分组层效应越集中。

> **看图路径：** 1. 先确认行是被删除的簇，列是被评估的生成所在簇；2. 观察每行最深红色是否落在加框的对角格上；3. 比较左右两图对角显著程度的差异

[![原论文 Figure 3.：Results of the group-level deletion test for Trak with \\lambda=1 in MusicGen-S (left) and…](https://arxiv.org/html/2611.08839v1/heatmap.png)](https://arxiv.org/html/2611.08839v1/heatmap.png)

*论文图 3。原论文 Figure 3.：“Results of the group-level deletion test for Trak with \lambda=1 in MusicGen-S (left) and InspireMusic-Base (right).”。*

该图展示 Trak 在 MusicGen-S 和 InspireMusic-Base 上的分组层删除检验热图，行是被删除的簇，列是被评估的生成所在簇，颜色越红表示对数似然相对随机删除下降越多，对角格加框。MusicGen-S 的 12 行最低点全部落在对角，InspireMusic-Base 有 10 行落在对角，说明去掉某簇高分样本主要影响该簇生成。

|  | global | global | global | global | group | group | group | group |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Method | S | L | IM | IM-1.5B | S | L | IM | IM-1.5B |
| Random | 0.002 | 0.002 | 0.002 | 0.002 | 0.02 | 0.02 | 0.02 | 0.02 |
| GradDot | 0.106 | 0.131 | 0.360 | 0.403 | 0.212 | 0.151 | 0.113 | 0.118 |
| Grad-Cos | 0.106 | 0.128 | 0.359 | 0.401 | 0.209 | 0.148 | 0.113 | 0.119 |
| TracIn | 0.135 | 0.139 | 0.454 | 0.651 | 0.239 | 0.214 | 0.128 | 0.173 |
| LoGra | 0.059 | 0.070 | 0.132 | 0.134 | 0.073 | 0.070 | 0.076 | 0.101 |
| FactGraSS | 0.054 | 0.058 | 0.114 | 0.115 | 0.063 | 0.055 | 0.075 | 0.089 |
| Trak λ=1 | 0.032 | 0.023 | 0.042 | 0.036 | 0.038 | 0.032 | 0.041 | 0.048 |
| Trak λ=0.1 | 0.021 | 0.015 | 0.022 | 0.023 | 0.034 | 0.029 | 0.036 | 0.043 |
| Trak λ=0.01 | 0.019 | 0.014 | 0.019 | 0.022 | 0.033 | 0.028 | 0.035 | 0.041 |
| Trak (ensemble) | 0.033 | 0.023 | 0.043 | 0.040 | 0.040 | 0.032 | 0.040 | 0.052 |

上表呈现全局与分组比例结果，行是随机基线与各方法，列是 4 种模型下全局与分组两组。所有方法全局与分组比例均高于随机基线。以 MusicGen-S 为例，GradDot 全局为 0.106、分组为 0.212，TracIn 全局为 0.135、分组为 0.239，而 Trak 全局为 0.032、分组为 0.038；InspireMusic-1.5B 上 TracIn 全局达 0.651。这支持每种方法得分中都含有全局与分组层级成分，且未加权点积类方法的比例更大。限制是比例只是方差构成，不直接代表反事实影响强度，影响强度需结合删除检验判断。

### 全局层来自梯度范数大，还是方向一致？

要回答的比较问题是：全局高分是因为训练梯度本身很大，还是因为它与多数生成梯度的共同方向更对齐。方法是把训练梯度范数与它和共同方向的余弦分别同全局分数做 Spearman 秩相关，共同方向是各生成梯度先除以自身范数再平均，以避免大范数生成主导方向。

结果是方向对齐的相关始终为正，而范数的相关接近零，绝对值除个别情况外不超过 0.18。TracIn 在两个 InspireMusic 模型上范数相关达 0.32 和 0.31，但其方向相关更高达 0.90 和 0.85。共同方向的范数在 4 种模型上为 0.208、0.192、0.290、0.282，大于 0 说明输出梯度确有共享方向。

需要提醒的是 GradDot 和余弦变体的方向相关接近 1 很大程度上来自定义本身，因为它们的分数直接用了输出梯度，解释时应更关注其范数相关很弱这一点。也就是说，至少在这套自回归微调配置下，全局层更像是对齐到公共方向，而不是少数大梯度样本主导。结论不能推广到扩散模型，因为后者随去噪时间步变化，需要另外的归因适配。

> **看图路径：** 1. 先看左图同色点是否聚成团，确认流派在该嵌入中可分；2. 再在右图同一版式中看同色点是否仍聚团；3. 对比左右两图判断分数簇是否复述了流派布局

[![原论文 Figure 4.：Generated outputs of MusicGen-S in the CLAP embedding space with UMAP, coloured by genre (left)…](https://arxiv.org/html/2611.08839v1/umap_clap_graddot_musicgen_s.svg)](https://arxiv.org/html/2611.08839v1/umap_clap_graddot_musicgen_s.svg)

*论文图 4。原论文 Figure 4.：“Generated outputs of MusicGen-S in the CLAP embedding space with UMAP, coloured by genre (left) and by the TDA score clusters of GradDot (right).”。*

读图任务是检验分组是否等于流派：先看左图同色是否成团，再看右图同版式下同色是否仍成团。该图确实可见左图同流派点聚成多团，右图同分数簇的点则散布在整个嵌入空间，没有复述左图的团块结构。它直观支持分数簇不同于流派的判断，但这只是一组模型与方法的 2 维投影，定量结论仍以 Wallace 系数为准。

### 分组与特定层是否依赖分组方式的选择？

要回答的比较问题是：TDA 分数簇与流派或声学特征簇的重合度有多高，以及把分组依据从流派换成分数簇后特定层的前排样本变化多大。公平条件是簇数都固定为 12，声学特征经标准化后同样做 k 均值，Wallace 系数只统计同分数簇的生成对中有多少也同特征簇。指标方向是 1 表示完全复述，接近随机基线表示独立分组。

| Genre |  |  |  |
| --- | --- | --- | --- |
| MusicGen-S | 0.103 | 0.201 | 0.081 |
| MusicGen-L | 0.102 | 0.194 | 0.081 |

上表截取原文 Wallace 系数中流派部分的四列对照：模型、GradDot、FactGraSS 与随机基线，完整多特征比较见原文。读数时注意即使最高的 FactGraSS 在 MusicGen-S 流派上也只有 0.201，远低于 1。表后解释给出含义与例外。

结果是所有模型、方法和准则下 Wallace 系数都很低，最大值 0.284 出现在 MFCC 上，流派上 FactGraSS 相对较高但仍很低。这支持分数簇是模型自己形成的关联，而不是流派或简单声学特征的别名。未胜出项也要说明：不同方法之间仍有差异，加权方法有时更高，说明方法选择会影响分组与外部特征的距离。

特定层的敏感性用前 50 名变化比例衡量：对每次生成取按流派分组时的特定层前 50，再看换成分数簇分组后有多少掉出前 50。GradDot 类在 4 种模型上约 0.49 至 0.57，约一半会变化，其他加权方法约 0.20 至 0.36。这意味着特定层不是与分组方式无关的绝对个体贡献，基于它付费时必须同时指明分组依据，否则前排名单会因分组标准而大幅改变。

**Wallace 系数 × 特征簇：** 特征簇指按流派或按 MFCC、对数梅尔谱、色度特征对生成做聚类得到的分组；Wallace 系数指在同一个 TDA 分数簇中的生成对里，有多大比例也落在同一个特征簇中，是配对精度。特征簇提供外部参照，Wallace 系数提供比较口径，两者组合用来回答分数簇是不是换了个名字复述流派或声学特征。

### 这些结论在什么条件下才成立？

第一，全部证据来自自回归音乐模型的微调配置，训练集固定为 30000 个 10 秒片段，生成固定为 480 次，聚类数固定为 12。换数据集规模、换基础模型、换扩散架构或换聚类数，占比和一致性都可能变化，论文没有给出这些外推的保证。

第二，删除检验只覆盖两种归因方法，且每次删除 10% 并重训，报告的是相对随机删除的额外下降。它能证明对应范围有效应，但不能证明总分中的每一分都可按比例折算成钱，也不能回答单样本删除的噪声问题。

第三，分组簇的含义未被识别。论文只证明它不同于流派和 3 种声学特征，没有说明它对应什么音乐属性或训练动力学因素，后续需要补做可解释性验证。特定层依赖分组标准这一点也限制了它的独立使用。

第四，资源消耗不可忽略。微调约 37 个 GPU 小时，删除检验约 830 个 GPU 小时，复现需要按模型准备 A40 或 H100 级别的显存与时间预算。

### 复现第一步做什么，需要哪些条件？

复现应从最小闭环开始：先用同一微调数据和同一提示集得到一批生成，再用一种最简单的方法算出分数矩阵并做标准化和 3 层分解，最后计算占比是否高于随机基线。只有这一步跑通，再进入昂贵的删除重训。

关键超参数和信息条件要保留：训练片段为 10 秒，音频词元在 MusicGen 为每 10 秒 4 乘 500，在 InspireMusic 为每 10 秒 1 乘 750；优化器、学习率、批量与 7500 步的配置按原文附录执行；Trak 投影维度 8192，LoGra 每层 1024，FactGraSS 中间维度 4096；聚类前对分数向量做 L2 归一化，簇数 12。

下表截取原文的计算资源记录，用于估计预算，完整 4 模型对照见原文附录。

| Item | MusicGen-S | MusicGen-L | InspireMusic-Base | InspireMusic-1.5B |
| --- | --- | --- | --- | --- |
| Fine-tuning | 1.0 h | 2.9 h | 2.1 h | 6.2 h |
|  | 3 h | 9 h | 6 h | 19 h |

上表截取微调阶段每轮与 3 种子总耗时，行是耗时类型，列是 4 种模型。可见单轮从 1.0 小时到 6.2 小时不等，3 种子总计 3 小时到 19 小时。该对照表明微调耗时只是小部分，删除检验的重训次数在 MusicGen-S 和 InspireMusic-Base 各 153 次，总计约 140 小时和 275 小时，远大于微调本身，预算应按重训次数规划。

作者资源方面，论文给出匿名代码链接，但按本次来源校验它属于第三方可用链接，不等于作者已公开可运行仓库。代码开源、权重可下载、系统可运行是三件事，不应混为一谈，复现前需分别确认微调脚本、归因实现与模型权重的可得性。

### 什么时候值得尝试这种分解，还缺什么验证？

当报酬或审计需要指明为哪种依赖付费时值得尝试：全局层更接近为训练使用本身付费的一般性补偿，分组层对应模型内部形成的一组生成的共享影响，特定层才接近为某次生成付费。直接用总分付费会把一部分固定分给全局高分样本，分解后至少能把这部分单独列出。

还需要补的验证包括：分组簇的音乐学或训练动力学解释，不同删除比例下的效应曲线，以及更多归因方法与更大生成样本下的稳定性。只有补足这些，才能把占比差异和删除效应转化为可操作的付费规则。

容易产生的误解是把低 Wallace 系数理解为模型没有学到流派。原文嵌入图显示同流派生成在外部编码器空间中确实聚团，只是分数簇不复述这种聚团，两者是不同视角。另一个误解是把占比大等同于因果强，占比只是构成，强度要看删除检验，且两者都只在本文的模型、数据和方法范围内成立。

<details>
<summary>📎 论文与评分元数据</summary>

排名：前50% | 文档类型：方法研究 | [arXiv 原文](https://arxiv.org/abs/2611.08839v1)

</details>

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。

- 评分规则：type-aware-v1

- 评分模型：muse-spark-1.3-contributor

- 评分请求协议：openai_responses

---

[← 返回 2026-11-09 语音/音乐/音频论文速递](/audio-paper-digest-blog/posts/2026-11-09/)
