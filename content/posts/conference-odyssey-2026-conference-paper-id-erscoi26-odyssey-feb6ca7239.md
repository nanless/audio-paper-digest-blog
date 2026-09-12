---
title: "I Hear, Therefore I Trust: A Socio-Technical Investigation of Humans as Synthetic Speech Detectors"
date: 2026-09-12
draft: false
description: "该研究用 20 条真、全合成与部分合成语音的 0.2 秒窗口定位任务检验 47 名母语听者，显示话语类型决定检出与质量评分而三种信任线索无主效应，全合成在多数投票下 0/5 正确且人群辨别力接近机遇。"
tags: ["众包评测", "言语感知", "语音", "音频深度伪造检测"]
categories: ["odyssey-2026 论文"]
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_paper_id: "conference:odyssey:2026:conference-paper-id:erscoi26_odyssey"
paper_digest_source_kind: conference
paper_digest_conference_id: "odyssey-2026"
paper_digest_conference_record_url: "https://www.isca-archive.org/odyssey_2026/erscoi26_odyssey.html"
paper_digest_conference_pdf_url: "https://www.isca-archive.org/odyssey_2026/erscoi26_odyssey.pdf"
paper_digest_api_reader_contract: "beginner-researcher-v3"
paper_digest_api_reader_article_sha256: "94f682749e379695b1aa7441248de14f427dbe1e469b6480041e09a36b67f452"
paper_digest_api_reader_plan_sha256: "7870b1e9d481fef2d9cf962d0363dfb31f18285a4986426886036c062c09aab7"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings-v4"
paper_digest_api_reader_source_bindings_sha256: "85c0c157d96b5deea4b3f25a5ed65f9547042560d673b5a8bf8c1436931686b7"
paper_digest_api_reader_source_table_count: 2
paper_digest_api_reader_source_formula_count: 0
paper_digest_api_reader_structured_artifacts_sha256: "31c263b3fbfa864b11acd45d4f522a4ae2da32d0f7d7613088b8e57ce964f48c"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity-v1"
paper_digest_api_reader_author_identity_sha256: "3ee41b927e443ca0255a120e7af9ccdf59501b91db665338a323971b1feeb4a5"
paper_digest_api_reader_author_count: 2
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity-v1"
paper_digest_api_reader_resource_identity_sha256: "64d891eb128834311b2bda740fb6458cc8538744d0fc2191d426c07ea258e2c9"
paper_digest_api_reader_resource_count: 7
paper_digest_api_reader_decision_projection: "api-reader-decision-projection-v2"
paper_digest_scoring_contract: "api-scoring-audit-v2"
paper_digest_taxonomy_contract: "paper-taxonomy-flat-tags-compat-v1"
paper_digest_taxonomy_selection_contract: "paper-taxonomy-selection-v1"
paper_digest_taxonomy_registry_version: "paper-taxonomy-v1"
paper_digest_taxonomy_registry_sha256: "15c82a567ce5a55dc1175684ed08b64c158558639d9c8fb822c9587ec32a8778"
paper_digest_taxonomy_concepts: [{"facet":"method","id":"method.crowdsourced-evaluation","label":"众包评测"},{"facet":"scientific_topic","id":"scientific_topic.speech-perception","label":"言语感知"},{"facet":"signal","id":"signal.speech","label":"语音"},{"facet":"task","id":"task.audio-deepfake","label":"音频深度伪造检测"}]
paper_digest_primary_task: "音频深度伪造检测"
paper_digest_primary_method: "众包评测"
paper_digest_score: 7.0
paper_digest_rank_bucket: "前50%"
paper_digest_document_type: "应用研究"
paper_digest_conference_structure: replayable-pdf-layout-v1
---

# 📄 听得出却标不对：当信任线索遇上部分合成语音的人耳定位实验

> 英文题目：*I Hear, Therefore I Trust: A Socio-Technical Investigation of Humans as Synthetic Speech Detectors*

> 会议身份：`conference:odyssey:2026:conference-paper-id:erscoi26_odyssey`


> ✅ 来源为官方会议 PDF；表格与 Figure 按原文证据绑定。PDF 公式以原页区域图片展示，未冒称作者原始 TeX。

