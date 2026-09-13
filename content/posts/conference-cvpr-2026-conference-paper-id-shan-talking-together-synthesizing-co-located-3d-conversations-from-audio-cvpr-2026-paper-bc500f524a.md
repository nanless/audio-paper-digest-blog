---
title: "Talking Together: Synthesizing Co-Located 3D Conversations from Audio"
date: 2026-09-13
draft: false
description: "该研究用一路混合音频同时生成同处一室的双人 3D 表情、头姿、位移和眼球注视，以共享权重的双流扩散加跨说话人注意力解耦轮流，用两阶段数据策略兼顾交互与口型，并在用户研究中获得约 73 至 78% 的偏好，但推理依赖声纹分离出的说话概率与首帧空间条件。"
tags: ["注意力机制", "数据集构建", "扩散模型", "语音", "音视频生成"]
categories: ["cvpr-2026 论文"]
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_paper_id: "conference:cvpr:2026:conference-paper-id:Shan_Talking_Together_Synthesizing_Co-Located_3D_Conversations_from_Audio_CVPR_2026_paper"
paper_digest_source_kind: conference
paper_digest_conference_id: "cvpr-2026"
paper_digest_conference_record_url: "https://openaccess.thecvf.com/content/CVPR2026/html/Shan_Talking_Together_Synthesizing_Co-Located_3D_Conversations_from_Audio_CVPR_2026_paper.html"
paper_digest_conference_pdf_url: "https://openaccess.thecvf.com/content/CVPR2026/papers/Shan_Talking_Together_Synthesizing_Co-Located_3D_Conversations_from_Audio_CVPR_2026_paper.pdf"
paper_digest_api_reader_contract: "beginner-researcher-v3"
paper_digest_api_reader_article_sha256: "f4a69658314ef2dabc3ec3057257f72179f0aea6b75c65962e67e6d611f1ca30"
paper_digest_api_reader_plan_sha256: "be96c93ba801ca501664c48b7913e3df3f57aa9aa78a7c0a4f75844e1f867efe"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings-v4"
paper_digest_api_reader_source_bindings_sha256: "acbb245ed6a771ed18720afebee7f7a76ea29475f6715a143941bdd340e3394a"
paper_digest_api_reader_source_table_count: 3
paper_digest_api_reader_source_formula_count: 0
paper_digest_api_reader_structured_artifacts_sha256: "297c369734771bc90ab81199f458a7ee4df801e2a18fd2e9e92bfe25e4f9c272"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity-v1"
paper_digest_api_reader_author_identity_sha256: "4ef5bf5d2f998f6a954bc8767b82eaaa1b395bb6f052e95f0777d1639a89568d"
paper_digest_api_reader_author_count: 9
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity-v1"
paper_digest_api_reader_resource_identity_sha256: "29cf2931839e8c33acf68590d844e5cd0d1cffdac256c81b5a45658a184945f6"
paper_digest_api_reader_resource_count: 0
paper_digest_api_reader_decision_projection: "api-reader-decision-projection-v2"
paper_digest_scoring_contract: "api-scoring-audit-v2"
paper_digest_taxonomy_contract: "paper-taxonomy-flat-tags-compat-v1"
paper_digest_taxonomy_selection_contract: "paper-taxonomy-selection-v1"
paper_digest_taxonomy_registry_version: "paper-taxonomy-v1"
paper_digest_taxonomy_registry_sha256: "15c82a567ce5a55dc1175684ed08b64c158558639d9c8fb822c9587ec32a8778"
paper_digest_taxonomy_concepts: [{"facet":"method","id":"method.attention","label":"注意力机制"},{"facet":"method","id":"method.dataset-curation","label":"数据集构建"},{"facet":"method","id":"method.diffusion","label":"扩散模型"},{"facet":"signal","id":"signal.speech","label":"语音"},{"facet":"task","id":"task.av-generation","label":"音视频生成"}]
paper_digest_primary_task: "音视频生成"
paper_digest_primary_method: "扩散模型"
paper_digest_score: 6.6
paper_digest_rank_bucket: "前50%"
paper_digest_document_type: "方法研究"
paper_digest_conference_structure: replayable-pdf-layout-v1
---

# 📄 从一路混合音频生成面对面双人 3D 对话：空间、注视与轮流如何被建模

> 英文题目：*Talking Together: Synthesizing Co-Located 3D Conversations from Audio*

> 会议身份：`conference:cvpr:2026:conference-paper-id:Shan_Talking_Together_Synthesizing_Co-Located_3D_Conversations_from_Audio_CVPR_2026_paper`


