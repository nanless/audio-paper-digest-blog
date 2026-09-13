---
title: "UniAVGen: Unified Audio and Video Generation with Asymmetric Cross-Modal Interactions"
date: 2026-09-13
draft: false
description: "针对以人为中心联合生成中唇同步偏差与语义情绪脱节，UniAVGen 采用对称双分支加不对称跨模态交互、面部感知调制与模态感知引导实现单模型多任务生成，论文报告在更少联合样本下取得音色与情绪一致性优势，同时存在主体一致性未胜出与大模型打分客观性不足等边界。"
tags: ["扩散模型", "多任务学习", "音视频", "语音", "音视频生成"]
categories: ["cvpr-2026 论文"]
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_paper_id: "conference:cvpr:2026:conference-paper-id:Zhang_UniAVGen_Unified_Audio_and_Video_Generation_with_Asymmetric_Cross-Modal_Interactions_CVPR_2026_paper"
paper_digest_source_kind: conference
paper_digest_conference_id: "cvpr-2026"
paper_digest_conference_record_url: "https://openaccess.thecvf.com/content/CVPR2026/html/Zhang_UniAVGen_Unified_Audio_and_Video_Generation_with_Asymmetric_Cross-Modal_Interactions_CVPR_2026_paper.html"
paper_digest_conference_pdf_url: "https://openaccess.thecvf.com/content/CVPR2026/papers/Zhang_UniAVGen_Unified_Audio_and_Video_Generation_with_Asymmetric_Cross-Modal_Interactions_CVPR_2026_paper.pdf"
paper_digest_api_reader_contract: "beginner-researcher-v3"
paper_digest_api_reader_article_sha256: "2bef3552881236a99a778d7e7bc9b59e20aa81ac19af32b6438258cf0c7b4663"
paper_digest_api_reader_plan_sha256: "615a9193ec7a6633029f3b058a9f962d2facd7357994f2baaa56c39ed5d9cd8f"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings-v4"
paper_digest_api_reader_source_bindings_sha256: "d72e62b9836c383f814c37a22c3bd7beae9ddda958def49b8be2f61174d26e42"
paper_digest_api_reader_source_table_count: 3
paper_digest_api_reader_source_formula_count: 0
paper_digest_api_reader_structured_artifacts_sha256: "8eaa844aa48238e06335096f4775198810e2bce971aa661d97f5b16939c7e125"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity-v1"
paper_digest_api_reader_author_identity_sha256: "bb5ac0d2f2eb2586af380e08618a71015c81bc0286772d95f44e2550675c8b0f"
paper_digest_api_reader_author_count: 9
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity-v1"
paper_digest_api_reader_resource_identity_sha256: "91b6f3b9446fc2f066d6427f18c2f6bbcd4250161cc3f7ac12b70aacb08478a2"
paper_digest_api_reader_resource_count: 3
paper_digest_api_reader_decision_projection: "api-reader-decision-projection-v2"
paper_digest_scoring_contract: "api-scoring-audit-v2"
paper_digest_taxonomy_contract: "paper-taxonomy-flat-tags-compat-v1"
paper_digest_taxonomy_selection_contract: "paper-taxonomy-selection-v1"
paper_digest_taxonomy_registry_version: "paper-taxonomy-v1"
paper_digest_taxonomy_registry_sha256: "15c82a567ce5a55dc1175684ed08b64c158558639d9c8fb822c9587ec32a8778"
paper_digest_taxonomy_concepts: [{"facet":"method","id":"method.diffusion","label":"扩散模型"},{"facet":"method","id":"method.multitask","label":"多任务学习"},{"facet":"signal","id":"signal.audiovisual","label":"音视频"},{"facet":"signal","id":"signal.speech","label":"语音"},{"facet":"task","id":"task.av-generation","label":"音视频生成"}]
paper_digest_primary_task: "音视频生成"
paper_digest_primary_method: "扩散模型"
paper_digest_score: 7.2
paper_digest_rank_bucket: "前50%"
paper_digest_document_type: "方法研究"
paper_digest_conference_structure: replayable-pdf-layout-v1
---

# 📄 人声与人脸为何总对不上：用不对称时间窗口重建音画同步

> 英文题目：*UniAVGen: Unified Audio and Video Generation with Asymmetric Cross-Modal Interactions*

> 会议身份：`conference:cvpr:2026:conference-paper-id:Zhang_UniAVGen_Unified_Audio_and_Video_Generation_with_Asymmetric_Cross-Modal_Interactions_CVPR_2026_paper`


