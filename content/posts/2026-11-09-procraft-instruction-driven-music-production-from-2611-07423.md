---
title: "ProCraft: Instruction-Driven Music Production from Free-Form Text"
date: 2026-11-09
draft: false
tags: [音频编辑, 自回归模型, 音乐, 神经编解码与离散单元]
categories: [论文速递]
description: "ProCraft 把 30 秒混音和自由文本放在同一个自回归序列里生成编辑后音频，用常驻编辑头保持指令可达、用中间层对齐保留未改声部，并靠即时合成的复合编辑对训练，在复合指令上超过四个自由文本编辑器，但在大动态分离指标上仍落后于专用分离模型。"
hiddenInHomeList: true
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_arxiv_id: "2611.07423"
paper_digest_workbench_contract: "researcher-workbench"
paper_digest_workbench_schema_fingerprint: "1f09b594c317cc38e934de27a5b0e8ceb4baa50ef79bd4f8683dd9adea720fe7"
paper_digest_reader_title: "一句话指令改整首混音：ProCraft 怎么做到的"
paper_digest_original_title: "ProCraft: Instruction-Driven Music Production from Free-Form Text"
paper_digest_arxiv_version: 1
paper_digest_arxiv_versioned_id: "2611.07423v1"
paper_digest_arxiv_abs_url: "https://arxiv.org/abs/2611.07423v1"
paper_digest_arxiv_pdf_url: "https://arxiv.org/pdf/2611.07423v1.pdf"
paper_digest_primary_task: "音频编辑"
paper_digest_tags_contract: "paper-tag-flat-tags"
paper_digest_tags_schema_fingerprint: "27e36280a4b8d3df62ebe54d3ab037920f4d69feb2b554163f01bbae2caf4338"
paper_digest_tags_selection_contract: "paper-tag-selection"
paper_digest_tags_registry_version: "paper-tag-catalog"
paper_digest_tags_registry_sha256: "9673bc0122e1905a5dcfd8b223675400cc2fa4c36095bc0e5f817edf99a0ec5c"
paper_digest_tags_concepts: [{"facet":"task","id":"task.audio-editing","label":"音频编辑"},{"facet":"method","id":"method.autoregressive","label":"自回归模型"},{"facet":"signal","id":"signal.music","label":"音乐"},{"facet":"method","id":"method.neural-codec","label":"神经编解码与离散单元"}]
paper_digest_primary_method: "自回归模型"
paper_digest_score: 7.2
paper_digest_rank_bucket: "前50%"
paper_digest_document_type: "模型报告"
paper_digest_one_sentence: "ProCraft 把 30 秒混音和自由文本放在同一个自回归序列里生成编辑后音频，用常驻编辑头保持指令可达、用中间层对齐保留未改声部，并靠即时合成的复合编辑对训练，在复合指令上超过四个自由文本编辑器，但在大动态分离指标上仍落后于专用分离模型。"
paper_digest_authors: [{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Yuan-Chiao Cheng"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Yi-Hsuan Yang"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Vincent K. M. Cheung"}]
paper_digest_abstract_sha256: "c0c827ef6ae9d85f4435994aea96f851b780bc98f01b6c76c576526bc7d2e54b"
paper_digest_sidecars: {"citation.bib":{"sha256":"81749c381a66ecb02973bd5e21068f9fb0fd10f627370fae9ce5c7d2468d74ab","url":"/audio-paper-digest-blog/client/papers/2026-11-09/2611-07423/citation.bib"},"citation.json":{"sha256":"0f73f763688bd8ad5ebf2f957c040a7e79c590aa424db923793facb2c634437b","url":"/audio-paper-digest-blog/client/papers/2026-11-09/2611-07423/citation.json"},"citation.ris":{"sha256":"8dc1cae0efc50afea0d0991b5434528a4fd5f0b82ce24a96279deb78ac5f96dd","url":"/audio-paper-digest-blog/client/papers/2026-11-09/2611-07423/citation.ris"},"rethink-context.json":{"contract":"paper-research-context","schemaFingerprint":"5d4e79f7d3ee65b39ccb38281548bf20a1b2041ab7a27625eaf97ab9909a8383","sha256":"99b2342cc633e054eeebc87cbd3c944a5a5a91adbf8d05b7b275866c8268bad2","url":"/audio-paper-digest-blog/client/papers/2026-11-09/2611-07423/rethink-context.json"}}
paper_digest_api_reader_contract: "beginner-researcher"
paper_digest_api_reader_schema_fingerprint: "cd8baf5b8bda3a49eec64f6005931af63de4e9a13148cba5f354c661ca6e9df2"
paper_digest_api_reader_article_sha256: "f60bc9ec8f33511f5d3c3918d17d7f1407282731a31a5568ae9c9a39922ff460"
paper_digest_api_reader_plan_sha256: "3b9591cce7613f37c6260d29a10776c093bbed7fbca2ef6c011871f22163d2ea"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings"
paper_digest_api_reader_source_binding_schema_fingerprint: "d2a2607a6e561909473022eb43f56332ee357af8568566a095c29083ffdec9cc"
paper_digest_api_reader_source_bindings_sha256: "454256fc6be6b5f10997a1f8eaa8d5c5a7bb1e700278e16b7e2aac1cc1d12105"
paper_digest_api_reader_source_table_count: 4
paper_digest_api_reader_source_formula_count: 3
paper_digest_api_reader_structured_artifacts_sha256: "2909e11ea1e289064212fd6e8c21c835c416f84b00dddc71136dbfdda6519970"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity"
paper_digest_api_reader_author_identity_schema_fingerprint: "1e3fd3a9a56c9a5bf52df8df5022690b9a3fa92e83e934f295af87c0e258ed2f"
paper_digest_api_reader_author_identity_sha256: "04536928fc9aa5b3419e6832ad2c6a397c26eb3a2f4ba97ab4e9fed766c2d170"
paper_digest_api_reader_author_count: 3
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity"
paper_digest_api_reader_resource_identity_schema_fingerprint: "33b0be17118be61f39b85ce690c8da17e91f2864bb65e85284f60c40067328e0"
paper_digest_api_reader_resource_identity_sha256: "051096d0c7c85dbe17a45394451eba58c2e3a823f07ed09710117118da2e43c1"
paper_digest_api_reader_resource_count: 1
paper_digest_api_reader_figure_persistence: "ephemeral-no-persisted-figure-assets-v1"
paper_digest_api_reader_decision_projection: "api-reader-decision-projection"
paper_digest_api_reader_decision_projection_schema_fingerprint: "e56feb5ab75c8710904916b898f73dab9bb18bdf65bb60b7ed2edf7f99cea860"
---

# 📄 一句话指令改整首混音：ProCraft 怎么做到的

> 英文题目：*[ProCraft: Instruction-Driven Music Production from Free-Form Text](https://arxiv.org/abs/2611.07423v1)*

<!--paper-tag-hierarchy-v1:start-->

**研究分类**

- **研究任务**：[音频编辑](/audio-paper-digest-blog/papers/?concept=task.audio-editing)
- **研究方法**：[生成模型](/audio-paper-digest-blog/papers/?concept=method.generative) → [自回归模型](/audio-paper-digest-blog/papers/?concept=method.autoregressive)；[向量量化](/audio-paper-digest-blog/papers/?concept=method.vector-quantization) → [神经编解码与离散单元](/audio-paper-digest-blog/papers/?concept=method.neural-codec)
- **信号**：[音乐](/audio-paper-digest-blog/papers/?concept=signal.music)

<!--paper-tag-hierarchy-v1:end-->

> 评分：**7.2/10** | 创新 1.5/2 | 技术严谨 1.2/1.5 | 实验充分 1.2/1.5 | 清晰度 0.8/1 | 影响力 1/1.5 | 开源 0.2/1.5 | 可复现 0.3/0.5 | 工程/实践 1/1.5


## 👥 作者与机构

- Yuan-Chiao Cheng：机构信息未能在本次解析中与作者逐人可靠绑定
- Yi-Hsuan Yang：机构信息未能在本次解析中与作者逐人可靠绑定
- Vincent K. M. Cheung：机构信息未能在本次解析中与作者逐人可靠绑定

## 📌 核心摘要

音乐制作常要求一次说清多个改动，例如去掉贝斯并让钢琴更亮更宽，而已有编辑器多只支持单操作、短片段或固定模板指令。ProCraft把30 s混音与自由文本指令读入同一个自回归编解码语言模型，直接生成编辑后音频，覆盖去除、提取、伴奏生成、独奏改编、乐器转换、去噪与效果七类任务。该模型先把指令词元、源音频的WavTokenizer编码与32个可学习查询拼成同一输入序列，使每个输出编码都能同时注意到指令与音频，这32个查询汇总本次编辑请求，再经门控交叉注意力送入每一解码层以约束生成紧贴指令。随后它把第4层隐状态向MERT音乐表征、音高与乐器活动和StemFX效果表征对齐，以保留未指定的声部，而为解决复合指令缺乏三元组的问题，论文用工具调用语言模型现场写指令并执行效果链，合成兼含音轨操作与效果变化的训练对供上述模型训练。在Slakh复合去除任务上ProCraft的SI-SDR为-7.39 dB，高于次优自由文本编辑器的-24.88 dB，16名听众在MoisesDB去噪上也给它最高分。结论适用于需新增源中没有材料的伴奏、改编与转换等创意任务，以及仅在Slakh合成数据训练后向MoisesDB真实录音的跨域测试；在有确定目标的去除、提取与去噪上仍落后于专用分离系统，对真值做WavTokenizer编解码仅得+1.05 dB，说明11.3 dB差距中约7.3 dB来自0.9 kbps单码本编解码器而非模型本身。推理30 s片段在单卡上批量为1时约需38 s、不含超分，含超分约40 s。

## 🔗 开源与复现资源

- 第三方资源：<https://barry-mir.github.io/procraft-demo/> — 链接可访问（HTTP 200）

可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 音乐制作真正要改的是什么

音乐制作很少只做一件事。录好的混音里同时有贝斯、鼓、吉他、键盘和人声等多个声部，制作人可能想拿掉贝斯、单独留下吉他、给缺失的钢琴补一段伴奏、把整曲改成钢琴独奏、把吉他音色换成贝斯、去掉混入的雨声或狗叫，再整体加一点混响和饱和。输入是 30 秒的源混音加上一句自由写的中文或英文要求，输出是改好后的 30 秒混音。难点在于两点必须同时满足：指令点名的部分要真改了，没有点名的部分要原样保留。只看输出和输入像不像，会奖励什么都不改的模型。

只看输出和指令文本像不像，又可能奖励改错声部但语义沾边的模型。论文把这两方面拆开评价，编辑是否发生和保留是否完整分开测量。

已有工具大多 1 次只做一种操作。声源分离专做移除和提取，伴奏模型专做给定其他声部生成缺失声部，翻奏和音色转换各有专用模型，效果器参数预测只输出参数不直接生成音频。最近的文本编辑器要么只支持几个乐器和几秒短片段，要么 1 次只能做一个操作。真实工作流常把轨道级操作和音色效果写在一句话里，例如去掉贝斯同时让钢琴更亮更宽。ProCraft 要解决的就是从这种复合自由文本直接端到端生成编辑后音频，同时覆盖 7 种操作和 8 个乐器家族。

### 已有路线为什么凑不成复合编辑

一条路线是任务专用模型。分离、伴奏、翻奏、音色转换和效果处理各自精度高，但每个模型只认固定输入输出，不读自由文本，也不知道 1 次要做两件事。另一条路线是文本引导编辑。Instruct-MusicGen 用固定模板做移除、提取和伴奏，Audio-Omni 能读自由文本但在论文的测试里 stem 级移除很弱，LLM2Fx-Tools 能写多步效果链但只预测效果器参数而不生成音频，ZETA、DDIM 反演和 SteerMusic 这类零样本图像式编辑器靠目标描述改音频，在音乐多声部上容易改错对象或返回整首混音。

语音领域的 SpeechX 把文本查询和音频读成 1 个流做去噪和目标说话人提取，给了统一序列的启示，但音乐更难：同时有多个并发声源，创意编辑要服从和声节奏而不只是删减，30 秒对应的码序列很长，指令出现在开头，到序列尾部时影响容易衰减。ProCraft 选择从音乐生成模型 InspireMusic 出发，保留其文本加音频码统一建模的能力，再补上长序列指令可达性和声部结构保留两块机制，并用合成数据解决复合编辑三元组在现实中不存在的问题。

### 任务输入输出和七种操作如何定义

形式化上记源混音为 x，指令为 c，模型为 f，目标是生成编辑后混音。编码器把波形变成离散码，源码和目标码分别记作源音频码和目标音频码，指令变成词元。模型对目标码自回归建模，训练用教师强制，推理逐码采样再解码成波形。这个形式对 7 种操作共享：移除、提取、伴奏生成、单乐器翻奏、乐器转换、去噪和音频效果。前两者和去噪、效果有确定性目标，后三者中新内容没有唯一正确答案。

8 个乐器家族是贝斯、鼓、吉他、钢琴、风琴、铜管、簧片和弦乐合奏。移除是去掉指定声部，提取是只留指定声部，去噪是去掉混入的环境声并返回干净混音，效果是按指令对分轨加效果链。伴奏是源里 withheld 某乐器、目标只含新声部，翻奏是把全曲缩编到单个宽音乐器上，乐器转换是同一 MIDI 用新音色重渲染、只变音色不变音高。评价时每种操作在合成域 Slakh 和真实录音域 MoisesDB 各测 150 个 30 秒样本，ProCraft 只在 Slakh 上训练，MoisesDB 作为域外测试。

### 整体流程如何把指令和源音频拼在一起

ProCraft 是 0.5B 参数的自回归编解码语言模型，骨干从 InspireMusic 语言模型初始化，结构基于 Qwen-2，隐藏维度 896，共 24 层。音频用冻结的 WavTokenizer 编码，24 kHz 单声道，每秒 75 帧，单码本 4096 词，30 秒对应 2250 个码。指令用骨干自带分词器，最多 192 个文本词元。输出头预测音频码加一个序列结束符。

序列排布是理解方法的关键。骨干把指令词元、源码、32 个可学习查询向量、目标码排成一个因果序列。因为是因果注意力，源码编码时已经看到指令，查询能同时看到指令和源音频以概括本次编辑，之后每个目标码都能 attend 到全部前缀。推理时先编码前缀 1 次，再逐码生成目标码，WavTokenizer 解码成波形后经冻结的流匹配超分和 HifiCodec 声码器上采样到 48 kHz 单声道。

下图展示了从输入到输出的主路径、编辑头的回注位置和中间层对齐的引出位置，读图时先分清灰色数据、蓝色模型组件和橙色新增机制。

> **看图路径：** 1. 沿底部输入到顶部输出看主路径：指令词元、源码、可学习查询如何进入语言模型；2. 看橙色编辑头如何从查询引出并回注到每一层；3. 看左侧第 4 层引出的四路对齐投影分别指向什么目标

[![原论文 Figure 1：Architecture of ProCraft.](https://arxiv.org/html/2611.07423v1/fig_architecture.svg)](https://arxiv.org/html/2611.07423v1/fig_architecture.svg)

*论文图 1。原论文 Figure 1:：“Architecture of ProCraft. The instruction, source codes, and K learnable queries precede the target codes in a single causal sequence.”。*

图中底部是输入的指令文本和源音频波形，中部蓝色长条是音乐编解码语言模型，上方是输出码和解码器。橙色部分是新增的 32 个查询形成的编辑头，经门控交叉注意力注入每一层，以及从第 4 层引出的 4 个对齐投影。冻结模块标有星号。这一排布让长序列生成时指令信息有两条路可达：自注意力看到的完整前缀，以及每层直接看到的编辑头。

自回归分解写成对目标码逐个相乘的形式，条件是源码和指令词元。

\[p_{\theta}\big(a^{\mathrm{tgt}}\mid t,a^{\mathrm{src}}\big)=\prod_{i=1}^{T}p_{\theta}\big(a^{\mathrm{tgt}}_{i}\mid a^{\mathrm{tgt}}_{\lt i},\,t,\,a^{\mathrm{src}}\big).\]

其中目标码序列的第 i 个码依赖于之前所有目标码、指令和源码。序列拼接形式则把 4 段按顺序连起来。

\[s=\big[\,t\,;\;a^{\mathrm{src}}\,;\;q\,;\;a^{\mathrm{tgt}}\,\big].\]

这里 t 是指令词元，源码是源混音的编码，q 是 32 个可学习查询，目标码是待生成的编辑结果。训练时用教师强制处理目标段，推理时逐码采样直到结束符或达到源码长度。

**源混合 × 目标音频码 × 指令词元：** 源混合是输入的 30 秒立体声或单声道混音，目标音频码是希望模型输出的编辑后混音的离散编码，指令词元是自由文本指令的分词结果；三者按指令、源码、查询、目标码排成一个因果序列，让每个目标码生成时都能看到指令和源音频，统一了移除、提取、伴奏生成等不同任务的输入输出形式。

### 编辑头和门控交叉注意力解决长序列遗忘吗

指令只在序列开头，随着生成推进，其在因果上下文中的占比越来越小，对尾部目标码的影响可能减弱。ProCraft 用 32 个跨样本共享的可学习查询来汇总本次编辑。因为查询 attend 指令和源音频，它们的最终层隐状态随输入变化，构成编辑头，维度是查询数乘隐藏维度，可以理解为本次编辑的向量摘要。与 BLIP-2 用查询替代图像词元不同，这里查询是附加在完整源音频之外，源音频仍完整保留在上下文中。

每个解码层在自注意力残差之后、MLP 之前增加一路交叉注意力，查询是目标位置状态，键值来自编辑头。输出经 tanh 门缩放，门参数初始化为零，因此微调起点就是预训练骨干，再慢慢学会依赖新通路。共享的记忆适配器先对编辑头做归一化和线性投影，每个层有自己的门系数。

关键是编辑头来自最后一层却要用在每一层，不能 1 次前向同时算出，因此训练用两次前向：第 1 次编码前缀得到编辑头和键值缓存，第二次用教师强制处理目标码，同时经自注意力看缓存、经交叉注意力看编辑头，梯度能回传到查询和前缀。由于每个词元只处理 1 次，额外代价小，且与推理时前缀编码 1 次、编辑头固定再采样的流程一致。

**编辑头 × 门控交叉注意力：** 编辑头是 32 个可学习查询在看过指令和源音频后得到的最终层表示，概括了本次要改哪个声部和怎么改；门控交叉注意力是每个解码层新增的通路，让目标位置直接 attend 编辑头，并用 tanh 门从零开始逐步引入该通路，从而在长达 2250 码的生成中指令不会被稀释。

### 中间层对齐如何让模型记住声部结构

只让指令可达还不够，模型还要在表示里分清多个声部，才能改一个而不漏改或误伤其他。做法是对齐第 4 层的目标位置隐状态，用训练时才用的 4 个 MLP 投影头分别对准 4 种目标。MERT-330M 嵌入来自目标音频，提供混合音乐的结构信息，用逐帧余弦距离约束。音高和乐器活性来自目标 MIDI 在 75 Hz 网格上的标注，分别是 88 个 pitched 音符加 47 个鼓点、8 类乐器的逐帧有无，用二分类交叉熵约束。效果风格用 StemFX 嵌入，把目标音频按 3 段 10 秒取嵌入后平均归一化，用余弦距离约束，评价效果时改用 AFx-Rep 以避免循环评价。

4 个投影头只在训练时存在，推理不增加负担。直觉是早期隐状态被迫携带声部级结构，后续层才有依据决定保留什么、去掉什么。消融实验显示，去掉交叉注意力和对齐损失后，在真实域移除和提取上漏改更多，编辑成功率下降，而伴奏、翻奏和转换这类创意任务差异较小，说明该机制主要帮助需要删除内容又保留其余的操作。

**MERT 嵌入 × StemFX 嵌入 × 音高与乐器活性：** MERT 嵌入刻画混合音乐的结构内容，StemFX 嵌入刻画整段的效果风格，音高与乐器活性则是逐帧的 88 个音高加 47 个鼓点和 8 类乐器的有无标签；四者作为第 4 层隐藏状态的对齐目标，分别用余弦距离和二分类损失约束，目的是让模型在生成前就保留声部级结构，以便只改目标声部。

### 没有复合编辑数据时如何合成训练三元组

训练需要源录音、指令和编辑结果三元组，现实中没有大规模复合数据。做法是从 Slakh2100 多轨的 30 秒随机窗口即时合成。每个样本按比例组合：40% 是轨道级任务加音频效果，40% 是纯轨道级任务，20% 是纯音频效果。轨道级任务从 6 种里均匀抽取，加上效果共 7 种。移除和提取按目标声部省略或只留该声部构造，伴奏是源里 withheld 某乐器、目标只含新声部，翻奏用显著性删减加八度折叠把全曲缩编到吉他、钢琴、风琴或弦乐上，转换是同一 MIDI 换音色重渲染，去噪是在训练时用 FSD50K、测试时用 ESC-50 的环境声按比例混入。

指令和效果链由工具调用语言模型 Qwen3-30B 1 次写出。提示给 3 到 5 个效果家族和 30 种混音动机之一，例如复古或洞穴感，语言模型既写制作人式的自然语言，又把效果输出为可在分轨上执行的可执行函数调用，经 MultiAFX 渲染，目标与指令按构造一致。单声道评测下立体声和空间效果被禁用，效果前后做响度匹配。下图展示了从多轨到三元组的完整合成路径。

> **看图路径：** 1. 看左侧多轨分轨如何进入采样编辑环节；2. 看上方工具调用语言模型同时产生自然语言指令和可执行效果链；3. 看下方分轨编辑加效果渲染如何形成训练三元组

[![原论文 Figure 2：On-the-fly editing-pair synthesis.](https://arxiv.org/html/2611.07423v1/fig_data_pipeline.svg)](https://arxiv.org/html/2611.07423v1/fig_data_pipeline.svg)

*论文图 2。原论文 Figure 2:：“On-the-fly editing-pair synthesis. For each training item, a track-level task and/or audio effects are applied to the stems of a multitrack recording.”。*

图中左侧多轨分轨先进入采样编辑环节，中间工具调用语言模型同时输出自然语言指令和效果调用，下方按编辑加效果链渲染出目标混音，右侧形成源、指令、目标三元组。虚线表示效果调用的传递，实线表示音频和文本的流向。这种合成让指令措辞和效果组合多样化，避免固定模板。

总损失是目标码交叉熵、z-loss 稳定项和 4 路对齐损失的加权和。

\[\mathcal{L}=\mathcal{L}_{\mathrm{CE}}+\lambda_{z}\mathcal{L}_{z}+\lambda_{\mathrm{mert}}\mathcal{L}_{\mathrm{mert}}+\lambda_{\mathrm{p}}\mathcal{L}_{\mathrm{roll}}+\lambda_{\mathrm{i}}\mathcal{L}_{\mathrm{inst}}+\lambda_{\mathrm{f}}\mathcal{L}_{\mathrm{fx}},\]

其中交叉熵管逐码预测，z-loss 约束 logit 配分函数接近零以稳定训练，四项对齐分别对应 MERT、音高、乐器和效果，权重按原文取 0.5、1.0、0.5、0.5，z-loss 权重为万分之一。训练 20,000 步，骨干峰值学习率较小而投影头和适配器较大，指令丢弃率 0.15 作为无分类器引导的空信号。推理温度 1.0 无截断，引导系数 1.5，空指令分支保留源码和查询，只把指令词元换成填充。

### 用什么指标同时看改对了和保留了

通用指标包括输出与指令的 CLAP 文本相似度、输出与源的 CLAP 音频相似度、PaSST 标签分布的 KL 散度，以及相对固定真实参考集的 FAD 和 KAD。但这些不够：输出与源的相似度会被原样返回刷高，输出与指令的相似度可能奖励仍含目标乐器的移除输出。因此对有确定性目标的移除、提取、去噪和效果，加测对数梅尔谱 L1、多分辨率 STFT 距离和除效果外的 SI-SDR，以及用 HTDemucs-6s 能量算的编辑成功率和编辑强度。效果还加测 AFx-Rep 余弦和 7 维音频特征距离。

对无唯一目标的伴奏、翻奏和转换，编辑侧用 PaSST 识别请求乐器的准确率和是否单独输出该声部的隔离强度，保留侧用伴奏提示依从度、结构距离、自相似或旋律 chroma 准确率，以及转换在 Slakh 上有 MIDI 真值时的帧 F1。测试集每操作每域 150 条，Slakh 为合成域，MoisesDB 为真实域外测试。基线包括任务专用系统和 4 个自由文本编辑器，单任务和复合指令分开比较。

**编辑成功率 × 编辑强度 × SI-SDR：** 编辑成功率是满足阈值的样本占比，阈值取 6 dB，编辑强度是目标乐器在输出与输入或与其他乐器之间的能量比的分贝值，SI-SDR 是输出与确定性目标波形的尺度不变信噪比；前两者用 HTDemucs-6s 分离出的能量判断是否真改了指定声部，后者衡量波形接近程度，三者互补，避免只看波形或只看语义相似度带来的误判。

### 单任务上生成模型与专用模型各赢在哪

总体趋势是目标含源里没有的新内容时 ProCraft 最有竞争力，有真值可比的波形任务上专用系统领先。创意任务上专用系统常偏向一端：Slakh 乐器转换里 TokenSynth 音高时值帧 F1 达 0.641 但乐器识别仅 0.420，DDPM 反演相反，而 ProCraft 是唯一在乐器识别、帧 F1 和旋律三项都超过 0.55 的系统。钢琴翻奏里 Pop2Piano 和 PiCoGen2 旋律跟随略好，但伴奏依从度 0.394 到 0.712 明显低于 ProCraft 的 0.775 到 0.820。例外是伴奏上 MusicGen-Stem 在乐器识别和依从度领先，真实域转换上 AP-Adapter 领先。

效果任务上 InstructFX2FX 离处理后目标最近，但 ProCraft 超过基于 DSP 的 FxSearcher 和 Text2FX，说明猜对效果与信号处理同样重要。移除、提取和去噪上专用分离 SI-SDR 领先很多，例如 Slakh 移除 HTDemucs 达 8.31 dB 而 ProCraft 为 -2.96 dB。论文用 WavTokenizer 编解码真值得到 1.05 dB，推算 11.3 dB 差距中约 7.3 dB 来自 0.9 kbps 单码本码率而非模型本身。但 SI-SDR 不检验是否真改：MoisesDB 提取上 AudioSep 的 SI-SDR 更高，却只在 7.3% 样本真正孤立出目标声部，而 ProCraft 达 82.0%。

下表给出复合指令下有确定性目标的三项任务的 SI-SDR，单位为 dB，数值越大越好，比较问题是同一复合指令下谁的输出更接近编辑加效果后的目标。

| System | Removal | Extraction | Denoising |
| --- | --- | --- | --- |
| ProCraft (ours) | −7.39 | −15.73 | −4.74 |
| ZETA | −46.18 | −38.03 | −35.42 |
| DDIM inv. | −44.83 | −41.26 | −32.18 |
| SteerMusic | −25.60 | −27.20 | −29.90 |
| Audio-Omni | −24.88 | −23.98 | −26.02 |

表中 ProCraft 在移除、提取和去噪三列均为最高，次优为 Audio-Omni 或 SteerMusic，差距至少 8 dB 以上。这一比较的限制在于 SI-SDR 对波形细节敏感，生成模型即使改对声部也可能因码率和重合成相位差异得分较低，因此必须结合编辑成功率和听感一起读，不能单凭 SI-SDR 判定编辑是否成功。

### 复合指令下谁能同时改对并保留

复合指令把 6 种轨道操作分别与音频效果配对，是论文的主战场。确定性三项的结果如上表，ProCraft 在 Slakh 领先至少 8.25 dB，在 MoisesDB 领先至少 6.33 dB。创意三项上每个基线至少在一方面掉队：Audio-Omni 在伴奏和翻奏的依从度更高，但隔离强度为负，说明常返回整首混音而非单独声部；DDIM 反演有时隔离更强但与源的适配差；SteerMusic 很少渲染出请求乐器，转换上几乎不隔离。ProCraft 是唯一三项都没有大塌陷的系统，但转换上的隔离仍不完美。

**伴奏生成 × 单乐器翻奏 × 乐器转换：** 伴奏生成是 withheld 某乐器后只生成该新声部，单乐器翻奏是把全曲缩编到一把吉他、钢琴、风琴或弦乐上，乐器转换是保持 MIDI 音高不变只换音色渲染；三者都没有唯一正确答案，因此不用波形距离评价，而用乐器识别准确率、是否单独输出、旋律与结构跟随程度来同时看改对了没有和保留了多少。

听感上 16 人 MUSHRA 无锚测试每任务每属性 0 到 5 打分，任务内重复测量方差分析显示系统与属性交互显著，再做 Holm 校正的配对比较。下图展示 6 个任务的三角形评分，面积越大越好。

> **看图路径：** 1. 每个三角形三个顶点分别对应编辑、保留和音质三项听感评分；2. 对比同一任务下不同颜色三角形的面积和形状；3. 重点看移除、去噪与伴奏、翻奏两组任务的差异

[![原论文 Figure 6：MUSHRA-style user study on perceived audio from music editing with compound instructions.](https://arxiv.org/html/2611.07423v1/fig_listening_radar.svg)](https://arxiv.org/html/2611.07423v1/fig_listening_radar.svg)

*论文图 6。原论文 Figure 6:：“MUSHRA-style user study on perceived audio from music editing with compound instructions.”。*

图中移除和去噪的三角形 ProCraft 明显最大，提取和乐器转换上 ProCraft 与大 16 倍的 Audio-Omni 接近，伴奏和翻奏上 ProCraft 的保留顶点内缩。结合客观指标看，返回整混音的系统在保留和音质上占便宜，但隔离强度暴露了它们没有输出单独声部。听感结论成立条件是 MoisesDB 真实录音加复合指令、每任务 3 段录音每人随机听一段，共 16 名听众，统计已校正多重比较。

### 指令措辞和听感数字具体长什么样

为让读者复述关键步骤，这里给出论文演示页的指令写法。比较问题是指令是否覆盖 7 种操作和复合形式，而非哪句话得分更高。

| Task | Instruction |
| --- | --- |
| Remove | Cut the bass from the mix |
| Extract | Extract only the guitar track. |
| Accompany | Generate a piano part that complements the track |
| Cover | Arrange entire track as solo piano performance |
| Instrument transfer | Replace guitar with bass using same notes. |
| Denoise | Eliminate all non-music sounds. |
| Audio effects | Add rich tube saturation and hall reverb to the piano. |

表中单操作如切掉贝斯、只留吉他、生成互补钢琴、改编为钢琴独奏、按相同音符把吉他换成贝斯、去掉非音乐声、给钢琴加电子管饱和与大厅混响，复合操作则在轨道编辑后追加压缩、滤波、比特 crushing 等效果描述。措辞多样性来自 30 种混音动机和工具调用模型的自由发挥，训练与测试指令均非固定模板。

听感平均分按任务、属性和系统报告，0 到 5 分，分数越高越好，比较问题是同一录音指令下 5 个系统谁的编辑、保留和音质更好。

| Task | Attribute | ProCraft (ours) | Audio-Omni | SteerMusic | ZETA | DDIM inv. |
| --- | --- | --- | --- | --- | --- | --- |
| Remove | Editing | 2.50 | 1.69 | 2.00 | 0.81 | 0.81 |
|  | Preservation | 4.06 | 1.38 | 2.88 | 0.44 | 0.50 |
|  | Audio quality | 3.56 | 0.69 | 2.12 | 1.25 | 1.38 |
| Extract | Editing | 3.12 | 3.25 | 2.38 | 0.56 | 0.06 |
|  | Preservation | 3.44 | 3.69 | 3.12 | 0.31 | 0.12 |
|  | Audio quality | 3.06 | 3.69 | 2.75 | 1.31 | 0.31 |
| Denoise | Editing | 3.56 | 2.00 | 0.69 | 0.00 | 0.69 |
|  | Preservation | 3.88 | 2.19 | 2.62 | 0.06 | 0.19 |
|  | Audio quality | 3.75 | 2.06 | 1.88 | 0.62 | 0.56 |

表中移除上 ProCraft 三项分别为 2.50、4.06、3.56，去噪上为 3.56、3.88、3.75，均列最高；提取上与 Audio-Omni 接近，伴奏和翻奏保留项落后于返回整混音的系统。表后解释限制：听感样本每任务仅 3 段录音，伴奏和翻奏的保留高分可能来自未隔离的整混音听起来更像源，因此需与隔离强度联读，音质仍是 ProCraft 最需改进的一环。

### 编辑头和对齐到底带来了多少提升

消融比较联合条件、交叉注意力和对齐的作用。用同数据重训的 Instruct-MusicGen 在所有操作上落后于 ProCraft，论文归因于 ProCraft 把指令和源放在同一序列、每个输出码可联合 attend，而前者经分离路径条件。去掉门控交叉注意力和对齐损失的 ProCraft-plain 在伴奏、翻奏和转换上与完整版接近，但在需删除内容又保留其余的操作上差距明显：MoisesDB 移除成功率从 26.0% 提到 38.0%，编辑强度从 4.9 dB 提到 7.4 dB，提取 SI-SDR 从 -17.4 dB 提到 -15.1 dB。

下图检验成功率提升是否依赖 6 dB 阈值的选择，横轴为阈值，纵轴为超过阈值的样本比例。

> **看图路径：** 1. 横轴是编辑强度阈值，纵轴是超过阈值的样本比例；2. 对比实线与虚线在不同阈值下的高低；3. 注意虚线标记的 6 dB 阈值只是曲线上的一个点

[![原论文 Figure 4：Fraction of items whose edit strength exceeds a threshold \\tau, for ProCraft and ProCraft-plain…](https://arxiv.org/html/2611.07423v1/fig_ablation_threshold.svg)](https://arxiv.org/html/2611.07423v1/fig_ablation_threshold.svg)

*论文图 4。原论文 Figure 4:：“Fraction of items whose edit strength exceeds a threshold \tau, for ProCraft and ProCraft-plain (150 items per panel). The dotted line marks the 6 dB threshold used for edit rate.”。*

图中四面板分别为 Slakh 和 MoisesDB 的移除与提取，实线完整版在所有阈值上都不低于虚线简化版，虚线标记的 6 dB 只是其中一点。这说明提升不是靠阈值挑出来的，在域外真实数据上更明显。代价是新增约 77,920,000 参数的交叉注意力和适配器，以及训练时的 4 个投影头，但推理只保留前者。

配对显著性上表 9 到表 11 的检验显示，移除和去噪的提升经 Holm 校正后显著，而伴奏和翻奏多数对比不显著，支持机制主要帮助删除类任务的判断。

### 显著性检验支持哪些听感结论

听感差异是否显著需要看校正后 p 值。比较问题是 ProCraft 与每个基线的均值差是否在同时比较 12 个属性时依然成立。

| Task | Attribute | Audio-Omni | SteerMusic | ZETA | DDIM inv. |
| --- | --- | --- | --- | --- | --- |
| Remove | Editing | +0.81 (0.341) | +0.50 (0.376) | +1.69 (0.047) | +1.69 (0.047) |
|  | Preservation | +2.69 (<<0.001) | +1.19 (0.014) | +3.62 (<<0.001) | +3.56 (<<0.001) |
|  | Audio quality | +2.88 (<<0.001) | +1.44 (0.005) | +2.31 (0.004) | +2.19 (0.007) |
| Denoise | Editing | +1.56 (0.003) | +2.88 (<<0.001) | +3.56 (<<0.001) | +2.88 (<<0.001) |
|  | Preservation | +1.69 (0.003) | +1.25 (0.010) | +3.81 (<<0.001) | +3.69 (<<0.001) |
|  | Audio quality | +1.69 (0.008) | +1.88 (0.008) | +3.12 (<<0.001) | +3.19 (<<0.001) |

表中移除上 ProCraft 相对 Audio-Omni 的保留差 +2.69、音质差 +2.88，去噪三项差 +1.56、+1.69、+1.69，均在校正后显著；提取上与 Audio-Omni 的差异不显著；伴奏三项与所有基线差异均不显著；翻奏保留上落后于 Audio-Omni 和 SteerMusic 且显著；转换编辑上领先 SteerMusic、ZETA 和 DDIM 反演且显著。

表后含义是值得尝试的场景为移除和去噪的复合指令，以及提取和转换中需要真正改声部而非返回整混音的场景；伴奏和翻奏上若只看保留和音质，大模型或返回整混音的系统听感占优，但那不代表编辑正确。

### 哪些结论换个条件就不成立

第一，波形接近度不等于编辑正确。生成模型受 0.9 kbps 单码本瓶颈影响，SI-SDR 天然低于直接做减法或掩码的分离模型，不能用 SI-SDR 单独证明谁改得对，必须联看编辑成功率、隔离强度和听感。原文用编解码真值的对照量化了码率代价，这部分结论只在 WavTokenizer 设置下成立。

第二，创意任务的客观好坏依赖裁判模型。乐器识别用 PaSST，结构用 MERT 自相似，旋律用估计加 mir_eval 容差，裁判错了结论就偏。论文对 Instruct-MusicGen 伴奏用分离后再评、固定输出钢琴的系统屏蔽乐器识别，正是为了避免裁判被分离或固定输出污染。换裁判或换乐器集合，排序可能变化。

第三，域外结论限于 MoisesDB 真实录音和每操作 150 条。训练只见 Slakh 合成多轨，真实域提升主要体现在删除类任务，伴奏和翻奏的音质仍落后于参数大 16 倍、音频多约 300 倍的 Audio-Omni。听感每任务仅 3 段录音、16 名听众，推广到其他风格和语言指令需谨慎。效果评价为避免循环用了 AFx-Rep 而非对齐用的 StemFX，换回 StemFX 会高估自己。

### 复现第一步要准备什么

复现先准备数据管线而非直接训练。需要 Slakh2100 多轨及 MIDI 按八家族归并，30 秒窗口需过滤静音和过小峰值，FSD50K 作训练噪声、ESC-50 作测试噪声，MultiAFX 可执行效果链，以及 Qwen3-30B 写指令和效果调用。效果链需禁立体声和空间类、做响度匹配，否则目标与指令不一致。训练超参数按原文：20,000 步、1000 步 warmup 后余弦衰减，AdamW、梯度裁剪 1.0，骨干学习率较小而投影头和适配器较大，有效批量 16 序列 bf16，指令丢弃 0.15。推理温度 1.0、无截断、引导系数 1.5，前缀编码 1 次。单张 RTX 5090 上 30 秒片段批量 1 约 38 秒、加超分约 40 秒，批量 8 摊薄后每段约 5 秒、加超分约 7 秒。

资源状态需分开说：论文称计划公开模型权重、训练和数据生成代码，第三方演示页在本次检查中可访问，但这只证明论文提到了该链接，不证明作者已开源；链接不可用也不代表技术有错。本解读未核验权重可下载或系统可运行，复现前应以作者仓库实际状态为准。

### 什么时候值得尝试还缺什么验证

值得尝试的是需要一句自由文本同时做轨道编辑加效果、且必须真改指定声部的场景，尤其是移除、提取和去噪的复合指令，以及转换中要求音高时值保留的场景。此时 ProCraft 在客观隔离和听感编辑保留上占优，且模型仅 0.5B 量级。若任务是纯分离追求最高 SI-SDR，应选 HTDemucs 或 Banquet 类专用模型；若只追求伴奏或翻奏听起来像原曲且不在乎是否单独输出，大模型或返回整混音的系统听感可能更高。

第一步是跑通即时合成管线并复现编辑成功率曲线，确认阈值无关的提升，再在 MoisesDB 上联测 SI-SDR、编辑成功率、隔离强度和听感。还缺的验证包括：更多真实风格和中文口语化指令的泛化，更长于 30 秒的连贯性，码率提升后 SI-SDR 与听感的 trade-off，以及裁判模型换成人工声部标注后的排序稳定性。轻量生成编辑在保真和音质上仍有开放缺口，是否值得为自由文本便利接受码率损失，应按具体制作环节决定。

<details>
<summary>📎 论文与评分元数据</summary>

排名：前50% | 文档类型：模型报告 | [arXiv 原文](https://arxiv.org/abs/2611.07423v1)

</details>

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。

- 评分规则：type-aware-v1

- 评分模型：muse-spark-1.3-contributor

- 评分请求协议：openai_responses

---

[← 返回 2026-11-09 语音/音乐/音频论文速递](/audio-paper-digest-blog/posts/2026-11-09/)
