---
title: "Weakly Supervised Seafloor Segmentation for Seagrass Habitat Mapping in Side-Scan Sonar Imagery"
date: 2026-08-26
draft: false
tags: [音频理解, Transformer, 自监督学习, 低资源]
categories: [论文速递]
description: "音频理解 | 8.1/10"
hiddenInHomeList: true
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_arxiv_id: "2608.24756"
paper_digest_manual_depth: "full-text-evidence-v5"
---

# 📄 Weakly Supervised Seafloor Segmentation for Seagrass Habitat Mapping in Side-Scan Sonar Imagery

标签：#音频理解 #Transformer #自监督学习 #低资源

**8.1/10** | 创新 1.3/2 | 严谨 1.2/1.5 | 实验 1.1/1.5 | 清晰 0.9/1 | 影响 1.2/1.5 | 开源 1.2/1.5 | 复现 0.4/0.5 | 工程 0.8/1.5

🔥 **8.1/10** | 前25% | 文档类型：方法研究 | 评分置信度：中 | #音频理解 | #Transformer | #自监督学习 #低资源 | [arxiv](https://arxiv.org/abs/2608.24756)


### 👥 作者与机构

第一作者：Hayat Rajani（Computer Vision and Robotics Research Institute (ViCOROB), University of Girona, Spain）
通讯作者：Hayat Rajani
作者列表：Hayat Rajani、Nuno Gracias、Rafael Garcia（机构：Computer Vision and Robotics Research Institute (ViCOROB), University of Girona, Spain）

### 📌 核心摘要

这篇工作要解决的矛盾很具体：侧扫声呐（side-scan sonar，SSS）图块的图像级标签只能说“出现过哪类底质”，海草制图却要为每个像素给出底质边界。作者并未提出新的网络，而是把既有弱监督框架接到 SSS：共享的 ViT 编码器一边服务多标签分类，一边服务像素解码；分类分支产生类激活图（class activation map，CAM），稠密条件随机场（dense conditional random field，dCRF）再依照声学强度和邻域把 CAM 种子整理为伪掩码，解码器据此学习最终分割。

这条链路的目标域证据是：人工标注 test set 上，dCRF 伪掩码对真值为 89.3% mIoU，最终弱监督 segmentation branch 对真值为 87.6% mIoU；留出 transect 的 92.94% 只衡量预测与伪掩码的一致性，难以当作最终真值精度。EsViT 自监督预训练在该闭环上再带来约 +3% mIoU，说明未标注 SSS 纹理对初始化有帮助。

真正限制结论的不是分数高低，而是图像级到像素级的声学假设。港口现场图里，port 与 starboard 拼接处的第一底回波盲区和阴影会被误当底质：全监督模型把无特征区判泥、暗影判岩，弱监督模型则把整条区域压成泥。因而论文证明了低标注 SSS 分割可行，尚未证明跨海域鲁棒或可实时部署：现场缺少像素真值，正文也缺少实际 FPS、延迟或资源数值。

### 🏗️ 方法概述和架构

