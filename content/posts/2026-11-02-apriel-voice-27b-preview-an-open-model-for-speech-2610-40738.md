---
title: "Apriel Voice 27B Preview: An Open Model for Speech, Reasoning, and Tool Use"
date: 2026-11-02
draft: false
tags: [语音代理规划与工具使用, 语音对话系统, 知识蒸馏, 指令微调]
categories: [论文速递]
description: "论文要解决已训练好的文本图像模型如何新增语音输入并保留推理与工具能力，采用两阶段适配与按数据源区分的交叉熵和前向 KL 监督，在语音推理、对话体验与完整任务上验证效果，代价是本地在线教师与大规模语音暴露量的训练开销。"
hiddenInHomeList: true
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_arxiv_id: "2610.40738"
paper_digest_workbench_contract: "researcher-workbench-v1"
paper_digest_reader_title: "同一推理主干如何听懂语音并调用工具：Apriel Voice 27B Preview 解读"
paper_digest_original_title: "Apriel Voice 27B Preview: An Open Model for Speech, Reasoning, and Tool Use"
paper_digest_arxiv_version: 1
paper_digest_arxiv_versioned_id: "2610.40738v1"
paper_digest_arxiv_abs_url: "https://arxiv.org/abs/2610.40738v1"
paper_digest_arxiv_pdf_url: "https://arxiv.org/pdf/2610.40738v1.pdf"
paper_digest_primary_task: "语音代理规划与工具使用"
paper_digest_tags_contract: "paper-tag-flat-tags-v2"
paper_digest_tags_selection_contract: "paper-tag-selection-v2"
paper_digest_tags_registry_version: "paper-tag-catalog-v2"
paper_digest_tags_registry_sha256: "cdef54423b5dfc00a1d017ef6639446d2ecd1d9c1acf71c8eb4f6219a46b7ba8"
paper_digest_tags_concepts: [{"facet":"task","id":"task.voice-agent-planning","label":"语音代理规划与工具使用"},{"facet":"task","id":"task.speech-dialogue","label":"语音对话系统"},{"facet":"method","id":"method.distillation","label":"知识蒸馏"},{"facet":"method","id":"method.instruction-tuning","label":"指令微调"}]
paper_digest_primary_method: "知识蒸馏"
paper_digest_score: 6.5
paper_digest_rank_bucket: "前50%"
paper_digest_document_type: "模型报告"
paper_digest_one_sentence: "论文要解决已训练好的文本图像模型如何新增语音输入并保留推理与工具能力，采用两阶段适配与按数据源区分的交叉熵和前向 KL 监督，在语音推理、对话体验与完整任务上验证效果，代价是本地在线教师与大规模语音暴露量的训练开销。"
paper_digest_authors: [{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Aman Tiwari"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Akshay Kalkunte"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Akintunde Oladipo"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Jash Shah"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Tara Bogavelli"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Hoang Nguyen"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Nishanth Madhusudhan"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Vishal Juneja"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Sridhar Nemala"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Srinivas Sunkara"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Sathwik Tejaswi Madhusudhan"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Shruthan Radhakrishna"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Masoud Hashemi"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Kelechi Ogueji"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Khalil Slimi"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Saloni Mittal"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Pulkit Pattnaik"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Shashank Maiya"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Dhruv Jhamb"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Esakkivel Esakkiraja"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Katrina Stankiewicz"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Gabrielle Gauthier Melançon"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Fanny Riols"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Amit Saha"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Lakshmi Sirisha Chodisetty"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Nitin Aggarwal"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Anil Madamala"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Sagar Davasam"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Segan Subramanian"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Vikas Yadav"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Sai Rajeswar Mudumba"}]
paper_digest_abstract_sha256: "db08fcf9d4303d3d0535bbac20d8c52a6cd00e28015dcdb2d94183312d7d3799"
paper_digest_sidecars: {"citation.bib":{"sha256":"16226c226383afcfff2d899243441c1361e50edb8aeab9dfc6b0d3c0d404a820","url":"/audio-paper-digest-blog/data/papers/2026-11-02/2610-40738/citation.bib"},"citation.json":{"sha256":"30fccf9f0f90e6ce1d74468a5abdb2c23057d6bc438ea0623d974e2b9032fc64","url":"/audio-paper-digest-blog/data/papers/2026-11-02/2610-40738/citation.json"},"citation.ris":{"sha256":"079de2cb5429778c1bb714587add9f0a748b40a8db4af85155ec7befc7994756","url":"/audio-paper-digest-blog/data/papers/2026-11-02/2610-40738/citation.ris"},"rethink-context.json":{"contract":"paper-research-context-v2","sha256":"68ec8735ac7ba4305fb01408b791211a66f83c72ba1cfb7384f83dd1defb9542","url":"/audio-paper-digest-blog/data/papers/2026-11-02/2610-40738/rethink-context.json"}}
paper_digest_api_reader_contract: "beginner-researcher-v3"
paper_digest_api_reader_article_sha256: "bdf7c577b2a77362909e52a325ceb698fffb94be4ca94cc14030b688d4cfdb20"
paper_digest_api_reader_plan_sha256: "716aa2c9ef8ceec6bf1774240cf4203cd2ce87fb175078d8294072ffc4b604e9"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings-v4"
paper_digest_api_reader_source_bindings_sha256: "3540f2472b6ae6d59aac57d188011b99571238fb23dc63c633dc2e827dc033c3"
paper_digest_api_reader_source_table_count: 4
paper_digest_api_reader_source_formula_count: 4
paper_digest_api_reader_structured_artifacts_sha256: "573ffa2496331d99bcc28002b7e0440fd432b4c51393e849a9668992cd90324c"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity-v1"
paper_digest_api_reader_author_identity_sha256: "f065232406cb1e83c8d394f0420c038614ece217e376dca26ac2776a76479ae5"
paper_digest_api_reader_author_count: 31
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity-v1"
paper_digest_api_reader_resource_identity_sha256: "3167b3be9c88eb129186931b6e90bbeb66a926a26c38edd4700d81d87cc07f8c"
paper_digest_api_reader_resource_count: 0
paper_digest_api_reader_figure_persistence: "ephemeral-no-persisted-figure-assets-v1"
paper_digest_api_reader_decision_projection: "api-reader-decision-projection-v2"
---

# 📄 同一推理主干如何听懂语音并调用工具：Apriel Voice 27B Preview 解读

> 英文题目：*[Apriel Voice 27B Preview: An Open Model for Speech, Reasoning, and Tool Use](https://arxiv.org/abs/2610.40738v1)*

<!--paper-tag-hierarchy-v1:start-->

**研究分类**

- **研究任务**：[语音交互](/audio-paper-digest-blog/papers/?concept=task.speech-interaction) → [语音代理规划与工具使用](/audio-paper-digest-blog/papers/?concept=task.voice-agent-planning)；[语音交互](/audio-paper-digest-blog/papers/?concept=task.speech-interaction) → [语音对话系统](/audio-paper-digest-blog/papers/?concept=task.speech-dialogue)
- **研究方法**：[知识蒸馏](/audio-paper-digest-blog/papers/?concept=method.distillation)；[指令微调](/audio-paper-digest-blog/papers/?concept=method.instruction-tuning)

<!--paper-tag-hierarchy-v1:end-->

> 评分：**6.5/10** | 创新 1.2/2 | 技术严谨 1/1.5 | 实验充分 1.2/1.5 | 清晰度 0.8/1 | 影响力 1/1.5 | 开源 0/1.5 | 可复现 0.3/0.5 | 工程/实践 1/1.5


## 👥 作者与机构

- Aman Tiwari：机构信息未能在本次解析中与作者逐人可靠绑定
- Akshay Kalkunte：机构信息未能在本次解析中与作者逐人可靠绑定
- Akintunde Oladipo：机构信息未能在本次解析中与作者逐人可靠绑定
- Jash Shah：机构信息未能在本次解析中与作者逐人可靠绑定
- Tara Bogavelli：机构信息未能在本次解析中与作者逐人可靠绑定
- Hoang Nguyen：机构信息未能在本次解析中与作者逐人可靠绑定
- Nishanth Madhusudhan：机构信息未能在本次解析中与作者逐人可靠绑定
- Vishal Juneja：机构信息未能在本次解析中与作者逐人可靠绑定
- Sridhar Nemala：机构信息未能在本次解析中与作者逐人可靠绑定
- Srinivas Sunkara：机构信息未能在本次解析中与作者逐人可靠绑定
- Sathwik Tejaswi Madhusudhan：机构信息未能在本次解析中与作者逐人可靠绑定
- Shruthan Radhakrishna：机构信息未能在本次解析中与作者逐人可靠绑定
- Masoud Hashemi：机构信息未能在本次解析中与作者逐人可靠绑定
- Kelechi Ogueji：机构信息未能在本次解析中与作者逐人可靠绑定
- Khalil Slimi：机构信息未能在本次解析中与作者逐人可靠绑定
- Saloni Mittal：机构信息未能在本次解析中与作者逐人可靠绑定
- Pulkit Pattnaik：机构信息未能在本次解析中与作者逐人可靠绑定
- Shashank Maiya：机构信息未能在本次解析中与作者逐人可靠绑定
- Dhruv Jhamb：机构信息未能在本次解析中与作者逐人可靠绑定
- Esakkivel Esakkiraja：机构信息未能在本次解析中与作者逐人可靠绑定
- Katrina Stankiewicz：机构信息未能在本次解析中与作者逐人可靠绑定
- Gabrielle Gauthier Melançon：机构信息未能在本次解析中与作者逐人可靠绑定
- Fanny Riols：机构信息未能在本次解析中与作者逐人可靠绑定
- Amit Saha：机构信息未能在本次解析中与作者逐人可靠绑定
- Lakshmi Sirisha Chodisetty：机构信息未能在本次解析中与作者逐人可靠绑定
- Nitin Aggarwal：机构信息未能在本次解析中与作者逐人可靠绑定
- Anil Madamala：机构信息未能在本次解析中与作者逐人可靠绑定
- Sagar Davasam：机构信息未能在本次解析中与作者逐人可靠绑定
- Segan Subramanian：机构信息未能在本次解析中与作者逐人可靠绑定
- Vikas Yadav：机构信息未能在本次解析中与作者逐人可靠绑定
- Sai Rajeswar Mudumba：机构信息未能在本次解析中与作者逐人可靠绑定

## 📌 核心摘要

能听懂话的助手需要完成一连串工作：听清语音请求，结合截图和对话历史理解意图，选择并调用外部工具，再根据返回结果继续回应，难点是语音输入到达时仍要保持文本大模型的推理和行动能力。本文从已完成训练的文本图像解码器出发，先冻结解码器只学习语音编码器经投影器到其嵌入空间的映射，建立语音接口。随后放开解码器做广义任务学习，合成对话把语音片段和保留为文本的材料交织在一起，教师分布在部分来源上以交叉熵与前向KL约束输出。在思考模式并采用Cartesia Sonic 3.5合成的EVA评测中，该模型准确率51.27%与体验分74.13%，均高于同条件下Parakeet加Gemma4-26B基线的39.97%与3.93%。在同样思考模式与合成条件下的τ-Voice三领域等权平均中，该模型任务成功率pass@1为65.51%且语音可用前时延均值1.91秒，成功率高于开源二阶段基线UltraVox-v0.6的26.80%，时延低于其3.95秒。结论适用于英文为主的服务对话和三领域语音任务完成，对多语言泛化、配对显著性和各训练信号贡献尚未验证。原文披露了第二阶段使用48个学生GPU与16个教师GPU约三天的训练量级。

## 🔗 开源与复现资源

本次未形成可展示的已核验资源记录，开放状态尚未核实。

可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 语音助手真正要完成的是什么任务

论文讨论的输入是用户说出的话，可能还伴随截图、代码片段、表格或工单编号等文本图像上下文，目标是理解请求、结合对话历史推理、必要时调用工具并根据工具返回继续回应，最终完成事务。例如员工口头描述账户被锁定，同时给出截图和标识符，助手需要串起证据、开出工单并确认结果。

只把语音转写正确是不够的。转写对了但不遵守指令、不调用工具，任务仍然失败；文本上很强的推理能力也不等于换成语音输入后依然可靠。因此论文把语音当作通向通用能力的接口来评估，既测转写和翻译这类基础能力，也测语音指令遵循、语音推理、对话维持和端到端任务完成。

输出上有两类：直接给用户的回答文本，以及需要外部执行的工具调用。应用层负责执行工具、把工具结果送回同一推理主干，再把回答文本送给可替换的语音合成器。推理、对话决策和工具调用都放在同一个语音条件主干里，而不是把语音对话和后端推理拆成 2 个模型。

### 已有路线把语音推理和工具放在哪里

第一类是 3 段级联：自动语音识别先转写，语言模型再推理，语音合成再播报。优点是各部件成熟，缺点是语音理解与推理之间只经过文本转写，韵律打断和交互控制需额外处理。论文中的 Flux 与 Parakeet 加大模型的组合就属于这类对照。

第二类是语音条件模型：语音编码器输出声学特征，再经帧堆叠与学习到的投影器进入语言主干，推理时不需先产生转写。SLAM-ASR、Ultravox、SALMONN 和 BLSP 系列属此路线，区别在适配器结构、是否做分布蒸馏以及是否覆盖音频事件和音乐。Apriel Voice 沿用编码器加投影器结构，重点放在推理、指令遵循和完整交互的评估上。

第三类是原生语音生成或委托式系统：Llama-Omni、Moshi、Qwen3-Omni 把输出音频通路也建模进来，另一类把口语对话交给前端、推理工具交给后端。本文把对话、推理和工具调用决策都放在同一语音条件主干，工具执行和合成放在应用层。这种划分决定了后文训练只改接口与主干、不训练合成器的选择。

### 要在保留能力的前提下解决哪两个难题

起点是已后训练的 Gemma 4 26B-A4B 检查点，它能处理文本和图像，约 260 亿总参数、每词元约 40 亿活跃参数。问题是如何新增语音输入，同时保留原来有用的行为。直接在语音任务上微调容易学会转写却破坏推理和工具能力，不做适配则语音根本不可用。

论文把难题拆成两步：先让声学输入变得可理解，即学会从语音特征到解码器嵌入的映射；再让解码器学会在语音和混合对话中使用这些表示完成推理、澄清、确认和工具调用。第二步必须同时解决学新任务与防遗忘，因此需按数据源选择监督信号，并在语音、合成对话、工具交互和文本重放之间组织混合数据。

### 整体流程如何把三种输入变成回答或工具调用

系统保留原文本词嵌入与原视觉接口，新增一条语音通路。语音先经冻结的 Whisper large-v3-turbo 编码器得到 1280 维声学特征，再经可学习投影器变成解码器空间向量，替换输入嵌入序列中预留的音频位置。文本、图像表示与工具结果与语音向量一起作为同一主干的条件，主干按原输出词表生成回答或工具调用。

下图把输入编码推理回应与执行的关系画在一起，有助于理解哪些部件训练、哪些只是应用组件，建议先看 3 条输入路径再看两类输出去向。

> **看图路径：** 1. 先从左向右看语音文本图像三条路径如何进入同一主干；2. 再看主干右侧回答文本与工具调用分别交给谁执行；3. 最后看底部工具结果箭头如何回到主干形成多轮上下文

[![原论文 Figure 1：One reasoning backbone across speech, text, and images.](https://arxiv.org/html/2610.40738v1/model_architecture.svg)](https://arxiv.org/html/2610.40738v1/model_architecture.svg)

*论文图 1。原论文 Figure 1:：“One reasoning backbone across speech, text, and images.”。*

从图中可以看到，语音编码器与投影器之后汇入紫色推理混合专家主干，文本走词嵌入、图像走冻结视觉接口同样汇入该主干。主干输出分两路，一路是回答文本再经外部合成变成口语输出，另一路是工具调用交给应用运行时执行，执行结果再回到主干。冻结教师只在训练时出现，推理时不再需要。

为说明分工，论文区分两个阶段的更新范围。第一阶段只训练语音投影器，第二阶段训练投影器、语言主干与混合专家路由，其余仍冻结。投影器约 47.7M 参数，合成器始终在外部按需选择。

下面这张表直接回答谁在何时更新的问题，比较的是同一部件在 2 阶段的状态，指标是可训练还是冻结。

| Component | Stage one | Stage two |
| --- | --- | --- |
| Speech encoder | Frozen | Frozen |
| Speech projector | Trainable | Trainable |
| Language backbone and router | Frozen | Trainable |
| Original vision tower and bridge | Frozen | Frozen |

从表中可以看到，唯一在 2 阶段都可训练的是语音投影器，语言主干只在第二阶段放开，语音编码器与视觉部件始终冻结。这种安排把接口学习与能力改造分开，也为后文视觉保持仍需实测埋下伏笔，因为解码器变了之后即使视觉塔不动，图像推理也可能变化。

### 语音帧如何变成解码器能读的向量

编码器记为 E，输入波形为 a，输出是长度 Ta、每帧 1280 维的特征矩阵。投影器先把相邻 8 帧堆叠在一起，最后一组不足则补齐。序列长度压缩为约八分之一，但每组仍保留 8 帧原始特征，维度变为 10240。动机是减少送入解码器的语音长度，同时不丢弃帧内细节。

\[U=\operatorname{stack}_{8}(E(a))\in\mathbb{R}^{\lceil T_{a}/8\rceil\times 10240}.\]

上式中 U 是堆叠后矩阵，行数是向上取整的 Ta 除以 8，列数是 1280 乘以 8。接着无偏置线性层把 10240 维映射到 4096 维，经均方根归一化与 SwiGLU 门控压缩到 2048 维，再经第二线性层映射到 2816 维解码器空间。SwiGLU 把输入分成两半，一半经 swish 激活后门控另一半。两矩阵分别贡献 10240 乘 4096 与 2048 乘 2816 个参数，加上归一化尺度共计 47,722,496 个参数。

**语音编码器 × 语音投影器：** 语音编码器把波形变成声学特征序列，解决音频过长且与文本词表不对齐的问题；语音投影器把特征映射到解码器嵌入空间，解决主干只能读文本向量的问题；两者搭配后语音可直接参与同一主干的推理和工具决策。

投影后向量按段偏移与长度替换嵌入序列中的音频占位，允许多段音频与文本交错。图像仍走原视觉接口。响应分布是对每个位置以前缀、语音向量与上下文为条件的连乘。推理直接使用声学表示，不先产生转写，输出词表支持与文本相同的回答与工具调用格式。

### 目标回答与教师分布如何按数据源组合

每个学生样本有来自数据源 d 的目标回答，启用蒸馏时还有教师兼容上下文。对语音任务，学生看到语音或混合输入，教师看到对应文本视图；两者预测同一目标前缀的后续词。输入长度可不同，因为分布匹配只关心回答位置，不要求声学帧与转写词一一对齐。

\[\mathcal{L}_{i}=\alpha_{d}\,\mathcal{L}_{\mathrm{CE},i}+\beta_{d}\,\mathcal{L}_{\mathrm{FKL},i},\]

上式是按数据源加权的组合目标，alpha 控制交叉熵权重，beta 控制前向 KL 权重，至少其一为正。交叉熵拟合目标词，前向 KL 让学生在回答位置靠近冻结 Gemma 教师的全词表预测分布，温度为 1。纯交叉熵对应 beta 为 0，纯前向 KL 对应 alpha 为 0，两者都为正则为加权组合。采样频率由曝光权重决定，监督强度由这两个系数决定。

**交叉熵 × 前向 KL 散度：** 交叉熵让学生拟合任务目标回答，承担学新行为的分工；前向 KL 散度让学生分布靠近冻结教师在对应文本视图上的预测，承担保留原有行为的分工；两者按数据源加权组合后可同时教新任务并约束偏离。

这种设计允许灵活分工：任务目标教期望回答、推理链与工具行为，教师分布把已有行为迁移到语音并在重放上下文上约束漂移。前向 KL 不只用于纯文本保留，也用于选定语音任务。若交叉熵与前向 KL 掩码或归一化不同，混合解释只在两者都监督的位置按有效词权重成立。

### 两阶段数据与合成对话如何构造

第一阶段学输入接口，数据是多语转写、翻译与续写，投影器训练而主干冻结。共 18.17M 样本，分布在 152 个名称下 1164 个配置中，包括 Common Voice、GigaSpeech、People's Speech、LibriSpeech 与 CoVoST 2 子集。两轮各覆盖 32.2k 小时音频，每轮约 1.9367B 总词元、631.7583M 带监督词元。第二阶段拓宽任务并更新投影器与主干，含数学、科学、通用对话、含噪交互、工具使用与文本重放，3 轮每轮 61.5k 小时音频加文本，每轮约 17.5B 总词元、2.6B 带监督词元，3 轮共约 52.6B 总词元暴露。

下图把 2 阶段目标、训练对象与监督来源放在一起，建议按训练对象是否冻结来阅读，注意虚线教师路径只在训练时存在。

> **看图路径：** 1. 对比第一阶段只训投影器与第二阶段同时训主干的差异；2. 看配对视图如何分别送给学生和冻结教师；3. 看右下角按数据源区分的监督如何汇合目标与分布

[![原论文 Figure 2：Learning a speech interface, then broadening task capability.](https://arxiv.org/html/2610.40738v1/training_recipe.svg)](https://arxiv.org/html/2610.40738v1/training_recipe.svg)

*论文图 2。原论文 Figure 2:：“Learning a speech interface, then broadening task capability.”。*

图中上半部分显示第一阶段训练投影器而保持主干冻结，第二阶段训练投影器、主干与专家路由；下半部分显示配对任务视图分别送给学生与冻结教师，监督目标与全词表分布汇入按数据源区分的监督模块。底部注明语音编码器与视觉部件 2 阶段都冻结，曝光权重决定采样，系数决定监督。

\[q_{d,t}=(1-\lambda_{d})e_{y_{t}}+\lambda_{d}p_{0,t},\qquad\lambda_{d}=\frac{\beta_{d}}{\alpha_{d}+\beta_{d}}.\]

上式是相同掩码下的软目标解释，lambda 由 beta 占两者之和的比例决定目标混合，alpha 加 beta 决定整体缩放。合成管线先在文本上构造含用户请求、助理目标、工具调用与结果的对话，再自动选择部分用户内容转为音频。策略包括说完整轮、只说生成性指令、只说问题而把材料留作文本、说朗读内容、说多个不连续片段。同一对话共用一个参考音色，长句按句子切块并受时长约束。

**语音视图 × 文本视图：** 语音视图是学生看到的混合输入，其中部分用户区间被合成为音频；文本视图是教师看到的对应纯文本对话，保留相同任务结构；两者配对后教师分布可作为语音输入的软目标，实现跨模态行为迁移。

下面流程图说明配对视图从何而来，建议关注哪些内容保留为文本、哪些转为语音，以及保真检查在何处拦截错位。

> **看图路径：** 1. 看合成对话到选片段再到转语音最后保真检查的主链；2. 看示例中编号保留为文本而请求转为音频的配对；3. 注意助理目标和工具消息始终为文本的标注

[![原论文 Figure 3：From synthetic task dialogues to speech-conditioned training examples.](https://arxiv.org/html/2610.40738v1/synthetic_data_pipeline.svg)](https://arxiv.org/html/2610.40738v1/synthetic_data_pipeline.svg)

*论文图 3。原论文 Figure 3:：“From synthetic task dialogues to speech-conditioned training examples.”。*

图中主链是先构造合成对话，再选择用户片段、转为语音、做保真检查。下方示例把资产编号保留为文本，把签到请求转为音频，配对导出保留角色顺序、音频偏移与原文视图。助理目标与工具消息始终为文本，保真检查降低错位但不保证任务本身正确。

### 在线蒸馏的系统代价如何被压缩

在线全词表蒸馏的代价在教师前向与分布传输。实现上教师与学生用不同工作器，学生用全分片数据并行分片状态，教师只做前向。学生把教师上下文经同节点 GPU 点对点发给教师工作器，全词表路径以 BF16 返回对数几率，节点内通信而学生集合通信跨训练进程组。第二阶段用 8 个节点、每节点 2 张教师卡加 6 张学生卡，共 16 张教师卡与 48 张学生卡，均为 NVIDIA H100 80 GB，优化后完整训练约 3 天。

下图展示本地通信与重叠计算的安排，时间轴宽度只是示意，不代表实测时长，建议先看左右两栏再看检查点操作。

> **看图路径：** 1. 看每节点内教师卡与学生卡的分工与传输方向；2. 看下一批教师推理与当前批学生计算如何重叠；3. 看检查点处排空保存与重启流水线的操作

[![原论文 Figure 4：Local online supervision with one-batch lookahead.](https://arxiv.org/html/2610.40738v1/online_teacher_schedule.svg)](https://arxiv.org/html/2610.40738v1/online_teacher_schedule.svg)

*论文图 4。原论文 Figure 4:：“Local online supervision with one-batch lookahead.”。*

图中左侧显示教师流量不出节点，右侧显示收到当前批教师结果后立即发出下一批请求，使下一批教师推理与当前批学生前向、融合损失及反向更新重叠。理想稳态每步时间不小于学生时间与摊销后教师时间的最大值，实际重叠受语音长度差异与排队影响。检查点前需同步决策、排空未完成教师请求再保存。

\[\nabla_{z_{\theta,t}}\mathcal{L}_{i}=\frac{\alpha_{d}(p_{\theta,t}-e_{y_{t}})+\beta_{d}(p_{\theta,t}-p_{0,t})}{|S_{i}|}.\]

上式是学生对数几率上的梯度，分子是加权后的预测与目标之差加上预测与教师分布之差，分母是监督位置数。冻结教师不接受梯度。为避免保存稠密 FP32 概率中间量，核先在全词表上算归一化子再按词表分块重建概率，反向只算学生相关项。优化用 BF16 混合精度、激活检查点与融合多张量 AdamW，峰值学习率 4 乘 10 的负 6 次方，20% 预热后余弦衰减到 10%，梯度裁剪 1.0。

### 用什么条件测推理对话与保持

评估围绕 3 个问题：语音能否支撑推理、指令遵循与工具调用；这些能力能否变成多轮对话与完整任务；适配后文本与图像能力变化如何。基础能力用 LibriSpeech、mu-Bench、FLEURS、Earnings21、GigaSpeech、AMI 的词错率与 CoVoST 2 的 BLEU；语音推理用 Big Bench Audio、Speech-GSM8K、SpokenSquad、AlpacaAudio、IFEval 与 MT-Bench 音频版；工具调用用 Speech-BFCL。

**EVA-A × EVA-X：** EVA-A 衡量服务准确性，要求语音保真、交互忠实和任务完成同时通过；EVA-X 衡量对话体验，要求简洁、推进顺利和轮次管理同时通过；两者搭配后既能看到是否做对事，又能看到对话过程是否可用。

对话与任务用 EVA、tau-Voice、tau2-Bench 与 EnterpriseOps-Gym。EVA 在 639 个案例上测服务准确与体验，覆盖航空 150、信息技术服务管理 240、医疗人力资源 249 三域，标题值取三域等权平均。EVA-A 要求语音保真、忠实与任务完成同时通过，EVA-X 要求简洁、推进与轮次管理同时通过，都是复合通过率。tau-Voice 测语音任务完成与首音频延迟，EnterpriseOps-Gym 区分严格任务成功与验证器成功。

解码默认温度 1.0、top-k 64、top-p 0.95，识别翻译用温度 0.4。思考与非思考指推理模式是否开启。EVA 与 tau-Voice 用思考模式与 Cartesia Sonic 3.5 合成，tau2 内部比较用 GPT-5.2 作用户模拟器。对照含端到端语音到语音、私有混合 3 段级联、开源 2 段模型，类型来源不同，比较时需注意合成器与任务限制是否一致。

### 语音推理与基础识别达到什么水平

思考模式下 Big Bench Audio 98.90，Speech-BFCL 81.13，音频 IFEval 86.47，MT-Bench 86.19，平均 85.84。论文称这是开源 2 段中最高，超过 Gemma4-12B-IT 与 Audex-30B-A3B，但 UltraVox 在 MT-Bench 上仍更高，需按单项看而非只看平均。基础识别上 LibriSpeech 干净与困难集分别为 2.23% 与 5.15% 词错率，翻译平均 BLEU 42.87，接近 GPT-realtime-2.1 的 43.72。词错率越低越好，BLEU 越高越好。

**任务成功率 × 验证器成功率：** 任务成功率要求一条轨迹上所有终态检查全部通过，衡量端到端是否真正完成；验证器成功率统计单个检查的通过比例，衡量部分进展；两者搭配后可区分完全失败、部分完成和完全成功。

这些数字成立于 AU-Harness 的任务定义与解析、温度 0.4 的识别设置以及各自建议超参数。推理模式选择与任务有关，部分识别与函数调用在非思考模式下反而更高，不能把思考当全任务最优。跨类型比较要小心阶段差异：3 段级联把识别与推理分开，2 段把语音投影进主干，端到端直接生成语音，同为开源 2 段的对照才是最直接比较对象。

### 对话体验与完整任务的取舍在哪里

下表比较 EVA 分项等权平均，比较问题是同一语音系统在准确与体验的哪些分项上占优，EVA-A 与 EVA-X 都要求各自组内同时通过，分项均为百分率且越高越好。

| Component | Parakeet + Gemma4-26B | Apriel Voice |
| --- | --- | --- |
| Speech fidelity | 99.78 | 98.89 |
| Task completion | 60.0 | 69.94 |
| Turn taking | 40.54 | 86.52 |

表中 Apriel Voice 语音保真 98.89%，任务完成 69.94%，简洁 86.80%，轮次管理 86.52%；对照 Parakeet 加 Gemma4-26B 轮次管理仅 40.54%，对话推进 82.67% 高于本文 67.76%，忠实度 66.33% 高于本文 43.49%。这说明本文强在节奏与简洁、弱在忠实度，标题值上 EVA-A 51.27% 与 EVA-X 74.13% 的高体验主要来自轮次与简洁，而非所有分项全胜。

完整任务上 tau-Voice 平均 65.51% 成功、1.91 秒延迟，分域为航空 69.33% 与 2.22 秒、零售 81.58% 与 1.79 秒、电信 45.61% 与 1.73 秒。开源 2 阶段对照成功率多在 17% 到 27% 且延迟更高，Gemma4 的 3 阶段级联成功率相近但延迟约 3 秒。电信域明显偏低，说明平均数掩盖了域间差异，部署到电信流程时不能直接套用总平均。

### 文本图像与企业工具能力保留了多少

下表比较企业工具场景的严格成功与验证器成功，比较问题是增加干扰工具后语音适配是否破坏文本智能体行为，斜杠前后分别为任务成功率与验证器成功率，越高越好。

| Tools | Gemma 4 26B-A4B (T) | Apriel Voice 27B Preview (T) | Apriel Voice 27B Preview (NT) |
| --- | --- | --- | --- |
| Oracle | 22.7 / 57.8 | 23.0 / 57.6 | 14.7 / 44.7 |
| +5 tools | 23.4 / 60.2 | 24.7 / 61.1 | 16.0 / 46.2 |
| +10 tools | 23.5 / 60.0 | 23.6 / 59.9 | 15.9 / 44.9 |

表中思考模式下本文与 Gemma 基线在 oracle 工具时为 23.0/57.6 对 22.7/57.8，增加 5、10、15 个干扰工具后本文为 24.7/61.1、23.6/59.9、23.7/59.4，非思考模式仅 14% 到 16%。这支持文本工具行为基本保留且思考模式明显更好的判断，但也显示干扰工具数与成绩非单调，oracle 结果也不能当作部署可得提升。

下表比较图像能力，比较问题是解码器变化后冻结视觉接口是否仍能维持原有水平，OCRBench 按 1000 分计其余按 0 到 100 计，越高越好。

| Benchmark | Gemma 4 26B | Apriel Voice 27B Preview |
| --- | --- | --- |
| MathVision (M) [47] | 64.14 | 67.10 |
| MMMU-Pro [52] | 70.23 | 69.88 |
| CharXiv (reasoning) [50] | 46.80 | 48.90 |

表中 MathVision MINI 从 64.14 升到 67.10，CharXiv 推理从 46.80 升到 48.90，ChartQAPro 从 63.21 升到 63.68，其余六项略降，如 MMMU-Pro 从 70.23 到 69.88。九项中三升六降，说明保持大体接近但不是全面不降。文本上 MMLU-Pro 84.42 对 85.27 略降，GPQA Diamond 80.40 对 77.80 略升，tau2 思考模式 70.95% 对 68.93% 提升 2.02 个百分点，非思考下降 4.09 个百分点，推理模式影响显著。

### 哪些结论不能超出证据范围

多语能力有限是明确局限。论文优先英语语音理解、推理与指令遵循，主要多语证据只有语音翻译，英语表现不能推出其他语系同样可靠，多语鲁棒性不均是后续重点。

比较条件也不完全一致。内部与公开结果在提示、语言覆盖、输出模态、推理预算、评判与任务限制上不同，聚合分不代表配对显著、非劣效或对所有前沿系统的受控排名。识别平均只针对所列子集，公开与内部计分相同时也可能不同。

数据与归因同样受限。合成生成与蒸馏可能传播错误目标或教师错误预测，转换保真检查会漏检且不覆盖自然语音变异。评估针对组合配方，没有对单个数据或监督选择的因果消融，冻结视觉部件也不能保证经变化解码器后图像推理不变，向其他主干家族的迁移未经验证。

### 复现第一步要准备什么

复现应从起点检查点与冻结关系做起：拿到 Gemma 4 26B-A4B 后训练文本图像主干，冻结 Whisper large-v3-turbo 编码器与视觉塔桥，先只训练约 47.7M 参数的投影器做转写翻译续写，再放开投影器、主干与路由做语音任务、合成对话、工具交互与文本重放。关键超参数是第二阶段峰值学习率 4 乘 10 的负 6 次方、20% 预热、余弦衰减到 10%、梯度裁剪 1.0、BF16、前向 KL 温度 1。

数据上需复刻配对导出：保留系统指令、助理目标与工具消息为文本，只把所选用户区间转为音频，同一对话共用参考音色，记录音频偏移与原文视图，并做片段校验与识别评判。工程上需同节点本地教师、全词表融合核与一批次前视重叠，否则全词表在线监督成本难以承受。本次未发现来源绑定且完成校验的资源，不得声称代码模型或数据已公开，来源未确认不是论文技术缺陷。

### 什么时候值得尝试以及还缺哪项验证

当任务需要语音直接触发推理与工具调用、且希望文本图像与语音共用同一决策主干时，该配方值得尝试。它的价值在于把接口学习与能力改造分开，并用按数据源区分的监督同时教新行为与约束漂移，在所测英语对话体验与延迟权衡上表现较好。

尝试前应确认条件：评测用思考模式与特定合成器，tau-Voice 延迟含合成，EVA 标题值为三域等权平均，电信域与忠实度分项相对较弱。若场景是电信流程或对忠实度要求极高，不能只看总平均。

还缺的验证是受控消融：投影器结构、合成对话比例、交叉熵与前向 KL 权重各自贡献多少，论文未给出因果分解；自然噪声、口音、打断与多语对话的覆盖也需补测。补上这些后，才能判断收益来自哪部分监督，以及在新领域与新主干上是否依然成立。

<details>
<summary>📎 论文与评分元数据</summary>

排名：前50% | 文档类型：模型报告 | [arXiv 原文](https://arxiv.org/abs/2610.40738v1)

</details>

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。

- 评分规则：type-aware-v1

- 评分模型：muse-spark-1.3-contributor

- 评分请求协议：openai_responses

---

[← 返回 2026-11-02 语音/音乐/音频论文速递](/audio-paper-digest-blog/posts/2026-11-02/)
