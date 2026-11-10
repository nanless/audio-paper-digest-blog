---
title: "FFMT: Frequency-Factorized Multi-Rate Tokenization for Music-to-Dance Generation"
date: 2026-11-09
draft: false
tags: [音乐驱动演奏动作生成, 向量量化, 自回归模型, 音乐]
categories: [论文速递]
description: "针对音乐生成舞蹈中缓慢走位与快速局部动作难以兼顾的问题，FFMT 用高斯滤波把根相对位形拆成低频骨架与高频残差并分配不同 token 速率与码本容量，再按先低频后高频自回归生成，在 AIST++ 与 FineDance 上取得更低的分布距离，但多样性与节拍对齐仍需按与真值偏差来理解。"
hiddenInHomeList: true
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_arxiv_id: "2611.07384"
paper_digest_workbench_contract: "researcher-workbench"
paper_digest_workbench_schema_fingerprint: "1f09b594c317cc38e934de27a5b0e8ceb4baa50ef79bd4f8683dd9adea720fe7"
paper_digest_reader_title: "把舞蹈按快慢拆开再编码：FFMT 如何分配 token 给编舞骨架与细节动作"
paper_digest_original_title: "FFMT: Frequency-Factorized Multi-Rate Tokenization for Music-to-Dance Generation"
paper_digest_arxiv_version: 1
paper_digest_arxiv_versioned_id: "2611.07384v1"
paper_digest_arxiv_abs_url: "https://arxiv.org/abs/2611.07384v1"
paper_digest_arxiv_pdf_url: "https://arxiv.org/pdf/2611.07384v1.pdf"
paper_digest_primary_task: "音乐驱动演奏动作生成"
paper_digest_tags_contract: "paper-tag-flat-tags"
paper_digest_tags_schema_fingerprint: "27e36280a4b8d3df62ebe54d3ab037920f4d69feb2b554163f01bbae2caf4338"
paper_digest_tags_selection_contract: "paper-tag-selection"
paper_digest_tags_registry_version: "paper-tag-catalog"
paper_digest_tags_registry_sha256: "9673bc0122e1905a5dcfd8b223675400cc2fa4c36095bc0e5f817edf99a0ec5c"
paper_digest_tags_concepts: [{"facet":"task","id":"task.music-driven-motion","label":"音乐驱动演奏动作生成"},{"facet":"method","id":"method.vector-quantization","label":"向量量化"},{"facet":"method","id":"method.autoregressive","label":"自回归模型"},{"facet":"signal","id":"signal.music","label":"音乐"}]
paper_digest_primary_method: "向量量化"
paper_digest_score: 6.8
paper_digest_rank_bucket: "前50%"
paper_digest_document_type: "方法研究"
paper_digest_one_sentence: "针对音乐生成舞蹈中缓慢走位与快速局部动作难以兼顾的问题，FFMT 用高斯滤波把根相对位形拆成低频骨架与高频残差并分配不同 token 速率与码本容量，再按先低频后高频自回归生成，在 AIST++ 与 FineDance 上取得更低的分布距离，但多样性与节拍对齐仍需按与真值偏差来理解。"
paper_digest_authors: [{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Qirong Guo"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Ruijie Li"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Zeyan Li"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Sicheng Shu"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Guanzhi Ding"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Weihang Ding"}]
paper_digest_abstract_sha256: "7534acd062a687882e99739102fabb8733b727123a600c7039f7a25af3d2ba49"
paper_digest_sidecars: {"citation.bib":{"sha256":"11cb1b3d5efca259b4e5158c49ba29ce8b42d569570ade3945b584384840b726","url":"/audio-paper-digest-blog/client/papers/2026-11-09/2611-07384/citation.bib"},"citation.json":{"sha256":"fb132ab17eec6fcc804546ffe91a2069497bac865df3faaf061d14d92397b211","url":"/audio-paper-digest-blog/client/papers/2026-11-09/2611-07384/citation.json"},"citation.ris":{"sha256":"82b53332ee930ebb15dea467d451d6ebf040bd25da335edac9b617b344d01b2c","url":"/audio-paper-digest-blog/client/papers/2026-11-09/2611-07384/citation.ris"},"rethink-context.json":{"contract":"paper-research-context","schemaFingerprint":"5d4e79f7d3ee65b39ccb38281548bf20a1b2041ab7a27625eaf97ab9909a8383","sha256":"7971f572df03ea1776adacfcb8b112514116a465912a634b64517c525a0a5dfb","url":"/audio-paper-digest-blog/client/papers/2026-11-09/2611-07384/rethink-context.json"}}
paper_digest_api_reader_contract: "beginner-researcher"
paper_digest_api_reader_schema_fingerprint: "cd8baf5b8bda3a49eec64f6005931af63de4e9a13148cba5f354c661ca6e9df2"
paper_digest_api_reader_article_sha256: "ef45d51e793f588faaaa1c540fde9e0e445d6df98ce6943aab37f935e7f775ed"
paper_digest_api_reader_plan_sha256: "7a3411ef0fc13f978f3e1abc7407fb95ebeb9fc1882e4f16e7176e4ec09ad87f"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings"
paper_digest_api_reader_source_binding_schema_fingerprint: "d2a2607a6e561909473022eb43f56332ee357af8568566a095c29083ffdec9cc"
paper_digest_api_reader_source_bindings_sha256: "db59db6b04607fc20c16a6dcb589c31684cd19d66c1c0102abaf3b3e57388272"
paper_digest_api_reader_source_table_count: 3
paper_digest_api_reader_source_formula_count: 5
paper_digest_api_reader_structured_artifacts_sha256: "a2d3946eebc0c2a01cbfbfb408fa6768eec0bc2a04f587e7252b408e0a436624"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity"
paper_digest_api_reader_author_identity_schema_fingerprint: "1e3fd3a9a56c9a5bf52df8df5022690b9a3fa92e83e934f295af87c0e258ed2f"
paper_digest_api_reader_author_identity_sha256: "a88f0eba317840c959d78cfe2a970878378e4533cedb149630f30eca494d38ce"
paper_digest_api_reader_author_count: 6
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity"
paper_digest_api_reader_resource_identity_schema_fingerprint: "33b0be17118be61f39b85ce690c8da17e91f2864bb65e85284f60c40067328e0"
paper_digest_api_reader_resource_identity_sha256: "1be7da334a09f201eee1b54945e5ed56e8f919b00ccbd180e5e6660eec97e5b9"
paper_digest_api_reader_resource_count: 0
paper_digest_api_reader_figure_persistence: "ephemeral-no-persisted-figure-assets-v1"
paper_digest_api_reader_decision_projection: "api-reader-decision-projection"
paper_digest_api_reader_decision_projection_schema_fingerprint: "e56feb5ab75c8710904916b898f73dab9bb18bdf65bb60b7ed2edf7f99cea860"
---

