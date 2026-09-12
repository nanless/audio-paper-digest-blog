---
title: "OMHBench: Benchmarking Balanced and Grounded Omni-Modal Multi-Hop Reasoning"
date: 2026-09-12
draft: false
description: "针对全模态理解可绕过模态与跨模态多跳推理路径失衡的问题，OMHBench 用表格三元组加三跳规则与六路模态置换构造 6144 题并报告专有模型仍对语音在后路径大幅掉点而高级提示无一致增益。"
tags: ["基准测试", "基准设计", "多模态模型", "音视频", "音视频问答"]
categories: ["acl-2026 论文"]
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_paper_id: "conference:acl:2026:conference-paper-id:2026.findings-acl.911"
paper_digest_source_kind: conference
paper_digest_conference_id: "acl-2026"
paper_digest_conference_record_url: "https://aclanthology.org/2026.findings-acl.911/"
paper_digest_conference_pdf_url: "https://aclanthology.org/2026.findings-acl.911.pdf"
paper_digest_api_reader_contract: "beginner-researcher-v3"
paper_digest_api_reader_article_sha256: "8c5a40d2f8589a4b7a744a3e46fe5d315591f4cfaa0c935b1072c7bfe6bcb1de"
paper_digest_api_reader_plan_sha256: "144d588af8e00e1707b179b22dd5c9094f1065f7c22ec0c48aaca286b20d1e9a"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings-v4"
paper_digest_api_reader_source_bindings_sha256: "6f0983858df6af2c4f86be4a5ceed9b4622f27b88d6d4f8d5a89e56f23b57dc4"
paper_digest_api_reader_source_table_count: 3
paper_digest_api_reader_source_formula_count: 0
paper_digest_api_reader_structured_artifacts_sha256: "84f24806cd11945f122a12d471240c7f9642d3621162c0be8f305f5dc9264762"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity-v1"
paper_digest_api_reader_author_identity_sha256: "736c3a3ea67086a3b1735b8f747d5f6d539940dd3180d71cec8d0d5def59caed"
paper_digest_api_reader_author_count: 8
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity-v1"
paper_digest_api_reader_resource_identity_sha256: "7e220c552f6e43d5a5498cd5f609ec372e731b5cdea72f51dc9dcfc7d692874d"
paper_digest_api_reader_resource_count: 5
paper_digest_api_reader_decision_projection: "api-reader-decision-projection-v2"
paper_digest_scoring_contract: "api-scoring-audit-v2"
paper_digest_taxonomy_contract: "paper-taxonomy-flat-tags-compat-v1"
paper_digest_taxonomy_selection_contract: "paper-taxonomy-selection-v1"
paper_digest_taxonomy_registry_version: "paper-taxonomy-v1"
paper_digest_taxonomy_registry_sha256: "15c82a567ce5a55dc1175684ed08b64c158558639d9c8fb822c9587ec32a8778"
paper_digest_taxonomy_concepts: [{"facet":"artifact","id":"artifact.benchmark","label":"基准测试"},{"facet":"method","id":"method.benchmark-design","label":"基准设计"},{"facet":"model_family","id":"model_family.multimodal","label":"多模态模型"},{"facet":"signal","id":"signal.audiovisual","label":"音视频"},{"facet":"task","id":"task.av-question-answering","label":"音视频问答"}]
paper_digest_primary_task: "音视频问答"
paper_digest_primary_method: "基准设计"
paper_digest_score: 6.8
paper_digest_rank_bucket: "前50%"
paper_digest_document_type: "数据集与基准"
paper_digest_conference_structure: replayable-pdf-layout-v1
---

# 📄 三跳都必须用上：OMHBench 如何堵住全模态评测的捷径与偏路

> 英文题目：*OMHBench: Benchmarking Balanced and Grounded Omni-Modal Multi-Hop Reasoning*

> 会议身份：`conference:acl:2026:conference-paper-id:2026.findings-acl.911`


> ✅ 来源为官方会议 PDF；表格与 Figure 按原文证据绑定。PDF 公式以原页区域图片展示，未冒称作者原始 TeX。

