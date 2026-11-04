---
title: "KeyWise: Efficient Video-Only Piano Transcription with a Lightweight Per-Key Architecture"
date: 2026-11-04
draft: false
tags: [视觉音乐转录, MIDI力度估计, RNN, CNN]
categories: [论文速递]
description: "针对延音踏板和缺失音频使声音与按键动作脱节的问题，KeyWise 把校正后的键盘切成 88 个固定按键区域并用一个跨键共享的循环网络逐键判断起始与保持，在 PianoVAM 上以 1.3M 参数达到与 28.2M 参数的 V2N 相当的起始准确率并在 100 ms 容差下更准地找回按键释放与力度，代价是仍需针对新录制条件微调且依赖已知键盘角点。"
hiddenInHomeList: true
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_arxiv_id: "2611.04476"
paper_digest_workbench_contract: "researcher-workbench"
paper_digest_workbench_schema_fingerprint: "1f09b594c317cc38e934de27a5b0e8ceb4baa50ef79bd4f8683dd9adea720fe7"
paper_digest_reader_title: "只看俯视键盘视频如何转写钢琴：KeyWise 的逐键设计"
paper_digest_original_title: "KeyWise: Efficient Video-Only Piano Transcription with a Lightweight Per-Key Architecture"
paper_digest_arxiv_version: 1
paper_digest_arxiv_versioned_id: "2611.04476v1"
paper_digest_arxiv_abs_url: "https://arxiv.org/abs/2611.04476v1"
paper_digest_arxiv_pdf_url: "https://arxiv.org/pdf/2611.04476v1.pdf"
paper_digest_primary_task: "视觉音乐转录"
paper_digest_tags_contract: "paper-tag-flat-tags"
paper_digest_tags_schema_fingerprint: "27e36280a4b8d3df62ebe54d3ab037920f4d69feb2b554163f01bbae2caf4338"
paper_digest_tags_selection_contract: "paper-tag-selection"
paper_digest_tags_registry_version: "paper-tag-catalog"
paper_digest_tags_registry_sha256: "9673bc0122e1905a5dcfd8b223675400cc2fa4c36095bc0e5f817edf99a0ec5c"
paper_digest_tags_concepts: [{"facet":"task","id":"task.visual-music-transcription","label":"视觉音乐转录"},{"facet":"task","id":"task.midi-velocity-estimation","label":"MIDI力度估计"},{"facet":"method","id":"method.rnn","label":"RNN"},{"facet":"method","id":"method.cnn","label":"CNN"}]
paper_digest_primary_method: "RNN"
paper_digest_score: 7.6
paper_digest_rank_bucket: "前25%"
paper_digest_document_type: "方法研究"
paper_digest_one_sentence: "针对延音踏板和缺失音频使声音与按键动作脱节的问题，KeyWise 把校正后的键盘切成 88 个固定按键区域并用一个跨键共享的循环网络逐键判断起始与保持，在 PianoVAM 上以 1.3M 参数达到与 28.2M 参数的 V2N 相当的起始准确率并在 100 ms 容差下更准地找回按键释放与力度，代价是仍需针对新录制条件微调且依赖已知键盘角点。"
paper_digest_authors: [{"affiliations":["Department of Informatics and Telecommunications, University of Thessaly, Lamia, Greece"],"name":"Anastasios Chatzigiannis"},{"affiliations":["Department of Informatics and Telecommunications, University of Thessaly, Lamia, Greece"],"name":"Natalia Panagou"},{"affiliations":["Department of Informatics and Telecommunications, University of Thessaly, Lamia, Greece"],"name":"Maria Koziri"}]
paper_digest_abstract_sha256: "f80d79adfd5a8060c35ab77ac1aaba5b44acdf2d4bd5221d80bccdad4cdc0ceb"
paper_digest_sidecars: {"citation.bib":{"sha256":"e0e9460505a8824dcd5184106901559e53d5429918d194e78506ae5f0aedf192","url":"/audio-paper-digest-blog/client/papers/2026-11-04/2611-04476/citation.bib"},"citation.json":{"sha256":"389e4b70c52c62a7290d9f4c2ea3e3a9cd720bc0cc194969f045105b3fbd3b99","url":"/audio-paper-digest-blog/client/papers/2026-11-04/2611-04476/citation.json"},"citation.ris":{"sha256":"d0ac7488254ef49d3600f572a3a10f4c923e4674f54beb801ba58c9fe1e0e4af","url":"/audio-paper-digest-blog/client/papers/2026-11-04/2611-04476/citation.ris"},"rethink-context.json":{"contract":"paper-research-context","schemaFingerprint":"5d4e79f7d3ee65b39ccb38281548bf20a1b2041ab7a27625eaf97ab9909a8383","sha256":"6c7d67b4a8cff75e3880cded1f8027bbe7b866c9985ae54f986369eec0131e50","url":"/audio-paper-digest-blog/client/papers/2026-11-04/2611-04476/rethink-context.json"}}
paper_digest_api_reader_contract: "beginner-researcher"
paper_digest_api_reader_schema_fingerprint: "cd8baf5b8bda3a49eec64f6005931af63de4e9a13148cba5f354c661ca6e9df2"
paper_digest_api_reader_article_sha256: "e561a94254348937fc3cc321a99ba77421c4b726410aee0cf2bf013c613ecf6b"
paper_digest_api_reader_plan_sha256: "78d03a84981233b271e2c30bb410f991a7515f672c936ddfa4b8ed1b9857e683"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings"
paper_digest_api_reader_source_binding_schema_fingerprint: "d2a2607a6e561909473022eb43f56332ee357af8568566a095c29083ffdec9cc"
paper_digest_api_reader_source_bindings_sha256: "cc92fc892bb5742773deb1b17bee5134e957620fbea6d96df2f326abe0c73d36"
paper_digest_api_reader_source_table_count: 3
paper_digest_api_reader_source_formula_count: 2
paper_digest_api_reader_structured_artifacts_sha256: "2c99834c868a968808681b7abec6f3c9cbeb437ab1534f59085dff29c91cb627"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity"
paper_digest_api_reader_author_identity_schema_fingerprint: "1e3fd3a9a56c9a5bf52df8df5022690b9a3fa92e83e934f295af87c0e258ed2f"
paper_digest_api_reader_author_identity_sha256: "db1ea20349e667b24ec1a56a48cb07d930fd544795b6dead0e72d84ee075259d"
paper_digest_api_reader_author_count: 3
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity"
paper_digest_api_reader_resource_identity_schema_fingerprint: "33b0be17118be61f39b85ce690c8da17e91f2864bb65e85284f60c40067328e0"
paper_digest_api_reader_resource_identity_sha256: "27c65d18f2d8655361cee3e965c0b45791bad0364a81daaefbe057dccdf4533d"
paper_digest_api_reader_resource_count: 0
paper_digest_api_reader_figure_persistence: "ephemeral-no-persisted-figure-assets-v1"
paper_digest_api_reader_decision_projection: "api-reader-decision-projection"
paper_digest_api_reader_decision_projection_schema_fingerprint: "e56feb5ab75c8710904916b898f73dab9bb18bdf65bb60b7ed2edf7f99cea860"
---

