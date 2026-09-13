---
title: "OmniSonic: Towards Universal and Holistic Audio Generation from Video and Text"
date: 2026-09-13
draft: false
description: "针对视频配音只做可见环境声、做不了语音与画外声共存的问题，OmniSonic 用视频加文本联合条件的流匹配扩散与三路交叉注意力加门控融合，在自建的三场景基准上同时生成语音与环境声，主观与客观指标报告全面领先，但时间同步仍弱于带细粒度同步视觉特征的基线。"
tags: ["基准测试", "流匹配", "环境声", "语音", "视频到声音生成"]
categories: ["cvpr-2026 论文"]
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_paper_id: "conference:cvpr:2026:conference-paper-id:Pian_OmniSonic_Towards_Universal_and_Holistic_Audio_Generation_from_Video_and_CVPR_2026_paper"
paper_digest_source_kind: conference
paper_digest_conference_id: "cvpr-2026"
paper_digest_conference_record_url: "https://openaccess.thecvf.com/content/CVPR2026/html/Pian_OmniSonic_Towards_Universal_and_Holistic_Audio_Generation_from_Video_and_CVPR_2026_paper.html"
paper_digest_conference_pdf_url: "https://openaccess.thecvf.com/content/CVPR2026/papers/Pian_OmniSonic_Towards_Universal_and_Holistic_Audio_Generation_from_Video_and_CVPR_2026_paper.pdf"
paper_digest_api_reader_contract: "beginner-researcher-v3"
paper_digest_api_reader_article_sha256: "9296d33f0d2c046734773a8adb3f4317ae4cf64b388a6ad5f93df56fdb8bb883"
paper_digest_api_reader_plan_sha256: "f8349913896356af784b396db5266667c773f761c886b623f5ddd5c4d37d2895"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings-v4"
paper_digest_api_reader_source_bindings_sha256: "7a430f8182fe8a6b510d7d66c8a65348918fa05df88cb4106616426826a2f1d1"
paper_digest_api_reader_source_table_count: 3
paper_digest_api_reader_source_formula_count: 0
paper_digest_api_reader_structured_artifacts_sha256: "ba962e2a606c8c1beda27a6506b7fcc16bbaf5b43857a37a8e836eb8e61469c1"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity-v1"
paper_digest_api_reader_author_identity_sha256: "22bd86c28e620f31be741cbdab43405bfe3952cfb76c1ca55471542f80756b17"
paper_digest_api_reader_author_count: 7
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity-v1"
paper_digest_api_reader_resource_identity_sha256: "0ba7b826169b274bc7609184f1874a78f608209029d5d55457359e25880715ae"
paper_digest_api_reader_resource_count: 1
paper_digest_api_reader_decision_projection: "api-reader-decision-projection-v2"
paper_digest_scoring_contract: "api-scoring-audit-v2"
paper_digest_taxonomy_contract: "paper-taxonomy-flat-tags-compat-v1"
paper_digest_taxonomy_selection_contract: "paper-taxonomy-selection-v1"
paper_digest_taxonomy_registry_version: "paper-taxonomy-v1"
paper_digest_taxonomy_registry_sha256: "15c82a567ce5a55dc1175684ed08b64c158558639d9c8fb822c9587ec32a8778"
paper_digest_taxonomy_concepts: [{"facet":"artifact","id":"artifact.benchmark","label":"基准测试"},{"facet":"method","id":"method.flow-matching","label":"流匹配"},{"facet":"signal","id":"signal.environmental","label":"环境声"},{"facet":"signal","id":"signal.speech","label":"语音"},{"facet":"task","id":"task.video-to-audio","label":"视频到声音生成"}]
paper_digest_primary_task: "视频到声音生成"
paper_digest_primary_method: "流匹配"
paper_digest_score: 7.1
paper_digest_rank_bucket: "前50%"
paper_digest_document_type: "方法研究"
paper_digest_conference_structure: replayable-pdf-layout-v1
---

# 📄 画面内外都要出声：OmniSonic 如何把语音和环境声放在同一视频里生成

> 英文题目：*OmniSonic: Towards Universal and Holistic Audio Generation from Video and Text*

> 会议身份：`conference:cvpr:2026:conference-paper-id:Pian_OmniSonic_Towards_Universal_and_Holistic_Audio_Generation_from_Video_and_CVPR_2026_paper`


