---
title: "SonarLLM: A Native Sonar--Optical Multimodal Large Language Model for Underwater Perception"
date: 2026-08-26
draft: false
tags: [音频理解, 多模态模型, 模型融合, 鲁棒性]
categories: [论文速递]
description: "音频理解 | 8.0/10"
hiddenInHomeList: true
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_arxiv_id: "2608.24325"
paper_digest_manual_depth: "full-text-evidence-v5"
---

# 📄 SonarLLM: A Native Sonar--Optical Multimodal Large Language Model for Underwater Perception

标签：#音频理解 #多模态模型 #模型融合 #鲁棒性

**8.0/10** | 创新 1.7/2 | 严谨 1.4/1.5 | 实验 1.4/1.5 | 清晰 0.9/1 | 影响 1.1/1.5 | 开源 0/1.5 | 复现 0.4/0.5 | 工程 1.1/1.5

🔥 **8.0/10** | 前25% | 文档类型：方法研究 | 评分置信度：高 | #音频理解 | #多模态模型 | #模型融合 #鲁棒性 | [arxiv](https://arxiv.org/abs/2608.24325)


### 👥 作者与机构

第一作者：Cong Su（Faculty of Information Engineering and Automation, Kunming University of Science and Technology；Yunnan Key Laboratory of Artificial Intelligence）
通讯作者：Longxuan Ma
作者列表：Cong Su、Longxuan Ma、Ling Dong、Guofeng Tang、Weijie Yin、Haohui Chen、Zhengtao Yu（机构：Faculty of Information Engineering and Automation, Kunming University of Science and Technology, Kunming, China；Yunnan Key Laboratory of Artificial Intelligence, Kunming, China）

### 📌 核心摘要

SonarLLM 的可证伪判断是：水下异质融合的关键不是多加额外图像，而是先让语言模型分别理解光学外观与声呐距离—方位结构，再随观测质量改变两者影响力。RGB 在清晰水体里携带颜色、纹理和对象语义，却会被散射迅速吞没；成像声呐仍能给出距离、方位和轮廓，却伴随混响、声影与距离衰减。若把它们在视觉入口就压成同一序列，模型既难保留声呐几何，也难判断其中哪路正在变得不可信。

论文选择冻结 Qwen3-VL-8B 的光学塔，另用从其权重初始化的 PSVT 学习声呐，并把双路特征修正、质量重加权和语言注入拆开。训练也严格分为声呐域适配、声学类别语义、同步对齐与门控、指令跟随 4 步。SonarBench 在固定场景、问题和声呐观测的前提下只退化 RGB，因此可以把“融合减光学”的变化解释为同一声呐证据在低可见度下的增益。其声呐 macro accuracy 为 72.0%，fusion macro accuracy 为 68.7%，但 fusion 只测试识别、计数和 VQA；自然海况、声呐故障、跨设备与融合 captioning 仍没有证据。它证明的是受控条件下的角色分工，不是所有海况都成立的通用融合定律。

### 🏗️ 方法概述和架构

先看输入为何必须分流。文本提示直接进入 Qwen3-VL-8B Decoder；RGB 图像进入预训练且冻结的光学视觉塔；成像声呐不是复制成 RGB 后共用该塔，而是先由 Sonar Stem 提取不同感受野的回波、边界和声影，再叠加物理距离与方位位置编码，送入独立的 Polar-aware Sonar Vision Transformer（PSVT）。Sonar Stem 的残差系数从零初始化，意图是在保留迁移视觉先验时逐渐放入声呐特有结构。

两座塔各输出最终特征和视觉块 8、16、24 的中间特征。最终特征才接受模态专属的 Visual Feature Enhancement（VFE）：Optical-VFE 用可学习散射查询并借助冻结 DINOv2-L 的结构参考处理光学退化；Acoustic-VFE 用声学查询抑制混响相关成分，并对每个 token 按物理距离施加学习到的补偿。这里的 VFE 是特征空间修正，并非从单幅图像反演真实水体或声学传播。

