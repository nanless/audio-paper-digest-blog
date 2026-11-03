---
title: "Continual Residual Memory for Gradient-Free Test-Time Adaptation in Speech Enhancement"
date: 2026-11-03
draft: false
tags: [语音增强, 测试时自适应, 持续学习, 语音]
categories: [论文速递]
description: "针对离线训练的语音增强模型在新说话人、噪声和声学条件下退化的问题，论文提出冻结主干、只让记忆状态演化的 Continual Residual Memory，通过分时频有界回收被丢掉的残差并用历史原型修正，在三个目标集上一致改进冻结 CMGAN 且额外开销很小。"
hiddenInHomeList: true
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_arxiv_id: "2611.01023"
paper_digest_workbench_contract: "researcher-workbench"
paper_digest_workbench_schema_fingerprint: "1f09b594c317cc38e934de27a5b0e8ceb4baa50ef79bd4f8683dd9adea720fe7"
paper_digest_reader_title: "不调参数也能适应新环境：用被丢掉的残差做语音增强"
paper_digest_original_title: "Continual Residual Memory for Gradient-Free Test-Time Adaptation in Speech Enhancement"
paper_digest_arxiv_version: 1
paper_digest_arxiv_versioned_id: "2611.01023v1"
paper_digest_arxiv_abs_url: "https://arxiv.org/abs/2611.01023v1"
paper_digest_arxiv_pdf_url: "https://arxiv.org/pdf/2611.01023v1.pdf"
paper_digest_primary_task: "语音增强"
paper_digest_tags_contract: "paper-tag-flat-tags"
paper_digest_tags_schema_fingerprint: "27e36280a4b8d3df62ebe54d3ab037920f4d69feb2b554163f01bbae2caf4338"
paper_digest_tags_selection_contract: "paper-tag-selection"
paper_digest_tags_registry_version: "paper-tag-catalog"
paper_digest_tags_registry_sha256: "9673bc0122e1905a5dcfd8b223675400cc2fa4c36095bc0e5f817edf99a0ec5c"
paper_digest_tags_concepts: [{"facet":"task","id":"task.speech-enhancement","label":"语音增强"},{"facet":"method","id":"method.test-time-adaptation","label":"测试时自适应"},{"facet":"method","id":"method.continual","label":"持续学习"},{"facet":"signal","id":"signal.speech","label":"语音"}]
paper_digest_primary_method: "测试时自适应"
paper_digest_score: 7.6
paper_digest_rank_bucket: "前25%"
paper_digest_document_type: "方法研究"
paper_digest_one_sentence: "针对离线训练的语音增强模型在新说话人、噪声和声学条件下退化的问题，论文提出冻结主干、只让记忆状态演化的 Continual Residual Memory，通过分时频有界回收被丢掉的残差并用历史原型修正，在三个目标集上一致改进冻结 CMGAN 且额外开销很小。"
paper_digest_authors: [{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Yijia Shan"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Tianrui Wang"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Zixiang Wang"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Sheng Wang"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Yao Li"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Yu Wang"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Xie Chen"}]
paper_digest_abstract_sha256: "b9e46bd040c9479b7d9681cf09771113a0df6a199818a15b958229fa3999aff7"
paper_digest_sidecars: {"citation.bib":{"sha256":"97af19fd6099bd8549836009b11999bb40b86444e496731ba04e59fb124e3cc4","url":"/audio-paper-digest-blog/client/papers/2026-11-03/2611-01023/citation.bib"},"citation.json":{"sha256":"c6ef4d94804aa96231fef6a4e23108d50d9b55c9f45178040240678a89a97f86","url":"/audio-paper-digest-blog/client/papers/2026-11-03/2611-01023/citation.json"},"citation.ris":{"sha256":"185d05c7ee979fa05ca0ebb8919e29e75a181defede2719026e73937f7368239","url":"/audio-paper-digest-blog/client/papers/2026-11-03/2611-01023/citation.ris"},"rethink-context.json":{"contract":"paper-research-context","schemaFingerprint":"5d4e79f7d3ee65b39ccb38281548bf20a1b2041ab7a27625eaf97ab9909a8383","sha256":"9a8f6d63c98022788030da0316983f2e33e214ad819827741cf064bb82e13112","url":"/audio-paper-digest-blog/client/papers/2026-11-03/2611-01023/rethink-context.json"}}
paper_digest_api_reader_contract: "beginner-researcher"
paper_digest_api_reader_schema_fingerprint: "cd8baf5b8bda3a49eec64f6005931af63de4e9a13148cba5f354c661ca6e9df2"
paper_digest_api_reader_article_sha256: "fb1cb98785a2f0497b4fba507449ca80fb7c9a6dc231d96cb702f26ae2b145ad"
paper_digest_api_reader_plan_sha256: "47085fe32eb050d0900b2dd59bee51f8eb6f9df1d83d8b7a3918ad01b23f2446"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings"
paper_digest_api_reader_source_binding_schema_fingerprint: "d2a2607a6e561909473022eb43f56332ee357af8568566a095c29083ffdec9cc"
paper_digest_api_reader_source_bindings_sha256: "efd3afee96603a7a80a1dadcbd6a28123964d1611f99d0a31b1963e7d981734c"
paper_digest_api_reader_source_table_count: 4
paper_digest_api_reader_source_formula_count: 5
paper_digest_api_reader_structured_artifacts_sha256: "3add58785854fa3e9c0103f9629fa5fe146ed4492a5daecf1e04a6b63a75efbc"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity"
paper_digest_api_reader_author_identity_schema_fingerprint: "1e3fd3a9a56c9a5bf52df8df5022690b9a3fa92e83e934f295af87c0e258ed2f"
paper_digest_api_reader_author_identity_sha256: "9a40556bdd0c4100a429dcba9e0a29f00da75f0fc6c5e3d4dce050aa90c494ef"
paper_digest_api_reader_author_count: 7
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity"
paper_digest_api_reader_resource_identity_schema_fingerprint: "33b0be17118be61f39b85ce690c8da17e91f2864bb65e85284f60c40067328e0"
paper_digest_api_reader_resource_identity_sha256: "44cdf27fae793e2ea553ffd660184e13657fd76baeceee71958afd610670dbfa"
paper_digest_api_reader_resource_count: 1
paper_digest_api_reader_figure_persistence: "ephemeral-no-persisted-figure-assets-v1"
paper_digest_api_reader_decision_projection: "api-reader-decision-projection"
paper_digest_api_reader_decision_projection_schema_fingerprint: "e56feb5ab75c8710904916b898f73dab9bb18bdf65bb60b7ed2edf7f99cea860"
---

# 📄 不调参数也能适应新环境：用被丢掉的残差做语音增强

> 英文题目：*[Continual Residual Memory for Gradient-Free Test-Time Adaptation in Speech Enhancement](https://arxiv.org/abs/2611.01023v1)*

<!--paper-tag-hierarchy-v1:start-->

**研究分类**

- **研究任务**：[语音增强](/audio-paper-digest-blog/papers/?concept=task.speech-enhancement)
- **研究方法**：[迁移学习](/audio-paper-digest-blog/papers/?concept=method.transfer) → [领域适应](/audio-paper-digest-blog/papers/?concept=method.domain-adaptation) → [测试时自适应](/audio-paper-digest-blog/papers/?concept=method.test-time-adaptation)；[持续学习](/audio-paper-digest-blog/papers/?concept=method.continual)
- **信号**：[语音](/audio-paper-digest-blog/papers/?concept=signal.speech)

<!--paper-tag-hierarchy-v1:end-->

> 评分：**7.6/10** | 创新 1.2/2 | 技术严谨 1.1/1.5 | 实验充分 1.3/1.5 | 清晰度 0.8/1 | 影响力 0.9/1.5 | 开源 1/1.5 | 可复现 0.3/0.5 | 工程/实践 1/1.5


## 👥 作者与机构

- Yijia Shan：机构信息未能在本次解析中与作者逐人可靠绑定
- Tianrui Wang：机构信息未能在本次解析中与作者逐人可靠绑定
- Zixiang Wang：机构信息未能在本次解析中与作者逐人可靠绑定
- Sheng Wang：机构信息未能在本次解析中与作者逐人可靠绑定
- Yao Li：机构信息未能在本次解析中与作者逐人可靠绑定
- Yu Wang：机构信息未能在本次解析中与作者逐人可靠绑定
- Xie Chen：机构信息未能在本次解析中与作者逐人可靠绑定

## 📌 核心摘要

离线训练的语音增强模型在说话人、噪声和声学条件变化时会出现过抑制，把有用语音也当作噪声去掉，测试时没有干净参考可用，难以纠正这类损失。本文把带噪输入与冻结增强输出之差定义为丢弃残差，把问题转为在时频格点上判断哪些残差应捡回、捡回多少。持续残差记忆（Continual Residual Memory，CRM）先只用当前句的增强估计和残差预测有界恢复增益，直接加权加回到增强谱上得到无记忆估计。再用之前句子积累的残差原型对该增益做加减修正，记忆为空时修正关闭并退回无记忆估计，测试时骨干和网络参数保持冻结，只有记忆状态随句子演进。训练分两阶段进行，先优化恢复投影器和增益头，再冻结它们优化记忆条件精修分支，并用匹配、打乱和空记忆条件保护无记忆回退。在以CMGAN为骨干的对照中，DNS集上CRM的PESQ为3.11，高于冻结基线的3.00和MPol的3.00，同时CSIG为4.36、COVL为3.75，均为同组最好。该方法部署时只增加37.09K参数和约2.20%的计算量，在RTX 4090上推理实时系数（real-time factor，RTF）从0.0340升至0.0387，仍远小于1.0，无需在线参数优化。结论适用于论文评测的合成无混响、需求噪声和音乐干扰条件，未验证长时漂移或强混响下的稳定性。

## 🔗 开源与复现资源

- 代码相关资源：<https://github.com/Ada312/continual-residual-memory> — 链接可访问（HTTP 200）

可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 语音增强在部署时会遇到什么输入和输出

语音增强的输入是带噪波形 y，目标是恢复出接近干净语音的波形。现代神经增强器一般离线训练好后冻结部署，输出增强语音。部署中说话人、噪声类型、录音环境变化会造成失配，表现为过度抑制，即把部分语音也当噪声去掉，或者残留噪声较多。评价时用干净参考只做打分，不参与适应。本文训练只用 EARS-WHAM 的 8192 个混合句和 632 个说话人不重叠的源域保留集选模型，目标域干净语音只用于评价，这是理解后文测试时自适应成立条件的第一点。

增强主干给出估计后，带噪输入减去该估计得到丢弃残差 r。r 不是直接可用的干净语音，它同时包含被去掉的噪声和可能被误伤的语音。如果把 r 全部加回去，噪声也会回来，所以必须做有选择的、按时频格点区分的回收。论文把处理放在短时傅里叶变换域，对增强谱和残差谱做功率压缩后的实部虚部、对数幅度比和相位差正余弦共 7 通道特征，再预测每个格点的恢复比例，这是后文所有增益和记忆设计的对象。

### 已有测试时自适应路线为什么没有用残差历史

论文列出的同任务路线包括自监督测试时训练、基于嵌入的 LaDen、掩蔽极化的 MPol、持续自训练和基于知识蒸馏的个性化。它们的共同点是在测试阶段更新主干的部分参数，需要反向梯度，并且多依赖主干内部表示。主实验把 LaDen、MPol 和本文方法放在同一 CMGAN 起点和同一测试流程下比较，其中 LaDen 和 MPol 在测试时调整选定的 CMGAN 参数，而本文方法冻结 CMGAN 和自身模块，只演化记忆状态。

另一条相关路线是复用被丢弃信息以减轻处理失真，以及残差重混和后处理以缓解过度抑制。它们说明残差有用，但需要选择性恢复，直接恢复全部残差会重新引入被抑制的噪声。更重要的是，这些工作没有把前面句子的残差历史用于修正后面句子的恢复决策，也就没有持续测试时过程。本文的切入点正是把当前句局部证据和前面句子的残差模式结合起来，且全程不用梯度更新参数。

### 论文要解决的具体失配和约束是什么

具体问题是冻结增强器在目标测试流上遇到分布失配，缺少目标域干净语音，仍希望逐句改善增强质量。约束有 3 条。第一，不能在部署时做在线参数优化，要保持轻量和稳定。第二，只能用因果历史，当前句推理只能用过去句子的记忆，当前句残差只能在输出产生后再写入，不能影响自身。第三，恢复量必须有界，且在记忆为空或不可靠时能退回只用当前句的估计。

举例说明，假设连续多句都在类似音乐噪声下测试，主干在某些频段反复把谐波当噪声去掉，单看当前句可能难以判断该拿回多少。如果前面句子已经积累了残差中音乐成分的频谱轮廓，当前句就可以更稳地决定在哪些格点多拿、哪些格点少拿。但若历史来自完全不同的噪声，直接照搬会出错，所以还需要兜底和对有害历史的约束。

### 整体流程如何围绕冻结主干组织两步恢复

对第 t 个句子，冻结主干输出估计波形，带噪波形减去它得到残差。两者经短时傅里叶变换得到估计谱和残差谱，先由恢复投影器和增益头给出只依赖当前句的静态增益，再由记忆条件精修器结合过去原型记忆给出动态增益，最后用动态增益乘残差谱加回估计谱，经逆变换得到最终波形。部署时主干和两个模块都冻结，只有原型记忆随句子推进演化。

下图上半是带残差回收的增强管线，下半是 2 阶段训练与因果记忆流，读图时注意前向、训练专用和测试时记忆 3 类箭头的区别。

> **看图路径：** 1. 先沿上半部分从带噪语音到冻结主干、再到残差相减与频谱相加的主路径看信号走向；2. 再看下半部分第一阶段与第二阶段分别训练哪些模块、冻结哪些模块；3. 对照图例区分前向、训练专用流和测试时记忆流，确认记忆只在输出后更新；4. 观察记忆修正量与局部增益在加法节点汇合后再乘到残差谱上

[![原论文 Figure 1：CRM overview. The upper panel shows the overall enhancement pipeline with residual recovery…](https://arxiv.org/html/2611.01023v1/CRM_overview.png)](https://arxiv.org/html/2611.01023v1/CRM_overview.png)

*论文图 1。原论文 Figure 1:：“CRM overview. The upper panel shows the overall enhancement pipeline with residual recovery around a frozen backbone, while the lower panel shows two-stage training and causal…”。*

上图确实可见：上方从 y 经冻结增强主干得到估计，再相减得到残差，两路频谱在增益相乘与加法节点汇合后经逆变换输出；下方从频谱特征经恢复投影器得到隐表示，一路进增益头得到静态增益，另一路与过去记忆一起进记忆条件精修器得到修正量，两增益相加得到动态增益，干净参考只连向两个训练损失，记忆从过去状态更新到当前状态且标注为推理后更新。这帮助理解为何测试时只有记忆在变，以及静态估计为何是兜底。

### 当前句如何得到有界的时频恢复增益

当前句处理的对象是 7 通道时频特征，由估计谱和残差谱的功率压缩实部虚部、稳定化对数幅度比、正余弦相位差拼接而成，分别刻画频谱内容、残差相对强度和局部相位一致性。恢复投影器先升到 32 通道，再经 6 个门控扩张残差块得到隐表示，增益头用 1×1 卷积输出对数图，经 Sigmoid 乘以上限得到静态增益，再逐点乘残差谱加回估计谱。上限 gmax 在部署配置中取 0.10，含义是每个格点至多拿回残差的一小部分，从参数上堵住大面积倒灌噪声的可能。

训练时干净参考只在离线阶段使用，目标之一是让预测增益接近把理想修正投影到残差方向得到的 oracle 增益。该 oracle 把干净谱减估计谱的差投影到残差上，再截断到有效区间，分母加稳定常数避免除零。

\[g_{t}^{\star}=\Pi_{[0,g_{\max}]}\left(\frac{\Re\{R_{t}^{\ast}(X_{t}^{\mathrm{clean}}-\hat{X}_{t})\}}{\max(|R_{t}|^{2},\epsilon_{\mathrm{proj}})}\right).\]

上式要计算的是每个格点理想的恢复比例，分子是残差共轭与理想修正的内积实部，分母是残差功率，截断保证落在允许范围内。它对应的投影损失用残差功率加权的平滑 L1 衡量预测与 oracle 的差距，使训练更关注残差能量大的格点。

**丢弃残差 × 时频恢复增益：** 丢弃残差指带噪输入减去冻结主干输出后剩下的部分，里面既有被去掉的噪声，也可能有被过度抑制的语音；时频恢复增益指在每个时频格点上决定拿回多少残差的 0 到上限之间的实数。两者搭配的意义是只在可能是语音的格点上小幅拿回残差，避免把噪声整体倒回去。

### 原型记忆如何表示过去残差并参与修正

记忆在第 t 句之前存至多 Kmax 个原型，每个原型记录残差对数功率在频率维的均值、方差和观测计数，部署时 Kmax 取 64。当前残差先按帧取中值再取对数压缩成按频率的摘要向量，用于检索；写入时则不同，只选主干输出能量占比最低的 30% 帧，即残差主导帧，取其中值轮廓作为更新依据，避免把语音主导帧的结构污染记忆。

检索距离同时比较去均值后的谱形状差异和整体能量差异，前者按原型方差归一化并加稳定项，后者有权重系数，温度系数控制权重尖锐程度，再按累积权重阈值选出高权重原型子集做加权聚合。若记忆为空，上下文直接置零，修正关闭。

\[u_{t}(f)=\operatorname{median}_{\tau}\log\left(\max\left(|R_{t}(f,\tau)|^{2},\epsilon_{\mathrm{mem}}\right)\right),\]

上式把当前残差在每帧的功率谱取对数后沿时间取中值，得到随频率变化的摘要，epsilon 取 10−8 保证数值稳定。它是检索的查询，也是写入时经残差主导帧筛选后的变体的基础。

\[D_{m}(u_{t})=\operatorname{mean}_{f}\left[\frac{(\tilde{\mu}_{m}-\tilde{u}_{t})^{2}}{v_{m}+\lambda_{\mathrm{var}}}\right]+\lambda_{\mathrm{level}}(\bar{\mu}_{m}-\bar{u}_{t})^{2},\]

上式是查询与每个原型的距离，第一项是形状失配按方差归一化后的频率平均，第二项是整体能量失配，分别由方差稳定项和能量权重调节。距离越小权重越大，用于聚合原型均值方差并构造上下文。

写入时用同样的距离把新观测匹配到最近原型，足够新则建新原型，否则更新均值方差计数，冗余原型可合并，满时只替换久未使用的原型。帧能量占比的计算如下，值越低表示该帧残差占比越高。

\[q_{t,\tau}=\frac{\sum_{f}|\hat{X}_{t}(f,\tau)|^{2}}{\sum_{f}|\hat{X}_{t}(f,\tau)|^{2}+\sum_{f}|R_{t}(f,\tau)|^{2}+\epsilon_{\mathrm{mem}}},\]

该分数是估计谱能量占估计加残差总能量的比例，用于挑出残差主导帧，保证记忆积累的是残差结构而非整句平均。

**当前句局部恢复 × 因果原型记忆：** 当前句局部恢复只用本句的主干估计和残差给出无记忆的兜底增益；因果原型记忆把之前句子的残差对数功率谱聚成带均值、方差和计数的原型，只用过去修正现在。组合后第一句退化为兜底，有历史后才做增减修正，保证不可靠历史不破坏当前句。

### 记忆条件精修器如何只做小幅有符号调整

精修器有两条轻量卷积分支。基分支把当前句隐表示映射为 d 个时频基图，可看作当前证据支持的候选恢复模式，d 取 4。坐标分支把 6 通道记忆上下文映射为 d 个系数图，决定每种模式被记忆加强或抑制的程度。上下文的 6 通道包括聚合原型轮廓、当前残差与聚合均值的归一化偏离、聚合方差表示的稳定性、原型计数的历史置信度、最近距离转成的查询相似度，以及权重的归一化熵。

2 分支经逐点低秩交互形成有符号修正，加到静态增益上再截断到有效区间得到动态增益。修正幅度由 alpha 控制，部署取 0.08，并乘以记忆非空指示，只有记忆可用时才激活。第一句记忆为空时修正为零，退化为无记忆估计；有历史后修正可正可负，分别对应增加或减少回收。

**基分支 × 坐标分支：** 基分支由当前句隐表示产生候选恢复模式，坐标分支由记忆上下文产生每种模式的加权系数，两者逐点低秩相乘再经双曲正切限幅形成有符号修正。分工是当前证据提方案、历史证据定取舍，组合后记忆只调制少量模式而不直接预测全图修正。

### 两阶段训练如何学会用好历史并守住兜底

训练分 2 个阶段。第一阶段只训练恢复投影器和增益头，目标包含归一化波形 L1、复谱 L1、对数幅度重建、增益投影、负的零均值 SI-SDR 和抑制过度恢复的信任正则，共六项。第二阶段冻结第一阶段模块，只训练精修器中的基分支和坐标分支，基础目标在重建和投影之外还加入 SI-SDR、分段信噪比、信任和可微 PESQ 损失。音频 16 kHz 采样，512 点 Hann 窗，128 跳长，2 阶段都用 2 秒裁剪、批量 8、AdamW 和余弦调度，学习率分别为 3×10−4 训练 4 轮和 10−3 训练 3 轮，精修训练按 WHAM 录音位置组织因果历史，并用 Ktrain 为 2 和 0.20 的记忆丢弃暴露缺失历史的情况。

为防不可靠历史，第二阶段同时用匹配、打乱和空记忆 3 种条件。匹配用对应因果历史，打乱用别的样本历史，空记忆关闭历史退回兜底。目标在基础损失上加反事实正则，分别惩罚匹配和打乱历史相对空记忆兜底的重建退化，并对打乱历史下的波形漂移加带软门的一致性约束，温度与权重在原文中给出。

\[\mathcal{L}_{\mathrm{dyn}}=\mathcal{L}_{\mathrm{base}}+\lambda_{\mathrm{cf}}\left(\mathcal{R}_{\mathrm{match}}+\mathcal{R}_{\mathrm{shuf}}+\lambda_{\mathrm{cons}}\mathcal{C}_{\mathrm{shuf}}\right).\]

上式是精修目标，基础项保证增强质量，反事实三项分别对应匹配退化、打乱退化与打乱一致性，权重控制整体正则强度和一致性占比。直观上，有用历史要带来增益，有害历史至多退回兜底。

**读-推理-写 × 测试时自适应：** 读-推理-写指先用过去记忆推理当前句、输出后再把当前残差写入记忆，当前句不能影响自身；测试时自适应指部署阶段主干和恢复模块冻结、只演化记忆状态。两者结合实现无梯度、持续的适应，与在线调参的 LaDen 和 MPol 路线不同。

**匹配历史 × 打乱历史：** 匹配历史指训练时使用同组因果历史，教模型利用有用历史；打乱历史指使用别的样本的历史，模拟有害历史。训练目标同时惩罚相对无记忆兜底的退化并约束打乱历史下的波形漂移，使模型学会在历史不可靠时守住兜底。

### 实验在什么数据、起点和顺序下比较

训练只用 EARS-WHAM，评价用 3 个目标集。DNS 2020 合成无混响 150 句，EARS-D 由 EARS 测试集与 DEMAND 噪声按−2.5 至 17.5 dB 均匀信噪比混合共 886 个，Libri-MUSAN 由 LibriSpeech test-clean 与 MUSAN 音乐按−5、0、5、10 dB 混合共 2620 个。每个数据集作为固定顺序的因果流独立处理，空记忆启动，目标域干净参考只用于打分。主干默认为在 EARS-WHAM 上训练的 CMGAN，LaDen、MPol 与本文方法从同一 CMGAN 检查点出发、同一测试协议下比较，保证起点一致。

指标共 7 个，数值越大越好，包括 PESQ、STOI、CSIG、CBAK、COVL、截断分段信噪比和 SI-SDR。跨主干部分对扩散、流匹配、判别式、流式和超轻量 5 类冻结主干各独立训练一个对应的恢复模块，训练与选择仍只用 EARS-WHAM，DNS 只做评价。部署配置保留温度 0.50、读出阈值 0.95、新原型阈值 0.35、合并阈值 0.05、陈旧替换年龄 20 句，以及恢复上限与修正幅度的取值，这些是复现时需要照抄的运行条件。

### 主比较在三个目标集上得到什么改进

要回答的问题是相同起点下无梯度记忆方法能否在失配流上稳定超过冻结主干，以及与需要在线调参的两种方法相比在哪些指标占优。表前比较限定为同一 CMGAN 检查点、同一因果流、7 个越大越好指标，重点看相对冻结主干的全面性和跨集一致性。

| Method | PESQ↑ | STOI↑ | CSIG↑ | CBAK↑ | COVL↑ | SSNR↑ | SI-SDR↑ |
| --- | --- | --- | --- | --- | --- | --- | --- |
| DNS |  |  |  |  |  |  |  |
| CMGAN | 3.00 | 0.967 | 4.19 | 3.47 | 3.60 | 9.00 | 15.08 |
| + LaDen | 3.00 | 0.967 | 4.21 | 3.47 | 3.61 | 9.06 | 15.06 |
| + MPol | 3.00 | 0.968 | 4.22 | 3.48 | 3.62 | 9.10 | 15.11 |
| + CRM | 3.11 | 0.968 | 4.36 | 3.56 | 3.75 | 9.23 | 15.34 |
| EARS-D |  |  |  |  |  |  |  |
| CMGAN | 2.62 | 0.846 | 3.76 | 2.82 | 3.17 | 2.41 | 5.06 |
| + LaDen | 2.57 | 0.849 | 3.83 | 2.88 | 3.18 | 3.59 | 5.64 |
| + MPol | 2.61 | 0.848 | 3.81 | 2.82 | 3.19 | 2.43 | 5.04 |
| + CRM | 2.64 | 0.849 | 3.90 | 2.86 | 3.26 | 2.63 | 5.20 |
| Libri-MUSAN |  |  |  |  |  |  |  |
| CMGAN | 2.16 | 0.903 | 3.40 | 2.62 | 2.74 | 3.83 | 9.64 |
| + LaDen | 2.16 | 0.903 | 3.54 | 2.67 | 2.81 | 4.42 | 9.61 |
| + MPol | 2.18 | 0.905 | 3.46 | 2.65 | 2.78 | 3.92 | 9.87 |
| + CRM | 2.27 | 0.904 | 3.59 | 2.73 | 2.90 | 4.07 | 9.83 |

上表完整保留原文三集七指标的全部行列。总体看，本文方法在三集上相对冻结主干七项都有提升，PESQ 分别提升 0.11、0.02 和 0.11，并在三集的 PESQ、CSIG 和 COVL 上都是比较方法中最好。分集看，DNS 上提升较明显，EARS-D 上 PESQ 只高 0.02 且 CBAK 与 SSNR、SI-SDR 并非全场最高，Libri-MUSAN 上 SSNR 和 SI-SDR 也不及个别基线，说明最好只限于感知相关的三项而非全部七项。限制是这些数字都依赖固定顺序的因果流和空记忆启动，换顺序或换噪声分布结论可能变化，且原文未报告显著性与方差，不能把小幅差距解读为普遍必胜。

跨主干的 DNS 结果同样放在后文完整原表中，5 个冻结主干的 PESQ、STOI、CSIG、COVL 和 SI-SDR 都有提升，PESQ 最大提升 0.24，但 SSNR 和 CBAK 在个别主干上略降，说明感知增益与能量型指标之间存在取舍，复现时应同时看七项而非只看 PESQ。

### 局部恢复与记忆修正各自贡献多少

要回答的是两步是否互补，以及记忆增量是否随历史积累出现。表前比较固定为同一主干下无记忆局部恢复与完整记忆方法的 PESQ，方向越大越好，DNS 还给出记忆增量的配对自助置信区间。

| Method | DNS | EARS-D | Libri-MUSAN |
| --- | --- | --- | --- |
| Backbone | 3.00 | 2.62 | 2.16 |
| + Utterance-local recovery | 3.07 | 2.61 | 2.23 |
| + Full CRM | 3.11 | 2.64 | 2.27 |

上表显示 DNS 上主干 3.00 经局部恢复到 3.07 再经完整方法到 3.11，EARS-D 上局部为 2.61 略低于主干 2.62 而完整为 2.64，Libri-MUSAN 上从 2.16 到 2.23 再到 2.27。可见局部恢复提供大部分增益但在 EARS-D 上几乎持平，记忆在三集都带来额外 PESQ。DNS 上 0.04 的记忆增量基于 20000 次重采样的 95% 配对区间为 0.03 到 0.04，支持该增量不是单句偶然，但它只针对 DNS 有序流，不能推广到其他集。原文还用因果 10 句滑动平均展示 DNS 流上记忆增量在首句为零、有历史后 PESQ 与 COVL 增益保持为正，符合空记忆启动的设计。

跨域历史实验把完整 Libri-MUSAN 流积累的记忆不重置直接带入 DNS 再因果更新，结果与匹配历史相当。完整数字见下表，PESQ、COVL 和 SI-SDR 几乎相同，说明该次突变下无需重置记忆，但这只是 1 次特定顺序的跨域，不能得出任意域切换都鲁棒的结论。

| History condition | PESQ ↑ | COVL ↑ | SI-SDR ↑ |
| --- | --- | --- | --- |
| Matched history | 3.110 | 3.750 | 15.344 |
| Cross-domain history | 3.111 | 3.751 | 15.345 |

上表完整保留两种历史条件在 DNS 上的三项指标。两行数值几乎一致，支持在该 Libri-MUSAN 到 DNS 的切换下旧记忆没有造成明显损害，但记忆容量、新颖阈值与陈旧替换都按原文配置，换别的域对或阈值仍需重测。

### 结论在什么条件下成立，还有哪些未验证

成立条件首先是冻结起点一致，主比较都从同一 CMGAN 检查点出发，跨主干则每个主干冻结并单独训练对应模块，训练选择只用 EARS-WHAM。其次是因果空记忆启动的固定顺序流，当前句只能用过去记忆，首句退化为兜底。第三是小幅有界恢复，上限与修正幅度分别取 0.10 和 0.08，记忆容量 64，这些超参数与 16 kHz、512 点窗、128 跳长的特征一起决定了数字。

未验证的范围包括流顺序打乱后的稳定性、长流中原型合并与替换是否漂移、不同信噪比区间的分层效果，以及除 RTX 4090 实时因子外的其他硬件延迟。EARS-D 上 PESQ 增益很小且个别能量指标不是最好，说明在某些失配下方法更偏向改善感知质量而非全面压噪。跨主干表显示 SSNR 在多个主干上略降，提示回收残差会带回部分能量，评价时不能只看 PESQ。没有测量误判率或主观听感，不能把自动指标提升等同于人工听感必然更好。

### 复现第一步做什么，需要哪些开销

复现先按官方仓库准备同一 CMGAN 起点与 EARS-WHAM 训练流程，分 2 阶段训练恢复与精修模块，再按固定顺序以空记忆启动逐句读推理写，注意写入只用残差主导帧且只在输出后更新。作者资源经校验当前可用，地址为论文给出的 GitHub 链接，但代码可用不等于权重与一键脚本都齐备，仍需核对检查点与依赖版本。

开销方面，本文方法新增 37.09K 参数，对应模型量增加 2.02% 和计数 FLOPs 增加 2.20%，RTX 4090 上实时因子从 0.0340 到 0.0387，仍远小于 1.0。代价是每个主干要单独训练一个恢复模块，且记忆超参数较多，复现时应保留温度、阈值与替换年龄的原文取值。跨主干 DNS 的完整对照见下表，复现时建议逐行核对七项而非只核对 PESQ。

| Model | PESQ↑ | STOI↑ | CSIG↑ | CBAK↑ | COVL↑ | SSNR↑ | SI-SDR↑ |
| --- | --- | --- | --- | --- | --- | --- | --- |
| StoRM-50 | 2.69 | 0.965 | 4.09 | 3.47 | 3.40 | 11.05 | 15.90 |
| + CRM | 2.71 | 0.966 | 4.12 | 3.47 | 3.42 | 11.00 | 16.08 |
| GTCRN | 1.70 | 0.871 | 3.03 | 2.74 | 2.34 | 8.14 | 8.95 |
| + CRM | 1.94 | 0.905 | 3.32 | 2.83 | 2.60 | 7.88 | 9.54 |
| FastEnhancer-B | 2.07 | 0.915 | 3.32 | 3.10 | 2.69 | 10.12 | 13.54 |
| + CRM | 2.27 | 0.927 | 3.59 | 3.14 | 2.92 | 9.63 | 13.74 |
| FlowSE | 2.40 | 0.956 | 3.51 | 3.31 | 2.95 | 11.33 | 15.81 |
| + CRM | 2.58 | 0.958 | 3.92 | 3.41 | 3.25 | 11.14 | 15.97 |
| UL-UNAS | 2.57 | 0.949 | 3.90 | 3.45 | 3.24 | 11.60 | 16.26 |
| + CRM | 2.68 | 0.951 | 4.03 | 3.49 | 3.36 | 11.35 | 16.27 |

上表完整保留 5 类主干在 DNS 上的前后对比。GTCRN、FastEnhancer-B 和 FlowSE 的 PESQ 提升较大，StoRM-50 提升较小，UL-UNAS 居中，但多行 SSNR 在加方法后略降，说明提升伴随能量型指标的轻微代价。把该表与主表一起看，才能判断方法在自选主干上是否值得尝试。

### 什么时候值得尝试，还缺哪项验证

当部署不能做在线梯度更新，但测试句按时间连续到来且噪声或声学条件在短窗内有重复结构时，该方法值得尝试，因为它只演化记忆且首句有兜底。复现第一步是跑通冻结主干加 2 阶段模块的因果流，确认首句增益为零、有历史后增益转正的曲线能复现，再测目标集七项指标。

还需要补的验证是打乱顺序与跨域切换的多组重复、按信噪比与噪声类型的分层，以及在目标硬件上的真实延迟与内存占用。总体上，论文支持的是轻量无梯度持续适应的一条可行路径，在三集感知指标上一致改进冻结主干并在 5 类主干上可迁移，但小幅差距、能量指标取舍与顺序依赖仍需按自身场景重测后再做选型。

<details>
<summary>📎 论文与评分元数据</summary>

排名：前25% | 文档类型：方法研究 | [arXiv 原文](https://arxiv.org/abs/2611.01023v1)

</details>

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。

- 评分规则：type-aware-v1

- 评分模型：muse-spark-1.3-contributor

- 评分请求协议：openai_responses

---

[← 返回 2026-11-03 语音/音乐/音频论文速递](/audio-paper-digest-blog/posts/2026-11-03/)
