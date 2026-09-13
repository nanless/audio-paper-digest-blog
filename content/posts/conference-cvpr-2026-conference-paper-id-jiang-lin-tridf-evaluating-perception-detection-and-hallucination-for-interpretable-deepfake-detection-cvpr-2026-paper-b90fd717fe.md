---
title: "TriDF: Evaluating Perception, Detection, and Hallucination for Interpretable DeepFake Detection"
date: 2026-09-13
draft: false
description: "TriDF 针对以人为中心的伪造提出可解释检测基准，用细粒度伪影感知、真假判定与解释幻觉三维评估多模态大模型，报告显示语义伪影最难且幻觉会切断感知到判定的链路。"
tags: ["基准设计", "多模态模型", "可解释性", "音频深度伪造检测"]
categories: ["cvpr-2026 论文"]
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_paper_id: "conference:cvpr:2026:conference-paper-id:Jiang-Lin_TriDF_Evaluating_Perception_Detection_and_Hallucination_for_Interpretable_DeepFake_Detection_CVPR_2026_paper"
paper_digest_source_kind: conference
paper_digest_conference_id: "cvpr-2026"
paper_digest_conference_record_url: "https://openaccess.thecvf.com/content/CVPR2026/html/Jiang-Lin_TriDF_Evaluating_Perception_Detection_and_Hallucination_for_Interpretable_DeepFake_Detection_CVPR_2026_paper.html"
paper_digest_conference_pdf_url: "https://openaccess.thecvf.com/content/CVPR2026/papers/Jiang-Lin_TriDF_Evaluating_Perception_Detection_and_Hallucination_for_Interpretable_DeepFake_Detection_CVPR_2026_paper.pdf"
paper_digest_api_reader_contract: "beginner-researcher-v3"
paper_digest_api_reader_article_sha256: "2709a456a1c9c9bd35e0282d9d25fc8980b16ae48c687d68f01a85b46a70fb9f"
paper_digest_api_reader_plan_sha256: "b26851163be3242a8d21880a5a6f0be69c78c0f9432dde77ad95eca105ac1edd"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings-v4"
paper_digest_api_reader_source_bindings_sha256: "5c52c1177e8ccb12dd07d95791a0ee2d783e44e46b3026536e192a066bdc6ca6"
paper_digest_api_reader_source_table_count: 3
paper_digest_api_reader_source_formula_count: 0
paper_digest_api_reader_structured_artifacts_sha256: "93b6677f98a52c17c415a48e622af82b2c98b0baea2e4bda36fd26e88172d285"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity-v1"
paper_digest_api_reader_author_identity_sha256: "5246ac0b7689a33ecf2a4625deb8437bc27dd0549ad1ecaee772338c5129e8fd"
paper_digest_api_reader_author_count: 14
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity-v1"
paper_digest_api_reader_resource_identity_sha256: "becabf21a7f330f84d5d6f39cc548dd1d1d0e30ced9506006ba57c15dbfea5c8"
paper_digest_api_reader_resource_count: 1
paper_digest_api_reader_decision_projection: "api-reader-decision-projection-v2"
paper_digest_scoring_contract: "api-scoring-audit-v2"
paper_digest_taxonomy_contract: "paper-taxonomy-flat-tags-compat-v1"
paper_digest_taxonomy_selection_contract: "paper-taxonomy-selection-v1"
paper_digest_taxonomy_registry_version: "paper-taxonomy-v1"
paper_digest_taxonomy_registry_sha256: "15c82a567ce5a55dc1175684ed08b64c158558639d9c8fb822c9587ec32a8778"
paper_digest_taxonomy_concepts: [{"facet":"method","id":"method.benchmark-design","label":"基准设计"},{"facet":"model_family","id":"model_family.multimodal","label":"多模态模型"},{"facet":"research_focus","id":"research_focus.interpretability","label":"可解释性"},{"facet":"task","id":"task.audio-deepfake","label":"音频深度伪造检测"}]
paper_digest_primary_task: "音频深度伪造检测"
paper_digest_primary_method: "基准设计"
paper_digest_score: 6.7
paper_digest_rank_bucket: "前50%"
paper_digest_document_type: "数据集与基准"
paper_digest_conference_structure: replayable-pdf-layout-v1
---

