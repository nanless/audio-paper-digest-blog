---
title: "Misrecognition or Abstraction? Rethinking Outputs of Sound Event Recognition"
date: 2026-09-23
draft: false
tags: [音频分类, 多模态学习, 环境声, 主观评测]
categories: [论文速递]
description: "论文把声音事件识别的输出从单一确定标签改为类别加置信度加拟声词描述，用冻结编码器加可训练投影器与分类器实现分类与检索联合训练，在 31 类子集上保持分类能力，并在约 85% 准确率的模拟不确定条件下用大模型评价与 310 人听评显示拟声输出更有助于环境理解，代价是拟声不匹配会损害自然度。"
hiddenInHomeList: true
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_arxiv_id: "2609.23411"
paper_digest_workbench_contract: "researcher-workbench-v1"
paper_digest_reader_title: "误识别还是抽象化：置信度不足时声音识别该输出什么"
paper_digest_original_title: "Misrecognition or Abstraction? Rethinking Outputs of Sound Event Recognition"
paper_digest_arxiv_version: null
paper_digest_arxiv_versioned_id: null
paper_digest_arxiv_abs_url: "https://arxiv.org/abs/2609.23411"
paper_digest_arxiv_pdf_url: "https://arxiv.org/pdf/2609.23411.pdf"
paper_digest_primary_task: "音频分类"
paper_digest_taxonomy_contract: "paper-taxonomy-flat-tags-compat-v1"
paper_digest_taxonomy_selection_contract: "paper-taxonomy-selection-v1"
paper_digest_taxonomy_registry_version: "paper-taxonomy-v1"
paper_digest_taxonomy_registry_sha256: "15c82a567ce5a55dc1175684ed08b64c158558639d9c8fb822c9587ec32a8778"
paper_digest_taxonomy_concepts: [{"facet":"task","id":"task.audio-classification","label":"音频分类"},{"facet":"method","id":"method.multimodal-learning","label":"多模态学习"},{"facet":"signal","id":"signal.environmental","label":"环境声"},{"facet":"method","id":"method.subjective-evaluation","label":"主观评测"}]
paper_digest_primary_method: "多模态学习"
paper_digest_score: 6.7
paper_digest_rank_bucket: "前50%"
paper_digest_document_type: "方法研究"
paper_digest_one_sentence: "论文把声音事件识别的输出从单一确定标签改为类别加置信度加拟声词描述，用冻结编码器加可训练投影器与分类器实现分类与检索联合训练，在 31 类子集上保持分类能力，并在约 85% 准确率的模拟不确定条件下用大模型评价与 310 人听评显示拟声输出更有助于环境理解，代价是拟声不匹配会损害自然度。"
paper_digest_authors: [{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Naoya Tomida"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Yuki Okamoto"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Keisuke Imoto"}]
paper_digest_abstract_sha256: "635f724f2585fab91ea593861ea05d601afe7628a456ee44f2e814de6958496b"
paper_digest_sidecars: {"citation.bib":{"sha256":"2e864a26317a1a387ec5d0273eabcb516466ccbf016417d67719f3fae80316df","url":"/audio-paper-digest-blog/data/papers/2026-09-23/2609-23411/citation.bib"},"citation.json":{"sha256":"101e718c588a9c139cf46ef3bb445787f7623dbb76bbe992ea1ffcf26c6a86f2","url":"/audio-paper-digest-blog/data/papers/2026-09-23/2609-23411/citation.json"},"citation.ris":{"sha256":"211bea44c60393f67aad2396c70167d09321bbb12c680f69552c947a31ab9885","url":"/audio-paper-digest-blog/data/papers/2026-09-23/2609-23411/citation.ris"},"rethink-context.json":{"sha256":"c968736b24e191b015c7453aec12b09ec48592dbf5e9c1358b889e0931cc71a5","url":"/audio-paper-digest-blog/data/papers/2026-09-23/2609-23411/rethink-context.json"}}
paper_digest_api_reader_contract: "beginner-researcher-v3"
paper_digest_api_reader_article_sha256: "684e9e2d7f08a27e3cc269d6d000b2c6d941199ccd76f798d00a6cad418f6619"
paper_digest_api_reader_plan_sha256: "35c46e7fa7761e48a5a296e6dbd99cb3fc544fced8b2bcc7e6aa763c3f142835"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings-v4"
paper_digest_api_reader_source_bindings_sha256: "3998d4d5749496da0cb02877e3ee56aef2d950b997c2ee4866ad1cfa7cf1ba0b"
paper_digest_api_reader_source_table_count: 4
paper_digest_api_reader_source_formula_count: 5
paper_digest_api_reader_structured_artifacts_sha256: "38919b7e7665a37f0682a18346d97f32c8ecc2179c4680ce540d5ba1d946a33d"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity-v1"
paper_digest_api_reader_author_identity_sha256: "ea75fb0bce189d46b9bcae44f2ff59b115f7a7c8e4d47b0ce108cb3db528a107"
paper_digest_api_reader_author_count: 3
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity-v1"
paper_digest_api_reader_resource_identity_sha256: "fe69297a4ed9c4152cb7a5b5170949ccc14c7cdf3a67056e19aa05a3640afe22"
paper_digest_api_reader_resource_count: 1
paper_digest_api_reader_figure_persistence: "ephemeral-no-persisted-figure-assets-v1"
paper_digest_api_reader_decision_projection: "api-reader-decision-projection-v2"
---

# 📄 误识别还是抽象化：置信度不足时声音识别该输出什么

> 英文题目：*[Misrecognition or Abstraction? Rethinking Outputs of Sound Event Recognition](https://arxiv.org/abs/2609.23411)*

> 标签：#音频分类 | #多模态学习 | #环境声 | #主观评测
>
> 评分：**6.7/10** | 创新 1.2/2 | 技术严谨 1.2/1.5 | 实验充分 0.9/1.5 | 清晰度 0.8/1 | 影响力 0.8/1.5 | 开源 1/1.5 | 可复现 0.3/0.5 | 工程/实践 0.5/1.5


## 👥 作者与机构

- Naoya Tomida：机构信息未在 arXiv HTML 中可靠披露
- Yuki Okamoto：机构信息未在 arXiv HTML 中可靠披露
- Keisuke Imoto：机构信息未在 arXiv HTML 中可靠披露

## 📌 核心摘要

声音事件识别以环境音频片段为输入，需输出支撑用户理解周围环境的信息，难点在于真实声音常模糊难辨而传统系统仍强制给出确定性类别标签。先以环境音频的对数梅尔谱为输入，冻结预训练CLAP音频与文本双编码器提取嵌入，并训练文本投影器将拟声词嵌入向音频嵌入对齐，输出对齐后的音频—拟声词共享嵌入空间。再将上一步得到的同一音频嵌入送入多层分类器预测事件类别并估计置信度，同时以该音频嵌入为查询与候选拟声词嵌入做最近邻检索，输出类别标签、置信分数与声学模仿描述。最后将上一步得到的标签、分数与拟声词一并输入，按置信度切换预设模板或交由大语言模型组织话术，输出随不确定性变化的最终表达。与仅输出标签的传统范式相比，关键差异在于以拟声词抽象保留不确定下的有效声学信息而非丢弃为误识别，但重叠声与开放集下的表现尚未验证。在ESC-50的31类子集五折交叉验证评测下，提案方法的Micro-F score为98.54 ±0.51%，高于同编码器基线的Micro-F score 97.81 ±0.66%。该结论仅适用于短片段单标签英文拟声词检索场景，未验证重叠声、开放集与多语言拟声词生成的外推能力。原文未披露训练、推理或部署成本。

## 🔗 开源与复现资源

- 数据相关资源：<https://github.com/Y-Okamoto1221/ESC-50-Onomatopoeia> — 链接可访问（HTTP 200）

可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 输入是什么，系统要输出什么，什么信息不能丢？

这篇论文研究的输入是一段环境音频，目标是让机器在类别不确定时仍能向用户传达有用信息。白话说，声音事件识别就是听一段录音并判断其中出现了哪类声音，例如狗叫、引擎声或牛叫。必须保留的信息有两类，一是传统识别给出的类别判断，二是声音本身的声学质感。

常规做法只保留第 1 类，把模型输出压缩成一个确定性标签，丢掉了不确定程度和声音听起来像什么。论文举的教学例子是人听到一声巨响但说不清来源时，会用类似砰的一声、像小爆炸或开火之类的模仿性表达来提醒周围人先去查看。这种表达不依赖精确分类却能支撑行动。

论文因此提出输出应同时包含声音事件类别、置信度分数和拟声词描述。类别保留可执行性，置信度说明可靠程度，拟声词在类别不可靠时仍保留可理解的声学信息。下面这张常规系统示意图先把任务边界固定下来，它展示了从波形到单一标签的压缩路径，有助于理解后文为什么要增加置信度和拟声分支。

> **看图路径：** 1. 先从左侧音频输入波形沿箭头走到声音事件识别模型方框；2. 再看类别指派方框如何输出右侧单一声音事件类别；3. 注意上方多标签分支的检测阈值虚线框只在多标签时启用

[![原论文 Fig. 1：Conventional output of SER system](https://arxiv.org/html/2609.23411v1/CLAP_onomatopoeia_recognition_01.png)](https://arxiv.org/html/2609.23411v1/CLAP_onomatopoeia_recognition_01.png)

*论文图 1。原论文 Fig. 1:：“Conventional output of SER system”。*

这张图从左到右是音频输入进入声音事件识别模型，再进入类别指派，最后只输出一个声音事件类别。图中上方用虚线标出了多标签分类才使用的检测阈值，说明单标签取最大概率，多标签取超过阈值的集合。整个流程的关键动作是丢弃除获胜类别之外的全部信息。理解这条压缩路径后，才能看懂新表示为什么要把置信度和拟声描述并列为输出。

### 同类任务过去如何处理识别错误和模仿性表达？

在相同输入和相近目标下，声音事件识别、音频标注、声音事件定位与检测等任务都以预测类别为主，部分任务再估计起止时间或空间位置。自动音频描述和音频问答走得更远，它们生成自然语言描述或回答，但其内容仍然建立在识别出的事件及其时序、共现和上下文之上。也就是说，过去的输出路线是先认定类别，再围绕类别组织更多语言。

另一条路线研究声音与拟声词的关系，用于音频检索、音频到拟声词转换和声音生成，说明拟声词可以作为声音的文本代理。但论文指出，这条路线很少回答识别系统在置信度低时应如何呈现结果，也没有把误识别当作输出设计问题来处理。常规思路是把误识别看成要通过改进结构、特征或数据来降低的错误。

因此本研究的对照关系是明确的，同输入是环境音频，同目标是支撑用户理解周围环境，不同之处在于监督和使用阶段的假设。传统路线假设类别总能被正确识别，拟声路线只做检索或生成而不进入识别输出。本文则把两者放在同一个识别系统的输出里，并在对话机器人需要主动开口的场景下比较哪种输出更有用。

### 当类别不可靠时，系统应该坚持给标签吗？

论文提出的核心问题是，声音事件识别系统在预测不可靠时应该输出什么。常规系统无论可靠与否都给出确定离散标签，这种设计把不确定性隐藏了。人类的做法是按置信度切换表达方式，能确定来源时用事件名称，含糊时转而描述时间频谱特征，常用拟声等模仿性表达。

举例说明这种切换的教学例子是狗叫声输入，论文设想高置信度时肯定地说那是狗叫且像汪汪声，中置信度时先说像汪汪声再猜测可能是狗叫，低置信度时只说听到了汪汪声。这里的例子不是新增实验数据，只是用来解释输出形式如何随置信度抽象化。问题的关键不在于分类器能否再提高几个百分点。

而在于输出表示是否允许系统在不确定时退回到更抽象但仍真实的描述，而不是坚持一个可能是错的标签。论文标题中的抽象化指的就是这种退回，即从具体类别退到声学模仿。这种视角把误识别从单纯的模型错误变成了输出设计问题。

### 新输出表示的全景：类别、置信度、拟声词如何分工？

论文提出的新表示把 1 次识别结果写成三元组，类别给出可行动的判断，置信度给出判断的可信程度，拟声词给出不依赖类别的声学描述。推理时系统同时产生类别预测和拟声描述，再按置信度决定最终话语形式，高置信度强调类别，低置信度弱化或省略类别而保留拟声。

为验证这种表示是否可行，论文实现了一个简单版本，基于对比语言音频预训练的联合嵌入空间，同时做声音事件识别、置信度估计和从音频到拟声词的检索。对比语言音频预训练的白话含义是让音频和文本共享同一向量空间，使跨模态相似度可计算。选择它的理由是只需补齐拟声文本的对齐即可同时支撑分类和检索。

下面这张新表示示意图把 3 档输出的切换逻辑讲清楚了，它是理解后文实现和评价的前提，图中右侧 3 档话语的措辞差异值得逐条对照阅读。

> **看图路径：** 1. 先沿音频输入到输出生成的横向主路径确认仍保留类别预测；2. 再看上方置信度阈值如何分出高、中、低 3 条输出分支；3. 对比右侧 3 档话语中类别断言从肯定到猜测再到只剩拟声的变化

[![原论文 Fig. 2：Example of proposed output representation of SER system](https://arxiv.org/html/2609.23411v1/CLAP_onomatopoeia_recognition_02.png)](https://arxiv.org/html/2609.23411v1/CLAP_onomatopoeia_recognition_02.png)

*论文图 2。原论文 Fig. 2:：“Example of proposed output representation of SER system”。*

这张图左侧仍是音频输入，中间仍是声音事件识别模型，但后端的类别指派被换成了输出生成，上方多了置信度阈值控制参数。右侧按高、中、低置信度给出 3 条话语，高置信度先肯定类别再补充拟声，中置信度先给拟声再用猜测语气提类别，低置信度只保留拟声。这种设计把原来丢掉的不确定信息显式化，也为后文模板实现和大模型生成两种落地方式留了接口。

### 编码器、投影器、分类器和检索器各自计算什么？

沿着一个样本走一遍有助于固定各组件的输入输出。输入是一段音频和一组拟声候选文本，音频经过分层词符语义音频变换器编码器得到音频嵌入，拟声文本经过鲁伯塔文本编码器得到文本嵌入。由于原有预训练缺乏拟声文本，文本嵌入再经过一个多层感知机投影器向音频嵌入对齐。同一音频嵌入还送入由多层感知机层组成的分类器得到类别对数输出。

对照的实现细节是训练时音频和文本编码器冻结，只有投影器和分类器更新，论文没有报告编码器内部的梯度路径之外的其他微调方式。置信度在这里不是最大值本身，而是前 2 名概率的归一化差值，这样可以反映首选类别相对次选的领先幅度。拟声描述不是生成出来的，而是在候选集合中检索欧氏距离最小的一项。

**声音事件识别 × 置信度分数：** 声音事件识别负责从音频嵌入预测事件类别并给出排序，置信度分数负责度量首选类别相对次选类别的领先幅度，二者搭配的理由是模糊输入下分类器仍会被迫输出一个标签，需要可计算的门限信号决定何时弱化类别断言，组合意义是让后续输出生成能按高、中、低 3 档切换措辞。

拟声词的白话含义是模仿声音本身的词，它不命名声源而是复现听感，论文选用它的理由是人类在低置信度时自然倾向于用这类表达。而且它比完整描述句更短、更贴近声学特征，便于在嵌入空间中做检索。

**对比语言音频预训练 × 拟声词检索：** 对比语言音频预训练负责提供音频与文本共享的联合嵌入空间，拟声词检索负责在该空间按欧氏距离找出与当前音频最接近的拟声候选，二者搭配的理由是原有预训练缺乏拟声文本对齐，单独分类无法描述声学质感，组合意义是在不改动音频编码器的条件下用可训练投影器补齐声音到拟声表达的映射。

下面这张实现总览图把冻结与训练、分类与检索的两条分支画在了一起，图中雪花与火焰标记区分了冻结与可训练模块，建议先看左右分叉再看中间对齐。

> **看图路径：** 1. 先看上下两路编码器分别处理音频输入和拟声文本输入；2. 注意音频编码器冻结而文本投影器可训练的标记差异；3. 再看联合嵌入空间如何同时分叉到分类器和拟声检索器

[![原论文 Fig. 3：Overview of implementation of proposed method](https://arxiv.org/html/2609.23411v1/CLAP_onomatopoeia_02.png)](https://arxiv.org/html/2609.23411v1/CLAP_onomatopoeia_02.png)

*论文图 3。原论文 Fig. 3:：“Overview of implementation of proposed method”。*

这张图上路是音频输入经音频编码器到音频嵌入，下路是拟声文本经文本编码器再经投影器到文本嵌入，中部虚线框是联合嵌入空间，右侧分别接分类器输出事件类别和检索器输出拟声词。图中用不同标记区分冻结的编码器和可训练的投影器与分类器，说明新增的拟声对齐训练不改动原有编码器参数。看懂这张图后，再看损失函数和推理公式就知道每个符号对应哪条分支。

\[\displaystyle s=\frac{p_{(1)}-p_{(2)}}{p_{(1)}+p_{(2)}},\]

\[\displaystyle\hat{o}=\arg\min_{o\in\mathcal{O}}\left\|\mathbf{a}-g(\mathbf{t}_{o})\right\|_{2},\]

前一个公式先取前 2 名类别概率，再算差值与和的比值作为置信度，输入是分类器的归一化输出，目标是得到 0 到 1 之间的领先程度。后一个公式输入是当前音频嵌入和全部候选拟声的投影后文本嵌入，目标是找出距离最小的拟声词。两个公式都不引入新的可训练参数，只是推理时的计算规则。

### 投影器和分类器用什么目标联合训练？

训练阶段的真实计算过程是联合优化两个损失。投影器用均方误差把拟声文本嵌入拉向对应音频嵌入，输入是成对的音频嵌入和文本嵌入，目标是缩小同一对之间的欧氏距离。分类器用交叉熵学习类别判别，输入是音频嵌入经分类器得到的对数输出，监督来源是声音事件类别真值。总体目标是两者相加并用权重系数平衡。

论文给出的权重取值为 1.0，优化器使用 AdamW，投影器和分类器各用 3 层稠密层。论文明确说明训练时音频和文本编码器冻结，因此梯度只更新投影器和分类器，编码器不参与更新。论文没有报告编码器解冻后的对照，也没有报告不同权重取值的扫描结果。

**投影器 × 声音事件分类器：** 投影器负责把拟声文本嵌入向对应音频嵌入拉近，声音事件分类器负责从音频嵌入预测类别分布，二者分工不同但共享音频编码器输出并联合优化，搭配理由是论文希望 1 次前向同时得到类别和拟声描述且不损失分类能力，组合意义是用加权损失同时约束声学模仿与语义判别两个目标。

\[\displaystyle\mathcal{L}_{\mathsf{ono}}=\frac{1}{N}\sum_{i=1}^{N}\left\|\mathbf{a}_{i}-g(\mathbf{t}_{i})\right\|^{2}_{2},\]

\[\displaystyle\mathcal{L}_{\mathsf{cls}}=-\sum_{c=1}^{C}z_{c}\log\mathrm{softmax}_{c}(\mathbf{y}),\]

\[\displaystyle\mathcal{L}=\mathcal{L}_{\mathsf{ono}}+\lambda\mathcal{L}_{\mathsf{cls}},\]

第 1 个公式是拟声对齐损失，对每个训练对计算音频嵌入与投影后文本嵌入差的平方范数再平均。第 2 个公式是分类损失，对真值类别的负对数似然求和。第 3 个公式把两者相加，系数控制分类项的比重。因此不能从模型名称推定其他训练配置的效果，复现时应保持冻结与更新的划分不变。

### 数据、划分、特征和评价场景如何固定？

评价使用 ESC-50 音频数据和 ESC-50-Onomatopoeia 拟声文本数据，后者只覆盖前者中 31 个声音类别。音频特征是 64 维对数梅尔谱，采样率 16 kHz，窗长与跳长固定。音频编码器和文本编码器分别使用预训练检查点，论文未对评价划分调参，所有超参数事先凭经验确定。主识别实验沿用官方 5 折交叉验证，但只在 31 类子集上进行，每个折重复多个随机种子并报告均值与标准差。

为考察不确定条件下的输出质量，论文在对话评价中有意减少训练轮数，使识别准确率降到约 85%，同时拟声对齐也被削弱，以此模拟误识别和低置信度。对话场景假设系统接在人形对话机器人上，机器人感知周围声音并主动向附近用户说话。大模型评价只给文本输出、置信度和拟声词，不给原始音频。

下面这张数据集构成表先把数据规模固定下来，它决定了后文识别实验和检索候选的边界。表前的问题是拟声数据覆盖了多少类别和样本，公平条件是同一 31 类子集内的音频与拟声配对数量，指标方向是样本越多检索空间越大但对齐难度也越大。

| 数据条件 | 类别规模 | 音频规模 | 拟声规模 | 配对用途 |
| --- | --- | --- | --- | --- |
| 31 类子集 | 31 sound classes | 1,240 audio samples | 186,000 onomatopoeic descriptions | all used as individual audio-onomatopoeia pairs |
| 每类划分 | 31 sound classes | 40 samples | 150 onomatopoeia | 40 audio samples |
| 覆盖边界 | subset of 31 sound classes from ESC-50 | 1,240 audio samples | 186,000 onomatopoeic descriptions | onomatopoeic annotations for a subset |
| 公开状态 | 31 sound classes | 1,240 audio samples | 150 onomatopoeia | available dataset link |
| 适用限制 | 31 sound classes | 40 samples | 150 onomatopoeia | subset only not full set |

表后需要说明主要收益与代价。该数据集当前可用，已公开在官方链接，优点是每个音频有大量拟声标注，可支撑检索训练和评价。代价是只覆盖 31 类而非完整集合，因此主结果不能直接推广到全部类别。另一个边界是所有配对都被用作训练对，论文未报告跨类别泛化或未见拟声表达的检索表现，这限制了对开放词汇拟声能力的判断。

下面这张输出模板与特征表把推理时的切换规则和输入特征固定下来，便于复现时按相同阈值组织话语。表前的问题是不同置信度区间对应何种话语结构，公平条件是同一狗叫例子和同一拟声表达，指标方向是置信度越高类别断言越强。

| 置信条件 | 类别强度 | 拟声处理 | 示例话语 | 音频特征 |
| --- | --- | --- | --- | --- |
| greater than or equal to 0.5 | dog barking sound | sound is like bow wow | That is a dog barking sound, and the sound is like bow wow | 64-dimensional log-mel spectrograms |
| between 0.2 and 0.5 | might be a dog barking sound | That sound is like bow wow | That sound is like bow wow, and that might be a dog barking sound | audio sampled at 16 kHz |
| below 0.2 | omit class | only bow wow like sound | I heard a bow wow like sound | window size of 1024 and a hop length of 480 |
| 低置信退回 | omit class | only onomatopoeia | I heard a bow wow like sound | 64-dimensional log-mel spectrograms |
| 模板代价 | repetitive risk | formulaic risk | template-based design is easy to implement | window size of 1024 and a hop length of 480 |

表后要指出代价。模板实现简单可复现，但论文明确提到其输出重复刻板，可能被感知为公式化。更灵活的做法是把类别、置信度和拟声词交给大模型生成自然回复，但这会引入语言模型的额外变量。本文用模板和大模型两种形式分别评价，正是为了区分拟声信息本身与话语包装的效果。

### 识别能力是否被拖累，对话输出更受欢迎吗？

主识别问题测的是增加拟声对齐训练后分类能力是否保持，与谁比是与去掉文本编码器、投影器和检索模块、只用分类损失训练的常规基线比，条件一致体现在同一音频编码器和分类头、同一 31 类 5 折划分和多次随机种子。论文报告显示新系统达到与常规基线相当的识别性能，支持的判断是额外的音频到拟声对齐训练没有损害分类能力。

对话输出问题测的是在模拟不确定条件下哪种输出更受欢迎，基线包括直接输出事件标签和把标签交给大模型改写成自然话语两种，新方法是模板化拟声输出。大模型评价和人工评价都从自然度、丰富度和有用性 3 项打分。论文报告的趋势是新输出在总体上更受欢迎，尤其在描述丰富度上优势明显。

**模板化输出 × 大模型对话生成：** 模板化输出负责按置信度阈值切换固定句式以保证可复现比较，大模型对话生成负责把类别、置信度和拟声词组织成自然话语，搭配理由是模板易重复刻板而大模型措辞更灵活但引入额外语言模型变量，组合意义是论文用两种形式分别验证拟声信息本身的价值与端到端话语的可用性。

下面这张大模型评价的偏好条形图展示了两两比较的方向，是本节最强的偏好证据，阅读时应先确认每行左右两端标注的比较对象再比较条带长度。

> **看图路径：** 1. 先确认横轴是偏好比例并区分 3 行不同的两两比较对；2. 再比较橙色拟声模板条带在后两行中占据的主导长度；3. 注意第 1 行蓝色条带几乎占满所对应的基线间比较含义

[![原论文 Fig. 5：Pairwise preference scores for SER output representations, obtained using LLM-as-a-judge](https://arxiv.org/html/2609.23411v1/preference_score_bar.png)](https://arxiv.org/html/2609.23411v1/preference_score_bar.png)

*论文图 5。原论文 Fig. 5:：“Pairwise preference scores for SER output representations, obtained using LLM-as-a-judge”。*

这张图横轴是偏好比例，3 行分别比较不同输出对。第 1 行显示把标签改写成自然话语远胜直接输出标签，第 2 行显示拟声模板以很大比例胜过直接标签，第 3 行显示拟声模板以 70% 以上比例胜过大模型改写的标签。观察动作应先确认每行左右两端标注的比较对象，再比较橙色与蓝色条带的长度。该图支持的判断是拟声信息在偏好比较中占优，但它不等于每条样本都成立，也不能替代平均意见分数的绝对水平。

下面这张高低置信度示例表把抽象的偏好差异落到具体话语上，有助于理解为什么拟声在低置信度时更有价值。表前的问题是高低置信度下 3 类输出的话语差异是什么，公平条件是同一输入声音和同一识别系统，评价维度是是否保留声学信息和是否坚持类别断言。

| Ground-truth | CLAP + classifier | CLAP + classifier | CLAP + onoma. |
| --- | --- | --- | --- |
| cow | cow | Did you hear that, too? It sounded like cow. | I heard a "m o o:" sound, which sounded like cow. |
| engine | chainsaw | Something just made a sound around us, | I heard a sound nearby, but I can only |
| engine | chainsaw | and I think it may have been chainsaw. | describe it as something like "g a g a g a g a g a". |

表后需要解释主要收益与具体代价。当真值为牛叫且预测正确时，拟声模板给出拟声加类别，信息更具体。当真值为引擎声却误识别为电锯时，直接标签和改写话语都坚持了错误的电锯判断，而拟声模板退回到只描述类似拟声而不坚持类别，避免了断言错误。这种退回是论文标题中抽象化的含义。代价是若检索到的拟声与实际听感不符，丰富度反而受损，低置信度下完全省略类别候选有时会被认为有用性不足。

### 去掉拟声或换成改写会发生什么，评价规模多大？

论文没有做逐模块消融的数值表，但其 3 路比较本身起到了反证作用。第 1 路是直接输出事件标签，它保留了最少的声学信息，在丰富度上处于劣势。第 2 路是把标签交给大模型改写，它提升了自然度但没有增加声音本身的信息，因此在丰富度上仍落后于拟声模板。第 3 路是拟声模板，它在总体上占优，但优势主要来自拟声带来的具体听感，而非模板句式本身。

**大模型评价 × 人工听评：** 大模型评价负责在不听音频的条件下按自然度、描述丰富度和交际有用性打分并做两两比较，人工听评负责在听过原音频后对同样 3 项指标打分，大模型评价成本低且方差小但听不到拟声与声音是否匹配，人工听评能发现不匹配问题但个体差异大，二者搭配才能同时看到信息增益与匹配失败的代价。

失败条件出现在两种情形，一是拟声与输入不匹配，此时大模型评价和人工评价都指出描述质量下降，自然度受损。二是低置信度下完全不给类别候选，此时部分评价认为有用性不足，用户仍希望得到一个可参考的猜测。这说明输出设计不是简单地在低置信度隐藏类别，而要在承认不确定和保留候选之间平衡。

下面这张评价规模表把样本量、参与者和筛选比例固定下来，便于判断结论的适用边界。表前的问题是偏好结论基于多大规模和何种不确定水平，公平条件是 3 类方法面对同样的样本集和同样的降质对齐，指标方向是样本越多结论越稳但人工方差越大。

| 评价条件 | 样本规模 | 参与者与筛选 | 不确定水平 | 总体结论 |
| --- | --- | --- | --- | --- |
| three methods | 1,240 samples for each of the three methods | 310 participants | approximately 85% for both systems | preferred over those of the conventional deterministic systems |
| listening test | 1,240 samples for each of the three methods | 310 participants | degraded the audio-onomatopoeia alignment | particularly substantial advantage in richness of sound description |
| screening | 1,240 samples | 3.2% of the responses | clearly erroneous answers | excluded screening process |
| recognition | comparable to that of the conventional baseline | five-fold cross-validation | approximately 85% for both systems | comparable recognition performance |
| variability | 1,240 samples | 310 participants | degraded alignment condition | individual differences large |

表后要说明支持与限制。该表支持的判断是偏好优势在两种评价范式下方向一致，尤其在丰富度上。但限制也很明确，人工评分的方差大于大模型评分，说明个体对输出形式的偏好差异大。另一个未胜出项是自然度，人工听评中 3 类方法差异很小，原因是听过音频的人对不匹配的拟声更敏感，过长或重复的拟声会让话语显得别扭。这意味着拟声必须谨慎使用。

### 哪些边界尚未验证，不能承诺什么？

首先是数据边界，拟声数据只覆盖 31 类，结论不能直接推广到完整集合或开放环境。其次是对齐质量边界，对话评价有意使用降质对齐，论文未报告在完整对齐下偏好差距会变大还是变小，也未报告检索排序准确率本身，因此不能把偏好优势等同于检索准确率高。第三是评价者边界，大模型评价不听音频，人工评价方差大且只用模板实现。

两种评价都未测量误判率、延迟、推理开销和实时帧率，不能承诺这些量得到改善。第四是输出设计边界，阈值只是示例实现，论文允许换用其他置信度量和大模型生成方式，但未比较不同阈值和不同提示的效果。这些缺失不是技术错误，而是未验证的推测。

相关性也不等于因果，例如丰富度高与偏好高同时出现，不能断言只要加长拟声就能提高偏好，过长重复反而损害自然度。总体趋势也不等于每组都成立，个别引擎误识别为电锯的例子显示退回拟声有用，但若拟声本身错得离谱，退回也无济于事。训练资源、推理开销与实际延迟需要分别讨论，不能混为一谈。

### 复现先做什么，需要哪些信息条件？

复现应先固定数据和划分，再跑通分类基线，最后加入拟声分支。第 1 步从公开链接获取拟声数据，当前可用状态已确认，核对 31 类每类 40 个音频、每音频 150 条拟声的配对规模，按官方 5 折在 31 类子集上划分。第 2 步用 64 维对数梅尔谱、16 kHz 采样、窗长 1024 跳长 480 提取特征，加载预训练音频和文本编码器并冻结。

只训练 3 层投影器和分类器，权重系数取 1.0，优化器用 AdamW。第 3 步按前 2 名概率差计算置信度，按欧氏距离检索拟声候选，再按阈值组织模板话语。关键超参数和信息条件是编码器冻结、投影器可训练、联合损失权重、模板阈值和降质轮数对应的约 85% 准确率。

论文区分了代码开源、权重下载和系统可运行，本研究给出数据集链接当前可用，但未在本证据中给出完整可运行系统的链接，因此复现对话机器人部分需要自行接入大模型。评价时应分别复现直接标签、大模型改写和拟声模板 3 路，并同时记录自然度、丰富度和有用性，避免用自动指标代替人评。还需补做的验证包括拟声检索准确率、不同阈值下的偏好变化，以及在未见类别上的泛化表现。

### 何时值得尝试这种输出，记住哪条判断？

当应用需要向用户解释周围环境且允许类别不确定时，值得尝试这种输出，例如家庭监测、机器人巡视和多媒体检索中的主动提醒。它的价值不在提高分类分数，而在误识别不可避免时仍保留可行动的信息。复现时先验证分类能力未受损，再在模拟低置信度下比较输出偏好，最后检查拟声与音频是否匹配。

需要记住的判断是，输出应按置信度抽象化，而不是永远给出确定性标签。高置信度可以肯定类别并用拟声补充细节，中置信度应先给拟声再弱化类别猜测，低置信度宁可只给拟声也不坚持错误标签。但这条判断成立的前提是拟声检索足够准确，否则抽象化会以自然度和有用性为代价。

未来的工作应放在提高拟声检索或生成质量、设计更自然的输出组织方式，以及研究个体偏好差异和能听音频的自动评价方法上。初学者复述时应强调输入到输出的完整链路，而不是只背三元组的名称，这样才能在换数据集或换编码器时仍知道哪里需要重新对齐。

<details>
<summary>📎 论文与评分元数据</summary>

排名：前50% | 文档类型：方法研究 | [arXiv 原文](https://arxiv.org/abs/2609.23411)

</details>

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。

- 评分规则：type-aware-v1

- 评分模型：muse-spark-1.3-contributor

- 评分请求协议：openai_responses

---

[← 返回 2026-09-23 语音/音乐/音频论文速递](/audio-paper-digest-blog/posts/2026-09-23/)
