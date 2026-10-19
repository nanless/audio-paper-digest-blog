---
title: "VocalGrad: Evaluating Acoustic Perception in Audio Language Models"
date: 2026-10-19
draft: false
tags: [语音属性识别, 音频理解, 基准测试, 基准设计, 表示探测]
categories: [论文速递]
description: "论文把声学感知压缩为单一声学因素随时间增强还是减弱的二分类，用 21600 条受控语音和人类 94.4% 对比模型约 50% 的结果证明瓶颈在感知与读出，并用线性探测区分了两种失效模式。"
hiddenInHomeList: true
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_arxiv_id: "2610.23745"
paper_digest_workbench_contract: "researcher-workbench-v1"
paper_digest_reader_title: "VocalGrad：用增减二分类隔离检验音频大模型的声学感知"
paper_digest_original_title: "VocalGrad: Evaluating Acoustic Perception in Audio Language Models"
paper_digest_arxiv_version: 1
paper_digest_arxiv_versioned_id: "2610.23745v1"
paper_digest_arxiv_abs_url: "https://arxiv.org/abs/2610.23745v1"
paper_digest_arxiv_pdf_url: "https://arxiv.org/pdf/2610.23745v1.pdf"
paper_digest_primary_task: "语音属性识别"
paper_digest_tags_contract: "paper-tag-flat-tags-v2"
paper_digest_tags_selection_contract: "paper-tag-selection-v2"
paper_digest_tags_registry_version: "paper-tag-catalog-v2"
paper_digest_tags_registry_sha256: "cdef54423b5dfc00a1d017ef6639446d2ecd1d9c1acf71c8eb4f6219a46b7ba8"
paper_digest_tags_concepts: [{"facet":"task","id":"task.speech-attributes","label":"语音属性识别"},{"facet":"task","id":"task.audio-understanding","label":"音频理解"},{"facet":"artifact","id":"artifact.benchmark","label":"基准测试"},{"facet":"method","id":"method.benchmark-design","label":"基准设计"},{"facet":"method","id":"method.representation-probing","label":"表示探测"}]
paper_digest_primary_method: "基准设计"
paper_digest_score: 8.8
paper_digest_rank_bucket: "前25%"
paper_digest_document_type: "数据集与基准"
paper_digest_one_sentence: "论文把声学感知压缩为单一声学因素随时间增强还是减弱的二分类，用 21600 条受控语音和人类 94.4% 对比模型约 50% 的结果证明瓶颈在感知与读出，并用线性探测区分了两种失效模式。"
paper_digest_authors: [{"affiliations":["The University of Tokyo","Riken"],"name":"Koki Ryu"},{"affiliations":["The University of Tokyo","Riken","Tohoku University"],"name":"Hitomi Yanaka"}]
paper_digest_abstract_sha256: "2a73f2821653219d7229b8decb2d64f82570b446af2062281b843a745d16e7a8"
paper_digest_sidecars: {"citation.bib":{"sha256":"0c21c7074af6ab4b57d83c8f279401685272d46049fecdb8029c0a026fb9149f","url":"/audio-paper-digest-blog/data/papers/2026-10-19/2610-23745/citation.bib"},"citation.json":{"sha256":"042a0c1cbc293130519c243579643ee807f4e816c6db6779e2c6e9388f124441","url":"/audio-paper-digest-blog/data/papers/2026-10-19/2610-23745/citation.json"},"citation.ris":{"sha256":"efc2024f13295e5bf2cf2814898cd6e5f8e61c9a450f4da4b4622df2efe38f34","url":"/audio-paper-digest-blog/data/papers/2026-10-19/2610-23745/citation.ris"},"rethink-context.json":{"contract":"paper-research-context-v2","sha256":"44115d84f5ff530a2d1677f21cc5dc79349dba00752cd723b4c573aa068f648b","url":"/audio-paper-digest-blog/data/papers/2026-10-19/2610-23745/rethink-context.json"}}
paper_digest_api_reader_contract: "beginner-researcher-v3"
paper_digest_api_reader_article_sha256: "82e02c3b373cf9e5637823af7ca878e34ce43f62f28a91ffe7440618135ed200"
paper_digest_api_reader_plan_sha256: "1e39ab5d11087fcb1a495e220525971c002059a53cd0af45d2237927bc7493d8"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings-v4"
paper_digest_api_reader_source_bindings_sha256: "bf637fd8ae017547f11a78e52723c5a979fead7c4db72d6019134ac940caec2f"
paper_digest_api_reader_source_table_count: 4
paper_digest_api_reader_source_formula_count: 0
paper_digest_api_reader_structured_artifacts_sha256: "8979773ed71fb958a70a1f24ef9610c9ad694a3fe99c249e1f6045d5e92063ac"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity-v1"
paper_digest_api_reader_author_identity_sha256: "19d7780f7c185183e9d83627b37ef370a6439d317ad96ccca17b668b7aeec3ce"
paper_digest_api_reader_author_count: 2
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity-v1"
paper_digest_api_reader_resource_identity_sha256: "7687ce1ae9d17ca8aa84b9e999a5a5c56854535e5db75c4a79c35a01717b54ca"
paper_digest_api_reader_resource_count: 12
paper_digest_api_reader_figure_persistence: "ephemeral-no-persisted-figure-assets-v1"
paper_digest_api_reader_decision_projection: "api-reader-decision-projection-v2"
---

