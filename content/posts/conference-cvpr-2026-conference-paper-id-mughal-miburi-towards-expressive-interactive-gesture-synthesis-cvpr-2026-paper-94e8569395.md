---
title: "MIBURI: Towards Expressive Interactive Gesture Synthesis"
date: 2026-09-13
draft: false
description: "针对具身对话需要因果、低延迟且富有表现力的手势问题，MIBURI 直接复用 Moshi 语音文本模型的内部 token 流，用身体分区残差码本与时间加运动学双变换器逐帧生成手势，并以 36 ms 每帧的在线演示和多说话人评测支撑其因果实时主张，但仍未达到真值自然度且未建模用户身体。"
tags: ["自回归模型", "向量量化", "严格因果", "实时处理", "音视频生成"]
categories: ["cvpr-2026 论文"]
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_paper_id: "conference:cvpr:2026:conference-paper-id:Mughal_MIBURI_Towards_Expressive_Interactive_Gesture_Synthesis_CVPR_2026_paper"
paper_digest_source_kind: conference
paper_digest_conference_id: "cvpr-2026"
paper_digest_conference_record_url: "https://openaccess.thecvf.com/content/CVPR2026/html/Mughal_MIBURI_Towards_Expressive_Interactive_Gesture_Synthesis_CVPR_2026_paper.html"
paper_digest_conference_pdf_url: "https://openaccess.thecvf.com/content/CVPR2026/papers/Mughal_MIBURI_Towards_Expressive_Interactive_Gesture_Synthesis_CVPR_2026_paper.pdf"
paper_digest_api_reader_contract: "beginner-researcher-v3"
paper_digest_api_reader_article_sha256: "bac680c5090b964e0c1de9f941beadaec75319b43db6ea490d8d6209ce7b0ce2"
paper_digest_api_reader_plan_sha256: "d610c98c3f47457901c2706d9e36388d038da448700c401354b83087f2448800"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings-v4"
paper_digest_api_reader_source_bindings_sha256: "eb5f5edf856bdd149a6c88a1a1f996ff50762c1f553bdac2a44caae97f9fb3fe"
paper_digest_api_reader_source_table_count: 4
paper_digest_api_reader_source_formula_count: 0
paper_digest_api_reader_structured_artifacts_sha256: "bb18e55130389a4f49f1e8024ccbadcd60241d1856eb8face019f208ac5e6b59"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity-v1"
paper_digest_api_reader_author_identity_sha256: "dc5d85a88dfd3f860fda235874218655cc4de1479e35d77b8aa866a091f34fc4"
paper_digest_api_reader_author_count: 4
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity-v1"
paper_digest_api_reader_resource_identity_sha256: "8eaf8c6ca8b2781af177d5304015cac7aa1c4fd98e305a4f05d8e66f67c76f51"
paper_digest_api_reader_resource_count: 0
paper_digest_api_reader_decision_projection: "api-reader-decision-projection-v2"
paper_digest_scoring_contract: "api-scoring-audit-v2"
paper_digest_taxonomy_contract: "paper-taxonomy-flat-tags-compat-v1"
paper_digest_taxonomy_selection_contract: "paper-taxonomy-selection-v1"
paper_digest_taxonomy_registry_version: "paper-taxonomy-v1"
paper_digest_taxonomy_registry_sha256: "15c82a567ce5a55dc1175684ed08b64c158558639d9c8fb822c9587ec32a8778"
paper_digest_taxonomy_concepts: [{"facet":"method","id":"method.autoregressive","label":"自回归模型"},{"facet":"method","id":"method.vector-quantization","label":"向量量化"},{"facet":"setting","id":"setting.causal","label":"严格因果"},{"facet":"setting","id":"setting.real-time","label":"实时处理"},{"facet":"task","id":"task.av-generation","label":"音视频生成"}]
paper_digest_primary_task: "音视频生成"
paper_digest_primary_method: "自回归模型"
paper_digest_score: 6.4
paper_digest_rank_bucket: "前50%"
paper_digest_document_type: "方法研究"
paper_digest_conference_structure: replayable-pdf-layout-v1
---

# 📄 不等未来语音：MIBURI 如何用对话模型的内部 token 流直接生成全身手势

> 英文题目：*MIBURI: Towards Expressive Interactive Gesture Synthesis*

> 会议身份：`conference:cvpr:2026:conference-paper-id:Mughal_MIBURI_Towards_Expressive_Interactive_Gesture_Synthesis_CVPR_2026_paper`


