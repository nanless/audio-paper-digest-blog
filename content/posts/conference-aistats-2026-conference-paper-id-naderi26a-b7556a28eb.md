---
title: "From Token Imbalance to Balanced Routing: An ELBO-Regularized Probabilistic Framework for Contrastive Multimodal Learning"
date: 2026-09-11
draft: false
description: "针对声谱图切块后音频 token 远多于文本导致专家坍缩的问题，CoPRIME 用共享 Transformer 加稀疏 MoE 做音频文本对比对齐，并以 ELBO 促进专家解释所分 token、以熵型辅助损失维持灵活均衡，在 MOSEI 与 IEMOCAP 的零样本和少样本评测中报告了优于稠密基线和 LIMoE 型变体的精度，代价是引入 ELBO 加四个辅助损失共两个权重的联合目标与调参负担。"
tags: ["对比学习", "混合专家模型", "多模态学习", "语音情感识别"]
categories: ["aistats-2026 论文"]
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_paper_id: "conference:aistats:2026:conference-paper-id:naderi26a"
paper_digest_source_kind: conference
paper_digest_conference_id: "aistats-2026"
paper_digest_conference_record_url: "https://proceedings.mlr.press/v300/naderi26a.html"
paper_digest_conference_pdf_url: "https://raw.githubusercontent.com/mlresearch/v300/main/assets/naderi26a/naderi26a.pdf"
paper_digest_api_reader_contract: "beginner-researcher-v3"
paper_digest_api_reader_article_sha256: "6fae8a797bcbb2d5f8743142a063e9902bc63924ec7400fd9e6eab4b935fa3e7"
paper_digest_api_reader_plan_sha256: "f08ce6a805c1751ef7cf525217aaa2c4056da921c116e1fce62b4906a28b4c11"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings-v4"
paper_digest_api_reader_source_bindings_sha256: "625a3abcefa0e7b9c0b6d86b38480f19c0c923e0ada92f4854cf99c451fb6d45"
paper_digest_api_reader_source_table_count: 4
paper_digest_api_reader_source_formula_count: 0
paper_digest_api_reader_structured_artifacts_sha256: "6c64e71dd30b4eeefadebe1dec6de973b65f17a4569ba77e9920a52a758634ab"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity-v1"
paper_digest_api_reader_author_identity_sha256: "a81cd11fa95d301219f74a0a68bc4a12d55858f8f22cf8e3a72e74711d74c0f7"
paper_digest_api_reader_author_count: 3
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity-v1"
paper_digest_api_reader_resource_identity_sha256: "fba7ccffc202f38c18bb291b9e24924bd12058a72f07c62c4bdb94b4e7d7947f"
paper_digest_api_reader_resource_count: 1
paper_digest_api_reader_decision_projection: "api-reader-decision-projection-v2"
paper_digest_scoring_contract: "api-scoring-audit-v2"
paper_digest_taxonomy_contract: "paper-taxonomy-flat-tags-compat-v1"
paper_digest_taxonomy_selection_contract: "paper-taxonomy-selection-v1"
paper_digest_taxonomy_registry_version: "paper-taxonomy-v1"
paper_digest_taxonomy_registry_sha256: "15c82a567ce5a55dc1175684ed08b64c158558639d9c8fb822c9587ec32a8778"
paper_digest_taxonomy_concepts: [{"facet":"method","id":"method.contrastive","label":"对比学习"},{"facet":"method","id":"method.moe","label":"混合专家模型"},{"facet":"method","id":"method.multimodal-learning","label":"多模态学习"},{"facet":"task","id":"task.emotion-recognition","label":"语音情感识别"}]
paper_digest_primary_task: "语音情感识别"
paper_digest_primary_method: "混合专家模型"
paper_digest_score: 7.0
paper_digest_rank_bucket: "前50%"
paper_digest_document_type: "方法研究"
paper_digest_conference_structure: replayable-pdf-layout-v1
---

# 📄 音频 token 远多于文本时，对比学习加稀疏路由如何保持稳定分工

> 英文题目：*From Token Imbalance to Balanced Routing: An ELBO-Regularized Probabilistic Framework for Contrastive Multimodal Learning*

> 会议身份：`conference:aistats:2026:conference-paper-id:naderi26a`


