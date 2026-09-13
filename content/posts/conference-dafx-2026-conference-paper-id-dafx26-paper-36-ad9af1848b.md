---
title: "Loopback Frequency Modulation Using a Time-Varying Delay Line"
date: 2026-09-13
draft: false
description: "论文要解决环回频率调制带来持续基频偏移、使时变延迟函数随时间线性增长而无法装进环形缓冲的问题，选择用闭式解给出的解析相位和发声频率构造可回绕延迟并叠加整周期偏置，最强证据是回绕点相位连续且整周期偏置下波形不畸变，代价是必须预先知道发声频率且每隔 N 样本回绕一次。"
tags: ["信号处理", "理论分析", "音乐", "音乐生成"]
categories: ["dafx-2026 论文"]
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_paper_id: "conference:dafx:2026:conference-paper-id:DAFx26_paper_36"
paper_digest_source_kind: conference
paper_digest_conference_id: "dafx-2026"
paper_digest_conference_record_url: "https://dafx26.mit.edu/program/"
paper_digest_conference_pdf_url: "https://dafx26.mit.edu/assets/papers/DAFx26_paper_36.pdf"
paper_digest_api_reader_contract: "beginner-researcher-v3"
paper_digest_api_reader_article_sha256: "f92afe336ae1f9858560a9dbddcb75510da5fa3e6762273be66f8f2005df85fb"
paper_digest_api_reader_plan_sha256: "53f2788f55ffa0b963a2b178479f3bb12cb23595fca31ff7aa47912a8602038e"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings-v4"
paper_digest_api_reader_source_bindings_sha256: "0617cb3791790be8e7a321befeae9d1eae152b9721e8e113138f253c69cfcb37"
paper_digest_api_reader_source_table_count: 2
paper_digest_api_reader_source_formula_count: 0
paper_digest_api_reader_structured_artifacts_sha256: "a876646c42f3143051bb1706c49e27298e0d882b33e57f971ca49fcde496facb"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity-v1"
paper_digest_api_reader_author_identity_sha256: "8698cb47615be44b8228d6cd9af3a8a1ec05e3a5b25920315b2d6b7a1592e192"
paper_digest_api_reader_author_count: 1
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity-v1"
paper_digest_api_reader_resource_identity_sha256: "9c8c7f4dd9dfd062e0a38a5b55fe5128cb1485cdc67bc7cfd1eeb9cefba8ba01"
paper_digest_api_reader_resource_count: 0
paper_digest_api_reader_decision_projection: "api-reader-decision-projection-v2"
paper_digest_scoring_contract: "api-scoring-audit-v2"
paper_digest_taxonomy_contract: "paper-taxonomy-flat-tags-compat-v1"
paper_digest_taxonomy_selection_contract: "paper-taxonomy-selection-v1"
paper_digest_taxonomy_registry_version: "paper-taxonomy-v1"
paper_digest_taxonomy_registry_sha256: "15c82a567ce5a55dc1175684ed08b64c158558639d9c8fb822c9587ec32a8778"
paper_digest_taxonomy_concepts: [{"facet":"method","id":"method.signal-processing","label":"信号处理"},{"facet":"research_focus","id":"research_focus.theory","label":"理论分析"},{"facet":"signal","id":"signal.music","label":"音乐"},{"facet":"task","id":"task.music-generation","label":"音乐生成"}]
paper_digest_primary_task: "音乐生成"
paper_digest_primary_method: "信号处理"
paper_digest_score: 5.3
paper_digest_rank_bucket: "后50%"
paper_digest_document_type: "方法研究"
paper_digest_conference_structure: replayable-pdf-layout-v1
---

# 📄 持续变调装不进环形缓冲：用已知发声频率把线性延迟绕回去

> 英文题目：*Loopback Frequency Modulation Using a Time-Varying Delay Line*

> 会议身份：`conference:dafx:2026:conference-paper-id:DAFx26_paper_36`


> ✅ 来源为官方会议 PDF；表格与 Figure 按原文证据绑定。PDF 公式以原页区域图片展示，未冒称作者原始 TeX。

