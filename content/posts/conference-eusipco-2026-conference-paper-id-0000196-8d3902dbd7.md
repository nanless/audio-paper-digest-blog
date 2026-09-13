---
title: "AN RLS ALGORITHM USING IMPULSE RESPONSE DECOMPOSITION AND VARIABLE FORGETTING FACTORS"
date: 2026-09-13
draft: false
description: "针对长回声路径辨识问题，论文把长度为 L 的脉冲响应拆成两个短分量滤波器并为各自设计可变遗忘因子，在网络与声学回声消除仿真中报告了比固定遗忘因子 RLS-NKP 更低失调与更快跟踪，但未给出失调数值的表格且依赖对角协方差等简化假设。"
tags: ["自适应滤波", "语音", "回声消除"]
categories: ["eusipco-2026 论文"]
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_paper_id: "conference:eusipco:2026:conference-paper-id:0000196"
paper_digest_source_kind: conference
paper_digest_conference_id: "eusipco-2026"
paper_digest_conference_record_url: "https://eurasip.org/Proceedings/Eusipco/Eusipco2026/HTML/session-index/index.html"
paper_digest_conference_pdf_url: "https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0000196.pdf"
paper_digest_api_reader_contract: "beginner-researcher-v3"
paper_digest_api_reader_article_sha256: "5fdb09e49c6050418469a74f67b3fcbc50a1c089cdbed9e4b72261ec79e7eca8"
paper_digest_api_reader_plan_sha256: "5b4363ab6b4df6482bed6c3b9ad6ffbaddb559c61c638abf9c617919ece98cc3"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings-v4"
paper_digest_api_reader_source_bindings_sha256: "fc294300d5ec475bb46a7453c423d58c3302f7b5e8d12eead51cd917afc1c52c"
paper_digest_api_reader_source_table_count: 3
paper_digest_api_reader_source_formula_count: 0
paper_digest_api_reader_structured_artifacts_sha256: "e9e52c322fad10c5b2506a8656ef7b7902634fbca21d1d3c1a75330495fcf29a"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity-v1"
paper_digest_api_reader_author_identity_sha256: "18edf1088e0a3cbe209d966c6495bf5274e9ca5349461a4a5cd6aa843a0fe181"
paper_digest_api_reader_author_count: 4
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity-v1"
paper_digest_api_reader_resource_identity_sha256: "01bf72c1bea60e8064953fd6285b29613d8e1d3ea40f761115172da5d0affb44"
paper_digest_api_reader_resource_count: 0
paper_digest_api_reader_decision_projection: "api-reader-decision-projection-v2"
paper_digest_scoring_contract: "api-scoring-audit-v2"
paper_digest_taxonomy_contract: "paper-taxonomy-flat-tags-compat-v1"
paper_digest_taxonomy_selection_contract: "paper-taxonomy-selection-v1"
paper_digest_taxonomy_registry_version: "paper-taxonomy-v1"
paper_digest_taxonomy_registry_sha256: "15c82a567ce5a55dc1175684ed08b64c158558639d9c8fb822c9587ec32a8778"
paper_digest_taxonomy_concepts: [{"facet":"method","id":"method.adaptive-filtering","label":"自适应滤波"},{"facet":"signal","id":"signal.speech","label":"语音"},{"facet":"task","id":"task.echo-cancellation","label":"回声消除"}]
paper_digest_primary_task: "回声消除"
paper_digest_primary_method: "自适应滤波"
paper_digest_score: 4.8
paper_digest_rank_bucket: "后50%"
paper_digest_document_type: "方法研究"
paper_digest_conference_structure: replayable-pdf-layout-v1
---

# 📄 长脉冲响应拆成两个短滤波器：RLS-NKP 如何用两个可变遗忘因子兼顾精度与跟踪

> 英文题目：*AN RLS ALGORITHM USING IMPULSE RESPONSE DECOMPOSITION AND VARIABLE FORGETTING FACTORS*

> 会议身份：`conference:eusipco:2026:conference-paper-id:0000196`


> ✅ 来源为官方会议 PDF；表格与 Figure 按原文证据绑定。PDF 公式以原页区域图片展示，未冒称作者原始 TeX。

> 会议来源：[官方记录](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/HTML/session-index/index.html) · [官方 PDF](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0000196.pdf)

