---
title: "AV-Edit: Multimodal Generative Sound Effect Editing via Audio-Visual Semantic Joint Control"
date: 2026-09-11
draft: false
description: "针对已有视频音轨需随画面增删替换音效的问题，AV-Edit 先用细粒度对比掩码预训练学到音画对齐表示，再用相关门控加多模态扩散重生成，在 VGG-Edit 三类编辑与 VGGSound 生成上报告最优距离与质量，代价是原文承认不能无失真保留原音。"
tags: ["基准测试", "扩散模型", "多模态学习", "音视频", "视频到声音生成"]
categories: ["aaai-2026 论文"]
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_paper_id: "conference:aaai:2026:conference-paper-id:39298"
paper_digest_source_kind: conference
paper_digest_conference_id: "aaai-2026"
paper_digest_conference_record_url: "https://ojs.aaai.org/index.php/AAAI/article/view/39298"
paper_digest_conference_pdf_url: "https://ojs.aaai.org/index.php/AAAI/article/view/39298/43259"
paper_digest_api_reader_contract: "beginner-researcher-v3"
paper_digest_api_reader_article_sha256: "b16b8670bcf3d88f1f888a63051391cc5e4055d5d7ea56639a22211049df402b"
paper_digest_api_reader_plan_sha256: "20396d17180adc43dd4734da69a94318137dd743b93817d39e3c36e1be991a21"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings-v4"
paper_digest_api_reader_source_bindings_sha256: "411fb44fa6d8e4ea76eb01e11acc20535c261794ea892a249b2d35f5bd3aa13a"
paper_digest_api_reader_source_table_count: 3
paper_digest_api_reader_source_formula_count: 4
paper_digest_api_reader_structured_artifacts_sha256: "502b46fe2ace2e3aade30ec41ed2722d9a83eab94a5a333b9db47b7601628f99"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity-v1"
paper_digest_api_reader_author_identity_sha256: "15b6baa8d56906e1f34742526d28be51b933d2f67dc21d7fe221d05d76f631a9"
paper_digest_api_reader_author_count: 6
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity-v1"
paper_digest_api_reader_resource_identity_sha256: "4edde4b18af83fcbbfc7f01cb5fd6ab2e56de56722a2752b05b42620cc9174ca"
paper_digest_api_reader_resource_count: 0
paper_digest_api_reader_decision_projection: "api-reader-decision-projection-v2"
paper_digest_scoring_contract: "api-scoring-audit-v2"
paper_digest_taxonomy_contract: "paper-taxonomy-flat-tags-compat-v1"
paper_digest_taxonomy_selection_contract: "paper-taxonomy-selection-v1"
paper_digest_taxonomy_registry_version: "paper-taxonomy-v1"
paper_digest_taxonomy_registry_sha256: "15c82a567ce5a55dc1175684ed08b64c158558639d9c8fb822c9587ec32a8778"
paper_digest_taxonomy_concepts: [{"facet":"artifact","id":"artifact.benchmark","label":"基准测试"},{"facet":"method","id":"method.diffusion","label":"扩散模型"},{"facet":"method","id":"method.multimodal-learning","label":"多模态学习"},{"facet":"signal","id":"signal.audiovisual","label":"音视频"},{"facet":"task","id":"task.video-to-audio","label":"视频到声音生成"}]
paper_digest_primary_task: "视频到声音生成"
paper_digest_primary_method: "扩散模型"
paper_digest_score: 6.5
paper_digest_rank_bucket: "前50%"
paper_digest_document_type: "方法研究"
paper_digest_conference_structure: replayable-pdf-layout-v1
---

# 📄 已有配音怎么改：AV-Edit 用音画联合表示做加、删、换

> 英文题目：*AV-Edit: Multimodal Generative Sound Effect Editing via Audio-Visual Semantic Joint Control*

> 会议身份：`conference:aaai:2026:conference-paper-id:39298`


> ✅ 来源为官方会议 PDF；可重放的表格、公式文本与 Figure 像素已按 PDF 抽取结果绑定，未成功恢复的结构不作推断。

