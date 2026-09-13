---
title: "SAVE: Speech-Aware Video Representation Learning for Video-Text Retrieval"
date: 2026-09-13
draft: false
description: "针对 CLIP 视频文本检索丢弃音轨且 AST 类编码器不理解语音的问题，SAVE 用 Whisper 转写加 CLIP 文本编码的语音分支与 ImageBind 软监督的 soft-ALBEF 先对齐再融合，在五个基准上超过 AVIGATE 等基线，代价是依赖 ASR 可用性与离线三分支特征抽取。"
tags: ["知识蒸馏", "多模态学习", "音视频", "语音", "音频检索"]
categories: ["cvpr-2026 论文"]
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_paper_id: "conference:cvpr:2026:conference-paper-id:Zhao_SAVE_Speech-Aware_Video_Representation_Learning_for_Video-Text_Retrieval_CVPR_2026_paper"
paper_digest_source_kind: conference
paper_digest_conference_id: "cvpr-2026"
paper_digest_conference_record_url: "https://openaccess.thecvf.com/content/CVPR2026/html/Zhao_SAVE_Speech-Aware_Video_Representation_Learning_for_Video-Text_Retrieval_CVPR_2026_paper.html"
paper_digest_conference_pdf_url: "https://openaccess.thecvf.com/content/CVPR2026/papers/Zhao_SAVE_Speech-Aware_Video_Representation_Learning_for_Video-Text_Retrieval_CVPR_2026_paper.pdf"
paper_digest_api_reader_contract: "beginner-researcher-v3"
paper_digest_api_reader_article_sha256: "f88482326ecedd9b3fe7bcf7286710ecc9312338c1de10ef1aedf09e09ad0d6c"
paper_digest_api_reader_plan_sha256: "960650476245c9ba67b5a2adda68bc09c25c65878be90c04458b0b4c8fdff9ca"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings-v4"
paper_digest_api_reader_source_bindings_sha256: "804c170bd4d3749472195eaf87f9e708ac070ecab5b66c5ff3a2046ea0768abe"
paper_digest_api_reader_source_table_count: 4
paper_digest_api_reader_source_formula_count: 0
paper_digest_api_reader_structured_artifacts_sha256: "f478ebe224691e2a507e39b993e17309946b77deef55e099aa6437f863498c36"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity-v1"
paper_digest_api_reader_author_identity_sha256: "2e3dd304f124ba001b1a626d2f7c000e44c92901047ab4ad91185faaf73585c7"
paper_digest_api_reader_author_count: 6
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity-v1"
paper_digest_api_reader_resource_identity_sha256: "c4f39970a3938823a51fcc5af4b432101d3d53d530e6b90a19470285cfaa2ed4"
paper_digest_api_reader_resource_count: 1
paper_digest_api_reader_decision_projection: "api-reader-decision-projection-v2"
paper_digest_scoring_contract: "api-scoring-audit-v2"
paper_digest_taxonomy_contract: "paper-taxonomy-flat-tags-compat-v1"
paper_digest_taxonomy_selection_contract: "paper-taxonomy-selection-v1"
paper_digest_taxonomy_registry_version: "paper-taxonomy-v1"
paper_digest_taxonomy_registry_sha256: "15c82a567ce5a55dc1175684ed08b64c158558639d9c8fb822c9587ec32a8778"
paper_digest_taxonomy_concepts: [{"facet":"method","id":"method.distillation","label":"知识蒸馏"},{"facet":"method","id":"method.multimodal-learning","label":"多模态学习"},{"facet":"signal","id":"signal.audiovisual","label":"音视频"},{"facet":"signal","id":"signal.speech","label":"语音"},{"facet":"task","id":"task.audio-retrieval","label":"音频检索"}]
paper_digest_primary_task: "音频检索"
paper_digest_primary_method: "多模态学习"
paper_digest_score: 8.4
paper_digest_rank_bucket: "前25%"
paper_digest_document_type: "方法研究"
paper_digest_conference_structure: replayable-pdf-layout-v1
---

# 📄 环境声编码器听不懂人话时如何检索：SAVE 用语音分支与软对齐补齐音轨

> 英文题目：*SAVE: Speech-Aware Video Representation Learning for Video-Text Retrieval*

> 会议身份：`conference:cvpr:2026:conference-paper-id:Zhao_SAVE_Speech-Aware_Video_Representation_Learning_for_Video-Text_Retrieval_CVPR_2026_paper`


> ✅ 来源为官方会议 PDF；表格与 Figure 按原文证据绑定。PDF 公式以原页区域图片展示，未冒称作者原始 TeX。

