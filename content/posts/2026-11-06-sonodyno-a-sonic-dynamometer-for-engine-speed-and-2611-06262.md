---
title: "SonoDyno: A Sonic Dynamometer for Engine Speed and Load Estimation from Audio"
date: 2026-11-06
draft: false
tags: [声学系统参数估计, CNN, RNN, 信号处理]
categories: [论文速递]
description: "针对无转速表、无总线、未知缸数的录音标注问题，SonoDyno 用三分辨率阶次能量加联合计分读出转速与缸数并用转动力学解码平滑轨迹，再用第二分支估计发动机归一化负荷，在未见过的真机上多数帧相对误差在 2% 以内，但最快转速变化与怠速仍是主要误差来源。"
hiddenInHomeList: true
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_arxiv_id: "2611.06262"
paper_digest_workbench_contract: "researcher-workbench"
paper_digest_workbench_schema_fingerprint: "1f09b594c317cc38e934de27a5b0e8ceb4baa50ef79bd4f8683dd9adea720fe7"
paper_digest_reader_title: "只听声音读出发动机转速、缸数与负荷：SonoDyno 是怎么做到的"
paper_digest_original_title: "SonoDyno: A Sonic Dynamometer for Engine Speed and Load Estimation from Audio"
paper_digest_arxiv_version: 1
paper_digest_arxiv_versioned_id: "2611.06262v1"
paper_digest_arxiv_abs_url: "https://arxiv.org/abs/2611.06262v1"
paper_digest_arxiv_pdf_url: "https://arxiv.org/pdf/2611.06262v1.pdf"
paper_digest_primary_task: "声学系统参数估计"
paper_digest_tags_contract: "paper-tag-flat-tags"
paper_digest_tags_schema_fingerprint: "27e36280a4b8d3df62ebe54d3ab037920f4d69feb2b554163f01bbae2caf4338"
paper_digest_tags_selection_contract: "paper-tag-selection"
paper_digest_tags_registry_version: "paper-tag-catalog"
paper_digest_tags_registry_sha256: "9673bc0122e1905a5dcfd8b223675400cc2fa4c36095bc0e5f817edf99a0ec5c"
paper_digest_tags_concepts: [{"facet":"task","id":"task.acoustic-parameter-estimation","label":"声学系统参数估计"},{"facet":"method","id":"method.cnn","label":"CNN"},{"facet":"method","id":"method.rnn","label":"RNN"},{"facet":"method","id":"method.signal-processing","label":"信号处理"}]
paper_digest_primary_method: "CNN"
paper_digest_score: 6.4
paper_digest_rank_bucket: "前50%"
paper_digest_document_type: "方法研究"
paper_digest_one_sentence: "针对无转速表、无总线、未知缸数的录音标注问题，SonoDyno 用三分辨率阶次能量加联合计分读出转速与缸数并用转动力学解码平滑轨迹，再用第二分支估计发动机归一化负荷，在未见过的真机上多数帧相对误差在 2% 以内，但最快转速变化与怠速仍是主要误差来源。"
paper_digest_authors: [{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Robin Doerfler"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Beat Rossmy"}]
paper_digest_abstract_sha256: "472099a2a4e546b746c2db03af3d630a66e09d727286b0e5d740c10522581e1a"
paper_digest_sidecars: {"citation.bib":{"sha256":"8f352d5cd1043f7b1195620163495265f061f0caacba487ee212970622c9933d","url":"/audio-paper-digest-blog/client/papers/2026-11-06/2611-06262/citation.bib"},"citation.json":{"sha256":"00af436323244fdd91588cfad21b3e109acb4dfe889d17fae02f3cdfdb8b0732","url":"/audio-paper-digest-blog/client/papers/2026-11-06/2611-06262/citation.json"},"citation.ris":{"sha256":"8843846a52b40ad3cf47940de30b0de595a5aed3f0604f281c725991b29cdb0c","url":"/audio-paper-digest-blog/client/papers/2026-11-06/2611-06262/citation.ris"},"rethink-context.json":{"contract":"paper-research-context","schemaFingerprint":"5d4e79f7d3ee65b39ccb38281548bf20a1b2041ab7a27625eaf97ab9909a8383","sha256":"37cb87af2b528a3ceec6796bd8866c5dc8c132fd1fa662e68ac0757454e954b3","url":"/audio-paper-digest-blog/client/papers/2026-11-06/2611-06262/rethink-context.json"}}
paper_digest_api_reader_contract: "beginner-researcher"
paper_digest_api_reader_schema_fingerprint: "cd8baf5b8bda3a49eec64f6005931af63de4e9a13148cba5f354c661ca6e9df2"
paper_digest_api_reader_article_sha256: "2656115a535efa2be2f0b45bd576a8072dd9bd7d1989e8b9af1e3cc43c119fc0"
paper_digest_api_reader_plan_sha256: "4ad446c8a00260437d4513ac0d7a1c3edbacab0a1225d4eef698dbb2be95cb90"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings"
paper_digest_api_reader_source_binding_schema_fingerprint: "d2a2607a6e561909473022eb43f56332ee357af8568566a095c29083ffdec9cc"
paper_digest_api_reader_source_bindings_sha256: "4eefb562c07968b31d942f9f904f7a12f74fe7d57b8f7dd91cf89c7bd7c92788"
paper_digest_api_reader_source_table_count: 4
paper_digest_api_reader_source_formula_count: 5
paper_digest_api_reader_structured_artifacts_sha256: "5bcd7b32d521f2e308e08f3361800c855631c61b8e39dede61d5a3e45dae5d39"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity"
paper_digest_api_reader_author_identity_schema_fingerprint: "1e3fd3a9a56c9a5bf52df8df5022690b9a3fa92e83e934f295af87c0e258ed2f"
paper_digest_api_reader_author_identity_sha256: "fd78e97be43cad2a9db1525bb5d76230257aaf417671c44935ce6ab43aa48f8e"
paper_digest_api_reader_author_count: 2
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity"
paper_digest_api_reader_resource_identity_schema_fingerprint: "33b0be17118be61f39b85ce690c8da17e91f2864bb65e85284f60c40067328e0"
paper_digest_api_reader_resource_identity_sha256: "caa887649a18d3a529fda4c6820962d3485e2e1cc5cdcc2ad79ae47e93512599"
paper_digest_api_reader_resource_count: 0
paper_digest_api_reader_figure_persistence: "ephemeral-no-persisted-figure-assets-v1"
paper_digest_api_reader_decision_projection: "api-reader-decision-projection"
paper_digest_api_reader_decision_projection_schema_fingerprint: "e56feb5ab75c8710904916b898f73dab9bb18bdf65bb60b7ed2edf7f99cea860"
---

