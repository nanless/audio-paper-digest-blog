---
title: "READ: Real-time and Efficient Asynchronous Diffusion for Audio-driven Talking Head Generation"
date: 2026-09-11
draft: false
description: "针对扩散说话头推理慢与长视频接缝断裂问题，READ 用 32×32×8 时空压缩加 SpeechAE 对齐音频与 A2V-DiT 生成，并在 HDTF 上以 4.421 骨干耗时取得 Sync-C 8.658 的竞争精度，代价是需 8 步采样与 Split-CFG 增加约 50% 耗时。"
tags: ["扩散模型", "高效推理", "实时处理", "音视频生成"]
categories: ["aaai-2026 论文"]
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_paper_id: "conference:aaai:2026:conference-paper-id:37940"
paper_digest_source_kind: conference
paper_digest_conference_id: "aaai-2026"
paper_digest_conference_record_url: "https://ojs.aaai.org/index.php/AAAI/article/view/37940"
paper_digest_conference_pdf_url: "https://ojs.aaai.org/index.php/AAAI/article/view/37940/41902"
paper_digest_api_reader_contract: "beginner-researcher-v3"
paper_digest_api_reader_article_sha256: "156ac8bd2a755624b3a3128b8909f8fba8e79cea8ea6fea206c5feae0475a337"
paper_digest_api_reader_plan_sha256: "f7117f6f41afee29475f9a5910264cf778817a49b005fa57c6c4dc1feba803f3"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings-v4"
paper_digest_api_reader_source_bindings_sha256: "f0f3fdc330991ccd403f0d7e9b2e04eb1eb317e8fc42885026ee42adcd885570"
paper_digest_api_reader_source_table_count: 3
paper_digest_api_reader_source_formula_count: 5
paper_digest_api_reader_structured_artifacts_sha256: "29834005c8b8dcdcd0564ee21b98ef473db31e5743151036bfff78107f8ede61"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity-v1"
paper_digest_api_reader_author_identity_sha256: "3df6e0a8365f53e6d83cf21e80c6a094338f1513b70b9a71d3e9f3422f421fbe"
paper_digest_api_reader_author_count: 10
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity-v1"
paper_digest_api_reader_resource_identity_sha256: "76d9ed6afa5c0efc968c0179a07785a6f7dd4402fcd1155e8909a9395b357263"
paper_digest_api_reader_resource_count: 1
paper_digest_api_reader_decision_projection: "api-reader-decision-projection-v2"
paper_digest_scoring_contract: "api-scoring-audit-v2"
paper_digest_taxonomy_contract: "paper-taxonomy-flat-tags-compat-v1"
paper_digest_taxonomy_selection_contract: "paper-taxonomy-selection-v1"
paper_digest_taxonomy_registry_version: "paper-taxonomy-v1"
paper_digest_taxonomy_registry_sha256: "15c82a567ce5a55dc1175684ed08b64c158558639d9c8fb822c9587ec32a8778"
paper_digest_taxonomy_concepts: [{"facet":"method","id":"method.diffusion","label":"扩散模型"},{"facet":"research_focus","id":"research_focus.efficiency","label":"高效推理"},{"facet":"setting","id":"setting.real-time","label":"实时处理"},{"facet":"task","id":"task.av-generation","label":"音视频生成"}]
paper_digest_primary_task: "音视频生成"
paper_digest_primary_method: "扩散模型"
paper_digest_score: 7.0
paper_digest_rank_bucket: "前50%"
paper_digest_document_type: "方法研究"
paper_digest_conference_structure: replayable-pdf-layout-v1
---

# 📄 压缩对齐与异步去噪：READ 如何把扩散说话头做到实时

> 英文题目：*READ: Real-time and Efficient Asynchronous Diffusion for Audio-driven Talking Head Generation*

> 会议身份：`conference:aaai:2026:conference-paper-id:37940`


> ✅ 来源为官方会议 PDF；可重放的表格、公式文本与 Figure 像素已按 PDF 抽取结果绑定，未成功恢复的结构不作推断。

