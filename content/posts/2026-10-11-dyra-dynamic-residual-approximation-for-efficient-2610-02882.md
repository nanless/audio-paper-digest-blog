---
title: "DyRA: Dynamic Residual Approximation for Efficient Matrix Multiplication in DNNs"
date: 2026-10-11
draft: false
tags: [语音识别, 低秩压缩, 高效推理, 语音]
categories: [论文速递]
description: "DyRA 针对稠密矩阵乘法太贵的问题，在静态结构化权重近似之外增加随输入变化的低秩残差修正，在视觉、语音和语言模型上用同等计算预算保留更多输出精度，但其加速主要适用于矩阵-矩阵乘法充足的场景。"
hiddenInHomeList: true
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_arxiv_id: "2610.02882"
paper_digest_workbench_contract: "researcher-workbench-v1"
paper_digest_reader_title: "DyRA：用输入相关的残差修正加速大模型的矩阵乘法"
paper_digest_original_title: "DyRA: Dynamic Residual Approximation for Efficient Matrix Multiplication in DNNs"
paper_digest_arxiv_version: 1
paper_digest_arxiv_versioned_id: "2610.02882v1"
paper_digest_arxiv_abs_url: "https://arxiv.org/abs/2610.02882v1"
paper_digest_arxiv_pdf_url: "https://arxiv.org/pdf/2610.02882v1.pdf"
paper_digest_primary_task: "语音识别"
paper_digest_tags_contract: "paper-tag-flat-tags-v2"
paper_digest_tags_selection_contract: "paper-tag-selection-v2"
paper_digest_tags_registry_version: "paper-tag-catalog-v2"
paper_digest_tags_registry_sha256: "0a0847314ab2059d95efac33376414498e598a1f02a1486869bee0efc481d1f7"
paper_digest_tags_concepts: [{"facet":"task","id":"task.asr","label":"语音识别"},{"facet":"method","id":"method.low-rank-compression","label":"低秩压缩"},{"facet":"research_focus","id":"research_focus.efficiency","label":"高效推理"},{"facet":"signal","id":"signal.speech","label":"语音"}]
paper_digest_primary_method: "低秩压缩"
paper_digest_score: 6.9
paper_digest_rank_bucket: "前50%"
paper_digest_document_type: "方法研究"
paper_digest_one_sentence: "DyRA 针对稠密矩阵乘法太贵的问题，在静态结构化权重近似之外增加随输入变化的低秩残差修正，在视觉、语音和语言模型上用同等计算预算保留更多输出精度，但其加速主要适用于矩阵-矩阵乘法充足的场景。"
paper_digest_authors: [{"affiliations":["Department of EECS, University of Michigan"],"name":"Daewon Chae"},{"affiliations":["Department of EECS, University of Michigan"],"name":"Hyunwon Chung"},{"affiliations":["Qualcomm AI Research"],"name":"Changwoo Lee"},{"affiliations":["Department of EECS, University of Michigan"],"name":"Hun-Seok Kim"}]
paper_digest_abstract_sha256: "987201c08783fd1c7741e7a62c131e25e6f9507bd8d9e135dc4c71f995e18269"
paper_digest_sidecars: {"citation.bib":{"sha256":"562a8750c3f21126f93be7bbb1eaf2da169285b2e09fad8fb93389f191a1ba09","url":"/audio-paper-digest-blog/data/papers/2026-10-11/2610-02882/citation.bib"},"citation.json":{"sha256":"d8ed77d1b49f03700cf759e969f6a297cd55008533c76ca512bb5bbabbe2c166","url":"/audio-paper-digest-blog/data/papers/2026-10-11/2610-02882/citation.json"},"citation.ris":{"sha256":"8ab4e9eea5259f0536e6428c70b65b815bcc203a7bc40b860e65098800cbdff3","url":"/audio-paper-digest-blog/data/papers/2026-10-11/2610-02882/citation.ris"},"rethink-context.json":{"contract":"paper-research-context-v2","sha256":"febbfac8b2b19cbbd80232d02e7946b30bc7ec36901d359d87ca9c9bd4894a2d","url":"/audio-paper-digest-blog/data/papers/2026-10-11/2610-02882/rethink-context.json"}}
paper_digest_api_reader_contract: "beginner-researcher-v3"
paper_digest_api_reader_article_sha256: "34d575dc5814f1bdfb9ed3bee71990ee0e1dc4f9d4d28096f05aaa4e33a14f9c"
paper_digest_api_reader_plan_sha256: "6657b4d62714c2ce665519b3f673f98ec330bbc06d2cf7932bcd11c5df22822e"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings-v4"
paper_digest_api_reader_source_bindings_sha256: "744468af8b51d791173164964cb886dab3b3366dc65dbc3c383f67904fcf69a4"
paper_digest_api_reader_source_table_count: 3
paper_digest_api_reader_source_formula_count: 4
paper_digest_api_reader_structured_artifacts_sha256: "b92a2f7b49f735f5228c4d4fa604118ff53eff35f4b415223193f84d47644672"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity-v1"
paper_digest_api_reader_author_identity_sha256: "ae6a20afb481e1d622412b963630d72a5dbd437c496aaebbe898b2d8cea28c09"
paper_digest_api_reader_author_count: 4
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity-v1"
paper_digest_api_reader_resource_identity_sha256: "b32d82e6ad05dba695c7646d8e7718fbcbb6e84fa2c980cf7d53d1b8f9b1fd43"
paper_digest_api_reader_resource_count: 6
paper_digest_api_reader_figure_persistence: "ephemeral-no-persisted-figure-assets-v1"
paper_digest_api_reader_decision_projection: "api-reader-decision-projection-v2"
---