双塔把表示、修正、重加权和语言注入分成了 4 个接口。最终 RGB 与声呐特征经各自 VFE、投影和 AGFM-0 后共同构成初始多模态上下文；中间特征绕过 VFE，在 AGFM-1、AGFM-2、AGFM-3 之后分别通过模态专属 DeepStack merger 注入语言层 8、16、24。这个绕行很重要：它让浅中层声呐结构不必先被高层光学修正模块滤掉。

Adaptive Gated Fusion Module（AGFM）不合并双流 token 序列。每单层先给模态内 token 打质量分，再汇总为 RGB 与声呐的全局权重；随后以均值保持的局部调制重新分配每路内部 token 的重要性。全局门控回答“当前更应信哪某个传感器”，局部调制回答“该传感器内哪些区域更可靠”，DeepStack 则负责把双流仍分离的序列写入语言模型。单模态输入时 AGFM 是恒等映射，避免为缺失传感器虚造融合行为。

4 阶段训练对应这条数据流的 4 个学习难题。Stage I 在未标注声呐图上用加权 MAE 适配 PSVT，重建 decoder 随后丢弃；Stage II 用 23 类对象标注训练 PSVT、Sonar Stem 和 classifier，使回波结构有类别组织。此时光学塔、语言模型与融合模块保持冻结。

Stage III 才使用 RGBS50 同步声呐—光学对。它联合 InfoNCE、3 个中间层的余弦对齐、门控 BCE 与熵正则，并以 0.7 概率施加光学退化。语言模型与光学塔仍冻结，优化对象是声呐路径、双 VFE 与 AGFM；BCE 目标会随退化强度把权重从均衡推向声呐，因此门控是已知退化轴上的受监督校准。Stage IV 最后用 sonar-only、optical-only 与 paired 指令，以 answer-only 目标训练 LoRA 和多模态接口，将前 3 阶段得到的表示接到识别、计数、VQA 与描述输出。

完整图中的潜水员在 Clear、Turbid、Heavy RGB 面板中逐步淡出，右侧却保留扇形声呐量程线和 target echo。

请在下图沿 Clear、Turbid、Heavy 光学序列观察潜水员外观如何消失，再看右侧成像声呐的扇形量程线和 target echo。

