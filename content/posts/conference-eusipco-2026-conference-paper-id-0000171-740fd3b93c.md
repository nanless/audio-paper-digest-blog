---
title: "COLOR-BASED EMOTION REPRESENTATION FOR SPEECH EMOTION RECOGNITION"
date: 2026-09-13
draft: false
description: "针对类别标签难表混合情绪、维度分数难直观解释的问题，该研究把日语表演性情绪语音标注为色相、饱和度、明度并用回归直接预测，留一说话人交叉验证下多任务学习在色相角误差约 29.7 度、饱和度与明度一致性相关系数约 0.560 与 0.803、六分类准确率 90.8% 上同时优于单任务，但结论限于表演性日语与小规模众包标注条件。"
tags: ["数据标注", "多任务学习", "语音", "语音情感识别"]
categories: ["eusipco-2026 论文"]
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_paper_id: "conference:eusipco:2026:conference-paper-id:0000171"
paper_digest_source_kind: conference
paper_digest_conference_id: "eusipco-2026"
paper_digest_conference_record_url: "https://eurasip.org/Proceedings/Eusipco/Eusipco2026/HTML/session-index/index.html"
paper_digest_conference_pdf_url: "https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0000171.pdf"
paper_digest_api_reader_contract: "beginner-researcher-v3"
paper_digest_api_reader_article_sha256: "78a6a07aae1593cb0fda12092c76db5496ff6941d4cd82dbeeda7cfdc06920ff"
paper_digest_api_reader_plan_sha256: "559770baf6ccd978532773628ccee6c76218dcf437dbbeadbdcadce8baeedda4"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings-v4"
paper_digest_api_reader_source_bindings_sha256: "74e09337f74f01aa0fd4ff10aeb328d25370702cee71f71be5fe18cb7f6dbbc1"
paper_digest_api_reader_source_table_count: 3
paper_digest_api_reader_source_formula_count: 0
paper_digest_api_reader_structured_artifacts_sha256: "ef396bbfe89db50a06d299001b8e4b8c4ce4d6e0818baa0a95b106448dbbdd55"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity-v1"
paper_digest_api_reader_author_identity_sha256: "06efc5df2228b59dec38dd3cb658f70a646b53bc26fe63251310b71a26338702"
paper_digest_api_reader_author_count: 3
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity-v1"
paper_digest_api_reader_resource_identity_sha256: "b59a636cda5e38790e8f5dfa7d2b54f53129158a968ccaa704f34655b7f245d9"
paper_digest_api_reader_resource_count: 1
paper_digest_api_reader_decision_projection: "api-reader-decision-projection-v2"
paper_digest_scoring_contract: "api-scoring-audit-v2"
paper_digest_taxonomy_contract: "paper-taxonomy-flat-tags-compat-v1"
paper_digest_taxonomy_selection_contract: "paper-taxonomy-selection-v1"
paper_digest_taxonomy_registry_version: "paper-taxonomy-v1"
paper_digest_taxonomy_registry_sha256: "15c82a567ce5a55dc1175684ed08b64c158558639d9c8fb822c9587ec32a8778"
paper_digest_taxonomy_concepts: [{"facet":"method","id":"method.data-annotation","label":"数据标注"},{"facet":"method","id":"method.multitask","label":"多任务学习"},{"facet":"signal","id":"signal.speech","label":"语音"},{"facet":"task","id":"task.emotion-recognition","label":"语音情感识别"}]
paper_digest_primary_task: "语音情感识别"
paper_digest_primary_method: "多任务学习"
paper_digest_score: 5.8
paper_digest_rank_bucket: "前50%"
paper_digest_document_type: "方法研究"
paper_digest_conference_structure: replayable-pdf-layout-v1
---

# 📄 用颜色说情绪：把语音情绪变成可回归、可解释的色相、饱和度与明度

