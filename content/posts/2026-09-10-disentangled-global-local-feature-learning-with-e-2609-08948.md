---
title: "Disentangled Global-Local Feature Learning with E-Branchformer for Audio Deepfake Detection"
date: 2026-09-10
draft: false
tags: [音频深度伪造检测, Conformer, 语音, 自监督学习]
categories: [论文速递]
description: "针对语音伪造检测中自监督表示难以同时捕捉长程与短程线索的问题，论文用并行全局注意力与局部卷积分支加解耦类令牌与 DWConv-SE 融合的 E-Branchformer，在 ASVspoof 2021 LA/DF 与 ITW 上取得 0.88%/1.85%/6.30% EER 并在 ASVspoof 5 上取得 5.44% EER，代价是四层编码器与细粒度融合带来的额外调参与消融验证成本。"
hiddenInHomeList: true
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_arxiv_id: "2609.08948"
paper_digest_workbench_contract: "researcher-workbench-v1"
paper_digest_reader_title: "并行解耦全局与局部：E-Branchformer 在音频伪造检测中的可复述设计"
paper_digest_original_title: "Disentangled Global-Local Feature Learning with E-Branchformer for Audio Deepfake Detection"
paper_digest_arxiv_version: null
paper_digest_arxiv_versioned_id: null
paper_digest_arxiv_abs_url: "https://arxiv.org/abs/2609.08948"
paper_digest_arxiv_pdf_url: "https://arxiv.org/pdf/2609.08948.pdf"
paper_digest_primary_task: "音频深度伪造检测"
paper_digest_taxonomy_contract: "paper-taxonomy-flat-tags-compat-v1"
paper_digest_taxonomy_selection_contract: "paper-taxonomy-selection-v1"
paper_digest_taxonomy_registry_version: "paper-taxonomy-v1"
paper_digest_taxonomy_registry_sha256: "15c82a567ce5a55dc1175684ed08b64c158558639d9c8fb822c9587ec32a8778"
paper_digest_taxonomy_concepts: [{"facet":"task","id":"task.audio-deepfake","label":"音频深度伪造检测"},{"facet":"method","id":"method.conformer","label":"Conformer"},{"facet":"signal","id":"signal.speech","label":"语音"},{"facet":"method","id":"method.self-supervised","label":"自监督学习"}]
paper_digest_primary_method: "Conformer"
paper_digest_score: 6.3
paper_digest_rank_bucket: "前50%"
paper_digest_document_type: "方法研究"
paper_digest_one_sentence: "针对语音伪造检测中自监督表示难以同时捕捉长程与短程线索的问题，论文用并行全局注意力与局部卷积分支加解耦类令牌与 DWConv-SE 融合的 E-Branchformer，在 ASVspoof 2021 LA/DF 与 ITW 上取得 0.88%/1.85%/6.30% EER 并在 ASVspoof 5 上取得 5.44% EER，代价是四层编码器与细粒度融合带来的额外调参与消融验证成本。"
paper_digest_authors: [{"affiliations":["Department of Electrical and Computer Engineering, National University of Singapore"],"name":"Phuong Tuan Dat"},{"affiliations":["School of Communication and Information Technology, Hanoi University of Science and Technology"],"name":"Ho Bao Thu"},{"affiliations":["School of Communication and Information Technology, Hanoi University of Science and Technology"],"name":"Nguyen Tran Trung"},{"affiliations":["School of Communication and Information Technology, Hanoi University of Science and Technology"],"name":"Pham Viet Hoang"},{"affiliations":["School of Communication and Information Technology, Hanoi University of Science and Technology"],"name":"Nguyen Thi Thu Trang"}]
paper_digest_abstract_sha256: "ee4a48a1e5cc8b129219fef87f7207a3f0e8d6f2a5a900812faa606e6796a2a9"
paper_digest_sidecars: {"citation.bib":{"sha256":"e6e53ee27c343b662c99100fb6d5fd7d1a47fd50ae14cab8b5ddb28b8bac4cfc","url":"/audio-paper-digest-blog/data/papers/2026-09-10/2609-08948/citation.bib"},"citation.json":{"sha256":"b64ac5f875528bb62404d24015e04b0fd1212aac52bbdf0db8efa16195db1560","url":"/audio-paper-digest-blog/data/papers/2026-09-10/2609-08948/citation.json"},"citation.ris":{"sha256":"45a500d8fea63c9ad81fd652d706b2b2874854400c358f639c7824018aad77a9","url":"/audio-paper-digest-blog/data/papers/2026-09-10/2609-08948/citation.ris"},"rethink-context.json":{"sha256":"121523ec4db78cbca8c234e090c94da0eda32e56f16cf6feb6530cff23842a46","url":"/audio-paper-digest-blog/data/papers/2026-09-10/2609-08948/rethink-context.json"}}
paper_digest_api_reader_contract: "beginner-researcher-v3"
paper_digest_api_reader_article_sha256: "44a0fb30e6ac4f7a8491767929ca20eb6007700b25a191cd70ebf29e4c9092b5"
paper_digest_api_reader_plan_sha256: "dd968408e2435cd3706f2712684eb7f656ab26b39c9e8f16ed66eb16334f81b9"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings-v4"
paper_digest_api_reader_source_bindings_sha256: "eba4dbebd56ba46c022a099988702ab4c40a40dfe7ff4025fd6dd205763c4cf6"
paper_digest_api_reader_source_table_count: 4
paper_digest_api_reader_source_formula_count: 0
paper_digest_api_reader_structured_artifacts_sha256: "44f207e5cc9db5a412729dd94641825fecfec65f1fff1b02efc582eec87960f6"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity-v1"
paper_digest_api_reader_author_identity_sha256: "bb0f5fc5f9250413da7ea31c55e729b10f2219fd0102202ab8e8af81a21de1d7"
paper_digest_api_reader_author_count: 5
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity-v1"
paper_digest_api_reader_resource_identity_sha256: "30bf2971a7fd56d8ff91ca5b1f23d42ab1f31debdcba1fe914f58ae3ac94e6c5"
paper_digest_api_reader_resource_count: 1
paper_digest_api_reader_figure_persistence: "ephemeral-no-persisted-figure-assets-v1"
paper_digest_api_reader_decision_projection: "api-reader-decision-projection-v2"
---