# 📄 只听声音读出发动机转速、缸数与负荷：SonoDyno 是怎么做到的

> 英文题目：*[SonoDyno: A Sonic Dynamometer for Engine Speed and Load Estimation from Audio](https://arxiv.org/abs/2611.06262v1)*

<!--paper-tag-hierarchy-v1:start-->

**研究分类**

- **研究任务**：[声学系统参数估计](/audio-paper-digest-blog/papers/?concept=task.acoustic-parameter-estimation)
- **研究方法**：[CNN](/audio-paper-digest-blog/papers/?concept=method.cnn)；[RNN](/audio-paper-digest-blog/papers/?concept=method.rnn)；[信号处理](/audio-paper-digest-blog/papers/?concept=method.signal-processing)

<!--paper-tag-hierarchy-v1:end-->

> 评分：**6.4/10** | 创新 1.4/2 | 技术严谨 1.2/1.5 | 实验充分 1.2/1.5 | 清晰度 0.8/1 | 影响力 0.5/1.5 | 开源 0/1.5 | 可复现 0.3/0.5 | 工程/实践 1/1.5


## 👥 作者与机构

- Robin Doerfler：机构信息未能在本次解析中与作者逐人可靠绑定
- Beat Rossmy：机构信息未能在本次解析中与作者逐人可靠绑定

## 📌 核心摘要

四冲程发动机每两转完成一轮点火脉冲序列，谐波位于曲轴旋转频率半整数倍阶次上，缸数决定最强阶次，负荷改变脉冲形状与谐波噪声能量分配，论文仅用单路麦克风同时估计转速、缸数与发动机归一化负荷强度。前端自重采样到\(f_s=8\)kHz和预加重起，将三种窗长白化频谱经阶次梳映射为三分辨率阶次能量图。卷积评分器分阶次提纯并融合多分辨率，按缸数假设对点火阶次加权，与不依赖缸数的跨阶次模式检测器联合输出转速候选与缸数假设的联合打分后验。维特比解码器以该后验为输入，在转速及其相对变化率上惩罚加速度变化，解出连续转速轨迹并按整段读出缸数，负荷头再在解码转速处读取阶次带能量与谐波噪声比。与通用基音估计器不同，该方法把最强谱线对应阶次作为待估假设，而非当作已知先验直接换算转速。在真实验证录音且各跟踪器均获oracle阶次的评测设置下，最接近的跟踪器PESTO帧级5%容差覆盖率指标c5为61.6%，SonoDyno自估缸数条件下c5为95.7%，高于PESTO。在麦克风位置、机型与缸数均未见的两台真实发动机上，帧级2%容差覆盖率指标c2为93%至97%，八度混淆低于2%，缸数按会话读取准确率为80%。在已知类型未见单机的评测设置下，负荷强度0至1量程平均绝对误差为0.12，驱动与制动符号判断的状态准确率为91%。结论适用于底盘测功机半消声室录音和仿真机型，未覆盖道路风噪交通噪声，快速变速段和怠速段误差增大；评分器含124302个可学习参数，负荷头另含164649个参数，单次训练在单块RTX 3090上耗时11.5小时。

## 🔗 开源与复现资源

本次未形成可展示的已核验资源记录，开放状态尚未核实。

可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 发动机声音里藏着什么状态，为什么值得从录音里读出来

这篇论文要解决的是可控发动机声音合成缺少标注的问题。输入是一段麦克风录到的发动机声音，目标是逐帧读出转速、整段读出缸数，并读出负荷轻重。输出要能直接拿去条件合成或阶次分析：转速单位是 rpm，缸数是 1 到 18 共 11 个候选之一，负荷是 0 到 1 之间的归一化 effort。

发动机声音可以看成脉冲串经过排气和车体滤波后的结果。四冲程发动机两转完成一个循环，每个缸点火 1 次，所以重复周期是两转，谐波出现在旋转频率一半的整数倍上，这些位置就叫发动机阶次。缸数决定发火频率，也就是每秒点火次数，它等于缸数乘以转速除以 120。如果各缸完全一致，只有发火阶次及其倍频最强；缸间差异会把中间阶次填起来，但一般较弱。

只看频谱峰的位置读不出转速，因为缸数和转速的乘积相同，峰就重合。原文举例是四缸 6000 rpm 和八缸 3000 rpm 都在 200 Hz 发火。转速变化还带来分辨率矛盾：怠速 600 rpm 附近相邻阶次只差 5 Hz，需要 200 ms 以上乃至 600 ms 窗才能分开；但急加速时转速变化超过 1500 rpm/s，长窗内高阶会扫过多个间隔。负荷则改变脉冲本身和排气温度，高负荷时高频更强、凸起阶次更多，倒拖断油时只剩泵气声，大量阶次沉入噪声底。

**发动机阶次 × 发火阶次：** 发动机阶次指四冲程发动机每两转一循环中各谐波相对旋转频率的位置，记为 0.5、1、1.5 等；发火阶次特指缸数除以 2 的那个阶次，它是各缸均匀点火时最强的成分。两者分工是：阶次给出所有可能出现峰的位置，发火阶次指出哪几个位置应该最强，组合起来才能把缸数不同的发动机区分开。

### 已有路线为什么在未知发动机上卡住

无转速表阶次跟踪一般假设机器已知。它从振动或声音里跟踪一条时频脊线，有的需要用户给起始频率和谐波，有的用解调或 Vold-Kalman 滤波提取指定阶次。综述指出的开放难点正是低速、工况切换和谐波结构突变，而这些方法都在拟合的那台机器上评价，阶次靠手工选，传感器多是机体上的加速度计。

音高跟踪是另一条路线。倒谱、谐波积谱、YIN、SWIPE、pYIN、CREPE、SPICE、PESTO 等都是每帧返回一个周期，把最强线当基频。但发动机最强线是发火频率，是基频的 n 倍，n 未知就相当于缺了一个锚点。自监督方法靠已知移调学相对音高，仍要一个固定锚点来落地，而这里锚点随缸数变化。Motor2Synth 把 PESTO 重训到发动机采样包上，每个采样选一个阶次再平滑，它在训练用过的采样上评价，不能和本文的未见机条件直接比。

负荷在合成里长期缺位。仿真器输入是牛米扭矩，但同一扭矩在大机器上很轻、在小机器上很重，声音只携带相对 effort。已有做法多用响度代理负荷，但响度既无正负号，也跨机器不可比，加速和倒拖同样响却声音不同。本文因此把目标改成发动机归一化的负荷强度。

### 本文把任务切成哪几块，每块的输入输出是什么

论文把标注拆成转速加缸数一路、负荷一路。转速和缸数必须联合估计，因为不先假设缸数就无法把发火频率换算成转速。输入是整段会话的全部麦克风信号，输出是每 64 ms 1 帧的转速，以及整段一个缸数。负荷分支的输入是解码转速处的原始功率谱特征，输出是每帧 0 到 1 的负荷强度和扭矩为正的概率，多麦克风时再平均成会话级读数。

关键约束是冷启动和未知配置：不给转速表、不给总线、不给缸数和传声位置。评估按是否见过该发动机组织：一种是完全未见过的新型号，一种是已知型号的另一台真机，一种是训练机的新会话，再加一批未见过的仿真机。转速用相对误差 5% 以内占比 c5 和 2% 以内占比 c2 衡量，缸数按会话判对率衡量，负荷用平均绝对误差、解释方差、驱动与倒拖的二分类准确率和粗档准确率衡量。

### 系统全流程如何从波形走到转速、缸数和负荷

系统是离线标注器。固定前端先把每帧做成三分辨率阶次能量，形状是 3 窗乘 24 阶次乘 512 候选转速。随后 3 阶段计分器工作：视图精修按窗清理每条阶次脊，视图融合按阶次在窗之间做选择，计数条件计分按缸数加权并读出分数。计分器共 124302 个学习参数，其中约 91% 在阶次模式检测器里。

计分得到每帧 11 缸数乘 512 转速的联合后验，转动力学解码器在每支麦克风上找一条加速度变化很小的路径，缸数读取则比较各缸数自有路径在联合后验下的总分，多麦克风求和后取最大。负荷分支独立于计分器内部状态，只看解码转速处的 24 个阶次带能量、谐波噪声比、转速及其变化率，用因果 GRU 输出 40 格分布并取质心为估计值。发动机关闭帧由宽带电平门控置零。

### 前端怎样去掉传声路径并把频率换算成候选转速

音频先重采样到 8 kHz 并预加重，保留到 9000 rpm 时 12 阶约 1800 Hz 的范围。每帧用 128、512、2048 ms 3 种 Blackman 窗居中分析，短窗补 0 到 4 倍长以统一频率格。每个幅度谱先归一到最大值，再做白化：用 29 Hz 高斯平滑估计对数包络并减掉，然后再次归一。白化的作用是去掉排气、车体和麦克风位置带来的包络，让不同位置的谐波结构可比。

下面这张图要看的是白化是否只去包络、不动谐波。上面板是车内和排气两支麦克风的原始谱，包络明显错位；下面板白化后包络重合，尖峰位置保留。这正是后文能跨麦克风比较的前提。

> **看图路径：** 1. 对比上面板两支麦克风包络线的上下错位；2. 看下面板白化后两条曲线包络是否重合；3. 注意谐波尖峰位置在白化前后是否保留

[![原论文 Fig. 2：One frame of a recorded engine at 2418 rpm through two of the session’s simultaneous microphones,…](https://arxiv.org/html/2611.06262v1/fig_whitening.svg)](https://arxiv.org/html/2611.06262v1/fig_whitening.svg)

*论文图 2。原论文 Fig. 2:：“One frame of a recorded engine at 2418 rpm through two of the session’s simultaneous microphones, one in the interior and one at the exhaust.”。*

白化谱随后进入平铺梳。对数转速网格有 512 个候选，从 600 到 9000 rpm，一格是 0.00765 倍频程，转速的相对误差在格上处处形状相同。每个阶次和候选有一个频域盒核，相邻候选的核无缝平铺频率轴，边缘用 1.5 个频点高斯模糊。阶次能量就是白化谱在核下的加权和，覆盖 24 个阶次。

\[E_{t}(\ell,k,r)=\sum_{f}\psi(f,\ell,k,r)\,\tilde{X}_{t}(f,\ell),\]

这个公式计算的是某个窗、某个阶次、某个候选转速在该帧的能量：把白化谱按核加权求和。核固定、转速轴对数化，所以转速平移对应格数平移，估计器本身学不到转速先验。三窗各有分工：2048 ms 分开怠速密集阶次，128 ms 跟住快扫，512 ms 兼顾中间。

### 三分辨率阶次能量长什么样，为什么必须多窗融合

下面这张图要读的是同一速度在三窗下的脊形状。上半是 2418 rpm 稳态，下半是约 1076 rpm/s 上冲经过 2430 rpm 的 1 帧。白色曲线把同一声峰在不同阶次和候选下的位置连起来，它们都应在真速处穿过各自阶次。在半速和 2 倍速处，缸数差 1 倍的发动机会有相同发火频率，这是后文倍频混淆的来源。

> **看图路径：** 1. 先看稳态面板白色曲线如何在各阶次穿过同一转速；2. 再看扫频面板长窗口中斜亮带如何被拉宽；3. 对比短窗口在扫频时为何仍保持窄亮脊

[![原论文 Fig. 4：The order energy \\mathbfE_t that the scorer reads, over the 24 orders and the 512 candidates of the…](https://arxiv.org/html/2611.06262v1/fig_views.png)](https://arxiv.org/html/2611.06262v1/fig_views.png)

*论文图 4。原论文 Fig. 4:：“The order energy \mathbfE_t that the scorer reads, over the 24 orders and the 512 candidates of the logarithmic grid \mathcalR, for one eight-cylinder engine and one microphone…”。*

稳态时三窗都有清晰点列，长窗最锐。扫频时 2048 ms 窗内转速从 1385 走到 3647 rpm，高阶被拉成宽斜带；128 ms 窗内只从 2365 走到 2505 rpm，仍是窄脊。同一帧里低阶可能需要长窗、高阶需要短窗，且需求随时间翻转，所以不能用固定线性平均。

视图精修给每个窗配一套跨帧和候选的卷积，输入 4 通道加 3 个残差块，把泄漏和噪声抹掉但不混阶次。视图融合把三窗的精修图按阶次堆成通道，用 5×9 卷积到 32 通道再线性到一张融合证据图。隐藏层相当于开关：短窗干净而长窗拖尾的组合会激活某些通道，从而按局部选窗。融合后每阶次仍独立成图，直到发火增益才跨阶次加权，这是保持缸数可解释性的关键。

**阶次能量 × 白化频谱：** 白化频谱指除掉麦克风位置和包络影响后只保留谐波起伏的频谱；阶次能量指在白化频谱上用梳状核在每个候选转速、每个阶次位置上积分得到的能量。白化负责让不同传声路径可比，阶次能量负责把频率轴折算到转速轴，二者搭配后同一工况在不同麦克风下形状接近。

### 计分器怎样用缸数假设读出转速，解码器怎样守住轨迹

计数条件计分有三件套。发火阶次增益用一个 16 单元 tanh 多层感知机，把阶次和发火阶次的比值、到整数的距离等 5 个特征映射成 logit，再在 24 阶上 softmax 并乘 24，使每缸数权重均值为 1。均值为 1 意味着缸数只给形状、不给尺度，一个模型可服务 11 种缸数，训练样本少的稀有缸数也用同一张映射。

\[g(k,n)=24\,\softmax_{k}\big(\phi(k,n/2)\big),\]

这个公式给出缸数 n 对阶次 k 的权重，phi 是上述感知机。学出来的增益从三缸起都在发火倍频处抬高、在半倍处压低，发火阶次本身抬得最多，一缸时 24 阶全是发火倍频所以形状特殊。

> **看图路径：** 1. 看上面板白点处增益是否明显高于周围；2. 看下面板以发火阶次为单位时各缸数曲线峰是否对齐；3. 注意一缸和两缸曲线为何与其他缸数形状不同

[![原论文 Fig. 5：The learned firing-order gain g(k,n) of the eleven counts, mean 1 over the 24 orders.](https://arxiv.org/html/2611.06262v1/fig_gain.png)](https://arxiv.org/html/2611.06262v1/fig_gain.png)

*论文图 5。原论文 Fig. 5:：“The learned firing-order gain g(k,n) of the eleven counts, mean 1 over the 24 orders.”。*

上图确实可见白点处增益高、点间增益低；下图以发火阶次为单位对齐后各缸数峰谷对齐，证实模型学到的是相对结构而非绝对频率。阶次模式检测器把 24 阶当通道，用 1×1 混合加 3×9 卷积和残差块输出每候选 8 维特征，专门捕捉多阶同向漂移。读出器把加权证据和检测器特征经两层 32 单元隐层映射成分数，权重矩阵有符号，所以增益决定某阶多重要，读出器决定它是加分还是减分，隐层还能表达阶间依赖。

\[P_{t}(n,r)=\frac{\exp s_{t}(n,r)}{\sum_{n^{\prime}\in\mathcal{N}}\sum_{r^{\prime}\in\mathcal{R}}\exp s_{t}(n^{\prime},r^{\prime})}.\]

该式把 11×512 个分数做联合 softmax 得到后验，训练目标就是标注格的交叉熵，1 帧同时压低错误转速和错误缸数。解码时按式在单缸后验上做维特比搜索，状态含候选和路径速度，代价惩罚速度的变化和速度本身。

\[\arg\max_{r_{1},\dots,r_{T}}\sum_{t=1}^{T}\log P_{t}(r_{t}\mid n)-\kappa_{\mathrm{a}}\sum_{t=3}^{T}\big((v_{t}-v_{t-1})\,\delta\big)^{2}\\ -\kappa_{\mathrm{v}}\sum_{t=2}^{T}(v_{t}\,\delta)^{2}\]

式中第一项是帧后验，第二项惩罚相对加速度的变化，第三项惩罚速度。速度解码用第二项系数 512、第三项 0 并限速，允许匀速爬升而不罚；缸数读取用 1 阶设置比较各缸路径的联合后验总分。示意图显示抖动路径和下去又上来的倍频路径要多付上百 nat，而平滑真路径只付 2.2 nat。

**发火阶次增益 × 阶次模式检测器：** 发火阶次增益是按缸数给 24 个阶次加权的一组权重，强调该缸数的发火倍频、压低中间阶次；阶次模式检测器是不看缸数、直接看 24 个阶次整体图案的卷积分支。增益提供缸数假设下的先验形状，检测器提供跨阶次的共同运动证据，二者一起送入读出器才既能区分缸数又能在快速扫频时跟住。

**相对转速变化率 × 转动力学解码器：** 相对转速变化率指对数转速每帧走多少候选格，反映加速快慢；转动力学解码器是用维特比搜索找一条变化率本身变化很小的路径的无参数模块。它惩罚的是加速度的突变而不是速度本身，因此允许匀速爬升但抑制抖动和倍频跳变，组合后得到物理上连续的转速轨迹。

### 负荷分支看什么特征，负荷强度本身如何定义

白化和归一丢掉了绝对电平和包络，而负荷恰恰藏在阶次凸起数量和谐波与噪声的分配里，所以负荷头回看原始 512 ms 功率谱。它在解码转速处取每个阶次正负 3% 带内功率组成 24 维带轮廓，8 阶以下带内与带间之比组成谐波噪声比，再加转速和转速变化率，共 27 维。训练时整会话的带轮廓一起随机加减 12 dB，逼模型只用阶间差和谐噪比，不用绝对响度。

负荷强度把扭矩放在发动机自身量程里归一化，拖曳底线为 0，全负荷顶线为 1，每台发动机按转速拟合两条包络线。

\[\lambda=\clip\!\left(\frac{\tau-\tau_{\mathrm{drag}}(\omega)}{\tau_{\mathrm{WOT}}(\omega)-\tau_{\mathrm{drag}}(\omega)},\,0,\,1\right),\]

该式把测量扭矩减去同转速拖曳扭矩再除以全负荷与拖曳之差并截断到 0 到 1。同一 3000 rpm 下 300 牛米对小机器是满载、对大机器不足 40%，但换算成负荷强度后可比。特征序列送入两层 128 单元因果 GRU，每帧输出 40 格分布和高扭矩概率，估计取分布质心。质心比取峰更能解释验证方差，因为同一谱常在倒拖和带载各有一个峰。

**负荷强度 × 谐波噪声比：** 负荷强度指当前扭矩在拖曳底线为 0、全负荷顶线为 1 之间所处的位置，是发动机自身归一化的 effort；谐波噪声比指阶次带内能量与带间能量的比值。负荷强度是目标量，谐波噪声比是输入特征之一，因为高负荷时凸起的阶次更多、谐波相对噪声更强，二者搭配把绝对声压丢掉后仍能读出轻重。

### 数据从哪里来，模型按什么顺序训练

语料共 116.7 小时按麦克风通道计。真机 41.9 小时来自 8 台发动机、538 个会话、4/6/8 缸、14 个麦克风位置，42% 帧为负扭矩倒拖；仿真机 60.4 小时来自 370 台、11 种缸数 1 到 18，其中 5 种只有一两台；程序重合成 14.4 小时来自两台真机的速度扭矩轨迹重渲染。真机变传声路径，仿真机变发动机设计并补足 1250 rpm 以下怠速，快于 1500 rpm/s 的帧只占训练 1.1% 但被过采样约 3 倍。

下面这张表要回答的是 3 类材料各自补什么短板。行是材料种类，列是时长、台数、缸数、麦克风位置和倒拖占比，最后一行是合计。真机缸数少但传声变化大，仿真机缸数全但传声单一，重合成提供带真车遥测的轨迹。

| Material | Hours | Engines | Cylinders | Mic. pos. | Overrun |
| --- | --- | --- | --- | --- | --- |
| Real recordings | 41.9 | 8 | 4, 6, 8 | 14 | 42 % |
| Simulated engines | 60.4 | 370 | 1 to 18 (11) |  | 37 % |
| Resyntheses | 14.4 | (2) | 8 |  | 44 % |
| Total | 116.7 | 378 | 1 to 18 (11) | 14 | 40 % |

表中真机 8 台、仿真 370 台、合计 378 台的台数关系成立，重合成不计台数；倒拖占比 3 类都在 40% 左右，保证负荷两端都有样本。划分按会话分组，同会话多麦克风同侧；验证留一台全新四缸加新装置，测试留一台同型号八缸，仿真机训练与评测不重叠。

训练分两段。先训转速计分器，AdamW 学习率 1e-3、200 步热身加余弦衰减到 0，共 10000 步，每批 32 段乘 256 帧约 16.4 秒，真机占 36.3%，前端与卷积用 bfloat16、分数用 fp32，读出权重零初始化使起点为均匀后验，单卡 RTX 3090 约 11.5 小时。再冻结计分器训负荷头 3000 步，特征取自解码转速，使其在推理的转速误差下学习，目标是 1 格宽高斯的分布交叉熵加 0.3 倍扭矩符号二分类损失。

### 评测如何组织，指标和对照条件是否公平

评测按 4 个持留问题切分：未见型号、已知型号新机、训练机新会话、未见仿真机，真机与仿真机分开计分。帧指标在有标注帧上池化，录音级指标按至少 50 标注帧的录音平均。转速用 c5 和 c2 表示相对误差小于 5% 和 2% 的帧占比，半速或 2 倍速附近 0.2 倍频程内算倍频错；c5 低于 0.2 的录音记为损坏。坡道取真速变化 500 到 1500 rpm/s 的帧报 c5，应力带取 1500 rpm/s 以上单报，怠速取 1250 rpm 以下报 c2。

缸数按会话判对率，仿真按录音判对率，还比较 11 选与 6 选两种候选集。负荷报平均绝对误差、解释方差、扭矩符号准确率和粗档准确率，粗档以固定边界 0.174 划分倒拖与轻中重载。

对照给足通用音高方法优势：YIN、pYIN、CREPE、PESTO 及按 Motor2Synth 在本数据重训的 PESTO 都配 oracle 阶次，即按标签选最有利的谐波序号换算转速，而 SonoDyno 的缸数仍从声音自读。另有两个无学习对照：三窗阶次能量平均后平权求和，以及按真发火阶次加权求和，再接同一解码器，用来分离表示与学习的贡献。测试集只评 1 次，选择都在验证集上完成。

### 转速和缸数在未见过的机器上能到什么水平

下面这张表要回答的是各持留切分上的转速与缸数绝对水平。列是 c5、c2、加发动机门控的 c5 和缸数判对数，行是验证与测试的各切分。指标越大越好，缸数是判对会话数。

| Slice | c5 | c2 | gated c5 | count |
| --- | --- | --- | --- | --- |
| real recordings, pooled | 0.947 | 0.935 | 0.944 |  |
| unseen engine type | 0.969 | 0.968 | 0.969 | 36/47 |
| held-out sessions | 0.894 | 0.859 | 0.887 | 4/4 |
| unseen simulated engines | 0.994 | 0.989 | 0.973 | 60/60 |
| unseen engine of a known type | 0.945 | 0.931 | 0.917 | 9/9 |
| unseen simulated engines | 0.980 | 0.974 | 0.966 | 135/149 |

验证 pooled 真机 c5 0.947、c2 0.935，未见型号反而 c5 0.969 高于训练机新会话的 0.894，因为后者是长动态驾驶，参考真值在换挡跳变处逐帧突变，而窗估计要一两帧才通过，上限本身只有 c2 0.939。未见仿真机 c5 0.994 最好。测试已知型号新机 c5 0.945、c2 0.931，缸数 9/9 全对；未见仿真机 c5 0.980、c2 0.974，缸数 135/149。验证缸数只在未见四缸上错 11 个会话，误读为八缸，此时偶发火谐波仍对得上，真速不受影响；用真缸数解码只差千分之三以内，说明读缸数几乎不 cost 转速。

下面这张图是八缸恒速会话的联合读数实例。上方面板质量集中在真缸真速一格，其他缸在同速处低至少 10 nat，倍频处更低；中面板真值路径长期最高；下面板会话准则胜出者减 1.7 nat、第 2 名减 61.9 nat，差距悬殊。

> **看图路径：** 1. 看上面板联合后验质量是否集中在真值附近一格；2. 看中面板各缸数路径中真值路径是否长期最高；3. 看下面板柱状准则中胜出者与第二名的差距

[![原论文 Fig. 7：The joint cylinder-count and speed read on one recording session of an eight-cylinder engine at…](https://arxiv.org/html/2611.06262v1/fig_joint.png)](https://arxiv.org/html/2611.06262v1/fig_joint.png)

*论文图 7。原论文 Fig. 7:：“The joint cylinder-count and speed read on one recording session of an eight-cylinder engine at constant speed, five microphones.”。*

误差集中在又要频率细又要时间快的区间：真机坡道 c5 0.840、怠速 c2 0.832，应力带 c5 0.67，而仿真应力带 0.89。倍频混淆很少，全部验证帧半速 0.3%、2 倍 0.5%，未见型号 1.8%。

### 通用音高方法在同样帮助下差在哪里

下面这张表要回答的是在给足 oracle 阶次后通用方法能否追上。列是 c5、c2、平均相对误差和损坏录音占比，前两列越大越好，后两列越小越好。行是 SonoDyno、无学习表示和各基线。

| System | c5 | c2 | RMAE % | broken % |
| --- | --- | --- | --- | --- |
| SonoDyno | 0.957 | 0.948 | 2.4 | 0.6 |
| PESTO | 0.616 | 0.569 | 63.8 | 17.2 |
| CREPE | 0.378 | 0.342 | 206.4 | 33.7 |
| pYIN | 0.258 | 0.253 | 78.8 | 62.6 |
| YIN | 0.279 | 0.275 | 81.1 | 55.2 |

真验证录音上 SonoDyno c5 0.957、c2 0.948、误差 2.4%、损坏 0.6%；最近的 PESTO c5 0.616、c2 0.569、误差 63.8%、损坏 17.2%，CREPE、pYIN、YIN 都不到 40%。无学习平权已达 c5 0.718，按真发火加权到 0.774，说明阶次表示本身已超所有音高方法，学习阶段再把 c5 推到 0.957、损坏从 30.1% 压到 0.6%。按旋转频率直接读则都低于 14%，选对每机阶次才把 PESTO 从 6% 抬到 62%。在本数据重训的 PESTO 反而掉到 8% 到 12%，缺锚点时锁不住任何阶次。计分器 124302 参数不大于最小学习基线 PESTO 的 130806，远小于 CREPE 的 22.2M，负荷头另加 164649 参数。

### 负荷强度在什么条件下可读，多麦克风平均带来什么

下面这张表要回答的是负荷在各切分上的误差与分类水平。列是解释方差、平均绝对误差、扭矩符号准确率和粗档准确率，前者越大越好，误差越小越好。行分验证与测试，含单麦克风与会话平均两行。

| Slice | \(R^{2}\) | MAE | state | class |
| --- | --- | --- | --- | --- |
| held-out sessions, training engine | 0.756 | 0.090 | 0.905 | 0.761 |
| averaged over microphones | 0.819 | 0.082 | 0.929 | 0.795 |
| unseen simulated engines | 0.819 | 0.108 |  | 0.779 |
| unseen engine of a known type | 0.640 | 0.117 | 0.914 | 0.697 |
| averaged over microphones | 0.781 | 0.099 | 0.954 | 0.718 |
| unseen simulated engines | 0.785 | 0.114 | 0.938 | 0.780 |

训练机新会话单麦克风解释方差 0.756、误差 0.090、符号 0.905、粗档 0.761，会话平均后方差到 0.819、误差 0.082，各麦克风估计互相关 0.93，平均去掉了与位置有关的残差。未见仿真机 26 台多缸多容量上方差 0.819、误差 0.108，说明归一化到自身量程后可跨机迁移。用标注转速训同一负荷头反而方差掉到 0.48，证实必须在解码误差下训练。测试已知型号新机单麦克风方差 0.640、误差 0.117、符号 0.914，会话平均后方差 0.781、误差 0.099、符号 0.954，恢复幅度大于验证，说明该机各麦克风分歧更大。误判多在相邻粗档，70% 精确、93% 差一档内，倒拖帧平均读 0.08，距边界 0.174 有 0.09 裕量。

### 哪些组件真正扛住快变和怠速，数据配比改动会怎样

消融在固定缸数解码下只换计分器。把检测器在训练好模型中置零，新会话应力带 c5 从 0.51 跌到 0.10，怠速 c2 从 0.81 跌到 0.52，而未见型号 c5 仍有 0.91，说明检测器扛动态、加权证据可保稳态。同样加权证据下多层感知机读出器比 plain 加权和把未见型号缸数从 21/47 提到 37/47、应力带从 0.22 提到 0.36；再加检测器后全验证 c2 从 0.937 到 0.957。早混阶次的共享主干在同等步数只有 c5 0.926、应力带 0.11、缸数 20/47，远低于保持阶次独立到增益的 0.965、0.506、37/47。加宽精修不超原尺寸，融合 32 通道砍到 8 通道则应力带从 0.57 跌到 0.12、仿真从 0.86 到 0.16，融合宽度是应力带的关键。

数据侧，快帧过采样把新会话应力带从 0.60 提到 0.68、c5 从 0.87 到 0.89，未见型号变化在种子波动内。真机占比从 36.3% 提到 53% 则拟合已知机而伤未知机：新会话 c5 涨 0.010，未见型号 c5 掉 0.023 并丢 5 个缸数。2 倍步数也无益，未见型号 c5 掉 0.010、怠速倍频从 5.0% 涨到 7.4%。允许增益为负时下限约减 0.035 且仍在种子波动内，说明增益本质是存在性加权；ARC 式自适应转移代价在真机上反降 c5，应力带降 0.006，故保留固定代价。

### 结论在哪些边界之外不再成立

剩余误差在坡道、应力带和怠速三处。真机只覆盖 4、6、8 缸，持留真机只有 4 和 8 缸，6 缸及其他缸数只在仿真机上验证；四缸恒定高速误读为八缸是信号模型允许的系统性混淆。未见型号同时换了发动机和录音装置，两因素不可分。全部真机录自半消声室底盘测功机，没有道路、风噪和交通噪声。

转速估计基于单一种子，种子波动在应力带可达 0.06，小于此的单种子差异不解读；测试集只评 1 次且只有一台真机。负荷在训练机新会话、仿真机和测试机上评分，没有未见型号真机上的负荷分。噪声振动 harshness 和机械诊断需要的绝对扭矩精度不在本文目标内，本文只给归一化 effort。把末步最优或 oracle 阶次当成部署可得的提升是误读，对照中的 oracle 本就是偏向基线的上限。

### 要复现第一步做什么，需要哪些信息和预算

复现先按会话分组划分，保证同会话多麦克风同侧，重合成中源自测试机的内容不进任何切分，仿真机训练与评测不重叠。前端固定：8 kHz、预加重 0.97、三 Blackman 窗 128、512、2048 ms，短窗补零 4 倍，白化高斯 29 Hz，对数网格 512 格从 600 到 9000 rpm。训练只拟合训练集统计量，不按录音归一化；负荷训练加整会话正负 12 dB 联合增益抖动。

超参数按原文：转速用 AdamW 1e-3、200 步热身、余弦到 0、10000 步，每批 32 段乘 256 帧；解码速度用 kappa 加速 512、速度 0、限速 48 格每帧，读数用 1 阶 kappa 速度 32。负荷用 Adam 3000 步，40 格分布加 0.3 符号损失。单卡 RTX 3090 转速约 11.5 小时。评估用 64 ms 帧、中心差分正负 0.5 秒定坡道、c5 低于 0.2 记损坏，并报告门控与非门控两版。未提供可运行代码与权重时，只能按上述固定前端和网格重写，来源未确认不等于技术缺陷。

### 什么时候值得尝试，还有什么值得接着验证

当手里只有无标注的存档、采样包或网络视频，需要给可控合成、主动声设计或阶次分析补转速和负荷轨迹时值得尝试。它不需转速表、总线和缸数先验，对未知型号和已知型号新机都给出 90% 以上帧在 2% 内的转速，以及符号 90% 以上的负荷方向，比响度多出正负号和跨机可比性。多麦克风会话平均能进一步压掉位置残差。

不值得在强路噪、远场交通或车载真实道路上直接当真，原文无此类覆盖；也不宜拿它输出绝对牛米去做诊断，绝对惯量和负载扭矩本来就不在声音里。下一步应补真实道路噪声、更多真机缸数尤其是六缸、未见型号真机上的负荷，以及多种子和延迟统计。表示侧的每谐波精修、多分辨率融合和带速度状态的解码器是否能搬到音乐与语音音高上，原文未测，仍是开放问题。

<details>
<summary>📎 论文与评分元数据</summary>

排名：前50% | 文档类型：方法研究 | [arXiv 原文](https://arxiv.org/abs/2611.06262v1)

</details>

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。

- 评分规则：type-aware-v1

- 评分模型：muse-spark-1.3-contributor

- 评分请求协议：openai_responses

---

[← 返回 2026-11-06 语音/音乐/音频论文速递](/audio-paper-digest-blog/posts/2026-11-06/)
