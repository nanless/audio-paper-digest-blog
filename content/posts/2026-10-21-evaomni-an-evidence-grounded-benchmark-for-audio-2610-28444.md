---
title: "EvaOmni: An Evidence-Grounded Benchmark for Audio-Visual Reasoning"
date: 2026-10-21
draft: false
tags: [音视频问答, 基准设计, 基准测试, 音视频]
categories: [论文速递]
description: "EvaOmni 针对只看答案无法判断是否真用了音视频证据的问题，构建 392 个视频 1027 道需定位双模态证据的选择题并用覆盖分和瓶颈分同时考核答案与定位，最强模型 Gemini3.7-Flash 总体准确率 79.4% 但精确接地仅 35.1%。"
hiddenInHomeList: true
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_arxiv_id: "2610.28444"
paper_digest_workbench_contract: "researcher-workbench-v1"
paper_digest_reader_title: "EvaOmni：要求模型同时答对并找对音视频证据的评测"
paper_digest_original_title: "EvaOmni: An Evidence-Grounded Benchmark for Audio-Visual Reasoning"
paper_digest_arxiv_version: null
paper_digest_arxiv_versioned_id: null
paper_digest_arxiv_abs_url: "https://arxiv.org/abs/2610.28444"
paper_digest_arxiv_pdf_url: "https://arxiv.org/pdf/2610.28444.pdf"
paper_digest_primary_task: "音视频问答"
paper_digest_tags_contract: "paper-tag-flat-tags-v2"
paper_digest_tags_selection_contract: "paper-tag-selection-v2"
paper_digest_tags_registry_version: "paper-tag-catalog-v2"
paper_digest_tags_registry_sha256: "cdef54423b5dfc00a1d017ef6639446d2ecd1d9c1acf71c8eb4f6219a46b7ba8"
paper_digest_tags_concepts: [{"facet":"task","id":"task.av-question-answering","label":"音视频问答"},{"facet":"method","id":"method.benchmark-design","label":"基准设计"},{"facet":"artifact","id":"artifact.benchmark","label":"基准测试"},{"facet":"signal","id":"signal.audiovisual","label":"音视频"}]
paper_digest_primary_method: "基准设计"
paper_digest_score: 7.3
paper_digest_rank_bucket: "前50%"
paper_digest_document_type: "数据集与基准"
paper_digest_one_sentence: "EvaOmni 针对只看答案无法判断是否真用了音视频证据的问题，构建 392 个视频 1027 道需定位双模态证据的选择题并用覆盖分和瓶颈分同时考核答案与定位，最强模型 Gemini3.7-Flash 总体准确率 79.4% 但精确接地仅 35.1%。"
paper_digest_authors: [{"affiliations":["Shanghai Jiao Tong University"],"name":"Xiaoxing Hu"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Wenxi Yao"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Chaoyuan Shi"},{"affiliations":["Fudan University"],"name":"Ziqi Ye"},{"affiliations":["Fudan University"],"name":"Xiaorong Guo"},{"affiliations":["Fudan University"],"name":"Peixuan Li"},{"affiliations":["Beijing Institute of Technology"],"name":"Zhuoran Sun"},{"affiliations":["Shanghai Jiao Tong University"],"name":"Ziyang Gong"},{"affiliations":["Shanghai Jiao Tong University"],"name":"Peiyuan Zhang"},{"affiliations":["Shanghai Jiao Tong University"],"name":"Mingxin Liu"},{"affiliations":["Shanghai Jiao Tong University"],"name":"Shuran Ma"},{"affiliations":["Tongji University"],"name":"Hongbo Liu"},{"affiliations":["The Hong Kong University of Science and Technology (Guangzhou)"],"name":"Xiaomin Yu"},{"affiliations":["Tsinghua University"],"name":"Yu Tian"},{"affiliations":["Shanghai Jiao Tong University"],"name":"Wentao Wang"},{"affiliations":["The University of Hong Kong"],"name":"Zhenjie Yang"},{"affiliations":["Tencent Youtu Lab"],"name":"Jian Hu"},{"affiliations":["Tencent Youtu Lab"],"name":"Yunhang Shen"},{"affiliations":["Tencent Youtu Lab"],"name":"Haoyu Cao"},{"affiliations":["Shanghai Jiao Tong University","Corresponding Author"],"name":"Xue Yang"}]
paper_digest_abstract_sha256: "fff517a0afbd0927009cd788e67ba2f16419d6a90d053e684a373487f6ff9397"
paper_digest_sidecars: {"citation.bib":{"sha256":"e5dac978922d262d64e39f8a930e68c473ed02ce5875f3d7a8c44eb224964bf4","url":"/audio-paper-digest-blog/data/papers/2026-10-21/2610-28444/citation.bib"},"citation.json":{"sha256":"087334c04bde0631ac0d9362e821620e24d8789018d0618f32935e21e8317240","url":"/audio-paper-digest-blog/data/papers/2026-10-21/2610-28444/citation.json"},"citation.ris":{"sha256":"e327572541b3ff46224f60e57d094cbb9a9c6f6c261822e373b4bd03d53b30ba","url":"/audio-paper-digest-blog/data/papers/2026-10-21/2610-28444/citation.ris"},"rethink-context.json":{"contract":"paper-research-context-v2","sha256":"f84b4e488d9a67292f77357b1609b32bfe72fc4a4c0c2d27cc3311b983d96381","url":"/audio-paper-digest-blog/data/papers/2026-10-21/2610-28444/rethink-context.json"}}
paper_digest_api_reader_contract: "beginner-researcher-v3"
paper_digest_api_reader_article_sha256: "21b7ac2ee19299c7c88cb32917211a297350dc183bbb5c8e07b58dc0e469e4e9"
paper_digest_api_reader_plan_sha256: "180c693876f56c28b58533339a01087dd5aa58e86c2940d309d3a5a5b7e51a1d"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings-v4"
paper_digest_api_reader_source_bindings_sha256: "cf8f1e70b61c310de63c14c18164b4f563ab3fd8e4fca2a4cc9bbb3c41a52d55"
paper_digest_api_reader_source_table_count: 4
paper_digest_api_reader_source_formula_count: 2
paper_digest_api_reader_structured_artifacts_sha256: "ec037366cc69bb40603e970a84d39b7184df5b841c4b9e2fd60ac9144b048aed"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity-v1"
paper_digest_api_reader_author_identity_sha256: "0556755c832abd200ca68ce2c78bc7cb554b462402e8eb7e7c15e40bb3b80a39"
paper_digest_api_reader_author_count: 20
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity-v1"
paper_digest_api_reader_resource_identity_sha256: "4f2773644da497f8f5025ac59e2e284498c6041ad53218cb46400cd23dbdbde8"
paper_digest_api_reader_resource_count: 8
paper_digest_api_reader_figure_persistence: "ephemeral-no-persisted-figure-assets-v1"
paper_digest_api_reader_decision_projection: "api-reader-decision-projection-v2"
---