> 会议来源：[官方记录](https://ojs.aaai.org/index.php/AAAI/article/view/39298) · [官方 PDF](https://ojs.aaai.org/index.php/AAAI/article/view/39298/43259)

标签：#基准测试 #扩散模型 #多模态学习 #音视频 #视频到声音生成

评分：**6.5/10** | 创新 1.3/2 | 技术严谨 1.2/1.5 | 实验充分 1.0/1.5 | 清晰度 0.7/1 | 影响力 1.0/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 1.0/1.5

排名：前50% | 文档类型：方法研究

## 👥 作者与机构

- Xinyue Guo：机构信息未能从会议 PDF 纯文本可靠映射
- Xiaoran Yang：机构信息未能从会议 PDF 纯文本可靠映射
- Lipan Zhang：机构信息未能从会议 PDF 纯文本可靠映射
- Jianxuan Yang：机构信息未能从会议 PDF 纯文本可靠映射
- Zhao Wang：机构信息未能从会议 PDF 纯文本可靠映射
- Jian Luan：机构信息未能从会议 PDF 纯文本可靠映射

## 📌 核心摘要

已有视频的声音特效编辑需同时理解输入视频与原始音频并合成目标音频，难点是保留视觉相关成分、去除无关成分并补全缺失成分，同时保持语义与时间同步。本文提出AV-Edit两阶段框架：先用对比音频视觉掩码自编码器编辑版（Contrastive Audio-Visual Masked Autoencoder for Editing，CAV-MAE-Edit）学习细粒度音视对齐表示，再用基于相关性的特征门控筛选音频帧特征，最后将音视文特征与同步特征送入多模态扩散变换器（Multimodal Diffusion Transformer，MM-DiT）做条件去噪生成。与仅依赖文本提示的音频编辑相比，该链条以视觉语义直接驱动保留或丢弃，避免手工频谱操作和粗粒度文本控制。在VGGSound测试集8秒音频生成评测中，大模型感知质量指标内测分数（Inception Score，IS）达22.48，优于MMAudio-L的18.13，同时在自建VGG-Edit的增加、删除、替换任务上客观距离全面领先。该结论限于8秒短片段和人工混合构造的编辑场景，对长时程叙事和真实录音棚噪声的外推尚未验证。原文未披露训练、推理或部署成本。

## 🔗 开源与复现资源

本次未形成可展示的已核验资源记录，开放状态尚未核实。
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 输入是什么，要输出什么，为什么已有方法不够？

这篇解读的对象是刚进入音频与多模态方向的研究生，目标是把 AV-Edit 的任务、2 阶段做法、训练与评测条件讲到可复述。输入是已有配音的视频加可选文本提示，输出是改过之后与画面语义和时间都对齐的新音频，具体动作只有 3 类：加上画面里该有但音轨里缺的声音，去掉画面里没有但音轨里混入的声音，把与画面不符的声音换成相符的声音。举例来说，实拍视频混入与场景无关的背景噪声，或视觉编辑增删了物体却没改声音，都需要这种按画面改声的能力。

传统做法是白话说的信号层面剪拼，即在波形、频谱或时频特征上裁剪、拼接与自适应滤波，依赖人工调参，只能改已有录音，不能按语义合成缺失成分。近期文本条件扩散编辑把音频编码到潜空间再按文本提示重生成，但原文指出其依赖精确文本描述与先验信号知识，难以随视觉内容动态同步，又要保真又要对齐。视频到音频生成虽能从静音视频合成音效并强调同步与语义，但大多不管已有音轨的保留与细粒度控制。AV-Edit 的定位正是补这个缺口：同时吃视频、原音频与文本，用生成式模型做视觉对齐的音效编辑。

必须保留的关键信息是框架分两段：先预训练一个为编辑定制的音画联合编码器 CAV-MAE-Edit，再用它抽特征训练多模态扩散 Transformer 即 MM-DiT 做生成式编辑；评测用新造的 VGG-Edit 基准，含 450 个片段的加删换场景。本文资源状态为本次未发现来源绑定且完成验证的资源，因此不得声称代码模型数据已公开，原文虽给出扩展版本与代码链接，但本次解读按不可用处理，不写可下载可运行。

### 同输入同目标的路线各卡在哪里？

按同输入、同目标、同监督来对照，音频编辑、音画预训练、多模态音频生成是 3 条相关路线。音频编辑路线输入是音频加文本或参考音频，目标是加、换、混或局部频谱改，监督多为指令标注或潜空间去噪。原文提到指令驱动需大量标注，基于去噪扩散概率模型与隐式模型的零样本方法受限于文本精确度，AudioMorphix 需目标与参考音频，语言引导的音画编辑依赖手工特征映射，可扩展性受限。共同短板是不能随视频动态决定留什么改什么。

音画预训练路线输入是视频加音频，目标是学到时间与语义对齐的联合表示。CLIP 与 CLAP 分别对齐文本图像与文本音频，打下跨模态基础；Synchformer 与 Diff-AV 用对比学习拿对齐特征，UAVM 与 VALOR 用参数共享融合，掩码自编码则遮大量输入逼编码器学语义。原文把 CAV-MAE 这类对比加掩码重建的做法作为起点，说明 AV-Edit 不是另起炉灶，而是在该起点上加切分、混合与全局标记，专为编辑服务。

多模态音频生成路线输入是文本或视频或三者联合，目标是从无到有合成。MMAudio 与 MultiFoley 把 3 模态放进 Transformer，自回归、潜扩散、扩散 Transformer 与流匹配都有人试。原文的判断是这些工作大多从静音视频生成，遇到已有原音需保留语义与时间一致时仍是未解挑战。这个对照说明 AV-Edit 的差异不在用了扩散，而在输入多了原音频且训练目标包含按视觉相关性取舍。

### 任务如何形式化，什么算改对了？

把一个样本走完有助于建立全图。取一条 10 秒视频及其原音轨，视频按 8 帧每秒抽帧，音频算 16 千赫采样下的 128 维梅尔谱，长度为 1024。目标是输出一条新音轨：画面里出现狗叫就应有对应叫声，画面里没有的噪声应消失，被换掉的部分应与新画面一致，且时间上敲击、脚步等瞬态与动作对齐。文本提示可选，例如狗在叫，用于辅助指定语义。

什么算改对了分两层。分布与质量层看生成音频是否像目标音频分布，用 PANNs 与 PaSST 特征的 KL 距离、Fréchet 距离与 Inception Score 衡量，KL 与 FD 越小越好，IS 越大越好。对齐层看内容与时刻是否跟画面走，用 ImageBind 的 IB 分衡量语义，越高越好，用 Synchformer 的 DeSync 衡量时间错位，越小越好。主观层用保真度、感知质量、一致性、区域特异性与指令遵循五项，越高越好。理解这个分层很重要，后面看到分布好但对齐差，或加文本后保真略降，都不矛盾。

### AV-Edit 的两阶段全景如何串起来？

AV-Edit 全景分预训练与生成编辑两段。第一段训练 CAV-MAE-Edit，输入是细切分后的视频帧与对应音频小段加混合音频，输出是联合音画表示与每模态重建，损失是对比损失加掩码重建损失。第二段冻结该编码器抽取音画语义嵌入，再加 CLIP 文本特征与 Synchformer 同步特征，经投影后作为条件送入 MM-DiT，扩散去噪得到编辑后音频的潜变量，再经变分自编码器即 VAE 解码为波形或谱。图 1 把这条主路径画得很直白，顶部是视频帧、梅尔谱与文本提示三输入，中部是 3 路投影与相关计算，底部是大块多模态扩散与潜变量损失。

以下导读帮你按输入到输出读图 1，重点看 3 路如何汇合与门控插在哪里。

> **看图路径：** 1. 从顶部视频帧与梅尔谱出发，沿中间三路投影看到进入底部扩散块的主路径；2. 观察中间 correlation calculation 虚线如何指向 Audio Projection，理解门控位置；3. 对比左侧同步编码器支路与右侧文本编码器支路的汇入方式；4. 看底部 GT latents 与 Pred latents 之间的 Loss 箭头，确认训练监督对象

[![原论文 Figure 1：Overview of the AV-Edit framework.](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/aaai-2026/98fb257eed67/figure-1.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/aaai-2026/98fb257eed67/figure-1.png)

*论文图 1。原论文 Figure 1：“Overview of the AV-Edit framework. The pre- trained CAV-MAE-Edit encoder extracts joint audio–visual features, which are then fed into a multimodal diffusion model to generate…”。*

图 1 像素显示顶部狗的视频帧与条状梅尔谱同时指向粉色 CAV-MAE-Edit 编码器，右侧文本经黄色文本编码器投影，中部灰色相关计算块用双向箭头连向视频与音频投影且有虚线指向音频投影，左侧绿色同步视觉编码器经投影池化汇入，底部蓝色大块为多模态扩散 Transformer，下方还有原始梅尔谱经音频编码器得到真实潜变量并与预测潜变量算损失。这对应正文说法：联合特征先算相关再门控音频，同步特征单独加到全局控制，扩散同时看语义嵌入与潜变量噪声。记住这个汇合点，后面公式与阈值都是为它服务。

### 编码器做了哪三处改动，每处算什么？

先说白话再给英文。掩码自编码即遮住大部分块后逼模型重建，用于学细节；对比学习即拉近同对推远非同对，用于学对齐；视觉 Transformer 即 ViT，用于分块编码。CAV-MAE-Edit 起点是 CAV-MAE：视频裁固定尺寸、音频取梅尔谱，分词并加 2 维位置与模态类型嵌入后各遮 75%，经各自 ViT 得单模态表示，再经共享权重的联合编码器得 3 路输出，单模态输出算对比，多模态拼接输出经解码算重建。

第一个改动是频谱图切分。原文把整段音频随机对 1 帧的做法改为按帧切分：视频 8 帧每秒，每帧配 0.125 秒音频，音频段中心按帧序号乘总谱长除以总帧数定位，起止为中心减加固定段长的一半。视频帧与音频块再按 16 切块，得到 14 乘 14 视觉块与 13 乘 8 音频块。这样每对训练样本时间窗更窄，语义相关更强。符号与输入是视频 vi 与音频 ai 经分块投影加位置与类型嵌入后的未遮序列，计算目标是只把未遮部分送入编码器。

\[= Mask0.75(Projv(Patchv(vi)) + pv + mv)\]

上式中 Proj 与 Patch 为模态投影与分块，pv 与 pa 为位置嵌入，mv 与 ma 为模态嵌入，Mask0.75 表示遮掉 75%。实现上原文训练时音视频掩码概率写为 0.5 得到混合遮蔽、干净遮蔽与遮蔽视觉 3 流，这与公式的 0.75 表述存在冲突，此处明确标注冲突而不猜口径，复现时应以代码与附录为准并固定随机种子对照。

第二个改动是混合逼学相关语义。目标音频以 0.5 概率与无关音频混合，原始与混合音频在相同位置掩码后拼接入音频编码器，混合分支 embedding 与视觉 embedding 拼接入联合块做注意力与多层感知交互，原始分支与复制视觉经单模态块编码，最后联合解码重建原始音画块。新增作用是编码器必须从混合中按视觉挑出相关成分，即编辑式编码。第三个改动是加模态全局标记 Gv 与 Ga，在单模态与多模态阶段持续聚合全局信息，最终编码后的全局标记用于算对比损失，增强全局对齐。

**对比学习 × 掩码自编码：** 对比学习分工是把同一时刻的视觉全局表示与音频全局表示拉近、把不同样本推远，用于学跨模态语义对齐；掩码自编码分工是遮掉 75% 左右的音视频块后重建被遮内容，用于学模态内细节与可重建性。搭配理由是只对比易丢细节、只重建易忽视跨模态对应，二者加权求和后，联合编码器既能对齐又能重建，为后继按视觉语义挑留音频提供表示基础。

**频谱图切分 × 音频混合：** 频谱图切分分工是把整段梅尔谱按视频帧时刻切成每帧对应 0.125 秒小段，用于实现帧级时间对齐与更细的音画对；音频混合分工是把目标音频与无关音频按概率混在一起再编码，用于逼模型依据视觉语义从混合中挑出相关成分。搭配后切分保证对齐粒度，混合制造编辑式训练压力，组合意义是编码器学会按图索声的编辑型编码。

对比与重建的联合目标用加权和表示，对比项用温度系数 tau 调相似分布，重建项为归一化块均方误差。

\[Lc = −1 k̸=i exp(si,k/τ) + exp(si,i/τ)),\]

上式 Lc 为对比损失，si,j 为视觉与音频全局输出的相似度，tau 为温度，N 为批量。重建与总损失的符号解释见训练节，计算目标是同时压低重建误差与对比负似然。

以下导读帮你读图 2 的 4 段流水线，重点看混合支路与全局标记回路。

> **看图路径：** 1. 从左到右按混合分词掩码、单模态编码、多模态编码、联合解码走完一遍；2. 观察原始音频与混合音频在 Audio Encoder 处的交叉箭头，确认编辑式编码；3. 找到顶部全局标记 Gv 与 Ga 及其对比损失回路，确认全局对齐监督

[![原论文 Figure 2：Overview of CAV-MAE-Edit network.](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/aaai-2026/98fb257eed67/figure-2.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/aaai-2026/98fb257eed67/figure-2.png)

*论文图 2。原论文 Figure 2：“Overview of CAV-MAE-Edit network. The single-modal encoders encode the visual and audio inputs separately.”。*

图 2 像素从左到右为混合分词掩码、全局化加单模态编码、拼接加多模态编码、联合解码加联合损失。左侧可见输入视频 8 帧每秒、输入音频 10 秒与混合音频 10 秒，均切为 208 乘 128 与分块；中部视觉与音频编码器旁有 Gv 与 Ga 全局标记；联合编码器内分视觉、拼接与音频三槽；右侧红色箭头标出对比损失连向全局输出、重建损失连向解码块。这与正文三改动一一对应，可执行观察是沿混合行看掩码位置是否与原始行一致，再看全局标记如何进入对比。

### 门控与扩散如何配合生成编辑后音频？

特征抽取阶段用冻结的 CAV-MAE-Edit 得到含时空维的 Fa 与 Fv，沿时间展平、空间池化后逐帧算余弦相似度，高于阈值 r 保留该帧音频特征，低于则换为空特征。文本特征 Ft 用 CLIP 抽，同步特征 Fsync 用 Synchformer 抽。三者经各自投影，一路直接作为扩散条件，一路经时间池化加时间嵌入形成全局控制 gc，同步特征投影后加到 gc 形成时间同步信息 fc 参与生成。训练时这些编码器冻结，投影层从零训练。阈值 r 取 0.3，选择过程见附录，解读时只记该取值与逐帧门控逻辑。

**相关门控 × 多模态扩散 Transformer：** 相关门控分工是逐帧算音频嵌入与视觉嵌入余弦相似度，高于阈值 r 保留该帧音频特征、低于则换为空特征，用于在输入端去掉视觉无关声；多模态扩散 Transformer 分工是把保留后的音视频文本嵌入与带噪潜变量做联合注意力去噪，用于生成与画面同步的新音频。二者搭配使门控决定留什么声、扩散决定补什么声，共同完成加删换。

**全局控制信息 × 时间同步信息：** 全局控制信息分工是对视听文本语义特征做时间池化后与时间嵌入相加，用于给扩散提供整段语义条件；时间同步信息分工是把 Synchformer 得到的视觉同步特征投影后加到全局控制上，用于提供逐时刻对齐约束。搭配理由是只给全局易时间错位、只给同步易语义漂移，相加后生成同时受语义与节拍约束。

扩散生成采用 MM-DiT 块，把视听文本嵌入的查询键值与带噪潜变量 xt 的查询键值拼接后做联合注意力，网络学噪声预测函数。目标音频先经预训练 VAE 编码为 x0，前向按步加高斯噪声得 xt，逆向从纯噪声去噪回 x0。训练还用分类器无关引导即 CFG，以 10% 概率把视听文本分别换为可学习空嵌入，用引导强度 s 平衡条件与无条件输出，推理时原文大小模型均用 25 步与 4.5 引导强度。

### 两阶段用什么数据、什么损失、什么参数训练？

编码器预训练用完整 VGGSound，原文称 200,000 条 10 秒视频、309 类，每视频为语义明确的音画对。每视频抽 80 帧与 128 维长 1024 梅尔谱，每帧对应谱段长 208。4 卡 H800、学习率 1e-4、批量 160、约 150 轮至收敛，对比权重 0.01、重建权重 1。生成编辑训练用 VGGSound、AudioCaps、WavCaps 与 Clotho 四集，缺失模态填可学习空标记。扩散分大小模型：小模型 4 个 MM-DiT 加 8 个单模态 DiT，生成 16 千赫编码为 20 维潜变量。

大模型 7 个 MM-DiT 加 14 个单模态 DiT，生成 44.1 千赫编码为 40 维潜变量。4 卡 H800 约 43 轮。原文未报告优化器类型、学习率调度与梯度裁剪等缺项，此处明确指出缺项而不从模型名推定。

优化目标先看扩散均方误差，其符号是干净潜变量 x0、噪声与步数 t，输入是带噪潜变量与 3 模态条件。

\[L(θ) = Ex0,ϵ,t[∥ϵ −ϵθ(xt, t, (fa, fv, ft))∥2],\]

上式 L 为噪声预测误差，epsilon 为高斯噪声，t 均匀采样，fa、fv、ft 为音视文条件。引导调整把条件输出与空条件输出按 s 加权。

\[ˆϵθ(xt, t, (fa, fv, ft)) =s · ϵθ(xt, t, (fa, fv, ft))\]

上式中 s 为引导强度，空符号为对应模态空嵌入。编码器总损失为对比与重建加权和，权重已在上段给出。冻结关系是生成阶段编码器冻结、投影训练；编码器阶段单模态 ViT 不共享权重、联合编码器共享主体权重但层归一化按模态独立。

### 评测搭了什么基准，指标方向如何看？

生成评测用 VGGSound 测试集，生成 8 秒音频，基线含 Seeing and Hearing、FoleyCrafter、V-AURA、Frieren、V2A-Mapper、AudioX 与 MMAudio 大小模型。指标分 4 组：分布匹配用 PANNs 与 PaSST 特征 KL 越小越好，质量用 IS 越大越好，语义用 IB 越大越好，时间用 DeSync 越小越好，另报参数量与 H800 上生成耗时。注意 AV-Edit 输入多了原音频特征，对纯生成有干扰，原文另设无音频输入版本 AV-Edit w/o Audio 作公平对照。

编辑评测用自建 VGG-Edit，从约 15000 条测试视频人工选 450 条视觉有意义片段，150 条加无关音效、150 条删视觉相关音效、150 条把相关换成无关，形成加删换三场景。基线选支持音轨输入的 AudioX 与 DeepSound，AudioX 输入原音视频加文本，DeepSound 在加与换走第一步、删跳过第一步进第二步分离无关声。客观指标是对输出与目标经 PANNs 提特征后的 KL 与 Fréchet 距离，越小越好。主观用 AudioMorphix 五项：保真度、感知质量、一致性、区域特异性与指令遵循，越大越好，具体打分见附录。硬件预算只报告 H800 卡数与步数，未报告统计显著性与多次种子方差，聚合口径按原文默认单次评测理解。

### 生成与编辑的主结果支持什么判断？

先看编码器消融提出的问题：在同等条件下切分、全局标记与混合是否各有收益，指标方向为 4 种损失越小越好。表后解释是切分大幅降音频重建误差，全局标记降对比损失，混合虽使音频均方误差从 0.400 升到 0.661，但视觉重建与总损失继续降到 0.619 与 1.297，支持混合带来编辑式编码能力的判断，代价是单项音频重建数值上升。下表整理了原文四行消融，列数满足宽表要求。

| 方法配置 | 音频掩码重建损失↓ | 视觉掩码重建损失↓ | 对比损失↓ | 总损失↓ | 关键取舍 |
| --- | --- | --- | --- | --- | --- |
| 无切分无全局无混合 | 2.219 | 1.335 | 1.484 | 3.569 | 基线 |
| 有切分无全局无混合 | 0.450 | 1.097 | 8.552 | 1.632 | 音频重建大降，对比变差 |
| 有切分有全局无混合 | 0.400 | 0.942 | 0.807 | 1.350 | 对比修复 |
| 有切分有全局有混合 | 0.661 | 0.619 | 1.701 | 1.297 | 总损失最优，音频单项回升 |

表后需强调限制：该表只报告损失未报告下游编辑差距，且混合的对比损失从 0.807 升到 1.701，说明总最优不等于每项最优。未胜出项是无切分基线在对比上反而好于仅切分版本，提示细切分若无全局标记可能伤害全局对齐。

生成主结果的问题是：在 VGGSound 测试集上与可运行 V2A 基线比，分布、质量、语义、时间 4 组谁优，条件是否一致。表前公平条件是同为 8 秒生成、同测试集，但 AV-Edit 多用了原音频，严格同条件应看无音频版本。表后解释是 AV-Edit-L 在 IS 达 22.48、KL-PaSST 达 1.41、DeSync 达 0.441 为最优，分布另一项 KL-PANNs 为 1.67 次优，IB 为 31.68 次于 MMAudio-L 的 32.73 与 Seeing and Hearing 的 33.85。支持生成质量与时间最强的判断，限制是语义仍有差距，且无音频版本 IS 更高达 23.08，说明原音频输入确有干扰。

| 模型 | KL-PANNs↓ | KL-PaSST↓ | IS↑ | IB↑ | DeSync↓ | 参数量与耗时 |
| --- | --- | --- | --- | --- | --- | --- |
| Seeing and Hearing | 2.92 | 2.93 | 6.19 | 33.85 | 1.193 | 415M，30.18 秒 |
| MMAudio-L | 1.63 | 1.46 | 18.13 | 32.73 | 0.465 | 1.03B，3.01 秒 |
| AV-Edit-S | 1.71 | 1.61 | 20.38 | 28.08 | 0.480 | 178M，2.69 秒 |
| AV-Edit-L | 1.67 | 1.41 | 22.48 | 31.68 | 0.441 | 1.15B，3.18 秒 |
| AV-Edit 无音频 | 1.73 | 1.45 | 23.08 | 30.73 | 0.481 | 1.15B，3.16 秒 |

表后补充代价：大模型参数 1.15B 与 3 秒级耗时高于小模型，语义未胜出项需正视，不能把质量最优推广为全面最优。

**分布匹配 × 语义与时间对齐：** 分布匹配分工是用 PANNs 与 PaSST 特征算 KL 距离，用 Fréchet 距离算编辑输出与目标分布差距，用于衡量像不像目标音频分布；语义与时间对齐分工是用 ImageBind 算 IB 分、用 Synchformer 算 DeSync，用于衡量听起来与画面内容与时刻对不对。搭配原因是分布像不等于画面对，二者并列才能同时检验音质与音画一致。

以下导读帮你读图 3 的两组频谱对比，重点看瞬态条纹与低频连续成分。

> **看图路径：** 1. 先看顶部两组视频小图确认 Hammer 与 Hit & Footsteps 场景；2. 纵向对比同一列六条频谱中竖直敲击条纹的清晰与连续程度；3. 横向对比左右两大组在低频连续脚步与瞬态敲击上的保留差异

[![原论文 Figure 3：The spectrograms of generated audios.](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/aaai-2026/98fb257eed67/figure-3.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/aaai-2026/98fb257eed67/figure-3.png)

*论文图 3。原论文 Figure 3：“The spectrograms of generated audios.”。*

图 3 像素左侧 Hammer 组顶部为 3 张劈柴动作图，下方 6 条频谱中竖直亮纹对应敲击时刻，虚线框标出对齐位置，可见 AV-Edit 的亮纹更锐且间隔与动作一致；右侧 Hit 与脚步组低频横带对应脚步连续声，虚线框内 AV-Edit 保留了连续性而部分基线偏模糊或断裂。像素不能精确读出分贝数值，不硬写提升量，只作存在性与对齐性判断，具体数值以表 2 为准。

### 编辑三任务中加文本与门控带来什么变化？

编辑客观结果的问题是：在加删换三场景下与 AudioX、DeepSound 比，谁更接近目标音频，文本是否有增益。公平条件是同用 VGG-Edit、同以 PANNs 特征算 FD 与 KL，越小越好。表后解释是 AV-Edit 带文本在加任务 FD 为 31.04 与 KL 为 1.39、删任务 25.24 与 0.95、换任务 38.00 与 1.54，全面最优；相对 AudioX 与 DeepSound 在删与换上差距最大，例如删任务 FD 从 51.71 与 75.16 降到 25 左右。文本增益在三任务均存在，但主观表中带文本保真从 64.4 降到 62.4，说明语义遵循与保真有轻微权衡。

| 方法 | 加 FD↓ | 加 KL↓ | 删 FD↓ | 删 KL↓ | 换 FD↓ | 换 KL↓ |
| --- | --- | --- | --- | --- | --- | --- |
| 未编辑原轨 | 131.63 | 5.86 | 121.07 | 5.74 | 135.96 | 6.12 |
| AudioX 带文本 | 47.76 | 2.60 | 51.71 | 2.86 | 79.64 | 3.66 |
| DeepSound 带文本 | 40.69 | 2.53 | 75.16 | 3.63 | 126.10 | 5.91 |
| AV-Edit 无文本 | 36.05 | 1.56 | 27.56 | 0.99 | 48.24 | 2.13 |
| AV-Edit 带文本 | 31.04 | 1.39 | 25.24 | 0.95 | 38.00 | 1.54 |

表后必须点出未评测边界：该客观表只用分布距离，未直接测时间错位；主观五项中 AV-Edit 带文本在感知质量 66.2、一致性 64.2、区域特异性 64.7、指令遵循 70.8 最优，但保真未胜无文本版本。换任务 FD 绝对值仍高于加删，说明替换最难。更多阈值与模块消融见附录，此处不猜具体曲线。
以下导读帮你读图 4 的加删换三列，重点看增删位置与保留增强。

> **看图路径：** 1. 按 Add、Remove、Replace 三列分别对照顶部画面与中部原始频谱；2. 看 Add 列底部虚线框内新增能量，确认补声位置；3. 看 Replace 列左右分界虚线两侧能量变化，确认删旧留新

[![原论文 Figure 4：Examples of three editing manipulations: add, re- move and replace.](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/aaai-2026/98fb257eed67/figure-4.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/aaai-2026/98fb257eed67/figure-4.png)

*论文图 4。原论文 Figure 4：“Examples of three editing manipulations: add, re- move and replace.”。*

图 4 像素分三列：左列 Add 顶部为海滩日落，中部原始频谱偏暗，底部编辑频谱虚线框内出现大片暖色能量，表示补上海浪类连续声；中列 Remove 顶部为吉他演唱，中部原始为密集谐波，底部编辑后左侧人声相关能量减弱而吉他部分保留增强；右列 Replace 顶部为猫与狗，原始左侧为猫叫谐波，编辑后左侧能量消失、右侧出现狗叫瞬态，中间虚线为分界。这支持按视觉取舍的机制解释，但像素不能证明听感，还需结合主客观表判断。

### 哪些结论不能下，边界在哪里？

原文直接报告的局限是不能完全无失真保留原音频，这是生成式重合成的固有代价，门控保留加扩散重生成必然经过 VAE 编解码与加噪去噪。有限解释是文本输入提升区域特异性与指令遵循但轻微降保真，支持文本作为可选增强而非必选。未验证推测是更大规模数据或更精同步模型会继续提升，这些未在正文给出对照，应表述为可能与待验证。

边界还包括评测范围：VGG-Edit 基于 VGGSound 测试集人工选 450 条，场景覆盖日常显性音画对，但长尾乐器、人声重叠与强混响场景未单独分层；客观只用分布距离，时间指标只在生成部分报告，编辑部分未报告 DeSync；主观打分方法在附录，单次评分方差未报告。效率上只报 H800 生成秒数，未报训练显存峰值与实际延迟分解，不能承诺低延迟改善。相关性不等于因果，例如 IB 高不证明理解语义，只证明嵌入接近。

### 要复现应先固定什么，再跑什么？

复现先做信息条件核对：本次未发现可用资源绑定，因此先按无代码可用处理，不要假设仓库可达。若后续拿到原文链接，需区分代码开源、权重下载与系统可运行三件事，逐项验证可达再谈复现。先固定数据与划分：VGGSound 完整集做编码器预训练，VGGSound 测试集做生成评测，四集混合做扩散训练，VGG-Edit 按 450 条三等分构造加删换。采样固定视频 8 帧每秒、音频 16 千赫、梅尔 128 维长 1024、每帧谱段 208、分块 16、掩码与混合概率、阈值 0.3、扩散 25 步与引导 4.5。

再跑 2 个阶段：第一阶段跑 CAV-MAE-Edit 至收敛并记录四项损失，重点复现切分降音频重建、全局标记修复对比的趋势；第二阶段冻结编码器只训投影与扩散，先跑无音频版本对齐生成基线，再开音频门控跑编辑三任务。评估先算 KL、FD、IS、IB、DeSync，再做五项主观盲听。缺项清单是优化器、调度、附录阈值搜索细节与主观打分细则，需回原文附录核对，不从模型名推定实现。

### 何时值得尝试这个方案？

当任务是已有音轨随画面改而非从静音合成，且能拿到音画对做预训练时，值得尝试 AV-Edit 式做法：先用细切分加混合的对比掩码学按图索声的表示，再用逐帧余弦门控滤无关声，最后用多模态扩散补缺失声。文本提示适合作为可选条件，在需要指定语义时打开，不必全程依赖。若应用要求原音逐采样无损保留，则该生成式路线不合适，应选信号剪拼或分离加回填路线。

一句话收束：AV-Edit 把编辑拆成表示对齐与门控生成两步，用 VGG-Edit 证明了加删换的可控性与生成质量的竞争力，代价是重生成带来的保真损失与大模型开销。初学者复述时抓住切分定粒度、混合定选择、门控定去留、扩散定合成这四句，再用损失表、生成表与编辑表 3 组数字佐证，即可完整还原方法。

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。
- 评分规则：type-aware-v1
- 评分模型：muse-spark-1.3-contributor
- 评分请求协议：openai_responses

---

[← 返回 aaai-2026 论文汇总](/posts/conference-aaai-2026/)