> ✅ 来源为官方会议 PDF；表格与 Figure 按原文证据绑定。PDF 公式以原页区域图片展示，未冒称作者原始 TeX。

> 会议来源：[官方记录](https://openaccess.thecvf.com/content/CVPR2026/html/Pian_OmniSonic_Towards_Universal_and_Holistic_Audio_Generation_from_Video_and_CVPR_2026_paper.html) · [官方 PDF](https://openaccess.thecvf.com/content/CVPR2026/papers/Pian_OmniSonic_Towards_Universal_and_Holistic_Audio_Generation_from_Video_and_CVPR_2026_paper.pdf)

标签：#基准测试 #流匹配 #环境声 #语音 #视频到声音生成

评分：**7.1/10** | 创新 1.6/2 | 技术严谨 1.3/1.5 | 实验充分 1.1/1.5 | 清晰度 0.8/1 | 影响力 1.1/1.5 | 开源 0.2/1.5 | 可复现 0.1/0.5 | 工程/实践 0.9/1.5

排名：前50% | 文档类型：方法研究

## 👥 作者与机构

- Weiguo Pian：机构信息未能从会议 PDF 纯文本可靠映射
- Saksham Singh Kushwaha：机构信息未能从会议 PDF 纯文本可靠映射
- Zhimin Chen：机构信息未能从会议 PDF 纯文本可靠映射
- Shijian Deng：机构信息未能从会议 PDF 纯文本可靠映射
- Kai Wang：机构信息未能从会议 PDF 纯文本可靠映射
- Yunhui Guo：机构信息未能从会议 PDF 纯文本可靠映射
- Yapeng Tian：机构信息未能从会议 PDF 纯文本可靠映射

## 📌 核心摘要

通用全景音频生成以静音视频帧、环境描述文本与语音转写为输入，输出同时包含屏上与屏外环境声及语音的完整声景，难点在于跨域异构声源的语义解耦、语音内容准确性与多源混合的时序连贯性。该方法先用环境编码器、语音编码器与视觉编码器分别提取三类条件表征，再以扩散隐变量为查询经三路交叉注意力并行查询屏上环境、屏外环境与语音条件，并仅对视觉token段施加旋转位置编码以注入时序对齐线索。然后由混合专家门控按上下文动态加权融合三路输出，并送入流匹配扩散主干与变分自编码器声码器重建波形。与仅建模环境声的VinTAGe、MMAudio和HunyuanVideo-Foley相比，关键差异在于将语音显式建模为与视频绑定的第三条件分支并以门控自适应平衡语音与环境影响，从而在混合场景保持语义完整与自然融合。在UniHAGen-Bench基准评测下，OmniSonic的FAD指标为3.07，低于VoiceLDM的FAD指标3.58。该结论适用边界受限于人工按信噪比混合的VGGSound与LRS3构建的1003个评测样本，对真实野外多说话人与强混响的外推尚未验证。原文未披露训练、推理或部署成本。

## 🔗 开源与复现资源

- 演示资源：<https://weiguopian.github.io/OmniSonic_> — 链接不可用（HTTP 404）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 输入是什么，要输出什么，哪些信息必须保留？

这篇论文要解决的是给无声视频配出完整声音的问题。输入有两类。第一类是视频帧序列，提供谁在画面里、嘴是否在动、场景是否变化。第二类是文本，细分为三份：画面内环境声描述、画面外环境声描述、语音转写文本。输出是一段与视频时长对应的波形，里面可能同时包含语音和一种或多种环境声。

举例来说，一个教学例子是：画面中有人在说话，文本同时要求画外有鸟叫，模型必须生成与唇动同步且内容与转写一致的语音，同时生成与鸟叫描述一致的背景声。
必须保留的信息包括 3 组对齐关系。第一是时间对齐，语音起止与说话人可见时段对应，环境声事件与视频动作对应。第二是语义对齐，环境声符合各自描述，语音内容忠于转写。第三是来源区分，画面内条件与视觉绑定，画面外条件不依赖视觉，只能靠文本生成。

论文把同时满足这三点的任务命名为通用完整音频生成，简称 UniHAGen。后续所有方法与实验都围绕这 3 组对齐展开。项目页在原文中给出链接，但本次资源状态显示该演示链接当前不可用，写作时不能将其当作可验证的代码或试听证据。

### 已有路线各卡在哪里，为什么需要统一语音与环境声？

第一条路线是视频到音频生成。早期有用生成对抗网络或自回归模型的做法，后来以 Diff-Foley、Frieren 为代表的隐空间扩散模型在时间连贯与真实感上更好，再后来 MMAudio、MultiFoley、HunyuanVideo-Foley 引入多模态扩散 Transformer 增强语义与同步。这条路线的主要局限按原文归纳是只做画面内可见声，对画外声建模不足。
第二条路线是文本到音频生成。从基于离散音频编解码标记的方法，到 AudioLDM 系列为代表的隐扩散模型，感知质量与多样性明显提升，但纯文本输入缺少视觉 grounding，难以区分声源在不在画面里。

第 3 条是视频加文本到音频的完整场景尝试，以 VinTAGe 和 SonicVisionLM 为代表，可以用视频做画面内、用文本控制画面外，但原文指出它们仍限于非语音环境声，做不出高质量语音。第四条是环境语音合成，如 VoiceLDM 与 VoicEdit 类工作，能在预设声学条件下合成语音，但只用文本、视觉 grounding 缺失，且声学环境假设简单。
因此缺口很明确：当语音与环境声共存且分属画面内外时，没有一个联合范式能同时推理异构声域。

UniHAGen 就是为补这个缺口定义的任务，它不是简单把语音合成与环境声生成拼接，而是要求在同一扩散过程中联合推理。

### UniHAGen 把哪些场景定为必测，为什么是这三个？

UniHAGen 定义了 3 个代表性场景。场景一是画面内环境声加画外语音，考验模型在视觉锚定的背景上叠加不可见语音的能力。场景二是画面内语音加画外环境声，考验唇动同步的语音与文本指定的背景能否共存，这也是图 1 所画的例子。场景三是画面内环境声加画外环境声加画外语音，三源混合，考验最复杂的分解与融合。3 个场景覆盖了语音在画内或画外、环境声单个或多个的组合，学习时可以先理解前两个两源问题，再过渡到三源问题。

从术语分工看，画面内声音指与可见视频帧在时间与语义上对齐的可定位声源，画面外声音指仅由文本描述约束的不可见声源；两者必须组合的原因是完整听觉场景要同时解释可见动作与不可见上下文，UniHAGen 因此要求在同一时间轴上联合生成这两类声音。

**画面内声音 × 画面外声音：** 画面内声音指发声源在视频帧中可见、需要与动作和唇动对齐的声音，画面外声音指发声源不可见、只能靠文本描述指定的声音，二者搭配的理由是完整听觉场景必须同时解释可见证据和不可见上下文，组合意义在于模型必须学会把视觉对齐与文本服从分配到同一时间轴的不同声源上。

下面这张任务示意图用一个具体样本走完输入到约束的对应关系，适合初学者先建立画面与文本如何分工的直觉。

> **看图路径：** 1. 先看左侧虚线框内的三类输入：视频帧、语音转写文本与画外声描述；2. 再看中间 OmniSonic 方块到右侧波形的单向箭头；3. 最后沿三条虚线核对右侧两类图标分别对应哪一句输入约束

[![原论文 Figure 1：Illustration of the proposed Universal Holistic Audio Generation (UniHAGen) task.](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/5e599b57b16f/figure-1.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/5e599b57b16f/figure-1.png)

*论文图 1。原论文 Figure 1：“Illustration of the proposed Universal Holistic Audio Generation (UniHAGen) task.”。*

图中左侧把视频帧、语音转写与画外声描述放在同一输入框，中间是 OmniSonic 模块，右侧输出一段波形并分解为说话人图标与鸟图标。连接输入与输出的 3 条虚线分别标注时间与语义对齐、内容正确、语义对齐，含义是：语音既要与视频帧在时间与语义上对齐，又要在内容上忠于转写；鸟叫声则要与画外描述在语义上对齐。这种画法把必须保留的 3 组对齐关系可视化了，后续方法中的 3 路条件与门控正是为了同时满足这 3 条约束。

### OmniSonic 的全景是什么，一个样本如何走完输入到输出？

OmniSonic 是一个在音频隐空间做流匹配的扩散框架。先沿一个场景二样本走一遍：输入为说话人视频帧、语音转写、空的画面内环境描述占位符与鸟叫的画外环境描述。视频帧经 CLIP 视觉编码器得到视觉特征，转写经 SpeechT5 加可微时长扩展器得到拉长后的语音隐序列，两份环境描述经 FLAN-T5 得到环境文本嵌入。与此同时，原始波形经短时傅里叶变换转梅尔频谱，再经 AudioLDM 的预训练音频变分自编码器编码为隐变量。

训练时在噪声与真实隐变量之间做线性插值并学习速度场，推理时从噪声出发解常微分方程得到去噪隐变量，再经变分自编码器解码与 HiFi-GAN 声码器还原波形。
条件编码器的分工在原文有明确安排：环境描述编码器与视觉编码器在训练时冻结，语音转写编码器与可微时长扩展器可训练。这种安排使语义与视觉表征保持稳定，而语音侧可以适配时长与发音需求。

扩散骨干由多个 TriAttn-DiT 块堆叠而成，每个块内先做帧对齐的自适应层归一化，再做 3 路交叉注意力与门控融合，最后预测当前时刻的速度。
下图把上述全景分为总体与单块两部分，读图时重点看条件从哪里进入、噪声隐变量从哪里进入。

> **看图路径：** 1. 先沿左侧输入经 CLIP、SpeechT5 加时长器、FLAN-T5 到中间堆叠模块的主路径看条件流向；2. 再看右侧单模块内底部噪声隐变量与时间步汇入自注意力的位置；3. 最后对比三组文本加视觉拼接体进入交叉注意力与门控加权的位置

[![原论文 Figure 2：(A) Overview of our proposed OmniSonic, which mainly consists of an environmental text encoder…](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/5e599b57b16f/figure-2.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/5e599b57b16f/figure-2.png)

*论文图 2。原论文 Figure 2：“(A) Overview of our proposed OmniSonic, which mainly consists of an environmental text encoder (FLAN-T5), a speech transcription encoder (SpeechT5), a visual encoder (CLIP visual…”。*

左半部分显示视频帧进入 CLIP、转写进入 SpeechT5 加时长器、两份环境描述进入 FLAN-T5，4 组嵌入与加噪音频隐变量、时间步 1 起进入堆叠的 TriAttn-DiT 块。右半部分显示单个块内部下方是噪声隐变量与时间步加视觉特征的入口，中间是自注意力与交叉注意力，上方是输出。颜色上环境标记、语音标记与视觉标记是分开的，含义是 3 类条件在进入注意力前保持独立身份，只在门控处做加权融合。这张图是复述方法的总纲，后面两节分别展开单块内的归一化与注意力计算。

### TriAttn-DiT 块内做了哪三步计算，条件如何拼接？

第一步是帧对齐自适应层归一化。输入为视觉条件与时间步嵌入，先把视觉条件投影到与时间步同维并逐元素相加，再经投影与最近邻上采样得到与音频隐变量时间分辨率 1 致的逐帧缩放与平移参数。这些参数调制块内的层归一化，使去噪过程能感知视频的帧级节奏。原文沿用了 MMAudio 类工作中的帧对齐思想，目的是增强音画同步。
第二步是 3 路交叉注意力。

关键操作是视觉特征与文本的拼接归属判断。当画面内环境描述非空时，视觉特征拼到画面内环境嵌入上，画面外与语音侧补零占位；当画面内环境描述为空占位符时，视觉特征拼到语音嵌入上，以增强可见说话人与生成语音的对齐。拼接后只对视觉片段施加旋转位置编码，文本部分保持不变，再让音频隐变量作为查询分别与 3 组拼接体做交叉注意力，得到三份 attended 隐变量。

**流匹配 × 扩散骨干：** 流匹配负责定义从高斯噪声到音频隐变量的连续速度场学习目标与常微分方程采样过程，扩散骨干 TriAttn-DiT 负责在每个去噪时刻预测该速度场，二者搭配是因为前者给出稳定训练与快速采样的数学路径，后者提供注入多条件的位置，组合后条件控制直接作用于速度预测。

**3 路交叉注意力 × 混合专家门控：** 3 路交叉注意力分工是让同一噪声音频隐变量分别去查询画面内环境文本、画面外环境文本和语音转写 3 组条件，混合专家门控分工是按 3 组条件的平均表征算出 3 个归一化权重再做加权求和，搭配理由是 3 路并行保留异构语义、门控解决每步该听谁的问题，组合意义是各层都能动态重平衡语音与环境声的贡献。

**帧对齐自适应层归一化 × 旋转位置编码：** 帧对齐自适应层归一化负责把 CLIP 视频特征与时间步嵌入相加后再上采样为逐帧的缩放和平移参数，用来调制音频隐变量的分布，旋转位置编码负责只给音频查询和文本拼接体中的视觉片段注入相对时间位置，搭配理由是前者做粗粒度的帧率对齐、后者做注意力内的细粒度时序对应，组合后语义来自文本、时间来自视觉。

**环境文本编码器 × 语音转写编码器：** 环境文本编码器用冻结的 FLAN-T5 把画面内与画面外环境描述编码为语义嵌入，语音转写编码器用可训练的 SpeechT5 加可微时长扩展器把转写文本拉长到与音频时长匹配的隐序列，前者分工是保留事件语义、后者分工是保留语言内容与可发音时长，搭配后扩散模型才能同时收到要说什么和背景里有什么。

第三步是混合专家门控融合。对 3 组原始条件分别沿序列取平均得到单个代表标记，拼接后经轻量多层感知机与 Softmax 得到 3 个归一化权重，再对三份 attended 隐变量做加权求和，得到该时刻的速度预测。每个块都有独立门控，因此不同深度与不同去噪时刻可以动态调整对语音与环境的侧重。这种设计直接对应 UniHAGen 需要在同一时间轴上平衡多声源的要求。

### 训练数据如何合成，监督信号从哪里来？

由于没有现成数据集同时覆盖三场景，论文用公开数据合成训练样本。环境声视频来自 VGGSound，语音视听来自 LRS3，额外引入 CommonVoice 纯语音文本语料以丰富语音内容与泛化能力。关键清洗动作是去掉 VGGSound 中与语音相关的类别，并删除描述中含语音相关关键词的片段，使剩余片段主要代表非语音环境声。
混合规则按场景组织。场景一取环境声视频做画面内，随机取一段语音做画外混合。

场景二取 LRS3 说话人视频做画面内语音，随机取 VGGSound 环境声混合；场景三取画面内环境视频，再叠加一个画外环境声与一个画外语音，形成多源。每条训练样本包含混合波形、对应环境描述与语音转写、视频帧，混合时在随机信噪比下进行以增加声学多样性。监督来源是流匹配目标，即预测插值路径上的真实速度，计算在音频隐空间进行。原文未报告优化器类型、学习率、步数与硬件预算等训练细节，这是复现时需要补齐的缺项，不能从模型名称推定。

下表整理训练与评测的数据规模与场景划分，阅读时注意训练是合成混合、评测是人工筛选且与训练无重叠。

| 数据用途 | 数据来源与场景 | 规模与划分 | 混合与清洗条件 | 文本条件 |
| --- | --- | --- | --- | --- |
| 训练混合 | VGGSound 环境视频 | 约 195K 样本 | 去语音类并删含语音关键词描述，随机信噪比混合 | 环境描述 |
| 训练混合 | LRS3 说话人视频 | 约 33K 样本 | 按场景与环境声或语音随机混合 | 语音转写 |
| 训练混合 | CommonVoice 纯语音 | 约 1.67M 样本 | 增强语音内容多样性 | 语音转写 |
| 基准评测 | 场景 1 画面内环境加画外语音 | 300 样本 | 测试集来源人工筛选，与训练无重叠 | 环境描述加转写 |
| 基准评测 | 场景 2 画面内语音加画外环境 | 401 样本 | 测试集来源人工筛选，与训练无重叠 | 环境描述加转写 |
| 基准评测 | 场景 3 三源混合 | 302 样本 | 测试集来源人工筛选，与训练无重叠 | 两份环境描述加转写 |

表后需要明确代价与边界。

合成混合的好处是规模大、对齐明确，代价是随机信噪比混合与真实共录的声学交互仍有差距，例如混响、遮蔽与说话人朝向等细节未必被合成覆盖。评测总量 1003 条在三场景间大致均衡，但场景二样本略多，跨场景平均时需注意聚合方式。原文未说明信噪比的具体采样区间与混合响度归一化细节，复现时应先固定这两项再谈指标可比性。

### 评测要回答什么问题，基线与指标条件是否一致？

评测围绕 4 个问题组织：生成质量是否好、语义是否对、语音内容是否正确、时间是否同步。客观指标包括音频距离 FAD 越低越好、平均 KL 散度 MKL 越低越好、音频文本分 AT 与音画分 AV 越高越好及其均值、词错率 WER、字错率 CER、音素错率 PER 越低越好、去同步分数 DeSync 越低越好。主观指标为整体质量、环境忠实度、语音忠实度、时间对齐四项平均意见分，越高越好。
基线覆盖 AudioLDM 2 及其变体、VoiceLDM、VinTAGe、MMAudio、HunyuanVideo-Foley。按原文分析，它们的运行条件并不完全一致：VinTAGe、MMAudio、HunyuanVideo-Foley 主要做环境声，缺少显式语音建模。

VoiceLDM 只用文本、无视觉 grounding；AudioLDM 2 为通用文本到音频，缺少细粒度音画对应。因此主结果表的公平性应理解为在同一 UniHAGen-Bench 与同一混合协议下的系统级对比，而非同条件同容量的模块级对比。指标方向必须先确认，否则会误读 DeSync 等越低越好的分数。原文把指标细节与主观流程放在附录，正文未给出评分人数与一致性统计，这是解读主观分时必须记住的边界。

### 主结果显示什么收益，哪一项没有胜出？

主结果要回答在统一基准上同时生成语音与环境声时，OmniSonic 相对可运行基线是否有全面收益。比较问题是：在相同视频加文本输入下，谁的生成质量、语义对齐与语音正确性更好。公平条件是所有模型都在 UniHAGen-Bench 的 3 个场景混合音频上评测，指标方向为 FAD 与 MKL 越低越好，AT、AV 及其均值越高越好，WER、CER、PER 越低越好。
下表用原文连续句固定的相对收益组织关键数字，不逐行复述原大表，重点看质量与语义两类提升是否同时成立。

| 评价维度 | 指标 | 最强基线口径 | OmniSonic 相对收益 | 适用条件 |
| --- | --- | --- | --- | --- |
| 生成质量 | FAD 越低越好 | 最强基线 | 领先 0.51 | 三场景混合音频 |
| 生成质量 | MKL 越低越好 | 最强基线 | 领先 2.21 | 三场景混合音频 |
| 语义对齐 | AT 与 AV 均值越高越好 | MMAudio | 超出 1.29 | 视频加文本联合条件 |
| 语音正确性 | WER、CER、PER 越低越好 | VoiceLDM | 全面更优 | 含语音场景 |
| 时间同步 | DeSync 越低越好 | MMAudio 与 HunyuanVideo-Foley | 未胜出 | 仅 CLIP 视觉特征 |

表后解释主要收益与具体代价。报告显示 OmniSonic 在质量、语义与语音正确性上同时取得最好结果，支持联合条件加 3 路注意力与门控对多源建模的有效性。

但 DeSync 未胜出是一个明确反例，原文给出的有限解释是 MMAudio 与 HunyuanVideo-Foley 还用了 Synchformer 细粒度时间特征，而 OmniSonic 只用 CLIP 全局语义特征，且 DeSync 本身用 Synchformer 特征计算，可能对使用同类特征的模型更友好。这属于有限解释而非因果证明，待验证。
下图用两组频谱图展示失败模式的差异，读图时不要把颜色深浅直接当作绝对质量，要结合标注文字判断缺失的是哪个声源。

> **看图路径：** 1. 先按行核对同一视频下不同模型频谱图上标注的缺失成分；2. 再对比 Ours 行与真值行中语音段与机关枪或邦戈鼓段的重叠位置；3. 最后观察 VoiceLDM 行语音不完整与低质标注对应的频谱连续性

[![原论文 Figure 3：Visualization of the spectrograms of generated audios and the ground-truth.](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/5e599b57b16f/figure-3.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/5e599b57b16f/figure-3.png)

*论文图 3。原论文 Figure 3：“Visualization of the spectrograms of generated audios and the ground-truth.”。*

左侧为狗叫画面内加机关枪画外加画外语音的例子，VinTAGe 能出画外环境但不出语音，MMAudio 与 HunyuanVideo-Foley 只出狗叫，VoiceLDM 能出语音但环境像噪声，OmniSonic 同时给出语音与两类环境且与真值结构最接近。右侧为画面内语音加邦戈鼓画外的例子，基线或只出鼓、或语音内容不对、或语音未在视频结束前说完，OmniSonic 的语音完整且内容正确。这些定性结果与客观表中语音错误率的下降方向一致，但频谱图本身不能量化错误率，仍需回到 WER 等指标。

### 去掉门控会发生什么，手动压低分支能否复现分工？

消融要回答门控是否是多条件平衡的关键。比较问题是：同一骨干保留 3 路注意力但去掉门控加权后，质量、语义、语音与同步是否全面下降。公平条件是除融合方式外其余结构与评测协议不变，指标方向与主结果一致。
下表整理去掉门控前后的关键数字，阅读时注意变化量是同一系统内的前后对比，不是跨基线的胜负。

| 评价维度 | 指标方向 | 完整模型值 | 去掉门控后值 | 变化含义 |
| --- | --- | --- | --- | --- |
| 生成质量 | FAD 越低越好 | 3.07 | 6.12 | 明显变差 |
| 生成质量 | MKL 越低越好 | 2.79 | 5.25 | 明显变差 |
| 语义对齐 | AT 与 AV 均值越高越好 | 18.54 | 15.94 | 明显下降 |
| 语音正确性 | 错误率越低越好 | 低错误率 | 超过 3 倍上升 | 语音与环境失衡 |
| 时间同步 | DeSync 越低越好 | 更低 | 升高 | 相干性下降 |

表后解释支持的判断与限制。报告显示去掉门控后 FAD 从 3.07 升至 6.12、MKL 从 2.79 升至 5.25、AT 与 AV 均值从 18.54 降至 15.94，语音三项错误率（%）上升超过 3 倍，支持门控在平衡语音与环境条件中的作用。

但这仍是单点消融，没有分别去掉某一支注意力或替换为平均加权等更细对照，因此不能断言门控是唯一解，只能说在当前 3 路结构下门控不可或缺。
下图用野外样本手动压低某 1 分支权重来验证分工，适合理解门控权重的因果含义。

> **看图路径：** 1. 先确认顶行完整门控下语音框与环境声框同时出现的位置；2. 再看中行压低语音分支后只剩环境声噪声的频谱形态；3. 最后看底行压低画外环境分支后只剩语音而背景消失的现象

[![原论文 Figure 4：Ablation study on the MoE Gating module using in-the- wild samples.](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/5e599b57b16f/figure-4.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/5e599b57b16f/figure-4.png)

*论文图 4。原论文 Figure 4：“Ablation study on the MoE Gating module using in-the- wild samples.”。*

顶行为完整门控，同时出现语音框与海浪或鸟叫框；中行压低语音分支后左侧只剩带噪海浪、右侧鸟叫伴随错误带噪语音；底行压低画外环境分支后两侧都只剩语音而背景消失。这组对照显示门控权重确实控制各声源的出现与否，但它是手动干预权重的定性演示，不是自动门控在基准上的定量分布统计，推广到全基准时仍需待验证。

### 哪些边界没有测，哪些推论不能做？

第一个边界是时间同步特征。原文明确承认只用 CLIP 视觉特征，缺少 Synchformer 类细粒度时间线索，在视觉稳定、物体长期不变的片段中 CLIP 帧间变化小，同步精度受限。这解释了 DeSync 未胜出，但未测量换用同步特征后 OmniSonic 能提升多少，因此不能承诺加特征必然反超。
第二个边界是数据与指标覆盖。训练依赖合成混合，真实场景中的房间混响、多人重叠语音、音乐与语音的复杂遮蔽是否被覆盖，原文没有单独评测。

主观分报告了 OmniSonic 在整体、环境、语音、时间四项最高，但未报告评分者数量、方差与显著性，不能把平均分差直接读作每组都显著。第 3 个边界是成本。原文未报告参数量、训练时长、推理步数、显存与延迟，总体趋势好不等于每步采样都快，部署前必须补测实际延迟与声码器开销。相关性不等于因果，门控权重与质量提升相关，但未做因果干预的全基准统计时，应表述为支持而非证明。

### 要复现先做什么，哪些超参数必须先固定？

先复现数据管线。再按原文清洗 VGGSound 的语音相关类别与关键词，固定三场景的采样比例与随机信噪比区间、响度归一化与混合长度对齐方式，再用测试集来源构建 1003 条的评测集并确保与训练无重叠。没有固定混合细节就对比指标是没有意义的。
再复现条件编码。环境侧用 FLAN-T5 并冻结，视觉侧用 CLIP 并冻结，语音侧用 SpeechT5 加可微时长扩展器并设为可训练。

音频侧用 AudioLDM 的预训练变分自编码器做梅尔频谱的编码与解码，波形还原用 HiFi-GAN。扩散部分实现帧对齐自适应层归一化、视觉与文本的按空占位符拼接、只对视觉片段加旋转位置编码的 3 路交叉注意力，以及每块独立的平均标记加多层感知机与 Softmax 门控。推理时从噪声出发解常微分方程，欧拉法可作为起点，但原文未给步数与引导系数，需要自行扫参并记录。

代码与权重方面，原文只给出项目页链接且本次显示不可用，不能写已开源或可下载，复现应先按上述组件用公开预训练模型搭建，再补训练细节缺项。

### 何时值得尝试这个方案，还需补哪项验证？

当任务同时满足 3 个条件时值得尝试：输入有视频且声源分画面内外，输出必须同时包含语音与环境声，文本能分别指定环境事件与语音内容。此时 3 路独立查询加门控加权的思路比单文本条件或纯视频条件更直接，因为它把对齐责任分配到了不同分支，再用权重解决冲突。如果任务只有纯环境声或纯语音，用更专用的基线可能更省。
还需补的验证有三项。

第一是同步消融，固定其他部分、只替换视觉特征为同步特征，观察 DeSync 与主观时间分的变化，以区分是指标偏好还是真实同步差距。第二是门控分布统计，在基准上记录三场景下各层各时刻的权重均值与方差，把定性分工变成定量规律。第三是成本与鲁棒性报告，包括推理步数与延迟、三源场景在低信噪比下的语音错误率分解。只有补齐这三项，才能把当前的最强基线对比转化为可部署的选型结论。

## 📐 原文公式与排版

以下展示论文原页中的数学表达区域，保留原始上下标、分式和符号排版。区域序号仅用于本文导航，不是论文公式编号。

[![原文数学表达区域 1，PDF 第 3 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/0a13a4f981ac/figure-1.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/0a13a4f981ac/figure-1.png)

区域 1 · [查看论文原页](https://openaccess.thecvf.com/content/CVPR2026/papers/Pian_OmniSonic_Towards_Universal_and_Holistic_Audio_Generation_from_Video_and_CVPR_2026_paper.pdf#page=3)

[![原文数学表达区域 2，PDF 第 3 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/0a13a4f981ac/figure-2.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/0a13a4f981ac/figure-2.png)

区域 2 · [查看论文原页](https://openaccess.thecvf.com/content/CVPR2026/papers/Pian_OmniSonic_Towards_Universal_and_Holistic_Audio_Generation_from_Video_and_CVPR_2026_paper.pdf#page=3)

[![原文数学表达区域 3，PDF 第 4 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/0a13a4f981ac/figure-3.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/0a13a4f981ac/figure-3.png)

区域 3 · [查看论文原页](https://openaccess.thecvf.com/content/CVPR2026/papers/Pian_OmniSonic_Towards_Universal_and_Holistic_Audio_Generation_from_Video_and_CVPR_2026_paper.pdf#page=4)

另有 18 个候选区域因边界不明确或图片数量、尺寸限制未展开；请[查看完整论文](https://openaccess.thecvf.com/content/CVPR2026/papers/Pian_OmniSonic_Towards_Universal_and_Holistic_Audio_Generation_from_Video_and_CVPR_2026_paper.pdf)中的原始排版。

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。
- 评分规则：type-aware-v1
- 评分模型：muse-spark-1.3-contributor
- 评分请求协议：openai_responses

---

[← 返回 cvpr-2026 论文汇总](/posts/conference-cvpr-2026/)