> 英文题目：*COLOR-BASED EMOTION REPRESENTATION FOR SPEECH EMOTION RECOGNITION*

> 会议身份：`conference:eusipco:2026:conference-paper-id:0000171`


> ✅ 来源为官方会议 PDF；表格与 Figure 按原文证据绑定。PDF 公式以原页区域图片展示，未冒称作者原始 TeX。

> 会议来源：[官方记录](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/HTML/session-index/index.html) · [官方 PDF](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0000171.pdf)

标签：#数据标注 #多任务学习 #语音 #语音情感识别

评分：**5.8/10** | 创新 1.3/2 | 技术严谨 1.1/1.5 | 实验充分 1.0/1.5 | 清晰度 0.8/1 | 影响力 0.8/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 0.5/1.5

排名：前50% | 文档类型：方法研究

## 👥 作者与机构

- Nagase, Ryotaro：机构信息未能从会议 PDF 纯文本可靠映射
- Takashima, Ryoichi：机构信息未能从会议 PDF 纯文本可靠映射
- Yamashita, Yoichi：机构信息未能从会议 PDF 纯文本可靠映射

## 📌 核心摘要

语音情感识别需从语音声学证据输出情感状态，离散类别难以表达混合模糊情感，效价、唤醒度、优势度等维度分数又不够直观。本文先用众包界面为日语JVNV语料1615条语音采集颜色属性标签，每条10人标注，饱和度与明度取算术平均，色相取循环平均作为真值，再用传统声学特征或日语预训练HuBERT嵌入训练颜色回归器，最后以共享HuBERT编码器联合优化三属性回归与6分类情感分类。与类别或维度框架相比，该机制把情感表示为可直接显示为颜色的连续数值，兼顾可计算性与可视化可解释性。在留一说话人交叉验证下，Regular会话训练、Phrase-free会话验证测试，多任务在权重0.9时将6分类准确率从88.3%提升至90.8%，色相角度误差降至29.7度，饱和度与明度一致性相关系数分别达0.560和0.803。该结论目前仅适用于小规模日语表演语音与特定标注界面，尚未验证自发语音、跨语言与感知一致性。原文未披露训练硬件、推理延迟与部署成本。

## 🔗 开源与复现资源

- 模型相关资源：<https://huggingface.co/yky-h/japanese-hubert-base> — 暂时无法访问
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 输入是什么，要解决的情绪表示问题是什么？

这篇解读的输入是论文正文证据，目标是让刚进入语音、音乐、音频领域的研究生能复述方法与实验条件。必须保留的信息包括数据来源与划分、标注流程与聚合方式、回归与分类的模型安排、损失与评价指标方向、关键数字及其适用条件，输出是 1 篇可核对的技术解读，不做超出证据的效果承诺。

任务是语音情绪识别，也就是听一段语音判断说话人传达的情绪。传统路线有两条。第一条是类别路线，把语音判到快乐、愤怒、悲伤等预设类，好处是结论直白，代价是训练和推理都依赖固定类别，遇到混合情绪或边界不清的表达就难以安放。第二条是维度路线，预测效价、唤醒度、支配度等连续分数，能刻画更细的差别，但分数含义不直观，常需要领域知识才能解释高低代表什么。

**类别情绪识别 × 颜色属性回归：** 类别情绪识别的分工是把语音判到愤怒、快乐等预设离散类，易懂但装不下混合或模糊情绪；颜色属性回归的分工是把每句话映射为色相、饱和度、明度 3 个连续分数，保留程度差异并能直接可视化。二者搭配的理由是类别提供可核对的锚点，颜色提供连续可解释的刻度，组合意义在于同一段语音同时得到离散判断和连续颜色表示，为后续多任务互补留下接口。

