---
title: "Robust Recovery of Deterministic Timecode Signals Under Analog Degradation"
date: 2026-09-13
draft: false
description: "论文用同一比特流解码器比较固定阈值、自适应阈值和有限时域保持三种因果策略，在噪声 0.06 处自适应把确认可用性从 0.868 提到 0.936、时域保持把总可用性提到 0.981，而 64 采样重复丢点下预测只提总可用性不提确认率，代价是长间隙下误差和假锁定上升。"
tags: ["信号处理", "鲁棒性", "实时处理", "音频交互"]
categories: ["dafx-2026 论文"]
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_paper_id: "conference:dafx:2026:conference-paper-id:DAFx26_paper_17"
paper_digest_source_kind: conference
paper_digest_conference_id: "dafx-2026"
paper_digest_conference_record_url: "https://dafx26.mit.edu/program/"
paper_digest_conference_pdf_url: "https://dafx26.mit.edu/assets/papers/DAFx26_paper_17.pdf"
paper_digest_api_reader_contract: "beginner-researcher-v3"
paper_digest_api_reader_article_sha256: "e0748cc7a8295eabfd77b7b279b597cf5d5e73c8d6d49741a6438894c33f6369"
paper_digest_api_reader_plan_sha256: "784c21358478f4c73865d4a0906e3acadcb75529d30072f39534841fe6432917"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings-v4"
paper_digest_api_reader_source_bindings_sha256: "51453ad6e47c2e65d22b46f67e19e48b32438fada064e1f46f6ba29369bcbee8"
paper_digest_api_reader_source_table_count: 3
paper_digest_api_reader_source_formula_count: 0
paper_digest_api_reader_structured_artifacts_sha256: "07a517b43164b8d6aff11b2060e278f67bf5a8971f80a9c51b49f6a3370a10b8"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity-v1"
paper_digest_api_reader_author_identity_sha256: "3df4c33b1f226acb5cc065adf5ed8074db4d949883be2aeb9908f47b245e11a3"
paper_digest_api_reader_author_count: 1
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity-v1"
paper_digest_api_reader_resource_identity_sha256: "4b5567a85076c6cb83abe10438aaeb76aec0efe35e90e9831f4c5c21ee6902ce"
paper_digest_api_reader_resource_count: 1
paper_digest_api_reader_decision_projection: "api-reader-decision-projection-v2"
paper_digest_scoring_contract: "api-scoring-audit-v2"
paper_digest_taxonomy_contract: "paper-taxonomy-flat-tags-compat-v1"
paper_digest_taxonomy_selection_contract: "paper-taxonomy-selection-v1"
paper_digest_taxonomy_registry_version: "paper-taxonomy-v1"
paper_digest_taxonomy_registry_sha256: "15c82a567ce5a55dc1175684ed08b64c158558639d9c8fb822c9587ec32a8778"
paper_digest_taxonomy_concepts: [{"facet":"method","id":"method.signal-processing","label":"信号处理"},{"facet":"research_focus","id":"research_focus.robustness","label":"鲁棒性"},{"facet":"setting","id":"setting.real-time","label":"实时处理"},{"facet":"task","id":"task.audio-interaction","label":"音频交互"}]
paper_digest_primary_task: "音频交互"
paper_digest_primary_method: "信号处理"
paper_digest_score: 5.9
paper_digest_rank_bucket: "前50%"
paper_digest_document_type: "方法研究"
paper_digest_conference_structure: replayable-pdf-layout-v1
---

# 📄 有输出不等于有证据：把可用性、确认锁定和预测延续分开算的时间码恢复对照

> 英文题目：*Robust Recovery of Deterministic Timecode Signals Under Analog Degradation*

> 会议身份：`conference:dafx:2026:conference-paper-id:DAFx26_paper_17`


> ✅ 来源为官方会议 PDF；表格与 Figure 按原文证据绑定。PDF 公式以原页区域图片展示，未冒称作者原始 TeX。

