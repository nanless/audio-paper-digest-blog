---
title: "Pushing the Frontier of Audiovisual Perception with Large-Scale Multimodal Correspondence Learning"
date: 2026-09-13
draft: false
description: "论文用两阶段合成字幕数据引擎和覆盖八到十组跨模态对的对比学习训练 PEAV，在零样本声音音乐语音视频检索分类上取得最强证据，但代价是 92M 加 32M 数据与大音频编码器和长视频推理成本。"
tags: ["对比学习", "多模态学习", "零样本", "音视频", "音频检索"]
categories: ["cvpr-2026 论文"]
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_paper_id: "conference:cvpr:2026:conference-paper-id:Vyas_Pushing_the_Frontier_of_Audiovisual_Perception_with_Large-Scale_Multimodal_Correspondence_CVPR_2026_paper"
paper_digest_source_kind: conference
paper_digest_conference_id: "cvpr-2026"
paper_digest_conference_record_url: "https://openaccess.thecvf.com/content/CVPR2026/html/Vyas_Pushing_the_Frontier_of_Audiovisual_Perception_with_Large-Scale_Multimodal_Correspondence_CVPR_2026_paper.html"
paper_digest_conference_pdf_url: "https://openaccess.thecvf.com/content/CVPR2026/papers/Vyas_Pushing_the_Frontier_of_Audiovisual_Perception_with_Large-Scale_Multimodal_Correspondence_CVPR_2026_paper.pdf"
paper_digest_api_reader_contract: "beginner-researcher-v3"
paper_digest_api_reader_article_sha256: "06fdc2057eeefdb16648c65c4acd1d321f33ca0957e9b3076b811d173b9a39d2"
paper_digest_api_reader_plan_sha256: "c87fb91d44a3992eecf791d65d73733d7b1651e9f81f323cbfb9aca3bfc2830d"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings-v4"
paper_digest_api_reader_source_bindings_sha256: "82d7426172c7405bca260d8eb13fb6e23cf690d20d7402f7b361b466e2d4d0b2"
paper_digest_api_reader_source_table_count: 3
paper_digest_api_reader_source_formula_count: 0
paper_digest_api_reader_structured_artifacts_sha256: "c7d30d0ff0861cacdb29987f2d2539b22914aaced7bc0f23bc27d799d00c9b0d"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity-v1"
paper_digest_api_reader_author_identity_sha256: "4d05ec59dfc07e16fbbf4254d5b0b1d6d0d95c3a22ecb81ec148760d20b22334"
paper_digest_api_reader_author_count: 12
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity-v1"
paper_digest_api_reader_resource_identity_sha256: "e840c2f3db5a93f4bb29c4d71b782846dd1de7767a8663f8c068168c91b295a3"
paper_digest_api_reader_resource_count: 2
paper_digest_api_reader_decision_projection: "api-reader-decision-projection-v2"
paper_digest_scoring_contract: "api-scoring-audit-v2"
paper_digest_taxonomy_contract: "paper-taxonomy-flat-tags-compat-v1"
paper_digest_taxonomy_selection_contract: "paper-taxonomy-selection-v1"
paper_digest_taxonomy_registry_version: "paper-taxonomy-v1"
paper_digest_taxonomy_registry_sha256: "15c82a567ce5a55dc1175684ed08b64c158558639d9c8fb822c9587ec32a8778"
paper_digest_taxonomy_concepts: [{"facet":"method","id":"method.contrastive","label":"对比学习"},{"facet":"method","id":"method.multimodal-learning","label":"多模态学习"},{"facet":"setting","id":"setting.zero-shot","label":"零样本"},{"facet":"signal","id":"signal.audiovisual","label":"音视频"},{"facet":"task","id":"task.audio-retrieval","label":"音频检索"}]
paper_digest_primary_task: "音频检索"
paper_digest_primary_method: "对比学习"
paper_digest_score: 8.9
paper_digest_rank_bucket: "前25%"
paper_digest_document_type: "模型报告"
paper_digest_conference_structure: replayable-pdf-layout-v1
---

# 📄 不只绑一个锚点：用合成字幕把音频视频文本一起对齐

