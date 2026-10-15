---
title: "X-AVDD: Cross-Attentive Audio-Visual Dataset Distillation"
date: 2026-10-15
draft: false
tags: [音视频理解, 音频分类, 多模态学习, 注意力机制]
categories: [论文速递]
description: "X-AVDD 针对配对音频-视觉数据集蒸馏，用先训练带双向交叉注意力的教师模型再按类匹配交叉注意力后嵌入的方法合成每类少量样本，在四个音频-视觉事件识别基准上提高小数据训练精度，并把合成总耗时从 10 小时降到 1.3 小时。"
hiddenInHomeList: true
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_arxiv_id: "2610.13687"
paper_digest_workbench_contract: "researcher-workbench-v1"
paper_digest_reader_title: "用很少的配对样本保留声音和画面的对应关系：X-AVDD 解读"
paper_digest_original_title: "X-AVDD: Cross-Attentive Audio-Visual Dataset Distillation"
paper_digest_arxiv_version: 1
paper_digest_arxiv_versioned_id: "2610.13687v1"
paper_digest_arxiv_abs_url: "https://arxiv.org/abs/2610.13687v1"
paper_digest_arxiv_pdf_url: "https://arxiv.org/pdf/2610.13687v1.pdf"
paper_digest_primary_task: "音视频理解"
paper_digest_tags_contract: "paper-tag-flat-tags-v2"
paper_digest_tags_selection_contract: "paper-tag-selection-v2"
paper_digest_tags_registry_version: "paper-tag-catalog-v2"
paper_digest_tags_registry_sha256: "cdef54423b5dfc00a1d017ef6639446d2ecd1d9c1acf71c8eb4f6219a46b7ba8"
paper_digest_tags_concepts: [{"facet":"task","id":"task.av-understanding","label":"音视频理解"},{"facet":"task","id":"task.audio-classification","label":"音频分类"},{"facet":"method","id":"method.multimodal-learning","label":"多模态学习"},{"facet":"method","id":"method.attention","label":"注意力机制"}]
paper_digest_primary_method: "多模态学习"
paper_digest_score: 6.2
paper_digest_rank_bucket: "前50%"
paper_digest_document_type: "方法研究"
paper_digest_one_sentence: "X-AVDD 针对配对音频-视觉数据集蒸馏，用先训练带双向交叉注意力的教师模型再按类匹配交叉注意力后嵌入的方法合成每类少量样本，在四个音频-视觉事件识别基准上提高小数据训练精度，并把合成总耗时从 10 小时降到 1.3 小时。"
paper_digest_authors: [{"affiliations":["Department of Artificial Intelligence, Indian Institute of Technology Hyderabad"],"name":"Saumyaranjan Mohanty"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Aravind Reddy"},{"affiliations":["Department of Artificial Intelligence, Indian Institute of Technology Hyderabad"],"name":"Konda Reddy Mopuri"}]
paper_digest_abstract_sha256: "2057d8086126aa066c4e4b14f0469a4028d31be2bef023496e221064cbe49544"
paper_digest_sidecars: {"citation.bib":{"sha256":"c3f45b7f2091ecbc7898490d94cab6602a7b72b225fddd1bd13623cbf1e1b7d4","url":"/audio-paper-digest-blog/data/papers/2026-10-15/2610-13687/citation.bib"},"citation.json":{"sha256":"859b2782304220698d3cfe3a1e5b0a1be851be168d3e15541f35fb5dde9251b3","url":"/audio-paper-digest-blog/data/papers/2026-10-15/2610-13687/citation.json"},"citation.ris":{"sha256":"14791ad2bb3d8949e647f3a235fa996e19268bf269af7cfee3b13406edc3d8a1","url":"/audio-paper-digest-blog/data/papers/2026-10-15/2610-13687/citation.ris"},"rethink-context.json":{"contract":"paper-research-context-v2","sha256":"beac3474103351071df00646fc83059b8fbfd0c18de77dd83085bd443dc7e4a1","url":"/audio-paper-digest-blog/data/papers/2026-10-15/2610-13687/rethink-context.json"}}
paper_digest_api_reader_contract: "beginner-researcher-v3"
paper_digest_api_reader_article_sha256: "fd0d6e6c809dc66c1a26b4f9322acd73b13cc26e5f905f07d0d9fd2bbc78457f"
paper_digest_api_reader_plan_sha256: "0daddfdc352326d6a808141e01ed7ecffe41c6849f67d21a48d9b9ecd17ffafe"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings-v4"
paper_digest_api_reader_source_bindings_sha256: "d8b717d316f4a33d9fb731893a19783b3bd68f0d4d1ba41daf578606dac6bf94"
paper_digest_api_reader_source_table_count: 4
paper_digest_api_reader_source_formula_count: 4
paper_digest_api_reader_structured_artifacts_sha256: "03340410aa520332428ed66a94123d7e31d76fe95d889d330e1fb73732039358"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity-v1"
paper_digest_api_reader_author_identity_sha256: "fac77c9235a07e48309544508580d610bac0541d7bcc4bbf6fe2756f84ce2261"
paper_digest_api_reader_author_count: 3
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity-v1"
paper_digest_api_reader_resource_identity_sha256: "9f6e3790957808acdead932ac538597b23a4ad32c42e812bcaf57e6f682a49ee"
paper_digest_api_reader_resource_count: 0
paper_digest_api_reader_figure_persistence: "ephemeral-no-persisted-figure-assets-v1"
paper_digest_api_reader_decision_projection: "api-reader-decision-projection-v2"
---

# 📄 用很少的配对样本保留声音和画面的对应关系：X-AVDD 解读

> 英文题目：*[X-AVDD: Cross-Attentive Audio-Visual Dataset Distillation](https://arxiv.org/abs/2610.13687v1)*

<!--paper-tag-hierarchy-v1:start-->

**研究分类**

- **研究任务**：[音视频理解](/audio-paper-digest-blog/papers/?concept=task.av-understanding)；[音频分类](/audio-paper-digest-blog/papers/?concept=task.audio-classification)
- **研究方法**：[多模态学习](/audio-paper-digest-blog/papers/?concept=method.multimodal-learning)；[注意力机制](/audio-paper-digest-blog/papers/?concept=method.attention)

<!--paper-tag-hierarchy-v1:end-->

> 评分：**6.2/10** | 创新 1.2/2 | 技术严谨 1/1.5 | 实验充分 1.2/1.5 | 清晰度 0.7/1 | 影响力 0.8/1.5 | 开源 0/1.5 | 可复现 0.3/0.5 | 工程/实践 1/1.5


## 👥 作者与机构

- Saumyaranjan Mohanty：Department of Artificial Intelligence, Indian Institute of Technology Hyderabad
- Aravind Reddy：机构信息未在 arXiv HTML 中可靠披露
- Konda Reddy Mopuri：Department of Artificial Intelligence, Indian Institute of Technology Hyderabad

## 📌 核心摘要

音频视觉数据集蒸馏要从大规模配对音频视觉数据中合成很小的带标签集合，使在其上训练的模型仍能接近全量训练的效果，难点在于同时保留单模态判别信息和模态间语义对应。已有分布匹配方法需要把全部合成样本同时放在显存中优化，显存占用大，且合成对的音频特征中心与视觉特征中心距离偏大。X-AVDD（Cross-Attentive Audio-Visual Dataset Distillation，交叉注意力音频视觉数据集蒸馏）先训练带双向多头交叉注意力的教师网络，再离线存储真实样本经交叉注意力与全局平均池化后的嵌入，合成阶段按类别用欧氏分布匹配拉近合成嵌入与真实嵌入，并保留分类交叉熵。与把对齐与联合优化绑定的 AVDD 不同，解耦后合成可以按类别分批进行，并用真实模态作为另一模态查询的键与值来保持配对约束。在 VGGSound 上 ConvNet 评估中，每类样本数（Samples Per Class，SPC）为 10 时 top-1 准确率从 AVDD 的 8.2% 提高到 24.0%。该结论只在音频视觉事件识别的集成融合评估下成立，时间定位与检索等任务未验证。原文披露教师训练加嵌入存储约 65 分钟、合成约 12 分钟，合计约 1.3 小时，AVDD 同设置约 10 小时。

## 🔗 开源与复现资源

本次未形成可展示的已核验资源记录，开放状态尚未核实。

可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 为什么要把很大的声音加画面训练集变小

刚接触音频或视觉的研究生可以先把任务想成压缩训练集。原始训练集是很多配对样本，每个样本有一段声音的频谱图、1 帧视频中间帧和一个事件标签，例如某段视频同时有狗叫声和狗的画面。目标是合成一个小得多的数据集，每个类别只留 1 到 50 个配对样本，使得在合成集上从头训练的识别模型，在测试集上的准确率尽量接近在全量集上训练的模型。

必须保留的信息有两层，一是每个模态内部的类别可分性，二是声音和画面之间的语义对应，也就是同一事件的两种信号要能对上。输出就是这些合成的频谱图、合成的图像帧、类别标签，以及后续训练学生模型时用的软标签。本文的 4 个基准是 AVE、MUSIC-21、VGGSound 和 VGGSound-10K，评价都用测试准确率在 5 个随机种子 0 到 4 上的均值和标准差，准确率单位为%。预算用每类样本数表示，文中同时给出占全量集的百分比，百分比越小说明压缩越狠。

### 已有路线在输入目标和运行阶段上有什么不同

数据集蒸馏最早多做单模态图像分类，早期梯度匹配和轨迹匹配需要双层优化，要存中间梯度或训练轨迹，显存和计算开销大。分布匹配是另一条线，不比梯度，只让真实嵌入和合成嵌入的统计量接近，相对轻一些，但合成预算变大或模型变复杂时仍会遇到显存瓶颈。注意力在单模态蒸馏里出现过，例如匹配空间注意力图，但那是单模态内部的空间模式，不是让两个模态互相查询。

多模态蒸馏里视觉-语言方向进展快，音频-视觉方向此前只有 AVDD，它把分布匹配推广到配对音频-视觉数据。本文还自己实现了一个多模态版 SRe2L 作基线，SRe2L 原本分压缩、恢复、重标注 3 段，先在全量集上训练教师并存批量归一化统计，再用统计合成数据，最后用教师给软标签，本文把它改成音频-视觉两路并用真实样本初始化以保证公平。

比较时要注意输入都是配对声音加画面、目标都是事件分类、监督都含硬标签加软标签，运行阶段都是先合成再在合成集上从头训练，只有在这些条件一致时准确率高低才有意义，准确率单位为%。

### AVDD 的两个具体困难是什么

第一个困难是显存。AVDD 采用非解耦的分布匹配，优化循环里要同时把全部合成样本放在显存里去匹配全局特征分布，预算或模型变大就会报显存不足。论文说如果改成按类分批，分布匹配会丢失类间关系信息，在每类 20 个样本时准确率会从 58.0% 掉到 49.5%，单位均为%，所以 AVDD 基本只能用简单的卷积网络和较小的每类样本数，换到 ViT 或 AudioCLIP 这类大模型就容易失败，此外还有一段生成缓冲区的耗时。第二个困难是模态对应弱。

AVDD 独立匹配各模态特征，合成对的声音和画面在语义上容易对不齐，论文用类内音频类中心到视觉类中心的欧氏距离衡量模态间隙，发现 AVDD 合成集的距离明显大于原始数据集。这两个困难决定了本文的设计必须同时解决分批合成时的显存问题和合成对的对齐问题，而不是只把单模态方法跑两遍。

### X-AVDD 的三步流程是怎样分工的

X-AVDD 把对齐和合成拆开，共三步。第一步在原始大数据集上预训练带双向交叉注意力的教师网络，包含音频编码器、视觉编码器、token 化、双向交叉注意力块、全局平均池化、各自分类器和融合分类。第二步用教师网络算出并存好真实音频和真实视觉经过交叉注意力后的嵌入。第三步迭代学习合成数据集，用真实嵌入指导合成样本更新，初始化用从真实数据随机采的音频帧对，基线和本文方法用同一套初始化样本。下面这张结构图展示了教师网络内部从输入到最终分类的主路径，读图时先分清左右两路再看中间如何交换信息。

读图说明：这张总览图把音频和图像两条通路画在左右两侧，中间虚线框是双向交叉注意力块，下方依次是池化、分类、融合和最终分类，适合对照后文 2 个方向的损失理解哪一路查询了哪一路。

> **看图路径：** 1. 先从左右两侧找到音频输入和图像输入各自的编码器与空间 token 箭头；2. 再看中间虚线框内音频到图像与图像到音频两个并列分支的查询与键值标注；3. 接着向下看全局平均池化、各自分类器、融合与最终分类的汇合顺序

[![原论文 Figure 3：Overview of the bi-directional cross-attention mechanism for Audio-Visual event recognition.](https://arxiv.org/html/2610.13687v1/arch_2_new_1.svg)](https://arxiv.org/html/2610.13687v1/arch_2_new_1.svg)

*论文图 3。原论文 Figure 3:：“Overview of the bi-directional cross-attention mechanism for Audio-Visual event recognition.”。*

图中可见左侧音频输入经过编码器得到空间 token，右侧图像输入同样得到空间 token，两股 token 同时进入中间框。框内左列标注音频到图像且查询来自音频、键值来自图像，经过相加归一化前馈得到提炼后的音频，右列标注图像到音频且查询来自图像、键值来自音频，经过相加归一化前馈得到提炼后的图像，再分别做全局平均池化、各自的音频分类器和图像分类器，最后经融合得到最终分类。这种画法把互相查询的对称结构说清楚了，合成时用真实一侧做键值、用合成一侧做查询的思路也与这里对应。

### 双向交叉注意力让声音和画面如何互相提炼

对一个样本，先把它的频谱图和图像帧分别送入音频编码器和视觉编码器，再用各自的 token 化算子变成 token 序列。双向块有两个分支，音频到图像分支让音频 token 做查询去抽取图像 token 中的相关信息，图像到音频分支反过来让图像 token 做查询去抽取音频 token 中的信息。每个分支后面都有相加、归一化、前馈和全局平均池化，最后得到该样本在该方向上的嵌入。直观例子可以这样想：狗叫声的 token 去查询图像 token 时，更容易加权到狗嘴或狗身区域；狗图像的 token 去查询音频 token 时，更容易加权到叫声对应的时频位置。2 个方向都做，就不是一个模态主导另一个，而是互相校准。

**数据集蒸馏 × 每类样本数 × 音频-视觉事件识别：** 数据集蒸馏指从大的原始训练集合成很小的合成集，使在合成集上训练的模型能接近在全量集上训练的效果；每类样本数是对合成集预算的计数方式，即每个类别保留几个配对样本；音频-视觉事件识别是本文的代理任务，输入是声音频谱图加视频中间帧，输出是事件类别，蒸馏的好坏就看只用合成集训练的识别模型在测试集上的准确率。

真实数据的 2 个方向嵌入按类别存下来，合成阶段的目标就是让合成数据的对应方向嵌入贴近它们。

\[\displaystyle\mathbf{E}_{r({A\rightarrow V})}^{C}=g_{a}(\mathcal{T}_{a}(\mathbf{A_{r}^{C}},\mathbf{V_{r}^{C}}))\]

上式表示某一类真实音频 token 和真实视觉 token 经过某一交叉注意力分支再池化后得到真实嵌入，合成侧的对应公式只是把查询换成合成 token 而键值仍用真实 token，这种不对称设计让合成样本必须从真实另一模态中找到可对齐的内容。

### 合成样本用什么距离向真实嵌入靠拢

合成侧的嵌入构造很关键。音频引导的图像嵌入用合成图像做查询、真实音频做键和值，图像引导的音频嵌入用合成音频做查询、真实图像做键和值。也就是说，合成图像好不好，要看它能否从真实声音里抽出对分类有用的信息，反之亦然。然后用欧氏分布匹配损失把同类真实嵌入集合与合成嵌入集合拉近。

**分布匹配 × 欧氏分布匹配损失 × 交叉熵损失：** 分布匹配指让合成样本在特征空间的分布贴近真实样本的分布，不展开双层梯度；欧氏分布匹配损失是本文的具体实现，把两组嵌入之间的两两欧氏距离求和，拉近合成嵌入和真实嵌入；交叉熵损失保留分类监督，保证合成样本还能被正确分类，三者在合成阶段按权重相加。

\[\displaystyle D_{\text{euc}}(\mathbf{A},\mathbf{B})=\sum_{j=1}^{N}{\sum_{i=1}^{M}\|\mathbf{A}[i,:]-\mathbf{B}[j,:]\|_{2}}\]

上式把两个矩阵所有行向量之间的欧氏范数求和，矩阵行数可以不同，正好对应真实样本数多、合成样本数少的情形。距离越小说明合成嵌入整体落在真实嵌入附近。

**双向交叉注意力 × 音频编码器 × 视觉编码器：** 音频编码器和视觉编码器先把频谱图和图像帧变成各自的空间 token 序列；双向交叉注意力包含音频到图像和图像到音频两个分支，一个模态出查询，另一个模态出键和值，互相提炼后再各自做全局平均池化得到嵌入，这样合成目标同时包含模态内信息和模态间对应。

**模态间隙 × 类中心 × 交叉注意力后嵌入：** 模态间隙在本文指同一类别下音频类中心和视觉类中心在特征空间的欧氏距离，距离大说明同一事件的声音和画面被编到相距较远的位置；交叉注意力后嵌入是经过互相查询提炼再池化后的向量，X-AVDD 直接对这种向量做匹配，因此合成数据的类内音频-视觉距离更接近原始数据集。

**解耦 × 教师模型 × 合成循环：** 解耦指把跨模态对齐和联合优化分开：先在全量数据上训练好带交叉注意力的教师模型并存好真实嵌入，合成循环里只更新合成像素和频谱，不再同时持有全量真实数据做联合优化；教师模型参数冻结提供固定的键、值和匹配目标，合成循环可以按类分批进行，从而降低显存峰值。

每个方向各有一个这样的距离项。

\[\displaystyle l_{A\rightarrow V}^{C}=D_{\text{euc}}(\mathbf{E}_{r(A\rightarrow V)}^{C},\mathbf{E}_{s(A\rightarrow V)}^{C})\]

该式是音频到图像方向的类内匹配损失，图像到音频方向同理。只匹配池化后的向量，不直接比像素或频谱，这样既保留语义又允许合成样本在外观上与真实样本不同。

### 教师训练、嵌入存储和合成更新如何衔接

训练分 3 段。先用全量配对数据训练教师 100 轮，优化器用 Adam，基础学习率 0.001，余弦衰减，增强用随机裁剪缩放，批量 128。批量单位为个样本。然后冻结教师，一次性算好真实交叉注意力后嵌入并存盘，这是一次性开销。最后进入合成循环，优化器用 Adam 且动量取 0.5 和 0.9，基础学习率 0.25，余弦衰减，迭代 1000 步，增强同样用随机裁剪缩放，注意力倍率取 1.0。合成循环里教师参数冻结，梯度只更新合成的频谱和图像像素，监督来自三项加权和。

\[\displaystyle l^{C}=\lambda_{ce}l_{ce}^{C}+\lambda_{av}l_{(A\rightarrow V)}^{C}+\lambda_{va}l_{(V\rightarrow A)}^{C}\]

上式中第一项是分类交叉熵，第二三项是 2 个方向的欧氏分布匹配损失，权重分别控制分类、音频到图像、图像到音频的相对强度。消融显示只保留任一方向都不如双向全保留。学生模型在合成集上的训练还会用到硬标签与软标签的凸组合，权重记为 alpha，温度参数控制软标签平滑程度，具体影响见消融节。时间开销上教师训练和嵌入存储只做一次，合成是按不同每类样本数重复的步骤，但每次合成只需 12 分钟左右。

下面这张表拆开 AVDD 与本文方法在 VGGSound-10K 每类 20 个样本时的耗时构成，表前要先明确比较问题是同样的 32 GB Tesla V100 单卡下总合成时间从哪里省出来的，指标方向是小时数越小越好，时间单位为小时或分钟。

| AVDD | AVDD | X-AVDD | X-AVDD |
| --- | --- | --- | --- |
| Buffer creation | 1 hr | teacher training & embedding storage | 65 mins. |
| synthesis | 9 hrs. | synthesis | 12 mins. |
| Total | 10 hrs. | Total | 1.3 hrs. |

AVDD 的 10 小时里 9 小时花在合成循环，另有 1 小时缓冲区构造；本文方法教师训练加嵌入存储共 65 分钟，合成仅 12 分钟，合计 1.3 小时。代价是一次性教师训练，但在多个预算下复用时平均成本更低。限制是该表只报告这一个数据集和这一个预算，不能直接推广到 VGGSound 全量 309 类的绝对小时数。

### 数据划分、模型和融合方式如何保证可比

数据沿用 AVDD 的预处理和划分。AVE 是 4143 段 10 秒视频共 28 类，按 1 秒窗口切分后训练验证测试为 27726 个、3288 个、3305 个样本；MUSIC-21 用独奏子集处理后为 146908 个、7103 个、42440 个样本；VGGSound 约 165k 个训练加 13k 个测试样本共 309 类；VGGSound-10K 是 10 类子集，训练 8808 个测试 444 个样本。

主干先用与 AVDD 相同的卷积网络做两路编码器，再扩展到 ResNet-18、ViT 和 AudioCLIP。跨架构实验用 ResNet-18 生成合成集，再在 VGG-11 和 ViT 上从头训练。迁移实验冻结 ImageBind 或 AST 加 SigLIP2 的编码器，只在冻结特征上用合成集训练小投影头和线性分类器。融合主结果用集成方法，附录另有拼接方法。评价固定为测试准确率在 5 个种子上的均值加减标准差，准确率单位为%。

预训练超参数如下，表前说明该表回答教师训练的可复现条件，数值越大不代表越好，只是固定配置。

| Hyperparameter | Value |
| --- | --- |
| Epochs | 100 |
| Optimizer | Adam |
| Base learning rate | 0.001 |
| Learning rate schedule | cosine decay |

100 轮、Adam、0.001 余弦衰减、随机裁剪缩放、批量 128 个样本是教师训练的固定设置，合成阶段的学习率和迭代数另见方法节。限制是该表未给出不同主干是否共用同一套增强和批量，复现大模型时需以附录为准并记录显存。

### 在不同数据量下小合成集能达到多少准确率

主结果按卷积网络、ResNet-18、ViT 3 组报告，卷积组对比分布匹配和 AVDD，后两组因 AVDD 会显存不足而对比自实现的多模态 SRe2L。论文文字直接给出 VGGSound 上卷积网络从 8.2% 到 24.0% 在每类 10 个样本、从 9.8% 到 26.5% 在每类 20 个样本的提升，这是相对 AVDD 的改进，不是相对全量集。极小预算每类 1 个样本时，额外的跨模态约束可能过正则，优势要到每类 10 个样本以上才稳定。VGGSound 是 4 个集中最大的，提升也最突出。下图是 VGGSound 上 3 组预算的柱状对比，读图时注意预算增大时三者都上升，但绿色始终最高。

读图说明：该图横轴是每类 1、10、20 3 个预算，纵轴是准确率，每组内三根柱从左到右依次是 DM、AVDD、X-AVDD，适合一眼看出本文方法在 VGGSound 上的领先幅度是否随预算变化。

> **看图路径：** 1. 看横轴三组柱分别对应每类 1、10、20 个样本的设置；2. 对比每组内蓝色 DM、橙色 AVDD、绿色 X-AVDD 三根柱的高度顺序；3. 注意纵轴是准确率，绿色柱在三组下都明显更高

[![原论文 Figure 1：Accuracy on the VGGSound dataset under different samples-per-class settings.](https://arxiv.org/html/2610.13687v1/Images/vggsound_pic.png)](https://arxiv.org/html/2610.13687v1/Images/vggsound_pic.png)

*论文图 1。原论文 Figure 1:：“Accuracy on the VGGSound dataset under different samples-per-class settings. X-AVDD consistently outperforms DM and AVDD (Kushwaha et al., 2024).”。*

图中可见每类 1 个样本时蓝色和橙色柱都很矮，绿色柱已接近 20；每类 10 个和 20 个样本时蓝色橙色缓慢爬升，绿色柱分别超过 20 和 25。这种差距与正文表格中 VGGSound 行 24.0% 和 26.5% 的数字一致。限制是该图只画 VGGSound 且只到每类 20 个样本，不能说明在 AVE 或 MUSIC-21 上也有同样倍数的领先。

软标签的作用在下面这张 ResNet-18 的 VGGSound-10K 表里看得很清楚，表前说明比较问题是在同一合成集上只用硬标签训练学生还是用硬标签加软标签训练，指标是测试准确率越高越好，公平条件是合成集相同、学生结构相同。

| SPC | Ratio (%) | SRe2L (HL) | SRe2L (SL) | Ours (HL) | Ours (SL) |
| --- | --- | --- | --- | --- | --- |
| 1 | 0.11 | 16.5 ± 0.1 | 21.7 ± 0.6 | 24.5 ± 1.5 | 30.0 ± 1.5 |
| 10 | 1.13 | 31.4 ± 1.3 | 46.9 ± 2.0 | 44.9 ± 0.2 | 54.5 ± 0.7 |
| 20 | 2.26 | 36.3 ± 2.1 | 47.6 ± 1.6 | 49.3 ± 0.9 | 61.5 ± 0.8 |
| 50 | 5.65 | 41.8 ± 0.7 | 60.4 ± 0.9 | 52.9 ± 0.3 | 66.7 ± 0.9 |

无论 SRe2L 还是本文方法，加上软标签都明显高于只用硬标签，例如本文方法在每类 10 个样本从 44.9% 升到 54.5%，每类 50 个样本从 52.9% 升到 66.7%。代价是需要教师提供软标签且要调温度和 alpha。限制是该表只覆盖 VGGSound-10K 和 ResNet-18，不能直接断言其他数据集也有相同幅度的增益。

### 换模型、换大模型和看模态间隙时结论还成立吗

跨架构泛化用 ResNet-18 生成的合成集去训练 VGG-11 和 ViT，论文报告在 AVE 上 ViT 目标从 25.5% 到 35.3% 在每类 50 个样本的提升，这是相对多模态 SRe2L 的改进。AudioCLIP 实验显示 VGGSound-10K 上每类 50 个样本即占全量 5.65% 时达到 62.3%，相对全量 72.4% 仍有差距，但训练时间从 25.30 小时降到 2.74 小时；AVE 上每类 50 个样本达到 81.3%，相对全量 85.6%，训练时间从 72.12 小时降到 6.43 小时。冻结大编码器的迁移实验里，用 ResNet-18 加本文方法生成的每类 50 个样本，在 ImageBind 上达到 67.1%，在 AST 加 SigLIP2 上达到 73.5%，接近全量的 79.8% 和 81.3%，但仍低于全量。模态间隙方面，下图展示 AVE 上按类别的音频视觉中心距离，读图时重点看 3 条线的相对位置而非绝对数值。

读图说明：该折线图横轴是类别编号，纵轴是类内音频与视觉中心距离，橙色是 AVDD、绿色是本文方法、蓝色是全量数据，适合检查本文方法是否在每个类别上都缩小了距离。

> **看图路径：** 1. 看横轴类别编号 0 到 27 与纵轴类内音频视觉中心距离；2. 对比橙色 AVDD 折线、绿色本文方法折线与蓝色全量数据折线的上下位置；3. 观察绿色折线是否在全部类别上都低于橙色且更贴近蓝色

[![原论文 Figure 2：Modality gap (class-wise \\ell_2 distance between audio and visual class centers in the feature…](https://arxiv.org/html/2610.13687v1/Images/l2_gap.png)](https://arxiv.org/html/2610.13687v1/Images/l2_gap.png)

*论文图 2。原论文 Figure 2:：“Modality gap (class-wise \ell_2 distance between audio and visual class centers in the feature space) on the AVE dataset, and datasets distilled by AVDD and X-AVDD using…”。*

图中可见橙色线贴近 1 附近，绿色线在 0.6 到 0.75 之间波动，蓝色线多在 0.4 到 0.6 之间，绿色始终低于橙色且更靠近蓝色，支持合成对齐更好的判断，但绿色仍高于蓝色，说明合成集并未完全恢复原始对应强度。VGGSound-10K 的柱状间隙图趋势相同，10 个类别里每组都是蓝色最低、橙色最高、绿色居中。代价是这些间隙是在 AudioCLIP 特征空间里量的，换特征空间数值会变，只能做同空间内的相对比较。

计算总开销的对比见下表，表前说明比较问题是单卡 32 GB Tesla V100 上生成合成集的总 GPU 小时，4 个数据集各自独立计时，数值越小越好。

| Method | VGGSound-10K | AVE | MUSIC-21 | VGGSound |
| --- | --- | --- | --- | --- |
| AVDD | 165 | 471 | 363 | 5342 |
| X-AVDD | 23 | 51 | 45 | 628 |

4 个数据集上本文方法分别为 23、51、45、628 GPU 小时，相对 AVDD 的 165、471、363、5342 小时大幅下降，VGGSound 全量上约 8 倍。限制是这是合成阶段总耗时，不是学生训练时间，且未包含教师训练在不同数据集上的差异，引用时要注明是合成成本。本表数值与单位依据论文 PDF。

### 哪些组件拿掉后会变差，温度和标签如何影响结果

方向消融在 VGGSound-10K 上只保留图像到音频或只保留音频到图像，都不如双向全保留，例如 ResNet-18 上每类 10 个样本双向 54.5%，单向分别为 50.7% 和 53.4%，说明两个约束互补。随机子集对比用超越随机的提升衡量，VGGSound-10K 在每类 1、10、20 个样本分别高出 9.4、6.2、7.2 个百分点，MUSIC-21 和 AVE 也有正提升，证明不是靠挑了好初始化。alpha 消融显示硬标签与软标签凸组合高于只用一端，温度消融如下图所示，读图时注意横轴不是训练轮数而是软标签温度。

读图说明：该图横轴是温度 1、5、10、20、30、50，纵轴是测试准确率百分比，两条线分别对应每类 10 个和 20 个样本，适合观察平滑程度过大或过小的影响。

> **看图路径：** 1. 看横轴温度取值 1 到 50 与纵轴测试准确率百分比；2. 对比深蓝色每类 10 个样本与橙色每类 20 个样本两条折线的走向；3. 注意两条线都在中间温度附近达到最高再缓慢下降

[![原论文 Figure 6：Impact of temperature on test accuracy.](https://arxiv.org/html/2610.13687v1/Images/temperature_ablation_new_2.png)](https://arxiv.org/html/2610.13687v1/Images/temperature_ablation_new_2.png)

*论文图 6。原论文 Figure 6:：“Impact of temperature on test accuracy.”。*

图中可见两条线都从温度 1 上升到温度 10 达到峰值，之后随温度增大缓慢下降，每类 20 个样本始终高于每类 10 个样本。这支持温度要适中，太小软标签太硬，太大类别区分被抹平。限制是该图只报告 VGGSound-10K 加 ResNet-18 的两个预算，最优温度 10 不能直接搬到其他数据集。容易误解的是把软标签增益当成蒸馏本身的增益，实际上软标签是训练学生时的额外知识，合成质量与标签策略是两件事，论文把两者分开报告。

### 这些结论在什么条件下才成立，有什么没测到

成立条件很具体。准确率提升依赖相同的预处理划分、相同的初始化样本、相同的集成融合和相同的学生训练流程，换拼接融合趋势仍在但数值不同。极小预算每类 1 个样本时卷积网络上本文方法在 VGGS-10K 为 37.6% 低于 AVDD 的 40.4%，在 AVE 为 22.0% 低于 AVDD 的 23.0%，说明过正则时并不总是最优。跨架构结论只测了从 ResNet-18 到 VGG-11 和 ViT，以及 AudioCLIP 和冻结大编码器上的迁移，没有测检测、定位或检索任务。模态间隙降低只在 AudioCLIP 特征空间和类中心距离下成立，不能等同于人工感知的对齐。

耗时降低只针对合成阶段单卡 VGGSound-10K 每类 20 个样本的 10 小时到 1.3 小时，以及 4 个数据集 GPU 小时表，不能理解为端到端含教师训练在所有设置下都是固定倍数。论文明确把时序定位和音频-视觉检索留作未来工作。

### 要复现第一步该做什么，需要哪些信息条件

复现先从数据和教师开始。按 AVDD 的预处理得到频谱图和中间帧，保持训练验证测试划分不变，用同一套随机初始化样本以便与基线对齐。教师用带双向交叉注意力的两编码器结构训练 100 轮，存好每类真实交叉注意力后嵌入，合成时冻结教师，只更新合成像素和频谱，迭代 1000 步，损失按分类加双向欧氏匹配加权。学生训练要同时准备硬标签和教师软标签，调 alpha 和温度，温度可从 10 附近开始试。硬件参考是 32 GB Tesla V100，软件为 Ubuntu 18.04、Python 3.11.7、PyTorch 2.4.1、NumPy 1.24.3。

关键超参数是合成学习率 0.25、Adam 动量 0.5 和 0.9、余弦衰减、随机裁剪缩放、注意力倍率 1.0。信息条件上需要全量配对数据训练教师，合成后可不再依赖全量数据。关于资源可用性，本文证据未发现来源绑定且完成验证的资源，不得声称代码模型数据已公开，需要补的验证是换种子、换融合、换特征空间重算间隙，以及在更大预算和 ViT 主干上重跑合成耗时。

### 什么时候值得尝试，还缺哪项验证

当音频-视觉训练集很大、反复训练很贵，且下游仍是事件分类时值得尝试，用每类 10 到 50 个样本先快速迭代架构和超参数，再回到全量集确认。预算极小或类别很少时要谨慎，因为跨模态约束可能过正则。复现第一步是跑通教师训练和真实嵌入存储，再做小预算合成与学生训练的闭环。还缺的验证是除分类外的定位与检索、更多主干和更多种子下的方差、以及软标签温度在新数据集上的重调。本文的价值在于用解耦和双向查询同时缓解显存和对齐问题，代价是一次性教师训练和标签调参，结论只在上述数据、模型、融合和指标条件下成立，不应夸大为所有多模态任务的通用压缩方案。

<details>
<summary>📎 论文与评分元数据</summary>

排名：前50% | 文档类型：方法研究 | [arXiv 原文](https://arxiv.org/abs/2610.13687v1)

</details>

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。

- 评分规则：type-aware-v1

- 评分模型：muse-spark-1.3-contributor

- 评分请求协议：openai_responses

---

[← 返回 2026-10-15 语音/音乐/音频论文速递](/audio-paper-digest-blog/posts/2026-10-15/)
