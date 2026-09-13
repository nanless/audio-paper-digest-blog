---
title: "X-AVDT: Audio-Visual Cross-Attention for Robust Deepfake Detection"
date: 2026-09-13
draft: false
description: "针对跨生成器泛化难的问题，论文用音频条件扩散模型的 DDIM 反演重建差异与音频视觉交叉注意力做双路检测，在 MMDF 未见生成器与外部基准上取得领先，但单次反演约一分钟的计算开销是主要代价。"
tags: ["数据集", "注意力机制", "鲁棒性", "音视频", "音频深度伪造检测"]
categories: ["cvpr-2026 论文"]
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_paper_id: "conference:cvpr:2026:conference-paper-id:Kim_X-AVDT_Audio-Visual_Cross-Attention_for_Robust_Deepfake_Detection_CVPR_2026_paper"
paper_digest_source_kind: conference
paper_digest_conference_id: "cvpr-2026"
paper_digest_conference_record_url: "https://openaccess.thecvf.com/content/CVPR2026/html/Kim_X-AVDT_Audio-Visual_Cross-Attention_for_Robust_Deepfake_Detection_CVPR_2026_paper.html"
paper_digest_conference_pdf_url: "https://openaccess.thecvf.com/content/CVPR2026/papers/Kim_X-AVDT_Audio-Visual_Cross-Attention_for_Robust_Deepfake_Detection_CVPR_2026_paper.pdf"
paper_digest_api_reader_contract: "beginner-researcher-v3"
paper_digest_api_reader_article_sha256: "173572124767ba5e16c992c7d11f33809d3e486219755a44a5bdbaff05e96921"
paper_digest_api_reader_plan_sha256: "56624deabe8bfa916385015e8fa3c502d1e6d44a31bdb1a5b3d47e266bbc5bc2"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings-v4"
paper_digest_api_reader_source_bindings_sha256: "f2a6d0c0ad6180e58e0d772f1971717051579dbcff5c65407f9ce4b08317a9f3"
paper_digest_api_reader_source_table_count: 3
paper_digest_api_reader_source_formula_count: 0
paper_digest_api_reader_structured_artifacts_sha256: "3b1e969db1c3d44d4c285c85e6e19d2e8b7818e47c3e8c891b723a575b08a05e"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity-v1"
paper_digest_api_reader_author_identity_sha256: "81016bc24b3292acd922c9748e55f7c9d71147d6dbe931a73edc9d4387d2a9c8"
paper_digest_api_reader_author_count: 6
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity-v1"
paper_digest_api_reader_resource_identity_sha256: "5c362abed48e4475a263f2f17287dd2b91b59df77878e35b41a05eb270f1d346"
paper_digest_api_reader_resource_count: 0
paper_digest_api_reader_decision_projection: "api-reader-decision-projection-v2"
paper_digest_scoring_contract: "api-scoring-audit-v2"
paper_digest_taxonomy_contract: "paper-taxonomy-flat-tags-compat-v1"
paper_digest_taxonomy_selection_contract: "paper-taxonomy-selection-v1"
paper_digest_taxonomy_registry_version: "paper-taxonomy-v1"
paper_digest_taxonomy_registry_sha256: "15c82a567ce5a55dc1175684ed08b64c158558639d9c8fb822c9587ec32a8778"
paper_digest_taxonomy_concepts: [{"facet":"artifact","id":"artifact.dataset","label":"数据集"},{"facet":"method","id":"method.attention","label":"注意力机制"},{"facet":"research_focus","id":"research_focus.robustness","label":"鲁棒性"},{"facet":"signal","id":"signal.audiovisual","label":"音视频"},{"facet":"task","id":"task.audio-deepfake","label":"音频深度伪造检测"}]
paper_digest_primary_task: "音频深度伪造检测"
paper_digest_primary_method: "注意力机制"
paper_digest_score: 6.9
paper_digest_rank_bucket: "前50%"
paper_digest_document_type: "方法研究"
paper_digest_conference_structure: replayable-pdf-layout-v1
---

# 📄 不只看脸像不像：用生成器内部的声音嘴型对齐信号抓伪造

> 英文题目：*X-AVDT: Audio-Visual Cross-Attention for Robust Deepfake Detection*

> 会议身份：`conference:cvpr:2026:conference-paper-id:Kim_X-AVDT_Audio-Visual_Cross-Attention_for_Robust_Deepfake_Detection_CVPR_2026_paper`


> ✅ 来源为官方会议 PDF；表格与 Figure 按原文证据绑定。PDF 公式以原页区域图片展示，未冒称作者原始 TeX。

