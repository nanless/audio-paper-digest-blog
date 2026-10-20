---
title: "UniAVC: Unified Audio-Video Creation via Progressive Training and Asymmetric Scheduling"
date: 2026-10-20
draft: false
tags: [音视频生成, 视频到声音生成, 音频驱动视频生成, 扩散模型]
categories: [论文速递]
description: "UniAVC 先在单模态数据上练好视频和音频各自的生成与编辑能力再冻结主干、只用少量配对数据训练跨模态桥，并用两条不对称噪声轨迹加干净分支子任务支持联合生成、跨模态生成与指令编辑，最强证据来自联合编辑与跨模态基准上的可比结果，代价是两阶段大算量与双流全轨迹推理开销。"
hiddenInHomeList: true
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_arxiv_id: "2610.24791"
paper_digest_workbench_contract: "researcher-workbench-v1"
paper_digest_reader_title: "UniAVC：用分阶段训练与不对称调度统一音视频生成与编辑"
paper_digest_original_title: "UniAVC: Unified Audio-Video Creation via Progressive Training and Asymmetric Scheduling"
paper_digest_arxiv_version: 1
paper_digest_arxiv_versioned_id: "2610.24791v1"
paper_digest_arxiv_abs_url: "https://arxiv.org/abs/2610.24791v1"
paper_digest_arxiv_pdf_url: "https://arxiv.org/pdf/2610.24791v1.pdf"
paper_digest_primary_task: "音视频生成"
paper_digest_tags_contract: "paper-tag-flat-tags-v2"
paper_digest_tags_selection_contract: "paper-tag-selection-v2"
paper_digest_tags_registry_version: "paper-tag-catalog-v2"
paper_digest_tags_registry_sha256: "cdef54423b5dfc00a1d017ef6639446d2ecd1d9c1acf71c8eb4f6219a46b7ba8"
paper_digest_tags_concepts: [{"facet":"task","id":"task.av-generation","label":"音视频生成"},{"facet":"task","id":"task.video-to-audio","label":"视频到声音生成"},{"facet":"task","id":"task.audio-driven-video","label":"音频驱动视频生成"},{"facet":"method","id":"method.diffusion","label":"扩散模型"}]
paper_digest_primary_method: "扩散模型"
paper_digest_score: 6.6
paper_digest_rank_bucket: "前50%"
paper_digest_document_type: "方法研究"
paper_digest_one_sentence: "UniAVC 先在单模态数据上练好视频和音频各自的生成与编辑能力再冻结主干、只用少量配对数据训练跨模态桥，并用两条不对称噪声轨迹加干净分支子任务支持联合生成、跨模态生成与指令编辑，最强证据来自联合编辑与跨模态基准上的可比结果，代价是两阶段大算量与双流全轨迹推理开销。"
paper_digest_authors: [{"affiliations":["HKUST"],"name":"Kien T. Pham"},{"affiliations":["Huawei Research"],"name":"Yuhao Liu"},{"affiliations":["Huawei Research"],"name":"Chong Hou Choi"},{"affiliations":["HKUST"],"name":"Zhenqi He"},{"affiliations":["HKUST"],"name":"Yanghao Wang"},{"affiliations":["Huawei Research"],"name":"Chenyang Lei"},{"affiliations":["Huawei Research"],"name":"Rui Liu"},{"affiliations":["HKUST"],"name":"Qifeng Chen"},{"affiliations":["HKUST"],"name":"Long Chen"}]
paper_digest_abstract_sha256: "58b80da085672587d469783cc04c2c53025e3ae6c7bc4ba9d91e67300af98daf"
paper_digest_sidecars: {"citation.bib":{"sha256":"14e25c194ab9fba279344d825992bbede36dd55da750d6bb7bae8e14f35b4598","url":"/audio-paper-digest-blog/data/papers/2026-10-20/2610-24791/citation.bib"},"citation.json":{"sha256":"074fa4cab104259e7f7f5ea1b860bfc38cd92846c3b477780c306b4f4dd4660c","url":"/audio-paper-digest-blog/data/papers/2026-10-20/2610-24791/citation.json"},"citation.ris":{"sha256":"824bd9c6b647fc66eeb780d60fc1e7a75bc9a8694acedbcc6196b476ce8228eb","url":"/audio-paper-digest-blog/data/papers/2026-10-20/2610-24791/citation.ris"},"rethink-context.json":{"contract":"paper-research-context-v2","sha256":"58084f7764eb5b78d5fb191e7984f93c39791769789bde4d2d3e101c88c80e54","url":"/audio-paper-digest-blog/data/papers/2026-10-20/2610-24791/rethink-context.json"}}
paper_digest_api_reader_contract: "beginner-researcher-v3"
paper_digest_api_reader_article_sha256: "b58695534021f455abd85da7e4a89f595e0b9540ccef89b3916c97ed008eab12"
paper_digest_api_reader_plan_sha256: "da5189b2fb11b9297f579599660f3bf31e877ed0d5db19e2257f5dd48fb5cc33"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings-v4"
paper_digest_api_reader_source_bindings_sha256: "ad6c1730fbce5a401340494a861c6997a218493c31e256958e52fe1571ecfc0f"
paper_digest_api_reader_source_table_count: 4
paper_digest_api_reader_source_formula_count: 3
paper_digest_api_reader_structured_artifacts_sha256: "0d2b2eaf9cbb5bea5410b4296706ed55848bcdf5738a631171e38733b3a1728e"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity-v1"
paper_digest_api_reader_author_identity_sha256: "57d1b4ccd0cd165673872836b3038ac8e6d04e1454c66dfc5b8f5f981693af1a"
paper_digest_api_reader_author_count: 9
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity-v1"
paper_digest_api_reader_resource_identity_sha256: "65811cb9dec0e71fb77eacc11e5626485c19e25f710c6f79d59c07fb5167ce3d"
paper_digest_api_reader_resource_count: 1
paper_digest_api_reader_figure_persistence: "ephemeral-no-persisted-figure-assets-v1"
paper_digest_api_reader_decision_projection: "api-reader-decision-projection-v2"
---

