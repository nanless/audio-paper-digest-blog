---
title: "Physical Model of the Chinese Yehu for Sound Synthesis"
date: 2026-09-13
draft: false
description: "该文把耶胡拆成两根刚性弦、按压手指、弹性弓毛与模态琴桥来做有限差分声音合成，用锤击与激光测振标定弦与琴桥参数，在弓弦稳态速度拟合与 10 秒音频约 1.49 秒算完的实时性上给出证据，代价是手指参数靠经验选取且弓力弓速在演奏验证中未知。"
tags: ["信号处理", "实时处理", "音乐", "音乐生成"]
categories: ["dafx-2026 论文"]
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_paper_id: "conference:dafx:2026:conference-paper-id:DAFx26_paper_43"
paper_digest_source_kind: conference
paper_digest_conference_id: "dafx-2026"
paper_digest_conference_record_url: "https://dafx26.mit.edu/program/"
paper_digest_conference_pdf_url: "https://dafx26.mit.edu/assets/papers/DAFx26_paper_43.pdf"
paper_digest_api_reader_contract: "beginner-researcher-v3"
paper_digest_api_reader_article_sha256: "ab81552e7e0feb70cf9f33fcaf3f7ab822f4a4c3ab8773889d3c2516b79f5052"
paper_digest_api_reader_plan_sha256: "48fd616fe2b8b6a07c7637eeb6f69732c2f3d20e5aed48661a15050855534b6d"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings-v4"
paper_digest_api_reader_source_bindings_sha256: "14bca042e350637500fbba7d941d15e3618f9541a3d70f2343d47941e2d42f20"
paper_digest_api_reader_source_table_count: 3
paper_digest_api_reader_source_formula_count: 0
paper_digest_api_reader_structured_artifacts_sha256: "2381b4185622e109703d17e0e657cbfef9017e58a2186f55092e4c2a0e3018a0"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity-v1"
paper_digest_api_reader_author_identity_sha256: "b5fd6fd52bc2532c87cb6286e4312c108cd4a242ba0b2506dace4c3b5c47ccd7"
paper_digest_api_reader_author_count: 3
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity-v1"
paper_digest_api_reader_resource_identity_sha256: "6d2ed7cca590274891d52003ee5a548c52ac122d8629b121adfdd11870e424d2"
paper_digest_api_reader_resource_count: 2
paper_digest_api_reader_decision_projection: "api-reader-decision-projection-v2"
paper_digest_scoring_contract: "api-scoring-audit-v2"
paper_digest_taxonomy_contract: "paper-taxonomy-flat-tags-compat-v1"
paper_digest_taxonomy_selection_contract: "paper-taxonomy-selection-v1"
paper_digest_taxonomy_registry_version: "paper-taxonomy-v1"
paper_digest_taxonomy_registry_sha256: "15c82a567ce5a55dc1175684ed08b64c158558639d9c8fb822c9587ec32a8778"
paper_digest_taxonomy_concepts: [{"facet":"method","id":"method.signal-processing","label":"信号处理"},{"facet":"setting","id":"setting.real-time","label":"实时处理"},{"facet":"signal","id":"signal.music","label":"音乐"},{"facet":"task","id":"task.music-generation","label":"音乐生成"}]
paper_digest_primary_task: "音乐生成"
paper_digest_primary_method: "信号处理"
paper_digest_score: 6.9
paper_digest_rank_bucket: "前50%"
paper_digest_document_type: "方法研究"
paper_digest_conference_structure: replayable-pdf-layout-v1
---

# 📄 椰壳共鸣的两根丝弦如何被算出声音：耶胡的刚性弦、弹塑性弓毛与模态琴桥

> 英文题目：*Physical Model of the Chinese Yehu for Sound Synthesis*

> 会议身份：`conference:dafx:2026:conference-paper-id:DAFx26_paper_43`


> ✅ 来源为官方会议 PDF；表格与 Figure 按原文证据绑定。PDF 公式以原页区域图片展示，未冒称作者原始 TeX。

