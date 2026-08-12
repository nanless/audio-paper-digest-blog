---
title: "myMediWhisper: Construction of Burmese Medical Speech Corpus and Whisper Fine-Tuning for Clinical Dialogue ASR"
date: 2026-08-12
draft: false
tags: [语音识别, 参数高效微调, 低资源, 鲁棒性]
categories: [论文速递]
description: "语音识别 | 6.7/10"
hiddenInHomeList: true
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_arxiv_id: "2608.11036"
---

# 📄 myMediWhisper: Construction of Burmese Medical Speech Corpus and Whisper Fine-Tuning for Clinical Dialogue ASR

标签：#语音识别 #参数高效微调 #低资源 #鲁棒性

**6.7/10** | 创新 1/2 | 严谨 0.9/1.5 | 实验 1/1.5 | 清晰 0.6/1 | 影响 0.7/1.5 | 开源 1.2/1.5 | 复现 0.3/0.5 | 工程 1/1.5

✅ **6.7/10** | 前50% | 文档类型：数据集与基准 | 评分置信度：中 | #语音识别 | #LoRA | #参数高效微调 #低资源 | [arxiv](https://arxiv.org/abs/2608.11036)


### 👥 作者与机构

- 论文标注 *Corresponding authors，但未在文本中列出具体姓名。
- 论文标注 †These authors contributed equally，但未在文本中列出具体姓名。
- 论文标注 ‡Work done during internship at LU. Lab., Myanmar，对应作者 Thet Htet San。
- 作者列表：
  - Ye Kyaw Thu（National Electronics and Computer Technology Center (NECTEC), Thailand；Language Understanding Laboratory, Myanmar）
  - Ye Bhone Lin（Language Understanding Laboratory, Myanmar；King Mongkut’s University of Technology Thonburi, Thailand）
  - Thura Aung（Language Understanding Laboratory, Myanmar；King Mongkut’s Institute of Technology Ladkrabang, Thailand）
  - Htet Arkar（King Mongkut’s Institute of Technology Ladkrabang, Thailand）
  - Myat Oo Swe（King Mongkut’s Institute of Technology Ladkrabang, Thailand）
  - Thet Htet San（King Mongkut’s Institute of Technology Ladkrabang, Thailand；标注 Work done during internship at LU. Lab., Myanmar）
  - Min Thiha Tun（Language Understanding Laboratory, Myanmar）
  - Thazin Myint Oo（Language Understanding Laboratory, Myanmar）
  - Thepchai Supnithi（National Electronics and Computer Technology Center (NECTEC), Thailand）

### 💡 毒舌点评

论文的价值在语料和基准本身：公开缅甸语医疗语音数据、给出 FFT 与 rsLoRA-PEFT 的系统对比，这对低资源医疗 ASR 是实打实的推进。但内部数字多处对不上：正文说原始语料 28 小时 6 分 36 秒，表 1 却是 55.82 小时；增强因子写 0.5×3×2，又说扩到 198.63 小时、约 3.75 倍，按因子算应约 211.8 小时；正文称 PEFT 模型 RTF 普遍比 FFT 高，但 Medium 无增强时 PEFT RTF 0.408 明显低于 FFT 的 0.691，正文偏又引用这对数字作为 PEFT 延迟更高的证据。更麻烦的是，论文引用 myMediCon 的 19.0% WER 作为领域最佳基线，却没做任何对比说明；按各自报告口径，本文 23.44% 并不比 myMediCon 的 RNN 基线低。这些硬伤让一个本可干净利落的数据集贡献显得仓促。建议作者发布勘误表，明确 28h/52.95h/55.82h/198.63h 之间的口径关系，并给出模型权重和代码仓库。

### 📌 核心摘要