标签：#自适应滤波 #语音 #回声消除

评分：**4.8/10** | 创新 1.0/2 | 技术严谨 0.8/1.5 | 实验充分 0.5/1.5 | 清晰度 0.7/1 | 影响力 0.7/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 0.8/1.5

排名：后50% | 文档类型：方法研究

## 👥 作者与机构

- Otopeleanu, Radu Andrei：机构信息未能从会议 PDF 纯文本可靠映射
- Paleologu, Constantin：机构信息未能从会议 PDF 纯文本可靠映射
- Benesty, Jacob：机构信息未能从会议 PDF 纯文本可靠映射
- Stanciu, Cristian-Lucian：机构信息未能从会议 PDF 纯文本可靠映射

## 📌 核心摘要

输入是远端参考语音经长回声路径与加性噪声形成的期望信号，输出是对数百至上千抽头脉冲响应的在线估计，难点在于常规递归最小二乘参数空间庞大导致计算沉重且精度与跟踪难以兼顾。方法链分三步：先将长响应重排为矩阵并用最近克罗内克积近似为P组短滤波器的克罗内克和，使参数量大幅压缩，为双线性优化提供结构，前一步的分解结构直接决定后两步的输入维度。接着基于双线性最小二乘推导基本型RLS-NKP更新，将遗忘因子显式保留在协方差递推中，输出的先验误差与卡尔曼增益进入可变因子推导。最后令后验误差功率等于噪声功率并引入输入白化与对角近似，解出共用时变参数并映射为两个可变遗忘因子。与固定遗忘因子RLS-NKP的关键差异是遗忘强度随误差功率比自动调节，稳态时趋近于1保证精度，突变时减小以加速跟踪，无需额外门限控制。在声学回声消除评测设置下，图2(c)场景条件的ENR指标为15dB，高于图2(d)场景条件的ENR指标的10dB。该结论适用边界受限于低秩稀疏回声路径与单次突变验证，尚未验证双讲、非平稳噪声及满秩通道等失败条件。原文披露的计算量与常规RLS-NKP同阶，仅额外增加常数级运算，推理开销未显著增加。

## 🔗 开源与复现资源

本次未形成可展示的已核验资源记录，开放状态尚未核实。
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 输入是什么，目标是什么，本文要解决什么困难？

本文的输入是参考信号模型给出的期望信号、输入信号向量与加性噪声。论文把离散时刻 n 的期望信号写成未知系统脉冲响应 h 与输入向量 x(n) 的内积再加噪声 v(n)，其中 h 有 L 个系数，x(n) 汇集最近 L 个输入样点，v(n) 与 x(n) 不相关且序列按零均值实数处理。自适应滤波器的目标是用同一输入 x(n) 驱动一个估计脉冲响应 bh(n)，使其逐步接近 h。

目标读者需要先保留的关键信息是：回声消除中的 L 可以达到数百到上千，直接用常规递归最小二乘算法会同时遇到收敛变慢、跟踪变差与计算量过大的问题。论文的目标不是提出全新的回声消除系统，而是给基于最近 Kronecker 积分解的递归最小二乘算法配上可变遗忘因子，使其在系统突变时反应更快，在稳态时估计更准，且不明显增加计算量级。

本文输出是 1 篇可复述方法的解读：先讲任务与已有路线，再讲分解全景与两个分量滤波器的构造，然后讲遗忘因子如何从固定值变为时间函数，最后讲仿真条件、曲线支持的判断与未报告的边界。凡是教学举例都会标为例子，不把例子当作论文的实测数字。

### 已有路线有哪些，本文站在哪一条线上？

第一条线是常规递归最小二乘算法及其快速低复杂度版本。论文承认递归最小二乘收敛性能好，但计算量大，即使快速版本在面对很长的自适应滤波器时仍有性能局限。这条线对应一个长滤波器、一个遗忘因子的做法，遗忘因子越大估计越准但跟踪越慢。

第二条线是基于 Kronecker 积的分解决辨识。论文引用了把向量 h 重排成 L1 行 L2 列矩阵 H 的做法，若该矩阵近似秩 P 小于 L2，则 h 具有低秩特性，可写成 P 个 Kronecker 积之和。已有工作 RLS-NKP 正是沿这条线把长滤波器换成两个短滤波器组合，从而减少系数个数、降低复杂度并改善收敛与跟踪。论文还列出该分解在反馈消除、非线性样条滤波、子带自适应、波束形成、主动噪声控制等方向的扩展，说明分解本身是通用降参手段。

