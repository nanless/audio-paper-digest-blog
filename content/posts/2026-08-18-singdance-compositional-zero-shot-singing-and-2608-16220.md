---
title: "SingDance: Compositional Zero-Shot Singing-and-Dancing Video Generation with Role-Aware Audio Conditioning"
date: 2026-08-18
draft: false
tags: [音视频生成, 流匹配, 扩散模型, 零样本]
categories: [论文速递]
description: "音视频生成 | 6.8/10"
hiddenInHomeList: true
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_arxiv_id: "2608.16220"
---

# 📄 SingDance: Compositional Zero-Shot Singing-and-Dancing Video Generation with Role-Aware Audio Conditioning

标签：#音视频生成 #流匹配 #扩散模型 #零样本

**6.8/10** | 创新 1.5/2 | 严谨 1.2/1.5 | 实验 1.3/1.5 | 清晰 0.9/1 | 影响 0.5/1.5 | 开源 0/1.5 | 复现 0.3/0.5 | 工程 1.1/1.5

✅ **6.8/10** | 前50% | 文档类型：方法研究 | 评分置信度：中 | #音视频生成 | #流匹配 | #扩散模型 #零样本 | [arxiv](https://arxiv.org/abs/2608.16220)


### 👥 作者与机构

- 第一作者：Tao Feng（实习期间在 Kling Team, Kuaishou Technology 完成本工作）
- 通讯作者：Xu Li（未说明）、Wei Xue（未说明）
- 作者列表：Tao Feng、Xu Li、Xiangyang Luo、Ming Wen、Huadai Liu、Chen Zhang、Wei Xue
- 文中未给出各作者的正式机构归属；仅注明 Tao Feng 的致谢与实习经历。

### 💡 毒舌点评

作者把"可见人物是否拥有 vocal"从隐式假设提升为显式语义角色，用 source/listener 的共享语音通路统一了说话、聆听、纯跳舞和唱跳四种行为，这是本文最有价值的设计判断。可惜，唱跳主实验的舞蹈端到端基线仅有 MusicInfuser 和 Wan-S2V 两个，后者更偏 speech-driven human animation，并未直面 OmniDance、Wan-Dancer 等更直接的 music-conditioned RGB 舞蹈系统；评测样本量也偏小，SingDance-50 只有 50 个 case，且未报告置信区间或方差。listener 角色方面的证据几乎完全依赖自动唇同步指标的"低值"，缺少数目可观的人类评估来确认"嘴不唱但人还自然"。工程化细节和训练数据均未公开，复现基本靠想象。

### 📌 核心摘要

本文解决个性化唱歌跳舞视频生成中一个未被充分探索的问题：在给定参考图像、文本提示和歌曲音频时，如何显式控制可见人物是否演唱 voval，并且不依赖任何成对唱歌跳舞训练视频。SingDance 的核心是将可见人物的 vocal 归属建模为语义角色 source（可见人物发出声音）或 listener（声音来自画面外的表演者），并让两个角色共享同一套 Wav2Vec 2.0 语音表示和注入通路，音乐条件则用 MuQ 提取特征。通过 hard-compact routing 按任务选择 speech、music、role token，再用 frame-wise joint audio injection 在帧级别注入这些条件。训练分为 speech 和 dance 两个阶段：speech 阶段用屏内说话和筛选出的真实聆听/反应视频分别建立 source 和 listener 行为；dance 阶段用器乐与仅跳舞的歌曲视频建立音乐驱动的身体运动。目标 Song/Source 组合从未在训练中出现，推理时仅把 listener 角色切换为 source 即可组合出唱跳能力。在 SingDance-50 上，SingDance 的 BeatAlign/MBCR 为 0.2723/0.2558，高于 Wan-S2V 的 0.2640/0.1983，同时保持 Subject 0.9682、Background 0.9772。配对角色切换将 LSE-C 从 4.9672 降至 1.1768，而音乐对齐仍为 0.2704/0.2787。在 EMTD 上，SingDance 以 5.63B 生成参数获得 7.995 LSE-C，逼近参数更多的 InfiniteTalk 的 8.535。实际价值是统一四种行为、适合短时个性化视频创作；主要局限是只能处理短时单人、二值 clip 级角色，无法建模角色转换、多角色和更长期结构。

SingDance统一支持下图所示的四种生成任务。