本文针对缅甸语医疗语音识别缺少公开语料、通用 Whisper 在临床对话上表现差的问题，构建并公开了一个由 9 名缅甸母语者录制、逐音节校验的医疗语音数据集（正文称 28 小时 6 分 36 秒），并在此基础上微调 Whisper。方法核心是“医学文本翻译核验 → 多说话人录音 → 音节级质检 → Pyroomacoustics 房间声学仿真 → 波形级与频谱级增强 → FFT/rsLoRA-PEFT 微调”的完整流水线。相比已有缅甸语医疗语料 myMediCon（语音数据未公开，报告最佳 WER 19.0%），本文主要新意在于公开语料、系统对比 FFT 与 rsLoRA PEFT，并加入受控噪声和混响鲁棒性分析。最佳系统为未增强的 FFT myMediWhisper-Medium，WER 23.44%，优于通用领域微调模型 whisper-large-v3-myanmar 的 32.03% 和 MMS-1B 的 37.90%；但按各自报告口径，该结果仍高于论文引用的 myMediCon 19.0%，因此不宜称绝对 SOTA。零样本 Vanilla Whisper 在缅甸语上整体崩溃，Tiny/Base/Small/Medium/Large-v2 的 WER 分别为 235.2%、604.19%、293.79%、256.07%、149.16%。增强在干净测试集上普遍造成 WER 回退，但在低 SNR 和混响条件下对较大模型有鲁棒性收益。主要局限是语料规模仍较小、说话人多样性有限，且鲁棒性评估完全基于仿真噪声和房间冲激响应，不是真实临床录音。

### 🔗 开源详情

- 代码：论文中未提及代码仓库链接。
- 模型权重：论文中未提及 myMediWhisper 模型权重的具体下载 URL；文末仅说明 "The speech data and models will be released under CC BY-NC-SA"。
- 数据集：HuggingFace Datasets 仓库：https://huggingface.co/datasets/LULab/mediTalk-mm-rdy ；正文称语料约 28 小时 6 分 36 秒，协议为 CC BY-NC-SA。
- Demo：论文中未提及。
- 复现材料：论文描述了训练流程：FFT 和 PEFT（rsLoRA 应用于 `q_proj`/`v_proj`，r=128，alpha=256，dropout=0.05）；使用 Pyroomacoustics 进行房间声学模拟；使用 waveform/spectrogram 数据增强；评测集为 2.87 小时 clean test。论文中未提及独立的完整训练配置/checkpoint 文件链接。
- 论文中引用的开源项目：
  - HuggingFace Datasets 仓库 LULab/mediTalk-mm-rdy：https://huggingface.co/datasets/LULab/mediTalk-mm-rdy
  - Pyroomacoustics：论文脚注给出的 URL 截断为 https://pyroomacoustics.re...
  - chuuhtetnaing/whisper-large-v3-myanmar：https://huggingface.co/chuuhtetnaing/whisper-large-v3-myanmar
  - facebook/MMS-1B：https://huggingface.co/facebook/mms-1b
  - sil-ai/wav2vec2-bloom-speech-mya：https://huggingface.co/sil-ai/wav2vec2-bloom-speech-mya
  - Whisper（Radford et al., 2022）：论文中未给出链接
  - LoRA（Hu et al., 2022）：论文中未给出链接
  - rsLoRA（Kalajdzievski, 2023）：论文中未给出链接
  - FLEURS（Conneau et al., 2022）：论文中未给出链接
  - myMediCon（Htun et al., 2024）：论文明确说明语音数据未公开，无链接

### 🏗️ 方法概述和架构

本文不是提出新的网络算子，而是建立了一套面向低资源缅甸语医疗场景的“语料构建 + 微调评估”系统化流水线。整体输入是医学场景文本和原始语音，处理经过四个阶段：语料文本准备、录音质检、训练数据构造、数据增强；输出是可用于临床对话的 Whisper ASR 模型以及相应的 WER/RTF/鲁棒性评测结果。

下图展示了本文提出的语料构建与微调的完整流水线。

