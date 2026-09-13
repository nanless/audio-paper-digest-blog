---
title: "A Clipping Prevention Method for All-Pass Digital Filters with Time-Varying Coefficients"
date: 2026-09-13
draft: false
description: "针对一阶与二阶时变全通滤波器在系数快速变化时输出超过限幅阈值的问题，论文用静态对照输出加系数增量界把输出约束在阈值内，正弦与音乐片段实验显示其在标准结构和能量保持结构各自削波的方向上均不削波，代价是短暂偏离目标系数轨迹并引入少量逐样本判断与除法运算。"
tags: ["自适应滤波", "端侧运行", "实时处理", "去削波"]
categories: ["dafx-2026 论文"]
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_paper_id: "conference:dafx:2026:conference-paper-id:DAFx26_paper_45"
paper_digest_source_kind: conference
paper_digest_conference_id: "dafx-2026"
paper_digest_conference_record_url: "https://dafx26.mit.edu/program/"
paper_digest_conference_pdf_url: "https://dafx26.mit.edu/assets/papers/DAFx26_paper_45.pdf"
paper_digest_api_reader_contract: "beginner-researcher-v3"
paper_digest_api_reader_article_sha256: "ccbde031401c410adddca442d76a662249922673619503a37c2c27a37f0f9b61"
paper_digest_api_reader_plan_sha256: "34d644618681e939f59e57d4fb51e8aa101fd1c46ce9217e8348fdb0418dc473"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings-v4"
paper_digest_api_reader_source_bindings_sha256: "dd1697600310e88e997f517daa5750c98f84cb87af0d6dceedadbf3dcfd80219"
paper_digest_api_reader_source_table_count: 2
paper_digest_api_reader_source_formula_count: 0
paper_digest_api_reader_structured_artifacts_sha256: "1e0e5c074d189cb077de2c613c0f1c20a3df85b25b35deb9954de8ff4cae8a0a"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity-v1"
paper_digest_api_reader_author_identity_sha256: "94098a81b212700fbe0997b5e3e4b728db733de7017da27a0335046da1157ac1"
paper_digest_api_reader_author_count: 4
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity-v1"
paper_digest_api_reader_resource_identity_sha256: "5ca8bfd87db06dd3856cb42153ff331b71876e2785c6657397d48c1fa2991353"
paper_digest_api_reader_resource_count: 0
paper_digest_api_reader_decision_projection: "api-reader-decision-projection-v2"
paper_digest_scoring_contract: "api-scoring-audit-v2"
paper_digest_taxonomy_contract: "paper-taxonomy-flat-tags-compat-v1"
paper_digest_taxonomy_selection_contract: "paper-taxonomy-selection-v1"
paper_digest_taxonomy_registry_version: "paper-taxonomy-v1"
paper_digest_taxonomy_registry_sha256: "15c82a567ce5a55dc1175684ed08b64c158558639d9c8fb822c9587ec32a8778"
paper_digest_taxonomy_concepts: [{"facet":"method","id":"method.adaptive-filtering","label":"自适应滤波"},{"facet":"setting","id":"setting.on-device","label":"端侧运行"},{"facet":"setting","id":"setting.real-time","label":"实时处理"},{"facet":"task","id":"task.declipping","label":"去削波"}]
paper_digest_primary_task: "去削波"
paper_digest_primary_method: "自适应滤波"
paper_digest_score: 5.6
paper_digest_rank_bucket: "前50%"
paper_digest_document_type: "方法研究"
paper_digest_conference_structure: replayable-pdf-layout-v1
---

# 📄 时变全通滤波器为何会削波：把系数增量关进阈值笼子

> 英文题目：*A Clipping Prevention Method for All-Pass Digital Filters with Time-Varying Coefficients*

> 会议身份：`conference:dafx:2026:conference-paper-id:DAFx26_paper_45`


> ✅ 来源为官方会议 PDF；表格与 Figure 按原文证据绑定。PDF 公式以原页区域图片展示，未冒称作者原始 TeX。

