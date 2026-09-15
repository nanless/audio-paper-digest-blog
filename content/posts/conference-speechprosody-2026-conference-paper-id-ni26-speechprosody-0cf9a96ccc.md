---
title: "Equilibrium Dynamics of Near-Merger: Functional Load Effects in Cantonese Tone Contrast"
date: 2026-09-14
draft: false
description: "论文以粤语上升调 T2-T5 为对象，用发音与感知分离的样例模型证明最小对比例决定生产端平衡距离，而感知端随功能负荷下降更快塌缩，零负荷时走向完全合并，代价是一维基频目标与理想化词库的简化。"
tags: ["形式化分析", "语音学与音系", "言语感知", "音频分类"]
categories: ["speechprosody-2026 论文"]
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_paper_id: "conference:speechprosody:2026:conference-paper-id:ni26_speechprosody"
paper_digest_source_kind: conference
paper_digest_conference_id: "speechprosody-2026"
paper_digest_conference_record_url: "https://www.isca-archive.org/speechprosody_2026/ni26_speechprosody.html"
paper_digest_conference_pdf_url: "https://www.isca-archive.org/speechprosody_2026/ni26_speechprosody.pdf"
paper_digest_api_reader_contract: "beginner-researcher-v3"
paper_digest_api_reader_article_sha256: "8d94b22acc7c95c52b9d6e62fd05a77e544700cd69f39910e7dd06c0d5575c91"
paper_digest_api_reader_plan_sha256: "b298ad5d03cf45560bb677eb59594ef56cb084308cf2990192134149339dd6b9"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings-v4"
paper_digest_api_reader_source_bindings_sha256: "be4fa119766272982f9f033b5495828198747b9ec7df95a2f0dcb3fc086562cb"
paper_digest_api_reader_source_table_count: 2
paper_digest_api_reader_source_formula_count: 0
paper_digest_api_reader_structured_artifacts_sha256: "99fcb464b161c6531d8d7b90e5fbf93996546085764998c2156b7d019d90f463"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity-v1"
paper_digest_api_reader_author_identity_sha256: "95a1ddf91b6a2981a8b49fb306cc5472ab87063c1d3d251a54951d4f6f557ac9"
paper_digest_api_reader_author_count: 2
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity-v1"
paper_digest_api_reader_resource_identity_sha256: "f3feff7676cfc7aa5bcd3e3060e849969caf30aa3d429dd057b8ce72323aa297"
paper_digest_api_reader_resource_count: 0
paper_digest_api_reader_decision_projection: "api-reader-decision-projection-v2"
paper_digest_scoring_contract: "api-scoring-audit-v2"
paper_digest_taxonomy_contract: "paper-taxonomy-flat-tags-compat-v1"
paper_digest_taxonomy_selection_contract: "paper-taxonomy-selection-v1"
paper_digest_taxonomy_registry_version: "paper-taxonomy-v1"
paper_digest_taxonomy_registry_sha256: "15c82a567ce5a55dc1175684ed08b64c158558639d9c8fb822c9587ec32a8778"
paper_digest_taxonomy_concepts: [{"facet":"method","id":"method.formal-analysis","label":"形式化分析"},{"facet":"scientific_topic","id":"scientific_topic.phonetics","label":"语音学与音系"},{"facet":"scientific_topic","id":"scientific_topic.speech-perception","label":"言语感知"},{"facet":"task","id":"task.audio-classification","label":"音频分类"}]
paper_digest_primary_task: "音频分类"
paper_digest_primary_method: "形式化分析"
paper_digest_score: 5.7
paper_digest_rank_bucket: "前50%"
paper_digest_document_type: "理论研究"
paper_digest_conference_structure: replayable-pdf-layout-v1
---

# 📄 发得出却听不出：粤语 T2-T5 近合并如何被最小对比例稳住

> 英文题目：*Equilibrium Dynamics of Near-Merger: Functional Load Effects in Cantonese Tone Contrast*

> 会议身份：`conference:speechprosody:2026:conference-paper-id:ni26_speechprosody`


> ✅ 来源为官方会议 PDF；表格与 Figure 按原文证据绑定。PDF 公式以原页区域图片展示，未冒称作者原始 TeX。

