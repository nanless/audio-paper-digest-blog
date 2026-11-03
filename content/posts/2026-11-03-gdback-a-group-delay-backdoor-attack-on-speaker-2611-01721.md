---
title: "GDBack: A Group-Delay Backdoor Attack on Speaker Identification via Analytic All-Pass Filtering"
date: 2026-11-03
draft: false
tags: [说话人识别, 对抗攻击构造, 信号处理, 语音, 音频安全]
categories: [论文速递]
description: "GDBack 用同一组二阶全通滤波对投毒语音做相位变换，在两数据集三模型上以 5% 投毒取得 94% 以上攻击成功率，同时保持正常识别与语音质量，其激活依赖中心频率等滤波参数且在强混响与部分防御下仍有局限。"
hiddenInHomeList: true
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_arxiv_id: "2611.01721"
paper_digest_workbench_contract: "researcher-workbench"
paper_digest_workbench_schema_fingerprint: "1f09b594c317cc38e934de27a5b0e8ceb4baa50ef79bd4f8683dd9adea720fe7"
paper_digest_reader_title: "同一组滤波器如何留下可学习的相位痕迹：GDBack 群延迟后门解读"
paper_digest_original_title: "GDBack: A Group-Delay Backdoor Attack on Speaker Identification via Analytic All-Pass Filtering"
paper_digest_arxiv_version: 1
paper_digest_arxiv_versioned_id: "2611.01721v1"
paper_digest_arxiv_abs_url: "https://arxiv.org/abs/2611.01721v1"
paper_digest_arxiv_pdf_url: "https://arxiv.org/pdf/2611.01721v1.pdf"
paper_digest_primary_task: "说话人识别"
paper_digest_tags_contract: "paper-tag-flat-tags"
paper_digest_tags_schema_fingerprint: "27e36280a4b8d3df62ebe54d3ab037920f4d69feb2b554163f01bbae2caf4338"
paper_digest_tags_selection_contract: "paper-tag-selection"
paper_digest_tags_registry_version: "paper-tag-catalog"
paper_digest_tags_registry_sha256: "9673bc0122e1905a5dcfd8b223675400cc2fa4c36095bc0e5f817edf99a0ec5c"
paper_digest_tags_concepts: [{"facet":"task","id":"task.speaker-identification","label":"说话人识别"},{"facet":"method","id":"method.adversarial-attack","label":"对抗攻击构造"},{"facet":"method","id":"method.signal-processing","label":"信号处理"},{"facet":"signal","id":"signal.speech","label":"语音"},{"facet":"research_focus","id":"research_focus.security","label":"音频安全"}]
paper_digest_primary_method: "对抗攻击构造"
paper_digest_score: 6.1
paper_digest_rank_bucket: "前50%"
paper_digest_document_type: "方法研究"
paper_digest_one_sentence: "GDBack 用同一组二阶全通滤波对投毒语音做相位变换，在两数据集三模型上以 5% 投毒取得 94% 以上攻击成功率，同时保持正常识别与语音质量，其激活依赖中心频率等滤波参数且在强混响与部分防御下仍有局限。"
paper_digest_authors: [{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Bicheng Xiong"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Tao Li"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Chenhui Cui"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Zedong Xing"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Qien Li"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Weiping Wen"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Rubing Huang"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Tsong Yueh Chen"}]
paper_digest_abstract_sha256: "8632c366b448b2d1d4d23041227d39fe7115d67b48051de8661ea983c5e429a4"
paper_digest_sidecars: {"citation.bib":{"sha256":"afd6669cc6b26c28585bd99ce6501d2ad36d3031abe2e8a57afd3a3de9868ef8","url":"/audio-paper-digest-blog/client/papers/2026-11-03/2611-01721/citation.bib"},"citation.json":{"sha256":"2eb150ae6a721c342d53c472f3d9396bf8e8c4196279399e26385ad0b99c85b9","url":"/audio-paper-digest-blog/client/papers/2026-11-03/2611-01721/citation.json"},"citation.ris":{"sha256":"4fb852a84faaebe151c042cc037363d0a244b9d96a5de4c651c603ff6d96474a","url":"/audio-paper-digest-blog/client/papers/2026-11-03/2611-01721/citation.ris"},"rethink-context.json":{"contract":"paper-research-context","schemaFingerprint":"5d4e79f7d3ee65b39ccb38281548bf20a1b2041ab7a27625eaf97ab9909a8383","sha256":"4eb6d6b97512cf85827be14e70a56e5b2047025bdb1d370632e9994cb006d858","url":"/audio-paper-digest-blog/client/papers/2026-11-03/2611-01721/rethink-context.json"}}
paper_digest_api_reader_contract: "beginner-researcher"
paper_digest_api_reader_schema_fingerprint: "cd8baf5b8bda3a49eec64f6005931af63de4e9a13148cba5f354c661ca6e9df2"
paper_digest_api_reader_article_sha256: "4a2f68ffbf9833286028a56d2cd4962d18d261807e09f00a7206e0542889f215"
paper_digest_api_reader_plan_sha256: "e77eb103f1577ee814b7408a5094934ccbcdbc80bbd44feff3ff629c27ef84f0"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings"
paper_digest_api_reader_source_binding_schema_fingerprint: "d2a2607a6e561909473022eb43f56332ee357af8568566a095c29083ffdec9cc"
paper_digest_api_reader_source_bindings_sha256: "74e0de4c4f2dbe57cb00206e72f38f72f4007d80af11e68c781c488748ac50c8"
paper_digest_api_reader_source_table_count: 4
paper_digest_api_reader_source_formula_count: 4
paper_digest_api_reader_structured_artifacts_sha256: "183e3199b4b85afee2fdaaa60cb78dfadc29ebe82d1a6ba154462b4a98709adf"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity"
paper_digest_api_reader_author_identity_schema_fingerprint: "1e3fd3a9a56c9a5bf52df8df5022690b9a3fa92e83e934f295af87c0e258ed2f"
paper_digest_api_reader_author_identity_sha256: "35d0571d0694d67b0c07dc91bbebd781f41f351396ff302d611ff38b60057faf"
paper_digest_api_reader_author_count: 8
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity"
paper_digest_api_reader_resource_identity_schema_fingerprint: "33b0be17118be61f39b85ce690c8da17e91f2864bb65e85284f60c40067328e0"
paper_digest_api_reader_resource_identity_sha256: "151331b79575d371b466b344b230df2eddfaac852d01aa3ade9b66480fcecf29"
paper_digest_api_reader_resource_count: 0
paper_digest_api_reader_figure_persistence: "ephemeral-no-persisted-figure-assets-v1"
paper_digest_api_reader_decision_projection: "api-reader-decision-projection"
paper_digest_api_reader_decision_projection_schema_fingerprint: "e56feb5ab75c8710904916b898f73dab9bb18bdf65bb60b7ed2edf7f99cea860"
---