# 📄 DyRA：用输入相关的残差修正加速大模型的矩阵乘法

> 英文题目：*[DyRA: Dynamic Residual Approximation for Efficient Matrix Multiplication in DNNs](https://arxiv.org/abs/2610.02882v1)*

> 标签：#语音识别 | #低秩压缩 | #高效推理 | #语音
>
> 评分：**6.9/10** | 创新 1.2/2 | 技术严谨 1/1.5 | 实验充分 1.2/1.5 | 清晰度 0.8/1 | 影响力 0.4/1.5 | 开源 1/1.5 | 可复现 0.3/0.5 | 工程/实践 1/1.5


## 👥 作者与机构

- Daewon Chae：Department of EECS, University of Michigan
- Hyunwon Chung：Department of EECS, University of Michigan
- Changwoo Lee：Qualcomm AI Research
- Hun-Seok Kim：Department of EECS, University of Michigan

## 📌 核心摘要

预训练大模型的推理成本主要来自稠密矩阵乘法，低秩分解、Monarch和BLAST等结构化近似通过压缩权重矩阵降低计算量，但权重误差会被当前输入激活放大，造成输出激活出现较大偏差。DyRA先保留静态结构化近似的计算结果作为基线输出，再把权重残差与当前输入激活的乘积作为待补偿的残差乘积，使校正直接面向决定精度的输出误差。接着该残差乘积被写成低秩左右因子的分解问题，并用交替最小二乘在推理时单步求解，其中左因子依赖的投影矩阵可离线预计算，在线只需输入乘以瘦矩阵得到左因子，再解出右因子并加回基线输出。与固定增加静态秩不同，DyRA的右因子随当前输入协方差调整，在各向同性输入下退化为静态高秩近似，在非各向同性输入下形成输入自适应子空间。在ADE20K上DINOv3语义分割评测中，60% FLOPs降低下DyRA的mIoU仅下降1.7点，而FLOPs对齐的权重近似基线下降54.1点。在NVIDIA A40上DINOv3的端到端延迟评测中，DyRA实现1.52倍加速，低秩基线达到同一加速时的精度下降幅度约为DyRA的3.7倍。该结论适用于矩阵与矩阵相乘较大的预填充或视觉编码等批量推理，自回归逐词解码的向量与矩阵负载不是其主要目标，动态秩跨层自适应分配也尚未验证而留待后续工作。

## 🔗 开源与复现资源

- 代码相关资源：<https://github.com/daewon88/DyRA> — 链接可访问（HTTP 200）

- 第三方资源：<https://huggingface.co/google/vit-large-patch32-384> — 暂时无法访问

- 第三方资源：<https://github.com/facebookresearch/dinov3> — 链接可访问（HTTP 200）

- 第三方资源：<https://huggingface.co/facebook/wav2vec2-large-960h-lv60-self> — 暂时无法访问

- 第三方资源：<https://huggingface.co/GSAI-ML/LLaDA-8B-Base> — 暂时无法访问

- 第三方资源：<https://huggingface.co/google/vit-base-patch16-224> — 暂时无法访问

可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 这篇论文要解决什么计算问题

现代视觉、语音和语言大模型推理慢，很大一部分时间花在稠密线性层的矩阵乘法上。论文以 ViT-L/16 为例指出线性层约占总 FLOPs 的 96.7%，因此想把每个稠密权重矩阵换成计算更省的结构化形式。初学者可以这样理解任务：输入是一批激活矩阵 X，目标是算出 X 与权重 W 的乘积，但又不想付完整的稠密乘法代价，必须保留的信息是原始模型的输出行为和下游精度，输出则是一个更快但足够像原模型的近似乘法。已有路线是离线对权重做低秩分解，或者用 Monarch、BLAST 等分块结构去拟合权重。

这类做法只看权重本身是否接近，不管推理时真正进来的输入会把误差放大多少。论文要回答的就是：在同样的计算预算下，能否直接对输出误差做修正，让近似乘法更忠实。对刚接触音频领域的读者，语音识别里的 Wav2Vec 2.0 同样有大量全连接层和注意力投影，这个问题是相通的，只是本文实验覆盖了视觉、语音和语言 3 种模型。

### 已有结构化矩阵方法分工有何不同

低秩近似是最直观的压缩：把权重写成两个瘦矩阵的乘积，只保留截断奇异值分解中最大的若干奇异成分，在 Frobenius 范数下是同秩最优的权重近似。Monarch 把方阵写成块对角左因子、置换和块对角右因子的乘积，通过置换改变块组合方式，实际用时把稠密权重按块重排后每块做截断奇异值分解得到因子。BLAST 把权重切成小块网格，每块写成共享行基、每块特有的中间小矩阵和共享列基的乘积，行基在同一块行内复用，列基在同一块列内复用，通过最小化重构误差求因子。

另一条线是输入感知分解，它用校准数据的激活构造变换矩阵 S，把权重写成 WS 与 S 逆的乘积，再对 WS 做截断奇异值分解，例如用通道幅度的对角缩放或输入协方差的 Cholesky 因子作为 S。这类方法已经利用了校准集的平均激活，但分解完权重就固定了，遇到与校准分布不同的单个测试样本仍会失配。

**Monarch 矩阵 × BLAST 矩阵：** Monarch 矩阵指用两个块对角因子加中间置换构成的结构化权重，表达块置换后的分块模式；BLAST 矩阵指按块网格共享行基和列基、每块再用中间小矩阵组合的结构。两者都比纯低秩更有表达力，DyRA 都可以作为外挂修正叠加在它们之上。

论文把 DyRA 定位为叠加在这些静态方法之上的在线修正，而不是替代它们。也就是说，无论底层用低秩、Monarch 还是 BLAST，甚至用输入感知分解得到的静态因子，DyRA 都额外估计当前输入造成的输出残差。

### 为什么只近似权重会在输出上出错

关键在于误差是输入相关的。把预训练权重拆成静态近似与残差两部分，完整乘积就是两项之和，静态方法只算第一项，丢掉的正是输入与残差权重的乘积。即使残差权重的范数很小，它与当前输入相乘后仍可能很大，因为输入会沿某些特征方向放大误差。论文在 DINOv3 上的特征可视化就是为了说明这一点：把所有稠密线性层换成纯权重近似后，按 DINO 的 PCA 协议把前 3 个主成分映射为 RGB，纯低秩、Monarch 和 BLAST 的特征图都比原始模型更杂乱、语义分区更乱。

这对密集预测尤其致命，因为分割和深度需要保留细粒度的空间结构。对语音和语言任务同理，查询键投影或 MLP 的输出偏差会逐层累积。论文因此提出不只在权重空间追求接近，而要在输出空间直接优化对已实现乘积的近似。

### DyRA 的整体流程是怎样的

DyRA 的输入是当前层的激活 X、静态近似权重、残差权重以及离线准备好的投影矩阵，目标是输出更接近稠密乘法的结果，流程分为离线准备和在线推理两段。离线时先对每个权重求结构化近似，得到残差权重，并固定一个初始右因子，预计算一个只与残差和初始因子有关的瘦投影矩阵。在线推理时先算静态分支的基输出，再用输入乘以预计算矩阵得到左因子，接着以该左因子对输入和残差做 1 次最小二乘投影得到右因子，最后把左右因子的乘积累加到基输出上。

整个过程不显式构造完整的残差乘积，中间都经过秩 r 的窄通道。实现上用定制的 Triton 核把基投影、偏置和残差重构融合，避免把中间残差写回高带宽显存，并对小的 r 用片上 Cholesky 解对称正定小系统，对大的 r 改用基于矩阵乘法的 Newton-Schulz 迭代以利用张量核。作者资源当前已公开，代码仓库可用于复现这种融合推理。

### 静态分支与残差如何拆分

从一个样本的角度看，输入 X 先进入两条逻辑分支。静态分支就是普通的加速线性层，例如低秩的 2 次瘦乘法或 Monarch、BLAST 的分块乘法，输出基结果。残差分支要补的是丢掉的那一项。论文把权重写成静态部分加残差部分的形式。

\[{\bm{W}}=\widehat{{\bm{W}}}+{\bm{W}}_{\mathrm{res}},\]

于是完整乘积自然分成两项之和。

\[{\bm{X}}{\bm{W}}={\bm{X}}\widehat{{\bm{W}}}+{\bm{X}}{\bm{W}}_{\mathrm{res}}\]

常规方法只保留第一项，误差恰好是第二项。DyRA 保留第一项，同时用低秩因子在线估计第二项。

**静态权重近似 × 动态残差修正：** 静态权重近似指离线把权重矩阵换成低秩、Monarch 或 BLAST 等省计算的形式，推理时不再变化；动态残差修正指在线估计当前输入与残差权重的乘积并加回输出。前者省掉大部分稠密计算，后者纠正被输入放大的输出误差，两者相加才更接近原始矩阵乘法。

这种拆分的好处是兼容性强：静态部分可以用任何已有结构化方法，动态部分只关心如何便宜地估计当前输入对应的残差输出。代价是动态分支需要额外的投影和求解开销，论文后面用 FLOPs 对齐的比较来说明这笔开销是否值得。

### 残差乘积的低秩优化目标是什么

对固定的当前输入 X 和残差权重，DyRA 希望找两个瘦因子 L 和 R，使它们的乘积在平方 Frobenius 范数下最接近真正的残差输出。形式上就是对残差输出做秩 r 近似。

\[\min_{{\bm{L}}\in\mathbb{R}^{n\times r},\,{\bm{R}}\in\mathbb{R}^{r\times c_{2}}}\left\|{\bm{X}}{\bm{W}}_{\mathrm{res}}-{\bm{L}}{\bm{R}}\right\|_{F}^{2}.\]

如果显式算出完整残差再做截断奇异值分解，就能得到该秩下的最优解，但这恰好是想省掉的稠密乘法。DyRA 改用交替最小二乘直接优化 L 和 R：固定 R 求 L 是最小二乘，固定 L 求 R 也是最小二乘，都有闭式解。关键的省计算技巧是运算顺序：更新 L 时先把残差投影到右因子的 r 维空间，把输出维度从 c2 降到 r，再让 X 只乘瘦矩阵；更新 R 时先把输入投影到左因子的 r 维空间，把输入侧从 n 降到 r，再乘残差。这样全程只出现低维中间乘积。

下面的收敛图说明这种迭代很快接近最优，支持后文只用 1 次迭代的默认配置。图中 6 个子图覆盖注意力查询、键、值、输出投影和 MLP 两层，每条彩色曲线是一个 ViT 层，黑色虚线是最优截断奇异值分解下界，横轴是 ALS 迭代次数，纵轴是相对 Frobenius 误差。

> **看图路径：** 1. 看每个子图的横轴 ALS 迭代次数与纵轴相对 Frobenius 误差；2. 比较第 0 步到第 1 步误差下降的陡峭程度；3. 看第 1 步后曲线是否已贴近虚线的最优截断奇异值分解下界

[![原论文 Figure 2：Convergence of ALS-based residual product approximation across ViT layers.](https://arxiv.org/html/2610.02882v1/als_iteration_f.svg)](https://arxiv.org/html/2610.02882v1/als_iteration_f.svg)

*论文图 2。原论文 Figure 2:：“Convergence of ALS-based residual product approximation across ViT layers.”。*

可见从第 0 步到第 1 步误差急剧下降，第 1 步后已基本贴住下界，后续迭代改进很小。这意味着 1 次更新每种因子就抓住了大部分可抓的残差结构，也为把省下的计算用来增大秩 r 提供了依据。

**低秩分解 × 交替最小二乘：** 低秩分解指把目标乘积近似为瘦矩阵 L 与 R 的乘积，秩 r 远小于原维度；交替最小二乘指固定其中一个因子求另一个因子的最小二乘闭式解并轮流更新。DyRA 用它在不显式构造完整残差乘积的前提下求出适合当前输入的 L 和 R。

### 一次迭代的近似形式与额外代价

由于收敛很快，论文默认只做 1 次交替最小二乘更新，即先更新 L 1 次再更新 R 1 次，整体近似是静态输出加 1 次修正。

\[{\bm{X}}{\bm{W}}\approx{\bm{X}}\widehat{{\bm{W}}}+\operatorname{ALS}_{1}\!\left({\bm{X}}{\bm{W}}_{\mathrm{res}}\right)={\bm{X}}\widehat{{\bm{W}}}+{\bm{L}}^{(1)}{\bm{R}}^{(1)},\]

其中左因子的更新可以进一步写成输入乘以可预计算矩阵的形式，因为它只依赖残差和固定的初始右因子，离线算好后在线只剩 1 次瘦乘法。论文的分析指出，若把初始右因子取为残差奇异向量中对应第 k+1 到 k+r 的分量，则 DyRA 与把静态秩从 k 直接加到 k+r 的做法共享同样的左方向，区别在右基：静态做法用固定的权重奇异向量，而 DyRA 用与当前输入协方差有关的最小二乘解。当输入协方差为单位阵时两者退化为相同，否则 DyRA 的右基随输入重加权，这正是输入自适应性的来源。

代价上，静态秩 k 部分约需与 n、k 和通道数成正比的计算，动态秩 r 部分额外引入与残差尺寸成正比的项，在 r 远小于通道数时仍远小于稠密乘法，但比单纯增加静态秩多出一项构造自适应子空间的开销。为公平比较，论文按精确 FLOPs 计数给静态基线补足相应的秩增量，再比较剩余归一化输出误差。下图就是这种对齐预算下的层级误差比较，左为注意力输出层，右为 MLP 第一层，横轴是层号，纵轴是归一化 Frobenius 误差，蓝色 DyRA 越低越好，绿色为 FLOPs 对齐的静态低秩。

> **看图路径：** 1. 区分蓝色 DyRA 柱与绿色静态低秩柱，注意纵轴是归一化输出误差越低越好；2. 比较 Layer 12、15、18、22 四个层上两类方法的误差差距；3. 注意左图注意力输出层差距更大，右图 MLP 第一层差距相对小一些

[![原论文 Figure 3：Remaining normalized Frobenius error of DyRA and a static low-rank baseline under a matched FLOPs…](https://arxiv.org/html/2610.02882v1/frob_error_font.svg)](https://arxiv.org/html/2610.02882v1/frob_error_font.svg)

*论文图 3。原论文 Figure 3:：“Remaining normalized Frobenius error of DyRA and a static low-rank baseline under a matched FLOPs budget.”。*

在第 12、15、18、22 层中，DyRA 的误差柱都明显低于 FLOPs 对齐的静态低秩基线，说明同样的计算花在输入自适应的残差子空间上，比花在更高的固定秩上更能还原输出。

### 没有训练时离线准备和在线计算是什么

本研究的主体实验没有训练或微调模型，而是把预训练模型作为测试时近似与加速的对象，因此本节实际讲的是构造与推理过程。离线准备包括求静态结构化因子、算残差、固定初始右因子并预计算左投影矩阵，实验中初始右因子取残差权重的顶部右奇异向量，离线做 1 次，不引入输入相关的开销。在线推理对每个输入执行静态投影、左因子瘦乘法、右因子最小二乘求解和融合累加。

论文还报告了可叠加的两种有适配设置：一是用校准集做输入感知分解得到更强的静态起点，此时仍保持测试时在线修正；二是对 ViT-L 做 15 轮微调，此时 DyRA 增强的低秩层与静态基线用同样的 AdamW、学习率 2×10-5 和批量 1024 训练。前者校准用各数据集的训练划分，HumanEval 因无训练划分而借用 GSM8K 训练集做校准；后者固定动态秩为 16 并扫静态秩。理解这一点很重要：主结论的免微调增益与微调后的增益是不同条件下的结果，不能混为一谈。

### 实验在什么模型和条件下比较

图像分类用在 ImageNet-21K 预训练的 ViT-L/32，在 ImageNet-1K 上测 Top-1 准确率，对所有线性层做近似，DyRA 动态秩固定为 8，静态部分扫低秩秩、Monarch 块大小或 BLAST 秩，并为每个 DyRA 配置扫出 FLOPs 对齐的纯权重基线。密集预测用基于 ViT-7B 的 DINOv3，在 ADE20K 上做语义分割、在 NYUv2 上做深度估计，遵循 DINOv3 的预处理与解码协议，对所有线性层均匀施加近似，动态秩固定为 48。语音识别用在 960 小时数据上预训练微调的 Wav2Vec2-Large，在 LibriSpeech 测试集上按标准音频预处理和 CTC 解码报告词错误率，只对 MLP 两层和注意力查询键投影做近似，在 25% 和 50% 两种 FLOPs 减少率下各自网格搜索配置。

语言建模用 LLaDA-8B 扩散大模型，在 HumanEval 和 GSM8K 上评估，对查询键投影和 MLP 做近似，且查询键压缩更激进。自回归预填充补充实验用 LLaMA-7B，在 20% 矩阵乘法 FLOPs 减少下测困惑度和多选推理。延迟实验在 NVIDIA A40 上测 DINOv3 深度估计的端到端时间，DyRA 用融合 Triton 核，基线取已有结构化优化核与 torch.compile 中更快者。所有比较都强调 FLOPs 预算一致，指标方向是准确率越高越好、词错误率和困惑度越低越好。

### 视觉分类与密集预测保留了多少精度

先看 ViT-L 在 ImageNet 上的精度与 FLOPs 减少率曲线。三幅子图分别对应低秩、Monarch 和 BLAST，横轴是 FLOPs 减少率越往左越大，纵轴是 Top-1 准确率越高越好，黑色虚线是原始模型，蓝色是加 DyRA，绿色是纯结构化基线。

> **看图路径：** 1. 看横轴 FLOPs 减少率从右向左增大，纵轴是 Top-1 准确率越高越好；2. 比较每幅子图中蓝色 DyRA 曲线与绿色纯结构化基线的分离点；3. 注意高压缩区蓝色曲线仍保持高位而绿色曲线快速下跌

[![原论文 Figure 4：ImageNet classification accuracy at different FLOPs reduction levels for ViT-L.](https://arxiv.org/html/2610.02882v1/vit_final_re.svg)](https://arxiv.org/html/2610.02882v1/vit_final_re.svg)

*论文图 4。原论文 Figure 4:：“ImageNet classification accuracy at different FLOPs reduction levels for ViT-L. DyRA consistently improves the accuracy–efficiency trade-off across low-rank, Monarch, and BLAST.”。*

蓝色加 DyRA 曲线在各压缩水平下都高于绿色纯基线。论文报告在约 55% FLOPs 减少处，低秩和 BLAST 基线的精度下降分别为 66.1% 和 17.4%，而叠加 DyRA 后下降分别收窄到 2.4% 和 1.6%。这说明大部分输出误差确实来自输入放大，动态修正比单纯提高静态表达力更有效。密集预测的差距更极端：在 60% FLOPs 减少的语义分割上，DyRA 的平均交并比只比原模型低 1.7 个点，而静态基线掉了 54.1 个点。特征可视化也支持这一判断。下面三行分别为海滩、餐桌和牛群场景，第一列是输入照片，第二列是原始特征，其余是不同近似的特征，颜色来自前 3 个主成分。

> **看图路径：** 1. 先看第一列输入照片与第二列原始模型特征，记住天空、餐桌和牛群的颜色分区；2. 再横向比较低秩、Monarch 和 BLAST 列是否出现噪点和语义边界模糊；3. 最后看 DyRA 列是否恢复了接近原始模型的分区结构

[![原论文 Figure 1：DINOv3 feature visualizations under a 60% FLOPs reduction.](https://arxiv.org/html/2610.02882v1/dinopca_typo.png)](https://arxiv.org/html/2610.02882v1/dinopca_typo.png)

*论文图 1。原论文 Figure 1:：“DINOv3 feature visualizations under a 60% FLOPs reduction.”。*

可见纯低秩、Monarch 和 BLAST 的特征图噪点多、物体边界模糊，而 DyRA 列恢复了接近原始的天空分区、餐桌分区和牛群分区。需要强调条件：这些都是免微调、FLOPs 对齐的测试时近似结果，且动态秩分别固定为 8 和 48，换预算或换层覆盖方式结论可能变化。

**FLOPs 减少率 × 端到端加速比：** FLOPs 减少率指近似后理论浮点运算量相对稠密计算减少的比例；端到端加速比指在 NVIDIA A40 等真实 GPU 上测得的整体推理时间加速。FLOPs 减少不自动等于加速，DyRA 还用融合 Triton 核减少显存搬运，才把计算节省转化为实测加速。

### 语音与语言任务上的增益与边界

语音识别比较的是同样 FLOPs 减少率下的词错误率，越低越好。下表整理了原文报告的全部行列，比较问题是在 25% 和 50% 两种预算下，低秩或 BLAST 叠加 DyRA 是否优于对应的纯权重基线，指标方向为词错误率越低越好。

| FRR | Method | WER(↓\downarrow) |
| --- | --- | --- |
| 0% | Original | 1.92 |
| 25% | Low-rank | 2.21 |
| 25% | Low-rank + DyRA | 2.08 |
| 25% | BLAST | 2.07 |
| 25% | BLAST + DyRA | 2.03 |
| 50% | Low-rank | 24.54 |
| 50% | Low-rank + DyRA | 4.89 |
| 50% | BLAST | 6.48 |
| 50% | BLAST + DyRA | 4.27 |

表后解释：原始模型词错误率为 1.92。在 25% 减少时，低秩从 2.21 降到 2.08，BLAST 从 2.07 降到 2.03，提升较小但一致；在 50% 减少时，低秩从 24.54 大幅降到 4.89，BLAST 从 6.48 降到 4.27，说明压缩越激进，输入相关误差越大，动态修正的价值越明显。限制是该实验只近似了 MLP 与查询键投影，未覆盖值投影和输出投影，且只报告了 LibriSpeech 干净测试集。语言扩散模型上，低秩基线在 HumanEval 和 GSM8K 上准确率不足 4%，基本不可用，而同预算的 DyRA 提高超过 20 个百分点，更接近原模型。

输入感知分解能挽回一部分损失，但因权重固定仍不如 DyRA；在 ImageNet 约 70% FLOPs 减少处，DyRA 加普通低秩为 65.4%，再换成输入感知静态起点可到 68.8%，说明两者可叠加。

**输入感知分解 × DyRA 在线修正：** 输入感知分解指用校准集的激活协方差或通道幅度构造变换矩阵，再对变换后权重做截断奇异值分解，得到更保输出的固定权重；DyRA 在线修正指对每个测试输入再用一次交替最小二乘求残差因子。前者离线固定、无法适应单个样本，后者在线补充了样本相关的误差，两者可以叠加使用。

初学者应注意百分点与相对百分比的区别：这里说的 20 个百分点是准确率绝对差，不是相对提升。

### 自回归预填充的困惑度与推理题表现如何

为说明 DyRA 也适用于自回归模型的预填充阶段，论文在 LLaMA-7B 上做了 20% 矩阵乘法 FLOPs 减少的补充实验，用较长的少样本提示构成非平凡的预填充负载，指标是困惑度越低越好和多选准确率越高越好。下面先看困惑度完整原表，比较问题是同压缩下低秩加 DyRA 是否优于低秩和 BLAST，数值越低越好。

| CR | Method | WikiText | PG-19 | C4 |
| --- | --- | --- | --- | --- |
| 0% | Dense | 9.38 | 10.07 | 7.01 |
| 20% | Low-Rank | 16.00(+6.62) | 15.93(+5.86) | 10.81(+3.80) |
| 20% | BLAST | 12.94(+3.56) | 13.05(+2.98) | 9.26(+2.25) |
| 20% | Low-Rank + DyRA | 12.03(+2.65) | 12.48(+2.41) | 8.75(+1.74) |

表后解释：稠密基线在 WikiText、PG-19 和 C4 上分别为 9.38、10.07 和 7.01。20% 压缩下，纯低秩分别恶化到 16.00、15.93 和 10.81，BLAST 为 12.94、13.05 和 9.26，而低秩加 DyRA 为 12.03、12.48 和 8.75，在 3 组语料上都是同预算最优，且优于 BLAST。这支持把计算花在输入自适应修正上的判断，但这只是前向困惑度，没有测逐词解码吞吐，因为解码是向量-矩阵为主的负载，并非 DyRA 的主要目标。下面进一步看 6 组多选推理准确率的完整原表，括号是相对稠密的变化，平均分越高越好。

| FR | Method | PIQA | Wino | BoolQ | OBQA | ARC-e | ARC-c | Avg |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 0% | Dense | 81.66 | 74.90 | 77.03 | 47.60 | 80.18 | 50.85 | 68.70 |
| 20% | Low-Rank | 76.66(-5.00) | 69.38(-5.52) | 69.42(-7.61) | 45.20(-2.40) | 73.53(-6.65) | 41.72(-9.13) | 62.65(-6.05) |
| 20% | BLAST | 78.56(-3.10) | 67.64(-7.26) | 66.91(-10.12) | 44.80(-2.80) | 75.42(-4.76) | 43.43(-7.42) | 62.79(-5.91) |
| 20% | Low-Rank + DyRA | 77.69(-3.97) | 69.93(-4.97) | 71.50(-5.53) | 48.60(+1.00) | 76.05(-4.13) | 44.11(-6.74) | 64.65(-4.05) |

表后解释：稠密平均分为 68.70，纯低秩掉到 62.65，BLAST 为 62.79，而低秩加 DyRA 为 64.65，同样是同预算最优。分任务看，DyRA 在 BoolQ 和 OBQA 上挽回较多，在 ARC-c 上仍低 6.74 个点，说明增益不是均匀的。未胜出项是 PIQA 上 BLAST 的 78.56 仍略高于 DyRA 的 77.69，提醒总体趋势不能推广到每一组任务。所有数字都是裸数值，单位是困惑度或准确率百分点，含义以原表头为准。

### 理论节省是否变成真实延迟优势

论文在 DINOv3 深度估计上测了端到端延迟与精度的关系，横轴是 δ1 准确率越高越好，纵轴是加速比越高越好，右下角菱形是原始模型。DyRA 的蓝色圆点链在相近精度下位于绿色低秩方块链的上方，意味着同样加速下精度更高，或同样精度下加速更大。论文报告 DyRA 以约 0.6% 的精度下降实现 1.3×端到端加速；在达到 1.52×加速时，低秩基线的精度下降是 DyRA 的 3.7 倍。BLAST 的橙色三角链加速仅在 1.0×到 1.1×附近，基本没有形成有效加速，说明不是所有结构化形式都能直接转化为 GPU 速度。

这组结果依赖融合核与 A40 硬件，不能默认换硬件或换批量仍有相同加速。容易误解的是把 FLOPs 减少率当成加速比：前者是理论运算量，后者还受显存搬运、核启动和张量核利用率影响，DyRA 的融合累加与求解器选择正是为了弥合这一差距。

### 残差秩与迭代次数如何影响效果

消融在 ViT 图像分类上把 DyRA 叠加在低秩之上，分别扫残差秩 r 和交替最小二乘迭代次数 t，横轴都是 FLOPs 减少率，纵轴是 Top-1 准确率。左图比较 r 为 4、8、16、24 与纯低秩，右图比较 t 为 1、1.5、2 与纯低秩，其中 1.5 表示更新顺序为左、右、左。结果是所有 DyRA 配置都大幅高于绿色纯低秩虚线，即使 r=4 的小预算也有明显收益，且 r 在 8 到 24 之间相对稳健，没有出现越大越好的单调碾压。迭代次数上，t=1 已取得大部分增益，t=1.5 和 2 的额外提升很小，因此论文把 t=1 作为默认，用省下的计算去增大 r 更划算。

这与前面的收敛图是一致的：1 次更新已接近最优秩 r 解。但这不等于迭代永远无用，在其他模型或更大 r 下是否仍成立，原文没有给出完整扫描，属于尚未评测的范围。复现时应先固定 t=1 再调 r，避免同时调两个维度浪费预算。

### 方法的适用范围与尚未验证之处

DyRA 最有效的场景是有大矩阵-矩阵乘法的层，例如视觉 Transformer 的 MLP 和注意力投影、扩散语言模型的前向以及自回归模型的预填充。对于逐词自回归解码这种向量-矩阵为主的负载，算术强度低，动态求解的额外开销占比会变大，不是主要目标应用。论文也指出动态秩原则上可按输入或预算在线调整，但没有实现自适应秩分配，留作未来工作。证据上的限制包括：主实验多为免微调的测试时近似，微调实验只在 ViT-L 上做了 15 轮；语音只覆盖部分投影和干净测试集。

语言主结果集中在 LLaDA-8B，LLaMA-7B 只是 20% 压缩的补充；延迟只在 A40 上测得。因此，跨硬件、跨批量、跨噪声语音或更激进压缩下的结论仍待验证。缺证据不等于方法有错，只是不能把特定条件下的增益直接推广。

### 复现第一步做什么与需要什么资源

复现先从作者已公开的代码仓库起步，区分三件事：代码可运行、预训练权重可下载、系统可端到端运行。论文给出了 ViT、DINOv3、Wav2Vec2 和 LLaDA 的权重来源，其中部分第三方链接本次未能确认可达，需要自行确认权重版本与预处理一致。第一步建议复现 ViT-L 的 FLOPs 对齐曲线：固定动态秩为 8，扫静态秩，记录 Top-1 准确率与精确 FLOPs，再为每个 DyRA 点扫出同 FLOPs 的纯基线。实现时注意离线固定初始右因子并预计算左投影，在线只做 1 次左右更新，并加入小的岭正则保证小矩阵求逆稳定。

Triton 融合核不是必需的验证步骤，但要测延迟则需要它，否则理论 FLOPs 优势可能被显存搬运抵消。记录时保留千分位与小数精度，不自行四舍五入，百分点与相对百分比要分开写。

### 什么时候值得尝试与还需补什么验证

当模型已预训练且推理受线性层主导，又希望在不微调或轻微调下快速降本时，值得尝试把已有低秩、Monarch 或 BLAST 替换为同 FLOPs 的加 DyRA 版本，尤其在 50% 以上的高压缩区预期差距更大。当已有校准集时，可先做输入感知分解再叠加 DyRA，而不是二选一。复现第一步是跑通 ViT-L 的 FLOPs 对齐比较，确认 1 次迭代已接近最优且小秩仍有增益。还需要补的验证包括：在目标硬件和目标批量下实测延迟而非只看 FLOPs。

在目标语音噪声条件和目标语言任务上重测，因为不同层的输入协方差不同，增益分布也会不同；若要用于自回归解码，需单独评估解码吞吐而非只看预填充困惑度。总之，论文直接报告的是特定预算、特定层覆盖和特定硬件下的精度-效率权衡改善，证据支持输出空间自适应修正比单纯加高静态秩更省计算，但自适应秩分配与全场景部署仍是开放问题。

<details>
<summary>📎 论文与评分元数据</summary>

排名：前50% | 文档类型：方法研究 | [arXiv 原文](https://arxiv.org/abs/2610.02882v1)

</details>

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。

- 评分规则：type-aware-v1

- 评分模型：muse-spark-1.3-contributor

- 评分请求协议：openai_responses

---

[← 返回 2026-10-11 语音/音乐/音频论文速递](/audio-paper-digest-blog/posts/2026-10-11/)
