---
title: "AD-Mamba: Architecture-Complementary Knowledge Distillation for Efficient and Robust Audio Classification"
date: 2026-10-21
draft: false
tags: [音频分类, 知识蒸馏, 状态空间模型, 高效推理, 鲁棒性]
categories: [论文速递]
description: "AD-Mamba 针对长而稀疏且有噪声的音频分类，用先 CNN 后 Transformer 的多阶段蒸馏把局部谱时纹理和全局语义判别能力转入 Mamba 主干，在 AudioSet 上以 30M 参数达到 50.3% mAP 并在长音频与噪声填充下保持更稳的精度，代价是三阶段共 400 轮蒸馏训练与对强教师的依赖。"
hiddenInHomeList: true
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_arxiv_id: "2610.27713"
paper_digest_workbench_contract: "researcher-workbench-v1"
paper_digest_reader_title: "AD-Mamba：把 CNN 局部性和 Transformer 全局性蒸馏进 Mamba 的音频分类方法"
paper_digest_original_title: "AD-Mamba: Architecture-Complementary Knowledge Distillation for Efficient and Robust Audio Classification"
paper_digest_arxiv_version: 1
paper_digest_arxiv_versioned_id: "2610.27713v1"
paper_digest_arxiv_abs_url: "https://arxiv.org/abs/2610.27713v1"
paper_digest_arxiv_pdf_url: "https://arxiv.org/pdf/2610.27713v1.pdf"
paper_digest_primary_task: "音频分类"
paper_digest_tags_contract: "paper-tag-flat-tags-v2"
paper_digest_tags_selection_contract: "paper-tag-selection-v2"
paper_digest_tags_registry_version: "paper-tag-catalog-v2"
paper_digest_tags_registry_sha256: "cdef54423b5dfc00a1d017ef6639446d2ecd1d9c1acf71c8eb4f6219a46b7ba8"
paper_digest_tags_concepts: [{"facet":"task","id":"task.audio-classification","label":"音频分类"},{"facet":"method","id":"method.distillation","label":"知识蒸馏"},{"facet":"method","id":"method.state-space","label":"状态空间模型"},{"facet":"research_focus","id":"research_focus.efficiency","label":"高效推理"},{"facet":"research_focus","id":"research_focus.robustness","label":"鲁棒性"}]
paper_digest_primary_method: "知识蒸馏"
paper_digest_score: 7.1
paper_digest_rank_bucket: "前50%"
paper_digest_document_type: "方法研究"
paper_digest_one_sentence: "AD-Mamba 针对长而稀疏且有噪声的音频分类，用先 CNN 后 Transformer 的多阶段蒸馏把局部谱时纹理和全局语义判别能力转入 Mamba 主干，在 AudioSet 上以 30M 参数达到 50.3% mAP 并在长音频与噪声填充下保持更稳的精度，代价是三阶段共 400 轮蒸馏训练与对强教师的依赖。"
paper_digest_authors: [{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Junyu Wang"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Tianrui Wang"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Meng Ge"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Longbiao Wang"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Xiaobao Wang"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Jianwu Dang"}]
paper_digest_abstract_sha256: "75e93a80960ec907fc158d01c5335547fab1eeb0c2cfd2a39f88b5f4d93ec431"
paper_digest_sidecars: {"citation.bib":{"sha256":"07c27a26dc68421a5f3ed48470ebc295f2d6d2eb18f6beccdb957b82b2aa4f6d","url":"/audio-paper-digest-blog/data/papers/2026-10-21/2610-27713/citation.bib"},"citation.json":{"sha256":"4f7e7f06f4ac79a797fdf5c5a920199c75cc507a631ec4e0e1805970746e3a43","url":"/audio-paper-digest-blog/data/papers/2026-10-21/2610-27713/citation.json"},"citation.ris":{"sha256":"3244522627eee7b2a72c823feb267603ffd620d3c26636e911117910ca9b5495","url":"/audio-paper-digest-blog/data/papers/2026-10-21/2610-27713/citation.ris"},"rethink-context.json":{"contract":"paper-research-context-v2","sha256":"3023f3f1d2eb7ebcf3cd3af1392f649b8d64a3f380602c85215b32b631e3e892","url":"/audio-paper-digest-blog/data/papers/2026-10-21/2610-27713/rethink-context.json"}}
paper_digest_api_reader_contract: "beginner-researcher-v3"
paper_digest_api_reader_article_sha256: "56a69f4df0b8eb9e17aeaf4246bd89b8292ca1e5f6b791617aada521a96aa87b"
paper_digest_api_reader_plan_sha256: "bf33371d6ef016093ef664731ba1c3910b49cebdb12de560a3c7b5a9c9668e41"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings-v4"
paper_digest_api_reader_source_bindings_sha256: "94189a5fbacd5432d789f30377cc3e888f1ea9d691a591ee056235ad0a1151ac"
paper_digest_api_reader_source_table_count: 4
paper_digest_api_reader_source_formula_count: 2
paper_digest_api_reader_structured_artifacts_sha256: "73888ede0059adecb1a4adf1f0683a59086a4b47d949d9a3d624999b1f71fd32"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity-v1"
paper_digest_api_reader_author_identity_sha256: "c518510c38eacb4ab9eaafa9e9a04a388c61083be8f84fdb42d9dc2a42971113"
paper_digest_api_reader_author_count: 6
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity-v1"
paper_digest_api_reader_resource_identity_sha256: "1a5c59ebc4859931a2c25124c98268c9bf915a0a5d6f53b3774c113d7fd669ad"
paper_digest_api_reader_resource_count: 0
paper_digest_api_reader_figure_persistence: "ephemeral-no-persisted-figure-assets-v1"
paper_digest_api_reader_decision_projection: "api-reader-decision-projection-v2"
---