论文提出第 3 种表示：颜色属性表示。白话说，就是让听众选一种颜色来代表听到的情绪，再把颜色拆成 3 个可计算的数。色相是颜色种类，用 0 度到 360 度的圆环表示，0 度对应红，120 度对应绿，240 度对应蓝，360 度回到红。饱和度是鲜艳程度，0% 到 100%，越低越灰，越高越鲜艳。明度是明亮程度，0% 到 100%，0% 是黑，越大越亮。

颜色既有数值，又能被人直接看见，因此作者希望它同时做到定量与直观，特别适合需要把情绪画出来给人看的场景，例如咨询记录回顾或在线学习状态提示。本研究作为第一步，只做日语表演性情绪语音，不碰自发对话或多语言泛化。

### 类别、维度与颜色三条路线各管什么？

同输入同目标的已有工作主要是类别语音情绪识别与维度语音情绪识别。类别工作用离散标签训练分类器，评价看准确率；维度工作用连续分数训练回归器，评价常用皮尔逊相关系数与一致性相关系数。论文把自己定位为新的表示路线，而不是在同一表示下刷更高分数，因此对照重点应是表示是否可学、是否与类别有稳定对应、是否能与分类互补，而不是简单宣布颜色路线取代前两条路线。

**维度情绪识别 × 颜色属性表示：** 维度情绪识别的分工是用效价、唤醒度、支配度等连续分数刻画细微差别，但数值含义需要领域知识才能解释；颜色属性表示的分工是用色相表颜色种类、饱和度表鲜艳程度、明度表明亮程度来承载情绪，数值对应人可直接感知的颜色。二者搭配的理由是都追求连续定量，但颜色把抽象维度换成可视直觉，组合意义在于为咨询、在线教育等需要直观展示情绪的场景提供更易沟通的输出形式。

论文还引用了影响标注界面设计的视觉研究。亥姆霍兹—科尔劳施效应指出饱和度升高时明度会被感知得更高，亨特效应指出明度升高时饱和度会被感知得更高。正因为饱和度与明度互相影响，作者没有让标注者分 2 次独立选择，而是提供一个可同时选饱和度与明度的界面，让标注者在看到最终合成颜色的前提下 1 次定稿。这个设计选择直接决定了后文众包界面的样子，也解释了为什么饱和度与明度要一起分析，而不是当成两个完全独立的感觉通道。

### 要验证的具体问题与输出形式是什么？

论文要回答 3 个可操作的问题。第一，人听日语情绪语音时选出的颜色是否与类别情绪存在稳定对应，还是随机发散。第二，这些颜色分数能否从语音信号直接回归出来，误差与相关性达到什么水平。第三，把颜色回归与六分类放在一个网络里多任务学习，是否对双方都有帮助，具体改善发生在哪些易混情绪对上。

输出形式有两种。回归输出是每句话的色相角、饱和度百分比、明度百分比，其中色相是环形变量，需要特殊处理；分类输出是 6 个类别之一。评价时色相看角误差，越小越好，定义为预测与真值差的绝对值与 360 度减该差值两者取小，再按句平均。饱和度与明度看皮尔逊相关系数与一致性相关系数，越大越好，其中一致性相关系数同时惩罚均值与方差偏移，比单纯相关更严。

分类看六分类准确率，越大越好。教学例子：若真值红在 0 度附近、预测在 350 度，直接相减是 350 度，但环上最短距离其实是 10 度，角误差取的就是 10 度，这就是环形评价与直线评价的区别。

### 从一句话到颜色分数的全流程是什么？

沿一个样本走完全程有助于建立依赖顺序。输入是一段日语情绪语音，可能是有词句的朗读，也可能是笑声、哭泣、尖叫等非言语发声。表示阶段把波形变成模型可用的向量，论文用了两类表示，一类是传统声学特征集，另一类是日语预训练语音模型的中间层嵌入。组件阶段分两条实验线，实验一比较支持向量回归与深度神经网络做颜色回归的能力，实验二用一个共享主干同时接回归头与分类头做多任务学习。目标阶段回归头逼近众包平均后的颜色分数，分类头逼近原始语料的 6 类标签。输出阶段得到色相角、饱和度、明度预测值，以及 1 个类别预测。

