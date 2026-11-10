---
title: "DiaHeads: Jointly Generating Coordinated 3D Dialogue Heads with Non-verbal Cues from Dual Audio"
date: 2026-11-09
draft: false
tags: [音频驱动三维对象生成, 变分自编码器, 数据集]
categories: [论文速递]
description: "针对只有双人音频时难以生成相互呼应的头部、表情和视线的问题，DiaHeads 把两路音频拼在一起编码并用共享隐变量一次解码两人的连续动作，同时用四个离散非言语线索约束隐空间，在 CANDOR-FG 上把交互协调指标大幅降低，但单人面部重建误差略高于只做单人的模型。"
hiddenInHomeList: true
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_arxiv_id: "2611.06970"
paper_digest_workbench_contract: "researcher-workbench"
paper_digest_workbench_schema_fingerprint: "1f09b594c317cc38e934de27a5b0e8ceb4baa50ef79bd4f8683dd9adea720fe7"
paper_digest_reader_title: "DiaHeads：用双路音频一次生成带非言语线索的双人 3D 对话头"
paper_digest_original_title: "DiaHeads: Jointly Generating Coordinated 3D Dialogue Heads with Non-verbal Cues from Dual Audio"
paper_digest_arxiv_version: 1
paper_digest_arxiv_versioned_id: "2611.06970v1"
paper_digest_arxiv_abs_url: "https://arxiv.org/abs/2611.06970v1"
paper_digest_arxiv_pdf_url: "https://arxiv.org/pdf/2611.06970v1.pdf"
paper_digest_primary_task: "音频驱动三维对象生成"
paper_digest_tags_contract: "paper-tag-flat-tags"
paper_digest_tags_schema_fingerprint: "27e36280a4b8d3df62ebe54d3ab037920f4d69feb2b554163f01bbae2caf4338"
paper_digest_tags_selection_contract: "paper-tag-selection"
paper_digest_tags_registry_version: "paper-tag-catalog"
paper_digest_tags_registry_sha256: "9673bc0122e1905a5dcfd8b223675400cc2fa4c36095bc0e5f817edf99a0ec5c"
paper_digest_tags_concepts: [{"facet":"task","id":"task.audio-driven-3d-generation","label":"音频驱动三维对象生成"},{"facet":"method","id":"method.vae","label":"变分自编码器"},{"facet":"artifact","id":"artifact.dataset","label":"数据集"}]
paper_digest_primary_method: "变分自编码器"
paper_digest_score: 5.7
paper_digest_rank_bucket: "前50%"
paper_digest_document_type: "方法研究"
paper_digest_one_sentence: "针对只有双人音频时难以生成相互呼应的头部、表情和视线的问题，DiaHeads 把两路音频拼在一起编码并用共享隐变量一次解码两人的连续动作，同时用四个离散非言语线索约束隐空间，在 CANDOR-FG 上把交互协调指标大幅降低，但单人面部重建误差略高于只做单人的模型。"
paper_digest_authors: [{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Jiahe Wang"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Yuxin Wang"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Xin Yun"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Binyan Chen"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Tong Pan"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Zhenjie Liu"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Shangfei Wang"}]
paper_digest_abstract_sha256: "deab17c288d10480848f1a62deb8798fb6a23597a1a3e720c29a1587a781f0e9"
paper_digest_sidecars: {"citation.bib":{"sha256":"785967f612f9b93c6e789bb4d05cfe4009ab3f150c1019e1abb146214c2460b7","url":"/audio-paper-digest-blog/client/papers/2026-11-09/2611-06970/citation.bib"},"citation.json":{"sha256":"ed8d7d4d19c5a661eb54f7f4f60205dfb4d138385840444a5b8dedcc7653faba","url":"/audio-paper-digest-blog/client/papers/2026-11-09/2611-06970/citation.json"},"citation.ris":{"sha256":"952056a88a3a01baf1b9c851c3c835b50898289c9d868969b51cde5a092e669f","url":"/audio-paper-digest-blog/client/papers/2026-11-09/2611-06970/citation.ris"},"rethink-context.json":{"contract":"paper-research-context","schemaFingerprint":"5d4e79f7d3ee65b39ccb38281548bf20a1b2041ab7a27625eaf97ab9909a8383","sha256":"7efe164c2a0f8ca99136d7d03f2b5c8289cdbe10f08a80a03358272dee140d40","url":"/audio-paper-digest-blog/client/papers/2026-11-09/2611-06970/rethink-context.json"}}
paper_digest_api_reader_contract: "beginner-researcher"
paper_digest_api_reader_schema_fingerprint: "cd8baf5b8bda3a49eec64f6005931af63de4e9a13148cba5f354c661ca6e9df2"
paper_digest_api_reader_article_sha256: "827c02c645855c221ffce1eb229d00193bfd1b4283804233fbf70ea31c8377bb"
paper_digest_api_reader_plan_sha256: "54ae892943879e11e13defd97dca1da3c6da3f73a6c2fcbff57eb6227619567e"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings"
paper_digest_api_reader_source_binding_schema_fingerprint: "d2a2607a6e561909473022eb43f56332ee357af8568566a095c29083ffdec9cc"
paper_digest_api_reader_source_bindings_sha256: "45a5fc6d4d03ee80fed6ef00b61b6128fbaa467565035fae80d173ee2492de9e"
paper_digest_api_reader_source_table_count: 4
paper_digest_api_reader_source_formula_count: 4
paper_digest_api_reader_structured_artifacts_sha256: "543a2f5108a4cf9c084b847193ee95dd8244a44e3f339636a4c2ebe020548f87"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity"
paper_digest_api_reader_author_identity_schema_fingerprint: "1e3fd3a9a56c9a5bf52df8df5022690b9a3fa92e83e934f295af87c0e258ed2f"
paper_digest_api_reader_author_identity_sha256: "1d2532e9238fec3e609069b071b2737a12a018a6252d5d06270549a3cadf98ce"
paper_digest_api_reader_author_count: 7
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity"
paper_digest_api_reader_resource_identity_schema_fingerprint: "33b0be17118be61f39b85ce690c8da17e91f2864bb65e85284f60c40067328e0"
paper_digest_api_reader_resource_identity_sha256: "0828fb6c7debbdf8bbab2e7cf5e3c1925eaf910a9bb48109b2920473b48effe3"
paper_digest_api_reader_resource_count: 0
paper_digest_api_reader_figure_persistence: "ephemeral-no-persisted-figure-assets-v1"
paper_digest_api_reader_decision_projection: "api-reader-decision-projection"
paper_digest_api_reader_decision_projection_schema_fingerprint: "e56feb5ab75c8710904916b898f73dab9bb18bdf65bb60b7ed2edf7f99cea860"
---

# 📄 DiaHeads：用双路音频一次生成带非言语线索的双人 3D 对话头

> 英文题目：*[DiaHeads: Jointly Generating Coordinated 3D Dialogue Heads with Non-verbal Cues from Dual Audio](https://arxiv.org/abs/2611.06970v1)*

<!--paper-tag-hierarchy-v1:start-->

**研究分类**

- **研究任务**：[音频驱动三维对象生成](/audio-paper-digest-blog/papers/?concept=task.audio-driven-3d-generation)
- **研究方法**：[生成模型](/audio-paper-digest-blog/papers/?concept=method.generative) → [变分自编码器](/audio-paper-digest-blog/papers/?concept=method.vae)
- **研究产物**：[数据集](/audio-paper-digest-blog/papers/?concept=artifact.dataset)

<!--paper-tag-hierarchy-v1:end-->

> 评分：**5.7/10** | 创新 1.2/2 | 技术严谨 1/1.5 | 实验充分 1.1/1.5 | 清晰度 0.8/1 | 影响力 0.5/1.5 | 开源 0/1.5 | 可复现 0.1/0.5 | 工程/实践 1/1.5


## 👥 作者与机构

- Jiahe Wang：机构信息未能在本次解析中与作者逐人可靠绑定
- Yuxin Wang：机构信息未能在本次解析中与作者逐人可靠绑定
- Xin Yun：机构信息未能在本次解析中与作者逐人可靠绑定
- Binyan Chen：机构信息未能在本次解析中与作者逐人可靠绑定
- Tong Pan：机构信息未能在本次解析中与作者逐人可靠绑定
- Zhenjie Liu：机构信息未能在本次解析中与作者逐人可靠绑定
- Shangfei Wang：机构信息未能在本次解析中与作者逐人可靠绑定

## 📌 核心摘要

读者需要先理解的对象是双人对话的头部动画，输入是两个人各自的音频流，输出是两个人随时间变化的头部几何、表情与视线方向，难点在于两条运动轨迹要在时间上相互回应，而不是各自把口型对准音频。DiaHeads把两路语音特征拼成一个共享条件向量，再从一个共享隐变量同时解码出两个人的连续参数与离散线索，使一人的动作生成天然看到另一人的音频。先用两个冻结的HuBERT主干提取双路语音特征，经变换器融合成条件向量c并送入双分支变分编码器与共享解码器作条件调制。再由低层运动分支处理表情与注视方向，高层线索分支处理注视对方、摇头、点头和微笑四个二值变量，两分支以专家乘积合并为同一后验，让社交状态约束运动所在的隐空间。最后用基于残差耦合块的流先验替代标准高斯以刻画耦合运动的时间依赖，并用SyncNet对每人单独施加唇音同步约束。与把说话人与听者分角色建模或把对话当作纯运动合成的方法不同，该文把可解释的社交行为作为辅助监督引入生成。在CANDOR-FG测试划分与同一数据处理管线下比较Interaction DTW指标，DiaHeads为0.3171，低于DIM的0.7526。在同一CANDOR-FG测试划分与同一数据处理管线下比较Sync Error指标，DiaHeads为0.7995，低于DIM的1.2769。该结论只适用于离线内容创作和该数据集的自动重建管线，侧脸等非正对姿态下仍可能偏离标注，原文未披露训练、推理或部署成本。

## 🔗 开源与复现资源

本次未形成可展示的已核验资源记录，开放状态尚未核实。

可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 双人对话头要生成什么，为什么单人方法不够

这篇论文研究的是离线内容生成的双人对话头任务。输入是预先录好的两个人各自的音频流，输出是两个人每 1 帧的 3 维头部状态，包括脸的表情与姿态和眼睛的朝向。目标不只是嘴型对上各自的语音，还要让 2 人的非言语行为看起来像在交流，例如说话时等待反馈、倾听时点头和对视、想插话时用视线示意、听懂时微笑。

单人说话头方法通常只管一个人的唇同步和表情逼真，单人倾听头方法只管根据说话人单向生成一个反应，都没有把两个人的状态放在平等位置上联合建模。论文把已有对话头工作分成两类，一类是条件回应生成，需要已知对方的真实动作才能生成这一方，适合实时虚拟人但不适合两段动作都未知的内容创作；另一类是联合全序列生成，只给双路音频就一次生成 2 人全部动作，这正是本文的任务设置。

**FLAME 参数 × 三维视线：** FLAME 参数负责脸的几何与姿态，包括表情、头姿、眼睑和下颌，三维视线负责眼球朝向的俯仰和偏航，两者分工是前者管嘴脸怎么动、后者管眼睛往哪看，组合起来才构成论文要生成的完整头部状态。

论文反复强调的交互语义，指的是非言语行为在对话里的社会功能，例如调节轮换、表示在听和理解。举例来说，图 1 展示的 4 个小格就是一个教学例子：左边的人说话并等待反馈，右边的人用点头加对视表示肯定，随后用持续注视表示想补充，最后在对方说话时微笑。这组例子说明协调不是两段好看动作的简单拼接，而是带延迟的相互回应。

下面这张示意图先建立这种直觉，它不是实测结果，只是帮助理解为什么需要同时建模注视、头动和微笑。

> **看图路径：** 1. 先看四个分镜里说话与倾听角色如何轮换；2. 再看视线箭头、点头虚线与微笑符号出现在哪个回应位置；3. 对照下方图例区分对话气泡与心理活动气泡的含义

[![原论文 Fig. 1：Non-verbal cues as the “social glue” of a dyadic exchange.](https://arxiv.org/html/2611.06970v1/surface4.png)](https://arxiv.org/html/2611.06970v1/surface4.png)

*论文图 1。原论文 Fig. 1:：“Non-verbal cues as the “social glue” of a dyadic exchange.”。*

从图中可以看到，说话气泡表示说出的内容，思考气泡表示对对方行为的解读，视线箭头表示看向对方，头动虚线表示点头，问号和感叹号表示困惑与惊讶。关键在于每个非言语记号都出现在对话结构变化的位置，而不是随机出现，这正是后续要用离散线索去约束连续动作的动机。

### 已有两条路线分别缺了什么

第一条路线是说话人与倾听人分开建模。论文点名的 Zhou 等人用独立的说话生成器和倾听生成器加角色切换连接，代价是轮换处不连贯；DIM 用掩码对比学习联合建模但仍需人工指定谁是说话者，遇到同时说话适应性差；Talking Together 按说话概率插值说话和倾听嵌入，切换更平滑但仍不能表达连续双向耦合。这条路线的问题是角色是事先固定的，真实对话里 2 人随时可能同时说话或同时用眼神交流。

第二条路线是不分角色的 interlocutor 对 interlocutor，即两边用同样方法生成。INFP 通过低维运动隐空间预测 2 人头部，UniLS 先学无音频的自回归运动先验再用双轨音频微调，两者都只预测动作而不表示离散的社会行为，也没有评价交互协调；STEER 首次引入注视、头部节奏和情绪等非言语标签，但标签是用户给的控制信号而不是从音频推断的，交互行为由人指定而不是从对话推断。

本文与它们的差别在于输入、监督和运行阶段都对齐到联合全序列生成：输入只有双路音频，不需要对方真实动作；监督同时包含连续的 FLAME 加视线和 4 个二值线索；推理时一次前向同时输出 2 人的连续参数和离散线索。因此不能把条件回应任务的数字直接拿来比胜负，因为对方多用了真实动作作为条件。

### 输入输出和必须保留的信息是什么

形式化上，设视频帧数为 N，音频帧数为 5N/3，2 人的音频序列记为 Ua 和 Ub，经 HuBERT 得到 1024 维语音特征 Sa 和 Sb。模型要输出联合头部参数 Y=[Ya,Yb]，其中每 1 帧 y=[f,g,n]，f 是 58 维 FLAME 子集，包含 50 维表情、3 维头姿、2 维眼睑和 3 维下颌，g 是 2 维视线俯仰与偏航，n 是 4 维二值向量，分别表示注视对方、摇头、点头和微笑。

必须保留的信息有三层。一是各自语音的内容与节奏，用于驱动嘴部和表情；二是双路之间的相对时序，用于形成回应延迟，例如一方说完另一方隔一段再点头；三是离散线索携带的交互状态，用于约束连续动作应落在哪个社会意义合理的区域。输出要同时满足单人逼真和双人协调，评价也因此分成每人各自的保真与唇同步，以及 2 人之间的协调。

### DiaHeads 的整体流程是怎样的一次前向

DiaHeads 是一个变分自编码器式的联合生成器。左侧两路音频各经冻结的 HuBERT 得到特征，再由变换器融合成 1 个条件向量 c，这个向量同时看到 2 人的语音。训练时，真实的联合头部参数 Y 与 c 一起进入双分支编码器，得到共享隐变量 z；推理时从学到的先验中采样 z，再由共享解码器在 c 条件下一次重建 2 人的连续参数和离散线索。

4 个组件各有分工。生成器保证 2 人从同一个隐变量和同一个条件向量解码，从而能表达两个独立单人模型表达不了的依赖；离散线索分支通过专家乘积约束隐空间几何；流先验替代独立高斯先验以建模时间依赖；SyncNet 对每人单独加音频与唇动约束。论文明确面向离线场景，例如游戏 NPC 对话和动画预演，不追求实时交互。

下图是全文的方法总览，值得沿着输入到输出的主路径读一遍，再看两个编码分支在哪里汇合。

> **看图路径：** 1. 沿左侧双路音频到中间隐变量再到右侧双人输出看主路径；2. 比较上方高层线索分支与下方低层动作分支在何处汇合

[![原论文 Fig. 2：Overview of the proposed DiaHeads. The audio streams of both interlocutors are encoded by two frozen…](https://arxiv.org/html/2611.06970v1/framework3.png)](https://arxiv.org/html/2611.06970v1/framework3.png)

*论文图 2。原论文 Fig. 2:：“Overview of the proposed DiaHeads. The audio streams of both interlocutors are encoded by two frozen HuBERT backbones and fused into a conditioning vector c by a transformer.”。*

从图中可见，左侧 Ua 和 Ub 分别经过 CNN 编码器加 Transformer 得到 Sa 和 Sb，再拼成 S 并经 HuEnc 得到 c；中间上方高层线索编码器处理 N 得到高层均值方差，下方低层动作编码器处理 F 和 G 得到低层均值方差，两者在中间汇合成 z；下方流先验由翻转加 1 维卷积耦合层重复五次构成；右侧共享解码器输出 Y 帽，底部 SyncNet 用两路 1 维卷积编码器算余弦相似度。橙色是训练专用路径，黑色是推理路径。

### 双路音频如何变成统一条件

音频编码部分先用两个冻结的 HuBERT 主干分别处理 Ua 和 Ub，得到 Sa 和 Sb，再由 HuEnc 融合成条件向量 c。论文给出的关系可以写成条件向量的形成过程，它要计算的是把双人语音信息压缩成解码每 1 帧时都能用的上下文。

\[{c}=\text{HuEnc}(S_{a},S_{b}).\]

其中 c 就是融合后的条件向量，HuEnc 在实现上包含 1 维卷积、激活和归一化。关键是 c 同时包含 2 人的信息，后续编码器和解码器都以 c 为条件并通过 FiLM 调制注入，因此生成 A 的动作时能看到 B 的音频，反之亦然。有效性掩码 m 用于标记有效帧，保证填充或缺失帧不参与统计。

**HuBERT 特征 × 条件向量：** HuBERT 特征是对每路音频抽出的语音表示，条件向量是把两路 HuBERT 特征拼在一起再经变换得到的统一上下文，前者保留各自说话内容与节奏，后者让解码两人的每一帧时都能看到对方的音频，这是双向耦合的信息基础。

### 连续动作和离散线索在哪里汇合

双分支编码器把连续参数与离散线索分开处理。低层分支输入连续的 F 和 G，高层分支输入离散的 N，两者都以 c 为条件并使用同一掩码 m，分别输出各自的高斯均值与对数方差。这种分开处理的理由是两者层级不同，前者是每帧怎么动，后者是当前处于哪种社会状态。

汇合方式不是简单相加，而是把两个对角高斯相乘再归一化，得到自然参数相加的高斯。论文给出的融合公式要计算的是加权平均的均值和调和形式的方差，它约束的是分布层面而不是逐帧向量相加。

\[\begin{split}\mu&=\frac{\mu_{\text{low}}/e^{\sigma_{\text{low}}}+\mu_{\text{high}}/e^{\sigma_{\text{high}}}}{1/e^{\sigma_{\text{low}}}+1/e^{\sigma_{\text{high}}}},\\ \sigma&=-\log\!\left(\frac{1}{e^{\sigma_{\text{low}}}}+\frac{1}{e^{\sigma_{\text{high}}}}\right).\end{split}\]

其中 mu_low 和 sigma_low 来自低层动作编码器，mu_high 和 sigma_high 来自高层线索编码器，sigma 表示对数方差。只有两个专家都认为可能的隐区域才会被加强，例如微笑区域。由于 N 同时收集 2 人的线索，高层专家约束的是 2 人社会状态的组合，而不是各自独立，因此交互语义在这里进入生成。随后按重参数化采样 z，再由解码器重建联合参数 Y 帽。

**低层动作编码器 × 高层线索编码器 × 专家乘积：** 低层动作编码器看连续的 FLAME 和视线，负责音频到动作的映射，高层线索编码器看离散的注视、摇头、点头、微笑，负责交互语义约束，专家乘积把两个高斯后验按精度加权相乘，只保留双方都认为可能的隐区域，从而让离散线索在分布层面约束连续动作。

### 流先验和唇同步约束各自解决什么

标准变分自编码器的独立高斯先验把各帧当成独立的，会导致时间不连贯和多样性不足。DiaHeads 用一个以 c 为条件的流先验 p(z|c) 替代它，目标是学到时间相关且更有表达力的隐分布。因为隐变量是 2 人共享的，这个先验建模的是耦合动作的时间结构，而不是单人动作。论文强调流模型适合这种低维序列参数，能做精确密度估计和高效采样，不需要扩散模型那样的迭代去噪。

**标准高斯先验 × 流先验：** 标准高斯先验假设各帧隐变量独立，难以表达动作的时间连贯和双人耦合，流先验用可逆变换把简单分布变成随音频条件变化的时间相关分布，组合后先验本身就带有耦合动作的时间结构，弥补了独立高斯的不足。

唇同步由预训练的 SyncNet 提供。它把 FLAME 中的表情加下颌共 53 维作为唇动代理 M，与对应的 HuBERT 片段分别经 1 维卷积加批归一化加激活编码成 512 维向量，再算余弦相似度并映射到单位区间。公式要计算的是两个嵌入的夹角相似度，越接近 1 表示越同步。

\[d=\text{cosine\_similarity}(e_{m},e_{s})=\frac{e_{m}\cdot e_{s}}{\lVert e_{m}\rVert\times\lVert e_{s}\rVert}.\]

其中 em 是唇动嵌入，es 是音频嵌入。训练 SyncNet 时用二值交叉熵区分同步与不同步，生成阶段则要求生成动作与各自音频的相似度接近 1，且对 A 和 B 分别计算，避免把 1 人的嘴接到另 1 人的音频上。

### 训练分几个阶段，损失由哪些项组成

训练采用多阶段策略。先独立预训练 SyncNet，使其能判断动作与语音是否同步；再训练 DiaHeads 主体并把同步损失权重设为零，先学会基本重建；当验证集同步损失降到阈值以下，才激活同步项做端到端联合优化。超参数与阶段切换阈值只在验证集上调，不在测试集上调。

总损失是多项加权和，包括 KL 散度、均方重建、连续性、二值交叉熵和同步损失。其中 KL 项衡量近似后验与流先验的差异，论文写成的期望形式要约束的是隐分布不要偏离条件先验。

\[\mathcal{L}_{\text{kl}}=\mathbb{E}_{q}\!\left[\log\frac{q({z}\mid{Y},{c})}{p({z}\mid{c})}\right].\]

其中 q(z|Y,c) 是双分支融合后的近似后验，p(z|c) 是流先验。均方项只重建连续的 f 和 g 并按掩码加权；连续性项约束预测的 1 阶时间差与真实差接近，并加上首帧重建；BCE 项监督 4 个离散线索经 Sigmoid 后的概率；同步项对 A 和 B 各算一次 SyncNet 分数与标签 1 的交叉熵。每一项都定义在联合序列 Y=[Ya,Yb] 上，因此目标拟合的是 2 人联合分布，而不是两个单人模型之和。

### CANDOR-FG 是怎么造的，指标如何分工

CANDOR-FG 从 CANDOR 长对话切出 28 到 32 秒片段，要求每段按文本至少包含完整的 ABAB 轮换，从而保证是双向交互而非独白，初切得到 16852 段。2 阶段过滤去掉连续 60 帧以上严重遮挡或机位大变，以及注视失败超 24 帧或 FLAME 提取失败超 60 帧的片段，短缺口用线性插值补齐，最终保留 14204 段高质量对话。按会话划分训练、验证、测试约为 1003、78、77 个会话，按片段为 12386、909、909 段，人物不重叠，划分索引随数据发布。

连续目标用 SMIRK 拟合 FLAME 得到每帧形状、表情、头姿、眼睑、下颌和相机参数，任务只用其中 58 维；视线用基于 L2CS-Net 的 MobileGaze 估计俯仰与偏航，在 Gaze360 上平均绝对误差为 11.33 度。离散线索不是估计的，而是继承 CANDOR 原有的人群标注帧级行为，因此是人工标注而非管线估计。可靠性方面，300 个抽查帧中视线 89% 判为正确、6% 近似正确、5% 错误；FLAME 系数因单帧无法可靠目检且渲染是非线性函数，未做同等目检，论文明确 FLAME 指标只作为同一管线下的相对比较。

评价分两组。保真与同步是每人各自算再平均：FLAME 均方误差管几何与姿态重建，Gaze 均方误差管视线方向，Sync Error 用 SyncNet 衡量唇音对齐，三者都是越小越好。协调是 2 人之间的关系：主要指标 Interaction DTW 计算 2 人生成序列的动态时间弯曲距离，FLAME 与视线按 0.7 和 0.3 加权，越小表示耦合越强，能容忍非线性延迟。

**Interaction DTW × DMSS × MAD × Lag：** Interaction DTW 是两人动作序列之间允许时间错位的弯曲距离，越小表示耦合越强，DMSS 是正负 30 帧内最大滞后互相关，MAD 是逐帧差的平均绝对值，Lag 是取得最大相关的延迟，三者分工是前者防镜像捷径看是否坍缩成同一动作，后两者看耦合是机械复制还是自然延迟反应，组合起来才能判断 DTW 降低是否健康。

基线都用同一数据管线重训以保证公平，包括单人的 SadTalker 和 SyncTalk 各自跑两次分别生成 2 人，以及对话类的 DIM。INFP、Zhou 等人和 DualTalk 因无训练代码或需要对方真实动作而未纳入公平重训比较。

### 主结果在保真与协调之间说明了什么

比较要回答的问题是：在同样的 CANDOR-FG 划分和同一管线下，联合生成加线索约束是否同时保住单人质量并改善双人协调。指标方向是 4 个主指标越小越好，表前需要明确这一点以及基线都已重训。

| Model | FLAME MSE↓ | Gaze MSE↓ | Sync Error↓ | Interaction DTW↓ |
| --- | --- | --- | --- | --- |
| Single-speaker talking heads |  |  |  |  |
| SadTalker | 0.5523 | 0.1047 | 1.3352 | 0.6963 |
| SyncTalk | 0.7603 | 0.0857 | 1.5703 | 0.8717 |
| Dialogue heads |  |  |  |  |
| DIM | 0.8164 | 0.0858 | 1.2769 | 0.7526 |
| DiaHeads (Ours) | 0.6662 | 0.0808 | 0.7995 | 0.3171 |

表后解释如下。DiaHeads 的 FLAME 均方误差为 0.6662，高于 SadTalker 的 0.5523 但低于 SyncTalk 的 0.7603 和 DIM 的 0.8164；Gaze 均方误差为 0.0808，是四者最低；Sync Error 为 0.7995，相对最接近的 DIM 的 1.2769 下降约 37.4%；Interaction DTW 为 0.3171，相对 DIM 的 0.7526 下降约 57.9%。

论文对 FLAME 差距的解释是建模目标不同：部分真值的头姿是侧视或偏斜，单人模型直接对齐侧视标注，而 DiaHeads 倾向生成面向对方的社交合理头姿，因此误差更高，这恰好说明只看单人重建会漏掉交互合理性。图 3 的保真与协调权衡也显示只有 DiaHeads 和 SadTalker 落在帕累托前沿，前者用适度的 FLAME 代价换来最低的 DTW。

下图把这种权衡可视化，横轴是 FLAME 误差，纵轴是交互距离，越靠左下越好，值得先看散点再看虚线前沿。

> **看图路径：** 1. 看横轴 FLAME 误差与纵轴交互距离构成的散点位置；2. 确认虚线连接的帕累托前沿经过哪两个方法

[![原论文 Fig. 3：Fidelity–coordination trade-off on CANDOR-FG.](https://arxiv.org/html/2611.06970v1/tradeoff.svg)](https://arxiv.org/html/2611.06970v1/tradeoff.svg)

*论文图 3。原论文 Fig. 3:：“Fidelity–coordination trade-off on CANDOR-FG.”。*

图中实际可见的是 SadTalker 在左上方，SyncTalk 和 DIM 在右上方，DiaHeads 单独落在下方中间，虚线连接 SadTalker 与 DiaHeads 构成前沿。这帮助理解结论的适用条件：若只关心单帧脸形贴合真值，SadTalker 仍有优势；若同时要求双人呼应，DiaHeads 的协调增益更大。

### DTW 降低是真耦合还是镜像复制

因为弯曲距离可能被完全镜像的退化解刷低，论文加了 3 个辅助诊断。DMSS 越高越好，MAD 接近零表示 2 人坍缩成同一动作，自然对话实测范围约为 0.3 到 0.6，Lag 是最大相关处的延迟，零延迟复制和过长脱节都不好。

| Method | DMSS↑ | MAD | Lag |
| --- | --- | --- | --- |
| DiaHeads (Ours) | 0.275 | 0.345 | 17.4 |
| DIM | 0.221 | 0.622 | 17.0 |
| SyncTalk | 0.196 | 0.615 | 19.5 |
| SadTalker | 0.187 | 0.582 | 18.2 |

表后解释如下。DiaHeads 的 DMSS 为 0.275，高于 DIM 的 0.221、SyncTalk 的 0.196 和 SadTalker 的 0.187，相对第 2 名高约 20%；MAD 为 0.345，落在 0.3 到 0.6 的自然区间内偏下位置，而 3 个基线中 SadTalker 的 0.582 同样落在带内，SyncTalk 的 0.615 和 DIM 的 0.622 紧贴上边界之上，表现为有分离无耦合；Lag 都在 17.0 到 19.5 帧范围，DiaHeads 为 17.4 帧，处于生理合理的反应延迟附近而非零延迟复制，因此协调优势不是机械镜像。

下图把 3 组诊断并排展示，便于一次看清耦合强度、坍缩风险和延迟结构，读图时先对比高低再看区间。

> **看图路径：** 1. 对比三组柱状图中 DiaHeads 与三个基线的高低顺序；2. 看 MAD 子图中健康区间阴影带与各方法柱子的相对位置；3. 看 Lag 子图中各方法的延迟帧数是否接近零

[![原论文 Fig. 4：Coordination diagnostics. (a) DMSS, the maximum lagged cross-correlation between the two…](https://arxiv.org/html/2611.06970v1/coord_metrics.svg)](https://arxiv.org/html/2611.06970v1/coord_metrics.svg)

*论文图 4。原论文 Fig. 4:：“Coordination diagnostics. (a) DMSS, the maximum lagged cross-correlation between the two participants over \tau\in[-30,30] frames, where higher is better.”。*

从像素可见，左图 DiaHeads 的 DMSS 柱最高，中图 DiaHeads 为 0.345 落在绿色健康带内偏下，SadTalker 的 0.582 也落在带内，SyncTalk 和 DIM 紧贴上边界，右图各方法延迟都在 15 到 20 帧之间。这支持论文的判断：两条轨迹是相互条件下的滞后耦合，而不是各自合理但互不相关。定性例子也一致：在 30 秒片段中 8 秒处 B 在 A 说话期间短暂插话，DiaHeads 让 B 张嘴同时注视 A 形成附和，20 到 23 秒处 A 在倾听时点头并保持对视，而基线缺点头或缺注视。

### 拿掉联合生成、流先验和同步约束会怎样

消融要回答的是协调增益到底来自哪里。4 个变体分别是 noFlow 退回标准高斯先验，noSync 去掉 SyncNet 损失，Ind. 把对方音频置零并跑两次各取一半拼接从而切断交互，noGaze 去掉视线目标只保留 FLAME。需要提醒的是 noGaze 的 DTW 只在 FLAME 上计算，因缺少视线通道而与其他项不可直接比较。

| Model | FLAME MSE↓ | Gaze MSE↓ | Sync Error↓ | Interaction DTW↓ |
| --- | --- | --- | --- | --- |
| Full | 0.6662 | 0.0808 | 0.7995 | 0.3171 |
| noFlow | 0.8254 | 0.0964 | 0.8041 | 0.5082 |
| noSync | 0.8926 | 0.0968 | 1.2301 | 0.7719 |
| Ind. | 0.9503 | 0.1064 | 0.8941 | 1.3505 |
| noGaze | 0.8528 | n/a | 0.7472 | 1.0400 |

表后解释如下。完整模型四项为 0.6662、0.0808、0.7995、0.3171；noFlow 的 FLAME 升到 0.8254，DTW 升到 0.5082，相对恶化约 23.9% 和 60.3%，说明流先验不只是多样性机制；noSync 的同步误差升到 1.2301，DTW 升到 0.7719，相对恶化约 53.9% 和 143%，说明唇音约束也携带协调信息；Ind. 在四项上最差，FLAME 为 0.9503，DTW 为 1.3505，相对恶化约 42.6% 和 326%，是最直接的证据，表明协调来自联合生成而非单人音频驱动；noGaze 的同步误差为 0.7472，比完整模型好约 6.5%，这是因为视线不是 SyncNet 输入，去掉后优化更专，但其 DTW 为 1.04 且口径不同，不能据此说去掉视线更好。

### 四个离散线索各自贡献了什么

第二个消融只动高层线索的配置，比较全线索、只留注视、只留头动、只留微笑和无线索。问题是音频本身能驱动基本脸动，但没有结构化反馈时交互感知是否会垮。指标方向仍是越小越好。

| Model | FLAME MSE↓ | Gaze MSE↓ | Sync Error↓ | Interaction DTW↓ |
| --- | --- | --- | --- | --- |
| Full (all cues) | 0.6662 | 0.0808 | 0.7995 | 0.3171 |
| Gaze only | 0.6869 | 0.0797 | 0.8030 | 0.3520 |
| Head only | 0.6676 | 0.0789 | 0.7832 | 0.3509 |
| Smile only | 0.6799 | 0.0790 | 0.8024 | 0.3497 |
| No cues | 0.6782 | 0.0821 | 0.8045 | 0.3675 |

表后解释如下。全线索的 DTW 为 0.3171，只留注视为 0.3520、只留头动为 0.3509、只留微笑为 0.3497、无线索为 0.3675，全线索相对四者分别低约 10.0%、9.6%、9.3% 和 13.7%。其中只留头动最接近完整模型，论文据此认为点头摇头对稳定脸动和组织轮换有基础作用；只留注视的视线误差尚可但同步差，说明光有注视撑不起往返反馈；只留微笑主要改善唇区而非整体交互。

无线索尽管低层脸动尚可但交互最差，支持多线索联合建模的必要性。人类评价进一步显示优势来自感知的交互协调而非单纯动作逼真：16 名有效被试看 28 个随机视频，DiaHeads 在总体自然度 3.73 和交互协调 3.67 上均为最高，盲选占比 51.79%，且与各基线的成对比较均显著。

### 结论在什么条件下才成立，还有哪些缺口

成立条件首先是离线双音频设置。模型需要同时拿到 2 人的完整音频才能构建统一条件向量，不适用于只有 1 人音频或需要实时根据真人行为回应的虚拟人场景。其次是同一重建管线下的相对比较。由于连续真值来自 SMIRK 和视线估计器而非动捕，FLAME 数字是相对误差而非绝对真值误差，换一条重建管线数值会变。第三是 DTW 结论依赖辅助诊断共同成立，若只看 DTW 可能被镜像解误导，本文用 DMSS、MAD 和 Lag 排除了坍缩与零延迟复制，但这组诊断仍是运动层面的统计，没有直接测量误判率、延迟或计算成本。

未胜出项也要保留。FLAME 重建上 SadTalker 更好，noGaze 变体在同步误差上比完整模型低，这些都说明单人贴合与唇音单项可以靠更专的目标换来，但代价是交互协调下降。论文没有报告训练资源、推理开销和输出帧率，因此不能承诺实时性或成本优势。视线标注虽经 300 帧抽查，但 FLAME 未做同等目检，侧视片段的处理仍依赖论文的解释而非独立验证。

### 要复现第一步做什么，需要哪些超参数与条件

复现第一步是按论文规则重建 CANDOR-FG 划分与特征。按会话切出 28 到 32 秒且含 ABAB 轮换的片段，执行遮挡与重建失败过滤，用同一 SMIRK 管线抽 58 维 FLAME 子集并用同一视线估计器得到俯仰偏航，离散四线索直接继承 CANDOR 人群标注而不要自己估计，否则监督语义会变。音频侧用冻结 HuBERT 抽 1024 维特征并按 5N/3 对齐视频 N 帧，保留有效帧掩码 m。

模型侧需实现双分支变分编码器加专家乘积融合、五块翻转加 1 维卷积耦合层的流先验、共享解码器，以及 53 维唇动代理的 SyncNet。训练顺序不能打乱：先训 SyncNet，再零同步权重训重建，待验证同步损失过阈值再联合优化。关键信息条件是推理时必须同时输入双路音频，独立生成变体已证明只给单路音频会大幅恶化。

关于可用性，现有证据未能确认作者资源已公开，因此本文不声称代码、模型或数据已公开或当前可用。来源未确认不是技术缺陷，但复现意味着需要自行实现管线并申请原 CANDOR 数据。

### 什么时候值得尝试，一句话总结与待补验证

当任务是离线生成双人对话头、手头只有双路音频、且评价包含双人呼应而不仅是单人唇同步时，值得尝试这种一次生成 2 人的做法。它的代价是单人面部贴合可能略逊于最专的单人模型，且需要额外的线索标注与多阶段训练。

一句话总结是：把双音频融成统一条件并用共享隐变量一次解码 2 人，再用注视、摇头、点头、微笑 4 个离散状态在分布层面约束隐空间，能在 CANDOR-FG 上以适度 FLAME 代价换来大幅协调提升，但结论限于同一自动重建管线与离线设置。

还需补的验证包括换一条 FLAME 重建管线看相对排序是否稳定、在侧视占比不同的子集上单独报告 FLAME 与主观合理性的关系，以及补充训练与推理成本、失败样例和跨数据集泛化，才能把协调增益从当前数据集推广到更一般的创作管线。

<details>
<summary>📎 论文与评分元数据</summary>

排名：前50% | 文档类型：方法研究 | [arXiv 原文](https://arxiv.org/abs/2611.06970v1)

</details>

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。

- 评分规则：type-aware-v1

- 评分模型：muse-spark-1.3-contributor

- 评分请求协议：openai_responses

---

[← 返回 2026-11-09 语音/音乐/音频论文速递](/audio-paper-digest-blog/posts/2026-11-09/)