> ✅ 来源为官方会议 PDF；表格与 Figure 按原文证据绑定。PDF 公式以原页区域图片展示，未冒称作者原始 TeX。

> 会议来源：[官方记录](https://openaccess.thecvf.com/content/CVPR2026/html/Mughal_MIBURI_Towards_Expressive_Interactive_Gesture_Synthesis_CVPR_2026_paper.html) · [官方 PDF](https://openaccess.thecvf.com/content/CVPR2026/papers/Mughal_MIBURI_Towards_Expressive_Interactive_Gesture_Synthesis_CVPR_2026_paper.pdf)

标签：#自回归模型 #向量量化 #严格因果 #实时处理 #音视频生成

评分：**6.4/10** | 创新 1.5/2 | 技术严谨 1.2/1.5 | 实验充分 1.0/1.5 | 清晰度 0.8/1 | 影响力 0.4/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 1.2/1.5

排名：前50% | 文档类型：方法研究

## 👥 作者与机构

- M. Hamza Mughal：机构信息未能从会议 PDF 纯文本可靠映射
- Rishabh Dabral：机构信息未能从会议 PDF 纯文本可靠映射
- Vera Demberg：机构信息未能从会议 PDF 纯文本可靠映射
- Christian Theobalt：机构信息未能从会议 PDF 纯文本可靠映射

## 📌 核心摘要

具身对话智能体需与实时口语对话同步生成全身手势与面部表情，只能利用过去语音而不能等待未来上下文，还需满足严格因果与实时交互的双重约束。先抽取Moshi对话模型内部语音与文本token流作为语义韵律输入，输入为双流语音文本token，职责是提供富语义声学上下文，输出为时间对齐的上下文嵌入，从而避免传统转写合成流水线的延迟。再将该上下文嵌入与历史手势token送入时间Transformer，输入为多级语义嵌入与历史动作，职责是建模跨帧动态并输出时间上下文，该上下文直接作为条件进入下一步，每步覆盖两帧动作以控制延迟。最后运动学Transformer以时间上下文为输入，职责是逐层补全同一时刻面部、上身和下身细节并经因果解码回放为连续动作，片段级对比与语音激活损失进一步约束轨迹对齐与说话倾听区分。与依赖种子序列与未来帧的非因果基线不同，该因果自回归链无需种子动作并维护注意力缓存逐步生成，保持了低延迟与多样性。在BEAT2单说话人Scott评测设置下，MIBURI(+Face)的FGD为0.753，高于EMAGE的FGD 0.552。其结论适用边界受限于单人说话手势且未建模用户身体反馈，双人互动与长时漂移尚未验证，系统在硬件RTX3090上演示延迟为每帧36ms。

## 🔗 开源与复现资源

本次未形成可展示的已核验资源记录，开放状态尚未核实。
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 输入是什么，要输出什么，为什么必须因果实时？

这篇论文研究的输入是直播对话中的语音与文本流，目标是同步输出说话智能体的全身手势与面部表情。读者可以把 1 次样本想象成连续到来的用户语音与智能体应答语音，系统要在声音发出的同时摆动手臂、移动身体并变化表情，动作与声音在时间上保持对齐。需要保留的信息包括时间对齐关系、说话与倾听状态区分、人物身份差异，以及可复述的因果约束与延迟预算。最终输出是每一步生成固定时长的人体运动帧，可直接驱动参数化人体模型。

论文把因果与实时拆开强调：因果指只用过去与当前语音做预测，实时指在对话流畅允许的毫秒级预算内完成计算。现有扩散与掩码建模方法表现自然，但需要双向语音上下文与长采样时间，还需要种子手势序列，因此与直播语音并行的节奏存在差异。

**因果 × 实时：** 因果指生成当前时刻手势时只能用过去和当前语音，不能偷看未来语句，分工是保证交互逻辑成立；实时指还必须在严格时延内算完并输出，分工是保证对话不断流，二者搭配的原因是只有因果没有速度仍会卡顿，只有速度没有因果则无法与直播语音并行，组合意义是 MIBURI 必须同时满足两者才能作为具身对话的即插模块。

对于刚入门的同学，关键动作是先确认任务的时间方向。离线任务允许看到整段音频再为中间帧配动作，在线任务则要求音频到来即输出动作。论文把后者作为具身对话智能体的核心要求，并指出平均生成速度快与首帧延迟低属于两个指标，非自回归方法要等齐上下文帧才能渲染，首帧等待依然较长。学习依赖上，本节先建立在线、因果、全双工 3 个词的含义，后续方法与实验都围绕它们展开。

### 同输入同目标的路线有哪些，运行阶段有何不同？

在同输入同目标的维度上，共语音手势合成路线以语音生成同步的身体与手部动作为目标。早期基于规则的方法用预录动画实时合成，表现力与多样性处于较低水平；近期基于学习的方法如扩散、掩码变换器、检索增强与流匹配提升了自然度与语义对齐，但多为离线因果形式，需要过去与后续语音，且推理步数较多。另一条路线是具身对话智能体，目标是边说边动。规则与混合系统能够实时运行，动作风格偏僵硬，手势库检索范围有限。

手势机器人等数据驱动系统多为手动轮流交互，只在说话时做动作，且手势模型本身采用离线结构。论文用一张对照表把规则方法、检索加扩散、掩码建模、状态空间模型与自身方法按表现力、因果性、实时性区分，结论是自身同时满足三者。

对照时需要区分运行条件。离线方法允许看到后续语音与真值种子序列，在单说话人小数据上分布距离指标容易占优；在因果多说话人条件下，把实时方法改为因果训练后指标出现下滑，说明现有架构对后续上下文存在依赖。这种运行阶段差异是后文实验公平性讨论的基础。

### 要解决的具体矛盾是什么，成功标准如何定？

核心矛盾是表现力与在线可用性需要兼顾。要表现力，就需要多层次运动细节与语义韵律对齐；要在线，就需要限定语音可见范围、控制扩散采样长度、摆脱对种子序列的依赖。论文把成功标准定为 3 条可核对项。第一是因果性，即每个手势 token 只条件于过去手势与小于等于当前时刻的语音文本 token。

第二是低延迟，即每步只生成很短时间窗并用缓存加速，使演示系统达到每帧数十毫秒量级；第三是表现力与多样性，即保持生动姿态变化，并在说话时呈现语音对齐的动作、在倾听时呈现收敛的倾听姿态。举例来说，教学例子是当智能体正在听用户说话，理想输出应是小幅倾听姿态，这个例子只用于理解状态区分。

### MIBURI 的全景路径如何避开传统多段流水线？

全景路径可以沿一个样本走完。用户语音先进入 Moshi 的语音 token，再经 Moshi 这一语音文本大模型生成应答的语音 token 与文本 token，MIBURI 直接取其内部嵌入作为条件，每步生成对应时长的手势 token，再经身体分区解码器还原为人体参数。传统链路是语音识别转写用户话语，语言模型生成回复文本，语音合成生成回复语音，再用声学编码器提嵌入，最后送入手势生成器，每段都引入等待与编解码开销。MIBURI 的改动是把手势模块搭在对话模型内部流上，省去等整句合成与 2 次声学编码。

**Moshi 内部 token 流 × 手势合成：** Moshi 内部 token 流分工是提供已对齐的语音声学与文本语义嵌入，包括说话人与听者双流和残差量化的多层细节；手势合成分工是把这些嵌入转成身体运动，分工是建模时间动力学与部位层次，搭配理由是直接取内部流省去了语音识别加语言模型加语音合成加声学编码的多段流水线，组合意义是降低等待整句语音生成的延迟并保留韵律语义上下文。

下图把上下两条路径并排画出，上排经过多个串行模块，下排只有语音 token、Moshi、内部流与手势模块，输出侧明确从上身手势变为全身手势与面部表情，该对比是理解延迟设计的关键，图中文字与箭头走向提供了完整的系统组成说明。

> **看图路径：** 1. 先看上排传统链路从用户语音经语音识别、语言模型、语音合成到声学编码再到手势的串行箭头；2. 再看下排从用户语音经语音 token 进入 Moshi 再分出内部文本语音流直达手势模块的短路径；3. 对比两排最终输出标注，确认上排只写上身手势而下排写全身手势与面部表情

[![原论文 Figure 2：Overview. Existing solutions \[9, 33\] to animate ECAs involve a complex pipeline (above) of…](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/892a75d3caeb/figure-2.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/892a75d3caeb/figure-2.png)

*论文图 2。原论文 Figure 2：“Overview. Existing solutions [9, 33] to animate ECAs involve a complex pipeline (above) of multiple components to gen- erate gestures with speech.”。*

从像素看，上排可执行观察是语音识别、语言模型、语音合成、声学编码、手势生成依次排列，箭头上有用户转写、回复文本、回复语音等标注；下排只有 Moshi 与手势模块，中间是文本语音内部流方块，右侧输出画了全身蓝色人体与表情示意。解释是该图只讲系统组成与信息走向，延迟数值需到实现与评测节核对，图中下排输出同时包含全身手势与面部表情也呼应了方法章节的分区建模。论文强调这种搭接能同时利用语义与声学上下文，又保持因果，因为 Moshi 本身是自回归全双工对话模型。

### 身体如何分区编码，时间与运动学如何分工预测？

编码侧先把每帧姿态拆成三部分。上身含手部用旋转表示，下身含全局位移与脚触地信号，面部用表情参数与下颌关节表示。每个分区各训一个残差向量量化变分自编码器，编码器由下采样 1 维卷积与因果自注意变换器组成，输出先下采样再量化为多层离散 token，解码器用因果变换器加转置卷积上采样重建。残差的含义是第一层存大动作轮廓，后续层逐级存残差细节，层数越多重建误差越小，推理时每层都要预测。论文在训练数据帧率下每步生成 2 帧，以保持低延迟。

**残差向量量化 × 身体分区码本：** 残差向量量化分工是用多层码本逐级逼近运动残差，把大幅摆动到细微手指变化分层存下；身体分区码本分工是把上身含手、下身含位移触地、面部分开各训一个编解码器，因为各部位与语音关联尺度不同，搭配理由是分区避免互相抹平细节而残差保留精细度，组合意义是形成时间乘运动学层次的 2 维 token 网格供双变换器预测。

预测侧把 2 维 token 网格拆给两个变换器。时间变换器把同一时刻多层嵌入求和成单输入，沿时间自回归预测下一时刻第一层 token，并用双路因果交叉注意看过去与当前语音文本，加上可学习人物身份嵌入。运动学变换器固定时刻，逐层预测下一部位层级，条件包括时间隐状态、当前时刻语音文本与身份嵌入。教学走查是先由时间变换器定出下一时刻的大方向首层 token，再由运动学变换器逐层补全该时刻的精细部位 token，最后拼成完整手势帧。

**时间变换器 × 运动学变换器：** 时间变换器分工是沿时间轴自回归预测每帧第一层 token，建模动作跨帧连续性并交叉注意过去与当前语音文本；运动学变换器分工是在固定时刻内逐层补全身体部位的残差细节，条件包括时间上下文与当前语音文本身份，搭配理由是把 T 乘 K 的大上下文拆成 2 维以降低注意力长度与推理负担，组合意义是先定大动作走向再填手指表情细节。

下图展示了左侧编解码器与中间 2 维网格、右侧双变换器的连接，网格横轴为时间纵轴为层级，时间变换器下方输出隐状态经分类得到首层 token 并送入运动学变换器，图中求和符号与加号融合标记了信息汇入位置。

> **看图路径：** 1. 沿左侧编码器经残差量化到二维网格再到解码器的纵向路径，确认时间轴与层级轴；2. 看中部时间变换器输出隐状态后经线性分类得到首层 token 并送入右侧运动学变换器的虚线；3. 核对右上语音文本嵌入与人物身份嵌入分别以交叉注意和相加方式进入两个变换器的位置

[![原论文 Figure 3：MIBURI Architecture. Given Moshi’s speech/text tokens(Sec.](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/892a75d3caeb/figure-3.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/892a75d3caeb/figure-3.png)

*论文图 3。原论文 Figure 3：“MIBURI Architecture. Given Moshi’s speech/text tokens(Sec.”。*

从像素看，可执行观察是左侧编码器上图标注身体手势或面部表情二选一，中间黄色气泡内多层嵌入经求和符号汇入时间变换器，右侧运动学变换器每层输入都有加号融合时间隐状态。解释是该图只定义计算依赖，损失在训练节说明，图中从时间隐状态到首层 token 再到逐层补全的箭头也对应了正文的教学走查顺序。论文还说明为省运行时，对下身 token 屏蔽语音文本交叉注意，因为下身与语音文本关联较小。

### 实现上如何保证每步只算两帧还能连贯？

保证连贯的动作有三处。第一是编码时用短窗 2 帧，使每步计算量小且与对话 token 时长对齐，形成与长句节奏匹配的推进方式。第二是注意力用缓存而非重算全历史，自注意只看最近几十个 token，交叉注意看稍长的语音文本窗口，兼顾连贯与速度。第三是身份嵌入每步相加，使多说话人风格得以保持，且摆脱对种子序列的依赖。对下身屏蔽交叉注意是省算力的针对性动作，依据是下身与语音关联弱，正文明确说明该取舍，复现时保持原文设置有助于复现延迟表现。教学例子是把 10 秒序列切成固定长度训练，推理时滑窗推进，该例子只说明窗口机制。

### 训练目标如何组合，哪些实现细节原文未交代？

训练分 2 阶段理解。第一阶段训练身体分区编解码器，目标包括重建与几何损失加每量化层的隐空间嵌入损失，细节指向补充材料，正文保留了具体权重与几何项形式指向补充材料的说明，复现时需查补充或代码。第二阶段联合训练时间与运动学变换器，主损失是对真值 token 的交叉熵并采用教师强制，即训练时用真值历史作为输入。

**对比损失 × 语音激活损失：** 对比损失分工是拉近匹配的真值与生成隐向量并推开 batch 内不匹配对，以对抗自回归趋向平均姿态与时间漂移；语音激活损失分工是把时间变换器输出二分类为说话或倾听，抑制倾听时的幻影手势，搭配理由是一个管表情多样性一个管状态正确性，组合意义是与交叉熵主损失加权后同时保连贯、保多样、保状态区分。

为改善表现力，论文引入两个辅助目标。对比目标先用带温度的 Gumbel Softmax 可微近似离散采样，把分类 logits 转成码本加权隐向量，再在 batch 内对真值与生成隐向量的余弦相似矩阵做 InfoNCE，实际按时间片段计算以鼓励手势阶段轨迹相似。语音激活目标把时间隐状态经二分类头判为倾听或说话，用二元交叉熵监督，促使网络区分状态。完整损失是交叉熵加对比加权与激活加权之和。原文报告了权重与温度选择，对比温度系数的具体取值与片段划分长度指向补充材料核对。推理时用核采样，并用分类器引导增强与语音语义的对齐，时间与运动学分支采用各自的核阈值与共同的 Softmax 温度。

### 训练与推理的计算过程如何可重放？

把计算过程按可重放顺序写清。编码器训练把人体序列下采样为隐序列并逐层量化，监督来自重建几何与码本嵌入，解码时逐层查码本求和再上采样。生成器训练把历史手势多层嵌入求和后送入时间变换器，用交叉熵监督首层预测；再把首层与时间隐状态逐层送入运动学变换器，用交叉熵监督剩余层级。对比分支用可微近似得到生成隐向量并与真值隐向量做 batch 内对比，激活分支用二分类监督说话倾听。

推理时每到来一个对话 token 即做 1 次前向，用缓存中的键值做注意，用核采样逐层抽出手势 token 并解码为 2 帧人体参数。下表把可微近似与引导的可重放条件整理出来，表前问题是随机性与引导从哪里引入，公平条件是固定温度与核阈值。

| 环节 | 可微采样温度 | 引导强度 | 上下文截断 | 采样策略 |
| --- | --- | --- | --- | --- |
| 生成与推理 | Gumbel Softmax 0.4，直通估计 | 单人 1.5，多人 2.3 | 自注意 25，交叉 50 | 时间 0.8，运动学 0.95，温度 0.9 |

表后解释是温度与核阈值共同决定多样性与稳定性，提高引导可增强语音对齐，单人与多人分别调参有助于适配数据规模。代价是采样随机导致单次结果存在波动，论文用分布与节拍指标聚合多样本，复现时应报告多次平均与方差。对比温度与片段长度的具体值回到补充材料核对，按照原文设置执行即可复现流程。

### 数据、划分、基线与指标条件是否一致？

数据采用 BEAT2 的训练验证测试划分，原始有多位说话人，论文去掉 2 名运动跟踪质量不佳的说话人后训练，并在单说话人与多说话人两种设定下评测，另在补充中评测新发布的 Embody3D 数据集。基线分两类，一类是非因果非实时的表现力方法，包括检索增强、掩码建模与早期卷积方法，另一类是强调快速采样的流匹配与状态空间方法，论文还自行实现这些实时方法的因果版本以对比朴素因果化的代价。

除检索方法外，多数基线需要种子序列启动生成，而 MIBURI 不需要，这是比较时必须保留的公平条件差异。指标包括分布对齐的 Frechet 手势距离越低越好、韵律对齐的节拍对齐越高越好、多样性指标越高越好，以及面部均方误差越低越好。论文提醒自动指标只测单方面，与人类感知相关性有限，因此另做感知评测。

下表把正文连续原句中实际出现的划分与序列配置整理成可核对条件，表前问题是训练与测试的数据规模与时间粒度是否足以支撑因果多说话人结论，公平条件是同一数据集划分与帧率，指标方向在表后解释。

| 条件 | 说话人处理 | 测试语音数 | 训练帧率与每步帧数 | 训练序列长 |
| --- | --- | --- | --- | --- |
| BEAT2 划分 | 原始 25 人，去掉 2 人 | 单人 15 句，多人 249 句 | 25 FPS，每步 2 帧 | T 125 对应 10 秒 |

表后解释是该表只交代数据与时间粒度，不含性能高低。多说话人测试量远大于单人，有利于检验跨身份泛化，但去掉低质量说话人意味着结果不直接推广到原始全量分布。每步只生成 2 帧是低延迟设计的前提，但也限制单次前向看到的未来信息，这正是因果约束的代价。未胜出项与边界在结果节结合基线说明，面部评测仅在带面部变体中报告。

### 指标方向与聚合对象如何核对，避免误读？

核对每个数字必须同时确认数据集、模型变体、实验阶段、指标、单位与聚合对象。分布距离越低越好但依赖真值分布，单人小数据下易被种子序列拉低；节拍对齐越高越好但只测韵律峰对齐，不测语义恰当；多样性越高越好但过高可能是抖动，需结合自然度人评；面部误差越低越好但仅在带面部变体中可比。

百分点与相对百分比不同，人评偏好比例的变化应报百分点，不能换算成相对提升夸大效果。不同指标差值不能放到模型列下比较，自动指标不能当人评用。若表头图注或算术冲突，应明确标注冲突而不编造划分口径。本次原表因表头缺失无法安全选择，已改用正文连续原句整理条件表，性能数值的完整对照需回到原文表格与补充核对，这是具体缺项而非结论否定。

### 主结果测了什么，谁在什么条件下赢了，代价是什么？

感知评测让参与者成对比较自然度与与语音恰当性。论文报告 MIBURI 在与非因果基线的对比中获得多数偏好，但在与真值的对比中偏好低于 chance 线，说明超过基线但未达到真值质量，这是必须同时陈述的收益与差距。下图的 3 组柱状对比直观显示了该格局，左侧两组柱高于红线，右侧与真值对比组柱低于红线，且标注了显著性星号。

> **看图路径：** 1. 先确认纵轴为偏好百分比与 50% 红色 chance 线的含义；2. 比较深蓝自然度与橙色恰当性在三组对比中的高低与星号显著性；3. 重点看与真值对比组两根柱都低于 50%，确认尚未超过真值

[![原论文 Figure 4：User Study for Perceptual Evaluation.](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/892a75d3caeb/figure-4.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/892a75d3caeb/figure-4.png)

*论文图 4。原论文 Figure 4：“User Study for Perceptual Evaluation. Here, the red line indicates chance level (50%), 一个星号 stands for p < 0.05 and 三个星号 for p < 0.001.”。*

从像素看，深蓝自然度与橙色恰当性在与 EMAGE 对比中分别接近约八成与 70%，在与 GestureLSM 对比中略高于 60% 与近 60%，在与真值对比中分别跌至约三成与 20%，红色虚线为 50% chance 线。解释是该图只报告偏好比例，不报告参与者人数与统计方法细节，细节指向补充材料，不能把自动指标当人评。论文明确指出定量指标不能替代感知，因此该图是核心证据之一。

定量方面，论文按单人与多人分别报告。在单人设定下，真值种子与未来上下文使基线在分布距离上占优，MIBURI 在节拍对齐上可比；在多人设定下，MIBURI 随数据多样性扩展而提升，在分布距离与节拍对齐上达到最优，而朴素因果化的实时基线显著变差，支持现有架构依赖未来上下文的判断。但数值相同不是同一指标的证据，不同指标差值不能混放，面部误差仅在带面部变体中比较。

部署成本上，在线演示包含模型运行与网页渲染达到每帧数十毫秒，论文另列表比较各方法从前向到人体参数转换的墙钟时间并排除渲染，且每步生成帧数差异巨大，说明平均速度不能等同首帧延迟。下表把正文中连续原句给出的延迟与上下文预算整理为可运行条件的对照，表前问题是在什么时间粒度与缓存下实现实时，公平条件是明确是否含渲染与每步帧数。

| 项目 | 每步手势时长 | 在线演示延迟 | 对话模型延迟与速率 | 注意力缓存 |
| --- | --- | --- | --- | --- |
| MIBURI 运行条件 | 每步 0.08 秒 | 每帧 36 ms，RTX3090 | Moshi 200 ms，12.5 token 每秒，每 token 0.08 秒 | 自注意 25 token，交叉注意 50 token |

表后解释是主要收益是每步只算极短窗并用键值缓存保留历史，使自回归仍能保持低延迟；具体代价是短窗限制长程上下文，需靠缓存长度权衡质量与速度，且演示延迟含渲染而表格墙钟比较排除渲染，二者不能直接等同。未胜出项是单人分布距离与面部误差仍有基线更优，边界是延迟在不同显卡与渲染管线下会变化。

### 拿掉或换掉哪个设计，变化在什么条件下成立？

消融围绕 4 个问题组织。第一是语音文本编码，用标准声学编码对比 Moshi 内部流，结果是内部流在分布距离与节拍对齐上更好，且省去额外音频编码开销，支持直接搭接内部流的动机，但该结论限于 BEAT2 与所用基线编码实现。第二是双变换器对比单变换器，单流需同时建模时间与层级导致注意力上下文膨胀，训练收敛差，分布距离更高、多样性更低且单步时间几乎翻倍，支持拆维设计的必要性。

第三是辅助损失，在交叉熵加激活损失基础上，对比损失改善分布距离而直接对隐向量做均方误差反而变差，说明不是任何隐空间约束都有益。第四是码本层数，层数从少到多重建误差与生成分布距离同步下降，证实残差层级对精细动作的价值，但层数增加会加大逐层预测负担。

下表整理正文连续原句中报告的超参与结构选择，表前问题是各消融的可复现条件是什么，公平条件是同一数据与同一主干下的单变量替换。

| 部件 | 码本层数 | 变换器规模 | 损失权重 | 采样设置 |
| --- | --- | --- | --- | --- |
| MIBURI 配置 | 上身下身 8 层，面部 4 层，T 125 | 时间 4 层 2 头，运动学 2 层 1 头 | 对比 0.1，激活 0.01 | 时间核 0.8，运动学核 0.95，温度 0.9 |

表后解释是该表只给可复现的配置，不直接证明性能高低，性能判断需结合各消融的指标方向。代价是更大模型并未在多人设定下持续变好，论文报告精简版相当或更优，说明容量不是瓶颈。另一组条件是可微采样温度与引导强度，单人引导取低值而多人取高值，表明引导强度需按数据规模调参，不能跨设定直接照搬。未评测边界包括不同码本词汇量与更长缓存的影响。

### 哪些边界未被测到，不能承诺什么？

论文明确的局限是只建模智能体自身运动，未纳入用户的身体动态与完整双人交互上下文，因此处理多方互动手势的能力受限，未来需感知并回应伙伴手势。这是缺失证据而非技术错误，不能据此否定已验证的单方同步能力。另一局限是感知上仍落后真值，尤其在恰当性维度差距更大，说明语义对齐仍有空间。相关性不是因果，对比损失与多样性提升的关联不能直接解读为因果证明，且未测量误判率与长时漂移的量化曲线，不能承诺长对话全程稳定。

训练资源、推理开销、输出帧率与实际延迟需分别讨论，论文给出演示延迟与墙钟比较，但未给出训练算力与显存预算，复现者需自行评估成本。总体趋势不等于每组每步都成立，例如精简版在多人上不输大版，但不能推广为所有规模下小模型恒优。

### 复现先做什么，需要哪些超参与信息条件？

复现应先重建时间对齐与因果掩码。每步生成固定时长手势并与对话 token 一一对应，训练用教师强制，推理用零初始 token 启动并维护键值缓存，自注意与交叉注意分别截断到较短与较长上下文。先跑通身体分区残差编解码器的重建，再接入双变换器，避免一开始就联合调试。关键超参包括每步 2 帧、训练序列长度、分区层数、双变换器层头数、对比与激活权重、核采样阈值与温度，以及单人与多人下不同的引导强度。

信息条件是需要对话模型的内部语音文本嵌入，而非外部声学特征，复现时必须保证嵌入的时间戳与手势帧对齐，否则节拍对齐无从谈起。资源状态方面，本次未发现来源绑定且完成验证的开源链接，不得声称代码模型或数据已公开，论文首页的项目页地址在本次未能确认可达，复现前需自行核对可用性。常见误解是把冻结对话模型等同于输出确定，实际上核采样与引导使输出随机，多次运行需固定种子并报告聚合方式。

### 何时值得尝试，还需补哪项验证？

当任务是直播对话且必须边说边动、不允许等待整句与种子手势时，值得尝试直接复用对话模型内部流加双变换器的路线，尤其在多说话人数据上其扩展性已得到支持。当任务是离线影视级生成且允许双向上下文与多步采样时，传统扩散与检索增强路线可能在分布距离上更优，不必强行因果化。还需补的验证包括用户身体感知的双人评测、长对话漂移曲线、不同硬件下的首帧延迟分解，以及参与者规模与统计方法的完整披露。

教学上应记住因果是逻辑约束而实时是预算约束，残差层级换的是细节对计算量的 trade-off，对比损失与状态分类分别保多样与状态正确，三者缺一都会回到僵硬或幻影手势。

## 📐 原文公式与排版

以下展示论文原页中的数学表达区域，保留原始上下标、分式和符号排版。区域序号仅用于本文导航，不是论文公式编号。

[![原文数学表达区域 1，PDF 第 4 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/8b86f7022dd1/figure-1.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/8b86f7022dd1/figure-1.png)

区域 1 · [查看论文原页](https://openaccess.thecvf.com/content/CVPR2026/papers/Mughal_MIBURI_Towards_Expressive_Interactive_Gesture_Synthesis_CVPR_2026_paper.pdf#page=4)

[![原文数学表达区域 2，PDF 第 5 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/8b86f7022dd1/figure-2.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/8b86f7022dd1/figure-2.png)

区域 2 · [查看论文原页](https://openaccess.thecvf.com/content/CVPR2026/papers/Mughal_MIBURI_Towards_Expressive_Interactive_Gesture_Synthesis_CVPR_2026_paper.pdf#page=5)

[![原文数学表达区域 3，PDF 第 5 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/8b86f7022dd1/figure-3.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/8b86f7022dd1/figure-3.png)

区域 3 · [查看论文原页](https://openaccess.thecvf.com/content/CVPR2026/papers/Mughal_MIBURI_Towards_Expressive_Interactive_Gesture_Synthesis_CVPR_2026_paper.pdf#page=5)

[![原文数学表达区域 4，PDF 第 5 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/8b86f7022dd1/figure-4.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/8b86f7022dd1/figure-4.png)

区域 4 · [查看论文原页](https://openaccess.thecvf.com/content/CVPR2026/papers/Mughal_MIBURI_Towards_Expressive_Interactive_Gesture_Synthesis_CVPR_2026_paper.pdf#page=5)

[![原文数学表达区域 5，PDF 第 8 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/8b86f7022dd1/figure-5.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/8b86f7022dd1/figure-5.png)

区域 5 · [查看论文原页](https://openaccess.thecvf.com/content/CVPR2026/papers/Mughal_MIBURI_Towards_Expressive_Interactive_Gesture_Synthesis_CVPR_2026_paper.pdf#page=8)

[![原文数学表达区域 6，PDF 第 8 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/8b86f7022dd1/figure-6.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/8b86f7022dd1/figure-6.png)

区域 6 · [查看论文原页](https://openaccess.thecvf.com/content/CVPR2026/papers/Mughal_MIBURI_Towards_Expressive_Interactive_Gesture_Synthesis_CVPR_2026_paper.pdf#page=8)

[![原文数学表达区域 7，PDF 第 8 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/8b86f7022dd1/figure-7.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/8b86f7022dd1/figure-7.png)

区域 7 · [查看论文原页](https://openaccess.thecvf.com/content/CVPR2026/papers/Mughal_MIBURI_Towards_Expressive_Interactive_Gesture_Synthesis_CVPR_2026_paper.pdf#page=8)

[![原文数学表达区域 8，PDF 第 8 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/8b86f7022dd1/figure-8.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/8b86f7022dd1/figure-8.png)

区域 8 · [查看论文原页](https://openaccess.thecvf.com/content/CVPR2026/papers/Mughal_MIBURI_Towards_Expressive_Interactive_Gesture_Synthesis_CVPR_2026_paper.pdf#page=8)

另有 8 个候选区域因边界不明确或图片数量、尺寸限制未展开；请[查看完整论文](https://openaccess.thecvf.com/content/CVPR2026/papers/Mughal_MIBURI_Towards_Expressive_Interactive_Gesture_Synthesis_CVPR_2026_paper.pdf)中的原始排版。

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。
- 评分规则：type-aware-v1
- 评分模型：muse-spark-1.3-contributor
- 评分请求协议：openai_responses

---

[← 返回 cvpr-2026 论文汇总](/posts/conference-cvpr-2026/)
