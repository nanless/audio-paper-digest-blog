---
title: "Hear What Matters! Text-conditioned Selective Video-to-Audio Generation"
date: 2026-09-13
draft: false
description: "针对多声源视频中只生成文本指定声音的选择性视频到音频任务，SELVA 用文本调制的视频编码器加两阶段自监督混合训练实现目标声源分离生成，在 VGG-MONOAUDIO 上同时改善语义与时间对齐，但仍受训练数据噪声与细粒度文本理解限制。"
tags: ["知识蒸馏", "流匹配", "多模态学习", "音视频", "视频到声音生成"]
categories: ["cvpr-2026 论文"]
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_paper_id: "conference:cvpr:2026:conference-paper-id:Lee_Hear_What_Matters_Text-conditioned_Selective_Video-to-Audio_Generation_CVPR_2026_paper"
paper_digest_source_kind: conference
paper_digest_conference_id: "cvpr-2026"
paper_digest_conference_record_url: "https://openaccess.thecvf.com/content/CVPR2026/html/Lee_Hear_What_Matters_Text-conditioned_Selective_Video-to-Audio_Generation_CVPR_2026_paper.html"
paper_digest_conference_pdf_url: "https://openaccess.thecvf.com/content/CVPR2026/papers/Lee_Hear_What_Matters_Text-conditioned_Selective_Video-to-Audio_Generation_CVPR_2026_paper.pdf"
paper_digest_api_reader_contract: "beginner-researcher-v3"
paper_digest_api_reader_article_sha256: "997beb6e53b63ce6e7165f7e772782c8d4caf48e22abe34c49678e964bd81147"
paper_digest_api_reader_plan_sha256: "520cf0f411071bb9ad1b72af90fc50ffda95fb9cb7d9e0b3ee840405de970805"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings-v4"
paper_digest_api_reader_source_bindings_sha256: "d1f77cf8b189d6aeb8df9bc66cd3ef723bb7cd2398efcc4eb88a4302bf4ec88d"
paper_digest_api_reader_source_table_count: 2
paper_digest_api_reader_source_formula_count: 0
paper_digest_api_reader_structured_artifacts_sha256: "bd690060483fd379854020cb767ec4545a1f52d653906075ee5df530480d8e6a"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity-v1"
paper_digest_api_reader_author_identity_sha256: "4c051a763b679424d211fadf5f3205f9c7d822e121ce0fe333092201092c6c25"
paper_digest_api_reader_author_count: 3
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity-v1"
paper_digest_api_reader_resource_identity_sha256: "61f0ee40ca5f245aa40bfb6616393099b3bee8c47db3f56dcb8553b44a4a3e8c"
paper_digest_api_reader_resource_count: 2
paper_digest_api_reader_decision_projection: "api-reader-decision-projection-v2"
paper_digest_scoring_contract: "api-scoring-audit-v2"
paper_digest_taxonomy_contract: "paper-taxonomy-flat-tags-compat-v1"
paper_digest_taxonomy_selection_contract: "paper-taxonomy-selection-v1"
paper_digest_taxonomy_registry_version: "paper-taxonomy-v1"
paper_digest_taxonomy_registry_sha256: "15c82a567ce5a55dc1175684ed08b64c158558639d9c8fb822c9587ec32a8778"
paper_digest_taxonomy_concepts: [{"facet":"method","id":"method.distillation","label":"知识蒸馏"},{"facet":"method","id":"method.flow-matching","label":"流匹配"},{"facet":"method","id":"method.multimodal-learning","label":"多模态学习"},{"facet":"signal","id":"signal.audiovisual","label":"音视频"},{"facet":"task","id":"task.video-to-audio","label":"视频到声音生成"}]
paper_digest_primary_task: "视频到声音生成"
paper_digest_primary_method: "流匹配"
paper_digest_score: 6.9
paper_digest_rank_bucket: "前50%"
paper_digest_document_type: "方法研究"
paper_digest_conference_structure: replayable-pdf-layout-v1
---

