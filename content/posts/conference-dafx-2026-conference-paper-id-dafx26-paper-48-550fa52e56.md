---
title: "A DDSP Framework for Adaptive Room Equalization"
date: 2026-09-13
draft: false
description: "论文把自适应房间均衡做成闭环可微分控制，用 7 段参量均衡加频域误差在实测时变房间脉冲响应和音乐激励下跟踪目标响应，最强证据是频域目标相对未均衡把系统距离压低约 7 成而时域误差全配置不收敛，代价是对在线房间估计质量敏感且高阶优化器单帧耗时接近帧长。"
tags: ["开源工具", "自适应滤波", "音乐", "音频修复"]
categories: ["dafx-2026 论文"]
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_paper_id: "conference:dafx:2026:conference-paper-id:DAFx26_paper_48"
paper_digest_source_kind: conference
paper_digest_conference_id: "dafx-2026"
paper_digest_conference_record_url: "https://dafx26.mit.edu/program/"
paper_digest_conference_pdf_url: "https://dafx26.mit.edu/assets/papers/DAFx26_paper_48.pdf"
paper_digest_api_reader_contract: "beginner-researcher-v3"
paper_digest_api_reader_article_sha256: "703812370b4efe7bddad9074a22ffcc43fc1577ffbbe887a81b2dfb2ae606e24"
paper_digest_api_reader_plan_sha256: "d0966bef806a87b8b7dedfe9353e67fbfa288dd205f995be75787a8823205ef6"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings-v4"
paper_digest_api_reader_source_bindings_sha256: "f8d6bc03826830a326150e1cb57fa488d21675a15cbc99e37e8a1f766aa013e4"
paper_digest_api_reader_source_table_count: 3
paper_digest_api_reader_source_formula_count: 0
paper_digest_api_reader_structured_artifacts_sha256: "7e470cc9a2d6775ea36788406e68e0cea3e39a8dc5a25e794e87db8c1de65878"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity-v1"
paper_digest_api_reader_author_identity_sha256: "411b2e78f574348a749b198163796cc77304afb382047b12744a228b352321dd"
paper_digest_api_reader_author_count: 4
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity-v1"
paper_digest_api_reader_resource_identity_sha256: "4d89d921213fb46442b15ce3d714433b5a24312802b7ac6e694188c0bf273ef8"
paper_digest_api_reader_resource_count: 2
paper_digest_api_reader_decision_projection: "api-reader-decision-projection-v2"
paper_digest_scoring_contract: "api-scoring-audit-v2"
paper_digest_taxonomy_contract: "paper-taxonomy-flat-tags-compat-v1"
paper_digest_taxonomy_selection_contract: "paper-taxonomy-selection-v1"
paper_digest_taxonomy_registry_version: "paper-taxonomy-v1"
paper_digest_taxonomy_registry_sha256: "15c82a567ce5a55dc1175684ed08b64c158558639d9c8fb822c9587ec32a8778"
paper_digest_taxonomy_concepts: [{"facet":"artifact","id":"artifact.open-source-tool","label":"开源工具"},{"facet":"method","id":"method.adaptive-filtering","label":"自适应滤波"},{"facet":"signal","id":"signal.music","label":"音乐"},{"facet":"task","id":"task.audio-restoration","label":"音频修复"}]
paper_digest_primary_task: "音频修复"
paper_digest_primary_method: "自适应滤波"
paper_digest_score: 7.2
paper_digest_rank_bucket: "前50%"
paper_digest_document_type: "方法研究"
paper_digest_conference_structure: replayable-pdf-layout-v1
---

# 📄 时变房间里用音乐做激励：可微分参数均衡为何要换掉时域误差

> 英文题目：*A DDSP Framework for Adaptive Room Equalization*

> 会议身份：`conference:dafx:2026:conference-paper-id:DAFx26_paper_48`


> ✅ 来源为官方会议 PDF；表格与 Figure 按原文证据绑定。PDF 公式以原页区域图片展示，未冒称作者原始 TeX。

