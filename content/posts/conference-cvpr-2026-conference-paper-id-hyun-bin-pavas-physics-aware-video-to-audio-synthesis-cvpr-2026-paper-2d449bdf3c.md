---
title: "PAVAS: Physics-Aware Video-to-Audio Synthesis"
date: 2026-09-13
draft: false
description: "针对视频生音频只学外观关联而忽视撞击轻重的问题，PAVAS 用估计出的物体质量与速度去调制潜在扩散模型，在 VGGSound 与 VGG-Impact 上同时报告了分布、感知与物理一致性证据，但依赖多组冻结视觉模块且未验证延迟与成本。"
tags: ["Adapter", "扩散模型", "音视频", "视频到声音生成"]
categories: ["cvpr-2026 论文"]
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_paper_id: "conference:cvpr:2026:conference-paper-id:Hyun-Bin_PAVAS_Physics-Aware_Video-to-Audio_Synthesis_CVPR_2026_paper"
paper_digest_source_kind: conference
paper_digest_conference_id: "cvpr-2026"
paper_digest_conference_record_url: "https://openaccess.thecvf.com/content/CVPR2026/html/Hyun-Bin_PAVAS_Physics-Aware_Video-to-Audio_Synthesis_CVPR_2026_paper.html"
paper_digest_conference_pdf_url: "https://openaccess.thecvf.com/content/CVPR2026/papers/Hyun-Bin_PAVAS_Physics-Aware_Video-to-Audio_Synthesis_CVPR_2026_paper.pdf"
paper_digest_api_reader_contract: "beginner-researcher-v3"
paper_digest_api_reader_article_sha256: "4587dd1a87bba68931f2fce6de986275ea724e3dd3a44b4f3a9fa7acc12fdca2"
paper_digest_api_reader_plan_sha256: "dc70a11960e284f196b6ed9419e2a1d7ad4d96b52616e4ae9b22be2452abc02a"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings-v4"
paper_digest_api_reader_source_bindings_sha256: "844c955aa8053127a82f7f0c49561994a0a3ccf3fad550ff1b52f75ad2e87e2e"
paper_digest_api_reader_source_table_count: 3
paper_digest_api_reader_source_formula_count: 0
paper_digest_api_reader_structured_artifacts_sha256: "9b4e51930137ff72ed443cccb10cdfe9c7f2d600abb4d01cc801a48e433e6fb8"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity-v1"
paper_digest_api_reader_author_identity_sha256: "a98f8245270b427cdead95989ee2f77e711cc9a510093c413b7058abc9054360"
paper_digest_api_reader_author_count: 5
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity-v1"
paper_digest_api_reader_resource_identity_sha256: "835ad552227bf53e6275221841a0540ba8ba39c5aa6ab90d412919ca8c26b58c"
paper_digest_api_reader_resource_count: 1
paper_digest_api_reader_decision_projection: "api-reader-decision-projection-v2"
paper_digest_scoring_contract: "api-scoring-audit-v2"
paper_digest_taxonomy_contract: "paper-taxonomy-flat-tags-compat-v1"
paper_digest_taxonomy_selection_contract: "paper-taxonomy-selection-v1"
paper_digest_taxonomy_registry_version: "paper-taxonomy-v1"
paper_digest_taxonomy_registry_sha256: "15c82a567ce5a55dc1175684ed08b64c158558639d9c8fb822c9587ec32a8778"
paper_digest_taxonomy_concepts: [{"facet":"method","id":"method.adapter","label":"Adapter"},{"facet":"method","id":"method.diffusion","label":"扩散模型"},{"facet":"signal","id":"signal.audiovisual","label":"音视频"},{"facet":"task","id":"task.video-to-audio","label":"视频到声音生成"}]
paper_digest_primary_task: "视频到声音生成"
paper_digest_primary_method: "Adapter"
paper_digest_score: 6.9
paper_digest_rank_bucket: "前50%"
paper_digest_document_type: "方法研究"
paper_digest_conference_structure: replayable-pdf-layout-v1
---

# 📄 看得见撞击，还要听得出轻重：PAVAS 把质量与速度写进视频生音频

> 英文题目：*PAVAS: Physics-Aware Video-to-Audio Synthesis*

> 会议身份：`conference:cvpr:2026:conference-paper-id:Hyun-Bin_PAVAS_Physics-Aware_Video-to-Audio_Synthesis_CVPR_2026_paper`


> ✅ 来源为官方会议 PDF；表格与 Figure 按原文证据绑定。PDF 公式以原页区域图片展示，未冒称作者原始 TeX。

