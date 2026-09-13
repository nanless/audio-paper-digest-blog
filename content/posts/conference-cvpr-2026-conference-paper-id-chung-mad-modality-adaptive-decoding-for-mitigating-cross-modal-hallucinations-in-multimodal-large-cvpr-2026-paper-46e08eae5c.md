---
title: "MAD: Modality-Adaptive Decoding for Mitigating Cross-Modal Hallucinations in Multimodal Large Language Models"
date: 2026-09-13
draft: false
description: "针对音视频大模型中一个模态错误污染另一模态描述的跨模态幻觉，MAD 用免训练的两步流程先让模型自评问题需要音频、视频还是两者，再用权重调节四路对比解码，在 CMM 和 AVHBench 上提升 VideoLLaMA2-AV 与 Qwen2.5-Omni 的准确率，代价是每步需计算多组 logits 且依赖模型自身判断的可靠性。"
tags: ["对比学习", "测试时自适应", "多模态模型", "音视频", "音视频问答"]
categories: ["cvpr-2026 论文"]
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_paper_id: "conference:cvpr:2026:conference-paper-id:Chung_MAD_Modality-Adaptive_Decoding_for_Mitigating_Cross-Modal_Hallucinations_in_Multimodal_Large_CVPR_2026_paper"
paper_digest_source_kind: conference
paper_digest_conference_id: "cvpr-2026"
paper_digest_conference_record_url: "https://openaccess.thecvf.com/content/CVPR2026/html/Chung_MAD_Modality-Adaptive_Decoding_for_Mitigating_Cross-Modal_Hallucinations_in_Multimodal_Large_CVPR_2026_paper.html"
paper_digest_conference_pdf_url: "https://openaccess.thecvf.com/content/CVPR2026/papers/Chung_MAD_Modality-Adaptive_Decoding_for_Mitigating_Cross-Modal_Hallucinations_in_Multimodal_Large_CVPR_2026_paper.pdf"
paper_digest_api_reader_contract: "beginner-researcher-v3"
paper_digest_api_reader_article_sha256: "269e6a8c8afb3c16c844deba27dce5945f6577ba1eca7320e0c1bad2f4e7786a"
paper_digest_api_reader_plan_sha256: "b7b3ce795bfc91911b76ee8c641241b247e181a0013b77e6b35c6558d5e82c15"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings-v4"
paper_digest_api_reader_source_bindings_sha256: "a8326c35a5d13ed0975df12349c813139ff2567c110cf8fcdf5d3c9e47da3dba"
paper_digest_api_reader_source_table_count: 2
paper_digest_api_reader_source_formula_count: 0
paper_digest_api_reader_structured_artifacts_sha256: "4455e4569420a63722fbbe52af6ace66f1447ea0da808c53c9557b24031002c9"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity-v1"
paper_digest_api_reader_author_identity_sha256: "c62c8407e5f2eea34b3c04d210bee9e7f2bea8777899396e30d78ad0fad50b93"
paper_digest_api_reader_author_count: 4
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity-v1"
paper_digest_api_reader_resource_identity_sha256: "642b2c1d9171135fc46d17d74c481aaa6b06dac0fa3fbf7f1a6e313dc8baee0c"
paper_digest_api_reader_resource_count: 1
paper_digest_api_reader_decision_projection: "api-reader-decision-projection-v2"
paper_digest_scoring_contract: "api-scoring-audit-v2"
paper_digest_taxonomy_contract: "paper-taxonomy-flat-tags-compat-v1"
paper_digest_taxonomy_selection_contract: "paper-taxonomy-selection-v1"
paper_digest_taxonomy_registry_version: "paper-taxonomy-v1"
paper_digest_taxonomy_registry_sha256: "15c82a567ce5a55dc1175684ed08b64c158558639d9c8fb822c9587ec32a8778"
paper_digest_taxonomy_concepts: [{"facet":"method","id":"method.contrastive","label":"对比学习"},{"facet":"method","id":"method.test-time-adaptation","label":"测试时自适应"},{"facet":"model_family","id":"model_family.multimodal","label":"多模态模型"},{"facet":"signal","id":"signal.audiovisual","label":"音视频"},{"facet":"task","id":"task.av-question-answering","label":"音视频问答"}]
paper_digest_primary_task: "音视频问答"
paper_digest_primary_method: "测试时自适应"
paper_digest_score: 7.7
paper_digest_rank_bucket: "前25%"
paper_digest_document_type: "方法研究"
paper_digest_conference_structure: replayable-pdf-layout-v1
---

