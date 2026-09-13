---
title: "Harmony: Harmonizing Audio and Video Generation through Cross-Task Synergy"
date: 2026-09-13
draft: false
description: "针对联合扩散中双路噪声导致的对齐漂移，Harmony 用音频驱动与视频驱动辅助任务提供干净锚点，并以全局局部解耦交互与同步增强引导提升细粒度同步，主结果报告 Sync-C 为 5.61、Sync-D 为 7.53，代价是三阶段训练与双分支推理开销。"
tags: ["扩散模型", "音视频", "音乐", "语音", "音视频生成"]
categories: ["cvpr-2026 论文"]
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_paper_id: "conference:cvpr:2026:conference-paper-id:Hu_Harmony_Harmonizing_Audio_and_Video_Generation_through_Cross-Task_Synergy_CVPR_2026_paper"
paper_digest_source_kind: conference
paper_digest_conference_id: "cvpr-2026"
paper_digest_conference_record_url: "https://openaccess.thecvf.com/content/CVPR2026/html/Hu_Harmony_Harmonizing_Audio_and_Video_Generation_through_Cross-Task_Synergy_CVPR_2026_paper.html"
paper_digest_conference_pdf_url: "https://openaccess.thecvf.com/content/CVPR2026/papers/Hu_Harmony_Harmonizing_Audio_and_Video_Generation_through_Cross-Task_Synergy_CVPR_2026_paper.pdf"
paper_digest_api_reader_contract: "beginner-researcher-v3"
paper_digest_api_reader_article_sha256: "94433d3d8867e2a35905188db4d4b28ae4310924ee71f05ad871174d2b7fbeb1"
paper_digest_api_reader_plan_sha256: "d60cec8090314611fb9ebe7467bd3c10cc39b87bc7cb2f14f15b8d5cea8d27f4"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings-v4"
paper_digest_api_reader_source_bindings_sha256: "98dbe7abd8ec97db7d649a8e216e455d8973f0309d4897659ecc148d3f7e61b5"
paper_digest_api_reader_source_table_count: 3
paper_digest_api_reader_source_formula_count: 0
paper_digest_api_reader_structured_artifacts_sha256: "94a76976a25a98917412678ca3c47cc3cf356aa6b4335602e1e6d0e12b3de5a9"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity-v1"
paper_digest_api_reader_author_identity_sha256: "15398f342800156645ca776579bfae96ac3fc27fde4d1d96be18c389449f63a9"
paper_digest_api_reader_author_count: 9
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity-v1"
paper_digest_api_reader_resource_identity_sha256: "8b4278b4756d56e010fa9c275de5e48cd45bdd27dcfa6a5097085b1b143e300f"
paper_digest_api_reader_resource_count: 2
paper_digest_api_reader_decision_projection: "api-reader-decision-projection-v2"
paper_digest_scoring_contract: "api-scoring-audit-v2"
paper_digest_taxonomy_contract: "paper-taxonomy-flat-tags-compat-v1"
paper_digest_taxonomy_selection_contract: "paper-taxonomy-selection-v1"
paper_digest_taxonomy_registry_version: "paper-taxonomy-v1"
paper_digest_taxonomy_registry_sha256: "15c82a567ce5a55dc1175684ed08b64c158558639d9c8fb822c9587ec32a8778"
paper_digest_taxonomy_concepts: [{"facet":"method","id":"method.diffusion","label":"扩散模型"},{"facet":"signal","id":"signal.audiovisual","label":"音视频"},{"facet":"signal","id":"signal.music","label":"音乐"},{"facet":"signal","id":"signal.speech","label":"语音"},{"facet":"task","id":"task.av-generation","label":"音视频生成"}]
paper_digest_primary_task: "音视频生成"
paper_digest_primary_method: "扩散模型"
paper_digest_score: 7.0
paper_digest_rank_bucket: "前50%"
paper_digest_document_type: "方法研究"
paper_digest_conference_structure: replayable-pdf-layout-v1
---

