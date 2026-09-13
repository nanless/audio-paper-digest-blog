---
title: "CICA: Coupling Confidence-Aware Pretraining with Confidence-Informed Attention for Robust Multimodal Sentiment Analysis"
date: 2026-09-13
draft: false
description: "针对语言、视觉、声音互相冲突时融合不可靠的问题，CICA 先让每个单模态编码器输出置信度和不确定度，再用它们调制融合注意力，在 MOSI 上报告 MAE 0.630 和 Corr 0.855、在 MOSEI 上报告 MAE 0.489 和 Corr 0.856，代价是需要两阶段训练并保留互信息正则以防止文本主导时压垮其他模态。"
tags: ["注意力机制", "多模态学习", "鲁棒性", "音视频", "语音情感识别"]
categories: ["cvpr-2026 论文"]
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_paper_id: "conference:cvpr:2026:conference-paper-id:Jiang_CICA_Coupling_Confidence-Aware_Pretraining_with_Confidence-Informed_Attention_for_Robust_Multimodal_CVPR_2026_paper"
paper_digest_source_kind: conference
paper_digest_conference_id: "cvpr-2026"
paper_digest_conference_record_url: "https://openaccess.thecvf.com/content/CVPR2026/html/Jiang_CICA_Coupling_Confidence-Aware_Pretraining_with_Confidence-Informed_Attention_for_Robust_Multimodal_CVPR_2026_paper.html"
paper_digest_conference_pdf_url: "https://openaccess.thecvf.com/content/CVPR2026/papers/Jiang_CICA_Coupling_Confidence-Aware_Pretraining_with_Confidence-Informed_Attention_for_Robust_Multimodal_CVPR_2026_paper.pdf"
paper_digest_api_reader_contract: "beginner-researcher-v3"
paper_digest_api_reader_article_sha256: "4bb8c9661b6fdee6e59006785ba2ec0a2af35301c7481d48a679d9a834606344"
paper_digest_api_reader_plan_sha256: "ec87598e90aa3097ecc81ebdfac748f0ae8c2cc60fc680722a0881cd8c895cf8"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings-v4"
paper_digest_api_reader_source_bindings_sha256: "23c4d4923923e57e33532e23f082f0f1c1337ff3d6bbfa1b19f135f875bb2ad9"
paper_digest_api_reader_source_table_count: 4
paper_digest_api_reader_source_formula_count: 0
paper_digest_api_reader_structured_artifacts_sha256: "2d962ff4d56908f5aa375beeac14556d3040faa80f9011c7ca97142febcfde18"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity-v1"
paper_digest_api_reader_author_identity_sha256: "02e46eee2347e327f98d04bd842824f16fadb4557a2c5e441aa08454cb116ac9"
paper_digest_api_reader_author_count: 6
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity-v1"
paper_digest_api_reader_resource_identity_sha256: "0dbf341386582ae7110f1921503e593b79789ae47c4eceed55f45c75ebede999"
paper_digest_api_reader_resource_count: 0
paper_digest_api_reader_decision_projection: "api-reader-decision-projection-v2"
paper_digest_scoring_contract: "api-scoring-audit-v2"
paper_digest_taxonomy_contract: "paper-taxonomy-flat-tags-compat-v1"
paper_digest_taxonomy_selection_contract: "paper-taxonomy-selection-v1"
paper_digest_taxonomy_registry_version: "paper-taxonomy-v1"
paper_digest_taxonomy_registry_sha256: "15c82a567ce5a55dc1175684ed08b64c158558639d9c8fb822c9587ec32a8778"
paper_digest_taxonomy_concepts: [{"facet":"method","id":"method.attention","label":"注意力机制"},{"facet":"method","id":"method.multimodal-learning","label":"多模态学习"},{"facet":"research_focus","id":"research_focus.robustness","label":"鲁棒性"},{"facet":"signal","id":"signal.audiovisual","label":"音视频"},{"facet":"task","id":"task.emotion-recognition","label":"语音情感识别"}]
paper_digest_primary_task: "语音情感识别"
paper_digest_primary_method: "多模态学习"
paper_digest_score: 6.2
paper_digest_rank_bucket: "前50%"
paper_digest_document_type: "方法研究"
paper_digest_conference_structure: replayable-pdf-layout-v1
---

# 📄 先估计各模态可不可信，再决定听谁的：CICA 的感知与决策耦合

> 英文题目：*CICA: Coupling Confidence-Aware Pretraining with Confidence-Informed Attention for Robust Multimodal Sentiment Analysis*

> 会议身份：`conference:cvpr:2026:conference-paper-id:Jiang_CICA_Coupling_Confidence-Aware_Pretraining_with_Confidence-Informed_Attention_for_Robust_Multimodal_CVPR_2026_paper`


> ✅ 来源为官方会议 PDF；表格与 Figure 按原文证据绑定。PDF 公式以原页区域图片展示，未冒称作者原始 TeX。

