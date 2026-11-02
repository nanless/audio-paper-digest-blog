---
title: "Erase the Injected Region: Multimodal Prompt-Injection Defense with On-Policy Self-Distillation"
date: 2026-11-02
draft: false
tags: [音频系统攻击与防御, 知识蒸馏, 音频安全, 多模态模型]
categories: [论文速递]
description: "针对藏在图像音频视频中的间接注入，ERASE 用抹掉注入区域后的视图做教师进行在轨自蒸馏，在评测基准上把攻击成功压到接近零，同时把被攻击输入的任务准确率拉回到接近无防御干净输入的水平，但结论只在非自适应注入和区域可分离的条件下成立。"
hiddenInHomeList: true
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_arxiv_id: "2610.41307"
paper_digest_workbench_contract: "researcher-workbench-v1"
paper_digest_reader_title: "抹掉注入再学习：多模态间接提示注入的 ERASE 防御"
paper_digest_original_title: "Erase the Injected Region: Multimodal Prompt-Injection Defense with On-Policy Self-Distillation"
paper_digest_arxiv_version: 1
paper_digest_arxiv_versioned_id: "2610.41307v1"
paper_digest_arxiv_abs_url: "https://arxiv.org/abs/2610.41307v1"
paper_digest_arxiv_pdf_url: "https://arxiv.org/pdf/2610.41307v1.pdf"
paper_digest_primary_task: "音频系统攻击与防御"
paper_digest_tags_contract: "paper-tag-flat-tags-v2"
paper_digest_tags_selection_contract: "paper-tag-selection-v2"
paper_digest_tags_registry_version: "paper-tag-catalog-v2"
paper_digest_tags_registry_sha256: "cdef54423b5dfc00a1d017ef6639446d2ecd1d9c1acf71c8eb4f6219a46b7ba8"
paper_digest_tags_concepts: [{"facet":"task","id":"task.audio-system-attack-defense","label":"音频系统攻击与防御"},{"facet":"method","id":"method.distillation","label":"知识蒸馏"},{"facet":"research_focus","id":"research_focus.security","label":"音频安全"},{"facet":"model_family","id":"model_family.multimodal","label":"多模态模型"}]
paper_digest_primary_method: "知识蒸馏"
paper_digest_score: 7.1
paper_digest_rank_bucket: "前50%"
paper_digest_document_type: "方法研究"
paper_digest_one_sentence: "针对藏在图像音频视频中的间接注入，ERASE 用抹掉注入区域后的视图做教师进行在轨自蒸馏，在评测基准上把攻击成功压到接近零，同时把被攻击输入的任务准确率拉回到接近无防御干净输入的水平，但结论只在非自适应注入和区域可分离的条件下成立。"
paper_digest_authors: [{"affiliations":["South China University of Technology"],"name":"Shuo Hong"},{"affiliations":["South China University of Technology"],"name":"Jiaxin Ma"},{"affiliations":["South China University of Technology"],"name":"Xidi Cai"},{"affiliations":["South China University of Technology"],"name":"Qianli Ma"}]
paper_digest_abstract_sha256: "3be2764276221b1e09b1864c9ea385aa20f05edffeec2f2cd484c4434b94ae55"
paper_digest_sidecars: {"citation.bib":{"sha256":"59025512c55708746e5d1510507474d476159873f90739892ea760d868053f87","url":"/audio-paper-digest-blog/data/papers/2026-11-02/2610-41307/citation.bib"},"citation.json":{"sha256":"16990f3720bae7012fae1db0c58a1b1a7255112ac125fbbcaaf23928a574e194","url":"/audio-paper-digest-blog/data/papers/2026-11-02/2610-41307/citation.json"},"citation.ris":{"sha256":"22238694905cef4b71f1b64bc12dc21259e1550c715e4a2c711553d3b2ac8080","url":"/audio-paper-digest-blog/data/papers/2026-11-02/2610-41307/citation.ris"},"rethink-context.json":{"contract":"paper-research-context-v2","sha256":"49602d99ac9776e107a57809287e64fcd2d57057436c97d6bcfe7856a23da000","url":"/audio-paper-digest-blog/data/papers/2026-11-02/2610-41307/rethink-context.json"}}
paper_digest_api_reader_contract: "beginner-researcher-v3"
paper_digest_api_reader_article_sha256: "db087a6b770688f76b9cf7c07d475d882c51e9d667da6b6fec39c94557ff1173"
paper_digest_api_reader_plan_sha256: "8c0fa238b17042f76f25314a19e2658ebcaa1ca3c5e50eb91a1de2ea684fcfc5"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings-v4"
paper_digest_api_reader_source_bindings_sha256: "cb2b2b6cc66d82855cf4dfec95b637720b445681c5078dc19ffea6a5e3c9041f"
paper_digest_api_reader_source_table_count: 4
paper_digest_api_reader_source_formula_count: 2
paper_digest_api_reader_structured_artifacts_sha256: "8d7e5834ebc41df2cd8fe295d59e03c04e5cb2d233e8d9ecdbac81130b431e4c"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity-v1"
paper_digest_api_reader_author_identity_sha256: "6f355b91b95273963ade808f3c6685e0f6ebb7572260927726304b2121ec8e42"
paper_digest_api_reader_author_count: 4
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity-v1"
paper_digest_api_reader_resource_identity_sha256: "f459095105c2661facff041a946727a973cfdf67157f80a8631eafa230558393"
paper_digest_api_reader_resource_count: 1
paper_digest_api_reader_figure_persistence: "ephemeral-no-persisted-figure-assets-v1"
paper_digest_api_reader_decision_projection: "api-reader-decision-projection-v2"
---

