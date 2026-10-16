---
title: "CoSTA: Compressed Speech Token Adaptation for Efficient Spoken Dialogue Models"
date: 2026-10-16
draft: false
tags: [语音对话系统, 参数高效微调, 多语言, 高效推理]
categories: [论文速递]
description: "CoSTA 针对语音对话模型生成与合成共用长语音 token 序列导致推理贵的问题，用 BPE 压缩扩展生成词表并经发音与对话两阶段适配、推理时确定性展开回原空间，在 Step-Audio 2 mini 上实现约 1.7 倍展开后语音 token 生成速度并保持质量，代价是一次性增加约 6% 词表参数与两阶段适配训练。"
hiddenInHomeList: true
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_arxiv_id: "2610.21143"
paper_digest_workbench_contract: "researcher-workbench-v1"
paper_digest_reader_title: "CoSTA：让对话模型少说几步、合成时再展开的语音 token 解耦"
paper_digest_original_title: "CoSTA: Compressed Speech Token Adaptation for Efficient Spoken Dialogue Models"
paper_digest_arxiv_version: 1
paper_digest_arxiv_versioned_id: "2610.21143v1"
paper_digest_arxiv_abs_url: "https://arxiv.org/abs/2610.21143v1"
paper_digest_arxiv_pdf_url: "https://arxiv.org/pdf/2610.21143v1.pdf"
paper_digest_primary_task: "语音对话系统"
paper_digest_tags_contract: "paper-tag-flat-tags-v2"
paper_digest_tags_selection_contract: "paper-tag-selection-v2"
paper_digest_tags_registry_version: "paper-tag-catalog-v2"
paper_digest_tags_registry_sha256: "cdef54423b5dfc00a1d017ef6639446d2ecd1d9c1acf71c8eb4f6219a46b7ba8"
paper_digest_tags_concepts: [{"facet":"task","id":"task.speech-dialogue","label":"语音对话系统"},{"facet":"method","id":"method.peft","label":"参数高效微调"},{"facet":"setting","id":"setting.multilingual","label":"多语言"},{"facet":"research_focus","id":"research_focus.efficiency","label":"高效推理"}]
paper_digest_primary_method: "参数高效微调"
paper_digest_score: 7.0
paper_digest_rank_bucket: "前50%"
paper_digest_document_type: "方法研究"
paper_digest_one_sentence: "CoSTA 针对语音对话模型生成与合成共用长语音 token 序列导致推理贵的问题，用 BPE 压缩扩展生成词表并经发音与对话两阶段适配、推理时确定性展开回原空间，在 Step-Audio 2 mini 上实现约 1.7 倍展开后语音 token 生成速度并保持质量，代价是一次性增加约 6% 词表参数与两阶段适配训练。"
paper_digest_authors: [{"affiliations":["Institute of Automation, Chinese Academy of Sciences","School of Artificial Intelligence, University of Chinese Academy of Sciences"],"name":"Yingzhuo Deng"},{"affiliations":["Institute of Automation, Chinese Academy of Sciences","School of Artificial Intelligence, University of Chinese Academy of Sciences"],"name":"Chong Li"},{"affiliations":["Institute of Automation, Chinese Academy of Sciences","School of Artificial Intelligence, University of Chinese Academy of Sciences"],"name":"Bingxin Liu"},{"affiliations":["School of Artificial Intelligence, University of Chinese Academy of Sciences"],"name":"Yi Shu"},{"affiliations":["Institute of Automation, Chinese Academy of Sciences","School of Artificial Intelligence, University of Chinese Academy of Sciences"],"name":"Tianyu Peng"},{"affiliations":["Institute of Automation, Chinese Academy of Sciences","School of Artificial Intelligence, University of Chinese Academy of Sciences"],"name":"Can Xie"},{"affiliations":["Institute of Automation, Chinese Academy of Sciences","School of Artificial Intelligence, University of Chinese Academy of Sciences"],"name":"Siyao Song"},{"affiliations":["Institute of Automation, Chinese Academy of Sciences"],"name":"Shuo Ren"},{"affiliations":["Institute of Automation, Chinese Academy of Sciences","School of Artificial Intelligence, University of Chinese Academy of Sciences"],"name":"Jiajun Zhang"}]
paper_digest_abstract_sha256: "3b4f853bfd4cd1d0f25a52c816a49cc3dc19cffaa143a4484a626d9d7af5ad08"
paper_digest_sidecars: {"citation.bib":{"sha256":"59ea01631d1214e478d5b048a89ac91da34ecb86cf2b1f3bcedaf4d6b9439295","url":"/audio-paper-digest-blog/data/papers/2026-10-16/2610-21143/citation.bib"},"citation.json":{"sha256":"c0cc5a0acbd4e934a9e8c7897bbb6716b7e10bd38a9fd57854483335267cb451","url":"/audio-paper-digest-blog/data/papers/2026-10-16/2610-21143/citation.json"},"citation.ris":{"sha256":"2701e64e98fea4c3fbb32db624fe2bd51b1a80268723368909b3f228c6d93d62","url":"/audio-paper-digest-blog/data/papers/2026-10-16/2610-21143/citation.ris"},"rethink-context.json":{"contract":"paper-research-context-v2","sha256":"62fabe6185fa89fa21ba15665e2464ccefd8ba5cf92e15345bb4730f3c2088a4","url":"/audio-paper-digest-blog/data/papers/2026-10-16/2610-21143/rethink-context.json"}}
paper_digest_api_reader_contract: "beginner-researcher-v3"
paper_digest_api_reader_article_sha256: "97d5ea44b965aa3870bb2698849e4e65bd18f949dd3a1fd45c620b7bbc32075b"
paper_digest_api_reader_plan_sha256: "68e04b20f0705c5de6fc3e502bb11e55d27ed63eef6fe5b055f0eccb783fc8b6"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings-v4"
paper_digest_api_reader_source_bindings_sha256: "88b66fddf8a38b26521a5cd869aad60bc9f6ae2210a11baa4467614bc804108d"
paper_digest_api_reader_source_table_count: 4
paper_digest_api_reader_source_formula_count: 4
paper_digest_api_reader_structured_artifacts_sha256: "f6136fe6fdc3becc177431a683da850f77cc1255c628850fe68969945f3f6efa"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity-v1"
paper_digest_api_reader_author_identity_sha256: "df5419f93ae86ca22734df8142e055c75fb58ba1d89896eb6648ccb8f268b211"
paper_digest_api_reader_author_count: 9
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity-v1"
paper_digest_api_reader_resource_identity_sha256: "12646cfda0a60155aa194f42ab0797bf2cecf726b4a4c45fa653737965282431"
paper_digest_api_reader_resource_count: 2
paper_digest_api_reader_figure_persistence: "ephemeral-no-persisted-figure-assets-v1"
paper_digest_api_reader_decision_projection: "api-reader-decision-projection-v2"
---

