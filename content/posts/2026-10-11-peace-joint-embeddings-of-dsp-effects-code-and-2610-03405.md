---
title: "PEACE: Joint Embeddings of DSP Effects Code and Audio"
date: 2026-10-11
draft: false
tags: [音频检索, 多模态学习, 音乐信息检索, 图神经网络]
categories: [论文速递]
description: "PEACE 用 SLAP 配对音频编码器与两种 Faust 代码编码器，在 1-3 个效果串联的检索上打平并在外部混响库上远超已有音频表示，代价是长链泛化和弱效果上的不均衡。"
hiddenInHomeList: true
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_arxiv_id: "2610.03405"
paper_digest_workbench_contract: "researcher-workbench-v1"
paper_digest_reader_title: "PEACE：把效果器代码和处理后的音频放进同一个向量空间"
paper_digest_original_title: "PEACE: Joint Embeddings of DSP Effects Code and Audio"
paper_digest_arxiv_version: 1
paper_digest_arxiv_versioned_id: "2610.03405v1"
paper_digest_arxiv_abs_url: "https://arxiv.org/abs/2610.03405v1"
paper_digest_arxiv_pdf_url: "https://arxiv.org/pdf/2610.03405v1.pdf"
paper_digest_primary_task: "音频检索"
paper_digest_tags_contract: "paper-tag-flat-tags-v2"
paper_digest_tags_selection_contract: "paper-tag-selection-v2"
paper_digest_tags_registry_version: "paper-tag-catalog-v2"
paper_digest_tags_registry_sha256: "0a0847314ab2059d95efac33376414498e598a1f02a1486869bee0efc481d1f7"
paper_digest_tags_concepts: [{"facet":"task","id":"task.audio-retrieval","label":"音频检索"},{"facet":"method","id":"method.multimodal-learning","label":"多模态学习"},{"facet":"scientific_topic","id":"scientific_topic.music-information","label":"音乐信息检索"},{"facet":"method","id":"method.gnn","label":"图神经网络"}]
paper_digest_primary_method: "多模态学习"
paper_digest_score: 6.8
paper_digest_rank_bucket: "前50%"
paper_digest_document_type: "方法研究"
paper_digest_one_sentence: "PEACE 用 SLAP 配对音频编码器与两种 Faust 代码编码器，在 1-3 个效果串联的检索上打平并在外部混响库上远超已有音频表示，代价是长链泛化和弱效果上的不均衡。"
paper_digest_authors: [{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"David Braun"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Adam Finkelstein"}]
paper_digest_abstract_sha256: "cf496ff279f376fb504f2225fe39031f107215093873680cc5d09e9bc68d118f"
paper_digest_sidecars: {"citation.bib":{"sha256":"68ee750324bd8b616f0243c1a009229e78b9370a1b136a1605d30b21f327fb0b","url":"/audio-paper-digest-blog/data/papers/2026-10-11/2610-03405/citation.bib"},"citation.json":{"sha256":"2894a13f478fc784bb8221c315e38f1b8cc5e48b352ce0acbb5ea68790857540","url":"/audio-paper-digest-blog/data/papers/2026-10-11/2610-03405/citation.json"},"citation.ris":{"sha256":"d35dbe0eed3e4a249ad5c23d556e6a1b3f2085600111f9a08f0b499aa77cfe8b","url":"/audio-paper-digest-blog/data/papers/2026-10-11/2610-03405/citation.ris"},"rethink-context.json":{"contract":"paper-research-context-v2","sha256":"e8fb0df90249f2c3f0b05d961011d7999b3e5b61faf8e760c3f39e59ad5b327f","url":"/audio-paper-digest-blog/data/papers/2026-10-11/2610-03405/rethink-context.json"}}
paper_digest_api_reader_contract: "beginner-researcher-v3"
paper_digest_api_reader_article_sha256: "1541c5ea4bad96bf006c365ecd97bd1716ab5cc51ce88a15b79776ae3d021171"
paper_digest_api_reader_plan_sha256: "886e9cb7acf9595d1753db20e1a89845ecdc12970f0af4583a63b6f8d5b4f27a"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings-v4"
paper_digest_api_reader_source_bindings_sha256: "3118be5dab7e895c078ae1b42c73d738ec295f528d7fbabfcf6b394ec69e538b"
paper_digest_api_reader_source_table_count: 4
paper_digest_api_reader_source_formula_count: 3
paper_digest_api_reader_structured_artifacts_sha256: "9f73e9cb7ea10f8898298635dccaab0004c13d169afb7007835d18b4f8159b36"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity-v1"
paper_digest_api_reader_author_identity_sha256: "d86ff71dd74977b1ffc870c5ae5a8e35fd47713ede50b93489de4934a7d795c3"
paper_digest_api_reader_author_count: 2
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity-v1"
paper_digest_api_reader_resource_identity_sha256: "c1b047634a435afa1b92e76fbf4a4fdeae38dd9e532d82d338b550f328fa8c32"
paper_digest_api_reader_resource_count: 2
paper_digest_api_reader_figure_persistence: "ephemeral-no-persisted-figure-assets-v1"
paper_digest_api_reader_decision_projection: "api-reader-decision-projection-v2"
---

# 📄 PEACE：把效果器代码和处理后的音频放进同一个向量空间

> 英文题目：*[PEACE: Joint Embeddings of DSP Effects Code and Audio](https://arxiv.org/abs/2610.03405v1)*

> 标签：#音频检索 | #多模态学习 | #音乐信息检索 | #图神经网络
>
> 评分：**6.8/10** | 创新 1.5/2 | 技术严谨 1.2/1.5 | 实验充分 1.2/1.5 | 清晰度 0.8/1 | 影响力 1/1.5 | 开源 0/1.5 | 可复现 0.3/0.5 | 工程/实践 0.8/1.5


## 👥 作者与机构

- David Braun：机构信息未在 arXiv HTML 中可靠披露
- Adam Finkelstein：机构信息未在 arXiv HTML 中可靠披露

## 📌 核心摘要

这篇论文要解决的是听一段加过效果的声音，能否找回生成它的效果器程序，输入是立体声湿声音频和Faust效果器代码，输出是同一向量空间中的嵌入向量，难点在于同一听感可来自不同参数组合，而代码既有离散拓扑又有连续与离散参数。音频侧先把中侧通道对数梅尔谱图送入AFx-Rep卷积编码器得到1024维音频隐向量，代码侧把Faust源码送入微调T5编码器或把Faust编译器中间表示的盒子有向无环图送入BoxGraph图编码器得到各自模态隐向量。两路隐向量再经编码器投影器得到768维投影，在线分支进一步经预测器得到预测，指数滑动平均目标分支只产生停梯度投影，所有投影与预测经L2归一化后计算模态间与模态内余弦距离损失，损失梯度只回流在线分支。推理时用预测输出按余弦相似度做音频到代码或代码到音频检索，其中BoxGraph推理时掩码全部参数即可只保留拓扑。与有监督链分类相比，该表示可直接比较程序之间相似度，不限于固定标签集合。在1831个候选的房间脉冲响应检索中，从零训练的BoxGraph版本用预测输出达到53.5%的R@10，高于同一设置下预训练AFx-Rep的28.3%。结论适用于1到3级合成效果链及混响跨域泛化，更长链、非线性效果和真实工程预设仍未充分验证。训练成本方面，T5从零训练约11.5小时，BoxGraph约8.5小时，均在4张NVIDIA L40上完成。

## 🔗 开源与复现资源

- 第三方资源：<https://github.com/DBraun/PEACE> — 链接可访问（HTTP 200）

- 第三方资源：<https://faustdoc.grame.fr/tutorials/box-api/> — 链接可访问（HTTP 200）

可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 这篇论文要解决的输入输出是什么

论文处理的对象一端是 Faust 效果器代码，另一端是用这段代码渲染出的立体声湿音频。Faust 是一种写音频信号处理的函数式专用语言，论文用的 21 种效果各有 1 到 18 个参数，连续参数归一化到 0 到 1，离散参数取整数。音频端是 10 秒 48 kHz 片段，经过 1 到 3 个效果串联得到。目标是学出两个编码器，把代码和音频映射到同一个向量空间，使得查询一端能用余弦相似度找回另一端。

必须保留的信息有两层，一是拓扑，也就是用了哪几个效果以及它们的先后顺序，二是参数，也就是每个效果旋钮的具体取值。输出不是标签也不是重建波形，而是可比较的向量，支持音频找代码、代码找音频，以及只看拓扑的代码检索。读者可以这样复述，输入是 1 对配对的代码和湿音频，输出是共享空间中的两个向量，评价看跨模态检索能否同时反映拓扑和参数。

### 已有路线为什么没有直接给出代码向量

论文把相关工作分成 4 条线。第一条是音频效果表示，例如 AFx-Rep 做有监督的效果与参数分类，Fx-Encoder++ 从混合中按查询抽效果表示，它们能从湿信号恢复效果信息，但不提供程序之间的相似度，也不做代码到音频检索。第二条是效果链估计，包括有监督分类、自回归图生成、图剪枝和迭代反演，输出是固定标签集合或图，而不是可比较的嵌入，换一套新的效果组合就需要重新设计标签。

第三条是文本控制效果，用自然语言描述如冷洞穴中的闪亮混响，或用大语言模型预测参数，但自然语言会丢失区分不同配置的细节，且已有联合嵌入对温暖这类听感方向的编码并不可靠。第 4 条是代码表示，例如 GraphCodeBERT 和 CodeT5+ 主要面向通用语言，Sonic Pi 代码与音频的联合嵌入面向生成声音的程序而非处理声音的效果器，且词元化会把数字切碎导致参数变化不敏感。PEACE 的位置是第一次把效果器代码和输出音频直接配对，代码侧同时保留结构和参数值。

### 为什么直接回归参数是困难的

论文强调直接回归参数是不适定的。很多不同的设置可以产生听感上无法区分的输出，例如把时不变效果调换顺序后输出不变。举例来说，假如链条是均衡加混响，在线性时不变近似下交换顺序结果相近，那么只听湿音频就无法唯一确定顺序和参数，例子只是帮助理解交换顺序的思想，不增加新的数值。分类方法避开了不适定，但只能输出见过的固定类别，无法比较两个没见过的新程序。生成方法输出图结构，但不给出程序之间的距离。

PEACE 选择检索式嵌入，把不适定转化为相似度排序，允许 1 对多和近似正确，例如顺序不同但效果集合相同的链条在顺序容忍指标下也算对。这种选择决定了后文的评价方式，全部用召回率和排序名次，而不是参数均方误差。研究生复述时要记住，论文不是要精确还原旋钮数值，而是要让正确的代码排在前面。

### 整体流程如何把一对样本变成对齐的向量

训练时每次读入 1 对 Faust 代码和对应的立体声湿音频。代码走代码编码器，音频走音频编码器，各自得到模态相关隐变量后再投影到共享维度。每个模态都有在线分支和目标分支，在线分支多一个预测器，目标分支权重是在线权重的指数滑动平均且停止梯度。损失是 4 个余弦距离之和，包括音频预测对代码目标、代码预测对音频目标，以及两个模态内部的预测对目标。

推理时不再用目标分支，只用在线的预测输出 q 做余弦相似度比较，查询可以是音频或代码，候选库是另一模态的向量集合。示意图展示了这种双模态双分支结构，左侧是两种输入，中间是编码器与预测器，右侧是 4 个损失项的连接，停止梯度标记表示梯度只流过预测器进入在线分支。

读图时可按输入到输出再到损失的顺序看：上半是音频通路，下半是代码通路，每条通路都有上下两行分别对应在线与滑动平均目标，右侧虚线是 4 个对齐方向。

> **看图路径：** 1. 先看左侧音频频谱和 Faust 代码两个输入分别进入上下两条通路；2. 再看每条通路的在线编码器与下方 EMA 目标编码器的对应关系；3. 最后看右侧四个虚线损失项如何把一侧的预测连向另一侧的停止梯度目标

[![原论文 Figure 1：SLAP architecture. Each modality’s online branch pairs encoder-projector \\mathcalE_M (producing…](https://arxiv.org/html/2610.03405v1/SLAP-architecture.png)](https://arxiv.org/html/2610.03405v1/SLAP-architecture.png)

*论文图 1。原论文 Figure 1:：“SLAP architecture. Each modality’s online branch pairs encoder-projector \mathcalE_M (producing y_M then z_M) with predictor \mathcalP_M to produce q_M.”。*

图中上方音频频谱进入编码器后得到投影再经预测器得到预测，下方代码块进入代码编码器同样得到投影和预测，中间虚线标出 EMA 关系，右侧虚线标出模态内和跨模态 4 个损失，目标侧带有停止梯度符号，说明梯度不更新目标分支。这种结构的好处是不需要在同一训练批次内准备负样本，也允许梯度累积，且论文引用前人结论称其模态间隙更小。

### 音频编码器做了什么

音频编码器沿用 AFx-Rep 结构而不改动。AFx-Rep 是论文采用的卷积音频编码器，负责把湿音频变成向量。主干是 77.6M 参数的 CNN14，同时处理中侧通道的对数梅尔谱，权重共享后再接各自的多层感知头，输出两个 512 维并做归一化，拼接成 1024 维的音频隐变量。论文比较 3 种初始化，分别是冻结 ST-ITO 权重、微调和从零训练。输入处理上为了效率预先计算中侧对数梅尔谱与 AFx-Rep 隐变量，所有 PEACE 模型和分类器对这些对数梅尔谱做补零，预训练 AFx-Rep 保持其反射填充。

湿音频在渲染后归一化到 -18 LUFS，使得编码器不能靠压缩或失真带来的响度线索作弊。理解这一点很重要，后文混响检索的提升不能解释为记住了响度，而是对混响尾巴等结构的敏感度变化。

**AFx-Rep × SLAP：** AFx-Rep 是处理湿音频的卷积音频编码器，负责把音色和效果痕迹变成向量；SLAP 是非对比的双分支配对目标，负责让音频向量和代码向量互相能预测对方而不依赖同一训练批次内的负样本；两者搭配后，AFx-Rep 提供效果敏感的起点，SLAP 提供跨模态对齐的监督，组合起来得到既懂音频又能对应代码的共享空间。

### T5 代码编码器如何读源代码

第一种代码编码器是对最小的 T5.1.1 编码器做微调，参数约 35M，直接读 Faust 源代码文本并用默认词元化。T5 在这里指通用的文本 Transformer 编码器。论文特意不用 CodeT5+ 或 GraphCodeBERT 这类代码预训练模型，理由是它们没有在 Faust 上预训练。实践中找到的最好设置是对词元做平均池化而不是取起始符向量，把浮点数四舍五入到 2 位小数，并保留参数注释。训练时在前馈、残差、注意力权重和模块输入输出上加 10% 丢弃，但不用 T5 式的哨兵词元做参数掩码。

推理时若要屏蔽参数，做法是把参数字面量所在词元的注意力掩码置零，使其不参与池化。这种文本路线的好处是通用，能处理任意长度的链条，代价是数字仍是文本，参数的数值连续性需要靠端到端训练去弥补。

### BoxGraph 如何把盒子组合变成向量

第二种代码编码器 BoxGraph 是 15.5M 参数的图神经网络，操作对象是 Faust 编译器 Box API 中的盒子。盒子是有已知输入输出通道数的信号处理函数，例如常数 0.1 是 0 进 1 出，直通线是 1 进 1 出，立体声总线是 2 进 2 出，带两个参数的立体声混响是 4 进 2 出。组合靠块图代数，论文只用并联 par 和串联 seq，留下拆分、合并和递归给未来工作。并联把混响的两个参数和立体声总线并成 2 到 4，串联再把结果送进混响得到 4 到 2，最终形成 2 到 2 的完整效果。

图是有向无环图，节点是盒子，边从孩子指向父亲，根是完整程序，叶子包括参数、连线、总线和库函数等，库函数虽内部也是盒子图但被当作原子。示意图用一个混响例子展示这种函数式组合，节点标出输入输出签名，边标出参数位置，与传统音频处理器连线图不同，每一步组合都产生新的类函数盒子。

读图时可先区分图例中的参数、总线、组合与库函数，再看两个参数节点如何汇入并联节点，最后看并联与库函数如何经串联得到完整程序，注意每条边上的位置编号。

> **看图路径：** 1. 先看参数节点、总线节点和库函数节点的输入输出签名；2. 再看边上的数字如何表示作为 par 或 seq 的第几个参数；3. 最后看组合节点如何从 2 到 4 收敛到 2 到 2 的完整程序

[![原论文 Figure 2：BoxGraph of a stereo effect where reverb is defined in the library.](https://arxiv.org/html/2610.03405v1/boxgraph_example.svg)](https://arxiv.org/html/2610.03405v1/boxgraph_example.svg)

*论文图 2。原论文 Figure 2:：“BoxGraph of a stereo effect where reverb is defined in the library.”。*

图中顶部代码是混响带两个参数的调用，两个参数节点分别以边 0 和边 1 进入并联节点，立体声总线以边 2 进入同一并联节点，混响库函数以边 1 与并联结果经串联节点汇合，最终签名回到立体声。节点特征维度是 1024，参数节点把类型嵌入与值嵌入拼接起来后再做投影，连续值先重映射到 -1 到 1 再线性投影，离散参数在效果库中的位置各自拥有一张嵌入表，每个位置的表还多留一行给掩码符号，DSP 节点把类型嵌入与库函数词表嵌入拼接起来后再做投影，其他叶子只用类型嵌入。训练时每个参数值以 10% 概率被掩码，推理时可全部掩码以只保留拓扑。

**T5 × BoxGraph：** T5 是直接读 Faust 源代码文本的 Transformer 编码器，靠词元序列建模结构和参数；BoxGraph 是读 Faust 编译器中间表示 Box API 的图神经网络，靠节点和组合边建模信号处理函数如何拼接；两者分工是文本视角对函数组合视角，搭配比较后能看出通用文本编码与专用结构编码在参数敏感度和长链泛化上的差异。

消息传递共 4 层且权重共享，边上带位置嵌入，每层对孩子做变换后取逐元素最大值聚合，再与本节点初始特征拼接更新，且每层都重新注入初始特征而不沿用上一层隐状态，处理更大图时把层数长到图的直径以保证信息到达。池化时只对串联组合节点和 DSP 节点取平均再线性投影到 512 维，论文称这比全节点平均或只取根节点更好。

\[y_{C}=\text{Linear}\Big(\frac{1}{|V_{s}|}\sum_{v\in V_{s}}h_{v}^{(L)}\Big).\]

上式是 BoxGraph 的池化，含义是对选出的串联与 DSP 节点取平均后再线性投影，得到代码侧隐变量，符号下标含义与正文一致。

**par × seq：** par 是把多个盒子并排摆放的组合算子，例如把两个参数和立体声总线并成四通道；seq 是把前后两个盒子串联的组合算子，例如把并好的输入送进混响；两者分工是拓宽通道与前后连接，组合起来才能表达出论文中从 2 到 4 再到 2 到 2 的立体声效果完整签名。

### SLAP 目标如何更新两条分支

SLAP 目标的记号需要先讲清。SLAP 是论文采用的非对比配对目标，每个模态的编码器加投影器输出模态相关隐变量再投影到共享维，在线分支再过预测器得到预测，所有投影和预测都做归一化。目标分支只输出停止梯度的投影，没有预测器。目标权重是在线权重的指数滑动平均，衰减系数为 0.98。损失是两个跨模态项与两个模态内项的加权和，权重取 0.5，论文沿用前人认为最优的值。

关键是这是非对比的自举目标，不需要在同一训练批次内准备负样本，匹配的是在线预测与另 1 分支的停止梯度目标，梯度只流过预测器进入在线分支，不更新目标分支。这种不对称加滑动平均的设计用来避免表示坍缩。

\[\bar{\theta}_{M}\leftarrow\tau\bar{\theta}_{M}+(1-\tau)\theta_{M}.\]

上式是目标权重的滑动平均更新，当前目标保留大部分历史，只混入小部分在线权重。

\[\mathcal{L}=\lambda\big(\mathcal{L}_{A\to C}+\mathcal{L}_{C\to A}\big)+(1-\lambda)\big(\mathcal{L}_{A}+\mathcal{L}_{C}\big)\]

上式是总损失，前面两项是跨模态预测，括号里后两项是模态内预测，加权系数平衡两者。

**在线分支 × 目标分支：** 在线分支是由编码器加投影器再加预测器组成的可训练通路，输出预测向量 q；目标分支是由在线权重指数滑动平均得到的编码器加投影器通路，输出停止梯度的目标向量；两者搭配的意义是让在线预测去拟合另一侧的停止梯度目标，用不对称和滑动平均避免坍缩，而不需要推远不配对样本。

训练超参数方面，每个共享结构的双分支的投影器是 768 宽单隐层感知机，预测器是 4096 宽单隐层感知机，带修正线性单元和丢弃，共享维度 768，含头的音频加 BoxGraph 约 108M 参数。训练 50000 步，有效批次 256，用 AdamW，权重衰减 6×10−4，2000 步线性热身，峰值学习率 2×10−4，余弦衰减到 10−4，按验证集平均倒数排名选模型。在 4 张 L40 上，从零训练的音频加 T5 约 11.5 小时，加 BoxGraph 约 8.5 小时。

### 数据如何构造与划分

数据集是 200K 训练、8192 验证、4096 测试的音频代码对。训练验证的干声覆盖贝斯、鼓、吉他、乐器、多轨录音分轨、音乐、钢琴、歌声、语音 9 类，来自 23 个公开数据集，测试沿用 AFx-Rep 的鼓、吉他、歌声和语音划分。每个效果随机采样参数直到在白噪声参考上响度变化在正负 35 响度单位内，得到 30K 训练、4096 验证、4096 测试预设，再经 DawDreamer 渲染 10 秒片段，串联 1 到 3 个效果且长度均匀，剔除响度超出 -40 到 40 的片段直到凑够数量。湿音频归一化后不能靠响度作弊。

评价用召回率、归一化排名的中位数和均值，检索打分用预测输出而不是投影输出。还报告间隙距离、模态可分性和内容可分性，分别用质心欧氏距离和线性探针准确率衡量，越低表示共享越紧、越不泄露模态与内容。内容探针按干声文件路径分组交叉验证，避免记住同一片段。

**音频到代码检索 × 代码到音频检索：** 音频到代码检索是以一段湿音频为查询，在代码库中找最相似的效果程序；代码到音频检索反过来以代码为查询找最相似的音频；两者共用余弦相似度和同一共享空间，搭配评估才能看出对齐是否双向一致，而不是只有一个方向偶然变好。

### 混合链长的跨模态检索谁占优

主结果比较链长 1 到 3 混合库上的双向检索，公平条件是同一音频结构和同一训练步数，指标越大越好的召回率与越小越好的排名一起看。音频从零训练时，微调 T5 在音频到代码上略领先，BoxGraph 在代码到音频上略领先，若要求 T5 也从零训练则不如 BoxGraph。模态间隙指标与前人 SLAP 的结论一致，T5 配对的模态可分性低于 BoxGraph，内容可分性都在 50% 出头，接近随机，说明嵌入对声源内容基本不变，这是期望的性质。研究生应注意，数值相同不代表同一指标，召回率与排名方向相反，不能只看一侧。

下表比较的问题是混合链长下两种代码编码器是否双向一致，公平条件是音频侧同为从零或微调，指标方向是召回率越高越好、排名与间隙越低越好，符号下标中 A 表示音频、C 表示代码，q 表示预测输出。

| Audio Encoder | Code Encoder | Audio →\rightarrow Code | Audio →\rightarrow Code | Audio →\rightarrow Code | Audio →\rightarrow Code | Code →\rightarrow Audio | Code →\rightarrow Audio | Code →\rightarrow Audio | Code →\rightarrow Audio | Gap (↓) | Separability (↓) | Separability (↓) |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
|  |  | Recall (↑) | Recall (↑) | Norm. rank (↓) | Norm. rank (↓) | Recall (↑) | Recall (↑) | Norm. rank (↓) | Norm. rank (↓) |  |  |  |
|  |  | @1 | @10 | Med. | Mean | @1 | @10 | Med. | Mean | Dist. | Mod. | Source |
| AFx-Rep (scratch) | T5 (scratch) | 41.2 | 71.9 | 0.02 | 1.5 | 41.3 | 71.4 | 0.02 | 1.2 | 0.07 | 72.2 | 56.2 |
| AFx-Rep (scratch) | T5 (fine-tune) | 50.6 | 78.1 | 0.00 | 1.1 | 48.4 | 76.3 | 0.02 | 1.0 | 0.07 | 74.0 | 57.0 |
| AFx-Rep (scratch) | BoxGraph | 48.5 | 77.7 | 0.02 | 1.0 | 50.8 | 77.5 | 0.00 | 0.8 | 0.06 | 80.4 | 58.5 |
| AFx-Rep (fine-tune) | T5 (scratch) | 46.9 | 74.9 | 0.02 | 2.5 | 46.9 | 76.1 | 0.02 | 1.5 | 0.11 | 81.6 | 54.4 |
| AFx-Rep (fine-tune) | T5 (fine-tune) | 45.0 | 74.5 | 0.02 | 2.0 | 44.3 | 73.2 | 0.02 | 1.2 | 0.11 | 78.1 | 55.9 |
| AFx-Rep (fine-tune) | BoxGraph | 47.6 | 77.5 | 0.02 | 1.3 | 48.0 | 76.3 | 0.02 | 1.0 | 0.09 | 80.3 | 56.6 |

T5 端到端训练能在一定程度上克服此前工作中词元化切碎数字的问题，至少在保留 2 位小数时如此，但这依赖微调带来的先验。BoxGraph 在代码到音频上略强，可能因为图结构直接编码了组合顺序。代价是 BoxGraph 的模态可分性更高，说明音频与代码质心仍有可线性区分的残留。限制是该表只覆盖训练分布内的 1 到 3 链长，不能推广到更长链条。

### 链长变长后哪种编码器掉得更慢

这一节回答训练分布外的泛化问题。测量对象是同一 1024 候选库下链长从 1 到 8 的双向召回率，比较方法是固定模型只改变渲染链长，条件一致，指标方向是召回率越高越好。训练区间内两者基本打平且在 3 处达到峰值，论文推测任务从识别参数转向识别效果。超出训练分布后 T5 缓慢下降，BoxGraph 下降更快，到 8 时 BoxGraph 的 R@10 从 3 处的 90% 中段掉到 60% 出头，而 T5 仍保持在 85% 以上。下面的曲线图展示了这种分叉，阴影是训练见过的 1 到 3，之后是泛化区。

读图时可先看横轴链中效果个数与纵轴召回百分比，再看阴影内是否重合，最后看阴影外谁更平，R@10 整体高于 R@1 是正常现象。

> **看图路径：** 1. 先看横轴链长从 1 到 8 以及训练区间 1 到 3 的划分；2. 再比较训练区间内两条 R@10 曲线是否基本重合；3. 最后看超过 3 之后 BoxGraph 的下降速度是否明显快于 T5

[![原论文 Figure 3：Retrieval vs. chain length N (gallery size 1024).](https://arxiv.org/html/2610.03405v1/per_num_effects_retrieval.svg)](https://arxiv.org/html/2610.03405v1/per_num_effects_retrieval.svg)

*论文图 3。原论文 Figure 3:：“Retrieval vs. chain length N (gallery size 1024). Shaded region marks chain lengths seen during training.”。*

图中横轴为 1 到 8，纵轴为 0 到 100，训练区间内两类编码器的 R@10 曲线接近且在 3 附近最高，超过 3 后 BoxGraph 的 R@10 与 R@1 下降更陡，T5 相对平坦。在 1 处召回高于单效果表，因为区分不同效果类型比区分同一效果内的参数更容易。限制是训练只见过短链，论文称在更长链上训练可能改善两者，因此不能断言 BoxGraph 结构上必然不适合长链。

### 单效果库内哪些效果容易哪些难

单效果实验把候选库限定为同一效果的不同参数，比较问题是参数敏感度在不同效果上是否一致，公平条件是库大小同为 1024，指标是双向平均后的 R@1 与 R@10，越高越好，随机基线约 0.1% 与 1.0%。总体 T5 在 R@1 与 R@10 上略领先，R@10 上 BoxGraph 赢下 21 种中的 11 种，包括压缩、失真、门限和限制器等动态与非线性类，而 T5 赢下多数时间类如合唱、延迟、镶边、相位、反向回声和 5 种混响中的 3 种。时间类整体最高，可能与音频前端是对数梅尔谱有关，非线性与动态类可能需要时域编码器。

声像类是反例，中侧谱无法区分等量左偏与右偏。门限、限制器和立体声宽度存在硬天花板，原文是限制器对轻声输入、门限对响声输入可能不改变音频，这只是可能不改变，不是对触发机制的证明，单声道输入不受宽度影响。

下表比较的问题是同一效果内参数检索的难易分布，公平条件是同库大小同音频起点，指标方向是越高越好。

|  | R@1 (↑) | R@1 (↑) | R@10 (↑) | R@10 (↑) |
| --- | --- | --- | --- | --- |
| Effect | Box | T5 | Box | T5 |
| AutoPan | 20.6 | 19.5 | 62.8 | 60.7 |
| Chorus | 27.7 | 34.5 | 74.4 | 78.3 |
| Compressor | 2.5 | 2.6 | 16.8 | 14.6 |
| Delay | 31.2 | 35.1 | 71.4 | 74.2 |
| Distortion | 4.6 | 3.7 | 21.0 | 20.8 |
| EQ | 5.7 | 4.8 | 23.1 | 19.2 |
| Filter | 6.2 | 4.6 | 22.1 | 20.1 |
| Flanger | 29.5 | 31.8 | 74.1 | 77.1 |
| Gate | 0.3 | 0.1 | 2.7 | 2.3 |
| KlonCentaur | 3.0 | 2.1 | 18.7 | 16.0 |
| Limiter | 0.5 | 0.2 | 2.8 | 2.4 |
| Panner | 1.1 | 2.8 | 7.9 | 8.6 |
| Phaser | 28.8 | 25.1 | 68.3 | 68.9 |
| PitchShift | 11.5 | 9.8 | 48.3 | 44.1 |
| ReverbDattorro | 29.5 | 34.6 | 70.8 | 76.7 |
| ReverbFreeverb | 43.5 | 42.4 | 84.5 | 84.1 |
| ReverbSpring | 34.5 | 35.7 | 74.8 | 74.4 |
| ReverbVital | 18.0 | 26.3 | 52.8 | 64.2 |
| ReverbZita | 45.1 | 54.8 | 83.4 | 87.7 |
| ReverseEcho | 7.9 | 9.2 | 49.2 | 54.1 |
| StereoWidth | 0.2 | 0.2 | 0.9 | 1.0 |
| Overall | 16.8 | 18.1 | 44.3 | 45.2 |

这不是代码编码器的胜负表，而是音频表示的路线图。混响与延迟的高分支持当前频谱前端对混响尾巴和重复结构敏感，压缩与失真的低分提示需要补充时域或包络信息，声像的低分直接指向中侧表示丢失左右方向。这些结论只在当前数据与前端下成立，换前端或加数据后可能变化。

### 外部混响库能否证明音频端真的懂混响

混响检索是与训练无关的音频内检索，用 1831 个来自 4 个专业混响插件的立体声房间脉冲响应，与训练用的 Faust 混响无关，干声用 jaCappella 的 250 条旋律人声，每个脉冲响应卷积两条不同的人声，给定一条湿声要在 1831 候选中找出同一脉冲响应的另一条。比较对象包括端到端 PEACE、冻结 AFx-Rep 加 SLAP、预训练 AFx-Rep、Fx-Encoder++ 和 LAION-CLAP，指标是 R@1 与 R@10 越高越好。结果是端到端 BoxGraph 的预测输出达 53.5% R@10，远超预训练 AFx-Rep 的 28.3% 和两个 CLAP 基线的约 11%，冻结 AFx-Rep 时跨模态 SLAP 仍把 R@10 从 28.7% 提到 38.6%，说明不更新音频主干也能靠对齐改善混响理解。

下表比较的问题是分布外混响的音频内检索能力，公平条件是同一 1831 库与同一人声渲染规则，指标方向是越高越好，其中 y 表示编码器隐变量，q 表示预测输出。

|  |  | R@1 (↑) | R@1 (↑) | R@10 (↑) | R@10 (↑) |
| --- | --- | --- | --- | --- | --- |
| Model | Code | yAy_{A} | qAq_{A} | yAy_{A} | qAq_{A} |
| PEACE scratch | BoxGraph | 19.4 | 23.1 | 50.6 | 53.5 |
| PEACE scratch | T5 | 18.4 | 19.1 | 46.5 | 48.3 |
| PEACE frozen | BoxGraph | 8.1 | 13.9 | 28.7 | 38.6 |
| PEACE frozen | T5 | 8.1 | 13.4 | 28.7 | 36.6 |
| AFx-Rep | – | 8.4 | – | 28.3 | – |
| Fx-Encoder++ | – | 2.3 | 2.3 | 11.6 | 10.9 |
| LAION-CLAP | – | 1.8 | 1.8 | 10.7 | 10.2 |

有两个已支持的发现。第一，联合训练的音频端确实学到效果相关的音色，呼应前人称联合语言音频嵌入对效果音色编码弱的判断，但本表只测混响，不能推广到压缩等其他效果。第二，对 PEACE 模型而言，用预测输出做检索优于用隐变量，Fx-Encoder++ 与 LAION-CLAP 表行没有显示这种改善，不能把该规律推广到全部模型。限制是该基准只覆盖混响，且人声与插件都与训练不同，结论成立的条件是混响尾巴主导的任务，换效果类型需另测。

### 屏蔽参数后能否只找回拓扑顺序

链条检索回答拓扑理解问题。从 21 种效果中枚举 420 个有序二元组，不含同一效果连续重复，推理时屏蔽全部参数值，BoxGraph 屏蔽参数值嵌入，T5 把参数字面量词元的注意力掩码置零。音频查询用留出预设在测试音频上渲染，共 1680 条覆盖 4 种声源，用预测输出的余弦相似度检索。有监督基线是在同一音频臂上加 441 类交叉熵分类器，只评其中 420 个二元组，还包括从 PEACE 热启动的变体。

指标分严格顺序正确与顺序容忍正确，后者只要效果集合对就算对，部分原因是线性时不变效果可交换而不改变输出。结果是无监督检索中 BoxGraph 达 17.4% R@1 与 61.4% R@10，超过 T5 的 12.4% 与 43.2%，顺序容忍下升到 27.2% 与 67.4%。有监督在音频从零训练时达 21.4%，热启动相近且收敛更快，冻结时与 BoxGraph 打平。检索的优势是可扩展到更长链，而分类局限于训练见过的固定标签。

下表比较的问题是无参数信息时有序拓扑的可恢复性，公平条件是同一 420 库与同一屏蔽规则，指标方向是越高越好，随机基线为 0.24% 与 2.4%。

|  | Exact (↑) | Exact (↑) | Order-tolerant (↑) | Order-tolerant (↑) |
| --- | --- | --- | --- | --- |
| Method | R@1 | R@10 | R@1 | R@10 |
| Retrieval (no chain supervision) | Retrieval (no chain supervision) | Retrieval (no chain supervision) | Retrieval (no chain supervision) | Retrieval (no chain supervision) |
| AFx-Rep frozen + Box | 12.6 | 48.7 | 19.5 | 56.8 |
| AFx-Rep scratch + Box | 17.4 | 61.4 | 27.2 | 67.4 |
| AFx-Rep scratch + T5 | 12.4 | 43.2 | 20.7 | 49.1 |
| Supervised classifier (cross-entropy) | Supervised classifier (cross-entropy) | Supervised classifier (cross-entropy) | Supervised classifier (cross-entropy) | Supervised classifier (cross-entropy) |
| AFx-Rep frozen | 12.7 | 50.7 | 21.0 | 61.1 |
| AFx-Rep scratch | 21.4 | 65.9 | 32.6 | 73.6 |
| AFx-Rep fine-tune | 20.2 | 65.2 | 31.4 | 72.3 |
| PEACE Box init | 21.1 | 62.9 | 31.6 | 70.0 |

检索远超随机且 BoxGraph 明显好于 T5，支持图结构对顺序更敏感的判断，但最好检索仍低于最好监督，说明无监督对齐尚未完全替代标签。监督行是 3 随机种子的平均，R@1 波动可达 4.9 个百分点，因此小差距不宜过度解读。未胜出项是 T5 在此任务上全面落后，提示文本池化在屏蔽参数后丢失顺序线索更多。尚未评测的是三元以上长链的拓扑检索，不能从二元组直接外推。

### 这些结论在什么条件下才成立

论文自述三处仿真到现实的差距。参数随机采样而非人工预设，预设与声源随机配对，声源本身不总是完全干声。这些决定了训练分布与真实制作习惯不同，结论只在随机预设与随机配对下测得。单效果方差提示数据质量与音频编码器仍需改进，分布外评估只做了混响，没有覆盖压缩、失真等插件效果，也没有用户研究。因此混响检索的领先不能推广为所有效果的领先，混合链检索的打平只在 1 到 3 链长与 1024 库下测得，长链泛化只测到 8。

此外监督分类的种子波动较大，跨表比较时要对齐音频初始化、代码初始化、库大小和是否屏蔽参数，否则数值相同也可能是不同指标。缺证据不等于技术有错，只是说明还需要补验证。

### 复现第一步要准备什么

复现先按论文的渲染管线准备数据，而不是找现成特征跳过渲染。需要 Faust 效果库、DawDreamer 渲染、干声划分与响度筛选逻辑，按 200K 训练与数千验证测试的规模生成配对，再做中侧对数梅尔谱。模型侧需要 AFx-Rep 的 CNN14 结构、T5.1.1 最小编码器或 BoxGraph 的图构建，BoxGraph 要实现类型嵌入、库函数嵌入与参数值嵌入的拼接投影，以及只用串联节点与 DSP 节点平均的池化。训练按 SLAP 双分支实现滑动平均与停止梯度，批次 256 训练 50000 步，用验证集平均倒数排名选模型。

检索时记得用预测输出打分，屏蔽参数时 BoxGraph 替换掩码向量而 T5 置零注意力掩码。论文中提到的代码链接本次可达，权重与交互工具的公开情况尚无法确认，完整系统的可用性也尚无法确认，需要以作者后续声明为准。

### 什么时候值得尝试还缺哪些验证

当任务是按声音找效果配置、按代码找相似声音，或想在不知道参数时先猜链条拓扑再做参数搜索，PEACE 值得尝试。已有证据支持的用法包括用 BoxGraph 做顺序敏感的拓扑检索，用 T5 做长链泛化更好的混合检索，以及用 SLAP 对齐改进冻结音频表示的混响理解。复现第一步是跑通 1 到 3 链的双向检索并复刻混响基准的相对顺序，而不是直接调长链。

还需要补的验证是更广的插件效果分布外测试、人工预设与真实干声下的数据、时域前端对动态类的提升，以及用户听感与参数搜索闭环的端到端收益。未来工作提到扩展拆分合并递归算子、模块合成节点，以及把嵌入用于风格迁移、干声恢复和混音条件，但这些只是方向，没有本篇证据支撑，尝试时应另设对照。

<details>
<summary>📎 论文与评分元数据</summary>

排名：前50% | 文档类型：方法研究 | [arXiv 原文](https://arxiv.org/abs/2610.03405v1)

</details>

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。

- 评分规则：type-aware-v1

- 评分模型：muse-spark-1.3-contributor

- 评分请求协议：openai_responses

---

[← 返回 2026-10-11 语音/音乐/音频论文速递](/audio-paper-digest-blog/posts/2026-10-11/)
