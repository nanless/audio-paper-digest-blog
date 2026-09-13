---
title: "Hierarchical Long Video Understanding with Audiovisual Entity Cohesion and Agentic Search"
date: 2026-09-13
draft: false
description: "针对小时级视频上下文过长与朴素切分检索导致碎片化的问题，论文提出离线构建全局-场景-片段-实体四层索引并用说话人身份做跨模态实体黏合，再由智能体按需多粒度检索，在 LVBench 上以 30 秒粗切分与至多 10 步推理达到 84.1% 整体准确率，但高密度采样与多工具调用仍带来离线与在线开销。"
tags: ["检索增强", "音视频", "语音", "音视频问答"]
categories: ["cvpr-2026 论文"]
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_paper_id: "conference:cvpr:2026:conference-paper-id:Yin_Hierarchical_Long_Video_Understanding_with_Audiovisual_Entity_Cohesion_and_Agentic_CVPR_2026_paper"
paper_digest_source_kind: conference
paper_digest_conference_id: "cvpr-2026"
paper_digest_conference_record_url: "https://openaccess.thecvf.com/content/CVPR2026/html/Yin_Hierarchical_Long_Video_Understanding_with_Audiovisual_Entity_Cohesion_and_Agentic_CVPR_2026_paper.html"
paper_digest_conference_pdf_url: "https://openaccess.thecvf.com/content/CVPR2026/papers/Yin_Hierarchical_Long_Video_Understanding_with_Audiovisual_Entity_Cohesion_and_Agentic_CVPR_2026_paper.pdf"
paper_digest_api_reader_contract: "beginner-researcher-v3"
paper_digest_api_reader_article_sha256: "9c364cc7f3378d95e6b4e513fe25205fdafea4531f75095ae42552e0fe4b407d"
paper_digest_api_reader_plan_sha256: "df9a2d5a35386c01faabf440cb4eef43e1b36271090ecf527f1a7173e60ab8fc"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings-v4"
paper_digest_api_reader_source_bindings_sha256: "5b48d1b3205f42f88564f9c6505853be1c8e4de27e6bbd84c867b3b39fd294ba"
paper_digest_api_reader_source_table_count: 3
paper_digest_api_reader_source_formula_count: 0
paper_digest_api_reader_structured_artifacts_sha256: "65542711a18368887c99eda53dd8324091a0559ca36182f5519520bf9cadffd5"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity-v1"
paper_digest_api_reader_author_identity_sha256: "d4ebb7e1421ef820dea345d18fa61e41db228df4748c77fa25d6025d60b430af"
paper_digest_api_reader_author_count: 5
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity-v1"
paper_digest_api_reader_resource_identity_sha256: "05051d4cf851b2add8c01f81caa636ef6e478168b7f0e95452aeab3bba7041ab"
paper_digest_api_reader_resource_count: 1
paper_digest_api_reader_decision_projection: "api-reader-decision-projection-v2"
paper_digest_scoring_contract: "api-scoring-audit-v2"
paper_digest_taxonomy_contract: "paper-taxonomy-flat-tags-compat-v1"
paper_digest_taxonomy_selection_contract: "paper-taxonomy-selection-v1"
paper_digest_taxonomy_registry_version: "paper-taxonomy-v1"
paper_digest_taxonomy_registry_sha256: "15c82a567ce5a55dc1175684ed08b64c158558639d9c8fb822c9587ec32a8778"
paper_digest_taxonomy_concepts: [{"facet":"method","id":"method.retrieval-augmented","label":"检索增强"},{"facet":"signal","id":"signal.audiovisual","label":"音视频"},{"facet":"signal","id":"signal.speech","label":"语音"},{"facet":"task","id":"task.av-question-answering","label":"音视频问答"}]
paper_digest_primary_task: "音视频问答"
paper_digest_primary_method: "检索增强"
paper_digest_score: 6.8
paper_digest_rank_bucket: "前50%"
paper_digest_document_type: "方法研究"
paper_digest_conference_structure: replayable-pdf-layout-v1
---

# 📄 长视频不止于切分检索：用视听实体黏合与分层索引保持叙事连贯

> 英文题目：*Hierarchical Long Video Understanding with Audiovisual Entity Cohesion and Agentic Search*

> 会议身份：`conference:cvpr:2026:conference-paper-id:Yin_Hierarchical_Long_Video_Understanding_with_Audiovisual_Entity_Cohesion_and_Agentic_CVPR_2026_paper`


> ✅ 来源为官方会议 PDF；表格与 Figure 按原文证据绑定。PDF 公式以原页区域图片展示，未冒称作者原始 TeX。