> 会议来源：[官方记录](https://www.isca-archive.org/speechprosody_2026/ni26_speechprosody.html) · [官方 PDF](https://www.isca-archive.org/speechprosody_2026/ni26_speechprosody.pdf)

标签：#形式化分析 #语音学与音系 #言语感知 #音频分类

评分：**5.7/10** | 创新 1.4/2 | 技术严谨 0.8/1.5 | 实验充分 0.5/1.5 | 清晰度 0.8/1 | 影响力 0.8/1.5 | 开源 1.0/1.5 | 可复现 0.1/0.5 | 工程/实践 0.3/1.5

排名：前50% | 文档类型：理论研究

## 👥 作者与机构

- Tianyi Ni：机构信息未能从会议 PDF 纯文本可靠映射
- Rebecca Morley：机构信息未能从会议 PDF 纯文本可靠映射

## 📌 核心摘要

粤语上升调T2与T5近合并研究输入为调尾基频F0目标值的一维声学分布，输出为产生与感知两套范畴均值随迭代演化的距离，要求解释为何产生可保留细微分离而感知先行塌缩，难点在于模糊证据在两空间中的污染路径不对称且受最小对功能负载约束。方法链分四步：先以232个T2与242个T5真实语料初始化双空间样例库并区分单例与最小对词项，再在产生端依次施加时长截断欠射与最小对超发音增强以形成对比目标，其后叠加高斯归并噪声并经经验回路回写，最后在感知端用高斯核分类器判定类别并对模糊双例执行双重存储。产生输出作为感知输入进入下一轮迭代，感知误判只污染感知库而不直接改写产生目标，从而形成非对称耦合的平衡动力学。相对共享样例库的经典样例模型，分离存储加非对称入库是关键机制差异，使模糊证据的平均效应集中拉近感知均值而产生端仍受超发音牵引，实际意义在于用功能负载比例解释了稳定近合并态的维持条件。在以232个T2与242个T5真实语料初始化的仿真任务下，产生语法的对比距离指标在约800轮迭代后仍为分离保持值，高于感知语法的对比距离指标在约600轮迭代后压缩后的低值。该结论适用边界受限于单维调尾高度、无语境与等频词选择的理想词库，外推到多线索自然语流或儿童发展轨迹尚未验证。原文未披露训练、推理或部署成本。

## 🔗 开源与复现资源

本次未形成可展示的已核验资源记录，开放状态尚未核实。
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 研究对象是什么：为什么只看粤语 T2 与 T5？

本文输入是粤语声调在真实交际中的保持与消失问题，目标是解释一种常见但难建模的状态：发音上还能测出差别，听觉上已经分不清。作者把镜头对准第二声与第五声这对上升调。按论文交代，粤语在开口或鼻尾音节中有 6 个对立声调，另有只出现在塞音尾的入声调，基频是主要线索，调高、调向和整体基频移动共同区分声调。T2 与 T5 轨迹几乎重合，主要差别在末端调高，这使它们天然容易混淆。

要理解拥挤的背景，需要先看 6 个调的平均轮廓。横轴是归一化时间，纵轴是半音为单位的基频，T2 用较粗的上升曲线标出，T5 用另一条较平缓的上升曲线标出，其余声调为灰色背景线。论文指出低频区尤其拥挤，T3、T4、T5、T6 聚在一起，多个对立都脆弱，T2-T5、T3-T6、T4-T6 都有合并或近合并报告，年轻人在自然语流中甚至出现完全合并。同一社区会出现代际差异：年长者感知与发音都保留区别，年轻人即使发音仍有微小系统分离，感知也可能失败。

下面这张平均轮廓图先建立声学事实：两条上升调有多接近，其他调在何处形成干扰。

> **看图路径：** 1. 先看横轴归一化时间与纵轴半音基频，确认这是整段声调轮廓；2. 比较蓝色 T2 与红色 T5 在起点、中段和末端的相对位置；3. 再看灰色 T1、T3、T4、T6 的分布，确认低频区拥挤

[![原论文 Figure 1：Mean Cantonese lexical tone contours, based on data from \[14\], with T2 and T5 highlighted.](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/speechprosody-2026/c6a91b5b7395/figure-1.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/speechprosody-2026/c6a91b5b7395/figure-1.png)

*论文图 1。原论文 Figure 1：“Mean Cantonese lexical tone contours, based on data from [14], with T2 and T5 highlighted.”。*

这张图的可读方法是把 T2 和 T5 当作前景，把其余 4 条灰线当作声调空间的背景密度。两条前景线在起点都位于约 90 半音附近，中段都先轻微下降再回升，差异主要在后三分之一逐渐拉开，T2 末端明显更高，T5 末端只升到 T3 附近高度。同时可以看到 T1 在高处保持平坦，T4 一路下行后低平，T6 与 T3 在中低部平坦延伸，正好把 T5 的上升尾部夹在中间。这种布局说明 T5 的感知不仅受 T2 牵引，还受周围平调的掩蔽。论文因此不把 T2-T5 当作孤立的两类问题，而是把它放在整个低频拥挤系统中讨论，这也为后文只用末端基频目标建模留下了一个需要记住的简化点。

### 已有路线如何解释合并：本文站在哪条线上？

第一条路线是历史音系学的合并研究。典型例子是英语低元音合并，特点是变化很少一步完成，中间会经历重叠增大、说话人之间和代际之间变异增大的渐进过程。近合并被定义为这个轨迹的中间阶段：感知对立塌缩，但生产保留小而系统的差异。这条路线提供了本文的问题框架，即系统何时停在近合并、何时走完到完全合并。

第二条路线是功能负荷与词库竞争。功能负荷的白话含义是这个区别能帮你分开多少个词，区分的词越多，丢掉它的代价越大。已有语料研究显示高功能负荷抑制对立消失，粤语感知实验也显示有竞争词的项目边界更清晰。超发音与省力假说进一步给出机制：在需要保住词义区别时多用力，在不需要时省力。论文把这条路线变成可调参数，即词库中重叠对所占比例。

第三条路线是样例动力学模型。标准样例模型把生产与感知看作共享同一记忆库的平行过程，词频、弱化和竞争通过记忆更新影响演化。但近合并的证据对共享库假设构成挑战，因为同一说话人可以发出自己听不出的区别。于是本文选择分离生产与感知两个记忆空间，再用一轮发音到感知的反馈把它们连起来。相关工作的对照点很清楚：同输入都是声学分布，同目标都是解释合并，同运行阶段都是多轮迭代演化，差别在于监督与存储规则。本文的特殊处是模糊样例同时存入两类，而不是丢弃或降权，这直接制造了感知端更强的平均化拉力。

### 本文要回答什么：三种结局由什么决定？

论文把问题写成结局分类：在发音、感知与词库相互作用下，系统何时稳定为不合并、何时稳定为近合并、何时走向完全合并。输入是 T2 与 T5 的真实基频样例分布，输出是长时间迭代后两类均值之间还能剩多少距离，以及这个距离在生产端和感知端是否一致。

关键操作变量是重叠对比例。白话说，就是词库里有多少音节同时占据 T2 和 T5 两个位置，例如同一音节既有 T2 词又有 T5 词；其余只占一边的词称为单例。比例越高，意味着每次随机抽到需要用力保区别的词的机会越多；比例为零意味着这个声调区别已经不承担任何分词工作。论文的判断标准也相应分为两层：生产端是否保持正的均值差且不再继续缩小，感知端在生产达到平衡时还能保留多少可分距离。

举一个教学例子帮助定位，但不代表论文数据：假设词库只有椅子与耳朵这类最小对，模型每次抽样都可能触发增强，区别容易保住；假设词库几乎全是单例，抽样多半直接进入省力与弱化，区别会被记忆平均抹平。例子只是说明比例的作用方向，真正的定量关系要看后文的解析推导与仿真扫描。

### 方法全景：一个样例如何走完一轮？

先沿一个样本走完全程。假设说话人想说一个 T2 词，模型先做词项选择，从该词项所属的声调小类中随机抽出一个旧样例作为本次发音的起点。这个起点带有具体的末端基频值。接着模型模拟自然语流的弱化：因为时长有限，实际轮廓来不及完全达到目标，观测值向起点与目标之间回落。然后模型检查该词项是否为重叠对：若是单例，直接进入后续存储；若是重叠对，再施加 1 次推离边界的增强，T2 向上推，T5 向下推，离边界越近推得越强。

增强与弱化后的值再经过 1 次向类均值靠拢的固化，并加入高斯噪声，然后被送往感知端。感知端先用高斯核分类器计算它更像 T2 还是 T5，只有重叠对走概率分类，单例直接归入正确类。接着对重叠对做模糊检验：若两类后验概率过于接近，就判定为模糊。存储规则是全篇不对称的核心：感知端把清晰样例存入胜者类，把模糊样例同时存入两类；生产端则利用词义与语境等非声学信息，把该样例存回它本来的正确词类。最后所有样例按轮次做乘性权重衰减，旧记忆影响变小，新样例权重为 1。

这个设计的安排理由在原文中有明确交代。分离两个空间是为了容纳发音与感知错位；模糊样例双存是为了让感知端在低功能负荷下更快被拉到一起；生产端按正确类存储是为了让发音端即使听不准也能靠高层信息维持区别。记忆衰减与固化则共同防止系统被极早期样例锁死，也防止随机噪声无限累积。

### 词库与记忆如何组织：样例放在哪里？

样例空间被刻意做成 1 维，对应声调末端时刻的基频目标。论文选择这个维度是因为 T2 与 T5 的主要区别就在偏移高度，1 维足以抓住第一阶矛盾，同时让解析推导可行。生产与感知各有一套 T2 和 T5 样例池，都用真实数据随机抽样初始化。每个声调类下面再按具体音节词项划分词位子类别，抽样时先选词项再选样例，这样才能判断本次发音是否面临最小对竞争。

权重机制很简单：每个样例初始权重为 1，每轮乘以小于 1 的衰减因子，重新进入生产循环的样例作为新样例权重重置为 1。加权均值决定类别中心，旧样例自然淡出。固化机制是把当前样例向本类均值拉回一小部分比例，再加噪声，这使类别既稳定又保留随机变异。

**近合并 × 完全合并：** 近合并指感知上已难以区分但发音上仍保留系统性小差异的中间状态，完全合并指发音与感知都不再保留类别距离；二者搭配是因为论文要把同一个 T2-T5 系统放在一条连续演化轨迹上比较，近合并由部分最小对提供发音端超发音支撑而暂时稳住，完全合并是最小对比例归零后支撑消失的终点，组合意义在于把合并从非此即彼变成可计算平衡距离的状态。

**功能负荷 × 最小对：** 功能负荷指一个对立能区分多少词项的实用负担，最小对指仅因 T2 与 T5 不同而构成竞争的 1 对词；前者负责给出系统为何要保留区别的压力大小，后者负责在模型中落实这种压力的触发位置，搭配理由是只有落在重叠对上的样例才触发超发音，组合后最小对比例成为可直接代入平衡公式的词库参数。

理解这组结构时容易误以为样例越多类别越清晰，论文后文恰好给出反例：感知端样例越多，模糊样例越多，均值反而被拉得更近。记忆在这里不是越丰富越好，关键看存入位置是否正确。

### 发音端的两股力与感知端的分类检验是什么？

发音端先有欠发音。原文采用指数目标逼近形式，实际实现值等于起点加上目标与起点之差乘以与时长和速率有关的系数。时长从有界正态分布抽取，速率是类别相关常数，时长越短或速率越小，欠发音越严重，轮廓形状变异越大。这一步对所有样例都发生，模拟自然语流的省力与截断。

再有超发音，只发生在重叠对。做法是计算当前值到两类均值中点的距离，用反 S 形缩放决定增强量，离边界越近增强越大，方向是 T2 向上、T5 向下。论文强调增强强度随两类均值靠近而变化，因此它不是固定偏移，而是一种依赖当前系统状态的反馈控制。固化与噪声随后加入，保证更新不是完全确定性的。

感知端先做核加权分类：把当前发音值与本类所有样例比较，距离越近权重越大，带宽控制决策的锐利程度，带宽小则只看邻近样例，带宽大则更宽容。只对重叠对做概率分类，单例直接归正。然后做模糊检验：计算两类后验概率之差的绝对值，若小于阈值则判为模糊。单例跳过这一步，直接进入正确存储。

**超发音 × 欠发音：** 超发音指在有竞争时把目标基频推离边界以增强区别的用力机制，欠发音指因时长受限或省力而达不到目标的自然弱化；前者只作用于重叠对，后者作用于所有被抽取的样例，搭配理由是二者方向相反才能形成拉锯，组合意义在于平衡距离就是增强与弱化相互抵消后剩下的稳定间隔。

**生产样例空间 × 感知样例空间：** 生产样例空间记录说话人实际发出并按真实词项存回的基频记忆，感知样例空间记录听者按分类结果存下的基频记忆；前者靠词义和语境纠正存储位置，后者会被模糊样例同时写入两类，搭配理由是只有分开存储才能复现发得出却听不出的不对称，组合意义在于让同一轮发音在两端留下不同的记忆轨迹。

**样例 × 词位子类别：** 样例指 1 次具体发音留下的带权重的基频记忆点，词位子类别指同一声调下按具体音节词项划分的小类；前者负责提供可被抽取、衰减和更新的变异材料，后者负责标记该样例是否处于最小对竞争中，搭配理由是模型要先按词位抽样再决定是否超发音，组合后词库结构才能逐个样例地调制语音实现。

这组搭配的理由是分工明确：发音端用连续的推拉改变数值，感知端用离散的归类改变记忆归属。前者决定下一轮送入感知的值在哪里，后者决定这个值会污染一个类还是同时污染两个类，二者闭环后自然产生生产稳、感知塌的不对称。

### 没有神经网络训练时，模型在迭代什么？

本研究没有训练神经网络，也没有梯度反传、可学习权重或冻结主干的概念。该节必须明确说明这一点。真实计算过程是基于规则的样例仿真：每轮抽取一个词项、生成一个发音值、分类并存储、更新加权均值与权重，重复上 1000 轮后观察均值轨迹与平衡状态。所谓学习只是记忆库的替换与衰减，所谓推理只是核分类与阈值检验，没有优化器、没有损失函数、没有早停。

基线动态是理解后文平衡扫描的前提。论文展示了生产与感知两套语法的加权平均基频随轮次的变化。初始阶段两端平行演化，T2 均值从高处逐渐下移，T5 均值基本维持在低位。随着分布靠近，模糊样例增多，感知端出现双向平均效应，两条均值线被拉向彼此，压缩明显；生产端则因重叠对的超发音与正确回存而保持更稳的分离，只是缓慢缩小。

下面这组时间演化图是仿真过程的直接记录，左为生产端，右为感知端，横轴为迭代轮次，纵轴为加权平均基频。

> **看图路径：** 1. 对比左右两面板纵轴加权平均基频与横轴迭代轮次；2. 观察蓝色 T2 均值持续下移而红色 T5 基本平坦的差异；3. 定位 600 至 800 轮附近感知端两线收窄的转折

[![原论文 Figure 2：Temporal evolution of category means in production and perception.](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/speechprosody-2026/c6a91b5b7395/figure-2.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/speechprosody-2026/c6a91b5b7395/figure-2.png)

*论文图 2。原论文 Figure 2：“Temporal evolution of category means in production and perception.”。*

从像素可见，左侧生产端蓝色 T2 线从约 93.8 半音附近单调下降到约 91.1 半音，红色 T5 线始终在 91.0 附近小幅波动，两线差距缩小但始终为正。右侧感知端蓝色 T2 线同样下降，但在 600 至 800 轮之间的灰色虚线区间出现更明显的收窄，红色 T5 线在 800 轮附近甚至轻微上抬，两线在 1200 轮后几乎相接。这 1 对比说明同一批发音值在两端留下不同记忆：生产端靠正确回存保住中心，感知端因模糊双存被平均拉平。论文把 600 至 800 轮描述为模糊累积引发强平均的阶段，这为后文感知更快塌缩埋下机制伏笔。

### 数据与仿真条件如何设置：从哪里初始化？

数据来自香港粤语声调合并的已有采集，原始目标是比较合并与不合并的发音人。基频轮廓在 8 个等距时间点采样，以半音提取，首尾两点为避开起止扰动而被排除。T2 与 T5 的对照只保留不合并发音人的清晰 productions，每个目标音节在固定载体句中读三遍。初始化时从观测数据随机抽样构成 T2 与 T5 样例池，声调空间取第 8 个时间点的末端基频目标。词库由单音节词按声调与最小对状态标注，重叠对同时占据两调，单例只占一调。

比较公平性依赖初始化一致：生产与感知从同一批真实样例出发，1 维表示相同，差别只来自后续的增强、分类与存储规则。扫描最小对比例时，模型对每个比例重新初始化词库结构，再运行到生产达到平衡，记录该时刻的感知距离，因此不同比例之间的感知差距可归因于词库支撑不同，而不是随机起点不同。

下表把数据规模与采集协议整理为可核对的条件，指标方向是规模越大初始化越稳定，表中数字全部来自原文连续句，单位保留原文写法。

| 条件 | 指标 | T2 侧 | T5 侧 | 采集协议 |
| --- | --- | --- | --- | --- |
| 说话人筛选 | 不合并者人数 | 7 人 | 7 人 | 同一批不合并发音人 |
| 样例规模 | 可用样例数 | 232 个样例 | 242 个样例 | 过滤后保留 |
| 重复次数 | 每音节遍数 | 3 遍 | 3 遍 | 固定载体句 |
| 轮廓采样 | 时间点数 | 8 个时间点 | 8 个时间点 | 半音提取 |
| 建模维度 | 末端目标点 | 第 8 时间点 | 第 8 时间点 | 首尾点排除后使用 |

表后需要说明代价与边界。232 与 242 的样例量对初始化两类均值足够，但只用不合并者的清晰发音意味着起点本身偏分离，演化初期的下降部分包含从清晰起点向弱化平衡的回归，不能直接解读为自然社区的代际速度。只用末端一点建模抓住了 T2 与 T5 的主要线索，却丢掉了调形、时长与语境信息，这使结论更适用于偏移高度主导的对立，不宜直接推广到 T3-T6 或 T4-T6 等可能依赖其他线索的合并。论文未报告时长分布参数、核带宽、模糊阈值与衰减率的具体数值，复现时只能按机制重设并做敏感性扫描，这是一个具体缺项。

### 生产端能稳住多大距离：最小对比例的作用有多大？

生产平衡的定义是两类均值差不再缩小且保持为正。论文把平衡约束直接代入更新方程，得到最小对比例与平衡距离的闭式关系：比例越高，平衡距离越大；比例很低时平衡距离很小；比例为零时平衡解塌到零，即完全合并。曲线形状还显示即使中等偏小的比例也能带来可观的稳定作用，说明少量重叠对即可提供不成比例的支撑。原文把这称为功能负荷假说的样例动力学实例化。

下面这条闭式曲线是生产端的核心理论预测，横轴为重叠对比例，纵轴为平衡距离。

> **看图路径：** 1. 先看横轴最小对比例与纵轴平衡距离的单调关系；2. 观察比例很小时曲线陡峭、比例增大后增益放缓；3. 确认比例为零时曲线回到原点的合并含义

[![原论文 Figure 4：Closed-form equilibrium contrast distance (∆∗) as a function of the proportion of doublets in the…](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/speechprosody-2026/c6a91b5b7395/figure-4.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/speechprosody-2026/c6a91b5b7395/figure-4.png)

*论文图 4。原论文 Figure 4：“Closed-form equilibrium contrast distance (∆∗) as a function of the proportion of doublets in the lexicon (πdoublet)”。*

从可见像素看，曲线从原点出发快速上升，在比例约 0.05 至 0.2 区间已抬升到可观高度，之后斜率放缓并趋于饱和，最高约 1.1 附近。图中还标出不同参数下的分段投影，含义是即使词库只有一小部分最小对，生产系统仍能维持正间隔。这种非线性很重要：它说明保住区别不一定需要词库大面积重叠，关键是保留少数仍在使用的竞争对。反过来说，一旦这些少数对因词汇更替而消失，系统会迅速滑向零点。

重提该结果时要增加适用条件。闭式推导依赖等词选择概率的理想化假设，真实词频会放大高频重叠对的作用，也会加速低频对的退出。论文在讨论中明确指出高频重叠对更能延长近合并，这属于有限解释而非直接仿真证据，应当用支持而非证明的措辞理解。

### 感知为何塌得更快：同一比例下两端差多少？

感知检验的做法是把重叠对比例从零开始以固定步长扫描多个取值，每个取值运行到生产平衡，再记录该时刻的感知距离。生产距离随比例平滑上升，感知距离则在低比例区几乎为零，即使生产仍保留正间隔，感知也已完全重合；只有比例足够大后感知才开始维持可观分离，且在大部分区间落后于生产。这种不对称说明感知表征对功能负荷下降更敏感，是先塌的一端。

下表把扫描设计整理为可执行的对照，表中轮次与比例取自原文，单位保留原文写法，便于复现时对齐。

| 扫描维度 | 取值设置 | 生产端记录 | 感知端记录 | 判定方向 |
| --- | --- | --- | --- | --- |
| 比例网格 | 20 个取值 | 从 0 起步 | 从 0 起步 | 覆盖 0 至 1 |
| 比例步长 | 0.05 步长 | 含 0.05 取值 | 含 0.10 取值 | 等距扫描 |
| 转折区间 | 600 轮至 800 轮 | 差距缓慢缩小 | 差距快速压缩 | 感知先塌 |
| 低比例区 | 接近 0 比例 | 保留小正间隔 | 接近完全重合 | 不对称成立 |

表后解释主要收益与代价。收益是该对照把生产稳与感知塌放在同一比例轴上比较，避免了用不同随机种子或不同时刻比较的偏差。代价是感知距离只在生产平衡时刻取样，没有展示感知自身的渐近平衡，低比例区的零值可能包含取样时刻较早或模糊双存尚未饱和的影响。未胜出项在这里就是低比例感知：它在所有小比例下都输给生产端，这个负结果恰好是论文要强调的机制，而非需要掩盖的失败。

下面这张双曲线图把上述扫描可视化，横轴为重叠对比例，纵轴为对比距离，蓝色实线为生产，红色虚线为感知。

> **看图路径：** 1. 区分蓝色实线生产端与红色虚线感知端的图例；2. 观察感知端在中间比例区间的陡峭爬升；3. 比较两端在低比例区和高比例区的差距变化

[![原论文 Figure 3：Perceptual contrast distance at equilibrium across dif- ferent proportions of doublets (πdoublet).](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/speechprosody-2026/c6a91b5b7395/figure-3.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/speechprosody-2026/c6a91b5b7395/figure-3.png)

*论文图 3。原论文 Figure 3：“Perceptual contrast distance at equilibrium across dif- ferent proportions of doublets (πdoublet).”。*

从像素可见，蓝色生产曲线从零单调凹增，全程平滑；红色感知曲线在约 0.4 之前贴近零线，在约 0.45 至 0.6 区间陡峭爬升，之后逐渐贴近蓝色线但始终略低。这种阈值式爬升不能解读为感知在某一步突然学会区别，而应理解为模糊样例占比越过临界后，核分类的平均化拉力才被足够多的清晰重叠对抵消。论文因此判断感知是功能负荷的敏感指示器，这对儿童习得讨论也有含义：早期样例少时分类更锐利，样例积累后模糊证据增多，感知区别可能在发育中丢失，这与年轻人听不出但发得出仍有小差的现象一致，但该发育推论属于待验证的类比，不是本仿真的直接证据。

### 哪些结论不能推太远：缺了什么验证？

第一类限制是表示简化。1 维末端基频抓住了 T2 与 T5 的主要线索，但真实声调包含调形、时长、音质与载体语境，单例与重叠对的划分也只按音节声调是否共现，没有引入词频、句法类别或语义可预测性。论文提到高频重叠对可能更抗合并，但仿真使用等概率选词，因此该推论是基于文献的有限解释，不是本模型直接显示的结果。

第二类限制是参数与统计缺项。原文未给出时长分布的具体均值方差、目标逼近速率、最大增强量、固化比例、噪声方差、核带宽、模糊阈值与衰减率的完整取值，也未报告多次随机种子的均值方差或显著性检验。复现者可以重走机制，但无法逐数对齐曲线高度，只能对齐形状：生产单调凹增且过原点，感知低区贴零、中区陡升、高区贴近生产。

第三类限制是外部效度。初始化只用不合并者的清晰发音，演化起点偏分离；词库为单音节理想化结构，没有多音节与语流语境；儿童习得段落是发育类比，没有儿童数据验证。资源状态方面，本次未发现来源绑定且完成验证的代码、模型或数据链接，因此不得声称代码或数据已公开，只能说论文声明数据来自已有文献的采集，复现需自行按描述重建仿真。

### 要复现这套机制：先做什么、用什么核对？

第一步重建数据起点。按原文协议准备 T2 与 T5 的末端基频样例池，规模量级参考 232 与 242，采样 8 个等距点并排除首尾扰动后取末端点。若拿不到原数据，可用自己采集的香港粤语上升调替代，但必须报告说话人是否为不合并者、每音节重复遍数与载体句是否固定，否则起点分离度不同会导致演化速度不可比。

第二步重建一轮循环。实现顺序是按词项抽样、欠发音弱化、重叠对超发音、固化加噪、核分类、模糊检验、双空间分别存储、权重衰减。核对点是单例跳过概率分类与模糊检验，重叠对走全部分支；感知模糊样例同时写入两类，生产样例按真实词项存回正确类。建议先固定一个中等重叠比例跑出生产缓慢下降而感知在数百轮后快速收窄的基线，再开始扫描比例。

第三步扫描与判定。重叠比例从零到一等距取约 20 个值，每个值独立初始化并运行到生产距离不再缩小，记录生产与感知距离。预期复现的定性形状比具体高度更重要：生产过原点单调上升，感知低区贴零、中区陡升。还需补的验证是多种子重复、带宽与阈值的敏感性、以及引入词频加权选词后阈值位置是否移动，这些在原文中未报告，补上后才能判断感知陡峭区是稳健现象还是特定参数的产物。

### 何时值得借用这个模型：带走哪句话？

当研究对象呈现发音可测而感知已混，且怀疑词库支撑在起作用时，这个分离记忆加模糊双存的框架值得尝试。它把抽象的功能负荷变成可调的词库比例，把省力与保区别变成方向相反的连续操作，把分类错误变成可累积的记忆污染，三者闭环后自然产生生产与感知的不对称演化。对粤语 T2-T5 而言，结论是近合并可以是需要条件维持的平衡态，而不是走向合并途中的偶然停顿，条件就是词库中仍有最小对在提供增强压力。

不值得直接套用的情形也要记住。若对立的主要线索不是单点基频高度，若词频高度偏斜，若语境能强烈消解歧义，模型中的 1 维表示与等概率抽样都需要先改。论文特有的误解是把感知陡峭爬升当作感知突然变好，实际上它是平均化拉力与增强支撑的力量对比越过临界的表现；另一个误解是把少量重叠对能稳住生产当作永远稳住，实际上比例归零时平衡解为零，系统仍会走向完全合并。带走的可操作建议是：做田野或实验时优先清点仍在使用的最小对及其使用频率，做建模时优先报告带宽、阈值与衰减的敏感性，做发育推论时必须补儿童纵向数据后再谈。

## 📐 原文公式与排版

以下展示论文原页中的数学表达区域，保留原始上下标、分式和符号排版。区域序号仅用于本文导航，不是论文公式编号。

[![原文数学表达区域 1，PDF 第 2 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/speechprosody-2026/825368944dea/figure-1.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/speechprosody-2026/825368944dea/figure-1.png)

区域 1 · [查看论文原页](https://www.isca-archive.org/speechprosody_2026/ni26_speechprosody.pdf#page=2)

[![原文数学表达区域 2，PDF 第 2 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/speechprosody-2026/825368944dea/figure-2.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/speechprosody-2026/825368944dea/figure-2.png)

区域 2 · [查看论文原页](https://www.isca-archive.org/speechprosody_2026/ni26_speechprosody.pdf#page=2)

[![原文数学表达区域 3，PDF 第 2 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/speechprosody-2026/825368944dea/figure-3.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/speechprosody-2026/825368944dea/figure-3.png)

区域 3 · [查看论文原页](https://www.isca-archive.org/speechprosody_2026/ni26_speechprosody.pdf#page=2)

[![原文数学表达区域 4，PDF 第 2 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/speechprosody-2026/825368944dea/figure-4.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/speechprosody-2026/825368944dea/figure-4.png)

区域 4 · [查看论文原页](https://www.isca-archive.org/speechprosody_2026/ni26_speechprosody.pdf#page=2)

[![原文数学表达区域 5，PDF 第 3 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/speechprosody-2026/825368944dea/figure-5.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/speechprosody-2026/825368944dea/figure-5.png)

区域 5 · [查看论文原页](https://www.isca-archive.org/speechprosody_2026/ni26_speechprosody.pdf#page=3)

[![原文数学表达区域 6，PDF 第 3 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/speechprosody-2026/825368944dea/figure-6.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/speechprosody-2026/825368944dea/figure-6.png)

区域 6 · [查看论文原页](https://www.isca-archive.org/speechprosody_2026/ni26_speechprosody.pdf#page=3)

[![原文数学表达区域 7，PDF 第 3 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/speechprosody-2026/825368944dea/figure-7.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/speechprosody-2026/825368944dea/figure-7.png)

区域 7 · [查看论文原页](https://www.isca-archive.org/speechprosody_2026/ni26_speechprosody.pdf#page=3)

[![原文数学表达区域 8，PDF 第 4 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/speechprosody-2026/825368944dea/figure-8.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/speechprosody-2026/825368944dea/figure-8.png)

区域 8 · [查看论文原页](https://www.isca-archive.org/speechprosody_2026/ni26_speechprosody.pdf#page=4)

另有 11 个候选区域因边界不明确或图片数量、尺寸限制未展开；请[查看完整论文](https://www.isca-archive.org/speechprosody_2026/ni26_speechprosody.pdf)中的原始排版。

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。
- 评分规则：type-aware-v1
- 评分模型：muse-spark-1.3-contributor
- 评分请求协议：openai_responses

---

[← 返回 speechprosody-2026 论文汇总](/posts/conference-speechprosody-2026/)
