---
title: "Any Channel Count, One Token Stream: Incorporating Spatial Audio Understanding and Reasoning into Large Audio-Language Models"
date: 2026-11-16
draft: false
tags: [音频问答, 多模态学习, 声源定位, 强化学习, 基准测试]
categories: [论文速递]
description: "针对多通道空间线索被单通道压缩丢掉的问题，SpheraAudio 用内容与空间双编码器加时间配对交织与 SMRoPE 把单声道、双声道和 Ambisonics 统一为一条令牌流，再经几何预训练、带空间思维链的微调和结果奖励强化学习实现定位与推理，在 SpheraQA 上达到 60.18% 整体准确率，代价是每秒音频的令牌量翻倍且部分运动方向判断仍弱于基线。"
hiddenInHomeList: true
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_arxiv_id: "2611.18112"
paper_digest_workbench_contract: "researcher-workbench"
paper_digest_workbench_schema_fingerprint: "1f09b594c317cc38e934de27a5b0e8ceb4baa50ef79bd4f8683dd9adea720fe7"
paper_digest_reader_title: "任意通道数、单一令牌流：SpheraAudio 如何让大音频语言模型听懂空间"
paper_digest_original_title: "Any Channel Count, One Token Stream: Incorporating Spatial Audio Understanding and Reasoning into Large Audio-Language Models"
paper_digest_arxiv_version: 1
paper_digest_arxiv_versioned_id: "2611.18112v1"
paper_digest_arxiv_abs_url: "https://arxiv.org/abs/2611.18112v1"
paper_digest_arxiv_pdf_url: "https://arxiv.org/pdf/2611.18112v1.pdf"
paper_digest_primary_task: "音频问答"
paper_digest_tags_contract: "paper-tag-flat-tags"
paper_digest_tags_schema_fingerprint: "27e36280a4b8d3df62ebe54d3ab037920f4d69feb2b554163f01bbae2caf4338"
paper_digest_tags_selection_contract: "paper-tag-selection"
paper_digest_tags_registry_version: "paper-tag-catalog"
paper_digest_tags_registry_sha256: "9673bc0122e1905a5dcfd8b223675400cc2fa4c36095bc0e5f817edf99a0ec5c"
paper_digest_tags_concepts: [{"facet":"task","id":"task.audio-question-answering","label":"音频问答"},{"facet":"method","id":"method.multimodal-learning","label":"多模态学习"},{"facet":"task","id":"task.localization","label":"声源定位"},{"facet":"method","id":"method.reinforcement","label":"强化学习"},{"facet":"artifact","id":"artifact.benchmark","label":"基准测试"}]
paper_digest_primary_method: "多模态学习"
paper_digest_score: 7.0
paper_digest_rank_bucket: "前50%"
paper_digest_document_type: "模型报告"
paper_digest_one_sentence: "针对多通道空间线索被单通道压缩丢掉的问题，SpheraAudio 用内容与空间双编码器加时间配对交织与 SMRoPE 把单声道、双声道和 Ambisonics 统一为一条令牌流，再经几何预训练、带空间思维链的微调和结果奖励强化学习实现定位与推理，在 SpheraQA 上达到 60.18% 整体准确率，代价是每秒音频的令牌量翻倍且部分运动方向判断仍弱于基线。"
paper_digest_authors: [{"affiliations":["Alibaba Group"],"name":"Yuhuan You"},{"affiliations":["Zhejiang University"],"name":"Wenxiang Guo"},{"affiliations":["Alibaba Group"],"name":"Zhifang Guo"},{"affiliations":["Alibaba Group"],"name":"Yuxuan Wang"},{"affiliations":["Alibaba Group"],"name":"Jin Xu"}]
paper_digest_abstract_sha256: "3ea109e9f352a5f9104abc3acc4b2c1197eb964d05e6f66e24e0093863cf2552"
paper_digest_sidecars: {"citation.bib":{"sha256":"1b1501db947d6c9ff2d5c0e85386890fd04daa509273c84437c1ce900c176f44","url":"/audio-paper-digest-blog/client/papers/2026-11-16/2611-18112/citation.bib"},"citation.json":{"sha256":"fecd48949f964021ce335e8ecdc665f01b82d22ec5857f8dd0f9c94b9a9b3312","url":"/audio-paper-digest-blog/client/papers/2026-11-16/2611-18112/citation.json"},"citation.ris":{"sha256":"16b0134bd7fcf96dec3e741becfc7330fb1c3d12c6c663a1e88f0d902e074144","url":"/audio-paper-digest-blog/client/papers/2026-11-16/2611-18112/citation.ris"},"rethink-context.json":{"contract":"paper-research-context","schemaFingerprint":"5d4e79f7d3ee65b39ccb38281548bf20a1b2041ab7a27625eaf97ab9909a8383","sha256":"84236891696b43419f1c0e068bd1f18cc69c9a0adeb80a299eff21097fe3aacb","url":"/audio-paper-digest-blog/client/papers/2026-11-16/2611-18112/rethink-context.json"}}
paper_digest_api_reader_contract: "beginner-researcher"
paper_digest_api_reader_schema_fingerprint: "cd8baf5b8bda3a49eec64f6005931af63de4e9a13148cba5f354c661ca6e9df2"
paper_digest_api_reader_article_sha256: "bd977d2f1d935ea338af9a10335607d346a1fddd5ec725d8adead4e8dd10b06d"
paper_digest_api_reader_plan_sha256: "4b0bb87b95ad3a2d76a6b7db809fb917fd9000fcffa93b5b5819e173d1a6bec8"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings"
paper_digest_api_reader_source_binding_schema_fingerprint: "d2a2607a6e561909473022eb43f56332ee357af8568566a095c29083ffdec9cc"
paper_digest_api_reader_source_bindings_sha256: "62d3a747f96f7d7d8dd25ee97f58a1effa303b02123376c45adc12b77297c0e4"
paper_digest_api_reader_source_table_count: 5
paper_digest_api_reader_source_formula_count: 5
paper_digest_api_reader_structured_artifacts_sha256: "eb8073d679f1e875e8cd462c7babc72195a74e24f8bc00bfcf4ad82971cb6630"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity"
paper_digest_api_reader_author_identity_schema_fingerprint: "1e3fd3a9a56c9a5bf52df8df5022690b9a3fa92e83e934f295af87c0e258ed2f"
paper_digest_api_reader_author_identity_sha256: "913f8802f32eaa99c113a78310c12c666ab1b07bf4d9d2d90a041488f9fb2aeb"
paper_digest_api_reader_author_count: 5
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity"
paper_digest_api_reader_resource_identity_schema_fingerprint: "33b0be17118be61f39b85ce690c8da17e91f2864bb65e85284f60c40067328e0"
paper_digest_api_reader_resource_identity_sha256: "48c88fcb1d18aa50eebff91690480119f78ea0381ce93daedd46f48c22d43da1"
paper_digest_api_reader_resource_count: 0
paper_digest_api_reader_figure_persistence: "ephemeral-no-persisted-figure-assets-v1"
paper_digest_api_reader_decision_projection: "api-reader-decision-projection"
paper_digest_api_reader_decision_projection_schema_fingerprint: "e56feb5ab75c8710904916b898f73dab9bb18bdf65bb60b7ed2edf7f99cea860"
---