关键依赖是标注先行。没有每句话 10 人次的颜色标注，就没有回归真值；没有对色相做环形平均，就无法得到每句话的唯一色相标签；没有把语料按录制会话与说话人划分清楚，后续留一说话人交叉验证就无从谈公平。先理解数据与标签如何来，再看模型如何学，才不会把回归性能误读成模型单方面的功劳。

### 标注界面与标签聚合如何操作？

标注通过日本众包平台招募标注者完成，每句话由 10 名标注者独立听后选色。流程分两步。第一步选色相，界面给出 20 个选项，按 18 度间隔排成色块，指导语是选择最能代表语音所传情绪的色相。标注前不给任何情绪与颜色对应示例，完全依赖个人判断，避免示例把人引向固定答案。第二步同时选饱和度与明度，饱和度按 25% 间隔到 100%，明度按 20% 间隔到 100%，共 26 个瓦片块，其中 25 个排成 5 乘 5 网格，另加一个代表明度 0% 的选项。界面会显示合成后的最终颜色，标注者可反复修改直到满意。

**HuBERT 嵌入 × 支持向量回归：** HuBERT 嵌入的分工是把波形变成包含音色、韵律与内容信息的 utterance 级向量，本研究取日语预训练模型的第 6、9、12 层输出并做时间平均；支持向量回归的分工是对色相正余弦分量、饱和度、明度分别学一个回归器，用径向基核拟合标注均值。二者搭配的理由是自监督特征比传统声学特征更贴近情绪线索，而支持向量回归在小数据上稳定可调，组合意义是先验证颜色分数是否可从语音预测，再与端到端深度模型对照。

聚合时 3 种属性处理不同。饱和度与明度是直线量，直接按 10 人平均得到句级标签。色相是环形量，不能直接算术平均，否则 0 度与 350 度的平均会被误算成 175 度左右的绿色系，而环上真实中间应在 355 度附近的红色系。论文因此用循环均值与循环标准差处理色相，用常规标准差处理饱和度与明度。聚合后每句话恰好得到一个色相角、一个饱和度、一个明度，作为回归训练的真值。复述时要记住人数是每句 10 人，色相间隔是 18 度共 20 档，饱和度与明度是网格加零明度选项，这些都是复现标注必须对齐的细节。

### 回归与多任务的损失、冻结与优化如何安排？

实验一的训练分支持向量回归与深度网络两支。支持向量回归支把声学特征先做时间平均压成句向量，再为色相正弦、色相余弦、饱和度、明度各自训练独立回归器，色相预测时用反正切函数把正余弦合回角度。核取径向基函数，其余超参数在验证集上网格搜索。深度网络支把预训练语音模型与两层全连接回归头拼在一起，卷积层参数固定，只更新 Transformer 块，回归头与主干一起优化。单独训练指 1 次只预测一种颜色属性，联合训练指 1 次同时预测 3 种，论文报告单独训练略优，提示 3 种属性相对独立，同时学反而更难。

**颜色属性回归 × 类别情绪分类：** 颜色属性回归的分工是用一致性相关系数损失逼近众包标注的色相、饱和度、明度均值；类别情绪分类的分工是用交叉熵损失判到 6 个预设情绪类。二者搭配的理由是论文假设颜色分布与类别分布存在互补结构，例如悲伤与恐惧、愤怒与惊讶在平均色相上可分，组合意义是用一个加权总损失让回归头与分类头共享 HuBERT 主干，使一方成为另一方的辅助监督。

损失安排是理解多任务的关键。回归用一致性相关系数损失，目标是让预测与真值不仅走势一致，而且均值与方差也对齐，统计量按小批量计算。分类用交叉熵损失。总损失是两者的加权和，权重系数记为阿尔法，从 0.6 到 1.0 按 0.1 步进，阿尔法为 1.0 时退化为纯分类。优化器用 AdamW 加线性调度，学习率是 1 乘 10 的负 5 次方，批量 16，轮数 20。

