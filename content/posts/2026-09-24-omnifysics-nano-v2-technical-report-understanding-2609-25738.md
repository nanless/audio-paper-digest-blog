---
title: "OmniFysics-Nano-V2 Technical Report: Understanding the Physical World Across Modalities"
date: 2026-09-24
draft: false
tags: [音视频问答, 强化学习, 音视频, 多模态模型]
categories: [论文速递]
description: "针对通用多模态只学语义对齐而缺物理量监督的问题，OmniFysics-Nano-V2 用静态属性 grounding 与动态视听事件对齐的双分支数据加两阶段 GRPO，在 21 项中 17 项领先同类全模态模型，代价是依赖商用大模型标注与多阶段训练流程。"
hiddenInHomeList: true
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_arxiv_id: "2609.25738"
paper_digest_workbench_contract: "researcher-workbench-v1"
paper_digest_reader_title: "只拼模态不够：用静态属性与动态事件补上物理监督"
paper_digest_original_title: "OmniFysics-Nano-V2 Technical Report: Understanding the Physical World Across Modalities"
paper_digest_arxiv_version: null
paper_digest_arxiv_versioned_id: null
paper_digest_arxiv_abs_url: "https://arxiv.org/abs/2609.25738"
paper_digest_arxiv_pdf_url: "https://arxiv.org/pdf/2609.25738.pdf"
paper_digest_primary_task: "音视频问答"
paper_digest_taxonomy_contract: "paper-taxonomy-flat-tags-compat-v1"
paper_digest_taxonomy_selection_contract: "paper-taxonomy-selection-v1"
paper_digest_taxonomy_registry_version: "paper-taxonomy-v1"
paper_digest_taxonomy_registry_sha256: "15c82a567ce5a55dc1175684ed08b64c158558639d9c8fb822c9587ec32a8778"
paper_digest_taxonomy_concepts: [{"facet":"task","id":"task.av-question-answering","label":"音视频问答"},{"facet":"method","id":"method.reinforcement","label":"强化学习"},{"facet":"signal","id":"signal.audiovisual","label":"音视频"},{"facet":"model_family","id":"model_family.multimodal","label":"多模态模型"}]
paper_digest_primary_method: "强化学习"
paper_digest_score: 7.6
paper_digest_rank_bucket: "前25%"
paper_digest_document_type: "模型报告"
paper_digest_one_sentence: "针对通用多模态只学语义对齐而缺物理量监督的问题，OmniFysics-Nano-V2 用静态属性 grounding 与动态视听事件对齐的双分支数据加两阶段 GRPO，在 21 项中 17 项领先同类全模态模型，代价是依赖商用大模型标注与多阶段训练流程。"
paper_digest_authors: [{"affiliations":["Physical Superintelligence Lab, Fysics AI College of Intelligent Robotics and Advanced Manufacturing, Fudan University"],"name":"Yizhou Liu"},{"affiliations":["Physical Superintelligence Lab, Fysics AI College of Intelligent Robotics and Advanced Manufacturing, Fudan University"],"name":"Jinghang Han"},{"affiliations":["Physical Superintelligence Lab, Fysics AI College of Intelligent Robotics and Advanced Manufacturing, Fudan University"],"name":"Kaixiang Qiu"},{"affiliations":["Physical Superintelligence Lab, Fysics AI College of Intelligent Robotics and Advanced Manufacturing, Fudan University"],"name":"Qi He"},{"affiliations":["Physical Superintelligence Lab, Fysics AI College of Intelligent Robotics and Advanced Manufacturing, Fudan University"],"name":"Minghao Han"},{"affiliations":["Physical Superintelligence Lab, Fysics AI College of Intelligent Robotics and Advanced Manufacturing, Fudan University"],"name":"Yue Jiang"},{"affiliations":["Physical Superintelligence Lab, Fysics AI College of Intelligent Robotics and Advanced Manufacturing, Fudan University"],"name":"Xujia Chen"},{"affiliations":["Physical Superintelligence Lab, Fysics AI College of Intelligent Robotics and Advanced Manufacturing, Fudan University"],"name":"Wei Zou"},{"affiliations":["Physical Superintelligence Lab, Fysics AI College of Intelligent Robotics and Advanced Manufacturing, Fudan University"],"name":"Shunli Wang"},{"affiliations":["Physical Superintelligence Lab, Fysics AI College of Intelligent Robotics and Advanced Manufacturing, Fudan University"],"name":"Lihua Zhang"},{"affiliations":["Physical Superintelligence Lab, Fysics AI College of Intelligent Robotics and Advanced Manufacturing, Fudan University"],"name":"Dingkang Yang"}]
paper_digest_abstract_sha256: "513e91353f1492a4e9782d6dfb7462b6a1e3460ebd556c8e5a628a8ef500801a"
paper_digest_sidecars: {"citation.bib":{"sha256":"58e63143325458d7a8c51b0491273b560833271f3b4512e47f4fc769bfcd8fb8","url":"/audio-paper-digest-blog/data/papers/2026-09-24/2609-25738/citation.bib"},"citation.json":{"sha256":"5bcc7a40c49dd78d1819dfa45d732810191599bf86fc36f8bc5e8b4ed7cc7c3b","url":"/audio-paper-digest-blog/data/papers/2026-09-24/2609-25738/citation.json"},"citation.ris":{"sha256":"a57bdec8fa0b40c774b40d77de8718bcd10b19fd6dec0ec3c358711d5102b9f8","url":"/audio-paper-digest-blog/data/papers/2026-09-24/2609-25738/citation.ris"},"rethink-context.json":{"sha256":"5e781d36a71e4021297683bf5c9aa2564f431a2f0cbdd4138d79cea2fdab87c9","url":"/audio-paper-digest-blog/data/papers/2026-09-24/2609-25738/rethink-context.json"}}
paper_digest_api_reader_contract: "beginner-researcher-v3"
paper_digest_api_reader_article_sha256: "d5b5b20fd2ab2d59944470c7430d23775cce0db4a8abd7e41d9502aab540bc44"
paper_digest_api_reader_plan_sha256: "6f249d3088a2f25589920067db833fa282f5c2f7493c1b754cf5bb85f46dcd8e"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings-v4"
paper_digest_api_reader_source_bindings_sha256: "65b23f7816c55e83bbb0ff7e42adb4205fa80323498b54d16fbcfa6637d34e17"
paper_digest_api_reader_source_table_count: 4
paper_digest_api_reader_source_formula_count: 4
paper_digest_api_reader_structured_artifacts_sha256: "8250254992ccae7f57a1b3a304ba4c5653ad57204c4bd3cb24c602a0832d6d09"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity-v1"
paper_digest_api_reader_author_identity_sha256: "1b9600315fadab878f723f33e7ceb0964ad1460bc51db6e262d9a24c017e2fbc"
paper_digest_api_reader_author_count: 11
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity-v1"
paper_digest_api_reader_resource_identity_sha256: "6a8cf2eb3b85645b1e83004dc55962d1c418b9f11c5e7dc126a0683d321e6e0a"
paper_digest_api_reader_resource_count: 2
paper_digest_api_reader_figure_persistence: "ephemeral-no-persisted-figure-assets-v1"
paper_digest_api_reader_decision_projection: "api-reader-decision-projection-v2"
---

