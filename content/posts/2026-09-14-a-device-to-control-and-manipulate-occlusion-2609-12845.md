---
title: "A Device to Control and Manipulate Occlusion Effects for Own Voice Perception Studies"
date: 2026-09-14
draft: false
tags: [语音质量评估, 信号处理, 语音, 实时处理, 言语感知]
categories: [论文速递]
description: "针对自己声音堵塞效应个体差异大、难以重复呈现的问题，该工作用大耳罩物理去除空气传导再经实时滤波重放，并在人工头上验证了对多档堵塞增益与插入损失组合的独立仿真能力，代价是低频仍有残余上限与约 6.5 ms 系统延迟。"
hiddenInHomeList: true
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_arxiv_id: "2609.12845"
paper_digest_workbench_contract: "researcher-workbench-v1"
paper_digest_reader_title: "先消掉空气声、再用滤波器重放：可独立控制堵塞增益与插入损失的耳罩装置"
paper_digest_original_title: "A Device to Control and Manipulate Occlusion Effects for Own Voice Perception Studies"
paper_digest_arxiv_version: null
paper_digest_arxiv_versioned_id: null
paper_digest_arxiv_abs_url: "https://arxiv.org/abs/2609.12845"
paper_digest_arxiv_pdf_url: "https://arxiv.org/pdf/2609.12845.pdf"
paper_digest_primary_task: "语音质量评估"
paper_digest_taxonomy_contract: "paper-taxonomy-flat-tags-compat-v1"
paper_digest_taxonomy_selection_contract: "paper-taxonomy-selection-v1"
paper_digest_taxonomy_registry_version: "paper-taxonomy-v1"
paper_digest_taxonomy_registry_sha256: "15c82a567ce5a55dc1175684ed08b64c158558639d9c8fb822c9587ec32a8778"
paper_digest_taxonomy_concepts: [{"facet":"task","id":"task.speech-quality","label":"语音质量评估"},{"facet":"method","id":"method.signal-processing","label":"信号处理"},{"facet":"signal","id":"signal.speech","label":"语音"},{"facet":"setting","id":"setting.real-time","label":"实时处理"},{"facet":"scientific_topic","id":"scientific_topic.speech-perception","label":"言语感知"}]
paper_digest_primary_method: "信号处理"
paper_digest_score: 8.1
paper_digest_rank_bucket: "前25%"
paper_digest_document_type: "系统技术报告"
paper_digest_one_sentence: "针对自己声音堵塞效应个体差异大、难以重复呈现的问题，该工作用大耳罩物理去除空气传导再经实时滤波重放，并在人工头上验证了对多档堵塞增益与插入损失组合的独立仿真能力，代价是低频仍有残余上限与约 6.5 ms 系统延迟。"
paper_digest_authors: [{"affiliations":["Institute for Hearing Technology and Acoustics, RWTH Aachen University, Aachen, Germany"],"name":"Rouben Rehman"},{"affiliations":["Institute for Hearing Technology and Acoustics, RWTH Aachen University, Aachen, Germany"],"name":"Simon Kersten"},{"affiliations":["Institute for Hearing Technology and Acoustics, RWTH Aachen University, Aachen, Germany"],"name":"Aron Schliep"},{"affiliations":["Institute for Hearing Technology and Acoustics, RWTH Aachen University, Aachen, Germany"],"name":"Janina Fels"}]
paper_digest_abstract_sha256: "8e68f2879005766d84e7ded63a3ba5d7b45081e5d66e5a746ef049029b7c6695"
paper_digest_sidecars: {"citation.bib":{"sha256":"cd6a92d48f6aae6afee853afd23f46ffab0ece1a092840e641d7846b57abcfb7","url":"/audio-paper-digest-blog/data/papers/2026-09-14/2609-12845/citation.bib"},"citation.json":{"sha256":"86fc1106ba9f6b14671a90e484b9c5692d70594784705bd1178e87cbfec25423","url":"/audio-paper-digest-blog/data/papers/2026-09-14/2609-12845/citation.json"},"citation.ris":{"sha256":"08f7facf76ec93060a6cd23ea6516e2ada1bd438b60ca1a45f975aeeb40dfb79","url":"/audio-paper-digest-blog/data/papers/2026-09-14/2609-12845/citation.ris"},"rethink-context.json":{"sha256":"ead62a04c39bb02409d84db1dfa59b0d7a7619790d175c9b9bdf1c070cb7cfff","url":"/audio-paper-digest-blog/data/papers/2026-09-14/2609-12845/rethink-context.json"}}
paper_digest_api_reader_contract: "beginner-researcher-v3"
paper_digest_api_reader_article_sha256: "c45f85e1117a11331629d51741677dd8692027062e958711bbbe4aae3dd817d0"
paper_digest_api_reader_plan_sha256: "73beba94c199273a677e03c41f3542c408a628a1e403026ffb3c9a621450a498"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings-v4"
paper_digest_api_reader_source_bindings_sha256: "046f248e4c0e5a4274631c9dfc04bd4a1fb5ce71fa508736c8b281e8c2609537"
paper_digest_api_reader_source_table_count: 2
paper_digest_api_reader_source_formula_count: 4
paper_digest_api_reader_structured_artifacts_sha256: "a95f36f83b8a4b34c8e914e5d8258b0135e39f1c2885bf1b477be344f0ebe0b9"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity-v1"
paper_digest_api_reader_author_identity_sha256: "75824acd74ef166e8dc13a9694f85421a4f121ec45789de87db6547eec177f1c"
paper_digest_api_reader_author_count: 4
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity-v1"
paper_digest_api_reader_resource_identity_sha256: "121697094f4559b496162ece2c0fc6169dddfb948874ead3b9e7d70f95614d0c"
paper_digest_api_reader_resource_count: 3
paper_digest_api_reader_figure_persistence: "ephemeral-no-persisted-figure-assets-v1"
paper_digest_api_reader_decision_projection: "api-reader-decision-projection-v2"
---