# 📄 同一组滤波器如何留下可学习的相位痕迹：GDBack 群延迟后门解读

> 英文题目：*[GDBack: A Group-Delay Backdoor Attack on Speaker Identification via Analytic All-Pass Filtering](https://arxiv.org/abs/2611.01721v1)*

<!--paper-tag-hierarchy-v1:start-->

**研究分类**

- **研究任务**：[说话人识别](/audio-paper-digest-blog/papers/?concept=task.speaker-identification)
- **研究方法**：[对抗攻击构造](/audio-paper-digest-blog/papers/?concept=method.adversarial-attack)；[信号处理](/audio-paper-digest-blog/papers/?concept=method.signal-processing)
- **信号**：[语音](/audio-paper-digest-blog/papers/?concept=signal.speech)
- **研究重点**：[音频安全](/audio-paper-digest-blog/papers/?concept=research_focus.security)

<!--paper-tag-hierarchy-v1:end-->

> 评分：**6.1/10** | 创新 1.2/2 | 技术严谨 1/1.5 | 实验充分 1.2/1.5 | 清晰度 0.8/1 | 影响力 0.8/1.5 | 开源 0/1.5 | 可复现 0.3/0.5 | 工程/实践 0.8/1.5


## 👥 作者与机构

- Bicheng Xiong：机构信息未能在本次解析中与作者逐人可靠绑定
- Tao Li：机构信息未能在本次解析中与作者逐人可靠绑定
- Chenhui Cui：机构信息未能在本次解析中与作者逐人可靠绑定
- Zedong Xing：机构信息未能在本次解析中与作者逐人可靠绑定
- Qien Li：机构信息未能在本次解析中与作者逐人可靠绑定
- Weiping Wen：机构信息未能在本次解析中与作者逐人可靠绑定
- Rubing Huang：机构信息未能在本次解析中与作者逐人可靠绑定
- Tsong Yueh Chen：机构信息未能在本次解析中与作者逐人可靠绑定

## 📌 核心摘要

读者需要理解的对象是封闭集说话人辨认，输入为一段语音，输出为登记说话人中的身份编号，困难在于后门触发既要跨样本稳定可学，又不能明显改变音质与语义。论文提出的方法先用同一组解析全通滤波器对选中的训练语音做滤波，再把滤波后语音改标为目标说话人，victim 按常规流程训练后，推理时对非目标语音施加相同滤波即触发目标判定。与 PhaseBack 直接改写选定时频相位值、StealthPhase 粘贴参考语音相位模板不同，该方法只叠加相同的随频率变化的相位响应和群时延，输出相位仍随原语音变化。在 LibriSpeech 与 VoxCeleb1 上对 ECAPA-TDNN、x-vector 和 RawNet3 的六组评测中，同一组参数的平均攻击成功率达到 97.00%，高于 PhaseBack 的 90.58% 与 StealthPhase 的 76.09%，且良性准确率与干净模型相差至多 1.54 个百分点。结论适用于 5% 投毒率与数字域评测，强混响、强背景干扰与空中播放后效果下降且与架构有关。原文未披露训练、推理或部署成本。

## 🔗 开源与复现资源

本次未形成可展示的已核验资源记录，开放状态尚未核实。

可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 说话人辨认系统在训练数据环节面临什么风险

说话人辨认的输入是一段语音，输出是这段语音属于哪一个已注册说话人。系统先把语音变成声学特征或直接吃原始波形，再学出能区分说话人的表示，最后做闭集分类。论文研究的是闭集说话人辨认，即测试说话人一定出现在训练的 251 个身份之中。

论文假设的威胁场景是训练数据在训练前可能经由外部提供方引入。如果攻击者能在训练前改动其中一小部分语音，并把标签改为自己选定的目标说话人，受害者仍按正常流程训练，得到的模型在干净语音上识别正常，但把同样的变换加到任意非目标语音上就会误判为目标。这就是投毒式后门攻击。

**说话人辨认 × 投毒后门攻击：** 说话人辨认指把一段语音判给已注册的若干身份之一，投毒后门攻击指攻击者在训练前改动一小部分训练语音并改标为目标说话人，模型在正常语音上表现正常，遇到触发变换才误判为目标，两者搭配说明本文威胁发生在数据环节而非模型结构。

理解后文需要分清两类线索。外加型线索是混入与原语音无关的声音，例如超声或环境音。变换型线索是不引入外部声音，而是改变原语音本身，例如变速、加垫、变调或调幅。GDBack 属于变换型，但它动的是相位，幅度理想情况下不动，这使它在看幅度的可视化里很不显眼。

### 已有相位后门为何要求输出相位长得一样

已有两条相位后门路线都靠绝对相位一致建立跨样本线索。PhaseBack 在选定的时频分量上写入预设的相位值，StealthPhase 把选定短时傅里叶变换相位区域替换为来自参考语音的相位图。做法不同，但结果都是不同毒性样本在被选分量上共享同一组绝对相位值。

另一类语音变换后门已经证明，一致性不必靠输出长得一样。Speed Master 做变速，调制类方法做幅度调制，都是对不同语音施加同一个变换，输出波形各不相同，但变换本身是共同线索。论文的问题正在于此：相位域的一致性是否也能放在变换层面，而不强制输出相位模板相同。

论文还指出，已有相位模板方法的攻击成功率在不同数据集和模型间波动较大。防御方面，常见思路有输入预处理、触发重构检测和模型修复，例如重采样、低通、Neural Cleanse、干净微调和剪枝。后文的防御实验就是按这 3 类组织的，不能把某一类防御失效理解为所有防御都失效。

### 论文要解决的具体矛盾是什么

论文要同时满足 3 个互相牵制的要求。有效性要求干净语音识别准确率高，触发语音稳定指向目标身份。隐蔽性要求触发不破坏听感、语言内容和主要信号结构。鲁棒性要求在常见信号变化和真实播放录音下仍能激活，且不依赖特定受害者结构。

难点在于，如果直接改写相位为固定模板，容易留下可检测的绝对相位痕迹，也可能受参考语音和模型的影响。如果只做微弱的相位扰动，又可能形不成可学习的稳定关联。论文因此寻找一个解析可控的相位变换：参数少、无需参考语音、无需针对模型优化，既能引入跨样本共享的频率相关延迟结构，又让输出相位保留对原始语音的依赖。

### GDBack 的整体流程是怎样的

沿一个样本走一遍最清楚。攻击者先确定一组滤波参数，构造一个级联全通变换。对训练集中随机选出的子集，每个波形都经过同一个变换，再统一标为目标说话人标签，构成毒性子集。毒性子集与剩余干净数据合并为投毒训练集，受害者按正常流程训练 30 个轮次。推理时，干净语音走正常分类，任意非目标语音一旦施加同一变换，就被期望判为目标。

下面这张对比图先讲清新旧思路的区别，左侧是已有相位模板攻击，两个不同输入在输出端被强制为相同的相位片段，右侧是 GDBack，两个不同输入经过同一个滤波器，输出相位仍然各不相同，共享的是变换本身带来的群延迟贡献。

> **看图路径：** 1. 先看左右两栏的输入语音与输出相位曲线的对应关系；2. 再对比中间红框共享模板与绿框同一滤波器的标注差异；3. 注意右侧输出标注为 Different，表示输出相位仍随输入而变

[![原论文 Figure 1：Differences between phase-template backdoor attacks and GDBack.](https://arxiv.org/html/2611.01721v1/motivation.svg)](https://arxiv.org/html/2611.01721v1/motivation.svg)

*论文图 1。原论文 Figure 1:：“Differences between phase-template backdoor attacks and GDBack.”。*

从图中可见，左侧中间是共享相位模板，右侧中间是同一滤波器及其窄峰响应，右侧输出标注为不同。这对应后文公式的含义：输出相位等于原始相位加上滤波器相位，滤波器相位对所有样本相同，但输出相位因原始相位不同而不同。

下一张总览图把投毒、训练、推理 3 阶段放在一起，有助于复述时定位每个符号在哪个阶段出现，毒性波形、目标标签、投毒训练集和后门模型的箭头都已画出。

> **看图路径：** 1. 沿左侧投毒阶段看样本选择、滤波、改标签三步的箭头顺序；2. 观察中间训练阶段毒性子集与剩余干净数据如何合并；3. 对比右侧推理阶段正常输入与触发输入的两条预测路径

[![原论文 Figure 2：Overview of GDBack. The attacker applies the same analytic all-pass transformation to randomly…](https://arxiv.org/html/2611.01721v1/framework.png)](https://arxiv.org/html/2611.01721v1/framework.png)

*论文图 2。原论文 Figure 2:：“Overview of GDBack. The attacker applies the same analytic all-pass transformation to randomly selected training utterances and assigns them the target speaker label.”。*

该图左侧是投毒阶段，显示 K 个相同的 2 阶全通节级联、相位响应和群延迟响应示意，中间是训练阶段，毒性子集与干净数据合并训练受害者模型，右侧是推理阶段，干净输入判为真实说话人，触发输入判为目标说话人。记住同一参数在投毒和激活时必须一致，这是复现时最容易忽略的条件。

### 二阶全通滤波器对语音做了什么

全通滤波首次出现需要解释：它是一种理想幅度为 1 的滤波器，只改相位不改幅度。输入频谱可写成幅度乘以原始相位因子，滤波后幅度不变，相位变为原始相位加上滤波器引入的相位。群延迟首次出现也需要解释：它是滤波器相位对角频率求导再取负，表示不同频率被延迟的样本数，峰越尖说明延迟越集中在某个频率附近。

**相位模板 × 共享变换：** 相位模板指把不同样本选定频段的相位直接改写为同一组数值，共享变换指对所有样本施加同一个滤波操作而不规定输出相位必须相等，前者靠输出绝对值一致建立线索，后者靠输入输出之间的固定映射关系建立线索，GDBack 属于后者。

具体实现用实系数 2 阶全通节，极点半径 r 控制在 0 到 1 之间，中心频率 fc 决定延迟结构出现在哪个频段，采样率记为 fs。角频率先由中心频率和采样率换算，滤波器分子分母由 r 和该角频率的余弦构成，零点与极点关于单位圆互为倒数，从而保证理想单位幅度。

\[A(z)=\frac{r^{2}-2r\cos(\omega_{c})z^{-1}+z^{-2}}{1-2r\cos(\omega_{c})z^{-1}+r^{2}z^{-2}}.\]

该式分子分母的系数都含 r 和中心角频率余弦项，z 的负幂表示延迟操作。r 越接近 1，极点越靠近单位圆，相位在中心频率附近变化越陡，群延迟峰越尖锐。r 较小则变化平缓，触发强度弱。

输出相位关系是理解全文的关键。设输入相位为原始语音相位，滤波器相位对所有毒性样本相同，输出相位是两者相加再对 2π 取模。因此共享的是加上的那一项，而不是最终输出。

\[\phi_{y}(\omega)=\phi_{x}(\omega)+\phi_{A}(\omega)\pmod{2\pi},\]

这解释了为何不同毒性语音内容不同、输出相位各异，却能被模型学到同一个关联：模型学的是同一个加性相位映射，而不是某个固定的相位图。

### 级联参数如何控制触发强度

单节的延迟强度有限，论文把 K 个完全相同的 2 阶节串起来，总传递函数是单节传递函数的 K 次方，参数组记为极点半径、中心频率和级联数。级联后总群延迟是单节群延迟的 K 倍，相当于把同一频率相关延迟累加 K 次。

\[H_{\bm{\eta}}(z)=A(z)^{K},\qquad\bm{\eta}=(r,f_{c},K).\]

该式说明触发器完全由 3 个解析参数指定，无需参考语音模板，也无需针对受害者模型做优化。中心频率管位置，r 管集中程度，K 管累积强度，三者分工不同。

群延迟的定义把这种频率相关延迟量化出来，横轴是角频率，纵轴是延迟样本数，峰的位置对应中心频率，峰的高低和宽窄由 r 和 K 共同决定。

\[\tau_{\bm{\eta}}(\omega)=-\frac{d}{d\omega}\angle H_{\bm{\eta}}(e^{j\omega}).\]

理想情况下幅度保持为 1，相位引入频率相关偏移。实际数字实现和播放录音会偏离理想，但论文用实验检验这种偏离是否破坏后门。

**全通滤波 × 群延迟：** 全通滤波理想情况下不改变各频率的幅度，只改变相位随频率的变化，群延迟是相位对频率求导再取负，描述不同频率成分被延迟了多少，两者搭配使触发器可以只在相位维度留下随频率变化的延迟结构，而梅尔谱等幅度特征变化很小。

主实验统一用 r 为 0.90、fc 为 4000 Hz、K 为 10 的同一配置，覆盖两个数据集和 3 种模型，这是后文一致性结论成立的前提，换参数则结论要重新评估。

### 投毒与激活在数据层面如何操作

本节对应论文的训练环节，但攻击者不控制模型训练，只做数据投毒。记干净训练集为样本与标签的集合，目标身份为攻击者选定的说话人。攻击者随机选出子集，对其中每个波形施加触发变换并改标为目标，得到毒性子集。投毒训练集是去掉被选样本的干净集再并上毒性子集，受害者用正常流程在其上训练。

毒性样本内容各异且保留各自相位特点，但共享同一变换到同一标签的映射，这就是模型要学的后门信号。推理激活时，对非目标语音施加同一参数的变换，期望模型输出目标身份。投毒与激活用同一参数组是必须满足的条件，机制分析中故意改参数正是为了验证违背该条件会怎样。

论文默认投毒率为 5%，毒性样本从全训练集随机选，模型训练批量为 32，共 30 轮。硬件为两块 24 GB 显存的 RTX 4090，CUDA 12.4。这些是复现时要对齐的预算和流程，投毒率改变则有效性结论会变。

### 数据集、模型与评价指标如何设定

数据集用 LibriSpeech 和 VoxCeleb1，各选 251 个说话人构成闭集辨认任务，音频重采样到 16 kHz 并切为 3 秒段。前者是朗读语音、录制条件较受控，后者来自访谈和媒体、声学条件更多样。两者的干净基线准确率差异很大，后文比较必须分开看，不能把跨数据集的数值直接比高低。

受害者模型选 ECAPA-TDNN、x-vector 和 RawNet3。前两者吃谱特征，后者直接从原始波形学习表示。同一触发变换要在差异很大的输入表示下都被学到，这是检验跨结构可学习性的设计。基线包括最相关的 PhaseBack 和 StealthPhase，以及 PaddingBack、PBSM、Speed Master 和 ASMA，分别对应填充、变调加掩蔽、变速和调幅，投毒率无特殊说明均为 5%。

**良性准确率 × 攻击成功率：** 良性准确率统计干净测试语音被判对的比例，反映模型正常功能是否受损，攻击成功率统计非目标说话人的测试语音经触发变换后被判为目标说话人的比例，反映后门是否被激活，两者必须联合看，单看其一会误判攻击代价。

良性准确率是干净测试集上判对的比例，攻击成功率是真身份非目标的测试集上，经触发变换后判为目标的比例，目标说话人自身样本不计入攻击成功率分母。指标方向都是越高越好，但两者要联合报告。鲁棒和防御实验同样联合报告，因为变换可能同时影响正常识别和后门激活。

### 同一组参数在六种设置下是否都有效

要回答的核心问题是：同一组解析参数能否在不同数据和模型下稳定激活，而干净准确率不明显下降。比较条件是同一投毒率 5%、同一参数 r 为 0.90、fc 为 4000 Hz、K 为 10，基线配置按原文固定。指标方向都是越高越好。

下表是 LibriSpeech 上的结果，行是 3 种模型各自的良性准确率和攻击成功率，列是干净模型、4 种通用音频攻击、两种相位模板攻击和 GDBack。重点看 GDBack 列与 PhaseBack、StealthPhase 两列的对比，以及 GDBack 良性准确率与干净列的差距。

| Model | Metric | PhaseBack | StealthPhase | GDBack |
| --- | --- | --- | --- | --- |
| ECAPA-TDNN | BA (%) | 98.62 | 98.55 | 98.89 |
| ECAPA-TDNN | ASR (%) | 99.12 | 73.87 | 99.70 |
| x-vector | BA (%) | 99.60 | 99.26 | 99.56 |
| x-vector | ASR (%) | 96.75 | 87.71 | 98.71 |
| RawNet3 | BA (%) | 99.66 | 99.36 | 99.33 |
| RawNet3 | ASR (%) | 91.33 | 77.32 | 94.89 |

表中 GDBack 在 ECAPA-TDNN、x-vector、RawNet3 上的攻击成功率分别为 99.70%、98.71%、94.89%，良性准确率分别为 98.89%、99.56%、99.33%，与干净模型的 98.35%、99.60%、99.09% 接近。相位模板基线波动更大，StealthPhase 在 ECAPA 上仅 73.87%，PhaseBack 在 RawNet3 上为 91.33%。这支持变换层面一致性更稳定的判断，但仅限于本表的配置和数据集划分。

下表是 VoxCeleb1 上的对应结果，比较问题相同，但基线干净准确率本身低约 20 个百分点，说明该数据集更难，不能与上一表跨表比绝对值。

| Model | Metric | PhaseBack | StealthPhase | GDBack |
| --- | --- | --- | --- | --- |
| ECAPA-TDNN | BA (%) | 72.86 | 67.19 | 74.24 |
| ECAPA-TDNN | ASR (%) | 95.13 | 59.42 | 94.66 |
| x-vector | BA (%) | 75.38 | 72.20 | 78.27 |
| x-vector | ASR (%) | 95.83 | 62.49 | 97.82 |
| RawNet3 | BA (%) | 79.97 | 79.82 | 81.36 |
| RawNet3 | ASR (%) | 65.34 | 95.73 | 96.24 |

表中 GDBack 攻击成功率分别为 94.66%、97.82%、96.24%，良性准确率分别为 74.24%、78.27%、81.36%，与干净模型的 75.09%、76.73%、80.42% 接近，最大差距在 1.54 个百分点以内。6 个设置综合平均攻击成功率为 97.00%，高于 PhaseBack 的 90.58% 和 StealthPhase 的 76.09%，且 GDBack 始终在 94.66% 到 99.70% 之间，而两个相位基线分别跨越 65.34% 到 99.12% 和 59.42% 到 95.73%。这是在同一配置下得到的，换配置或换目标说话人需看消融。

### 触发语音是否还像原来的语音

隐蔽性分 3 层看：可视化结构、客观质量预测、内容可懂度。论文用同一干净语音生成各攻击的毒性版本，对比梅尔谱和波形。梅尔谱主要反映幅度，PBSM、Speed Master 和 ASMA 在能量分布、谐波或时长上有较可见变化，PaddingBack 和 PhaseBack 有红框标出的局部变化，StealthPhase 和 GDBack 与干净谱视觉接近。波形对比中，前三者包络或时序变化明显，相位类三者整体结构接近干净语音。

客观质量用 UTMOS、NISQA 和 SSL-MOS 3 种非侵入预测器，报告均值和高于 3 分的比例，越高表示预测质量越好。GDBack 均值分别为 4.0267、4.0826、4.2776，高于 3 分比例为 99.00%、94.60%、99.60%，与干净语音的 4.0782、4.0725、4.3083 和 99.40%、94.70%、99.50% 接近，在 3 个相位攻击中 UTMOS 和 NISQA 更高，SSL-MOS 相近。这只是预测器打分，不是人工听音。

内容保持用 Whisper 转写 1000 条干净与触发语音，词错误率从 6.48% 变为 6.73%，增加 0.25 个百分点，字错误率从 2.74% 变为 2.69%，下降 0.05 个百分点，短时客观可懂度为 0.9933。这些数字说明在该转写和测试条件下语言内容基本保留，但不能推广为所有语种或强噪声下都如此。

### 后门激活到底依赖相位还是幅度

机制分析固定已训练好的 ECAPA-TDNN 后门模型，只改输入，在 1000 条非目标测试语音上统计判为目标的比例。这排除了重训练带来的混杂，能更直接定位线索所在。

下表比较 4 种输入条件：干净输入、只保留触发相位、只保留触发幅度、做逆补偿抵消相移。指标是目标预测率，越高表示该条件越能触发后门。

| Condition | Target Prediction Rate (%) |
| --- | --- |
| Clean input | 0.20 |
| Phase-only condition | 99.80 |
| Magnitude-only condition | 0.30 |
| Inverse compensation | 0.10 |

表中干净输入仅 0.20%，相位-only 条件达 99.80%，幅度-only 条件仅 0.30%，逆补偿后仅 0.10%。这支持激活主要与全通引入的相位变换相关，而不是幅度变化。但这仍是相关性证据加对照干预，不能单独证明模型内部学到了群延迟算子。

**逆补偿 × 相位-only 条件：** 相位-only 条件指保留触发语音的相位而换回原始幅度，用于检验线索是否在相位里，逆补偿指再施加一个抵消全通相移的操作，用于检验拿掉该相移后后门是否消失，两者都是固定模型、只改输入的对照，组合起来指向激活与相位变换的关联。

参数敏感性进一步检验这种关联是否依赖具体配置。固定训练用 r 为 0.90、fc 为 4000 Hz、K 为 10 的模型，推理时逐个改参数。下表左中右分别扫中心频率、极点半径和级联数，报告攻击成功率。

| fcf_{c} (Hz) | ASR (%) | rr | ASR (%) | KK | ASR (%) |
| --- | --- | --- | --- | --- | --- |
| 1000 | 0.00 | 0.50 | 0.00 | 2 | 0.60 |
| 2000 | 0.00 | 0.70 | 1.90 | 4 | 16.60 |
| 3000 | 0.00 | 0.80 | 39.20 | 6 | 67.90 |
| 3500 | 0.90 | 0.85 | 85.30 | 8 | 94.40 |
| 4000 | 98.70 | 0.90 | 98.70 | 10 | 98.70 |
| 4500 | 1.50 | 0.95 | 99.70 | 12 | 99.80 |
| 5000 | 0.00 | 0.98 | 95.70 | 14 | 99.90 |

中心频率最敏感：匹配的 4000 Hz 为 98.70%，偏到 3500 Hz 或 4500 Hz 即跌到 0.90% 和 1.50%，更大偏离为 0.00%。极点半径和级联数呈非对称响应：r 从 0.50 升到 0.90 时成功率从 0.00% 升到 98.70%，0.95 达 99.70%，0.98 回落到 95.70%；K 从 2 升到 10 时从 0.60% 升到 98.70%，12 和 14 保持 99% 以上。说明减小集中度或累积强度会明显削弱激活，而在评估范围内增大则多能保持高位。该结论只在推理失配条件下成立，训练时换参数则是另一组消融。

### 投毒率、目标说话人与训练参数如何影响结果

投毒率消融在 2 数据集 3 种模型上扫描，趋势是低投毒率在部分设置下激活偏弱，到 5% 后 6 个设置都达到持续高位，再增大则增益有限且不一致，良性准确率随投毒率变化相对稳定。论文因此选 5% 为默认，这是在兼顾攻击效果与投毒预算下的选择，不是投毒越少越好的证明。

目标说话人敏感性在 LibriSpeech 的 ECAPA 上测 5 个目标，良性准确率在 98.82% 到 99.12% 之间，攻击成功率在 95.57% 到 99.70% 之间，说明在测过的身份内无强烈依赖，但未测的身份不能默认同样。

训练参数消融是每个参数单独重训再用匹配触发测。极点半径小则成功率低，增大到默认附近明显升高，良性准确率较稳定。中心频率在较宽范围内都能高，但位置仍影响高低。级联数少则低，增大后升高并在较大值保持高位。这与推理失配的结论互补：训练时需要足够的集中度和累积量，推理时又要求频率对准。复现时若只改一处参数，必须说明是重训还是仅推理失配，否则数字无法对照。

### 真实声学变化与防御下还剩多少效果

环境鲁棒在默认 ECAPA 设置下测，幅度缩放 0.8 或 1.2 倍、80 毫秒时移下，攻击成功率保持 99.6% 以上，良性准确率最多差 0.4 个百分点，说明温和的幅度和时移不破坏关联。混响和背景干扰影响更大：混响时间 0.2 秒时成功率为 96.2%，0.8 秒时降到 82.0% 且良性准确率降到 40.2%；20 dB 干扰下成功率约 99%，5 dB 强干扰下成功率在 88.2% 到 98.2% 之间，但良性准确率大幅下降。这意味着强失真下模型本身已难正常识别，高成功率要与低良性准确率一起理解。

真实空中播放录音用手机外放、1 米处电脑录制、普通房间无隔音，每模型 200 条触发语音。数字与空中攻击成功率分别为 ECAPA 100.00% 到 96.50%、x-vector 98.50% 到 99.00%、RawNet3 96.00% 到 78.00%。RawNet3 退化更大，说明结构对声学传输的敏感性不同，不能把某一模型的空中结果推广到所有模型。

防御方面，输入预处理中重采样到 8 kHz 和 3.4 kHz 低通大幅拉低 ECAPA 和 x-vector 的良性准确率到约 10% 和 13%，但攻击成功率仍高；相位抖动和随机全通基本不影响两者。Neural Cleanse 检测如下图所示，读图任务是看目标类是否成为异常离群点。

> **看图路径：** 1. 先看横轴说话人编号与纵轴异常指数的含义；2. 再找红色虚线阈值 2 与红色星形目标类的位置关系；3. 注意多个灰色良性类同样偏高，目标类并不突出

[![原论文 Figure 8：Neural Cleanse detection results for GDBack.](https://arxiv.org/html/2611.01721v1/defense_nc.svg)](https://arxiv.org/html/2611.01721v1/defense_nc.svg)

*论文图 8。原论文 Figure 8:：“Neural Cleanse detection results for GDBack. The actual target class obtains an anomaly index of 1.71, below the detection threshold of 2.”。*

图中横轴是说话人编号，纵轴是异常指数，红色虚线是阈值 2，红色星形目标类为 1.71，低于阈值，且多个良性灰点同样偏高，目标类并不突出，因此在该设置下检测失败。干净微调 50 轮和渐进剪枝也未能在保持良性准确率的同时有效压制后门，压制增强往往伴随正常识别明显下降。这些都是在原文评估设置下的局限刻画，不是后门不可防御的证明。

### 复现第一步要对齐哪些条件

先按原文搭闭集任务：2 数据集各 251 个说话人，16 kHz、3 秒段，ECAPA-TDNN、x-vector、RawNet3 三结构，批量 32、30 轮。攻击用同一参数 r 为 0.90、fc 为 4000 Hz、K 为 10，投毒率 5%，随机选子集并改标为同一目标，投毒与激活用同一参数。评价时良性准确率用干净测试集，攻击成功率只用真身份非目标的测试集并施加触发，分母要排除目标说话人自身。

机制对照建议先复现相位-only 与幅度-only 分离和逆补偿，因为它们不需重训，只需固定模型改输入。若中心频率失配后成功率未骤降，先查滤波实现是否真正改变相位、是否误动了幅度，以及触发是否在重采样或特征提取中被归一化掉。

论文未提供经校验的公开代码、模型或数据资源，本次也未发现可写为已公开的来源绑定，因此不要默认有官方脚本可用。质量评估用的 UTMOS、NISQA、SSL-MOS 和 Whisper 版本、MUSAN 干扰采样方式都要按原文记录对齐，否则数字会有系统偏移。

### 什么时候值得尝试还缺哪些验证

当研究问题是相位域线索能否放在变换层面，而不是输出模板层面，GDBack 提供了一个可复述的例子：同一全通级联带来共享的频率相关相位与群延迟贡献，输出相位仍随原始语音而变，在原文 6 种设置下稳定激活且质量与内容保持较好。需要相位感知安全分析的场景值得参考其对照设计。

不值得夸大的是，稳定只在原文的同一配置、5% 投毒、闭集辨认和所测结构下成立。强混响、强干扰、空中传输的 RawNet3 个分支、换中心频率推理都会削弱或改变结果，防御实验也显示预处理与微调的代价与局限。把平均 97.00% 理解为任意条件下的保证是误读。

还缺的验证包括干净标签投毒下的有效性、更多语种与采样率下的可懂度与质量、针对群延迟异常的专用检测，以及模型内部究竟利用了哪个频段延迟特征的定位分析。补上这些才能判断该变换线索的适用边界。

<details>
<summary>📎 论文与评分元数据</summary>

排名：前50% | 文档类型：方法研究 | [arXiv 原文](https://arxiv.org/abs/2611.01721v1)

</details>

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。

- 评分规则：type-aware-v1

- 评分模型：muse-spark-1.3-contributor

- 评分请求协议：openai_responses

---

[← 返回 2026-11-03 语音/音乐/音频论文速递](/audio-paper-digest-blog/posts/2026-11-03/)
