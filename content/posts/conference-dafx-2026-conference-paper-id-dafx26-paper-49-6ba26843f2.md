---
title: "Alias-Free Oscillator Synchronization via Additive Synthesis"
date: 2026-09-13
draft: false
description: "针对硬同步直接重置相位会产生不连续和高频混叠的问题，论文用有限傅里叶系数经线性频谱重采样再做加法合成实现带限同步，并以 96 kHz 单音色 ASIC 在约 5 个音频采样内完成变换为代价换取实时性。"
tags: ["信号处理", "实时处理", "音乐", "音乐生成"]
categories: ["dafx-2026 论文"]
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_paper_id: "conference:dafx:2026:conference-paper-id:DAFx26_paper_49"
paper_digest_source_kind: conference
paper_digest_conference_id: "dafx-2026"
paper_digest_conference_record_url: "https://dafx26.mit.edu/program/"
paper_digest_conference_pdf_url: "https://dafx26.mit.edu/assets/papers/DAFx26_paper_49.pdf"
paper_digest_api_reader_contract: "beginner-researcher-v3"
paper_digest_api_reader_article_sha256: "9e261162683428309a8dbeaeadbccfdf9fbd3cb6386e0da3454aada632c31ed0"
paper_digest_api_reader_plan_sha256: "53255457146c209bbc4c16e2d08bdb1bf55e75acad645bc027384b337e974280"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings-v4"
paper_digest_api_reader_source_bindings_sha256: "545412a6e7c2e24f4a85f67f0ec348a6b90109b9e83c25788c3f97e33b5e31d3"
paper_digest_api_reader_source_table_count: 3
paper_digest_api_reader_source_formula_count: 0
paper_digest_api_reader_structured_artifacts_sha256: "d91bc7b018b1a74ba92bc4f09fa84b6aedc9555276a75faffaad404a9c85d35f"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity-v1"
paper_digest_api_reader_author_identity_sha256: "35a9729d54ff3016a5aa0ca0e433d9be56fd71d856c5ab50f64776d5533b68b5"
paper_digest_api_reader_author_count: 4
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity-v1"
paper_digest_api_reader_resource_identity_sha256: "56ab9e00195f5bc64fd15834f9114521f26d78da457427a03fcc832d6a5fe623"
paper_digest_api_reader_resource_count: 1
paper_digest_api_reader_decision_projection: "api-reader-decision-projection-v2"
paper_digest_scoring_contract: "api-scoring-audit-v2"
paper_digest_taxonomy_contract: "paper-taxonomy-flat-tags-compat-v1"
paper_digest_taxonomy_selection_contract: "paper-taxonomy-selection-v1"
paper_digest_taxonomy_registry_version: "paper-taxonomy-v1"
paper_digest_taxonomy_registry_sha256: "15c82a567ce5a55dc1175684ed08b64c158558639d9c8fb822c9587ec32a8778"
paper_digest_taxonomy_concepts: [{"facet":"method","id":"method.signal-processing","label":"信号处理"},{"facet":"setting","id":"setting.real-time","label":"实时处理"},{"facet":"signal","id":"signal.music","label":"音乐"},{"facet":"task","id":"task.music-generation","label":"音乐生成"}]
paper_digest_primary_task: "音乐生成"
paper_digest_primary_method: "信号处理"
paper_digest_score: 7.0
paper_digest_rank_bucket: "前50%"
paper_digest_document_type: "方法研究"
paper_digest_conference_structure: replayable-pdf-layout-v1
---

# 📄 把同步后的波形算成频谱搬移：加法合成做无混叠振荡器同步

> 英文题目：*Alias-Free Oscillator Synchronization via Additive Synthesis*

> 会议身份：`conference:dafx:2026:conference-paper-id:DAFx26_paper_49`


> ✅ 来源为官方会议 PDF；表格与 Figure 按原文证据绑定。PDF 公式以原页区域图片展示，未冒称作者原始 TeX。

