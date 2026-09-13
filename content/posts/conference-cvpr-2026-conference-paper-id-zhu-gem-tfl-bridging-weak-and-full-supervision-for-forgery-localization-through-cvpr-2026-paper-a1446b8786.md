---
title: "GEM-TFL: Bridging Weak and Full Supervision for Forgery Localization through EM-Guided Decomposition and Temporal Refinement"
date: 2026-09-13
draft: false
description: "问题是弱监督时间伪造定位中训练只做整段二分类而推理要输出边界，方法选择两阶段分类回归加隐属性分解与时序图精炼，最强证据是在两个基准上平均 mAP 分别提升约 8% 和 4%，代价是定位阶段引入约 45M 回归参数与伪标签噪声管理。"
tags: ["弱监督学习", "音视频", "音频伪造检测", "音频事件检测"]
categories: ["cvpr-2026 论文"]
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_paper_id: "conference:cvpr:2026:conference-paper-id:Zhu_GEM-TFL_Bridging_Weak_and_Full_Supervision_for_Forgery_Localization_through_CVPR_2026_paper"
paper_digest_source_kind: conference
paper_digest_conference_id: "cvpr-2026"
paper_digest_conference_record_url: "https://openaccess.thecvf.com/content/CVPR2026/html/Zhu_GEM-TFL_Bridging_Weak_and_Full_Supervision_for_Forgery_Localization_through_CVPR_2026_paper.html"
paper_digest_conference_pdf_url: "https://openaccess.thecvf.com/content/CVPR2026/papers/Zhu_GEM-TFL_Bridging_Weak_and_Full_Supervision_for_Forgery_Localization_through_CVPR_2026_paper.pdf"
paper_digest_api_reader_contract: "beginner-researcher-v3"
paper_digest_api_reader_article_sha256: "4bce1894a3bd22b3815d42a004d21277104705a62f84285ba4d7037becb5b0bb"
paper_digest_api_reader_plan_sha256: "9b47befd23872e10cac548d98a9f9a8f08ec0798004406c30271b2620418fb75"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings-v4"
paper_digest_api_reader_source_bindings_sha256: "f05700a30c399720a82efd385d1c629be39e41c695d09d8a48349b6fd716e35f"
paper_digest_api_reader_source_table_count: 3
paper_digest_api_reader_source_formula_count: 0
paper_digest_api_reader_structured_artifacts_sha256: "a69eab93ed6b6563b02c7539f7544d8bdc1d9ab7a4f1dfdccdfc0ff61c829daa"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity-v1"
paper_digest_api_reader_author_identity_sha256: "4c5415a07c3e2ba4cd26390d670d87d2e680afd78ea7a4b486f9be76dc7beea9"
paper_digest_api_reader_author_count: 7
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity-v1"
paper_digest_api_reader_resource_identity_sha256: "4e065b752d16a6f1574a44455866e4095d6eb459956092537409805ac9b3d089"
paper_digest_api_reader_resource_count: 0
paper_digest_api_reader_decision_projection: "api-reader-decision-projection-v2"
paper_digest_scoring_contract: "api-scoring-audit-v2"
paper_digest_taxonomy_contract: "paper-taxonomy-flat-tags-compat-v1"
paper_digest_taxonomy_selection_contract: "paper-taxonomy-selection-v1"
paper_digest_taxonomy_registry_version: "paper-taxonomy-v1"
paper_digest_taxonomy_registry_sha256: "15c82a567ce5a55dc1175684ed08b64c158558639d9c8fb822c9587ec32a8778"
paper_digest_taxonomy_concepts: [{"facet":"method","id":"method.weak-supervised","label":"弱监督学习"},{"facet":"signal","id":"signal.audiovisual","label":"音视频"},{"facet":"task","id":"task.audio-forgery","label":"音频伪造检测"},{"facet":"task","id":"task.event-detection","label":"音频事件检测"}]
paper_digest_primary_task: "音频伪造检测"
paper_digest_primary_method: "弱监督学习"
paper_digest_score: 6.8
paper_digest_rank_bucket: "前50%"
paper_digest_document_type: "方法研究"
paper_digest_conference_structure: replayable-pdf-layout-v1
---

# 📄 只给整段真假标签，如何找回伪造片段的起止时间

> 英文题目：*GEM-TFL: Bridging Weak and Full Supervision for Forgery Localization through EM-Guided Decomposition and Temporal Refinement*

> 会议身份：`conference:cvpr:2026:conference-paper-id:Zhu_GEM-TFL_Bridging_Weak_and_Full_Supervision_for_Forgery_Localization_through_CVPR_2026_paper`


> ✅ 来源为官方会议 PDF；表格与 Figure 按原文证据绑定。PDF 公式以原页区域图片展示，未冒称作者原始 TeX。