# 📄 UniAVC：用分阶段训练与不对称调度统一音视频生成与编辑

> 英文题目：*[UniAVC: Unified Audio-Video Creation via Progressive Training and Asymmetric Scheduling](https://arxiv.org/abs/2610.24791v1)*

<!--paper-tag-hierarchy-v1:start-->

**研究分类**

- **研究任务**：[音视频生成](/audio-paper-digest-blog/papers/?concept=task.av-generation)；[音频生成](/audio-paper-digest-blog/papers/?concept=task.audio-generation) → [视频到声音生成](/audio-paper-digest-blog/papers/?concept=task.video-to-audio)；[音频驱动视频生成](/audio-paper-digest-blog/papers/?concept=task.audio-driven-video)
- **研究方法**：[生成模型](/audio-paper-digest-blog/papers/?concept=method.generative) → [扩散模型](/audio-paper-digest-blog/papers/?concept=method.diffusion)

<!--paper-tag-hierarchy-v1:end-->

> 评分：**6.6/10** | 创新 1.5/2 | 技术严谨 1/1.5 | 实验充分 1/1.5 | 清晰度 0.8/1 | 影响力 1/1.5 | 开源 0/1.5 | 可复现 0.3/0.5 | 工程/实践 1/1.5


## 👥 作者与机构

- Kien T. Pham：HKUST
- Yuhao Liu：Huawei Research
- Chong Hou Choi：Huawei Research
- Zhenqi He：HKUST
- Yanghao Wang：HKUST
- Chenyang Lei：Huawei Research
- Rui Liu：Huawei Research
- Qifeng Chen：HKUST
- Long Chen：HKUST

## 📌 核心摘要

研究对象是一个文本条件加上一对视频潜变量和音频潜变量的生成与改写，难点是配对编辑监督稀少，且视频稠密、音频稀疏导致理想去噪节奏不同，共享噪声水平只走二维噪声空间对角线，见不到以干净一支约束另一支的非对角状态。UniAVC先在单模态语料上让视频分支和音频分支各自学会生成与编辑，再冻结双分支，只用配对数据训练连接两分支的桥接模块，把稀缺配对监督留给跨模态耦合。单模态预训练中视频分支见到34.3M样本、音频分支见到54.9M样本，而对齐微调仅消耗0.67M配对样本，不足单模态预训练总量的1%。训练与推理共用一个步骤计数，计数经两条变形曲线映射为视频噪声水平与音频噪声水平，音频始终更低而先收敛，并为视频提供渐变干净的跨模态条件，另用一支固定干净且屏蔽损失的子任务补足连续曲线到不了的边界状态。推理时可将保留模态固定为干净潜变量而只对目标模态去噪，也可保留首轮满意分支并对另一分支加噪到中间水平再去噪。在VGGSound测试集视频转音频评测上，FAD指标UniAVC为10.12，低于MMAudio的17.09，非同步时长DeSync为0.650，亦低于MMAudio的0.813。结论适用于所报告的联合与跨模态基准，训练与推理成本较高，自修复需第二遍去噪，原文未披露设备、批量大小与时长。

## 🔗 开源与复现资源

- 第三方资源：<https://hkust-longgroup.github.io/UniAVC> → <https://hkust-longgroup.github.io/UniAVC/> — 链接可访问（HTTP 200）

可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 要做的事：输入什么、输出什么、什么不能丢

这篇论文要统一 3 类音视频创作。第一类是文本条件联合生成，输入只有一句话，输出是一段视频加一段音频，要求两者时间对齐。第二类是双向跨模态生成，输入是文本加一条干净的已有模态，例如有小提琴声要配拉琴画面，或有狮子画面要配吼声，输出是缺失的另一条模态。第 3 类是指令编辑，输入是原视频、原音频加一句改法，例如把人物改老、把背景换成城堡、把台词换掉，输出是改后的视频和音频。

编辑比生成多一个必须保留的信息：指令没提到的内容和不该动的模态要尽量不动，同时改后两条流还要对齐。传统做法是先用联合模型生成，再串一个编辑器去改，编辑视频时看不见音频，很容易把原来对好的口型、鼓点、环境声位置改错，而且越改越偏。论文的目标就是用同一套权重同时接住这 3 类任务，避免串联带来的失配。

### 已有路线为什么各做各的

联合生成这条线早期把两个扩散过程拼在一起，或在推理时对齐两个已训好的单模态模型，后来发展为块块相连的双主干、共享主干加专家、或端到端音视频基础模型，但原文指出它们都让音频和视频走同一条噪声时刻表。跨模态生成则直接以另一模态为条件，一次只生成一侧。

编辑这条线要同时做到听指令和保源内容，配对编辑数据很少，于是有的方法用智能体清洗数据，有的方法把编辑重写成自监督修复，有的方法用门控注意力平衡改与保，还有的方法为每个控制加轻量适配器。噪声调度方面，单模态内有按帧给不同噪声的做法，多模态有多模态独立采样噪声的做法，但独立采样在推理时缺少结构化的步数对应。UniAVC 的区别在于先用单模态数据解决单侧能力，再用配对数据只学跨模态耦合，并保留一个共享步索引但让两侧噪声大小分开弯曲。

### 两个具体困难：配对数据少、两侧信息密度不一样

第一个困难是配对监督稀缺。高质量且对齐准的音视频联合数据本来就少，带指令编辑对的更少。如果直接在这些数据上同时学保源、听指令和跨模态同步，负担太重而不易收敛。更浪费的是，很多配对监督被拿去学单侧基本功，例如把人走路走自然、把语音弄清晰，而这些在单模态大库里本来就有。

第二个困难是不对称。视频隐变量是稠密时空结构，音频编码后是稀疏序列，视频 token 数比音频多一个数量级以上。视频需要长时间待在高噪声去组织整体纹理、身份和运动，音频则可以更早落定。如果共用一条时刻表，按视频调则音频长期处于不必要的 noisy 状态，给不了视频干净的跨模态条件；按音频调则视频过早定细节。更深一层是训练只走了 2 维噪声空间的对角线，推理时以干净音频带噪视频、以干净视频带噪音频这类非对角状态从没见过，属于分布外。

### 总流程：先分开练好单侧，再只练中间的桥

UniAVC 的骨干基于 LTX-2.3，视频和音频各有一叠 Transformer，共享文本嵌入，只在每块的跨模态桥处相交。训练分两段：第一段视频分支和音频分支各自在单模态库上练到会生成也会编辑；第二段把两个分支冻结，只更新桥和它的自适应归一化参数，配对数据只用来学对齐和同步。

推理时任务靠条件和监督掩码区分，不换结构。联合生成与联合编辑都监督两侧，区别是有无参考源；跨模态与单侧编辑只监督一侧，把另一侧掩掉并固定为干净。下面先看任务全景图，再解释桥与调度细节。

以下导读针对任务全景图：左侧三行展示 3 种生成方式的输入输出形态，右侧五列展示 5 种编辑家族的改前改后对应，重点看同一套权重如何同时承接生成与编辑，图中左侧文字框为文本条件、胶片条为视频帧、紫橙条带为频谱图。

> **看图路径：** 1. 先看中间 UniAVC 竖条左右分开的生成区与编辑区；2. 再看左侧三行输入条件与输出视频加频谱图的对应关系；3. 最后看右侧五列编辑指令下改前与改后两组画面的变化

[![原论文 Figure 1：UniAVC performs joint audio-video generation, cross-modal generation in either direction, and…](https://arxiv.org/html/2610.24791v1/teaser.png)](https://arxiv.org/html/2610.24791v1/teaser.png)

*论文图 1。原论文 Figure 1:：“UniAVC performs joint audio-video generation, cross-modal generation in either direction, and instruction-guided editing of either or both modalities from one set of weights.”。*

这张图确实可见左侧从上到下为联合生成、音频到视频、视频到音频，每行都有文本框加视频帧和频谱图，右侧为人物编辑、人物增加、人物移除、背景编辑、语音编辑五列，每列上方是指令框、下方是改前两行与改后两行视频帧和频谱图。它帮助理解统一不是口号：生成侧要同时产出两条流，编辑侧要在保留未提内容的前提下只动目标，跨模态侧要把干净的一侧当条件。

**联合生成 × 跨模态生成：** 联合生成指给定文本同时从零生成视频和音频两条流，跨模态生成指固定其中一条干净流、只生成另一条流；前者考察两条流能否同步建立，后者考察能否把已有的声音或画面当作硬约束，二者搭配才能覆盖从头创作和以一模态带另一模态的工作流。

### 桥与参考：信息在哪里汇合、源内容怎么送进去

每个块内有两座方向相反的桥：视频查音频、音频查视频，都是带门控的残差交叉注意力。关键是门控由对方的噪声水平算出，音频进视频的门是对方音频噪声水平的函数，反之亦然。这样对方干净时多放信息进来，对方是纯噪时近似只靠文本。

参考源不用额外分支，而是把同一编码器切分的参考隐变量拼到目标序列后面，并加时间偏移的位置编码和类型嵌入区分两段。目标可看全序列，参考只能看参考跨度，跨模态桥上参考也只能看对方的参考跨度，避免参考被噪声目标污染。先看单步加噪的写法，再看联合分布与调度弯曲。

**跨模态桥 × 自适应归一化调制：** 跨模态桥指每个 Transformer 块内视频查音频、音频查视频的两层交叉注意力，负责搬运对方的信息；自适应归一化调制指用对方分支的噪声水平算出缩放、平移和门控来控制搬运强度，搭配后对方干净时多听、对方纯噪时少听。

**上下文内参考条件 × 注意力掩码隔离：** 上下文内参考条件指把编辑源视频或源音频的隐变量拼到待生成序列后面作为同一模态的额外 token；注意力掩码隔离指目标可看全部、参考只能看参考跨度，搭配后源内容能被引用又不会被噪声目标带偏，跨模态桥上同样只让参考查对方的参考跨度。

以下导读针对单双调度对比图：横轴是去噪进度从 0 到 1，纵轴是噪声水平从干净到 noisy，重点比较单调度灰虚线与双调度蓝绿曲线的分离方式，以及音频先干净对视频的含义，左下小图为噪声对平面。

> **看图路径：** 1. 先看横轴去噪进度与纵轴噪声水平的含义；2. 再对比蓝色视频曲线、绿色音频曲线与灰色单调度虚线的位置；3. 最后看左下角小图对角线与弯曲轨迹的偏离方向

[![原论文 Figure 2：Single vs. dual noise schedules.](https://arxiv.org/html/2610.24791v1/c2_schedule.png)](https://arxiv.org/html/2610.24791v1/c2_schedule.png)

*论文图 2。原论文 Figure 2:：“Single vs. dual noise schedules.”。*

这张图确实可见蓝色视频曲线在上、绿色音频曲线在下，灰色虚线夹在中间；同一进度下音频噪声更低，标注写明音频先落定为干净参考、视频再对齐细节，左下小图显示轨迹偏离对角线。它把信息密度的抽象说法变成可执行的选择：共享步索引但噪声大小分开，让桥在中后期总能拿到较干净的音频。

\[\bm{v}_{\sigma_{v}}=(1-\sigma_{v})\,\bm{v}_{0}+\sigma_{v}\,\bm{\epsilon}_{v},\qquad\bm{a}_{\sigma_{a}}=(1-\sigma_{a})\,\bm{a}_{0}+\sigma_{a}\,\bm{\epsilon}_{a},\qquad\bm{\epsilon}_{v},\bm{\epsilon}_{a}\sim\mathcal{N}(\bm{0},\bm{I}),\]

上式说明每侧独立加噪：干净隐变量乘以一减噪声水平，再加噪声水平乘以独立高斯噪声，视频和音频各有自己的水平。由此得到以噪声对为参数的联合损坏分布。

\[q_{\sigma_{a},\sigma_{v}}(\bm{v},\bm{a}\mid\bm{v}_{0},\bm{a}_{0})=\mathcal{N}\big(\bm{v};(1-\sigma_{v})\bm{v}_{0},\sigma_{v}^{2}\bm{I}\big)\mathcal{N}\big(\bm{a};(1-\sigma_{a})\bm{a}_{0},\sigma_{a}^{2}\bm{I}\big),\quad\sigma_{a},\sigma_{v}\in[0,1],\]

上式把视频和音频写成两个独立高斯的乘积，均值各自被收缩，方差各自决定。对角线是两侧水平相等，边界是一侧为零即完全干净、为一即纯噪。标准共享调度只走对角线，所以干净伙伴的边界态从没被监督到。

### 不对称调度：同一个步数、两条弯曲的噪声轨迹

论文保留一个均匀采样的共享步索引，但把线性网格分别做弯曲映射。每侧用带位移强度的函数把基础网格 warp 后再缩放到相同的起终点，视频位移强度大于音频时，全程视频噪声高于音频，轨迹位于对角线下方。实现上取视频位移 9、音频位移 2，音频先收敛，桥把越来越干净的音频送进视频，形成自然的先后顺序，而不是手工分阶段。

连续弯曲很少恰好落在零噪声边界，因此再用小比例干净分支子任务显式监督边界，例如音频条件视频生成时固定音频为干净且屏蔽该侧损失，被固定的一侧只当条件、不当回归目标。这就保证单侧编辑时非目标流不被重写。

\[S_{k}(\sigma)=\frac{k\,\sigma}{1+(k-1)\,\sigma},\quad\sigma_{v}^{(i)}=\mathcal{R}\big[S_{k_{v}}\big](\bar{\sigma}_{i}),\quad\sigma_{a}^{(i)}=\mathcal{R}\big[S_{k_{a}}\big](\bar{\sigma}_{i}),\]

上式先定义弯曲函数，再把同一基础网格分别送入视频和音频的映射，得到随步索引变化的噪声对。由于函数随强度单调递增，视频强度更大即全程偏离对角线。训练时文本与参考还各自以 0.1 概率丢弃，以支持推理时的双轴无分类器引导，并加入以参考为目标的重建子任务来显式监督不动的内容。

**非对称调度器 × 干净分支子任务：** 非对称调度器指用同一个步索引经不同弯曲函数映射出视频噪声水平和音频噪声水平，使音频先干净、视频后干净；干净分支子任务指把一小部分样本直接固定一侧为零噪声且不算该侧损失，搭配后连续弯曲覆盖对角线附近、子任务补上边界，推理时固定一侧才在分布内。

**意图感知编辑 × 自精炼：** 意图感知编辑指只改用户指定的模态、把保留模态固定为零噪声并直接返回源隐变量；自精炼指第一次联合生成后保留满意的一侧、把不满意的一侧加噪到中间水平再沿缩放轨迹重去噪，二者都依赖干净分支训练，区别只在固定流来自用户输入还是来自上一次生成。

### 两段训练吃什么数据、冻结什么、损失怎么算

第一段单模态预训练不吃任何配对样本，视频分支和音频分支并行练生成与编辑。第二段对齐微调只吃配对数据，只更新桥和归一化参数，两侧主干冻结。配对阶段是欠一轮状态，抽样量不到池子一轮。损失是整流流匹配损失，对两侧分支的速度预测与目标速度算平方误差，再乘分支权重和任务掩码。掩码为零的一侧不计损失，只提供干净条件。

原 Table 1 给出 Corpus（语料池规模）与 Seen（优化器实际消费样本数），M 表示 1000000 样本。视频预训练 Pretrain (V) 中，生成 gen 的 Corpus 为 14.5M、Seen 为 33.4M；编辑 edit 分别为 0.8M 与 0.8M；合计 total 分别为 15.3M 与 34.3M。

音频预训练 Pretrain (A) 中，生成 gen 的 Corpus 为 14.0M、Seen 为 27.4M；编辑 edit 分别为 0.9M 与 27.4M；合计 total 分别为 14.9M 与 54.9M。池大小与消费量不同，重复抽样会使 Seen 大于 Corpus。

音视频对齐 Align (AV) 中，生成 gen 的 Corpus 为 0.46M、Seen 为 0.31M；编辑 edit 分别为 0.28M 与 0.36M；合计 total 分别为 0.74M 与 0.67M。附录明确 0.67M 次抽样约相当于遍历 0.74M 配对池的 0.90 轮，属于欠一轮训练；正文说明对齐微调用到的总样本量不足单模态预训练合计的 1%。这些数字是训练样本预算，不能直接推出显存占用或收敛速度，训练仍需 720p、121 帧、16 kHz 单声道与 AdamW 等设置配合理解。

### 推理与数据：步数、引导强度、子任务配比

推理用 30 步去噪，视频与音频的文本和参考引导强度分别取不同组合，自精炼时把已生成音频加噪到 0.5 再沿缩放轨迹重去噪。训练时联合生成任务内标准目标占 0.7、重建占 0.1、两个干净分支各占 0.1，联合编辑任务内标准目标占 0.8、两个自精炼子任务各占 0.1。

以下导读针对架构与 2 阶段训练图：左侧看编码器到解码器的数据流与噪声调度器的注入位置，右侧看 2 阶段的数据与冻结标记，重点看配对数据只训练哪里，图中火焰表示更新、雪花表示冻结。

> **看图路径：** 1. 先沿左侧编码器到右侧解码器的实线去噪路径看主数据流；2. 再看中间 N 个重复块内自注意力与两类交叉注意力的位置；3. 最后看右侧两阶段训练图中火焰与雪花标记的更新与冻结对象

[![原论文 Figure 3：Illustration of the UniAVC framework.](https://arxiv.org/html/2610.24791v1/arch_main1.png)](https://arxiv.org/html/2610.24791v1/arch_main1.png)

*论文图 3。原论文 Figure 3:：“Illustration of the UniAVC framework.”。*

这张图确实可见左侧视频与音频编码器后各有一个拼接符号与噪声调度器，中间重复 N 次的块包含自注意力、文本交叉注意力和跨模态交叉注意力，底部图例区分参考 token 与噪声目标 token；右侧第一阶段 2 分支各吃单模态数据并标火焰，第二阶段两侧标雪花、中间桥标火焰。它帮助定位参数更新：配对阶段不动主干，只动桥。

### 联合编辑在什么基准、什么指标下可比

联合编辑在 JAVEditBench 与 InsAVE-80K 的留出测试集上按各自官方协议评测。JAVEditBench 侧视觉质量用美学模型打分、音频质量用 UTMOSv2、同步用 SyncNet，指令服从、视频保真与整体质量用多模态裁判打分；InsAVE-80K 侧用 Fréchet 视频距离与音频距离衡量真实感，用 VideoCLIP-XL 与 CLAP 衡量文本与每侧的一致，用 ImageBind 衡量两侧语义一致，用 PEAVS 预测同步主观分。同一缩写在不同基准下含义不同，不能跨表直接比数字。

以下导读针对联合编辑定性对比图：每行是一种编辑家族并附完整指令，列为输入、UniAVC、MiniMax-H3、InstructAV2AV，重点看指令要求改动处与要求保持处是否同时满足。

> **看图路径：** 1. 先看首列输入与后三列三种方法的列标题；2. 再看每行指令中要求改动与要求保持的内容；3. 最后对比同一行频谱图与人物背景的变化

[![原论文 Figure 4：Qualitative comparisons for joint editing on JAVEditBench.](https://arxiv.org/html/2610.24791v1/qualitative.png)](https://arxiv.org/html/2610.24791v1/qualitative.png)

*论文图 4。原论文 Figure 4:：“Qualitative comparisons for joint editing on JAVEditBench.”。*

这张图确实可见五行为人物变老、人物增加、人物移除、台词替换、背景替换，每行下方彩色指令标出改动对象与保持对象，UniAVC 列在人物身份与背景保留上更接近指令，而另两列出现背景错换或人物错换。它说明自动指标之外，保真与服从需要同时看。

下表保留原 Table 2 的 7 种方法与两个基准各自的 6 个指标。前六列属于 JAVEditBench，后六列属于 InsAVE-80K 的留出测试集，不能跨基准比较绝对值。箭头保留原方向；JAVEdit†表示结果引自 Chen 等（2026c），它在 InsAVE-80K 的破折号是原表未报告项，不是 0 分。

| Method | JAVEditBench VQ↑ | JAVEditBench AQ↑ | JAVEditBench AVS↑ | JAVEditBench IC↑ | JAVEditBench VF↑ | JAVEditBench AVQ↑ | InsAVE-80K FVD↓ | InsAVE-80K TV-A↑ | InsAVE-80K FAD↓ | InsAVE-80K TA-A↑ | InsAVE-80K AV-A↑ | InsAVE-80K PEAVS↑ |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| AVED | 0.0590 | 1.72 | 0.1641 | 2.95 | 3.87 | 2.93 | 305.41 | 24.68 | 2.86 | 29.89 | 26.44 | 3.15 |
| AVI-Edit | 0.0604 | 2.34 | 0.2721 | 3.49 | 3.89 | 3.86 | 205.34 | 25.15 | 5.09 | 30.07 | 26.37 | 2.54 |
| Cascaded | 0.0563 | 2.35 | 0.2925 | 3.99 | 4.08 | 3.51 | 326.63 | 25.18 | 8.01 | 32.47 | 22.67 | 3.20 |
| JAVEdit† | 0.0596 | 2.42 | 0.3688 | 4.07 | 4.22 | 3.88 | – | – | – | – | – | – |
| InstructAV2AV | 0.0588 | 1.40 | 0.1759 | 2.88 | 3.93 | 3.61 | 180.38 | 25.23 | 2.75 | 34.96 | 27.72 | 3.24 |
| MiniMax-H3 | 0.0605 | 2.42 | 0.2307 | 4.11 | 4.17 | 3.61 | 211.24 | 20.37 | 3.25 | 27.32 | 25.11 | 3.75 |
| UniAVC (ours) | 0.0599 | 2.59 | 0.2975 | 4.42 | 4.48 | 3.85 | 150.86 | 25.66 | 1.99 | 27.36 | 28.09 | 3.51 |

UniAVC 在 JAVEditBench 的音频质量 AQ、指令服从 IC 和视频保真 VF 上最高，但 AVS 低于 JAVEdit，VQ 低于 MiniMax-H3 和 AVI-Edit，整体质量 AVQ 也低于 JAVEdit 和 AVI-Edit。因此它并未在所有编辑指标上胜出。在 InsAVE-80K 上，它的 FVD、TV-A、FAD 和 AV-A 最好；PEAVS 仍低于 MiniMax-H3，TA-A 则低于 InstructAV2AV、Cascaded、AVI-Edit 与 AVED。两个基准各自的未胜出项需要一并考虑，不能把统一模型的优势概括成全面最优。本表数值与单位依据论文 PDF。

### 联合生成与跨模态生成的证据与边界

联合生成在 Verse-Bench 上按前人协议报告运动、美学、制作质量、文本音频一致、唇同步置信与词错率，其中唇同步只在有人声口型的样本上打分。跨模态在 VGGSound 测试集上报告 Fréchet 视频距离、音频距离、去同步误差与 ImageBind 分，其中 Fréchet 距离对真值计算，只在生成对应模态时报告，破折号表示该方向未报告的距离，不作零值处理。

原 Table 3 左侧的 Joint Audio-Video 分组在 Verse-Bench 上比较 7 种方法。MS、AS、PQ、CS、LSE-C 越高越好，WER 越低越好；JoVA†的结果引自 Huang 等（2025）。下表完整保留这个联合生成子表，不与另一方向的结果混合。

| Method | MS↑ | AS↑ | PQ↑ | CS↑ | LSE-C↑ | WER↓ |
| --- | --- | --- | --- | --- | --- | --- |
| UniVerse-1 | 0.20 | 0.47 | 5.20 | 0.16 | 1.62 | 0.18 |
| JavisDiT | 0.27 | 0.42 | 5.49 | 0.19 | 0.85 | 1.00 |
| Ovi | 0.55 | 0.47 | 6.20 | 0.20 | 6.61 | 0.12 |
| JoVA† | 0.75 | 0.49 | 6.23 | 0.29 | 6.65 | 0.11 |
| LTX-2.3 | 0.37 | 0.34 | 6.21 | 0.26 | 4.07 | 0.09 |
| MiniMax-H3 | 0.34 | 0.48 | 6.87 | 0.36 | 6.96 | 0.13 |
| UniAVC (ours) | 0.40 | 0.49 | 6.26 | 0.30 | 6.72 | 0.08 |

UniAVC 的 AS 与 JoVA 并列最高，WER 最低；PQ、CS 和 LSE-C 居第二，MS 仍低于 JoVA 和 Ovi。词错率最低只说明转写一致性较好，不等于画面更好；运动分、美学分与同步分各有自己的提取模型和评测范围，结论只在该协议与裁判组合下成立。本表数值与单位依据论文 PDF。

原 Table 3 右侧另在 VGGSound 测试集上比较双向跨模态生成。下面把原 Audio-to-Video 与 Video-to-Audio 分组明确列为方向条件，各保留 3 种方法及原 4 个指标；原表未列的距离仍为破折号。

| Direction | Method | FVD↓ | FAD↓ | DeSync↓ | IB↑ |
| --- | --- | --- | --- | --- | --- |
| Audio-to-Video | TempoTokens | 786.61 | – | 1.359 | 0.132 |
| Audio-to-Video | AVTok | 150.26 | – | 1.317 | 0.143 |
| Audio-to-Video | UniAVC (ours) | 103.17 | – | 0.773 | 0.291 |
| Video-to-Audio | MMAudio | – | 17.09 | 0.813 | 0.291 |
| Video-to-Audio | VinTAGe | – | 80.06 | 1.294 | 0.044 |
| Video-to-Audio | UniAVC (ours) | – | 10.12 | 0.650 | 0.305 |

在 Audio-to-Video 组，UniAVC 的 FVD 为 103.17、DeSync 为 0.773、IB 为 0.291，均优于该组的 TempoTokens 与 AVTok；在 Video-to-Audio 组，它的 FAD 为 10.12、DeSync 为 0.650、IB 为 0.305，也优于同组的 MMAudio 与 VinTAGe。这支持该模型在论文所测双向条件下的质量与同步表现，但 Fréchet 距离小只表示特征分布更接近参考集，不能直接等同人眼或人耳评价，也不能把 2 个方向的距离混为同一排名。本表数值与单位依据论文 PDF。

### 分阶段、推理模式与调度强度各自带来什么

消融在 JAVEditBench 上做，默认配置为分阶段训练加完整推理模式加位移组合 2 与 9。训练范式上，分阶段全面高于单阶段，且提升主要在跨模态相关指标而非纯视觉质量，支持把配对容量留给对齐的解释。推理模式上，意图感知通过引用干净源改善音频质量，自精炼通过对着已接受的另一侧重噪单侧来改善指令服从，两者叠加时同步与整体质量最高。调度上，去掉不对称的等强度组合在跨模态指标上掉得最多而视觉影响小，过度加大位移到 3 与 12 反而多数指标回落，说明弯曲适度才有用。

下表完整保留原 Table 4 在 JAVEditBench 上的 3 组消融：训练范式两行、推理模式四行、调度偏移三行。Group 是原分组条件，Setting 是原设置，后 6 个指标方向与主编辑结果一致；各组内的默认 Progressive、Full 与(ka, kv)=(2, 9) 为最高行。

| Group | Setting | VQ↑ | AQ↑ | AVS↑ | IC↑ | VF↑ | AVQ↑ |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Training paradigm | Single-stage | 0.0584 | 2.27 | 0.2446 | 4.21 | 4.24 | 3.53 |
| Training paradigm | Progressive | 0.0599 | 2.59 | 0.2975 | 4.42 | 4.48 | 3.85 |
| Inference mode | Base | 0.0584 | 2.37 | 0.2643 | 4.22 | 4.31 | 3.68 |
| Inference mode | Intent-aware | 0.0596 | 2.53 | 0.2728 | 4.31 | 4.39 | 3.75 |
| Inference mode | Self-refinement | 0.0592 | 2.52 | 0.2643 | 4.39 | 4.43 | 3.75 |
| Inference mode | Full | 0.0599 | 2.59 | 0.2975 | 4.42 | 4.48 | 3.85 |
| Scheduler shift | (ka, kv)=(1, 1) | 0.0589 | 2.48 | 0.2545 | 4.34 | 4.35 | 3.67 |
| Scheduler shift | (ka, kv)=(3, 12) | 0.0592 | 2.51 | 0.2618 | 4.41 | 4.40 | 3.80 |
| Scheduler shift | (ka, kv)=(2, 9) | 0.0599 | 2.59 | 0.2975 | 4.42 | 4.48 | 3.85 |

3 组中，Progressive、Full 与位移(2, 9) 各自在本组的六项指标上最高。单阶段与对称调度(1, 1) 的差距主要体现在音频与联合质量等跨模态项；把位移增至(3, 12) 也没有超过默认设置。这里的比较只覆盖该基准和采样设置，换语料池或训练轮次可能改变结论；多目标组合指令在训练集中较少，复杂多改请求仍可能执行不全。本表数值与单位依据论文 PDF。

### 哪些还没测、哪些开销必须接受

原文附录明确了 3 类局限。训练开销上，2 阶段要先吃数千万级单模态样本再做对齐，资源需求大。推理延迟上，每次请求都要走双流全轨迹，自精炼还要对目标模态走第二遍，无法实时部署。指令复杂度上，配对库里少有多改并发的组合请求，多目标指令可能改不全。

覆盖范围上，方法只覆盖一条 1 维轨迹加两个边界面，而不是完整的噪声对平面，桥只做对齐不修单侧本身的缺陷。这些不是实现错误，而是设计取舍：全平面覆盖需要更多配对监督，修单侧缺陷需要回炉单侧主干。没有测量延迟、误判率或成本时，不能承诺它们会改善，训练资源、推理步数与实际帧率要分开看。

### 复现第一步做什么、去哪里找资源

复现先对齐数据与分支起点：视频侧用单模态图像视频混合、音频侧用环境声语音混合各自练好生成与编辑，再冻结两侧只训桥；对齐阶段用 TAVGBench、JAVEdit 与 InsAVE-80K 的配对池，按生成 0.30、编辑 0.70 采样。关键超参数照抄原文运行点：视频位移 9、音频位移 2、文本与参考丢弃均为 0.1、推理 30 步、自精炼起点 0.5。

资源方面，论文给出的项目页为第三方镜像可达，状态码 200，只能证明该链接本次可打开，不能证明作者已开源代码或权重。代码开源、权重可下载、系统可运行是三件事，需分别核验：有仓库不等于有权重，有权重不等于一键可跑通双流推理。来源未确认不是技术缺陷，但写复现报告时要如实写清缺哪一项。

### 什么时候值得试、什么时候先别用

当任务同时需要听指令、保源和跨模态同步，且手头配对数据少而单模态数据多时，这套先分开练、再只学桥的路线值得试；当工作流里经常只改一侧而要另一侧纹丝不动，或第一次只满意一侧想重生另一侧时，干净分支训练出的两种推理模式可以直接用。

当需要实时、低延迟或多目标组合编辑时先谨慎：双流全轨迹加第二遍重生的延迟较高，复杂指令的训练覆盖不足。复现时先跑通单侧能力再看跨模态增益，评测时固定基准与裁判并同时看质量、服从、保真与同步，缺任 1 维都不要下全面最优的结论。

<details>
<summary>📎 论文与评分元数据</summary>

排名：前50% | 文档类型：方法研究 | [arXiv 原文](https://arxiv.org/abs/2610.24791v1)

</details>

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。

- 评分规则：type-aware-v1

- 评分模型：muse-spark-1.3-contributor

- 评分请求协议：openai_responses

---

[← 返回 2026-10-20 语音/音乐/音频论文速递](/audio-paper-digest-blog/posts/2026-10-20/)
