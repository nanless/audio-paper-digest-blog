---
title: "DyaDiT: A Multi-Modal Diffusion Transformer for Socially Favorable Dyadic Gesture Generation"
date: 2026-09-13
draft: false
description: "DyaDiT 针对双人对话中两路语音互相干扰和社会上下文缺失的问题，用正交化交叉注意力分离双路音频并以关系与人格为条件做扩散生成，在 Seamless Interaction 子集上报告了更低的 FD 和更高偏好度，但人格可控性仍受音频隐含线索干扰。"
tags: ["扩散模型", "多模态学习", "Transformer", "语音", "音视频交互"]
categories: ["cvpr-2026 论文"]
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_paper_id: "conference:cvpr:2026:conference-paper-id:Peng_DyaDiT_A_Multi-Modal_Diffusion_Transformer_for_Socially_Favorable_Dyadic_Gesture_CVPR_2026_paper"
paper_digest_source_kind: conference
paper_digest_conference_id: "cvpr-2026"
paper_digest_conference_record_url: "https://openaccess.thecvf.com/content/CVPR2026/html/Peng_DyaDiT_A_Multi-Modal_Diffusion_Transformer_for_Socially_Favorable_Dyadic_Gesture_CVPR_2026_paper.html"
paper_digest_conference_pdf_url: "https://openaccess.thecvf.com/content/CVPR2026/papers/Peng_DyaDiT_A_Multi-Modal_Diffusion_Transformer_for_Socially_Favorable_Dyadic_Gesture_CVPR_2026_paper.pdf"
paper_digest_api_reader_contract: "beginner-researcher-v3"
paper_digest_api_reader_article_sha256: "9174a49950e9886978808753a5e5b4deefcbc5c41fe7daaea850acd82c888456"
paper_digest_api_reader_plan_sha256: "542b9e7730aaeae67fa16f0aa4cfb3e80edf609b17d969ee8396abf28209aa6b"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings-v4"
paper_digest_api_reader_source_bindings_sha256: "23cb57e2b80f4cbed3a2ef25297b49e7acb267bc719de7f9ace617d1fe790f64"
paper_digest_api_reader_source_table_count: 3
paper_digest_api_reader_source_formula_count: 0
paper_digest_api_reader_structured_artifacts_sha256: "fa0cc543a464fcf1830da0dbec49564716922f661083876c47fcd254868fbcd5"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity-v1"
paper_digest_api_reader_author_identity_sha256: "22b346fd65e0109801a5b3d5e0d9832eb1be184391add5485ad015ed7d0d4b96"
paper_digest_api_reader_author_count: 11
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity-v1"
paper_digest_api_reader_resource_identity_sha256: "597e855dfb61a8f661fe104b38ab7a34d3d43f7b300d07f6653a3646474cf947"
paper_digest_api_reader_resource_count: 0
paper_digest_api_reader_decision_projection: "api-reader-decision-projection-v2"
paper_digest_scoring_contract: "api-scoring-audit-v2"
paper_digest_taxonomy_contract: "paper-taxonomy-flat-tags-compat-v1"
paper_digest_taxonomy_selection_contract: "paper-taxonomy-selection-v1"
paper_digest_taxonomy_registry_version: "paper-taxonomy-v1"
paper_digest_taxonomy_registry_sha256: "15c82a567ce5a55dc1175684ed08b64c158558639d9c8fb822c9587ec32a8778"
paper_digest_taxonomy_concepts: [{"facet":"method","id":"method.diffusion","label":"扩散模型"},{"facet":"method","id":"method.multimodal-learning","label":"多模态学习"},{"facet":"method","id":"method.transformer","label":"Transformer"},{"facet":"signal","id":"signal.speech","label":"语音"},{"facet":"task","id":"task.av-interaction","label":"音视频交互"}]
paper_digest_primary_task: "音视频交互"
paper_digest_primary_method: "扩散模型"
paper_digest_score: 5.3
paper_digest_rank_bucket: "后50%"
paper_digest_document_type: "方法研究"
paper_digest_conference_structure: replayable-pdf-layout-v1
---

# 📄 双人对话手势为何要先分清谁在说话：DyaDiT 用解耦音频与社会条件生成可控动作

> 英文题目：*DyaDiT: A Multi-Modal Diffusion Transformer for Socially Favorable Dyadic Gesture Generation*

