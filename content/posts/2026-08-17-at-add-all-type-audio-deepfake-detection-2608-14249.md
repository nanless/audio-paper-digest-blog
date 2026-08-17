---
title: "AT-ADD: All-Type Audio Deepfake Detection Challenge Summary"
date: 2026-08-17
draft: false
tags: [音频伪造检测, 自监督学习, 语音伪造检测, 模型融合, 基准测试]
categories: [论文速递]
description: "音频伪造检测 | 6.3/10"
hiddenInHomeList: true
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_arxiv_id: "2608.14249"
---

# 📄 AT-ADD: All-Type Audio Deepfake Detection Challenge Summary

标签：#音频伪造检测 #自监督学习 #语音伪造检测 #模型融合 #基准测试

**6.3/10** | 创新 1.2/2 | 严谨 1/1.5 | 实验 0.7/1.5 | 清晰 0.8/1 | 影响 1/1.5 | 开源 0.5/1.5 | 复现 0.1/0.5 | 工程 1/1.5

✅ **6.3/10** | 前50% | 文档类型：数据集与基准 | 评分置信度：中 | #音频伪造检测 | #自监督学习 | #语音伪造检测 #模型融合 | [arxiv](https://arxiv.org/abs/2608.14249)


### 👥 作者与机构

- 第一作者：Yuankun Xie（Communication University of China & Ant Group，北京，中国；原文标注共同贡献）  
- 通讯作者：未说明  
- 作者列表：Yuankun Xie（Communication University of China & Ant Group）、Haonan Cheng（Communication University of China）、Jiayi Zhou（Machine Intelligence, Ant Group，上海）、Xiaoxuan Guo（Communication University of China & Ant Group）、Tao Wang（Machine Intelligence, Ant Group，上海）、Changhao Zhang（Machine Intelligence, Ant Group，上海）、Jian Liu（Machine Intelligence, Ant Group，上海）、Weiqiang Wang（Machine Intelligence, Ant Group，上海）、Ruibo Fu（Institute of Automation, Chinese Academy of Sciences，北京）、Xiaopeng Wang（Beijing Institute of Technology，北京）、Hengyan Huang（Communication University of China）、Xiaoying Huang（Communication University of China）、Long Ye（Communication University of China）、Guangtao Zhai（Shanghai Jiao Tong University，上海）

### 💡 毒舌点评

该工作总结了覆盖面较广的音频伪造检测挑战，数据规模和双赛道设计有实际价值，尤其是将语音、环境声、歌声和音乐纳入统一评测。短板也很明显：评估集未见生成器只给数量、不给清单，缺少按类型/生成器/扰动的细粒度分析，参赛系统描述更像榜单笔记而非可复现技术报告。论文没有官方基线、消融或统计显著性检验，因此“all-type”和“robust”的性能声明更多停留在排行榜数字层面。

### 📌 核心摘要

本论文总结了 ACM MM 2026 AT-ADD 挑战赛，目标是推动音频深度伪造检测在真实声学与信道变化、以及异质音频类型上的泛化能力。挑战包含两个封闭设置赛道：Track 1 面向鲁棒语音伪造检测，Track 2 面向测试时类型未知的全类型音频伪造检测，覆盖语音、环境声、歌声和音乐。作者构建了对应的 AT-ADD Track 1/Track 2 数据集，其中 Track 2 eval 总量为 229,373 条，包含语音、声音、歌声、音乐四类。Track 1 评估集使用训练中未见过的 26 种语音生成方法，并引入真实设备、回声、压缩、重采样、变速、音高变化等扰动；Track 2 评估集使用未见生成器并加入部分 OOD 真实音频。最终最佳 Track 1 系统获得 90.71% Macro-F1，最佳 Track 2 系统获得 96.10% Macro-F1。参赛系统的共同模式是自监督音频表示、强数据增强、multi-crop 推理以及结构化融合或类型路由。论文为实际音频伪造检测提供了基准和榜单，但细粒度分析和可复现材料仍较有限。

### 🔗 开源详情

