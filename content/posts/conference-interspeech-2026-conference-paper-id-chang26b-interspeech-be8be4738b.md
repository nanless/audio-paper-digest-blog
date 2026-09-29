---
title: "A Two-Stage Defence for Robust Federated Speech Emotion Recognition"
date: 2026-09-25
draft: false
description: "针对联邦语音情感识别同时要保数据本地化和抗白盒对抗样本的问题，该文用训练时联邦对抗训练加推理时随机放缩填充的两阶段防御，在 DEMoS 上把 FGSM 和 PGD 下的可用性拉回约 90% 水平，而代价是 DeepFool 仍只能部分恢复且需额外对抗样本生成开销。"
tags: ["对抗训练", "联邦学习", "对抗鲁棒性", "语音情感识别"]
categories: ["interspeech-2026 论文"]
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_paper_id: "conference:interspeech:2026:conference-paper-id:chang26b_interspeech"
paper_digest_source_kind: conference
paper_digest_conference_id: "interspeech-2026"
paper_digest_conference_record_url: "https://www.isca-archive.org/interspeech_2026/chang26b_interspeech.html"
paper_digest_conference_pdf_url: "https://www.isca-archive.org/interspeech_2026/chang26b_interspeech.pdf"
paper_digest_api_reader_contract: "beginner-researcher-v3"
paper_digest_api_reader_article_sha256: "84160200b86828f12aec41058994d093ba5d061f692f018d1982341d1ed1eb47"
paper_digest_api_reader_plan_sha256: "9a3ae67e76bda277d38dee947c138db0211cac804ed40d82d4981b51a99e9a0e"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings-v4"
paper_digest_api_reader_source_bindings_sha256: "6ad242687a3fff10b00ef73f95eb282a5bf44a13f7642f377506406bc055d952"
paper_digest_api_reader_source_table_count: 3
paper_digest_api_reader_source_formula_count: 0
paper_digest_api_reader_structured_artifacts_sha256: "b7987c5d5403177940a6510ba877069feced685f99ab4e14e4f66535dc46e6e3"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity-v1"
paper_digest_api_reader_author_identity_sha256: "63d1d68c2f586eeea4c10322dfea3b5fb4a8215c54737402dbbe4e7989e6d231"
paper_digest_api_reader_author_count: 6
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity-v1"
paper_digest_api_reader_resource_identity_sha256: "6a6f1c8d0c75937fd742cba560002557f6e5129b0cb2f0adbc80e84e59e8bada"
paper_digest_api_reader_resource_count: 0
paper_digest_api_reader_decision_projection: "api-reader-decision-projection-v2"
paper_digest_scoring_contract: "api-scoring-audit-v2"
paper_digest_taxonomy_contract: "paper-taxonomy-flat-tags-compat-v1"
paper_digest_taxonomy_selection_contract: "paper-taxonomy-selection-v1"
paper_digest_taxonomy_registry_version: "paper-taxonomy-v1"
paper_digest_taxonomy_registry_sha256: "15c82a567ce5a55dc1175684ed08b64c158558639d9c8fb822c9587ec32a8778"
paper_digest_taxonomy_concepts: [{"facet":"method","id":"method.adversarial-training","label":"对抗训练"},{"facet":"method","id":"method.federated","label":"联邦学习"},{"facet":"research_focus","id":"research_focus.adversarial-robustness","label":"对抗鲁棒性"},{"facet":"task","id":"task.emotion-recognition","label":"语音情感识别"}]
paper_digest_primary_task: "语音情感识别"
paper_digest_primary_method: "对抗训练"
paper_digest_score: 6.1
paper_digest_rank_bucket: "前50%"
paper_digest_document_type: "方法研究"
paper_digest_conference_structure: pdf-visual-quote-evidence-v1
---

# 📄 联邦不搬数据，对抗再分两步挡：语音情感识别的两阶段防御

> 英文题目：*A Two-Stage Defence for Robust Federated Speech Emotion Recognition*

> 会议身份：`conference:interspeech:2026:conference-paper-id:chang26b_interspeech`



> 来源为官方会议 PDF；图片依据原页像素，表格数字依据原文引用。PDF 文字层不视为原始 TeX，未可靠恢复的结构不作推断。