# 📄 并行解耦全局与局部：E-Branchformer 在音频伪造检测中的可复述设计

> 英文题目：*[Disentangled Global-Local Feature Learning with E-Branchformer for Audio Deepfake Detection](https://arxiv.org/abs/2609.08948)*

> 标签：#音频深度伪造检测 | #Conformer | #语音 | #自监督学习
>
> 评分：**6.3/10** | 创新 1.3/2 | 技术严谨 1/1.5 | 实验充分 1.1/1.5 | 清晰度 0.7/1 | 影响力 1/1.5 | 开源 0/1.5 | 可复现 0.3/0.5 | 工程/实践 0.9/1.5


## 👥 作者与机构

- Phuong Tuan Dat：Department of Electrical and Computer Engineering, National University of Singapore
- Ho Bao Thu：School of Communication and Information Technology, Hanoi University of Science and Technology
- Nguyen Tran Trung：School of Communication and Information Technology, Hanoi University of Science and Technology
- Pham Viet Hoang：School of Communication and Information Technology, Hanoi University of Science and Technology
- Nguyen Thi Thu Trang：School of Communication and Information Technology, Hanoi University of Science and Technology

## 📌 核心摘要

输入为单通道 16 kHz 语音波形，输出为 bonafide（真实）与 spoof（伪造）二分类判决，难点在于跨合成系统、编解码失真及真实场景信道与录制多样性导致的分布偏移。方法链分四步：以可微调的 XLS-R 300M 提取多层上下文表示并经 Squeeze-and-Excitation Aggregation 自适应聚合层间信息；经 SeLU 激活的线性层投影至 144 维并拼接可学习分类标记（classification token）；由 4 层 E-Branchformer 并行建模全局依赖与局部时序模式；经拼接、深度可分离卷积与线性投影的合并操作融合后，对补丁标记（patch tokens）依次施加深度可分离卷积（DWConv）与 Squeeze-and-Excitation（SE，挤压激励）重校准，并以通道注意力逐元素加权分类标记再送线性分类头。与串行 Conformer 相比，平行分支将局部建模卸载至卷积支路，使自注意力支路专注长程韵律与频谱不一致性。原文宣称的双分类标记解耦思想在 3.2 节实现描述中表述为单一分类标记累积全局信息并通过 DWConv-SE 吸收补丁上下文，存在宣称与实现细节的不一致。在 ASVspoof 2021 LA 上等错误率（EER）达到 0.88%，相对最强基线 XLSR-Mamba 的 0.93% 相对降低 5.4%，在 ITW 真实场景上为 6.30% 对 6.71% 相对降低 6.1%，并在 ASVspoof 5 上以 5.44% 领先 Nes2Net-X 的 5.92%。适用边界限于已评测的 ASVspoof 2019/2021/5 与 ITW 的英语为主数据，未验证跨语种、强对抗攻击及多模态伪造的外推能力。原文未披露训练、推理或部署成本。

## 🔗 开源与复现资源

- 第三方资源：<https://github.com/ErosRos/conformer-based-classifier-for-anti-spoofing.git> → <https://github.com/ErosRos/conformer-based-classifier-for-anti-spoofing> — 暂时无法访问

可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 输入是什么、要判什么、输出如何使用？

本论文研究的输入是一段 16 kHz 采样的语音波形，长度在训练与推理时被统一处理为约 4 秒，对应 64,600 个采样点。目标是二分类：判断该段语音是真实人声还是经文本转语音或声音转换合成的伪造语音。输出是一个标量判别分数，经线性分类头后用于计算等错误率，分数阈值决定真伪判定，评价时报告等错误率越低越好。

必须保留的信息包括：前端使用 XLS-R 300M 提取的 1024 维自监督表示并在训练中微调、编码器为 4 层 E-Branchformer 且嵌入维度 144、注意力头数 4、深度卷积核大小 31、优化器 Adam 学习率 1×10 的负 6 次方、权重衰减 1×10 的负 4 次方、批量 20、训练 7 个轮次并选取验证损失最低的检查点、加权交叉熵应对类别不平衡、以及 RawBoost 的 Algo5 用于 LA 与 ITW 和 Algo3 用于 DF 的数据增强。

输出将按学习依赖展开：先说明任务与相关路线，再给出方法全景与组件计算，随后是训练与推理流程、实验条件、结果与反证，最后讨论复现与收束。教学中出现的数值例子会明确标注为例子，不代表论文报告的真实性能。

### 同类方法如何处理自监督表示的全局与局部？

在音频伪造检测中，主流做法是将自监督模型的层级表示送入下游判别器。论文将相关路线分为两类。第一类是串行结构，以 Conformer 为代表，在两个前馈网络之间顺序放置多头自注意力与卷积模块，依赖残差与预归一化让同一注意力既要处理长程依赖又要兼顾局部纹理。

第二类是并行结构，以 Branchformer 与 E-Branchformer 为代表，在两个前馈网络之间并行放置注意力分支与卷积门控多层感知机分支，最后通过拼接、深度卷积与线性投影的合并操作融合。论文指出并行设计在语音识别与口语理解中已优于 Conformer，但在伪造检测中尚未被探索。

基线 XLSR-Conformer 采用单分类令牌与串行建模，而本文提出双分类令牌的解耦设计，分别让一个令牌在注意力分支学习全局上下文，另一个在卷积分支学习局部时序模式，再通过深度可分离卷积与 Squeeze-and-Excitation 对类令牌做增强。这 1 对照明确了比较条件：前端与训练协议相同，差异仅在于全局与局部如何分工与融合。

### 为什么需要显式解耦全局与局部特征？

伪造语音的线索分布在不同尺度。长程线索包括韵律不连续、句级频谱包络异常等，需要跨越数百毫秒甚至整句的上下文才能发现；短程线索包括帧级抖动、合成器引入的频带瑕疵等，集中在数十毫秒的局部窗口。

若用单一注意力同时承担两类建模，注意力权重会偏向对角线附近的局部区域，削弱对全局不一致性的敏感度。论文据此提出问题：能否让注意力分支专职全局、卷积分支专职局部，并在保持两者互补的前提下将信息有效汇聚到用于分类的令牌上。

形式上，输入为时序特征序列，长度为 T，维度为 D，经聚合与投影后与类令牌拼接为长度 T 加 1 的序列，编码器需输出一个增强后的类令牌用于二分类。困难在于融合时既要保留局部细节的通道重要性，又要避免简单拼接导致信息稀释，因此需要可学习的通道重标定与局部交互机制。

### 整体架构如何让一个样本走完输入到判决？

对一个输入波形，流程按以下动作依次执行。第一步，前端 XLS-R 对波形做多层编码，产生 T 乘 D 的表示，D 为 1024，T 由时长决定。第二步，聚合模块对多层表示做内容自适应融合，论文采用 Squeeze-and-Excitation Aggregation，对不同层的贡献做加权求和，得到单一时序表示。

第三步，经带 SeLU 的线性投影将维度降至 144，并与一个可学习的分类令牌拼接，形成长度 T 加 1、维度 144 的输入序列。第四步，该序列进入 4 层堆叠的 E-Branchformer 块，每块内部并行执行全局分支的多头自注意力与局部分支的卷积门控多层感知机，2 分支输出经拼接、深度卷积与线性投影合并。

第五步，全部块处理完毕后，将融合表示拆分为类令牌与补丁令牌，补丁令牌依次经过深度可分离卷积与 Squeeze-and-Excitation 得到通道注意力权重，该权重以逐元素相乘的方式作用于类令牌，再与重标定后的补丁令牌合并。第六步，增强后的类令牌送入线性分类头，输出真伪分数，训练时以加权交叉熵为目标，权重与类别频率成反比。这一路径保证了从波形到分数的可复述计算，且每个模块的输入输出维度与归一化位置均有明确约定。

### 并行分支与融合模块各自计算什么？

E-Branchformer 块的结构以 Macaron 式双前馈网络为框架，中间并行放置两个分支。全局分支采用相对位置编码的多头自注意力，头数为 4，每头维度 36，负责在全序列上计算查询与键的相似度并加权汇聚值向量，从而捕捉长程依赖。局部分支采用卷积门控多层感知机，通过门控与深度卷积捕捉短程时序模式，核大小 31 与基线 Conformer 的卷积感受野保持一致以保证公平比较。2 分支输出的合并不是简单拼接，而是拼接后接 1 维深度卷积与线性投影，论文指出该策略优于原始 Branchformer 的拼接投影。

**全局建模 × 局部建模：** 全局建模指用多头自注意力在全时序上计算任意 2 帧的依赖，负责捕捉韵律断裂、跨句频谱不一致等长程伪造痕迹；局部建模指用卷积在邻近窗口内提取短时纹理，负责捕捉合成器引入的帧级抖动与频带畸变；二者并行搭配的理由是避免串行结构中注意力被迫兼顾局部细节，新增作用是让注意力专注长程而卷积专注短程，形成互补的判别信息。

聚合与投影部分，XLS-R 的多层输出先经 SEA 做层间加权，再经线性加 SeLU 映射到 144 维。类令牌在此阶段被拼接到序列首位，作为全局表示累加器参与后续所有层的注意力与卷积交互。

**自监督表示 × Squeeze-and-Excitation 聚合：** 自监督表示指 XLS-R 在多层 Transformer 中产生的 1024 维时序特征，包含从声学到语义的不同抽象层级；Squeeze-and-Excitation 聚合指先对时序维度做挤压得到通道描述符，再用激励门控为每一层分配自适应权重；搭配理由是不同伪造类型在不同层更显著，新增作用是以内容感知的方式筛选最具判别力的层组合而非等权求和。

融合增强部分，论文将最后的融合表示拆分为类令牌与补丁令牌。补丁令牌先经深度可分离卷积实现跨令牌的局部交互，再经 Squeeze-and-Excitation 在通道维度做挤压与激励，生成通道注意力权重。该权重与类令牌逐元素相乘，实现以补丁提炼的上下文对类令牌的精炼。

**分类令牌 × 补丁令牌：** 分类令牌是前置于序列首位的可学习向量，在编码器中通过注意力汇聚全局判别信息并最终送入线性分类头；补丁令牌是经投影后的语音帧序列，承载时序细节；搭配理由是让分类令牌专职决策而补丁令牌保留细粒度证据，新增作用是通过 DWConv 与 SE 将补丁令牌提炼的通道注意力回注到分类令牌，实现上下文精炼。

**深度可分离卷积 × Squeeze-and-Excitation：** 深度可分离卷积指在通道独立的深度卷积上对相邻补丁令牌做局部交互，捕捉跨令牌的时序平滑与突变；Squeeze-and-Excitation 指对通道维度做全局池化后生成通道权重，强调对真伪最敏感的频带；搭配理由是前者提供空间局部性后者提供通道选择性，新增作用是先让补丁信息在局部聚合再按通道重要性重标定，最后以逐元素相乘增强分类令牌。

整体上，双类令牌的设计让全局与局部特征在各自分支中独立演化，再通过可学习的合并与重标定汇聚，避免了串行结构中单一注意力的负担过重。

### 训练如何组织数据、优化与增强？

训练数据按评测基准区分。对于 ASVspoof 2021 系列，训练集为 ASVspoof 2019 LA，包含 25,380 个训练样本与 24,844 个验证样本，评测在 LA21 与 DF21 上进行，DF21 额外包含有损编解码后处理。对于 ASVspoof 5，使用其官方划分的 182,357 个训练、140,950 个开发与 680,774 个评测样本进行训练与评测。ITW 的 31,779 个样本仅用于跨域评测，复用 LA21 的检查点以保证一致性。

所有音频在训练与推理时被截断或拼接为约 4 秒的定长段。优化采用 Adam，学习率 1×10 的负 6 次方，权重衰减 1×10 的负 4 次方，批量 20，训练 7 轮，选取验证损失最低的检查点。损失为加权交叉熵，权重与类别频率成反比以缓解真伪样本不平衡。

XLS-R 300M 在训练中与下游网络联合微调而非冻结，使表示适配伪造检测目标。数据增强遵循基线协议，对 LA、ASVspoof 5 与 ITW 使用 RawBoost 的 Algo5，对 DF 使用 Algo3，模拟真实声学条件与传输效应。论文未报告梯度裁剪、学习率调度与早停阈值等细节，复现时需按基线仓库的默认配置补齐并记录。

### 评测条件、指标与基线如何保证可比性？

评测指标为等错误率，数值越低表示真伪判别越好，论文在 4 个基准上报告该指标。基线涵盖近年基于自监督表示的系统，包括 XLSR-Conformer、XLSR-Conformer 加时序通道建模、XLSR-AASIST、WavLM 多融合注意力、敏感层选择、混合专家以及 XLSR-Mamba 与 Nes2Net 系列。

关键公平条件是 XLSR-Conformer 与本文模型共享相同前端、相同训练协议与相同增强，仅在编码器安排上不同：前者为串行 Conformer，后者为并行 E-Branchformer 加双类令牌与 DWConv-SE 融合，卷积核大小均设为 31 以对齐局部感受野。ASVspoof 5 上的对比包含复现的单系统与文献引用的单系统，标注复现来源以区分可运行策略与引用值。

为核对数据规模与划分，下表汇总各数据集的样本量与用途，表中数值来自原文对样本量的直接报告，复现时需严格按此划分与定长处理执行。

| 数据集 | 训练样本 | 验证/开发样本 | 评测样本 | 备注 |
| --- | --- | --- | --- | --- |
| ASVspoof 2019 LA | 25,380 | 24,844 | - | 2021 系列训练与验证来源 |
| ASVspoof 2021 LA | - | - | 181,566 | 含多种 TTS 与 VC 系统 |
| ASVspoof 2021 DF | - | - | 611,829 | 含编解码后处理 |
| ASVspoof 5 | 182,357 | 140,950 | 680,774 | 大规模基准独立训练 |
| In-the-Wild | - | - | 31,779 | 真实场景跨域评测 |

上表明确了训练与评测的样本边界，表明 2021 系列复用 2019 训练集而 ASVspoof 5 独立训练，ITW 仅作跨域检验。结合定长 4 秒与相同增强的约定，可保证后续性能对比在数据条件一致的前提下进行，避免因划分或时长不一致导致的偏差。

### 主结果在何种条件下优于可运行基线？

主结果要回答的问题是：在相同前端与训练协议下，并行解耦是否在匹配、编解码退化、域外真实场景与大规模 4 种条件下均带来可度量的等错误率下降，且优势是否在域外更大。公平条件为共享 XLS-R 300M 前端、相同定长处理、相同优化与增强，差异仅为编码器与融合方式，指标方向为等错误率越低越好。

| 模型 | 21LA EER | 21DF EER | ITW EER | ASVspoof 5 EER | 条件说明 |
| --- | --- | --- | --- | --- | --- |
| 提出模型 | 0.88% | 1.85% | 6.30% | 5.44% | E-Branchformer 并行解耦 |
| XLSR-Conformer | 1.38% | 2.27% | 8.29% | 6.19% | 串行 Conformer 复现 |
| XLSR-Conformer+TCM | 1.18% | 2.25% | 7.79% | 6.03% | 时序通道建模增强 |

上表显示提出模型在 4 个基准上均为最低等错误率。相对 XLSR-Conformer，21LA 从 1.38% 降至 0.88% 相对下降 36.2%，21DF 从 2.27% 降至 1.85% 下降 18.5%，ITW 从 8.29% 降至 6.30% 下降 24.0%，ASVspoof 5 从 6.19% 降至 5.44% 下降 12.1%。相对 XLSR-Conformer+TCM，21LA 从 1.18% 降至 0.88% 下降 25.4%，21DF 从 2.25% 降至 1.85% 下降 17.8%，ITW 从 7.79% 降至 6.30% 下降 19.1%。在 21LA 上最强基线为 XLSR-Mamba 的 0.93%，提出模型以 0.88% 超越 5.4%；在 21DF 上最强为 Nes2Net-X 的 1.87%，提出模型以 1.85% 超越 1.1%。

在 ITW 上提出模型以 6.30% 超越 XLSR-Mamba 的 6.71% 与 Nes2Net-X 的 6.74%，相对提升约 6.1%。代价是引入双类令牌与 DWConv-SE 融合带来的额外参数与调参，但论文未报告训练时长与推理延迟，无法据此承诺效率改善。未胜出项包括 WavLM-MFA 在 21LA 上 5.08% 等较高错误率，表明不同前端与下游组合的差异显著，单一指标不能推广到所有场景。

### 哪些组件与策略真正带来增益？

消融按 3 个问题组织：全局与局部分支是否互补、层聚合策略是否关键、融合中的 DWConv 与 SE 是否必要。所有消融保持前端与训练协议不变，仅替换目标组件，指标仍为等错误率越低越好。

首先，单分支与双分支对比显示全局分支单独优于局部分支，但双分支通过双类令牌融合在 4 个基准上均进一步下降，21LA 从 0.94% 降至 0.88%，21DF 从 2.29% 降至 1.85%，ITW 从 6.73% 降至 6.30%，ASVspoof 5 从 6.16% 降至 5.44%，支持两者提供互补判别信息。

其次，为检验层聚合策略的影响，下表对比 4 种 SSL 层融合方式，指标为等错误率百分比，越低越好，公平条件为仅替换聚合模块。

| Model | 21LA | 21DF | ITW | ASVspoof 5 |
| --- | --- | --- | --- | --- |
| AttM Pan et al. (2024) | 0.98 | 2.29 | 8.76 | 6.32 |
| Weighted sum | 1.07 | 2.33 | 8.82 | 6.18 |
| Last hidden layer | 1.00 | 2.46 | 8.67 | 6.23 |
| SEA Guragain et al. (2024) | 0.88 | 1.85 | 6.30 | 5.44 |

上表显示 SEA 在 4 个基准上均为最低，分别为 0.88%、1.85%、6.30%、5.44%，优于注意力合并、加权求和与仅用最后一层，支持内容自适应的层选择对伪造检测至关重要，代价是引入额外的挤压激励参数。

再次，为检验融合模块中 DWConv 与 SE 的必要性，下表对比完整模型与去除对应模块后的性能，指标仍为等错误率百分比。

| 配置 | 说明 |
| --- | --- |
| 提出模型 | 完整 DWConv 加 SE |
| 去除 SENet | 通道重标定缺失 |
| 去除 DWConv | 局部交互缺失 |
| 去除两者 | 最差配置 |

上表表明同时去除两者时错误率在所有基准上最高，ITW 从 6.30% 升至 10.90% 上升 4.60 个百分点，ASVspoof 5 从 5.44% 升至 7.18%，论文报告去除任一模块均导致下降且 DWConv 在 21DF 与 ITW 上贡献更大，支持两者互补且对跨令牌局部交互的建模尤为关键。

为进一步验证解耦的机制，论文测量了注意力对角性。下图展示 Conformer 与 E-Branchformer 在 4 层编码器上的对角性分数，分数越高越偏局部，横轴为层索引 0 至 3，纵轴为对角性。

> **看图路径：** 1. 对比左右两子图(a)LA 与(b)DF 中蓝色 Conformer 与橙色 E-Branchformer 四层曲线的纵向分离；2. 读取每层上方标注的具体对角性数值，确认 Conformer 约 0.556-0.558 而 E-Branchformer 约 0.510-0.525 且区间不重叠；3. 观察 E-Branchformer 在第 1 层达到峰值后下降的走势与 Conformer 近乎水平的差异；4. 结合图例与横轴 Layer 0-3 确认分离在所有层与两个数据集上均成立

[![原论文 Figure 3：Diagonality of self-attention weights across encoder layers for Conformer and E-Branchformer.](https://arxiv.org/html/2609.08948v1/SPL_Ebranchformer/optimized_plot.png)](https://arxiv.org/html/2609.08948v1/SPL_Ebranchformer/optimized_plot.png)

*论文图 3。原论文 Figure 3:：“Diagonality of self-attention weights across encoder layers for Conformer and E-Branchformer. (a) ASVspoof 2021 LA. (b) ASVspoof 2021 DF.”。*

图中可见 Conformer 在 LA 与 DF 上 4 层分数均约 0.556 至 0.558 且近乎水平，而 E-Branchformer 仅约 0.510 至 0.525 且在第 1 层达峰后回落，两区间在所有层与 2 个数据集上均不重叠。这一模式支持并行分支让注意力从局部负担中释放而更关注全局不一致性，且与域外增益更大的错误率趋势一致。

**对角性分数 × 注意力分布：** 对角性分数是量化注意力权重集中于对角线程度的指标，分数越高表示注意力越偏向邻近帧的局部上下文；注意力分布指自注意力在全序列上的权重形态；搭配理由是用分数把抽象的分布转为可比较的数值，新增作用是验证解耦后 E-Branchformer 的注意力是否真正释放局部负担而转向更全局的依赖。

需要指出，消融未报告统计显著性与多次随机种子的方差，单次运行的数值差异需谨慎解读为趋势而非确定性优劣。

### 哪些边界未被评测、哪些推断需谨慎？

论文直接报告的是在给定数据划分、定长处理与增强下的等错误率对比，未报告误判率随阈值的曲线、推理延迟、显存占用与训练耗时，因此不能据此承诺实时性或部署成本的改善。相关性不等于因果：对角性分数的降低与错误率下降同时出现，支持解耦有助于全局建模，但未通过干预实验验证分数变化必然导致性能变化。

未评测的边界包括对抗攻击、多模态伪造、跨语言与跨信道录制设备的系统性评估，以及不同时长与非定长输入下的稳定性。数据增强的 Algo5 与 Algo3 为固定选择，未展示去除增强或更换增强策略时的退化幅度，复现时若改变增强需重新校准阈值。

基线中部分结果为文献引用而非复现，引用值与复现值可能因实现细节不同而不可直接等同比较，论文已用标记区分复现与引用。总体趋势不等于每组每步都成立，例如在 21DF 上相对提升仅 1.1%，在小样本子集上可能不显著，需以置信区间补充判断。

### 复现需要哪些信息条件与具体动作？

复现时应按以下动作依次执行并保留关键超参数。第一，准备数据：下载 ASVspoof 2019 LA 用于训练与验证，ASVspoof 2021 LA 与 DF 及 ITW 用于评测，ASVspoof 5 按官方训练、开发与评测划分使用，所有音频重采样至 16 kHz 并按 64,600 采样点截断或拼接为约 4 秒。

第二，配置前端：加载 XLS-R 300M，输出维度 1024，设置为训练中微调而非冻结，投影层为线性加 SeLU 映射至 144 维。第三，构建编码器：堆叠 4 层 E-Branchformer，每层注意力头数 4，深度卷积核大小 31，合并采用拼接后 1 维深度卷积加线性投影。

第四，设置优化：Adam 学习率 1×10 的负 6 次方，权重衰减 1×10 的负 4 次方，批量 20，训练 7 轮，损失为按类别频率反比加权的交叉熵，选取验证损失最低的检查点，ITW 评测复用 LA21 的检查点。第五，应用增强：LA、ASVspoof 5 与 ITW 使用 RawBoost Algo5，DF 使用 Algo3。

第六，记录与核对：保存每次运行的等错误率、阈值与混淆矩阵，核对数据集、模型、阶段、指标与单位的一致性，区分百分点与相对百分比的表述。论文提供代码链接但未在证据中给出权重下载与运行脚本细节，若链接失效需按上述配置自行实现并报告硬件与随机种子。

### 何时值得尝试该方法、还有什么待验证？

当任务需要同时利用长程韵律与短程纹理线索，且已使用自监督前端但下游仍为串行结构时，尝试并行解耦与双类令牌融合是合理的选择，尤其在域外真实场景与大规模数据上可能获得更稳定的增益。值得尝试的条件包括：能够承担 4 层编码器与额外融合模块的参数与调参成本，且有足够的验证集用于阈值校准与增强选择。

复现前应先完成数据定长与增强的严格对齐，再验证 SEA 层聚合与 DWConv-SE 融合的独立贡献，避免将整体增益误归因于单一模块。还需补充的验证包括：多次随机种子的方差与显著性检验、不同音频时长与非定长推理的鲁棒性、推理延迟与显存的实测、以及在对抗与跨信道条件下的稳定性。

论文报告的 0.88%、1.85%、6.30% 与 5.44% 等错误率是在特定协议下的直接观测，支持并行全局局部建模的有效性，但是否在其他前端、其他语言或实时系统上保持优势，仍需在相同可运行条件下复测后判断。

<details>
<summary>📎 论文与评分元数据</summary>

排名：前50% | 文档类型：方法研究 | [arXiv 原文](https://arxiv.org/abs/2609.08948)

</details>

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。

- 评分规则：type-aware-v1

- 评分模型：muse-spark-1.2-contributor

- 评分请求协议：openai_responses

---

[← 返回 2026-09-10 语音/音乐/音频论文速递](/audio-paper-digest-blog/posts/2026-09-10/)
