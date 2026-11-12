---
title: "Machine Hearing: Can Audio LLMs Generalize Beyond Human Auditory Perception?"
date: 2026-11-12
draft: false
tags: [音频分类, 基准设计, 数据集, 音频大模型]
categories: [论文速递]
description: "论文用 6128 个跨域振动信号检验音频大模型能否走出人耳范围，发现零样本几乎失效、只微调也不够，于是用并行的频域加时域小编码器补上极短与极端采样输入的短板。"
hiddenInHomeList: true
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_arxiv_id: "2611.10693"
paper_digest_workbench_contract: "researcher-workbench"
paper_digest_workbench_schema_fingerprint: "1f09b594c317cc38e934de27a5b0e8ceb4baa50ef79bd4f8683dd9adea720fe7"
paper_digest_reader_title: "机器听觉：音频大模型能听懂人耳听不到的信号吗"
paper_digest_original_title: "Machine Hearing: Can Audio LLMs Generalize Beyond Human Auditory Perception?"
paper_digest_arxiv_version: 2
paper_digest_arxiv_versioned_id: "2611.10693v2"
paper_digest_arxiv_abs_url: "https://arxiv.org/abs/2611.10693v2"
paper_digest_arxiv_pdf_url: "https://arxiv.org/pdf/2611.10693v2.pdf"
paper_digest_primary_task: "音频分类"
paper_digest_tags_contract: "paper-tag-flat-tags"
paper_digest_tags_schema_fingerprint: "27e36280a4b8d3df62ebe54d3ab037920f4d69feb2b554163f01bbae2caf4338"
paper_digest_tags_selection_contract: "paper-tag-selection"
paper_digest_tags_registry_version: "paper-tag-catalog"
paper_digest_tags_registry_sha256: "9673bc0122e1905a5dcfd8b223675400cc2fa4c36095bc0e5f817edf99a0ec5c"
paper_digest_tags_concepts: [{"facet":"task","id":"task.audio-classification","label":"音频分类"},{"facet":"method","id":"method.benchmark-design","label":"基准设计"},{"facet":"artifact","id":"artifact.dataset","label":"数据集"},{"facet":"model_family","id":"model_family.audio-language","label":"音频大模型"}]
paper_digest_primary_method: "基准设计"
paper_digest_score: 7.2
paper_digest_rank_bucket: "前50%"
paper_digest_document_type: "数据集与基准"
paper_digest_one_sentence: "论文用 6128 个跨域振动信号检验音频大模型能否走出人耳范围，发现零样本几乎失效、只微调也不够，于是用并行的频域加时域小编码器补上极短与极端采样输入的短板。"
paper_digest_authors: [{"affiliations":["Shanghai Artificial Intelligence Laboratory","Harbin Institute of Technology"],"name":"Liwei Liu"},{"affiliations":["Shanghai Artificial Intelligence Laboratory","University of Science and Technology of China"],"name":"Jun Tao"},{"affiliations":["Shanghai Artificial Intelligence Laboratory","Fudan University"],"name":"Xingyuan Li"},{"affiliations":["Shanghai Artificial Intelligence Laboratory"],"name":"Xuenan Xu"},{"affiliations":["Shanghai Artificial Intelligence Laboratory","Tsinghua University"],"name":"Chen Zhang"},{"affiliations":["Shanghai Artificial Intelligence Laboratory","Shanghai Jiao Tong University"],"name":"Junyi Wang"},{"affiliations":["Shanghai Artificial Intelligence Laboratory","Shanghai Jiao Tong University"],"name":"Boya Zhang"},{"affiliations":["University of Cambridge"],"name":"Xiaoyu Yang"},{"affiliations":["University of Science and Technology of China"],"name":"Zhen-Hua Ling"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Wen Wu"},{"affiliations":["Shanghai Artificial Intelligence Laboratory"],"name":"Chao Zhang"}]
paper_digest_abstract_sha256: "3a5a6f4d592d136fc2e180ab86b062c170b1514c7d38c12844a1c0e8784c0dee"
paper_digest_sidecars: {"citation.bib":{"sha256":"cabd1c444f799784b54ad20c3f1082c0a28c5dcce015b88815e5ff91e5551223","url":"/audio-paper-digest-blog/client/papers/2026-11-12/2611-10693/citation.bib"},"citation.json":{"sha256":"46ef4b36e87ae3e2601d7460d1e1b73e14c7970ac8c35138d7d7d5f93746af8c","url":"/audio-paper-digest-blog/client/papers/2026-11-12/2611-10693/citation.json"},"citation.ris":{"sha256":"d1e40691b760938acaf30b6b3f03771480a40ea8d897defef4eee85c767c2e68","url":"/audio-paper-digest-blog/client/papers/2026-11-12/2611-10693/citation.ris"},"rethink-context.json":{"contract":"paper-research-context","schemaFingerprint":"5d4e79f7d3ee65b39ccb38281548bf20a1b2041ab7a27625eaf97ab9909a8383","sha256":"22de64b2ef864eebe845dac87694ccddf942e77a0db3e5a2e08e2e54893aa40c","url":"/audio-paper-digest-blog/client/papers/2026-11-12/2611-10693/rethink-context.json"}}
paper_digest_api_reader_contract: "beginner-researcher"
paper_digest_api_reader_schema_fingerprint: "cd8baf5b8bda3a49eec64f6005931af63de4e9a13148cba5f354c661ca6e9df2"
paper_digest_api_reader_article_sha256: "f2dcfc74918ba8d3c3ddec0e7617579b61c895a6493f59da98dcf0a402ded37b"
paper_digest_api_reader_plan_sha256: "7144109d68f4ddec1701a8947bec9c5d29fa241597a7c8679410524cbf7927b1"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings"
paper_digest_api_reader_source_binding_schema_fingerprint: "d2a2607a6e561909473022eb43f56332ee357af8568566a095c29083ffdec9cc"
paper_digest_api_reader_source_bindings_sha256: "277b4068773740343efb303309b9d03bff042c1ece1d302e674a7388e1b6f24d"
paper_digest_api_reader_source_table_count: 4
paper_digest_api_reader_source_formula_count: 2
paper_digest_api_reader_structured_artifacts_sha256: "db8f130d7164c80c7ff4ada74c215b4cb54dc8b29965a4ebc39e5b639f1d345e"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity"
paper_digest_api_reader_author_identity_schema_fingerprint: "1e3fd3a9a56c9a5bf52df8df5022690b9a3fa92e83e934f295af87c0e258ed2f"
paper_digest_api_reader_author_identity_sha256: "cb2f967a1b833e1c821e6a507c799ec41b1a275aff95e6f76afc8ed4f3b42260"
paper_digest_api_reader_author_count: 11
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity"
paper_digest_api_reader_resource_identity_schema_fingerprint: "33b0be17118be61f39b85ce690c8da17e91f2864bb65e85284f60c40067328e0"
paper_digest_api_reader_resource_identity_sha256: "fadc3fa07cc6ec81a10b8f1ff52ec7df0bd9956664dc89f51c6d33ae8345ab86"
paper_digest_api_reader_resource_count: 12
paper_digest_api_reader_figure_persistence: "ephemeral-no-persisted-figure-assets-v1"
paper_digest_api_reader_decision_projection: "api-reader-decision-projection"
paper_digest_api_reader_decision_projection_schema_fingerprint: "e56feb5ab75c8710904916b898f73dab9bb18bdf65bb60b7ed2edf7f99cea860"
---

# 📄 机器听觉：音频大模型能听懂人耳听不到的信号吗

> 英文题目：*[Machine Hearing: Can Audio LLMs Generalize Beyond Human Auditory Perception?](https://arxiv.org/abs/2611.10693v2)*

<!--paper-tag-hierarchy-v1:start-->

**研究分类**

- **研究任务**：[音频分类](/audio-paper-digest-blog/papers/?concept=task.audio-classification)
- **研究方法**：[评测协议](/audio-paper-digest-blog/papers/?concept=method.evaluation-protocol) → [基准设计](/audio-paper-digest-blog/papers/?concept=method.benchmark-design)
- **研究产物**：[数据集](/audio-paper-digest-blog/papers/?concept=artifact.dataset)
- **模型家族**：[音频大模型](/audio-paper-digest-blog/papers/?concept=model_family.audio-language)

<!--paper-tag-hierarchy-v1:end-->

> 评分：**7.2/10** | 创新 1.2/2 | 技术严谨 1/1.5 | 实验充分 1.1/1.5 | 清晰度 0.8/1 | 影响力 0.8/1.5 | 开源 1/1.5 | 可复现 0.3/0.5 | 工程/实践 1/1.5


## 👥 作者与机构

- Liwei Liu：Shanghai Artificial Intelligence Laboratory；Harbin Institute of Technology
- Jun Tao：Shanghai Artificial Intelligence Laboratory；University of Science and Technology of China
- Xingyuan Li：Shanghai Artificial Intelligence Laboratory；Fudan University
- Xuenan Xu：Shanghai Artificial Intelligence Laboratory
- Chen Zhang：Shanghai Artificial Intelligence Laboratory；Tsinghua University
- Junyi Wang：Shanghai Artificial Intelligence Laboratory；Shanghai Jiao Tong University
- Boya Zhang：Shanghai Artificial Intelligence Laboratory；Shanghai Jiao Tong University
- Xiaoyu Yang：University of Cambridge
- Zhen-Hua Ling：University of Science and Technology of China
- Wen Wu：机构信息未能在本次解析中与作者逐人可靠绑定
- Chao Zhang：Shanghai Artificial Intelligence Laboratory

## 📌 核心摘要

本文研究音频大模型能否理解人耳听不到的物理信号，输入是采样率从约十万分之一赫兹到数兆赫兹、长度从几十到上百万采样点、包含单通道与双通道的传感器波形，输出是在每个任务预先给定的类别集合中生成文字类别标签。难点在于现有音频前端按语音音乐设计，对超低采样光变曲线、兆赫兹射频和极短片段经常无法识别输入或违反格式。作者建成包含七个领域十三项分类任务的机器听觉基准，用统一文字指令评测七个开源与闭源音频大模型和五个领域基础模型，再以问答式分类比较零样本、有监督适配与扩展编码器的效果。所提MachEar先用快速傅里叶变换分支提取频谱特征并用一维卷积分支提取时间特征，再把两路特征对齐到固定数量的紧凑token。最后把该紧凑token与原有语音编码器输出及文字指令拼接后送入大语言模型，同一结构用于全部任务而不再按领域修改。在Qwen2.5-Omni-7B上联合微调原编码器与MachEar后，加权平均Macro-F1从67.02%提高到72.30%，提升主要来自原来失败集中的短序列与极端采样率任务。结论适用于该基准的十三项分类任务与所用适配数据量，超长工业振动截断到240000点、多通道展平与部分频段重采样等处理可能影响推广，原文未披露训练、推理或部署成本。

## 🔗 开源与复现资源

- 数据相关资源：<https://huggingface.co/datasets/OpenTSLab/MachineHearing> — 链接可访问（HTTP 200）

- 第三方资源：<https://huggingface.co/Qwen/Qwen2.5-Omni-3B> — 链接可访问（HTTP 200）

- 第三方资源：<https://huggingface.co/Qwen/Qwen2.5-Omni-7B> — 链接可访问（HTTP 200）

- 第三方资源：<https://github.com/NVIDIA/audio-flamingo> — 链接可访问（HTTP 200）

- 第三方资源：<https://huggingface.co/nvidia/audio-flamingo-3> — 链接可访问（HTTP 200）

- 第三方资源：<https://ai.google.dev/gemini-api/docs/models/gemini-3-flash-preview> → <https://aistudio.google.com/docs/models/gemini-3-flash-preview> — 链接可访问（HTTP 200）

- 第三方资源：<https://developers.openai.com/api/docs/models/gpt-audio-mini> — 链接可访问（HTTP 200）

- 第三方资源：<https://www.volcengine.com/product/doubao/> — 链接可访问（HTTP 200）

- 第三方资源：<https://www.volcengine.com/docs/82379/1795150> → <https://docs.volcengine.com/docs/ark/seedream-3-0-prompt-guide?lang=zh> — 链接可访问（HTTP 200）

- 第三方资源：<https://huggingface.co/Maple728/TimeMoE-200M> — 链接可访问（HTTP 200）

- 第三方资源：<https://github.com/ChunyuLiu188/SpectrumFM> — 链接可访问（HTTP 200）

- 第三方资源：<https://github.com/liutianlin0121/seisLM> — 链接可访问（HTTP 200）

可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 为什么要走出人耳能听到的范围

这篇论文要回答的是音频大模型能否理解人听不到的信号。输入不再是麦克风录的语音音乐，而是地震仪、心音探头、水听器、加速度计、射频接收机、引力波应变通道、巡天亮度采样等记录的波形、振动和振荡。目标都是分类：引力波有无、心音属于哪种瓣膜病、雷达脉冲是哪种编码、船舶是哪一类、轴承是哪种故障等等。必须保留的是原始物理节律和标签语义，输出是固定标签集里的文本答案。

人耳只覆盖很窄的一段常规频带，而物理世界从极慢的光变到高频射频都有结构化节律。如果模型只在人耳区间有效，很多科学和工业信号就进不来。下面这张概念图先帮你建立频率版图，再谈基准如何构造。

**机器听觉 × 人类可听音频：** 人类可听音频指语音音乐环境声所在的常规频段，是现有音频编码器预训练的主区间；机器听觉指地震、心音、射频雷达、引力波、光变曲线等更宽的波、振动与振荡，采样率和序列长都拉开多个数量级，二者搭配说明本文要把评测和建模从窄区间扩展到全频段异构区间。

读图说明：请把这张图当作全文的频率地图来读，重点看人耳区间有多窄，以及 7 类机器信号分别落在左侧慢振动还是右侧超声射频，这直接决定后文前端为何吃力。

> **看图路径：** 1. 先看横轴对数频率刻度从左到右的变化；2. 再看绿色人耳区间只占中间一小段；3. 对照上方七类图标落在次声与超声两侧的位置

[![原论文 Figure 1：Conceptual illustration of waves, vibrations, and oscillations across characteristic frequency…](https://arxiv.org/html/2611.10693v2/Frequency-Coverage.png)](https://arxiv.org/html/2611.10693v2/Frequency-Coverage.png)

*论文图 1。原论文 Figure 1:：“Conceptual illustration of waves, vibrations, and oscillations across characteristic frequency scales.”。*

这张图确实可见一条对数频率轴，左端极低、右端极高，中间绿色块标出人耳听觉范围，左侧蓝色块是低于人耳下限的次声慢振动，右侧橙色块是高于人耳上限的超声与高频信号。光变曲线、地震波、工业振动落在左侧，心音水声动物叫声靠近或跨过人耳区，射频落在最右。它帮助理解后文采样率跨越多个数量级为何对同一音频前端是巨大压力，也解释了为何需要同时处理极慢周期和极快振荡。

### 已有音频评测和音频大模型卡在哪里

已有音频基准主要评语音、音乐、环境声上的识别、字幕、情感等任务，输入基本是人耳可听的常规音频。已有音频大模型把为人耳音频训练的编码器接上大语言模型，在常规任务上很强。这类编码器在预训练时见到的都是相对规整的采样率和时长，接口也按语音时长来设下限。

本文的不同在于输入、目标和运行阶段都变了：输入是采样率和长度极端异构的科学工程波形，目标是保留原领域的分类语义，运行阶段要求模型直接读原始波形加指令生成标签。因此不能把常规音频上的高分直接迁移过来比较，本文用同一划分和同一零样本协议重新测量，才能看出前端在新区间是否还成立。这种对照也避免了把数据没见过和结构处理不了混为一谈。

### 论文把困难拆成哪两层

第一层是能不能处理：采样率太低或太高、序列太短、多通道信号、时长低于接口下限时，模型可能直接报错、返回空、说没收到信号，或输出不在标签集里的词。第二层是处理了准不准：即使格式合法，预测也可能接近瞎猜。两层要分开看，否则会把接口拒绝误当成模型判断错误，或者把格式碰巧对了误当成真正听懂。

论文先用成功率把第一层挑出来，再用分类指标把无效回答按错算，统一看第二层。这样即使某模型成功率高，只要标签不对，分数依然低，避免只看格式合规就以为听懂了。同时失败类型的拆分还能定位是前端长度约束、还是指令跟随、还是标签对齐出了问题，为后文加结构扩展提供依据。

### MachEar 总体上做了什么

思路不是扔掉原有音频前端，而是并联一个轻量扩展。同一个输入波形同时走两路：一路是冻结或微调的预训练音频编码器，另一路是新加的 MachEar。两路各产生一组 token，再加上用户文本指令的 token，3 组拼接后一起送进大语言模型预测标签文本。

这样原有人耳能力保留在原通路，新区间的频域周期和短时波形细节由 MachEar 补上。训练时大模型用高效微调方法调整，编码器按配置冻结或放开。这种并联的好处是互补而不是覆盖，原通路继续负责它擅长的常规音频，新通路专门去看它不擅长的极端区间。

读图说明：请沿左侧波形到右侧预测标签的箭头看主路径，特别注意 MachEar 与原编码器在哪里分叉、又在哪里拼回一起，以及文本指令从哪里汇入。

> **看图路径：** 1. 先沿左侧波形到中间两路编码器的箭头看并行路径；2. 再看 MachEar 内部切块加频谱与卷积汇合处；3. 最后看三类 token 拼接后进入大模型的顺序

[![原论文 Figure 3：Overview of MachEar integrated with a pretrained audio pathway.](https://arxiv.org/html/2611.10693v2/LWNet.png)](https://arxiv.org/html/2611.10693v2/LWNet.png)

*论文图 3。原论文 Figure 3:：“Overview of MachEar integrated with a pretrained audio pathway.”。*

这张结构图确实可见左侧波形同时指向 MachEar 盒子和预训练音频编码器盒子，MachEar 内部又分出切块加频谱一路和 1 维卷积一路，汇合进 Transformer 模块再经投影得到 MachEar tokens，下方还有文本指令经分词得到文本提示 tokens，3 组 token 并排箭头向下进入带高效微调的大语言模型，最下输出预测标签文本。它直观解释了并行互补而不是替换的设计，也说明了文本任务指令与两种听觉证据是同时被大模型看到的。

### MachEar 两条支路各看什么

MachEar 内部有两条并行支路。频谱支路把长信号切成多个不重叠小块，每块做频谱表示，擅长抓住周期、调制、共振这类频域结构；1 维卷积支路直接在原始波形上做扩张卷积，看局部脉冲形状和时域演变，再自适应池化到同样的位置。对过短的输入则用全局表示并屏蔽无效尾部。两路特征在特征维拼接，经输入投影、多层 Transformer 和输出投影，压成固定数量的 MachEar token。

同一套结构和切分用于全部任务，不做分域特制。参数上原文给出了固定的 token 数、层数、隐维、头数和两路特征维度，以及卷积层数。这种统一设计是为了检验一个轻量扩展能否同时覆盖多个域，而不是为每个域单独调结构。

**Whisper 编码器 × MachEar：** Whisper 编码器是 Qwen2.5-Omni 原有的人耳音频前端，擅长常规采样附近较长语音音乐；MachEar 是轻量并行扩展，用 FFT 看频谱结构、用一维卷积看局部时域波形，再压成紧凑 token，二者并行处理同一输入后拼接进大模型，搭配后原能力保留、新区间被补上。

下面两条公式先说清要算什么：第一条是两路特征如何融合成 MachEar token，第二条是 3 组 token 如何拼成大模型输入。

\[\mathbf{H}_{\mathrm{M}}=\mathrm{Proj}_{\mathrm{out}}\left(\mathrm{Transformer}\left(\mathrm{Proj}_{\mathrm{in}}\left[\mathbf{F}_{\mathrm{FFT}};\mathbf{F}_{\mathrm{CNN}}\right]\right)\right).\]

第一条里输入信号经两条支路得到频域表示与时域表示，方括号是特征拼接，输入投影是压缩到共享隐空间，Transformer 做跨块交互，输出投影再映射为最终 MachEar 表示。运算顺序是先各自抽特征、再拼接、再联合建模，而不是先混合原始波形，这样能保留各自的归纳偏置。

\[\mathbf{H}_{\mathrm{input}}=\mathrm{Concat}_{\mathrm{seq}}\left(\mathbf{H}_{\mathrm{M}},\mathbf{H}_{\mathrm{W}},\mathbf{H}_{\mathrm{T}}\right).\]

第二条里 3 组符号分别对应 MachEar token、原音频 token 和文本指令 token，拼接是沿序列维拼接，得到完整输入送进大模型。关键是 3 段保留各自位置连续性，大模型同时看到互补听觉证据和任务指令，再生成标签词。这种拼接方式让模型在解码时既能参考原前端的常规听觉线索，也能参考新扩展的极端区间线索。

### 数据怎样预处理以及哪些权重会动

多通道输入先展平成 1 维序列再编码，所有输入截断到固定上限。进入原音频通路时，采样率落在常规区间内的信号重采样到贴近预训练条件的值，区间之外的保留原采样率以免序列长度剧变；MachEar 则直接吃截断后原始波形不重采样，从而覆盖全采样率范围。这种差异化处理是为了让原前端尽量待在它熟悉的条件下，同时让新扩展去看真实的原始节律。

4 种主要配置都用高效方法调大语言模型：冻结原编码器只调大模型、放开原编码器与大模型一起调、用 MachEar 替换原编码器、同时放开两个编码器并联合微调。消融里还有冻结原编码器只练 MachEar 侧的变体，用来单独看新增模块的贡献。这样的阶梯对照能逐步分离大模型适应、原前端适应和新增结构各自的作用。

**DoRA 微调 × Whisper_frz：** DoRA 微调指只高效调整大语言模型部分权重的方法，本文四种配置都用它来学机器听觉数据；Whisper_frz 指冻结 Whisper 音频编码器只调 LLM 的对照组，与放开 Whisper 一起微调的 Whisper 组对比，二者搭配能分离出瓶颈在数据还是在前端结构。

在执行顺序上，同一输入信号并行走两条编码通路：预训练编码器产生音频表征，MachEar 产生互补的机器听觉表征，再与文本提示的嵌入拼接后一起送入大语言模型做预测。MachEar 内部先分两条并行支路抽特征，一条做基于快速傅里叶变换的频谱建模，一条做空洞 1 维卷积的时间建模，两路特征对齐到相同的 token 位置后沿特征维拼接，经输入投影送入共享隐空间，再过 Transformer 块与输出投影得到紧凑的 MachEar token。全文所有机器听觉任务共用同一套结构与分词方式，不做面向领域的特化修改。

具体对齐规则是：当信号长度不短于 token 数时，按固定数量切成互不重叠的块，逐块算频谱表示；1 维卷积直接在完整波形上运算，再把时域特征自适应池化到同样的位置；短于 token 数的输入则用全局表示并对无效尾部位置加掩码。频谱支路更持续地覆盖宽采样率范围的整体退化，卷积支路在短序列区间贡献更突出，二者拼接后互补，共同把低频与高频、极短序列的有效覆盖补到原音频前端之外。

### MHB 包含哪些任务与输入跨度

MHB 覆盖天文、地球科学、医疗、电磁、水声、生物声学、制造 7 个域。天文有引力波检测和变星分类；地球科学有震源深度分类和火山事件分类；医疗有心音模式和听诊位置；电磁有雷达波形和调制分类。

水声有两组舰船分类；生物声学有狨猴叫声；制造有振动轴承和电流轴承。每个样本都是波形加文本提示，模型要在给定标签集里选词输出，标签词必须与预定义完全一致。

**Machine Hearing Benchmark × Audio LLM：** Machine Hearing Benchmark 即 MHB 是 13 个分类任务的统一评测集，每个样本是传感器波形加文本指令加固定标签集；Audio LLM 即音频大语言模型负责读波形加读指令并生成标签文本，二者搭配把地震判深、雷达波形分类、心音定位等原来各自分散的科学工程任务装进同一个生成式评测流程。

读图说明：请把这张环图当作任务清单来读，重点对比各域样本数、序列长与采样率的数量级差异，以及极短与超长两端分别对应哪些任务。

> **看图路径：** 1. 先看中心圆环的实例总数与域任务总数；2. 再看右侧每域的样本数序列长与采样率范围；3. 比较电磁域极短序列与水声制造域超长序列的跨度

[![原论文 Figure 2：Overview of the Machine Hearing Benchmark (MHB), comprising 6,128 instances across 13 tasks and…](https://arxiv.org/html/2611.10693v2/MHB.png)](https://arxiv.org/html/2611.10693v2/MHB.png)

*论文图 2。原论文 Figure 2:：“Overview of the Machine Hearing Benchmark (MHB), comprising 6,128 instances across 13 tasks and seven domains.”。*

这张图确实可见中心写着实例总数与域任务总数，外环按颜色分成 7 个域，扇形大小对应任务占比，右侧逐域列出样本数、序列长与采样率，例如天文跨极低采样到常规音频，电磁只有几十点长度、高采样可达兆赫兹，水声可到上百万点，制造可到几十万点。它说明异构性不是个别异常，而是基准的常态，也为后文按长度与采样率分组提供了直观依据。

下表把基准的总体条件固定下来，后文所有零样本与微调结论都只在该范围内成立，换了划分或采样策略就不能直接比较。

| 条件 | 规模 | 组成 |
| --- | --- | --- |
| MHB 总体 | 6,128 instances | 13 tasks from seven domains |

上表只是把基准的异构输入范围摆出来，说明后文的难不是某个任务偶然变难，而是采样率和长度同时拉开多个数量级。通道数和截断规则也提示复现时不能只按常规单通道来准备数据，多通道与极短序列需要按原文展平与掩码规则处理。

**Macro-F1 × Success Rate：** Macro-F1 是按类别先算 F1 再平均的分类指标，对类别不平衡更公平，数值越高越好，无效回答按错算；Success Rate 即成功率是输出落在预定标签集且格式合法的比例，只看是否合规不看对错，二者搭配才能区分是答错还是根本没能处理输入。

### 对比了哪些模型与怎么打分

音频大模型侧评开源与闭源共 7 个模型，全部零样本统一提示。另评 5 个领域基础模型做参照：通用时序、频谱、地震、工业、语音音频，冻结表示加训练集做近邻分类。这种安排不是为了排一个总冠军，而是看生成式音频大模型与检索式领域表示在同一组异构任务上的不同表现。

指标用分类指标看好坏，用成功率看输出是否落在标签集且格式合法。主结果把无效回答按错算，成功率只按合规比例算，不按任务平均。常规音频能力另用语音识别字错率和音频字幕分看是否退化，字错率越低越好，字幕分越高越好。这样的多指标组合能区分是根本没处理输入，还是处理了但判错，以及扩展后是否伤及原能力。

### 零样本时音频大模型表现如何

结论很直接：取每个任务上最好的音频大模型，仍有多个任务低于随机猜测。低分集中在超低采样与兆赫兹级短序列任务，而这些也正是成功率分析里频繁处理失败的任务。即使输出合法，预测依然信息量很弱，且没有一个模型在所有域都占优。相对强弱随域变化，因此不能说某个大模型已具备通用机器听觉。

失败分 4 类：未识别输入、短输入、空回答、标签格式错。开源模型的短输入失败占比高，闭源模型中有的多为把信号当缺失而索要数据，有的标签写法不对，有的成功率最低且未识别与短输入约各半。任务级成功率进一步显示，常规音频附近的任务大多接近全对，偏离越远失败越集中。

下段给出零样本主结果原表，固定零样本的核心比较问题与计分口径，数字方向是分类指标越高越好，无效回答按错处理。

| Access | Model | Astronomy | Astronomy | Earth Science | Earth Science | Healthcare | Healthcare | Healthcare |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Access | Model | GWOSC | LEAVES | Iquique | Llaima | Yaseen | CirCor-loc | CirCor-loc |
| – | Random Guess | 49.95 | 8.94 | 40.66 | 22.64 | 19.79 | 24.92 | 24.92 |
| Open-source | Qwen2.5-Omni-3B | 34.36 | 1.87 | 18.56 | 5.91 | 7.87 | 22.30 | 22.30 |
| Open-source | Qwen2.5-Omni-7B | 38.11 | 0.00 | 24.78 | 3.75 | 12.06 | 18.65 | 18.65 |
| Open-source | Audio-Flamingo-3-7B | 49.83 | 0.22 | 34.77 | 3.75 | 7.74 | 17.83 | 17.83 |
| Proprietary | Gemini-3-Flash | 35.62 | 0.00 | 31.88 | 23.16 | 16.05 | 15.68 | 15.68 |
| Proprietary | GPT-Audio-Mini | 2.75 | 0.00 | 15.64 | 9.14 | 16.96 | 18.57 | 18.57 |
| Proprietary | Doubao-2.0-Mini | 32.73 | 0.00 | 31.02 | 14.89 | 7.74 | 11.91 | 11.91 |
| Proprietary | Doubao-2.0-Lite | 33.10 | 0.00 | 31.36 | 16.47 | 7.74 | 21.53 | 21.53 |
| Access | Model | Electromagnetic | Electromagnetic | Underwater Acoustics | Underwater Acoustics | Bioacoustics | Manufacturing | Manufacturing |
| Access | Model | RadSeg | RadioML | ShipsEar | DeepShip | Marm Audio | SDUST- bear | PU- cur |
| – | Random Guess | 19.96 | 9.05 | 6.46 | 24.88 | 16.60 | 9.94 | 32.54 |
| Open-source | Qwen2.5-Omni-3B | 6.87 | 0.00 | 0.54 | 8.69 | 5.35 | 1.76 | 18.18 |
| Open-source | Qwen2.5-Omni-7B | 8.25 | 0.00 | 1.11 | 8.76 | 9.70 | 3.44 | 20.81 |
| Open-source | Audio-Flamingo-3-7B | 6.64 | 1.52 | 0.83 | 0.00 | 6.09 | 4.84 | 23.16 |
| Proprietary | Gemini-3-Flash | 10.60 | 6.11 | 8.92 | 16.26 | 13.77 | 11.46 | 27.51 |
| Proprietary | GPT-Audio-Mini | 0.00 | 0.00 | 5.57 | 5.76 | 0.00 | 4.50 | 14.75 |
| Proprietary | Doubao-2.0-Mini | 0.00 | 0.00 | 15.98 | 12.82 | 17.85 | 3.64 | 14.15 |
| Proprietary | Doubao-2.0-Lite | 0.00 | 0.00 | 8.91 | 16.80 | 19.51 | 2.21 | 11.26 |

该表为原论文零样本 Macro-F1 结果，计分口径是 Macro-F1 is computed over all MHB instances, with invalid responses treated as incorrect predictions，关键发现是 Even when taking the best ALLM result for each task, performance remains below random guessing on 9 of the 13 tasks。该表说明困难不只是答错，还包括根本进不了模型。极端采样率加极短序列超出了现有音频前端和接口假设，只有把成功率与分类分数一起看，才能完整理解零样本失效的程度。

### 领域基础模型能直接迁移吗

冻结表示加近邻分类的结果显示，对齐时领域预训练很强，不对齐时则不稳。工业模型在两个制造任务最好，地震模型在一组地震任务领先但在另一组不领先，频谱模型在两个电磁任务都不是第一。反过来，语音音频模型在很多人耳外任务仍有竞争力，通用时序模型在部分极端任务领先。

这说明单靠名义上对口的领域预训练不能保证跨异构任务稳定迁移，显式频域或卷积时序归纳偏置在困难任务上更有帮助，这也是新扩展选择频谱加 1 维卷积的线索。同时这种参照依赖训练集做检索库，与生成式零样本不是同条件，不能直接排胜负，只能用来理解哪些归纳偏置更适合哪些输入区间。

### 只加机器听觉数据微调够吗

以同一底座用机器听觉数据做高效微调后，零样本下几乎不可用的任务开始有可用预测，放开原编码器一起调比冻结原编码器在多数任务更好，说明预训练前端本身也要适应。但远离常规音频采样率和长度的任务在微调后依然困难，超低采样光变与高频短信号的提升有限。

论文据此判断瓶颈不只是数据域不匹配，还有常规音频前端的结构约束，因此需要结构扩展而不是继续加数据。这个判断的关键在于对照条件一致：同样的数据、同样的微调预算下，换前端结构才能进一步改善最难的区间。

下段给出领域基础模型对照原表，用于说明专用预训练迁移并不一致，聚合比较需要保留原文基线与可运行策略。

| Model | Astronomy | Astronomy | Earth Science | Earth Science | Healthcare | Healthcare | Healthcare |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Model | GWOSC | LEAVES | Iquique | Llaima | Yaseen | CirCor-loc | CirCor-loc |
| Time-MoE | 59.18 | 67.07 | 46.82 | 94.11 | 93.09 | 27.87 | 27.87 |
| SpectrumFM | 52.86 | 61.70 | 48.85 | 79.48 | 76.05 | 26.52 | 26.52 |
| SeisLM | 48.75 | 58.42 | 60.42 | 93.33 | 93.08 | 29.12 | 29.12 |
| FISHER | 68.75 | 0.00 | 0.00 | 0.00 | 94.20 | 38.57 | 38.57 |
| SPEAR | 78.91 | 44.82 | 52.28 | 95.51 | 93.88 | 51.07 | 51.07 |
| Model | Electromagnetic | Electromagnetic | Underwater Acoustics | Underwater Acoustics | Bioacoustics | Manufacturing | Manufacturing |
| Model | RadSeg | RadioML | ShipsEar | DeepShip | Marm Audio | SDUST- bear | PU- cur |
| Time-MoE | 88.12 | 2.82 | 7.62 | 20.96 | 15.61 | 22.80 | 36.08 |
| SpectrumFM | 82.92 | 44.19 | 13.68 | 32.10 | 22.45 | 32.26 | 21.51 |
| SeisLM | 87.22 | 45.33 | 20.08 | 49.98 | 29.11 | 55.09 | 33.42 |
| FISHER | 0.00 | 0.00 | 23.17 | 48.69 | 92.57 | 73.93 | 53.69 |
| SPEAR | 67.42 | 31.02 | 25.96 | 58.69 | 77.55 | 60.57 | 53.34 |

该表为原论文领域基础模型 Macro-F1 对照，冻结表示做 5 近邻分类。从基线到新扩展是多个百分点的提升，不是相对百分比，原文是 augmenting Qwen2.5-Omni-7B with MachEar yields more consistent gains across tasks, raising the overall weighted Macro-F1 from 67.02% to 72.30%。限制是这仍是域内适应的结果，不能外推到未见采样率或新传感器，截断上限与重采样规则改变后数值也会变化。

### 增益集中在哪些输入区间与哪个部件

按任务统计各音频大模型的成功率，比较零样本下谁能稳定输出合法标签，成功率越高越好，失败则计为无效响应。下段给出任务级成功率原表，用于固定任务划分与输出格式要求，比较各模型在常规与极端采样、短序列任务上的有效响应差异。

| Access | Model | Astronomy | Astronomy | Earth Science | Earth Science | Healthcare | Healthcare | Healthcare |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Access | Model | GWOSC | LEAVES | Iquique | Llaima | Yaseen | CirCor-loc | CirCor-loc |
| Open-source | Qwen2.5-Omni-3B | 100.00 | 7.13 | 100.00 | 100.00 | 100.00 | 80.92 | 80.92 |
| Open-source | Qwen2.5-Omni-7B | 100.00 | 7.13 | 73.71 | 100.00 | 91.50 | 83.79 | 83.79 |
| Open-source | Audio-Flamingo-3-7B | 100.00 | 100.00 | 100.00 | 100.00 | 100.00 | 100.00 | 100.00 |
| Proprietary | Gemini-3-Flash | 100.00 | 5.47 | 100.00 | 96.37 | 100.00 | 100.00 | 100.00 |
| Proprietary | GPT-Audio-Mini | 4.88 | 0.00 | 40.24 | 33.52 | 100.00 | 90.82 | 90.82 |
| Proprietary | Doubao-2.0-Mini | 99.80 | 0.39 | 100.00 | 100.00 | 100.00 | 95.98 | 95.98 |
| Proprietary | Doubao-2.0-Lite | 100.00 | 0.39 | 98.80 | 100.00 | 100.00 | 99.86 | 99.86 |
| Access | Model | Electromagnetic | Electromagnetic | Underwater Acoustics | Underwater Acoustics | Bioacoustics | Manufacturing | Manufacturing |
| Access | Model | RadSeg | RadioML | ShipsEar | DeepShip | Marm Audio | SDUST- bear | PU- cur |
| Open-source | Qwen2.5-Omni-3B | 52.70 | 0.00 | 100.00 | 100.00 | 99.67 | 100.00 | 100.00 |
| Open-source | Qwen2.5-Omni-7B | 52.07 | 0.00 | 100.00 | 100.00 | 99.33 | 100.00 | 100.00 |
| Open-source | Audio-Flamingo-3-7B | 100.00 | 100.00 | 100.00 | 0.00 | 100.00 | 100.00 | 100.00 |
| Proprietary | Gemini-3-Flash | 86.93 | 80.00 | 100.00 | 100.00 | 94.33 | 100.00 | 100.00 |
| Proprietary | GPT-Audio-Mini | 0.00 | 0.00 | 86.90 | 15.75 | 1.67 | 75.70 | 41.88 |
| Proprietary | Doubao-2.0-Mini | 0.00 | 0.00 | 100.00 | 99.81 | 100.00 | 100.00 | 100.00 |
| Proprietary | Doubao-2.0-Lite | 0.00 | 0.00 | 100.00 | 100.00 | 100.00 | 100.00 | 100.00 |

该表为原论文任务级成功率统计原表，覆盖 13 个任务与 7 个模型的有效响应比例。总体上常规音频区间任务多接近完全有效，而超低采样与高频短序列等极端任务出现明显低成功率，说明输入可处理性本身即是挑战；不同模型失效模式不同，需结合成功率与 Macro-F1 共同解读，不能仅以成功率高低判定任务能力。

### 哪些结论有边界与失败仍在

第一，零样本失效包括接口与前端两类原因，部分模型的时长下限报错、大量未识别都说明部分失败来自产品化封装，不全是模型听不懂。把接口拒绝与模型误判分开，才能准确估计真正的听觉能力缺口。

第二，微调后部分极端任务仍难，说明对超低采样长周期光变与高频短信号的建模仍不充分。第三，长序列被截断到固定上限，复现时若改截断或重采样策略，结果会动，因此截断点本身也是实验条件的一部分。

第四，常规音频保留实验只测了语音识别和音频字幕，加入少部分常规音频数据后可恢复甚至略超原模型，但这不等于所有语音音乐任务都不退化。第五，领域基础模型的近邻参照依赖训练集做检索库，与生成式零样本不是同条件，不能直接排胜负，只能作为归纳偏置的参考。

### 要复现第一步做什么与资源在哪

先按附录任务表准备数据源与切分，特别是水声任务要用论文指定的文件级与记录级划分，否则训练检索库会泄漏。统一把每样本写成波形加指令加标签集的格式，标签词必须与原文完全一致，大小写与单复数都不能改。提示词结构也要统一，否则成功率的比较就不再公平。

基座用同一代开源底座，其音频编码器初始化自高性能语音编码器。实现新扩展时固定 token 数、层数、隐维、头数、两路特征维和卷积层数，长信号分块做频谱、卷积侧池化到相同位置、短输入用全局表示加掩码。预处理按常规区间才重采样进原通路、新扩展吃原始截断波形的规则来，多通道先展平。

作者数据集在公开托管平台当前可用，其余模型与代码链接在原文中多为第三方或官方检查点，复现前需逐个确认可达与版本。来源未确认不是论文技术缺陷，但要在复现记录里写清用了哪个提交，以便他人对齐采样率、切分与标签映射。

### 什么时候值得试新扩展与还缺什么验证

当你的信号采样率明显偏离常规语音条件、序列很短、或频谱周期比波形包络更重要时，值得试这种频谱加卷积的并行小编码器；当输入已是常规采样长语音时，预期增益小，直接微调原前端可能就够。选择时先看输入区间的长度与采样率落在 4 组中的哪一组，再决定是否需要并联扩展。

还缺的验证包括更长上下文下的截断敏感性、真实部署的延迟与显存代价、多通道相位信息的显式利用，以及超出基准采样率与传感器的外推测试。本文没有报告误判率、延迟与成本的改善承诺，也没有给出每组的逐任务最优超参搜索细节，因此加权平均的提升应理解为本文划分与预算下的结果，而不是部署保证。后续若补上这些测量，才能更完整地判断该扩展在实际科学仪器与工业监测中的可用性。

<details>
<summary>📎 论文与评分元数据</summary>

排名：前50% | 文档类型：数据集与基准 | [arXiv 原文](https://arxiv.org/abs/2611.10693v2)

</details>

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。

- 评分规则：type-aware-v1

- 评分模型：muse-spark-1.3-contributor

- 评分请求协议：openai_responses

---

[← 返回 2026-11-12 语音/音乐/音频论文速递](/audio-paper-digest-blog/posts/2026-11-12/)
