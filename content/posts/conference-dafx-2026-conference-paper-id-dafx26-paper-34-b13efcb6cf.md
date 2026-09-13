---
title: "Using the Distribution Derivative Method to Model Acoustic Musical Instrument Sounds with Polynomial AM-FM Sinusoids"
date: 2026-09-13
draft: false
description: "针对乐器起振与调制在分析帧内非平稳的问题，该工作用分布导数法估计三阶多项式调幅调频正弦，在 39 个乐器声音上获得更高的信号残差比并在听感上接近原声，代价是峰选择不当仍是主要误差来源且频谱距离指标并不总是最优。"
tags: ["信号处理", "主观评测", "音乐", "音乐生成"]
categories: ["dafx-2026 论文"]
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_paper_id: "conference:dafx:2026:conference-paper-id:DAFx26_paper_34"
paper_digest_source_kind: conference
paper_digest_conference_id: "dafx-2026"
paper_digest_conference_record_url: "https://dafx26.mit.edu/program/"
paper_digest_conference_pdf_url: "https://dafx26.mit.edu/assets/papers/DAFx26_paper_34.pdf"
paper_digest_api_reader_contract: "beginner-researcher-v3"
paper_digest_api_reader_article_sha256: "b4c5a6e5eb0f75f83559aae89bb18a7ffd625ca6406a7578a73f04ed814045fb"
paper_digest_api_reader_plan_sha256: "9b286960930f0266013adad207ca65619571df8935c3b2f23da24747ea0ae3ef"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings-v4"
paper_digest_api_reader_source_bindings_sha256: "ff98c1a5e797deae5f32b04dd6c047ddc8f925c64ba7766292c232f51b441642"
paper_digest_api_reader_source_table_count: 2
paper_digest_api_reader_source_formula_count: 0
paper_digest_api_reader_structured_artifacts_sha256: "d91d38963d55a1dff593d08386065a5f1c0622e0a7c72fab38a93f3f28d4c150"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity-v1"
paper_digest_api_reader_author_identity_sha256: "6eae41a7a7fef315273eeeee9774269a9827f16df5cdee1217459bc827c31a60"
paper_digest_api_reader_author_count: 1
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity-v1"
paper_digest_api_reader_resource_identity_sha256: "67f29008206efb373cdd76987a30fa6d2eb67e284f1ff8688ae8723f880cdefe"
paper_digest_api_reader_resource_count: 0
paper_digest_api_reader_decision_projection: "api-reader-decision-projection-v2"
paper_digest_scoring_contract: "api-scoring-audit-v2"
paper_digest_taxonomy_contract: "paper-taxonomy-flat-tags-compat-v1"
paper_digest_taxonomy_selection_contract: "paper-taxonomy-selection-v1"
paper_digest_taxonomy_registry_version: "paper-taxonomy-v1"
paper_digest_taxonomy_registry_sha256: "15c82a567ce5a55dc1175684ed08b64c158558639d9c8fb822c9587ec32a8778"
paper_digest_taxonomy_concepts: [{"facet":"method","id":"method.signal-processing","label":"信号处理"},{"facet":"method","id":"method.subjective-evaluation","label":"主观评测"},{"facet":"signal","id":"signal.music","label":"音乐"},{"facet":"task","id":"task.music-generation","label":"音乐生成"}]
paper_digest_primary_task: "音乐生成"
paper_digest_primary_method: "信号处理"
paper_digest_score: 5.9
paper_digest_rank_bucket: "前50%"
paper_digest_document_type: "方法研究"
paper_digest_conference_structure: replayable-pdf-layout-v1
---

# 📄 帧内也会变化的乐音：用分布导数法估计多项式调幅调频正弦

> 英文题目：*Using the Distribution Derivative Method to Model Acoustic Musical Instrument Sounds with Polynomial AM-FM Sinusoids*

> 会议身份：`conference:dafx:2026:conference-paper-id:DAFx26_paper_34`


> ✅ 来源为官方会议 PDF；表格与 Figure 按原文证据绑定。PDF 公式以原页区域图片展示，未冒称作者原始 TeX。