数据增强只在训练集做变速扰动，系数从 0.9 到 1.1 按 0.05 步进，扩到 5 倍。原文没有报告回归与分类分支的梯度是否截断、回归头具体宽度与激活、网格搜索的具体范围，这些是复现时需要补记的缺项，不应从模型名字推定实现。

### 数据、划分、特征与评价条件是什么？

数据用的是日语情绪语音语料，包含有词内容与非言语发声，由 4 名专业演员录制，含常规会话与自由短语两个录制阶段。类别只有 6 类，常规阶段用于训练，自由短语阶段用于验证与测试，协议是留一说话人交叉验证，即每次留出一个说话人做测试，避免同一说话人同时出现在训练与测试中。训练数据经变速增强扩到 5 倍，验证与测试不增强。特征对照包括传统特征集与预训练模型第 6、9、12 层嵌入，深度模型固定卷积层、只调 Transformer 块。

下表要回答的问题是数据规模与类别是否均衡，公平条件是同一语料、同一 6 类划分，指标方向是样本数越多估计越稳，但类别不均会偏向多数类。表前说明已满足比较所需的上下文，表中数字直接来自原文连续句。

| 条件 | 指标 | 类别 | 样本数 | 总量 |
| --- | --- | --- | --- | --- |
| 日语表演性语料 | 句数 | 愤怒 | 249 | 1615 句 |
| 日语表演性语料 | 句数 | 厌恶 | 258 | 1615 句 |
| 日语表演性语料 | 句数 | 恐惧 | 265 | 1615 句 |
| 日语表演性语料 | 句数 | 快乐 | 280 | 1615 句 |
| 日语表演性语料 | 句数 | 悲伤 | 257 | 1615 句 |
| 日语表演性语料 | 句数 | 惊讶 | 306 | 1615 句 |

表后解释如下。总量 1615 句在情绪语料中属中小规模，好处是每句有 10 人颜色标注，代价是留一说话人后每折训练说话人更少，且演员表演风格会让颜色分布比自发语音更集中。惊讶 306 句最多，愤怒 249 句最少，类别差约 57 句，训练分类时多数类可能占优，复现时应保留原始分布并报告按类准确率，而不是只看总准确率。未评测的边界是自发对话、其他语言、其他年龄与录音条件，原文明确把这些列为未来工作。

本次资源状态需要如实交代。论文脚注给出的日语预训练模型链接在本次核对中未能确认可达，状态为暂时不可达，因此不能写当前可用或已公开，只能写本次未能确认可达。复现前应先解决权重可达性，或用同语种、同层数的可达模型替代并注明替换，这会影响与原文数字的直接可比性。

### 颜色与类别的对应分布显示了什么？

在看回归精度之前，先看人标的颜色本身是否有规律，这是判断颜色表示是否值得学的依据。论文报告色相的循环标准差按句平均为 57.3 度，说明标注倾向聚在相近色系如红橙或蓝紫，而不是均匀散开。饱和度标准差平均 21.9%，明度标准差平均 14.6%，说明两者也大体一致。平均色相按情绪分别为快乐 46 度、恐惧 275 度、惊讶 48 度、悲伤 242 度、厌恶 296 度、愤怒 343 度。分布上快乐与惊讶聚在 45 度附近的黄橙黄绿，愤怒聚在 0 度附近、均值约 340 度的红紫，恐惧悲伤厌恶聚在 270 度附近的蓝紫但平均方向各异。

下表要回答的问题是不同情绪的颜色均值与离散度是否支持可分性，公平条件是同批 10 人标注、同种聚合公式，指标方向是循环标准差越小越集中，均值角差越大越可能提供分类线索。