> 会议来源：[官方记录](https://dafx26.mit.edu/program/) · [官方 PDF](https://dafx26.mit.edu/assets/papers/DAFx26_paper_36.pdf)

标签：#信号处理 #理论分析 #音乐 #音乐生成

评分：**5.3/10** | 创新 1.3/2 | 技术严谨 1.1/1.5 | 实验充分 0.3/1.5 | 清晰度 0.8/1 | 影响力 0.7/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 0.8/1.5

排名：后50% | 文档类型：方法研究

## 👥 作者与机构

- Tamara Smyth：机构信息未能从会议 PDF 纯文本可靠映射

## 📌 核心摘要

回环频率调制以振荡器输出回授调制自身瞬时频率实现持续移频与非线性音色变换，难点是持续移频对应随时间线性增长的理想延迟，无法直接装入有限长环形延迟线且直接回绕易引入相位不连续。第一步回顾常规频率调制与相位调制的等价性，证明逐样本复数旋转与数值积分频率得到同一输出，从而把问题归结为需要解析积分而非数值累积。第二步用交替闭式解给出解析相位与发声频率，将不可积的回授振荡变为已知函数，其输出的解析相位直接作为下一步推导延迟函数的已知量。第三步由相对频移积分得到延迟函数，常规调制得到有界正弦延迟而持续移频得到线性增长延迟，从而分离出必须回绕的线性分量。第四步利用已知发声频率求出输入输出同值同斜率的回绕周期并取整，再加正延迟偏置保证附加相移为整数倍周期，使回绕后延迟保持因果正值且输出无断裂。与常规有界振荡延迟直接查表不同，该方法用发声频率参数化的解析相位构造可回绕线性延迟，使时变延迟线能承载回授振荡器的持续频偏，其实质是将回环调制从单振荡器合成扩展为可处理外部输入的延迟型处理。在载波频率300Hz的振荡测试设置下，振荡维持条件的反馈系数指标上限值为1，高于振荡维持条件的反馈系数指标下限值-1。该结论适用边界受限于单振荡器正弦输入与静态反馈系数的推导验证，时变反馈与多振荡器耦合尚未验证，原文未披露训练、推理或部署成本。

## 🔗 开源与复现资源

本次未形成可展示的已核验资源记录，开放状态尚未核实。
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 输入是什么，目标是什么，必须保留什么

本文的输入是一段已有音频或一个复正弦，目标是让该输入经过处理后，呈现环回频率调制的效果。所谓环回频率调制，白话说就是振荡器用自己的当前输出值，再去决定自己下一刻的频率，英文为 loopback frequency modulation，缩写为 LBFM。时变延迟线，白话说就是延迟多少样本这个数值本身随时间变化，英文为 time-varying delay line，缩写为 TVDL。

必须保留的信息包括载波频率、环回系数、由此决定的发声频率、解析相位表达式，以及由此算出的延迟函数与回绕周期。输出是一套可用单个环形延迟线执行的计算步骤，读出位置按设计好的延迟函数随时间变化。最终要求是输出波形相位连续，不因延迟回绕引入跳变。

对刚入门的研究生，可以这样理解任务边界。普通延迟只是把声音晚一点放出来，时变延迟是晚多少也在变，变快了就会听出音高变化。论文要把自己调制自己的规律，翻译成延迟量应如何随时间变化。这样任意输入的声音也能被施加类似环回的持续变调与波形变化，而不只限于从正弦出发的振荡器。

### 已有路线解决了什么，还缺哪一块

论文把相关工作分成 3 条线。第一条是频率调制与相位调制的关系，经典结论是用相位调制实现频率调制更准确。因为相位是解析给出的，不依赖采样率做数值积分，调制指数也直观对应边带数量。第二条是反馈与环回，作者区分了直接反馈调相位的反馈调频，和用自身实部反馈调频率的环回调频。

后者引入了非线性，会同时改变波形形状与基频。论文还联系到吉他靠近音箱的啸叫、磁带延迟网络混响、拨弦物理建模等更大的反馈研究背景。第二条线的意义在于说明反馈不等于非线性，但把系统放进反馈结构容易引入非线性。

第 3 条是时变延迟线的已有用法，包括镶边、颤音、多普勒效应、可变拾音点波导弦模型，以及用两条延迟线交叉淡化维持恒定变调的做法。缺的一块是持续变调对应的延迟函数含线性增长分量，简单截断或双线淡入淡出，在处理强周期振荡器波形时容易留下可闻接缝。论文定位是利用闭式解提供的发声频率与解析相位，让回绕恰好发生在输入输出同相且斜率同向时刻。

### 为什么持续变调会让环形缓冲装不下

沿一个样本走一遍就能看清矛盾。设输入是频率为载波频率的复正弦，延迟线在时刻 n 读出 n 减延迟量时刻的输入。输出相位就是载波频率乘以重映射后的时刻，对时间求导，输出瞬时频率等于载波频率乘以一减延迟函数导数。

反过来，若想要某个目标输出频率，就要求延迟函数导数等于一减目标频率除以载波频率。这个量被称为相对频偏，对它积分就得到延迟函数。若目标只是普通调频，目标频率在载波上下振荡，积分后延迟函数也是振荡的。加一个直流偏置就能保证为正，也能被最大延迟限制住。

但环回调制改变了基频，目标频率里含不为零的平均偏移。对常数积分得到随 n 线性增长的直线，输入信号越长，延迟越大。任何固定长度的环形缓冲都会溢出，这就是中心矛盾。例子是把 300 赫兹输入持续升高一点点，延迟函数就是一条向上爬的斜线，不回绕就一定超出缓冲。

### 方法全景：三步把环回规律翻译成延迟动作

论文的方法全景可分成 3 步。第一步回顾环回的 3 种已有实现，逐样本复数旋转、数值积分求相位、闭式解析解。论文说明前两种等价且都带单位样本延迟，只有闭式解同时给出解析相位与发声频率。第二步用时变延迟线重做普通调频作为热身，验证振荡型延迟函数确实可行。

第 3 步处理持续变调，先对纯变调正弦推导回绕周期，再把同样思想套到环回解析相位上。最后加一个整周期偏置，保证延迟为正且不引入波形畸变。这样安排的理由在原文有明确交代，闭式解的两个好处是解析相位提高精度，以及显式给出音乐上更有意义的发声频率。

**闭式解 × 数值积分：** 数值积分负责在无解析表达式时用逐样本旋转或累加近似实现环回，分工是能运行但带有单位样本延迟且精度依赖采样率；闭式解负责给出与全通滤波器结构相似的解析振荡器，分工是直接给出不依赖采样率的相位与发声频率。搭配原因是闭式解相位可解析积分，组合意义是用其相位与频率指导延迟线的回绕位置与偏置，避开数值积分无法预知同相时刻的困难。

而这两个好处恰好是设计有界延迟函数所缺的信息。没有发声频率就不知道何时回绕不断相，没有解析相位就无法把振荡部分与线性部分分开处理。这一步全景为后文两类延迟计算奠定了分工，后续只需分别处理振荡与线性分量。

### 环回振荡器如何决定音高，延迟函数如何回绕

环回振荡器的瞬时频率被定义为载波频率，加上环回系数乘载波频率再乘振荡器实部。环回系数被约束在负一到一之间才能起振，它的作用类似调制指数，但很小变化就能明显改变周期与波形。当系数趋近于零，波形趋近于载波频率的纯余弦，这是理解非线性强弱的一个锚点。

闭式解把同一振荡器写成与全通滤波器相似的分式形式，参数是发声频率与另一系数。令两边线性和振荡项分别相等，可解出发声频率等于正负载波频率乘以根号下一减环回系数平方。这个关系把难以预测的非线性音高变成了已知量，后续回绕全靠它。数值实现上，逐样本旋转与数值积分求相位被证明等价，因此都不如解析积分准确。

**环回频率调制 × 时变延迟线：** 环回频率调制负责规定振荡器用自身实部调制自身瞬时频率的非线性规律，分工是决定每一时刻应发出多高频率；时变延迟线负责按延迟函数把输入时刻 n 重映射为 n 减延迟量再读出，分工是执行时间弯折。搭配理由是延迟线输出频率完全由延迟函数导数决定，可反推实现任意目标频率所需的延迟量，组合意义是让任意音频输入也能获得环回那样的持续变调与波形变化。

**载波频率 × 发声频率：** 载波频率是环回方程里的输入参数，分工是作为反馈计算的起点；发声频率是输出波形真实周期对应的基频，分工是决定实际听到的音高。搭配原因是环回系数会把两者拉开，载波不再等于听感音高，组合意义是只有用发声频率才能算出输入输出何时同相，从而确定延迟函数应每隔多少样本回绕 1 次。

**瞬时频率 × 瞬时相位：** 瞬时频率负责描述信号每一时刻变化的快慢，分工是给出调制目标；瞬时相位负责描述累积走过的角度，分工是给出能放进正弦函数和延迟公式的量。搭配原因是频率是相位对时间的导数，相位是频率对时间的积分，组合意义是论文把定频率再积分求相位再代入延迟公式连成一条链，将调制问题统一转为延迟函数设计问题。

**相对频偏 × 延迟函数：** 相对频偏负责量化输出频率相对载波偏离了多少，分工是给出 1 减输出频率除以载波频率；延迟函数负责告诉延迟线每样本应延迟多少，分工是给出可执行的读写偏移。搭配原因是延迟函数对时间的导数正好等于相对频偏，组合意义是对相对频偏积分即得延迟函数，持续变调对应常数频偏，对应线性增长延迟，这正是需要回绕的根源。

下面先看回绕前的延迟函数形态，理解线性分量与振荡分量是如何叠加为锯齿的。该图是进入回绕周期计算前必须建立的直观，横轴跨越数千样本，纵轴为延迟样本数。

> **看图路径：** 1. 先看横轴约零到一万样本与纵轴延迟样本数，确认六个锯齿周期的整体范围；2. 再沿每个周期内缓慢上升的斜线观察叠加的小幅周期性起伏；3. 最后检查每次垂直跌落前后是否触零或为负，理解为何必须加偏置

[![原论文 Figure 3：The wrapped LBFM delay function (56) shows negative values and thus the need for an additional…](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/b8bc38d1ab86/figure-3.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/b8bc38d1ab86/figure-3.png)

*论文图 3。原论文 Figure 3：“The wrapped LBFM delay function (56) shows negative values and thus the need for an additional offset to ensure it is positive according to (28).”。*

从像素看，延迟在每个周期内沿斜线爬升，同时叠加了与发声频率同步的小幅起伏，到达顶部后垂直跌回低位。如果直接使用这条曲线而不加偏置，低位会触零甚至为负，不满足环形延迟要求延迟为正且有上下界的条件。更重要的是，只有当回绕周期取为输入输出同相时刻，后续的垂直跌落才不会在输出相位上留下跳变，这正是下一段要计算的周期选择问题。

### 本研究没有训练阶段，真实计算是什么

本研究没有神经网络训练，也就没有训练集、梯度、优化器、冻结与更新的划分。真实计算是确定性的信号处理构造，分为解析推导与逐样本执行两部分。解析部分根据给定载波频率与环回系数算出发声频率和闭式解系数，再算出回绕周期与整周期偏置。

执行部分对每个输出样本计算取模后的序号、反正切振荡相位、延迟量，加上偏置后用插值从环形缓冲读出。论文未报告插值方式、缓冲最大长度的具体取值，也未报告对非正弦任意输入的系统性测听或误差度量。因此不能把无训练等同于零误差，也不能从参数固定推出所有输入下都无伪影。

复现时应把采样率、插值方法和缓冲长度如实记录，并用正弦先验证同相回绕，再推广到复杂输入。这一节的任务是防止读者用深度学习训练流程去套本文，本文的可重复性来自公式与读写逻辑，而非权重与数据划分。

### 用什么信号比什么条件，看什么指标

论文的验证不是分类或回归实验，而是用可视波形与相位图做的条件对照。数据源是人工合成的复正弦与环回振荡器本身，没有外部数据集划分，也没有训练验证测试集。协议是先固定载波与环回系数，比较逐样本旋转实现与闭式解波形是否对齐。

再固定输入输出频率，比较回绕前后延迟线输出的相位是否连续。最后比较两种偏置取值下的输出波形形状是否保持。指标是波形形状一致性、周期是否符合发声频率公式、回绕点相位是否连续、偏置后是否出现可辨波形畸变，方向都是越连续、越重合越好。

硬件与成本未报告，代码与数据可用性方面，本次未发现来源绑定且完成验证的资源，不得声称代码已公开。复现者应按论文给出的公式自行实现，并保留采样率以便换算样本与时间。这一节为后文结果与消融提供了公平性基线，所有对照都固定了载波与系数再比较实现差异。

### 波形对照显示了什么，偏置为何必须取整周期

先看环回系数的影响。论文报告当系数趋近于零，波形形状与基频都收敛到载波频率的纯余弦，系数增大则波形变尖且周期变长。这是一个可复述的定性结果，支持环回系数同时控制音色与音高的判断。再看偏置实验，这是最强的可操作证据，把回绕后延迟函数直接使用会出现负值，必须加偏置。

若偏置只取刚好让最小值变为零的量，输出波形会发生相位畸变。若偏置取为载波周期的整数倍，也就是采样率除以载波频率再乘整数，通常取一，附加相位就是二派整数倍，对输出相位无影响。这 1 对照说明保证为正和保证不畸变是两个不同要求，不能只满足前者。

下图按系数从大到小分层展示了波形从窄尖峰回到正弦的过程，是理解非线性强弱最直观的入口，图中顶层到底层对应系数由约 0.99 降到零。

> **看图路径：** 1. 先确认横轴零到零点零五秒与纵轴带偏置幅度，分层画出七条波形；2. 再从上到下比较环回系数减小过程中尖峰由窄变宽且数量增多；3. 最后检查最底层系数为零时蓝色实线与黑色点线余弦是否完全重合

[![原论文 Figure 1：Loopback FM oscillator zb(n) is shown for several val- ues of feedback coefficient B.](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/b8bc38d1ab86/figure-1.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/b8bc38d1ab86/figure-1.png)

*论文图 1。原论文 Figure 1：“Loopback FM oscillator zb(n) is shown for several val- ues of feedback coefficient B.”。*

从像素看，最上方系数为 0.99 的蓝色曲线大部分时间贴着基线，只在约 0.023 秒和 0.047 秒附近冲出窄高峰，而黑色点线余弦仍在均匀振荡。往下系数减小，尖峰变宽、数量变多，到最底层系数为零时蓝线与点线完全重合。这支持系数越小越接近线性、越大非线性越强的判断，也限定了该结论只在固定载波 300 赫兹、零到 0.05 秒观察窗内得到验证。

为把 3 组增量情形放在同一框架下比较，整理出下表，表中数值与单位均来自原文连续句，条件列为教学归纳，比较问题是 3 类目标频率各对应何种延迟形态。

| 场景 | 期望频率形式 | 延迟函数形态 | 是否有界 | 处理动作 |
| --- | --- | --- | --- | --- |
| 普通调频 | 载波加减振荡边带 | 正弦振荡加直流偏置 | 有界 | 加偏置保证为正 |
| 持续变调 | 常数目标频率 | 随样本线性增长 | 无界 | 按同相周期回绕 |
| 环回调制，载波 300 Hz | 自身实部反馈调频 | 线性加振荡相位 | 回绕后有界 | 用发声频率定周期加整周期偏置 |

表后需要强调的是，普通调频的收益是延迟天然有界，代价只是需要一个纯延迟偏置。持续变调的代价是必须回绕，且回绕周期依赖目标频率是否已知。环回的额外代价是必须先有闭式解给出的发声频率，否则回绕点选不准。未胜出的一项是双延迟线交叉淡化，论文指出它对非相干录音可能有效，但对这种强周期波形效果有限，因此未被选为最终方案。

下面这组偏置对照直接检验保证为正与保证不畸变是否为同一要求，蓝色为整周期偏置而红色为仅保证为正的最小偏置。

> **看图路径：** 1. 先确认横轴为样本序号且纵轴为幅度，蓝色与红色均为周期性尖峰波形；2. 再比较同一峰附近蓝色峰顶与红色峰顶左右错开且下降沿不对称；3. 最后把红色波形的整体左移与变宽对应到非整周期偏置引入的附加相位

[![原论文 Figure 5：The TVDL output when the offset is set according to (58) (blue) and when simply set to the…](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/b8bc38d1ab86/figure-5.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/b8bc38d1ab86/figure-5.png)

*论文图 5。原论文 Figure 5：“The TVDL output when the offset is set according to (58) (blue) and when simply set to the minimum value required to make (56) positive (red), resulting in phase distortion and a…”。*

从像素看，蓝色与红色均为幅度在负一到一之间的周期性尖峰，但在 400 到 3200 样本范围内，红色峰顶系统性偏右且下降沿更宽，蓝色峰形更窄且对称。该差异支持论文报告，即任意最小偏置会引入附加相位而改变波形形状，只有取采样率除以载波频率整数倍的偏置才等效为纯延迟。复现时若看到整体平移但形状不变属于正常纯延迟，若看到峰变宽或不对称则应按整周期修正偏置。

### 拿掉关键信息会怎样：频率未知与偏置取错

论文没有神经网络消融，但做了 2 次等价于消融的失败条件对照。第 1 次是比较逐样本旋转与闭式解在不同载波下的吻合度，低载波时两者基本重合，高载波时出现随时间累积的漂移。提高采样率可减小漂移，这支持闭式解更准确的判断。也说明若拿掉解析相位、只用数值积分，回绕所依赖的周期与相位都会有误差。

第二次是偏置取值对照，已在结果节详述，这里补充其适用边界。该结论依赖输入是周期性振荡且偏置换算用了载波频率，若输入是未知基频的任意音频，整周期偏置的载波应理解为延迟线输入的标称频率。论文未验证该推广，因此不能承诺对所有录音都无畸变。

下图展示了高载波下两种实现的漂移，是判断何时必须用闭式解的依据，图中固定环回系数为 0.95 而载波从低到高分 4 层。

> **看图路径：** 1. 先确认四层分别对应一千到四千赫兹载波，底层最低而顶层最高；2. 再比较每层蓝色逐样本旋转与红色闭式解峰位是否对齐；3. 最后观察顶层右侧末端是否出现左右错开的累积漂移

[![原论文 Figure 2：Loopback FM oscillator zb(n) is shown with its alter- nate closed-form representation z0(n) for…](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/b8bc38d1ab86/figure-2.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/b8bc38d1ab86/figure-2.png)

*论文图 2。原论文 Figure 2：“Loopback FM oscillator zb(n) is shown with its alter- nate closed-form representation z0(n) for several values of car- rier frequencies ωc.”。*

像素显示底层低载波时蓝色与红色几乎完全覆盖，而顶层高载波时在 0.05 秒末端可看到蓝色与红色峰位错开约半个峰宽。这说明误差不是每步都大，而随频率和时间累积，复现时应至少测试 1 kHz 到 4 kHz 这一段才能看到差异。该结果支持在高频或长时合成中优先使用闭式解相位来计算延迟函数。

为把关键参数的约束集中核对，整理出第二张表，同样用原文连续句覆盖数字与单位，比较问题是每个参数取错会带来哪类可观测失败。

| 参数 | 含义 | 取值约束 | 作用 | 未满足的后果 |
| --- | --- | --- | --- | --- |
| 环回系数 B | 反馈强度 | 负 1 到 1 之间 | 决定波形尖锐度与发声频率 | 超界不起振 |
| 回绕周期 N | 同相间隔样本数 | 取模后取整 | 保证回绕点相位连续 | 选错则出现接缝 |
| 偏置系数 k | 整周期个数 | 通常取 1 | 保证延迟为正且不畸变 | 取错则波形畸变 |
| 样本序号 n | 时间索引 | 从 0 开始计数 | 参与取模与延迟计算 | 不从零计则初相错位 |
| 偏置 d0 | 附加延迟 | 采样率除以载波频率的整数倍 | 等效纯延迟 | 任意取值引入附加相位 |

表后解释是，本表的收益是把复现必须固定的 5 个量 1 次讲清，代价是其中采样率、缓冲上限等论文未给具体值，复现者需自行选择并记录。负结果是即使周期选对，若偏置不是整周期，仍会看到波形畸变，这正好证明两个步骤缺一不可。未评测的边界是对时变系数和时变载波的连续跟踪，论文只给出了静态参数下的推导。

### 哪些还没验证，不能承诺什么

论文直接报告的是正弦输入下的相位连续与波形保形，有限解释是该方法可扩展到任意音频输入以探索非线性延迟效果。未验证的推测是它在所有音乐素材上都无可闻伪影，必须区分这 3 层，相关性不等于因果，波形图好看不等于听感无损。

缺失大规模测听、误差度量、延迟量与计算开销的测量不是技术错误，但意味着不能承诺改善了实时性或降低了成本。另一个限制是回绕周期依赖发声频率已知，若载波或环回系数随时间快速变化，发声频率也在变。固定回绕周期的方案是否仍不断相，论文未给出跟踪方案。

整数取整带来的舍入误差在长时累积后是否可闻，也未量化。复现时应先做静态参数，再尝试慢变参数并记录接缝处相位差。这一节的任务是划清已验证与待验证的边界，避免把单延迟线方案的成功推广到所有变调场景。

### 复现先做什么，按什么顺序检查

复现的第一步是用 300 赫兹载波、多个环回系数生成逐样本旋转波形，核对系数趋零时是否回到纯余弦。以及发声频率是否符合根号公式，第二步是用闭式解生成解析相位，比较高低载波下的漂移，确认采样率设置正确。

第 3 步是实现普通调频的延迟函数，验证振荡型延迟加偏置即可工作。第四步是实现纯变调的回绕，用采样率除以频率差算出非整数周期，取整后检查输入输出在回绕点的相位与斜率是否同向。第五步才是环回延迟函数，把线性序号取模、振荡相位直接相加，再加整周期偏置，用环形缓冲读出。

每一步的检查都应保存波形图与相位图，重点看回绕点前后各几十个样本是否连续。若看到波形整体平移但形状不变，多半是偏置引入了纯延迟，属于正常。若看到峰变宽或不对称，多半是偏置未取整周期，应按采样率除以载波频率的整数倍修正。关键超参数是载波频率、环回系数、采样率、取整后的周期和整数偏置系数，信息条件是必须预先知道发声频率。

### 何时值得尝试，一句话收束

当你需要在延迟类效果里加入随演奏持续存在的音高偏移和波形非线性，且能预先算出目标发声频率时，值得尝试这种先算周期再回绕的单延迟线方案。它比双线交叉淡化更贴合强周期信号，比逐样本旋转更准确，且允许处理任意输入。

反之，若目标频率未知、参数快速时变，或无法接受为记录缓冲长度和插值细节而做的额外验证，则应先补测听与误差量化，再决定是否用于作品。论文特有的误解是把保证延迟为正等同于保证音质不变，实际上只有整周期偏置才能同时做到这两点，这正是复现时最容易踩错的地方。

由于未发现可用的公开代码链接，复现应视为独立实现，不依赖权重下载。最终判断是方法在已知频率的周期信号上报告了连续无畸变的构造，其向任意录音与时变参数的推广仍待验证。

## 📐 原文公式与排版

以下展示论文原页中的数学表达区域，保留原始上下标、分式和符号排版。区域序号仅用于本文导航，不是论文公式编号。

[![原文数学表达区域 1，PDF 第 2 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/798a4eedd135/figure-1.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/798a4eedd135/figure-1.png)

区域 1 · [查看论文原页](https://dafx26.mit.edu/assets/papers/DAFx26_paper_36.pdf#page=2)

[![原文数学表达区域 2，PDF 第 2 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/798a4eedd135/figure-2.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/798a4eedd135/figure-2.png)

区域 2 · [查看论文原页](https://dafx26.mit.edu/assets/papers/DAFx26_paper_36.pdf#page=2)

[![原文数学表达区域 3，PDF 第 2 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/798a4eedd135/figure-3.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/798a4eedd135/figure-3.png)

区域 3 · [查看论文原页](https://dafx26.mit.edu/assets/papers/DAFx26_paper_36.pdf#page=2)

[![原文数学表达区域 4，PDF 第 2 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/798a4eedd135/figure-4.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/798a4eedd135/figure-4.png)

区域 4 · [查看论文原页](https://dafx26.mit.edu/assets/papers/DAFx26_paper_36.pdf#page=2)

[![原文数学表达区域 5，PDF 第 2 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/798a4eedd135/figure-5.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/798a4eedd135/figure-5.png)

区域 5 · [查看论文原页](https://dafx26.mit.edu/assets/papers/DAFx26_paper_36.pdf#page=2)

[![原文数学表达区域 6，PDF 第 2 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/798a4eedd135/figure-6.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/798a4eedd135/figure-6.png)

区域 6 · [查看论文原页](https://dafx26.mit.edu/assets/papers/DAFx26_paper_36.pdf#page=2)

[![原文数学表达区域 7，PDF 第 2 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/798a4eedd135/figure-7.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/798a4eedd135/figure-7.png)

区域 7 · [查看论文原页](https://dafx26.mit.edu/assets/papers/DAFx26_paper_36.pdf#page=2)

[![原文数学表达区域 8，PDF 第 2 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/798a4eedd135/figure-8.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/798a4eedd135/figure-8.png)

区域 8 · [查看论文原页](https://dafx26.mit.edu/assets/papers/DAFx26_paper_36.pdf#page=2)

[![原文数学表达区域 9，PDF 第 2 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/798a4eedd135/figure-9.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/798a4eedd135/figure-9.png)

区域 9 · [查看论文原页](https://dafx26.mit.edu/assets/papers/DAFx26_paper_36.pdf#page=2)

[![原文数学表达区域 10，PDF 第 3 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/798a4eedd135/figure-10.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/798a4eedd135/figure-10.png)

区域 10 · [查看论文原页](https://dafx26.mit.edu/assets/papers/DAFx26_paper_36.pdf#page=3)

[![原文数学表达区域 11，PDF 第 3 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/798a4eedd135/figure-11.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/798a4eedd135/figure-11.png)

区域 11 · [查看论文原页](https://dafx26.mit.edu/assets/papers/DAFx26_paper_36.pdf#page=3)

[![原文数学表达区域 12，PDF 第 3 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/798a4eedd135/figure-12.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/798a4eedd135/figure-12.png)

区域 12 · [查看论文原页](https://dafx26.mit.edu/assets/papers/DAFx26_paper_36.pdf#page=3)

[![原文数学表达区域 13，PDF 第 3 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/798a4eedd135/figure-13.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/798a4eedd135/figure-13.png)

区域 13 · [查看论文原页](https://dafx26.mit.edu/assets/papers/DAFx26_paper_36.pdf#page=3)

[![原文数学表达区域 14，PDF 第 3 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/798a4eedd135/figure-14.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/798a4eedd135/figure-14.png)

区域 14 · [查看论文原页](https://dafx26.mit.edu/assets/papers/DAFx26_paper_36.pdf#page=3)

[![原文数学表达区域 15，PDF 第 3 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/798a4eedd135/figure-15.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/798a4eedd135/figure-15.png)

区域 15 · [查看论文原页](https://dafx26.mit.edu/assets/papers/DAFx26_paper_36.pdf#page=3)

[![原文数学表达区域 16，PDF 第 3 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/798a4eedd135/figure-16.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/798a4eedd135/figure-16.png)

区域 16 · [查看论文原页](https://dafx26.mit.edu/assets/papers/DAFx26_paper_36.pdf#page=3)

[![原文数学表达区域 17，PDF 第 3 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/798a4eedd135/figure-17.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/798a4eedd135/figure-17.png)

区域 17 · [查看论文原页](https://dafx26.mit.edu/assets/papers/DAFx26_paper_36.pdf#page=3)

[![原文数学表达区域 18，PDF 第 3 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/798a4eedd135/figure-18.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/798a4eedd135/figure-18.png)

区域 18 · [查看论文原页](https://dafx26.mit.edu/assets/papers/DAFx26_paper_36.pdf#page=3)

[![原文数学表达区域 19，PDF 第 3 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/798a4eedd135/figure-19.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/798a4eedd135/figure-19.png)

区域 19 · [查看论文原页](https://dafx26.mit.edu/assets/papers/DAFx26_paper_36.pdf#page=3)

[![原文数学表达区域 20，PDF 第 3 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/798a4eedd135/figure-20.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/798a4eedd135/figure-20.png)

区域 20 · [查看论文原页](https://dafx26.mit.edu/assets/papers/DAFx26_paper_36.pdf#page=3)

[![原文数学表达区域 21，PDF 第 3 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/798a4eedd135/figure-21.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/798a4eedd135/figure-21.png)

区域 21 · [查看论文原页](https://dafx26.mit.edu/assets/papers/DAFx26_paper_36.pdf#page=3)

[![原文数学表达区域 22，PDF 第 3 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/798a4eedd135/figure-22.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/798a4eedd135/figure-22.png)

区域 22 · [查看论文原页](https://dafx26.mit.edu/assets/papers/DAFx26_paper_36.pdf#page=3)

[![原文数学表达区域 23，PDF 第 4 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/798a4eedd135/figure-23.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/798a4eedd135/figure-23.png)

区域 23 · [查看论文原页](https://dafx26.mit.edu/assets/papers/DAFx26_paper_36.pdf#page=4)

[![原文数学表达区域 24，PDF 第 4 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/798a4eedd135/figure-24.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/798a4eedd135/figure-24.png)

区域 24 · [查看论文原页](https://dafx26.mit.edu/assets/papers/DAFx26_paper_36.pdf#page=4)

[![原文数学表达区域 25，PDF 第 4 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/798a4eedd135/figure-25.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/798a4eedd135/figure-25.png)

区域 25 · [查看论文原页](https://dafx26.mit.edu/assets/papers/DAFx26_paper_36.pdf#page=4)

[![原文数学表达区域 26，PDF 第 4 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/798a4eedd135/figure-26.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/798a4eedd135/figure-26.png)

区域 26 · [查看论文原页](https://dafx26.mit.edu/assets/papers/DAFx26_paper_36.pdf#page=4)

[![原文数学表达区域 27，PDF 第 4 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/798a4eedd135/figure-27.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/798a4eedd135/figure-27.png)

区域 27 · [查看论文原页](https://dafx26.mit.edu/assets/papers/DAFx26_paper_36.pdf#page=4)

[![原文数学表达区域 28，PDF 第 4 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/798a4eedd135/figure-28.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/798a4eedd135/figure-28.png)

区域 28 · [查看论文原页](https://dafx26.mit.edu/assets/papers/DAFx26_paper_36.pdf#page=4)

[![原文数学表达区域 29，PDF 第 4 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/798a4eedd135/figure-29.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/798a4eedd135/figure-29.png)

区域 29 · [查看论文原页](https://dafx26.mit.edu/assets/papers/DAFx26_paper_36.pdf#page=4)

[![原文数学表达区域 30，PDF 第 4 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/798a4eedd135/figure-30.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/798a4eedd135/figure-30.png)

区域 30 · [查看论文原页](https://dafx26.mit.edu/assets/papers/DAFx26_paper_36.pdf#page=4)

[![原文数学表达区域 31，PDF 第 4 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/798a4eedd135/figure-31.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/798a4eedd135/figure-31.png)

区域 31 · [查看论文原页](https://dafx26.mit.edu/assets/papers/DAFx26_paper_36.pdf#page=4)

[![原文数学表达区域 32，PDF 第 4 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/798a4eedd135/figure-32.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/798a4eedd135/figure-32.png)

区域 32 · [查看论文原页](https://dafx26.mit.edu/assets/papers/DAFx26_paper_36.pdf#page=4)

另有 56 个候选区域因边界不明确或图片数量、尺寸限制未展开；请[查看完整论文](https://dafx26.mit.edu/assets/papers/DAFx26_paper_36.pdf)中的原始排版。

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。
- 评分规则：type-aware-v1
- 评分模型：muse-spark-1.3-contributor
- 评分请求协议：openai_responses

---

[← 返回 dafx-2026 论文汇总](/posts/conference-dafx-2026/)