# 📄 先问该听谁再解码：用自评估权重压住跨模态幻觉的 MAD

> 英文题目：*MAD: Modality-Adaptive Decoding for Mitigating Cross-Modal Hallucinations in Multimodal Large Language Models*

> 会议身份：`conference:cvpr:2026:conference-paper-id:Chung_MAD_Modality-Adaptive_Decoding_for_Mitigating_Cross-Modal_Hallucinations_in_Multimodal_Large_CVPR_2026_paper`


> ✅ 来源为官方会议 PDF；表格与 Figure 按原文证据绑定。PDF 公式以原页区域图片展示，未冒称作者原始 TeX。

> 会议来源：[官方记录](https://openaccess.thecvf.com/content/CVPR2026/html/Chung_MAD_Modality-Adaptive_Decoding_for_Mitigating_Cross-Modal_Hallucinations_in_Multimodal_Large_CVPR_2026_paper.html) · [官方 PDF](https://openaccess.thecvf.com/content/CVPR2026/papers/Chung_MAD_Modality-Adaptive_Decoding_for_Mitigating_Cross-Modal_Hallucinations_in_Multimodal_Large_CVPR_2026_paper.pdf)

标签：#对比学习 #测试时自适应 #多模态模型 #音视频 #音视频问答

评分：**7.7/10** | 创新 1.4/2 | 技术严谨 1.1/1.5 | 实验充分 1.1/1.5 | 清晰度 0.6/1 | 影响力 1.0/1.5 | 开源 1.2/1.5 | 可复现 0.3/0.5 | 工程/实践 1.0/1.5

排名：前25% | 文档类型：方法研究

## 👥 作者与机构

- Sangyun Chung：机构信息未能从会议 PDF 纯文本可靠映射
- Se Yeon Kim：机构信息未能从会议 PDF 纯文本可靠映射
- Youngchae Chee：机构信息未能从会议 PDF 纯文本可靠映射
- Yong Man Ro：机构信息未能从会议 PDF 纯文本可靠映射

## 📌 核心摘要

跨模态幻觉指音视频大语言模型以一模态证据捏造另一模态内容，输入为视频序列X_v、音频波形X_a与文本问题X_q，输出为自回归词元序列，难点在于按问题动态隔离无关模态干扰而非仅增强单模态表征。MAD先用固定模态查询提示让底层模型自评需要视频、音频还是两者，取出video、audio、both对应下一词元原始Logit经Softmax得到权重[w_av,w_v,w_a]，该权重直接决定后续对比强度的分配。接着并行计算完整输入与视频缺失、音频缺失、双缺失四种配置下的下一词元Logit，为每种模态缺失情形提供对照信号。最后按权重与共享系数gamma加权融合对比信号生成词元，只压制无关模态而保留相关模态信息。相对VCD-Extended与AVCD的均匀固定对比强度，MAD把对比强度重参数化为gamma与任务相关权重的乘积，实现问题相关的自适应抑制，具有更精细的模态交互控制意义。在CMM基准下，Qwen2.5-Omni-7B结合MAD的准确率为81.4%，高于结合AVCD的准确率73.3%。该结论适用边界受限于两个幻觉诊断基准与两款音视频模型，在开放域长视频与三模态以上场景尚未验证，原文未披露训练、推理或部署成本。

## 🔗 开源与复现资源

- 代码相关资源：<https://github.com/top-yun/MAD> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 输入是什么，模型要输出什么？

这篇论文研究的是音视频大语言模型，简称音视频大模型。输入有三部分：一段视频序列、一轨音频波形、一个文字问题。视频经过视觉编码器变成视频词元，音频经过音频编码器变成音频词元，问题经过分词器变成文字词元，3 组词元拼进同一个大语言模型做自回归生成。目标是让回答同时忠于看到的和听到的。例如问题是请详细描述视频和声音，模型既要说出人物、船、桌上物品等视觉事实，也要如实说明声音是否存在，不能因为看到船就编出鱼跃水声。

必须保留的信息是每个词元来自哪个模态、问题要求回答哪个模态、以及最终每个候选词在不同模态组合下的得分差异。输出是逐词生成的文字序列，解码时每一步都要在词表上选分最高的词。研究生复述时要抓住这条主线：多模态词元进入共享模型，解码策略决定幻觉是否被放大。论文没有训练新模型，没有更新编码器与语言模型参数，全部工作发生在推理阶段的解码规则上。理解这一点，后面两步流程才不会被误读成微调。

对于刚入门的同学，白话解释两个关键词。模态就是信息通道，这里指视频、音频、文字问题。幻觉就是生成内容与输入证据不符。对比如鱼 finder 教学、鱼跃水声这类原文例子，属于教学例子，用来说明串扰方向，不代表所有视频都会如此。后续章节按学习依赖展开：先界定跨模态幻觉与已有去幻觉路线，再走通 MAD 全景与两步计算，然后讲清实验条件、主结果、消融与边界，最后给出复现清单。

### 已有路线在修什么，为什么还压不住串扰？

相关工作可按同输入、同目标、同运行阶段对照。第一类是音视频大模型本身，例如 Video-LLaMA 把视觉与听觉信号联合建模，Qwen2.5-Omni 同时感知文本、图像、音频与视频并生成文本与语音回应，它们的目标是更丰富的 grounding，不是直接治幻觉。第二类是表示层去偏与结构增强，需要训练或改架构，与本文免训练推理路线运行阶段不同。第 3 类是免训练的对比解码，这是本文直接继承的路线。视觉对比解码的做法是把原图与加噪、掩膜后的退化图各跑 1 次，用两者的得分差压住不依赖视觉的词。

CODE 用自生成的图像描述做对照，指令对比解码用正常指令与扰动指令做对照，DoLa 对比深层与浅层 logits。这些方法默认幻觉主要来自视觉损坏。

最近的音视频对比解码把上述思想扩到三元输入，用注意力找非主导模态并扰动它。但论文指出它仍是模态无感知的：对所有模态施加统一扰动，不问当前问题到底需要听还是需要看。举例说，问听到什么声音时，应该对音频分支施加强对比、对视觉分支放松；问车是什么颜色时则相反。统一强度做不到这种切换，也就无法动态阻断无关模态的串扰。

这正是 MAD 要补的位置：显式判断任务的模态需求，再分配对比强度。复述时不要把类别差异当同条件胜负：VCD 类方法原本为单视觉场景设计，AVCD 已扩到音视频但无任务自适应，MAD 的增量是任务感知的权重分配。

### 跨模态幻觉错在哪里？

论文把问题定义为模态间控制失效，而不只是某一模态表示不够好。具体有 3 个子要求：给每个模态分配合适权重，压住误导性模态，保留模态边界。失败有双向。视频驱动的音频幻觉是视觉过强导致编造声音；音频驱动的视觉幻觉是听觉信号导致编造画面。图 1 的例子很典型：输入是男子站在船前，问题要求同时描述视频与声音，基线模型先编造演示探鱼器、讲钓鱼技巧等视觉细节，又因为视觉影响编造出男子说话声和鱼跃水声，而这些声音在输入中并不存在。

下面这张图把上述双重错误并置，值得逐行核对输入、基线输出与 MAD 输出的差异，是理解任务的第一手材料。

> **看图路径：** 1. 先看顶部输入区左侧视频人物与右侧声波加问题的构成；2. 再对比中间灰底 Base 段中蓝色视觉编造与红色音频编造的位置；3. 最后看底部绿底 MAD 段如何只保留船、蓝衣、桌上工具箱等可见内容

[![原论文 Figure 1：Cross-modal hallucinations and their mitigation through Modality-Adaptive Decoding (MAD).](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/57d05da0e584/figure-1.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/57d05da0e584/figure-1.png)

*论文图 1。原论文 Figure 1：“Cross-modal hallucinations and their mitigation through Modality-Adaptive Decoding (MAD).”。*

上图上半是输入区：左侧为穿蓝衣男子站在红白船前的视频帧，右侧为声波示意与英文问题。下半分两条：灰底基线条用蓝色标出鱼竿种类、探鱼器等视觉编造，用红色标出人声与鱼跃水声等音频编造；绿底 MAD 条只保留船的颜色、蓝衣、对镜头说话、桌上工具箱、船边冷藏箱等可 grounding 的描述，不再编造钓鱼教学与水声。这个对照说明任务目标不是把描述写长，而是把每个模态的陈述都锚定到该模态的证据上。论文用 CMM 考察对单模态先验的过依赖，用 AVHBench 考察音视频双向幻觉，二者共同支撑跨模态这一判断。

**跨模态幻觉 × 单模态幻觉：** 单模态幻觉指在一个模态内部编造与输入不符的内容，分工是描述表示不足；跨模态幻觉指一个模态的线索不恰当地污染另一模态的生成，分工是揭示模态间控制失效，两者搭配的理由是只修单模态无法阻止串扰，组合意义在于 MAD 必须先判断哪个模态可信再做对比抑制，而不是只增强某一模态的表示。

### MAD 分哪两步走完一个样本？

MAD 全景分两步。第一步是模态自适应权重提取：把视频、音频、问题与一个固定模态查询提示拼在一起问模型，本题回答需要音频、视频还是两者，取出模型对 video、audio、both 3 个词的 logits，再做 softmax 得到 wav、wv、wa。第二步是模态自适应生成：在每个生成位置计算 4 组 logits，分别对应音视频全在、缺音频、缺视频、两者皆缺的配置，再用第一步的权重按公式加权融合，得到最终的 MAD logits 并取最大词。这样做的好处是问题一变，权重就变，对比的发力点跟着变。

先沿一个样本走完全程有助于建立因果链。输入为锤子视频加问题音频中是否听到锤击声。第一步模型自评更需要音频，wa 变大。第二步 4 路打分中，纯音频路对 No 给高分，含视频路受锤子画面干扰倾向 Yes，加权后 No 被放大，最终输出 No，与真值一致，而基线输出 Yes。这条链路说明权重不是事后解释，而是直接参与每一步的词选择。

下图是论文给出的流水线，左侧为输入，中间为冻结的音视频大模型，上半为权重提取，下半为 4 路生成与融合，右侧为原始预测、MAD 预测与真值的对照。

> **看图路径：** 1. 先沿红色 Step1 箭头看模态查询提示如何进入模型并经 softmax 得到三个权重；2. 再沿蓝色 Step2 箭头看四组 logits 如何汇入 Eq.(9) 得到自适应回答；3. 对比右侧 Original Prediction 为 Yes 而 MAD Prediction 与真值为 No 的差异

[![原论文 Figure 2：Overall MAD pipeline. Given audio-visual inputs and a question, MAD extracts modality-adaptive…](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/57d05da0e584/figure-2.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/57d05da0e584/figure-2.png)

*论文图 2。原论文 Figure 2：“Overall MAD pipeline. Given audio-visual inputs and a question, MAD extracts modality-adaptive weights by querying the model to identify relevant modalities [Step 1].”。*

上图红色为第一步流：模态查询提示与多模态输入相加进入模型，得到 both、video、audio 三柱 logits，经 softmax 得到权重。蓝色为第二步流：问题与不同模态组合进入同一模型，得到音视频 logits、视频独有 logits、音频独有 logits、纯问题 logits 4 组 Yes 与 No 条形，再经 Eq.(9) 融合为自适应回答。图中音频独有路对 No 的条明显更长，融合后 No 胜出。注意雪花图标表示模型参数冻结，MAD 不训练新参数，只改变推理时如何组合已有模型的输出。

**对比解码 × 模态自评估：** 对比解码的分工是用干净输入与退化输入的 logit 差压住依赖语言先验的词，模态自评估的分工是向模型追问本题需要音频、视频还是两者并给出概率，两者搭配的理由是固定对比强度不知道该压哪一路，组合意义是把自评估权重乘到每路对比强度上，实现按题分配的压制。

### 权重从哪里来，四路分数如何加权？

组件一是权重提取。原文做法是在原输入后追加固定英文查询，含义是为回答该问题需要哪个模态。模型自回归预测下一个词，作者只取 video、audio、both 3 个词对应的 logits，记为 zv、za、zav，再做 softmax 得到归一化权重。这个设计依赖模型自身的模态相关性判断能力，不引入额外监督与额外训练。白话说，就是让模型先表态，再按它的表态分配注意力。论文用 VideoMME 抽 100 段视频构造 300 个问题验证：视觉问题得到主导的 wv，音频问题得到主导的 wa，音视频联合问题得到主导的 wav 且 wv 与 wa 较均衡，说明权重与直觉的模态需求对齐。

组件二是加权对比解码。传统对比解码对退化分支用固定系数，MAD 把它拆成与任务相关的形式：每路对比强度等于共享基线强度 γ 乘以对应权重 w。γ 在所有模态间共享，保证强度差异只来自任务权重。w 大则该路差分被放大，w 小则放松惩罚。最终生成把 4 路按 Eq.(9) 组织：联合对比、视频在音频缺席下的对比、音频在视频缺席下的对比，每项都带上各自的 γ 与 w。这样无关模态的干扰被压住，相关模态的证据被保留。
下图直接展示权重分布，是核对自评估是否可信的关键证据。

> **看图路径：** 1. 先看纵轴三类问题与横向堆叠条的总长为 1 的构成；2. 再读出视觉相关条中 0.565 视觉权重占主导的具体数值；3. 对比音频相关条中 0.482 与音视频相关条中 0.464 的峰值转移

[![原论文 Figure 3：Distribution of extracted modality weights (wv, wa, wav) across question types on video.](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/57d05da0e584/figure-3.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/57d05da0e584/figure-3.png)

*论文图 3。原论文 Figure 3：“Distribution of extracted modality weights (wv, wa, wav) across question types on video.”。*

上图为 3 条横向堆叠条，每条总和为 1。视觉相关行视觉权重为 0.565，音频权重仅 0.106，联合权重 0.328；音频相关行音频权重升至 0.482，视觉权重降至 0.237；音视频相关行联合权重最高为 0.464，视觉 0.297 与音频 0.237 相对均衡。这种随问题类型移动的峰值说明查询确实抽出了任务相关的模态偏好，而不是输出常数。

复述公式时先说符号：Xv、Xa、Xq 为视频、音频、问题词元，波浪线表示该模态被扰动或去掉，logit 为模型原始输出，Δ 为干净与退化之差，γ 为基线强度，w 为任务权重。计算目标是让最终词更依赖相关模态的 Δ。

**模态自适应权重 × 对比强度：** 模态自适应权重的分工是给出 wav、wv、wa 3 个归一化概率，表征任务对联合分支、视频分支、音频分支的需求，对比强度的分工是决定每路 logit 差分被放大多少，两者搭配的理由是统一基线强度 γ 保证差异只来自任务需求，组合意义是相关模态获得大系数、不相关模态获得小系数，从而保留有用证据并放松无谓惩罚。

### 没有训练时，真实计算发生在哪里？

本研究没有训练阶段，没有更新任何音视频大模型参数，没有新增可学习模块，也没有标注或梯度回传。论文明确称方法为免训练，流程图中模型带雪花标记即冻结含义。真实计算全部在推理时展开，可分为两类。第一类是 1 次性的权重提取前向：对每个问题做 1 次带模态查询的推理，取 3 个词的 logits 并做 softmax，得到 3 个标量权重。第二类是逐词的 4 路前向：在每个解码位置 t，分别用全模态、缺视频、缺音频、双缺 4 种词元组合跑模型，得到 4 组词表 logits，再按加权公式融合并取 argmax。这个过程不做束搜索调参以外的学习，不重置任何状态，每步的已生成前缀 y 小于 t 作为条件持续追加，直到出现结束符。

需要指出的缺项是原文未报告扰动的具体实现细节，例如视频与音频退化是用噪声、掩膜还是直接删除词元，只在符号上记为波浪线；也未报告 4 路前向带来的延迟与显存增量，以及权重提取是否对长视频重复计算。不能从冻结参数推定输出确定，因为生成仍受温度、采样与实现影响，论文实验把温度设为 0 以保证确定性解码。复述时不要把免训练说成求解最优，只能说它是在不改变参数的前提下改变每步的打分组合。

### 在什么数据、模型和基线上测？

评估围绕跨模态幻觉组织。CMM 考察模型对语言、视觉、音频先验的过依赖，分为视觉主导、音频主导、语言主导 3 类，指标为准确率，越高越好。AVHBench 考察音视频幻觉，分为视频驱动的音频幻觉与音频驱动的视频幻觉两类，同样用准确率。论文还用 OmniBench、WorldSense、MUSIC-AVQA 等通用音视频问答做辅助检查，以确认去幻觉没有损害常规问答。基线包括原始解码、VCD 扩展版与 AVCD。

VCD 扩展版把视觉对比思想用于多模态，对所有模态失真做对照；AVCD 扩到音视频但施加统一失真而不做问题自适应。比较的公平条件是同一基座模型、同一温度 0、同一计算环境与随机种子，对比强度 γ 在每数据集抽 100 例、从 0.5 到 3.0 以 0.5 步长搜索后统一取 2.5。

基座模型为 VideoLLaMA2-AV 与 Qwen2.5-Omni-7B，代表不同的音视频架构路线。代码状态方面，正文给出仓库链接，资源状态显示可用，当前可用与已公开可写，但本解读不复述链接可达性之外的安装细节。复现时先固定温度 0 与 γ 为 2.5，再实现 4 路 logits 获取与权重提取查询，注意英文查询词必须与取 logits 的 video、audio、both 3 个词严格对应，否则权重会错位。

### 主结果在哪些指标上变好，代价是什么？

要回答的核心问题是自适应加权是否同时压住双向串扰，且优于统一扰动的基线。公平条件是同基座、同温度、同 γ 选择流程，指标方向均为准确率越高越好。下表把论文正文连续句子中直接报告的提升与总体准确率整理成可核对的形式，保留原文的百分点写法与模型名，不引入表格矩阵外的推算差值。

| 模型与任务 | 视觉主导变化 | 音频主导变化 | 语言主导/幻觉方向变化 | 总体或对应准确率 |
| --- | --- | --- | --- | --- |
| VideoLLaMA2-AV 在 CMM | 提升 9.3% | 未在该句报告 | 语言主导提升 5.5% | 总体准确率 81.3% |
| Qwen2.5-Omni-7B 在 CMM | 提升 12.3% | 提升 12.0% | 未在该句报告 | 总体准确率 81.4% |
| Qwen2.5-Omni-7B 在 AVHBench | 未在该句报告 | 视频驱动音频幻觉提升 5.7% | 音频驱动视频幻觉提升 3.7% | 对应准确率见原文主表 |

上表后需要解释收益与代价。正文报告显示 MAD 在两个基座与两个基准上一致优于原始解码、VCD 扩展与 AVCD，CMM 总体准确率分别达到 81.3% 与 81.4%，AVHBench 双向幻觉均有百分点提升，支持显式模态感知有助于稳健多模态推理的判断。主要收益来自按题分配：视觉主导与音频主导的大幅提升说明模型不再被单模态先验绑架。代价有二：一是每步要算 4 组 logits 加 1 次权重提取前向，推理开销必然高于单路解码，原文未量化延迟；二是权重来自模型自身判断，若基座自评估不准，加权也会跟错。

未胜出项方面，VCD 扩展在 VideoLLaMA2-AV 的 AVHBench 总体上从 77.4% 掉到 70.4%，说明统一扰动在某些条件下反而有害，这反衬自适应的必要性，但也不能把该负结果推广为 VCD 在所有场景失效。

**视频驱动的音频幻觉 × 音频驱动的视频幻觉：** 视频驱动的音频幻觉分工是强视觉线索诱使模型编造不存在的声音，音频驱动的视频幻觉分工是声音诱使模型编造不存在的画面，两者搭配的理由是二者方向相反但根因相同，都是主导模态越界，组合意义是评估必须双向测量，MAD 也必须同时保留 wa 与 wv 两路调节，缺一就会在一侧失效。

### 拿掉一路权重会发生什么？

消融要回答权重是缺一不可还是只有一路起作用。论文固定 VideoLLaMA2-AV 为基座，分别去掉 wa、wv 或 wav，并比较均匀加权与只取最大权重分支两种简化。均匀加权给 3 路相同权重，忽略任务需求；取大权重分支只保留概率最大的一路，关闭其余，丢失互补线索。下表只收录正文连续句子中明确给出的准确率与降幅，不抄录矩阵中无句支撑的细分格。

| 消融条件 | 总体准确率 | 视觉主导变化 | 音频主导变化 | 联合权重状态 |
| --- | --- | --- | --- | --- |
| 去掉音频权重 wa | 78.0% | 下降 6.5% | 未在该句报告 | wav 与 wv 保留 |
| 保留三权重 wa 加 wv 加 wav | 81.3% | 最高 | 最高 | 3 路全保留 |
| 均匀或取大分支 | 低于加权 | 未在该句报告 | 未在该句报告 | 简化融合 |

上表后解释机制。去掉 wa 后总体掉到 78.0% 且视觉主导下降 6.5%，论文解释为模型抓不住音频线索，转而依赖视觉并编造声音，恰与图 2 锤子例子对称。去掉 wv 后总体为 78.3% 且音频主导下降 3.0%，说明过重音频而缺视觉证据时压不住音频驱动的干扰。只用 wa 加 wv 仍有缺口，联合权重 wav 提供 2 模态耦合，适合需要联合推理的题，三者齐全时达到 81.3%。均匀与取大分支均劣于软加权，支持既要区分任务又要保留互补信息的判断。限制是消融只在 VideoLLaMA2-AV 与 CMM 上展开，未在 Qwen 与 AVHBench 上逐项重复，不能断言每组都成立。

**一致解码 × 取大权重分支：** 一致解码的分工是对所有分支施加相同权重，取大权重分支的分工是只保留概率最大的一路而关闭其余，两者搭配比较的理由是它们分别代表不区分任务与过度截断两种简化，组合意义在于与 MAD 的软加权对照，说明既要区分任务又要保留互补线索，软融合才取得最高总体准确率。

### 哪些边界还没有被测到？

论文直接承认权重提取依赖底层大模型自身，未来希望学一个轻量参数高效预测器来更快更准地估计权重。这意味着当前方法的可靠性上限就是基座自评估的可靠性，若模型对模态需求判断错误，加权对比也会错配。模态范围目前只验证音频与视频，热成像加可见光等多传感器组合尚未验证，不能把结论推广到任意模态。

通用问答上 MAD 持平或略升，论文将其归因于压住了隐性幻觉，但这属于有限解释而非因果证明，因为通用基准并非为幻觉设计，提升也可能来自其他因素。未测量的量包括误判率分解、延迟、显存、输出帧率与实际成本，原文只定温度 0 与 γ 为 2.5，未给硬件预算与统计显著性，不能承诺这些量得到改善。相关性不等于因果：权重分布与问题类型对齐支持自评估有效，但不证明权重是唯一原因，还需对照随机权重与反转权重的失败条件，而原文未报告这类反证。

复述时对直接报告用报告显示，对机制解释用支持，对推广用可能待验证。

### 要复现，先固定哪几件事？

复现先做四件事。第一，准备基座与数据：用 VideoLLaMA2-AV 或 Qwen2.5-Omni-7B 的可用权重，下载 CMM 与 AVHBench 的评测划分，保持原文的问题与指标定义，准确率越高越好，百分点与相对百分比不要混用。第二，固定解码条件：温度 0，γ 取 2.5，若要严谨应先在各数据集抽 100 例复做 0.5 到 3.0 的搜索，确认 2.5 仍最优。第三，实现权重提取：拼接视频词元、音频词元、问题词元与固定英文模态查询，取 video、audio、both 三词 logits 做 softmax，注意大小写与分词必须与模型词表一致。

第四，实现 4 路生成：每步分别送入全模态、缺视频、缺音频、双缺 4 种组合，取 4 组 logits 按加权公式融合后取最大词，直至结束符。核对时先复现权重分布图的 3 组数值，再复现 CMM 总体 81.3% 与 81.4% 附近的结果，允许小数与环境差异，但方向应一致。代码仓库状态为可用，可对照实现 4 路与融合逻辑；若权重下载或环境缺失，应明确记录为本次未验证，不编造划分或聚合口径。

常见误解是把双缺路当成纯语言先验的精确估计，实际上它只是退化对照，其质量取决于扰动实现，原文未细化该实现，复现时应如实标注这一缺项。

### 何时值得尝试，还需补哪项验证？

当任务中音频与视频经常互相干扰，且问题有时要听、有时要看、有时要联合判断时，MAD 值得尝试。它的适用条件很具体：基座模型能对模态需求做出合理自评，推理预算容许多路前向，且评测指标是准确率而非延迟。操作上先在小样本上验证权重分布是否随问题类型移动，再看 CMM 3 类主导与 AVHBench 双向幻觉是否同步改善，最后检查通用问答是否持平或略升。若权重不移动或双向只好一侧，应怀疑查询措辞、分词对应或 γ 选择，而不是否定整个思路。

还需补的验证包括随机权重与反转权重的对照、延迟与显存测量、不同 γ 与温度下的稳定性、以及在更多基座与多传感器模态上的重复。总体判断是论文报告显示任务感知的软加权优于统一扰动，但这仍是有限证据下的支持，推广到实时系统前必须补齐成本与边界测量。

## 📐 原文公式与排版

以下展示论文原页中的数学表达区域，保留原始上下标、分式和符号排版。区域序号仅用于本文导航，不是论文公式编号。

[![原文数学表达区域 1，PDF 第 3 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/d430540675f6/figure-1.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/d430540675f6/figure-1.png)

区域 1 · [查看论文原页](https://openaccess.thecvf.com/content/CVPR2026/papers/Chung_MAD_Modality-Adaptive_Decoding_for_Mitigating_Cross-Modal_Hallucinations_in_Multimodal_Large_CVPR_2026_paper.pdf#page=3)

[![原文数学表达区域 2，PDF 第 3 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/d430540675f6/figure-2.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/d430540675f6/figure-2.png)

区域 2 · [查看论文原页](https://openaccess.thecvf.com/content/CVPR2026/papers/Chung_MAD_Modality-Adaptive_Decoding_for_Mitigating_Cross-Modal_Hallucinations_in_Multimodal_Large_CVPR_2026_paper.pdf#page=3)

[![原文数学表达区域 3，PDF 第 4 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/d430540675f6/figure-3.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/d430540675f6/figure-3.png)

区域 3 · [查看论文原页](https://openaccess.thecvf.com/content/CVPR2026/papers/Chung_MAD_Modality-Adaptive_Decoding_for_Mitigating_Cross-Modal_Hallucinations_in_Multimodal_Large_CVPR_2026_paper.pdf#page=4)

[![原文数学表达区域 4，PDF 第 5 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/d430540675f6/figure-4.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/d430540675f6/figure-4.png)

区域 4 · [查看论文原页](https://openaccess.thecvf.com/content/CVPR2026/papers/Chung_MAD_Modality-Adaptive_Decoding_for_Mitigating_Cross-Modal_Hallucinations_in_Multimodal_Large_CVPR_2026_paper.pdf#page=5)

[![原文数学表达区域 5，PDF 第 5 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/d430540675f6/figure-5.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/d430540675f6/figure-5.png)

区域 5 · [查看论文原页](https://openaccess.thecvf.com/content/CVPR2026/papers/Chung_MAD_Modality-Adaptive_Decoding_for_Mitigating_Cross-Modal_Hallucinations_in_Multimodal_Large_CVPR_2026_paper.pdf#page=5)

[![原文数学表达区域 6，PDF 第 5 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/d430540675f6/figure-6.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/d430540675f6/figure-6.png)

区域 6 · [查看论文原页](https://openaccess.thecvf.com/content/CVPR2026/papers/Chung_MAD_Modality-Adaptive_Decoding_for_Mitigating_Cross-Modal_Hallucinations_in_Multimodal_Large_CVPR_2026_paper.pdf#page=5)

[![原文数学表达区域 7，PDF 第 6 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/d430540675f6/figure-7.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/d430540675f6/figure-7.png)

区域 7 · [查看论文原页](https://openaccess.thecvf.com/content/CVPR2026/papers/Chung_MAD_Modality-Adaptive_Decoding_for_Mitigating_Cross-Modal_Hallucinations_in_Multimodal_Large_CVPR_2026_paper.pdf#page=6)

另有 9 个候选区域因边界不明确或图片数量、尺寸限制未展开；请[查看完整论文](https://openaccess.thecvf.com/content/CVPR2026/papers/Chung_MAD_Modality-Adaptive_Decoding_for_Mitigating_Cross-Modal_Hallucinations_in_Multimodal_Large_CVPR_2026_paper.pdf)中的原始排版。

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。
- 评分规则：type-aware-v1
- 评分模型：muse-spark-1.3-contributor
- 评分请求协议：openai_responses

---

[← 返回 cvpr-2026 论文汇总](/posts/conference-cvpr-2026/)