> 英文题目：*Pushing the Frontier of Audiovisual Perception with Large-Scale Multimodal Correspondence Learning*

> 会议身份：`conference:cvpr:2026:conference-paper-id:Vyas_Pushing_the_Frontier_of_Audiovisual_Perception_with_Large-Scale_Multimodal_Correspondence_CVPR_2026_paper`


> ✅ 来源为官方会议 PDF；表格与 Figure 按原文证据绑定。PDF 公式以原页区域图片展示，未冒称作者原始 TeX。

> 会议来源：[官方记录](https://openaccess.thecvf.com/content/CVPR2026/html/Vyas_Pushing_the_Frontier_of_Audiovisual_Perception_with_Large-Scale_Multimodal_Correspondence_CVPR_2026_paper.html) · [官方 PDF](https://openaccess.thecvf.com/content/CVPR2026/papers/Vyas_Pushing_the_Frontier_of_Audiovisual_Perception_with_Large-Scale_Multimodal_Correspondence_CVPR_2026_paper.pdf)

标签：#对比学习 #多模态学习 #零样本 #音视频 #音频检索

评分：**8.9/10** | 创新 1.6/2 | 技术严谨 1.2/1.5 | 实验充分 1.3/1.5 | 清晰度 0.8/1 | 影响力 1.3/1.5 | 开源 1.2/1.5 | 可复现 0.3/0.5 | 工程/实践 1.2/1.5

排名：前25% | 文档类型：模型报告

## 👥 作者与机构

- Apoorv Vyas：机构信息未能从会议 PDF 纯文本可靠映射
- Heng-Jui Chang：机构信息未能从会议 PDF 纯文本可靠映射
- Cheng-Fu Yang：机构信息未能从会议 PDF 纯文本可靠映射
- Po-Yao Huang：机构信息未能从会议 PDF 纯文本可靠映射
- Luya Gao：机构信息未能从会议 PDF 纯文本可靠映射
- Julius Richter：机构信息未能从会议 PDF 纯文本可靠映射
- Sanyuan Chen：机构信息未能从会议 PDF 纯文本可靠映射
- Matthew Le：机构信息未能从会议 PDF 纯文本可靠映射
- Piotr Dollár：机构信息未能从会议 PDF 纯文本可靠映射
- Christoph Feichtenhofer：机构信息未能从会议 PDF 纯文本可靠映射
- Ann Lee：机构信息未能从会议 PDF 纯文本可靠映射
- Wei-Ning Hsu：机构信息未能从会议 PDF 纯文本可靠映射

## 📌 核心摘要

本文处理未标注长视频切片与弱音频字幕的跨模态对齐，输入为音频、视频及文本三模态信号，输出为可直接用于分类与检索的统一嵌入，难点在于音频字幕器质量弱、模态缺失不对称与语音音乐环境声域差异大。方法先用大语言模型融合弱音频字幕、置信度与视频字幕，生成音频、视觉与视听三类合成字幕。接着用视听多模态大模型与视频细节模型精炼字幕并扩至约亿级规模，为对比学习提供高质量对齐对。然后用分离音频塔、视频时空塔与视听融合塔在多类字幕间做覆盖十对的Sigmoid对比学习与语音细粒度自监督，输出统一表征。与单锚点绑定模型不同，该范式不以图像或文本为中心枢纽，而是补全缺失模态字幕并同时对齐所有组合，从而缓解缺模态时检索崩溃。在AudioCaps文本到音频检索基准下，PEAV的检索指标R@1为45.8，高于对比基线的检索指标R@1 35.4。结论适用边界为英语为主的10秒至30秒通用视听内容，对长时叙事、重度重叠语音与低资源语言的外推尚未验证。原文未披露训练、推理或部署成本。

## 🔗 开源与复现资源

- 代码相关资源：<https://github.com/facebookresearch/perception_models> — 链接可访问（HTTP 200）
- 模型相关资源：<https://github.com/facebookresearch/perception_models> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 输入是什么，目标是什么，先做什么复述准备？

本文解读的输入是会议论文正文与本次收到的 4 张官方原图像素，目标是让刚进入语音音乐音频方向的研究生能复述方法并核对条件。必须保留的信息包括数据规模与字幕类型、编码器结构与冻结更新方式、对比损失覆盖的模态对数量、2 阶段训练划分、零样本评测协议与指标方向、关键数字的基线对照。输出是 1 篇按学习依赖展开的技术解读，不做营销判断，不引入证据之外的效果承诺。

论文研究的任务是学习可直接用于分类和检索的音视频文本表示。输入是一个视频片段及其伴随音频，加上 3 类文本描述，输出是落在同一共享空间的音频向量视频向量文本向量和音视频联合向量。学习目标是让同一内容的跨模态向量靠近，不同内容的向量远离。初学者可以把例子理解为救护车案例：画面可能是远处车辆，声音是警笛，文本是紧急车辆描述，三者应被映射到相近位置，教学例子不附加论文未报告的数值。

复述前要先固定术语。白话说，对比学习就是按配对关系组织正负样本的训练方式。英文是 contrastive learning，后文简称对比学习。跨模态对齐指规定哪些模态之间要靠近。英文是 cross-modal alignment。

零样本指训练时未见下游测试集标注，测试时直接用文本类名或描述做检索分类。后续所有数字都要同时核对数据集模型阶段指标与聚合对象，不能只看数值大小。

### 同输入同目标的已有路线差在哪里？

与 PEAV 同输入同目标的路线可按锚点方式区分。一类是以文本为锚的音频文本模型和视频文本模型，代表是 CLAP 系列与视频语言预训练，监督主要来自音频文本对或视频文本对，运行时缺失锚定模态外的关系较弱。另一类是以图像或语言为中心绑定更多模态的模型，论文点名的有 ImageBind 与 LanguageBind，以及 InternVideo2 这类视频多模态模型，它们把不同模态都往一个中心模态靠。

论文报告的有源对照显示这种不对称带来短板。文本为锚的 LanguageBind 在缺少文本输入的视频到音频检索上明显偏低，图像为锚的 ImageBind 在缺少视频输入的文本到音频检索上明显偏低。PEAV 的选择是不设单一中心，而是用数据引擎补齐音频视觉音视 3 类字幕，再把对比目标铺到更多模态对上。这不是类别差异的胜负判断，而是在同为音视频文本编码器的运行阶段下，比较缺失某一模态时的可用性。

初学者容易误以为参数更大一定更好。论文在视频侧的对照恰好反驳这一点，PEAV 以更小的视频编码器参数在检索和分类上超过大数倍的模型，说明数据覆盖与时间建模同样关键。这为后文理解轻量时间变换器与长视频数据的安排做了铺垫。

### 为什么单锚绑定在音视频上不够用？

问题可以沿一个样本走完。取一段公园里男子颠球的视频，音频中有鸟鸣和远处孩童说话声，文本有纯音频描述纯视觉描述和音视联合描述 3 种写法。如果模型只学音频到音频字幕，那么查询只有画面没有文本时，模型没有学过视频到音频的直接靠近，只能靠间接关系猜测，检索容易失败。同理只学视频到文本，查询只有文本要找音频时也会断链。

论文把这种断链归因于两点。一是跨模态数据规模不匹配，音频视频文本三者天然不对等。二是单一中心绑定的脆弱性，所有模态都绕中心转，中心缺席的组合就没有直接监督。解决思路因此是两步：先用数据引擎把缺失的字幕类型补出来，再把对比损失从一两对扩大到 8 对乃至 10 对，让每个常用组合都有直接训练信号。

需要明确论文不解决的问题。论文不做音频生成与视频生成，不报告推理延迟与逐步收敛曲线，不测量误判率的人工听感评估。它的判断只在零样本检索召回率与分类准确率上成立，不能推广为所有感知任务的因果改善。

### PEAV 全景：一个样本如何走完输入到目标？

PEAV 全景可按一个 30 秒视频切片理解。音频波形先经 DAC-VAE 变成音频特征序列，再拼接可学习的分类标记后进入音频变换器编码器。视频的原始 RGB 帧先经预训练的 PE 帧编码器得到每帧空间特征，再拼接分类标记后进入浅层视频时间变换器。随后视频序列按最近邻插值与音频序列做时间对齐，再拼接联合分类标记进入音视频融合编码器。文本侧用 ModernBERT 编码 3 类字幕，分别经 3 个投影头得到对应音频视频音视的字幕向量。

**对比学习 × 跨模态对齐：** 对比学习负责把同一样本的不同模态表示拉近、把不同样本推远，跨模态对齐负责规定拉近发生在哪些模态之间，二者搭配的原因是只做音频到文本会留下视频缺席时的空洞，PEAV 把音频视频文本和 3 类字幕两两组合，新增作用是任何单模态缺失时仍有可用的联合嵌入。

训练目标是对每组规定的模态对计算 sigmoid 对比损失，把同一样本的两个向量点积放大、不同样本的点积压小，每对有自己的温度与偏置。预训练覆盖 8 组关系，微调再加两组文本条件的联合查询，总计 10 组。测试时按任务取对应向量算相似度，分类是把类名写成文本模板后做文本到音频或文本到视频检索，检索是直接算查询向量与候选向量的相似度并用双重 softmax 重加权。

下图是整体结构导读，重点看数据流向与损失分组的对应关系，先看主路径再数损失对数。

> **看图路径：** 1. 先从底部波形和视频帧图标沿箭头向上追踪到音频编码器和帧编码器；2. 再看音频视频融合编码器顶部输出的联合分类标记来自哪两路输入；3. 对照右侧单模态对齐与融合模态对齐两组列表数出预训练八组关系；4. 找到虚线框内微调才加入的两组文本条件联合查询指向哪里

[![原论文 Figure 2：Perception Encoder-AudioVisual (PEAV) is composed of an audio encoder, a frame encoder, video…](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/ceee9ca74922/figure-2.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/ceee9ca74922/figure-2.png)

*论文图 2。原论文 Figure 2：“Perception Encoder-AudioVisual (PEAV) is composed of an audio encoder, a frame encoder, video encoder, audio-video fusion encoder and a text encoder.”。*

从像素可见，底部左右两路分别是波形与视频帧图标，向上分别经过 DAC-VAE 与帧编码器，再到音频编码器与视频编码器，最后汇入顶部的融合编码器。右侧明确列出单模态对齐 6 组与融合模态对齐两组，虚线框标出微调才加入的两组。文本编码器单独在中部，输入标注为 3 类字幕。这张图说明方法全景不是单个大模型端到端黑盒，而是每种嵌入都有独立编码路径与直接对比监督，这是后文能做联合检索的结构基础。

### 编码器各自分工什么，细节从哪里来？

组件分工要逐个落实。DAC-VAE 是冻结的音频特征提取器，负责把原始波形变成紧凑特征，不参与语义对齐。音频变换器是可训练的主干，PEAV 大模型用 28 层，负责捕捉时间上下文并输出分类标记向量。PE 帧编码器是预训练的空间编码器，负责每帧的视觉细节。视频时间变换器只有 4 层，负责跨帧动态，参数远小于空间部分。

融合变换器 6 层，负责音视时间对齐后的联合上下文。文本编码器用 ModernBERT，支持 512 上下文以容纳转录长文本。

**自监督损失 × 对比损失：** 对比损失负责语义层面的跨模态靠近，自监督损失负责保留音频细粒度时间细节，二者搭配的原因是只做对比会丢掉音素级信息，论文在音频编码器上加 BEST-RQ 伪标签预测，新增作用是语音转录检索和语音分类等需要细节的任务不被语义对齐牺牲掉。

具体动作上，音频序列加分类标记后经带旋转位置编码的变换器，输出分类标记经投影到共享空间。视频帧特征加分类标记后经浅层变换器，同样投影到共享空间。融合路径把对齐后的音视序列加联合标记再编码。文本侧 3 类字幕各走独立投影头，得到可分别与音频视频联合向量对比的文本向量。微调时还把音频分类标记与文本分类标记做通道拼接再投影，得到文本增强的联合查询向量，用于文本加视频查音频等任务。

第 2 阶段字幕改进的输入输出关系如下，先理解视觉与音频两条支路的分工，再看 3 类音频变体的用途。

> **看图路径：** 1. 先确认顶部同时出现音频波形与视频帧图标表示音视联合输入；2. 再分辨视觉支路用细粒度视频描述模型加总结的改进路径；3. 最后看音频支路生成事件字幕环境描述三类变体的分支说明

[![原论文 Figure 4：Data Engine: Stage-2 Improved Captions: We im- prove both the audio and visual captions in the…](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/ceee9ca74922/figure-4.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/ceee9ca74922/figure-4.png)

*论文图 4。原论文 Figure 4：“Data Engine: Stage-2 Improved Captions: We im- prove both the audio and visual captions in the second stage.”。*

从现有像素看，该图顶部同时给出音频与视频图标，表明第 2 阶段以音视联合为输入。视觉支路用面向细粒度时空事件的视频模型生成描述，再与第 1 阶段字幕做总结。音频支路按配方训练音视多模态大模型，分别生成关注音频事件、完整字幕与声学环境的 3 个变体。解释是第 2 阶段不再只靠弱字幕器加改写，而是用第 1 阶段训练出的 PEAV 做编码器去驱动更强的描述模型，从而补上环境与事件细节。

**音频编码器 × 融合编码器：** 音频编码器负责把波形特征变成保留音色音素细节的音频表示，融合编码器负责把音频和视频的时间序列对齐后再做联合建模，二者搭配的原因是单看音频难判断画面上下文，单看视频难分辨细微声音，组合后新增的音视频联合嵌入可直接用于音视频互检和联合分类。

### 数据引擎两阶段做了什么，训练如何组织？

训练分数据构造与参数优化两层。数据引擎第 1 阶段用 Llama 3.1 8B 把两个弱音频字幕模型的输出、Joint-CLAP 给出的置信度离散化为低中高、以及视频字幕器的输出放在一起改写，1 次生成音频视觉音视 3 类字幕，处理的是按 30 秒切分的约亿量级视频。论文的盲测报告在约 50 条上改写音频字幕严格优于 EnCLAP 的占多数，持平次之，变差最少，但这只是小样本人工比较，不能当成全量质量保证。

**合成字幕 × 真实字幕：** 合成字幕负责补齐无标注视频的音频视觉和音视描述以扩大规模和覆盖，真实字幕负责提供人工校验过的准确监督，二者搭配的原因是合成量大但有噪声、真实准但量小，混合后论文报告互补提升，新增作用是在 1 比 10 左右的配比下同时保多样性和准确性。

第 2 阶段如上节所述，用更强的视频模型与音视多模态模型分别改进视觉与音频字幕。预训练共用 92M 去重后的音视频样本，含合成与少量真实字幕。微调用额外 32M，重点加强英文语音转录与含重要视觉概念的视频，并上采样。优化上视频音频融合与文本编码器端到端微调，预训练 250,000 步批量 3024，微调 50,000 步，学习率按原文设置。音频编码器另加 BEST-RQ 自监督分支，用随机投影量化器对未遮蔽特征生成伪标签，预测被遮蔽帧，保留细粒度信息。

第 1 阶段合成管线的动作如下，重点看置信度与视频上下文如何进入改写。

> **看图路径：** 1. 先从底部音频和视频图标分别找到弱音频字幕器与视频字幕器入口；2. 再看中间置信度模块如何把打分送入上方的改写横条；3. 最后对照顶部三列输出区分纯音频音视联合与纯视觉字幕的措辞差异

[![原论文 Figure 3：Data Engine: Stage-1 Synthetic Captions: In the first stage we use a synthetic captioning…](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/ceee9ca74922/figure-3.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/ceee9ca74922/figure-3.png)

*论文图 3。原论文 Figure 3：“Data Engine: Stage-1 Synthetic Captions: In the first stage we use a synthetic captioning pipeline that uses Llama 3.1 8B to combine information from weak audio captioning models…”。*

从像素可见，底部音频图标同时指向弱音频字幕器与置信度模块，底部视频图标指向视频字幕器，3 路向上汇入横向的改写条，顶部输出三列分别为纯音频、音视联合与纯视觉字幕。左侧示例中音频列写鸟鸣与孩童说话，中间列补上男子穿蓝衣在公园颠白球的视觉信息，右侧列只写视觉场景。这说明改写的搭配理由是弱音频输出各有不同错误且置信度可指示，视频文本可提供消歧上下文，组合后 3 类字幕各有侧重而非简单复制。

### 测什么，和谁比，条件是否一致？

评测按 4 类问题组织。声音与音乐测文本到音频、视频到音频与分类，数据集包括 AudioCaps、Clotho-V2、VALOR、VGGSound、GTZAN、US8K、NSynth、ESC50 等。语音测转录检索与属性分类，用 VCTK 做语音到转录检索，用 Dynamic-SUPERB 测口音语种情感与发声检测。视频测文本到视频与分类，用 MSR-VTT、MSVD、ActivityNet、DiDeMo 做检索，用 Kinetics 系列、UCF101、HMDB 做分类。另有内部视频到音乐检索用于变长视频。

比较对象包括音频文本模型与音视文本模型，论文把基线接入同一评测管线并用双重 softmax 重加权，以保证协议一致。指标方向都是越高越好，检索用召回率 R@1，分类用 top1 准确率。条件一致性分两档：预训练做去重与下游排除的干净零样本；微调分域外数据与含下游训练划分两档，后者用于与 CLAP 等在音频基准上的已有设置对齐。视频结果默认坚持干净零样本，不用下游样本。

模型规模分小中大三档，音频编码器从约 0.09B 到 1.1B，视频空间部分复用 PE-L，时间与融合部分较轻。视频评测分 16 帧与 30 帧每秒两档，前者省算力，后者性能更好。复现时要先确认帧采样与时长处理，因为固定帧数模型在 5 到 30 秒变长输入上会吃亏，而 PEAV 的时间插值与变换器是其处理变长的关键。

### 主结果在哪些任务上成立，代价与反例是什么？

主结果的比较问题是：在同一零样本协议下，PEAV 相对可运行基线在声音音乐语音视频上是否全面更好，指标方向是否一致向上。公平条件是同一管线与同一重加权，检索看 R@1，分类看准确率。下表先看模型配置，确认参数主要花在音频主干与文本编码器，视频时间部分很轻，这决定了复现时的显存与训练时长预算。

| Scale Tower | Params Width | Depth | MLP | Heads | Dim |
| --- | --- | --- | --- | --- | --- |
| Audio 0.09B | 768 | 12 | 2048 | 6 | 1024 |
| Audio-Video 0.05B | 768 | 6 | 2048 | 6 | 1024 |
| Text 0.39B | 1024 | 28 | 5248 | 16 | 1024 |
| Audio 1.11B | 1792 | 28 | 4800 | 14 | 1024 |
| Audio-Video 0.25B | 1792 | 6 | 4800 | 14 | 1024 |

该配置表显示小中大三档共享视频空间与文本编码器，差异主要在音频与时间融合宽度深度。大模型音频达 28 层，融合 6 层。代价是预训练需数百卡数天，微调另需数万步。理解这一点后，再看检索分类数字才有成本概念，不是只看精度。

下图是跨任务总览导读，先按分区看覆盖度，再看包络大小判断全面性。

> **看图路径：** 1. 先按外圈声音音乐语音视频四个分区确认每个轴的任务与指标方向；2. 再比较最外圈深蓝色多边形与其他颜色多边形在各轴上的包络大小；3. 最后看右下图例区分不同基线只覆盖部分轴而 PEAV 覆盖全部轴

[![原论文 Figure 1：Perception Encoder Audiovisual (PEAV) is a family of audio-video-text (AVT) encoders.](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/ceee9ca74922/figure-1.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/ceee9ca74922/figure-1.png)

*论文图 1。原论文 Figure 1：“Perception Encoder Audiovisual (PEAV) is a family of audio-video-text (AVT) encoders.”。*

从像素可见，外圈按声音音乐语音视频分区，每个轴标注数据集与指标，最外圈深蓝色多边形在多数轴上包住其他颜色，图例区分 PEAV 与 LanguageBind、ImageBind、M2D-CLAP 等。这支持论文的判断：PEAV 不是只在单域取胜，而是在多轴上同时外扩。但也要看到语音部分某些轴的优势幅度较小，且雷达图不能读出方差与显著性，不能把包络大直接等同于每组都显著。

下表整理声音侧关键对照，保留可运行基线与 PEAV 的实际值，差距另行说明而非替代收益。

| 来源证据 | 量化值 1 | 量化值 2 | 量化值 3 | 量化值 4 |
| --- | --- | --- | --- | --- |
| 来源句 1 | 35.4 | 1 | 45.8 | — |
| 来源句 2 | 20 | 54 | 10 | 35.4；1；45.8；36.0；47.1；2.1；85.6；0；60.4；66.5 |
| 来源句 3 | 54 | 0 | 10 | 12.1；19.7；10.6；9.1；13.3；6.5；46.8；0.2；1.6；1.4；44.1；26.0；45.4；71.9；37.6；66.5；88.3；26.6；23.1；13.5；20.5；89.0；14.6；50.8 |

表后解释：声音侧 PEAV 在文本到音频与视频到音频上相对基线提升明显，分类也有提升。代价是需要大规模合成字幕与 2 阶段训练，小模型已强但大模型在部分语音细节上更好。未胜出与边界是：域外微调版本在部分语音转录上低于全量微调，说明语音转录能力高度依赖微调阶段加入的转录数据；内部音乐检索的变长处理仍需 30 帧每秒设置，固定 16 帧在变长上相对吃亏。

下表整理视频侧关键对照，同样保留基线与 PEAV 的实际值。

| 来源证据 | 量化值 1 | 量化值 2 | 量化值 3 | 量化值 4 |
| --- | --- | --- | --- | --- |
| 来源句 1 | 76.9 | 78.9 | 2 | 4 |
| 来源句 2 | +20.1 | +25.6 | 1 | — |

表后解释：视频侧 PEAV 在 ActivityNet 等长视频检索上提升最大，分类小幅超过大数倍模型。支持的判断是轻量时间建模加更广的音视频数据对长语义视频有效。限制是视频结果依赖的视频字幕质量与时长分布，论文未报告推理延迟与逐视频失败分析，不能承诺延迟改善。联合嵌入部分见概念桥，文本加音频查视频等组合在互补时增益大，但单模态已足够时增益会缩小。

**单模态嵌入 × 联合嵌入：** 单模态嵌入指单独的音频视频或文本向量，联合嵌入指把文本与视频或文本与音频先拼在一起再投影到共享空间的向量，二者搭配的原因是查询时文本可以补上原始声音或画面缺失的线索，新增作用是文本加视频查音频、文本加音频查视频等新检索形式。

### 拿掉或换掉哪一块，效果如何变化？

消融按学习依赖组织。数据引擎对照比较弱字幕器直接输出与 1 个阶段 2 阶段改进字幕，报告 2 阶段在多数声音语音视频任务上进一步提升，支持视频上下文与置信度改写的价值。数据配比对照比较只用真实、只用合成与混合，报告混合更好，合成比例到 1 比 10 左右继续提升，再加则无额外增益，说明多样性有上限。数据规模对照从 2M 到 64M，报告平均性能单调上升并在 64M 达峰，支持扩大合成规模的价值。

模型规模对照把音频变换器从 8 层扩到 28 层，报告到 20 层左右持续提升，之后在消融的有限步数与数据下饱和。这不能读成越大越差，只能读成在该消融预算下容量未被充分利用，全量训练的大模型仍是最强。对比目标对照从只做音频到音频字幕逐步加到 8 组，报告覆盖越多对齐越强，峰值在 8 组全开，还发现加入视频到音频字幕等跨模态对能带动文本到视频检索与分类，支持共享空间需要多对直接监督。

每个消融都有未验证边界。字幕盲测只有约 50 条，不能推广全量。配比与规模结论只在阶段一预训练的 100,000 步小批量消融设置下成立，全量 2,500,000 步大批量下的最优点可能偏移。对比对数结论未报告每对的梯度贡献分解，不能说哪 1 对必然最重要。

### 哪些结论还不能下，缺了什么验证？

首先区分报告与推测。论文直接报告的是零样本检索与分类数字，有源支持的是多对对比与混合数据带来提升，可能但待验证的是这些表示能否直接迁移到生成与细粒度定位，因为论文只在补充中提帧级微调用于声音事件检测，正文未给完整证据。

缺项要具体指出。训练资源只给卡数与天数，未给显存峰值与数据清洗耗时。推理开销未报告不同帧率下的延迟与吞吐，不能从 30 帧每秒精度更高推出延迟更低。统计方法未报告多次种子方差与显著性检验，总体趋势不等于每组每步都成立。数据侧未公开合成字幕的错误率分布与去重细节全文，复现时需按论文管线重跑才能对齐。

相关性不是因果。合成比例高时性能高，可能同时受益于数据多样性与文本质量，不能单归因于数量。音频编码器大时好，可能同时受益于容量与自监督分支，不能单归因于层数。使用时应把这些当作待补验证，而不是技术错误。

### 要复现先做什么，需要什么条件？

何时值得尝试：如果任务是零样本声音音乐语音视频检索分类，且查询经常缺失某一模态，PEAV 的联合嵌入值得尝试。如果任务是长视频文本检索或变长音频检索，其时间建模与多对监督更对症。如果只有单域音频且已有强领域模型，复现收益可能小于预期，应先做小规模对照。

复现先做什么：先拉取官方仓库确认代码与模型当前可用，资源状态显示代码与模型链接本次可达且状态为 200，可以写当前可用。接着按表 1 的数据构成准备 92M 预训练与 32M 微调的划分，先用小模型与 16 帧设置跑通管线，再切 30 帧每秒。文本编码器用 ModernBERT 并保留 512 上下文以支持转录，音频用 DAC-VAE 特征，视频用 PE 帧特征，严格按 8 组预训练加两组微调的损失列表实现。评测接入同一双重 softmax 重加权，否则数字不可比。

还需补哪项验证：补域外与含下游两档微调的对照，补 16 帧与 30 帧每秒的延迟与显存记录，补合成与真实字幕在自有数据上的抽检。关键超参数保留预训练批量与步数、微调步数、温度偏置按模态对独立设置。区分代码开源、权重下载与系统可运行：有仓库不等于一键可运行，变长视频与大规模数据的管线仍需自行适配。

### 一句话收束：方法选择与适用边界是什么？

收束回到中心矛盾：单一锚点绑定省数据但在缺失模态时断链，PEAV 选择用 2 阶段合成字幕补齐 3 类描述，再用 8 到 10 组对比把每种常用组合都直接拉近。强证据是跨声音音乐语音视频的零样本检索分类全面外扩，且以更小视频参数超过大数倍模型。主要代价是亿量级数据构造与大音频主干的训练成本，以及语音转录能力对微调转录数据的依赖。

给新生的可执行建议是：复述时先画出 5 路编码器与 10 组损失的对应表，再默写数据引擎 2 阶段的输入输出，最后用 3 组数字锚定记忆，即文本到音频与分类的提升、长视频检索的大幅提升、视频到音频相对单锚基线的数量级差距。遇到新任务时先问查询是否缺模态、视频是否变长、是否有转录需求，再决定用单模态向量还是联合向量，用 16 帧还是 30 帧每秒。论文特有的误解是把雷达包络大当成所有细节都好，实际应回到分任务表格看未胜出项与边界，缺失的延迟与方差验证要自己补。

## 📐 原文公式与排版

以下展示论文原页中的数学表达区域，保留原始上下标、分式和符号排版。区域序号仅用于本文导航，不是论文公式编号。

另有 4 个候选区域因边界不明确或图片数量、尺寸限制未展开；请[查看完整论文](https://openaccess.thecvf.com/content/CVPR2026/papers/Vyas_Pushing_the_Frontier_of_Audiovisual_Perception_with_Large-Scale_Multimodal_Correspondence_CVPR_2026_paper.pdf)中的原始排版。

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。
- 评分规则：type-aware-v1
- 评分模型：muse-spark-1.3-contributor
- 评分请求协议：openai_responses

---

[← 返回 cvpr-2026 论文汇总](/posts/conference-cvpr-2026/)
