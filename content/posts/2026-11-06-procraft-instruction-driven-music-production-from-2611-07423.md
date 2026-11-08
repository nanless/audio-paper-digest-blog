---
title: "ProCraft: Instruction-Driven Music Production from Free-Form Text"
date: 2026-11-06
draft: false
tags: [音乐后期制作, 自回归模型, 音乐, 注意力机制]
categories: [论文速递]
description: "ProCraft 用 0.5B 自回归编解码语言模型从自由文本一次生成 30 秒编辑后混音，靠常驻编辑头和中间层音乐对齐在合成与真实录音上兼顾改动与保留，但波形精度仍不及专用分离模型。"
hiddenInHomeList: true
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_arxiv_id: "2611.07423"
paper_digest_workbench_contract: "researcher-workbench"
paper_digest_workbench_schema_fingerprint: "1f09b594c317cc38e934de27a5b0e8ceb4baa50ef79bd4f8683dd9adea720fe7"
paper_digest_reader_title: "一句话指令改整首混音：ProCraft 如何做七种音乐编辑"
paper_digest_original_title: "ProCraft: Instruction-Driven Music Production from Free-Form Text"
paper_digest_arxiv_version: 1
paper_digest_arxiv_versioned_id: "2611.07423v1"
paper_digest_arxiv_abs_url: "https://arxiv.org/abs/2611.07423v1"
paper_digest_arxiv_pdf_url: "https://arxiv.org/pdf/2611.07423v1.pdf"
paper_digest_primary_task: "音乐后期制作"
paper_digest_tags_contract: "paper-tag-flat-tags"
paper_digest_tags_schema_fingerprint: "27e36280a4b8d3df62ebe54d3ab037920f4d69feb2b554163f01bbae2caf4338"
paper_digest_tags_selection_contract: "paper-tag-selection"
paper_digest_tags_registry_version: "paper-tag-catalog"
paper_digest_tags_registry_sha256: "9673bc0122e1905a5dcfd8b223675400cc2fa4c36095bc0e5f817edf99a0ec5c"
paper_digest_tags_concepts: [{"facet":"task","id":"task.music-post-production","label":"音乐后期制作"},{"facet":"method","id":"method.autoregressive","label":"自回归模型"},{"facet":"signal","id":"signal.music","label":"音乐"},{"facet":"method","id":"method.attention","label":"注意力机制"}]
paper_digest_primary_method: "自回归模型"
paper_digest_score: 7.3
paper_digest_rank_bucket: "前50%"
paper_digest_document_type: "模型报告"
paper_digest_one_sentence: "ProCraft 用 0.5B 自回归编解码语言模型从自由文本一次生成 30 秒编辑后混音，靠常驻编辑头和中间层音乐对齐在合成与真实录音上兼顾改动与保留，但波形精度仍不及专用分离模型。"
paper_digest_authors: [{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Yuan-Chiao Cheng"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Yi-Hsuan Yang"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Vincent K. M. Cheung"}]
paper_digest_abstract_sha256: "c0c827ef6ae9d85f4435994aea96f851b780bc98f01b6c76c576526bc7d2e54b"
paper_digest_sidecars: {"citation.bib":{"sha256":"81749c381a66ecb02973bd5e21068f9fb0fd10f627370fae9ce5c7d2468d74ab","url":"/audio-paper-digest-blog/client/papers/2026-11-06/2611-07423/citation.bib"},"citation.json":{"sha256":"0f73f763688bd8ad5ebf2f957c040a7e79c590aa424db923793facb2c634437b","url":"/audio-paper-digest-blog/client/papers/2026-11-06/2611-07423/citation.json"},"citation.ris":{"sha256":"8dc1cae0efc50afea0d0991b5434528a4fd5f0b82ce24a96279deb78ac5f96dd","url":"/audio-paper-digest-blog/client/papers/2026-11-06/2611-07423/citation.ris"},"rethink-context.json":{"contract":"paper-research-context","schemaFingerprint":"5d4e79f7d3ee65b39ccb38281548bf20a1b2041ab7a27625eaf97ab9909a8383","sha256":"162fd983642ae10abd6a30e4c8993ae674fc7bccc6feea130dfa56cd3b8fa8a1","url":"/audio-paper-digest-blog/client/papers/2026-11-06/2611-07423/rethink-context.json"}}
paper_digest_api_reader_contract: "beginner-researcher"
paper_digest_api_reader_schema_fingerprint: "cd8baf5b8bda3a49eec64f6005931af63de4e9a13148cba5f354c661ca6e9df2"
paper_digest_api_reader_article_sha256: "b31473c3f355395bd8e8ad3f0330d978320730700ba7abfb7e196b26e1d8d320"
paper_digest_api_reader_plan_sha256: "5f7ec6057fe41fe52788ded58956910d8b46a2ff9002ce8b7b6b7f2bad7af879"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings"
paper_digest_api_reader_source_binding_schema_fingerprint: "d2a2607a6e561909473022eb43f56332ee357af8568566a095c29083ffdec9cc"
paper_digest_api_reader_source_bindings_sha256: "4038960c3c60d877d301fb325501463dac902b5613b5cd9fa2aebbf8e95f40fb"
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

# 📄 一句话指令改整首混音：ProCraft 如何做七种音乐编辑

> 英文题目：*[ProCraft: Instruction-Driven Music Production from Free-Form Text](https://arxiv.org/abs/2611.07423v1)*

<!--paper-tag-hierarchy-v1:start-->

**研究分类**

- **研究任务**：[音频编辑](/audio-paper-digest-blog/papers/?concept=task.audio-editing) → [音乐后期制作](/audio-paper-digest-blog/papers/?concept=task.music-post-production)
- **研究方法**：[生成模型](/audio-paper-digest-blog/papers/?concept=method.generative) → [自回归模型](/audio-paper-digest-blog/papers/?concept=method.autoregressive)；[注意力机制](/audio-paper-digest-blog/papers/?concept=method.attention)
- **信号**：[音乐](/audio-paper-digest-blog/papers/?concept=signal.music)

<!--paper-tag-hierarchy-v1:end-->

> 评分：**7.3/10** | 创新 1.5/2 | 技术严谨 1.2/1.5 | 实验充分 1.3/1.5 | 清晰度 0.8/1 | 影响力 1/1.5 | 开源 0.2/1.5 | 可复现 0.3/0.5 | 工程/实践 1/1.5


## 👥 作者与机构

- Yuan-Chiao Cheng：机构信息未能在本次解析中与作者逐人可靠绑定
- Yi-Hsuan Yang：机构信息未能在本次解析中与作者逐人可靠绑定
- Vincent K. M. Cheung：机构信息未能在本次解析中与作者逐人可靠绑定

## 📌 核心摘要

音乐制作常在一次请求里同时改动编配和声音，例如去掉贝斯并让钢琴更亮更湿润，而已有编辑器多只支持单操作、短片段或固定模板。ProCraft接受30秒混合录音和自由文本，输出编辑后音频，覆盖移除、提取、伴奏生成、单乐器翻奏、乐器转换、去噪和效果处理，涉及贝斯、鼓、吉他、钢琴、管风琴、铜管、簧片、弦乐合奏八个乐器族。模型先把指令词序列、源音频码和32个可学习查询拼成一条因果序列，让每步输出码能同时看到指令与源音频，该序列末端查询状态汇成编辑头概括本次编辑意图。编辑头经门控交叉注意力送入每一解码层约束生成紧扣指令，同时第4层隐状态向预训练音乐表征及音高乐器目标对齐以保留未编辑内容，解码层据此自回归生成目标音频码。训练数据由On-the-fly Editing-pair Synthesis在Slakh2100上即时渲染轨道级操作与效果变化的配对音频，并调用语言模型书写指令并指定效果链，从而提供复合请求监督。在Slakh复合指令评测中每任务150条30秒样本、以编辑后处理音频为目标，按SI-SDR/dB越高越好计移除任务上ProCraft为-7.39 dB，高于次优基线Audio-Omni的-24.88 dB。在MoisesDB真实录音同协议复合评测中，按SI-SDR计ProCraft在移除、提取和去噪上高于四个自由文本编辑器至少6.33 dB，但在存在确定性目标的单任务移除等设置下专用分离模型仍大幅领先，且0.9 kbps单码本编解码器本身带来约7.3 dB损失，结论限于Slakh训练、MoisesDB验证的七类操作与八个乐器族，未验证更长片段与未见效果链。原文未披露训练、推理或部署成本。

## 🔗 开源与复现资源

- 第三方资源：<https://barry-mir.github.io/procraft-demo/> — 链接可访问（HTTP 200）

可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 音乐制作真正要改的是什么

做音乐后期时，改的往往不是一处。可能是拿掉贝斯，同时让钢琴更亮更宽；也可能是只留吉他，再顺手去掉雨声。输入是一段已经混好的立体声或单声道混音，输出是改完的混音，中间必须保留指令没有点名的所有内容。

对刚入门的读者，关键是把编辑分成两类。有确定目标的编辑，如移除、提取、去噪和效果器，理论上存在一个正确波形，可以直接比波形距离。没有唯一目标的创意编辑，如补写伴奏、缩编翻奏、换乐器音色，只要乐器对、旋律和声进行跟得上原曲，都算合理，不能拿单一参考波形去卡死。

已有工具多是单任务专用模型。分离模型擅长拿掉或留下某轨，伴奏模型擅长生成新声部，效果器参数模型只预测参数不直接生成音频。论文要解决的是用一句自由写的中文或英文指令，在一个模型里完成 7 种操作，还能把音轨级操作和音色效果组合在一起，1 次生成 30 秒成品。

### 已有路线为什么一次只能改一处

文本引导编辑之前有两条路线。一条是任务专用系统，每个模型只管一种变换，输入条件也是固定的，比如给乐器名做分离，给和弦做伴奏。它们在单指标上很强，但遇到一句同时说两件事的话就没有接口。

另一条是自由文本编辑器，如基于反演的零样本编辑器和 Audio-Omni。它们能读整句指令，却多在全混音层面改风格，很难精确到拿掉某件乐器，也很少同时处理效果链。表格对比显示，只有 ProCraft 在自由表达、移除、提取、伴奏、翻奏、乐器转换、去噪和效果器八列上都被判为支持，其余系统至少缺两到三列。

语音领域的 SpeechX 给了启发，把文本查询和音频放在一个序列里做自回归生成。但音乐更难，同时有多个声部，创意编辑还要保持和声节奏，30 秒长序列会让开头指令在生成尾部时被稀释。ProCraft 的两个机制正是为这两个困难准备的。

### 输入输出和必须保留的东西是什么

形式化地说，给定源混音 x 和自由文本指令 c，模型要生成编辑后混音 y。编码器把波形变成离散编码，解码器再把预测编码变回波形。所有 7 种操作共享同一个生成公式，只是目标编码的来源不同。

**音轨移除 × 音轨提取：** 移除是把指定乐器从混音中拿掉并保留其余声部，提取是只留下指定乐器并压低其余声部，二者都要求模型先认准目标音轨再决定保留什么，评价时既看目标能量变化了多少，也看非目标是否被误伤。

**伴奏生成 × 单乐器翻奏 × 乐器转换：** 伴奏生成是为已有混音补写一个新声部，单乐器翻奏是把全曲缩编到一件乐器上重奏，乐器转换是只换音色不改音高节奏，三者都没有唯一正确答案，因此不能只比波形，而要分别检查乐器是否正确、旋律结构是否跟随原曲、输出是否为独奏。

论文覆盖 8 个乐器家族，分别是贝斯、鼓、吉他、钢琴、风琴、铜管、簧片和弦乐合奏。训练只用合成数据集 Slakh2100 的多轨与 MIDI，测试同时用合成的 Slakh 和真实录音 MoisesDB，每个操作每种数据各 150 个 30 秒样本。真实集是域外考验，用来检验模型是否只记住了合成音色。

### 一个模型如何读指令并生成 30 秒音频

ProCraft 从音乐生成模型 InspireMusic 的 0.5B 语言模型初始化，隐藏维度 896，共 24 层。音频用冻结的 WavTokenizer 编码，24 kHz 单声道，每秒 75 帧，30 秒共 2250 个编码，码本大小 4096。指令用主干的文本分词器，最长 192 个文本词。

模型把指令词、源编码、32 个可学习查询和目标编码排成一个因果序列，1 次读入。这样源编码在编码时已经看到指令，查询能同时看到两者并在目标生成前汇总出编辑意图，每个目标编码生成时都能 attend 到全部前文。

\[p_{\theta}\big(a^{\mathrm{tgt}}\mid t,a^{\mathrm{src}}\big)=\prod_{i=1}^{T}p_{\theta}\big(a^{\mathrm{tgt}}_{i}\mid a^{\mathrm{tgt}}_{\lt i},\,t,\,a^{\mathrm{src}}\big).\]

上式说明目标编码是逐个自回归预测的，每个位置都以指令和源编码以及已生成的目标为条件。训练用教师强制，推理时逐码采样直到出现结束符，再经 WavTokenizer 解码并经流匹配超分与声码器上采样到 48 kHz。

\[s=\big[\,t\,;\;a^{\mathrm{src}}\,;\;q\,;\;a^{\mathrm{tgt}}\,\big].\]

上式是序列排布，t 是指令，源编码与查询在前，目标在后。下面的架构图把这条主路径与两个新增机制画在了一起。

读图前先明确任务：找到指令与音频在哪里汇合，编辑摘要如何送达每一层，对齐分支从哪一层引出。

> **看图路径：** 1. 先沿底部指令与源音频编码找到 32 个可学习查询的位置；2. 再看查询隐状态如何以门控交叉注意力送入每一层；3. 最后看第 4 层向上引出的四个对齐投影分支

[![原论文 Figure 1：Architecture of ProCraft.](https://arxiv.org/html/2611.07423v1/fig_architecture.svg)](https://arxiv.org/html/2611.07423v1/fig_architecture.svg)

*论文图 1。原论文 Figure 1:：“Architecture of ProCraft. The instruction, source codes, and K learnable queries precede the target codes in a single causal sequence.”。*

图中底部是输入指令与源音频编码，中部蓝色长条是编解码语言模型，橙色小块是 32 个查询形成的编辑头，通过门控交叉注意力连向各层。左侧橙色分支是从第 4 层引出的 4 个对齐投影，顶部是输出编码与解码器。该图帮助理解长序列下指令不会只在开头出现 1 次，而是被压缩后持续可用。

### 长序列下指令如何一直被听见

如果只把指令放在序列开头，生成到第 2000 帧时，指令占比很小，影响会被稀释。ProCraft 增加 32 个共享的可学习查询，它们与样本无关，但因注意力能看到当前指令与源音频，其最后一层隐状态就成为针对本次输入的编辑摘要，记作编辑头。

**持续编辑头 × 门控交叉注意力：** 持续编辑头是 32 个可学习查询在看过指令和源音频编码后形成的编辑摘要向量，门控交叉注意力是每个解码层用该摘要做一次额外注意力并以 tanh 门控融合的通路，前者负责把长序列开头指令压缩成随身携带的记忆，后者负责让每一层生成时都能重新读到它。

实现上每个解码层在自注意力之后、归一化之前加一路交叉注意力，查询来自目标位置状态，键值来自编辑头。输出乘以 tanh 门控，门控标量初始化为零，训练初模型等价于预训练主干，再慢慢学会依赖新通路。训练用两次前向，第 1 次编码前缀得到编辑头与键值缓存，第二次用教师强制处理目标并让梯度回传到查询与前缀。推理时前缀编码 1 次，编辑头固定后逐码采样，与训练一致。新增参数约 77,920,000，其中查询本身仅 28,000。

### 中间层如何记住分轨结构

光能听见指令还不够，还要能分清混音里谁是谁。ProCraft 在第 4 层目标位置的隐状态上加 4 个训练期投影头，分别对齐 4 种目标。MERT 投影用余弦距离对齐冻结 MERT-330M 的音乐结构嵌入，效果器投影在时间池化后对齐 StemFX 嵌入的余弦距离，音高与乐器投影则是分类头，用二元交叉熵预测每帧 88 个 pitched 音符加 47 个鼓点以及 8 个乐器家族是否活跃。

**MERT 嵌入 × StemFX 嵌入 × 音高与乐器标注：** MERT 嵌入刻画混音的音乐结构，StemFX 嵌入刻画整段的效果器风格，音高与乐器标注给出每帧哪些音符和乐器家族在响，三者一起作为第 4 层隐状态的对齐目标，让模型在生成前就保留分轨结构，避免只顾改目标而弄丢其余声部。

这些头只在训练时存在，不增加推理负担。直觉是让浅层表征提前带有音轨级结构，后续层在生成时更容易保留非目标声部。消融实验显示，去掉这部分与交叉注意力后，在真实集移除与提取上泄漏更明显，编辑成功率下降。

### 推理时采样与引导如何执行

推理温度为 1.0，不做截断，最大步数等于源长度 2250 步。采用无分类器引导，指令分支与空指令分支各算 1 次前缀并得到各自编辑头，空分支用填充词替代指令但仍保留源音频与查询，最终对数按空分支加 1.5 倍差值融合。

举例说明，指令说去掉贝斯并加混响，模型先把这句话与源编码一起编码成编辑头，生成每个目标编码时既看已生成音频，也通过门控通路读编辑头，同时浅层表征已带有分轨信息，因此能在压低贝斯能量的同时保持鼓与吉他的进行。例子只是讲解流程，不代表某次实测分贝数。

单张 RTX 5090 上批量为 1 时约 38 秒处理 30 秒片段，加超分约 40 秒，批量为 8 时摊薄到每段约 5 秒，加超分约 7 秒。成本主要在自回归逐码生成，这是生成式编辑相对直接做数字信号处理的代价。

### 训练目标与三元组从哪里来

总损失是目标编码交叉熵加 z 损失稳定项，再加 4 个对齐损失的加权和，权重分别为交叉熵 1、z 损失 1e-4、MERT 0.5、音高 1.0、乐器 0.5、效果 0.5。优化器为 AdamW，训练 20,000 步，含 1000 步 warmup 后余弦衰减，主干峰值学习率 5e-5，投影与适配器 3e-4，有效批量 16，指令丢弃率 0.15 作为无引导信号。

\[\mathcal{L}=\mathcal{L}_{\mathrm{CE}}+\lambda_{z}\mathcal{L}_{z}+\lambda_{\mathrm{mert}}\mathcal{L}_{\mathrm{mert}}+\lambda_{\mathrm{p}}\mathcal{L}_{\mathrm{roll}}+\lambda_{\mathrm{i}}\mathcal{L}_{\mathrm{inst}}+\lambda_{\mathrm{f}}\mathcal{L}_{\mathrm{fx}},\]

上式把 5 类约束放在一起，前面两项保证能生成合法编码序列，后面四项约束中间表征保留音乐与效果结构。

**即时编辑对合成 × 工具调用语言模型：** 即时编辑对合成是每次训练时从多轨分轨现做源指令目标三元组的流程，工具调用语言模型负责写自然语言指令并以函数调用形式指定效果器链，前者解决复合编辑没有大规模标注的问题，后者保证文字描述的效果确实被执行到音频上，文字与目标天然对应。

具体做法是从 Slakh 随机截 30 秒多轨，按 40% 音轨任务加效果、40% 纯音轨任务、20% 纯效果的比例组合。音轨任务六选一，效果链由 Qwen3-30B 按 30 种混音动机与 3 到 5 个效果家族写成可执行调用，再用 MultiAFX 在分轨上渲染并做响度匹配。去噪训练用 FSD50K 环境声，测试用 ESC-50，避免同分布作弊。
先看数据合成流程，再理解训练三元组为何文字与音频天然对应。

> **看图路径：** 1. 先看左侧多轨分轨如何进入采样编辑环节；2. 再看工具调用模型同时输出指令文本与效果器调用；3. 最后确认三元组源音频、指令与目标混音如何形成

[![原论文 Figure 2：On-the-fly editing-pair synthesis.](https://arxiv.org/html/2611.07423v1/fig_data_pipeline.svg)](https://arxiv.org/html/2611.07423v1/fig_data_pipeline.svg)

*论文图 2。原论文 Figure 2:：“On-the-fly editing-pair synthesis. For each training item, a track-level task and/or audio effects are applied to the stems of a multitrack recording.”。*

图中左侧多轨先采样一个编辑，中间工具调用模型同时写出指令文本与效果器调用，底部对分轨执行编辑并跑效果链，右侧得到源音频、指令与目标混音三元组。该图说明监督不需要人工标注，目标是按指令渲染出来的，因此文字不会与音频错位。

### 用什么指标同时考核改对与保留

通用指标有输出与指令的 CLAP 文本相似度、输出与源的 CLAP 音频相似度、PaSST 标签分布的 KL 散度，以及相对固定真实池的 FAD 与 KAD。它们只能看自然度，CLAP 音频相似度把原样返回也会得高分，不能证明改对了。

**编辑率 × 编辑强度 × SI-SDR：** 编辑率是达到 6 dB 阈值的样本比例，回答改没改成，编辑强度是用分离后目标能量比算出的分贝数，回答改了多少，SI-SDR 是输出与确定性目标波形的尺度不变信噪比，回答整体波形有多接近，三者分工不同，不能互相替代。

有确定目标时用 mel-L1、对数梅尔谱距离、多分辨率 STFT 距离与 SI-SDR 直接比目标波形，移除与提取再用 HTDemucs-6s 分离能量算编辑率与强度，效果器再用 AFx-Rep 余弦与响度频谱特征距离看风格是否到位，且特意不用 StemFX 做评价以免循环论证。创意任务用 PaSST 乐器准确率看乐器对不对，用隔离强度看是否输出独奏，用 APA 看是否贴合原曲分布，用结构距离与旋律色度准确率看结构与旋律是否跟随。

比较条件是每任务每域 150 样本，基线用各自原生输入格式运行，不适用的指标空缺。单任务比 7 个专用系统，复合指令比 4 个自由文本编辑器。听感实验用无锚 MUSHRA 布局，16 名听者每任务听 1 对录音并对 5 个系统在编辑、保留与音质上打 0 到 5 分。

### 单任务上生成模型与专用模型各赢在哪

总体趋势是目标含源中没有的新内容时 ProCraft 更均衡，有精确波形目标时专用系统波形误差更小。创意任务上专用系统常偏向一端，Slakh 乐器转换中 TokenSynth 音高帧 F1 达 0.641 但乐器准确率仅 0.420，反演编辑器相反，ProCraft 是唯一在乐器准确率、帧 F1 与色度三项都超过 0.55 的系统。钢琴翻奏中专用模型旋律略好，但贴合度 APA 明显低于 ProCraft。

移除提取去噪上分离模型 SI-SDR 领先很多，Slakh 移除 HTDemucs 达 8.31 dB 而 ProCraft 为 -2.96 dB。论文用编解码器上下限解释，将真值过一遍 WavTokenizer 仅得 1.05 dB，说明 11.3 dB 差距中约 7.3 dB 来自 0.9 kbps 单码本瓶颈而非模型本身。但 SI-SDR 不检验是否改对，MoisesDB 提取中 AudioSep 的 SI-SDR 更高，却仅 7.3% 样本真正孤立出目标，而 ProCraft 达 82.0%。

效果器上直接做 DSP 的 InstructFX2FX 最接近处理后目标，但 ProCraft 优于同样做 DSP 的 FxSearcher 与 Text2FX，说明猜对效果与信号处理同样重要。

下表先看复合指令中最能量化的三列，数值为 SI-SDR，分贝越高越好，目标是编辑加效果后的波形。

| System | Removal | Extraction | Denoising |
| --- | --- | --- | --- |
| ProCraft (ours) | −7.39-7.39 | −15.73-15.73 | −4.74-4.74 |
| ZETA | −46.18-46.18 | −38.03-38.03 | −35.42-35.42 |
| DDIM inv. | −44.83-44.83 | −41.26-41.26 | −32.18-32.18 |
| SteerMusic | −25.60-25.60 | −27.20-27.20 | −29.90-29.90 |
| Audio-Omni | −24.88-24.88 | −23.98-23.98 | −26.02-26.02 |

表中 ProCraft 在 Slakh 移除、提取与去噪上分别为 -7.39 dB、-15.73 dB 与 -4.74 dB，均高于 4 个自由文本基线至少 8.25 dB。次优的 Audio-Omni 在三列上为 -24.88 dB、-23.98 dB 与 -26.02 dB，反演类方法低至 -40 dB 量级。限制是 SI-SDR 仍为负，说明波形级仍有明显距离，优势主要体现在相对差距而非绝对保真，真实集上领先幅度收窄到至少 6.33 dB，也需结合编辑率一起读。

### 复合指令与听感评价支持什么结论

复合指令把 6 种音轨操作分别与效果器叠加。Slakh 上伴奏、翻奏与乐器转换的雷达图显示，Audio-Omni 贴合度 APA 更高但隔离强度为负，说明常返回整混而非独奏。反演方法隔离更强但贴合度差，SteerMusic 很少渲染出请求乐器。ProCraft 是唯一三任务都没有大塌陷的系统，但乐器转换的隔离仍不完美。

先明确听感任务：每个三角形展示 1 个任务在编辑、保留与音质上的平均分，分数越高越好，16 人评价 MoisesDB 真实复合样本。

> **看图路径：** 1. 每个三角形对应一个任务的编辑、保留与音质三维评分；2. 先比较移除与去噪面板中各系统的三角形大小；3. 再看伴奏与翻奏面板中保留维度的差异含义

[![原论文 Figure 6：MUSHRA-style user study on perceived audio from music editing with compound instructions.](https://arxiv.org/html/2611.07423v1/fig_listening_radar.svg)](https://arxiv.org/html/2611.07423v1/fig_listening_radar.svg)

*论文图 6。原论文 Figure 6:：“MUSHRA-style user study on perceived audio from music editing with compound instructions.”。*

图中移除与去噪面板 ProCraft 三角形最大，提取与乐器转换面板 ProCraft 与 Audio-Omni 接近，伴奏与翻奏面板 ProCraft 保留维度偏小。该图可见听感优势集中在需要删东西的任务，创意独奏任务的保留低分部分源于输出独奏本就与原混音不同，不能直接理解为破坏。

下两张表给出指令示例与听感均值，评分范围 0 到 5，16 人平均。

| Task | Instruction |
| --- | --- |
| Remove | Cut the bass from the mix |
| Extract | Extract only the guitar track. |
| Accompany | Generate a piano part that complements the track |
| Cover | Arrange entire track as solo piano performance |
| Instrument transfer | Replace guitar with bass using same notes. |
| Denoise | Eliminate all non-music sounds. |

上表说明指令是自由措辞，如切掉贝斯、只留吉他、生成互补钢琴声部，以及复合句同时指定音轨操作与压缩混响等效果。理解这些例子后，才能明白复合任务要求模型同时解析多个动词与多个乐器名。

| Task | Attribute | ProCraft (ours) | Audio-Omni | SteerMusic | ZETA | DDIM inv. |
| --- | --- | --- | --- | --- | --- | --- |
| Remove | Editing | 2.50 | 1.69 | 2.00 | 0.81 | 0.81 |
|  | Preservation | 4.06 | 1.38 | 2.88 | 0.44 | 0.50 |
|  | Audio quality | 3.56 | 0.69 | 2.12 | 1.25 | 1.38 |
| Extract | Editing | 3.12 | 3.25 | 2.38 | 0.56 | 0.06 |
|  | Preservation | 3.44 | 3.69 | 3.12 | 0.31 | 0.12 |
|  | Audio quality | 3.06 | 3.69 | 2.75 | 1.31 | 0.31 |

表中移除上 ProCraft 编辑 2.50 分、保留 4.06 分、音质 3.56 分，去噪三项 3.56 分、3.88 分与 3.75 分，均为该任务最高。提取与乐器转换上 ProCraft 与 Audio-Omni 无显著差异，值得注意的是后者参数大 16 倍且训练音频多约 300 倍。伴奏与翻奏上 Audio-Omni 与 SteerMusic 保留更高，但它们隔离强度为负，常因返回原混音而听起来更接近源，这解释了保留高分的来源。统计细节见下一节的差异表。

### 编辑头与对齐分别带来了什么

为分离架构与数据的影响，论文用同数据重训 Instruct-MusicGen，其在所有操作上都不如 ProCraft，说明把指令与音频放在同一序列联合 conditioning 比分离路径更适合长序列与七任务混合。

去掉门控交叉注意力与对齐损失的 ProCraft-plain 在伴奏翻奏转换上与完整版接近，但在需要删内容保其余的任务上差距明显。MoisesDB 移除编辑率从 26.0% 升到 38.0%，编辑强度从 4.9 dB 升到 7.4 dB，提取 SI-SDR 从 -17.36 dB 升到 -15.14 dB。

先看阈值敏感性任务：横轴是判定成功的强度阈值，纵轴是达标比例，虚线是常用的 6 dB。

> **看图路径：** 1. 横轴是编辑强度阈值，纵轴是超过阈值的样本比例；2. 对比实线与虚线在不同阈值下的高低关系；3. 注意虚线标记的 6 dB 编辑率阈值位置

[![原论文 Figure 4：Fraction of items whose edit strength exceeds a threshold \\tau, for ProCraft and ProCraft-plain…](https://arxiv.org/html/2611.07423v1/fig_ablation_threshold.svg)](https://arxiv.org/html/2611.07423v1/fig_ablation_threshold.svg)

*论文图 4。原论文 Figure 4:：“Fraction of items whose edit strength exceeds a threshold \tau, for ProCraft and ProCraft-plain (150 items per panel). The dotted line marks the 6 dB threshold used for edit rate.”。*

四面板分别为 Slakh 与 MoisesDB 的移除与提取，实线完整版在所有阈值上都不低于虚线简化版，尤其在真实集移除左侧差距最大。这说明提升不依赖某个特定阈值选择，结论在阈值滑动时依然成立。限制是伴奏类创意任务提升很小，说明该机制主要帮助抑制泄漏而非凭空创作。

下表给出成对比较的均值差与 Holm 校正 p 值，正值表示 ProCraft 更高，每任务校正 12 次比较。

| Task | Attribute | Audio-Omni | SteerMusic | ZETA | DDIM inv. |
| --- | --- | --- | --- | --- | --- |
| Remove | Editing | +0.81 (0.341) | +0.50 (0.376) | +1.69 (0.047) | +1.69 (0.047) |
|  | Preservation | +2.69 (<<0.001) | +1.19 (0.014) | +3.62 (<<0.001) | +3.56 (<<0.001) |
|  | Audio quality | +2.88 (<<0.001) | +1.44 (0.005) | +2.31 (0.004) | +2.19 (0.007) |
| Denoise | Editing | +1.56 (0.003) | +2.88 (<<0.001) | +3.56 (<<0.001) | +2.88 (<<0.001) |
|  | Preservation | +1.69 (0.003) | +1.25 (0.010) | +3.81 (<<0.001) | +3.69 (<<0.001) |
|  | Audio quality | +1.69 (0.008) | +1.88 (0.008) | +3.12 (<<0.001) | +3.19 (<<0.001) |

表中去噪三项对 4 个基线均显著，去噪编辑对 Audio-Omni 差值加 1.56 分，p 为 0.003。移除保留与音质对所有基线显著，但移除编辑对 Audio-Omni 与 SteerMusic 不显著。提取与乐器转换上 ProCraft 与 Audio-Omni 差异均不显著，伴奏与翻奏多数比较不显著，翻奏保留显著低于 Audio-Omni 与 SteerMusic。这支持结论的适用边界，强结论只限于移除与去噪，创意任务只能说持平或音质待改进。

### 哪些结论不能推广到所有情况

第一，波形精度仍落后于分离专用模型。HTDemucs 与 Banquet 在移除提取上 SI-SDR 高出 10 dB 以上，部分差距来自编解码器瓶颈，但模型本身的生成误差依然存在。需要逐样本波形保真的制作环节，生成式方案目前不是最优。

第二，创意任务的自动指标与听感存在张力。返回原混音会在保留与音质上占便宜，却违反了输出独奏的要求。论文用隔离强度揭露了这一点，读结果时必须把 APA、色度与隔离强度一起看，不能只看保留。

第三，训练只见 Slakh 合成音色，真实集虽有提升但绝对值仍低，移除编辑率真实集仅 38.0%。乐器转换隔离在复合集上仍为负值附近，说明多指令叠加时独奏约束还不稳。听感样本每任务仅 3 段录音、每人每任务听一段，样本量小，显著性只在部分属性成立。

### 复现第一步要准备什么

复现从数据管线开始，而非直接训练。需要 Slakh2100 多轨与 MIDI，按八大家族归并，随机截 30 秒并过滤静音窗。效果器链用 MultiAFX 执行，立体声与空间类效果按论文禁用以保持单声道评测一致，输出做响度匹配。指令与效果调用由 Qwen3-30B 按 30 种动机与效果库采样生成，训练与测试去噪声源不同，分别用 FSD50K 与 ESC-50。

模型从 InspireMusic 0.5B 初始化并全量微调，加上 77.92M 交叉注意力与查询参数，对齐投影仅训练用。训练 20,000 步，有效批量 16，bf16，超分与声码器冻结。推理需 WavTokenizer、MERT 与 StemFX 的对应采样率与帧率对齐，MERT 与编码器均为 75 Hz，StemFX 按 3 段 10 秒平均。

作者资源方面，论文称计划公开模型权重、训练与数据生成代码，演示页在第三方地址当前可访问，但这只证明论文提到了该链接，不等于作者已开源。来源未确认不能当作技术缺陷，复现前应先核对链接可达性与权重是否真正发布。

### 什么时候值得试 ProCraft，下一步还缺什么

当需求是一句话同时改编配与音色，且能接受生成式音质而非样本级无损时值得尝试，尤其移除、提取与去噪叠加效果器的复合指令，以及需要兼顾乐器正确与旋律跟随的伴奏翻奏转换。已有专用分离链路且只做单任务时，继续用专用模型波形更准。

复现第一步是跑通即时合成管线，确认同一条指令能渲染出对应目标，再在小批量上验证编辑率随阈值的曲线是否复现完整版高于简化版。关键超参数是门控初值零、对齐权重组合与引导系数 1.5，信息条件是必须同时给源编码与文本指令，空指令分支仍保留源音频。

还缺的验证包括更大规模真实多轨上的编辑率、长于 30 秒的稳定性、效果器参数可控性的人听 AB，以及推理加速后的音质损失。论文结论是轻量模型用自然语言 1 次改多处是可行的，但在保真与创意音质上仍有明显天花板，后续需在编解码码率与独奏约束上继续改进。

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

[← 返回 2026-11-06 语音/音乐/音频论文速递](/audio-paper-digest-blog/posts/2026-11-06/)
