---
title: "PolyADAA: Improving Aliasing Reduction in Memoryless Nonlinearities Using Lagrange Interpolation and Polynomial Approximation"
date: 2026-09-13
draft: false
description: "论文把抗导数抗混叠首步的线性插值换成二三阶拉格朗日插值，并用切比雪夫多项式逼近非线性使矩形与三角核积分可闭式计算，在 3192 Hz 正弦加 tanh 与硬削波实验中显著提升信噪比，代价是每样本多次非线性求值与离散余弦变换开销。"
tags: ["开源工具", "信号处理", "高效推理", "音频修复"]
categories: ["dafx-2026 论文"]
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_paper_id: "conference:dafx:2026:conference-paper-id:DAFx26_paper_47"
paper_digest_source_kind: conference
paper_digest_conference_id: "dafx-2026"
paper_digest_conference_record_url: "https://dafx26.mit.edu/program/"
paper_digest_conference_pdf_url: "https://dafx26.mit.edu/assets/papers/DAFx26_paper_47.pdf"
paper_digest_api_reader_contract: "beginner-researcher-v3"
paper_digest_api_reader_article_sha256: "ae9cf99f1d913532e28ac50213d25301021d84a6eb05ecd03f093626025d7752"
paper_digest_api_reader_plan_sha256: "3138106ff741d67b8e22aa2dcf25fe5d6a0054adb2948afd856aa1b7024f305e"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings-v4"
paper_digest_api_reader_source_bindings_sha256: "969924e3b8c4748fb2cf13f427a95faa213cf4c561c0440dc96f1a6bd14f37b3"
paper_digest_api_reader_source_table_count: 2
paper_digest_api_reader_source_formula_count: 0
paper_digest_api_reader_structured_artifacts_sha256: "190879305918880ec1711798d7b7db46f69cb9e4df8bdd3e4cc3342c99e69ecb"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity-v1"
paper_digest_api_reader_author_identity_sha256: "839bed99a17872a13a9cbabd3dce598af961431efd05f099109b7d104f539888"
paper_digest_api_reader_author_count: 2
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity-v1"
paper_digest_api_reader_resource_identity_sha256: "1e9f88867e6f6b59f753b488e7f594cf512e4546ac79dde33b824cba9c2316be"
paper_digest_api_reader_resource_count: 2
paper_digest_api_reader_decision_projection: "api-reader-decision-projection-v2"
paper_digest_scoring_contract: "api-scoring-audit-v2"
paper_digest_taxonomy_contract: "paper-taxonomy-flat-tags-compat-v1"
paper_digest_taxonomy_selection_contract: "paper-taxonomy-selection-v1"
paper_digest_taxonomy_registry_version: "paper-taxonomy-v1"
paper_digest_taxonomy_registry_sha256: "15c82a567ce5a55dc1175684ed08b64c158558639d9c8fb822c9587ec32a8778"
paper_digest_taxonomy_concepts: [{"facet":"artifact","id":"artifact.open-source-tool","label":"开源工具"},{"facet":"method","id":"method.signal-processing","label":"信号处理"},{"facet":"research_focus","id":"research_focus.efficiency","label":"高效推理"},{"facet":"task","id":"task.audio-restoration","label":"音频修复"}]
paper_digest_primary_task: "音频修复"
paper_digest_primary_method: "信号处理"
paper_digest_score: 7.7
paper_digest_rank_bucket: "前25%"
paper_digest_document_type: "方法研究"
paper_digest_conference_structure: replayable-pdf-layout-v1
---

# 📄 线性插值是瓶颈：用拉格朗日插值加切比雪夫逼近重做抗混叠积分

> 英文题目：*PolyADAA: Improving Aliasing Reduction in Memoryless Nonlinearities Using Lagrange Interpolation and Polynomial Approximation*

> 会议身份：`conference:dafx:2026:conference-paper-id:DAFx26_paper_47`


> ✅ 来源为官方会议 PDF；表格与 Figure 按原文证据绑定。PDF 公式以原页区域图片展示，未冒称作者原始 TeX。

