---
title: "Index-Translate: A Multilingual Translation Model Family -- Text, Speech, Controlled Dubbing, and Long-Document Translation"
date: 2026-10-02
draft: false
tags: [语音翻译, 指令微调, 多语言, 基准测试, 语音配音]
categories: [论文速递]
description: "论文以 150 语言共享中训底座解决通用翻译，再用通用、指令、梗三专家插值加针对性蒸馏保留约束能力，并为语音、音节控制、长文档单设训练路径，最强证据是 9B 长文档均值 0.7891、0.7683、0.8848 与 35B 通用翻译 0.8794 等，代价是质量与约束控制之间存在可测 trade-off。"
hiddenInHomeList: true
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_arxiv_id: "2609.40181"
paper_digest_workbench_contract: "researcher-workbench-v1"
paper_digest_reader_title: "一个底座加三类专训：Index-Translate 如何分开处理翻译质量、指令约束与长文档"
paper_digest_original_title: "Index-Translate: A Multilingual Translation Model Family -- Text, Speech, Controlled Dubbing, and Long-Document Translation"
paper_digest_arxiv_version: null
paper_digest_arxiv_versioned_id: null
paper_digest_arxiv_abs_url: "https://arxiv.org/abs/2609.40181"
paper_digest_arxiv_pdf_url: "https://arxiv.org/pdf/2609.40181.pdf"
paper_digest_primary_task: "语音翻译"
paper_digest_taxonomy_contract: "paper-taxonomy-flat-tags-compat-v1"
paper_digest_taxonomy_selection_contract: "paper-taxonomy-selection-v1"
paper_digest_taxonomy_registry_version: "paper-taxonomy-v1"
paper_digest_taxonomy_registry_sha256: "a3b75a149852076933ec2895de77c09c73667c8334bff046dde3b20b69ded03d"
paper_digest_taxonomy_concepts: [{"facet":"task","id":"task.speech-translation","label":"语音翻译"},{"facet":"method","id":"method.instruction-tuning","label":"指令微调"},{"facet":"setting","id":"setting.multilingual","label":"多语言"},{"facet":"artifact","id":"artifact.benchmark","label":"基准测试"},{"facet":"task","id":"task.dubbing","label":"语音配音"}]
paper_digest_primary_method: "指令微调"
paper_digest_score: 6.3
paper_digest_rank_bucket: "前50%"
paper_digest_document_type: "模型报告"
paper_digest_one_sentence: "论文以 150 语言共享中训底座解决通用翻译，再用通用、指令、梗三专家插值加针对性蒸馏保留约束能力，并为语音、音节控制、长文档单设训练路径，最强证据是 9B 长文档均值 0.7891、0.7683、0.8848 与 35B 通用翻译 0.8794 等，代价是质量与约束控制之间存在可测 trade-off。"
paper_digest_authors: [{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Tianjiao Li"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Mengran Yu"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Chenyu Shi"},{"affiliations":["Index LLM Team"],"name":"Lusheng Zhang"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Qisi Chen"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Yanshan Zhou"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Ji Qi"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Jingying Liu"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Yuang Feng"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Ziang Cui"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Tianxing Yan"}]
paper_digest_abstract_sha256: "453872e2dde2a6dd7407841cff68214ca22b0626235f020e9ca2412bfc97b0ae"
paper_digest_sidecars: {"citation.bib":{"sha256":"ff288dfb29101ba923f23829f7d18285c997fcd781505104bdc9bd74ea1b0610","url":"/audio-paper-digest-blog/data/papers/2026-10-02/2609-40181/citation.bib"},"citation.json":{"sha256":"bd6787b4ff1f0da8997ced2fea4400d1a2703e1f0bac29f721e1cb5508775311","url":"/audio-paper-digest-blog/data/papers/2026-10-02/2609-40181/citation.json"},"citation.ris":{"sha256":"ebb24040c3a47e22c2b7eb07d453c26fdac9e82e78366e17dc652f6fcdea89c4","url":"/audio-paper-digest-blog/data/papers/2026-10-02/2609-40181/citation.ris"},"rethink-context.json":{"sha256":"8f71772781acae94298134bf207ff667edaf0837496567c3aabdf6654a7f4fcd","url":"/audio-paper-digest-blog/data/papers/2026-10-02/2609-40181/rethink-context.json"}}
paper_digest_api_reader_contract: "beginner-researcher-v3"
paper_digest_api_reader_article_sha256: "64c3e01b0fd23b6b6e011bfb593d0d53105f0d8fa1fa815e5c7e2c80f8d7a167"
paper_digest_api_reader_plan_sha256: "6cc0b38238d9404036bead7b16c1a7ecf5739b77f9111208bdd5a90a60686927"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings-v4"
paper_digest_api_reader_source_bindings_sha256: "105618a81931aa7c99eb6bc79483ab75f4c3b2f5bd0dabf23d4c32b9e4436afe"
paper_digest_api_reader_source_table_count: 5
paper_digest_api_reader_source_formula_count: 2
paper_digest_api_reader_structured_artifacts_sha256: "b8b7eedff178c4fb7cbe05fed5c5d57b3bd3d201b3d9c928646267248ff281b8"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity-v1"
paper_digest_api_reader_author_identity_sha256: "3d53505b109cf7672d6400c563491c0b6cda7ef83b9b590ea67d88046217752e"
paper_digest_api_reader_author_count: 11
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity-v1"
paper_digest_api_reader_resource_identity_sha256: "86683c499ebc5197d14ab3720e7dc90dc6c51715de7c7a17cc7c2d355eff4175"
paper_digest_api_reader_resource_count: 0
paper_digest_api_reader_figure_persistence: "ephemeral-no-persisted-figure-assets-v1"
paper_digest_api_reader_decision_projection: "api-reader-decision-projection-v2"
---

