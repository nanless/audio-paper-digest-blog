---
title: "DNSMOS-C: Improving End-to-end Speech Quality Models via Contrastive Learning"
date: 2026-09-27
draft: false
description: "针对无参考语音质量预测在未见失真下泛化弱的问题，DNSMOS-C 在 DNSMOS Pro 上把 SCOREQ 三元组对比损失直接加到 64 维编码器嵌入上做单阶段联合训练，域内相关系数和跨 NISQA 子集泛化多数提升，且 PCA 显示质量排序增强，代价是失真类型可分性略降且推理与 DNSMOS Pro 相同。"
tags: ["CNN", "对比学习", "端到端学习", "鲁棒性", "语音质量评估"]
categories: ["interspeech-2026 论文"]
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_paper_id: "conference:interspeech:2026:conference-paper-id:liang26_interspeech"
paper_digest_source_kind: conference
paper_digest_conference_id: "interspeech-2026"
paper_digest_conference_record_url: "https://www.isca-archive.org/interspeech_2026/liang26_interspeech.html"
paper_digest_conference_pdf_url: "https://www.isca-archive.org/interspeech_2026/liang26_interspeech.pdf"
paper_digest_api_reader_contract: "beginner-researcher-v3"
paper_digest_api_reader_article_sha256: "937b224a4cff7938d4ef7930c26321a6738bc85560ca2efb4d1e6f43ddfb663d"
paper_digest_api_reader_plan_sha256: "b6133436eff1b0a0a623c7dc988da4e27076b5120b86eaba7dcf14611df6e37b"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings-v4"
paper_digest_api_reader_source_bindings_sha256: "3afb333a00a9b315eeb7095e1f945a186760cc8523dec23bc8f3a3489f22439a"
paper_digest_api_reader_source_table_count: 3
paper_digest_api_reader_source_formula_count: 0
paper_digest_api_reader_structured_artifacts_sha256: "386200f8580b6469c22cf5a013b0db4aa7df9ea5671e32da7cbbea4fa19ad66f"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity-v1"
paper_digest_api_reader_author_identity_sha256: "f551b3f36b75ad935d8d0ba5d1dc78062eeafa6e8e39e8b0791749b10e067a73"
paper_digest_api_reader_author_count: 6
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity-v1"
paper_digest_api_reader_resource_identity_sha256: "60d045d8deb34c2ee1106129a64f7e27365b8c5def68701005ef8df4ee59d852"
paper_digest_api_reader_resource_count: 0
paper_digest_api_reader_decision_projection: "api-reader-decision-projection-v2"
paper_digest_scoring_contract: "api-scoring-audit-v2"
paper_digest_taxonomy_contract: "paper-taxonomy-flat-tags-compat-v1"
paper_digest_taxonomy_selection_contract: "paper-taxonomy-selection-v1"
paper_digest_taxonomy_registry_version: "paper-taxonomy-v1"
paper_digest_taxonomy_registry_sha256: "15c82a567ce5a55dc1175684ed08b64c158558639d9c8fb822c9587ec32a8778"
paper_digest_taxonomy_concepts: [{"facet":"method","id":"method.cnn","label":"CNN"},{"facet":"method","id":"method.contrastive","label":"对比学习"},{"facet":"method","id":"method.end-to-end-learning","label":"端到端学习"},{"facet":"research_focus","id":"research_focus.robustness","label":"鲁棒性"},{"facet":"task","id":"task.speech-quality","label":"语音质量评估"}]
paper_digest_primary_task: "语音质量评估"
paper_digest_primary_method: "对比学习"
paper_digest_score: 6.1
paper_digest_rank_bucket: "前50%"
paper_digest_document_type: "方法研究"
paper_digest_conference_structure: pdf-visual-quote-evidence-v1
---

# 📄 小模型也要排好队形：DNSMOS-C 用质量引导的三元组让隐空间按 MOS 排序

> 英文题目：*DNSMOS-C: Improving End-to-end Speech Quality Models via Contrastive Learning*

> 会议身份：`conference:interspeech:2026:conference-paper-id:liang26_interspeech`



> 来源为官方会议 PDF；图片依据原页像素，表格数字依据原文引用。PDF 文字层不视为原始 TeX，未可靠恢复的结构不作推断。