# 📄 把舞蹈按快慢拆开再编码：FFMT 如何分配 token 给编舞骨架与细节动作

> 英文题目：*[FFMT: Frequency-Factorized Multi-Rate Tokenization for Music-to-Dance Generation](https://arxiv.org/abs/2611.07384v1)*

<!--paper-tag-hierarchy-v1:start-->

**研究分类**

- **研究任务**：[音乐驱动演奏动作生成](/audio-paper-digest-blog/papers/?concept=task.music-driven-motion)
- **研究方法**：[向量量化](/audio-paper-digest-blog/papers/?concept=method.vector-quantization)；[生成模型](/audio-paper-digest-blog/papers/?concept=method.generative) → [自回归模型](/audio-paper-digest-blog/papers/?concept=method.autoregressive)
- **信号**：[音乐](/audio-paper-digest-blog/papers/?concept=signal.music)

<!--paper-tag-hierarchy-v1:end-->

> 评分：**6.8/10** | 创新 1.5/2 | 技术严谨 1.2/1.5 | 实验充分 1.2/1.5 | 清晰度 0.8/1 | 影响力 1/1.5 | 开源 0/1.5 | 可复现 0.3/0.5 | 工程/实践 0.8/1.5


## 👥 作者与机构

- Qirong Guo：机构信息未能在本次解析中与作者逐人可靠绑定
- Ruijie Li：机构信息未能在本次解析中与作者逐人可靠绑定
- Zeyan Li：机构信息未能在本次解析中与作者逐人可靠绑定
- Sicheng Shu：机构信息未能在本次解析中与作者逐人可靠绑定
- Guanzhi Ding：机构信息未能在本次解析中与作者逐人可靠绑定
- Weihang Ding：机构信息未能在本次解析中与作者逐人可靠绑定

## 📌 核心摘要

音乐驱动三维舞蹈生成需要从音乐合成跟随音乐结构且编舞连贯、局部表达丰富的三维动作，难点在于缓慢变化的身体构型与快速局部运动并存，单一时间分辨率和码本容量难以兼顾。论文把去除全局平移后的关节点位置用固定高斯低通滤波拆成低频编舞骨架与互补的高频残差，低频用更低的令牌速率和更小的码本，高频用更高的速率和更大的码本，且上下半身分别建码本。与只按分辨率分层而不指定频率内容的方法不同，该表示直接把频率成分与容量分配绑定，并诱导先规划后细化的生成分工。音乐条件的生成器先产生低频令牌序列建立粗编舞，再把低频序列经时间对齐形成的邻域上下文与音乐上下文一起作为高频自回归模型的条件，最终解码为关节旋转与根部位移。在AIST++评测设置下，该方法动力学特征的FID即FIDk为9.91、几何特征的FID即FIDg为7.02，低于Bailando++的21.29与11.56，节拍对齐分数BAS为0.2374，与真值0.2374基本一致。在FineDance评测设置下对应FIDk与FIDg为35.21与27.66，低于表中Bailando++、EDGE、Lodge和TokenDance的同指标数值而为表中最低，BAS为0.2125，接近真值0.2120但不及EDGE。结论仅在AIST++与FineDance的四秒窗口、固定高斯滤波与既定令牌速率码本配置下验证，遮蔽低频上下文会引起动力学FID大幅恶化，跨风格长时生成与实时部署范围尚未验证。原文未披露训练、推理或部署成本。

## 🔗 开源与复现资源

本次未形成可展示的已核验资源记录，开放状态尚未核实。

可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 音乐生成舞蹈要解决什么输入输出问题

音乐驱动的 3 维舞蹈生成，输入是一整首音乐，输出是一段与之相配的 3 维人体动作序列。输出不只是一串姿势，还要同时满足三件事：跟随音乐结构走，身体大范围走位连贯，局部手脚与躯干的快速动作有表现力。

对初学者来说，关键是理解动作本身有两种时间尺度。一种是缓慢变化的身体构形，例如从舞台一侧移动到另一侧、躯干转向、上肢整体打开收拢；另一种是快速局部运动，例如脚步碎步、手腕抖动、卡点顿挫。前者持续时间长但单位时间信息少，后者持续短但对时间精度要求高。

如果用同一种离散 token 去编码这两类运动，就会出现两难。token 速率指单位时间产生几个 token，速率太低会漏掉快速变化，太高则对缓慢运动重复编码浪费容量。码本大小指每个 token 有多少种可选状态，太小会把不同动作混在一起，太大则学习更难。FFMT 要回答的就是如何在不同频率分量之间分配这两种容量，又在生成时保持它们的协调。

### 已有离散化路线为何还缺频率分工

在基于离散动作 token 的系统里，分词器决定了生成器学习音乐与动作关系的单位。它的时间分辨率与表示容量，直接影响慢变构形与快变局部动作如何被编码。

已有工作探索过时间层次。DanceMeld 与 DuetGen 学习不同时间分辨率的粗细两层动作码，DuetGen 让细层生成以粗层 token 为条件。另一些工作引入频率信息做辅助：ExpressiveBailando 用傅里叶域监督增强动作解码，InfiniteDance 对检索到的参考动作的频带加工后构造条件特征。

论文指出，仅有时间分辨率还不够，因为它没有规定每条流分到什么频率内容。也就是说，两层分辨率不同，不等于一层负责慢、一层负责快。FFMT 的区别是把显式的动作频率分量作为量化目标，先固定地把慢与快分开，再为它们分配 token 速率与码本容量，并用条件生成保持协调。

### 时间容量分配问题具体指什么

论文把离散舞蹈表示写成一个时间容量分配问题。给定一段 T 帧、J 个关节的 3 维关节点序列，先去掉全局根平移得到根相对位置，再考虑如何用有限的 token 数与码本条目去覆盖慢变与快变。

低速率可能错过快速变化，高码率可能冗余编码缓慢运动；小码本可能合并不同动作模式，大码本提供更多备选。更麻烦的是局部动作的时机与幅度必须与演进中的身体构形协调，跨分量依赖也要处理。因此问题不只是压缩重建误差，而是如何在音乐条件下分配分辨率与容量，同时保留协调的生成关系。

### FFMT 的两段式流程是怎样的

FFMT 采用向量量化变分自编码器加自回归生成的管线。分词器产生低频与高频两组动作码，音乐条件下的生成按先低频后高频分解。生成出的码再被解码为关节旋转与根运动。

下面这张总览图值得先按输入到输出的主路径读一遍，再对比上下半身与快慢两路在哪里汇合，推理时的先验又从哪里介入。下面导读先说明观察任务，图后解释可见结构。

这张图上半为分词部分，下半为生成部分，蓝色对应低频低速率，橙色对应高频高速率，中间用加号汇合，紫色为训练统计得到的转移与节拍先验，箭头方向表示了从音乐与低频规划到高频细化的条件关系。

> **看图路径：** 1. 先看上半部分蓝色低频与橙色高频两路从频率分解出发的走向；2. 对比低速率少 token 与高速率多 token 的方块数量差异；3. 再看下半部分规划与细化两个自回归模块如何分别输出上下半身 token；4. 注意中间转移与节拍先验虚线同时指向两侧生成过程

[![原论文 Figure 1：Overview of FFMT. (a) Frequency-factorized tokenization assigns different temporal resolutions and…](https://arxiv.org/html/2611.07384v1/v55.png)](https://arxiv.org/html/2611.07384v1/v55.png)

*论文图 1。原论文 Figure 1:：“Overview of FFMT. (a) Frequency-factorized tokenization assigns different temporal resolutions and codebook sizes to low-frequency structure and high-frequency residuals, with…”。*

图的上半从动作输入出发，经频率分解分成低频与高频，每侧再分上半身与下半身两个向量量化分支，各有编码器、码本与解码器，低频侧 token 方块少而稀疏，高频侧多而密集，重建的两路相加得到重建动作。下半从音乐出发，先由规划自回归模块产生低频上下半身 token，再由细化模块在低频对齐与音乐条件下产生高频上下半身 token，两路经已训练的解码器解码相加得到生成舞蹈，紫色先验同时回指两个自回归模块表示推理时修正。

### 高斯滤波如何得到互补的快慢分量

第一步是对根相对关节位置沿时间做固定的高斯低通滤波。核由半径与带宽决定并归一化，边界用复制边界值处理。对每 1 帧取邻域加权平均得到低频分量，高频分量就是原根相对位置减去低频。这种加法构造在量化前完整保留位置信号，同时暴露两种时间状态以便分别分配容量。

\[\mathbf{P}^{\mathrm{L}}_{t}=\sum_{\tau=-R}^{R}g(\tau)\bar{\mathbf{P}}_{t+\tau},\qquad\mathbf{P}^{\mathrm{H}}=\bar{\mathbf{P}}-\mathbf{P}^{\mathrm{L}}.\]

上式中低频是邻域加权平均，高频是互补残差，二者相加恒等于原根相对输入。论文实现用核尺寸 31、带宽 6 帧的固定高斯核。直观例子是：缓慢的舞台位移与躯干转向主要留在低频，而脚步急停、手部抖动等多留在高频残差。

**低频编舞骨架 × 高频残差：** 低频编舞骨架指对根相对关节位置做时间高斯低通后得到的缓慢变化分量，承担身体大范围走位与姿态趋势；高频残差指原信号减去低频后剩下的互补快速起伏，承担抖动、手部与脚步细节。二者相加精确还原原信号，拆开是为了让编码器对慢变部分用低时间分辨率、对快变部分用高时间分辨率，组合后既保留完整信息又暴露两种时间尺度以便分别分配容量。

### 四路分支怎样按频率分配速率与码本

每个频率分量再沿关节维分成上半身与下半身两个不相交关节子集，保持原始关节对应。于是共有频率与身体部位交叉的 4 个分支，每个分支有自己的编码器、码本与位置解码器。

每个分支编码器有时间步长，T 帧输入产生 T 除以步长个隐向量，再做最近邻量化取码本序号。FFMT 让低频步长大于高频步长，低频码本条目少于高频码本。具体实现是 4 秒窗口内低频与高频在物理时间上的 token 间隔为 0.2 秒与 0.1 秒，AIST++ 帧步长为 12 与 6，FineDance 为 6 与 3，每窗口每身体分支分别为 20 与 40 个 token，码本为 128 与 512，嵌入维 512。

\[z^{f,b}_{i}=\arg\min_{k}\left\|E_{f,b}(\mathbf{P}^{f,b})_{i}-\mathbf{e}^{f,b}_{k}\right\|_{2}^{2}.\]

上式表示每个 token 位置取与编码器输出欧氏距离最近的码本向量序号。低频分支网络更窄更浅，高频分支更宽更深，目的是让高频有更大容量刻画细节。

**token 速率 × 码本容量：** token 速率指编码器时间步长决定的每秒 token 数，决定时间分辨率，高则能捕捉快速变化但对慢变冗余；码本容量指每个分支向量量化码本的条目数，决定每个 token 可选状态数，大则能区分更多动作模式。FFMT 把低速率加小码本配给低频、高速率加大码本配给高频，二者搭配是在固定总 token 预算下按频率特性分配表示能力。

**上半身码本 × 下半身码本：** 上半身码本与下半身码本指在每个频率流内按关节点集划分的两个独立向量量化分支，各自有编码器、码本与解码器，分别处理不相交的关节子集并保留原始关节对应。划分的理由是上下半身运动模式差异大，分开量化可减少互相干扰，解码时再按原始关节顺序拼回同一频率流，最后低频与高频相加得到完整根相对重建。

### 先规划后细化如何保持快慢对齐

生成阶段每段舞蹈表示为 4 个流，同一频率流内同一时刻的上半身与下半身 token 组成 1 对。低频与高频各用一个自回归 Transformer，高频额外以低频为条件，整体分解为先生成低频再生成高频。

\[p(\mathbf{Z}^{\mathrm{L}},\mathbf{Z}^{\mathrm{H}}\mid\mathbf{M})=p(\mathbf{Z}^{\mathrm{L}}\mid\mathbf{M})p(\mathbf{Z}^{\mathrm{H}}\mid\mathbf{Z}^{\mathrm{L}},\mathbf{M}).\]

音乐上下文按对应时间分辨率编码，局部音乐 Transformer 把邻近音乐帧聚合下采样到低频与高频步数。低频先自回归建立粗编舞，高频再实现残差动态。高频时间步与低频的对齐通过取整映射完成，论文实现是高频步数为低频 2 倍，相邻两个细步共享一个粗索引，对齐只选择用于条件的粗 token，不重采样离散序号。

\[\pi(t)=1+\left\lfloor\frac{(t-1)T_{\mathrm{L}}}{T_{\mathrm{H}}}\right\rfloor,\]

上式给出每个细时间步对应哪个粗索引，细步在该索引附近取有界邻域嵌入为低频上下文，高频分布以高频历史、低频上下文与音乐为条件，2 阶段都用下 1 token 交叉熵优化，动作注意因果，音乐注意可用有界未来上下文。

\[p(\mathbf{Z}^{\mathrm{H}}\mid\mathbf{Z}^{\mathrm{L}},\mathbf{M})=\prod_{t=1}^{T_{\mathrm{H}}}p(c_{t}^{\mathrm{H}}\mid\mathbf{Z}_{\lt t}^{\mathrm{H}},\mathbf{C}_{t}^{\mathrm{L}},\mathbf{A}^{\mathrm{H}}).\]

**先规划后细化 × 低频到高频条件：** 先规划后细化指生成分两阶段进行，先由音乐生成低频 token 序列建立粗编舞，再生成高频 token；低频到高频条件指高频自回归 Transformer 在每一步能看到对齐后的低频邻域上下文与音乐上下文。分工是低频负责全局协调，高频负责在既定走位下实现局部时序与幅度，条件连接保证快慢动作在时间上对齐而不脱节。

### 分词器与动作解码器如何训练与冻结

位置重建部分，每个分支 token 序列经各自位置解码器重建，再按原始关节顺序拼回该频率流，低频与高频相加得到完整根相对重建。分支损失包含对位置及其 1 阶 2 阶差分的平均绝对误差，加上承诺项与隐变量正则，位置总目标再平均 4 个分支并加上完整动作的重建与时间一致项，所有重建与时间项都在解码后的原始帧网格上计算。

旋转与根解码是第 2 个阶段。先冻结位置编码器与码本，再训练动作解码器。每个身体部位把低频与高频解码出的帧级特征在通道维拼接，经时间融合网络融合，预测关节旋转，下半身特征额外预测根速度，全局平移由预测根速度从给定初始根位置积分得到，训练用旋转与根重建及时间一致目标。

自回归生成是第三阶段。低频与高频 Transformer 分别在已训练分词器产生的离散序列上训练，音乐编码器提供对应分辨率的上下文，高频增加低频邻域条件。推理时候选集结合解码器 logit 最大的 64 个 token 对与训练中见过的前 1 对的所有后继，再用训练转移与节拍统计修正后取最大。先验权重在推理固定，不引入可训练参数。

**转移先验 × 节拍校正：** 转移先验指从训练集统计上一个 token 对之后出现过哪些后继对，对见过的转移加固定偏置；节拍校正指比较同一 token 对在节拍与非节拍区间的条件概率与边缘概率的对数差，只对训练见过的对生效。二者都在推理时加到解码器 logit 上，不引入可训练参数，作用是让自回归采样更贴近训练中的时序衔接与节拍相关偏好。

### 在哪些数据与指标下比较

实验在 AIST++ 与 FineDance 上进行。报告运动学与几何学的 Fréchet 距离、对应多样性与节拍对齐分数。论文明确低 Fréchet 距离越好，多样性与节拍对齐视为中性指标，以与真值统计的绝对偏差小为好。表中共列的 EDGE、Lodge 与 TokenDance 数值沿用 TokenDance 报告的比较，另含作者复现的 Bailando++ 在 AIST++ 上的值。

实现上 2 数据集都用 4 秒动作窗，低频与高频物理间隔同为 0.2 秒与 0.1 秒。位置损失权重、承诺权重与正则权重在 2 数据集一致。低频自回归上下文长度 19，高频 39，音乐编码器 3 层，高频用 7 个 token 的低频条件邻域。推理先验权重在 2 数据集分别设置，AIST++ 与 FineDance 取不同数值。

理解结论需要记住条件：比较的是论文表内所列方法在各自数据集上的报告值，多样性与节拍不是越高越好，而是越接近真值越好。重建消融不经过自回归生成与先验重打分，只测分词器经完整旋转与根解码器保留信息的能力。

### 主结果在什么条件下支持分布保真

下表比较的核心问题是：在相同数据集与相同指标定义下，FFMT 的生成分布与参考样本的特征分布差异是否更小，同时多样性与节拍统计是否仍接近真值。公平条件是同数据集内比较，Fréchet 距离越低越好，多样性与节拍对齐以接近真值为好。

| Method | FIDk↓{}_{k}\downarrow | FIDg↓{}_{g}\downarrow | Divk→{}_{k}\rightarrow | Divg→{}_{g}\rightarrow | BAS→\rightarrow |
| --- | --- | --- | --- | --- | --- |
| Ground Truth | – | – | 8.19 | 7.45 | 0.2374 |
| FFMT | 9.91 | 7.02 | 8.25 | 6.65 | 0.2374 |
| Ground Truth | – | – | 9.73 | 7.44 | 0.2120 |
| FFMT | 35.21 | 27.66 | 9.75 | 7.66 | 0.2125 |

从表中可见，在 AIST++ 上 FFMT 的两项 Fréchet 距离为 9.91 与 7.02，是表内最低；其运动学多样性 8.25 接近真值 8.19，节拍分数 0.2374 与真值 0.2374 相同位数一致，而几何多样性上 TokenDance 更接近真值，说明保真提升没有在所有覆盖维度同时最优。在 FineDance 上 FFMT 的两项距离为 35.21 与 27.66，同样表内最低，两项多样性 9.75 与 7.66 在表内最接近真值 9.73 与 7.44，节拍上 EDGE 最接近真值，FFMT 第二。

限制是这些结论只在表内基线与报告值范围内成立，且多样性与节拍是按接近真值解读，不能只看大小。未胜出项也应看到：AIST++ 几何多样性与 FineDance 节拍对齐都不是 FFMT 最接近真值，说明方法没有全面解决动作覆盖与节拍同步的差异。

### 去掉频率拆分与非对称分配会发生什么

生成消融要回答的比较问题是：每次只改完整模型的一个组件，生成质量与接近真值的程度如何变化。变体包括去掉显式低频与残差分解、统 1 token 速率但保留码本、统一码本为 256 但保留 token 数、遮掉高频对低频的注意但保留高频历史与音乐、去掉解码先验用贪心预测。分词器变化时先验统计从训练数据重建。

|  | AIST++ | AIST++ | AIST++ | AIST++ | AIST++ | FineDance | FineDance | FineDance | FineDance | FineDance |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Variant | FIDk | FIDg | Divk | Divg | BAS | FIDk | FIDg | Divk | Divg | BAS |
| w/o Freq. | 28.74 | 10.43 | 6.06 | 6.08 | 0.216 | 56.82 | 49.68 | 7.38 | 10.17 | 0.202 |
| Same Rate | 18.92 | 9.88 | 8.84 | 6.26 | 0.260 | 48.01 | 36.34 | 8.87 | 6.82 | 0.219 |
| Uniform K | 15.16 | 9.25 | 8.39 | 6.18 | 0.249 | 39.46 | 30.07 | 8.74 | 7.05 | 0.220 |
| w/o L→\rightarrowH | 55.27 | 24.56 | 8.71 | 6.39 | 0.256 | 140.77 | 48.93 | 4.95 | 11.27 | 0.224 |
| w/o Prior | 13.14 | 7.34 | 8.63 | 6.48 | 0.253 | 35.39 | 27.84 | 9.10 | 7.78 | 0.215 |
| Full | 9.91 | 7.02 | 8.25 | 6.65 | 0.237 | 35.21 | 27.66 | 9.75 | 7.66 | 0.212 |

上表显示完整模型在 2 数据集上 Fréchet 距离最低，且多样性与节拍在这些变体中最接近真值。去掉频率分解、统一速率或统一码本都会升高距离；遮掉低频上下文带来最大的运动学距离退化，在 AIST++ 从 9.91 升到 55.27，在 FineDance 从 35.21 升到 140.77，支持低频条件对协调残差动态的作用。解码先验在 AIST++ 带来的距离改善大于在 FineDance 上的改善。代价是这些变体仍共享其余设置，结论只说明相对重要性，不能推出去掉某组件后必然在所有数据上同等退化。

### 分词器本身保留了多少高频细节

重建消融要回答的比较问题是：不经过自回归生成与先验，只把测试动作编码量化再经完整解码器重建，整体姿势、高频细节与动力学保留得如何。指标为平均关节位置误差毫米数、无量纲归一化高频重建误差与加速度误差米每 2 次方秒，越低越好，其中高频误差用同一高斯算子过滤后按参考高频能量归一化，以处理残差幅度小的问题。

|  | AIST++ | AIST++ | AIST++ | FineDance | FineDance | FineDance |
| --- | --- | --- | --- | --- | --- | --- |
| Variant | MPJPE↓ | EH↓E_{H}\downarrow | EA↓E_{A}\downarrow | MPJPE↓ | EH↓E_{H}\downarrow | EA↓E_{A}\downarrow |
| w/o Freq. | 96.647 | 0.7338 | 17.144 | 95.903 | 0.4280 | 7.332 |
| Same Rate | 96.797 | 0.7175 | 17.287 | 93.101 | 0.4013 | 7.248 |
| Uniform K | 95.518 | 0.6862 | 16.934 | 92.637 | 0.3743 | 6.719 |
| Full | 94.459 | 0.5514 | 15.070 | 88.770 | 0.3190 | 5.256 |

上表显示完整分词器在 2 数据集三项指标上均为最低。与任一分词消融相比，高频误差与加速度误差的相对下降大于平均关节误差的下降，说明改进集中在时间细节与动力学，同时兼顾整体姿势。与同速率对比支持在固定总 token 数下按频率分配时间分辨率，与均匀码本对比支持在固定 token 速率下采用非对称码本。限制是重建好不等于生成好，论文因此把重建与生成分别评测，二者一致才支持频率感知分词与低到高条件是互补机制。

### 哪些结论还不能推广

首先是指标口径。Fréchet 距离低表示生成特征分布与参考更接近，但不等于每段舞蹈都更好；多样性与节拍按接近真值解读，单独数值高低没有意义。AIST++ 上几何多样性与 FineDance 上节拍对齐的反例提醒，分布保真提升没有均匀解决覆盖差异。

其次是消融范围。变体 1 次只改一处，且先验统计随分词器重建，结论依赖完整流程。统一速率为每分支每 4 秒 30 个 token，统一码本为 256，这些特定取值下的对比支持非对称分配，但没有穷举所有速率与码本组合。遮掉低频注意退化最大，支持其协调作用，但不等于证明其他条件方式必然更差。

还有未测量的方面。论文没有报告训练资源、推理开销、输出帧率与实际延迟，也没有人工评价，自动指标不能替代主观舞蹈质量。来源方面未发现可验证的公开代码与模型资源，因此复现讨论只能依据论文文字，不能声称作者已开源。

### 复现第一步要固定什么

复现应先固定数据与坐标处理。4 秒窗、根相对位置、复制边界的高斯分解核尺寸 31 与带宽 6 帧、评估用同一过滤器，这些决定了快慢分量的定义。若分解不一致，后续速率与码本对比就失去基准。

其次固定分词容量。低频与高频物理间隔 0.2 秒与 0.1 秒，按帧率换算步长，AIST++ 为 12 与 6，FineDance 为 6 与 3，每分支每窗 20 与 40 个 token，码本 128 与 512，嵌入 512 维，分支宽度与深度按低频窄浅、高频宽深设置。位置损失权重、承诺权重与正则权重按原文取值。

生成与推理要保留 2 阶段与对齐。高频步数为低频 2 倍时的取整映射、低频 7 token 邻域、音乐编码器层数、自回归上下文长度，以及候选集由 64 个最大 logit 对加训练后继构成、先验权重按数据集分别设置，这些都影响解码行为。缺少代码时，建议先实现无先验贪心基线，再加入转移与节拍修正，以便分离先验带来的变化。

### 什么时候值得尝试还缺什么验证

当动作同时包含缓慢走位与快速局部 articulations，且观察到统一速率分词器要么丢细节、要么冗余编码慢变时，值得尝试按频率拆分再分配速率与码本。已有证据支持在 2 数据集上分布距离下降，且高频重建与动力学改善大于整体姿势改善，低到高条件对生成协调尤为重要。

还需要的验证是更广的速率与码本网格、不同滤波带宽下的敏感性，以及在新舞蹈风格与音乐类型上的泛化。节拍对齐与多样性应继续按与真值偏差报告，并补充人工评价。若关心部署，还需补测推理延迟与内存，因为高速率流与大码本会增加 token 数与候选计算。

容易产生的误解是把低频等同于粗分辨率本身。论文强调时间分辨率 alone 不指定频率内容，FFMT 的关键是先用固定滤波显式指定频率目标，再分配分辨率与容量并用条件生成保持协调，缺了任一环节都不是同一方法。

<details>
<summary>📎 论文与评分元数据</summary>

排名：前50% | 文档类型：方法研究 | [arXiv 原文](https://arxiv.org/abs/2611.07384v1)

</details>

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。

- 评分规则：type-aware-v1

- 评分模型：muse-spark-1.3-contributor

- 评分请求协议：openai_responses

---

[← 返回 2026-11-09 语音/音乐/音频论文速递](/audio-paper-digest-blog/posts/2026-11-09/)