第三条线是可变遗忘因子。论文特别引用一种非参数可变遗忘因子递归最小二乘算法，特点是实现简单、不需要额外阈值判决。本文站在第二条线与第三条线的交点上：保留 RLS-NKP 的分解结构，借用第三条线中用误差功率与噪声功率关系推导遗忘因子的思路，但要为两个分量滤波器分别给出随时间变化的遗忘因子。

### 为什么长滤波器加固定遗忘因子不够用？

问题可以沿一个样本走一遍来理解。某时刻输入向量进入系统，真实回声是 h 与该向量的内积加噪声，自适应滤波器用旧系数给出预测，两者相减得到先验误差。若滤波器很长，每一步要更新的系数很多，固定遗忘因子相当于用固定长度的记忆窗平均历史误差：窗太长则对突变反应迟钝，窗太短则稳态抖动大。

在回声消除中困难被放大。网络回声路径相对稀疏但仍有 512 阶，声学路径达到 1024 阶且稀疏性较弱，输入是语音这种非平稳、有相关性的信号，路径还会在仿真中途整体右移 8 个样点以考核跟踪。若只用一个固定遗忘因子，读者需要在精度与跟踪之间一次性折中，无法在突变时刻自动缩短记忆、在稳态自动延长记忆。

因此论文把问题定义为：在保持分解降参优势的前提下，如何用简单、可在线计算的规则，让两个分量滤波器各自的遗忘因子随误差状态自动变化。约束是不能引入复杂的阈值机制，不能把计算复杂度提高一个量级。

### 方法全景：一个样本如何走完分解与更新？

沿一个样本 n 的流程是：输入 x(n) 与期望 d(n) 到达后，算法先用上一时刻的两个分量滤波器构造两个等效输入 x1(n) 与 x2(n)，再用两种等价形式计算同一个先验误差 e(n)，然后更新误差功率估计与公共参数 alpha(n)，进而得到本时刻的两个遗忘因子，最后用类卡尔曼增益更新两个分量滤波器，必要时再 Kronecker 合成回长度 L 的总脉冲响应。

这里的表示很关键。总估计 bh(n) 不是直接存储的 L 个抽头，而是存两组短系数并按 P 组 Kronecker 积求和得到。等效输入的构造把另一组分量的当前估计编入输入中，使得长卷积可以写成关于 bh2 的线性函数，也可以写成关于 bh1 的线性函数，从而交替求解。

**最近 Kronecker 积分解 × 双线性策略：** 最近 Kronecker 积分解负责把长向量 h 重排成矩阵 H 并用 P 个 Kronecker 积之和近似它，从而把参数空间从 L 降到 P 乘 L1 加 P 乘 L2；双线性策略负责在优化时轮流固定其中一个分量滤波器而更新另一个，使两个最小二乘代价函数各自可解；二者搭配的原因是分解只给出结构而没有给出交替求解顺序，双线性策略正好补上可操作的更新顺序，组合意义是得到两个短的 RLS 滤波器交替工作，既降低计算量又保留对低秩回声路径的表达能力。

目标与输出也很明确。优化目标是两个加权最小二乘代价函数，分别以 lambda2 与 lambda1 加权历史平方误差；输出是更新后的 bh2(n) 与 bh1(n)，以及按需合成的 bh(n)。可变遗忘因子的作用是控制这两个代价中历史误差的权重随时间变化，突变时更重视新数据，稳态时更重视长期平均。

### 两个分量滤波器各自算什么，如何配合？

论文用表格符号定义了 bh2(n) 与 bh1(n) 的堆叠方式。bh2(n) 把 P 个长度 L2 的子向量纵向堆成 P 乘 L2 维，bh1(n) 把 P 个长度 L1 的子向量堆成 P 乘 L1 维。以网络实验为例，L 等于 512，取 L1 等于 32、L2 等于 16，若 P 等于 3，则两个分量长度分别为 48 与 96，远小于 512；以声学实验为例，L 等于 1024，取 L1 与 L2 均为 32，若 P 等于 12，则两个分量长度分别为 384，同样是把一个长问题拆成两个短问题。