> 会议来源：[官方记录](https://openaccess.thecvf.com/content/CVPR2026/html/Zhu_GEM-TFL_Bridging_Weak_and_Full_Supervision_for_Forgery_Localization_through_CVPR_2026_paper.html) · [官方 PDF](https://openaccess.thecvf.com/content/CVPR2026/papers/Zhu_GEM-TFL_Bridging_Weak_and_Full_Supervision_for_Forgery_Localization_through_CVPR_2026_paper.pdf)

标签：#弱监督学习 #音视频 #音频伪造检测 #音频事件检测

评分：**6.8/10** | 创新 1.5/2 | 技术严谨 1.0/1.5 | 实验充分 1.2/1.5 | 清晰度 0.8/1 | 影响力 1.0/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 1.0/1.5

排名：前50% | 文档类型：方法研究

## 👥 作者与机构

- Xiaodong Zhu：机构信息未能从会议 PDF 纯文本可靠映射
- Yuanming Zheng：机构信息未能从会议 PDF 纯文本可靠映射
- Suting Wang：机构信息未能从会议 PDF 纯文本可靠映射
- Junqi Yang：机构信息未能从会议 PDF 纯文本可靠映射
- Yuhong Yang：机构信息未能从会议 PDF 纯文本可靠映射
- Weiping Tu：机构信息未能从会议 PDF 纯文本可靠映射
- Zhongyuan Wang：机构信息未能从会议 PDF 纯文本可靠映射

## 📌 核心摘要

弱监督时间伪造定位仅以片段级真假标签为输入，推理时却需输出全部伪造片段的起止边界与置信度，监督稀薄与分类训练定位推理错位导致边界模糊与短片段碎裂。GEM-TFL先经特征增强与注意力分支和属性分支做EM引导的标签属性解耦，把单比特标签扩展为隐伪造属性分布以丰富语义。解耦输出再经无训练时序一致性细化交替投影到行列约束以对齐帧级与片段级预测，生成初始伪提案并抑制时序抖动。随后图提案细化在时序语义图上传播置信度并融合碎片提案得到最终伪标签，定位阶段再用伪标签监督回归主干学习精确边界并经Soft-NMS输出。相对MIL加阈值加对比打分的旧范式，新机制把梯度阻断转为约束投影校正、把孤立打分转为全局置信传播，兼顾语义丰富性与结构连续性。在AV-Deepfake1M基准下，GEM-TFL的平均mAP指标为42.7，高于WMMT的平均mAP指标34.3。该结论适用边界受限于说话人脸音视频替换插入删除伪造，跨生成器跨语言与强压缩传输场景尚未验证，训练成本涉及在八块NVIDIA RTX 3090硬件上训练50个轮次。

## 🔗 开源与复现资源

本次未形成可展示的已核验资源记录，开放状态尚未核实。
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 输入只有整段真假时定位难在哪里？

本文研究的是音视频时间伪造定位。输入是一段未剪辑的说话人视频，包含时间对齐的画面流和音频流，输出是其中所有伪造片段的开始时间和结束时间，以及每个片段的置信度。评价时用交并比阈值衡量预测区间与真值区间的重合程度。白话说，模型不仅要回答这段视频有没有被改过，还要指出改的是哪几秒。英文上这个任务叫 Temporal Forgery Localization，缩写为 TFL。

全监督做法训练时就有密集的帧级或片段级边界标签，可以直接学回归。弱监督做法训练时只有整段二值标签，也就是整段为真还是为假，推理时却要求输出边界。前者监督充足但标注贵，后者标注便宜但信息少。本文聚焦后者，记为弱监督时间伪造定位，即 WS-TFL。初学者容易误以为整段分类准了定位自然就准，实际上分类只关心最具判别力的少数帧，而定位要求完整且连续的边界，两者目标并不一致。

**弱监督时间伪造定位 × 全监督时间伪造定位：** 弱监督时间伪造定位只用整段是否伪造的二值标签训练，推理却要输出每个伪造片段的起止时间；全监督时间伪造定位训练时就有逐帧或逐段边界标签。两者的分工差异在于监督粒度不同，搭配理由是弱监督想省标注成本但必须补上边界信息，组合意义在于本文用第一阶段生成伪边界去驱动第二阶段回归，从而让训练目标向推理目标靠拢。

本文的输入条件必须讲清：训练只用片段级二值标签 y 属于 0 或 1，不用任何帧级起止时间；只有一个例外基线 WMMT 用了四元组多模态标签，会在结果部分单独标明。输出条件是预测集合，每个元素含开始时间、结束时间和置信度。复述方法时要沿着一个样本走完输入到输出：先抽帧级视觉和音频特征，再对齐融合成统一表示，再经两个分支得到帧级注意力和属性预测，再聚合成片段预测并生成伪区间，最后用伪区间训练回归分支。官方原图像素本次没有提供代码可用性验证，因此不能声称代码模型数据已公开。

### 同输入同目标的已有路线有何不足？

同输入同目标的直接前人是弱监督时间伪造定位中的 MDP 和 WMMT。它们都沿用多示例学习框架，训练时把帧级激活和注意力经不可微的 top-k 池化聚成片段预测，推理时经阈值和软非极大值抑制得到区间。原文指出这种做法存在训练推理失配，片段预测准不代表边界稳，尤其对短而隐蔽的伪造容易产生碎片化和不稳定定位。另一条相关路线是弱监督时间动作定位中的 CoLA、FuSTAL 和 PseudoFormer。它们同样用多示例学习，但动作任务有多类标签，语义更丰富，而伪造定位只有二值标签，判别力更弱。

PseudoFormer 的 2 阶段思想被本文继承，但其全局融合依赖外部内外对比分数，对外部区域参数敏感。
全监督路线包括 ActionFormer、TriDet、UMMAFormer 和 MFMS。它们用真边界直接监督回归或查询解码，精度高但需要密集标注，不能与弱监督方法放在同一监督条件下比胜负。本文的对照做法是把这些全监督方法作为上限参考，把弱监督方法作为同条件基线，并在相同预训练特征上重训基线以保证公平。单模态弱监督方法如视觉的 CoDL 和音频的 LOCO 也在讨论范围内，但本文主打音视频联合建模。

理解这些路线后才能看懂本文为什么要做标签分解、时序对齐和区间关系建模，而不是简单加深网络。

### 一个样本从输入到输出要经过什么？

设一个样本包含视觉序列和音频序列。先用预训练编码器抽出帧级视觉特征和音频特征，再在时间和通道上对齐，拼成统一的时序特征矩阵，时间长度为 T，通道为融合后维度。随后特征增强模块用自注意力、交叉注意力和前馈层分别得到音频增强的视觉特征和视觉增强的音频特征，再沿通道拼接。白话说，这一步让声音和画面互相提醒，例如口型与语音不一致处更容易被放大。
统一特征送入两个独立多层感知机分支。

一个是伪造注意力分支，输出每帧的伪造概率，记为帧级注意力预测；另一个是伪造属性分支，输出每帧在真实类加 m 个隐伪造属性上的分布，记为帧级属性预测。片段级属性预测通过注意力引导的 top-k 聚合得到，即选出注意力最高的 k 帧，对其属性分布求平均再做归一化。片段伪造概率由真实属性概率推得。另一路片段预测直接对帧级属性做同样的 top-k 得到，两路都用二值交叉熵监督。

**多示例学习 × 伪候选：** 多示例学习把一段视频看作包，把帧看作实例，只用包标签聚合帧预测；伪候选是推理时从帧级激活序列经阈值得到的疑似伪造区间。前者负责在弱标签下学出帧级响应，后者负责把响应转成可评估的区间，搭配原因是没有真边界时只能先用模型自己的响应造监督，组合后第二阶段才能做回归。

推理时模型不能只输出片段标签，必须输出区间。传统做法是对激活序列做迭代阈值并用内外对比分数打分，但这种局部打分忽略区间之间的全局依赖，容易把连续伪造切碎。本文因此把问题拆成先造伪区间再学回归：第一阶段负责造出较准的伪区间，第二阶段负责学边界回归。后续三节分别讲造伪区间时的语义增强、时序平滑和关系融合。

### 两阶段如何把分类目标转成回归目标？

本文总体是一个 2 阶段分类回归框架。第一阶段是基于多示例学习的分类阶段，目标是只用二值标签学出帧级响应并生成伪候选；第二阶段是定位阶段，用伪候选作为监督训练回归分支，使训练和推理都输出起止时间。图 1 把这种对照画得很直观：上面一行是已有方法训练时预测整段二值标签而推理时预测伪造片段，右侧标为不匹配；下面两行是本文先经标签分解、一致性精炼和候选精炼得到精炼伪候选，再用回归方法在训练和推理时都预测伪造片段，右侧标为匹配。阅读时要抓住箭头方向从输入到输出的主路径，以及分类阶段内部 3 个精炼步骤的先后顺序。

> **看图路径：** 1. 先看上面一行训练只预测整段二值标签而推理要输出时间段的箭头走向；2. 再看下面两行分类阶段如何输出伪候选并送入定位阶段回归；3. 对比右侧红色不匹配与绿色匹配的标注含义；4. 确认输入侧人脸帧与波形只作为示意输入而非监督来源

[![原论文 Figure 1：Comparison between prior and our WS-TFL pipelines.](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/600521a7b616/figure-1.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/600521a7b616/figure-1.png)

*论文图 1。原论文 Figure 1：“Comparison between prior and our WS-TFL pipelines.”。*

看完图 1 应得到三点解释。第一，分类阶段内部依次做标签分解、一致性精炼和候选精炼，分别解决监督太粗、时序断裂和区间碎片 3 个问题，而不是并列堆模块。第二，定位阶段的训练监督来自精炼伪候选而非真边界，同时附带一个二分类头提供辅助监督，回归损失权重随训练逐渐增大以压制早期伪标签噪声。第三，推理时只用回归分支加软非极大值抑制输出最终区间，因此训练和推理的输出形式一致，这就是原文所说的桥接弱监督与全监督之间监督鸿沟的具体动作。后续两节展开第一阶段的 3 个模块，再用训练节讲第二阶段的损失调度。

### 隐属性分解怎样把一个二值标签变厚？

隐属性分解的白话含义是把真或假这一个比特拆成多个可学习的伪造子类型。原文把标签空间定义为真实类 0 加上 m 个隐伪造属性，模型要学的是每帧属于每个属性的概率。英文记为 Latent Attribute Decomposition，缩写为 LAD。期望最大化的英文是 Expectation-Maximization，缩写为 EM，是一种交替优化：E 步固定参数估计隐变量后验，M 步固定后验更新参数。
具体动作是 E 步根据当前参数和二值标签算后验。

真样本的后验把全部概率给真实类；假样本的后验在 m 个伪造属性上按先验加模型证据的分数做归一化，温度系数默认取 2，先验初始化为均匀分布。M 步固定该后验，计算负对数似然损失，并加一个基于属性先验的熵正则以防止坍缩到少数属性，再与二值交叉熵一起最小化更新参数。类先验用指数滑动平均更新，平滑系数默认很小。原文称这是一个自演化的标签分解过程，后验和参数逐步互相精炼。

**隐属性分解 × 期望最大化：** 隐属性分解负责把一个二值标签展开为包含真实类加 m 个可学习伪造属性的多维分布，以增加语义区分度；期望最大化负责交替执行 E 步估计每个样本属于各属性的后验和 M 步更新网络参数。搭配理由是二值监督太粗而直接多分类又没有标签，组合意义是用自演化的软分配逐步拉开不同伪造模式的表示。

大图展示了分类阶段全貌，左侧是特征增强到两个分支再到二值预测和属性预测的流程，右侧是 E 步冻结参数与 M 步更新参数的循环，中间用时间滤波和逐元素乘积连接先验后验。阅读时先跟主路径，再看 E 步与 M 步箭头方向，避免把冻结与更新弄反。

> **看图路径：** 1. 先沿左侧特征增强到注意力和属性两个分支的主路径看数据流向；2. 再看中间不可微 top-k 处红色叉号表示的梯度阻断位置；3. 观察右侧统一空间中多个小峰如何融合成一个连续大峰；4. 核对图例中逐元素乘积与时间滤波符号的含义

[![原论文 Figure 2：Overview of the classification phase.](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/600521a7b616/figure-2.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/600521a7b616/figure-2.png)

*论文图 2。原论文 Figure 2：“Overview of the classification phase.”。*

该图的教学价值在于把 3 个子问题放在一张图里：子图 a 说明语义从哪里来，子图 b 说明梯度断在哪里以及如何绕开，子图 c 说明碎片区间如何合并。注意火焰标记表示可训练参数，top-k 旁的索引箭头表示用注意力选出的帧去引导属性聚合。m 的取值在消融节验证，最优为 3，原文解释为自然对应仅音频伪造、仅视觉伪造和音视联合伪造 3 种模态级模式。

### 时序平滑与图融合如何修碎片？

时间一致性精炼的白话含义是不改网络权重，只调整已有的帧级属性预测，使其既接近原始预测又满足片段级约束。英文为 Temporal Consistency Refinement，缩写为 TCR。问题根源是连接注意力和属性分支的 top-k 不可微，梯度传不过去，导致 2 分支时序响应不一致。原文把它写成一个基于散度的投影问题：目标是最小化调整后分布与原分布的散度，约束一是每帧仍为合法类别分布，约束二是经注意力加权的帧平均等于片段级属性先验。

求解用迭代比例缩放，从原预测出发交替投影到行约束和列约束空间，直到收敛，全程无需训练。得到平滑后的帧级属性后，再经迭代阈值和内外对比分数生成初步伪候选。
图候选精炼的白话含义是把候选看作节点，用时间与语义相似度连边，再把置信度在图上传播后重新融合。英文为 Graph-based Proposal Refinement，缩写为 GPR。先用 Ricker 小波把每个候选映射到统一时间轴上的波形，波形中心和宽度由候选起止时间决定。

边权由时间相似度加语义相似度构成，时间用广义交并比度量，语义在同属性时取 1、不同属性时取较小值。初始权重取候选置信度，按带阻尼的扩散迭代传播，阻尼系数取 0.7，存在闭式解。最后按扩散后权重加权融合波形并在零处阈值得到最终伪标签。

**时间一致性精炼 × 图候选精炼：** 时间一致性精炼负责在不训练参数的情况下把帧级属性预测向片段级属性先验对齐，使时序响应更平滑；图候选精炼负责在候选之间建图并扩散置信度，把碎片区间从全局关系上合并。前者分工是修帧级曲线，后者分工是修区间级关系，搭配原因是 top-k 不可微和局部阈值都会造成断裂，组合后先平滑曲线再合并区间。

下面这张小图对比了 4 种情况：左上为真值连续区间，右上为直接阈值切出的两个分离区间，左下为直接用原始分数融合时的不稳定表示，右下为本文经精炼置信度融合后恢复的连续长区间。阅读时重点看虚线阈值线位置不变而波形峰高与合并方式的变化，以及蓝色虚线标注的来自邻居的增强。

> **看图路径：** 1. 先看左上真值区间覆盖黄粉绿三段峰的连续范围；2. 再看右上直接阈值如何把连续真值切成两个分离区间；3. 对比左下直接用原始分数融合时的压低与抬高方向；4. 观察右下经邻居扩散后中间峰被增强并连成一个长区间

[![原论文 Figure 3：Comparison between prior and our WS-TFL pipelines.](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/600521a7b616/figure-3.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/600521a7b616/figure-3.png)

*论文图 3。原论文 Figure 3：“Comparison between prior and our WS-TFL pipelines.”。*

解释该图要抓住一点：直接用对外部区域敏感的原始分数做融合权重会引入人为偏置，而经图扩散后的权重考虑了邻居支持，因此中间较弱的峰能被两边增强并连成整体。这正是原文用全局关系视角合并碎片的含义。教学例子是若一段伪造被静音间隙切成三小段，局部阈值会输出 3 段，图融合则可能恢复一段，但这只是帮助理解的例子，不代表论文报告过该数值。

### 第二阶段用什么监督回归分支？

定位阶段没有真边界可用，监督全部来自第一阶段的最终伪候选。回归分支可以选用 UMMAFormer 或 TriDet 等结构，输入仍是同一套音视频特征，输出是片段伪造概率和回归的候选区间。训练损失由两项组成：附在回归特征上的两层感知机二分类头算出的二值交叉熵，以及回归主损失。原文用一个系数控制两者比例，该系数在训练中从 0.5 线性增至 1.0，早期更依赖分类辅助以稳定收敛，后期更强调回归以逼近边界。推理时只保留回归分支，再做软非极大值抑制。

**分类阶段 × 定位阶段：** 分类阶段用多示例学习加隐属性分解产生帧级注意力和属性预测，并经精炼得到伪候选；定位阶段用这些伪候选监督一个回归分支直接预测起止时间。搭配理由是第一阶段解决无边界监督的冷启动，第二阶段解决训练推理目标不一致，组合意义是把弱监督问题转成有噪全监督回归问题并用二分类辅助头稳定训练。

需要明确的参数冻结与更新安排是：TCR 本身不更新任何参数，只做投影；LAD 的 E 步冻结模型参数估计后验，M 步更新参数；定位阶段训练回归分支，第一阶段的分类分支不再提供梯度。原文未给出投影迭代次数的收敛阈值细节和回归主损失的具体形式选择依据，这两处是复现时需要对照附录或开源实现补齐的缺项，不能从模型名称推定。训练资源方面原文报告在 8 卡上训练，分类与定位模型各训 50 轮，批量 128，用 AdamW 和余弦调度加 10 轮预热，学习率 2e-4，统一特征维度 512，隐属性数 3，M 步损失权重分别取 0.8 和 0.5。这些是复现先要对齐的超参数。

### 在什么数据与指标下比较才公平？

实验用两个多模态伪造数据集。LAV-DF 是内容驱动的音视频数据集，含十余 10000 段视频，伪造以替换型为主，伪造段平均约 0.65 秒而视频平均约 8.58 秒。AV-Deepfake1M 规模更大，含近 2000 小时视频和两千余身份，引入替换、插入、删除等细粒度操作，伪造比例更低，边界更难。原文明确后者用了更先进的音视频合成，规模更大、模态更丰富、伪造比更低，是更具挑战的弱监督基准。划分与采样细节见附录，正文未展开时不应自行编造。

指标沿用平均精度和平均召回。交并比阈值取 0.1 至 0.7 步长 0.1，候选数取 20、10、5、2。指标方向是越大越好，但平均值是对多个阈值或多个候选数的平均，不能把某一阈值的高分推广为全程都好。基线分两组：全监督组用 ActionFormer、TriDet、UMMAFormer、MFMS，只作上限参考；弱监督组用 CoLA、FuSTAL、LOCO、MDP、PseudoFormer 和 WMMT，其中 WMMT 用了四元组多模态标签，信息量大于二值标签，比较时必须注明监督并不严格对等。

公平条件是所有基线按官方实现在同一套预训练特征上重训，特征抽取用 ResNet-50 处理视觉、用 Wav2Vec 2.0 处理音频。跨数据集泛化只报告在 AV-Deepfake1M 上训练、在 LAV-DF 上测试，因为反方向几乎所有弱监督方法在低阈值下接近零，原文因此略去。

### 主结果在多大差距下仍支持有效？

比较问题是：在同为弱监督且特征一致的条件下，本文方法是否在平均精度和平均召回上超过可运行的最强基线，以及与全监督上限的差距缩小了多少。指标方向为越高越好，WMMT 因用了更丰富的四元组标签而占有监督优势，解读增益时要扣减这层信息差。表 1 整理 LAV-DF 上的相对增益，表 2 整理更难数据集与跨数据集上的增益，每张表都保留实际可运行的基线对象而非事后最优。

| 数据集 | 指标 | 基线对象 | 本方法增益 | 比较对象 |
| --- | --- | --- | --- | --- |
| LAV-DF | 平均 mAP | PseudoFormer | 12.7% | 最强动作定位基线 |
| LAV-DF | 平均 mAR | PseudoFormer | 6.4% | 最强动作定位基线 |
| LAV-DF | 平均 mAP | WMMT | 4.3% | 最优弱监督伪造基线 |
| LAV-DF | 平均 mAR | WMMT | 1.0% | 最优弱监督伪造基线 |

表 1 后解释要同时讲收益与代价。收益是本文在 LAV-DF 上全面超过弱监督基线，并在低阈值和高召回档上明显缩小与全监督的差距，高阈值 0.7 处仍保持 50% 以上 mAP，显示边界较稳。代价一是 WMMT 本就用了四元组标签，本文在更弱的二值标签下反超，说明语义分解确实补上了信息，但不能说已追平全监督。

代价二是未胜出项依然存在：全监督方法在高阈值处仍领先，弱监督的精度随阈值升高下降更快，这是缺少真边界的固有局限。下面表 2 进一步把更难基准与跨数据集放在一起检验泛化，避免重复主结果。

| 数据集 | 指标 | 基线对象 | 本方法增益 | 比较对象 |
| --- | --- | --- | --- | --- |
| AV-Deepfake1M | 平均 mAP | 全部其他弱监督 | 8.4% | 最难基准整体最优 |
| LAV-DF 跨测 | 平均 mAP | PseudoFormer | 3.4% | 跨数据集泛化 |
| AV-Deepfake1M | 平均 mAP | 全文总结 | 8% | 相对弱监督基线 |
| LAV-DF | 平均 mAP | 全文总结 | 4% | 相对弱监督基线 |

该表把更难基准与跨数据集放在一起，是为了说明泛化而非重复主结果。

AV-Deepfake1M 上 CoLA、FuSTAL、LOCO 的平均 mAP 不足 1%，MDP 也大幅下滑，PseudoFormer 靠 2 阶段尚能维持，WMMT 靠四元组标签维持，而本文进一步拉开约 8.4% 差距。跨数据集上本文超过 PseudoFormer 约 3.4% 差距，且在高阈值处反超 WMMT，支持语义丰富的监督更利于精确定位的判断。但限制是跨数据集只测了 1 个方向，反方向因接近零而未报告，不能声称双向泛化都好。

### 拿掉每个模块后性能如何变化？

消融问题是：标签语义、时序平滑、图融合和第二阶段回归各自贡献多少，以及隐属性数如何选择。条件是同一 AV-Deepfake1M 基准，指标仍为平均 mAP 与平均召回，参数量作为成本参考。表 3 把总体增益与最大单模块增益放在一起，避免只看最终数字而忽略来源。

| 数据集 | 指标 | 模块条件 | 本方法增益 | 成本含义 |
| --- | --- | --- | --- | --- |
| AV-Deepfake1M | 平均 mAP | 整体方法 | 8% | 相对弱监督基线总结 |
| LAV-DF | 平均 mAP | 整体方法 | 4% | 相对弱监督基线总结 |
| AV-Deepfake1M | 平均 mAP | 仅加 LAD | +18.7% | 相对基础模型 |
| AV-Deepfake1M | 平均 mAR | 仅加 LAD | +8.7% | 相对基础模型 |

表后解释需给出机制对照。基础模型接近 MDP 的多示例学习，平均 mAP 仅约 5% 量级；加入 LAD 后带来最大幅度的提升，支持 richer 语义是主要瓶颈的判断。TCR 进一步带来数个百分点的提升，作用是缓解碎片定位；GPR 再带来数个百分点的提升，作用是稳定边界。

定位阶段增加约 45M 参数，带来约 10 个百分点的提升，是用复杂度换精度的典型权衡。前三者参数增量可忽略，说明增益主要来自建模而非堆参数。未胜出或负面边界是：m 小于 3 时属性簇重叠严重，m 大于 3 时特征坍缩，最优在 m 等于 3。

下面这组可视化比较不同 m 下的分类特征分布，每子图下方标有二分类准确率与曲线下面积，灰色阴影标出重叠区。阅读时先看数值再看点团形状，不要把降维散点的距离直接当成原始空间的欧氏距离。

> **看图路径：** 1. 先确认每子图下方标注的二分类或 m 取值与 AUC 和 ACC 数值；2. 再看灰色阴影标出的属性重叠区域位置与大小变化；3. 对比 m 等于 3 时蓝绿红橙四色点团的分离程度；4. 核对图例中蓝色为真实类而其余颜色为伪造属性的对应关系

[![原论文 Figure 4：T-SNE visualizations of classification features under dif- ferent latent forgery attribute d m.](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/600521a7b616/figure-4.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/600521a7b616/figure-4.png)

*论文图 4。原论文 Figure 4：“T-SNE visualizations of classification features under dif- ferent latent forgery attribute d m.”。*

该图显示 m 等于 3 时分离最好且分类指标最高，甚至超过直接二分类，支持扩大语义空间有助于判别的解释。原文推测 m 等于 3 自然对应仅音频、仅视觉和音视联合 3 种模态级伪造模式，这属于有限解释而非因果证明，应表述为可能或待验证，不能说已证实隐属性恰好学到了这 3 种类型。

### 哪些结论还不能下？

论文直接报告的是精度与召回的提升，以及各模块的增量贡献，这些有数字支持。有限解释包括 m 等于 3 对应 3 种模态伪造模式，以及图扩散缓解人为偏置的机理解释，这些有可视化和趋势支持但无因果验证。未验证推测包括未来用多模态基础模型和自蒸馏进一步缩小差距，这只是方向而非已证收益。
缺失证据不是技术错误，但必须点明边界。原文未测量误判率的细分布、推理延迟、输出帧率和实际部署成本，因此不能承诺这些量得到改善。

训练资源只给了卡数、轮数和批量，未给总时长与显存峰值；推理开销未单独报告，总体趋势不等于每组阈值或每步都成立。监督条件上 WMMT 用了四元组标签，与纯二值标签方法并列时要注明信息量差异。跨数据集只报告了 1 个方向，另一方向因接近零而缺席，不能推广为双向泛化。百分比点与相对百分比含义不同，文中增益多为百分点口径，复述时不要换算成相对提升。

### 复现先对齐什么再跑什么？

复现第一步是对齐信息条件：确认训练只用整段二值标签，WMMT 基线除外；确认特征用 ResNet-50 和 Wav2Vec 2.0 抽取并对齐到统一时序维度；确认评价用交并比 0.1 至 0.7 和候选数 20、10、5、2 的平均值。资源状态方面本次未发现来源绑定且完成验证的资源，因此只能写本次未能确认代码模型数据可达，不能声称已公开或可下载。

第二步是按样本走通流程：特征增强得到融合特征，经注意力和属性分支得到帧级预测，经 top-k 得到片段预测，用 EM 交替估计后验与更新参数，再用训练无关的投影平滑帧预测并生成初步候选，最后建图扩散融合得到伪标签。用伪标签训练回归分支时注意损失权重从 0.5 线性增至 1.0，推理只用回归分支加软非极大值抑制。超参数先固定为统一维度 512、m 为 3、温度 2、M 步权重 0.8 和 0.5、先验滑动系数 0.0001、图阻尼 0.7、外部区域比 0.25。

还需补的验证是投影迭代停止条件、回归主损失实现细节和另一方向的跨数据集表现，这些在正文缺项处要对照附录补齐后再下结论。

### 何时值得尝试这种两阶段做法？

当任务是只有整段标签却要输出时间边界，且伪造模式多样而标注预算有限时，这种先分解语义再精炼时序与关系、最后用伪标签驱动回归的做法值得尝试。它的适用条件是能容忍伪标签噪声并愿意付出第二阶段回归参数的成本，且有音视频两路信号可供互补。若只有单模态或伪造极短而稀疏，仍要先在小规模上验证碎片是否可被图融合修复，再决定是否引入全套流程。

对初学者的操作建议是：先复现基础多示例学习基线并记录低阈值与高阈值的差距，再逐个加入语义分解、时序投影和图融合，观察平均精度与召回的增量是否与原文趋势一致，最后再训练回归分支。常见误解是把分类准确率高当成定位一定好，或把降维可视化中点团分开当成已学到真实伪造类型，前者混淆了目标，后者把相关当成了因果。

回到本文中心矛盾，弱监督省下标注却丢了边界信息，本文用可学习的隐属性补语义，用无参投影补时序，用图传播补关系，用回归桥接训练推理，这 4 步共同把二值监督变厚，而不是靠某一个模块一举追平全监督。

## 📐 原文公式与排版

以下展示论文原页中的数学表达区域，保留原始上下标、分式和符号排版。区域序号仅用于本文导航，不是论文公式编号。

[![原文数学表达区域 1，PDF 第 4 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/5292094c5cc9/figure-1.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/5292094c5cc9/figure-1.png)

区域 1 · [查看论文原页](https://openaccess.thecvf.com/content/CVPR2026/papers/Zhu_GEM-TFL_Bridging_Weak_and_Full_Supervision_for_Forgery_Localization_through_CVPR_2026_paper.pdf#page=4)

[![原文数学表达区域 2，PDF 第 4 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/5292094c5cc9/figure-2.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/5292094c5cc9/figure-2.png)

区域 2 · [查看论文原页](https://openaccess.thecvf.com/content/CVPR2026/papers/Zhu_GEM-TFL_Bridging_Weak_and_Full_Supervision_for_Forgery_Localization_through_CVPR_2026_paper.pdf#page=4)

[![原文数学表达区域 3，PDF 第 4 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/5292094c5cc9/figure-3.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/5292094c5cc9/figure-3.png)

区域 3 · [查看论文原页](https://openaccess.thecvf.com/content/CVPR2026/papers/Zhu_GEM-TFL_Bridging_Weak_and_Full_Supervision_for_Forgery_Localization_through_CVPR_2026_paper.pdf#page=4)

[![原文数学表达区域 4，PDF 第 4 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/5292094c5cc9/figure-4.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/5292094c5cc9/figure-4.png)

区域 4 · [查看论文原页](https://openaccess.thecvf.com/content/CVPR2026/papers/Zhu_GEM-TFL_Bridging_Weak_and_Full_Supervision_for_Forgery_Localization_through_CVPR_2026_paper.pdf#page=4)

[![原文数学表达区域 5，PDF 第 4 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/5292094c5cc9/figure-5.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/5292094c5cc9/figure-5.png)

区域 5 · [查看论文原页](https://openaccess.thecvf.com/content/CVPR2026/papers/Zhu_GEM-TFL_Bridging_Weak_and_Full_Supervision_for_Forgery_Localization_through_CVPR_2026_paper.pdf#page=4)

[![原文数学表达区域 6，PDF 第 4 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/5292094c5cc9/figure-6.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/5292094c5cc9/figure-6.png)

区域 6 · [查看论文原页](https://openaccess.thecvf.com/content/CVPR2026/papers/Zhu_GEM-TFL_Bridging_Weak_and_Full_Supervision_for_Forgery_Localization_through_CVPR_2026_paper.pdf#page=4)

[![原文数学表达区域 7，PDF 第 4 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/5292094c5cc9/figure-7.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/5292094c5cc9/figure-7.png)

区域 7 · [查看论文原页](https://openaccess.thecvf.com/content/CVPR2026/papers/Zhu_GEM-TFL_Bridging_Weak_and_Full_Supervision_for_Forgery_Localization_through_CVPR_2026_paper.pdf#page=4)

[![原文数学表达区域 8，PDF 第 4 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/5292094c5cc9/figure-8.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/5292094c5cc9/figure-8.png)

区域 8 · [查看论文原页](https://openaccess.thecvf.com/content/CVPR2026/papers/Zhu_GEM-TFL_Bridging_Weak_and_Full_Supervision_for_Forgery_Localization_through_CVPR_2026_paper.pdf#page=4)

[![原文数学表达区域 9，PDF 第 5 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/5292094c5cc9/figure-9.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/5292094c5cc9/figure-9.png)

区域 9 · [查看论文原页](https://openaccess.thecvf.com/content/CVPR2026/papers/Zhu_GEM-TFL_Bridging_Weak_and_Full_Supervision_for_Forgery_Localization_through_CVPR_2026_paper.pdf#page=5)

[![原文数学表达区域 10，PDF 第 5 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/5292094c5cc9/figure-10.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/5292094c5cc9/figure-10.png)

区域 10 · [查看论文原页](https://openaccess.thecvf.com/content/CVPR2026/papers/Zhu_GEM-TFL_Bridging_Weak_and_Full_Supervision_for_Forgery_Localization_through_CVPR_2026_paper.pdf#page=5)

[![原文数学表达区域 11，PDF 第 5 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/5292094c5cc9/figure-11.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/5292094c5cc9/figure-11.png)

区域 11 · [查看论文原页](https://openaccess.thecvf.com/content/CVPR2026/papers/Zhu_GEM-TFL_Bridging_Weak_and_Full_Supervision_for_Forgery_Localization_through_CVPR_2026_paper.pdf#page=5)

[![原文数学表达区域 12，PDF 第 5 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/5292094c5cc9/figure-12.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/5292094c5cc9/figure-12.png)

区域 12 · [查看论文原页](https://openaccess.thecvf.com/content/CVPR2026/papers/Zhu_GEM-TFL_Bridging_Weak_and_Full_Supervision_for_Forgery_Localization_through_CVPR_2026_paper.pdf#page=5)

[![原文数学表达区域 13，PDF 第 5 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/5292094c5cc9/figure-13.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/5292094c5cc9/figure-13.png)

区域 13 · [查看论文原页](https://openaccess.thecvf.com/content/CVPR2026/papers/Zhu_GEM-TFL_Bridging_Weak_and_Full_Supervision_for_Forgery_Localization_through_CVPR_2026_paper.pdf#page=5)

[![原文数学表达区域 14，PDF 第 5 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/5292094c5cc9/figure-14.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/5292094c5cc9/figure-14.png)

区域 14 · [查看论文原页](https://openaccess.thecvf.com/content/CVPR2026/papers/Zhu_GEM-TFL_Bridging_Weak_and_Full_Supervision_for_Forgery_Localization_through_CVPR_2026_paper.pdf#page=5)

另有 41 个候选区域因边界不明确或图片数量、尺寸限制未展开；请[查看完整论文](https://openaccess.thecvf.com/content/CVPR2026/papers/Zhu_GEM-TFL_Bridging_Weak_and_Full_Supervision_for_Forgery_Localization_through_CVPR_2026_paper.pdf)中的原始排版。

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。
- 评分规则：type-aware-v1
- 评分模型：muse-spark-1.3-contributor
- 评分请求协议：openai_responses

---

[← 返回 cvpr-2026 论文汇总](/posts/conference-cvpr-2026/)
