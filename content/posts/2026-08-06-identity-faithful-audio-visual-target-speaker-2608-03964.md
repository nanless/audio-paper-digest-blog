---
title: "Identity-Faithful Audio-Visual Target Speaker Extraction with QIANGDA and VOXBLINK2-AVSE"
date: 2026-08-06
draft: false
tags: [音视频语音分离, 多模态模型, 基准测试, 数据集, 数据清洗]
categories: [论文速递]
description: "音视频语音分离 | 6.8/10"
hiddenInHomeList: true
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_arxiv_id: "2608.03964"
---

# 📄 Identity-Faithful Audio-Visual Target Speaker Extraction with QIANGDA and VOXBLINK2-AVSE

标签：#音视频语音分离 #多模态模型 #基准测试 #数据集 #数据清洗

**6.8/10** | 创新 1.3/2 | 严谨 1.2/1.5 | 实验 0.8/1.5 | 清晰 0.8/1 | 影响 1/1.5 | 开源 0.5/1.5 | 复现 0.2/0.5 | 工程 1/1.5

✅ **6.8/10** | 前50% | 文档类型：数据集与基准 | 评分置信度：中 | #音视频语音分离 | #多模态模型 | #基准测试 #数据集 | [arxiv](https://arxiv.org/abs/2608.03964)


### 👥 作者与机构

Peijun Yang（武汉大学网络空间安全学院 / 武汉大学人工智能学院），Zhan Jin（武汉大学计算机学院），Juan Liu（武汉大学计算机学院 / 武汉大学人工智能学院，共同通讯作者），Ming Li（武汉大学人工智能学院 / 香港中文大学（深圳）人工智能学院，共同通讯作者）。通讯邮箱：liujuan@whu.edu.cn, ming.li.cuhksz@gmail.com。

### 💡 毒舌点评

"QiangDa 把 AV-TSE 评测从'独立录音合成的干净混合'拉回到'同一物理场景共同录制的双人重叠'，并要求同一段混合分别在 A/B 视觉提示下输出两个不同身份，OSD-first 严格判定也确实堵住了 visual bypass——这个评测思路比只报 SI-SNR 聪明得多，发布 VoxBlink2-AVSE 也有实际价值。但作为 benchmark 论文，实验通篇只有自家 8 个检查点的内部互比，VisualVoice、USEV、AV-GridNet 这些已有 AV-TSE 方法一个直接对比都没有，读者无法判断 QiangDa 到底比旧基准难在哪、新方法比旧方法强在哪；最强的无 speaker-loss 检查点启动 CLI 未完整保存，等于资源论文里最亮的数字作者自己都复现不出来。基准的'锚'没打好，严谨性和可用性都要打折扣。"

### 📌 核心摘要

本文提出 QiangDa 真实场景音视频目标说话人提取（AV-TSE）基准：77 个场景、14 对说话人、7,598 个片段共 11.84 小时，其中 6,038 个可评估双人混合片段；每个混合片段分别以 A/B 两人的嘴部 ROI 为视觉提示查询一次，形成 12,076 个目标说话人评测行。与 audio-only 的 REAL-T 类似，QiangDa 针对合成混合与真实共同录制混合之间的 gap，并要求同一段重叠语音在两个视觉提示下输出两个不同身份，从而直接暴露 visual bypass 失败。作者另从 VoxBlink2 整理出 VoxBlink2-AVSE 训练语料，包含 250,828 对同步音频与嘴部 ROI、28,421 个身份、766.17 小时语音，且训练/开发集身份不相交。方法采用冻结的 M2S-AVSR 所用 AV-HuBERT 视频分支，配合输入级时频融合、层间 FiLM 调制、TF-GridNet 分离器与 speaker-margin 损失；评测使用 Qwen3-ASR-1.7B CER、WeSpeaker ResNet34 说话人相似度及 OSD-first 严格判定。最佳已归档检查点在完整 manifest 上取得 CER 0.2261、严格正确率 82.22%、双输出严格成功率 69.53%。

### 🔗 开源详情

- 数据集：论文明确将 QiangDa 和 VoxBlink2-AVSE 作为核心发布资产，但本摘要段的证据中未披露具体下载 URL 或 HuggingFace 链接。
- 评测工具：公开 WavLM OSD 模型 Den4ikAI/speech_overlap_detection 被明确使用；Qwen3-ASR-1.7B 和 WeSpeaker ResNet34 也是公开模型。
- 代码：论文未在给定证据中说明是否发布训练代码、推理代码或完整 manifest 生成脚本，因此状态为未披露。
- 模型权重：论文提到“已归档的无说话人损失检查点”，但未给出下载地址或 HuggingFace 模型标识，因此状态为未披露。
- 注意：Den4ikAI/speech_overlap_detection 是论文评测流程中直接引用的公开第三方模型，属于开源生态组成部分，而非作者发布的代码或模型。