**分量滤波器 bh2 × 分量滤波器 bh1：** 分量滤波器 bh2 负责长度为 P 乘 L2 的那一组系数，其输入 x1(n) 由另一分量 bh1(n-1) 与原始输入 x(n) 构造而来；分量滤波器 bh1 负责长度为 P 乘 L1 的另一组系数，其输入 x2(n) 由 bh2(n-1) 与 x(n) 构造而来；二者搭配的原因是原始长卷积被改写成两种等价的线性形式 e(n) 等于 d(n) 减去 bh2 转置乘 x1，也等于 d(n) 减去 bh1 转置乘 x2，组合意义是每次只需更新一个短 RLS 滤波器，最终 Kronecker 合成回长度 L 的总估计 bh(n)。

配合机制是双线性固定一方、优化另一方。求 bh2 时把 bh1 看作已知并编入 x1，求 bh1 时把 bh2 看作已知并编入 x2，由此得到两组法方程。论文先推导一个基础形式：法方程左乘逆矩阵后得到 bh2(n) 等于 bh2(n-1) 加 R1 逆乘 x1 再乘 e(n)，bh1 侧对称成立。这种写法把遗忘因子的影响藏进 R1(n) 与 R2(n) 的递推中，为后面推导可变遗忘因子留出清晰的切入点。

需要提醒初学者：x1 与 x2 不是原始语音的简单分段，而是依赖对方分量估计的时变等效输入，因此两个后验误差并不相等，这是后文分别写出两个约束条件的原因。

### 可变遗忘因子如何从误差功率算出来？

论文把遗忘因子参数化为 1 减 alpha 除以分量长度的形式。对 bh2 侧分母是 P 乘 L2，对 bh1 侧分母是 P 乘 L1，待求的是随时间变化的 alpha2(n) 与 alpha1(n)。这种参数化沿用了与滤波器长度成反比的经验规则，使长短滤波器自动获得不同量级的遗忘强度。

**遗忘因子 × 可变遗忘因子：** 遗忘因子负责在最小二乘代价中按指数加权淡化历史误差，取值越大记忆越长、估计越稳但跟踪越慢；可变遗忘因子负责让该记忆长度随时间变化，在收敛初期或系统突变时取小值以加快跟踪，在稳态时取接近 1 的大值以提高精度；二者搭配的原因是固定值无法同时满足两种阶段的需求，组合意义是用后验误差功率与噪声功率之比在线计算 alpha(n)，再映射到两个分量滤波器的 lambda2(n) 与 lambda1(n)。

推导的操作链是：先写出两个后验误差，即用更新后系数计算的残差，它们等于先验误差乘以 1 减 2 次型修正项；再施加辨识中的合理要求，即后验误差功率应恢复出噪声方差；然后对 R1 与 R2 取期望并假设遗忘因子确定性时变，得到逆矩阵近似与期望输入协方差的关系；最后在输入协方差近似对角、分量系数能量可分离等简化下，把 2 次型化为与 P、L、alpha 相关的标量，得到关于 alpha 的 2 次方程。

**先验误差 × 后验误差：** 先验误差负责用上一时刻滤波器系数对当前输入做预测并驱动 RLS 增益更新，分量形式为 d(n) 减去 bh2(n-1) 与 x1(n) 的内积；后验误差负责用更新后的系数重新计算残差并作为设计可变遗忘因子的约束目标，论文要求其功率等于噪声方差；二者搭配的原因是前者是算法每步真正能算出的驱动信号，后者是希望达到的理想状态，组合意义是通过两者之间的解析关系反推出遗忘因子应满足的 2 次方程，从而把不可直接观测的跟踪需求转化为可计算的误差功率比。

方程的有效解被化简为 alpha(n) 等于 1 减噪声标准差除以误差标准差。实际中两者都用误差信号递推估计：误差方差用较快平滑系数 beta 等于 1 减 1 除以 L，噪声方差用更慢的 gamma 等于 1 减 1 除以 eta 乘 L，eta 远大于 1，再把比值限幅到 0 到 1 之间。论文强调稳态时比值接近 1 从而 alpha 接近 0、遗忘因子接近 1 以保证精度；收敛初期或突变时比值变小从而 alpha 变大、遗忘因子变小以加快跟踪，且全程不需要额外阈值判决。

### 本研究训练了什么，没有训练什么？

