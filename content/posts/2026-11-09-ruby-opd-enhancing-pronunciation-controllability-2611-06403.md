---
title: "Ruby-OPD: Enhancing Pronunciation Controllability and Accuracy for Flow-Matching Text-to-Speech via On-Policy Distillation"
date: 2026-11-09
draft: false
tags: [文本到语音, 知识蒸馏, 流匹配, 语音]
categories: [论文速递]
description: "针对日语汉字多音与无分词带来的读错和难控制问题，论文用保留字形又标注读音的 Ruby 文本加字形扰动学可控性，再用只靠文本对的跨条件在策略蒸馏把全标注教师的发音知识迁到无标注学生，在 Joyo-Kanji-Yomi 上达到 97.13% 准确率，代价是依赖对齐过滤和大规模文本蒸馏。"
hiddenInHomeList: true
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_arxiv_id: "2611.06403"
paper_digest_workbench_contract: "researcher-workbench"
paper_digest_workbench_schema_fingerprint: "1f09b594c317cc38e934de27a5b0e8ceb4baa50ef79bd4f8683dd9adea720fe7"
paper_digest_reader_title: "Ruby-OPD：让日语语音合成既能被注音控制又能在无注音时读准"
paper_digest_original_title: "Ruby-OPD: Enhancing Pronunciation Controllability and Accuracy for Flow-Matching Text-to-Speech via On-Policy Distillation"
paper_digest_arxiv_version: 1
paper_digest_arxiv_versioned_id: "2611.06403v1"
paper_digest_arxiv_abs_url: "https://arxiv.org/abs/2611.06403v1"
paper_digest_arxiv_pdf_url: "https://arxiv.org/pdf/2611.06403v1.pdf"
paper_digest_primary_task: "文本到语音"
paper_digest_tags_contract: "paper-tag-flat-tags"
paper_digest_tags_schema_fingerprint: "27e36280a4b8d3df62ebe54d3ab037920f4d69feb2b554163f01bbae2caf4338"
paper_digest_tags_selection_contract: "paper-tag-selection"
paper_digest_tags_registry_version: "paper-tag-catalog"
paper_digest_tags_registry_sha256: "9673bc0122e1905a5dcfd8b223675400cc2fa4c36095bc0e5f817edf99a0ec5c"
paper_digest_tags_concepts: [{"facet":"task","id":"task.tts","label":"文本到语音"},{"facet":"method","id":"method.distillation","label":"知识蒸馏"},{"facet":"method","id":"method.flow-matching","label":"流匹配"},{"facet":"signal","id":"signal.speech","label":"语音"}]
paper_digest_primary_method: "知识蒸馏"
paper_digest_score: 7.0
paper_digest_rank_bucket: "前50%"
paper_digest_document_type: "方法研究"
paper_digest_one_sentence: "针对日语汉字多音与无分词带来的读错和难控制问题，论文用保留字形又标注读音的 Ruby 文本加字形扰动学可控性，再用只靠文本对的跨条件在策略蒸馏把全标注教师的发音知识迁到无标注学生，在 Joyo-Kanji-Yomi 上达到 97.13% 准确率，代价是依赖对齐过滤和大规模文本蒸馏。"
paper_digest_authors: [{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Rui Hu"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Xiaolong Lin"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Zhenpeng Zhan"}]
paper_digest_abstract_sha256: "4117cbbdb7e75ba7ce8d1f927bd1221fd9a2bd716f9576b2e89d1ee8190fc04b"
paper_digest_sidecars: {"citation.bib":{"sha256":"df76aba580ed7e28a1ad3fee8b77209dd3251976255ff5ec6c1271e89c9be59b","url":"/audio-paper-digest-blog/client/papers/2026-11-09/2611-06403/citation.bib"},"citation.json":{"sha256":"911554d8f414ef13c22f154d90466be7955f4dbae04fd79d72c6d666a21030ca","url":"/audio-paper-digest-blog/client/papers/2026-11-09/2611-06403/citation.json"},"citation.ris":{"sha256":"21ae8faf7ec887b18057bc36a452139814b09195955aae6ce92ac8fef4782e6e","url":"/audio-paper-digest-blog/client/papers/2026-11-09/2611-06403/citation.ris"},"rethink-context.json":{"contract":"paper-research-context","schemaFingerprint":"5d4e79f7d3ee65b39ccb38281548bf20a1b2041ab7a27625eaf97ab9909a8383","sha256":"f0e44991d6b2f8a203d9b54ce1d787f393c94d80a23cd993c16ad46878642b44","url":"/audio-paper-digest-blog/client/papers/2026-11-09/2611-06403/rethink-context.json"}}
paper_digest_api_reader_contract: "beginner-researcher"
paper_digest_api_reader_schema_fingerprint: "cd8baf5b8bda3a49eec64f6005931af63de4e9a13148cba5f354c661ca6e9df2"
paper_digest_api_reader_article_sha256: "650b2ed436805eccad650d1647d8866fcd3e332704763ef16780cc43d34871ef"
paper_digest_api_reader_plan_sha256: "fb37bd6f94b0c0938b630b3f30caa72556608a34eadade7ab8799b575fdb5253"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings"
paper_digest_api_reader_source_binding_schema_fingerprint: "d2a2607a6e561909473022eb43f56332ee357af8568566a095c29083ffdec9cc"
paper_digest_api_reader_source_bindings_sha256: "d77e85e6c88f6c5c168c09fe61de98796084093fc46f18ee991427705ed5f492"
paper_digest_api_reader_source_table_count: 3
paper_digest_api_reader_source_formula_count: 2
paper_digest_api_reader_structured_artifacts_sha256: "6385d8b20738fc157b0a4a308c11885c461992a1ba4cade281868b1c2ccbd229"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity"
paper_digest_api_reader_author_identity_schema_fingerprint: "1e3fd3a9a56c9a5bf52df8df5022690b9a3fa92e83e934f295af87c0e258ed2f"
paper_digest_api_reader_author_identity_sha256: "3107ae10f6d21fecfc1f6dd800c82a128820008b3c85f06fc9c558f92b5778e5"
paper_digest_api_reader_author_count: 3
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity"
paper_digest_api_reader_resource_identity_schema_fingerprint: "33b0be17118be61f39b85ce690c8da17e91f2864bb65e85284f60c40067328e0"
paper_digest_api_reader_resource_identity_sha256: "2d40daf0120f2476b5098f4c15b43298f2274e621294cd82d80aa5c67d1cd4c9"
paper_digest_api_reader_resource_count: 4
paper_digest_api_reader_figure_persistence: "ephemeral-no-persisted-figure-assets-v1"
paper_digest_api_reader_decision_projection: "api-reader-decision-projection"
paper_digest_api_reader_decision_projection_schema_fingerprint: "e56feb5ab75c8710904916b898f73dab9bb18bdf65bb60b7ed2edf7f99cea860"
---

# 📄 Ruby-OPD：让日语语音合成既能被注音控制又能在无注音时读准

> 英文题目：*[Ruby-OPD: Enhancing Pronunciation Controllability and Accuracy for Flow-Matching Text-to-Speech via On-Policy Distillation](https://arxiv.org/abs/2611.06403v1)*

<!--paper-tag-hierarchy-v1:start-->

**研究分类**

- **研究任务**：[语音合成](/audio-paper-digest-blog/papers/?concept=task.speech-synthesis) → [文本到语音](/audio-paper-digest-blog/papers/?concept=task.tts)
- **研究方法**：[知识蒸馏](/audio-paper-digest-blog/papers/?concept=method.distillation)；[生成模型](/audio-paper-digest-blog/papers/?concept=method.generative) → [流匹配](/audio-paper-digest-blog/papers/?concept=method.flow-matching)
- **信号**：[语音](/audio-paper-digest-blog/papers/?concept=signal.speech)

<!--paper-tag-hierarchy-v1:end-->

> 评分：**7.0/10** | 创新 1.5/2 | 技术严谨 1.2/1.5 | 实验充分 1/1.5 | 清晰度 0.8/1 | 影响力 1/1.5 | 开源 0/1.5 | 可复现 0.3/0.5 | 工程/实践 1.2/1.5


## 👥 作者与机构

- Rui Hu：机构信息未能在本次解析中与作者逐人可靠绑定
- Xiaolong Lin：机构信息未能在本次解析中与作者逐人可靠绑定
- Zhenpeng Zhan：机构信息未能在本次解析中与作者逐人可靠绑定

## 📌 核心摘要

日语语音合成需要把书写文本变成语音波形，难点在于汉字存在大量多音字，读音随语境变化，去掉汉字只留假名会丢失词边界与语义线索。论文先用注音文本表示同时保留汉字字形与目标读音，分为词后加括号的隐式注音和用边界标记明确标注范围与读音的显式注音，并对字形做扰动，迫使模型真正读取注音。再用跨模态校验构造对齐数据，先由音素识别模型从语音提取纯假名序列，再在词典构词格中用动态规划找回与该序列完全一致的切分与读音路径，输出每词字形跨度与真实语境读音送入监督微调。最后把完整注音条件下教师模型的速度场知识转移到只看原文的学生模型，学生从纯噪声出发在线积分得到中间状态，并在同一中间状态上模仿教师的速度场，中间状态不含真实语音泄露。相对已有做法，该方法不依赖外部字形到音素模块，也不做离线多音字语音合成。在Joyo-Kanji-Yomi基准共13536句的评测中，原文模型在无注音原文输入下准确率为97.13%，目标音素错误率为2.02%，优于基础模型Irodori-Base的94.11%与4.68%。结论适用于日语常用汉字读音评测与注音可控合成，完全无注音长尾表达与跨录音条件的稳定性尚未充分验证。原文未披露训练、推理或部署成本。

## 🔗 开源与复现资源

- 第三方资源：<https://huggingface.co/Aratako/Irodori-TTS-v4.1-Small> — 链接可访问（HTTP 200）

- 第三方资源：<https://github.com/Parakeet-Inc/Joyo-Kanji-Yomi-Benchmark-Parakeet-Edition> — 链接可访问（HTTP 200）

- 第三方资源：<https://huggingface.co/sbintuitions/kana-whisper> — 链接可访问（HTTP 200）

- 第三方资源：<https://huggingface.co/Qwen/Qwen3-Embedding-0.6B> — 链接可访问（HTTP 200）

可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 日语合成要同时保住字形含义和读音准确

这篇论文处理的是日语零样本语音合成的输入问题。输入是未经分词的原始正字文本，混有表意的汉字和表音的假名，目标是输出读音正确、自然且说话人相似的语音。必须保留的信息有两类：一是汉字字形携带的词义和韵律边界线索，二是目标发音，特别是多音汉字的上下文相关读音。输出是连续声学隐变量再经声码器成的波形，论文以 Irodori-TTS 为基座，文本编码器初始化自预训练双向掩码语言模型，声学部分用扩散 Transformer 预测 25 Hz、32 维的连续 DACVAE 隐变量。

难点在于汉字读音随构词和语境剧烈变化。论文举例说明同一个秋字，单独作秋时读原生读法的 aki，在晩秋这类复合词中读汉音的 shū，在此れ誠に危急存亡の秋なり这类古典表达中又取与時相通的比喻性义训读法 toki。假名几乎一一对应发音，汉字则不行。如果输入只给音素，控制很直接，但丢掉汉字字形，论文指出这会损失自然度；如果直接吃原始正字，模型能利用表面语义更自然，但容易在多音字上读错，且用户无法指定特殊读法。

因此论文把任务拆成两个要求：可控性指用户给出读音标注时模型必须跟随，不把表面字形和标注读音都读出来；准确性指用户不给标注、只给原始正字时模型仍能从上下文消歧。这两个要求对应后文的 2 个阶段：先用 Ruby 表示加正字扰动学可控，再用在策略蒸馏把可控教师的知识迁到无标注推理。

### 级联前端、直接读正字与离线补数据的分工

传统神经合成走级联路线：文本前端做分词、字音转换和重音预测，声学模型和声码器再发声。日语早期依赖形态分析器加词典，以及预训练语言模型做多音消歧和重音预测。这种路线输入、目标和监督是一致的，即前端输出音素序列，控制明确，但代价是剥离了汉字正字，论文引用已有工作说明这限制自然度。

近期零样本合成放大模型和数据，分为自回归和非自回归两类，直接消费原始正字。论文提到的 Irodori-TTS 用条件流匹配建模连续声学隐变量，Sarashina2.2-TTS 用自回归结构，并用局部假名替换加离线合成多音字句来缓解读错。比较时要注意运行阶段不同：Sarashina 的离线合成是在训练前额外造带语音的平行数据，属于异策略的 costly 补数据；本文的在策略蒸馏是在训练中在线产生中间状态，不需要平行语音。输入条件也不同：全文假名替换虽然给了读音，但论文实验显示会破坏无分词句子的词边界和语义线索。

**价值评估模型 × 辅助分数模型 × 判别器：** 本篇未使用价值评估模型、辅助分数模型和判别器，此处仅澄清分工以防混淆。价值评估模型在原文任务命名中指估计价值的 critic，辅助分数模型指估计学生分布分数的 critic，判别器指分类判别任务中的二分类器。本篇的教师与学生都是流匹配速度场网络，监督是教师速度场向量，不做价值估计、不估计分数函数、也不做真假判别，因此后文不再使用这三个称呼。

沿着一个样本看区别：同一句とある科学の超電磁砲，若走音素路线，前端必须先决定超電磁砲读常规的ちょうでんじほう还是作品特有读法レールガン，错了后面无法挽回；若直接读正字，模型能看到汉字语义但可能按常规读法读错；若用 Ruby，则同时保留超電磁砲字形和レールガン读音，模型既有语义又有明确监督。本文选择第三条路线，并要解决模型不看标注的问题。

### 为什么直接训练 Ruby 标注学不会跟随

论文的预备实验发现，直接把 Ruby 文本拿去训练，模型在推理时不能正确理解格式或跟随标注，常常把表面字形和标注读音都读出来。原文给出的推测是基座已在原始正字上预训练，对多数汉字仅凭字形就能猜出常规读音，因而缺乏注意读音线索的动力。这个判断决定了后文扰动的设计：不是增加更多标注，而是削弱字形捷径。

第二个具体问题是隐式 Ruby 的左边界歧义。隐式写法把读音用括号跟在词后，在无分词文本中目标跨度起点不清。论文以超電磁砲为例，特殊读法レールガン与单个汉字无形态对应，隐式标注可能被理解为只标注電磁砲还是整个超電磁砲。显式写法引入｜标目标词起点、《》标读音起止，从表示上消除歧义。

第 3 个问题是训练数据对齐。若只用字音转换工具造 Ruby 平行数据，多音消歧错误会与实际语音中的真实发音错位，监督本身就是错的。因此需要跨模态校验：用音素识别模型从语音得到纯假名序列，再用 UniDic 词典对正字文本建包含所有合法切分和候选读音的词格，用动态规划找出与识别假名完全一致的对齐路径，从而精确定位每个汉字词单元的字跨度和真实语境读音。

### 两阶段如何分工：先学可控再迁到无标注

整体流程分两段。第一段是有监督微调：输入是动态采样的 Ruby 文本，输出是语音隐变量的速度场，目标是让模型在有标注时跟随标注，在无标注时仍能读。训练数据来自 Emilia 日语子集经跨模态对齐过滤后的约 774 小时语音，话语级按 50% 全标注、30% 部分标注、20% 无标注采样，部分标注下每个 Ruby 单元以 0.5 概率被标注，相邻被选单元以 0.5 概率合并，最多合并 3 次、至多 88 字符，每个被标注单元以等概率选隐式或显式格式。

第二段是跨条件在策略蒸馏：教师是冻结的微调后模型，看 100% 全 Ruby 文本；学生从教师初始化，看无标注原始文本。用大规模纯文本合成的文本-读音对提供语境多样性，不需要平行语音。训练时 80% 概率采纯文本数据，单音与多音子集等权，学生输入为 100% 原始文本；20% 概率采第一阶段的带语音数据锚定自然度和 Ruby 可控性，此时学生输入按 80% 原始文本、10% 部分 Ruby、10% 全 Ruby 采样并保持同样的正字扰动。

这样分工的原因是解耦：第一段解决表示与跟随问题，第二段解决无标注时的消歧问题。第一段若只学跟随，会在原始文本上掉点；第二段用教师轨迹作逐点监督，把上下文相关的汉字发音知识迁给学生，同时用带语音数据防止声学质量漂移。

### Ruby 表示与动态多粒度采样处理什么

Ruby 表示处理的对象是 2 维注音排版如何压成 1 维文本编码器输入。隐式 Ruby 把目标读音直接用括号缀在被标注汉字词后，贴近用户随手标注罕见词或专名的习惯；显式 Ruby 用显式边界符标出目标跨度和读音，适合无歧义的精确标注。论文表 1 的例子是とある科学の超電磁砲，隐式写成とある科学（かがく）の超電磁砲（レールガン），显式写成とある｜科学《かがく》の｜超電磁砲《レールガン》，其中｜、 《、》分别表示目标词起点、目标读音起点和终点。两种表示互补，训练时等概率选用，让模型同时适应便捷交互和精确控制。

**隐式 Ruby × 显式 Ruby：** 隐式 Ruby 和显式 Ruby 都是把目标读音写进输入的线性化方式，分工在边界是否显式。隐式 Ruby 把读音用括号跟在汉字词后，写法贴近日常手动标注，方便零星标注；显式 Ruby 用｜标出目标词起点、用《》标出读音起止，消除无分词文本中多字词左边界歧义。两者搭配让模型同时见到便捷写法和无歧义写法，组合后兼顾交互便利和精确控制。

动态多粒度采样处理的是用户标注习惯多样：从短单字到长多词短语，从完全无标注到只标选中词。做法不是在对齐后枚举固定全标注路径，而是存下对齐好的 Ruby 单元，在训练时动态决定话语级模式与单元级是否转成 Ruby 格式，并以一定概率合并相邻被选单元为连续大单元。这使同一句话在不同训练步呈现不同标注密度和粒度，模型必须学会处理无标注原始文本、稀疏局部标注和不同粒度标注。

\[\mathcal{L}_{\text{FM}}(\theta)=\mathbb{E}_{t,x_{0},x_{1}}\Bigl[\bigl\lVert v_{\theta}(x_{t},t,c)-(x_{1}-x_{0})\bigr\rVert_{2}^{2}\Bigr].\]

上面公式是条件流匹配的训练目标，要约束的是速度场网络。它计算在随机时刻 t、由干净隐变量 x0 与高斯噪声 x1 线性插值成的中间状态 xt 处，网络预测速度与真实位移 x1 减 x0 的均方差，期望取遍时间、干净样本和噪声。符号含义是：v 是速度场，θ 是学生参数，c 是文本条件，t=1 为纯噪声端、t=0 为干净端。先形成 xt 再算预测与目标的差，结果用于更新网络，使沿常微分方程轨迹能从噪声运到语音隐变量。

### 正字扰动怎样逼模型看标注又不丢字形

正字扰动的对象是每个 Ruby 单元的表面字形，操作时保持目标读音标注不变，只随机改表面。这针对的是模型依赖字形猜常规读音的捷径。若表面总能提示读音，模型无需看标注；一旦表面被削弱或误导，只有看标注才能读对。

3 个操作各有针对。汉字遮盖把表面部分或全部汉字换成特殊遮盖符，部分遮盖鼓励模型把未遮盖字与目标读音对齐以推断隐式 Ruby 的跨度边界，全遮盖迫使表面无提示时完全依赖标注。随机替换只用于显式 Ruby，把表面换成任意长度随机字或无关词，打破字与莫拉对应，迫使模型不论字形都跟随标注。语义替换也只用于显式 Ruby，用 Qwen3-Embedding-0.6B 在 UniDic 上检索语义相近但常规读音截然不同的汉字词，例如假名词ワールド读 wārudo，配语义相近但形音都不同的表面世界（常规读 sekai），模拟语义对而音不对的义训，检验模型在表面与语境都合理时仍严格跟随标注，同时利用表面做语义韵律提示。

**汉字遮盖 × 随机替换 × 语义替换：** 汉字遮盖、随机替换和语义替换都是正字扰动中的表面字形操作，分工在切断字形到读音的不同捷径。汉字遮盖用特殊遮盖符盖住部分或全部汉字，逼模型看读音标注；随机替换把显式 Ruby 的表面换成任意长度无关字词，打破字与音节对应；语义替换换成语义相近但常规读音完全不同的汉字词，模拟义合音离的义训现象。三者组合迫使模型既跟随标注读音，又保留表面字形带来的语义和韵律线索。

概率上，每个被标注表面以 0.2 概率做全跨度汉字遮盖，0.25 概率做部分字符级遮盖，0.2 概率做语义替换，0.15 概率做随机替换。这些是训练时在线增强，不是改写真实读音，目标读音始终正确。代价是输入分布被人为拉偏，需要后文带语音数据锚定，否则自然度可能受影响。

### 跨条件在策略蒸馏的输入、 rollout 与监督

蒸馏要解决的是纯文本样本没有真实语音隐变量 x0，无法按流匹配构造 xt。做法是在策略产生状态：从纯高斯噪声 x1 出发，用教师时长预测器定目标序列长度，沿学生当前常微分方程轨迹无梯度积分到随机采样时刻 t，得到在策略状态 xt。因为起点是纯噪声，xt 不含来自真实音频的音素泄露，学生要对上教师轨迹就必须从上下文消歧多音字。

**条件流匹配 × 跨条件在策略蒸馏：** 条件流匹配是基座的声学建模方式，学习从高斯噪声到声学隐变量的速度场；跨条件在策略蒸馏是把发音知识从全 Ruby 条件迁到无标注条件的训练方式，教师看全 Ruby 文本、学生看无标注文本但在同一中间状态对齐速度。两者搭配的意义在于：前者提供可采样的轨迹与中间状态，后者利用这些状态在无真实语音时仍能给出逐点的发音监督，使学生必须从上下文消歧多音字才能跟上教师轨迹。

\[\mathcal{L}_{\text{OPD}}(\theta)=\mathbb{E}_{t,x_{t}}\Bigl[\bigl\lVert v_{\theta}(x_{t},t,c_{\text{raw}})-\text{sg}\bigl[v_{\phi}(x_{t},t,c_{\text{ruby}})\bigr]\bigr\rVert_{2}^{2}\Bigr],\]

上面公式是在策略蒸馏的目标，要约束的是学生在同一中间状态下向教师看齐。它计算学生速度场 vθ 在 xt、t、无标注条件 c_raw 下的预测，与冻结教师 vφ 在同一 xt、t、全 Ruby 条件 c_ruby 下预测的均方差，教师侧加停止梯度，期望取遍随机时刻与在线 rollout 状态。符号中 sg 表示不回传教师，下标 raw 与 ruby 区分条件，省略的其他条件如参考音频在实现中仍存在。先由学生 rollout 形成 xt，再在该点算双方速度差，结果只更新学生，另加 Huber 损失让学生时长预测器对齐教师。训练用 8 步 rollout、50k 步、全局批量 256，学生学习率 5×10 的负 5 次方，文本编码器 2.5×10 的负 5 次方。

### 数据怎样建成：语音对齐与纯文本合成

本节讲训练数据的实际构造，不是模型结构。语音部分用 Emilia 多语数据集的日语子集。先用 kana-whisper 把每条语音转写成纯假名序列，捕捉实际发出读音；再用 UniDic 对对应正字文本建词格，涵盖所有合法切分与候选读音；最后用动态规划找与识别假名完全一致的格路径，定位每个汉字词的字跨度和真实语境读音。

只有假名转写与词格完全匹配且时长在 0.5 到 30 秒的 utterance 被保留，得到约 774 小时高质量对齐数据。这一步把监督从可能错的字音转换猜测换成与音频一致的真实读音。

纯文本部分用于蒸馏，按已有工作以 UniDic 词条为种子词，用 Gemini 3.1 Pro 合成文本-读音对。关键是不让大模型直接输出 Ruby 标注，而是让它生成句级假名读音序列，再用与 Emilia 相同的格对齐方法得到 Ruby 单元。对单音与多音词条分别合成 5 句和 10 句语境句，得到约 68 万单音句和 10 万多音句。这种设计保证读音标注与句子语境一致，且覆盖多音字的多种上下文。

训练超参数按原文交代：微调用 AdamW、50k 步、批量 256，主模型学习率 1×10 的负 4 次方，预训练文本编码器 1×10 的负 5 次方；蒸馏阶段冻结微调模型作教师，学生训练 50k 步。论文未披露逐步耗时与硬件预算，复现时需自行记录。需要指出缺口：音素识别错误、词格未覆盖、时长过滤都会丢数据，论文只报告保留后规模，未报告丢弃率与误对齐率。

### 在什么基准、用什么指标、和谁比

评测用修订版 Joyo-Kanji-Yomi 基准，含 13536 句，覆盖 2136 个常用汉字及其 4512 个官方读音。推理时参考音频从 JVS 语料随机采样，JVS 有 100 个说话人、每人 100 句常态 utterance。所有模型在主比较中都直接吃无标注原始正字文本，不给 Ruby 标注，保证输入条件一致。

**目标词错误率 × 整句错误率：** 目标词错误率指仅在被考查汉字对应假名段上算的假名字符错误率，反映多音字本身读对没有；整句错误率指全句发音的假名错误率，以及用语音识别转写与原文比的标准字错误率，反映整句可懂度和连带影响。两者搭配才能区分局部读准与全局连贯：只看目标词会漏掉边界语义损失，只看整句会稀释多音字改进，因此论文同时报告四项发音指标。

4 个发音指标方向要先说清：Accuracy 是被考汉字读音与真值完全一致的百分比，越高越好；Target PER 是被考汉字对应假名段的假名字符错误率，越低越好，上限 100%；Sentence PER 是全句发音的假名错误率，越低越好；Sentence CER 是语音识别转写与源文本间的标准字错误率，越低越好。语音质量用 UTMOSv2 和 DNSMOS，越高越好。

音色克隆用 CAM++ 和 ERes2Net 的说话人相似度，越高越好。自动指标不等于人工听感，这是限制。

比较对象分两类：通用多语模型如 Qwen3-TTS 1.7B Base、FireRedTTS3、OmniVoice、FishAudio S2 Pro，以及日语专用模型 Sarashina2.2-TTS 和基座 Irodori-Base，还有本文的微调教师 Irodori-Ruby-SFT 与蒸馏学生 Irodori-Ruby-OPD。可控性另设对照：基座的目标词假名替换、全句假名替换，以及 SFT 与 OPD 在目标词与全句、隐式与显式下的 Ruby 标注。

### 无标注输入时谁读得最准，代价是什么

在无标注原始正字直接输入时，发音准确性差异直接决定多音字读对多少。三者在同一 Joyo-Kanji-Yomi 划分与同一 JVS 参考提示采样下对比，Accuracy 越高越好、Target PER 越低越好。

| Model | Pronunciation Accuracy | Pronunciation Accuracy | Pronunciation Accuracy | Pronunciation Accuracy | Speech Quality | Speech Quality | Voice Cloning | Voice Cloning |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Model | Accuracy | Target PER | Sentence PER | Sentence CER | UTMOSv2 | DNSMOS | CAM++ | ERes2Net |
| Qwen3-TTS 1.7B Base [6] | 72.10% | 23.68% | 4.38% | 6.52% | 3.50 | 3.23 | 0.757 | 0.779 |
| FireRedTTS3 [8] | 73.29% | 22.35% | 4.04% | 6.12% | 3.36 | 3.26 | 0.833 | 0.832 |
| OmniVoice [12] | 83.66% | 13.24% | 2.91% | 5.18% | 3.19 | 3.21 | 0.797 | 0.786 |
| FishAudio S2 Pro [7] | 89.90% | 8.27% | 1.52% | 4.77% | 3.30 | 3.31 | 0.735 | 0.726 |
| Sarashina2.2-TTS [24] | 90.42% | 7.69% | 3.15% | 6.26% | 3.42 | 3.33 | 0.819 | 0.825 |
| Irodori-Base [21] | 94.11% | 4.68% | 0.97% | 4.04% | 3.21 | 3.23 | 0.728 | 0.697 |
| Irodori-Ruby-SFT | 92.32% | 6.05% | 1.32% | 4.40% | 3.18 | 3.22 | 0.703 | 0.663 |
| Irodori-Ruby-OPD | 97.13% | 2.02% | 0.70% | 4.21% | 3.19 | 3.23 | 0.703 | 0.663 |

Irodori-Base 无标注输入下为 94.11% 与 4.68%，仅用 Emilia Ruby 数据微调的 SFT 回落到 92.32% 与 6.05%，约低 1.79 个百分点，论文将其归因于语料规模有限、录制质量一般以及容量分给 Ruby 条件学习。经过大规模纯文本策略蒸馏后，OPD 达到 97.13% 与 2.02%，比教师高 4.81 个百分点、比基座高 3.02 个百分点，目标错误率相对基座砍半以上。语音质量与音色克隆上 OPD 与教师基本持平，通用大模型在 UTMOSv2、DNSMOS 和说话人相似度上仍占优，但发音准确率低一截。

### 整句层面是否也更连贯

局部读准是否换来整句退化，需要同时看整句发音与识别一致性。以下在同样无标注原始文本和同一参考集下对比，Sentence PER 与 Sentence CER 都是越低越好。

| Model | Pronunciation Accuracy | Pronunciation Accuracy | Pronunciation Accuracy | Pronunciation Accuracy | Speech Quality | Speech Quality | Voice Cloning | Voice Cloning |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Model | Accuracy | Target PER | Sentence PER | Sentence CER | UTMOSv2 | DNSMOS | CAM++ | ERes2Net |
| Qwen3-TTS 1.7B Base [6] | 72.10% | 23.68% | 4.38% | 6.52% | 3.50 | 3.23 | 0.757 | 0.779 |
| FireRedTTS3 [8] | 73.29% | 22.35% | 4.04% | 6.12% | 3.36 | 3.26 | 0.833 | 0.832 |
| OmniVoice [12] | 83.66% | 13.24% | 2.91% | 5.18% | 3.19 | 3.21 | 0.797 | 0.786 |
| FishAudio S2 Pro [7] | 89.90% | 8.27% | 1.52% | 4.77% | 3.30 | 3.31 | 0.735 | 0.726 |
| Sarashina2.2-TTS [24] | 90.42% | 7.69% | 3.15% | 6.26% | 3.42 | 3.33 | 0.819 | 0.825 |
| Irodori-Base [21] | 94.11% | 4.68% | 0.97% | 4.04% | 3.21 | 3.23 | 0.728 | 0.697 |
| Irodori-Ruby-SFT | 92.32% | 6.05% | 1.32% | 4.40% | 3.18 | 3.22 | 0.703 | 0.663 |
| Irodori-Ruby-OPD | 97.13% | 2.02% | 0.70% | 4.21% | 3.19 | 3.23 | 0.703 | 0.663 |

原文报告 OPD 整句假名错误率为 0.70%，与基座在部分汇总中的低位持平，说明多音字改进没有拖累全句发音；识别一致性上基座为 4.04%，OPD 为 4.21%，略高 0.17 个百分点，优势集中在目标汉字段而非全句识别。Sentence CER 依赖特定语音识别模型，转写错误会混入发音错误，不能直接等同人耳可懂度，若目标词读对但停顿不自然，Target PER 很好而自然度不一定好，因此需分开看四项指标。

### 标注粒度与显隐式如何影响可控性

给了正确读音标注时，标注范围与显式隐式格式决定可靠性。原文用 Joyo-Kanji-Yomi 参考文本和真值读音构造目标词与全句 2 级 oracle 输入，对比基座的假名替换与 SFT、OPD 的 Ruby 控制。

| Model | Input | Accuracy | Target PER | Sentence PER |
| --- | --- | --- | --- | --- |
| Base | Raw text | 94.11% | 4.68% | 0.97% |
| Base | Target Kana | 97.89% | 1.37% | 0.56% |
| Base | Full Kana | 95.40% | 2.89% | 1.06% |
| SFT | Target Impl. | 97.56% | 1.71% | 0.75% |
| SFT | Target Expl. | 98.12% | 1.26% | 0.72% |
| SFT | Full Impl. | 98.05% | 1.33% | 0.53% |
| SFT | Full Expl. | 98.20% | 1.19% | 0.49% |
| OPD | Target Impl. | 98.09% | 1.30% | 0.57% |
| OPD | Target Expl. | 98.33% | 1.11% | 0.56% |
| OPD | Full Impl. | 98.14% | 1.23% | 0.45% |
| OPD | Full Expl. | 98.24% | 1.15% | 0.42% |

基座用目标词假名替换可到 97.89% 与 1.37% 与 0.56%，全句都换成假名则回落到 95.40% 与 2.89% 与 1.06%，甚至差于无标注输入，证实剥离汉字正字会丢掉词边界与语义线索。保留字形加读音的 Ruby 避免了这种退化，从目标词扩到全句时目标准确率维持高位而整句错误率进一步下降。显式 Ruby 在目标词与全句、SFT 与 OPD 下一致优于隐式 Ruby，因为显式边界符消除左边界歧义，尤其对读音不可组合的多字词。OPD 在 4 种 Ruby 模式下全面超过 SFT，仅标目标词时整句错误率为 0.56% 到 0.57%，而 SFT 为 0.72% 到 0.75%，其余汉字同时受益于蒸馏来的无标注消歧能力。这些是给定正确读音的 oracle 结果，实际部署中若用户或前端给错读音，模型仍会跟随错读音。

### 结论在什么边界内成立，还有哪些没测

已验证的是在 Joyo-Kanji-Yomi 的 13536 句常用汉字覆盖下，用自动假名计分与特定识别模型计分，OPD 在无标注输入上发音最准，且在给定正确 Ruby 时可控性最强。证据只支持该基准与该计分 pipeline 下的判断，不支持推广到所有日语体裁、方言、专名或嘈杂参考音频。未测范围包括人工听感的自然度与可懂度、长文本韵律、跨说话人稳定性，以及标注错误时的鲁棒性。

数据侧限制是严格对齐过滤只留完全匹配句，丢弃句的分布未知；纯文本合成依赖大模型生成假名序列再对齐，若大模型在罕见读音上系统性犯错，蒸馏会继承偏置。训练侧缺口是未报告硬件、时长与推理延迟，8 步 rollout 的开销与 50k 步收敛性无法从论文直接复算。比较公平性上，通用基线与日语专用模型的日文预训练数据量与参数量不同，不能把准确率差距简单归因于架构；语音质量与音色相似度上通用模型仍领先，说明准确率与自然度由不同因素主导。

一个易误解是把 oracle 全标注的高分当成部署提升。全标注要求事先知道每词正确读音，实际无标注推理只能拿到 OPD 的 97.13% 水平；目标词标注的整句增益也依赖其余词被蒸馏修好，不是标注本身变强。另一个误解是把在策略等同于无代价：在线 rollout 从纯噪声出发避免音素泄露，但每步要无梯度积分轨迹，训练成本高于离线查表。

### 复现第一步做什么，需要哪些资源

复现先分清三件事：代码开源、权重可下载、系统可运行是不同的。论文基于开源的 Irodori-TTS-v4.1-Small，文本中给出其 Hugging Face 链接，本次校验显示该第三方链接当前可达，但这只证明链接可达，不证明作者已公开本篇的新代码与新权重；UniDic 词条基准、kana-whisper 与 Qwen3-Embedding-0.6B 的链接同样是论文提到的第三方资源，不等同作者资源已公开。来源未确认不是技术缺陷，但复现前应先确认能拿到基座权重、Emilia 日语子集与 Joyo-Kanji-Yomi 修订版。

第一步是重建对齐 pipeline：用 kana-whisper 转写语音得纯假名，用 UniDic 建词格，再用动态规划找完全一致路径，复刻 774 小时过滤逻辑并记录丢弃率。接着按 50%、30%、20% 的话语模式与 0.5 标注概率、0.5 合并概率、隐显各 0.5 实现动态采样，再按 0.2 全遮盖、0.25 部分遮盖、0.2 语义替换、0.15 随机替换实现扰动，其中语义检索需 Qwen3-Embedding-0.6B。微调 50k 步后冻结作教师，按 80% 纯文本与 20% 带语音、纯文本中单多音等权、学生侧 100% 原始文本实现蒸馏，时长用 Huber 对齐，rollout 设 8 步。

还需补的验证是消融扰动各分支与标注比例，报告误对齐率、训练时长与推理实时率，并在人工听测上复核 Sentence CER 的结论。超参数与信息条件要保留原文值：微调主学习率 1×10 的负 4 次方、编码器 1×10 的负 5 次方，蒸馏主学习率 5×10 的负 5 次方、编码器 2.5×10 的负 5 次方，批量均为 256。

### 什么时候值得尝试这种做法

当任务同时要求保留正字语义和精确指定读音，且无标注输入占多数时，这套做法值得尝试。典型是日语这类无分词、汉字多音的合成：用户偶尔要指定专名、罕见词或作品特有读法如レールガン，平时则直接给原始文本。此时先学显隐式 Ruby 加扰动，保证有标注必跟随；再用纯文本蒸馏补无标注消歧，避免为每个多音字离线合成语音的高成本。

不值得照搬的情况是标注本身不可靠或语料字形信息很少。若前端或用户经常给错读音，强跟随会放大错误，应先做读音校验；若语言字形与读音对应规则、扰动中的语义替换与义训假设不成立，需重设扰动。复现与选型应以四项发音指标加语音质量与说话人相似度联合判断，不只看 Accuracy 单点。若只能做一项补充验证，优先做人工可懂度与自然度听测，因为自动的 Sentence PER 与 Sentence CER 都经过假名对齐或识别模型，可能与人耳判断偏离。

<details>
<summary>📎 论文与评分元数据</summary>

排名：前50% | 文档类型：方法研究 | [arXiv 原文](https://arxiv.org/abs/2611.06403v1)

</details>

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。

- 评分规则：type-aware-v1

- 评分模型：muse-spark-1.3-contributor

- 评分请求协议：openai_responses

---

[← 返回 2026-11-09 语音/音乐/音频论文速递](/audio-paper-digest-blog/posts/2026-11-09/)