> 会议身份：`conference:cvpr:2026:conference-paper-id:Peng_DyaDiT_A_Multi-Modal_Diffusion_Transformer_for_Socially_Favorable_Dyadic_Gesture_CVPR_2026_paper`


> ✅ 来源为官方会议 PDF；表格与 Figure 按原文证据绑定。PDF 公式以原页区域图片展示，未冒称作者原始 TeX。

> 会议来源：[官方记录](https://openaccess.thecvf.com/content/CVPR2026/html/Peng_DyaDiT_A_Multi-Modal_Diffusion_Transformer_for_Socially_Favorable_Dyadic_Gesture_CVPR_2026_paper.html) · [官方 PDF](https://openaccess.thecvf.com/content/CVPR2026/papers/Peng_DyaDiT_A_Multi-Modal_Diffusion_Transformer_for_Socially_Favorable_Dyadic_Gesture_CVPR_2026_paper.pdf)

标签：#扩散模型 #多模态学习 #Transformer #语音 #音视频交互

评分：**5.3/10** | 创新 1.3/2 | 技术严谨 1.0/1.5 | 实验充分 1.0/1.5 | 清晰度 0.7/1 | 影响力 0.4/1.5 | 开源 0.0/1.5 | 可复现 0.1/0.5 | 工程/实践 0.8/1.5

排名：后50% | 文档类型：方法研究

## 👥 作者与机构

- Yichen Peng：机构信息未能从会议 PDF 纯文本可靠映射
- Jyun-Ting Song：机构信息未能从会议 PDF 纯文本可靠映射
- Siyeol Jung：机构信息未能从会议 PDF 纯文本可靠映射
- Ulsan National Institute of Science & Technology blank：机构信息未能从会议 PDF 纯文本可靠映射
- Ruofan Liu：机构信息未能从会议 PDF 纯文本可靠映射
- Haiyang Liu：机构信息未能从会议 PDF 纯文本可靠映射
- Xuangeng Chu：机构信息未能从会议 PDF 纯文本可靠映射
- Ruicong Liu：机构信息未能从会议 PDF 纯文本可靠映射
- Erwin Wu：机构信息未能从会议 PDF 纯文本可靠映射
- Hideki Koike：机构信息未能从会议 PDF 纯文本可靠映射
- Kris Kitani：机构信息未能从会议 PDF 纯文本可靠映射

## 📌 核心摘要

双人对话手势生成以两路高度重叠语音与可选对方动作为输入，输出10秒上半身连续动作，难点在于说话倾听角色快速切换、双路音频串扰以及关系与人格等社会上下文对风格的调制。正交化交叉注意力先以Wav2Vec2编码双路音频并减去可被对方解释的冗余成分，输出解耦后的联合音频表征进入下一步条件融合。去噪扩散变换器再将该音频表征与关系标签、五维人格向量及对方动作联合作为条件，预测潜动作空间中的噪声以建模长时依赖。残差向量量化变分自编码器最后将去噪后的量化嵌入解码为连续6D旋转序列，离散运动词典在需要时提供风格化运动先验。与直接拼接双人音频或普通交叉注意力融合不同，正交投影显式去除串扰，使打断与倾听时刻的声学条件更干净且保留社会条件的表达力。在Seamless Interaction数据集评测下，DyaDiT的FD静态指标为6.40，低于ConvoFusion的FD静态指标9.22。该结论适用边界受限于上半身自然闲聊离线生成，尚未验证全身强情绪或实时双智能体交互的外推。原文未披露训练、推理或部署成本。

## 🔗 开源与复现资源

本次未形成可展示的已核验资源记录，开放状态尚未核实。
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 输入是什么，要输出什么，哪些信息必须保留？

这篇论文研究的输入是双人对话场景下的两路语音，加上可选的社会上下文与对方动作。目标是为其中一方生成上半身会话手势，要求动作随对话演进、能区分说话与倾听，并在关系与人格上显得协调。必须保留的信息包括双路音频各自的身份、两者之间的时间交错关系、关系类型标签、人格 5 维分数，以及用于启动生成的种子姿态。输出是连续的上身关节旋转序列，用 6 维旋转表示，覆盖包含手指在内的 43 个上身关节。

初学者容易把任务误解为单人语音到动作的映射，但原文强调双人场景存在同时说话、打断、快速轮换，单流模型会把两路信号混成一条，导致生成的动作无法对应正确的对话角色。

**双人手势生成 × 共话手势生成：** 共话手势生成负责把单人语音映射到单人动作，关注节奏与语义对齐；双人手势生成还要处理两个人轮流说、同时说、听与打断的相互时序。DyaDiT 把前者当作单流对齐子问题，把后者当作需要分离两路音频并引入对方动作的交互问题，二者搭配的理由是只做单流映射会在双人场景下混淆说话与倾听，组合后新增的作用是能按对话角色生成回应式动作。

为建立直觉可以举一个教学例子：例子中甲正在讲佛罗里达的经历，乙突然插入打断。如果只给混合音频，模型不知道此刻该生成讲者的展开手势还是听者的收敛手势。论文要求保留分开的两路音频与对方手势，正是为了在这种时刻做出不同选择。原文把代码与模型链接写作可查找地址，但本次收到的资源状态证据为 NONE，未发现完成 HTTPS 验证的绑定资源，因此不能声称代码模型已公开或当前可用，只能按论文文字讨论方法与实验。

### 已有路线在同输入同目标上缺了哪一块？

共话手势生成路线以单人语音为输入、以单人动作为目标，代表做法包括把文本音频说话人身份经循环或对抗网络做翻译，以及用 VQ-VAE 解耦节奏与语义特征。原文列举的 BEAT 与 CaMN、EMAGE、TalkSHOW 等都属于这一类，它们的监督是单人语音与动作的对齐，运行阶段也是单人推理。这类方法在单人对齐上有效，但输入就没有双路，无法建模双人时序与相互注意。

双人手势与反应生成路线把输入扩大到双人，目标也扩大到协调行为。面部反应生成关注听者的脸与头，双人舞蹈与双人运动关注同步性，Audio2Photoreal、ConvoFusion、TAG2G 则把单人框架扩展到双人。原文指出这两类双人工作常缺两块之一：要么忽略 2 人之间的社会上下文，要么把双路音频当作混合信号而不显式解耦。这正是 DyaDiT 要补的位置。扩散手势生成是第三条正交路线，MotionDiffuse、MDM、DiffGesture、DiffuseStyleGesture 等说明扩散适合建模多峰多对多分布。DyaDiT 选择扩散作为底座，理由是双人对话本身具有非确定性，同一音频可对应多种合理动作，扩散比确定性回归更适合保留多样性。

### 为什么混合音频与缺失社会条件会导致动作平庸？

问题可以拆成两个可操作的子问题。第一是音频纠缠：双人录音在时间上重叠，频谱与能量互相掩盖，若直接拼接或相加，两路特征的公共成分会被重复计算，模型难以判断当前帧是谁在主导对话。论文用打断例子说明，未解耦时生成动作会在说话与倾听之间摇摆，表现为手势幅度与语音重音错位。第二是社会条件缺失：同样一句话，对朋友、陌生人、家人、约会对象的身体距离与手势幅度不同，外向与内向者的展开程度也不同。若条件中没有关系与人格，模型只能学到数据集平均风格，动作显得通用而不合语境。

论文把评估问题也一并定义：既要用分布距离衡量真实感，用多样性衡量变化幅度，也要用人工偏好衡量社会合适性。因为自动指标无法判断动作是否符合关系与人格，所以必须做用户研究。理解这一点后，后文的方法组件才有明确分工：正交化解决第一个子问题，关系与人格标记加运动词典解决第二个子问题。

### 沿一个样本走完输入到输出的主路径

取验证集中的一个 10 秒片段为例。输入包括甲乙两路语音波形、乙的当前手势序列、关系标记与人格分数，以及甲的种子姿态。两路语音先经预训练 Wav2Vec2 编码为特征，再经正交化交叉注意力合成为一个音频标记。关系、人格、对方动作标记与音频标记一起做层归一化后作为键值，提供给扩散变换器的交叉注意力。

待生成的甲的动作先被 VQ-VAE 编码器压缩为潜码，加噪后作为查询进入 DiT 块做自注意力建模时间依赖，再经交叉注意力读取多模态条件，经多层去噪得到干净潜码，最后经 VQ 解码器重建为连续关节序列。图前导读如下：该总览图把底部双路波形与对方手势、中部条件标记与模型方框、顶部按关系分色的输出序列放在同一版面，适合 1 次看清多模态如何汇入单一生成路径。

> **看图路径：** 1. 先看底部两条双人音频波形与灰色对方手势序列，确认输入是双路而非单路；2. 再看中间 DyaDiT 方框左右的人格分数标记与关系标记如何汇入；3. 最后看顶部四排按关系着色的输出序列从种子姿态到 fn 的展开方式

[![原论文 Figure 1：DyaDiT generates socially aware conversational gestures from dyadic audio, conditioned on social…](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/f08f71f38ad7/figure-1.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/f08f71f38ad7/figure-1.png)

*论文图 1。原论文 Figure 1：“DyaDiT generates socially aware conversational gestures from dyadic audio, conditioned on social factors such as relationship and personality traits, achieving natural and…”。*

从像素可见，底部有两条长短与能量明显不同的波形，分别对应双人音频，下方还有一排灰色对方手势剪影，说明对方动作是可选输入。中部橙色方框标明 DyaDiT，左右各有一个小方块箭头汇入，分别标注人格分数与关系标记。顶部输出按约会对象、朋友、陌生人、家人分四排着色，从种子姿态经 f1、f50、f100 展开到 fn，同一音频下四排手势幅度与展开方式不同，直观支持社会条件确实改变了输出分布。推理时对方手势可给可不给，关系与人格也可随机或置空，模型退化为纯音频驱动，这种可选性在复现时必须保留。

### 正交化、词典与 DiT 块各自算什么？

DiT 主干遵循去噪扩散概率模型的标准噪声预测目标，网络输入是带噪潜姿态与时间步，输出预测加入的高斯噪声。每个 DiT 块包含对潜序列的自注意力、对多模态条件的交叉注意力，以及由关系人格与时间嵌入控制的 FiLM 调制。FiLM 做逐通道缩放与偏置，交叉注意力做内容检索，二者分工不同但都受同一社会嵌入控制。论文共堆叠 4 个这样的块，潜维度为 64，时间下采样为 4 倍，即每 4 帧对应一个潜标记。

**扩散变换器 × 运动词典：** 扩散变换器负责在加噪潜动作序列上迭代去噪并融合多模态条件，承担生成主干；运动词典负责提供一组可学习的离散动作基元并按风格运动加权调制对方音频特征，承担风格先验。搭配理由是纯扩散容易生成平均化动作，词典给出可复用的风格方向，组合后新增的作用是在推理时可选地加强或关闭风格控制。

正交化交叉注意力的计算分 3 步。第一步做正交化，用一个轻量多层感知机把自己音频特征向对方音频子空间投影并减去，得到去冗余后的自己特征，目的是去除两路共有的能量与内容。第二步做双向交叉注意力，1 个方向以对方为查询读去冗余后的自己特征，捕捉说话者对伙伴话语的回应，另一个方向反过来读，捕捉倾听者的反应线索。第 3 步用可学习的门控做加权融合，输出最终音频标记。原文明确写出门控是 sigmoid 加权两条流，这种对称设计使模型在打断前后能切换主导流。

**正交化交叉注意力 × 双路音频融合：** 双路音频融合负责把自己与对方的 Wav2Vec2 特征合成 1 个条件，承担信息汇合；正交化交叉注意力先把自己音频中可被对方音频线性解释的部分减掉，再做双向交叉注意力与门控融合，承担去冗余与解耦。搭配理由是直接拼接会保留重叠语音的公共成分导致角色混淆，组合后新增的作用是让模型在打断场景下仍能区分谁在说、谁在听。

运动词典是一组可学习的正交初始化基向量，训练时结合真值风格运动特征经交叉注意力调制对方音频，再与原音频残差相加。推理时可关闭词典得到风格不可知的动作，或开启并用分类器无关引导加强风格。原文强调词典训练时不做严格相位对齐，因为手势不需要严格对拍，强对齐反而损害学习。关系与人格的注入同时走 FiLM 与交叉注意力两条路，前者调制整体风格强度，后者提供细粒度检索。

**关系类型 × 人格分数：** 关系类型负责给出朋友、陌生人、家人、约会对象 4 类离散标签，承担社交距离约束；人格分数负责给出外向性、宜人性、尽责性、神经质、开放性 5 维连续分数，承担个体表达风格约束。二者都经嵌入后通过 FiLM 调制与交叉注意力进入 DiT 块，搭配理由是单一标签无法同时刻画双人关系与个人特质，组合后新增的作用是让同一段音频能生成不同社交含义的动作分布。

图前导读如下：架构图分上下两栏，上栏是 DiT 主干的数据流，下栏左侧是正交化细节、右侧是词典细节，箭头颜色区分了音频、动作、关系、人格 4 类标记，适合对照公式理解门控与残差位置。

> **看图路径：** 1. 先沿左侧噪声姿态潜码经自注意力与交叉注意力的主路径看到 VQ 解码器；2. 再看底部正交化模块中两路音频经正交化后进入两个对称交叉注意力与可学习门；3. 最后看右侧运动词典中风格运动如何经码本与交叉注意力调制对方音频

[![原论文 Figure 2：Overview of DyaDiT. DyaDiT conditions on multiple input modalities, including audio, partner…](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/f08f71f38ad7/figure-2.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/f08f71f38ad7/figure-2.png)

*论文图 2。原论文 Figure 2：“Overview of DyaDiT. DyaDiT conditions on multiple input modalities, including audio, partner motion, relationship type, and personality scores.”。*

从像素可见，上栏左侧黄色小人对应对方动作标记，橙色对应音频标记，蓝色与绿色对应关系与人格，噪声姿态潜码以蓝色叠影小人表示，经自注意力、FiLM、交叉注意力、MLP 的交替方块后进入 VQ 解码器。下栏正交化竖条明确标出减去投影的操作，两侧各有一个粉色交叉注意力方块汇入蓝色门控圆圈。右侧绿色词典方块内有多个基向量槽位，风格小人与对方音频分别从上下汇入粉色交叉注意力后再残差相加，结构与文字描述一致。

### 数据如何构造，哪些参数在训练，推理如何采样？

训练数据是 Seamless Interaction 数据集中自然场景子集的精选部分，论文报告为 3000 个片段约 182 小时，包含同步音频、全身动作与表情。预处理只取上半身关节做 6 维旋转表示，双路语音分别经 Wav2Vec2 编码，社会标注直接使用数据集提供的关系四分类与人格 5 维分数。动作先训练残差 VQ-VAE 做 4 倍时间下采样与 4 层码本求精，扩散模型在潜空间训练，训练时编码器压缩真值序列，推理时只用解码器重建，编码器与解码器在不同阶段各用其一。

**残差向量量化 × 分类器无关引导：** 残差向量量化负责把连续上身动作压缩为每 4 帧一个的离散潜码并用 4 层码本逐级求精，承担紧凑表示；分类器无关引导负责在推理时放大风格或社会条件的条件分支，承担可控强度调节。搭配理由是扩散直接在高帧率连续空间建模长程依赖困难，压缩后更易学习，组合后新增的作用是训练时学到无条件与有条件两条路径，推理时用引导系数调节风格明显程度。

优化目标是标准的噪声预测均方误差，条件包括正交化后的音频、对方动作、关系与人格。论文未报告优化器类型、学习率、批量大小与训练轮数，也未说明 Wav2Vec2 是否冻结、VQ-VAE 与扩散是否联合训练，这些是复现时需要补的缺项，不能从模型名推定。推理时基线与本方法统一用 DDIM 调度器做 50 步去噪，引导系数为 2，生成 300 帧即 10 秒序列，种子姿态相同以保证公平。运动词典在推理时可选激活，风格引导示例中用到 2.5 的系数，说明引导强度是可调超参数。需要区分的是，VQ 重建保真度与扩散生成多样性是两个阶段的目标，前者决定动作上限，后者决定分布覆盖，不能混为一谈。

### 测什么、和谁比、条件是否一致？

定量评估围绕 3 个问题：动作是否真实、是否多样、是否与语音节拍同步。指标包括节拍一致性、静态弗雷歇距离衡量单帧姿态真实感、动态弗雷歇距离衡量速度序列真实感，以及静态与动态多样性衡量帧间与速度变化。静态距离在 43 关节的姿态空间计算，动态距离在 300 帧的速度空间计算，多样性用片段间均方误差与速度差异平均。方向是距离越低越好，多样性越高表示变化越丰富，但多样性过高也可能是噪声，需结合距离一起看。

比较对象是两个可运行的双人基线：ConvoFusion 是带堆叠交叉注意力的多模态扩散融合模型，Audio2PhotoReal 是先预测关键帧再用扩散变换器精修。论文说明两者都适配到同一手势表示、在同一训练子集重训、推理时用相同种子姿态与相同 DDIM 设置，这是公平比较的基础。真值与随机真值的分数作为分布上下界参考，不参与排名。用户研究用 16 名 25 至 35 岁有计算机背景的被试。每人观看 56 对视频。

每对视频时长为 10 s，每对需给出偏好与置信度，问题覆盖整体像人程度、关系一致性与人格一致性，视频对随机排序以避免顺序偏差。硬件与耗时、统计显著性检验细节除卡方 p 值外报告有限，这是解读时要注意的边界。

### 用户研究如何提问，结果数字如何对应？

用户研究要回答自动指标答不了的问题：动作是否像人，是否像朋友或家人，是否符合宜人性等人格描述。做法是 A/B 偏好测试，被试看配对视频后选择更像人的一方或更像某种关系的一方，并给出强烈或轻微的置信度。配对包括本方法对 ConvoFusion、本方法对真值，问题分整体质量、关系一致性、人格一致性 3 组。下表把论文文字报告的偏好比例整理为可核对的形式，数值保留原文 1 位小数与百分号写法。

| 比较 | 整体质量偏好本方法 | 关系一致偏好本方法 | 人格一致偏好本方法 | 对真值额外偏好 |
| --- | --- | --- | --- | --- |
| 对 ConvoFusion | 73.9% | 69.8% | 66.7% | - |

表后解释如下：对 ConvoFusion 的 3 组偏好均超过 3 分之二，且卡方检验报告对基线与对真值人格项显著，支持用户明显偏好 DyaDiT 的判断。对真值的优势仅为 1.0% 与 1.7%，幅度很小，论文解释为扩散更平滑且社会条件带来稍强的表现力，这属于有限解释而非因果证明。未评测边界是人格一致性未与真值对比，理由是人格标注连续且难以让被试可靠判断，这一缺席必须在引用时说明，不能把自动指标当成人评。被试均为计算机背景且年龄集中，结果向特定群体的泛化待验证。

### 主结果在相同条件下支持什么判断？

先提出比较问题：在相同数据、相同表示、相同种子与相同采样步数下，DyaDiT 是否在真实感与多样性上同时优于两个双人基线。下表整理了论文报告的节拍一致性、静态与动态距离及多样性，距离越低越好，多样性越高越丰富。表前条件已在上一节说明，此处直接看数字差异与代价。

| 方法 | 节拍一致性 | 静态距离越低越好 | 动态距离越低越好 | 静态多样性越高越丰富 | 动态多样性越高越丰富 |
| --- | --- | --- | --- | --- | --- |
| ConvoFusion | - | 9.22 | 1.74 | 18.33 | 1.10 |
| Audio2PhotoReal | - | 8.77 | 1.84 | 19.35 | 1.05 |
| DyaDiT 去正交化 | 7.25 | 7.32 | 1.79 | 23.57 | 1.24 |
| DyaDiT 交叉注意力替换 | 7.10 | 7.82 | 1.91 | 18.87 | 1.13 |
| DyaDiT 去词典 | 7.37 | 6.88 | 1.75 | 18.34 | 1.29 |
| DyaDiT | 7.71 | 6.40 | 1.37 | 27.46 | 1.38 |

表后解释如下：完整 DyaDiT 在静态距离 6.40 与动态距离 1.37 上为报告中最低，同时静态多样性 27.46 接近真值水平，支持其在保持多样的同时更贴近真值分布的判断。具体代价是节拍一致性 7.71 并非表中最高，去正交化变体在该列为 7.25，去词典变体为 7.37，说明真实感与节拍同步之间存在权衡，不能只看单一指标。未胜出项是 Audio2PhotoReal 在动态距离 1.84 与多样性上的表现均弱于 DyaDiT，但在静态距离 8.77 上优于 ConvoFusion 的 9.22，说明关键帧策略在单帧真实感上有一定作用，但时序多样性不足。图前导读如下：打断示例图用上下两行分别展示打断者与被打断者的动作时序，中间配双路波形与文字，适合检验正交化是否带来角色相关的动作切换。

> **看图路径：** 1. 先对比上下两行中间波形文字，确认上行打断者语音增强而下行被打断者语音减弱；2. 再观察上行橙色人物手臂从下垂到张开的变化与下行人物手臂收回的变化

[![原论文 Figure 3：ORCA reduces ambiguity between the two audio streams, allowing DyaDiT to generate realistic…](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/f08f71f38ad7/figure-3.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/f08f71f38ad7/figure-3.png)

*论文图 3。原论文 Figure 3：“ORCA reduces ambiguity between the two audio streams, allowing DyaDiT to generate realistic motion even when one person interrupts the other during the conversation.”。*

从像素可见，上行人物在 Yeah、so、I think 等词出现时手臂从贴近身体逐渐张开，被打断的下行人物则从张开手势逐渐收回抱腹，波形上行能量增强而下行能量减弱，动作变化与语音主导权切换同向。图前导读如下：多方法并排对比图把同一语音下的 4 种输出按行对齐，底部有文本与波形时间轴，适合逐帧比较手势幅度与多样性。

> **看图路径：** 1. 先自上而下确认四行分别为 Audio2PR、ConvoFusion、DyaDiT 与真值；2. 再沿底部文本时间轴观察最后两帧 DyaDiT 双臂张开幅度与其他行的差异

[![原论文 Figure 4：Qualitative Results. Comparison of visualization results between DyaDiT, ConvoFusion \[31\], and…](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/f08f71f38ad7/figure-4.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/f08f71f38ad7/figure-4.png)

*论文图 4。原论文 Figure 4：“Qualitative Results. Comparison of visualization results between DyaDiT, ConvoFusion [31], and Audio2PhotoReal [3].”。*

从像素可见，最上两行动作幅度小且长时间保持双手下垂，蓝色 DyaDiT 行在首尾帧出现明显的单臂抬起与双臂张开，灰色真值行则以双手胸前小幅动作为主。论文文字称 DyaDiT 更多样更真实，像素支持幅度差异的观察，但单一样本不能推广到全集，仍需结合上表的分布指标一起判断。

### 拿掉正交化、词典与社会条件会发生什么？

消融围绕 3 个可操作问题：去掉正交化是否损害真实感，用普通交叉注意力替换是否等价，去掉词典或改用连续表示是否损害多样性。下表保留原文报告的变体行，条件是同一训练子集与同一评估协议，指标方向与主表一致。

| 变体 | 节拍一致性 | 静态距离越低越好 | 动态距离越低越好 | 静态多样性越高越丰富 | 动态多样性越高越丰富 |
| --- | --- | --- | --- | --- | --- |
| 去正交化直接拼接 | 7.25 | 7.32 | 1.79 | 23.57 | 1.24 |
| 普通交叉注意力替换 | 7.10 | 7.82 | 1.91 | 18.87 | 1.13 |
| 去运动词典 | 7.37 | 6.88 | 1.75 | 18.34 | 1.29 |
| 连续词典表示 | 7.39 | 6.69 | 1.72 | 21.47 | 1.33 |
| 去对方动作条件 | 7.61 | 6.64 | 1.48 | 26.43 | 1.25 |
| 无条件生成 | 7.63 | 7.40 | 1.63 | 21.65 | 1.16 |
| 随机社会标签 | 7.64 | 8.24 | 1.53 | 21.94 | 1.43 |

表后解释如下：去掉正交化后静态距离从 6.40 升至 7.32，支持正交化对真实感的贡献；换成普通交叉注意力后静态多样性从 27.46 降至 18.87，说明不做去冗余的融合会压缩变化幅度。词典方面，去词典后静态多样性降至 18.34，改用连续表示回升至 21.47 但仍低于离散词典的 27.46，支持离散基元更利于捕捉多样交互风格的判断。社会条件方面，无条件与随机标签在静态距离上分别为 7.40 与 8.24，均差于完整模型的 6.40，且静态多样性也更低，说明正确社会条件有助于拓宽而非收窄分布。

反例是去对方动作条件的变体静态多样性达 26.43，接近完整模型，提示在部分片段中对方动作并非必要，听者段本身动作幅度小也可能拉低多样性基线。论文未报告每次消融的训练成本与方差，这是复现时需补的验证。

### 哪些结论尚不支持，边界在哪里？

论文明确报告的局限是数据集限制与条件冲突：人格线索可能已隐含在音频中，导致显式人格控制被削弱，影响可控性与多样性。未来工作提出音频中性化以更好解耦社会线索，以及用已有的人体重建管线采集更多双人数据做全身生成。这些是方向性计划，尚未验证，不能当作已解决。

从证据看还有三处边界。第一，训练超参数与计算预算缺失，无法判断性能提升的成本，也无法区分是架构还是训练量带来的增益。第二，用户研究样本为 16 人、56 个片段，虽报告显著性，但人群与场景覆盖有限，对真值的微弱优势可能受平滑偏好影响。第三，评估只覆盖上半身，手指虽包含在 43 关节内，但全身位移与脚步未评估，部署到数字人全身时需另做验证。相关性不等于因果，例如社会条件与多样性同升不能直接断言社会条件导致多样性，还需控制音频内容的对照实验。

### 要复现应先准备什么，先跑哪一步？

复现的第一步是数据与表示对齐：获取 Seamless Interaction 的自然场景子集并按论文切出 3000 片段，提取双路音频的 Wav2Vec2 特征，保留关系四分类与人格 5 维分数，上身动作转为 6 维旋转并确认 43 关节定义。跳过这一步直接用自己的单人数据，会因缺双路与社会标注而无法复现关键对照。第二步是先训残差 VQ-VAE，确认 4 倍下采样与 4 层码本的重建误差收敛，再冻结构训潜空间扩散，避免 2 阶段误差混淆。第 3 步是按相同种子、相同 DDIM50 步与引导系数 2 跑基线与变体，先复现去正交化与去词典的退化，再跑完整模型。

关键超参数中论文明确的只有潜维度 64、下采样 4、码本 4 层、推理步数 50、引导系数 2 与 300 帧输出，其余优化器与学习率需自行搜索并记录。资源状态证据为 NONE，因此不要假设链接当前可用，应以本地数据与自训权重为起点。若要验证人格可控性，建议固定同一音频、只切换人格分数并用 2.5 引导生成多组，再做盲评，而不是只看自动多样性。还需补的验证包括多次随机种子的方差、推理延迟与帧率、以及全身扩展时的足部滑动，这些在原文均未测量。

### 何时值得尝试这种做法，何时不必？

当任务确实是双人对话且存在打断与角色切换，同时有关系与人格标注可用时，值得尝试正交化加社会条件的扩散方案。它的可操作收益是角色混淆减少与社会合适性提升，代价是需要双路分离输入与额外的条件嵌入，且节拍同步可能略降。当只有单人语音或混合单轨、无社会标注时，不必强行套用完整模型，此时退化为普通共话手势模型更务实。

对初学者的实践建议是：先用直接拼接双路特征做基线，再加入正交化看静态距离是否下降；先不用词典跑通扩散，再加入离散词典看静态多样性是否回升；最后再加入关系与人格，避免 1 次引入多个条件难以归因。引用结果时应同时给出距离与多样性，并说明用户偏好来自特定人群的小样本，不能承诺延迟或成本改善。总体上，论文支持的是在给定子集与协议下社会感知生成的有效性，跨数据集与全身场景的泛化仍是待验证的开放问题。

## 📐 原文公式与排版

以下展示论文原页中的数学表达区域，保留原始上下标、分式和符号排版。区域序号仅用于本文导航，不是论文公式编号。

[![原文数学表达区域 1，PDF 第 4 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/a0ef0729bba5/figure-1.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/a0ef0729bba5/figure-1.png)

区域 1 · [查看论文原页](https://openaccess.thecvf.com/content/CVPR2026/papers/Peng_DyaDiT_A_Multi-Modal_Diffusion_Transformer_for_Socially_Favorable_Dyadic_Gesture_CVPR_2026_paper.pdf#page=4)

[![原文数学表达区域 2，PDF 第 5 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/a0ef0729bba5/figure-2.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/a0ef0729bba5/figure-2.png)

区域 2 · [查看论文原页](https://openaccess.thecvf.com/content/CVPR2026/papers/Peng_DyaDiT_A_Multi-Modal_Diffusion_Transformer_for_Socially_Favorable_Dyadic_Gesture_CVPR_2026_paper.pdf#page=5)

另有 17 个候选区域因边界不明确或图片数量、尺寸限制未展开；请[查看完整论文](https://openaccess.thecvf.com/content/CVPR2026/papers/Peng_DyaDiT_A_Multi-Modal_Diffusion_Transformer_for_Socially_Favorable_Dyadic_Gesture_CVPR_2026_paper.pdf)中的原始排版。

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。
- 评分规则：type-aware-v1
- 评分模型：muse-spark-1.3-contributor
- 评分请求协议：openai_responses

---

[← 返回 cvpr-2026 论文汇总](/posts/conference-cvpr-2026/)