本研究没有神经网络训练阶段，也没有学习率、批量、轮数、梯度反传路径需要报告。两个分量滤波器不是通过离线训练得到的权重，而是按在线自适应滤波规则逐样点更新的参数。初始化按表格给出：各子滤波器首系数置 1 其余置 0，逆相关矩阵初始化为对角阵，误差与噪声功率估计初始化为 0。

真实计算过程是仿真驱动的递推。每来一个语音样点，算法构造等效输入、计算先验误差、更新功率估计与遗忘因子、计算卡尔曼增益向量、更新逆矩阵与滤波器系数。若应用需要总脉冲响应，再从分量中抽出各子向量做 Kronecker 合成。论文明确给出额外开销：可变遗忘因子部分只增加常数次乘加，不改变与 P 乘 L1 与 P 乘 L2 平方项成正比的复杂度量级。

缺项需要如实指出：论文未报告双讲、非高斯噪声或实测装置延迟下的行为，未说明 delta 初始化常数与 epsilon 小常数的具体取值，未给出停止准则，因为自适应滤波是持续运行而非按轮次收敛。这些不是技术错误，而是复现时需要自行补齐的运行条件。

### 仿真在什么条件下测什么，与谁公平对比？

论文要回答的问题是分解加可变遗忘因子是否同时改善精度与跟踪。测量对象是归一化失调随时间的变化，定义为估计误差范数与真实范数之比取 20 倍对数，越小越好。公平条件包括同一输入语音、同一回声路径、同一回声噪声比，以及在相同时刻把路径右移 8 个样点以制造突变。输入是 8 千赫采样率的含噪语音序列，期望侧叠加白高斯噪声。

### 主结果：在相同条件下谁的失调更低、恢复更快？

网络路径实验报告显示，P 等于 3 附近存在明显性能分界，矩阵真实秩为 3，这支持了低秩假设。固定 P 等于 3 并比较不同 eta 后，算法对该平滑参数较为稳健，论文后续取 eta 等于 30。与使用固定遗忘因子的 RLS-NKP 相比，可变版本在相同 P 下报告了更低失调与更快跟踪。与不做分解的单滤波器可变遗忘因子算法相比，分解版本因使用两个短滤波器而在该低秩场景下报告了更低失调、更快跟踪与更低复杂度。

声学路径实验报告显示，P 需要增大到 12 左右才合适，论文指出这类场景 P 常在 L2 的三分之一到二分之一之间。与固定遗忘因子版本相比，可变版本在精度与跟踪两方面都占优。在回声噪声比降到 15 与 10 分贝时，分解类算法因使用秩近似而稳态精度略逊于不分解的可变遗忘因子算法，但跟踪行为更好，综合折中仍偏向所提方法。

**归一化失调 × 回声噪声比：** 归一化失调负责度量估计脉冲响应与真实脉冲响应的相对距离，定义为 20 倍对数下的误差范数比，越小表示辨识越准；回声噪声比负责描述仿真难度，即回声信号方差与加性噪声方差之比，论文多用 20 分贝并下探到 15 与 10 分贝；二者搭配的原因是同一失调数值在不同噪声下含义不同，必须放在同一回声噪声比下比较才公平，组合意义是论文用固定回声噪声比下的失调曲线对比精度，用路径突变后的恢复速度对比跟踪能力。

下面先整理两组实验的冲激响应长度与分解维度设置，以固定后续关于秩选择与跟踪对比的讨论基准。

| 实验对象 | 冲激响应长度 L | 分解参数 L1 | 分解参数 L2 | 回声噪声比 ENR |
| --- | --- | --- | --- | --- |
| 网络冲激响应(i) | 512 | 32 | 16 | 20 dB |
| 声学冲激响应(ii) | 1024 | 32 | 32 | 20 dB |

该表整理了网络与声学两组路径的长度与分解设置来源句，同一回声噪声比条件保证了后续比较秩选择与跟踪行为时的基准一致，分解维度的差异对应了稀疏与近满秩 2 种不同低秩程度。

下面整理所提可变遗忘因子版本在两组场景下的秩与平滑参数取值，以及参与对比的固定遗忘因子与单滤波器版本的对应设置。

