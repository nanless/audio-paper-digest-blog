---
title: "Youtu-Parsing-Omni: One Encoder, One Schema, All Modalities"
date: 2026-10-30
draft: false
tags: [通用多模态问答, 多模态学习, 音视频, 知识蒸馏, 模型权重]
categories: [论文速递]
description: "论文把文档、自然图像、音频和视频的十个解析任务统一为带空间与时间锚点的结构化记录，用共享权重的文本初始化编码器做感知、用统一模式做输出，并用自演进的按词角色蒸馏做后训练，在文档基准上达到 96.96 分、在多模态解析基准上以 75.08 分领先开源模型，优势集中在音频和视频，但代价是 55B 稠密解码与自回归输出的推理开销。"
hiddenInHomeList: true
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_arxiv_id: "2610.39301"
paper_digest_workbench_contract: "researcher-workbench-v1"
paper_digest_reader_title: "一个编码器加一套输出格式，如何同时解析文档图像音频视频"
paper_digest_original_title: "Youtu-Parsing-Omni: One Encoder, One Schema, All Modalities"
paper_digest_arxiv_version: null
paper_digest_arxiv_versioned_id: null
paper_digest_arxiv_abs_url: "https://arxiv.org/abs/2610.39301"
paper_digest_arxiv_pdf_url: "https://arxiv.org/pdf/2610.39301.pdf"
paper_digest_primary_task: "通用多模态问答"
paper_digest_tags_contract: "paper-tag-flat-tags-v2"
paper_digest_tags_selection_contract: "paper-tag-selection-v2"
paper_digest_tags_registry_version: "paper-tag-catalog-v2"
paper_digest_tags_registry_sha256: "cdef54423b5dfc00a1d017ef6639446d2ecd1d9c1acf71c8eb4f6219a46b7ba8"
paper_digest_tags_concepts: [{"facet":"task","id":"task.generic-multimodal-qa","label":"通用多模态问答"},{"facet":"method","id":"method.multimodal-learning","label":"多模态学习"},{"facet":"signal","id":"signal.audiovisual","label":"音视频"},{"facet":"method","id":"method.distillation","label":"知识蒸馏"},{"facet":"artifact","id":"artifact.model-weights","label":"模型权重"}]
paper_digest_primary_method: "多模态学习"
paper_digest_score: 7.4
paper_digest_rank_bucket: "前50%"
paper_digest_document_type: "模型报告"
paper_digest_one_sentence: "论文把文档、自然图像、音频和视频的十个解析任务统一为带空间与时间锚点的结构化记录，用共享权重的文本初始化编码器做感知、用统一模式做输出，并用自演进的按词角色蒸馏做后训练，在文档基准上达到 96.96 分、在多模态解析基准上以 75.08 分领先开源模型，优势集中在音频和视频，但代价是 55B 稠密解码与自回归输出的推理开销。"
paper_digest_authors: [{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Yunhang Shen"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Zhangquan Chen"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Xiaotian Li"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Zhongpeng Cai"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Qing Zhou"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Zekai Zhang"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Kun Zhang"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Zezhong Wu"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Jian Hu"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Haihan Gao"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Heting Gao"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Xin Li"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Yinsong Liu"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Deqian Jiang"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Di Yin"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Haoyu Cao"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Xing Sun"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Bing Liu"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Yanqiu Qu"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Yunfei Wu"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Kun Yin"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Zhixiang Wei"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Yongxiang Hua"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Qianyu Li"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Xiaoxing Hu"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Peiyuan Zhang"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Lijiang Li"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Dong Xu"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Zhenchuan Yang"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Yiliang Jiang"}]
paper_digest_abstract_sha256: "093573f1a80bfd80428487474c5f1f734edd026e2b9c44f76065b6840cc749a0"
paper_digest_sidecars: {"citation.bib":{"sha256":"7121107a5207b5e85851c9c9a8cde038986289a660152a74b824a1ad581f3ef3","url":"/audio-paper-digest-blog/data/papers/2026-10-30/2610-39301/citation.bib"},"citation.json":{"sha256":"d8c589f36bafec736dfff3d7f1fa9355308606bff3a20525a8b3ed59a5857e4d","url":"/audio-paper-digest-blog/data/papers/2026-10-30/2610-39301/citation.json"},"citation.ris":{"sha256":"46fb940a3829c3ba560d273bf70cd43d03baac90f2d5aee6ec1b3e838fab7c03","url":"/audio-paper-digest-blog/data/papers/2026-10-30/2610-39301/citation.ris"},"rethink-context.json":{"contract":"paper-research-context-v2","sha256":"825f53626bceef682ed354f253dc2d02dd2ce5aeef301873af91234422739a74","url":"/audio-paper-digest-blog/data/papers/2026-10-30/2610-39301/rethink-context.json"}}
paper_digest_api_reader_contract: "beginner-researcher-v3"
paper_digest_api_reader_article_sha256: "bc8b9f694f7a1bfeb321c684716223309a13dc7baa86627784cd2aa4bd3b7629"
paper_digest_api_reader_plan_sha256: "4b18dfbb2609522cfbe21e16a6de7c9469d72cdffe8fa38113feae72f8f5e3a0"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings-v4"
paper_digest_api_reader_source_bindings_sha256: "ed28cf2fc9764d2f5bb52d42da56b2870bf3bfc6137be9a7b577fab72101e5bb"
paper_digest_api_reader_source_table_count: 4
paper_digest_api_reader_source_formula_count: 5
paper_digest_api_reader_structured_artifacts_sha256: "1028f56690a64844627d3549670e9ce0bfcea1749c573b54cfab3e79e12e9953"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity-v1"
paper_digest_api_reader_author_identity_sha256: "911ba3450442d12c11fd6529081693a9dadafbbb858392e55c5e93d6be8d8fb0"
paper_digest_api_reader_author_count: 30
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity-v1"
paper_digest_api_reader_resource_identity_sha256: "6e28e54ae427449541c54d1ad23f96fb786765a72255751b316c781af88ba1b5"
paper_digest_api_reader_resource_count: 1
paper_digest_api_reader_figure_persistence: "ephemeral-no-persisted-figure-assets-v1"
paper_digest_api_reader_decision_projection: "api-reader-decision-projection-v2"
---

