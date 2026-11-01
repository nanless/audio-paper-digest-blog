---
title: "Depth through Recurrence: Towards Ultra-Efficient On-Device ASR"
date: 2026-10-30
draft: false
tags: [语音识别, 知识蒸馏, LoRA, 混合专家模型, 端侧运行]
categories: [论文速递]
description: "论文针对端侧设备装不下深层语音识别模型的问题，用表示相似性分组把深编码器折叠成少数共享块循环执行，再用蒸馏和用户条件适配恢复精度，代价是循环次数决定的计算量仍需保留且极小块数下仍有残余误差。"
hiddenInHomeList: true
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_arxiv_id: "2610.37833"
paper_digest_workbench_contract: "researcher-workbench-v1"
paper_digest_reader_title: "用循环共享的块代替参数深度：超压缩端侧语音识别"
paper_digest_original_title: "Depth through Recurrence: Towards Ultra-Efficient On-Device ASR"
paper_digest_arxiv_version: 1
paper_digest_arxiv_versioned_id: "2610.37833v1"
paper_digest_arxiv_abs_url: "https://arxiv.org/abs/2610.37833v1"
paper_digest_arxiv_pdf_url: "https://arxiv.org/pdf/2610.37833v1.pdf"
paper_digest_primary_task: "语音识别"
paper_digest_tags_contract: "paper-tag-flat-tags-v2"
paper_digest_tags_selection_contract: "paper-tag-selection-v2"
paper_digest_tags_registry_version: "paper-tag-catalog-v2"
paper_digest_tags_registry_sha256: "cdef54423b5dfc00a1d017ef6639446d2ecd1d9c1acf71c8eb4f6219a46b7ba8"
paper_digest_tags_concepts: [{"facet":"task","id":"task.asr","label":"语音识别"},{"facet":"method","id":"method.distillation","label":"知识蒸馏"},{"facet":"method","id":"method.lora","label":"LoRA"},{"facet":"method","id":"method.moe","label":"混合专家模型"},{"facet":"setting","id":"setting.on-device","label":"端侧运行"}]
paper_digest_primary_method: "知识蒸馏"
paper_digest_score: 7.0
paper_digest_rank_bucket: "前50%"
paper_digest_document_type: "方法研究"
paper_digest_one_sentence: "论文针对端侧设备装不下深层语音识别模型的问题，用表示相似性分组把深编码器折叠成少数共享块循环执行，再用蒸馏和用户条件适配恢复精度，代价是循环次数决定的计算量仍需保留且极小块数下仍有残余误差。"
paper_digest_authors: [{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Chen Feng"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Tianyi Xu"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Ramchalam Kinattinkara Ramakrishnan"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Yicheng Lin"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Shaojie Zhuo"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Zhaocong Yuan"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Chenzheng Su"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Xiaopeng Zhang"}]
paper_digest_abstract_sha256: "e140afcebd565934210c4cf3a076629dcb2f7d1fe8c6809324104eacd97cc3b2"
paper_digest_sidecars: {"citation.bib":{"sha256":"db3190f7b1a8b2093c6577f9b91a16f75103e730619a82a3bd0f30975e74f408","url":"/audio-paper-digest-blog/data/papers/2026-10-30/2610-37833/citation.bib"},"citation.json":{"sha256":"f2c1bae190b719cc9a4f1be16b10636b54432840672119c88e7ccbe605159ed7","url":"/audio-paper-digest-blog/data/papers/2026-10-30/2610-37833/citation.json"},"citation.ris":{"sha256":"54989a6eace5e10b1fa9fb1b6448b068af61a917aa6e0285b08acd46dc75fa03","url":"/audio-paper-digest-blog/data/papers/2026-10-30/2610-37833/citation.ris"},"rethink-context.json":{"contract":"paper-research-context-v2","sha256":"5f7c8ce4143c47ea57b2c187d44b24b89f08584af5ca85a8bd9b37e601f64a50","url":"/audio-paper-digest-blog/data/papers/2026-10-30/2610-37833/rethink-context.json"}}
paper_digest_api_reader_contract: "beginner-researcher-v3"
paper_digest_api_reader_article_sha256: "8de80b1d716f73a392d0cf2e1d9700ae1023f84193102fbd86250a099f5cdc37"
paper_digest_api_reader_plan_sha256: "033ead1c192a069be69cc69ad258ad74ed8dca0c1ddda307c8a1af38f47f7e19"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings-v4"
paper_digest_api_reader_source_bindings_sha256: "1ad938b956a84299664da3afe11b9eb69c7c5b77f9f9a2a81e4a11a5278636be"
paper_digest_api_reader_source_table_count: 4
paper_digest_api_reader_source_formula_count: 5
paper_digest_api_reader_structured_artifacts_sha256: "97855d90a7ca15fb4e86b5707191919196057b1664ffd908d1f4d9850ada8f8f"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity-v1"
paper_digest_api_reader_author_identity_sha256: "eb8fda5bd3d448ac593200255934e7e098f3c40538c61bd3b2a4aca8bf12b82a"
paper_digest_api_reader_author_count: 8
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity-v1"
paper_digest_api_reader_resource_identity_sha256: "686311d34e09493514d43aa47a9d124e2d0c47c86f621907d081c61eedd5dd10"
paper_digest_api_reader_resource_count: 0
paper_digest_api_reader_figure_persistence: "ephemeral-no-persisted-figure-assets-v1"
paper_digest_api_reader_decision_projection: "api-reader-decision-projection-v2"
---