> 会议来源：[官方记录](https://openaccess.thecvf.com/content/CVPR2026/html/Hyun-Bin_PAVAS_Physics-Aware_Video-to-Audio_Synthesis_CVPR_2026_paper.html) · [官方 PDF](https://openaccess.thecvf.com/content/CVPR2026/papers/Hyun-Bin_PAVAS_Physics-Aware_Video-to-Audio_Synthesis_CVPR_2026_paper.pdf)

标签：#Adapter #扩散模型 #音视频 #视频到声音生成

评分：**6.9/10** | 创新 1.6/2 | 技术严谨 1.0/1.5 | 实验充分 1.0/1.5 | 清晰度 0.8/1 | 影响力 1.0/1.5 | 开源 0.2/1.5 | 可复现 0.3/0.5 | 工程/实践 1.0/1.5

排名：前50% | 文档类型：方法研究

## 👥 作者与机构

- Oh Hyun-Bin：机构信息未能从会议 PDF 纯文本可靠映射
- Yuhta Takida：机构信息未能从会议 PDF 纯文本可靠映射
- Toshimitsu Uesaka：机构信息未能从会议 PDF 纯文本可靠映射
- Tae-Hyun Oh：机构信息未能从会议 PDF 纯文本可靠映射
- Yuki Mitsufuji：机构信息未能从会议 PDF 纯文本可靠映射

## 📌 核心摘要

视频到音频生成的输入是无声视频与类别文本，输出是时间同步且语义一致的波形，其实际难点在于撞击响度与频谱应随物体质量与运动速度连续变化，而现有模型仅学习外观关联。PAVAS先由物理参数估计器发现运动物体并估计时不变质量与逐帧米制速度，为后续条件提供可解释物理量。接着物理驱动音频适配器将归一化后的质量与速度经傅里叶映射编码，并与对象中心视觉特征融合成物理增强条件。然后该条件以零初始化残差调制注入多模态扩散变换器，引导音频潜变量生成，使扩散轨迹对齐物理一致的视听行为。与直接拼接辅助信号的做法不同，该渐进式残差注入避免扰动原有多模态表征，并使质量与速度效应可控叠加。在VGGSound测试集下，PAVAS-L的FD_PaSST指标为47.38，低于MMAudio-L的FD_PaSST指标为60.60。该结论适用边界限于撞击类短事件与可分割可见物体，对遮挡、离屏声源与材料因素尚未验证。原文未披露训练、推理或部署成本。

## 🔗 开源与复现资源

- 演示资源：<https://physics-aware-video-to-audio-synthesis.github.io> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 输入是什么，要输出什么，读这篇要先留住哪些信息？

输入是一段无声视频，目标是生成一段在时间上对齐、在语义上对应、且在物理上可信的音频。所谓物理上可信，在这篇论文里有很具体的含义：声音的响度、频谱锐度与衰减应当随撞击强度、物体运动速度与物体质量而变化，而不是只要出现锤子就播放一段固定音色的金属声。读者需要先留住 3 个信息。第一，任务是视频到音频生成，英文为 Video-to-Audio，缩写为 V2A，输出是波形，中间经过梅尔频谱与变分自编码器隐变量。

第二，论文把物理量限定为两个可以直接估计的量：随时间不变的物体质量，单位为千克，以及逐帧变化的速度，单位为米每秒。第三，评价不只看好不好听，还要看动能变化与起振强度变化是否同向变化。

白话先说外观驱动。外观驱动指模型学会了画面与声音的共现关系，例如看到锤击就配金属声，但没有建模锤子多重、挥得多快。论文用锤钉子的例子说明，已有模型可能生成异常长或异常响的撞击声，时间点大致对了，但轻重不对。这就是作者所说的缺乏物理接地。物理接地不是哲学判断，而是指视觉动力学与声学行为之间应当存在可测量的对应关系。初学者容易把同步做好就当成物理做好，本文恰好把两者分开：同步回答何时响，物理回答响成什么样。

为了建立这种对应，作者提出 PAVAS，全称为 Physics-Aware Video-to-Audio Synthesis，中文可理解为物理感知的视频到音频合成。它包含两个关键模块。第一个是物理参数估计器，英文为 Physics Parameter Estimator，缩写为 PPE，负责从视频中估计质量与速度。第二个是物理驱动音频适配器，英文为 Physics-Driven Audio Adapter，简称 Phy-Adapter，负责把估计出的物理量注入潜在扩散模型。潜在扩散指先在压缩后的音频隐空间做生成，再经解码器与声码器变成波形。主干是多模态扩散变换器，同时接收视频、文本与音频条件。

阅读时还要记住论文的资源状态。官方演示页当前可用，地址为论文中给出的项目主页，状态码为 200。这意味着可以试听例子，但不能把试听当成定量证据。定量证据只看正文报告的分布距离、感知质量、语义对齐、同步误差与物理相关差距，以及用户评分。下面的例子只是帮助理解的教学例子：假设同一段锤子视频，轻敲与重挥应当对应不同的起振强度；如果模型对 2 次挥动输出几乎相同的声音，就属于物理不一致，即使时间点完全对齐。

上半部分用两条频谱直观给出这种不一致，下半部分给出本文希望走通的路径，从输入视频经物理估计再经适配器调制扩散模型，最终得到物理上更合理的音频。

> **看图路径：** 1. 先看上半部分真值与 MMAudio 两条频谱在蓝色虚框处的亮带宽度与延续长度；2. 再看下半部分输入视频三帧中锤子位置与红色连线指向估计器的路径；3. 最后对比右下角物理条件注入多模态扩散变换器后 Ours 频谱的冲击形态

[![原论文 Figure 1：Physics-Aware Video-to-Audio Synthesis (PAVAS).](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/e5a744006438/figure-1.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/e5a744006438/figure-1.png)

*论文图 1。原论文 Figure 1：“Physics-Aware Video-to-Audio Synthesis (PAVAS).”。*

上图上半部分左侧为真值频谱，右侧为 MMAudio 生成频谱，蓝色虚框标出同一次锤击对应的冲击亮带，可以看到生成结果的亮带更宽更长，图注明确写为异常长或异常响。下半部分左侧 3 帧输入视频显示锤子运动，中间物理参数估计器给出锤子质量为 3.5 千克与若干速度数值，右侧红色箭头表示物理线索经 Phy-Adapter 进入多模态扩散变换器，左下角 Ours 频谱的冲击形态比上半部分更接近真值。该图的作用是把任务矛盾固定下来：不是能不能配上声音，而是配的声音是否随物理量变化。

### 同输入同目标的已有路线差在哪里？

视频到音频合成的目标是一致的：输入视频，有时加文本，输出时间同步且语义对齐的声音。已有路线按生成器可分为自回归、生成对抗网络与基于扩散的方法。近年扩散方法在感知质量与同步上进步明显，MMAudio 利用大规模文本音频数据加少量视频数据联合训练，成为较强的基础。论文把这些工作归为外观驱动，意思是它们依赖视觉声学相关，例如出现篮球就配弹跳声，并用起振点、运动能量或梅尔线索辅助同步，但这些线索往往是平滑后的特征，难以捕捉细粒度的撞击动力学。

另一条线是从视频估计物理参数。早期工作从视觉或仿真交互中预测质量、摩擦或弹性。质量估计方面，有方法结合神经辐射场与视觉语言特征，但需要静态多视角，无法处理动态视频。速度估计方面，有方法分割独立运动区域，但多依赖雷达或激光雷达，且集中在车辆场景。本文的差异在于只用单目动态视频，同时处理开放词汇的任意类别，并输出度量尺度的 3 维质心轨迹，从而得到米每秒的速度。

第 3 条线是向视频生音频中注入物理线索。已有工作有用物理先验生成鼓槌敲击声，但只限鼓槌；有用材质参数控制室内声学画像，但面向室内或增强现实创作，不显式建模物体级质量与运动动力学。本文的对照是有源的：同为视频输入、同为生成声音，但前者限定物体或场景，后者要处理开放世界的物体间交互，例如碰撞、撞击与弹跳。因此不能把类别差异直接当成同条件胜负，本文为此单独构造了聚焦撞击的评测子集。

理解这 3 条线后，就能定位 PAVAS 的位置：它不重新发明扩散主干，而是在主干之外增加可估计、可注入的物理条件，并用新的相关性指标检验声音是否随物理量变化。这是后文方法与实验的依赖基础。

### 要解决的判断题是什么，什么算做对？

问题可以写成一道判断题：给定一段包含物体间交互的视频，生成的音频是否在对的时刻响，且响的强度与频谱形态随真实物理量单调合理地变化。做对的标准有两个层面。感知层面要求分布接近真值、音质好、语义对、同步误差小。物理层面要求当动能损失大时，起振谱能量也大；当动能损失小时，起振弱。

论文把第二个层面操作化为音频物理相关系数，英文为 Audio-Physics Correlation Coefficient，缩写为 APCC。它先在音频中检测起振并测量谱强度，再用估计的质量与撞击前后速度计算动能变化，然后在每个声音类别内计算两组序列的相关，最后比较生成音频的相关与真值相关的差距，记为 APCC-∆。差距越小，说明生成音频复现了真实的动能到声音的耦合。

需要区分相关性与因果。APCC 报告的是相关差距，不是证明模型理解了物理定律。它能发现明显违背物理的生成，例如重击配轻声或轻触配巨响，但不能证明每 1 次生成的绝对响度都正确。同样，分布距离与同步指标好，不等于物理好，这正是论文用同一批模型同时报告两类指标的原因。初学者应先记住指标方向：分布距离与同步误差越小越好，音质分数与语义相似度越大越好，APCC-∆越小越好，用户评分越大越好。

### 沿着一个锤子样本走完全流程

假设输入是一段 8 秒的锤钉子视频。第一步，运动物体发现模块用视觉语言模型读入视频帧，输出结构化描述，例如运动物体为锤子，动作为敲击。原文使用的视觉语言模型为 Qwen2.5-VL 一类模型，细节在补充材料中给出提示词。这里的输出是文本级的物体与动作对，作用是为后续质量估计与分割提供开放词汇的查询词。

第二步，质量估计把物体名、动作与视频上下文连同文本提示一起送入质量估计器，输出一个随时间不变的标量，例如 3.5 千克。速度估计走另一条路：先用 Florence-2 按文本描述输出边界框，再用 SAM-2 精化为像素级二值掩膜并向前后帧传播，得到每帧每物体的掩膜序列；同时用 CUT3R 做动态 3 维重建，得到每帧稠密点云与相机外参；再把掩膜经逆投影映射到点云，聚出属于锤子的 3 维点集并求质心；最后按帧率换算相邻帧质心位移为瞬时速度。这样每个物体得到一条米每秒的速度序列。

第三步，视觉编码器对视频帧提取块特征，Phy-Adapter 用掩膜对块特征做掩膜求和，得到以物体为中心的每帧特征；缺失或遮挡帧用可学习的遮挡标记补齐，保证时间连续。第四步，质量与速度分别经对数或标准化、傅里叶特征映射与多层感知机变成嵌入，再经线性层生成调制系数，用 FiLM 方式缩放与平移物体中心视觉特征。质量调制在时间上恒定，影响全局响度与衰减；速度调制逐帧变化，适配瞬时运动。

第五步，经门控池化聚合成质量条件与速度条件，与视频、同步、文本与时间步条件融成的多模态条件一起，通过残差式的增量调制进入扩散变换器的自适应层归一化参数，引导隐变量从噪声向音频隐变量演化，最后经解码器与声码器变成波形。

下图把上述分支画全，左侧为视频帧与估计器，中间为适配器，右侧为扩散主干，品红色虚线为物理条件的注入路径。

> **看图路径：** 1. 先沿左侧视频帧到 Ep 与 PPE 两条分支，确认掩膜与点云在哪里汇合；2. 再看中部速度嵌入与质量嵌入分别进入上下两个 FiLM 层的箭头；3. 最后看右侧品红色虚线 c_vel 与 c_mass 指向多模态与单模态扩散块的位置

[![原论文 Figure 3：Overall pipeline of the proposed Physics-Aware Video-to-Audio Synthesis (PAVAS).](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/e5a744006438/figure-3.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/e5a744006438/figure-3.png)

*论文图 3。原论文 Figure 3：“Overall pipeline of the proposed Physics-Aware Video-to-Audio Synthesis (PAVAS).”。*

该图左侧视频帧同时进入 Ep 分支与 PPE 分支，Ep 输出块特征，PPE 输出物体掩膜、3 维点云、速度与质量。掩膜与块特征相乘得到掩膜块特征，再池化为物体中心视觉特征；速度与质量分别经嵌入层后与该特征在上下两个 FiLM 层融合，得到 c_vel 与 c_mass。右侧 Es、Ev、Et、Ea 分别编码同步、视频、文本与音频，融成 c_multi 后进入多模态扩散块，c_vel 与 c_mass 以品红色虚线从侧路注入，底部经自适应层归一化输出流场。该图应与上一段文字逐箭头对照阅读，重点是物理条件不是替代视觉条件，而是在保留多模态条件的同时做残差增量。

### 估计器与适配器各自算什么，怎么连起来？

先讲估计器的计算目标。给定长度为 L 的视频帧序列，估计器要输出所有感知运动物体的集合，以及每个物体的时间不变质量与长度为 L 减 1 的速度序列。运动发现排除纯相机运动造成的视差，只保留真正的物体运动。文本描述一经得到，就同时服务于质量估计的提示构造与速度估计的分割查询，这是统一 3 个阶段流水线的关键。

质量估计不依赖多视角几何，而是依赖视觉语言模型内嵌的物理常识。输入为视频上下文与构造好的质量提示，输出为千克数。论文报告该估计器在质量与速度上达到与专用专家模型相当甚至更优的水平，细节放在补充材料中，正文只把 favorable performance 作为可用作条件的依据。初学者不应把这句话读成质量估计绝对准确，而应读成误差已小到足以支撑条件注入，后文消融会验证拿掉质量条件后分布指标确实变差。

速度估计的几何链需要仔细展开。Florence-2 输出与目标类别对齐的边界框，SAM-2 将其精化为二值掩膜并跨时间传播，CUT3R 重建每帧点云与外参。逆投影把掩膜像素映射到对应 3 维点，聚成物体 3 维点集，求质心得到度量空间位置。设帧率为 FPS，时间间隔为其倒数，位移除以时间间隔即瞬时速度。原文明确写出该公式，但本次未收到可用公式像素，按要求不单独展示公式编号，只保留文字可复述的计算顺序。缺失帧同样用可学习的速度遮挡标记保持连续。

再讲适配器的 3 段计算。第一段为物体特征提取：对每帧每物体，用二值掩膜对 CLIP 视觉块特征做掩膜求和，再经仿射投影与层归一化得到隐藏表示，缺失帧用物体遮挡标记替代。第二段为质量与速度调制：质量经对数加 1 与数据集均值方差标准化，速度用均值方差标准化，两者分别经傅里叶特征映射与多层感知机得到嵌入，再广播展平为序列，经线性层生成缩放与平移系数，以带双曲正切约束的 FiLM 形式作用于物体中心特征。

第 3 段为聚合与注入：对调制后的质量与速度特征分别做门控池化，权重由多层感知机加 Sigmoid 生成，再与多模态条件一起经零初始化的多层感知机与可学习门控生成残差增量，叠加到自适应层归一化参数上。零初始化保证训练初期物理分支不扰动主干，门控控制注入幅度。

**物理参数估计器 × 视觉语言模型：** 物理参数估计器负责从无约束视频中输出可用于声音调制的定量物理量，即随时间不变的物体质量与逐帧的速度序列；视觉语言模型在其中承担开放世界语义接口的分工，先把谁在动、在做什么写成物体名与动作描述，再据此外观与语义常识推断质量。两者搭配的理由是几何重建本身不认识物体类别，而质量又无法只从像素深度算出，需要语义先验补齐；组合后估计器既能定位运动实体，又能给出跨类别可泛化的质量数值，为后续音频调制提供输入。

**动态 3 维重建 × 速度估计：** 动态 3 维重建负责把单目视频恢复到带度量尺度的共享世界坐标系，给出每帧稠密点云与相机外参；速度估计负责把属于同一物体的 3 维点聚成质心轨迹，再按帧率换算成米每秒的瞬时速度。搭配的原因是单目深度往往缺时间一致性或缺实例区分，无法直接得到物理可解释的速度；组合后掩膜反投影到点云再求质心位移，就把 2 维分割与 3 维几何连成一条可微分之外的确定性计算链，输出后续条件所需的逐帧速度。

**物理驱动音频适配器 × 多模态扩散变换器：** 物理驱动音频适配器负责把质量、速度与以物体为中心的视觉特征融合成随时间对齐的物理条件；多模态扩散变换器负责在流匹配轨迹上从噪声逐步生成音频隐变量，并通过跨模态块传播视频、文本与音频信息。搭配的理由是直接把物理特征加进主干容易扰动已学好的多模态表示；组合后适配器用门控池化与残差调制向自适应层归一化参数注入增量，让扩散轨迹在保持感知质量的同时向物理一致的方向偏置。

3 个桥段分别对应质量语义、速度几何与条件注入，合起来说明 PAVAS 不是简单堆叠现有模块：没有监督的音频物理标签，质量与速度是无监督地从视频估计而来；轻量适配器提供有效注入路径，消融显示其增益超出单纯视觉特征的作用。

### 两阶段训练与推理时缺失条件怎么办？

训练分 2 个阶段。第一阶段训练多模态潜在扩散主干，做通用视频到音频生成。数据为 VGGSound 视频音频对，加上大规模音频文本数据集补齐。音频文本数据缺视频标记时，用可学习标记替代缺失视觉标记，保持多模态主干兼容。所有音频裁为 8 秒片段，VGGSound 类别标签作为文本输入。

音频、视觉与文本编码器冻结，只优化扩散变换器块与条件通路。优化器为 AdamW，学习率为 1×10 负 4 次方，权重衰减为 1×10 负 6 次方，带梯度裁剪，批量为 512，迭代 300,000 次。生成框架为流匹配，模型学习从高斯噪声到音频隐变量的条件流场。

第二阶段接入 PPE 与 Phy-Adapter 做物理感知微调，只用 VGGSound。优化设置相同，迭代降为 30,000 次，学习率降为 1×10 负 5 次方。微调时以 0.1 概率把物理标记替换为空标记，以处理运动线索缺失或未检出的情况。推理时同样不强求完全可跟踪的可见物体：物体与速度缺失用遮挡标记补齐，画外音仍可由文本条件生成。模型有 16 千赫与 44.1 千赫两个变体，仅主干容量不同。

下表把训练与数据构造的关键配置固定下来，便于复现时核对迭代数、优化器、批量与评测子集规模。

| 配置项 | 取值 | 说明 | 来源条件 | 适用阶段 |
| --- | --- | --- | --- | --- |
| 主干迭代与优化 | 300k，AdamW，批量 512 | 学习率 1×10 负 4 次方，权重衰减 1×10 负 6 次方，带梯度裁剪 | 通用视频音频学习 | 第一阶段 |
| 物理微调迭代与优化 | 30K，学习率 1×10 负 5 次方 | 同优化设置，物理标记以 0.1 概率置空 | 仅 VGGSound | 第二阶段 |
| 音频时长与文本 | 8 秒片段，类别标签作文本 | 缺视频用可学习标记补齐 | VGGSound 加音频文本集 | 2 个阶段 |
| 物理评测子集 | 10 类，272 个撞击时刻 | 物体间交互，锤钉与篮球弹跳为例 | VGGSound 测试集筛选 | 评测 |
| 采样率变体 | 16 kHz 与 44.1 kHz | 仅主干容量不同 | 大模型为 44.1 kHz | 推理 |

表前已提出问题：2 阶段各用什么数据、优化量级与缺失处理。表后需要解释代价与边界：冻结编码器降低了训练成本，但物理分支依赖多个冻结视觉模块，推理链更长；0.1 置空与遮挡标记提高了鲁棒性，但也意味着遮挡严重或完全画外音时物理增益会减弱，不能期待每段视频都有同样的物理改善。论文未报告训练硬件时长与推理延迟，复现时需另行测量，不能从迭代数推定耗时。

### 数据、基线与指标如何保证可比？

数据侧用 VGGSound 做通用训练与测试，另从其测试集筛选出 VGG-Impact 做物理评测。筛选先按声音类别过滤，再人工去掉接触动力学模糊的片段，只保留撞击强度与物体惯量在视觉上可辨的瞬时交互，共 10 个声音类别与 272 个撞击时刻。这种构造保证 APCC 计算时的动能变化与起振强度都有明确事件锚点，避免把背景声或连续噪声当成撞击。

基线覆盖 9 个已有 V2A 模型，包括 See and Hear、V-AURA、VATT、Frieren、FoleyCrafter、V2A-Mapper、TARO、MMAudio-L 以及本文 PAVAS-L。参数量不含预训练编码器、潜在音频编解码器与测试时不用的声码器等模块。MMAudio 与 PAVAS 的大变体运行于 44.1 千赫，其余模型运行于 16 千赫，这一点在比较音质与分布距离时必须记住，采样率本身会影响频谱细节。部分结果用公开发布代码复现，部分用作者提供样本评测，文本输入的使用情况也不同，论文以符号区分，阅读时不应把不同测试条件下的数字直接当成严格同条件胜负。

指标分 4 组。分布匹配用 Fréchet 距离与 KL 散度，特征来自 PaSST、PANNs 与 VGGish，数值越小表示生成与真值分布越接近。音频质量用 Inception 分数，越大越好。语义对齐用 ImageBind 空间余弦相似度，越大越好。时间同步用 Synchformer 估计的去同步误差，越小越好。

物理一致性用 APCC-∆，越小表示生成音频复现真实动能到起振的耦合越好。用户研究另请 27 名参与者对 8 段生成音频按 1 到 5 分评价音质、语义、时间与物理可信度。

**VGG-Impact × 音频物理相关系数：** VGG-Impact 负责提供评测用的数据侧条件，即从测试集中筛选出质量与运动直接决定声音的物体间撞击片段；音频物理相关系数负责提供指标侧的计算，把撞击前后动能变化与音频起振谱能量变化在每个声音类别内做相关，再比较生成音频与真实音频的相关差距。搭配的原因是通用集主要测语义与同步，无法回答声音是否随物理量变化；组合后基准保证事件具有可辨的接触动力学，指标给出可解释的物理接地程度，二者共同承担物理真实性评测。

该桥段说明为何必须同时保留通用集与撞击子集：前者检验不退化，后者检验物理增益；只看前者会漏掉轻重错误，只看后者会忽略整体质量。

### 主结果显示了什么，代价与反例在哪里？

在 VGGSound 测试集上，PAVAS-L 同时报告了分布、质量、语义与同步指标。比较的问题是：在显式注入质量与速度后，通用感知质量是否保持且物理差距是否缩小。公平条件是同一测试集与同一组特征提取器，指标方向按上一节记忆。关键数字是 PAVAS-L 的 APCC-∆为 0.378，低于 MMAudio-L 的 0.536 与其他基线普遍超过 0.5 的水平；分布距离 PaSST 为 47.38，PANNs 为 3.99，均优于 MMAudio-L 的 60.60 与 4.72。

音质分数为 17.51，语义分数为 35.41，同步误差为 0.446，与 MMAudio-L 的 17.40、33.22、0.442 处于同一水平。频谱定性显示，在蹦床弹跳与音叉敲击等片段，PAVAS 的冲击亮带更贴合视觉事件时刻，而其他方法常出现与动力学不对齐的成分。用户研究中 PAVAS-L 四项均分分别为 4.23、4.47、4.45、4.37，高于 MMAudio-L 的 3.98、4.14、4.06、3.90。

下图先看左侧蹦床序列与右侧音叉序列中各模型频谱的差异，再回读数字表中的分布与物理差距。

> **看图路径：** 1. 先对照左侧顶部四张蹦床视频帧与底部时间轴上的说话、弹跳、落下、球击标记；2. 再逐行比较同一绿色虚线时刻各模型频谱中竖直冲击亮带的有无与宽度；3. 最后看右侧音叉敲击后共振段 Ours 与真值的水平谐波延续方式

[![原论文 Figure 4：Qualitative comparison of generated spectrograms.](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/e5a744006438/figure-4.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/e5a744006438/figure-4.png)

*论文图 4。原论文 Figure 4：“Qualitative comparison of generated spectrograms.”。*

左图底部时间轴标出说话、蹦床上弹、落到蹦床、被球击中 4 个事件，绿色虚线把视频帧与各行频谱对齐。可以看到真值在撞击时刻为窄而短的竖直亮带，Ours 行在对应时刻同样出现窄亮带，而部分基线在无撞击处仍有宽亮带或把说话段填满。右图为音叉敲击后共振，底部波形示意从敲击到衰减，Ours 与真值均保留清晰的水平谐波线与起始强起振，而部分基线出现断裂或弥散。该图支持数字结论：物理条件的增益主要体现在冲击时刻的谱形态，而非整体响度。

下表给出包含必要基线与可运行策略的数字对照，采样率差异已在表注中保留。

| 条件 | 物理差距 | 分布距离 | 音质与语义 | 同步 | 可运行策略 |
| --- | --- | --- | --- | --- | --- |
| See and Hear，415M，16 kHz | 0.566 | 219.0，24.58 | 8.58，33.99 | 1.204 | 公开代码复现 |
| MMAudio-L，1.03B，44.1 kHz | 0.536 | 60.60，4.72 | 17.40，33.22 | 0.442 | 作者样本评测 |
| PAVAS-L，1.04B，44.1 kHz | 0.378 | 47.38，3.99 | 17.51，35.41 | 0.446 | 本文可运行 |
| VGGish 距离与 KL | 未单独列出 | 1.15，1.55，1.35 | 同上 | 同上 | 同特征提取 |
| 采样率说明 | 同上 | 同上 | 同上 | 同上 | 大变体 44.1 kHz，其余 16 kHz |

表后解释主要收益与具体代价。收益是物理差距明显缩小，且分布与语义未退化，说明物理分支没有以牺牲通用质量换取相关性。代价是参数量达 1.04B 且依赖估计器链，推理成本高于轻量基线；同步误差 0.446 略高于 MMAudio-L 的 0.442，说明物理注入并未改善同步，也未在该项胜出。反例是 VGGish 距离为 1.15，差于 MMAudio-L 的 0.97，表明并非所有分布切面都最优。未评测边界包括多物体同时撞击、严重遮挡与画外音主导的片段，论文未给出这些条件下的 APCC，复现时不应把总体趋势推广到每组每步。

### 增益来自数据集适配还是物理条件与注入方式？

消融要回答 3 个递进问题。第一，仅把主干在 VGGSound 上继续训练更久，是否就能得到同样的提升。第二，质量条件与速度条件各自贡献多少，合起来是否更好。第三，同样用两个物理条件，直接相加与残差增量调制哪种更有效。所有消融用 S-16 kHz 主干并共享训练配置，保证比较条件一致。

结果显示，额外适配几乎无增益，说明主结果的提升不是数据集适配的副产品。单独加质量条件与单独加速度条件均改善分布与感知指标，合用两者得到最好结果。注入方式上，残差增量调制优于直接求和，支持论文的安排理由：以零初始化残差逐步注入，可以在不扰动多模态表示的前提下对齐扩散动力学。

下表固定为同主干、同配置下的四指标对照，便于核对基线、单条件、双条件与两种注入的差异。

| 配置 | 分布距离 PaSST | 音质分数 | 语义分数 | 同步误差 | 适用条件 |
| --- | --- | --- | --- | --- | --- |
| 主干 | 70.19 | 14.44 | 29.13 | 0.483 | S-16 kHz，无物理 |
| 主干加训更久 | 71.99 | 14.34 | 29.46 | 0.486 | 同配置，仅更久 |
| 加质量条件 | 66.89 | 15.94 | 29.40 | 0.480 | 增量调制 |
| 加速度条件 | 67.22 | 15.07 | 29.33 | 0.446 | 增量调制 |
| 双条件本文 | 65.67 | 16.50 | 29.41 | 0.448 | 增量调制 |
| 直接求和 | 67.31 | 16.30 | 29.40 | 0.455 | 双条件求和 |

表后需要点出未胜出项与限制。同步误差上单速度条件为 0.446，略优于双条件的 0.448，说明双条件并非每项都最优；语义分数在各物理配置间变化很小，说明物理条件主要改善分布与音质，对语义帮助有限。论文未报告去掉视觉特征只留物理条件的对照，也未测量遮挡率与估计误差对增益的定量影响，这些是复现时可补的失败条件分析。同样，消融只在 16 kHz 小主干上完成，大主干上的相对贡献可能不同，不能直接外推。

### 哪些结论有直接证据，哪些还只是可能？

直接报告的证据是：在 VGGSound 与 VGG-Impact 上，PAVAS-L 的 APCC-∆最低，分布距离与音质语义处于最优或次优，用户评分四项最高；消融中双物理条件加增量调制最优。这些数字支持显式质量与速度条件有助于物理一致性与感知质量的判断。

有限解释是：估计器达到与专家模型相当的水平，因此适合做条件。但正文未给出质量与速度估计的完整误差表，读者无法判断在重物、透明物或快速运动下的误差分布，只能说在评测分布内足以支撑增益，可能在分布外退化，待验证。同样，动能损失经声辐射为起振脉冲的物理解释引用了声学基础，但论文未测量材质、接触面积与混响的影响，不能把相关性读成因果证明。

未验证的推测包括：更紧凑的适配器、联合优化的估计器与显式材质建模会进一步提升效果。这些是未来方向，不是已验证结论。缺失证据不是技术错误，但复现与选型时必须补测：推理延迟、显存占用、输出帧率与实际延迟分别讨论；训练资源只给了迭代与批量，未给硬件与时长；用户研究样本为 27 人 8 段音频，规模有限，不能当成大规模听感结论。总体趋势不等于每组每步成立，引用时应同时保留胜出项与未胜出项。

### 要复现这篇，先做什么，再补哪项验证？

复现先做三件事。第一，按 2 阶段准备数据：通用阶段用 VGGSound 视频音频对加音频文本集，音频统一裁为 8 秒，类别标签作文本，缺视频用可学习标记补齐；物理微调阶段只用 VGGSound，批量 512，AdamW，梯度裁剪，主干 300,000 次、微调 30,000 次，学习率分别为 1×10 负 4 次方与 1×10 负 5 次方，编码器冻结，只训扩散块与条件通路，微调时以 0.1 概率置空物理标记。

第二，跑通估计器链：运动发现输出物体与动作文本，Florence-2 加 SAM-2 输出掩膜，CUT3R 输出点云与外参，逆投影聚类求质心后按帧率换算速度，质量经提示送视觉语言模型，缺失帧用遮挡标记补齐。第三，实现适配器：掩膜求和得物体中心特征，质量与速度经标准化、傅里叶映射与多层感知机得嵌入，再经 FiLM 调制、门控池化与零初始化残差注入自适应层归一化。

再补论文未充分报告的验证。按同一特征提取器重算分布、音质、语义与同步，单独计算 VGG-Impact 上每类的动能变化与起振强度散点，检查 APCC-∆是否由少数大撞击主导。补充遮挡率分桶、估计误差分桶与延迟显存测量，明确何时值得尝试：当视频包含清晰可见的单主导撞击且需要区分轻重时，物理条件最可能带来可听差异；当画面以说话、环境声或画外音为主时，不应期待同样的物理增益。代码与权重方面，正文只给出演示页当前可用，未声明训练代码与权重是否公开，复现前应先确认可达性，不能把演示可用当成系统可运行。

### 一句话收束：何时用它，何时不用？

当任务要求声音随撞击轻重变化，且视频中运动物体可见、可分割、可重建时，值得尝试 PAVAS 这类把质量与速度显式估计并以残差方式注入扩散模型的做法，因为它在保持通用质量的同时缩小了物理相关差距。

当场景以语音、环境纹理或画外音为主，或物体严重遮挡、快速模糊导致 3 维轨迹不可靠时，不应强求物理分支带来改善，此时文本与视觉语义条件仍是主要依靠，物理条件可能退化为弱先验。

回到开头的判断题：同步回答何时响，物理回答响成什么样。本文的贡献是把后者变成可估计、可注入、可测量的闭环，即用开放词汇语义补质量、用分割加动态重建补速度、用门控残差保稳定、用撞击子集加相关差距验效果。记住采样率差异、基线可比性与未胜出项，再去听演示页的例子，才是对初学者最稳妥的读法。

## 📐 原文公式与排版

以下展示论文原页中的数学表达区域，保留原始上下标、分式和符号排版。区域序号仅用于本文导航，不是论文公式编号。

[![原文数学表达区域 1，PDF 第 5 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/0a8fac9bac4d/figure-1.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/0a8fac9bac4d/figure-1.png)

区域 1 · [查看论文原页](https://openaccess.thecvf.com/content/CVPR2026/papers/Hyun-Bin_PAVAS_Physics-Aware_Video-to-Audio_Synthesis_CVPR_2026_paper.pdf#page=5)

[![原文数学表达区域 2，PDF 第 5 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/0a8fac9bac4d/figure-2.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/0a8fac9bac4d/figure-2.png)

区域 2 · [查看论文原页](https://openaccess.thecvf.com/content/CVPR2026/papers/Hyun-Bin_PAVAS_Physics-Aware_Video-to-Audio_Synthesis_CVPR_2026_paper.pdf#page=5)

[![原文数学表达区域 3，PDF 第 5 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/0a8fac9bac4d/figure-3.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/0a8fac9bac4d/figure-3.png)

区域 3 · [查看论文原页](https://openaccess.thecvf.com/content/CVPR2026/papers/Hyun-Bin_PAVAS_Physics-Aware_Video-to-Audio_Synthesis_CVPR_2026_paper.pdf#page=5)

[![原文数学表达区域 4，PDF 第 5 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/0a8fac9bac4d/figure-4.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/0a8fac9bac4d/figure-4.png)

区域 4 · [查看论文原页](https://openaccess.thecvf.com/content/CVPR2026/papers/Hyun-Bin_PAVAS_Physics-Aware_Video-to-Audio_Synthesis_CVPR_2026_paper.pdf#page=5)

[![原文数学表达区域 5，PDF 第 5 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/0a8fac9bac4d/figure-5.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/0a8fac9bac4d/figure-5.png)

区域 5 · [查看论文原页](https://openaccess.thecvf.com/content/CVPR2026/papers/Hyun-Bin_PAVAS_Physics-Aware_Video-to-Audio_Synthesis_CVPR_2026_paper.pdf#page=5)

[![原文数学表达区域 6，PDF 第 5 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/0a8fac9bac4d/figure-6.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/0a8fac9bac4d/figure-6.png)

区域 6 · [查看论文原页](https://openaccess.thecvf.com/content/CVPR2026/papers/Hyun-Bin_PAVAS_Physics-Aware_Video-to-Audio_Synthesis_CVPR_2026_paper.pdf#page=5)

[![原文数学表达区域 7，PDF 第 5 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/0a8fac9bac4d/figure-7.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/0a8fac9bac4d/figure-7.png)

区域 7 · [查看论文原页](https://openaccess.thecvf.com/content/CVPR2026/papers/Hyun-Bin_PAVAS_Physics-Aware_Video-to-Audio_Synthesis_CVPR_2026_paper.pdf#page=5)

[![原文数学表达区域 8，PDF 第 5 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/0a8fac9bac4d/figure-8.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/0a8fac9bac4d/figure-8.png)

区域 8 · [查看论文原页](https://openaccess.thecvf.com/content/CVPR2026/papers/Hyun-Bin_PAVAS_Physics-Aware_Video-to-Audio_Synthesis_CVPR_2026_paper.pdf#page=5)

另有 18 个候选区域因边界不明确或图片数量、尺寸限制未展开；请[查看完整论文](https://openaccess.thecvf.com/content/CVPR2026/papers/Hyun-Bin_PAVAS_Physics-Aware_Video-to-Audio_Synthesis_CVPR_2026_paper.pdf)中的原始排版。

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。
- 评分规则：type-aware-v1
- 评分模型：muse-spark-1.3-contributor
- 评分请求协议：openai_responses

---

[← 返回 cvpr-2026 论文汇总](/posts/conference-cvpr-2026/)
