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

水下可见度下降时，RGB 的颜色、纹理和边界迅速丢失，成像声呐仍保留轮廓、距离与方位，却同时带来散斑、混响和声影。真正的问题不是增加一幅声呐图，而是建立能被语言模型使用的声学表示，并让双传感器随观测质量改变分工。SonarLLM 为此保留光学塔，另建带 Sonar Stem 和极坐标位置适配的声呐塔，再以模态专属 VFE、AGFM 与双流 DeepStack 连接共享语言模型，训练则把声呐域适配、类别语义、跨模态对应和语言指令拆成连续阶段，使表征增益与融合增益能够分开追踪。SonarBench 覆盖识别、计数、视觉问答与描述，但 fusion 只在前 3 个准确率任务上报告。

主结果中，声呐单模态 macro accuracy 达 72.0%，融合达 68.7%，分别显著领先最强基线。配对退化还显示，光学越不可靠，声呐带来的识别与计数增益越大。论文的证据足以支持受控退化下的异质传感器互补，并用真实推理测量揭示双塔的延迟与显存代价，却尚不能证明自然海况或跨海域泛化。通用视觉语言模型只作为失配起点，不展开其连接器谱系。

### 🏗️ 方法概述和架构

输入由文本指令、RGB 图像和成像声呐观测组成。Stage III 成对退化训练固定场景与声呐观测，只改变配对 RGB 的退化；对应 benchmark probe 进一步固定场景、问题与声呐观测。这使 fusion-minus-optical 能被解释为同场景下增加声呐后的配对收益，而不是样本差异。

观察下图时可沿 Clear、Turbid、Heavy 追踪 RGB 证据消失，并核对右侧成像声呐的扇形距离—方位结构。