> 会议来源：[官方记录](https://dafx26.mit.edu/program/) · [官方 PDF](https://dafx26.mit.edu/assets/papers/DAFx26_paper_43.pdf)

标签：#信号处理 #实时处理 #音乐 #音乐生成

评分：**6.9/10** | 创新 1.2/2 | 技术严谨 1.2/1.5 | 实验充分 0.7/1.5 | 清晰度 0.8/1 | 影响力 0.5/1.5 | 开源 1.2/1.5 | 可复现 0.3/0.5 | 工程/实践 1.0/1.5

排名：前50% | 文档类型：方法研究

## 👥 作者与机构

- Zhen Zheng：机构信息未能从会议 PDF 纯文本可靠映射
- Champ Darabundit：机构信息未能从会议 PDF 纯文本可靠映射
- Gary Scavone：机构信息未能从会议 PDF 纯文本可靠映射

## 📌 核心摘要

耶胡合成需以弓毛运动与手指按弦为输入生成经椰壳琴体辐射的音频输出，难点在于丝弦刚度与损耗、弓弦弹塑性摩擦、经琴码双弦强耦合与无指板按弦碰撞须同时稳定求解。该工作先以刚性弦偏微分方程承载三类作用力并做有限差分能量平衡离散，再以能量二次化非迭代求解手指碰撞并更新弦与手指位移。接着以模态质量弹簧阻尼组描述琴码导纳并刚性约束求解双弦耦合力，最后以弹塑性刷毛模型迭代求解弓弦摩擦并经并联二阶滤波器组施加辐射特性。与静态摩擦曲线或纯波导反射建模相比，关键差异在于刷毛弹塑性迟滞加毛发弹性与非迭代碰撞的组合保证了大范围手势下的无条件耗散稳定。在44.1kHz采样仿真任务下，20秒输入的计算时间指标为2.95 seconds，低于30秒输入的计算时间指标4.5 seconds。该结论适用边界受限于单弓单弦演奏与固定琴体线性辐射假设，尚未验证多指按弦、张力调制揉弦与听感质量的跨乐器外推。推理开销在2020款M1 MacBook Pro硬件上约6.6倍实时，10秒仿真能量偏差维持在10−15量级。

## 🔗 开源与复现资源

- 代码相关资源：<https://yehudafx26.github.io/> — 链接可访问（HTTP 200）
- 演示资源：<https://yehudafx26.github.io/> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 耶胡发声难在哪，为什么值得单独建模？

输入是这篇论文的全文证据与官方原图像素，目标是让刚进入音频领域的研究生能核对并复述方法，必须保留的是实验条件、参数来源与计算流程，输出是这篇中文技术解读。耶胡是两根丝弦的中国拉弦乐器，弓毛穿在两弦之间，演奏时一般 1 次只拉一根，但手指常同时按住两根。共鸣体是挖空的椰壳，弦压在贝壳做的桥上，桥下有木板与椰壳刚性连接。有效振动段从束弦圈到桥，但为了算出弦桥耦合，建模把弦延长到尾栓。

初学者容易把它当成小提琴直接套用模型，这会漏掉 3 个特点。第一，弦是编织丝弦，密度、半径、张力与损耗与钢弦不同，需要实测。第二，没有指板，手指直接掐弦，接触是非线性碰撞，不能当成理想固定端。第三，桥与椰壳腔的共振很突出，辐射染色必须单独标定。论文要解决的任务就是在这些约束下做出可实时计算、可换演奏手势的声音合成，而不是只做离线音色模仿。

后续所有公式与实验都围绕这一任务展开，教学用的例子会明确标为例子，不加入无来源的数值。

### 弓弦与手指建模有哪些已有路线？

弓弦摩擦有静态与动态两条路线。静态路线把摩擦力写成相对速度的函数，例如摩擦曲线模型，计算简单但难表示粘着记忆。动态路线引入刷毛变形与迟滞，例如弹塑性模型与热摩擦模型，能表示从粘着到滑脱的过渡，但需要解非线性方程。时域实现常用数字波导与有限差分，有限差分更方便加入刚度、频率相关损耗与碰撞。手指与弦的接触常写成碰撞，早期用能量守恒的迭代格式保证稳定，近期用能量 2 次化做非迭代求解以省时间。

弦与琴体的耦合有波传播法与模态法，波传播法用反射透射滤波器，模态法把桥导纳展开成多阶振动并与弦联立。本文选择有限差分加模态桥、弹塑性弓毛摩擦加能量 2 次化手指，理由是既要保留椰壳桥的实测共振，又要让双弦同时被按时的求解保持实时。同输入同目标的对照是小提琴类的弓弦有限差分工作，同运行阶段的对照是需要实时交互的吉他与擦弦合成工作，类别不同不能直接比分数，只能比建模假设与计算代价。

### 论文把耶胡抽象成什么输入输出问题？

先沿一个样本走完流程。输入是随时间变化的弓力、弓速、弓在弦上的位置、手指位置与手指外力，以及弦与桥的物理参数。表示是两根弦的横向位移场、手指的垂向位移、桥各模态位移、弓毛位移与刷毛平均变形。组件是刚性弦算子、手指碰撞、桥模态耦合与弓毛摩擦。目标是算出桥点受力的时间序列，再经辐射滤波得到可听声压。

输出是桥速度波形与合成音频。一个教学例子是拉空弦：手指不接触，弓以恒定力速拉内弦，弦经桥把能量传给椰壳腔，听到的就是带腔共振的持续音；按弦时手指在某点压住双弦，有效弦长缩短，音高上升。论文把乐器视为单声部，即便两弦都被按住，同一时刻只用有符号弓力决定拉哪一根。需要先理解的概念是横向位移、导纳与传递函数，导纳是力到速度的频率响应，传递函数在这里指桥力到声压的频率响应，后文的拟合与滤波都依赖这两个定义。

### 整体模型由哪些部件按什么顺序连接？

方法全景是两弦加 3 类力。两根刚性弦各自由密度、截面积、张力、杨氏模量、截面惯性矩与两项损耗决定，边界为简支，即两端位移与 2 阶空间导数为零。3 类力是手指接触力、弓摩擦力与桥耦合力，通过空间分布函数映射到弦上。手指用 Hunt-Crossley 碰撞，穿透量是弦在手指处的插值位移减去手指位置。桥用多个质量弹簧阻尼模态并联表示实测导纳，弦在桥点的位移等于桥位移，这是刚性耦合假设。

弓用带质量、刚度、阻尼的弓毛振子加弹塑性刷毛模型，相对速度是弦速加弓毛速减去弓体运动速度。能量分析把弦、手指、桥、弓毛与刷毛的储能、耗散、外部输入与边界项放在一个功率平衡式中检验。数值上先求桥耦合力与弓摩擦力，再更新无手指接触时的弦与手指状态，最后用非迭代格式加入手指力并更新桥模态与弓毛。

下面这张实物与简化侧视图是全篇的地图，读懂它才能把符号与代码位置对应起来。

> **看图路径：** 1. 先看左侧实物标注：从调音轴、束弦圈、丝弦到椰壳音箱、贝壳桥与弦尾栓的上下顺序；2. 再看右侧简化侧视图：弦在束弦圈与栓之间简支，桥点 xc 把弦分成上下两段；3. 对照手指作用点 xf(t) 与弓作用点 xb(t) 在弦上的相对位置，确认输入点与耦合点不同

[![原论文 Figure 1：Left: A picture of the author’s yehu with parts labeled.](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/e3db921b676c/figure-1.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/e3db921b676c/figure-1.png)

*论文图 1。原论文 Figure 1：“Left: A picture of the author’s yehu with parts labeled.”。*

左侧照片从上到下标出调音轴、束弦圈、丝弦、竹弓、椰壳音箱、贝壳桥与尾栓，弓毛穿过两弦之间。右侧侧视图把弦画成从束弦圈到尾栓的直线，桥点 xc 处用三角标记表示耦合，手指点 xf(t) 用圆点表示可滑动按压，弓点 xb(t) 用横条表示作用位置。该图说明有效振动段与计算域不同，计算域特意延长到尾栓以容纳桥耦合，这是理解后续耦合方程的前提。

### 弦、手指与桥耦合具体怎么算？

弦算子包含惯性、张力、弯曲刚度与两项损耗，离散时用有限差分矩阵表示空间导数，用时间差分表示速度与加速度，手指、弓与桥的分布分别用 3 次、线性与点扩散算子，插值算子是其转置乘以网格间距。手指力的连续形式是接触势对穿透量的导数加阻尼项，势函数含刚度、非线性指数与穿透量的幂次。能量 2 次化把势写成平方项，引入梯度与修正因子保证非负，再与手指运动方程联立。

联立后的线性系统是分块对角加秩 1 修正，可用 Sherman-Morrison 公式高效求逆，先解手指位移再回代两弦位移。桥模态离散后得到模态位移更新式，与弦在桥点的插值约束联立，可解出两弦各自的耦合力。弓摩擦的刷毛方程含稳态函数、Stribeck 速度、静动摩擦系数与法向力，粘着映射区分粘着、过渡与滑动，并用与速度相关的刷毛阻尼保证无源性。离散时弓弦放在交错网格上用 2 阶格式，相对速度方程与刷毛方程构成非线性残差，用牛顿迭代求解。

**刚性弦 × 模态琴桥：** 刚性弦负责产生横向振动并保留张力、弯曲刚度与频率相关损耗，模态琴桥负责把桥处受力转成多阶质量弹簧阻尼振动，二者搭配的理由是耶胡弦通过贝壳桥紧压在椰壳腔上、振动必须在桥点连续，组合后新增的作用是弦桥耦合力成为双向约束，可同时算出弦位移与桥速度。

**手指按压 × 能量 2 次化：** 手指按压负责用穿透量给出接触力并改变有效弦长，能量 2 次化负责把非线性接触势写成平方形式以避免迭代，分工是前者定物理碰撞、后者定数值解法，搭配理由是同时按双弦时未知量多、迭代成本高，组合后新增的作用是用 Sherman-Morrison 公式做块求解，实现非迭代更新。

**有限差分 × 能量平衡：** 有限差分负责把弦的偏微分算子、手指、桥模态与弓毛方程离散到时间网格，能量平衡负责检验离散后总储能、耗散、输入与边界项是否闭合，分工是前者推进仿真、后者验证稳定性，搭配理由是刚性弦与非线性接触容易发散，组合后新增的作用是用网格条件与能量误差量级来判定参数是否可用。

初学者复述时要抓住顺序：每步先算桥力与弓力，因为它们不依赖本步手指穿透的隐式部分；再算无接触的预测状态；最后加手指修正。若把顺序颠倒，梯度中的预测穿透量就失去定义，这是代码中最容易错的位置。

### 弓毛振动与辐射染色起什么作用？

弓毛不是刚性点，论文给它质量、刚度与阻尼，运动受刷毛摩擦力驱动。刷毛平均变形的变化率等于相对速度乘以粘着修正，稳态变形由摩擦系数与法向力决定，断裂位移以下完全粘着，以上进入过渡再到滑动。这种结构能自然产生迟滞：拉速变化时摩擦力不立刻跟随，而是经刷毛变形积累后再滑脱。辐射部分不参与振动求解，只在得到桥力后做滤波。

桥力到声压的传递函数在半消声室用力锤敲桥、麦克风在音箱后 30 厘米处测得，再用 25 段并联 2 阶无限冲激响应滤波器在扭曲频率域拟合。与直接型滤波器相比，并联结构数值性能更好。最终听到的声音是仿真桥力经过该滤波器组的结果，因此换琴、换麦克风位置都需要重测重拟合，不能复用同一组系数。

**弓毛弹性 × 弹塑性摩擦：** 弓毛弹性负责描述弓杆之外弓毛束的位移与振动，弹塑性摩擦负责描述大量微观刷毛的平均变形、粘着与滑脱，分工是前者给弓的动力学、后者给接触面的迟滞，搭配理由是耶胡弓毛夹在两弦之间、相对速度与刷毛状态互相决定，组合后新增的作用是能算出粘滑转换与迟滞环，需用迭代求解。

**桥导纳 × 辐射滤波器：** 桥导纳负责刻画桥点力到桥点速度的本体特性，辐射滤波器负责刻画桥点力到远场声压的辐射特性，分工是前者进入耦合方程影响振动、后者只在后处理中染色声音，搭配理由是演奏者听到的是腔体辐射而仿真直接得到的是桥力，组合后新增的作用是仿真桥力经并联 2 阶滤波组即可听。

一个教学例子是快速换弓：弓速符号翻转时，相对速度先变号，刷毛从滑动回到粘着再重新积累变形，桥力波形会出现短暂的噪声式过渡，随后重建周期振动。若把弓毛当成刚性，过渡会过于生硬，这就是保留弓毛振子的理由。

### 本研究有没有训练，实际计算过程是什么？

本研究没有神经网络训练，也就没有梯度反传、参数冻结、优化器与早停。真实计算过程是测量标定加数值仿真。弦参数来自称重、量半径算体积得密度，以及在光学防振平台上用断线法激励丝弦、测力信号后反演得到杨氏模量、张力与阻尼。桥参数来自力锤敲击加激光多普勒测振得到导纳，再用滤波对角化方法提取模态质量、频率与阻尼。辐射滤波器来自锤击与麦克风测量后拟合得到并联 2 阶系数。

仿真时给定弓力、弓速、手指外力与位置轨迹，用有限差分推进弦、手指、桥与弓毛状态，用牛顿法解弓摩擦残差，用块求解加手指修正。手指刚度、指数与阻尼未实测，是按仿真合理性经验选取的，这是明确缺项，不能当成标定值引用。无训练不等于确定性求解，因为弓摩擦迭代初值、手指接触的非线性与浮点舍入仍会影响轨迹，只能说在给定输入与参数下流程可重放。

### 测量与仿真条件如何设置？

要回答拟合是否公平，先看数据与协议。弦长两根均为 0.38 米，放在定制 3 维打印传感器桥上测，以隔离琴体共振。桥导纳用冲击锤敲桥、激光测振仪测速度，辐射传递函数在半消声室用 1 对麦克风测。仿真采样率统一为 44.1 千赫兹。手指仿真参数取刚度 5 乘 10 的 5 次方、指数 2.3、阻尼 20，外力常取 0.5 牛顿。

拉奏验证是把耶胡固定、手动拉内弦并测桥速度，但没有装置精确控制或测量当时的弓力弓速，因此仿真侧是调参后取弓力 0.7 牛顿、弓速 0.3 米每秒的常值来对照。能量误差测试用随机按弦位置加连续拉奏跑 10 秒。实时性测试在 2020 款苹果 M1 笔记本上用 C 加加实现，弓法向力最小绝对值限制为 0.05 牛顿。伴随网站当前可用，已公开声音与仿真代码，链接状态码为 200。

下表是原表给出的丝弦实测与反演参数，比较问题是两根弦的物理差异是否足以支持不同定弦，后文所有仿真都以此为基准。

| String | 1 | 2 |
| --- | --- | --- |
| L | 0.38 | 0.38 |
| ρ | 1250 | 1350 |
| r | 0.55 | 0.40 |
| T | 50.61 | 64.29 |
| σ0 | 0.9754 | 1.5844 |
| σ1 | 0.0026 | 0.0032 |

表中内弦定为 F4，外弦定为 C5，长度相同，密度、半径、张力与损耗不同。外弦更细但张力更大，损耗系数也更大，这与较高定弦需要更大张力、振动衰减更快的物理直觉一致。使用时注意单位保留原文写法，半径为毫米量级，误把直径当半径会使截面积差 4 倍，进而破坏张力反演。

### 桥拟合与手势合成支持什么判断？

主结果分两层。第一层是锤击下的桥导纳与桥速度拟合。上方面板显示实测与 11 模态仿真在主要共振峰处重合较好，高频段出现偏离；下面板显示用实测锤力驱动模态系统得到的速度波形与实测衰减振荡对齐。原文报告显示该耦合策略能拟合桥运动。

第二层是拉奏下的稳态桥速度拟合。在调参后的常值弓力弓速下，实测与仿真波形周期与双凹谷形状接近，增大弓速会使仿真幅值变大，减小则变小。这支持模型能复现稳态拉奏，但限制是弓条件并非独立测量，而是为拟合而选，因此不能当成预测精度的盲测。手势合成展示两种用法：快速换弓换弦加 1 秒处双弦同按，以及不换弓方向下手指微动产生揉弦、0.5 秒与 1 秒处滑指升调。频谱图显示基频与谐波的连续变化与切换瞬态，声音经辐射滤波后得到。

下面回顾桥模态拟合的像素细节，它是判断建模是否过关的第一证据。

> **看图路径：** 1. 先看上方面板横轴频率与纵轴幅值，比较蓝色实测与红色虚线仿真在共振峰处的重合度；2. 再看下面板横轴时间与纵轴速度，比较锤击后衰减振荡的包络与相位是否对齐；3. 注意高频段两条曲线的偏离，记下模型只用 11 个模态带来的拟合边界

[![原论文 Figure 2：Measured (blue) and simulated (red, dashed) bridge ad- mittance (top) and velocity (bottom).](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/e3db921b676c/figure-2.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/e3db921b676c/figure-2.png)

*论文图 2。原论文 Figure 2：“Measured (blue) and simulated (red, dashed) bridge ad- mittance (top) and velocity (bottom).”。*

上图横轴 0 到 6000 赫兹，纵轴幅值分贝，蓝色实测在数百赫兹处有高峰，红色虚线仿真紧跟该峰与后续小峰，到 2000 赫兹以上偏离增大。下图横轴为锤击后时间，纵轴为米每秒，蓝色与红色衰减振荡几乎重合，说明用锤力驱动的模态系统在时域是可用的。该结果的适用条件是小信号锤击，大幅拉奏时的非线性是否仍成立需看下一张稳态对比。

拉奏稳态对比的条件需要单独列出，否则会误把调参拟合当成盲测精度。

| 条件 | 弦 | 弓力 | 弓速 | 采样率 |
| --- | --- | --- | --- | --- |
| 稳态拉奏桥速对比 | 内弦 F4 | 0.7 N | 0.3 m/s | 44.1 kHz |

上表提出的问题是在什么弓条件下得到图 3 的拟合，公平条件是手动拉奏的弓力弓速未知、仿真取常值调参，指标方向是波形形状越重合越好。表中弓力弓速与采样率均有逐字来源，弦名来自图注。主要收益是周期与细部凹谷都能对上，具体代价是该组参数不能推广到其他力度，未胜出项是高频辐射细节仍有偏离，未评测边界是换弦与大力压弓时的表现。
下面看稳态波形的像素，它比频谱更能暴露摩擦模型的细节。

> **看图路径：** 1. 先确认纵轴是桥速度、横轴是稳态拉奏时间段，蓝色为实测、红色虚线为仿真；2. 逐个周期比较波峰高度、波谷双凹形状与过零时刻是否重合；3. 记住该拟合是在弓力弓速未知、靠调参得到条件下成立

[![原论文 Figure 4：Measured (blue) and simulated (dashed, red) bowed bridge velocity on string 1 (tuned to F4)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/e3db921b676c/figure-4.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/e3db921b676c/figure-4.png)

*论文图 4。原论文 Figure 4：“Measured (blue) and simulated (dashed, red) bowed bridge velocity on string 1 (tuned to F4)”。*

图中横轴为 0.5 秒附近的稳态段时间，纵轴为米每秒，幅值约正负 0.02。蓝色实测与红色虚线仿真在每个周期的主峰、对称性与谷底小凹都重合，说明弹塑性摩擦加弓毛弹性在该力度下是充分的。但正因为弓条件是调出来的，不能反推演奏者当时确实用了 0.7 牛顿与 0.3 米每秒，这是复现时必须保留的信息条件。

### 手指按压与能量稳定性如何验证？

手指部分没有消融对照表，验证方式是看弦形快照。4 个时刻分别为 5 毫秒、10 毫秒、300 毫秒与 700 毫秒，弓力 0.7 牛顿、弓速 0.3 米每秒、手指外力 0.5 牛顿。5 毫秒时手指尚未接触，被拉的弦一在弓处被带偏；10 毫秒后手指压住双弦，实线与虚线在红色椭圆处重叠表示穿透；300 毫秒与 700 毫秒进入稳态振动，桥点保持连续。

该图支持手指能同时约束双弦并改变振动形态，但手指参数是经验选取，未报告换参数后的灵敏度，这是待补验证。能量方面用随机按弦加连续拉奏跑 10 秒，能量偏差维持在 10 的负 15 次方量级，接近机器精度，支持离散格式在该网格与参数下是稳定的。网格需满足弦元大于最小步长条件，否则储能项可能变负。弓摩擦用速度相关刷毛阻尼保证无源，否则粘着映射取 1 时耗散项可能为负而违反物理。

下面这组弦形快照把手指穿透与桥连续画在同一画面，是理解耦合约束最直接的材料。

> **看图路径：** 1. 先按 t 等于 5 毫秒、10 毫秒、300 毫秒、700 毫秒的顺序看四列弦形演化；2. 区分黑色实线弦一、黑色虚线弦二、红色椭圆手指、蓝色横线弓与三角桥标记；3. 观察红色椭圆处两弦与手指的重叠如何表示穿透量，弓下方的折点如何表示桥耦合

[![原论文 Figure 6：String transverse displacement profiles at selected time instants.](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/e3db921b676c/figure-6.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/e3db921b676c/figure-6.png)

*论文图 6。原论文 Figure 6：“String transverse displacement profiles at selected time instants.”。*

每列横轴为位移、纵轴为弦长，纵轴 0.3 米附近三角为桥，蓝色横线为弓，红色椭圆为手指。从左到右可见弦一先被弓带离平衡位置，随后双弦被手指压住并在桥处汇合，稳态后两弦在弓上下两侧形成不同斜率。该图未给出定量误差，只能做定性核对，不能当成精度指标。

### 哪些结论不能从现有证据推广？

论文直接报告的是锤击拟合吻合、稳态拉奏在调参后吻合、能量误差小、实时因子约 6.6 倍。有限解释是弦桥耦合策略 capable of fitting 实测桥运动，支持在该琴、该力度下可用。未验证推测是换演奏者、换力度、换环境后仍同样吻合，这需要盲测。缺失证据不是技术错误，但必须指出：手指刚度、指数与阻尼无实测；拉奏验证的弓力弓速未知。

辐射只在音箱后 30 厘米处测 1 对麦克风位置；未测误判率、延迟分布与多人主观评价。相关性不是因果，频谱谐波清晰不能证明摩擦参数唯一，只能证明该组参数能产生类似声音。总体趋势不等于每步成立，能量 10 秒稳定不等于任意步长与任意按弦力都稳定。训练资源、推理开销与实际延迟要分开，C 加加在 M1 上算得快不等于在嵌入式设备或浏览器中仍实时，输出帧率与音频回调延迟还需另测。

### 要复现声音先做什么，需要哪些开销？

复现先做三件事。第一，按表 1 装好两根丝弦参数与 0.38 米弦长，检查简支边界与网格步长是否满足稳定性下限。第二，用自己的力锤与激光测振重测桥导纳并提取模态，不要直接抄 11 个模态的数值，因为每把椰壳琴差异大；再在消声或安静房间重测桥力到声压传递函数并拟合 25 段并联 2 阶滤波器。第三，用固定弓架给出已知弓力弓速做盲测，再对比桥速度，而不是先调参再对比。计算开销有明确证据，下表把原文报告的耗时与迭代条件放在同一行，便于核对是否真达到实时。

下表比较的问题是不同输入时长下的计算代价是否线性，公平条件是同一台 M1 笔记本、同一 C 加加实现与最小弓力限制，指标方向是耗时越小、实时因子越大越好。

| 输入时长 | 计算耗时 | 实时因子 | 最小弓力 | 最大迭代数 |
| --- | --- | --- | --- | --- |
| 10 second | 1.49 seconds | 6.6× | 0.05 N | three |
| 20 second | 2.95 seconds | 6.6× | 0.05 N | three |

上表主要收益是 10 秒、20 秒与 30 秒输入的耗时近似线性，实时因子约 6.6 倍，最大迭代仅 3 次。具体代价是最小弓力被截断为 0.05 牛顿，极轻触弦的物理被牺牲；未胜出项是未报告不同采样率与双弦同拉时的耗时，未评测边界是长时滑音与快速换弓是否增加迭代。代码与声音在伴随网站当前可用，可下载运行，但权重下载不适用，因为本研究无神经网络权重，只有测量参数与滤波器系数。

### 何时值得尝试这种物理建模？

当目标是可交互的耶胡合成、需要换指法与弓法即时出声，且手头能做锤击与声辐射测量时，值得尝试该路线。它的好处是参数有物理意义，换弦、换桥、换弓力都有可预期的变化方向，且能量检验能提前发现发散。当目标只是离线生成固定风格乐句，或没有测量条件时，采样拼接或数据驱动可能更省事。常见误解是把稳态波形拟合当成音色完全相同，实际上桥速度对上不等于辐射声压处处对上，高频与瞬态仍受滤波器拟合与手指经验参数限制。

另一个误解是把无训练当成无随机性，弓摩擦迭代与接触非线性仍需固定初值与步长才能严格重放。还需补的验证是多手指、多维接触、张力调制揉弦与盲测主观评价。先跑通伴随代码的两个手势，再用自己的琴重标定桥与辐射，最后做固定弓架的盲测，这是最省弯路的顺序。

## 📐 原文公式与排版

以下展示论文原页中的数学表达区域，保留原始上下标、分式和符号排版。区域序号仅用于本文导航，不是论文公式编号。

[![原文数学表达区域 1，PDF 第 2 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/db549930accd/figure-1.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/db549930accd/figure-1.png)

区域 1 · [查看论文原页](https://dafx26.mit.edu/assets/papers/DAFx26_paper_43.pdf#page=2)

[![原文数学表达区域 2，PDF 第 2 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/db549930accd/figure-2.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/db549930accd/figure-2.png)

区域 2 · [查看论文原页](https://dafx26.mit.edu/assets/papers/DAFx26_paper_43.pdf#page=2)

[![原文数学表达区域 3，PDF 第 2 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/db549930accd/figure-3.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/db549930accd/figure-3.png)

区域 3 · [查看论文原页](https://dafx26.mit.edu/assets/papers/DAFx26_paper_43.pdf#page=2)

[![原文数学表达区域 4，PDF 第 2 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/db549930accd/figure-4.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/db549930accd/figure-4.png)

区域 4 · [查看论文原页](https://dafx26.mit.edu/assets/papers/DAFx26_paper_43.pdf#page=2)

[![原文数学表达区域 5，PDF 第 2 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/db549930accd/figure-5.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/db549930accd/figure-5.png)

区域 5 · [查看论文原页](https://dafx26.mit.edu/assets/papers/DAFx26_paper_43.pdf#page=2)

[![原文数学表达区域 6，PDF 第 2 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/db549930accd/figure-6.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/db549930accd/figure-6.png)

区域 6 · [查看论文原页](https://dafx26.mit.edu/assets/papers/DAFx26_paper_43.pdf#page=2)

[![原文数学表达区域 7，PDF 第 2 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/db549930accd/figure-7.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/db549930accd/figure-7.png)

区域 7 · [查看论文原页](https://dafx26.mit.edu/assets/papers/DAFx26_paper_43.pdf#page=2)

[![原文数学表达区域 8，PDF 第 2 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/db549930accd/figure-8.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/db549930accd/figure-8.png)

区域 8 · [查看论文原页](https://dafx26.mit.edu/assets/papers/DAFx26_paper_43.pdf#page=2)

[![原文数学表达区域 9，PDF 第 2 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/db549930accd/figure-9.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/db549930accd/figure-9.png)

区域 9 · [查看论文原页](https://dafx26.mit.edu/assets/papers/DAFx26_paper_43.pdf#page=2)

[![原文数学表达区域 10，PDF 第 2 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/db549930accd/figure-10.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/db549930accd/figure-10.png)

区域 10 · [查看论文原页](https://dafx26.mit.edu/assets/papers/DAFx26_paper_43.pdf#page=2)

[![原文数学表达区域 11，PDF 第 2 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/db549930accd/figure-11.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/db549930accd/figure-11.png)

区域 11 · [查看论文原页](https://dafx26.mit.edu/assets/papers/DAFx26_paper_43.pdf#page=2)

[![原文数学表达区域 12，PDF 第 2 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/db549930accd/figure-12.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/db549930accd/figure-12.png)

区域 12 · [查看论文原页](https://dafx26.mit.edu/assets/papers/DAFx26_paper_43.pdf#page=2)

[![原文数学表达区域 13，PDF 第 2 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/db549930accd/figure-13.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/db549930accd/figure-13.png)

区域 13 · [查看论文原页](https://dafx26.mit.edu/assets/papers/DAFx26_paper_43.pdf#page=2)

[![原文数学表达区域 14，PDF 第 2 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/db549930accd/figure-14.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/db549930accd/figure-14.png)

区域 14 · [查看论文原页](https://dafx26.mit.edu/assets/papers/DAFx26_paper_43.pdf#page=2)

[![原文数学表达区域 15，PDF 第 2 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/db549930accd/figure-15.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/db549930accd/figure-15.png)

区域 15 · [查看论文原页](https://dafx26.mit.edu/assets/papers/DAFx26_paper_43.pdf#page=2)

[![原文数学表达区域 16，PDF 第 2 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/db549930accd/figure-16.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/db549930accd/figure-16.png)

区域 16 · [查看论文原页](https://dafx26.mit.edu/assets/papers/DAFx26_paper_43.pdf#page=2)

[![原文数学表达区域 17，PDF 第 2 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/db549930accd/figure-17.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/db549930accd/figure-17.png)

区域 17 · [查看论文原页](https://dafx26.mit.edu/assets/papers/DAFx26_paper_43.pdf#page=2)

[![原文数学表达区域 18，PDF 第 3 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/db549930accd/figure-18.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/db549930accd/figure-18.png)

区域 18 · [查看论文原页](https://dafx26.mit.edu/assets/papers/DAFx26_paper_43.pdf#page=3)

[![原文数学表达区域 19，PDF 第 3 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/db549930accd/figure-19.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/db549930accd/figure-19.png)

区域 19 · [查看论文原页](https://dafx26.mit.edu/assets/papers/DAFx26_paper_43.pdf#page=3)

[![原文数学表达区域 20，PDF 第 3 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/db549930accd/figure-20.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/db549930accd/figure-20.png)

区域 20 · [查看论文原页](https://dafx26.mit.edu/assets/papers/DAFx26_paper_43.pdf#page=3)

[![原文数学表达区域 21，PDF 第 3 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/db549930accd/figure-21.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/db549930accd/figure-21.png)

区域 21 · [查看论文原页](https://dafx26.mit.edu/assets/papers/DAFx26_paper_43.pdf#page=3)

[![原文数学表达区域 22，PDF 第 3 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/db549930accd/figure-22.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/db549930accd/figure-22.png)

区域 22 · [查看论文原页](https://dafx26.mit.edu/assets/papers/DAFx26_paper_43.pdf#page=3)

[![原文数学表达区域 23，PDF 第 3 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/db549930accd/figure-23.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/db549930accd/figure-23.png)

区域 23 · [查看论文原页](https://dafx26.mit.edu/assets/papers/DAFx26_paper_43.pdf#page=3)

[![原文数学表达区域 24，PDF 第 3 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/db549930accd/figure-24.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/db549930accd/figure-24.png)

区域 24 · [查看论文原页](https://dafx26.mit.edu/assets/papers/DAFx26_paper_43.pdf#page=3)

[![原文数学表达区域 25，PDF 第 3 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/db549930accd/figure-25.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/db549930accd/figure-25.png)

区域 25 · [查看论文原页](https://dafx26.mit.edu/assets/papers/DAFx26_paper_43.pdf#page=3)

[![原文数学表达区域 26，PDF 第 3 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/db549930accd/figure-26.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/db549930accd/figure-26.png)

区域 26 · [查看论文原页](https://dafx26.mit.edu/assets/papers/DAFx26_paper_43.pdf#page=3)

[![原文数学表达区域 27，PDF 第 3 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/db549930accd/figure-27.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/db549930accd/figure-27.png)

区域 27 · [查看论文原页](https://dafx26.mit.edu/assets/papers/DAFx26_paper_43.pdf#page=3)

[![原文数学表达区域 28，PDF 第 3 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/db549930accd/figure-28.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/db549930accd/figure-28.png)

区域 28 · [查看论文原页](https://dafx26.mit.edu/assets/papers/DAFx26_paper_43.pdf#page=3)

[![原文数学表达区域 29，PDF 第 3 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/db549930accd/figure-29.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/db549930accd/figure-29.png)

区域 29 · [查看论文原页](https://dafx26.mit.edu/assets/papers/DAFx26_paper_43.pdf#page=3)

[![原文数学表达区域 30，PDF 第 3 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/db549930accd/figure-30.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/db549930accd/figure-30.png)

区域 30 · [查看论文原页](https://dafx26.mit.edu/assets/papers/DAFx26_paper_43.pdf#page=3)

[![原文数学表达区域 31，PDF 第 3 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/db549930accd/figure-31.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/db549930accd/figure-31.png)

区域 31 · [查看论文原页](https://dafx26.mit.edu/assets/papers/DAFx26_paper_43.pdf#page=3)

[![原文数学表达区域 32，PDF 第 3 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/db549930accd/figure-32.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/db549930accd/figure-32.png)

区域 32 · [查看论文原页](https://dafx26.mit.edu/assets/papers/DAFx26_paper_43.pdf#page=3)

另有 127 个候选区域因边界不明确或图片数量、尺寸限制未展开；请[查看完整论文](https://dafx26.mit.edu/assets/papers/DAFx26_paper_43.pdf)中的原始排版。

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。
- 评分规则：type-aware-v1
- 评分模型：muse-spark-1.3-contributor
- 评分请求协议：openai_responses

---

[← 返回 dafx-2026 论文汇总](/posts/conference-dafx-2026/)
