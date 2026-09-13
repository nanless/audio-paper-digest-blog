---
title: "Do You Have Freestyle? Expressive Humanoid Locomotion via Audio Control"
date: 2026-09-13
draft: false
description: "论文把音乐与语音当作隐式风格控制信号，用音频-动作对齐加残差混合专家教师与内容加风格扩散学生实现免重定向的音频到关节动作映射，在 FineDance 与 BEAT2 上报告了检索与跟踪指标，但跨仿真与真机泛化仍受数据集与物理条件限制。"
tags: ["扩散模型", "混合专家模型", "音乐", "语音", "音频交互"]
categories: ["cvpr-2026 论文"]
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_paper_id: "conference:cvpr:2026:conference-paper-id:Li_Do_You_Have_Freestyle_Expressive_Humanoid_Locomotion_via_Audio_Control_CVPR_2026_paper"
paper_digest_source_kind: conference
paper_digest_conference_id: "cvpr-2026"
paper_digest_conference_record_url: "https://openaccess.thecvf.com/content/CVPR2026/html/Li_Do_You_Have_Freestyle_Expressive_Humanoid_Locomotion_via_Audio_Control_CVPR_2026_paper.html"
paper_digest_conference_pdf_url: "https://openaccess.thecvf.com/content/CVPR2026/papers/Li_Do_You_Have_Freestyle_Expressive_Humanoid_Locomotion_via_Audio_Control_CVPR_2026_paper.pdf"
paper_digest_api_reader_contract: "beginner-researcher-v3"
paper_digest_api_reader_article_sha256: "d5a066eec96541e93e1232de5e24f603633dcb96b8b9e8fa295038c38bc82461"
paper_digest_api_reader_plan_sha256: "6b4c386de341c769d7e1a3ecedc1aaaccbb74acdc6a1f13be5d66873c1782a2c"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings-v4"
paper_digest_api_reader_source_bindings_sha256: "72d770efc00ef45bc30efff859f3e4e3dbf4d53ee06f53cf18d419537a03a682"
paper_digest_api_reader_source_table_count: 3
paper_digest_api_reader_source_formula_count: 0
paper_digest_api_reader_structured_artifacts_sha256: "a96180656340839b35fc971a163db2ed09a8765008372258997a80c403e1adb9"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity-v1"
paper_digest_api_reader_author_identity_sha256: "b14fd704fc763ab2c8a25e4feb88ab10a70974d97974ee5e7974445a206e02a3"
paper_digest_api_reader_author_count: 12
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity-v1"
paper_digest_api_reader_resource_identity_sha256: "7a645fc1ff2232d6b2b28293ad8cef8f06ec31582f1b3f57afc437be86ac7a96"
paper_digest_api_reader_resource_count: 0
paper_digest_api_reader_decision_projection: "api-reader-decision-projection-v2"
paper_digest_scoring_contract: "api-scoring-audit-v2"
paper_digest_taxonomy_contract: "paper-taxonomy-flat-tags-compat-v1"
paper_digest_taxonomy_selection_contract: "paper-taxonomy-selection-v1"
paper_digest_taxonomy_registry_version: "paper-taxonomy-v1"
paper_digest_taxonomy_registry_sha256: "15c82a567ce5a55dc1175684ed08b64c158558639d9c8fb822c9587ec32a8778"
paper_digest_taxonomy_concepts: [{"facet":"method","id":"method.diffusion","label":"扩散模型"},{"facet":"method","id":"method.moe","label":"混合专家模型"},{"facet":"signal","id":"signal.music","label":"音乐"},{"facet":"signal","id":"signal.speech","label":"语音"},{"facet":"task","id":"task.audio-interaction","label":"音频交互"}]
paper_digest_primary_task: "音频交互"
paper_digest_primary_method: "混合专家模型"
paper_digest_score: 6.1
paper_digest_rank_bucket: "前50%"
paper_digest_document_type: "方法研究"
paper_digest_conference_structure: replayable-pdf-layout-v1
---

# 📄 不重建人体动作：把音频当风格信号直接驱动人形机器人跳舞与演讲

> 英文题目：*Do You Have Freestyle? Expressive Humanoid Locomotion via Audio Control*

> 会议身份：`conference:cvpr:2026:conference-paper-id:Li_Do_You_Have_Freestyle_Expressive_Humanoid_Locomotion_via_Audio_Control_CVPR_2026_paper`