| 任务 | 指标 | 情绪条件 | 标注一致性 | 平均颜色 |
| --- | --- | --- | --- | --- |
| 色相标注 | 循环标准差 | 全情绪平均 | 57.3 度 | 快乐 46 度 |
| 色相标注 | 循环标准差 | 全情绪平均 | 57.3 度 | 恐惧 275 度 |
| 饱和度标注 | 标准差 | 全情绪平均 | 21.9% | 高唤醒偏高 |
| 明度标注 | 标准差 | 全情绪平均 | 14.6% | 正情绪偏高 |
| 色相标注 | 平均角 | 悲伤 | 聚蓝紫 | 242 度 |

表后解释如下。主要收益是色相分布随情绪偏移，为分类提供了额外线索，例如悲伤到恐惧、愤怒到惊讶在平均色相上可分，这与后文多任务减少这 2 对混淆的观察呼应。具体代价是饱和度与明度在低端稀疏，最终标签都在 20% 以上，原因是低饱和低明度下颜色变化难感知，标注者较少选用，这意味着回归模型在低区间的训练样本天然不足。未胜出项是恐惧、悲伤、厌恶三者在饱和度上都宽散在 20% 到 100%，仅靠饱和度难以区分三者，还需色相与明度联合。

**饱和度 × 唤醒度：** 饱和度的分工是度量颜色鲜艳程度，取值 0% 到 100%，越低越灰；唤醒度的分工是度量情绪激活强弱，高唤醒如快乐、惊讶、愤怒，低唤醒如恐惧、悲伤、厌恶。二者搭配的理由是论文发现高唤醒情绪的饱和度多集中在约 60% 以上，而低唤醒情绪分散在 20% 到 100% 之间，组合意义在于说明饱和度可能承载了与唤醒轴对齐的信息，但原文只是分布对齐的观察，不是因果证明。

饱和度与明度的情绪倾向也值得复述。高唤醒的快乐、惊讶、愤怒饱和度多高于约 60%，低唤醒的恐惧、悲伤、厌恶则宽散在 20% 到 100%，这支持饱和度与唤醒轴对齐。明度上快乐与惊讶集中在 80% 到 100%，愤怒在 50% 到 100%，恐惧悲伤厌恶在 20% 到 100%，正情绪偏高、负情绪偏低。论文用报告口吻描述这些分布，初学者应理解为相关性观察，不是颜色决定情绪的因果证明。

### 回归精度与多任务增益在什么条件下成立？

实验一比较特征与训练方式。支持向量回归中预训练嵌入优于传统特征集，特别是第 6 层嵌入比传统特征集的色相角误差低 10.4 度，说明自监督中间层对颜色回归有效。深度网络中单独训练略优于联合训练。跨模型看，支持向量回归的色相角误差更低，深度网络的饱和度与明度一致性相关系数更高，且深度网络直接优化一致性相关系数，皮尔逊与一致性之间的落差更小。总体最低色相角误差为 31.3 度，意味着预测仍落在相近色系而非跳到对侧颜色。饱和度与明度的最大一致性相关系数分别为 0.533 与 0.794，说明两者可从语音预测到一定程度，且明度明显更易学。

下表要回答的问题是单任务基线与多任务是否在同协议下比较、增益有多大，公平条件是同数据划分、同评价指标，指标方向是角误差越小越好、一致性相关系数与准确率越大越好。

| 任务 | 指标 | 回归单任务基线 | 多任务条件 | 多任务结果 |
| --- | --- | --- | --- | --- |
| 色相回归 | 角误差 | 31.3 度 | 联合分类 | 改善 1.6 度 |
| 饱和度回归 | 一致性相关 | 0.533 | 联合分类 | 提高 0.027 |
| 明度回归 | 一致性相关 | 0.794 | 联合分类 | 提高 0.016 |