[![Paired sonar–optical observations under controlled optical degradation. Optical evidence weakens with turbidity, whereas sonar preserves structural cues for the same scene.](https://arxiv.org/html/2608.24325v1/sonarbench_teaser_compact_v5.png)](https://arxiv.org/html/2608.24325v1/sonarbench_teaser_compact_v5.png)

图中同一潜水员样例在清晰、浑浊和重度浑浊 RGB 面板中逐渐淡出，声呐面板仍显示扇形量程线和目标回波；这支持同场景增加声呐后的配对收益，但只限受控光学退化，未覆盖声呐自身被混响或颗粒噪声破坏的条件。


声呐观测先通过 Sonar Stem 的多尺度卷积与残差支路，再在 patch token 上叠加距离、方位位置编码。PSVT 从 Qwen3-VL 视觉塔权重初始化，却作为独立支路渐进解冻；零初始化残差系数让声呐结构在不破坏迁移先验的情况下逐步进入表示。

双视觉路径随后执行不同的特征修正。Optical-VFE 用散射查询削弱浑浊相关成分，并从冻结 DINOv2-L 引入结构参考；Acoustic-VFE 用混响查询和随物理距离变化的增益修正声呐 token。成像方程在这里承担设计动机，而不是物理反演声明。

阅读下图可追踪双视觉路径如何经 Sonar Stem、Polar Position Adapter、双 VFE 与 4 级 AGFM 完成特征修正。

[![Overall architecture of SonarLLM, comprising sonar-native representation, modality-specific feature enhancement, reliability-aware hierarchical fusion, and progressive training.](https://arxiv.org/html/2608.24325v1/arch4.png)](https://arxiv.org/html/2608.24325v1/arch4.png)

流程图左侧把 RGB 与声呐送入独立视觉塔，中部蓝色 Optical-VFE 与绿色 Acoustic-VFE 分开处理，紫色 AGFM 在多个层级重加权后把两色 token 注入解码器；这把先形成表示、再校准对应、最后接入语言任务的顺序画成可见流程，但仍需结合训练表确认各阶段冻结范围。


AGFM 只重加权而不拼接压缩双模态序列，最终层形成初始多模态上下文，中间层则保留双流。它在每个层级先估计 token quality，再汇总为光学与声呐的全局权重，并用均值保持的局部调制重新分配模态内 token；单模态时退化为恒等映射。

层级交互由 DeepStack 完成。视觉块 8、16、24 的中间特征绕过 VFE，分别经过 AGFM 和模态专属 merger 后注入语言层 8、16、24；最终特征则经 VFE、投影和 AGFM-0 进入初始上下文。分开保存声呐与光学 token，可避免异质表示在进入语言模型前被过早压缩。

训练分为 4 阶段，目的是避免有限配对数据同时承担域迁移、声学语义、传感器对应、门控校准与指令学习。Stage I 训练 PSVT 与重建 decoder，并在阶段结束后丢弃 decoder；Stage II 训练 PSVT、Sonar Stem 和 classifier。Stage III 在冻结语言模型与光学视觉塔的前提下训练 sonar path、双 VFE 和 AGFM，Stage IV 才以 answer-only 目标训练 LoRA 与多模态接口。

输出覆盖识别、计数、VQA 与 captioning。Stage III 的 gate target 随合成光学退化强度从均衡向声呐移动，因此 AGFM 学到的是已定义退化轴上的受监督代理，不是任意声呐故障或任意问题类型上的最优传感器选择器。这种先形成表示、再校准对应、最后接入语言任务的顺序，是论文能够区分声呐能力与多模态能力的关键。

### 💡 核心创新点

1. 既有 MLLM 往往把声呐送进自然图像塔，无法表达扇形成像中的距离—方位关系。SonarLLM 改用独立 PSVT、Sonar Stem 和极坐标位置适配；去掉 Polar PE 与 Sonar Stem 的直接消融带来最大的声呐和融合退化，支持几何适配的必要性，也解释了模型规模无法补偿声呐域几何失配，但该结论还没有跨设备或跨频段验证。

2. 统一增强模块会混淆光学散射与声学混响、距离衰减。论文将 Optical-VFE 与 Acoustic-VFE 分开，并让中间 DeepStack 特征绕过它们；分别移除双路 VFE 时，主要损失落在对应模态，说明分治不是简单增加参数，不过当前修正仍停留在特征空间。

3. 固定平均融合无法应对传感器质量变化。AGFM 同时建模全局模态权重与局部 token 质量，并在多层视觉语义上保持双流；重度浑浊下它比同 checkpoint 等权融合更稳，但 Clear 条件的收益为零，且门控受退化标签直接监督。

4. 普通评测难以区分声呐表征提升与跨模态互补。SonarBench 固定场景、问题和声呐观测，只改变 RGB 退化，并配合同 Stage-IV 数据的 LoRA 基线、表征分析和结构消融形成归因链；训练与测试使用同一退化生成器，使它更接近受控压力测试而非自然海况泛化。

### 📊 实验结果

先看原生声呐和融合是否真正超过强基线。下表保留 3 种输入设置的 macro accuracy，指标均为越高越好；caption GOOD 不进入这些平均数。

| 方法 | SonarBench 输入 | Sonar macro accuracy ↑ | Optical macro accuracy ↑ | Fusion macro accuracy ↑ |
|---|---|---:|---:|---:|
| Qwen3-VL-8B | sonar / optical / fusion | 32.1% | 37.4% | 41.2% |
| Qwen3-VL-8B+LoRA | sonar / optical / fusion | 37.5% | 36.9% | 32.3% |
| Qwen3.8-27B | sonar / optical / fusion | 29.1% | 34.4% | 43.7% |
| SonarLLM | sonar / optical / fusion | 72.0% | 50.9% | 68.7% |

在 SonarBench 的声呐单模态设置中，SonarLLM 相比最强外部基线的 macro accuracy（越高越好）为 72.0%，领先 34.4 points。在 SonarBench 的融合输入设置中，SonarLLM 相比最强外部基线的 macro accuracy（越高越好）为 68.7%，领先 25.1 points。更大模型没有弥合差距，同训练指令的 Qwen3-VL-8B+LoRA 也远低于原生声呐路径。

SonarBench 的关键控制是固定场景、问题与声呐观测，只修改配对 RGB 的退化程度。在 SonarBench 成对退化中，重度浑浊的识别与计数使用 fusion 输入相比 optical 输入，fusion-over-optical gain（越高越好）达到 36.0 points；Clear 条件下为 6.0 points。跨模态输入本身可能失败：Qwen3-VL-8B+LoRA 从 optical 36.9% 降到 fusion 32.3%，Qwen3.6-35B-A3B 从 36.4% 降到 28.9%。

门控是否真的随观测质量变化，可以由同 checkpoint 分析回答。在 150 个 held-out 场景的 5 级退化探针上，global sonar weight 从 0.491 增至 0.795，且在 Heavy 条件下 AGFM 比 Mean Fusion 高 2.7 pp；Clear 时两者同为 70.0%。在结构消融的 clear-to-heavy 条件下，质量感知加权的 SonarLLM 相比 Mean Fusion 和 w/o gate loss，将 fusion decline（越低越好）保持在 1.3 points，而双基线分别增至 3.8 和 3.0 points。这些结果说明 AGFM 更像退化缓冲器而非逐问题 oracle。

比较下图两块曲线时，应核对 AGFM 门控的 global sonar weight 是否随观测质量下降而上升，以及它相对 Mean Fusion 的差距。

[![Reliability-aware fusion analysis on 150 held-out scenes. (a) Sonar weight increases with optical degradation. (b) Under the same checkpoint, AGFM’s advantage over equal weighting grows from 0.0 to 2.7 points.](https://arxiv.org/html/2608.24325v1/agfm_analysis2.png)](https://arxiv.org/html/2608.24325v1/agfm_analysis2.png)

左侧曲线从 0.491 单调升到 0.795，右侧蓝线与红线在 Clear 重合、在 Heavy 拉开 2.7 pp；这支持 AGFM 更像退化缓冲器而非逐问题 oracle，但图中趋势仅对应 Stage III 显式监督的光学退化范围。


再看组件是否真的分别承担声呐表示、模态修正和层级交互。下表使用与主表不同的 rule-scored validation split，绝对数值不能跨表直接比较，所有 accuracy 越高越好、Drop 越低越好。

| 变体 | rule-scored validation split | Fusion ↑ | Drop ↓ | Optical ↑ | Sonar macro ↑ |
|---|---|---:|---:|---:|---:|
| SonarLLM | 完整模型 | 82.1% | 1.3 points | 72.5% | 65.8% |
| Mean Fusion | 等权重重训 | 80.8% | 3.8 points | 72.3% | 65.6% |
| w/o gate loss | 无门控监督 | 81.2% | 3.0 points | 72.7% | 64.9% |
| w/o both VFE | 去掉双路 VFE | 79.8% | 3.1 points | 67.2% | 61.4% |
| w/o DeepStack | 去掉层级注入 | 78.9% | 2.8 points | 71.8% | 59.6% |
| w/o Sonar Stem | 重训声呐前端 | 73.9% | 5.3 points | 71.6% | 58.3% |
| w/o Polar PE | 重训声呐前端 | 68.6% | 7.1 points | 71.4% | 55.7% |

在结构消融中，去掉 Polar PE 的 SonarLLM w/o Polar PE 相比完整 SonarLLM，fusion accuracy loss（越低越好）为 13.5 points，sonar-macro accuracy 同时下降 10.1 points。声呐前端适配验证中，Stage-I MAE 与 r=128 的 MAE-r128 相比 Transplant no MAE，把 R/C average（越高越好）提高到 74.7%，但 counting 下降 2.0 points。表征分析把声呐类别形成与跨模态对齐拆开：silhouette 从 -0.18 升至 0.16 后，matched 与 mismatched 的 margin 仍仅为 0.001；Stage III 才升至 0.660，Stage IV 后保留 0.423。这说明 Stage I-II 学到的是声呐域内结构，Stage III 才建立同场景跨模态对应。

查看下图的表征分析可先比较声呐类别散点的 silhouette，再追踪 matched 与 mismatched 分布在 Stage III、Stage IV 的间隔变化。

[![Progressive representation formation.](https://arxiv.org/html/2608.24325v1/representation_alignment_2.png)](https://arxiv.org/html/2608.24325v1/representation_alignment_2.png)

上方散点从混杂的 -0.18 silhouette 变为按类别分离的 0.16，下方橙色 matched 分布在 Stage III 明显右移并与灰色 mismatched 拉开，Stage IV 的间隔有所回落；这些像素事实支持逐阶段表征形成，但只限 RGBS50 clear 配对。

### 🔬 细节详述

数据方面，Stage I 汇集 RGBS50、UATD、SCTD、DeeperSense、FLC+FLS 与海洋指令来源的约 98K 候选声呐图，经空帧、异常值、字节去重与亮度平衡后保留 40K。Stage II 使用汇总后的 23 类对象标注；Stage III 只用 RGBS50 同步对；Stage IV 的 635K 指令混合含 533K 声呐相关样本和 102K 光学样本。既有水下资源的名称只用于定位任务空白。

Stage I 的 mask ratio 为 0.60，并按局部变化给 masked patch 加权。Stage II 训练 PSVT 与 Sonar Stem，learning rate 为 5×10^-5。Stage III 以 0.7 概率退化光学输入，退化 severity 在无量纲闭区间 [0.1, 1.0] 采样，InfoNCE temperature 为 0.07，联合损失权重依次为 1.0、0.5、0.2、0.1，learning rate 为 10^-4。

Stage IV 采用 LoRA，配置为 r=128、alpha=256、learning rate 10^-4，仅训练语言适配器和多模态接口。输入分辨率为 448×448，answer-only objective 只在答案 token 上计算。论文未说明优化器、各阶段 epoch 或 step、学习率调度、随机种子、训练硬件和完整数据清洗脚本。

SonarBench 共含 25 个 subset，每个 subset 有 150 个 QA 实例；source sequence 在全部训练阶段之前完成划分，并审计为零重叠。Recognition 与 VQA 用 Qwen3.8-Max 判断语义正确性，counting 采用整数 exact match，captioning 同时报 GOOD rate 与 METEOR。另用 Kimi-K3 复核 300 个分层抽样输出，judge agreement 为 94.3%，Cohen's kappa 为 0.87；这能检查评分器一致性，却没有替代逐样本人工金标，仍需公开判分提示。

模型总参数从含冻结 DINOv2-L 的 Qwen3-VL backbone 8.77B 增至 10.3B，架构新增 882.4M，Stage-IV adapters 新增 349.2M。作者指出声呐塔 736.9M 与 DINOv2-L 0.30B 多为继承容量，随机初始化的非 LoRA 适配与融合参数为 25.1M。

效率在单张 A100-80GB、BF16、FlashAttention-2、batch size 1、两幅 448×448 图、512 visual tokens 和 128 generated tokens 下测得。SonarLLM 的 peak memory 为 21.6 GB，prefill latency 为 137.5±1.1 ms，decode throughput 为 21.1±1.2 tokens/s；Qwen3-VL-8B 分别为 17.7 GB、77.2±0.2 ms 和 38.4±0.1 tokens/s。这里有实际推理成本，但没有端到端载具控制时延、功耗或声呐采集链测量。

### 🚨 局限与问题

受控退化由与训练相同的生成器制造，尚未覆盖自然海域中的非均匀散射、动态悬浮颗粒、声呐专属失效或声呐—光学时间错位。评测样本来自 held-out RGBS50 与 UMOD 视频序列，虽按序列排除了训练重叠，却没有跨海域、跨设备或跨声呐频段的外部测试。融合对 captioning 未做双模态评测；Stage III 的门控目标直接由退化强度构造，因此权重趋势不能证明模型自行发现了普适可靠性。结果置信区间只覆盖测试集抽样误差，没有独立训练重复。

### 进一步审视

受控协议没有覆盖非均匀散射、动态悬浮颗粒、声呐自身故障或跨传感器时间错位。Clear、Turbid 与 Heavy 由同一个生成器构造，训练和 benchmark renderings 也共用该生成器，因此只能验证已知退化轴上的响应，不能替代自然海域配对观测。

评测使用 held-out RGBS50 与 UMOD 视频序列，并在训练前按 source sequence 划分，能够排除同序列帧泄漏。它没有报告跨海区、跨季节、跨声呐设备、跨频率或跨视场的外部评测；所谓 public data source 也不等于 public generalization。

任务层面，fusion 只评测识别、计数与 VQA，captioning 没有双传感器结果。声呐几何占主导的问题上，融合未必超过 sonar-only；Stage-I MAE 也让 counting 出现退化，说明统一表征改进不保证每个下游任务同步受益。

AGFM 的 sonar weight 与退化 severity 相关，但 Stage III 直接用 severity 构造 BCE target，这更接近受监督校准。测试集 bootstrap 给出抽样区间，却不包含独立训练 run 的方差；真实海上部署还需要传感器失效、时间同步、算力预算和任务级路由压力测试。

### 🔗 开源与复现资源

论文未提供 SonarLLM 的 HTTPS 代码仓库、可下载模型权重、SonarBench 数据包或在线 Demo。正文给出数据来源、阶段损失、主要训练超参数和 A100 推理设置，但空帧过滤、异常值规则、退化生成器、语义 judge prompt 与序列清单没有可执行产物可核验。作者只把真实配对数据、task-aware routing 和 temporal sonar–optical reasoning 列为未来工作，不能据此认定资源已开放。

### 💡 研究者判断

漂亮之处在于，作者没有用“多模态更强”掩盖声呐表示问题，而是把声呐类别形成、跨模态对应和可靠性分配逐层拆开。Polar PE 的大幅消融、同数据 LoRA 对照与同 checkpoint 门控替换，使贡献归因比常见水下 MLLM 更可信。短板也很硬：训练与测试共享退化生成器，海域和设备外推没有证据，开放式描述未进入 fusion 评测，所有核心资源又未发布。若下一步不能在自然配对、多声呐平台和真实算力闭环中复现，这套模型仍可能只是设计严谨、实验受控的实验室原型。

`<details>`
`<summary>`⚖️ 评分理由（展开查看）`</summary>`

* 创新性 (1.7/2)：独立声呐塔、距离—方位位置适配、物理差异化 VFE 与层级可靠性门控形成完整新机制，且直接回应把声呐当普通图像的已知失配。

* 技术严谨性 (1.4/1.5)：训练目标、门控公式、对齐损失和结构消融彼此对应，另有成对退化与同 checkpoint 对照；自然退化和训练重复仍未验证。

* 实验充分性 (1.4/1.5)：主表、配对退化、表征分析、组件消融和效率测量覆盖较全，并给出场景聚类 bootstrap；caption fusion 与跨海域外测缺失。

* 清晰度 (0.9/1)：论文从传感机理到数据流再到因果式实验组织清楚，图表能支撑公式；个别抽取公式和数值存在重复排版噪声。

* 影响力 (1.1/1.5)：首次把开放式声呐—光学语言理解、成对退化评测和可靠性分配合并，适合推进水下机器人研究，但当前证据仍局限于少量数据源与合成退化。

* 开源 (0.0/1.5)：正文没有直接交付代码、模型、数据下载或 Demo，数据来源名称和未来工作说明不能视为已经开放的核心产物。

* 可复现性 (0.4/0.5)：分辨率、数据规模、阶段损失、学习率、LoRA 和推理设置较完整；优化器、训练轮数、随机种子、训练硬件及清洗实现未说明。

* 工程/实践价值 (1.1/1.5)：论文测量显存、prefill 与 decode 吞吐并量化额外开销，体现工程意识；延迟明显上升且没有真实载具、实时闭环或声呐故障压力测试。

`</details>`

---

[← 返回 2026-08-26 语音/音乐/音频论文速递](/audio-paper-digest-blog/posts/2026-08-26/)