| 算法配置 | 近似秩 P | 平滑参数 eta | 遗忘因子参数 kappa | 对比算法 |
| --- | --- | --- | --- | --- |
| RLS-NKP-VFFs 网络场景 | 3 | 30 | — | RLS-NKP；VFF-RLS |
| RLS-NKP-VFFs 声学场景 | 12 | 30 | 30 | RLS-NKP；VFF-RLS |

该表把来源中的主结果数值按原文证据句整理，数值和方向只适用于当前验证条件，不能外推到其他数据，秩增大对应声学路径更弱的稀疏性而平滑参数保持一致。

### 哪些参数真正影响结论，拿掉会发生什么？

论文实际做了两类参数扫描，可视为消融。其一是分解阶数 P。网络路径下 P 从小到大扫描时性能先改善后趋平，P 等于 3 与真实秩对应；声学路径下 P 取 10、12、14 时性能随 P 增大而改善，P 等于 12 被选为合适折中。这说明 P 不是越大越好，而是要与矩阵近似秩匹配，过小欠拟合结构，过大增加参数与计算。

其二是噪声平滑参数 eta 与固定遗忘因子中的 kappa。eta 用于估计噪声方差，论文测试不同 eta 后认为算法较为稳健；kappa 用于调节固定基线的遗忘强度，不同 kappa 给出精度与跟踪的不同折中，而可变版本被报告为超越了这条折中曲线。需要强调：论文没有做拿掉分解只留单滤波器的严格消融之外的结构消融，也没有报告去掉限幅或去掉慢平滑后是否发散，因此不能从名称推定每个部件的必要性。

| 来源证据 | 量化值一 | 量化值二 | 量化值三 | 量化值四 |
| --- | --- | --- | --- | --- |
| 来源句一 | 1 | 3 | — | — |
| 来源句二 | 12 | — | — | — |
| 来源句三 | 30 | 12 | 15 dB | 10 dB |

该表整理的是论文明确给出的参数扫描取值，P 等于 3 对应网络路径矩阵秩，声学路径 P 等于 12 为折中选择，eta 等于 30 用于噪声方差平滑，ENR 取 20 dB、15 dB 与 10 dB 用于对比不同噪声条件，表中短横表示该来源句未给出对应量化值。

### 简化假设在哪里，结论的适用条件是什么？

论文为得到简单的遗忘因子公式使用了较强的简化。包括输入协方差近似对角、期望输入协方差可分解为分量能量与输入方差之积、2 次型用维度与方差的乘积近似、遗忘因子在取期望时视为确定性时变。这些近似只用于推导公共参数 alpha，不改变 R1 与 R2 中保留的完整输入信息，但意味着公式在强相关语音输入下的严格最优性未经证明，论文报告的应理解为有限解释而非理论保证。

数据与评估的限制也要讲清。仿真只用两条路径、语音输入与白高斯噪声，突变方式是整体右移 8 个样点，不能推广到任意时变路径。性能只用归一化失调曲线评价，未测量误判率、延迟、每样点耗时或硬件预算，因此不能承诺这些量得到改善。原文没有提供失调数值的表格，像素也未随本次输入提供，任何对曲线具体分贝值或收敛步数的精确引用都属于无源猜测。

适用条件可总结为：当脉冲响应经重排后近似低秩、可用短分量组合表达，且需要在突变跟踪与稳态精度之间自动折中时，该方法值得尝试；当路径接近满秩且稳态精度是唯一目标时，不分解的长滤波器可能更直接。

### 若要复现，应先做什么，先固定哪些条件？

复现的第一步是重建信号与评价框架，而不是直接调遗忘因子。准备 8 千赫语音作为输入，取长度 512 的网络路径与长度 1024 的声学路径，按 L1 与 L2 做重排，设定回声噪声比为 20 分贝为主并保留 15 与 10 分贝的低噪比检查，在固定时刻把路径右移 8 个样点，用归一化失调记录全程。

第二步是实现基础分解算法。按堆叠规则构造 x1 与 x2，用两种等价形式计算同一先验误差，用矩阵求逆引理实现逆矩阵与卡尔曼增益的递推，先用固定遗忘因子跑通并用 kappa 扫描得到基线折中曲线。这一步能验证分解、双线性更新与评价链路是否正确。