> ✅ 来源为官方会议 PDF；可重放的表格、公式文本与 Figure 像素已按 PDF 抽取结果绑定，未成功恢复的结构不作推断。

> 会议来源：[官方记录](https://proceedings.mlr.press/v300/naderi26a.html) · [官方 PDF](https://raw.githubusercontent.com/mlresearch/v300/main/assets/naderi26a/naderi26a.pdf)

标签：#对比学习 #混合专家模型 #多模态学习 #语音情感识别

评分：**7.0/10** | 创新 1.2/2 | 技术严谨 0.9/1.5 | 实验充分 1.0/1.5 | 清晰度 0.7/1 | 影响力 0.9/1.5 | 开源 1.2/1.5 | 可复现 0.3/0.5 | 工程/实践 0.8/1.5

排名：前50% | 文档类型：方法研究

## 👥 作者与机构

- Habibeh Naderi：机构信息未能从会议 PDF 纯文本可靠映射
- Behrouz Haji Soleimani：机构信息未能从会议 PDF 纯文本可靠映射
- Stan Matwin：机构信息未能从会议 PDF 纯文本可靠映射

## 📌 核心摘要

本文处理音频文本对比表征学习，输入为频谱块序列与子词序列，输出为可做零样本与少样本情感和情绪分类的对齐向量，难点是频谱分块带来约50:1的音频文本 token 数量比，远高于图文约12:1，且音频语义密度低，导致路由器丢弃少数派文本 token 而坍缩到少数专家。方法链分三步：先用频谱分块投影与句子分词将双模态映射到共享维度并拼接送入共享 Transformer，再用 Top-K 稀疏门控把每个 token 分给少数多层感知机专家并加权求和，最后用双向对比目标拉近配对音频文本，同时用证据下界与熵类辅助损失约束路由分布与专家拟合。与 LIMoE 的差异在于以均匀先验的散度项与原型高斯似然显式要求专家解释所分配 token 的特征几何，而非仅平衡流量，因此允许模态特化又防止少数派 token 被丢弃。在 LibriSpeech960 预训练后直接跨域评测的设置下，大型模型在 IEMOCAP 10样本情感准确率达到79.7%，高于同规模自实现 LIMoE 基线的78.33%；在 MOSEI 10样本情绪上为84.8%，高于 LIMoE 的83.06%。在 MOSEI 微调后再测 IEMOCAP 的域内设置下，10样本准确率为82.17%，接近直接监督训练的 CORECT 的84.7%。结论仅在 LibriSpeech 预训练加 MOSEI 与 IEMOCAP 评测上验证，未证明在大规模噪声语料或开放词汇检索上的外推能力。原文未披露训练、推理或部署成本。

## 🔗 开源与复现资源

- 代码相关资源：<https://github.com/hanadk/coprime> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 为什么音频文本对齐比图文对齐更难做？

本文输入是成对的音频与其转写文本，目标是学到跨模态可比的表示，使配对在共享隐空间更近、非配对更远，下游用情感与情绪识别检验迁移能力。必须保留的关键信息是：音频侧用声谱图的视觉变换器式切块编码，文本侧用常规子词编码，两者进入同一个共享编码器后做对比学习；挑战来自 token 数量失衡。白话说，切块就是把声谱图切成小方块再逐块变成向量，句子切分编码就是把一句话切成子词再变成向量。

英文名分别为 spectrogram patch tokenization 与 sentencepiece tokenization，后文分别简称音频切块与文本切词。补充材料报告的量级是图文约 12 比 1，而音频文本因声谱图切块可达约 50 比 1，这意味着多数模态在数量上压倒少数模态。数量压倒不等于语义更重要，原文明确指出在音频文本场景中文本往往承载更丰富信息，而 token 更少的文本反而是更重要的一侧，这与图文情形相反。初学者容易误以为 token 多就主导语义，本文的设定正好反过来，路由必须在数量劣势方仍保留表达能力。

**声谱图切块 × 句子切分编码：** 声谱图切块负责把连续语音变成可与文本并列的 token 序列，它先把波形转时频谱再按 P 乘 P 不重叠切块展平做线性投影；句子切分编码负责把文本变成同维度的 token 序列，它用 sentencepiece 切词再查表加线性投影。两者搭配的理由是：只有进入相同维度才能用同一个共享编码器联合处理，组合后新增的作用是省掉模态专用编码器或解码器，但也直接带来数量失衡，即音频侧 token 数天然远大于文本侧。

从一个样本走一遍有助于建立依赖关系。取一句朗读与其转写，例如文本为一个短句、音频为对应朗读波形。文本先被切成 It、was、a、beaut、iful、day 等子词，再映射为同维嵌入；音频先转声谱图再切成许多小块，每块展平后线性投影为同维嵌入。两类嵌入各自加上表示模态归属的标记 token，然后拼接后送入共享 Transformer。

共享编码器不按模态分别建模，而是让自注意力在两种 token 之间隐式交互，最后按模态分别做序列平均池化，得到音频向量与文本向量，再经各自线性投影后计算双向对比损失。这一路径说明后文所有路由与损失都发生在同一编码器内部，而不是先各自编码再融合。

### 已有路线在什么地方留下了缺口？

同输入同目标的直接前序是多模态对比学习与多模态稀疏混合专家。对比学习路线以 CLIP 为代表，证明大规模配对预训练可以带来零样本迁移与分布偏移鲁棒性；稀疏混合专家路线从稀疏门控、GShard、Switch Transformer 到视觉 MoE，核心是用路由器对每个 token 只激活少数专家，以近似恒定的计算成本扩大容量。LIMoE 是首个多模态 MoE，它发现多模态共用 MoE 会出现特有失效模式，并引入基于熵的正则来稳定训练。

CoPRIME 与 LIMoE 的可比条件是同为稀疏门控加对比对齐，但原文强调直接比较受限于官方代码缺失与模态数据集不同，因此作者自行实现了 LIMoE 型变体作为对照。同运行阶段的另一类对照是稠密 Transformer 基线，它保留相同块数与注意力头数但去掉 MoE 层，用于检验稀疏结构本身是否带来增益。教学例子是：把 LIMoE 理解为先解决图文 token 失衡与专家坍缩，而 CoPRIME 要解决的是更极端的音频文本失衡，不能把图文上的结论直接搬运。

原文没有把类别差异当成同条件胜负，而是把稠密基线、自实现 LIMoE 变体、外部语音与多模态分类模型放在各自适用位置，外部强基线只作为参考点而非同协议胜负。

### 极端 token 失衡具体造成什么路由问题？

问题可以拆成两层。第一层是数量失衡：即使音频块取到 32 乘 32，批量为 256 时音频 token 总量仍远大于文本 token，总高度几乎由音频决定。第二层是路由失衡：只约束门控权重总量的重要性损失会被多数模态蒙蔽，路由器可以把多数模态均匀分给专家以满足全局均衡，同时把少数模态全部丢给单个专家或直接丢弃，造成局部拥塞与训练不稳定。原文指出这种解在全局看似均衡，实则少数模态被牺牲。

另一个需要先于结论理解的概念是专家坍缩，即少数专家主导分配而其余专家被饿死。模态偏置会加剧坍缩，因为数量占优但语义未必占优的音频容易主导专家。因此本文把目标写成既要专家分工又要多样利用：分工要求专家能解释分给它的 token，多样要求专家分布不坍缩到均匀先验之外。这一表述直接对应后文 ELBO 的两项，理解了它才能理解为什么需要似然项加 KL 项，而不是只加熵约束。

### CoPRIME 的整体数据流是什么？

CoPRIME 的全称是 Contrastive Probabilistic Routing for IMbalanced tokens with ELBO-regularized mixture of experts，后文简称 CoPRIME。整体安排是统一编码器加稀疏专家层加对比目标。音频与文本嵌入拼接后，先经过共享稠密 Transformer 层，再交替或堆叠经过含路由器的 MoE 编码器层，每层中每个 token 只选 Top-K 个专家，输出按门控权重加权求和。最终按模态平均池化得到表示，再做双向对比。下面先给出架构图的导读，再呈现图标记，最后解释可见内容。

架构图从下向上阅读最顺。底部是原始波形与原始句子，中部是两种线性投影与模态标记拼接，向上是 Transformer 层与 MoE 层的堆叠，顶部是平均池化后的两个向量与对比矩阵。MoE 放大框显示了自注意力先输出 token 表示，路由器据此产生门控权重，再把不同颜色的 token 送往不同 MLP 专家，最后加权合并。顶部矩阵用对角勾与非对角叉表示配对拉近、非配对推远。

> **看图路径：** 1. 从底部左右两路输入出发，确认文本分支经过切词与线性投影、音频分支经过波形到声谱图再到切块投影；2. 向上追踪两路 token 在拼接加模态标记后如何进入共享 Transformer 层与 MoE 编码器层；3. 观察 MoE 放大框内路由器、自注意力与多个 MLP 专家之间的连线与加权求和关系；4. 最后确认顶部平均池化得到音频向量与文本向量后进入对比损失矩阵的对角匹配结构

![原论文 Figure 1：CoPRIME, a sparsely activated contrastive ELBO- regularized multimodal model.](/images/conference/aistats-2026/17dea799563c/figure-1.png)

*论文图 1。原论文 Figure 1：“CoPRIME, a sparsely activated contrastive ELBO- regularized multimodal model.”。*

从像素可见，左侧文本分支明确标出 Text Tokenization 与 Linear Projection，示例切词为 It、was、a、beaut、iful、day；右侧音频分支从波形到声谱图再到分块，最后标出 Linear Projection of Flattened Patches。中间拼接处用两种颜色的小方块表示两类 token 已进入同一序列。MoE 放大框内左侧有 Gating weights 柱状图，中间是 MLP 1 到 MLP N，颜色从蓝色到绿色渐变暗示从文本专用到音频专用再到多模态的连续分工，底部 Router 与 Self Attention 相连。顶部 Average Pool 后得到 Zt 与 Za，再向上进入 Contrastive Loss。这种颜色与箭头设计对应原文所说的模态专用专家与多模态专家并存的预期，而不是所有专家处理所有 token。

### 路由器与五个辅助损失各自算什么？

路由器是轻量线性加 softmax。对每个 token 向量 x，门控为 softmax 作用于可学习矩阵与 x 的乘积，得到 E 个专家的概率分布，再取权重最高的 K 个专家做加权求和。基础版 CoPRIME 每层 8 个专家取 Top-2，大版每层 16 个专家取 Top-4。专家本身是多层感知机。这一机制决定了计算稀疏性：容量随专家数增大，但每 token 只走少数专家。

**对比学习 × 稀疏混合专家：** 对比学习负责跨模态对齐，它把配对的音频和文本表示拉近、把非配对推远；稀疏混合专家负责按 token 动态分配计算，每个 token 只走 K 个专家。两者搭配的理由是：共享编码器先让两种 token 进入同一维度空间，对比目标给出对齐压力，而稀疏路由在保持计算量可控的同时保留按模态或语义分工的容量，组合后新增的作用是既学到可迁移的联合表示，又避免用一个稠密前馈网络同时拟合两种统计特性差异很大的序列。

辅助损失共有五项，承担不同职责。重要性损失统计每个专家在批量上的门控权重和，负载损失统计每个专家被 Top-K 选中的概率和，后者用带噪 softmax 与阈值的高斯近似实现可微。原文把传统变异系数形式改成熵形式，即最大化归一化重要性分布与负载分布的熵。白话说，变异系数是严厉要求人人均等，熵是鼓励均衡但允许适度分工。Z 损失惩罚路由器 logit 的对数配分函数的平方，防止 logit 过大导致过自信与数值不稳定。互信息损失按模态分别计算路由矩阵的局部熵与全局熵，局部要求单 token 果断，全局要求专家多样。

**证据下界损失 × 互信息损失：** 证据下界损失负责让专家解释数据，它用原型高斯刻画每个专家对本模态 token 嵌入的似然，并以均匀先验做 KL 正则；互信息损失负责约束路由分布，它用局部熵鼓励单 token 分配果断、用全局熵鼓励专家间多样。两者搭配的理由是：只平衡流量不能保证专家真正拟合数据流形，只要求拟合又容易坍缩到少数专家，组合后新增的作用是平衡的用量变得有意义，即流量分散的同时每个专家内部更紧致、专家之间更分离。

ELBO 损失是本文的核心增量。它把每个模态的 token 集合看成观测，把专家看成隐变量，用路由概率构造集合级后验，再要求该后验既能给出高似然又接近均匀先验。似然用每个专家维护的原型高斯实现，原型均值按软路由做指数滑动平均更新，方差为各向同性。直觉是专家不仅要分到 token，还要在嵌入空间真正把这些 token 包住，包不住就说明分工无效。KL 项则防止所有样本都坍缩到同一专家。原文用独立权重 lambda ELBO 控制 ELBO，用共享权重 lambda aux 控制其余四项，反映 ELBO 在分工与多样之间起主导作用。

**重要性损失 × 负载损失：** 重要性损失看门控权重的加和，它统计每个专家在批量上分到的权重总量；负载损失看被 Top-K 选中的概率，它用带噪 softmax 和高斯累积分布函数近似离散选中事件。两者搭配的理由是：只看权重总量会被多数模态蒙蔽，少数模态的 token 可以被整体丢弃而全局仍显得均衡，组合后新增的作用是从权重和选中概率两个角度同时约束路由，减少局部拥塞和训练不稳定。

最终目标是对比损失加 lambda ELBO 乘 ELBO 损失，再加 lambda aux 乘其余四项之和。原文强调音频文本中 token 更少的一侧反而语义更重要，因此不能用硬性均匀约束压住分工，熵形式与 ELBO 的组合正是为了在均衡与分工之间保留可调的帕累托前沿。

### 训练按什么顺序计算与更新？

训练流程按批量组织。每个批量取 n 对音频与转写，先分别编码并平均池化得到模态向量，再计算双向对比损失，即音频到文本与文本到音频 2 个方向的归一化相似度对数损失，温度系数 tau 控制分布锐度。同时在每个 MoE 层计算路由分布，累积重要性、负载、Z 损失与互信息损失，并按模态计算 ELBO 的似然项与 KL 项。所有损失按上述权重相加后反向传播。原文明确给出优化器为 AdamW，学习率与批量在所有实验中固定，ELBO 与辅助权重经网格搜索后固定为两组数值。

关于冻结与更新，原文只说明在域内迁移阶段先在 LibriSpeech 预训练再在 MOSEI 上全量微调，没有报告冻结某层或停止梯度的安排，因此不能从模型名称推定某部分冻结。关于梯度路径，负载损失的离散选中经高斯近似变得可微，ELBO 原型均值用滑动平均更新，这些是原文明确的实现；未给出的梯度细节不做猜测。补充材料还说明 ELBO 是无解码器的集合级目标，只增加可忽略的参数量，因此训练成本主要仍在 Transformer 与专家前馈部分。

### 在什么数据与协议下检验迁移？

评测围绕两个问题：跨域预训练表示能否直接迁移到情感任务，以及在情感域内微调后能否再迁移到另一个情感数据集。预训练用 LibriSpeech960，评测用 MOSEI 与 IEMOCAP。MOSEI 侧重多模态情绪与情感强度，本文取 6 类情绪与情感极性；IEMOCAP 为双人交互视听数据，本文取其情绪标注。两种协议分别是跨域迁移，即在 LibriSpeech 预训练后直接在 MOSEI 与 IEMOCAP 上做零样本与 10 样本评测，以及域内迁移，即先在 MOSEI 全量微调再到 IEMOCAP 上做零样本与 10 样本评测。选择 MOSEI 做微调的原因是它比 IEMOCAP 大得多，更适合大架构微调。

**零样本评测 × 少样本评测：** 零样本评测负责检验预训练表示在未见情感类别上的直接迁移，它用类原型相似度做判断；少样本评测负责检验少量标注下的可调性，它用线性探针在 10 个样本上学习分类。两者搭配的理由是：前者暴露跨域泛化能力，后者暴露表示是否包含可快速利用的判别信息，组合后新增的作用是把跨域预训练与域内微调的效果分开，避免把预训练域差异和情感判别能力混为一谈。

下表先回答数据规模是否支持上述协议。表中规模越大通常预训练与微调越充分，但规模差异也意味着跨域难度不同，因此不能只看绝对精度，还要看零样本与少样本的相对提升。表前已说明比较问题与公平条件，指标方向为精度与 F1 越高越好。

| 数据集 | 模态与标注 | 原文报告规模 | 在本文中的角色 | 规模含义 |
| --- | --- | --- | --- | --- |
| LibriSpeech960 | 英语语音加转写 | 约 960 hours | 预训练源域 | 大规模语音识别域 |
| MOSEI | 视频片段情感与情绪 | 超过 23,000 video clips | 跨域评测与域内微调源 | 大情感数据集 |
| IEMOCAP | 双人视听情绪 | 约 12 hours | 跨域与域内评测目标 | 小情感数据集 |

上表说明预训练域与评测域存在任务差异，前者偏语音识别，后者偏情绪识别，因此零样本本身就在检验分布外泛化。模型配置上基础版与大版在块数、头数、专家数、路由 Top-K、隐层与前馈维度、块大小上逐级增大，稠密基线去掉 MoE 但保持其余规模可比。优化与硬件条件整理如下，表中学习率越小通常越稳但收敛越慢，批量越大对比学习负样本越多，硬件决定可复现的成本下限。

| 配置项 | 取值 | 适用范围 | 来源说明 | 对复现的影响 |
| --- | --- | --- | --- | --- |
| 优化器与学习率 | AdamW 与 1e-4 | 全部实验 | 全文连续原句报告 | 需保持一致 |
| 批量大小 | 256 | 全部实验 | 全文连续原句报告 | 影响对比负样本数 |
| 损失权重 | 0.02 与 0.04 | 全部实验 | 分别对应辅助与 ELBO | 决定分工与均衡 trade-off |
| 计算硬件 | 单卡 96 GB VRAM | 全部实验 | 云端单卡报告 | 小架构可单卡复现 |

上表代价是权重经网格搜索得到，复现时若改批量或模型规模可能需要重搜。原文还报告代码当前可用，资源状态为 available，因此可写已公开，但权重下载与完整可运行状态需以仓库实际内容为准。

### 主结果在什么条件下成立？

主结果按跨域与域内两组协议组织。跨域组在 LibriSpeech 预训练后直接评测，域内组先在 MOSEI 微调再评 IEMOCAP。基线包括同规模稠密模型与自实现 LIMoE 型变体，保证参数规模与路由机制之外的条件尽量一致。指标为情绪与情感的准确率与 F1，方向均为越高越好。外部参考点包括 Hubert-large 在 IEMOCAP 情绪识别的精度，以及直接在 IEMOCAP 上监督训练的 CORECT 精度，它们训练协议不同，只能作为上下文，不能当成同条件胜负。

路由分布图先回答失衡是否真实存在。导读时把 6 个 MoE 块看成 6 组独立实验，每组 8 个专家，纵轴为 token 数，颜色区分模态。若音频远高于文本，则失衡成立；若文本在专家间高度集中，则少数模态的局部拥塞值得警惕。

> **看图路径：** 1. 先看六个 MoE 块各自横轴 1 到 8 专家编号与纵轴 token 数量的堆叠条形；2. 区分每根条形下方红色文本 token 段与上方绿色音频 token 段的高度比例；3. 比较不同块之间文本在专家间是否集中，例如后部块文本是否更偏向少数专家

![原论文 Figure 2：Token distribution on a batch of size 256 for CoPRIME-B/32 model with 6 MoE blocks each having 8…](/images/conference/aistats-2026/17dea799563c/figure-2.png)

*论文图 2。原论文 Figure 2：“Token distribution on a batch of size 256 for CoPRIME-B/32 model with 6 MoE blocks each having 8 experts. We can see the extreme token imbalance even with audio patches of 32x32.”。*

从像素可见，6 个块中每根专家条形的总高度都在约 28000 到 31000 之间，其中绿色音频段占据绝大部分，红色文本段只在底部占一小截，直接验证了即使块大小为 32 乘 32，音频仍远多于文本。进一步可见文本并非均匀分散：在后部块中专家 1 的红色段明显高于专家 6 到 8，说明出现了文本偏好专家，但各专家总高度仍大致均衡，符合原文所说的模态专用与多模态专家并存。不能从条形总高度相近就断言路由已完全健康，因为总量均衡可能掩盖少数模态的集中，这正是需要负载与 ELBO 联合约束的原因。

跨域与域内精度的关键数字如下。表中只收录原文连续原句中实际出现的数字，避免把不同指标混入同一列。比较问题是 CoPRIME 是否在可运行策略下优于同规模对照，公平条件是同预训练源与同零样本或 10 样本协议。

| 评测条件 | 指标 | 外部参考 | CoPRIME 报告 | 对照含义 |
| --- | --- | --- | --- | --- |
| IEMOCAP 情绪识别 | accuracy | 67.62% | 79.7% | 大版 10 样本显著高于语音基线 |
| MOSEI 情感 | sentiment accuracy | 未报告同协议 | 84.8% | 大版 10 样本高于稠密与 LIMoE |
| IEMOCAP 直接监督 | accuracy | 84.7% | 82.17% | 10 样本迁移接近直接监督 |
| IEMOCAP 域内迁移 | accuracy 与 F1 | 未报告同协议 | 82.17% 起 | 微调 MOSEI 平均提升约 2.6% |

上表主要收益是 10 样本明显高于零样本，且域内微调后再迁移平均提升约 2.6%，支持表示中包含可迁移的情感信息。具体代价是跨域零样本绝对值仍低于直接监督，且外部参考的训练数据与目标完全一致，不能据此宣称全面超越。未胜出项也需保留：原文消融显示负载损失对精度几乎无提升，甚至在 10 样本下略降，这说明均衡约束的价值主要在稳定与效率而非精度。

### 每个损失去掉后变化多少？

消融按 27 种组合的暴力搜索组织。5 个辅助损失中每个损失分别比较包含它的所有组合中的最优与不包含它的所有组合中的最优，验证精度为批量 256 下的平均对比精度，以及 MOSEI 零样本与 10 样本精度。问题是哪个损失是主要驱动，条件是同一批量与同一评测协议，指标方向为越高越好。敏感性分析则固定任务为 MOSEI 10 样本精度，扫描两个权重的对数网格。

先看权重敏感性热力图。导读时横轴为 ELBO 权重，纵轴为辅助权重，格内数字为精度，颜色越深精度越高。若中间出现宽广深色 plateau，则说明调参鲁棒；若边缘迅速变浅，则说明超出区间后收敛与稳定性下降。

> **看图路径：** 1. 确认横轴为 ELBO 权重、纵轴为辅助损失权重，格内数字为 MOSEI 少样本精度；2. 找到颜色最深的高精度 plateau 区域及其对应的横纵轴取值范围；3. 对比边缘小权重与大权重区域精度的下降幅度，判断调参敏感性

![原论文 Figure 3：Sensitivity analysis with respect to regularization parameters (MOSEI 10-shot accuracy).](/images/conference/aistats-2026/17dea799563c/figure-3.png)

*论文图 3。原论文 Figure 3：“Sensitivity analysis with respect to regularization parameters (MOSEI 10-shot accuracy).”。*

从像素可见，深色高精度集中在横轴约 0.02 到 0.04、纵轴约 0.01 到 0.02 的中间区域，最深格标注 70.72，周围 70.50 与 70.66 等次高值连成一片。边缘如横轴 0.002 或 0.16、纵轴 0.16 或 0.002 的格多为浅色，数值回落到约 69.48 到 69.70。原文据此报告在 lambda ELBO 约 0.02 到 0.08、lambda aux 约 0.005 到 0.04 的宽 plateau 内性能距最优在 1.3% 以内，之外则验证损失方差与梯度范数恶化。所选的 0.04 与 0.02 正落在精度与收敛速度的帕累托前沿上。

各损失的增益整理如下，表中数字均来自原文连续原句，避免为凑宽度引入无源列。

| 损失项 | 基线精度 | 加入后精度 | 任务条件 | 论文解释 |
| --- | --- | --- | --- | --- |
| 变异系数变体到熵型 | 64.4% | 64.6% | 验证对比精度 | 熵型更平滑灵活 |
| 熵型重要性与负载等 | 未单独报告 | 稳定收敛 | 少样本多组 | 累积改善稳定性 |
| ELBO | 平均低约 2.5% | 提升约 2.5% | 对比精度平均 | 主要驱动分工 |
| ELBO 单项 | 提升约 2.3% | 更高分离度 | 补充材料 | 簇内更紧簇间更开 |
| 权重 plateau | 最优差 1.3% 内 | 70.72 附近 | MOSEI 10 样本 | 区间外稳定性下降 |

上表显示 ELBO 是主要增益来源，熵型损失单项增益较小但与 ELBO 累积后改善利用率与收敛。反例是负载损失在部分 10 样本对比中从 69.8% 到 69.7% 略降，原文仍保留它，理由是它改善路由稳定、专家利用均衡与模态失衡下的训练动态，而非直接提升精度。复现时若只看精度会低估负载损失，需要同时记录每专家负载方差与梯度范数。

### 哪些结论还不能推广？

论文直接报告的是在 LibriSpeech 预训练、MOSEI 与 IEMOCAP 上零样本与 10 样本的情绪情感结果，支持的判断是 CoPRIME 在该协议下优于同规模稠密与自实现 LIMoE 变体，且 ELBO 是稳定分工的主要驱动。有限解释是熵型损失带来更平滑梯度与更灵活路由，这有内部变异系数对照支持，但提升幅度较小，需待更大规模与更多随机种子验证。未验证推测是更低专家内散射与更高专家间分离必然带来检索提升，原文补充材料以定性方式描述，未给出完整检索曲线与统计检验，不能当成因果承诺。

缺失证据不是技术错误，但复现者应明确边界：原文未报告推理延迟、每步输出帧率与完整计算量分解，只报告单卡型号与显存，因此不能承诺推理更快或成本更低，只能说稀疏激活在推理时理论上只走部分参数。不同指标的差值不能混用，百分点与相对百分比不同，自动对比精度不能当成人类情感判断。原文表头与算术若出现冲突应标注冲突，本文所引数字均保留原文精度与百分号写法，未做四舍五入。

另一个边界是直接与 LIMoE 官方比较不可行，本文比较对象是作者自实现变体，跨论文的数字对比需注明协议不一致。

### 要复现先做什么与先检查什么？

复现的第一步是按原文重建数据流水线。音频侧把波形转声谱图再按 32 乘 32 切块展平投影，文本侧用 sentencepiece 切词后查表投影，两侧加模态标记并拼接到同一序列。编码器按基础版 3 个 Transformer 块加 6 个 MoE 块或大版翻倍搭建，专家数与 Top-K 分别设为 8 取 2 或 16 取 4，隐层与前馈维度按对应版本设置。第二步是按权重公式组织损失，对比损失加 ELBO 加 4 个熵型辅助损失，初始权重取辅助 0.02、ELBO 0.04，再在对数网格附近小范围验证。

第三步是先在 LibriSpeech 上预训练，再按跨域直接评测与 MOSEI 微调后评 IEMOCAP 两条协议分别记录零样本类原型相似度与 10 样本线性探针结果，10 折交叉验证报告双 sigma 误差。关键超参数与信息条件是学习率、批量、温度、噪声方差与原型滑动平均动量，原文未给出温度与动量的具体数值，这是具体缺项，复现时需在代码仓库中核对默认值并记录。代码资源状态为 available，可写当前已公开，但需区分代码开源、权重下载与系统可运行三件事，只有跑通端到端脚本才能算可运行。

常见误解是把音频 token 多等同于音频更重要，复现时应监控每专家音频与文本占比，而不是只看总负载均衡。

### 何时值得尝试这种做法？

当你的多模态数据也呈现数量与重要性倒挂，即 token 多的一侧语义未必更重要，且你希望用一个共享编码器省掉模态专用分支时，CoPRIME 的组合值得尝试。它的可操作启示是：先用对比目标保证跨模态可比，再用 ELBO 要求专家真正包住分给它的嵌入，最后用熵型重要性与负载、Z 损失与互信息维持灵活均衡，而不是一开始就用硬性均匀约束压住分工。若你的任务中各模态 token 量接近，或已有充足标注可直接监督，引入 5 个辅助损失的调参负担可能得不偿失。

还需补的验证包括更大语音情感语料上的重复、更多随机种子的方差报告、以及负载方差与收敛步数的联合记录，这样才能把稳定性的声称从定性 heatmap 变成可审计的效率指标。总体上，本文的价值不在于证明稀疏一定优于稠密，而在于给出一种在极端失衡下仍能保持分工与利用平衡的概率路由写法，初学者沿输入到表示再到路由再到目标的单样本路径复述一遍，比背诵损失名称更能掌握方法。

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。
- 评分规则：type-aware-v1
- 评分模型：muse-spark-1.3-contributor
- 评分请求协议：openai_responses

---

[← 返回 aistats-2026 论文汇总](/posts/conference-aistats-2026/)