> ✅ 来源为官方会议 PDF；表格与 Figure 按原文证据绑定。PDF 公式以原页区域图片展示，未冒称作者原始 TeX。

> 会议来源：[官方记录](https://openaccess.thecvf.com/content/CVPR2026/html/Shan_Talking_Together_Synthesizing_Co-Located_3D_Conversations_from_Audio_CVPR_2026_paper.html) · [官方 PDF](https://openaccess.thecvf.com/content/CVPR2026/papers/Shan_Talking_Together_Synthesizing_Co-Located_3D_Conversations_from_Audio_CVPR_2026_paper.pdf)

标签：#注意力机制 #数据集构建 #扩散模型 #语音 #音视频生成

评分：**6.6/10** | 创新 1.5/2 | 技术严谨 1.2/1.5 | 实验充分 1.0/1.5 | 清晰度 0.8/1 | 影响力 0.8/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 1.0/1.5

排名：前50% | 文档类型：方法研究

## 👥 作者与机构

- Mengyi Shan：机构信息未能从会议 PDF 纯文本可靠映射
- Shouchieh Chang：机构信息未能从会议 PDF 纯文本可靠映射
- Ziqian Bai：机构信息未能从会议 PDF 纯文本可靠映射
- Shichen Liu：机构信息未能从会议 PDF 纯文本可靠映射
- Yinda Zhang：机构信息未能从会议 PDF 纯文本可靠映射
- Luchuan Song：机构信息未能从会议 PDF 纯文本可靠映射
- Rohit Pandey：机构信息未能从会议 PDF 纯文本可靠映射
- Sean Fanello：机构信息未能从会议 PDF 纯文本可靠映射
- Zeng Huang：机构信息未能从会议 PDF 纯文本可靠映射

## 📌 核心摘要

该任务输入为一路包含交叠与轮替的双人混合语音，输出为共处同一三维空间的两人的表情参数、头颈旋转、眼动与头部平移序列，难点在于说话者与倾听者角色动态切换、多轮次同时说话解耦以及相对位置朝向与互视的一致建模。方法先以场景过滤、超分与三维人脸拟合从野外双人视频构建大规模会话数据并提取说话概率掩码，再以单人高清视频随机剪切配音合成具有精确说话掩码的伪会话数据，前者提供交互动态后者提供干净唇动监督。接着共享权重的双流扩散模型并行去噪双人动作，以Wav2Vec 2.0特征、动态角色嵌入与说话概率掩码联合条件化，解码器内帧级双向交叉注意力在两流间交换信息以协调轮替与反应。训练分两阶段先在会话数据上学习交互再在合成数据上专精唇部，同时以首帧平移条件与大语言模型文本到坐标映射实现布局控制，并对大头动样本施加眼视线损失。相对单人模型独立推理与说话者加听者拼接基线，该双流共享表示加显式交叉注意力的差异使倾听反馈与相互注视被联合生成而非事后拼接，从而保持交互连贯与空间一致。在消融评测设置下，Full Model的FD指标为21.71，低于Single-Person Only的FD 50.45。该结论适用边界受限于拟合参数与渲染指标及强制选择主观评价，绝对尺度依赖平均瞳距假设，遮挡与极端姿态下的失败条件尚未验证跨域泛化。训练成本披露为在16块A100硬件上以1024批量训练200000步，推理开销采用2.5的无分类器引导权重。

## 🔗 开源与复现资源

本次未形成可展示的已核验资源记录，开放状态尚未核实。
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 输入是什么，输出是什么，什么信息不能丢？

这篇论文要解决的输入非常苛刻：只有一路混合波形，里面混着两个人的说话声、停顿、重叠和笑声，没有分轨，没有谁在何时说话的人工标注，另加一句描述空间关系的文本，例如面对面近距离交谈或并排站立。目标是同时输出两个人的完整 3 维面部动画，每个人一路序列，长度相同且逐帧对齐。

按原文的问题定义，每个人的输出是表情向量、骨骼姿态和头部平移的拼接，其中表情是 63 维，姿态包含颈、头、左右眼 4 个关节的朝向，平移是按米计的全局位置，三者拼起来每帧 78 维。初学者容易只关注嘴动，但这里不能丢的信息有 4 类。第一是精确唇同步，说话人的口型必须跟混合音频中属于他的那部分对齐。第二是倾听者反应，点头、微笑、视线转移不是装饰，而是对话轮流的信号。第三是相对空间，两个人站在哪里、朝向差多少，直接决定头转多大角度才算对视。

第四是相互注视，眼睛的微小转动在共享 3 维空间里才有物理意义，脱离空间谈注视是空话。
论文开篇用一张上下文图把旧路线分成 3 类，左半部分自上而下是只说不听、只听不说、像视频会议一样各演各的，右半部分是本文要做的共处一室。导读这张图的关键是理解叉和勾的含义：叉不是说旧方法嘴型不好，而是指缺了反应、多轮交互、空间布局或眼神交互中的一项或多项，勾则表示本文把混合音频加环境文本映射到带对视和布局的双人输出。

> **看图路径：** 1. 先看左侧三行被打叉的旧路线分别缺了什么；2. 再看右侧从混合音频加环境文本到双人输出的箭头；3. 最后确认底部对视与空间布局两个对勾的含义

[![原论文 Figure 1：Our method in context. Left: Prior work generates iso- lated participants, such as Speaker-Only…](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/56cb60b9e44f/figure-1.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/56cb60b9e44f/figure-1.png)

*论文图 1。原论文 Figure 1：“Our method in context. Left: Prior work generates iso- lated participants, such as Speaker-Only models that lack listener reactions, Listener-Only models that do not model…”。*

这张图右侧的两个灰色人头是面对面放置的，中间有一个多色小图表示交互建模，底部虚线箭头回到输出，含义是空间和注视不是后处理贴上去的，而是生成过程中就要满足的约束。左侧三行的波形图标也有讲究：说话人独模只有一路波形进一个头，倾听者独模用一路波形驱动另一个头，会话模型虽有两路波形但输出的两个人仍朝向镜头，这正是作者说的视频会议感。理解这张图后，后续所有组件都可以归为一句话：如何从一路混音中分出谁在说，如何让另一路做出合理反应，如何让两路共享同一个 3 维房间。

### 同输入同目标的已有路线差在哪里？

按同输入、同目标、同监督来对照，相关工作可分成三束。第一束是音频驱动说话头，输入干净单人音频，输出 3 维参数或像素，代表是面部参数模型、网格顶点方法和直接合成像素的方法，论文提到这类方法能做出逼真唇动但没有倾听反应，也没有说话人之间的依赖，拿来做对话必须先做音频分离再各自独立驱动，于是轮流和反应就断了。

第二束是空间感知的多人身体交互，输入文本或动作，输出多人身体运动和 proxemics，关注碰撞、多智能体预测和场景接触，但对高保真表情和眼神等细粒度人际线索关注少，不能直接拿来做面对面说话。

第三束是对话中的倾听者生成，输入说话音频，输出点头微笑等短反应，早期有循环网络和扩散模型，后来有视频域的长程自回归和双说话人会话模型，其中与本文最接近的是生成照片级化身但缺行为反应的方法，以及建模双说话人但仍是视频会议式、不建模共处空间运动的方法。

本文的差别不是多加一个损失那么简单，而是把任务定义改了：输入固定为单路混合音频，输出固定为共处空间中的双人完整参数，监督同时包含交互多样性和高精度口型，运行阶段要求 1 次前向同时给出两路并保持空间一致。例子：同样听到一句你好，单人模型只管说话人的嘴，倾听者模型只管点一下头，而本文要求说话人嘴动的同时倾听者转头看向对方，且转头的角度要与 2 人首帧相对位置一致，否则注视向量在 3 维里对不上。

这种对照说明，类别差异不能当成同条件胜负，单人模型的口型分高不代表对话质量高，因为它根本没有被要求预测倾听者和空间。

### 要把混合音频变成双人动画，难在哪几步？

把一路混音变成两路动画至少要过四关。第一关是解耦，混音里 2 人的频谱和时间重叠，模型必须知道当前帧是谁的声音，否则两张嘴会一起动或一起闭。第二关是角色切换，同一人在 10 秒里可能先说后听，行为模式要从唇动主导切换到反应主导，且切换要平滑。第三关是空间 grounding，头转、眼转和平移必须放在同一个相机坐标系里度量，绝对尺度按原文是用平均瞳距假设恢复到近似米制，否则对视角度无从计算。

第四关是数据，野外对话视频分辨率低、遮挡多、2 人常侧对镜头，唇部真值本身就模糊，而干净正脸单人视频又没有交互，两者缺一不可。
论文用 3 维可变形模型表达人脸，几何由均值模板加身份基和表情基的线性组合得到，再用线性混合蒙皮按姿态和平移做关节驱动。扩散模型的目标是标准的去噪目标：从加噪输入预测干净数据，条件包含音频等多模态信号，训练时随机遮掉一成音频条件以支持无分类器引导。

推理时用到的说话概率掩码在训练时是预先算好存盘的，推理时现算，这种训练推理的来源差异是复现时必须注意的信息条件。首帧平移在训练时用真值作条件，预测目标是相对首帧的增量，这一步把绝对位置归一化，让网络专注学运动变化，推理时首帧位置可由文本经大语言模型预测得到。

### 双流扩散全景：一条样本走完输入到输出

跟着一个 10 秒样本走一遍。输入是 16 千赫采样的混合波形，先转成 768 维语音特征，同时用声源分离加语音活动检测得到两个人各自的说话概率随时间变化曲线。两条噪声动画序列进入同一个权重共享的时序网络并行处理，网络在解码器里用跨注意力交换信息，最后经投射头输出 2 人的表情、旋转和平移。

条件向量由语音特征、两个动态角色向量、两个说话概率掩码和首帧平移拼接而成，一路直接拼到噪声潜变量上注入全局上下文，一路经特征调制逐层缩放平移中间特征，从而实现逐帧的说听控制。损失在会话数据上覆盖表情、旋转、平移并在头部转动大的子集上加注视损失，在合成数据上只监督说话人嘴部相关的 20 个表情参数，其余置零。

这张架构图把上面这条路径画全了，左侧是提示词转坐标、语音特征和说话掩码，中部是拼接条件加双路噪声，中间是带跳跃连接的下采样瓶颈上采样，右侧是双头输出与按数据类型区分的损失框。

> **看图路径：** 1. 从左侧耳机与说话掩码出发跟踪到拼接条件的位置；2. 观察中间下采样与上采样之间的跳跃连接与灰色跨注意力块；3. 对比右侧会话数据与合成数据在损失框上的不同标注

[![原论文 Figure 2：An overview of our dual-stream diffusion architecture.](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/56cb60b9e44f/figure-2.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/56cb60b9e44f/figure-2.png)

*论文图 2。原论文 Figure 2：“An overview of our dual-stream diffusion architecture.”。*

看懂这张图要抓住三处。第一处是左下角两个可学习向量经掩码加权相加得到动态角色，这就是把硬掩码变成软状态的机构。第二处是中间灰色块只在解码器同帧内做交叉查询，时间建模仍留给 1 维时序卷积，这是为了保证即时同步而不引入跨帧串扰。第三处是右侧图例把表情旋转平移框、眼注视框、唇同步框分开，并在合成数据下只保留说话人唇部框，这对应 2 阶段训练的不同监督范围。整图没有画出音频分离模块的内部结构，复现时应把它当作独立预处理，而不是联合训练的一部分。

### 角色、注意力与空间控制各管什么？

先讲角色。白话说，模型需要知道你现在是说还是听。英文叫 speaker role embedding，做法是学两个向量，一个代表说，一个代表听，每 1 帧按该人的说话概率做线性插值，概率高偏向说向量，低偏向听向量。说话概率掩码英文叫 speaker probability mask，是随时间变化的 0 到 1 曲线，训练时预存，推理时由分离加检测现算。原文特意指出掩码不必严格准确，轻微不准反而像噪声一样稳定训练并提高对真实重叠的鲁棒性。

**说话人角色嵌入 × 说话概率掩码：** 说话概率掩码负责给出每 1 帧谁在说话的连续权重，说话人角色嵌入负责提供说话与倾听两种可学习状态向量，二者按权重插值得到动态角色向量，搭配理由是仅有掩码只能做硬切换而不能表达过渡与重叠，只有嵌入则不知何时切换，组合后条件向量才能逐帧控制说与听的行为。

再讲交互。白话说，两路不能各走各的，听的人要看说的人。英文叫 dual-speaker cross-attention，做法是在共享网络解码器的中间特征上，对同一帧让一路的查询去查另一路的键值，对称地双向更新，不做跨时间的注意力，时间仍由主干的 1 维卷积管。双流共享主干英文可记为 shared dual-stream backbone，含义是两路用同一套参数处理噪声输入，以学到与说话人无关的运动表示。

**双流共享主干 × 跨说话人注意力：** 双流共享主干负责让两个人的噪声输入走同一套时序卷积表示以保证运动表征一致，跨说话人注意力负责在解码器同帧内让一路特征查询另一路特征以建模即时反应，搭配理由是共享主干管时间连续而跨注意力管人与人耦合，组合后才能同时保持各自连贯与相互回应。

最后讲空间。白话说，房间布局决定头该转多少。训练时把 2 人首帧平移作为静态条件拼进条件向量，预测目标改为相对首帧的位移增量。推理时用户给一句自然语言，少样本提示的大语言模型输出两组 3 维坐标作为首帧平移。眼注视损失白话说是让眼睛看对地方，做法是把左右眼旋转转成前向向量再平均得到注视方向，算预测与真值的余弦相似度，只在头部旋转方差最大的 20% 样本上加更大权重，直觉是这些样本的眼神更有意义。

**相对位移条件 × 大语言模型空间预测：** 相对位移条件负责在训练时把首帧全局平移作为静态空间上下文并让网络预测相对首帧的增量，大语言模型空间预测负责在推理时把亲密交谈或隔桌争论等自然语言转成 2 人的首帧 3 维坐标，搭配理由是前者统一了坐标系而后者提供了可控入口，组合后文本才能驱动可渲染的共处布局。

三者合起来，一个样本的计算顺序是：混音转特征加掩码，掩码加权角色向量得状态，状态与音频拼成条件，双流主干给时间连续，跨注意力给即时耦合，首帧坐标给空间锚点，注视损失给眼球约束，最终输出双人 78 维序列。

### 两类数据如何构造，两阶段如何训练？

数据管线分两叉。上叉是双人会话数据：从网上大量双人对话视频出发，先按左右半屏背景颜色分布剔除视频会议式拼接，再按人脸框大小和关键点置信度剔除遮挡模糊过小，接着做超分增强、拟合 3 维参数并加时序平滑，同时用视听分离得到每人音频再做语音活动检测得二值掩码，还估计了带米制尺度的 6 自由度头姿。

下叉是合成配音数据：从高质量正脸单人视频随机剪段、时间对齐拼成伪双人对话，通过静音一路模拟轮流，也能精确模拟同时说话，因为每路来源干净，所以说话掩码真值完美且唇动保真。论文报告两类数据各在 50,000 小时量级、身份上万，另有一个单人高清语料专供唇同步专家。
这张管线图上半画过滤与拟合，中部画随机剪切拼轮流，下半用六格实例显示蓝色网格覆盖在室内外对话上的效果。

> **看图路径：** 1. 先看上半部分从会话视频到多种过滤器再到三维拟合的分支；2. 再看中部单人音视频经随机剪切拼成轮流音频的示意；3. 最后看底部六格蓝色三维人脸覆盖在真实场景上的例子

[![原论文 Figure 3：Our Data Curation Pipeline. This figure illustrates our two-pronged approach to dataset creation.](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/56cb60b9e44f/figure-3.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/56cb60b9e44f/figure-3.png)

*论文图 3。原论文 Figure 3：“Our Data Curation Pipeline. This figure illustrates our two-pronged approach to dataset creation.”。*

像素细节值得细读。上半过滤框明确列出关键点置信度、人脸框大小、头部旋转尺度三项，下方说话掩码画成两行互补的灰白条，右侧示例从原图到绿点再到蓝色网格三列递进，说明拟合质量。中部把单人音视频先切成虚线段再拼成交替说话条，图标上 3 个人头表示说话人交替。下半六格覆盖酒馆、户外、会议室等，蓝色头颈与真实衣服身体的接缝肉眼可见，这提醒我们拟合主要管头颈，身体只是背景。

复现时要保留的细节是场景过滤用背景色、质量过滤用框加置信度、掩码训练时存盘而推理时现算。
训练分 2 个阶段。第一阶段在海量会话数据上预训练双流模型，学一般的视听对齐与说听动态，涵盖旋转等交互行为。第二阶段用高分辨率单人数据加超分后关键点置信高的数据子集微调，对单人数据只对说话人嘴部 20 个表情参数算重建损失，其余旋转平移非唇表情置零，且该 20 维由底层语义区域主成分框架严格限定在嘴部变形空间。

优化在 16 卡上做 200,000 步，批量 1024，学习率 1e-4，余弦噪声表，推理用 2.5 的无分类器引导权重。损失权重与音频格式等条件整理如下。
比较的问题是：2 阶段的计算代价与监督范围是否公平可比，指标方向是权重越大约束越强但不代表越大越好，公平条件是同一主干同一数据划分下只改监督范围。下表把原文连续句中的关键超参数集中呈现，便于复现时逐项核对，表中缩写与原文一致，数值与单位保留原文写法。

| 条件 | 指标 | 基线 | 本方法 | 比较对象 |
| --- | --- | --- | --- | --- |
| 16 卡训练 200,000 步 | 步数与批量 | 200000 步 | 1024 批量 | AdamW 加余弦噪声表 |
| 重建损失权重 | 表情旋转平移 | 1 | 8 | 1 |
| 正则损失权重 | 速度与注视 | 1 | 5 | 2.5 引导权重 |

表后解释需要说清收益与代价。收益是旋转权重给到 8、注视给到 5，表明论文把头姿与眼神看得比逐帧表情更重要，这与面对面交互的直觉一致。代价是批量 1024 在 16 卡上对显存与通信要求高，小实验室直接复现需按梯度累积折算，且原文未报告学习率衰减细节与早停规则，复现时应先固定 200,000 步再调。

未胜出项是第二阶段为保口型把非唇损失置零，这意味着微调阶段的头动多样性可能被削弱，后文消融会看到只做第一阶段与只用单人数据的两极表现。

**会话交互数据 × 合成配音数据：** 会话交互数据负责提供真实双人轮流、点头、注视和空间关系，合成配音数据负责提供干净正脸单人拟合拼出的伪对话与精确说话掩码和口型，搭配理由是前者交互丰富但遮挡多口型模糊，后者口型准但无真实交互，组合做 2 阶段训练才能兼得自然反应与准确唇动。

**扩散重建损失 × 眼注视辅助损失：** 扩散重建损失负责让预测的表情、旋转和平移接近真值，眼注视辅助损失负责计算预测与真值注视方向向量的余弦相似度以约束双眼朝向，搭配理由是重建损失管整体运动而注视损失专管眼球这种小幅但社交意义强的信号，组合后在大头部转动子集上加权才能学到对视与回避而不破坏口型。

### 测什么、跟谁比、条件是否一致？

实验要回答 4 个问题：整体真实感与交互是否更好，口型与头眼精度是否更高， diversity 是否保留，空间可控是否可用。与谁比按 3 类组织。单人说话头类用干净分离音频分别驱动，含 3 个公开代码基线和一个在本文单人数据上训的单人模型，它们能做逼真唇动但无倾听反应与人际依赖。说话加倾听类把主动说话模型配单独倾听模型，含随机倾听、按音频或动作检索最近邻、以及两个已发表的交互模型，用于检验自然反馈。

双说话人类含一个分身份建模说听但不同时生成两路的方法。翻译结果只与基于检索的方法比，因为其他基线本来不预测平移。
指标按原文分为渲染级与参数级。渲染级用距离度量真实感与交互，越低越好。参数级用均方误差度量整体、表情、旋转、平移、眼、唇，顶点级用顶点均方误差， diversity 用指标越高越好。

定量结果用真值平移作条件以便逐顶点比较，定性空间多样性则用文本经大语言模型预测的首帧坐标。测试集是 2048 个训练未见的音频人脸对，每段音频 10 秒、25 帧、共 250 帧，音频 16 千赫转 768 维语音特征。用户研究找 31 人看 14 组双人片段，按唇质、说话头动、倾听头动、交互质量、眼神 5 维做迫选。
实现细节还交代了硬件与推理条件，整理成下表以便核对采样、序列长度与评测规模，表中单位保留原文写法，裸数值不擅自添单位。

| 条件 | 指标 | 基线 | 本方法 | 比较对象 |
| --- | --- | --- | --- | --- |
| 音频采样与特征 | 采样率与维度 | 16 千赫 | 768 维 | 语音特征 |
| 序列长度 | 时长与帧率 | 10 秒 | 25 帧每秒 | 250 帧 |
| 评测规模 | 未见对数 | 2048 对 | 双人同步 | 真值平移条件 |

表后解释要讲清公平性与限制。公平处是主定量统一用真值平移作条件，避免空间预测误差污染口型与表情比较。不完全公平处是单人基线需先做音频分离再独立驱动，分离误差会传导，而本文用混合音频加掩码端到端，流程不同。

限制是原文把指标定义细节放到附录，正文只给方向与缩写，复现时必须回到附录核对聚合口径，不能把数值相同当成同一指标，也不能把自动指标当人评。

### 主结果：哪里赢了，哪里没赢？

先看可视对比。左侧四列按同一句台词摆出双人 4 帧，前两行是正常轮流，后两行是短暂同时说话，红框标出显著唇动，最右列是 4 种空间文本对应的首帧渲染。导读时应逐行看：轮流时说话人嘴是否张开而倾听人是否保持注视，同时说话时两路是否各自有独立唇动而不互相拷贝，空间列中并排、面对面、转身问候、侧身说秘密的朝向是否真的不同。

> **看图路径：** 1. 按行对比同一句台词下四种方法的嘴部红框差异；2. 观察第三四行两人同时说话时左右两列是否都有口型变化；3. 再看最右侧四种文本描述对应的双人首帧朝向变化

[![原论文 Figure 4：Left: Result of our model compared with baselines, shown as a few representative frames from one…](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/56cb60b9e44f/figure-4.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/56cb60b9e44f/figure-4.png)

*论文图 4。原论文 Figure 4：“Left: Result of our model compared with baselines, shown as a few representative frames from one sequence.”。*

这张像素图的教学价值在于反例。单人基线在轮流行的唇动偏弱，双说话人基线在重叠行的两路嘴型趋同，而本文完整模型在重叠行左右两列都有红框，说明解耦有效。仅第一阶段的模型头动自然但唇框少，说明第二阶段确实补了口型。最右侧并排时 2 人朝向一致且一高一矮，面对面时侧脸相对，问候时 1 人转头，说秘密时 1 人前倾 1 人侧头，说明首帧坐标控制了全局布局而注视仍由模型生成。

注意顶部还有一行数字，那是原表的一部分，像素模糊处不要硬读，应以正文表格为准。
主观偏好用原用户研究表呈现。比较问题是：在唇同步、说话头动、倾听头动、交互、注视 5 维上，本文完整模型是否被更多人选为最佳，公平条件是同一批 31 人看同一批 14 组片段做迫选，指标方向是百分比越高越好。下表直接选用原表六列，保留 1 位小数与原精度。

| Method | Lip-Sync | Speaker | Listener | Interact | Gaze |
| --- | --- | --- | --- | --- | --- |
| SelfTalk | 0.6 | 0.9 | 1.4 | 1.6 | 3.0 |
| DualTalk | 3.9 | 5.9 | 5.9 | 4.8 | 8.8 |
| Ours (S1) | 17.2 | 19.5 | 16.5 | 20.3 | 19.6 |
| Ours | 78.3 | 73.7 | 76.2 | 73.3 | 68.6 |

表后解释要给收益与代价。数据显示完整模型在 5 维分别获得 78.3、73.7、76.2、73.3、68.6 的偏好，明显高于仅第一阶段的 17.2 至 20.3，以及两个最强基线的个位数，报告显示第二阶段对唇同步提升最大，这与只监督嘴部 20 维的设计一致。代价与反例是注视维的 68.6 是 5 维中最低，说明眼神仍是最难项，且单人基线在注视拿到 3.0 高于其他维，提示正脸单人数据对眼球有帮助但不能解决交互。

未评测边界是文本到平移的准确性未在这张表里，主定量用的是真值平移，因此空间预测误差未被计入偏好之外的自动指标，部署时需另测。
客观自动指标方面，原文报告本文在几乎所有误差与真实感指标上最优，跨注意力改善了头部协调，单人基线在说话人顶点误差上偶有接近但在倾听与交互上落后，检索类方法在旋转平移多样性上偶有更高但保真低。

由于原大量化表表头缺失无法安全选择，本文不硬贴裸值，复现者应以原文附录的指标定义与测试集为准，不要把不同指标的差值混放一列。

### 拿掉哪块会怎样：对照能证明什么？

消融按 1 次只动一项组织。只用单人数据训练表现差，因为没有倾听监督。只用会话数据训练表情精度下降，因为野外唇部模糊。去掉角色嵌入则倾听反应不自然，去掉跨注意力则轮流碎裂且真实感距离上升，去掉注视损失则相互注视真实感下降且相关误差上升。原文的结论是数据集、训练阶段与架构缺一不可，共同提升定量精度与感知质量。

教学上要区分直接报告与有限解释。报告显示第二阶段改善唇同步，支持跨注意力协调头动的判断，但可能与待验证的推测要分开：掩码轻微不准有助于鲁棒是作者给出的直觉，未做噪声水平的系统扫描，不能当成因果。同样，大头部转动子集加权注视能学到对视是合理的，但未测量误判率与延迟，不能承诺实时性改善。复现消融时应固定真值平移条件、同一测试集与同一引导权重，否则差异可能来自空间条件而非组件。

### 边界与未验证：什么还没测？

先说信息条件。推理依赖分离加检测现算的说话概率，训练依赖预存掩码，两者分布不一致时性能如何原文未量化，重叠严重与 3 人以上场景不在任务定义内。空间控制依赖大语言模型少样本预测的首帧坐标，提示结构与示例在补充材料，正文未报告文本到坐标的误差，用户研究也未单独评空间准确性，因此可控不等于精确。尺度用平均瞳距假设恢复到近似米制，极端头型或儿童脸可能有偏。
再说数据与评测。

会话数据虽大但拟合真值本身来自单目重建加时序平滑，遮挡帧的唇部与眼球仍是估计值，合成数据虽干净但伪对话的韵律与打断是人工拼接，与真实重叠的语义连贯性不同。自动指标定义在附录，正文未给公式，百分点与相对百分比不可混用。资源方面只报告 16 卡 200,000 步批量 1024，未报告 wall 时间、推理帧率与延迟，训练资源、推理开销、输出帧率与实际延迟应分别讨论，不能用训练规模推断实时性。

缺失证据不是技术错误，但部署前需补验证：换分离器、换语言、换视角与极端重叠下的口型与注视，以及首帧坐标误差对注视的传导。

### 复现先做什么，需要哪些超参数？

复现建议按数据、模型、训练、推理 4 步走。数据先复现过滤：左右半屏背景色剔除拼接会议，框大小加关键点置信度剔除低质，超分增强后再拟合 3 维并加时序平滑，分离加检测得掩码并存盘，单人高清正脸另存一套。模型按双流共享时序网络加解码器同帧跨注意力实现，条件拼语音特征、双角色向量、双掩码与首帧平移，调制用缩放平移分支。训练先在会话数据上预训练交互，再在单人加高置信子集上微调且只监督说话人嘴部 20 维，其余置零。

推理先分离得掩码，再由文本经大语言模型得首帧坐标，或直接用真值坐标做对齐评测，引导权重取 2.5。
关键超参数保留原文写法：16 千赫采样，768 维语音特征，10 秒每段，25 帧每秒，250 帧每序列，2048 对测试集，16 卡，200,000 步，批量 1024，学习率 1e-4，余弦噪声表，随机一成遮音频条件，表情 1、旋转 8、平移 1、速度 1、注视 5。资源状态方面，本次收到的证据未绑定完成验证的代码模型数据资源，不得声称已公开可用，需按原文链接自行确认可达性。

常见误解是把合成数据的完美掩码当成真实性能，实际上合成只用于保口型，交互仍靠会话数据，评测时必须用真实混合音频加现算掩码。

### 何时值得尝试，一句话收束

当你的应用是同处一室的双人对话，需要 1 次生成两路带空间与对视的动画，且能接受先做声源分离得掩码、先定首帧布局的流程时，这个双流加跨注意力加 2 阶段的方案值得尝试。它把难事拆成了解耦、角色、耦合、空间四件：掩码与角色管谁说谁听，共享主干管时间，跨注意力管即时反应，首帧坐标与注视损失管房间与眼睛。证据支持它在感知偏好与多项误差上优于视频会议式基线，代价是训练批量大、空间预测误差未进主表、眼神仍是 5 维中偏好最低。下一步验证应补首帧误差传导、跨语言与强重叠下的唇眼稳定性，以及真实延迟与帧率，再谈沉浸式部署。

## 📐 原文公式与排版

以下展示论文原页中的数学表达区域，保留原始上下标、分式和符号排版。区域序号仅用于本文导航，不是论文公式编号。

[![原文数学表达区域 1，PDF 第 3 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/f06755f55943/figure-1.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/f06755f55943/figure-1.png)

区域 1 · [查看论文原页](https://openaccess.thecvf.com/content/CVPR2026/papers/Shan_Talking_Together_Synthesizing_Co-Located_3D_Conversations_from_Audio_CVPR_2026_paper.pdf#page=3)

[![原文数学表达区域 2，PDF 第 4 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/f06755f55943/figure-2.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/f06755f55943/figure-2.png)

区域 2 · [查看论文原页](https://openaccess.thecvf.com/content/CVPR2026/papers/Shan_Talking_Together_Synthesizing_Co-Located_3D_Conversations_from_Audio_CVPR_2026_paper.pdf#page=4)

[![原文数学表达区域 3，PDF 第 4 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/f06755f55943/figure-3.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/f06755f55943/figure-3.png)

区域 3 · [查看论文原页](https://openaccess.thecvf.com/content/CVPR2026/papers/Shan_Talking_Together_Synthesizing_Co-Located_3D_Conversations_from_Audio_CVPR_2026_paper.pdf#page=4)

[![原文数学表达区域 4，PDF 第 4 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/f06755f55943/figure-4.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/f06755f55943/figure-4.png)

区域 4 · [查看论文原页](https://openaccess.thecvf.com/content/CVPR2026/papers/Shan_Talking_Together_Synthesizing_Co-Located_3D_Conversations_from_Audio_CVPR_2026_paper.pdf#page=4)

另有 8 个候选区域因边界不明确或图片数量、尺寸限制未展开；请[查看完整论文](https://openaccess.thecvf.com/content/CVPR2026/papers/Shan_Talking_Together_Synthesizing_Co-Located_3D_Conversations_from_Audio_CVPR_2026_paper.pdf)中的原始排版。

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。
- 评分规则：type-aware-v1
- 评分模型：muse-spark-1.3-contributor
- 评分请求协议：openai_responses

---

[← 返回 cvpr-2026 论文汇总](/posts/conference-cvpr-2026/)