# 📄 只拼模态不够：用静态属性与动态事件补上物理监督

> 英文题目：*[OmniFysics-Nano-V2 Technical Report: Understanding the Physical World Across Modalities](https://arxiv.org/abs/2609.25738)*

> 标签：#音视频问答 | #强化学习 | #音视频 | #多模态模型
>
> 评分：**7.6/10** | 创新 1.5/2 | 技术严谨 1/1.5 | 实验充分 1/1.5 | 清晰度 0.8/1 | 影响力 1/1.5 | 开源 1.2/1.5 | 可复现 0.1/0.5 | 工程/实践 1/1.5


## 👥 作者与机构

- Yizhou Liu：Physical Superintelligence Lab, Fysics AI College of Intelligent Robotics and Advanced Manufacturing, Fudan University
- Jinghang Han：Physical Superintelligence Lab, Fysics AI College of Intelligent Robotics and Advanced Manufacturing, Fudan University
- Kaixiang Qiu：Physical Superintelligence Lab, Fysics AI College of Intelligent Robotics and Advanced Manufacturing, Fudan University
- Qi He：Physical Superintelligence Lab, Fysics AI College of Intelligent Robotics and Advanced Manufacturing, Fudan University
- Minghao Han：Physical Superintelligence Lab, Fysics AI College of Intelligent Robotics and Advanced Manufacturing, Fudan University
- Yue Jiang：Physical Superintelligence Lab, Fysics AI College of Intelligent Robotics and Advanced Manufacturing, Fudan University
- Xujia Chen：Physical Superintelligence Lab, Fysics AI College of Intelligent Robotics and Advanced Manufacturing, Fudan University
- Wei Zou：Physical Superintelligence Lab, Fysics AI College of Intelligent Robotics and Advanced Manufacturing, Fudan University
- Shunli Wang：Physical Superintelligence Lab, Fysics AI College of Intelligent Robotics and Advanced Manufacturing, Fudan University
- Lihua Zhang：Physical Superintelligence Lab, Fysics AI College of Intelligent Robotics and Advanced Manufacturing, Fudan University
- Dingkang Yang：Physical Superintelligence Lab, Fysics AI College of Intelligent Robotics and Advanced Manufacturing, Fudan University

## 📌 核心摘要

OmniFysics-Nano-V2要解决紧凑全模态模型物理感知欠监督问题，输入为图像、视频、音频、语音与文本，输出为文本回答与条件语音波形，难点是语义对齐无法恢复质量摩擦等隐变量与接触事件因果链。该工作先以静态分支做目标过滤、商用多模态大模型画像与原型库区间校准获得属性问答监督，再以动态分支做事件检索、重叠片段嵌入选段与视听时间容限对齐获得交互状态链监督。随后对候选提示各采样4个随机rollout仅保留组内出现至少两种奖励值的提示，再按通用答案正确到细粒度物理感知的两阶段组相对策略优化课程优化策略。与已有全模态系统相比，关键差异是从终点答案奖励转向中间属性与材料感知的可验证奖励。在Daily-Omni基准下，OmniFysics-Nano-V2的得分为85.24，高于Qwen2.5-Omni-7B的得分53.42。结论仅适用于所测问答与选择式物理感知设置，对真实测量精度与真实机器人操作成功率尚未验证。训练在 64 块 NVIDIA H100 上以 bfloat16 进行，奖励多样性过滤估计节省 2687.7 GPU 小时，原文未给出端到端总成本与推理延迟吞吐。

## 🔗 开源与复现资源

- 代码相关资源：<https://github.com/Fysics-AI/OmniFysics-Nano-V2> — 链接可访问（HTTP 200）

- 模型相关资源：<https://huggingface.co/Fysics-AI/OmniFysics-Nano-V2> — 链接可访问（HTTP 200）

可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 输入是什么，要解决的物理理解缺口是什么？

这篇技术报告的输入是图像、视频、音频、语音与文本 5 类观测，输出是文字回答与语音波形，目标是在一个 4B 规模的全模态模型里同时做好通用理解与物理世界理解。作者要解决的不是模态覆盖不够，而是监督缺失：通用语义数据只描述出现了什么，很少给出质量、密度、摩擦、弹性等内禀属性，也很少把可见状态变化与声音事件按时间对齐并解释因果。只增加模态而不补物理监督，模型仍只能学语义相关。

报告因此提出两处改动，一是用静态与动态双分支补显式物理监督，二是用按奖励多样性筛选提示词的 2 阶段组相对策略优化，把训练从同质化的转录与问答正确率推向细粒度物理感知。必须保留的关键信息是模型规模为 4B、支持 5 模态理解与文本语音生成、代码与权重当前已公开可用。本文按学习依赖展开，先讲任务与路线，再讲数据与模型全景，然后拆组件计算、训练流程、实验条件、结果反证，最后讲复现与边界。

### 附录：术语与符号速查

白话先行：全模态指同模型处理图文音视频与语音文本，组相对策略优化指同提示词多回答组内比优劣再更新，奖励多样性指组内奖励有高低之分，静态分支指单图属性 grounding，动态分支指视频视听事件对齐。英文名保留为 Omni-modal、Group Relative Policy Optimization、Reward-Diversity Filtering、Static Physical Data、Dynamic Physical Data。后文简称固定为全模态、GRPO、过滤、静态、动态。符号速查：图像与框为画像输入，类别材料体类型与估计值为输出；原型检索用类别材料关键词 Jaccard 加权。

选段用视频文本余弦相似度；视听关联用时间差容限；统一序列用边界符与时间组交错；语音条件用答案隐状态投影加交叉注意力。所有公式以原文 TeX 为准，不自行改写展示式。

### 同输入同目标的路线与本文监督有何不同？

同输入的全模态基础模型路线包括闭源的 GPT-4o 与 Gemini，开源的 Qwen2.5-Omni、Qwen3-Omni、OmniVinci 与 MiniCPM-o-4.5 等。它们的统一主要是功能统一：把文本、视觉、音频放进同一感知生成系统，做流式问答与跨模态指令跟随。报告指出，这类训练很少要求恢复潜在物理量、维护物体状态演变或指出连接视觉变化与听觉观测的物理事件。同目标的物理数据路线分为仿真与真实两类：IntPhys、PHYRE、CLEVRER、Physion 以及 Kubric 等提供仿真中的隐状态与碰撞因果，但受资产与接触模型限制；Physics101、PhysVid 与 ObjectFolder 提供真实测量，但采集协议限制规模与交互多样性。

多感官数据很少在同一例子中同时给出属性、定位事件、中间响应、终态与同步视听证据。同运行阶段的物理强化学习路线从 GRPO、DAPO 等可验证奖励发展而来，Cosmos-Reason1、HCM-GRPO 与 Physics-R1 把物理常识转为选择或单位一致性奖励。报告认为，这些奖励多停留在答案匹配或静态 plausibility 分类，组内回答奖励全相同时学习信号弱，且交互环境内的提升不一定迁移。本文的区别是把可验证性推向感知 grounding：中间奖励显式检查属性值与材料证据，提示词筛选显式保证组内奖励排序可观测。

### 为什么语义对齐做得好，物理题还是做不对？

举一个教学例子帮助定位问题，例子不代表论文数值。假设视频里玻璃杯掉落碎裂，通用模型能转录出掉落与碎裂声，能说出杯子碎了，但不记录杯子质量、刚度、碰撞时刻视听延迟，也不区分是重力加速撞击还是本来就有裂纹。问题被拆成两个可操作缺口。第一是缺物理监督：属性、交互状态与因果机制在通用数据中隐含或缺席，模型无法把跨模态观测与潜在物理定律关联。

第二是训练目标同质：通用目标优先语义正确与跨模态对齐，鼓励走语义捷径，而不是建模动力学与因果。复述方法是先看静态分支能否给出带区间的属性先验，再看动态分支能否给出带时间锚的视听证据链，最后看强化学习是否只奖答案还是同时奖中间感知。论文的判断标准也按此组织：物理属性题、时间跨模态题与定量推理题是主战场，通用视觉语言题用来检查没有丢失基本能力。

### 双分支数据加两阶段策略的全景如何走通？

先沿一个样本走完全程。输入可以是一张含椅子的图像加问题，或一段含掉落碰撞声的视频加问题。模型先用文本、视觉、声学 3 套接口把观测映射到同一隐空间，拼成统一序列送入共享因果主干做推理，生成文字答案；若需语音，再把答案隐状态与规范化文本做交叉注意力，生成语音 token 并经声码器还原波形。训练分 3 段：第一段做 3 步有监督对齐与联合训练，第二段做两步强化学习，第 3 段冻结推理器只训练语音输出分支。

数据侧双分支在有监督阶段提供显式监督，策略侧奖励多样性过滤在强化学习前剔除无排序信号的提示词。下面的示意图把通用模型与本文模型的训练数据与训练阶段并置，能最快看清改动位置。

上图把通用路线与本文路线上下对照，左侧是训练数据从通用理解数据变为静态物理、动态物理与细粒度强化学习数据，右侧是从单阶段有监督加强化学习变为多阶段有监督加物理感知强化学习再加音频训练，中间模型输入输出从 4 模态理解变为 5 模态理解加语音生成。

> **看图路径：** 1. 先看上下面板对照：上面是通用数据加单阶段训练，下面是三类物理数据加多阶段训练；2. 再看中间模型输入输出箭头：下面板输出多了语音符号；3. 最后看右侧训练阶段框：从 SFT 加 RL 变为多阶段 SFT 加物理感知 RL 加音频训练

[![原论文 Figure 1：Illustration of general multimodal models and the proposed OmniFysics-Nano-V2.](https://arxiv.org/html/2609.25738v1/Fig1.png)](https://arxiv.org/html/2609.25738v1/Fig1.png)

*论文图 1。原论文 Figure 1:：“Illustration of general multimodal models and the proposed OmniFysics-Nano-V2.”。*

该图显示的叙事闭环是监督与目标同时变：数据侧补属性与事件，目标侧补中间感知奖励与格式奖励。学习时先对齐接口再联合推理，先优化答案正确再优化物理证据，语音适配放在最后以避免改写已学策略。复述时记住顺序不能倒：没有静态区间约束，属性估计易漂移；没有动态时间对齐，声音只能当背景；没有奖励多样性过滤，大量同奖励组会浪费算力。

### 静态分支如何给出带区间的属性？动态分支如何对齐声音？

静态分支处理单图物体，动作是过滤、画像、检索原型、精修。先去掉无效框、生命体与严重不完整物体，保留可估计材料的非生命物体。对保留框，商用多模态大模型输出类别、材料、体类型与一组数值属性，候选包括质量、密度、刚度、摩擦、恢复系数、杨氏模量、泊松比、黏度、表面张力与屈服应力。符号含义是图像与框为输入，估计值与标准单位为输出，原型库此时不用。

\[\mathcal{M}_{\mathrm{com}}(I_{i},b_{ij})=\left(c_{ij},m_{ij},\tau_{ij},\{(k,\hat{p}_{ijk},u_{k})\}_{k\in\mathcal{K}_{ij}}\right),\]

该式是初始画像的定义，目标是得到结构化档案。接着用 1209 个物体材料原型做关键词匹配，类别与材料分别算 Jaccard 重叠加权，取出参考值与合法区间。

\[r_{ij}^{\star}=\arg\max_{r\in\mathcal{R}}\left[\lambda_{c}J(\mathcal{W}_{c_{ij}},\mathcal{W}_{c_{r}})+\lambda_{m}J(\mathcal{W}_{m_{ij}},\mathcal{W}_{m_{r}})\right],\]

该式目标是找到功能与材料最接近的原型，提供区间约束。精修先按体类型滤掉无关属性，例如刚性椅子去掉黏度，越界值连同参考区间交回同一商用模型只重估 1 次，仍越界则丢弃整个样本。最终元数据经模板转成属性估计与基于属性的推理问答。

动态分支处理视频事件，动作是粗筛、选段、密集多模态标注。先用六大类 26 细类事件库的关键词匹配标题描述标签，再把保留关键词扩展为物体加交互加可见结果的短语。用 Qwen3-VL-Embedding-8B 把重叠视频片段与短语编码到同一空间算余弦相似度，取最匹配邻段合并以保留前态、交互与后果。

\[s_{ij}=\frac{E_{v}(v_{i})^{\top}E_{t}(q_{j})}{\lVert E_{v}(v_{i})\rVert_{2}\lVert E_{t}(q_{j})\rVert_{2}},\qquad v_{j}^{\star}=\arg\max_{v_{i}}s_{ij},\]

该式目标是定位与事件短语最相关的短时区间。然后把选中片段、采样帧与同步音频波形一起交给商用多模态模型，分别写视觉描述与听觉描述，再结合物理先验写交互与状态变化解释，三者分开保留以便核对。视听关联只在时间差小于事件相关容限时成立。

\[\Delta t_{e}=\left|t_{e}^{\mathrm{v}}-t_{e}^{\mathrm{a}}\right|\leq\delta_{e},\]

该式目标是避免把无关声音与可见动作硬绑在一起。最后同样经模板转成事件描述、时间推理与物理解释问答，附原视频音频作输入。下图展示 2 分支的 5 步流水线与问答形态。

上排静态分支从数据集过滤经物理画像、原型检索、属性精修到训练数据构造，下排动态分支从粗过滤经片段选择、密集多模态标注到训练数据构造，两排末端都给出问答对，前者问性质支撑，后者问事件时序与解释。

> **看图路径：** 1. 沿上排静态分支从左到右走完过滤、画像、原型检索、区间校验到问答生成；2. 沿下排动态分支看事件关键词、视频短语相似度选段、视听波形与三类注释如何对齐；3. 对照两分支末端问答例子：静态问性质与支撑，动态问落地后发生了什么

[![原论文 Figure 4：Physics-aware data construction.](https://arxiv.org/html/2609.25738v1/datappl.png)](https://arxiv.org/html/2609.25738v1/datappl.png)

*论文图 4。原论文 Figure 4:：“Physics-aware data construction. (a) The static branch filters images, identifies objects and materials, retrieves object–material prototypes, and refines physical properties…”。*

该图的可复述要点是静态用区间与兼容性把模型估计拉回物理合理范围，动态用共享嵌入选段加视听分开描述保留可核查性。两者组合把内禀属性与交互中显现的视听证据连起来。

**静态物理监督 × 动态物理监督：** 静态物理监督负责把单图中的显著非生命物体锚定到类别、材料、体类型与质量密度等内禀属性，给出可查区间的数值先验；动态物理监督负责把视频中的可见运动与状态变化和声音瞬态按时间对齐，还原初态、中间响应与终态。两者搭配的原因是属性本身不可见，只能在交互中显现，组合后形成从物体身份到交互证据的完整证据链。

**统一全模态序列 × 共享因果 Transformer：** 统一全模态序列负责把文本、视觉合并特征与声学投影特征用边界符拼接到同一对话位置，并对同步视频音频按时间组交错排列；共享因果 Transformer 负责在单一自回归上下文中联合推理。两者搭配是因为只有把异构观测放进同 1 token 空间，原因果注意力才能直接访问跨时间、跨模态的事件对应关系。

**答案状态 × 语音合成条件：** 答案状态指推理主干生成文字答案时的最后一层隐状态序列，保留完整语义；语音合成条件指经投影归一化后与语音侧文本嵌入做交叉注意力得到的序列 U。搭配理由是语言与语音分词长度不一致无法逐位置对齐，用交叉注意力做语义搬运，再交由语音 token 解码器与声码器分别建模序列与波形。

### 三阶段课程如何冻结、奖励与筛选提示词？

训练分 3 个阶段，每阶段从上一检查点初始化。第一阶段是有监督多模态训练，优化自回归下 1 token 损失。1-1 音频对齐只用语音识别监督，只更新音频投影与音频边界嵌入，冻结声视觉编码器、视觉合并器与因果主干，防止改写预训练表示。1-2 跨模态对齐加入图文视频监督，更新视觉合并器、音频投影与边界嵌入，仍冻结编码器与主干。1-3 全模态联合训练解冻因果主干，与合并器投影一起优化，编码器仍冻结，混合图像视频音频语音文本具身与物理指令，让主干学联合推理。

第二阶段是强化学习，共享组相对策略优化更新规则，但奖励粒度不同。2-1 渐进式多模态强化学习用二值最终答案奖励，按数学逻辑到图文视频再到混合模态推进，验证器随题型变而信号始终是答案正确。2-2 细粒度物理感知强化学习用加权组合奖励，含答案、中间物理感知与格式三项，中间项再分属性与材料，权重各自和为 1，图像音频题要求同时说出属性与材料证据，视频题要求从时间观测推断属性。

第 3 阶段是音频生成训练，冻结编码器、主干与声码器，只更新答案投影交叉注意力与语音 token 解码器，用语音生成损失适配输出通路。

提示词筛选在优化前进行。对候选池每个提示词，用固定 rollout 策略同解码配置采样 4 个随机回答，按题型评估器打分，只保留组内出现两种以上奖励值的提示词，二值奖励下即去掉全对与全错组， graded 奖励下保留任意多分数组。该图把文本数学、图像、视频、音频 4 类输入经多次 rollout、奖励评估与多样性过滤变为过滤后语料的过程画出，右侧输出保留条件写成集合基数大于 1。

左侧 4 类数据源经中间多次采样、按题型打分、多样性过滤 3 步变为右侧过滤语料，中间第 3 步用全对全错丢弃与混合保留的示意说明何为多样性，右侧同时列出任务无关过滤与更好优化信号等收益。

> **看图路径：** 1. 从左侧四类数据源出发，看中间三步的箭头顺序；2. 看中间第 3 步保留与丢弃两组示意：全对或全错被滤除，混合正误被保留；3. 看右侧输出公式中集合基数大于 1 的保留条件

[![原论文 Figure 5：Rollout-based reward-diversity filtering for RL data curation.](https://arxiv.org/html/2609.25738v1/rl_data.png)](https://arxiv.org/html/2609.25738v1/rl_data.png)

*论文图 5。原论文 Figure 5:：“Rollout-based reward-diversity filtering for RL data curation.”。*

该图说明过滤与组相对优化的一致性：组内无排序则优势为零，过滤把算力集中到有排序的组。报告称该过滤去掉过半候选并节省超过 2600 GPU 小时，具体分项见后文成本表。训练课程全图进一步给出每阶段可训练与冻结部件及奖励公式。

上排从左到右是音频对齐、跨模态对齐、全模态联合训练与音频生成训练，下排是两段强化学习，左段只有答案奖励与组相对优势更新，右段有最终答案、中间物理感知与格式三项加权奖励，箭头标明阶段继承顺序与冻结可训练图标。

> **看图路径：** 1. 先看上排四个阶段框的冻结与可训练图标变化；2. 再看下排两段强化学习的奖励框：一段只有答案奖励，二段有三项加权奖励；3. 沿底部箭头确认每阶段从上一检查点继续初始化的顺序

[![原论文 Figure 7：Training curriculum of OmniFysics-Nano-V2.](https://arxiv.org/html/2609.25738v1/training.png)](https://arxiv.org/html/2609.25738v1/training.png)

*论文图 7。原论文 Figure 7:：“Training curriculum of OmniFysics-Nano-V2.”。*

该图的可执行读法是先核对每阶段火焰与雪花图标，再核对下排奖励项，最后确认语音阶段只动输出分支。原文还描述可微物理引擎耦合做感知模拟校准循环，但未给出可复现的引擎实现细节，本节只记为待验证的扩展，未纳入主训练复述。

**奖励多样性过滤 × 组相对策略优化：** 奖励多样性过滤负责在优化前用固定 rollout 策略对每个候选 prompt 采样 4 个随机回答，只保留组内奖励出现两种以上取值的 prompt；组相对策略优化负责在组内做奖励归一化得到优势并做裁剪更新。搭配原因是组内奖励全相同时归一化优势为零、该组无学习信号，过滤把算力集中到能暴露质量排序的样本上。

**渐进式多模态强化学习 × 细粒度物理感知强化学习：** 渐进式多模态强化学习只用二值最终答案正确奖励，按数学逻辑到图文视频再到混合模态扩大输入复杂度；细粒度物理感知强化学习在答案奖励之外增加中间物理属性与材料奖励和格式奖励。搭配原因是先把答案正确率做稳，再用中间感知反馈区分是没看到证据还是下游推理错，恢复跨模态性能并强化物理推理。

### 模型从哪些权重起步，在什么硬件与指标下评测？

模型与训练按原文交代：共享主干与视觉接口从 Qwen3.5-4B 初始化，声学编码器从 Whisper Medium 初始化，语音 token 与声码器从 CosyVoice3 初始化，新引入的模态投影与答案条件模块按阶段策略优化。有监督训练用 VeOmn 实现，强化学习用 MS-SWIFT 实现，所有阶段在 64 块 NVIDIA H100 上用 bfloat16 精度训练。评测分 5 组能力：通用多模态理解、音频理解、全模态与视频理解、物理世界理解推理、数学与物理推理，每项用各自原生指标，另有人评比较生成语音。基线覆盖视觉语言与全模态两类，按报告参数量分组，分数越高越好。

数据分布总计 80.48M 样本，原文图给出图像、音频、文本、视频等多类占比，复现时应以该分布为准而非自行猜划分。硬件预算方面，奖励多样性过滤的节省量单独列表，训练总耗未完整披露，推理延迟与帧率未测量，不能承诺效率改善。代码与权重链接本次验证为可用，状态码均为 200，可写当前已公开可用。

### 主结果在哪些题上领先，代价与未胜出项是什么？

要回答的主问题是物理监督是否在保持通用能力的同时提升时间跨模态与物理题。比较条件是同表内多基线同指标，方向为越高越好，关键数字保留原文写法与精度。物理理解组中，本模型在 FysicsEval 理解与 PhysUniBench 上取得高分并拉开百分点差距，同时在预测与推理及 PhysBench、PAI-Bench、QuantiPhy 上领先 7B 基线。下表整理物理组的核心对照，包含实际可运行的 7B 全模态基线与本方法。

物理组比较问题是属性感知与 grounded 推理是否同时提升，公平条件是同表同指标同基线，方向为分高者优，重点看理解与综合物理基准。

| 任务组 | 评测项 | 本模型分数 | 相对基线提升 | 对比对象 |
| --- | --- | --- | --- | --- |
| 物理理解 | FysicsEval Understanding | 98.27% | 5.57% | 最强基线 |
| 物理综合 | PhysUniBench | 59.42% | 11.42% | 最强基线 |
| 物理预测推理 | FysicsEval Prediction, Reasoning, Understanding | 45.09, 3.26, 98.27 | 17.19, 1.13, 11.97 points | Qwen2.5-Omni-7B |
| 物理多项 | PhysBench, PAI-Bench, QuantiPhy, PhysUniBench | 领先所有列出模型 | 3.77, 1.61, 6.42, 13.02 points | Qwen2.5-Omni-7B |

表后解释是物理监督的收益覆盖属性、感知与 grounded 推理多形态，但代价是依赖商用模型估计与原型区间，属性值为先验估计而非测量。未胜出项必须指出：通用组中 MMBench-V1.1 与 AI2D 最强仍是 OmniVinci，MMMU 最强是 Qwen3.5-4B 参考，说明本文优势集中在物理与跨模态而非全部通用题。

音频与全模态组的问题是视听联合是否带来参数效率。公平条件仍是同表多基线，指标为原生分数。下表整理音频与跨模态的关键增量。

跨模态比较问题是时间与视听证据整合是否被模型利用，公平条件是同基准同基线，方向为分高者优，重点看 Daily-Omni 与视频基准的大增量。

| 任务组 | 评测项 | 本模型分数 | 超 7B 基线 | 对比对象 |
| --- | --- | --- | --- | --- |
| 音频理解 | MMAU, MMAR | 76.80, 66.10 | 5.30, 9.40 points | Qwen2.5-Omni-7B |
| 音频扩展 | MMAU, MMAR | 76.80, 66.10 | 8.60, 27.31 points | Kimi-Audio |
| 全模态视频 | OmniBench, WorldSense, Daily-Omni, FysicsWorld, Video-MME | 第一 | 4.82, 14.92, 31.82, 2.29, 16.59 points | Qwen2.5-Omni-7B |

表后解释是最大增量出现在 Daily-Omni、Video-MME 与 WorldSense，与视听整合目标一致；语音生成人评中自然度、清晰度与语义忠实分别领先原生 CosyVoice3 约 32.8、17.4 与 42.4 个百分点，最大在语义忠实，支持答案条件通路保留了回答内容。限制是人评只比较原生声码器，未测延迟与误判率，不能推广为部署收益。

### 拿掉静态或动态分支，以及单模态输入会发生什么？

消融要回答分支分工与模态必要性。所有变体同初始化同优化同轮次，在策略优化前评测。完整有监督在九项上最强，去掉双分支后各项下降，静态缺失最伤属性题，动态缺失最伤时间跨模态题。下表用原文连续句覆盖的数字整理分支效应。

分支消融的比较问题是 2 分支是否互补，公平条件是同初始化同训练配方且在强化学习前评测，方向为分高者优，重点看属性题与跨模态题的差异化下降。

| 条件 | 指标示例 | 完整有监督 | 去双分支提升 | 关键分工 |
| --- | --- | --- | --- | --- |
| 全分支 | PhysBench, QuantiPhy, PhysUniBench | 46.72, 38.72, 56.67 | 0.74, 8.52, 7.47 points | 最强 |
| 全分支 | FysicsWorld, OmniBench, Daily-Omni | 58.45, 52.54, 82.58 | 7.60, 2.78, 10.13 points | 动态主导 |
| 全分支 | MMAR, MMBench-V1.1, MMStar | 59.80, 82.40, 72.82 | 2.18, 0.49, 0.61 points | 组合最优 |
| 去静态 | QuantiPhy 下降 | 动态单独 | 7.47 points | 静态管属性 |

表后解释是静态单独对 MMAR 几乎无增益甚至微降，但与动态组合时达到最高 59.80，支持互补而非简单叠加；动态单独对 FysicsWorld 与 Daily-Omni 贡献大，去动态分别掉 7.03 与 9.40 点。反例是通用题提升小，说明物理数据未损害通用但也未大幅推高通用。

缺模态评测的问题是单模态是否足够。条件是文本问题不变，只保留音频、只保留视觉或两者都保留。结果是全输入在 5 个全模态基准上对所有模型都最优，本模型双流比单音频高 15.50 到 33.50 点，比单视觉高 14.23 到 40.42 点，且信息强的单模态随任务变：OmniBench 与 FysicsWorld 偏音频，WorldSense、Daily-Omni 与 Video-MME 偏视觉。这支持视觉给几何运动、音频给 timing 与接触响应的分工，必须联合才能连起何事、何时与何因。

强化学习分阶段效应是渐进式先拉定理与物理推理，细粒度再恢复跨模态。相对有监督，最终检查点在十项中九项提升，PhyX 加 17.80、OmniBench 加 8.41、HallusionBench 加 7.79，WorldSense 微降 1.06 点。中间检查点在 OmniBench 与 PhysBench 偏低，细粒度阶段相对中间点在四项上大回升，TheoremQA 仅回落 0.25 仍高于起点。这支持先答案正确再中间感知的课程顺序。

成本过滤的比较问题是哪些提示词值得训练。规则是 4 次随机回答奖励多样才保留。下表整理 4 类数据的剔除率与节省算力。

过滤比较问题是能否去掉无排序组而不伤信号，公平条件是同 rollout 策略同打分器，指标为剔除率与节省 GPU 小时，方向为剔除高且保留多样组。

| 数据类型 | 剔除率 | 节省算力 | 保留规则 |
| --- | --- | --- | --- |
| Mathematical Reasoning | 73.99% | 1,239 GPU-hours | 组内多值才留 |
| Image-Text Perception | 44.15% | 416.3 GPU-hours | 组内多值才留 |
| Video Perception | 69.79% | 530.2 GPU-hours | 组内多值才留 |
| Multimodal Perception | 57.69% | 502.2 GPU-hours | 组内多值才留 |

表后解释是合计节省 2687.7 GPU 小时，数学与视频剔除最高，说明大量全对或全错组本就无组相对信号。代价是筛选依赖当前策略的随机行为，换策略或解码配置后结论可能变化，待验证跨策略稳定性。

### 哪些结论还不能下，缺了哪项验证？

论文直接报告的是基准分数、消融增量与过滤节省，支持双分支互补与 2 阶段课程有效的判断。有限解释是物理感知训练迁移到音频，这只是跨基准相关，未做因果干预，不能说音频能力必然来自物理监督。未验证推测包括可微物理引擎闭环与具身自进化：报告描述用估计的质量摩擦等参数化仿真并比较终点轨迹速度以回传校准，但引擎为内部实现、无可运行细节与定量误差，不能当作已验证收益。缺失证据不是技术错误，但复述时要用可能待验证表达。

未测量误判率、延迟、输出帧率与真实机器人试错成本，不承诺这些量改善。训练资源只给节省的相对量，未给总耗；推理开销未拆编码器、主干与语音分支，不能从 4B 参数推定延迟低。总体趋势不等于每组每步成立，例如 WorldSense 在最终阶段微降，通用组仍有被 7B 与 4B 参考超越的列。像素不能精确辨别的雷达数值不硬写，以正文连续句数字为准。

表头与图注若与正文算术冲突，应标注冲突而不编造聚合口径，本文暂未发现需要调和的核心冲突，但雷达图数值以表格与正文为准。

### 要复现先做什么，需要哪些超参与信息条件？

复现先做三件事。第一拉取已公开的代码与权重链接，本次验证均为可用状态码 200，可写当前已公开；区分代码开源、权重下载与系统可运行，权重可下载不等于一键可运行全流程。第二按阶段冻结复现训练：1-1 只训音频投影与边界嵌入，1-2 加视觉合并器，1-3 解冻主干但冻结编码器，强化学习两段共享组相对更新但奖励不同，语音阶段冻结推理器与声码器只训投影交叉注意力与语音解码器。

第三复现数据管线的信息条件：静态需 1209 原型库、体类型兼容规则与 1 次重估丢弃规则，动态需六大类 26 细类事件库、共享嵌入选段合并邻段、三描述分开保留与事件相关时间容限。关键超参保留原文：rollout 默认 K 为 4、组内多值保留、权重和为 1 的加权奖励、64 卡 H100 与 bfloat16。还需补的验证是换商用标注模型后的稳定性、换 rollout 策略后的过滤率、以及单模态缺失在自建视频上的可重复性。教学例子明确标为例子，不添加无源数值。

常见误解是把属性估计当测量，原文案例已说明为先验估计，定量可靠性以物理基准为准；另一误解是把过滤节省当总训练成本，原文只报告避免的算力，需另测总耗。

### 何时值得尝试这种物理监督与课程？

当任务需要从外观推内禀属性并在交互中验证时值得尝试，例如接触丰富的搬运、碰撞声定位、材料相关的问答与定量运动学。此时静态区间约束能减少离谱估计，动态视听对齐能固定事件 timing，中间感知奖励能定位是没看到还是推理错，奖励多样性过滤能把有限算力集中到有排序的样本。若任务只是通用描述与指令跟随，且无物理量评估，引入全套流程的收益可能有限，通用组的小增量与个别被超越列已说明边界。

收束是该工作把物理理解拆成可监督的证据链：属性先验、时间对齐的视听证据、中间感知奖励与课程优化，四者缺一则链条断裂。复述方法时沿输入到表示到组件到目标到输出走一遍，再核对数据集、基线、阶段、指标单位与聚合对象，区分百分点与相对百分比，不把自动指标当人评，不把搜索最优当可部署收益。

<details>
<summary>📎 论文与评分元数据</summary>

排名：前25% | 文档类型：模型报告 | [arXiv 原文](https://arxiv.org/abs/2609.25738)

</details>

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。

- 评分规则：type-aware-v1

- 评分模型：muse-spark-1.3-contributor

- 评分请求协议：openai_responses

---

[← 返回 2026-09-24 语音/音乐/音频论文速递](/audio-paper-digest-blog/posts/2026-09-24/)