第三步再加入可变遗忘因子。用 beta 等于 1 减 1 除以 L 更新误差功率，用 gamma 等于 1 减 1 除以 eta 乘 L 更新噪声功率，eta 先取 30，计算 alpha 并限幅到 0 到 1，再映射到两个遗忘因子。复现时应记录 P、eta、kappa、回声噪声比与突变时刻，缺失的 delta 与 epsilon 取很小的正数并如实报告。资源状态方面，本次未发现来源绑定且完成验证的代码与数据资源，不得声称代码或模型已公开。

### 何时值得尝试，还需补哪项验证？

值得尝试的情形有 3 类。一是回声路径很长但重排矩阵秩明显小于维度，希望用两个短滤波器降低计算与加速跟踪；二是不愿为固定遗忘因子反复试凑折中，希望用误差功率比自动调节记忆长度；三是已有 RLS-NKP 实现，希望以常数级额外开销获得可变遗忘能力。本文的价值在于把复杂的双遗忘因子设计化简为一个公共 alpha 的估计与限幅，工程上易于接入。

常见误解需要澄清。可变遗忘因子不等于每步都更快，它在稳态会主动把遗忘因子推向接近 1，刻意放慢更新以换取精度；分解不等于无损压缩，在声学这类弱稀疏路径下秩近似本身会带来稳态损失；无神经网络训练不等于系统输出确定，语音输入与噪声的随机性仍会使每次运行的曲线有波动。

还需补充的验证包括：在双讲与非平稳噪声下的稳健版本、不同语音与不同突变方式下的重复性、以及每样点运算量与实际延迟的测量。只有补齐这些，才能把曲线上的折中优势转化为可部署的收益判断。

## 📐 原文公式与排版

以下展示论文原页中的数学表达区域，保留原始上下标、分式和符号排版。区域序号仅用于本文导航，不是论文公式编号。