- 代码：论文中未提及代码仓库链接，仅给出挑战官网 https://at-add.com；论文未明确说明是否会开源评测工具链或基线代码。  
- 模型权重：论文明确给出的预训练权重链接为 https://huggingface.co/facebook/w2v-bert-2.0 和 https://huggingface.co/facebook/wav2vec2-xls-r-300m；参赛系统自身的模型权重/检查点未提及。  
- 数据集：AT-ADD Track 1 与 Track 2 数据集（官方入口：https://at-add.com ；论文未给出直接下载链接，未说明公开协议）。Track 1 真实语音含内部录音及 AISHELL-3、LibriTTS-R、LJSpeech、Common Voice；假语音为 TTS/VC 生成。Track 2 含语音、声音、歌声、音乐四类；声音来自 AudioCaps，歌声来自 OpenCpop、M4Singer、KiSing，音乐来自 MusicCaps；OOD 真实样本来自 AVQA、CompA-R、VocalSound、TUT2016、FMA、FortisAVQA。上述第三方数据集论文中均未给出直接链接。  
- Demo：论文中未提及。  
- 复现材料：论文中未提供代码/检查点/训练配置附件；描述了闭集设置、标准 train/dev/progress/eval 划分（progress 占 eval 20%）、Macro-F1 评估，以及 Top 系统的增强策略和部分模型结构，但缺少训练超参数、推理阈值、crop 重叠、滑窗步长、损失权重和清洗规则。  
- 论文中引用的开源项目：  
  - 明确给出链接：W2V-BERT 2.0（https://huggingface.co/facebook/w2v-bert-2.0）；Wav2Vec2-XLS-R-300M（https://huggingface.co/facebook/wav2vec2-xls-r-300m）；挑战官网（https://at-add.com）。  
  - 仅提及名称但未给出链接：AASIST、AASIST3、LoRA、MUSAN、RIR、TSSDNet/ATSSDNet、CQCC、BEATs、EAT-large、SwiGLU、Whisper-large-v3、Wav2Vec2-BERT、DANN、GroupDRO、GRKAN、Wavelet Prompt Tuning、RawBoost；数据集 AISHELL-3、LibriTTS-R、LJSpeech、Common Voice、AudioCaps、AVQA、CompA-R、VocalSound、TUT2016、OpenCpop、M4Singer、KiSing、MusicCaps、FMA、FortisAVQA。

### 🏗️ 方法概述和架构

本论文不是提出单一检测模型，而是总结一个竞赛评测框架、数据集组织方式和参赛系统设计模式。整体流程是：官方提供封闭训练/开发数据；参赛者在限制条件下训练二分类 countermeasure；系统在 progress 和 eval 集合上输出真实/伪造决策；最终以 Macro-F1 排名。两个赛道均禁止使用外部 ADD 数据，也不允许对 progress/eval 分布进行适配；允许信号级增强和可追溯的通用预训练模型。

下图展示了AT-ADD挑战的整体框架，包括真实音频来源、伪造生成方法以及双赛道设计。

