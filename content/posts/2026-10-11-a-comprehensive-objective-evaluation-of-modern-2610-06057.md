---
title: "A Comprehensive Objective Evaluation of Modern Text-to-Speech for Turkish Using Speech Quality Assessment Models"
date: 2026-10-11
draft: false
tags: [文本到语音, 基准设计, 基准测试, 语音质量评估]
categories: [论文速递]
description: "该研究用 18 个客观指标在同一土耳其语测试集上对比四个现代合成系统与 VITS 基线和自然录音，发现各系统分别在不同指标族领先且短句与长时漂移会改变结论，代价是只用客观指标且只覆盖单一说话人。"
hiddenInHomeList: true
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_arxiv_id: "2610.06057"
paper_digest_workbench_contract: "researcher-workbench-v1"
paper_digest_reader_title: "土耳其语语音合成的多维度客观评测：自然度、清晰度与长时稳定性如何分开看"
paper_digest_original_title: "A Comprehensive Objective Evaluation of Modern Text-to-Speech for Turkish Using Speech Quality Assessment Models"
paper_digest_arxiv_version: 1
paper_digest_arxiv_versioned_id: "2610.06057v1"
paper_digest_arxiv_abs_url: "https://arxiv.org/abs/2610.06057v1"
paper_digest_arxiv_pdf_url: "https://arxiv.org/pdf/2610.06057v1.pdf"
paper_digest_primary_task: "文本到语音"
paper_digest_tags_contract: "paper-tag-flat-tags-v2"
paper_digest_tags_selection_contract: "paper-tag-selection-v2"
paper_digest_tags_registry_version: "paper-tag-catalog-v2"
paper_digest_tags_registry_sha256: "0a0847314ab2059d95efac33376414498e598a1f02a1486869bee0efc481d1f7"
paper_digest_tags_concepts: [{"facet":"task","id":"task.tts","label":"文本到语音"},{"facet":"method","id":"method.benchmark-design","label":"基准设计"},{"facet":"artifact","id":"artifact.benchmark","label":"基准测试"},{"facet":"task","id":"task.speech-quality","label":"语音质量评估"}]
paper_digest_primary_method: "基准设计"
paper_digest_score: 6.8
paper_digest_rank_bucket: "前50%"
paper_digest_document_type: "数据集与基准"
paper_digest_one_sentence: "该研究用 18 个客观指标在同一土耳其语测试集上对比四个现代合成系统与 VITS 基线和自然录音，发现各系统分别在不同指标族领先且短句与长时漂移会改变结论，代价是只用客观指标且只覆盖单一说话人。"
paper_digest_authors: [{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Yunus Emre Ozkose"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Alperen Kahraman"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Ali Haznedaroglu"}]
paper_digest_abstract_sha256: "85904335f7a93007880d347ceb702fe6aa298e18935b5c629a54c196c00590f5"
paper_digest_sidecars: {"citation.bib":{"sha256":"6c95946001abb831aad189425b416065212ce79e987ac9fd05fe4a45a1770f35","url":"/audio-paper-digest-blog/data/papers/2026-10-11/2610-06057/citation.bib"},"citation.json":{"sha256":"d25b3168a7d966b30b3c6b7927cbc875c0f6b9749a2f6d2844dabc06686aaad3","url":"/audio-paper-digest-blog/data/papers/2026-10-11/2610-06057/citation.json"},"citation.ris":{"sha256":"de4b7019d318c433bc9b29acb51288b6c76890c8db7e15ad7e054d69a1055c29","url":"/audio-paper-digest-blog/data/papers/2026-10-11/2610-06057/citation.ris"},"rethink-context.json":{"contract":"paper-research-context-v2","sha256":"267953bc8ec3c3efeddff5e40a2e986792c178d817480c402b5fc3dcb0e838cf","url":"/audio-paper-digest-blog/data/papers/2026-10-11/2610-06057/rethink-context.json"}}
paper_digest_api_reader_contract: "beginner-researcher-v3"
paper_digest_api_reader_article_sha256: "8ed9320fb3301ee5c61d5682550c14cc6cec8521493a3159b7677991d5c0216f"
paper_digest_api_reader_plan_sha256: "981f8a6d7bdc97bbe46d6f3118582d2b55e38ebc4f88d02c9e3eba5f81b1ac74"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings-v4"
paper_digest_api_reader_source_bindings_sha256: "8969b3746767235548fc9462921882d56b260822417d39a7332ee8a807bfb206"
paper_digest_api_reader_source_table_count: 4
paper_digest_api_reader_source_formula_count: 0
paper_digest_api_reader_structured_artifacts_sha256: "580040bb065a9084d7245f4a7b89bfafc87027c44e161a5c7c5e064e5e8ed90f"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity-v1"
paper_digest_api_reader_author_identity_sha256: "3a27ab694fa17334cf85c31ff1c321d00d757a67d7c2e13dbd4fc0e760e86463"
paper_digest_api_reader_author_count: 3
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity-v1"
paper_digest_api_reader_resource_identity_sha256: "c22c2efde79cd5b10955213abeded31dc4aa722de3455ad4677c34b9cb4d8b4d"
paper_digest_api_reader_resource_count: 2
paper_digest_api_reader_figure_persistence: "ephemeral-no-persisted-figure-assets-v1"
paper_digest_api_reader_decision_projection: "api-reader-decision-projection-v2"
---

# 📄 土耳其语语音合成的多维度客观评测：自然度、清晰度与长时稳定性如何分开看

> 英文题目：*[A Comprehensive Objective Evaluation of Modern Text-to-Speech for Turkish Using Speech Quality Assessment Models](https://arxiv.org/abs/2610.06057v1)*

> 标签：#文本到语音 | #基准设计 | #基准测试 | #语音质量评估
>
> 评分：**6.8/10** | 创新 1/2 | 技术严谨 1/1.5 | 实验充分 1.2/1.5 | 清晰度 0.7/1 | 影响力 0.8/1.5 | 开源 1/1.5 | 可复现 0.1/0.5 | 工程/实践 1/1.5


## 👥 作者与机构

- Yunus Emre Ozkose：机构信息未在 arXiv HTML 中可靠披露
- Alperen Kahraman：机构信息未在 arXiv HTML 中可靠披露
- Ali Haznedaroglu：机构信息未在 arXiv HTML 中可靠披露

## 📌 核心摘要

本文输入土耳其语句子，输出对应目标说话人语音，难点是土耳其语形态丰富而现有零样本克隆多在英语和中文验证，跨语言韵律和发音迁移是否成立缺少受控证据。评测先用100条短句、100条中句和100条长句合成各系统语音，再用18个客观指标分别度量习得自然度预测、清晰度和信号质量、说话人相似度、分布保真度和低层声学，最后把长句切成2秒块追踪说话人身份漂移和自然度漂移。结果呈现按指标族划分格局，VITS占DNSMOS-Pro族和SpeechLMScore，OmniVoice零样本配置扫过SQUIM三项加AudioBox-PQ，CosyVoice占UTMOS v2、SCOREQ、WhisQA和TTSDS v2。在全测试集均值上，VoxCPM2的说话人相似度为0.881，低于自然参考的0.894，但高于同表其余合成系统，最接近真实语音。同在全测试集均值上，多个合成语音在信号类预测上超过自然参考，说明此类指标奖励干净理想音频而非感知真实。短句是最难设置，Chatterbox在短输入上多指标塌陷而中长句回升，CosyVoice、OmniVoice与VoxCPM2相对稳健。结论只适用于该单说话人客观评测范围，未经人耳验证。原文未披露训练、推理或部署成本。

## 🔗 开源与复现资源

- 代码相关资源：<https://github.com/EmreOzkose/tr-tts-eval> — 链接可访问（HTTP 200）

- 第三方资源：<https://github.com/EmreOzkose/tr-tts-eval> — 链接可访问（HTTP 200）

可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 为什么土耳其语语音合成需要一次统一的客观评测

这篇论文要解决的是选模型难的问题。语音合成的输入是一段土耳其语文本，目标是输出保留目标说话人音色、内容可懂、听感自然的波形，必须保留的信息包括发音内容、韵律停顿和音色。传统做法靠人工平均意见分和偏好对比来选模型，又慢又贵。已有自然度预测器只能模仿其中一个维度，信号干净、发音可懂、像真人、像目标人是不同维度，单看一个分数会误导。

土耳其语是黏着语，有元音和谐和丰富的后缀，正字法比较透明，但在英语和中文上验证过的零样本克隆系统是否直接适用，并没有在同一参考和同一测试集下系统比过。论文因此固定说话人、固定测试划分和固定指标实现，做 1 次多指标横评，读者可以复述每类指标在什么条件下可信。

### 已有合成路线和评测工具各自覆盖了什么

合成路线上，传统 VITS 把声学建模和波形生成统一在一个端到端框架里，质量稳定但需要针对说话人训练，见不到的新说话人难以克隆。VALLE 一系把合成看成离散音频编码上的语言建模，用几秒提示做克隆；NaturalSpeech2 一系用连续表示加流或扩散做同一件事；YourTTS 和 XTTS 把零样本扩展到多语种。

本文的 4 个现代系统是这条线的延续，只是设计正交：CosyVoice 用大语言模型生成监督语义 token 再用流匹配重建波形，OmniVoice 用扩散语言模型风格的离散非自回归解码器直达多码本声学 token，VoxCPM2 不用离散 token 而用扩散加自回归建模连续声学空间，Chatterbox 用大语言模型式 token 模型加流匹配解码并带情感控制。评测工具上，UTMOS 和 DNSMOS 类是学习的人类评分预测器，SQUIM 和 SCOREQ 是无参考清晰度和信号质量估计，Brouhaha 估计声学条件，TTSDS 比较合成与自然特征分布。

相关工作还指出单分数回归在跨数据集评分标准不一致时脆弱，于是出现偏好对比和联合绝对与相对质量的框架。比较时必须注意输入、目标、监督和运行阶段相同，本文的贡献不是提出新合成器，而是在土耳其语上把这些路线放在同一协议下对比。

### 论文把任务切成哪几个可测量的问题

论文把选模型拆成 4 个可测量问题。第一是整体多维度对比：在同一批合成音频和自然录音上，用自然度预测器、可懂度和信号估计、说话人相似度、分布保真度和低层声学描述子分别打分，看谁在哪一族领先。第二是输入长度的影响：按字符数把测试句分成短句 0 到 50 字符、中句 51 到 150 字符、长句 150 字符以上，各 100 句，看短提示场景是否需要单独加权。第三是长句内的时间一致性：把长句切成 2 秒小块，分别跟踪说话人相似度和 UTMOS 自然度，看身份漂移和质量漂移。

第四是前端消融：对 CosyVoice 比较原始文本和音素两种输入，看透明正字法下音素是否还有增益。每个问题都有明确的测量对象和聚合方式，平均分排行榜会被拆开解读。

### 评测流水线如何从文本走到分数

流水线可以沿着一个样本理解。输入是土耳其语测试文本和目标说话人条件，目标说话人条件对零样本是 9 秒提示音频，对微调是训练中见过的说话人标识。文本先经过各系统的前端，CosyVoice 有原始文本和音素两种前端，其他系统按各自开源实现处理，再由声学模型和声码器生成 48 kHz 再按模型要求重采样的波形。输出波形进入同一套 18 个客观指标：学习型自然度预测器包括 UTMOS v2、DNSMOS-Pro 及其子头、SCOREQ、WhisQA、AudioBox-PQ、NatScore、SpeechLMScore；可懂度和信号层包括 SQUIM 的 PESQ、SI-SDR、STOI 估计和 Brouhaha 的类信噪比估计。

说话人相似度用 Wespeaker 的 ResNet221-LM 说话人验证模型在 VoxCeleb 上训练的嵌入算余弦相似；分布保真用 TTSDS v2；低层看响度 LUFS 和齿音比，判优标准是接近自然录音。长时分析额外把长句切块，计算块均值、块间标准差、随时间的线性斜率和首尾块差值。整个过程没有训练新的合成器和新的指标预测器，只是调用已有模型做推理和打分。

### 四个现代系统加一个基线的输入和结构分工是什么

CosyVoice 的输入是文本或音素，中间是来自多语种识别编码器的监督语义 token，大语言模型负责把文本映射到语义 token，条件流匹配模型负责在说话人嵌入条件下重建波形，本文评估原始文本和音素两种前端。OmniVoice 不用 2 阶段语义中介，直接用扩散语言模型风格的离散非自回归结构把文本映射到多码本声学 token，训练用全码本随机掩码并从预训练大语言模型初始化以保可懂度，本文评估微调和零样本两种配置。

Chatterbox 用约 500,000 小时训练的 0.5B 参数 Llama 风格主干做文本到 token，再用流匹配做 token 到波形，用多语种版本覆盖土耳其语，只评估零样本。VoxCPM2 基于 MiniCPM-4，不用分词器，直接在连续声学空间做扩散自回归，只评估零样本多语种检查点。VITS 是传统非零样本端到端模型，用条件变分自编码器加归一化流、对抗训练和随机时长预测器，针对特定说话人微调，作为理解充分的参照点。

各组件分工不同，因此微调与零样本配置跨不同架构、检查点和前端，并不只差适配量，不能把跨系统分数差解读为同模型加微调的收益。

**零样本克隆 × 微调：** 零样本克隆指只给一段约 9 秒的参考音频就模仿目标音色，不更新模型参数；微调指用目标说话人约 20 小时或包含多语种 2000 小时数据继续训练模型参数。二者分工不同，前者考验模型从短提示泛化，后者考验模型记住特定说话人，组合对比才能看出短提示在土耳其语上损失了多少说话人相似度，但跨架构比较时不能把分数差直接归因为微调收益。

### 18 个指标各自在测什么，为什么要分组读

自然度预测器组测量整体听感。UTMOS v2、WhisQA、SCOREQ、AudioBox-PQ、NatScore、SpeechLMScore 和 DNSMOS-Pro 各子头都是从数据学到的人类评分代理，但训练数据和偏好不同，对干净和平滑的偏好也不同。可懂度和信号组测量是否清晰可懂。SQUIM 给出无参考的 PESQ、SI-SDR、STOI 估计，Brouhaha 给出语音噪声条件估计，它们奖励低噪声和稳定浊音。说话人相似度测量音色是否跟住目标人，越接近自然录音自比的上界越好。

TTSDS 测量一批合成特征分布与自然分布的距离。低层响度和齿音比只看是否接近真人，不看越大越好。分组读的原因是这两大家族会打架：信号组可能给比真人还高的分数，自然组和分布组更贴近人感，论文主张把信号组当作干净可懂的下限，把自然组和分布组当作更关键的人感依据。

**UTMOS v2 × DNSMOS-Pro：** UTMOS v2 是学习人类平均意见分趋势的自然度预测器，关注整体像不像人；DNSMOS-Pro 是学习干净录音质量的信号质量预测器，关注噪声和失真。二者搭配的原因是干净不等于自然，组合后可以发现 VITS 这类频谱整齐的系统在 DNSMOS-Pro 上超过真人，但在 UTMOS v2 上并不领先。

### 本文训练了什么，没有训练什么，实际计算是什么

本文没有训练新的合成架构，也没有训练新的指标预测器，这点要先说清。实际发生的训练是此前的模型准备：VITS 针对特定说话人用 20 小时录音微调；CosyVoice 和 OmniVoice 用 2000 小时含英语、阿拉伯语、土耳其语和乌尔都语共 22 个说话人的数据微调，其中包含 VITS 训练用的 20 小时目标说话人数据；Chatterbox 和 VoxCPM2 只用该说话人 9 秒提示做零样本，提示文本为论文给出的土耳其语句。

评测阶段的计算是推理加打分：对 300 句测试集生成波形，再用各指标模型前向推理得到分数并按全集或长度组取均值，长时分析按 2 秒切块分别打分再算均值、标准差、斜率和首尾差。原文没有报告梯度路径、参数冻结细节和训练超参数，缺的是可复现训练的配置信息，不能从模型名字猜实现，也不能说去掉某模块必然怎样。无训练不等于输出确定，采样和切块都会带来波动。

### 测试集、参考锚点和公平条件如何固定

测试集是内部 20 小时土耳其语单说话人数据集的测试子集随机抽样，短、中、长各 100 句，按字符数划分，原始采样率 48 kHz 再按各模型要求适配。自然录音作为金参考锚点参与同一打分，不是参赛者，用于发现比真人还高的异常分数。公平条件是同一批文本、同一目标说话人、同一指标实现，CosyVoice 在总表用原始文本作为规范配置。说话人相似度用同一说话人嵌入模型算与参考的余弦相似，长时用同一 2 秒切块流程。低层响度和齿音比的判优方向是接近金参考，不是越大越好。

作者单位是土耳其安卡拉的 Sestek，评测代码已公开在论文给出的地址，可支持复现打分流程，但代码公开不等于权重可下载或系统可一键运行，三者要分开确认。

### 整体对比中谁在哪一族领先，真人锚点说明了什么

先看比较问题：在全集均值下，哪个系统在哪类指标上最好，指标方向是否一致，金参考是否始终最高。公平条件是同一测试集和同一实现，低层指标按接近真人解读。下表精选总表中的代表行，列覆盖全部系统和真人，数值保留原文写法。

| Metric | CB | CV | OV | OV-Z | VITS | VOX | Gold |
| --- | --- | --- | --- | --- | --- | --- | --- |
| dnsmos_pro | 3.564 | 3.770 | 3.954 | 3.808 | 4.225 | 3.902 | 3.601 |
| speaker-similarity | 0.873 | 0.878 | 0.843 | 0.870 | 0.875 | 0.881 | 0.894 |
| squim-si-sdr | 24.939 | 25.736 | 27.119 | 28.523 | 25.211 | 27.053 | 24.455 |
| utmos-v2 | 3.092 | 3.441 | 3.129 | 3.105 | 3.064 | 2.886 | 3.079 |
| whisqa | 4.341 | 4.720 | 4.509 | 4.448 | 4.515 | 4.575 | 4.331 |
| natscore | -1.447 | -1.233 | -1.016 | -1.128 | -1.616 | -0.917 | -1.384 |

上表显示没有全局冠军，最优按指标族 clean 切分。VITS 在 DNSMOS-Pro 族和 SpeechLMScore 领先，OmniVoice 零样本拿下 SQUIM 三项和 AudioBox-PQ，CosyVoice 拿下 UTMOS v2、SCOREQ、WhisQA 和 TTSDS，VoxCPM2 在说话人相似度、NatScore 和 Brouhaha 领先，Chatterbox 没有单项第一。关键证据是多个合成超过真人：VITS 的 DNSMOS-Pro 为 4.225 而真人为 3.601，OmniVoice 零样本的 SI-SDR 为 28.523 而真人为 24.455，AudioBox-PQ 和 NatScore 也有类似反超。因为自然语音不可能比合成更不自然，这说明信号和干净导向的预测器奖励的是理想化低噪声音频，而非人感。唯一真人稳定最高的维度是说话人相似度，真人为 0.894，合成中最接近的是 VoxCPM2 的 0.881，最远的是 OmniVoice 微调的 0.843，因此论文把说话人相似度视为克隆保真最可信的单指标。低层齿音比最接近真人的是 VoxCPM2 的 0.077 对真人 0.084，响度则按接近真人读，不能只看加粗的最响格。

读图说明：下面雷达图把 9 个 headline 指标归一化到 100 分制，图例标注各系统获胜数，适合一眼看出各家多边形在不同轴的外扩，不要只比面积。

> **看图路径：** 1. 先看雷达图外圈八个轴分别对应哪个指标族，注意数值已归一化到百分制；2. 对比绿色 CosyVoice 多边形在自然度轴的外扩与紫色 VITS 在信号质量轴的外扩；3. 看橙色 OmniVoice 零样本在信号和分布轴的位置，不要只看包络面积大小；4. 注意蓝色 Chatterbox 多边形整体偏内，确认没有单轴突出

[![原论文 Figure 1：Radar comparison of metrics, normalized to a common \[0,100\]\\% scale, with CosyVoice represented…](https://arxiv.org/html/2610.06057v1/figures/fig_radar.png)](https://arxiv.org/html/2610.06057v1/figures/fig_radar.png)

*论文图 1。原论文 Figure 1:：“Radar comparison of metrics, normalized to a common [0,100]\% scale, with CosyVoice represented by its canonical raw-text configuration.”。*

从像素可见，绿色 CosyVoice 在自然度和分布轴明显外扩，紫色 VITS 在信号质量轴顶到外圈，橙色零样本 OmniVoice 在信号和分布轴均衡靠外，青色 VoxCPM2 在相似度和分布轴靠外，蓝色 Chatterbox 整体偏内。这与表格按族切分的结论一致，也提示平均排行榜会掩盖这种结构，面向干净可懂应看 OmniVoice 零样本或 VITS，面向人感和克隆应看 CosyVoice 或 VoxCPM2。

### 句子变短时分数如何变化，哪个结论要打折

比较问题是短、中、长 3 组下分数是否稳定，是否所有系统都掉，掉的是模型缺陷还是测量伪影。下表按长度组给出代表指标，方向与总表一致，说话人相似度越高越好，SI-SDR 等信号估计越高表示越干净。

| Len. | System | DM | SPK | SISDR | UTM | WHQ | NAT |
| --- | --- | --- | --- | --- | --- | --- | --- |
| long | Chatterbox | 3.654 | 0.889 | 26.39 | 3.179 | 4.578 | -1.282 |
| medium | Chatterbox | 3.565 | 0.877 | 25.57 | 3.164 | 4.434 | -1.203 |
| short | Chatterbox | 3.335 | 0.825 | 20.36 | 2.766 | 3.607 | -2.221 |
| short | gold | 3.412 | 0.827 | 25.80 | 2.909 | 4.058 | -1.501 |

结果显示短句是最难的设置，几乎所有系统和指标在短组最低，中组和长组回升。最剧烈的是 Chatterbox 崩塌：SI-SDR 从长句 26.39 掉到短句 20.36，说话人相似度从 0.889 掉到 0.825，WhisQA 从 4.578 掉到 3.607，NatScore 从 -1.282 掉到 -2.221，Brouhaha 从 53.18 掉到 40.49，而其他系统 Brouhaha 在短组反而上升。CosyVoice、OmniVoice 和 VoxCPM2 相对平坦，OmniVoice 零样本在 3 组 SI-SDR 都是最高，VoxCPM2 在长组和中组 NatScore 最好，短组被 CosyVoice 原始文本反超。必须打折的是说话人相似度随变短下降：真人也从长句 0.917 掉到短句 0.827，说明部分下降来自短音频估计说话人嵌入本身不稳，而不全是合成缺陷。以短提示为主的语音助手和电话交互应更重短组结果，不能只看全集均值。

**说话人相似度 × TTSDS：** 说话人相似度指合成句与参考句的说话人嵌入余弦相似，衡量单句音色像不像目标人；TTSDS 指合成语音特征分布与自然语音特征分布的接近程度，衡量一批语音整体是否落在真人分布里。前者看单点，后者看分布，搭配后能区分单句很像但整体风格偏窄的情况。

**SQUIM × Brouhaha：** SQUIM 指无需参考的清晰度和信号失真估计，给出类似 PESQ、SI-SDR、STOI 的预测值；Brouhaha 指语音和噪声条件的估计，这里报告为类似信噪比的分数。二者都奖励干净可懂，搭配后可作为可懂度下限检查，但不能单独证明自然。

### 长句内说话人身份漂不漂，如何相对真人来读

比较问题是把长句切成 2 秒块后，块级说话人相似度是否随时间下滑，波动和首尾差多大。公平条件是同一分块和同一嵌入模型，波动越小越稳，斜率为负表示向后越不像参考，但真人自身也有测量漂移，必须看相对真人的差距。下表整理原文连续句中的关键数字，身份均值越高越好，波动、斜率绝对值和首尾差绝对值越小越稳。

| 条件 | 指标 | Chatterbox 零样本 | CosyVoice | VoxCPM2 零样本 | 比较对象 |
| --- | --- | --- | --- | --- | --- |
| 长句分块 | 漂移斜率 | -0.0391 | -0.0077 | -0.0115 | 相对各自真人漂移解读 |

表前说明已讲清比较问题和相对真人的公平条件，方向是波动和漂移绝对值越小越稳。表后解释是：CosyVoice 和 VITS 最稳，波动约 0.021 到 0.023，斜率约 -0.008 到 -0.013，首尾变化小；Chatterbox 和 OmniVoice 最不稳，波动约 0.033 到 0.034，首尾掉 -0.061 和 -0.051；VoxCPM2 均值居中但首尾差基本为零 -0.0003，相对真人的漂移最小，适合有声书这类分钟级内容。所有系统斜率都为负，但真人也有负漂移，所以不能把绝对下滑都算成模型缺陷。

读图说明：下面柱图按系统分组显示块波动、自身漂移、真人漂移和首尾差，蓝色越高越不稳，橙红越负表示尾部越偏离，绿色是同期真人对照。

> **看图路径：** 1. 先看蓝色柱表示分块相似度的波动，越高表示句内越不稳；2. 再看橙色本系统漂移与绿色真人漂移是否同向，差距才是模型额外漂移；3. 对比红色首尾块差值，Chatterbox 和 OmniVoice 的负向高度最明显；4. 看 VoxCPM2 红色柱接近零，确认其首尾身份变化最小

[![原论文 Figure 2：Drift and consistency metrics per system: consistency_std_mean, drift_slope_mean,…](https://arxiv.org/html/2610.06057v1/figures/fig_temporal_drift.png)](https://arxiv.org/html/2610.06057v1/figures/fig_temporal_drift.png)

*论文图 2。原论文 Figure 2:：“Drift and consistency metrics per system: consistency_std_mean, drift_slope_mean, gold_drift_slope_mean, first_last_delta_mean.”。*

从像素可见，蓝色波动柱在 OmniVoice 和 Chatterbox 最高，CosyVoice 和 VITS 最低；橙色自身漂移在 Chatterbox 和 OmniVoice 负向最深；红色首尾差同样在这两家最深；VoxCPM2 红色几乎贴零，绿色真人对照为小负，确认其身份首尾最稳。这种身份稳不等于自然度稳，需要下一节的自然度漂移对照。

### 土耳其语还需要音素前端吗，均值和稳定性怎么分开看

比较问题是 CosyVoice 原始文本与音素两种前端在全集均值和句内稳定性上有何差异，公平条件是同一声学主干和同一测试集。下表整理原文连续句覆盖的关键数字，方向按各指标原方向，低层按接近真人。

| 条件 | 指标 | 原始文本 | 音素 | 比较对象 |
| --- | --- | --- | --- | --- |
| 全集均值 | 齿音比 | 0.050 | 0.084 | 真人 0.084 音素几乎重合 |

表前已说明比较问题是透明正字法下音素是否增益，公平条件是同模型只换前端。表后解释是：差异小而杂，没有一致赢家，身份几乎不变，音素在齿音比上几乎复刻真人 0.084 对 0.084，在 SQUIM 和部分 DNSMOS 与 UTMOS 式分数略高，而原始文本在子头、NatScore 和 TTSDS 明显领先，差距分别约 0.283、0.281 和 0.743。对浅正字法这符合预期，文本已能恢复发音。真正分化在时间行为：身份轴两者几乎无差，均值都是 0.853，波动 0.021 对 0.022，首尾 -0.009 对 -0.014；自然度轴原始文本只轻微下漂而音素明显衰减，尽管音素均值略高，用均值换稳定性并不划算。

**原始文本前端 × 音素前端：** 原始文本前端指直接把土耳其语正字法字符送入 CosyVoice；音素前端指先把字符转成发音符号再送入。因为土耳其语正字法比较透明，音素能提供的信息增量很小，二者对比可以检验显式发音标注是否还有额外作用，组合看均值和句内漂移才能发现均值相近但稳定性不同。

读图说明：下面自然度漂移柱图按系统显示块波动、自身漂移、真人漂移、首尾差和与真人均值差，重点看橙红是否与绿色真人同向以及紫色均值偏移，不要把图中的 CosyVoice 标签直接等同总表原始文本配置。

> **看图路径：** 1. 先看蓝色柱整体都在 0.23 到 0.29 高度，确认自然度波动比身份波动大一个量级；2. 看橙色漂移柱正负：VITS 和两个 OmniVoice 与 VoxCPM2 为正或近零，Chatterbox 和 CosyVoice 为负；3. 看红色首尾差与绿色真人漂移的反差，Chatterbox 负向最深；4. 看紫色与真人均值差，CosyVoice 明显偏高而 VoxCPM2 明显偏低

[![原论文 Figure 3：Naturalness (UTMOS-v2) drift/consistency quantities per system: consistency_std_mean,…](https://arxiv.org/html/2610.06057v1/figures/fig_utmos_temporal_drift.png)](https://arxiv.org/html/2610.06057v1/figures/fig_utmos_temporal_drift.png)

*论文图 3。原论文 Figure 3:：“Naturalness (UTMOS-v2) drift/consistency quantities per system: consistency_std_mean, drift_slope_mean, gold_drift_slope_mean, first_last_delta_mean and mean_delta_vs_gold_mean.”。*

从像素可见，蓝色波动都在 0.23 到 0.29，比身份波动大一个量级；橙色自身漂移中 VITS 和两个 OmniVoice 与 VoxCPM2 为正或近零，Chatterbox 和 CosyVoice 为负；绿色真人漂移全部为正约 0.10 到 0.17，开头块偏低随后上升是预期形态；红色首尾差中 Chatterbox 负向最深，VITS 为正。这里必须保留一个来源冲突：网页表格的数字符号与封存连续文字和当前像素存在正负差异，本文不改矩阵消除矛盾，文字侧 VITS 和两个 OmniVoice 随真人向上而 Chatterbox 向下，像素侧橙柱 VITS 和两个 OmniVoice 与 VoxCPM2 为正而 Chatterbox 和 CosyVoice 为负，因此多数向下且普遍不跟随真人的概括不成立，应按图按系统分别读。图仅标注 CosyVoice，不能擅自把它的图值等同原表 raw 配置。

### 这些结论在什么边界内才成立

结论只在客观指标和单一土耳其语测试集内成立。说话人覆盖有限，只围绕一个目标说话人，20 小时训练和 9 秒提示的设置不能推广到多说话人和多领域。检查点是通用多语种版本，绝对分数应相对真人锚点解读，不能孤立比较。信号类预测器奖励干净平滑，会出现比真人还高的伪影，优化它们可能与人感轻微负相关。长度分析显示短句测量本身会拉低说话人相似度，长时分析显示分块测量自带漂移，都需要相对真人对照。

论文未做人工平均意见分和偏好实验，自动指标不等于人工评价，也未测量误判率、延迟和成本，不能承诺部署收益。训练资源、推理开销和实际延迟要分开讨论，总体趋势不能套到每一组。

### 要复现这套评测第一步做什么

第一步是拿论文给出的评测代码仓库，按原文链接取对应提交，先跑通自然录音的打分，确认 18 个指标的实现和采样率适配与原文一致，再生成同一 300 句的合成波形。原文写明公开的是评测代码，We release our evaluation code to support reproducible TTS evaluation，资源核验显示作者代码当前可用，但这只证明评测脚本可得，不证明各合成权重可下载或系统可一键运行，三者要分别验证。复现时固定字符数分组、9 秒提示文本、Wespeaker 嵌入模型和 2 秒切块逻辑，低层指标按接近真人记录，不要把最响当最好。遇到表格与正文符号不一致时，保留原始矩阵和绑定并在报告中注明 HTML 与封存文字的差异，不要改数凑结论。

### 什么时候值得尝试，还缺哪项验证

当任务是土耳其语短句助手且要求干净可懂，可优先试 OmniVoice 零样本或 VITS 并重点看 SQUIM 和 DNSMOS-Pro 的短组；当任务是品牌音色克隆或有声书旁白，应优先试 CosyVoice 或 VoxCPM2 并同时看说话人相似度、UTMOS v2、TTSDS 和长时首尾差，VoxCPM2 的近零身份漂移在长内容有吸引力，但要接受其自然度均值偏低。Chatterbox 在当前协议下短句崩塌明显，短提示部署应谨慎。还缺的验证是人工听感对比、多说话人和多领域扩展，以及分钟级长文的累积漂移测试。只有补上这些，才能把客观面板上的分族领先转化为可部署的选型结论。

<details>
<summary>📎 论文与评分元数据</summary>

排名：前50% | 文档类型：数据集与基准 | [arXiv 原文](https://arxiv.org/abs/2610.06057v1)

</details>

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。

- 评分规则：type-aware-v1

- 评分模型：muse-spark-1.3-contributor

- 评分请求协议：openai_responses

---

[← 返回 2026-10-11 语音/音乐/音频论文速递](/audio-paper-digest-blog/posts/2026-10-11/)