> 会议来源：[官方记录](https://www.isca-archive.org/odyssey_2026/erscoi26_odyssey.html) · [官方 PDF](https://www.isca-archive.org/odyssey_2026/erscoi26_odyssey.pdf)

标签：#众包评测 #言语感知 #语音 #音频深度伪造检测

评分：**7.0/10** | 创新 1.2/2 | 技术严谨 1.0/1.5 | 实验充分 0.9/1.5 | 清晰度 0.8/1 | 影响力 0.9/1.5 | 开源 1.0/1.5 | 可复现 0.3/0.5 | 工程/实践 0.9/1.5

排名：前50% | 文档类型：应用研究

## 👥 作者与机构

- Lelia Erscoi：机构信息未能从会议 PDF 纯文本可靠映射
- Tomi Kinnunen：机构信息未能从会议 PDF 纯文本可靠映射

## 📌 核心摘要

该研究输入为真实、完全合成与部分合成英语语音叠加城市环境声与情感效价图片，输出为听众标记的可疑语音区间与机械感等六维感知质量评分，难点在于合成痕迹微弱且局部篡改缺乏可对照锚点，而日常信任线索会争夺注意并扭曲真实性判断。方法链分三步：首先从LlamaPartialSpoof抽取限定 utterances 并混入声景、匹配高唤醒图片以构造类社交媒体试次，其试次材料直接进入操纵环节；其次在被试间操纵指导框架与效价启动、在试次内随机操纵来源标签以形成信任条件，其分组标签随试次进入行为采集；最后要求47名美国英语母语者在Streamlit平台完整收听后做回顾式旗标或区间标注并完成量表评分，标注结果以0.2秒滑窗加正负200毫秒容差换算为窗口准确率并用被试随机截距线性混合模型检验。与孤立二分类听辨范式相比，该定位任务同时观测行为定位、主观质量与操作日志，因而能暴露完全合成被系统性漏检与低估的范围。在20试次多数投票评测任务下，真实语音试次的准确率为80%，高于全部20个试次总体的准确率60%。该结论适用边界受限于有预警的众包审核场景、美国英语母语者与有限合成器集合，尚未验证无预警野外遭遇与跨语言泛化。原文未披露训练、推理或部署成本。

## 🔗 开源与复现资源

- 模型相关资源：<https://github.com/espnet/espnet/tree/master/egs2/ljspeech/tts1> — 链接可访问（HTTP 200）
- 模型相关资源：<https://github.com/coquI−ai/TTS/> — 链接不可用（HTTP 404）
- 模型相关资源：<https://huggingface.co/coqui/XTTS-v2> — 暂时无法访问
- 模型相关资源：<https://huggingface.co/lj1995/GPT-SoVITS/tree/main> — 暂时无法访问
- 模型相关资源：<https://github.com/FunAudioLLM/CosyVoice> → <https://github.com/QwenAudio/CosyVoice> — 链接可访问（HTTP 200）
- 模型相关资源：<https://elevenlabs.io> — 链接可访问（HTTP 200）
- 第三方资源：<https://streamlit.io> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 输入是什么，输出是什么，为什么值得做定位而不是二分类？

这篇论文的输入是英语朗读语音片段，输出是听者对可疑合成片段的位置标注与整句质量评价。目标不是训练自动伪造检测器，而是测量人在带有社会线索的环境中实际能检出多少合成语音。作者把问题放在社会技术信任框架下，认为风险不仅在于合成技术有多像真人，更在于人们在日常信息流中如何接收声音并制造信任。

对刚入门的研究生，先要区分两种任务。常见的二分类只要求对整句回答真或假，操作简单但丢失位置信息。定位任务要求听者听完整句后，用点状旗标标出时间点，或用起止区间标出一段可疑范围，系统再把整句切成 0.2 秒窗口逐窗判定。这种设计更接近内容审核：审核员不仅要说这条有问题，还要指出哪里有问题。论文明确指出，此前没有研究在同一个生态效度较高的流程中同时操纵声学篡改类型、上下文信任环境与听者反应方式，因此现有基准可能系统性高估人的检出能力。

必须保留的关键信息是样本与结论的边界。实验只用了 20 条语音，按真实、全合成、部分合成约 1 比 1 比 2 抽样，最终 47 名美国本土英语母语者每人完成 20 轮共 940 人次试验。报告显示话语类型是正确率与质量评分的主要决定因素，信任线索没有主效应但改变了标注行为；全合成在试验级多数投票下从未被正确归类，而是被系统性低估为部分合成。学习时不要把自动检测基准的高准确率直接推广到人，也不要把质量评分高低等同于能正确标注。

### 自动检测很强，为何人耳检出仍接近机遇？

自动合成语音检测有成熟的评测路线，例如自动说话人验证伪造系列挑战，在受控条件下报告了很强的合成语音检出准确率。但论文引用的多项人类研究显示，不加注意的 naive 听者正确率徘徊在机遇水平附近，即使是注意集中的听者，在遇到部分篡改时正确率也会下降。更关键的是，听者依赖的线索可能是过时的，例如机器感韵律、异常停顿与呼吸，而现代合成系统已不再稳定地产生这些痕迹。

另一条相关路线是信任与人工智能。论文把环境上下文单独列为信任框架的一个维度，提出指令框架、情绪启动与来源标签 3 个可操纵的子来源。此前的标签研究多用中性警告或负向信号，本文特意使用肯定来源背书，动机是正向来源线索可能比单纯披露更能建立认知信任。相关工作还提醒，警告与披露标签处在同一个注意力经济中，简单加标签未必有效。

对初学者而言，对照点在于输入、目标、监督与运行阶段是否一致。自动检测的输入是波形或特征，目标是最小化等错误率，监督来自大量标注语音，运行阶段是离线批量评分。人类定位的输入是带图片、标签与任务故事的声音，目标是位置标注与质量判断，没有逐窗反馈学习，运行阶段是在线 1 次判定。因此不能把两类数字放在同一列比较胜负，只能说它们各有偏置，需要研究协作条件。

### 四个假设分别在问什么，什么算支持或不支持？

论文提出 4 个可检验的假设。第一，检出正确率随话语真实性变化；第二，主观评分随真实性变化；第三与第四分别问信任取向是否调节上述两种关系。换成操作语言，就是比较真实、部分合成、全合成 3 类语音的窗口正确率与量表得分，再看指令正负、效价正负、有无来源标签是否带来总体偏移。

判断标准在方法中是明确的。线性混合效应模型以被试为随机截距，报告系数、标准误与校正后显著性。若话语类型系数显著且呈现真实高于部分合成高于全合成的顺序，则支持前两个假设；若信任线索主效应不显著，则不支持后两个假设。论文报告的结果正是这种格局：话语类型效应强且有序，信任线索只出现在交互项中，没有可靠主效应。

举例说明交互与主效应的区别。假设来源标签总体上不提高正确率，但在某类语音或某类被试身上略有变化，这属于交互作用，不能说成标签有效。论文的表述是谨慎的：信任线索激发了检出行为，改变了时长与修订，但没有全局移动检出性能。初学者复述时要保留这种区分，避免把行为变化说成准确率提升。

### 一个样本如何走完听音、标注、评分与计分？

以一条部分合成样本为例，流程是先呈现本轮的情绪图片作为试验缩略图，再播放混入环境声的语音，听者可多次回放。听者听完全句后，用旗标或区间标出觉得 artificial 或 fabricated 的部分，回答 6 个质量陈述与信心陈述，最后保存。保存时刻存在的标记才算最终答案，中途添加又删除的操作只留在行为日志中用于计算修订率。

计分不看整句标签，而是看窗口重叠。每条语音被切成 0.2 秒滑动窗口，每个窗口有真实或合成的二值真值，也有听者是否放置标记的二值判定，由此得到真正例、真反例、假正例与假反例。正确率是判定与真值一致的窗口比例。对于只有一类窗口的话语，例如全真实或全合成，正确率退化为真反例率或真正例率，互补指标无定义。

下面这张图把上述映射画成了 3 条横带与四格判定表，是理解全文数字的基础，阅读时先看类型再看标记落点。

> **看图路径：** 1. 先看三条横带分别代表真实、全合成与部分合成的话语类型；2. 再看黑色旗标与区间标记如何落在蓝色真实与橙色伪造段上；3. 对照下表四格，确认标中伪造为真正例、漏标伪造为假反例；4. 注意窗口长度 0.2 秒与正负 200 毫秒容差的含义

[![原论文 Figure 1：How user markers translate to evaluation metrics.](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/odyssey-2026/a96ee16eee5c/figure-1.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/odyssey-2026/a96ee16eee5c/figure-1.png)

*论文图 1。原论文 Figure 1：“How user markers translate to evaluation metrics.”。*

图中蓝色代表真实段，橙色代表伪造段，黑色竖线与括号分别代表旗标与区间。上方 3 条分别对应真实、全合成与部分合成，下方四格说明标中真实为假正例、不标真实为真反例、标中伪造为真正例、漏标伪造为假反例。每个标记还带有正负 200 毫秒的时间容差，用于吸收反应延迟。后续所有正确率、真正例率与假正例率都是从这种逐窗比对聚合而来，因此漏标范围越大，正确率下降越多。

### 三类语音与三种信任线索各自负责什么？

3 类语音负责提供不同难度的声学证据。真实语音来自 LibriTTS 的朗读人声，全合成由 5 种开源模型加一种商业服务生成，名单包括 LJ JETS、YourTTS、XTTS V2、GPT-SoVITS、CosyVoice 与 ElevenLabs。部分合成用交叉淡化把真假片段拼在一起，模拟局部篡改攻击。抽样时平衡生成模型与文本句子，只保留 10 秒以上、部分合成最多 3 段合成区的语音，再以 25 分贝信噪比混入城市声景录音，以模拟真实收听条件。

3 种信任线索负责提供声学之外的环境信息。指令框架在会话开始时随机分配，正向组被告知评估造福用户的突破性通信技术，负向组被告知防范针对平台用户的恶意行为体，但两组任务指令完全相同且全程可见。效价启动在每轮试验前呈现同一效价组内的随机图片，图片来自开放情绪标准化图片集的高唤醒两端并经人工剔除露骨内容。来源标签在每轮以 50% 概率随机出现，文字肯定可验证来源，与音频真假无关。

**部分合成语音 × 定位任务：** 部分合成语音指在真实语音中拼接合成片段并做交叉淡化，真实段落会锚定整体判断；定位任务要求听者用旗标或区间标出可疑片段再按 0.2 秒窗口计分，二者搭配的理由是二分类只能给出整句真假，而定位能暴露漏标范围与低估程度，新增作用是把信任断裂的位置和程度变成可测量的窗口级真正例与假反例。

**指令框架 × 效价启动：** 指令框架通过把同一版主任务包装为评估新通信技术或防范恶意攻击来操纵自上而下的警觉与认知定势，效价启动通过每轮试验前呈现正性或负性高唤醒图片来操纵当下情绪状态，二者搭配的理由是分别覆盖认知期待通道与情绪状态通道，新增作用是检验环境信息是否在声学证据之外独立或交互地改变标注时长与修改意愿。

**来源标签 × 声学证据：** 来源标签指以 50% 概率随机出现的肯定性文字，声称音频来自可验证来源且与真假无关，声学证据指语音本身的韵律、音质与拼接痕迹，二者搭配的理由是现实中标签与声音同时到达听者，新增作用是检验明确的信任背书是否覆盖、干扰或不改变基于声音的真假判断。

**显式检出 × 隐式质量评价：** 显式检出指听者主动放置标记并经窗口比对得到的正确率，隐式质量评价指对机械感、表现力、可懂度、清晰度、平静感与评价信心的五点量表打分，二者搭配的理由是同一听者可能感到不对却不采取标注行动，新增作用是揭示能意识到的质量排序与不能落为行动的检出之间的分离。

质量评价把每条语音当作整体印象来打分，6 个陈述分别是声音机械、富有表现力、易于理解、录音干净、听起来平静与对评价有信心，采用从强烈反对到强烈同意的五点量表。题目顺序每轮随机，以避免自动作答。作者强调，机械感针对人工痕迹而非模糊的自然度，表现力针对情感变化与韵律丰富度，可懂度与清晰度分别针对理解 effort 与技术瑕疵，平静感针对感知到的唤醒与效价，信心则映射检出行为：不标即判真，因此高信心反映对未检出的确信而非弃权。

### 本研究训练了什么，没有训练什么，计算发生在哪里？

本研究没有训练任何神经网络声学模型，也没有更新合成或检测模型的参数，因此不存在梯度路径、优化器、冻结层或早停等训练要素。6 种合成语音来自已有开源模型与商业服务，研究者只做抽样、拼接、混噪与呈现，不做模型拟合。这一点必须明确，否则会误把听者行为数据当成模型训练损失。

真实的计算发生在 3 个地方。一是刺激构造：按比例抽样 20 条语音，控制时长与合成段数，混入环境声；图片按唤醒度前 20% 与效价两端筛选。二是行为采集：通过定制网页应用记录标记增删、题目作答与时间戳，应用基于 Streamlit 实现并模仿社交媒体外观，经可用性预试与众包试点后才正式部署。三是统计建模：用 Python 的 statsmodels 包以最大似然估计线性混合效应模型，被试随机截距吸收个体差异，窗口级标记经滑动窗口对齐后聚合为试验级多数投票与人群辨别力指标。

未报告的缺项也要指出。论文没有报告模型训练算力、推理延迟或部署成本，因为这些不是研究对象；也没有报告听者逐窗反馈学习曲线，因为任务中不提供正确答案反馈。复现时不应脑补某个合成模型的超参数，而应把重点放在抽样规则、窗口长度、容差、投票阈值与注意力检查的实现上。

### 被试、注意力检查与投票规则如何保证数据可用？

正式实验于 2025 年 12 月在线进行，152 人尝试，最终 50 份通过人工核验，再因缺失数据剔除 3 份，保留 47 人，每人 20 轮。纳入标准为 18 岁以上、听力正常或矫正正常、美国本土英语母语者，以减少非母语效应。作者说明选择众包平台是为了匹配语音数据集的语言背景，被试被告知任务涉及听音与真实性判断，无需专业技术背景。

注意力控制有两道。第一，要求听完全句再作答，合规阈值为 90% 轮次，以容忍偶发误触但 discouraging 多任务分心。第二，在随机三分之一轮次中插入情景核对题，提供两个真实情景、两个诱饵情景与未注意选项，由于情景文字全程可见，若错答超过 1 次则拒收。这种防御性设计是为了在众包框架下确保数据反映真实能力。

试验级多数投票规则是理解主结果的关键。设覆盖度为被试标记覆盖话语时长的比例，若为 0 判真实，若大于 0 且不超过 70% 判部分合成，若超过 70% 判全合成。该阈值把连续的标记行为离散为 3 类 verdict，后文全合成 0/5 正确正是在此规则下得到的。换句话说，即使听者标出了一部分合成区，只要覆盖不足整句 70%，系统仍只给出部分合成的 verdict，这直接导致对全合成范围的系统性低估。

### 正确率、行为与主观评分呈现什么顺序，信任线索改变了什么？

主结果按问题组织。测的是定位正确率与质量评分，对比的是 3 类话语与 3 种信任线索，条件通过随机分配与随机呈现保持一致，指标方向是正确率越高越好、机械感越低越好、其余质量越高越好。关键数字是试验级正确率为 60% 且平均信心为 71.5%，真实与部分合成在多数投票下各 80% 正确而全合成从未被正确归类。支持的判断是话语类型主导检出，限制是刺激仅 20 条且听者被明确要求怀疑，生态效度仍受限。

下表把试验级多数投票结果整理为可核对的三行，阅读问题是全合成是否被识别为全合成，公平条件是同一覆盖度阈值与同一组听者，指标方向是正确数越多越好。

| 话语类型 | 试验总数 | 多数投票正确数 | 正确比例 | 典型误判方向 |
| --- | --- | --- | --- | --- |
| 真实语音 | 5 | 4 | 80% | 少数被投为部分合成 |
| 部分合成语音 | 10 | 8 | 80% | 漏标合成区导致低估 |
| 全合成语音 | 5 | 0 | 0/5 正确 | 全部被低估为部分合成 |

表后解释需要同时给出收益与代价。真实语音的高正确率说明听者能较快确认真实内容，部分合成因有真实段作声学锚点而能激发怀疑，但全合成的失败是系统性的：听者并非完全无感，而是标出一部分却达不到全合成阈值。未胜出项正是全合成，它在窗口级真正例率仅约 8% 量级，假反例超过 90%。结合平均信心 71.5%，可以说过度自信与范围低估同时存在。

行为数据进一步显示信任线索的作用在操作层面而非准确率层面。下表把时长与修订率的变化整理为同一组比较，阅读问题是线索是否改变投入与犹豫，公平条件是组间语音集合相同，指标方向不预设好坏，只看行为位移与代价。

| 信任线索对比 | 试验时长变化 | 修订率变化 | 行为含义 | 准确率主效应 |
| --- | --- | --- | --- | --- |
| 正向指令相对负向指令 | +22 s | −9.6% | 花更久但更少修改 | 无可靠主效应 |
| 正性效价相对负性效价 | −33 s | −12.4% | 更快且更少修改 | 无可靠主效应 |
| 有来源标签相对无标签 | −32 s | +7.0% | 更快但更多修改 | 无可靠主效应 |

表后解释要指出具体代价。正向指令增加时长可能反映更仔细的评估，但修订减少意味着一旦落笔就不愿更改；正性情绪图片缩短时长并减少修订，可能反映放松下的低警觉；来源标签缩短时长却提高修订，说明肯定背书并未带来安心，反而引发犹豫与反复。3 个方向都不转化为正确率提升，因此不能把行为活跃等同于检出更好。

以下 3 组图分别对应行为、辨别力与主观评分，每组都按导读、看图、解释的闭环阅读。第一组看投入与犹豫是否随线索位移。

> **看图路径：** 1. 先看 A 面板横轴试验时长与纵轴操作数的散点及三条拟合线；2. 再看 B 面板六根堆叠柱中真实与合成部分各自贡献的秒数；3. 最后看 C 面板来源标签组修订率升高而另两组修订率下降的方向

[![原论文 Figure 2：Decision-making patterns across conditions.](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/odyssey-2026/a96ee16eee5c/figure-2.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/odyssey-2026/a96ee16eee5c/figure-2.png)

*论文图 2。原论文 Figure 2：“Decision-making patterns across conditions.”。*

该图 A 面板显示操作数与试验时长在 3 类语音中均正相关，全合成试验耗时与操作更多；B 面板用堆叠柱给出上述秒数变化，正向指令增加而另两组减少；C 面板给出修订率的反向变化，来源标签组升高而另两组降低。教学要点是把时长当作信息搜寻成本，把修订当作标注信心的行为代理，二者位移而正确率不动，正是环境线索只调行为不调绩效的证据。
第二组看人群辨别力与校准，直接回答人能否当守门人。

> **看图路径：** 1. 先看 A 面板真实与合成两条决策变量分布的重叠程度；2. 再看 B 面板观测正确率随自报信心上升而明显平坦的校准线；3. 最后看 C 面板三类话语被投票为真实、部分合成与全合成的比例

[![原论文 Figure 3：Crowd-level detection performance. (A) Raw discriminability.](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/odyssey-2026/a96ee16eee5c/figure-3.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/odyssey-2026/a96ee16eee5c/figure-3.png)

*论文图 3。原论文 Figure 3：“Crowd-level detection performance. (A) Raw discriminability.”。*

该图 A 面板两条决策变量分布几乎重叠，人群辨别力很低，等错误率约 41%；B 面板观测正确率随信心上升很快平坦，显示系统性过度自信；C 面板投票分布显示真实语音 70% 被投真实，部分合成 67% 被投部分合成，而全合成 69% 被投部分合成、仅约 2% 被投全合成。这与前表 0/5 正确一致，说明失败不是个别听者失误，而是群体层面的范围低估。
第 3 组看主观评分是否隐含区分能力。

> **看图路径：** 1. 先按颜色区分真实、部分合成与全合成三组横条；2. 再比较机械感一行的方向与其他质量行的方向是否相反；3. 注意信心一行三组均为满格而质量排序仍为真实居首

[![原论文 Figure 4：Percentage of positive ratings (”Agree”, ”Strongly Agree”).](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/odyssey-2026/a96ee16eee5c/figure-4.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/odyssey-2026/a96ee16eee5c/figure-4.png)

*论文图 4。原论文 Figure 4：“Percentage of positive ratings (”Agree”, ”Strongly Agree”).”。*

该图显示真实语音在质量总分、平静感、清晰度、可懂度与表现力上均为最高，部分合成居中，全合成最低；唯独机械感方向相反，全合成最高而真实最低。注意信心一行 3 组均为满格，说明自报信心没有区分度。教学要点是质量排序真实高于部分合成高于全合成，表明听者在评价通道中保留了隐式区分，但这种感觉没有转化为定位行动，这就是论文所说的内隐与外显分离。

### 去掉真实锚点会怎样，换一种聚合会改变结论吗？

论文没有做模型消融，但提供了两种天然对照。第一是话语类型对照：去掉真实锚点的全合成最难，部分保留真实锚点的部分合成相对可检，全部真实的语音最易确认。这种顺序支持锚定解释，即真实段落为怀疑提供参照，而全合成缺乏参照导致听者无从锚定。反证是若听者真能听出合成痕迹，全合成应最易标满全句，但事实相反，因此不能用痕迹响亮来解释。

第二是聚合方式对照。窗口级人群辨别力接近机遇，试验级多数投票为 12/20 正确，两种聚合都指向同一结论：个体噪声经平均后仍未挽救全合成。这说明失败不是投票阈值选择的人为假象，因为即使放宽全合成阈值，窗口级真正例率本身已很低。论文还报告个体差异大，意味着少数人可能较好，但群体分布不支持把希望寄托在挑选超级听者上。

信任线索的交互项可视为第 3 种对照。主效应缺席而交互存在，说明线索只在特定音频或被试特征组合下起作用。若把交互误读为主效应，就会得出加标签即安全的错误部署建议。复现时应保留原文的随机截距模型与校正显著性，不要只比较原始均值，因为个体基线差异会淹没线索效应。

### 哪些结论不能推广，缺了哪些验证？

首要限制是刺激规模与覆盖。20 条语音无法代表更广的合成系统、说话人与文本类型，6 种合成来源虽多样但仍是特定版本与特定说话人。混入声景与 10 秒以上时长是为生态效度，但也引入了听觉负荷，结论推广到短语音、电话信道或多说话人对话时需要重新验证。

其次是任务框架本身的矛盾。明确要求怀疑的版主角色可能 already 提高了警觉，从而 attenuate 信任线索效应；在完全自然的浏览中，人们不会被提醒可能有合成，行为与信任建立还会受周围环境、个人倾向与平台经验影响。论文明确建议未来采用不知情的野外设计，并从检测性能转向识别具体风险场景以支撑监管。

未测量的量也要如实说明。研究未测量误判带来的实际成本、响应延迟的经济价值或长期学习效应，也未比较人与自动系统的联合决策。因此不能承诺加标签、加图片或换措辞能改善这些量。相关性不是因果，行为位移不是准确率因果，质量评分排序也不是检出能力的因果。

### 要复现定位实验，先准备什么，按什么顺序核对？

先准备数据与模型可得性。按本次收到的资源状态，ESPnet 中 LJ JETS 示例当前可用，CosyVoice 仓库当前可用，ElevenLabs 网站当前可用；Coqui TTS 的 GitHub 链接当前不可用，XTTS-v2 与 GPT-SoVITS 的 Hugging Face 链接本次未能确认可达。复现不必重新训练合成模型，可直接使用已有语音或按论文比例抽样，但必须记录版本与说话人，因为合成质量随版本变化。实验应用基于 Streamlit 实现，当前可用，适合快速搭建标注界面。

再按顺序实现流程。第一步按 1 比 1 比 2 抽取真实、全合成与部分合成语音，限制时长与合成段数，以 25 分贝信噪比混入环境声。第二步准备高唤醒正负情绪图片各 20 张并人工核查。第三步实现旗标与区间两种标记、0.2 秒窗口与正负 200 毫秒容差、覆盖度 3 段投票规则。第四步实现两道注意力检查与全程可见的任务说明。第五步以被试随机截距拟合混合效应模型，分别检验话语类型与信任线索。

核对清单包括窗口长度、容差、覆盖度 70% 阈值、量表计分方向、随机化单元与剔除规则。特别注意机械感是反向指标，得分越高表示质量越差；信心满格不代表正确率高。建议先用小样本试点验证 48 分钟左右的时长与数据完整性，再扩大到目标样本量。

### 何时值得参考这项研究，还需补哪项验证？

当你的场景是人在信息流中偶遇语音而非在实验室中专注打假时，这项研究值得参考。它提醒设计者不要把自动检测的高准确率当成人也能做到，也不要把加一句可验证来源就能解决信任问题。部分合成因保留真实锚点而相对可疑，全合成因缺乏锚点而被系统性低估，这一不对称对审核界面有直接含义：需要帮助听者估计范围，而不仅是二选一。

还需补的验证是联合系统。在论文的结论中，出路不是单靠人或单靠机器，而是能处理不确定性的协作架构，例如给出可疑区间而非硬判决，并考虑过度自信与反应偏置。未来的实验应比较人机协作相对纯人与纯机器的增益，测量不同标签措辞、不同情绪负荷与不同信道下的稳定性，并报告时间成本与误判成本。只有补上这些，才能回答平台是否应把听者放在守门人位置，以及在什么条件下可以放置。

## 📐 原文公式与排版

以下展示论文原页中的数学表达区域，保留原始上下标、分式和符号排版。区域序号仅用于本文导航，不是论文公式编号。

[![原文数学表达区域 1，PDF 第 6 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/odyssey-2026/1eedf609a94a/figure-1.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/odyssey-2026/1eedf609a94a/figure-1.png)

区域 1 · [查看论文原页](https://www.isca-archive.org/odyssey_2026/erscoi26_odyssey.pdf#page=6)

[![原文数学表达区域 2，PDF 第 6 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/odyssey-2026/1eedf609a94a/figure-2.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/odyssey-2026/1eedf609a94a/figure-2.png)

区域 2 · [查看论文原页](https://www.isca-archive.org/odyssey_2026/erscoi26_odyssey.pdf#page=6)

[![原文数学表达区域 3，PDF 第 6 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/odyssey-2026/1eedf609a94a/figure-3.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/odyssey-2026/1eedf609a94a/figure-3.png)

区域 3 · [查看论文原页](https://www.isca-archive.org/odyssey_2026/erscoi26_odyssey.pdf#page=6)

[![原文数学表达区域 4，PDF 第 6 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/odyssey-2026/1eedf609a94a/figure-4.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/odyssey-2026/1eedf609a94a/figure-4.png)

区域 4 · [查看论文原页](https://www.isca-archive.org/odyssey_2026/erscoi26_odyssey.pdf#page=6)

[![原文数学表达区域 5，PDF 第 6 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/odyssey-2026/1eedf609a94a/figure-5.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/odyssey-2026/1eedf609a94a/figure-5.png)

区域 5 · [查看论文原页](https://www.isca-archive.org/odyssey_2026/erscoi26_odyssey.pdf#page=6)

[![原文数学表达区域 6，PDF 第 6 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/odyssey-2026/1eedf609a94a/figure-6.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/odyssey-2026/1eedf609a94a/figure-6.png)

区域 6 · [查看论文原页](https://www.isca-archive.org/odyssey_2026/erscoi26_odyssey.pdf#page=6)

[![原文数学表达区域 7，PDF 第 6 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/odyssey-2026/1eedf609a94a/figure-7.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/odyssey-2026/1eedf609a94a/figure-7.png)

区域 7 · [查看论文原页](https://www.isca-archive.org/odyssey_2026/erscoi26_odyssey.pdf#page=6)

[![原文数学表达区域 8，PDF 第 6 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/odyssey-2026/1eedf609a94a/figure-8.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/odyssey-2026/1eedf609a94a/figure-8.png)

区域 8 · [查看论文原页](https://www.isca-archive.org/odyssey_2026/erscoi26_odyssey.pdf#page=6)

[![原文数学表达区域 9，PDF 第 6 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/odyssey-2026/1eedf609a94a/figure-9.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/odyssey-2026/1eedf609a94a/figure-9.png)

区域 9 · [查看论文原页](https://www.isca-archive.org/odyssey_2026/erscoi26_odyssey.pdf#page=6)

[![原文数学表达区域 10，PDF 第 6 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/odyssey-2026/1eedf609a94a/figure-10.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/odyssey-2026/1eedf609a94a/figure-10.png)

区域 10 · [查看论文原页](https://www.isca-archive.org/odyssey_2026/erscoi26_odyssey.pdf#page=6)

[![原文数学表达区域 11，PDF 第 6 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/odyssey-2026/1eedf609a94a/figure-11.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/odyssey-2026/1eedf609a94a/figure-11.png)

区域 11 · [查看论文原页](https://www.isca-archive.org/odyssey_2026/erscoi26_odyssey.pdf#page=6)

[![原文数学表达区域 12，PDF 第 6 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/odyssey-2026/1eedf609a94a/figure-12.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/odyssey-2026/1eedf609a94a/figure-12.png)

区域 12 · [查看论文原页](https://www.isca-archive.org/odyssey_2026/erscoi26_odyssey.pdf#page=6)

[![原文数学表达区域 13，PDF 第 6 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/odyssey-2026/1eedf609a94a/figure-13.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/odyssey-2026/1eedf609a94a/figure-13.png)

区域 13 · [查看论文原页](https://www.isca-archive.org/odyssey_2026/erscoi26_odyssey.pdf#page=6)

另有 14 个候选区域因边界不明确或图片数量、尺寸限制未展开；请[查看完整论文](https://www.isca-archive.org/odyssey_2026/erscoi26_odyssey.pdf)中的原始排版。

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。
- 评分规则：type-aware-v1
- 评分模型：muse-spark-1.3-contributor
- 评分请求协议：openai_responses

---

[← 返回 odyssey-2026 论文汇总](/posts/conference-odyssey-2026/)