> 会议来源：[官方记录](https://openaccess.thecvf.com/content/CVPR2026/html/Zhao_SAVE_Speech-Aware_Video_Representation_Learning_for_Video-Text_Retrieval_CVPR_2026_paper.html) · [官方 PDF](https://openaccess.thecvf.com/content/CVPR2026/papers/Zhao_SAVE_Speech-Aware_Video_Representation_Learning_for_Video-Text_Retrieval_CVPR_2026_paper.pdf)

标签：#知识蒸馏 #多模态学习 #音视频 #语音 #音频检索

评分：**8.4/10** | 创新 1.5/2 | 技术严谨 1.2/1.5 | 实验充分 1.2/1.5 | 清晰度 0.8/1 | 影响力 1.0/1.5 | 开源 1.2/1.5 | 可复现 0.3/0.5 | 工程/实践 1.2/1.5

排名：前25% | 文档类型：方法研究

## 👥 作者与机构

- Ruixiang Zhao：机构信息未能从会议 PDF 纯文本可靠映射
- Zhihao Xu：机构信息未能从会议 PDF 纯文本可靠映射
- Bangxiang Lan：机构信息未能从会议 PDF 纯文本可靠映射
- Zijie Xin：机构信息未能从会议 PDF 纯文本可靠映射
- Jingyu Liu：机构信息未能从会议 PDF 纯文本可靠映射
- Xirong Li：机构信息未能从会议 PDF 纯文本可靠映射

## 📌 核心摘要

视频文本检索以自然语言查询为输入、以语义最相关视频为输出，实际难点在于CLIP仅提供图文编码器而天然忽略声轨，且ResNet-18与AST等环境声编码器难以表征口语语义，视觉与音频特征未经预对齐直接融合效果受限。SAVE首先以三分支抽取互补标记：视觉分支用CLIP视觉编码器抽取帧级视觉标记，音频分支用AST加重采样器抽取等长声学标记，语音分支用Whisper转写为词序列再用与查询共享参数的CLIP文本编码器编码为文本标记。接着两路门控融合均以视觉标记为查询筛选视觉相关的音频与语音信号，再按视觉加音频语音均值无参数聚合为语音感知视频表示。然后以全局余弦加局部对数和指数的多粒度相似度计算视频文本匹配，并在训练期以软标签约束视觉音频亲和排序结构。与硬对齐或无预对齐相比，软预对齐只约束排序结构以容忍语义失配，独立语音分支显式恢复对话语义从而补足声音分支。在MSRVTT-9k文本到视频检索评测下，SAVE的SumR指标为216.2，高于AVIGATE的SumR指标207.7。该结论适用边界限于具有可用声轨与较短转写的短视频检索，在直播级长而嘈杂转写与完全缺失音频下的泛化能力尚未验证，尽管增加语音分支其推理延迟与基线相当。

## 🔗 开源与复现资源

- 代码相关资源：<https://github.com/ruc-aimc-lab/SAVE> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 输入是什么？要解决的检索任务是什么？

本次解读的输入是会议论文正文文字与官方原图像素，目标是让刚进入语音或音乐音频方向的研究生能复述 SAVE 的做法、训练条件与证据边界。必须保留的信息包括任务定义、3 个分支的分工、软对齐的监督来源、数据集划分与指标方向，以及论文直接报告的数字。输出是 1 篇按学习依赖展开的技术解读，不做超出证据的推广。

视频文本检索的任务是给定一句文本查询，从视频库中找到语义最相关的视频，或反方向给定视频找描述文本。白话说，就是用一句话搜一段短视频。英文名是 video-text retrieval，缩写为 VTR。当前主流做法是用对比语言图像预训练模型，即 Contrastive Language-Image Pre-training，缩写为 CLIP，提供图像编码器和文本编码器。研究者从视频中均匀采样若干帧，每帧经 CLIP 视觉编码器得到向量，再与查询文本向量算余弦相似度。这种做法天然丢掉了视频自带的声音轨道。

论文要研究的就是在不丢掉 CLIP 能力的前提下，把声音和说话内容重新利用起来做检索。声音包括环境声、音乐、引擎声等声学事件，说话内容指旁白、对话、新闻播报等可转写为文字的语义信息。初学者容易把二者混为一类音频，但本文强调它们的表示需求不同：前者适合声学编码器，后者需要语言编码器。后续所有设计都围绕这一区分展开，先理解区分才能理解为何需要 3 个分支。

### 同任务同监督的已有路线差在哪里？

按同输入、同目标、同监督来对照，有 3 条线。第一条是纯视觉的 CLIP 视频文本检索，例如 CLIP4Clip 把 CLIP 直接端到端用于检索，后续工作做帧与句子、帧与词、块与词的细粒度交互，或做参数高效微调与令牌压缩以省训练和推理开销。这类方法输入只有帧和查询文本，不使用音轨，监督是视频文本对比损失。

第二条是音频增强的检索，例如 EclipSE 用 ResNet-18 做音频编码器加对称交叉注意力融合，TEFAL 和 AVIGATE 用音频频谱 Transformer，即 Audio Spectrogram Transformer，缩写为 AST，做更强的音频编码器，再用文本条件注意力或门控交叉注意力把音频融进视觉表示。它们的监督仍是视频文本对比损失，没有对视觉与音频先做对齐。AVIGATE 是其中最强的基线，也是 SAVE 直接扩展的对象。

第 3 条是早期用自动语音识别文本做检索，例如把自动语音识别，即 Automatic Speech Recognition，缩写为 ASR，转写的文本与查询直接匹配，或把 Word2Vec 向量化的 ASR 文本当作众多视频特征之一去融合。论文报告这类 ASR 特征较弱，在融合中常被忽视。SAVE 与它们的区别在于同时处理两个被忽视点：一是现有 AST 类编码器在环境声数据集上训练，不理解语音语义；二是视觉与音频特征未经 CLIP 那样的预对齐，直接做交叉注意力融合效果受限。

### 为什么说现有音频编码器不懂说话内容？

论文用一个可复述的玩具实验说明问题。对鸟、猫、狗 3 个动物类，各构造 100 个样本的 3 个模态数据集：真实动物叫声来自 AudioSet，旁白叙述是先让大语言模型生成描述再用文本转语音合成，文本是旁白经 Whisper 转写得到的记录。声音和语音嵌入都用 AST 抽取，文本嵌入用 CLIP 文本编码器抽取。结果是声音样本和文本样本在各自空间中按类别分开，而语音样本在 AST 音频空间中混杂在一起。也就是说，同样是鸟猫狗，说话讲出来的描述经 AST 编码后分不开。

这支持了一个判断：AST 擅长环境声，但不适合做语音语义嵌入。论文还提到在 Whisper 的音频特征空间中也观察到类似混杂，尽管 Whisper 的识别性能好。第二个问题是视觉音频融合困难。AVIGATE 完全依赖交叉注意力把 CLIP 帧特征与 AST 音频特征直接融合，而这两组特征定义上就是未对齐的。视觉语言预训练中有先对齐再融合，即 Align Before Fuse，缩写为 ALBEF 的经验，但直接把硬标签搬到视觉音频上会有问题，因为很多视频音频对语义上本就不对应。

下图把诊断实验、结构改动与总体收益放在一起，阅读时先看问题展示再看解决思路与提升位置，是理解全文动机的最短路径。

> **看图路径：** 1. 先对比上排三组散点中左右两组按颜色分开而中间混杂的分布差异；2. 再确认中排绿色语音编码器中 ASR 指向文本编码器的新增支路走向；3. 最后比较下排五个数据集上绿色 SAVE 柱子相对白色灰色柱子的高度

[![原论文 Figure 1：An overview of this paper.](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/db928822d7ca/figure-1.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/db928822d7ca/figure-1.png)

*论文图 1。原论文 Figure 1：“An overview of this paper. (a) Problem: Current au- dio encoders (ResNet-18 [13] and AST [9]), trained on datasets of environmental sounds, are not well suited for speech embedding.”。*

上图上半部分显示三列内容：左侧真实叫声波形经 AST 编码后三色点团分开，右侧转写文本经 CLIP 编码后三色点团分开，中间旁白波形经 AST 编码后三色点混杂并配有红色不满表情。中部左侧画出视频帧进入视觉编码器、波形进入音频编码器、同一波形经 ASR 加文本编码器进入融合模块的新增绿色支路，右侧用笑脸和哭脸对比表示新方法在声音和语音 2 维都达到可用状态。下方柱状图显示 SAVE 在 5 个基准的 SumR 均高于 TEFAL 和 AVIGATE，其中 Charades 的相对差距最大。这张图把诊断、改动与收益对应起来，后文分别展开语音分支与软对齐的计算细节。

### SAVE 让一个样本走完输入到输出要经过什么？

沿一个短视频样本走一遍。输入是视频 V 与声轨 A，输出是该视频与查询文本 T 的相似度分数。第一步是 3 分支表示。视觉分支对 V 均匀采样 m 帧，每帧经 CLIP 视觉编码器取最后一层分类令牌得到 d 维视觉令牌，记为视觉令牌序列。音频分支把 A 转成梅尔滤波器组特征送入 AST 得到音频令牌序列，再经带 m 个可学习查询的 Transformer 重采样器压缩为 m 个 d 维音频令牌。语音分支用 Whisper large-v3 把 A 转写为 n 个词，再送入 CLIP 文本编码器得到包含起止符的 n 加 2 个 d 维文本令牌。

第二步是视觉条件融合。以视觉令牌为查询 Q，分别以音频令牌和语音文本令牌为键值 K 和 V 做门控融合，得到视觉挑选后的音频令牌与语音令牌，再按视觉加音频语音平均的方式聚合成语音感知的音视令牌，即视觉令牌加音频语音和的一半。第三步是多粒度匹配。查询文本 T 经 CLIP 文本编码器得到 d 维查询嵌入 t，与融合令牌算全局余弦和局部聚合后的平均值作为最终相似度。全局与局部的分工需要先分清。

**整体相似度 × 局部相似度：** 整体相似度是融合令牌均值与查询文本嵌入 t 的余弦相似度，反映视频全局是否相关；局部相似度是每个融合令牌与 t 逐个算余弦再用 log-sum-exp 聚合，保留最相关帧的高响应；二者取平均得到最终视频文本相似度的原因是兼顾全局一致性和关键帧命中，避免单一平均抹掉局部证据。

下图是该流程的完整数据流，重点看分支汇合点与只在训练时出现的模块，阅读时沿箭头追踪维度变化。

> **看图路径：** 1. 沿左侧声轨与视频输入线向右追踪语音音频视觉三条分支的模块顺序；2. 观察两个门控融合模块接受的蓝色视觉箭头确认视觉条件融合位置；3. 找到黄色软对齐方框确认它只连接融合前音频与视觉令牌不参与推理

[![原论文 Figure 3：Proposed speech-aware video representation learning (SAVE) method for video-text retrieval.](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/db928822d7ca/figure-3.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/db928822d7ca/figure-3.png)

*论文图 3。原论文 Figure 3：“Proposed speech-aware video representation learning (SAVE) method for video-text retrieval.”。*

上图左侧显示同一声轨 A 分叉进入上方 Whisper 加 CLIP 文本的语音支路和中间 AST 加 Resampler 的音频支路，视频 V 进入下方 CLIP 视觉支路，3 组令牌维度分别标注为 n 加 2 乘 d 和 m 乘 d。两个门控融合模块都接受来自视觉分支的蓝色向上箭头，说明融合以视觉为条件。融合后的两组 m 乘 d 令牌与视觉令牌在加号处汇合为融合令牌，再与右侧查询嵌入 t 做多粒度相似度计算。黄色软对齐方框连接融合前的音频与视觉令牌，图注明确它只在训练时用于改善对齐，推理时不参与。这种画法把关键点固定下来：语音走文本空间，声音走声学空间，对齐只约束融合前表示。

### 语音分支把说话声变成什么向量？

语音分支的动作是转写加文本编码。具体操作是调用 Whisper large-v3 对声轨做识别，得到词序列，再调用与查询分支共享参数的 CLIP 文本编码器做令牌抽取，得到起止符加词级向量。然后用视觉令牌为 Q、语音令牌为 K 和 V 做门控融合，生成 m 个视觉挑选后的语音令牌。论文选择复用 CLIP 文本编码器的理由在正文中有交代：受跨域商品检索中用 ASR 文本成功的启发，且这样语音与查询天然处在同一 CLIP 空间，预对齐已经存在，融合时查询与键的匹配更容易。

缺失处理也有明确规则：若 ASR 识别失败则用空字符串，经 CLIP 分词器填充为零向量；若视频本身无声轨则梅尔滤波器组置零。教学例子是新闻播报视频，例子中声轨转写出包含人名与民调数字的句子，查询文本也是讨论同一人与民调，语音分支让这种语义重合能被直接比较，而纯声学编码器只能听到演播室混响。需要区分的是，该分支不做说话人识别或情感分类，只做内容转写后的语义嵌入。

**语音分支 × 声音分支：** 语音分支负责把音轨中的说话内容经 Whisper 转写为词序列再用 CLIP 文本编码器编码，得到可与查询直接比较的语义向量；声音分支负责用 AST 对梅尔滤波器组特征编码，保留环境声音乐引擎声等非语义声学特征；二者搭配的原因是 AST 在语音内容上类别不可分而 CLIP 文本在转写后可分，组合后用视觉条件门控融合让同一视频同时表达说什么和听起来像什么。

上段解释把语音与声音的功能切分说清了：一个管说什么，一个管听起来像什么。复述时要强调共享文本编码器是刻意设计，消融中解绑参数会导致性能下降，说明同空间带来的预对齐确实帮助了检索。还要记住该分支的上限受 ASR 可用率限制，后文实验条件会给出各数据集的具体比例。

### 声音分支与门控融合如何挑出与画面相关的声音？

声音分支的动作是声学编码加压缩。AST 把梅尔特征编成较长的音频令牌序列，重采样器用 m 个可学习查询把它压缩到与帧数相同的 m 个令牌，便于后续逐帧条件融合。门控融合的动作是以视觉令牌为 Q、音频令牌为 K 和 V 做 Transformer 交叉注意力，再经门控加权得到视觉相关的音频令牌。语音分支的融合结构相同，只是 K 和 V 换成文本令牌。最后的聚合没有引入可学习权重，而是参数自由的平均：先把音频与语音的融合结果平均，再与视觉相加。

论文给出三点安排理由：检索时事先不知道视频内容，故视语音与声音同等重要；视觉内容一般更重要，先平均音声再与视觉相加等于给视觉更大权重；简单融合促使门控模块自己去学哪些信号真正重要。消融中把该固定权重换成可学习权重后性能没有提升，报告支持了这一选择的合理性，但论文未报告该可学习权重的具体初值与学习动态，这是复现时需留意的缺项。

**门控融合 × 视觉令牌：** 视觉令牌是由 CLIP 视觉编码器对均匀采样 m 帧逐帧抽取的 d 维特征，作为查询 Q 提供当前画面在看什么；门控融合是以视觉令牌为 Q、以音频或语音令牌为 K 和 V 的 Transformer 交叉注意力加门控加权，负责挑出与画面相关的声音或语句；搭配理由是未经对齐的音频键值直接融合会引入噪声，先以视觉为条件筛选再做加权平均才能得到音视相关的融合令牌。

上段解释把视觉令牌与门控融合的搭配说清了：视觉提供条件，门控负责筛选。复述时要指出两个融合模块都以视觉为 Q，这是与晚期融合的本质区别。晚期融合是分别算语音查询分和音视查询分再平均，而早期融合是在令牌层面先交互，论文报告晚期融合下降最大，支持了早期交互的必要性。

### 训练时如何用软标签做先对齐再融合？

训练目标是主对比损失加辅助对齐损失等权相加。主损失是 AVIGATE 的自适应间隔对比损失，用于视频文本匹配。辅助损失是 Pearson 距离损失，用于融合前的视觉音频对齐。具体构造是给定批量 B 个视频音频对，先用冻结的 ImageBind 分别算视频与音频嵌入的 BxB 余弦亲和矩阵作为软监督 M0，再用当前网络融合前的视频均值与音频均值算亲和矩阵 M1，对两矩阵逐行逐列做 softmax 后算 Pearson 距离并平均。选择 Pearson 距离的理由是它对尺度和位置的单独变化不变，更关注相对排序结构而非绝对数值拟合。

ImageBind 在训练中不更新，只提供软目标；AST 编码器参数在训练中保持冻结以省显存；CLIP 主干用极低学习率微调以防灾难性遗忘，其他可训练模块用较高学习率。需要指出，论文未给出梯度是否截断 ImageBind 分支的形式化说明，但按描述 ImageBind 仅用于生成目标矩阵，可理解为无梯度回传，若要严格复现需按冻结教师实现。损失形式的选择也需要辨析。

**soft-ALBEF × 硬对齐：** 硬对齐指把同视频同音频记为 1、不同视频音频记为 0，强制批内对角线相似最高；soft-ALBEF 指用 ImageBind 算出的 BxB 视频音频亲和矩阵 M0 经 softmax 后作为软目标，去监督当前网络融合前视频音频亲和矩阵 M1 的相对排序；搭配原因是大量视频音轨是背景音乐或旁白，与画面语义无关，硬标签会学到虚假相关，而软标签保留相关度高低的连续结构，只在训练时起作用。

下图解释为何不用硬标签，以及软标签长什么样，阅读时先看左右矩阵的取值差异再回看左侧视听是否相关。该图是理解软对齐噪声容忍性的关键证据。

> **看图路径：** 1. 对比右侧硬分配矩阵对角线为 1 与软分配矩阵连续小数的取值差异；2. 查看软矩阵第三行摩托车引擎声对应 0.49 明显高于前两行接近零的数值；3. 结合左侧走秀背景音乐与开箱旁白文字确认前两行视听语义无关

[![原论文 Figure 2：Hard vs. soft labels for early vision-audio alignment.](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/db928822d7ca/figure-2.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/db928822d7ca/figure-2.png)

*论文图 2。原论文 Figure 2：“Hard vs. soft labels for early vision-audio alignment.”。*

上图左侧三行分别是走秀配背景音乐、开箱配旁白、摩托车配引擎轰鸣，前两行的声音与画面语义无关，若按右侧上半硬分配矩阵强制对角线为 1，就会要求模型把不相关的视听配对拉近。右侧下半软分配矩阵显示 ImageBind 给出的连续分值，前两行数值接近零且有正有负，只有第三行摩托车视频与引擎声的 0.49 明显偏高，绿色框标出真正相关的对角位置。这种细粒度监督让模型在噪声对上不强行对齐，在真正相关对上才加强对齐。图后还需要记住损失函数的对比结论。

**Pearson 距离损失 × 均方误差损失：** Pearson 距离损失比较 softmax 后两行或两列分布的相对排序结构，对整体平移和尺度变化不敏感；均方误差损失比较绝对数值差，要求拟合 ImageBind 相似度的具体数值；论文选择前者的原因是目标是学到谁与谁更相关而非复刻绝对分值，因此对噪声更鲁棒，与检索目标的排序本质更一致。

上段解释把 Pearson 与均方误差的分工说清了：一个学排序结构，一个拟合绝对数值。论文报告 Pearson 优于均方与 Huber，且换用较弱教师仍有增益，支持收益来自软标签形式而非特定教师。复述时要强调软对齐只在训练时起作用，推理时不增加在线计算。

### 在哪些数据、划分与优化条件下测？

实验按问题组织前，先交代可比条件。数据集包括 MSRVTT 的两种划分、VATEX、Charades 与 LSMDC。评估指标是文本到视频检索的 R1、R5、R10 与 SumR，其中 SumR 是三者之和，越大越好；另有 mR1 指跨数据集的平均 R1。实现上 CLIP 视觉与文本用 ViT-B/32 权重初始化，AST 用 AudioSet 与 ImageNet 预训练权重初始化，查询分支与语音分支的 CLIP 文本编码器在训练中共享参数。

训练最多 5 轮，用 Adam 优化器加余弦学习率衰减，在 8 张 RTX 3090 上进行。MSRVTT、VATEX、LSMDC 的最大词数、最大帧数与批量大小设为 32、12、128；Charades 因视频与描述更长更复杂，设为 64、32、64。测试时有验证集的选验证集 R1 最好的检查点，无验证集的 MSRVTT-9k 与 Charades 按惯例报告测试集峰值性能，这一点在比较时需注意，因为峰值报告比固定检查点更容易偏高。基线只纳入不依赖额外训练数据且开源的方法。

下图先看各数据集有多少视频真正有声音或语音可用，这决定语音分支的覆盖面，是解释后文 Charades 现象的前提条件。

> **看图路径：** 1. 先比较四个数据集上蓝色音频柱子均接近九成以上的高度；2. 再对比橙色语音柱子从六成到一成左右的高度落差；3. 记住该缺失比例决定语音分支在不同数据集上的覆盖上限

[![原论文 Figure 4：Proportion of videos with audio / ASR available.](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/db928822d7ca/figure-4.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/db928822d7ca/figure-4.png)

*论文图 4。原论文 Figure 4：“Proportion of videos with audio / ASR available.”。*

上图蓝色为音频可用比例，橙色为语音可用比例。MSRVTT 音频约 88.1% 而语音约 62.7%，VATEX 音频约 99.9% 而语音约 42.9%，Charades 音频约 100.0% 而语音仅约 13.5%，LSMDC 音频约 100.0% 而语音约 45.7%。可见声音基本都有，但能转写出有效文本的比例差异很大，Charades 最低。这解释了后文关键现象：即使语音覆盖很低，SAVE 仍能在 Charades 上取得较大提升，说明提升不只来自语音分支，还来自软对齐对声音分支的改善。下表给出部分数据集的训练验证测试视频数。

| MSRVTT-7k [49] | 6,513 | 497 | 2,990 |
| --- | --- | --- | --- |
| VATEX [47] | 25,991 | 1,500 | 1,500 |
| LSMDC [39] | 101,079 | 7,408 | 1,000 |

上表列出 MSRVTT-7k、VATEX 与 LSMDC 的训练、验证与测试视频数，数量级从数千到十万不等。MSRVTT-9k 的 9000 训练与 1000 测试划分在正文中以文字交代，未出现在该原表矩阵中，引用时需按文字为准。该表的作用是确认不同数据集的训练预算与检索库大小差异很大，因此跨数据集的平均值只能看总体趋势，不能代替每个数据集的单独结论。

### 主结果测什么？与谁比？条件一致吗？

主结果测的是文本到视频检索的 R1、R5、R10 与 SumR，对比对象是同条件下的纯视觉方法与音视方法。论文称比较时只用开源且不加额外训练数据的方法，以保证训练数据条件一致。需要留意的非一致点是不同基线引用原论文数字，其中 MSRVTT-9k 与 Charades 无验证集而报告峰值测试性能，不同方法的峰值选择时机可能不同。论文报告 SAVE 在所有 5 个数据集上均为音视组最优，且超过视觉组最优。

下表整理论文直接报告的相对提升与绝对 SumR 提升，指标方向均为越高越好，阅读时注意区分相对百分比与绝对分差的不同量纲。

| 数据集 | 相对提升 | 绝对 SumR 提升 | 对比对象 | 指标方向 |
| --- | --- | --- | --- | --- |
| MSRVTT-9k | +4.1% | 8.5 | AVIGATE | SumR 越高越好 |
| MSRVTT-7k | +1.9% | 3.1 | AVIGATE | SumR 越高越好 |
| VATEX | +2.5% | 6.2 | AVIGATE | SumR 越高越好 |
| Charades | +9.8% | 10.8 | AVIGATE | SumR 越高越好 |
| LSMDC | +2.1% | 2.6 | AVIGATE | SumR 越高越好 |

上表第一列相对提升显示 SAVE 超过 AVIGATE 在 5 个数据集上的增长率，第二列绝对提升为 SumR 分值的差，跨数据集平均 R1 提升 1.7。相对百分比与绝对分差不能混用，百分点指分值差，百分比指相对增长率。支持的判断是提升在 5 个数据集上方向一致，且在语音覆盖最低的 Charades 上绝对增量最大，论文将其归因于软对齐更好地利用了声音信息。限制是该表未给出方差或显著性检验，也未报告视频到文本方向的完整数字。

下表用 ImageBind 本身做检索主干的反证，排除教师更强所以学生强的简单解释，比较条件是同一 MSRVTT-9k 测试集。

| Methods | R1 | R5 | R10 | SumR |
| --- | --- | --- | --- | --- |
| ImageBind-v | 39.1 | 62.8 | 73.1 | 175.0 |
| ImageBind-va | 39.4 | 63.2 | 73.7 | 176.3 |
| ImageBind-vas | 40.6 | 62.6 | 74.1 | 177.3 |
| ImageBind-vas | 47.2 | 72.9 | 82.0 | 202.1 |
| SAVE | 51.3 | 78.0 | 86.9 | 216.2 |

上表显示 ImageBind 的 3 种视频表示构造在零样本下 SumR 仅 175.0 到 177.3，即使部分微调后也只有 202.1，明显低于 SAVE 的 216.2。论文的解释是 ImageBind 的 ViT-H/14 太大，难以在有限算力下充分微调为检索主干，但其视听对齐能力仍适合用来生成软目标。这是一个重要的反证：教师在检索任务上弱，不代表其相似度矩阵不能提供有用的排序监督。组别细化比较进一步显示，在人工划分的视觉组、声音相关组、语音相关组与声语相关组中，SAVE 均超过最强视觉与音视基线，且在声语同时相关的组增量最大。

### 拿掉语音、拿掉声音、换掉对齐会发生什么？

消融要回答各组件是否必要，以及对齐方式是否可用更简单的过滤代替。论文在 MSRVTT-9k 与 MSRVTT-7k 上做消融，指标仍是 R1 与 SumR。直接报告的结论是去掉语音分支与去掉声音分支分别导致 MSRVTT-9k 上 SumR 下降 4.3 与 8.7，去掉软对齐也有下降，而把软对齐换回硬 ALBEF 甚至比不对齐更差。换 ASR 主干、解绑文本编码器参数、把 Pearson 换成均方或 Huber、把教师换成 AudioCLIP、把早期融合换成晚期融合、把固定平均换成可学习权重等变体，均未超过完整 SAVE。

下表看推理效率，确认新增语音分支是否带来在线代价，比较条件是同一 MSRVTT-9k 测试集与同一 RTX 3090 环境。

| Methods Computational | complexity Inference time (ms)↓ | SumR↑ |
| --- | --- | --- |
| CLIP4Clip [32] O(nV + nT ) | 9.76 | 197.5 |
| X-Pool [10] O(nVnT ) | 66.31 | 201.9 |
| PIG [23] O(nV + nT ) | 9.76 | 203.0 |
| TEFAL [17] O(nAnT + nVnT ) | 140.57 | 209.2 |
| AVIGATE [18] O(nA + nV + nT ) | 9.90 | 207.7 |
| AVIGATE-h [18] O(nA + nV + nT ) | 9.76 | 201.9 |
| SAVE O(nS + nA + nV + nT ) | 9.90 | 216.2 |
| SAVE-h O(nS + nA + nV + nT ) | 9.76 | 211.3 |

上表显示 SAVE 的理论复杂度为查询、视频、音频与语音样本数之和的线性量级，在线推理时间约 9.90 毫秒，与 AVIGATE 持平，明显低于 TEFAL 的约 140.57 毫秒与 X-Pool 的约 66.31 毫秒。原因是 SAVE 的视频、音频与语音特征都可离线预抽取，在线只需抽查询嵌入并算相似度。代价主要在离线端与训练端：需跑 Whisper 转写与 3 分支编码，论文未报告具体离线耗时与存储开销。未胜出项是可学习融合权重没有带来提升，支持了参数自由平均的选择。

论文还比较了软对齐与硬对齐加过滤的替代方案。简单按 ImageBind 分数过滤低分对再做硬对齐，在不同过滤比例下均不如软标签，说明连续监督不能被二值过滤替代。晚期融合的下降最大，支持早期融合的必要性。未评测的边界是长而带噪的直播类语音，论文在局限中明确留待后续研究。

### 哪些情况论文明确说还不行？

论文在结论中明确写了局限：实验只在短视频片段与可被 CLIP 文本编码器直接处理的简短语音转写上进行。在更复杂的场景，例如电商直播理解，语音转写通常更长且噪声更大，如何高效抽取关键信息以得到鲁棒的语音感知视频表示，还需进一步研究。这意味着当前方法依赖转写长度不超过编码器上限，以及转写质量足以保留语义。

另一个边界是缺失数据：大量视频没有有效语音，论文用空字符串补零向量处理，这种做法在 Charades 上仍有效，但论文未测量误判率或对空输入的敏感性，因此不能承诺在全是噪声转写的场景下依然改善。此外，软对齐依赖 ImageBind 的相似度质量，若教师在某类数据上系统性偏差，软目标也会继承偏差，论文用 AudioCLIP 替换仍有增益来支持收益来自软标签形式而非特定教师，但未穷举所有教师。

总体趋势不等于每组都成立，组别分析中视觉组的提升就很小，使用时应先看查询是否与声音或说话内容相关。若查询基本只描述画面动作与物体，预期增益会很小。初学者不要把平均提升理解为每个查询都有提升，也不要把短视频结论直接推广到长直播场景。

### 要复现应先做什么？代码与权重现在是什么状态？

复现先做三件事。第一是按原文恢复数据条件：MSRVTT-9k 与 7k、VATEX、Charades、LSMDC 的划分与最大帧数词数批量大小设置，特别注意有无验证集的检查点选择规则不同。有验证集的选验证集 R1 最好的检查点，无验证集的按惯例报告峰值，复现时应同时记录两种选择以评估波动。

第二是恢复模型初始化与冻结关系：CLIP 用 ViT-B/32，AST 用 AudioSet 预训练权重并在训练中冻结，两个 CLIP 文本编码器共享参数，CLIP 主干低学习率微调。第三是恢复训练损失的等权相加与 Pearson 距离实现，包括批量内行列双向 softmax 后再算距离。ImageBind 仅用于生成目标矩阵，应按冻结教师实现，避免梯度回传到教师。

代码状态方面，资源状态显示代码链接当前可用，地址为论文首页给出的开源仓库，可据此获取实现，但本次解读未验证权重下载与一键运行脚本是否完整，实际运行时需先确认环境、权重与预抽取特征流程。推理时记得把视频、音频与语音特征离线抽好，在线只测查询编码加相似度计算，否则会把离线代价误算成在线延迟。若语音不可用，需按论文用空字符串补零的规则处理，不能直接丢掉该分支，否则融合维度对不上。

### 何时值得尝试 SAVE 的思路？还需补哪项验证？

当检索库的视频带音轨，且查询可能提到说话内容、对话观点或环境声时，值得尝试 SAVE 的思路。具体动作是先统计库中音频可用率与语音可用率，再按语音走文本空间、声音走声学空间、融合前先做软对齐的顺序实现。若查询基本只描述画面动作与物体，预期增益会很小，组别分析中视觉组的微弱差距已经提示了这一点。

还需补的验证包括报告多次运行的方差、在固定检查点而非峰值下的对比、视频到文本方向的完整结果，以及长文本转写截断策略对性能的影响。论文的直接报告支持语音分支与软对齐各自有效且互补，可能但待验证的是该互补在直播等长噪声语音上是否依然成立。离线转写与存储开销也需实测，才能评估大规模部署的真实成本。

初学者复述时可抓住一句话：把说话内容转成文字再用文本编码器，把环境声仍用音频编码器，融合前用外部视听模型的软相似度教会对齐，最后一起与查询文本做多粒度匹配。记住两个前提：转写要足够短且可用，对齐只在训练时发生。满足前提时，该思路是对纯视觉检索的稳健补充；不满足时，应先解决语音质量与长度问题。

## 📐 原文公式与排版

以下展示论文原页中的数学表达区域，保留原始上下标、分式和符号排版。区域序号仅用于本文导航，不是论文公式编号。

[![原文数学表达区域 1，PDF 第 5 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/9dfe0641e750/figure-1.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/9dfe0641e750/figure-1.png)

区域 1 · [查看论文原页](https://openaccess.thecvf.com/content/CVPR2026/papers/Zhao_SAVE_Speech-Aware_Video_Representation_Learning_for_Video-Text_Retrieval_CVPR_2026_paper.pdf#page=5)

[![原文数学表达区域 2，PDF 第 5 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/9dfe0641e750/figure-2.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/9dfe0641e750/figure-2.png)

区域 2 · [查看论文原页](https://openaccess.thecvf.com/content/CVPR2026/papers/Zhao_SAVE_Speech-Aware_Video_Representation_Learning_for_Video-Text_Retrieval_CVPR_2026_paper.pdf#page=5)

[![原文数学表达区域 3，PDF 第 5 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/9dfe0641e750/figure-3.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/9dfe0641e750/figure-3.png)

区域 3 · [查看论文原页](https://openaccess.thecvf.com/content/CVPR2026/papers/Zhao_SAVE_Speech-Aware_Video_Representation_Learning_for_Video-Text_Retrieval_CVPR_2026_paper.pdf#page=5)

另有 2 个候选区域因边界不明确或图片数量、尺寸限制未展开；请[查看完整论文](https://openaccess.thecvf.com/content/CVPR2026/papers/Zhao_SAVE_Speech-Aware_Video_Representation_Learning_for_Video-Text_Retrieval_CVPR_2026_paper.pdf)中的原始排版。

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。
- 评分规则：type-aware-v1
- 评分模型：muse-spark-1.3-contributor
- 评分请求协议：openai_responses

---

[← 返回 cvpr-2026 论文汇总](/posts/conference-cvpr-2026/)