# 📄 只听指定的那一个：文本如何从混合画面中挑出目标声音

> 英文题目：*Hear What Matters! Text-conditioned Selective Video-to-Audio Generation*

> 会议身份：`conference:cvpr:2026:conference-paper-id:Lee_Hear_What_Matters_Text-conditioned_Selective_Video-to-Audio_Generation_CVPR_2026_paper`


> ✅ 来源为官方会议 PDF；表格与 Figure 按原文证据绑定。PDF 公式以原页区域图片展示，未冒称作者原始 TeX。

> 会议来源：[官方记录](https://openaccess.thecvf.com/content/CVPR2026/html/Lee_Hear_What_Matters_Text-conditioned_Selective_Video-to-Audio_Generation_CVPR_2026_paper.html) · [官方 PDF](https://openaccess.thecvf.com/content/CVPR2026/papers/Lee_Hear_What_Matters_Text-conditioned_Selective_Video-to-Audio_Generation_CVPR_2026_paper.pdf)

标签：#知识蒸馏 #流匹配 #多模态学习 #音视频 #视频到声音生成

评分：**6.9/10** | 创新 1.6/2 | 技术严谨 1.2/1.5 | 实验充分 1.0/1.5 | 清晰度 0.8/1 | 影响力 1.0/1.5 | 开源 0.2/1.5 | 可复现 0.1/0.5 | 工程/实践 1.0/1.5

排名：前50% | 文档类型：方法研究

## 👥 作者与机构

- Junwon Lee：机构信息未能从会议 PDF 纯文本可靠映射
- Juhan Nam：机构信息未能从会议 PDF 纯文本可靠映射
- Jiyoung Lee：机构信息未能从会议 PDF 纯文本可靠映射

## 📌 核心摘要

文本条件选择性视频到音频生成的输入是多目标视频与指定目标声源的文本提示，输出是仅与文本意图对应的目标音频，难点在于无源分离真值时冻结视觉编码器输出的特征纠缠且易混入非目标声音。SELVA先在冻结的时空注意力之后插入文本引导的交叉注意力块，以文本特征为键值调制视频隐特征并辅以可学习补充标记抑制无关激活，输出意图聚焦的视频特征。随后该学生编码器以单源视频的教师特征为回归目标做蒸馏学习，使混合视频特征逼近目标单源表征，从而在表征层实现选择性强调与噪声抑制。最后聚焦视频特征与文本共同输入多模态扩散变换器生成器，仅微调视频分支投影与音频分支自适应层归一化并经条件流匹配去噪合成目标音频，第二阶段冻结编码器以解耦表征学习与合成。相对冻结视觉编码器直接生成整体声音的已有方法，该链条把文本当作显式选择器先净化视觉条件再生成，避免了语义对齐但时间漂移的捷径，对后期精细剪辑与混音更具实际意义。在VGG-MONOAUDIO类间基准下，MMAudio-S-16k的DeSync为0.802，低于VinTAGe的DeSync 1.292。该结论适用边界受限于人工横向拼接混合视频与短片段评估，对真实空间共存、严重遮挡及复杂属性文本控制尚未验证。原文未披露训练、推理或部署成本。

## 🔗 开源与复现资源

- 模型相关资源：<https://huggingface.co/jnwnlee/SelVA> — 暂时无法访问
- 演示资源：<https://jnwnlee.github.io/selva-demo/> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 输入是什么，输出是什么，哪些信息必须保留？

这篇论文研究的是多物体视频下的音频生成。输入是三元组：一段可能包含多个同时发声物体的视频，一个描述其中某一个目标声源的文本提示，以及在训练时用于构造监督的目标音频。输出是只对应文本指定声源的音频，而不是整段画面的混音。举例来说，同一个画面里同时有猫和狗，输入文本猫叫就只生成猫叫，输入狗吠就只生成狗吠。

必须保留的信息包括：文本到底指定了哪一个声源，目标物体在画面中的外观与运动时间线，以及生成声音与该时间线的同步关系。如果丢掉文本的指定作用，模型就会把所有可见声源混在一起；如果丢掉视频的时间线，生成的声音语义可能对但起止时刻错位。论文把这种能力定位为服务多媒体制作的需求，因为声音设计师习惯对语音、音乐、音效分轨处理、逐轨混音，而不是每次都重新合成整轨。演示页面当前可用，地址为官方演示链接。

模型权重链接本次未能确认可达，因此不能写已公开可下载，复现时应以论文描述与演示为基准。

### 同输入同目标的路线有哪些不同？

先说文本到音频。这类方法输入只有文本，常用预训练文本编码器抽特征，再用扩散、自回归或流匹配生成。文本能讲清是什么声音、什么音色，但论文指出它讲不清强度与谐波随时间如何变化。视频到音频正好补上时间同步，用画面的外观、位置和运动来决定何时响、响多久。已有视频到音频多依赖冻结的视觉编码器，文本只是辅助语义，例如处理遮挡或镜头运动带来的视觉歧义。

另一条路线是用分割模型先定位目标区域，再只对该区域生成声音。论文指出这类视觉提示路线有两个代价：一是需要大分割网络，计算开销大；二是对无法定位到离散边界的声音无能为力，例如雨声、风声，以及被遮挡或运动模糊的物体。还有一条相近的选择性生成路线是逐步生成多轨并用负向音频引导排除已生成声音，但它依赖预训练视频到音频第一步就分得干净。

SELVA 的区别在于只用文本提示指定目标，不依赖点、框或掩膜等空间提示，同时把文本从辅助条件改为直接调制视频特征的显式选择器。这不是在同条件下的类别混战，而是监督与运行阶段的差异：分割路线需要空间标注与额外大模型推理，选择性文本路线只需要在推理时给一句话。

### 选择性视频到音频任务如何定义？

论文把任务形式化为：给定视频与描述第 i 个声源的文本集合，目标是只生成对应音频。训练时真实世界视频的音频往往是多声源混合，没有逐声源分离真值，这就是学习难点。测试时论文自建了干净的单源评测集再人工拼成混合视频，使得目标音频已知，从而可以衡量是否选对、是否同步。理解这个任务要抓住两点。第一，视频提供何时响，文本提供响什么，两者缺一不可。

第二，评价必须同时看音频质量、语义对齐和时间对齐，因为只好听但选错对象没有意义，选对对象但时间错位也不符合视频到音频的感知要求。
为了建立直观印象，先看任务示意。同一段包含猫和狗的视频，换一句文本就应换一路输出，这种切换正是选择性的含义。

> **看图路径：** 1. 先看左侧输入视频中同时出现的猫与狗两个潜在声源；2. 再看顶部与底部分别输入不同文本时右侧生成波形与动物图标如何切换；3. 确认中间 SELVA 框内文本条件视频编码器与多模态音频生成器的分工位置

[![原论文 Figure 1：SELVA turns text prompts into precise selectors of sound sources within a video.](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/6a2a3d7a4e47/figure-1.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/6a2a3d7a4e47/figure-1.png)

*论文图 1。原论文 Figure 1：“SELVA turns text prompts into precise selectors of sound sources within a video.”。*

上图左侧是同时出现猫与狗的输入视频帧序列，中间是 SELVA 框，顶部输入狗吠文本时右侧输出狗的波形，底部输入猫叫文本时右侧输出猫的波形。图中蓝色与紫色箭头对应两种文本选择，说明文本不是简单描述整体画面，而是决定保留哪一路声音的开关。后文的方法就是要让这种开关真正作用到视频特征上，而不是只在生成器输入端拼接一句话。

**文本条件视频到音频生成 × 选择性生成：** 文本条件视频到音频生成负责把画面动态变成与时间对齐的声音，选择性生成负责只保留用户文本指定的那一路声源而压制其他可见声源，二者搭配的原因是传统视频到音频 1 次生成整轨混音无法分轨编辑，组合意义是把文本从辅助语义提示提升为直接调制视频特征的选择器。

### SELVA 的两大模块如何分工？

SELVA 由文本条件视频编码器和多模态条件选择性音频生成器组成。第一步，视频编码器读入混合视频与目标文本，输出意图聚焦的视频特征。第二步，音频生成器读入该视频特征、文本特征与噪声，经流匹配去噪得到目标音频潜变量，再经变分自编码器解码为波形。论文强调生成器沿用已有模型结构并只做小改，贡献不在新生成器，而在更好的条件表示。参数策略是高效微调：大部分参数从已有工作初始化并冻结，只训练少量层。

第一阶段训练编码器，第二阶段冻结编码器训练生成器中处理视频特征的投影与归一化相关层，避免两模块互相等待表示收敛带来的不稳定。
整体训练管线分为左右两半，左侧是蒸馏学习视频特征，右侧是条件生成音频，理解这个分阶段顺序是复述方法的关键。

> **看图路径：** 1. 先沿左侧学生与教师两条视频支路看混合输入与单源输入的对应关系；2. 再看右侧生成器中视频特征与文本特征分别进入投影与变换器块的位置；3. 确认火焰标记的可学习层与蓝色冻结层在两阶段中的分布

[![原论文 Figure 2：The overall training pipeline of SELVA.](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/6a2a3d7a4e47/figure-2.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/6a2a3d7a4e47/figure-2.png)

*论文图 2。原论文 Figure 2：“The overall training pipeline of SELVA.”。*

上图左侧显示学生编码器输入混合视频加目标文本，教师编码器只输入干净目标视频，两者输出的视频特征用均方误差拉近；右侧显示冻结后的学生编码器输出视频特征，与文本一起条件化视频到音频生成器，音频分支经条件流匹配学习去噪。图中火焰标记为可学习层，蓝色标记为冻结层，左侧文本分支上的补充令牌与投影层是第一阶段的关键，右侧生成器底部的条件投影与自适应归一化是第二阶段的关键。

### 文本如何改写视频特征并压制无关激活？

基础视频编码器是 Synchformer，它先做空间与时间注意力。SELVA 在冻结的时空注意力块之后插入一个文本引导的交叉注意力块。查询来自视频隐特征，键和值来自经投影的文本特征。这样做的目标是让视频特征携带文本描述的发声相关信息，而不是全局场景的混杂信息。之后再经可学习的空间注意力池化得到最终视频特征向量。

只做交叉注意力还不够。论文报告了一个现象：当狗在猫旁边叫时，模型可能因共现物体的运动动态而语义混淆，例如产生错误的叫声。注意力可视化显示某些与运动相关的语义补丁会成为高范数离群点，把注意力吸走。受视觉变换器中寄存器思想启发，论文提出可学习的补充令牌，记为[SUP]，直接拼在文本特征序列前面参与交叉注意力。

与其把额外令牌加到每一层视觉编码中增加全程计算，不如只加在文本侧，让模型有地方去吸收无关激活，同时强化与目标声源对应的区域。实现上每个输入文本前拼 5 个[SUP]，这个数量是消融后兼顾语义与时间对齐的折中。

**交叉注意力块 × 补充令牌：** 交叉注意力块负责以视频隐特征为查询、文本特征为键值来改写视觉表示，补充令牌负责插在文本序列前吸收与目标无关的高范数伪相关激活，二者搭配的原因是单纯交叉注意力仍会被共现物体的运动语义带偏，组合意义是让注意力更集中到目标声源区域并改善时间同步。

生成侧采用多模态扩散变换器。音频隐特征与文本特征在多模态块中拼接做自注意力，在单模态块中只对音频做自注意力，而视频特征经线性投影后通过自适应层归一化逐块调节隐状态，形式是先层归一化再按视频条件做缩放与平移。论文去掉了原基线中的 CLIP 特征分支，只保留目标视频特征与文本作为条件。推理时用欧拉求解器做 25 步线性采样，并用分类器无关引导增强条件，引导强度为 4.5，训练时以一定概率丢弃视频与文本特征以支持无条件分支，同时额外以更高概率丢弃文本以增强视觉保真。

**多模态扩散变换器 × 自适应层归一化：** 多模态扩散变换器负责把噪声经流匹配逐步变成音频潜变量并在块内联合建模文本与音频，自适应层归一化负责把文本调制后的视频特征投影为缩放和平移参数去调节每块隐状态，二者搭配的原因是生成器本身已有足够合成能力关键缺的是可选择的条件，组合意义是让意图聚焦的视频特征逐层控制生成而不必重设计生成器。

### 没有分离真值时如何构造监督并分阶段训练？

核心技巧是自主视频混合。每个小批量内以 0.75 的概率把两个随机视频按 Beta 分布采样的比例横向拼接，目标视频的混合比例被截断为大于 0.2，保证目标区域不会过小。其中一个视频的音频文本对被选为目标。这样模型必须从混合画面中区分目标视觉区域，没有显式分割监督也能学到跨模态定位。

**教师学生蒸馏 × 视频混合：** 教师学生蒸馏负责用只看干净单源视频的冻结教师提供目标视频特征作为回归信号，视频混合负责把目标视频与干扰视频横向拼接并只保留目标音频文本作为监督，二者搭配的原因是缺乏逐声源分离真值无法直接学选择，组合意义是在无人工分离标注下逼迫学生从混合画面中恢复出目标专属表示。

第一阶段是教师学生蒸馏。教师是预训练的 Synchformer，只看干净目标视频得到伪特征；学生看混合视频加目标文本，输出文本引导的视频特征，用二范数回归损失逼近教师特征。该阶段只更新学生的交叉注意力与空间注意力池化层。第二阶段冻结视频编码器，只微调生成器中显式处理视频特征的两个子模块：视频特征分支的初始投影层，以及音频潜变量分支中多模态与单模态变换器块的自适应层归一化参数。

优化目标是条件流匹配，从噪声分布出发学习指向目标音频潜变量的速度场。论文报告学生侧训练 19M 参数，生成器侧训练 22M 参数，各占各自模型总参数的 14%，属于参数高效微调。训练与推理的计算细节在原文附录中给出优化器设置，正文未报告具体硬件时长，因此不能承诺训练成本改善。分阶段的理由是若同时优化两个目标，编码器与生成器会互相依赖对方尚未收敛的表示，导致跨模态对应混乱，消融中联合训练确实出现语义与时间对齐下降。

### 用什么数据、基线和指标才能测选择性？

训练数据是 VGGSound，约 500 小时视频与 310 个独立标注，文本提示直接用其标注，训练集 179k 视频，测试集 15k，视频统一切为 8 秒片段，并留 2k 训练样本做验证。现有野外数据集多只有单轨混音与视频级标注，且常有录制噪声与画外音，不适合测选择。因此论文从与 VGGSound 测试集重叠的 UnAV-100 中筛选出 VGG-MONOAUDIO：要求单声源干净、发声物体清晰可见、文本标注与听觉事件精确匹配，最终得到 67 个干净单源视频，覆盖 39 类事件与 8 大类。

再把这些视频两两左右拼接成混合视频，取其中一路的音频文本为目标，共生成 1071 个混合对，其中 560 个跨类别、511 个同类别。同类别更难，因为干扰视频与目标语义相近，客观指标容易高估，需要人工听感补充。
下表把数据规模与评测对构造放在一起，便于核对划分与聚合对象，避免把不同阶段的数字混为一谈。表前的问题是：训练与评测各用了多少视频，评测混合对如何划分跨类与同类。指标方向在表后结合主结果说明。

| 数据集 | 训练视频数 | 测试视频数 | 精选单源视频数 | 混合评测对总数 |
| --- | --- | --- | --- | --- |
| VGGSound 训练测试划分 | 179k | 15k | 67 | 1071 |
| VGG-MONOAUDIO 混合对 | 179k | 15k | 67 | 560 跨类 511 同类 |

表后解释：训练量大但噪声多，评测集小但干净，1071 对中跨类 560 对考验语义选择，同类 511 对考验细粒度区分。未胜出项在主结果中可见：跨类相对好测，同类因干扰与目标相似，客观分普遍虚高，这正是论文还要做 26 人主观评测的原因。
基线包括 4 种可运行策略：ReWaS、VinTAGe、MMAudio-S-16k，以及用视频物体分割模型先做掩膜再送 MMAudio 的组合。所有方法在评测时都使用对应目标视频的文本提示，保证条件一致。

指标分 3 组：音频质量用 FAD 越低越好、KAD 越低越好、IS 越高越好；语义对齐用 CLAP 越高越好、ImageBind 越高越好、KL 越低越好；时间对齐用 DeSync 预测的秒级偏移越低越好，其中 DeSync 是消融的主要参考。

### 主结果支持了什么，又在何处需要人工听感？

客观结果显示 SELVA 在音频质量、语义对齐和时间对齐上总体优于基线，尤其在音频与目标视频的语义和时间对齐上最好。忽视文本的 MMAudio 在 CLAP 上弱于 SELVA，忽视视频的文本强模型在 DeSync 上差，说明文本调制的视频编码器有助于兼顾两方面。分割加生成的组合语义尚可但时间同步差，论文归因于分割难以处理快速运动、运动模糊与雨滴等模糊边界。
真实世界例子进一步展示空间解耦与时间解耦。同一画面中汽车经过与人跑步可以按文本分别生成，烟花爆炸与人声交织也可以按文本分别生成且包络不同，说明模型捕捉了用户意图焦点。

> **看图路径：** 1. 先看顶部连续视频帧确认空间共现与时间交织的复杂场景；2. 再对比上下两条频谱在同一时间轴上白色虚线包络的起伏差异；3. 确认更换文本提示后同一视频能否产生不同事件的声音结构

[![原论文 Figure 4：Examples of selective generation with real-world videos.](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/6a2a3d7a4e47/figure-4.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/6a2a3d7a4e47/figure-4.png)

*论文图 4。原论文 Figure 4：“Examples of selective generation with real-world videos. The white dotted curve is the root-mean-squared audio amplitude.”。*

上图左右各为一个真实视频的连续帧与两路生成结果的频谱，白色虚线为均方根幅度包络。左侧同一赛车与跑步画面在文本为汽车经过与人跑步时频谱结构与包络峰位不同，右侧同一烟花与人脸画面在文本为烟花爆炸与人说话时能量分布不同。这支持选择性不是简单换标签，而是生成了与事件时间线匹配的声音。
人工听感用 26 名参与者对 16 个视频评总体质量、文本音频对齐与视听时间同步，采用 5 点量表并报告均值与 95% 置信区间。

结果与客观趋势一致，SELVA 在三项上都高于 MMAudio 与分割基线，总体质量接近真实音频。一个值得注意的反例是分割基线的 CLAP 客观分与 SELVA 接近，但人工文本音频对齐明显更低，论文指出人耳对与文本松散对齐的画外噪声更敏感，不能把自动语义指标当成人评。
下表整理可复述的训练推理配置与一个人工评分子项，便于对照可运行策略的代价与收益。表前的问题是：高效微调到底动了多少参数，混合与采样条件是什么，人工评中差距最大的项是多少。

| 模块 | 可训参数量 | 占各自模型比例 | 训练混合与丢弃条件 | 推理与人工评关键数 |
| --- | --- | --- | --- | --- |
| 视频编码器学生分支 | 19M | 14% | 混合概率 0.75 目标占比大于 0.2 | 补充令牌数 5 |
| 音频生成器条件分支 | 22M | 14% | 文本丢弃概率 0.5 视频文本丢弃 0.1 | 采样 25 步引导强度 4.5 |
| 人工文本音频对齐 | 19M | 14% | 混合概率 0.75 目标占比大于 0.2 | 分割基线 3.78 对比 SELVA4.53 |

表后解释：只动 14% 参数就实现选择，代价是仍需 2 阶段训练与混合构造；推理 25 步与 4.5 引导强度是复现必须保留的条件。

人工评中分割基线在文本音频对齐上落后约 0.75 分，说明客观语义分相近时仍有可闻差距，未评测的边界是更长视频与更多声源同时存在时的稳定性。

### 拿掉每个组件后哪项指标先变差？

消融 1 次去掉一个训练组件：视频编码器微调、生成器微调、补充令牌、2 阶段训练。只微调生成器而冻结编码器时，音频质量与语义略有提升但时间同步明显变差，论文解释为生成器走了捷径，生成与文本对但与画面事件漂移的声音。去掉生成器微调则总体音频质量显著下降，说明在混合样本上适配生成器是必要的。去掉补充令牌时时间对齐恶化最明显，而音频质量与语义牺牲很小，支持补充令牌通过净化文本无关的空间注意力来帮助选择。

把 2 阶段改为联合训练时语义与时间对齐都下降，同类集上甚至差于冻结基线，并出现用文本对齐的声音替换非目标事件的现象。补充令牌数量的折中在 5 处取得最好时间同步且语义相当，太少则条件信息不足，太多则冗余过拟合，这与前缀调参的经验一致。
理解补充令牌的作用要直接看注意力是否从干扰区移开。

> **看图路径：** 1. 对比每组左右两格无补充令牌与有补充令牌时的高亮区域变化；2. 观察目标侧与干扰侧中白色椭圆圈出的伪激活是否被压制；3. 结合子标题的目标提示词判断注意力是否回到目标物体

[![原论文 Figure 3：Attention visualization for \[eos\] token over auto- mixed frame in the last block without (left) /…](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/6a2a3d7a4e47/figure-3.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/6a2a3d7a4e47/figure-3.png)

*论文图 3。原论文 Figure 3：“Attention visualization for [eos] token over auto- mixed frame in the last block without (left) / with (right) [SUP] tokens.”。*

上图每组左右对比无补充令牌与有补充令牌时结束符令牌在混合帧上的注意力，子标题为目标提示词，白色椭圆标出干扰侧的伪激活。有补充令牌后目标侧的高亮更集中，干扰侧火车、人脸、乐器与滑板场景中的误高亮被压制。这支持补充令牌缓解了虚假跨模态相关的判断，但像素不能读出精确数值，数值结论仍以 DeSync 与 CLAP 表格为准。

**语义对齐 × 时间对齐：** 语义对齐负责衡量生成声音与文本描述及目标类别是否一致，时间对齐负责衡量声音起止与画面运动偏移是否同步，二者搭配的原因是只对文本不对画面会产生时间漂移的声音替换，只对画面不对文本会混入非目标声音，组合意义是选择性生成必须同时通过两类指标与人工听感检验。

### 还有哪些情况论文明确说做不好？

论文列出 3 条未来工作。第一，训练数据 VGGSound 本身噪声大，更严格的过滤或改进自动混合可能提升性能，这意味着当前结果受数据噪声上限约束。第二，文本标签多为名词加动词的简单组合，缺乏细节描述，模型对细粒度跨模态区分与属性控制能力可增强，例如区分男性歌唱与男性打嗝，或控制狗吠得更凶。第三，即使大幅缓解声音替换，残留失败仍存在，尤其当视频编码器不能持续跟踪目标运动变化时。

附录还给出原 VGGSound 测试集结果，但论文明确那不是核心评测，解读时不应把混音整轨生成的分数当成选择性任务的证据。此外，论文未测量误判率、延迟与完整训练推理开销，总体趋势不等于每组每步都成立，不能承诺这些量得到改善。

### 复现时先做什么，哪些条件必须照抄？

先准备数据与评测构造。训练用 VGGSound 官方划分并切 8 秒片段，评测若要复现选择性必须按 3 条标准重建干净单源集再左右拼接，不能直接用原始混音测试集代替。若只想验证方法相对收益，可先用论文已给的 1071 对划分逻辑检查跨类 560 与同类 511 的比例是否一致。
再按 2 阶段执行。第一阶段冻结教师 Synchformer 与学生主干，只训练交叉注意力、投影与空间池化，混合概率 0.75 且目标占比大于 0.2，每条文本前拼 5 个可学习补充令牌。

第二阶段冻结视频编码器，只训练视频分支初始投影与变换器块的自适应层归一化，优化条件流匹配。推理照抄欧拉求解器 25 步与 4.5 引导强度，以及训练时的特征丢弃概率，否则同步与语义分数不可比。基线要保留实际可运行的文本条件视频到音频与分割加生成组合，不能用事后最优或真实音频代替可部署收益。代码与权重方面，演示页面本次确认可用，权重链接本次未能确认可达，因此应先以论文与演示核对行为，再补权重可达性验证。

### 何时值得尝试这种文本选择路线？

当你的视频里多个物体同时可发声，且你需要分轨可编辑而不是 1 次混音，就值得尝试把文本当选择器而不是当辅助描述。SELVA 的适用条件是目标能用一句话讲清，且目标在画面中有可跟踪的外观或运动；若目标是弥散性环境声，分割路线本就难以定位，文本选择更有优势。若目标描述需要细粒度属性或长时跟踪，论文已提示这是未验证的边界，需要补验证。

复述方法的最小闭环是：混合拼接构造监督，蒸馏得到意图聚焦的视频特征，再用该特征经自适应归一化条件化生成器。记住 3 个易错点：不同指标的差值不能混放比较，自动语义分不能代替人工听感，同类干扰下的高分可能是虚高。补做的验证应包括更干净训练数据的对比、补充令牌数的完整曲线，以及多声源同时存在时的分轨稳定性。

## 📐 原文公式与排版

以下展示论文原页中的数学表达区域，保留原始上下标、分式和符号排版。区域序号仅用于本文导航，不是论文公式编号。

[![原文数学表达区域 1，PDF 第 4 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/eeeae32a8eea/figure-1.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/eeeae32a8eea/figure-1.png)

区域 1 · [查看论文原页](https://openaccess.thecvf.com/content/CVPR2026/papers/Lee_Hear_What_Matters_Text-conditioned_Selective_Video-to-Audio_Generation_CVPR_2026_paper.pdf#page=4)

[![原文数学表达区域 2，PDF 第 4 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/eeeae32a8eea/figure-2.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/eeeae32a8eea/figure-2.png)

区域 2 · [查看论文原页](https://openaccess.thecvf.com/content/CVPR2026/papers/Lee_Hear_What_Matters_Text-conditioned_Selective_Video-to-Audio_Generation_CVPR_2026_paper.pdf#page=4)

[![原文数学表达区域 3，PDF 第 5 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/eeeae32a8eea/figure-3.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/eeeae32a8eea/figure-3.png)

区域 3 · [查看论文原页](https://openaccess.thecvf.com/content/CVPR2026/papers/Lee_Hear_What_Matters_Text-conditioned_Selective_Video-to-Audio_Generation_CVPR_2026_paper.pdf#page=5)

另有 12 个候选区域因边界不明确或图片数量、尺寸限制未展开；请[查看完整论文](https://openaccess.thecvf.com/content/CVPR2026/papers/Lee_Hear_What_Matters_Text-conditioned_Selective_Video-to-Audio_Generation_CVPR_2026_paper.pdf)中的原始排版。

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。
- 评分规则：type-aware-v1
- 评分模型：muse-spark-1.3-contributor
- 评分请求协议：openai_responses

---

[← 返回 cvpr-2026 论文汇总](/posts/conference-cvpr-2026/)