输入不是光学正射底图，而是原始 12-bit SSS waterfall。回波先作 \(I'_{normalized}=\ln(1+I_{raw})/\max(\ln(1+I_{raw}))\) 的对数压缩与归一化，再在平底假设下用 \(r_g=\sqrt{r_s^2-h^2}\) 做斜距校正；这一步针对 nadir 压缩和盲区。随后数据以 384×384 像素切片，沿航向和横向 stride 均为 192。模型看到的是保留斑点、纹理和几何伪影的重叠声呐 patch，而非已经人工勾边的语义地图。

每个 patch 的训练标签只是一串类别存在位，例如 Ripples、Rocks、Maerl、Mud 是否出现。它显著降低标注成本，却缺少告诉分类器这些类别在何处。单类别图块占多数时，多标签分类可从全局回波统计答对，CAM 也就容易只覆盖最显著纹理或完全忽略少数类；只有多类别图块才迫使它把共现底质在空间上分开。

请观察下图中 SSS patch 的训练标签：Ripples、Rocks、Maerl、Mud 的 0/1 值只给类别存在性，并未提供任何像素边界。

[![Examples of patches generated from SSS waterfalls and the corresponding image-level ground truth.](https://arxiv.org/html/2608.24756v1/class_level_labels.png)](https://arxiv.org/html/2608.24756v1/class_level_labels.png)

图中左侧是 6 个灰度 SSS patch，右侧是 4 列类别存在标签；标签只记录某类是否出现，未画出分割轮廓。这解释了 CAM 为什么要从多类别图块的共现中获得定位线索；图也只说明，难以证明单类别训练会得到同样的空间边界。


共享 ViT 编码器之后分成 2 个出口。分类出口由全局平均池化和 1×1 卷积给出类别分数，并把类别权重投回特征图形成 CAM；CAM 的职责是提供“哪里可能有这某类”的种子，不是完整边界。分割出口是解码器，职责是把被监督的特征还原为每像素底质类别。二者共享编码器，所以分类分支是否真正学到空间区分会直接决定解码器接收到何种伪监督。

请沿下图 Fig. 1 的箭头追踪共享 ViT 编码器、classification sub-network、CAM、dCRF、pseudo mask 与 decoder，核对每个出口的输入和输出。

[![The overall weakly-supervised segmentation framework. (a) denotes the encoder, (b) denotes the classification sub-network, and (c) denotes the decoder.](https://arxiv.org/html/2608.24756v1/wsss_framework.png)](https://arxiv.org/html/2608.24756v1/wsss_framework.png)

图中 SSS patch 和 image-level label 从左侧进入 encoder 与 classification sub-network，彩色 CAM 经 dCRF 变成 pseudo mask，再以箭头反馈给 decoder。这条回路表明 dCRF 整理 CAM 种子而非新观测；它利用声学连续性，却只依据种子，难以凭空分辨盲区、阴影和真实泥底。


CAM 阈值化后交给 dCRF，而不是交给额外可学习的网络层。其 unary 项来自软 CAM；双边项根据像素强度和位置偏好相似邻域同类；空间项抑制孤立跳变。作者为低对比、斑点噪声和弱边界的 SSS 调节空间/强度尺度、双边与空间核权重及推断迭代数。dCRF 因而能把局部声学连续性写入伪掩码，但无法凭空分辨盲区、阴影和真实泥底。

精炼伪掩码以逐像素损失训练解码器，训练每 20 epochs 重算 CAM、再经 dCRF 刷新伪标签，形成 CAM→伪掩码→decoder→更强 CAM 的闭环。为避免多数类和不完整伪标签主导，作者比较 CE、Focal 与 Lovász-Softmax，并选用直接近似 IoU 的 Lovász-Softmax；同时按多类别样本数抽取单类别样本，让真正需要空间分离的图块占据可比梯度份额。论文只给出损失选择的定性结论，未给逐损失数表。

EsViT 位于闭环之前：它在约 1M 个未标注 SSS tiles 上预训练编码器。student 同时看全局和局部视图，teacher 只看全局视图并用 student 的指数移动平均更新；region-level 目标补足 view-level 自蒸馏，力图保留小尺度声呐纹理。预训练权重随后初始化分类和分割两出口。推理时只保留预处理输入和编码器—解码器输出，dCRF 与 CAM 的作用已体现在训练过的参数中。

### 💡 核心创新点

1. 改变是把 CAM 的“判别性热点”改造成对 SSS 更有用的伪像素标签。自然图像上的 CAM 面对声呐斑点、低对比和弱边界会碎裂；本文保留 ISIM 骨架，却对 dCRF 的声学相关参数做搜索，使强度与位置相近的像素更可能连成同类。人工真值上的 89.3% mIoU 表明精炼后的伪掩码已有可用边界质量；但论文缺少原始 CAM 或默认 dCRF 的并列数字，难以把该数值单独归因于调参。

2. 类不平衡的改变是把类不平衡解释为定位问题，而非仅是类别频率问题。约 38,000 个训练图中约 9,250 个含 2 类、少于 550 个含至少 3 类；单类别多数让分类器不必学习类间空间边界，少数类的正梯度也不足。按多类别样本数配比抽取单类别图块，试图让 CAM 学到共现时的空间分离。这个因果链很清楚，但采样前后 mIoU 缺少单独报告，因此它是一项合理设计而非已量化的贡献。

3. 把优化目标对齐到评测指标。CE 对不完整伪标签和多数类敏感，Focal 强调难像素，Lovász-Softmax 则以 Jaccard 的凸替代直接近似 mIoU。作者在其余训练设置固定时比较 3 种损失并称 Lovász-Softmax 最有效；现有证据支持最终选择的方向，未支持 3 种损失之间的精确排序或优势幅度。

4. EsViT 预训练把表征学习接到弱监督闭环之前，而不是再增加额外分割分支。约 1M 个加泰罗尼亚沿岸未标注 SSS tiles 先教编码器保留局部纹理；在同一弱监督流程中，这一初始化让 mIoU 约增 +3%。这是直接的同主干表示消融，但“约 +3%”缺少说明是绝对百分点还是相对百分比，也尚未跨海域验证。

5. 最后，现场图把失败模式变成了方法结论的一部分。Klein 3000 SSS 的 port/starboard 合并带包含第一底回波附近的盲区与阴影：全监督模型在无特征区偏向 mud、在暗影偏向 rocks，弱监督模型把整段更多归为 mud。它说明 2 种监督会把同一声学伪影吸附到不同类别，难以说明任一方法已经解决了设备迁移。

### 📊 实验结果

实验应按证据对象读，而非把所有 mIoU 混为成绩单。下表先回答：伪监督闭环的各环节在什么对象上被测量？mIoU 越高越好；Dice 和类别级 IoU 在本文缺少给出。

| 证据柱 / 方法 | 数据集或条件 | 比较对象 | mIoU↑ | 这项证据支持什么 |
|---|---|---|---:|---|
| 闭环一致性：pixel-level predictions | test transect | pseudo segmentation masks | 92.94% | 解码器能贴近迭代生成的伪目标 |
| 目标域伪标签：dCRF pseudo segmentation masks | 人工标注 test set | pixel-level ground truth | 89.3% | dCRF 伪掩码接近人工边界 |
| 目标域输出：weakly-supervised segmentation branch | 人工标注 test set | pixel-level ground truth | 87.6% | 仅用图像级监督训练的最终分割可对齐真值 |
| 表示消融：EsViT self-supervised pre-training | unlabelled SSS pre-training 后的弱监督流程 | 无预训练的同主干结果 | 约 +3% | 无标注表征在该数据来源上带来增益 |

92.94% 难以被写成最终性能，因为它比较的是 pixel-level predictions 与 pseudo segmentation masks；87.6% 才是 segmentation branch 对 pixel-level ground truth 的目标域结果。89.3% 与 87.6% 相隔 1.7 个百分点，说明解码器缺少完全保住伪掩码接近真值的程度。该差距是同一测试语境下的表征现象，难以据此推断所有类别均匀退化。约 +3% 预训练收益是最直接的同主干证据，但作者缺少报告其绝对/相对口径，也缺少逐类结果。

训练数据的组成解释了为什么采样和自监督都重要。

| 数据或训练组 | 规模与类别结构 | 在证据链中的位置 |
|---|---|---|
| 自监督档案 | 约 1M 个加泰罗尼亚 SSS tiles，未标注 | EsViT 学习声呐纹理初始化 |
| 标注子集 | 约 36,000 tiles、12 类像素掩码 | 派生图像级标签并制作人工真值评测 |
| 弱监督训练统计 | 约 38,000 SSS images；约 9,250 个含 2 类，少于 550 个含至少 3 类 | 说明单类别多数为何会削弱 CAM 定位 |

论文缺少解释约 36,000 与约 38,000 的口径关系，因此难以据此重建准确划分。它也仅定性称 Lovász-Softmax 在 CE 和 Focal 中最有效；Fig. 3 的伪掩码演化能展示边界如何逐步连通，却难以替代逐损失数字、Dice、重复试验或置信区间。

现场试验构成第 3 根证据柱：Girona1000 AUV 搭载 Klein 3000 SSS，在 St. Feliu de Guixols 港口采集短 transects。它测试的不是带像素真值的公开泛化基准，而是新传感器与采集条件下的错误形态。port 与 starboard 合并的中央带受 blind zone 与 first bottom return 阴影干扰；全监督模型把无特征区偏 mud、暗影偏 rocks，弱监督模型把整段更倾向 mud。因而现场图支持“模型能运行且失效机制可见”，不支持“跨海域 mIoU 已验证”。

请比较下图的现场试验 waterfall、fully-supervised 与 weakly-supervised 输出，观察 port/starboard 合并中央的 blind zone 和 first bottom return 阴影怎样改变 mud、rocks 判断。

[![Comparison of results between fully- and weakly-supervised models during field trials.](https://arxiv.org/html/2608.24756v1/results_field.png)](https://arxiv.org/html/2608.24756v1/results_field.png)

图中原始 waterfall 中央有连续低回波合并带，2 种输出在这一区域给出不同色块与类别归属。结合现场试验图注，它对应 blind zone 和 first bottom return 阴影；全监督更易给出 mud/rocks，弱监督把该带更多归为 mud。现场图仅支持模型能运行且失效机制可见，却难以提供现场真值分数，更不支持跨海域 mIoU 已验证。

### 🔬 细节详述

数据处理和训练条件如下。12-bit waterfall 经对数压缩、[0,1] 归一化与斜距校正后切为 384×384 patch，双方向 stride 为 192。主弱监督训练使用 NVIDIA A100 Tensor Core GPU，50 epochs、batch size 64；AdamW 的 weight decay 为 1e-2，初始 learning rate 为 6e-5，polynomial scheduler 有 3 epochs warm-up。CAM 每 20 epochs 更新，再以固定的 dCRF 配置生成伪标签。增强包括随机旋转、random resized crop、水平/垂直翻转、对比度或锐化变化与 Gaussian blur。实现环境是 PyTorch 1.11.0、Python 3.8.10。

EsViT 预训练使用 300 epochs、learning rate 5e-4、polynomial scheduler 与 10 epochs warm-up。student/teacher 与 view-level、region-level 的对象在论文中说明，但 teacher momentum、temperature、全局/局部 crop 数、预训练 batch size 均未披露。主文把 dCRF 空间/强度标准差、双边核与空间核权重、推断迭代数和 CAM 阈值留在代码配置中；因此即使代码已发布，正文仍不足以无歧义复现伪标签。

评测一端，作者先在 manually annotated test set 测试，再在 Girona1000 AUV 加装 Klein 3000 SSS 的 St. Feliu de Guixols 现场短 transects 上观察输出。部署环境列为 NVIDIA Jetson AGX Orin Developer Kit、Jetpack 5.1.1、Python 3.8.10 与 PyTorch 2.0.0+nv23.5，并说以 FPS 报告推理速度；受控全文缺少任何 FPS、延迟、显存、功耗或 batch 条件数值。训练/验证/test 的空间隔离、逐类样本数、随机种子、重复次数和置信区间也未说明。

复现时最容易被忽略的是声呐采集链：训练档案来自加泰罗尼亚沿岸，现场来自另一港口与 Klein 3000，但论文缺少报告频率、量程、拖鱼或 AUV 高度、增益、航速，以及 port/starboard 合并如何处理中央盲区。它们会改变回波纹理和阴影分布，因而是复现实地迁移时必须另行记录的输入条件。尤其应把盲区掩蔽策略与现场真值采样同步保存并复核。

### 🚨 局限与问题

留出 transect 的高 mIoU 依赖后来人工制作的像素真值，论文缺少交代该划分的长度、类别分布、重复试验或置信区间。不同损失的排序只给出 Lovász-Softmax 最优的结论，缺少逐损失数字；Dice、类别级 IoU 与 Jetson AGX Orin 的实际 FPS 也未给出。现场图进一步表明第一底回波附近的盲区和阴影仍会把声学外观映射成泥、岩等错误类别。

### 进一步审视

论文证据直接支持的边界有 4 类。其一，87.6% mIoU 来自人工标注 test set，但测试规模、逐类分布、划分长度、重复次数和置信区间未披露。其二，CE、Focal、Lovász-Softmax、dCRF 调参和采样策略缺少完整数表；约 +3% 预训练增益也未说明绝对或相对口径，所以组件归因只能算部分消融。其三，Dice、类别级 IoU 和 Jetson 的实际 FPS 缺少数值。其四，现场图明确显示第一底回波盲区与阴影会转化为 mud/rocks 的系统性误分。

进一步看，BenthiCat 与 St. Feliu de Guixols 的短现场航线不足以覆盖不同海床地貌、设备频率、量程、姿态、航速、增益、海况或海草物种。现场缺少像素真值，因而图中视觉上合理的迁移难以量化为跨域泛化。要把原型推进到 AUV 在线制图，需要在多设备、多海域航线保留独立真值，并联合报告类别级精度、盲区处理、吞吐、延迟、显存和功耗。

### 🔗 开源与复现资源

论文直接给出弱监督主实现 https://github.com/CIRS-Girona/w-s3Tseg，并称其包含全部超参数配置；EsViT 阶段给出 https://github.com/DeeperSense/deepersense-seafloorscan/tree/main/self_supervised/esvit。可确认的是代码路径，不是本文权重或现场数据的交付。BenthiCat 在正文中被作为引用数据集，论文未明确声明由本文随附下载；可交互 Demo、训练权重、现场 transects 与可复用的现场真值也都缺少说明。

### 💡 研究者判断

这篇论文最有价值的地方，是缺少把“少标注”偷换成“少机制”：它清楚暴露了从类别存在标签到像素边界必须经过 CAM 种子、声学 dCRF 和解码器自训练的链条。87.6% mIoU 与约 +3% 初始化收益值得关注，但更该记住 Fig. 6 的反例——当第一底回波的盲区和阴影进入画面，模型会把采集几何错当底质。它是很有启发性的弱监督声呐原型，不是已被现场真值和吞吐测量充分背书的海岸尺度部署方案。

<details>
<summary>⚖️ 评分理由（展开查看）</summary>

* 创新性 (1.3/2)：作者明确说明不提出新模型；首次将既有 WSSS 流程适配到侧扫声呐，并组合声学 dCRF 调参、类不平衡采样和 EsViT 初始化，属于有价值的模态落地而非架构原创。

* 技术严谨性 (1.2/1.5)：CAM—dCRF—伪标签—解码器的闭环、单类别多数为何损害定位以及 3 种损失的对照逻辑都交代到位；但 dCRF 的实际搜索范围、最优值与 CAM 阈值没有给出。

* 实验充分性 (1.1/1.5)：人工真值留出航线给出伪掩码 89.3%、最终分割 87.6% mIoU，预训练另有约 +3% 增益，并给出现场失效图；但没有损失函数逐项数值、类别级指标、方差/置信区间、现场真值或定量跨域比较。

* 清晰度 (0.9/1)：框架图清楚区分分类、CAM、dCRF 和 decoder，结果也拆开预测—伪标签与预测—真值口径；约 36,000 与约 38,000 图块的叙述关系未解释，削弱数据规模表达的严谨性。

* 影响力 (1.2/1.5)：图像级弱标注直接针对深水、浑水条件下海草与底质制图的人工标注瓶颈，生态与水声应用价值明确；证据范围仍限于加泰罗尼亚数据和一处短现场航线。

* 开源 (1.2/1.5)：全文直接提供弱监督训练代码与 EsViT 预训练实现的 HTTPS 仓库，并称含超参数配置，按核心代码已发布计分；未说明训练权重和本文数据是否可取得。

* 可复现性 (0.4/0.5)：预处理、切片、50 轮 A100 训练、优化器、学习率、CAM 更新频率和软件版本可核查，但缺少精确数据划分、随机种子、dCRF 参数和阈值，尚不能无歧义重现报告数值。

* 工程/实践价值 (0.8/1.5)：论文在 Jetson AGX Orin 上进行评测，面向在线声呐分割的工程目标合理；不过只声明以 FPS 评估，未报告吞吐、端到端延迟、功耗、显存或内存数字。

</details>

---

[← 返回 2026-08-26 语音/音乐/音频论文速递](/audio-paper-digest-blog/posts/2026-08-26/)
