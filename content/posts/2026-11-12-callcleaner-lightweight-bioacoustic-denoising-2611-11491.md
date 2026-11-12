---
title: "CallCleaner: Lightweight Bioacoustic Denoising from an Audio Foundation Model"
date: 2026-11-12
draft: false
tags: [音频分离, 知识蒸馏, 生物声学监测, 流匹配]
categories: [论文速递]
description: "针对野外单只前景动物叫声去噪缺少干净训练数据的问题，论文先用动物 VAD 时间跨度提示 SAM-Audio 做零样本分离，再将其蒸馏为 19M、无需检测器的 CallCleaner，并在叫声内外分开评价的条件下证明其去噪量与保真度的权衡位置。"
hiddenInHomeList: true
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_arxiv_id: "2611.11491"
paper_digest_workbench_contract: "researcher-workbench"
paper_digest_workbench_schema_fingerprint: "1f09b594c317cc38e934de27a5b0e8ceb4baa50ef79bd4f8683dd9adea720fe7"
paper_digest_reader_title: "CallCleaner：用通用分离基础模型蒸馏轻量动物叫声去噪器"
paper_digest_original_title: "CallCleaner: Lightweight Bioacoustic Denoising from an Audio Foundation Model"
paper_digest_arxiv_version: 1
paper_digest_arxiv_versioned_id: "2611.11491v1"
paper_digest_arxiv_abs_url: "https://arxiv.org/abs/2611.11491v1"
paper_digest_arxiv_pdf_url: "https://arxiv.org/pdf/2611.11491v1.pdf"
paper_digest_primary_task: "音频分离"
paper_digest_tags_contract: "paper-tag-flat-tags"
paper_digest_tags_schema_fingerprint: "27e36280a4b8d3df62ebe54d3ab037920f4d69feb2b554163f01bbae2caf4338"
paper_digest_tags_selection_contract: "paper-tag-selection"
paper_digest_tags_registry_version: "paper-tag-catalog"
paper_digest_tags_registry_sha256: "9673bc0122e1905a5dcfd8b223675400cc2fa4c36095bc0e5f817edf99a0ec5c"
paper_digest_tags_concepts: [{"facet":"task","id":"task.audio-separation","label":"音频分离"},{"facet":"method","id":"method.distillation","label":"知识蒸馏"},{"facet":"application","id":"application.bioacoustics","label":"生物声学监测"},{"facet":"method","id":"method.flow-matching","label":"流匹配"}]
paper_digest_primary_method: "知识蒸馏"
paper_digest_score: 6.4
paper_digest_rank_bucket: "前50%"
paper_digest_document_type: "方法研究"
paper_digest_one_sentence: "针对野外单只前景动物叫声去噪缺少干净训练数据的问题，论文先用动物 VAD 时间跨度提示 SAM-Audio 做零样本分离，再将其蒸馏为 19M、无需检测器的 CallCleaner，并在叫声内外分开评价的条件下证明其去噪量与保真度的权衡位置。"
paper_digest_authors: [{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Michael Xie"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Gašper Beguš"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Morris Alper"}]
paper_digest_abstract_sha256: "a5619b480b7b4ce8f4e48ad10b9a3cfdeb46a40e7672295b88ea8cfbddc45807"
paper_digest_sidecars: {"citation.bib":{"sha256":"5561b3f95ad50f105ab86e79bd9cdacc95927eefc520aceb5d08a2cc36faa2ca","url":"/audio-paper-digest-blog/client/papers/2026-11-12/2611-11491/citation.bib"},"citation.json":{"sha256":"3a3081152381a88a7008d50c616a6e37aa070f402cc7ef404a9cc0eb323fa96d","url":"/audio-paper-digest-blog/client/papers/2026-11-12/2611-11491/citation.json"},"citation.ris":{"sha256":"6448598bceb9402033713089884315a29f314981d72d489bc37b69939ffbe008","url":"/audio-paper-digest-blog/client/papers/2026-11-12/2611-11491/citation.ris"},"rethink-context.json":{"contract":"paper-research-context","schemaFingerprint":"5d4e79f7d3ee65b39ccb38281548bf20a1b2041ab7a27625eaf97ab9909a8383","sha256":"9e3fe57b171eb44e4e9e8b0f32029e4a6bf89392f9cfdccd30abcf47b5d6f009","url":"/audio-paper-digest-blog/client/papers/2026-11-12/2611-11491/rethink-context.json"}}
paper_digest_api_reader_contract: "beginner-researcher"
paper_digest_api_reader_schema_fingerprint: "cd8baf5b8bda3a49eec64f6005931af63de4e9a13148cba5f354c661ca6e9df2"
paper_digest_api_reader_article_sha256: "2b24294eee56e0a09a60f3194f90d48c0af9da11bffe772d451577208e20d168"
paper_digest_api_reader_plan_sha256: "cc03a45023ef49175e28fb979eb7abb80ff614a920a2102b87012641561b3384"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings"
paper_digest_api_reader_source_binding_schema_fingerprint: "d2a2607a6e561909473022eb43f56332ee357af8568566a095c29083ffdec9cc"
paper_digest_api_reader_source_bindings_sha256: "d8748b6cbd7f4dbdaad634832cae1280949974ecc1cd908d1b52cf7baefd17e4"
paper_digest_api_reader_source_table_count: 2
paper_digest_api_reader_source_formula_count: 1
paper_digest_api_reader_structured_artifacts_sha256: "f79618e19fcaa15d327f2b19a9f394fcb3dcfc48b3e680946f7c5b19b1e2a477"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity"
paper_digest_api_reader_author_identity_schema_fingerprint: "1e3fd3a9a56c9a5bf52df8df5022690b9a3fa92e83e934f295af87c0e258ed2f"
paper_digest_api_reader_author_identity_sha256: "d9ebaad809934817106c139b35024a41d018961eeca52fc05cb9fd8ed180272a"
paper_digest_api_reader_author_count: 3
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity"
paper_digest_api_reader_resource_identity_schema_fingerprint: "33b0be17118be61f39b85ce690c8da17e91f2864bb65e85284f60c40067328e0"
paper_digest_api_reader_resource_identity_sha256: "c8cb157a20ecae00e5e0eb47b937a5d0a11d17e86357c9a2c1f8648f1db2369e"
paper_digest_api_reader_resource_count: 1
paper_digest_api_reader_figure_persistence: "ephemeral-no-persisted-figure-assets-v1"
paper_digest_api_reader_decision_projection: "api-reader-decision-projection"
paper_digest_api_reader_decision_projection_schema_fingerprint: "e56feb5ab75c8710904916b898f73dab9bb18bdf65bb60b7ed2edf7f99cea860"
---

# 📄 CallCleaner：用通用分离基础模型蒸馏轻量动物叫声去噪器

> 英文题目：*[CallCleaner: Lightweight Bioacoustic Denoising from an Audio Foundation Model](https://arxiv.org/abs/2611.11491v1)*

<!--paper-tag-hierarchy-v1:start-->

**研究分类**

- **研究任务**：[音频分离](/audio-paper-digest-blog/papers/?concept=task.audio-separation)
- **研究方法**：[知识蒸馏](/audio-paper-digest-blog/papers/?concept=method.distillation)；[生成模型](/audio-paper-digest-blog/papers/?concept=method.generative) → [流匹配](/audio-paper-digest-blog/papers/?concept=method.flow-matching)
- **应用**：[生物声学监测](/audio-paper-digest-blog/papers/?concept=application.bioacoustics)

<!--paper-tag-hierarchy-v1:end-->

> 评分：**6.4/10** | 创新 1.2/2 | 技术严谨 1.2/1.5 | 实验充分 1/1.5 | 清晰度 0.8/1 | 影响力 0.8/1.5 | 开源 0/1.5 | 可复现 0.3/0.5 | 工程/实践 1.1/1.5


## 👥 作者与机构

- Michael Xie：机构信息未能在本次解析中与作者逐人可靠绑定
- Gašper Beguš：机构信息未能在本次解析中与作者逐人可靠绑定
- Morris Alper：机构信息未能在本次解析中与作者逐人可靠绑定

## 📌 核心摘要

野外录制的单只显著动物的鸣声常被风雨、车辆、其他动物掩盖，输出要求同时保留鸣声形态并去除鸣声之间与鸣声之下的噪声，难点在于干净训练数据稀少而鸣声结构跨物种差异极大。该文先用简单的动物叫声活动检测给出鸣声出现的时间段，再以此时间段提示通用分离基础模型SAM-Audio生成伪标签，随后把伪标签蒸馏到19M参数的波形到波形小模型CallCleaner，推理时不再需要检测器或文本提示。具体而言，检测输出的时间跨度被送入SAM-Audio以指定分离目标，其输出的目标流作为伪标签、残差流作为噪声估计，并经重混扩充训练对。学生模型直接从含噪波形提取去噪波形，从而摆脱对检测跨度的依赖，并将笨重的基础模型转化为可在本地运行的轻量工具，这与依赖谱门或直接训练的动物去噪方法形成关键差异。该文用鸣声周围能量与鸣声内对数梅尔距离分别度量去噪与保真，避免单一波形指标混淆两者。在47段、最长30秒的混合基准上，CallCleaner在鸣声周围残留噪声Outside指标达到-29.0 dB，中位数比领先的神经动物去噪基线Biodenoising的-17.6 dB低11 dB，同时呼叫内对数梅尔距离为9.6 dB，与后者的10.7 dB相近。适用范围限于鸣声稀疏且单只显著的录音，密集多动物、极低频或极高频与脉冲噪声仍困难，蒸馏与标注在集成显卡上约两小时完成，学生在笔记本电脑中央处理器上约90倍实时运行。

## 🔗 开源与复现资源

- 第三方资源：<https://callcleaner.github.io> — 链接可访问（HTTP 200）

可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 野外动物叫声为什么难拿到干净录音

论文处理的对象是野外录制的单只前景动物的叫声，目标是去掉风雨声、车辆与船只等人类噪声以及背景中其他动物声音，保留前景叫声供回放实验等后续使用。输入是连续的含噪波形，其中叫声是稀疏出现的片段，片段之间是较长的背景噪声；输出是同样长度的增强波形，理想情况是叫声部分完整保留、非叫声部分尽量安静。

困难在于两点。第一，动物叫声覆盖的频率和结构非常多样，不像人类语音那样有大量干净数据可以训练；第二，野外几乎拿不到录音棚级别的干净参考，已有生物声学去噪器只能用训练无关的经典谱门，或用含噪、伪干净目标训练，实际输出常残留噪声。读者需要带着稀疏叫声加长背景这个结构去理解后文的评价：叫声周围和叫声内部是两个不同的区域。

### 已有路线各自在什么条件下比较

论文把已有方法分成 3 类，并在相同混合基准上比较。第一类是经典谱门 Noisereduce，默认设置直接估计噪声门限；它的两个变体给了它与 SAM-Audio 相同的时间信息，即用动物 VAD 跨度之外的部分做噪声轮廓，其中平滑变体把掩蔽平滑从默认 50 ms、500 Hz 改为 200 ms、1 kHz 以减少抽吸效应。第二类是神经生物声学去噪器 Biodenoising，它在原文中被描述为具有公开权重的领先基线方法，也是 CallCleaner 初始化所用的 Demucs 结构，此处公开权重仅指该基线方法的既有状态，不是对本文 CallCleaner 作者资源可用状态的断言，本文作者资源的可用状态未经资源身份记录确认为 available。第 3 类是零样本分离器 AudioSep，用动物声音文本提示，以及 SAM-Audio 只用文本提示的版本。

机制分工上，SAM-Audio 是流匹配扩散 Transformer，生成目标流与残差流的音频编解码隐变量，可接受文本提示与时间跨度条件；只用文本提示时常选错目标，论文以马叫两段示例说明加 VAD 跨度后才恢复叫声。所用动物 VAD 为免训练启发式 max-band：64 带对数梅尔谱覆盖 200 Hz 至 8 kHz，按每帧第 90 百分位带能量相对噪声基底的超出打分，保留鲁棒 z 分数大于 1 的帧并合并 0.3 s 以下间隙，以此给出 VAD 跨度。AudioSep 则以 animal sound 文本提示运行，不输入时间跨度。

比较的公平条件是同一基准：62 段人工挑选的多类群干净叫声与真实野外噪声按 -5、0、5、10 dB 信噪比混合，主要结果取其中不超过 30 s 的 47 段，因为这是 SAM-Audio 的训练长度，全部输出重采样至 16 kHz 评分。论文明确略去了未公开代码权重的 BioSEN，没有把它放进同条件比较。理解这些输入条件和监督差异很重要，不能把需要 VAD 跨度的方法与完全无检测器的方法在部署代价上等同看待，也不能把基线已有权重等同于本文模型已验证可用。

### 论文具体要回答哪三个问题

论文把任务限定为前景单只动物、叫声之间有背景间隙的录音，密集和多动物叫声留作未来工作。在这个限定下提出 3 个问题。第一，通用源分离基础模型能否零样本去噪动物叫声。第二，基础模型能否教出一个小而无检测器、可在本地运行的去噪器，以及它的可靠性如何。第三，当系统在去噪量与保真度之间权衡、且有的系统会重新生成输出时，应该如何评价。

这 3 个问题分别对应两个阶段方法和一套评价。第一阶段解决如何把通用模型约束到当前叫声，第二阶段解决如何把又重又慢又依赖检测器的方法变成实用工具，第三部分解决为何常用整体指标会误判再生式系统。读者复述时要保留这个分工，不要把评价指标的讨论当成附带结论。

### 两阶段流程让一个样本经历什么

拿一段野外含噪音频为例。第一阶段先用简单的动物 VAD 给它打上叫声出现的时间跨度，再把原始音频连同文本提示和这些跨度一起送入 SAM-Audio，SAM-Audio 输出目标流和残差流，目标流被当作该段音频的伪干净标签。第二阶段把大量这样自动标注的野外片段收集起来，用其中一半做重混增强，微调一个小波形模型 CallCleaner，之后 CallCleaner 只看原始波形即可输出增强结果，不再需要 VAD 和提示。

这个流程的关键转移是把难题从分离搬到检测再搬回学习：先靠启发式检测给出位置，再靠大模型给出分离示例，最后让小模型摆脱对检测器的依赖。蒸馏用的野外片段来自 Biodenoising 训练过的公开语料中未进入基准的部分，共 1.8 小时，只保留按 VAD 有 10% 到 80% 帧激活的 4 s 片段，保证既有叫声又有间隙。

### VAD 跨度如何提示 SAM-Audio

SAM-Audio 是 1 个流匹配扩散 Transformer，在音频编解码器隐变量上生成目标流和残差流，可以接受文本和时间跨度等条件。论文发现只给动物声音文本时，它常选错目标，15% 到 23% 的混合会出现残差流反而更接近干净叫声的选错流现象。图 1a 的马叫例子直观展示了这一点：只用文本会漏掉大部分叫声，加上 VAD 跨度后才恢复叫声。

所用的动物 VAD 名为 max-band，做法是对 200 Hz 到 8 kHz 的 64 带对数梅尔谱，按每帧第 90 百分位频带超出估计噪声底的部分打分，保留稳健 z 分数大于 1 的帧，并合并 0.3 s 以下的间隙。这个检测器无训练、很简单，但足以把灾难性失败从 38 例降到 11 例。论文把加了跨度的方法记为 SAM-AudioVAD，它在 GPU 上也接近实时，仍很重，且会继承 VAD 漏检带来的失败。

**SAM-Audio × 时间跨度提示：** SAM-Audio 是通用音频源分离基础模型，负责把混合音频生成目标流和残差流；时间跨度提示告诉它前景动物在何时发声，解决只用动物声音这类文本提示太粗、容易选错目标的问题，两者组合才把通用分离能力约束到当前叫声上。

### 叫声内外误差如何被拆开计算

评价的输入是含噪输入 x、干净参考 s 和系统输出 s 帽。先按干净参考 s 峰值下 20 dB 内的 50 ms 帧定出叫声跨度，再把信号归一到单位均方根后算 64 带、0 到 8 kHz、3 种短时傅里叶分辨率平均的对数梅尔能量。记 D 为输出与参考的带内能量差，对其在频带和叫声内帧上取平均，就得到叫声内对数梅尔距离 LMDcall 及其拆分。

\[\begin{gathered}D^{\pm}=\max(\pm D,0),\qquad\text{{Shape}}=\langle|D-\langle D\rangle|\rangle,\\ \text{{Added}}=\langle D^{+}\rangle,\qquad\text{{Missing}}=\langle D^{-}\rangle.\end{gathered}\]

上式中 Added 是 D 为正部分的平均，对应叫声之下残留的噪声；Missing 是 D 为负部分的平均，对应输出缺少的叫声能量；Shape 是去掉整体电平偏移后的形状误差。Outside 是叫声跨度之外输出相对输入的能量比，越负表示叫声周围去得越干净，若跨度覆盖超过 95% 则不定义。灾难性失败定义为输出的 LMDcall 比输入差 5 dB 以上。论文提醒，若参考本身含背景噪声，去掉它也会被计入 Missing，因此这些侵入式指标受参考质量限制。

**动物 VAD × 伪标签：** 动物 VAD 是按频带能量启发式判断叫声出现帧的检测器，负责给出时间跨度；伪标签是教师 SAM-Audio 在这些跨度下输出的目标流和残差流，负责为没有干净参考的野外录音提供训练对，前者提供位置条件，后者提供学习目标。

### 学生模型用什么数据和更新方式训练

CallCleaner 没有从零训练，而是从 Biodenoising 的 Demucs 模型初始化，共 18.9M 参数，论文摘要按约 19M 表述。它是波形到波形的小模型，只看输入音频本身，不需要检测器或提示词，这正好对应教师 SAM-AudioVAD 又慢又依赖 VAD 跨度的问题：教师即使在 GPU 上也接近实时，还会继承 VAD 漏检带来的错误，蒸馏就是为了解决这两点。

训练数据是上述 1.8 小时野外片段的伪标签，具体是 4 s 片段，选自 Biodenoising 训练用过的公开语料但与基准无重叠，并按 VAD 只保留 10–80% 帧活跃的片段，即保证既有叫声又有间隙、可供分离出目标与背景。教师是 SAM-AudioVAD，其目标流作伪干净标签、残差流作噪声估计。每批的一半按自举重混处理：把另一段的残差加到伪标签上，信噪比范围是 -5 到 10 dB，从而得到噪声更多样的训练对，这与原文引用的 bootstrapped remixing 做法一致。

训练配置是 2k 步、批量 16、1 s 裁剪，共训练 3 个随机种子并报告基准上的平均。按论文记录，标注加训练在 Apple M4 Pro 集成 GPU 上不到 2 小时。需要说明的缺口是原文没有披露更细的优化器与学习率细节，本文只能按证据写到批量、裁剪长度和步数为止。训练完成后学生不再需要 VAD 跨度，属于预测式模型，直接从输入波形算输出，而不是像教师那样重新生成。这种做法把重型零样本方法的去噪能力搬到可在笔记本 CPU 上本地快速运行的小模型上，也减少了对外传敏感数据和专用硬件的依赖。

**CallCleaner × Biodenoising：** CallCleaner 是蒸馏得到的 19M 波形到波形小模型，负责只看输入音频直接去噪；Biodenoising 是同尺寸 Demucs 结构的已有生物声学去噪器，负责提供学生模型的初始化起点和主要神经基线，两者尺寸速度相近，对比能分离出教师带来的去噪增益。

### 基准、基线设置与统计方式是什么

评测基准是 Biodenoising 的测试混合：47 段每段至多 30 s 的干净叫声分别与真实野外噪声混合，每个叫声做 4 种信噪比，共 188 个混合，采样率统一重采样到 16 kHz 评分。教师用 sam-audio-small 共 0.71B 参数，受计算限制选择小尺寸，其随机采样做一次运行，三次运行的 LMDcall 中位数波动约正负 0.3 dB。基线包括 Noisereduce 3 种设置、Biodenoising、AudioSep 文本提示版，以及只用文本的 SAM-Audio。

为检验增益是否来自教师，论文还用相同学生配方分别在 Biodenoising 和 NoisereduceVADs 标签上训练对照学生。超参数选择存在局限：因训练集没有干净参考，VAD、提示、学生配方和平滑等设置是在基准上选择的，但论文报告了稳健性，即 11 个学生变体中有 10 个在至少 40 个片段上优于 Biodenoising，且一半片段选配方、另一半测试仍成立。教师训练数据未公开，且 47 段中有 18 段干净叫声属于 FSD50K，不能排除 SAM-Audio 见过它们，但 CallCleaner 的伪标签来自另外的野外录音，且在不在 FSD50K 的 29 段中有 26 段仍优于 Biodenoising。

**Outside × LMDcall：** Outside 是叫声时间跨度之外输出相对输入的能量比，负责度量叫声周围残留了多少背景；LMDcall 是叫声内部多分辨率对数梅尔能量距离，负责度量叫声本身被改变了多少，两者分开才能暴露去噪更干净与保真更好之间的权衡。

### 谁去噪最多，谁保真更好

先看比较问题：在相同混合基准上，系统在叫声周围去噪量与叫声内形状误差上各处在什么位置，指标方向都是越小越好。下表只整理正文有连续原句支持的关键数字，保留原文单位 dB，完整多指标对比见原文大表。表前说明公平条件为同一 47 段乘 4 信噪比的中位数，Outside 越负越干净，LMDcall 越小保真越好。

| 系统 | LMDcall 叫声内距离 |
| --- | --- |
| Biodenoising | 10.7 dB |
| 门限对照学生 | 未在正文单独报告 |

CallCleaner 与教师 Outside 同为 -29.0 dB，比 Biodenoising 少 11 dB 残留，在 44 个片段上更好；叫声内 LMDcall 分别为 9.6 dB 和 10.7 dB 小幅领先，但论文指出这部分增益来自叫声频带之外的带下噪声，一旦把两者都带通到干净叫声 95% 能量的频带，差距变为分别为 8.5 dB 和 8.4 dB 而消失。用 Biodenoising 或谱门标签训练的对照学生 Outside 只有 -17.6 和 -23.2 dB，说明增益来自教师而非配方。限制是 LMDcall 仍落后于 VAD 谱门，且形状误差与 Biodenoising 同为 9.6 dB 左右，没有继承教师 8.5 dB 的形状。

**SI-SDR × 再生式输出：** SI-SDR 是按采样点逐点比较波形的指标，任何波形偏离都扣分；再生式输出指 SAM-Audio 经音频编解码器重新生成波形，会引入人耳不敏感但逐点比较敏感的变化，两者搭配解释了为何去噪最多的教师在 SI-SDR 上反而排名最后。

### 从权衡图看 CPU 可用系统处在什么位置

下面这张图要回答的是在去噪量与保真度不可兼得时，哪些系统构成前沿。读图任务是横轴往左越干净，纵轴往下形状越好，标记面积随参数量增大，方形表示推理仍需 VAD 跨度，圆形表示无检测器，虚线是全部系统前沿，实线是笔记本 CPU 快于实时的系统前沿。

> **看图路径：** 1. 先看横轴 Outside 越往左表示叫声周围残留噪声越少，纵轴叫声形状误差越往下越好；2. 再比较 CallCleaner 与其教师、谱门和 Biodenoising 的标记大小、方形与圆形含义；3. 注意橙色箭头标出的 11 dB 背景差异对应哪两个系统；4. 最后看实线 CPU 可用前沿与虚线全部系统前沿分别经过哪些点

[![原论文 Figure 2：Benchmark: noise left around the call vs.](https://arxiv.org/html/2611.11491v1/tradeoff.svg)](https://arxiv.org/html/2611.11491v1/tradeoff.svg)

*论文图 2。原论文 Figure 2:：“Benchmark: noise left around the call vs.”。*

图中确实可见 CallCleaner 位于左中位置，横轴约 -29 dB 附近，纵轴约 9.6 dB，标注平均 0.7 次灾难性失败；其教师 SAM-AudioVAD 横轴同样靠左但纵轴更低，标注 11 次失败；右侧 Biodenoising 横轴约 -17 dB 附近，纵轴相近；左下 NoisereduceVADs 横轴约 -25 dB 且纵轴更低、无失败。橙色箭头标出 CallCleaner 相对 Biodenoising 约 11 dB 的背景差异。含义是全部前沿由教师与平滑谱门主导，CPU 可用前沿则由 CallCleaner 与 VAD 谱门共同构成，CallCleaner 是其中无需检测器且去噪最多的点，但保真不如谱门，且大部分额外去噪在叫声频带之外。

### 可靠性与局部失真有哪些对照证据

可靠性方面，CallCleaner 每种子平均 0.7 次灾难性失败，远少于教师的 11 次，且与 Biodenoising 一样很少严重失败；谱门 NoisereduceVADs 为 0 次，平滑使其避免了抽吸伪影。音高层面，在 37 段音调叫声上用 pYIN 测基频，CallCleaner 偏移超过 50 音分的混合占 3%，与谱门相当，教师达 22%，说明预测式学生很少移动音调，再生式教师更容易改变音调。

另一面是形状没有学到教师水平，以及对 VAD 的依赖转移：把 Biodenoising 输出直接按同一 VAD 跨度掩蔽，虽然也能去噪，但会切掉 VAD 漏掉的叫声帧，LMDcall 恶化到 12.5 dB，证明教师的优势不只是跨度本身。CallCleaner 与平滑谱门的直接对比是 31 对 47 片段在 Outside 上获胜、但带通后仅 27 对 47 且不显著，而谱门在 Shape 上 34 对 47 获胜，说明两者各有适用条件：有可靠检测器且更看重叫声形状时谱门合适，需要无检测器本地运行且更看重背景干净时 CallCleaner 合适。

### 评价指标为什么会误判再生式系统

先看比较问题：当系统重新生成波形时，逐点比较的 SI-SDR 与分区域谱指标会给出什么不同结论。下表保留原文单位 dB，只收录正文连续原句直接报告的数字，用于说明 SI-SDR 的局限，方向是 SI-SDR 越高越好，LMDcall 越小越好。

| 条件 | SI-SDR | LMDcall / 备注 |
| --- | --- | --- |
| 干净叫声只过 SAM-Audio 编解码器 | 7.2 dB | 3.3 dB |
| Biodenoising | 13.0 dB | 基准整体最优之一 |
| 含噪输入清零叫声之外 | 提升 3.3 dB | Biodenoising 总提升 10.4 dB 的约三分之一 |

只过编解码器而不做分离，输出时间没有偏移，LMDcall 的 3.3 dB 优于任何系统，但 SI-SDR 只有 7.2 dB，因此即使完美分离，SAM-Audio 在 SI-SDR 上也会低于 Biodenoising 的 13.0 dB。如果只看 SI-SDR，会把最好的教师排除掉，而实际用它做教师的学生与 Biodenoising 打平 SI-SDR 且去噪多 11 dB。只把叫声之外清零、不去除叫声内噪声，就能带来 3.3 dB 的 SI-SDR 提升，说明稀疏叫声下 SI-SDR 把两区域混在一起。论文还发现以过编解码器的干净叫声为参考时，教师叫声内 LMDcall 反超谱门，说明谱内分数也偏向滤波而非再生，最终仍需听辨测试。适用条件是只有分开报告 Outside 与叫声内误差，才能看到权衡。

### 复现第一步做什么，需要什么代价

复现分两条路径。第一条是直接使用 CallCleaner：它无需 VAD、无需 GPU，在 Apple M4 Pro 笔记本 CPU 上约 90 倍快于实时，与 Biodenoising 速度相当，而 sam-audio-small 在同一笔记本集成 GPU 上仅接近实时。论文正文声称释放 CallCleaner 代码与权重，并在文末给出<https://callcleaner.github.io>链接；按本次核验的资源身份记录，该链接仅被记为 third_party 且当前可达，不能据此断言作者代码与模型资源已公开或当前可用，使用前需分别核对代码、权重与可运行状态。来源未确认也不是技术缺陷，不影响对去噪机制本身的评价。

第二条是复现蒸馏：先按 max-band 规则从野外录音选出 10% 到 80% 激活的片段，用 SAM-AudioVAD 生成目标与残差伪标签，再按 -5 到 10 dB 重混一半批次，微调 Demucs 初始化的学生 2k 步。具体执行上，蒸馏用 4 s 片段取自 Biodenoising 训练所用的公开语料，包括 DCASE 少样本生物声学、Orchive 与 5 个鸟类语料且与基准无重叠，共 1.8 小时；教师目标流作伪标签、残差流作噪声估计，以自举重混方式把另一片段残差加到伪标签上，增加噪声多样性。学生从 Biodenoising 的 Demucs 模型 18.9M 参数初始化，以批量 16、1 s 裁剪训练 2k 步，标注加训练在 Apple M4 Pro 集成 GPU 上不到 2 小时，3 个随机种子取均值报告。

代价是标注加训练不到 2 小时，但 SAM-Audio 训练数据未公开、基准选择与 FSD50K 重叠意味着独立测试集仍缺失，47 段中 18 段在 FSD50K 内，更大、开放、干净的动物叫声集合是后续验证的前提。极低频、极高频叫声与脉冲噪声仍具挑战，学生也可能继承伪标签错误，启发式 VAD 漏检常对应教师灾难性失败。

### 什么时候值得尝试 CallCleaner

当录音是单只前景动物、叫声稀疏有间隙，且需要在本地、私有、无 GPU 条件下批量处理时，CallCleaner 值得尝试，它在不需检测器的前提下把叫声周围背景压得更低，且很少灾难性失败、不易跑调。当已有可靠检测器且下游更在乎叫声音色形状而非背景绝对干净时，平滑谱门可能是更稳妥的选择，两者共同构成 CPU 可用前沿。

复述关键步骤可以这样记：VAD 给出何时有叫声，SAM-Audio 据此给出伪干净与噪声示例，重混增强后教给小模型，小模型此后独立工作。证据只支持在 Biodenoising 混合基准、47 段多类群叫声、4 种信噪比中位数上的结论，且设置在基准上选择过；是否推广到密集多动物、低频超声或强脉冲噪声尚未评测。下一步验证应是更大独立干净集上的听辨与形状评估，以及对 VAD、自监督事件检测和伪标签纠错的改进。

<details>
<summary>📎 论文与评分元数据</summary>

排名：前50% | 文档类型：方法研究 | [arXiv 原文](https://arxiv.org/abs/2611.11491v1)

</details>

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。

- 评分规则：type-aware-v1

- 评分模型：muse-spark-1.3-contributor

- 评分请求协议：openai_responses

---

[← 返回 2026-11-12 语音/音乐/音频论文速递](/audio-paper-digest-blog/posts/2026-11-12/)
