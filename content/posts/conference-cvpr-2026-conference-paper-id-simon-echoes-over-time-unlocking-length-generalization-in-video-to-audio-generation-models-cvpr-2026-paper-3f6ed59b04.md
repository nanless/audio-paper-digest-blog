---
title: "Echoes Over Time: Unlocking Length Generalization in Video-to-Audio Generation Models"
date: 2026-09-13
draft: false
description: "针对只用 8 秒短片段训练却要在数十秒到 5 分钟长视频上生成对齐音频的问题，论文用非因果 Mamba-2 替换位置编码依赖并以分层压缩加时间与多模态路由做对齐，在 UnAV100 与 LongVale 长测上取得分布与同步优势，代价是阈值与压缩结构需要仔细选择。"
tags: ["状态空间模型", "长音频处理", "音视频", "视频到声音生成"]
categories: ["cvpr-2026 论文"]
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_paper_id: "conference:cvpr:2026:conference-paper-id:Simon_Echoes_Over_Time_Unlocking_Length_Generalization_in_Video-to-Audio_Generation_Models_CVPR_2026_paper"
paper_digest_source_kind: conference
paper_digest_conference_id: "cvpr-2026"
paper_digest_conference_record_url: "https://openaccess.thecvf.com/content/CVPR2026/html/Simon_Echoes_Over_Time_Unlocking_Length_Generalization_in_Video-to-Audio_Generation_Models_CVPR_2026_paper.html"
paper_digest_conference_pdf_url: "https://openaccess.thecvf.com/content/CVPR2026/papers/Simon_Echoes_Over_Time_Unlocking_Length_Generalization_in_Video-to-Audio_Generation_Models_CVPR_2026_paper.pdf"
paper_digest_api_reader_contract: "beginner-researcher-v3"
paper_digest_api_reader_article_sha256: "343155b4c22baa4f5999468c6996b6dc90e7b1846cb665a3646910949c41c116"
paper_digest_api_reader_plan_sha256: "0a4ee43c20f37390dd0c6ab3b87c3a76f87bb4dca5809fc9a738ce761091612e"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings-v4"
paper_digest_api_reader_source_bindings_sha256: "93538bdc4820d9520827d6a49ba6e1c9f11b17de81e704db31eae5433dba621a"
paper_digest_api_reader_source_table_count: 2
paper_digest_api_reader_source_formula_count: 0
paper_digest_api_reader_structured_artifacts_sha256: "0b7851af1b0fad6af4f591734e1c0fc05552b476ac4d802a2274f1e0e9f184e9"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity-v1"
paper_digest_api_reader_author_identity_sha256: "ecf8fd7fd6253a34eebc74bcf1caec238103d8dbe82454206df327b538e36a32"
paper_digest_api_reader_author_count: 11
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity-v1"
paper_digest_api_reader_resource_identity_sha256: "c4df7ee02c05fda1afee4697f4a0b7bf55c85a2b3dd658e6085e1af8f2cb77e5"
paper_digest_api_reader_resource_count: 1
paper_digest_api_reader_decision_projection: "api-reader-decision-projection-v2"
paper_digest_scoring_contract: "api-scoring-audit-v2"
paper_digest_taxonomy_contract: "paper-taxonomy-flat-tags-compat-v1"
paper_digest_taxonomy_selection_contract: "paper-taxonomy-selection-v1"
paper_digest_taxonomy_registry_version: "paper-taxonomy-v1"
paper_digest_taxonomy_registry_sha256: "15c82a567ce5a55dc1175684ed08b64c158558639d9c8fb822c9587ec32a8778"
paper_digest_taxonomy_concepts: [{"facet":"method","id":"method.state-space","label":"状态空间模型"},{"facet":"setting","id":"setting.long-audio","label":"长音频处理"},{"facet":"signal","id":"signal.audiovisual","label":"音视频"},{"facet":"task","id":"task.video-to-audio","label":"视频到声音生成"}]
paper_digest_primary_task: "视频到声音生成"
paper_digest_primary_method: "状态空间模型"
paper_digest_score: 6.8
paper_digest_rank_bucket: "前50%"
paper_digest_document_type: "方法研究"
paper_digest_conference_structure: replayable-pdf-layout-v1
---

# 📄 短训长测：用分层路由与非因果 Mamba 做长视频配音

