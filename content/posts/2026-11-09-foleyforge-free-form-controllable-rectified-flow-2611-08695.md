---
title: "FoleyForge: Free-form, Controllable, Rectified-flow Editing of Sound Effects"
date: 2026-11-09
draft: false
tags: [音频编辑, 音频生成, 流匹配, 主观评测]
categories: [论文速递]
description: "针对单条音效按自由指令做语义、风格和声学编辑并保留原声身份的问题，FoleyForge 用合成三元组数据微调整流流生成模型并加入响度和包络等可控轴，在 Subtle 和 Creative 两组评测上取得较高的指令遵循度，代价是大幅编辑时音质和保真度需要权衡。"
hiddenInHomeList: true
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_arxiv_id: "2611.08695"
paper_digest_workbench_contract: "researcher-workbench"
paper_digest_workbench_schema_fingerprint: "1f09b594c317cc38e934de27a5b0e8ceb4baa50ef79bd4f8683dd9adea720fe7"
paper_digest_reader_title: "FoleyForge：按一句话指令改音效，还留住原来的声音"
paper_digest_original_title: "FoleyForge: Free-form, Controllable, Rectified-flow Editing of Sound Effects"
paper_digest_arxiv_version: 1
paper_digest_arxiv_versioned_id: "2611.08695v1"
paper_digest_arxiv_abs_url: "https://arxiv.org/abs/2611.08695v1"
paper_digest_arxiv_pdf_url: "https://arxiv.org/pdf/2611.08695v1.pdf"
paper_digest_primary_task: "音频编辑"
paper_digest_tags_contract: "paper-tag-flat-tags"
paper_digest_tags_schema_fingerprint: "27e36280a4b8d3df62ebe54d3ab037920f4d69feb2b554163f01bbae2caf4338"
paper_digest_tags_selection_contract: "paper-tag-selection"
paper_digest_tags_registry_version: "paper-tag-catalog"
paper_digest_tags_registry_sha256: "9673bc0122e1905a5dcfd8b223675400cc2fa4c36095bc0e5f817edf99a0ec5c"
paper_digest_tags_concepts: [{"facet":"task","id":"task.audio-editing","label":"音频编辑"},{"facet":"task","id":"task.audio-generation","label":"音频生成"},{"facet":"method","id":"method.flow-matching","label":"流匹配"},{"facet":"method","id":"method.subjective-evaluation","label":"主观评测"}]
paper_digest_primary_method: "流匹配"
paper_digest_score: 7.0
paper_digest_rank_bucket: "前50%"
paper_digest_document_type: "方法研究"
paper_digest_one_sentence: "针对单条音效按自由指令做语义、风格和声学编辑并保留原声身份的问题，FoleyForge 用合成三元组数据微调整流流生成模型并加入响度和包络等可控轴，在 Subtle 和 Creative 两组评测上取得较高的指令遵循度，代价是大幅编辑时音质和保真度需要权衡。"
paper_digest_authors: [{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Giovana Morais"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Hugo Flores García"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Prem Seetharaman"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Johannes Imort"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Justin Salamon"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Magdalena Fuentes"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Oriol Nieto"}]
paper_digest_abstract_sha256: "5e3f35caf4748550f2b9ca46c9f9a3528762fd0018f4ce4699f056f4a9adb533"
paper_digest_sidecars: {"citation.bib":{"sha256":"d2b1d32e82f1bcf5d893d861592bc08a71e0817282022608a32ae054acdde44c","url":"/audio-paper-digest-blog/client/papers/2026-11-09/2611-08695/citation.bib"},"citation.json":{"sha256":"4bf20fa87c200bc3887da6940975b1ef6be3f76cf232fbe2b1ed2106ee37f679","url":"/audio-paper-digest-blog/client/papers/2026-11-09/2611-08695/citation.json"},"citation.ris":{"sha256":"a96003063cf2ef53303a942f017608c26cdc29b1b617f2ee217cd8fef796335b","url":"/audio-paper-digest-blog/client/papers/2026-11-09/2611-08695/citation.ris"},"rethink-context.json":{"contract":"paper-research-context","schemaFingerprint":"5d4e79f7d3ee65b39ccb38281548bf20a1b2041ab7a27625eaf97ab9909a8383","sha256":"01d907fb7a0874693505102333e14803f74ee657b96a69302d85ad86bc0a3f5c","url":"/audio-paper-digest-blog/client/papers/2026-11-09/2611-08695/rethink-context.json"}}
paper_digest_api_reader_contract: "beginner-researcher"
paper_digest_api_reader_schema_fingerprint: "cd8baf5b8bda3a49eec64f6005931af63de4e9a13148cba5f354c661ca6e9df2"
paper_digest_api_reader_article_sha256: "81e04aacf24ec76f53c614876b6487712426f0d50972b0d7581127a49e022bd1"
paper_digest_api_reader_plan_sha256: "6ecdac93e2fa66d50548aa11238faac3a06b13da249081fdac240f001ff1742f"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings"
paper_digest_api_reader_source_binding_schema_fingerprint: "d2a2607a6e561909473022eb43f56332ee357af8568566a095c29083ffdec9cc"
paper_digest_api_reader_source_bindings_sha256: "912870560cfe46e8bbf461352c4163354040876184d623767e7a717d3712c8bc"
paper_digest_api_reader_source_table_count: 2
paper_digest_api_reader_source_formula_count: 0
paper_digest_api_reader_structured_artifacts_sha256: "65eea15f42c5b01f6f82bce4a021da34b70c9b70df97b6c59bec10f33dbd16d9"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity"
paper_digest_api_reader_author_identity_schema_fingerprint: "1e3fd3a9a56c9a5bf52df8df5022690b9a3fa92e83e934f295af87c0e258ed2f"
paper_digest_api_reader_author_identity_sha256: "6bb579fc1fb0d7704a41700b4f7117fb65b59dbe36568a4fe5a68726fd3e8434"
paper_digest_api_reader_author_count: 7
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity"
paper_digest_api_reader_resource_identity_schema_fingerprint: "33b0be17118be61f39b85ce690c8da17e91f2864bb65e85284f60c40067328e0"
paper_digest_api_reader_resource_identity_sha256: "0cd85eb0e23e33168d31f5f5aed93f85cac07d402560b9dd33e937645dfc1f43"
paper_digest_api_reader_resource_count: 2
paper_digest_api_reader_figure_persistence: "ephemeral-no-persisted-figure-assets-v1"
paper_digest_api_reader_decision_projection: "api-reader-decision-projection"
paper_digest_api_reader_decision_projection_schema_fingerprint: "e56feb5ab75c8710904916b898f73dab9bb18bdf65bb60b7ed2edf7f99cea860"
---

# 📄 FoleyForge：按一句话指令改音效，还留住原来的声音

> 英文题目：*[FoleyForge: Free-form, Controllable, Rectified-flow Editing of Sound Effects](https://arxiv.org/abs/2611.08695v1)*

<!--paper-tag-hierarchy-v1:start-->

**研究分类**

- **研究任务**：[音频编辑](/audio-paper-digest-blog/papers/?concept=task.audio-editing)；[音频生成](/audio-paper-digest-blog/papers/?concept=task.audio-generation)
- **研究方法**：[生成模型](/audio-paper-digest-blog/papers/?concept=method.generative) → [流匹配](/audio-paper-digest-blog/papers/?concept=method.flow-matching)；[人类参与评测](/audio-paper-digest-blog/papers/?concept=method.human-evaluation) → [主观评测](/audio-paper-digest-blog/papers/?concept=method.subjective-evaluation)

<!--paper-tag-hierarchy-v1:end-->

> 评分：**7.0/10** | 创新 1.5/2 | 技术严谨 1.2/1.5 | 实验充分 1.2/1.5 | 清晰度 0.8/1 | 影响力 1/1.5 | 开源 0/1.5 | 可复现 0.3/0.5 | 工程/实践 1/1.5


## 👥 作者与机构

- Giovana Morais：机构信息未能在本次解析中与作者逐人可靠绑定
- Hugo Flores García：机构信息未能在本次解析中与作者逐人可靠绑定
- Prem Seetharaman：机构信息未能在本次解析中与作者逐人可靠绑定
- Johannes Imort：机构信息未能在本次解析中与作者逐人可靠绑定
- Justin Salamon：机构信息未能在本次解析中与作者逐人可靠绑定
- Magdalena Fuentes：机构信息未能在本次解析中与作者逐人可靠绑定
- Oriol Nieto：机构信息未能在本次解析中与作者逐人可靠绑定

## 📌 核心摘要

声音设计需要保留原有素材的时间与音色，只改变指令点名的部分，而直接重写提示词再生成会丢掉已调好的身份与画面同步。FoleyForge接收一条输入音效与一条自由文本编辑指令，输出完成改动的音效并保留指令未提及的内容，覆盖语义、风格与类似均衡、混响、变调的信号处理式改动。先用音频语言模型撰写指令与目标描述，再分别经信号处理链渲染与生成模型合成配对音频并加入复合、逆向与空操作样本，最后把配对三元组送入整流流音频生成模型Sketch2Sound微调。微调把来源音频编码为干净隐变量块并前置拼接，用交叉注意力注入指令，以带噪重去噪初始化编辑起点；免对齐前置允许输出时长脱离来源，不同于SAO-Instruct的通道拼接对齐。模型还引入响度差、编辑强度与中值滤波后的均方根能量包络等属性控制，通过无分类器引导独立放大。在无真值的Creative Set共90个样本评测中，FoleyForge的Qwen指令遵循评分为3.44，高于SAO-Instruct的2.69，而方向相似度分别为0.100与0.093，说明改动量相近时FoleyForge指令命中率更高。结论适用于单源音效的指令编辑，依赖内部音效库与合成流程，公开复现与跨分布泛化尚未验证；原文未披露训练、推理或部署成本。

## 🔗 开源与复现资源

- 第三方资源：<https://giovana-morais.github.io/2027_icassp_foleyforge_demo> → <https://giovana-morais.github.io/2027_icassp_foleyforge_demo/> — 链接可访问（HTTP 200）

- 第三方资源：<https://huggingface.co/disco-eth/sao-instruct> — 链接可访问（HTTP 200）

可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 音效师真正要改的是什么

论文处理的是单条音效的后期精修。输入是一段已经选好并对好画面的声音，例如脚步、撞击、呼啸或吱呀声，加上设计师用自然语言写的一句改动要求，例如让拳击更重、让狗吠更闷、让剑声更亮。输出是一段新音频，它要落实这句改动，同时保留指令没有提到的身份信息，包括出现时机、音色基底和质感，尤其是与画面的同步关系。

这与从头文本生成音效不同。从头生成是给定完整声音描述重新合成一段，身份不可控，每次时间结构都可能变化。编辑任务要求在原有结构上做局部、可控的移动：改动的部分要动到位，没提的部分尽量不动。评价也因此分成两端，一端看指令是否被执行，另一端看原声是否被保留，音质是否没有被破坏。

### 已有编辑路线为什么不够用

论文把已有方法分成两类。第一类给定完整目标描述做编辑，模型知道结果应该像什么，但用户需要把结果完整重述一遍。第二类直接给定编辑指令，模型知道应该改变什么，代表是 SAO-Instruct。论文采用第二类，因为它更接近设计师只说改动的工作方式。

**指令编辑 × 目标描述编辑：** 指令编辑指输入是“改什么”，例如使撞击声更沉重；目标描述编辑指输入是“改完像什么”，例如沉重的金属撞击声。前者只说变化量，保留未提及的部分；后者要完整重述结果。FoleyForge 采用前者，因为音效师更习惯说改动，而不是重写整个声音描述。

免训练方法不需要为编辑专门微调。SDEdit 把输入加噪到中间时刻再向指令方向去噪，EchoEdit+ 不用反演，直接用源提示和目标提示下的整流流速度差来编辑。论文指出，这类方法缺少对编辑幅度的显式控制，往往偏向欠编辑：为了保住输入，指令落实不足，尤其在指令比较宽泛时更明显。另一类障碍是数据，语义和创意编辑需要成对的编辑监督，而公开的音效编辑数据集此前没有。

### FoleyForge 要解决的具体问题

FoleyForge 把任务定义为：给定输入音效和一句自由形式的改动指令，输出落实该改动的音频，同时保留指令未涉及的内容。一个模型要同时覆盖语义编辑、风格编辑和类似数字信号处理的声学编辑，例如均衡、混响、变调和时间拉伸。用户还可以对编辑的某些属性做细粒度调节，例如响度。

困难有三处。第一，没有现成的大规模音效编辑三元组可用。第二，源音频进入生成模型时不能强制等长配准，否则加混响、改变包络这类操作会被限制。第三，编辑幅度和保真度存在权衡，需要显式的、可调节的操作点，而不是固定行为。

### 整体流程是怎样衔接的

全流程可以沿着一个样本理解。先有一段输入音效，数据管线为它配一句指令和一段输出音频，构成三元组。模型侧以 Sketch2Sound 的整流流版本为骨干，在神经音频编解码器的隐空间中生成，文本通过 FLAN-T5-XXL 嵌入并经交叉注意力注入。训练时只微调整流流 Transformer，文本和音频编码器保持冻结。

推理时，源音频被编码成干净隐变量并前置在噪声输出序列之前，指令经文本编码器注入，输出隐变量从 SDEdit 加噪后的输入出发开始去噪。响度、编辑强度和能量包络等属性作为附加控制加入每 1 帧，并可用无分类器引导放大。最终输出音频既锚定输入结构，又向指令方向移动。

### 三类训练数据各负责什么

数据管线输出三元组，包含输入音频、输出音频和文本指令。DSP 编辑负责细粒度声学变化，操作选自混响、低通滤波、变调等常见声音设计工具。做法是让 Qwen3-Omni-30B-A3B-Captioner 听输入音频，只用允许的操作集合写出可实现的指令，再用 librosa 和 torchaudio 按操作链渲染输出音频。

**DSP 编辑 × 生成式编辑：** DSP 编辑指只用信号处理就能实现的声学变化，如混响、低通滤波、变调；生成式编辑指信号处理做不到的语义变化，如金属门声变成木门声。前者用效果器链渲染得到输出音频，后者用生成模型合成配对音频。两者互补，共同提供大规模编辑三元组。

生成式编辑负责 DSP 做不到的变化，例如金属门声变木门声。做法是基于人工标注的音效描述，让同一音频语言模型写出编辑指令和输出描述，但限制输入输出保持同域：同一主体的动作变化、小的主题变化、地点变化和材质变化允许，无关替换不允许。两段音频都用 Sketch2Sound 合成：能沿用输入能量曲线就按能量曲线条件合成，需要改变能量轮廓时则用同一噪声隐变量合成两端，使两者密切相关。

辅助编辑负责稳健性，包括把 DSP 和生成操作合在一起的复合编辑、正反 2 个方向都计算的逆编辑，以及要求原样重建的无操作编辑。最终训练集为 464k 三元组，其中 DSP 约 173k，生成式约 118k，辅助约 173k，辅助内含复合 59k、逆向 86k 和无操作 28k。

### 源音频和指令是如何进入模型的

源条件采用对齐无关的序列前置。源片段被编码为 t=0 时刻的干净隐变量，作为一段长度可变的独立块拼在含噪输出隐变量序列之前。拼接序列共享位置嵌入，Transformer 自注意力让输出 token 能看到干净源 token，反之亦然。前置块在计算损失前被切掉，因此训练目标只针对输出。

**序列前置条件 × 通道拼接条件：** 序列前置条件指把原声音效编码成干净隐变量块，拼在待生成噪声序列前面，让注意力去参考它，不要求两者时长和时间网格对齐；通道拼接条件指把源隐变量在通道维拼到输入上，要求输入输出配准在同一时间网格。前者允许加混响等改变时长结构的操作，后者限制了编辑幅度。

这样做的好处是输出隐变量与源的时长和网格解耦，不必等长、重采样或补齐到同一隐时间轴。指令条件通过带固定角色前缀的文本编码注入交叉注意力，另有一个可选的输出描述槽以同样方式进入。训练采用两种引导配置：一种以输出描述为无分类器引导轴，指令始终开启；另一种以指令为引导轴，输出描述只作为高丢弃的训练辅助。推理时前置源始终开启，即出现在每个引导分支中且不被置零，因此引导放大文本轴的同时，源始终锚定身份。编辑起点用 SDEdit 初始化，把编码后的输入加噪到中间扩散时刻再去噪，噪声强度 t0 越大，偏离输入的自由度越大。

### 响度、强度和包络控制怎么算

每个训练对都可以导出相对控制量，用户在推理时也可拨动。除特别说明外，控制量被投影后加到每一隐帧上。响度是归一化后的 LUFS 输出减 LUFS 输入，只决定编辑后应该多响，与内容无关。编辑强度是在响度归一化音频上计算的多尺度对数梅尔谱 L1 距离，因此对响度不敏感，与响度控制正交，决定整体变化程度。

能量包络是经中值滤波的 RMS 曲线，反映输出的时间幅度轮廓，包括瞬态、起音和节奏。训练时取自目标，推理时目标不可用则取自输入，再用引导强度决定严格跟随的程度。自然语言幅度采用 SILA 式策略，把同样的对数梅尔谱距离量化成短语，拼在指令后，例如细微、中等、明显和剧烈编辑，使变化量也可以用自然语言调节。

### 模型训练了什么、冻结了什么

训练只更新整流流 Transformer，文本和音频编码器冻结，共在 8 卡上训练 80k 步，使用 AdamW，峰值学习率 10−5，300 步线性热身，稳定阶段后在最后约 15% 步数线性衰减。文本引导信号带丢弃训练以学到空方向：输出描述 50% 时间丢弃而指令始终开启；或指令轻度丢弃 10%，输出描述作为 50% 高丢弃的训练辅助。前置源训练时也轻度丢弃 10%，但推理时始终开启。

每个细粒度控制也带丢弃训练以学到各自的空方向，响度和编辑强度丢弃率为 0.3，能量包络丢弃率为 0.9。推理时可以单独用无分类器引导放大某一个控制轴，其余保持训练强度。主结果配置使用 SDEdit 噪声水平 t0=0.9，能量包络引导为 0.5，文本引导为 3，能量包络接地开启，编辑强度和响度标量不使用。另一变体 FoleyForge+ 使用同一检查点，但引入 EchoEdit+ 的免训练最优传输耦合，使编辑隐变量与源同样加噪，让两次速度查询都保持在分布内，防止沿轨迹漂移。

### 在什么数据和指标上比较

评测用两组基准。Subtle 组为 100 样本、有人审、有真值的较细微编辑，DSP 和生成式各半，与训练管线同分布但与训练验证无重叠。Creative 组为 90 样本、无真值的较宽泛编辑，输入由未微调的 Sketch2Sound 生成并只配指令，因为这些编辑难以用传统 DSP 实现，指令对所有模型都是分布外，音频对 Sketch2Sound 系模型是分布内。所有输入和指令都经人工审核。

基线包括指令式 SAO-Instruct 公开检查点，以及作用于未微调生成器的 SDEdit、EchoEdit+ 和加入输入能量包络的 SDEdit+Sketch，后三者与 FoleyForge 共享架构，只在编辑实现上不同，用于分离微调、数据和条件的作用。编辑强度用 LAION-CLAP 嵌入空间的余弦相似度衡量：对齐度看输出与目标描述的匹配，方向看输入到输出的音频变化与文本变化是否一致，保真度看输入输出音频相似度。声学侧用响度归一化后的多尺度对数梅尔谱 L1 距离表示编辑量。

遵循度直接用大音频语言模型打分，输入、编辑结果和指令一起给评委，按 1 到 5 打分，主评委是 Qwen3-Omni-Instruct，另用未参与管线的 Gemini 3.7 Flash 做交叉验证。音质用与固定真实音效参考库的 Fréchet Audio Distance，越低越好，以及无参考的 Audiobox-Aesthetics 生产质量分，越高越好。听感实验有 25 名经耳机筛查的被试，每人听 10 段 Creative 组 10 秒内片段，在匿名随机顺序下对 SAO-Instruct、SDEdit、FoleyForge 和隐藏的未编辑锚点打音质和遵循度。

### 主结果在什么条件下支持高遵循度

下表比较的问题是：在 Subtle 和 Creative 两组上，各系统能否同时做到指令落实和原声保留，且不明显降低音质。条件是同一划分和同一输入，指标方向为对齐度、保真度、方向、Qwen、Gemini 和生产质量分越高越好，Fréchet Audio Distance 越低越好。FoleyForge 主配置偏向高编辑端，FoleyForge+ 偏向高保真端。

|  | Subtle Set (ground truth, n=100) | Subtle Set (ground truth, n=100) | Subtle Set (ground truth, n=100) | Subtle Set (ground truth, n=100) | Subtle Set (ground truth, n=100) | Subtle Set (ground truth, n=100) | Subtle Set (ground truth, n=100) | Creative Set (no ground-truth, n=90) | Creative Set (no ground-truth, n=90) | Creative Set (no ground-truth, n=90) | Creative Set (no ground-truth, n=90) | Creative Set (no ground-truth, n=90) | Creative Set (no ground-truth, n=90) | Creative Set (no ground-truth, n=90) |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
|  | Editing Strength | Editing Strength | Editing Strength | Editing Strength | Editing Strength | Audio Quality | Audio Quality | Editing Strength | Editing Strength | Editing Strength | Editing Strength | Editing Strength | Audio Quality | Audio Quality |
| Model | alig↑ | faith↑ | dir↑ | Qwen↑ | Gemini↑ | FAD↓ | PQ↑ | alig↑ | faith↑ | dir↑ | Qwen↑ | Gemini↑ | FAD↓ | PQ↑ |
| Ground truth | 0.388 | 0.747 | 0.133 | 3.28 | 4.72 | 0.340 | 6.77 | – | – | – | – | – | – | – |
| SAO-Instruct [24] | 0.361 | 0.720 | 0.066 | 2.94 | 4.58 | 0.382 | 6.71 | 0.389 | 0.831 | 0.093 | 2.69 | 3.65 | 0.406 | 6.76 |
| SDEdit [22] | 0.293 | 0.298 | 0.127 | 3.28 | 3.99 | 0.432 | 6.58 | 0.339 | 0.443 | 0.094 | 3.34 | 4.31 | 0.423 | 6.66 |
| EchoEdit+ [6] | 0.365 | 0.902 | 0.029 | 2.52 | 4.10 | 0.349 | 6.85 | 0.371 | 0.895 | 0.031 | 2.31 | 3.45 | 0.380 | 6.79 |
| SDEdit+Sketch (ours) | 0.339 | 0.545 | 0.113 | 3.06 | 4.55 | 0.387 | 6.58 | 0.393 | 0.666 | 0.092 | 3.27 | 4.27 | 0.409 | 6.67 |
| FoleyForge (ours) | 0.352 | 0.491 | 0.111 | 3.34 | 4.27 | 0.406 | 6.47 | 0.395 | 0.602 | 0.100 | 3.44 | 4.42 | 0.430 | 6.70 |
| FoleyForge+ (ours) | 0.370 | 0.856 | 0.050 | 2.36 | 4.16 | 0.351 | 6.96 | 0.373 | 0.889 | 0.032 | 2.47 | 3.55 | 0.381 | 6.94 |

表中可见的格局是基线各占一角：SDEdit 遵循较强但保真低，EchoEdit+ 保真最高但方向接近 0.03，几乎没有可感编辑，SAO-Instruct 保真但偏细微。FoleyForge 在两组上取得最高的 Qwen 遵循度，在 Creative 组对齐度也最高，方向在 Creative 组最好，在 Subtle 组接近参考和 SDEdit。FoleyForge+ 则在 Subtle 组对齐度领先，并贴近 EchoEdit+ 的保真端。音质各系统相近，FoleyForge+ 两组生产质量分最好，FoleyForge 因偏离输入最远而相对偏低。论文因此把音质读作编辑没有破坏输出的检查，而不是单一排名。

**编辑强度 × 保真度：** 编辑强度衡量输出相对输入或相对目标语义移动了多少，越高说明指令落实越多；保真度衡量输出音频与输入音频有多相似，越高说明原声保留越多。两者天然互斥，理想编辑器要同时靠右上，但基线往往只能占一角，FoleyForge 用噪声起点和包络约束在两者之间移动。

读图说明：下图横轴是保真度，纵轴是 Qwen 遵循度，越靠右上越理想，图中每个标记是两组平均，蓝色连线是 FoleyForge 扫参轨迹。请重点看各标记的角落位置和连线的走向。

> **看图路径：** 1. 先看横轴保真度与纵轴 Qwen 遵循度的含义和理想右上方向；2. 再找 FoleyForge、FoleyForge+、SAO-Instruct、SDEdit 和 EchoEdit+ 各处在哪一角；3. 最后看 FoleyForge 控制扫参连线是如何从高遵循走向高保真的

[![原论文 Figure 2：Adherence vs. faithfulness, averaged over Subtle Set and Creative Set.](https://arxiv.org/html/2611.08695v1/results_combined.svg)](https://arxiv.org/html/2611.08695v1/results_combined.svg)

*论文图 1。原论文 Figure 2:：“Adherence vs. faithfulness, averaged over Subtle Set and Creative Set. An ideal editor lies toward the top right.”。*

图中确实可见 SDEdit 在左上，EchoEdit+ 和 FoleyForge+ 在右下，SAO-Instruct 在中右，FoleyForge 在左上靠近真值，SDEdit+Sketch 居中，蓝色扫参线随噪声起点增大从保真走向遵循。这说明同一模型可以通过初始化噪声覆盖一条前沿，而不是只能固定在一个点上。

### 人工听感是否与机器评委一致

下表比较的问题是：在 Creative 组随机抽取的短片段上，人耳感知的遵循度和音质排序是否与大模型评委一致。条件是同一 10 段输入、同一三系统加隐藏锚点、被试内配对比较并经 Holm 校正的 Wilcoxon 符号秩检验。分数为 1 到 5 均值，越高越好。

| 条件 | 遵循度均值 | 音质均值 | 原文对象 |
| --- | --- | --- | --- |
| 隐藏未编辑锚点 | 4.54±0.80 音质，1.76±1.24 遵循 | 同左 | 未编辑源作为编辑 |
| FoleyForge | 3.22±1.29 遵循，3.43±1.19 音质 | 同左 | 本文编辑系统 |
| SDEdit | 2.92±1.52 遵循，3.24±1.39 音质 | 同左 | 免训练基线 |
| SAO-Instruct | 2.69±1.41 遵循，3.73±1.16 音质 | 同左 | 指令式基线 |

表中数字说明，隐藏锚点音质最高而遵循最低，符合未编辑的预期。编辑系统中 FoleyForge 遵循第一，显著高于 SDEdit 和 SAO-Instruct，SDEdit 与 SAO-Instruct 之间没有显著分离。音质上 FoleyForge 第二，低于 SAO-Instruct，与 SDEdit 相当。论文将其解释为用小而可靠的音质代价换取更大的遵循增益。人评排序与 Qwen 在 Creative 组的排序一致。但 Subtle 组因授权限制没有做听感实验，那里 Gemini 把 SAO-Instruct 排第一而 Qwen 把 FoleyForge 排第一的分歧仍未解决。

### 每个控制轴是否单调可用

可控性验证每次只扫一个控制轴，分为主配置和关闭包络的隔离配置，在两组平均上观察。响度在两种配置下都随指令目标单调移动，隔离配置更接近理想响应。编辑强度和对应的自然语言短语都单调提高对数梅尔谱编辑量，短语从无到剧烈呈阶梯上升。能量包络开启后输入输出轮廓相关性从 0.11 提高到 0.37，起到把输出接地到源的作用。

**响度控制 × 能量包络：** 响度控制是一个标量，指输出与输入的 LUFS 差值，只管整体多响，不管内容；能量包络是一条随时间变化的中值滤波 RMS 曲线，管的是瞬态、起音和节奏轮廓。训练时包络取自目标，推理时取自输入并用引导强度约束跟随程度。两者正交，一个管响，一个管时间形状。

读图说明：下图分 4 个面板，左上是响度指令与实际值，右上是编辑强度与编辑量，左下是自然语言幅度与编辑量，右下是包络开关与轮廓相关性。请比较 main 与 isolated 两条线的斜率和覆盖范围。

> **看图路径：** 1. 先对照左上响度图的指令值与实际值，以及理想虚线的位置；2. 再比较右上编辑强度和左下自然语言幅度在 main 与 isolated 下的斜率差异；3. 最后看右下包络开与关时输出输入轮廓相关性的柱高变化

[![原论文 Figure 3：Control ablations. Each attribute control is monotone; the on-by-default energy envelope of the…](https://arxiv.org/html/2611.08695v1/ablation_curves_v3.svg)](https://arxiv.org/html/2611.08695v1/ablation_curves_v3.svg)

*论文图 2。原论文 Figure 3:：“Control ablations. Each attribute control is monotone; the on-by-default energy envelope of the model with the main-results configuration trades control for faithfulness.”。*

图中确实可见响度两条线都向上，隔离线斜率更大；编辑强度和自然语言幅度的隔离线整体更高、跨度更大；包络开的柱明显高于关的柱。这说明默认开启的能量包络用一部分控制权限换了源接地，关闭后各轴可调范围更大。FoleyForge 因此提供的是一族可调工作点，而不是单一行为。

### 结论在什么边界内才成立

首先，Subtle 组与训练管线同分布，只是划分不重叠，因此在该组的好结果不能直接推广到完全野生的细微编辑。Creative 组指令是分布外的，但音频仍来自 Sketch2Sound 系生成器，对真实录音的泛化没有在这两组中直接证明。

其次，自动指标只能量变化多少，不能判断改得对不对。方向相近的 SAO-Instruct 和 FoleyForge 在 Creative 组方向分别为 0.093 和 0.100，几乎相同，但两个大模型评委都给出有利于 FoleyForge 的大幅差距，因此必须把对齐度、方向、保真度和评委分一起读。SDEdit 在 Subtle 组 Qwen 下与真值持平，但保真度只有 0.298，说明它更像重生成而非编辑。

第三，听感只覆盖 Creative 组 10 秒内片段且只比 3 个系统，Subtle 组的评委分歧留待未来工作。音质差异在统计上存在，但绝对分差不大，且 Fréchet Audio Distance 依赖内部私有真实音效参考库，外部无法完全复算。

### 要复现第一步做什么

复现需要区分三件事：论文文首给出的是演示页链接，用于试听，不作为代码权重证明；SAO-Instruct 检查点是论文提到的第三方公开链接，可用于基线；FoleyForge 自身的训练数据是内部授权音效加人工描述，外部没有同款数据。第一步应先跑通未微调 Sketch2Sound 上的 SDEdit 和 EchoEdit+，确认加噪重去噪和速度差编辑的基线行为，再实现序列前置条件和 SDEdit 初始化。

数据侧若无授权库，可先用公开音效加描述仿照 3 类管线小规模构造：DSP 分支用固定效果器链渲染，生成分支用同一生成器按能量曲线或同一噪声隐变量合成配对，辅助分支加入复合、逆向和无操作。训练侧保持文本和音频编码器冻结，只训练 Transformer，并为输出描述、指令、前置源和各控制轴设置与论文一致的丢弃率，否则引导轴学不到空方向。评测时固定参考库和评委模型才能比较 Fréchet Audio Distance 和 1 到 5 的遵循分，换参考库或换评委都会改变绝对值。

### 什么时候值得尝试 FoleyForge

当任务是单条音效的迭代精修，且必须保留时机和基底音色时，FoleyForge 的配方值得尝试：合成三元组解决无数据问题，长度灵活的序列前置解决配准限制，多轴控制解决幅度和保真度的权衡。需要大幅语义改动时用主配置并调高噪声起点和编辑强度，需要轻微润色或严格跟随节奏时打开能量包络或切换到 FoleyForge+ 的保真端。

还需补的验证包括真实录音而非生成器音频上的编辑、Subtle 组的人耳验证、以及推理延迟和交互开销的测量。论文没有报告延迟和算力成本，因此不能从音质和遵循结论推断它更快或更省。总的来说，它不是在曲线上多占一个点，而是给声音设计提供了一条可在遵循与保真之间移动的可调路径。

<details>
<summary>📎 论文与评分元数据</summary>

排名：前50% | 文档类型：方法研究 | [arXiv 原文](https://arxiv.org/abs/2611.08695v1)

</details>

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。

- 评分规则：type-aware-v1

- 评分模型：muse-spark-1.3-contributor

- 评分请求协议：openai_responses

---

[← 返回 2026-11-09 语音/音乐/音频论文速递](/audio-paper-digest-blog/posts/2026-11-09/)