> 会议来源：[官方记录](https://www.isca-archive.org/interspeech_2026/chang26b_interspeech.html) · [官方 PDF](https://www.isca-archive.org/interspeech_2026/chang26b_interspeech.pdf)

标签：#对抗训练 #联邦学习 #对抗鲁棒性 #语音情感识别

评分：**6.1/10** | 创新 1.2/2 | 技术严谨 1.1/1.5 | 实验充分 0.8/1.5 | 清晰度 0.7/1 | 影响力 0.9/1.5 | 开源 0.0/1.5 | 可复现 0.4/0.5 | 工程/实践 1.0/1.5

排名：前50% | 文档类型：方法研究

## 👥 作者与机构

- Yi Chang：机构信息未能从会议 PDF 纯文本可靠映射
- Sofiane Laridi：机构信息未能从会议 PDF 纯文本可靠映射
- Zhao Ren：机构信息未能从会议 PDF 纯文本可靠映射
- Gregory Palmer：机构信息未能从会议 PDF 纯文本可靠映射
- Björn W. Schuller：机构信息未能从会议 PDF 纯文本可靠映射
- Marco Fisichella：机构信息未能从会议 PDF 纯文本可靠映射

## 📌 核心摘要

语音情感识别需从语音声学输入预测离散情绪标签，在物联网边缘部署中同时面临语音隐私泄露与白盒对抗样本误导诊断或内容审核的难点。本文提出两阶段联邦防御流水线，先由对数梅尔谱特征提取将各客户端语音转为时频输入，再经对抗联邦训练在本地混合干净与对抗样本更新模型并经服务器聚合。最后在推理时对谱图做随机缩放与填充以破坏扰动结构，前一步聚合后的全局模型直接作为后一步随机化推理的输入模型。与依赖攻击类型监控器的集成防御不同，该组合以训练阶段抵抗可迁移单步攻击、以推理随机化打乱过拟合的迭代攻击结构。在DEMoS数据集说话人相关划分上，对抗联邦模型经随机化后在对抗测试集的非加权平均召回率（Unweighted Average Recall / UAR）达90.15%与89.20%等水平，显著高于原始联邦模型的低鲁棒区间。该结论的适用边界受限于单一语料、说话人相关划分、同构客户端与三种白盒攻击，跨语料与异构联邦外推尚未验证，且对DeepFool类强迭代攻击的绝对性能仍明显偏低。原文未披露训练、推理或部署成本。

## 🔗 开源与复现资源

本次未形成可展示的已核验资源记录，开放状态尚未核实。
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 语音情感识别为什么同时怕漏隐私又怕被骗？

输入是这篇论文要解决的现实矛盾：智能音箱、看护和心理健康初筛会长期录音，语音里藏着身份和健康线索，不能随意上传集中；输出是论文希望得到的系统：语音不出本地就能联合训练出可用的情感分类器，而且在有人故意加人耳难辨的微小扰动时不至于大面积判错。目标读者是刚进入语音或音频的研究生，需要先建立两个依赖：先理解数据隐私约束决定了只能用联邦学习，再理解深度网络的线性脆弱性决定了必须额外做鲁棒防御。

必须保留的信息是任务为 7 类离散情感分类，防御对象是白盒攻击，评价用非加权平均召回率。本文按学习依赖展开，先讲任务与相关路线，再讲方法全景与组件计算，然后讲训练与推理流程，最后讲实验条件、结果反证与复现要点。论文报告的中心事实是 2 阶段防御分别放在训练时和推理时，缺失的资源状态是本次没有发现可验证的代码模型数据链接，因此不声称已公开可下载。

### 已有路线各解决了哪一半问题？

同输入同目标的联邦语音情感工作主要解决隐私一半。例如把敏感语音留在养老院、医疗或职场设备本地，只交换参数，已有研究讨论了其保护作用和多模态、会话机器人等应用。但论文指出这类工作通常不评估对抗鲁棒性，联邦聚合本身不会让模型对扰动更稳。另一条线是集中式语音情感的对抗攻防：有用生成对抗网络或相似性对抗训练防黑盒白盒攻击的研究，也有研究黑盒迁移性。

问题是这些方法假设数据集中、攻击类型已知或需要额外去噪参数，直接搬到设备分散、可能同时遭遇不同攻击的联邦场景并不合适。还有一类联邦防御如 FDA3 需要攻击监测器先判断当前是哪种白盒攻击再调度防御，论文认为这在实际中难以保证。于是本文的定位是补上联邦加白盒防御的空白：不依赖攻击类型预判，用训练时对抗训练处理迁移性强的攻击，用推理时随机化处理过拟合到特定模型的迭代攻击。

教学例子是：这好比先让每个哨所平时见过伪装，再在战时统一加一层雾化玻璃，前者靠学习，后者靠破坏对齐。

### 三种白盒攻击到底在谱图上动了什么？

先用白话解释白盒攻击：攻击者能看到模型结构和参数，能沿损失上升方向算梯度，再给输入加很小的改动。英文名是 white-box attack，后文简称白盒攻击。论文只研究白盒，因为它扰动更隐蔽、更难防。快速梯度符号法负责 1 次走一步，英文名 Fast Gradient Sign Method，简称 FGSM，做法是对损失关于输入的梯度取符号再乘以步长。投影梯度下降负责多步小步并裁剪回邻域，英文名 Projected Gradient Descent，简称 PGD，是 FGSM 的多步加强版。深度愚弄负责迭代寻找刚好越过决策边界的最小扰动，英文名 DeepFool，做法是估计到边界的垂直距离和方向并乘以稍大于 1 的系数确保越界。

**FGSM × PGD：** FGSM 负责用 1 次梯度符号步生成扰动，计算快但强度受单步限制；PGD 负责把同类思想做成多步迭代并裁剪到小邻域，搜索更充分、攻击更强；两者搭配比较的理由是它们共享梯度符号家族、迁移性较强，与 DeepFool 的最小扰动思路形成对照，组合使用才能检验防御是只防单步还是也防迭代。

沿一个样本走一遍有助于建立直觉：一句 2 到 3 秒的意大利语情感语音先被统一成固定时长，再变成 373 帧乘 64 梅尔带的对数梅尔谱，攻击在该谱的每个时频格上加正负小量，人眼看谱图纹理几乎不变，但分类器输出会从愤怒跳到其他类。原文的可视化显示 FGSM 和 PGD 的扰动更碎更密，DeepFool 的扰动相对更不显眼，这为后文随机化能打乱精细对齐埋下伏笔。

### 两阶段防御的全景是什么，谁在何时干预？

方法全景分三块：本地预处理提对数梅尔谱，训练时对抗联邦学习，推理时随机化。先解释联邦学习：英文名 Federated Learning，简称 FL，指 N 个客户端各存子数据集，每轮从服务器下载全局参数，在本地更新后再上传聚合，得到下一轮全局模型，语音本身不出设备。再解释对抗训练：英文名 adversarial training，指训练时混入对抗样本，让模型同时在干净和被扰动输入上算损失。

**联邦学习 × 对抗训练：** 联邦学习负责数据不动、只上传本地参数并在服务器聚合，解决隐私和集中收集受限问题；对抗训练负责在每个客户端本地用干净样本加对抗样本混合训练，解决模型易被微小扰动误导问题；两者搭配的理由是联邦本身不提供鲁棒性，对抗训练又需要分布式可执行，组合后形成第 1 阶段防御，在不搬运语音的前提下让全局模型见过对抗分布。

从输入到输出的主路径是：客户端语音经特征提取成分块谱，一半保持原样，一半用上一轮本地模型生成对抗谱，混合后训练本地模型并上传，服务器做联邦平均后下发，循环多轮直到收敛；收敛后的全局模型在测试时先接受可能的攻击，再过随机放缩填充，最后分类输出情感。下图是论文给出的总览，左侧训练循环与右侧推理分支的衔接是理解全文的关键。

> **看图路径：** 1. 先看下半部分三个客户端方框：从语音库到切分再到生成对抗谱并本地训练的箭头；2. 再看左上聚合与是否收敛菱形构成的全局循环，确认参数上传下发的闭环；3. 最后看右上推理分支：测试数据先被攻击再随机化再分类的顺序

[![原论文 Figure 1：Overview of the proposed framework. The sub-figure (a) consists of the following six steps: 1.](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/interspeech-2026/8557da09427e/figure-1.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/interspeech-2026/8557da09427e/figure-1.png)

*论文图 1。原论文 Figure 1：“Overview of the proposed framework. The sub-figure (a) consists of the following six steps: 1. Split the local training data Xi of client Fi randomly and evenly into X′”。*

图中下半部分显示每个客户端内部的切分生成训练上传箭头，上半部分显示聚合收敛判断与推理分支。训练时防御发生在本地混合训练这一步，推理时防御发生在分类前随机化这一步。两者的分工是前者让参数本身更稳，后者让输入扰动失效，新增作用是单用其一时留下的短板被另 1 阶段补上。原文明确从第二轮才开始对抗联邦训练，因为第一轮还没有可用模型来生成对抗样本。

### 输入表示与推理随机化具体怎么算？

先解释对数梅尔谱：英文名 log Mel spectrogram，指对波形加窗分帧求谱，再按人耳对频率的非线性感知映射到梅尔刻度并取对数，得到 2 维时频图。论文选它有两个安排理由：与人听觉线性相关且在声学任务中表现好，更重要的是比大波形编码器轻量，适合边缘设备。实现上所有音频重采样到 16 千赫，统一到最长 5.884 秒，短的自重复补齐，窗长 512、重叠 256、64 个梅尔带，最终每条样本为 373 乘 64。模型是 VGG-15，5 个卷积块通道数为 64、128、256、512、512，每块后接 2 乘 2 最大池化，卷积后接批归一化和线性整流激活，最后全局平均池化加两层全连接。

**对数梅尔谱 × 随机化：** 对数梅尔谱负责把波形变成 2 维时频输入，适配卷积网络并保持轻量，适合边缘端；随机化负责在推理时对谱图做随机放缩和边缘填充，破坏攻击者精心对齐的扰动结构；两者搭配的理由是谱图是规则网格，微小的几何抖动不改变情感可判读性却能打乱逐像素梯度，组合后形成第二阶段防御，专门补对抗训练对迭代攻击覆盖不足的短板。

随机化分两层：随机放缩把宽高从 373 乘 64 随机放大到 373 到 380 之间、64 到 66 之间的小范围，随机填充再用 0.5 在边界补到 380 乘 66。调参目标是双重的：对干净数据性能几乎无损，对对抗扰动尽量破坏。论文强调该操作计算轻、无需额外训练参数，也避免去噪器可能带来的混淆梯度问题。下图用一个训练样本直观展示了 3 种攻击的隐蔽性差异，是理解为何需要第二阶段的视觉依据。

> **看图路径：** 1. 对比第一行原始谱与下面各组上半部分被攻击谱的整体纹理是否仍可辨；2. 观察每组下半部分扰动行：FGSM 与 PGD 的颗粒感与 DeepFool 的块状结构差异；3. 结合右侧色标理解扰动被放大 100 倍显示的含义，不要误读为真实幅度

[![原论文 Figure 2：One example of a log Mel spectrogram from the DE- MoS training dataset to visualise the…](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/interspeech-2026/8557da09427e/figure-2.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/interspeech-2026/8557da09427e/figure-2.png)

*论文图 2。原论文 Figure 2：“One example of a log Mel spectrogram from the DE- MoS training dataset to visualise the adversarial attacks.”。*

图中第一行为原始谱，下面每组上为被攻击谱、下为放大 100 倍的扰动。可见被攻击谱与原始谱肉眼难分，而扰动行中 FGSM 和 PGD 呈细碎黄紫颗粒，DeepFool 则呈现更团块、与语音结构更相关的纹理。教学含义是：扰动越是精细对齐，随机几何抖动越可能让它错位，这正是推理随机化的物理直觉。

### 每一轮联邦对抗训练如何切分、生成与聚合？

训练流程是全文最需复述的部分。假设有 N 个数据拥有者，每个拥有子数据集，含样本与标签。每轮开始各客户端下载全局参数作为本地起点，用本地数据更新后再上传，服务器聚合产生下一轮全局参数。防御的改动在本地更新内部：第 t 加 1 轮开始时，客户端把本地训练谱随机均分成两半，一半记为保留干净部分，另一半用上一轮本地模型加白盒攻击生成对抗谱，然后把干净一半与对抗谱合并用于本轮训练。

损失是两部分加权，系数取 0.5，意味着干净与对抗各占一半权重，且生成对抗只用了本地一半数据，以与普通联邦的数据量公平可比。生成后本地训练完成即上传新权重，服务器聚合再下发。

**单攻击场景 × 交叉攻击场景：** 单攻击场景负责训练和测试用同一种攻击，检验防御对已知攻击的拟合程度；交叉攻击场景负责训练和测试用不同攻击，检验防御能否泛化到未知攻击；两者搭配的理由是真实部署时攻击类型未知，只看单攻击会高估鲁棒性，组合评估才能区分记忆扰动和真正学到更稳的边界。

单攻击指训练用 FGSM、测试也用 FGSM；交叉攻击指训练用 FGSM、测试用 PGD 或 DeepFool。论文同时测两者，是为了区分已知攻击下的拟合与未知攻击下的泛化。需要指出的缺项是原文未报告客户端采样率、本地轮数和聚合是否加权平均之外的细节，也未说明不同客户端是否用不同攻击，只说模拟同时暴露于不同攻击的动机，因此复现时应先按同种攻击每客户端独立生成实现，不自行脑补异构攻击分配。

### 数据、划分、攻击参数与评价如何保证可比？

数据用意大利语 DEMoS，含 68 人约 7.7 小时，去掉少数中性类后剩 9365 条情感语音，平均长 2.86 秒，覆盖愤怒、厌恶、恐惧、内疚、高兴、悲伤、惊讶 7 类。划分为说话人相关：每人 80% 进训练、20% 进测试，训练中再留 5% 做验证调参。这与以往集中式常用的说话人无关划分不同，因此论文明确说不能与集中式结果直接对比，比较以往最优只能起锚定基线模型竞争力的作用。

**说话人相关划分 × 非加权平均召回率：** 说话人相关划分负责让每个说话人的 80% 进训练、20% 进测试，模拟长期个性化服务的联邦场景；非加权平均召回率负责对 7 类情感求每类召回再平均，避免大类主导评价；两者搭配的理由是 DEMoS 类别不均衡且联邦按人分客户端，若用准确率会被大类掩盖小类失效，组合后才能公平反映个性化与类别均衡的双重目标。

攻击参数按原文固定以保证可比：DeepFool 最大迭代 5 轮，PGD 最大迭代也设 5 轮，FGSM 和 PGD 扰动范数为无穷范数，DeepFool 为二范数，步长与系数分别取 0.05、0.05 和 0.02。随机化按上节尺寸实现，训练批大小 8、验证测试为 1 以最大化随机化能力，优化器用 Adam、学习率 0.001 固定。评价用非加权平均召回率，方向是越高越好，并在关键对比处做单尾 z 检验。硬件为 DGX Station A100，68 客户端加 1 服务器并行，300 轮中 DeepFool、FGSM、PGD 的对抗训练耗时分别为 64、393、675、837 秒量级，说明对抗样本生成主导开销，DeepFool 反而更快。

下面先整理攻击配置，比较问题是 3 种攻击的计算预算与约束是否一致，公平条件是统一迭代上限与扰动尺度，指标方向是约束越紧越隐蔽则防御越难。

| 攻击 | 迭代上限 | 扰动范数 | 步长或越界系数 | 论文描述的行为 |
| --- | --- | --- | --- | --- |
| FGSM | 单步 | l 无穷 | 0.05 | 单步符号扰动 |
| PGD | 5 轮 | l 无穷 | 0.05 | 多步裁剪迭代 |
| DeepFool | 5 轮 | l 二 | 0.02 | 最小越界扰动 |

表后解释是：该配置让 FGSM 与 PGD 同属符号家族可比，DeepFool 用更小的越界系数追求最小扰动，因此后文 DeepFool 更易过拟合特定模型、迁移性弱的结论是在同等小迭代预算下得到的。

代价是若把迭代放开，结论可能变化，论文未测更大预算，这是未评测边界。

### 主结果：干净性能保住了吗，对抗下救回多少？

测的是防御后干净集是否掉点、被攻击集能回升多少，与谁比是普通联邦模型与 3 种对抗联邦模型，条件一致指同划分同 VGG 同 300 轮，指标为 UAR 越高越好。论文报告所有模型约 150 轮后在干净集收敛到 90% 左右，对抗训练未损害干净性能，随机化只让干净集掉不到 1 个百分点。关键数字是 300 轮时普通模型在 FGSM、PGD、DeepFool 下分别跌到 20.82%、9.96%、2.96%，而对应对抗训练可把前两者拉回约 89% 和 87%，随机化则把普通模型在三者下抬到 47.91%、41.55%、71.34%。下图展示了 150 到 300 轮 4 种测试形态下的分层，是全文的核心证据。

> **看图路径：** 1. 先看左两子图原始与随机化数据的曲线高度，确认防御对干净数据影响小；2. 再看第三子图对抗数据下普通模型低位与对抗训练模型高位的分层；3. 最后看第四子图随机化对抗数据下中间层曲线的抬升，特别是 DeepFool 对应曲线的变化

[![原论文 Figure 4：Performance on the (randomised) test set of DEMoS and its corresponding (randomised) adversarial…](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/interspeech-2026/8557da09427e/figure-4.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/interspeech-2026/8557da09427e/figure-4.png)

*论文图 4。原论文 Figure 4：“Performance on the (randomised) test set of DEMoS and its corresponding (randomised) adversarial samples every 10 rounds until 300 rounds.”。*

图中左两子图显示 4 条曲线都贴在 90% 以上，说明防御对干净和随机化干净数据影响小；第三子图显示普通模型 3 条虚线沉底而对抗训练实线高企，但 DeepFool 对应曲线仍低；第四子图经随机化后普通模型曲线和 DeepFool 对抗训练曲线明显抬升，而 FGSM 与 PGD 对抗训练曲线已在高位、再随机化提升不大。这支持判断：对抗训练是防 FGSM 与 PGD 的关键，随机化是救 DeepFool 的关键。

下面整理 300 轮未随机化测试集上的核心对照，比较问题是单阶段对抗训练能救回多少，公平条件是同轮数同测试源，指标方向是 UAR 越高越好。

| 模型 | 原始集 | 加 FGSM | 加 PGD | 加 DeepFool |
| --- | --- | --- | --- | --- |
| 普通联邦 | 94.08 | 20.82 | 9.96 | 2.96 |
| FGSM 对抗训练 | 95.99 | 89.72 | 88.24 | 1.70 |
| PGD 对抗训练 | 95.40 | 89.33 | 87.31 | 2.08 |
| DeepFool 对抗训练 | 95.16 | 93.73 | 93.25 | 1.98 |

表后解释是：主要收益是 FGSM 与 PGD 下从约 10 到 20% 拉回约 90%，且 DeepFool 训练的模型对前两者泛化最好；具体代价与反例是没有任何对抗训练能直接防住 DeepFool，同攻击下 DeepFool 仍只有约 2%，说明迭代最小扰动过拟合特定参数，必须靠第二阶段。这也引出下一节交叉与随机化的组合价值。

### 交叉攻击与随机化组合时谁补了谁的短板？

消融按论文特有细节展开两类：交叉攻击泛化与随机化叠加。先看交叉：FGSM 训练防 PGD 达 88.24%，PGD 训练防 FGSM 达 89.33%，都远高于普通模型的个位数，支持两者互泛化；DeepFool 训练防 FGSM 达 93.73%、防 PGD 达 93.25%，反而最好，论文解释为更有针对性的攻击带来更强泛化。但反向不行：FGSM 或 PGD 训练防 DeepFool 只有 1.70% 和 2.08%，说明防不住更强的迭代攻击。再看叠加随机化：PGD 训练防 DeepFool 从 2.08% 抬到 61.85%，普通模型防 DeepFool 从 2.96% 抬到 71.34%，普通模型防 FGSM 从 20.82% 抬到 47.91%、防 PGD 从 9.96% 抬到 41.55%，均显著。

而已在高位的 FGSM 防 FGSM 仅从 89.72% 到 90.15% 左右，提升有限。
下面整理交叉与随机化的关键数字，比较问题是未知攻击下组合是否仍可部署，公平条件是同 300 轮模型只变测试攻击与是否随机化，指标方向仍是 UAR 越高越好。

| 训练与测试组合 | 未随机化 | 随机化后 | 对照基线 | 含义 |
| --- | --- | --- | --- | --- |
| PGD 训练测 FGSM | 89.33 | 89.40 | 普通测 FGSM20.82 | 符号家族互泛化 |
| DeepFool 训练测 FGSM | 93.73 | 92.29 | 普通测 FGSM20.82 | 针对性训练泛化最好 |

表后解释是：主要收益是组合后在未知攻击下仍可用，尤其 DeepFool 训练加随机化兼顾两端。

代价是随机化对 DeepFool 的恢复仍不完全，PGD 训练加随机化后 61.85% 与 90% 干净水平仍有差距，且混淆矩阵显示恐惧易被判成厌恶，可能因负向情感声学相近。未胜出项是 FGSM 与 PGD 训练在 DeepFool 下的直接防御，明确失败。
随机化对抗测试集上的混淆矩阵进一步定位了剩余误差的类别结构。

> **看图路径：** 1. 先读每幅图标题中的训练加攻击组合与总 UAR，确认比较条件；2. 再沿对角线读每类正确率，找出最低的两格所在真实与预测类别；3. 对比左中两图与右图对角线颜色深浅，判断 DeepFool 剩余误差的集中位置

[![原论文 Figure 5：Confusion matrices for adversarial federated learnt models’ performances after 300 rounds on the…](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/interspeech-2026/8557da09427e/figure-5.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/interspeech-2026/8557da09427e/figure-5.png)

*论文图 5。原论文 Figure 5：“Confusion matrices for adversarial federated learnt models’ performances after 300 rounds on the randomised adversarial DEMoS test dataset.”。*

图中左中两幅对角线深色集中在 85% 到 93% 之间，总 UAR 约 90.15% 和 89.20%，说明 FGSM 与 PGD 已基本救回；右图总 UAR 仅 72.32%，恐惧行只有 54.42% 在对角，大量被分到厌恶，高兴与悲伤也有分流。这支持判断：DeepFool 剩余误差不是均匀噪声，而是有语义偏向的混淆，复现时应重点看恐惧与厌恶的区分特征。

### 哪些结论还不能推广，缺了哪项验证？

论文直接报告的是说话人相关划分下的结果，有限解释是个性化场景下扰动可能利用说话人特有的基频变化，DeepFool 过拟合也与此有关；未验证推测是说话人无关划分会更脆弱，原文把这列为未来工作，不应把当前数字推广到跨人泛化。第二个限制是随机化对 DeepFool 仍有天花板，论文提到可用蒸馏等进一步增强，但本次未测，可能与待验证连用。第三个限制是联邦同构假设：通信、算力、语言分布都被视为均衡，真实多机构异构、低资源延迟设备下的效果未评测。

第四个限制是只看到 150 到 300 轮收敛段，长期对抗训练后是否出现拐点未分析。相关性不等于因果：观察到 DeepFool 迁移弱与随机化有效并存，不能直接断言随机化只因破坏结构而生效，还需补消融验证不同填充值与放缩范围的影响。成本方面训练开销已报告，但推理延迟、误判率的人听感验证未测量，不承诺这些量同步改善。

### 要复现先固定什么，再跑哪两组对照？

复现先固定信息条件：用 DEMoS 去掉中性类后的 7 类，按每人 80% 训练 20% 测试、训练中 5% 验证划分；音频重采样 16 千赫、统一 5.884 秒自重复、窗 512 重叠 256、64 梅尔带得到 373 乘 64 谱；模型用 VGG-15 上述通道与池化配置；攻击按单步与 5 轮、0.05 与 0.02、范数如上；随机化按 373 到 380、64 到 66、填充 0.5 到 380 乘 66。

Adam 学习率 0.001、训练批 8、测试批 1、系数 0.5、从第二轮开始对抗训练、跑 300 轮每 10 轮在干净集测 UAR 确认 150 轮后收敛。先跑普通联邦与 FGSM 对抗联邦两条线，复现干净集约 90% 与被攻击时 20% 到 90% 的分叉；再跑 PGD 训练测 DeepFool 加随机化前后对照，复现 2% 到 60% 量级的抬升。若资源不足，可减少联邦轮数或隔几轮生成 1 次对抗样本，论文明确这是可接受的折中。资源状态是本次未发现可验证的开源链接，因此应按上述文字自行实现，不声称代码已公开。

统计时用 UAR 而非准确率，百分点差与相对百分比要分开表述。

### 何时值得尝试这种两阶段做法？

当语音不能出设备、又担心白盒扰动在社交或健康场景造成误判时，值得尝试训练时对抗加推理时随机化的组合。它的适用条件是输入可表为规则时频网格、边缘端能承担小幅对抗生成、攻击未知但以梯度类为主。若已能预判攻击类型或算力极紧，可先只做对抗训练防 FGSM 与 PGD；若主要担心迭代最小扰动，则必须加上随机化。复现成功后还需补的验证是说话人无关划分、其他语料、更大迭代预算下的稳定性，以及推理延迟与人耳不可感知性的主观评估。

回到全文：联邦保住隐私，对抗训练保住可迁移攻击下的可用性，随机化保住迭代攻击下的下限，三者缺一就会在某个攻击下回到个位数，这正是 2 阶段缺一不可的实证含义。

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。
- 评分规则：type-aware-v1
- 评分模型：muse-spark-1.3-contributor
- 评分请求协议：openai_responses

---

[← 返回 interspeech-2026 论文汇总](/posts/conference-interspeech-2026/)