[![Paired sonar–optical observations under controlled optical degradation. Optical evidence weakens with turbidity, whereas sonar preserves structural cues for the same scene.](https://arxiv.org/html/2608.24325v1/sonarbench_teaser_compact_v5.png)](https://arxiv.org/html/2608.24325v1/sonarbench_teaser_compact_v5.png)

完整图从左到右把同一潜水员的 RGB 轮廓由清晰变暗直至几乎不可见，右侧仍有扇形回波、量程弧线与红色 target echo 箭头。它说明 SonarBench 的对照保留了声呐几何证据，但只展示人为控制的光学退化，难以代表声呐本身受混响破坏。


因此配对基准只改变 RGB 的退化，保留同一场景和同一声呐观测；它可隔离低可见度时增加声呐的条件化收益，却难以模拟声呐混响、失效或时间不同步。

上方 RGB tower 与下方 sonar tower 平行，前者接 Optical-VFE，后者接 Sonar Stem、Polar Position Adapter 与 Acoustic-VFE，紫色 AGFM-0 至 AGFM-3 位于双流 token 和 Decoder 之间。

请在下图从 RGB tower 与 sonar tower 追踪双流输入，再核对蓝色 Optical-VFE、绿色 Acoustic-VFE、紫色 AGFM-0 至 AGFM-3 如何通向 Qwen3-VL-8B Decoder。

[![Overall architecture of SonarLLM, comprising sonar-native representation, modality-specific feature enhancement, reliability-aware hierarchical fusion, and progressive training.](https://arxiv.org/html/2608.24325v1/arch4.png)](https://arxiv.org/html/2608.24325v1/arch4.png)

图中 RGB tower 与 sonar tower 平行，后者额外拥有 Sonar Stem 和 Polar Position Adapter；双类 VFE 颜色分开，AGFM cell 先做 token quality scoring、global gate 和 local modulation，再将双模态 token 送入解码器。完整总览支持“双流后注入”的数据流，证据仅限数据流本身而非每个模块的任务收益。


分工的关键是让 AGFM 改变影响力而不是把异质 token 过早合并；不过图本身不证明各模块收益，训练阶段和消融才负责验证这一点。

### 💡 核心创新点

1. 首项变化是把声呐视为原生感知模态，而不是自然图像塔的灰度输入。既有通用 MLLM 的问题不只是参数量，而是没有编码扇形成像中的距离—方位几何。本文用多尺度 Sonar Stem 与 Polar PE 把这双类信息写入独立 PSVT；结构消融中移除 Polar PE 使 fusion 由 82.1% 降到 68.6%、Sonar macro 由 65.8% 降到 55.7%，支持几何适配的重要性。该变体需要重训前端，且没有跨频段或跨设备测试，所以它说明当前设置中的必要性，不是普适声呐理论。

2. 另一项变化是把光学散射与声学混响、距离衰减分给不同的 VFE，而非用某个共享修复器混合处理。Optical-VFE 借 DINOv2-L 的结构参考处理光学特征，Acoustic-VFE 保留 range-dependent gain；中间层通过 DeepStack 绕开它们。去掉 Optical-VFE 时 optical accuracy 从 72.5% 降到 68.8%，去掉 Acoustic-VFE 时 Sonar macro 从 65.8% 降到 62.0%，证据符合分工预期，但仍难以证明这些特征修正等价于真实物理去噪。

3. 再一项变化是将质量感知拆成传感器级全局门控与 token 级局部调制，并在 4 个视觉深度保持双流。与平均融合相比，AGFM 在 Clear 没有额外优势，而在 Heavy 条件高 2.7 pp；它的价值是压住正在恶化的 RGB，而非对每个问题找到最佳传感器。由于 Stage III 把合成退化强度直接写进 gate loss，这是该类可验证的受监督退化响应，而不是无监督的通用可靠性估计。

4. 最后一项变化是 SonarBench 的成对干预协议。它固定场景、问题与声呐观测，只改变 RGB 质量，使表征收益、光学退化和融合互补可被分开测量；同 Stage-IV 指令数据的 Qwen3-VL-8B+LoRA 对照、表征图和组件消融共同强化归因。但训练与 benchmark 共享退化生成器，故这更像受控压力测试，而不是自然浑浊海域的外部泛化。

### 📊 实验结果

先回答原生声呐路径是否真的胜过强基线。下表保留 SonarBench 的 3 种输入 macro accuracy，所有指标均为越高越好；caption GOOD rate 不参与这 3 个平均数。

| 方法 | SonarBench 输入 | Sonar macro accuracy ↑ | Optical macro accuracy ↑ | Fusion macro accuracy ↑ |
|---|---|---:|---:|---:|
| Qwen3-VL-8B | sonar / optical / fusion | 32.1% | 37.4% | 41.2% |
| Qwen3-VL-8B+LoRA | sonar / optical / fusion | 37.5% | 36.9% | 32.3% |
| Qwen3.8-27B | sonar / optical / fusion | 29.1% | 34.4% | 43.7% |
| SonarLLM | sonar / optical / fusion | 72.0% | 50.9% | 68.7% |

在 SonarBench 的 sonar-only 设置，方法是 SonarLLM、基线是 strongest baseline，macro accuracy 为 72.0%，方向是越高越好。它比最强基线高 34.4 points；27B 和 35B 通用 MLLM 也没有接近这一结果，支持“声呐表示失配”比单纯扩大模型更关键。在同一 SonarBench 的 fusion input，SonarLLM 对 strongest baseline 的 macro accuracy 为 68.7%，方向仍是越高越好，比最佳基线高 25.1 points。这个主结果只涵盖识别、计数、VQA，难以替代双传感器 captioning 结论。

再问声呐在何时真正互补。SonarBench paired degradation 固定场景与声呐观测；在 heavy turbidity 的 recognition and counting，方法是 fusion input、基线是 optical input，fusion-over-optical gain 为 36.0 points，方向是越高越好，而 Clear 为 6.0 points。识别的 gain 从 6.0、13.4 到 36.0 points，计数从 6.0、33.4 到 36.0 points；fusion 的 clear-to-heavy 变化远小于 optical，说明同一声呐证据在 RGB 变坏后更有价值。反例也必须保留：Qwen3-VL-8B+LoRA 的 fusion average 是 32.3%，低于它的 optical 36.9%，第二传感器若没有异质表示与交互设计可以伤害表现。

同一 checkpoint 下，AGFM 是否只是在重度浑浊时缓冲了失真的 RGB？150 个 held-out 场景的 5 级 probe 中，global sonar weight 从 0.491、0.637、0.717、0.769 升至 0.795；右图 Clear 时双流曲线重合，Heavy 时 AGFM 比 Mean Fusion 高 2.7 pp。

请在下图读取左侧 global sonar weight 的 5 个数值，并在右侧比较 AGFM 与 Mean Fusion 从 Clear 到 Heavy 的曲线间距。

[![Reliability-aware fusion analysis on 150 held-out scenes. (a) Sonar weight increases with optical degradation. (b) Under the same checkpoint, AGFM’s advantage over equal weighting grows from 0.0 to 2.7 points.](https://arxiv.org/html/2608.24325v1/agfm_analysis2.png)](https://arxiv.org/html/2608.24325v1/agfm_analysis2.png)

左图的 global sonar weight 从 0.491 递增到 0.795；右图双流曲线在 Clear 重合，Heavy 时蓝色 AGFM 线高于红色 Mean Fusion 线 2.7 pp。它直接支持门控对给定退化轴的缓冲作用，证据仅限 Stage III 受退化强度监督的条件。


这把 AGFM 定位为退化缓冲器，而不是能逐题挑选最佳传感器的 oracle。它的权重趋势验证了被训练目标要求的响应；同 checkpoint 等权替换提供了额外的性能对照，但难以把该相关性写成对自然传感器故障的发现。

组件证据来自独立的 rule-scored validation split，因此绝对值难以与主表直接并列比较。所有 accuracy 越高越好，Drop 是 clear-to-heavy fusion decline，越低越好。

| 变体 | 设置 | Fusion ↑ | Drop ↓ | Optical ↑ | Sonar macro ↑ |
|---|---|---:|---:|---:|---:|
| SonarLLM | 完整模型 | 82.1% | 1.3 points | 72.5% | 65.8% |
| Mean Fusion | 等权重重训 | 80.8% | 3.8 points | 72.3% | 65.6% |
| w/o gate loss | 无门控监督 | 81.2% | 3.0 points | 72.7% | 64.9% |
| w/o both VFE | 去掉双路 VFE | 79.8% | 3.1 points | 67.2% | 61.4% |
| w/o DeepStack | 去掉层级注入 | 78.9% | 2.8 points | 71.8% | 59.6% |
| w/o Polar PE | 重训声呐前端 | 68.6% | 7.1 points | 71.4% | 55.7% |

在 rule-scored validation split 的 clear-to-heavy 条件，方法 Mean Fusion 相比质量感知 SonarLLM 的 fusion decline 为 3.8 points，方向是越低越好；完整模型为 1.3 points。该差异补足静态 fusion 的小损失，表明 gate loss 主要保护退化鲁棒性。在同一 split 的 without Polar PE 条件，方法 w/o Polar PE、基线 SonarLLM 的 Fusion accuracy 为 68.6%，方向是越高越好，较完整模型少 13.5 points。它把最大损失指向声呐几何，而不是单纯增加融合参数。

训练课程也有非单调信号：在 sonar front-end adaptation validation，Stage-I MAE-r128 相比 Transplant no MAE 的 R/C average 为 74.7%，方向是越高越好，基线是 Transplant no MAE；识别改善但 counting 下降 2.0 points。训练阶段的表征图把声呐类别形成与同场景跨模态对应分开了：silhouette 从 -0.18 提到 +0.16，Stages I-II 的 alignment margin 仅 0.001，Stage III 为 0.660，Stage IV 为 0.423。

请在下图上方比较 pretrained tower 与 Stages I-II 的 silhouette，并在下方依次追踪 matched 橙色与 mismatched 灰色分布的 alignment margin。

[![Progressive representation formation.](https://arxiv.org/html/2608.24325v1/representation_alignment_2.png)](https://arxiv.org/html/2608.24325v1/representation_alignment_2.png)

上方散点的 silhouette 由 -0.18 变为 +0.16；下方在 Stages I-II 的 margin 仅 0.001，Stage III 达 0.660，Stage IV 仍为 0.423。完整图证实课程学习把域内类别结构和跨模态对应分开建立，但这些密度图只来自 RGBS50 的 clear 配对。


所以 Stage I-II 的类别分离难以代替 Stage III 的成对对齐；而 Stage IV 后 margin 回落也提示指令学习放松了严格特征相似度。最后看工程代价：同一 A100-80GB、BF16、batch size 1、两幅 448×448 图、512 visual tokens 和 128 generated tokens 下，SonarLLM 为 21.6 GB、137.5±1.1 ms prefill、21.1±1.2 tokens/s decode，Qwen3-VL-8B 为 17.7 GB、77.2±0.2 ms、38.4±0.1 tokens/s。双塔有实测成本，仍缺载具闭环延迟、功耗和采集链证据。

### 🔬 细节详述

数据与课程的边界要分开看。Stage I 从 RGBS50、UATD、SCTD、DeeperSense、FLC+FLS 等来源收集约 98K 候选声呐图，经过空帧、异常值、字节去重和亮度平衡后保留 40K；Stage II 汇总 23 类对象标注；Stage III 只使用 RGBS50 同步对；Stage IV 的 635K 指令中有 533K 声呐相关样本和 102K 光学样本。论文说明了这些规模，但没有可执行的过滤规则与序列清单。

Stage I 的 mask ratio 是 0.60，并按局部变化给 masked patch 加权。Stage II 训练 PSVT 与 Sonar Stem，learning rate 为 5×10^-5。Stage III 以 0.7 概率退化光学输入，severity 从 [0.1, 1.0] 采样，InfoNCE temperature 是 0.07，4 项损失权重为 1.0、0.5、0.2、0.1，learning rate 为 10^-4。

Stage IV 用 LoRA r=128、alpha=256、learning rate 10^-4，只训练语言适配器和多模态接口；输入为 448×448，answer-only objective 只对答案 token 计算损失。未说明优化器、各阶段 epoch 或 step、学习率调度、随机种子、训练硬件与完整清洗实现，这些是复现实验时最需要补齐的变量。

SonarBench 有 25 个 subset，每个 150 个 QA 实例，source sequence 在训练前划分并审计为零重叠。Recognition 与 VQA 由 Qwen3.8-Max 进行语义判定，counting 使用整数 exact match，captioning 报 GOOD rate 和 METEOR；Kimi-K3 对 300 个分层样本的复核给出 94.3% judge agreement 与 Cohen's kappa 0.87。评分器复核可说明一致性，但难以替代逐样本人类金标，也未提供 judge prompt。

模型从含冻结 DINOv2-L 的 Qwen3-VL backbone 8.77B 增至 10.3B，其中声呐塔 736.9M 与 DINOv2-L 0.30B 多为继承容量，随机初始化的非 LoRA 适配与融合参数为 25.1M。效率测量的硬件和解码条件已报告，但结论只能说双塔的单卡推理成本被量化，难以推出水下机器人实时闭环可行。复现者还应把同步误差、声呐量程、波束宽度、输入归一化和提示词模板作为独立配置记录；这些条件一旦改变，门控与对齐的解释也可能改变。

### 🚨 局限与问题

受控退化由与训练相同的生成器制造，尚未覆盖自然海域中的非均匀散射、动态悬浮颗粒、声呐专属失效或声呐—光学时间错位。评测样本来自 held-out RGBS50 与 UMOD 视频序列，虽按序列排除了训练重叠，却没有跨海域、跨设备或跨声呐频段的外部测试。融合对 captioning 未做双模态评测；Stage III 的门控目标直接由退化强度构造，因此权重趋势难以证明模型自行发现了普适可靠性。结果置信区间只覆盖测试集抽样误差，没有独立训练重复。

### 进一步审视

论文证据直接支持的边界首先是退化分布。Clear、Turbid、Heavy 均由同一生成器构造，训练和 benchmark rendering 也共享该生成器；它能检验已知光学退化轴上的响应，却没有覆盖非均匀散射、动态悬浮颗粒、自然海水颜色变化、声呐混响失效或声呐—光学时间错位。

第二个边界是外部泛化。held-out RGBS50 和 UMOD 视频序列的 source-sequence 划分能减少同序列帧泄漏，但没有跨海区、跨季节、跨声呐设备、跨频段或跨视场测试。公开数据来源并非公开泛化；训练与测试共享退化机制时，强结果仍只能被解释为受控条件下的鲁棒互补。

第三个边界是任务和归因。fusion 只评估识别、计数和 VQA，captioning 没有 paired 结果；几何主导的问题中 fusion 不必优于 sonar-only，Stage-I MAE 也让 counting 下降。AGFM 的 sonar weight 与 severity 同向，是因为 gate BCE 直接使用 severity 目标，所以它显示校准成功，不证明模型会识别任意未知传感器故障。

进一步审视，10,000 次 scene-clustered bootstrap 仅量化测试样本抽样误差，未报告独立训练 run 方差。要把系统推进到海上部署，仍需自然配对数据、多平台声呐、失效与同步压力测试、功耗和端到端任务时延，并公开退化器、判分提示、清洗和训练脚本。

### 🔗 开源与复现资源

论文没有提供 SonarLLM 的 HTTPS 代码仓库、模型权重、SonarBench 下载包或可访问 Demo。数据来源、阶段目标、主要超参数和 A100 推理条件足以理解设计，却难以复现空帧过滤、异常值规则、退化生成器、序列划分或语义 judge。真实配对数据、task-aware routing 和 temporal sonar–optical reasoning 只被列为未来工作，难以当作已交付资源。

### 💡 研究者判断

这篇工作的价值在于把“多模态是否更强”改写成更硬的问题：当 RGB 外观与声呐几何各自可靠性变化时，语言模型应保存什么、修正什么、何时减弱其中哪个传感器。独立声呐塔、VFE 分工、AGFM 与 DeepStack 的职责被数据流和消融较完整地连起来；成对退化、同数据 LoRA 和同 checkpoint 等权替换也比只报单张主表更能支撑归因。

但它仍是设计严谨的受控原型。门控学习的是合成退化标签，训练和测试依赖同一生成器，captioning 没有融合评测，代码、模型和基准均未公开。最有价值的下一步不是再堆某个大模型，而是在自然配对、多频段声呐、不同载体与真实算力约束中，检查这套“表示与分配分离”的结论还是否成立。

<details>
<summary>⚖️ 评分理由（展开查看）</summary>

* 创新性 (1.7/2)：独立声呐塔、距离—方位位置适配、物理差异化 VFE 与层级可靠性门控形成完整新机制，且直接回应把声呐当普通图像的已知失配。

* 技术严谨性 (1.4/1.5)：训练目标、门控公式、对齐损失和结构消融彼此对应，另有成对退化与同 checkpoint 对照；自然退化和训练重复仍未验证。

* 实验充分性 (1.4/1.5)：主表、配对退化、表征分析、组件消融和效率测量覆盖较全，并给出场景聚类 bootstrap；caption fusion 与跨海域外测缺失。

* 清晰度 (0.9/1)：论文从传感机理到数据流再到因果式实验组织清楚，图表能支撑公式；个别抽取公式和数值存在重复排版噪声。

* 影响力 (1.1/1.5)：首次把开放式声呐—光学语言理解、成对退化评测和可靠性分配合并，适合推进水下机器人研究，但当前证据仍局限于少量数据源与合成退化。

* 开源 (0.0/1.5)：正文没有直接交付代码、模型、数据下载或 Demo，数据来源名称和未来工作说明难以视为已经开放的核心产物。

* 可复现性 (0.4/0.5)：分辨率、数据规模、阶段损失、学习率、LoRA 和推理设置较完整；优化器、训练轮数、随机种子、训练硬件及清洗实现未说明。

* 工程/实践价值 (1.1/1.5)：论文测量显存、prefill 与 decode 吞吐并量化额外开销，体现工程意识；延迟明显上升且没有真实载具、实时闭环或声呐故障压力测试。

</details>

---

[← 返回 2026-08-26 语音/音乐/音频论文速递](/audio-paper-digest-blog/posts/2026-08-26/)