> 会议来源：[官方记录](https://openaccess.thecvf.com/content/CVPR2026/html/Kim_X-AVDT_Audio-Visual_Cross-Attention_for_Robust_Deepfake_Detection_CVPR_2026_paper.html) · [官方 PDF](https://openaccess.thecvf.com/content/CVPR2026/papers/Kim_X-AVDT_Audio-Visual_Cross-Attention_for_Robust_Deepfake_Detection_CVPR_2026_paper.pdf)

标签：#数据集 #注意力机制 #鲁棒性 #音视频 #音频深度伪造检测

评分：**6.9/10** | 创新 1.6/2 | 技术严谨 1.2/1.5 | 实验充分 1.1/1.5 | 清晰度 0.8/1 | 影响力 1.0/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 0.9/1.5

排名：前50% | 文档类型：方法研究

## 👥 作者与机构

- Youngseo Kim：机构信息未能从会议 PDF 纯文本可靠映射
- Kwan Yun：机构信息未能从会议 PDF 纯文本可靠映射
- Seokhyeon Hong：机构信息未能从会议 PDF 纯文本可靠映射
- Sihun Cha：机构信息未能从会议 PDF 纯文本可靠映射
- Colette Suhjung Koo：机构信息未能从会议 PDF 纯文本可靠映射
- Junyong Noh：机构信息未能从会议 PDF 纯文本可靠映射

## 📌 核心摘要

音视频深度伪造检测以单人含语音人脸视频与配对音频为输入，输出真伪二分类，难点在于扩散与流匹配合成视觉残留弱且跨生成器泛化难。X-AVDT先以语音条件经变分自编码器编码并做DDIM反演得噪声潜变量再条件重建，输出输入视频、噪声解码、重建解码与绝对残差拼接的十二通道视频复合表示。接着从同一去噪3D U-Net上采样块抽取以视频隐状态为查询、音频隐状态为键值的交叉注意力特征，重塑为时空对齐的语音运动同步描述子。最后双3D ResNeXt编码器分别编码复合表示与注意力特征并经融合解码器联合二元交叉熵与三元组损失输出真伪，前步的残差与对齐特征共同进入判别器训练。与仅用重建残差或后期融合视听嵌入不同，该机制直接探测生成器为保证唇动同步而施加的内部对齐，因而对未见生成器更具判别性。在MMDF基准测试集下，X-AVDT的AUROC指标为95.29，高于RealForensics的AUROC指标92.42。其结论适用边界受限于单人正脸至侧脸且含稳定唇动语音片段，多说话人与非语音场景尚未验证。其训练成本为单个NVIDIA RTX 3090硬件上训练14小时。

## 🔗 开源与复现资源

本次未形成可展示的已核验资源记录，开放状态尚未核实。
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 输入是什么，要判什么，为什么难到人也容易错？

这篇论文研究的输入是一段包含人脸的视频与其配对音频，目标是输出该片段为真还是假的二分类分数。读者可以把任务理解为：给定连续多帧的人脸画面和同步语音，判断嘴型、表情与声音是否来自 1 次真实的拍摄，还是经过换脸、自重演或谈话头合成等手段改写。

论文把困难定位在两个变化上，一是生成器从对抗网络快速转向扩散与流匹配模型，画面逼真度与时序连贯性显著提升，二是局部篡改只动嘴部附近而保留身份与背景，传统只看单帧纹理或全局残差的线索容易被淹没。原文用人工评测说明挑战性：在同一用户研究中，人把假视频判为真的比例并不低，检测器需要超越人的稳定性。

另一个难点是跨生成器泛化，训练时见过的伪造痕迹在新模型上可能消失，因此论文主张从生成器内部的语音运动对齐机制中寻找更持久的信号，而不是记住某种纹理指纹。关于代码与数据可达性，论文正文写有代码地址表述，但本次没有获得完成验证的资源绑定，因此这里不声称代码或模型当前已公开可下载，复现应以论文描述的模型与流程为准。

### 已有检测路线各卡在哪里？

按输入、目标与监督方式可以把相关工作分成 4 类。第一类是伪影检测，用卷积网络学习合成痕迹或频域指纹，在同分布数据上有效，但论文指出其对新生成器与高保真扩散伪造的迁移能力有限。第二类是重建式泛化检测，以扩散重建误差作为判据，认为扩散模型对自身生成内容重建更准，代表有重建误差检测与对比学习扩展等，这条路线启发了本文的反演差异分支，但原文强调仅靠残差对面部局部篡改不够敏感。

第 3 类是音视频晚融合或自监督对齐，把声音与图像分别编码再在分类头融合，或用对比学习拉近跨模态嵌入，这类方法保留了单模态特征强度，但跨模态是否真正对齐缺乏可解释的细粒度证据。第 4 类是生成侧控制，谈话头、重演、换脸与唇同步等合成方法本身大量使用交叉注意力把音频条件注入视觉去噪，本文的切入点正是把这类生成器内部的对齐计算反过来用作检测探针。

与上述路线相比，本文的差异在于显式抽取预训练音频驱动扩散模型在反演过程中的交叉注意力张量，并与反演重建证据并行融合，既保留外观线索，又增加语音驱动运动的内部一致性线索。

### 问题如何形式化，评测要守住什么公平？

论文把训练数据定义为三元组集合，每个样本包含人脸视频片段、配对音频条件与真假标签，真记为零，假记为一。学习目标是从每个音视频对抽取两类表示，再融合估计为假的概率，优化分类损失与度量学习损失的加权和。举例来说，一个样本可以是从同一人真实采访截取的十几帧加对应语音，另一个样本可以是同一段语音驱动新模型合成的谈话头视频，检测器要对两者给出不同分数。

公平评测的关键在原文有明确安排：基线分为官方预训练权重与在多模态多生成器数据集训练集上重训两类，前者反映历史模型的直接迁移，后者控制训练数据一致后再比方法本身；外部基准上还标注了训练测试重叠的情况，避免把见过测试分布的基线分数误读为泛化能力。

指标方向也需要先讲清，受试者工作特征曲线下面积与平均精度越高越好，等错误率阈值下的准确率与普通准确率同样越高越好，而同步距离、感知距离与视频分布距离越低越好，同步置信度越高越好。数值比较必须锁定同一数据集、同一阶段与同一聚合对象，不同指标的差值不能混排。

### 跟着一个样本走完输入到输出

假设拿到一段 16 帧的人脸视频与对应语音，处理分 3 步。第一步是音频条件潜扩散反演与重建，先用变分自编码器把视频编码到潜空间，用语音特征作为条件做确定性反演得到噪声潜变量，再从该噪声出发做条件去噪回到干净潜变量并解码为重建视频，同时计算输入与重建的绝对残差。

第二步是构造两路输入，一路是把原视频、解码噪声图、重建视频与残差在通道维拼接成的视频合成体，另一路是在反演过程中从去噪网络上采样块抽取的音频视觉交叉注意力特征，整理为帧对齐张量。第 3 步是双编码融合判别，两个 3 维编码器分别处理两路输入，拼接并经投影得到融合体，再经自注意力与残差卷积得到融合向量，分别送入全连接分类头输出真假分值与归一化嵌入头用于度量学习。

下面的输入表示图把左右两路的来源画得很清楚，左侧是反演重建链，右侧是注意力抽取点，初学者应先建立这个双路分工心智模型，再进入组件细节。

为理解双路输入的互补关系，先看输入表示的整体安排：左侧链条说明反演误差从哪里来，右侧说明对齐特征从哪里抽，两路在检测器入口汇合前保持独立。

> **看图路径：** 1. 先看左侧从输入视频与音频到反演再到重建的主链，确认四个拼接分量的来源；2. 再看右侧去噪网络中交叉注意力被抽出的位置与输出的帧对齐张量形态；3. 对比左右两路标注，确认一路记外观差异一路记模态对齐

[![原论文 Figure 2：Input representations with complementary features.](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/eb5c745ba5bc/figure-2.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/eb5c745ba5bc/figure-2.png)

*论文图 2。原论文 Figure 2：“Input representations with complementary features.”。*

从像素可见，左侧从输入视频经反演到噪声图再到重建视频形成闭环，顶部残差为两者差异，右侧从去噪网络上采样块引出注意力体，下方展开显示空间、交叉与时序注意力的堆叠位置。这种画法支持论文的主张：外观证据与对齐证据来自同一生成先验的不同部位，融合后可同时捕捉全局重建偏差与局部语音嘴型失配。

看清输入后，再看检测器如何把两路特征变成一个判决，重点是编码对齐、融合与双头监督的分工。

> **看图路径：** 1. 沿左上视频合成体与左下注意力特征分别经过两个编码器再拼接的箭头走一遍；2. 确认融合解码器内部自注意力与三维卷积再到分类头与嵌入头的分叉；3. 核对底部总损失由两项加权构成的标注

[![原论文 Figure 3：The overall framework of X-AVDT. From each audio-visual pair, we form two inputs φ and ψ.](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/eb5c745ba5bc/figure-3.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/eb5c745ba5bc/figure-3.png)

*论文图 3。原论文 Figure 3：“The overall framework of X-AVDT. From each audio-visual pair, we form two inputs φ and ψ.”。*

从像素可见，左上视频合成体区分真假示例的噪声图与残差外观，左下注意力特征区分真假示例的集中程度，中间两个编码器输出经拼接与投影进入右侧融合解码器，顶部自注意力与多层 3 维卷积后接全局池化得到融合向量，再分叉为分类损失与三元组损失。这种结构说明融合不是简单的分数平均，而是在同一时空网格上先对齐再联合建模。

### 两路表示与融合解码器各自算什么？

视频合成体的计算目标是把反演引入的离散化误差模式显式化。具体做法是对输入视频编码、反演、重建、解码后，把四部分按通道拼接，帧数保持不变，通道数变为十二。论文的依据是预训练扩散模型对扩散生成内容重建更忠实，而真实内容经过往返会留下更大误差，被篡改样本则呈现更小的差异趋势，因此拼接体中的残差与噪声图解码图共同构成判别线索。但原文也提醒，面部局部篡改保留身份且伪影细微，仅靠残差容易被遮蔽，这正是引入第二路的原因。

**DDIM 反演 × 视频合成体：** DDIM 反演负责把输入视频映射回扩散模型的噪声潜变量再重建，暴露模型先验下重建难易的差异；视频合成体负责把原视频、解码后噪声图、重建视频与残差在通道维拼接成统一输入，让检测器同时看到外观与反演缺口，二者搭配把单张残差扩展为包含起点终点与过程误差的证据包。

音频视觉交叉注意力特征的计算目标是描述语音与面部运动的对应强度。在反演的某个扩散时刻，从 3 维去噪网络的上采样块取出以视频隐状态为查询、音频隐状态为键值的注意力输出，聚合多头并整理为每帧的潜分辨率网格。论文默认从最后一个上采样块在较早去噪时刻抽取，此时条件信号尚未被纹理细化淹没，语音嘴型一致性线索保留较多。消融显示交叉注意力优于时序注意力与空间注意力，因为后两者更易记录全局运动与外观姿态，对场景变化敏感，而交叉注意力聚焦发音器官附近并抑制背景。

**音频视觉交叉注意力 × 语音动作同步：** 音频视觉交叉注意力指去噪网络中以视频隐状态为查询、音频编码为键值的注意力输出，分工是记录生成器为对齐语音与嘴部运动而施加的约束；语音动作同步是要判断的物理对应关系，搭配理由是外观伪影易被新生成器抹平而内部对齐模式更稳定，组合后检测器不再只看像不像，而是看声音有没有真正驱动嘴动。

融合部分先用两个 3 维编码器把两路输入映射到时空对齐的体特征，再拼接并用逐点卷积投影为融合体，随后做空间自注意力与多层 3 维残差卷积，最后全局平均池化得到样本级向量。从该向量分出分类分值与归一化嵌入，分别对应交叉熵与三元组目标。论文把这种设计称为特征融合解码器，作用是让外观偏差与对齐偏差在同一表示中相互印证，避免单一路线的误判主导最终分数。

### 训练如何组织，哪些参数动、哪些冻结？

训练阶段优化的是检测器侧的编码器、融合解码器、分类头与嵌入头，扩散主干与音频编码器作为特征抽取器使用。论文报告的检测器训练配置为在单卡上训练两个轮次，帧尺寸为五百一十二，优化器为解耦权重衰减的自适应方法，学习率与权重衰减、批量大小均有明确数值，三元组间隔与总损失平衡系数均设为 0.3。反演与重建阶段不使用无分类器引导，以保持双向映射与条件保真。

需要指出的缺项是，原文未逐层说明扩散主干是否参与梯度更新，也未给出梯度截断位置的显式声明，因此不能从模型名称推定主干冻结或微调，只能按证据说检测器是被监督训练的部分，扩散模型是提供内部信号的先验。监督来源是真假标签提供的分类信号与三元组提供的度量结构信号，前者用二分类交叉熵，后者用锚、正、负三元组的间隔损失。

**特征融合解码器 × 三元组损失：** 特征融合解码器分工是把外观分支与对齐分支的体特征拼接到同一时空网格再做自注意力与 3 维卷积得到融合向量；三元组损失分工是在归一化嵌入空间拉近同类、推远异类，搭配原因是分类损失只管分界面而度量损失塑造类内结构，组合使融合特征既可分又紧凑，有助于跨操纵类型迁移。

数据侧的构造也在训练前完成，多模态多生成器数据集从谈话类真实视频出发，经人脸存在、单人、正侧脸、唇动稳定与场景切分等过滤，再用多种近期生成器制作配对伪造。训练集覆盖部分生成器，测试集保留未见生成器，用于检验跨生成器迁移。推理时对每个测试音视频对重复相同的反演、特征抽取与前向融合流程，输出为假概率，不涉及测试时更新。

### 数据、基线与指标如何对齐比较条件？

数据方面，论文引入的多模态多生成器数据集共 28800 个片段，总时长约 41.67 小时，涵盖谈话头生成、自重演与换脸 3 类操纵，以及对抗网络、扩散与流匹配等多类生成范式。训练用部分生成器，测试用未见生成器，这种划分直接服务于跨生成器评估。真实源视频经过时长、分辨率与人脸过滤，保留单人、正面到四分之三侧脸、唇动稳定的近景，背景与人口属性多样。

基线包括纯视频方法与多个音视频方法，分为官方预训练与在同一训练集重训两档，论文说明部分方法因无官方训练代码只能报告预训练结果，这一点在解读时必须保留，否则会误把训练数据差异当成方法差距。

**自重演 × 谈话头生成：** 自重演指用同一人驱动视频改变表情姿态，考验动作迁移后的身份保持；谈话头生成指仅给一张图加音频合成说话视频，考验语音到嘴型的从零对齐，二者分工覆盖换动作与换语音两种伪造路径，搭配评估才能说明检测器不是只记住某一种生成痕迹。

指标方面，检测性能用曲线下面积、平均精度、等错误率阈值准确率与准确率，数值越高越好；数据集质量用唇同步置信度与距离、感知距离、视频分布距离与人工误接受率，其中距离越低越好，置信度与误接受率越高表示同步越好或越难被人类识破。实现细节上，音频条件来自语音自监督特征并投影到交叉注意力维度，检测器主干用 3 维残差网络，融合栈层数固定，输入通道与注意力通道均有明确设定。训练预算报告为单卡约 14 小时，推理开销另行报告为 16 帧片段在 40 步调度下端到端约 1 分钟，这意味着训练成本与部署延迟要分开讨论，不能用训练快推定推理快。

下表先回答数据集质量问题：在相同质量指标下，新数据集的伪造是否比旧基准更同步、更逼真、更难被人类识破，指标方向为同步置信度越高越好，同步距离、感知距离与分布距离越低越好，人工误接受率越高表示越难分辨。

| Dataset | Sync-C ↑ | Sync-D ↓ | LPIPS ↓ | FVD ↓ | HFAR ↑ |
| --- | --- | --- | --- | --- | --- |
| FaceForensics++ [72] | 3.32 | 11.06 | 0.27 | 370.23 | 0.22 |
| FakeAVCeleb [39] | 5.87 | 8.38 | 0.19 | 170.61 | 0.34 |
| MMDF (Ours) | 7.36 | 7.35 | 0.07 | 121.39 | 0.41 |

表后需要点明主要收益与代价。新数据集在同步置信度、同步距离、感知距离、视频分布距离与人工误接受率上均优于所列旧基准，报告显示其伪造更连贯且更具挑战性，这支持把它用作跨生成器基准。但代价是高质量也意味着评测更严，旧方法在其上的分数下降不能直接等同于方法退化，还需结合重训对照判断是数据变难还是方法本身不迁移。未胜出项在这里是旧基准的低误接受率，说明旧伪造相对易被人类识破，这正是需要新数据集的原因，也划定了旧基准不能再作为鲁棒性终点的边界。

### 主结果在未见生成器与外部基准上说明了什么？

主结果围绕两个问题组织。第一，在新数据集的未见生成器上，本方法是否领先于同训练数据的可运行基线。第二，在外部经典基准上，从新数据集训练的模型能否迁移，且在基线占优的训练测试重叠条件下是否仍保持优势。论文报告，在新数据集平均上本方法取得最高的曲线下面积，超过最强的重训基线约数个百分点，且领先在多个生成器上保持一致，这支持内部对齐信号带来泛化增益的判断。但限制同样明确：平均领先不等于每个生成器都最优，个别生成器上基线仍接近，需要按生成器分列核对。

**交叉生成器泛化 × 未见损坏鲁棒性：** 交叉生成器泛化分工是检验在训练未见过的合成模型上是否仍有效；未见损坏鲁棒性分工是检验在压缩模糊噪声等后处理下是否仍稳定，前者针对生成器升级，后者针对传播失真，组合才能支撑真实部署的可靠性判断。

下表聚焦外部基准中的谈话类伪造子集，比较问题是训练数据一致后谁的迁移更好，公平条件是所列基线均为在新数据集训练后跨数据集评测，指标方向为越高越好。

| AVAD [24] | 74.96 | 75.88 | 66.00 | 66.79 |
| --- | --- | --- | --- | --- |
| RealForensics [32] | 83.67 | 85.56 | 71.42 | 71.42 |
| X-AVDT (Ours) | 99.69 | 99.74 | 97.85 | 98.65 |

表后解释应抓住关键数字与反例。本方法在该子集上取得接近满分的曲线下面积与准确率，明显高于同条件重训的音视频基线，这支持跨数据集迁移的结论。但同表的未胜出项值得保留：部分基线在该子集上仅略高于随机猜测，说明其学到的对齐或纹理线索未能迁移；同时原文标注部分预训练基线在原始论文训练中见过该基准，因此跨表对比官方预训练分数与重训分数时不能混为一谈，必须区分迁移评估与重叠评估。

下表转向另一经典人脸伪造基准，比较问题不变但数据分布转向早期生成痕迹，公平条件与指标方向与上表相同。

| AVAD [24] | 55.38 | 53.92 | 51.50 | 52.16 |
| --- | --- | --- | --- | --- |
| RealForensics [32] | 88.85 | 87.65 | 79.39 | 78.54 |
| X-AVDT (Ours) | 89.55 | 89.17 | 87.55 | 89.77 |

表后需要说明收益的边界。本方法在该基准上仍领先同条件基线，但绝对分数低于谈话类子集，说明早期换脸类伪造的分布与新数据集差异更大，迁移收益收窄。反例是某些基线在此出现大幅下降甚至低于随机水平，提示其对特定伪造类型的依赖；同时人类评测分数低于本方法，支持任务对人仍难但模型可利用内部信号保持稳定的判断，但这不等于模型在所有人群与场景下都稳定，因为用户研究仅覆盖有限年龄与观看条件。

关于损坏鲁棒性，论文在无增强训练后测试压缩、模糊、噪声、缩放与丢帧，报告本方法在多数强度下下降更慢，尤其在高频抑制与缩放下保持较好，但在强加性噪声下优势收窄。看图时应先确认纵轴为原始准确率类指标而非改善量，再按强度方向读趋势。

为读懂平均趋势下的例外，先建立正确的读图顺序：确认每列损坏的强度轴，再比较斜率而非单点高低。

> **看图路径：** 1. 先看横轴每种损坏的强度变化方向与纵轴指标含义；2. 对比蓝色本方法曲线与其他基线随强度加大的下降斜率；3. 重点观察噪声子图与其他子图的趋势差异

[![原论文 Figure 6：Robustness against unseen corruptions.](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/eb5c745ba5bc/figure-6.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/eb5c745ba5bc/figure-6.png)

*论文图 6。原论文 Figure 6：“Robustness against unseen corruptions.”。*

从像素可见，蓝色本方法曲线在压缩、模糊、缩放与丢帧子图中长期居上且斜率平缓，平均子图同样领先；但在噪声子图中随强度加大蓝色曲线下降更快，末端被其他曲线追近。这说明融合表示对高频丢失与尺度变化不敏感，但对强噪声仍脆弱，不能把平均领先推广为每种损坏下都最优。像素不能精确读出的具体数值不硬写，以趋势与交叉位置为准。

### 拿掉哪一路会掉点，注意力位置选错会怎样？

消融按输入表示、注意力类型与损失设计 3 组展开。输入表示方面，论文报告去掉交叉注意力、去掉视频合成体或去掉残差都会使平均指标下降，其中去掉交叉注意力下降较多，这支持两路互补而非冗余的判断。注意力类型方面，在多个扩散时刻下比较交叉、时序与空间注意力，交叉注意力在最早时刻表现最好，且随时刻变大、噪声加重与条件减弱而全面下降，这支持尽早抽取对齐信号的选择。

损失方面，加入三元组损失后各项指标均有提升，说明度量结构对分类边界有辅助作用。但原文未报告去掉分类损失只留度量损失的结果，因此不能反推度量损失可独立完成检测，只能说它是有效的辅助项。

下图用可视化补充消融的机制解释，比较问题是模型决策是否 grounding 在发音区域，条件是同一生成器的真假配对帧。

> **看图路径：** 1. 先区分上两行真样本与下两行假样本的版式；2. 观察真样本激活是否集中在嘴部附近且跨帧稳定；3. 观察假样本激活是否分散为多处热点

[![原论文 Figure 7：Grad-CAM visualizations.](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/eb5c745ba5bc/figure-7.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/eb5c745ba5bc/figure-7.png)

*论文图 7。原论文 Figure 7：“Grad-CAM visualizations. Red activation indicates regions where our model focuses most (i.e., pixels that make a strong positive contribution to the predicted class), while…”。*

从像素可见，真样本的热力集中在嘴部附近的圆形高响应区，且跨帧位置稳定；假样本的热力分散为多处不规则热点，且跨帧不一致。这种差异在 3 个生成器列中重复出现，支持检测器依赖语音嘴型一致性而非单一模型纹理的解释。但可视化只是事后归因，不能证明因果，也不能保证在无语音或多人说话场景下仍聚焦正确区域，这与论文局限部分的提醒一致。

### 代价、失效条件与未验证的推测是什么？

论文明确报告的主要代价是计算开销。对 16 帧片段，完整反演与重建在 40 步调度下端到端约需 1 分钟，这源于反演本身的迭代去噪成本。训练约 14 小时的数字不能抵扣推理延迟，实际部署需要另行优化，例如蒸馏或轻量反演，但原文仅提出方向而未验证加速后的性能保持，因此不能承诺加速无损。

第二个局限是语音依赖，在非语音段或多人说话场景下，语音驱动特征可能缺失或混淆，论文指出当前方法在此类场景仍不完善，并建议用单模态回退与非语音对应线索补充，但同样属于待验证的未来工作。第三，早期去噪时刻与特定上采样块的选择是经验最优，换主干或换生成范式后是否仍最优未被充分证明，不能把该超参数当成通用真理。

最后，人类评测与人工误接受率来自 24 人的有限用户研究，年龄与观看条件受限，相关性不等于因果，误判率、延迟与成本也未在同一口径下联合测量，因此不应对未测量量做出改善承诺。

### 要复述与复现，先固定哪些信息条件？

复现应先固定数据划分与评测口径。数据侧需按原文保留训练生成器与测试生成器的划分，真实视频保留单人、正面到四分之三侧脸、唇动稳定与无场景切分的过滤逻辑，片段数与总时长的量级作为完整性校验。特征侧需固定音频条件来源、扩散主干、反演步数、抽取块位置与扩散时刻，以及视频合成体的四分量拼接顺序与注意力张量的帧对齐整理方式，任何改动都会改变证据含义。

模型侧需固定双编码器与融合解码器的结构、融合向量后的双头设计，以及分类与三元组损失的权重与间隔，训练轮次、批量大小、学习率与权重衰减按原文设置。评测侧需同时报告曲线下面积、平均精度、等错误率准确率与准确率，并区分官方预训练、重训后跨数据集与训练测试重叠 3 种条件，避免把重叠分数当成泛化分数。硬件预算至少记录训练单卡型号与时长、推理每片段耗时与步数，因为这是判断方法是否可部署的关键。

由于本次未获得可验证的代码与权重资源，不应假设下载即运行，复现起点应是按论文描述重新实现反演与融合流程，并先在小规模配对数据上验证残差与注意力两路是否均能前向产出，再扩大到全量训练。

### 何时值得尝试这个思路，还差哪项验证？

当任务同时满足 3 个条件时，这个思路值得优先尝试：输入天然包含同步音频，测试分布可能包含训练未见的合成模型，且应用能容忍较重的离线反演开销。此时把生成器内部的交叉注意力作为显式对齐探针，比只在像素残差上做文章更可能迁移。相反，若场景多为无声、嘈杂多人或需要实时判定，则应先补单模态回退与轻量反演验证，否则语音依赖与延迟会成为瓶颈。

还需补的验证包括换扩散主干后的最优抽取位置是否稳定、强噪声与丢帧下的失效阈值、以及与搜索最优或事后阈值区分开的可部署阈值收益。总体而言，论文直接报告的是双路融合在新基准与外部基准上的领先与互补消融，有限解释是内部对齐信号更具生成器无关性，未验证的是加速、无语音泛化与更广人群场景下的稳定性，复现与选型应围绕这 3 层证据展开。

## 📐 原文公式与排版

以下展示论文原页中的数学表达区域，保留原始上下标、分式和符号排版。区域序号仅用于本文导航，不是论文公式编号。

[![原文数学表达区域 1，PDF 第 3 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/49e5054270c7/figure-1.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/49e5054270c7/figure-1.png)

区域 1 · [查看论文原页](https://openaccess.thecvf.com/content/CVPR2026/papers/Kim_X-AVDT_Audio-Visual_Cross-Attention_for_Robust_Deepfake_Detection_CVPR_2026_paper.pdf#page=3)

[![原文数学表达区域 2，PDF 第 3 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/49e5054270c7/figure-2.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/49e5054270c7/figure-2.png)

区域 2 · [查看论文原页](https://openaccess.thecvf.com/content/CVPR2026/papers/Kim_X-AVDT_Audio-Visual_Cross-Attention_for_Robust_Deepfake_Detection_CVPR_2026_paper.pdf#page=3)

[![原文数学表达区域 3，PDF 第 3 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/49e5054270c7/figure-3.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/49e5054270c7/figure-3.png)

区域 3 · [查看论文原页](https://openaccess.thecvf.com/content/CVPR2026/papers/Kim_X-AVDT_Audio-Visual_Cross-Attention_for_Robust_Deepfake_Detection_CVPR_2026_paper.pdf#page=3)

[![原文数学表达区域 4，PDF 第 4 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/49e5054270c7/figure-4.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/49e5054270c7/figure-4.png)

区域 4 · [查看论文原页](https://openaccess.thecvf.com/content/CVPR2026/papers/Kim_X-AVDT_Audio-Visual_Cross-Attention_for_Robust_Deepfake_Detection_CVPR_2026_paper.pdf#page=4)

[![原文数学表达区域 5，PDF 第 5 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/49e5054270c7/figure-5.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/49e5054270c7/figure-5.png)

区域 5 · [查看论文原页](https://openaccess.thecvf.com/content/CVPR2026/papers/Kim_X-AVDT_Audio-Visual_Cross-Attention_for_Robust_Deepfake_Detection_CVPR_2026_paper.pdf#page=5)

[![原文数学表达区域 6，PDF 第 5 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/49e5054270c7/figure-6.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/49e5054270c7/figure-6.png)

区域 6 · [查看论文原页](https://openaccess.thecvf.com/content/CVPR2026/papers/Kim_X-AVDT_Audio-Visual_Cross-Attention_for_Robust_Deepfake_Detection_CVPR_2026_paper.pdf#page=5)

[![原文数学表达区域 7，PDF 第 5 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/49e5054270c7/figure-7.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/49e5054270c7/figure-7.png)

区域 7 · [查看论文原页](https://openaccess.thecvf.com/content/CVPR2026/papers/Kim_X-AVDT_Audio-Visual_Cross-Attention_for_Robust_Deepfake_Detection_CVPR_2026_paper.pdf#page=5)

[![原文数学表达区域 8，PDF 第 5 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/49e5054270c7/figure-8.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/49e5054270c7/figure-8.png)

区域 8 · [查看论文原页](https://openaccess.thecvf.com/content/CVPR2026/papers/Kim_X-AVDT_Audio-Visual_Cross-Attention_for_Robust_Deepfake_Detection_CVPR_2026_paper.pdf#page=5)

[![原文数学表达区域 9，PDF 第 7 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/49e5054270c7/figure-9.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/49e5054270c7/figure-9.png)

区域 9 · [查看论文原页](https://openaccess.thecvf.com/content/CVPR2026/papers/Kim_X-AVDT_Audio-Visual_Cross-Attention_for_Robust_Deepfake_Detection_CVPR_2026_paper.pdf#page=7)

[![原文数学表达区域 10，PDF 第 7 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/49e5054270c7/figure-10.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/49e5054270c7/figure-10.png)

区域 10 · [查看论文原页](https://openaccess.thecvf.com/content/CVPR2026/papers/Kim_X-AVDT_Audio-Visual_Cross-Attention_for_Robust_Deepfake_Detection_CVPR_2026_paper.pdf#page=7)

[![原文数学表达区域 11，PDF 第 7 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/49e5054270c7/figure-11.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/49e5054270c7/figure-11.png)

区域 11 · [查看论文原页](https://openaccess.thecvf.com/content/CVPR2026/papers/Kim_X-AVDT_Audio-Visual_Cross-Attention_for_Robust_Deepfake_Detection_CVPR_2026_paper.pdf#page=7)

另有 21 个候选区域因边界不明确或图片数量、尺寸限制未展开；请[查看完整论文](https://openaccess.thecvf.com/content/CVPR2026/papers/Kim_X-AVDT_Audio-Visual_Cross-Attention_for_Robust_Deepfake_Detection_CVPR_2026_paper.pdf)中的原始排版。

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。
- 评分规则：type-aware-v1
- 评分模型：muse-spark-1.3-contributor
- 评分请求协议：openai_responses

---

[← 返回 cvpr-2026 论文汇总](/posts/conference-cvpr-2026/)