# 📄 任意通道数、单一令牌流：SpheraAudio 如何让大音频语言模型听懂空间

> 英文题目：*[Any Channel Count, One Token Stream: Incorporating Spatial Audio Understanding and Reasoning into Large Audio-Language Models](https://arxiv.org/abs/2611.18112v1)*

<!--paper-tag-hierarchy-v1:start-->

**研究分类**

- **研究任务**：[音频理解](/audio-paper-digest-blog/papers/?concept=task.audio-understanding) → [音频问答](/audio-paper-digest-blog/papers/?concept=task.audio-question-answering)；[声源定位](/audio-paper-digest-blog/papers/?concept=task.localization)
- **研究方法**：[多模态学习](/audio-paper-digest-blog/papers/?concept=method.multimodal-learning)；[强化学习](/audio-paper-digest-blog/papers/?concept=method.reinforcement)
- **研究产物**：[基准测试](/audio-paper-digest-blog/papers/?concept=artifact.benchmark)

<!--paper-tag-hierarchy-v1:end-->

> 评分：**7.0/10** | 创新 1.5/2 | 技术严谨 1.2/1.5 | 实验充分 1.2/1.5 | 清晰度 0.8/1 | 影响力 1/1.5 | 开源 0/1.5 | 可复现 0.3/0.5 | 工程/实践 1/1.5


## 👥 作者与机构

- Yuhuan You：Alibaba Group
- Wenxiang Guo：Zhejiang University
- Zhifang Guo：Alibaba Group
- Yuxuan Wang：Alibaba Group
- Jin Xu：Alibaba Group

## 📌 核心摘要

需要理解的对象是通道数不定的录音，可能是单声道、双声道或声场录音，输出是对声源方向、距离、数量与运动的回答，困难在于方向与距离线索藏在通道间时间与相位差里，单通道模型为保证通用理解稳定常丢掉这些信息。方法先用音频编码器提取语义内容得到音频记号，再用空间编码器从多通道复数频谱提取方向与距离证据得到空间记号，两路经投影对齐到同一语义空间后按时间配对交错排列成单记号流送入语言模型做问答。空间多模态旋转编码让同一时刻的两枚记号共享时间坐标又能区分模态以便在查询时间窗内同时检索内容与几何证据，最后语言模型以逐步几何推理输出答案，训练先做空间编码器几何预训练，再做投影对齐与带推理过程的监督微调，最后用结果奖励做策略优化。与把音频压成单通道内容的已有大音频语言模型不同，该单记号流同时保留内容与几何证据并维持模态内时间关系，意味着细粒度定位可与内容理解并行，且同一接口兼容多种录音格式与立体声问题。在相同多通道录音与问题提示的包含20492个问题的SpheraQA整题正确率评测上，本文方法的ACC为60.18%，高于Spatial-Omni-7B的41.65%。结论适用于静态与运动声源的高精度定位、跟踪和简单推理并保留通用转写与分类能力，对录音设备变化和复杂混响的覆盖仍有限，原文未披露训练、推理或部署成本。

## 🔗 开源与复现资源

本次未形成可展示的已核验资源记录，开放状态尚未核实。

可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 人靠两只耳朵定位，机器为什么只用一个通道？

日常听觉里，声波到达左右耳的时间差、强度差和相位差直接编码了声源从哪个方向来、离得有多远、是否在移动。人转一下头，结合视觉就能把声音与物体对应起来。做导航与交互的具身智能体同样需要这种能力，否则只能听懂说了什么，却不知道谁在哪里、往哪里走。

已有的两条路线各管一段。传统声源定位与声事件定位检测估计方向、位置与活动，给出的是坐标与事件标签这类专用估计，开放式的场景解释与空间推理要交给下游系统。近期的大音频语言模型能做语言层面的音频理解，但很多通用模型为了保持单通道训练的稳定性，主动把多通道压缩成单通道，避免冗余或无关的多通道信息干扰内容理解，代价是通道间的空间线索被丢掉。

这就留下了一个具体缺口：方向、距离、声源之间相对关系这类问题，答案藏在通道之间的关系里，而不是单通道波形本身。只给全向通道，模型能猜个左右粗判或利用响度猜距离，但给不出精确方位角，也难以把声音身份与几何证据绑定到同一声源上。本文的方法正是为补上这条显式的空间通路，同时不破坏通用音频能力。

### 已有空间音频路线卡在哪里？

按输入假设看，BAT 专为双耳双通道设计，SPUR 与 Spatial-Omni 用 FOA，PhaseCoder 用麦克风坐标适配不同阵列布局。PhaseCoder 假设自由场全向麦克风，但实际设备有机壳散射、指向性与安装差异，相同坐标也可能对应不同的方向频率响应。SpheraAudio 改用校准的阵列到 Ambisonics 编码，把实测方向响应折算到共享 FOA 基上，再处理立体声中侧映射与高阶的 1 阶提取，输入侧的比较点在于是否需要坐标、是否处理设备声学。

按内容与空间如何结合看，Sci-Phi 与 PhaseCoder 把空间与音频令牌块分开拼接，ST-AudioLM 用片段级语义加轨迹令牌，本文则把同一时刻的空间令牌放在音频令牌之前交织，并用位置编码显式标记对应关系。比较点在于时间对应是靠微调隐式学，还是靠结构与编码显式给。

按适配方式看，OWL、SARI 等常用低秩适配或轻量适配器，Spatial-Omni-7B 向大语言模型范式迈了一步但未系统检验对单通道通用能力的影响。本文做全参数适配，并同时报告空间增益与通用音频保持情况。训练上，LTU 与 Audio Flamingo 2 用指令与推理课程，OWL 监督声源关系解释，TWNM 用自适应策略优化，本文用细粒度空间思维链监督加组相对策略优化。比较时要注意阶段与监督不同，不能把类别差异直接读成同条件胜负。

### 论文要解决的到底是哪个具体困难？

论文把任务定为：输入任意通道数的录音，包括单声道、立体声、1 阶 Ambisonics 以及兼容的高阶与校准麦克风阵列，输出能回答方向、距离、运动与跨声源关系的语言答案。必须保留的信息是通道间的相位与幅度关系，以及声音内容与几何证据在时间上的对应关系。输出不仅是数值，还包括需要多步几何运算才能得到的导航与推理结论。

困难有三层。第一是接口统一，不同录音的通道数、麦克风位置与设备散射都不一样，不能为每种设备各训一个模型。第二是模态融合，内容特征与空间特征来自同一段录音的不同变换，如果简单拼在一起，语言模型要靠微调隐式学会谁与谁同属一时刻，容易错位。第三是评测与训练错位，已有基准把问题固定在某种通道格式上，且只看最终答案是否命中，不检查中间有没有空间推理证据，也难以比较几何精度与跨时间推理。

作者因此同时做两件事：做一个接受任意通道数、输出单条令牌流的模型 SpheraAudio，以及一个覆盖单声道、立体声与 FOA、分三层难度、按程序化几何规则打分并附带分步解法参考的基准 SpheraQA。模型与基准互相配合，前者要证明能听能算，后者要让这种证明可重复检验。

### SpheraAudio 的完整链路是怎样的？

拿一段录音跟着走一遍最清楚。底部可以是 1 通道单声道、2 通道立体声左右声道，或 C 通道的多通道 FOA 与校准阵列。先经空间输入映射统一为 4 分量表示，单声道只走音频通路，立体声做中侧变换，多通道用原生 1 阶或外部提取与编码结果。映射之后，两条编码器在同一分帧网格与分块边界上并行工作。

为了理解双路如何汇成一条语言模型输入，先看系统总览图。图中下方是两种谱表示与双编码器，中部是投影与交织，上方是带 SMRoPE 的语言模型与问答，箭头标出了从波形到答案的主路径。

> **看图路径：** 1. 先沿底部三种录音经空间输入映射到双编码器再到交织的主箭头看完整路径；2. 再看 S1 与 A1 下方标注的三维坐标如何同增而第三维相差 1；3. 最后看顶部问题令牌与底部声学令牌如何共同指向右侧答案与听者示意

[![原论文 Figure 1：SpheraAudio overview. The audio encoder AuT and spatial encoder Spatial AuT extract complementary…](https://arxiv.org/html/2611.18112v1/figures/system_overview.png)](https://arxiv.org/html/2611.18112v1/figures/system_overview.png)

*论文图 1。原论文 Figure 1:：“SpheraAudio overview. The audio encoder AuT and spatial encoder Spatial AuT extract complementary features from the same recording.”。*

上图确实可见左侧音频分支用对数梅尔谱与 AuT，右侧空间分支用复数短时傅里叶变换实部加虚部与 Spatial AuT，两侧经各自投影器得到音频令牌与空间令牌后交织为 S 与 A 相间的序列。图中 S1 下方标注 3 维坐标，A1 第 3 维加 1，直观展示了同时刻共享时间、模态相差 1 的设计。顶部问题问快速说话的成年男性方向，右侧答案给出在听者身后，并配有听者与目标的示意，说明最终输出是语言层面的空间判断，而非单纯坐标回归。

这条链路的关键选择是共享编码器与时间网格、保留两套键值表示、位置编码同时携带时间与模态。训练上再分 3 段从几何监督过渡到语言空间决策，答案被训练为显式的分步几何推理。下一节展开两条编码器各自的输入与汇合细节。

### 内容和空间两条路各做什么，又在哪里汇合？

音频编码器 AuT 处理单通道对数梅尔谱，提取与内容相关的特征，首次出现时可以理解为听内容的专用编码器。空间编码器 Spatial AuT 处理多通道短时傅里叶变换系数的实部与虚部堆叠，提取与几何相关的特征，首次出现时可以理解为读通道间相位与幅度差的专用编码器。两者共享输入的时间网格与下采样节拍，从而在时间上天然对齐。

**音频编码器 AuT × 空间编码器 Spatial AuT：** 音频编码器 AuT 只看单通道的对数梅尔谱，负责听出是什么声音、说了什么；空间编码器 Spatial AuT 看多通道短时傅里叶变换的实部与虚部，负责从通道间的相位与幅度差读出方向与距离。两者分工后互补，前者保内容稳定，后者补几何证据，合起来才够回答谁在哪里、在动还是静止。

两路特征经各自投影器映射到语言嵌入维度，得到同一时刻的音频令牌与空间令牌。设 t 时刻两路编码器特征为音频特征与空间特征，投影后即为两个令牌，该式的要点是两个投影器独立学习、输出维度与语言模型一致为 2560，为后续交织保留可分别查询的表示。

\[A_{t}=P_{a}(\mathbf{h}^{a}_{t}),\qquad S_{t}=P_{s}(\mathbf{h}^{s}_{t}).\]

汇合方式是把每个空间令牌放在对应音频令牌之前，按时间交织成共享序列。序列以音频起始符开头、结束符结尾，中间是 S1、A1 直到 SK、AK。在因果注意力下，音频查询能看到同拍的空间键，而同拍反向则被掩掉，两类令牌保留各自的键值表示，语言模型可以分别关注内容与空间。

\[\mathcal{X}=[\langle\mathrm{audio}\rangle,S_{1},A_{1},\ldots,S_{K},A_{K},\langle/\mathrm{audio}\rangle].\]

**音频令牌 × 空间令牌：** 音频令牌是内容特征经投影后进入语言模型的向量，空间令牌是几何特征经投影后的向量。论文不把两类向量相加压成一个，而是按同一时刻配对并交织为 S1、A1、S2、A2 的顺序保留两套键值，让语言模型在注意力中分别查询内容与空间，避免相加混叠导致定位误差与转写误差同时上升。

这种保留双位置的设计与直接逐元素相加形成对照。单声源消融里，相加的方位角平均绝对误差更大，转写错误率也更高，而交织在方位角、仰角、距离与左右、运动状态上都更好，轨迹精度则差异很小。这支持了分开表示有利于分别查询的判断，但也说明轨迹这类长时组合问题不是仅靠融合方式就能解决的。

### 不同通道数如何变成同一种表示？位置信息如何编码？

统一表示以 FOA 四分量为公共基。原生 FOA 按 ACN 顺序取全向 W 与指向分量，平面波满足正弦余弦关系，压力与指向分量的互谱给出伪强度向量用于定位，幅度与相位差给方向，直达混响比给距离线索。高阶 Ambisonics 取其零阶与 1 阶，校准阵列则用实测方向响应矩阵把 C 通道信号编码到 4 通道，显式处理安装与指向性带来的传递函数差异。

立体声用可逆的中侧映射把左右通道变为和与差，再补零成 4 通道。该变换保留了双波形，逆变换可恢复左右信号，使空间编码器能利用通道差，同时音频通路取和信号。单声道保留基座模型的原生单音频序列与位置，不引入空间令牌。

\[W_{m}=\frac{L+R}{2},\quad Y_{m}=\frac{L-R}{2},\quad\widetilde{\mathbf{a}}=[W_{m},Y_{m},0,0]^{\mathsf{T}}.\]

**一阶 Ambisonics FOA × 中侧映射：** 一阶 Ambisonics FOA 是用全向 W 与三个指向 X、Y、Z 按 ACN 顺序记录声场的四通道表示，直接给出水平与垂直方向的投影；中侧映射把立体声左右通道变为和与差得到 Wm 与 Ym，再补零成四通道。两者搭配的意义是统一接口：原生 FOA 直接进入，高阶与阵列经外部提取或校准编码折算到同一四通道基，立体声经可逆映射保留双波形，单声道则只走音频通路。

时间对齐之后还要让旋转注意力看见对齐。SMRoPE 给每个令牌 3 维坐标，同拍的空间与音频令牌前 2 维相同、第 3 维相差 1，整体随声学时间推进，边界与文本令牌按规则续增。标准单维顺序位置会让模态内步长翻倍并改变全文相对关系，而该网格保持模态内位移仍等于时间位移，跨模态则多一个符号相位差。

\[\mathbf{p}(S_{t})=(b+t,b+t,b+t),\qquad\mathbf{p}(A_{t})=(b+t,b+t,b+t+1).\]

**旋转位置编码 RoPE × 空间多模态旋转位置编码 SMRoPE：** 旋转位置编码 RoPE 是语言模型原来用相对位移旋转查询与键向量的位置机制，空间多模态旋转位置编码 SMRoPE 沿用同样的旋转运算，只把坐标从一维扩展为三维。同时刻的空间与音频令牌共享前两维、第三维相差 1，模态内相对位置仍跟随声学时间，跨模态则多一个固定相位差，从而在不改动原旋转操作的前提下让模型同时看见时间对齐与模态身份。

附录的频率分配把每头 128 维中的 64 个 2 维平面按 24、20、20 分给 3 组坐标，旋转基为 10 的 6 次方，时域与模态相位变化分散到多个频率上。键减查询的相对坐标显示模态内 3 组都跟随时间差，跨模态第 3 组多出模态差，这正是推理时按查询时间取证的依据。消融里把该网格换成顺序位置，带时间窗的方向与内容判断大幅下降，而无时间问题基本不变，从反面印证了共享时间网格的作用。

### 三阶段训练分别教什么，监督从哪里来？

训练分 3 段，先几何后语言再决策。第一段在模拟 FOA 上从零预训练空间编码器，带时间分辨的声源标注与房间属性，用 6 个线性头预测方位角正弦余弦对、仰角、距离、房间面积、壁面吸收与声源活动。角度用均方误差，活动用二元交叉熵，只在有声位置算几何与房间损失，空集损失记零，再用指数滑动平均平衡不同量纲的损失权重。

为了看清冻结与更新的切换，先看训练框架示意图。图中 Stage0 只有空间编码器可训练并接受方向、仰角与距离监督，Stage1 冻结语言模型与音频分支只对齐空间投影器，Stage2 全部模块放开做联合监督微调与强化学习。

> **看图路径：** 1. 对比 Stage0 到 Stage2 下方输入波形是否同为 FOA 四通道；2. 看每个阶段火焰与雪花图标标注了哪些模块可训练、哪些冻结；3. 看 Stage1 到 Stage2 空间投影器与语言模型状态的变化

[![原论文 Figure 2：Schematic training framework. Spatial-encoder pretraining learns temporally resolved geometry.](https://arxiv.org/html/2611.18112v1/training_stages.png)](https://arxiv.org/html/2611.18112v1/training_stages.png)

*论文图 2。原论文 Figure 2:：“Schematic training framework. Spatial-encoder pretraining learns temporally resolved geometry.”。*

上图确实可见 3 段下方输入同为 FOA 4 通道波形，中部编码器与投影器图标自下而上连接语言模型，底部火焰与雪花图例区分可训练与冻结。这种画法帮助理解监督来源的变化：从纯几何标签，到连接空间特征与预训练语言表示，再到结合声学与空间证据做问答。

第二段先冻结其他模块对齐投影器，再联合通用音频样本与空间思维链监督做全参数微调。空间思维链目标由标注构造，指明查询声源与时间、陈述空间观察、执行几何运算再给答案，计数用活动与属性，导航由方向推转向，关系在统一坐标系下比较。第 3 段用结果奖励做群体相对策略优化，最终监督策略做初始化并做固定 KL 参考，只用最终答案奖励更新。

**监督微调 SFT × 群体相对策略优化 GRPO：** 监督微调 SFT 用带空间思维链的问答序列做自回归学习，教模型先说清声源身份、时间、空间观察与几何运算再给答案；群体相对策略优化 GRPO 是只看最终答案是否命中的结果型强化学习，对同一问题采样多份回答按组内均值与标准差算优势加权。两者搭配是先用过程监督建立可解释的几何步骤，再用结果奖励校正选择与关联错误。

数值答案按容差给部分分，方位角与听者旋转用圆周误差，仰角与距离用绝对误差，容差内得 1，2 倍容差外得 0，中间线性衰减。该分段奖励的含义是接近即给分、远离即 0 分，避免二值命中对小误差过于苛刻。

\[r_{\mathrm{num}}(e;\tau)=\begin{cases}1,&e\leq\tau,\\ 2-e/\tau,&\tau<e<2\tau,\\ 0,&e\geq 2\tau.\end{cases}\]

类别与选择题用是否命中给分，描述题用加权命中词表覆盖率乘以长度因子。优化时每组 8 个回答按组均值与样本标准差算优势，逐回答加权全部词元，配合策略比裁剪、负优势双裁剪、低方差 KL 与熵正则。这种设计把过程监督与结果选择分开，前者教步骤，后者纠关联。

### SpheraQA 如何组织问题，又如何打分？

SpheraQA 包含 20492 个问题、7059 段录音、共 24.92 小时，标注片段中位时长 7.52 秒。问题分三层，L1 感知含方位角、仰角、距离、数量、侧向位置、运动状态与方向、空间类别、坐标与轨迹，L2 关系含距离比较、相对位置与导航，L3 推理含多跳、跨源比较、距离变化、声学推断、身份绑定与自由推理。来源混合模拟静态与运动场景、LOCATA 与 STARSS23 真实录音，多通道评测用共享 4 通道表示，单通道基线只取其全向分量。

为了建立从属性到决策的直觉，先看基准的概念图。中间圆盘按颜色分出感知、关系与推理扇区，四角示例分别展示坐标、距离比较、多源最近最远与转头后方位计算，箭头与数值标出几何运算。

> **看图路径：** 1. 先看中间同心圆盘 L1、L2、L3 各自包含的任务扇区；2. 再看四角示例框中问题、几何数值与答案推理如何对应；3. 注意右下 110 度转头示例中加减与归一化的计算步骤

[![原论文 Figure 3：SpheraQA. The task taxonomy spans single-attribute perception, cross-source relations, and…](https://arxiv.org/html/2611.18112v1/benchmark_constellation.png)](https://arxiv.org/html/2611.18112v1/benchmark_constellation.png)

*论文图 3。原论文 Figure 3:：“SpheraQA. The task taxonomy spans single-attribute perception, cross-source relations, and spatial reasoning.”。*

上图左上示例用 37.5 度与 2.67 米推出前左坐标，右上用 1.98 米与 2.86 米比较得出清嗓更近，左下用三距离排序与方位差推出左右关系，右下把 110 度右转加到原方位并归一化到正负 180 度内再比较绝对值判断谁更接近正前方。这些例子说明题目要求同时满足所有分量与时间戳，而非只答对 1 个方向词。

**SpheraQA L1 感知 × SpheraQA L2 关系 × SpheraQA L3 推理：** SpheraQA L1 感知考单个属性如方位角、仰角、距离、数量与运动状态，SpheraQA L2 关系考跨声源比较如谁更近、左右相对与转向导航，SpheraQA L3 推理考多跳组合如听者转动后的新方位与身份绑定。三层共用同一几何容差与全对才得分的整题准确率，组合起来才能检验从听见几何到用几何做决定的完整链路。

打分按程序化几何规则整题全对才得分。方位角圆周误差不超过 20 度，仰角绝对误差不超过 10 度，距离绝对误差不超过 1 米，轨迹要求覆盖全部请求时刻并在 0.051 秒内匹配，关系题要求属性与有序声源对同时命中。自由回答先用模型抽取值与声源指称，再按确定性规则聚合，类别与整体准确率用同一固定题集。公开基准侧，SO-Bench 按任务规则取每题均分，TWNM 按选项条件概率或生成字母计选项准确率，比较时给相同多通道录音与问题，单通道基线只给全向波形，从而分离内容线索与通道间方向证据的贡献。

### 空间理解的主结果在什么条件下成立？

比较问题是：在相同多通道输入与相同问题提示下，SpheraAudio 相对 Spatial-Omni-7B 能带来多大整题准确率提升，以及只给全向通道的强单通道模型能在多大程度上靠内容线索作答。指标方向都是越高越好，SpheraQA 为全对才得分的整体准确率，SO-Bench 为任务规则下每题得分的均值，TWNM 为选项准确率。

下表选择方位角、仰角、距离、坐标、轨迹与 3 个基准汇总行，保留原表的题量、百分比与百分点差，完整呈现精确定位增益最大的位置与仍未胜出的位置。

| Task / benchmark | NN | Spatial- Omni-7B | Gemini 3.1 Pro | SpheraAudio | Δ (pp) |
| --- | --- | --- | --- | --- | --- |
| Azimuth | 1,563 | 22.39 | 9.72 | 55.60 | +33.21 |
| Elevation | 1,556 | 35.86 | 32.46 | 69.34 | +33.48 |
| Distance | 1,564 | 49.55 | 55.75 | 74.81 | +25.26 |
| Coordinates | 1,451 | 2.07 | 1.31 | 35.91 | +33.84 |
| Trajectory | 897 | 0.45 | 0.45 | 36.12 | +35.67 |
| SpheraQA | 20,492 | 41.65 | 42.73 | 60.18 | +18.53 |
| SO-Bench | 7,877 | 64.61 | 32.32 | 66.94 | +2.32 |
| TWNM | 1,000 | 46.20 | 56.60 | 71.70 | +25.50 |

该表支撑的判断是精细几何与结构化输出增益最大。方位角从 22.39% 到 55.60%，相差 33.21 个百分点，坐标从 2.07% 到 35.91%，轨迹从 0.45% 到 36.12%，三者都与空间编码器预训练的几何目标和思维链中声源身份与几何的绑定直接相关。SpheraQA 整体 60.18% 超出 18.53 个百分点，TWNM 71.70% 超出 25.50 个百分点，SO-Bench 66.94% 超出 2.32 个百分点。只给全向通道的基线在粗粒度左右与运动判断上尚可，但在精确方位与完整坐标上明显落后，说明单通道保留内容与部分距离运动线索，却缺少通道间方向证据。

限制同样明确。运动方向上 SpheraAudio 为 34.93%，低于 Spatial-Omni-7B 的 45.36% 与单通道基线的 49.39%，距离比较也略低 0.90 个百分点，说明运动方向理解与部分关系判断并未随定位精度同步提升。附录按声源音频分组的自助区间显示 SpheraQA 差值区间为 17.17 到 20.12 个百分点，SO-Bench 为 1.23 到 3.44，TWNM 为 21.82 到 29.26，增益方向稳定但幅度随基准任务构成而变化。复现时应使用同一题集与整题全对规则，否则跨基准直接比较会被任务权重误导。

### 加了空间能力，通用音频能力保住了吗？

比较问题是：全参数空间适配后，通用识别是否退化。条件是同一组 9 个子集、同一音频与真值、各自原生提示模板，指标为中文字符错误率与英文词错误率越低越好，情感与人声分类准确率越高越好。基线包括起始的 Qwen3-Omni 4B 预训练通路、只用单通道数据适配、以及单通道加空间数据混合适配。

下表保留原表的全部子集、指标方向与百分比数值，呈现混合训练相对纯单通道适配与起始模型的差异。

| Test subset | Metric | Base | Adapted (Mono Data) | Adapted (Mono + Spatial Data) |
| --- | --- | --- | --- | --- |
| FLEURS (cmn) | CER (%) ↓ | 11.14 | 6.10 | 2.97 |
| FLEURS (en) | WER (%) ↓ | 4.51 | 6.62 | 4.38 |
| Common Voice 15 (zh) | CER (%) ↓ | 7.69 | 20.33 | 12.71 |
| Common Voice 15 (en) | WER (%) ↓ | 11.22 | 16.58 | 10.76 |
| WenetSpeech (meeting) | CER (%) ↓ | 15.35 | 15.31 | 8.06 |
| WenetSpeech (net) | CER (%) ↓ | 26.92 | 12.65 | 7.48 |
| IEMOCAP (session 5) | Acc. (%) ↑ | 4.54 | 59.61 | 69.59 |
| MELD (test) | Acc. (%) ↑ | 0.77 | 45.59 | 52.72 |
| VocalSound (test) | Acc. (%) ↑ | 51.66 | 85.80 | 87.89 |

该表支撑的判断是混合空间学习没有以通用能力为代价，反而在所测条件下带来保持或提升。混合配置在 9 个子集上全部优于纯单通道适配，在 8 个子集上优于起始模型，例如中文 FLEURS 字符错误率从 11.14% 降到 2.97%，英文 WenetSpeech 网络集从 26.92% 降到 7.48%，IEMOCAP 情感从 4.54% 升到 69.59%。原文的解释是通用样本维持了内容监督，单声道保留原生单音频序列，SMRoPE 在引入空间令牌时保持模态内时间位移，从而兼顾两者。

双通道侧的独立检验用 416 题考左右与运动，立体声适配后 SpheraAudio 在左右准确率、侧向位置与运动上分别达到 95.8%、93.2% 与 85.3%，高于双耳专用 BAT 的 70.4%、68.5% 与 55.9%，以及只给和信号的单通道基线的 46.5%、19.2% 与 50.4%。可逆中侧映射保留双波形是关键，但该检验经专用立体声微调，与主空间策略的迁移结果需分开看，附录另报告了迁移后左右保持 95.77% 而运动仍偏低，说明 2 通道运动理解仍是短板。

### 时间配对与位置网格真的重要吗？强化学习改了什么？

消融要回答 3 个可操作问题：融合方式是否必须保留双位置，时间对应是否显式成立，位置网格是否支持按时间取证，以及结果奖励在哪些任务上 refinement。实验用固定监督检查点与 16 段确认录音，干预只动令牌向量或位置编号，保持问题与答案键不变，按首个答案位置的选项对数似然选 A 到 D。

先看令牌向量层面的对应。仅循环移动空间流会把内容与另一时刻的几何错配，而双流同步移动保持配对。下表为 16 题命名声源最近水平方向任务，指标为准确率越高越好。

| Stream shift | NN | Acc. (%)↑ |
| --- | --- | --- |
| None | 16 | 75.00 |
| Spatial only | 16 | 25.00 |
| Both streams | 16 | 81.25 |

该表显示无移动时 75.00%，仅移动空间流跌到 25.00%，双流同步移动回到 81.25%。联合移动保持配对而单独移动破坏配对，这 1 对照支持第 3 节建立的显式对应，而非模型靠文本位置猜测。样本仅 16 题，置信区间较宽，原文报告基线减空间移动差 50.00 个百分点、联合减空间移动差 56.25 个百分点，解读时应视为方向性证据而非精确效应量。

再看位置编号层面的网格。SMRoPE 按声学时间推进，顺序位置则按交织后的物理序号计数，使模态内步长翻倍并改变全文相对关系。下表比较带时间窗的方向与内容及无时间方向三任务。

| Task | NN | SMRoPE | Sequential |
| --- | --- | --- | --- |
| Time-window direction | 16 | 81.25 | 12.50 |
| Time-window content | 16 | 81.25 | 25.00 |
| Untimed direction | 16 | 75.00 | 81.25 |

该表显示时间窗方向从顺序位置的 12.50% 回到 SMRoPE 的 81.25%，时间窗内容从 25.00% 回到 81.25%，而无时间方向两者为 75.00% 对 81.25% 基本相当。这说明学到的共享时间网格主要帮助按查询时刻取两路证据，对无时间问题影响很小。图 4 的声场变换从另一角度印证：9 个偏航角下方位角平均绝对误差保持在 7.00 度到 8.30 度之间，左右镜像为 6.98 度，移除 X 升到 65.63 度、移除 Y 到 31.10 度、只留 W 到 85.79 度，预测跟随几何变换且依赖指向通道。

> **看图路径：** 1. 先看左图偏航角从 0 到 180 度时方位角平均绝对误差是否保持平稳；2. 再看右图移除 X、Y、Z 与只留 W 时误差条的长度差异；3. 对照左右两图判断预测是否跟随声场变换而非固定内容线索

[![原论文 Figure 4：Responses to sound-field transformations on 223 fixed azimuth questions.](https://arxiv.org/html/2611.18112v1/physical_response.svg)](https://arxiv.org/html/2611.18112v1/physical_response.svg)

*论文图 4。原论文 Figure 4:：“Responses to sound-field transformations on 223 fixed azimuth questions.”。*

上图左面板横轴为偏航角、纵轴为方位角平均绝对误差，曲线基本平坦，右面板条形对比镜像与通道移除，X 与全向缺失时误差显著拉长。这帮助理解模型确实用了方向空间信息，而非固定内容线索，但测试限于 223 个固定方位问题与监督策略，推广到更复杂混响与运动仍需补验证。

结果奖励的增益集中在距离估计与关系选择。下表为多选强化前后在 TWNM 与立体声迁移上的准确率，差值为百分点增益。

| Task | NN | SFT | RL | Δ |
| --- | --- | --- | --- | --- |
| Distance estimation | 43 | 41.86 | 62.79 | +20.93 |
| Distance comparison | 60 | 46.67 | 51.67 | +5.00 |
| Azimuth direction | 43 | 83.72 | 86.05 | +2.33 |
| Lateral position (stereo) | 73 | 91.78 | 93.15 | +1.37 |
| Motion (stereo) | 272 | 37.13 | 37.87 | +0.74 |

该表显示距离估计从 41.86% 到 62.79% 提升 20.93 个百分点，距离比较提升 5.00 个百分点，方位方向提升 2.33 个百分点，立体声侧向与运动仅提升 1.37 与 0.74 个百分点。SO-Bench 侧仰角比较与相对左右等也有 1 到 2 个百分点内的提升，多跳推理仅 0.30 个百分点。结合附录例子，强化后能纠正听者旋转 180 度后的象限与运动穿越判断，但提示性几何解释仍可能选项正确而推理前后矛盾，说明最终答案奖励改善选择与关联，尚未保证解释一致性。

### 哪些结论还不能推广？

第一，运动与关系推理仍弱。主表里运动方向低于两个基线，距离比较与相对位置增益接近零，强化后立体声运动仅从 37.13% 到 37.87%，多跳推理仅提升 0.30 个百分点。轨迹要求全部时刻与坐标全对，单点误差即判错，这对长时跟踪与穿越判断提出更高要求，现有证据不支持把定位精度直接等同于运动理解。

第二，评测条件依赖通道与提示。主比较给 SpheraAudio 与 Spatial-Omni-7B 相同多通道与问题，单通道基线只给全向分量，这种设计能分离空间通路贡献，但也意味着跨模型数字只有在相同输入与打分规则下成立。SpheraQA 用模型抽取值再按容差聚合，抽取错误会传导到分数；SO-Bench 含语义匹配与部分分，TWNM 按选项概率计分，不同聚合不可直接换算。

第三，干预与变换证据规模小。令牌移动与坐标干预各仅 16 题，声场变换固定 223 个方位问题且用监督策略，通道移除用原始参考方向而旋转用变换后参考，这些细节决定结论边界。编码器预训练在静态说话人与仿真方向上最强，移动说话人与汇聚误差上仍弱于传统波束方法，说明时变几何仍是难点。

第四，解释一致性未解决。附录中听者半转例子显示监督策略选项错而强化后对，但另 1 例双策略都选对却把起始象限与目标象限说错、先说后左再说前右最后仍落到正确选项。这分离了答案正确与几何解释一致，提示不应把最终准确率读成推理过程可靠。

### 要复现这篇工作，第一步做什么？

先按附录统一输入。音频统一 16 千赫兹，FOA 按 ACN 顺序取 4 通道并用 SN3D 归一化，N3D 先除以根号 3。复数短时傅里叶变换用 400 点汉窗、160 点跳跃，实部虚部分开堆叠为 8 乘 201 乘 T 进入空间编码器，音频通路对全向信号做对数梅尔谱。两路用同一分帧网格并去掉居中加窗末帧，每秒 100 帧经 3 次步长 2 卷积得到每路 13 个特征位置，投影后每秒 13 个音频令牌、有空间时再加 13 个空间令牌。语言骨干从 Qwen3-Omni 4B 预训练模型初始化，空间编码器为 5 层、隐宽 384、前馈 1536、6 头，投影器为 384 到 384 到 2560。

再按 3 段组织训练。几何预训练挂 6 个线性头并用滑动平均平衡权重，方位角、仰角、距离、面积、吸收与活动的权重为 3、3、2、1、1、0.5。对齐阶段冻结其他模块，联合微调更新双编码器、双投影器与语言骨干，学习率从 2 乘 10 的负 6 次方衰减到 5 乘 10 的负 7 次方，100 步热身，全局批量 256，序列 4096，共 1633 步。强化阶段每步 32 问题、每问题 8 回答，学习率 5 乘 10 的负 7 次方，策略比裁剪到 0.8 到 1.2，负优势双裁剪系数 3，KL 系数 0.01，熵系数 0.003，采样温度 0.8 与 top-p 0.9，最大 256 词元。

评测侧用同一题集与整题全对规则，坐标用极坐标系听者在原点、0 度朝前、90 度朝左、仰角上正下负，轨迹按请求间隔逐点比对。论文称将公开代码、SpheraQA 基准与评分工具以支持复现，但本次未发现归属明确且通过可用性校验的作者资源，只能以论文附录的输入约定、模型配置、SMRoPE 构造与优化设置为准先行复现，不宜把可运行性建立在尚未确认的下载链接上。

### 什么时候值得尝试这个方案？

当任务必须同时听清内容与算清几何，且录音通道数不固定时，这个方案值得尝试。典型情况是具身导航、会议多说话人跟踪、需要回答谁更近、往哪转、转头后方位如何变化的问题。它的可操作起点是先把所有设备统一到 4 通道共享基，再用双编码器加交织与 3 维位置编码保留时间对应，最后用思维链监督建立步骤、用结果奖励校正选择。

行动顺序建议为：先复现输入映射与时间网格，确认单声道、立体声与 FOA 每秒令牌数与对齐；再跑几何预训练的定位头，确认静态与仿真误差下降；再做投影对齐与联合微调，对照通用识别是否保持；最后在小规模确认集上做令牌移动与顺序位置对照，确认时间取证依赖结构而非偶然，再扩大到完整基准。

还需要补的验证是运动方向与多跳推理的专项测试、更大混响与移动声源下的声场变换、以及解释一致性的独立评分。现有证据支持显式空间通路对精确定位与结构化坐标的价值，也支持混合训练下通用能力得以保持，但不支持把答案命中直接推广为全程可靠的空间推理。在这些边界内使用，才能把增益落到实处。

<details>
<summary>📎 论文与评分元数据</summary>

排名：前50% | 文档类型：模型报告 | [arXiv 原文](https://arxiv.org/abs/2611.18112v1)

</details>

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。

- 评分规则：type-aware-v1

- 评分模型：muse-spark-1.3-contributor

- 评分请求协议：openai_responses

---

[← 返回 2026-11-16 语音/音乐/音频论文速递](/audio-paper-digest-blog/posts/2026-11-16/)