# 📄 先消掉空气声、再用滤波器重放：可独立控制堵塞增益与插入损失的耳罩装置

> 英文题目：*[A Device to Control and Manipulate Occlusion Effects for Own Voice Perception Studies](https://arxiv.org/abs/2609.12845)*

> 标签：#语音质量评估 | #信号处理 | #语音 | #实时处理 | #言语感知
>
> 评分：**8.1/10** | 创新 1.4/2 | 技术严谨 1.2/1.5 | 实验充分 0.8/1.5 | 清晰度 0.8/1 | 影响力 0.9/1.5 | 开源 1.5/1.5 | 可复现 0.3/0.5 | 工程/实践 1.2/1.5


## 👥 作者与机构

- Rouben Rehman：Institute for Hearing Technology and Acoustics, RWTH Aachen University, Aachen, Germany
- Simon Kersten：Institute for Hearing Technology and Acoustics, RWTH Aachen University, Aachen, Germany
- Aron Schliep：Institute for Hearing Technology and Acoustics, RWTH Aachen University, Aachen, Germany
- Janina Fels：Institute for Hearing Technology and Acoustics, RWTH Aachen University, Aachen, Germany

## 📌 核心摘要

自身语音堵塞效应难复现在于插入损失衰减气导与堵塞增益放大骨导至外耳分量相互叠加且个体差异大，任务输入为口前参考声压与目标堵塞曲线、输出为耳罩内换能器实时重放至鼓膜的目标声压，需独立调控两者而非整体复现。方法链第一步以大体积耳罩被动隔离气导并以大空腔逼近开放耳辐射阻抗，其残余泄漏与负载阻抗决定开放耳近似是否成立。第二步在人工头上测量口耳传递与口前麦克风至换能器的电声传递，并经阻抗对比给出固有增益上界，该上界输出直接作为第三步可忽略骨导外耳分量的判据。第三步由目标堵塞效应推导目标传递函数，再经正则化最小二乘求解预计算滤波器并实时馈入口前信号，实现任意插入损失与堵塞增益组合的重放。与深入耳道的耳塞式主动消除或超材料耳塞不同，该方案不封堵耳道而以可穿戴体积匹配负载阻抗，从而将插入损失与堵塞增益解耦为可独立设定的滤波目标。在人工头负载阻抗评测条件下，耳罩在100 Hz处的增益指标为8.7 dB，高于155 Hz以上条件的增益指标0 dB。适用边界是低频残余增益与高频高阶模态方差受限，基频低于110 Hz的深嗓音需筛除，实时链路延迟约6.5 ms且滤波运行于桌面PC硬件。

## 🔗 开源与复现资源

- 代码相关资源：<https://rwth-aachen.sciebo.de/s/QfdHF7FyJJdcxoG> — 链接可访问（HTTP 200）

- 数据相关资源：<https://rwth-aachen.sciebo.de/s/QfdHF7FyJJdcxoG> — 链接可访问（HTTP 200）

- 复现相关资源：<https://rwth-aachen.sciebo.de/s/QfdHF7FyJJdcxoG> — 链接可访问（HTTP 200）

可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 自己声音为什么一堵耳朵就变了？

输入是这篇论文的原文证据与官方原图像素，目标是让刚入门的研究生能核对条件并复述方法，必须保留的关键信息是堵塞效应如何拆分、耳机如何同时做到高隔离与低自身增益、以及滤波器用哪些传递函数算出，输出是按学习依赖展开的技术解读。自己说话时，嘴发出的声音有两条路到鼓膜。一条是空气传导（air conduction）：经空气绕过头部进入耳道。另一条是骨传导（bone conduction）：经头骨与软组织振动，再由耳道壁向耳道内辐射，也经中耳与内耳直接传入。

堵住耳道后，前者被挡住而衰减，后者因辐射出去的低频能量被堵在里面而升高。论文把前者的衰减称为插入损失（insertion loss），后者的放大称为堵塞增益（occlusion gain），两者叠加即为堵塞效应（occlusion effect）。难点在于耳道形状、堵塞深度与密封都因人而异，同一耳塞在不同人耳上曲线差别很大，因此知觉实验需要一种与人耳无关、可重复设定这两条曲线的呈现方法。

**堵塞效应 × 插入损失：** 堵塞效应是堵住耳道后鼓膜声压相对开放耳的变化总量，插入损失是其中空气传导路径被堵塞物衰减的分量，主要影响 1 kHz 以上；两者搭配的理由是只有把总量拆成空气衰减与骨传导放大，才能分别设定高频衰减曲线，组合起来才构成完整的堵塞效应目标。

这张四格示意图把上述拆分画得很直观，值得先建立图像再读公式。上半部分是开放耳，下半部分是堵塞耳；左列是空气传导，右列是骨传导。开放耳左格红色箭头贯穿耳道，表示空气声自由进入；开放耳右格绿色箭头从下方组织指向耳道壁再向外，表示振动辐射后向外耗散。

堵塞耳左格出现黑色方块，红色箭头到方块后变为虚线，表示被衰减；堵塞耳右格同样有黑色方块，但绿色辐射符号仍留在耳道内，表示能量被关住。颜色约定是红色为空气、绿色为骨传导。

> **看图路径：** 1. 先看上方开放耳一行：红色箭头是否直通耳道，绿色箭头是否向外耗散；2. 再看下方堵塞耳一行：黑色方块位置与红色虚线衰减的对应关系；3. 对比左右两列：同一堵塞物对空气路径是阻挡、对骨传导辐射路径是阻止外泄

[![原论文 Figure 1：Effects of occlusion on air conduction and bone conduction to the outer ear.](https://arxiv.org/html/2609.12845v1/AC_BC_vis.png)](https://arxiv.org/html/2609.12845v1/AC_BC_vis.png)

*论文图 1。原论文 Figure 1:：“Effects of occlusion on air conduction and bone conduction to the outer ear. Red arrows denote air conduction and green arrows denote bone conduction.”。*

读完此图应记住两个判断：高频变化主要看红色路径是否被挡，低频隆起主要看绿色辐射是否被阻止外泄；后文耳机设计正是先用大耳罩把红色路径整体拿掉，再用电声重放去精确合成红色与绿色的目标叠加。论文图 1 原注为开放耳与堵塞耳的空气与骨传导效应，红色为空气、绿色为骨传导，上述观察均来自本次收到的官方原图像素。

### 已有降堵塞方法为何不直接拿来做知觉实验？

助听器常用做法是给耳模开通风孔或采用开放式验配，让低频骨传导辐射能漏出去一部分，深插入也能降低低频放大。但原文指出这些做法会带来动态范围下降、反馈风险与佩戴舒适问题。近年主动堵塞控制用耳道内传声器监测声压再算出抵消信号，在封闭式入耳耳机与多谐振腔超材料耳塞上都有成功例子，前者利于主动降噪，后者通过匹配负载阻抗同时降低增益并提高隔离。

然而这些工作目标是降噪或助听满意度，把堵塞效应作为佩戴后果整体看待，很少区分增益与损失，也没有提供可按剂量重复呈现任意曲线的工具。另有两类与本工作最接近的自声骨传导研究：一类用大耳罩加鼓膜处探管传声器量化不同音素的骨传导，另一类用带重放的大耳罩经听阈估计自声传输。这些大装置需要外部固定，限制头部活动，会干扰自然对话行为，而本文的最终兴趣恰是沟通行为，因此需要重新设计更轻、能自由佩戴的方案。

教学例子：这就像要研究不同剂量药物反应，但手里只有成分不明的混合药丸，本文要做的是把两种成分分开配制、可按处方精确给药的装置。此为例子，用于理解动机，不代表论文给出药物数据。

### 要做出什么样的耳机才算合格？

论文列出 5 条设计要求，每条都有可核对的数字。第一是去除物理空气传导：500 Hz 以上至少 20 dB 衰减，100 Hz 至 500 Hz 至少 15 dB 衰减，前者留出仿真深插入损失所需的余量，后者用于在滤波推导中忽略泄漏项。第二是无固有堵塞增益：要能仿真 0 dB 的开放耳条件，耳机自身不应在言语频段引入显著放大。第三是堵塞仿真：能按目标独立匹配增益与损失，且与使用者无关。第四是实时：总延迟容限取 10 ms，依据是外部声音延迟可察觉性评估与语音实时变换研究中低于 16 ms 的经验。

第五是舒适：可长时间佩戴且不严重限制运动。理解这 5 条的顺序很重要：先靠被动结构拿到高隔离与低自身增益，再靠主动滤波合成任意目标，最后用延迟与舒适保证知觉有效性。

### 整体思路：先物理隔离，再数字合成

方法全景可以沿一个样本走完。说话人开口，声音经空气到达耳罩外的微机电传声器，被采集为数字信号；同一时刻，骨传导振动仍经头骨到达耳道，但因耳罩容积大、负载阻抗接近开放耳，其低频放大被控制得很小；耳罩的高隔离把直接进入耳道的空气声压得很低。接着预先算好的仿真滤波器对传声器信号滤波，经耳罩内 40 mm 换能器播回耳道，与残余泄漏和残余骨传导叠加形成鼓膜声压。

如果滤波器正确，这个叠加就等于佩戴某种目标堵塞器时的鼓膜声压。关键是滤波器只与空气传导路径有关，与个体骨传导无关，因此同一目标可重复使用。系统基于商用 3M Peltor Optime III 耳罩改制，保留其密封泡沫与硬壳，中间加入 3D 打印延长段安放换能器，外置可插拔传声器支架保证位置可重复。这张俯视示意图把主路径画成闭环，读懂它就读懂了全系统。

中间是头部简笔画，两侧是黄色耳罩剖面，黑色喇叭符号是内侧换能器，黑色圆点是外侧传声器，下方红色弧线表示嘴到传声器的空气路径，耳罩内红色直线表示换能器到耳道的重放路径，耳道内绿色箭头表示骨传导残余，灰色方框即待设计的仿真滤波器。

> **看图路径：** 1. 沿嘴部红色箭头看到外部传声器，再经标有 HG 的方框到耳罩内扬声器；2. 观察耳罩内红色箭头指向耳道，绿色箭头仍从嘴经头骨指向耳道；3. 确认左右两侧是对称的两套拾音与重放链路

[![原论文 Figure 2：Schematic representation of the described setup.](https://arxiv.org/html/2609.12845v1/setup.png)](https://arxiv.org/html/2609.12845v1/setup.png)

*论文图 2。原论文 Figure 2:：“Schematic representation of the described setup. Red arrows denote air conduction and green arrows denote bone conduction.”。*

解释这张图时要注意：红色路径是主动可控的重放链，绿色路径是被动残余；设计目标是让红色合成量占主导，使绿色与泄漏相对可忽略，这样滤波推导才能简化；灰色方框是全文计算核心，后续所有传递函数测量都是为了解出它。上述颜色与模块位置均来自本次收到的官方原图像素，图注明确红色为空气传导、绿色为骨传导。

### 被动结构与传递函数模型各解决什么？

被动结构分两件事。提高固有插入损失靠双层同心延长壳：内壳接换能器支架，外壳套住内壳并承接原耳罩胶囊，两壳无硬连接以减少振动传递，壳体用连续壁环打印使挤出线垂直于入射声，壳间填矿棉，内腔填聚酯纤维抑制驻波，外壳对开处加橡胶垫密封。降低固有堵塞增益靠阻抗匹配：论文不把容积本身当原因，而把耳罩负载阻抗向开放耳辐射阻抗靠拢，最终内延长段长 11.5 cm，截面在 30 cm²至 59.1 cm²之间变化。换能器选 40 mm 单元，传声器为两侧各一只微机电传声器，支架滑套在外壳螺柱上以保证拆装后位置一致。

**堵塞增益 × 负载阻抗：** 堵塞增益是耳道壁振动向耳道内辐射的骨传导成分被堵住后低频升高的分量，负载阻抗是耳机罩在耳道口呈现的声学负载；两者搭配的理由是耳罩是否产生自身增益只取决于负载阻抗与开放耳辐射阻抗的比值，因此用大容积匹配阻抗就能从机理上压低固有堵塞增益。

**空气传导传递函数 × 耳机传递函数：** 空气传导传递函数描述口前参考点到耳道入口的声音传播，耳机传递函数描述耳机换能器到同一耳道位置的播放路径；两者搭配的理由是仿真滤波器必须同时除去传声器与播放路径的影响、再乘上目标堵塞效应与开放耳空气传导，组合起来才能算出从外部传声器到耳机扬声器的正确均衡量。

堵塞效应的定义是鼓膜声压之比取模再转分贝，符号含义是分子为堵塞耳鼓膜声压，分母为开放耳鼓膜声压，计算目标是刻画堵住前后同一自声激励的电平变化。

\[\displaystyle\text{OE}=\left|\frac{p^{\text{occl}}_{\text{tm}}}{p^{\text{open}}_{\text{tm}}}\right|,\quad L_{\text{OE}}=20\log_{10}\left(\left|\frac{p^{\text{occl}}_{\text{tm}}}{p^{\text{open}}_{\text{tm}}}\right|\right)\]

耳机固有堵塞增益上限写成总阻抗之比，符号是分子为戴耳机时作用于振动壁的总阻抗，分母为开放耳总阻抗，计算目标是给出与个体耳道几何无关、只与耳道口辐射阻抗和耳机负载阻抗有关的上限。

\[L_{\text{OG}}=20\text{log}_{10}\left(\left|\frac{\underline{Z}_{\text{tot}}^{\text{occl}}}{\underline{Z}_{\text{tot}}^{\text{open}}}\right|\right)\]

开放耳鼓膜声压近似等于其空气传导分量，符号是开放耳总声压等于空气与骨传导分量之和再忽略后者，计算目标是为后文把开放耳目标只用空气路径表达提供依据。

\[p_{\text{tm}}^{\text{open}}=p_{\text{tm, ac}}^{\text{open}}+p_{\text{tm, bc}}^{\text{open}}\approx p_{\text{tm, ac}}^{\text{open}}\]

耳机系统总传递函数是骨传导、泄漏与电声重放 3 路之和，符号包括口前参考声压、传声器路径、滤波器、换能器路径与耳道路径，计算目标是说明在高隔离与低自身增益下可简化为传声器与换能器级联，为解滤波器铺路。

\[H_{\text{sys}}=\frac{p_{\text{tm}}^{\text{sys}}}{p_{\text{ref}}}=H_{\text{bc}}^{\text{open}}+H_{\text{leak}}H_{\text{ec}}+H_{\text{mic}}GH_{\text{ext}}H_{\text{ec}}\]

这组传递函数框图把上述公式画成信号流，开放耳与堵塞耳都是参考声压分两路汇入鼓膜，区别在上标；耳机系统新增下半支路经传声器与滤波器到扬声器再经换能器路径进入耳道，同时保留泄漏与开放骨传导支路。该段导读覆盖 3 个面板的输入来源与汇入关系，为定位可设计支路做准备。

> **看图路径：** 1. 先读开放耳分支：参考声压如何分叉为空气与骨传导再汇入鼓膜；2. 再读堵塞耳分支：对比开放耳找出上标由开放变为堵塞的位置；3. 最后读耳机系统分支：找出滤波器与传声器和换能器路径新增的链路

[![原论文 Figure 5：Schematic representation of the open ear (a), occluded ear (b), and headphone system (c) in terms…](https://arxiv.org/html/2609.12845v1/system_block_diags_sharp.png)](https://arxiv.org/html/2609.12845v1/system_block_diags_sharp.png)

*论文图 5。原论文 Figure 5:：“Schematic representation of the open ear (a), occluded ear (b), and headphone system (c) in terms of transfer functions.”。*

读图时先确认每个方框的输入都来自同一参考声压，再看汇入鼓膜前是否经过耳道方框；只有经过滤波器的支路是可设计的，其余两路是设计要压小的残余，这直接对应后文忽略泄漏与骨传导的近似条件。面板布局与符号均来自本次收到的官方原图像素，图注为开放耳、堵塞耳与耳机系统的传递函数示意。

### 没有神经网络训练时，256 抽头滤波器如何算出？

本研究没有训练神经网络模型，也就没有梯度反传、参数冻结与重置可言，该节的计算过程是传递函数测量加正则最小二乘求解。理想解是将目标堵塞效应乘开放耳空气传导再除以传声器路径与换能器路径，但后两者非最小相位，直接相除得到的是不稳定无限冲激响应。实际做法是把问题写成时域卷积矩阵方程，用长度 256 的有限冲激响应向量去逼近，目标向量是目标堵塞效应与开放耳空气传导的卷积，系数矩阵是传声器与换能器冲激响应的级联卷积矩阵，再加正则项控制病态求逆。缓冲区设为 32 采样、采样率 44.1 kHz 时，256 抽头是能可靠匹配目标的最低长度。

测量在人工头上完成：开放耳空气传导是将传声器置于耳甲腔耳道口、由嘴模拟器发声测得；嘴到外传声器路径是将耳机戴到人工头上测得。换能器到耳路径是将传声器放回耳内、改由耳机发声测得；每种测 5 次取幅值与相位平均，每次都完全取下重戴以计入佩戴方差。真人应用时前两者可用连续语音估计，换能器路径仍可直接测耳机传递函数，但本文为验证只用人工头直接测量以排除语音估计不确定性。

**正则最小二乘 × 滤波器抽头长度：** 正则最小二乘是在时域求有限长滤波器使系统输出逼近目标的优化准则，滤波器抽头长度是直接约束复杂度的参数；两者搭配的理由是非最小相位路径无法直接求逆得到稳定无限冲激响应，而把抽头数固定为 256 并加正则项就能得到可实时运行的近似最优解。

### 用什么目标曲线与测量条件验证仿真？

验证用的是理论目标而非某个人耳实测曲线，以覆盖独立控制。目标设计为搁架滤波器，中心频率 1000 Hz，上转角在 400 Hz 以上，模拟带通气孔堵塞器的高频衰减形态。增益取三档不同高度，损失取三档不同深度，正交组合成 9 条曲线，再加一条 0 dB 平坦开放耳目标，共 10 条，均为最小相位。插入损失在符合听音室标准的房间用 GRAS 45CA 夹具与前方 2 m 扬声器测得，每次完全取下重戴，参考为空夹具。

固有堵塞增益用带仿真耳廓终端的阻抗管测负载阻抗与开放辐射阻抗，频段 100 Hz 至 18 kHz，每位置 2 次平均、3 位置合成阻抗、每种阻抗重复 4 次。实时链用桌面电脑加声卡，在 Reaper 中经 ReaVerb 加载预计算滤波器；验证时另用一台电脑并行跑实时滤波，人工头嘴前 100 mm 处设参考传声器，先以 0 dB 目标校准播放电平与开放耳一致，再逐条测三遍。

这组目标曲线图是后文所有仿真结果的输入基准，横轴为对数频率，三行分别对应低频平台为不同堵塞增益，3 种线型分别对应高频平台为不同插入损失，过渡带位于中频段。该导读明确了行与线型的分工，便于后文判断独立控制。

> **看图路径：** 1. 按行看三组子图标题：不同堵塞增益的低频平台高度；2. 按图例线型看高频平台：不同线型对应的插入损失深度；3. 观察过渡带的斜率与中心频率位置

[![原论文 Figure 6：OE target curves with 10 dB, 15 dB, and 20 dB OG and -10 dB, -15 dB, and -20 dB IL used for…](https://arxiv.org/html/2609.12845v1/figure_06_oe_targets.svg)](https://arxiv.org/html/2609.12845v1/figure_06_oe_targets.svg)

*论文图 6。原论文 Figure 6:：“OE target curves with 10 dB, 15 dB, and 20 dB OG and -10 dB, -15 dB, and -20 dB IL used for evaluating the system.”。*

解释时应强调：行间差异只改变低频增益，线型差异只改变高频损失，这种正交设计使读者能判断系统是否真正独立控制两者，而非用一条固定斜率同时改变两端。图注明确为不同堵塞增益与插入损失的目标曲线，细节来自本次收到的官方原图像素。

为便于核对，把验证用的目标条件与公平组合方式整理成宽表。指标方向是低频平台越高表示堵塞增益越大、高频平台越深表示插入损失越大，比较问题是系统能否独立改变两者而不互相牵制。

| 条件 | 指标 | 低档 | 中档 | 高档 |
| --- | --- | --- | --- | --- |
| 低频堵塞增益平台 | 目标增益 | 10 dB | 15 dB | 20 dB |
| 高频插入损失平台 | 目标损失 | 浅档深度 | 中档深度 | 深档深度 |
| 搁架滤波器形态 | 中心与转角 | 中心频率 1000 Hz | 上转角 400 Hz 以上 | 最小相位设计 |
| 组合与基准 | 目标总数 | 正交组合 | 1 条 0 dB 平坦开放耳 | 共 10 条目标 |

表后解释主要收益与代价：收益是多条组合覆盖了典型通气堵塞器的增益与损失范围，且行列正交使增益与损失可分别归因。代价是这仍是时不变最小相位的理论曲线，未包含随音素变化的时变堵塞效应，因此通过此表只能证明独立控制能力，不能证明对真实连续语音每 1 帧都同样精确。

### 耳机自身够安静吗？目标曲线跟得上吗？

先看被动性能。约 150 Hz 以上固有插入损失超过 20 dB 衰减，向下到全频段仍保持在 18 dB 以上，满足设计余量，也使忽略泄漏的近似成立。负载阻抗在 150 Hz 以上与开放耳辐射阻抗偏差小于 3 dB，400 Hz 以上小于 1.4 dB；100 Hz 处绝对最大增益上限为 8.7 dB，155 Hz 处降至 0 dB，之后保证为负值。结合骨传导在 0 dB 已可忽略的假设，155 Hz 以上可认为不改变自声骨传导感知，但对平均基频 116 Hz 的男声仍有可感知的残余，因此论文建议按研究设计筛查并可能排除基频低于 110 Hz 的参与者。实时往返延迟约 6.5 ms，小于 10 ms 容限。

主动仿真方面，0 dB 目标已能较好重合开放耳传递函数，700 Hz 以下可见泄漏与重放叠加的梳状波纹，随频率升高因隔离增大而减小，1 kHz 附近较深波纹对应耳罩腔共振致泄漏增大；加 10 dB 以上增益后波纹明显减轻，且增益越大低频越平滑。9 条非零目标均能同时跟住低频平台与高频平台，1/6 倍频程平滑后与目标吻合良好。2.5 kHz 以上方差增大，与延长段截面约 60 cm²对应的平面波截止约 2.3 kHz 后高阶模态可传播及内部阻尼有关，且损失越深因重放电平越低、泄漏相对占比越高而方差越大。

**泄漏路径 × 梳状滤波：** 泄漏路径是绕过耳罩经缝隙进入耳道的残余空气声，梳状滤波是泄漏声与耳机重放声叠加因延迟差产生的周期性峰谷；两者搭配的意义是泄漏相对重放越强则峰谷越深，因此高插入损失与高堵塞增益都会通过拉开重放与泄漏的电平差来改变可观测的梳状伪迹。

为便于核对，把被动隔离、残余增益与延迟是否达标整理成第二张宽表。指标方向是隔离越深越好、残余增益越小越好、延迟越小越好，比较问题是被动性能是否给主动仿真留出足够电平间隔与时间余量。

| 条件 | 指标 | 基线要求 | 本方法实测 | 比较对象 |
| --- | --- | --- | --- | --- |
| 高频被动隔离 | 插入损失 | 500 Hz 以上 20 dB | 150 Hz 以上超过 20 dB 衰减 | 空夹具参考 |
| 低频被动隔离 | 插入损失 | 100 至 500 Hz 内 15 dB | 全频段 18 dB 以上 | 空夹具参考 |
| 残余堵塞上限 | 最大增益 | 0 dB 开放耳 | 100 Hz 处 8.7 dB，155 Hz 处 0 dB | 开放耳辐射阻抗 |

表后解释主要收益与反例：收益是隔离超标使深损失仿真有至少 10 dB 电平间隔，残余增益在 155 Hz 以上为负使大多数嗓音不受影响，延迟留有约 3.5 ms 余量。反例是 100 Hz 附近 8.7 dB 残余对低男声仍可感知，且人工头硬表面与细颈导致左右密封不一致，左侧低频梳状更深、右侧 2 kHz 以上更贴合目标，说明实测方差部分来自夹具而非算法本身。

### 哪些因素会让仿真变差？

论文没有做神经网络消融，但提供了 3 组可比作失败条件的对照。第一是增益高低对照：0 dB 时梳状最明显，10 dB 起明显减轻，增益越高低频越干净，支持泄漏相对电平决定波纹深度的机制解释。第二是损失深浅对照：从浅到深，高频方差随重放电平降低而增大，支持泄漏占比解释。第三是左右侧对照：同一目标下左侧低频波纹更深、右侧高频更贴合，且负载阻抗左右差异很小，支持差异来自人工头佩戴密封而非耳机本体不对称。

此外传输线模型与实测对比显示谐振频率一致但实测阻尼更大，说明模型低估了矿棉与泡沫损耗，但建成实物全频段优于仿真，支持用简化模型指导尺寸是保守可行的。未评测边界是真实人耳耳道壁振动差异、连续语音音素切换的时变效应，以及不同头型密封差异，这些都留待知觉实验与时变扩展验证。

### 残余增益与延迟会改变音色吗？

论文明确报告四点局限。第一，阻抗法假设耳罩不改变耳道壁振动，这对罩耳式比入耳式更易成立，但仍是上限估计而非完整堵塞力学，原文引用文献说明对任意堵塞器并不充分。第二，为保持轻便自容，100 Hz 附近阻抗匹配不完美，残余上限 8.7 dB 对深嗓音可感知，需筛查 110 Hz 以下嗓音。第三，模型为时不变，未包含随音素变化的堵塞波动，作者认为当前先验证时不变的感知相关性，时变扩展与听音试验是未来工作。

第四，自声是空气与骨传导多路不同延迟在耳蜗叠加的音色，约 6.5 ms 系统延迟即使电平仿真准确也会引入额外梳状而轻微改变音色，非正式主观试听认为属次要，但未来应迁至专用低延迟硬件。区分表述：已报告的是隔离、阻抗与延迟数字；有限解释的是残余可感知性与音色次要性；未验证推测是时变不重要与沟通行为因果，需正式听音实验才能下结论。

### 要复现这套装置，先准备什么？

复现起点是硬件与代码可得性。论文声明 3D 打印几何、数据与分析脚本当前可通过官方 SciEBO 链接获取，正式接收后将转为 Zenodo 存档，本次核对的 3 类资源状态均为可用，链接返回 200，因此可写当前可用。硬件清单包括 3M Peltor Optime III 耳罩、40 mm 换能器、两侧微机电传声器、3D 打印内外延长壳、矿棉与聚酯填充、橡胶垫，以及声卡与桌面电脑。软件链为 MATLAB 加 ITA 工具箱做测量，Python 加 Pyfar 做传输线仿真，Reaper 加 ReaVerb 做实时卷积。关键参数是滤波器 256 抽头、声卡缓冲 32 采样、采样率 44.1 kHz、校准时以 0 dB 目标对齐开放耳电平。

测量注意每次完全取下重戴以计入方差，阻抗管需保证头带真实张力并托住延长段防下垂，人工头测量需在半消声室加地面吸声并加窗。何时值得尝试：当研究需要按剂量重复呈现不同堵塞程度并分离增益与损失时；还需补的验证是真人语音估计传递函数的精度、正式知觉评估与低延迟硬件迁移。

### 这篇工作为后续知觉研究留下了什么？

综合来看，该工作把难以控制的个体堵塞效应转化为两步工程问题：用大容积双层耳罩把物理空气声压下去并把自身增益压到 155 Hz 以上为负，再用基于 3 条空气路径的正则最小二乘滤波器把任意搁架目标播回去。人工头证据显示它能独立控制多档增益与多档损失，且隔离与延迟均满足预设容限。代价是低频残余与系统延迟带来的音色改变，以及尚未验证的时变与真人知觉环节。

常见误解是以为容积越大越好或隔离越高仿真越好，原文机理澄清真正决定量是负载与辐射阻抗之比，而仿真质量还取决于重放与泄漏的相对电平及高阶模态阻尼。下一步按论文规划是正式听音试验、时变仿真扩展与专用低延迟实现，这三项完成后才能回答堵塞效应如何改变自声感知、发声与对话行为的因果链。

<details>
<summary>📎 论文与评分元数据</summary>

排名：前25% | 文档类型：系统技术报告 | [arXiv 原文](https://arxiv.org/abs/2609.12845)

</details>

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。

- 评分规则：type-aware-v1

- 评分模型：muse-spark-1.3-contributor

- 评分请求协议：openai_responses

---

[← 返回 2026-09-14 语音/音乐/音频论文速递](/audio-paper-digest-blog/posts/2026-09-14/)
