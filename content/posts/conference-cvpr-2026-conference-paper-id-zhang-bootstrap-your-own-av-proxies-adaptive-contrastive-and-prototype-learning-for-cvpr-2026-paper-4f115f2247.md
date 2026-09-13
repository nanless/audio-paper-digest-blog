---
title: "Bootstrap Your Own AV-Proxies: Adaptive Contrastive and Prototype Learning for Audio-Visual Segmentation"
date: 2026-09-13
draft: false
description: "针对单模态噪声与跨模态语义鸿沟，BYOAVP 以自监督音频增强对齐视觉语义、以动量原型约束做像素级分类，在 AVSBench 与 VPO 六个子任务上取得最优，同时需承担双分支注意力与原型维护的额外开销。"
tags: ["对比学习", "自监督学习", "音视频", "音视频理解"]
categories: ["cvpr-2026 论文"]
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_paper_id: "conference:cvpr:2026:conference-paper-id:Zhang_Bootstrap_Your_Own_AV-Proxies_Adaptive_Contrastive_and_Prototype_Learning_for_CVPR_2026_paper"
paper_digest_source_kind: conference
paper_digest_conference_id: "cvpr-2026"
paper_digest_conference_record_url: "https://openaccess.thecvf.com/content/CVPR2026/html/Zhang_Bootstrap_Your_Own_AV-Proxies_Adaptive_Contrastive_and_Prototype_Learning_for_CVPR_2026_paper.html"
paper_digest_conference_pdf_url: "https://openaccess.thecvf.com/content/CVPR2026/papers/Zhang_Bootstrap_Your_Own_AV-Proxies_Adaptive_Contrastive_and_Prototype_Learning_for_CVPR_2026_paper.pdf"
paper_digest_api_reader_contract: "beginner-researcher-v3"
paper_digest_api_reader_article_sha256: "8140321c875cf093c4fd39e7cebc811f42bfd171c0e9741d80937921c8e03865"
paper_digest_api_reader_plan_sha256: "7d5174c9243f7c568a4d80c36a0151d6555c68aca5a9e1c62149822a2f5b3240"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings-v4"
paper_digest_api_reader_source_bindings_sha256: "9219871bcae9d7a21d1d23e8cd670152eed2f683a29b5167d393f523b943d831"
paper_digest_api_reader_source_table_count: 4
paper_digest_api_reader_source_formula_count: 0
paper_digest_api_reader_structured_artifacts_sha256: "8122ef078a04ac6a6cfe65e115591065a112a775ce8e034228a5ba32cf927fac"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity-v1"
paper_digest_api_reader_author_identity_sha256: "eb9f2e73ff8850fa92521f17932646e21eebe765af78569a1b848232ae94b9ce"
paper_digest_api_reader_author_count: 5
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity-v1"
paper_digest_api_reader_resource_identity_sha256: "e1960a4d8e02d91baee5fd46c8cdc1806104ead24c850d6f4630c6312f20e424"
paper_digest_api_reader_resource_count: 0
paper_digest_api_reader_decision_projection: "api-reader-decision-projection-v2"
paper_digest_scoring_contract: "api-scoring-audit-v2"
paper_digest_taxonomy_contract: "paper-taxonomy-flat-tags-compat-v1"
paper_digest_taxonomy_selection_contract: "paper-taxonomy-selection-v1"
paper_digest_taxonomy_registry_version: "paper-taxonomy-v1"
paper_digest_taxonomy_registry_sha256: "15c82a567ce5a55dc1175684ed08b64c158558639d9c8fb822c9587ec32a8778"
paper_digest_taxonomy_concepts: [{"facet":"method","id":"method.contrastive","label":"对比学习"},{"facet":"method","id":"method.self-supervised","label":"自监督学习"},{"facet":"signal","id":"signal.audiovisual","label":"音视频"},{"facet":"task","id":"task.av-understanding","label":"音视频理解"}]
paper_digest_primary_task: "音视频理解"
paper_digest_primary_method: "对比学习"
paper_digest_score: 6.6
paper_digest_rank_bucket: "前50%"
paper_digest_document_type: "方法研究"
paper_digest_conference_structure: replayable-pdf-layout-v1
---