> 会议来源：[官方记录](https://www.isca-archive.org/interspeech_2026/liang26_interspeech.html) · [官方 PDF](https://www.isca-archive.org/interspeech_2026/liang26_interspeech.pdf)

标签：#CNN #对比学习 #端到端学习 #鲁棒性 #语音质量评估

评分：**6.1/10** | 创新 1.2/2 | 技术严谨 1.0/1.5 | 实验充分 1.0/1.5 | 清晰度 0.8/1 | 影响力 0.8/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 1.0/1.5

排名：前50% | 文档类型：方法研究

## 👥 作者与机构

- Xinyu Liang：机构信息未能从会议 PDF 纯文本可靠映射
- Fredrik Cumlin：机构信息未能从会议 PDF 纯文本可靠映射
- Victor Ungureanu：机构信息未能从会议 PDF 纯文本可靠映射
- Chandan K. A. Reddy：机构信息未能从会议 PDF 纯文本可靠映射
- Christian Schüldt：机构信息未能从会议 PDF 纯文本可靠映射
- Saikat Chatterjee：机构信息未能从会议 PDF 纯文本可靠映射

## 📌 核心摘要

非侵入式语音质量评估以单段退化语音为输入，直接预测平均意见分而无需干净参考，实际难点在于轻量卷积模型易过拟合训练域失真，在未见语言与录制条件下泛化下降。该方法先将16kHz语音的对数幅度谱送入四层卷积加全局最大池化编码器压缩为64维嵌入，其输出进入回归头进行质量映射。回归头同时预测高斯后验均值与方差并以均值作为质量分，训练时以高斯负对数似然约束分布拟合，同时在嵌入上施加MOS引导的三元组对比约束使质量相近者靠近、差异者远离。相对SCOREQ依赖大规模自监督编码器与先对比预训练再拟合回归的两阶段流程，本文差异在于单阶段联合优化对比损失与似然损失且推理结构与DNSMOS Pro完全同构，因而无额外部署负担并更利于稳定学习质量序结构。在NISQA TRAIN SIM训练并在NISQA TEST FOR评测时，线性相关系数（linear correlation coefficient，LCC）从0.763提升至0.787；在BVCC域内斯皮尔曼秩相关系数（Spearman rank correlation coefficient，SRCC）从0.788提升至0.801。该结论限于合成失真与英语、中文、德语有限跨域验证，未覆盖生成式语音与大规模真实通话外推。该适用边界之外的大规模真实通话与生成式语音场景尚未验证。原文未披露训练、推理或部署成本。

## 🔗 开源与复现资源

本次未形成可展示的已核验资源记录，开放状态尚未核实。
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 为什么自动打分难？先讲清输入输出与金标准

这篇论文研究的是无参考语音质量评估，也就是输入只有一段可能退化的语音，不给干净参考，要输出一个预测分去逼近人的平均打分。初学者可以这样理解任务依赖：先有语音信号，再有人听完打分取平均得到平均意见分，最后才有机器学习模型去拟合这个平均值。平均意见分英文是 Mean Opinion Score，缩写为 MOS，它是金标准但收集起来耗时贵且难扩展。无参考英文是 non-intrusive 或 no-reference，意思是预测时看不到原始干净语音，这比有参考更难，因为模型必须自己从噪声、混响、编解码损伤、合成痕迹里推断听感。

论文的起点是两条路线已经分化。一条是用大规模自监督学习表示或多模态大语言模型做质量预测，英文是 self-supervised learning，缩写为 SSL，以及 large language models，缩写为 LLMs，这条路线精度高但参数大、内存和计算重，不适合实时或资源受限部署。另一条是紧凑端到端卷积模型，代表是 DNSMOS 及其后继 DNSMOS Pro，它们把循环模块换成全局池化，效率高，适合 VoIP 等实时场景。但原文指出这类小模型仍有一个明显短板，就是对未见失真或录音条件的泛化能力仍然有限。也就是说在训练分布内拟合得不错，换个语言、环境、说话人或失真类型就掉点。

**平均意见分 × 无参考语音质量评估：** 平均意见分是多人主观打分的平均值，负责给出语音好坏的金标准；无参考语音质量评估负责在没有干净参考信号时只看退化语音就预测这个分数。二者搭配的原因是主观分贵而慢，客观模型要学会模仿它，组合意义是把人的听感变成可自动回归的目标。

本文的目标不是把模型做大，而是保持 DNSMOS Pro 的简单高效，同时让隐空间按感知质量排得更整齐。做法是引入 MOS 引导的三元组对比损失，英文是 triplet-based contrastive loss，直接作用在中间嵌入上。直觉例子是教学例子：假设 3 段语音的 MOS 分别是 2.0、2.2 和 4.5，那么前两者应被拉近，第三者应被推远，这与分类里的同类靠近不同，这里靠近程度由 MOS 差值连续决定。论文报告这种结构化带来了相关系数的稳定提升和跨域泛化改善，同时推理时与 DNSMOS Pro 完全相同，没有额外计算负担。需要保留的关键信息是：输入是对数幅度谱，输出是高斯分布的均值与方差，预测 MOS 取均值，方差可作不确定性参考。

### 同输入同目标下有哪些路线？为什么不直接用大模型？

按同输入、同目标、同监督、同运行阶段来对照，相关工作可分成 3 组。第一组是传统 MOSNet、LDNet、NISQA 等端到端卷积加回归模型，输入同样是退化语音谱，目标同样是预测 MOS，监督同样是 MOS 标签，运行阶段同样是单模型推理。它们的优点是轻量，缺点是隐空间主要靠回归损失塑造，对排序关系约束弱，换域容易乱。第二组是基于 SSL 的大模型路线，例如用 wav2vec 类特征加回归头，或用听觉大语言模型做评估，输入相同但增加了大规模无标注预训练，目标仍是 MOS，运行阶段却重得多。

原文明确说这类方法依赖重参数 SSL 编码器和多阶段训练，限制了实时应用。第 3 组是 SCOREQ，它首次把三元组对比回归损失用于语音质量评估，提出连续质量流形的概念，英文是 quality manifold，意思是嵌入的前两个主成分能按 MOS 形成连续渐变，从而在未见数据集上泛化更好。但 SCOREQ 原文是多阶段流程，先训编码器和投影头学质量感知的嵌入，再单独拟合回归头，依然依赖 SSL。

DNSMOS-C 的位置是把第二组的精度思想和第 3 组的结构思想搬到第一组的轻量框架里。相同点是都用 MOS 监督，都做回归；不同点是 DNSMOS-C 不依赖预训练 SSL 特征，不做多阶段优化，而是在 DNSMOS Pro 内部单阶段联合学习表示与回归。原文还引用了另一条证据，即 DNSMOS 类模型的隐空间天然会聚类失真和噪声类型，以及三元组损失在音频美学评估中的效果，用来说明对比损失既可能增强质量排序，也可能改变失真可分性。

这种对照不是同条件胜负，而是运行预算不同的取舍：要实时部署就选小模型加结构约束，要极限精度且能接受大模型就选 SSL 路线。初学者不要把类别差异当成谁一定赢谁，关键看部署阶段是否允许大编码器。

### 问题如何形式化？回归目标到底在学什么分布？

论文把问题写成标准的回归加分布建模。数据集记为多对样本，每对包含语音片段和对应 MOS，片段记为输入，MOS 记为标签。模型要学一个回归函数，用参数表示，给定语音输出预测分。更进一步，前人工作发现显式建模后验分布有助于提升预测性能，后验分布英文是 posterior distribution，意思是给定语音时 MOS 取值的概率分布。DNSMOS-C 沿用 DNSMOS Pro 的假设，认为这个后验是高斯分布，英文是 Gaussian posterior，由网络同时预测均值和方差。均值对应预测的 MOS，方差对应不确定性，可用于下游质量控制和置信度判断。

训练目标因此有两层。第一层是最大似然，也就是让观测到的 MOS 标签在预测的高斯分布下概率最大，等价于最小化高斯负对数似然，英文是 Gaussian negative log-likelihood，缩写为 GNLL。它的计算直觉是：如果预测均值离标签远，惩罚大；如果预测方差给得不合理，也会被惩罚，从而学会何时该自信、何时该保守。第二层是对比结构目标，要求嵌入空间中质量相近的靠近、相差大的远离。

最终推理非常简单：给定一段语音，前向 1 次得到均值与方差，取均值作为预测 MOS。整个问题定义没有引入额外标注，监督来源只有 MOS 标签，三元组的正负关系也是从同一批次内 MOS 差值比较得出，不需要失真类型标签。

### 单样本走完全流程：从波形到均值方差与嵌入约束

沿着一个样本走一遍最清楚。输入是一段原始语音，先下采样到 16 千赫兹，再重复填充或裁剪到 10 秒，保证长度一致。然后计算对数幅度谱，窗长 20 毫秒、帧移 10 毫秒，幅度取对数并裁剪到负 7 到 7 区间。这个谱图进入编码器，编码器记为 fenc，包含 4 个卷积层加一个全局最大池化层，输出一个 64 维嵌入向量。嵌入再进入头部模块，记为 fhead，由 3 个全连接层加线性变换组成，输出两个数，分别变换成 MOS 均值与方差。

训练时均值方差走高斯负对数似然分支，嵌入同时走对比损失分支；推理时只走前者，与 DNSMOS Pro 完全一致。

下面这张架构图展示了编码器与头的具体堆叠以及两个损失的引出位置，阅读时先看主路径再看分支有助于理解单阶段联合的含义。图前导读已经说明主路径从卷积到池化再到全连接，分支在池化后分叉，一路进回归头算似然损失，一路直接算对比损失。

> **看图路径：** 1. 从顶部四层卷积块向下追踪到全局最大池化，确认 64 维嵌入的出口位置；2. 观察回归头三层全连接如何分叉输出均值变换与方差变换；3. 对比右侧直接从池化引出的对比分支与左侧回归分支的监督来源差异

[![原论文 Figure 1：Architecture for DNSMOS-C](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/interspeech-2026/d9eff1801e28/figure-2.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/interspeech-2026/d9eff1801e28/figure-2.png)

*论文图 2。原论文 Figure 1：“Architecture for DNSMOS-C”。*

从像素可见，顶部 4 个蓝色框是卷积块，前两块通道数为 32，后两块为 64，多数带批归一化、激活与丢弃，第二个块还带最大池化。中间是全局 2 维最大池化，输出即 64 维嵌入。红色部分是头部，两个 64 维全连接加一个 2 维全连接，再分叉成均值变换与方差变换，底部汇入似然损失，而从全局池化向右单独引出一条长箭头汇入对比损失。这种画法直接对应公式 6 的加权求和：总损失等于似然损失加权重乘对比损失，权重在实验中取 1。单阶段的含义是同一优化步同时最小化两者，而不是先对比预训练再回归微调。

### 对比分支如何组三元组？拉近推远的依据是什么？

对比分支的核心是 MOS 引导的三元组。白话解释三元组损失英文 triplet loss：每次取 3 个样本，分别叫锚点、正样本、负样本，要求锚点与正样本在嵌入空间的欧氏距离，比锚点与负样本的距离小至少一个间隔。正负由 MOS 差值决定，判据是锚点与正样本的标签绝对差小于锚点与负样本的标签绝对差。满足该不等式且互不相同的三元组才参与计算，损失取距离差加间隔的正部，间隔在本文实验设为 0。也就是说只要正样本对距离大于负样本对距离就产生惩罚，迫使模型调整编码器让质量相近的更近。

**DNSMOS Pro × SCOREQ 对比回归损失：** DNSMOS Pro 负责用轻量卷积编码器加全局池化和回归头高效预测 MOS 均值与方差；SCOREQ 对比回归损失负责按 MOS 差值组织三元组，让质量相近的嵌入靠近、相差大的远离。二者搭配是因为回归只管拟合数值不管隐空间形状，对比损失补上结构约束，组合后单阶段同时学表示与回归。

下图把采样与拉近推远画得很直观，适合对照文字理解监督来源完全来自 MOS 差值，不需要失真标签。图前需要先明确观察顺序：先看批次与 MOS 数轴，再看 3 路共享编码器，最后看底部箭头。

> **看图路径：** 1. 先看顶部批次与右侧 MOS 数轴上锚点与正负样本的标签距离关系；2. 再看三路共享编码器输出的嵌入向量如何分别被拉近与推远；3. 确认底部绿色拉近箭头与红色推远箭头对应的正负对

[![原论文 Figure 2：Illustration for SCOREQ loss in DNSMOS-C](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/interspeech-2026/d9eff1801e28/figure-1.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/interspeech-2026/d9eff1801e28/figure-1.png)

*论文图 1。原论文 Figure 2：“Illustration for SCOREQ loss in DNSMOS-C”。*

从像素可见，顶部橙色大框是批次，内含多个语音与 MOS 对，向下经采样箭头分成 3 路。右侧小数轴标出 MOS 刻度，正样本标签靠近锚点，负样本标签远离锚点，左侧公式写出绝对差比较条件。中间 3 路共享同一个编码器，分别输出嵌入向量，底部绿色箭头标注拉近，红色虚线箭头标注推远。这种设计与原 SCOREQ 的区别在于，原 SCOREQ 先训嵌入再训回归头，而这里直接在编码器输出上加约束，同时还在学均值方差，因此梯度同时来自回归与对比两条路径，共同更新编码器。

原文未报告三元组挖掘的更多细节如批次内全组合还是采样子集，也未报告是否对嵌入做归一化，复现时应先按最简单的批次内满足条件三元组求平均实现，并记录该缺项。

### 联合损失如何优化？超参数与模型选择按什么来？

训练目标是两个损失的加权和，总损失等于高斯负对数似然加权重 λ 乘对比损失。λ 负责平衡回归精度与结构约束，论文经验证集调参后在各训练数据集上都取 1。优化器用 Adam，学习率 10 的负 4 次方，1 阶矩衰减 0.9，2 阶矩衰减 0.999，训练 500 轮。模型选择依据验证集上线性相关系数最高者，英文是 linear correlation coefficient，缩写为 LCC，而不是验证损失最低者，这与最终评价看重排序一致。每个训练数据集各做 10 次独立训练，以评估随机初始化带来的波动，报告均值加标准差。

**高斯负对数似然 × 三元组间隔：** 高斯负对数似然负责让网络输出的均值逼近 MOS 标签、方差反映不确定性；三元组间隔负责要求负样本对距离比正样本对距离大出一个边界。搭配原因是前者管预测准确，后者管嵌入按质量排序，组合权重 λ 平衡两者，本文实验取 λ 为 1。

数据预处理与 DNSMOS Pro 完全相同，已在方法全景中交代，不再重复。需要强调的是参数更新范围：编码器与头部的参数都参与更新，没有冻结 SSL 之说，因为根本没有 SSL 编码器。梯度路径有两条，一条从似然损失经头部回传到编码器，一条从对比损失直接回传到编码器。推理时对比分支丢掉，只保留编码器加头部，与 DNSMOS Pro 计算量相同，因此论文称没有额外部署开销。

原文未报告批量大小、学习率衰减、早停耐心或梯度裁剪，复现时需先固定一个常用批量大小并记录，同时严格用验证集 LCC 选模型，避免用测试集选模型造成泄漏。资源声明方面，原文致谢提到计算由 Chalmers 资源支持，但未给出单次训练时长与显存占用，这部分待验证，不能承诺训练成本低。

### 在哪些数据上训与测？指标方向与聚合口径是什么？

训练用 3 个高质量 MOS 标注数据集的不同组合，分别是 BVCC、Tencent 和 NISQA 训练仿真集。BVCC 来自语音合成与语音转换系统，英文 5000 条左右规模，按 4974 训练、1066 验证、1066 测试划分，每条约 8 个打分。Tencent 是中文仿真失真数据，8000 训练、2000 验证、1563 测试，每条约 20 个打分。NISQA 训练仿真集是英文仿真失真，10000 训练、1250 验证、1250 测试，每条约 5 个打分。测试除上述三者的域内测试 split 外，还包括 NISQA 的 3 个未见 split：TEST FOR、TEST P501 和 TEST LIVETALK，分别对应不同口音、语言与真实录音，以及 TCD-VoIP、LibriAugmented1600 和 ESC50 用于隐空间分析。

其中 TCD-VoIP 含 5 种可控仿真失真并带 MOS，LibriAugmented1600 含 16 类损伤，ESC50 含 50 类环境噪声。原文表 1 汇总了用途、语言、样本数、每条打分数与音频来源，划分上 BVCC 与 NISQA 沿用 DNSMOS Pro 配置，Tencent 沿用前人设置。

评价指标有 3 个：均方误差英文 mean square error 缩写 MSE 越低越好，线性相关系数 LCC 越高越好，斯皮尔曼等级相关系数英文 Spearman rank correlation coefficient 缩写 SRCC 越高越好。隐空间分析还用主成分分析英文 principal component analysis 缩写 PCA 后的多重相关系数 R，以及聚类准确率。聚合口径是 10 次独立运行的均值加标准差，用于同时看性能与稳定性。跨域泛化实验固定用 NISQA 训练集训出的模型去测 3 个未见 NISQA 子集，以考察语言、录音环境与说话人偏移下的表现。初学者注意数值相同不代表指标相同，必须同时核对数据集、阶段、指标与聚合对象；百分点与相对百分比也不同，本文均为绝对指标值比较。

### 域内与跨域谁更好？相关系数与误差分别说明什么？

先提出比较问题：在相同数据划分与相同训练轮数下，增加对比损失是否在域内提升排序能力，又是否在未见 NISQA 子集上保持优势？公平条件是 DNSMOS Pro 与 DNSMOS-C 各训 10 次，同预处理、同优化器、同验证集选模型，指标方向为 MSE 越低越好、LCC 与 SRCC 越高越好。下表整理域内测试结果，列覆盖训练数据、模型、误差与两个相关系数，共 5 列，数值保留原文精度与波动。

| 训练数据 | 模型 | MSE 越低越好 | LCC 越高越好 | SRCC 越高越好 |
| --- | --- | --- | --- | --- |
| BVCC | DNSMOS Pro | 0.338 ± 0.035 | 0.791 ± 0.016 | 0.788 ± 0.017 |
| BVCC | DNSMOS-C | 0.315 ± 0.022 | 0.803 ± 0.011 | 0.801 ± 0.011 |
| NISQA SIM | DNSMOS Pro | 0.394 ± 0.076 | 0.866 ± 0.008 | 0.864 ± 0.006 |
| NISQA SIM | DNSMOS-C | 0.424 ± 0.068 | 0.868 ± 0.005 | 0.868 ± 0.004 |
| Tencent | DNSMOS Pro | 0.282 ± 0.046 | 0.917 ± 0.008 | 0.920 ± 0.007 |
| Tencent | DNSMOS-C | 0.259 ± 0.032 | 0.921 ± 0.005 | 0.925 ± 0.003 |

表后解释需要区分两种信息。相关系数上 DNSMOS-C 在 3 个训练集上一致更好，BVCC 上 LCC 从 0.791 到 0.803，SRCC 从 0.788 到 0.801，Tencent 上也有类似小幅提升，支持对比损失改善排序关系的判断。误差上则并非全胜，NISQA SIM 上 DNSMOS-C 的 MSE 为 0.424 反而高于基线的 0.394，这是一个未胜出项，说明均值拟合与排序可以分离，论文也表述为 MSE 相当而相关性持续增益。稳定性上 DNSMOS-C 在所有数据集的相关系数标准差更小，例如 BVCC 上从 0.016 降到 0.011，支持训练更稳定的解释，但总体趋势不等于每组每步都成立。

跨域部分用 NISQA 训练的模型测 3 个未见子集，问题是域偏移下谁掉得少。表格同样 5 列，保留原文数值。

| 测试数据 | 模型 | MSE 越低越好 | LCC 越高越好 | SRCC 越高越好 |
| --- | --- | --- | --- | --- |
| LIVETALK | DNSMOS Pro | 1.163 ± 0.165 | 0.535 ± 0.043 | 0.546 ± 0.040 |
| LIVETALK | DNSMOS-C | 1.234 ± 0.154 | 0.535 ± 0.025 | 0.547 ± 0.026 |
| TEST FOR | DNSMOS Pro | 0.657 ± 0.144 | 0.763 ± 0.026 | 0.758 ± 0.030 |
| TEST FOR | DNSMOS-C | 0.686 ± 0.135 | 0.787 ± 0.027 | 0.784 ± 0.026 |
| TEST P501 | DNSMOS Pro | 0.935 ± 0.208 | 0.820 ± 0.011 | 0.853 ± 0.010 |
| TEST P501 | DNSMOS-C | 0.994 ± 0.138 | 0.825 ± 0.024 | 0.859 ± 0.021 |

表后解释是跨域后两者都掉点，但 DNSMOS-C 在相关系数上更高或持平，FOR 上 LCC 从 0.763 到 0.787 提升较明显，P501 上从 0.820 到 0.825 小幅提升，LIVETALK 上持平。代价是 MSE 在 3 个未见集上都略高，说明绝对分值校准并未改善，改善的是相对排序。结合 PCA 图可进一步看机制，导读是先读相关系数框，再看颜色渐变与符号混杂。

> **看图路径：** 1. 先读左上角图例框中主成分与 MOS 的相关系数与多重相关系数；2. 再看横轴主成分与颜色条 MOS 从紫到黄的渐变是否同向；3. 对比左下角失真符号形状是否混杂，以判断质量优先于失真分离

[![原论文 Figure 3：Latent Space Analysis on TCD-VoIP.](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/interspeech-2026/d9eff1801e28/figure-3.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/interspeech-2026/d9eff1801e28/figure-3.png)

*论文图 3。原论文 Figure 3：“Latent Space Analysis on TCD-VoIP.”。*

从像素可见，该散点横轴为第一主成分，纵轴为第二主成分，颜色条从紫到黄表示 MOS 由低到高，符号形状表示失真类型。左上角标注第一主成分与 MOS 相关约 0.516，第二主成分约负 0.196，多重相关约 0.552，预测与标签相关约 0.706。颜色大体沿横轴渐变，黄色多在右侧，紫色偏左，支持第一主成分与 MOS 对齐的判断，而不同形状符号相互混杂，支持失真聚类变弱的判断。原文报告 DNSMOS-C 的多重相关更高，且该趋势在 10 次运行一致，显示质量排序增强。

### 隐空间真的按质量排了吗？失真可分性付出什么代价？

这一节按两个子问题组织：质量相关是否增强，以及失真与噪声聚类如何变化。方法是用未见 TCD-VoIP 做 PCA 质量相关，用 LibriAugmented1600 做 16 类损伤聚类，用 ESC50 做 50 类噪声聚类。公平条件是同一训练数据训出的两类模型各取 10 次运行的嵌入，用相同 PCA 与聚类流程比较。指标方向为多重相关 R 与预测标签 LCC 越高越好，聚类准确率越高越好。下表聚焦噪声聚类准确率以满足宽表要求，列为训练数据、测试数据、指标、基线与本方法。

| 训练数据 | 测试数据 | 指标 | DNSMOS Pro | DNSMOS-C |
| --- | --- | --- | --- | --- |
| BVCC | ESC50 | Acc 越高越好 | 41.7 ± 2.3 | 45.7 ± 2.1 |
| NISQA SIM | ESC50 | Acc 越高越好 | 48.0 ± 2.3 | 49.7 ± 1.3 |
| Tencent | ESC50 | Acc 越高越好 | 48.5 ± 2.3 | 50.3 ± 1.6 |

表后解释要同时讲收益与反例。收益是 ESC50 噪声分类准确率（%）在 3 个训练来源下都提升，例如 BVCC 训练时从 41.7 到 45.7，论文假设这是因为 NISQA 噪声特性本身与 MOS 相关，对比损失间接强化了与质量预测相关的噪声结构。但反例是 LibriAugmented1600 上的损伤分类准确率（%）略降，原文描述为轻微退化，BVCC 训练时从 80.4 降到 79.0，Tencent 训练时从 81.9 降到 79.5，NISQA 训练时从 85.9 降到 85.4。这正是预期的权衡：优化目标为感知质量而非失真可分性，因此失真簇变淡而质量渐变变浓。

**质量流形 × 失真类型聚类：** 质量流形指 PCA 前两主成分与 MOS 形成连续渐变，负责说明隐空间按听感排序；失真类型聚类指按 CHOP、CLIP 等失真或噪声类别分开，负责说明隐空间记住物理成因。二者搭配可检验对比学习是否把注意力从失真类别转到感知质量，本文发现前者增强而后者在失真上略降。

PCA 质量相关方面，原文报告 DNSMOS-C 的 R 更高，例如 BVCC 训练时从 0.19 到 0.36，NISQA 训练时从 0.40 到 0.51，Tencent 训练时从 0.45 到 0.49，同时 TCD-VoIP 上的预测 LCC 也略升。这些数字支持隐空间出现低维质量排序的解释，但属于有限解释而非因果证明，因为没有做去掉回归只留对比或反之的完整消融。原文也未报告 λ 取其他值或间隔非零时的敏感性，因此不能说 λ 为 1 必然最优，只能说在验证集调参后选了 1。初学者应把质量流形理解为可观察的组织趋势，而不是模型显式学了一个 1 维流形参数。

### 哪些边界没有测？哪些改善不能承诺？

先明确缺失证据不是技术错误，但决定了表达必须用可能与待验证。第一，MSE 并未一致改善，域内 NISQA SIM 与 3 个跨域集上 DNSMOS-C 的 MSE 都略高于基线，因此不能承诺绝对分值更准，只能说排序相关更好。第二，训练稳定性用 10 次运行的标准差变小来支持，但未做统计显著性检验，也未报告不同随机种子、不同硬件或不同批量大小下的方差，推广到所有小模型需谨慎。

第三，隐空间分析只用了 PCA 前两主成分与聚类准确率，没有测量误判率、校准误差、延迟或能耗，也没有在其他端到端架构上验证，因此论文结论中未来工作提出要换架构再测，这是诚实的边界。第四，超参数方面只报告 λ 为 1、间隔为 0、训练 500 轮与 Adam 设置，未报告三元组采样策略、批次大小、学习率调度与早停细节，复现时这些是具体缺项。

第五，资源状态方面，本次未发现来源绑定且完成验证的开源资源，不得声称代码、模型或数据已公开，原文脚注虽给出地址但本次未能确认可达，复现前需自行核对链接当前是否可用。总体上，相关性提升不等于因果改善，质量排序增强不等于失真信息无用，实际选用时要看下游更看重排序还是绝对分与失真诊断。

### 要复述与复现先做什么？保留哪些可执行细节？

复现先做三件事：数据与划分对齐、验证集选模型、10 次重复。数据上按表 1 的划分准备 BVCC、Tencent 与 NISQA 仿真集，注意 BVCC 英文合成、Tencent 中文仿真、NISQA 英文仿真的语言与失真差异，不要混用测试集做选择。预处理严格按原文：16 千赫兹采样，填充或裁剪到 10 秒，对数幅度谱窗长 20 毫秒、帧移 10 毫秒，取对数后裁剪到负 7 到 7。模型按架构图实现 4 层卷积加全局最大池化到 64 维，再接 3 层全连接输出 2 维并变换成均值方差；对比损失直接作用在池化后的 64 维嵌入上，用欧氏距离与间隔 0 实现，判据为标签绝对差比较。总损失为似然加 1 倍对比损失，优化器用 Adam 学习率 10 的负 4 次方，β 取 0.9 与 0.999，训 500 轮并按验证集 LCC 选最优。

评价时域内看 MSE、LCC、SRCC，跨域固定用 NISQA 训练模型测 FOR、P501 与 LIVETALK，隐空间用 TCD-VoIP 做 PCA 多重相关与预测相关，用 LibriAugmented1600 与 ESC50 做聚类准确率。记录每次运行的均值与标准差，不要只报最好 1 次。常见误解是把对比分支当成推理需要，实际上推理与 DNSMOS Pro 相同，对比分支只在训练出现；另一个误解是把聚类准确率下降当成失败，实际上论文明确这是质量优先带来的预期权衡。还需补的验证包括 λ 敏感性、间隔非零效果、不同批量与采样策略的影响，以及在其他轻量架构上的可迁移性，这些原文未报告，复现时应作为扩展实验补上。

### 何时值得尝试 DNSMOS-C？一句话收束与下一步

当部署预算只允许 DNSMOS Pro 量级的小模型，又希望在未见语言、环境与失真下排序更稳时，值得尝试这种 MOS 引导的三元组约束，因为它不改推理图，只在训练多加一个嵌入结构项。复述方法的关键链条是：谱输入到 64 维嵌入，到均值方差回归，再加 MOS 差值决定的拉近推远，权重取 1 单阶段联合优化，验证集 LCC 选模型。最强证据是 3 个训练集上相关系数一致提升与跨 NISQA 子集多数更高或持平，以及 PCA 多重相关从低到高的系统性抬升；主要代价是 MSE 未改善与失真类型可分性略降。

下一步应补 λ 与间隔的敏感性分析、统计检验、训练与推理成本实测，以及换架构验证，才能把可能变为确定。回到起点，这篇工作的教学价值在于展示了小模型不靠变大也能通过排好隐空间获得泛化，理解拉近推远的依据是 MOS 差值而非类别标签，就抓住了全文的中心矛盾。

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。
- 评分规则：type-aware-v1
- 评分模型：muse-spark-1.3-contributor
- 评分请求协议：openai_responses

---

[← 返回 interspeech-2026 论文汇总](/posts/conference-interspeech-2026/)
