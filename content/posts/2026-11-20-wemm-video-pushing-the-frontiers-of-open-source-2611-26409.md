---
title: "WeMM-Video: Pushing the Frontiers of Open-Source Omni-Modal Video Understanding"
date: 2026-11-20
draft: false
tags: [音视频理解, 音频理解, 多模态学习, 知识蒸馏]
categories: [论文速递]
description: "WeMM-Video 针对有声视频中画面与声音对不齐、跨模态幻觉多的问题，用统一编码加时间戳对齐与混合思考推理的架构，配合约 1.2 万亿词元的渐进预训练和三阶段后训练，在 120 余项评测中让 35B-A3B 达到开源领先并接近头部闭源模型，小尺寸版本也保持跨尺度效率。"
hiddenInHomeList: true
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_arxiv_id: "2611.26409"
paper_digest_workbench_contract: "researcher-workbench"
paper_digest_workbench_schema_fingerprint: "1f09b594c317cc38e934de27a5b0e8ceb4baa50ef79bd4f8683dd9adea720fe7"
paper_digest_reader_title: "WeMM-Video：能听又能看的全模态视频理解模型是怎样练成的"
paper_digest_original_title: "WeMM-Video: Pushing the Frontiers of Open-Source Omni-Modal Video Understanding"
paper_digest_arxiv_version: 1
paper_digest_arxiv_versioned_id: "2611.26409v1"
paper_digest_arxiv_abs_url: "https://arxiv.org/abs/2611.26409v1"
paper_digest_arxiv_pdf_url: "https://arxiv.org/pdf/2611.26409v1.pdf"
paper_digest_primary_task: "音视频理解"
paper_digest_tags_contract: "paper-tag-flat-tags"
paper_digest_tags_schema_fingerprint: "27e36280a4b8d3df62ebe54d3ab037920f4d69feb2b554163f01bbae2caf4338"
paper_digest_tags_selection_contract: "paper-tag-selection"
paper_digest_tags_registry_version: "paper-tag-catalog"
paper_digest_tags_registry_sha256: "9673bc0122e1905a5dcfd8b223675400cc2fa4c36095bc0e5f817edf99a0ec5c"
paper_digest_tags_concepts: [{"facet":"task","id":"task.av-understanding","label":"音视频理解"},{"facet":"task","id":"task.audio-understanding","label":"音频理解"},{"facet":"method","id":"method.multimodal-learning","label":"多模态学习"},{"facet":"method","id":"method.distillation","label":"知识蒸馏"}]
paper_digest_primary_method: "多模态学习"
paper_digest_score: 6.4
paper_digest_rank_bucket: "前50%"
paper_digest_document_type: "模型报告"
paper_digest_one_sentence: "WeMM-Video 针对有声视频中画面与声音对不齐、跨模态幻觉多的问题，用统一编码加时间戳对齐与混合思考推理的架构，配合约 1.2 万亿词元的渐进预训练和三阶段后训练，在 120 余项评测中让 35B-A3B 达到开源领先并接近头部闭源模型，小尺寸版本也保持跨尺度效率。"
paper_digest_reader_sections: [{"heading":"问题本质：有声视频为什么比无声视频更难做对","index":1,"kind":"problem","roleLabel":"问题与瓶颈"},{"heading":"方法全景：一个有声视频样本如何走通端到端流程","index":2,"kind":"method_overview","roleLabel":"方法全景"},{"heading":"核心组件：声音如何被切成词元并与画面按时间对齐","index":3,"kind":"component","roleLabel":"核心机制"},{"heading":"训练管线：约 1.2 万亿词元如何分三段预训练再分三步后训练","index":4,"kind":"training","roleLabel":"训练与优化"},{"heading":"主实验验证：有声视频联合理解在什么口径下领先","index":5,"kind":"result","roleLabel":"主实验验证"},{"heading":"无声视频与纯音频验证：加入声音是否拖累了原有视觉能力","index":6,"kind":"result","roleLabel":"主实验验证"},{"heading":"图像与纯文本验证：全模态训练是否保住了图文底座","index":7,"kind":"result","roleLabel":"主实验验证"},{"heading":"收束判断：什么时候值得尝试以及复现第一步做什么","index":8,"kind":"synthesis","roleLabel":"实践与复现"}]
paper_digest_authors: [{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Changli Tang"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Jie Yang"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Tianyi Wang"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Lei Li"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Daoze Zhang"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Zijie Xin"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Zhan Liu"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Li Li"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Jinchang Xu"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Fengyun Rao"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Chao Zhang"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Jing Lyu"}]
paper_digest_abstract_sha256: "3793a354181826e97994cea5b9ac92cf0c4abea74ba17b024b307369542a26d9"
paper_digest_sidecars: {"citation.bib":{"sha256":"c304116aa0486a1161947eaee49356b44864eeacca1fed4a9580ac58af8b83d0","url":"/audio-paper-digest-blog/client/papers/2026-11-20/2611-26409/citation.bib"},"citation.json":{"sha256":"5cc221dbaee277ccebae824235c3addb3f80ca5e138a8403b3eace7ef6df8ee5","url":"/audio-paper-digest-blog/client/papers/2026-11-20/2611-26409/citation.json"},"citation.ris":{"sha256":"1e9e7c51673929b305d8d496440bf4c9a1be6f028a20fdec5d2b3153b3381f72","url":"/audio-paper-digest-blog/client/papers/2026-11-20/2611-26409/citation.ris"},"rethink-context.json":{"contract":"paper-research-context","schemaFingerprint":"5d4e79f7d3ee65b39ccb38281548bf20a1b2041ab7a27625eaf97ab9909a8383","sha256":"3fb86511aa54709f31790d0b91f929d3791607bde6909aa21a03114c58c217c5","url":"/audio-paper-digest-blog/client/papers/2026-11-20/2611-26409/rethink-context.json"}}
paper_digest_api_reader_contract: "beginner-researcher"
paper_digest_api_reader_schema_fingerprint: "7c0300b9342334b864b6a304dcf02a96fb8dbbe8f4061b6dbc0ddfdd249ceceb"
paper_digest_api_reader_article_sha256: "a7a7c12973697cdfac53af3864fe9ce9e2dca86643f144802dd73278c9e30b59"
paper_digest_api_reader_plan_sha256: "8149d2ce0af0c97b47ef9e747e41f38d1ce29f747a3e80d7944bddec4943ad73"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings"
paper_digest_api_reader_source_binding_schema_fingerprint: "d2a2607a6e561909473022eb43f56332ee357af8568566a095c29083ffdec9cc"
paper_digest_api_reader_source_bindings_sha256: "ca6af2973aab1d16253ca71fae71f97d868cb3f33329a3b7b897fc5b5ab4af8b"
paper_digest_api_reader_source_table_count: 4
paper_digest_api_reader_source_formula_count: 0
paper_digest_api_reader_structured_artifacts_sha256: "05441581fcdd3722ada12d829527cdadfb103c0fdc198df108216aa84c143ee1"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity"
paper_digest_api_reader_author_identity_schema_fingerprint: "1e3fd3a9a56c9a5bf52df8df5022690b9a3fa92e83e934f295af87c0e258ed2f"
paper_digest_api_reader_author_identity_sha256: "7e47ab7bd20938daf9950bb8506f58de526372b2e8ce997e5fab17de3a031fca"
paper_digest_api_reader_author_count: 12
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity"
paper_digest_api_reader_resource_identity_schema_fingerprint: "33b0be17118be61f39b85ce690c8da17e91f2864bb65e85284f60c40067328e0"
paper_digest_api_reader_resource_identity_sha256: "4ed85224f6aa274ead23e8c002d31a2d7e6452e4affd07c8f472515f44065b7f"
paper_digest_api_reader_resource_count: 2
paper_digest_api_reader_figure_persistence: "ephemeral-no-persisted-figure-assets-v1"
paper_digest_api_reader_decision_projection: "api-reader-decision-projection"
paper_digest_api_reader_decision_projection_schema_fingerprint: "e56feb5ab75c8710904916b898f73dab9bb18bdf65bb60b7ed2edf7f99cea860"
---