![Figure 1: Pipeline for (1) dataset preparation, (2) augmentation, fine-tuning (3) without and (4) with augmentation](https://arxiv.org/html/2608.11036v1/dataset_preparation_v6.png)

图中清晰可见从翻译验证、录音质检到房间声学仿真和数据增强的四个阶段，最终用于全微调或PEFT微调Whisper模型。


第一阶段为语料文本准备。论文采用 Samson Handbook of PLAB 2 和 Clinical Assessment 的缅甸语译本作为医学文本来源，文本来自 Dr. Samson Chissi 编写的 PLAB 2 OSCE 备考材料，原译本用于机器翻译研究（Ei San et al., 2022）。由两名同时精通英语和缅甸语的母语者对 14,517 条句子进行语义一致性、医学术语准确性和语言自然度的人工核验，核验后的句子作为后续录音的转写文本。这一阶段的关键是避免低资源语料中普遍存在的“文本错误被语音学习”问题。

第二阶段为录音与质量验证。9 名缅甸母语者（2 男 7 女）均为二十岁出头的大学在校生，能够正确认读缅甸语转写的医学术语；录音使用个人设备（智能手机和笔记本电脑）自带麦克风，在安静环境中以 16kHz 采样率录制。每位说话人拿到的是预先核验过的医学转写文本，以保证录音内容一致性。由于缅甸语是音节型声调语言，音节的声调变化可能改变语义，所有录音都经过人工逐音节核对，与转写文本不完全一致的录音被丢弃。论文声称经过该流程后得到 28 小时 6 分钟 36 秒的“高质量语料”，但该数字与后文表 1 中的 55.82 小时存在明显口径冲突，正文没有交代清楚“原始干净语料”“加入仿真混响后的语料”“训练增强后的语料”之间的数量关系。

第三阶段为训练数据构造。论文使用 Pyroomacoustics 库为每条训练音频生成房间冲激响应，随机采样不同房间类型，包括 L 形房间、随机距离布局等，将干净语音与仿真混响卷积，生成带混响训练样本。该步骤的目标是让模型在训练阶段见过类似真实诊室、走廊、房间等声学条件，从而提升对未见环境的泛化能力。表 1 的标题注明该表统计是“加入不同房间声学仿真语音之后”的语料，因此 52.95 小时训练 + 2.87 小时测试 = 55.82 小时，与正文 28 小时的原始语料并非同一概念，但论文未解释为什么原始 28 小时能扩展出 52.95 小时训练集。

第四阶段为数据增强。论文先从原始训练集中随机抽取 50% 的子集，然后对该子集独立施加三种波形级增强：随机时间平移、音高平移、加性高斯噪声。之后对每个波形级增强样本再施加两种频谱级增强：时间掩蔽（概率 0.3，掩蔽 10 个时间步）和频率掩蔽（概率 0.1，掩蔽 64 个频带）。论文写增强因子为 0.5×3×2，并声称训练数据从 52.95 小时扩大到 198.63 小时、约 3.75 倍。但 198.63 ÷ 52.95 ≈ 3.75，即总数据量为原始训练集的 3.75 倍；而按文中所写因子，0.5 子集经 3 种波形增强变为 1.5 倍原始量，再经 2 种频谱增强变为 3 倍原始量，加上原始未增强的 0.5 倍，总量应为 4 倍即约 211.8 小时，与 198.63 小时不符。论文未给出 198.63 的可复现推导。

在模型微调部分，论文使用 Whisper 的序列到序列架构：输入是 80 维 log-Mel 频谱 \(X \in \mathbb{R}^{80 \times T}\)，经过 CNN 卷积层和 Transformer encoder 得到隐表示 \(H = \text{AudioEncoder}(X)\)，decoder 以语言/任务 prompt \(p\) 为前缀，自回归生成文本 token：\(\hat{y}_t = \text{TextDecoder}(p, \hat{y}_{1:t-1}, H)\)。FFT 更新全部参数；PEFT 使用 rsLoRA，对 `q_proj` 和 `v_proj` 两个注意力投影施加低秩更新，公式为 \(h = W_0 x + \frac{\alpha}{\sqrt{r}} BA x\)，其中冻结 \(W_0\)，训练 \(A\) 和 \(B\)。论文将 rank 设为 128、alpha 设为 256、LoRA dropout 设为 0.05，并明确将 Large-v2 在双 T4 上配置为 PEFT 微调，以规避 FFT 的 OOM 问题。

整体来看，该方法是一个多层流水线而不是单一模型创新：核心价值在于语料可复现、微调策略可对比、鲁棒性评测可重复。

### 💡 核心创新点

1. 首个公开的缅甸语医疗语音语料。此前 myMediCon 未公开语音数据，复现和后续研究受限；本文公开 HuggingFace 数据集，并给出按说话人划分的时长统计，为低资源医疗 ASR 提供了可下载资源。
2. 系统对比 FFT 与 rsLoRA PEFT 在 Whisper 多尺寸模型上的适应能力。之前缅甸语工作没有在大规模预训练模型上分析这两种策略；本文用统一训练配置对比 Tiny/Base/Small/Medium/Large-v2，证明了 FFT 在资源允许时精度更优，PEFT 是内存受限下扩展到大模型的关键手段。
3. 提出了“波形级增强 + 频谱级增强 + 房间声学仿真”的鲁棒性训练与评测流程。论文将随机时间平移、音高平移、高斯噪声、时间/频率掩蔽与 Pyroomacoustics 仿真混响结合，并给出干净测试与噪声/混响测试的对比分析。
4. 建立了公开可复现的缅甸语医疗 Whisper 基准。FFT Medium 在无增强时 WER 23.44%，优于 whisper-large-v3-myanmar 的 32.03% 和 MMS-1B 的 37.90%，说明领域专用微调比单纯扩大参数更有价值；但由于 myMediCon 语料未公开且其报告 WER 为 19.0%，本文不宜宣称绝对 SOTA。
5. 音节级错误分析。论文将错误分为音系/正字法替换、功能词删除、弱前缀插入三类，指出浊音/清音混淆、弱音节前缀和语法助词删除是缅甸语医疗 ASR 的主要失败模式，为后续语言特化建模提供了方向。

下图展示了myMediWhisper Medium Aug模型的音节级错误分解。

![Figure 4: Syllable-level error breakdown for the myMediWhisper Medium Aug model.](https://arxiv.org/html/2608.11036v1/error_analysis.png)

图中可见，主要错误包括浊音/清音混淆的替换错误、功能词删除和弱前缀插入，这支持了错误分析中指出的缅甸语医疗ASR的主要失败模式。

### 📊 实验结果

论文评测使用自建测试集（2.87 小时，1,460 条话语），指标包括 WER、SER、DER、IER、chrF 和 RTF。外部基线中，最强的是通用领域微调 whisper-large-v3-myanmar，WER 32.03%；MMS-1B 为 37.90%；sil-ai/wav2vec2-bloom-speech-mya 为 98.53%。零样本 Vanilla Whisper 全面失效：Tiny 235.2%、Base 604.19%、Small 293.79%、Medium 256.07%、Large-v2 149.16%，核心原因是插入错误爆炸（Large-v2 的 IER 为 49.16%，Base 的 IER 高达 504.19%），说明纯预训练 Whisper 对缅甸语医疗文本基本不可用。

本文最佳系统为无增强的 FFT myMediWhisper-Medium，WER 23.44%（SER 11.52%，DER 11.15%，IER 0.77%），比 whisper-large-v3-myanmar 相对降低约 26.8%，且参数量只有 769M vs 1550M。FFT Small 的 WER 为 25.81%，也优于 1550M 的 whisper-large-v3-myanmar。PEFT 模式下，myMediWhisper-Large-v2 无增强 WER 41.57%，增强后为 47.63%；虽然精度不如同尺寸 FFT，但这是双 T4 内存限制下唯一能够微调 Large-v2 的方式。

数据增强存在明显的准确率–鲁棒性权衡：在干净测试集上，FFT Medium 从 23.44% 回退到 24.73%，FFT Small 从 25.81% 回退到 34.53%，FFT Base 从 31.83% 回退到 51.31%，PEFT Large-v2 从 41.57% 回退到 47.63%。最小模型在增强下出现灾难性退化：FFT Tiny 从 52.53% 恶化到 83.63%，说明增强收益依赖模型容量。论文通过图 2 展示增强模型在低 SNR 条件下 WER 更低，通过图 3 展示增强模型在 L 形和长距离房间配置下更稳健，但正文没有给出这些曲线的具体 SNR 数值和逐房间 WER 表格。表 2 中 RTF 结论与表格数字存在冲突：正文称 PEFT 模型 RTF 更高，并举 Base 从 0.204 到 0.340 为例，但 Medium 无增强时 PEFT RTF 为 0.408，低于 FFT 的 0.691；PEFT 增强版为 0.821，又高于 FFT 增强版的 0.696，正文混用了不同条件。

下图展示了不同信噪比条件下，全微调和PEFT微调模型的WER变化。

![Figure 2: WER under varying Signal-to-Noise Ratio (SNR) conditions for myMediWhisper models trained with and without data augmentation.](https://arxiv.org/html/2608.11036v1/robustness_snr.png)

图中可见，增强后的模型在低SNR（如-20dB）下WER较低，表明数据提升了噪声鲁棒性，但整体WER随SNR增加而下降。


下表保留主方法、最强基线与关键消融项，按测试集口径从论文表 2 摘录：

| 模型 | 参数量 | WER ↓ | SER ↓ | DER ↓ | IER ↓ | RTF ↓ |
|---|---|---|---|---|---|---|
| facebook/MMS-1B 零样本 | 1000M | 37.90 | 31.87 | 1.98 | 3.51 | 0.044 |
| whisper-large-v3-myanmar | 1550M | 32.03 | 23.61 | 2.26 | 4.82 | 1.187 |
| Vanilla Whisper Large-v2 零样本 | 1550M | 149.16 | 48.92 | 51.08 | 49.16 | 0.946 |
| FFT myMediWhisper-Small | 244M | 25.81 | 13.56 | 11.37 | 0.88 | 0.347 |
| FFT myMediWhisper-Medium | 769M | 23.44 | 11.52 | 11.15 | 0.77 | 0.691 |
| FFT myMediWhisper-Medium Aug | 769M | 24.73 | 12.05 | 10.91 | 1.77 | 0.696 |
| PEFT myMediWhisper-Large-v2 | 40.6M 可训练 | 41.57 | 27.22 | 11.32 | 1.40 | 1.006 |
| PEFT myMediWhisper-Large-v2 Aug | 40.6M 可训练 | 47.63 | 33.80 | 9.58 | 2.62 | 1.056 |

总体结论成立：FFT 在资源允许时更强，PEFT 是内存受限下的可扩展方案；增强以牺牲干净集精度换取低 SNR 和混响鲁棒性，且收益主要出现在 Medium/Large 等较大模型上。

### 🔬 细节详述

- 训练数据：语料来源于 Samson Handbook of PLAB 2 和 Clinical Assessment 的缅甸语译本（Ei San et al., 2022）；共 14,517 句文本；9 名缅甸母语者（2 男 7 女，均为二十岁出头的大学在校生，能正确认读缅甸语医学术语转写）；录音使用个人设备自带麦克风（智能手机和笔记本电脑），安静环境，16kHz；每位说话人使用预先核验过的医学转写文本；所有录音经人工逐音节核验，与转写文本不一致的录音被丢弃。论文称原始语料为 28 小时 6 分 36 秒，但表 1 显示训练+测试总时长为 55.82 小时，表 1 标题注明为“加入不同房间声学仿真语音之后”的统计，二者关系未在正文中交代清楚。
- 数据增强：50% 训练子集上独立施加随机时间平移、音高平移、加性高斯噪声（Jordal et al., 2023）；再施加时间掩蔽（概率 0.3，10 个时间步）和频率掩蔽（概率 0.1，64 个频带）（Park et al., 2019）。论文称增强因子为 0.5×3×2，训练数据从 52.95 小时增至 198.63 小时；198.63 ÷ 52.95 ≈ 3.75，但按 0.5×3×2 的计算路径无法直接推出 198.63 小时，数字不一致。
- 损失函数：未说明（Whisper 通常使用交叉熵序列损失，但论文正文未明确写出）。
- 训练策略：batch size 4；学习率 1e-5；单 epoch；流式数据管线（为规避 Kaggle Notebook 云环境的本地存储限制并优化数据吞吐）；未说明优化器、warmup、梯度累积、学习率调度策略。
- 关键超参数：Whisper Tiny/Base/Small/Medium/Large-v2 对应参数为 39M/74M/244M/769M/1550M；PEFT 采用 rsLoRA（`use_rslora=True`），r=128，alpha=256，dropout=0.05，仅作用于 `q_proj` 和 `v_proj`；PEFT 可训练参数量为 Tiny 1.6M、Base 3.1M、Small 8.4M、Medium 25.2M、Large-v2 40.6M。
- 训练硬件：云环境 Kaggle Notebooks，双 NVIDIA Tesla T4，合计 32GB VRAM；并行训练；未说明总训练时长。
- 推理细节：论文给出 RTF，但没有说明解码策略、beam size、温度、是否流式解码。
- 正则化或稳定训练技巧：LoRA dropout 0.05；数据增强与房间混响仿真被用作正则化手段；未说明其他稳定训练技巧。
- 测试集：2.87 小时，1,460 条话语；论文未说明测试集与训练集按说话人的严格隔离方式（表 1 中每个说话人都有少量测试话语，说明测试集与训练集来自同一批说话人）。

### ⚖️ 评分理由

*   创新性 (1.0/2)：[A_SUMMARY] 构建并公开了首个缅甸语医疗语音语料，系统对比FFT与rsLoRA-PEFT，并提出波形/频谱增强+房间声学仿真的鲁棒性评测流程，虽无新算子，但数据与基准贡献具有明确创新性。

*   技术严谨性 (0.9/1.5)：[A_METHOD] 数据增强因子计算不闭合：0.5×3×2按文本推导应约4倍，论文却声称3.75倍且198.63小时无法由52.95小时按所述路径推出，属于方法逻辑漏洞；其余流水线为成熟技术整合，无严重推导错误。

*   实验充分性 (1.0/1.5)：[A_RESULTS][A_LIMITS] 实验覆盖多尺寸Whisper、FFT/PEFT、外部基线和鲁棒性分析，但训练与测试集来自同一批说话人，泄漏控制不足；且未与myMediCon进行同口径对比说明，削弱了基线的可验证性。

*   清晰度 (0.6/1)：[A_METHOD][A_RESULTS] 正文28小时、表1 55.82小时、扩展198.63小时等口径矛盾未解释；RTF结论与表2数据冲突（Medium无增强PEFT 0.408低于FFT 0.691却称PEFT更高）；图2/3缺少数值坐标，影响读者核对。

*   影响力 (0.7/1.5)：[A_SUMMARY][A_RESULTS] 面向低资源缅甸语医疗ASR，公开语料并建立基准，领域内实用价值明确；但语料规模有限、说话人多样性不足，且最佳WER未超过myMediCon报告值，限制了更广影响。

*   开源 (1.2/1.5)：[A_OPEN] 数据集已在HuggingFace公开（LULab/mediTalk-mm-rdy），但代码和模型权重未提供，仅承诺未来以CC BY-NC-SA发布，属于核心数据开放但配套材料不完整。

*   可复现性 (0.3/0.5)：[A_METHOD][A_OPEN] 论文披露了batch size、学习率、epoch、硬件、数据增强与PEFT超参，但未给出优化器、warmup、学习率调度、解码策略（beam size等）及独立训练配置/checkpoint链接，多数配置可复现但关键细节缺失。

*   工程/实践价值 (1.0/1.5)：[A_METHOD][A_RESULTS] 系统性地对比FFT与PEFT在双T4上的可行性，量化了RTF、参数量与WER的权衡，并给出增强在鲁棒性上的收益，为工程选型提供了可参考的完整流程。

### 🚨 局限与问题

1. 论文明确承认的局限：
   - 鲁棒性评估只使用模拟噪声和仿真房间冲激响应，不能完全代表真实临床环境中的多说话人嘈杂声、非平稳设备噪声和麦克风失真。
   - 语料规模有限，说话人多样性和缅甸语区域方言覆盖不足。
   - 未来计划扩展语料、平衡性别、增加医学专科覆盖，并从仿真评测转向真实临床指标。
2. 审稿人发现的潜在问题：
   - 训练集与测试集来自同一批说话人（表 1 中每个说话人都有 Train 和 Test 两列），论文没有做 speaker-independent 的留出划分，测试 WER 可能高估模型对陌生说话人的泛化能力。
   - 数据规模表述矛盾：正文的 28 小时 6 分 36 秒与表 1 的 55.82 小时不是同一概念，表 1 标题注明 after adding simulated speech，但正文没有解释 28 小时如何扩展为 52.95 小时训练 + 2.87 小时测试。
   - 增强因子计算无法闭合：0.5×3×2 按文本推导应为 4 倍总量，但论文声称 198.63 小时即 3.75 倍；如果是原始集加增强集的组合方式，也没有写清计算公式。
   - RTF 结论与数据冲突：正文称 PEFT 模型 RTF 更高，但 Medium 无增强时 PEFT（0.408）低于 FFT（0.691）；正文拿 0.691→0.408 作为 PEFT 延迟惩罚的证据，逻辑上自相矛盾。需要作者确认 PEFT 是否真的引入推理延迟，还是 LoRA 融合后反而可以加速。
   - 零样本 Whisper 的 WER 严重超过 100%（Base 604.19%），说明该评测条件下插入错误失去控制，纯 WER 数字可能夸大了模型崩溃程度；论文至少应讨论音节错误率或 CER 作为补充指标。
   - 图 2 和图 3 没有给出数值坐标表，无法独立验证“增强提升鲁棒性”的幅度和显著性。
   - 论文引用 myMediCon 的 19.0% WER 作为领域最佳，但未说明为何不与其比较；虽然语料不可公开导致无法公平对比，但至少应明确说明测试集、模型代际和指标口径的差异，否则读者会误以为 23.44% 是领域新高。

---

[← 返回 2026-08-12 语音/音乐/音频论文速递](/audio-paper-digest-blog/posts/2026-08-12/)