# 📄 抹掉注入再学习：多模态间接提示注入的 ERASE 防御

> 英文题目：*[Erase the Injected Region: Multimodal Prompt-Injection Defense with On-Policy Self-Distillation](https://arxiv.org/abs/2610.41307v1)*

<!--paper-tag-hierarchy-v1:start-->

**研究分类**

- **研究任务**：[音频系统攻击与防御](/audio-paper-digest-blog/papers/?concept=task.audio-system-attack-defense)
- **研究方法**：[知识蒸馏](/audio-paper-digest-blog/papers/?concept=method.distillation)
- **研究重点**：[音频安全](/audio-paper-digest-blog/papers/?concept=research_focus.security)
- **模型家族**：[多模态模型](/audio-paper-digest-blog/papers/?concept=model_family.multimodal)

<!--paper-tag-hierarchy-v1:end-->

> 评分：**7.1/10** | 创新 1.5/2 | 技术严谨 1.2/1.5 | 实验充分 1.3/1.5 | 清晰度 0.8/1 | 影响力 1/1.5 | 开源 0/1.5 | 可复现 0.3/0.5 | 工程/实践 1/1.5


## 👥 作者与机构

- Shuo Hong：South China University of Technology
- Jiaxin Ma：South China University of Technology
- Xidi Cai：South China University of Technology
- Qianli Ma：South China University of Technology

## 📌 核心摘要

读者需要理解的对象是间接提示注入（indirect prompt injection，通过外部媒体传入的恶意指令），困难是外部媒体同时装着用户任务需要的信息，删掉或压制注入时容易连任务信息一起破坏，处理过程是让模型在受攻击输入上仍输出与删掉注入后一致的答案。擦除视图（erased view）指只把注入占据的连续区域换成该模态空白内容而保留其余媒体和尺寸的参考输入；在线策略自蒸馏（on-policy self-distillation）指学生用自己在受攻击输入上的采样轨迹向读取擦除视图的冻结教师学习逐词元分布。训练时先按基准记录的区域位置构造擦除视图，再让冻结基座模型读擦除输入、让可训练学生读受攻击输入并采样回答，学生在每个已生成前缀上用全词表KL（Kullback-Leibler散度）向教师对齐。推理时学生直接读受攻击输入，不做擦除。与表示转向和偏好优化类防御不同，该方法保留了周围媒体的空间或时间结构，并用教师的完整下一个词元分布提供任务导向目标。在基于Lu等基准的领域内音频评测中，ERASE受攻击用户指令准确率为60.1%，高于ARGUS的33.1%，且与无防御干净输入的60.6%相差0.5个百分点以内。适用范围限于注入区域可分离的非自适应攻击，原文未披露训练、推理或部署成本。

## 🔗 开源与复现资源

- 第三方资源：<https://github.com/microsoft/BIPIA/blob/main/benchmark/text_attack_test.json> — 链接可访问（HTTP 200）

可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 任务的输入是什么，要保留什么输出什么

这篇论文研究多模态间接提示注入。输入是 1 对用户请求加外部媒体，媒体可以是图像、音频或视频，其中藏着攻击者写入的指令和触发语。用户目标是让模型利用媒体中的有用信息回答原始问题，攻击目标是让模型放下用户问题转而执行注入指令。难点在于注入和有用信息在同一份媒体里，防御不能简单丢掉整份媒体，否则任务信息也会丢失。

论文把每个样本抽象为用户指令、外部媒体、注入指令、触发语、两类参考答案和写入方式。写入方式在 3 种模态下都占据连续区域，图像是贴在一侧的黑白文字块，视频是任意位置插入的白字黑底片段，音频是任意位置插入的合成语音。区域之外的内容保持不变。评估要同时看两件事，是否跟随攻击，以及在干净和被攻击媒体下回答用户问题的准确率是否保持。

**间接提示注入 × 被攻击媒体 × 擦除视图：** 间接提示注入指攻击指令藏在外部媒体中而非用户直接请求里，被攻击媒体指已经写入触发语和注入指令的图像音频视频，擦除视图指仅把注入占据的连续区域替换为空白而保留其余内容和尺寸时长的参考输入，三者组合把防御问题变成如何让模型在有注入的输入上表现得像看到无注入版本一样。

下面这张音频例子图可以帮助建立直觉，左侧展示同一问题在干净和注入音频下的回答差异，右侧同时给出依赖程度和准确率落差。

> **看图路径：** 1. 先看左侧三行在干净和注入音频下回答是否一致；2. 再看右上注入依赖柱状图三者的高度差异；3. 最后看右下干净与注入准确率的落差谁最小

[![原论文 Figure 1：An audio IPI case on Qwen2.5-Omni-3B.](https://arxiv.org/html/2610.41307v1/figure1.png)](https://arxiv.org/html/2610.41307v1/figure1.png)

*论文图 1。原论文 Figure 1:：“An audio IPI case on Qwen2.5-Omni-3B.”。*

从图中可见，无防御在注入音频下输出攻击字符串，ARGUS 虽然不再输出攻击字符串但把正确答案 Yes 答成 No，只有 ERASE 在两种音频下都答 Yes。右上柱状图显示 ERASE 的注入依赖远低于前两者，右下显示它的注入条件下准确率落差最小。这说明只看是否输出攻击字符串是不够的，还要看任务答案是否被连带破坏。

### 已有防御为什么会挡住攻击却丢了任务

此前防御大致分 3 类。提示侧标记把外部数据标为不可信，模型侧微调让模型优先执行授权指令或在表示空间干预，以及基于偏好和奖励的对齐。多数工作针对文本注入或通用安全，ARGUS 是直接针对多模态间接注入的基线，它在表示空间引导指令跟随行为并配合检测和后过滤。

论文的比较起点是 ARGUS 在图像音频视频上的表现。ARGUS 能把攻击跟随率压得很低，但在音频上被攻击输入的任务准确率明显低于干净输入。论文用噪声扰动做对照，噪声也能让攻击指标归零，但干净输入准确率从 60.6% 掉到 34.5%，说明攻击被压住可能是以破坏任务信息为代价的。这就引出本文要解决的具体缺口，阻断注入命令的同时保留媒体中任务相关的可用信息。

另一条相关路线是在轨蒸馏。知识蒸馏让学生模仿教师分布，在轨版本让学生在自己采样的轨迹上逐词获得教师反馈。当教师就是学生自身在附加信息下的版本时称为在轨自蒸馏，附加信息被称为特权信息。本文把擦除后的媒体作为特权信息，区别在于参考是原位保留结构的多模态擦除视图，而不是文本推理中的参考解答或搜索得到的安全上下文。

### 用什么数量刻画还受注入影响

论文提出两个诊断量。第一个是注入依赖，固定一个已生成前缀，比较同一模型在被攻击输入和擦除输入下的下一词分布，取 2 个方向 KL 散度的平均。数值越小说明擦掉注入前后预测越一致，即模型越不依赖注入段。第二个是擦除视图漂移，固定擦除输入，比较冻结基座和学生在该输入下的分布差异，用教师在前的方式计算，数值越小说明训练后越接近参考行为。

形式化目标是两条。第一是让注入依赖趋近于零，第二是保持对媒体其余部分的敏感性与基座相近。由于跨模态没有统一的内容保持扰动定义，论文用擦除视图漂移和领域内任务效用加领域外表现来间接评估第二条。推理时模型只接收被攻击输入，不需要区域标注也不做擦除预处理。

诊断量的前缀协议有讲究。注入依赖用每个模型自己的贪心前缀，擦除漂移用共享的基座前缀，前者反映各自实际生成路径上的敏感性，后者保证比较在同一前缀下进行。论文明确这些诊断提供与附录条件一致的证据，而不是直接验证全部理论条件，任务保留最终要看准确率和领域外测试。

### ERASE 分哪两步处理一个被攻击样本

ERASE 的名字来自目标直觉，擦掉注入内容后模型行为应不变，而其余信息仍可用。方法分 2 个阶段。第一阶段构造擦除视图，第二阶段用该视图做教师进行在轨自蒸馏。训练时需要注入区域来构造参考，部署时不需要区域信息。

沿一个样本走一遍，假设音频中第 2.54 到 11.20 秒是注入语音，其余是环境音和用户问题。第一阶段把该时间段原位替换为静音，总时长和前后结构不变，得到擦除后音频。第二阶段学生读原始被攻击音频并采样生成回答，冻结教师读擦除后音频，在每个相同前缀下给出完整下一词分布，学生逐位置向教师靠拢。这样教师既看不到攻击，又能看到保留的媒体和用户请求，因而能给出任务导向的目标。

下图展示图像音频视频 3 种模态的原位替换方式，以及学生教师的数据流和损失汇合点。

> **看图路径：** 1. 先看第一阶段三种模态如何原位替换注入区域；2. 再看第二阶段学生与教师分别读哪种输入；3. 最后看共享前缀下两个分布如何形成损失

[![原论文 Figure 2：Overview of ERASE. Stage 1: the erased view replaces the injected region R in the attacked media…](https://arxiv.org/html/2610.41307v1/figure2.png)](https://arxiv.org/html/2610.41307v1/figure2.png)

*论文图 2。原论文 Figure 2:：“Overview of ERASE. Stage 1: the erased view replaces the injected region R in the attacked media \tildeM in place with the blank content of that modality (a white patch for…”。*

从图中可见，图像用白色块覆盖顶部注入条，音频用静音覆盖注入时间段，视频示意为白色空框；按作者图注及方法实现说明，实际视频用黑帧替换，尺寸和时长都不改变。右侧学生分支读被攻击输入并展开轨迹，教师分支读擦除输入，同一共享前缀下的两个全词汇分布形成每步损失，再对位置平均后更新学生。更新时采样轨迹固定，只对匹配项求导，不经过采样过程的分数函数梯度。

### 擦除视图为什么要原位保留结构

擦除算子的定义是分位置判断。如果位置在注入区域内则取该模态的空值，图像为空白，音频为静音，视频为黑帧，否则保留被攻击媒体的原值。因此被攻击视图和擦除视图恰好只在该区域不同，空间范围或时间跨度一致，包括注入带来的额外时长。

保留结构的意义在于让教师的参考与被攻击输入对齐。如果直接用原始干净媒体做参考，音频总时长会变短，图像排版会变化，教师分布与学生输入的结构错位。原位擦除让学生可以在不改变布局和时长的情况下，只学习去掉攻击后的预测，这也是后文音频上领域外保持更好的原因之一。

**学生 × 教师 × 在轨自蒸馏：** 学生是需要被防御的可训练模型，教师是参数冻结的同一基座模型但只读擦除视图，在轨自蒸馏指学生先在被攻击输入上自己采样生成轨迹，再在每个已生成前缀下学习教师的完整下一词分布，教师提供任务导向目标，学生负责把该行为迁移到被攻击输入上。

需要区分的是，擦除视图只在训练时构造。论文用基准自带的注入位置得到区域，推理时学生直接读被攻击输入。如果注入与任务内容交织或重叠，擦除可能连带删掉有用信息，这是论文在局限中承认的前提。

### 两个诊断量如何配合判断防御质量

只看攻击跟随率会漏掉一种情况，模型不再输出攻击字符串，但内部预测仍强烈依赖注入。论文的音频例子中 ARGUS 的攻击跟随率已接近零，但注入依赖仍高达 5.15，与无防御的 6.26 相差不大，说明输出分布一擦除就大变。ERASE 把该值降到 0.0095，不到无防御的 650 分之一。

**注入依赖 × 擦除视图漂移：** 注入依赖比较同一模型在被攻击视图和擦除视图下输出分布的差异，反映预测受注入影响的程度，擦除视图漂移比较学生和冻结基座在同一擦除视图下的差异，反映训练是否偏离参考行为，两者搭配才能区分压住注入和保留参考，前者低而后者高仍意味着任务信息被破坏。

论文还报告 argmax 翻转率，即擦除前后最可能词发生变化的位置比例。ERASE 在 3 个模态上都很低，而 Meta-SecAlign 虽然依赖也下降，但擦除漂移很大，意味着它偏离了基座在擦除视图上的行为。图 4 把两者画在同一平面，理想点是双零，ERASE 最接近该点。低漂移只说明保留参考，不等于单独证明能力保持，能力保持要看领域内外任务准确率。

### 每一步损失计算什么，梯度经过哪里

训练信号是逐位置的教师优先 KL。给定用户指令，被攻击输入和擦除输入分别送入学生和冻结教师。学生在被攻击输入上采样一条轨迹，在每个前缀下学生分布向教师分布靠拢。直觉是惩罚学生在教师认为可能的词上概率过低，从而保留任务相关的备选词。

\[\ell_{t}(\theta)=\mathrm{KL}\!\left(\pi_{\mathrm{base}}(\cdot\mid\bar{x},y_{\lt t})\,\|\,\pi_{\theta}(\cdot\mid x,y_{\lt t})\right)\]

上式中教师分布在前，学生在后，条件分别是擦除输入加共享前缀和被攻击输入加同一前缀，计算覆盖整个词汇表。总目标是对样本和学生采样轨迹取期望，再对轨迹长度平均。

\[\mathcal{L}(\theta)=\mathbb{E}_{(U,\tilde{M})\sim\mathcal{D}}\ \mathbb{E}_{y\sim\pi_{\theta}(\cdot\mid x)}\ \frac{1}{|y|}\sum_{t=1}^{|y|}\ell_{t}(\theta)\]

优化时把采样轨迹固定，只对匹配项求导，不对采样过程求分数函数梯度。论文给出初始化性质，如果基座在某前缀下对两种输入的预测本来就一致，则该位置匹配项在初始点的梯度为零，初始修正信号来自两者不一致的位置。共享参数仍可能通过其他位置的更新间接改变这些位置，因此该性质不是说它们永远不变。

**教师优先 × 全分布匹配：** 全分布匹配指在每个位置计算词汇表上完整的下一词分布差异而非只看采样到的一个词，教师优先指把教师分布放在 KL 散度的前面，迫使学生覆盖教师认为可能的所有合理后续词，两者搭配为被攻击输入提供保留任务选项的监督，而不是只惩罚攻击词。

附录进一步说明，若学生在擦除视图上完全不漂移且匹配损失为零，则注入依赖为零，但这是在采样分布覆盖的输入和前缀上成立，不意味着参数唯一或训练一定达到零。保持其余媒体敏感性的结论也只在固定擦除输入、扰动和前缀下成立，仅匹配未扰动的擦除输入并不能推广到任意扰动。

### 数据划分基线和指标方向如何设置才可比

基座是 Qwen2.5-Omni 的 3B 和 7B。基线分三族，提示类包括系统提示和忽略提示，输入扰动类是加噪，微调类包括 Meta-SecAlign、GRPO 和 SecOPD，另有推理时干预的 ARGUS 作为多模态基线。ERASE 属于微调族，用 LoRA 训练，秩为 128，学习率音频为 5×10 的负 5 次方，图像视频为 2×10 的负 5 次方，学生采样温度为 1.0。

领域内数据沿用 Lu 等人的基准划分。良性部分来自图像 VTQA、音频 Clotho-AQA、视频 MSR-VTT，训练注入用 Stanford-Alpaca，验证用 GLUE 的 8 个分类任务，测试用固定模板要求输出随机字符串。另有 1000 条每模态的多样化指令测试，保留原良性问题和插入位置，只替换注入文本，来源是公开测试指令文件中的 75 条指令，分 15 类。

**用户指令准确率 × 攻击指令准确率：** 用户指令准确率衡量模型正确回答用户原始问题的比例，分为干净输入和被攻击输入两种条件，攻击指令准确率衡量模型完整执行攻击者要求输出的比例，另有计入部分执行的跟随率，四者组合才能判断防御是真正保留任务还是只挡住了攻击字符串。

指标方向是用户准确率越高越好，攻击准确率和跟随率越低越好。领域外分两组，通用推理用 GSM8K、MathVista、MMMU，模态感知用 Omni-Bench、OCRBench、MSVD-QA 和 LibriSpeech，其中语音识别用词错率越低越好。MSVD-QA 用固定 1000 题抽样和归一化匹配计分，只能在表内比较，不宜与公开发表值直接对比。ARGUS 的领域外分数包含后过滤拒绝和重放近似，这是理解其异常低分的关键条件。

### 被攻击输入的任务准确率和攻击跟随率如何变化

核心比较问题是，在同一测试注入下，防御能否同时压住攻击跟随并保持用户任务准确率。公平条件是所有方法评同一组注入，指标方向为用户准确率越高越好，攻击指标越低越好。下表聚焦 3B 音频，这是任务保留差距最明显的一处。

| 条件 | 干净用户准确率 | 被攻击用户准确率 | 攻击跟随率 | 说明 |
| --- | --- | --- | --- | --- |
| 无防御 | 60.6% | — | — | 攻击造成大幅下降 |
| 加噪 | 34.5% | — | 0 | 攻击归零但干净准确率大跌 |
| ARGUS | — | 33.1% | 0.001 | 挡住攻击但任务未恢复 |
| ERASE | — | 60.1% | 0 | 被攻击接近干净水平 |

这 1 对比说明只挡住攻击字符串不等于保留任务。加噪和 ARGUS 都让攻击指标接近零，但前者干净准确率从 60.6% 掉到 34.5%，后者被攻击准确率只有 33.1%。ERASE 被攻击准确率 60.1%，与无防御干净水平相差 0.5 个百分点以内。图像上 ERASE 被攻击准确率比无防御干净水平高 2.4 个百分点，视频高 1.4 个百分点。7B 上 ERASE 在音频被攻击准确率 63.4%，略低于 SecOPD 的 64.2%，但在其余 5 组中更高。未胜出项是 7B 音频的 SecOPD，这提醒单组最优不等于整体最优。

下图展示训练改变量按基座敏感度分箱的结果，虚线为理想校正线。

> **看图路径：** 1. 先确认横轴是基座注入敏感度从低到高；2. 再看 ERASE 曲线是否随敏感度上升而上升；3. 最后比较 Meta-SecAlign 在低敏感区的位置

[![原论文 Figure 3：Training-induced change on Qwen2.5-Omni-3B (top) and 7B (bottom), binned by base injection…](https://arxiv.org/html/2610.41307v1/rq4_localization.svg)](https://arxiv.org/html/2610.41307v1/rq4_localization.svg)

*论文图 3。原论文 Figure 3:：“Training-induced change on Qwen2.5-Omni-3B (top) and 7B (bottom), binned by base injection sensitivity.”。*

从图中可见，ERASE 的改变量随敏感度上升而上升，在 3B 音频最低和最高 4 分位从 0.27 升到 11.6，而 Meta-SecAlign 在最低敏感区已很大。这与选择性修正的预期一致，但前缀错位和训练预算差异限制了方法间严格比较，须结合任务准确率和攻击成功一起读。

### 注入依赖和参考漂移能否同时压低

第二个比较问题是，输出不再跟随攻击时，内部预测是否还依赖注入，以及训练是否偏离参考。条件是前 100 条验证样本，注入依赖用各自贪心前缀，漂移用共享基座前缀，KL 单位为纳特。下表给出 3B 3 模态的诊断数。

| 方法 | 音频注入依赖越低越好 | 音频漂移越低越好 | 图像注入依赖 | 视频注入依赖 |
| --- | --- | --- | --- | --- |
| 无防御 | 6.26 | 0.00 | 1.16 | 3.41 |
| ARGUS | 5.15 | 不适用 | 0.27 | 0.617 |
| Meta-SecAlign | 0.432 | 56.4 | 0.058 | 0.258 |
| ERASE | 0.0095 | 0.048 | 0.0030 | 0.011 |

这 1 对比说明，ARGUS 几乎消除了攻击跟随，但音频依赖仍有 5.15，说明输出分布仍强烈依赖注入。Meta-SecAlign 把依赖降下来，但漂移高达 56.4、18.0 和 21.5，偏离参考很远。ERASE 3 个模态依赖下降超过 99%，漂移保持在 0.05 以下。限制是 ARGUS 的漂移因干预依赖解码轨迹而未纳入共享前缀比较，翻转率等指标也依赖前缀选择。
下图把依赖和漂移画在同一平面，星号为理想双零点。

> **看图路径：** 1. 先看横轴注入依赖与纵轴参考漂移的方向含义；2. 再找标星的理想点与 ERASE 点的距离；3. 最后比较无防御点与 ERASE 点的左右差异

[![原论文 Figure 4：Injection dependence and reference drift provide complementary diagnostics.](https://arxiv.org/html/2610.41307v1/rq3_diagnostic_plane.svg)](https://arxiv.org/html/2610.41307v1/rq3_diagnostic_plane.svg)

*论文图 4。原论文 Figure 4:：“Injection dependence and reference drift provide complementary diagnostics.”。*

从图中可见，无防御点在右侧高依赖处，ERASE 点靠近左下理想点，Meta-SecAlign 偏上，GRPO 居中。纵轴为对数加底部零漂移条，基座零漂移显示在该条内。低漂移只表示保留参考，不单独证明能力保持，能力保持要看下一节领域外结果。

### 领域外推理和感知能力是否被连带损伤

第 3 个比较问题是，防御后通用推理和模态感知是否保持。条件是同一测试集，准确率平均取 6 个基准的均值，词错率取两个子集均值。下表给出 3B 按训练模态分组的平均数。

| 训练模态加方法 | 平均准确率越高越好 | 平均词错率越低越好 |
| --- | --- | --- |
| 基座 | 0.5849 | 0.0790 |
| 音频训练 ERASE | 0.5776 | 0.0881 |
| 图像训练 ERASE | 0.5803 | 0.0820 |
| 视频训练 ERASE | 0.5820 | 0.0887 |
| 音频训练 ARGUS | 0.1277 | 0.7401 |

这 1 对比说明，ERASE 3 组平均准确率都在基座 1 个百分点以内，词错率增幅也在 1 个百分点以内。相比 SecOPD，ERASE 音频视频平均更高，图像相近。Meta-SecAlign 领域外平均更高词错率更低，但在多模态被攻击任务上不如 ERASE。ARGUS 领域外极低主要来自后过滤拒绝，在 GSM8K 上图像和音频变体分别拒绝 82.9% 和 96.0%，说明其过滤在基准外不迁移。限制是这些是自动指标均值，不等于人工评价，且 MSVD-QA 抽样计分只宜表内比较。

### 擦除参考和全分布教师优先是否必要

消融要回答两个机制问题。第一，原位擦除参考是否比直接用干净媒体更好。第二，教师优先的全分布匹配是否比只学采样词或反向 KL 更好。条件是固定目标和训练预算，只换参考或监督形式。

| 参考构造 | 被攻击用户准确率越高越好 | 领域外平均越高越好 | 词错率越低越好 |
| --- | --- | --- | --- |
| 音频擦除视图 | 0.601 | 0.578 | 0.088 |
| 音频干净视图 | 0.610 | 0.554 | 0.221 |
| 图像擦除视图 | 0.541 | 0.580 | 0.082 |
| 图像干净视图 | 0.526 | 0.573 | 0.097 |

这 1 对比说明两种参考都能让攻击准确率归零，但音频上擦除参考把领域外平均从 0.5535 提升到 0.5776，词错率从 0.2208 降到 0.0881，被攻击准确率低 0.9 个百分点。图像上擦除参考被攻击准确率高 1.5 个百分点，词错率低 1.48 个百分点。支持原位保留时长和版式的设计，最大收益在音频的结构保持上。

监督消融在 3B 上比较 3 种形式。教师优先全分布在音频被攻击准确率 0.601、图像 0.541，为最高，三者攻击准确率都是零。只用采样词的差值和反向 KL 虽然也挡住攻击，但任务准确率更低。这支持保留任务备选项需要全分布覆盖，而不仅是压住采样词。未报告的是训练计算量差异，监督形式的代价比较仍缺证据。

### 哪些情况本文没有验证

论文明确两个局限。第一，训练参考假设注入区域可与良性内容分离。如果注入与任务内容重叠或混合，擦除会连带删掉有用信息，方法前提不再成立。第二，没有评估针对防御的自适应攻击。攻击在构造时一次写死，不随防御调整，所有方法评同一组注入，因此结论只在该非自适应条件下成立。

多样化指令测试扩展了指令种类，用 75 条公开指令替换原随机字符串测试，保留原良性问题和插入位置。ERASE 在 3B 多样化测试被攻击准确率图像 0.515、音频 0.599、视频 0.378，与无防御干净水平基本持平，攻击准确率 0.000 到 0.002。但类别图显示 7B 在语言翻译和表情替换等少数类别仍有可见落差，且高任务准确率本身不证明拒绝攻击，因为回答可能同时包含正确答案和注入要求的附加内容。攻击跟随需单独用模型加人工核查的语义判断。

案例部分展示长尾细节而非总体成功率。例如图像最大与最高动物的区分、熊猫最大体重 180 公斤的保留、音频车辆存在和脚步声的识别，ARGUS 或 SecOPD 在这些例子上挡住攻击字符串却答错任务或拒绝回答。案例不能外推为整体攻击成功率，复现时应以主表和多样化测试为准。

### 复现第一步需要准备什么

复现先准备基座和基准。基座为 Qwen2.5-Omni 3B 和 7B，良性数据为 VTQA、Clotho-AQA 和 MSR-VTT，注入训练用 Stanford-Alpaca，验证用 GLUE 八任务，测试用随机字符串模板和多样化 75 条指令。记录文件给出划分和数量，图像训练 10312 条，音频 8108 条，视频 18539 条，测试每模态 1000 条，多样化测试共享良性项。媒体构造需保留插入位置、字体渲染和语音合成细节，音频插入用 2 秒静音间隔，视频目标时长 5 秒，擦除时保持时间线不变。

训练用 LoRA，秩 128，在 2 乘 2 卡 A800 上进行。评估时可信文本模板按模态固定，攻击只通过媒体进入，不把攻击文本拼入可信提示。用户准确率按去空格小写后子串匹配计分，多样化攻击跟随用方法盲的文本模型加程序化检查和人工抽查。论文称代码在接收后公开，当前只能确认论文提到的第三方链接可用，作者资源尚未确认为可用，代码开源、权重下载和系统可运行是三件不同的事，不宜混为一谈。

### 什么时候值得尝试，还缺哪项验证

当防御目标是兼顾阻断注入和保留媒体任务信息，且训练时能拿到注入区域时，ERASE 值得尝试。它的核心是用原位空白替换构造教师视图，再让学生在被攻击输入的自采样轨迹上匹配教师全分布。证据支持在评测基准上攻击跟随接近零，被攻击任务准确率接近无防御干净水平，注入依赖下降两个数量级以上，领域外平均保持在基座附近。

代价和条件同样清楚。训练需要区域标注和额外蒸馏计算，推理虽无需擦除但仍是微调模型。多样化指令下个别类别仍有落差，领域外 ARGUS 对比受后过滤影响，ERASE 与 Meta-SecAlign 在领域外和领域内的优劣并不一致，选择取决于更看重哪一端。

还缺的验证是自适应攻击下的鲁棒性，以及注入与任务内容重叠时的行为。下一步应补充针对擦除假设的压力测试，报告训练与推理开销，并用人工评价核查自动指标在翻译和格式变换类攻击下的可靠性。只有补齐这些，才能判断该参考学习思路能否从基准走向部署。

<details>
<summary>📎 论文与评分元数据</summary>

排名：前50% | 文档类型：方法研究 | [arXiv 原文](https://arxiv.org/abs/2610.41307v1)

</details>

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。

- 评分规则：type-aware-v1

- 评分模型：muse-spark-1.3-contributor

- 评分请求协议：openai_responses

---

[← 返回 2026-11-02 语音/音乐/音频论文速递](/audio-paper-digest-blog/posts/2026-11-02/)