> 会议来源：[官方记录](https://dafx26.mit.edu/program/) · [官方 PDF](https://dafx26.mit.edu/assets/papers/DAFx26_paper_48.pdf)

标签：#开源工具 #自适应滤波 #音乐 #音频修复

评分：**7.2/10** | 创新 1.3/2 | 技术严谨 1.0/1.5 | 实验充分 0.9/1.5 | 清晰度 0.7/1 | 影响力 0.8/1.5 | 开源 1.2/1.5 | 可复现 0.3/0.5 | 工程/实践 1.0/1.5

排名：前50% | 文档类型：方法研究

## 👥 作者与机构

- Fernando Marcos Macías：机构信息未能从会议 PDF 纯文本可靠映射
- María Pilar Daza Llin：机构信息未能从会议 PDF 纯文本可靠映射
- Mateo Cámara：机构信息未能从会议 PDF 纯文本可靠映射
- José Luis Blanco Murillo：机构信息未能从会议 PDF 纯文本可靠映射

## 📌 核心摘要

自适应房间均衡 Adaptive Room Equalization / ARE 需在音乐激励与时变房间脉冲响应 Room Impulse Response / RIR 下把扬声器-房间-麦克风 Loudspeaker-Enclosure-Microphone / LEM 系统校准到目标响应，经典时域自适应难以跟踪非平稳信号。所提框架先以可微参量均衡器将参数映射为频响并与输入频谱相乘，再经由在线估计的 LEM 响应传播到测量输出并计算频域均方误差 Frequency-Domain Mean Squared Error / FD-MSE，随后经由估计响应的转置卷积回传梯度并用一阶或高阶优化器逐帧更新参量。相对传统有限脉冲响应 Finite Impulse Response / FIR 结构，该设计用少量可解释双二阶节约束解空间，并把滤波器-x结构统一为自动微分 Automatic Differentiation / AD 的梯度流。在 SoundCam 会议室实测 RIR 与 10 首 MedleyDB 音乐构成的最坏移动听众场景下，相对未均衡房间，系统距离降低 70%且梅尔谱距离 Mel-Spectral Distance / MSD 降低 13%。结论限于受控线性仿真与特定估计平滑策略，未验证人群噪声、低信噪比、换能器非线性与真实闭环时延下的外推能力。一阶方法单帧计算约 20 ms，高阶牛顿类方法约 140 ms，均在所用 GPU 与 170 ms 帧长下给出，未披露大规模训练成本。

## 🔗 开源与复现资源

- 代码相关资源：<https://github.com/fermarcosmac/DDSP-adaptive-EQ-26.git> → <https://github.com/fermarcosmac/DDSP-adaptive-EQ-26> — 链接可访问（HTTP 200）
- 第三方资源：<https://github.com/ewan-xu/pyaec> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 房间为什么会让播出的音乐变味？

输入是这篇论文要解决的起点，目标是让研究生能复述实验条件和方法动作。必须保留的信息包括时变房间脉冲响应、音乐激励、闭环逐帧更新、参量均衡结构、频域损失与在线房间估计。输出是 1 篇可核对的技术解读，不做营销式判断。

刚进语音音频领域的同学可以这样建立直觉。房间均衡要补偿的是播放设备加房间加麦克风这条链路的线性失真。白话说就是同一个音箱在空会议室和坐了人、换了听音位置后，传到耳朵的频率 balance 会变。低频可能被房间共振顶起来，高频可能被距离和吸收吃掉一部分。如果演出前调好一个固定均衡器，开场后观众进场、温度变化、话筒移动都会让它慢慢失配。论文把这种失配叫做慢时变线性系统，记作随帧变化的响应。

为什么音乐比白噪声难。白噪声每 1 帧的频谱都很满，估计房间哪里凹哪里凸都有证据。音乐是例子，某几秒可能只有鼓和贝斯，高频几乎没有能量；下一段换成弦乐，高频又突然很强。如果用时域波形逐点对齐做目标，音乐波形本身的起伏会淹没房间失真带来的误差，梯度就会忽大忽小。论文后续用对照证明时域均方误差在音乐下不收敛，这就是任务难点的第一个来源。

第二个难点是只能在线调。现场演出不允许把同一帧播很多遍来试参数。每进来 1 帧输入，只能前向播放 1 次、做 1 次参数更新。帧长选长了，频谱分辨率高、估计房间更准，但每秒更新次数少，跟不上房间变化；帧长选短了，更新快但频谱格子粗、梯度噪声大，还可能听到控制不稳带来的 artifacts。论文把帧长定为 8192 采样并做了消融，就是为了讲清这个 responsiveness 与稳定性的 trade-off。

本节的承接关系是先讲任务的输入输出，再讲相关路线为什么不够，最后进入方法全景。输入是分帧的播放信号，输出是麦克风处的实测信号，目标输出是由理想目标响应生成的期望信号，控制器要让实测逼近期望。相关路线包括固定均衡、经典滤波 x 最小均方、子带与频域自适应滤波、可微分参量均衡的离线匹配，它们各自只解决了一段问题，没有同时处理时变、音乐激励和可换组件的闭环控制。

### 同输入同目标的老路线卡在哪里？

相关工作要按同输入、同目标、同监督、同运行阶段来对照，不能把类别差异当胜负。本论文的输入是连续播放帧，目标是让均衡后系统响应逼近带低频滚降的目标响应，监督是麦克风实测与目标输出的偏差，运行阶段是在线逐帧闭环。

第一条路线是经典自适应房间均衡。均衡器建模为有限冲激响应自适应滤波器，用滤波 x 最小均方求解，本质是自适应线性合成器的一种情形。后续改进包括变步长、加 2 阶信息、用偏置保证稳定、做感知加权、分块或子带提升效率和鲁棒性，以及多点和频域求逆等不同优化视角。它们的共同输入输出与本文一致，但论文指出其形式刚性，换损失、换结构、换优化器都不方便，需要一个统一框架来做原型验证。

第二条路线是可微分数字信号处理和深度学习均衡。已有工作把参量均衡做成可微分的双 2 阶级联，接前馈卷积网络甚至 Kolmogorov-Arnold 网络做响应匹配和风格迁移，也有开源可微分音频工具箱让这些做法可运行。关键限定是它们大多研究离线静态匹配，明确排除自适应应用。也就是说它们解决了参数化灵活和损失灵活，但没有进入在线控制回路，不处理房间随时间漂移和每帧只更新 1 次的约束。

本文的定位因此很清晰。它不是要宣称一个可直接部署的现场扩声终极方案，也不是要把所有自适应均衡设计选择做完全析因比较。它的目标是让选择显式化、可互换，并建立与滤波 x 最小均方的连接，再在受控时变仿真中证明结构化参量均衡加频域目标在音乐激励下是一个有希望的方向。理解这一点才能正确解读后面的结果，哪些是框架能力的演示，哪些还不是通用结论。

### 控制器每帧到底要算什么？

把问题形式化对复述方法很关键。记离散时间已包含数模模数影响，声音系统是未知慢时变线性滤波器。输入信号切成固定长度非重叠帧，每帧记为当前帧向量。信号先过参量均衡器得到均衡器输出，再过真实房间到达采集端得到实测输出。目标输出由期望响应生成，期望响应可以是纯延迟，也可以是带距离相关谱衰减和低频滚降的更真实轮廓，目的是模拟理想无回声环境并保护设备。

控制器要最小化均衡后系统响应与目标响应的损失。论文用可微分损失度量实测帧与目标帧的偏离，保证从均衡器参数到目标函数端到端可微。参数更新只做 1 次加法增量，增量来自梯度或更一般的导数信息。实时约束是每帧只允许 1 次前向和 1 次更新，不允许帧重叠。这就把帧长选择变成更新率与谱分辨率的根本矛盾，后面消融会量化。

评价用的主指标是归一化相对系统距离。它把均衡后幅度谱与目标幅度谱的一范数差距，除以未处理房间幅度谱与目标的差距。等于 1 表示没校正，等于 0 表示完美均衡。用幅度的一范数是更看重平均谱 balance 而不是个别频点尖峰，也更贴近感知均衡目标。论文还报告随时间变化的该指标曲线和跨激励的统计，用来判断收敛和鲁棒性，再辅以感知质量、信号失真比、谱对齐、时域保真和响度一致性等指标。

### 四件套闭环是如何转起来的？

方法是 4 个可配置组件组成的闭环控制器。跟着一个样本走一遍最清楚。1 帧音乐输入进来后分两路，一路经过目标响应生成这 1 帧应该听到的目标输出，另一路经过当前参量均衡器参数生成均衡器输出并经真实房间播出被麦克风收到。损失比较实测与目标的差距，优化器结合在线房间估计给出的梯度流算出参数增量，下 1 帧就用新参数播出。房间在播放过程中缓慢漂移，控制器就这样逐帧追。

**自适应房间均衡 × 可微分数字信号处理：** 自适应房间均衡负责在播放同时不断修正扬声器加房间加麦克风链路的线性失真，可微分数字信号处理负责让均衡器参数到损失的整条链路可求导；二者搭配的理由是传统自适应滤波只有固定更新式而可微分框架允许换均衡结构、换损失、换优化器，组合后形成每帧前向播放 1 次、反向用估计房间响应回传梯度、再更新均衡参数的闭环控制器。

下图是论文的系统框图，读懂它就读懂了方法全景。上方是目标支路，下方虚线大框是声音系统，内含扬声器包络麦克风链路，中间是带斜箭头的可调均衡器，底部是房间估计加优化器，红色虚线标出梯度回路。

> **看图路径：** 1. 先沿左侧输入同时走向目标响应和参量均衡器的两条前向箭头确认主路径；2. 再看麦克风输出同时送入损失和房间估计的分支走向；3. 最后沿底部红色虚线梯度回路看优化器如何用估计响应和误差合成参数增量

[![原论文 Figure 1：Block diagram of the proposed adaptive room equaliza- tion system.](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/3bbba39206a7/figure-1.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/3bbba39206a7/figure-1.png)

*论文图 1。原论文 Figure 1：“Block diagram of the proposed adaptive room equaliza- tion system.”。*

这张框图把前向与反向分得很开。前向只有 1 次，从输入经均衡器、真实房间到麦克风，输出是实测得到的不是算出来的。反向需要穿过均衡器和房间模型，均衡器部分显式可微，房间部分用估计代替真实。优化器收到误差信号和房间估计后输出参数增量。这种前向实测、反向用模型算导数的安排，忠实建模了真实场景只能测输出、不能对房间求导的现实。理解这个分离，后面才能明白为什么估计质量决定稳定性。

### 均衡器、损失和优化器各自算什么？

均衡器采用标准参量房间均衡形式，级联双 2 阶滤波器，计算高效且音频设备常见。为教学只讲参数侧。本实现用 7 段双 2 阶级联，一个低架、5 个峰值、一个高架，加一个总增益，共 22 个左右参数。每段用中心频率、增益和品质因数表示，论文沿用该参数化因为常用且可解释。双 2 阶系数到这组参数的映射是可微的，但时域递归实现反向要走时间反向传播有已知困难，所以求导时用基于频率采样的有限冲激响应近似，而实际均衡器仍可保持无限冲激响应高效运行。总频响是总增益乘以各段频响的连乘，均衡器输出频谱等于输入频谱乘以该总频响。

损失比较捕获输出帧与目标输出帧。基线时域损失最小化波形均方误差，但对语音音乐这类非平稳信号收敛困难，这与滤波 x 最小均方的已知观察一致。帧变长后频域损失更灵活，鲁棒性更好。论文实验用频域均方误差，把输出与输入的离散傅里叶变换比值与目标响应在多个离散频率上做均方比较。框架也支持多损失组合和感知加权的变形采样，但本文实验固定用该频域损失来隔离优化器的影响。

**滤波 x 最小均方 × 随机梯度下降：** 滤波 x 最小均方负责用经过房间估计滤波后的参考信号去修正有限冲激响应均衡器抽头，随机梯度下降负责沿负梯度走一步；搭配理由是当均衡器限定为有限冲激响应、帧长为单采样、损失为瞬时平方误差时，反向经过房间模型的梯度恰好就是滤波 x 信号，此时随机梯度下降的更新式就退化为滤波 x 最小均方，说明后者是新框架的一个特例而非另一套规则。

优化器在每帧只做 1 次更新的约束下比较了随机梯度下降、自适应矩估计、阻尼牛顿和基于同伦分析的迭代方法。随机梯度下降沿负梯度走一步，牛顿用海森逆做 2 阶校正，自适应矩估计对梯度和梯度平方做指数滑动平均得到逐参数自适应学习率。迭代同伦方法不太常见，论文给了稍详细的描述。

它不是沿梯度走，而是把损失等于不可约误差看作求根问题，先在当前参数处做线性近似，再用嵌入参数从当前点连续变形到真解，截断麦克劳林级数得到 1 阶、2 阶直到高阶校正，截断阶数控制精度复杂度的 trade-off。1 阶时退化为解一个线性系统，高阶则递归解更高阶变形方程。纳入它是为展示框架能容纳非标准更新机制，并探索非凸均衡匹配中避开局部极小的可能性，不是要宣称它普遍最优。

**参量均衡器 × 频域均方误差：** 参量均衡器负责用很少的参数刻画需要补偿的幅度形状，每个通道只调中心频率、增益和品质因数，频域均方误差负责比较输出与输入频谱比值和目标响应的差距；搭配理由是音乐在时域波形逐帧起伏很大而在频域比值上相对稳定，用结构化参量均衡约束解空间再用频域误差做监督，可以在非平稳激励下仍得到稳定的梯度方向，这是时域波形误差做不到的。

导数流是理解框架的关键。无论前向后向自动微分，都必须对从参数到损失的每个操作求导。参量均衡器和损失显式可微，声音系统建模为线性慢时变滤波器，输出帧对输入帧的雅可比就是该脉冲响应诱导的卷积算子。于是经声音系统反向传播梯度等于输出端梯度与时间反转房间响应的卷积，这是线性系统理论的标准结果。由于真实响应事先未知，用在线估计近似该梯度流，具体做法是对均衡器输出和麦克风信号做正则化频域反卷积，再做指数平滑。这恰好对应滤波 x 最小均方里算滤波 x 信号的步骤，使端到端梯度流在自动微分计算中成立。

**扬声器包络麦克风 × 在线响应估计：** 扬声器包络麦克风负责表示从均衡器输出到麦克风实测输出的未知慢时变线性系统，在线响应估计负责每帧从均衡器输出和麦克风信号中估计该系统的当前响应；搭配理由是反向传播必须穿过真实房间才能把损失对均衡器输出的导数换算成对均衡器参数的导数，而真实响应未知，只能用正则化频域反卷积加指数平滑得到的估计来近似梯度流，估计准不准则直接决定更新方向对不对。

论文进一步证明滤波 x 最小均方是特例。3 个假设是均衡器为有限冲激响应因而参数向量数值上等于其冲激响应、自适应用单采样帧、损失为瞬时平方误差。在此假设下随机梯度下降的梯度等于误差乘以时间反转房间响应与输入的卷积，用估计代替真实就得到滤波 x 更新式。于是滤波 x 信号就是经估计声音系统反向传播得到的梯度。新框架放宽 3 条假设，允许非有限冲激响应或参量均衡、允许分帧或频域损失、允许一般可微分优化器，但保留相同的源到均衡器到声音系统到误差的计算图。

### 没有神经网络训练时每帧在优化什么？

本研究没有训练神经网络权重，该节必须明确说明没有训练阶段，再讲清真实的逐帧优化计算过程，避免把无训练误解为确定性求解。系统里需要更新的只有参量均衡器的中心频率、增益、品质因数和总增益，初始值设为各频率和品质因数范围的中点、所有增益为零分贝。没有离线学习、没有冻结主干、没有梯度停止的额外设计，监督来源就是当前帧的麦克风实测与目标输出的频域差距。

每帧的计算分前向实测和反向估计两步。前向用真值房间脉冲响应把均衡器输出变成麦克风信号，这是仿真为了忠实模拟现实；反向计算梯度时用在线估计的房间响应，而不是真值，这样才符合真实自适应房间均衡只能估计房间的应用条件。房间估计用正则化频域反卷积得到，再用 5% 新估计加 95% 历史做指数平滑，用稳定换响应速度。

优化器超参数是按跨场景稳定行为经验选的，随机梯度下降步长为千分之五，自适应矩估计同量级并给定动量系数，牛顿用大阻尼，同伦方法给定收敛控制参数和不可约误差。论文明确说正式匹配的超参数搜索仍是未来工作，因此不能把当前数值当最优。

重置时机也按原文交代。评估时先给 30 秒热身让控制器收敛，指标在之后 150 秒的时变声学条件下计算。房间时变通过对实测频率响应做线性插值生成，过渡时间从 1 秒突变到 30 秒慢漂。没有跨曲目的参数重置描述，同一控制器在 180 秒播放中连续适应，房间切换时刻用阴影标出，白色区房间固定。这些安排保证了比较的是跟踪能力而不是单点拟合。

### 房间、音乐和基线如何保证同条件？

实验条件是复现的基础，要按数据、划分、采样、指标、聚合和硬件逐项核对。房间脉冲响应来自 SoundCam 数据集的会议室子集，48 千赫测量，10 个麦克风位置，含空房间和有人两种配置，能捕捉听者位置和单人占位带来的真实传递函数空间变化。评估两种场景，一是切换不同麦克风位置模拟听者移动，二是固定听者只变单人位置。时间演化用频率响应线性插值控制过渡快慢。听者移动带来全频段大结构变化，被定为最坏情况用于控制器评价。

激励用 MedleyDB 十首完整混音，裁到 180 秒并从 44.1 千赫重采样到 48 千赫，覆盖独立、爵士、流行、民谣、金属、氛围、古典等流派，以暴露控制器于多样的谱和时间统计，代表实际播放材料。另做 10 次独立白噪声运行作为对照，因为白噪声频谱满、估计容易，能分离激励非平稳性的影响。均衡频率范围为 50 到 20000 赫兹，音频按 8192 采样非重叠分帧，约 170 毫秒 1 帧，谱分辨率 6 赫兹，每秒约 6 次更新。目标响应是纯延迟加带低频滚降和距离相关谱衰减的幅度轮廓，对应理想无回声环境，滚降为保护设备。

代码、配置和所用房间与音乐列表在伴随仓库中给出，本文资源状态显示代码当前可用，第三方自适应滤波库链接本次也可达，但复现仍以论文正文参数为准。

基线要保证同房间估计、同分帧、同实验条件。经典基线用长 2048 抽头有限冲激响应均衡器，经随机梯度下降的闭式更新，其中滤波 x 最小均方用时域均方误差逐帧更新，滤波 x 频域自适应滤波用分块频域形式更接近本文但灵活性更低。新框架侧用同一可微分 7 双 2 阶参量均衡器，只换优化器。这样隔离的是优化策略和模型灵活性，而不是估计或分帧的差异。

评价除相对系统距离外，还补感知质量、尺度不变信号失真比、多分辨率短时傅里叶误差、1024 窗梅尔谱距离、谱质心、均方根误差和响度差，方向是前两者越大或越接近零越好、谱距离和误差越小越好。硬件为桌面处理器加显卡，逐帧耗时另表报告，不含输入输出延迟和系统抖动，不能当作完整实时评估。

### 频域目标相对未均衡改善了多少？

主结果围绕 3 个问题组织。测的是时变下均衡后响应相对未均衡的改善，与谁比是不同优化器之间比以及参量均衡对长有限冲激响应基线的比，条件是否一致是同房间估计、同分帧、同音乐集，指标方向是相对系统距离越小越好、梅尔谱距离越小越好。

先看随时间的跟踪。下图是不同优化器在频域均方误差和音乐激励下的均衡示例，横轴是频率，纵轴是幅度分贝，黑色实线是目标，黑色虚线是随时间漂移的声音系统，彩色线是各优化器连续适配后的合成响应。

> **看图路径：** 1. 先确认每列时间戳和顶部图例中目标、未均衡房间与五种优化器的线型；2. 再对比虚线房间响应随时间漂移时各彩色均衡后响应向黑色目标线的靠拢程度；3. 最后观察高频端未均衡凹陷是否被不同优化器以不同残差补起

[![原论文 Figure 3：Example of ARE experiment for different optimizers, FD-MSE loss and a musical excitation signal.](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/3bbba39206a7/figure-3.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/3bbba39206a7/figure-3.png)

*论文图 3。原论文 Figure 3：“Example of ARE experiment for different optimizers, FD-MSE loss and a musical excitation signal.”。*

像素显示在起始时刻各方法都偏离目标，随着时间推进到 36 秒、71.9 秒之后，彩色线整体向黑色目标线靠拢，而虚线房间响应在高频端持续下陷。不同优化器残差不同，但都比未均衡更接近目标。这支持频域目标在音乐下能稳定跟踪的判断，限制是单条音乐曲线的演示不能代表十首歌的方差。

时域损失的反证很干脆。所有时域均方误差配置都不收敛，相对系统距离大于 1，证实了时域损失在音乐非平稳性下难以收敛的先验观察。因此论文主实验全部转到频域均方误差。所有频域配置都做到相对系统距离小于 1，即谱改善优于未处理房间。但十首音乐的标准差在稳态仍有 0.1 到 0.2，说明对激励统计敏感。

3 阶同伦方法在最坏的听者移动场景下 1 秒、15 秒、30 秒过渡平均最优，其次是 1 阶同伦和牛顿。自适应矩估计在 30 秒过渡的三首音乐上不稳定，随机梯度下降收敛可靠但稳态误差高约 0.05。

**相对系统距离 × 梅尔谱距离：** 相对系统距离负责度量均衡后幅度谱与目标幅度谱的平均偏差再除以未均衡房间本身的偏差，梅尔谱距离负责度量在更贴近听感的梅尔尺度上的谱差距；搭配理由是前者回答相对房间改善了几成、便于跨房间比较，后者补充感知相关的谱对齐程度，二者一个管归一化改善率、一个管听感相关的谱形状，需要一起看才能避免只改善数值不改善听感的误判。

下表比较过渡 1 秒时各优化器在 30 秒热身后 150 秒内的平均指标，公平条件是同参量均衡、同频域损失、同房间估计，指标方向是梅尔谱距离和谱质心误差越小越好。表前问题是结构化参量均衡是否在有限参数下优于长有限冲激响应基线，表后会解释收益与代价。

| None | 1.25 | 4.73 | 260.12 | 0.18 | 0.68 |
| --- | --- | --- | --- | --- | --- |
| Adam | 1.20 | 4.23 | 215.70 | 0.17 | 1.01 |
| iHAM-1 | 1.76 | 4.18 | 221.97 | 0.17 | 3.44 |
| Newton | 1.30 | 4.45 | 206.41 | 0.17 | 1.56 |
| iHAM-3 | 5.41 | 4.19 | 235.04 | 0.15 | 8.60 |

表中可见 3 阶同伦的梅尔谱距离在 15 秒过渡时最低，与频域优化一致，牛顿的谱质心误差最小，说明更好保持谱 balance 但相对系统距离并非最低。时域指标如信号失真比约负 25 分贝、均方根误差约 0.15，均衡后变化很小，原因是目标设计保相位。经典滤波 x 最小均方在此时变听者移动场景下未收敛，滤波 x 频域自适应滤波虽收敛但相对系统距离更高。

论文据此报告相对未均衡系统距离降低 7 成、梅尔谱距离降低 13% 的最坏情况改善，非正式听音确认可闻改善，但多刺激隐藏参考评价仍是未来工作。未胜出项必须指出，自适应矩估计和随机梯度下降在部分指标落后，长抽头基线在参数量大得多的情况下仍输，说明结构化均衡在参数受限下有优势，但不能推广为所有房间和激励都成立。

第二张表切到过渡 15 秒的同一场景，用于核对结论是否随过渡速度变化，条件与上表相同只是房间漂移更慢。

| None | 1.25 | 4.73 | 260.12 | 0.18 | 0.68 |
| --- | --- | --- | --- | --- | --- |
| Fx-FDAF | 1.71 | 4.82 | 500.91 | 0.16 | 3.03 |
| SGD | 4.25 | 4.30 | 248.36 | 0.15 | 6.79 |
| Adam | 1.19 | 4.27 | 221.34 | 0.17 | 0.91 |
| iHAM-1 | 1.98 | 4.22 | 233.63 | 0.17 | 3.89 |

该表显示各方法排序基本稳定，3 阶同伦仍保持梅尔谱优势，自适应矩估计的多分辨率短时傅里叶误差较低但相对系统距离不占优。这支持改善主要来自频域目标加结构化参数，而非某一种过渡速度的偶然。限制是表格平均了十首歌，掩盖了个别曲目上自适应矩估计的不稳定，读数时要结合误差棒曲线一起看。

### 帧长和房间估计哪个更决定稳定性？

消融按失败条件组织，分别回答帧长 trade-off 和估计质量的影响。先看帧长。实验在同一音乐激励、15 秒过渡、频域损失下比较 2048 到 16384 采样 4 种帧长，不做平均以保留完整适配动态。

下图每列是一种优化器，横轴是时间，纵轴是相对系统距离，阴影为过渡区，不同颜色为不同帧长。读图时注意纵轴是相对改变量，越小越好，向下不是性能变差而是改善。

> **看图路径：** 1. 先确认行是 1 秒 15 秒 30 秒过渡速度、列是听者移动与人员移动乘以音乐与白噪声；2. 再看纵轴相对系统距离在 1 附近的虚线基准和各优化器曲线是否长期低于该线；3. 最后对比音乐列的大误差棒与白噪声列的小误差棒理解激励非平稳性的影响

[![原论文 Figure 4：Validation error (Drel) across 3 minutes of playback material, for different changes in the LEM…](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/3bbba39206a7/figure-4.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/3bbba39206a7/figure-4.png)

*论文图 4。原论文 Figure 4：“Validation error (Drel) across 3 minutes of playback material, for different changes in the LEM responses and transition speeds between them.”。*

像素级的大图包含音乐与白噪声、听者移动与人员移动、3 种过渡速度共十二宫格。音乐列误差棒大、白噪声列误差棒小，直接证明激励统计是方差主因。听者移动列的波动大于人员移动列，支持把它定为最坏情况。过渡阴影处各曲线普遍抬升，说明房间切换瞬间误差必然反弹，关键看反弹后能否回落。3 阶同伦回落最低，自适应矩估计在慢过渡音乐格出现高尖峰，与正文报告的 3 首不稳定一致。

帧长细节在另一张单曲目无平均图中最清楚，本节选用该图做帧长消融的证据。2048 采样谱分辨率不足，过渡期相对系统距离高约 18%，参数更新噪声大并有可闻 artifacts，尽管更新率更高、计算负担反而大。16384 采样更新更平滑、计算更轻，但更新率跟不上房间声学时间尺度，15 秒过渡时相对系统距离高约 12%。8192 采样在谱精度、时间响应、数值稳定和计算可行之间最均衡，也是文献中采用的折中。需要指出这是本评估配置下的最优，不是所有部署的通用最优。

> **看图路径：** 1. 先确认每列是一种优化器、图例中四种帧长曲线的颜色；2. 再观察 2048 采样蓝色曲线在过渡阴影区附近的毛刺和抬升；3. 最后对比 8192 与 16384 曲线在跟踪速度和平滑度上的 trade-off

[![原论文 Figure 7：Comparison of frame sizes (different colors) in control experiments for all optimizers and one…](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/3bbba39206a7/figure-7.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/3bbba39206a7/figure-7.png)

*论文图 7。原论文 Figure 7：“Comparison of frame sizes (different colors) in control experiments for all optimizers and one musical excitation signal (no averaging so adaptation dynamics are portrayed in…”。*

该图蓝色的 2048 曲线在多数优化器列中毛刺最多、过渡区尖峰最高，绿色 8192 与橙色 4096 相对更低更稳，红色 16384 虽平滑但跟踪滞后。这与数值报告一致，支持帧长是更新率与谱分辨率的根本矛盾。代价是该消融只用一条音乐，没有跨曲目统计，不能排除曲目相关的偶然。

再看房间估计。用真值房间响应代替在线估计做梯度，其余保持最坏场景音乐激励不变，可以分离估计误差的贡献。结果是平滑过渡附近的不稳定大都消失，说明主实验的大部分不稳定对梯度估计质量敏感，凸显快速鲁棒在线估计对稳定控制的重要性。但即使给真值，部分优化器的不稳定仍存在，可归因于输入信号本身的非平稳。因此估计是主因、激励是次因，二者都要处理。未评测边界是低信噪比人群噪声、扬声器麦克风非线性、转换器量化、热漂移和不受控听者移动，论文明确限定结论只在受控线性声学、特定仿真和估计策略下成立。

### 哪些结论不能搬到现场扩声？

论文用单独章节声明局限，初学者要学会区分直接报告、有限解释和未验证推测。直接报告的是在受控仿真、实测房间脉冲响应、音乐与白噪声激励、特定估计与帧长下，频域目标比时域目标稳定，结构化参量均衡优于长抽头基线。有限解释的是同伦高阶方法平均最优、牛顿保谱 balance 较好，这些排序依赖经验超参数，没有正式匹配的超参数搜索，不能当作优化器普遍排名。

未验证推测必须用可能待验证表达。总体趋势不等于每组每步都成立，例如自适应矩估计平均尚可但个别曲目慢过渡不稳定。自动指标不能当人评，感知质量模型和非正式听音不能代替多刺激隐藏参考评价。训练资源、推理开销、输出帧率与实际延迟要分开讨论，逐帧耗时不含输入输出延迟和系统抖动，不能承诺延迟改善。

未测量项不是技术错误，但不能承诺。误判率、低信噪比鲁棒性、低信息帧、非线性失真、高阶更新规则在真实操作环境中的优化实现、神经扩展的房间估计与优化器块都未验证。论文明确说不是已部署现场均衡的最终实用方案，也不是全部设计选择的完全析因比较。读到改善 7 成和 13% 时要同时核对数据集、基线、阶段、指标、单位和聚合对象，百分点和相对百分比不同，不同指标差值不能混放，数值相同也不是同一指标的证据。

### 复现先跑通什么再调什么？

复现回答何时值得尝试、先做什么、还需补哪项验证。值得尝试的时机是房间慢时变、激励为音乐这类非平稳信号、设备只支持参量均衡且每帧只能更新 1 次的场景。如果房间静态或可用长抽头有限冲激响应自由建模，本文的相对优势会缩小。

先跑通的是论文的基准链。按原文实现 50 到 20000 赫兹均衡、8192 采样非重叠分帧、7 双 2 阶级联的频率增益和品质因数范围、目标响应的低频滚降、正则化频域反卷积加 5% 新估计的指数平滑、30 秒热身后评估 150 秒。用十首给定音乐和给定房间列表跑通相对系统距离曲线，核对时域损失不收敛、频域损失小于 1 的定性复现，再核对 3 阶同伦平均最优、自适应矩估计个别不稳定的方差现象。代码当前可用，第三方库链接本次可达，但超参数是经验值，不要当最优，改动时 1 次只换一个组件以保持可比。

下表是逐帧耗时，硬件为桌面处理器加显卡，单位毫秒，方向是越小越实时。它回答复现的成本边界，不回答音质。表前问题是在 170 毫秒帧长下哪些优化器有实时余量，公平条件是静态激励收敛态、同一显卡、不含输入输出延迟，表后解释余量与代价。

| Optimizer | Mean (ms) | Min (ms) | Max (ms) |
| --- | --- | --- | --- |
| Fx-LMS | 200.83 | 199.53 | 201.91 |
| Fx-FDAF | 16.57 | 16.23 | 16.66 |
| SGD | 19.86 | 19.79 | 19.97 |
| Adam | 19.96 | 19.88 | 20.02 |
| iHAM-1 | 20.49 | 20.22 | 22.15 |
| Newton | 140.15 | 139.90 | 140.96 |
| iHAM-3 | 141.35 | 140.61 | 141.79 |

表中 1 阶方法约 20 毫秒，余量约 80%，高阶牛顿和 3 阶同伦约 140 毫秒，余量约一成七，滤波 x 最小均方超帧长。这支持 1 阶方法易部署、高阶方法需优化实现的判断。还需补的验证是真实房间闭环、带人群噪声的低信噪比、非线性与量化、正式听音评价和严格超参数搜索。缺的是原文未给出的梯度路径不猜，原文未报告的划分聚合不编，表头图注或算术冲突时明确标注冲突。

### 一句话之后还应带走什么？

回到中心矛盾。时变房间要求在线追，音乐激励让时域误差不可靠，刚性自适应滤波又换不动组件。论文的选择是用可微分闭环把四件套解耦，均衡器管形状约束，频域损失管稳定监督，在线估计管梯度可算，优化器管更新规则。证据显示该组合在受控时变仿真中持续改善，最坏情况仍显著优于未均衡和长抽头基线。代价是对估计质量敏感、对帧长敏感、高阶方法计算重。

论文特有的误解要澄清。第一，无训练不等于确定性求解，系统每帧仍在做随机优化，只是没有神经网络权重学习。第二，滤波 x 最小均方不是被替代，而是被包含为特例，理解退化条件才能理解框架的通用性。第三，频域更好只在所考虑的非平稳场景下被验证，不是自适应均衡的普遍结论。第四，改善百分比只在给定房间集、音乐集、目标响应和聚合口径下成立，换条件要重测。

给研究生的行动清单是先复述闭环数据流，再复述梯度如何穿过估计房间，再复述帧长与估计的两个消融，最后用表格数字说明收益与反例。这样既能讲清方法动作，也能守住可核对的边界。

## 📐 原文公式与排版

以下展示论文原页中的数学表达区域，保留原始上下标、分式和符号排版。区域序号仅用于本文导航，不是论文公式编号。

[![原文数学表达区域 1，PDF 第 2 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/496f0e9f8794/figure-1.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/496f0e9f8794/figure-1.png)

区域 1 · [查看论文原页](https://dafx26.mit.edu/assets/papers/DAFx26_paper_48.pdf#page=2)

[![原文数学表达区域 2，PDF 第 2 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/496f0e9f8794/figure-2.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/496f0e9f8794/figure-2.png)

区域 2 · [查看论文原页](https://dafx26.mit.edu/assets/papers/DAFx26_paper_48.pdf#page=2)

[![原文数学表达区域 3，PDF 第 2 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/496f0e9f8794/figure-3.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/496f0e9f8794/figure-3.png)

区域 3 · [查看论文原页](https://dafx26.mit.edu/assets/papers/DAFx26_paper_48.pdf#page=2)

[![原文数学表达区域 4，PDF 第 3 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/496f0e9f8794/figure-4.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/496f0e9f8794/figure-4.png)

区域 4 · [查看论文原页](https://dafx26.mit.edu/assets/papers/DAFx26_paper_48.pdf#page=3)

[![原文数学表达区域 5，PDF 第 3 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/496f0e9f8794/figure-5.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/496f0e9f8794/figure-5.png)

区域 5 · [查看论文原页](https://dafx26.mit.edu/assets/papers/DAFx26_paper_48.pdf#page=3)

[![原文数学表达区域 6，PDF 第 3 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/496f0e9f8794/figure-6.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/496f0e9f8794/figure-6.png)

区域 6 · [查看论文原页](https://dafx26.mit.edu/assets/papers/DAFx26_paper_48.pdf#page=3)

[![原文数学表达区域 7，PDF 第 3 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/496f0e9f8794/figure-7.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/496f0e9f8794/figure-7.png)

区域 7 · [查看论文原页](https://dafx26.mit.edu/assets/papers/DAFx26_paper_48.pdf#page=3)

[![原文数学表达区域 8，PDF 第 3 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/496f0e9f8794/figure-8.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/496f0e9f8794/figure-8.png)

区域 8 · [查看论文原页](https://dafx26.mit.edu/assets/papers/DAFx26_paper_48.pdf#page=3)

[![原文数学表达区域 9，PDF 第 3 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/496f0e9f8794/figure-9.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/496f0e9f8794/figure-9.png)

区域 9 · [查看论文原页](https://dafx26.mit.edu/assets/papers/DAFx26_paper_48.pdf#page=3)

[![原文数学表达区域 10，PDF 第 3 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/496f0e9f8794/figure-10.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/496f0e9f8794/figure-10.png)

区域 10 · [查看论文原页](https://dafx26.mit.edu/assets/papers/DAFx26_paper_48.pdf#page=3)

[![原文数学表达区域 11，PDF 第 3 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/496f0e9f8794/figure-11.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/496f0e9f8794/figure-11.png)

区域 11 · [查看论文原页](https://dafx26.mit.edu/assets/papers/DAFx26_paper_48.pdf#page=3)

[![原文数学表达区域 12，PDF 第 3 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/496f0e9f8794/figure-12.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/496f0e9f8794/figure-12.png)

区域 12 · [查看论文原页](https://dafx26.mit.edu/assets/papers/DAFx26_paper_48.pdf#page=3)

[![原文数学表达区域 13，PDF 第 3 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/496f0e9f8794/figure-13.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/496f0e9f8794/figure-13.png)

区域 13 · [查看论文原页](https://dafx26.mit.edu/assets/papers/DAFx26_paper_48.pdf#page=3)

[![原文数学表达区域 14，PDF 第 3 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/496f0e9f8794/figure-14.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/496f0e9f8794/figure-14.png)

区域 14 · [查看论文原页](https://dafx26.mit.edu/assets/papers/DAFx26_paper_48.pdf#page=3)

[![原文数学表达区域 15，PDF 第 3 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/496f0e9f8794/figure-15.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/496f0e9f8794/figure-15.png)

区域 15 · [查看论文原页](https://dafx26.mit.edu/assets/papers/DAFx26_paper_48.pdf#page=3)

[![原文数学表达区域 16，PDF 第 3 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/496f0e9f8794/figure-16.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/496f0e9f8794/figure-16.png)

区域 16 · [查看论文原页](https://dafx26.mit.edu/assets/papers/DAFx26_paper_48.pdf#page=3)

[![原文数学表达区域 17，PDF 第 4 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/496f0e9f8794/figure-17.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/496f0e9f8794/figure-17.png)

区域 17 · [查看论文原页](https://dafx26.mit.edu/assets/papers/DAFx26_paper_48.pdf#page=4)

[![原文数学表达区域 18，PDF 第 4 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/496f0e9f8794/figure-18.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/496f0e9f8794/figure-18.png)

区域 18 · [查看论文原页](https://dafx26.mit.edu/assets/papers/DAFx26_paper_48.pdf#page=4)

[![原文数学表达区域 19，PDF 第 4 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/496f0e9f8794/figure-19.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/496f0e9f8794/figure-19.png)

区域 19 · [查看论文原页](https://dafx26.mit.edu/assets/papers/DAFx26_paper_48.pdf#page=4)

另有 26 个候选区域因边界不明确或图片数量、尺寸限制未展开；请[查看完整论文](https://dafx26.mit.edu/assets/papers/DAFx26_paper_48.pdf)中的原始排版。

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。
- 评分规则：type-aware-v1
- 评分模型：muse-spark-1.3-contributor
- 评分请求协议：openai_responses

---

[← 返回 dafx-2026 论文汇总](/posts/conference-dafx-2026/)