# 📄 一个底座加三类专训：Index-Translate 如何分开处理翻译质量、指令约束与长文档

> 英文题目：*[Index-Translate: A Multilingual Translation Model Family -- Text, Speech, Controlled Dubbing, and Long-Document Translation](https://arxiv.org/abs/2609.40181)*

> 标签：#语音翻译 | #指令微调 | #多语言 | #基准测试 | #语音配音
>
> 评分：**6.3/10** | 创新 1.5/2 | 技术严谨 1/1.5 | 实验充分 1.2/1.5 | 清晰度 0.8/1 | 影响力 0.5/1.5 | 开源 0/1.5 | 可复现 0.3/0.5 | 工程/实践 1/1.5


## 👥 作者与机构

- Tianjiao Li：机构信息未在 arXiv HTML 中可靠披露
- Mengran Yu：机构信息未在 arXiv HTML 中可靠披露
- Chenyu Shi：机构信息未在 arXiv HTML 中可靠披露
- Lusheng Zhang：Index LLM Team
- Qisi Chen：机构信息未在 arXiv HTML 中可靠披露
- Yanshan Zhou：机构信息未在 arXiv HTML 中可靠披露
- Ji Qi：机构信息未在 arXiv HTML 中可靠披露
- Jingying Liu：机构信息未在 arXiv HTML 中可靠披露
- Yuang Feng：机构信息未在 arXiv HTML 中可靠披露
- Ziang Cui：机构信息未在 arXiv HTML 中可靠披露
- Tianxing Yan：机构信息未在 arXiv HTML 中可靠披露

## 📌 核心摘要

该工作处理150语言文本与语音翻译，输入覆盖短句、带结构术语风格约束的指令、语音音频与整本书籍，输出要求语义忠实、目标语言正确、音节数可控与跨章人名术语一致。其实际难点在于低资源语言易偏离目标语言，文化梗与社区表达难译准，多约束叠加时易顾此失彼，长文档还需维持全局一致。方法链条为共享多语言中段训练建立对齐基座，再为通用、指令、梗分别做监督微调与分组相对策略优化精修，接着经参数插值合并专家并以多教师在策略蒸馏补强弱项，最后为语音、音节控制与长文档接专用编码器、奖励或长上下文训练。与直接扩大单模型相比，该组合以共享基座分摊多语言对齐成本，再用合并加定点蒸馏保留互补的翻译与指令遵循技能。在FLORES-200上Index-Translate-9B的COMET-22为0.8789，与同表Hy-MT2-30B-A3B的0.8787持平，低资源指令场景错语言率最低。该结论在公开短句翻译上较可信，向自建裁判、长文档单次生成与端到端语音外推时证据变弱。原文未披露训练推理成本与硬件。

## 🔗 开源与复现资源

本次未形成可展示的已核验资源记录，开放状态尚未核实。

可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 输入是什么，输出是什么，为什么要拆成一个家族？

这篇论文的输入覆盖文字、语音、带长度要求的字幕句和整本长文档，输出对应译文、译文语音、指定音节数的译文和整文档译文。目标读者可以先把翻译理解成在保留原意的前提下换一种语言表达，再把内容生产中的附加要求理解成对输出的额外约束。论文要回答的核心问题是，小尺寸翻译模型中哪些能力可以共享一个底座，哪些需要专门训练或专门输出接口。

为此作者从 Qwen3.5 底座出发，先做多语言中期训练，再分出通用、指令、梗 3 个方向做监督微调与强化学习，最后用合并加蒸馏得到文本模型，并另设语音、配音音节控制、长文档 3 条专用路径。本文只讲论文实际做的任务与报告的数字，不把通用大模型的传闻能力当作本文证据。

为方便核对，先固定本文必须保留的关键信息。模型家族包含文本翻译、语音到文本与语音到语音、音节控制配音、原生整文档翻译，尺寸涉及 2B、9B 与 35B-A3B，语言覆盖 150 种。训练按中期训练、专家分训、参数合并、针对性蒸馏推进，评测区分通用翻译、指令跟随、低资源、垂直领域、语音、音节控制与长文档。后续各节按学习依赖展开，每节只承担一个教学任务，例子会明确标为例子。

### 同类路线在比什么，本文的对照点在哪里？

与本文同输入同目标的工作包括通用多语言翻译模型、指令跟随翻译、语音翻译、字幕配音长度控制和书籍长文档翻译。论文把比较锚定在可运行的同条件系统上，例如 Hy-MT 系列、TranslateGemma、North 翻译模型、Qwen3.5 底座、DeepSeek、GPT 与 Gemini 系列，以及 SeamlessM4T-v2 等端到端语音模型。教学例子是：若只比较类别名称而不固定输入长度、输出预算和裁判口径，就容易把类别差异误读为同条件胜负。

本文的特有对照在于把共享与专用分开验证。共享侧用中期训练语言覆盖与专家合并的消融说明收益与代价，专用侧用语音、音节、长文档的独立训练说明合并与蒸馏不能替代的控制能力。相关评测基准包括 FLORES、WMT、IFMTBench、字幕与书籍数据，以及自建的指令集、梗集、SandGlass 音节集和 NativeLongBench 长文档集。阅读时应把自动指标、模型裁判分数与人工可核对的例子分开，不把自动指标直接当成人评。

### 论文把翻译难题拆成哪几个可操作问题？

第一个问题是语言覆盖与通用能力如何兼得。扩大语言数有助于非核心语言，但中期训练可能先压低通用问答能力再部分恢复，因此需要同时报告翻译分与通用能力分。第二个问题是质量、守约束与文化适应能否共存。通用翻译追求忠实流畅，指令翻译要求结构术语占位符等硬检查，梗翻译要求还原非字面含义，三者监督信号不同，放在一起训练容易互相牵制。第 3 个问题是输入输出形态变化后，原有文本能力能否直接迁移。语音带来声学理解与时间戳，配音带来目标音节数，长文档带来数万 token 的持续生成，这些都超出句子级文本翻译的默认假设。

论文把前两个问题交给共享底座加专家合并处理，把第 3 个问题交给专用模型处理。是否需要专用的判断依据是实测的迁移效果，例如音节控制通过合并与蒸馏迁移很差，因而单设配音专家。长文档则单设原生整文档任务形式与基准，因为分块加术语表在概念层级与人名一致性上出现可复现的失败例子。

### 方法全景：一个样本走完底座到最终模型的哪几步？

先沿一个中文句子走向英文译文理解主路径。句子先被多语言中期训练后的底座表示成跨语言对齐的隐状态，再经通用、指令、梗 3 条专家路径分别学会忠实翻译、守约束翻译与文化意涵还原，接着三专家参数被加权平均成一个合并起点，最后用领域匹配教师在合并模型自己生成的输出上做针对性蒸馏，得到最终文本模型。语音样本则把音频先经编码器与连接器再进入同一类文本解码器，长文档样本则把整文档 1 次送入并 1 次生成完整译文。

**多语言中期训练 × 参数插值：** 多语言中期训练负责把 150 语言的对齐能力写入同一个底座，分工是提供可共享的翻译初始化；参数插值负责把通用、指令、梗三个专家的参数按 0.8 比 0.1 比 0.1 加权平均，分工是先合并互补能力而不重训；二者搭配的理由是底座先解决语言覆盖，插值再解决任务偏好冲突，组合意义是得到一个可继续做针对性蒸馏的统一起点。

下表是论文给出的家族分工总览，阅读时先确认每行任务与尺寸，再看哪几行共用文本底座、哪几行需要额外声学或长度接口。

| Model | Backbone | Task |
| --- | --- | --- |
| Index-Translate | 2B / 9B / 35B-A3B | Multilingual text translation and translation instructions |
| Index-Echo S2TT | 2B / 9B | Speech-to-text translation |
| Index-Echo S2ST | 2B / 9B | Speech-to-speech translation with voice conditioning |
| Index-Homura | 2B / 9B | Translation with a specified syllable count |
| Index-NativeLong | 2B / 9B | Native long-document translation |

从表中可以看到，文本翻译是共享底座的直接产物，语音到文本与语音到语音共用翻译解码器但增加声学路径，音节控制与长文档仍是文本模型形态但训练目标不同。这种安排对应论文的中心判断：能共享的是语言对齐与基本翻译能力，需要专训的是输入模态、输出长度与超长持续生成。

下面这张训练总览图把上述路径画成从底座到专家再到合并与蒸馏的流程，图中还标出三专家权重与教师监督回路，适合对照文字反复核对。

> **看图路径：** 1. 先从顶部 Qwen3.5 底座沿箭头走到多语言中期训练框，确认 150 语言与 token 预算标注；2. 再看中间三个专家分支各自的监督目标说明有何不同；3. 接着沿底部参数插值到目标蒸馏再到最终模型的实线主路径；4. 最后看下方领域匹配教师虚线回指的位置，理解监督来源

[![原论文 Figure 2：Training overview of the text-model family, including 2B, 9B, and 35B-A3B.](https://arxiv.org/html/2609.40181v1/training_overview_figure.svg)](https://arxiv.org/html/2609.40181v1/training_overview_figure.svg)

*论文图 2。原论文 Figure 2:：“Training overview of the text-model family, including 2B, 9B, and 35B-A3B.”。*

图中从上到下依次是底座、中期训练、三专家分支、参数插值、目标蒸馏与最终模型，下方教师框用虚线指回蒸馏环节。重点是合并权重只标注适用于已评测的 2B 与 9B 模型，教师按领域匹配提供 token 级监督，裁判奖励另有对抗式监督机制。读图时不要把箭头方向理解为梯度全部打通，后文语音部分会明确冻结范围，文本部分的冻结细节以原文报告为准。

### 组件如何分工：编码器、解码器、映射器各管什么？

文本侧的组件分工相对集中。底座提供多语言表示与生成能力，通用专家管翻译质量，指令专家管约束 adherence，梗专家管非字面含义与语用效果。语音侧分工更显式，音频编码器管声学理解，连接器管帧级映射，文本解码器管翻译生成，语音合成路径另管声音生成与说话人条件。音节控制不增加新模态组件，而是把目标音节数作为输入条件，让模型在措辞层面满足计数要求。长文档不增加新组件，而是把上下文窗口与训练 supervision 扩展到文档级。

**通用翻译专家 × 指令跟随专家：** 通用翻译专家分工是保证忠实流畅的跨语言转换，用参考型指标与充分性折扣监督；指令跟随专家分工是保证格式、术语、字幕音节等硬约束与风格软约束，用细则奖励监督；搭配理由是高质量翻译与严格守约束在单一训练中互相牵制，组合意义是通过先分训再合并保留两类行为，最后用蒸馏补齐合并后变弱的一侧。

**语音到文本翻译 × 语音到语音翻译：** 语音到文本翻译分工是把音频编码器与连接器接到文本翻译解码器，直接从声音理解源语并输出译文；语音到语音翻译分工是在冻结的语音到文本主干上加约 30M 参数的映射器，把译码器隐状态映射到语音语义层再合成目标语音并保留说话人条件；搭配理由是共用同一翻译主干可保证文本一致，组合意义是端到端配音在多数方向降低内容错误而不重学翻译。

**原生整文档翻译 × 术语表辅助分块翻译：** 原生整文档翻译分工是一次读入完整源文档并一次生成完整译文，让全文与译文历史同时可见以维持概念与人名一致；术语表辅助分块翻译分工是靠术语表与邻块上下文连接各块，分块生成再拼接；搭配比较的理由是后者即使有全源术语表仍可能混淆冰河时代与冰期等层级概念，组合意义是论文用对照说明整文档生成在长程一致性上的机制优势。

语音到语音的具体链路值得单独走一遍。源语音进入冻结的语音到文本主干得到译文与隐状态，隐状态经可训练映射器对齐到语音模型的语义层，再经语义模型、声码器与说话人嵌入生成目标语音。源音频同时提供参考提示与说话人条件，译文槽位被映射器输出替换。这种设计让文本翻译保持不变，只学习从文本隐状态到语音的映射，随后再做内容一致性奖励优化。

下面这张语音架构图把上述冻结与可训练边界画了出来，阅读时重点区分哪条路径更新、哪条路径冻结。

> **看图路径：** 1. 先看上面语音到文本分支从源语音到目标文本的四个模块顺序；2. 再看下面语音到语音分支中冻结主干与可训练映射器的区分；3. 观察说话人条件与参考提示从哪里接入合成路径；4. 对照底部三步训练顺序确认哪一步冻结主干

[![原论文 Figure 3：Index-Echo speech-to-text and speech-to-speech architecture.](https://arxiv.org/html/2609.40181v1/index_echo_s2tt_to_s2st.svg)](https://arxiv.org/html/2609.40181v1/index_echo_s2tt_to_s2st.svg)

*论文图 3。原论文 Figure 3:：“Index-Echo speech-to-text and speech-to-speech architecture. S2ST training aligns the mapper and then applies DiffRO; the S2TT backbone remains frozen throughout.”。*

图中上半是语音到文本，下半是语音到语音，橙色映射器是主要可训练新增部分，语音语言模型在对齐阶段保持冻结。底部训练顺序标明先做监督语音翻译，再做冻结模型对齐，最后做奖励优化且主干仍冻结。不要从模型名称推定未报告的梯度细节，凡原文未说明的参数更新范围都应记为缺项而非默认全量更新。

### 训练与构造：数据、奖励与合并按什么顺序发生？

中期训练按稳定加衰减的 2 阶段推进，混合通用回放、独立单语与平行翻译，并区分普通平行与以英语为锚点的枢轴组织。枢轴把同一内容的多语言版本连在一起，平行度统计对齐到同一内容的语言数，数据流权重决定采样频率。最终配方在常量阶段用通用、平行、单语，在衰减阶段用通用加两路枢轴，序列长度与批量与学习率按原文配方执行。长文档扩展在衰减期增大序列长度。

专家阶段统一走监督微调到强化学习的流程。通用翻译用前沿模型重写并过滤的平行数据，指令用百万量级十场景约束数据并混入通用能力数据，梗用精选文化用例。强化学习用分组策略优化，通用侧结合参考型质量分、目标语言有效性与充分性判断，指令侧用细则奖励分别处理硬门控与软约束，字幕约束还检查音节与时长一致性。梗侧用参考引导的裁判评估语境含义与语用效果。

通用翻译奖励把语言门控、参考型质量分与充分性折扣相乘，含义是任一环节失败都会拉低总奖励。

\[\displaystyle R_{\mathrm{gen}}\]

上式符号中语言门控检查目标语言是否正确，质量分来自参考型大模型指标，充分性分对遗漏与增添做乘性折扣。先理解输入是源文与生成译文加参考译文，计算目标是可优化的标量奖励，实现上与强化学习采样配合使用。

三专家合并用参数加权平均，权重和为 1，已评测的 2B 与 9B 用 0.8 比 0.1 比 0.1。

\[\theta_{\mathrm{merge}}=w_{G}\theta_{G}+w_{\mathrm{Instruction}}\theta_{\mathrm{Instruction}}+w_{M}\theta_{M},\qquad w_{G}+w_{\mathrm{Instruction}}+w_{M}=1.\]

上式符号中每个 theta 代表一个专家的全部参数，w 代表合并权重，输入是 3 个已训好的专家，计算目标是一个合并初始化，实现上是按权重直接平均参数而非拼接输出。合并后用领域匹配教师在学生生成上做反向散度蒸馏，重点补齐合并后仍弱的任务类型。

**目标蒸馏 × 对抗式裁判监督：** 目标蒸馏分工是用领域匹配教师在学生自己生成的输出上做反向散度监督，补齐合并后仍弱的指令与低资源方向；对抗式裁判监督分工是让奖励模型随策略输出迭代更新，防止裁判被后缀等投机模式糊弄；搭配原因是蒸馏与强化都依赖裁判质量，组合意义是先让裁判跟上失效模式，再让策略向更可靠的奖励优化。

对抗式裁判监督的动机是策略输出可能附加无依据标记或利用裁判漏洞，论文用奖励模型与策略交替更新、偏好排序加定量监督与历史回放来跟踪失效模式。早期研究中字幕质量与英译中指标随迭代提升被报告为使用该机制的依据，但不应把早期小模型的提升幅度直接当作本文最终模型的必然提升。

### 实验条件：测什么数据、用什么指标、怎么聚合？

文本评测用贪心解码与固定上下文窗口，训练阶段研究另行说明设置。通用翻译用 FLORES 与 WMT 系列，指令用自建指令集与 IFMTBench，领域用书籍、生物医学、社交噪声、影院字幕与网文，文化用梗集。指令评测用大模型裁判分别报告翻译质量与指令跟随，参考型指标用 COMET 系列，长文档用对齐后再打分的文档级指标。聚合时 FLORES 按方向平均，垂直领域取五域等权平均，长文档按长度组先平均再等权平均。

下表是文本评测集合的覆盖与切分，阅读时先确认每行条目数与方向数，再看低资源与指令扩展的来源语言，避免把不同聚合对象直接比较。

| Benchmark | Items | Coverage and split |
| --- | --- | --- |
| FLORES-200 | 126,000 | 420 directions among 21 languages; devtest; 300 per direction |
| FLORES low-resource pairs | 104,000 | 1,040 directions among 62 languages; devtest; 100 per direction |
| WMT24++ | 6,000 | English to 20 languages; test; 300 per direction |
| WMT26 | 4,897 | 23 directions covering 20 target languages |
| instTrans | 3,000 | Chinese to 20 languages; aligned evaluation set |
| instTrans low-resource | 2,793 | Chinese / English to low-resource languages; aligned evaluation set |
| IFMTBench | 7,064 | Translation instructions; preprocessing in Appendix B.6 |

从表中可以看到，主评测既有数十万量级的通用方向，也有数千量级的指令与文化用例，还有按章节计数的网文。条目数指的是被评测输入数，郭峰网文按章节计数。比较时必须同时核对数据集、模型版本、实验阶段、指标与聚合对象，数值相同不代表指标相同，百分点变化与相对百分比变化也不能混用。

长文档的数据与基准需要单独交代。下表是本书研究使用的书籍构成，长度按训练书的源语言 token 统计，中间一半分布单独给出，训练验证测试按著作划分以避免泄漏。

| Corpus | Original | Books | Train | Valid. | Test | Mean (K) | P25–P75 (K) |
| --- | --- | --- | --- | --- | --- | --- | --- |
| GuoFeng | Chinese | 140 | 130 | 4 | 6 | 171.6 | 56.7–87.7 |
| BWB | Chinese | 337 | 327 | 4 | 6 | 777.2 | 277.0–1205.4 |
| General Books | English | 306 | 292 | 3 | 11 | 103.2 | 72.3–127.5 |

从表中可以看到，郭峰与 BWB 是中文原创网文配英文译文，通用书籍是英文原创配中文译文，日文原创另作训练监督。基准从保留书籍中取连续段落，中文侧长度分组覆盖约 4K 到 64K，英文输入侧在最长组对应更大 token 范围。论文计划公开可共享的基准部分，但本次收到的证据未绑定可用资源，因此不能写代码数据已公开。

### 主结果：哪些数字支持共享底座，哪些需要专用模型？

通用与指令主结果显示，35B 预览版在 FLORES 与指令跟随上取得对照中最高，9B 在通用与指令上保持有竞争力，2B 超过同级小模型。低资源方向上 35B 通用质量最高且脱靶率低，9B 在低资源指令跟随与脱靶率上取得对照最优。垂直领域中 9B 在影院字幕上领先对照。通用能力上翻译专训模型低于同底座通用模型，说明翻译优化伴随通用问答能力的下降。语音到文本中回声模型取得最低的识别错误与时间戳误差，翻译分介于前沿多模态模型之间。语音到语音在多数尺寸方向组合上降低内容错误，中文到英文方向则管线更优。

下表把论文正文连续原句中实际出现的关键数字整理成可核对的宽表，列数满足对照需要，数值与单位保留原文写法，文本列只起定位作用。

| 类别 | 对象 | 数值 A | 数值 B | 数值 C | 数值 D |
| --- | --- | --- | --- | --- | --- |
| 通用主结果 | 35B-A3B 预览版 | 0.8794 | 0.8336 | 0.6901 | 76.76 |
| 音节控制 | Homura-9B 与 2B | 81.92% | 63.08% | — | — |
| 权重影响 | Homura-2B | 0.7615 | 0.6900 | 63.08% | 74.19% |
| 长文档均值 | NativeLong-9B | 0.7891 | 0.7683 | 0.8848 | — |
| 长组变化 | GuoFeng 对照与 9B | 0.7974 | 0.4939 | 0.7836 | 0.7382 |

表后需要同时讲收益与代价。收益是小尺寸模型通过共享底座在通用、低资源与指令上接近大模型与前沿模型，专用路径在音节命中率与长文档长组上拉开差距。代价是指令与长度约束会拉低翻译质量分，合并后部分指标相对通用父模型下降，蒸馏虽改善指令与脱靶率但也降低质量与梗分。未胜出项包括中文到英文语音到语音的内容错误、部分通用问答指标落后底座，以及长文档 2B 输出偶发重复，这些都应在复述时保留。

下面这张长文档曲线图把短组接近、长组分叉的现象可视化，适合理解覆盖率与质量如何随长度变化。

> **看图路径：** 1. 先确认横轴是中文侧长度分组且为对数间隔，纵轴越高越好；2. 比较三块面板中蓝色 9B 线随长度下降是否最平缓；3. 观察短组各模型接近、长组迅速分叉的位置；4. 注意图例中需要实验扩展或样本剔除的对照条件

[![原论文 Figure 4：Native long-document translation across Chinese-side length groups, reproducing the point…](https://arxiv.org/html/2609.40181v1/native_long_quality_figure.svg)](https://arxiv.org/html/2609.40181v1/native_long_quality_figure.svg)

*论文图 4。原论文 Figure 4:：“Native long-document translation across Chinese-side length groups, reproducing the point estimates in Table 12.”。*

图中三块面板分别是郭峰中译英、BWB 中译英与通用书籍英译中，横轴长度组为对数间隔，纵轴越高越好，未匹配块计零因此分数同时反映覆盖与质量。可以看到原生 9B 线随长度最平稳，对照在 32K 与 64K 明显下坠。读图时不要把某一步的相对位置推广为全程，也不要猜像素无法精确辨别的步数，未说明颜色含义时以图例文字为准，带星号与实验扩展的对照条件需单独注明。

### 消融与反证：拿掉覆盖、改权重、换教师会发生什么？

中期训练消融显示，常量阶段平衡混合在翻译与通用任务上占优，衰减阶段不同混合差距较小，枢轴与平行按比例混合在相近预算下结果接近。阶段推进上翻译分在常量与衰减期都提升，通用任务先降后部分恢复但仍低于底座。语言扩展把 2B 衰减数据从 20 余语言扩到 100 余语言后，非核心均值明显提升而核心均值基本不变，非核心脱靶率下降。若监督微调只保留 20 余语言，60 语言评测在数百步内明显下降且目标语言一致性大跌，说明低资源方向必须保留在训练中。

专家合并消融显示，参考混合在两尺寸上提升参考型质量分，但指令跟随相对通用父模型下降，梗在 2B 提升而 9B 略降。把通用权重从 1 降到 0.5 可提升质量分但指令分大跌，支持保留主导通用分支。目标蒸馏中大教师在指令分上最好，3 种变体都把低资源脱靶率从 4.2% 降到 2.2%，但质量与梗分下降，支持只做针对性使用。音节控制通过 4 路合并迁移很差，蒸馏也被报告对长度约束效果不好，因而需要专用强化学习。

下表用原文连续原句覆盖的数字对比长文档的短长行为，重点看对照随长度的跌落幅度而非单点高低。

| 语料 | 模型 | 4K 分 | 64K 分 | 5 组均值 |
| --- | --- | --- | --- | --- |
| GuoFeng | Qwen3.8 Flash | 0.7974 | 0.4939 | 0.7053 |
| GuoFeng | NativeLong-9B | 0.7836 | 0.7382 | 0.7891 |
| BWB | NativeLong-9B | 0.7733 | 0.7440 | 0.7683 |
| General Books | NativeLong-9B | 0.9016 | 0.8514 | 0.8848 |

表后解释应强调适用条件。长文档优势主要出现在 32K 与 64K 组，短组多模型接近，因此不能把长文档结论推广到所有长度。对照的失败模式各不相同，包括中途停止、重复不止、句子未完成或残留源语言，2B 在持续生成中也可能重复，反映容量限制。未评测边界包括输出上限不足的模型被排除主比较、部分请求被拒后取剩余样本平均，这些都改变了可比口径。

下面这张音节质量权衡图把专用强化学习的效果与代价画成从 SFT 到 RL 的移动，适合理解控制提升伴随的质量下降。

> **看图路径：** 1. 先确认横轴是翻译质量越高越好，纵轴是音节控制命中率越高越好；2. 沿实线箭头看从空心 SFT 点到实心 RL 点的移动方向；3. 再看绿色 2B 虚线箭头在提高奖励权重时的横纵变化；4. 比较右下基线点与左上控制点的分布差异

[![原论文 Figure 5：Quality and syllable-control trade-offs on SandGlass.](https://arxiv.org/html/2609.40181v1/homura_quality_control_figure.svg)](https://arxiv.org/html/2609.40181v1/homura_quality_control_figure.svg)

*论文图 5。原论文 Figure 5:：“Quality and syllable-control trade-offs on SandGlass.”。*

图中横轴质量越高越好，纵轴 10% 内命中率越高越好，实线箭头连接 SFT 到 RL，虚线箭头连接 2B 两种奖励权重。可以看到 RL 把命中率大幅推高但质量左移，提高音节奖励权重进一步推高命中率并继续压低质量。读图时先按图例确认 9B 与 2B 点的空实心含义，再比较基线在右下聚集而专用模型在上方的位置差异，不要把单样本标记误读为分布曲线。

### 限制与未验证点：哪些结论不能超出证据？

第一个限制是裁判依赖。指令质量、跟随分与音节质量多用大模型裁判，裁判本身可能被无依据后缀或对抗模式抬高分数，论文用对抗式监督缓解但未报告误判率，因此不能承诺裁判分数等于人工满意度。第二个限制是可比口径。长文档主比较排除输出上限不足的模型，部分对照用实验扩展或剔除被拒样本后平均，语音评测用自有视频集，这些条件变化都会影响数字的跨表比较。第 3 个限制是能力代价。翻译专训后通用问答低于底座，合并与蒸馏在提升指令与一致性的同时压低部分质量与文化分，说明没有免费的全面提升。

缺失证据不是技术错误，但需要明确记为缺项。原文未给出全部参数冻结与梯度路径的逐处说明，未测量延迟与推理成本，未报告裁判误判率与统计显著性，相关性不能当作因果。总体趋势不等于每组每步都成立，例如语音到语音中文到英文方向就不支持端到端更优，低资源不同语言的提升幅度也不同。复述时应使用报告显示表达直接结果，用支持表达有限解释，用可能待验证表达推测。

### 复现先做什么：按什么顺序固定条件？

先固定模型版本与解码条件。文本用最终合并加蒸馏版本并注明权重比例，贪心解码与上下文窗口按评测节设置，长文档用 256K 上下文与贪心解码，本地音节评测用贪心解码与输出上限，接口基线保留记录配置。凡训练阶段研究需单独标注所用阶段与专家配置，不能把消融用的早期合并直接当作最终模型。

再固定数据与指标口径。通用按方向平均，垂直领域取五域等权平均，长文档按文档内块平均再按文档平均最后按长度组等权平均，未匹配块计零。指令质量与跟随分开报告，硬检查失败则跟随计零，低资源同时报告质量、跟随与脱靶率。裁判模型与打分尺度必须与原文一致，预处理剔除与有效判断数也要记录，因为 IFMTBench 存在清洗子集与个别无效判断。

最后固定对照的可运行性。只保留原文实际可运行的策略作为收益依据，搜索最优与事后最优另行标注。长文档注意输出预算、实验扩展与被拒样本处理，语音注意分窗时长与时间戳缺失标记。若要复现家族，优先复现中期配方与三专家分训，再做合并权重扫描与针对性蒸馏，最后才进入语音映射器、音节奖励与文档监督 3 条专用路径。

### 何时值得尝试这条路线，如何一句话记住它？

当任务同时需要多语言覆盖与任务约束时，值得尝试先共享底座再分专家合并的路线，因为通用翻译、低资源一致性与指令跟随可以在 1 次合并加蒸馏后兼得，但要接受通用问答与部分质量指标的下降。当任务涉及配音时长、字幕音节或整书一致性时，不值得指望合并与蒸馏自动迁移长度控制，而应单设条件输入与奖励或文档级监督，因为论文的反证显示合并与 token 级蒸馏在该类约束上效果有限。当输入是语音时，可先复用文本翻译主干再学习声学与语音映射，因为内容一致性可以在冻结翻译的条件下优化。

一句话记住全文：共享解决语言覆盖，专训解决模态长度与长程一致，合并蒸馏负责在质量与约束之间选一个可部署的平衡点。对初学者而言，可核对的复述比修辞更重要，方法是按输入到输出走一遍样本，再核对数据集、基线、阶段、指标、单位与聚合口径，最后保留未胜出项与未评测边界。

<details>
<summary>📎 论文与评分元数据</summary>

排名：前50% | 文档类型：模型报告 | [arXiv 原文](https://arxiv.org/abs/2609.40181)

</details>

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。

- 评分规则：type-aware-v1

- 评分模型：muse-spark-1.3-contributor

- 评分请求协议：openai_responses

---

[← 返回 2026-10-02 语音/音乐/音频论文速递](/audio-paper-digest-blog/posts/2026-10-02/)
