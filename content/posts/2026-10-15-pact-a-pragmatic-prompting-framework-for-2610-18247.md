---
title: "PACT: A Pragmatic Prompting Framework for Expressive and Voice-Preserving Speech-to-Speech Translation"
date: 2026-10-15
draft: false
tags: [语音翻译, 语音克隆, 提示学习, 韵律与风格控制]
categories: [论文速递]
description: "PACT 把语音到语音翻译分成语义文本、说话人音色和语用表达三路，把源语音的语用线索映射到目标语言表达空间并做成连续提示去引导冻结的合成器，在西班牙语英语双向 TOPI 评测里内容、音色和表达同时更好，但结论只在 30 对重演条件下成立。"
hiddenInHomeList: true
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_arxiv_id: "2610.18247"
paper_digest_workbench_contract: "researcher-workbench-v1"
paper_digest_reader_title: "PACT：把说话方式转成目标语言能自然说出来的样子"
paper_digest_original_title: "PACT: A Pragmatic Prompting Framework for Expressive and Voice-Preserving Speech-to-Speech Translation"
paper_digest_arxiv_version: 1
paper_digest_arxiv_versioned_id: "2610.18247v1"
paper_digest_arxiv_abs_url: "https://arxiv.org/abs/2610.18247v1"
paper_digest_arxiv_pdf_url: "https://arxiv.org/pdf/2610.18247v1.pdf"
paper_digest_primary_task: "语音翻译"
paper_digest_tags_contract: "paper-tag-flat-tags-v2"
paper_digest_tags_selection_contract: "paper-tag-selection-v2"
paper_digest_tags_registry_version: "paper-tag-catalog-v2"
paper_digest_tags_registry_sha256: "cdef54423b5dfc00a1d017ef6639446d2ecd1d9c1acf71c8eb4f6219a46b7ba8"
paper_digest_tags_concepts: [{"facet":"task","id":"task.speech-translation","label":"语音翻译"},{"facet":"task","id":"task.voice-cloning","label":"语音克隆"},{"facet":"method","id":"method.prompt-learning","label":"提示学习"},{"facet":"task","id":"task.prosody-style-control","label":"韵律与风格控制"}]
paper_digest_primary_method: "提示学习"
paper_digest_score: 6.1
paper_digest_rank_bucket: "前50%"
paper_digest_document_type: "方法研究"
paper_digest_one_sentence: "PACT 把语音到语音翻译分成语义文本、说话人音色和语用表达三路，把源语音的语用线索映射到目标语言表达空间并做成连续提示去引导冻结的合成器，在西班牙语英语双向 TOPI 评测里内容、音色和表达同时更好，但结论只在 30 对重演条件下成立。"
paper_digest_authors: [{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Yuchen Song"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Satoshi Nakamura"}]
paper_digest_abstract_sha256: "88cc2804eddd86c7652730af58e5fe9488ae4334c7b8b567e007af82ac33724d"
paper_digest_sidecars: {"citation.bib":{"sha256":"f3e8a613bcc2e5ebabf1db177b9aa67164013c2548b4394b314629e1989cb0e5","url":"/audio-paper-digest-blog/data/papers/2026-10-15/2610-18247/citation.bib"},"citation.json":{"sha256":"b3a02d11b9483f5ea11f401bfb1c1da0328274b710e47af0612e56c1c6d66997","url":"/audio-paper-digest-blog/data/papers/2026-10-15/2610-18247/citation.json"},"citation.ris":{"sha256":"5483d08f333b6311a3a1d469e21a293599e671a08c4f6ed7331da2322187e145","url":"/audio-paper-digest-blog/data/papers/2026-10-15/2610-18247/citation.ris"},"rethink-context.json":{"contract":"paper-research-context-v2","sha256":"4a0f07d01788795f0e50048bcdc38d4ad975a6ace2c5550c0b1674bae42908fa","url":"/audio-paper-digest-blog/data/papers/2026-10-15/2610-18247/rethink-context.json"}}
paper_digest_api_reader_contract: "beginner-researcher-v3"
paper_digest_api_reader_article_sha256: "9e0b3ecdd989cd444a3059feac6a0499e9fbb828fd843efbdce33b79523dcb98"
paper_digest_api_reader_plan_sha256: "cb8c3ea9db3dffeb14328e9cf2a39b47ae3cc438a1d3fe88fae75263311801fa"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings-v4"
paper_digest_api_reader_source_bindings_sha256: "4c3b1c58dce13c5aadc256c2a0e74c4701d6da528ce3ee52b238140d9bdbf209"
paper_digest_api_reader_source_table_count: 3
paper_digest_api_reader_source_formula_count: 5
paper_digest_api_reader_structured_artifacts_sha256: "74a59f9b4b69cb1d52700969d39cbc67870146cb42866a472dab092c37acb7a4"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity-v1"
paper_digest_api_reader_author_identity_sha256: "83810bfa1585fbeea20b74cecde7f52b768ee9003c8ff72b1a82a790c4866aa6"
paper_digest_api_reader_author_count: 2
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity-v1"
paper_digest_api_reader_resource_identity_sha256: "ac172cc5c8fe850603a4e6b36cb4bbd2e7c6079dd767efc26acad7d8d8424c1a"
paper_digest_api_reader_resource_count: 0
paper_digest_api_reader_figure_persistence: "ephemeral-no-persisted-figure-assets-v1"
paper_digest_api_reader_decision_projection: "api-reader-decision-projection-v2"
---

