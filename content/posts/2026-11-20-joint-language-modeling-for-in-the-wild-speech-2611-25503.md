---
title: "Joint Language Modeling for In-the-Wild Speech-Scene Generation with Distinct Token Representations"
date: 2026-11-20
draft: false
tags: [文本到语音, 音频生成, 自回归模型, 神经编解码与离散单元]
categories: [论文速递]
description: "针对说话声与环境声混在一起难学好、分开学又丢失真实关联的问题，论文用来源感知的编解码器拆出两条对齐的离散符号流，再用预训练大语言模型交错生成这两条流，在模拟数据预训练后用真实录音微调，在可懂度和场景相关性上超过单混合表征基线，但场景引导增强会小幅牺牲可懂度。"
hiddenInHomeList: true
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_arxiv_id: "2611.25503"
paper_digest_workbench_contract: "researcher-workbench"
paper_digest_workbench_schema_fingerprint: "1f09b594c317cc38e934de27a5b0e8ceb4baa50ef79bd4f8683dd9adea720fe7"
paper_digest_reader_title: "把说话声和环境声分开建模：面向真实场景的语音场景联合生成解读"
paper_digest_original_title: "Joint Language Modeling for In-the-Wild Speech-Scene Generation with Distinct Token Representations"
paper_digest_arxiv_version: 1
paper_digest_arxiv_versioned_id: "2611.25503v1"
paper_digest_arxiv_abs_url: "https://arxiv.org/abs/2611.25503v1"
paper_digest_arxiv_pdf_url: "https://arxiv.org/pdf/2611.25503v1.pdf"
paper_digest_primary_task: "文本到语音"
paper_digest_tags_contract: "paper-tag-flat-tags"
paper_digest_tags_schema_fingerprint: "27e36280a4b8d3df62ebe54d3ab037920f4d69feb2b554163f01bbae2caf4338"
paper_digest_tags_selection_contract: "paper-tag-selection"
paper_digest_tags_registry_version: "paper-tag-catalog"
paper_digest_tags_registry_sha256: "9673bc0122e1905a5dcfd8b223675400cc2fa4c36095bc0e5f817edf99a0ec5c"
paper_digest_tags_concepts: [{"facet":"task","id":"task.tts","label":"文本到语音"},{"facet":"task","id":"task.audio-generation","label":"音频生成"},{"facet":"method","id":"method.autoregressive","label":"自回归模型"},{"facet":"method","id":"method.neural-codec","label":"神经编解码与离散单元"}]
paper_digest_primary_method: "自回归模型"
paper_digest_score: 7.6
paper_digest_rank_bucket: "前25%"
paper_digest_document_type: "方法研究"
paper_digest_one_sentence: "针对说话声与环境声混在一起难学好、分开学又丢失真实关联的问题，论文用来源感知的编解码器拆出两条对齐的离散符号流，再用预训练大语言模型交错生成这两条流，在模拟数据预训练后用真实录音微调，在可懂度和场景相关性上超过单混合表征基线，但场景引导增强会小幅牺牲可懂度。"
paper_digest_reader_sections: [{"heading":"问题本质：说话声要说清、环境声要对景，两者还要在同一录音里相互关联","index":1,"kind":"problem","roleLabel":"问题与瓶颈"},{"heading":"方法全景：一段样本如何从两段文字变成包含两条流的混音","index":2,"kind":"method_overview","roleLabel":"方法全景"},{"heading":"编码器设计：同一段混音如何拆出两条语义不同、时间对齐的符号流","index":3,"kind":"component","roleLabel":"核心机制"},{"heading":"生成器设计：大语言模型如何交错规划两条流并用引导强度调节侧重","index":4,"kind":"component","roleLabel":"核心机制"},{"heading":"主实验验证：分立建模在相同仿真数据上已占优，真实适应再推近真实分布","index":5,"kind":"result","roleLabel":"主实验验证"},{"heading":"消融验证：分立符号是否值得，哪怕它的重建分数反而更低","index":6,"kind":"ablation","roleLabel":"消融与诊断"},{"heading":"顺序与稳定性分析：交错为何保可懂度，环境在说话时是否被压低","index":7,"kind":"ablation","roleLabel":"消融与诊断"},{"heading":"边界与复现：什么时候值得尝试，第一步核对什么，还缺哪些验证","index":8,"kind":"limitation","roleLabel":"适用边界"}]
paper_digest_authors: [{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Semin Kim"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Ju Yeon Kang"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Sunghwan Ahn"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Seonuk Kim"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Nam Soo Kim"}]
paper_digest_abstract_sha256: "8d5dddf18cdd615466174b52337a1233ddff64af1f273879290c29a5acf5bef0"
paper_digest_sidecars: {"citation.bib":{"sha256":"20005ef7d3283bb5edf07202465b5c0d17ef78ddcaad3a9e3e3bb4d3e609230b","url":"/audio-paper-digest-blog/client/papers/2026-11-20/2611-25503/citation.bib"},"citation.json":{"sha256":"a3fe8a833b4fcacab4195993ad84c44a3a594c3554e59e9e3f85220aed76c371","url":"/audio-paper-digest-blog/client/papers/2026-11-20/2611-25503/citation.json"},"citation.ris":{"sha256":"dade07a63949a3e9b322f9d86ecb1ddd03ccae563cf3ecf099fe211b9b3ee891","url":"/audio-paper-digest-blog/client/papers/2026-11-20/2611-25503/citation.ris"},"rethink-context.json":{"contract":"paper-research-context","schemaFingerprint":"5d4e79f7d3ee65b39ccb38281548bf20a1b2041ab7a27625eaf97ab9909a8383","sha256":"8a3cd40a2afb55cd85c721ef74e40edf10b1a541be13135ec147c3cf9b8727a9","url":"/audio-paper-digest-blog/client/papers/2026-11-20/2611-25503/rethink-context.json"}}
paper_digest_api_reader_contract: "beginner-researcher"
paper_digest_api_reader_schema_fingerprint: "7c0300b9342334b864b6a304dcf02a96fb8dbbe8f4061b6dbc0ddfdd249ceceb"
paper_digest_api_reader_article_sha256: "a4ee620eec1f3e762c3cbeb2dc7883d6803004150d94b73c4db8fb26f394d8e3"
paper_digest_api_reader_plan_sha256: "4dc7f772e351b212e78c2db5e88421d101315b9ec47daccec43824af57811192"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings"
paper_digest_api_reader_source_binding_schema_fingerprint: "d2a2607a6e561909473022eb43f56332ee357af8568566a095c29083ffdec9cc"
paper_digest_api_reader_source_bindings_sha256: "d6c61f6d5b97506c90c74d2fc04839c1b1353f26098518779bba8bb54b2010c2"
paper_digest_api_reader_source_table_count: 4
paper_digest_api_reader_source_formula_count: 5
paper_digest_api_reader_structured_artifacts_sha256: "5615b1792a82d103a29978fc460ac8b8cdfd2026dcf093b8d18efb82ee9e7bf2"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity"
paper_digest_api_reader_author_identity_schema_fingerprint: "1e3fd3a9a56c9a5bf52df8df5022690b9a3fa92e83e934f295af87c0e258ed2f"
paper_digest_api_reader_author_identity_sha256: "5af413abd32e16034ec11a2f8259946b92a6f04d4f3ac49629896c2c847325ce"
paper_digest_api_reader_author_count: 5
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity"
paper_digest_api_reader_resource_identity_schema_fingerprint: "33b0be17118be61f39b85ce690c8da17e91f2864bb65e85284f60c40067328e0"
paper_digest_api_reader_resource_identity_sha256: "515234de201659743ae80b28331f55389bb506b83cb9c72b649e5c7e4aa3e25f"
paper_digest_api_reader_resource_count: 2
paper_digest_api_reader_figure_persistence: "ephemeral-no-persisted-figure-assets-v1"
paper_digest_api_reader_decision_projection: "api-reader-decision-projection"
paper_digest_api_reader_decision_projection_schema_fingerprint: "e56feb5ab75c8710904916b898f73dab9bb18bdf65bb60b7ed2edf7f99cea860"
---

# 📄 把说话声和环境声分开建模：面向真实场景的语音场景联合生成解读

> 英文题目：*[Joint Language Modeling for In-the-Wild Speech-Scene Generation with Distinct Token Representations](https://arxiv.org/abs/2611.25503v1)*

<!--paper-tag-hierarchy-v1:start-->

**研究分类**

- **研究任务**：[语音合成](/audio-paper-digest-blog/papers/?concept=task.speech-synthesis) → [文本到语音](/audio-paper-digest-blog/papers/?concept=task.tts)；[音频生成](/audio-paper-digest-blog/papers/?concept=task.audio-generation)
- **研究方法**：[生成模型](/audio-paper-digest-blog/papers/?concept=method.generative) → [自回归模型](/audio-paper-digest-blog/papers/?concept=method.autoregressive)；[向量量化](/audio-paper-digest-blog/papers/?concept=method.vector-quantization) → [神经编解码与离散单元](/audio-paper-digest-blog/papers/?concept=method.neural-codec)

<!--paper-tag-hierarchy-v1:end-->

> 评分：**7.6/10** | 创新 1.5/2 | 技术严谨 1.2/1.5 | 实验充分 1.3/1.5 | 清晰度 0.9/1 | 影响力 1/1.5 | 开源 0/1.5 | 可复现 0.5/0.5 | 工程/实践 1.2/1.5


## 👥 作者与机构

- Semin Kim：机构信息未能在本次解析中与作者逐人可靠绑定
- Ju Yeon Kang：机构信息未能在本次解析中与作者逐人可靠绑定
- Sunghwan Ahn：机构信息未能在本次解析中与作者逐人可靠绑定
- Seonuk Kim：机构信息未能在本次解析中与作者逐人可靠绑定
- Nam Soo Kim：机构信息未能在本次解析中与作者逐人可靠绑定

## 📌 核心摘要

**问题与瓶颈：** 语音场景生成要求根据待说文本和自然语言场景描述输出一段混合波形，其中可懂的语音与多样的环境声在同一空间中共存。现有文本到音频扩散模型多把混合声编码为单一隐表示或单一混合token流，语音的结构化语言约束与环境声的弱结构多样性被迫共享同一预测空间，两种成分的身份不再显式保留。另一条路线把语音模块与场景模块分开处理，训练多依赖人工混合的干净朗读语音加独立环境声，缺少同一空间的混响、录音条件与发声互动，少数使用真实录音的方法又冻结语音模块或需要干净源监督，未能充分利用真实依赖。

**核心思路与方法架构：** 核心洞察是表示上分开、上下文中联合。源感知神经音频编解码器从混合波形提取共享的语义表示和声学表示，再用两套向量量化器和两套残差向量量化器分别量化出语音流和环境流，每帧每流各含1个语义token加16个声学token，码本互不共享。训练时编码器只见混合声，蒸馏目标和重建目标分别指向仿真混合所用的孤立语音和孤立环境声，混合重建项保持两流互补。生成端以Qwen3-0.6B-Base为时间主干，输入场景描述文本、待说文本和场景描述的CLAP前缀，按交错顺序生成两流语义token，每个语义token再由各自深度Transformer沿码本深度生成声学token，解码时两流分别经共享解码器合成后相加。内容条件和场景条件可分别做无分类器引导，推理时用不同引导强度调节可懂度与场景贴合的取舍。

**关键实验与核心代价：** 在AudioCaps衍生的AC过滤评测集上，词错率越低越好，CLAP音频文本相似度越高越好，Fréchet Audio Distance越低越好。相同仿真数据训练下，本文模型混合词错率从ImmersiveTTS的7.91%降至6.43%，CLAP相似度从0.247升至0.255，FAD为4.76，高于ImmersiveTTS的4.03。真实录音适配后取内容引导1、场景引导4的设置，CLAP升至0.286，FAD降至3.91，混合词错率为7.08，仍优于全部基线，且独立解码的语音流词错率更低。干净语音评测中适配后模型在所比较的生成系统之中于LibriTTS和LibriSpeech四个子集词错率最低，并取得明显更高的UTMOS感知质量估计。消融显示单混合流基线在编解码重建上FAD略优，但生成词错率在仿真阶段为11.33%，明显落后于分流表示的6.43%；并行双头预测的场景指标略好，但词错率远高于交错排序。代价是序列长度翻倍、每步需运行大模型三次以支持双条件引导，增大场景引导会小幅抬高词错率。

**适用边界与深读导览：** 结论成立于英语语音、2至10 dB混合信噪比、以WavCaps字幕加说话人性别模板构造的描述分布，以及经Whisper过滤的AudioSet-Speech真实适配分布，尚未覆盖多说话人、强音乐或低资源语言。真实适配仅1万步并使用参数指数滑动平均以保护语言能力，长期适配是否保持可懂度仍未验证。若想深究编解码器蒸馏与重建目标的配合、交错损失的帧内条件结构和环境在语音段是否被压低的分离测量，可结合方法、实验与局限章节的对应分析理解。

## 🔗 开源与复现资源

- 第三方资源：<https://github.com/ASLP-lab/OmniCodec> — 链接可访问（HTTP 200）

- 第三方资源：<https://huggingface.co/AXERA-TECH/SileroVAD> — 链接可访问（HTTP 200）

可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 问题本质：说话声要说清、环境声要对景，两者还要在同一录音里相互关联

语音场景生成的输入是两段文字，一段是要说出的说话内容，例如点咖啡的请求，另一段是自然语言场景描述，例如女子在咖啡馆点单而窗外有雨声，输出是一段同时包含说话声与环境声的混音。这与常规文本转语音不同，常规任务只要求干净、可懂、自然，而这里还要求环境声与描述相符，并且两类声音听起来是在同一空间被同一设备录到的，而不是后期简单叠加。

理解难点在于两类声音的特性相互矛盾。说话声高度结构化，受文字内容强约束，音素顺序不能错；环境声种类繁多，雨声、鸟鸣、车流、人群往往弱结构、持续时间长、纹理重复。如果把混音压成一套不分来源的声学表示，生成模型要在同一目标空间同时学会语言结构与环境纹理，身份信息丢失后容易顾此失彼。如果把两者彻底独立建模，又会丢失真实场景的关联，例如共享的混响、录音底噪、说话与环境在时间上的避让或共存，这些在独立录制再人工混合的仿真数据里本来就不存在。

已有路线多采用文本到音频的扩散模型，直接生成混音的连续隐表示。语音长文本扩散模型扩展双重引导同时接受场景与说话条件，另一些工作先用类发音对齐的语音模块抽取语音特征，再拼接到噪声隐变量或用联合注意力融合场景描述。它们的声学目标都是单路混合隐表示，没有为语音和环境保留显式身份。对真实录音的利用也受限，有的冻结语音模块只微调其余部分，有的需要混合前的干净语音做对齐监督，因而只能在仿真场景训练，无法让整套模型直接从野外混音中学习关联。

**混合表征 × 分立语音流 × 分立环境流：** 混合表征把整段场景压成一套符号，解码时不再标明哪部分是说话、哪部分是环境，学习时两种异质信号挤在同一预测空间。分立语音流与分立环境流各有独立码本和预测头，保留来源身份，再把两条流放进同一个自回归上下文联合生成，兼顾可分性与关联性。

本文把任务重新表述为在两条分立符号流上的联合语言建模。来源感知的神经音频编解码器从混音直接抽出时间对齐的语音符号流与环境符号流，预训练大语言模型以场景描述和说话内容为条件交错生成这两条流。每生成一个符号就回填进上下文，使当前帧的环境符号能看到同帧语音符号，后续语音符号也能看到此前的环境符号。2 阶段训练先在仿真场景明确分工与对应，再在野外录音上适应真实关联，编解码器冻结后始终只需混音即可得到训练目标，不依赖分离出的干净来源。

### 方法全景：一段样本如何从两段文字变成包含两条流的混音

以咖啡馆例子走一遍完整流程会更清楚。输入是说话内容与场景描述两组文本符号，模型还会取场景描述的 CLAP 文本嵌入作为补充前缀，CLAP 在这里是连接音频与文字的联合嵌入，训练时多数情况用文本嵌入、少数情况用目标音频的嵌入，推理时固定用文本嵌入。三者加上一个标示音频开始的特殊符号，共同构成大语言模型的初始上下文。

随后模型逐帧交错生成语义符号，顺序是第一帧语音、第一帧环境、第二帧语音、第二帧环境，依此类推。每个语义符号产生后，对应流的深度变换器再把同帧的多个声学符号逐层补全，补全结果的嵌入与语义符号嵌入合并，作为下一步的输入历史。全部帧生成完毕后，两条完整符号流分别映射回各自隐变量，经共享解码器解出语音波形与环境波形，相加得到最终场景。这样，语言规划与声学细节解耦，跨流关联又保留在统一上下文里。

训练分两段。仿真预训练的语音池包含朗读语料与从野外录音经增强切分出的口语，环境声来自带标题的通用音频库，混合信噪比在 2 到 10 分贝均匀采样，语音随机摆放在环境中的位置，另有部分纯语音样本。场景描述由环境标题加说话人性别描述经一百多种模板组合而成，避免模型记住固定句式。真实适应阶段使用带语音的真实录音，自动转写与自动标题提供监督，并用参数指数滑动平均抑制长时间适应对语言能力的损伤。论文把仅仿真训练的版本记为 Proposed，把继续真实适应的版本记为 Proposed-FT，后者用内容引导与场景引导的强度组合区分不同权衡点。

### 编码器设计：同一段混音如何拆出两条语义不同、时间对齐的符号流

来源感知的编解码器是整个方法的基础，它要解决的疑问是，在只有混音可用的情况下，如何得到可供语言模型学习的分来源目标。主干沿用 OmniCodec 的双分支结构。语义分支用冻结的音频编码器从混音抽取语义表示，声学分支用卷积编码器抽取声学表示并减去已量化的语义部分，剩余部分再量化。这种相减设计让语义符号承担内容，声学符号承担残余质感，两者相加再解码。编解码器工作在 24 千赫音频、每秒 12.5 帧，每帧有一个语义符号加 16 个声学符号，码本大小均为 2048。

关键改动是把量化器一分为二。语义侧有两个独立的矢量量化模块，分别负责语音与环境；声学侧有两个独立的残差量化模块，同样各管一条流。两个分支的输入表示是共享的，都来自同一段混音，但输出码本不相交，符号身份天然分开。训练时编码器吃混音，监督则用混合前的干净语音与干净环境。语义蒸馏让每个量化结果去对齐各自来源经自监督编码器抽取的特征，语义重建让量化结果能恢复各自来源的语义编码器表示，重建则分别监督各自解码波形与混合波形相加后的结果，混合项保证两条流互补而不重复。

读图之前，先明确图中颜色与箭头的含义，蓝色对应语音路径，橙色对应环境路径，虚线是只在训练时存在的蒸馏监督，实线是推理时真实的数据流向。

[![原论文 Fig. 1：Overview of the proposed source-aware neural audio codec.](https://arxiv.org/html/2611.25503v1/sdb_codec_diagram.svg)](https://arxiv.org/html/2611.25503v1/sdb_codec_diagram.svg)

*论文图 1：Overview of the proposed source-aware neural audio codec（原论文 Fig. 1）。*

上图把上述分工画得很具体。左侧混合波形同时进入上方冻结语义编码器与下方声学编码器，得到共享表示后分别进入两套量化器，中间形成上下两组符号网格，分别标为语音符号与环境符号。右侧共享声学解码器把两组隐变量分别解出语音与环境波形再相加，训练时的蒸馏虚线从干净来源指回各自量化器。推理时不再需要干净来源，编码器可直接对任意混音输出两条流，解码器也可单独解出某一条流用于分析。

**语义分支 × 声学分支 × 矢量量化 × 残差矢量量化：** 语义分支从冻结音频编码器抽取内容层面的表示，用单层矢量量化压成每帧一个语义符号；声学分支用卷积编码器抽取细节，减去语义量化结果后用多层残差矢量量化补足音色与质感。两者分工后相加再解码，使语言模型既能学语义对应，又能恢复波形细节。

蒸馏目标是让身份分开的核心，下式表示语音量化结果对齐干净语音特征、环境量化结果对齐干净环境特征，即使输入相同，不同目标也会把两个量化器推向不同语义。

\[\mathcal{L}_{\mathrm{dist}}=\ell_{\mathrm{dist}}\big(\mathbf{q}^{s}_{\mathrm{sem}},E_{\mathrm{ssl}}(\mathbf{x}_{s})\big)+\ell_{\mathrm{dist}}\big(\mathbf{q}^{e}_{\mathrm{sem}},E_{\mathrm{ssl}}(\mathbf{x}_{e})\big),\]

上式中左侧两项分别是语音与环境的量化语义表示，右侧是各自干净来源经自监督编码器得到的特征，距离函数沿用主干的蒸馏损失。训练好之后，符号化与解码可简写为下面两式，前者表示编码器从混音直接给出两条流，后者表示两条流分别解码再相加得到混音。

\[(\mathbf{s},\mathbf{e})=\mathrm{CodecEnc}(\mathbf{x}),\]

\[\hat{\mathbf{x}}=D(\mathbf{z}_{s})+D(\mathbf{z}_{e}).\]

上两式中符号流各含全部帧，隐变量由符号查表加和得到，解码器参数共享但输入隐变量不同，因此既能联合重建，也能单独试听某一条流，这为后文分别计算语音词错误率和分析环境稳定性提供了条件。

### 生成器设计：大语言模型如何交错规划两条流并用引导强度调节侧重

生成器要回答的疑问是，分立符号已经有了，模型以什么顺序生成才能既保留身份又学到关联。论文把条件分布记为在给定说话内容与场景描述下两条流的联合分布，大语言模型作为时间主干，两个深度变换器作为各流的声学补全器。输入侧除了两段文字，还保留 CLAP 前缀，训练时以 0.8 概率用文本嵌入、以 0.2 概率用目标音频嵌入，推理时只用文本嵌入。内容与场景条件在训练时各自以 0.1 概率丢弃，以便推理时能分别做无分类器引导。

顺序设计是交错而非并行。下式把第 t 帧的语音符号块与环境符号块排成相邻位置，语音在前、环境在后。环境符号生成时能看到同帧语音符号，后续语音符号又能看到此前环境符号，两条流在整个序列中持续相互条件。并行方案则是在同一步用同一隐状态经两个输出头同时预测两块符号，同帧内部无法相互条件，单个隐状态还要同时支撑两种异质目标，容易相互干扰。

\[[\mathbf{s}_{1},\mathbf{e}_{1},\mathbf{s}_{2},\mathbf{e}_{2},\ldots,\mathbf{s}_{T},\mathbf{e}_{T}].\]

上式中每个下标块都包含一个语义符号加多个声学符号，方括号表示它们在自回归上下文中的先后关系。落实到实现，大语言模型每步只预测语义符号，声学符号由深度变换器沿码本深度逐个预测，语音流与环境流各用独立的 5 层变换器。预测完声学符号后，它们的嵌入与语义嵌入合并送回主干，因此每一步都以两条流的完整历史为条件。语义与声学各有分来源的交叉熵损失，环境侧权重取 0.5，语义损失还加了 0.05 的标签平滑，梯度上限裁剪为 5。

下图展示了这种 2 级结构，左侧是文字与前缀进入预训练大语言模型，中间是交错符号的回填环路，右上是深度变换器沿残差码本逐层预测的放大视图，右下是两路解码再相加。

[![原论文 Fig. 2：Overview of the proposed LLM-based speech-scene generation framework.](https://arxiv.org/html/2611.25503v1/main_model_diagram.svg)](https://arxiv.org/html/2611.25503v1/main_model_diagram.svg)

*论文图 2：Overview of the proposed LLM-based speech-scene generation framework（原论文 Fig. 2）。*

结合上图可以复述一次前向过程。底部两组文本符号分别代表场景与说话内容，顶部灰色大块逐列吐出蓝色语音语义符号与橙色环境语义符号，虚线回环表示已生成的符号列会作为下一步输入。右上小框说明每个语义符号如何连同主干隐状态进入深度变换器，再逐个产生该帧的 16 个声学符号。右侧解码器把两条流分别还原后相加，得到可播放的语音场景。

**预训练大语言模型 × 深度变换器 × 交错自回归：** 预训练大语言模型负责时间轴上的跨帧、跨流规划，每步只预测一个语义符号；深度变换器负责深度轴上的声学补全，以该步隐状态和语义符号为条件逐层预测声学符号。交错自回归把语音帧与环境帧排成相邻位置，让两类规划共享历史又各有专属隐状态。

推理时的可控权衡靠双条件引导实现。训练时随机丢弃条件使模型学会无条件、单条件与双条件 3 种隐状态，推理时把三者线性组合，同时推向更贴合说话内容与更贴合场景描述。

\[\mathbf{h}_{t}^{\mathrm{cfg}}=\mathbf{h}_{t}(c_{\mathrm{content}},c_{\mathrm{scene}})\\ +\gamma_{\mathrm{content}}\big[\mathbf{h}_{t}(c_{\mathrm{content}},c_{\mathrm{scene}})-\mathbf{h}_{t}(\varnothing,c_{\mathrm{scene}})\big]\\ +\gamma_{\mathrm{scene}}\big[\mathbf{h}_{t}(c_{\mathrm{content}},c_{\mathrm{scene}})-\mathbf{h}_{t}(c_{\mathrm{content}},\varnothing)\big],\]

上式中第一项是双条件隐状态，后两项分别是向内容与向场景的修正，系数分别控制两种贴合强度。替换主干隐状态后，语言模型头与深度变换器都从同一引导后状态采样，语义与声学保持一致。实验用内容强度固定为 1、场景强度取 3 到 5 来观察可懂度与场景相关性的此消彼长。

**模拟预训练 × 真实适应 × 指数滑动平均：** 模拟预训练用人工混合建立语音内容、场景描述与两条符号流的对应关系，明确各自职责；真实适应把整套模型暴露给同空间录制的混响与录音条件等混合无法复现的关联。指数滑动平均保留预训练阶段的参数记忆，抑制自动标注噪声长期微调对语言能力的侵蚀。

### 主实验验证：分立建模在相同仿真数据上已占优，真实适应再推近真实分布

评测要先讲清口径，否则数字无法比较。语音场景评测集采用经筛选的音频标题测试子集，每个样本有目标说话文字与场景标题。词错误率用大模型转写后与目标文字比较，越低表示说话越清楚，文中还区分在最终混音上测得的混合词错误率与在单独解码的语音流上测得的语音词错误率。场景相关性用生成混音与目标标题的 CLAP 嵌入余弦相似度平均值，越高越对题。音频质量用基于特征的音频分布距离，衡量生成集与参考集的分布接近程度，越低越好。主观评价另请 14 名听众对 20 个随机样本按 5 分制打分，分别评价语音自然度、场景相关性与总体质量，并给出置信区间。

词错误率用语音识别转写衡量是否把目标文字说对，越低越好；CLAP 相似度衡量生成混音与目标场景文字在联合嵌入空间的余弦接近程度，越高场景越对题；音频分布距离衡量生成集与参考集在特征分布上的远近，越低整体听感分布越接近真实。三者分别回答说清、说对场景、听感可信。

基线包含已公开的语音长文本扩散模型大小两档，以及在相同仿真数据上复训的沉浸式语音模型。语音长文本模型训练数据量是本文 2 倍以上，沉浸式模型因需要干净分量只能用仿真数据。需要提醒的是，参考录音本身是带噪真实录音且转写来自自动识别，因此参考的混合词错误率并不接近零，这里的词错误率衡量的是相对目标内容的可懂度，而非对参考的精确复刻。

下面这张表比较了相同仿真数据下的可懂度与场景相关性，以及真实适应后不同引导强度的权衡。表头方向为词错误率越低越好，相似度越高越好，分布距离越低越好。

| Method | Mix WER(↓) | Speech WER(↓) | CLAP(↑) | FAD(↓) |
| --- | --- | --- | --- | --- |
| GT | 20.91 | – | 0.356 | – |
| VoiceLDM-S | 46.90 | – | 0.235 | 4.14 |
| VoiceLDM-M | 8.44 | – | 0.210 | 5.27 |
| ImmersiveTTS | 7.91 | – | 0.247 | 4.03 |
| Simulated pretraining |  |  |  |  |
| Proposed | 6.43 | 5.26 | 0.255 | 4.76 |
| Real-world adaptation |  |  |  |  |
| Proposed-FT (CFG 1/3) | 6.27 | 5.25 | 0.264 | 4.17 |
| Proposed-FT (CFG 1/4) | 7.08 | 5.63 | 0.286 | 3.91 |
| Proposed-FT (CFG 1/5) | 7.31 | 6.10 | 0.293 | 3.71 |

上表最值得关注的是两层信息。第一层是相同仿真数据下分立流对单混合目标的优势，本文预训练版本混合词错误率 6.43%，低于沉浸式模型的 7.91%，相似度 0.255 高于对方的 0.247，说明即使不用真实数据，显式身份也同时帮助说清与说对景。第二层是真实适应与引导强度的权衡，场景引导从 3 提到 5 时相似度从 0.264 升到 0.293，分布距离从 4.17 降到 3.71，混合词错误率从 6.27% 升到 7.31%，内容更贴景、分布更贴真，但逐字准确性小幅回落。所有适应版本仍比全部基线更可懂，中间两档还拿到最低的分布距离。单独解码的语音流词错误率始终低于混音，说明语言内容在专用流中保存完好，混音测量中的额外误差多来自环境干扰而非说话本身。

主观评价的口径是同一评测集上的平均意见分，分数越高越好，重点看自然度、场景相关性与总体质量三项是否一致。

| Method | MOS-SN(↑) | MOS-SR(↑) | MOS-OQ(↑) |
| --- | --- | --- | --- |
| GT | 4.28 ± 0.13 | 4.37 ± 0.11 | 4.34 ± 0.11 |
| VoiceLDM-M | 3.21 ± 0.14 | 2.99 ± 0.14 | 3.25 ± 0.13 |
| ImmersiveTTS | 3.24 ± 0.13 | 3.09 ± 0.14 | 3.07 ± 0.12 |
| Proposed | 3.44 ± 0.11 | 3.39 ± 0.13 | 3.43 ± 0.12 |
| Proposed-FT | 3.57 ± 0.11 | 3.53 ± 0.13 | 3.48 ± 0.12 |

上表显示预训练版本已在三项上超过两个基线，真实适应版本进一步提升，尤其自然度从 3.44 升到 3.57，场景相关性从 3.39 升到 3.53。基线之间出现分化，沉浸式模型场景分更高而语音长文本模型总体质量分更高，前者长于跟随描述，后者受益于真实数据训练。结合客观表可以得出有条件的结论，在该评测集、该转写与嵌入实现下，分立建模先学好各自分量再适应真实关联的路线，三项主观指标同时占优，但优势幅度受样本量与听众规模限制，不宜外推为所有场景描述都成立。

干净语音生成是额外的泛化检验。论文在朗读语料的干净子集上测试，只给简单的性别相关场景描述。预训练版本词错误率已接近语音长文本模型，自然度估计明显更高，真实适应后 4 个子集的词错误率均为生成系统最低。这支持了作者的解释，干净语音与场景语音共享同一语音表示，差别只在于是否同时生成环境流，因此混合场景中学到的说话能力更容易迁回干净合成。当然，该结论只在朗读风格与性别描述这一有限条件下验证，未覆盖强口音或远场混响等更难情形。

### 消融验证：分立符号是否值得，哪怕它的重建分数反而更低

第一个消融回答分立表示本身是否必要。对照的混合基线直接用原始编解码器把整段场景压成单条符号流，生成模型结构与数据、优化、解码完全相同，只是用一个深度变换器预测全部残差层，每帧符号总数与分立方案两条流之和相当。编解码器层面的重建测试在 1000 段真实语音录音上进行，原始编解码器在分布距离与词错误率上反而更好，分立编解码器重建词错误率 4.94% 高于原始的 3.85%，分布距离 0.562 也略高于 0.533，只在相似度与自然度估计上略优。这说明分立方案付出了重建保真度的代价，基线在该层面并未被亏待。

下面这张表对比两种表示在生成阶段的表现，分为仿真预训练与真实适应两个阶段，指标方向与主表一致。

| Stage | Representation | WER(↓) | CLAP(↑) | FAD(↓) |
| --- | --- | --- | --- | --- |
| Simulated pretraining | Mixed | 11.33 | 0.235 | 6.66 |
| Simulated pretraining | Distinct | 6.43 | 0.255 | 4.76 |
| Real-world adaptation | Mixed | 8.76 | 0.239 | 6.30 |
| Real-world adaptation | Distinct | 6.27 | 0.264 | 4.17 |

上表的反差正是教学要点。预训练阶段分立方案词错误率 6.43% 远低于混合的 11.33%，相似度 0.255 高于 0.235，分布距离 4.76 远低于 6.66；真实适应后混合方案词错误率改善到 8.76%，但仍远高于分立的 6.27%，相似度与分布距离差距依然很大。重建更好不等于生成更好，因为混合符号把两种异质目标挤进同一预测空间，模型难以同时学好结构化语音与多样化环境。分立方案为每个来源保留专属预测空间，身份明确带来的学习收益超过了重建损失。这个判断成立的前提是两者生成预算与数据一致，且混合基线的每帧符号数已对齐，若改变码率或模型容量，差距大小可能变化。

### 顺序与稳定性分析：交错为何保可懂度，环境在说话时是否被压低

第二个消融比较交错与并行两种顺序。两者除顺序外其余相同，并行在同一步从同一隐状态经两个头同时预测两块符号，同帧内部互不可见。比较覆盖预训练与适应后 3 种引导强度，指标方向不变。

| Stage | Generation | CFG | CFG | WER(↓) | CLAP(↑) | FAD(↓) |
| --- | --- | --- | --- | --- | --- | --- |
| Stage | Generation | Content | Scene | WER(↓) | CLAP(↑) | FAD(↓) |
| Simulated pretraining | Parallel | 1 | 3 | 10.41 | 0.248 | 4.11 |
| Simulated pretraining | Interleaved | 1 | 3 | 6.43 | 0.255 | 4.76 |
| Real-world adaptation | Parallel | 1 | 3 | 9.68 | 0.271 | 3.41 |
| Real-world adaptation | Interleaved | 1 | 3 | 6.27 | 0.264 | 4.17 |
| Real-world adaptation | Parallel | 1 | 4 | 9.39 | 0.292 | 3.23 |
| Real-world adaptation | Interleaved | 1 | 4 | 7.08 | 0.286 | 3.91 |
| Real-world adaptation | Parallel | 1 | 5 | 10.87 | 0.296 | 3.07 |
| Real-world adaptation | Interleaved | 1 | 5 | 7.31 | 0.293 | 3.71 |

上表呈现稳定的分工差异。交错在所有阶段与引导下词错误率明显更低，例如预训练 1 比 3 时 6.43% 对比 10.41%，适应后 1 比 3 时 6.27% 对比 9.68%。并行则在相似度与分布距离上略优，例如适应后 1 比 5 时相似度 0.296 对比 0.293，分布距离 3.07 对比 3.71。作者推测单个隐状态同时支撑两种异质目标会干扰更结构化的语音目标，而交错为每条流分配专属位置与隐状态，并让环境看到同帧语音，从而保住可懂度。由于语音场景的首要要求是说清，论文最终采用交错顺序，但若应用更看重环境贴合而容忍转写误差，并行也并非一无是处。

环境稳定性分析关注连续环境声在说话期间是否被无意压低。方法是先用通用分离网络把生成场景拆成说话与环境，再用语音活动检测标出说话区，把环境响度表示为相对非说话区平均的相对值，曲线在说话起点与终点对齐后平均。公开权重的模型每场景生成 3 个种子并显示范围，演示页样本只在终点附近比较，因为其语音位于场景开头。读图时先看 0.2 侧的走势，平稳贴近零分贝表示环境不受说话调制，深谷表示说话时环境被压低。

[![原论文 Fig. 3：Environmental loudness around speech activity for different speech-scene generation models.](https://arxiv.org/html/2611.25503v1/ducking.svg)](https://arxiv.org/html/2611.25503v1/ducking.svg)

*论文图 3：Environmental loudness around speech activity for different speech-scene generation models（原论文 Fig. 3）。*

上图左右分别对齐说话起点与终点，纵轴是相对非说话区的环境响度，横轴是相对秒数。沉浸式模型在起点后明显下坠、终点前回升，演示页模型在终点后明显上扬，都表明说话期间环境被抑制。两条本方法曲线始终贴近参考线，在零分贝附近小幅波动，说明连续环境声在说话期间保持稳定。作者认为可能原因是单混合目标加帧级语音条件时，说话活动会作为副作用调制环境，而分立流降低了这种耦合。该分析依赖同一分离器与检测器，若分离本身在某类环境上失效，曲线形状会受影响，因此更适合作为定性诊断而非绝对响度标准。

跨流交互是否真实发生用注意力可视化检验。对适应后模型某段生成结果，把每层多头注意力平均后按流分组重排，语音在前、环境在后，对角块是流内注意，非对角块是跨流注意，颜色越亮权重越高。观察时先看非对角是否为空，再看浅层到深层的方向变化，最后看深层对角带与块状结构。

[![原论文 Fig. 4：Head-averaged self-attention of Proposed-FT at six layers for a generated scene.](https://arxiv.org/html/2611.25503v1/attention_map.png)](https://arxiv.org/html/2611.25503v1/attention_map.png)

*论文图 4：Head-averaged self-attention of Proposed-FT at six layers for a generated scene（原论文 Fig. 4）。*

上图 6 个面板覆盖从浅到深的层。浅层以对角为主，环境查询对语音的注意多于反向，与语音先于环境生成的顺序一致；中层语音查询也开始注意邻近帧的环境符号，条件变为双向；深层 4 个块都出现沿对角的亮带，表明每条流主要参考两条流的近期上下文，带内块状结构提示注意按声学内容成段聚集而非逐帧孤立。这支持交错上下文确实被模型利用，而不是两条独立序列的拼盘，但单样本可视化不能证明所有场景都有相同模式，仍需更多样本统计。

### 边界与复现：什么时候值得尝试，第一步核对什么，还缺哪些验证

把结论放回适用条件会更稳妥。真实适应提升场景相关性与分布接近程度，但所用真实录音并非为语音场景专门整理，转写与标题来自自动系统且含标注噪声，长时间适应会损伤可懂度，论文用指数滑动平均与较短的 10,000 步微调加以抑制。来源感知的编解码器训练语料规模与多样性小于大型通用编解码器，重建保真度已略低于原始主干，扩大数据与更好整理的真实场景可能进一步改善表示与生成。仿真阶段用增强后的野外口语而非干净朗读来缩小风格差距，但混合本身仍无法复现同空间录制的关联，因此预训练只能明确分工，关联必须靠真实数据补足。

值得尝试的情形是目标明确需要可懂说话叠加可控环境，且能接受双流码率与 2 级解码的复杂度，例如有声内容制作、游戏与虚拟场景配音、数据增强。若只需要干净语音或只需要环境音效，单任务模型更直接；若说话内容极短或环境以瞬态事件为主，稳定性分析中针对连续环境声的结论不一定适用。工程选型上，先根据应用在可懂度与场景贴合之间选定引导强度，内容强度固定、场景强度越大越贴景但逐字误差上升；需要单独试听或评测语音时，可直接解码语音流得到比混音更干净的可懂度估计。

复现第一步不是直接训练语言模型，而是核对编解码器与数据管线。确认能用混合波形复现两条时间对齐符号流，检查语义与声学分支的输入共享、码本不相交、干净来源仅作训练目标；确认仿真混合的信噪比范围、语音摆放、场景描述模板与性别标注是否与原文一致；确认评测的转写模型、CLAP 实现、分布距离特征与聚合方式一致，因为不同实现下的绝对数值不可比。生成侧从 0.6B 规模的预训练语言模型加 5 层深度变换器起步，核对交错顺序中语音在前、环境在后的位置，以及语义与声学损失权重、标签平滑与梯度裁剪。

尚未验证的范围包括强噪声与远场混响下的可懂度保持、长时场景中说话与环境的时间避让是否自然、分离器与检测器之外的独立响度测量，以及更大规模听众与更多样场景描述下的主观稳定性。代码与权重是三件不同的事，论文正文只给出第三方编解码器与检测器的公开链接，本文方法本身的训练代码与权重是否公开需以作者后续发布为准，不能把提到第三方链接理解为本文系统已可一键运行。

<details>
<summary>📎 论文与评分元数据</summary>

排名：前25% | 文档类型：方法研究 | [arXiv 原文](https://arxiv.org/abs/2611.25503v1)

</details>

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。

- 评分规则：type-aware-v1

- 评分模型：muse-spark-1.3-contributor

- 评分请求协议：openai_responses

---

[← 返回 2026-11-20 语音/音乐/音频论文速递](/audio-paper-digest-blog/posts/2026-11-20/)