# 📄 WeMM-Video：能听又能看的全模态视频理解模型是怎样练成的

> 英文题目：*[WeMM-Video: Pushing the Frontiers of Open-Source Omni-Modal Video Understanding](https://arxiv.org/abs/2611.26409v1)*

<!--paper-tag-hierarchy-v1:start-->

**研究分类**

- **研究任务**：[音视频理解](/audio-paper-digest-blog/papers/?concept=task.av-understanding)；[音频理解](/audio-paper-digest-blog/papers/?concept=task.audio-understanding)
- **研究方法**：[多模态学习](/audio-paper-digest-blog/papers/?concept=method.multimodal-learning)；[知识蒸馏](/audio-paper-digest-blog/papers/?concept=method.distillation)

<!--paper-tag-hierarchy-v1:end-->

> 评分：**6.4/10** | 创新 1.2/2 | 技术严谨 1/1.5 | 实验充分 1.3/1.5 | 清晰度 0.8/1 | 影响力 0.8/1.5 | 开源 0/1.5 | 可复现 0.1/0.5 | 工程/实践 1.2/1.5


## 👥 作者与机构

- Changli Tang：机构信息未能在本次解析中与作者逐人可靠绑定
- Jie Yang：机构信息未能在本次解析中与作者逐人可靠绑定
- Tianyi Wang：机构信息未能在本次解析中与作者逐人可靠绑定
- Lei Li：机构信息未能在本次解析中与作者逐人可靠绑定
- Daoze Zhang：机构信息未能在本次解析中与作者逐人可靠绑定
- Zijie Xin：机构信息未能在本次解析中与作者逐人可靠绑定
- Zhan Liu：机构信息未能在本次解析中与作者逐人可靠绑定
- Li Li：机构信息未能在本次解析中与作者逐人可靠绑定
- Jinchang Xu：机构信息未能在本次解析中与作者逐人可靠绑定
- Fengyun Rao：机构信息未能在本次解析中与作者逐人可靠绑定
- Chao Zhang：机构信息未能在本次解析中与作者逐人可靠绑定
- Jing Lyu：机构信息未能在本次解析中与作者逐人可靠绑定

## 📌 核心摘要

**问题与瓶颈：** 论文处理的对象是同时包含连续视觉帧和连续声音的视频，输入包括图像像素序列、16,000 Hz采样的音频波形中的语音对白与环境声，输出是描述、问答、判别或推理文本。现有开源路线常把视觉和音频分开处理，难以把发声时刻与画面事件对齐，容易忽略关键音画细节，并产生缺乏视频证据支撑的跨模态幻觉，在需要多步联系长距离事件的任务上表现不稳。

**核心思路与方法架构：** 论文的核心想法是用同一种语言模型同时处理文本、图像、音频和视频，并用可切换的混合思考范式控制回答方式，直接回答对应低时延指令模式，分步给出显式推理链对应思考模式。以一段带声音的视频为例，视觉帧经原生视觉编码器变为视觉词元，音频经基于Whisper的音频编码器提取声学特征，再经窗口级查询变换器按每0.1秒压缩为1个音频词元，即每秒10个词元，视觉与音频词元按时间顺序交错排列并加入文字时间戳，一起送入Qwen系列语言模型自回归生成文本。2B、4B、9B版本分别基于Qwen3.5系列对应规模，35B-A3B版本基于Qwen3.6-35B-A3B并采用混合专家结构，原文未说明活跃参数量，音频编码器来自Qwen2.5-Omni，视觉编码器沿用基座能力。训练上先冻结除音频对齐器外的参数做声学对齐，再放开除视觉编码器外的大部分参数做联合知识注入，最后扩大上下文窗口强化长视频与多视频能力，后训练依次做多教师在线策略蒸馏、抗重复多轮直接偏好优化和专家强化学习，分别解决通用能力、重复解码与疑难任务。

**关键实验与核心代价：** 在33项联合音画基准上，旗舰WeMM-Video-35B-A3B思考模式在Video-MME含音频条件下得86.4分，高于Seed2.0-Mini-0428的83.6分和Qwen3.5-Omni-Flash的79.3分，接近Gemini-3.0-Flash的88.6分，分数越高越好。同套协议下该模型在Daily-Omni上得83.4分，超过Gemini-3.0-Flash的82.4分，在MMOU小规模测试集上得74.5分，高于Seed2.0-Mini-0428的65.8分，在抗幻觉指标SVHalluc上以全样本准确率得80.3分，明显高于Seed2.0-Mini-0428的75.4分。轻量版本同样具备跨尺度优势，9B思考模式在Video-MME含音频条件下得85.1分，高于开源30B规模基线Qwen3-Omni-30B-A3B-Instruct的77.3分。思考模式相对同模型的指令模式在多数复杂音画任务上更高，例如35B-A3B在Video-MME含音频条件下从84.2分提升到86.4分，但需要生成更长的推理链，论文未提供可核对的时延或吞吐数值，推理成本需要按实际部署另行测量。预训练共消耗约1.2万亿词元的多模态语料并经历多阶段后训练，这是获得上述增益的主要计算代价。

**适用边界与深读导览：** 上述领先结论成立于中英文双语、短剧、直播带货、访谈与影视类音画数据分布，以及原文列出的联合音画评测协议和裁判模型条件下，例如部分交互与描述基准分别以GPT-6.1-Sol、GPT-4o和Qwen3-235B-A22B为裁判，换裁判或换分布结果可能变化。方法在部分细分项上并不占优并可能退化，如35B-A3B思考模式在JointAVBench上得65.9分，低于Qwen3.5-Omni-Flash的69.0分，在MUSIC-AVQA上得79.5分，低于该基线的82.1分，在video-SALMONN 2测试集上以总错误率越低越好计得28.3，差于该基线的28.0。对无声视频、纯音频、图像与纯文本任务论文另用不同基准集合验证，多为与强基座持平或接近而非全面拉开差距，非中英语种、强噪声或遮挡音频、超长上下文之外的流式部署等范围尚未验证。想深究编码器与词元交错方式可看长文架构部分，想核对三阶段预训练与蒸馏、去重复、强化学习的分工可看长文训练部分，想复核各基准的数值与裁判差异可看长文试验对比与表格注释。

## 🔗 开源与复现资源

- 第三方资源：<https://github.com/Tencent/WeMM-Video> — 链接可访问（HTTP 200）

- 第三方资源：<https://huggingface.co/collections/tencent/wemm-video> — 链接可访问（HTTP 200）

可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 问题本质：有声视频为什么比无声视频更难做对

刚接触视频理解的同学容易把视频当成一连串图片，认为看清每一帧就能答题。真实的短视频、直播带货、短剧与 embodied 场景里，声音与画面是同时推进的两条线索。主播一边拿起白色水壶、一边说水壶原价，一会儿又拿起绿色杯子说两个三十元，观众必须把哪句话对应哪个动作、哪个价格对应哪件商品按时间捋清楚。如果只看画面，会把水壶和杯子混成一个优惠；如果只听声音，又不知道她手里拿的是哪一件。论文要解决的正是这种联合感知与推理：既要捕捉帧间细微动作与长程事件，又要把语音、环境声与对应视觉事件在时间轴上对齐，还要避免把视频里没有的细节编出来。

已有路线大致分三支：大语言模型提供通用推理底座，视觉语言模型把图片与无声视频做得不错，音频语言模型把语音识别与声音理解做得不错，少数工作开始尝试音视频联合。但论文指出，开源模型在复杂真实场景里仍然脆弱，典型表现是忽略关键音视频细节、把声音安到错误的画面事件上，或者产生缺乏视频证据的跨模态幻觉。也就是说，单模态很强不等于联合很强，缺的是能同时做细粒度时间建模与显式推理的统一框架。

WeMM-Video 的定位就是补上这一块。它是一个中英双语的全模态基础模型家族，覆盖 2B、4B、9B 与 35B-A3B 4 种规模，统一处理文本、图像、音频与视频 4 种输入，只输出文字。核心设计是混合思考范式：同一个模型既支持直接回答模式，用于快速直接作答，也支持思考模式，用于先写出分步推理痕迹再作答。论文强调，思考模式通过在纯视觉与音视频输入上都生成可追溯的推理过程，有助于减少跨模态幻觉，并在复杂视频任务上带来明显提升。理解后文的关键是记住输入是 4 模态、输出是文字、评价重点是有声视频的联合理解，而不是单做语音或单做无声视频。

**文本 × 图像 × 音频 × 视频：** 文本是提问与回答的载体，图像提供单帧静态外观，音频提供语音、音乐与环境声，视频则是连续画面加伴随声音的复合流。四者组合后，模型必须同时解决单模态感知与跨模态时间对齐，才能判断声音由哪个画面事件发出。

论文把评测组织成 4 个大方向：视频、音频、图像与纯文本，其中视频又细分为有声视频与无声视频。旗舰 35B-A3B 在有声视频上对标了 Gemini-3.0-Flash、Seed2.0-Mini-0428 与 Qwen3.5-Omni-Flash 等闭源模型，以及 Qwen3-Omni-30B-A3B-Instruct 等开源模型；小尺寸版本则重点与同量级开源全模态模型比较。这种安排决定了结论的成立条件：所谓领先，是在论文选定的 120 余项基准与各自的裁判模型下成立，换了数据集划分或裁判模型，排序可能变化。

### 方法全景：一个有声视频样本如何走通端到端流程

我们沿着一个带解说的直播片段走一遍流程，会更容易看清各模块的分工。假设输入是一段 5 分钟的带货视频，画面里主播依次展示水壶与杯子，音轨里有她的报价语音与背景音乐，提问是哪一时刻确认了三十元组合价、包含哪两件商品。模型首先把文字提问转成文本词元，把抽出的视频帧送入视觉编码器，把音频波形送入音频模块。视觉侧沿用各自底座原生的视觉编码器与投影机制，保留已有的图像与视频理解能力；音频侧则新增专门模块，避免底座原本缺乏声音感知的问题。

在进入大语言模型之前，所有模态被统一成词元序列。论文图 2 展示的正是这种汇合方式：底部是图像、视频、音频 3 类原始输入，中部是视觉编码器与音频编码器，顶部是一个大语言模型。不同颜色的小方块代表文本词元、图像词元、视频帧词元、音频词元、时间戳词元与输出词元。关键细节是，对于带声音的视频，视觉词元与音频词元按时间顺序交错排列，并辅以显式文字时间戳，帮助模型做细粒度跨模态时间对齐。最后大语言模型自回归地生成文字回答，思考模式下还会先生成推理痕迹。

下面的图 1 从 4 类任务展示模型的能力范围：左上是全模态理解，右上是全模态推理，左下是音频与音乐理解，右下是图像与文本理解。如果时间戳缺失或排序错乱，模型就容易把后半段的价格安到前半段的商品上。

[![原论文 Figure 1：WeMM-Video can perceive and understand omni-modal videos, perform complex multimodal reasoning,…](https://arxiv.org/html/2611.26409v1/WeMM-Video-capabilities-compact.png)](https://arxiv.org/html/2611.26409v1/WeMM-Video-capabilities-compact.png)

*论文图 1：WeMM-Video can perceive and understand omni-modal videos, perform complex multimodal reasoning, and effectively handle general tasks across audio, image, and text modalities（原论文 Figure 1）。*

上面这张能力示意把 4 类任务摆在一起，左上是全模态理解，右上是全模态推理，左下是音频与音乐理解，右下是图像与文本理解。左上用 7 个带时间戳的直播帧提问三十元优惠何时确认、覆盖什么，答案指向 04:32 确认、覆盖两个绿色杯子而不含白色水壶，这正是时间对齐加联合描述的例子。右上用短剧多帧提问为何不再怀疑盗窃，答案需要把小孩承认弄坏卡扣与维修单据结合起来，这正是跨帧因果推理。左下问音乐中段如何变化，右下问柱状图中哪月增速更高，都说明同一模型还要兼顾纯音频与纯图文。这种一图四象限的摆法，对应论文统一处理 4 模态的主张。

**视觉编码器 × 音频编码器 × 大语言模型：** 视觉编码器负责把图像与视频帧转成视觉词元，音频编码器负责把连续声波转成音频词元，大语言模型负责接收交错排列的各类词元并自回归生成文字。三者分工是前后端关系，前端做感知压缩，后端做统一推理。

底座选择也值得记清楚。2B、4B、9B 分别基于 Qwen3.5-2B、4B、9B，35B-A3B 基于 Qwen3.6-35B-A3B，音频编码器初始化自 Qwen2.5-Omni。也就是说，视觉能力主要继承底座，声音能力主要靠新增音频模块补齐，后文训练阶段冻结与解冻的安排也是围绕这个继承关系展开的。

### 核心组件：声音如何被切成词元并与画面按时间对齐

声音处理是初学者最容易模糊的一环。论文的做法分两步：先用基于 Whisper 的音频编码器提特征，再用窗口级 Q-Former 做压缩映射。具体输入要求是采样率 16000 赫兹、按 30 秒分块。Q-Former 在 0.1 秒的局部时间窗内压缩特征，每个窗口映射为大语言模型输入空间中的一个音频词元，折算下来每秒产生 10 个音频词元。这个设计的物理含义很直观：把连续声波先切成很薄的时间片，再把每片压成一个向量，让语言模型能像读字一样按顺序读声音。

对齐发生在词元排列阶段。对于带伴随音频的视频输入，视觉词元与音频词元按时间先后交错，并补充显式文字时间戳。例如视频前 2 秒的画面词元后面紧跟同一时段的音频词元，再标注小于 0.0 秒、小于 1.0 秒这类标记。这样当主播在 04:32 说出三十元时，模型能把该时刻的语音词元与同时间的杯子画面词元放在相邻上下文里，而不是把全片声音平均成一个全局标签。代价是序列会变长，长视频与多视频场景对上下文窗口提出更高要求，这也是后文专门做长上下文扩展的原因。

在进入架构细节图之前，先明确要观察的重点是 3 路输入如何汇成一路序列，以及时间信息放在哪里。

[![原论文 Figure 2：Model architecture of WeMM-Video.](https://arxiv.org/html/2611.26409v1/wemmvideo.svg)](https://arxiv.org/html/2611.26409v1/wemmvideo.svg)

*论文图 2：Model architecture of WeMM-Video（原论文 Figure 2）。*

这张架构图从下往上看最清楚。最底层左侧是单张图像，中部是连续视频帧加底部声波，右侧是独立音频波形。中层蓝色块是视觉编码器，橙色块是音频编码器，箭头指向上方序列中的蓝色系与橙色系词元。序列里还能看到灰色时间戳词元穿插其中，文字提示如这里是图像、接下来是视频、接下来是音频，说明模型用自然语言提示加特殊词元共同标定模态边界。顶层绿色大块是大语言模型，右上角绿色输出词元表示最终文字描述。这种画法把分支处理与汇合点讲得很具体：视觉与音频各走各的编码器，只在词元序列层面汇合，共享的是同一个语言模型的上下文。

**直接回答模式 × 思考模式：** 直接回答模式追求低延迟，直接给出答案，适合感知明确的提问；思考模式先生成显式的分步推理痕迹，再给出结论，适合需要对照画面与声音细节的复杂推理。两者共享同一套感知编码，只在解码策略上分叉。

混合思考是另一个需要准确理解的机制。它不是 2 个模型，而是同一模型在解码时的两种策略。直接回答模式跳过中间痕迹，延迟低，适合问题本身感知难度不大的基准；思考模式显式写出分步推理，例如先列出关键帧动作、再转录关键语音、再对照时间戳得出结论。论文在 35B 规模上同时报告两种模式，就是为了把不思考基线与思考增益分开，小尺寸则只报告思考模式以突出上限。复现时要注意用同一提问分别触发两种模式，否则会把解码策略差异误读成模型能力差异。

### 训练管线：约 1.2 万亿词元如何分三段预训练再分三步后训练

数据构成决定了模型见过什么。论文报告训练语料约 1,200,000,000,000 词元，其中联合音视频数据占比最大，达到总量的 45.4%，为复杂多模态动态建模提供稠密时间监督。按任务看，描述任务占比最大，达到 37.7%，是基础感知能力的底座。论文在描述里做了两类倾斜：一类是细粒度视觉描述，聚焦竞技体育、电竞游戏、舞蹈编排与户外活动等动作事件密集的视频，标注快速身体动态与细微状态变化；另一类是音视频联合描述，面向影视、短剧、访谈、综艺与直播带货等原生有声视频，把视觉动作、对话与环境声沿时间轴写成综合描述。所有描述数据都经过自动质量打分、语义去重与毒性过滤。

除描述之外，语料还包括大范围语音识别、音乐理解与通用音频理解，用于补齐底座原本缺失的声音表征空间；跨媒体理解子集面向多源任务，如视频两两比较、视频与配乐兼容性分析、电商品牌广告一致性校验；知识与推理问答则用双轨策略，一轨把大范围视觉语言知识推理数据配上高质量思考痕迹，另一轨收集原生音视频推理任务，把深度推理能力迁移到有声场景。这种搭配的意图是既保感知广度，又补推理深度。

**声学模态对齐 × 全模态知识注入 × 长上下文能力扩展：** 声学模态对齐先把声音映射到语言模型能理解的空间，全模态知识注入再解冻大模型学习图文声联合知识，长上下文能力扩展最后用长视频与多视频拉长有效记忆。三段按窗口由短到长推进，避免一步到位造成模态冲突。

预训练分 3 个阶段，上下文窗口逐步放大。第一阶段是声学模态对齐，上下文较短，只优化音频对齐器即窗口级 Q-Former，冻结底座大语言模型与各模态编码器，用基础音频文本对学习语音识别与通用音频描述，解决从无声到底座能听的第一步。第二阶段是全模态知识注入，窗口放大，除视觉编码器继续冻结外解冻其余参数，用文本、视觉、听觉与联合数据建立统一表征空间。保留视觉编码器不动，是因为继承的视觉表征已经足够强。第三阶段是长上下文能力扩展，保持同样的可训练参数配置，进一步放大窗口，用长视频、长音频与多视频场景增强跨模态长程依赖建模，同时保持通用任务不退化。

多教师蒸馏用外部强模型补通用图文能力、用同系模型保住音频能力，抗重复优化专门清理冗长重复解码，专家强化学习针对说话人识别与复杂音视频推理等难例做专项提升。三者分别管广度、稳定性与深度。

后训练同样分三步，分别解决能力广度、生成稳定性与专项深度。多教师蒸馏用更强的外部教师补文本与视觉语言任务的通用感知推理，用同系模型保留已有音频与音视频能力，还用跨模态蒸馏把文本知识转到音频任务，增强语音理解与指令跟随，目标是互补而不互相覆盖。抗重复优化针对的是基座在预训练与蒸馏后仍有的冗长重复解码倾向，论文用 MrDPO 离线挖掘视频、音频与视觉语言任务中表现重复的难负例做多轮直接偏好优化，每轮只更新低秩适配器并在轮间合并重初始化，以保持多轮稳定。专家强化学习最后攻坚难例，通过离线推理筛选模型尚不能稳定做对的样本，按任务可验证性分别用规则奖励、基于量表的奖励与教师一致性奖励，用动态奖励路由分配任务奖励，并对直接回答与思考两种模式做联合随机采样优化，还扩展到更长帧覆盖与序列长度以适应长输入。记住这个顺序：先变广，再变稳，最后变专。

### 主实验验证：有声视频联合理解在什么口径下领先

先看论文最看重的有声视频联合理解。下表取自联合音视频基准的原始结果，只列 5 个基准，列依次是 Gemini-3.0-Flash、Seed2.0-Mini-0428、Qwen3.5-Omni-Flash，以及 WeMM-Video-35B-A3B 的直接回答和思考两种模式，数值越高越好，原表对不含灰色参考列的最优结果加粗。

| 基准 | Gemini-3.0-Flash | Seed2.0-Mini-0428 | Qwen3.5-Omni-Flash | WeMM-Video-35B-A3B (Instruct) | WeMM-Video-35B-A3B (Thinking) |
| --- | --- | --- | --- | --- | --- |
| Daily-Omni | 82.4 | 82.5 | 81.8 | 81.5 | 83.4 |
| WorldSense | 63.8 | 61.3 | 57.9 | 59.6 | 62.7 |
| AVUT Human | 86.4 | 83.0 | 81.4 | 83.6 | 85.9 |
| AV-SpeakerBench | 75.9 | 68.5 | 65.2 | 66.5 | 72.6 |
| Video-Holmes | 71.2 | 62.1 | 61.7 | 63.2 | 63.4 |

35B 思考模式在这 5 个基准上的得分都高于 Qwen3.5-Omni-Flash。与 Gemini-3.0-Flash 相比，只有 Daily-Omni 更高（83.4 分对 82.4 分），另外 4 项都更低，最大差距出现在 Video-Holmes（63.4 分对 71.2 分），AV-SpeakerBench 也低 3.3 分（72.6 分对 75.9 分）。直接回答模式在 Daily-Omni 上为 81.5 分，低于思考模式的 83.4 分，说明思考模式在这组基准上带来了增益。因此这组数字只支持接近同类闭源对照、并非全面领先的判断，说话人归属与多线索因果推断仍是明显短板。

声学模态融入后，原有视觉能力是否被稀释，要另看静态图像评测。

图像评测检验声学模态融入是否稀释视觉骨干能力，论文围绕 STEM 与解谜推理、通用问答、文本与文档理解、空间理解、多图理解、计数与指令遵循 7 个维度组织，共 28 项基准，包括 MMMU、MathVision、RealWorldQA、DocVQA、RefCOCO、CountBench 与 MMIFEval 等。比较时以 Qwen3.5-Omni-Flash、Qwen3.6-35B-A3B 与 Qwen3.5-9B 为基线，WeMM-Video 的 2B、4B、9B 与 35B-A3B 均报告思考模式结果，原表将每行最优结果加粗，便于在同一行内看相对排序。理解这些条件，才能正确解读保持与超越的范围。

下表完整列出 28 项基准的原始得分，列覆盖 3 个基线与 4 个思考模式版本，行覆盖 7 个维度，可逐行对照保持与提升幅度，单位均为分，数值越高越好。

| STEM/Puzzle |  |  |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Benchmark | Qwen3.5-Omni- | Qwen3.6- | Qwen3.5- | WeMM-Video- | WeMM-Video- | WeMM-Video- | WeMM-Video- |
| Benchmark | Flash | 35B-A3B | 9B | 2B (Thinking) | 4B (Thinking) | 9B (Thinking) | 35B-A3B (Thinking) |
| MMMU | 76.9 | 81.7 | 78.4 | 61.2 | 78.4 | 78.9 | 81.1 |
| MMMU-Pro | 68.2 | 75.3 | 70.1 | 49.4 | 64.7 | 69.4 | 72.9 |
| MathVision | 65.4 | 80.4 | 78.9 | 49.2 | 73.3 | 76.0 | 79.6 |
| MathVista (mini) | 82.9 | 86.4 | 85.7 | 78.8 | 85.2 | 86.1 | 86.6 |
| DynaMath | 79.3 | 82.8 | 83.6 | 73.4 | 81.8 | 82.2 | 81.5 |
| ZEROBench | 1.0 | 5.6 | 3.0 | 0.4 | 0.8 | 2.0 | 3.8 |
| ZEROBench_sub | 26.0 | 34.4 | 31.1 | 21.0 | 25.8 | 30.5 | 34.1 |
| VisualPuzzles | 44.9 | 58.1 | 55.1 | 39.6 | 53.4 | 56.8 | 60.1 |
| RealWorldQA | 77.5 | 85.3 | 80.3 | 73.6 | 80.1 | 80.3 | 83.4 |
| MMStar | 75.7 | 80.7 | 79.7 | 71.8 | 76.4 | 77.9 | 79.8 |
| MMBenchEN-DEV-v1.1 | 88.8 | 92.8 | 90.1 | 83.1 | 88.9 | 89.9 | 90.9 |
| MMBenchCN-DEV-v1.1 | 81.7 | 88.9 | 86.7 | 80.1 | 88.2 | 88.9 | 89.2 |
| SimpleVQA | 54.4 | 58.9 | 51.2 | 45.9 | 51.9 | 55.4 | 62.0 |
| WorldVQA | 13.6 | 19.9 | 15.7 | 14.1 | 20.3 | 23.6 | 28.6 |
| CharXiv RQ | 64.4 | 78.0 | 73.0 | 62.0 | 70.3 | 73.6 | 75.7 |
| CC-OCR | 80.8 | 81.9 | 79.3 | 79.8 | 82.9 | 84.7 | 84.2 |
| AI2D_TEST | 89.0 | 92.7 | 90.2 | 83.2 | 88.4 | 89.6 | 90.6 |
| MMLongBench-Doc | 53.6 | 61.2 | 57.7 | 42.8 | 55.5 | 56.1 | 60.2 |
| OCRBench | 89.1 | 87.9 | 89.2 | 81.8 | 85.7 | 89.6 | 90.2 |
| DocVQA | 95.3 | 97.3 | 97.2 | 95.1 | 96.5 | 97.5 | 97.5 |
| ERQA | 50.0 | 59.8 | 55.5 | 43.8 | 53.0 | 54.5 | 61.8 |
| RefCOCO (avg) | 92.6 | 92.0 | 89.7 | 63.7 | 86.3 | 89.0 | 89.5 |
| EmbSpatialBench | 82.7 | 84.3 | 83.0 | 79.0 | 83.3 | 82.8 | 83.9 |
| CV-Bench | 86.6 | 87.8 | 87.2 | 84.2 | 88.6 | 88.6 | 89.2 |
| MIHBench | 61.8 | 81.3 | 81.8 | 80.8 | 81.5 | 82.9 | 83.1 |
| CountBench | 88.2 | 96.3 | 97.2 | 83.9 | 93.3 | 94.3 | 96.3 |
| TallyQA | 81.2 | 79.8 | 79.8 | 78.8 | 80.4 | 81.5 | 80.7 |
| MMIFEval | 67.0 | 81.1 | 79.5 | 58.8 | 74.6 | 80.8 | 81.4 |

完整原表显示，旗舰 35B 思考模式与自家骨干基本持平并全面超过 Qwen3.5-Omni-Flash，例如 MMMU 为 81.1 分，骨干 Qwen3.6-35B-A3B 为 81.7 分，基线为 76.9 分；MathVision 为 79.6 分，骨干为 80.4 分，基线为 65.4 分；RealWorldQA 为 83.4 分，骨干为 85.3 分，基线为 77.5 分；DocVQA 为 97.5 分，骨干为 97.3 分，基线为 95.3 分；CC-OCR 为 84.2 分，骨干为 81.9 分，基线为 80.8 分；WorldVQA 为 28.6 分，骨干为 19.9 分，基线为 13.6 分。跨尺度看，9B 思考模式与自家 Qwen3.5-9B 骨干基本持平并全面超过基线，例如 MMMU 为 78.9 分，骨干为 78.4 分，基线为 76.9 分；DocVQA 为 97.5 分，骨干为 97.2 分，基线为 95.3 分；OCRBench 为 89.6 分，骨干为 89.2 分，基线为 89.1 分；MMIFEval 为 80.8 分，骨干为 79.5 分，基线为 67.0 分。即使 4B 思考模式也在多项上超过基线，例如 MMMU 为 78.4 分，基线为 76.9 分。代价是思考模式带来更长推理链，2B 在部分高难度推理上仍落后，例如 MMMU-Pro 为 49.4 分，低于基线的 68.2 分，提醒读者轻量版本适合资源受限部署但推理上限仍受规模约束。局限是不同基准量表与难度不同，直接跨基准比较绝对分没有意义，只能在同一行内比较。

### 无声视频与纯音频验证：加入声音是否拖累了原有视觉能力

加入音频模块最让人担心的是视觉退化。论文用 32 项无声视频基准做了全面检查，覆盖通用视频理解、长视频理解、细粒度感知、时间定位、空间理解、流式视频理解与多视频理解，包括 Video-MME、MVBench、Video-MMMU、MLVU、TimeLens、OVO-Bench、CrossVid 等。比较对象除了闭源模型，还特意加入各自的视觉语言底座，如 Qwen3.6-35B-A3B 与 Qwen3.5-9B，这样能把融合声音带来的变化与底座本身的强弱分开。指标方向以原表脚注为准，例如 Video-IFBench 报告双项，MMBench-Video 按 0 到 3 分计，TimeLens 按平均交并比计。

总体上，35B-A3B 与强视觉底座基本持平，并明显领先 Qwen3.5-Omni-Flash 的几乎全部无声基准。例如无声 Video-MME 思考 80.4 分、直接回答 78.0 分，底座为 82.5 分；MLVU 思考 85.3 分，底座 86.2 分；TimeLens-QVHighlights 思考 69.0 分，底座 66.8 分。小尺寸趋势一致，9B 与 4B 大幅超过 Qwen3-Omni-30B-A3B-Instruct 与 MiniCPM-o-4.5-9B，9B 在多数基准上达到或接近 Qwen3.5-9B 底座，例如 Video-MME 9B 为 78.5 分，底座为 78.4 分；TempCompass 9B 为 84.8 分，底座为 82.8 分。这说明论文冻结视觉编码器、只在语言侧与音频侧做适配的策略，确实把视觉退化控制在较小范围。但也要看到个别长视频与多视频项仍有差距，例如 Video-Index 思考 37.9 分低于底座 38.1 分，提示长上下文扩展并未完全消除多模态融合的开销。

纯音频方面，评测覆盖通用音频理解、音乐理解、语音识别、歌词识别与语音交互五大类 18 项基准，包括 MMAU、MMAU-Pro、MMAR、GigaSpeech、VoxPopuli、LibriSpeech、WenetSpeech、VoiceBench 等。论文对全部 WeMM-Video 变体都用直接回答模式报告，因为多数标准音频基准更偏直接感知。结论是通用音频理解上 35B 超过开源基线并接近 Qwen3.5-Omni-Flash，例如 MMAU-Pro 9B 为 70.9 分、35B 为 70.6 分，MMSU 9B 为 76.8 分；在语音交互与口语指令跟随上针对性优化带来领先，例如 Speech-IFEval 35B 达 96.5 分、9B 达 95.7 分；音乐理解与语音歌词识别保持有竞争力，例如 MusTBench 35B 为 46.6 分，GigaSpeech 词错率 9B 为 8.5。需要注意语音识别报告的是词错率或字错率，数值越小越好，不能与准确率直接比较大小。

### 图像与纯文本验证：全模态训练是否保住了图文底座

图像与纯文本评测回答的是另一个工程关切：做了这么多音视频联合训练，图文老本行还在不在。图像侧共 28 项基准，覆盖科学推理与谜题、通用问答、文本与文档理解、空间理解、多图理解、计数与多模态指令跟随，包括 MMMU、MathVision、RealWorldQA、DocVQA、RefCOCO、MIHBench、TallyQA 等。文本侧共 12 项基准，覆盖通用知识、指令跟随、长上下文、科学问答与数学推理，包括 MMLU-Pro、C-Eval、IFEval、LongBench v2、GPQA 等。图像与文本统一用思考模式报告 WeMM-Video 结果，对照 Qwen3.5-Omni-Flash 与各自底座。

下表是图像侧的精选对照，保留原表的数值写法，聚焦科学推理两项，便于在有限篇幅内看清与底座的差距。完整 28 项的趋势是 35B 与 9B 全面超过 Qwen3.5-Omni-Flash，并与各自底座基本持平。

| STEM/Puzzle |  |  |  |
| --- | --- | --- | --- |
| MMMU | 76.9 | 78.9 | 81.1 |
| MMMU-Pro | 68.2 | 69.4 | 72.9 |

精选的两行已经能说明问题。MMMU 上 Qwen3.5-Omni-Flash 为 76.9 分，Qwen3.6-35B-A3B 底座为 81.7 分，WeMM-Video-35B 思考为 81.1 分，9B 思考为 78.9 分；MMMU-Pro 上 Flash 为 68.2 分，底座为 75.3 分，35B 思考为 72.9 分，9B 思考为 69.4 分。差距主要来自底座本身的强弱，而不是全模态训练的大幅损耗。论文还报告 DocVQA 35B 与 9B 分别达 97.5 分，CountBench 35B 达 96.3 分，MMIFEval 35B 达 81.4 分，进一步支撑图文能力得以保留的判断。局限是图像裁判与文本裁判的难度差异很大，ZEROBench 这类极难基准绝对分很低，不能用同一尺度去比较不同能力。

下表是纯文本侧的精选对照，同样保留原数值，聚焦知识两项。完整 12 项的趋势是 35B 与 9B 大幅超过 Qwen3.5-Omni-Flash，并与底座持平且在指令跟随上还有提升。

| Knowledge |  |  |  |
| --- | --- | --- | --- |
| MMLU-Pro | 79.9 | 81.6 | 84.7 |
| MMLU-Redux | 90.0 | 90.5 | 93.7 |

这两行知识型基准上，MMLU-Pro 的 Flash 为 79.9 分，Qwen3.6-35B 底座为 85.2 分，WeMM-35B 思考为 84.7 分，9B 思考为 81.6 分；MMLU-Redux 的 Flash 为 90.0 分，底座为 93.3 分，35B 思考为 93.7 分，9B 思考为 90.5 分。指令跟随方面 IFEval 9B 与 35B 均达 93.2 分，超过底座的 91.5 分与 90.9 分，说明后训练中的蒸馏与强化确实补了跟随能力。长上下文 AA-LCR 35B 为 64.0 分，接近底座 60.0 分，9B 为 59.0 分。这些数字成立的条件是同样的思考解码与同样的评测管线，若换成直接回答或不同提示模板，指令类分数会有波动。

### 收束判断：什么时候值得尝试以及复现第一步做什么

把全文证据串起来，WeMM-Video 的适用画像比较清晰。当任务本身就是有声视频，例如直播带货的优惠确认、短剧的多人物因果、访谈与综艺的声画对照、视频配乐兼容性分析，论文的联合数据与时间戳对齐设计是直接相关的，35B 思考模式在论文的 33 项有声基准上表现出开源领先，9B 与 4B 在跨尺度效率上也有支撑，这时值得优先尝试思考模式。当任务是无声视频、纯图像或纯文本，且已经有很强的视觉语言底座，WeMM-Video 的价值在于多加了声音能力而没有明显拖累图文，此时可以把它当作更通用的底座，但不必期待在所有无声基准上都超过原底座，个别长视频与多视频项仍有小幅差距。

复现第一步不是直接跑大评测，而是先把输入管线对齐。按论文核对三处：音频采样率 16000 赫兹、30 秒分块、0.1 秒窗口每秒 10 词元；带声音视频的视觉与音频词元按时间交错并加显式文字时间戳；解码时区分直接回答与思考两种模式，用同一提问分别触发。小尺寸先用 2B 或 4B 验证流程，再放大到 9B 与 35B-A3B。评测时保留原表的裁判说明，例如描述类用哪一个裁判模型、错误率是越小越好、多子项的顺序是什么，否则跨表比较会失真。论文提到已在微信内多项视频服务中部署，并公开模型权重与评测复现管线，链接在文中给出，第三方镜像的可达性只能证明当时可访问，不等同于作者持续维护，使用前仍需自行确认版本与许可。

还需要补的验证集中在三处。第一，思考痕迹的质量与长度控制，论文已用抗重复优化缓解冗长重复解码，但 JointAVBench 这类思考略低于直接回答的例子说明推理增益并不均匀，需要在自己的数据上统计思考长度与幻觉率的关系。第二，长视频、多视频与流式场景的真实延迟与显存开销，论文报告了精度但没有给出系统的延迟与成本曲线，部署前要实测。第三，裁判模型带来的偏差，多个基准依赖大模型打分，换裁判可能改变排序，关键结论最好补人工抽检。总之，这是一份以有声视频为中心、用统一架构兼顾图文声的扎实报告，读完后最该带走的不是某个单项分数，而是在什么数据、什么解码模式、什么裁判下才能复现那种领先。

<details>
<summary>📎 论文与评分元数据</summary>

排名：前50% | 文档类型：模型报告 | [arXiv 原文](https://arxiv.org/abs/2611.26409v1)

</details>

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。

- 评分规则：type-aware-v1

- 评分模型：muse-spark-1.3-contributor

- 评分请求协议：openai_responses

---

[← 返回 2026-11-20 语音/音乐/音频论文速递](/audio-paper-digest-blog/posts/2026-11-20/)