### 🏗️ 方法概述和架构

论文提出的整体框架是一个“真实场景评测基准 + 大规模训练语料 + 视觉条件化分离器”的完整系统。核心任务是：给定双人混合语音 \(x(t)=s_A(t)+s_B(t)+n(t)\)（其中 \(n(t)\) 包含房间混响与背景噪声）以及目标说话人 \(q \in \{A,B\}\) 的嘴部感兴趣区域（ROI）视频流 \(v_q\)，学习一个映射 \(f_\theta\)，使得 \(f_\theta(x,v_A)\approx s_A\) 且 \(f_\theta(x,v_B)\approx s_B\)。这个成对约束直接排除了“视觉绕过”的退化行为——即模型忽略视觉线索、对两个提示都输出声学上占优势的同一说话人的情况。整个框架的输入为16 kHz单声道混合音频和 \(T \times 96 \times 96\) 的灰度嘴部ROI图像序列，输出为估计的目标说话人波形 \(\hat{s}_q\)。系统由冻结的视觉特征提取器、输入级时频融合模块、层间特征调制模块、单输出TF-GridNet分离器以及联合训练损失组成。

下图给出了所提 AV-HuBERT 条件化 TF-GridNet 的整体流程，可帮助理解混合音频与目标嘴部 ROI 是如何在分离器中交互的。