> 英文题目：*Echoes Over Time: Unlocking Length Generalization in Video-to-Audio Generation Models*

> 会议身份：`conference:cvpr:2026:conference-paper-id:Simon_Echoes_Over_Time_Unlocking_Length_Generalization_in_Video-to-Audio_Generation_Models_CVPR_2026_paper`


> ✅ 来源为官方会议 PDF；表格与 Figure 按原文证据绑定。PDF 公式以原页区域图片展示，未冒称作者原始 TeX。

> 会议来源：[官方记录](https://openaccess.thecvf.com/content/CVPR2026/html/Simon_Echoes_Over_Time_Unlocking_Length_Generalization_in_Video-to-Audio_Generation_Models_CVPR_2026_paper.html) · [官方 PDF](https://openaccess.thecvf.com/content/CVPR2026/papers/Simon_Echoes_Over_Time_Unlocking_Length_Generalization_in_Video-to-Audio_Generation_Models_CVPR_2026_paper.pdf)

标签：#状态空间模型 #长音频处理 #音视频 #视频到声音生成

评分：**6.8/10** | 创新 1.5/2 | 技术严谨 1.0/1.5 | 实验充分 1.2/1.5 | 清晰度 0.7/1 | 影响力 1.1/1.5 | 开源 0.2/1.5 | 可复现 0.1/0.5 | 工程/实践 1.0/1.5

排名：前50% | 文档类型：方法研究

## 👥 作者与机构

- Christian Simon：机构信息未能从会议 PDF 纯文本可靠映射
- Masato Ishii：机构信息未能从会议 PDF 纯文本可靠映射
- Wei-Yao Wang：机构信息未能从会议 PDF 纯文本可靠映射
- Koichi Saito：机构信息未能从会议 PDF 纯文本可靠映射
- Akio Hayakawa：机构信息未能从会议 PDF 纯文本可靠映射
- Dongseok Shim：机构信息未能从会议 PDF 纯文本可靠映射
- Zhi Zhong：机构信息未能从会议 PDF 纯文本可靠映射
- Shuyang Cui：机构信息未能从会议 PDF 纯文本可靠映射
- Takashi Shibuya：机构信息未能从会议 PDF 纯文本可靠映射
- Shusuke Takahashi：机构信息未能从会议 PDF 纯文本可靠映射
- Yuki Mitsufuji：机构信息未能从会议 PDF 纯文本可靠映射

## 📌 核心摘要

长视频到音频需以无声长视频与文本为条件生成语义对齐且时间同步的长音频，训练仅有8秒短片段而测试需泛化至10秒到500秒以上，Transformer依赖位置嵌入与注意力外推在变长时显著退化，分段独立生成又割裂长程上下文导致失同步与质量下降。MMHNet以多模态流匹配主干为基础，先由时间路由与多模态路由筛选关键标记并压缩冗余进入压缩空间做跨模态对齐，再经解块与上采样恢复原始分辨率合成细节，前一步压缩输出直接进入下一步主网络处理。单模态块中的注意力被非因果Mamba-2替代，以全向状态传递建模全局依赖，天然不需要位置嵌入，推理时无需NTK缩放或插值。与LoVA等DiT架构及自回归与智能体分段方案的关键差异在于分层压缩路由降低时序复杂度并增强对齐，而非因果状态传递避免位置外推失效，具有长时一致性实际意义。在UnAV100评测下，阈值0.3条件的IB-Score为33.44，高于Transformers核心网络的IB-Score的28.41。该结论在10秒至60秒分段上较平稳，但对超过5分钟与强非平稳场景的适用边界尚未验证并受限于分块评测可能掩盖长程不一致，且原文未披露训练、推理或部署成本。

## 🔗 开源与复现资源

- 演示资源：<https://echoesovertime.github.io> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 输入是什么，输出是什么，为什么长视频更难？

这篇论文研究的输入是无声视频加可选的文本描述，输出是与画面语义和时间都对得上的声音。对于刚入门的同学，可以把视频到音频生成理解为给默片配音：看到乒乓球弹跳就要在对应时刻给出清脆的撞击声，看到汽车行驶与撞车就要区分引擎声与撞击声，背景有人说话时也不能把球声丢掉。训练时论文只用固定长度的短片段，测试时却要求输出几十秒到数分钟的可变长音频，这就是长度泛化。

短片段训练省数据、省显存，但长视频里事件更多、场景会切换、相似帧大量重复，模型若只记住短长度的位置规律，长测时就会错位或质量下滑。论文还指出把长视频切成多段各自生成再拼接的做法容易出现接缝不连贯、事件不对齐、整体质量下降，因为每段看不到全局上下文。所以本节要记住的复述点是：输入是长视频帧加文本，输出是长音频波形，难点不是单段好不好听，而是在没见过的长度上仍保持语义对、时间准、听感稳。

### 已有路线各解决了什么，还缺哪一块？

按同输入同目标来对照，视频到音频主要有两条路线。第一条是把视觉特征注入已有的文本到音频模型，例如在文本扩散模型上再加视觉与文本嵌入，优点是能复用音频生成能力，缺点是视频帧级信息与文本描述之间本来就不完全对应，长时对齐仍难。第二条是从头训练视频到音频模型，包括基于扩散或流匹配的方法和基于自回归逐帧预测的方法，前者在短片段上质量好，后者天然能往后多走几步，但长序列上容易累积误差而漂移。

论文把对比锚定在长视频到音频这个运行阶段：近期面向长视频的方法在 1 分钟以上仍会退化，基于智能体把长视频分段再协作的方法又需要每段的准确文本和转场控制。按同监督来对照，这些基线大多依赖 Transformer 加显式位置编码，训练长度固定，推理变长时需要插值或核缩放等额外调整。

论文要补的缺口正是训练短、测试长且推理时不改结构：不用为每个长度重调位置编码，也不用切段拼接，而是让主干本身对标记数变化不敏感，同时用压缩与路由减少长序列的冗余计算。

### 短训长测的任务定义与预实验看到了什么？

论文把长视频到音频任务明确框定为训练用固定长度短片段、推理要求输出可变长音频。上排是短视频与短音频，下排是更长的视频与音频，箭头强调从短到长的泛化要求。这个定义对复述很关键：训练与测试的长度分布不一致，评价必须按不同持续时间分组看，而不是只报一个平均分。

> **看图路径：** 1. 先看上排训练条带标注的 8 秒固定长度与下排测试条带的 60 秒可变长度；2. 再看左右两组波形长度差异，确认任务是从短定长到长变长的泛化；3. 最后看右上角 Train Short 到 Test Long 的箭头，明确训练与推理的长度不一致

[![原论文 Figure 1：Long-Video to Audio (LV2A) task overview.](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/7f156fa901d6/figure-1.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/7f156fa901d6/figure-1.png)

*论文图 1。原论文 Figure 1：“Long-Video to Audio (LV2A) task overview.”。*

从像素上可以确认，训练条带明确标为 8 秒，测试条带延伸到 60 秒量级，波形也从短定长变为长变长，这与正文所说的只用短片段训练、测更长序列是一致的。预实验进一步拆了位置编码的作用。作者观察到，去掉位置编码后注意力本身是无序的，模型容易被显著视觉对象主导，对不同时刻生成同质化声音；加上并调整位置编码后，对齐有所改善，但长序列后段质量仍会下降。

图注与正文都报告在 UnAV100 上随持续时间增加，分布匹配与多模态对齐分数都下滑，无位置编码的版本在分布匹配上最差。这个预实验的教学意义是：位置编码不是可有可无的装饰，它提供顺序感，但固定写法在变长时会成为泛化负担，这就引出了后文用无位置编码主干加路由的动机。

> **看图路径：** 1. 先看顶部 A 到 C 三个视频场景的时间箭头，确认场景在变化；2. 再对比左下无位置编码与中下有位置编码的两排频谱在 C 段的差异；3. 最后看右侧随持续时间变化的两条性能曲线走向，确认两者都随变长而变差

[![原论文 Figure 2：We analyze the role of positional embeddings in V2A models such as MMAudio \[4\], built on MMDiT \[22\].](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/7f156fa901d6/figure-2.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/7f156fa901d6/figure-2.png)

*论文图 2。原论文 Figure 2：“We analyze the role of positional embeddings in V2A models such as MMAudio [4], built on MMDiT [22].”。*

从像素上可以执行 3 个观察：顶部赛车行驶、撞车、车内视角 3 个场景确实随时间切换；左下无位置编码的频谱在不同时刻更相似，右下有位置编码的频谱变化更多但后段出现大块平坦；右侧两条曲线随持续时间拉长分别向上或向下走，说明变长带来了可测的退化。

### MMHNet 的全景：一个样本走完输入到输出

跟着一个样本走一遍最容易记住全景。输入有 3 路：视频的语义特征与同步特征、文本特征、以及推理起点是噪声、训练时是真实音频潜变量。先经过两种路由与分块，把大量原始标记压成较少的压缩标记；然后在压缩空间走多模态块与单模态块组成的主网络，做跨模态对齐与去噪方向估计；再经解块还原回原始长度，在原始空间再走一遍多模态与单模态主网络做细节精修。

最后经输出块得到流，即每一步应走的速度方向，积分后得到音频。论文强调早层在压缩空间对齐是为了利用视听重叠与事件重复来降冗余，后层回到原始分辨率是为了保留细节。基座沿用了多模态扩散变换器的多流思想：多模态块处理多路标记，单模态块加深网络而不让每层都处理全部模态。全局条件通过自适应层归一化注入，平均池化后的视觉与文本特征形成共享向量，另有标记级条件帮助局部同步。

> **看图路径：** 1. 先沿左侧条件经路由到分块再到压缩空间主网络最后到输出流的主路径看一遍；2. 再看中间时间路由里按时间偏移比较相似度并生成标记掩码的位置；3. 最后看右侧多模态路由里视频特征与文本标记按最大相似度配对的位置

[![原论文 Figure 3：Overview of our proposed framework.](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/7f156fa901d6/figure-3.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/7f156fa901d6/figure-3.png)

*论文图 3。原论文 Figure 3：“Overview of our proposed framework. Left: A comprehensive end-to-end flow-matching model that operates across both multimodal and single-modal blocks, handling inputs in both…”。*

从像素上可以确认左侧纵向主路径确实分为压缩空间与原始空间两段，每段都标有多模态块与单模态块的数量符号，顶部条件经两种路由进入分块，底部统一汇到输出流；中间面板标注按时间偏移取最小相似度并生成标记掩码，右侧面板标注按多模态取最大相似度并生成标记掩码，两侧都经过分块、主网络、解块的 3 段式，这与正文的时间路由留差异、多模态路由留高相关的文字描述相互印证。

### 主干为何换成非因果 Mamba-2？

传统注意力要靠显式位置编码计算查询与键的分数，训练时固定的编码在推理标记数变化时不易外推，长序列还需要额外的位置缩放。论文因此把单模态块里的注意力换成 Mamba-2，它用状态空间形式以自适应标记提供上下文给转移矩阵，不依赖位置向量。更关键的是选择非因果版本：视频条件是离线可得的，不需要严格从左到右逐个处理；多模态融合也没有天然顺序，因果单向流动需要多次扫描才能融合，还会出现条件信号随时间衰减的问题。

非因果通过全向隐状态让多模态同时汇合，结构掩码不再做跨时间的累积乘积，从而对长程依赖更稳定。复述时要说清因果与非因果的区别不在参数量大小，而在信息能否双向流动以及掩码是否累积衰减。论文的消融也直接比较了无位置编码的 Transformer、因果 Mamba-2 与非因果 Mamba-2，结论是非因果在长表上更稳，这支持了主干替换的安排理由。

**非因果 Mamba-2 × 位置编码：** 位置编码负责给 Transformer 的查询与键提供顺序感，非因果 Mamba-2 负责用状态空间递推在无显式位置向量下建模长序列，分工是前者靠外加向量区分先后、后者靠状态转移保留上下文，搭配理由是长测时标记数变化会使固定位置编码外推失效，组合意义是用去掉位置编码的全局双向状态传递来支撑长度泛化。

对初学者而言，可以把位置编码想象成给每个座位贴固定号码，换更大的教室就对不上号；状态空间则像靠传递笔记本记住上下文，教室变大仍能继续传递。论文的例子是赛车视频：没有顺序感时撞车声会铺满全段，有了顺序感但外推不好时后段会糊掉，非因果状态传递的目标就是在变长时仍能区分先行驶后撞车的先后。

### 两种路由与分块解块如何协同压冗余？

长音视频的冗余来自两处：时间上相邻帧高度相似，模态间同一时刻的视听内容高度重叠。时间路由的做法是比较当前标记与前一标记经线性投影后的余弦相似度，相似度高说明没有事件切换就掩掉，留下差异大的边界标记。多模态路由的做法是比较一种模态与参考模态之间的相似度，相似度高说明跨模态强相关就留下，送入主网络做融合。阈值设为 0.5，只有超过该相似度的才被选中，论文报告 0.5 在各项指标上最强。

分块采用直接选取被标记为边界的向量，简单有效；解块则按选中概率与未选中概率做上采样，并用直通估计器让梯度能流过离散选择。整个协同是先路由打分、再分块压缩、主网络处理、解块还原，压缩空间负责高效对齐，原始空间负责细节恢复。

**时间路由 × 多模态路由：** 时间路由负责在单条时间轴上按前后帧相似度筛掉冗余并保留事件边界，多模态路由负责按音频视觉或文本与视觉之间的相似度挑出跨模态强相关的标记，分工是一个压时间冗余、一个压模态冗余，搭配理由是长音视频有大量重复帧与重叠事件，组合意义是只把关键标记送入压缩空间的主网络以降低复杂度并改善对齐。

**分块压缩 × 解块还原：** 分块压缩负责按边界指示把编码器输出选成更少的向量集合，解块还原负责把主网络处理后的压缩标记按权重放回原始长度，分工是前者决定留下哪些位置、后者决定如何恢复细节，搭配理由是早层在压缩空间做多模态对齐更高效、后层仍需全分辨率做精细生成，组合意义是用直通估计器保持可微的选与放。

举一个教学例子：乒乓球连续弹跳时，大量静音或背景谈话帧是冗余，时间路由会丢掉高度相似的静默段而保留每次弹跳的突变；文本说乒乓球而画面也是球台时，多模态路由会保留这些高相关的文本标记去指导声音类别。例子只是帮助理解选择逻辑，不代表论文给出过逐帧的选中率数值。

### 训练目标、数据与模型规模如何安排？

论文用条件流匹配做生成建模。训练时在 0 到 1 之间均匀采样时间步，把起点噪声与终点真实音频潜变量做直线插值，网络预测该点的速度，真值速度是终点减起点，损失是两者均方差。推理时从标准正态采噪声，用常微分方程求解器从 0 积分到 1，沿着学到的速度场走到音频。训练数据是在 8 秒音视频数据上训练，另加若干文本到音频数据集以支持多模态联合训练，评价则用更长的 UnAV100 与 LongVale。

模型分大小两档：小版本用较少的多模态块与单模态块，大版本把两类块数都加深，参数量从百兆量级到十亿量级。条件特征来自冻结的预训练模型，包括语义的视觉特征、运动音频同步特征与文本特征，全局向量经自适应层归一化注入。需要如实说明的缺项是：原文未完整报告优化器、学习率、步数与硬件预算，补充材料才有细节，正文只给了块数与训练长度，因此复现时不能从模型名推定训练超参数。

**流匹配 × 速度场：** 流匹配负责给出从噪声到真实音频潜变量的训练目标，速度场是被学习的参数化向量场，分工是前者定插值路径与回归损失、后者定每一步的运动方向，搭配理由是在潜空间做常微分方程积分即可采样，组合意义是训练时回归直线速度、推理时积分速度场得到音频。

下表把可核对的训练与评测长度条件整理成五列，数值与单位保留原文写法，表头只做中文转述而不改动数值本身。表前的问题是：训练到底用了多长，测试到底有多长，模型规模如何分档，比较是否在同训练长度下做长测。公平条件是所有长测方法都只看短训长测的泛化，而不是用长数据微调后的成绩。指标方向在后文结果节统一说明，这里先核对条件是否一致。

| 数据与模型条件 | 训练片段长度 | UnAV100 测试规模与时长 | LongVale 测试规模与时长 | 模型分档块数 |
| --- | --- | --- | --- | --- |
| 短训长测设置 | 8 seconds | ∼2K videos with durations of 10-60 seconds | around 1K test videos ranging from 10 to 500 seconds | N = 5 and N ′ = 4 for S, N = 10 and N = 7 for L |

表后需要强调代价与边界：只用 8 秒训练确实省数据，但也意味着模型从未见过分钟级事件结构，长测成绩依赖主干与路由的外推，而非见过长样本。UnAV100 最长到 60 秒量级，LongVale 可到 500 秒量级，两者难度不同，不能把 2 个数据集的分数直接平均。块数加深会增加容量，但论文未报告训练时长与显存，部署成本需待验证。

### 在什么数据、基线与指标下比较？

评测数据是 UnAV100 与 LongVale，前者测试集约 2000 条、时长 10 到 60 秒，后者约 1000 条、时长 10 到 500 秒，另在 VGGSound 上做固定时长约 10 秒的对照以确认短长一致时没有退化。基线覆盖了同任务的可运行方法：MMAudio 大小版本及其加神经正切核位置缩放的版本、面向长视频的 LoVA、自回归的 V-AURA、以及参数量更大的混元视频配音模型。比较条件是所有方法都面对长视频输入，论文的方法在推理时不做结构调整，而位置编码基线需要按时长做频率缩放。

指标分 4 组：分布匹配用基于音频嵌入的弗雷歇距离与散度，数值越小越好；音频质量用启动分数，越大越好；语义对齐用图文音频跨模态余弦的平均分，越大越好；时间同步用同步器估计的音画偏移秒数，越小越好。由于分类器只在短时长上训练，论文对长音频采用多块切分再聚合的评估，以减少分类器直接吃长音频的误差。

项目页当前可用，资源状态显示演示链接可达，这为听感核对提供了通道，但分数仍以论文表格为准。

### 主结果：长测上赢在哪里，短测上有无代价？

主结果按问题组织：测的是短训后在变长上的泛化，与谁比是上述可运行的长短基线，条件是同为长视频输入，指标方向是分布距离与偏移越小越好、对齐与质量分越大越好。论文报告在 UnAV100 上视频音频对齐分明显领先混元大模型约 3.9 分，去同步偏移也更小；在 LongVale 上比次优方法在去同步上好约 0.23 分，而 LongVale 包含更长的样本，这说明之前的方法在很长视频上的对齐与同步更吃力。

在 VGGSound 固定时长上，论文方法与强基线基本持平，部分质量分更高，说明为长泛化做的结构没有明显牺牲短测。频谱可视化显示，在乒乓球多跳与背景谈话并存的片段，论文方法保留了多次弹跳声，而对比方法漏掉或混杂，这支持了路由保留事件边界的解释。但也要看到限制：总体趋势不等于每个时长都赢，论文用按时长分组的曲线表明基线在某些短段仍可接近，优势主要在拉长后扩大。

**分布匹配 × 多模态对齐：** 分布匹配负责衡量生成音频的统计特征是否接近真实音频，多模态对齐负责衡量音频与视频语义及时间是否对应，分工是前者看像不像真声音、后者看跟不跟画面，搭配理由是长视频中好听但不对版同样不可用，组合意义是必须同时报告两类指标才能判断长度泛化是否成立。

下表把论文文字中直接报告的关键幅度整理成五列，便于复述时区分相对变化与绝对偏移，数值保留原文的点数与分数写法。表前的问题是：退化幅度有多大，阈值选多少，领先幅度是否可运行基线上的真实收益。公平条件是都用原文的同一评估切块与聚合方式，方向是分布距离与偏移向下为好。

| 报告对象 | 分布退化幅度 | 对齐退化幅度 | 最优阈值 | 长测领先幅度 |
| --- | --- | --- | --- | --- |
| Transformer 基线与本方法 | 3-4 points drop for FDP ANNs | 3-4 points drop for IB scores | threshold of 0.5 | 0.23 on DeSync scores |

表后要讲清收益与代价：领先 0.23 秒级偏移与数点分布差距是在长视频上的可运行收益，但它依赖 0.5 阈值的选择与分层压缩，若阈值过高会丢事件、过低则压不住冗余。未胜出项也要保留：自回归方法在短段可能不差，但在长度泛化上整体落后；大参数混元模型并未在长对齐上自动胜出，说明参数量不是长泛化的充分条件。原文补充说明生成可达 5 分钟以上，但表格最长分组只到 60 秒与 500 秒分布，更长时的逐段分数需看补充材料，不宜把末步结果推广到全程。

### 反证：换主干、去分层、改阈值会发生什么？

消融围绕 3 个可操作的问题。第一是主干类型：去掉位置编码的 Transformer、因果 Mamba-2、非因果 Mamba-2 三者在 UnAV100 与 LongVale 上对比，论文显示非因果在分布与对齐上更稳，因果按序扫描在多模态融合与长程保持上吃亏，无位置编码的 Transformer 则因无序注意力而同质化。这支持了用非因果替代注意力的安排，而非仅为省位置编码。第二是分层与否：非分层直接在原始空间处理全部标记，分层先压缩再还原，论文报告分层在长表上对齐更好，说明压缩不是单纯加速，而是通过去冗余改善了跨模态匹配。

第三是阈值：系统扫多个阈值，0.5 在各项指标上最强，0.7 时性能急剧恶化，0.3 与 0.6 介于中间，这说明选择过严会丢关键事件，过松则压缩不足。按时长分组的曲线还显示，基线的分布距离随 40 到 60 秒明显上扬，而论文方法更平稳。复述时不要补写拿掉某模块必然崩溃的因果断言，只能说在该数据与该评估下观察到上述排序，换数据或换分类器可能变化。

### 哪些还没测，哪些不能承诺？

首先是指标边界：自动的分布、质量、对齐与同步分不能等同于人评，论文未报告误判率与主观听感的大规模对照，也未测量延迟、吞吐与显存，推理开销与输出帧率需分别讨论，不能从分数好推出实时可用。其次是数据边界：训练只见过 8 秒结构，对分钟级叙事、稀疏事件、强混响等长尾是否成立未充分分组，长于评测分布的表现待验证。再次是实现缺项：优化器、学习率、采样步数、硬件预算在正文不全，阈值 0.5 是否跨数据集稳定也只在 UnAV100 上系统报告，LongVale 上的阈值敏感性信息不足。

最后是冲突与口径：不同嵌入与采样率的分类器对长音频需切块聚合，切块长度与聚合方式会影响绝对值，跨表比较必须核对同一数据集、同一阶段、同一聚合对象，数值相同也不代表同一指标。缺失证据不是技术错误，但复述时要用报告显示表达已测，用可能待验证表达外推，例如更长时的稳定性与更复杂转场的连续性仍是待验证。

### 要复现先做什么，需要保留哪些条件？

复现的第一步是锁定条件：训练只用 8 秒片段，测试按 10 到 60 秒与 10 到 500 秒分组，块数按大小档设置，条件特征用语义视觉、同步特征与文本特征 3 路，评估用多块切分以适配短时分类器。先跑 VGGSound 固定时长对照，确认短测与强基线持平，再跑 UnAV100 按时长分组，确认分布距离不随拉长而陡增，最后才跑 LongVale 的最长组。关键超参数中唯一在正文明确最优的是路由阈值 0.5，其他训练细节需查补充材料与代码，不从模型名推定。

信息条件上要区分三件事：论文有演示页当前可用，不等于训练代码与权重已公开；基线的位置缩放版本是推理时调整，不等于重训练；切块评估是为适配分类器，不等于真实长音频的端到端人评。若要补验证，建议加三项：阈值在 LongVale 上的敏感性、按事件密度分组的对齐分、以及推理显存与时长关系曲线，这些正是判断分层路由是否真省成本的关键。

### 何时值得尝试，一句话如何复述方法？

当你的任务也是训练只有短片段、部署却要出长音频，且不希望为每个长度重调位置编码或做分段拼接时，这套方法值得尝试：用非因果状态空间换掉位置敏感的注意力，用时间与多模态路由把长序列压到压缩空间做对齐，再解块回全分辨率做细节。复述方法时可以这样讲：模型在 8 秒上学流匹配的速度场，推理从噪声积分到音频；早层靠路由选边界与强相关标记做高效融合，后层还原长度保细节；评测在 UnAV100 与 LongVale 上同时看分布距离、对齐分与同步偏移，长组优势更大。

收束时要保留适用条件与代价：优势依赖 0.5 阈值与分层结构，短测无明显代价但长尾与成本待补测，自动分好不等于人耳与实时都好。记住这 3 组对照就能向同学讲清全文：无位置编码会同质化、有位置编码难外推、非因果加路由在变长时更稳。

## 📐 原文公式与排版

以下展示论文原页中的数学表达区域，保留原始上下标、分式和符号排版。区域序号仅用于本文导航，不是论文公式编号。

[![原文数学表达区域 1，PDF 第 4 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/1cce66890ce7/figure-1.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/1cce66890ce7/figure-1.png)

区域 1 · [查看论文原页](https://openaccess.thecvf.com/content/CVPR2026/papers/Simon_Echoes_Over_Time_Unlocking_Length_Generalization_in_Video-to-Audio_Generation_Models_CVPR_2026_paper.pdf#page=4)

[![原文数学表达区域 2，PDF 第 4 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/1cce66890ce7/figure-2.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/1cce66890ce7/figure-2.png)

区域 2 · [查看论文原页](https://openaccess.thecvf.com/content/CVPR2026/papers/Simon_Echoes_Over_Time_Unlocking_Length_Generalization_in_Video-to-Audio_Generation_Models_CVPR_2026_paper.pdf#page=4)

[![原文数学表达区域 3，PDF 第 4 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/1cce66890ce7/figure-3.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/1cce66890ce7/figure-3.png)

区域 3 · [查看论文原页](https://openaccess.thecvf.com/content/CVPR2026/papers/Simon_Echoes_Over_Time_Unlocking_Length_Generalization_in_Video-to-Audio_Generation_Models_CVPR_2026_paper.pdf#page=4)

[![原文数学表达区域 4，PDF 第 4 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/1cce66890ce7/figure-4.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/1cce66890ce7/figure-4.png)

区域 4 · [查看论文原页](https://openaccess.thecvf.com/content/CVPR2026/papers/Simon_Echoes_Over_Time_Unlocking_Length_Generalization_in_Video-to-Audio_Generation_Models_CVPR_2026_paper.pdf#page=4)

[![原文数学表达区域 5，PDF 第 5 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/1cce66890ce7/figure-5.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/1cce66890ce7/figure-5.png)

区域 5 · [查看论文原页](https://openaccess.thecvf.com/content/CVPR2026/papers/Simon_Echoes_Over_Time_Unlocking_Length_Generalization_in_Video-to-Audio_Generation_Models_CVPR_2026_paper.pdf#page=5)

[![原文数学表达区域 6，PDF 第 6 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/1cce66890ce7/figure-6.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/1cce66890ce7/figure-6.png)

区域 6 · [查看论文原页](https://openaccess.thecvf.com/content/CVPR2026/papers/Simon_Echoes_Over_Time_Unlocking_Length_Generalization_in_Video-to-Audio_Generation_Models_CVPR_2026_paper.pdf#page=6)

[![原文数学表达区域 7，PDF 第 6 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/1cce66890ce7/figure-7.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/1cce66890ce7/figure-7.png)

区域 7 · [查看论文原页](https://openaccess.thecvf.com/content/CVPR2026/papers/Simon_Echoes_Over_Time_Unlocking_Length_Generalization_in_Video-to-Audio_Generation_Models_CVPR_2026_paper.pdf#page=6)

[![原文数学表达区域 8，PDF 第 6 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/1cce66890ce7/figure-8.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/1cce66890ce7/figure-8.png)

区域 8 · [查看论文原页](https://openaccess.thecvf.com/content/CVPR2026/papers/Simon_Echoes_Over_Time_Unlocking_Length_Generalization_in_Video-to-Audio_Generation_Models_CVPR_2026_paper.pdf#page=6)

[![原文数学表达区域 9，PDF 第 6 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/1cce66890ce7/figure-9.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/1cce66890ce7/figure-9.png)

区域 9 · [查看论文原页](https://openaccess.thecvf.com/content/CVPR2026/papers/Simon_Echoes_Over_Time_Unlocking_Length_Generalization_in_Video-to-Audio_Generation_Models_CVPR_2026_paper.pdf#page=6)

另有 12 个候选区域因边界不明确或图片数量、尺寸限制未展开；请[查看完整论文](https://openaccess.thecvf.com/content/CVPR2026/papers/Simon_Echoes_Over_Time_Unlocking_Length_Generalization_in_Video-to-Audio_Generation_Models_CVPR_2026_paper.pdf)中的原始排版。

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。
- 评分规则：type-aware-v1
- 评分模型：muse-spark-1.3-contributor
- 评分请求协议：openai_responses

---

[← 返回 cvpr-2026 论文汇总](/posts/conference-cvpr-2026/)