> 会议来源：[官方记录](https://dafx26.mit.edu/program/) · [官方 PDF](https://dafx26.mit.edu/assets/papers/DAFx26_paper_47.pdf)

标签：#开源工具 #信号处理 #高效推理 #音频修复

评分：**7.7/10** | 创新 1.5/2 | 技术严谨 1.2/1.5 | 实验充分 1.0/1.5 | 清晰度 0.7/1 | 影响力 0.8/1.5 | 开源 1.2/1.5 | 可复现 0.3/0.5 | 工程/实践 1.0/1.5

排名：前25% | 文档类型：方法研究

## 👥 作者与机构

- Leonardo Gabrielli：机构信息未能从会议 PDF 纯文本可靠映射
- Stefano Squartini：机构信息未能从会议 PDF 纯文本可靠映射

## 📌 核心摘要

无记忆非线性将连续信号带宽展宽后在离散时间采样，混叠抑制需要在采样点间重建连续波形并做抗混叠滤波，线性插值重建误差已成为传统反导数抗混叠的性能瓶颈。该方法先以2阶或3阶拉格朗日插值由离散样本重建连续输入，其输出进入复合非线性求值环节得到离散余弦变换所需的节点值；再将复合函数在映射区间上展开为K阶第一类切比雪夫多项式并经离散余弦变换求系数；最后将系数与矩形或三角核预计算的切比雪夫矩加权求和得到当前采样输出。与原ADAA经换元只适用于线性斜坡的闭式积分不同，新机制把任意非线性化为多项式积分从而兼容高阶插值，切换核函数只需更换预计算矩而无需改动实时结构。在低于A4音高的测试条件下，PolyADAA查找表方法的SNR指标为120 dB，高于平凡方法的SNR指标92.2 dB。该结论适用边界受限于稳态单正弦驱动的tanh与硬削波验证，尚未验证含状态系统与无限冲激响应核，低频三角核仍受数值噪声影响。推理开销主要来自每样本K+1次非线性求值、拉格朗日插值计算量与长度2K快速傅里叶变换实现的离散余弦变换，查找表近似可大幅降低计算量但会引入可测噪声本底。

## 🔗 开源与复现资源

- 代码相关资源：<https://github.com/LOGUNIVPM/PolyADAA> — 链接可访问（HTTP 200）
- 第三方资源：<https://github.com/mborgerding/kissfft> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 输入是什么，输出是什么，为何直接做非线性会变难听？

输入是离散时间的音频样本序列，目标是对每个样本做无记忆非线性变换后得到混叠更少的输出序列。所谓无记忆非线性，用白话说就是输出只看当前输入值，不看过去状态，例如正切双曲压缩与硬削波都属于这一类，对应英文是 memoryless nonlinearity。所谓混叠，用白话说就是非线性把带宽撑宽后，高于采样率 1 半的成分折回低频形成原本不存在的音，对应英文是 aliasing。研究生复述时要抓住动作链：先把离散样本恢复成连续波形，再做非线性，再做低通滤波，最后回到原采样时刻取值。若跳过中间的连续恢复与滤波，直接对离散样本求非线性，高频谐波就会折叠，这就是论文要解决的感知相关问题。

**无记忆非线性 × 混叠：** 无记忆非线性负责把当前输入样本瞬时映射为输出，不依赖历史状态，分工是产生新的谐波与带宽扩展；混叠负责描述当扩展后带宽超过奈奎斯特频率时高频成分折回可听带的现象，分工是解释为何直接逐样本做非线性会产生虚假分量；二者搭配的原因是音频失真与合成恰好大量使用无记忆非线性，因而必须配套抗混叠处理，组合意义是把音质问题定位为带宽控制而非非线性本身好坏。

论文的资源状态需要先交代清楚。代码资源地址为公开仓库，当前可用，已通过可达性检查，可用于核对实现；第三方快速傅里叶变换库同样当前可用。解读默认从原文独立写作，不引入外部评价。本文讨论的全部是单输入单输出的静态波形整形，不涉及带状态的递归系统，实验也只用正弦输入评估，这是后文所有信噪比数字的前提条件。

### 已有路线走到哪里，为何插值成了瓶颈？

第一条路线是过采样，用更高采样率把折叠点推高，代价是算力成倍增长。第二条路线是抗导数抗混叠，对应英文是 Antiderivative Antialiasing，简称 ADAA。它把连续卷积的解析解写成原函数差分形式，矩形核得到 1 阶差分式，三角核得到 2 阶差分式。后续工作把滤波核做得更好，包括有限支撑核与无限冲激响应核，但原文指出当输入是线性斜坡的波表情形时提高滤波器阶数收益明显，而一般波形整形时收益变小，作者据此推测线性插值的连续近似误差是瓶颈。

第三条路线是改进插值本身，已有工作尝试因果 3 次插值，但需要前视且对带状态系统改善不明显，另一工作把抗导数抗混叠重写为插值问题但没有带来实际抑制提升。

因此本文的定位很明确：不换滤波器设计思路，而是把第一步的离散到连续转换从 1 阶拉格朗日提升到 2 阶与 3 阶，并解决高阶后积分无闭式解的困难。理解这一点才能明白后文为何引入切比雪夫逼近，而不是直接去优化滤波器系数。

### 要解的积分是什么，为何高阶插值会卡住？

沿一个样本走完全程最容易理解。取当前输出时刻，收集其附近的若干输入样本，用插值多项式写出区间内的连续波形，再把非线性作用其上得到连续输出，最后与抗混叠核做卷积并在整数时刻取值。矩形核情形下积分简化为区间内非线性波形的平均，三角核情形下则是带三角权重的平均。原方法用线性插值时，波形对时间的导数是常数，做变量替换后积分恰好化为原函数之差除以样本差，这就是经典公式的来源。

当插值升为 2 次或 3 次时，波形变成 2 次或 3 次多项式，导数随时间变化，变量替换后分母含多项式，求逆会出现多值分支，对一般非线性没有闭式原函数可用。论文明确指出这条直接推广走不通，必须换近似路线。同时分母含样本差的老公式在输入近乎平稳时会数值不稳定，这也是新方法要顺带解决的工程问题。教学例子：若输入几乎是直流，线性公式分母接近零，输出会抖动，而新方法用加权求和避免除法，稳定性更好，该例子只说明机制，不附加论文外的数值。

### 新方法全景：插值、逼近、预计算矩如何分工？

新方法取名多项式抗导数抗混叠，对应英文是 PolyADAA。它的全景可分为离线与在线两部分。离线选定非线性、逼近阶数与核类型后，计算切比雪夫积分矩。在线对每个输出样本执行 6 步：收集邻域样本，构造拉格朗日基，在切比雪夫节点上求插值波形值，求非线性值，经变换得到切比雪夫系数，最后与预计算矩做内积得到输出。矩形与三角在此框架下只差矩的取值，代码主体可以共用。

关键思想转换是：不再对原始非线性求原函数，而是对时间区间上的复合函数做切比雪夫逼近，再逐项积分。由于基函数与核的乘积积分与信号无关，可以离线算好，在线只剩插值、非线性求值、变换与加权求和。这种安排把难解的解析积分转化为可预计算的数值矩，把每样本的除法转化为乘加，因此既去掉对解析原函数的需求，也去掉平稳输入时的除零风险。

### 插值如何实现才能又快又稳？

论文采用的拉格朗日插值阶数记为 N，1 阶即线性插值，2 阶为 2 次，3 阶为 3 次。实现上有两种写法：标准基函数连乘形式数学上紧凑，但每求值 1 次都有除法；单项式展开加霍纳法则形式把与节点有关的除法吸收进预计算系数，在线每节点只需线性组合与多项式求值。论文给出 2 阶或 3 阶时显式展开为系数加霍纳求值的建议，优点是固定结构、无分支、每求值约 N 次乘加，适合向量化。

**抗导数抗混叠 × 拉格朗日插值：** 抗导数抗混叠负责给出离散到连续再滤波重采样的可计算框架，分工是把理想低通卷积转化为原函数差分或矩加权求和；拉格朗日插值负责提供离散样本之间的连续时间近似，分工是决定送入非线性的波形形状；搭配理由是原方法的 1 阶拉格朗日即线性插值精度不足，成为提升滤波器也补不回来的瓶颈，组合意义是用 2 阶或 3 阶插值提高连续近似精度，再重解抗混叠积分以获得更高的信噪比。

具体到本研究，实时处理需要收集 N 加 1 个样本，例如 3 阶需要当前前后若干样本，这意味着算法需要一定的上下文而非严格因果单样本。插值阶数越高，连续波形越光滑，但每切比雪夫节点都要做 1 次线性组合，计算量随阶数线性增长。后文实验会显示矩形核配 2 阶与三角核配 3 阶各有优势，不能简单认为阶数越高一定越好。

### 切比雪夫逼近与矩如何把积分算出来？

切比雪夫多项式是定义在负一到一上的余弦型正交基，变量替换后可把时间区间映射到该区间。把复合非线性记为时间函数，用 K 阶截断展开逼近，K 越大逼近越好。系数求法利用切比雪夫节点的离散正交性，可写成余弦和形式，恰好是第一类离散余弦变换，可通过对称扩展加实数快速傅里叶变换实现。论文还讨论小阶数时直接用快速变换是否划算，结论是变换开销通常小于多次超越函数求值。

**切比雪夫多项式 × 离散余弦变换：** 切比雪夫多项式负责在区间上逼近复合函数，分工是把难以解析积分的非线性换成正交基的线性组合；离散余弦变换负责快速求出该逼近的系数，分工是利用切比雪夫节点上的函数值经对称扩展加快速傅里叶变换得到系数；搭配原因是切比雪夫系数的离散形式恰好是第一类离散余弦变换，组合意义是每样本只需插值求值加 1 次变换即可得到可积分的表示，兼顾数值稳定与实时可行性。

得到系数后，输出近似为系数与积分矩的内积。矩形核的矩有闭式分段表达式，奇数阶为零，偶数阶按公式取值；三角核的矩只与阶数有关，可离线高精度数值算好。运行时与核无关的统一求和是该方法可快速切换核的原因。

**矩形核 × 三角核：** 矩形核负责在一个样本区间内做均匀平均，分工是对应 1 阶抗导数抗混叠的低通滤波；三角核负责在两个样本区间上做加权平均，分工是对应 2 阶形式并提供更强的混叠抑制；搭配原因是二者在切比雪夫框架下只差一组预计算积分矩，组合意义是运行时算法完全相同，切换核只需更换离线矩，从而按音高或算力需求快速选择抑制强度。

复述时记住符号分工：N 管插值形状，K 管逼近精度，矩管滤波特性。三者正交，调参时需要联合看信噪比与算力。

### 本研究有没有训练？实际计算与近似如何安排？

本研究没有神经网络训练，也就没有梯度、优化器、冻结与更新、监督信号与重置等安排，未报告即缺项，不做推定。实际计算分为离线数值积分与在线信号处理两类。离线只算与信号无关的矩，在线是确定性信号流：插值、非线性求值、变换、加权求和。

**查找表 × 超越函数求值：** 超越函数求值负责精确计算正切双曲等非线性，分工是保证逼近目标正确；查找表负责用预存表格加线性插值近似该函数，分工是把昂贵的逐点超越函数调用换成访存与插值；搭配原因是切比雪夫方法每输出样本需要在多个节点上求值，非线性求值成为主开销，组合意义是在高频段混叠主导信噪比时用可容忍的表格噪声换取大幅降耗，使高阶配置达到可部署水平。

为降低开销，论文用查找表加线性插值替代标准库的超越函数求值，这是一种通用近似，不改变算法结构。查找表点数默认 8192，另测 1024 以观察噪声基座。需要强调的是，无训练不等于输出确定到可忽略误差，因为查找表插值会引入与信号相关的低电平噪声，在低频高信噪比段会成为基座，这在后文实验条件中有明确说明。复现时应先用直接函数求值对齐精度，再换查找表测加速比，避免把表格噪声误判为混叠残留。

### 实验测什么，在什么条件下比才公平？

实验要回答的是给定正弦输入与静态非线性时，输出中有用谐波与混叠加噪声的比例有多高。指标是信噪比，越高表示混叠与噪声越低；跨方法比较时用相对平凡直接法的差值，记为信噪比增量，同样越高越好。被比方法包括平凡直接法、1 阶矩形抗导数抗混叠、1 阶三角抗导数抗混叠，以及新方法在不同核、不同 N 与 K 下的组合，部分组合再加查找表。输入主要是幅度为 9 的正弦，驱动正切双曲进入重失真，另用硬削波验证 1 阶导数不连续的更难情形。采样率与评估音高按钢琴键盘覆盖，高音区是感知相关区，低频段因三角老方法的数值问题与表格基座另行处理。

下表把可逐字核对的配置要素整理成宽表，阅读时先确认信号、非线性、采样与评估范围是否一致，再看信噪比数字，否则跨表对比会失真。表前问题是：哪些条件是全文固定的，哪些是可变的。公平条件是同输入频率、同幅度、同采样率与同评估音高范围。指标方向是信噪比越高越好。

| 信号条件 | 非线性 | 采样配置 | 幅度条件 | 评估范围 |
| --- | --- | --- | --- | --- |
| --- | --- | --- | --- | --- |

上表把分散在正文与图注中的固定配置收拢，主要收益是让后文所有信噪比都锚定在同一输入强度与采样率下，具体代价是该配置偏重高音重失真，不能直接推广到轻失真或复杂音乐信号；未胜出项是低频段的老三角方法，其数值问题在表中不体现，需结合曲线图理解，表格未评测实时延迟与听感，这是明确边界。

### 主结果：新方法在高音重失真下带来多少可运行收益？

先看正切双曲在 3192 Hz 处的单点频谱。六面板按平凡法、老三角法、新矩形 2 阶 8 阶、新三角 3 阶 32 阶、以及 32 阶加两种查找表排列。每面板标题给出该点的信噪比，谐波标记为基波与三五七次，偶次标记只在查找表引入后出现。可见趋势是杂散基座逐面板下降，老三角已明显好于平凡，新方法进一步压低，而查找表在保持主谐波的同时抬起宽带噪声基座，点数越多基座越低。

> **看图路径：** 1. 先对比左上与右上两个面板的基波与谐波周围杂散高度；2. 再看右中面板中杂散基座相对右上降低了多少；3. 最后对比左下与右下面板在引入查找表后噪声基座的变化

[![原论文 Figure 5：SNR and spectra of a sine input (3192 Hz) processed by a tanh, using the original ADAA methods…](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/b835734a7229/figure-5.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/b835734a7229/figure-5.png)

*论文图 5。原论文 Figure 5：“SNR and spectra of a sine input (3192 Hz) processed by a tanh, using the original ADAA methods based on rectangular (a) and triangular (b) kernels, polyADAA-R and polyADAA-T with…”。*

上图是正切双曲的频谱证据，像素显示左上杂散密集且接近谐波高度，右上杂散明显收缩，右中杂散基座最低，左下与右下在偶次位置出现表格引入的新峰但整体仍远好于平凡。该图支持的判断是：在该高音工作点，新三角高阶配置相对老三角有十多分贝量级的提升；限制是单点不能代表全键盘平均，且查找表噪声在低频高信噪比段会成为主导，需要用平均表与低频曲线补充。

再看硬削波的四面板频谱。硬削波因 1 阶导数不连续更易混叠，平凡法基座最高，老三角有所改善，新矩形 2 阶 8 阶略超老三角，新三角 3 阶 32 阶大幅领先。像素显示最下面板杂散最稀疏，标题信噪比最高。该结果支持新方法对更难非线性仍有效，但同样是单点证据，需与平均增量一起读。

### 硬削波单点谱线如何佐证方法的泛化？

硬削波实验沿用同幅度同频率的正弦输入，只是非线性从光滑的正切双曲换成折线型削波。导读时把 4 个面板自上而下看成抑制强度递增：平凡法几乎全带都是折叠峰，老三角压低一部分，新矩形继续压低，新三角最低。该图的前后关系是：前一段已讲正切双曲的全面板含查找表对照，本段聚焦更难非线性的四面板，二者共同说明方法不依赖非线性光滑性。

> **看图路径：** 1. 先看最上方面板中谐波间密集的折叠分量高度；2. 再逐面板向下观察杂散基座的下降趋势；3. 最后核对每个面板标题给出的信噪比数值递增关系

[![原论文 Figure 4：SNR and spectra of a sine input (3192 Hz) processed by a hard-clipping nonlinearity, using the…](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/b835734a7229/figure-4.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/b835734a7229/figure-4.png)

*论文图 4。原论文 Figure 4：“SNR and spectra of a sine input (3192 Hz) processed by a hard-clipping nonlinearity, using the original ADAA methods based on rectangular (a) and triangular (b) kernels,…”。*

上图 4 个面板的标题信噪比自上而下递增，最下面板比最上面板高约 30 分贝量级，像素中谐波间毛刺逐面板变稀，基座逐面板下移。该图显示的结论是新三角高阶在硬削波下相对老三角仍有接近 20 分贝的领先；待验证的是该领先是否在全键盘与不同幅度下保持，原文未给出硬削波的全键盘平均，因此不能把单点领先推广为全条件最优。

### 哪些参数组合真正重要，低频异常从何而来？

平均增量实验把钢琴键盘上每个音的信噪比减去平凡法再在高音区平均，目的是得到与音高无关的总体分。变量是核类型、拉格朗日阶数 N 为二或三、切比雪夫阶数 K 为八、十六或三十二，以及是否用查找表。报告显示新三角 3 阶高 K 平均最优，新矩形 2 阶低 K 在中低高音段最优，老矩形与老三角明显更低。切比雪夫阶数在该非线性下 8 阶多已足够，继续增大收益很小，这是重要的省算力结论。核与 N 存在交叉：矩形配 2 阶更好，三角配 3 阶更好，不能单调外推。

> **看图路径：** 1. 先沿横轴从低音区扫到高音区看各曲线的相对位置；2. 再定位低音区虚线大幅下探的数值异常段；3. 最后比较高音区灰实线与空心圆圈线的交叉与分离

[![原论文 Figure 2：SNR improvement with respect to the trivial method.](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/b835734a7229/figure-2.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/b835734a7229/figure-2.png)

*论文图 2。原论文 Figure 2：“SNR improvement with respect to the trivial method.”。*

上图横轴为音高，纵轴为相对平凡法的增量，像素显示低音区老三角虚线大幅下探至负值，中部空心圆圈与灰实线接近，高音区灰实线走高并带锯齿，另两条老方法曲线贴近零上。图注明确指出低频三角核老方法存在数值问题，因而平均只取 69 号音以上。该图支持的判断是：平均最优的新三角高阶主要赢在高音区，而中低段新矩形 2 阶更稳；限制是平均值掩盖了频段交叉，选型必须按目标音区与算力一起定。未胜出项是新三角配 2 阶，其平均与老三角持平，说明高阶插值必须与匹配的核搭配才有收益。

下表整理可逐字核对的代价与边界数字，表前问题是：查找表省多少时间，低频基座与高频收益如何取舍。公平条件是同信号长度与分块。指标方向是耗时越低越好，信噪比越高越好，但二者存在交换。

| 度量维度 | 指标说明 | 低频边界 | 高频收益 | 计算代价 |
| --- | --- | --- | --- | --- |
| 单音示例 | 平凡法 92.2 dB | 表格基座 120 dB | 新三角超老三角近 20 dB | 分块 64 样本处理 48k 样本 |
| --- | --- | --- | --- | --- |

上表说明主要收益是高音区混叠主导时新方法领先明确，具体代价是查找表把超越函数调用换成访存插值，在 32 阶时节省八到九成时间，但低频段表格噪声会封顶信噪比；反例是低频老三角的负增量，说明不分频段谈平均会误导选型，表格未包含每配置的逐音方差与听感评估，这是未评测边界。

### 还有哪些没测、不能承诺、容易误读？

第一，评估信号只有单正弦，没有复音、鼓组与人声，谐波结构简单的结论不能直接推广到宽带音乐。第二，指标是客观信噪比，没有听感实验，低电平差异是否可闻未验证，不能把分贝领先直接写成音质更好。第三，计算时间是在特定笔记本与单精度、特定快速傅里叶库、分块处理下测得，只具参考性，不同非线性与编译优化会改变相对排序，不能承诺实际延迟降低。

第四，矩形与三角之外的有限支撑核以及无限冲激响应核未给出闭式，论文明确留作未来工作，不能认为换任意核都只需换矩。第五，查找表实验只测线性插值读表，点数与插值方式改变会移动噪声基座，不能把某一点数的结论当成通用加速比。

容易误读的是把总体趋势当成每组都成立，例如增大 K 在多数配置下收益饱和，但不等于所有核与 N 下都饱和；把自动指标当成人评，把单点频谱最优当成全键盘最优，都是原文已用分频段曲线提醒要避免的。缺失证据不是技术错误，相关性也不是因果，阅读时应保留条件状语。

### 要复现应先做什么，需要哪些信息条件？

先按学习依赖准备三样东西：可运行代码与第三方变换库、固定实验配置、评价脚本。代码当前可用，可用于核对 6 步流程与矩的数值；第三方库当前可用，用于离散余弦变换。固定配置包括正弦幅度、采样率、评估音高下限、查找表点数与分块大小，这些在前表已收拢，复现时不要自行更改。评价脚本应对每个音高分别算信噪比，再算相对平凡法的增量并在高音区平均，同时画出全键盘曲线以暴露低频异常。

建议顺序是：先用直接函数求值复现矩形 2 阶 8 阶与三角 3 阶 32 阶的单点谱，确认杂散基座趋势；再跑全键盘平均确认交叉现象；最后引入查找表复现加速比与噪声基座。实现细节上，拉格朗日系数离线算好，在线用霍纳求值；切比雪夫节点数取 K 加 1，对称扩展后做 2 倍长度变换取实部。

矩离线高精度算好，运行时只做内积。若要换非线性，无需推导原函数，只需重算矩并重测 K 是否足够，这是该方法便于采用新非线性的关键。权重下载不适用，系统可运行依赖代码与库的可达性，本文写作时二者均可用。

### 何时值得尝试，一句话如何带走？

当你的效果器或合成器必须在 48 千赫兹附近实时跑重失真，且高音区混叠可闻，而过采样已吃满预算时，值得尝试用新矩形 2 阶 8 阶做低成本起点；若目标是高音区最大抑制且能接受查找表或更高算力，再试新三角 3 阶 8 阶或 32 阶。选型前先明确目标音区，因为矩形与三角的最优点不在同一频段。复现时先对齐直接求值的精度，再谈加速；报告时同时给出单点谱、全键盘曲线与耗时，避免只报平均增量。

带走的一句话是：把连续近似做准比把滤波器做复杂更治本，用正交逼近把难积分变成可预计算的矩，就能在不写原函数、不除样本差的前提下换来高音区的显著抑制，代价是每样本多次求值，查找表可在高频混叠主导时把代价降到可部署水平。

## 📐 原文公式与排版

以下展示论文原页中的数学表达区域，保留原始上下标、分式和符号排版。区域序号仅用于本文导航，不是论文公式编号。

[![原文数学表达区域 1，PDF 第 1 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/36b3393da769/figure-1.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/36b3393da769/figure-1.png)

区域 1 · [查看论文原页](https://dafx26.mit.edu/assets/papers/DAFx26_paper_47.pdf#page=1)

[![原文数学表达区域 2，PDF 第 1 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/36b3393da769/figure-2.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/36b3393da769/figure-2.png)

区域 2 · [查看论文原页](https://dafx26.mit.edu/assets/papers/DAFx26_paper_47.pdf#page=1)

[![原文数学表达区域 3，PDF 第 1 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/36b3393da769/figure-3.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/36b3393da769/figure-3.png)

区域 3 · [查看论文原页](https://dafx26.mit.edu/assets/papers/DAFx26_paper_47.pdf#page=1)

[![原文数学表达区域 4，PDF 第 1 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/36b3393da769/figure-4.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/36b3393da769/figure-4.png)

区域 4 · [查看论文原页](https://dafx26.mit.edu/assets/papers/DAFx26_paper_47.pdf#page=1)

[![原文数学表达区域 5，PDF 第 2 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/36b3393da769/figure-5.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/36b3393da769/figure-5.png)

区域 5 · [查看论文原页](https://dafx26.mit.edu/assets/papers/DAFx26_paper_47.pdf#page=2)

[![原文数学表达区域 6，PDF 第 2 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/36b3393da769/figure-6.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/36b3393da769/figure-6.png)

区域 6 · [查看论文原页](https://dafx26.mit.edu/assets/papers/DAFx26_paper_47.pdf#page=2)

[![原文数学表达区域 7，PDF 第 2 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/36b3393da769/figure-7.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/36b3393da769/figure-7.png)

区域 7 · [查看论文原页](https://dafx26.mit.edu/assets/papers/DAFx26_paper_47.pdf#page=2)

[![原文数学表达区域 8，PDF 第 2 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/36b3393da769/figure-8.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/36b3393da769/figure-8.png)

区域 8 · [查看论文原页](https://dafx26.mit.edu/assets/papers/DAFx26_paper_47.pdf#page=2)

[![原文数学表达区域 9，PDF 第 2 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/36b3393da769/figure-9.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/36b3393da769/figure-9.png)

区域 9 · [查看论文原页](https://dafx26.mit.edu/assets/papers/DAFx26_paper_47.pdf#page=2)

[![原文数学表达区域 10，PDF 第 2 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/36b3393da769/figure-10.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/36b3393da769/figure-10.png)

区域 10 · [查看论文原页](https://dafx26.mit.edu/assets/papers/DAFx26_paper_47.pdf#page=2)

[![原文数学表达区域 11，PDF 第 2 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/36b3393da769/figure-11.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/36b3393da769/figure-11.png)

区域 11 · [查看论文原页](https://dafx26.mit.edu/assets/papers/DAFx26_paper_47.pdf#page=2)

[![原文数学表达区域 12，PDF 第 2 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/36b3393da769/figure-12.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/36b3393da769/figure-12.png)

区域 12 · [查看论文原页](https://dafx26.mit.edu/assets/papers/DAFx26_paper_47.pdf#page=2)

[![原文数学表达区域 13，PDF 第 2 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/36b3393da769/figure-13.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/36b3393da769/figure-13.png)

区域 13 · [查看论文原页](https://dafx26.mit.edu/assets/papers/DAFx26_paper_47.pdf#page=2)

[![原文数学表达区域 14，PDF 第 2 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/36b3393da769/figure-14.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/36b3393da769/figure-14.png)

区域 14 · [查看论文原页](https://dafx26.mit.edu/assets/papers/DAFx26_paper_47.pdf#page=2)

[![原文数学表达区域 15，PDF 第 2 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/36b3393da769/figure-15.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/36b3393da769/figure-15.png)

区域 15 · [查看论文原页](https://dafx26.mit.edu/assets/papers/DAFx26_paper_47.pdf#page=2)

[![原文数学表达区域 16，PDF 第 2 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/36b3393da769/figure-16.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/36b3393da769/figure-16.png)

区域 16 · [查看论文原页](https://dafx26.mit.edu/assets/papers/DAFx26_paper_47.pdf#page=2)

[![原文数学表达区域 17，PDF 第 2 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/36b3393da769/figure-17.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/36b3393da769/figure-17.png)

区域 17 · [查看论文原页](https://dafx26.mit.edu/assets/papers/DAFx26_paper_47.pdf#page=2)

[![原文数学表达区域 18，PDF 第 2 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/36b3393da769/figure-18.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/36b3393da769/figure-18.png)

区域 18 · [查看论文原页](https://dafx26.mit.edu/assets/papers/DAFx26_paper_47.pdf#page=2)

[![原文数学表达区域 19，PDF 第 2 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/36b3393da769/figure-19.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/36b3393da769/figure-19.png)

区域 19 · [查看论文原页](https://dafx26.mit.edu/assets/papers/DAFx26_paper_47.pdf#page=2)

[![原文数学表达区域 20，PDF 第 3 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/36b3393da769/figure-20.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/36b3393da769/figure-20.png)

区域 20 · [查看论文原页](https://dafx26.mit.edu/assets/papers/DAFx26_paper_47.pdf#page=3)

[![原文数学表达区域 21，PDF 第 3 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/36b3393da769/figure-21.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/36b3393da769/figure-21.png)

区域 21 · [查看论文原页](https://dafx26.mit.edu/assets/papers/DAFx26_paper_47.pdf#page=3)

[![原文数学表达区域 22，PDF 第 3 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/36b3393da769/figure-22.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/36b3393da769/figure-22.png)

区域 22 · [查看论文原页](https://dafx26.mit.edu/assets/papers/DAFx26_paper_47.pdf#page=3)

[![原文数学表达区域 23，PDF 第 3 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/36b3393da769/figure-23.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/36b3393da769/figure-23.png)

区域 23 · [查看论文原页](https://dafx26.mit.edu/assets/papers/DAFx26_paper_47.pdf#page=3)

[![原文数学表达区域 24，PDF 第 3 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/36b3393da769/figure-24.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/36b3393da769/figure-24.png)

区域 24 · [查看论文原页](https://dafx26.mit.edu/assets/papers/DAFx26_paper_47.pdf#page=3)

[![原文数学表达区域 25，PDF 第 3 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/36b3393da769/figure-25.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/36b3393da769/figure-25.png)

区域 25 · [查看论文原页](https://dafx26.mit.edu/assets/papers/DAFx26_paper_47.pdf#page=3)

[![原文数学表达区域 26，PDF 第 3 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/36b3393da769/figure-26.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/36b3393da769/figure-26.png)

区域 26 · [查看论文原页](https://dafx26.mit.edu/assets/papers/DAFx26_paper_47.pdf#page=3)

[![原文数学表达区域 27，PDF 第 3 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/36b3393da769/figure-27.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/36b3393da769/figure-27.png)

区域 27 · [查看论文原页](https://dafx26.mit.edu/assets/papers/DAFx26_paper_47.pdf#page=3)

[![原文数学表达区域 28，PDF 第 3 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/36b3393da769/figure-28.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/36b3393da769/figure-28.png)

区域 28 · [查看论文原页](https://dafx26.mit.edu/assets/papers/DAFx26_paper_47.pdf#page=3)

[![原文数学表达区域 29，PDF 第 3 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/36b3393da769/figure-29.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/36b3393da769/figure-29.png)

区域 29 · [查看论文原页](https://dafx26.mit.edu/assets/papers/DAFx26_paper_47.pdf#page=3)

[![原文数学表达区域 30，PDF 第 3 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/36b3393da769/figure-30.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/36b3393da769/figure-30.png)

区域 30 · [查看论文原页](https://dafx26.mit.edu/assets/papers/DAFx26_paper_47.pdf#page=3)

[![原文数学表达区域 31，PDF 第 3 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/36b3393da769/figure-31.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/36b3393da769/figure-31.png)

区域 31 · [查看论文原页](https://dafx26.mit.edu/assets/papers/DAFx26_paper_47.pdf#page=3)

[![原文数学表达区域 32，PDF 第 3 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/36b3393da769/figure-32.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/36b3393da769/figure-32.png)

区域 32 · [查看论文原页](https://dafx26.mit.edu/assets/papers/DAFx26_paper_47.pdf#page=3)

另有 76 个候选区域因边界不明确或图片数量、尺寸限制未展开；请[查看完整论文](https://dafx26.mit.edu/assets/papers/DAFx26_paper_47.pdf)中的原始排版。

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。
- 评分规则：type-aware-v1
- 评分模型：muse-spark-1.3-contributor
- 评分请求协议：openai_responses

---

[← 返回 dafx-2026 论文汇总](/posts/conference-dafx-2026/)