> 会议来源：[官方记录](https://dafx26.mit.edu/program/) · [官方 PDF](https://dafx26.mit.edu/assets/papers/DAFx26_paper_17.pdf)

标签：#信号处理 #鲁棒性 #实时处理 #音频交互

评分：**5.9/10** | 创新 1.0/2 | 技术严谨 1.2/1.5 | 实验充分 1.0/1.5 | 清晰度 0.8/1 | 影响力 0.6/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 1.0/1.5

排名：前50% | 文档类型：方法研究

## 👥 作者与机构

- Brady Cruse：机构信息未能从会议 PDF 纯文本可靠映射

## 📌 核心摘要

数字唱机系统需从44.1kHz立体声时码波形中因果恢复绝对位置、速度与方向的播放控制轨迹，难点在于加性噪声会增删过零点而突发丢失会直接抹除判决事件。先将立体声观测波形输入基线去除与过零检测前端，其职责是消除慢漂并产生候选 crossing 事件，输出的候选事件序列进入自适应迟滞环节。再将候选事件序列输入自适应幅度包络调节的迟滞比较与孤立冲击抑制，其职责是拒绝弱幅与脉冲型误 crossing，输出的可靠 crossing 序列进入位判决与查找环节。最后将可靠 crossing 序列输入互补通道幅值位判决与20位线性反馈移位寄存器查找，其职责是映射绝对位置并经25次连续有效转移确认锁定，输出的确认状态进入时域保持分支在中断后用滤波速度估计在30毫秒内做标记外推。在噪声与信号均方根比为0.06的10秒片段评测条件下，自适应门限解码器的确认可用率指标为0.936，高于固定门限解码器的确认可用率指标0.868。相对固定门限仅依赖固定裕量，自适应包络保留了波形存在但裕量失配时的确认输出，而时域保持把连续性与新证据显式区分，使64采样重复丢失下总可用率提升但确认率不变。上述结论适用边界受限于单profile单向标称速度的合成孤立退化，削波与丢失的共享采集边界及硬件通道效应尚未验证。原文未披露训练、推理或部署成本。

## 🔗 开源与复现资源

- 第三方资源：<https://github.com/xwax/> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 为什么数字黑胶要的不是干净波形而是连续可用的控制轨迹？

输入是一段已经压在唱片或光盘上的确定性立体声时间码波形，目标是从播放设备实时抠出绝对位置、方向和速度，再去拖动软件里的数字曲目。对刚入门的研究生，关键动作是把任务从音频修复切换到符号恢复：修复关心每个采样点像不像干净波形，这里只关心每个毫秒级决策事件能不能变成可信的位置状态。论文把观测写成干净立体声经过削波或丢点等结构性破坏，再叠加噪声，解码器必须逐帧因果输出，不能看未来。

干净条件下固定阈值已经能连续输出，一旦裕量被噪声扰动或事件被置零抹掉，解码器就面临两难：不输出会中断控制，输出一个看似合理但错误的位置会造成可闻跳变。所以评价必须同时回答有没有输出、输出与干净参考是否一致、轨迹是否稳定、何时能重新确认，这正是全文把可用性、正确性和时间行为分开的原因。第三方开源仓库当前可用，地址为可访问的第三方链接，但本研究只用其中一段商业波形的匿名化配置，不改变波形本身。

### 这项工作与哪些路线相邻，又刻意不比什么？

论文把自身放在实时音乐信号处理里，目标是因果控制轨迹而不是修复波形。相邻路线包括交互式音频里的特征跟踪与参数平滑、硬判决与可靠性条件判决的取舍、基于模型的跟踪方法。作者明确说明阈值检测、自适应迟滞和 1 阶预测单独看都不新，也不明示与所有商用解码器逐 1 对比。贡献被限定为三件事：把评价拆成是否可用、是否与干净操作参考一致、时间行为如何。

比较共享同一确定性状态解码器的 3 种因果策略，分别隔离固定穿越检测、自适应穿越检测和有界时间保持；报告噪声、重复突发丢点和削波下的全部分量指标，并加细削波扫描。这种窄比较是故意的：前端比特判决、查表和锁定规则完全相同，行为差异才能归因到恢复策略。教学上要记住，类别不同不能当同条件胜负，这里没有把软判决网格解码器或学习型立体声融合拉进来当基线，也不把单次综合分当安全指标。

### 确定性时间码的符号结构如何给解码器提供隐式纠错？

论文用的是一套商业 20 比特时间码配置，每秒 1000 个位置事件。符号序列由 20 比特线性反馈移位寄存器生成，下一个寄存器状态是当前状态经配置相关转移函数得到的确定性后继。全部 950,000 个有效状态预先生成 1 次并存成查找表，把每个恢复出的 20 比特字映射到绝对位置。重点是并非所有 20 比特字都属于该配置轨迹，局部看似合理的比特仍可能违背预期递进。

于是要求连续多次有效转移才暴露查找位置：只有超过 24 次连续递进匹配后才给出绝对锁定，也就是需要 25 次有效转移。这种确定性约束就是隐式纠错，它让绝对位置可以从足够长的局部历史识别，而不只依赖周期载波相位。方向由立体声穿越极性决定，幅度由互补通道提供，信号不下混为单声道，也不用学习式融合。

**操作参考 × 确认可用性：** 操作参考指用干净信号上的固定阈值解码器跑出的轨迹，它提供同一套索引下的比对基准；确认可用性指输出中经过 25 次有效线性反馈移位寄存器递进验证的那部分占比。两者搭配的原因是退化实验没有独立物理真值，只能先固定一个可复现的干净解码结果，再区分新证据和延续估计，组合意义是让后续的误差和假锁定都只相对该参考成立。

### 三个策略共享什么，又各自多做了哪一步？

三者共享同一比特提取、查表和确认逻辑，区别只在前端和时间层。固定阈值符号解码器只用固定阈值做极性穿越判断，假设固定裕量足够，每个可用事件直接二值化，记忆只留在状态层的确定性递进要求上，它同时提供干净操作参考和基线。自适应阈值符号解码器把固定阈值换成由短期绝对幅度包络缩放的阈值，并打开脉冲保护，保留同一比特规则和 25 次锁定条件，检验幅度估计能否在波形还在但裕量失配时保住事件时刻。

状态约束时域解码器沿用自适应前端，再加有界位置预测器，用阿尔法贝塔滤波器估计有符号播放速度，在缺失或被拒查表时有限外推。预测输出显式标记为未确认，只计入总可用性，不计入确认可用性，超过 30 毫秒时域后停止预测，回到普通 25 次转移重锁。候选位置若超出相对上次确认状态 64 个位置单位的转移门则不暴露，避免损坏比特活动无限延长保持。

全部策略逐立体声帧处理，不用未来样本，流式更新和查表是常数开销，建表离线为有效状态数的线性开销，实验中没有任何参数按退化条件重调。

### 基线与包络如何把直流漂移和孤立大脉冲挡在门外？

各通道先以慢变基线去除直流偏置和缓慢漂移，采用时间常数为 1 ms 的递归实现，不需要块缓存。固定阈值分支在基线上下附加固定迟滞，用于极性转移判断，分工为提供与幅度无关的基准事件定时。自适应分支额外跟踪短期绝对幅度包络，采用 0.995 与 0.005 系数的递归平滑幅度，再将穿越阈值取为 0.25 倍包络，并裁剪至 [T0/10, 3T0] 区间内，分工为在波形存在但裕量失配时维持事件定时。

下界防止输入微弱时迟滞塌缩，上界防止近期大幅值使检测器失敏，组合原因在于以包络缩放迟滞而不改变后续共用比特规则。若样本偏离基线的绝对值超过 10 ac，前端仍更新基线但抑制该样本，将其视作孤立极端脉冲，不解释为有效穿越。符号参考为 48 事件指数平均的幅度距离，各事件幅度为采样主通道与运行基线之差，比特为幅度是否大于该参考的硬比较，对应式 (8)，分工为把幅度比较与穿越检测解耦，使 3 种策略共用同一判决与查找表。

论文还给出勘误：原型中所谓模糊带规则在带内退化为相同硬比较，代数上与硬比特相同，因此中间策略按实际行为命名为自适应穿越检测与脉冲抑制，而非未实现的软输出符号解码。

**固定阈值检测 × 自适应阈值检测：** 固定阈值检测用固定迟滞裕量判断极性穿越是否成立，分工是最低复杂度的前端；自适应阈值检测用近期幅度包络缩放迟滞上下界并加脉冲抑制，分工是在波形还在但裕量失配时保住事件时刻。搭配理由是两者共享同一比特判决和查表锁定，可以把行为变化归因到前端缩放；组合意义是检验幅度估计能否在不补事件的前提下改善噪声过渡带的确认率。

### 从一次穿越到绝对位置：方向、查表与 25 次确认如何走完？

沿一个样本走完全程有助于复述方法。输入是 44.1 千赫立体声帧，先更新 2 通道基线和自适应包络，判断次通道是否发生选定极性穿越。若穿越成立，在该时刻采样主通道幅度并与符号参考比较，得到一个候选线性反馈移位寄存器比特。根据立体声极性把比特历史向前或向后推进 1 位，得到观测字。若观测字符合预期递进，有效计数加一，否则用观测字替换期望状态并清零计数。

只有连续有效转移足够多后才暴露查表位置，这就是 25 次规则。时域层并行估计速度：每个检测到的 1/4 周期贡献 1 除以 4000 秒的有符号位移，无穿越样本贡献零位移，滤波增益固定。丢失期间若距上次确认的时间在 30 毫秒内，则按上次确认位置加 1000 乘速度乘时间外推并标记未确认，否则停止并等待重锁。

**总可用性 × 确认锁定率：** 总可用性统计所有时刻是否有输出，包括显式标记为未确认的预测；确认锁定率只统计经过有效递进验证的查表输出。两者分工不同，前者回答控制是否连续，后者回答是否有新的码字证据。搭配理由是有预测能力的解码器必须同时报告两者，否则连续性会被误读为正确性；组合意义是让状态约束时域解码器的增益可以被直接度量为两者之差。

**速度估计 × 有限时域保持：** 速度估计用阿尔法贝塔滤波器从过零时刻累积有符号位移，分工是给出最近运动趋势；有限时域保持用该速度在确认丢失后外推位置，分工是桥接短间隙。搭配理由是外推必须有时长上限和转移门限约束，否则合理运动会无限延续；组合意义是形成有界预测，既提高短间隙总可用性，又保留确认标记和重新锁定机制。

### 没有训练阶段时，论文真正计算和固定的东西是什么？

本研究没有神经网络训练，也就没有梯度路径、损失优化、训练集划分或早停。需要明确说明未训练的对象是 3 个解码策略本身，它们是固定常数的因果规则系统。真正的计算发生在三处：离线 1 次性生成 95 万状态查找表，属于确定性构造而非学习；在线逐帧更新基线、包络、符号参考和速度滤波器，属于固定系数的递归估计；实验阶段按公式合成退化观测并跑解码，属于受控仿真而非数据采集训练。

冻结的参数包括基线时间常数、固定阈值、包络系数与裁剪界、脉冲门限、符号参考平均长度、锁定所需的 25 次转移、速度滤波增益、转移门限和时域上限，实验中不按条件重调。不能把参数冻结理解为输出确定，因为噪声和丢点的随机种子仍会改变输出；也不能把无训练等同于解析最优求解，它只是说明比较的是固定实现而非条件最优。复现时应先核对同一段干净波形、同一查找表和同一组常数，再谈退化下的差异。

### 用哪段信号、加哪三种破坏、按什么口径统计？

信号取商业数字黑胶波形的前 10 秒，采样率 44.1 千赫，16 比特立体声，双通道均方根幅度约为 0.3081 满刻度，峰值约为 0.4948 满刻度，2 通道不下混，同一干净片段、同一查表和同一组常数用于所有条件。操作参考由干净固定阈值解码得到，只在参考可用的索引上累积指标，避免把启动阶段无干净锁定计入，同时保留它不是独立物理真值的局限。3 种退化独立施加，不组合：白噪声按噪声均方根与干净均方根之比设置，覆盖 0 到 0.26，对应标称信噪比约 30.5 到 11.7 分贝，左右通道独立。

重复丢点把 2 通道置零若干连续采样，突发长度覆盖 0 到 256 采样，每个合格采样以固定小概率开始 1 次非重叠突发，用于测稳态中断下的行为；硬削波对每个采样每通道独立限幅，阈值覆盖 1 到 0.20 并在 0.475 到 0.30 之间以 0.025 为步长加密，用于定位公共采集边界。噪声和重复丢点各用 5 个固定种子重复，削波确定性只跑 1 次，另做单次孤立丢点实验测重获时间。每个运行记录总可用性、确认锁定率、平均绝对误差、假锁定率、稳定性和综合分，孤立丢点额外记录确认重获时间。

| 条件 | 指标 | 固定阈值 | 自适应阈值 | 时域保持 |
| --- | --- | --- | --- | --- |
| 干净片段 | 可用性与综合分 | 1.000 与 0.974 | 0.999998 附近 | 0.999998 附近 |
| 噪声比 0.06 | 确认与总可用性 | 0.868 | 0.936 | 0.981 总可用 |
| 噪声比 0.06 | 综合分 | 0.819 | 0.893 | 0.952 |

表后需要理解的是干净时三者几乎重合，固定阈值给出完全可用和零误差，自适应与时域保持仅差 0.0031 个位置单位，综合分低于 1 是因为稳定性变换本身不是归一到 1 的量。噪声过渡带才是分化点，自适应靠保住穿越时刻提升确认部分，时域保持靠标记预测提升总可用部分，两者确认证据相同。

表中综合分只是紧凑绘图变量，权重固定未优化，不能替代假锁定和重获时间的单独判断。

### 噪声把裕量变脏时，谁在保确认、谁在保连续？

先看噪声列的导读：横轴是噪声均方根与干净均方根之比，纵轴从上到下是综合分、可用性、对数平均绝对误差、假锁定率和稳定性，3 条颜色曲线分别对应 3 种策略，可用性行中实线为总可用性、虚线为确认可用性，噪声曲线带 5 次运行的均值与 1 倍标准差阴影，高噪声无输出时误差和假锁定留空。

> **看图路径：** 1. 先看三列退化条件和五行指标的布局，确认第二行实线是总可用性、虚线是确认可用性；2. 再对比噪声列在 0.06 附近固定阈值与自适应阈值的分叉，以及重复丢点列中时域保持曲线的抬升；3. 然后检查第三行对数误差和第四行假锁定在高噪声无输出时是否留空；4. 最后看硬削波列在 0.375 到 0.400 附近的陡峭公共边界

[![原论文 Figure 1：Component results for white noise (left), repeated dropout (center), and hard clipping (right).](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/c26000301c24/figure-1.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/c26000301c24/figure-1.png)

*论文图 1。原论文 Figure 1：“Component results for white noise (left), repeated dropout (center), and hard clipping (right).”。*

解释这张图要抓住 3 个对照。在 0.03 处三者仍连续且与参考一致；到 0.06 处固定阈值确认可用性掉到 0.868 左右，自适应提到 0.936 左右，综合分从 0.819 提到 0.893 左右，说明波形还在但裕量不可靠时，近期幅度缩放确实改善了穿越时刻。到同一点时域保持总可用性达 0.981 左右，确认部分仍是 0.936 左右，综合分为 0.952 左右，两者之差就是保持桥接的间隙，而非新查表证据。到 0.10 处结构大部丢失，固定阈值总可用仅 0.032 左右，自适应约 0.103 左右，时域保持约 0.286 左右且确认仍约 0.103 左右，稀疏输出的平均误差仍小于 1 个位置单位、假锁定为 0，但可用性和稳定性已崩塌，不能说解码成功。更高两档无输出，误差与假锁定按约定为未定义而非零。

**假锁定率 × 稳定性：** 假锁定率统计输出偏离操作参考超过 20 个位置单位的比例，分工是判定参考相对正确性；稳定性由相邻输出增量的标准差变换得到，分工是描述轨迹是否平滑。搭配理由是平滑的错误轨迹仍是错误，必须用假锁定纠正只看稳定性的误解；组合意义是把时间行为和正确性分开评价，避免把连续预测当成可靠证据。

| 条件 | 指标 | 固定阈值 | 自适应阈值 | 时域保持 |
| --- | --- | --- | --- | --- |
| 重复突发 32 采样 | 总可用性 | 0.449 | 0.428 | 高于确认部分 |
| 重复突发 64 采样 | 总与确认可用性 | 0.396 | 0.396 | 0.641 总可用 |
| 重复突发 256 采样 | 误差与假锁定 | 基线较低 | 基线较低 | 3.381 误差与 0.0045 假锁定 |

表后要强调的是重复置零删掉的是事件本身，自适应阈值无东西可分类，32 采样时两者总可用接近，微小差异不是固定阈值优势的证据。64 采样时时域保持总可用明显高于确认部分，但确认率不变，误差从 0.041 升到 0.851 仍远低于 20 的假锁定容限，增益是短间隙连续性。256 采样时时域保持总可用回落，因为 30 毫秒时域固定不随丢点加长，误差升到 3.381 左右并出现 0.0045 左右的非零假锁定，这是继续外推 through 长间隙的最清晰代价。

### 拿掉预测或换成单次丢点后，重获时间由谁决定？

重复突发实验把丢失、预测和反复重锁混在一起，孤立丢点实验只在片段中 5 个均匀位置插入 1 次已知突发，问的是突发结束后多久回到确认且与参考一致的状态，预测不计入确认。这个设计相当于消融时间保持的确认作用：时域保持仍提供更高的总可用性，但确认重获时间与自适应阈值逐运行相同，因为它故意不把预测当重获。导读第二张图：横轴是单次丢点长度，纵轴是确认重获时间毫秒，3 个标记分别对应 3 种策略，每个点是 5 个插入位置的均值，误差棒是 1 倍样本标准差。

> **看图路径：** 1. 先确认横轴是单次丢点长度、纵轴是到首次确认输出的时间；2. 再比较同一横坐标下固定阈值与自适应时域两条曲线的均值点是否重合或分开；3. 最后观察误差棒长度，判断插入相位带来的离散是否大于丢点长度的单调影响

[![原论文 Figure 2：Confirmed reacquisition time after one isolated dropout.](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/c26000301c24/figure-2.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/c26000301c24/figure-2.png)

*论文图 2。原论文 Figure 2：“Confirmed reacquisition time after one isolated dropout.”。*

解释可见内容时先看量级，均值约在 17 到 36 毫秒之间，标准差约 20 到 25 毫秒，插入相位带来的离散大于丢点长度的单调影响。例如 64 采样处两者均为 17.5 毫秒左右，128 采样处均为 35.2 毫秒左右。固定阈值在部分长度上均值略低，但误差棒重叠很大，不能读成系统性优势。削波列则回答另一个反证：0.375 到 0.400 满刻度之间存在三者共享的陡峭采集边界，低于边界可用性为 0，高于 0.40 后迅速回到干净平台并保持重合，说明一旦公共比特提取所需的幅度关系被破坏，后端状态策略无法恢复从未获得的绝对字， coarse 扫描曾暗示的差异只是采样过粗造成的。

### 哪些结论出不了这段 10 秒信号和这套合成破坏？

4 个局限直接约束主张。第一，干净固定阈值轨迹是操作参考，不是独立编码器日志或转盘运动实测，绝对位置精度没有建立，只能做匹配腐蚀下的相对比较。第二，只有一段 10 秒信号和一种配置，不能推广到不同唱片、唱机、速度、方向和手势，部署基准应包含多配置多速度多方向。

第三，3 种合成破坏独立测试，缺少通道不平衡、唱头与唱放响应、触针污染、沟槽磨损、哼声、脉冲碎屑、抖晃和硬件重采，更缺少组合故障，论文明确说白噪声近似决策裕量损失、重复置零近似间歇接触损失、削波近似输入增益过大，它们用于诊断解码器不同部位，不能直接预测触针磨损或抖晃。第四，综合分权重固定未做敏感性分析，它防止稀少平滑输出拿高分，但更看重避免假锁定的应用应更重视分量曲线，假锁定必须单独可见。

教学上要区分直接报告、有限解释和未验证推测：已报告的是分量均值与离散，已支持的是过渡带与短间隙下的分工，未验证的是跨硬件与跨手势的泛化。

### 要复现这组对照，先冻结什么、再跑哪几组？

复现先做三件冻结工作：取同一段前 10 秒 44.1 千赫立体声商业波形并确认双通道均方根与峰值口径，预生成同一套 95 万状态查找表并固定解码常数，包括基线时间常数、固定阈值、包络系数与裁剪界、脉冲门限、符号参考平均长度、25 次锁定、速度滤波增益、转移门限 64 个位置单位和时域上限 30 毫秒。然后按种子 1234 到 1238 跑噪声与重复丢点各 30 次，按阈值列表跑削波 15 次，按 5 个插入位置跑孤立重获 30 次，每策略共 105 次，三策略共 315 次。

指标只在干净参考可用处累积，无输出时误差与假锁定记为未定义而非零。

| 复现项 | 配置 | 取值 | 作用 | 备注 |
| --- | --- | --- | --- | --- |
| 信号 | 时长采样与电平 | 10.0 秒 44.1 千赫与 0.3081 均方根 | 固定输入口径 | 峰值 0.4948 |
| 随机 | 种子与次数 | 1234 到 1238 共 315 次 | 固定离散口径 | 削波只跑 1 次 |
| 评价 | 容限与归一 | 20 位置与 1000 位置 | 定义假锁与综合分 | 预测不计确认 |

表后要说明的是这张表不是结果表，而是可运行配置表，真正的结果表必须另含基线与可部署策略的数字对照。

开源方面只有第三方仓库当前可用，不能写权重已公开或系统开箱可运行。复现时建议先跑干净三者重合，再跑噪声 0.06 和突发 64 采样两个分化点，最后跑削波细扫确认公共边界，这样能以最少算力验证核心分工。

### 何时值得尝试自适应或有界预测，落地前还差哪项验证？

合成判断回到 3 个策略各自信任什么。固定阈值信任固定事件裕量，干净且事件分离时已足够，加结构反而无收益。自适应阈值信任近期幅度缩放的裕量，适合波形还在但裕量被噪声扰动的过渡带，一旦事件被置零删掉则与基线收敛。状态约束时域解码器额外信任有限时间的最近轨迹，适合已建立锁定后的短间隙连续，但必须暴露确认与预测标记并由下游决定未确认状态是否优于静音，有限时域不可少。

对数字黑胶落地，建议把总可用性、确认锁定率、参考相对误差、假锁定、稳定性和确认重获时间分开看，小的综合分差异让位于分量曲线。还需补的验证是独立物理位置证据、多配置多速度多方向基准，以及通道失配、唱头链路、磨损、手势与组合故障的硬件重采。教学例子是：把自适应想成在脏玻璃上更小心地找门缝，把有界预测想成闭眼沿刚才方向多走几步但手里举着未确认的牌子，门缝没了或步数超限就必须停下来重新找门。

## 📐 原文公式与排版

以下展示论文原页中的数学表达区域，保留原始上下标、分式和符号排版。区域序号仅用于本文导航，不是论文公式编号。

[![原文数学表达区域 1，PDF 第 1 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/b7b148ce40b5/figure-1.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/b7b148ce40b5/figure-1.png)

区域 1 · [查看论文原页](https://dafx26.mit.edu/assets/papers/DAFx26_paper_17.pdf#page=1)

[![原文数学表达区域 2，PDF 第 1 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/b7b148ce40b5/figure-2.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/b7b148ce40b5/figure-2.png)

区域 2 · [查看论文原页](https://dafx26.mit.edu/assets/papers/DAFx26_paper_17.pdf#page=1)

[![原文数学表达区域 3，PDF 第 2 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/b7b148ce40b5/figure-3.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/b7b148ce40b5/figure-3.png)

区域 3 · [查看论文原页](https://dafx26.mit.edu/assets/papers/DAFx26_paper_17.pdf#page=2)

[![原文数学表达区域 4，PDF 第 2 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/b7b148ce40b5/figure-4.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/b7b148ce40b5/figure-4.png)

区域 4 · [查看论文原页](https://dafx26.mit.edu/assets/papers/DAFx26_paper_17.pdf#page=2)

[![原文数学表达区域 5，PDF 第 2 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/b7b148ce40b5/figure-5.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/b7b148ce40b5/figure-5.png)

区域 5 · [查看论文原页](https://dafx26.mit.edu/assets/papers/DAFx26_paper_17.pdf#page=2)

[![原文数学表达区域 6，PDF 第 2 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/b7b148ce40b5/figure-6.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/b7b148ce40b5/figure-6.png)

区域 6 · [查看论文原页](https://dafx26.mit.edu/assets/papers/DAFx26_paper_17.pdf#page=2)

[![原文数学表达区域 7，PDF 第 3 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/b7b148ce40b5/figure-7.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/b7b148ce40b5/figure-7.png)

区域 7 · [查看论文原页](https://dafx26.mit.edu/assets/papers/DAFx26_paper_17.pdf#page=3)

[![原文数学表达区域 8，PDF 第 3 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/b7b148ce40b5/figure-8.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/b7b148ce40b5/figure-8.png)

区域 8 · [查看论文原页](https://dafx26.mit.edu/assets/papers/DAFx26_paper_17.pdf#page=3)

[![原文数学表达区域 9，PDF 第 3 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/b7b148ce40b5/figure-9.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/b7b148ce40b5/figure-9.png)

区域 9 · [查看论文原页](https://dafx26.mit.edu/assets/papers/DAFx26_paper_17.pdf#page=3)

[![原文数学表达区域 10，PDF 第 3 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/b7b148ce40b5/figure-10.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/b7b148ce40b5/figure-10.png)

区域 10 · [查看论文原页](https://dafx26.mit.edu/assets/papers/DAFx26_paper_17.pdf#page=3)

[![原文数学表达区域 11，PDF 第 3 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/b7b148ce40b5/figure-11.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/b7b148ce40b5/figure-11.png)

区域 11 · [查看论文原页](https://dafx26.mit.edu/assets/papers/DAFx26_paper_17.pdf#page=3)

[![原文数学表达区域 12，PDF 第 3 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/b7b148ce40b5/figure-12.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/b7b148ce40b5/figure-12.png)

区域 12 · [查看论文原页](https://dafx26.mit.edu/assets/papers/DAFx26_paper_17.pdf#page=3)

[![原文数学表达区域 13，PDF 第 4 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/b7b148ce40b5/figure-13.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/b7b148ce40b5/figure-13.png)

区域 13 · [查看论文原页](https://dafx26.mit.edu/assets/papers/DAFx26_paper_17.pdf#page=4)

[![原文数学表达区域 14，PDF 第 4 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/b7b148ce40b5/figure-14.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/b7b148ce40b5/figure-14.png)

区域 14 · [查看论文原页](https://dafx26.mit.edu/assets/papers/DAFx26_paper_17.pdf#page=4)

[![原文数学表达区域 15，PDF 第 4 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/b7b148ce40b5/figure-15.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/b7b148ce40b5/figure-15.png)

区域 15 · [查看论文原页](https://dafx26.mit.edu/assets/papers/DAFx26_paper_17.pdf#page=4)

[![原文数学表达区域 16，PDF 第 4 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/b7b148ce40b5/figure-16.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/b7b148ce40b5/figure-16.png)

区域 16 · [查看论文原页](https://dafx26.mit.edu/assets/papers/DAFx26_paper_17.pdf#page=4)

另有 37 个候选区域因边界不明确或图片数量、尺寸限制未展开；请[查看完整论文](https://dafx26.mit.edu/assets/papers/DAFx26_paper_17.pdf)中的原始排版。

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。
- 评分规则：type-aware-v1
- 评分模型：muse-spark-1.3-contributor
- 评分请求协议：openai_responses

---

[← 返回 dafx-2026 论文汇总](/posts/conference-dafx-2026/)