# 📄 VocalGrad：用增减二分类隔离检验音频大模型的声学感知

> 英文题目：*[VocalGrad: Evaluating Acoustic Perception in Audio Language Models](https://arxiv.org/abs/2610.23745v1)*

<!--paper-tag-hierarchy-v1:start-->

**研究分类**

- **研究任务**：[语音属性识别](/audio-paper-digest-blog/papers/?concept=task.speech-attributes)；[音频理解](/audio-paper-digest-blog/papers/?concept=task.audio-understanding)
- **研究方法**：[评测协议](/audio-paper-digest-blog/papers/?concept=method.evaluation-protocol) → [基准设计](/audio-paper-digest-blog/papers/?concept=method.benchmark-design)；[表示探测](/audio-paper-digest-blog/papers/?concept=method.representation-probing)
- **研究产物**：[基准测试](/audio-paper-digest-blog/papers/?concept=artifact.benchmark)

<!--paper-tag-hierarchy-v1:end-->

> 评分：**8.8/10** | 创新 1.5/2 | 技术严谨 1.2/1.5 | 实验充分 1.3/1.5 | 清晰度 0.8/1 | 影响力 1/1.5 | 开源 1.5/1.5 | 可复现 0.5/0.5 | 工程/实践 1/1.5


## 👥 作者与机构

- Koki Ryu：The University of Tokyo；Riken
- Hitomi Yanaka：The University of Tokyo；Riken；Tohoku University

## 📌 核心摘要

大音频语言模型听到同时含文字内容和声音变化的整段语音后，需判断音高、响度、噪声等属性随时间增大还是减小，文字语义会干扰对底层变化的感知。论文先取基础语音片段作为输入，每次只施加一种声学因素的渐强或渐弱变换并标注方向，得到只含单因素差异的成对测试语音。再把整段变换后语音与询问变化方向的提示一起送入大音频语言模型，要求模型只输出一个方向词，使评价剥离高层推理而聚焦声学感知。接着取出模型的音频编码表示与语言解码器各层文本预测位置的表示，分别送入单层线性分类器，以分类准确率衡量任务信息的可线性解码程度，从而定位信息丢失在编码保留还是解码读出阶段。在VCTK来源的VocalGrad测试上以分类准确率为指标，共含21600个片段的基准上人类平均准确率94.4%高于表现最好的Kimi-Audio平均51.8%，后者基本处于随机水平。在同一基准以分类准确率为指标对Kimi-Audio做类别内微调时，音量类别上仅微调语言模型输出层准确率为88.2%低于微调全部线性层后的100.0%，背景噪声类别则从98.6%提升至100.0%，说明瓶颈位置因变换类型而异。结论只适用于受控单因素合成变换，尚未验证自然共变语音和高层情绪等任务的迁移效果。原文未披露训练、推理或部署成本。

## 🔗 开源与复现资源

- 代码相关资源：<https://github.com/ynklab/vocalgrad> — 链接可访问（HTTP 200）

- 数据相关资源：<https://huggingface.co/datasets/ynklab/vocalgrad> — 链接可访问（HTTP 200）

- 第三方资源：<https://github.com/MoonshotAI/Kimi-Audio> — 链接可访问（HTTP 200）

- 第三方资源：<https://github.com/XiaomiMiMo/MiMo-Audio> — 链接可访问（HTTP 200）

- 第三方资源：<https://ai.google.dev/gemini-api/docs/gemini-3> — 链接可访问（HTTP 200）

- 第三方资源：<https://docs.pytorch.org/docs/main/generated/torch.nn.Linear.html> — 链接可访问（HTTP 200）

- 第三方资源：<https://docs.pytorch.org/docs/2.11/generated/torch.nn.BCEWithLogitsLoss.html> — 链接可访问（HTTP 200）

- 第三方资源：<https://ai.google.dev/gemini-api/terms> — 链接可访问（HTTP 200）

- 第三方资源：<https://policies.google.com/terms/generative-ai/use-policy> — 链接可访问（HTTP 200）

- 第三方资源：<https://chatgpt.com/> — 链接可访问（HTTP 200）

- 第三方资源：<https://openai.com/codex/> — 链接不可用（HTTP 403）

- 第三方资源：<https://gemini.google.com/> — 暂时无法访问

可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 为什么要单独测声学感知

大型音频语言模型同时要处理两类信息，一类是说了什么词，也就是语音识别的内容，另一类是声音本身怎么变化的，比如语速快慢、音量大小、背景噪声多少。论文关心的是第二类，也就是低层声学感知。已有情感识别、重音词识别、语音加环境声联合理解等任务都发现模型会忽略声学线索而依赖文字，但那些任务混入了推理、排序、时间戳对齐等多余步骤，失败时分不清是没听见还是没推理对。

VocalGrad 要回答的问题很窄，在文字内容不变、只动一个声学因素、只问随时间增强还是减弱时，模型到底能不能听见这个变化。输入是一段 3 到 4 秒的英语朗读语音，目标是输出 increase 或 decrease 一个词，必须保留的是声学因素随时间的变化方向，不需要理解句义。人类在这个任务上平均准确率达到 90% 以上，说明任务对人是明确的，这就为检验模型提供了干净的对照。

### 已有评测为什么分不清感知和推理

论文把相关工作分成两条线。第一条是声学评测基准，MMSU 需要跨多个片段排序和重排，WoW-Bench 用海洋哺乳动物声音但需要跨片段比较和解读复杂时序模式，MMAU 要求输出时间戳，SALMon 关注情感或说话人等高层属性且用多片段似然比较。这些设计都把感知和后续推理绑在一起，答错不能定位到感知层。

第二条是内部表示分析，HuBERT 和 wav2vec 2.0 一类工作已证明声学和音素信息可以分层解码，近期对音频大模型的研究则关注说话人、情感等高层属性如何从音频编码器传到语言部分。VocalGrad 的不同在于只做受控的低层时序变化，并从音频前端、语言解码器各层一直追踪到输出预测位置，从而区分信息丢失和有信息但不会用。

### 任务被压缩成什么判断

每个样本都是一段经过单一变换的语音，标签只有增强或减弱两类，数量各占一半。提示词全类别统一，问的是该属性随时间增加还是减少，只允许回答一个词。这样做的目的是去掉语义理解和复杂推理，让文本输出直接反映是否感知到声学方向。

为避免模型靠文字猜答案，同一批 100 条 VCTK 源语音被用于全部 9 个类别，每条源语音再按方向、强度、轨迹扩展出 24 个版本。也就是说词汇内容在增强和减弱样本之间是平衡的，模型不能靠听到某个词就判断方向。属性词写在题面里，模型还必须把属性名和对应的声音现象联系起来，这一点由人类基线验证是可行的。

### 从源语音到二分类的完整链路

先选源语音，再检测语音起止点，再分段施加时变参数，最后配上统一提问送入音频大模型得到文本答案。源语音来自 VCTK，选 50 名说话人兼顾性别和口音，每人取两条长于 3 秒的朗读，共 100 条。能量启发式方法先估计噪声底，再用自适应阈值找连续语音段，并经波形人工核对，确保变换落在有声部分。

下面这张总览图以音量为例展示了一次完整变换，左侧是源波形，中间是增强和减弱两条分支的波形包络变化，右侧是模型要回答的提问，沿着这个例子就能理解全部类别的构造逻辑，值得仔细对照箭头方向阅读。

> **看图路径：** 1. 先沿左侧源波形到中间两路分支的箭头看变换分叉；2. 再比较中间上下两组波形包络随时间变粗或变细的方向；3. 最后看右侧音频大模型方框与提问句的对应关系

[![原论文 Figure 1：Overview of VocalGrad. Each source speech clip is transformed with a temporal change applied to a…](https://arxiv.org/html/2610.23745v1/vocalgrad-diagram.drawio.png)](https://arxiv.org/html/2610.23745v1/vocalgrad-diagram.drawio.png)

*论文图 1。原论文 Figure 1:：“Overview of VocalGrad. Each source speech clip is transformed with a temporal change applied to a single acoustic factor.”。*

图中左侧矩形是源片段的波形，中间上下两组波形分别是音量随时间变大和变小的结果，可以看到包络从左到右逐渐变粗或变细，右侧喇叭加 Audio LLM 方框表示变换后的音频与 Does the volume increase or decrease over time 一起输入模型，模型只需输出 1 个方向词。这种把文字内容固定、只让包络方向不同的做法，就是全文隔离感知的关键。

### 九种变换和时间形状如何构造

3 类说话人内在变换是语速用 librosa 变速、音高用 librosa 移调、音量用增益控制，6 类环境引入变换是降采样模拟失真、降位深模拟粗糙度、加高斯噪声、Schroeder 混响器加回声、低通滤波降清晰度、低频幅度调制加振动。除回声和振动按采样点更新参数外，其余 7 类按 0.05 秒窗口更新，相邻窗口加 0.005 秒交叉淡化以保证平滑。

每个类别的具体参数分三档强度，例如音高档为 3、2、1 半音，音量档为 18、12、6 分贝，噪声档控制噪声均方根与语音均方根之比，失真和粗糙度反向映射即参数越小感知越强。时间形状有 4 种，突变在中点跳变，线性均匀变化，两种二次曲线分别在开头或结尾平坦。方向、强度、轨迹 3 维组合正好是 2 乘 3 乘 4 等于 24，乘以 100 条源语音得到每类 2400 条，共 21600 条，平均时长 3.98 秒。

**说话人内在因素 × 环境引入因素：** 说话人内在因素指语速、音高、音量这类由发声本身决定的属性，环境引入因素指噪声、混响、失真、粗糙度、清晰度、振动这类叠加在信号上的外部效应，VocalGrad 把两类统一为同一种随时间增强或减弱的变换，才能在同一流程下比较模型对不同声学线索的敏感性。

### 线性探测在哪些位置取表示

线性探测的做法是固定模型，只在抽出的向量上训练一个单层线性分类器，比较不同位置的分类准确率，以此衡量任务信息的可线性解码程度。训练集另选 57 名不重叠说话人的 500 条语音，每类再扩增 12000 条，与测试集在说话人和文本上都不重叠。

音频侧取三处，Mel 频谱作为各模型共享的原始信息参考，Pre-LLM 是音频编码器或切分器输出后进入语言解码器之前，Late-LLM 是语言解码器最后一层的音频对应位置。处理变长输入时把每条音频切成 16 段，段内平均池化再拼接成固定向量。文本侧取输出预测位置在语言解码器每一层的隐状态，看信息何时汇聚到决策点，又在深层如何变化。分类器用 PyTorch 单层线性加二元交叉熵实现，优化器为 AdamW。

**Mel 频谱 × Pre-LLM 表示 × Late-LLM 表示：** Mel 频谱是直接从波形算出的时频能量参考，Pre-LLM 表示是音频编码器或切分器输出后、进入语言解码器之前的音频表征，Late-LLM 表示是经过语言解码器最后一层后的音频表征，三者串起来才能判断信息是在前端丢失还是在语言层衰减。

**音频表征探测 × 文本预测位置探测：** 音频表征探测是在与音频 token 对齐的位置加线性分类器，看声学信息本身还在不在，文本预测位置探测是在准备输出 increase 或 decrease 的那个位置逐层加线性分类器，看信息有没有被汇聚到决策点，两者配合才能区分编码保留但读不出与逐层丢失。

### 微调只动哪里以及为什么这样设

本研究没有从头训练新的音频大模型，训练只出现在用 LoRA 验证探测结论的环节。对象是基线中最好的 Kimi-Audio，也在附录中对其他 3 个开源模型重复了同样流程。每个类别用探测时的 12000 条训练集，其中一成作验证，训练一轮，LoRA 秩为 8，系数为 16，丢弃率为 0.05，学习率为 2 乘 10 的负 4 次方，批量为 1 并累积 16 步。

设置两种范围，一种只更新语言模型头，另一种更新全部线性层包括注意力投影、前馈层和模型头。如果某类信息在深层仍可解码，那么只动模型头就应大幅提升，若必须动全层才行，则说明深层表示本身已衰减。这种对照把探测观察变成了可检验的因果假设。

**语言模型头微调 × 全线性层微调：** 语言模型头微调只更新最后把隐状态映射到词表的投影层，检验瓶颈是否在读出，全线性层微调同时更新注意力投影、前馈层和模型头，检验深层表示本身能否被重塑，两者的对照直接对应探测发现的两种失效模式。

### 评测条件如何保证公平和可复现

评测 5 个模型，包括 Gemini 3 Flash、Kimi-Audio、MiMo-Audio、Step-Audio 2 mini 和 Audio Flamingo 3，覆盖自回归音频建模与文本对齐监督等不同路线。主指标是文本准确率，因为部分商用模型拿不到对数概率。输出用大小写不敏感的整词匹配，只接受恰好含有一侧方向词的回答，否则判错，附录证明该规则主要影响 Gemini 3 Flash 的长句和拒答，开源模型几乎不受影响。

人类基线招募 6 名日常接触英语的标注员，每类抽 50 条，每条至少 3 人标注，允许重复播放并可查属性词含义，界面显示进度、播放键和两个标签键。强度与轨迹的覆盖在抽样时大致平衡，但附录承认实现失误使方向与轨迹耦合，轨迹层面的人类结果不能单独解读。探测与微调的软硬件在附录给出，单卡 GH200 上每对模型类别组合在 4 小时内完成。

**强度档 × 时间轨迹：** 强度档控制变换幅度分为高、中、低三档，时间轨迹控制变换形状分为突变、线性和两种二次曲线，强度决定任务难易，轨迹决定线索分布在时间上的形态，两者交叉才能既调难度又覆盖不同的时间整合需求。

### 数据集规模与主结果对比

先看数据集的总体构成，9 类变换、每类 2400 条、三档强度、4 种轨迹的对称设计，是后面一切对照的基础，表中总量与分组方式需要先确认。

| Statistics | Value | Statistics | Value |
| --- | --- | --- | --- |
| Total Questions | 21,600 | Intensity Tiers | 3 |
| Speaker-Intrinsic Categories | 3 | Transformation Trajectories | 4 |
| Environment-Induced Categories | 6 | Avg. Audio Length | 3.98 s |

上表说明比较问题是数据集是否足够大且条件对称，结果是总量 21600 条，说话人内在 3 类、环境引入 6 类、强度 3 档、轨迹 4 种、平均 3.98 秒，每条源语音在每类中都生成增强减弱各半的样本。限制是源语音全部来自 VCTK 朗读，附录用其他英语和多语自发语音重复后趋势不变，但自然多因素共变仍未覆盖。

再看主结果，比较问题是在同一题面和同一音频分布下，人类与 5 个模型的二分类准确率谁更高，指标是准确率越高越好，随机基线为 50%，下表给出全部 9 类的逐项数字。

| Model | Avg. | speed | pitch | volume | distortion | roughness | noise | echo | clarity | vibration |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Human Avg. | 94.4 | 95.3 | 84.7 | 100.0 | 86.0 | 99.3 | 100.0 | 94.7 | 90.7 | 99.3 |
| Gemini 3 Flash | 50.2 | 50.0 | 51.5 | 49.9 | 48.1 | 44.8 | 55.5 | 50.3 | 54.0 | 47.6 |
| Kimi-Audio | 51.8 | 53.1 | 50.5 | 50.5 | 51.6 | 48.0 | 56.5 | 54.5 | 53.6 | 47.6 |
| MiMo-Audio | 50.3 | 50.7 | 50.5 | 52.9 | 49.8 | 43.2 | 53.2 | 50.0 | 52.2 | 50.3 |
| Step-Audio 2 mini | 50.0 | 49.9 | 50.2 | 49.9 | 50.2 | 49.9 | 49.9 | 50.0 | 49.8 | 49.8 |
| Audio Flamingo 3 | 49.6 | 50.0 | 50.0 | 50.0 | 50.0 | 46.7 | 50.0 | 50.0 | 49.9 | 50.0 |

上表显示人类平均 94.4%，多类达到 100%，最难的音高也有 84.7%，而最好的 Kimi-Audio 平均仅 51.8%，其余模型在 49.6% 到 50.3% 之间，基本就是抛硬币。分轨迹和分强度看，模型在各类轨迹上都贴近随机，强度增大只在噪声等类带来小幅上移，人类则在音高中随强度减弱而下降，证明强度档确实调控了难度。附录的二项模拟 95% 置信区间也显示多数模型区间覆盖 50%，个别如 MiMo-Audio 在粗糙度上显著低于 50%，说明不是没听见而是系统性答反。

下面这张置信区间图把上述差距可视化，每格纵轴是准确率，灰柱是人类，彩柱是模型，虚线是 50%，重点看误差线是否跨过随机线。

> **看图路径：** 1. 先看每小格灰色人类柱与彩色模型柱的高度差；2. 再看虚线 50% 附近的模型置信区间是否包含随机水平；3. 最后注意 Audio Roughness 格个别模型低于 50% 的现象

[![原论文 Figure 7：Accuracy (%) of humans and LALMs on the VocalGrad benchmark, with error bars representing binomial…](https://arxiv.org/html/2610.23745v1/human_model_accuracy_ci_grid.svg)](https://arxiv.org/html/2610.23745v1/human_model_accuracy_ci_grid.svg)

*论文图 7。原论文 Figure 7:：“Accuracy (%) of humans and LALMs on the VocalGrad benchmark, with error bars representing binomial simulation-based 95% confidence intervals.”。*

图中可见 9 个子图的人类柱都远高于模型柱，模型柱高度几乎都贴着虚线，误差线也很短，这是因为模型样本量每类 2400 条而人类每类 150 人次。它的作用是证明差距不是抽样噪声，即使人类样本较少，区间也不与模型重叠。

探测音频侧的结果进一步说明问题不在前端全丢，比较问题是 Mel、Pre-LLM、Late-LLM 三处谁还保留方向信息，下图展示了 4 模型在 9 类上的走势。

> **看图路径：** 1. 先按九宫格找到 volume、noise、roughness 三格的走势；2. 再对比 Mel 到 Pre-LLM 再到 Late-LLM 三点是保持还是下滑；3. 最后比较 Kimi-Audio 与 MiMo-Audio 在 distortion 格的差异

[![原论文 Figure 2：Linear probing accuracies with different audio representations.](https://arxiv.org/html/2610.23745v1/category_accuracy_by_audio_stage_overview.svg)](https://arxiv.org/html/2610.23745v1/category_accuracy_by_audio_stage_overview.svg)

*论文图 2。原论文 Figure 2:：“Linear probing accuracies with different audio representations.”。*

图中九宫格每格横轴是三处位置，纵轴是线性探测准确率，4 条折线是 4 个开源模型。可见音量、噪声、粗糙度三格在 Late-LLM 仍接近 1.0，说明信息一直可解码，而语速、音高、回声、清晰度等格从 Pre-LLM 到 Late-LLM 明显下滑。Kimi-Audio 和 MiMo-Audio 整体较高，可能与其自回归音频目标保留了更丰富的时序表示有关，但 MiMo-Audio 在语速上从 Pre-LLM 就偏低，提示其切分加池化的方式不利于语速这种长时密度线索。

### 去掉文字和换问法能不能救活模型

为检验失败是否只是文字干扰，论文用等长纯正弦加静音构造无文字对照，只保留音高、音量、噪声、振动 4 类可感知的变换，每类 240 条，流程与主实验一致。比较问题是去掉词汇后准确率是否回升，下表给出 5 个模型在 4 类上的数字。

| Model | pitch | volume | noise | vibration |
| --- | --- | --- | --- | --- |
| Gemini 3 Flash | 48.3 | 50.0 | 47.5 | 49.2 |
| Kimi-Audio | 50.4 | 57.5 | 50.0 | 50.0 |
| MiMo-Audio | 50.0 | 55.8 | 64.2 | 50.0 |
| Step-Audio 2 mini | 50.0 | 50.0 | 50.0 | 50.0 |
| Audio Flamingo 3 | 50.0 | 50.0 | 50.0 | 50.0 |

上表说明在无文字条件下，Kimi-Audio 在音量上到 57.5%，MiMo-Audio 在噪声上到 64.2%，确有改善但没有一类超过 70%，其余多为 50%。这支持结论是瓶颈不只是文字与声学冲突，而是对时序声学变化本身的建模不足。限制是纯音缺乏语音特有的谱时结构，只能做 4 类，且样本量较小。

换问法同样无效，交换选项顺序、强调本音频、改写属性词、提供 4 例少样本、改成有无变化的是否问和增减不变的三分类，模型仍贴近随机或出现强偏置。例如 Kimi-Audio 在是否问中偏答是，在三分类中对 3 类输入都以约九成答减，说明无可靠声学证据时语言模型头退回先验偏置。输出分布分析也显示 Step-Audio 2 mini 和 Audio Flamingo 3 几乎只答一侧，Gemini 3 Flash 在回声上只答 2.1% 增而在失真上答 85.7% 增。

逐层文本位置探测解释了偏置来源，比较问题是方向信息在语言解码器各层如何演化，下图按模型分面板展示了 9 类曲线的分化过程。

> **看图路径：** 1. 先看横轴层索引与纵轴探测准确率的含义；2. 再看每条颜色曲线代表一个变换类别；3. 最后比较浅层快速上升与深层保持或下降的两类走势

[![原论文 Figure 3：Linear probing accuracies with text prediction representations across language decoder layers.](https://arxiv.org/html/2610.23745v1/accuracy_by_layer__all_models__by_category_overview.svg)](https://arxiv.org/html/2610.23745v1/accuracy_by_layer__all_models__by_category_overview.svg)

*论文图 3。原论文 Figure 3:：“Linear probing accuracies with text prediction representations across language decoder layers.”。*

图中四块分别是 4 个开源模型，横轴是层索引，纵轴是输出预测位置的探测准确率。可见信息在约第 5 层已汇聚，之后两分化，音量、噪声、粗糙度保持高位，回声、失真、音高等逐渐下滑。这与只动模型头就能救活前 3 类、而后几类必须动全层的微调结果一致，也说明深层衰减是真实存在的。

### 微调能否修好读出并带来跨类变化

比较问题是探测指出的瓶颈能否被对应的微调范围修复，指标仍是同类测试集准确率，下表对比了只动模型头与动全部线性层的差异。

| Method | speed | pitch | volume | distortion | roughness | noise | echo | clarity | vibration |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| LM-Head | 73.2 | 57.0 | 88.2 | 52.2 | 97.7 | 98.6 | 61.5 | 57.4 | 53.3 |
| All-Linear | 99.0 | 98.7 | 100.0 | 88.5 | 100.0 | 100.0 | 96.8 | 87.0 | 99.2 |

上表取 Kimi-Audio 的两种微调在 9 类上的结果，只动模型头时音量 88.2%、粗糙度 97.7%、噪声 98.6%，而音高仅 57.0%、振动 53.3%，说明前 3 类的瓶颈主要在读出。全量线性微调后多类达到 99% 到 100%，失真 88.5% 相对最低，证明更新深层可以补回衰减的信息。附录显示其余 3 模型趋势相同，且 MiMo-Audio 在清晰度上模型头微调达 78.1%，与其深层探测较高吻合。代价是全量微调计算明显更大，论文为公平都只训一轮。

跨类泛化显示单类微调常提升相关类，例如失真微调提升粗糙度和噪声，但也出现显著低于随机的反向决策，说明学到的是系统但方向可能接反的边界。层 28 的增加减弱方向余弦分析显示，微调后平均绝对余弦从约 0.2 升到 0.68 到 0.73，方向趋于平行或反平行，但语速仍较孤立。转到 MELD 自然对话情感识别，音量和音高微调都没有提升宏观 F1，基线 41.3，微调后 37.7 和 34.2，只是改变了如把部分中性判为喜悦的倾向，说明受控感知的改善尚未转化为下游增益。

### 结论在什么边界内成立

第一，单因素受控变换不等于自然共变，真实录音中多因素同时变化且相互关联，论文明确这部分待验证。第二，探测用 16 段平均池化加线性分类器，更细粒度或非线性、序列模型可能找回部分信息，附录的位置探测已显示首尾段比中间段更易解码。第三，类别差异的解释只是假设，即短时能量类线索靠局部窗可估因而保留，需要长时整合的语速和振动类易在传播中衰减，尚未用 GeMAPS 等声学特征集系统验证。

此外人类抽样的方向轨迹耦合使轨迹效应无法分离，源语音恒定类的标签只是无受控增强的近似，自然语音本身就有起伏。这些都不推翻主结论，但在引用轨迹结论和恒定标签时必须加上限定。

### 复现第一步做什么与资源在哪

先从公开仓库拿数据和代码，作者资源当前可用，已公开 Hugging Face 数据集与 GitHub 代码库，VCTK 源语音遵循 CC BY 4.0，衍生集同许可。第一步建议只跑音量类高强度子集，用统一题面和规则解析复现人类易而模型难的差距，再跑噪声类验证模型头微调的有效性，这样成本最低。

运行细节按附录固定随机种子，开源模型默认 bfloat16，Audio Flamingo 3 用 float32，MiMo-Audio 用温度 0.3 和 top_p 0.95，Gemini 3 Flash 用思考量低档和温度 1.0 采样。探测训练集与测试集说话人和文本不重叠，线性头用学习率 0.001 训练 200 轮。单对模型类别组合在 GH200 上 4 小时内可完成。代码开源、权重可下载、系统可运行是三回事，这里数据和代码已公开，模型权重需各自按 MIT 或研究许可获取，商用接口需遵守其使用条款。

### 什么时候值得尝试还缺什么验证

当你的任务需要模型真正听见音量、噪声、音高等随时间的变化，而不是只读文字时，VocalGrad 值得作为诊断工具。它的价值在于把感知从推理中剥离，若模型在此都贴近随机，就不要指望它在情感或事件理解中可靠利用声学线索。若探测显示深层仍可解码而文本答错，优先修语言模型头或属性词对齐，若深层已衰减，则要动更早的音频表示或训练目标。

还缺的验证是多属性联合训练能否带来稳定迁移，以及在自然共变语音和 GeMAPS 特征上的系统解释。目前单类微调虽能修好本类并改变跨类表示，但对 MELD 情感识别无增益，说明从受控感知到下游任务之间还有缺口。引用数字时记住核心 3 组，人类 94.4% 对模型约 50%，无文字对照最高 64.2% 仍远低于人类，模型头微调在音量噪声粗糙度上达 88% 到 99% 而在音高振动上无效。

<details>
<summary>📎 论文与评分元数据</summary>

排名：前25% | 文档类型：数据集与基准 | [arXiv 原文](https://arxiv.org/abs/2610.23745v1)

</details>

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。

- 评分规则：type-aware-v1

- 评分模型：muse-spark-1.3-contributor

- 评分请求协议：openai_responses

---

[← 返回 2026-10-19 语音/音乐/音频论文速递](/audio-paper-digest-blog/posts/2026-10-19/)