# 📄 PACT：把说话方式转成目标语言能自然说出来的样子

> 英文题目：*[PACT: A Pragmatic Prompting Framework for Expressive and Voice-Preserving Speech-to-Speech Translation](https://arxiv.org/abs/2610.18247v1)*

<!--paper-tag-hierarchy-v1:start-->

**研究分类**

- **研究任务**：[语音翻译](/audio-paper-digest-blog/papers/?concept=task.speech-translation)；[语音克隆](/audio-paper-digest-blog/papers/?concept=task.voice-cloning)；[语音合成](/audio-paper-digest-blog/papers/?concept=task.speech-synthesis) → [韵律与风格控制](/audio-paper-digest-blog/papers/?concept=task.prosody-style-control)
- **研究方法**：[提示学习](/audio-paper-digest-blog/papers/?concept=method.prompt-learning)

<!--paper-tag-hierarchy-v1:end-->

> 评分：**6.1/10** | 创新 1.2/2 | 技术严谨 1/1.5 | 实验充分 1/1.5 | 清晰度 0.8/1 | 影响力 0.8/1.5 | 开源 0/1.5 | 可复现 0.3/0.5 | 工程/实践 1/1.5


## 👥 作者与机构

- Yuchen Song：机构信息未在 arXiv HTML 中可靠披露
- Satoshi Nakamura：机构信息未在 arXiv HTML 中可靠披露

## 📌 核心摘要

语音到语音翻译需把源语言语音转为目标语言语音，难点在于同一交际意图的情感、强调、节奏和停顿在不同语言中对应不同的声学实现，无法直接复制源声学特征。PACT即Pragmatic Alignment with Calibrated Target-space Prompting，把生成分为语义通道、说话人通道和语用提示通道，先把源语用线索映射到目标表达空间再引导冻结生成器。语义通道用Whisper Large V3转写源语音再用Qwen2.5-72B-Instruct翻译为目标文本，说话人通道从源语音提取说话人条件以保留音色。语用提示通道承接源语音线索，源语用向量经跨语言偏最小二乘投影器在101维与103维之间映射得到投影向量，校准将其约束到目标子空间，再由轻量多层感知机转为7个提示token并前置于目标文本嵌入。冻结的CosyVoice 3据此预测语音token，再由流匹配解码器结合说话人条件重建波形，使三通道仅在合成时刻融合。在TOPI重演基准30个评测对西班牙语到英语同骨架消融中，PACT的ASR-BLEU为30.7、语用相似度为79.3、说话人相似度为72.9，分别高于Base的27.0、72.1和69.5。该结论只在西班牙语-英语双向TOPI重演评测及冻结CosyVoice 3与上述级联文本条件下成立，校准仅在西班牙语到英语启用而在英语到西班牙语停用，英语目标适配器经400小时Emilia预训练而西班牙语目标仅用DRAL训练；原文仅披露单卡NVIDIA RTX 5090上训练约3.5M参数适配器，未披露训练时长、推理延迟与部署成本，故其他语种、其他生成器及非重演自然对话效果尚未验证。

## 🔗 开源与复现资源

本次未形成可展示的已核验资源记录，开放状态尚未核实。

可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 语音翻译要同时保住说什么、谁在说和怎么说

这篇论文的输入是一段源语言语音，输出是另一种语言的语音。合格的输出有三层要求：词句翻得对，听起来还是同一个人，而且原来的着急、讽刺、强调、节奏、停顿和会话态度要在目标语言里自然成立。论文把后面这类线索叫做语用线索（pragmatic cues），指的是帮助听者感知交际意图的副语言线索。

同一个意图在不同语言里的讲法不一样。西班牙语里的催促、 frustrated 的抱怨，换成英语可能需要不同的音高起伏、重音位置和停顿切分，直接把源语音的语调搬过去会显得生硬。评价时也要分开看内容、音色和表达，三者缺一不可。论文的实验只做了西班牙语和英语双向、30 对双语人重演的评测，结论不能直接搬到别的语言或者即兴口译。

### 已有三类路线为什么还缺目标语言表达信号

原文把相关系统分成 3 类。第一类是端到端语音翻译，比如 SeamlessExpressive、SeamlessM4T-v2 和 Fairseq S2UT，特点是直接建模语音单元或者韵律，表达迁移大多是隐式完成的。第二类是语音大模型，比如 Qwen3.5-Omni-Plus、GPT-Audio-1.5，以及带语音到语音能力的 Qwen3.5-LiveTranslate，生成往往流利，但公开接口不显式处理源语用怎样映射成目标表达。

第 3 类是级联路线，先做识别和翻译，再接可以做音色克隆的合成，比如 OpenVoice V2、Fish-Speech 和 XTTS-v2，优点是文本翻译强、音色保持好，但同样缺少把源语用转成目标表达的显式机制。论文认为差距不在生成器本身，而在缺少一个落在目标语言表达空间里的控制信号，因此提出在冻结的生成器之外另加一路语用提示。

### 为什么不能直接搬运源语音的风格

初学者容易以为保留源语音的音色和情感向量就够了，但论文强调那是源空间的条件。源语言选出的语用维度与目标语言选出的维度本来就不同，文中西班牙语是 101 维、英语是 103 维，维度含义并不对齐。更关键的是可实现性：即使映射在数学上存在，冻结的合成器也未必能稳定发出那种组合，会出现内容对但语气怪，或者语气像但含糊的情况。

所以论文把问题定义成目标语言表达实现：先把源语用线索翻译成目标表达，再约束到目标常见表达附近，最后才去引导合成。这样比较的是在相同文本、相同说话人接口下表达控制的好坏，而不是把翻译质量差异混进语音生成比较里。

### 三条通道在哪里分开、在哪里汇合

PACT 的总体思路是 3 通道分工，只在合成时汇合。语义通道给出目标语言文本，说话人通道给出源说话人的音色条件，语用提示通道给出整句层面的表达控制。推理时先算出校准后的目标语用向量，再转成连续提示放在文本前面，语言模型据此预测语音单元，流匹配解码器再结合说话人条件重建波形。训练和推理都冻结 CosyVoice 3 的语言模型、语音切分器、说话人通路和波形解码器，只估计投影、校准统计量和适配器参数。

**语义通道 × 说话人通道：** 语义通道负责说什么，用识别加翻译得到目标语言文本；说话人通道负责听起来像谁，从源语音提取比较稳定的音色条件；文本决定词句对错，音色条件决定身份保持，两路分开进入同一个合成器，才有既说对又像本人的基础。

对照总体结构图可以这样看：左侧是同一段源语音的 3 个去向，中间是文本翻译和语用转换，右侧是统一的语音合成与输出，重点看各分支输出的名称有什么不同。

> **看图路径：** 1. 从左侧同一段西班牙语源语音出发，看三条分支分别去了哪里；2. 比较中间语义分支输出的西班牙转写和英语文本与下方语用分支输出的向量和提示；3. 确认上方说话人分支以说话人嵌入的形式进入右侧合成器的方式

[![原论文 Fig. 1：The overall architecture of PACT.](https://arxiv.org/html/2610.18247v1/system_architecture.png)](https://arxiv.org/html/2610.18247v1/system_architecture.png)

*论文图 1。原论文 Fig. 1:：“The overall architecture of PACT.”。*

这张图里左侧波形同时送往说话人提取、识别翻译和语用提取，中间语义框输出目标文本，下方语用框依次输出语用向量和软提示，3 路一起进入右侧大框的 CosyVoice 3，最后输出目标语音的小喇叭图标，语义框和语用框用虚线区分，说明两者是不同性质的条件。

### 语义通道和说话人通道各自管什么

语义通道只管词句内容。做法是先用 Whisper Large V3 转写源语音，再用 Qwen2.5-72B-Instruct 翻成目标语言，合成只以这份文本为语言依据。为了让消融可以归因，同一骨干的对比都用同一份缓存译文，这样生成语音的差别只能来自提示和合成，而不是换了翻译。

说话人通道只管音色身份，直接调用 CosyVoice 3 自带的源音频说话人条件接口，从源语音抽出条件向量，送给流匹配解码器。这种分离很关键：音色是比较稳定的说话人属性，语用是随句子变化的副语言实现，两路用不同接口进入生成器，避免把一句话的激动当成音色本身。原文没有改动说话人编码器的训练，只是原样使用它的条件通路。

### 语用向量如何从语音变成可映射的数字

语用提示通道的第一步是提取和语言有关的语用特征。骨干是预训练的 HuBERT Large，先算整句的声学表示，再按语言选择和语用相似判断相关的维度并做时间平均池化，得到源语用向量。论文提醒这是一个声学语用表示，捕捉的是听者用来判断语用相似的线索，而不是离散的意图标签。西班牙语到英语是 101 维到 103 维的映射，英语到西班牙语反过来。

\[p_{s}=\mathrm{Pool}\big(M_{\ell_{s}}(\mathrm{HuBERT}(x_{s}))\big)\in\mathbb{R}^{d_{s}}\]

\[z_{\mathrm{base}}=f_{\ell_{s}\rightarrow\ell_{t}}(p_{s})\in\mathbb{R}^{d_{t}},\]

**语用向量 × 目标空间投影：** 语用向量是从语音里抽出来的声学表示，反映听者判断交际意图时用到的线索；目标空间投影把它从源语言选出的维度映射到目标语言选出的维度，因为两边维度含义不对齐，直接套用不合适，投影之后才是在目标语言里可以解释的表达起点。

这里 p_s 是源语用向量，M 是按语言选维度的操作，HuBERT 是声学骨干，Pool 是时间平均；f 是在 DRAL 训练对上拟合的偏最小二乘投影，把源向量变成目标维度的基向量 z_base。投影用偏最小二乘是因为配对数据少，它显式建模源和目标的协方差，比较省数据。代价是投影仍可能包含目标生成器难实现的方向，所以还需要下一步校准。

### 校准和软提示如何让表达变得可发出

拿到目标空间的基向量后，论文做了一个保守的校准：减去目标均值，只保留在目标偏最小二乘子空间上的分量并乘以收缩系数，再加回均值。子空间维度 k 和收缩系数在开发集上选定后冻结，西班牙语到英语方向用 k 为 64、系数为 0.25，英语到西班牙语方向按开发集表现关闭校准，直接用投影向量，避免在西班牙语表达数据较少时过度约束。校准后的向量再经目标语言的轻量多层感知机适配器变成连续提示，默认是 7 个 896 维向量，放在目标文本词嵌入前面作为前缀。

\[z_{\mathrm{cal}}=\mu_{t}+\alpha\,U_{t,k}U_{t,k}^{\top}(z_{\mathrm{base}}-\mu_{t}),\]

\[P_{\mathrm{soft}}=A_{\phi,t}(z_{\mathrm{cal}})\in\mathbb{R}^{m\times d_{\mathrm{model}}},\]

\[\tilde{E}(T_{t})=[P_{\mathrm{soft}};E(T_{t})],\]

**实现校准 × 软提示：** 实现校准把投影后的向量拉回目标语言常见表达子空间附近，压掉合成器难以稳定发出的方向；软提示把校准后的向量转成连续向量放在文本前面，校准管方向能不能发，软提示管怎样连续地引导生成器。

上面三式依次是校准、软提示生成和前缀拼接，mu 是目标均值，U 是目标子空间正交基，alpha 控制保留多少源带来的偏移，A 是适配器，m 是提示长度，E 是文本嵌入。打个比方，同样表示强调，校准决定这种强调落在目标语言常见的语调附近，软提示决定以多大幅度、在哪个词上引导语言模型，比方只是帮助理解对应关系。与离散情感标签相比，连续提示能表达更细的声学变化，而且不用改动冻结的生成器。

### 只训练适配器时监督从哪里来

论文冻结整个 CosyVoice 3，只训练语用适配器，投影和校准统计量用配对向量估计得到，不走梯度。具体训练时用的是目标语言真实语音：从目标语音抽目标语用向量，经适配器变成软提示，与目标文本一起让冻结的语言模型预测语音单元序列，只优化适配器参数，损失是标准的语音单元交叉熵。推理时把训练用的真实目标向量换成从源语音预测并校准后的向量，因此推理不需要目标参考语音。

对照训练管线图可以这样看：先看图例再看连线，火焰是可训练，雪花是冻结，虚线圆是软提示，实线圆是语音单元，顶部深色圆是忽略位置，重点看底部两路输入如何对应顶部两类目标。

> **看图路径：** 1. 先看顶部图例，分清可训练标记和冻结标记，以及软提示和语音切分符号；2. 再看底部两路输入，区分语用向量走适配器和目标语音走切分器的路径；3. 最后看顶部输出，确认哪些位置忽略、哪些粉色位置和结束符计算损失

[![原论文 Fig. 2：The training pipeline of the Pragmatic Adapter.](https://arxiv.org/html/2610.18247v1/Training.png)](https://arxiv.org/html/2610.18247v1/Training.png)

*论文图 2。原论文 Fig. 2:：“The training pipeline of the Pragmatic Adapter.”。*

这张图里底部语用向量只进左侧适配器，目标语音只进右侧切分器，两路一起送入中间冻结的文本语音语言模型，顶部前几个和最后一个位置标为忽略，中间粉色位置和结束符位置作为目标，虚线回环表示自回归预测关系，图例还标出起始、结束和话轮符号，说明训练只更新适配器而不动语言模型与切分器。

### 数据划分、基线公平条件和指标方向

评测用的是 TOPI 西班牙语英语基准，双语人先自然交谈再用另一种语言重演选定句子，因此重演保留了相近的交际意图，适合测表达。实验用其中有目标转写的 30 对双语评测对，双向都测。训练用 DRAL 训练部分切成 2,577 对训练和 286 对开发，超参和检查点都在开发集上选，评测集只做最终报告。对比覆盖端到端、语音大模型和级联 3 类，PACT 与全部级联基线共用同一份缓存识别翻译文本，以便把差别归于语音生成和表达实现。

**语用相似度 × 说话人相似度：** 语用相似度看生成语音和目标重演在表达意图上接近不接近，说话人相似度看两者音色接近不接近；前者管怎么说得传神不传神，后者管谁在说保没保住，都和目标语言重演比，才能判断跨语言实现是不是同时成立。

指标分 3 组：内容用 ASR-BLEU，越高越好；音色用 WavLM-Large 余弦，越高越好；表达用 TOPI 语用相似度和 Emotion2Vec 余弦，越高越好，SER-JSD 越低越好，eGeMAPS 归一化误差越低越好，时长比越接近 1 越好。下表整理两方向适配器训练条件的差异，理解这个差异是理解后面校准为什么分方向开关的关键。

| 方向 | 训练切分 | 目标适配器数据 | 预训练与轮数 | 投影维度 | 提示与子空间 |
| --- | --- | --- | --- | --- | --- |
| 西语到英语 | 2,577 训练对，286 开发对 | 英语目标适配器 | 400-hour Emilia 预训练 8 epochs，DRAL 微调 30 epochs | 101→103，64-component PLS | 7 个 896 维，512 维隐层，约 3.5M 参数，k=64，α=0.25 |
| 英语到西语 | 2,577 训练对，286 开发对 | 西语目标适配器 | 仅 DRAL 训练 30 epochs，无 Emilia 预训练 | 103→101，64-component PLS | 7 个 896 维，512 维隐层，约 3.5M 参数，关闭校准 |

上表说明英语目标一侧有多余的大规模表达预训练，而西班牙语目标一侧只有 DRAL，资源不对称直接影响校准选择。两方向的训练预算和稳定性也不同，复现时不能把英语方向的超参直接搬到西班牙语方向。适配器训练只更新提示适配器，语音生成器保持冻结，投影和校准统计只从训练切分估计。

### 主结果在哪些指标上同时占优

主结果要回答的是在统一语音输出协议下，显式目标语用提示是不是比隐式风格或音色提示更平衡。每个格子同时报告西到英和英到西，除了 ASR-BLEU 和 eG-Z 外有界指标都乘以 100。级联系统共用文本，差别主要来自合成与表达。读表时注意箭头方向，向上越高越好，向下越低越好。

**内容保真度 × 表达保持：** 内容保真度看词句有没有翻对，表达保持看情感、强调、节奏和停顿有没有在目标语言里自然实现；论文同时报告两者，是要检验没有拿词句正确换表达，也没有拿流利表达掩盖翻错，平衡才是目标。

下表用双竖线分隔 2 个方向，前为西到英后为英到西，共 10 个系统 7 组指标，比较内容、语用、音色和韵律诊断的整体平衡。

| Category | System | ASR-BLEU | Prag Sim. | Spk Sim. | SER-JSD | Emo Sim. | eG-Z | Dur. Ratio |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| S2ST | SeamlessExpressive | 21.6 \|\| 23.9 | 72.0 \|\| 81.4 | 66.3 \|\| 70.6 | 26.0 \|\| 13.9 | 72.6 \|\| 48.0 | 3.28 \|\| 2.81 | 69.3 \|\| 81.4 |
| S2ST | SeamlessM4T-v2 | 17.7 \|\| 10.7 | 58.5 \|\| 67.9 | 55.2 \|\| 61.6 | 44.8 \|\| 45.7 | 56.7 \|\| 24.9 | 3.24 \|\| 1.99 | 67.3 \|\| 73.7 |
| S2ST | Fairseq S2UT | 12.3 \|\| 1.7 | 50.7 \|\| 74.2 | 49.3 \|\| 55.2 | 56.9 \|\| 37.2 | 61.4 \|\| 45.6 | 3.25 \|\| 1.89 | 70.8 \|\| 74.9 |
| S2ST | Qwen3.5-LiveTranslate† | 22.6 \|\| 21.1 | 67.7 \|\| 62.1 | 65.5 \|\| 57.0 | 21.5 \|\| 43.0 | 62.3 \|\| 48.1 | 2.83 \|\| 2.27 | 83.0 \|\| 76.2 |
| MLLM | Qwen3.5-Omni-Plus† | 21.9 \|\| 27.3 | 54.2 \|\| 64.3 | 59.5 \|\| 60.7 | 35.5 \|\| 44.9 | 33.2 \|\| 44.4 | 4.55 \|\| 2.37 | 74.8 \|\| 74.9 |
| MLLM | GPT-Audio-1.5† | 21.0 \|\| 23.3 | 40.0 \|\| 55.7 | 48.5 \|\| 49.2 | 33.7 \|\| 24.7 | 63.2 \|\| 31.3 | 6.18 \|\| 7.00 | 66.8 \|\| 68.1 |
| Cascaded | OpenVoice V2 | 27.7 \|\| 24.7 | 60.2 \|\| 53.5 | 63.1 \|\| 46.4 | 32.5 \|\| 41.4 | 73.4 \|\| 40.5 | 2.37 \|\| 2.65 | 77.5 \|\| 73.6 |
| Cascaded | Fish-Speech | 26.6 \|\| 23.3 | 73.8 \|\| 79.5 | 61.4 \|\| 69.6 | 17.7 \|\| 10.1 | 60.5 \|\| 51.5 | 2.46 \|\| 1.54 | 67.6 \|\| 82.5 |
| Cascaded | XTTS-v2 | 26.4 \|\| 21.7 | 54.0 \|\| 61.5 | 58.3 \|\| 50.4 | 27.3 \|\| 36.6 | 70.2 \|\| 36.5 | 5.02 \|\| 2.79 | 74.4 \|\| 58.2 |
| Ours | PACT | 30.7 \|\| 29.3 | 79.3 \|\| 82.9 | 72.9 \|\| 72.5 | 8.9 \|\| 12.4 | 75.3 \|\| 54.2 | 1.20 \|\| 1.49 | 84.2 \|\| 77.7 |

上表显示 PACT 在内容、语用和音色 3 个主轴上双向都领先，例如西到英内容 30.7、语用 79.3、音色 72.9，英到西内容 29.3、语用 82.9、音色 72.5，同时情绪分布散度和韵律误差也更低。但单项并非全面压倒一切，例如英到西语用上 SeamlessExpressive 达到 81.4，Fish-Speech 在时长和部分情绪指标上有竞争力，说明基线各有所长。论文的判断是只有 PACT 在多维上同时保持高位，这支持目标语用控制的价值，但证据只限这 30 对重演和所用自动指标。代价是需要配对 DRAL 拟合投影、需要目标语言适配器训练，以及西英方向依赖 400 小时预训练。本表数值与单位依据论文 PDF。

### 人工听感是不是和自动语用指标一致

除了自动指标，论文在西到英方向随机抽 10 条，让 5 位熟练英语听者按 1 到 5 打分，维度是语用相似度、说话人相似度和自然度。语用相似度看情感、紧迫、强调、节奏和会话态度像不像参考，说话人相似度看像不像同一人，自然度只看自身流利可懂和有无瑕疵。结果是 PACT 在语用 3.42 和音色 4.08 上最高，自然度 3.64 低于 Qwen3.5-Omni-Plus 的 4.78。

自动语用分与人工语用分在样本上呈显著正相关，皮尔逊 0.413、斯皮尔曼 0.414，p 均约 0.003，支持用它做主要自动指标，但相关只是中等，说明自动指标不能代替人工。没有胜出的地方也很清楚：要最自然的语音，论文数据里反而是语音大模型更好，表达像和听着自然不是同一个目标，选系统时要按应用权衡。

### 拿掉投影、校准和预训练后会发生什么

消融要回答每个部件是不是必要，全部用同一语义文本、同一冻结生成器和同一说话人接口，只改语用部分。Base 是默认合成提示，无源条件；Constant 是和输入无关的全局可学习提示，检验是不是只是多了 7 个可训练单元；Source 是把源向量直接送适配器，不做目标投影；Calibration 变体是西到英去掉校准、英到西加上校准，和最终配置相反。

去掉预训练是西到英去掉 Emilia 预训练。每格同样报告双向，横杠表示不适用。

| Variant | ASR-BLEU | Prag Sim. | Spk Sim. |
| --- | --- | --- | --- |
| Base | 27.0 \|\| 22.6 | 72.1 \|\| 80.3 | 69.5 \|\| 69.4 |
| Constant prompt | 27.6 \|\| 26.1 | 71.8 \|\| 80.8 | 64.0 \|\| 69.1 |
| Source prompt | 29.6 \|\| 27.4 | 77.4 \|\| 81.7 | 70.0 \|\| 71.1 |
| Calibration variant | 29.8 \|\| 25.3 | 78.9 \|\| 81.2 | 71.7 \|\| 70.9 |
| w/o pretraining | 29.6 \|\| – | 77.8 \|\| – | 70.9 \|\| – |
| PACT | 30.7 \|\| 29.3 | 79.3 \|\| 82.9 | 72.9 \|\| 72.5 |

上表显示源条件提示是必需的，Base 和全局提示都明显低于 PACT，说明不是靠多几个单元取胜。源向量直接提示好于无提示，但仍低于做了目标投影的 PACT，支持先换空间再引导。校准必须分方向：西到英去掉校准后三项都掉，说明有预训练的英语侧需要约束到可实现子空间；英到西加上同样校准则反而下降，论文推测是西班牙语侧只用 DRAL 训练，过度约束会压掉有用变化，但这只是推测，还需更多数据验证。去掉 Emilia 预训练同样三项都掉，说明大规模表达接触有助于适配器稳定对接冻结的生成器，代价是训练成本更高。本表数值与单位依据论文 PDF。

### 结论在什么条件下才成立

首先是数据范围小，评测只有 30 对有转写的重演，10 条做主观，统计力有限，换一批会话、换一种情感分布结果可能变化。其次是语言对单一，只验证了西班牙语和英语双向，而且两方向训练资源不对称，英语有 400 小时预训练而西班牙语没有，因此方向差异可能来自数据而不是语言本身。

再者是指标局限，音色和语用都是和目标重演比，这种目标参考协议适合测目标实现，但不等于跨语言听感下的本人相似度，自动情绪和韵律诊断也只是辅助。论文没有报告延迟、实时率和推理显存，单卡 RTX 5090 能跑通不等于能实时口译，也没有测量误判或滥用风险。容易误解的是冻结生成器不等于输出确定，采样和解码仍有随机性；没有公开资源不等于方法无效，只是复现需要自己重做投影和适配器。

### 复现第一步做什么、需要哪些关键设置

复现不要先调大模型，先把评测条件对齐。第一步是拿到 TOPI 的 30 对评测对和 DRAL 训练切分，按 2577 训练加 286 开发划分，用同一份 Whisper Large V3 转写加 Qwen2.5-72B-Instruct 翻译缓存文本，保证基线和 PACT 文本一致。接着用 HuBERT Large 按语言选维度抽语用向量，核对 101 和 103 维，再在训练切分上拟合 64 成分的偏最小二乘投影和目标均值与子空间。

适配器按轻量多层感知机实现，隐层 512、GELU 加层归一化，输出 7 个 896 维，学习率 1 乘 10 的负 5 次方，1000 步热身，梯度裁剪 5，累积 2，音频 24 kHz，提示长度从 1 到 15 中在开发集选 7。校准只在西到英用 k 为 64、系数 0.25，英到西关闭。需要区分三件事：代码可运行、权重可下载、数据可获取都要分别确认，不能混为一谈，论文没有给出公开声明，核验也没有发现可用作者资源。

### 什么时候值得尝试、还需要补什么

如果应用是跨语言配音或讲解，需要在目标语言里自然还原强调和停顿，而且已有冻结的高质量合成器不想动，PACT 的思路值得尝试：另加一路目标空间语用提示，比直接搬源风格更稳，比全局提示更具句子针对性。复现第一步是先固定文本和说话人接口，再只调语用投影与适配器，用开发集定校准开关。

还需要补的验证包括更大规模评测、更多语言对、两方向同等预训练下的对照，以及延迟与成本测量，才能判断它在实时场景是否划算。总体看，论文直接报告的是在特定小规模重演集上的多维平衡优势，证据支持目标投影和分方向校准的必要性，但远未证明它是通用最优解，后续工作应在相同文本和相同说话人条件下继续比较。

<details>
<summary>📎 论文与评分元数据</summary>

排名：前50% | 文档类型：方法研究 | [arXiv 原文](https://arxiv.org/abs/2610.18247v1)

</details>

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。

- 评分规则：type-aware-v1

- 评分模型：muse-spark-1.3-contributor

- 评分请求协议：openai_responses

---

[← 返回 2026-10-15 语音/音乐/音频论文速递](/audio-paper-digest-blog/posts/2026-10-15/)