# 📄 看得见证据才算会判：TriDF 把感知、判定与幻觉拆开考

> 英文题目：*TriDF: Evaluating Perception, Detection, and Hallucination for Interpretable DeepFake Detection*

> 会议身份：`conference:cvpr:2026:conference-paper-id:Jiang-Lin_TriDF_Evaluating_Perception_Detection_and_Hallucination_for_Interpretable_DeepFake_Detection_CVPR_2026_paper`


> ✅ 来源为官方会议 PDF；表格与 Figure 按原文证据绑定。PDF 公式以原页区域图片展示，未冒称作者原始 TeX。

> 会议来源：[官方记录](https://openaccess.thecvf.com/content/CVPR2026/html/Jiang-Lin_TriDF_Evaluating_Perception_Detection_and_Hallucination_for_Interpretable_DeepFake_Detection_CVPR_2026_paper.html) · [官方 PDF](https://openaccess.thecvf.com/content/CVPR2026/papers/Jiang-Lin_TriDF_Evaluating_Perception_Detection_and_Hallucination_for_Interpretable_DeepFake_Detection_CVPR_2026_paper.pdf)

标签：#基准设计 #多模态模型 #可解释性 #音频深度伪造检测

评分：**6.7/10** | 创新 1.3/2 | 技术严谨 1.0/1.5 | 实验充分 0.9/1.5 | 清晰度 0.7/1 | 影响力 0.5/1.5 | 开源 1.0/1.5 | 可复现 0.3/0.5 | 工程/实践 1.0/1.5

排名：前50% | 文档类型：数据集与基准

## 👥 作者与机构

- Jian-Yu Jiang-Lin：机构信息未能从会议 PDF 纯文本可靠映射
- Kang-Yang Huang：机构信息未能从会议 PDF 纯文本可靠映射
- Ling Zou：机构信息未能从会议 PDF 纯文本可靠映射
- Ling Lo：机构信息未能从会议 PDF 纯文本可靠映射
- Sheng-Ping Yang：机构信息未能从会议 PDF 纯文本可靠映射
- Yu-Wen Tseng：机构信息未能从会议 PDF 纯文本可靠映射
- Kun-Hsiang Lin：机构信息未能从会议 PDF 纯文本可靠映射
- Chia-Ling Chen：机构信息未能从会议 PDF 纯文本可靠映射
- Yu-Ting Ta：机构信息未能从会议 PDF 纯文本可靠映射
- Yan-Tsung Wang：机构信息未能从会议 PDF 纯文本可靠映射
- Po-Ching Chen：机构信息未能从会议 PDF 纯文本可靠映射
- Hongxia Xie：机构信息未能从会议 PDF 纯文本可靠映射
- Hong-Han Shuai：机构信息未能从会议 PDF 纯文本可靠映射
- Wen-Huang Cheng：机构信息未能从会议 PDF 纯文本可靠映射

## 📌 核心摘要

该基准面向以人为中心的图像、视频与音频输入，要求模型同时输出真伪判定与可核验的伪影证据，难点在于生成器快速演进下的泛化缺失与多模态大语言模型解释不可靠且易幻觉。构建链条先用十六种伪造技术合成约五千组真伪配对并经质量与一致性筛选，输出高质量样本进入下一步，再按质量伪影与语义伪影两层分类体系做人工标注并定位到鼻口、上肢与背景等位置，最后将同一证据分别包装为判断题、多选题与开放问答以分离感知、检测与幻觉评估。相对以往仅用机器生成解释或只测二分类准确率的基准，其关键机制差异在于人工对齐的细粒度证据与覆盖率和幻觉率的联合度量，使解释质量可量化并可诊断失败来源。在TriDF感知基准任务下，InternVL2 5-8B图像的准确率为53.37%，高于视频的准确率51.42%。即使如此整体感知仅适度高于随机猜测且视频开放问答覆盖率明显减半，表明语义伪影与时序推理仍是瓶颈。该结论适用边界限于评测阶段的高质量合成样本，对真实网络压缩、长时程与跨语言音频场景尚未验证。原文未披露训练、推理或部署成本。

## 🔗 开源与复现资源

- 代码相关资源：<https://j1anglin.github.io/TriDF/> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 输入是什么，目标是什么，这篇解读要交付什么？

本文解读的对象是 TriDF，一项面向可解释深度伪造检测的基准工作。输入是论文正文提供的确定性证据与官方原图像素，目标是让刚进入语音音乐音频领域的研究生能复述方法与实验条件。必须保留的信息包括任务定义、3 类评估维度、数据构造流程、题型与指标含义、主结果与失败模式，以及代码可用性状态。

深度伪造在这里特指以人为中心的伪造，即操纵或编造人物身份、外貌或行为的图像、视频与音频。与一般合成媒体不同，这类内容直接针对人，因此检测不仅要给出真假标签，还要给出可被检查的理由。论文把这种需求拆成 3 个可操作的问题：模型能否识别细粒度伪影，能否区分真假样本，模型的解释是否编造了不存在的证据。

对音频方向的新生而言，关键是把视觉与听觉统一到同一评估语言。图像视频中的模糊、闪烁对应音频中的削波、噪声与不自然韵律，都是生成器留下的痕迹。语义层面的解剖不一致对应音频层面的喉颈异常与口鼻区域不自然，都是需要常识才能判定的矛盾。位置维度则把伪影固定到鼻口区、上肢、背景等区域，便于检查模型是否看对地方。

论文声明的资源状态是代码当前可用，网址为项目主页。解读中凡涉及公开可用性的判断，只以该状态为准。本次解读默认从原文独立写作，不继承其他生成分析的解释与评价，事实回到原文核对。

### 已有路线解决了什么，还缺哪块拼图？

传统深度伪造检测通常被形式化为有监督二分类。论文指出这类模型在训练集上准确率高，但容易过拟合数据集特有线索，在分布偏移下泛化差。图像侧改进加入取证先验，针对上采样痕迹、频域伪影与跨视角不一致；视频侧加入时序与生理线索与音画一致性。这些工作提高了原始检测准确率，但标注停留在二分类，缺少系统细粒度标签。

多模态大模型检测器把视觉编码器与大语言模型结合，统一做检测与推理。论文点名的路线包括利用多模态推理与知识引导学习的方法，以及强调人类式视觉语言推理的方法。它们改善了泛化与可解释性，但推理仍易幻觉，即生成不正确、编造或无关的理由，且不对应样本中可观察的伪影。已有缓解思路用真假对比的掩膜引导定位加结构化提示，再微调对齐融合目标。

基准侧从早期分类中心语料向强调可解释、多模态与推理能力的基准演进。早期数据集奠定了图像伪造研究基础，大规模基准扩展了模态与监督粒度，全合成套件强调跨生成器迁移。但论文认为它们在生成多样性、模态范围上仍有限，且文本理由多由大语言模型产生，可能引入偏差。同期可解释检测基准探索了自然语言标注与细粒度伪造分类，或建立跨模态基准，强调细粒度异常识别。

论文的判断是这些基准主要评估模型输出，而没有确认模型是否真正感知到底层视觉伪影或高层语义不一致，且解释性幻觉未被检验。这个缺口决定了 TriDF 的设计：既要覆盖多生成器与多模态，也要用人工标注的细粒度伪影做真值，还要单独度量幻觉。理解这一点，才能明白后文为何同时保留准确率、覆盖率与幻觉指标。

### 要测的三个能力如何定义，题型如何对应？

TriDF 把评估分成感知、检测与幻觉 3 个互补维度。感知评估模型能否识别不同生成器引入的操纵伪影，只用伪造样本，题型包括真假问、多项选择问与 Type-A 开放问。检测评估区分真实与操纵内容的能力，需要真假样本混合，只用 Type-B 开放问。幻觉评估模型生成解释时编造不存在伪影的倾向，从两类开放问回答中推导。

真假问与多项选择问进一步分为伪影相关与位置相关。伪影相关问是否存在某种异常或哪些伪影存在；位置相关分两类，第一类问指定区域是否有伪影或定位伪影，第二类问某种特定伪影是否存在或位于何处。每道多项选择都包含 None 选项并允许多选，以提高难度并减少只靠选项先验作答。Type-A 开放问告知样本为假，要求全面结构化分析所有可见伪影。

Type-B 开放问不预告真假，要求先按严格格式给出二分类决策，再列出识别到的伪影。为应对多项选择中的选择偏差，论文保证真值选项均匀分布。开放回答往往冗长自由，即使有严格指令，论文用外部大语言模型做伪影映射，而非用强闭源多模态模型当裁判，以避免自偏好偏差。

映射做法是先用预定义伪影数组过滤，再把模型原始回答映射为伪影列表，进而计算覆盖与幻觉指标。这条链路是全文方法复述的主线：输入是伪造样本与问题，输出是模型回答，中间经解析映射为伪影列表，最后用准确率、覆盖率与幻觉指标分别打分。先建立这条链，后续符号才有依附。

### TriDF 全景：一个样本如何走完三维评估？

TriDF 的全景可以沿一个伪造样本走一遍。起点是跨 3 模态收集的开源人物相关真实数据，图像、视频与音频分别进入 16 种伪造技术。生成后形成一一对应的真假对，经过真实性与一致性自动质控，保留高质量对，再构造质量与语义伪影问题并做人工标注，得到可靠真值。评估时把高质量数据与 3 类问题组合喂给被测多模态大模型。

下面一段先给出全景图的导读，图中部与下部对应上述 2 个阶段，读者可按箭头核对数据流与评估流的分叉汇合情况。

> **看图路径：** 1. 先看顶部数据生成栏如何从图像音频视频原始数据指向 16 类伪造任务；2. 再看左下伪影分类树如何把质量语义位置三支展开为具体伪影；3. 最后看右下评估饼图与雷达图如何把感知检测幻觉放在同一框架比较

[![原论文 Figure 1：Overview of TriDF. We propose TriDF, a comprehen- sive benchmark tailored to interpretable…](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/30ea6b5cdcfd/figure-1.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/30ea6b5cdcfd/figure-1.png)

*论文图 1。原论文 Figure 1：“Overview of TriDF. We propose TriDF, a comprehen- sive benchmark tailored to interpretable DeepFake detection mod- els.”。*

上图分为三块，顶部数据生成显示原始图像音频视频如何对应到换脸、编辑、唇同步与声音克隆等任务。左下细粒度伪影分类把伪影分成质量、语义与位置三支，质量下挂闪烁、模糊与块效应，语义下挂不自然表情与解剖不一致，位置下挂颈喉与鼻口区等。右下评估同时给出题型占比与多模型雷达比较，并按指标归一化以便对比。

沿此图可建立全文坐标：数据多样性支撑检测泛化，分类树支撑按伪影诊断，评估面板支撑 3 维耦合分析。例子是把音频削波对应到质量分支，把不自然韵律对应到语义分支，这样语音方向的新生也能用同一语言复述。记住这个坐标，后文组件与指标不再是孤立名词。

### 伪影分类树与三类问题如何分工？

伪影分类是 TriDF 的诊断基础。论文把伪影按性质与所需推理分成质量与语义两类，再把质量伪影固定到具体位置以系统评估定位能力。质量伪影是局部问题，可用传统图像处理方法识别；语义伪影需要人类常识，如解剖不一致、物体完整性缺陷或不自然韵律。位置维度不是独立伪影，而是质量伪影的落点。

**质量伪影 × 语义伪影：** 质量伪影指模糊、块效应、闪烁这类局部信号退化，可用传统图像处理思路定位；语义伪影指解剖不一致、物体完整性破坏这类需要常识推理的矛盾。二者搭配的理由是生成器既留下底层合成痕迹，也破坏高层物理合理性，组合后才能把感知拆成信号层与推理层分别考核。

题型设计承担不同的测量职责。感知维度的真假问主要探测能否可靠验证单个伪影或位置线索的存在与否；多项选择要求在一个或多个正确选项与显式 None 选项中选择，需要在多个合理候选中辨别。Type-A 开放问属于感知，Type-B 开放问属于检测，二者提示词只差是否预告真假，但测量目标完全不同。

**感知 × 可解释检测：** 感知负责判断某个具体伪影是否存在或位于何处，是证据识别；可解释检测要求先给出真假二分类结论再列出所依据伪影，是决策加举证。搭配原因是只有感知对了，检测解释才可能被证据支撑，组合意义在于把会看和会判分开度量，避免用笼统准确率掩盖证据错误。

对初学者而言，复述时要先说清样本流：输入是伪造样本与问题，输出是模型回答。再说表示：回答先被解析为真假、多选或开放结构。然后说组件：开放回答经外部模型映射为伪影列表。最后说目标：用准确率、覆盖率与幻觉指标分别打分。只有先建立这条链，后续讨论才有依附。

### 没有模型训练时，构造与标注做了哪些真实计算？

TriDF 本身不训练新的检测模型，该节没有神经网络训练阶段。真实计算发生在数据构造、自动质控与人工标注 3 步。构造时从测试集或训练未用部分选取真实样本以模拟真实场景，对每种伪造技术用至少 3 种不同模型生成对应假样本，形成严格 1 对一真假对。生成器覆盖对抗网络、稳定扩散模型、扩散变换器模型与专有模型。

任务分部分操纵与全合成两组，共 16 项。部分操纵包括换脸、面部属性操纵、唇同步、人脸重演、全身操纵与声音转换；全合成包括音频驱动 talking-head 合成、身份保持生成、文本到人物图像视频生成与声音克隆。自动质控用专用指标评估真实感与一致性，按排序保留前列并丢弃失败对。随后构造质量与语义伪影问题并做人工标注。

**覆盖率 × 幻觉：** 覆盖率度量开放回答命中人工标注伪影的比例，分工是奖励说全；幻觉度量回答编造或无支撑伪影的比例，分工是惩罚说错。搭配原因是开放回答存在多说多对与多说多错的权衡，组合后用加权分数同时约束查全与精确，防止靠堆砌伪影刷覆盖。

下面先用一段导读把流水线主路径讲清，再看原图核对质控排序与人工标注如何衔接起来。

> **看图路径：** 1. 沿上排从左向右追踪真实数据到伪造技术再到自动质控与人工标注的主路径；2. 注意自动质控框中真实性与一致性排序并丢弃失败对的分支走向；3. 看下排评估分支如何把感知可解释检测幻觉三类指标与三类题型对应

[![原论文 Figure 2：Pipeline of TriDF. (a) Generation & Annotation: We first collect open-source human-related…](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/30ea6b5cdcfd/figure-2.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/30ea6b5cdcfd/figure-2.png)

*论文图 2。原论文 Figure 2：“Pipeline of TriDF. (a) Generation & Annotation: We first collect open-source human-related datasets across three modalities.”。*

上图上排从真实数据经伪造技术到真假对，再经真实性与一致性自动质控排序筛选得到真假对。图中还标出开放问解析区分质量伪影与语义伪影的勾选逻辑，以及检测分支同时用真假样本做开放问判定的路径。复述时应强调冻结与更新不适用此处，因为没有被测模型的训练，只有数据生成与标注计算。

### 测什么、与谁比、条件是否一致、指标方向如何？

实验按问题组织。感知用只含伪造样本的真假问与多项选择问，指标为准确率与多选得分，多选按正确选项加分、错误选项扣分。检测用含真假样本的 Type-B 开放问，指标为二分类准确率加覆盖率。幻觉用开放问回答计算 CHAIR、Hal 与 F 分数，覆盖率为命中标注伪影比例，方向越高越好。CHAIR 与 Hal 越低越好，F 越高越好。

**真假问 × 多项选择问：** 真假问每次只验证单个伪影或位置线索，分工是测孤立二值判断；多项选择问给出多个候选并允许 None 选项且可多选，分工是测干扰项中辨别。搭配原因是两者互补，前者减少选项先验，后者提供上下文结构，组合才能暴露靠结构取巧或孤立判断失稳的不同弱点。

被测对象覆盖开源与闭源多模态大模型，包括 InternVL 系列、Qwen 系列、LLaVA、MiniCPM 与 GPT、Gemini、Claude 等。音频模态结果与评估设置细节放在补充材料，正文主要呈现视觉模态。比较条件上感知只用伪造样本，检测用真假混合，幻觉对真假都算，因此三者数值不能直接跨维度比大小，只能看耦合趋势。

**Type-A 开放问 × Type-B 开放问：** Type-A 开放问明确告知样本为假，要求全面分析可见伪影，分工是纯感知与解释；Type-B 开放问不告知真假，要求先判真假再列证据，分工是联合检测与解释。搭配原因是两者只差是否预告答案，组合后可直接观察感知链向检测的转化是否断裂。

下表把构造规模整理成可核对的一览，便于复现时对照数据量与多样性。表前已提出比较问题：数据是否足够多样以支撑泛化结论，公平条件是同一真假对来源与同一质控后集合，指标方向是生成器数与类型数越多覆盖越广。

| 条件 | 指标 | 构造规模 | 测试问题规模 | 生成多样性 |
| --- | --- | --- | --- | --- |
| 跨 30 余数据集 | 专用模型数 | 约 50 个 | 约 5 千真假对 | 部分操纵加全合成 |
| 覆盖 3 模态 | 伪造类型数 | 16 种 | 约 65 千问题 | 51 个生成器 |
| 开放问占比 | 题型分布 | TF 约 37.68% | MC 约 38.81% | OE 约 23.51% |

表后解释如下。构造收益是每种技术至少 3 种模型与 1 对一配对，支持细粒度标注；代价是自动质控会丢弃失败对，实际保留分布偏向高质量伪造。未胜出项是早期基准虽有更大原始视频量，但在生成器多样性与解释标注上不足。边界是正文未给出音频题量的独立拆分，复现时需查补充材料。

### 主结果：谁在感知上领先，开放问暴露了什么？

感知主结果报告显示，真假问与多项选择考查互补能力。真假问探测孤立二值判断，多项选择需要利用更丰富的上下文与答案结构。GPT 与 Gemini 在两者上总体领先开源系统，显示闭源与开源在底层与中层伪造感知上存在差距。Claude 在多项选择最强但在真假问明显下降，提示它能利用多选结构线索，但孤立二值判断较弱。

Qwen3-VL-30B 与 LLaVA-OV-72B 在两子集相对均衡，显示更强视觉编码器与更大视觉语言骨干有助于感知，但绝对准确率仍落后最优系统。总体即使最强系统在多处仅适度超过随机选择，说明鲁棒伪造感知远未解决。下面先导读雷达图，该图把语义与质量伪影的真假问准确率按伪影类型展开，是定位瓶颈的关键证据。

> **看图路径：** 1. 先确认外圈颜色区分语义伪影与质量伪影两类标签的分布范围；2. 再沿径向刻度比较每类伪影顶点向外延伸的长度差异；3. 重点对比块效应条带类顶点与解剖异常运动异常类顶点的收缩差异

[![原论文 Figure 3：Radar chart of accuracy of semantic artifacts and quality artifacts in `<TFQ>`.](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/30ea6b5cdcfd/figure-3.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/30ea6b5cdcfd/figure-3.png)

*论文图 3。原论文 Figure 3：“Radar chart of accuracy of semantic artifacts and quality artifacts in `<TFQ>`.”。*

上图为真假问上按伪影类型的准确率雷达，外圈用两种颜色区分语义伪影与质量伪影。可见质量侧的块效应、条带与反射不一致等顶点向外延伸较长，语义侧的解剖不一致与异常运动等顶点明显收缩。结合正文分析，当前模型对局部质量伪影相对容易，对需要物理推理的语义伪影一致更难。

下表把主结果的定性排序整理成可复述的对照，公平条件是同一伪造样本子集与同一题型，指标方向是准确率与覆盖越高越好，幻觉越低越好。

| 条件 | 指标 | 闭源代表 | 开源均衡代表 | 失稳例子 |
| --- | --- | --- | --- | --- |
| 真假问视觉 | 感知准确率 | GPT Gemini 领先 | Qwen3-VL-30B 均衡 | Claude 下降明显 |
| 多项选择视觉 | 多选得分 | Claude 最强 | LLaVA-72B 均衡 | 部分小模型负分 |
| 开放问已知为假 | 解释覆盖率 | GPT Gemini 较高 | LLaVA-72B 有效 | MiniCPM 接近零 |
| 开放问未知真假 | 检测准确率加覆盖 | Gemini 较强 | Qwen 覆盖高但幻觉重 | 多数模型幻觉偏高 |
| 视频相对图像 | 准确率与覆盖 | 普遍下降 | 解释视频更难 | 覆盖近乎减半 |

表后解释如下。主要收益是感知对的模型分类倾向更好，支持感知是可靠检测的必要基础；具体代价是 CHAIR 与 Hal 普遍偏高，幻觉广泛存在。反例是 InternVL2-8B 覆盖低但 CHAIR 也低，检查发现它只会识别小集合伪影；Claude 覆盖高但 CHAIR 也高，平均回答长度约 2 倍于其他模型。这说明高覆盖可能掺杂幻觉，不能单独看覆盖。

### 位置提示真能让模型看对地方吗，感知检测幻觉如何耦合？

位置提示实验定义收益与代价。收益是无提示答错但有提示答对的比例，代价是有提示反而由对变错的比例。结果呈模型依赖：少数模型净收益为正，如 InternVL2-8B 与 Claude 收益适度且代价小；部分模型弊大于利，如 MiniCPM 代价远超收益。另一些如 InternVL3-8B、Qwen3-VL-8B 与 GPT 收益与代价接近，表现不稳定。

总体位置提示不能可靠改善空间聚焦，强模型如 Gemini 与 GPT 也会被提示分散注意，显示空间线索与视觉任务融合困难。3 维耦合分析指出，在真假问、多选与 Type-A 上感知强的模型，不一定转化为 Type-B 检测准确率。检测分数相近的模型可在覆盖与幻觉严重度上差异显著，说明感知与检测只有中度耦合。

下表把耦合与提示效应的对照整理成可核对的失败条件，公平条件是同一问题集合只切换是否给位置提示或是否预告真假，指标方向是收益减代价越大越好，幻觉越低越好。

| 条件 | 指标 | 净收益例子 | 高代价例子 | 不稳定例子 |
| --- | --- | --- | --- | --- |
| 位置提示开关 | 收益减代价 | InternVL2-8B 正收益 | MiniCPM 代价远超收益 | GPT 收益代价相抵 |
| 预告真假切换 | Type-A 到 Type-B | 感知对但检测错 | 高覆盖伴高幻觉 | 检测分相近解释差异大 |
| 图像切视频 | 准确率加覆盖 | 图像相对易解释 | 视频覆盖减半 | 时序伪影更难 |
| 质量切语义 | 真假问准确率 | 块效应条带较高 | 解剖运动背景低 | 语义为主要瓶颈 |
| 长回答倾向 | 覆盖与幻觉 | 覆盖高 | CHAIR Hal 高 | F 加权综合判断 |

表后解释如下。主要收益是把定性可解释性变成可量化洞察；具体代价是提示与长回答都可能引入干扰，收益被幻觉抵消。未评测边界是音频位置提示与视频时序定位的更细拆分，正文未展开，需查补充。负结果是多数模型在提示下不稳定，说明空间注意力不可靠。

### 哪些结论有边界，什么还没有被测量？

论文直接报告的是基准构造、题型划分与多模型评测分数，支持的判断是语义伪影更难、位置提示不可靠、感知检测幻觉相互依赖。有限解释是把闭源领先归因于更强视觉编码器与更大骨干，这只是相关性而非因果，未做受控消融。未验证推测是生成器多样性必然带来现实泛化，论文未测量部署延迟与误判成本。

缺失证据不是技术错误。原文表头、图注或算术若有冲突应标注冲突，不自行编造划分或聚合口径。本次证据中表格矩阵为空表头，无法安全选择原表行列，因此正文用连续原句整理的引用表承担宽表要求，不把自动指标当成人评。百分点与相对百分比严格区分，数值相同不视为同一指标。

适用边界包括三点。第一，感知只用伪造样本，检测用真假混合，跨维度数值不可比。第二，开放回答映射依赖外部模型，映射错误会传导到覆盖与幻觉分数。第三，音频结果与评估设置细节在补充材料，正文主要结论限于视觉模态，音频方向新生在引用时需回到补充核对。

### 要复现与复核，先做什么，需要什么条件？

何时值得尝试 TriDF 的思路。当研究目标是可解释伪造检测而非单纯二分类，或需要诊断模型在质量与语义伪影上的分工，或需要量化解释幻觉对决策的干扰时，该 3 维框架值得借鉴。当只需要单模态真假准确率时，直接用传统基准更轻量。选择前先确认任务是人物中心伪造，而非一般合成图像检测。

复现先做什么。第一步按论文收集开源人物相关图像视频音频真实数据，记录数据集版本与划分，确保选自测试集或训练未用部分。第二步对每种技术用至少 3 种模型生成 1 对一真假对，记录生成器名称与版本。第 3 步跑真实性与一致性自动质控并排序筛选，保留筛选阈值与丢弃率。第四步构造真假问、多项选择与两类开放问，保证多选真值均匀分布。

第五步做人工标注得到伪影与位置真值，第六步用同一外部映射模型解析开放回答并计算准确率、覆盖率、CHAIR、Hal 与 F 分数。关键超参数与信息条件包括多选加扣分规则、映射模型选择、空映射与误判为真的惩罚计分、按样本平均的聚合方式。代码当前可用，网址为项目主页，但可用性指代码仓库可达。

复现前需确认依赖与模型访问权限，训练资源与推理开销需分别记录，总体趋势不等于每组每步成立。例子是先复现图像分支的真假问，再扩展到视频与音频，避免 1 次铺开 3 模态导致问题定位困难。记录每步的保留率与标注一致性，才能与原文高质量子集对齐。

### 收束：记住哪三句话去做下一步？

第一句，TriDF 把可解释检测拆成可操作的 3 个动作：用细粒度伪影题测是否看得见，用真假混合开放问测是否判得对，用覆盖与幻觉指标测解释是否编造。记住质量易语义难，位置提示多半不可靠，长回答的高覆盖要同时看幻觉。只有 3 组分数齐全，才是完整画像。

第二句，论文特有的误解需要澄清。看到伪影不等于会判定，因为幻觉会扭曲证据整合；多选强不等于二值判断强，因为选项结构可被利用；覆盖高不等于解释好，因为堆砌也会推高覆盖。复述方法时必须同时给出感知分、检测分与幻觉分，否则是不完整的画像。这些区分正是 3 维评估的价值。

第三句，下一步验证应补两项。一是音频模态的独立复核，包括削波、不自然韵律与口鼻区定位的题量与基线；二是映射稳健性检验，换映射模型或人工抽检开放回答，观察覆盖与幻觉分数是否稳定。只有这两项补齐，才能把视觉上的 3 维结论推广到语音音乐音频的实际检测系统。

## 📐 原文公式与排版

以下展示论文原页中的数学表达区域，保留原始上下标、分式和符号排版。区域序号仅用于本文导航，不是论文公式编号。

[![原文数学表达区域 1，PDF 第 5 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/7b6183f74d83/figure-1.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/7b6183f74d83/figure-1.png)

区域 1 · [查看论文原页](https://openaccess.thecvf.com/content/CVPR2026/papers/Jiang-Lin_TriDF_Evaluating_Perception_Detection_and_Hallucination_for_Interpretable_DeepFake_Detection_CVPR_2026_paper.pdf#page=5)

[![原文数学表达区域 2，PDF 第 6 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/7b6183f74d83/figure-2.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/7b6183f74d83/figure-2.png)

区域 2 · [查看论文原页](https://openaccess.thecvf.com/content/CVPR2026/papers/Jiang-Lin_TriDF_Evaluating_Perception_Detection_and_Hallucination_for_Interpretable_DeepFake_Detection_CVPR_2026_paper.pdf#page=6)

[![原文数学表达区域 3，PDF 第 6 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/7b6183f74d83/figure-3.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/7b6183f74d83/figure-3.png)

区域 3 · [查看论文原页](https://openaccess.thecvf.com/content/CVPR2026/papers/Jiang-Lin_TriDF_Evaluating_Perception_Detection_and_Hallucination_for_Interpretable_DeepFake_Detection_CVPR_2026_paper.pdf#page=6)

另有 6 个候选区域因边界不明确或图片数量、尺寸限制未展开；请[查看完整论文](https://openaccess.thecvf.com/content/CVPR2026/papers/Jiang-Lin_TriDF_Evaluating_Perception_Detection_and_Hallucination_for_Interpretable_DeepFake_Detection_CVPR_2026_paper.pdf)中的原始排版。

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。
- 评分规则：type-aware-v1
- 评分模型：muse-spark-1.3-contributor
- 评分请求协议：openai_responses

---

[← 返回 cvpr-2026 论文汇总](/posts/conference-cvpr-2026/)