> 会议来源：[官方记录](https://dafx26.mit.edu/program/) · [官方 PDF](https://dafx26.mit.edu/assets/papers/DAFx26_paper_49.pdf)

标签：#信号处理 #实时处理 #音乐 #音乐生成

评分：**7.0/10** | 创新 1.2/2 | 技术严谨 1.0/1.5 | 实验充分 0.8/1.5 | 清晰度 0.7/1 | 影响力 0.8/1.5 | 开源 1.0/1.5 | 可复现 0.3/0.5 | 工程/实践 1.2/1.5

排名：前50% | 文档类型：方法研究

## 👥 作者与机构

- Jonas Roth：机构信息未能从会议 PDF 纯文本可靠映射
- Domenic Keller：机构信息未能从会议 PDF 纯文本可靠映射
- Oscar Castañeda：机构信息未能从会议 PDF 纯文本可靠映射
- Christoph Studer：机构信息未能从会议 PDF 纯文本可靠映射

## 📌 核心摘要

振荡器同步的输入为已带限跟随波形的有限傅里叶系数与周期比P，输出为同步后带限波形的傅里叶系数与96kHz时域音频，直接时域硬复位的不连续点会产生严重混叠，难点在于不修复时域缺口而直接求理想同步波形的带限表示。方法链第一步为预旋转，将跟随波形时移至对称积分窗并按公式旋转复系数与实部虚部，为变周期积分做对齐，其输出系数直接进入第二步。第二步为谱重采样，以sinc核与versinc核的线性P求和映射将跟随周期上的系数变换到主导周期或二倍主导周期上，分别得到硬同步、镜像同步与脉冲同步的系数，其输出系数直接进入第三步。第三步为加法合成，仅累加奈奎斯特频率以下谐波并经I2S输出，复用同一重采样引擎与同一振荡器实现三种模式。在软件基准测试设置下，锯齿波谱变换高负载的计算量指标为5.8ms，高于锯齿波谱变换低负载的计算量指标2.7ms。与已有方法仅做硬复位或依赖波表预滤波不同，该路线以显式谱变换代替时域复位，故支持任意周期波形与反射、静音等复位变体。其适用边界是输入必须已带限且P<1时依赖缺失高次系数会导致精度下滑，整数P对应简单谐波重映射而精度较高。硬件上专用电路为TSMC65nm工艺6mm2单声道设计，N由1024降至512并以24位数据通路运行，时钟满足fclk为2048倍音频采样率以支撑96kHz实时合成且延迟低于五个音频采样。

## 🔗 开源与复现资源

- 代码相关资源：<https://github.com/IIP-Group/hasy-python> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 输入是什么，目标是什么：先把同步这件事说清楚

这篇论文的输入是一个已经带限的自由运行跟随波形，用有限个傅里叶级数系数表示。目标是算出经过振荡器同步之后仍然带限的周期波形，再用加法合成生成时域采样。必须保留的信息包括周期比、3 种同步模式的定义，以及系数变换与奈奎斯特截断的配合关系。

白话说，振荡器同步就是两个振荡器配合发声。主导振荡器好比节拍器，每走完一圈就喊停；跟随振荡器好比演奏者，被喊停就从头再拉。传统硬同步每次重起都可能把波形拦腰截断，截口就是不连续。不连续意味着极高频率，数字采样时这些高频会折叠成难听的混叠。

**主导振荡器 × 跟随振荡器：** 主导振荡器只负责给出同步周期和复位时刻，不决定音色细节；跟随振荡器提供被截断重起的周期波形，决定谐波原料。二者搭配的理由是复位时刻切断跟随波形会产生新的不连续和额外高频，组合意义是同步音色由周期比和复位瞬间跟随波形的幅度共同决定。

学习时先抓住一条主线：样本进来先表示成系数，再经过变换得到新系数，最后按新周期合成输出。后续所有公式和硬件都是为这条线服务的，区别只是截断、反射还是静音 3 种取段规则。

### 已有路线如何处理不连续带来的混叠

论文把已有路线分成 3 类。第一类是通用抗混叠技巧，例如针对锯齿方波三角波的带限冲激序列，以及为硬同步引入的带限阶跃思路。还有用分数延迟滤波器降低实现代价的改进，这类方法对特定经典波形有效。

第二类是针对正弦同步或锯齿同步的专用解析方法，例如对同步正弦加抗混叠有限冲激响应滤波。或从解析傅里叶级数推同步锯齿的高效实现，它们在各自波形上可以做得很高效。但同样缺乏同步任意周期波形的灵活性，换波形就要重推。

第 3 类是加法合成、波表和快速傅里叶逆变换合成。加法合成能天然带限任意周期波形，但软件实现常被认为太贵。波表需要为不同基频预滤波存储，逆变换合成适合离线或块处理。论文选择加法合成路线，并补上缺失的一块：描述同步后波形的频谱变换。执行顺序上先由跟随系数经谱重采样得到同步系数，再按主导周期做奈奎斯特截断合成；比较时应按相同波形与相同周期比对照，否则专用解析方法在特定波形上的高效结论不可直接迁移到任意波形。

### 为什么直接重置相位一定会惹出高频

问题可以沿一个正弦跟随波形走一遍。自由运行时正弦是光滑连续的，频谱只有基频。当主导振荡器走完一圈，跟随正弦可能正处在非零值。直接把它拉回起点就会出现垂直跳变，这个跳变需要很多高次谐波才能表示。

下面这张示意图用两种频率比展示了同一机制，值得停留看清截断位置如何随比例变化。

> **看图路径：** 1. 先看最上一行自由运行的正弦波，确认它是连续无截断的输入波形；2. 再看中下两行青色同步波在灰色主导锯齿上升沿处被强制重起；3. 比较两种频率比下重起点切在正弦不同相位，观察截断缺口大小不同

[![原论文 Figure 1：Illustration for hard sync with a sine wave for the following-oscillator waveform.](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/198d585b8214/figure-1.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/198d585b8214/figure-1.png)

*论文图 1。原论文 Figure 1：“Illustration for hard sync with a sine wave for the following-oscillator waveform.”。*

从图中可以看到，自由运行波形连续，而同步波形在主导上升沿处被打断重起。频率比不同时，打断点切在正弦的不同相位，缺口高度也不同。这解释了同步音色为何随比例连续变化，也解释了镜像同步要改动复位规则。

论文把主导波形画成锯齿只是沿用模拟合成器以上升沿触发的习惯。概念上主导波形形状并不重要，重要的是复位时刻本身。

### 全景：系数进来，系数变换，加法合成出去

方法全景分 3 步。第一步是预旋转，论文把周期归一化为跟随周期为 1、主导周期为 P。为了用对称区间做傅里叶积分，先把跟随波形平移半个主导周期。在系数域这一步就是每个系数乘一个相位因子，实部虚部用旋转矩阵实现。

第二步是频谱重采样，把平移后的波形在新周期上重新做傅里叶分析。数学上它是线性变换，输入输出各有同样多系数，核函数是辛格函数及其变体。第 3 步是加法合成，只累加频率低于采样率 1 半的谐波，输出即无混叠。

**频谱重采样 × 加法合成：** 频谱重采样的分工是把跟随波形的有限个傅里叶系数线性映射为同步后周期的系数，解决截断波形的带限表示问题；加法合成的分工是只累加奈奎斯特频率以下的谐波分量生成时域采样，解决采样时不再引入混叠的问题。二者搭配的原因是前者给出正确的带限系数，后者忠实执行这些系数，组合后任意周期波形都能走同一流程得到无混叠输出。

下图把预旋转为何必要讲得很直观，建议先看浅色同步区间再看平移后的波形对齐方式。

> **看图路径：** 1. 先看上一行浅色阴影标出的同步区间，确认它只取跟随波形的一段内容；2. 再看下一行虚线平移后波形与实线同步波在区间内的重合关系；3. 注意横轴标记的对称区间端点，理解为何要先做时间平移操作

[![原论文 Figure 2：Illustration of the time shift operation with a sine wave as following-oscillator waveform and P…](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/198d585b8214/figure-2.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/198d585b8214/figure-2.png)

*论文图 2。原论文 Figure 2：“Illustration of the time shift operation with a sine wave as following-oscillator waveform and P = 0.75.”。*

上图浅色阴影是希望保留的同步区间，下图虚线是平移后的跟随波形。实线是截取该区间后以新周期延拓的同步波形，可以看到对称积分窗口恰好落在正负二分之 P 处。论文提醒输出因此带有一个整体时间平移，实现中直接忽略该平移。

### 三种同步模式各自如何取段和变换

硬同步的变换是对平移后波形在对称区间上做新周期的傅里叶系数。输入第 k 个系数对输出第 n 个系数的贡献与核在相应位置的取值成正比。论文进一步把复系数变换写成实系数形式，避免先算复数再转换。

**硬同步 × 镜像同步：** 硬同步的分工是到主导周期边界就把跟随波形从头重起，保留尖锐截断；镜像同步的分工是到边界把跟随波形反射延续，构成偶对称的双倍周期。搭配理由是同一频谱重采样框架只需换积分区间和基函数就能得到另一组变换，组合意义是保留同一硬件流水的同时提供更柔和的备选音色。

镜像同步把一个主导周期内的正向波形和下一个周期内的反向波形拼成双倍周期。推导同样先做预旋转，只是在双倍周期上分析系数。结果除了辛格函数还出现余弦变体，且正弦系数因偶对称而为零。

**预旋转 × 对称积分区间：** 预旋转的分工是把跟随波形在时间上平移，使其起点对齐主导周期起点；对称积分区间的分工是把傅里叶分析窗口取为以零为中心的区间以简化推导。搭配理由是平移在系数域恰好对应相位旋转，组合意义是后续重采样积分可以用统一的对称限写出，避免每次为不同起始相位重推公式。

脉冲串同步在每个主导周期内只保留一段跟随波形，其余时间置零。推导假设输入无直流以简化表达式，同样先做相应平移再变换。论文指出公式形式上可延拓到重叠情形，但留待未来分析。

**脉冲串同步 × 脉冲串合成：** 脉冲串同步的分工是在每个主导周期内只保留一段跟随波形、其余时间静音；脉冲串合成的分工是用矩形窗截取一段波形作为发声单元。搭配理由是两者在数学上都是加窗截取，组合意义是同一套系数变换思想可以直接描述这种静音间隔的同步模式，并自然联系到已有的脉冲串合成文献。

硬件视角下三者的相似性比差异更重要，它们都是预旋转加带除法的求和再加权累加。下图展示了这种左右分工的架构，左侧做变换过程，右侧做合成输出。

> **看图路径：** 1. 先沿左侧蓝色频谱重采样路径看系数存储到预处理再到列处理的流向；2. 再看右侧粉色加法合成路径中系数存储到相位累加和正余弦计算的流向；3. 注意左右两侧共用的三角函数计算模块，理解硬件复用的具体位置

[![原论文 Figure 5：Architecture overview of the HASY ASIC with spectral- resampling engine and additive-synthesis…](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/198d585b8214/figure-5.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/198d585b8214/figure-5.png)

*论文图 5。原论文 Figure 5：“Architecture overview of the HASY ASIC with spectral- resampling engine and additive-synthesis oscillator. Gray elements are user-configurable.”。*

左侧蓝色区域是频谱重采样引擎，从上到下依次是系数存储、预处理器和列处理器。预处理器负责旋转和三角函数值计算，列处理器负责除法与乘加。右侧粉色区域是加法合成振荡器，包括合成系数存储、相位累加和共用的三角函数计算。灰色为可配置项，虚线表示三角函数模块在两侧分时复用。

### 没有训练阶段时，真正的计算和参数是什么

本研究没有神经网络训练阶段，也就没有梯度、损失和优化器的划分。真实计算是确定性的数值变换与合成，给定跟随波形系数和周期比后按闭式求和计算。不存在从数据学习参数的过程，也不能把参数固定理解为输出确定。

所谓可配置参数是声音参数，包括跟随波形系数、周期比和主导基频。论文假设输入直流为零，认为音频信号通常无直流成分。数值实现上有两处近似需要记住，一是分母很小时改用泰勒展开。二是硬件数据通路为定点有限字长，与浮点参考之间会有量化差异。

评估中用位真定点黄金模型对照硬件，用浮点软件实现对照算法本身。两者的分工不同，前者检验实现忠实度，后者检验算法相对理想的差距。复现时应先固定跟随系数与周期比再切换精度路径，并同时记住输入无直流与分母极小处近似的约定，否则同样的信噪失真比数值也不具备可比性，执行顺序错位也会掩盖定点与算法本身各自的误差来源。

### 测什么，和谁比，在什么条件下比

评估只针对硬同步模式，镜像与脉冲串只做波形示例。测量对象是 1 秒长的输出采样，比较三方：定点黄金模型、浮点参考实现和解析参考。前者检验硬件定点实现是否忠实，后者检验算法本身相对理想带限的差距。

指标是时域信噪失真比，数值越大表示越接近参考。主扫描固定主导频率，改变周期比和跟随波形，几乎用满可用谐波。另有两个跨文献的定点示例沿用前人报告的频率组合，用于直观展示时频行为。

公平条件需要说清：浮点与定点用同样谐波数和同样变换，区别只在数值精度。解析参考从理想同步出发，天然包含输入带限假设之外的差异。复现时应先对齐谐波数、主导频率与周期比，否则同样数值不可比。

下表把评估设置收拢为可核对的行，便于复述时逐项对照比较条件和指标方向。

| 条件 | 指标 | 基线 | 本方法 | 比较对象 |
| --- | --- | --- | --- | --- |
| 1 s 输出对应 96 000 采样，多波形多 P | SINAD | 浮点参考 | 定点黄金模型 | 解析理想参考 |
| 主导频率 94 Hz，奈奎斯特下 510 谐波 | SINAD | 浮点参考 | 几乎用满谐波 | 解析理想参考 |
| 跟随频率高于主导频率 | SINAD 高于 41 dB | 浮点参考 | 定点实现达标 | 解析理想参考 |
| 单振荡器至多 512 谐波，96 kHz 24 bit | 可运行性 | 浮点软件 | 硬件实时合成 | 解析合成 |

表后需要强调代价与边界，该设置刻意让谐波预算接近上限。因此 P 较小时输入高次系数缺失的影响会被放大，主导频率升高后会减轻。解析参考的差距包含理想假设差异，不应解读为硬件故障。

### 主结果：精度随周期比如何变化，硬件是否跟上

时频示例显示，正弦与锯齿硬同步的时域截断清晰，频谱呈谐波梳状。频谱在奈奎斯特内被截断且本底很低，支持带限合成压住了折叠混叠。定量曲线显示周期比为整数时精度高，因为变换退化为谐波重映射。

周期比小于 1 时精度下降，因为同步系数依赖输入的高次系数。波形越丰富下降越明显，正弦最轻而锯齿最重。论文报告当跟随频率高于主导频率时，实现相对双基线的信噪失真比高于 41 dB。

下面这张随周期比变化的精度曲线是核心证据，读数前先确认横纵坐标与图例再看趋势走向。

> **看图路径：** 1. 先确认横轴为周期比纵轴为信噪失真比，数值越大表示越接近参考信号；2. 再区分实心与空心符号分别对应浮点参考与解析理想参考的含义；3. 比较正弦三角形锯齿三组符号随周期比变小的下降速度差异

[![原论文 Figure 11：SINAD versus P for hard sync of three different following-oscillator waveforms at flead = 94 Hz.](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/198d585b8214/figure-11.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/198d585b8214/figure-11.png)

*论文图 11。原论文 Figure 11：“SINAD versus P for hard sync of three different following-oscillator waveforms at flead = 94 Hz.”。*

从像素可见纵轴为信噪失真比，横轴为周期比，实心符号整体更高。空心符号相对解析参考更低且离散更大，说明定点实现接近算法本身。随横轴增大 3 组波形的实心曲线先升后平，整数处的孤立高点不能推广为全程精度。

硬件侧变换与合成在目标时钟下可在数个音频采样内完成。参数更新率达到音频级，允许调制主导频率，实测最高时钟超过支撑目标采样率所需的频率。面积代价几乎全在重采样引擎，合成器只占很小部分。

下表把可重放的实时性数字收拢，表中周期数与时间越小越好，时钟越高余量越大。

| 条件 | 指标 | 参考要求 | 本方法实测 | 比较对象 |
| --- | --- | --- | --- | --- |
| 32 路并行，N 为 512 谐波 | 变换周期 8 240 时钟周期 | 与同步模式无关 | 单次变换完成 | 并行架构 |
| 96 kHz 音频采样 | 变换耗时约 42 μs | 略超 4 个音频采样周期 | 每 5 音频采样可更新 | 实时约束 |
| 参数更新率约 19.2 kHz | 可调制性 | 支持主导频率调制 | 高速更新 | 软件数毫秒量级 |
| 时钟 200 MHz 功耗 242 mW，最高 250 MHz | 余量 | 需求 196.6 MHz | 实测达标 | 前代芯片 |
| 时钟为采样率 2048 倍 | 同步关系 | 固定倍数 | 目标 96 kHz 支撑 | 系统时钟 |

表后要同时讲收益与代价，收益是软件需数毫秒的变换被压缩到数十微秒。代价是专用电路面积与功耗，以及定点近似带来的误差。反例是调制过快仍可能在每次重算系数时引入伪像，不能理解为任意调制都无失真。

### 反证与边界：何时变差，差在哪里

论文的反证不是去掉某个模块，而是扫参数暴露假设边界。第一个边界是输入带限假设，当 P 小于 1 时同步能量来自高次系数。第二个边界是整数比的特殊性，整数对应简单重映射，精度虚高。

第三个边界是频率配置，主导频率较高时带内谐波数减少。小 P 处的下降会缓和，这说明同一 P 下的结论随主导频率而变。相关性不等于因果，还需结合波形与频率一起判断。

下表把这些边界组织为条件对照，表中信噪失真比越高越好，机制列解释升降来源。

| 条件 | 指标 | 高精度情形 | 低精度情形 | 机制解释 |
| --- | --- | --- | --- | --- |
| P 为整数 | SINAD 高 | 谐波重映射 | 非整数需插值 | 核函数退化 |
| P 小于 1 | SINAD 下降 | 高主导频率缓解 | 低主导频率加重 | 高次系数缺失 |
| 输入仅已有谐波可变换 | 带限约束 | 正弦影响小 | 锯齿影响大 | 谐波丰富度 |
| 快速调制主导周期 | 可能再混叠 | 慢变可接受 | 快变每次重算引入伪像 | 更新瞬态 |

表后必须点出未胜出项与未评测边界，未胜出的是 P 小于 1 的锯齿低点。未评测的是 P 小于 1 的脉冲串重叠情形，论文明确留待未来工作。镜像变换的软件耗时差异也不能当成硬件优劣的证据。

### 局限：带限假设与芯片缺陷如何影响结论

第一个局限是方法层面的，重采样只能变换输入系数中已有的谐波。当同步需要那些高频时，输出与理想带限的差距是原理性的。增加输出谐波数不能解决，必须增加输入谐波数或更换输入波形。

第二个局限是实现层面的，当前芯片控制逻辑部分存在逃逸验证的错误。实测只在可工作的硬同步模式下完成，镜像与脉冲串依赖黄金模型。面积与功耗的比较也只在特定工艺与电压温度下成立。

第三个局限是评估层面的，定量评估集中在硬同步，软同步只有波形示例。快速调制下的伪像只有定性提醒，没有系统扫参。因此论文直接报告的是静态或慢变周期比下的精度与实时性。

### 复现先做什么，需要哪些信息条件

复现应分软件与硬件两条线，软件线先从公开代码仓库出发。当前资源状态显示代码可用，可以获取参考实现与音频示例。先复现硬同步的系数变换与加法合成，再对齐谐波数和采样率。

关键超参数是谐波数 512、采样率 96 kHz 和输出分辨率 24 bit。注意直流置零、预旋转量与奈奎斯特截断必须与原文一致，否则波形平移或频谱缩放都会污染比较。硬件线以论文的架构描述与测量条件为准，包括列处理器与除法器处理。

复现硬件结论时区分代码开源与芯片可运行，代码可运行不等于芯片可购买。若只做算法复现，位真定点模型是更实际的对照。它能分离算法误差与定点误差，避免把两类差距混为一谈。

### 何时值得尝试，一句话收束

当需要同步任意周期波形且必须保证带限实时输出时，这套路线值得尝试。尤其适合愿意用专用硬件换取更新率的场景，此时软件计算开销难以满足调制需求。当输入波形谐波丰富且周期比远小于 1 时要谨慎，因为输入带限会成为瓶颈。

此时应先增加输入谐波或避开极小周期比，需要快速调制时更要试听。收束为可复述的方法句：把跟随波形表示为有限傅里叶系数，经平移对齐后映射为新周期系数。再只合成奈奎斯特以下的谐波，3 种模式只是取段规则不同。

## 📐 原文公式与排版

以下展示论文原页中的数学表达区域，保留原始上下标、分式和符号排版。区域序号仅用于本文导航，不是论文公式编号。

[![原文数学表达区域 1，PDF 第 2 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/6b89eba075e4/figure-1.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/6b89eba075e4/figure-1.png)

区域 1 · [查看论文原页](https://dafx26.mit.edu/assets/papers/DAFx26_paper_49.pdf#page=2)

[![原文数学表达区域 2，PDF 第 3 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/6b89eba075e4/figure-2.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/6b89eba075e4/figure-2.png)

区域 2 · [查看论文原页](https://dafx26.mit.edu/assets/papers/DAFx26_paper_49.pdf#page=3)

[![原文数学表达区域 3，PDF 第 3 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/6b89eba075e4/figure-3.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/6b89eba075e4/figure-3.png)

区域 3 · [查看论文原页](https://dafx26.mit.edu/assets/papers/DAFx26_paper_49.pdf#page=3)

[![原文数学表达区域 4，PDF 第 3 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/6b89eba075e4/figure-4.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/6b89eba075e4/figure-4.png)

区域 4 · [查看论文原页](https://dafx26.mit.edu/assets/papers/DAFx26_paper_49.pdf#page=3)

[![原文数学表达区域 5，PDF 第 3 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/6b89eba075e4/figure-5.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/6b89eba075e4/figure-5.png)

区域 5 · [查看论文原页](https://dafx26.mit.edu/assets/papers/DAFx26_paper_49.pdf#page=3)

[![原文数学表达区域 6，PDF 第 3 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/6b89eba075e4/figure-6.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/6b89eba075e4/figure-6.png)

区域 6 · [查看论文原页](https://dafx26.mit.edu/assets/papers/DAFx26_paper_49.pdf#page=3)

[![原文数学表达区域 7，PDF 第 3 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/6b89eba075e4/figure-7.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/6b89eba075e4/figure-7.png)

区域 7 · [查看论文原页](https://dafx26.mit.edu/assets/papers/DAFx26_paper_49.pdf#page=3)

[![原文数学表达区域 8，PDF 第 3 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/6b89eba075e4/figure-8.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/6b89eba075e4/figure-8.png)

区域 8 · [查看论文原页](https://dafx26.mit.edu/assets/papers/DAFx26_paper_49.pdf#page=3)

[![原文数学表达区域 9，PDF 第 3 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/6b89eba075e4/figure-9.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/6b89eba075e4/figure-9.png)

区域 9 · [查看论文原页](https://dafx26.mit.edu/assets/papers/DAFx26_paper_49.pdf#page=3)

[![原文数学表达区域 10，PDF 第 3 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/6b89eba075e4/figure-10.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/6b89eba075e4/figure-10.png)

区域 10 · [查看论文原页](https://dafx26.mit.edu/assets/papers/DAFx26_paper_49.pdf#page=3)

[![原文数学表达区域 11，PDF 第 3 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/6b89eba075e4/figure-11.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/6b89eba075e4/figure-11.png)

区域 11 · [查看论文原页](https://dafx26.mit.edu/assets/papers/DAFx26_paper_49.pdf#page=3)

[![原文数学表达区域 12，PDF 第 3 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/6b89eba075e4/figure-12.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/6b89eba075e4/figure-12.png)

区域 12 · [查看论文原页](https://dafx26.mit.edu/assets/papers/DAFx26_paper_49.pdf#page=3)

[![原文数学表达区域 13，PDF 第 3 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/6b89eba075e4/figure-13.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/6b89eba075e4/figure-13.png)

区域 13 · [查看论文原页](https://dafx26.mit.edu/assets/papers/DAFx26_paper_49.pdf#page=3)

[![原文数学表达区域 14，PDF 第 3 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/6b89eba075e4/figure-14.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/6b89eba075e4/figure-14.png)

区域 14 · [查看论文原页](https://dafx26.mit.edu/assets/papers/DAFx26_paper_49.pdf#page=3)

[![原文数学表达区域 15，PDF 第 3 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/6b89eba075e4/figure-15.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/6b89eba075e4/figure-15.png)

区域 15 · [查看论文原页](https://dafx26.mit.edu/assets/papers/DAFx26_paper_49.pdf#page=3)

[![原文数学表达区域 16，PDF 第 3 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/6b89eba075e4/figure-16.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/6b89eba075e4/figure-16.png)

区域 16 · [查看论文原页](https://dafx26.mit.edu/assets/papers/DAFx26_paper_49.pdf#page=3)

[![原文数学表达区域 17，PDF 第 3 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/6b89eba075e4/figure-17.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/6b89eba075e4/figure-17.png)

区域 17 · [查看论文原页](https://dafx26.mit.edu/assets/papers/DAFx26_paper_49.pdf#page=3)

[![原文数学表达区域 18，PDF 第 3 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/6b89eba075e4/figure-18.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/6b89eba075e4/figure-18.png)

区域 18 · [查看论文原页](https://dafx26.mit.edu/assets/papers/DAFx26_paper_49.pdf#page=3)

[![原文数学表达区域 19，PDF 第 3 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/6b89eba075e4/figure-19.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/6b89eba075e4/figure-19.png)

区域 19 · [查看论文原页](https://dafx26.mit.edu/assets/papers/DAFx26_paper_49.pdf#page=3)

[![原文数学表达区域 20，PDF 第 3 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/6b89eba075e4/figure-20.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/6b89eba075e4/figure-20.png)

区域 20 · [查看论文原页](https://dafx26.mit.edu/assets/papers/DAFx26_paper_49.pdf#page=3)

[![原文数学表达区域 21，PDF 第 4 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/6b89eba075e4/figure-21.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/6b89eba075e4/figure-21.png)

区域 21 · [查看论文原页](https://dafx26.mit.edu/assets/papers/DAFx26_paper_49.pdf#page=4)

[![原文数学表达区域 22，PDF 第 4 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/6b89eba075e4/figure-22.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/6b89eba075e4/figure-22.png)

区域 22 · [查看论文原页](https://dafx26.mit.edu/assets/papers/DAFx26_paper_49.pdf#page=4)

[![原文数学表达区域 23，PDF 第 4 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/6b89eba075e4/figure-23.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/6b89eba075e4/figure-23.png)

区域 23 · [查看论文原页](https://dafx26.mit.edu/assets/papers/DAFx26_paper_49.pdf#page=4)

[![原文数学表达区域 24，PDF 第 4 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/6b89eba075e4/figure-24.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/6b89eba075e4/figure-24.png)

区域 24 · [查看论文原页](https://dafx26.mit.edu/assets/papers/DAFx26_paper_49.pdf#page=4)

[![原文数学表达区域 25，PDF 第 4 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/6b89eba075e4/figure-25.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/6b89eba075e4/figure-25.png)

区域 25 · [查看论文原页](https://dafx26.mit.edu/assets/papers/DAFx26_paper_49.pdf#page=4)

[![原文数学表达区域 26，PDF 第 4 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/6b89eba075e4/figure-26.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/6b89eba075e4/figure-26.png)

区域 26 · [查看论文原页](https://dafx26.mit.edu/assets/papers/DAFx26_paper_49.pdf#page=4)

[![原文数学表达区域 27，PDF 第 4 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/6b89eba075e4/figure-27.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/6b89eba075e4/figure-27.png)

区域 27 · [查看论文原页](https://dafx26.mit.edu/assets/papers/DAFx26_paper_49.pdf#page=4)

[![原文数学表达区域 28，PDF 第 4 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/6b89eba075e4/figure-28.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/6b89eba075e4/figure-28.png)

区域 28 · [查看论文原页](https://dafx26.mit.edu/assets/papers/DAFx26_paper_49.pdf#page=4)

[![原文数学表达区域 29，PDF 第 4 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/6b89eba075e4/figure-29.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/6b89eba075e4/figure-29.png)

区域 29 · [查看论文原页](https://dafx26.mit.edu/assets/papers/DAFx26_paper_49.pdf#page=4)

[![原文数学表达区域 30，PDF 第 4 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/6b89eba075e4/figure-30.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/6b89eba075e4/figure-30.png)

区域 30 · [查看论文原页](https://dafx26.mit.edu/assets/papers/DAFx26_paper_49.pdf#page=4)

[![原文数学表达区域 31，PDF 第 4 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/6b89eba075e4/figure-31.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/6b89eba075e4/figure-31.png)

区域 31 · [查看论文原页](https://dafx26.mit.edu/assets/papers/DAFx26_paper_49.pdf#page=4)

[![原文数学表达区域 32，PDF 第 7 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/6b89eba075e4/figure-32.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/6b89eba075e4/figure-32.png)

区域 32 · [查看论文原页](https://dafx26.mit.edu/assets/papers/DAFx26_paper_49.pdf#page=7)

另有 68 个候选区域因边界不明确或图片数量、尺寸限制未展开；请[查看完整论文](https://dafx26.mit.edu/assets/papers/DAFx26_paper_49.pdf)中的原始排版。

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。
- 评分规则：type-aware-v1
- 评分模型：muse-spark-1.3-contributor
- 评分请求协议：openai_responses

---

[← 返回 dafx-2026 论文汇总](/posts/conference-dafx-2026/)
