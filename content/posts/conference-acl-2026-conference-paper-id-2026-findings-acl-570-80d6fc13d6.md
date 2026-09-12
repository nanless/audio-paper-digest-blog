---
title: "VoiceStar: Robust Zero-Shot Autoregressive TTS with Duration Control and Extrapolation"
date: 2026-09-12
draft: false
description: "针对零样本语音克隆中对齐脆弱、时长不可控和长于训练则崩溃的问题，VoiceStar 用进度监控旋转位置编码与延续加提示混合训练实现时长控制与外推，最强证据是 40s-50s 外推下词错率 11.91 对 F5-TTS 的 52.44，代价是长上下文下说话人相似度略低与自回归推理慢。"
tags: ["自回归模型", "零样本", "语音", "文本到语音"]
categories: ["acl-2026 论文"]
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_paper_id: "conference:acl:2026:conference-paper-id:2026.findings-acl.570"
paper_digest_source_kind: conference
paper_digest_conference_id: "acl-2026"
paper_digest_conference_record_url: "https://aclanthology.org/2026.findings-acl.570/"
paper_digest_conference_pdf_url: "https://aclanthology.org/2026.findings-acl.570.pdf"
paper_digest_api_reader_contract: "beginner-researcher-v3"
paper_digest_api_reader_article_sha256: "6e81b35fc5ba100c5197f5b94c0a36ac401e35f79fd5c88df8002654e5ead653"
paper_digest_api_reader_plan_sha256: "08e0169f3ac67145d21d2d79e921dfa25fcb8286f58d797fe17c5070cd12dccc"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings-v4"
paper_digest_api_reader_source_bindings_sha256: "d70eb9ef26b712d2d6d9c80ba966dc54c288268a306e26d4eceb2fb38e3f0a67"
paper_digest_api_reader_source_table_count: 2
paper_digest_api_reader_source_formula_count: 0
paper_digest_api_reader_structured_artifacts_sha256: "2ea912cb929c25d695338282d212173a401a7ebd5e4dd1bb1cb8624274517ce9"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity-v1"
paper_digest_api_reader_author_identity_sha256: "7db002aaa116daa6d426dcaff55188d8f1da9d3f7f1e776a00b2b7ce531366a9"
paper_digest_api_reader_author_count: 5
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity-v1"
paper_digest_api_reader_resource_identity_sha256: "cf23a19409588f5f750bc4696e3786e9b4afc11d714e1e6f7cf5e1b484811e4b"
paper_digest_api_reader_resource_count: 0
paper_digest_api_reader_decision_projection: "api-reader-decision-projection-v2"
paper_digest_scoring_contract: "api-scoring-audit-v2"
paper_digest_taxonomy_contract: "paper-taxonomy-flat-tags-compat-v1"
paper_digest_taxonomy_selection_contract: "paper-taxonomy-selection-v1"
paper_digest_taxonomy_registry_version: "paper-taxonomy-v1"
paper_digest_taxonomy_registry_sha256: "15c82a567ce5a55dc1175684ed08b64c158558639d9c8fb822c9587ec32a8778"
paper_digest_taxonomy_concepts: [{"facet":"method","id":"method.autoregressive","label":"自回归模型"},{"facet":"setting","id":"setting.zero-shot","label":"零样本"},{"facet":"signal","id":"signal.speech","label":"语音"},{"facet":"task","id":"task.tts","label":"文本到语音"}]
paper_digest_primary_task: "文本到语音"
paper_digest_primary_method: "自回归模型"
paper_digest_score: 7.4
paper_digest_rank_bucket: "前50%"
paper_digest_document_type: "模型报告"
paper_digest_conference_structure: replayable-pdf-layout-v1
---

# 📄 用进度刻度对齐文本与语音：VoiceStar 如何同时做到时长可控与超长外推

> 英文题目：*VoiceStar: Robust Zero-Shot Autoregressive TTS with Duration Control and Extrapolation*

> 会议身份：`conference:acl:2026:conference-paper-id:2026.findings-acl.570`


> ✅ 来源为官方会议 PDF；表格与 Figure 按原文证据绑定。PDF 公式以原页区域图片展示，未冒称作者原始 TeX。