# 📄 CoSTA：让对话模型少说几步、合成时再展开的语音 token 解耦

> 英文题目：*[CoSTA: Compressed Speech Token Adaptation for Efficient Spoken Dialogue Models](https://arxiv.org/abs/2610.21143v1)*

<!--paper-tag-hierarchy-v1:start-->

**研究分类**

- **研究任务**：[语音交互](/audio-paper-digest-blog/papers/?concept=task.speech-interaction) → [语音对话系统](/audio-paper-digest-blog/papers/?concept=task.speech-dialogue)
- **研究方法**：[参数高效微调](/audio-paper-digest-blog/papers/?concept=method.peft)
- **研究条件**：[多语言](/audio-paper-digest-blog/papers/?concept=setting.multilingual)
- **研究重点**：[高效推理](/audio-paper-digest-blog/papers/?concept=research_focus.efficiency)

<!--paper-tag-hierarchy-v1:end-->

> 评分：**7.0/10** | 创新 1.5/2 | 技术严谨 1.2/1.5 | 实验充分 1.2/1.5 | 清晰度 0.8/1 | 影响力 1/1.5 | 开源 0/1.5 | 可复现 0.3/0.5 | 工程/实践 1/1.5


## 👥 作者与机构

- Yingzhuo Deng：Institute of Automation, Chinese Academy of Sciences；School of Artificial Intelligence, University of Chinese Academy of Sciences
- Chong Li：Institute of Automation, Chinese Academy of Sciences；School of Artificial Intelligence, University of Chinese Academy of Sciences
- Bingxin Liu：Institute of Automation, Chinese Academy of Sciences；School of Artificial Intelligence, University of Chinese Academy of Sciences
- Yi Shu：School of Artificial Intelligence, University of Chinese Academy of Sciences
- Tianyu Peng：Institute of Automation, Chinese Academy of Sciences；School of Artificial Intelligence, University of Chinese Academy of Sciences
- Can Xie：Institute of Automation, Chinese Academy of Sciences；School of Artificial Intelligence, University of Chinese Academy of Sciences
- Siyao Song：Institute of Automation, Chinese Academy of Sciences；School of Artificial Intelligence, University of Chinese Academy of Sciences
- Shuo Ren：Institute of Automation, Chinese Academy of Sciences
- Jiajun Zhang：Institute of Automation, Chinese Academy of Sciences；School of Artificial Intelligence, University of Chinese Academy of Sciences

## 📌 核心摘要

语音对话模型输入用户语音，输出交织的文本单元和语音单元，再由语音解码器合成波形，原有生成与合成共用同一套语音单元，序列很长，自回归步数多，对齐和长上下文建模更困难。CoSTA保留原语音切分器与解码器不变，在生成侧扩充一套字节对编码合并出的压缩单元，模型只生成较短的压缩序列，推理时再确定性展开回原始语音单元送入解码器。适配分三步：词汇扩展用组成单元的均值初始化新增嵌入与输出层，发音适配在压缩的文本转语音数据上校准新增参数，对话适配在压缩的语音到语音对话数据上恢复问答能力，这与降低切分器帧率替换切分器与解码器的做法不同，把效率优化放在生成侧的事后适配。在URO-Bench中文语音对话集上，与使用相同适配数据的Vanilla-FT-ZH相比，CoSTA-ZH平均内容质量G-Eval为72.27，高于前者的69.88，文本语音一致性ASR-CER为1.51%，低于前者的4.96%，语音质量UTMOS为3.75，与前者的3.77相当。相对基座模型，CoSTA在所测并发下中文延迟降低32.8–39.0%、吞吐提高51.6–59.2%，在各设置均超过同条件Vanilla-FT，峰值显存最多增加0.68 GiB。上述质量与效率结论限于所测并发与URO-Bench中英文对话任务，去掉对话适配后CoSTA-ZH的G-Eval从72.27降至24.35，表明仅靠压缩发音学习不能恢复问答能力，且各数据集上指标提升并不均匀，合成训练数据的偏差与超大词表下的输出层开销仍需权衡。

## 🔗 开源与复现资源

- 第三方资源：<https://github.com/yingzhuodeng/CoSTA> — 链接可访问（HTTP 200）

- 第三方资源：<https://github.com/huggingface/tokenizers> — 链接可访问（HTTP 200）

可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 语音对话模型要解决什么输入输出问题

这篇论文研究的语音对话模型，输入是用户的语音提问，输出是助手的语音回答，中间还要同时产出文本回答以保持对齐。典型做法是先把输入语音经语音编码器变成特征，再由大语言模型自回归地交替生成文本 token 和语音 token，最后把语音 token 送入语音解码器合成波形。关键约束是合成端只认识原始语音分词器产出的词表，所以生成端原来也必须用同一套词表逐个预测。原文指出这类语音 token 序列往往很长，例如 25 Hz 分词器每秒产生 25 个 token，一句几秒的回答就是上百步自回归，这直接增加首包等待和整句延迟，也更快耗尽有限的生成预算，限制多轮持续交互和长回答。

### 已有路线为什么没有解开生成与合成的绑定

论文对比了两类已有路线。第一类是换更低码率的分词器，例如从 25 Hz 降到 12.5 Hz，让同样时长的语音对应更少 token。但这仍要求生成和合成共用同一套新表示，且换分词器往往要连带重训或适配分词器、语音解码器和对话模型，激进压缩还可能带来压缩与质量的权衡。第二类是在语音识别、语音续写或小规模语音合成里用声学块或 BPE 做压缩，多是针对小任务模型从头训练。CoSTA 的不同在于不换原分词器和解码器，只在已有大规模对话模型之后做词表空间适配，用可逆压缩表示做生成，再无损恢复原表示做合成，因此属于兼容保留的后处理式解耦。

### 压缩率如何定义，要保留什么信息

论文把无损定义为 token 切分可逆：压缩序列能确定性展开回原始序列，而不是波形听感无损。设原始语音词表为 S，语音 token 序列为 s，BPE 学到的扩展词表为 Z，编码器把 s 变成压缩序列 z，展开函数把 z 还原为 s。压缩率定义为压缩长度除以展开后长度，越低说明为同样解码器消耗量所需的自回归步数越少。必须保留的信息是每个新增 BPE 单元对应的原始 token 序列，否则合成端无法还原。论文的经验起点是语音 token 有大量局部重复模式，适合做这种合并，且在多种分词器、数据和语言上都观察到随词表增大的持续可压缩性。

**生成 token 空间 × 合成 token 空间：** 生成 token 空间指自回归大模型逐个预测时使用的词表，决定要走多少解码步；合成 token 空间指语音解码器能接受的原始语音 token 词表，决定能否正常合成波形。两者原来是同一套，原论文把它们解耦：生成时用更短的压缩表示，合成前再展开回原表示，因此解码步数减少而合成接口不变。

### CoSTA 整体流程如何把短生成变回长合成

CoSTA 的总体思路分训练侧三步和推理侧一步。训练侧先做词表扩展并用均值初始化新增行，再在压缩后的通用语音合成数据上做发音适配，最后在压缩后的语音到语音对话数据上做对话适配。推理时适配后模型从扩展词表生成交错的文本和语音 token，其中语音流可能混有原始 token 和新增 BPE 单元；系统只对语音流做确定性展开，原始 token 保持不动，每个 BPE 单元按记录展开成对应的原始序列，再送入未改动的原始语音解码器。下图展示了原来直接生成很长原始序列与现在先生成短压缩序列再展开的两条路径对比，合成解码器本身不换。

读图说明：这张总览图上下对比了改造前后，重点看生成序列长度变化和新增的展开环节位置，确认输入输出语音和解码器模块是否保持对应，约需 30 字以上的仔细对照才能理解解耦含义。

> **看图路径：** 1. 先看上半分支：原始模型直接生成很长的原始语音 token 再送解码器；2. 再看下半分支：适配后模型生成更短的压缩 token，再经确定性展开送同一解码器；3. 注意语音解码器本身没有换，变化只在生成侧和中间的展开步骤

[![原论文 Figure 1：Overview of CoSTA. Existing SDMs couple generation and synthesis token spaces.](https://arxiv.org/html/2610.21143v1/first_3.svg)](https://arxiv.org/html/2610.21143v1/first_3.svg)

*论文图 1。原论文 Figure 1:：“Overview of CoSTA. Existing SDMs couple generation and synthesis token spaces.”。*

图中可见上路原始模型输出一长串浅蓝色方块并标注过长，下路适配后模型只输出少数红色方块并标注更短，中间经确定性展开模块变回浅蓝色长序列再进语音解码器。左侧还标出训练是从原始模型到适配模型的转换，右侧文字点明生成与合成 token 空间解耦。这说明效率收益来自生成步数减少，而合成质量的接口没有动，展开是规则查表而非再次生成。

### 词表扩展与 BPE 缩放规律如何工作

词表扩展是在原模型词表 V 上并入新增 BPE 单元，得到扩展词表。新增单元数量记为 M，论文主实验用 80K。BPE 词表在对话语音 token 序列上学习，训练时把每个原始语音 token 编号先映射为唯一 Unicode 字符再训练，推理时反向映射，保证不改变底层序列。压缩率随 M 的变化在 8 种分词器配置上呈现近似对数线性下降，即压缩率随 log2 词表大小近似直线下降，拟合优度在测试语音上达到很高水平，附录给出跨数据源和语言的一致性。下面的压缩率定义和缩放趋势公式先给出符号与目标：前者是单条序列的长度比，后者是不同 M 下的经验拟合，斜率为负表示词表翻倍带来几个百分点的压缩率下降。

\[\rho(\mathbf{z})=\frac{|\mathbf{z}|}{|\pi(\mathbf{z})|}.\]

\[\rho_{c}(M)\approx a_{c}-b_{c}\log_{2}(M/10\mathrm{K}),\qquad b_{c}>0,\]

新增单元的嵌入矩阵行和输出头行不用随机初始化，而是取其展开后包含的 k 个原始 token 对应行的平均值，原有词表参数保持不变。这种均值初始化的直觉是新单元的发音对应一段原始声音，把组成成分的表示平均起来作为起点，比随机猜更接近可用状态。论文比较了随机、挑选其中一个成分复制和取平均 3 种方式，报告均值在发音适配第一阶段收敛更快、梯度范数更稳定，尤其在大一些的学习率下差异更明显。

\[\begin{array}[]{r@{\;}c@{\;}l@{\quad}r@{\;}c@{\;}l}\mathbf{E}^{\prime}_{z}&=&\frac{1}{k}\sum_{i=1}^{k}\mathbf{E}_{s_{i}},&\mathbf{W}^{\prime}_{z}&=&\frac{1}{k}\sum_{i=1}^{k}\mathbf{W}_{s_{i}}.\end{array}\]

**BPE 压缩 × 确定性展开：** BPE 压缩指把频繁相邻的原始语音 token 合并成新单元，编码后序列变短；确定性展开指每个新增单元都记录了它是由哪几个原始 token 合并而来，推理时按规则还原，不需要模型再猜。两者搭配实现可逆：压缩负责减少自回归步数，展开负责保证送入语音解码器的仍是原词表序列。

读图说明：这张训练流程图左侧展示 3 类向量并排与平均箭头，右侧展示 2 阶段冻结策略，下方展示三步数据流，需要对照颜色与冻结标记来理解参数更新范围。

> **看图路径：** 1. 看左上新增词向量如何由组成它的原始 token 向量取平均得到；2. 看右上第一阶段只训练嵌入和输出头、第二阶段再解冻中间层；3. 看下方三步顺序：词表扩展、发音适配、对话适配

[![原论文 Figure 3：CoSTA combines vocabulary extension with mean-based initialization, progressive pronunciation…](https://arxiv.org/html/2610.21143v1/adap.png)](https://arxiv.org/html/2610.21143v1/adap.png)

*论文图 3。原论文 Figure 3:：“CoSTA combines vocabulary extension with mean-based initialization, progressive pronunciation adaptation, and dialogue adaptation.”。*

图中左上用不同底纹区分文本向量、原始语音向量和新增语音向量，并用括号标出平均操作对应输出头同样处理；右上第一阶段中间层冻结、嵌入与输出头训练，第二阶段再解冻中间层；下方从原始模型经词表扩展、发音适配、对话适配到高效模型，分别消耗压缩通用合成数据和压缩通用对话数据。这对应后文 2 阶段学习率与冻结设置的具体实现。

### 推理时展开只动语音流不动文本流

推理细节是理解兼容性的关键。适配后模型生成的是交错序列，文本 token 仍是原文，语音 token 可能是原始或 BPE。系统只扫描语音流：遇到原始 token 直接保留，遇到 BPE 单元查表展开成几个原始 token；文本流完全不碰。展开后的原始语音序列才进入原始语音解码器，解码器权重和输入词表都不变。

因此新增词表只增加嵌入查表存储和输出头每步在更大词表上投影与选词的开销，而 Transformer 主体因步数减少反而省了计算。论文还单独测量了输出头投影加贪心选词的每步延迟，说明词表过大时每步变贵会部分抵消压缩收益。

读图说明：这张推理图自下而上展示从输入语音到输出语音的完整通路，重点区分 4 种图例颜色分别代表什么，并跟踪红色单元如何一变多，文本白色方块是否原样保留。

> **看图路径：** 1. 从底部输入语音经编码器和适配器进入大模型解码器；2. 看中间同时生成文本 token 和语音 token，其中红色 BPE 单元会被展开成多个蓝色原始 token；3. 确认展开只作用于语音流，文本流不变，最后才进未改动的语音解码器

[![原论文 Figure 4：Inference with deterministic expansion from the extended generation token space to the original…](https://arxiv.org/html/2610.21143v1/inf_5.png)](https://arxiv.org/html/2610.21143v1/inf_5.png)

*论文图 4。原论文 Figure 4:：“Inference with deterministic expansion from the extended generation token space to the original space before unchanged decoding.”。*

图中底部输入语音经语音编码器和适配器变成隐特征送入大模型解码器，中部同时产出白色文本、蓝色原始语音和红色 BPE 语音，上部红色经不同颜色箭头展开成多个蓝色再送语音解码器合成输出语音。图例明确白色为文本、蓝色为语音、红色为 BPE 语音，展开箭头显示 1 对多关系。这验证了展开是轻量规则映射，且合成前已恢复原空间。

### 两阶段适配用什么数据和更新范围

发音适配用从 Emilia 采样的中英文各 300 小时语音，经 Seed-VC 转成统一音色以减少说话人变化，再用原始分词器分词并 BPE 压缩，只有语音 token 被压缩，文本提示不变。目标是自回归预测压缩后的交错序列。采用渐进策略：先用 50% 数据只微调嵌入和输出头，学习率 1.6 乘 10 的负 4 次方，校准新增参数；再用剩下 50% 数据额外解冻中间层，用更小学习率 2.0 乘 10 的负 5 次方完成适配。

对话适配用按 OpenS2S 流程构造的中英文各约 50,000 条语音对话，助手语音用 CosyVoice 2 以一致音色合成，过滤掉查询或回答语音超 1 分钟的样本后中文 49664 条、英文 49408 条，只更新大语言模型参数，语音编码器、适配器和语音解码器冻结，同样只压缩目标回答中的语音 token 并保持原文交错比例。词汇扩展本身只增加嵌入和输出头行，约占原模型参数的 6%。

**发音适配 × 对话适配：** 发音适配指在压缩后的文本转语音数据上训练，让模型先学会正确发出新增 BPE 单元对应的声音；对话适配指在压缩后的语音到语音对话数据上训练，让模型学会用这套压缩表示来理解用户语音提问并作答。前者解决会不会读新词，后者解决会不会用新词对话，两步缺一不可。

### 评测条件如何保证只比较压缩表示的影响

主实验基座是 8,000,000,000 参数的 Step-Audio 2 mini，使用 25 Hz 的 S3Tokenizer V2。基线包括原始模型和同数据同配置但保留原始语音 token 的普通微调，分别有中文、英文和混合版本，以隔离 BPE 压缩适配本身的效果，另用 Qwen2.5-Omni、Kimi-Audio 和 GLM-4-Voice 作外部质量参照。评测用 URO-Bench 中 12 个对齐的中英文数据集，覆盖开放对话、数学问答、常识推理和摘要，样本数从上百到几百不等。模型侧效率报告生成压缩率、展开后生成速度和相对速度；系统侧在单卡 A100 用 vLLM 测整句延迟、吞吐和峰值显存，并单独拆出首包延迟的预填充、解码到首个音频包和语音解码器耗时。质量侧按 URO-Bench 协议报告内容、语音质量和对齐 3 类指标，另做 6 人共 1080 个回答级的人工听评。

**G-Eval × ASR-CER/WER × UTMOS：** G-Eval 指把生成语音转写成文字后用 GPT-4o mini 按 URO-Bench 提示打分，衡量回答内容质量；ASR-CER/WER 指生成文本与生成语音转写之间的字词错误率，衡量文本和语音是否对齐；UTMOS 指用模型预测的平均意见分估计语音清晰自然度。三者分工不同，不能互相替代。

### 压缩生成是否真的更快且质量保持

模型侧在流式推理下中文压缩率约 66.81% 对应 1.736 倍相对速度，英文约 70.17% 对应 1.659 倍，而普通微调压缩率仍为 100% 且速度基本不变，说明步数减少转化成了速度。展开后生成速度定义为展开后原始 token 数除以大模型解码时间，直接衡量单位时间等效产出。系统侧中文整句延迟下降约 30% 到 40%、英文下降约 20% 到 30%，吞吐相应提升，峰值显存最多多 0.68GiB，且在各并发下都优于匹配的普通微调。质量侧平均内容分保持或略升，对齐错误率明显下降，语音质量分基本相当，人工成对比较中胜或平率在流畅度和语义上都超过 80%，说明效率没有以明显质量为代价，但论文也指出提升并非每个数据集每项指标都一致。

\[\mathrm{Speed}=\frac{|\pi(\widehat{\mathbf{z}})|}{T_{\mathrm{decode}}},\]

**压缩率 × 展开后生成速度：** 压缩率指压缩后长度除以展开后长度，越低说明同样内容用的自回归步数越少；展开后生成速度指单位解码时间能等效产出多少个原始语音 token，衡量压缩最终是否变成更快。两者搭配看才完整：压缩率高不一定快，因为词表变大后输出层每步也变贵，需要同时报告。

读图说明：这张多分词器压缩曲线图横轴为对数词表规模，纵轴为压缩率百分比，需要逐条对比不同码率和语义码本在同一词表下的高低与斜率，判断规律是否跨配置成立。

> **看图路径：** 1. 看横轴是新增 BPE 词表从 10K 到 320K 按对数翻倍，纵轴是压缩率百分比；2. 比较八条不同分词器曲线的斜率和高度，确认是否都随词表增大而下降；3. 注意纵轴越低表示压缩后越短，不要把下降误读为变差

[![原论文 Figure 2：Speech-token BPE scaling across eight tokenizer configurations.](https://arxiv.org/html/2610.21143v1/tokenizer_level_generalization_test.svg)](https://arxiv.org/html/2610.21143v1/tokenizer_level_generalization_test.svg)

*论文图 2。原论文 Figure 2:：“Speech-token BPE scaling across eight tokenizer configurations. Compression rate decreases approximately linearly with \log_2 vocabulary size.”。*

图中 8 条曲线都随新增词表从 10K 翻倍到 320K 而单调下降，纵轴越低表示越短，高码率与低码率起点不同但趋势一致，拟合线与测试点贴合紧密。这支持论文所说的持续可压缩性，但也只是编码已有语音的统计规律，不等于模型生成时一定能达到同样压缩，需要后文生成压缩率另行验证。

### 有限预算下多轮持续性与跨架构迁移表现如何

论文把每 10 个查询拼成压力会话，统计在有限生成预算下能维持的有效轮数和语音时长。中文有效轮数从普通微调的 3.71 轮提到 7.21 轮，英文从 1.84 轮提到 5.79 轮，且生成语音更长，说明同样预算下压缩表示能说更多内容。但原文明确这测的是生成格式可持续性而非对话连贯性，不能理解为记忆或推理变强。跨架构实验在 OpenS2S 上保留其 12.5 Hz 分词器和解码器，只做词表扩展加 2 阶段适配，中文语音步数减少约 21%，英文减少约 19%，内容分和对齐优于匹配微调而语音质量基本相当。这表明方法可迁移到不同架构，且能在原生低码率基础上再压缩，与低码率路线互补而非替代。

下面两张表分别整理词表规模权衡与关键消融的数字，比较条件和限制见表前后说明。表中速度单位为每秒展开后语音 token 数，压缩率越低越好，速度越高越好，内容分越高越好。

词表规模比较问题是：在 AlpacaEval-zh 上从 10K 加到 160K，压缩更好是否一直更快且质量不掉。公平条件是同一基座与适配流程，只变新增单元数，0K 为未适配原始模型。

| 新增词表规模 | 生成压缩率 | 展开后速度 | 内容 G-Eval | 说明 |
| --- | --- | --- | --- | --- |
| 80K | 67.50% | 103.03 tokens/s | 81.36 | 实用平衡点 |
| 160K | 63.62% | 104.18 tokens/s | 78.87 | 压缩更好但速度仅增 1.1% |

上表显示从 80K 到 160K 压缩率继续下降，但速度只提升约 1.1%，内容分反而从 81.36 降到 78.87，语音质量也微降 0.02。结合输出头每步延迟随词表增大而上升的孤立测量，论文选 80K 作为压缩、速度与质量的实用平衡，而非每项最优。限制是该结论只在当前模型、数据和单卡批量下成立，换硬件或批量可能改变拐点。

关键消融比较问题是：去掉对话适配后，压缩行为与问答能力如何变化。条件是中文 6 个基准共 1122 个回答的 token 加权统计。

| 条件 | 生成压缩率 | 内容 G-Eval | 相对速度结论 |
| --- | --- | --- | --- |
| 完整 CoSTA 中文 | 66.73% | 72.27 | 约 1.736 倍 |
| 去掉对话适配 | 81.05% | 24.35 | 压缩明显变差 |

上表说明仅学发音不够：去掉对话适配后原始 token 占比上升、BPE 覆盖率下降、长单元使用减少，压缩率从 66.73% 恶化到 81.05%，内容分从 72.27 骤降到 24.35，例子中模型重复问题而不作答。这支持对话适配把压缩发音能力接到问答行为的作用，但未胜出项是普通微调在个别英文问答集的内容分仍有波动，且外部模型在部分任务上仍更高，不能推广为全面超越。

### 哪些组件分别影响压缩对齐与内容

中文消融显示音色转换主要利于内容分，去掉后内容分从 72.27 降到 70.93 而压缩与对齐几乎不变；渐进适配小幅改善压缩；发音适配加强压缩与对齐；对话适配影响最大。初始化对比中均值在训练损失和梯度范数上都更稳，随机初始化在大梯度初期波动大。

数据量分析在早期无渐进设置下进行，发音数据从 100 小时加到 500 小时压缩与对齐先改善后边际递减，因此选 300 小时；对话数据用 50,000 条在压缩与质量间平衡。这些分析的适用条件是中文 4 个子集和早期设置，不能直接当作最终配置的最优证明。首包延迟拆解显示大模型解码部分中文从 164.42 毫秒降到 122.98 毫秒、英文从 165.08 毫秒降到 115.96 毫秒，预填充和语音解码器基本不变，因此首包整体只降约 9%，长回答的整句收益更大。

### 结论在什么条件下才成立，有哪些未测范围

论文结论依赖合成对话数据、特定分词器和评测协议。对话适配数据是按流程合成的通用语音对话，虽然可控且是常用做法，但与真实自然对话的情感、口音和噪声仍有差距；BPE 是确定可逆且易集成的选择，未比较其他无损切分；评测聚焦通用语音到语音对话与效率，未覆盖情感对话、个性化风格和多样声学环境。压缩缩放的高拟合只在测试的 10K 到 320K 范围内验证，外推更大词表可能被输出层开销抵消。人工评价样本为每数据集抽 5 条共 60 条，成对比较以平局居多，细节任务差异见附录，不能理解为所有场景听感都更好。

### 复现第一步做什么，需要多少成本

复现应先从 Step-Audio 2 mini 和 URO-Bench 中文子集跑通原始流水线，再按附录实现 BPE 词表学习与映射。论文用 HuggingFace tokenizers 库在对话语音 token 序列上学 80K 单元，原始词表 6656 个，推理用贪心、重复惩罚 1.2、最大 2048 新 token，只对语音流展开。训练超参为发音 2 阶段加对话 3 轮，批量 256、余弦调度、预热 0.03、梯度裁剪 1.0、bfloat16 加 DeepSpeed ZeRO-1。成本上中文适配在 8 卡 A100 上训练约 9 小时 57 分、约 79.5 卡时，另加音色转换与对话合成各约 1 到 2 天 8 卡，这些一次性成本未计入推理节省，需与延迟吞吐收益一起权衡。以下两张原表给出可直接照用的数据规模与评测集划分，复现时不要改采样与聚合方式。

下表说明发音与对话数据的语言与规模，复现时需保持中英文各 300 小时与过滤后约 50,000 条的配比，否则压缩行为可能变化。

| Tokenizer | Public reference source | Codes | Hz | Token stream used for BPE |
| --- | --- | --- | --- | --- |
| GLM-4-Voice Tokenizer 12.5Hz | GLM-4-Voice tokenizer | 16,384 | 12.5 | Single quantized speech stream |
| S3Tokenizer V2 25Hz | CosyVoice2-0.5B | 6,561 | 25 | Single semantic-token stream |
| S3Tokenizer V3 25Hz | Fun-CosyVoice3-0.5B-2512 | 6,561 | 25 | Single semantic-token stream |
| Mimi | kyutai/mimi | 2,048 | 12.5 | First semantic codebook only |
| S3Tokenizer V1 25Hz | CosyVoice-300M-25Hz | 4,096 | 25 | Single semantic-token stream |

上表来自原文训练数据统计，文本转语音与语音对话各分中英文，复现时应核对是否完成统一音色与一致音色合成，否则说话人变化会干扰 BPE 模式一致性。该表只说明规模，不证明质量，质量需另看评测表。

下表说明 12 个中英文评测集的样本数、任务类型与评分模式，复现时需按开放、半开放和问答分别用对应提示，否则 G-Eval 不可比。

| Dataset | #Samples | Task / Aspect | Eval. Mode |
| --- | --- | --- | --- |
| AlpacaEval-zh | 147 | Authentic, open-ended dialogue | Open |
| AlpacaEval | 199 | Authentic, open-ended dialogue | Open |
| APE-zh | 190 | Practical mathematical problems | QA |
| Gsm8kEval | 582 | Practical mathematical problems | QA |
| Claude-zh | 222 | Authentic, open-ended dialogue | Open |
| CommonEval | 200 | Authentic, open-ended dialogue | Open |

上表覆盖理解推理与口语对话，中文与英文任务对齐，复现时应保留转写工具与评分模型的语言对应，英文用 Whisper-large-v3、中文用 Paraformer-zh。限制是这些都是公开基准上的合成评测，不能替代真实交互延迟与听感。

### 什么时候值得尝试，还缺哪项验证

当已有模型受限于长语音 token 导致的解码慢、整句延迟高或预算内轮数少，且不能换分词器和解码器时，值得尝试这种生成合成解耦。第一步是先在目标分词器和目标对话语音上复现 BPE 压缩曲线，确认在 10K 到 80K 区间有稳定收益，再做小规模发音适配验证展开后能正常合成。还需要补的验证是真实自然对话、情感与噪声环境下的压缩率与对齐，以及更大批量与不同硬件下的端到端延迟，因为输出头开销占比会随部署变化。

常见误解是把编码已有语音的压缩率等同于模型生成的压缩率，前者是统计上限，后者取决于模型是否学会多用长 BPE 单元；另一个误解是把相对速度当成绝对延迟改善，首包与整句、单并发与多并发需分开看。代码开源、权重可下载与系统可运行是三回事，本篇只在正文给出第三方代码链接可达性，是否作者官方持续维护与权重开放需另行确认，不能混为一谈。

<details>
<summary>📎 论文与评分元数据</summary>

排名：前50% | 文档类型：方法研究 | [arXiv 原文](https://arxiv.org/abs/2610.21143v1)

</details>

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。

- 评分规则：type-aware-v1

- 评分模型：muse-spark-1.3-contributor

- 评分请求协议：openai_responses

---

[← 返回 2026-10-16 语音/音乐/音频论文速递](/audio-paper-digest-blog/posts/2026-10-16/)