> 会议来源：[官方记录](https://dafx26.mit.edu/program/) · [官方 PDF](https://dafx26.mit.edu/assets/papers/DAFx26_paper_45.pdf)

标签：#自适应滤波 #端侧运行 #实时处理 #去削波

评分：**5.6/10** | 创新 1.2/2 | 技术严谨 1.0/1.5 | 实验充分 0.7/1.5 | 清晰度 0.7/1 | 影响力 0.7/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 1.0/1.5

排名：前50% | 文档类型：方法研究

## 👥 作者与机构

- Federico Fontana：机构信息未能从会议 PDF 纯文本可靠映射
- Silvia Pasin：机构信息未能从会议 PDF 纯文本可靠映射
- Alberto Bernardini：机构信息未能从会议 PDF 纯文本可靠映射
- Stefano D’Angelo：机构信息未能从会议 PDF 纯文本可靠映射

## 📌 核心摘要

输入为幅度满足|x[n]|≤M的音频信号，输出为经一阶或二阶时变全通滤波器后的信号，难点在于系数快速跳变及其后瞬态会使输出冲破阈值M，而传统能量保持结构仍可能削波。该方法先用冻结系数的静态影子结构算出参考输出w[n]以分离系数增量的贡献，再由非削波条件|w[n]+τ[n]|≤M推导系数增量允许区间并在每采样步按区间截断增量，最后用修正系数计算输出，二阶时将总预算对半分给两个系数以保证三角不等式成立。与事后检测修复或压缩限幅不同，该机制直接约束系数动力学且仅在将越界时介入，平时释放系数追踪目标值，因而保留输入完整性与全通数值特性。在十秒音频基准测试设置下，二阶结构的处理时间指标为4.9ms，高于一阶结构的处理时间指标3.8ms。该结论适用边界受限于直接I型实现且输入本身不削波的情形，尚未验证其他全通拓扑与内部状态削波。C++实现的推理开销约为标准结构计算量的3倍左右。

## 🔗 开源与复现资源

本次未形成可展示的已核验资源记录，开放状态尚未核实。
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 输入是什么，输出要保证什么？

这篇论文处理的对象是数字音频链中的 1 阶与 2 阶全通滤波器。输入是一个已经保证不削波的离散时间信号，用论文记号写成对所有时刻都有输入幅值小于等于阈值。输出是经过时变全通滤波后的信号，目标是在任何时刻都不超过同一个阈值。阈值通常取单位幅度，也就是数字音频中满幅附近的界。必须保留的信息是输入本身不削波这个前提，以及上一时刻输出不削波这个递推前提，方法只保证当前时刻在系数变化下仍然不削波，不负责修复已经削波的输入。

白话先说削波，再给英文。削波 clipping 是指信号本应连续变化的波形顶部被硬截掉，听感上会出现刺耳的破音和谐波失真。限幅阈值 magnitude threshold M 是论文设定的允许幅值上界，所有判断都围绕输出幅值是否小于等于 M 展开。研究生容易误以为全通滤波器不会改变幅度所以不会削波，这个直觉只对系数固定的稳态成立。一旦系数随时间变化，差分方程的递推会把系数跳变放大为输出尖峰，即使输入远小于阈值也可能在瞬态冲过阈值。

**削波 × 限幅阈值：** 削波指离散时间信号幅值超过处理块允许范围而被截断的现象，限幅阈值 M 是论文为输入与输出共同设定的允许幅值上界，削波负责描述故障，限幅阈值负责给出判断故障的标尺，二者搭配使后文所有是否干预系数的判断都可以写成输出幅值是否小于等于 M 的形式。

全通滤波器 all-pass filter 的特点是稳态下所有频率的增益都是 1，只改变相位，常用于相位均衡、混响和参数均衡器中的构建块。时变系数 time-varying coefficients 是指滤波器系数 c 随采样序号 n 变化，例如从正 0.99 快速变到负 0.99。论文选择全通作为目标，一是它用途广，二是 1 阶只需一个系数、2 阶只需两个系数，代数可解，高阶可以通过级联 1 阶与 2 阶节实现。学习时先抓住一个样本的完整链条：输入正弦样本进入滤波器，滤波器用当前系数和过去输入输出计算当前输出，若系数跳变过大则输出可能超过 M，方法在计算输出之前先修正系数增量，再用修正后系数计算输出。

**全通滤波器 × 时变系数：** 全通滤波器指幅频响应为常数、只改变相位的滤波结构，时变系数指其系数 c(n) 随时间步变化，论文把二者结合是因为全通本应对稳态正弦不改变幅度，但系数快速变化会在瞬态引入额外增益而导致削波，因此需要专门约束系数的时间演化而不是改变滤波器稳态特性。

开场需要交代输出形式。本文最终输出是 1 篇可核对的技术解读，正文按任务依赖展开，先讲削波预防与事后修复的区别，再讲 1 阶方法的全过程，再讲 2 阶的预算拆分，再讲正弦与音乐实验的条件与对照，最后讲复现步骤与边界。所有事实只来自论文正文证据与官方原图像素，不引入外部经验数值。教学用的比方只用于帮助理解，真正性质仍以差分方程与不等式为准。

### 附录：术语与记号速查

为方便初学者回查，这里集中解释记号而不引入新结论。输入用 x 加方括号表示采样序号，输出用 y 加方括号表示，系数用 c 加圆括号表示，增量为当前目标减上一时刻值。静态对照输出用 w 表示，偏离用真实输出减静态输出表示。阈值 M 为允许幅值，论文正弦实验取 1，音乐实验取 0.99。1 阶记忆长度为一个样本，2 阶为两个样本。能量保持结构中的端口系数与 c0、c1 有换算关系，但复现提议方法不需要实现该换算，只需实现标准差分方程与钳制。

常见误解有三。一是把全通稳态增益为 1 误认为瞬态也不会放大，实际上系数跳变会通过递推产生尖峰。二是把能量保持误认为限幅保证，实际上能量相等不保证瞬时幅值不超过阈值。三是把系数被按住误认为永久失谐，实际上方法在危险过后释放系数到目标值，偏离仅持续数毫秒。抓住这三点，就能正确理解后文所有波形图中绿色曲线为何只在窄窗偏离蓝色直线，而长时趋势仍跟随目标。

### 预防和修复是两条路线，为何选直接约束系数？

论文把已有工作分成预防 prevention 与检测修复 detection 两类。预防是在输出将要超过范围之前预判并用压缩等手段平滑限幅。检测修复是在削波发生后重建波形，例如短削波段用时域样条插值、长段用邻近窗频谱重建，还有基于压缩感知、感知模型或削波引入混叠分量的频谱方法。综述指出这些方法多依赖音频信号的随机或能量模型，用来最小化原始与重建信号误差。另一条适合实时数字信号处理的路线利用稀疏性，例如在削波区附近做局部相位修改以平滑峰值，用全通滤波器实现最多约 5 分贝的峰值衰减。

本文与上述路线输入相同但目标与运行阶段不同。相同的是都处理音频削波，目标都是不让可听信号出现硬截断。不同的是事后修复允许先削波再重建，需要未来信息或迭代优化，不适合嵌入式逐样本硬实时约束。本文选择在系数更新时刻直接判断是否会削波，若会则用代数算出允许的最大变化量。这是一种非启发式的预防策略，改的是系数的时间演化，不改全通结构本身。理解这一点才能明白后文为何反复强调方法只在短瞬态激活，之后系数会被释放到目标值。

**能量保持结构 × 直接 I 型结构：** 能量保持结构指基于波数字滤波器原理、在系数变化时维持输入输出能量关系的全通实现，直接 I 型结构指显式使用过去输入与过去输出实现差分方程的结构，能量保持结构分工是抑制失稳，数值性质好但仍可能削波，直接 I 型结构分工是让论文方法能直接保证所用状态量不含削波误差，二者对照说明能量保持不能替代本文的防削波约束。

论文还引入基于波数字滤波器 Wave Digital Filter 的能量保持结构作为对照。该结构通过特定关系保证输入输出能量相等，设计初衷是避免系数运行时变化导致失稳。实验显示它在某些系数切换方向上不削波，在相反方向上反而削波，而标准直接型结构恰好相反。这说明能量保持不等于限幅保证。直接 I 型 Direct Form I 结构显式保存过去输入输出，论文方法能保证这些状态量本身不受削波污染，因此讨论部分明确说方法可安全用于直接 I 型，而其他改写形式可能存在内部削波，需要未来研究。这种对照是理解实验设计的关键：3 个结构在完全相同的输入与系数目标下比较，才能看出预防机制的独立价值。

### 附录：与相位平滑峰值方法的关系

论文提到的另一类实时方法用全通引入可控相移来分散能量峰，实现最多数分贝的峰值衰减。这与本文都用全通，但运行阶段与控制量不同。前者是在削波区附近调整相位以平滑峰值，控制的是滤波器对信号的作用强度，后者是在系数更新时刻限制系数步长，控制的是系数轨迹本身。同输入同目标下，前者需要设计相移量与同步，后者需要计算上下界。不能把两类方法的分贝数直接对比，因为输入、阈值与切换条件不同。

监督与运行阶段也不同。事后修复类多需非因果信息或迭代优化，适合离线母带，而本文每步只用当前与过去样本，适合在线效果器。引用时应按同输入、同目标、同监督、同运行阶段作对照，不把类别差异当同条件胜负。若要在自己系统中选型，可先问是否允许引入延迟与迭代，若不允许则优先考虑本文的逐样本预防，若允许离线则可叠加修复方法处理已削波素材。

### 问题如何形式化：已知什么，要求什么？

形式化需要 3 个已知和一个要求。已知一是当前输入样本与过去样本幅值受限，已知二是上一时刻输出幅值受限，已知三是用户或上层控制给出的目标系数可能很大很陡。要求是即使目标系数不合适，当前输出幅值仍不超过 M。论文不假设内部能量如何演化，只要求输入不削波，这是与能量方法的重要区别。

1 阶全通的输入输出关系是当前输出等于当前系数乘当前输入，减去上一时刻输出，再加上上一时刻输入。系数用圆括号表示时间依赖，信号用方括号表示时间依赖，这是论文记号习惯。削波判断可以直接代入该式计算。若把系数冻结在上一时刻值，可以得到一个静态对照输出，它代表不更新系数时的输出。真实输出与静态对照输出的差完全由系数增量乘以当前输入与上一输出之差决定。这个差是全文核心，因为它把是否削波转化为系数增量是否过大。

2 阶全通多了一个系数和更长的记忆，输出与当前输入、上一输入、上上输入以及过去两个输出有关。同样可以定义静态对照输出，真实输出与它的差由两个系数增量分别乘以各自的信号差之和构成。当只有一个系数变化时，问题退化为 1 阶形式。当两个系数同时变化时，一个方程解两个未知数没有唯一解，论文因此引入预算拆分思想。

例子可以帮助理解：设想输入正弦处于正峰附近，系数要在约 1 毫秒内从正边界翻到负边界，若不干预，递推会把相位突变变成幅度尖峰。方法的作用就是在每个采样点检查这个尖峰是否会超过 M，若会则把本次系数步长压小，下一样本再试，直到能安全到达目标。

### 方法全景：先算静态输出，再给增量定上下界

方法全景可以分成 4 步。第一步用上一时刻系数计算静态对照输出。第二步计算当前目标系数与上一时刻系数的原始增量。第 3 步根据信号差的符号，从非削波条件解出增量允许的下界与上界，再把原始增量钳制到界内，得到修正系数。第 4 步用修正系数计算真实输出。整个过程逐样本运行，处理时间恒定，适合嵌入式架构。

关键思想是控制时变滤波器输出与等效静态全通结构输出之间的偏离。通过在运行时自适应限制该偏离，输出被约束在阈值以下。方法只在会削波的短瞬态激活，之后系数被释放到目标值，从而保持输入信号完整性与全通数值性质。也可以把方法理解为受控地放慢系统动态，把系数变化摊薄到更长时间。

**静态对照输出 × 系数增量：** 静态对照输出 w[n] 指用上一时刻系数 c(n-1) 计算得到的假想输出，系数增量指当前目标系数与上一时刻系数的差值，静态对照输出负责给出如果不更新系数时的安全基准，系数增量负责承载本次更新带来的输出偏离，二者相加得到真实输出，搭配后论文只需限制增量引起的偏离就能保证不削波。

实现上有两个细节。第一是特殊情形处理。当 1 阶的当前输入等于上一输出时，偏离恒为零，此时全通退化为单位延迟，输出等于上一输入，由前提知不会削波，过程可跳过界计算。2 阶需要同时检查两组信号差，若都为零则退化为两个延迟级联，输出等于上上输入，同样不会削波。第二是过程每步都执行而不是只在检测到削波时执行，这是为了保证恒定处理时间，避免条件分支带来的最坏情况抖动。研究生复述时应强调这一点，否则容易误把方法当成事后限幅器。

从样本链条再走一遍有助于记忆。输入样本到达，先用旧系数算出静态输出作为安全参考，再看目标系数想走多远，若按原步长走会让真实输出偏离参考太远而超过 M，则按上下界把步长截断，用截断后系数算输出并存为下一步的旧系数与旧输出。下 1 采样重复，直到目标系数本身不再引起削波，截断自然不再起作用。

### 一阶如何算界，二阶如何分预算？

1 阶的界来自对非削波不等式求解系数增量。静态输出加上增量引起的偏离的幅值不超过 M，展开后是关于增量的一元 1 次不等式。除以信号差时不等号方向取决于信号差的正负，因此得到两组上下界表达式，分别对应信号差大于零与小于零。若信号差为零则无需计算。钳制操作是取原始增量与上下界的最小值与最大值的组合，确保修正增量落在允许区间内。论文给出算法 1，先算静态输出，再算原始增量，再按信号差符号选公式，最后更新系数并算输出。

2 阶的推导结构相同，只是偏离由两项组成。论文提出把总界一分为二，要求每一项各自不超过一半阈值。由于三角不等式保证两项和的幅值不超过各自幅值之和，满足两个一半约束就一定满足原约束。这是充分而非必要条件，换来的是计算简单。每个系数于是得到与 1 阶形式相同但阈值与静态输出都减半的界，分别按各自信号差符号钳制。算法 2 因此与 1 阶结构类似，只是需要分别处理两个系数，并在两者信号差都为零时跳过。

**削波预防预算 × 三角不等式：** 削波预防预算指 2 阶情形下把总允许偏离一分为二、让两个系数各承担一半的思想，三角不等式指用两个子项幅值之和上界控制总和幅值，预算负责把无唯一解的双变量约束拆成两个可独立求解的一元约束，三角不等式负责保证拆分后的充分性，二者组合使 2 阶预防可以用与 1 阶相同的代数形式高效求解。

论文还讨论无除法实现。若硬件没有高精度除法或除法不准，可以把不等式改写为求零函数，用二分等迭代搜索增量。举例说，1 阶正号情形下把阈值减静态输出与增量偏离之差写成函数，迭代更新增量逼近零点。这对嵌入式很重要，因为界公式含除法，而迭代只需乘加与符号判断。数值方面，论文指出当 M 取 1 时，所有量或其受限值幅度在 2 以内，即使在单步内系数从一个边界跳到相反边界，增量对输出的影响正比于其乘法因子，因此可用简单搜索替代直接除法。

稳定性方面，若原始系数序列本身满足 1 阶模小于 1 的稳定条件，修正后序列仍保证有界输入有界输出稳定，因为每步输出都被约束在 M 以内，2 阶用类似条件可得同样结论。但这只针对直接 I 型，对改写后的其他实现，内部状态可能仍削波，论文留作未来工作。

### 本研究有训练吗？实际计算过程是什么？

本研究没有神经网络训练阶段，也就没有训练集梯度更新、参数冻结解冻或早停等概念。必须明确说明这一点，避免把系数自适应误认为模型训练。这里的自适应是逐样本的代数钳制，不是基于损失的迭代优化。真实计算过程是仿真与规则执行：在给定采样率下生成或读入音频，用目标系数轨迹驱动标准全通、能量保持全通与提议方法 3 种结构，逐样本比较输出是否超过阈值，并记录修正系数轨迹。

构造部分包括 1 阶与 2 阶差分方程的实现、静态对照输出的计算、上下界的符号判断与钳制，以及 2 阶预算减半。推理部分就是实时滤波：每个采样点先算静态输出与信号差，再决定是否截断增量，最后算输出。不存在监督来源、伪标签或教师模型。重置时机也很清晰：方法没有跨长窗的状态重置，每个采样点的旧系数与旧输出就是下一步的初值，只有当信号差为零时跳过界计算，这相当于自然重置为延迟行为。

论文未报告的内容也要指出缺项。未报告学习率、优化器、批量大小，因为不适用。未报告用随机种子平均的统计显著性，实验是确定性仿真，给定输入与系数轨迹则输出确定。未报告在不同嵌入式芯片上的实测功耗与最坏中断延迟，只报告在笔记本上的平均处理时间。因此不能从无训练推定系统输出在所有实现上比特一致，浮点精度与除法实现仍会影响边界附近的钳制结果。

### 实验用什么信号、什么系数跳变、和谁比？

实验条件分 3 组。第一组是 1 阶正弦实验，所有结构运行在 48 千赫采样率，处理 100 赫兹、数字幅度 0.99 的正弦输入。在输入正峰附近约 0.5 秒处，系数在约 1 毫秒内线性变化，一种方向是从正 0.99 到负 0.99，另一种是反向。阈值 M 设为 1。比较对象是无保护的标准全通、能量保持结构与提议的预防方法，同时画出有无预防的系数轨迹。

第二组是 2 阶正弦实验，同样采样率与输入幅值，系数对从 0.98 与负 1.96 组合变到负 0.98 与 0.01 组合，或反向。阈值仍为 1。比较对象相同，系数轨迹用虚线与点划线区分两个系数。第 3 组是 2 阶音乐片段实验，采样率 44.1 千赫，阈值设为 0.99，系数在约 6.5 秒处切换，切换组合与第二组右图一致。论文还把 4 路信号存为波形文件并在 Audacity 中显示为 4 个轨道，自上而下为输入、能量保持、提议方法、标准结构，用于目视确认削波。

下面两张表把上述条件整理成可复现的配置，表格数字与单位均来自原文连续句，裸值未擅自添加单位，阈值单位为数字幅度，时间单位为秒与毫秒，频率单位为赫兹与千赫兹。

比较公平性在于三者在同一输入与同一目标系数轨迹下运行，区别只在是否干预系数或采用何种结构。指标方向很直观：输出幅值是否超过阈值，超过即削波。论文未用信噪比或听感评分，判断依赖波形是否越界与系数轨迹是否偏离。阅读时要注意纵轴是原始幅度，不是改善量，曲线向上超过 1 才是变差，不能把向下波动误读为性能下降。

| 条件 | 输入信号 | 采样率 | 阈值 M | 系数起点 | 系数终点 |
| --- | --- | --- | --- | --- | --- |
| 1 阶正弦左方向 | 100 Hz 正弦幅度 0.99 | 48 kHz | 1 | +0.99 | -0.99 |
| 1 阶正弦右方向 | 100 Hz 正弦幅度 0.99 | 48 kHz | 1 | -0.99 | +0.99 |
| 切换时长 | 正峰附近约 0.5 s 处 | 48 kHz | 1 | 约 1 ms 内线性变化 | 约 1 ms 内线性变化 |

上表提出的问题是 1 阶实验是否在相同输入与阈值下比较了相反方向的系数跳变，公平条件是采样率与输入幅度固定，指标方向是输出是否超过 1。该表显示两种方向都被测试，避免只挑对提议方法有利的方向。后文解释将说明两种方向下削波者不同，提议方法在各自削波方向上均不削波，而代价是短暂偏离直线系数轨迹。未胜出项将在结果节说明，能量保持在一侧不削波但在另一侧削波，不能替代预防。

| 条件 | 输入信号 | 阈值 M | 系数 c0 变化 | 系数 c1 变化 | 音乐验证 |
| --- | --- | --- | --- | --- | --- |
| 2 阶正弦左方向 | 100 Hz 正弦幅度 0.99 | 1 | 0.98 到 -0.98 | -1.96 到 0.01 | 无 |
| 2 阶正弦右方向 | 100 Hz 正弦幅度 0.99 | 1 | -0.98 到 0.98 | 0.01 到 -1.96 | 无 |
| 2 阶音乐片段 | 音乐片段 44.1 kHz | .99 | -.98 到.98 | .01 到 -1.96 | 约 6.5 s 处切换 |

上表提出的问题是 2 阶实验是否覆盖了双系数同时变化与真实音乐输入，公平条件是正弦部分阈值与采样率与 1 阶一致，音乐部分阈值略降为 0.99 以匹配文件电平。该表支持的判断是 2 阶需要同时约束两个系数，且音乐实验能检验非正弦下对称性假设是否仍成立。后文将解释 2 阶右方向需要较大的脉冲式系数修正，以及音乐尾段能量保持再次削波而提议方法通过微调避免的细节。未评测边界包括其他音乐风格与更长切换时长，论文未给出系统性扫描。

### 正弦实验显示了什么：谁削波，谁被按住？

1 阶正弦结果的核心是方向不对称。当前文系数从正到负变化时，标准结构削波，提议方法通过调整系数随时间的变化避免削波，能量保持结构走出不同动态且在此情形不削波。反向变化时，标准实现不削波，能量保持结构削波，预防过程不激活，对应系数轨迹保持原直线。这说明削波不是系数变化本身必然带来，而是取决于信号相位与系数跳变方向的配合。提议方法的价值在于只在会削波时干预，不会无差别放慢所有系数变化。

下图为 1 阶响应的官方原图，上面板为宽时间窗，下面板为切换附近的放大窗，左右分别为两种切换方向，图例区分输入、无保护标准、能量保持、提议方法以及修正前后系数。

> **看图路径：** 1. 先看左上与右上面板中黑色输入正弦与蓝色无保护输出的相对位置，确认哪一侧系数切换导致蓝色超过 1；2. 再看绿色提议方法输出是否始终贴着 1 的水平线而不上冲；3. 对比红色能量保持结构在哪一侧出现尖峰，确认其与蓝色削波方向相反；4. 最后看下面板虚线系数轨迹，确认绿色修正系数在削波段偏离蓝色直线目标后又回到目标值

[![原论文 Figure 1：Plots (above) and x-axis zoomed versions (below) of the response to a 100 Hz sinusoidal input at…](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/c870aa07a3c4/figure-1.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/c870aa07a3c4/figure-1.png)

*论文图 1。原论文 Figure 1：“Plots (above) and x-axis zoomed versions (below) of the response to a 100 Hz sinusoidal input at 48 kHz with digital amplitude .99 (black line) of an all-pass block realized…”。*

从像素可见，左上蓝色标准输出在切换后明显拱起超过 1，而绿色提议输出贴着 1 的水平段后平滑下降，红色能量保持则先下探再回升，未超过阈值。右上红色能量保持出现超过 1.5 的窄尖峰，而蓝色与绿色几乎重合在 1 附近。下面的放大面板进一步显示蓝色虚线系数目标为直线斜坡，绿色虚线修正系数在削波段偏离直线，呈平台或延迟到达目标的形态。这支持论文的解释：预防通过暂时偏离目标轨迹把输出按住，偏离仅持续数毫秒，之后释放到目标值。需要强调的是像素不能精确读出每个采样点的数值，上述幅度判断以是否越过 1 的网格线为准，不硬写小数点后数值。

2 阶正弦结果有相似但更复杂。左方向与 1 阶前者类似，标准结构削波，提议方法按住。右方向标准结构削波，需要相对较大、脉冲式的系数修正才能防止削波，且修正有利于平滑后续输出。能量保持在右方向出现更大幅度振荡，多次越界。下图为 2 阶响应的官方原图，面板布局与 1 阶对应，但系数用两种线型区分。

> **看图路径：** 1. 先看上面板左右两种系数切换方向下蓝色标准输出与绿色提议输出的峰值差异；2. 再看右上振荡段红色能量保持输出的多个超过 1 的尖峰与绿色平滑轨迹的对比；3. 观察下面板虚线与点划线表示的 c0 与 c1 目标轨迹在 0.502 秒到 0.503 秒附近的斜坡；4. 确认绿色修正系数在右下出现的小脉冲毛刺对应预防机制的主动干预时刻

[![原论文 Figure 2：Plots (above) and x-axis zoomed versions (below) of the response to a 100 Hz sinusoidal input at…](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/c870aa07a3c4/figure-2.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/c870aa07a3c4/figure-2.png)

*论文图 2。原论文 Figure 2：“Plots (above) and x-axis zoomed versions (below) of the response to a 100 Hz sinusoidal input at 48 kHz with amplitude .99 (black line) of a second-order all-pass block realized…”。*

从像素可见，左上蓝色峰值略超 1，绿色压在 1 的平台，红色先下冲到负值再回升。右上蓝色与红色均出现超过 1 的振荡，红色峰值接近 1.8，绿色则紧贴输入附近平滑穿过。右下放大面板显示绿色修正系数在约 0.503 秒处有一个窄脉冲毛刺，对应主动干预时刻，而蓝色目标仍为直线。这表明 2 阶预算拆分在正弦对称情形下仍能有效工作，但右方向所需修正更集中，这是理解计算代价与数值精度的关键证据。论文还指出削波可能发生在系数已稳定到目标值之后不久的瞬态尾巴，因此方法不是简单放慢系数变化，而是在任何会削波的时刻强制执行安全系数，无论参数更新是否仍在进行。

### 附录：如何读波形图而不误读

读图先确认图例与坐标。官方原图的横轴为秒级时间，纵轴为原始幅度，黑色为输入，蓝色为无保护标准，红色为能量保持，绿色为提议方法，虚线系为系数轨迹。上面板为宽窗，下面板为切换附近的放大窗。判断好坏的标准是输出曲线是否超过阈值水平线，超过即削波，不是曲线向下即变差。同色在不同面板代表同一对象，但系数虚线颜色与输出实线颜色对应，需按图例区分修正前后。

不要把末步结果推广全程。例如 2 阶右方向的后续振荡会衰减，不能只看峰值就断言全程失真。也不要硬写像素无法分辨的小数数值，阈值附近的贴线应描述为被约束在阈值附近，而不给出 3 位小数。分布曲线与单样本标记要区分，本文皆为单次确定性仿真的时间波形，不是多次平均的分布，因此不存在置信带。若要补充统计，需自行多次更换音乐片段与切换时刻重跑，这是论文未做的部分。

### 音乐与预算拆分验证了什么假设？

音乐片段实验把 2 阶方法放到非正弦输入下检验。切换组合与正弦右方向一致，起始时刻约 6.5 秒。预防后提议结构输出总体更接近能量保持滤波器输出，但后者在观察窗末尾约 6.534 秒处再次削波，提议算法通过修改 c1 轨迹的小毛刺避免了该处削波，而标准结构走出略不同轨迹且未在该尾段越界。这说明三者各有削波时刻，提议方法能在系数已稳定后仍捕捉瞬态尾巴，这正是仅放慢系数斜率无法做到的。论文把 4 路信号存为波形文件并在 Audacity 中展示，目视确认提议结构不削波而另两路削波。

下图左为音乐片段附近的波形与系数轨迹，右为 Audacity 中 4 条长时轨道，横轴为秒级时间，纵轴为幅度。

> **看图路径：** 1. 先看左图 6.528 秒到 6.532 秒附近灰色音乐输入与三条输出曲线的交叠与分离；2. 注意绿色提议曲线在峰值附近被压在 0.99 阈值附近而蓝色与红色出现更高毛刺；3. 观察蓝色虚线与点划线系数目标从平稳到陡降的切换时刻与输出发散时刻的对应关系；4. 再看右图 Audacity 四条长时波形轨道，确认整体音乐包络一致而局部削波只发生在短瞬态

[![原论文 Figure 3：Left: Response to a music excerpt at 44.1 kHz (black line) of a second-order all-pass block…](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/c870aa07a3c4/figure-3.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/c870aa07a3c4/figure-3.png)

*论文图 3。原论文 Figure 3：“Left: Response to a music excerpt at 44.1 kHz (black line) of a second-order all-pass block realized with: no protection from clipping (blue line); energy-preserving structure…”。*

从像素可见，左图灰色音乐输入本身起伏不规则，蓝色、红色、绿色 3 条输出在 6.529 秒附近的峰值处分离，绿色被约束在阈值附近，红色出现更高尖峰。蓝色虚线与点划线系数目标在 6.528 秒附近陡变，绿色修正轨迹在末尾有一个微小上翘毛刺，对应尾段预防。右图 4 个蓝色波形包络整体一致，说明预防未改变长时能量与结构，差异只在短瞬态。像素无法分辨每个样本是否越界，结论依赖左图放大窗与原文对尾段时刻的文字说明，不能把长时包络一致推广为每样本一致。

预算拆分的合理性由另一组图验证。论文画出两个分量随时间的变化，左为一种切换方向，右为反向，红蓝分别对应两个系数的贡献。原文指出在 2 阶案例中两者大幅对称，幅度在预防开始前几乎相同，这可能是因为输入输出为正弦且两系数以相同速率变化，因此均分预算是精度与效率的良好折中。下图为该预算影响的官方原图，注意左右纵轴量级不同。

> **看图路径：** 1. 先看左图纵轴为 10 的负三次方量级、右图纵轴为百分之几量级，确认两次切换所需预算数量级不同；2. 对比红蓝两条预算分量曲线在干预开始段的对称或反号形态；3. 观察干预结束后两条曲线迅速回到零线的时刻，确认预防只在短瞬态激活；4. 结合图 2 的系数方向，理解为何右图需要更大更不对称的瞬时修正

[![原论文 Figure 4：Impact of the components ∆c0(n) x\[n\] −y\[n −2\] (red line) and ∆c1(n) x\[n −1\] −y\[n −1\] (blue line)…](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/c870aa07a3c4/figure-4.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/c870aa07a3c4/figure-4.png)

*论文图 4。原论文 Figure 4：“Impact of the components ∆c0(n) x[n] −y[n −2] (red line) and ∆c1(n) x[n −1] −y[n −1] (blue line) responsible of clipping in the 2nd-order case study (Fig.”。*

从像素可见，左图纵轴为千分之几量级，两条曲线在 0.502 秒到 0.505 秒间先反号分离再重合为单峰，之后归零。右图纵轴为百分之几量级，红蓝曲线呈开口相反的尖峰，干预时间更短。这支持论文判断：均分预算在该对称正弦案例下负担均衡，但论文也承认若算力允许可用更精细的预算分配替代均分。因此不能把均分最优当成已证明结论，它只是特定案例下的经验折中，未在音乐等非对称信号上做系统性消融。未胜出项是能量保持在音乐尾段再次削波，说明能量保持不能覆盖所有瞬态，这反衬预防机制的互补价值而非替代关系。

### 边界在哪里：结构、精度与成本有何限制？

第一个边界是结构适用范围。论文明确方法可安全用于直接 I 型，因为该结构显式使用过去输入输出，而这些量已被过程保证不受削波污染。若把输入输出关系线性重组为其他实现形式，可能出现内部削波，因为当前算法不直接操作滤波器状态。论文把对各种全通形式的适配与成本评估留作未来研究。复述时不要把方法说成适用于所有全通实现，这是常见误解。

第二个边界是数值与除法。界公式含除法，在缺少高精度除法或除法指令的数字信号处理器上可能不准或不可用。论文提出用二分搜索等迭代求零替代直接计算，只需判断符号与乘加。这在 M 为 1 时所有量幅度受限的条件下可行，但论文未给出迭代次数与最坏延迟的定量界，也未在真实定点芯片上验证。因此不能承诺在所有定点板上零额外成本运行。

第 3 个边界是计算开销的测量条件。论文报告在 4.7 吉赫英特尔酷睿 i7 笔记本上，用 MATLAB 处理 1 秒 48 千赫输入与用 C++ 编译优化处理 10 秒输入的平均处理时间，提议方法约为标准与能量保持结构的数倍以内，具体为编译后仍保持同量级，未显著增加成本。但这是笔记本上的平均时间，不是嵌入式最坏情况，也不是功耗。总体趋势不等于每组每步都成立，右方向 2 阶的脉冲修正可能带来局部更多判断。未测量误判率、延迟与听感影响，因此不能声称音质改善，只能说输出被约束在阈值内且偏离时间短。相关性不等于因果，均分预算在正弦下对称不能推出在所有音乐下对称。

### 要复现，先做什么，需要哪些参数？

复现先做 1 阶正弦最小闭环。采样率设为 48 千赫，生成 100 赫兹、幅度 0.99 的正弦，阈值设为 1。在正峰附近约 0.5 秒处让系数在约 1 毫秒内从正 0.99 线性变到负 0.99，实现标准 1 阶差分方程，同时实现静态对照输出与信号差符号判断，按论文算法钳制增量并记录修正系数。若实现正确，应看到无保护输出超过 1 而提议输出贴着 1，且修正系数偏离直线后回到目标。第二步再做反向切换，确认预防不激活且能量保持反而削波，用于验证方向不对称。

再做 2 阶闭环。系数对按 0.98 与负 1.96 到负 0.98 与 0.01 的组合切换，阈值仍为 1，预算减半实现两个系数的独立钳制。观察右方向是否需要脉冲式修正，并画出两个预算分量验证对称性。音乐验证需用 44.1 千赫片段，阈值设为 0.99，切换时刻放在能量较高的峰附近，切换组合与 2 阶右方向一致，保存 4 路波形文件并在音频编辑器中对比。关键超参数只有阈值 M 与切换斜率，信息条件是输入必须预先保证不削波，否则方法不负责。

代码与数据状态必须如实说明。论文未声明代码、模型或数据已公开，资源状态为未发现来源绑定且完成验证的资源，因此不能写当前可用或已公开。硕士论文引用给出链接但本次未能确认可达，不作为可运行证据。复现者需自行实现差分方程与钳制逻辑，注意信号差为零时跳过除法，避免除零。定点实现应先用浮点验证功能，再改写为迭代求零版本并测试边界附近的钳制稳定性。

### 何时值得尝试，还需补哪项验证？

当你的效果器或参数均衡器需要在运行时快速拧动全通相关参数，且硬件对削波零容忍但算力只允许逐样本简单运算时，该方法值得尝试。它的优势是逐样本代数判断、无需未来信息、处理时间恒定，且只在危险瞬态偏离目标系数，平时不改变音色与能量。特别适合嵌入式音频处理中系数自动化、包络跟随或用户快速拖动旋钮的场景。若系统已采用能量保持结构，仍值得叠加该方法，因为实验显示能量保持在相反切换方向上仍会削波，两者互补而非重复。

但尝试前要确认结构为直接 I 型且输入已限幅，否则需先补内部状态保护。若芯片无除法，需实现迭代求零版本并实测最坏循环次数。还需补的验证包括多段音乐与语音的系统性测试、不同切换时长下的偏离时长统计、定点精度下的边界行为，以及与简单输出限幅器在听感与波形保真上的对照。论文未测量这些量，因此不能承诺听感最优，只能说输出满足阈值约束且干预时间短。

回到中心矛盾：时变全通的灵活性来自系数可变，风险也来自系数可变。本文用静态对照把风险量化为增量偏离，再用阈值把偏离关进笼子。这种思路把预防从信号域搬到系数域，避免了对信号模型的依赖。记住 3 个动作：算静态输出作基准，按信号差符号定界，把原始增量截断到界内。用这 3 步去读算法 1 与算法 2，就能复述全部方法而不依赖比喻。

## 📐 原文公式与排版

以下展示论文原页中的数学表达区域，保留原始上下标、分式和符号排版。区域序号仅用于本文导航，不是论文公式编号。

[![原文数学表达区域 1，PDF 第 2 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/f48572cffa42/figure-1.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/f48572cffa42/figure-1.png)

区域 1 · [查看论文原页](https://dafx26.mit.edu/assets/papers/DAFx26_paper_45.pdf#page=2)

[![原文数学表达区域 2，PDF 第 2 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/f48572cffa42/figure-2.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/f48572cffa42/figure-2.png)

区域 2 · [查看论文原页](https://dafx26.mit.edu/assets/papers/DAFx26_paper_45.pdf#page=2)

[![原文数学表达区域 3，PDF 第 2 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/f48572cffa42/figure-3.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/f48572cffa42/figure-3.png)

区域 3 · [查看论文原页](https://dafx26.mit.edu/assets/papers/DAFx26_paper_45.pdf#page=2)

[![原文数学表达区域 4，PDF 第 2 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/f48572cffa42/figure-4.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/f48572cffa42/figure-4.png)

区域 4 · [查看论文原页](https://dafx26.mit.edu/assets/papers/DAFx26_paper_45.pdf#page=2)

[![原文数学表达区域 5，PDF 第 2 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/f48572cffa42/figure-5.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/f48572cffa42/figure-5.png)

区域 5 · [查看论文原页](https://dafx26.mit.edu/assets/papers/DAFx26_paper_45.pdf#page=2)

[![原文数学表达区域 6，PDF 第 2 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/f48572cffa42/figure-6.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/f48572cffa42/figure-6.png)

区域 6 · [查看论文原页](https://dafx26.mit.edu/assets/papers/DAFx26_paper_45.pdf#page=2)

[![原文数学表达区域 7，PDF 第 3 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/f48572cffa42/figure-7.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/f48572cffa42/figure-7.png)

区域 7 · [查看论文原页](https://dafx26.mit.edu/assets/papers/DAFx26_paper_45.pdf#page=3)

[![原文数学表达区域 8，PDF 第 3 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/f48572cffa42/figure-8.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/f48572cffa42/figure-8.png)

区域 8 · [查看论文原页](https://dafx26.mit.edu/assets/papers/DAFx26_paper_45.pdf#page=3)

[![原文数学表达区域 9，PDF 第 3 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/f48572cffa42/figure-9.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/f48572cffa42/figure-9.png)

区域 9 · [查看论文原页](https://dafx26.mit.edu/assets/papers/DAFx26_paper_45.pdf#page=3)

[![原文数学表达区域 10，PDF 第 3 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/f48572cffa42/figure-10.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/f48572cffa42/figure-10.png)

区域 10 · [查看论文原页](https://dafx26.mit.edu/assets/papers/DAFx26_paper_45.pdf#page=3)

[![原文数学表达区域 11，PDF 第 3 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/f48572cffa42/figure-11.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/f48572cffa42/figure-11.png)

区域 11 · [查看论文原页](https://dafx26.mit.edu/assets/papers/DAFx26_paper_45.pdf#page=3)

[![原文数学表达区域 12，PDF 第 4 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/f48572cffa42/figure-12.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/f48572cffa42/figure-12.png)

区域 12 · [查看论文原页](https://dafx26.mit.edu/assets/papers/DAFx26_paper_45.pdf#page=4)

[![原文数学表达区域 13，PDF 第 4 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/f48572cffa42/figure-13.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/f48572cffa42/figure-13.png)

区域 13 · [查看论文原页](https://dafx26.mit.edu/assets/papers/DAFx26_paper_45.pdf#page=4)

[![原文数学表达区域 14，PDF 第 6 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/f48572cffa42/figure-14.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/f48572cffa42/figure-14.png)

区域 14 · [查看论文原页](https://dafx26.mit.edu/assets/papers/DAFx26_paper_45.pdf#page=6)

另有 31 个候选区域因边界不明确或图片数量、尺寸限制未展开；请[查看完整论文](https://dafx26.mit.edu/assets/papers/DAFx26_paper_45.pdf)中的原始排版。

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。
- 评分规则：type-aware-v1
- 评分模型：muse-spark-1.3-contributor
- 评分请求协议：openai_responses

---

[← 返回 dafx-2026 论文汇总](/posts/conference-dafx-2026/)