> 会议来源：[官方记录](https://aclanthology.org/2026.findings-acl.570/) · [官方 PDF](https://aclanthology.org/2026.findings-acl.570.pdf)

标签：#自回归模型 #零样本 #语音 #文本到语音

评分：**7.4/10** | 创新 1.6/2 | 技术严谨 1.2/1.5 | 实验充分 1.3/1.5 | 清晰度 0.8/1 | 影响力 1.2/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 1.0/1.5

排名：前50% | 文档类型：模型报告

## 👥 作者与机构

- Puyuan Peng：机构信息未能从会议 PDF 纯文本可靠映射
- Zhisheng Zheng：机构信息未能从会议 PDF 纯文本可靠映射
- Shang-Wen Li：机构信息未能从会议 PDF 纯文本可靠映射
- Abdelrahman Mohamed：机构信息未能从会议 PDF 纯文本可靠映射
- David Harwath：机构信息未能从会议 PDF 纯文本可靠映射

## 📌 核心摘要

零样本语音合成输入为数秒参考语音与目标文本，输出为克隆音色且可懂自然的目标语音，难点在于文本语音对齐脆弱、目标时长不可控且长于训练长度时易崩溃。先由编码器读入国际音标转写的目标与参考文本并以分隔符区分二者，负责形成可对齐的文本表示，输出的文本表示直接送入解码器作为交叉注意条件。再由解码器自回归预测Encodec声学token，负责在进展监控旋转位置编码下将分数进度插值为相对位置并感知目标时长以控制结束，其输出的token序列即为可控时长语音的离散表示。最后读入同一说话人的单话语延续采样与跨话语提示采样并以一定概率切换进行延续提示混合训练，负责将解耦后的音色克隆与韵律迁移输入暴露给模型以缓解训练推理失配，得到的训练权重直接用于推理时的零样本提示。与直接拼接文本语音的解码器结构相比，该设计把对齐、时长控制与外推统一为进度插值问题而非绝对位置外推。在长上下文评测设置下，VOICESTAR的WER为11.91，低于F5-TTS的52.44。其适用边界受限于依赖真实目标时长与Libriheavy长语音评测，估计时长与开放域风格尚未验证，长语音说话人相似度仍有差距，训练成本为在8张L40与16张GH200上训练8天，推理开销表现为840M模型的实时因子大于1。

## 🔗 开源与复现资源

本次未形成可展示的已核验资源记录，开放状态尚未核实。
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 输入是什么，输出是什么，哪些信息必须保留？

本文的输入是两部分：一小段参考语音及其对应的提示文本，加上需要合成的目标文本。目标是生成一段新语音，它读出目标文本的内容，同时听起来像参考语音的说话人。举例来说，这是一个教学例子：给 5 秒的说话人 A 的录音和一句新句子，模型要输出同一音色朗读新句子的波形。必须保留的信息有 3 类：音色身份要保留，目标文本的字词顺序要读准，生成时长要可指定。

论文把这个问题放在零样本语音克隆下研究，即测试说话人在训练中没有出现过，只能靠上下文学习临场模仿，推理时仅用数秒参考语音作为提示。输出不是直接写波形采样点，而是先预测神经音频编解码器产生的离散声学 token，再由编解码器解码回波形。主模型使用 4 码本 50 赫兹的 Encodec 分词器，并对多码本采用延迟模式，声学 token 分辨率是每 token 约 0.02 秒。

评价围绕可懂度、音色相似度、自然度和时长误差展开，资源状态为本次未发现可验证的公开代码与模型链接，因此复现只能按论文文字重走流程。

### 同类路线为什么在长语音和时长控制上容易失效？

当时主流的零样本方案有两条路线。一条是神经编解码语言模型，以 VALL-E、VoiceCraft、CosyVoice、Llasa 为代表，通常把文本 token 和语音 token 拼成一个长序列，用解码器自回归预测，靠标准位置编码让模型自己学对齐。另一条是扩散与流匹配模型，以 Voicebox、E2-TTS、F5-TTS、MaskGCT 为代表，用掩码重建训练，天然更容易做时长与掩码控制。论文指出，前者在短句上音色相似度高，但存在 3 类短板：缺少细粒度的时长控制手段，难以指定输出多长；缺少显式的文本语音对齐，训练初期没有单调偏置，容易跳词、重复、加长静音。

把克隆当作语音延续来训练，参考的情感韵律会泄漏到生成中，目标文本需要的韵律不能独立推断。VAT 同样用编码器解码器并能外推，但论文报告它不能同时控制时长，且不是零样本克隆。Nishimura 等人的长语音工作是直接在长语音上训练，而本文训练只用不超过 30 秒的短语音，却要求推理到 50 秒，这把外推压力完全留给位置编码与架构。

### 要解决的矛盾是什么，成功标准如何定义？

矛盾在于训练短而推理长，且推理要定长。训练最大上下文长度为 30 秒，测试却要覆盖 20 秒到 50 秒的提示加生成总长。如果用绝对位置编码，40 秒到 50 秒的位置在训练中从未见过，模型必然面对未见位置。成功标准按论文分为四档：20 秒到 30 秒为训练时长内，30 秒到 40 秒与 40 秒到 50 秒为外推。指标方向是词错率越低越好，说话人相似度越高越好，主观可懂度与自然度越高越好，时长差定义为目标时长与实际时长绝对差越小越好。

论文还要求同时满足零样本、时长可控、外推三项，表 1 的概念对比把 VoiceStar 标为唯一同时具备自回归、开放、克隆、时长控制与外推的模型。另一个隐含标准是不能用训练集的长语音作弊，作者明确只用不超过 30 秒的 utterance 训练，以便与基线公平比较外推。

### VoiceStar 让一个样本走完哪条流水线？

拿一个训练或推理样本跟踪全程更易理解。输入端先把全部文本转成国际音标音素，工具为 espeak-ng。编码器读入提示文本、分隔符、目标文本 3 段；解码器读入提示语音 token、分隔符、已生成的目标语音 token。编码器与解码器之间用交叉注意连接，解码器内部用自回归自注意。

位置信息由进度监控旋转位置编码统一提供，而不是正弦或普通旋转编码。训练时只对目标语音 token 计算损失，提示部分只做条件。推理时用户先给定目标总时长 T，模型逐 token 预测声学 token，当进度达到 100% 时应学会输出结束符，从而实现定长。基线做法是把目标文本与目标语音全部拼进同一个解码器，用普通位置编码区分先后，文本与语音的对齐完全靠学习。下图左右对比把这种差异画了出来，左侧是编码器解码器加进度编码，右侧是通用的解码器结构。

为理解左右两条路径的差异，先看左侧文本如何分块进入编码器，再看右侧文本与语音如何混排进入同一解码器，最后看交叉注意箭头在何处把两条模态汇合。

> **看图路径：** 1. 先沿左侧编码器到解码器的交叉注意箭头看主路径；2. 再看编码器下方的提示文本与目标文本色块划分；3. 最后对比右侧通用解码器-only 模型的位置编码堆叠方式

[![原论文 Figure 2：Left: The architecture of VOICESTAR.](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/acl-2026/36f2ba15a398/figure-2.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/acl-2026/36f2ba15a398/figure-2.png)

*论文图 2。原论文 Figure 2：“Left: The architecture of VOICESTAR. Right: the common general architecture for zero-shot TTS models, such as VALL-E (AR part), VoiceCraft, CosyVoice, Llasa etc.”。*

左侧粉色大块上方标出编码器与解码器，中间箭头标为交叉注意，下方小色块区分提示、分隔与目标；右侧单个解码器下方标出 PE1 到 PE7 的绝对位置。左侧的要点是文本与语音各有自己的进度标尺，右侧的要点是所有 token 共享一套绝对序号。这种分离是后续时长控制与外推的基础，因为目标长度 T 可以独立指定而不打乱文本侧的编码。

### 进度编码如何把外推变成插值？

白话先行：普通旋转位置编码按第几个 token 旋转，进度编码按走到全长的百分之几旋转。英文名为 Progress-Monitoring Rotary Position Embedding，缩写为 PM-ROPE。公式层面，键向量与查询向量不再用绝对位置 s 与 t，而是用 s 除以源总长 S、t 除以目标总长 T，再乘以伪总长 N 做旋转。源总长 S 是编码器文本总长，目标总长 T 是期望的语音总长，N 是超参数，论文所有用 PM-ROPE 的模型都设 N 为 2000。键与查询的内积因此变成相对进度差 t/T 减 s/S 的函数，保留了旋转编码随距离衰减的性质。

在解码器自注意中，它告诉当前声学 token 在整个目标中的位置，从而支持时长控制；在编码器到解码器的交叉注意中，它让声学 token 优先注意相同相对位置的音素 token，提供从训练开始就存在的平直启动对齐。外推的关键在于编码器与解码器统一在固定区间 0 到 N 内采样点，长序列只是更密集地采样，不会遇到未见过的绝对位置。下图用 T 等于 4 训练、T 等于 7 推理的例子说明同一区间内的插值思想。

要读懂该示意，先确认上下两行的左右端点同为 0 与 N，再数每行的圆点个数对应序列长度，最后体会点变密但区间不变即为插值。

> **看图路径：** 1. 先看上行训练 T 等于 4 时的四个采样点；2. 再看下行推理 T 等于 7 时的七个采样点；3. 最后确认两行都落在同一 0 到 N 区间内

[![原论文 Figure 3：An example on how PM-ROPE turns extrapo- lation into interpolation: during training, the maximal…](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/acl-2026/36f2ba15a398/figure-3.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/acl-2026/36f2ba15a398/figure-3.png)

*论文图 3。原论文 Figure 3：“An example on how PM-ROPE turns extrapo- lation into interpolation: during training, the maximal training sequence length is 4, and during inference the target length is 7.”。*

上行 4 个点代表训练最大长度 4，下行 7 个点代表推理目标长度 7，两行都落在同一蓝色横轴上。这种画法对应正文的解释：更长的序列通过在 0 到 N 内插值采样更多点来处理。消融显示必须在编码器与解码器同时使用 PM-ROPE 才能外推，否则交叉侧仍会越界。

**神经编解码语言模型 × 编码器解码器：** 神经编解码语言模型负责把语音波形先变成离散声学 token 再自回归预测，编码器解码器负责把输入文本与输出语音分开处理；前者提供零样本克隆的建模能力，后者提供让文本与语音交叉注意的通道，二者搭配后交叉注意才能装入进度对齐，新增作用是文本与语音不再挤在同一序列里竞争位置。

**进度监控旋转位置编码 × 时长控制：** 进度监控旋转位置编码分工是用相对进度 s/S 与 t/T 代替绝对位置做旋转，时长控制分工是推理前给定目标总长 T 并在每步告知已走多远；搭配理由是解码器自注意看到当前位置占目标的比例，跨注意看到语音进度与文本进度的差，新增作用是模型学会在进度到 100% 时输出结束符从而定长生成。

### 混合训练与数据增强具体如何操作？

训练数据由 Emilia 英文过滤后约 40K 小时、Libriheavy 随机抽取 25K 小时组成，总计 65K 小时，均只保留不超过 30 秒的 utterance，并保留说话人标签以便同说话人采样。Libriheavy-long 虽有 20 秒到 100 秒的重切分，但为公平比较外推而不用其长片段训练。每次迭代以概率 p 做两种采样之一：以 1-p 做标准延续，即取一个 utterance 遮罩一部分，用未遮罩部分做参考、被遮罩部分做目标；以 p 做提示模式，即从同一说话人随机取两个不同 utterance，一个做参考、一个做目标，并用可学习的分隔 token 隔开参考与目标。

选中提示后，以概率 p prime 对参考做速度扰动，变速因子范围为原时长的 1 正负 0.25，只扰参考不扰目标。优化器用 ScaledAdam，调度为 Eden，基础学习率为 0.03，主模型先训 50k 步码本权重为 5、1、0.5、0.1，再追加 18k 步权重改为 2.5、2、1.5、0.6，最大批量主模型为 1.78 小时音频，消融模型为 0.3 小时。推理用 top-k 采样 k 为 10。需要指出的缺项是论文未报告 p 与 p prime 的最终取值，只在消融图中扫描了 0 到 1 与 0 到 0.5 的影响，复现时需自行按图选点。

**延续提示混合训练 × 速度扰动：** 延续提示混合训练分工是以概率 p 在同一说话人的不同 utterance 间做提示与目标配对、以 1-p 做同一 utterance 的遮罩延续，速度扰动分工是只对参考提示做 1±0.25 范围的变速；搭配理由是前者切断参考韵律与目标韵律的必然一致，后者进一步打散语速的照抄，新增作用是推理时参考情感与目标文本不一致也不被带偏。

### 在什么数据与指标上比较，条件是否一致？

短语音任务用 Seed-TTS 英文评测集与 Librispeech-PC，各约 1000 对提示目标对，时长均小于 10 秒。长语音任务从 Libriheavy 测试与验证集取样，20 秒到 30 秒取 1000 对，30 秒到 40 秒取 500 对，40 秒到 50 秒取 100 对，因长样本稀缺而动用验证集，但声明不用它调参与早停。消融另取 Libriheavy 验证集小于 20 秒的 1000 条做短消融，20 秒到 30 秒的 1000 条做外推消融，且与测试集无重叠。

时长给定方式分两种：小于 20 秒的测试集按参考语速每字符秒数乘以目标字符数估计，消融与长语音评测用真实时长，以保证落入目标区间并能与可控时长模型比较，附录另报估计时长的性能下降。自动指标为词错率与说话人相似度，短评测用 Whisper-v3 识别与 WavLM 声纹，长评测用更准更快的 Whisper Large-v3-turbo，消融另加 UTMOS 自然度与时长差。主观用亚马逊众包，短集用 7 级比较平均意见分对真值，长集用 5 级平均意见分评可懂度、自然度与相似度，每样本分别收 10 个与 5 个打分，波形统一重采样到 16 千赫。

基线包含 VoiceCraft、FireRedTTS、CosyVoice 系列、MaskGCT、F5-TTS、Llasa 1B，均用官方代码复现，主模型 840M 参数含 12 层编码器与 40 层解码器，隐维 1024，16 头。

### 长短语音的主结果支持什么判断？

先看外推主结果。所有模型训练最大长度同为 30 秒，测试按总上下文长度分三档，指标方向为词错率越低越好。要比较的问题是相同时长控制能力下谁在训练时长内外都保持可懂，公平条件是都给定真实目标时长且都只见过 30 秒内语音。下表整理长上下文的词错率，数值保留原文写法。

表前比较问题已明确：给定目标时长时，外推档的词错率是否随长度急剧恶化，公平条件为同为 30 秒训练上限与同为真实时长输入，指标方向为词错率越低越好。

| 模型 | 20s-30s 词错率 | 30s-40s 词错率 | 40s-50s 词错率 | 训练最大长度 |
| --- | --- | --- | --- | --- |
| F5-TTS | 5.31 | 34.15 | 52.44 | 30 seconds |
| VoiceStar | 3.53 | 7.27 | 11.91 | 30 seconds |

表后解释需要同时讲收益与代价。VoiceStar 在三档全面低于 F5-TTS，30 秒到 40 秒档为 7.27 对 34.15，40 秒到 50 秒档为 11.91 对 52.44，支持其外推更稳的判断；代价是 40 秒到 50 秒档词错率仍从 3.53 升至 11.91，且说话人相似度在长档为 0.70 左右，略低于 MaskGCT 在 20 秒到 30 秒档的 0.76。论文听感分析指出失败模式不同：F5-TTS 与 MaskGCT 倾向音色像但吐出不可懂的随机词，VoiceStar 倾向紧扣文本但音色略偏。短语音上 Librispeech-PC 的人评自然度与相似度比较分分别为 0.18 与 0.60，为同期最优，Seed 英文词错率 2.15 与 F5-TTS 复现的 1.78 接近，但人评相似度略低于 Llasa 1B，说明自动相似度与人听不完全一致。长语音评测统一用真实时长作为目标时长输入，只比较同样可控时长的模型，避免估计时长落到区间之外。

再看随长度变化的曲线。横轴为提示加生成总长，纵轴为词错率，2 模型训练上限同为 30 秒，蓝色星线为 VoiceStar，橙色圆点线为 F5-TTS。

> **看图路径：** 1. 先看横轴四档上下文长度与纵轴词错率的定义域；2. 再对比蓝色 VoiceStar 线与橙色 F5-TTS 线在 30 秒后的分叉；3. 最后确认两模型训练最大长度同为 30 秒的前提

[![原论文 Figure 1：WER comparison between our VOICES- TAR and F5-TTS (Chen et al., 2024c) under different context…](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/acl-2026/36f2ba15a398/figure-1.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/acl-2026/36f2ba15a398/figure-1.png)

*论文图 1。原论文 Figure 1：“WER comparison between our VOICES- TAR and F5-TTS (Chen et al., 2024c) under different context lengths. Both models are trained with maximal context length of 30 seconds.”。*

像素显示小于 20 秒时两线几乎重合，20 秒到 30 秒仍接近，从 30 秒到 40 秒起橙线陡升至 30 以上并在 40 秒到 50 秒超过 50，而蓝线缓慢升至 10 左右。这种分叉支持外推差距随长度放大的判断，但也提醒蓝线并非水平，超长仍有退化。

**提示重复 × 说话人相似度：** 提示重复分工是在推理输入端把参考语音与其文本重复多次，说话人相似度分工是用 WavLM 声纹模型度量生成与参考的音色接近程度；搭配理由是重复增加了注意加权求和中真实参考 token 的占比，使模型更偏向参考音色，新增作用是在 VoiceStar 的混合训练下相似度提升而词错率不明显恶化。

### 拿掉每个部件会发生什么，提示重复为何只对本模型有效？

消融要回答 3 个操作问题：编码器解码器是否必要，PM-ROPE 是否带来时长与外推，混合训练与增强是否提升可懂度。实验用 230M 小模型、最大 20 秒上下文、小于 20 秒的 1000 条验证集。下表整理架构与训练的消融，词错率越低越好，时长差越小越好。

表前比较问题是各部件的增量是否可分离，公平条件为同为小模型与同为 20 秒训练上限，指标方向为词错率与时长差越低越好，自然度与相似度越高越好。

| 结构 | 位置编码 | 训练 | 词错率 | 时长差 |
| --- | --- | --- | --- | --- |
| Dec | Sinusoid | Continuation | 11.04 | 1.245 |
| Enc-Dec | RoPE | Continuation | 8.82 | 1.812 |
| Enc-Dec | PM-ROPE | Continuation | 8.49 | 0.009 |
| Enc-Dec | PM-ROPE | CPM | 6.42 | 0.009 |
| Enc-Dec | PM-ROPE | CPM+SA | 5.66 | 0.009 |

表后解释需点出收益与反例。从解码器到编码器解码器，词错率从 11.04 降至 8.82，但时长差从 1.245 升至 1.812，说明架构本身不给时长控制；换 PM-ROPE 后时长差降至 0.009 的编解码分辨率下界，词错率微降至 8.49；加混合训练降至 6.42，再加速扰动降至 5.66，支持对齐与失配缓解的叠加作用。外推消融显示编码器与解码器必须同时用 PM-ROPE，同时使用时 20 秒到 30 秒词错率为 6.75 对普通 RoPE 的 11.46，若只在解码器用则恶化至 28.67。

未胜出项是 UTMOS 在加增强后从 3.365 微降至 3.345，说明可懂度收益不等于自然度同步提升。提示重复方面，VoiceStar 重复 0 到 3 次时词错率几乎不动而相似度从约 0.63 升至 0.66，超过 6 次则双双恶化；F5-TTS 重复至训练上限时词错率从 3.1 恶化至 75.4，说明该技巧依赖混合训练带来的解耦，不能直接搬运。

### 哪些边界尚未验证，哪些代价必须说明？

论文自述两项局限。第一是长语音的说话人相似度存在差距，因上下文已达训练上限，过度重复提示会显著损害可懂度，因此长档不敢多重复，相似度落后于同期最优。作者认为这不是主思想的缺陷，可换更先进的编解码器或多阶段建模弥补，但这属于待验证的推测。第二是生成速度，主模型 840M 参数的实时因子大于 1，不能快于实时生成，量化、分组预测、投机解码等加速手段均未实测。

此外还有三项未测量：估计时长代替真实时长时性能在多数档下降，例如 VoiceStar 在 40 秒到 50 秒用估计时长词错率从 11.91 升至 17.33，说明实际部署需另训时长预测器；推理开销与输出帧率未与延迟挂钩讨论；众包只允许美英加澳工人，作者承认这只是母语的粗代理，可能引入评测偏置。不得把总体趋势推广为每步成立，长档词错率仍随长度上升即是 1 例。

### 复现应先做什么，需要哪些超参数与信息条件？

复现先做数据与分词：按论文过滤 Emilia 英文与 Libriheavy 抽样，只留 30 秒内 utterance 并保留说话人标签，用 espeak-ng 转国际音标，用 VoiceCraft 发布的 4 码本 50 赫兹 Encodec 做声学 token 并实现延迟模式。模型按消融 230M 先行，主模型为 12 层编码器加 40 层解码器、隐维 1024、16 头、伪总长 N 为 2000。训练按 ScaledAdam 加 Eden、基础学习率 0.03、50k 步码本权重 5、1、0.5、0.1 再追加 18k 步 2.5、2、1.5、0.6 的流程搭建，推理用 top-k 采样 k 为 10。时长输入必须显式给定：短集用参考语速估计，长集与消融用真实时长，提示重复策略为短任务重复至训练上限、20 秒到 30 秒重复 1 次、更长不重复。

资源状态为本次未发现完成验证的公开链接，不得声称代码模型已公开，复现预算应按主模型 8 天 8 块 L40 加 16 块 GH200 规划。还需补的验证是 p 与速度扰动概率的最优点、时长预测器接入后的端到端性能，以及长语音人评在估计时长下的变化。

### 何时值得尝试这种进度编码，何时不必？

当任务同时要求零样本音色、指定时长与超训练长度生成时，值得尝试把绝对位置换成相对进度，并把文本与语音分到编码器解码器两侧，让交叉注意学到同进度对齐。复现优先级是先验证时长差能否降到 token 分辨率下界，再验证外推词错率是否显著低于同训练上限的流匹配基线，最后才调混合比例与变速概率。当测试全在训练长度内且已有强时长模型时，不必为外推付出自回归的延迟代价。

当参考与目标情感差异不大且数据多为朗读体时，混合训练的收益可能小于论文的野外数据场景。常见误解是把提示重复当成通用提分术，论文反证显示它只在混合训练解耦后成立，直接用于延续训练的模型会诱发重复风格并推高词错率。另一个误解是把自动相似度等同于人听相似度，短集上 Llasa 自动分更低但人评更高即是反例，选型应以人评为准。

## 📐 原文公式与排版

以下展示论文原页中的数学表达区域，保留原始上下标、分式和符号排版。区域序号仅用于本文导航，不是论文公式编号。

[![原文数学表达区域 1，PDF 第 4 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/acl-2026/9fb876b7cec1/figure-1.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/acl-2026/9fb876b7cec1/figure-1.png)

区域 1 · [查看论文原页](https://aclanthology.org/2026.findings-acl.570.pdf#page=4)

[![原文数学表达区域 2，PDF 第 4 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/acl-2026/9fb876b7cec1/figure-2.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/acl-2026/9fb876b7cec1/figure-2.png)

区域 2 · [查看论文原页](https://aclanthology.org/2026.findings-acl.570.pdf#page=4)

[![原文数学表达区域 3，PDF 第 13 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/acl-2026/9fb876b7cec1/figure-3.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/acl-2026/9fb876b7cec1/figure-3.png)

区域 3 · [查看论文原页](https://aclanthology.org/2026.findings-acl.570.pdf#page=13)

[![原文数学表达区域 4，PDF 第 13 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/acl-2026/9fb876b7cec1/figure-4.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/acl-2026/9fb876b7cec1/figure-4.png)

区域 4 · [查看论文原页](https://aclanthology.org/2026.findings-acl.570.pdf#page=13)

[![原文数学表达区域 5，PDF 第 14 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/acl-2026/9fb876b7cec1/figure-5.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/acl-2026/9fb876b7cec1/figure-5.png)

区域 5 · [查看论文原页](https://aclanthology.org/2026.findings-acl.570.pdf#page=14)

[![原文数学表达区域 6，PDF 第 14 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/acl-2026/9fb876b7cec1/figure-6.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/acl-2026/9fb876b7cec1/figure-6.png)

区域 6 · [查看论文原页](https://aclanthology.org/2026.findings-acl.570.pdf#page=14)

[![原文数学表达区域 7，PDF 第 15 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/acl-2026/9fb876b7cec1/figure-7.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/acl-2026/9fb876b7cec1/figure-7.png)

区域 7 · [查看论文原页](https://aclanthology.org/2026.findings-acl.570.pdf#page=15)

[![原文数学表达区域 8，PDF 第 15 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/acl-2026/9fb876b7cec1/figure-8.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/acl-2026/9fb876b7cec1/figure-8.png)

区域 8 · [查看论文原页](https://aclanthology.org/2026.findings-acl.570.pdf#page=15)

另有 21 个候选区域因边界不明确或图片数量、尺寸限制未展开；请[查看完整论文](https://aclanthology.org/2026.findings-acl.570.pdf)中的原始排版。

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。
- 评分规则：type-aware-v1
- 评分模型：muse-spark-1.3-contributor
- 评分请求协议：openai_responses

---

[← 返回 acl-2026 论文汇总](/posts/conference-acl-2026/)