# 📄 AD-Mamba：把 CNN 局部性和 Transformer 全局性蒸馏进 Mamba 的音频分类方法

> 英文题目：*[AD-Mamba: Architecture-Complementary Knowledge Distillation for Efficient and Robust Audio Classification](https://arxiv.org/abs/2610.27713v1)*

<!--paper-tag-hierarchy-v1:start-->

**研究分类**

- **研究任务**：[音频分类](/audio-paper-digest-blog/papers/?concept=task.audio-classification)
- **研究方法**：[知识蒸馏](/audio-paper-digest-blog/papers/?concept=method.distillation)；[状态空间模型](/audio-paper-digest-blog/papers/?concept=method.state-space)
- **研究重点**：[高效推理](/audio-paper-digest-blog/papers/?concept=research_focus.efficiency)；[鲁棒性](/audio-paper-digest-blog/papers/?concept=research_focus.robustness)

<!--paper-tag-hierarchy-v1:end-->

> 评分：**7.1/10** | 创新 1.5/2 | 技术严谨 1.2/1.5 | 实验充分 1.3/1.5 | 清晰度 0.8/1 | 影响力 1/1.5 | 开源 0/1.5 | 可复现 0.3/0.5 | 工程/实践 1/1.5


## 👥 作者与机构

- Junyu Wang：机构信息未能在本次解析中与作者逐人可靠绑定
- Tianrui Wang：机构信息未能在本次解析中与作者逐人可靠绑定
- Meng Ge：机构信息未能在本次解析中与作者逐人可靠绑定
- Longbiao Wang：机构信息未能在本次解析中与作者逐人可靠绑定
- Xiaobao Wang：机构信息未能在本次解析中与作者逐人可靠绑定
- Jianwu Dang：机构信息未能在本次解析中与作者逐人可靠绑定

## 📌 核心摘要

音频分类需要给一段声音打上一个或多个语义标签，难点在于声音事件在时频上局部细节丰富，又可能散布在很长的录音里，还常被静音段或噪声打断。Transformer 建模长距离依赖能力强，但序列变长时计算量按平方增长，且依赖显式位置编码。Mamba 一类状态空间模型（状态空间模型，State Space Model）用递推状态传递信息，计算量随长度线性增长，更适合长音频，但此前在 AudioSet 等多标签基准上的精度落后。AD-Mamba 把输入语谱图切块编码后送入堆叠的 Audio Mamba Block，再经下采样、池化和线性层输出标签，训练分三个阶段进行：先用卷积教师指导主干适应局部时频结构，再冻结主干、用同一卷积教师训练新加入的局部增强分支，最后换用 Transformer 教师提炼全局语义判别能力。与只用单一教师或直接联合训练已有方法的区别在于按局部到全局的顺序继承两种异构偏置，同时保留 Mamba 的线性序列建模效率。在 AudioSet 评测集的 527 类多任务上，AD-Mamba(S) 以 30M 参数取得 50.3% 平均精度（平均精度，mAP），超过 86M 参数的 CED 的 50.0%，适用范围集中在 16 kHz 输入的通用音频分类与迁移任务，合成长音频和人工填充噪声下的结论还需在真实长时监测数据上验证。原文披露训练需要 24GB 显存，未披露训练时长与推理时延的完整测量。

## 🔗 开源与复现资源

本次未形成可展示的已核验资源记录，开放状态尚未核实。

可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 音频分类要从声音里保留什么信息

音频分类的输入是一段波形，目标是给出它包含哪些声音事件的标签。AudioSet 这类任务是多标签的，一段 10 s 音频可能同时有人声、音乐和环境噪声，评价用平均精度均值 mAP，数值越高表示在 527 类上的排序越准。

实际部署的难点是音频很长、有效事件稀疏，还混有静音或噪声，且计算预算有限。模型必须在长序列上保留细粒度时频纹理，又能在全局整合语义，还不能让计算量随长度平方增长。本文讨论的正是如何在这种条件下兼顾精度、效率和鲁棒性。

### CNN、Transformer 和 Mamba 各解决什么困难

已有路线主要有 3 条。CNN 靠局部感受野和平移不变性高效提取谱图上的局部模式，但对长程时间依赖建模弱。Transformer 靠自注意力捕捉全局上下文，成为主流标准，但计算量随序列长度平方增长，且依赖显式位置编码，在变长音频上泛化吃力。Mamba 类状态空间模型用隐状态递推实现线性复杂度的长序列建模，不需要显式位置编码，但此前在音频分类精度上落后于 Transformer，说明训练策略还没有充分发挥它对时变谱时特征的潜力。

知识蒸馏是把大教师的知识转给小学生的训练范式。音频领域常见的是同架构或单教师蒸馏，例如 Transformer 教 Transformer，或 Transformer 教 CNN。跨架构蒸馏的价值在于继承不同归纳偏置，本文要回答的是如何把 CNN 的局部结构知识和 Transformer 的全局上下文知识，按顺序都交给 Mamba 学生。

**卷积神经网络 × 平移等变性：** 卷积神经网络指用小卷积核在时频图上滑动提取局部模式的网络，平移等变性指输入平移时特征也跟着平移的性质；二者搭配说明 CNN 教师为什么擅长捕捉局部谱时纹理，本文用它先教 Mamba 适应音频的细粒度结构。

**Transformer × 自注意力：** Transformer 指靠自注意力建模序列中任意位置关系的架构，自注意力指用查询与键的相似度加权汇聚全局信息；二者搭配说明 Transformer 教师能提供长程上下文和语义判别知识，本文用它在最后阶段精修 Mamba 的全局建模。

下面这张图展示了本文选用的两类互补教师的输入输出路径，读图时重点看它们分别从谱图提取什么再送入分类头，横轴是模型结构纵向展开，纵轴是信息抽象程度。

> **看图路径：** 1. 先看左侧 CNN 分支从输入谱图到 3x3 卷积、15 个 IR 块、池化和分类头的纵向主路；2. 再看右侧 ASDA 分支的切块、CNN 编码器、CLS 标记与 12 层差分注意力编码器的连接；3. 对比两路输出都经线性头得到预测，理解局部与全局两种知识来源

[![原论文 Fig. 1：Illustration of the complementary teacher architectures used in our distillation framework.](https://arxiv.org/html/2610.27713v1/CNN_and_Transformer.png)](https://arxiv.org/html/2610.27713v1/CNN_and_Transformer.png)

*论文图 1。原论文 Fig. 1:：“Illustration of the complementary teacher architectures used in our distillation framework.”。*

从像素可见，左图是动态 CNN 教师，从输入谱图经 3x3 卷积、15 个倒残差块、平均池化和线性头得到标签，强调局部谱时偏置。右图是 ASDA 教师，从输入谱图经切块和 CNN 编码器形成嵌入，加上可学习的 CLS 标记，再经 12 层差分注意力编码器和线性头得到标签，强调全局依赖。两路都输出预测 logits，后续作为蒸馏的模仿目标，这是理解分阶段教学的前提。

### 论文要解决的具体问题是什么

论文指出 Mamba 在音频分类上效率好但精度落后，根源不是扫描本身不可用，而是缺少能把 2 维谱图的局部纹理和全局语义都教给它的训练流程。单教师蒸馏只能继承一种偏置，无法同时补齐这两块。

因此问题被定义为设计一个从局部到全局的多阶段蒸馏流程：先用 CNN 教师让 Mamba 适应局部谱时结构，再用 Transformer 教师精修全局语义判别，同时保持 Mamba 的线性时间建模和隐式时序编码优势。验证要在标准 AudioSet 精度、长音频拼接、零填充稀疏和加噪干扰，以及跨数据集迁移上同时成立。

### AD-Mamba 的整体处理流程是怎样的

拿一个音频样本为例，先把它转成 128 维对数梅尔谱图，尺寸随时间增长为 128 乘 100t。再经 2 维卷积的补丁嵌入降到一半时频分辨率，形成初始特征图。随后经过堆叠的 Audio Mamba Block 和三次下采样，逐步得到不同尺度的谱时表示，最后对末级特征做平均池化并经线性层输出 527 类的预测分数。

学生有两个尺度，AD-Mamba(S) 在四层分别堆 2、2、8、2 个模块，AD-Mamba(M) 是 2、2、20、2，通道从 96 开始每次下采样翻倍。教师在训练时冻结，只提供软目标；学生全程同时受真实标签的分类损失和对教师的蒸馏损失约束，按阶段更换教师。下面的结构图把这种多尺度主干和模块内部件一次讲清，横轴是前向处理顺序，纵轴是不同分支的展开。

> **看图路径：** 1. 沿顶部主链看补丁嵌入、四级 Audio Mamba Block 与三次下采样的尺度变化；2. 看中部 Audio Mamba Block 内局部感知单元、状态空间模块与前馈网络的残差连接；3. 看底部四向扫描示意与空间分支、通道分支如何与主扫描相乘融合

[![原论文 Fig. 2：Overview of the proposed AD-Mamba architecture for audio spectrogram classification.](https://arxiv.org/html/2610.27713v1/AD-Mamba.svg)](https://arxiv.org/html/2610.27713v1/AD-Mamba.svg)

*论文图 2。原论文 Fig. 2:：“Overview of the proposed AD-Mamba architecture for audio spectrogram classification.”。*

从像素可见，顶部主链是音频输入、补丁嵌入、4 组 Audio Mamba Block 与下采样交替、均值池化、线性输出。中部把一个 Audio Mamba Block 展开为局部感知单元、层归一化、状态空间模块、前馈网络的残差组合。下部给出四向选择性扫描的 4 种走线，以及空间分支和通道分支与主扫描输出相乘做自适应加权的结构。这张图说明了长程扫描与局部感知在何处汇合。

### Audio Mamba Block 如何同时看局部和长程

Audio Mamba Block 要解决的是标准 1 维扫描不适应 2 维时频结构的问题。它的输入是当前尺度的特征图，输出是同尺度增强后的特征图。块内先用局部感知单元提取谱图邻域模式，再送入改进的状态空间模块捕捉长依赖，最后用前馈网络做通道变换，每步都有残差和归一化保持稳定。论文为减复杂度去掉了常规的线性门控。

为适应 2 维结构，扫描采用四向选择性扫描，4 个方向分别扫描再融合，参数量通过分支复制保持可比。空间分支用池化和卷积找时频重要区域，通道分支用压缩激励学通道关系，两路经 Sigmoid 生成系数与扫描输出相乘，实现用很少参数强调有价值部分。

**对数梅尔谱图 × Audio Mamba Block：** 对数梅尔谱图指把波形转到时频域并按梅尔刻度压缩的二维输入，Audio Mamba Block 指本文处理该谱图的基本模块；二者搭配说明二维时频结构需要同时做长程扫描和局部感知，模块内用四向扫描加局部感知单元和空间通道分支来兼顾两者。

**状态空间模型 × Mamba：** 状态空间模型指用隐状态递推描述输入到输出动态的序列模型，Mamba 是其中让输入矩阵随输入变化的选择性版本；二者搭配说明学生主干既有线性复杂度的递推效率，又能随音频内容动态保留信息，适合长音频但需要外部知识来补足判别力。

该模块的递推含义可用选择性扫描公式概括，它说明当前输出如何由历史输入经时变衰减加权求和再加上直通项得到。

\[y_{k}=\mathbf{C}_{k}\underbrace{\left(\sum_{i=1}^{k}\left(\prod_{j=i+1}^{k}\bar{A}_{j}\right)\bar{B}_{i}\mathbf{x}_{i}\right)}_{\text{context-aware memory}}+\mathbf{D}\mathbf{x}_{k}\]

公式中 y_k 是当前输出，x_i 是历史输入，B 随输入变化以强调相关特征，A 控制从 i 到 k 的信息保留衰减，C 把记忆投影为输出，D 是跳连。求和上限是 k 体现因果性，乘积项体现时间衰减，整体复杂度为序列长度的线性量级，这正是它能处理长音频的计算基础。

### 两类教师各自提供什么知识

CNN 教师采用动态 CNN 主干，含 15 个倒残差块，融合动态卷积、动态激活和坐标注意力，并跨块共享参数以兼顾效率。它把 t 秒音频先转成 128 维谱图，经步长 2 的 3x3 卷积降维，再经倒残差块学多尺度局部特征，最后池化加全连接输出标签。原文把它从 32 kHz 调整到 16 kHz 输入以便公平比较，复现的 16 kHz 版本在 AudioSet 上为 47.7% mAP。

Transformer 教师采用 ASDA，输入同样是 128 维谱图，切成不重叠块并线性投影到 768 维，加固定 1 维位置编码和 CLS 标记，再经 12 层带差分注意力的编码器。差分注意力用双 Softmax 重算标准自注意力，缓解注意力分配不均。微调时只保留编码器加线性分类层。两者分工明确，前者教局部结构，后者教全局语义。

### 三阶段蒸馏如何组织冻结与更新

训练用同一增强后的谱图同时送教师和学生，保证语义一致。增强包括 SpecAugment、随机噪声注入、mixup 和时间轴滚动，频率和时间掩蔽长度分别为 48 和 192，mixup 系数 0.5。优化器用 Adam，批量 48，最大学习率 2e-4，前 5 轮预热。蒸馏温度设为 2.0 以软化教师分布，损失权重设为 0.5 平衡真实标签与软目标。

**知识蒸馏 × 温度系数：** 知识蒸馏指让学生模仿教师输出分布的训练方式，温度系数指软化教师 logits 分布的超参数；二者搭配说明学生不只学硬标签，还学教师给出的类别间相对置信，本文用温度 2.0 和权重 0.5 平衡真实标签与教师软目标。

阶段 1 只用 CNN 教师指导不含局部增强分支的核心 Mamba 主干，训练 100 轮，每轮 100,000 条，学习率每 10 轮衰减一半，目标是让主干先适应音频域的局部结构。阶段 2 冻结主干，加入局部感知单元、空间和通道分支，继续用 CNN 教师蒸馏 100 轮，让新模块在局部偏置监督下学细粒度细节。阶段 3 解冻全部参数，换 ASDA 教师精修 200 轮，学习率每 20 轮衰减一半，补齐全局上下文。学生用 ImageNet 预训练的状态空间参数初始化，而非随机初始化。

下图把冻结、可训练与梯度有无的对应关系画得很清楚，读图时注意左右两段共用同一个学生主干的延续关系，实线箭头表示有梯度，虚线表示无梯度。

> **看图路径：** 1. 先区分顶部冻结教师与底部可训练学生的箭头样式；2. 再看同一份谱图同时送入教师和学生得到两路预测；3. 最后看真实标签损失与蒸馏损失如何分别约束左段 CNN 引导和右段 Transformer 精修

[![原论文 Fig. 3：Overall framework of the proposed architecture-complementary multi-stage knowledge distillation…](https://arxiv.org/html/2610.27713v1/Distill.png)](https://arxiv.org/html/2610.27713v1/Distill.png)

*论文图 3。原论文 Fig. 3:：“Overall framework of the proposed architecture-complementary multi-stage knowledge distillation process.”。*

从像素可见，顶部两个教师标为冻结且无梯度，底部学生标为可训练且有梯度。左侧 CNN 阶段和右侧 Transformer 阶段各有一路教师预测与学生预测，分别与真实标签形成分类损失和蒸馏损失。箭头显示学生从左段延续到右段，说明知识是顺序累积而非并行混合。

每阶段的总损失都是真实标签的二值交叉熵与对软化教师输出的 KL 散度的加权和，具体形式如下式所示。

\[\mathcal{L}=(1-\lambda)Loss_{g}(O_{s},L)+\lambda Loss_{d}\left(O_{s},\frac{O_{t}}{\tau}\right)\]

式中 O_s 和 O_t 分别是学生与教师的 logits，L 是真实标签，tau 是温度，lambda 在 0 到 1 之间控制两项相对贡献。该式是贯穿 3 阶段的统一目标，区别只在教师来源和哪些学生参数可更新。

### 在什么数据和条件下测量效果

预训练用 AudioSet 约 1,910,000 条可用的 10 s 片段，527 类多标签，评测用官方 18884 条，指标为 mAP。所有音频重采样到 16 kHz，用 25 ms 窗长、10 ms 步长提对数梅尔谱图。计算量按处理 10 s 音频、重复 100 次平均的浮点运算次数报告。

长音频评测是自造的对照条件，把评估集中语义相关或一致的 10 s 片段拼接成 10 s 到 200 s 输入。零填充是在 10 s 有效音频的任意位置随机插入静音段，噪声填充是按 10 dB 信噪比插入白噪声，分别模拟稀疏监测和背景干扰。下游迁移固定相同的预处理和增强，只调轮数与学习率，FSD50K 用 mAP，ESC-50 用五折平均准确率，DCASE16 用准确率。

### AudioSet 上的精度与代价如何权衡

要回答的核心比较问题是，在相同 16 kHz 输入和相近任务下，AD-Mamba 能否以更少参数和计算量达到或超过强 CNN 与 Transformer 基线，指标 mAP 越高越好，参数量和计算量越低越好。

| 模型 | 参数量 | 计算量 | mAP |
| --- | --- | --- | --- |
| CED | 86M parameters | 45.3G FLOPs | 50.0% |
| AD-Mamba(S) | 30M parameters | 12.7G FLOPs | 50.3% |
| AD-Mamba(M) | 49M parameters | 22.3G FLOPs | 50.6% |

上表提炼了原文报告的关键对照，完整数字以原文连续句为准，计算量按 10 s 输入平均。AD-Mamba(M) 超过 CED，原文称参数少 43%、计算少 51%。更小的 AD-Mamba(S) 仍超过此前所有方法。相比之下，无蒸馏的 Audio Mamba 为 44.0%，带蒸馏的 DASS 为 47.6%，说明仅用 ImageNet 初始化加单教师蒸馏还不够。

限制是该表只覆盖 10 s 标准评测，没有反映变长与噪声下的行为，且 CED 原文用 32 kHz 输入，跨采样率比较时高频信息与成本并不对等。训练成本也不可忽略，3 阶段共 400 轮、每轮 100,000 条，论文还提到训练只需 24 GB 显存，但推理延迟未单独测量，不能把计算量直接等同于实际延迟。

### 长音频拼接下谁掉得更慢

这里的比较问题是，当有效内容被拼接到 200 seconds 时，各模型在同一拼接构造下的 mAP 谁更高，指标越高越好。读图时先看横轴时长，再看纵轴 mAP 百分比，结合指标方向判断高低。

| 时长条件 | AD-Mamba-S | ASDA | EAT | DyMN |
| --- | --- | --- | --- | --- |
| 200 seconds | 42.2% | 9.3% | 9.1% | 34.5% |

上表只整理原文同一句话中同时给出的 4 个数字，避免把不同填充长度的数字混在一起。原文在 10 s 起点 AD-Mamba(S) 为 50.3%，到 200 seconds 仍有 42.2%，而 ASDA 和 EAT 跌到 10% 以下，DyMN 为 34.5%。这支持长序列下 Mamba 更稳的判断。

下面这张图展示了从 10 s 到 200 seconds 的完整下降曲线，读图重点是分叉点和斜率差异。

> **看图路径：** 1. 先看横轴音频时长从 10 s 到 200 s、纵轴 mAP 百分比的变化范围；2. 再对比红色 AD-Mamba 曲线与其他三条曲线随长度增加的下降速度；3. 注意 20 s 附近 Transformer 两条曲线快速下跌而 CNN 与 Mamba 更平缓的分叉点

[![原论文 Fig. 4：mAP performance comparison of audio classification models across varying audio durations.](https://arxiv.org/html/2610.27713v1/audio_duration.png)](https://arxiv.org/html/2610.27713v1/audio_duration.png)

*论文图 4。原论文 Fig. 4:：“mAP performance comparison of audio classification models across varying audio durations.”。*

从像素可见，红色 AD-Mamba 曲线从 10 s 附近的 50% 缓慢下降到 200 seconds 仍在 40% 以上，绿色 DyMN 中等速度下降，蓝色 ASDA 和紫色 EAT 在 20 s 处已急剧下跌到 20% 到 30% 附近，到 100 s 和 200 seconds 贴近 10% 以下。原文解释是 Transformer 依赖显式位置编码，遇到远长于训练的长度时泛化困难，而 Mamba 用状态转移隐式编码时序，衰减更平缓。但结论只在该拼接方式下成立，不能推广到任意真实长尾分布。

### 零填充与噪声填充下表现是否更稳

零填充和噪声填充要回答的是有效事件被稀释时谁更鲁棒。原文把 10 s 有效音频与不同时长的填充拼接，零填充插静音，噪声填充按 10 dB 信噪比插白噪声，位置随机，指标仍是 mAP，越高越好。

原文报告，在 100 s 填充下 AD-Mamba(S) 在零填充保持 46.5% mAP，在 100 s 噪声填充下保持 35.2% mAP，而 Transformer 在 50 s 零填充已接近约 3.0%，DyMN 在 50 s 零填充降到 34.4%，在 20 s 噪声下 Transformer 已低于 10.0%。趋势是 5 s 填充时 Transformer 已落到 CNN 之下，填充加长后差距拉大。

这支持局部与全局知识结合加线性递推在稀疏干扰下更稳，但结论只在该人工拼接、10 dB 白噪声和随机位置下成立，不能推广到任意真实环境噪声或重叠事件密度，也没有报告方差与显著性。

### 初始化与各蒸馏阶段分别贡献多少

消融要回答的是提升来自架构互补设计还是单纯更长训练。比较条件是同一 AD-Mamba(S) 主干，只改变是否用 ImageNet 初始化和启用哪些阶段，指标为 AudioSet mAP，越高越好。

| 配置 | mAP |
| --- | --- |
| 无蒸馏 | 45.3% |
| 仅阶段 1 | 47.2% |
| 阶段 1 加阶段 2 | 47.5% |
| 仅阶段 3 | 49.9% |
| 阶段 2 加阶段 3 | 50.1% |
| 完整 3 个阶段 | 50.3% |
| 随机初始化加全阶段 | 48.9% |

上表数字来自原文的逐项消融，覆盖了无蒸馏到完整流程的爬升。无蒸馏仅 45.3%，加入 CNN 阶段后到 47.5%，换成 Transformer 单阶段可到 49.9%，完整 3 阶段最高 50.3%。随机初始化即使走完全部蒸馏也只有 48.9%，比 ImageNet 初始化低 1.4 个百分点，说明跨模态预训练对音频表示仍有帮助。

为排除训练轮数的影响，原文把纯 Transformer 蒸馏从 200 轮延长到 400 轮，结果为 49.7%，反而略低于 200 轮的 49.9%，明显低于 CNN 到 Transformer 的 400 轮完整流程的 50.3%。这支持增益来自 CNN 先提供的局部偏置，而非单纯多训练。直接一次性训练全部模块再接 Transformer 精修为 50.0%，低于分阶段先主干后局部模块的 50.3%，原文推测是一次优化会分散局部模块对 CNN 细粒度知识的吸收，但这仍是推测而非直接证明。

### 模块、扫描方向与蒸馏超参数是否必要

另一组消融固定完整流程，只改模型部件与超参数，回答哪些设计不可省。去掉空间分支或局部感知单元各掉 0.2 个百分点到 50.1%，说明两者互补。扫描方向上单向为 49.8%，双向为 50.1%，四向最好为 50.3%，参数量通过复制分支保持一致，因此提升可归于多方向上下文而非参数增加。温度 1.0 时为 50.1%，权重 0.3 时为 50.0%、0.7 时为 50.2%，都不如温度 2.0 加权重 0.5 的 50.3%，说明适度软化和均衡软硬目标更有效。

教师与学生能力的对照显示，用 DASS 学生时从较弱的 AudioMAE 教师换到 ASDA 教师提升 1.7 个百分点，固定教师时从 DASS 换到 AD-Mamba 提升 0.5 到 0.6 个百分点，从最弱组合到最强组合共提升 2.2 个百分点。这说明强教师和适配 2 维谱图的学生都重要，但该结论只在 AudioSet 的该几组搭配下测得。

噪声鲁棒的拆分进一步显示，CNN 单教师起点 47.5% 低于 Transformer 单教师的 49.9%，但随噪声加长差距从 2.4 个百分点缩小到 100 s 时的 0.4 个百分点，而完整多阶段在 100 s 时以 35.2% 领先两者。这支持 CNN 带来局部稳定性、Transformer 带来全局判别、两者结合兼得的解释，但未测真实环境噪声谱，仍属人工白噪声条件下的证据。

### 这些结论在什么边界外不再成立

首先长音频、零填充和噪声填充都是自造条件，用评估集拼接和随机位置插入构成，没有统一基准，也没有报告方差与显著性，不能当作通用长音频基准的胜负。

再者教师依赖很强，CNN 教师是复现到 16 kHz 的 DyMN，Transformer 教师是 ASDA，换教师或采样率后增益可能变化。超参数只在 AudioSet 上调优，温度、权重、学习率衰减节奏是否适用于其他采样率或任务未知。下游的提升是在微调后测得，与预训练分布不同，迁移成功不等于零样本可用。最后成本只报告了参数量、计算量和 24 GB 训练显存，没有报告推理延迟、吞吐与误判类型，不能承诺延迟或误报一定改善。

### 复现第一步要准备什么

复现应从数据与初始化开始。把音频统一重采样到 16 kHz，按 25 ms 窗长、10 ms 步长提 128 维对数梅尔谱图，并实现 SpecAugment、随机噪声、mixup 和时间滚动 4 种增强。学生用 ImageNet 预训练的状态空间参数初始化，教师用冻结的 CNN 与 ASDA 权重，训练时教师设为评估模式不更新。

然后按 3 阶段组织冻结与更新。阶段 1 训练不含局部增强分支的主干 100 轮，阶段 2 冻结主干只训新加的局部感知与空间通道分支 100 轮，阶段 3 解冻全部并换 Transformer 教师 200 轮，每轮 100,000 条，Adam 批量 48，最大学习率 2e-4，前 5 轮预热。损失按真实标签的二值交叉熵加温度 2.0 软化的 KL 散度以 0.5 加权。下游微调保持相同预处理，只按任务改轮数与学习率。

需要补的验证包括在公开长音频基准而非自造拼接上重测，给出多次种子的均值方差，报告推理延迟与显存占用，并公开训练日志与评估脚本。本文未发现绑定且完成 HTTPS 验证的作者资源，不得声称代码、模型或数据已公开，来源未确认不是论文技术缺陷，复现时应以原文文字和自备实现为准。

### 什么时候值得尝试 AD-Mamba

当任务是长而稀疏、常有静音或背景干扰的音频分类，且推理预算有限时，这种先局部后全局的蒸馏思路值得尝试。它用 CNN 阶段补局部纹理，用 Transformer 阶段补全局语义，同时保留 Mamba 的线性序列效率，在 AudioSet 标准点和人工长尾条件下都显示出精度与稳定性的双重收益。

下游三任务的比较问题是，16 kHz 的 AD-Mamba(S) 微调后能否持平或超过 32 kHz 的强基线，指标越高越好，条件是各自原文的微调流程。

| 任务 | AD-Mamba-S | ASDA | CED |
| --- | --- | --- | --- |
| FSD50K | 68.7% mAP | 65.4% at 16 kHz | 65.5% at 32 kHz |
| ESC-50 | 96.9% | 96.1% | 96.7% |
| DCASE16 | 93.3% accuracy | — | 92.2% |

上表数字全部来自三句连续原句，FSD50K 组保留 65.4% at 16 kHz 和 65.5% at 32 kHz 的同组写法，ESC-50 组保留 96.9%、96.8%、96.7% 与 96.1% 的同组对比，DCASE16 组只保留有原句支持的 93.3% accuracy 与 92.2%，该句未给出 ASDA 同句对比值故记为—。结果显示 AD-Mamba(S) 在三任务均为最好，且只用 30M 参数和 16 kHz 输入。但不值得盲目照搬的情况是短而干净的片段分类，或已有强 32 kHz 系统且高频细节关键时，此时 3 个阶段 400 轮的训练成本可能超过收益。

初学者可先复述关键链条：谱图输入经补丁嵌入与多尺度 Mamba 块到池化分类，训练按冻结主干学局部、解冻换教师学全局的顺序推进，评测要同时看标准 mAP、变长曲线与填充曲线。下一步最需要的是在真实长音频与真实噪声上的独立验证，以及对误判模式的细查，再决定是否在自己的数据上投入完整蒸馏。

<details>
<summary>📎 论文与评分元数据</summary>

排名：前50% | 文档类型：方法研究 | [arXiv 原文](https://arxiv.org/abs/2610.27713v1)

</details>

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。

- 评分规则：type-aware-v1

- 评分模型：muse-spark-1.3-contributor

- 评分请求协议：openai_responses

---

[← 返回 2026-10-21 语音/音乐/音频论文速递](/audio-paper-digest-blog/posts/2026-10-21/)