# 📄 同时去噪的音视频为何对不齐：Harmony 用跨任务监督稳住对应关系

> 英文题目：*Harmony: Harmonizing Audio and Video Generation through Cross-Task Synergy*

> 会议身份：`conference:cvpr:2026:conference-paper-id:Hu_Harmony_Harmonizing_Audio_and_Video_Generation_through_Cross-Task_Synergy_CVPR_2026_paper`


> ✅ 来源为官方会议 PDF；表格与 Figure 按原文证据绑定。PDF 公式以原页区域图片展示，未冒称作者原始 TeX。

> 会议来源：[官方记录](https://openaccess.thecvf.com/content/CVPR2026/html/Hu_Harmony_Harmonizing_Audio_and_Video_Generation_through_Cross-Task_Synergy_CVPR_2026_paper.html) · [官方 PDF](https://openaccess.thecvf.com/content/CVPR2026/papers/Hu_Harmony_Harmonizing_Audio_and_Video_Generation_through_Cross-Task_Synergy_CVPR_2026_paper.pdf)

标签：#扩散模型 #音视频 #音乐 #语音 #音视频生成

评分：**7.0/10** | 创新 1.5/2 | 技术严谨 1.0/1.5 | 实验充分 1.0/1.5 | 清晰度 0.8/1 | 影响力 1.2/1.5 | 开源 0.2/1.5 | 可复现 0.3/0.5 | 工程/实践 1.0/1.5

排名：前50% | 文档类型：方法研究

## 👥 作者与机构

- Teng Hu：机构信息未能从会议 PDF 纯文本可靠映射
- Zhentao Yu：机构信息未能从会议 PDF 纯文本可靠映射
- Guozhen Zhang：机构信息未能从会议 PDF 纯文本可靠映射
- Zihan Su：机构信息未能从会议 PDF 纯文本可靠映射
- Zhengguang Zhou：机构信息未能从会议 PDF 纯文本可靠映射
- Youliang Zhang：机构信息未能从会议 PDF 纯文本可靠映射
- Yuan Zhou：机构信息未能从会议 PDF 纯文本可靠映射
- Qinglin Lu：机构信息未能从会议 PDF 纯文本可靠映射
- Ran Yi：机构信息未能从会议 PDF 纯文本可靠映射

## 📌 核心摘要

Harmony处理文本加参考图像与参考音频到同步音视频的联合生成，需同时满足唇动级时间对齐与情感氛围级风格一致。难点在于双路噪声潜变量共演化导致对应关系漂移，早期高噪声阶段最优映射持续游移。方法链分三步衔接：跨任务协同先以音频驱动视频与视频驱动音频的单侧干净条件稳定对齐先验，再将共享交互参数用于联合去噪。全局-局部分离交互接着用旋转位置编码缩放对齐的帧级交叉注意力负责局部时间同步，并用视觉调制参考音频潜变量负责全局风格注入。同步增强无分类器引导最后在推理时以静音音频与静态视频为负锚分离并放大音画关联向量。相比单体全局交叉注意力和仅增强文本依从的标准引导，该设计将风格与时间解耦并直接优化跨模态一致。在Harmony-Bench三类平均基准下，Harmony的Sync-C得分为5.61，高于Ovi的Sync-C得分为4.04。该结论适用边界受限于短片段人物说话与环境声场景，对长时叙事多说话人重叠与音乐泛化尚未验证，原文未披露训练、推理或部署成本。

## 🔗 开源与复现资源

- 演示资源：<https://sjtuplayer.github.io/projects/Harmony> → <https://sjtuplayer.github.io/projects/Harmony/> — 链接可访问（HTTP 200）
- 第三方资源：<https://gemini.google.com/> — 暂时无法访问
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 输入是什么，输出是什么，为什么对齐这么难？

这篇论文研究的是联合音视频生成。输入是一组多模态条件，视频侧包括参考图像与描述性提示，音频侧包括参考音频、环境声描述与语音转录文本；输出是一段视频与一段音频，要求两者在时间上与风格上互相吻合。目标读者是刚进入语音、音乐与音频方向的研究生，因此先把任务边界讲清：这里不是先做好无声视频再配音，也不是先有音频再做口型动画，而是用一个双分支扩散模型同时从噪声出发去噪出视频潜变量与音频潜变量。

论文强调开源模型与闭源系统的主要差距不在单模态清晰度，而在跨模态同步。必须保留的关键信息是作者提出的 3 个障碍：其一是对应漂移，即两侧潜变量同时演化、早期噪声很大，对齐目标不稳定；其二是架构张力，即帧级精确时间对齐与整体风格一致需要不同感受野；其三是常规无分类器引导只放大文本依从，不放大音视频互作。本文的输出是 1 篇可核对的方法解读，后文按学习依赖展开，先讲相关路线，再讲全景与组件，最后讲训练、评测与复现。

### 同输入同目标的路线有哪些，各自缺了哪一块？

按同输入、同目标、同监督来对照，视频生成路线以无声视频为目标，代表是 AnimateDiff、SVD 以及 Hun yuanVideo 与 Wan 等扩散 Transformer，优点是视觉质量高，但天然没有音频分支，无法评价唇同步与声画一致。音频驱动路线以干净音频为输入生成视频，或以视频生成音频，优点是单向监督稳定，但需要事先备好另一模态，不能 1 次交付完整音视频。联合音视频生成是本文的直接同类，早期如 MM-Diffusion、JavisDiT、AnimateSI 多限于环境声，难以生成自然人声；JAM-Flow 专注语音但不做环境声；UniVerse-1 与 Ovi 试图两者兼顾，但论文指出前者同步差、后者对齐不稳。

教学例子是：同样给一张人物图与一句台词，纯视频模型只管嘴是否动得自然，不管声音是否存在；音频驱动模型若给定干净语音，嘴形容易学准；联合模型若两侧都从噪声起步，则嘴形与语音同时抖动，对应关系最难固定。这个对照说明本文不是在无声视频赛道上加分，而是在联合生成赛道上解决同步机制问题。

### 三个障碍各自卡住了学习的哪一步？

第一个障碍是对应漂移。联合扩散的标准做法是把视频与音频编码为潜变量，然后用并行主干分别去噪，并通过交互模块交换信息，优化双路噪声预测误差。问题出在训练早期：两侧都是大噪声，模型试图在两个随机演化序列之间学习映射，最优映射本身随噪声变化而漂移，梯度不稳定，收敛慢。论文用对照实验证据支持这一判断：相同网络结构下，音频驱动任务因一侧干净而快速收敛到高对齐分数，联合任务则明显更慢。第二个障碍是局部与全局目标冲突。

唇动、敲击等需要帧级精度，情绪、音色、环境氛围需要全局一致，若只用一路全局交叉注意力同时做两件事，模型被迫折中，两头都做不好。第 3 个障碍是常规引导的方向不对。它对比文本条件与空文本预测，放大的是贴合提示词的程度，不分离音频引起的视觉变化或视觉引起的听觉变化，因此对声画同步没有显式推力。3 个障碍分别对应训练范式、交互架构与推理引导，这也是后文 3 个设计的由来。

### Harmony 让一个样本走完输入到输出要经过哪些部件？

先沿一个样本走完全程。假设输入是一张弹吉他女性的参考图、一句视频描述、一句环境声描述、一句歌词转录与一段参考音色。视频分支用视频编码器与 Wan 注意力模块处理参考图与带噪视频，音频分支用音频编码器与多模态扩散 Transformer 处理带噪音频、参考音频潜变量、语音编码器输出与 T5 提示编码。2 分支在每一层通过全局局部解耦交互模块交换信息，最终各自去噪得到同步的视频帧序列与音频波形。下图是理解该流程的关键，先看整体布局再读文字会更顺。

> **看图路径：** 1. 先看左半部分三条训练路径的输入噪声与时间步标注，确认哪一侧被置零；2. 再看右半部分视频与音频双分支的编码器与条件输入分别是什么；3. 最后定位中间 Local Sync 与右侧 Global Sync 两块粉色区域的箭头走向

[![原论文 Figure 2：(a) Mitigating Correspondence Drift with Cross-Task Synergy.](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/ed6dd467f232/figure-2.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/ed6dd467f232/figure-2.png)

*论文图 2。原论文 Figure 2：“(a) Mitigating Correspondence Drift with Cross-Task Synergy.”。*

上图左侧展示了跨任务协同的 3 条路径：中间是双侧都加噪的联合生成，左右两侧分别把音频时间步或视频时间步置零，形成干净锚点；右侧展示了双分支架构，上方是各编码器，下方粉色区域分为局部同步与全局同步。局部同步先做旋转位置编码对齐，再做音频到视频与视频到音频的帧级注意力；全局同步以参考音频为查询、以全视频为键值做交叉注意力，再把结果拼回音频输入。

沿样本看，语音内容由专用语音编码器保证发音精度，场景风格由 T5 编码与全局模块保证氛围一致，时间对齐由局部帧窗口保证何时张嘴、何时拨弦。这个全景先建立输入、表示、组件、目标、输出的对应，后文再拆开每个组件的计算。

### 局部时间对齐与全局风格一致如何分工又不打架？

局部对齐要解决的核心计算问题是采样率不一致。视频潜变量时间长度与音频潜变量时间长度不同，某一时刻的事件可能落在另一模态 2 帧之间，若直接对离散帧做注意力，只能选最近但不精确的帧，引入抖动。做法是在注意力之前统一时间坐标系：把源模态某帧索引映射为目标时间轴上的虚拟位置，再计算旋转位置编码，使位置编码可比；然后对每个视频帧构造相邻音频帧的小窗口做交叉注意力，视频到音频方向对称操作，最后用残差加回原潜变量。这样既保留局部注意力的高效与精度，又处理了尺度失配。

**Correspondence Drift × Cross-Task Synergy：** Correspondence Drift 指联合生成早期音频与视频潜变量都高度含噪，两者映射目标持续抖动，难以稳定学习；Cross-Task Synergy 指同时训练联合生成主任务与音频驱动视频、视频驱动音频两个辅助任务，用一侧干净信号固定另一侧。两者的搭配理由是漂移来自双侧不确定，辅助任务把双侧不确定降为单侧不确定；组合后，先学到的稳定对齐先验再反哺主任务，加速收敛并提高最终同步质量。

全局风格对齐则换一条路。它不直接改目标音频，因为那会扰动正在去噪的细粒度结构；它改的是参考音频潜变量，把全视频作为键值、参考音频作为查询做残差交叉注意力，得到视觉感知的参考表示，再拼接到带噪音频之前参与去噪。这样音色与情绪等全局属性随视频整体走，而帧级抖动不受影响。

**RoPE-Aligned Frame-wise Attention × Global Style Alignment：** RoPE-Aligned Frame-wise Attention 负责局部时间对齐，把每帧注意力限制在另一模态相邻小窗口，并用缩放旋转位置编码对齐不同采样率的时间轴；Global Style Alignment 负责整体风格一致，以参考音频潜变量为载体，用全视频上下文去调制它。搭配原因是帧级口型与整体情绪需要不同感受野，单一路全局注意力会顾此失彼；解耦后局部管何时动，全局管像谁、什么氛围，互不干扰。

推理侧的同步增强引导把上述能力用起来。视频引导时，用静音音频作为负锚点，得到静态场景的预测，再用联合预测减去它，分离出由声音引起的视觉变化并放大；音频引导时，用静态视频作为负锚点，分离出由运动引起的声音并放大。下图把负锚点、正引导的箭头画得很直观。

> **看图路径：** 1. 先看顶部四个输入潜变量中哪两个是静音音频与静态视频负锚点；2. 再看中间三路分别标注为音频驱动、联合生成、视频驱动的输出；3. 最后看底部绿色框内正负引导箭头如何汇入视频与音频去噪结果

[![原论文 Figure 4：SyncCFG employs the mute audio and static video as the negative anchors to capture the…](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/ed6dd467f232/figure-4.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/ed6dd467f232/figure-4.png)

*论文图 4。原论文 Figure 4：“SyncCFG employs the mute audio and static video as the negative anchors to capture the synchronization feature, which can effectively enhance the audio-video alignment.”。*

上图顶部黑色块为静音音频，右上为静态视频，中间为带噪视频与音频；下方绿色框标出负引导与正引导如何汇入去噪一步。注意常规引导放大的是文本条件差值，这里放大的是跨模态差值，这是性质上的不同。

**standard CFG × SyncCFG：** standard CFG 指用文本条件与空文本无条件预测之差来放大文本依从性，分工是让输出更贴提示词；SyncCFG 指用联合预测与静音音频或静态视频驱动预测之差来放大音视频互作，分工是让输出更同步。搭配理由是前者不区分跨模态一致性，后者补上这 1 维；组合意义是推理时把文本引导换成同步引导，直接放大嘴动、敲击等与声音相关的视觉或听觉变化。

### 三项损失如何组织，训练分几个阶段？

训练目标是三项损失的加权和：联合损失同时预测视频与音频噪声，音频驱动损失在干净音频条件下预测视频噪声，视频驱动损失在干净视频条件下预测音频噪声。实现上通过时间步控制：音频驱动时把音频时间步设为零，视频驱动时把视频时间步设为零，其余条件如文本提示与语音嵌入保持不变。

**audio-driven video generation × video-driven audio generation：** audio-driven video generation 指给定干净音频潜变量去噪视频，视频时间步为 t 而音频时间步置零；video-driven audio generation 指给定干净视频潜变量去噪音频，分工对称。两者搭配的理由是分别提供听觉锚定视觉、视觉锚定听觉的单向强监督；组合意义是联合损失之外再加两项驱动损失，共同约束同一套交互模块，使其在干净条件下先学会正确对应。

论文报告训练分 3 个阶段：先在全部音频数据上做基础音频预训练，再用多话语语音数据做音色解耦微调，最后做跨任务联合音视频训练。视频分支从 Wan2.2 模型初始化，音频分支为对称设计的多模态扩散 Transformer。最终联合阶段的超参数在正文有明确交代，整理如下。训练动态方面，下图对比了 3 种策略的对齐分数随迭代的变化，先读图再看结论。

> **看图路径：** 1. 先确认横轴是训练迭代数 0 到 5000，左右纵轴分别是同步置信与同步距离；2. 再区分蓝色音频驱动、红色联合生成、绿色跨任务协同三组实线与虚线的走向；3. 最后比较 1200 步前后三组曲线收敛速度与最终高低位置的差异

[![原论文 Figure 3：Comparison of the audio-video alignment score among different training strategies.](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/ed6dd467f232/figure-3.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/ed6dd467f232/figure-3.png)

*论文图 3。原论文 Figure 3：“Comparison of the audio-video alignment score among different training strategies.”。*

上图横轴为 0 到 5000 次训练迭代，左侧纵轴为平均同步置信，右侧纵轴为平均同步距离；蓝色为音频驱动，红色为联合生成，绿色为跨任务协同，实线为置信、虚线为距离。可以看到音频驱动快速上升，联合生成缓慢爬升，而跨任务协同紧跟音频驱动的轨迹，说明干净锚点确实提供了稳定梯度。论文据此认为先在确定性任务中学到的对齐知识起到了催化作用。需要指出缺项：原文未报告两项驱动损失的权重系数具体取值，也未给出梯度是否截断交互路径的细节，复现时需按缺失超参数处理，不从模型名推定实现。

### 数据、基准与指标如何搭建，方向怎么看？

数据方面，模型在超过 400 万音视频片段上训练，覆盖人声与环境声，来源包括 OpenHumanVid、AudioCaps、WavCaps 与自采高质量集合，统一用 Gemini 做标注。本次未能确认 Gemini 链接可达，解读仅依据论文正文对标注流程的描述，不补充外部实现细节。评测方面，作者新建 Harmony-Bench，共 150 个测试用例，分为 3 组各 50 项：环境声视频组测非语音事件的时间对齐，语音视频组测多语言唇同步与语音质量，复杂场景组测语音与环境声共存时的生成与同步。指标分 3 类：视频侧包括美学质量、成像质量、动态程度、运动平滑与身份一致，越高越好。

音频侧包括 AudioBox 美学分数、词错率、音频图文一致，词错率越低越好，其余越高越好；同步侧包括 Sync-C 越高越好、Sync-D 越低越好、去同步误差越低越好、整体图文音一致越高越好。聚合口径是 3 类数据集上的平均，论文同时说明 MM-Diffusion 为无条件生成，部分指标无法生成。硬件与耗时未在正文给出具体预算，这是复现成本上的缺项。

### 主结果测了什么，谁在什么条件下赢了？

主结果要回答的问题是：在相同 3 类场景平均下，Harmony 与可运行的联合基线相比，视频质量、音频保真与同步是否同时不掉线。比较对象包括 MM-Diffusion、JavisDiT、UniVerse-1 与 Ovi，均为论文实际可运行的公开方法；搜索最优或事后最优值未作为部署收益，本文也不把它们当基线。指标方向如上一节所述，同步是主要矛盾。下表提炼正文直接报告的同步关键数字，表前先明确公平条件：同为 Harmony-Bench 3 组平均，指标方向为 Sync-C 越高越好、Sync-D 越低越好。

| 评测范围 | 指标 | Harmony 数值 | 指标方向 | 证据含义 |
| --- | --- | --- | --- | --- |
| 3 组场景平均 | Sync-C | 5.61 | 越高越好 | 报告的最高唇同步置信 |
| 3 组场景平均 | Sync-D | 7.53 | 越低越好 | 报告的最低唇同步距离 |

表后解释：论文报告 Harmony 在这两项同步指标上同时领先，支持跨任务协同增强了跨模态一致的判断；同时视频美学与身份一致、音频质量等保持领先或接近，说明同步提升没有以明显牺牲单模态质量为代价。必须就近说明未胜出项：正文表格显示个别音频美学子项与整体一致分数上 Ovi 或 JavisDiT 仍有接近或持平之处，且 MM-Diffusion 部分指标缺失，不能据此宣称全指标通吃。下图从像素层面补充了定性对照。

**Sync-C × Sync-D：** Sync-C 是唇同步置信度，越高表示音频与口型对应越可信；Sync-D 是唇同步距离，越低表示偏差越小。两者分工是分别从置信与误差距离刻画同一同步现象；搭配理由是单一分数易受阈值或样本影响，双指标互相印证；组合意义是只有 Sync-C 上升且 Sync-D 下降，才支持同步真正变好而非单指标抖动。

> **看图路径：** 1. 先按行对比同一提示下三行视频帧的人物动作幅度与一致性；2. 再按行对比每行下方波形包络的起伏与事件对应关系；3. 最后聚焦左侧说话人与右侧弹奏两个场景的同步差异

[![原论文 Figure 5：Qualitative Comparison between Harmony and the state-of-the-art methods, including Universe-1…](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/ed6dd467f232/figure-5.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/ed6dd467f232/figure-5.png)

*论文图 5。原论文 Figure 5：“Qualitative Comparison between Harmony and the state-of-the-art methods, including Universe-1 [48] and Ovi [34].”。*

上图左侧为老人说话场景，右侧为门廊弹曼陀林场景，每场景按行分别为 UniVerse-1、Ovi 与 Harmony，下方附波形。可以观察到前两行视频动作幅度小、波形包络较平或与动作脱节，第三行人物口型与拨弦动作起伏更大，波形复杂度更高，支持细粒度同步更好的判断。但定性图为单样本展示，不能推广为全基准每步都成立，仍需以平均指标为准。

### 拿掉哪一块会怎样，增益最大的一步是哪一步？

消融要回答各组件是否必要，实验在人类语音数据集上训练所有消融模型并评测同步，因此数值与主表 3 组平均不可直接混比。基线用标准全局交叉注意力替代全局局部解耦模块且不用跨任务协同，然后逐步加入解耦模块、旋转位置对齐、跨任务协同与同步增强引导。下表只收录正文连续原句中逐字出现的同步置信变化，表前问题是：在同一语音子集内，每一步是否带来可核对的增量。

| 阶段 | 指标 | 起点 | 终点 | 变化方向 |
| --- | --- | --- | --- | --- |
| 加入旋转位置对齐 | Sync-C | 4.29 | 4.80 | 越高越好 |
| 推理加入同步增强引导 | Sync-C | 5.09 | 6.51 | 越高越好 |

表后解释：从 4.29 到 4.80 的提升支持尺度对齐解决了帧间错位，代价是增加了位置映射与窗口注意的计算；从 5.09 到 6.51 的跃升是全表中最大单步增益，支持推理侧放大跨模态差值的有效性，代价是每次去噪需额外计算负锚点分支。论文还报告中间加入解耦模块与跨任务协同分别带来小幅提升，整体呈单调改进。未胜出或边界是：消融仅在语音子集验证，未证明在纯环境声或复杂混音下增益相同；且未报告去掉全局分支后音色一致性的退化程度，因此不能断言全局模块对所有风格都必要。

### 哪些结论还只是有限解释，什么没有测？

区分 3 层表述。直接报告的是：在 Harmony-Bench 平均与语音子集消融上，同步指标领先且组件增量为正。有限解释的是：把收敛加速归因于干净锚点稳定了梯度，这与曲线趋势一致，但未做梯度方差或映射漂移的直接测量，相关性不等于因果证明。未验证推测的是：更大规模或更多音乐数据的泛化效果，论文展示了音乐与多风格示例，但未给出音乐子集的完整指标分解。

缺失证据不是技术错误，但影响承诺范围：原文未测量误判率、推理延迟、输出帧率与训练算力，解读不能承诺这些量得到改善；训练资源、推理开销与实际延迟应分别讨论，总体趋势不等于每组每步都成立。原文表头与算术未发现需要标注的冲突，但跨表数值因评测范围不同而不可比，使用时必须同时核对数据集、阶段与聚合对象。

### 要复现先做什么，需要哪些条件？

复现先做三件事。第一，准备数据与标注：按论文聚合公开来源与自采集合，统一标注流程需参考 Gemini，本次未能确认其链接可达，复现时应记录替代标注器的差异。第二，恢复 3 阶段流程：先做音频预训练与音色解耦，再做联合训练；视频分支从 Wan2.2 初始化，最终联合阶段的训练预算在正文有明确记录，整理如下。第三，实现交互与引导：局部用缩放旋转位置编码加帧窗口注意力，全局用参考音频为查询的交叉注意力，推理时分别构造静音音频与静态视频负锚点。

| 阶段 | 指标 | 数值 | 单位说明 | 复现含义 |
| --- | --- | --- | --- | --- |
| 最终联合训练 | 迭代数 | 10000 | iterations | 联合阶段总步数 |
| 最终联合训练 | 批量大小 | 128 | batch size | 每步样本数 |
| 最终联合训练 | 学习率 | 1e-5 | learning rate | 优化步长 |

项目页当前可用，已公开，可用于核对示例与补充材料；本次未能确认 Gemini 链接可达，涉及标注细节以论文附录为准。关键超参数缺项是两项驱动损失权重与引导强度，复现时应从小权重网格搜索起步，并固定随机种子记录 Sync-C 与 Sync-D 双指标。何时值得尝试：当任务需要同时生成人声与环境声且对口型或动作同步敏感时，该方法值得尝试；若只需无声视频或已有干净音频，单向驱动模型可能更省成本。还需补的验证是：在纯音乐与强混响下的同步分解指标，以及负锚点分支带来的延迟测量。

### 一句话收束：矛盾、解法与适用边界是什么？

回到中心矛盾：联合扩散让两个噪声序列互相找对方，目标一直在漂。Harmony 的解法是先用单侧干净任务把对应关系固定下来，再用解耦架构分别处理何时对齐与像谁，最后在推理时显式放大跨模态差值。证据支持同步指标的领先与组件增量的单调性，代价是更长的 3 阶段训练与双分支加负锚点的推理开销。教学上最易误解的是把同步提升等同于画质或音质必然提升，或把单图示例当成全基准结论。

正确用法是同时看 Sync-C 上升与 Sync-D 下降，并在相同数据集与聚合口径下比较。对于刚入门的研究生，建议先复述单样本的数据流，再对照曲线理解为何干净锚点加速收敛，最后亲手开关旋转对齐与同步引导，观察同步指标与计算代价的权衡。

## 📐 原文公式与排版

以下展示论文原页中的数学表达区域，保留原始上下标、分式和符号排版。区域序号仅用于本文导航，不是论文公式编号。

[![原文数学表达区域 1，PDF 第 5 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/95218ae2f273/figure-1.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/95218ae2f273/figure-1.png)

区域 1 · [查看论文原页](https://openaccess.thecvf.com/content/CVPR2026/papers/Hu_Harmony_Harmonizing_Audio_and_Video_Generation_through_Cross-Task_Synergy_CVPR_2026_paper.pdf#page=5)

[![原文数学表达区域 2，PDF 第 5 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/95218ae2f273/figure-2.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/95218ae2f273/figure-2.png)

区域 2 · [查看论文原页](https://openaccess.thecvf.com/content/CVPR2026/papers/Hu_Harmony_Harmonizing_Audio_and_Video_Generation_through_Cross-Task_Synergy_CVPR_2026_paper.pdf#page=5)

[![原文数学表达区域 3，PDF 第 6 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/95218ae2f273/figure-3.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/95218ae2f273/figure-3.png)

区域 3 · [查看论文原页](https://openaccess.thecvf.com/content/CVPR2026/papers/Hu_Harmony_Harmonizing_Audio_and_Video_Generation_through_Cross-Task_Synergy_CVPR_2026_paper.pdf#page=6)

[![原文数学表达区域 4，PDF 第 6 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/95218ae2f273/figure-4.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/95218ae2f273/figure-4.png)

区域 4 · [查看论文原页](https://openaccess.thecvf.com/content/CVPR2026/papers/Hu_Harmony_Harmonizing_Audio_and_Video_Generation_through_Cross-Task_Synergy_CVPR_2026_paper.pdf#page=6)

另有 11 个候选区域因边界不明确或图片数量、尺寸限制未展开；请[查看完整论文](https://openaccess.thecvf.com/content/CVPR2026/papers/Hu_Harmony_Harmonizing_Audio_and_Video_Generation_through_Cross-Task_Synergy_CVPR_2026_paper.pdf)中的原始排版。

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。
- 评分规则：type-aware-v1
- 评分模型：muse-spark-1.3-contributor
- 评分请求协议：openai_responses

---

[← 返回 cvpr-2026 论文汇总](/posts/conference-cvpr-2026/)