> 会议来源：[官方记录](https://aclanthology.org/2026.findings-acl.911/) · [官方 PDF](https://aclanthology.org/2026.findings-acl.911.pdf)

标签：#基准测试 #基准设计 #多模态模型 #音视频 #音视频问答

评分：**6.8/10** | 创新 1.5/2 | 技术严谨 1.2/1.5 | 实验充分 1.2/1.5 | 清晰度 0.8/1 | 影响力 0.8/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 1.0/1.5

排名：前50% | 文档类型：数据集与基准

## 👥 作者与机构

- Seunghee Kim：机构信息未能从会议 PDF 纯文本可靠映射
- Ingyu Bang：机构信息未能从会议 PDF 纯文本可靠映射
- Seokgyu Jang：机构信息未能从会议 PDF 纯文本可靠映射
- Changhyeon Kim：机构信息未能从会议 PDF 纯文本可靠映射
- Sanghwan Bae：机构信息未能从会议 PDF 纯文本可靠映射
- Jihun Choi：机构信息未能从会议 PDF 纯文本可靠映射
- Richeng Xuan：机构信息未能从会议 PDF 纯文本可靠映射
- Taeuk Kim：机构信息未能从会议 PDF 纯文本可靠映射

## 📌 核心摘要

该任务输入为分属文本、图像与语音的三段上下文，输出为正整数答案，要求按指定模态顺序完成三跳实体属性链接，难点在于任一模态缺失即不可解且需跨模态传递中间实体。先进行表格问答构建，输入为四领域真实表格，职责是抽取共享实体但属性互斥的三张子表并施加查找比较排序等操作生成三跳问答，输出的问题与答案对进入下一步模态渲染。再进行模态渲染，输入为上一步输出的问题答案对与三张子表，职责是将三表分别转化为分析师报告类文本、多样式图表与多人对话语音，输出的三模态上下文进入推理多样化。最后进行推理多样化，输入为上一步输出的三模态上下文与问答实例，职责是对三表做全排列生成S-I-T等六种推理路径变体以均衡路径分布，输出均衡的评测实例。与OMU及CMR基准相比，该设计同时强制三模态接地并均衡路径分布，避免单模态捷径与路径偏置，具有更严格的评测意义。在OMHBench-Connect基准下，Gemini 3 Flash的平均准确率为78.3，高于Gemini 2.5 Pro的72.5。结论适用边界限于固定三跳实体属性型数值推理，尚未验证开放域长语音与视频时序场景。原文未披露训练、推理或部署成本。

## 🔗 开源与复现资源

- 数据相关资源：<https://huggingface.co/> — 暂时无法访问
- 第三方资源：<https://huggingface.co/hexgrad/Kokoro-82M/blob/> — 暂时无法访问
- 第三方资源：<https://finance.yahoo.com/> — 链接可访问（HTTP 200）
- 第三方资源：<https://data.worldbank.org/> — 链接可访问（HTTP 200）
- 第三方资源：<https://open-meteo.com/> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 输入是什么，目标是什么，这篇解读要保留什么？

本文输入是论文 OMHBench 全文与官方原图像素，目标是让刚进入语音音乐音频的研究生能复述该基准为何建、如何建、如何测。必须保留的信息包括四领域表格来源、10 实体乘 3 属性的三元组设计、8 种推理操作、3 模态生成方式、6 路路径置换、6144 题与 3072 加 3072 的子集划分、13 个模型的零样本思维链评测条件、准确率与路径平衡分的定义方向、语音在后路径掉点的非对称现象。输出按学习依赖展开，先讲任务与旧路线缺陷，再走一个样本从输入到输出，随后讲构造计算、实验条件、结果与反证，最后讲复现与收束。教学用的例子会明确标为例子，不虚构数值效果。

语音在此不是可有可无的附加音频，而是与文本图像并列的必经一跳。初学者白话理解是：问题问的是某公司某财务指标，答案藏在 3 段材料里，一段是文字报告，一段是图表，一段是多人对话语音，缺一段就无法锁定实体。全模态理解（Omni-Modal Understanding，简称 OMU）指同时处理文本、视觉、语音的能力；跨模态多跳推理（Cross-Modal Multi-Hop Reasoning，简称 CMR）指跨模态组合多步证据的能力。

**全模态理解 × 跨模态多跳推理：** 全模态理解分工是同时消费文本、图像、语音 3 路输入，检验是否都用上了；跨模态多跳推理分工是按实体对齐、按属性接力完成多步检索与计算，检验是否推对了；二者搭配的理由是只测前者会留下捷径，只测后者又长期缺语音，组合后新增的作用是要求同一问题必须走完 3 模态的固定跳数才能得分。

本解读不做营销式判断，只按原文证据讲动作。凡说可用性，均以资源状态为准：本次收到的数据集链接状态为暂时不可达，因此不能写已公开可下载，只能写本次未能确认可达；第三方雅虎财经、世界银行、Open-Meteo 状态可用，但那是原始表格来源，不是本基准的发布证明。后续段落会先沿一个财务例子走完输入到输出，再展开构造与评测细节。

### 旧路线为什么测不准：缺文本与偏路径如何被验证？

要理解 OMHBench，先看两条旧路线。同输入同目标的对照是：OMU 路线输入 3 模态但文本多只做题干选项，CMR 路线做多跳但长期只有文本加视觉。论文用同一类强模型做探针，验证了两类失真。第一类是模态捷径：把视觉或听觉输入拿掉，OMU 基准仍有近七到八成题目可解，说明不用全模态也能拿分。第二类是路径偏置：MuMuQA 与 FCMR 只有 I-T，MMQA 约 2 倍 I-T 多于 T-I，把每题反向改写为均衡分布后准确率一致性下降，部分超过 10 个百分点。

下图是 CMR 偏置验证的可视化，左右分别为 MuMuQA 与 MMQA，蓝为原始橙为均衡后，右侧数字为下降量，初学者应先读图例再读条长，不要把条形缩短直接当成模型变弱，而是原评测高估了偏爱路径的能力。

> **看图路径：** 1. 先确认横轴为准确率且蓝条为原始橙条为均衡后；2. 再逐行比较七个模型右侧标注的下降百分点；3. 注意右侧 MMQA 中 MiniCPM-o 一项下降最大的条形

[![原论文 Figure 3：Performance comparison on the original Mu- MuQA and MMQA datasets vs.](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/acl-2026/f83b03f7baf8/figure-3.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/acl-2026/f83b03f7baf8/figure-3.png)

*论文图 3。原论文 Figure 3：“Performance comparison on the original Mu- MuQA and MMQA datasets vs.”。*

该图显示原始偏 I-T 分布下成绩偏高，均衡后普遍回落，最大回落达 18 个百分点，支持路径分布必须受控的判断。这为后文 3 模态 6 路均衡设计提供了直接动机。相关工作还指出表格图表类 CMR 工作未纳入语音，ICT-QA 与 WikiMixQA 未公开且未考虑路径分布，因此简单反转路径只是双模态下的部分补救，需要系统性新基准。

### 任务如何形式化：实体共享与属性独占怎样锁定路径？

论文把问题限定为实体与属性上的多跳。白话是：实体是跨模态同指的对象，如公司；属性是只在某个模态可读的数值，如商誉在图像、库存在文本、总营收在语音。推理路径（reasoning path）指按属性所在模态决定的访问顺序，如 I-T-S 表示先看图拿商誉定位公司，再看文本拿库存比较出第二家公司，最后听语音拿总营收。若某模态缺失，则对应属性不可得，题目不可解，这就从结构上堵住了捷径。

下图左侧为旧基准可绕过模态仍答对、右侧为新基准缺任一模态即答错的示意，饼图强调 6 路等分，阅读时注意红色叉号与绿色对号的含义不是模型好坏，而是任务是否允许走捷径。

> **看图路径：** 1. 先看左侧两列如何标注文本被忽略与语音被忽略；2. 再看左下可不看图或声仍答对与右下必须三模态才错的对比；3. 最后看右下六色饼图是否六路推理路径等分

[![原论文 Figure 1：Omni-Modal Understanding (OMU) bench- marks lack textual context and suffer from modality…](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/acl-2026/f83b03f7baf8/figure-1.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/acl-2026/f83b03f7baf8/figure-1.png)

*论文图 1。原论文 Figure 1：“Omni-Modal Understanding (OMU) bench- marks lack textual context and suffer from modality shortcuts, while Cross-Modal Multi-Hop Reasoning (CMR) datasets exclude speech and…”。*

该图左侧上方标注文本被忽略与语音被忽略，左下方标注无视觉或音频仍可解且判正确；右侧要求语音到图像到文本的三跳结构，缺一段即判错，并以六等分饼图标示受控路径。由此引出 OMHBench 的 3 条设计要求：强制多跳以防捷径、联合纳入文本图像语音、显式控制模态顺序以便定位强弱项。

### 方法全景：四步流水线如何从原始表格到六路变体？

全流程分 4 步。第一步表格三元组形成：从雅虎财经、世界银行、Open-Meteo、美国农业部取金融、经济、气候、营养四领域真实表格，构造共享同组实体但属性互不重叠的 3 张小表。第二步多跳问答构造：用规则操作在 3 张表上顺序作用生成三跳问题与整数答案。第三步全模态上下文生成：把 3 张表分别转为文本、图像、语音 3 种材料。第 4 步推理分散：保持问答不变，置换 3 张表到 3 模态的映射，得到 6 种路径变体。

下图用财务例子展示三跳如何由查找、比较、检索拼接，初学者先跟随问句中黄色高亮的总营收与紫色高亮的公司指称，再看底部色块如何把商誉库存总营收分别绑定到图像文本语音。

> **看图路径：** 1. 先沿左侧 I-T 例子看属性 1 到实体再到属性 2 的两跳箭头；2. 再沿右侧 I-T-S 例子看实体 1 到实体 2 再到属性 3 的三跳扩展；3. 核对底部商誉库存总营收如何分别只归属一个模态色块

[![原论文 Figure 2：Illustration of the proposed task formulation with two example questions and their reasoning…](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/acl-2026/f83b03f7baf8/figure-2.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/acl-2026/f83b03f7baf8/figure-2.png)

*论文图 2。原论文 Figure 2：“Illustration of the proposed task formulation with two example questions and their reasoning paths: I-T (left) and I-T-S (right).”。*

该图左侧 I-T 例子是商誉在图、库存在文的两跳；右侧 I-T-S 例子是商誉在图、库存在文、总营收在语音的三跳，属性只在特定模态可读而公司跨模态共享。质量控制随后验证转换无事实损失、问题改写多样性、语音转写质量，但流水线本身已保证内容不变只变模态顺序，这是后文路径对照公平性的基础。

### 表格三元组如何保证可比且可画图可朗读？

表格三元组是全部内容的中转表示。动作是：取一个原始表格源，按 10 实体乘 3 属性切出 3 张小表，三表实体集合相同，属性集合互斥。论文还做了 3 层筛选：剔除会计恒等式、比率等派生属性，只留原始属性；要求属性间相互独立；限制同一属性最大值与最小值之比不超过 30，以保证图表可视稳定与跨表可比。

每表混入相关与干扰实体属性，要求模型在信息过载下检索正确线索。领域实例数为四领域各 1536 题，金融用 23 家公司 2024 年报 15 个指标，经济用 18 国 2024 年 18 个指标，气候用 20 城 12 个月最大风速，营养用 24 种食物 19 种营养成分。

**实体 × 属性：** 实体分工是跨模态的公共锚点，例如同一家公司在 3 张表里同名出现；属性分工是模态专属的证据，例如商誉只在图像里可读，库存只在文本里可读；搭配理由是只有共享实体才能跨表跳跃，只有独占属性才能锁定必须访问的模态，组合意义是把推理路径定义为访问模态的顺序，如 I-T-S。

该设计把内容与呈现分离：内容由表格三元组固定，呈现由后文生成器实现。因此同一事实可以在文字报告、柱状折线等 10 种图表、4 人对话语音之间切换而不改变数值，这是推理分散步骤可声称信息量不变的前提。初学者复述时应强调实体对齐与属性独占是路径可控的充要条件。

### 三跳问题与三模态材料如何具体生成？

问答构造是确定性规则拼接。论文定义查找、排序、比较、区间、邻近、检索、均值、求和 8 种操作，每题采样 3 个操作顺序作用。前两跳做实体级过滤，输出单个或一组实体；最后一跳做检索或聚合，输出标量数值答案。Connect 子集固定为查找比较检索链，中间始终单实体。

Reasoning 子集前两跳可用排序区间等并输出实体集，末跳用均值或求和，均值非整数则丢弃。操作不可行组合直接丢弃，不依赖生成式模型，保证可扩展与全自动。

**表格三元组 × 推理路径：** 表格三元组分工是提供内容相同、属性分离的 3 张 10 实体乘 3 属性小表，保证信息量可控且无冗余派生列；推理路径分工是规定三跳各用哪张表对应的模态；搭配理由是同一问答对可以保持问答不变只置换 3 张表到语音、图像、文本的映射，从而新增的作用是一题派生出 6 种路径变体做公平对照。

模态生成动作分三支。文本支用分析师报告、新闻、博客等 24 种场景提示驱动 3 种大模型生成自然段，要求逐值显式提及。图像支用 Matplotlib 与 Seaborn 生成 10 种图表，随机选 20 种字体与 20 色 palette。语音支先按会议播客研讨等 22 种场景生成 4 人对话脚本，主持人只报公司名，3 位说话人各负责一列指标且顺序随机，文本禁出现资产债务等属性名提示，只能用我的数值是多少等泛指，随后用 Kokoro-82M 与 27 个男女声合成，听者须靠开场分工记住声纹到属性的映射。

**Connect × Reasoning：** Connect 分工是中间结果始终为单个实体，走 Lookup-Comparison-Retrieval 固定链条，考查实体级链接；Reasoning 分工是中间结果扩为实体集合并以 Mean 或 Summation 收尾，考查集合过滤加数值聚合；搭配理由是前者隔离跨模态定位能力，后者叠加排序比较区间邻近等多操作难度，组合意义是区分定位失败与聚合失败。

例子有助于理解：问总营收的那家公司的库存大于商誉等于 40303 的那家公司，解法是先在图像查商誉 40303 得公司 G，再在文本比较库存得库存 10851 的公司 K，最后在语音检索公司 K 的总营收 63627。3 段材料内容一致，只是承载模态不同。

### 有无神经网络训练？四步构造的计算与校验是什么？

本研究没有训练任何新模型，training 一节实际承担的是数据集构造与校验计算。参数冻结更新、梯度路径、监督来源等训练要素均未报告，不应从模型名推定实现；评测调用的既有模型以推理方式运行，思维预算 8192，零样本思维链提示，不固定推理格式。构造侧的真实计算是规则过滤、模板拼接、大模型文本生成、绘图库渲染、文本转语音合成，以及一致性与多样性度量。

下图是 4 步流水线的像素总览，阅读时沿箭头走主路径，再对比语义分支与声学分支在何处汇合为评测输入。

> **看图路径：** 1. 先沿序号 1 到 4 看表格三元组到问答再到多模态再到路径分散的主链；2. 再看步骤 3 中文本语音图像三条生成支路的工具差异；3. 最后看步骤 4 同一问答如何展开为 6 条推理路径

[![原论文 Figure 5：Overview of the OMHBench pipeline.](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/acl-2026/f83b03f7baf8/figure-5.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/acl-2026/f83b03f7baf8/figure-5.png)

*论文图 5。原论文 Figure 5：“Overview of the OMHBench pipeline. (1) Table Triplet Formation constructs table triplets that share the same entities yet having separate attributes.”。*

该图左侧显示从四大表格源到表格三元组，中间上部显示查找比较检索拼接成问答，中间下部显示文本经大模型、语音经大模型加 TTS、图像经绘图库分别生成，右侧显示同一问答展开为 6 条推理路径。质量控制报告基于原表派生事实问答验证与表重建比对均达 100% 一致，问题改写经 3 种大模型释义且词汇偏离度 0.32 高于 PAWS 的 0.13，语音经自动语音识别得词错率 0.03 字错率 0.02 可懂度 99.2 与失真比 21.0，支持转换保真但未测量人类听辨误判率。

### 评测条件：测什么、与谁比、输入顺序如何控制？

评测问题是 3 模态三跳问答能否按指定路径完成。对比对象是 13 个模型，含 Gemini 系列专有模型与 Qwen3-Omni 30B、Phi-4 Multimodal、Qwen2.5-Omni、OmniVinci、MiniCPM-o 2.6、Omni-AutoThink 等开源模型，支持显式推理的开思考模式。输入是每题一路文本加一路图像加一路语音，输出解析为离散答案按精确匹配计分，论文验证 300 加 300 抽样下精确匹配与人类及大模型裁判完全一致，因答案均为正整数。指标为 6 路准确率及其宏平均，方向越高越好；新增路径平衡分要求同题 6 路全对才计一组正确，方向越高表示对路径变化越鲁棒。

公平条件包括随机化 3 模态上下文的呈现顺序，以抵消输入顺序偏好；思维链基线外还测 Self-Ask、Least-to-Most、Plan-and-Solve 3 种多跳提示；另做输入顺序乘推理路径的 36 组合分析。硬件为至强 6338 加 80 GB A100，软件为 Python 3.10 与 PyTorch 2.6，随机种子 42。资源状态提醒：基准 HuggingFace 链接本次未能确认可达，复现前需先确认可达性，不可默认已公开。

### 主结果：谁领先、哪条路最难、平衡分说明什么？

核心比较问题是：在内容相同只变模态顺序时，各模型 6 路准确率与平衡分如何，条件是同一问答六变体与随机化输入顺序，指标方向均为越高越好。下表先看规模均衡性，再看主结果数字，阅读时先看行模型再看列路径，不要把单路高分推广为全模态能力。

| 基准规模 | 指标口径 | 总量 | 子集划分 | 路径数量 |
| --- | --- | --- | --- | --- |
| OMHBench | 题目总数 | 6144 题 | Connect 3072 题加 Reasoning 3072 题 | 6 路 |
| OMHBench-Connect | 操作链 | 固定链 | 查找比较检索 | 6 路等分 |
| OMHBench-Reasoning | 操作链 | 组合链 | 排序区间等加均值求和 | 6 路等分 |
| 领域分布 | 四领域 | 各 1536 题 | 金融经济气候营养 | 6 路等分 |
| 模态覆盖 | 3 模态 | 文图声 | 每题各用至少 1 次 | 6 路等分 |

上表说明总量 6144 题在 6 路与四领域上等分，两个子集各 3072 题，Connect 考单实体链接而 Reasoning 考集合聚合，这是后文难度差异的对照基础。规模数字由原文总量与子集句支撑，路径等分由置换设计保证。

| 模型 | 评测子集 | S-I-T 准确率 | T-S-I 准确率 | I-T-S 准确率 | 平均准确率加平衡分 |
| --- | --- | --- | --- | --- | --- |
| Gemini 3 Flash | Connect | 97.5 | 75.0 | 60.2 | 78.3 加 32.2 |
| Gemini 3 Flash | Reasoning | 55.9 | 49.6 | 40.0 | 49.4 加 8.6 |
| Qwen3-Omni 30B | Connect | 75.8 | 49.6 | 16.0 | 46.8 加 2.3 |
| Qwen3-Omni 30B | Reasoning | 27.3 | 14.6 | 2.7 | 15.0 加 0.0 |
| Gemini 2.0 Flash-lite 等弱模型 | 双子集 | 约 30 至 35 | 约 11 至 2 | 约 2 至 0 | 平均低于 20 加 0.0 |

上表主要收益是专有领先且 Qwen3-Omni 30B 为最强开源，但代价是路径敏感：同题换路可从 77% 跌至 16%，Reasoning 更难，最强也仅 49.4% 平均与 8.6 平衡分，多数开源近零。未胜出项是 Phi-4 等在语音在后路径接近零分，说明平均数掩盖了特定转移失败。

**准确率 × 路径平衡分：** 准确率分工是按 6 条路径分别统计答对比例再宏平均，反映单路能力上限；路径平衡分分工是同一问题 6 路变体全对才计一组正确，反映对路径变化的鲁棒性；搭配理由是高平均低平衡即暴露偏路依赖，组合意义是防止用擅长路径的单点成绩代替全模态接地能力。

平衡分进一步显示脆弱性：Connect 上 Gemini 3 Flash 平均 78.3 但 6 路全对仅 32.2，Reasoning 上平均 49.4 但全对仅 8.6；开源多为 0.0，表明单路评测不可靠。排名也会随路变化，如 Reasoning 上 Gemini 2.5 Pro 在 I-S-T 超 Gemini 3 Flash 而在 T-S-I 落后。

### 反证与拆解：捷径还在吗，哪一步卡住，提示能救吗？

本节按问题组织 3 组反证。第一问是捷径是否消除：按旧协议去掉一模态重测，OMHBench 几乎无可解案例，支持显式多跳设计有效，残留可解多为查找型靠关键词偶中。第二问是难度来源：按操作分组，前 5 强模型平均显示排序优于比较优于邻近优于区间，说明序数与两两比较尚可，数值邻域与区间约束更难；按领域看 Gemini 3 Flash 在经济最好营养最差，Reasoning 下 T-S-I 路极差达 21.8%，挑战路径放大领域差距。第三问是失败定位：768 样本分 a1-e1-a2-e2-a3 共 5 个阶段分析显示弱模型早在 e1 或 a2 失败，强模型多在 a2 处分化，文本图像互转与语音转出较稳，而转入语音的 I-S 与 T-S 最难，称为非对称全模态接地。

比较问题是旧基准捷径比例与均衡后掉点是否复现，公平条件是同探针模型与同改写语义，指标为可解比例与准确率差。下表概括反证数字，表中数值与单位写在同一格，表后解释代价。

| 对照维度 | 评价指标 | 旧基准表现 | 均衡或去模态后表现 | 本基准表现 |
| --- | --- | --- | --- | --- |
| OMU 捷径 | 可解比例越低越好 | 70~80% | 未报告 | 几乎无捷径 |
| MuMuQA 均衡 | 准确率越高越好 | 100% | controlled 下准确率下降 | 6 路等分 |
| MMQA 均衡 | 准确率越高越好 | 73% | drops by up to 18% | 6 路等分 |
| 提示优化 | 增益越高越好 | CoT 基线 | 3 种高级提示无一致增益 | 需跨模态训练 |
| 输入顺序 | 波动越小越好 | 12.5 percentage points | 随机化呈现 | 趋势仍稳但有噪 |

上表收益是新基准同时解决缺模态与偏路径两类失真，代价是高级提示 Self-Ask 等无一致提升，输入顺序即使固定路径仍带来最高达 12.5 percentage points 的波动，说明比较需随机化并报告方差。案例还显示模型有时报告语音缺失而实际语音存在，且弱模型存在误差累积，前跳错后跳连错。

### 边界在哪里：固定三跳与实体属性假设有何代价？

论文明确的局限是实体属性形式化与固定三跳链。为实现受控均衡与防捷径，问题被限制为可表达为显式实体属性关系且深度固定的推理，代价是不能覆盖更开放的多样推理模式，如自由问答、长链规划或需要外部知识的跳跃。领域虽覆盖 4 类真实表格，但均为结构化数值转写，语音为合成对话而非真实会议噪声，图像为程序生成图表而非自然照片，因此结论限于结构化数值的跨模态接地，不能推广到开放噪声场景。

未测量项也需点明：误判率分解、延迟、推理开销、输出帧率与成本均未报告，不能承诺这些量得到改善；转写质量指标高不等于人类听辨无误；总体趋势不等于每组每步成立，如语音在前虽平均更好但个别路径仍有交叉。相关性不等于因果，非对称接地可能源于编码器、数据配比或解码偏好，原文未做因果归因，待验证。

### 复现先做什么：数据、划分、采样与评测脚本要点？

复现先确认资源可达性。本次数据集链接状态为暂时不可达，应先重试官方地址并记录提交版本；若不可达，可按附录用雅虎财经、世界银行、Open-Meteo、美国农业部原始表格自建三元组，但需严格复刻 10 乘 3、属性互斥、比值不超 30、去派生列的筛选。划分上 Connect 与 Reasoning 各 3072 题，6 路各 1024 题，四领域各 1536 题，操作组合 Connect 一种而 Reasoning 32 种各 96 题，文本 24 场景、语音 22 场景、图像 10 图型、字体 20、颜色 20、语音 27 声线应保持多样性抽样。

采样与评测要点是：同一问答必须 6 路齐全以计算平衡分，输入 3 模态顺序随机化，零样本思维链不固定格式，答案解析为整数后精确匹配，思考预算 8192 仅对支持推理的模型开启。统计上报告 6 路分别准确率、宏平均与 6 路全对率，必要时加至少答对 k 路的曲线。硬件参考为单张 80 GB A100，种子 42。区分代码开源、权重下载与系统可运行：论文给出构造细节与提示词，但本次未确认基准下载可达，复现报告应写明本次未能确认可达而非已公开。

### 何时值得尝试这个基准与方法？

当你的研究问题是语音是否真被用上、换路是否仍稳定时，值得尝试 OMHBench。它适合检验 3 模态联合接地、路径鲁棒性、语音在后转移能力，以及 Connect 到 Reasoning 的难度爬坡。不适合作为开放对话或真实噪声语音的直接性能证明，也不适合用单路最高分宣称全模态胜利。

可复述的方法结论是：用共享实体锁定跨表跳跃，用独占属性锁定必访模态，用同一问答 6 路置换实现内容不变路径可比，用平衡分暴露平均数掩盖的偏路依赖。最强证据是内容相同只换模态顺序即出现数十点波动且语音在后最难，而高级提示无一致增益，支持瓶颈在跨模态表示转移而非提示不足。下一步验证应补真实语音噪声、自然图像、人类听辨基线，以及针对转入语音的训练方法，再报告延迟与成本后讨论部署取舍。

## 📐 原文公式与排版

以下展示论文原页中的数学表达区域，保留原始上下标、分式和符号排版。区域序号仅用于本文导航，不是论文公式编号。

[![原文数学表达区域 1，PDF 第 17 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/acl-2026/df2ef45a0e0a/figure-1.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/acl-2026/df2ef45a0e0a/figure-1.png)

区域 1 · [查看论文原页](https://aclanthology.org/2026.findings-acl.911.pdf#page=17)

[![原文数学表达区域 2，PDF 第 17 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/acl-2026/df2ef45a0e0a/figure-2.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/acl-2026/df2ef45a0e0a/figure-2.png)

区域 2 · [查看论文原页](https://aclanthology.org/2026.findings-acl.911.pdf#page=17)

[![原文数学表达区域 3，PDF 第 17 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/acl-2026/df2ef45a0e0a/figure-3.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/acl-2026/df2ef45a0e0a/figure-3.png)

区域 3 · [查看论文原页](https://aclanthology.org/2026.findings-acl.911.pdf#page=17)

另有 29 个候选区域因边界不明确或图片数量、尺寸限制未展开；请[查看完整论文](https://aclanthology.org/2026.findings-acl.911.pdf)中的原始排版。

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。
- 评分规则：type-aware-v1
- 评分模型：muse-spark-1.3-contributor
- 评分请求协议：openai_responses

---

[← 返回 acl-2026 论文汇总](/posts/conference-acl-2026/)