> ✅ 来源为官方会议 PDF；表格与 Figure 按原文证据绑定。PDF 公式以原页区域图片展示，未冒称作者原始 TeX。

> 会议来源：[官方记录](https://openaccess.thecvf.com/content/CVPR2026/html/Zhang_UniAVGen_Unified_Audio_and_Video_Generation_with_Asymmetric_Cross-Modal_Interactions_CVPR_2026_paper.html) · [官方 PDF](https://openaccess.thecvf.com/content/CVPR2026/papers/Zhang_UniAVGen_Unified_Audio_and_Video_Generation_with_Asymmetric_Cross-Modal_Interactions_CVPR_2026_paper.pdf)

标签：#扩散模型 #多任务学习 #音视频 #语音 #音视频生成

评分：**7.2/10** | 创新 1.5/2 | 技术严谨 1.2/1.5 | 实验充分 1.0/1.5 | 清晰度 0.8/1 | 影响力 1.2/1.5 | 开源 0.2/1.5 | 可复现 0.3/0.5 | 工程/实践 1.0/1.5

排名：前50% | 文档类型：方法研究

## 👥 作者与机构

- Guozhen Zhang：机构信息未能从会议 PDF 纯文本可靠映射
- Zixiang Zhou：机构信息未能从会议 PDF 纯文本可靠映射
- Teng Hu：机构信息未能从会议 PDF 纯文本可靠映射
- Ziqiao Peng：机构信息未能从会议 PDF 纯文本可靠映射
- Youliang Zhang：机构信息未能从会议 PDF 纯文本可靠映射
- Yi Chen：机构信息未能从会议 PDF 纯文本可靠映射
- Yuan Zhou：机构信息未能从会议 PDF 纯文本可靠映射
- Qinglin Lu：机构信息未能从会议 PDF 纯文本可靠映射
- Limin Wang：机构信息未能从会议 PDF 纯文本可靠映射

## 📌 核心摘要

面向以参考图像与文本提示同步生成带语音视频的人为中心联合任务，模型需同时保证唇音同步与语义一致，难点在于跨模态时序错位、表情与情感漂移以及背景无关相关干扰。UniAVGen先以视频与音频双分支扩散变换器构建对称表征以奠定跨层特征对应基础，其输出进入非对称跨模态交互完成帧级双向查询。该交互输出再经人脸感知调制聚焦面部显著区并随训练逐步放宽以保护背景，调制后的联合表征进入推理侧模态感知无分类器引导以放大跨模态条件信号。与全局交互或对称时序交互不同，非对称设计让音频到视频感知邻帧动态、视频到音频经插值平滑捕获邻段音频线索，更契合协同发音与表情连续性并改善域外泛化。在自建100例混合真实与AIGC测试集下，UniAVGen的WER为0.151，低于Ovi的WER 0.216。该结论适用边界受限于英语人类说话短片段与上述百例评测，动漫泛化与多人长时强噪声场景尚未验证。原文未披露训练、推理或部署成本。

## 🔗 开源与复现资源

- 演示资源：<https://mcg-nju.github.io/UniAVGen/> — 链接可访问（HTTP 200）
- 第三方资源：<https://wan.video/> — 链接可访问（HTTP 200）
- 模型相关资源：<https://huggingface.co/papers/2511> — 暂时无法访问
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 输入是什么，要同时产出什么？

这篇论文研究以人为中心的音频与视频联合生成。输入包括一张参考说话人图像、一句描述动作或表情的视频提示、一段要说出的语音文本。还可以可选地给出参考音频以指定音色，以及给定的条件音频与条件视频用于续写或条件生成。

目标是 1 次同时生成相互对齐的人声与人物视频，而不是先做无声视频再配音，也不是先合成语音再驱动画面。必须保留的信息包括参考图像决定的身份外观、语音文本决定的语言内容、视频提示决定的表情动作，以及参考音频决定的音色。

输出是同一段内容的声波与画面序列，要求嘴型、音色、情绪在时间上对应。对于刚进入语音与音频领域的研究生，可以把任务理解为文本转语音加上人物视频生成的叠加。但叠加方式不是串行拼接，而是在去噪过程中让两个分支互相看见对方。

论文把人类语音作为重点，因为此前多数联合生成只做环境声，缺少自然人声，实用价值有限。学习时先记住这个输入输出契约，后续所有模块都是为维持该契约而设置。后续的对齐器、掩码与引导都不改变契约，只改变信息交换的位置与强度。

### 三条路线为何都留下对齐缺口？

论文把已有工作归为 3 类。第一类是音频驱动视频合成，通常先用文本转语音模型合成波形，再用独立视频模型以音频为条件生成画面。这类方法关注唇同步，但在音频生成时看不到表情与动作线索。

第二类是视频到音频合成，为无声视频生成对齐音频。但已有方法多集中于环境音配音，缺少自然人声合成能力。同样存在视频先在听觉真空中生成的解耦问题，视频生成时无法预知未来音频的语义。

第 3 类是联合音视频生成，在统一框架内同时合成两者。论文指出，已有开源联合工作或面向通用场景而不优化人声，或采用拼接预训练模型但结构不对称导致对齐受限。或采用对称双塔但缺少模态特异的交互设计与人物特异调制，在域外泛化上受限。

理解这 3 条路线后，才能明白本文为何既要保留双分支的表示对等，又要引入不对称的交互细节。教学例子是把 2 阶段管线想象成两个人分头写剧本再对台词，联合生成则是 2 人同桌边写边对。本文的工作是规定同桌时谁先听谁、听多宽的时间窗口。

### 联合生成要解决的同步问题是什么？

论文把核心矛盾定义为缺乏有效跨模态建模导致的唇同步受损与语义一致性不足。具体到以人为中心的场景，同步包含 3 个层次。时间层次要求音素与嘴部开合逐帧对应，不能出现声音已换字而嘴型停留。

身份层次要求音色在整段内稳定，且与参考图像的人物身份不冲突。语义情绪层次要求语音的情绪强度与面部表情、身体动作幅度一致，例如激昂语音应伴随更大幅度的表情与手势。论文用一个模型兼容 4 个方向的任务来检验这种同步是否真正建立。

下图把 4 个任务放在同一中心模型周围，用波形与帧序列展示输入输出关系，适合先建立多任务统一的直观印象，再进入结构细节。该导读覆盖了 4 个象限的标题、输入图标与输出箭头，是理解后续统一设计的前提。

> **看图路径：** 1. 先看中心方框名称与向四个象限伸出的任务标题；2. 再看每个分支上方或下方波形与人像帧的对应位置；3. 比较左上联合生成与右上带参考音频生成的输入图标差异

[![原论文 Figure 1：Multi-task compatibility of UniAVGen.](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/8e960284ed8c/figure-1.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/8e960284ed8c/figure-1.png)

*论文图 1。原论文 Figure 1：“Multi-task compatibility of UniAVGen.”。*

该图显示左上为文本到音视频联合生成，右上增加参考音频图标以控制音色，左下以视频帧为输入向下生成波形，右下以波形为输入向下生成视频帧。4 个分支共用中央同一模型，说明不需要为每个任务单独设计模型。结合正文可知，参考音频的隐变量会跳过跨模态交互以保持音色，条件音视频则以不同方式参与交互以保持时序连续。这种设计把问题从单任务拟合转为跨任务一致性，后续实验用域内真人与域外动漫图像检验泛化。

### 对称双分支如何走完一个样本？

方法全景是一个对称的双分支联合合成框架。视频分支把视频按每秒 16 帧处理，用预训练变分自编码器编码为隐表示。并把参考图像与条件视频同样编码后与噪声视频隐变量拼接作为输入，视频标题经文本编码器编码后通过交叉注意力注入扩散变换器。

音频分支把音频按 24000 赫兹采样转为梅尔频谱作为隐表示，同样把参考音频与条件音频的隐变量与噪声音频拼接。语音文本经卷积块提取特征后通过交叉注意力注入，两条分支结构相同，仅通道数不同。论文认为这种结构对等有助于在各层建立特征对应，为跨模态交互提供基础。

训练采用流匹配范式，模型预测向量场，音频与视频各有重建目标，联合阶段再加上掩码损失。沿一个样本走一遍，底部输入进入各自扩散层得到隐藏特征，中间交互模块交换信息，顶部经音频头与视频头输出并计算流匹配损失。

下图自下而上展示了从参考与条件输入到双分支去噪再到损失的完整路径，重点是中间不对称交互与掩码预测的位置。读懂该图就读懂了信息流向，也是后续理解查询方向与调制位置的基础。

> **看图路径：** 1. 沿底部参考与条件输入向上追踪到左右双分支；2. 观察中间视频到音频与音频到视频两条通路；3. 找到动态掩码预测模块向两侧发出的调制连线

[![原论文 Figure 2：Architecture of UniAVGen: A dual-branch joint synthesis framework with asymmetric cross-modal…](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/8e960284ed8c/figure-2.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/8e960284ed8c/figure-2.png)

*论文图 2。原论文 Figure 2：“Architecture of UniAVGen: A dual-branch joint synthesis framework with asymmetric cross-modal interaction, augmented by face-aware modulation.”。*

从像素可见，底部标注了参考音频、条件音频、噪声音频、噪声视频、条件视频与参考图像，向上分别进入左右两个扩散层。中间绿色块为双向注意力，白色小块为对齐器，蓝色小块为动态掩码预测，顶部为音频头、视频头与流匹配损失。该图支持后续理解，交互发生在每层隐藏特征之间，而非仅在最终输出处混合。

**双分支联合合成 × 不对称跨模态交互：** 双分支联合合成的分工是让视频分支与音频分支各自独立去噪，保持各自模态的生成能力与表示对等；不对称跨模态交互的分工是在层间以不同时间粒度互相查询，搭配理由是发音依赖前后音素而表情依赖连续运动，组合后形成既能并行生成又能逐帧对齐的联合空间。

需要强调的是，对称只是起点，真正的对齐能力来自后续不对称交互与面部调制。对称保证两者能对话，不对称决定对话内容如何截取，这也是本文与对称全局交互方法的根本区别。

### 不对称交互在算什么时间窗口？

跨模态交互的核心是双向但时间对齐的交叉注意力，包含两个模态特异的对齐器。音频到视频对齐器先把视频与音频隐藏特征重排为按视频帧组织的形式。对第 i 个视频帧构造音频上下文窗口，把前后各 w 帧的音频块拼接，边界用首尾帧复制填充。

再让该视频帧查询对应音频窗口，得到调制后的视频特征。视频到音频对齐器反向操作，每个音频令牌对应视频帧序号取整。对该音频位置计算相邻 2 帧视频隐变量的加权平均作为插值视觉上下文，最后一块音频直接使用最后 1 帧。

再让音频查询该插值上下文，两者输出经零初始化的输出矩阵加回原特征。论文称零初始化可避免训练初期破坏各模态自身生成能力，这是从单模态预训练过渡到联合训练的关键保护。下图把全局交互、对称时间对齐与本文不对称时间对齐并排，用连线密度与标注说明收敛速度与上下文利用的权衡。

> **看图路径：** 1. 对比左面板全局交互中每个视频块连接全部音频块的密度；2. 观察中面板对称时间对齐中一一对应的区间划分；3. 查看右面板左侧重叠标注与右侧插值标注的差异

[![原论文 Figure 3：Comparison of cross-modal interaction mechanisms: (a) Global Interaction is simple but poses…](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/8e960284ed8c/figure-3.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/8e960284ed8c/figure-3.png)

*论文图 3。原论文 Figure 3：“Comparison of cross-modal interaction mechanisms: (a) Global Interaction is simple but poses challenges for convergence; (b) Symmetric Time-Aligned Interaction converges quickly…”。*

从像素可见，左面板标注为非对齐全局交互，每个视频块连接全部音频块。中面板标注为有限上下文的对称时间对齐，每个视频块只连对应区间。右面板标注为对齐且信息丰富的上下文，左侧音频到视频出现重叠标注，右侧视频到音频出现插值标注。论文的解释是全局交互简单但收敛难，对称对齐收敛快但上下文窄，不对称设计在两者间取得平衡。

**音频到视频对齐器 × 视频到音频对齐器：** 音频到视频对齐器的分工是把细粒度音频语义注入视频帧，用邻帧音频窗口查询当前视频帧以稳定口型；视频到音频对齐器的分工是把视觉动态带回音频，用相邻 2 帧视频插值构造平滑上下文供音频查询，搭配理由是前者需要前后音素后者需要连续运动，组合后实现双向时间对齐而非对称复制。

复述时应先说清每个对齐器的查询者、被查询上下文与时间粒度，再说掩码与引导在训练与推理的不同作用时机。查询者决定了梯度回传的主路径，被查询上下文决定了时间感受野，这是理解消融中两侧分别提升不同指标的前提。

### 面部约束与推理引导在何时起作用？

面部感知调制进一步约束交互区域。每个交互层在视频特征上加一个轻量掩码预测头，经层归一化、仿射变换、线性投影与激活得到软掩码。并用人脸掩码真值监督，损失权重随训练衰减到零。

音频到视频侧用掩码做选择性更新，只让显著区域接受音频调制。视频到音频侧先用掩码加权视频特征再计算插值上下文，强化显著区域向音频的信息传递。可视化显示固定权重时掩码紧贴人脸，衰减权重时仍抓住人脸但身体区域权重上升。

这体现先约束后放开的意图，早期避免背景伪相关，后期允许身体动作参与情绪表达。推理阶段的模态感知无分类器引导把去掉跨模态条件的单模态估计作为共同基线。再以各自系数放大带跨模态交互的增量，分别得到视频与音频的引导结果。

论文报告该策略增强了音频情绪强度与视频动作动态，但该部分以样例图为主，数值增益未在正文表格中量化。

**面部感知调制 × 动态掩码预测：** 动态掩码预测的分工是从视频特征逐层预测人脸软掩码并接受人脸真值监督，面部感知调制的分工是用该掩码约束交互位置，搭配理由是早期全图交互易引入背景伪相关，组合后让交互先聚焦人脸再随权重衰减逐步放开。

**模态感知无分类器引导 × 跨模态交互：** 跨模态交互的分工是在去噪中提供对方模态的条件特征，无分类器引导的分工是在推理时放大条件信号，模态感知无分类器引导的搭配理由是把去掉跨模态条件的单模态估计作为共同基线，再分别放大视频与音频分支的跨模态增量，组合后在推理阶段显式增强情绪与动作关联。

需要区分训练与推理的不同作用时机，掩码只在训练改变交互位置与损失，引导只在推理改变条件放大的强度。两者都不改变双分支的基本结构，这是复现时容易混淆的实现边界。

### 三阶段训练的资源与目标如何分配？

训练分为 3 个阶段。第一阶段只训练音频分支，优化音频目标，数据使用多语音频数据集的英文子集。第二阶段做端到端联合训练，同时优化视频目标、音频目标与掩码损失，掩码权重从 0.1 线性衰减到零。

第 3 阶段在第二阶段基础上做多任务学习，训练配置与第二阶段一致。5 个任务按比例混合，推理细节放在补充材料，正文未给出采样步数与引导系数的具体数值。这是复现时需要补查的缺项，不能从模型名称推定实现。

下表比较的问题是 3 阶段的批量、学习率与步数是否按原文记录，公平条件是同一模型按阶段递进，指标方向是批量、学习率、步数均按原文记录，不做换算。该表用于核对复现所需的计算资源与训练顺序。

| 阶段 | 批量大小 | 学习率 | 训练步数 | 优化目标 |
| --- | --- | --- | --- | --- |
| 第一阶段单音频分支 | 256 | 2 × 10−5 | 160k | 音频目标 |
| 第二阶段端到端联合 | 32 | 5e−6 | 30k | 联合损失加掩码损失 |
| 第 3 阶段多任务学习 | 32 | 5e−6 | 10k | 多任务混合 |

该表显示第一阶段用大批量与较高学习率训练音频基础，第二三阶段用小批量与低学习率做联合与多任务微调。代价是联合阶段依赖内部真人数据，公开复现时数据不可得。未验证的边界是内部数据的构成与清洗规则未在正文详述，批量差异带来的梯度噪声变化也未单独消融。

**联合生成 × 多任务统一：** 联合生成的分工是仅给参考图与文本就同时产生音频与视频，多任务统一的分工是复用同一对称结构处理带参考音频、音视频续写、视频到音频配音与音频驱动视频等输入组合，搭配理由是条件信息是否参与交互与是否被更新可以按任务切换，组合后单模型覆盖 5 个任务并用多任务训练反哺联合对齐。

该组合机制说明对称结构是多任务复用的基础，不对称交互是跨任务泛化的动力。条件信息是否参与交互与是否被更新按任务切换，这是单模型覆盖 5 个任务的实现要点。

### 五个任务的输入组合与采样比例是什么？

5 个任务的输入组合在正文中明确定义。默认联合生成只给文本与参考图，带参考音频版本增加音色控制且参考音频隐变量跳过交互。音视频续写给定条件音频与条件视频且条件特征参与交互但自身不受交互更新。

视频到音频配音只给条件视频并可用首帧填充参考图，音频驱动视频只给条件音频。这种按任务切换交互参与方式的设计，保持了同一套参数处理不同条件缺失的能力。也是论文称无需任务特定模型设计的依据。

下表比较的问题是多任务混合中各任务占比如何分配，公平条件是同一多任务阶段内按份数采样，指标方向是份数越大采样概率越高。该表用于核对训练时各任务的曝光频率，避免把采样比例误读为数据量比例。

| 任务 | 音频输入 | 视频输入 | 占比份数 | 交互处理 |
| --- | --- | --- | --- | --- |
| 联合生成 | 无 | 无 | 4 | 双向交互 |
| 带参考音频生成 | 参考音频 | 参考图 | 1 | 参考音频跳过交互 |
| 音视频续写 | 条件音频 | 条件视频 | 1 | 条件参与但自身不受更新 |
| 视频到音频配音 | 文本与参考音频 | 条件视频 | 2 | 视频条件驱动音频 |
| 音频驱动视频 | 条件音频 | 文本 | 2 | 音频条件驱动视频 |

该表显示默认联合生成占最大份数以保持主任务，2 个条件生成任务各占 2 份以强化跨模态感知。代价是条件任务可能把模型拉向局部最优，论文后续用先联合后多任务的策略缓解。需要指出，占比为采样比例而非数据量比例，不能直接换算为各任务样本数。

### 用什么数据、基线与指标来测对齐？

评估自建 100 个测试样本，避免从已有视频采样带来的泄露。每个样本包含参考图、视频标题与音频内容，一半为真实拍摄，一半为生成内容或动漫风格。用于检验跨视觉域泛化，这是本文强调泛化的评测基础。

比较对象分两类，2 阶段生成先用语音合成模型生成音频，再用人物视频模型由音频生成视频。联合生成选择同期开源模型，包括面向通用音视频而不优化人声的模型、拼接双预训练模型的模型、采用对称双塔与对称全局交互的模型。

音频质量用美学评估的制作质量与内容有用性，以及大模型转写的词错率，方向为前两者越高越好、词错率越低越好。视频质量用视频评估基准的主体一致性、动态程度与成像质量，方向均为越高越好。

音视频一致性包含唇同步、音色一致性与情绪一致性，唇同步用同步网络的置信分数。音色与情绪因无开源量化方法而用多模态大语言模型打分，范围在 0 到 1 之间取 3 次平均。按原文交代，唇同步分数的量级与其他 0 到 1 指标不同，数值相同不代表同一含义。硬件预算、统计显著性与人工评价的细节在正文未报告，这是后续验证需要补充的缺项。

### 主结果在什么条件下成立，代价是什么？

主结果的比较问题是在相同自建测试集上，联合模型能否在更少训练样本下同时保证音频质量、视频动态与跨模态一致性。论文报告在远少于对照的训练样本下，本方法在音视频同步、音色一致性与情绪一致性上具有总体优势。摘要明确写出样本量对比，这是理解高效主张的前提。

下图左右分别展示域内真人与域外动漫的生成帧与波形，适合观察泛化差异，重点比较三行方法的动作幅度与口型变化。该导读覆盖了行列布局、观察顺序与波形对照，是把像素与泛化判断连接起来的桥梁。

> **看图路径：** 1. 先按行确认三组方法与按列确认真人与动漫示例的位置；2. 对比左列真人示例中三者动作幅度与口型变化差异；3. 对比右列动漫示例中口型静止与有口型动作的差异

[![原论文 Figure 4：Visual comparisons of UniAVGen against concurrent methods Ovi and UniVerse-1.](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/8e960284ed8c/figure-4.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/8e960284ed8c/figure-4.png)

*论文图 4。原论文 Figure 4：“Visual comparisons of UniAVGen against concurrent methods Ovi and UniVerse-1.”。*

从像素可见，左侧真人示例中第一行方法 4 帧姿态几乎静止，第二三行均有动作与表情变化。右侧动漫示例中第一行保持静止且波形粗大，第二行口型与动作变化小，第三行出现侧头、张嘴与手势变化。论文据此称本方法在域外仍能生成与输入动漫形象匹配的连贯音视频，而对照或静止或缺对齐。该视觉比较支持泛化判断，但属于样例展示，不能推广为全测试集每例都成立。

定量方面，论文称音频质量显著优于其他联合方法且词错率优于所用的语音合成基线。视频动态与美学最高且身份一致性与先进方法相当，音视频一致性中音色与情绪对齐占优而唇同步与领先方法相当。必须同时说明未胜出项，2 阶段方法在主体一致性上更强，但动态分数接近零。反映其无法生成与音频情绪匹配的动作，部分联合对照在个别视频指标上仍有竞争力。限制是音色与情绪依赖大语言模型打分，主观性与可重复性弱于自动指标，且测试集为自建 100 例，分布与提示词未完全公开。

### 拿掉不对称窗口与面部约束会发生什么？

消融的比较问题是交互设计与面部调制是否各自带来可测增益，公平条件是默认取联合训练前 10k 步的结果。指标方向为唇同步、音色一致性与情绪一致性越高越好，这是解读所有消融数值的前提。

交互消融比较对称全局、对称时间对齐与不对称时间对齐的组合，报告显示全局交互明显落后于对称时间对齐。支持时间对齐有助于收敛的判断，不对称在音频到视频与视频到音频两侧均带来提升。前者体现在音色与情绪一致性，后者体现在唇同步，这与窗口设计中前后音素与连续运动的假设一致。

下表比较的问题是在相同训练步数与测试集下，面部调制的 4 种配置如何影响一致性，公平条件是同一联合训练阶段，指标方向均为越高越好。该表用于分离监督与衰减各自的作用，是面部模块的核心证据。

| Settings | LS(↑) | TC(↑) | EC(↑) |
| --- | --- | --- | --- |
| (a) without FAM | 3.89 | 0.705 | 0.489 |
| (b) unsupervised FAM | 3.92 | 0.701 | 0.492 |
| (c) FAM with fixed λm | 4.11 | 0.719 | 0.497 |
| (d) FAM with decaying λm | 4.09 | 0.725 | 0.504 |

该表显示有监督掩码明显优于无调制与无监督版本，支持约束掩码有助于收敛。衰减权重在唇同步上略低于固定权重，但在音色与情绪上更高，说明逐步放开交互位置增强了灵活性。代价是唇同步峰值略有回落，未胜出项是衰减版本并非所有指标最高，固定版本在唇同步上反而略高。推理引导的可视化比较显示无引导时情绪与动作对齐不足，有引导时表情、动作与唇同步更贴合音频情绪。但该部分仅有样例图而无定量表，不能作为数值增益引用。

训练策略比较显示仅联合、联合后多任务、全程多任务 3 条曲线中，联合后多任务上限最高，全程多任务收敛最慢。论文解释为条件任务从头训练易陷入局部最优，先联合打基础再做条件任务效果更好。

### 哪些边界尚未被测到？

论文直接报告的局限包括对内部真人数据的依赖、音色与情绪依赖大语言模型打分的弱客观性。以及 2 阶段对照在身份一致性上仍占优，这些都是在相同自建测试集下观察到的现象。

有限解释是训练高效归因于结构对等与时间对齐，但该归因未单独分离数据质量与模型容量的影响。相关性不等于因果，不能把样本量差异直接等同于结构优势。未验证的推测包括不对称窗口大小的最优取值、掩码衰减曲线的最优形状、引导系数的最优配比。

这些超参数在正文未给出敏感性分析，复现时需要自行搜索并报告。像素不能精确辨别的数值与步数不应硬写，例如训练策略曲线图的纵轴为一致性指标。趋势支持联合后多任务更好，但不能把末步结果推广为全程每步都成立。

推理开销、输出帧率与实际延迟未测量，不能承诺效率改善，总体趋势不等于每组都成立。另一边界是动漫泛化仅在少量样例与一半测试集中展示，未报告按真实与生成子集分别聚合的分数。跨域差距的具体数值仍待验证，这是后续评估需要补足的分组分析。

### 要复现应先准备什么，先跑哪一步？

复现先做三件事。第一，按原文搭建双分支骨干，视频分支直接采用视频生成模型作为起点。音频分支采用同系列较小模型模板以保持结构相同，仅通道数不同，视频按每秒 16 帧编码、音频按 24000 赫兹转梅尔频谱。

文本分别经卷积块与文本编码器注入，这是保证表示对等的基础。第二，实现交互与调制，音频到视频用邻帧音频窗口查询。视频到音频用相邻 2 帧插值查询，输出矩阵零初始化，掩码头加人脸真值监督且权重从 0.1 线性衰减到零。

推理时实现去掉跨模态条件的共同基线与双系数引导，这是推理阶段增强的关键。第三，复现训练流程，先以批量 256 与较大学习率训练音频分支。再以小批量联合训练，最后按 4 比 1 比 1 比 2 比 2 混合五任务，每一步的批量、学习率与步数均按前文表格核对。

资源状态是核对依据，演示页当前可用，状态码为 200，可用于查看样例。第三方视频模型页当前可用，模型权重页本次未能确认可达，需按暂时不可达处理。不能写成已公开可下载，缺项是内部联合数据、人脸掩码提取细节、引导系数与采样器参数未完全公开。复现时需用自有数据替代并明确标注分布差异，先跑音频单分支以验证语音可懂度。再跑短步数联合以验证掩码是否聚焦人脸，最后再做多任务混合。

### 何时值得尝试这种不对称设计？

当任务要求同时生成人声与人物视频，且口型、音色、情绪必须联合成立时。值得尝试对称双分支加不对称交互的思路，对称保证 2 模态能对话。不对称解决对话时时间粒度不同的问题，面部调制解决早期训练被背景干扰的问题。

推理引导解决条件信号被淹没的问题，如果只需要环境音配音或单向驱动。且已有强 2 阶段管线，对称联合的收益可能不抵数据与调参成本。此时应优先复用现有管线，而非重写联合框架。

教学上容易误解的是把掩码当成最终分割结果，实际上它是逐层动态的交互权重。衰减后允许关注身体，另一个误解是把大语言模型打分当成客观真值。它只是跨模态一致性的代理指标，需配合唇同步分数与人工试听一起判断。

收束时记住可核对的要点，输入输出契约、双分支编码与拼接方式、两个对齐器的窗口与插值。掩码的监督与衰减、多任务的输入组合与采样比例、自建 100 例的评测条件。以及演示可用而权重暂不可达的资源状态，这些是后续验证与复现的最小信息集合。

## 📐 原文公式与排版

以下展示论文原页中的数学表达区域，保留原始上下标、分式和符号排版。区域序号仅用于本文导航，不是论文公式编号。

[![原文数学表达区域 1，PDF 第 4 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/eb14da16503d/figure-1.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/eb14da16503d/figure-1.png)

区域 1 · [查看论文原页](https://openaccess.thecvf.com/content/CVPR2026/papers/Zhang_UniAVGen_Unified_Audio_and_Video_Generation_with_Asymmetric_Cross-Modal_Interactions_CVPR_2026_paper.pdf#page=4)

[![原文数学表达区域 2，PDF 第 4 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/eb14da16503d/figure-2.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/eb14da16503d/figure-2.png)

区域 2 · [查看论文原页](https://openaccess.thecvf.com/content/CVPR2026/papers/Zhang_UniAVGen_Unified_Audio_and_Video_Generation_with_Asymmetric_Cross-Modal_Interactions_CVPR_2026_paper.pdf#page=4)

[![原文数学表达区域 3，PDF 第 5 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/eb14da16503d/figure-3.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/eb14da16503d/figure-3.png)

区域 3 · [查看论文原页](https://openaccess.thecvf.com/content/CVPR2026/papers/Zhang_UniAVGen_Unified_Audio_and_Video_Generation_with_Asymmetric_Cross-Modal_Interactions_CVPR_2026_paper.pdf#page=5)

[![原文数学表达区域 4，PDF 第 5 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/eb14da16503d/figure-4.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/eb14da16503d/figure-4.png)

区域 4 · [查看论文原页](https://openaccess.thecvf.com/content/CVPR2026/papers/Zhang_UniAVGen_Unified_Audio_and_Video_Generation_with_Asymmetric_Cross-Modal_Interactions_CVPR_2026_paper.pdf#page=5)

[![原文数学表达区域 5，PDF 第 5 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/eb14da16503d/figure-5.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/eb14da16503d/figure-5.png)

区域 5 · [查看论文原页](https://openaccess.thecvf.com/content/CVPR2026/papers/Zhang_UniAVGen_Unified_Audio_and_Video_Generation_with_Asymmetric_Cross-Modal_Interactions_CVPR_2026_paper.pdf#page=5)

[![原文数学表达区域 6，PDF 第 5 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/eb14da16503d/figure-6.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/eb14da16503d/figure-6.png)

区域 6 · [查看论文原页](https://openaccess.thecvf.com/content/CVPR2026/papers/Zhang_UniAVGen_Unified_Audio_and_Video_Generation_with_Asymmetric_Cross-Modal_Interactions_CVPR_2026_paper.pdf#page=5)

[![原文数学表达区域 7，PDF 第 5 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/eb14da16503d/figure-7.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/eb14da16503d/figure-7.png)

区域 7 · [查看论文原页](https://openaccess.thecvf.com/content/CVPR2026/papers/Zhang_UniAVGen_Unified_Audio_and_Video_Generation_with_Asymmetric_Cross-Modal_Interactions_CVPR_2026_paper.pdf#page=5)

另有 14 个候选区域因边界不明确或图片数量、尺寸限制未展开；请[查看完整论文](https://openaccess.thecvf.com/content/CVPR2026/papers/Zhang_UniAVGen_Unified_Audio_and_Video_Generation_with_Asymmetric_Cross-Modal_Interactions_CVPR_2026_paper.pdf)中的原始排版。

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。
- 评分规则：type-aware-v1
- 评分模型：muse-spark-1.3-contributor
- 评分请求协议：openai_responses

---

[← 返回 cvpr-2026 论文汇总](/posts/conference-cvpr-2026/)
