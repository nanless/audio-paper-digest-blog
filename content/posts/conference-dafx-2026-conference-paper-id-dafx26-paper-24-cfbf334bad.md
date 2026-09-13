---
title: "Explicit Wave Digital Model of the Fulltone OCD Pedal Based on Canonical Piecewise-Linear Functions"
date: 2026-09-13
draft: false
description: "针对 Fulltone OCD v2 中 MOSFET 加锗二极管构成的非对称削波级难以实时求解的问题，论文把三个非线性合并为单个等效一端口并用分段线性函数显式映射，在 1 V、1 kHz 正弦和 96 kHz 采样下时域误差低至千分之量级，而显式方法实时比 0.14 约为迭代方法 3.12 的二十二分之一。"
tags: ["信号处理", "高效推理", "实时处理", "音乐", "音频生成"]
categories: ["dafx-2026 论文"]
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_paper_id: "conference:dafx:2026:conference-paper-id:DAFx26_paper_24"
paper_digest_source_kind: conference
paper_digest_conference_id: "dafx-2026"
paper_digest_conference_record_url: "https://dafx26.mit.edu/program/"
paper_digest_conference_pdf_url: "https://dafx26.mit.edu/assets/papers/DAFx26_paper_24.pdf"
paper_digest_api_reader_contract: "beginner-researcher-v3"
paper_digest_api_reader_article_sha256: "a88ed10afdcad2a2a3b762e7d9763f9349f9227d7eb9883a6d17e966ab0b1983"
paper_digest_api_reader_plan_sha256: "f8b8cf0a0186eca9c8718c8b3e2f85ca0ca227f3bad069de0980dc8ce9006b50"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings-v4"
paper_digest_api_reader_source_bindings_sha256: "6947cedb3419a54b1da26c8073eeff05dc25b85572d0844cc1aa64d0c897c927"
paper_digest_api_reader_source_table_count: 3
paper_digest_api_reader_source_formula_count: 0
paper_digest_api_reader_structured_artifacts_sha256: "a905d7fe8af888da41e11eb5d4ea3a2c839ba83a823856f9e819d8ebe9d74b4d"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity-v1"
paper_digest_api_reader_author_identity_sha256: "28e90065c0c6fc0d0c20996bd3b36ac93372c7198b11cfd8149fe0a3afc37d92"
paper_digest_api_reader_author_count: 6
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity-v1"
paper_digest_api_reader_resource_identity_sha256: "219fcd5021380a8354c7f44c7752d41eb30ed4840635bd67fb4d2625d1b7ed77"
paper_digest_api_reader_resource_count: 1
paper_digest_api_reader_decision_projection: "api-reader-decision-projection-v2"
paper_digest_scoring_contract: "api-scoring-audit-v2"
paper_digest_taxonomy_contract: "paper-taxonomy-flat-tags-compat-v1"
paper_digest_taxonomy_selection_contract: "paper-taxonomy-selection-v1"
paper_digest_taxonomy_registry_version: "paper-taxonomy-v1"
paper_digest_taxonomy_registry_sha256: "15c82a567ce5a55dc1175684ed08b64c158558639d9c8fb822c9587ec32a8778"
paper_digest_taxonomy_concepts: [{"facet":"method","id":"method.signal-processing","label":"信号处理"},{"facet":"research_focus","id":"research_focus.efficiency","label":"高效推理"},{"facet":"setting","id":"setting.real-time","label":"实时处理"},{"facet":"signal","id":"signal.music","label":"音乐"},{"facet":"task","id":"task.audio-generation","label":"音频生成"}]
paper_digest_primary_task: "音频生成"
paper_digest_primary_method: "信号处理"
paper_digest_score: 5.9
paper_digest_rank_bucket: "前50%"
paper_digest_document_type: "方法研究"
paper_digest_conference_structure: replayable-pdf-layout-v1
---

# 📄 把三处非线性压成一处：OCD 非对称削波的显式波数字建模

> 英文题目：*Explicit Wave Digital Model of the Fulltone OCD Pedal Based on Canonical Piecewise-Linear Functions*

> 会议身份：`conference:dafx:2026:conference-paper-id:DAFx26_paper_24`


> ✅ 来源为官方会议 PDF；表格与 Figure 按原文证据绑定。PDF 公式以原页区域图片展示，未冒称作者原始 TeX。

