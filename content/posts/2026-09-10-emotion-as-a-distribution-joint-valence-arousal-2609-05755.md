---
title: "Emotion as a Distribution: Joint Valence-Arousal Probability Learning for Speaker-Independent Multimodal Emotion Recognition"
date: 2026-09-10
draft: false
tags: [语音情感识别, 多模态学习, 状态空间模型, 评测协议, 统计分析]
categories: [论文速递]
description: "在文本+ 语音输入上用固定编码-时序-融合流水线对比 Transformer 与 Mamba 时序主干，并用二维高斯软目标训练 9×9 Valence-Arousal 联合分布头，在说话人无关 LOSO 协议下主系统达 73.0%±0.3 UA 且分布质心可跟踪连续效价/唤醒，但延迟优势在该句长下未出现。"
hiddenInHomeList: true
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_arxiv_id: "2609.05755"
paper_digest_workbench_contract: "researcher-workbench-v1"
paper_digest_reader_title: "把情绪当分布输出：在严格说话人无关评估下用 9×9 V-A 网格做可复述的多模态情绪识别"
paper_digest_original_title: "Emotion as a Distribution: Joint Valence-Arousal Probability Learning for Speaker-Independent Multimodal Emotion Recognition"
paper_digest_arxiv_version: null
paper_digest_arxiv_versioned_id: null
paper_digest_arxiv_abs_url: "https://arxiv.org/abs/2609.05755"
paper_digest_arxiv_pdf_url: "https://arxiv.org/pdf/2609.05755.pdf"
paper_digest_primary_task: "语音情感识别"
paper_digest_taxonomy_contract: "paper-taxonomy-flat-tags-compat-v1"
paper_digest_taxonomy_selection_contract: "paper-taxonomy-selection-v1"
paper_digest_taxonomy_registry_version: "paper-taxonomy-v1"
paper_digest_taxonomy_registry_sha256: "15c82a567ce5a55dc1175684ed08b64c158558639d9c8fb822c9587ec32a8778"
paper_digest_taxonomy_concepts: [{"facet":"task","id":"task.emotion-recognition","label":"语音情感识别"},{"facet":"method","id":"method.multimodal-learning","label":"多模态学习"},{"facet":"method","id":"method.state-space","label":"状态空间模型"},{"facet":"method","id":"method.evaluation-protocol","label":"评测协议"},{"facet":"method","id":"method.statistical-analysis","label":"统计分析"}]
paper_digest_primary_method: "多模态学习"
paper_digest_score: 6.9
paper_digest_rank_bucket: "前50%"
paper_digest_document_type: "方法研究"
paper_digest_one_sentence: "在文本+ 语音输入上用固定编码-时序-融合流水线对比 Transformer 与 Mamba 时序主干，并用二维高斯软目标训练 9×9 Valence-Arousal 联合分布头，在说话人无关 LOSO 协议下主系统达 73.0%±0.3 UA 且分布质心可跟踪连续效价/唤醒，但延迟优势在该句长下未出现。"
paper_digest_authors: [{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Tingyi Lin"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Wen-Ren Yang"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Kuanwei Chen"}]
paper_digest_abstract_sha256: "a16c1959a47e5b0de46c1a0fbe03298bbfd9b5da7587d25640ff212bc20def00"
paper_digest_sidecars: {"citation.bib":{"sha256":"8456075cfdbb38a90c2fd235076626f0f6e89b9ed5c6b94af8c587cddaea2964","url":"/audio-paper-digest-blog/data/papers/2026-09-10/2609-05755/citation.bib"},"citation.json":{"sha256":"5cd82adb9d8bd39dbac8688b05aa9e0e728de52aded300651e3ba602e49bb367","url":"/audio-paper-digest-blog/data/papers/2026-09-10/2609-05755/citation.json"},"citation.ris":{"sha256":"9ed0f92112240b58e36f53791aa75c99fdeaeeb90f19f905aef60a7153f68b1b","url":"/audio-paper-digest-blog/data/papers/2026-09-10/2609-05755/citation.ris"},"rethink-context.json":{"sha256":"edc2559191b2a2c5cd1c1b861c9a7224cdfcff9342a370ddc6ea6e134b743f1a","url":"/audio-paper-digest-blog/data/papers/2026-09-10/2609-05755/rethink-context.json"}}
paper_digest_api_reader_contract: "beginner-researcher-v3"
paper_digest_api_reader_article_sha256: "6751b171135b7ee6b9ab8e37728e302522db89e508ca42698fc8e8d81593ddfd"
paper_digest_api_reader_plan_sha256: "920d16c524c1264f88b668141dc03963c18ba74ee282e0a7b62154271a2ff8f1"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings-v4"
paper_digest_api_reader_source_bindings_sha256: "5691817bc5e3f015dce0f1fe82e0f8624b5f8bccfdf7cba4ef668b6cb79f7ba1"
paper_digest_api_reader_source_table_count: 4
paper_digest_api_reader_source_formula_count: 5
paper_digest_api_reader_structured_artifacts_sha256: "34760db0ba838d7d11c32624114c61832d595498b660e0659b75d081fb97f74c"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity-v1"
paper_digest_api_reader_author_identity_sha256: "7b8862c2a185c76818b72999a9b811cbbb03a3b645de0eb86a6a6275394791f3"
paper_digest_api_reader_author_count: 3
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity-v1"
paper_digest_api_reader_resource_identity_sha256: "0b9716cbf0ed36f12adf911aea2b619a76af947e9f8cee9126cc3194ed9242d0"
paper_digest_api_reader_resource_count: 1
paper_digest_api_reader_figure_persistence: "ephemeral-no-persisted-figure-assets-v1"
paper_digest_api_reader_decision_projection: "api-reader-decision-projection-v2"
---

# 📄 把情绪当分布输出：在严格说话人无关评估下用 9×9 V-A 网格做可复述的多模态情绪识别

> 英文题目：*[Emotion as a Distribution: Joint Valence-Arousal Probability Learning for Speaker-Independent Multimodal Emotion Recognition](https://arxiv.org/abs/2609.05755)*

> 标签：#语音情感识别 | #多模态学习 | #状态空间模型 | #评测协议 | #统计分析
>
> 评分：**6.9/10** | 创新 1.4/2 | 技术严谨 1.2/1.5 | 实验充分 1.2/1.5 | 清晰度 0.8/1 | 影响力 0.9/1.5 | 开源 0/1.5 | 可复现 0.4/0.5 | 工程/实践 1/1.5


## 👥 作者与机构

- Tingyi Lin：机构信息未在 arXiv HTML 中可靠披露
- Wen-Ren Yang：机构信息未在 arXiv HTML 中可靠披露
- Kuanwei Chen：机构信息未在 arXiv HTML 中可靠披露

## 📌 核心摘要

任务以语音与文本为输入，在IEMOCAP四分类（angry/happy+excited/sad/neutral，约5.5k条）上同时输出类别并输出效价-唤醒度平面上的9×9概率分布，难点在于情感的渐变与混合性以及说话人无关泛化易被随机划分泄露所夸大。方法链先以冻结BERT-base与可切换语音前端分别编码文本与语音并经共享投影对齐维度，再送入时序骨干进行模内时序建模。时序特征经双向跨注意力实现模间对齐与融合后进入双头输出，分类头输出类别，9×9 V-A分布头以二维各向同性高斯软目标经KL散度与交叉熵联合监督并以质心读出连续值。相对以往仅软化类别标签或分别回归效价与唤醒度方差的做法，该工作将输出空间直接设为离散化联合V-A网格上的归一化分布，无需参数化假设即可表达多峰与非邻接质量并提供可校准的不确定性表征。在IEMOCAP说话人无关5折留一会话评测设置下，双头Mamba系统相对同管线Transformer跨注意力基线的非加权准确率从70.0%升至73.0%（三种子均值±0.3%）。分布质心对效价与唤醒度的CCC均为0.66，且分布熵与类别投票歧义仅呈弱正相关、联合分布近乎可分解，表明分布主要提供表征而非置信度信号。适用边界在于高斯软目标为统一先验而非实测标注者分歧、网格截断带来边缘熵偏差，且跨语料零样本与长对话流式场景尚未验证，受限于当前话语长度；推理开销上Mamba在550至2750帧长度下未呈现延迟或峰值显存优势，准确率小幅领先但未达统计显著。

## 🔗 开源与复现资源

- 代码相关资源：<https://github.com/brian10420/EchoMind-Mamba-VA-SER> — 暂时无法访问

可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 输入是什么、要输出什么、什么信息必须保留？

本文任务是多模态情绪识别，输入为一条话语的文本与语音，输出要求同时给出两类信息。第一类是传统的四分类决策，类别为愤怒、快乐与兴奋合并、中性、悲伤，共约 5531 条 IEMOCAP 话语。第二类是本文新增的分布输出，即在效价-唤醒平面上离散化的 9×9 概率矩阵，每个格子对应一个效价与唤醒坐标，矩阵按行列归一化为 1。

必须保留的信息是情绪的分级与混合特性，硬标签的 argmax 会把可能同时带有悲伤与愤怒的表达压缩成单一类别，丢掉几何邻近性。因此目标是让模型在同一前向中既能做分类，又能暴露一个可被下游共情组件直接消费的归一化分布。

数据条件上，IEMOCAP 提供每条话语的文本转写、16 kHz 语音、离散标签以及在 1 到 5 尺度上的效价与唤醒均值标注，评估必须在说话人无关条件下进行，因为会话对应不同说话人对，随机切分会泄露说话人身份。输出的使用设想是把 9×9 矩阵作为软提示前缀交给语言模型做共情回复生成，但本文仅实现分布头本身，不评估语言模型生成效果。

### 同类工作如何处理情绪的连续性与评估的严格性？

相关工作可按输入、目标与监督方式对照。早期多模态与语音情绪识别多用 CNN、LSTM 与 Transformer 做声学与词法流的融合，声学侧常用 Wav2Vec2、emotion2vec 等自监督表示，融合常用注意力。本文的融合采用标准的双流交叉注意力并保持固定，以便把变量隔离到时序主干。

连续性方面，效价-唤醒环状模型把情绪表示为连续坐标，标签分布学习把 one-hot 改成分布，语音领域还有基于标注者分歧的软标签与贝叶斯不确定性工作，如对每条话语的类别投票分布建模或对效价与唤醒分别预测方差。音乐情绪的 V-A 平面分布预测是本文在输出空间上最接近的先例。

本文的区别在于输出空间本身就是联合的 2 维网格上的单一 softmax 分布，用高斯软目标训练，宽度由标注离散度先验设定，能够在同一矩阵中放置多峰质量，而此前语音工作或是软化离散类别，或是两个独立的 1 维回归方差。状态空间模型方面，Mamba 通过输入依赖的 B、C 与步长实现选择性，Mamba-2 改写为结构化矩阵乘法以利用张量核，Mamba-3 改进离散化与位置编码。已有 TF-Mamba 与 MaTAV 等情绪相关应用，但多在对话级或频域维度展开，本文仅将其作为话语级文本+ 语音流水线中的时序主干，并在匹配深度宽度下对比。

评估协议是另一条对照线，IEMOCAP 上随机话语级 k 折会达到 78 到 80% WA，而说话人无关的留 1 会话可低至 70 到 75% UA，二者不可直接比较。本文全程采用留 1 会话并在内层旋转验证集，headline 指标只在未参与选型的测试会话上计算 1 次。

### 要解决的两个具体问题是什么？

第一个问题是表示问题。如何在不牺牲分类可比性的前提下，让识别器输出一个在 V-A 平面上有几何意义的分布，使得下游可以直接对分布做期望、熵与覆盖区计算，而不是先坍缩成类别再猜不确定性。

第二个问题是评估与归因问题。如何在固定编码器、融合与训练协议的前提下，公平地回答时序主干是否为 Transformer 或 Mamba 带来差异，以及分布头是否以可控代价提供额外信息。

形式化上，设话语 x 对应离散标签 y∈{0,1,2,3}与连续标注(v*,a*)∈[1,5]^2，模型需输出分类 logits 与矩阵 P∈R9×9，满足 Pij≥0 且求和为 1，训练时以 Q 为软目标约束 P，测试时以 UA、WA、Macro-F1 衡量分类，以 Pearson r、CCC、RMSE、MAE 衡量质心跟踪，以 ECE 与熵衡量校准与弥散。

约束是所有对比必须在同一说话人无关划分与同一流水线下进行，参数量差异需显式报告，不能把不同协议或不同前端的数字混为同条件胜负。

### 从一条话语到分布输出，流水线如何组织？

流水线按样本走一遍。文本流用冻结的 BERT 编码，语音流可在冻结 Wav2Vec2、约 1M 参数的可训练 3 层 1 维卷积与冻结 WavLM-Large 之间切换。两者各经线性投影 768 到 256 并做层归一化、GELU 与 dropout。

随后各自经过 6 层时序主干，候选为 Transformer 编码器或双向 Mamba，深度与宽度匹配。接着进入两层交叉注意力融合，文本先以音频为键值更新，音频再以已更新文本为键值更新，融合后对每条流做掩码感知均值池化并拼接得到话语向量 z。

最后由两个头读 z，分类头做四分类交叉熵，V-A 头经多层感知机输出 81 个 logits 并 softmax 重塑为 9×9 矩阵 P。训练时分类与分布联合优化，推理时同时得到类别与分布，分布的质心与熵可直接计算。整个流水线除被消融的组件外保持固定，优化器与调度对所有主干一致，仅对 Mamba 参数施加 3 倍学习率乘子以匹配其训练动态。

**Valence-Arousal 平面 × 标签分布学习：** Valence-Arousal 平面负责给出情绪的几何坐标系，横轴效价表示愉悦度、纵轴唤醒度表示激活度；标签分布学习负责把监督从单点硬标签改成在该平面上的概率分布。两者搭配的理由是情绪本身是分级且常混合的，单标签会丢掉几何邻近信息，而分布形式让模型可以在网格上同时给多个区域赋质量；组合后新增的作用是既保留可用于下游语言模型的归一化分布输出，又能通过质心读出连续坐标而无需额外回归损失。

### 时序主干与融合如何分工、掩码如何保证不变性？

时序主干负责模内沿时间的混合，融合负责模间对齐。连续时间状态空间由隐状态 h 驱动，形式为

\[h^{\prime}(t)=\mathbf{A}\,h(t)+\mathbf{B}\,x(t),\qquad y(t)=\mathbf{C}\,h(t).\]

离散化采用零阶保持，在步长 Δk 内假设输入恒定，积分得到闭式递推。离散参数为

\[\bar{\mathbf{A}}_{k}=\exp(\Delta_{k}\mathbf{A}),\quad\bar{\mathbf{B}}_{k}=(\Delta_{k}\mathbf{A})^{-1}\!\big(\exp(\Delta_{k}\mathbf{A})-\mathbf{I}\big)\,\Delta_{k}\mathbf{B},\]

递推与读出为

\[h_{k}=\bar{\mathbf{A}}_{k}\,h_{k-1}+\bar{\mathbf{B}}_{k}\,x_{k},\qquad y_{k}=\mathbf{C}_{k}\,h_{k}.\]

选择性体现在 Bk、Ck 与 Δk 均为输入 xk 的函数，使模型可按内容决定写入与遗忘速率，递推由硬件感知的并行扫描以 O(T) 实现，Mamba-2 则改写为分块矩阵乘以利用张量核。

双向块对同一序列做前向与后向 2 次扫描并拼接后经线性映射与残差合并，后向扫描需对有效前缀做填充感知反转 Rb，定义为

\[R_{b}(t)=\begin{cases}T_{b}-1-t,&t<T_{b},\\[2.0pt] t,&t\geq T_{b},\end{cases}\qquad R_{b}\circ R_{b}=\mathrm{id},\]

该映射为对合，先反转有效段再扫描再反转回原序，使前后向输出在时间步上对齐，填充位置在注意力与池化中均被掩码排除。

交叉注意力中每头做缩放点积注意力并对填充键加负无穷掩码，文本到音频与音频到文本两步顺序执行，复杂度为 O(TaTt)，由于文本长度上限 64，融合对音频长度线性。池化按有效掩码求平均，内部掩码统一用 True 表示有效，仅在调用 PyTorch 注意力前取反为 key_padding_mask，避免填充泄露。

**状态空间模型 Mamba × Transformer 自注意力：** 状态空间模型 Mamba 负责沿时间做输入依赖的选择性递推，以线性复杂度混合单模态时序；Transformer 自注意力负责通过成对点积做内容寻址的全局混合。搭配理由是本流水线把模内时序混合与模间对齐分工，长的音频时序适合线性递推，短的文本与音频对齐适合注意力；组合后在固定深度宽度下可公平对比二者在同一融合头下的准确率与实测延迟。

**交叉注意力融合 × 掩码感知均值池化：** 交叉注意力融合负责让文本以音频为键值、音频以已更新文本为键值做双向查询，实现模间信息交换；掩码感知均值池化负责把变长融合序列按有效帧掩码求平均得到定长话语向量。搭配原因是注意力阶段必须屏蔽填充键，而池化阶段必须不让填充参与分子分母，否则填充会污染表示；组合后得到对批次填充不变的融合向量 z，供分类头与 V-A 头共享。

### 软目标如何构造、损失如何加权、优化如何设置？

V-A 头的监督来自 2 维各向同性高斯软目标 Q，中心位于标注均值(v*,a*)，网格坐标为 1.0 到 5.0 步长 0.5 的 9 个点，宽度 σ 默认 0.5，超出 1 到 5 范围的 3 个标注被裁剪到网格边缘。Q 按指数归一化为分布，P 为预测分布，训练目标为

\[\mathbf{P}_{ij}=P(v=v_{i},\ a=a_{j}\mid x),\qquad\sum_{i,j}\mathbf{P}_{ij}=1,\]

其中 Pij=P(v=vi,a=aj|x) 且求和为 1，质心读出为 v^=∑vi Pij 与 a^=∑aj Pij，熵为 H(P)=-∑Pij ln Pij，最大 ln81 约 4.39 nats。

损失为(1-λ)CE+λKL(Q||P)，λ=0.3，CE 为按训练集逆频率加权的四分类交叉熵，KL 以 Q 为参考分布，梯度把 P 拉向 Q。σ 越小目标越尖锐，趋近 one-hot 时 KL 退化为网格上的硬交叉熵，σ 越大则迫使预测更平滑。几何感知的 Wasserstein 变体曾被实现但未采用，单独使用易坍缩到单格且种子不稳定，与 KL 叠加也未在 σ 扫频之外进一步锐化分布，因此保留 KL+CE。

优化采用 AdamW，基础学习率 1×10^-4、权重衰减 1×10^-4，Mamba 参数学习率乘 3、微调编码器乘 0.1、其余乘 1，梯度裁剪 1.0，余弦调度含 10% 线性预热，bf16 混合精度，训练 30 轮并以验证 UA 早停耐心 7 轮，音频截断 11 秒约 5% 话语受影响，文本截断 64 token，批内对 Wav2Vec2 路径固定填充到 11 秒以保证卷积特征确定性，raw-conv 路径则动态填充并按模型调整批量大小。

**KL 散度 × 交叉熵：** KL 散度负责把预测分布 P 拉向以标注坐标为中心的高斯软目标 Q，使最优解本身就是分布而非尖峰；交叉熵负责锚定四分类离散标签，保持与传统 SER 可比。搭配理由是前者提供几何平滑的分布监督，后者提供类别判别锚点；组合后以权重 λ=0.3 加权，既不损害分类准确率，又能稳定产出归一化 V-A 分布。

### 数据、划分、指标与统计如何保证可复述？

数据为 IEMOCAP 四分类，合并快乐与兴奋，约 5531 条话语跨 5 个会话，会话对应不同说话人对，天然支持说话人无关评估。评估协议为五折留 1 会话，外层测试为 Sf，内层验证为 S(f-1)mod5，训练用剩余 3 会话，早停与最优点选择仅看验证会话，headline 指标在测试会话上 1 次性计算。

聚合时报告五折均值与折间标准差，并对 3 种种子 42、1、2 取均值以反映运行间方差，另有独立 3 种种子复跑用于校核约 0.01 UA 的跨活动方差。主指标为对类别不平衡鲁棒的 UA 即每类召回均值，辅以 WA 总体准确率与 Macro-F1，连续读出报告 Pearson r、RMSE、MAE 与 Lin 的一致性相关系数 CCC，校准报告 10 等宽分箱的 ECE，弥散报告熵。

统计上对每折的种子均值做配对 t 检验，并枚举 5 个会话的 3125 种有放回自助重采样得到会话簇自助 95% 区间，显著性以双侧配对 t 与会话自助共同判定，等价性用 TOST 在±0.02 UA 内检验。硬件为单张 RTX 5090 32 GB，软件栈固定为 Python 3.12、PyTorch 2.9.1、transformers 5.8.0、mamba_ssm 2.3.2.post1，随机种子按折索引确定性设置。

下面第一张表提出比较问题：在严格 LOSO 下主系统与基线的差距是否稳健，以及更换前端是否改变结论。公平条件是同一流水线与同一划分，指标方向为 UA 越高越好。

| 条件 | 指标 | 基线 | 本方法 | 比较对象 |
| --- | --- | --- | --- | --- |
| LOSO 五折 raw-conv 长序列 | UA | Transformer 基线低 3.0 点 CI[1.0,4.7] | 73.0%±0.3 独立复跑 72.1% | WavLM-Large 76.6%±1.3 |
| 分布质心跟踪 | CCC | — | 0.66/0.66 r=0.69 | 类内效价 0.27 唤醒 0.52 |
| 软目标宽度 | 熵 | σ=0.5 时 3.40 nats | σ=0.25 时 2.97 nats | 冻结时 3.49→3.07 nats |

该表显示主系统在同一协议下显著超出 Transformer 基线，且前端替换带来进一步提升，但延迟与显存优势在该句长下未出现。代码与数据可用性方面，论文声明代码已发布于 GitHub 并在 Zenodo 归档，但本次提供的链接状态为暂时不可达，应表述为本次未能确认可达而非已公开可用。

### 主结果在两档时序长度下是否一致、分布质量如何？

先提出比较问题。在固定编码器、融合与训练协议下，Mamba 时序主干是否在短序列约 550 帧与长序列约 2750 帧两档上都优于 Transformer 融合基线，以及双头是否在不损失分类的前提下提供额外分布价值。公平条件是深度宽度匹配、仅替换时序主干或是否加入 V-A 头，指标方向为 UA 越高越好，ECE 与熵需结合解释。

下面第二张表整理 headline 与关键对照的逐字数值，单位与精度保留原文写法。

| 条件 | 指标 | 基线 | 本方法 | 比较对象 |
| --- | --- | --- | --- | --- |
| LOSO 五折 raw-conv 长序列 | UA | Transformer 融合基线被超出 3.0 点 95% CI[1.0,4.7] | 双头 73.0%±0.3 3 种子均值 | WavLM-Large 76.6%±1.3 |
| 分布质心跟踪 | CCC | — | 效价 0.66 唤醒 0.66 | 类内 0.27/0.52 |
| 软目标宽度影响 | 熵 | σ=0.5 时 3.40 nats 77% | σ=0.25 时 2.97 nats 68% | 冻结 3.49→3.07 nats |
| 辅助头形式 | UA 变化 | 标量回归 -0.007 | 双边际 -0.005 | 联合头为参考 |

表后解释主要收益与代价。收益是双头在长序列上以约 0.15M 额外参数实现 73.0%±0.3 UA，显著优于同流水线 Transformer 基线，且分布质心在汇合层面跟踪连续标注，类均值热图落在环状模型预期象限。代价是该优势包含分布头的系统级对比，非纯主干对比，且双向 Mamba 块比 Transformer 多约 2.6 到 3.2M 可训练参数，约 18 到 24% 容量增加。另一代价是分类器原始过自信，ECE 约 0.20，经每折验证集拟合的温度缩放约 2.7 后可修复至约 0.02 而不改变决策。

未胜出项是单头 Mamba 在短序列上仅小幅领先且未达双检验显著，长序列上单头领先 1.4 到 2.0 点但仅在会话自助上显著，配对 t 未过阈，说明小样本五折下方差与效应量相当。

**预测熵 × 校准误差 ECE：** 预测熵负责度量 9×9 分布的弥散程度，取值 0 到 ln81，越高表示质量越分散；校准误差 ECE 负责度量预测置信度与实证准确率的偏差。搭配理由是弥散不等于不可信，需要分别检验分布形状与置信度是否对齐；组合后可判断熵能否作为弃判或不确定性信号，以及是否需要温度缩放来修复过自信。

下面先导读图 2，该图展示测试集上按类别平均的预测 9×9 矩阵，4 个子图共享色条，需观察质量中心是否落在预期象限以及色条数值范围。

> **看图路径：** 1. 对比四个子图的质量中心是否落在对应象限：愤怒在低效价高唤醒、快乐在高效价高唤醒、悲伤在低效价低唤醒、中性在中心；2. 观察共享色条的数值范围，确认单格最大质量约 0.06 且分布呈平滑扩散而非单点尖峰；3. 核对样本量标注 n=1103/1636/1084/1708，理解这是五折 LOSO 测试集上的聚合均值

[![原论文 Fig. 2：Per-class mean of the predicted 9\\times 9 V–A matrix on the held-out LOSO test sessions…](https://arxiv.org/html/2609.05755v1/figures/va_classmean_heatmaps.png)](https://arxiv.org/html/2609.05755v1/figures/va_classmean_heatmaps.png)

*论文图 2。原论文 Fig. 2:：“Per-class mean of the predicted 9\times 9 V–A matrix on the held-out LOSO test sessions (mamba_dual_head, raw-conv encoder; representative seed of the three-seed replication;…”。*

该图为测试集上按类别平均的预测 9×9 矩阵，4 个子图共享色条，愤怒质量集中在低效价高唤醒左上、快乐集中在高效价高唤醒右上、悲伤集中在低唤醒中下、中性集中在中心，说明头已学到类别级几何。但这仅是类间几何，类内是否跟踪需看下一图。

下面导读图 3，该图横轴为标注均值、纵轴为预测质心，需对比实线斜率与虚线恒等线的偏离并读取左上角的 r 与 CCC。

> **看图路径：** 1. 横轴为标注均值、纵轴为分布质心预测，观察纵向条带反映标注离散支撑而非模型分位数；2. 对比实线回归斜率约 0.52 与虚线恒等线的偏离，理解有界网格上质心估计的收缩效应；3. 读取左上角标注的三种子均值 r=0.69 与 CCC=0.66，确认效价与唤醒在汇合层面的一致性

[![原论文 Fig. 3：Expected value (center of mass) of the predicted V–A matrix vs.](https://arxiv.org/html/2609.05755v1/figures/va_expectation_scatter.png)](https://arxiv.org/html/2609.05755v1/figures/va_expectation_scatter.png)

*论文图 3。原论文 Fig. 3:：“Expected value (center of mass) of the predicted V–A matrix vs.”。*

该图横轴为标注均值、纵轴为预测质心，左右分别为效价与唤醒，点为代表种子，标注为 3 种子均值，实线斜率约 0.52、虚线为恒等线，纵向条带反映标注离散支撑，收缩斜率是有界网格上质心估计的预期现象，汇合相关 0.69 与 CCC 0.66 主要由类间分离贡献。

### 消融与反证：宽度、前端与替代头是否改变结论？

本节按问题组织。第一问是软目标宽度是否为可控旋钮。对比 σ=0.5 与 0.25 在冻结与微调两档编码器下，熵从 3.40 降至 2.97 nats、冻结时从 3.49 降至 3.07 nats，而 UA 保持在种子与折间标准差约 0.03 内无显著变化，且扩展到 0.125 与 1.0 仍在同一方差带内，说明 σ 是锐度控制而非准确率杠杆。

第二问是前端是否为瓶颈。把约 1M 可训练卷积前端替换为冻结 WavLM-Large 的 25 层加权和，同一后端在 LOSO 上从 73.0%±0.3 升至 76.6%±0.3，提升 0.036 且 CCC 从 0.661 升至 0.743 与 0.701，说明在该规模下表示瓶颈在前端而非主干或头。

第三问是分布形式是否必要。把 9×9 头换成标量回归或两个 9 路边际头，分类变化分别为 -0.007 与 -0.005 且在 TOST 等价带内，但连续跟踪上回归头 CCC 达 0.687 与 0.678、边际头 0.673 与 0.675，均略高于联合头的 0.661，说明分类提升来自 V-A 辅助监督本身，联合分布的价值在于提供归一化联合 pmf 与覆盖区而非点估计精度。

下面第三张表汇总这些对照的逐字结果，比较条件为同一后端仅替换头或前端，指标方向为 UA 越高越好、CCC 越高越好。

| 条件 | 指标 | 基线 | 本方法 | 比较对象 |
| --- | --- | --- | --- | --- |
| 辅助头形式 同一后端 | UA 变化 | 标量回归 -0.007 [-0.019,+0.003] | 双边际 -0.005 [-0.016,+0.006] | 联合头为参考 分类等价 |
| 连续读出 | CCC | 联合头 0.661/0.661 | 标量回归 0.687/0.678 | 双边际 0.673/0.675 点跟踪更优 |
| 前端替换 | UA | raw-conv 双头 73.0%±0.3 | WavLM-Large 76.6%±1.3 提升 0.036 | CCC 同步提升至 0.743/0.701 |

表后补充代价与反例。代价是联合分布在 IEMOCAP 上近乎可分离，预测联合与边际外积的 KL 均值仅 0.016 nats，说明当前语料与单峰高斯目标下未充分利用联合建模能力。反例是高熵样本的质量虽可跨区弥散且跨越真假类别边界，但熵与是否分类正确几乎重叠，正确与错误中位数分别为 3.48 与 3.54 nats，熵对正确性与维度离散度的区分力弱，仅与类别投票熵有约 0.07 到 0.09 的弱正相关且需控制网格边缘距离。

下面导读图 5，该图展示 4 条高熵测试话语的预测矩阵，需查看标题给出的 H 约 4.1 nats 并观察质量是否跨越类别边界分散。

> **看图路径：** 1. 查看每格标题给出的 H 约 4.1 nats，接近最大值 ln81=4.39，确认这是高熵样本；2. 观察质量是否跨越真实与预测类别边界分散，而非集中在单一格子；3. 对比四个样本的预测错误情况，理解高熵不必然对应分类错误

[![原论文 Fig. 5：Predicted 9\\times 9 V–A matrices for four of the highest-entropy (H\\!\\approx\\!4.1 nats; max \\ln…](https://arxiv.org/html/2609.05755v1/figures/va_examples.png)](https://arxiv.org/html/2609.05755v1/figures/va_examples.png)

*论文图 5。原论文 Fig. 5:：“Predicted 9\times 9 V–A matrices for four of the highest-entropy (H\!\approx\!4.1 nats; max \ln 81\!=\!4.39) test utterances (mamba_dual_head, raw-conv encoder).”。*

该图展示 4 条高熵测试话语的预测矩阵，标题给出真值与预测类别及 H 约 4.1 nats，质量分散在多个 V-A 区域并横跨类别边界，说明网格头能表示多峰弥散而硬分类器不能，但弥散本身不等于可校准的不确定性。

下面导读图 6，该图为可靠性图，需判断左图柱状是否位于对角线下方以及右图经温度缩放后是否贴近对角线。

> **看图路径：** 1. 左图原始可靠性柱状是否系统性位于对角线下方，判断过自信程度；2. 右图经验证集拟合温度缩放后柱状是否贴近对角线，确认 ECE 从 0.20 降至 0.02；3. 核对横轴为预测置信度、纵轴为实证准确率，理解校准不改变 argmax 决策

[![原论文 Fig. 6：Reliability diagram on the pooled LOSO test sessions (three seeds pooled; ECE annotations are…](https://arxiv.org/html/2609.05755v1/figures/va_calibration.png)](https://arxiv.org/html/2609.05755v1/figures/va_calibration.png)

*论文图 6。原论文 Fig. 6:：“Reliability diagram on the pooled LOSO test sessions (three seeds pooled; ECE annotations are three-seed mean±std).”。*

该图左右分别为原始与温度缩放后的可靠性图，横轴预测置信度、纵轴实证准确率，左图柱状系统性低于对角线且 ECE 约 0.20，右图经验证集拟合温度后贴近对角线且 ECE 约 0.02，说明过自信可后验修复但熵本身仍难作弃判信号。

### 哪些结论不能外推、哪些是已验证的阴性结果？

限制需前置。软目标是研究者设定的各向同性高斯先验，宽度对所有话语相同且中心为标注均值，未使用每条话语的标注者分歧，因此弥散不能直接解读为已校准的标注不确定性。网格有界导致边缘目标被截断，熵与到边缘距离相关，跨类别熵比较需控制该混淆。

实测上熵与维度离散度呈微弱负相关，会话自助区间在零附近，而与类别投票熵的偏相关仅约 0.07 到 0.09，效应量小于 1% 方差，说明分布的弥散仅携带微弱的类别歧义痕迹。另一限制是尺度假设，网格坐标、高斯宽度与 CCC 均把 SAM 量表的均值当区间尺度处理，若按序数尺度做单调重标，分类 UA 不变但高斯宽度与期望读出会改变，因此连续结果应在区间约定下理解。

下面第四张表聚焦未胜出与阴性结果，比较问题是哪些设计未带来额外收益，公平条件为同一流水线仅改变损失或宽度，指标方向为 UA 与 CCC 越高越好、熵与 ECE 需结合解释。

| 条件 | 指标 | 基线 | 本方法 | 比较对象 |
| --- | --- | --- | --- | --- |
| 几何感知损失 | UA | KL+CE 为参考 | Wasserstein 单独易坍缩 | 叠加未进一步锐化 |
| 各向异性宽度 | UA 变化 | 各向同性 σ=0.5 | σV=0.31 σA=0.44 -0.002 | CCC 0.668/0.665 无提升 |
| 投票混合目标 | UA | 0.728±0.007 | 保持 UA | 唤醒 CCC 0.609 下降 |

该表说明几何感知 Wasserstein 损失单独或叠加均未超越 KL+CE，各向异性宽度按实测 0.31 与 0.44 设置未改变 UA 与 CCC，投票混合目标虽保持 UA 但使唤醒 CCC 从 0.661 降至 0.609。效率方面在 IEMOCAP 句长下 Transformer 因融合注意力在延迟与峰值显存上均最优，Mamba-1 在非 2 的幂长度附近出现慢核带，Mamba-3 在该短句、池化、说话人无关设定下未提供准确率或效率优势，且其 MIMO 变体在消费级 GPU 上因共享内存限制未参与训练，结论仅针对可训练的 SISO 变体。跨语料零样本从 IEMOCAP 到 MSP-IMPROV 仅 45.6% UA 且熵与歧义的弱关联消失，说明分布迁移在域差下不具鲁棒性。

### 复现需要固定哪些划分、掩码与超参数？

复现先固定划分与掩码。五折留 1 会话，外层测试与内层验证按会话旋转，早停与选点仅看验证 UA，headline 只在测试会话上计算 1 次。文本用冻结 BERT，语音默认冻结 Wav2Vec2 约 95M 与 BERT 约 110M 均冻结，仅训练投影、时序主干、融合与头，长序列档用 3 层卷积前端通道 512 到 256 到 512、核 8/4/4、步长 4/4/4、掩码 GroupNorm 与 GELU，帧步长 64 对应 250 fps，11 秒约 2750 帧。

掩码按卷积输出长度公式逐层计算有效帧数，Wav2Vec2 路径则用编码器自带的输出长度函数，批次对 Wav2Vec2 固定填充到 11 秒以避免组归一化受批次最长话语影响，raw-conv 路径动态填充但需按模型调小批量以适配显存。

超参数按原文固定：共享宽度 256、每模态 6 层时序主干、2 层交叉注意力 8 头、dropout 0.3、AdamW 基础学习率 1×10^-4 与权重衰减 1×10^-4、Mamba 参数学习率乘 3、梯度裁剪 1.0、余弦调度含 10% 预热、bf16、30 轮、逆频率类别加权、V-A 网格 9×9 在 1 到 5 上、σ=0.5、λ=0.3。

统计复现需对每折先在种子内平均再做配对 t 与枚举 3125 种会话自助，报告 UA、WA、Macro-F1、CCC、ECE 与熵时同时给出种子与折间标准差。IEMOCAP 需自行从 USC 获取授权后按仓库脚本重建索引与划分。

### 何时值得尝试该分布头、还需补哪项验证？

综合判断是分布头以可控代价提供额外表示，但不自动带来效率或不确定性优势。值得尝试的场景是需要把情绪不确定性与几何邻近性暴露给下游的系统，例如把归一化 V-A 分布作为语言模型的软提示或需计算覆盖区与熵的辅助决策，且评估必须在说话人无关 LOSO 下进行。

若目标仅是提升分类 UA，标量回归或双边际等更简单的 V-A 辅助已能在误差带内复现提升，联合网格的增量在于输出形式而非额外准确率。若需更强准确率，优先升级前端表示，冻结 WavLM-Large 在同一后端上带来约 3.6 点提升，远大于主干差异。

还需补的验证包括在 MSP-IMPROV 与 MSP-Podcast 等带 V-A 标注的语料上做带训练的跨语料归一化与 Dominance 丢弃后的联合评估、对网格分辨率与 σ 的联合扫频、以及把分布本身作为主决策头的自蒸馏。同时需在更长对话音频上检验线性递推的延迟优势是否在 T 约 8192 附近显现，并对验证集拟合的温度缩放做跨域稳定性检验。

部署前还需按高风险情绪识别的治理要求落实知情同意、数据保护与人口学差异监测，本文已观察到唤醒跟踪在性别间存在差异，需在监测中持续跟踪。

<details>
<summary>📎 论文与评分元数据</summary>

排名：前50% | 文档类型：方法研究 | [arXiv 原文](https://arxiv.org/abs/2609.05755)

</details>

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。

- 评分规则：type-aware-v1

- 评分模型：muse-spark-1.2-contributor

- 评分请求协议：openai_responses

---

[← 返回 2026-09-10 语音/音乐/音频论文速递](/audio-paper-digest-blog/posts/2026-09-10/)