# 📄 先降噪再分割：用自监督音频增强与动态原型约束弥合音视语义鸿沟

> 英文题目：*Bootstrap Your Own AV-Proxies: Adaptive Contrastive and Prototype Learning for Audio-Visual Segmentation*

> 会议身份：`conference:cvpr:2026:conference-paper-id:Zhang_Bootstrap_Your_Own_AV-Proxies_Adaptive_Contrastive_and_Prototype_Learning_for_CVPR_2026_paper`


> ✅ 来源为官方会议 PDF；表格与 Figure 按原文证据绑定。PDF 公式以原页区域图片展示，未冒称作者原始 TeX。

> 会议来源：[官方记录](https://openaccess.thecvf.com/content/CVPR2026/html/Zhang_Bootstrap_Your_Own_AV-Proxies_Adaptive_Contrastive_and_Prototype_Learning_for_CVPR_2026_paper.html) · [官方 PDF](https://openaccess.thecvf.com/content/CVPR2026/papers/Zhang_Bootstrap_Your_Own_AV-Proxies_Adaptive_Contrastive_and_Prototype_Learning_for_CVPR_2026_paper.pdf)

标签：#对比学习 #自监督学习 #音视频 #音视频理解

评分：**6.6/10** | 创新 1.5/2 | 技术严谨 1.2/1.5 | 实验充分 1.0/1.5 | 清晰度 0.8/1 | 影响力 1.0/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 0.8/1.5

排名：前50% | 文档类型：方法研究

## 👥 作者与机构

- Junbo Zhang：机构信息未能从会议 PDF 纯文本可靠映射
- Hang Su：机构信息未能从会议 PDF 纯文本可靠映射
- Zhaofan Li：机构信息未能从会议 PDF 纯文本可靠映射
- Hang Dong：机构信息未能从会议 PDF 纯文本可靠映射
- Chao Sun：机构信息未能从会议 PDF 纯文本可靠映射

## 📌 核心摘要

音视分割输入为视频帧与对应音频片段，输出为发声目标的二值或语义掩膜，难点在于单模态语义不完备与跨模态语义鸿沟导致的融合噪声与边界模糊。图像与音频编码器先抽取多层视觉特征与音频向量，深层视觉经池化得到全局语义后送入自监督音频增强。该模块以跨模态注意力由音频分支预测视觉输出并以独立投影做对比学习，去噪后的音频嵌入进入动态原型约束。后者对浅层特征做可微像素分类并以动量更新的原型库施加自适应原型损失，再以音频查询的类别响应加权增强发声区域并送入分割头。与依赖SAM先验掩膜或离线原型中心及人工正负对阈值构图的方法不同，该框架全程在线自适应更新并降低跨域建模复杂度。在AVSBench的AVS-Object-S4任务下，BYOAVP的J&F为95.0，高于DDESEG的J&F94.2。该结论适用边界受限于仅在AVSBench与合成VPO基准验证，对野外长尾类别与强混响遮挡尚未验证，原文未披露训练、推理或部署成本。

## 🔗 开源与复现资源

本次未形成可展示的已核验资源记录，开放状态尚未核实。
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 输入是什么，输出是什么，为什么难？

本文的研究对象是音频视觉分割，英文名为 Audio-Visual Segmentation，简称 AVS。输入是一段视频的多帧图像加上与每帧一一对应的 1 秒音频片段，目标是逐帧输出发声物体的像素级掩码。在单声源子任务中只需做二值分割，判断每个像素是否属于当前发声体；在语义子任务中还要区分 71 类中的具体类别，例如吉他、鼓与人声。

难点首先来自白话所说的模态内噪声。视觉侧是目标与背景语义相近，例如演奏者手部与吉他粘连、路人遮挡；音频侧是多声部频率重叠，例如环境噪声盖住吉他泛音。论文图 1 用街头卖艺例子说明：只分割吉他时边界模糊且缺失琴头，同时分割吉他与人物时视觉混淆减轻，但音频噪声与跨模态错位仍导致边界不准。其次是跨模态语义鸿沟，音频是时频 1 维信号的全局嵌入，视觉是空间 2 维特征，直接融合会引入大量融合噪声。

必须保留的信息是：本文不引入离线先验掩码，不手工构造正负样本对，训练全程在线完成；视觉编码器采用 Swin-B，音频编码器采用 CLAP 中的 HTSAT，像素解码器采用多尺度可变形注意力。输出是发声增强后的掩码特征与语义对齐的查询向量，再送入分割头得到最终掩码。评价用 Jaccard 指数与 F 分数，越高越好。本文解读只讲该论文实际做的分割任务，举例均明确标为教学例子，不虚构效果数字。

### 已有路线在何处留下缺口？

第一条路线是特征融合解码。AVSBench 开创了多模态融合做密集预测的框架，后续用 Transformer 与音频查询增强交互。这类方法把重点放在跨模态交互与时空关联上，但对音频流与视觉流各自内部的噪声处理较少，一旦出现遮挡或混音，融合阶段会被噪声带偏。

第二条路线是引入数据依赖先验去噪。代表做法是用 SAM 生成先验掩码再与原图融合，或离线生成原型中心引导像素聚类。这能压制单模态噪声，但需要额外的分割大模型或离线聚类步骤，增加了建模复杂度，跨域泛化能力受限。第三条路线是对比学习做自适应对齐，例如 CAVP 与 CPM 跨视频手工构造正负对，RAVS 用相似度阈值在单帧内划分正负对。这类方法需要大批量、阈值调参与成对计算，在真实复杂场景下开销大且不稳定。

本文的定位是全自适应框架：音频侧用无负样本的自监督对比思想，视觉侧用在线动量原型替代离线先验，既不依赖 SAM，也不手工设阈值构造样本对。理解这一点才能明白后文为何在投影前加交叉注意力、为何在投影后把批量归一化换成组归一化。

### 论文把挑战拆成哪两个可操作问题？

论文把 AVS 的失败归纳为两个可操作问题。第一是音频表示被污染，需要在不丢失发声语义的前提下抑制背景音与离屏音。第二是视觉像素缺乏细粒度类别感知，需要在高分辨率层对每个像素做类别约束，并知道当前哪一类正在发声。前者对应自监督音频增强模块，后者对应动态原型约束模块。

为建立直觉，可以设想一个教学例子：输入 1 帧街头画面与 1 秒混有风声的吉他声。理想流程是先让音频特征向该帧全局视觉语义靠拢，滤掉风声；再让浅层视觉特征按类别中心分成吉他、人物与背景；最后用音频查询选出发声类别并增强对应像素。该例子仅用于说明流程，不代表论文报告过该样本的数值。

下图直观展示了噪声与定位难度，左列目标仅为吉他，右列目标为吉他与人物，可见单模态噪声与跨模态错位如何造成边界模糊与不完整分割。

> **看图路径：** 1. 对比左右两列顶行热力在吉他与人物区域的扩散范围；2. 查看中行频谱中噪声曲线如何覆盖吉他与人声曲线；3. 查看底行预测掩码在单目标与双目标下的缺失部位

[![原论文 Figure 1：llustration of challenges from intra-modal noise and fine-grained localization.](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/42a360322c48/figure-1.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/42a360322c48/figure-1.png)

*论文图 1。原论文 Figure 1：“llustration of challenges from intra-modal noise and fine-grained localization.”。*

该图上行是视觉语义相似度热力，中行是幅度谱随频率的变化，下行是预测掩码。观察可见：左列热力发散且掩码缺失琴头，中行噪声谱大面积覆盖目标谱；右列增加人物目标后视觉混淆有所缓解，但音频噪声依然存在，掩码边界仍不准确。这支持论文把问题拆分为音频去噪与像素级精确定位的合理性。

### BYOAVP 的全景数据流是怎样的？

BYOAVP 的英文全称是 Bootstrap Your Own AV-Proxies，核心是两个可学习的代理：增强音频嵌入与动态原型。沿一个样本走完全流程：图像帧经 Swin-B 得到 4 层特征，记为 V0 到 V3；音频片段经 HTSAT 得到向量 A。V3 经注意力池化得到全局视觉表示，A 经跨模态注意力得到初步对齐的音频表示，二者进入双分支投影与预测器做自监督对比。V0 进入原型剖分模块做像素级软分配，得到类别语义与像素权重，再与增强音频交互得到查询与掩码增强特征，最后与像素解码器输出一起进入分割头。

不同去噪范式的对比如图所示，本文方法不依赖离线掩码或离线聚类中心，而是训练中在线更新原型库。

> **看图路径：** 1. 对比(a) 离线掩码融合与(b) 离线聚类中心的外部依赖箭头；2. 查看(c) 中原型库与像素点之间的双向更新与约束箭头；3. 确认只有(c) 标注为在线随输入演化

[![原论文 Figure 2：Image denoising methods: (a) The pretrained SAM \[25\] model is employed to generate a prior mask,…](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/42a360322c48/figure-2.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/42a360322c48/figure-2.png)

*论文图 2。原论文 Figure 2：“Image denoising methods: (a) The pretrained SAM [25] model is employed to generate a prior mask, which is then fused with the original image information; (b) Offline generated…”。*

该图上半部分展示两种先验依赖做法：(a) 用预训练 SAM 离线生成掩码再融合，(b) 用密度聚类离线生成原型中心引导聚类；下半部分 (c) 是本文做法，原型库随机初始化，按每批像素分布以动量方式更新，并通过自适应原型损失约束分类。这解释了为何本文在推理时无需外部大模型。

整体架构如下图所示，橙色为主干与分割路径，蓝色为音频增强路径，粉色为原型约束路径。

> **看图路径：** 1. 沿图像编码器到像素解码器再到分割头的主路径走一遍；2. 找到下方音频分支经多头交叉注意力到预测器的梯度回传；3. 找到中部原型剖分到多头交叉注意力再到掩码增强的分支

[![原论文 Figure 3：Overall architecture of BYOAVP.](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/42a360322c48/figure-3.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/42a360322c48/figure-3.png)

*论文图 3。原论文 Figure 3：“Overall architecture of BYOAVP. After encoding, both image and audio inputs are transformed into feature representations.”。*

该图左侧为图像与音频编码器，中部下方是注意力池化、多头交叉注意力、投影与预测器构成的自监督分支，中部上方是原型剖分、多头交叉注意力与掩码增强构成的原型分支，右侧是像素解码器与分割头。箭头显示音频分支通过梯度回传学习预测视觉表示，原型分支通过更新箭头维护原型库。先有此全景，再进入各组件的计算细节才不易迷路。

### 自监督音频增强如何压制音频噪声？

自监督音频增强的英文是 Self-Supervised Audio Enhancement，简称 SSAE。它把音频与视觉看作同一实例的两个视角，借鉴 BYOL 与 SimSiam 无需显式负样本的思想，让音频分支预测视觉分支的输出。白话说就是用高级视觉语义当老师，约束音频表示去掉与画面无关的成分。

具体操作分 4 步。第一步取最后一层视觉特征 V3，展平为序列并在开头拼接均值池化 token，加上可学习位置嵌入后做多头自注意力，以均值 token 为查询对全序列做池化，得到全局表示，再经线性层对齐到音频维度。第二步做跨模态注意力：以池化视觉为查询，以音频 A 为键与值，输出记为 Aca，目的是在投影前先缩小语义鸿沟。第三步双分支独立投影，不共享权重，每个投影由两层线性、归一化与激活构成，但把最后一层批量归一化换成组归一化，以适应 AVS 常用的小批量训练。

第 4 步仅在音频分支加预测器，把音频嵌入映射到视觉语义空间，用负余弦相似度约束预测与视觉表示一致，并对视觉分支停止梯度，只更新音频侧。

**自监督音频增强 × 跨模态注意力：** 自监督音频增强负责压制音频分支内的环境噪声并向视觉语义靠拢，跨模态注意力负责在投影前先做 1 次语义对齐，二者搭配的原因是直接预测视觉输出跨度太大，先用注意力把音频特征拉到可比空间，再做无负样本的对比预测，组合后音频分支能保留发声目标而抑制离屏音。

该设计的关键取舍是：只用交叉注意力而不稳定嵌入空间，或只用归一化而不 bridging 语义鸿沟，单独启用都比不启用差；必须联合使用映射前交互与映射后归一化，才能学到更紧凑可分的音频表示。消融与可视化部分将用数字与分布图验证这一点。

### 动态原型约束如何实现细粒度定位？

动态原型约束的英文是 Dynamic Prototype Constraint，简称 DPC。它解决浅层视觉特征缺乏类别感知的问题。白话说就是先给每个像素发 1 个类别 soft 标签，再用正在发声的类别把对应像素调亮、把背景调暗。

计算从第一层特征 V0 开始，将其展平为 N 行像素，N 为高宽乘积。维护一个随机初始化的原型库，形状为类别数乘通道数。V0 与原型库相乘得到相似度 logits，V0 经线性投影也得到类别空间表示，二者相加后经 Gumbel-Softmax 得到软分配。对软分配按空间求和得到每类像素计数，再用软分配加权 V0 并除以计数，得到类别抑制后的语义嵌入。随后把增强音频投影为查询，以类别语义为键值做多头交叉注意力，得到发声类别权重与查询向量。

把该权重与软分配相乘并整形为像素权重图，与 V0 相乘再残差相加，得到掩码增强特征。原型库在每次计算末尾按像素语义位置以动量方式更新，并引入按像素占比计算的自适应权重与自适应原型损失来稳定分配。

**动态原型约束 × 像素级分类：** 动态原型约束负责维护随 batch 类别分布演化的类别中心，像素级分类负责把浅层高分辨率特征逐点划分到这些中心，二者搭配的原因是不依赖离线先验也能获得类别感知，组合后原型通过自适应原型损失约束分类，分类结果又反哺原型更新。

**原型库 × 动量更新：** 原型库负责存储每个类别的语义中心，动量更新负责按当前帧像素占比控制更新步长，二者搭配的原因是随机初始化的原型需要稳定而自适应地演化，组合后高频类别更新稍强、低频类别不被冲掉，保持训练稳定。

**发声响应分数 × 掩码增强特征：** 发声响应分数负责用增强音频查询类别语义来判断当前帧存在哪些发声类别，掩码增强特征负责把该分数回灌到像素空间以增强目标、抑制背景，二者搭配的原因是仅有分类不够，还需知道哪类正在发声，组合后分割头同时拿到增强的掩码特征与语义对齐的查询。

该模块的输入输出要记牢：输入是 V0、原型库与增强音频，输出是送入分割头的掩码增强特征与查询向量。原型更新发生在训练中，推理时直接使用已学到的原型库做约束，不再依赖离线聚类。

### 损失由哪三部分组成，优化条件是什么？

总损失由分割损失、自监督对比损失与自适应原型损失加权组成。分割损失本身是二值交叉熵、Dice 与 Focal 的组合，用于监督最终掩码。对比损失是音频预测与停止梯度的视觉表示之间的负余弦相似度，只回传音频分支。原型损失是对放大的相似度 logits 做对数柔性最大，再用软分配加权平均，用于规范原型与像素的对应关系。论文报告的权重设置为分割权重 5，对比权重 0.1，原型权重 1，Focal 内部权重另设，放大系数取 10。

训练条件按原文交代：批量大小为 4，优化器为 AdamW，初始学习率为 1e-4，权重衰减为 0.05。视觉编码器用 ImageNet-21K 预训练的 Swin-B，音频编码器直接使用在 22 个音频数据集上预训练的 CLAP 官方权重，像素解码器采用多尺度可变形注意力。论文未报告梯度裁剪、学习率衰减时刻与原型动量系数的具体数值，这些是复现时需要补齐的缺项，不能从模型名称推定。训练全程在线，无需 SAM 推理与离线原型生成，这是与先验方法的本质区别。

### 在哪些数据与协议下评测？

实验覆盖两个基准共 6 个子任务。AVSBench 包含单声源、多声源与语义 3 个子任务。单声源与多声源使用 5 帧片段，分别覆盖 23 类发声、4932 与 424 个视频，要求二值分割；语义子任务扩展到 10 帧输入、12356 个视频、71 类，要求语义级分割。VPO 是合成基准，用 COCO 单帧图像与语义掩码搭配 VGGSound 的 3 秒音频，覆盖 21 类，分为单源、多源与多源多实例 3 个子任务，样本量分别为 12202、9817 与 12855。

指标为 Jaccard 指数 J 与 F 分数 F，以及二者平均 J&F，均为越高越好。比较时需注意编码器与分辨率是否一致：本文 AVSBench 主表用 Swin-B 配 CLAP，输入为 224×224；部分先验方法用 MIT-B5 配 HTSAT，或用 Hiera 大模型配 1024×1024 输入；VPO 表中还报告可训练参数量，本文为 137.15M。公平阅读时应把编码器、音频特征与是否使用离线先验放在同一视野下比较，不能只看单一数字。

### 主结果在什么条件下成立？

主结果要回答：在相同 Transformer 主干与标准评测下，联合去噪与细粒度交互是否带来全面提升。比较的问题是各方法在单源、多源与语义任务上的 J&F 高低，公平条件是均报告 Transformer 主干结果并区分是否使用先验，指标方向为越高越好。

| 任务 | 指标 | 本方法 | 次优方法 | 差距 |
| --- | --- | --- | --- | --- |
| 语义 | J&F | 69.6 | 67.9 | 1.7 |

上表显示本文在 3 个任务上均领先，单声源领先离线原型方法的 94.2，多声源领先高分辨率 SAM 方法的 79.9，语义任务超出 1.7。代价是可训练参数多于部分轻量 Transformer 对手，但显著少于 AVSegFormer 的 186.05M，且训练无需离线先验。未胜出或需谨慎的边界是：部分对手用了更大输入分辨率或额外掩码先验，若统一分辨率与先验条件，差距可能变化；论文未报告延迟与推理帧率，不能从分割精度推定实时性。

定性对比如图所示，行分别为标签、音频、视频帧、真值与 3 种方法预测。

> **看图路径：** 1. 逐列对比真值与三种方法在发令枪边缘的完整度；2. 观察中间多声源列对吉他与人物的漏检差异；3. 观察右侧语义列对不同类别颜色的混淆情况

[![原论文 Figure 4：Qualitative comparison of our BYOAVP with AVSBench \[58, 59\] and VCT \[23\] on the AVSBench dataset.](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/42a360322c48/figure-4.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/42a360322c48/figure-4.png)

*论文图 4。原论文 Figure 4：“Qualitative comparison of our BYOAVP with AVSBench [58, 59] and VCT [23] on the AVSBench dataset.”。*

该图左组为发令枪单源，中组为钢琴吉他人物多源，右组为吉他鼓人物语义分割。可见本文在枪体边缘更完整，在中组对人物漏检更少，在右组对不同语义颜色的混淆更轻。但这只是代表性样本，不能推广为所有类别全程成立，需结合主表的平均指标理解。

### 哪些对照证明了模块的必要性？

消融要回答：拿掉任一模块或关键设计后提升是否还在。第一个比较问题是 SSAE 与 DPC 各自与联合的贡献，条件是固定编码器与训练配置，仅增减模块，指标为 J&F。

| 任务 | 指标 | 基线含义 | 联合提升 |
| --- | --- | --- | --- |
| 多声源 | J&F | 仅编码器加解码器 | 8.02 |
| 语义 | J&F | 仅编码器加解码器 | 7.72 |

上表说明单独加入任一模块已有明显增益，联合使用时在多声源与语义上分别提升 8.02 与 7.72，支持音频去噪与像素级交互互补的判断。热力可视化也显示从上到下模型逐渐聚焦发声体并压制周围噪声，但这属于定性支持，不能替代数字。

第二个比较问题是 SSAE 内部交叉注意力与归一化的搭配，条件相同，指标仍为 J&F。

| 任务 | 指标 | 关键搭配 | 相对批量归一化的增益 |
| --- | --- | --- | --- |
| 多声源 | J&F | 交叉注意力加组归一化 | 1.65 |
| 语义 | J&F | 交叉注意力加组归一化 | 0.85 |

上表显示只加注意力、只加批量归一化或只加组归一化都不如关闭 SSAE，只有交叉注意力与组归一化联合才稳定提升，在两任务上分别超过批量归一化版本 1.65 与 0.85。原因是组归一化不依赖批量统计，缓解了批量为 4 时的小批量不稳定。VPO 上的补充证据是三任务分别超出次优 0.5、2.9 与 2.2，多源与多实例增益更大，支持多目标感知与同类前景背景区分能力的解释。

| 基准 | 指标 | 单源增益 | 多源增益 | 多实例增益 |
| --- | --- | --- | --- | --- |
| VPO | J&F | 0.5 | 2.9 | 2.2 |

该表提示方法在复杂多源场景优势更明显，但 VPO 为合成数据，不能直接等同于野外泛化，跨域能力仍待更多真实数据验证。

### 还有哪些未验证与潜在代价？

论文直接报告的是精度与参数量，未测量误判率分解、训练时长、推理延迟与显存峰值，因此不能承诺这些量得到改善。总体趋势不等于每组都成立，例如语义任务中 71 类的长尾类别表现未单独报告，小批量下组归一化虽更稳定，但批量进一步变化时的敏感性未测试。

潜在代价包括双分支投影与预测器带来的额外计算，以及原型库维护与 Gumbel 采样的随机性。超参数如温度系数、放大系数与动量系数的选择依据在正文披露有限，复现时需以原文给出的 5、0.1、1 权重与 1e-4 学习率为起点，再补做敏感性分析。相关性不等于因果，t-SNE 更紧凑不能单独证明分割提升必然来自音频可分性，还需结合消融中关闭 SSAE 的对照来理解。

### 复现应先做什么，需要什么条件？

复现先做三件事。第一按原文准备数据划分与采样：AVSBench 按 5 帧与 10 帧两种输入长度，VPO 按单源、多源与多实例划分，音频切分为与帧对应的 1 秒或 3 秒片段，确保一一对应。第二锁定编码器权重来源：视觉用 ImageNet-21K 预训练 Swin-B，音频用 CLAP 官方 HTSAT 权重，不自行替换为 VGGish，否则对比条件改变。第三按原文配置训练：批量 4，AdamW，学习率 1e-4，权重衰减 0.05，损失权重 5、0.1、1，像素解码器用多尺度可变形注意力。

信息条件方面，资源状态显示本次未发现可验证的代码与权重链接，因此不能写代码已公开，只能按论文文字与公式重写流程。若未来获取官方实现，需核对原型初始化、动量更新时机、Gumbel 噪声采样与停止梯度位置是否与描述一致。建议先复现基线再逐步加入 SSAE 与 DPC，每步记录 J、F 与 J&F，避免把自动指标当作人工听感评价。

### 何时值得尝试这种方法？

当任务同时存在音频污染与视觉细粒度混淆，且不允许依赖 SAM 等外部先验时，本文的双代理思路值得尝试。音频侧用视觉语义做无负样本预测，适合小批量、野外数据；视觉侧用在线动量原型做像素约束，适合类别多、边界要求高的语义分割。反之，若已有高质量离线掩码或算力极受限，需权衡额外分支的开销。

对初学者而言，可复述的方法链是：全局视觉池化提供语义目标，跨模态注意力缩小鸿沟，独立投影加组归一化稳定小批量学习，预测器约束音频去噪；浅层特征经原型剖分得到软分配，自适应损失规范原型，音频查询选出发声类别并增强像素，最后由分割头输出掩码。记住每个数字的适用条件：95.0 与 80.5 来自特定编码器与分辨率，8.02 与 1.65 来自特定消融基线，脱离条件谈提升没有意义。

## 📐 原文公式与排版

以下展示论文原页中的数学表达区域，保留原始上下标、分式和符号排版。区域序号仅用于本文导航，不是论文公式编号。

[![原文数学表达区域 1，PDF 第 4 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/579a57f41bcf/figure-1.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/579a57f41bcf/figure-1.png)

区域 1 · [查看论文原页](https://openaccess.thecvf.com/content/CVPR2026/papers/Zhang_Bootstrap_Your_Own_AV-Proxies_Adaptive_Contrastive_and_Prototype_Learning_for_CVPR_2026_paper.pdf#page=4)

[![原文数学表达区域 2，PDF 第 5 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/579a57f41bcf/figure-2.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/579a57f41bcf/figure-2.png)

区域 2 · [查看论文原页](https://openaccess.thecvf.com/content/CVPR2026/papers/Zhang_Bootstrap_Your_Own_AV-Proxies_Adaptive_Contrastive_and_Prototype_Learning_for_CVPR_2026_paper.pdf#page=5)

[![原文数学表达区域 3，PDF 第 5 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/579a57f41bcf/figure-3.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/579a57f41bcf/figure-3.png)

区域 3 · [查看论文原页](https://openaccess.thecvf.com/content/CVPR2026/papers/Zhang_Bootstrap_Your_Own_AV-Proxies_Adaptive_Contrastive_and_Prototype_Learning_for_CVPR_2026_paper.pdf#page=5)

[![原文数学表达区域 4，PDF 第 5 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/579a57f41bcf/figure-4.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/579a57f41bcf/figure-4.png)

区域 4 · [查看论文原页](https://openaccess.thecvf.com/content/CVPR2026/papers/Zhang_Bootstrap_Your_Own_AV-Proxies_Adaptive_Contrastive_and_Prototype_Learning_for_CVPR_2026_paper.pdf#page=5)

[![原文数学表达区域 5，PDF 第 5 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/579a57f41bcf/figure-5.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/579a57f41bcf/figure-5.png)

区域 5 · [查看论文原页](https://openaccess.thecvf.com/content/CVPR2026/papers/Zhang_Bootstrap_Your_Own_AV-Proxies_Adaptive_Contrastive_and_Prototype_Learning_for_CVPR_2026_paper.pdf#page=5)

[![原文数学表达区域 6，PDF 第 5 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/579a57f41bcf/figure-6.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/579a57f41bcf/figure-6.png)

区域 6 · [查看论文原页](https://openaccess.thecvf.com/content/CVPR2026/papers/Zhang_Bootstrap_Your_Own_AV-Proxies_Adaptive_Contrastive_and_Prototype_Learning_for_CVPR_2026_paper.pdf#page=5)

另有 14 个候选区域因边界不明确或图片数量、尺寸限制未展开；请[查看完整论文](https://openaccess.thecvf.com/content/CVPR2026/papers/Zhang_Bootstrap_Your_Own_AV-Proxies_Adaptive_Contrastive_and_Prototype_Learning_for_CVPR_2026_paper.pdf)中的原始排版。

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。
- 评分规则：type-aware-v1
- 评分模型：muse-spark-1.3-contributor
- 评分请求协议：openai_responses

---

[← 返回 cvpr-2026 论文汇总](/posts/conference-cvpr-2026/)