![Figure 2: Overview of the proposed AV-HuBERT-conditioned TF-GridNet. The frozen visual branch conditions the separator through input-level time–frequency…](https://arxiv.org/html/2608.03964v1/pic2.png)

该图显示，冻结的 AVSR 视觉分支从目标嘴部 ROI 提取特征后，同时以时频拼接形式进入输入端，并以 FiLM 形式逐块调制各 GridBlock；最后经反卷积与 iSTFT 输出目标波形。


**视觉特征提取。** 对于每个目标说话人的嘴部ROI，系统仅运行M2S-AVSR中所用AV-HuBERT编码器的视频分支，而将音频输入置空。具体预处理包括：修复零像素比例超过0.5的损坏帧（用最近的有效帧替换）、将ROI中心裁剪为 \(88\times88\)、缩放到 \([0,1]\) 区间并用均值0.421和标准差0.165进行归一化。大尺度AV-HuBERT骨干网络输出1024维视觉序列，随后通过一个可学习的线性层投影到1280维，再乘以一个可学习的标量进行缩放。整个骨干网络和投影层在分离器训练期间保持冻结，预计算得到的浮点张量形状为 \(T_v \times 1280\)，视频帧率为25 Hz。这一设计使得模型可以使用大规模无标签音视频数据预训练的鲁棒视觉表征，而不需要额外微调，避免了训练数据不足时视觉特征坍塌的风险。

**输入级时频融合。** 混合音频经过128点短时傅里叶变换（STFT），跳长为64，得到65个复数频点。其实部和虚部被保留用于后续拼接。与此同时，1280维的视觉序列通过线性插值被上采样到与STFT帧率对齐。插值后的视觉序列输入一个“视觉到频率”网络：首先用 \(1\times1\) 卷积将通道数投影到512维，经过GELU激活后，送入一个包含核大小为3的深度可分离卷积的残差时序块，最后由一个 \(1\times1\) 卷积将特征映射到65个频率箱，得到形状为 \(B\times1\times T\times F\) 的视觉时频图。该视觉时频图与混合谱的实部、虚部在通道维拼接，随后进入二维输入卷积。这个输入级融合使分离器在第一个处理阶段就能看到目标说话人的唇动时频模式，为后续的谱分离提供初步的目标引导。

**TF-GridNet分离器。** 分离器是一个单输出的TF-GridNet，默认配置为6个块、128个通道。每个块内部依次执行帧内谱建模（BLSTM）、子带时序建模（BLSTM）和四头全带宽自注意力。帧内BLSTM在给定时刻跨频率建模谱模式，子带BLSTM沿时间方向建模每个子带的动态变化，而全带宽自注意力则让模型捕捉跨频率、跨时间的全局依赖。整个堆栈输入是拼接后的多通道时频表示，输出为目标语音的复数频谱估计。最后通过反卷积和逆STFT将估计的复数频谱转换为目标波形。

**层间视觉调制（FiLM）。** 为了防止视觉信息只在输入端注入一次后被后续层逐渐忽略，论文在每个TF-GridNet块之后应用特征级线性调制（FiLM）。具体地，对于第 \(\ell\) 个块，1280维的视觉序列（仍在视频帧率上）被送入两个 \(1\times1\) 卷积，分别经过GELU和tanh激活，生成通道维的缩放参数 \(\gamma_\ell\) 和偏置参数 \(\beta_\ell\)。调制过程为：
\[
H_\ell \leftarrow H_\ell \odot (1+\alpha_\ell \gamma_\ell) + \alpha_\ell \beta_\ell,
\]
其中 \(\alpha_\ell\) 是逐层可学习的标量，初始化为0。这种残差式FiLM使得网络在训练初期等同于无视觉调制，从而保持训练的稳定性，同时逐渐学会在每个块中根据视觉线索调整特征表示。该设计确保了目标身份信息贯穿整个分离深度，而不是一次性输入后就被后续处理淹没。

**训练目标与数据。** 训练样本由VoxBlink2-AVSE语料库在线采样生成：随机抽取一条目标语句 \(s\) 和一条不相交说话人的干扰语句 \(u\)，混合成3秒长的输入。训练时仅优化以目标视觉特征 \(v_s\) 为条件所对应的输出，直接监督 \(f_\theta(x,v_s)=s\)。损失函数由两项组成：分离损失采用尺度不变信噪比（SI-SNR）的负值，辅助损失为说话人间隔损失（speaker-margin loss）。后者使用冻结的192维ECAPA-TDNN说话人编码器 \(\phi\) 提取输出 \(\hat{s}\)、目标 \(s\) 和干扰 \(u\) 的嵌入 \(\hat{e}, e_s, e_u\)，计算：
\[
\mathcal{L}_{\mathrm{spk}} = \max(0, m + \cos(\hat{e}, e_u) - \cos(\hat{e}, e_s)),
\]
其中 \(m=0.2\)，总损失为 \(\mathcal{L} = \lambda_{\mathrm{sep}}[-\mathrm{SI\text{-}SNR}(\hat{s},s)] + \lambda_{\mathrm{spk}}\mathcal{L}_{\mathrm{spk}}\)，权重 \(\lambda_{\mathrm{sep}}=1\)，\(\lambda_{\mathrm{spk}}=0.1\)。该间隔损失迫使分离后的波形在说话人嵌入空间中更接近目标而非干扰，从而强化身份保真性。VoxBlink2-AVSE语料库包含250,828对同步音频与嘴部ROI，覆盖28,421个身份，共766.17小时语音，且训练集与开发集身份不相交，保证了训练时不会出现与评估目标相同的说话人。

**评估协议与指标。** 在真实场景评测集QiangDa上，每个混合片段分别用A和B的视觉特征查询一次，共得到12,076个目标输出。由于真实混合没有干净的孤立源可以计算SI-SNR，评测改用内容与身份两类指标：用Qwen3-ASR-1.7B计算CER衡量内容保真度；用独立的WeSpeaker ResNet34（在VoxCeleb上训练，与训练损失所用编码器架构、训练数据均不同）计算输出与目标/干扰的说话人相似度及二者的间隔。此外，使用WavLM进行重叠语音检测（OSD），将输出判定为“剩余重叠”、“严格正确”和“错误说话人”三类互斥结果。这种联合评估体系能够分别衡量视觉跟随能力、重叠抑制程度和语音内容保留情况，弥补了单纯相似度比较无法区分“单说话人干净输出”与“仍含重叠”的缺陷。

综上所述，该架构通过输入级与层间双重视觉注入、强视觉表征预训练、以及身份间隔损失，使分离器在保持高语音质量的同时严格遵守视频所指示的目标身份，是面向真实场景音视频目标说话人提取的综合性解决方案。

### 💡 核心创新点

1. **QiangDa 真实场景基准**：audio-only 的 REAL-T 已指出合成混合与真实场景之间的 gap，QiangDa 将这一思路引入 AV-TSE，使用共同录制的真实双人重叠语音，并提供同步多视角视频与场景内 solo 参考；同一混合分别用 A/B 两个视觉提示查询，形成配对身份测试，直接防范 visual bypass。
2. **VoxBlink2-AVSE 语料**：从 VoxBlink2 中整理出 250,828 对同步 16-kHz 音频与 \(96\times96\) 嘴部 ROI，覆盖 28,421 个身份、766.17 小时语音；训练/开发集身份不相交，避免开发集受益于训练中见过的说话人。
3. **AV-HuBERT 条件化 TF-GridNet + 分层 FiLM**：冻结的 1,280 维 AV-HuBERT 视觉特征在输入级与混合谱拼接，并在每个 GridNet 块后通过残差 FiLM 逐层注入，使视觉目标信息贯穿整个分离器。
4. **OSD-first 严格评测协议**：先以 WavLM OSD 判断输出是否仍含重叠，再对单说话人输出判断身份是否正确；Residual overlap、Strict correct、Wrong speaker 三类互斥，弥补了单纯 speaker margin 无法区分“干净但错误身份”与“仍含重叠”的缺陷。

### 📊 实验结果

论文在 QiangDa 全部 6,038 个混合片段、12,076 个目标说话人输出上报告了内容（CER）、身份（WeSpeaker ResNet34 相似度与 speaker margin）以及 OSD-first 严格评测结果。以下表 3 对应原文第 4.4 节的语料对比；表 4 和表 5 对应原文第 6.5 节的消融实验。

**表 3（原文 Table 3）：常用音视频语料对比**

| Corpus | Scale | Speakers | Text sup. | Audio-visual unit | Original role |
|---|---|---|---|---|---|
| LRS3 | 438 h / ~152k utt. | >5k | Yes | Face tracks with word boundaries | AVSR and lip reading |
| AVSpeech | 4,700 h | ~150k est. | No | Single-visible-speaker web clips | Mixture synthesis and separation |
| VoxBlink2 | 16,672 h / 9.90M utt. | 111,284 | No | In-the-wild face–voice clips | Speaker recognition |
| VoxBlink2-AVSE | 766.17 h / 250,828 pairs | 28,421 | No | 16-kHz audio + T×96×96 mouth ROI | AV-TSE/AVSE training |

**表 4（原文 Table 4）：全部 12,076 个目标说话人输出上的内容与身份指标。** 目标/干扰相似度分别比较输出与对应 solo 阶段参考的 WeSpeaker ResNet34 embedding 余弦相似度，差值为 speaker margin。AVSR 表示冻结的 1,280 维 AV-HuBERT 视觉特征，VB2 表示 VoxBlink2。所有配置均使用输入端视觉融合；FiLM 表示是否额外启用层式调制；HUGE 将 embedding 维度从 128 增至 192，LSTM hidden size 从 240 增至 320。

| Visual | Train | FiLM | Size | Spk. loss | Blocks | CER ↓ | Target sim. ↑ | Interferer sim. ↓ | Spk. margin ↑ |
|---|---|---|---|---|---|---|---|---|---|
| AVSR | VB2 | Yes | Standard | Margin | 6 | 0.2793 | 0.6233 | 0.3297 | 0.2936 |
| AVSR | LRS3 | Yes | Standard | Margin | 6 | 0.7456 | 0.4337 | 0.3251 | 0.1086 |
| AVSR | LRS3 | No | Standard | Margin | 6 | 0.7965 | 0.3904 | 0.2933 | 0.0971 |
| ResNet | VB2 | No | Standard | Margin | 6 | 0.7206 | 0.4928 | 0.4928 | 0.0000 |
| AVSR | VB2 | Yes | Standard | Margin | 8 | 0.2892 | 0.6165 | 0.3191 | 0.2974 |
| AVSR | VB2 | Yes | HUGE | Margin | 8 | 0.2812 | 0.6365 | 0.3447 | 0.2918 |
| AVSR | VB2 | Yes | Standard | None† | 6 | 0.2261 | 0.6425 | 0.3114 | 0.3311 |
| AVSR | VB2 | No | Standard | None | 6 | 0.2627 | 0.5838 | 0.2874 | 0.2964 |

注：表中 `None†` 的 † 为原文表格自带标记，对应已归档的无说话人损失检查点。

**表 5（原文 Table 5）：同一完整测试集上的 OSD-first 严格评测；所有数值均为百分比。** “OSD-single ID” 对判定为单说话人的输出计算身份准确率；“both strict” 要求同一混合片段中两个视觉提示的输出均满足单说话人且身份正确。Residual overlap、Strict correct、Wrong speaker 三类互斥，合计为 100%。缩写含义与表 4 相同。

| Visual | Train | FiLM | Size | Spk. loss | Blocks | Residual overlap ↓ | Strict correct ↑ | Wrong speaker ↓ | OSD-single ID ↑ | Both strict ↑ |
|---|---|---|---|---|---|---|---|---|---|---|
| AVSR | VB2 | Yes | Standard | Margin | 6 | 19.39 | 74.33 | 6.28 | 92.21 | 58.51 |
| AVSR | LRS3 | Yes | Standard | Margin | 6 | 9.18 | 59.01 | 31.82 | 64.97 | 30.74 |
| AVSR | LRS3 | No | Standard | Margin | 6 | 7.97 | 58.36 | 33.68 | 63.41 | 28.77 |
| ResNet | VB2 | No | Standard | Margin | 6 | 84.28 | 7.86 | 7.86 | 50.00 | 0.00 |
| AVSR | VB2 | Yes | Standard | Margin | 8 | 17.57 | 75.93 | 6.50 | 92.11 | 59.89 |
| AVSR | VB2 | Yes | HUGE | Margin | 8 | 17.60 | 75.38 | 7.02 | 91.48 | 60.40 |
| AVSR | VB2 | Yes | Standard | None† | 6 | 12.45 | 82.22 | 5.33 | 93.91 | 69.53 |
| AVSR | VB2 | No | Standard | None | 6 | 63.85 | 33.50 | 2.64 | 92.69 | 12.36 |

### 关键结论
- ResNet 视觉特征且无 FiLM 的配置产生 0.0000 speaker margin 和 84.28% residual overlap，说明仅看“输出更接近哪个参考”的强制二选一会掩盖始终输出同一优势说话人的 visual bypass 失败。
- 在受控 LRS3 对比中，FiLM 将 CER 从 0.7965 降至 0.7456，但严格正确率仅从 58.36% 升至 59.01%。在同样的六块 AVSR/FiLM 结构上，改用 VoxBlink2 训练后 CER 降至 0.2793，wrong speaker 降至 6.28%，strict correctness 升至 74.33%。因此匹配的训练数据在该组中比 FiLM 开关贡献更大；但论文也指出身份多样性与录制条件仍混杂，不能视为干净归因。
- 将 GridNet 从 6 blocks 增至 8 blocks 或使用 HUGE 尺寸，strict correctness 分别达到 75.93% 和 75.38%，但没有改善 CER。
- 已归档的无说话人损失检查点整体最强：CER 为 0.2261，strict correctness 为 82.22%，both-output success 为 69.53%；但原文强调其启动命令行未完全保留，且所有行均为单检查点，不能据此直接归因于说话人损失。
- 输入级融合 + FiLM 的完整配置 residual overlap 为 12.45%，而仅输入级融合、无 FiLM 的配置为 63.85%；层式 FiLM 与更强的残留重叠抑制相关，但这两个检查点在训练配置上并不构成严格受控消融。

### 🔬 细节详述

给定重叠录音 \(x(t)=s_A(t)+s_B(t)+n(t)\)，其中 \(n\) 包含房间声学与背景噪声。给定目标 \(q\in\{A,B\}\) 的视觉流 \(v_q\)，提取器预测 \(\hat{s}_q=f_\theta(x,v_q)\)。期望的配对行为是 \(f_\theta(x,v_A)\approx s_A\) 且 \(f_\theta(x,v_B)\approx s_B\)，这直接排除了两个提示都返回同一优势说话人的 visual bypass。

每个场景录制两位静止参与者在同一环境中的交互。Stage I 仅 A 说话，Stage II 仅 B 说话，Stage III 为同时朗读；前两阶段提供场景内语音参考，覆盖人声、人脸、光照、相机位置和声学条件。Stage III 中一名参与者连续朗读，另一人自行选择开始时机，产生持续但自然定时的重叠。录制条件在场景内固定。语料仅包含朗读式普通话语音，排除非语言发声。头戴麦克风与近场麦克风以 48 kHz 录音，相机同步麦克风以 16 kHz 录音。

录制几何使用 0.5 m、1.5 m、3 m 三种距离，侧视角为 \(30^\circ\)、\(45^\circ\)、\(60^\circ\)。每个场景有一台中央相机和两台对称放置在参与者中点两侧的相机；角度元数据描述的是侧相机相对参与者中点的位置。相机保持在接近眼平高度，并保持两人嘴部可见。黄色虚线框标记用于后续人脸跟踪和嘴部 ROI 提取的两个说话人区域。

下图展示了 QiangDa 的录制几何与一幅代表性的正面视角示例帧，可直观对应录制协议中的距离与角度设置。

![Figure 1: QiangDa recording setup and a representative frontal-view frame. Panel (a) shows the camera geometry and microphone arrangement; panel (b) shows a 0.5-m example with the two speaker regions marked by dashed boxes.](https://arxiv.org/html/2608.03964v1/pic1.png)

图中左侧示意三台相机与近场麦克风的布置，覆盖 0.5 m、1.5 m、3 m 三种距离以及 30°、45°、60° 三种侧视角；右侧 0.5 m 示例帧中的黄色虚线框即为后续用于提取嘴部 ROI 的两个说话人区域。


### 已审计语料统计
完整处理后发布包含 77 个场景目录、14 个唯一说话人对。7,598 个单声道 16-kHz 片段总计 11.84 小时；其中 6,042 个为 Stage III 双说话人混合，1,556 个为 Stage I/II 的 solo 语音。\(30^\circ\)、\(45^\circ\)、\(60^\circ\) 设置分别含 30、23、24 个场景。完整扫描发现 6,042 个同时具有 WAV 文件和双说话人转录的混合片段，过滤后余下 6,038 个可评估混合，覆盖全部 77 个场景。每个可用混合在 manifest 中出现两次，每次对应一个视觉目标，因此得到 12,076 个目标说话人评测行，而非 12,076 个独立语句。

按标称距离统计：0.5 m 含 22 个场景、1,987 个片段、3.22 小时；1.5 m 含 40 个场景、4,225 个片段、6.36 小时；3 m 含 15 个场景、1,386 个片段、2.25 小时；总计 77 个场景、7,598 个片段、11.84 小时。

### 跨视频身份与说话人对齐
RetinaFace 与 Face Alignment Network 检测并稳定两张人脸，随后用 landmarks 48–67 定义灰度 \(96\times96\) 嘴部 ROI。由于帧级局部轨迹可能交换身份，系统将 FaceNet 风格 embedding 聚类为两个场景级原型，并使用 Viterbi 解码得到时间上一致的 keep-or-swap 序列。TalkNet 在 1,556 个 solo 片段上的活动分数把两个稳定视觉身份与转录标签 s1/s2 对齐；不确定场景人工复核。

身份对齐处理了 7,594 个可解码视频和 1,064,818 帧，纠正了 52 个视频中的身份交换（15,594 帧被重新分配，占 1.46%），并修复了约 32,831 个重复检测或碰撞帧。Viterbi 目标包含对身份切换的时间一致惩罚 0.35；两帧 embedding 余弦相似度高于 0.92 时视为重复检测或轨迹碰撞。

### VoxBlink2-AVSE 语料整理
VoxBlink2-AVSE 从 VoxBlink2 中整理而来，保留通过音视频有效性与感知质量标准筛选的样本，而非仅依赖 DNSMOS。保留语料的平均 DNSMOS OVRL 为 3.38，说明移除了退化尾部但没有采用极端高 MOS 标准。对比源语料，身份数从 111,284 降至 28,421，片段/配对从 9,904,382 降至 250,828，时长从 16,672 小时降至 766.17 小时；平均片段时长从 6.06 秒升至 10.99 秒，平均每身份片段数从 89.00 降至 8.83。

训练分区含 239,680 对、26,927 个身份；开发分区含 11,148 对、1,494 个不同身份。两个身份集合不相交，防止开发分数受益于训练中见过的说话人。由于主要使用 QiangDa 做测试，VoxBlink2-AVSE 不设测试分区。manifest 提供统一的音频/ROI 路径和稳定身份键，AVSE loader 可直接采样目标与干扰说话人并保持身份不相交评估。

### 模型细节
视觉特征来自冻结的 AV-HuBERT 编码器视频分支。零像素比例超过 0.5 的损坏帧用最近有效帧修复；\(96\times96\) ROI 中心裁剪为 \(88\times88\)，缩放到 \([0,1]\)，并用均值 0.421、标准差 0.165 归一化。AV-HuBERT 的音频输入置空，大尺度骨干输出 1,024 维序列，经可学习线性层投影到 1,280 维并由可学习标量缩放。骨干与投影层在分离器训练期间冻结，预计算张量形状为 \(T_v\times1280\)，视频帧率 25 Hz。

分离器使用单输出 TF-GridNet。128 点 STFT、hop 64 产生 65 个复数频点。1,280 维视觉序列先线性插值到 STFT 帧率，经 visual-to-frequency 网络映射为 \(B\times1\times T\times F\) 的视觉时频图：\(1\times1\) 卷积投影到 512 维、GELU、kernel-3 深度可分离卷积残差时序块、再 \(1\times1\) 卷积到 65 个频点。该视觉时频图与混合谱实部、虚部在通道维拼接。与此同时，重采样后的视觉序列直接送入各层 FiLM 生成器，不会被频域图替换。每个 GridNet 块依次执行帧内谱 BLSTM、子带时序 BLSTM、四头全带宽自注意力。FiLM 更新为 \(H_\ell\leftarrow H_\ell\odot(1+\alpha_\ell\gamma_\ell)+\alpha_\ell\beta_\ell\)，其中 \(\alpha_\ell\) 初始化为 0。

训练样本在线采样自 VoxBlink2-AVSE，取目标语句 \(s\) 与独立采样的干扰语句 \(u\) 混合为 3 秒输入。训练时只对指定目标视觉特征 \(v_s\) 对应的输出计算目标函数，即监督 \(f_\theta(x,v_s)=s\)。speaker-margin 损失使用冻结的 192 维 ECAPA-TDNN 编码器，\(\mathcal{L}_{\mathrm{spk}}=\max(0,0.2+\cos(\hat{e},e_u)-\cos(\hat{e},e_s))\)；总损失为 \(\mathcal{L}=\lambda_{\mathrm{sep}}[-\mathrm{SI\text{-}SNR}(\hat{s},s)]+\lambda_{\mathrm{spk}}\mathcal{L}_{\mathrm{spk}}\)，\(\lambda_{\mathrm{sep}}=1\)、\(\lambda_{\mathrm{spk}}=0.1\)。

### 评测协议细节
每个选中重叠片段用同一混合评估两次，分别使用 A 的视觉特征和 B 的视觉特征。全部 8 个检查点都产生全部 12,076 个输出，没有省略任何行。推理为整句非因果，使用固定对齐，无测试时排列。

说话人相似度使用在 VoxCeleb 上训练的官方 WeSpeaker ResNet34 ONNX 模型，与训练损失使用的 SpeakerLab ECAPA-TDNN/CNCeleb 模型在架构、训练数据与实现上均独立。对每个场景和说话人，嵌入至多 5 个 solo 片段，对其 L2 归一化 embedding 取平均后再归一化。目标相似度与干扰相似度分别比较输出与对应 solo 参考均值的余弦相似度，二者之差为 speaker margin。论文明确指出，正的逐输出 margin 只能说明估计更接近被提示目标，不能证明输出只包含一个说话人，因此需要单独的 OSD 来评估残留重叠。

CER 使用 Qwen3-ASR-1.7B 中文模式转录每个分离输出。打分前去除中英文标点、折叠连续空白，且空白不计入字符 token。CER 为微平均 Levenshtein 距离除以参考字符数。论文同时报告说话人相关指标与 CER，以区分“说错人但内容可懂”和“保留目标身份但内容失真”两种互补失败模式。

OSD-first 评测中，由于真实重叠录音没有同步的孤立物理源，目标 SI-SDR 未定义。每个完整估计先被归一化到 RMS 0.05，再使用公开的 WavLM OSD 模型 Den4ikAI/speech_overlap_detection 以 2.0 秒窗口、0.5 秒 hop 处理；丢弃低能量窗口后对重叠后验取平均。均值达到至少 0.35 时标为 residual overlap；低于阈值时用 WeSpeaker margin 判断身份：margin 为正为 strict correct，非正为 wrong speaker。三类互斥且和为 100%。另报告 OSD-single 输出上的身份准确率和同一混合两个视觉提示均严格正确的比例。排序在 0.25 到 0.45 的平均阈值范围内大体稳定，但绝对比率依赖阈值；OSD 错误、分离伪影和短暂残留干扰会影响该代理指标，因此与 CER 和 speaker margin 联合报告而非视为 ground-truth 分离成功。

### 消融与诊断
在受控 LRS3 对比中，FiLM 将 CER 从 0.7965 降至 0.7456，但 strict correctness 仅从 58.36% 升至 59.01%。相同六块 AVSR/FiLM 架构改用 VoxBlink2 后，CER 降至 0.2793、wrong speaker 降至 6.28%、strict correctness 升至 74.33%。论文认为匹配的训练数据在该组中比 FiLM 开关贡献更大，但也承认身份多样性与录制条件仍然混杂。8 blocks 与 HUGE 配置分别达到 75.93% 与 75.38% strict correctness，但都没有改善 CER。已归档的无 speaker-loss 检查点最强，但其启动 CLI 未完全保存；所有行均为单检查点，不能因果归因。仅输入级条件化的对照保留 63.85% residual overlap，而带 FiLM 配置为 12.45%，表明层式条件化与更强的重叠抑制相关，但两个检查点训练配置不同，不构成严格受控消融。

### ⚖️ 评分理由

*   创新性 (1.3/2)：QiangDa 首次将真实场景共同录制重叠语音引入 AV-TSE，通过同一混合在 A/B 视觉提示下的配对设计直接暴露 visual bypass 失败；VoxBlink2-AVSE 提供 766.17 小时身份不相交训练语料；配套的 AV-HuBERT 条件化 TF-GridNet 与层间 FiLM 注入构成可验证的技术贡献（A_SUMMARY、A_METHOD）。

*   技术严谨性 (1.2/1.5)：评测协议采用 OSD-first 互斥分类，避免强制二选一，能正确暴露 ResNet 无 FiLM 的视觉绕过（A_RESULTS 表5）；标注管线含 Viterbi 时间一致约束与人工复核，训练/开发身份不相交（A_SUMMARY、SCORING_SOURCE_18）；方法内部逻辑自洽，局限性在 A_LIMITS 中做了明确讨论。

*   实验充分性 (0.8/1.5)：完整 manifest 上 8 个检查点均报告 CER、身份相似度和 OSD-first 三类指标（A_RESULTS），并有训练数据、FiLM、容量和 speaker-loss 的内部消融；但缺少与已有 AV-TSE 方法的直接对比，也无合成基准上的 SI-SNR/SI-SDR 外部锚定（A_LIMITS），且消融中训练数据与录制条件混杂、输入级融合对照非严格受控、全部为单检查点（A_LIMITS），实验对核心声明的支撑不足。

*   清晰度 (0.8/1)：架构分节清晰，公式（1）-（7）与 FiLM 更新式符号定义明确，表 4/5 注释详尽，能依据文字理解评测流程与模型结构（A_METHOD、A_RESULTS）；但原文存在少量语法瑕疵，例如 SCORING_SOURCE_9 中 'Causing that we mainly using QiangDa for testing' 等表达，略损专业表现。

*   影响力 (1.0/1.5)：QiangDa 是面向 AV-TSE 的联合录制真实场景 benchmark，直击合成-真实 gap，并提供大规模身份不相交训练语料，具备成为社区标准评测集的潜力（A_SUMMARY、A_RESULTS）；但实际影响力仍待社区采纳验证，目前属预期价值。

*   开源 (0.5/1.5)：论文声明将 QiangDa 和 VoxBlink2-AVSE 作为核心发布资产，但账本中未披露具体下载 URL 或 HuggingFace 链接；代码与模型权重均未披露，核心产物尚未以可验证方式完全开放，属于明确承诺开放但未有实际发布链接的状态（A_OPEN）。

*   可复现性 (0.2/0.5)：架构、损失函数、评测协议有详细描述（A_METHOD、A_RESULTS），但最强的无 speaker-loss 检查点启动 CLI 未完全保留（A_LIMITS），且账本中未给出优化器、学习率、硬件等训练配置，关键复现信息缺失，只能部分复现。

*   工程/实践价值 (1.0/1.5)：QiangDa 与 VoxBlink2-AVSE 构成配套的评测与训练工程资产，身份对齐管线含 Viterbi 与人工复核，评测工具链使用公开模型可直接落地（SCORING_SOURCE_18、A_OPEN）；但有效说话人仅 14 对、场景 77 个，且语料限于朗读式普通话，覆盖面有限（A_LIMITS）。

### 🚨 局限与问题

- QiangDa 仅包含朗读式普通话语音，非语言发声被排除，因此不能代表自然对话中的全部声学现象。
- 真实重叠录音没有同步的孤立物理源，目标 SI-SDR 无法定义，只能使用 CER、说话人相似度和 OSD 代理指标。
- OSD 判定依赖均值阈值；绝对比率随阈值变化，0.25 到 0.45 区间内排序大体稳定但数值仍受阈值影响。
- OSD 错误、分离伪影和短暂残留干扰会影响评估代理指标，不能把 OSD-first 结果视为 ground-truth 分离成功率。
- 无 speaker-loss 检查点整体最强，但其启动 CLI 未完全保留；speaker loss 的因果效应需要匹配重训后才能判断。
- VoxBlink2 与 LRS3 的训练数据对比中，身份多样性与录制条件混杂，不能把全部提升归因于训练数据规模。
- 输入级融合加 FiLM 与仅输入级融合的两个检查点训练配置不同，不构成严格受控消融。
- 所有结果均为单检查点，未报告多 seed 统计。

### 审稿人发现的潜在问题
- 14 对说话人、77 个场景的实际有效样本较小，场景内多条 clip 高度相关；报告 12,076 个输出行会高估独立样本量。
- 没有按说话人对、按距离或按视角给出细分结果，无法判断模型在 3 m、60° 等困难条件下是否系统性失败。
- 实验缺少与已有 AV-TSE 方法的直接比较，也没有在合成基准上提供可对齐的 SI-SNR/SI-SDR 结果，导致“新基准更难”和“新方法更强”都未被外部锚定。
- OSD 和 ASR 均使用自动系统，没有人工听感抽查；当 OSD 本身出错时，strict correct 会继承其误差。
- VoxBlink2-AVSE 不设测试分区，虽因使用 QiangDa 测试而合理，但限制了该语料在传统监督分离任务中的直接复用。
- 最佳检查点的不可复现性不仅影响可复现性评分，也削弱了“加入 speaker loss 无益甚至有害”这一潜在结论的可信度。

---

[← 返回 2026-08-06 语音/音乐/音频论文速递](/audio-paper-digest-blog/posts/2026-08-06/)