[![原文数学表达区域 1，PDF 第 2 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/75496795d0f3/figure-1.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/75496795d0f3/figure-1.png)

区域 1 · [查看论文原页](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0000196.pdf#page=2)

[![原文数学表达区域 2，PDF 第 2 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/75496795d0f3/figure-2.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/75496795d0f3/figure-2.png)

区域 2 · [查看论文原页](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0000196.pdf#page=2)

[![原文数学表达区域 3，PDF 第 2 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/75496795d0f3/figure-3.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/75496795d0f3/figure-3.png)

区域 3 · [查看论文原页](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0000196.pdf#page=2)

[![原文数学表达区域 4，PDF 第 2 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/75496795d0f3/figure-4.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/75496795d0f3/figure-4.png)

区域 4 · [查看论文原页](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0000196.pdf#page=2)

[![原文数学表达区域 5，PDF 第 2 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/75496795d0f3/figure-5.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/75496795d0f3/figure-5.png)

区域 5 · [查看论文原页](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0000196.pdf#page=2)

[![原文数学表达区域 6，PDF 第 2 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/75496795d0f3/figure-6.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/75496795d0f3/figure-6.png)

区域 6 · [查看论文原页](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0000196.pdf#page=2)

[![原文数学表达区域 7，PDF 第 2 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/75496795d0f3/figure-7.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/75496795d0f3/figure-7.png)

区域 7 · [查看论文原页](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0000196.pdf#page=2)

[![原文数学表达区域 8，PDF 第 2 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/75496795d0f3/figure-8.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/75496795d0f3/figure-8.png)

区域 8 · [查看论文原页](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0000196.pdf#page=2)

[![原文数学表达区域 9，PDF 第 2 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/75496795d0f3/figure-9.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/75496795d0f3/figure-9.png)

区域 9 · [查看论文原页](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0000196.pdf#page=2)

[![原文数学表达区域 10，PDF 第 2 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/75496795d0f3/figure-10.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/75496795d0f3/figure-10.png)

区域 10 · [查看论文原页](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0000196.pdf#page=2)

[![原文数学表达区域 11，PDF 第 2 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/75496795d0f3/figure-11.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/75496795d0f3/figure-11.png)

区域 11 · [查看论文原页](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0000196.pdf#page=2)

[![原文数学表达区域 12，PDF 第 2 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/75496795d0f3/figure-12.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/75496795d0f3/figure-12.png)

区域 12 · [查看论文原页](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0000196.pdf#page=2)

[![原文数学表达区域 13，PDF 第 2 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/75496795d0f3/figure-13.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/75496795d0f3/figure-13.png)

区域 13 · [查看论文原页](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0000196.pdf#page=2)

[![原文数学表达区域 14，PDF 第 2 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/75496795d0f3/figure-14.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/75496795d0f3/figure-14.png)

区域 14 · [查看论文原页](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0000196.pdf#page=2)

[![原文数学表达区域 15，PDF 第 2 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/75496795d0f3/figure-15.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/75496795d0f3/figure-15.png)

区域 15 · [查看论文原页](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0000196.pdf#page=2)

[![原文数学表达区域 16，PDF 第 2 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/75496795d0f3/figure-16.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/75496795d0f3/figure-16.png)

区域 16 · [查看论文原页](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0000196.pdf#page=2)

[![原文数学表达区域 17，PDF 第 2 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/75496795d0f3/figure-17.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/75496795d0f3/figure-17.png)

区域 17 · [查看论文原页](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0000196.pdf#page=2)

[![原文数学表达区域 18，PDF 第 2 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/75496795d0f3/figure-18.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/75496795d0f3/figure-18.png)

区域 18 · [查看论文原页](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0000196.pdf#page=2)

[![原文数学表达区域 19，PDF 第 2 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/75496795d0f3/figure-19.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/75496795d0f3/figure-19.png)

区域 19 · [查看论文原页](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0000196.pdf#page=2)

[![原文数学表达区域 20，PDF 第 2 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/75496795d0f3/figure-20.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/75496795d0f3/figure-20.png)

区域 20 · [查看论文原页](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0000196.pdf#page=2)

[![原文数学表达区域 21，PDF 第 3 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/75496795d0f3/figure-21.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/75496795d0f3/figure-21.png)

区域 21 · [查看论文原页](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0000196.pdf#page=3)

[![原文数学表达区域 22，PDF 第 3 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/75496795d0f3/figure-22.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/75496795d0f3/figure-22.png)

区域 22 · [查看论文原页](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0000196.pdf#page=3)

[![原文数学表达区域 23，PDF 第 3 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/75496795d0f3/figure-23.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/75496795d0f3/figure-23.png)

区域 23 · [查看论文原页](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0000196.pdf#page=3)

[![原文数学表达区域 24，PDF 第 3 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/75496795d0f3/figure-24.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/75496795d0f3/figure-24.png)

区域 24 · [查看论文原页](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0000196.pdf#page=3)

[![原文数学表达区域 25，PDF 第 3 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/75496795d0f3/figure-25.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/75496795d0f3/figure-25.png)

区域 25 · [查看论文原页](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0000196.pdf#page=3)

[![原文数学表达区域 26，PDF 第 3 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/75496795d0f3/figure-26.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/75496795d0f3/figure-26.png)

区域 26 · [查看论文原页](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0000196.pdf#page=3)

[![原文数学表达区域 27，PDF 第 3 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/75496795d0f3/figure-27.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/75496795d0f3/figure-27.png)

区域 27 · [查看论文原页](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0000196.pdf#page=3)

[![原文数学表达区域 28，PDF 第 3 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/75496795d0f3/figure-28.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/75496795d0f3/figure-28.png)

区域 28 · [查看论文原页](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0000196.pdf#page=3)

[![原文数学表达区域 29，PDF 第 3 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/75496795d0f3/figure-29.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/75496795d0f3/figure-29.png)

区域 29 · [查看论文原页](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0000196.pdf#page=3)

[![原文数学表达区域 30，PDF 第 3 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/75496795d0f3/figure-30.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/75496795d0f3/figure-30.png)

区域 30 · [查看论文原页](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0000196.pdf#page=3)

[![原文数学表达区域 31，PDF 第 4 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/75496795d0f3/figure-31.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/75496795d0f3/figure-31.png)

区域 31 · [查看论文原页](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0000196.pdf#page=4)

[![原文数学表达区域 32，PDF 第 4 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/75496795d0f3/figure-32.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/75496795d0f3/figure-32.png)

区域 32 · [查看论文原页](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0000196.pdf#page=4)

另有 76 个候选区域因边界不明确或图片数量、尺寸限制未展开；请[查看完整论文](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0000196.pdf)中的原始排版。

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。
- 评分规则：type-aware-v1
- 评分模型：muse-spark-1.3-contributor
- 评分请求协议：openai_responses

---

[← 返回 eusipco-2026 论文汇总](/posts/conference-eusipco-2026/)
