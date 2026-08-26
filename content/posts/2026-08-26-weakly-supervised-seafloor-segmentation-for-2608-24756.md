---
title: "Weakly Supervised Seafloor Segmentation for Seagrass Habitat Mapping in Side-Scan Sonar Imagery"
date: 2026-08-26
draft: false
tags: [音频理解, Transformer, 自监督学习, 低资源]
categories: [论文速递]
description: "音频理解 | 8.2/10"
hiddenInHomeList: true
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_arxiv_id: "2608.24756"
paper_digest_manual_depth: "full-text-evidence-v5"
---

# 📄 Weakly Supervised Seafloor Segmentation for Seagrass Habitat Mapping in Side-Scan Sonar Imagery

标签：#音频理解 #Transformer #自监督学习 #低资源

**8.2/10** | 创新 1.4/2 | 严谨 1.2/1.5 | 实验 1.1/1.5 | 清晰 0.9/1 | 影响 1.2/1.5 | 开源 1.2/1.5 | 复现 0.4/0.5 | 工程 0.8/1.5

🔥 **8.2/10** | 前25% | 文档类型：方法研究 | 评分置信度：中 | #音频理解 | #Transformer | #自监督学习 #低资源 | [arxiv](https://arxiv.org/abs/2608.24756)


### 👥 作者与机构

第一作者：Hayat Rajani（Computer Vision and Robotics Research Institute (ViCOROB), University of Girona, Spain）
通讯作者：Hayat Rajani
作者列表：Hayat Rajani、Nuno Gracias、Rafael Garcia（机构：Computer Vision and Robotics Research Institute (ViCOROB), University of Girona, Spain）

### 📌 核心摘要

海草床的蓝碳意义只用来说明为何需要地图，不承担方法归因。问题不是让声呐图块只会判类，而是完成侧扫声呐语义分割：用每图的类别存在标签恢复底质像素边界。作者把 ViT 编码器—解码器接入迭代弱监督框架，由分类分支生成类激活图（class activation map，CAM），再用针对声学低对比与弱边界调参的稠密条件随机场（dense CRF，dCRF）产生伪标签。类不平衡采样、Lovász-Softmax 和 EsViT 自监督初始化分别处理多类共现稀缺、目标—指标错位和无标签数据利用。

留出 transect 上，最终分割对人工真值达到 87.6% mIoU，伪掩码对人工真值达到 89.3%，而自监督预训练再增加约 3% mIoU。现场新设备数据展示了可迁移性，也暴露 blind zone 与阴影会诱发泥、岩误判。对水声研究者而言，价值在于它把 waterfall 几何校正、纹理表征、伪标签刷新和海底类别输出连成可复现路径；证据缺口则集中在逐损失数字、Dice、实际 FPS、现场真值以及跨海域统计，这些缺失决定它仍是可行性验证而非部署定论。通用光学分割文献仅作为声呐域差异的参照，不展开模型史。

### 🏗️ 方法概述和架构

输入从原始 12-bit SSS waterfall 开始，而不是已经拼好的光学式海床地图。回波先做对数压缩并归一化到 [0,1]，再依据平底假设用 \(r_g=\sqrt{r_s^2-h^2}\) 完成斜距校正，消除 nadir 压缩与盲区的几何影响。处理后的 waterfall 被切成 384×384 像素 patch，沿航向与横向步长都是 192 像素；这条输入路径保留纹理细节，也把重叠样本相关性带入训练。

监督端不提供轮廓，只给每个 patch 是否出现 Ripples、Rocks、Maerl、Mud 等类别的 0/1 向量。这样的标签成本远低于逐像素描边，但分类器可能只依赖全局回波统计，尤其当图块几乎都是单类别时，不必学会类别在空间中的位置。多类别 patch 比单类别 patch 更迫使分类器学习空间分离，这正是后续采样策略要放大的信号。

观察下图 Ripples、Rocks、Maerl、Mud 的 0/1 表格，可确认弱标签只表达共现而不包含像素位置。