> 会议来源：[官方记录](https://openaccess.thecvf.com/content/CVPR2026/html/Yin_Hierarchical_Long_Video_Understanding_with_Audiovisual_Entity_Cohesion_and_Agentic_CVPR_2026_paper.html) · [官方 PDF](https://openaccess.thecvf.com/content/CVPR2026/papers/Yin_Hierarchical_Long_Video_Understanding_with_Audiovisual_Entity_Cohesion_and_Agentic_CVPR_2026_paper.pdf)

标签：#检索增强 #音视频 #语音 #音视频问答

评分：**6.8/10** | 创新 1.5/2 | 技术严谨 1.2/1.5 | 实验充分 1.2/1.5 | 清晰度 0.8/1 | 影响力 0.8/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 1.0/1.5

排名：前50% | 文档类型：方法研究

## 👥 作者与机构

- Xinlei Yin：机构信息未能从会议 PDF 纯文本可靠映射
- Xiulian Peng：机构信息未能从会议 PDF 纯文本可靠映射
- Xiao Li：机构信息未能从会议 PDF 纯文本可靠映射
- Zhiwei Xiong：机构信息未能从会议 PDF 纯文本可靠映射
- Yan Lu：机构信息未能从会议 PDF 纯文本可靠映射

## 📌 核心摘要

长视频理解输入为小时级视频帧与音频转录，输出为问答答案与支撑证据，要求在超长上下文中维持实体一致与全局叙事连贯，朴素分块检索易导致信息碎片化。HAVEN先用语音识别与说话人分离构建带时间戳转录和全片一致说话人标签，并将视频切分为30秒片段生成视觉字幕与说话人感知描述。接着经文本编码器嵌入聚类加大语言模型校验完成跨片段视听实体聚合，形成片段、实体、场景与全局摘要四级层次化数据库。推理时智能体以全局摘要为初始记忆，通过多粒度文本与视觉工具循环思考-行动-观察，按需收集证据作答。相比仅用片段字幕检索的检索增强生成，该设计把说话人身份作为跨模态粘合信号，并以场景与全局摘要提供长程锚点，减少冗余碎片检索。在LVBench基准下，完整框架的准确率为81.0%，高于去除层次化组织的变体的准确率72.8%。该结论的适用边界受限于英文有声长视频，对无音频、多语言或嘈杂语音的外推尚未验证。原文未披露训练、推理或部署成本。

## 🔗 开源与复现资源

- 第三方资源：<https://openai.com/index/introducing-o3-and-> → <https://openai.com/index/introducing-o3-and-/> — 链接不可用（HTTP 403）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 输入是什么？为什么长视频理解容易碎？

这篇论文处理的是小时级长视频问答。输入是一整段视频的画面帧序列与音频流，输出是对自然语言问题的选择或简答，例如人物做了什么、事件发生在何时、故事主线是什么。论文报告 LVBench 平均时长为 4101 秒，包含 1549 个问题，覆盖 103 段视频。与短视频不同，长视频的事件跨越数万帧，人物在不同场景换装、遮挡、离场再入场，声音与画面交错出现。

如果把视频均匀切成互不相干的小片段，只对每段生成一句话字幕再做检索增强生成，检索到的证据往往是孤立的，模型需要多轮来回拼凑才能恢复跨片段的连续性，既冗余又容易丢失全局叙事。开场需要保留的关键信息是：作者提出 HAVEN 框架，核心是离线建好分层索引，线上由智能体按需检索；最强证据是在 LVBench 整体 84.1%，推理类 80.1%；代价是离线字幕、聚类与多工具推理的计算开销。

本文后续按任务与路线、方法全景、组件计算、构造与推理、实验条件、结果与反证、复现收束的顺序展开，每一步只讲原文实际给出的安排与数字。

### 已有路线在长视频上卡在哪里？

第一条路线是面向大视觉语言模型的采样与压缩。做法包括自适应采样挑选显著帧、 token 压缩合并跨时间冗余、记忆机制动态保留显著信息，以及分层 token 聚合传播全局与局部语义。原文指出这类方法能在显存与算力约束下处理更长序列，但常牺牲关键细节或增加在线计算，难以保持远距离片段之间的语义连续。第二条路线是基于检索增强生成的长视频理解。

做法是把视频切成可检索单元，推理时动态取回相关上下文，近期工作还加入图文对齐切分、图结构实体语义、自适应选择与时序依赖建模。原文认为其局限是依赖碎片化片段与缺乏全局上下文，复杂推理困难。第三条路线是长视频智能体。代表做法包括把大语言模型当作迭代检索与解释的智能体、树形表示自适应探索、多智能体多轮协作、支持全局与局部工具搜索的深度视频发现，以及把长视频改写为类文档结构做迭代检索。

原文认为这些框架的底层数据库仍较简单，例如只有帧、片段字幕或纯视觉实体，往往需要大量迭代才能找到答案。第四类是分层视频表示。已有工作用局部全局聚合、树结构、图检索或全局主体注册表改善连贯性，但原文指出它们缺少统一的离线分层索引，难以同时覆盖视频、场景、片段与实体 4 个层级。本文的方法正好落在检索与智能体的交叉点：先离线把多粒度语义组织好，再让智能体在线动态导航。

### 论文把问题拆成哪两件事？

论文把长视频理解的困难拆成表示与检索两个问题。表示问题是实体、事件与场景在不同时间尺度演化，局部片段加全局实体集合的组合抓不住这种层级性。举例来说，全局类问题如视频讲了什么、第三位选手唱了哪首歌，需要长程锚点；局部歧义问题如主角在 12 点到 12 点半做了什么，需要结合远处上下文才能消歧。如果只在线检索局部分片，要么证据不全，要么被冗余不连贯信息淹没。

检索问题是现有检索多由孤立信号驱动，例如片段级字幕，缺乏结构上下文，智能体只能靠低效多轮检索恢复跨片段连续性。教学例子仅为帮助理解：假设人物在开头穿白背心、在第 54 段穿黄毛衣在田间、在第 139 段穿白大褂戴发网，仅靠外貌描述很难把三处判定为同一人，但若三处语音属于同一说话人标签，则合并更有依据。论文的解决思路是：离线用视听实体黏合保持身份一致，用分层组织提供多粒度锚点；在线用智能体思考行动观察循环按问题意图选择工具。

### HAVEN 的全景是什么？一个样本如何走完全程？

HAVEN 分为离线数据库构建与在线智能体搜索两大部分。离线部分把视频均匀切分为 30 秒基本单元，对每段抽取音频标注与画面帧，生成片段文本与视觉嵌入，再抽取实体并跨片段合并为规范实体，接着把语义相关的连续片段聚为场景并生成场景摘要，最后由场景摘要生成全局摘要。

在线部分以全局摘要初始化上下文记忆，推理大模型在每一步根据原始问题、可用工具集与当前记忆决定调用哪个工具、问什么中间问题、限定哪个时间窗，把工具返回的文本与时间戳并入记忆，直到找到答案或达到最大步数。

沿一个样本走完全程有助于建立直觉：以倒数第二首歌中有几名歌手演奏乐器为例，智能体先调用全局场景浏览列出最后三首歌及其时间与表演者，定位到歌曲 One 对应 55 点 00 分到 57 点 00 分，再调用视觉检查直接看该时段画面，得到 2 名歌手弹吉他、1 名打打击乐的证据，从而回答 3。下面的示意图先给出层级与循环的总体关系，再给出该问答实例的完整工具链，读者可对照左右箭头理解信息流向。

下面这段导读帮助建立全景：左侧是语义连贯的分层视频索引，自下而上为实体、片段、场景、全局摘要，右侧是以大语言模型为大脑、以上下文记忆为状态的智能体搜索，中间通过调用工具与返回观察形成闭环。请重点看层级箭头方向与循环箭头方向的区别。

> **看图路径：** 1. 先从左侧自下而上看实体到片段到场景再到全局摘要的层级箭头；2. 再看左右两侧之间标注的调用工具与工具响应的双向箭头；3. 最后看右侧大脑与上下文记忆之间的思考行动观察循环

[![原论文 Figure 1：The proposed hierarchical video indexing with audiovi- sual entity cohesion and agentic search.](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/0fb79e5a939f/figure-1.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/0fb79e5a939f/figure-1.png)

*论文图 1。原论文 Figure 1：“The proposed hierarchical video indexing with audiovi- sual entity cohesion and agentic search.”。*

图 1 把方法抽象为两列。左侧 4 层从下到上聚合，实体层通过视听融合连向片段层，片段层向上聚合为场景再到全局摘要；右侧大脑发出带查询的工具调用，左侧返回工具响应，大脑内部有思考、行动、观察的循环，最终输出答案。该图支持的判断是：表示与检索被显式分开，离线负责连贯组织，在线负责按需取用，而不是把所有帧 1 次性塞入模型上下文。

下面这段导读进入具体实例：左侧展示从片段帧到实体再到场景与全局摘要的聚合，右侧展示推理大模型 2 次调用的论据、工具名与观察结果。请沿着问题到第 1 次浏览再到第二次检查的顺序阅读。

> **看图路径：** 1. 先沿左侧全局摘要到场景再到片段与实体的自下而上聚合方向阅读；2. 再跟踪右侧推理大模型连续两次工具调用的参数与返回；3. 最后核对问题中的倒数第二首歌如何被定位到具体时间区间

[![原论文 Figure 2：Overview of our framework. Left: hierarchical database.](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/0fb79e5a939f/figure-2.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/0fb79e5a939f/figure-2.png)

*论文图 2。原论文 Figure 2：“Overview of our framework. Left: hierarchical database. Right: agentic reasoning. The reasoning LLM calls tools iteratively to collect information and answer the question.”。*

图 2 展示了一个计数类问题的两步链。全局摘要说明这是多国好声音集锦，场景层列出歌曲 One 与结尾曲在空中今夜，片段层给出对应画面，实体层列出红椅子、现场吉他手等。智能体第 1 次用全局场景浏览索要最后三首歌的时间与表演信息，第二次用视觉检查询问在歌曲 One 时段有多少歌手 visibly 演奏乐器并限定时间范围，最终回答选项 A 即 3。例子表明智能体优先用低成本文本浏览缩小范围，再用高成本视觉检查确认细节，这种由粗到细的组合是后文工具设计的基础。

### 音频、片段与实体是如何表示与合并的？

音频信息抽取负责提供说什么、何时说、谁说的。论文使用 WhisperX 联合自动语音识别与说话人日志，同时得到带时间戳的转录文本与全视频一致的说话人标签。原文强调说话人身份在遮挡、视角光照变化、运动模糊、拥挤场景、镜头切换或说话人不在画面时仍可能有效，特别适合对话驱动的纪录片、电视剧与博客类内容。片段信息抽取负责把局部视听上下文 grounding 为文字。

每个 30 秒片段取 20 帧画面，连同该片段的说话人标签与转录文本一起交给视觉语言模型，生成片段级字幕与说话人感知描述，例如把说话人标签与外貌动作角色线索关联起来，再拼接为片段文本表示。同时用 UNITE 多模态检索模型为每段补充视觉嵌入，组成片段数据库。默认采样为每段 20 帧约 0.67 帧每秒，查询感知的重写检查时采样 30 帧。实体抽取与合并负责把碎片观察 consolid 为一致实体。对每段文本表示用大语言模型抽取人物、地点与事件，得到实体名与简短描述。

合并分 2 个阶段：先用文本编码器对实体描述编码并聚类形成跨片段候选对应，再用大语言模型逐簇复核，生成规范实体摘要或在语义冲突时拆分为子组，以缓解过度合并与过度拆分。规范实体集合记为全局实体，每个规范实体关联一组链接片段。为避免把 top 实体的全部链接片段都送入推理而引入噪声与开销，离线还做以实体为中心的重写，为每个链接片段生成聚焦于该实体的描述，形成实体片段证据库。

**视听实体黏合 × 分层索引：** 视听实体黏合负责把分散在不同片段中的同一人物、地点或事件的文本描述合并为统一的规范实体，特别用说话人标签在画面不可靠时维持身份一致；分层索引负责把视频内容按全局摘要、场景、片段、实体 4 种时间尺度组织存放。前者提供跨时间可复用的身份积木，后者提供按需取用的多粒度货架，两者组合后智能体既能做全局定位又能做细粒度核验，而不只依赖孤立片段字幕检索。

**说话人日志 × 实体合并：** 说话人日志负责给出谁在何时说话的稳定标签，由 WhisperX 联合自动语音识别与说话人分离得到；实体合并负责把各片段抽取的人物提及按嵌入聚类再由大语言模型校验合并或拆分。说话人标签作为强一致信号优先促使同一说话人的人物提及合并，即使外貌、视角或遮挡变化很大，从而减少仅靠名字匹配或嵌入阈值带来的误合并与过度拆分。

**片段描述检索 × 视觉语义检索：** 片段描述检索负责在片段文本表示上做文本嵌入匹配，找回与问题语义相近的文字证据；视觉语义检索负责用 UNITE 跨模态嵌入直接匹配画面语义，找回文字字幕遗漏的细粒度视觉线索。前者成本低且覆盖叙事，后者补充画面细节，两者搭配的理由是先用低成本文本检索缩小范围，再在必要时用视觉检索补齐，避免一开始就对全量视频做昂贵的视觉检查。

**全局场景浏览 × 局部检查：** 全局场景浏览负责在场景摘要层做粗导航，定位相关场景与大致时间区间；局部检查负责在指定时间窗内做片段字幕查看与视觉模型核验。浏览解决从哪里开始找的问题，检查解决具体细节是否成立的问题，组合后形成由粗到细的推理链，例如先定位倒数第二首歌的时间段，再检查该时段有几名歌手在演奏乐器。

**场景自适应聚合 × 全局摘要：** 场景自适应聚合负责把语义连续的相邻片段合并为时间连续的场景，由大语言模型按语义连续性决定边界；全局摘要负责从场景摘要集合进一步提炼主线、常现实体与整体背景。聚合保留长程叙事结构，摘要提供智能体推理的初始上下文，两者组合后全局类问题可以直接从摘要回答，而无需逐片段拼接。

下面这段导读聚焦说话人标签的作用：上下两条胶片分别展示真人纪录片与动画中跨越数十个片段的人物，外貌与场景变化很大，但顶部标注的同一说话人编号用横线把它们连起来。请先看片段编号的间隔，再看连接线的归属。

> **看图路径：** 1. 先看上半部分同一说话人标签下跨越多个片段编号的人物连接线；2. 再看下半部分动画人物在外貌大变时仍被同一标签连接的片段；3. 最后对比长时隙片段之间仅靠画面难以关联而靠声音标签关联的差异

[![原论文 Figure 3：Speaker identity for entity consolidation.](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/0fb79e5a939f/figure-3.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/0fb79e5a939f/figure-3.png)

*论文图 3。原论文 Figure 3：“Speaker identity for entity consolidation. Segments with long temporal gaps can still be linked to the same speaker entity through a shared speaker identity.”。*

图 3 给出两个合并实例。上排人物标注为 Shizuka Anderson 对应说话人 05，横跨 0、54、92、126、139 等片段，服装从背心到黄毛衣再到白大褂，场景从室内到田野再到工厂；下排动画中年轻男性对应说话人 00 横跨 10、12、30、57 等片段，年轻女性对应说话人 01 横跨另一组片段，即使画风与造型突变仍被同一标签连接。原文指出这种连接对回答例如 Sarah 在采访时表情如何变化这类需要长程身份连续的问题至关重要，而孤立片段字幕无法提供。该图支持的判断是：音频中的身份线索是视觉退化时的有效黏合剂，但其前提是视频带有可用的语音与可区分的说话人，原文也说明仅在语言为英语时使用音频流。

### 场景、全局与多粒度工具如何配合智能体？

场景切分与全局摘要负责提供高层锚点。论文不采用固定 5 秒小片段或固定块聚合，而是基于片段描述序列切分为重叠块，再用大语言模型把连续且语义相关的片段编组为场景，每个场景有自适应决定的起止边界。对每个场景生成简洁的场景级描述，刻画关键人物、事件与转场，集合成场景库，再由场景库生成全局摘要，描述主线、常现实体与整体背景。工具集包含 5 个多粒度工具：全局场景浏览在场景摘要上粗导航定位相关场景与时间。

片段字幕搜索在片段描述上做文本嵌入匹配；片段视觉搜索用 UNITE 跨模态嵌入补充文字缺失的视觉线索；实体搜索在规范实体与其链接证据上做实体中心检索；检查工具在指定时间跨度内做局部核验，分为查看文字描述的字幕检查与用视觉语言模型确认细节的视觉检查。

推理循环维护上下文记忆，初始为全局摘要，每步由规划器根据原始问题、工具集与当前记忆选择工具并形成中间查询与可选时间窗，执行后把工具名、查询与返回文本时间戳并入记忆，重复直到回答或达到最大深度。原文说明推理时优先低成本文本检索再到高成本视觉检查，工具定义与实现细节放在补充材料。定性分析还报告：全局类问题如运动员国籍可直接从全局摘要回答；涉及特定实体如售货机或男孩的问题先实体搜索定位再检查。

字幕缺失的细粒度视觉如网页数字用视觉搜索补充；时间范围明确且上下文充分时用视觉检查核验。

### 本研究训练了什么？没有训练时真实计算是什么？

本研究没有报告神经网络的梯度训练阶段，也就没有给出优化器、学习率、训练轮数、冻结与更新参数、梯度路径或重置时机的信息，不能从模型名称推定这些实现。真实计算分为离线构造与在线推理两类，均是调用既有模型而非训练新权重。离线调用包括用 GPT-4.1 生成片段级字幕并总结场景与实体，用 WhisperX 做语音识别与说话人日志，用 UNITE 生成视觉与跨模态嵌入，用文本编码器做实体描述嵌入聚类，再用大语言模型做实体规范化、场景边界划分与摘要生成。

论文给出可重放的构造参数：每 30 秒一段，每段字幕用 20 帧，查询感知的工具调用重写时采样 30 帧，视觉检查用的 OpenAI o3 最多输入 50 帧。在线计算是思考行动观察循环，最多 10 步，由 OpenAI o3 作为推理规划器聚合工具输出并作答。缺项需要明确指出：原文未报告离线构造的总耗时、向量索引类型、嵌入维度、聚类阈值与大语言模型复核的提示细节，也未报告在线每步的延迟与 token 消耗，因此不能承诺延迟或成本得到改善。

把无训练等同于确定性求解是不对的，因为大语言模型调用与检索排序本身带有不确定性，冻结参数也不能保证输出确定。

### 在哪些数据与条件下比较？指标方向是什么？

评估覆盖 4 个长视频基准。LVBench 包含 103 段视频、1549 个问题，平均时长 4101 秒，分为时间定位、摘要、推理、实体识别、事件理解与关键信息检索 6 类，指标为准确率，越高越好。Video-MME 取长视频切分，含 300 段视频、900 个问题，时长 30 到 60 分钟。LongVideoBench 取验证集长子集，含 188 段视频、564 个问题，时长 900 到 3600 秒，多数视频无音频轨而使用官方字幕且无说话人身份。EgoSchema 取验证集，含 500 段视频、500 个问题，每段 3 分钟且无音频。

原文说明为简单起见，仅在语言为英语时使用音频流。实现上数据库构建用 GPT-4.1，智能体规划用 OpenAI o3，最大推理深度 10 步。比较对象包括专有大视觉语言模型、开源视觉语言模型、基于检索的系统与视频智能体，其中 VideoRAG 用官方实现复现于 LVBench，其余基线取已发表报告。论文强调效率对照：本方法用 30 秒粗切分每段 20 帧字幕与至多 10 步，而对比的深度视频发现用 5 秒切分每秒 2 帧与至多 15 步；把采样提高到每段 30 秒内 2 帧每秒的变体记为 Ours 2 fps，因更密集的字幕带来额外增益。

资源状态方面，本次收到的第三方链接状态为不可用，返回 403，因此当前不能写该链接已公开可用，只能以论文内报告的模型名与设置为准。

### 主结果在相同任务上显示了什么？

比较的问题是：在长视频问答的准确率上，分层索引加智能体搜索是否优于直接用大模型、纯检索或已有智能体。公平条件是同一基准与同一类别划分，指标方向为准确率越高越好。论文报告本方法在 LVBench 整体与推理、时间定位类上提升明显，在实体识别上超过依赖全局主体注册表的深度视频发现，显示视听实体黏合的稳健性。需要保留的基线形态包括专有与开源大模型以及实际可运行的检索与智能体策略，而事后最优或 oracle 值应另行标明，不能代替可部署收益。

下面的第一张表截取原文结果表中有完整逐格证据的部分，用于核对专有模型的量级；第二张表用原文连续句覆盖的数字整理本方法不同采样与消融对照下的可运行取值，避免把不同条件的数字混放在同一模型列下误读。

下表提出比较问题：在 LVBench 上专有大模型的整体与分项准确率处于什么量级，指标是否为百分比且越高越好。表头与数据格按原文保留写法，数据格为裸值而单位由表头说明。

| Methods | ER | EU | KIR | TG | Rea | Sum | Overall |
| --- | --- | --- | --- | --- | --- | --- | --- |
| GPT-4o [1] | 48.9 | 49.5 | 48.1 | 40.9 | 50.3 | 50.0 | 48.9 |
| OpenAI o3 [17] | 57.6 | 56.4 | 62.9 | 46.8 | 50.8 | 67.2 | 57.1 |

上表仅为原文结果表的前几行，用于锚定量级，不能据此得出本方法胜出的结论。可见 GPT-4o 整体 48.9，OpenAI o3 整体 57.1，且时间定位与推理类相对更低，说明长视频推理与定位对直接输入大模型仍具挑战。但该表未包含本方法与检索智能体基线，因此需要下表补充本方法的可运行取值与消融对照，并就近说明未胜出或边界条件。

| 来源证据 | 量化值 1 | 量化值 2 | 量化值 3 | 量化值 4 |
| --- | --- | --- | --- | --- |
| 来源句 1 | 3 | 81.0 | 72.8 | — |
| 来源句 2 | 71.7 | — | — | — |
| 来源句 3 | 84.1% | — | — | — |
| 来源句 4 | 80.1% | — | — | — |

上表显示完整方法在 0.67 帧每秒字幕下取值为 81.0，去掉分层后降至 72.8，去掉音频转录与说话人后降至 71.7，而把采样提高到 2 帧每秒后整体达 84.1%，推理类达 80.1%。主要收益是分层聚合多粒度证据与跨片段推理，代价是离线字幕密度与在线推理步数。未胜出项需要指出：摘要类在 LVBench 常涉及细粒度步骤级问题，例如 Mandy 站到评委桌前之后做了什么，这类问题仍需多轮推理而非简单场景总结，原文也说明不能把总体趋势推广到每组每步都成立。

跨基准方面，论文报告在 Video-MME 长切分、LongVideoBench 长验证子集与 EgoSchema 验证集上均为最高，即使后两者多数或全部视频无音频流，显示分层结构本身仍有效，但这不等于音频无用，消融节将进一步分离转录与说话人的贡献。

### 去掉分层、音频与视觉检索后发生了什么？

消融要回答 3 个问题：分层组织是否必要，音频中的转录与说话人标签各自贡献多少，视觉嵌入检索是否提供额外 grounding。论文设置 4 个变体：Ours clip 只保留片段级搜索与两种检查工具，强调局部 grounding；Ours clip t 在前者基础上进一步去掉片段视觉搜索，只做片段级文本检索；Ours visual 去掉音频转录与说话人标注但保留其他组件，检验纯视觉结构推理；Ours trans 去掉说话人日志但保留转录，在无说话人信息下构建分层库。

评估仍在 LVBench 准确率上进行，越高越好。下面的图先给出 6 个类别上完整方法与纯片段基线在准确率与平均推理步数上的对照，再用表格整理音频两部分的增益证据。

下面这段导读帮助阅读消融图：横轴为整体与 6 个类别，左侧纵轴为准确率百分比，右侧纵轴为平均迭代步数，深浅柱状为两种方法的准确率，两条折线为对应的平均步数。请先看柱状差距最大的类别，再看该类别折线是否同时更低。

> **看图路径：** 1. 先对比每个类别下深浅两色柱状表示的完整方法与纯片段基线的准确率；2. 再看同一类别下两条折线表示的平均推理步数高低；3. 最后定位时间定位与推理类别上准确率差距与步数差距同时最大的位置

[![原论文 Figure 5：Comparison of accuracy and efficiency on six categories.](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/0fb79e5a939f/figure-5.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/0fb79e5a939f/figure-5.png)

*论文图 5。原论文 Figure 5：“Comparison of accuracy and efficiency on six categories. “Acc” and “iter” denote accuracy and the average number of rea- soning iterations, respectively.”。*

图 5 显示完整方法在所有 6 类上准确率均高于纯片段基线，且平均推理步数更少，在实体识别与推理类上增益尤其明显。时间定位类的步数下降最为显著，完整方法仅需约 2.6 步而基线约 3.1 步，说明多粒度索引让智能体更快定位相关上下文。需要注意纵轴起点为 60 而非 0，柱状视觉差距会被放大，应以数值差距为准；也不能把末步结果推广为全程每步都更优。原文还指出摘要类多为细粒度步骤问题，需要多轮推理，这解释了为何该类步数并未降至最低。

| 来源证据 | 量化值 1 | 量化值 2 | 量化值 3 | 量化值 4 |
| --- | --- | --- | --- | --- |
| 来源句 1 | 3 | 81.0 | 72.8 | — |
| 来源句 2 | 71.7 | — | — | — |
| 来源句 3 | 4% | — | — | — |
| 来源句 4 | 5.3% | — | — | — |

上表支持的判断是：转录本身提供超越视觉的语义补充，Ours trans 比 Ours visual 高 4 个百分点；在此基础上加入说话人身份再带来 5.3 个百分点的增益，完整方法达 81.0。原文解释即使 LVBench 多数问题聚焦视觉内容，音频仍通过增强实体连贯性改善分层语义一致性。反例是 Ours clip t 比 Ours clip 略差，说明去掉视觉嵌入检索会损失额外 grounding 能力。限制是这些增益在当前英文音频与 WhisperX 日志质量下测得，换语言、噪声或多人重叠语音时说话人标签的稳定性待验证，原文未测量误判率，因此不能把相关性说成因果保证。

### 哪些边界尚未被验证？

首先是模态与语言边界。多数 LongVideoBench 视频无音频轨而用官方字幕且无说话人身份，EgoSchema 无音频，论文在这些条件下仍报告最高分，但这恰好说明分层检索本身有效，不能反证说话人黏合在无音频时仍起作用。音频仅在英语时使用，非英语、多方言、重叠语音或噪声下的日志质量与合并策略未经评估。其次是指标与统计边界。报告以准确率为核心，未给出置信区间、显著性检验或按视频类型的分层误差分析，也未测量误判率、延迟与成本，不能承诺这些量得到改善。

第三是效率边界。虽然 30 秒粗切分与至多 10 步比 5 秒细切分与至多 15 步更省，但离线仍需对每段 20 帧生成字幕、对实体聚类与重写、对场景与全局做大模型总结，在线仍需多次大模型规划与可能的 50 帧视觉检查，总体开销未被量化。第四是表示冲突。当表头、图注或算术出现不一致时应明确标注冲突而不自行圆场，例如不同表格的采样标注与整体数字需严格核对数据集、模型、阶段、指标与聚合对象，数值相同不等于同一指标，百分点与相对百分比也不同。

本文未发现原文在核心数字上的自相矛盾，但读者复现时仍需按上述五要素逐项核对。

### 要复现应先做什么？还需补哪项验证？

复现应先从可运行链路做起。第一步按 30 秒切分视频，用 WhisperX 得到带时间戳的转录与说话人标签，仅保留英语音频；对每段采样 20 帧生成字幕与说话人感知描述，并用 UNITE 生成视觉嵌入，组成片段库。第二步用大语言模型从每段文本抽取实体，文本编码嵌入聚类后逐簇复核合并或拆分，对同一说话人的人物提及优先合并，再为每个规范实体的链接片段生成实体中心重写。第三步基于片段描述用大语言模型自适应划分场景边界并生成场景摘要，再生成全局摘要。

第四步以全局摘要初始化记忆，用 OpenAI o3 作规划器实现 5 个工具，先文本浏览定位再视觉检查核验，最大深度设为 10。关键超参数与信息条件包括 30 秒段长、20 帧字幕、30 帧重写、视觉检查最多 50 帧、GPT-4.1 做构造、o3 做规划。代码与权重方面，原文未在本证据中给出可用仓库链接，第三方链接本次不可达，因此只能按论文描述与补充材料复现工具定义，不能写代码已公开。

还需补的验证包括：非英语与噪声下的说话人稳定性、去掉转录只留说话人或反之的更细消融、不同切分长度与采样密度下的成本准确率曲线，以及在线延迟与 token 消耗的实测。

### 何时值得尝试这种做法？

当任务同时需要全局叙事与细粒度实体跟踪，且视频带有可用语音时，这种做法值得尝试。典型信号是问题跨越远距离片段、人物外貌变化大、字幕孤立不足以回答，例如跨场景的人物情感变化或倒数第几个节目的细节计数。此时离线 1 次建好 4 层索引，在线按需由粗到细检索，比把全量帧塞入上下文或反复盲检索更符合学习依赖。

如果视频完全无语音或语言不匹配，仍可使用分层索引与文本视觉检索，但不应期待说话人黏合带来同样增益，需先验证字幕质量。部署前应实测离线构造耗时与在线步数成本，摘要类步骤级问题可能仍需多轮推理。总体上，论文显示结构化多级表示加目标驱动的智能体搜索，能在粗切分与较少步数下达到可比或更好的准确率，但其结论限于报告的 4 个基准与准确率指标，推广到其他领域与实时场景仍需补充验证。

## 📐 原文公式与排版

以下展示论文原页中的数学表达区域，保留原始上下标、分式和符号排版。区域序号仅用于本文导航，不是论文公式编号。

[![原文数学表达区域 1，PDF 第 4 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/218022762eeb/figure-1.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/218022762eeb/figure-1.png)

区域 1 · [查看论文原页](https://openaccess.thecvf.com/content/CVPR2026/papers/Yin_Hierarchical_Long_Video_Understanding_with_Audiovisual_Entity_Cohesion_and_Agentic_CVPR_2026_paper.pdf#page=4)

[![原文数学表达区域 2，PDF 第 4 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/218022762eeb/figure-2.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/218022762eeb/figure-2.png)

区域 2 · [查看论文原页](https://openaccess.thecvf.com/content/CVPR2026/papers/Yin_Hierarchical_Long_Video_Understanding_with_Audiovisual_Entity_Cohesion_and_Agentic_CVPR_2026_paper.pdf#page=4)

[![原文数学表达区域 3，PDF 第 4 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/218022762eeb/figure-3.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/218022762eeb/figure-3.png)

区域 3 · [查看论文原页](https://openaccess.thecvf.com/content/CVPR2026/papers/Yin_Hierarchical_Long_Video_Understanding_with_Audiovisual_Entity_Cohesion_and_Agentic_CVPR_2026_paper.pdf#page=4)

[![原文数学表达区域 4，PDF 第 4 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/218022762eeb/figure-4.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/218022762eeb/figure-4.png)

区域 4 · [查看论文原页](https://openaccess.thecvf.com/content/CVPR2026/papers/Yin_Hierarchical_Long_Video_Understanding_with_Audiovisual_Entity_Cohesion_and_Agentic_CVPR_2026_paper.pdf#page=4)

[![原文数学表达区域 5，PDF 第 5 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/218022762eeb/figure-5.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/218022762eeb/figure-5.png)

区域 5 · [查看论文原页](https://openaccess.thecvf.com/content/CVPR2026/papers/Yin_Hierarchical_Long_Video_Understanding_with_Audiovisual_Entity_Cohesion_and_Agentic_CVPR_2026_paper.pdf#page=5)

另有 11 个候选区域因边界不明确或图片数量、尺寸限制未展开；请[查看完整论文](https://openaccess.thecvf.com/content/CVPR2026/papers/Yin_Hierarchical_Long_Video_Understanding_with_Audiovisual_Entity_Cohesion_and_Agentic_CVPR_2026_paper.pdf)中的原始排版。

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。
- 评分规则：type-aware-v1
- 评分模型：muse-spark-1.3-contributor
- 评分请求协议：openai_responses

---

[← 返回 cvpr-2026 论文汇总](/posts/conference-cvpr-2026/)