# 📄 一个编码器加一套输出格式，如何同时解析文档图像音频视频

> 英文题目：*[Youtu-Parsing-Omni: One Encoder, One Schema, All Modalities](https://arxiv.org/abs/2610.39301)*

<!--paper-tag-hierarchy-v1:start-->

**研究分类**

- **研究任务**：[通用多模态问答](/audio-paper-digest-blog/papers/?concept=task.generic-multimodal-qa)
- **研究方法**：[多模态学习](/audio-paper-digest-blog/papers/?concept=method.multimodal-learning)；[知识蒸馏](/audio-paper-digest-blog/papers/?concept=method.distillation)
- **信号**：[音视频](/audio-paper-digest-blog/papers/?concept=signal.audiovisual)
- **研究产物**：[模型权重](/audio-paper-digest-blog/papers/?concept=artifact.model-weights)

<!--paper-tag-hierarchy-v1:end-->

> 评分：**7.4/10** | 创新 1.6/2 | 技术严谨 1.2/1.5 | 实验充分 1.3/1.5 | 清晰度 0.8/1 | 影响力 1/1.5 | 开源 0/1.5 | 可复现 0.3/0.5 | 工程/实践 1.2/1.5


## 👥 作者与机构

- Yunhang Shen：机构信息未能在本次解析中与作者逐人可靠绑定
- Zhangquan Chen：机构信息未能在本次解析中与作者逐人可靠绑定
- Xiaotian Li：机构信息未能在本次解析中与作者逐人可靠绑定
- Zhongpeng Cai：机构信息未能在本次解析中与作者逐人可靠绑定
- Qing Zhou：机构信息未能在本次解析中与作者逐人可靠绑定
- Zekai Zhang：机构信息未能在本次解析中与作者逐人可靠绑定
- Kun Zhang：机构信息未能在本次解析中与作者逐人可靠绑定
- Zezhong Wu：机构信息未能在本次解析中与作者逐人可靠绑定
- Jian Hu：机构信息未能在本次解析中与作者逐人可靠绑定
- Haihan Gao：机构信息未能在本次解析中与作者逐人可靠绑定
- Heting Gao：机构信息未能在本次解析中与作者逐人可靠绑定
- Xin Li：机构信息未能在本次解析中与作者逐人可靠绑定
- Yinsong Liu：机构信息未能在本次解析中与作者逐人可靠绑定
- Deqian Jiang：机构信息未能在本次解析中与作者逐人可靠绑定
- Di Yin：机构信息未能在本次解析中与作者逐人可靠绑定
- Haoyu Cao：机构信息未能在本次解析中与作者逐人可靠绑定
- Xing Sun：机构信息未能在本次解析中与作者逐人可靠绑定
- Bing Liu：机构信息未能在本次解析中与作者逐人可靠绑定
- Yanqiu Qu：机构信息未能在本次解析中与作者逐人可靠绑定
- Yunfei Wu：机构信息未能在本次解析中与作者逐人可靠绑定
- Kun Yin：机构信息未能在本次解析中与作者逐人可靠绑定
- Zhixiang Wei：机构信息未能在本次解析中与作者逐人可靠绑定
- Yongxiang Hua：机构信息未能在本次解析中与作者逐人可靠绑定
- Qianyu Li：机构信息未能在本次解析中与作者逐人可靠绑定
- Xiaoxing Hu：机构信息未能在本次解析中与作者逐人可靠绑定
- Peiyuan Zhang：机构信息未能在本次解析中与作者逐人可靠绑定
- Lijiang Li：机构信息未能在本次解析中与作者逐人可靠绑定
- Dong Xu：机构信息未能在本次解析中与作者逐人可靠绑定
- Zhenchuan Yang：机构信息未能在本次解析中与作者逐人可靠绑定
- Yiliang Jiang：机构信息未能在本次解析中与作者逐人可靠绑定

## 📌 核心摘要

读者需要理解的对象是一条把非文本输入变成可引用结构记录的感知链路，困难在于不同输入的时间与空间坐标不一致、输出字段差异大，难以用同一模型同时保证内容准确、定位准确和格式合法。论文要解决的是用一个编码器处理所有模态、用一个模式输出十种解析任务，并让后训练在异构字段上稳定提升。输入的图像块或对数梅尔谱先变成统一宽度的记号，进入共享双向变换器得到上下文表示，再经合并与映射送入解码器，解码器输出遵循统一模式的 JSON 对象，单元带有空间框或时间戳。共享时间轴让同一时刻的视频帧与音频记号在编码器内对齐，少量融合层在短音频视频窗口内做跨模态注意，窗口之外的长程依赖留给解码器。后训练先用有监督微调建立格式，再用按模式路由的可验证奖励强化学习优化整条输出，最后用按记号角色区分目标的在策略蒸馏做多轮自我演进。与双塔编码器加语言模型融合的已有做法相比，差异在于融合与对齐发生在感知内部，监督按内容记号与结构记号分别计算。在 OmniDocBench v1.6 全集 1651 页上，该模型以 Overall 96.96 超过 TeleOCR 的 96.91，指标越高越好，说明加宽模态覆盖的同时未损失文档解析深度。结论适用于有明确参考解析的十种任务，对物理翻拍退化、几何关系推理等仍有明显下降，原文未披露训练、推理或部署成本。

## 🔗 开源与复现资源

- 第三方资源：<https://github.com/TencentCloudADP/youtu-parsing> — 链接可访问（HTTP 200）

可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 解析要解决什么：一次转换、处处可引用

这篇论文面向刚接触语音、音乐或音频的读者，先要讲清解析与问答的区别。问答是针对一次提问从像素或波形里找答案，解析是把一份输入完整转成结构化文本记录，写清含什么内容以及每部分在空间或时间上的位置。

论文的输入有 4 类：文档页、自然图像、音频、带音轨的视频。输出只有文本，即一个 JSON 解析结果。记录的价值在于可复用与可审计：任何语言模型，包括纯文本模型，之后只需读这份记录而不必每次重编码长视觉与声学词元序列；记录中的边框与时间戳把每条结论指回原区域或原区间。

对音频与音乐背景的读者，可以把解析类比为带时间锚点的转写加标注：不仅要写出说了什么、响了什么，还要写出起止时间、说话人编号、声学事件标签。对文档则是带空间锚点的转写加版式：每个文本块、公式、表格都有边框、类别与阅读顺序。视频同时需要两套锚点，还要写清哪句话出现在哪个画面期间。

### 已有路线为何不够：双塔编码与分散输出

文档解析在标准页面上已经很强，但化学结构与乐谱这类符号内容仍多由专用模型处理。图像、音频、视频的 grounded 结构化输出更不成熟，多模态大模型主要做描述与问答，跨 3 模态的解析直到 OmniParsingBench 才被明确写成任务与基准。

论文把现有全模态解析器归纳为双塔结构：视觉一路用单独预训练的视觉塔，音频一路用单独预训练的音频塔，两路表示首次相遇是在语言模型内部。这种安排带来 3 个后果：感知阶段没有跨模态融合，语言模型只能从分离表示推断跨模态关系；两套编码器各自给时间编号，同一时刻的帧与声音在感知内没有共享时间位置；每个新模态都要再加一个塔、再做一套预训练。

另一条相关路线是共享计算的编码器，如跨视觉听觉文本的共享 Transformer，但论文指出它们此前未用于带定位的解析。语言模型权重初始化感知、文档解析的可验证奖励、在线蒸馏与参考条件自蒸馏，都是本文后训练的直接思想来源，论文在相关工作节逐一区分了继承与新增之处。

### 两个具体困难：联合感知与联合优化

论文把挑战写成两条。第一是跨模态联合感知，记为 C1。解析必须显式写出什么内容在何时共现，例如某张幻灯片在屏期间说了哪句话。如果帧只管看、声音只管听，对应关系只能由解码器事后重建，时间稍错就会导致引用错位。

第二是跨任务联合优化，记为 C2。同一模型要同时保证内容准确、空间与时间定位准确、模式合法，10 个任务的字段又各不相同。有监督微调只在参考前缀下训练，推理时却用模型自己生成的前缀；可验证奖励的强化学习在自身输出上训练，但一个标量奖励很难同时覆盖异构标准，且只给序列级反馈；在线蒸馏能给词级目标，但如何按模式角色适配并随学习刷新仍需解决。

### 总体流程：一个编码器读，一套模式写

方法的全流程可以沿一个样本理解。以一段带音轨的视频为例，视频帧走视觉茎变成视觉词元，音频走音频茎变成音频词元，两路词元在共享编码器中按统一时空位置编码混排建模，其中少数融合层让帧看到同时刻的声音；编码器输出经合并降采样与投影变成解码器可读的输入嵌入；稠密文本解码器自回归输出 OmniSchema JSON，视频侧即按时间切出的片段序列，每个片段含可见对象与屏上文本、原子动作、交互、相机运动、事件描述以及对应音频的说话人与转写。

下图把 8 类输入与统一通路放在一起，中间是模型，外围是任务，适合先建立整体印象。

读图任务是确认输入如何统一、输出如何分化：输入侧看视觉茎与音频茎如何汇入同一编码器，输出侧看文档用元素加阅读顺序、音视频用片段加时间戳。

> **看图路径：** 1. 先看中间的编码器加解码器加模式方框，确认输入如何汇入同一通路；2. 再看四周八个任务格，比较文档框定位与音视频时间轴定位的写法差异；3. 注意化学式输出 SMILES 与乐谱输出 ABC 这类形式语言字段的位置

[![原论文 Figure 2：Omni-modal parsing with one encoder and one schema.](https://arxiv.org/html/2610.39301v1/overview_figure.png)](https://arxiv.org/html/2610.39301v1/overview_figure.png)

*论文图 2。原论文 Figure 2:：“Omni-modal parsing with one encoder and one schema.”。*

图中确实可见中央的 Vision stem、Audio stem、Youtu-Omni-Encoder、Youtu-LLM 与 OmniSchema 方框，外围环绕文档、自然图像、图表、几何、化学结构、乐谱、语音声音与音视频视频八格。每格都标出输入到输出的转换，例如文档输出带框类别顺序与内容，化学输出 SMILES 字符串，乐谱输出 ABC 记谱，视频输出片段时间线。这说明统一不是把输出写成一样长，而是共用同一套字段名与定位方式，各任务取所需子集。

### 编码器如何把像素和声音变成同一词元流

编码器分 3 段：模态相关的茎、共享的 Transformer 块、模态相关的合并与投影。只有茎与合并投影与模态有关，合在一起占编码器参数的一小部分，原文称不到 3%，因此几乎全部感知参数跨模态共享。

视觉茎很薄：按原生分辨率切固定尺寸图像块，在词元预算下每个块经一个线性映射变成一个词元，不用卷积、绝对位置表或类别词元，空间信息完全留给旋转位置编码。音频茎先把音频变成对数梅尔谱，再用三次步长为 2 的卷积在时间上降采样，每 11 秒的 100 帧梅尔变成 13 个词元，即每秒 13 个音频词元，然后把频率维折进通道并线性映射到共享块宽度。

共享块是标准的无偏置预归一化 Transformer，用 RMSNorm、SwiGLU、分组查询注意力与 QK 归一化，注意力是双向的。任意混排的图像、音频块与视频被打进一个变长序列，用累积长度向量标出注意力窗口，一次编码器前向处理整批而无需填充。共享块之后，相邻视觉词元在帧内沿特征维拼接，相邻音频词元沿时间拼接，再经归一化与两层 MLP 投影到解码器宽度。

下图对比双塔与单编码器，有助于理解信息在哪里首次相遇。

读图任务是找出两路表示首次交互的位置：在双塔中是语言解码器，在本文中是编码器内部。

> **看图路径：** 1. 对比上半双塔结构与下半单编码器结构的两条输入通路；2. 看共享块中红色融合层与白色非融合层在图中的分布；3. 沿像素与对数梅尔帧到合并投影再到解码器的箭头走一遍

[![原论文 Figure 3：Overview of omni-modal parsing architectures.](https://arxiv.org/html/2610.39301v1/arch_figure.png)](https://arxiv.org/html/2610.39301v1/arch_figure.png)

*论文图 3。原论文 Figure 3:：“Overview of omni-modal parsing architectures.”。*

图中上半两条独立色带分别标 Vision tower 与 Audio tower，箭头都指向 Language decoder，说明像素流与音频流首次相遇在解码器。下半像素经 Vision stem、对数梅尔帧经 Audio stem 进入 Youtu-Omni-Encoder，块内标出双向注意力与红色融合层，再经各自合并投影汇成一个输入序列进入 Youtu-LLM 解码器输出 OmniSchema JSON。这对应正文的结论：像素与声音共享权重与位置编码，并在编码器内已经交互。

**Youtu-Omni-Encoder × 模态茎 × 共享 Transformer：** Youtu-Omni-Encoder 是跨所有模态共用权重的感知编码器，模态茎只做最薄的输入转换，共享 Transformer 做主要的上下文建模。三者分工是：视觉茎把图像块线性映射为词元，音频茎把对数梅尔谱经卷积降采样为词元，共享 Transformer 再对混排的词元做双向注意力。这样搭配后新增模态只需加茎和投影，而主要的感知容量被所有模态分摊，跨模态的时间对齐也能在同一套位置编码下计算。

### 同一时间轴与稀疏融合如何实现

共享权重之后的核心是位置编码。编码器每头 64 个旋转槽，要同时表达 2 维版式、1 维时间以及二者对应。论文把预算切成连续的 3 段，分别给 T、H、W 轴，每段有各自的逆频率表并按各自宽度归一化，使每轴不论分到多少槽都覆盖完整频率范围。视觉词元的 t 取帧序号，h 和 w 取块网格；音频词元的 t 取时间偏移，h 与 w 置零。

2 模态因此写入同一 T 段，时间位置可比。模态身份留给特征区分，论文称两茎的特征分布本身易分，未用的显式模态轴在预实验中无增益。

位置可比还不等于交互，交互由稀疏融合实现。视频有独立与融合两条通路，共享权重且输出形状相同。独立通路中每帧每音频块各自成窗，如同不相关的图像串加录音；融合通路把帧与音频块按时间顺序打包，在融合层按音频到帧边界切成一组帧加随后音频块的窗口。训练时视频以低于 1 的融合概率走融合路，从第二阶段起取 0.8，使推理时两条路都可用。窗口只由累积长度向量指定，因此融合是逐层选择，同一词元在不同层可有不同时间原点，但旋转注意力只依赖查询与键的位置差，跨窗的查询键永不相遇，故无害。

融合窗内的时间换算把帧与音频词元放在公共尺度上，音频每词元为 1 单位，视觉每帧为音频词元率除以帧率。

\[\Delta t_{\text{audio}}=1\ \text{per token},\qquad\Delta t_{\text{vision}}=\frac{r_{a}}{\mathrm{fps}}\ \text{per frame},\]

该式先定义音频步长，再定义视觉步长，分母为采样帧率，分子为音频茎的每秒词元率。它不要求每帧都落在离散音频词元位置上，只是让二者在同一尺度推进。

下图用 8 帧四音频块的例子展示切窗与时间推进，例子是讲解用，不是实测性能。

读图任务是看懂切窗规则与时间原点：非融合层每事件独立，融合层每遇到音频到帧边界就起新窗。

> **看图路径：** 1. 在左图比较非融合层每帧每块独立成窗与融合层按音频到帧边界切窗的色块差异；2. 在右图看视觉 t 取帧序号、音频 t 取偏移如何落在同一时间轴；3. 注意红色跨模态格与蓝色帧间格只在融合层出现

[![原论文 Figure 4：Concurrent visual and audio content share fusion windows and a common temporal coordinate system.](https://arxiv.org/html/2610.39301v1/mech_figure.svg)](https://arxiv.org/html/2610.39301v1/mech_figure.svg)

*论文图 4。原论文 Figure 4:：“Concurrent visual and audio content share fusion windows and a common temporal coordinate system.”。*

左图两矩阵的行列为帧与音频块，非融合矩阵对角小方块独立，融合矩阵出现跨帧与跨模态的大方块，红色为跨模态对、蓝色非对角为帧间对，图例明确只有融合层才允许这两类。右图横轴为公共时间，帧为离散竖线，音频为连续小块，二者在融合窗内按同一刻度推进。这解释了为何时间定位增益集中在音视频：共现关系在感知内已算好。

**统一位置编码 × 音频视觉融合窗口：** 统一位置编码解决不同模态如何共用一套旋转位置预算的问题，它把旋转槽按 T、H、W 轴分段，每轴各自归一化，视觉词元取帧序号作 t、块位置作 h 和 w，音频词元取时间偏移作 t 并令 h 等于 w 等于 0，从而帧与声音落在同一时间轴上。融合窗口解决何时让二者交互的问题，只有被标为融合层的少数层才把同一时段的一组帧加音频块放进同一注意力窗口。两者组合后，对应关系在感知内部算出，而不是留给语言模型从两路独立表示中重建。

### 输出模式如何覆盖十个任务

OmniSchema 的顶层有模态、定位单元列表与全局描述。图像用元素列表，每个元素有编号、类别、边框与内容；音频与视频用片段列表，每个片段有编号、起止时间戳与视听字段；文档另有子类型与阅读顺序，富文本视频另有整视频的结构化报告，自然视频该字段留空。

图像侧 7 个任务各取所需：文档解析给版式类别加阅读顺序，文本、公式、表格分别用纯文本、LaTeX、OTSL 转写；化学结构解析为文档元素，内容是 SMILES 字符串；乐谱解析为文档元素，内容是 ABC 记谱；图表、流程图、几何分别把整图作为单个元素，内容为 Markdown 数据表、Mermaid 节点边、几何基元关系串，并附说明；自然图像每个显著对象为一个元素，含对象名、框内文本与区域说明，全局另有图像说明、叙事与场景。

音频侧每个片段先标发声或非发声，发声片段含说话人、转写、语言、声学事件与音色、表达、场景说明，非发声片段含声学事件与环境说明。视频侧每片段含可见对象与屏上文本、原子动作、交互、粗细 2 级相机运动、事件描述以及伴随音频的说话人、转写与声学事件。富文本与自然视频共享片段结构，前者再加整视频 Markdown 报告。

这种设计使每个词元可标为内容或结构，为后训练的差异监督提供依据。

**OmniSchema × 元素 × 片段：** OmniSchema 是覆盖十个任务的统一输出模式，它规定每个输出都是 JSON 对象，必含模态标记、带定位的内容单元和全局描述。元素是图像侧的单元，用归一化到 0 到 1000 的边框定位；片段是音频和视频侧的单元，用相对起始的时分秒起止时间定位，说话片段还带全输入一致的说话人编号。模式统一后，不同任务的输出只是选用不同字段子集，模型可以用同一套按词角色的目标做联合优化。

### 预训练如何分四步把感知拉齐拉长

训练分预训练 4 阶段与后训练 3 个阶段。解码器从自研文本 checkpoint 初始化，共享编码块从 Qwen3-0.6B-Base 去掉嵌入层与输出头初始化，茎与投影随机初始化。

第 0 阶段只训编码器、冻结解码器，用描述全图的标题与全段转写做稠密监督，输入保持小尺寸且不开融合层，目的是让随机投影学会输出固定语言模型可读的特征，同时屏蔽早期噪声梯度对语言能力的扰动。第 1 阶段解冻全部参数，是最大的 1.28T 词元阶段，图像预算从每图 256 词元提到 20000 词元以看原生分辨率页面，视频提到 64 帧、序列 8k 到 32k 词元，此时开 4 个融合层，并混入纯文本数据防止灾难性遗忘，学习率保持常数以便随时交接。

第 2 阶段为退火，512B 词元上余弦衰减学习率，并对编码器按深度做层级衰减，越靠近茎衰减越多、投影不衰减，以保护已学好的底层特征；音视频以 0.8 概率走融合路。第 3 阶段做长上下文扩展，在 128k 序列、单图或单视频最多 102400 词元、视频最多 512 帧上训 128B 词元。

**RLVR × OSAD × 教师刷新：** RLVR 是在模型自身采样上用可验证奖励做序列级优化，奖励先过可解码与主负载门控，再乘通用格式项与任务内容项。OSAD 是在同一采样前缀上用参考增强的教师给逐词元目标，属于在线蒸馏。教师刷新指每轮结束把学生的适配器合并进基座权重，用来初始化下一轮的教师与学生，使监督随解析器共同演进。两者搭配是先用序列奖励把格式拉正，再用词级目标修局部转录错误。

### 后训练如何从格式到序列奖励再到词级蒸馏

后训练起点是第 3 个阶段 checkpoint。有监督微调先用 16B 词元建立可靠的模式串行化与指令跟随，解析数据覆盖十任务的参考解析，通用数据复用已有对话与指令数据以保留聊天能力。微调还为在线阶段准备策略：若模型很少产出良构解析，后续奖励与蒸馏都将因全组失败或准入失败而无梯度。

接着是模式路由的组相对策略优化。奖励先过两道门：可解码与有主负载，否则为零；通过后为通用良构项与任务内容项乘积再截断到 0 到 1 之间。通用项含格式有效性并惩罚重复与覆盖不足，任务项在有参考描述时取定位字段分与描述分均值，否则只取前者。

\[\displaystyle R(y,y^{\star},\nu)=\mathds{1}[y\text{ decodes}]\,\mathds{1}[y\text{ has a payload}]\cdot\mathrm{clip}_{[0,1]}\big(\Omega(y,y^{\star})\cdot\mathrm{core}_{\nu}(y,y^{\star})\big),\]

该式要约束的是单个采样的奖励：两个示性函数做门控，clip 把乘积限制在 0 到 1，Omega 管格式重复与漏报，core 按任务选图表分数、文档序列相似、实体文本加框交并比等。

最后是 OmniSchema 感知的在线蒸馏，共 6 轮。每轮学生从同一 checkpoint 出发训低秩适配器并采样，教师是冻结的同一模型副本但额外以参考解析为条件。两者在学生自身前缀上打分，学生不见参考。

\[p_{t}^{(\tau)}=\mathrm{softmax}\big(f_{\theta}(x,y_{\lt t})/\tau\big),\qquad q_{t}^{(\tau)}=\mathrm{softmax}\big(f_{\bar{\theta}_{r}}(\tilde{x},y_{\lt t})/\tau\big).\]

该式定义学生与教师的下一词分布：f 为词表对数，tau 为蒸馏温度，教师输入为参考加查询的拼接。共享前缀使目标对齐在学生轨迹上。

角色差异监督为内容用 JS、结构用前向 KL 且结构温度更高。

\[d_{t}^{\mathcal{C}}=\mathrm{JS}\big(q_{t}^{(\tau_{c})}\,\big\|\,p_{t}^{(\tau_{c})}\big),\qquad d_{t}^{\mathcal{S}}=\mathrm{KL}\big(q_{t}^{(\tau_{s})}\,\big\|\,p_{t}^{(\tau_{s})}\big),\qquad\tau_{s}>\tau_{c}.\]

内容允许多解故用对称有界散度，结构语法受限故用鼓励覆盖的前向散度。单条损失为全词元 JS 均值加按角色均值加权的内容项与结构项，再按权重归一化；小批量目标为所有准入采样的等权平均，空批量跳过更新。

\[\mathcal{L}_{\mathrm{row}}(y)=\frac{\bar{d}^{\,\mathrm{all}}(y)+\alpha_{c}\,\bar{d}^{\,\mathcal{C}}(y)+\alpha_{s}\,\bar{d}^{\,\mathcal{S}}(y)}{1+\alpha_{c}+\alpha_{s}},\qquad\mathcal{L}=\frac{1}{|\mathcal{B}^{+}|}\sum_{y\in\mathcal{B}^{+}}\mathcal{L}_{\mathrm{row}}(y).\]

轮界把适配器合并进基座得到下一轮起点，教师随之刷新，参考条件仍只给教师。下图展示采样、准入与刷新，适合对照公式理解。

读图任务是区分轮内更新与轮界刷新：轮内只更新学生适配器，轮界合并后再分发。

> **看图路径：** 1. 先看上半学生采样经准入闸门再与教师分布比较的箭头；2. 区分内容 JS、结构 KL 与全词元 JS 三项在图中的标注温度；3. 再看下半轮内冻结教师与轮界合并适配器刷新教师的示意

[![原论文 Figure 6：OSAD combines token-adaptive on-policy supervision with teacher refresh at each round boundary.](https://arxiv.org/html/2610.39301v1/osad_mech_figure.png)](https://arxiv.org/html/2610.39301v1/osad_mech_figure.png)

*论文图 6。原论文 Figure 6:：“OSAD combines token-adaptive on-policy supervision with teacher refresh at each round boundary.”。*

上半查询经学生得采样，经准入闸门后与教师分布比较，中间损失框明确内容 JS、结构 KL 与全词元 JS 三项；下半左为轮内教师冻结、中为轮界合并适配器、右为下一轮同基座加新适配器。这对应正文的自演进含义：解析器与监督用同一数据池交替更新，无需手写奖励或另训教师。

**内容词元 × 结构词元 × JS 散度 × KL 散度：** 内容词元指字段值中的词，允许多种正确续写；结构词元指 JSON 的键和括号冒号逗号等，语法受限。OSAD 对内容位置用对称有界的 JS 散度，对结构位置用前向 KL 散度并配更高的蒸馏温度，目的是让内容监督容忍多解、让结构监督覆盖教师的结构预测。两者再与全词元 JS 项加权平均，使转录准确与序列化一致得到不同强度的监督。

### 在什么条件下测：基准、基线与打分口径

评估围绕两个问题：同一 checkpoint 在各模态上达到什么，以及统一编码器与自演进后训练各贡献多少。论文用单一 checkpoint 与单一推理配置测全部任务。

基准包括 1651 页的 OmniDocBench v1.6，总体分为文本准确、公式 CDM 与表格 TEDS 的平均；PureDocBench 的三轨干净、数字退化与物理翻拍，用于隔离采集退化的代价；OmniParsingBench 的自然图像、图表几何、音频、自然视频与富文本视频，每 split 分感知与认知两部分，总体为二者均值乘修复后可解析率；无字幕的 Video-MME-v2 考通用视频问答；ChemOCR 考分子图到 SMILES，PDMX-Synth 考乐谱图到 ABC。

基线来源要分清：文档与视频理解多取官方榜单数，OmniParsingBench、化学与乐谱多由作者自跑自评，其中 OmniParsingBench 因官方工具不全而自实现工具并修复格式后再打分，还排除了相机视频子集与 136 个缺媒体样本，保留 3738 个，因此自评数彼此可比但不宜直接与原榜单数对比。认知题由大模型只读解析作答，感知多为定位、抽取与转写对照。

### 文档解析是否被多模态拖累

要回答的比较问题是：在支持十任务的同时，文档深度是否保留。公平条件是同一官方榜单与同一总体定义，指标方向为总体越高越好。

下表整理文档主结果与结构增益的原文报告，总体与分项单位与原文一致。

| 条件 | 指标 | 本方法 | 增益来源 |
| --- | --- | --- | --- |
| OmniDocBench v1.6 | Overall | 96.96 | 总体居首 |

上表说明比较问题是广度是否牺牲深度：本方法总体 96.96 分居首；相对前代的提升集中在表格与公式，意味着改进不只是字符识别，而是把识别内容组织成正确结构。限制是文档专家仅 0.8 到 1.2B 参数，本方法用 55B 稠密模型达到同级，吞吐预期更低，且物理翻拍下所有系统都明显下滑。

纯文档退化实验进一步显示，本方法在干净、数字退化与物理翻拍三轨的平均上居端到端模型之首，相对前代每轨约涨 8 点，公式表格涨幅更大，说明优势来自鲁棒解析而非偏向干净页。但原文也承认翻拍的失真仍是主要挑战。

### 多模态解析的优势在哪里：时间轴上的增益

要回答的比较问题是：单编码器在哪些 split 上真正占优。公平条件是同一自实现工具重打所有系统，指标为各 split 总体，越高越好，平均时图表与几何先合成一个图形分再五分平均。

| Model | Audio | Nat. video | Text-rich video | Avg. |
| --- | --- | --- | --- | --- |
| Gemini-3-Pro [62] | 76.74 | 74.82 | 76.80 | 77.44 |
| Logics-Parsing-Omni [11] | 75.58 | 67.34 | 65.36 | 72.26 |
| Youtu-Parsing-Omni | 78.08 | 74.18 | 75.62 | 75.08 |

上表比较四系统在音频、自然视频与富文本视频及平均上的总体：本方法三时间 split 领先其他开源模型，图表总体 95.02 为全部系统最高，平均 75.08 领先 Logics-Parsing-Omni 的 72.26，只有闭源 Gemini-3-Pro 的 77.44 更高。结果呈现出非均匀性：相对 Logics，本方法在音频领先 2.5 点、自然视频 6.8 点、富文本视频 10.3 点，而静态的自然图像与几何分别落后 4.7 与 2.0 点；相对 Gemini，时间 split 基本持平而静态落后。这与共享时间轴的机制解释一致：越需要对齐事件时间的解析受益越大。

细节上音频的时间定位与事件关键词领先 9.1 与 13.1 点，但语音识别 77.94 为参比中最低；自然视频时间定位 63.68 领先 Gemini 约 4.2 点，认知平均 93.69 居首；富文本视频时间定位 50.70 对 23.05、语音识别 76.52 对 34.28，认知 94.60 仍最高。限制是自然图像的知识实体与计数偏弱，几何的关系项与图表认知中的颜色位置描述偏弱，论文称描述偏全局化可能丢了下游问答需要的细节。

通用视频问答上，无思考模式的本方法组分 11.5，L1 跨帧聚合 20.0 远超同类非思考基线至少 5 点，L2 与 L3 与非思考基线相当、落后思考版约 2 点，说明解析训练补了逐帧穷举转写，但多步推理仍缺思考模式。

### 符号转写与训练增益各来自哪里

要回答的比较问题有两个：通用解析器能否输出严格形式语言，以及 SFT 之后的两步各贡献多少。化学指标方向为指纹完全一致率越高越好且以后者为主；乐谱为字符符号行 3 级错误率越低越好。

下表整理化学与乐谱的原文报告，样本与单位保留原文口径。

| 条件 | 指标 | 对比系统 | 本方法 | 结论 |
| --- | --- | --- | --- | --- |
| ChemOCR | Tani@1.0 | DeepSeek-OCR 2 49.6 | 54.2 | 完全一致率最高 |
| PDMX-Synth | CER | LEGATO 23.30 | 22.73 | 字符级最低 |
| PDMX-Synth | SER LER | LEGATO 25.80 31.70 | 26.73 33.20 | 符号行级居第二 |

上表显示化学的优势在完全正确数，乐谱在字符级最低、符号行级次于专用 LEGATO，远超其他通用系统。限制是化学的 10 个非法参考被排除后按 990 分计，LEGATO 数为原论文报告而非自跑，跨表对比需注意口径。

训练增益的比较问题是 RLVR 与 OSAD 各占多少，条件为同一文档总体。

| 条件 | 指标 | 本方法 |
| --- | --- | --- |
| SFT 到终点 | Overall | 96.96 |
| 其中 OSAD 6 轮 | Overall | 96.96 |

上表说明后训练增益主要来自 OSAD 且 6 轮每轮为正但递减，机制上是参考条件的词级反馈修了序列奖励难抓的局部误读。编码器对照在无解析数据的通用设置下显示：随机初始化统一编码器落后双塔，文本初始化后在 300B 时通用平均只差 0.4 点、OCRBench 反超，阅读增益贯穿全程而空间关系任务仍弱，支持文本先验助读出符号而不助空间推理的判断。

### 哪些结论是有边界的

首先是未胜出项：自然图像总体 62.84 落后 Logics 的 67.53，几何 74.33 落后 76.34，音频与视频的语音识别分低于部分基线，说明时间结构可补偿转写短板，但不能说转写本身最强。

其次是评测范围：OmniParsingBench 为自实现工具加修复后打分并修正少量标注、排除部分样本，数与原榜单不可比；化学与乐谱各有一组分数引自他人报告；文档榜单数为公开榜单而非自跑。任何跨来源的胜负都应回到同工具同划分下理解。

最后是成本：论文明确未实现前代的跨区域特征复用与并行解码，本方法为端到端自回归加更大解码器， dense 表格等长输出吞吐预期更低。55B 稠密与 Logics 的 30B 混合专家总参约 6 倍于激活参数的对比，也说明参数口径不同，不宜只比数字大小。

### 复现第一步做什么：代码权重与数据口径

值得尝试的时机是：需要一份可引用的统一记录同时服务文档、图像、音频与视频，且下游可用纯文本模型读记录做问答与溯源；尤其当视频问答高度依赖何时说了什么、屏上出现了什么时，共享时间轴的增益更可能复现。

复现第一步是按原文拿单一 55B checkpoint 与单一推理配置跑全量十任务，不要先调单任务超参。论文给出了代码与权重链接，其中第三方托管的代码仓库经校验当前可达；资源身份记录中没有作者 code 或 model 处于 available 状态，因此不作作者资源已公开或当前可用的断言，引用时应区分链接被提及、第三方镜像可达与作者资源可用三件事。

还需补的验证是：在自备视频上检查时间戳分辨率为秒级是否够用、说话人编号跨长视频是否稳定、富文本报告是否漏掉颜色位置等问答敏感细节，并实测长文档与长视频的 128k 上下文显存与延迟。数据侧文档重标注依赖多模型投票加约 10% 分歧的人工修正，音视频依赖切分、说话人、转写与事件标注的多模型流水线，复现训练需先对齐这套标注而非只调模型。

### 一句话总结与何时选用

综合来看，论文用一套权重读所有模态、用一套模式写所有任务、用一套按角色区分的词级目标训所有任务，在文档上不输专用小模型，在音视频解析上拉开差距，在化学与乐谱形式语言上接近专用模型。

对音频与音乐方向的研究生，关键可复述步骤是：茎转词元、共享块建模、统一 T 轴定位、融合层交互、合并投影进解码器、按元素或片段输出 JSON、SFT 定格式、RLVR 正序列、OSAD 按词角色蒸馏并逐轮刷新教师。

选用时记住适用条件：输入含明确时空共现、输出需严格字段与可引用锚点、能承受大解码器自回归成本时最值；若只要单页干净文档或只要语音转写精度，专用小模型或专用识别器可能更经济，仍需补延迟与误判率的实测。

<details>
<summary>📎 论文与评分元数据</summary>

排名：前50% | 文档类型：模型报告 | [arXiv 原文](https://arxiv.org/abs/2610.39301)

</details>

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。

- 评分规则：type-aware-v1

- 评分模型：muse-spark-1.3-contributor

- 评分请求协议：openai_responses

---

[← 返回 2026-10-30 语音/音乐/音频论文速递](/audio-paper-digest-blog/posts/2026-10-30/)