# 📄 EvaOmni：要求模型同时答对并找对音视频证据的评测

> 英文题目：*[EvaOmni: An Evidence-Grounded Benchmark for Audio-Visual Reasoning](https://arxiv.org/abs/2610.28444)*

<!--paper-tag-hierarchy-v1:start-->

**研究分类**

- **研究任务**：[音视频理解](/audio-paper-digest-blog/papers/?concept=task.av-understanding) → [音视频问答](/audio-paper-digest-blog/papers/?concept=task.av-question-answering)
- **研究方法**：[评测协议](/audio-paper-digest-blog/papers/?concept=method.evaluation-protocol) → [基准设计](/audio-paper-digest-blog/papers/?concept=method.benchmark-design)
- **信号**：[音视频](/audio-paper-digest-blog/papers/?concept=signal.audiovisual)
- **研究产物**：[基准测试](/audio-paper-digest-blog/papers/?concept=artifact.benchmark)

<!--paper-tag-hierarchy-v1:end-->

> 评分：**7.3/10** | 创新 1.5/2 | 技术严谨 1.2/1.5 | 实验充分 1.3/1.5 | 清晰度 0.8/1 | 影响力 1/1.5 | 开源 0/1.5 | 可复现 0.3/0.5 | 工程/实践 1.2/1.5


## 👥 作者与机构

- Xiaoxing Hu：Shanghai Jiao Tong University
- Wenxi Yao：机构信息未能在本次解析中与作者逐人可靠绑定
- Chaoyuan Shi：机构信息未能在本次解析中与作者逐人可靠绑定
- Ziqi Ye：Fudan University
- Xiaorong Guo：Fudan University
- Peixuan Li：Fudan University
- Zhuoran Sun：Beijing Institute of Technology
- Ziyang Gong：Shanghai Jiao Tong University
- Peiyuan Zhang：Shanghai Jiao Tong University
- Mingxin Liu：Shanghai Jiao Tong University
- Shuran Ma：Shanghai Jiao Tong University
- Hongbo Liu：Tongji University
- Xiaomin Yu：The Hong Kong University of Science and Technology (Guangzhou)
- Yu Tian：Tsinghua University
- Wentao Wang：Shanghai Jiao Tong University
- Zhenjie Yang：The University of Hong Kong
- Jian Hu：Tencent Youtu Lab
- Yunhang Shen：Tencent Youtu Lab
- Haoyu Cao：Tencent Youtu Lab
- Xue Yang：Shanghai Jiao Tong University；Corresponding Author

## 📌 核心摘要

读者需要理解的是同时依赖声音和画面的视频问答，难点在于模型答对选项也可能靠猜测、常识或单模态线索，无法证明其定位了双模态依据并完成跨模态推理。论文先从开放平台收集1–12分钟、含丰富视听事件且无硬字幕的视频，以减少数据污染和文本捷径，得到392段视频。专家在此基础上构造必须联合音频与视觉的1027道问答，并标出每题音频与视觉证据起止区间，输出再经专家交叉核验与文本、单模态模型过滤，争议样本复审或丢弃，以削弱捷径。评测时模型须同时输出选项与两模态预测区间，前一步的人工区间作为参照计算覆盖 grounded分数与瓶颈 grounded分数，前者统计被碰到的已标证据段比例，后者取双模态时间交并比中较小者，两者都乘以答案是否正确。相对只评答案的基准，关键差异是把证据覆盖与双模态精确定位计入得分，因而能暴露答对但定位失败的情况。在EvaOmni总体评测中，最强Gemini3.7-Flash的瓶颈grounded分数为35.1%，低于人类参考的94.3%，其正确率79.4%与覆盖grounded分数70.8%也分别低于人类的96.8%和96.0%，差距主要在精确定位。该结论仅适用于1–12分钟、去字幕且视听线索充足的视频与1027题量级，未验证更长视频、字幕丰富、事件稀疏或不同语言文化场景的泛化；原文未披露训练、推理或部署成本。

## 🔗 开源与复现资源

- 第三方资源：<https://github.com/VisionXLab/EvaOmni> — 链接可访问（HTTP 200）

- 第三方资源：<https://modelscope.cn/datasets/VisionXLab/EvaOmni-Dataset> — 链接可访问（HTTP 200）

- 第三方资源：<https://huggingface.co/datasets/VisionXLab/EvaOmni-Dataset> — 链接可访问（HTTP 200）

- 第三方资源：<https://huggingface.co/Qwen/Qwen3-Omni-30B-A3B-Instruct> — 链接可访问（HTTP 200）

- 第三方资源：<https://huggingface.co/Qwen/Qwen3-VL-30B-A3B-Instruct> — 链接可访问（HTTP 200）

- 第三方资源：<https://huggingface.co/nvidia/audio-flamingo-3> — 链接可访问（HTTP 200）

- 第三方资源：<https://deepmind.google/models/gemini/pro/> — 链接可访问（HTTP 200）

- 第三方资源：<https://huggingface.co/collections/Qwen/qwen38-flash-next> — 链接可访问（HTTP 200）

可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 视频里的声音和画面为什么要联合起来判断

这篇论文面对的输入是一段 1 到 12 分钟的真实视频，同时带有连续画面和连续声音，目标是回答一道四选一的选择题，并且给出支撑答案的音频时间段和视觉时间段。只答对选项不算完整，必须保留的证据是模型声称用到的那几段声音和画面在哪里出现、持续多久。

体育解说、影视剧情这类任务的难点在于，关键信息经常分开存放：人物说了什么在音频里，做了什么、在哪里在画面里，单独看一边只能猜到一半。比如要判断厨房里年长女性为什么发问，既要听到她说的听不懂发言，又要看到年轻人之前拿书演讲、之后书变成鬼书的画面，缺一边就无法排除干扰选项。

已有评测大多只统计选项准确率，模型靠猜、靠常识、靠单边信息蒙对也能得分，研究者看不到它是否真建立了从证据到答案的链条。EvaOmni 要解决的就是这个评价缺口：把答案正确性和证据定位绑在一起打分，让只蒙对但找不到证据的回答拿不到高分。

### 已有音视频评测做了什么，还缺哪一块

Omni 大模型一侧的发展是从图文对齐走向音视频联合理解，ImageBind、PandaGPT、GPT-4o、Gemini 和 Qwen 系列都在让同一个模型处理多种模态。评测一侧则出现了 DailyOmni、WorldSense、OmniVideoBench 等，覆盖日常生活和真实场景，要求模型同时用音频和视觉。

论文比较了 7 个代表性基准，发现它们都没有逐题标注音频和视觉证据区间，也没有把答案正确性与证据定位联合打分。检查捷径的方式也各不相同，有的只做文本检查，有的只做视觉检查，缺少统一的文本、音频、视觉 3 路筛查。

开放式问答依赖裁判模型打分，不够客观和方便，多选题虽然客观方便，却存在上述捷径问题。EvaOmni 的定位就是保留多选题的客观方便，同时补上证据标注和接地评分，使评价能反映完整的推理链，而不是只看最后选了哪个字母。

### 只看答对率会误判什么

论文提出 3 个递进问题。第一，只看多选题准确率能否证明模型同时用了音频和视觉证据？答案是否定的，因为答对和有证据支撑的答对被给了同样的分数，四选项随机猜还有 25% 的期望准确率，定位能力完全没有被测量。

第二，现有题目能在多大程度上被文本、逻辑或单模态捷径答对？作者用文本、音频、视觉单独输入去测 3 个代表性基准，发现相当一部分题在缺少完整输入时仍能被反复答对。以 WorldSense 为例，只看题面选项、只听音频、只看视频都能答对 10% 以上题目，这说明只看答案的评价容易被钻空子，但作者也强调这只是诊断信号，不能直接等同于题目坏题率。

下面这张图把这种捷径现象可视化，左侧比较 4 个基准在 3 种单独输入下的四次全对率，右侧用卡通流程说明 3 类捷径的输入条件，读懂它就能理解为什么需要接地评测。

> **看图路径：** 1. 先看左侧柱状图四个基准在文本、音频、视觉单独输入下的四次全对率；2. 再看 EvaOmni 三根柱子是否明显低于前三个基准；3. 最后看右侧三个卡通例子理解三种捷径的输入条件

[![原论文 Figure 1：Existing audio-visual reasoning benchmarks suffer from shortcut issues, which weaken the…](https://arxiv.org/html/2610.28444v1/fig1.png)](https://arxiv.org/html/2610.28444v1/fig1.png)

*论文图 1。原论文 Figure 1:：“Existing audio-visual reasoning benchmarks suffer from shortcut issues, which weaken the reliability of benchmark evaluation.”。*

这张图确实可见的是，Daily-Omni、WorldSense、OmniVideoBench 在文本、音频、视觉单独输入下都有明显高于零的全对率，而 EvaOmni 的三根柱子大幅降低到 1.8%、1.0%、3.6% 附近。右侧 3 个例子分别表示只给问答文本、只给音频、只给视觉也能走到正确回答。它帮助理解本文的核心动机：不要求模型交出证据区间，就无法区分真联合推理和走捷径。

### 捷径在已有基准中有多常见

要公平比较捷径嫌疑，作者固定了诊断方法：视觉单独输入用两个视觉模型各测两遍，音频单独输入用两个音频模型各测两遍，文本单独输入用两个语言模型各测两遍，每种输入取四次全对的交集，避免单次偶然猜对或单个模型偏好带来的虚高。

下表要回答的比较问题是，在相同四次全对标准下，3 个旧基准与 EvaOmni 在 3 种单独输入下各有多少比例题目仍能被答对，数值越高说明仅靠单边信息拿分的空间越大。

| 基准 | 文本单独输入四次全对率 | 音频单独输入四次全对率 | 视觉单独输入四次全对率 |
| --- | --- | --- | --- |
| WorldSense | 14.4% | 14.2% | 15.7% |

上表显示 EvaOmni 在 3 路单独输入下的交集全对率降至 1% 到 4% 量级，明显低于 3 个旧基准动辄 10% 以上的水平。限制在于这只是所测模型与设置下的可答对率，不能直接解读为坏题比例或可被利用的概率，也不能证明模型确实用了捷径，但它支持一个判断：只看答案的旧评测更容易给走捷径的回答加分，而 EvaOmni 通过标注与筛查大幅压缩了这种空间。

### EvaOmni 的总体流程是怎样的

EvaOmni 包含 392 个视频和 1027 道纯人工标注的问答，覆盖 15 个细粒度能力，分为三层：Level 1 检索与定位考查跨模态找人、找声源；Level 2 基础理解要求解释事件、情绪、意图和场景关系；Level 3 复杂推理要求长距离、多证据链和多跳推理。三层分别有 3、9、3 个能力，题量为 436、438、153 道。

每道题都由专家标出支持答案的音频区间和视觉区间，模型在评测时必须同时返回选项和两类时间戳。评价把答案分和证据分相乘，只有答对且找对证据才能得高分，文本、音频、视觉 3 路检查在出题阶段就用来减少捷径。

下图顶部是标注流水线，底部是一个接地标注实例，沿着它可以走通从视频筛选到最终问答再到模型输出要求的全过程。

> **看图路径：** 1. 先沿顶部标注流水线看候选视频到最终问答的筛选与返工回路；2. 再看底部胶片与波形上视觉与音频证据区间的位置关系；3. 最后看问题、选项与推理链如何对应到具体证据描述

[![原论文 Figure 2：Top: We designed a series of rigorous annotation procedures to ensure the quality and reliability…](https://arxiv.org/html/2610.28444v1/fig2.png)](https://arxiv.org/html/2610.28444v1/fig2.png)

*论文图 2。原论文 Figure 2:：“Top: We designed a series of rigorous annotation procedures to ensure the quality and reliability of EvaOmni questions.”。*

上半部分可见候选视频经过过滤得到有效视频库，再经人工标注、交叉评审、不一致时重新标注或丢弃，形成候选问答库，最后经捷径过滤得到最终问答。下半部分可见一条胶片上有 3 个视觉证据段，波形上有一段音频证据段，下方文字框给出每个区间的起止时间和内容描述，以及需要多步回溯的问题和推理链。它说明 EvaOmni 不是只给题面，而是把答案依赖的时空位置也固定下来，模型输出必须能对上这些位置。

### 证据区间如何标注，干扰项如何防止单边猜对

视频选自 YouTube 和 Bilibili 的 2025 年 1 月之后上传内容，时长 1 到 12 分钟，内容覆盖多种真实场景且有信息量的视觉事件和音频线索。为减少基于文字识别的捷径，带有硬编码字幕或显著文字叠加的视频被排除；为保证能构造干扰项，内容高度重复、人物动作单一的视频也被人工排除。

5 名有计算机和语言学背景的博士生按统一模式标注，每条样本记录视频链接、题干、选项、能力层级和细粒度类别，并分别标出视觉和音频证据的起止时间与内容描述，Level 3 多跳题还加写分步推理链。出题要求必须联合使用音视频信息，干扰项取自视频中真实出现的视听线索，并且在逻辑上是合理解释，使单看一边无法可靠排除错误选项。

**Omni LLM × 音视频推理：** Omni LLM 指能同时处理文本、图像、视频和音频的大模型，音视频推理指它必须把不同时刻的声音信号和画面信号联系起来做判断；前者是执行者，后者是任务要求，EvaOmni 就是检查执行者是否真把两个模态的证据都用上了。

**文本捷径 × 单模态捷径：** 文本捷径指只看题干选项靠常识或逻辑就能猜对，单模态捷径指只听音频或只看画面就能答对；两者都不需要完整音视频联合推理，EvaOmni 用专家审查加模型试答把这两类题目挑出返工，从源头减少它们。

这种设计把出题、标注和防捷径绑在一起：标注者先按能力定义选题，交叉评审再检查能力对齐、捷径嫌疑和证据质量，约 78% 首轮通过，有争议的交由另外 2 名专家独立复核，只有一致通过才保留，最终约 82% 通过人类复核，18% 被丢弃。通过的样本再经模型在文本、音频、视觉单独输入下试答，能稳定答对并给出合理理由的就打回修改，直到不能走捷径为止。

### 覆盖分与瓶颈分分别计算什么

评测时模型对每题返回一个选项和若干音频、视觉区间。答案分 s 答对为 1、答错为 0，所有接地分都要乘以 s，答错直接得 0 分，这是把定位与回答绑定的关键。

覆盖分衡量标注证据有多少被碰到。设音频已标注段总数为 audio_all，其中被预测区间以正时长重叠命中的段数为 audio_I，视觉同理，覆盖分取 2 模态命中率的平均再乘以 s。它是宽松的命中率，不惩罚预测过宽，也不要求边界精确，只要碰上就算命中。

\[\mathrm{C.G.}=\frac{s}{2}\left(\frac{\mathrm{audio}_{I}}{\mathrm{audio}_{\mathrm{all}}}+\frac{\mathrm{visual}_{I}}{\mathrm{visual}_{\mathrm{all}}}\right).\]

瓶颈分衡量双模态定位是否都精确。先分别对预测区间取并集、对标注区间取并集，计算各自时间交并比得到音频 IoU 和视觉 IoU，再取两者最小值乘以 s。取最小值的含义是短板决定得分，一边定位再好也不能弥补另一边的失败。

\[\mathrm{B.G.}=s\times\min\!\left(\operatorname{IoU}_{\mathrm{audio}},\operatorname{IoU}_{\mathrm{visual}}\right).\]

**Coverage Grounded Score × Bottleneck Grounded Score：** Coverage Grounded Score 统计标注的音频和视觉证据段中有多少被预测区间碰到，是宽松的命中率；Bottleneck Grounded Score 计算双模态并集交并比并取较小者，是严格的精确定位分；前者看找全没有，后者防止一好一坏被平均掩盖，两者都乘以答案正确性。

**证据区间 × 推理链：** 证据区间指支撑答案的音频和视觉时间段，用起止时间戳表示；推理链指 Level 3 多跳题额外标注的分步推理过程，说明先定位哪段话、再回溯哪个动作、最后看哪个结果；区间是定位对象，推理链是把多个区间串起来的顺序。

附录还给出平均 IoU 的连续分 Mean 和阈值分 Thr@0.3、0.5、0.7 作为补充视角，它们允许一模态补偿另一模态，与瓶颈分的严格短板逻辑形成对照。

### 本文训练了什么，没有训练的部分如何执行

本文没有训练任何新模型，也没有更新模型参数、报告梯度路径或优化器设置，training 在这里指数据集的构造与筛选过程。实际执行的计算是人工标注、交叉评审和模型辅助筛查，而不是反向传播。

具体执行分四步：按时间新鲜度、去字幕、时长可控、实体事件多样性筛选候选视频，其中用抽 3 帧让 Gemini3.1-Pro-Preview 描述来启发式排查污染风险；专家按能力类别出题并标注双模态区间；4 人交叉评审加双人仲裁；再用 Gemini3.1-Pro-Preview 和 Qwen3-Omni-Instruct 在 3 种单独输入下试答两遍，取四次全对的交集作为捷径诊断，命中样本返工重测。

缺口在于原文未披露标注耗时、人工成本和试答时的具体提示词阈值，也未说明视频采样帧率之外的音频预处理细节。复现时不能从模型名猜测实现，只能按附录的筛选标准和评审维度重走流程，缺失的超参数需要自己记录并报告。

### 评测了哪些模型，输入和计分条件是什么

评测覆盖 24 个 Omni 大模型，包括 7 个开放权重模型和 17 个闭源模型，另加一组独立于标注者的人类专家作为参考基线。开放模型除 MiMo 家族外在 8 卡 H20 服务器上按模型卡推荐框架运行，MiMo 3 个模型与全部闭源模型走官方接口，输入预处理统一为按 1.0 帧每秒采样、长边缩放到 480 像素并保持宽高比，同时送入对应音频。

人类基线允许暂停和回放视频再标注音频和视觉区间，与模型用同一套准确率、覆盖分、瓶颈分计分。作者明确这只是参考基线而非严格匹配记忆与浏览条件的对照，因为人类记忆远弱于模型直接读取视频上下文，回放补偿也不能完全拉平。

下图展示数据集的结构与统计，读懂它才能判断后文结论在什么分布上成立。

> **看图路径：** 1. 先看(a) 环形三层 15 个能力的划分与占比；2. 再看(b)(e) 视频时长与类型分布是否多样；3. 最后看(d) 随级别升高证据数量与平均时长如何变化

[![原论文 Figure 4：Overview and statistics of EvaOmni. (a) Hierarchical capability taxonomy.](https://arxiv.org/html/2610.28444v1/distribution.png)](https://arxiv.org/html/2610.28444v1/distribution.png)

*论文图 4。原论文 Figure 4:：“Overview and statistics of EvaOmni. (a) Hierarchical capability taxonomy.”。*

(a) 可见三层 15 个能力的环形划分，(b) 可见视频时长集中在 2 到 10 分钟且各段都有几十个样本，(e) 可见影视、喜剧、新闻纪录、生活方式等类型占比分散，(c) 可见 Level 3 选项平均长度明显变长，(d) 可见 Level 3 平均证据数量增至 2.4 个左右、平均时长增至 40 秒以上。这说明越到高层级，需要整合的证据越分散、题面越复杂，后文 Level 3 瓶颈分普遍最低正是在这种分布下得到的。

### 总体上谁答得对，谁找得准

下表要回答的比较问题是，在同一视频音频输入与同一答案加证据计分下，开放模型、闭源模型与人类在三层和总体上的准确率、覆盖分、瓶颈分如何排序，数值越高越好，差距用百分点衡量。

| 模型 | 总体准确率 | 总体覆盖分 | 总体瓶颈分 | Level 3 准确率 | Level 3 瓶颈分 |
| --- | --- | --- | --- | --- | --- |
| Gemini3.7-Flash | 79.4% | 70.8% | 35.1% | 79.1% | 12.3% |

上表保留了原文报告的关键行：最强闭源 Gemini3.7-Flash 总体三项最高，分别领先最强开放 MiMo-V2.5 约 22.6、22.4、14.6 个百分点；人类三项分别高出 Gemini3.7-Flash 约 17.4、25.2、59.2 个百分点。值得注意的是 Gemini3.7-Flash 在 Level 3 准确率仍有 79.1%，但瓶颈分只剩 12.3%，而人类从准确率到瓶颈分只下降约 2.5 个百分点，模型却下降 44.3 个百分点。

下图对比两个代表模型在 15 个细粒度能力上的 3 条曲线，实线为准确率，实色与斜纹柱分别为覆盖分与瓶颈分，读图时注意同任务下三者落差的变化。

> **看图路径：** 1. 先比较蓝色与红色折线在 15 个细粒度任务上的准确率差距；2. 再看同任务下实色柱与斜纹柱的高度差理解覆盖与精确定位的落差；3. 重点观察 Level 3 多跳与多证据任务上斜纹柱为何普遍很矮

[![原论文 Figure 31：Performance across fine-grained capabilities.](https://arxiv.org/html/2610.28444v1/result_mimo_gemini.png)](https://arxiv.org/html/2610.28444v1/result_mimo_gemini.png)

*论文图 17。原论文 Figure 31:：“Performance across fine-grained capabilities.”。*

图中确实可见 Level 1 三项对齐任务上 Gemini 准确率多在 82% 以上、瓶颈分约 47% 到 50%，MiMo 准确率 60% 到 69%、瓶颈分 28% 到 34%；到多跳推理、多证据链等复杂任务，Gemini 准确率仍有 80% 左右但瓶纹柱跌至 10% 到 15%，MiMo 准确率 40% 到 50% 而瓶颈分仅个位数。它支持论文的判断：选对答案远比找全找准分散证据容易，接地评价揭示了只看准确率看不到的短板。

### 分数更高是否意味着更省钱，答对与找准是否一致

下表要回答的比较问题是，在 1027 次 10 分钟音视频输入的统一计费假设下，10 个闭源模型的答对、覆盖、精确定位各自的单位分数成本如何，总成本与单位成本越低越省钱。

| 模型 | 总成本 | 准确率单位成本 | 覆盖分单位成本 | 瓶颈分单位成本 |
| --- | --- | --- | --- | --- |
| Doubao-Seed-2.1-Lite | $13.71 | $0.0188 | $0.0208 | $0.0491 |
| Qwen3.8-Omni-Flash | $11.54 | $0.0193 | $0.0246 | $0.0780 |
| Gemini3.7-Flash | $44.41 | $0.0545 | $0.0611 | $0.1232 |

上表显示总分最高的 Gemini3.7-Flash 在三项成本效率上都只排第四，而 Doubao-Seed-2.1-Lite 三项最低，Qwen3.8-Omni-Flash 总成本最低且效率第二。更强性能不必然更省钱，选型需在预算与所需的回答、覆盖、精确定位水平之间权衡，这是论文明确支持的结论，不能引申为延迟或误判率也会同步改善。

答对与找准的不一致进一步用阈值分析验证：以双模态 IoU 都达到 0.5 为接地成功，Gemini3.7-Flash 约 47.8% 的正确回答通不过接地，Qwen3.8-Omni-Flash 从 58.2% 准确率跌至 11.8% 双达标；反过来接地通过但答错的比例为 12.2% 到 32.6%，但占全部题目不超过 8.8%。因此 neither 单独看准确率 nor 单独看重叠率都不足以证明可靠的证据接地回答。

### 拿掉一个模态或把声音换成文字会怎样

下表要回答的比较问题是，对同一模型改变输入模态时，答案与接地分数如何变化，条件包括纯音频、纯 ASR 文本、纯视频、视频加 ASR、视频加原生音频，数值越高说明该输入组合保留的信息越完整。

| 模型与输入 | 准确率 | 覆盖分 | 瓶颈分 |
| --- | --- | --- | --- |
| MiMo-V2.5 视频加音频 | 56.8% | 48.4% | 20.5% |
| MiMo-V2.5 纯音频 | 30.0% | 10.0% | 0.0% |
| MiMo-V2.5 纯 ASR | 23.8% | 7.1% | 0.0% |
| MiMo-V2.5 纯视频 | 26.8% | 9.3% | 0.0% |

上表显示原生音频优于 ASR 文本：纯音频比纯 ASR 高约 6 个百分点准确率，视频加音频比视频加 ASR 高 8.1 个百分点准确率、10.3 个百分点覆盖分、8.9 个百分点瓶颈分。拿掉任一模态都会大幅下滑，纯音频或纯视频的瓶颈分直接归零，说明互补证据缺一不可。

**原生音频 × ASR 转写文本：** 原生音频是视频自带的声波信号，包含语音、非语音声、韵律和时间信息；ASR 转写文本只是把语音转成文字，会丢失非语音和韵律并引入识别与时间戳误差；消融对比两者就是检验文字能否代替声音做接地推理。

对纯视觉语言模型加 ASR 也有提升但仍不精确，Qwen3VL-8B 从纯视频 13.8% 准确率升至视频加 ASR 的 23.2%，覆盖分从 0.3% 升至 9.7%，但瓶颈分仅 1.9%。这说明转写文字能提供额外线索，却不能代替对声音时间位置的精确定位，也无法解决双模态联合接地问题，未胜出的纯单模态条件恰好反衬了双模态输入的必要性。

### 这些结论在什么范围内成立

数据覆盖是首要边界。EvaOmni 只有 392 个视频 1027 道题，时长 1 到 12 分钟，排除硬编码字幕并偏向实体事件多样的内容，结果不能推广到更长视频、字幕密集内容、稀疏事件场景或所有语言文化语境。三层级别刻画的是任务要求差异，不保证在不同题集上准确率严格单调变难。

测量条件也有边界。人类基线允许暂停回放，与模型推理的浏览方式不同，只能作参考而非严格记忆对照。附录的平均 IoU 补充指标显示 Level 3 随阈值变严分数大幅下滑，且阈值不同时排名会变化，例如 Thr@0.7 时 Gemini3.8-Flash 略超 Gemini3.7-Flash，说明结论依赖于定位严格程度。

作者还提醒，污染筛查只是启发式，上传日期与 3 帧重述能力都不能确证视频是否进过训练集。把某一模型的领先直接说成通用能力更强，或把成本效率外推到延迟与部署开销，都是超出证据的解读。

### 要复现与复用需要准备什么

复现第一步是按附录重建输入与计分：视频长边缩到 480 像素、按 1.0 帧每秒采样并附带音频，用统一提示词要求模型同时输出选项与音频、视觉起止时间戳，再按覆盖分与瓶颈分公式计分。开放模型按模型卡框架在本地运行，MiMo 与闭源模型走官方接口，24 个模型的名单与三层题量划分都已在正文给出。

代码开源、权重可下载、系统可运行是三件不同的事，本文只涉及数据集与评测框架的公开，未发布新模型权重，也未声称提供在线可运行系统。引用时应区分数据集可用性与模型可用性，论文中给出的数据集链接属于第三方镜像性质的记录，不能直接写成作者已开源模型。

还需补的验证包括更长视频、字幕分离文本阅读与音频理解、开放式问答无选项提示下的表现，以及多次采样的统计不确定性。原文未报告方差、延迟与推理开销，复现时应自己记录硬件、接口版本与重试策略，避免把单次分数当成稳定排序。

### 什么时候值得用 EvaOmni，下一步还缺什么

当研究目标是让模型不仅选对而且能指出声音和画面依据时，值得用 EvaOmni 代替只看准确率的旧基准。它的价值在于同时考核回答、覆盖与精确 3 段，Level 3 的多证据与长距离任务尤其能暴露定位短板，适合做模型选型前的接地能力摸底。

如果只是比较纯视觉理解或纯音频理解，不必套用它的双模态瓶颈分；如果视频带有大量字幕或时长远超 12 分钟，也不宜直接外推本文的数字，因为分布已经不同。教学例子是厨房发问需要同时听到听不懂的发言并看到书变鬼书的过程，它只是帮助理解联合推理，实际每题的证据数量与时长以标注文件为准。

下一步最需要补的是稀疏线索、长时程与多语言场景下的双模态必要性检查，以及对失败模式的因果分析：当前只能说部分证据能帮助排除干扰项从而选对，但不能确证模型的选择策略。把精确定位做准，使结论能被回放到原视频验证，才是 Omni 模型从答对走向可信的关键。

<details>
<summary>📎 论文与评分元数据</summary>

排名：前50% | 文档类型：数据集与基准 | [arXiv 原文](https://arxiv.org/abs/2610.28444)

</details>

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。

- 评分规则：type-aware-v1

- 评分模型：muse-spark-1.3-contributor

- 评分请求协议：openai_responses

---

[← 返回 2026-10-21 语音/音乐/音频论文速递](/audio-paper-digest-blog/posts/2026-10-21/)
