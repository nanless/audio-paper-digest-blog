---
title: "Fine-Tuning a Transducer for Impaired Speech: Where the Gains Appear and What They Mean for Evaluation"
date: 2026-11-06
draft: false
tags: [语音识别, 病理语音评估, SFT, 流式处理]
categories: [论文速递]
description: "本文把公开的 Parakeet TDT 1.1B 在约 950 小时障碍语音上整体微调并做权重平均，在隐藏测试集 Test1 上把字符错误率从 15.26% 降到 7.81%，增益集中在原来最难识别的说话人和见过的句子上，而实时版本在普通 CPU 上以约 0.9 秒延迟达到相近精度。"
hiddenInHomeList: true
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_arxiv_id: "2611.07587"
paper_digest_workbench_contract: "researcher-workbench"
paper_digest_workbench_schema_fingerprint: "1f09b594c317cc38e934de27a5b0e8ceb4baa50ef79bd4f8683dd9adea720fe7"
paper_digest_reader_title: "微调识别障碍语音的 Transducer：增益出现在哪里及其对评测的启示"
paper_digest_original_title: "Fine-Tuning a Transducer for Impaired Speech: Where the Gains Appear and What They Mean for Evaluation"
paper_digest_arxiv_version: 1
paper_digest_arxiv_versioned_id: "2611.07587v1"
paper_digest_arxiv_abs_url: "https://arxiv.org/abs/2611.07587v1"
paper_digest_arxiv_pdf_url: "https://arxiv.org/pdf/2611.07587v1.pdf"
paper_digest_primary_task: "语音识别"
paper_digest_tags_contract: "paper-tag-flat-tags"
paper_digest_tags_schema_fingerprint: "27e36280a4b8d3df62ebe54d3ab037920f4d69feb2b554163f01bbae2caf4338"
paper_digest_tags_selection_contract: "paper-tag-selection"
paper_digest_tags_registry_version: "paper-tag-catalog"
paper_digest_tags_registry_sha256: "9673bc0122e1905a5dcfd8b223675400cc2fa4c36095bc0e5f817edf99a0ec5c"
paper_digest_tags_concepts: [{"facet":"task","id":"task.asr","label":"语音识别"},{"facet":"task","id":"task.pathological-speech","label":"病理语音评估"},{"facet":"method","id":"method.sft","label":"SFT"},{"facet":"setting","id":"setting.streaming","label":"流式处理"}]
paper_digest_primary_method: "SFT"
paper_digest_score: 6.3
paper_digest_rank_bucket: "前50%"
paper_digest_document_type: "系统技术报告"
paper_digest_one_sentence: "本文把公开的 Parakeet TDT 1.1B 在约 950 小时障碍语音上整体微调并做权重平均，在隐藏测试集 Test1 上把字符错误率从 15.26% 降到 7.81%，增益集中在原来最难识别的说话人和见过的句子上，而实时版本在普通 CPU 上以约 0.9 秒延迟达到相近精度。"
paper_digest_authors: [{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Kien Nguyen"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Tuan Dinh"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Bao Phan"}]
paper_digest_abstract_sha256: "019c54936d6f641e082a4a58f9513a6bdfa5a45a4ad09c3e0973ef69f59c179a"
paper_digest_sidecars: {"citation.bib":{"sha256":"756f27e0806d42da25b81bdca834ad2136a3fcf69410bdce72bc12061e03428a","url":"/audio-paper-digest-blog/client/papers/2026-11-06/2611-07587/citation.bib"},"citation.json":{"sha256":"9ac6ab48a8f724f8701e53575bf1a5d17406c978cd5d651782acdecdf1cf714e","url":"/audio-paper-digest-blog/client/papers/2026-11-06/2611-07587/citation.json"},"citation.ris":{"sha256":"55fdd4b34f483d8a3eebf43e6e4b8382cd58a95612780595d969e366cf670dda","url":"/audio-paper-digest-blog/client/papers/2026-11-06/2611-07587/citation.ris"},"rethink-context.json":{"contract":"paper-research-context","schemaFingerprint":"5d4e79f7d3ee65b39ccb38281548bf20a1b2041ab7a27625eaf97ab9909a8383","sha256":"a5e6cd5391bb392e2b708a28027fb58d1de5b1b3a44af585f82c05c213372226","url":"/audio-paper-digest-blog/client/papers/2026-11-06/2611-07587/rethink-context.json"}}
paper_digest_api_reader_contract: "beginner-researcher"
paper_digest_api_reader_schema_fingerprint: "cd8baf5b8bda3a49eec64f6005931af63de4e9a13148cba5f354c661ca6e9df2"
paper_digest_api_reader_article_sha256: "8be331332265e5cb9e118af5e64c5377ff394e28a8a79985cc04c1fa61cf1a1c"
paper_digest_api_reader_plan_sha256: "706d54c8e4cf24a1739f68195f5fea4cee4e74f03eaa45df0f5856e40ccb0cd9"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings"
paper_digest_api_reader_source_binding_schema_fingerprint: "d2a2607a6e561909473022eb43f56332ee357af8568566a095c29083ffdec9cc"
paper_digest_api_reader_source_bindings_sha256: "ddc5a4cbac34f85a054f034eaac3c5034370170583c5699e175fc885311dfb71"
paper_digest_api_reader_source_table_count: 5
paper_digest_api_reader_source_formula_count: 0
paper_digest_api_reader_structured_artifacts_sha256: "f0f7bd13ad46c7d9ce4eb88b7d75cc9b321858c2be621c8b0052d9a9030d93fc"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity"
paper_digest_api_reader_author_identity_schema_fingerprint: "1e3fd3a9a56c9a5bf52df8df5022690b9a3fa92e83e934f295af87c0e258ed2f"
paper_digest_api_reader_author_identity_sha256: "d3d094071a614cb004f2c8b8ca4e5120f1bc7bc9cdc4977f320d1e9bf8fc8b1a"
paper_digest_api_reader_author_count: 3
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity"
paper_digest_api_reader_resource_identity_schema_fingerprint: "33b0be17118be61f39b85ce690c8da17e91f2864bb65e85284f60c40067328e0"
paper_digest_api_reader_resource_identity_sha256: "8912bf070dd7354ca68128d727f5317d2508cc41e6b864602361cc073bdda612"
paper_digest_api_reader_resource_count: 0
paper_digest_api_reader_figure_persistence: "ephemeral-no-persisted-figure-assets-v1"
paper_digest_api_reader_decision_projection: "api-reader-decision-projection"
paper_digest_api_reader_decision_projection_schema_fingerprint: "e56feb5ab75c8710904916b898f73dab9bb18bdf65bb60b7ed2edf7f99cea860"
---

# 📄 微调识别障碍语音的 Transducer：增益出现在哪里及其对评测的启示

> 英文题目：*[Fine-Tuning a Transducer for Impaired Speech: Where the Gains Appear and What They Mean for Evaluation](https://arxiv.org/abs/2611.07587v1)*

<!--paper-tag-hierarchy-v1:start-->

**研究分类**

- **研究任务**：[语音识别](/audio-paper-digest-blog/papers/?concept=task.asr)；[病理语音评估](/audio-paper-digest-blog/papers/?concept=task.pathological-speech)
- **研究方法**：[SFT](/audio-paper-digest-blog/papers/?concept=method.sft)
- **研究条件**：[流式处理](/audio-paper-digest-blog/papers/?concept=setting.streaming)

<!--paper-tag-hierarchy-v1:end-->

> 评分：**6.3/10** | 创新 1/2 | 技术严谨 1/1.5 | 实验充分 1.2/1.5 | 清晰度 0.8/1 | 影响力 1/1.5 | 开源 0/1.5 | 可复现 0.1/0.5 | 工程/实践 1.2/1.5


## 👥 作者与机构

- Kien Nguyen：机构信息未能在本次解析中与作者逐人可靠绑定
- Tuan Dinh：机构信息未能在本次解析中与作者逐人可靠绑定
- Bao Phan：机构信息未能在本次解析中与作者逐人可靠绑定

## 📌 核心摘要

语音识别要把病理语音的声学输入转写成文字，输出是经过官方文本归一化后的字符序列，难点是发音差异大、说话人少而提示语句在说话人之间大量重复，单一总错误率难以说明系统在新说话人和新语句上的表现。作者从公开的Parakeet TDT 1.1B出发，先用约950小时、1100多人的SAP相关语音对整体模型做微调，得到多个微调模型再把权重平均成一个模型用于解码，权重平均不增加推理时的模型数量。直播版本沿用同类微调模型并在无GPU的CPU上运行，熟悉语句与熟悉说话人的分组靠留出一部分训练说话人的录音构造对照，使已知说话人已知句、已知说话人新句、新说话人已知句与新说话人新句进入同一分析。与官方基线相比，在隐藏Test1评测设置下最佳离线条目字符错误率为7.81%，基线字符错误率为15.26%，呈现低于基线的方向。在41人选择面板评测设置下，平均后模型字符错误率为6.09%，微调前Parakeet TDT 1.1B为12.16%，呈现低于微调前的方向，且各病因点估计均更低。在新说话人已知句与新句对照的评测设置下，分析模型字符错误率在已知句为2.58%、新句为6.42%，已知句呈现低于新句的方向，熟悉语句差异大于熟悉说话人差异。直播条目在Test1的CPU评测设置下以字符错误率7.96%到8.07%接近离线水平，对应两段中位延迟之和为0.85秒到0.93秒，结论适用于SAP覆盖的5种病因和挑战语句分布，对新语句、极重度说话人和临床可用性尚未验证，原文未披露训练、推理或部署成本。

## 🔗 开源与复现资源

本次未形成可展示的已核验资源记录，开放状态尚未核实。

可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 障碍语音识别要解决什么困难

这篇论文研究的输入是一段录音，输出是这段话的文字转写。对象是受肌萎缩侧索硬化、帕金森病、脑瘫、唐氏综合征或中风影响的说话人，他们的发音、语速和节奏与训练通用识别模型的数据差别较大。通用语音接口在这些人身上错误明显更多，而这些用户恰恰可能更需要语音交互。

论文参加的是 Speech Accessibility Project Challenge 2，简称 SAPC2。挑战分两条赛道，第一赛道考离线转写，只看准确率；第二赛道考实时转写，同时看准确率和延迟。隐藏测试集的说话人都不在训练数据里，这一点决定了后面所有结论的适用条件：增益必须在新说话人身上成立才有意义。

### 已有数据和评测路线与本文位置

早期的障碍语音数据如 UASpeech 和 TORGO 规模小，且多为孤立词，难以支撑连续语音识别。Project Euphonia 和 Speech Accessibility Project 收集了数百到数千人的语音，SAP 的录音来自上述 5 类病因人群，每条录音是一个提示，可能是短指令、朗读句或对问题的回答。

SAP 挑战沿用的评测思路是在没见过的说话人上计分。本文没有提出新模型结构，而是沿着公开模型加领域微调这条路线，用 SAP 挑战训练集加上 SAP 研究版数据的训练和开发部分，共约 950 小时、1100 多位说话人的数据，把公开识别器适配到障碍语音，再研究增益分布在哪里、评测时容易被什么因素误导。

### 论文提出的四个具体问题

论文开篇把目标拆成 4 个可验证的问题。第一，把公开模型微调后错误下降多少，在不同病因和不同严重程度上是否一样。第二，测试时遇到熟悉的说话人和熟悉的句子，分别与准确率有什么关系。第三，这类模型能否同时服务离线和实时使用，能否在普通电脑的 CPU 上跑。第四，从多次试错中总结出哪些评测教训。

这 4 个问题共用同一个度量。主指标是字符错误率，即经过官方文本归一化后写错字符的比例，越低越好，表格同时给出按词计数的词错误率。理解后文数字时要记住，分母是字符或词，聚合对象是录音，但在做不确定性估计时作者按说话人重采样，因为产品面对的是新说话人而不只是新录音。

### 系统整体流程是怎样的

沿着一条录音走一遍流程会更清楚。原始输入是 SAP 的一条提示录音，先送入起点模型做识别，再用障碍语音数据对起点模型做整体微调，最后把多个微调模型的权重平均成一个模型用于推理。实时版本用同样种类的微调模型，只是做了流式部署，能在没有 GPU 的 CPU 上运行。

训练数据只用 SAP 范围内的数据，没有用 SAP 之外的语音，也没有用合成语音。后期的参赛模型还把挑战的已标注开发集说话人加入训练。作者明确说明从未接触第二个隐藏测试集，也没有针对测试音频做自适应，因此 Test1 的分数反映的是在新说话人上的泛化，而不是对测试集的过拟合。

### 起点模型和权重平均各起什么作用

起点模型是作者比较多个公开识别器后选定的 Parakeet TDT 1.1B。TDT 在这里指解码器还会预测每个词元持续多久，这属于模型自带的属性，本文没有改变它。选择它的原因是它在初步比较中表现合适，而不是因为它专为障碍语音设计。

微调指用 NeMo 工具对整个模型继续训练，输入是障碍语音，监督是对应的转写文字，更新的是全部参数。权重平均指把几个微调好的模型权重取平均，得到仍然只有一个模型的方法，运行时不增加代价。它的作用是让结果更稳定，而不是集成多个模型同时解码。

**Parakeet TDT × 微调：** Parakeet TDT 1.1B 是起点，指 11 亿参数的公开识别模型，其解码器还会预测每个词元持续多久；微调指在其上用障碍语音继续训练全部参数。两者搭配的意义是保留公开模型已学到的通用语音表示，只把输出分布向障碍语音偏移，而不重新设计模型结构。

**权重平均 × 离线与实时转写：** 权重平均指把多个微调模型的权重取平均得到一个模型，运行时仍只是一个模型，不增加计算代价；离线转写允许看完整音频，实时转写要求边说边出结果并考核延迟。组合后多了稳定性，同一类微调模型既可用于离线赛道，也可部署到 CPU 做实时赛道。

### 训练数据划分和熟悉性实验如何构造

训练部分的关键不是超参数，而是划分。作者把挑战的已标注开发集按说话人切开，得到 41 人的选择面板共 4510 条录音，只看总体分数；83 人先密封，后来加入训练；另留出 300 位训练说话人的部分录音，只用于熟悉性研究。严重程度和熟悉性分析共用 124 位新说话人的全部已标注录音，共 47929 条，其中很多是重复提示的额外录音，所以多数录音的句子在训练中出现过。

熟悉性实验单独训练了一个分析模型，做法是一次微调但扣住 300 位训练说话人的部分录音。这样每条测试录音可以按说话人是否见过、句子文本是否见过分成 4 组。句子是否见过只看忽略大小写和标点后的文本是否在训练中出现过。作者强调各组在说话人、提示类型和长度上本来就不同，因此看到的差异是关联，不是因果。

在执行顺序上，训练先把挑战训练集与 SAP 研究数据发布中的训练和开发部分合在一起使用，约 950 小时、超过 1100 位说话人，不使用 SAP 之外的语音，也不使用合成语音，后期参赛条目才把已标注开发集说话人也加入训练。模型分工是明确的：起点是公开的 Parakeet TDT 1.1B，解码器还预测每个词元持续时长；微调是用 NeMo 对全模型微调；平均是对多个微调模型的权重做平均，得到仍是单个模型，运行时不增加代价；在线条目是同类微调模型在无 GPU 的 CPU 上运行。

度量执行过程同样固定：全部分数都用官方评分工具，先做官方文本归一化后再算字符错误率，词错误率只作对照；表格中的区间是对说话人重采样 2000 次得到的 95% 说话人区间，因为产品面对的是新说话人而不只是新录音。作者从未接触第二个隐藏测试集，也没有对测试音频做自适应。

严重程度分组的执行是把 124 位新说话人按现成 Whisper large-v3 能听懂的程度分组，再在相同说话人和相同录音上比较微调前后，因此分组不是临床严重程度分级；为避免用 Whisper 自身误差分组再评 Whisper 带来的偏倚，对照用的是微调前的 Parakeet 原始模型。熟悉性分组的执行是把已知说话人已知句子再拆成同一人说过该句与只有他人说过该句两小类，新说话人就是选择面板加前密封组共 124 人，每位说话人可同时出现在多个组；已知提示多为短指令，作者还做了按录音长度匹配后的比较，差距从约 2.5 倍缩小到约 1.7 倍，说明长度解释了部分差距但仍有剩余。

具体到可复述的录音与评估分工，每条 SAP 录音都是单个提示，形式为短指令、朗读句子或对问题的回答；组织方公布的两个隐藏测试集合计说话人构成为 ALS66 人、脑瘫 58 人、唐氏综合征 32 人、中风 24 人、帕金森病 13 人。选择面板的 41 位新说话人只用于总体分数观察，83 位前密封说话人先保持密封再并入训练，300 位训练说话人的扣留录音只用于熟悉性四分组，因而已知说话人已知句子、已知说话人新句子、新说话人已知句子、新说话人新句子的划分是按分析模型的训练数据定义的。对另外两个未微调识别器而言，这些只是同一批录音。

熟悉性数字的执行含义是直接可比的：新说话人已知句子字符错误率为 2.58%，新说话人新句子为 6.42%；已知说话人新句子为 5.02%，已知说话人已知句子合计为 1.45%，其中同一人说过该句为 0.75%，只有他人说过该句为 1.86%。按录音长度匹配后，已知句子与新句子仍为 4.89% 对 8.32%，约 1.7 倍。严重程度一侧以新句子为更干净的比较，微调去除错误的比例随组别加重而上升，最重组从 51.88% 降到 30.62%，去除约 41%，最轻组从 2.38% 降到 1.91%，去除约 20%，且最轻组区间重叠。

### 指标、区间和对照条件如何设定

所有分数都用官方评分工具计算。表格中的区间是把说话人重采样 2000 次得到的 95% 区间，称为说话人区间。之所以不按录音计算，是因为同一人的多条录音高度相关，按录音算会低估不确定性。

对照设置上，分病因比较用的是未在该数据上微调的两个识别器：微调前的 Parakeet 原模型和挑战 starter kit 中使用的 Whisper large-v3。严重程度分组用现成 Whisper 的错误率划分，再用微调前后的 Parakeet 在相同说话人和录音上比较，避免用 Whisper 自己的错误给 Whisper 分组带来的偏倚。作者反复提醒这种分组不是临床严重程度分级。

**字符错误率 × 词错误率：** 字符错误率是本文主指标，指经过官方文本归一化后写错的字符所占比例，越低越好；词错误率是同样思想按词计数。两者分工是字符错误率对短指令和发音含糊更敏感，词错误率更接近阅读体验，本文同时报告以互相校准，但判断增益主要看字符错误率。

**按说话人重采样区间 × 按条件加权：** 按说话人重采样区间指把说话人重采样 2000 次得到的 95% 区间，用来反映遇到新说话人的不确定性；按条件加权指按隐藏集各病因人数比例重新加权小面板分数。两者搭配是为了说明小面板人数少且病因构成不同，直接比较面板与隐藏集数字会产生偏差。

### 隐藏集总体精度达到了多少

先看最受关注的比较问题：在隐藏测试集 Test1 上，微调加权重平均相对官方基线减少了多少字符错误，是否用了选择面板的说话人。指标方向是字符错误率和词错误率都是越低越好，公平条件是都在 Test1 上用官方工具评分。

| System | Trained on selection speakers | CER | WER |
| --- | --- | --- | --- |
| Official challenge baseline (organisers) | – | 15.26 | 21.53 |
| Earlier entry | no | 8.30 | 11.95 |
| Best entry trained without the selection speakers | no | 7.87 | 11.78 |
| Best scored entry, trained on all labelled speakers | yes | 7.81 | 11.69 |

表中最好成绩是用全部已标注说话人训练的模型，字符错误率为 7.81%，词错误率为 11.69%，官方基线为 15.26% 和 21.53%。不使用选择面板说话人的最好模型为 7.87%，比基线少约 48% 的字符错误。作者同时说明第二个测试集的结果在写作时尚未发布，因此结论只在 Test1 条件下成立，不能推广到第二个隐藏集。

### 不同病因上的增益是否一致

下一个比较问题是：在 41 位新说话人的选择面板上，分病因看微调模型是否都优于未微调模型。表中微调列对应不使用选择面板说话人的最好模型，另两列是微调前的 Parakeet 和现成 Whisper，条件是同一批说话人和录音。

| Condition | Speakers | Recordings | Ours (averaged) | Parakeet TDT 1.1B | Whisper large-v3 |
| --- | --- | --- | --- | --- | --- |
|  |  |  | fine-tuned | before fine-tuning | off the shelf |
| Parkinson’s disease | 11 | 1,356 | 4.76 [2.37, 7.47] | 7.51 [3.21, 13.29] | 8.00 [3.72, 13.18] |
| ALS | 10 | 522 | 4.95 [2.02, 11.67] | 8.60 [3.82, 19.38] | 11.60 [6.32, 21.39] |
| Cerebral palsy | 9 | 1,058 | 8.49 [5.01, 14.34] | 20.37 [10.07, 40.11] | 19.59 [11.88, 30.79] |
| Down syndrome | 7 | 1,066 | 7.00 [5.01, 9.72] | 14.73 [10.12, 19.74] | 15.12 [10.46, 20.65] |
| Stroke† | 4 | 508 | 8.56 [3.00, 17.21] | 20.59 [7.44, 50.68] | 20.76 [6.83, 41.66] |
| All | 41 | 4,510 | 6.09 [4.52, 8.00] | 12.16 [8.44, 16.75] | 12.73 [9.44, 16.48] |

总体上微调模型在该面板为 6.09%，约为另两者的 절반，点估计在每个病因上都更低。但帕金森病、肌萎缩侧索硬化和中风的区间存在重叠，中风只有 4 人，区间很宽。帕金森病和肌萎缩侧索硬化本身错误率最低，脑瘫、唐氏综合征和中风仍更难。作者还发现该模型在 Test1 为 7.87%，约为面板的 1.29 倍，按隐藏集病因人数加权后面板分数从 6.09% 升到 6.79%，说明病因构成能解释部分差异，但不能解释全部。

### 越难理解的说话人获益是否越大

严重程度分析的比较问题是：按现成 Whisper 错误率把 124 位新说话人分成轻、中、重、极重四档，在相同说话人和录音上看微调去掉了多大比例的错误。作者强调领读时优先看新句子，因为全部录音多数是已知句子，混在一起会夸大效果。分组是 Whisper 字符错误率区间，不是临床分级，对比的原模型是微调前的 Parakeet。

|  | New sentences only | New sentences only | New sentences only | New sentences only | All recordings | All recordings | All recordings |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Group (Whisper CER) | Spk. | Fine-tuned | Original | Removed | Spk. | Fine-tuned | Original |
| Mild (<<5) | 37 | 1.91 [1.53, 2.30] | 2.38 [1.99, 2.77] | 20% | 41 | 1.22 | 2.76 |
| Moderate (5–15) | 38 | 4.04 [3.15, 5.05] | 5.57 [4.46, 6.85] | 27% | 34 | 2.55 | 6.49 |
| Severe (15–30) | 23 | 10.89 [8.93, 13.37] | 17.00 [11.96, 23.86] | 36% | 22 | 7.09 | 18.08 |
| Very severe (≥\geq30) | 26 | 30.62 [24.98, 37.46] | 51.88 [41.62, 62.15] | 41% | 27 | 16.38 | 56.44 |

在新句子上，去掉的错误比例随严重程度上升，从最轻档的 20% 到最重档的 41%，最重档从 51.88% 降到 30.62%。但最轻档区间重叠，不能断言有稳定提升。全部录音上原模型错误率从 2.76% 升到 56.44%，微调模型从 1.22% 升到 16.38%，绝对值仍随严重程度大幅上升。这里的分析模型是单次微调的分析模型，不是最好参赛模型，结论的适用条件是新句子和相同录音对照。

**新说话人 × 新句子：** 新说话人指训练中没见过的人，新句子指文本在训练中没出现过的录音，挑战要求在没见过的说话人上计分。两者分工是区分声学泛化和文本记忆，本文发现见过句子带来的错误下降比见过说话人更大，说明只报总错误率会掩盖记忆成分。

### 实时版本在普通 CPU 上代价如何

实时赛道的比较问题是：在 CPU 上运行同类微调模型，延迟能降到多少，精度损失多少。挑战报告两个延迟：首个稳定词出现的时间和说话结束后到最终文本的时间，表中合计为两者中位数之和。

| Track 2 entry | CER (%) | First stable word (s) | Final text (s) | Sum (s) |
| --- | --- | --- | --- | --- |
| Entry 1 | 8.05 | 7.35 | 1.20 | 8.56 |
| Entry 2 | 7.98 | 0.82 | 1.51 | 2.34 |
| Entry 3 | 8.02 | 0.41 | 0.53 | 0.94 |
| Entry 4 | 7.96 | 0.41 | 0.52 | 0.93 |
| Entry 5 | 7.97 | 0.42 | 0.50 | 0.92 |
| Entry 6 | 8.07 | 0.42 | 0.44 | 0.85 |

首个参赛实时条目合计延迟为 8.56 秒，后期条目降到 0.85 秒到 0.93 秒之间，实时字符错误率为 7.96% 到 8.07%，接近离线条目的 7.81% 到 8.30%。最快的第 6 条也是最不准的，说明速度和精度仍有轻微权衡。结论成立的条件是挑战的 CPU 评测环境和官方报告的延迟口径，换硬件或换延迟定义数字会变。本表数值与单位依据论文 PDF。

### 熟悉说话人和熟悉句子哪个影响更大

熟悉性研究的比较问题是：说话人见过和句子见过，哪一个与更低的错误率相伴。分析模型把录音分成已知说话人加已知句子、已知说话人加新句子、新说话人加已知句子、新说话人加新句子 4 组，第一组再细分为同一人说过该句和只有别人说过。

| Group (speaker / sentence) | Rec. | Spk. | Fine-tuned | Parakeet | Whisper |
| --- | --- | --- | --- | --- | --- |
|  |  |  | (analysis) | original | off the shelf |
| 1: known / known | 2,362 | 300 | 1.45 [1.05, 1.87] | 13.87 [11.84, 16.11] | 13.07 [11.07, 15.19] |
| 1a: same speaker | 1,105 | 293 | 0.75 [0.47, 1.08] | 12.90 [10.79, 15.29] | 12.29 [10.07, 14.72] |
| 1b: other speakers only | 1,257 | 300 | 1.86 [1.38, 2.44] | 14.45 [12.35, 16.77] | 13.54 [11.51, 15.74] |
| 2: known / new | 1,500 | 300 | 5.02 [4.34, 5.78] | 9.32 [7.84, 11.01] | 8.67 [7.50, 9.95] |
| 3: new / known | 37,281 | 124 | 2.58 [1.71, 3.60] | 16.18 [12.68, 20.03] | 15.20 [11.90, 18.86] |
| 4: new / new | 10,648 | 124 | 6.42 [5.26, 7.96] | 9.89 [7.90, 12.52] | 11.88 [9.77, 14.49] |

对新说话人，已知句子为 2.58%，新句子为 6.42%，而已知说话人说新句子为 5.02%，因此句子熟悉相伴的差异更大。已知句子本身并不容易，因为微调前 Parakeet 在已知句子上为 16.18%，反而高于新句子的 9.89%，低错误来自训练中见过这些文本。同一人说过的扣留录音最低，为 0.75%，但已知说话人测试录音与训练录音来自同一会话，可能高估说话人效应。已知提示多为短指令，匹配录音长度后差距从约 2.5 倍缩小到约 1.7 倍，即 4.89% 对 8.32%，说明长度解释了一部分，但不是全部。

### 哪些结论还不稳固与评测教训

作者总结了 4 条评测教训。第一，按说话人计数，而不是按录音计数，在 41 人面板上很多看似的提升都小于说话人层面的不确定性，这类提升很少能延续到其他说话人或 Test1。第二，单独检查最难的说话人，若干整体中性的改动会让语速慢或受影响重的说话人变差。第三，事先定好通过规则，并在与选择面板分离的面板上验证，避免只拟合一个面板。第四，开发面板偏乐观，Test1 错误约为选择面板的 1.29 倍，部分原因是小面板缺少最难的说话人。

局限同样明确。选择面板只有 41 人，中风只有 4 人，分病因区间很宽。严重程度和熟悉性分析只用单次微调的分析模型，不是最好模型。严重程度是现成识别器的错误，不是临床评级。已知说话人的测试录音与训练录音来自同一会话，可能夸大说话人效应。

隐藏集只报告总体分，无法做分病因拆解。是否达到可用水平，论文说尚未验证。

### 复现第一步做什么与需要什么条件

值得尝试的情形是手头有障碍语音的转写数据，且测试说话人与训练说话人不重叠，同时希望在普通 CPU 上兼顾离线和实时。复现第一步是按论文的数据范围准备 SAP 挑战训练集加 SAP 研究版的训练和开发部分，不混入外部语音和合成语音，再用 NeMo 对 Parakeet TDT 1.1B 做整体微调，并对多个微调结果做权重平均。

需要补的验证是把选择面板与最终判断分离，报告分病因、分严重程度和分句子是否见过的结果，并给出说话人区间的重采样区间。由于本次没有发现来源绑定且完成验证的资源，不得声称代码、模型或数据已公开，复现时应以 SAP 数据使用条款和官方评分工具为准。还需要单独验证新句子上的表现，因为复用训练提示的评测会低于新文本上的错误率。

### 综合判断与容易产生的误解

综合起来，微调加权重平均把 Test1 字符错误率从 15.26% 降到 7.81%，在选择面板上约为未微调模型的一半，实时版本在 CPU 上以约 0.9 秒合计中位延迟达到 7.96% 到 8.07%。在单模型分析中，去掉的错误比例在最难理解的说话人上最大，但绝对错误率仍从轻到重明显爬升，脑瘫、唐氏综合征和中风仍更难。

容易误解的是把已知句子的低错误当成泛化能力。论文用微调前模型在已知句子上反而更差来说明，低错误来自训练中见过这些文本，而不是这些句子本身简单。另一个误解是把个人重复句的 0.75% 当成个性化已经成功，论文只把它当作假设，认为来自用户的录音可能有价值，但这不是本文的结果。是否可用、是否应替代人工交流伙伴，都需要与使用者一起评估，系统只能起支持作用。

<details>
<summary>📎 论文与评分元数据</summary>

排名：前50% | 文档类型：系统技术报告 | [arXiv 原文](https://arxiv.org/abs/2611.07587v1)

</details>

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。

- 评分规则：type-aware-v1

- 评分模型：muse-spark-1.3-contributor

- 评分请求协议：openai_responses

---

[← 返回 2026-11-06 语音/音乐/音频论文速递](/audio-paper-digest-blog/posts/2026-11-06/)