> ✅ 来源为官方会议 PDF；表格与 Figure 按原文证据绑定。PDF 公式以原页区域图片展示，未冒称作者原始 TeX。

> 会议来源：[官方记录](https://openaccess.thecvf.com/content/CVPR2026/html/Li_Do_You_Have_Freestyle_Expressive_Humanoid_Locomotion_via_Audio_Control_CVPR_2026_paper.html) · [官方 PDF](https://openaccess.thecvf.com/content/CVPR2026/papers/Li_Do_You_Have_Freestyle_Expressive_Humanoid_Locomotion_via_Audio_Control_CVPR_2026_paper.pdf)

标签：#扩散模型 #混合专家模型 #音乐 #语音 #音频交互

评分：**6.1/10** | 创新 1.5/2 | 技术严谨 1.0/1.5 | 实验充分 1.0/1.5 | 清晰度 0.7/1 | 影响力 0.8/1.5 | 开源 0.0/1.5 | 可复现 0.1/0.5 | 工程/实践 1.0/1.5

排名：前50% | 文档类型：方法研究

## 👥 作者与机构

- Zhe Li：机构信息未能从会议 PDF 纯文本可靠映射
- Cheng Chi：机构信息未能从会议 PDF 纯文本可靠映射
- Yangyang Wei：机构信息未能从会议 PDF 纯文本可靠映射
- Boan Zhu：机构信息未能从会议 PDF 纯文本可靠映射
- Tao Huang：机构信息未能从会议 PDF 纯文本可靠映射
- Zhenguo Sun：机构信息未能从会议 PDF 纯文本可靠映射
- Yibo Peng：机构信息未能从会议 PDF 纯文本可靠映射
- Pengwei Wang：机构信息未能从会议 PDF 纯文本可靠映射
- Zhongyuan Wang：机构信息未能从会议 PDF 纯文本可靠映射
- Fangzhou Liu：机构信息未能从会议 PDF 纯文本可靠映射
- Chang Xu：机构信息未能从会议 PDF 纯文本可靠映射
- Shanghang Zhang：机构信息未能从会议 PDF 纯文本可靠映射

## 📌 核心摘要

输入为音乐或语音音频，输出为Unitree G1人形机器人可执行的全身关节动作，难点在于绕开解码、重定向、跟踪三级级联误差与延迟，直接建立声学节奏到物理可行动作的映射。RoboPerform先训练音频运动对齐适配器将音频潜变量拉近对应运动潜变量，为后续控制注入运动学先验。接着以残差混合专家∆MoE作为教师策略学习多 regime跟踪能力，其输出动作经DAgger蒸馏进入扩散学生策略。学生策略固定文本到运动模型编码的内容潜变量作为语义锚点，并在多层去噪中注入对齐后音频潜变量作为风格调制，推理采用2步DDIM采样保证实时。与先用EMAGE或FineNet生成再重定向跟踪的显式管线相比，该隐式设计省去运动重建环节，实现音频到动作的直接映射并降低端到端延迟。在BEAT2任务下，Ours的Succ指标为0.99，高于Baseline的Succ指标0.98。其适用边界受限于切分为10秒30FPS的舞蹈与演讲片段及IsaacGym到MuJoCo双仿真加有限真机验证，开放音乐噪声语音与长时稳定性尚未验证，而两步扩散采样的实时推理将延迟控制在可部署水平。

## 🔗 开源与复现资源

本次未形成可展示的已核验资源记录，开放状态尚未核实。
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 输入是什么，输出是什么，为什么值得做音频控制？

这篇论文的输入是一段原始音频，可能是音乐，也可能是演讲语音，目标是直接输出人形机器人双腿与双臂关节的可执行动作，让机器人在听到音乐时跳出节奏对齐的舞蹈，在听到演讲时做出伴随语义重音的手势。读者需要先建立的画面是：传统做法是先把音频变成人体骨骼动画，再把骨骼动画压到机器人身上，最后用跟踪控制器跟随，每一步都有自己的误差与延迟。论文把这种 3 段式称为级联误差、串行延迟与声学到关节的松耦合。

研究要保留的关键信息是：作者主张动作等于内容加风格，内容是跳舞还是演讲这类任务骨架，风格是快慢、重音与起伏这类时间细节，音频只负责风格。输出不是一段离线动画，而是在物理仿真与真机上能实时执行的关节动作序列。
论文首页用舞者与演讲者两组舞台形象点明了两种任务，音乐驱动舞蹈与语音驱动手势共享同一套音频到动作框架。

对刚入门的同学，例子是：同一句跳舞的内容指令，配上不同节奏的音乐应产生不同的迈步与摆臂时机，但都不应变成演讲站姿。反过来，同一演讲内容配上不同语速，应改变抬手时机而不改变站立讲解的基本任务。

> **看图路径：** 1. 先看上下两排标题区分舞者场景与演讲者场景；2. 再看同一机器人在不同帧的手臂与躯干姿态变化；3. 最后看舞台布景与音符装饰只为说明任务氛围而非控制信号

[![原论文 Figure 1：RoboPerform makes humanoid perform as dancer and talker, which utilizes audio as signal to control…](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/bccb4753711c/figure-1.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/bccb4753711c/figure-1.png)

*论文图 1。原论文 Figure 1：“RoboPerform makes humanoid perform as dancer and talker, which utilizes audio as signal to control humanoid locomotion, enabling poolicy to generate rhythm-aligned co-speech…”。*

上图上半是舞台灯光下的多帧舞蹈姿态，下半是讲台前的多帧演讲手势，直观展示了内容固定而风格随音频变化的期望。图中姿态跨度大但双脚仍保持支撑，提示物理可行性与表现力需要兼顾，这正是后文用成功率与关节误差双重评估的原因。

### 已有路线如何做全身控制，音频路线卡在哪里？

在进入方法前，需要把 3 条相关路线放在同一输入与同一运行阶段下比较。第一条是全身运动跟踪，代表工作包括 DeepMimic 的相位模仿、ASAP 的仿真到真机多阶段补偿、OmniH2O 与 ExBody2 的统一多动作跟踪、GMT 对根速度与姿态的优先处理。这类方法的输入是人体参考动作，监督是跟踪奖励，运行阶段需要先有动作再跟踪，优点是协调性好，缺点是必须依赖动作模板。第二条是语言引导的运动，LangWBC 学小型在线生成网络，RLPF 用物理反馈微调语言模型，RoboGhost 用语言隐变量免重定向生成。

这类方法的输入是文本，运行阶段可直接生成，但只验证了语义任务，未验证密集时间结构如节拍与韵律。第 3 条是音频驱动人体动作生成，如 EMAGE 与 FineNet，输入是音频，输出是人体网格或骨骼动画，仍需重定向才能上机器人。
论文的判断是：若把第 3 条与第一条简单拼接，就会得到基线管线，即音频到人体动作再到机器人跟踪。作者在正文中明确指出该拼接有 3 个系统性问题：解码、重定向、跟踪 3 段误差累积；多阶段串行带来推理延迟。

各模块独立优化导致高层声学线索与底层关节驱动松耦合。因此论文不把类别差异当成同条件胜负，而是把拼接管线当作实际可运行的公平基线，在同一仿真器与同一机器人形态下比较成功率与误差。

**显式重定向管线 × 免重定向隐式控制：** 显式重定向管线先由音频生成人体动作再重定向到机器人并由跟踪控制器执行，分模块独立优化；免重定向隐式控制直接编码原始音频并把节拍与韵律当作调制信号注入动作生成；搭配比较的意义在于前者会累积解码与重定向与跟踪 3 段误差并带来串行延迟，后者用对齐后的隐变量直接条件化关节动作，从而保留细粒度时间对齐并降低端到端延迟。

### 任务如何定义，什么算做对，什么不算？

论文定义了 2 个任务。音乐到舞蹈：输入 10 秒音乐片段，输出全身舞蹈动作，要求脚步与节拍对齐且风格随曲风变化。语音到手势：输入 10 秒演讲语音，输出站立式演讲手势，要求手臂动作与语音重音、话语节奏对应，同时保持平衡不摔倒。2 个任务共享同一假设：音频提供风格，文本提供内容。训练与评测都把长序列切成 10 秒片段，动作采样率为 30 帧每秒。

什么算做对需要分两层看。第一层是音频与动作是否在隐空间对上，用检索召回 R@1、R@2、R@3 与平均距离 MM-Dist 衡量，数值越高表示给定音频能找回对应动作，距离越小表示跨模态更接近。第二层是动作在物理上能否执行，用成功率 Succ、平均关节位置误差 Empjpe、平均关键点误差 Empkpe 衡量，成功率越高越好，两类误差越低越好。需要提醒的是：检索好不等于物理好，检索只测隐空间邻近，跟踪才测仿真中的摔倒与漂移。论文同时报告两者，正是为了避免把表征对齐当成控制成功。

### 三模块如何串成一条免重定向链路？

沿着一个样本走完全程有助于理解全景。输入一段音乐，先由音乐特征或语音编码器得到原始音频隐变量，同时从原始动作经动作编码器得到动作隐变量，两者在对比学习下对齐，使音频隐变量带上运动学先验。对齐后的音频隐变量作为风格，文本如机器人在跳舞经预训练动作生成器得到的动作隐变量作为内容，共同条件化一个扩散学生策略去噪出关节动作。

与此同时，一个残差混合专家教师策略在仿真中用特权信息与参考动作学出物理可行的跟踪能力，再通过 DAgger 式滚出与查询把动作监督传给学生。部署时学生只看本体感知、内容隐变量与风格音频隐变量，不再需要参考动作与重定向。
下图把上述链路画成 4 个框：左下是音频与动作对比对齐，左上是教师与仿真交互，中间下是学生扩散，右侧是仿真与真机验证。

注意图中雪花与火焰标记的含义按原文是冻结与训练之分，动作编码器与动作生成器冻结，只训练音频适配器、教师与扩散学生，这种冻结安排保证了内容语义稳定而风格可学。

> **看图路径：** 1. 先沿左下音频与动作经对比学习到左上参考动作再到教师输出的路径看主链路；2. 再看学生侧音频标风格与文本生成器标内容两路如何汇入扩散模块；3. 最后看右侧仿真与真机两列验证学生输出可直接部署

[![原论文 Figure 2：Overview of RoboPerform.](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/bccb4753711c/figure-2.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/bccb4753711c/figure-2.png)

*论文图 2。原论文 Figure 2：“Overview of RoboPerform. We propose a two-stage approach: train an adaptor to inject kinematic information into audio modality, then a ∆MoE teacher policy is trained with RL and…”。*

从图中可见，主路径是从原始音频经适配器变为风格，从文本经生成器变为内容，两路在扩散模块汇合后输出动作增量；另一条路径是教师输出的最优动作经 DAgger 箭头向下监督学生。这种双路设计把语义 grounding 与节奏调制解耦，也是后文消融分别去掉内容与去掉适配器的依据。

### 对齐、专家与扩散各自算什么，如何配合？

先讲音频与动作对齐。白话说，对齐就是让听起来像鼓点的音频向量，在向量空间里靠近看起来像踏步的动作向量。英文是 audio-motion alignment。实现上音频侧用适配器变换，动作侧用预训练变分自编码器提取隐变量，目标是 InfoNCE 损失。InfoNCE 白话是对比损失，同一段音频与动作是正样本，不同段互为负样本，用带温度系数的余弦相似度计算。

计算目标是让正样本相似度高于所有负样本，原文用批量内 N 对配对实现。实现细节是音乐侧直接用 FineDance 预编码特征不再训练编码器，语音侧用 EMAGE 的时间卷积网络学表示，适配器是 6 层 4 头 Transformer 并加入时间注意力以捕捉节奏。

**内容隐变量 × 风格隐变量：** 内容隐变量负责说明机器人在做什么，例如跳舞或演讲这类高层任务语义，由文本经预训练动作生成器编码得到并在训练中固定；风格隐变量负责说明怎么做，例如节拍、韵律与能量包络，由音频经适配器对齐后得到并逐层注入扩散主干；二者搭配的理由是舞蹈与手势的核心骨架可共享而时间细节随音频变化，组合后扩散去噪既保住任务不漂移又能随节奏调制动作。

再讲残差混合专家。白话说，普通混合专家是多个网络各学一块，残差混合专家要求每块只学新增信息。英文是 Delta Mixture of Experts，缩写为残差混合专家。形式上条件输入被看作 3 维向量，4 个专家分别只看空集、第一维、前 2 维与全部 3 维，门控网络输出归一化权重，最终动作是加权残差和。论文把它解释为分类器自由引导在连续多维条件下的结构化推广，每项增量对应增加 1 个条件维度带来的信息增益。

这种安排的理由是消除信息冗余，让专家互补而非竞争。实现上是 4 个多层感知机专家加一个多层感知机门控。
下图展示了门控输出权重、专家输出经减号得增量再加权求和的过程，底部输入格从全零逐渐点亮对应嵌套子空间。

> **看图路径：** 1. 先看底部四个专家输入格从全零到逐步点亮的嵌套差异；2. 再看专家输出经减号得到增量后汇入加权求和的箭头；3. 最后看左侧门控网络输出权重控制各增量占比

[![原论文 Figure 3：Overview of ∆MoE.](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/bccb4753711c/figure-3.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/bccb4753711c/figure-3.png)

*论文图 3。原论文 Figure 3：“Overview of ∆MoE.”。*

图中从专家 1 的无条件先验开始，每增加一格条件就产生一个增量，门控权重决定各增量占比，最终汇入动作。这种画法对应正文的增量求和公式，理解时应把减号看作去除已学信息的关键操作。

**音频适配器 × InfoNCE 对齐：** 音频适配器是一个带时间注意力的 6 层 Transformer，负责把原始音频隐变量变换到动作隐变量空间；InfoNCE 对齐负责给出训练目标，把同段音频与动作拉近、把不同段推远；二者搭配是因为音频本身不含关节先验，需要一个可学习的映射加对比目标才能把节奏结构嵌入音频隐变量，避免再训练一个独立的音频到动作生成器。

最后讲学生扩散。白话说，扩散策略就是从噪声逐步去噪出动作的生成器。英文是 diffusion-based student policy。内容隐变量作为主要去噪条件固定，风格音频隐变量在多个网络层通过自适应层归一化注入，逐步把去噪轨迹推向有节奏的动作。前向加噪按累积信噪比构造噪声样本，训练用预测原始干净动作的均方误差监督。

**残差混合专家 × 门控加权残差融合：** 残差混合专家负责让 4 个专家分别只看嵌套条件子空间，从空输入到完整本体感知加历史观测加参考动作；门控加权残差融合负责由门控网络输出权重并按增量形式组合动作；搭配理由是若直接平均专家输出会重复利用同一信息，而残差形式让每个专家只学习新增条件维度带来的增益，从而实现分工互补。

### 三阶段按什么顺序训练，冻结与监督如何安排？

训练分 3 段，顺序不可颠倒。第一段训练音频适配器，用配对的音频与动作隐变量做对比学习，此时动作编码器冻结，只更新适配器，目的是把运动学先验注入音频。第二段用强化学习训练残差混合专家教师，输入包括特权信息、本体感知与参考动作目标，输出关节动作，在仿真中优化跟踪奖励，教师需要参考动作才能学出物理可行的跟踪能力。

第 3 段蒸馏学生扩散策略，学生先在仿真中滚出，访问到的状态再查询教师得到最优动作作为监督，按 DAgger 方式聚合数据并最小化动作重建误差。学生训练时动作生成器冻结，内容隐变量取固定文本对应的向量，音乐任务用机器人在随音乐跳舞，演讲任务用机器人在做演讲。
需要明确报告的缺项是：原文未给出教师强化学习的完整奖励系数与训练步数细节，正文只说用若干奖励优化并把细节指向附录。

扩散的去噪步数在训练与推理的配置差异只报告了推理用两步 DDIM 采样保证实时，未报告训练用总步数 T 的具体取值；DAgger 的数据聚合轮数与查询频率也未在正文量化。因此复现时应先按冻结安排跑通对齐，再补教师超参数扫描，不能从模型名推定默认实现。推理时学生用两步采样直接输出动作，不再调用人体动作生成与重定向，这是延迟优势的来源。

**教师策略 × 学生扩散策略：** 教师策略是在仿真中用强化学习训练的特权策略，能看到完整状态与参考动作，负责提供物理可行的最优动作监督；学生扩散策略是在教师滚出的状态上做 DAgger 式蒸馏的生成器，只以内容隐变量与对齐后音频隐变量为条件去噪动作；搭配理由是教师解决物理跟踪难题而学生解决部署时无特权信息且需随音频即兴的问题，蒸馏把物理能力迁移到可直接部署的音频条件生成器。

### 数据、仿真与基线在什么条件下比较？

数据用两个公开集。FineDance 是细粒度全身舞蹈集，7.7 小时舞蹈动作，提供 SMPL-H 格式动作与 librosa 音乐特征。BEAT2 是语音手势集，76 小时 30 位说话人数据，标准化为网格表示并配对音频。两者都切成 10 秒片段，动作采样 30 帧每秒。评估分仿真内与跨仿真：教师与学生都在 IsaacGym 训练，学生直接在 IsaacGym 与 MuJoCo 测跟踪，并进一步部署到 Unitree G1 真机做定性验证。

指标分两类：检索类 R@1、R@2、R@3 越高越好，MM-Dist 越低越好；跟踪类成功率越高越好，关节与关键点误差越低越好。
基线是实际可运行的显式管线：语音任务用 EMAGE 生成确定性动作，舞蹈任务用 FineNet 生成确定性动作，再经重定向到 G1 并由基于多层感知机的显式动作驱动策略执行。时间开销比较包含动作生成加 1000 步 PBHC 重定向的全链路延迟，而本方法只计适配器加扩散两步采样的延迟。这种条件保证了比较的不是离线最优值，而是可部署策略的端到端代价。

关于开源状态，本次收到的证据中未发现经 HTTPS 验证的资源绑定，因此不能声称代码、模型或数据已公开，复现应以论文描述与公开数据集为准。

### 检索与跟踪的主结果说明了什么，代价是什么？

先看检索，它回答音频适配器是否把节奏信息带进了音频向量。比较问题是：给定一段音频，能否在动作隐空间找回对应动作。公平条件是同一测试切分与同一隐空间，指标方向是召回越高越好、距离越低越好。下表整理了 BEAT2 与 FineDance 测试集上的对齐性能，音乐与语音两行分别对应两类音频。

| 条件 | R@1 | R@2 | R@3 | MM-Dist | 任务 |
| --- | --- | --- | --- | --- | --- |
| Music-Motion | 66.7 | 78.8 | 83.5 | 1.154 | 音乐到舞蹈 |
| Speech-Motion | 64.6 | 76.5 | 82.1 | 1.232 | 语音到手势 |

表后解释：音乐侧 R@1 为 66.7，语音侧为 64.6，R@3 都超过 82，距离在 1.15 到 1.23 之间，报告显示适配器已能把音频映射到对应动作附近。

但这只是表征对齐，未胜出项是语音侧全面略低于音乐侧，提示语音韵律比音乐节拍更难对齐，且检索好坏需经跟踪验证，不能直接当成控制成功。
再看跟踪，它回答对齐后的音频能否变成不摔倒且误差小的关节动作。比较问题是：在同一仿真器与同一机器人形态下，免重定向学生是否优于先生成再重定向的基线。下表是 BEAT2 上的成功率与误差，覆盖 IsaacGym 与 MuJoCo。

| 数据集 | 方法 | Succ IsaacGym | Empjpe IsaacGym | Empkpe IsaacGym | Succ MuJoCo | Empjpe MuJoCo | Empkpe MuJoCo |
| --- | --- | --- | --- | --- | --- | --- | --- |
| BEAT2 | Baseline | 0.98 | 0.07 | 0.05 | 0.94 | 0.13 | 0.12 |
| BEAT2 | Ours | 0.99 | 0.05 | 0.04 | 0.96 | 0.10 | 0.09 |

表后解释：本方法在 BEAT2 上成功率从 0.98 提升到 0.99，IsaacGym 关节误差从 0.07 降到 0.05，MuJoCo 误差从 0.13 降到 0.10，支持免重定向在保持高成功率的同时降低跟踪误差。主要代价是该表只覆盖相对低动态的演讲任务，高动态舞蹈的差距需看下一表。未评测边界是真机只做定性展示，未报告真机成功率与误差。
下表补上 FineDance 与专家变体的对照，列数满足宽表要求，用于看高动态下的保持性。

| 数据集 | 方法 | Succ IsaacGym | Empjpe IsaacGym | Empkpe IsaacGym | Succ MuJoCo | Empjpe MuJoCo | Empkpe MuJoCo |
| --- | --- | --- | --- | --- | --- | --- | --- |
| FineDance | Baseline | 0.88 | 0.24 | 0.21 | 0.61 | 0.32 | 0.27 |
| FineDance | Ours | 0.93 | 0.18 | 0.16 | 0.67 | 0.26 | 0.24 |
| BEAT2 | Vanilla MoE | 0.97 | 0.14 | 0.1 | 0.94 | 0.16 | 0.14 |
| BEAT2 | 无适配器 | 0.88 | 0.29 | 0.27 | 0.83 | 0.36 | 0.35 |

表后解释：在 FineDance 上本方法把 IsaacGym 成功率从 0.88 提高到 0.93，MuJoCo 从 0.61 提高到 0.67，误差同步下降，支持高动态下仍有效。

但 MuJoCo 的 0.67 绝对值仍明显低于 IsaacGym，说明跨仿真泛化是主要代价与限制，不能把单仿真结果推广为全物理引擎成立。普通混合专家与无适配器两行较差，分别支持残差设计与对齐的必要性，具体消融在下一节展开。

> **看图路径：** 1. 先对比左侧 IsaacGym 与右侧 MuJoCo 两列的地面与光照差异；2. 再按行看前两行为舞蹈后两行为演讲的任务标注；3. 最后沿每行三帧箭头观察手臂抬升与步态切换的连续性

[![原论文 Figure 6：Qualitative results in the IsaacGym and MuJoCo.](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/bccb4753711c/figure-6.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/bccb4753711c/figure-6.png)

*论文图 6。原论文 Figure 6：“Qualitative results in the IsaacGym and MuJoCo. The upper half presents the tracking performance of music-to-locomotion, and the lower half presents that of speech-to-locomotion.”。*

上图上两行为不同舞种的舞蹈跟踪，下两行为不同演讲文本的手势跟踪，左右两列分别为 IsaacGym 与 MuJoCo。可见舞蹈帧中腿部大开合仍保持支撑，手势帧中双臂抬升时机随文本变化，支持时间对齐与平衡兼顾的判断，但像素无法读出精确关节误差，需以表格数字为准。

### 去掉内容、去掉适配器或换回普通专家会发生什么？

消融按 4 个问题组织。第一，音频驱动是否优于姿态驱动。做法是用 EMAGE 与 FineNet 生成显式动作序列再执行，报告完整推理延迟。论文配图显示显式管线不仅多了生成加 1000 步重定向的计算开销，还降低了成功率并增大了跟踪误差，支持免重定向在延迟与精度上的双重收益。但需注意延迟数字受重定向迭代数选择影响，换更轻的重定向可能缩小差距，因此结论应限定为在该 1000 步配置下成立。

第二，残差混合专家是否优于普通混合专家。条件是同一数据与同一跟踪协议，指标仍是成功率与两类误差。上节宽表已显示普通混合专家在 BEAT2 上 IsaacGym 成功率 0.97 低于本方法的 0.99，误差 0.14 高于 0.05。论文还用 t-SNE 可视化解释：普通混合专家各专家输出高度重叠，未实现信息分工；残差混合专家的增量分量相互分离，每笔增量对应新增条件维度。

这种可视化支持分工解释，但属于有限解释而非因果证明，不能据此断言分离度必然导致成功率提升。
第三，有无内容隐变量。做法是固定同一内容向量做条件与完全去掉内容对比。论文报告带内容显著更准，说明音频只做风格调制时需要语义锚点，否则生成会漂移。若去掉内容，舞蹈可能退化为无任务的随机摆动，演讲可能失去站立讲解骨架。

第四，有无适配器。做法是直接用未对齐音频隐变量驱动策略。宽表中无适配器在 BEAT2 上成功率掉到 0.88，误差升到 0.29，FineDance 掉得更多，支持运动学先验注入的必要性。论文还提到用节奏命中率衡量动作与音乐节拍的时间对应，但正文未给出完整数字表格，因此该节奏维度的改善属于待验证，不应承诺已量化。

### 哪些结论有边界，哪些量没有被测量？

首先，数据集边界明显。舞蹈只有 7.7 小时，语音虽有 76 小时但说话人与场景有限，切成 10 秒片段后长时程连贯性未被评估。原文指出 UniTracker 类方法在长序列因全局目标依赖而不稳，本方法虽用固定内容加风格注入缓解漂移，但未报告分钟级连续表演的成功率，因此不能把 10 秒片段结论推广到整场演出。
其次，物理边界明显。FineDance 在 MuJoCo 成功率仅 0.67，远低于 IsaacGym 的 0.93，说明动力学差异仍大。

真机只在舞台布景下做定性展示，未报告摔倒率、关节力矩与功耗，训练资源、推理帧率与实际延迟也未分离报告，只说了两步 DDIM 保证实时。因此不能承诺延迟、误判率或成本已全面改善。
最后，证据冲突与缺项需要点名。原文表格与图注在个别小数精度上存在排版粘连，但不影响大小关系判断；节奏命中率、教师奖励系数、扩散总步数与 DAgger 轮数缺具体数字，这些缺失不是技术错误，但复现时必须补扫描与消融，不能从模型名称推定实现。

### 若要复现，应先跑通哪条链路，需要哪些配置？

复现建议按学习依赖倒排。第一步先跑数据与编码：下载 FineDance 与 BEAT2，按 10 秒切分、30 帧采样，音乐用预编码特征不再训练编码器，语音用时间卷积网络提表示，动作侧训练 9 层 4 头 Transformer 变分自编码器并冻结。第二步跑对齐：训练 6 层 4 头带时间注意力的适配器，用批量内 InfoNCE 目标，验证 R@1 到 R@3 与 MM-Dist 是否接近 66.7 与 1.15 量级。第三步跑教师：用 4 个多层感知机专家加门控实现残差混合专家，在 IsaacGym 中强化学习跟踪参考动作，检查成功率是否先在 BEAT2 上接近 0.99。

第四步跑学生：固定文本对应的内容向量，用 4 层多层感知机扩散主干加自适应层归一化注入风格，DAgger 滚出并查询教师监督，推理用两步 DDIM 采样。最后做跨仿真到 MuJoCo 与 G1 真机的迁移，只做定性前应先在 MuJoCo 复测成功率与误差。
关键超参数按原文保留：专家数 4、适配器 6 层 4 头、动作变分自编码器 9 层 4 头、扩散主干 4 层多层感知机、推理两步采样。信息条件是部署时无特权信息与无参考动作，只有本体感知加内容与风格隐变量。

开源方面，本次无经验证的资源绑定，应视为链接当前不可用，复现以论文描述与公开数据集为准，不假设权重可下载。

### 何时值得尝试这种音频即风格的思路？

当任务骨架清晰但时间细节丰富时值得尝试，例如跟节拍的舞蹈、伴随重音的手势、主持式讲解。此时把文本语义固定为内容、把音频只做风格注入，可以减少对动作模板的依赖并降低重定向延迟。当任务本身就是精确跟踪指定 choreography，或音频与动作对应关系极弱时，不应套用该思路，前者更适合直接跟踪，后者需先验证检索能否显著高于随机。

对初学者的可复述要点是：先对齐让音频带上动作先验，再用残差专家学出物理可行的教师，最后把能力蒸馏到内容加风格的扩散学生。记住两个数字锚点：检索 R@1 约六成意味着对齐可用但不完美；FineDance 跨仿真成功率从 0.61 到 0.67 意味着有提升但仍有差距。带着这两个锚点去读表，就不会把表征进步误当成系统完备。

## 📐 原文公式与排版

以下展示论文原页中的数学表达区域，保留原始上下标、分式和符号排版。区域序号仅用于本文导航，不是论文公式编号。

[![原文数学表达区域 1，PDF 第 4 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/2aad9fcbe276/figure-1.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/2aad9fcbe276/figure-1.png)

区域 1 · [查看论文原页](https://openaccess.thecvf.com/content/CVPR2026/papers/Li_Do_You_Have_Freestyle_Expressive_Humanoid_Locomotion_via_Audio_Control_CVPR_2026_paper.pdf#page=4)

[![原文数学表达区域 2，PDF 第 5 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/2aad9fcbe276/figure-2.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/2aad9fcbe276/figure-2.png)

区域 2 · [查看论文原页](https://openaccess.thecvf.com/content/CVPR2026/papers/Li_Do_You_Have_Freestyle_Expressive_Humanoid_Locomotion_via_Audio_Control_CVPR_2026_paper.pdf#page=5)

[![原文数学表达区域 3，PDF 第 5 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/2aad9fcbe276/figure-3.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/2aad9fcbe276/figure-3.png)

区域 3 · [查看论文原页](https://openaccess.thecvf.com/content/CVPR2026/papers/Li_Do_You_Have_Freestyle_Expressive_Humanoid_Locomotion_via_Audio_Control_CVPR_2026_paper.pdf#page=5)

另有 25 个候选区域因边界不明确或图片数量、尺寸限制未展开；请[查看完整论文](https://openaccess.thecvf.com/content/CVPR2026/papers/Li_Do_You_Have_Freestyle_Expressive_Humanoid_Locomotion_via_Audio_Control_CVPR_2026_paper.pdf)中的原始排版。

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。
- 评分规则：type-aware-v1
- 评分模型：muse-spark-1.3-contributor
- 评分请求协议：openai_responses

---

[← 返回 cvpr-2026 论文汇总](/posts/conference-cvpr-2026/)