![(a)](https://arxiv.org/html/2608.14249v1/intro.png)

图中清晰区分了Track 1聚焦的鲁棒语音伪造检测与Track 2面向的全类型音频伪造检测，并概述了挑战的数据构成和检测流程。


Track 1 的核心任务是鲁棒语音伪造检测。输入为语音 utterance，输出为二值 real/fake。论文明确 real 是非深度生成语音，fake 是深度神经网络生成的 TTS 或 VC 语音；即使存在压缩、重采样、变速、音高变化或 replay，也不改变原始 real/fake 标签。训练和开发集中的真实语音来自内部多设备录音、AISHELL-3、LibriTTS-R、LJSpeech 和 Common Voice；假语音由 TTS 和 VC 方法生成。为防止说话人信息泄漏，VC 和 one-shot TTS 的参考说话人与真实源说话人不同，train/dev 与 eval 使用不同参考说话人池。评估集真实语音来自六个域：5k 内部多设备录音、2k 3D-Speaker、2k EchoFake 非 replay、2k AISHELL-3、4k LibriTTS-R 和 5k Common Voice；其中 20% 加入速度扰动、音量变化、重采样或组合扰动。评估集假语音由 26 种训练未见生成方法产生，并包含 5k 音量变化、5k 重采样、10k 变速和 10k 组合变换样本。

Track 2 的任务是类型无关二分类。输入音频类型未知，但可能来自语音、环境声、歌声或音乐。其语音部分复用 Track 1 的语音 train/dev，但评估集去除了扰动和 replay，以突出跨类型泛化。声音部分基于 AudioCaps：真实样本按非重叠方式划分，train/dev 假样本由文本条件 TTA 模型生成，eval 假样本来自 4 种未见生成方法；评估集还加入 AVQA、CompA-R、VocalSound、TUT2016 的 OOD 真实音频各 1k。歌声部分来自 OpenCpop、M4Singer 和 KiSing，train/dev 假样本由歌声转换生成，源歌手和目标歌手不重叠；eval 使用 5 种未见方法。音乐部分来自 MusicCaps，train/dev 假样本由文本条件 TTM 模型生成，eval 使用 4 种未见方法；OOD 真实样本来自 FMA 和 FortisAVQA 各 5k。

参赛系统架构层面，Track 1 和 Track 2 的主流路线是“预训练自监督前端 + 后端判别网络 + 后处理融合”。前端主要使用 W2V-BERT 2.0、XLSR、BEATs、EAT-large 和 Whisper-large-v3；后端主要使用 AASIST、AASIST3、TSSDNet/ATSSDNet、Adapter-MFA、注意力池化 MLP 等。

Track 1 第一名 WaveShield 采用 W2V-BERT 2.0 的 AASIST/AASIST3/Adapter-MFA 三子系统集成，每个子系统按“冻结 LoRA 分阶段训练到联合微调”的方式优化，损失为 AM-Softmax 加 focal loss；增强覆盖 MUSAN 噪声、RIR 混响、编解码 artifacts、信号扰动、重放仿真和片段级 bonafide 拼接。推理时对子系统 logits 取平均并用固定阈值。第二名 Fosafer 使用多尺度 XLSR 前端，包括 0.3B、1B、2B，后端为 TSSDNet/ATSSDNet 和 GFCC 增强分支；30% 官方训练样本在线随机增强，最终 score-level fusion 使用固定阈值。第三名 sonomsl 使用 WPT-XLSR1B-AASIST：多数冻结的 XLSR-1B 前端通过 wavelet prompt tuning 适配，后端为 AASIST；三个成员引入类重平衡、条件匹配 real/fake 配对和最后六层 XLSR 部分微调；采用 4.04 秒滑窗、逐窗 logits 中值池化和 logistic regression 融合，并加入 DANN 与 GroupDRO。第四名 ThreeTO 使用三层 wav2vec2-XLSR 特征融合、GRKAN 替换 AASIST 输入投影，另一分支加入 CQCC 跨注意力；最终使用加权 logit 融合。第五名 NKU-HLT 使用单模型 wav2vec2-XLSR-300m + AASIST，两阶段优化，第一阶段全量微调，第二阶段冻结 SSL 前端加入 RIR 视图，并以 score-consistency MSE 对齐 RIR 与干净视图分数。

Track 2 第一名 starfire 采用硬类型路由：冻结的 BEATs 路由器先判断语音、声音、歌声或音乐，再由分支检测器决策。语音分支为 XLSR-AASIST，非语音分支使用 EAT-large AASIST，训练时偏向音乐和声音数据；最终采用类别特定阈值和保守 multi-crop 池化。第二名 orange9 是统一端到端模型，将 EAT-large 和 XLSR 中间层表示通过可学习 softmax 权重聚合，经 SwiGLU、多头注意力池化和 MLP 分类；辅助模块包括 Whisper-large-v3 语音路由、针对 m4a 再编码训练的 XLSR 语音 refiner，以及并行类型分类头。第三名 ThreeTO 的 MEDS 使用 XLSR 和 BEATs 多专家结构，融合稀疏层表示，五分支 AASIST 联合四个类型专家和一个统一分支；另有 XLSR 类型路由器选择类型特定的聚合和阈值。第四名 Fosafer 使用场景自适应集成，结合 XLSR 多尺度检测器、GFCC 分支和 EAT-large 四类场景分类器，最终应用类别特定阈值。第五名 KETI-KU 使用单一 W2V-BERT 2.0 + AASIST 系统，加权交叉熵和开发集阈值决策。

关键设计动机是：异构音频类型的伪造痕迹不同，因此采用路由、multi-expert 或大规模 SSL 特征融合来应对类型未知问题；鲁棒性赛道则依赖强增强、域不变正则化和频谱/波形多尺度特征来减轻信道和生成器偏移。

### 💡 核心创新点

1. 提出覆盖语音、环境声、歌声和音乐的全类型音频伪造检测挑战，相比 ASVspoof 和以往 ADD 挑战主要聚焦语音伪造，扩展了评测范围。  
2. 采用双赛道互补设计：Track 1 强调真实声学和信道鲁棒性，Track 2 强调测试时类型未知条件下的跨类型泛化，两者分别揭示不同能力瓶颈。  
3. 构建了较大规模的封闭式评测数据集，并设计未见生成器、说话人池分离、多设备真实语音、OOD 真实音频和信号扰动等机制，用于削弱数据泄漏和表面泛化。  
4. 从参赛系统中归纳出可复用的设计模式：自监督前端、条件增强、multi-crop 推理、类型路由和结构化融合，为后续检测系统设计提供参考。  
5. 发布了公共排行榜和挑战协议，为标准化比较提供了相对统一的基准。

### 📊 实验结果

本表保留排行榜前五系统；论文未提供官方基线、消融实验或统计显著性检验。

| 赛道 | 排名 | 团队 | 数据增强 | 系统名称 | 子系统数 | Progress Macro-F1 | Eval Macro-F1 |
|---|---:|---|---:|---:|---:|---:|---:|
| Track 1 | 1 | WaveShield | Noise; Reverb; Codec; Perturb.; Replay; Seg. | w2vBERT2.0-AASIST | 3 | 84.54 | 90.71 |
| Track 1 | 2 | Fosafer | Noise; Reverb; Perturb.; Seg. | ssl_gfcc_multiscale_ensemble | 4 | 85.31 | 86.67 |
| Track 1 | 3 | sonomsl | Noise; Reverb; Codec; Perturb.; Replay | sonomsl | 3 | 86.25 | 86.63 |
| Track 1 | 4 | ThreeTO | Codec; RB; Perturb.; Replay | atadd_track1_xlsr_aasist_ensemble | 3 | 83.61 | 83.79 |
| Track 1 | 5 | NKU-HLT | Reverb; Codec | EnvRobust-XLSR-AASIST | 1 | 84.20 | 83.68 |
| Track 2 | 1 | starfire | Codec; RB; Seg. | starfire_track2_audio_type_routed_ensemble | 4 | 96.28 | 96.10 |
| Track 2 | 2 | orange9 | Noise; Reverb; Codec; RB; Perturb. | E2E-ATADD | 4 | 95.13 | 95.58 |
| Track 2 | 3 | ThreeTO | RB | MEDS | 3 | 93.76 | 93.95 |
| Track 2 | 4 | Fosafer | Noise; Reverb; Perturb.; Seg. | ssl_gfcc_scene_adaptive_ensemble | 5 | 91.61 | 91.62 |
| Track 2 | 5 | KETI-KU | Codec | Wav2Vec2-BERT-AASIST | 1 | 91.31 | 91.10 |

Track 1 冠军系统 Eval 分数为 90.71%，高于其 Progress 分数 84.54%；Track 2 冠军系统 Eval 分数为 96.10%，其 Progress 分数为 96.28%。Track 2 整体 Macro-F1 明显高于 Track 1，说明带真实扰动和信道变化的语音鲁棒伪造检测仍是更难的任务。论文未给出按生成器、扰动类型、音频类型或语言细分的 Macro-F1，也未提供错误分析或置信区间。

### 🔬 细节详述

- 训练数据：Track 1 train/dev 真实语音来自内部录音、AISHELL-3、LibriTTS-R、LJSpeech、Common Voice；假语音来自 TTS 和 VC。Track 2 语音部分同 Track 1，但评估集去扰动和 replay；声音基于 AudioCaps，歌声基于 OpenCpop/M4Singer/KiSing，音乐基于 MusicCaps。具体采样分布、音频切片长度、重采样率和数据清洗规则未说明。
- 数据增强：参赛系统使用了 MUSAN 噪声、RIR 混响、编解码失真（如 g711alaw、mp3、opus）、RawBoost、速度/音高扰动、量化、动态范围压缩、均衡、掩蔽、随机裁剪和 bonafide 分段拼接等。官方允许信号级增强和可追溯的通用预训练模型，不允许外部 ADD 数据或 progress/eval 适应。
- 损失函数：部分系统使用了 AM-Softmax 加 focal loss、weighted cross-entropy、score-consistency MSE、DANN 和 GroupDRO 正则；loss 权重和各 loss 间的平衡系数未说明。
- 训练策略：WaveShield 使用分阶段 frozen-LoRA 到联合微调；sonomsl 对最后六层 XLSR 做部分微调；NKU-HLT 使用两阶段优化并加入 RIR 一致性 MSE；orange9 使用合并 train/dev 数据及分层五折交叉验证。学习率、warmup、batch size、优化器、训练轮数和调度策略均未说明。
- 关键超参数：前端包括 W2V-BERT 2.0、XLSR-300m/1B/2B、BEATs、EAT-large、Whisper-large-v3；后端包括 AASIST、AASIST3、TSSDNet/ATSSDNet、Adapter-MFA、GRKAN、CQCC 跨注意力。sonomsl 使用 4.04 秒滑窗；orange9 使用随机 4 秒 crop 和五 crop 推理。隐藏维度、投影维度、注意力头数、分类阈值和融合权重未说明。
- 训练硬件：未说明。
- 推理细节：多数系统使用 multi-crop、score-level fusion、固定阈值或类别特定阈值；starfire 使用 BEATs 类型路由器选择分支和阈值；sonomsl 使用中值池化和 logistic regression 融合；Fosafer Track 2 使用 EAT-large 场景分类器预测类别特定阈值。具体阈值、滑窗步长和 crop 重叠方式未说明。
- 正则化或稳定训练技巧：包括 LoRA 冻结微调、DANN、GroupDRO、score-consistency MSE、RawBoost 增强、类别重平衡和条件匹配 real/fake 配对。

### ⚖️ 评分理由

*   创新性 (1.2/2)：[A_SUMMARY][A_METHOD] 论文将音频伪造检测从语音扩展到环境声、歌声和音乐，并用双赛道分别考察鲁棒语音与未知类型全音频检测；未见生成器、说话人池分离和多设备真实语音等设计增强了基准的挑战性。

*   技术严谨性 (1.0/1.5)：[A_METHOD] 数据集构建采用封闭设置，明确禁止外部ADD数据与progress/eval适配；在语音和歌声上分离说话人或源/目标歌手池，并加入OOD真实音频与信号扰动，泄漏控制与协议设计较完整。

*   实验充分性 (0.7/1.5)：[A_RESULTS][A_LIMITS] 论文给出双赛道前五系统的Progress/Eval Macro-F1排行榜，但未提供官方基线、统计显著性、错误分析或按生成器/扰动/音频类型细分结果；未见生成器仅给数量未给清单，progress占eval20%的协议也可能带来先验暴露，削弱对“robust/all-type”声明的细粒度支撑。

*   清晰度 (0.8/1)：[A_SUMMARY][A_METHOD] 论文对两赛道任务定义、数据组成、排行榜前五和主流系统设计模式描述清楚，表格和指标说明易读，未见明显组织或写作问题。

*   影响力 (1.0/1.5)：[A_SUMMARY] 该工作把音频深度伪造检测评估从语音扩展到环境声、歌声和音乐，并通过ACM MM挑战赛形式提供公开排行榜，对多类型音频安全和检测社区有实际参考价值。

*   开源 (0.5/1.5)：[A_OPEN] 作为数据集论文，其核心数据集在论文中未给出直接下载和授权协议，仅提供挑战官网入口，尚未形成可核验的完整开放核心产物，因此按固定锚点给0.5。

*   可复现性 (0.1/0.5)：[A_METHOD][A_OPEN] 论文虽给出任务定义、数据划分、部分模型结构和增强策略，但训练超参数、推理阈值、crop重叠、滑窗步长、损失权重、清洗规则和采样细节大量缺失，关键复现配置不充分。

*   工程/实践价值 (1.0/1.5)：[A_METHOD][A_RESULTS] 双赛道封闭评测、229,373条Track2评估量、26种未见生成器和真实声学扰动提供了有实战价值的测试场景，Top5系统设计模式归纳对工程实现有借鉴意义。

### 🚨 局限与问题

1. 论文明确承认的局限：论文指出未来版本应报告按生成器、扰动、音频类型和可复现性细节的细粒度结果；Track 1 仍面临未见生成器和真实声学/信道偏移挑战；Track 2 的整体性能可能掩盖不同音频类型间的难度差异。  
2. 审稿人发现的潜在问题：  
   - 评估集中的未见生成器只有数量描述，没有具体模型清单和生成设置，外部研究者无法判断真实难度或识别潜在重叠。  
   - 论文未报告任何 per-type 或 per-perturbation 细粒度结果，因此“all-type”和“robust”声明缺乏更精细证据支持。  
   - progress 子集占 eval 的 20%，虽禁止适应，但该设计可能增加对 eval 分布的先验暴露；封闭设置下无法验证参与者是否严格遵守。  
   - 论文未提供官方 baseline、统计检验或错误分析，结论主要依赖排行榜数字，难以区分系统差异的显著性。  
   - Track 2 各类音频数量和难度不均衡，单看总分可能掩盖声音/歌声/音乐等子类的性能塌陷。  
   - 数据清洗、音频时长、采样率、增强强度和生成器配置等细节缺失，使可复现性和难度评估受限。

---

[← 返回 2026-08-17 语音/音乐/音频论文速递](/audio-paper-digest-blog/posts/2026-08-17/)