# 📄 用循环共享的块代替参数深度：超压缩端侧语音识别

> 英文题目：*[Depth through Recurrence: Towards Ultra-Efficient On-Device ASR](https://arxiv.org/abs/2610.37833v1)*

<!--paper-tag-hierarchy-v1:start-->

**研究分类**

- **研究任务**：[语音识别](/audio-paper-digest-blog/papers/?concept=task.asr)
- **研究方法**：[知识蒸馏](/audio-paper-digest-blog/papers/?concept=method.distillation)；[参数高效微调](/audio-paper-digest-blog/papers/?concept=method.peft) → [LoRA](/audio-paper-digest-blog/papers/?concept=method.lora)；[混合专家模型](/audio-paper-digest-blog/papers/?concept=method.moe)
- **研究条件**：[端侧运行](/audio-paper-digest-blog/papers/?concept=setting.on-device)

<!--paper-tag-hierarchy-v1:end-->

> 评分：**7.0/10** | 创新 1.5/2 | 技术严谨 1.2/1.5 | 实验充分 1.2/1.5 | 清晰度 0.8/1 | 影响力 1/1.5 | 开源 0/1.5 | 可复现 0.3/0.5 | 工程/实践 1/1.5


## 👥 作者与机构

- Chen Feng：机构信息未能在本次解析中与作者逐人可靠绑定
- Tianyi Xu：机构信息未能在本次解析中与作者逐人可靠绑定
- Ramchalam Kinattinkara Ramakrishnan：机构信息未能在本次解析中与作者逐人可靠绑定
- Yicheng Lin：机构信息未能在本次解析中与作者逐人可靠绑定
- Shaojie Zhuo：机构信息未能在本次解析中与作者逐人可靠绑定
- Zhaocong Yuan：机构信息未能在本次解析中与作者逐人可靠绑定
- Chenzheng Su：机构信息未能在本次解析中与作者逐人可靠绑定
- Xiaopeng Zhang：机构信息未能在本次解析中与作者逐人可靠绑定

## 📌 核心摘要

自动语音识别（Automatic Speech Recognition，ASR）要把输入的语音声学特征序列转写为词序列，云端大模型靠增加独立参数的层数提高准确率，但在手表和眼镜等端侧设备上受内存、算力和能耗限制难以部署。论文首先要回答深层编码器中哪些连续层在做相似变换，再把相似层合并为可重复展开的共享块。做法是先用线性中心核对齐（Linear Centered Kernel Alignment，Linear CKA）计算层间相似矩阵并用动态规划切分为有序分组，每组用组内教师参数平均初始化一个共享块，训练时把共享块按原深度重复展开，并用任务损失加编码器组边界对齐损失和解码器散度损失向教师对齐。个性化阶段冻结共享主干，用注册语音提取的用户向量选择混合专家低秩适配增量，融合后不改变推理计算图。与只在训练后降低精度的思路不同，本文改变参数化深度本身的结构。在八个数据集平均词错率（Word Error Rate，WER）上，两块共享的流式学生模型平均 WER 为 13.40%，相对教师模型的 11.05%，论文报告恢复 97.4% 的准确率，同时编码器参数从 108.9M 降至 14.2M。结论适用于流式 FastConformer 与非流式 Conformer 编码器，依赖表示分组稳定和蒸馏数据覆盖，原文披露在两块 NVIDIA A100 上预训练约 7-10 天、20 轮微调在 3 天以内。

## 🔗 开源与复现资源

本次未形成可展示的已核验资源记录，开放状态尚未核实。

可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 端侧语音识别要处理什么输入和约束

自动语音识别的输入是一段语音波形或其声学特征序列，目标是输出对应的文字转写，评价用词错误率 WER，越低越好。现代系统常用 Transformer 或 Conformer 这类深层编码器加解码器，先把随时间变化的语音表示逐层提炼，再解码为词序列。

这类模型在云端可以做到数亿到数 1000000000 参数，但在手表、眼镜、手机芯片和机器人端侧，内存只有兆字节量级，计算频率、功耗和访存带宽都被严格限制，还要求实时低延迟。论文的起点就是这个矛盾：精度依赖深度和参数量，而端侧装不下大参数量。已有的量化、剪枝、低秩近似属于训练后的压缩，与结构本身是否高效正交，压得过狠会明显掉精度，因此需要从结构冗余入手。

### 已有路线为什么没有解决结构冗余

论文把已有工作分成两类。第一类是后训练压缩，包括量化、剪枝和低秩近似，它们能减小体积和计算，但对 1000000000 参数模型单独使用仍难以塞进嵌入式限制，且过度压缩会让深层声学编码器丢失处理复杂信号的能力。

第二类是均匀参数共享，例如 ALBERT 和 Universal Transformer 等做法，让所有层静态共享同一套参数。论文认为这种均匀共享没有利用语音编码器内部的表示动态：有些相邻层确实很相似，有些边界层变化很大，一刀切地共享会错位。本文要比较的是在相同任务、相同数据划分和相同编解码框架下，结构化循环能否比随机分组和纯解码器蒸馏更好地保留精度，而不是拿不同训练数据和规模的外部模型直接比高低。

### 论文要验证的具体问题是什么

论文提出的核心问题是：深层语音编码器的精度增益是否必须来自每层独立参数，还是可以用少数共享块循环应用来保留有效深度和精度。作者先用表示分析验证深层中是否存在大量功能相似的层，再构造对应的块循环学生模型并用蒸馏训练，最后检验压缩精度、延迟能耗和个性化能力。

这里的有效深度指推理时数据实际经过的变换次数，参数量指不同权重的数量。两者可以解耦：循环一次不增加新参数，但增加一次计算。论文的目标是参数量降一个数量级，有效深度不变，计算量大致相当，同时让访存和能耗因权重重用而下降。

### 从大模型到端侧个性化模型的完整流程

沿着一个语音样本走一遍流程。原始音频先做预处理变成声学特征序列，送入大模型的深编码器得到表示，再经解码器输出文字。分析阶段用校准语音提取每层激活，计算层间相似矩阵，找出相似的连续层。

构造阶段把教师的连续层划分为 K 个组，每组用一个共享块代替，推理时该块按原组长度循环多次，保持总层数不变。训练阶段用任务损失加编码器和解码器蒸馏把教师行为迁移到学生。部署后如需个性化，再用短注册语音提取用户嵌入，动态组合轻量适配器修正该用户的口音和音色误差，主干保持冻结。

下图展示了这一从左侧原始多层到中间循环组块再到右侧用户条件适配的对应关系，有助于理解各部分在何处汇合。

> **看图路径：** 1. 先看左侧原始模型从预处理到多个独立 Conformer 块再到解码器的纵向路径；2. 再看中间如何把多层收拢为 Group Block_1 到 Group Block_K 并带有循环箭头；3. 最后看右侧每个组块外挂的路由器与多个 LoRA 专家由用户语音嵌入控制

[![原论文 Figure 1：Overview of the proposed block-recurrent ASR framework.](https://arxiv.org/html/2610.37833v1/images/workflow.png)](https://arxiv.org/html/2610.37833v1/images/workflow.png)

*论文图 1。原论文 Figure 1:：“Overview of the proposed block-recurrent ASR framework.”。*

图中左侧是原始模型的预处理、多个独立 Conformer 块和解码器，中间是折叠后的组块循环结构，右侧是每个组块外挂的路由器和多个 LoRA 专家。中间的表示引导分组加知识蒸馏是连接左右的桥梁，右侧的用户语音嵌入只控制适配分支，不改变主干计算图。推理时适配增量可融合进基础权重，因此个性化不增加额外延迟。

### 层间相似性是如何被测量和呈现的

要判断哪些层可以共享，需要先度量层表示是否相似。论文用线性 CKA，即中心核对齐，比较两层在校准语音上的激活矩阵。直观说，它衡量两组表示的内积结构是否一致，对旋转和缩放不敏感，值越接近 1 越相似。具体做法是对每条校准语音提取每层隐激活，沿时间维去均值，计算两两线性 CKA，再在 150 条语音上平均，校准集来自 LibriSpeech、TED-LIUM 和 VoxPopuli 各 50 条。

\[\text{S}(X,Y)=\frac{\|X^{\top}Y\|_{F}^{2}}{\|X^{\top}X\|_{F}\cdot\|Y^{\top}Y\|_{F}}\]

公式中 X 和 Y 是两层的表示矩阵，分子是交叉协方差 F 范数的平方，分母是各自自协方差 F 范数的归一化，S 越接近 1 表示两层变换功能越接近。论文还计算相邻层夹角作为局部补充，两者趋势一致。

下图是 4 个大模型的层间 CKA 热力图，横纵轴都是层序号，颜色越亮表示越相似。

> **看图路径：** 1. 看四个模型热力图的对角线附近亮带宽度和块状结构；2. 对比 STT 与 Parakeet 在浅层大块相似与深层逐渐分化的差异；3. 注意 Canary 和 Granite 在尾部出现的明显分块边界

[![原论文 Figure 2：Layer-wise CKA similarity for STT-480ms, Parakeet-TDT-0.6B-v2, Canary-1B-Flash, and…](https://arxiv.org/html/2610.37833v1/images/CKA_40_4models.png)](https://arxiv.org/html/2610.37833v1/images/CKA_40_4models.png)

*论文图 2。原论文 Figure 2:：“Layer-wise CKA similarity for STT-480ms, Parakeet-TDT-0.6B-v2, Canary-1B-Flash, and Granite-4.0-1B-Speech encoder models.”。*

4 张热力图都呈现块对角结构，即对角线附近出现亮块，说明相邻层群内高度相似，远距离层相似度低。STT-480 ms 浅层形成一个大亮块，深层逐渐分化；Parakeet-TDT-0.6B-v2 的亮带更宽更连续；Canary-1B-Flash 在 18 层和 24 层附近出现清晰分块；Granite 也有类似的分段。这种结构说明深编码器很多层在做迭代精炼，而非每层都产生全新表示，为按相似性分组共享提供了依据。

**编码器 × 解码器：** 编码器负责把声学特征序列逐层变成高层表示，是本文参数量和计算量的主体，也是压缩对象；解码器负责把编码器输出变成文字，本文保持其结构和词表不变。两者分工不同，压缩只折叠编码器，解码器只提供监督和最终输出。

### 块循环假设与表示引导分组怎么做

基于上述观察，论文形式化了块循环编码器假设：存在远少于原层数 L 的 K 个共享块 B1 到 BK，每个块循环 nk 次，总次数之和等于 L，使得循环组合的输出与原深编码器输出的期望误差不超过小量。每个块沿用标准 Conformer 设计，包含前馈、多头自注意力和卷积模块，只是参数被重复使用。

\[\mathbb{E}_{x\sim\mathcal{D}}\left[\left\|f_{L}(x)-\left(B_{K}^{n_{K}}\circ\cdots\circ B_{1}^{n_{1}}\right)(x)\right\|_{2}\right]\leq\varepsilon,\]

公式中 fL 是 L 层教师编码器，括号内是 K 个块按顺序各循环 nk 次的组合，期望取自自然语音分布，误差用二范数衡量。它要表达的是深计算可被少数变换的重复应用逼近，而不是说任意深网都满足，需要用分组和蒸馏来构造验证。

分组要求把 L 层切成 K 个有序连续段，每段对应一个共享块，段长就是循环次数。论文用动态规划最大化组内 CKA 平均相似度来求最优切分，组内越相似，共享带来的失真越小。例如 STT 在 K=2 时被切为 1 到 16 层一组、第 17 层单独一组，K 增大时尾部各层逐渐独立成组，这与热力图尾部分化是一致的。

**CKA × 表示引导分组：** CKA 即中心核对齐，用于比较不同层输出表示是否相似；表示引导分组是根据 CKA 相似矩阵把连续且相似的层划为一组。CKA 提供依据，分组给出共享方案，相似层共用一个块才能保证循环近似合理。

**块循环 × 有效深度：** 块循环指同一个参数块被重复应用多次；有效深度指展开循环后实际经过的层数。参数量只与不同块数 K 有关，计算量与有效深度 L 有关，本文用少量参数保持原有效深度，从而同时实现小体积和深计算。

### 用户条件 MoE-LoRA 个性化如何工作

当 K 很小时，压缩模型容量有限，剩余误差集中在口音、语速和音色等说话人相关特性上。论文在冻结的块循环主干上，为每个块的线性层挂一组 LoRA 专家，每个专家是低秩增量，专长不同声学特性。轻量路由器以用户嵌入为输入，选出得分最高的 5 个专家并归一化加权，得到该用户的个性化增量。

\[\Delta W(\mathbf{u})=\textstyle\sum_{i\in\mathcal{T}_{k}(\mathbf{u})}\alpha_{i}(\mathbf{u})\,\Delta W_{i},\]

公式中 u 是用户嵌入，T_k 是被选中的专家索引集，alpha 是归一化权重，Delta Wi 是第 i 个专家增量。训练时只更新路由器和 LoRA 权重，主干冻结，并加负载均衡正则防止专家坍缩到少数几个。

部署分两步：先在设备上用短注册语音经 ECAPA-TDNN 等说话人嵌入模型提取用户嵌入，全程在端侧完成；再由路由器生成增量并融合进基础编码器各块，计算图和延迟与主干相同。因此个性化不增加推理开销，且保留了通用识别能力，适合隐私敏感的端侧场景。

### 共享块如何初始化和用蒸馏训练

分组确定后，每个学生块用教师对应组内各层参数的平均值初始化，而不是随机初始化或只取其中一层。平均相似层的参数提供了稳定的起点，论文报告这有助于训练稳定和识别效果。解码器结构和文本词表保持与教师相同，训练初期先冻结解码器，之后可选择联合微调。

\[\theta_{B_{k}}\;=\;\tfrac{1}{|G_{k}|}\textstyle\sum_{\ell\in G_{k}}\theta_{\ell}\quad\forall k\in\{1,\dots,K\}.\]

公式中 theta_l 是教师第 l 层参数，theta_Bk 是第 k 个学生块参数，取组内平均。这种初始化只在起点聚合信息，真正的行为对齐靠后续损失完成。

总训练损失由三项组成：任务相关的语音识别损失，例如 CTC、RNN-T 或 TDT 损失，加上编码器蒸馏损失和解码器 KL 散度损失，后两项各有权重系数控制占比。

\[\mathcal{L}(\theta)=\mathcal{L}_{\text{task}}(\theta)+\lambda_{\text{enc}}\,\mathcal{L}_{\text{KD}}^{\text{enc}}(\theta)+\lambda_{\text{dec}}\,\mathcal{L}_{\text{KD}}^{\text{dec}}(\theta),\]

其中编码器蒸馏只在组边界对齐，即比较学生第 k 块循环 nk 次后的表示与教师在该组结束层 ek 处的表示，用期望二范数求和，而不是逐层逐位置强制相等。这样既保留了分组结构，又允许组内用迭代精炼逼近教师轨迹。附录消融显示，仅用解码器 KL 在强压缩下不够，加上任务监督有大幅提升，再加编码器蒸馏还有额外改善。

**知识蒸馏 × 编码器蒸馏损失：** 知识蒸馏指让学生模仿教师的行为；编码器蒸馏损失特指在每个分组边界上让学生块循环后的表示逼近教师对应层的表示。它与任务损失和解码器 KL 损失相加，共同把教师的逐段变换和输出分布迁移到共享块上。

### 训练数据、评测基准和实现条件

教师模型选了两个代表：STT-480 ms 是 17 层 FastConformer 的流式模型，编码器 108.9M 参数，混合 CTC/RNN-T 解码；Parakeet-TDT-0.6B-v2 是 24 层 Conformer 的非流式模型，编码器 608.9M 参数，TDT 解码。分析部分还看了 Canary-1B-Flash 和 Granite-4.0-1B-Speech 的 CKA，但压缩实验只围绕前两者展开，覆盖流式与非流式。

学生训练用 7 个公开语音数据集的混合，包括 LibriSpeech、TEDLIUM、VoxPopuli、AMI、Earnings22、GigaSpeech 和 SPGISpeech，时长从 0.1 秒短指令到 30 秒长对话，教师原本已见过其中部分数据。对 Parakeet 因大小写词表问题，论文用教师转写替换 WER 不超过 0.2 的样本转写，保留约 71.3% 到 99.7% 数据。评测遵循 Open ASR Leaderboard 的 8 个测试集和官方脚本，指标为各集 WER 和平均 WER，越低越好。个性化实验用 VoxCeleb2，经双模型转写一致性过滤，保留 2892 个说话人，划分 2507 训练、279 验证、106 测试。训练在 A100 上进行，块循环预训练约 7 到 10 天，再微调 20 轮约 3 天，MoE-LoRA 训练约 3 到 4 天。论文提醒绝对精度受超参和资源影响，目标是验证结构化循环的设计原则，而非穷举调优到极限。

### 块循环在公开榜单上保留了多少精度

要回答的核心问题是：在相同评测协议下，不同共享块数 K 的学生与教师相比，平均词错误率差距多大，参数减少多少。指标方向是 WER 越低越好，最后一列 Delta 为学生平均 WER 减教师平均 WER，负值表示学生平均更低。编码器参数直接给出，可算压缩比。

|  | Configuration | Configuration | Individual Datasets WER % ↓ | Individual Datasets WER % ↓ | Individual Datasets WER % ↓ | Individual Datasets WER % ↓ | Individual Datasets WER % ↓ | Individual Datasets WER % ↓ | Individual Datasets WER % ↓ | Individual Datasets WER % ↓ | Overall WER % ↓ | Overall WER % ↓ |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Model | K | Params. (M) | AMI | Earn | Giga | LS-c | LS-o | SPGI | TED | VoxP | Avg. | 𝚫 |
| STT-480ms | – | 108.9 | 26.23 | 20.56 | 14.15 | 2.54 | 5.97 | 5.80 | 5.58 | 7.60 | 11.05 | – |
| Edge-STT | 2 | 14.2 | 22.43 | 18.76 | 18.42 | 5.98 | 14.29 | 6.36 | 8.83 | 12.10 | 13.40 | +2.35 |
| Edge-STT | 4 | 26.8 | 18.16 | 15.24 | 15.60 | 4.29 | 10.55 | 4.72 | 7.34 | 9.89 | 10.72 | -0.33 |
| Edge-STT | 6 | 39.5 | 16.72 | 13.96 | 14.34 | 3.65 | 9.10 | 4.19 | 6.44 | 8.79 | 9.65 | -1.40 |
| Edge-STT | 8 | 52.1 | 14.93 | 13.17 | 13.36 | 3.25 | 8.08 | 3.76 | 6.10 | 8.38 | 8.88 | -2.17 |
| Edge-STT | 10 | 64.7 | 14.28 | 12.83 | 13.03 | 3.10 | 7.70 | 3.67 | 5.84 | 8.14 | 8.57 | -2.48 |
| Parakeet-v2 | – | 608.9 | 11.16 | 11.09 | 9.73 | 1.70 | 3.19 | 2.18 | 3.37 | 5.96 | 6.05 | – |
| Edge-Parakeet | 4 | 105 | 13.28 | 11.93 | 12.21 | 2.66 | 6.40 | 2.68 | 4.60 | 7.16 | 7.62 | +1.57 |
| Edge-Parakeet | 6 | 155 | 12.60 | 11.52 | 11.96 | 2.57 | 5.96 | 2.56 | 4.47 | 7.08 | 7.34 | +1.29 |
| Edge-Parakeet | 8 | 205 | 12.21 | 11.35 | 11.63 | 2.31 | 5.48 | 2.44 | 4.30 | 6.85 | 7.07 | +1.02 |
| Edge-Parakeet | 10 | 256 | 12.11 | 11.41 | 11.52 | 2.38 | 5.44 | 2.41 | 4.24 | 6.74 | 7.03 | +0.98 |
| Edge-Parakeet | 12 | 306 | 11.81 | 11.31 | 11.43 | 2.31 | 5.30 | 2.36 | 4.17 | 6.75 | 6.93 | +0.88 |

上表比较了两个教师及其不同 K 的学生在 AMI、Earnings22、GigaSpeech、LibriSpeech 干净集与其他集、SPGISpeech、TEDLIUM 和 VoxPopuli 上的 WER。STT 教师平均 11.05%，K=2 学生仅 14.2M 编码器参数，平均 13.40%，差距 2.35 个百分点，论文按精度比例折算为恢复 97.4%；K=4 时 26.8M 参数，平均 10.72%，已追平教师；K=10 时平均 8.57%，反而低 2.48 个百分点。Parakeet 教师平均 6.05%，K=4 学生 105M 参数平均 7.62%，差距 1.57 个百分点，随 K 增大缓慢收窄，K=12 时差距 0.88 个百分点。

结果支持的判断是：增加 K 单调提升精度，允许按内存预算选型；STT 上极小 K 已接近教师，Parakeet 上差距收敛更慢。限制也很明显：学生用了与教师部分重叠的训练数据，且教师原本经更大私有流程训练，并非严格同数据对照；STT 学生反超教师平均值可能与评测集分布和微调有关，不能理解为小模型在所有条件下全面更强。

### 个性化适配能否补上小模型的说话人差距

第二个要回答的问题是：在 106 个测试说话人上，冻结主干加用户条件适配能否缩小与通用大模型的差距。比较对象是教师零样本、块循环零样本和不同 LoRA 秩的个性化模型，指标是 VoxCeleb2 上的平均 WER，越低越好。每个说话人用其用户嵌入选 5 个专家，专家总数 16。

| KK | Zero-shot | MoE-LoRA (Rank) | MoE-LoRA (Rank) | MoE-LoRA (Rank) |
| --- | --- | --- | --- | --- |
| KK | Zero-shot | 16 | 32 | 64 |
| – | 11.80 | – | – | – |
| 4 | 15.60 | 11.72 | 11.37 | 11.17 |
| 6 | 13.51 | 9.06 | 8.91 | 8.88 |
| 8 | 12.19 | 8.18 | 8.03 | 8.04 |

上表显示 Edge-STT 在 K=8 时零样本 12.19%，加 32 秩个性化后降至 8.03%，低于教师的 11.80%；K=6 时从 13.51% 降至 8.91% 左右。秩从 16 升到 32 增益最大，再升到 64 增益趋平。Edge-Parakeet 部分在原文连续句中报告，K=8 加 64 秩达到 5.10%，与教师 4.35% 的差距缩小到 0.75 个百分点。附录还对比了同参数量的普通 LoRA 微调为 8.69%，而 MoE-LoRA 为 8.03%，说明用户条件路由带来了超出单纯增加容量的好处。

下图按说话人展开了 STT 参考模型、K=8 基线和 32 秩个性化模型的逐人 WER，横轴是说话人，纵轴是 WER 百分比。

> **看图路径：** 1. 看横轴 106 个说话人按难度排序后三色柱状的整体走向；2. 对比每个说话人处绿色个性化柱是否低于橙色和蓝色柱；3. 看三条水平虚线代表的总体混合 WER 的高低顺序

[![原论文 Figure 4：Per-speaker WER comparison for 106 test speakers, among the STT-480ms reference model, the…](https://arxiv.org/html/2610.37833v1/images/stt_group8_rank32_per_user_comparison.png)](https://arxiv.org/html/2610.37833v1/images/stt_group8_rank32_per_user_comparison.png)

*论文图 4。原论文 Figure 4:：“Per-speaker WER comparison for 106 test speakers, among the STT-480ms reference model, the block-recurrent baseline (K=8), and the personalized MoE-LoRA model (rank 32).”。*

图中可见参考模型逐人 WER 在 5% 到 28% 之间大幅波动，说明口音和风格影响很大；橙色基线多数略高于蓝色参考，而绿色个性化柱对几乎每个说话人都明显更低，3 条虚线的总体混合 WER 也是绿色最低。这支持个性化在个体层面有效、且对难说话人也有改善的判断。但结论成立条件是 VoxCeleb2 经严格转写筛选后的 106 人测试集，以及需要短注册语音提取嵌入；未评测无注册语音或跨域噪声下的表现。

**MoE-LoRA × 用户嵌入：** MoE-LoRA 指在每个块的线性层上挂多个低秩适配专家；用户嵌入指从短注册语音中提取的说话人向量。用户嵌入经路由网络选出最相关的若干专家并加权组合，得到与该用户匹配的增量修正，而主干参数保持冻结。

### 权重重用是否带来延迟和能耗收益

为理解参数压缩主要来自何处，需要先看编码器与解码器的参数分解比较。原表按模型列出编码器结构与参数量、解码器结构与参数量及比值，可判断编码器主导程度。

| Model | Encoder | Encoder Params. | Decoder | Decoder Params. | Enc/Dec Param Ratio |
| --- | --- | --- | --- | --- | --- |
| STT-480ms | 17 FastConformer blocks | 108.9M | RNNT/CTC head | 5.9M | 18.5x |
| Parakeet-v2 | 24 Conformer blocks | 608.9M | TDT head | 8.9M | 68.4x |
| Canary-1B-Flash | 32 FastConformer blocks | 883.6M | 4 Transformer blocks | 72.6M | 12.1x |
| Granite-4.0-1B-Speech | 16 Conformer blocks | 440.2M | LLM decoder | 1.8B | 0.24x |

上表显示 STT-480 ms 编码器为 17 FastConformer blocks、108.9M 参数，解码器为 RNNT/CTC head、5.9M 参数，比值 18.5x；Parakeet-v2 等更大模型同样编码器主导。这说明压缩编码器是合理的，但该表只给出静态参数分解，未测量延迟与能耗，不能据此推断缓存局部性或省电幅度，实际效率需另行测量。

| STT-480ms |  |  |
| --- | --- | --- |
| Block count K | Encoder params. | Parameter reduction rate |
| 2 | 14.2 | 87.0% |
| 4 | 26.8 | 75.4% |
| 6 | 39.5 | 63.7% |
| 8 | 52.1 | 52.2% |
| 10 | 64.7 | 40.6% |

上表是学生随 K 扩展的参数量与压缩率，STT 在 K=2 时 14.2M 参数，压缩 87.0%，K=10 时 64.7M 参数，压缩 40.6%。它说明了精度与内存占用的可选折中：K 越小参数越少，K 越大越接近教师，但体积优势减弱。

### 表示引导分组比随机分组好在哪里

要排除一种可能：随便切分连续层也能同样压缩。论文在 STT 教师和 LibriSpeech 干净集训练条件下，对比 CKA 引导分组与随机连续分组，K 取 2 到 5，随机做法重复 5 次取均值和范围。指标仍是测试集 WER，越低越好。

下图横轴是块数 K，纵轴是 WER，红点是表示引导分组，蓝点加误差棒是随机分组的均值与范围，右上为 K=3 到 5 的放大。

> **看图路径：** 1. 先看横轴块数 K 从 2 到 5 与纵轴测试集 WER 的方向，越低越好；2. 对比 K=2 处红色点与蓝色均值和极长误差棒的差距；3. 再看右上放大框中 K=3 到 5 时红点始终低于蓝点的稳定趋势

[![原论文 Figure 3：Representational grouping vs. random grouping (five runs with error bars).](https://arxiv.org/html/2610.37833v1/images/wer_maxcut_vs_random_range_k2_k5_paper_v2.png)](https://arxiv.org/html/2610.37833v1/images/wer_maxcut_vs_random_range_k2_k5_paper_v2.png)

*论文图 3。原论文 Figure 3:：“Representational grouping vs. random grouping (five runs with error bars).”。*

可见 K=2 时随机分组的误差棒极长，均值远高于红点，说明无对齐的强共享极不稳定；K=3 到 5 时红点始终低于蓝点均值，差距随 K 减小而放大。这支持表示对齐对极小 K 至关重要的判断。限制是该消融只在 LibriSpeech 干净集和 STT 上进行，不能直接推广到所有噪声和教师；附录用跨数据集 CKA 相关系数大于 0.99 说明分组对校准数据选择较稳定，但仍指出 CKA 归一化对离群激活敏感，极端分布下分组鲁棒性待加强。

### 哪些情况还不能用本文结论

论文明确了两项局限。表示引导分组依赖 CKA 的归一化统计，对离群值或激活分布偏移敏感，极端情况下分组可能不稳定，需要更鲁棒的 CKA 变体。本文循环次数固定为分组长度以保持有效深度和相近 FLOPs，未引入按 utterance 难易自适应停机的机制，也未联合低比特量化，实际部署仍有进一步压缩空间。

从证据看，还有三点不能推广：主榜单反超只在给定 8 集平均和给定训练混合下成立，换数据分布可能不同；个性化增益依赖有注册语音和可靠用户嵌入，无注册或强噪声下未验证；延迟能耗数字来自特定 GPU、CPU 和序列长度，换硬件、批大小和序列长度需重测。附录的跨模型定位和量化基线也提醒，外部小模型与本文学生在架构和数据上差异很大，只能作定位参考，不能当同条件胜负。

### 复现第一步要准备什么

复现应从表示分析开始，而不是直接训练小模型。先用教师模型在 LibriSpeech、TED-LIUM 和 VoxPopuli 开发集各取 50 条，共 150 条校准语音，提取每层编码器激活并按论文公式计算线性 CKA，得到层间相似矩阵，再用动态规划按目标 K 切分为连续组，检查组内相似是否明显高于组间。

拿到分组后，按组内教师参数平均初始化各共享块，保持注意力和卷积配置、解码器和词表不变，用任务损失加组边界编码器蒸馏加解码器 KL 联合训练。关键超参按附录：批量 8，学习率 5e-4 或 5e-5，常数调度，AdamW，权重衰减 1e-3 或 1e-4，预训练 50 轮再微调 20 轮，bf16 混合精度。个性化需另准备 VoxCeleb2 的说话人划分和用户嵌入提取，保持主干冻结，只训 16 专家、选 5、秩 16 到 64 的路由器。

关于资源可用性，本次未发现来源绑定且完成验证的资源，不得声称代码、模型或数据已公开。论文正文提及了训练与评测所用的数据集与流程名称，但这不证明作者资源当前可用；教师原始大规模流程无法完全复制，因此复现目标应是相对差距和趋势，而非逐点复刻绝对 WER。

### 什么时候值得尝试这种结构

当端侧内存和 DRAM 能耗是首要瓶颈，但仍需要接近大模型的识别精度时，值得尝试块循环结构。它把参数量降一个数量级，同时保留有效深度，特别适合流式小模型向手表眼镜等设备迁移，以及需要端侧个性化但不允许上传语音的场景。K 的选择可按内存预算先定：极致压缩选 K=2 到 4 并配合 MoE-LoRA，要更高通用精度则选 K=8 左右。

容易产生的误解是把参数减少等同于计算减少。本文计算量基本不变，收益来自权重重用带来的缓存命中和少搬运；另一个误解是把平均 WER 反超当作全面超越，实际只是给定榜单平均下的结果，单集和单说话人差异仍大。还需要补的验证包括自适应循环步数、与量化的联合压缩，以及在无注册语音和强噪声下的个性化鲁棒性。总体上，结构化循环提供了一条与量化正交的压缩路径，但是否选用仍要看具体硬件的访存特性和用户场景是否有注册条件。

<details>
<summary>📎 论文与评分元数据</summary>

排名：前50% | 文档类型：方法研究 | [arXiv 原文](https://arxiv.org/abs/2610.37833v1)

</details>

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。

- 评分规则：type-aware-v1

- 评分模型：muse-spark-1.3-contributor

- 评分请求协议：openai_responses

---

[← 返回 2026-10-30 语音/音乐/音频论文速递](/audio-paper-digest-blog/posts/2026-10-30/)