# 📄 只看俯视键盘视频如何转写钢琴：KeyWise 的逐键设计

> 英文题目：*[KeyWise: Efficient Video-Only Piano Transcription with a Lightweight Per-Key Architecture](https://arxiv.org/abs/2611.04476v1)*

<!--paper-tag-hierarchy-v1:start-->

**研究分类**

- **研究任务**：[视觉音乐转录](/audio-paper-digest-blog/papers/?concept=task.visual-music-transcription)；[音乐分析](/audio-paper-digest-blog/papers/?concept=task.music-understanding) → [MIDI力度估计](/audio-paper-digest-blog/papers/?concept=task.midi-velocity-estimation)
- **研究方法**：[RNN](/audio-paper-digest-blog/papers/?concept=method.rnn)；[CNN](/audio-paper-digest-blog/papers/?concept=method.cnn)

<!--paper-tag-hierarchy-v1:end-->

> 评分：**7.6/10** | 创新 1.4/2 | 技术严谨 1.3/1.5 | 实验充分 1.3/1.5 | 清晰度 0.9/1 | 影响力 1/1.5 | 开源 0/1.5 | 可复现 0.5/0.5 | 工程/实践 1.2/1.5


## 👥 作者与机构

- Anastasios Chatzigiannis：Department of Informatics and Telecommunications, University of Thessaly, Lamia, Greece
- Natalia Panagou：Department of Informatics and Telecommunications, University of Thessaly, Lamia, Greece
- Maria Koziri：Department of Informatics and Telecommunications, University of Thessaly, Lamia, Greece

## 📌 核心摘要

钢琴音频转录难以从声音恢复手指何时松键，延音踏板会让琴弦在松键后继续发声，噪声、混音缺失声轨也会破坏音频，而俯视视频直接显示琴键的按下与松开，可以绕开这三类困难。论文的输入是经过透视校正的彩色键盘长条，输出是每帧每个琴键的起始概率、持续状态概率与力度值，再经阈值解码为带起始、结束和力度的音符。处理过程先把长条切成与琴键对应的固定区域，卷积编码器为每个区域产生一列特征，同一双向门控循环网络在时间上分别跟踪全部琴键并给出三种预测。与把整张键盘压缩成全局向量再预测全部琴键的做法不同，该设计不需要同时学习琴键在哪里和按下长什么样，只需在已知邻域内判断状态，并让少见音区的琴键共享常见音区的训练信号。在PianoVAM测试集上，同一份评分代码下KeyWise在100 ms容差的起始F1以97.8%高于V2N的97.0%，同时要求偏移时以97.0%高于95.5%，同时要求力度时以89.4%高于84.5%，参数量以1.3 M低于28.2 M，同卡推理快约4.7倍。结论适用于键盘完全可见且角点已知的俯视录制，在PianoYT这类录制条件变化且标签来自音频转录的数据上需要先预训练再微调，原文报告了编码器为主的计算量与实测耗时。

## 🔗 开源与复现资源

本次未形成可展示的已核验资源记录，开放状态尚未核实。

可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 视频转写要解决的输入与输出是什么

这篇论文研究的是只看俯视视频、不听声音的钢琴转写。输入是固定机位拍摄键盘的视频，目标是输出每个音符的音高、起始时间、按键释放时间和力度，力度按 MIDI 力度理解。必须保留的信息是哪个键在何时被按下和松开，而不是声音何时消失。

音频转写在干净录音室里找起始点已经很准，但论文指出 3 个具体困难：踩下延音踏板后琴弦在按键松开后仍继续发声，声音结束不等于动作结束；噪声、混响、多乐器混合会污染声音；无声视频或音轨损坏时根本没有可用音频。视频直接看按键，天然不受这三者影响，还能看到哪只手弹哪个音，但要面对手部遮挡、低帧率限制时间精度以及视角和光照变化。

### 此前视频转写走了哪几条路线

在纯视觉系统成熟之前，视频多是给音频转写打辅助，例如用视觉线索纠正泛音错误、用手部位置剔除物理上不可能的音符，或者把视频和音频特征做交叉注意力融合。论文提到这类系统仍需要可用音轨，且把偏移量建模为声音结束而非按键松开。

最早的纯视觉系统依赖传统视觉方法，用当前帧减去空键盘背景图来找被按下的键，对光照、阴影和遮挡敏感，也有人用深度相机或裁剪单键图像再用卷积网络分类。更相关的深度网络包括 Sight to Sound、Video2Roll Net、Pay Attention to the Keys 以及当前最强的 V2N。它们共同点是从描述整个键盘的一个全局特征向量出发联合预测 88 个键，有的加入斜坡向量或学习到的空间编码作为位置先验，但仍需同时学习按键长什么样和每个键在哪里。

### 为什么全局向量要同时学长相和位置

如果一个网络只看到整张键盘的压缩向量，它做每个键的判断时都依赖同一份全局描述。它既要从像素中分辨键帽下沉、手遮挡下的细微变化，又要记住最左是 A0、最右是 C8 这种排列。论文认为后者其实已知：经过透视校正后，键盘变成一条直带，每个键的位置固定，音高近似等于水平位置。

把已知几何留给网络重新学习，既浪费容量，也对训练样本少的键不利。键盘两端的低音区和高音区在乐曲中出现次数少，若每个键有独立输出权重，这些权重得到的训练信号就少。KeyWise 的出发点是把位置固定下来，让所有键共享同一套判断逻辑，用样本多的中部琴键学到的按压外观去帮助样本少的两端琴键。

### KeyWise 让一个样本走完哪些步骤

对一段俯视视频，KeyWise 先按数据集给出的键盘角点做透视变换，得到宽 1408 像素、高 112 像素的彩色直条带，并按 30 帧每秒重采样。然后把直条带切成 88 个等宽瓦片，每个宽 16 像素，固定对应一个琴键，作为该键的感兴趣区域。

下面这张总览图把从校正、编码到逐键时序建模与解码的完整链路画在了一起，可以对照着看数据形状如何变化。

> **看图路径：** 1. 从左上角输入视频经透视变换到下方直条带的路径；2. 中间编码器到 88 个按键向量再到共享循环网络与三个输出头的分支；3. 右侧逐键时间模型与编码器块的内部堆叠顺序

[![原论文 Figure 1：Overview of KeyWise. On the left, the keyboard is rectified from its four corners and cut into 88…](https://arxiv.org/html/2611.04476v1/Fig1.svg)](https://arxiv.org/html/2611.04476v1/Fig1.svg)

*论文图 1。原论文 Figure 1:：“Overview of KeyWise. On the left, the keyboard is rectified from its four corners and cut into 88 equal key ROIs.”。*

图中左侧是输入视频经角点透视变换得到校正条带并切成 88 个等宽区域，中间是卷积编码器给出每键一列特征、共享循环网络再分出起始、保持和力度 3 个头，右侧展开了编码器块和逐键时间模型的内部结构。结合正文可知，编码器逐帧处理条带，共享的双向循环网络对 88 个键分别沿时间展开，最终阈值解码把逐帧概率变成带起始、释放和力度的音符。

### 校正条带如何恰好对应到 88 列特征

校正用 4 个角点估计单应矩阵，把视频帧映射到以 A0 在左、C8 在右的条带，论文给出宽度 W 为 1408、高度 H 为 112。PianoVAM 原始为 1920 乘 1080、60 帧每秒，PianoYT 多为 1920 乘 1080、23.98 到 60 帧每秒，论文统一解码到 720p 并取最接近 t 除以 30 秒时刻的原生帧，重采样到 30 帧每秒。

切分规则是第 k 个键的区域为宽度 w 等于 W 除以 88 即 16 像素的竖条。编码器有 4 个块，每块含步长 2 和步长 1 的 3 乘 3 卷积各一次，均带批归一化和 ReLU，通道数依次为 32、64、128 和 192。每次步长 2 把高和宽减半，四次后 112 乘 1408 的条带变成 7 行 88 列的特征图，正好每键一列。再对 7 行取平均并经共享的 1 乘 1 卷积映射到 64 维，就得到每帧每键的按键向量。

**键盘校正 × 按键感兴趣区域：** 键盘校正负责把倾斜拍摄的键盘通过单应变换拉成固定宽度和高度的直条带，使音高近似对应水平位置；按键感兴趣区域是把该直条带等分成 88 个宽度 16 像素的瓦片，每个瓦片固定对应一个琴键。二者搭配后，模型不再需要从整图学习每个键在哪里，只需在已知邻域内判断该键是否被按下。

下图展示了 C4 附近 5 个键的区域经过编码器时宽度如何逐块减半，适合用来理解等宽瓦片与特征列的对应关系。

> **看图路径：** 1. 顶行输入条带中 C4 附近五个键的 16 像素划分；2. 四个编码块宽度逐次减半后每键对应列数的变化；3. 底层平均池化后每个键向量的对应关系

[![原论文 Figure 2：Key ROIs through the encoder, for five keys around C4.](https://arxiv.org/html/2611.04476v1/Fig2.svg)](https://arxiv.org/html/2611.04476v1/Fig2.svg)

*论文图 2。原论文 Figure 2:：“Key ROIs through the encoder, for five keys around C4.”。*

图中顶行是每个键 16 像素的输入划分，经过 4 个块后每键依次对应 8 列、4 列、2 列、1 列，最终平均成一个键向量。论文也承认等宽瓦片并不贴合真实黑白键轮廓，瓦片中心与真实键中心最多偏约 17 像素，加上零填充带来的 7.5 像素偏移，感受野中心最多偏约 20 像素，但因感受野宽 91 像素，目标键仍在其内部，网络可以学到该看哪些像素。

\[\mathbf{z}_{t,k}=\mathrm{ReLU}\Big(\mathbf{W}_{p}\,\frac{1}{7}\sum_{r=1}^{7}F_{t}[:,r,k]+\mathbf{b}_{p}\Big)\in\mathbb{R}^{64}.\]

该式计算 t 帧 k 键的 64 维按键向量，它先对特征图第 k 列的 7 行取平均，再经共享矩阵与偏置做线性映射并取 ReLU。这里下标 t 是帧、下标 k 是从 A0 计数的 1 到 88 键号，求和范围是 7 行，结果是向量而非标量，后续作为共享时序模型的输入。

### 共享循环网络如何给出起始与保持概率

时序部分是一个两层双向门控循环单元，每个方向 128 单元，丢弃率为 0.2。它不是在 88 个键之间传递信息，而是把 88 个键看成 88 条共享权重的序列，对每条序列分别沿 T 帧展开，输出 256 维隐状态。这种设计使参数量主要集中在编码器，而时序判断逻辑被所有键复用。

每个键每帧有两个线性头：起始概率由隐状态经逻辑斯蒂函数得到，保持概率由隐状态拼接经梯度截断的起始概率再经逻辑斯蒂函数得到，做法沿用 Onsets and Frames 的思想。第 3 个力度头是带 S 型输出的线性头，参数仅 257 个，预测 MIDI 力度除以 127 的值。

**卷积编码器 × 按键向量：** 卷积编码器负责逐帧处理校正后的彩色条带，通过四次降采样把宽度缩小 16 倍，使每个 16 像素的按键区域恰好对应特征图上一列；按键向量是对该列 7 行特征取平均后再经共享投影得到的 64 维表示。搭配的意义是空间信息被保留在列位置上，后续时间模型可以直接按列取用对应按键的外观特征。

**起始头 × 帧保持头：** 起始头负责判断每一帧每个键是否有音符开始，帧保持头负责判断该键在该帧是否处于按下保持状态。帧保持头的输入除了共享循环网络的隐状态，还拼接了起始概率但截断梯度，这样保持判断可以利用起始信息而不干扰起始头的训练，二者组合后才能由起始帧和结束帧解码出完整音符时长。

### 训练用什么目标和数据增强

目标是帧级别的钢琴卷帘。起始目标在最接近音符起始的那帧及其下 1 帧为 1，保持目标从起始到释放之间为 1。若同一键两次起始落在相邻帧，目标会合并，解码时只能得到一个音符。论文使用加权二元交叉熵，起始权重为 8，保持权重为 2，以应对正样本稀少。

\[\ell(p,y;\lambda)=-\frac{1}{88\,T}\sum_{t,k}\big[\lambda\,y_{t,k}\log p_{t,k}\\ +(1-y_{t,k})\log(1-p_{t,k})\big],\]

该式是单个头的加权二元交叉熵，它对 88 乘 T 个键帧求平均，正样本乘以权重，正样本稀少时提高召回的代价。总损失是起始损失加保持损失，力度头只在起始帧计算平方误差并以权重 1 加入。

训练在单张 RTX 3090 上用 32 帧约 1.07 秒的片段、批量 8、AdamW、学习率 6 乘 10 的负 4 次方、权重衰减 10 的负 4 次方、3% 线性 warm-up 加余弦衰减到峰值的 2%、25 轮、梯度裁剪 3.0 和混合精度。80% 的片段做随机增强，包括水平缩放、正负 3 像素平移、正负 0.3 度旋转、亮度和对比度正负 15%、概率 0.1 转灰度、概率 0.3 加标准差 0.02 的高斯噪声。PianoYT 微调从 PianoVAM 模型出发训练 12 轮，学习率 2 乘 10 的负 4 次方。每种设置训练 3 个随机种子，保留验证集上帧级起始 F1 最好的一轮。

### 数据集、阈值与评分规则如何设定

PianoVAM 用官方 v1.1 划分，与 V2N 相同，81 个训练录音中实际用 80 个，9 个验证、9 个测试共 42241 个测试音符，偏移量取按键释放而非声音结束。PianoYT 是俯视 YouTube 视频，标签是用 Onsets and Frames 跑音频得到的伪标签，偏移量带有踏板延长的误差；论文去掉 7 个不可用训练视频并留 21 个做验证，剩下 179 个训练，测试用 21 个视频共 33535 个音符。

阈值在验证集上三步搜索：先固定保持阈值 0.5 搜索起始阈值，再固定起始阈值搜索保持阈值，最后再搜一次起始阈值。PianoVAM 按带偏移量的音符 F1 选阈值，PianoYT 因偏移量不可靠按起始 F1 选阈值，起始容差都用 50 毫秒。测试集不参与任何选择。选出的起始阈值在 PianoVAM 3 个运行都是 0.90，在 PianoYT 为 0.50 到 0.60，这与损失权重推导的理论值基本一致。

评分用 mir_eval 的音符指标。起始 F1 要求音高正确且起始误差在正负 50 或正负 100 毫秒内，每个参考音符只能匹配一次。视频帧本身长 33 到 40 毫秒，因此视觉工作同时报告 100 毫秒。带释放的 F1 还要求释放时间落在容差内，帧 F1 在 60 赫兹网格上计算，带力度要求预测力度与参考相差 12.7 个 MIDI 步以内。比较用每录音配对的双侧 Wilcoxon 符号秩检验，并对多指标做 Holm-Bonferroni 校正，9 个测试录音时最小 p 值为 0.004。

### 在 PianoVAM 上小模型是否达到大模型精度

要回答的核心比较问题是：在相同 PianoVAM 划分、相同 mir_eval 评分下，1.3M 参数的 KeyWise 能否达到 28.2M 参数的 V2N 的精度，指标方向均为越高越好。下表整理了起始、带释放和带力度 3 类 F1，条件是论文对 V2N 已发布的 MIDI 预测重新评分。

| 条件 | 指标与容差 | V2N 已发布预测 | KeyWise 均值 | 差距含义 |
| --- | --- | --- | --- | --- |
| PianoVAM 测试集 9 录音 | 起始 F1 50 ms | 94.7% | 95.0% | 差异不显著 |
| PianoVAM 测试集 9 录音 | 起始 F1 100 ms | 97.0% | 97.8% | KeyWise 高 0.8 点但校正后不显著 |
| PianoVAM 测试集 9 录音 | 带释放 F1 100 ms | 95.5% | 97.0% | KeyWise 在 9 个录音全胜且显著 |
| PianoVAM 测试集 9 录音 | 带力度 F1 100 ms | 84.5% | 89.4% | KeyWise 显著更准 |

上表说明 KeyWise 以约 22 分之一的参数达到 V2N 的起始精度，且在 100 毫秒容差下同时要求释放或力度正确时显著更好，论文报告同 GPU 上快 4.7 倍。但显著性依赖 9 个录音的配对检验，50 毫秒起始差异 p 值为 1.0，100 毫秒起始校正后 p 值为 0.11，只有带释放和带力度在 100 毫秒的 p 值通过校正。

下图按录音展示了起始 F1 的分布，适合判断平均值是否被个别录音主导。

> **看图路径：** 1. 左右两图分别对应 50 ms 与 100 ms 容差下的每录音起始 F1；2. 同一录音行上 KeyWise 均值区间与 V2N 点的左右位置；3. 低分录音与高分录音中两类方法的差距变化

[![原论文 Figure 3：Onset F1 per PianoVAM test recording at 50 ms (a) and 100 ms (b).](https://arxiv.org/html/2611.04476v1/Fig3.svg)](https://arxiv.org/html/2611.04476v1/Fig3.svg)

*论文图 3。原论文 Figure 3:：“Onset F1 per PianoVAM test recording at 50 ms (a) and 100 ms (b).”。*

图中左为 50 毫秒、右为 100 毫秒，横轴从 82% 开始，绿色为 KeyWise 三次运行的均值与范围，蓝色三角为 V2N。可以看到 100 毫秒下 KeyWise 在 9 个录音中的 8 个占优，50 毫秒下两者交错。论文还分析首个运行的错误类型：与相邻或差八度的错键仅 15 个漏检加 5 个多检，黑键因动作小、俯视难观察而召回较低且起始偏晚，超过一半的 50 毫秒误差是时间误差，同一录音内时间偏差较稳定而录音间从负 5.5 到正 30.5 毫秒不等。

**起始 F1 × 带释放的 F1：** 起始 F1 只要求音高正确且预测起始时间落在参考起始附近容差内；带释放的 F1 额外要求预测的按键释放时间也落在容差内。在有踏板的钢琴录音中声音延续不等于按键保持，因此后者更能反映视频直接观察按键动作的价值，KeyWise 的优势主要体现在后者以及同时要求力度正确的指标上。

### 换到 YouTube 录制条件后结论还成立吗

第二个比较问题是跨条件泛化：在录制条件多变、标签为音频伪标签的 PianoYT 上，直接迁移、只训 PianoYT 与预训练加微调 3 种策略的起始 F1 如何，越高越好。下表条件是同一 21 个测试视频，但训练数据与 PPAN 等基线不完全相同，不能视为严格配对。

| 训练策略 | 100 ms 起始 F1 | 说明 |
| --- | --- | --- |
| 只训 PianoYT | 66.7% | 三次运行均值 |
| PianoVAM 零样本直接测 | 15.3% | 单次运行 |
| PianoVAM 预训练再微调 | 69.4% | 每次微调都高于只训 PianoYT |

上表说明直接把 PianoVAM 模型搬到 PianoYT 会崩塌到 15.3%，预训练加微调比只训 PianoYT 在 50 和 100 毫秒上高 2.8 和 2.6 个点，100 毫秒下 69.4% 与 PPAN 报告的 68% 量级相当。但该对照不是配对检验，训练集不同且 PPAN 只保留 2 位数字，50 毫秒分数整体偏低部分源于伪标签时间不可靠，微调的每视频差异 p 值也未达到显著。

初学者容易误以为视频不受声学影响就不需要适配，论文的反例是零样本结果：视角、光照、键盘外观和帧率变化仍会使外观特征偏移，因此新录制条件仍需微调，这与此前视觉系统需要微调的结论一致。

### 逐键共享设计比全局向量好在哪里

消融要回答的是：在相同编码器、数据、训练和解码下，把每键独立列特征换成全局向量后精度如何变化。全局变体把特征汇聚到 16 个水平区间再展平到 256 维向量，用每键独立输出头预测；Global-88 保留 88 列但仍展平并用每键独立权重，以分离分辨率与权重共享的作用。

| 模型 | 参数量 | 100 ms 起始 F1 | 两端键盘表现 |
| --- | --- | --- | --- |
| KeyWise | 1,299,491 parameters | 97.8% | 低音区 91%，高音区 91% |
| 全局向量变体 | 3,698,128 parameters | 95.6% | 低音区 72%，高音区 80% |

上表说明参数更多的全局模型反而在 100 毫秒起始与带释放上显著更差，校正后 p 值均为 0.020，且损失集中在样本少的两端键盘。50 毫秒起始差异不显著，说明差距主要不是单帧时间抖动，而是漏检和虚检：全局变体无附近音符的漏检约 2 倍、无音符处的虚检约 3.7 倍。Global-88 同样在两端更差，证明只提高水平分辨率不够，共享权重才是关键，KeyWise 相对全局的增益随该键训练音符数减少而增大。
下图按音区与黑白键展示了找回率，适合定位损失来源。

> **看图路径：** 1. 最低音区 A0-B1 与最高音区 C6-C8 两组柱子的高度差异；2. 白键与黑键总体找回率的相对位置；3. KeyWise 与两个全局变体在同一分组内的排序

[![原论文 Figure 4：Reference notes found at 50 ms on the PianoVAM test set, by register and key color, with the 9…](https://arxiv.org/html/2611.04476v1/Fig4.svg)](https://arxiv.org/html/2611.04476v1/Fig4.svg)

*论文图 4。原论文 Figure 4:：“Reference notes found at 50 ms on the PianoVAM test set, by register and key color, with the 9 recordings pooled and the mean of three runs shown.”。*

图中纵轴为 50 毫秒下参考音符被找回的比例，横轴按 A0-B1、C2-B3、C4-B5、C6-C8 以及白键黑键分组。可以看到两端音区全局模型的柱子明显矮于 KeyWise，中部差距小，黑白键总体差距小于音区差距。误差条是按录音自助得到的 95% 区间，说明两端结论考虑了录音间变异。

**全局向量变体 × 共享权重的逐键模型：** 全局向量变体把编码器特征汇聚成一个描述整个键盘的向量，再用每键独立的输出权重预测 88 个键；共享权重的逐键模型则让 88 个键复用同一个循环网络和输出头。搭配比较的意义是分离分辨率与权重共享的作用，论文用 Global-88 证明即使保留每键一列特征，只要输出权重不共享，低频使用的两端琴键仍然学不好。

### 哪些条件不在本次验证范围内

论文明确列出 3 个限制。第一，KeyWise 依赖数据集给出的键盘角点，且要求 88 键完整可见，没有评估角点估计误差或键盘被遮挡、只拍局部的情况。第二，跨录制条件需要微调，PianoVAM 到 PianoYT 的零样本已证明直接迁移不可行。第三，编码器之后各键不再交换信息，没有利用相邻键或手的上下文，留给未来结合手部信息和声部归属的工作。

从成本看，参数减少 22 倍不等于计算量同比例减少，因为约每帧 1.87 乘 10 的 9 次方次乘加运算几乎全在编码器。论文报告考虑重叠窗口后每秒视频所需运算为 V2N 的约三分之一，同 GPU 上每秒视频 15 毫秒对 70 毫秒，含解码与校正的完整管线约为 2.3 倍实时。阈值选择也有条件：验证集上 0.5 阈值会使 50 毫秒起始 F1 掉 2.4 到 5.3 点，测试集上影响较小，说明阈值依赖验证分布，不能照搬。

### 复现第一步需要准备什么

复现应从数据与角点开始。PianoVAM 用官方 v1.1 划分并注意有一个训练录音无法解码，PianoYT 需剔除不可用视频并单独划分验证集，测试用 21 个视频，其中一个已下架视频论文用的是早期副本。键盘角点在 PianoVAM 是每录音四点，在 PianoYT 是每视频边界框，校正到 1408 乘 112 条带并重采样到 30 帧每秒是后续对齐的基础。

模型按四块编码器、每键一列、共享双向循环网络和 3 个头实现，训练用 32 帧片段和加权交叉熵，阈值必须在验证集上重新搜索而不能直接用 0.5。评估用 mir_eval 音符指标并同时看 50 和 100 毫秒，因为视频帧长本身接近 50 毫秒容差。论文未公开可直接下载的代码与权重，材料按合理请求向通讯作者索取，因此复现第一步是先拿到划分名单、角点与评分脚本，再实现校正与逐键管线。

### 什么时候值得尝试 KeyWise 思路

当任务满足 3 个条件时值得尝试：键盘几何已知且可校正、关心按键动作而非声音延续、训练样本在 88 个键上分布不均。此时把位置固定为感兴趣区域并共享时序权重，可以用小模型达到大全局模型的起始精度，并在要求释放和力度时更准，同时推理更快。

不值得直接照搬的情况是视角多变、键盘不完整或无验证集可调阈值，此时应先补角点估计与可见性处理，并预留微调预算。还需要补的验证包括更多钢琴、更多演奏者与更低帧率下的时间误差，以及与利用相邻键和手部信息的方法的对比。总体而言，论文支持的是几何先验加权重共享在受控条件下的效率与两端泛化优势，而不是视频已彻底解决转写。

<details>
<summary>📎 论文与评分元数据</summary>

排名：前25% | 文档类型：方法研究 | [arXiv 原文](https://arxiv.org/abs/2611.04476v1)

</details>

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。

- 评分规则：type-aware-v1

- 评分模型：muse-spark-1.3-contributor

- 评分请求协议：openai_responses

---

[← 返回 2026-11-04 语音/音乐/音频论文速递](/audio-paper-digest-blog/posts/2026-11-04/)