> 会议来源：[官方记录](https://dafx26.mit.edu/program/) · [官方 PDF](https://dafx26.mit.edu/assets/papers/DAFx26_paper_34.pdf)

标签：#信号处理 #主观评测 #音乐 #音乐生成

评分：**5.9/10** | 创新 1.2/2 | 技术严谨 1.0/1.5 | 实验充分 1.0/1.5 | 清晰度 0.7/1 | 影响力 0.9/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 0.8/1.5

排名：前50% | 文档类型：方法研究

## 👥 作者与机构

- Marcelo Caetano：机构信息未能从会议 PDF 纯文本可靠映射

## 📌 核心摘要

输入为单声道声学乐器波形，输出为多项式调幅调频正弦分量合成波形加建模残差，难点是起振瞬态与强非平稳调制在同一短帧内并存，准平稳正弦假设会丢失帧内时变能量与滑音细节。方法先以加窗傅里叶变换构造紧支撑检验函数及其导数，利用分布理论把对未知信号的求导转移为对已知窗函数的求导，得到关于多项式系数的线性估计方程。该方程在每个谱峰主瓣内取多个离散傅里叶变换频点联立为超定方程组，用伪逆求解高阶调制系数并以最小二乘估计恒定幅度与初相，上一阶段的频点内积直接构成下一阶段线性系统的行。然后按绝对电平、相对电平、平均峰谷差与主瓣带宽阈值筛选可信谱峰，经交叠相加合成时域波形。与仅在合成端做相位插值的标准正弦模型加功率定标和全频带迭代拟合自适应准谐波模型相比，该方法在分析帧内直接估计对数幅度与相位多项式，故能刻画帧内包络起伏与频率滑动而不把高频噪声当作谐波拟合。在MUSHRA评测条件下，eaQHM的指标F为25.86，高于SM+的指标F 20.31。该结论适用边界受限于forte与fortissimo单音样本、固定三阶模型与特定峰值筛选设置，对复调、语音、混响与低动态弱能量帧尚未验证。原文未披露训练、推理或部署成本。

## 🔗 开源与复现资源

本次未形成可展示的已核验资源记录，开放状态尚未核实。
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 输入是什么，目标是什么，这篇解读要交付什么？

这篇解读的输入是原论文正文与本次收到的官方原图像素，目标是让刚进入语音与音乐音频方向的研究生能够核对关键做法并用自己的话复述方法。解读必须保留的信息包括任务定义、模型假设、估计流程、实验条件、评价指标方向与主要证据，不做超出原文的引申。输出按学习依赖组织，先讲乐器建模为什么困难，再讲已有路线与本文选择，接着走完从 1 帧波形到正弦参数再到合成波形的完整链路，最后讲客观与主观证据以及复现要点。

全文只讨论论文实际研究的任务，也就是把单声道原声乐器声音分解为正弦分量加残差，并提高正弦分量对帧内非平稳振荡的刻画能力。教学中出现的例子会明确标为例子，不虚构数值与效果。资源状态方面，本次未发现来源绑定且完成超文本传输安全协议状态验证的资源，因此不得声称代码、模型或数据已公开，只能按论文文字讨论可复现的算法步骤与参数设置。

### 已有路线如何处理帧内变化，为什么还不够？

传统正弦建模把声音写成正弦分量加残差，正弦分量捕捉振荡模态，残差保留噪声与未被正弦拿走的部分。早期做法把每帧看作准平稳正弦的拼接，假设帧内频率与幅度基本稳定，代表做法是对谱峰附近频点做抛物线插值估计平稳正弦参数，再靠帧间插值形成慢时变。这种做法对持续音中相对稳定的振荡效果较好，但对起振瞬态这类帧内快速变化建模不足。

后续路线把每个分量写成调幅调频正弦，幅度由瞬时对数幅度调制，频率由瞬时相位导数调制，并用相同参数形式同时描述调幅与调频。文献中出现过指数衰减正弦、线性调频、2 次与 3 次相位等多项式特例，也有人做到 5 阶，但原文指出当时估计精度不足以支撑增加阶数带来的质量提升。

估计方法上，重分配方法、全带自适应正弦与导数方法都曾用于乐器建模，其中扩展自适应准谐波模型通过迭代拟合全频带谐波模板获得很强的非平稳表示能力，但也容易把高频噪声振荡当作正弦。分布导数法此前多用于理论比较与合成正弦的估计精度分析，据作者所知还没有被真正用于声音建模，本文的切入点就是把该方法落到乐器声音上。

**自适应准谐波模型 × 标准正弦模型：** 标准正弦模型负责把谱峰当作准平稳正弦估计并靠帧间 3 次相位插值形成时变，流程固定且可复现性强；自适应准谐波模型负责用谐波模板在全频带迭代自适应地拟合时变调幅调频分量，对非平稳跟踪能力强但也容易把高频噪声纳入正弦，二者搭配比较的理由是分别代表广泛可用的基线与文献中报道性能很强的自适应路线，组合意义在于检验分布导数法是在估计精度上取胜还是仅仅在选择策略上取巧。

### 要解决的具体矛盾是什么？

具体矛盾是分析帧的长度与帧内变化之间的冲突。帧太短则频率分辨率不足，帧太长则起振、拨弦、颤音与强音等变化会被平均掉。准平稳假设要求分量在帧内相对稳定，这与乐器好听之处恰恰来自的瞬态、非谐性与模态耦合相冲突。论文把每个分量进一步写成多项式调制正弦，把对数幅度与相位统一写成时间的复系数多项式，阶数决定了能表达的变化丰富程度。1 阶对应平稳或指数衰减正弦，2 阶对应线性调频，3 阶对应 3 次相位，更高阶则更灵活。

问题于是转化为如何在短时傅里叶变换框架下准确估计每个分量的多项式系数，同时避免把旁瓣与噪声误当成分量。评价也要同时回答两个层面，频谱形状是否更接近原声，以及正弦是否拿走了更多振荡能量，缺一不可。

### 整体方法如何从一帧波形走到合成波形？

沿一个样本走一遍有助于建立全局图像。输入是按基频自适应切分的 1 帧波形，窗长与基频周期成正比，重叠一半。表示阶段先做加窗傅里叶变换得到幅度谱，找出局部极大作为候选峰与局部极小作为谷，并用一组门限剔除不可靠的峰。组件阶段对每个保留峰取主瓣附近多个频点，构造关于多项式系数的线性方程组并求解，得到除常数项外的各阶系数，再用最小二乘估计常数幅度与初相。

目标是让该分量的多项式模型在所选频点上的加窗变换尽量吻合观测。输出是把每帧每个分量按复指数多项式直接合成为时域波形，再做叠加相加得到整段正弦分量，原波形减去正弦分量即为残差。本文分布导数法分析阶数取 3 阶，合成同样按 3 次对数幅度与 3 次相位直接生成，不依赖帧间 3 次相位插值。作者提到也尝试过多项式相位插值做重合成，但非正式试听没有发现明显听感差异，因此正文采用叠加相加。

**准平稳正弦 × 多项式调制正弦：** 准平稳正弦负责把 1 帧内看作频率与幅度基本不变的平稳振荡，只用帧间参数微变来形成慢变化；多项式调制正弦负责把同一帧内的幅度对数与相位都写成关于时间的多项式，用 1 次到高次系数直接刻画帧内起伏，二者搭配的理由是前者估计简单但遇到起振与颤音会失配，后者把帧内变化显式参数化，组合意义在于把建模能力从帧间插值前移到帧内估计。

### 分布导数法把求导难题转移到了哪里？

分布理论把信号看作作用在测试函数上的对象，内积定义为信号乘以测试函数共轭在支撑区上的积分。关键恒等式是信号导数与测试函数的内积等于信号与测试函数导数内积的负值，前提是测试函数在支撑区边界为零且至少 1 阶可导。这样，对未知信号求导的困难就转移为对已知窗与傅里叶核求导。

对于加窗傅里叶变换，测试函数是窗乘以复指数，其共轭导数可以写成导数窗项减去频率加权窗项，因此右端只需要计算 2 次加窗傅里叶变换，1 次用原窗，1 次用窗的 1 阶导数。把多项式模型的导数表达式代入该恒等式，就得到关于各阶复系数的线性方程。离散实现时，对每个谱峰取主瓣内多个离散傅里叶变换频点联立方程，未知数个数为阶数，频点数不少于阶数即可唯一求解，更多频点与补零有助于减少估计偏置。

常数项因为求导消失而不在该方程组中，需要在高阶系数已知后重建分量波形，再用同一组频点做最小二乘求解。

**分布导数法 × 加窗傅里叶变换：** 分布导数法负责利用分布意义下求导转移的思想，把对未知信号求导转化为对已知测试函数求导，从而得到关于多项式系数的线性方程；加窗傅里叶变换负责提供可实际计算的测试函数实现，即窗函数乘以傅里叶核及其导数窗的 2 次变换，二者搭配的理由是理论上的内积恒等式需要离散可算的落点，组合意义在于只需快速傅里叶变换与伪逆就能估计任意阶多项式系数。

峰选择与参数估计是前后串联的两道关口，门限设置直接决定方程组拟合的是正弦还是噪声。本文用的门限包括绝对电平、相对帧内最大电平、平均峰谷差与主瓣带宽，峰顶过低、相对过低、峰谷对比不足或带宽过窄都会被剔除。下面的官方原图展示了估计所依赖的谱峰结构，阅读时应把峰、谷与参与估计的频点 3 类符号分开看。

> **看图路径：** 1. 先看横轴频率与纵轴幅度电平，确认五组主瓣的峰顶位置与量级；2. 再对照图例区分红色星形峰、蓝色叉形谷与黑色圆点参与估计的频点；3. 观察每个峰左右谷之间黑色圆点的覆盖范围，理解主瓣能量集中区的取点逻辑；4. 注意低频端与高频端谷点位置的起伏，思考旁瓣与噪声对选点的干扰

[![原论文 Figure 1：Illustration of DDM estimation from spectral peaks.](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/375ff623ba75/figure-1.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/375ff623ba75/figure-1.png)

*论文图 1。原论文 Figure 1：“Illustration of DDM estimation from spectral peaks.”。*

该图横轴为频率，纵轴为功率谱幅度，灰色曲线为幅度谱，顶部图例区分了幅度曲线、参与估计的频点、峰与谷。从像素可见 5 个主瓣峰顶量级相近，每个主瓣周围布满黑色圆点，左右各有一个蓝色叉形谷点，说明估计频点取自主瓣能量集中区而非远旁瓣。低频端左侧谷点与个别右侧谷点位置略有起伏，提示实际谱形受旁瓣与噪声影响。教学例子是，假如把远离主瓣的噪声谷也纳入方程组，拟合的多项式就会被迫解释噪声形状，这正是峰选择要拦截的情况。

**峰选择 × 参数估计：** 峰选择负责决定哪些谱峰值得当作正弦来建模，用绝对电平、相对电平、平均峰谷差与主瓣带宽剔除旁瓣与噪声；参数估计负责对保留下来的每个峰解线性方程组得到调幅调频系数，二者搭配的理由是方程组对每个峰独立求解，选错对象就会把噪声拟合成正弦，组合意义在于建模质量同时受选择门限与估计精度的约束，而不是只由估计器决定。

### 本研究有没有训练阶段，真实计算是什么？

本研究没有神经网络训练阶段，也就没有梯度下降、损失反传、参数冻结与解冻、早停或权重下载等概念。真实计算是逐帧的信号处理与数值线性代数。对每 1 帧，先计算原窗与导数窗的短时谱并做大幅补零，再做峰检测与门限筛选。对每个保留峰，用主瓣内多个频点组装线性方程组并用伪逆求解多项式系数，然后重建该分量并估计常数项。合成阶段按复指数多项式逐帧生成波形并叠加相加。

因为没有训练，所以不存在学习率、批量、轮数与验证集选择，不存在从模型名称推定某种网络结构的问题，也不能把无训练等同于输出完全确定，数值求解仍受峰选择、频点选择与伪逆条件数的影响。原文未报告不同窗函数的系统对照，也未报告运行时间与内存开销，这些缺项在复现时需要自行记录，不能用估计精度高来推定计算代价低。

### 用什么声音、与谁比、在什么条件下比？

比较问题是分布导数法是否比广泛可用的标准模型与自适应强基线更好地表示乐器声音。公平条件是三者共用相同的窗长规则、重叠、补零与最大分量数，只有分析与合成阶数按各自模型定义保留差异。评价分客观与主观两条线，客观包括频谱距离与时域能量比，主观采用多刺激隐藏参考与锚点的听感协议。

声音覆盖铜管、木管、弓弦、拨弦与打击乐，共 39 个强奏声音，并按演奏法分为持续、打击与调制 3 组，每组 13 个，持续作为相对平稳的基线，打击考验起振瞬态，调制考验颤音与强弱变化。指标方向需要先讲清，均方根对数谱测度与板仓斋藤散度越小越好，信号残差比越大越好，前两者按帧取中位数，后者按整段波形计算。

下表整理原文给出的可运行配置，阅读重点是哪些参数被固定为相同，哪些是模型特有选择。表头中条件列指配置项，指标列指取值含义，后三列为各模型或共同设置。

| 条件 | 指标 | 共同设置 | 分布导数法特有 | 标准模型与选择门限 |
| --- | --- | --- | --- | --- |
| 分析窗 | 窗类型与窗长 | 汉恩窗，窗长与基频周期成正比 | 零相位非因果实现 | 同左 |
| 频域分辨率 | 傅里叶点数 | 补零至窗长 24 倍 | 同左 | 同左 |
| 分量上限 | 最大分量数 | 上限 100 | 分析阶数 3 阶 | 标准模型按平稳正弦分析 |
| 峰筛选 | 电平与形状门限 | 绝对与相对电平门限 | 3 次对数幅度与 3 次相位合成 | 带宽与峰谷差门限 |

上表的主要收益是可复现性强，窗长按基频自适应、补零倍数与分量上限都已明确，听感锚点的构造方式也在正文交代。具体代价是峰选择门限同时影响分布导数法与标准模型，而自适应模型用谐波模板全频带拟合，门限逻辑并不完全对齐，因此频谱距离的差异 partly 来自选峰策略而非纯估计精度。未胜出项方面，自适应模型在个别声音上未能收敛，原文明确指出吉他谱森属于此类，这类失败条件在比较时不应被当作零分，而应标注为缺失。

### 客观频谱距离显示了什么，支持什么判断？

客观频谱距离要回答的是合成谱形状是否更接近原谱。原文报告，对持续音，分布导数法与自适应模型在均方根对数谱测度上多数情况下相当，标准模型几乎总是更高。对持续音的板仓斋藤散度，分布导数法与标准模型多数相当，而自适应模型一般更低。对打击与调制声音，分布导数法与标准模型的两项频谱距离在多数情况下高于自适应模型。

作者的解释是，分布导数法与标准模型共享峰选择门限，整帧谱能量低于绝对门限的帧不会被建模，从而拉高频谱距离，而自适应模型仍会按谐波模板拟合最接近的峰，即使对应的是噪声。这种解释得到时域能量比的支持，说明拟合更多峰不等于拿走更多真实振荡能量。

**信号残差比 × 频谱距离：** 信号残差比负责在时域整段波形上衡量正弦分量拿走了多少能量，残差能量越小比值越高；频谱距离负责在频域逐帧衡量原谱与合成谱的对数幅度差异，包括均方根对数谱测度与板仓斋藤散度，二者搭配的理由是前者对即使很小的幅度常数与初相误差也很敏感，后者更反映谱包络形状差异，组合意义在于可以区分是拟合的峰更准还是拟合的峰更多。

下图为频谱建模精度的分组柱状比较，阅读时先看面板分组，再看同组内柱子高低，柱子越低表示频谱距离越小。

> **看图路径：** 1. 先确认分面板结构：上中下分别对应持续、打击与调制三组乐器；2. 再按图例区分四种柱子，重点比较每组内黑色柱与其他柱的高低；3. 观察打击与调制组中黑色柱明显偏高的乐器，以及个别反例的位置；4. 注意蓝色高亮标记为听感评测子集，联系后文主观结果一起理解

[![原论文 Figure 3：Comparison of spectral modeling accuracy (↓) of DDM, eaQHM, SM+, and the anchor (AC) for…](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/375ff623ba75/figure-3.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/375ff623ba75/figure-3.png)

*论文图 3。原论文 Figure 3：“Comparison of spectral modeling accuracy (↓) of DDM, eaQHM, SM+, and the anchor (AC) for sustained, percussive, and modulated musical instrument sounds.”。*

从本次收到的像素看，该图分上下两部分，下半为调制组板仓斋藤散度，上半局部可见打击组散度，图例区分了分布导数法、自适应模型、标准模型与锚点。可见打击组中多个乐器上分布导数法的黑色柱明显高于自适应模型的浅色柱，调制组中个别乐器如与强音相关的柱子也呈现类似 pattern，而锚点柱子普遍很低是因为其频谱距离按该图截断显示需要结合正文理解，不能把单图柱高直接等同于整体胜负。

结合正文文字，该图支持的判断是频谱距离上自适应模型占优，但这与后文时域能量比形成反证，需要两类指标联合解读。限制是频谱距离按帧取中位数，对未建模帧很敏感，复现时必须严格复刻聚合方式，否则中位数与均值会给出不同结论。

### 时域能量比是否给出相反证据，反例在哪里？

时域能量比要回答的是正弦分量是否拿走了更多振荡能量，残差是否更接近乐器噪声。该指标用整段波形计算，对常数幅度与初相的微小误差也很严格。原文报告分布导数法的信号残差比在几乎所有声音上都高于另外两者，只有一个马林巴例外，而标准模型与自适应模型多数情况下相当。作者据此认为，即使分布导数法建模的谱峰数量少于自适应模型，它对保留峰的估计更准确，残差更干净。这一结论与频谱距离形成对照，说明两类指标衡量的不是同一件事，不能用频谱距离低直接推定听感一定好。

下图为时域建模精度的分组比较，纵轴为信号残差比，向上为好，分三排对应持续、打击与调制。

> **看图路径：** 1. 先确认纵轴为信号残差比且向上为好，再看三个面板的量程差异；2. 逐乐器比较同一横坐标下四根柱子的相对高度，记录黑色柱是否领先；3. 重点观察打击组中马林巴附近的例外，以及持续组各乐器领先幅度的变化；4. 注意吉他谱森缺失自适应模型柱子的位置，理解为未收敛而非零分

[![原论文 Figure 2：Comparison of temporal modeling accuracy (↑) of DDM, eaQHM, SM+, and the anchor (AC) for…](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/375ff623ba75/figure-2.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/375ff623ba75/figure-2.png)

*论文图 2。原论文 Figure 2：“Comparison of temporal modeling accuracy (↑) of DDM, eaQHM, SM+, and the anchor (AC) for sustained, percus- sive, and modulated musical instrument sounds.”。*

从像素可见持续组每组横坐标下黑色柱多为最高，打击组中羽管键琴与拨弦中提琴等位置黑色柱领先幅度很大，调制组中多个颤音与强音位置黑色柱同样领先。需要就近说明的反例是打击组马林巴附近黑色柱并未领先，以及吉他谱森位置缺失自适应模型柱子，原文明确标注为未能收敛。未评测边界是该指标未区分残差中乐器噪声与算法伪像，残差能量低可能是拟合准，也可能是过拟合噪声，因此必须结合听感结果才能确认质量提升是可听的。

### 听感评测在什么协议下进行，结果有何边界？

听感评测采用多刺激隐藏参考与锚点协议，每个评测页包含参考在上、5 个待评声音在下，待评包括 3 个模型加隐藏参考与锚点，参考顺序与待评顺序都随机化。锚点是退化版标准模型，只用 15 个谱峰、最近邻估计与频率积分重建相位，目的是模拟典型伪像。评测在线进行，先有示例页熟悉流程并调整音量，共选 18 个声音，每种演奏法 6 个。量表为零到一百分，期望参考接近一百分，锚点接近零分。

数据质控剔除了对隐藏参考打分过低或对锚点打分过高比例超过阈值的被试，最终 13 人中保留 5 人分析，并剔除一个极端离群评分。统计用双因素重复测量方差分析，模型为第一因素，演奏法为第二因素，再用校正后的成对比较确定优劣。

下图为按演奏法分组的听感评分箱体，阅读时先定位参考与锚点，再看 3 个模型的箱体位置。

> **看图路径：** 1. 先看横轴五个模型分组与纵轴听感评分，确认参考与锚点分别靠近顶部与底部；2. 再比较同一模型内三种演奏法箱体的中线与收缩腰部位置；3. 重点观察分布导数法三只箱体都靠近参考，而自适应与标准模型在打击组明显下移；4. 注意离散圆点的拖尾，理解个体差异与个别低分样本的存在

[![原论文 Figure 4：Comparison of perceptual evaluation of quality for the anchor (AC), DDM, eaQHM, the reference…](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/375ff623ba75/figure-4.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/375ff623ba75/figure-4.png)

*论文图 4。原论文 Figure 4：“Comparison of perceptual evaluation of quality for the anchor (AC), DDM, eaQHM, the reference (REF), and SM+ for the playing techniques modulated (mod), percussive (perc), and…”。*

从像素可见参考三只箱体紧贴顶部，锚点三只箱体靠近底部，分布导数法三只箱体明显高于自适应与标准模型且靠近参考，自适应模型在打击组箱体中线下移最明显，标准模型 3 组箱体都居中偏低且拖尾较长。这支持原文报告的双因素方差分析结论，即模型主效应显著而演奏法主效应不显著，但二者交互显著，进一步按模型单看演奏法效应时，参考、锚点与分布导数法无显著差异，而自适应与标准模型受演奏法影响显著，说明分布导数法跨演奏法更稳定。

边界是有效样本仅 5 人，证据强度有限，且成对比较显示参考仍显著高于分布导数法，因此只能说接近透明而非完全透明。待验证的是更大被试量与更多音色下结论是否成立。

### 复现应先固定什么，统计数字如何核对？

复现先做三件事。第一，按基频自适应窗长、重叠、补零与分量上限固定分析流程，峰选择门限取原文值，避免先调门限再比估计器。第二，对每个保留峰独立组装方程组并用伪逆求解，记录频点数、补零倍数与条件数，确认阶数增加是否 effortless 而非精度自动提升。第三，客观指标严格复刻聚合口径，频谱距离按帧取中位数，信号残差比按整段波形计算，百分点与相对百分比不混用，不同指标差值不放在同一模型列下比较。

下表整理原文报告的听感统计关键数字，用于核对显著性结论而非替代可运行收益。表中条件列指统计检验，指标列指检验量，后三列为原文报告值与样本说明。

| 条件 | 指标 | 检验量 | 显著性 | 样本与质控 |
| --- | --- | --- | --- | --- |
| 模型主效应 | 方差分析 | 自由度与统计量 | 显著 | 总 13 人保留 5 人 |
| 演奏法主效应 | 方差分析 | 自由度与统计量 | 不显著 | 同左 |
| 交互效应 | 方差分析 | 自由度与统计量 | 显著 | 同左 |
| 成对比较 | 校正检验 | 参考高于分布导数法 | 边缘显著 | 剔除个别离群评分 |
| 成对比较 | 校正检验 | 分布导数法高于自适应 | 显著 | 同左 |

上表的主要收益是给出了可核对的统计框架，模型差异显著且受演奏法调节。具体代价是有效样本小，参考与分布导数法差异的证据弱于其他成对差异，不能夸大为完全不可区分。未胜出项是标准模型显著高于锚点，说明基线并非无效，只是质量低于两个非平稳模型。复现时还需补的验证是报告逐乐器原始分数分布与缺失处理，而不是只看箱体中线。

### 何时值得尝试，还需补哪项验证？

当任务涉及帧内快速变化的单声道乐器建模，且已有准平稳基线在起振处出现涂抹或颤音跟踪不稳时，值得尝试把每个分量显式写成 3 阶多项式调幅调频正弦并用分布导数法估计。复现时优先固定窗长规则与峰选择门限，再比较估计器本身，避免把选峰策略差异误读为估计精度差异。论文直接报告的是信号残差比领先与听感评分更高，有限解释是估计更准而非拟合更多，未验证推测是更高阶一定更好或换窗一定提升，这些在原文中明确列为未来工作。

常见误解是把自适应拟合更多峰等同于更好，本文证据恰好说明拟合噪声峰会改善频谱距离的中位数但不改善时域能量与听感。另一误解是把无训练等同于无超参数，实际上门限、频点数与补零倍数都是影响结果的关键选择。未来验证应补不同窗函数的系统对照、对非正弦峰的鲁棒选择策略，以及语音与复音上的泛化测试，同时记录推理开销与实际延迟，避免只谈质量不谈成本。

## 📐 原文公式与排版

以下展示论文原页中的数学表达区域，保留原始上下标、分式和符号排版。区域序号仅用于本文导航，不是论文公式编号。

[![原文数学表达区域 1，PDF 第 1 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/578dabe1d196/figure-1.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/578dabe1d196/figure-1.png)

区域 1 · [查看论文原页](https://dafx26.mit.edu/assets/papers/DAFx26_paper_34.pdf#page=1)

[![原文数学表达区域 2，PDF 第 1 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/578dabe1d196/figure-2.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/578dabe1d196/figure-2.png)

区域 2 · [查看论文原页](https://dafx26.mit.edu/assets/papers/DAFx26_paper_34.pdf#page=1)

[![原文数学表达区域 3，PDF 第 1 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/578dabe1d196/figure-3.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/578dabe1d196/figure-3.png)

区域 3 · [查看论文原页](https://dafx26.mit.edu/assets/papers/DAFx26_paper_34.pdf#page=1)

[![原文数学表达区域 4，PDF 第 1 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/578dabe1d196/figure-4.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/578dabe1d196/figure-4.png)

区域 4 · [查看论文原页](https://dafx26.mit.edu/assets/papers/DAFx26_paper_34.pdf#page=1)

[![原文数学表达区域 5，PDF 第 1 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/578dabe1d196/figure-5.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/578dabe1d196/figure-5.png)

区域 5 · [查看论文原页](https://dafx26.mit.edu/assets/papers/DAFx26_paper_34.pdf#page=1)

[![原文数学表达区域 6，PDF 第 1 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/578dabe1d196/figure-6.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/578dabe1d196/figure-6.png)

区域 6 · [查看论文原页](https://dafx26.mit.edu/assets/papers/DAFx26_paper_34.pdf#page=1)

[![原文数学表达区域 7，PDF 第 1 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/578dabe1d196/figure-7.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/578dabe1d196/figure-7.png)

区域 7 · [查看论文原页](https://dafx26.mit.edu/assets/papers/DAFx26_paper_34.pdf#page=1)

[![原文数学表达区域 8，PDF 第 1 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/578dabe1d196/figure-8.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/578dabe1d196/figure-8.png)

区域 8 · [查看论文原页](https://dafx26.mit.edu/assets/papers/DAFx26_paper_34.pdf#page=1)

[![原文数学表达区域 9，PDF 第 2 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/578dabe1d196/figure-9.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/578dabe1d196/figure-9.png)

区域 9 · [查看论文原页](https://dafx26.mit.edu/assets/papers/DAFx26_paper_34.pdf#page=2)

[![原文数学表达区域 10，PDF 第 2 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/578dabe1d196/figure-10.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/578dabe1d196/figure-10.png)

区域 10 · [查看论文原页](https://dafx26.mit.edu/assets/papers/DAFx26_paper_34.pdf#page=2)

[![原文数学表达区域 11，PDF 第 2 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/578dabe1d196/figure-11.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/578dabe1d196/figure-11.png)

区域 11 · [查看论文原页](https://dafx26.mit.edu/assets/papers/DAFx26_paper_34.pdf#page=2)

[![原文数学表达区域 12，PDF 第 2 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/578dabe1d196/figure-12.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/578dabe1d196/figure-12.png)

区域 12 · [查看论文原页](https://dafx26.mit.edu/assets/papers/DAFx26_paper_34.pdf#page=2)

[![原文数学表达区域 13，PDF 第 2 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/578dabe1d196/figure-13.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/578dabe1d196/figure-13.png)

区域 13 · [查看论文原页](https://dafx26.mit.edu/assets/papers/DAFx26_paper_34.pdf#page=2)

[![原文数学表达区域 14，PDF 第 2 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/578dabe1d196/figure-14.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/578dabe1d196/figure-14.png)

区域 14 · [查看论文原页](https://dafx26.mit.edu/assets/papers/DAFx26_paper_34.pdf#page=2)

[![原文数学表达区域 15，PDF 第 2 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/578dabe1d196/figure-15.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/578dabe1d196/figure-15.png)

区域 15 · [查看论文原页](https://dafx26.mit.edu/assets/papers/DAFx26_paper_34.pdf#page=2)

[![原文数学表达区域 16，PDF 第 2 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/578dabe1d196/figure-16.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/578dabe1d196/figure-16.png)

区域 16 · [查看论文原页](https://dafx26.mit.edu/assets/papers/DAFx26_paper_34.pdf#page=2)

[![原文数学表达区域 17，PDF 第 2 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/578dabe1d196/figure-17.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/578dabe1d196/figure-17.png)

区域 17 · [查看论文原页](https://dafx26.mit.edu/assets/papers/DAFx26_paper_34.pdf#page=2)

[![原文数学表达区域 18，PDF 第 2 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/578dabe1d196/figure-18.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/578dabe1d196/figure-18.png)

区域 18 · [查看论文原页](https://dafx26.mit.edu/assets/papers/DAFx26_paper_34.pdf#page=2)

[![原文数学表达区域 19，PDF 第 2 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/578dabe1d196/figure-19.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/578dabe1d196/figure-19.png)

区域 19 · [查看论文原页](https://dafx26.mit.edu/assets/papers/DAFx26_paper_34.pdf#page=2)

[![原文数学表达区域 20，PDF 第 2 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/578dabe1d196/figure-20.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/578dabe1d196/figure-20.png)

区域 20 · [查看论文原页](https://dafx26.mit.edu/assets/papers/DAFx26_paper_34.pdf#page=2)

[![原文数学表达区域 21，PDF 第 2 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/578dabe1d196/figure-21.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/578dabe1d196/figure-21.png)

区域 21 · [查看论文原页](https://dafx26.mit.edu/assets/papers/DAFx26_paper_34.pdf#page=2)

[![原文数学表达区域 22，PDF 第 3 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/578dabe1d196/figure-22.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/578dabe1d196/figure-22.png)

区域 22 · [查看论文原页](https://dafx26.mit.edu/assets/papers/DAFx26_paper_34.pdf#page=3)

[![原文数学表达区域 23，PDF 第 3 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/578dabe1d196/figure-23.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/578dabe1d196/figure-23.png)

区域 23 · [查看论文原页](https://dafx26.mit.edu/assets/papers/DAFx26_paper_34.pdf#page=3)

[![原文数学表达区域 24，PDF 第 3 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/578dabe1d196/figure-24.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/578dabe1d196/figure-24.png)

区域 24 · [查看论文原页](https://dafx26.mit.edu/assets/papers/DAFx26_paper_34.pdf#page=3)

[![原文数学表达区域 25，PDF 第 4 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/578dabe1d196/figure-25.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/578dabe1d196/figure-25.png)

区域 25 · [查看论文原页](https://dafx26.mit.edu/assets/papers/DAFx26_paper_34.pdf#page=4)

[![原文数学表达区域 26，PDF 第 4 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/578dabe1d196/figure-26.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/578dabe1d196/figure-26.png)

区域 26 · [查看论文原页](https://dafx26.mit.edu/assets/papers/DAFx26_paper_34.pdf#page=4)

[![原文数学表达区域 27，PDF 第 4 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/578dabe1d196/figure-27.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/578dabe1d196/figure-27.png)

区域 27 · [查看论文原页](https://dafx26.mit.edu/assets/papers/DAFx26_paper_34.pdf#page=4)

[![原文数学表达区域 28，PDF 第 6 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/578dabe1d196/figure-28.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/578dabe1d196/figure-28.png)

区域 28 · [查看论文原页](https://dafx26.mit.edu/assets/papers/DAFx26_paper_34.pdf#page=6)

[![原文数学表达区域 29，PDF 第 6 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/578dabe1d196/figure-29.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/578dabe1d196/figure-29.png)

区域 29 · [查看论文原页](https://dafx26.mit.edu/assets/papers/DAFx26_paper_34.pdf#page=6)

[![原文数学表达区域 30，PDF 第 6 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/578dabe1d196/figure-30.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/578dabe1d196/figure-30.png)

区域 30 · [查看论文原页](https://dafx26.mit.edu/assets/papers/DAFx26_paper_34.pdf#page=6)

另有 29 个候选区域因边界不明确或图片数量、尺寸限制未展开；请[查看完整论文](https://dafx26.mit.edu/assets/papers/DAFx26_paper_34.pdf)中的原始排版。

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。
- 评分规则：type-aware-v1
- 评分模型：muse-spark-1.3-contributor
- 评分请求协议：openai_responses

---

[← 返回 dafx-2026 论文汇总](/posts/conference-dafx-2026/)