![Figure 1: Four generation tasks supported by SingDance. The dashed box marks singing-and-dancing, the held-out Song/Source configuration generated through compositional zero-shot inference.](https://arxiv.org/html/2608.16220v1/figure1-4task.png)

下图直观展示了聆听反应、说话、纯跳舞以及通过零样本组合实现的唱跳四个任务。

### 🔗 开源详情

- 代码：论文中未提及代码链接。
- 模型权重：论文中未提及。
- 数据集：论文中未提及数据集的获取链接或开源协议。涉及的数据集包括：HuMoSet、专有网络视频集合（约 300,000 个五秒片段，其中约 12,000 个为倾听/反应片段）、清理后的 MA-Data、专有舞蹈视频集合（约 48,000 个五秒片段：18,000 器乐、30,000 歌曲）、自建测试集 SingDance-50（50 个 face-visible vocal-song cases）和 Dance-100（100 个 dancing-only cases）、以及用于 talking 评估的 EMTD。SingDance-50 和 Dance-100 未说明是否公开发布。
- Demo：论文中未提及独立在线 Demo 链接；项目主页为 https://fff-ttt.github.io/singdance-project-page/
- 复现材料：论文中未提及代码、检查点或附录发布。给出的训练配置：speech 和 dance 阶段各训练 8 个 epoch（480p）；dance 阶段进一步在 704×1280 微调 4 个 epoch（约 3K optimization steps）；推理时生成 121 帧、24 FPS、50 个 flow-matching sampling steps；talking 使用 two-pass CFG（scale 5），两个 dance 任务使用 three-pass CFG（text scale 5，audio scale 4）；dance 视频生成分辨率为 704×1280。
- 论文中引用的开源项目：Wav2Vec 2.0、MuQ、Wan-S2V、MusicInfuser、X-Dancer、MACE-Dance、OmniDance、Wan-Dancer、SyncNet、VBench、VBench++、FACT、Bailando、EDGE、FineDance、AIST++、EMTD、HuMoSet、MA-Data、Hallo3、HY-Avatar、InfiniteTalk、DINO、DreamSim、LAION Aesthetic、MUSIQ、DWPose。论文中未提及这些项目的具体 URL。

### 🏗️ 方法概述和架构

SingDance 是一个基于预训练视频扩散 Transformer（Wan2.2-TI2V-5B）的条件生成框架。输入包括一张参考图像、一段分字段文本提示和一段音频；输出是与音频节奏和角色语义对齐的视频。参考第一帧被单独编码为干净参考 latent，后续帧经过时序压缩后在 latent 空间加噪；模型在去噪过程中接收文本、参考 latent 和路由后的音频条件，最后解码为视频帧。训练目标采用 backbone 的 flow-matching objective，只在生成 latent 位置计算，不引入额外的唇同步或节拍对齐损失。

下图展示了SingDance的整体训练与推理架构。

![Figure 2: Training architecture of SingDance. The first video frame is separately encoded as a clean reference latent,](https://arxiv.org/html/2608.16220v1/figure2-model.png)

图中可见，模型接收参考图像、文本和音频，音频通过Wav2Vec与MuQ提取特征，经硬路由选择后与视觉token结合。


音频表示分为两条通路。语音通路使用 Wav2Vec 2.0 提取逐层表示，通过可学习权重聚合，再经过 temporal encoder 映射为一个全局 speech feature 和帧对齐的局部 speech token；音乐通路使用 MuQ 提取声学与结构特征，再由另一个 temporal encoder 映射为帧对齐 local music token。两个 temporal encoder 均采用非因果 1D 卷积，以匹配预训练特征的非因果上下文。语音特征主要负责 vocal articulation 和短语线索，音乐特征负责节奏、节拍和更长时距的舞蹈结构。

角色控制由文本层面和可学习条件共同实现。可见人物的 vocal 归属定义为 source（可见人物产生声音）或 listener（声音来自画面外表演者）。每个 prompt 被拆成五个字段：vocal role、style、action、first frame、camera，其中 vocal role 字段只负责指定 source/listener，action 字段移除所有与唇部、说话、唱歌相关的描述，仅保留身体动作。这样在文本层面将声音归属与舞蹈内容分离。可学习角色条件包含一个全局 role embedding 和一个局部 role token，分别提供粗粒度语义和帧对齐控制。

hard-compact routing 按生成任务选择最相关的 token 子集。Route 由生成任务指定，而不是从音频内容推断。训练中出现四种配置：Speech/Source、Speech/Listener、Instrumental/Listener、Song/Listener；Song/Source 是仅推理时启用的 held-out 组合。说话任务仅保留 speech 和 role；器乐舞蹈仅保留 music 和 role；歌曲舞蹈在 listener 下同时保留 speech、music 和 role，因为歌词和 vocal phrasing 即使不被可见人物演唱也可能影响编舞时机。推理时的唱歌跳舞保留 speech、music 和 role，仅将 listener 状态切换为 source。

frame-wise joint audio injection 是条件组合的关键模块。对每个生成 latent frame，视觉 token 作为 query，该帧对应的路由后 speech/music/role token 组成联合 key-value 序列，执行交叉注意力，并把输出残差加回视觉表示。该模块被加在 30 块 DiT backbone 中选定的 10 块之后。全局调制上，speech 和 song 样本使用全局 speech feature 与全局 role embedding，器乐样本只使用全局 role embedding；music 仅通过局部 token 注入。参考 latent 不参与更新，只更新生成帧 token；文本仍走 backbone 原有 text cross-attention。

具体地，帧级联合音频注入模块通过交叉注意力融合条件，下图展示了其工作流程。

![Figure 3: Frame-wise joint audio injection. For each generated latent frame, visual tokens act as queries and the temporally aligned routed tokens serve as…](https://arxiv.org/html/2608.16220v1/figure3-audioinjection.png)

视觉token作为查询，路由后的语音、音乐与角色token作为键值，通过交叉注意力更新视觉表示。


训练采用两阶段非对称监督。speech stage 中 music 通路缺失，用屏内说话视频建立 source 行为，用筛选出的真实聆听/反应对话视频建立 listener 行为，两个角色共享同一 speech 通路。dance stage 从 speech-stage checkpoint 开始，引入 music 通路，使用器乐和仅跳舞的歌曲视频；其中器乐样本只保留 music 和 role，歌曲样本保留 speech、music 和 role。dance stage 中 20% 样本仍来自两种角色的 speech 数据，以缓解 articulation 与角色控制遗忘。推理时对 song 输入指定 source 角色，即可组合 speech stage 学到的 articulation 与 dance stage 学到的音乐驱动动作。

推理采用三遍 classifier-free guidance。令负提示且 null audio 的预测、输入提示且 null audio 的预测、输入提示且路由 audio 的预测分别为 \(\mathbf{v}_{\bar{t},0}\)、\(\mathbf{v}_{t,0}\)、\(\mathbf{v}_{t,a}\)，最终预测为 \(\hat{\mathbf{v}} = \mathbf{v}_{\bar{t},0} + s_t(\mathbf{v}_{t,0} - \mathbf{v}_{\bar{t},0}) + s_a(\mathbf{v}_{t,a} - \mathbf{v}_{t,0})\)，其中 \(s_t\) 和 \(s_a\) 分别为文本与音频引导强度。训练时条件 dropout 概率为：文本单独丢弃 10%，音频单独丢弃 10%，两者同时丢弃 5%，其余保留；learned role embedding 在所有 dropout 情况下都保持活跃。

### 💡 核心创新点

1. **显式 vocal role 统一唇同步开关**：将"可见人物是否发出声音"建模为 source/listener 语义角色，而非孤立的口型开关。已有 speech-driven 模型通常默认可见人物就是说话者，音乐舞蹈模型通常忽略 articulation。该创新通过共享语音通路、变化的全局/局部角色条件和文本 vocal role 字段，实现在同一模型中切换说话、聆听、跳舞和唱跳。证据是 paired switch 中 LSE-C 从 4.9672 降至 1.1768，且 music 对齐保持稳定。

2. **hard-compact routing 与 frame-wise joint audio injection**：不同任务选择不同 token 子集，speech、music、role token 在时间对齐的 joint key-value 序列中一起注入。与分离的说话/聆听通路或多阶段音频输入相比，该设计保留了语音通路共享，避免为 listener 单独建立通路，也允许歌曲舞蹈中使用 vocal phrasing 而不触发 articulation。消融去掉 music token 后，SingDance-50 的 BeatAlign 从 0.2723 降至 0.2462，Dance-100 从 0.3002 降至 0.2853。

3. **非对称监督下的零样本唱跳组合**：用 speech 数据学习 source/listener，用器乐和仅跳舞歌曲学习音乐驱动运动，目标 Song/Source 在训练中从未出现。推理只改变角色状态即可组合两个能力，不需要额外的唇同步后处理模型。该组合在 SingDance-50 上取得了高于 Wan-S2V 的运动-节拍对齐与参考保真度。

4. **参数高效的语音驱动唇同步**：SingDance 生成时参数约 5.63B，而强基线 InfiniteTalk 为 18.88B；在 EMTD 上 SingDance 的 LSE-C 达 7.995，接近 InfiniteTalk 的 8.535，同时 Aesthetic 和 Imaging 质量最高。这表明其 articulation 能力是在紧凑参数预算内建立的，为唱跳场景提供了可扩展基础。

### 📊 实验结果

主结果在 SingDance-50 和 Dance-100 上评估，指标包括参考保真度（Subject/Background）、运动-节拍对齐（BeatAlign/MBCR）、视觉质量（Aesthetic/Imaging/Smoothness）和人类偏好（Rhythm/Visual）。MusicInfuser† 不接受参考图像，故参考保真度不适用；GT 行仅作参考不参与生成方法比较。表中保留 GT、最强基线 Wan-S2V、方法 SingDance 及 MusicInfuser† 四个数据行。

| 任务 | 方法 | Subject↑ | Background↑ | BeatAlign↑ | MBCR↑ | Aesthetic↑ | Imaging↑ | Smoothness↑ | Rhythm↑ |
|---|---|---|---|---|---|---|---|---|---|
| Singing-and-Dancing | GT | 0.9673 | 0.9735 | 0.2795 | 0.2922 | 0.5720 | 0.6553 | 0.9858 | – |
| Singing-and-Dancing | MusicInfuser† | – | – | 0.2356 | 0.2337 | 0.5232 | 0.6172 | 0.9927 | – |
| Singing-and-Dancing | Wan-S2V | 0.9565 | 0.9633 | 0.2640 | 0.1983 | 0.5834 | 0.6538 | 0.9860 | 38.67 |
| Singing-and-Dancing | SingDance | 0.9682 | 0.9772 | 0.2723 | 0.2558 | 0.5846 | 0.6688 | 0.9899 | 61.33 |
| Dancing-Only | GT | 0.9648 | 0.9705 | 0.3051 | 0.3027 | 0.5738 | 0.6667 | 0.9880 | – |
| Dancing-Only | MusicInfuser† | – | – | 0.2872 | 0.2661 | 0.5258 | 0.6522 | 0.9948 | – |
| Dancing-Only | Wan-S2V | 0.9415 | 0.9493 | 0.2467 | 0.2180 | 0.5776 | 0.6570 | 0.9867 | 32.00 |
| Dancing-Only | SingDance | 0.9705 | 0.9766 | 0.3002 | 0.2632 | 0.5718 | 0.6738 | 0.9921 | 68.00 |

SingDance 在 Singing-and-Dancing 视觉质量上优胜于 Wan-S2V，Aesthetic 基本持平（0.5846 vs 0.5834），Imaging 从 0.6538 增至 0.6688；在 Dancing-Only 上 Aesthetic 0.5718 略低于 Wan-S2V 的 0.5776，但其余多数指标占优。人类评估中 SingDance 的 Rhythm 偏好率为 61.33%（Singing-and-Dancing）和 68.00%（Dancing-Only），Visual 偏好率为 54.67% 和 55.67%；研究随机采样 20 个 source 歌曲输入（SingDance-50）和 20 个器乐输入（Dance-100），由 15 名参与者对 40 个匹配输入对进行盲选，每人共 300 票/任务/准则。

配对角色切换在 SingDance-50 上进行，切换仅改 vocal role，其余输入和 seed 固定。表中保留 Wan-S2V 和 SingDance 在 Source 与 Listener 两种角色上的唇同步和解拍对齐指标。

下图提供了两个配对角色切换的定性结果。

![Figure 4: Qualitative paired vocal-role switching on two SingDance examples. Each Lip-on/Lip-off pair shares all role-independent inputs and inference settings; only the vocal role changes.](https://arxiv.org/html/2608.16220v1/liponoff-dance.png)

图中可见，在保持其他输入不变的情况下，切换vocal role能有效控制人物的唇部是否与语音同步。


| 角色 | 方法 | LSE-C | LSE-D | BeatAlign↑ | MBCR↑ |
|---|---|---|---|---|---|
| Source | Wan-S2V | 4.2809 | 9.4462 | 0.2640 | 0.1983 |
| Source | SingDance | 4.9672 | 8.9363 | 0.2723 | 0.2558 |
| Listener | Wan-S2V | 4.1676 | 9.5386 | 0.2480 | 0.2065 |
| Listener | SingDance | 1.1768 | 12.4059 | 0.2704 | 0.2787 |

SingDance 的 source 角色 LSE-C 4.9672、LSE-D 8.9363，明显优于 listener 角色的 1.1768、12.4059，说明模型能按角色决定是否同步 vocal；同时 listener 的 BeatAlign/MBCR 为 0.2704/0.2787，证明音乐驱动身体运动没有被角色切换破坏。Wan-S2V 只用文本提示切换时 LSE-C 变化很小（4.2809→4.1676），说明纯文本控制不足。

语音驱动唇同步能力在 EMTD 上比较：Hallo3 LSE-C 5.352，Wan-S2V 6.999，HY-Avatar 7.210，InfiniteTalk 8.535，SingDance 7.995；SingDance 的 LSE-D 7.551 弱于 InfiniteTalk 的 7.108，但优于其余基线。SingDance 的 Aesthetic 0.593 和 Imaging 0.722 均为所有方法中最高，Subject 0.9859 接近最优。关键消融中，去掉 routed music token 后，SingDance-50 的 BeatAlign/MBCR 从 0.2723/0.2558 降至 0.2462/0.2386；Dance-100 从 0.3002/0.2632 降至 0.2853/0.2457，验证了 music token 对节拍对齐的贡献。

### 🔬 细节详述

- **训练数据**：speech phase 使用 HuMoSet 和一个专有网络视频集，合计约 300,000 个五秒片段；其中约 12,000 个片段为真实聆听或对屏外对话者的反应视频，其余主要为屏内说话。dance phase 使用清洗后的 MA-Data 和专有舞蹈视频集，合计约 48,000 个五秒片段；其中 18,000 个为器乐，30,000 个为歌曲。对歌曲片段使用 SyncNet 识别并移除可检测到唇同步的片段，保留为 dancing-only。论文明确不使用成对唱歌跳舞训练视频。
- **损失函数**：使用 backbone 的标准 flow-matching objective，仅在生成 latent 位置上计算。未提供具体公式或权重；论文明确不使用专门的唇同步损失或节拍对齐损失。条件 dropout 作为训练正则化：文本单独丢弃 10%，音频单独丢弃 10%，两者同时丢弃 5%，其余保留；learned vocal-role embedding 在所有 dropout 情况中保持。
- **训练策略**：使用 AdamW，学习率 \(1\times10^{-5}\)，effective batch size 64。speech 和 dance 阶段各训练 8 个 epoch，分辨率 480p；之后 dance 阶段在 704×1280 下继续微调 4 个 epoch，约 3K 优化步。dance stage 中 20% 训练样本为 speech 样本以缓解遗忘。未说明 warmup、weight decay、Adam epsilon、学习率调度细节。
- **关键超参数**：模型初始化为 Wan2.2-TI2V-5B，DiT backbone 共 30 块，joint audio injection 加在选定的 10 块之后。Wav2Vec 2.0 层表示通过学习权重聚合；Music 用 MuQ。提示分五个字段。推理生成 121 帧，24 FPS，50 个 flow-matching 采样步。说话任务用两遍 CFG scale 5；舞蹈任务用三遍 CFG，text scale 5，audio scale 4。生成时参数约 5.63B。
- **训练硬件**：64 块 NVIDIA A100 GPU。未说明训练时长。
- **推理细节**：talking 视频按 EMTD 输入分辨率；舞蹈视频生成 704×1280。CFG 公式为 \(\hat{\mathbf{v}} = \mathbf{v}_{\bar{t},0} + s_t(\mathbf{v}_{t,0} - \mathbf{v}_{\bar{t},0}) + s_a(\mathbf{v}_{t,a} - \mathbf{v}_{t,0})\)。未说明 beam search、温度或随机种子策略，仅提到 paired switching 固定 seed。
- **评测细节**：BeatAlign 识别运动学节拍为 DWPose 提取的 65 个身体、脚和手 landmarks 上的 movimiento 速度曲线的平滑局部最小值，用高斯加权时间接近度（\(\sigma=0.05\) 秒）测量每个运动学节拍与最近音乐节拍的距离；MBCR 测量被至少一个运动学节拍在 100 ms 容差内覆盖的音乐节拍比例，两者在 pose-valid 子集上平均。
- **正则化或稳定训练技巧**：条件 dropout、dance stage 混合 20% speech 样本、参考 latent 不被 audio injection 更新；未提及 EMA、gradient clipping 等。

### ⚖️ 评分理由

*   创新性 (1.5/2)：[A_SUMMARY][A_METHOD] 论文将可见人物是否发声建模为source/listener显式语义角色，以共享语音通路统一说话、聆听、跳舞和唱跳四种行为；并通过hard-compact routing与非对称监督使训练未见过的Song/Source组合在推理时零样本涌现，创新点具体且有组件级证据支持。

*   技术严谨性 (1.2/1.5)：[A_METHOD] 角色条件、hard-compact routing、frame-wise joint audio injection及两阶段训练设计逻辑自洽；共享语音通路避免为listener另建模型，参考latent不参与音频注入更新，CFG三遍公式也解释清楚，未发现明显推导错误或不合理假设。

*   实验充分性 (1.3/1.5)：[A_RESULTS] 主结果覆盖SingDance-50和Dance-100，并包含配对角色切换、EMTD外部评估和music token消融，对核心声明有因果与泛化证据；[A_LIMITS] 但舞蹈基线仅MusicInfuser和Wan-S2V，缺少更直接的音乐驱动舞蹈系统，且未报告置信区间/方差，Song/Source仅50个case，listener主要依赖自动LSE指标，人类评估只与Wan-S2V对比，统计与公平性证据仍不足。

*   清晰度 (0.9/1)：[A_METHOD] 提示分字段、路由表、CFG公式和架构图解释清晰；[A_SUMMARY] 核心贡献、实验设置和局限表述明确，未发现明显的组织、符号或公式表达问题。

*   影响力 (0.5/1.5)：[A_SUMMARY][A_METHOD] 工作属于音视频生成，核心贡献集中在视频扩散模型的条件注入与角色控制，音频/音乐主要作为控制信号；按本速递面向语音/音乐/音频读者的领域相关性约束，对其直接影响力有限，不超过0.5。

*   开源 (0.0/1.5)：[A_OPEN] 论文未发布核心代码、模型权重或数据资源，也未给出明确的后续开源承诺。

*   可复现性 (0.3/0.5)：[A_METHOD] 论文披露了主要架构、训练阶段、数据规模、优化器、学习率、batch size、epoch、分辨率以及推理帧数、FPS、采样步和CFG尺度；[A_OPEN] 但warmup、weight decay、Adam epsilon和学习率调度等少量实现细节缺失，完全复现仍有缺口。

*   工程/实践价值 (1.1/1.5)：[A_METHOD][A_RESULTS] 单一Wan2.2-TI2V-5B模型统一四种生成行为，生成参数约5.63B；[A_RESULTS] 在EMTD上LSE-C 7.995接近参数更多的InfiniteTalk的8.535，参数效率较好；[A_LIMITS] 但仅支持短时单人、二元clip级角色，实践部署范围受到明确限制。

### 🚨 局限与问题

1. **论文明确承认的局限**：SingDance 只面向短时单人的二元 clip-level vocal role，不能建模 clip 内角色转换、双人/多人和多 vocal role，也不能自动推断角色归属；更长时、多人物表演被列为未来工作。
2. **审稿人发现的潜在问题**：现有舞蹈基线偏弱且不完整，MusicInfuser 不接受参考图，Wan-S2V 的主要设计目标并非音乐驱动舞蹈，缺少与 OmniDance、Wan-Dancer、X-Dancer 等更直接的音乐驱动视频/姿态系统的对比。其次，listener 的"去唇同步"主要靠 LSE-C/LSE-D 证明，自动指标可以很低但面部仍可能僵硬或异常，缺乏细粒度人类评估或面部动作质量指标。第三，训练数据中歌曲片段依赖 SyncNet 过滤可能留下弱同步样本，而这类样本会直接影响 dancing-only 的角色语义纯度。第四，Song/Source 的零样本泛化只在 50 个测试样本上评估，场景、音乐风格和人物身份覆盖有限，未报告失败案例或角色混淆情况。第五，统计显著性缺失，自动指标和人类偏好均未提供置信区间或方差。第六，人类评估仅与 Wan-S2V 对比，MusicInfuser 因为不接收参考图而被排除，导致唱跳质量的人类判断同样缺少更直接的 dance 基线参照。

---

[← 返回 2026-08-18 语音/音乐/音频论文速递](/audio-paper-digest-blog/posts/2026-08-18/)