表后解释如下。主要收益在权重 0.9 处同时出现，回归与分类都优于各自单任务，分类错误减少集中在悲伤误判为恐惧、愤怒误判为惊讶，而这 2 对的平均色相确有差异，这支持颜色与类别互补的判断。具体代价是增益幅度不大，色相 1.6 度、饱和度 0.027、明度 0.016、准确率 2.5 个百分点，且随权重增大回归指标单调走强，说明结果对权重敏感，换权重或换折可能变化。未胜出项是联合训练颜色三属性不如单独训练，提示三属性相对独立，硬绑在一起学反而更难。

散点描述也显示快乐惊讶的色相聚在 36 度到 72 度，悲伤恐惧散在零下 144 度到零下 108 度，明度上恐惧悲伤厌恶在 0.5 到 0.6、愤怒在 0.7 到 0.8、快乐惊讶在 0.9 到 1.0，模型输出大体跟随了标注分布，但原文只给区间描述，没有逐类误差，不宜推广为每类都准。

### 哪些结论不能推广，缺了哪些验证？

论文直接报告的是表演性日语、中小规模、众包 10 人标注条件下的结果，有限解释是颜色与唤醒、正负价态的对齐，待验证的是颜色表示能否用于自发语音、英语等其他语言、咨询与客服等真实部署。演员表演会让颜色更集中，众包听众的个人色彩联觉差异、耳机与环境差异、界面色块的呈现差异都可能影响标签，但原文没有量化这些噪声源。低饱和低明度样本稀少，模型在该区间的回归误差可能更大，但原文没有分区间报告误差。

未测量的量不能承诺改善。论文没有报告误判率的人感评估、推理延迟、模型参数量与训练耗时，也没有报告跨语料、跨说话人、跨录音设备的泛化，因此不能说颜色路线更快、更省或更公平。相关性不等于因果，饱和度随唤醒升高而偏高，不代表调高饱和度就能改变情绪判断。多任务增益只在特定权重与特定易混对上展示，没有显著性检验与多随机种子方差，总体趋势不等于每折每类都成立。引用图注与正文时只能转述分布区间与均值方向，不能声称看到像素级的曲线形状或模块位置，因为本次没有收到可核对的图像像素。

### 要复现应先固定哪些步骤与参数？

复现先做数据与标签，再做模型与评价。数据侧固定语料版本、常规阶段做训练、自由短语阶段做验证与测试、留一说话人交叉验证、变速 0.9 到 1.1 按 0.05 步进扩 5 倍。标注侧固定每句 10 人、色相 20 档按 18 度间隔、饱和度按 25% 间隔、明度按 20% 间隔、26 瓦片加零明度选项、同时选饱和度与明度并可预览修改、不给对应示例，聚合时色相对角度做循环平均、饱和度与明度做算术平均。

模型侧固定传统特征与预训练模型层号、时间平均成句向量、支持向量回归用径向基核并在验证集网格搜索、深度网络固定卷积层只调 Transformer 块、回归头两层全连接、学习率 1 乘 10 的负 5 次方、批量 16、轮数 20、优化器与线性调度。评价侧固定色相用角误差、饱和度与明度用皮尔逊与一致性相关系数、分类用六分类准确率，并保留基线与权重扫描从 0.6 到 1.0 的结果。

信息条件上注意三点。第一，权重链接本次未能确认可达，需先解决下载或注明替代模型，不可写已公开可用。第二，原文未给出回归头宽度激活、网格范围、随机种子与硬件预算，复现报告应明确这些为缺项并记录自选值。第三，百分点与相对百分比不同，准确率从 88.3% 到 90.8% 应写高 2.5 个百分点，不写提高 2.5%。先跑通单任务回归与纯分类基线，再扫权重看多任务曲线，是最省力的核对顺序。

### 何时值得尝试这种表示，还需补哪项验证？