> 会议来源：[官方记录](https://openaccess.thecvf.com/content/CVPR2026/html/Jiang_CICA_Coupling_Confidence-Aware_Pretraining_with_Confidence-Informed_Attention_for_Robust_Multimodal_CVPR_2026_paper.html) · [官方 PDF](https://openaccess.thecvf.com/content/CVPR2026/papers/Jiang_CICA_Coupling_Confidence-Aware_Pretraining_with_Confidence-Informed_Attention_for_Robust_Multimodal_CVPR_2026_paper.pdf)

标签：#注意力机制 #多模态学习 #鲁棒性 #音视频 #语音情感识别

评分：**6.2/10** | 创新 1.5/2 | 技术严谨 1.0/1.5 | 实验充分 1.2/1.5 | 清晰度 0.7/1 | 影响力 0.9/1.5 | 开源 0.0/1.5 | 可复现 0.1/0.5 | 工程/实践 0.8/1.5

排名：前50% | 文档类型：方法研究

## 👥 作者与机构

- Haoyu Jiang：机构信息未能从会议 PDF 纯文本可靠映射
- Xiaoliang Chen：机构信息未能从会议 PDF 纯文本可靠映射
- Duoqian Miao：机构信息未能从会议 PDF 纯文本可靠映射
- Xiaolin Qin：机构信息未能从会议 PDF 纯文本可靠映射
- Xianyong Li：机构信息未能从会议 PDF 纯文本可靠映射
- Yajun Du：机构信息未能从会议 PDF 纯文本可靠映射

## 📌 核心摘要

多模态情感分析需从文本、视觉与声学信号预测情感强度，但真实数据存在噪声、缺失与模态冲突，均匀融合易被误导性线索带偏。该工作提出CICA框架，即耦合置信度感知预训练与置信度引导注意力，先以置信度感知预训练感知各模态可靠性，再以置信度引导融合决定融合权重，前者输出表征与置信度及不确定性，后者据此抑制不可靠流。与均匀注意力或单置信度分区缩放相比，该机制要求高置信且低误差才放大贡献，并以内在结构调制补足键质量建模。在MOSI上达到平均绝对误差0.630与相关系数0.855，相对最强基线3WD-DRT分别降低0.071与提升0.060；在MOSEI上为0.489与0.856，分别降低0.029与提升0.077；在CH-SIMS上相关系数提升0.127，在CH-SIMSv2上三分类准确率提升4.35。缺失文本时仍大幅退化，MOSI上文本单模态相关系数0.857甚至略高于多模态全量0.855，表明文本主导边界未被打破。原文未披露训练、推理或部署成本。

## 🔗 开源与复现资源

本次未形成可展示的已核验资源记录，开放状态尚未核实。
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 输入是什么，目标是什么，这篇解读要交付什么？

本文解读的对象是 1 篇研究多模态情感分析的论文，输入是同一段话对应的 3 路信号：文本、视觉、音频，目标是预测说话人的情感强度与极性。初学者容易把任务理解为把 3 路特征拼起来丢给分类器，但论文要解决的恰恰是 3 路信号本身不可靠：有的含噪声，有的时间没对齐，有的互相矛盾。

解读的交付目标是让你能复述完整方法：一个样本如何从原始输入变成单模态表示，如何得到置信度与不确定度，如何被融合注意力使用，如何被训练目标约束，以及实验在什么数据、什么划分、什么指标下验证了什么。文中所有数字都以原文证据为准，教学用的举例会明确标为例子，不虚构效果。资源状态方面，本次未发现来源绑定且完成验证的开源资源，因此不能声称代码、模型或数据已公开，复现部分只讲论文交代的流程与超参数。

多模态情感分析与纯文本情感分析的学习依赖不同。纯文本主要依赖语义理解，而这里还要处理模态之间的依赖与冲突。人说话时文字、表情、语调本应互相补充，但在真实视频中，微笑可能配着沮丧的语气，中性文字可能配着强烈的负面声音。模型如果对 3 路一视同仁，就会在冲突样本上摇摆。论文把鲁棒性定义为在噪声、缺失、矛盾条件下仍能稳定地偏向可靠模态，而不是在干净数据上刷高平均分。这个定义决定了后文为什么要做 2 阶段设计：先让编码器学会自我评估，再让融合学会听评估的话。

为避免修辞干扰，本解读统一术语。文本、视觉、音频分别记为 T、V、A。单模态编码器记为 Em，输出表示记为 Hm 或池化后的 hm。置信度记为 sm，不确定度记为 um。融合后的统一可靠性记为 rm 或 Rm，融合状态记为 z，中间的结构感知表示记为 zstruct，最终融合状态记为 zfinal，最终预测记为预测值。

损失方面，单模态预训练任务损失、置信度自适应校准损失、不确定度损失、融合阶段主任务损失、互信息对比保持损失分别对应原文的不同阶段，不要混用。指标方面，平均绝对误差越低越好，相关系数越高越好，分类准确率与 F1 越高越好。

### 已有路线各解决了什么，为什么还留下冲突问题？

第一条路线是多模态融合结构。从早期的张量融合到后来的 Transformer 融合，核心动作都是把异构特征映射到同一空间再做高阶交互。这类方法擅长在模态一致时挖掘互补信息，但在模态冲突时缺乏取舍机制。原文指出，均匀注意力把所有模态当作同样可信，遇到讽刺、表情与语气不一致、时间漂移时就容易被强势但错误的线索带偏。对研究生而言，关键是区分表达能力与选择能力：融合结构提升的是表达能力，而冲突需要的是选择能力。

第二条路线是不对称或引导式融合。有的工作假设文本主导，用文本去校正视觉与音频；有的用外部知识或动态注意力去平衡信息。这类方法已经意识到不能平均用力，但原文认为它们缺少按样本估计可靠性的原则性度量。要么依赖文本永远正确的先验，要么依赖外部知识，在文本本身中性或缺失时就会失效。理解这一点才能明白后文为什么要为每个样本、每个模态单独估计置信度，而不是学一个全局的模态权重。

第 3 条路线是可靠性与不确定性建模。有的用证据深度学习或贝叶斯近似在决策层估计不确定性，有的设计 3 路决策的接受、延迟、拒绝分区。原文把自身定位为感知与决策耦合：感知阶段同时建模自适应置信度与任务相关不确定度，以区分不同来源的不可靠；决策阶段用选择性门控只在既自信又一致时才放大该模态。与仅用单置信度做分段缩放的做法相比，门槛更严，融合更稳定。

第四类相关工作是表示保持与互信息最大化，启发了后文用对比式目标防止模态坍缩。类别差异本身不是胜负证据，同输入、同目标、同监督、同运行阶段的对照才有意义，这一点在结果部分会严格执行。

### 模态冲突具体长什么样，为什么均匀融合会犯错？

论文用一个来自 MOSEI 的例子把问题具体化。同一条发言中，视觉是微笑，传达强正向情绪；音频是沮丧语气，传达强负向情绪；文本语义接近中性。真值跟随音频，为负向。

传统模型容易被视觉的强正向线索误导，因为微笑在训练数据中通常与积极情感共现，模型学到了视觉正向的捷径。在冲突样本上，捷径恰好是陷阱。这不是标注噪声，而是真实交流中常见的非对齐与不一致。

从机制上看，标准注意力计算查询与键的相关性，只回答配不配，不回答键本身好不好。当视觉键本身是欺骗性的，高相关性反而会放大错误。均匀融合没有内部机制去判断此刻应该信任谁，因此在噪声、时间漂移、模态缺失时表现飘忽。论文据此提出感知与决策耦合：先度量每个模态对当前样本的可信度，再决定如何组合。下面先看这个冲突案例的像素呈现，建立直观印象。

> **看图路径：** 1. 先看左侧人脸微笑与右侧文字描述的情绪标签是否一致；2. 再对照底部真值 -1.33，确认最终标签跟随的是音频而非视觉；3. 注意文本被标注为中性，理解三模态各执一词的冲突结构

[![原论文 Figure 1：An illustrative case from MOSEI showing modality misalignment.](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/c16ff8dcc4bb/figure-1.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/c16ff8dcc4bb/figure-1.png)

*论文图 1。原论文 Figure 1：“An illustrative case from MOSEI showing modality misalignment.”。*

上图左侧显示穿蓝色上衣的人物面带明显微笑，右侧文字逐项标注文本为语义中性、音频为强负面沮丧语气、视频为强正面微笑，底部给出真值为强负面 -1.33。这个布局说明冲突不是抽象假设，而是同一 utterance 内 3 路各说各话。教学上可以把该样本记为例子：视觉单看像积极，音频单听像消极，文本单读像中性。对初学者而言，关键动作是先按图例确认每个标注对应的模态与情绪方向，再理解真值为何跟随音频。这个例子后文会被同一个方法重新处理，用来展示感知指标如何压制视觉、放大音频。

### CICA 的两阶段流水线如何把感知接到决策？

CICA 的全景可以沿一个样本走一遍。第一阶段是输入与嵌入：视觉、音频经过线性投影加位置编码得到嵌入序列，文本经过词、位置、分段嵌入得到嵌入序列。第二阶段是单模态编码与置信度解耦：每个嵌入序列进入各自的 Transformer 编码器堆叠，末层隐状态给出任务相关表示，中间层状态经适配器给出领域相关特征，两者拼接成 Hm。同时 3 个轻量头分别给出单模态情感预测、置信度 sm、不确定度 um。

第三阶段是置信度引导融合：特征流与控制信号流分开进入融合块堆叠，融合块先做结构感知注意力，再用可靠性调制。第四阶段是预测与系统正则：融合状态经分类器得到总体预测，同时用对比保持损失约束融合状态与各单模态源的对应关系。

这个设计的安排理由是解耦与冻结。预训练阶段训练编码器做感知，融合阶段冻结编码器只训练融合器做决策，避免融合的梯度反过来污染自我评估的校准。如果 2 阶段联合训练，编码器可能为了迎合融合而虚报置信度。冻结保证了控制信号的独立性。关于优化器、轮数、学习率等完整训练配置，原文指向附录，正文只强调互信息对比保持损失的权重经验证取为 0.1，细节缺项在复现节如实指出。

**感知 × 决策：** 感知指 CAP 阶段每个单模态编码器对自身输出可靠性的自我评估，给出置信度 sm 和不确定度 um；决策指 CIF 阶段如何把多模态特征合成为最终情感预测。两者搭配的理由是传统融合只算相关性而不问质量，感知提供控制信号，决策据此加权，组合意义是让不可靠模态在融合时被连续压低而不需要硬删除。

下图展示了 4 个阶段的模块连接，重点看特征流与控制信号流如何分叉又汇合。

> **看图路径：** 1. 沿 Stage1 到 Stage2 再到 Stage3、Stage4 的箭头走一遍主数据流；2. 区分右上输出的特征流与右下输出的控制信号流汇合位置；3. 确认 Stage2 冻结后才进入 Stage3，Stage4 同时计算主任务与 MCP 损失

[![原论文 Figure 2：The architecture of our CICA framework, which explicitly couples perception and decision.](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/c16ff8dcc4bb/figure-2.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/c16ff8dcc4bb/figure-2.png)

*论文图 2。原论文 Figure 2：“The architecture of our CICA framework, which explicitly couples perception and decision.”。*

上图上半部分从左到右是输入嵌入到单模态编码，右上角可见拼接后的表示分出 3 路头，分别对应任务预测、置信度损失与不确定度损失。下半部分右侧是融合块，右上角特征输入流与右下角控制信号流同时进入置信度引导注意力，左侧是主任务损失与对比保持损失共同构成总损失。观察时先沿输入到输出的主箭头走一遍，再单独追踪 sm、um 从第二阶段底部向下进入第三阶段的控制线，就能理解耦合不是把分数拼进特征，而是作为调制因子作用于注意力输出。

### 编码器如何同时输出表示、置信度与不确定度？

置信度感知预训练的输入是单个模态的嵌入序列，输出是三样东西：表示 Hm、置信度 sm、不确定度 um。主干是 Transformer，论文引入混合域适配器把末层的任务相关信息与中间层的领域相关特征分开再拼接。这样做的直觉是情感判断既需要高层语义，也需要保留中间层的域特征，避免单层表示过窄。教学例子：同样一句中性文本，在访谈域与综艺域的语气先验不同，拼接有助于保留这种差异，但这只是帮助理解的例子，不代表论文实测了该差异的大小。

3 个头的监督来源不同。任务头用均方误差拟合单模态标签，目标是让表示本身对情感敏感。置信度头输出 0 到 1 的标量，用自适应校准损失训练，特点是有可学习的边界与分段惩罚权重，避免把置信度当成二分类或用固定回归目标硬推到 1。不确定度头预测任务头绝对误差的有界目标，用均方误差训练，且目标做了截断梯度，意味着不确定度学习不反向影响任务预测，只单向模仿误差大小。这种梯度路径设计很重要：任务头先尽力预测，不确定度头再学习它错了多少。

**置信度感知预训练 × 置信度引导融合：** 置信度感知预训练负责训练单模态编码器同时输出表示 Hm 和可靠性指标，分工是学会看懂本模态并说出有多大把握；置信度引导融合负责在融合时读取这些指标并调节注意力输出，分工是按把握分配话语权。搭配原因是预训练不参与融合就无法落地，融合没有预训练信号就只能平均用力，组合后形成从自我评估到加权合成的闭环。

预训练结束后，编码器被冻结，提供特征与可靠性信号给融合阶段。冻结的含义是融合训练时不再更新编码器参数，控制信号保持稳定。原文未报告编码器在融合阶段是否还有滑动平均或部分解冻，因此复现时应按冻结处理，不要自行加入微调。置信度与不确定度的数值含义也要区分：sm 高表示自认为可靠，um 低表示预期误差小，两者共同决定后文的门控，而不是互相替代。

### 融合时先看结构再看可靠性，具体算什么？

置信度引导融合的输入是查询与各模态的键值对。查询来自上一层融合状态，各模态提供键 Km 与值 Vm。标准做法只算查询与键的相关性，但论文认为这忽略了键本身的质量。为此引入内在结构调制器，对键的局部依赖与 token 级显著性建模，得到结构感知的表示。消融显示去掉该项会有持续小幅下降，支持它对注意力稳定有补充作用，但原文把完整前向放在附录算法中，正文未给出全部公式细节，因此这里只讲计算目标而不猜具体矩阵形状。

外在可靠性调制是耦合的关键。冻结编码器给出的 sm 与 um 经投影函数合成为统一可靠性 rm，设计思想是只在高置信且低不确定时才鼓励高贡献。然后用 rm 对结构感知表示做逐元素连续调制，并广播到序列与特征维度。结果是不可靠模态的贡献接近于零，可靠模态被自然强调。论文报告的案例中，视觉置信度低、不确定度高，音频相反，融合权重随之向音频倾斜。这是一种软门控，不是硬删除，保留了梯度与信息的连续性。

**置信度分数 × 不确定度估计：** 置信度分数 sm 是经自适应校准损失学到的样本级可靠度，反映编码器自认为的可靠程度；不确定度估计 um 是预测单模态任务头绝对误差的有界值，反映预期误差大小。两者搭配是因为只用置信度容易过度自信，只用误差又缺少校准边界，组合后通过门控只在既自信又低误差时才放大该模态。

需要提醒的是，结构感知在先、可靠性调制在后，两者分工不同。结构感知回答特征内部是否显著且上下文一致，可靠性调制回答该模态此刻是否值得信任。顺序不能颠倒：如果先调制再算结构，不可靠模态的噪声会污染结构估计。原文的消融也分别去掉了耦合与结构项，结果都下降，支持两步都有独立价值。关于门控函数的具体参数形式，原文给出鼓励高贡献的设计意图，但未在正文披露全部可学习参数的初始化与约束，复现时应以附录为准，缺项如实记录。

**置信度引导注意力 × 内在结构调制器：** 置信度引导注意力是先算标准相关性再用外部可靠性 rm 做连续调制的两步结构；内在结构调制器 Smod 负责在注意力内部刻画键本身的质量，包括 token 级显著性 rho_m 和局部上下文依赖 N_m。搭配原因是相关性只回答查询与键配不配，调制器回答键本身值不值得看，组合后先感知特征内在结构再施加外在可靠性控制。

### 两阶段用什么目标训练，梯度流向哪里？

第一阶段的联合目标由三项组成：单模态任务损失、自适应校准损失、不确定度损失。任务损失让表示对情感敏感，校准损失让置信度学会自我评估，不确定度损失让模型学会预估自己的误差。关键是监督来源与梯度隔离：不确定度目标来自任务预测的绝对误差并截断梯度，因此不确定度头只模仿误差而不改变任务头。置信度参数与编码器联合训练，但其边界参数通过特定函数约束保持有序与正值，避免学出无效的分区。这种设计让编码器成为可校准的感知器，而不是单纯的特征提取器。

第二阶段冻结编码器，只训练融合模块。主目标是对总体情感预测用平均绝对误差，适合回归型情感强度。辅助目标是互信息对比保持损失，要求最终融合状态与每个单模态池化表示保持对应，遵循噪声对比估计的思想。总体目标是主任务损失加权重为 0.1 的对比保持损失。这个 0.1 是经验证性能选的，原文称敏感性分析在附录，正文未展开不同取值的影响，因此只能报告该取值为论文实际使用的可运行配置，不能推断其他取值必然更好或更差。

**互信息对比保持 × 模态坍缩：** 模态坍缩指融合时一个强势模态长期主导，导致融合表示丢掉其他模态的独特信息；互信息对比保持 MCP 是用噪声对比估计约束最终融合状态 zfinal 与每个单模态源 hm 保持对应关系。搭配原因是只靠任务损失会纵容偷懒的融合，MCP 作为正则迫使即使压制欺骗性模态也要保留其可辨别信息，组合意义是在鲁棒与信息完整之间取得平衡。

训练与构造的职责划分要讲清。第一阶段构造了可靠性信号，第二阶段使用这些信号，两个阶段的梯度不互通。推理时流程是前向 1 次：编码器给出特征与可靠性，融合器给出最终预测，不需要迭代搜索或外部检索。原文未报告训练硬件、耗时、推理延迟与参数量，因此不能承诺效率改善，相关成本在局限节明确列为未测量项。

### 在哪些数据与划分上测，用什么指标比？

实验用 4 个广泛使用的多模态情感基准，覆盖中文与英文。中文的 CH-SIMS 与 CH-SIMSv2 中，后者是前者的升级，样本更多，标签更细，模态对齐协议更严格，因此被视为更能考验抗错位能力。英文的 MOSI 规模较小但竞争激烈，MOSEI 规模大。论文遵循官方的训练、验证、测试划分，评估沿用已有实践，同时报告回归指标与分类指标。回归看平均绝对误差与相关系数，分类看不同粒度的准确率与 F1。

方向是误差越低越好，其余越高越好。比较时必须核对数据集、基线、阶段、指标与聚合口径，数值相同不代表指标相同。

下表给出 4 个数据集的划分规模，阅读时先确认训练、验证、测试的样本数，再理解为什么 MOSEI 的大样本与 CH-SIMSv2 的细粒度标签对鲁棒性结论有不同支撑。

| CH-SIMS | 1368 | 456 | 457 | 2281 |
| --- | --- | --- | --- | --- |
| CH-SIMSv2 | 2722 | 647 | 1034 | 4403 |
| MOSI | 1284 | 229 | 686 | 2199 |
| MOSEI | 16326 | 1871 | 4659 | 22856 |

上表显示 CH-SIMS 共 2281 条，CH-SIMSv2 共 4403 条，MOSI 共 2199 条，MOSEI 共 22856 条。规模差异意味着主结果在 MOSI 上的提升需要结合小样本方差来理解，而在 MOSEI 上的稳定提升更能支持泛化。基线分为两组：经典与 Transformer 融合模型，以及引导式或非对称融合模型，包括文本偏置校正与动态引导策略。论文称实现基于 PyTorch 并分 2 阶段训练，但优化器、学习率、轮数等细节指向附录，正文只保留关键的对比保持权重。这种写法要求复现者以附录为准，不能从模型名推定实现。

### 主结果测了什么，与谁比，关键数字支持什么？

主结果要回答的是在完整模态条件下，方法是否在 4 个基准上一致优于已有的可运行基线。比较条件是相同数据集划分与相同指标体系，指标方向按误差降、相关系数与准确率升来判断。论文报告 CICA 在 MOSI 与 MOSEI 上取得最低误差与最高相关，并在 CH-SIMS 与 CH-SIMSv2 上取得更大幅度的相关与分类提升。重提这些数字时，新增的对照是跨语言与跨规模的一致性：在英文小规模、英文大规模、中文细粒度条件下都出现同向改进，这支持感知与决策耦合不是只在某一数据分布上偶然生效。

下表整理论文正文连续句子中实际出现的关键数字，只收录有逐字证据的 CICA 结果与相对最强基线的增量，避免把表格中无连续句子覆盖的基线数值硬写进来。完整基线矩阵见原文主结果表，解读时应回到原文核对。

| 条件 | 指标 | 本方法 | 相对最强基线的改进 |
| --- | --- | --- | --- |
| MOSI | MAE | 0.630 | 降低 0.071 |
| MOSI | Corr | 0.855 | 提升 0.060 |
| MOSEI | MAE | 0.489 | 降低 0.029 |
| MOSEI | Corr | 0.856 | 提升 0.077 |
| CH-SIMS | Corr 增量 | 0.754 | 提升 0.127 |
| CH-SIMSv2 | Acc-3 增量 | 80.56 | 提升 4.35 |

上表显示 CICA 的绝对值与增量都有原文连续句子支撑，其中 MOSI 的相关系数提升与 CH-SIMS 的相关提升幅度较大，支持方法在冲突较多的数据上收益更明显。但也要看到未胜出项的边界：原文主结果表的完整基线对比未在正文句子中逐一展开，解读不能把个别指标的领先推广为所有划分与所有阈值都领先。百分点与相对百分比含义不同，这里报告的是绝对差值，不是相对百分比，阅读时不要混淆。
下面用冲突案例展示数字背后的机制，而不只是平均分。

> **看图路径：** 1. 对比面板 a 中三根单模态预测柱的方向与高度；2. 检查面板 b 中视觉低置信高不确定与音频高置信低不确定两组柱；3. 对照面板 c 中真值、平均融合与 CICA 三根最终得分柱的正负

[![原论文 Figure 4：Qualitative case: resolving cross-modal conflict.](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/c16ff8dcc4bb/figure-4.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/c16ff8dcc4bb/figure-4.png)

*论文图 4。原论文 Figure 4：“Qualitative case: resolving cross-modal conflict.”。*

上图面板 a 显示文本预测接近中性 +0.087，视觉预测为正向 +1.442，音频预测为负向 -0.841，3 路明显打架。面板 b 显示文本置信度 0.55、不确定度 0.48，视觉置信度仅 0.12、不确定度高达 0.89，音频置信度 0.91、不确定度仅 0.15，融合权重随之变为文本 0.10、视觉 0.23、音频 1.76，视觉被压制、音频被放大。面板 c 显示真值为 -1.33，平均融合误判为 +0.229，而 CICA 给出 -1.245，接近真值。这个闭环说明主结果的平均提升至少部分来自对冲突样本的正确取舍，而不是单纯拟合多数一致样本。

### 噪声与缺失条件下稳定吗，代价在哪里？

鲁棒性分析测两件事：往非文本模态注入高斯噪声，以及在推理时遮蔽模态。噪声水平从 0 到 0.8，分别加到音频、视频或两者。缺失测试比较全模态与去掉某一模态后的性能。测量的指标仍是相关系数与误差，方向不变。这个设计的教学价值在于区分平均性能与条件性能：完整模态好不代表噪声下好，鲁棒方法要求在干扰下衰减更平滑，并且能定位到不稳定的流。

下图显示相关系数随噪声水平的变化，阅读时先确认纵轴是原始相关系数而非改变量，再看曲线向下才表示变差。左侧 MOSI 上 3 条线在高噪声下都明显下滑，右侧 MOSEI 上仅加音频噪声的线下降更缓。原文指出 MOSEI 在轻微音频噪声下相关仅从 0.856 降到 0.843，支持编码器能检测到损坏输入并让融合降低其权重。在 MOSI 重度噪声 0.8 时，视频噪声下相关降到接近 0.013，音频噪声下仍保持 0.100 左右，显示模型对不同模态的敏感性不同，而不是对所有噪声一视同仁。像素不能精确辨别的中间数值不硬写，以原文明确报告的趋势为准。

> **看图路径：** 1. 先确认横轴是噪声水平 0.0 到 0.8，纵轴是相关系数 Corr；2. 比较左侧 MOSI 与右侧 MOSEI 在噪声 0.6 以后三条线的分叉；3. 观察 MOSEI 上仅加音频噪声的蓝色线下降明显更平缓

[![原论文 Figure 3：Robustness to modality noise on MOSI and MOSEI.](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/c16ff8dcc4bb/figure-3.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/c16ff8dcc4bb/figure-3.png)

*论文图 3。原论文 Figure 3：“Robustness to modality noise on MOSI and MOSEI. Correlation (Corr) is plotted against Gaussian noise levels (0–0.8) applied to Audio (A), Video (V), or both (A+V).”。*

上图左右分别对应 MOSI 与 MOSEI，横轴为噪声水平，纵轴为相关系数，3 条线分别对应只加音频噪声、只加视频噪声、同时加两者。可见 MOSEI 上蓝色音频噪声线在 0.4 以后仍保持高位，而红色双模态噪声线在 0.8 时跌到负值附近，说明双路同时损坏最致命。MOSI 上 3 条线在 0.8 处都接近零，说明小规模数据上重度双路噪声仍是未解决的边界。这就是具体代价：方法能延缓衰减，但不能在强噪声下维持高精度。

缺失测试呈现 3 个模式。去掉文本导致最大退化，证实文本主导；去掉非文本影响较小，在 MOSEI 上只用文本加音频几乎与全模态持平，支持缺失模态被正确标记并调整融合；纯文本编码器在 MOSI 上甚至略高于全模态，原文解释为数据集高度文本主导，有效文本上限本来就高，加上对比保持正则会带来轻微融合代价。这个 0.002 量级的差距相对跨基准的大幅领先可以忽略，但它提醒我们多模态融合的价值取决于视觉与音频是否真有增量信息，不能把全模态必然最优当成定理。

### 去掉哪一块掉得最多，哪些只是辅助？

消融要回答每个组件的必要性。变体包括去掉感知预训练、去掉融合模块、去掉对比保持、去掉耦合、去掉内在结构项。比较问题是同一数据集、同一指标下完整模型与各变体的绝对差，公平条件是其余部分保持不变。指标方向与主结果一致。论文在 MOSI 与 MOSEI 上报告完整结果，中文数据集的完整消融指向补充材料，正文不展开，因此这里只解读有证据的英文部分。

下表是 MOSI 上的消融，重点看去掉感知与去掉融合两列的大幅下降，以及去掉耦合与去掉结构项的中小幅下降。

| Metric | CICA (Full) | (A) w/o CAP | (B) w/o CIF | (C) w/o MCP | (D) w/o Coupling | (E) w/o Smod |
| --- | --- | --- | --- | --- | --- | --- |
| Dataset: | MOSI |  |  |  |  |  |
| MAE ↓ | 0.630 | 0.712 | 0.689 | 0.635 | 0.658 | 0.641 |
| Corr ↑ | 0.855 | 0.791 | 0.812 | 0.847 | 0.831 | 0.840 |
| Acc-7 ↑ | 49.56 | 46.47 | 47.52 | 49.13 | 48.25 | 48.82 |
| Acc-2 (has-0) ↑ | 88.19 | 85.12 | 86.03 | 87.84 | 87.08 | 87.55 |
| Acc-2 (non-0) ↑ | 90.24 | 86.88 | 87.90 | 89.51 | 88.73 | 89.30 |
| F1 (has-0) ↑ | 88.14 | 84.03 | 85.21 | 87.05 | 86.53 | 87.48 |
| F1 (non-0) ↑ | 90.23 | 85.05 | 86.13 | 87.66 | 87.02 | 89.15 |

上表显示完整模型在 MOSI 上 MAE 为 0.630、相关为 0.855，去掉感知后相关下降 0.064，去掉融合后下降 0.043，去掉耦合后下降 0.024，去掉对比保持后下降 0.008，去掉结构项后下降 0.015。主要收益来自感知与融合及其耦合，支持性能增益主要来自两者连接而非模型容量。代价是 2 阶段缺一不可，单独保留一侧都不够。具体反例是去掉对比保持后下降最小，说明它在干净全模态下作用有限，其价值更多体现在防止坍缩与噪声下的稳定，需要结合鲁棒性测试来理解，不能只看主结果。

下表是 MOSEI 上的消融，趋势同样一致，且非零划分上的 F1 下降更显著。

| Metric | CICA (Full) | (A) w/o CAP | (B) w/o CIF | (C) w/o MCP | (D) w/o Coupling | (E) w/o Smod |
| --- | --- | --- | --- | --- | --- | --- |
| MAE ↓ | 0.489 | 0.524 | 0.511 | 0.496 | 0.504 | 0.499 |
| Corr ↑ | 0.856 | 0.775 | 0.793 | 0.845 | 0.820 | 0.836 |
| Acc-7 ↑ | 55.29 | 52.81 | 53.54 | 54.82 | 54.17 | 54.50 |
| Acc-2 (has-0) ↑ | 84.72 | 82.04 | 82.87 | 84.06 | 83.51 | 83.95 |
| Acc-2 (non-0) ↑ | 90.18 | 87.51 | 88.04 | 89.42 | 88.91 | 89.43 |
| F1 (has-0) ↑ | 85.15 | 82.52 | 83.10 | 84.11 | 83.82 | 84.35 |
| F1 (non-0) ↑ | 90.16 | 83.19 | 83.90 | 84.71 | 84.13 | 88.05 |

上表显示完整模型在 MOSEI 上 MAE 为 0.489、相关为 0.856，去掉感知后相关下降 0.081，去掉融合后下降 0.063，非零 F1 分别下降 6.97 与 6.26 个点。去掉耦合仍带来相关下降 0.036，说明独立模块不足以替代耦合。未胜出项是去掉对比保持与去掉结构项的下降较小，但方向一致，支持它们是互补的鲁棒项而非主驱动。未评测边界是中文数据集的消融只在补充材料，正文未给出，因此不能把英文上的排序直接推广到中文，复现时应补跑中文消融再下结论。

### 还有哪些没测、没交代，不能承诺什么？

首先是证据边界。训练资源、推理开销、输出帧率与实际延迟在正文未报告，因此不能承诺方法更快或更便宜。总体趋势不等于每组每步都成立，重度双模态噪声下相关仍跌到零附近，说明强干扰仍是失效区。文本缺失时的退化最大，意味着方法缓解了冲突但没有消除对文本的依赖，在文本完全错误或缺失的场景下仍需额外验证。

其次是实现缺项。完整训练配置、敏感性分析、结构调制器的详细前向、中文消融的全部数字都指向附录或补充材料，正文只保留关键结论。复现时必须回到附录核对优化器、学习率、轮数、初始化与重置时机，不要从模型名称推定实现。原文表头、图注或算术如有冲突应明确标注冲突，本解读发现主结果表的结构化提取存在空表头问题，因此未用直接选择而改用正文连续句子整理关键数字，这本身就是一种证据冲突的处理，而不是作者的技术错误。

最后是推断克制。缺失证据不是技术错误，相关性不是因果。表示可视化显示的聚类分离支持判别性更好，但不能证明就是置信度门控单独导致的，仍可能是多组件共同作用。未测量误判率、校准误差、延迟与成本时，不承诺这些量得到改善。教学上应把已验证的判断用报告显示表达，把机制解释用支持表达，把未验证的推广用可能或待验证表达。

### 要复现先做什么，需要保留哪些信息条件？

复现的第一步是按官方划分准备 4 个数据集，核对训练、验证、测试样本数与语言，不要自行重新划分。指标实现要与原文一致：回归用平均绝对误差与相关系数，分类按不同粒度的准确率与 F1，并注意 MOSI 与 MOSEI 的二分类有含零与去零两种口径，比较时必须对齐同一口径。基线应选择原文实际可运行的策略，搜索最优或事后最优只能另行标注，不能代替可部署收益。

第二步是 2 阶段流程。先为每个模态独立训练编码器，输出表示、置信度、不确定度，损失包括任务损失、校准损失、不确定度损失，且不确定度目标要截断梯度。训练完成后冻结编码器，再训练融合块，主损失用平均绝对误差，辅助损失用对比保持且权重取 0.1。融合时先算结构感知注意力，再用可靠性做连续调制。关键超参数中只有 0.1 在正文明确，其余以附录为准，缺项如实记录，不要猜测。

第三步是验证顺序。先跑全模态主结果，再跑消融的 5 个变体，最后跑噪声与缺失鲁棒性。噪声注入要按原文分别加到音频、视频或两者，水平覆盖 0 到 0.8；缺失测试要覆盖去文本、去视觉、去音频与单模态。关于开源状态，本次未发现完成验证的资源，因此只能说链接当前不可用或未能确认可达，不能声称代码已公开。区分代码开源、权重下载与系统可运行：即使有代码，没有权重与环境仍不等于可运行，复现报告应分别说明。

### 何时值得尝试，一句话如何记住它？

当你的任务中视觉与音频经常与文本不一致，或者传感器会丢帧、加噪，且你已经有不错的单模态编码器时，值得尝试这种先评估再融合的思路。它的适用条件是每个模态单独训练时还有信号可学，极端情况下全模态都损坏则无从取舍。复现时先验证冲突样本上的取舍是否如案例所示，再看平均指标，避免只盯着平均分而忽略条件性能。

记住它的方法是：编码器不只给特征，还要给把握；融合不只算相关，还要看把握。把握由置信度与不确定度共同决定，结构感知先看特征本身值不值得看，可靠性调制再看此刻信不信得过，对比保持防止强势模态把其他模态的信息挤掉。还需要补的验证是中文消融的完整复跑、校准质量的直接度量、以及推理成本的实测。只有补上这些，才能把平均分的领先转化为可部署的鲁棒收益。

## 📐 原文公式与排版

以下展示论文原页中的数学表达区域，保留原始上下标、分式和符号排版。区域序号仅用于本文导航，不是论文公式编号。

[![原文数学表达区域 1，PDF 第 3 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/9ecbbd6b08f5/figure-1.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/9ecbbd6b08f5/figure-1.png)

区域 1 · [查看论文原页](https://openaccess.thecvf.com/content/CVPR2026/papers/Jiang_CICA_Coupling_Confidence-Aware_Pretraining_with_Confidence-Informed_Attention_for_Robust_Multimodal_CVPR_2026_paper.pdf#page=3)

[![原文数学表达区域 2，PDF 第 3 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/9ecbbd6b08f5/figure-2.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/9ecbbd6b08f5/figure-2.png)

区域 2 · [查看论文原页](https://openaccess.thecvf.com/content/CVPR2026/papers/Jiang_CICA_Coupling_Confidence-Aware_Pretraining_with_Confidence-Informed_Attention_for_Robust_Multimodal_CVPR_2026_paper.pdf#page=3)

[![原文数学表达区域 3，PDF 第 3 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/9ecbbd6b08f5/figure-3.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/9ecbbd6b08f5/figure-3.png)

区域 3 · [查看论文原页](https://openaccess.thecvf.com/content/CVPR2026/papers/Jiang_CICA_Coupling_Confidence-Aware_Pretraining_with_Confidence-Informed_Attention_for_Robust_Multimodal_CVPR_2026_paper.pdf#page=3)

[![原文数学表达区域 4，PDF 第 3 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/9ecbbd6b08f5/figure-4.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/9ecbbd6b08f5/figure-4.png)

区域 4 · [查看论文原页](https://openaccess.thecvf.com/content/CVPR2026/papers/Jiang_CICA_Coupling_Confidence-Aware_Pretraining_with_Confidence-Informed_Attention_for_Robust_Multimodal_CVPR_2026_paper.pdf#page=3)

[![原文数学表达区域 5，PDF 第 3 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/9ecbbd6b08f5/figure-5.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/9ecbbd6b08f5/figure-5.png)

区域 5 · [查看论文原页](https://openaccess.thecvf.com/content/CVPR2026/papers/Jiang_CICA_Coupling_Confidence-Aware_Pretraining_with_Confidence-Informed_Attention_for_Robust_Multimodal_CVPR_2026_paper.pdf#page=3)

[![原文数学表达区域 6，PDF 第 4 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/9ecbbd6b08f5/figure-6.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/9ecbbd6b08f5/figure-6.png)

区域 6 · [查看论文原页](https://openaccess.thecvf.com/content/CVPR2026/papers/Jiang_CICA_Coupling_Confidence-Aware_Pretraining_with_Confidence-Informed_Attention_for_Robust_Multimodal_CVPR_2026_paper.pdf#page=4)

[![原文数学表达区域 7，PDF 第 4 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/9ecbbd6b08f5/figure-7.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/9ecbbd6b08f5/figure-7.png)

区域 7 · [查看论文原页](https://openaccess.thecvf.com/content/CVPR2026/papers/Jiang_CICA_Coupling_Confidence-Aware_Pretraining_with_Confidence-Informed_Attention_for_Robust_Multimodal_CVPR_2026_paper.pdf#page=4)

[![原文数学表达区域 8，PDF 第 5 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/9ecbbd6b08f5/figure-8.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/9ecbbd6b08f5/figure-8.png)

区域 8 · [查看论文原页](https://openaccess.thecvf.com/content/CVPR2026/papers/Jiang_CICA_Coupling_Confidence-Aware_Pretraining_with_Confidence-Informed_Attention_for_Robust_Multimodal_CVPR_2026_paper.pdf#page=5)

另有 19 个候选区域因边界不明确或图片数量、尺寸限制未展开；请[查看完整论文](https://openaccess.thecvf.com/content/CVPR2026/papers/Jiang_CICA_Coupling_Confidence-Aware_Pretraining_with_Confidence-Informed_Attention_for_Robust_Multimodal_CVPR_2026_paper.pdf)中的原始排版。

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。
- 评分规则：type-aware-v1
- 评分模型：muse-spark-1.3-contributor
- 评分请求协议：openai_responses

---

[← 返回 cvpr-2026 论文汇总](/posts/conference-cvpr-2026/)
