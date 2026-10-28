---
title: "Realizing Low-Precision Storage and Sparse Execution in a Folded FPGA Speech Enhancer"
date: 2026-10-27
draft: false
tags: [语音增强, 模型剪枝, 模型量化, 硬件原型]
categories: [论文速递]
description: "论文针对折叠复用引擎中精度与工作量脱钩的问题，用按存储定价的混合精度和按调度周期定价的通道稀疏分别压缩权重带与计算调度，在 Kria KV260 上证明稀疏跳过能同时降低帧耗时与动态能量而精度宽度主要影响存储与功耗。"
hiddenInHomeList: true
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_arxiv_id: "2610.35144"
paper_digest_workbench_contract: "researcher-workbench-v1"
paper_digest_reader_title: "折叠执行下存储与计算如何分别定价：FPGA 语音增强加速器解读"
paper_digest_original_title: "Realizing Low-Precision Storage and Sparse Execution in a Folded FPGA Speech Enhancer"
paper_digest_arxiv_version: 1
paper_digest_arxiv_versioned_id: "2610.35144v1"
paper_digest_arxiv_abs_url: "https://arxiv.org/abs/2610.35144v1"
paper_digest_arxiv_pdf_url: "https://arxiv.org/pdf/2610.35144v1.pdf"
paper_digest_primary_task: "语音增强"
paper_digest_tags_contract: "paper-tag-flat-tags-v2"
paper_digest_tags_selection_contract: "paper-tag-selection-v2"
paper_digest_tags_registry_version: "paper-tag-catalog-v2"
paper_digest_tags_registry_sha256: "cdef54423b5dfc00a1d017ef6639446d2ecd1d9c1acf71c8eb4f6219a46b7ba8"
paper_digest_tags_concepts: [{"facet":"task","id":"task.speech-enhancement","label":"语音增强"},{"facet":"method","id":"method.pruning","label":"模型剪枝"},{"facet":"method","id":"method.quantization","label":"模型量化"},{"facet":"artifact","id":"artifact.hardware","label":"硬件原型"}]
paper_digest_primary_method: "模型剪枝"
paper_digest_score: 7.0
paper_digest_rank_bucket: "前50%"
paper_digest_document_type: "系统技术报告"
paper_digest_one_sentence: "论文针对折叠复用引擎中精度与工作量脱钩的问题，用按存储定价的混合精度和按调度周期定价的通道稀疏分别压缩权重带与计算调度，在 Kria KV260 上证明稀疏跳过能同时降低帧耗时与动态能量而精度宽度主要影响存储与功耗。"
paper_digest_authors: [{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Clément Laroche"}]
paper_digest_abstract_sha256: "9d5b7bd3d50f5cee9a54c7f0b4953b37edd80a0627c8eb2bf1b40dab07fc2b56"
paper_digest_sidecars: {"citation.bib":{"sha256":"62676fa86e527f4916300f23b90eb7c024fd0cc1bd9ed2d62b70d8e47c5b3408","url":"/audio-paper-digest-blog/data/papers/2026-10-27/2610-35144/citation.bib"},"citation.json":{"sha256":"bb0254aa63438247bfa3f7130bb6cbf24c4590528bfc429e874fd63a2f63b557","url":"/audio-paper-digest-blog/data/papers/2026-10-27/2610-35144/citation.json"},"citation.ris":{"sha256":"fd06e72d7c4408cd6d08dd0b9bcad739bb321825f9e47dba3b0874d2c9c134c7","url":"/audio-paper-digest-blog/data/papers/2026-10-27/2610-35144/citation.ris"},"rethink-context.json":{"contract":"paper-research-context-v2","sha256":"24369f09f3e637037cacac91a56845f5c33114eec85c692ddf176fe89789b8ce","url":"/audio-paper-digest-blog/data/papers/2026-10-27/2610-35144/rethink-context.json"}}
paper_digest_api_reader_contract: "beginner-researcher-v3"
paper_digest_api_reader_article_sha256: "79fc32dc6ed95c1c32d96d351663bcd125d7ce9891265e91d3e0e143f8f7a4d7"
paper_digest_api_reader_plan_sha256: "9a240ad1e6f206aa693c45d8f13b867b62584f0c863c61acfc452e1e675c304c"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings-v4"
paper_digest_api_reader_source_bindings_sha256: "f39e6902ef7df778de9637699a1cb1982e43554c7a8f567de28ae9d775dd5d09"
paper_digest_api_reader_source_table_count: 2
paper_digest_api_reader_source_formula_count: 4
paper_digest_api_reader_structured_artifacts_sha256: "8efebe7c48b4869fe2c666b6fdaf134b193cf43cc9e3c38eda9529c240e0d940"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity-v1"
paper_digest_api_reader_author_identity_sha256: "2319a20302c11662b79cce010f58da74ba6cfe79615db9cb9afeb780b6abd724"
paper_digest_api_reader_author_count: 1
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity-v1"
paper_digest_api_reader_resource_identity_sha256: "63da8364c0af899461119cc234b2798b4508c6cdcb232e062d01f4fa08c6b86e"
paper_digest_api_reader_resource_count: 1
paper_digest_api_reader_figure_persistence: "ephemeral-no-persisted-figure-assets-v1"
paper_digest_api_reader_decision_projection: "api-reader-decision-projection-v2"
---

# 📄 折叠执行下存储与计算如何分别定价：FPGA 语音增强加速器解读

> 英文题目：*[Realizing Low-Precision Storage and Sparse Execution in a Folded FPGA Speech Enhancer](https://arxiv.org/abs/2610.35144v1)*

<!--paper-tag-hierarchy-v1:start-->

**研究分类**

- **研究任务**：[语音增强](/audio-paper-digest-blog/papers/?concept=task.speech-enhancement)
- **研究方法**：[模型压缩](/audio-paper-digest-blog/papers/?concept=method.compression) → [模型剪枝](/audio-paper-digest-blog/papers/?concept=method.pruning)；[模型压缩](/audio-paper-digest-blog/papers/?concept=method.compression) → [模型量化](/audio-paper-digest-blog/papers/?concept=method.quantization)
- **研究产物**：[硬件原型](/audio-paper-digest-blog/papers/?concept=artifact.hardware)

<!--paper-tag-hierarchy-v1:end-->

> 评分：**7.0/10** | 创新 1.4/2 | 技术严谨 1.2/1.5 | 实验充分 1.2/1.5 | 清晰度 0.8/1 | 影响力 0.8/1.5 | 开源 0/1.5 | 可复现 0.3/0.5 | 工程/实践 1.3/1.5


## 👥 作者与机构

- Clément Laroche：机构信息未能在本次解析中与作者逐人可靠绑定

## 📌 核心摘要

待处理的语音是带噪短时傅里叶变换幅度帧，目标是估计每一时频点的掩码以恢复干净语音，难点在于助听等端侧设备面积小而实时性要求高。论文采用的Conv-FSENet先用逐点卷积升维，再经九个结构相同的时域卷积块提取上下文，最后由掩码层输出257个逻辑值，主机负责短时傅里叶变换、Sigmoid与逆变换。折叠引擎把九个块复用在同一物理块引擎上顺序执行，权重以每通道共享码宽加移位的紧凑磁带形式存放，输出格式由共享重整化器统一控制，变窄的权重只缩小存储流而不缩小共享乘法器。训练在压缩谱均方误差上增加存储铰链项与通道组稀疏项，前者约束打包后的权重映像大小，后者把整个输出通道推向零以便跳过其乘累循环，组稀疏训练中期的不稳定仍需在第50轮冻结零通道掩码后继续优化幸存权重与精度来绕开。在VoiceBank-DEMAND测试集上以宽带PESQ为质量指标并在同一四通道折叠引擎上实测，稀疏的Skip-Plain以2.78高于最省的稠密构建Uniform-6的2.64，同时帧耗时以1.03毫秒低于1.77毫秒、单帧动态能耗以33.4微焦低于64.5微焦，其47.3%卷积乘累因整通道为零而被跳过。在同一引擎的固定宽度对照中，权重宽度从8位降至6位时动态功率下降27%而帧耗时变化不足5%，说明窄宽省存储与开关能耗但不省周期。结论仅来自该折叠引擎经Kria KV260上100兆赫兹板级实测的对比，未验证其他网络、其他板卡与强非平稳噪声下的泛化，循环加权组稀疏在本轮未优于普通组稀疏。

## 🔗 开源与复现资源

- 第三方资源：<https://fastmachinelearning.org> — 链接可访问（HTTP 200）

可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 语音增强要在小器件上解决什么矛盾

语音增强的输入是带噪语音的短时傅里叶变换幅度帧，目标是估计一个掩膜，乘回带噪谱后再做逆变换得到增强语音。助听器和可穿戴设备要求在本地实时处理，不能把音频传到云端，既要保护隐私又要保证响应，还要离线可用。

这类设备的困难在于面积小而时间相对宽裕。本文的帧周期是 16 ms，足够让硬件分时复用，但放不下给每一层都做一份专用电路的空间展开设计。论文先试过把 Conv-FSENet 按常用空间流程综合，即使只用八分之 1 通道宽度仍需要约 356 k 查找表，约为器件 117 k 的 3 倍，说明必须换一种把面积换成时间的实现方式。

读者需要先建立成本观：折叠后省位宽不自动省计算器，省权重要看存储带，省时间要看删掉了多少调度循环。后文所有训练目标都是围绕这两项真实可利用的节省设计的。

### 已有压缩路线为何不能直接套到折叠引擎

轻量化网络结构、量化、混合精度搜索是已有 3 条路线。混合精度可以给每层甚至每个通道每个权重学一个位宽，目标常用位操作数，即 MAC 数乘以激活位宽与权重位宽。这在给每层单独综合算术的数据流编译器中是成立的，因为窄位宽可以直接综合成更小的乘法器和逻辑。

折叠引擎打破了这种对应。论文指出单个物理引擎被全网分时复用，混合精度覆盖可能只改变数值表示而保留固定宽度乘法器，窄权重只改变打包存储而不缩小乘法器。固定数据通路的 8 位神经网络加速器也是同理，所有操作数都要经过同样的乘法器阵列。因此没有单一的位操作计数能决定折叠加速器的成本。

本文与 FINN 和 hls4ml 一类直接按训练位宽综合算术的路线不同，也与支持多种算术精度的覆盖路线不同，它研究的是一个固定宽度引擎如何通过可变宽度存储和整行跳过执行来兑现压缩，训练目标也要跟着改写。

### 论文要回答的定价问题是什么

论文要解决的具体问题是：在一个折叠复用的流式语音增强加速器上，学到的精度和稀疏到底能省什么。共享算术把三件事解耦了：精度、权重存储、调度工作量。降低某个权重的位宽不一定减少乘法器和周期，减少周期必须删掉整个输出通道的计算。

为此作者把压缩目标拆成两项。第一项是片上存储，用打包后的权重带大小衡量；第二项是调度周期，用可跳过的卷积乘累加占比衡量。训练时分别用存储约束和通道组稀疏去压这两项，部署时用表加带的表示把选择带过标准 FPGA 工具链，并用位精确检查保证部署复现训练算术。

评价条件很明确：同一块 Kria KV260、同一 100 MHz 流程、同一 4 通道配置下比较帧耗时、动态功耗、每帧能量与宽带语音质量，所有构建都超过同板 16 位参考的质量，同时只用 20 到 21 个 DSP 而不是 899 个。

### 网络与加速器的整体流程是怎样的

网络是 Conv-FSENet，属于膨胀时间卷积网络，用因果左填充、零前视，逐帧流式处理。输入幅度帧先经过逐点前端加 ReLU，再进入 9 个 TCN 块，按三栈每栈三块排列，最后经逐点掩膜层输出 257 个 logits，主机端再做 sigmoid 得到掩膜。每个块先逐点扩展，再做核长为 3 的膨胀深度卷积，膨胀在栈内取 1、2、4，再逐点投影回去并与块输入相加，前两个卷积后跟批归一化和 ReLU。

加速器把 9 个块折叠到一个物理块引擎上顺序执行九次迭代，残差向前复制。每次迭代从权重通道取该块权重，从深度卷积环取该块历史，从 cast ROM 取每个操作的训练输出格式。前端、掩膜、归一化与残差等不在可跳过 MAC 循环内的工作仍然每帧执行。

下面先看网络框图，确认数据主路径与块内分支，再进入折叠细节。

读图任务是沿输入到输出确认一次处理改变了什么：幅度帧如何变成掩膜 logits，块内扩展与压缩在哪里分叉汇合。

> **看图路径：** 1. 先沿最上方从左到右看前端、九个块与掩膜层的主路径；2. 再看下方展开的一个块内两次逐点卷积与膨胀深度卷积的位置；3. 注意加速器只返回 257 个 logits 而 sigmoid 留在主机端

![原论文 Fig. 1：Conv-FSENet Network. The accelerator returns 257 logits, and the host applies \\sigma.](/audio-paper-digest-blog/images/papers/2610.35144/figure-1-9844408159cc996b.png)

*论文图 1。原论文 Fig. 1:：“Conv-FSENet Network. The accelerator returns 257 logits, and the host applies \sigma.”。*

该图可见上方从左到右的前端、9 个块与掩膜层主链，以及下方展开的一个块内部逐点扩展、膨胀深度卷积、逐点压缩与残差加法。它帮助理解后文的成本公式为何只对块内两种卷积分开计数，以及为何 9 个块可以共用同一引擎：它们结构相同，只有权重与膨胀不同。

### 一个物理引擎如何分时算完九个块

折叠的关键是把空间上硬连线的差异变成每次迭代取的数据。引擎只有 K 条 MAC 通道和一个共享重整化器，主体在片上 RAM，窄小部分用查找表 ROM。执行时每个张量对它的活跃输出行做一次 II=1 循环，即每个周期启动一次新迭代。若某行码宽为零，则没有带位，只花一个 tick 做检查而不是 128 次乘累加。

深度卷积需要的历史不能丢，因此每个块有一个独立 bank 的环形状态，主计算头共享。前端和掩膜有自己的通道，主体 9 个块共用 4 条 MAC 通道。这种安排把主要成本归为三项：共享数据通路、存下的权重、执行层调度所需的周期。

下面看折叠示意，理解 3 条供给通道如何配合一个共享计算框。

读图任务是区分每次迭代变化与不变的部分：变化的是权重带、历史与格式表，不变的是 MAC 通道与重整化器。

> **看图路径：** 1. 先看上方九次迭代复用一个块引擎的折叠箭头；2. 再看中间粉色大框内共享的 MAC 通道与重整化器；3. 最后看下方三块分别对应的权重带、深度卷积状态与格式表

![原论文 Fig. 2：Conv-FSENet folded onto one time-shared engine.](/audio-paper-digest-blog/images/papers/2610.35144/figure-2-5b5f552f1119d297.png)

*论文图 2。原论文 Fig. 2:：“Conv-FSENet folded onto one time-shared engine.”。*

该图可见上方 fe、9 个块与掩膜的九次迭代折叠箭头，中间大框标注一次块引擎的算子序列与循环规则，下方三块分别标注打包带、环状态与格式表的位宽与控制作用。它说明为何窄精度不缩短满调度：没有删行时 4 种构建周期几乎相同，省时间必须靠删行。

### 权重如何打包存放而计算结果不变

为保留全网学到的不同精度，激活在引擎内用公共定点载体格式传输，乘累加结果先收进更宽的共享累加器，到算子边界再按训练格式重整化。引擎不用给每个算子做独立截断器，而是用一个共享重整化器加一个 75 行的小 cast ROM，表中给出每个操作的输出位宽、舍入与溢出方式。

权重通道按输出通道连续存放，每个通道共享一个码宽 bf 和移位 sf，解码按下式重建与均匀位宽表示完全相同的定点权重，只是存储格式变紧凑。

\[W_{f,j}=\operatorname{signext}(c_{f,j})\,2^{s_{f}},\]

其中 cf,j 是该权重的 bf 位有符号码，signext 表示符号扩展，再左移 sf 位。若 bf 为零则该通道全零，不占权重位，同时从调度中删掉其 MAC 循环。主体大权重放块 RAM，小表放查找表 ROM，每行还有宽度加移位表，每周期取 K 个码。

块内计算量可按残差通道数、扩展通道数与核长估算，逐点卷积与膨胀深度卷积的近似 MAC 数如下，L 为帧相关长度，Cres 为 128，Cconv 为 256，k 为 3。

\[\text{MAC}_{\text{\,PW\raisebox{1.0pt}{\(\circledast\)} }}\approx L\cdot C_{\text{conv}}\cdot C_{\text{res}}\qquad\text{MAC}_{\text{\,DDW\raisebox{1.0pt}{\(\circledast\)}}}\approx L\cdot C_{\text{conv}}\cdot k.\]

该式说明删掉一个输出通道能省多少与层类型有关，这也是后文循环加权 lasso 要引入 c_l 的原因。

**折叠 × 空间展开：** 折叠指用一个物理 TCN 块引擎轮流执行九个结构相同的块，空间展开指给每一层都综合一份专用硬件；前者把面积换成时间，成本变成共享数据通路加存储的权重加调度的周期，后者成本随层数累加，本文选择折叠是因为 16 ms 帧周期有复用余量而器件面积不足。

**混合精度存储 × 共享乘法器宽度：** 混合精度存储指每个通道用自己学到的码宽 bf 存放权重，共享乘法器宽度指物理乘法器必须按全网最宽操作数实现；两者搭配时窄权重只缩短打包后的权重带而不缩小乘法器，因此不能按位操作数直接折算算术节省，只能省存储和可跳过的调度。

### 表加带表示如何穿过标准工具链

训练做出的两个选择必须能交给 Vitis HLS 与 Vivado：一是每行用多宽存放，二是哪些行要跳过。论文用紧凑的表加带表示携带这些选择。表给出每行码宽与移位，带是打包后的码流，解码器从一个共享窗口取数，窗口宽度随 K 增长。

这种表示的代价在 K 增大时显现。每条通道从一个 15K 加 64 位的窗口解码，解码器的桶形移位器按 K 乘该宽度增长，在 K 为 16 时达到 4864 个位位置，导致卷积循环无法每个周期启动新迭代，启动间隔升为 2。这解释了为何加通道并不总是线性加速。

位精确是另一条线。C 仿真中整数 NumPy 参考与全部 75 个层输出一致，包含冷启动；板上回放 DMA 输入产生完全相同的原始输出字，全部 824 句测试重复运行也完全相同。主机端特征量化器单独用参考向量核对，因为 DMA 输出一致不能验证它。

**权重带 × 重整化：** 权重带指按输出通道连续打包的权重流，包含码宽加移位表头和压缩码，重整化指把宽累加结果按训练学到的输出格式截断舍入到公共定点载体格式；前者解决不同精度如何紧凑存放，后者解决同一物理通路如何复现不同精度运算，二者由 cast ROM 统一控制。

### 训练目标如何按存储与周期分别定价

所有模型都最小化压缩谱均方误差，加两项 HGQ 正则：一项是以 1e-8 系数的单调 L1 压所有学到的位宽，另一项是 beta 乘以有效位操作数，按层 MAC 数加权激活与权重位宽。引擎感知的配方在此基线上加两项真实可利用成本。

调度成本要求删计算，因此对主体卷积的每个输出通道的整组核权重施加组稀疏。循环加权形式如下，Kj 为产生输出通道 j 的全部核权重，c_l 为该层算一个输出通道所需的 MAC 数，C0 按初值归一化，lambda_C 取 0.02。

\[\mathcal{L}_{\mathrm{cycle}}=\frac{\lambda_{C}}{C_{0}}\sum_{\ell\in\mathcal{B}}\sum_{j}c_{\ell}\left\|K_{j}^{(\ell)}\right\|_{2},\]

令 c_l 为 1 即退化为普通组 lasso。存储成本要求省带宽，因此对每个权重张量学一个宽度 bl，并在需要时直接约束打包带大小。对目标容量 B0 加 hinge 约束，前向用含每通道头部的精确打包大小，反向用由学到宽度得到的可微估计给梯度。

\[\mathcal{L}_{\mathrm{tape}}=\lambda_{T}\left[\frac{B_{\mathrm{tape}}}{B_{0}}-1\right]_{+},\]

其中 Btape 为发出的权重镜像大小，B0 在 Store 等构建中取 3.0 Mbit。

训练过程有一处为稳定做的处理：在第 50 轮冻结已学到的零通道掩膜并去掉折叠代价项，用投影把被掩通道保持为零，使硬件调度不再变化，之后任务损失、单调 L1 与 beta 项继续作用，让存活权重与精度在固定稀疏拓扑内继续适应。部署检查点按固定规则选取：无掩膜冻结取压缩调度下的末轮，有掩膜冻结取投影后验证最优轮，该规则在测试打分前固定。

**结构化通道稀疏 × 调度 MAC 循环：** 结构化通道稀疏指让产生某个输出通道的整行卷积核权重全为零，调度 MAC 循环指引擎对每个活跃输出行执行的一次 II=1 循环；两者搭配时零行不需要存权重位且直接从调度中删掉对应循环，bf=0 的行只花一个 tick 做检查，这是本文降低帧耗时的直接机制。

**循环加权组 lasso × 普通组 lasso：** 循环加权组 lasso 对每个通道的 L2 范数乘以该层算一个输出通道所需的 MAC 数 c_l 再求和，普通组 lasso 令 c_l=1 对所有通道一视同仁；前者想让贵的操作优先被剪，后者只追求零行数量，本文实验比较了两种压力谁删掉的可跳过 MAC 更多。

### 数据、模型版本与板上测量条件是什么

数据用 16 kHz VoiceBank-DEMAND。28 个训练说话人中留出 4 人做说话人无关验证集，824 句测试集只用于最终打分，说话人为 p232 与 p257。质量指标是全部测试句上的宽带 PESQ，掩膜网络跑在芯片上计算。

模型都是同一 Conv-FSENet，只差训练目标与权重粒度。Uniform 系列把所有量化器的总宽度钉在 6、7 或 8 位，beta 为 0，只学二进制小数点；PerWeight 系列用原生 HGQ 目标到每权重粒度，分回绕与饱和两种数据通道溢出；Store 按每张量学宽度加存储项；Skip 在 Store 基础上加循环加权组 lasso 并在 50 轮冻结掩膜；Skip-Plain 把加权换成普通 lasso。

硬件都是 AMD Kria KV260 经同一 Vitis HLS 与 Vivado 2024.1 流程跑 100 MHz，由 PYNQ 主机驱动并在主机算 STFT、输出 sigmoid 与逆 STFT。功耗用 SOM 的 5 V INA260 传感器以 5 Hz 采板级功率，每构建测 8 组交错的 60 s 空闲与连续处理窗口，动态功耗取活跃减空闲均值，每帧能量再除以跑满时的帧率。空闲板约 3.11 至 3.13 W，折合每实时帧约 50 mJ，因此报告的加速器增量不足总量的 0.2%。资源为布线后计数，帧耗时为板上跑满时的墙钟。

复现时要注意 3 类成本分开看：训练资源、推理开销与实际延迟不同，总体趋势推不到每一组。DEN16 是同板同数据集但不同时域网络的独立实现，只能做背景参照，不能当同条件胜负。

### 稀疏跳过与定宽压缩各省了什么

要回答的核心比较问题是：在同一 4 通道引擎与同一测量会话下，删调度循环与压位宽谁降低帧耗时与能量。公平条件是同板、同流程、同主频，指标方向是帧耗时、能量与动态功耗越低越好，PESQ 越高越好，零 MAC 占比越高说明删得越多。

下表整理原文直接报告的关键构建，保留原单位与精度，PESQ 为芯片实测，时间为板上墙钟，能量为动态增量。

| 构建 | 可跳过 MAC 占比 |
| --- | --- |
| Skip-Plain | 47.3% |
| Skip | 44.1% |
| Store | 0.0% |

从调度机制看，稀疏构建省下的是整行输出通道的 MAC 循环，而存储压缩只改变权重打包方式。Skip-Plain 删掉 47.3% 的卷积 MAC，帧时间降到 1.03 ms，能量降到 33.4 μJ，质量 2.78；同 4 通道下比 Uniform-6 的 1.77 ms 与 64.5 μJ 分别低约 42% 与 48%，质量反而高 0.14。Skip 删 44.1% 但三项实测都不如普通 lasso，说明按周期加权并未带来更好结果。Store 把带压到 2.98 Mbit 满足 3.0 Mbit 目标，密集构建中质量最高，但零行占比为零，完整调度仍在，帧时间 1.86 ms 并未缩短。均匀与原生 HGQ 最多只有 6.2% 可跳过，跑在 1.74 至 1.85 ms 之间。

限制也要说清。帧时间降幅小于 MAC 降幅，因为前端、掩膜、归一化与残差等约 24 k 周期仍要跑；稀疏构建 BRAM 降到 79 块，远低于目标，hinge 已不起作用；DEN16 用 899 个 DSP 而本文只用 20 到 21 个，但 DEN16 的实时系数与首样本延迟更快，两者网络与任务划分不同，不能简单排名。

### 位宽、通道数与跳过开关各自带来什么变化

第二个要回答的问题是：省下来的时间到底来自删行还是来自窄权重，以及加 MAC 通道是否一直划算。论文做了两组消融：一是关掉 MAC 跳过做协同仿真，二是扫 K 并观察功率与能量的走向。

先看是否跳过。在 K 为 4 且关闭跳过时，PerWeight、Store、Skip 与 Skip-Plain 四构建周期几乎相同，说明窄权重本身不缩短满调度。打开跳过后，Skip-Plain 避开 47.3% 的 MAC 而帧时间减少 44.6%，Skip 避开 44.1% 而减少 41.3%，差额正是不可跳过部分。

下表只用原文连续句能覆盖的数字，比较位宽与通道数的影响，功率为动态增量，能量为每帧增量。

| 比较维度 | 条件 | 动态功率 | 每帧能量变化 | 帧时间变化 |
| --- | --- | --- | --- | --- |
| 8 位到 6 位 | 定宽 Uniform | 下降 27% | 下降 30% | 变化不足 5% |
| 关跳过 | 四构建满调度 | 周期几乎相同 | 窄权重不省周期 | 由协同仿真支持 |

表后解释要区分功率与能量。K 从 1 加到 4 再到 8，动态功率从 26.1 升到 32.4 再到 43.8 mW，但每帧能量下降，因为速度提升超过功率上升；通道效率从 97% 降到 86% 再到 65%，一是每帧有与 K 无关的固定工作，二是解码窗口随 K 变大。到 K 为 16 时逻辑使启动间隔升为 2，无法维持 II 为 1。位宽从 8 到 6，动态功率降 27%，每帧能量降 30%，帧时间变化不足 5%，说明窄权重省存储并可能通过翻转 activity 省能量，但不省周期。

图 3 把不同目标删掉的计算可视化，观察任务是对比高位线与低位线的分化位置。

读图任务完成后，再看机制：原生 HGQ 把零权重撒满全网，但整零通道只出现在深度卷积层，约占 6.1% MAC；通道 lasso 把整输出通道推零，两构建都删掉第 4 与第 5 块全部工作，Skip-Plain 在第 8 块只剩 18.8% 调度 MAC。

> **看图路径：** 1. 先看横轴九个 TCN 块与纵轴存活通道的调度 MAC 占比；2. 比较 Store 与 PerWeight 两条高位线和 Skip 两条低位线的分化；3. 注意第 4 与第 5 块附近两条稀疏曲线降到零的含义

[![原论文 Fig. 3：Share of scheduled MACs in surviving output channels by TCN block.](https://arxiv.org/html/2610.35144v1/block_survival_tcn.svg)](https://arxiv.org/html/2610.35144v1/block_survival_tcn.svg)

*论文图 3。原论文 Fig. 3:：“Share of scheduled MACs in surviving output channels by TCN block.”。*

该图可见 PerWeight 与 Store 两条线维持在高位，Skip 与 Skip-Plain 两条线在中间块跌到零附近再回升，横轴为 TCN 块序号，纵轴为存活通道的调度 MAC 占比。它支持判断：只有整行稀疏压力才能产生可跳过调度，逐权重稀疏做不到；但它不能回答哪种先验最稳定，论文也报告 lasso 全程加压不稳定才引入 50 轮冻结。

### 结论在什么条件下才成立还有哪些缺口

主结论成立需要同时满足 4 个条件：同一折叠引擎与 4 通道配置、同一 KV260 板与同会话或分别注明会话的测量、流式因果 TCN 与 16 kHz VoiceBank-DEMAND 划分、芯片实测 PESQ 与墙钟帧耗时。换网络、换 K、换数据集或换测量方式，数字都要重测。

未胜出项必须保留。循环加权 lasso 在本次运行中三项都不如普通 lasso；Store 质量在密集中最高但不省时间；Uniform-6 在密集中最省但质量最低；DEN16 首样本与实时系数更快，尽管本文 LUT 少 4.2 到 8.3 倍、DSP 少 43 倍。K 为 16 的综合是脱离上下文的结果，不能当板上实测。

缺口方面，论文未报告训练算力与时间，未测量误判率以外的延迟分布，未评测超出该数据集与该通道配置的泛化。lasso 训练不稳定的根因没有深入分析，未来工作只提出探索其他结构化稀疏先验。来源未确认不是技术缺陷，第三方链接只证明论文提到该地址，不证明作者已开源。

### 要复现应从哪一步做起并核对什么

复现第一步是拿同一 Conv-FSENet 与同一划分跑出基线，再按论文规则选检查点：无掩膜冻结取压缩调度末轮，有掩膜冻结取投影后验证最优轮，规则要在测试打分前固定，避免挑测试最优。

第二步是实现表加带与 cast ROM 的折叠引擎，保持整数 NumPy 参考与 C 仿真 75 层输出一致并含冷启动，再在板上回放 DMA 输入核对原始输出字全等，重复全测试集也要全等。主机端特征量化器要单独用参考向量核对，不能只靠 DMA 一致。

第三步是功率测量。按 8 组 60 s 空闲与连续处理交错采样，用同一 INA260 取活跃减空闲均值，再除以跑满帧率得到每帧能量，同时记录空闲板功率以确认增量占比。资源用布线后计数，时序确认 100 MHz 下有正 slack。

代码方面，论文致谢提到开源的 hls4ml 与 HGQ 工具并给出 FastML 社区链接，但按本次来源校验只能说论文提到了该第三方地址，不能写作者资源已公开或可下载。权重是否发布、系统能否一键运行在原文证据中没有确认，需要补查。

### 什么时候值得尝试这种定价思路

当你的加速器也是折叠复用、面积紧张而帧预算宽裕时，值得把压缩目标按真实可利用项重写：能打包的按存储定价，能整行删的按调度定价，不要只用位操作数做代理。语音、音乐或音频的流式帧处理常有这种特点，但结论能否搬到其他采样率与网络仍待验证。

实践上可以先做两件便宜的事：把均匀位宽从 8 降到 6 看功率与存储是否下降，同时确认帧时间几乎不变；再加普通通道组 lasso 并在中期冻结掩膜，看是否出现整块被删。若只看到散落的零权重而没有整零行，说明压力不对，应该换先验而不是加大系数。

还需要补的验证是：不同随机种子下普通与加权 lasso 的排序是否稳定，K 变化时能量最优点在哪里，以及在更大词汇与噪声条件下的质量是否保持。本文的价值在于给出了一条从测量成本到训练目标再到板上实测的闭环，代价是稀疏训练需要冻结调度，且窄精度不再贡献速度，这两点要在立项时就接受。

<details>
<summary>📎 论文与评分元数据</summary>

排名：前50% | 文档类型：系统技术报告 | [arXiv 原文](https://arxiv.org/abs/2610.35144v1)

</details>

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。

- 评分规则：type-aware-v1

- 评分模型：muse-spark-1.3-contributor

- 评分请求协议：openai_responses

---

[← 返回 2026-10-27 语音/音乐/音频论文速递](/audio-paper-digest-blog/posts/2026-10-27/)