[![Examples of patches generated from SSS waterfalls and the corresponding image-level ground truth.](https://arxiv.org/html/2608.24756v1/class_level_labels.png)](https://arxiv.org/html/2608.24756v1/class_level_labels.png)

左侧 6 个灰度声呐样例展示条纹、粗糙块和低回波纹理，右侧仅用 4 列二值标签记录类别存在性；图中没有彩色边界，因此多类别 patch 的空间分离必须从分类训练中自行涌现，单类别多数仍会削弱这种定位。


网络主体把共享 ViT 编码器接到分类与分割双出口：分类头产生类别分数和 CAM，解码器产生最终像素图。分类头在编码特征之后使用全局平均池化与 1×1 卷积，CAM 将类别权重投回空间位置；它通常只点亮最有判别力的纹理，因此原始掩码会碎裂，且不一定贴合海床类型交界。

沿着下图 SSS patch、CAM、dCRF 与 decoder 的箭头，可以核对分类与分割双出口如何把图像级标签变成伪像素监督。

[![The overall weakly-supervised segmentation framework. (a) denotes the encoder, (b) denotes the classification sub-network, and (c) denotes the decoder.](https://arxiv.org/html/2608.24756v1/wsss_framework.png)](https://arxiv.org/html/2608.24756v1/wsss_framework.png)

图左的灰度 SSS patch 与类别向量共同进入编码器和分类头，彩色 CAM 经 dCRF 变成四色 pseudo mask，再回流监督解码器；回流箭头揭示它是迭代自训练闭环，也提醒读者边界质量仍受声学强度线索约束。


CAM 阈值化后进入 dCRF。其 unary 项来自软 CAM，双边项依据像素强度与位置鼓励相似邻域同类，空间平滑项压制孤立跳变；作者面向声学斑点、低对比和弱边界搜索空间与强度尺度、双边和空间核权重以及推断迭代次数。因此 dCRF 的价值是把声学纹理的一致性注入伪标签，而不是替网络补出从未观测的类别。

精炼伪掩码以逐像素损失监督解码器，随后再次生成 CAM 和伪标签，构成循环自训练。原始 CE 容易被多数类与不完整伪标签牵引，Focal 强调难像素，Lovász-Softmax 则以 Jaccard/IoU 的凸替代直接对齐 mIoU；作者固定其他设置逐一比较并选择 Lovász-Softmax。推理时只需输入预处理 SSS patch，经编码器—解码器输出底质类别图，但分类头和 dCRF 产生的训练偏差已经写入模型。

此外，编码器先在未标注 SSS 档案上用 EsViT 自监督预训练。student 处理全局与局部视图，teacher 只看全局视图并以指数移动平均更新，区域级目标补充 DINO 式视图一致性，以学习声呐小尺度纹理。预训练权重再初始化分类和分割分支，该阶段不改变弱标签形式，只改变进入自训练闭环的表征起点。

### 💡 核心创新点

1. 既有 ISIM 面向自然图像，原始 CAM 在声呐低对比、斑点与弱边界上容易碎裂。本文没有声称新网络，而是重调 dCRF 的空间、强度、核权重和迭代设置，让伪掩码利用 SSS 局部一致性；89.3% 的伪掩码—人工真值 mIoU 支持精炼有效，但没有原始 CAM 或默认 dCRF 的定量对照。

2. 强烈的单类别多数会让多标签分类从全局纹理完成任务，少数类权重因正梯度不足而产生稀疏甚至空 CAM。作者按多类别样本数量抽取单类别图块，使真正要求空间分离的样本获得可比梯度份额；该机制有明确失效分析，却没有独立报告采样前后的 mIoU。

3. CE、Focal 与 Lovász-Softmax 的比较把弱监督噪声和评价目标联系起来。Lovász-Softmax 直接近似 IoU，作者据此选择它并观察更好的类别边界；正文未给出逐损失数值或类别级结果，因此证据目前只支持损失选择，独立贡献的量级仍未知。

4. EsViT 自监督初始化提供了最直接的同主干消融：在上述结果上再增加约 3% mIoU。约 1M 个未标注 SSS 图块让编码器先学习区域纹理，再用约 36,000 个带像素掩码的子集构造弱标签训练与评测；收益仍只在同一数据来源上报告，跨海域迁移需由现场证据另行检验。

5. 现场比较没有简单宣布弱监督胜过全监督，而是显示二者对无纹理声学区域的归纳偏置不同。中央盲区与阴影使全监督模型把局部判成泥和岩，弱监督模型则把整段吸附为泥；这种负面结果把海底泛化边界从抽象域移具体化为采集几何和第一底回波伪影。

### 📊 实验结果

留出 transect 的结果需要按比较对象拆开读取；均值交并比（mean Intersection over Union，mIoU）越高越好，Dice 虽是常见分割指标，但本文没有报告。

| 方法 / 产物 | 数据集 / 划分 | 比较对象 | mIoU↑ | Dice↑ |
|---|---|---|---:|---:|
| 像素预测 | 留出 test transect | 像素预测对伪分割掩码 | 92.94% | 未报告 |
| dCRF 伪掩码 | 人工标注 test set | 伪掩码对像素真值 | 89.3% | 未报告 |
| 弱监督 segmentation branch | 人工标注 test set | 弱监督分割对像素真值 | 87.6% | 未报告 |
| EsViT 自监督预训练 | 未标注 SSS 档案，预训练后弱监督微调 | 相对无自监督预训练的同主干 | 约 +3% mIoU | 未报告 |

这 3 个数字回答的是不同问题：最高的 92.94% 对应伪监督一致性，并非对人工真值的最终分割精度。92.94% 衡量解码器与其伪监督目标的一致性，89.3% 衡量 dCRF 伪标签接近人工边界的程度，87.6% 才是无像素监督训练的分割输出对人工真值；两者相差 1.7 个百分点，提示解码器还会损失部分伪标签质量。自监督约 +3% 是同主干初始化消融，但正文没有说明它是绝对百分点还是相对百分比，也没有给出最终逐类数值。

数据规模解释了为何无标签预训练与采样同时重要，但论文出现约 36,000 个标注图块与训练段约 38,000 张图的不同口径，二者关系未交代。下面进一步追问：无标注预训练、标注评测和弱监督训练分别用了多大规模、怎样的类别结构？

| 数据证据 / 设置 | SSS 图块规模 | 类别结构 / 用途 | 训练作用 |
|---|---:|---|---|
| 自监督档案 | 约 1M | 未标注、加泰罗尼亚多种底栖生境 | EsViT 表征学习 |
| 标注子集 | 约 36,000 | 12 类像素掩码 | 构造图像级弱标签并制作评测真值 |
| 弱监督训练统计 | 约 38,000 | 约 9,250 张双类别，少于 550 张含 3 类或更多 | 多类感知随机采样 |

样本构成说明多数图块无需空间分离就可完成分类，因此采样不是普通均衡技巧，而是迫使 CAM 学定位的条件。论文称 Lovász-Softmax 在 CE 与 Focal 中最有效，却没有数表；该结论只宜作定性选择依据，缺少定量排名所需数表。伪掩码演化图提供了数值之外的机制证据：早期色块残缺，训练推进后边界趋于连续。这说明迭代确实会改变目标形状；单张可视化只提供机制线索，类别级 IoU、Dice 与多次运行统计仍缺失。

现场航线把不同传感器与采集条件带进测试，也暴露了最关键的域外边界。Girona1000 AUV 搭载 Klein 3000 SSS，在西班牙 St. Feliu de Guixols 港口记录短 transect；结果图中，合并 port 与 starboard 的中央区域受 blind zone 和第一底回波阴影影响。全监督模型把无特征区域错分为泥、把暗阴影错分为岩，弱监督模型则因没有学到“阴影是岩”而把整段判为泥。因此现场试验支持模型能够运行在新声呐数据上，却没有提供足以量化跨海域泛化的真值指标。整组结果的共同边界是：可视化不能替代类别级 IoU、Dice、多次运行统计或现场真值。

比较下图现场航线在不同传感器条件下的 Fully-supervised 与 Weakly-supervised output，可定位中央 blind zone 的错误模式。

[![Comparison of results between fully- and weakly-supervised models during field trials.](https://arxiv.org/html/2608.24756v1/results_field.png)](https://arxiv.org/html/2608.24756v1/results_field.png)

图中原始 waterfall 中央可见连续黑色盲区；全监督输出沿该带出现细窄的岩石色与其他碎片，弱监督输出则把整条带涂成泥色。这个差异与第一底回波附近阴影一致，其作用限于展示错误模式，跨海域泛化幅度仍无真值指标。

### 🔬 细节详述

BenthiCat 的 raw 12-bit SSS waterfall 先按 \(I'_{normalized}=\ln(1+I_{raw})/\max(\ln(1+I_{raw}))\) 压缩到 [0,1]，再用 \(r_g=\sqrt{r_s^2-h^2}\) 做斜距校正。切片为 384×384 像素、双方向 stride 192；作者报告约 12 类，但没有列出本次 train/validation/test 的逐类数量、航线长度或地理隔离规则。

弱监督主训练在 NVIDIA A100 上跑 50 epochs，batch size 64。优化器为 AdamW，weight decay 1e-2，初始 learning rate 6e-5，polynomial scheduler 配 3 epochs warm-up；CAM 每 20 epochs 更新并经固定 dCRF 配置重建伪标签。增强包括随机旋转、random resized crop、水平与垂直翻转、对比度或锐化变化和 Gaussian blur。

自监督 EsViT 预训练运行 300 epochs，learning rate 5e-4，polynomial scheduler 配 10 epochs warm-up。teacher 由 student 的指数移动平均更新，并同时使用 view-level 与 region-level 匹配；正文没有在本篇列出 teacher momentum、temperature、全局/局部 crop 数量或预训练 batch size，需依赖所引代码。

实现环境为 PyTorch 1.11.0 与 Python 3.8.10。部署评测设备是 NVIDIA Jetson AGX Orin Developer Kit，Jetpack 5.1.1、Python 3.8.10、PyTorch 2.0.0+nv23.5；论文声明报告 FPS，却没有在受控全文中给出具体 FPS、延迟、显存、功耗或 batch 条件，因此实时性仍缺可核验数值。

复现最明显的缺口是 dCRF 最优空间与强度标准差、双边核和空间核权重、推断迭代数，以及 CAM 阈值均未列出。数据划分只写 manually annotated test set 和 held-out transect，未说明随机种子、重复次数或置信区间。正文给出了主训练与 EsViT 预训练的硬件、优化器、学习率和日程。

部署复核还要保留声呐采集链差异：现场使用 Girona1000 AUV 搭载 Klein 3000 SSS，而训练档案覆盖加泰罗尼亚沿岸多种底栖生境。论文没有给出训练与现场设备的频率、量程、拖鱼高度、增益或航速对齐方法，也没有说明 port 与 starboard 合并时怎样掩蔽中央盲区；这些参数会改变回波纹理和第一底回波阴影，是迁移评测需要单独记录的输入条件。

### 🚨 局限与问题

留出 transect 的高 mIoU 依赖后来人工制作的像素真值，论文没有交代该划分的长度、类别分布、重复试验或置信区间。不同损失的排序只给出 Lovász-Softmax 最优的结论，没有逐损失数字；Dice、类别级 IoU 与 Jetson AGX Orin 的实际 FPS 也未给出。现场图进一步表明第一底回波附近的盲区和阴影仍会把声学外观映射成泥、岩等错误类别。

### 进一步审视

留出 transect 的人工真值支持 87.6% mIoU，但测试规模、逐类分布、Dice、类别级 IoU、方差、置信区间和重复试验均未披露。约 +3% 预训练增益没有说明绝对或相对口径；CE、Focal、Lovász-Softmax 与 dCRF 调参也缺完整数表，组件归因只能算部分消融。

海底泛化证据集中在加泰罗尼亚 BenthiCat 与一处港口短航线，尚未覆盖不同海床地貌、频率、拖鱼高度、航速、增益、海况或海草物种。Jetson AGX Orin 仅给环境而无实际 FPS 和资源测量，因而在线 AUV 部署仍需新的真值航线、吞吐—精度联合评测和针对 blind zone 的显式建模。

### 🔗 开源与复现资源

弱监督主代码已在 https://github.com/CIRS-Girona/w-s3Tseg 发布，正文称其中包含全部超参数配置。EsViT 自监督阶段另指向 https://github.com/DeeperSense/deepersense-seafloorscan/tree/main/self_supervised/esvit。开源分只认可上述由正文直接声明的实现；BenthiCat 是被引用的数据集，正文没有明确说明本文随附下载，训练权重、现场航线数据与可交互 Demo 也未说明。

### 💡 研究者判断

高 mIoU 不是这篇论文最值得记住的部分，真正的贡献是把声呐弱标签为何会失去空间定位、怎样用 dCRF 和采样修补、又会在 blind zone 如何失败讲成完整链路。遗憾也很具体：没有逐损失数表、Dice、现场真值和实际 FPS，使海岸尺度部署仍停在可信原型而非充分验证。

`<details>`
`<summary>`⚖️ 评分理由（展开查看）`</summary>`

* 创新性 (1.4/2)：论文明确承认不提出新模型，创新来自 dCRF 声学调参、类不平衡采样、IoU 对齐损失和无标签预训练的组合，因此给出中高而非满分。

* 技术严谨性 (1.2/1.5)：输入、CAM、dCRF、伪标签与解码器闭环交代清楚，也说明弱边界与类不平衡机理，但 dCRF 搜索空间和最优参数未披露。

* 实验充分性 (1.1/1.5)：留出航线、人工真值、自监督增益与现场失败均有证据，不过损失函数没有逐项数字，Dice、类别级指标、方差和现场定量真值缺失。

* 清晰度 (0.9/1)：结构图、伪掩码演化和现场对比让信息流易于追踪；个别数据规模在正文前后约 36,000 与约 38,000 的口径关系没有解释。

* 影响力 (1.2/1.5)：弱标签声呐分割直指深水、浑水海草制图的标注瓶颈，潜在生态监测价值较高，但证据只覆盖加泰罗尼亚数据和一处短现场航线。

* 开源 (1.2/1.5)：正文给出弱监督训练与 EsViT 预训练的配套 HTTPS 代码库，因此按已发布核心代码计分；权重和本文数据交付状态仍未说明。

* 可复现性 (0.4/0.5)：训练轮数、优化器、学习率、切片和软件版本较完整，然而 dCRF 最优参数、CAM 阈值、划分细节及随机种子不足以无歧义复现。

* 工程/实践价值 (0.8/1.5)：作者在 Jetson AGX Orin 上评测并以 FPS 为口径，但没有报告具体吞吐、延迟、功耗或内存数字，工程分受此直接限制。

`</details>`

---

[← 返回 2026-08-26 语音/音乐/音频论文速递](/audio-paper-digest-blog/posts/2026-08-26/)