当任务需要把情绪连续化又要让人一眼看懂时，颜色表示值得尝试，例如咨询会话回顾、在线学习状态看板、客服质检的可视化标注。它的价值不在取代类别或维度，而在多给一个可回归、可画图的连续通道，并在本研究的条件下对易混类别有辅助作用。当任务只要求高精度分类、有严格延迟预算或已有成熟维度体系时，不必为颜色另起标注管线，因为众包颜色标注、环形聚合与权重调参都会增加成本。

还需补的验证很具体。第一，在自发语音与另一语言上重做标注与回归，看均值色相方向与饱和度唤醒对齐是否保留。第二，分区间报告低饱和低明度的回归误差，看稀疏区间是否需要加权或增采。第三，做多随机种子与显著性检验，看权重 0.9 处的增益是否稳定。第四，补人评实验，看颜色可视化是否真能帮助咨询师或教师更快更准地理解情绪，而不是只看相关系数上升。把这些补齐后，才能判断颜色情绪表示是特定语料下的有趣对应，还是一条可部署的通用情绪输出。

## 📐 原文公式与排版

以下展示论文原页中的数学表达区域，保留原始上下标、分式和符号排版。区域序号仅用于本文导航，不是论文公式编号。

[![原文数学表达区域 1，PDF 第 2 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/d25556cda9ba/figure-1.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/d25556cda9ba/figure-1.png)

区域 1 · [查看论文原页](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0000171.pdf#page=2)

[![原文数学表达区域 2，PDF 第 2 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/d25556cda9ba/figure-2.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/d25556cda9ba/figure-2.png)

区域 2 · [查看论文原页](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0000171.pdf#page=2)

[![原文数学表达区域 3，PDF 第 2 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/d25556cda9ba/figure-3.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/d25556cda9ba/figure-3.png)

区域 3 · [查看论文原页](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0000171.pdf#page=2)

[![原文数学表达区域 4，PDF 第 2 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/d25556cda9ba/figure-4.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/d25556cda9ba/figure-4.png)

区域 4 · [查看论文原页](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0000171.pdf#page=2)

[![原文数学表达区域 5，PDF 第 2 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/d25556cda9ba/figure-5.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/d25556cda9ba/figure-5.png)

区域 5 · [查看论文原页](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0000171.pdf#page=2)

[![原文数学表达区域 6，PDF 第 2 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/d25556cda9ba/figure-6.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/d25556cda9ba/figure-6.png)

区域 6 · [查看论文原页](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0000171.pdf#page=2)

[![原文数学表达区域 7，PDF 第 2 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/d25556cda9ba/figure-7.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/d25556cda9ba/figure-7.png)

区域 7 · [查看论文原页](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0000171.pdf#page=2)

[![原文数学表达区域 8，PDF 第 4 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/d25556cda9ba/figure-8.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/d25556cda9ba/figure-8.png)

区域 8 · [查看论文原页](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0000171.pdf#page=4)

[![原文数学表达区域 9，PDF 第 4 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/d25556cda9ba/figure-9.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/d25556cda9ba/figure-9.png)

区域 9 · [查看论文原页](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0000171.pdf#page=4)

[![原文数学表达区域 10，PDF 第 4 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/d25556cda9ba/figure-10.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/d25556cda9ba/figure-10.png)

区域 10 · [查看论文原页](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0000171.pdf#page=4)

[![原文数学表达区域 11，PDF 第 4 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/d25556cda9ba/figure-11.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/d25556cda9ba/figure-11.png)

区域 11 · [查看论文原页](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0000171.pdf#page=4)

另有 7 个候选区域因边界不明确或图片数量、尺寸限制未展开；请[查看完整论文](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0000171.pdf)中的原始排版。

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。
- 评分规则：type-aware-v1
- 评分模型：muse-spark-1.3-contributor
- 评分请求协议：openai_responses

---

[← 返回 eusipco-2026 论文汇总](/posts/conference-eusipco-2026/)