> 会议来源：[官方记录](https://dafx26.mit.edu/program/) · [官方 PDF](https://dafx26.mit.edu/assets/papers/DAFx26_paper_24.pdf)

标签：#信号处理 #高效推理 #实时处理 #音乐 #音频生成

评分：**5.9/10** | 创新 1.2/2 | 技术严谨 1.2/1.5 | 实验充分 0.7/1.5 | 清晰度 0.8/1 | 影响力 0.7/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 1.0/1.5

排名：前50% | 文档类型：方法研究

## 👥 作者与机构

- Riccardo Giampiccolo：机构信息未能从会议 PDF 纯文本可靠映射
- Stefano Polimeno：机构信息未能从会议 PDF 纯文本可靠映射
- Carlo Macrì：机构信息未能从会议 PDF 纯文本可靠映射
- Alice Lenoci：机构信息未能从会议 PDF 纯文本可靠映射
- Oliviero Massi：机构信息未能从会议 PDF 纯文本可靠映射
- Alberto Bernardini：机构信息未能从会议 PDF 纯文本可靠映射

## 📌 核心摘要

输入为吉他干声电压\(Vin\)，输出为经三级放大与非对称削波后的\(Vout\)，难点在于两个二极管连接型MOSFET与一个锗二极管构成的并串削波网络在波数字域形成多端口无延迟环，传统迭代求解难以满足实时约束。该工作先按理想运放假设将Fulltone OCD拆为线性输入级、非线性削波级与线性输出级，前者输出为后者提供激励并隔离运放拓扑。接着把图3a并联削波子电路在Simscape中仿真为单端口伏安特性，并以自适应非均匀选点拟合正则分段线性波映射，其输出直接作为根节点非线性块的显式求值输入。最后将线性部分固定散射矩阵与根节点显式求值串成叶到根再折返的前向后向流程，避免每采样点重算散射矩阵与内层不动点迭代。与保留三个非线性端口的散射迭代法相比，关键差异在于用拓扑等效与分段仿射封闭映射消除多环耦合，其实质是将多次迭代收敛转化为一次查表式映射求值。在96 kHz单频正弦测试设置下，显式模型的实时比指标为0.14，低于迭代模型的实时比指标3.12。该结论适用边界仅限于单频大信号稳态与Simscape参考比对，扫频、动态拨弦、旋钮全行程与听感外推尚未验证。推理开销在Apple Silicon M1 Pro硬件上经100次重复测量得到上述实时比，显式方法约快22倍并实现超实时。

## 🔗 开源与复现资源

- 第三方资源：<https://generalguitargadgets.com/pdf/ggg_ocdist_sc.pdf> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 输入是什么，要解决的实时仿真矛盾是什么？

这篇论文的输入是 Fulltone OCD v2 过载单块的电路图与元件参数，目标是在数字域复现它的非线性过载行为。输出是 1 篇可核对的方法解读，帮助研究生复述从采样点选取到显式求解再到验证的完整链路。

虚拟模拟这个词，白话说就是用数字算法模仿模拟电路的声音，英文是 Virtual Analog，缩写为 VA。过载单块之所以难做，是因为它的失真不是简单的放大加削顶，而是动态跟随弹奏力度的非线性。

OCD 的特殊之处在于用了金属氧化物半导体场效应管，英文是 MOSFET，做削波。相比经典的硅二极管对地削波，MOSFET 的电流电压关系变化更平缓，动态响应更像电子管。但这也带来数值求解的麻烦，因为电压相关电阻会在连接处形成无延时环。

无延时环的英文是 delay-free loop，缩写为 DFL，它意味着当前采样的输入输出互相依赖。论文面对的中心矛盾是物理可解释性与实时性的冲突，保留 3 个非线性最符合直觉但每步都要迭代。把三者合并为一个等效非线性，则可以 1 次前向加 1 次回代完成。

### 已有路线如何分类，本文站在哪条线上？

按论文第一章的梳理，虚拟模拟主要有白盒与黑盒两条路线。白盒指已知电路拓扑和元件物理，列写微分或代数方程再求解，常用状态空间与波数字滤波器。黑盒指不关心内部电路，只从输入输出数据辨识系统，例如 Volterra 级数与神经网络。

波数字滤波器的英文是 Wave Digital Filter，缩写为 WDF，它把元件与拓扑分开描述。还有一类混合路线，把神经网络嵌入白盒结构以兼顾可解释与拟合能力。在失真与过载子领域，已有工作覆盖了从多非线性求解到黑盒建模的广泛尝试。

OCD 本身因为在摇滚与金属演奏研究中常被当作代表性过载设备，具有超出一般效果器的音乐学意义。电路层面的难点在于 MOSFET 的非线性电流电压特性导致隐式关系，实时高效求解不容易。经典波数字形式通常只允许少量非线性端口，否则就要引入迭代求解器。

本文站在白盒波数字这条线上，继承了用规范分段线性函数在波域做闭式映射的近期进展。规范分段线性函数的英文是 Canonical Piecewise-Linear，缩写为 CPWL。它与迭代波数字方法的对照是同输入同电路下的直接比较，与黑盒方法则是不同监督与运行阶段的差异。

### 要建模的电路长什么样，任务边界在哪里？

研究对象是论文图 2 所示的 OCD v2 全电路，论文把它拆成 3 段。第一段是含驱动电位器 R5 的线性输入级，刻画输入电压到第 1 级输出 V1 的传递。第二段是非线性削波级，是全文建模重点。第 3 段是含音色与音量电位器的线性输出级，刻画 V2 到最终输出的传递。

两个运算放大器按理想运放处理，用零子模型并入连接网络，再由电压网与电流网推导散射矩阵。零子的英文是 nullor，它是理想运放的电路抽象。输出级的高峰低峰开关在实验中假设恒闭合，这是一个明确的任务边界。

削波级的连接是理解不对称的关键，一侧是一个单独的 MOSFET，另一侧是一个 MOSFET 串联一个锗二极管。两条支路并联后，正负半周进入限幅的阈值与压缩形状不同，因而产生偶次谐波更丰富的非对称削波。论文的任务不是重新设计音色，而是让数字模型在时频两域贴近参考仿真。

为避免初学者误解，需要说明教学例子与论文事实的区别。比如小幅度拨弦只在峰顶轻微压缩，大幅度输入则顶部被压平。这只是帮助理解非对称限幅的例子，论文实际用于定量比较的输入是明确写出的 1 秒离散正弦。吉他录音只出现在仓库的音频示例页，不作为主结果的证据。

### 从输入采样到输出采样要经过哪几步？

先沿一个采样走完全程，设当前离散时刻为 k，输入是上 1 级送来的电压采样。算法先算出所有线性元件在该时刻的等效戴维南电压，这些量由电容历史状态决定。接着把这些反射波通过固定的散射矩阵传播到非线性根节点，得到入射波。

然后用分段线性映射 1 次算出非线性反射波，再经散射矩阵回传到各元件端。最后更新端口电压电流并推进电容状态，经输出级得到输出采样，整个过程不包含采样内的牛顿迭代。这里涉及两个核心术语的配合，细节见下段的概念桥。

**波数字滤波器 × 端口电阻：** 波数字滤波器负责把电路元件和拓扑连接拆成散射模块，端口电阻则负责调节电压波与电流波之间的映射关系，二者搭配的理由是只有选对端口电阻才能消除元件或连接处的无延时环，组合意义是让线性电容电阻可以做成适配形式直接前向计算，把隐式求解压力集中到真正的非线性块上。

当非线性被合并为一个时，散射矩阵可以预先算好并固定。运行时只有向量乘法与 1 次分段线性查表，计算量显著下降。当保留 3 个非线性时，端口电阻每步都要按局部斜率更新，散射矩阵也要重算。下面这张图把合并思想可视化，左为原始结构，右为单个等效块。

> **看图路径：** 1. 先看左子图 Q1 支路与 Q2 加 D1 支路的并联接法；2. 再看右子图单个方块上标注的等效电流差关系；3. 最后对照左右两端 VA 与 VB 电压符号是否保持一致

[![原论文 Figure 3：(a) Nonlinearities of the original Fulltone OCD’s clip- ping stage; (b) single nonlinear element…](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/96ea7363ba4a/figure-3.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/96ea7363ba4a/figure-3.png)

*论文图 3。原论文 Figure 3：“(a) Nonlinearities of the original Fulltone OCD’s clip- ping stage; (b) single nonlinear element approximating the parallel connection in (a).”。*

该图左半显示 Q1 单独一支与 Q2 串 D1 另一支共用上下端电压，右半把两者压成一个符号化方块。该方块的等效电流写成两支路电流的差，左右两端电压符号保持为 VA 与 VB。这种画法不是删除了某个元件，而是把并联的基尔霍夫约束提前折进等效特性曲线。

### MOSFET 与二极管各自如何变成一端口分段线性块？

先解释二极管连接 MOSFET，白话说就是把栅极连到漏极，让晶体管自己给自己提供偏置。正常 n 沟道 MOSFET 有两个控制电压，栅源电压记为 v1，漏源电压记为 v2。短接后恒有 v1 等于 v2，只要导通就落在饱和区。

此时漏电流近似随电压呈平方律加沟道调制项变化，比 pn 结二极管的指数上升更柔和。单端口非线性指对外只看 1 对电压电流，不再区分栅与漏，具体对应关系见下段的概念桥。

**二极管连接 MOSFET × 单端口非线性：** 二极管连接 MOSFET 指把栅极和漏极短接使器件恒工作在饱和区，单端口非线性指对外只呈现一组电压电流关系，二者搭配的理由是短接后栅电流可忽略且漏电流只随端电压变化，组合意义是把原本的双端口晶体管降为可套用分段线性建模的一端口元件。

下图给出像素级对照，左为双端口符号，右为短接后的一端口符号，短接线与电压相等标注清晰可见。

> **看图路径：** 1. 先看左图栅极引出的 i1 箭头与右图栅漏短接线的区别；2. 再看两图纵向 v2 跨接箭头与右图标注 v1 等于 v2 的位置；3. 最后确认右图对外只剩上下两个端子即一端口

[![原论文 Figure 1：(a) Two-port model of an n-channel MOSFET; (b) one- port model of a diode-connected n-channel…](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/96ea7363ba4a/figure-1.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/96ea7363ba4a/figure-1.png)

*论文图 1。原论文 Figure 1：“(a) Two-port model of an n-channel MOSFET; (b) one- port model of a diode-connected n-channel MOSFET.”。*

左图可见栅极引出的 i1 箭头与漏极的 i2 箭头分开，纵向大弧线标出 v2。右图栅极连线直接折回漏极，i1 不再作为外部端口，右侧弧线标注变为 v1 等于 v2。这正是论文能把 MOSFET 当作与二极管同类的一端口来处理的前提，复现时若误把栅极当独立输入就会多出端口。

分段线性建模的具体动作是先在基尔霍夫域选点，再变换到波域连成折线。对 1N34A 二极管用扩展 Shockley 方程取 15 个点，对 MOSFET 用饱和区方程取 15 个点。选点按自适应非均匀策略，在弧长大与 2 阶导数大的区域加密，以给定点数下平均绝对误差最小为目标。

**规范分段线性函数 × 波域散射映射：** 规范分段线性函数负责在基尔霍夫域用多段折线逼近指数或平方律曲线，波域散射映射负责把该折线变换为入射波到反射波的显式函数，二者搭配的理由是折线斜率分段恒定因而波域表达式可写成绝对值之和的闭式，组合意义是不用牛顿迭代也能逐采样算出非线性反射波。

接着按电压波定义由端口电阻把电压电流点映射为入射波反射波点，再用绝对值之和形式写出反射波函数。论文未给出每段斜率的具体数值表，只报告了点数与选点原则，因此复述选点思想即可。等效单块的 30 个点则是先在 Simscape 中仿真原始并联子电路得到整体特性，再同样加密选取。

### 散射矩阵与线性元件如何配合推进时间步？

连接网络被建模为多端口波数字块，行为是入射波向量经散射矩阵得到反射波向量。论文采用电压波定义，入射波等于电压加端口电阻乘电流，反射波等于电压减端口电阻乘电流。散射矩阵可由基本割集矩阵与回路矩阵推导，含运放时先用零子模型并入网络。

线性一端口元件统一写成离散戴维南形式，电压等于等效电阻乘电流加等效电压源。当端口电阻选得等于等效电阻时，元件变为适配，反射波直接等于电压源。电容电感的离散化在对比实验中选用后向欧拉，这是复现时必须保持的一致条件。

迭代路径假设拓扑连接点为根，线性和非线性元件均为叶，非线性端口电阻初值设为 1。每采样先固定线性反射波，再按上 1 采样电流处的导数更新非线性端口电阻并重算散射矩阵。然后交替执行局部非线性散射与全局散射，全局更新采用固定点形式的散射迭代法。

散射迭代法的英文是 Scattering Iterative Method，收敛判据是相邻 2 次迭代的端口电压差范数小于容差。论文例子取 1e-5 伏量级，线性反射波在迭代期间保持不变。显式路径则把非线性块当根，拓扑为中间节点，线性元件为叶。

显式路径令非线性所连端口的散射对角元为零以消除隐式依赖，运行时散射矩阵固定。每采样依次做叶散射、前向散射、根散射与后向散射，根散射就是 1 次分段线性函数求值。这种固定顺序是单非线性树形结构可显式求解的直接结果，也是后文实时比差距的来源。

### 本研究有训练吗，实际计算过程是什么？

本研究没有神经网络训练阶段，也就没有优化器、梯度路径与冻结参数的安排。实际计算分为两类，一类是离线构造分段线性函数时的采样点搜索，另一类是逐采样的波数字仿真。采样点搜索不是梯度下降，而是按弧长与 2 阶导数加权决定密度。

该搜索再挑选使平均绝对误差最小的点集，输出是断点位置与每段斜率。逐采样仿真也不是推理神经网络，而是执行散射与映射计算，给定输入与参数下算法是确定性执行。需要明确说明未报告的缺项，论文没有报告断点搜索的迭代次数与停止阈值。

论文也没有报告散射迭代法在测试信号下的平均迭代次数分布，只给了容差量级与实时比结果。因此不能从模型名称推定实现细节，也不能把无训练等同于输出与状态无关，因为电容历史仍决定轨迹。两类求解路径的对照见下段的概念桥。

**散射迭代法 × 显式树形求解：** 散射迭代法负责在含多个非线性端口时反复交替做局部非线性散射和全局连接散射直到电压收敛，显式树形求解负责在只剩一个非线性根节点时按叶到根再到叶的固定顺序走一遍，二者搭配比较的理由是同一电路可按保留模块度或合并模块度两种方式组织，组合意义是揭示了计算量差异主要来自每步是否重算散射矩阵和迭代。

复现时应把离线拟合与在线仿真分开计时，论文的实时比只度量在线仿真的耗时。该口径不包含离线选点与 Simscape 生成等效特性的时间，若把离线拟合也计入就会误判部署成本。离线拟合只需做 1 次，在线仿真则每个采样都要执行。

### 用什么电路参数与输入条件做公平比较？

电路参数以原表为准，电阻电容与偏置电压的取值直接决定频率响应与削波阈值。下表是论文表 1 的原表选择，行列均来自证据矩阵，未补列未改数，表头行即原表第一行。该表列出电阻与电容的取值框架以及偏置电压，复现时必须照表搭建。

| R1 | 10 | 1 | 470 |
| --- | --- | --- | --- |
| R4 | 18 | 500 | 2.2 |
| R7 | 10 | 220 | 10 |
| R10 | 150 | 39 | 33 |
| R13 | 22 | 10 | 500 |
| C1 | 22 | 220 | 100 |
| C4 | 10 | 220 | 100 |
| C7 | 10 | 47 | 4.5 |

该表覆盖 R1 到 R15 与 C1 到 C8 的数值骨架以及 4.5 伏偏置，阅读时注意原表矩阵只保留数值骨架。复现应回到正文表 1 与图 2 核对千欧、纳法与微法的归属，不可仅从矩阵猜单位。器件层面，1N34A 与 2N7000 分别按论文表 2 取值，削波级拟合点数为二极管 15 点。

MOSFET 各取 15 点，等效单块取 30 点，这是控制拟合精度的关键超参数。比较协议要求三者在同输入同离散化下运行，输入是 1 秒离散正弦。参考方是在 Simscape 中用自定义元件搭建的同电路仿真，对照方是保留 3 个非线性端口的迭代实现。

主方法是合并为单个非线性的显式实现，三者的输出电压与频谱在相同时长与采样率下比较。实时比则在苹果 M1 Pro 上各跑 100 次取平均，采样总数相同以保证公平。第三方原理图链接在资源状态中显示可用，表明当前可公开获取，但复现仍应以论文图 2 与表值为准。

### 精度主结果是什么，代价与反例在哪里？

先提出比较问题，在相同时钟与同输入下，显式单非线性模型能否同时贴近参考仿真与迭代模型。公平条件是同为 1 秒离散正弦、幅度 1 V、基频 1 kHz、采样 fs = 96 kHz 与后向欧拉离散，指标方向是归一化均方误差与对数谱距离越小越好。下表把两个指标与两种方法的数值放在同一可运行策略下比较，另设比较对象列以防混淆。

| 条件 | 指标 | 迭代 3NL | 显式 1NL | 比较对象 |
| --- | --- | --- | --- | --- |
| 1 秒正弦，幅度 1 V，基频 1 kHz，采样 fs = 96 kHz，后向欧拉 | 时域 Normalized Mean Squared Error | 3.0 × 10−3 | 2.2 × 10−3 | Simscape 参考 |
| 1 秒正弦，幅度 1 V，基频 1 kHz，采样 fs = 96 kHz，范围 20 Hz - 20 kHz | 频域 Log-Spectral Distance | 0.62 | 0.56 | Simscape 参考 |

该表显示两种方法在时域都达到千分之量级，显式为 2.2 × 10−3，迭代为 3.0 × 10−3，频域距离分别为 0.56 与 0.62。论文文字把显式频域偏差归因于聚合近似，但按报告数字显式反而略优，阅读时应以数字为准。提高断点数可进一步降误差，但会增加查表与存储开销，这是明确的精度成本。

论文还提醒可用分段线性原函数的反导数抗混叠方法降低混叠，但本次主结果未量化该改进。非对称削波与谐波构成的关系见下段的概念桥，它解释了建模对象为何值得合并。

**非对称削波 × 谐波丰富度：** 非对称削波负责让正负半周以不同阈值和斜率进入限幅，谐波丰富度负责描述输出中偶次与高次谐波的构成，二者搭配的理由是 OCD 一侧是单个 MOSFET 另一侧是 MOSFET 串锗二极管因而不对称，组合意义是解释了该电路听感上更接近电子管过载的原因，但论文只用时频曲线吻合度支持建模精度并未做听感量化。

等效特性曲线的像素支持不对称建模的有效性，横轴为等效电压，纵轴为电流。下段图像显示黑色曲线在负压区弯折明显，红色叉号在斜率快变处加密。

> **看图路径：** 1. 先沿横轴电压从负四伏扫到正四伏看曲线整体不对称趋势；2. 再看黑色拟合曲线上红色叉号在斜率变化快处的加密；3. 最后注意纵轴电流为负向区间所对应的削波工作段

[![原论文 Figure 7：Characteristic curve of the equivalent nonlinear ele- ment represented in Fig.](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/96ea7363ba4a/figure-7.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/96ea7363ba4a/figure-7.png)

*论文图 7。原论文 Figure 7：“Characteristic curve of the equivalent nonlinear ele- ment represented in Fig.”。*

该图可见电压从负四伏向零伏移动时电流快速回升，红色叉号在弯折处密集分布。正压区曲线相对平缓，这种不对称正是单 MOSFET 与串联支路并联的结果。像素能辨认的是加密趋势与整体形状，不能精确读出每个断点数值。

时域波形的像素进一步确认三者重合，蓝色实线、红色点线与黄色虚线在 5 个周期内几乎完全覆盖。

> **看图路径：** 1. 先看横轴 0.995 秒到 1 秒的五个削波周期是否对齐；2. 再比较蓝色实线红色点线与黄色虚线的包络重合程度；3. 最后观察正峰顶部平坦与负峰较尖的不对称削波形状

[![原论文 Figure 4：Last 5 ms of Vout: comparison between the output ob- tained with the implicit (3NL) and explicit…](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/96ea7363ba4a/figure-4.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/96ea7363ba4a/figure-4.png)

*论文图 4。原论文 Figure 4：“Last 5 ms of Vout: comparison between the output ob- tained with the implicit (3NL) and explicit (1NL) methods and within Simscape (SSC).”。*

该图横轴为 0.995 秒到 1 秒，纵轴为电压，正峰顶部宽而平，负峰窄而尖。黄色虚线被蓝色与红色覆盖说明三方一致，频域图按同样图例比较谐波峰位置对应。非胜出项是迭代 3NL，它在精度上并未落败，只是速度明显落后，因此不能说显式以精度换速度。

### 若改变断点数与求解路径会发生什么？

论文没有做传统意义的消融表，但提供了两类可复述的对照。一是求解路径对照，即 3NL 迭代与 1NL 显式在同电路同输入下的精度与速度差异。二是拟合精度的定性说明，即增加分段线性断点数可降低误差，但计算成本上升。

这两类信息共同回答了模型的敏感性，抗混叠可用原函数方法缓解但未量化。速度对照需要单独成表，因为它与精度表指标不同，不能混放在模型列下比较。下表保持五列结构，明确硬件、运行次数与指标方向，实时比小于 1 表示可实时。

| 条件 | 指标 | 迭代 3NL | 显式 1NL | 运行环境 |
| --- | --- | --- | --- | --- |
| 同电路同正弦输入，100 次平均 | 平均实时比 | 3.12 | 0.14 | 苹果 M1 Pro |
| 同电路同正弦输入，100 次平均 | 相对加速 | 基线 | 约 22 倍 | 苹果 M1 Pro |

该表显示显式方法耗时约为实时的七分之一，而迭代方法约为实时的 3 倍。差距主要来自每步重算散射矩阵与多次迭代，显式固定矩阵只需向量乘法。未评测的边界包括更换输入幅度频率后的迭代次数变化，以及不同电位器位置下的频率响应。

论文只在单一正弦条件下给出定量数字，音频示例与非正式听感比较仅说明测试条件下无可感知差异。该结论不能推广为所有演奏场景无差异，复现时若只测正弦而不补吉他信号就只能声称狭窄条件下的实时性。

### 哪些结论尚未被验证，不能直接承诺？

首先是验证范围的局限，定量验证只用了一个幅度与频率的正弦。吉他信号只有仓库示例与非正式听感描述，没有可核对的听感评分或误判率。频域比较只给对数谱距离的整体值，没有分频段误差。

因此可以说在该正弦下谐波峰位置正确且整体距离小，但不能承诺在所有输入电平下失真都同样低。其次是理想化假设，运放按理想零子处理，忽略了有限增益带宽与饱和压摆的影响。输出级开关固定闭合，意味着另一档的声音未被验证。

MOSFET 方程只用了饱和区平方律加沟道调制，线性区表达式在短接后虽不进入主路径。但在大信号瞬态与数值初值阶段是否完全不影响，需要复现时检查。分段线性拟合的误差界与断点搜索的停止条件未完整报告，无法从论文直接算出最优断点数。

最后是成本口径，实时比只度量在线仿真，不含离线拟合与插件界面开销。总体趋势是显式远快于迭代，但这不等于每个采样都快，因为分段查表在断点附近可能带来分支抖动。96 千赫下可实时不代表 192 千赫下仍可实时，也不等于音频延迟本身很低。

### 要复现应先做什么，需要哪些文件与参数？

复现的第一步是按图 2 与表 1 个表 2 在 Simscape 中搭好参考电路，器件方程分别用扩展 Shockley 形式与饱和区平方律形式。离散化选后向欧拉，采样率设 96 千赫，输入设 1 伏 1 千赫的 1 秒正弦。先复现出削波不对称的时域波形与谐波结构，再继续波数字部分的搭建。

第二步是离线生成特性曲线，对二极管与 MOSFET 各取 15 点，对等效单块取 30 点。按弧长与 2 阶导数加权加密，再变换到波域得到分段线性系数，该步骤只需执行 1 次。第三步是搭建波数字结构，线性元件做适配，显式路径预计算固定散射矩阵。

迭代路径实现端口电阻更新与散射迭代收敛判断，容差取 1e-5 伏量级。关键超参数包括采样率、输入幅度频率、断点数、容差与开关恒闭合假设，以及 M1 Pro 的计时环境。论文给出 MATLAB 脚本仓库与 JUCE 插件仓库，以及音频示例页面。

资源状态显示第三方原理图链接当前可用，但应以论文内参数为准，链接仅作拓扑核对。常见误解是把合并非线性理解为删除元件，实际是把并联电流求和提前折进特性。复现时若直接删掉一条支路而不重拟合等效曲线，会得到错误的阈值与不对称形状。

### 何时值得尝试这种显式合并，还有什么待验证？

当多个非线性元件通过串并联构成单一端口的削波网络，且对外只呈现单调的电压电流关系时。值得尝试先仿真出等效特性再做单非线性显式建模，这种方法保留了白盒的可解释性。对于 OCD 这类一侧单管另一侧管串二极管的不对称结构，合并后仍能保留正负半周的不同压缩形状。

该场景比简单对称削波更值得做显式近似，又避开了每步重算散射矩阵与迭代。适合需要实时运行的效果器插件，部署时只需固定矩阵与查表。待补的验证包括多幅度多频率正弦扫描，以及不同驱动音色音量旋钮位置下的频率响应。

吉他干声与过载后的双盲听感尚未报告，高采样率与不同音频块大小下的延迟也待测量。若要声称插件级可用，还需报告宿主中的实际往返延迟与 CPU 占用。教学上可以把本文当作波数字从隐式到显式的典型案例，先沿单采样走完路径。

先走叶到根再到叶的固定顺序，再回头理解端口电阻适配与分段映射的分工。这样比直接背诵散射公式更能抓住实时性的来源，也便于检查合并是否改变了原电路的端口约束。

## 📐 原文公式与排版

以下展示论文原页中的数学表达区域，保留原始上下标、分式和符号排版。区域序号仅用于本文导航，不是论文公式编号。

[![原文数学表达区域 1，PDF 第 2 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/1b520e3034aa/figure-1.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/1b520e3034aa/figure-1.png)

区域 1 · [查看论文原页](https://dafx26.mit.edu/assets/papers/DAFx26_paper_24.pdf#page=2)

[![原文数学表达区域 2，PDF 第 2 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/1b520e3034aa/figure-2.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/1b520e3034aa/figure-2.png)

区域 2 · [查看论文原页](https://dafx26.mit.edu/assets/papers/DAFx26_paper_24.pdf#page=2)

[![原文数学表达区域 3，PDF 第 2 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/1b520e3034aa/figure-3.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/1b520e3034aa/figure-3.png)

区域 3 · [查看论文原页](https://dafx26.mit.edu/assets/papers/DAFx26_paper_24.pdf#page=2)

[![原文数学表达区域 4，PDF 第 2 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/1b520e3034aa/figure-4.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/1b520e3034aa/figure-4.png)

区域 4 · [查看论文原页](https://dafx26.mit.edu/assets/papers/DAFx26_paper_24.pdf#page=2)

[![原文数学表达区域 5，PDF 第 2 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/1b520e3034aa/figure-5.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/1b520e3034aa/figure-5.png)

区域 5 · [查看论文原页](https://dafx26.mit.edu/assets/papers/DAFx26_paper_24.pdf#page=2)

[![原文数学表达区域 6，PDF 第 2 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/1b520e3034aa/figure-6.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/1b520e3034aa/figure-6.png)

区域 6 · [查看论文原页](https://dafx26.mit.edu/assets/papers/DAFx26_paper_24.pdf#page=2)

[![原文数学表达区域 7，PDF 第 2 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/1b520e3034aa/figure-7.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/1b520e3034aa/figure-7.png)

区域 7 · [查看论文原页](https://dafx26.mit.edu/assets/papers/DAFx26_paper_24.pdf#page=2)

[![原文数学表达区域 8，PDF 第 2 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/1b520e3034aa/figure-8.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/1b520e3034aa/figure-8.png)

区域 8 · [查看论文原页](https://dafx26.mit.edu/assets/papers/DAFx26_paper_24.pdf#page=2)

[![原文数学表达区域 9，PDF 第 2 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/1b520e3034aa/figure-9.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/1b520e3034aa/figure-9.png)

区域 9 · [查看论文原页](https://dafx26.mit.edu/assets/papers/DAFx26_paper_24.pdf#page=2)

[![原文数学表达区域 10，PDF 第 3 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/1b520e3034aa/figure-10.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/1b520e3034aa/figure-10.png)

区域 10 · [查看论文原页](https://dafx26.mit.edu/assets/papers/DAFx26_paper_24.pdf#page=3)

[![原文数学表达区域 11，PDF 第 3 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/1b520e3034aa/figure-11.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/1b520e3034aa/figure-11.png)

区域 11 · [查看论文原页](https://dafx26.mit.edu/assets/papers/DAFx26_paper_24.pdf#page=3)

[![原文数学表达区域 12，PDF 第 3 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/1b520e3034aa/figure-12.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/1b520e3034aa/figure-12.png)

区域 12 · [查看论文原页](https://dafx26.mit.edu/assets/papers/DAFx26_paper_24.pdf#page=3)

[![原文数学表达区域 13，PDF 第 3 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/1b520e3034aa/figure-13.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/1b520e3034aa/figure-13.png)

区域 13 · [查看论文原页](https://dafx26.mit.edu/assets/papers/DAFx26_paper_24.pdf#page=3)

[![原文数学表达区域 14，PDF 第 3 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/1b520e3034aa/figure-14.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/1b520e3034aa/figure-14.png)

区域 14 · [查看论文原页](https://dafx26.mit.edu/assets/papers/DAFx26_paper_24.pdf#page=3)

[![原文数学表达区域 15，PDF 第 3 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/1b520e3034aa/figure-15.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/1b520e3034aa/figure-15.png)

区域 15 · [查看论文原页](https://dafx26.mit.edu/assets/papers/DAFx26_paper_24.pdf#page=3)

[![原文数学表达区域 16，PDF 第 3 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/1b520e3034aa/figure-16.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/1b520e3034aa/figure-16.png)

区域 16 · [查看论文原页](https://dafx26.mit.edu/assets/papers/DAFx26_paper_24.pdf#page=3)

[![原文数学表达区域 17，PDF 第 3 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/1b520e3034aa/figure-17.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/1b520e3034aa/figure-17.png)

区域 17 · [查看论文原页](https://dafx26.mit.edu/assets/papers/DAFx26_paper_24.pdf#page=3)

[![原文数学表达区域 18，PDF 第 3 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/1b520e3034aa/figure-18.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/1b520e3034aa/figure-18.png)

区域 18 · [查看论文原页](https://dafx26.mit.edu/assets/papers/DAFx26_paper_24.pdf#page=3)

[![原文数学表达区域 19，PDF 第 3 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/1b520e3034aa/figure-19.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/1b520e3034aa/figure-19.png)

区域 19 · [查看论文原页](https://dafx26.mit.edu/assets/papers/DAFx26_paper_24.pdf#page=3)

[![原文数学表达区域 20，PDF 第 3 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/1b520e3034aa/figure-20.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/1b520e3034aa/figure-20.png)

区域 20 · [查看论文原页](https://dafx26.mit.edu/assets/papers/DAFx26_paper_24.pdf#page=3)

[![原文数学表达区域 21，PDF 第 3 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/1b520e3034aa/figure-21.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/1b520e3034aa/figure-21.png)

区域 21 · [查看论文原页](https://dafx26.mit.edu/assets/papers/DAFx26_paper_24.pdf#page=3)

[![原文数学表达区域 22，PDF 第 3 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/1b520e3034aa/figure-22.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/1b520e3034aa/figure-22.png)

区域 22 · [查看论文原页](https://dafx26.mit.edu/assets/papers/DAFx26_paper_24.pdf#page=3)

[![原文数学表达区域 23，PDF 第 3 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/1b520e3034aa/figure-23.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/1b520e3034aa/figure-23.png)

区域 23 · [查看论文原页](https://dafx26.mit.edu/assets/papers/DAFx26_paper_24.pdf#page=3)

[![原文数学表达区域 24，PDF 第 3 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/1b520e3034aa/figure-24.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/1b520e3034aa/figure-24.png)

区域 24 · [查看论文原页](https://dafx26.mit.edu/assets/papers/DAFx26_paper_24.pdf#page=3)

[![原文数学表达区域 25，PDF 第 4 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/1b520e3034aa/figure-25.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/1b520e3034aa/figure-25.png)

区域 25 · [查看论文原页](https://dafx26.mit.edu/assets/papers/DAFx26_paper_24.pdf#page=4)

[![原文数学表达区域 26，PDF 第 4 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/1b520e3034aa/figure-26.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/1b520e3034aa/figure-26.png)

区域 26 · [查看论文原页](https://dafx26.mit.edu/assets/papers/DAFx26_paper_24.pdf#page=4)

[![原文数学表达区域 27，PDF 第 4 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/1b520e3034aa/figure-27.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/1b520e3034aa/figure-27.png)

区域 27 · [查看论文原页](https://dafx26.mit.edu/assets/papers/DAFx26_paper_24.pdf#page=4)

[![原文数学表达区域 28，PDF 第 4 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/1b520e3034aa/figure-28.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/1b520e3034aa/figure-28.png)

区域 28 · [查看论文原页](https://dafx26.mit.edu/assets/papers/DAFx26_paper_24.pdf#page=4)

[![原文数学表达区域 29，PDF 第 4 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/1b520e3034aa/figure-29.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/1b520e3034aa/figure-29.png)

区域 29 · [查看论文原页](https://dafx26.mit.edu/assets/papers/DAFx26_paper_24.pdf#page=4)

[![原文数学表达区域 30，PDF 第 4 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/1b520e3034aa/figure-30.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/1b520e3034aa/figure-30.png)

区域 30 · [查看论文原页](https://dafx26.mit.edu/assets/papers/DAFx26_paper_24.pdf#page=4)

[![原文数学表达区域 31，PDF 第 4 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/1b520e3034aa/figure-31.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/1b520e3034aa/figure-31.png)

区域 31 · [查看论文原页](https://dafx26.mit.edu/assets/papers/DAFx26_paper_24.pdf#page=4)

[![原文数学表达区域 32，PDF 第 4 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/1b520e3034aa/figure-32.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/1b520e3034aa/figure-32.png)

区域 32 · [查看论文原页](https://dafx26.mit.edu/assets/papers/DAFx26_paper_24.pdf#page=4)

另有 29 个候选区域因边界不明确或图片数量、尺寸限制未展开；请[查看完整论文](https://dafx26.mit.edu/assets/papers/DAFx26_paper_24.pdf)中的原始排版。

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。
- 评分规则：type-aware-v1
- 评分模型：muse-spark-1.3-contributor
- 评分请求协议：openai_responses

---

[← 返回 dafx-2026 论文汇总](/posts/conference-dafx-2026/)