> 会议来源：[官方记录](https://ojs.aaai.org/index.php/AAAI/article/view/37940) · [官方 PDF](https://ojs.aaai.org/index.php/AAAI/article/view/37940/41902)

标签：#扩散模型 #高效推理 #实时处理 #音视频生成

评分：**7.0/10** | 创新 1.5/2 | 技术严谨 1.2/1.5 | 实验充分 1.1/1.5 | 清晰度 0.8/1 | 影响力 1.0/1.5 | 开源 0.0/1.5 | 可复现 0.2/0.5 | 工程/实践 1.2/1.5

排名：前50% | 文档类型：方法研究

## 👥 作者与机构

- Haotian Wang：机构信息未能从会议 PDF 纯文本可靠映射
- Yuzhe Weng：机构信息未能从会议 PDF 纯文本可靠映射
- Jun Du：机构信息未能从会议 PDF 纯文本可靠映射
- Haoran Xu：机构信息未能从会议 PDF 纯文本可靠映射
- Xiaoyan Wu：机构信息未能从会议 PDF 纯文本可靠映射
- Shan He：机构信息未能从会议 PDF 纯文本可靠映射
- Bing Yin：机构信息未能从会议 PDF 纯文本可靠映射
- Cong Liu：机构信息未能从会议 PDF 纯文本可靠映射
- Jianqing Gao：机构信息未能从会议 PDF 纯文本可靠映射
- Qingfeng Liu：机构信息未能从会议 PDF 纯文本可靠映射

## 📌 核心摘要

音频驱动说话头生成需以单张参考图与连续语音为输入，输出口型同步且身份稳定的视频，难点在于扩散主干输入token量大导致推理慢，且长视频分段生成易在拼接处出现跨段断裂。READ先用来自LTX-VIDEO的时间压缩视频自编码器将视频压为每token对应32×32×8像素的低token潜序列，以降低主干计算负担。接着语音自编码器将冻结Whisper-tiny提取的语音特征同步压缩至与视频潜序列相同的时间分辨率，形成帧级对齐的语音潜码并作为条件输入。然后音频到视频扩散Transformer以帧级条件建模该对齐潜表示合成人像，而异步噪声调度器在训练与推理均对运动帧与目标帧施加不同强度噪声，并用上一段尾帧引导下一段生成。与同步加噪加片段直接拼接不同，该异步运动引导在潜空间维持身份与时序一致，无需额外网络即可支撑长时扩展与加速推理。在HDTF基准测试集条件下，READ的同步置信度Sync-C指标为8.658，高于Sonic基线的8.525。该结论适用边界受限于HDTF与MEAD语料覆盖的512×512分辨率近景说话人场景，对大角度转头、遮挡与强情绪外推尚未验证。推理开销方面框架在NVIDIA A100硬件上以8步采样推理，121帧片段主干延迟为4.421s，而训练成本未在证据中量化披露。

## 🔗 开源与复现资源

预印本/扩展版链接未在会议页展示；会议版来源见页首官方记录与 PDF。
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 输入是什么，输出是什么，为什么实时很难？

这篇解读的输入是论文原文与 4 张官方原图像素，目标是让研究生能复述 READ 的做法与复现条件。输出是一套可核对的方法与实验说明，所有数字保留原文写法。任务定义很具体：给定一段语音序列与一张参考人像，生成对应人物说话的视频。

评价不仅看图像像不像、口型准不准，还看推理速度。因为人机交互需要接近 1 比 1 的时间比，慢几十倍就无法部署。论文报告的矛盾是扩散模型带来更生动的说话头，但已有扩散说话头生成 5 秒视频往往需要几十到上 100 秒。

原因按原文归为三点：为保对齐而不用时间压缩的变分自编码器，导致 token 多；去噪扩散概率模型或隐式模型需要很多采样步；长视频用重叠融合或辅助网络保一致，进一步增加耗时。理解这三点才能理解 READ 为何同时做高压缩、少步采样与异步调度。

扩展版本已公开，资源状态显示 available，链接当前可用，地址为（预印本链接未在会议页展示） AAAI 版本对照超参数。通读时应先记住三件套分工：时间 VAE 负责空时高压缩以减 token，SpeechAE 负责同步压缩语音以保对齐。

后文的 A2V-DiT 负责在压缩隐空间按帧生成，异步噪声调度负责训练加噪与推理跨段引导。全文实验围绕这一链条展开论证，先压缩再对齐再异步生成，顺序不能颠倒。

### 同输入同目标的路线有哪些，本文站在哪里？

早期说话头工作先解决口型同步，例如用唇同步专家监督。随后 Audio2Head 与 SadTalker 加入更自然的头部运动，DreamTalk 与 Diffused Heads 增强表现力。这些方法多在 GAN 或小模型下工作，动作幅度有限。

近期路线转向借助预训练图像或视频扩散先验，如 Sonic、EmotiveTalk、Hallo、EchoMimic、FantasyTalking 与 AniPortrait。保真度提升但推理慢，因为主干 token 多且采样步数大。另一条是运动空间扩散，如 Ditto 与 AniTalker，只在运动系数空间扩散以减少主干处理的 token。

运动空间路线速度下降但自然度受限，外观细节容易丢失。加速扩散的通用路线还包括渐进蒸馏与对抗蒸馏等减少步数的方法，以及 LTX-VIDEO 与 Wan 这类用时空压缩 VAE 降低计算的端到端视频生成。但直接把高压缩时空 VAE 搬到说话头会破坏音画对齐。

这是本文要补的关键缺口：压缩后语音与视频不再逐帧对应。

**运动空间扩散 × 端到端视频扩散：** 运动空间扩散负责只在低维关键点或系数空间做扩散以减少 token，端到端视频扩散负责直接在视频隐空间生成像素级外观以保真，二者搭配对照的原因是前者快但自然度与保真受限而后者慢，READ 选择端到端但用高压缩时空 VAE 逼近前者的速度，同时用 SpeechAE 弥补压缩带来的对齐损失。

论文的定位是首个端到端实时扩散变换器说话头框架，既保留端到端的外观保真，又通过压缩与对齐设计逼近运动空间方法的速度。

### 要解决的具体对齐与长视频问题是什么？

第一个问题是压缩与对齐的冲突。时间压缩把连续 8 帧压成一个隐帧，大幅减少 token，但原始逐帧语音特征与压缩后视频隐不再一一对应。若直接把原始语音线性投影注入，模型难以知道哪段语音对应哪个隐帧，口型必然漂移。

第二个问题是长视频一致性。训练时只能处理固定长度窗口，例如 121 帧，推理更长视频必须分段生成。若每段独立采样，交界处身份、姿态与嘴形会跳变。已有重叠融合需要多次前向加权平均，辅助网络需要额外参数，都增加耗时。

第 3 个问题是步数与质量的权衡。同步加噪与同步去噪在少步时难以兼顾外观与口型，需要在训练与推理调度上让模型学会用已生成的干净运动信息引导后续生成。少步时外观先崩，口型随后变差。

本文的 3 个模块分别对应这 3 个问题，学习时应先建立样本级数据流，再看公式如何实现。时间 VAE 管速度，SpeechAE 管对齐，异步调度管长视频。

只有把三者放在同一链条里，才能解释为何缺一不可。

### 沿一个样本走完 READ 的全流程

取一个样本：参考图为同一人的静态肖像，音频为 4.84 秒语音，文本固定为“A person is speaking”。推理时参考图先经时间 VAE 编码器得到参考隐，音频先经冻结的 Whisper-tiny 编码器得到原始语音特征。再经 SpeechAE 编码器投影与下采样得到与视频隐同时长的语音隐码，文本经文本编码器得到全局条件。

三者送入音频到视频扩散变换器，在 8 步异步反向过程中迭代去噪得到视频隐序列，最后经时间 VAE 解码器重建为 512×512 的 121 帧视频。训练时则先用真实视频经 VAE 编码得到原始隐，加上异步噪声得到带噪隐，模型学习预测向量场。

长视频推理时把目标隐分成每段长度为 f 且重叠 1 帧的多个片段，首段自由生成，后续段用前一段最后 1 帧替换本段首帧做运动引导。下面这张总览图把训练与推理、预训练与主训练画在同一版式中，是理解分工的关键。

> **看图路径：** 1. 沿左侧(a) 从参考图、文本与音频输入找到汇入 A2V-DiT 再到 VAE 解码的主路径；2. 观察右上(b) 中 Whisper 冻结而投影与卷积下采样可训练的分工；3. 观察右下(c) 中异步前向的 t1 与 t2 差异及反向中 Clip1 到 Clip2 的虚线引导

[![原论文 Figure 1：The framework of READ. During training, we first pre-train the SpeechAE for speech feature…](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/aaai-2026/1c443afd4958/figure-1.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/aaai-2026/1c443afd4958/figure-1.png)

*论文图 1。原论文 Figure 1：“The framework of READ. During training, we first pre-train the SpeechAE for speech feature temporal compression, shown in (b).”。*

从像素看，左图(a) 上方为训练视频经 VAE 编码再进异步前向，下方推理分支中参考图、文本与音频 3 路汇入中间的异步反向 A2V-DiT，最后经 VAE 解码输出视频。右上(b) 显示 SpeechAE 编码器中原始特征经线性投影与卷积下采样得到语音隐，再经卷积上采样与线性投影重建，顶部虚线为自监督重建损失回传。

右下(c) 上方显示原始片段加不同强度噪声得到带噪片段，下方显示 3 个片段的去噪链与蓝色虚线跨段引导。记住星形为冻结、火焰为可训练，就能复述参数更新范围。推理时文本分支始终提供全局身份约束，语音分支提供逐帧口型约束。

### 压缩与对齐组件如何分工与计算？

时间 VAE 来自 LTX-VIDEO，压缩比为每个 token 对应 32×32×8 像素，大幅减少主干 token 数。设视频序列为 X，编码解码关系由原文给出，先理解符号再看目标。

\[Z(0) = EV(X(0)), ˆX(0) = DV(Z(0))\]

其中 EV 与 DV 为编码器与解码器，Z 为压缩视频隐。白话是把高分辨率长视频压成矮胖的隐张量，生成只在隐空间做。语音侧先用冻结 Whisper 提取特征，再用可训练的编码解码器做同倍率时间压缩。

编码器与解码器由线性维度变换与 1 维因果卷积时序采样构成，输出压缩语音隐码 C 并重建回原始特征。重建质量被用作信息保留的代理，若能重建好则说明隐码保留了关键时序信息。

\[LMSE = ||S −ˆS||2\]

这是均方误差重建损失，迫使重建特征逼近原始特征。为增强帧间区分，论文再加对比损失让同帧重建与原始拉近、异帧推远，最终加权求和作为 SpeechAE 预训练目标。

\[LSpeechAE = αLMSE + βLCON\]

其中 alpha 与 beta 为权重，原文未在正文给出具体数值，这是复现缺项。A2V-DiT 每个块包含自注意力、文本 3 维全注意力与帧级 2 维音频交叉注意力。自注意力建模跨帧依赖，文本分支广播全局状态，音频分支按帧对齐生成。

**时间压缩视频自编码器 × 语音自编码器：** 时间压缩视频自编码器负责把 512×512×121 视频压成极少 token 以降低 DiT 计算量，语音自编码器负责把 Whisper 原始语音特征做同倍率时间压缩以恢复帧对齐，二者搭配的原因是单方面压缩视频会打乱音画对应，组合后 A2V-DiT 才能在压缩隐空间做逐帧交叉注意力而保持口型同步。

**帧级音频交叉注意力 × 文本 3 维全注意力：** 帧级音频交叉注意力负责把当前帧隐状态只与对应时刻语音隐码对齐以保证口型，文本 3 维全注意力负责把“A person is speaking”这类全局描述广播到全部时空位置以稳定身份与场景，二者搭配的原因是语音需严格时序对齐而文本需全局一致，组合后 A2V-DiT 同时获得局部同步与全局稳定。

连续向量场的思想由流匹配给出，模型学习从噪声到数据的向量场。

\[dZ(t) = v(Z(t), t)dt\]

其中 Z(t) 为 t 时刻带噪隐，v 为待学向量场。先建立这种连续视角，才能理解异步调度只是把同步 t 换成按位置不同的 t 向量。

### 异步加噪如何训练，异步引导如何推理？

训练的异步前向先在隐序列前拼接参考隐与运动帧。设参考隐为 zR，后接 f 个视频隐，噪声时刻向量取为首项 0、中间 t1、末段 t2，且 t1 小于 t2 并从移位逻辑正态分布采样。同步流匹配的前向是全局标量 t 的线性插值。

\[Z(t) = (1 −t)Z(0) + tϵ, ϵ ∼N(0, I)\]

异步版本把标量 t 换成广播到隐维度的向量 t，对不同位置加不同强度噪声，参考帧不加噪以提供身份，低噪声首帧提供运动。模型以语音隐 C、参考隐与时刻向量为条件预测向量场，目标为噪声减原始隐。

损失为预测与真值向量场的均方误差，训练时只有 A2V-DiT 与 SpeechAE 可训练部分更新，Whisper 与时间 VAE 按图标冻结。推理的异步反向采用双循环：外层遍历去噪时刻，内层按顺序处理每个片段。首片段用全 Ti 自由生成，后续片段把本段首帧替换为上一段已生成的末帧。

并用 Ti+1 与 Ti 的混合时刻做运动引导生成。引导强度由分类器无关引导控制，联合引导把参考与语音统一加权，分离引导分别加权，默认报告用 8 步采样与 alpha 为 2.0、beta 为 6.0 的分离引导。

**流匹配 × 异步噪声调度器：** 流匹配负责定义从噪声到数据的连续向量场与同步加噪训练目标，异步噪声调度器负责把同一隐序列的不同位置加上不同强度噪声并让低噪声运动帧引导高噪声目标帧，二者搭配的原因是标准流匹配无法显式建模长视频前后依赖，组合后训练与推理都能用运动引导维持跨段一致而不加额外网络。

这种设计让训练时学到的利用干净运动帧的能力在推理时直接可用，不需额外融合网络，因此不增加额外计算代价。复现时需严格实现 1 帧重叠与首帧替换，否则跨段一致性无法复现。

### 数据、划分、指标与公平条件是什么？

实验在 HDTF 与 MEAD 2 个数据集上进行，各取 95% 随机训练、5% 测试且无重叠。2 阶段训练：第一阶段以 1×10 负 4 次方学习率预训练 SpeechAE，第二阶段以 1×10 负 5 次方学习率、批量为 1、分辨率 512×512、长度 121 帧训练音频到视频主干。

推理窗口与训练长度一致，隐空间运动重叠为 1 帧。除非特别说明，结果均为 8 步采样与分离引导。评估在 NVIDIA A100 上进行，耗时只计主干以保证可比。指标方向需记牢：图像级真实感 FID 越低越好，视频级真实感 FVD 越低越好。

唇同步置信 Sync-C 越高越好、距离 Sync-D 越低越好，表情差异 E-FID 越低越好，效率用每段视频主干平均耗时 Runtime 越低越好。基线覆盖端到端扩散的 Sonic、EchoMimic、Hallo、FantasyTalking、AniPortrait，以及运动空间扩散的 AniTalker 与 Ditto。

公平条件是同一设备、同一测试数据、同一长度 121 帧即 4.84 秒。用户研究另请 18 名参与者对 12 组语音图像对的 6 个模型输出在唇同步、平滑、真实感与视频质量四方面打 1 到 5 分。执行顺序上先完成 SpeechAE 自监督预训练以固定语音压缩表示。

再训练主干学习异步向量场，推理时按片段顺序依次做运动引导去噪，这种先压缩对齐再异步生成的顺序是复现时不能颠倒的关键。缺失的权重与采样分布需查扩展版补充。

### 主结果在速度与质量上各赢在哪里？

比较问题是：在相同 4.84 秒生成长度与相同设备下，READ 是否以显著更低骨干耗时取得可比的视觉与同步质量。公平条件是同一设备同一测试集同一长度，指标方向为 Runtime、FID、FVD、Sync-D、E-FID 越低越好，Sync-C 越高越好。下表整理 HDTF 上的关键可运行策略，包含最快基线与强同步基线以避免只挑弱对手。

| 方法 | Runtime(s) | FID | FVD | Sync-C | Sync-D | E-FID |
| --- | --- | --- | --- | --- | --- | --- |
| Hallo | 212.002 | 15.929 | 315.904 | 6.995 | 7.819 | 0.931 |
| Sonic | 83.584 | 16.894 | 245.416 | 8.525 | 6.576 | 0.932 |
| Ours | 4.421 | 15.073 | 235.319 | 8.658 | 6.890 | 0.955 |

表后解释：READ 的骨干耗时为 4.421，比 Sonic 的 83.584 与 Hallo 的 212.002 低一个数量级以上，这是主要收益。质量上 READ 在 HDTF 取得 FID 15.073 与 FVD 235.319 的最优，以及 Sync-C 8.658 的最优，Sync-D 6.890 接近 Sonic 的 6.576 但未胜出，这就是具体代价。在 MEAD 上趋势类似，READ 的 E-FID 在表情丰富数据上占优，支持其表情保真。未胜出项必须指出：Sync-D 并非 2 数据集全最优，用户研究的视频质量也为第二，说明速度优势不等于每项自动指标全胜。

为检验主观感知是否与自动指标一致，下表整理用户研究中可运行模型在 4 个维度的平均打分，分数越高越好，满分为 5 分，参与者为 18 人，样本为 12 组语音图像对。

| 方法 | Lip-Sync | Realness | Smooth | V-Qual |
| --- | --- | --- | --- | --- |
| Hallo | 3.303 | 2.786 | 2.714 | 2.819 |
| Sonic | 4.111 | 3.756 | 3.875 | 3.994 |
| Ours | 4.228 | 3.875 | 3.947 | 3.950 |

表后解释：该表显示 Ours 在 Lip-Sync 取得 4.228、Realness 取得 3.875、Smooth 取得 3.947 均为参评模型中最优，V-Qual 取得 3.950 为第二，仅次于 Sonic 的 3.994，这与前表 Sync-C 最优而部分距离指标未全胜的结论相互印证。结合打分过程，可以确认速度压缩没有以牺牲主观唇同步与平滑为代价，复现对比时应同时报告自动指标与该主观表。个案帧能直观看到保真与伪影差异。

> **看图路径：** 1. 先看首行真值帧与第二行音频波形确定口型变化基准；2. 逐行比较 Ours 与 Sonic、Hallo 在同一时刻的嘴形开合；3. 核对左侧各方法标注的骨干耗时数字随行数放大的趋势

[![原论文 Figure 4：Case study of talking head generation methods.](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/aaai-2026/1c443afd4958/figure-4.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/aaai-2026/1c443afd4958/figure-4.png)

*论文图 4。原论文 Figure 4：“Case study of talking head generation methods.”。*

从像素看，首行为真值帧，第二行为音频波形，Ours 行嘴形开合紧跟真值且背景书架稳定，标注耗时 4.421。AniTalker 行 13.577 但首帧表情夸张且与参考差异大，Sonic 行 83.584 首帧嘴形偏大，EchoMimic 行 124.105 需裁剪且口型滞后，Hallo 行 212.002 末帧出现箭头所指的伪影。这支持定量结论：READ 在保持参考保真与口型跟随的同时耗时最低，但单一样本不能推广到全部口型与光照条件。

### 拿掉预训练与调度器会发生什么，长视频稳吗？

第一个反证是 SpeechAE 的作用。论文在 HDTF 上比较完整预训练、SpeechAE 不预训练直接与主干同训、去掉 SpeechAE 只用线性投影 3 种配置。报告显示去掉预训练 Sync-C 下降 0.693、Sync-D 上升 0.471，完全去掉则同步大幅崩溃，说明时间压缩后若无同步压缩的语音隐，对齐会严重丢失。

这支持预训练的必要性，但原文未给出 alpha 与 beta 的具体值，复现时需在扩展版或代码中补齐。第二个反证是异步调度器的跨段一致性。实验生成两个连续 121 帧片段，每 40 帧抽 1 帧并重点看 121 与 122 交界，辅以帧间差热图。无调度器基线用同步加噪加普通拼接，有调度器用异步加噪加运动引导。

上排无调度器时段内尚可但交界处整脸亮起，下排有调度器时始终只在嘴部微亮。为直观确认该差异，需要对照上下两排的热图强度与人脸轮廓变化。

> **看图路径：** 1. 先确认顶部分段标尺中 Clip1 的 40、80、113 与 Clip2 的 121、160、200 位置；2. 比较上下两排在 121 与 122 交界处人脸轮廓与背景的差异热图强度；3. 观察下排有调度器时热图是否始终只集中在嘴部附近

[![原论文 Figure 2：Ablation results of ANS on HDTF dataset.](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/aaai-2026/1c443afd4958/figure-2.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/aaai-2026/1c443afd4958/figure-2.png)

*论文图 2。原论文 Figure 2：“Ablation results of ANS on HDTF dataset.”。*

从像素看，上排无调度器时 Clip1 内部热图仅嘴部亮，但在 113 到 121 交界处整张脸与肩部大面积亮起，说明段间跳变。下排有调度器时 40 到 200 各帧热图始终只在嘴部微亮，交界处无全脸爆发，证明运动引导维持了段内外一致。顶部标尺明确标出 40、80、113、121、160、200 的抽帧位置，中间闪电符号为分段边界。为检验长时稳定性，论文用同一模型生成不同长度视频并测 FID 与同步指标，下表为 HDTF 上的长度泛化结果。

| Frames | Duration(s) | FID | Sync-C | Sync-D |
| --- | --- | --- | --- | --- |
| 121 | 4.840 | 15.073 | 8.658 | 6.891 |
| 457 | 18.280 | 15.241 | 8.767 | 6.813 |
| 1017 | 40.680 | 15.195 | 8.677 | 6.824 |

表后解释：从 4.840 延长到 40.680，三项指标均无显著退化，FID 在 15.073 到 15.241 之间波动，Sync-C 保持在 8.658 以上，支持调度器在长时生成中的稳定性。但限制是仅报告三项指标，未报告 FVD 与 E-FID 随长度的变化，也未统计多次采样的方差，因此不能断言每段长视频的每处接缝都同样稳定。

### 步数与引导方式的代价边界在哪里？

权衡问题是：把扩散步数从 10 降到 4，以及把分离引导换成联合引导，能省多少时间，又损失多少质量。论文在 HDTF 上对两种引导各测 4 到 10 步，并同时记录主干耗时与含 VAE 的总耗时。总体趋势是步数减少则耗时成比例下降，但质量下降，且低于 5 步时 FID 恶化更陡。

分离引导在唇同步上持续优于联合引导，但耗时多约 50%，这是用时间换口型的明确代价。若部署资源紧张，可考虑联合引导加 6 步，但需接受可感知的口型与清晰度损失。原文在该图未标注误差棒，不能把单次测量的微小差异当作稳定胜负。

下图同时画出 FID、Sync-C 与两类耗时，是选择默认 8 步分离引导的依据。

> **看图路径：** 1. 先看横轴 Steps 从 4 到 10 与左侧 FID 纵轴的蓝色折线走向；2. 再看右侧 Sync-C 红色折线中 Split 与 Joint 两条线的分离位置；3. 比较每组柱状的骨干耗时与总耗时随步数增高的幅度

[![原论文 Figure 3：Trade-off between performance and runtime under different inference steps on HDTF dataset.](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/aaai-2026/1c443afd4958/figure-3.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/aaai-2026/1c443afd4958/figure-3.png)

*论文图 3。原论文 Figure 3：“Trade-off between performance and runtime under different inference steps on HDTF dataset.”。*

从像素看，横轴为 Steps，左侧蓝色纵轴为 FID，右侧红色纵轴为 Sync-C，最右侧蓝色纵轴为 Runtime。蓝色 FID 折线在 4 步时高达 20 以上，到 6 步后降至 16 附近并趋平，说明少步对外观伤害最大。红色 Sync-C 中实线分离引导始终高于虚线联合引导，尤其在 4 步时差距最大，而对应深色总耗时柱在 10 步时最高。

复现启示是：若追求实时应保留 8 步分离引导的默认配置，若部署在更弱设备可试 6 步联合引导，但需接受口型与清晰度的可感知下降。

**联合分类器无关引导 × 分离分类器无关引导：** 联合分类器无关引导负责把参考图与语音作为统一条件做 1 次加权以节省前向次数，分离分类器无关引导负责对参考图与语音分别加权以独立控制身份与口型强度，二者搭配比较的原因是统一引导更快但口型控制弱，组合对照后论文显示分离引导口型更好但耗时增加约 50%，形成可按需选择的速度质量权衡。

此外，时间 VAE 的高压缩本身会损失高频细节，长视频虽指标稳定，但快速头部大角度转动与遮挡下的保真仍是未充分评测的边界。总体趋势不等于每组每步都成立，需按场景实测。

### 要复现应先做什么，还缺哪些信息？

先按学习依赖复现：准备 HDTF 与 MEAD 并按 95 比 5 划分，冻结 Whisper-tiny，用均方加对比损失预训练 SpeechAE 至能重建原始特征。再冻结或按代码设定固定其参数，训练 A2V-DiT 的异步前向，推理时实现分段重叠 1 帧与跨段首帧替换的异步反向。

关键超参数已报告：主干学习率 1×10 负 5 次方、批量 1、分辨率 512×512、长度 121 帧、默认 8 步、分离引导 alpha 2.0 与 beta 6.0、推理窗口与训练一致。先验证 SpeechAE 重建是否收敛，再验证口型，最后再测长视频接缝。

缺项需补：SpeechAE 损失权重 alpha 与 beta、移位逻辑正态的均值方差、文本编码器选型与是否冻结、VAE 是否微调、A100 的具体数量与训练时长、随机种子与统计方法。这些缺项直接影响对齐精度与收敛速度。

代码与权重方面，正文仅给出扩展版 arXiv 链接，资源状态为 available 可访问，但未在所给证据中明确开源代码与权重下载地址。不能写代码已公开，只能写本次未能确认代码可达，需以扩展版声明为准。

评估时必须固定 121 帧与同一设备再测 Runtime，否则耗时不可比。同时报告主干耗时与含 VAE 总耗时，避免只报单项造成误导。

### 何时值得尝试 READ，何时应谨慎？

当任务是单参考图加语音的端到端说话头，且需要接近 1 比 1 的实时交互，同时希望保留扩散的外观保真，READ 值得尝试。其高压缩加同步语音压缩的思路直接对症，异步引导又避免了额外融合网络。

复现时应先验证 SpeechAE 重建是否收敛，再验证 8 步分离引导的口型，最后再测长视频接缝热图，避免跳过预训练直接端到端。当场景涉及强表情 MEAD 类数据，READ 的表情优势可能更明显，但需同时看 E-FID 与主观评分。

当头部大角度运动、遮挡或极低步数部署时，应谨慎并补充主观评测，因为自动指标的稳定不等于每帧都稳定。低于 5 步时 FID 会陡增，联合引导虽快但口型会下降。

未测量误判率与端到端延迟分布时，不应承诺延迟必然改善，需分别报告主干耗时、VAE 耗时与帧率。总体上，论文报告的是在给定划分与设备上的竞争精度与显著速度优势。

有限解释是异步引导带来跨段一致，待验证的是更长时长、更多身份与更弱算力下的泛化。研究生可把本文当作压缩对齐与异步调度的可复述范例，再向外扩展到其他实时视频生成任务。

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。
- 评分规则：type-aware-v1
- 评分模型：muse-spark-1.3-contributor
- 评分请求协议：openai_responses

---

[← 返回 aaai-2026 论文汇总](/posts/conference-aaai-2026/)
