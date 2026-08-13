---
title: "Luna-TTS Family Technical Report"
date: 2026-08-13
draft: false
tags: [语音合成, 扩散模型, 预训练, 流式处理, 强化学习]
categories: [论文速递]
description: "语音合成 | 6.9/10"
hiddenInHomeList: true
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_arxiv_id: "2608.11593"
---

# 📄 Luna-TTS Family Technical Report

标签：#语音合成 #扩散模型 #预训练 #流式处理 #强化学习

**6.9/10** | 创新 1.4/2 | 严谨 1/1.5 | 实验 1/1.5 | 清晰 0.8/1 | 影响 1.2/1.5 | 开源 0/1.5 | 复现 0.2/0.5 | 工程 1.3/1.5

✅ **6.9/10** | 前50% | 文档类型：系统技术报告 | 评分置信度：高 | #语音合成 | #扩散模型 | #预训练 #流式处理 | [arxiv](https://arxiv.org/abs/2608.11593)


### 👥 作者与机构

- 第一作者：论文标注 Feng Yin、Shuai Shi、Junjie Zheng、Kechenying Zhou 为共同第一作者
- 通讯作者：Yanmin Qian
- 作者列表：Feng Yin（VUI Labs Research）、Shuai Shi（VUI Labs Research）、Junjie Zheng（VUI Labs Research）、Kechenying Zhou（VUI Labs Research）、Yiqiu Wang（VUI Labs Research）、Chenyang He（VUI Labs Research）、Qiuhua Jiang（VUI Labs Research）、Mengxiao Bi（VUI Labs Research）、Yanmin Qian（VUI Labs Research）；其余贡献者 Mingxin Chen、Xun Gong、Tianteng Gu、Bing Han、Peng Jiang、Chenda Li、Haiyang Sun、Han Wang、Wei Wang、Yi Wang、Leying Zhang、Wangyou Zhang、Chushu Zhou（均标注 VUI Labs Research，论文按姓氏字母顺序列出，未给出更细部门信息）

### 💡 毒舌点评

这个报告最亮眼的地方是把 masked discrete diffusion 从学术方案推到了 1M 小时、四语言的 TTS 生产系统，并给出 41.6ms 首块延迟和极低 RTF 的清晰部署画像。但它更像一份产品技术报告：没有开源权重/代码，也没有 RL、annealing、duration predictor、block adaptation 等关键阶段的可控消融，读者很难判断 SOTA 数字究竟来自架构，还是来自数据与后训练的堆叠。

### 📌 核心摘要

论文针对 AR codec 语言模型在 TTS 中串行解码、误差累积以及被迫给 RVQ token grid 施加人为生成顺序的问题，提出 Luna-TTS Family。其核心方法是将预训练 AR 文本 LLM Qwen3-0.6B 通过渐进适应转换为 masked diffusion 语音模型：full-grid 双向掩码扩散得到离线版 Luna-TTS，再改为 block-causal 得到流式版 Luna-TTS Realtime；两者共享 Luna-Codec、0.6B backbone 与数据管线。与已有 masked-diffusion TTS 相比，该工作强调 1M 小时四语言规模化、统一 RVQ grid 的任意顺序去噪、原生语音编辑/克隆，以及 block 级流式扩散。主要结果是 Seed-TTS-Eval 上 test-zh 0.73 CER / 79.7 SIM、test-en 1.49 WER / 76.8 SIM，报告口径中全部四项均列对比系统第一；Realtime 端到端 RTF 0.0240、首块 1.28s 解码 41.6ms。实际意义是提供了一套离线与流式 TTS 的统一生产方案和部署性能画像。主要局限是未开源、关键训练阶段缺少组件级量化对比，韩语等长尾语言表现明显偏弱。

### 🔗 开源详情

- 代码：论文中未提及代码链接；唯一明确给出的项目主页为 https://vuilabs-ai.github.io/luna-tts ，但论文未直接提供 GitHub 等代码仓库地址。
- 模型权重：论文中未提及模型权重下载链接或 HuggingFace/ModelScope 地址。
- 数据集：论文中未提及具体公开数据集名称、下载链接或开源协议。仅描述了内部训练语料：约 1M 小时多语言语音，覆盖中文、英语、日语、韩语；Mandarin-English 为核心均衡数据，日语和韩语合计约 13.6%；数据分为 foundation pretraining、high-quality annealing、expressive annotated 等子集，但未公开获取方式。
- Demo：论文中未提及独立在线 Demo 链接；仅给出项目主页 https://vuilabs-ai.github.io/luna-tts ，可能作为入口但论文未明确说明。
- 复现材料：论文中给出了较多训练与推理配置，但未提供检查点、代码仓库或配置文件链接。具体信息包括：Luna-Codec 为 25 Hz、Q=8 的因果 RVQ codec，第一码本通过 WavLM 蒸馏进行语义锚定；backbone 为 Qwen3-0.6B，从因果注意力转为双向注意力再到块因果注意力；训练阶段包括 foundation pretraining（约 1M 小时、约 1.1 weighted epochs、约 100B packed speech-text tokens，学习率 cosine 从峰值 2.1e-4 降至 0.1× 峰值）、high-quality annealing（约 100K 小时高质量数据，约 1 epoch）、expressive continual pretraining（情感和 NVV 标注）、block adaptation（约 20K optimization steps）、以及基于 GRPO 的 RL post-training；推理方面 Luna-TTS 采用 16-step full-grid 单卡 H20 RTF 0.0211，Luna-TTS Realtime 采用 8-step parallel CFG 双卡 H20 RTF 0.0240，首块 1.28s 音频延迟 41.6 ms；评估使用 Seed-TTS-Eval、CV3-Eval，以及 Paraformer-zh、Whisper-large-v3、WavLM-large、ERes2Net 等工具。
- 论文中引用的开源项目：论文中提及以下开源或公开模型/工具，但均未在论文中提供链接：F5-TTS、Fast F5-TTS、OmniVoice、ZipVoice、VoxCPM2、Spark-TTS、Qwen3-TTS（12Hz/25Hz）、Qwen-Audio-3.0-TTS、MOSS-TTS-Local-Transformer、MaskGCT、CosyVoice 3、GLM-TTS、Fish Audio S2、SGLang-Omni、Qwen3-0.6B、WavLM、Whisper-large-v3、Paraformer-zh、ERes2Net。论文中唯一明确给出的链接是项目主页 https://vuilabs-ai.github.io/luna-tts 。

### 🏗️ 方法概述和架构

Luna-TTS Family 是一个两阶段生成系统：离散语音 token 化器 Luna-Codec 将波形映射为 25Hz、每帧 8 个 codebook（Q=8）的 RVQ token grid；扩散语言模型 backbone 以文本、可选 prompt grid 和带掩码的目标 grid 作为输入，并行预测被掩码 token，再经 codec decoder 恢复波形。

Luna-Codec 采用 24kHz 输入，经 strided causal 卷积编码器和轻量 causal Transformer bottleneck 编码为离散 token grid，解码器镜像结构且 frame-synchronous，支持 streaming 时按帧粒度输出。第一个 codebook 通过蒸馏 WavLM 表示而被语义化，剩余 codebook 捕获音色、韵律和信道细节。训练使用 400K 小时中英日韩语音，损失包括时域与多尺度 mel 重构、VQ commitment、multi-period/multi-resolution STFT 判别器对抗损失，并加入 quantizer dropout 以支持码率可扩展。最终 token 率为 200 tokens/s，有效码率约 2.2kbps。

统一掩码扩散部分将目标序列记为 \(X_0 \in \mathcal{V}^{T \times Q}\)，条件为 \(c = (y, P)\)，其中 \(y\) 为继承自 Qwen3-0.6B BPE 词汇表的文本 token，\(P\) 为可选的干净音频 prompt grid。前向过程按噪声水平 \(t \in (0,1]\) 独立以概率 \(t\) 将每个位置替换为 mask token。训练目标是加权并行去噪交叉熵，权重为 \(1/t\)，只对当前被 mask 位置计算 log likelihood。每帧 8 个 codebook embedding 求和为一个 frame-level 表示，使 Transformer 序列长度保持为 \(T\) 而非 \(TQ\)；输出端用 8 个并行分类头预测每个 codebook 的 token。文本 embedding、位置编码和文本头继承自 Qwen3-0.6B，音频 embedding 表和分类头为新增参数。情绪与 NVV 控制通过文本侧 token 实现（utterance-level emotion token 与 inline NVV token 直接进入文本条件），不引入额外 style encoder。

初始化路径为三阶段注意力转换：Qwen3-0.6B 的 causal attention 迁移为全序列 bidirectional attention，得到 Luna-TTS；再转换为 block-causal attention，得到 Luna-TTS Realtime。Luna-TTS 训练使用无结构约束的随机掩码，推理使用 \(S=32\) 或 \(S=16\) 步 confidence-based unmasking，带 cosine schedule、annealed Gumbel noise、top-k/temperature 截断以及 text-condition CFG。专用 duration predictor 是一个 Qwen3-0.6B 双向文本模型，按 token 预测 quantized duration，再求和得到目标帧数 \(T\)。Luna-TTS 的优势在于固定并行精炼预算、全网格并行执行，适合离线批处理、配音和数据合成；其约束在于每步前向仍需遍历完整目标网格、全序列形式排除了流式、必须在合成开始前确定全局时长。

Luna-TTS Realtime 将序列按 \(B=32\) 帧拆成 1.28s 的 block，保持块间自回归、块内并行去噪。训练时以 block-causal 方式对每一 block 独立采样噪声水平，推理时维护已提交 block 的 KV cache，当前 block 完成后经 codec 解码并流式输出；结束由学习到的 EOS 决定，并有最大长度保护。已提交 block 成为不可变上下文，当前 block 可反复精炼，实现了流式接口的因果递进与块内并行预测的分离。

RL 后训练使用 trajectory-aware policy optimization。生成轨迹 \(\tau = \{(s_k, M_k, a_k)\}\)，其中 \(M_k\) 是当前去噪步选择的 mask 位置，\(a_k\) 是并行采样出的 token 决策。策略比在 CFG 和 validity 约束下的有效 token 分布上计算，而非原始 left-to-right 因子分解上计算。奖励为组内相对优势，由 WER 与说话人相似度 SIM 进行 lexicographic rank，更新采用 GRPO 风格 token-level clipped surrogate。rollout 与 replay 在同一有效采样策略下评估。

系统部署通过 vLLM-Omni 栈，支持 Luna-TTS 全句离线批处理与 Luna-TTS Realtime 流式服务。CFG 可在单卡顺序执行，也可双卡并行执行，并保证双卡并行与单卡顺序输出字节一致。性能测量使用 H20，报告 first-block latency、full-response latency 与 end-to-end RTF。整体设计选择明确服务于两种生产负载：全并行面向吞吐，block-causal 面向交互流式。

### 💡 核心创新点

1. **从 AR 文本 LLM 到全并行扩散 TTS 再到 block-causal 流式 TTS 的渐进适应**。以往 masked-diffusion TTS 多是从头或小规模训练，或直接将 AR checkpoint 转换；该方法保留同一 0.6B backbone，通过 causal→bidirectional→block-causal 三阶段复用文本能力，并与同一 codec/data 形成两个部署点。论文明确声称 Luna-TTS Realtime 是首个由大规模扩散预训练支撑的流式 block-diffusion TTS，而非 AR checkpoint 的转换。
2. **将 RVQ 时间×深度 grid 作为无顺序对象统一掩码建模**。AR 系统必须用 delay pattern、depth-AR 或多码本预测头人为施加顺序；该工作用 unrestricted random masking 和任意顺序解码消除 codebook 轴上的顺序约束，并原生支持克隆、编辑等 infilling 行为。
3. **block-causal 流式扩散生成**。Luna-TTS Realtime 在 32 帧 block 内并行去噪、block 间自回归，支持 KV cache 和 1.28s 块级增量交付，避免逐 token AR 的串行开销；报告 41.6ms 首块延迟和 0.0240 RTF。
4. **针对 masked speech-token diffusion 的 RL 后训练**。将策略 ratio 定义在真实 denoising trajectory 的有效 token 分布上，而不是 AR 的 next-token factorization；奖励采用 WER/SIM 的组内 lexicographic rank，使 GRPO 可迁移到并行离散扩散 TTS。
5. **文本 token 作为情绪与 NVV 控制的统一控制通道**。不引入专用 style encoder 或控制头，utterance-level emotion token 与 inline NVV token 直接进入文本条件，简化了可控表达模型设计。

### 📊 实验结果

论文主要用 Seed-TTS-Eval 和 CV3-Eval 评估零样本 TTS，用 NV-Bench/NVV-SuperBench 与 ESD 评估表达控制，用内部 English TTS Arena 评估专用音色，并报告 H20 服务性能。表中保留主方法、最强基线与关键对比项。

| 系统 | zh CER↓ | zh SIM↑ | en WER↓ | en SIM↑ |
| --- | ---: | ---: | ---: | ---: |
| MiniMax-Speech | 0.83 | 78.3 | 1.65 | 69.2 |
| Qwen-Audio-3.0-TTS | 0.84 | 79.2 | 1.54 | 76.2 |
| OmniVoice | 0.84 | 77.7 | 1.60 | 74.1 |
| Qwen3-TTS-12Hz-1.7B-Base† | 0.98 | 76.9 | 1.68 | 71.7 |
| Luna-TTS Realtime | 1.08 | 76.9 | 1.81 | 73.4 |
| Luna-TTS | 0.73 | 79.7 | 1.49 | 76.8 |

| 系统 | zh | en | ja | ko | Avg. | hard-zh | hard-en |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| CosyVoice 3 | 3.91 | 4.99 | 7.57 | 5.69 | 5.54 | 9.77 | 10.55 |
| Qwen-Audio-3.0-TTS⋄ | 3.35 | 4.25 | 4.78 | 4.30 | 4.17 | 7.44 | 6.71 |
| Qwen3-TTS-12Hz-1.7B-Base† | 3.19 | 3.92 | 5.00 | 4.63 | 4.18 | 9.36 | 7.47 |
| Luna-TTS Realtime | 3.62 | 4.06 | 6.36 | 5.76 | 4.95 | 12.56 | 13.98 |
| Luna-TTS | 3.17 | 3.18 | 5.00 | 5.93 | 4.32 | 6.90 | 6.18 |

在 Seed-TTS-Eval 上，Luna-TTS 的 zh CER 为 0.73、en WER 为 1.49，SIM 分别为 79.7 和 76.8，论文声称四项均最佳。所有 WER/CER 均采用官方工具计算的 per-utterance 错误率未加权均值。CV3-Eval 中，Luna-TTS 的 zh 3.17 与 Qwen3-TTS 的 3.19 接近，en 3.18 为表中最低；hard-zh 6.90、hard-en 6.18 也低于对比系统，但 ja 5.00、ko 5.93 不及 Qwen-Audio-3.0-TTS 的 4.78、4.30；Avg. 4.32 位列对比表中第二，距第一 Qwen-Audio-3.0-TTS 的 4.17 仅差 0.15。CV3-Eval 的 SIM（ERes2Net）在六个评估子集上平均为 73.5。Realtime 在 Seed-TTS-Eval 上比 Luna-TTS 差约 0.3 CER/WER 和 3 SIM；在 CV3 hard 子集上差距显著拉大。

服务性能方面，Luna-TTS 16 步全网格生成全响应 216.0ms、RTF 0.0211；Luna-TTS Realtime 8 步双 H20 并行 CFG 首块 41.6ms、全响应 254.0ms、RTF 0.0240。Parallel CFG 相对 sequential CFG 在 16 步时降低全响应延迟 46.1%，在 8 步时降低 44.5%；16 步首块延迟从 98.9ms 降至 63.8ms，8 步从 59.6ms 降至 41.6ms。表达控制方面，Luna-TTS 在 NVV objective 的 PCER 39.95%、Recall 66.76%、F1 72.52% 均为对比系统中最优，但 Precision 79.38% 低于 ElevenLabs 的 87.45%。emotion 评估中 overall E-Sim 0.558 与 Expression Quality 4.54 为最高。Arena 中 Luna-TTS 以 1548.47 Elo 排第一，但与 Gemini 3.1 Flash TTS 的差距不显著。

论文未给出 RL 前后、duration predictor、block adaptation、annealing 的组件级消融数值；仅在正文声称 high-quality annealing 对 CV3-Eval 四语言平均 WER 有提升，但未给出具体前后数字。RL 后训练同样缺少优化前后的 WER/SIM 对比。

### 🔬 细节详述

- **训练数据**：内部 pipeline 四阶段构建约 1M 小时中英日韩语音；语言占比为 Mandarin 43.4%、English 43.1%、Japanese 6.7%、Korean 6.9%。原始录音经标准化、语言识别、VAD/说话人切分、ASR 转写和强制对齐、质量过滤、二次 ASR 交叉验证，然后经 Luna-Codec token 化。交叉验证在英文采用 word level，在中日韩采用 character level。另有约 100K 小时高质量 anneal 子集、表达性子集和内部专用音色数据。具体数据集名称、过滤阈值、去重规则、表达性数据规模未说明。
- **表达性数据构建**：表达性子集来自内部录音和公开表达性语料，涵盖角色扮演、脚本叙事、情感对话和自发语音。情感和 NVV 标注通过 Gemini 3.1 Pro Preview 与其他大型 audio-language models 联合完成，模型分歧、低置信度或复杂事件边界样本路由人工复核。最终标注格式包含 utterance-level 情感字段和 text-aligned NVV 事件序列，数据组成含情感专有、NVV 专有、联合标注和中性样本。具体标注池规模、类别数量、人工复核比例未给出精确数字。
- **损失函数**：Luna-Codec 使用时间域与多尺度 mel 重构损失、VQ commitment 损失、multi-period/multi-resolution STFT 对抗判别损失、第一 codebook 的 WavLM 蒸馏损失。扩散 backbone 使用式(2)加权 mask 交叉熵，掩码位置按 \(1/t\) 加权。RL 使用 GRPO clipped token-level surrogate，奖励由 WER 与 SIM 组合为组内 lexicographic rank。
- **训练策略**：foundation 从 Qwen3-0.6B 初始化，峰值学习率 \(2.1\times10^{-4}\)，cosine 调度到峰值的 \(0.1\times\)；约 100B packed speech-text tokens，约 1.1 weighted epochs。annealing 阶段在约 100K 小时池上训练约一个 epoch，从现有 schedule 的学习率继续退火至 \(0.1\times\) 峰值。block adaptation 约 20K optimization steps。优化器、batch size、warmup、梯度累积、混合精度、学习率 warmup 细节未说明。CFG 训练中文本条件在 foundation 阶段的 drop probability 为 0.1。
- **关键超参数**：模型 backbone 0.6B，继承 Qwen3-0.6B BPE；Luna-Codec 25Hz、Q=8、每 codebook 2048 项，约 2.2kbps。Luna-TTS 推理设置 \(S=32\) 或 \(S=16\)；Realtime block 大小 \(B=32\) 帧，即 1.28s。duration predictor 为 Qwen3-0.6B 双向 fine-tune，预测 quantized token durations。RL 中 G≥2 候选、组内优势；具体 clip 阈值、KL 约束、学习率未说明。
- **训练硬件**：论文未说明训练 GPU/TPU 型号、卡数、训练时长；仅给出推理 H20 性能。
- **推理细节**：Luna-TTS 使用 confidence-based unmasking、cosine schedule、annealed Gumbel noise、top-k/temperature 截断和 CFG。Realtime 支持单卡 sequential CFG 与双卡 parallel CFG，后者的条件/无条件分支并行执行且结果保持字节一致。服务栈为 vLLM-Omni；性能测量为 BF16、batch size 1、12 次 warmed runs 取中位数，排除网络传输。
- **正则化/稳定训练技巧**：Luna-Codec 有 quantizer dropout；训练文本条件随机 drop 以支持 CFG；数据质量过滤采用跨 ASR 一致性；high-quality annealing 逐步降低学习率；表达性持续预训练保留少量中性数据以维持内容准确性和说话人身份。未尽细节包括 EMA、检查点选择标准、损失权重、表达性数据中性混合比例等。

### ⚖️ 评分理由

*   创新性 (1.4/2)：[A_METHOD] 提出从Qwen3-0.6B因果注意力渐进转换为双向Luna-TTS再转为block-causal Realtime，将RVQ时间×深度grid作为无顺序对象统一掩码建模，并引入block级流式扩散与针对masked speech-token diffusion的轨迹级RL后训练，系统级组合创新明确。

*   技术严谨性 (1.0/1.5)：[A_METHOD] 对Luna-Codec损失、加权并行去噪交叉熵、三阶段注意力转换和block-causal训练/推理均有具体描述，RL策略比定义在有效token分布上的轨迹计算清晰，系统逻辑自洽，未发现明显算法硬伤。

*   实验充分性 (1.0/1.5)：[A_RESULTS][A_LIMITS] 覆盖Seed-TTS-Eval、CV3-Eval、NVV/emotion与H20服务性能，但对annealing、RL、duration predictor等组件级因果声明缺少量化对比，部分基线报告口径和SIM不可直接比较，且缺少失败案例与泄漏检测等压力测试，故扣分。

*   清晰度 (0.8/1)：[A_SUMMARY][A_METHOD] 摘要准确概括动机、方法、结果与局限，正文图1和分节描述使codec、扩散、block-causal与RL路径清晰，整体组织结构与表达良好。

*   影响力 (1.2/1.5)：[A_SUMMARY][A_RESULTS] 在Seed-TTS-Eval四项对比中全部第一，CV3-Eval中英文最低，并提供离线与流式统一生产方案和低延迟画像，对语音合成读者和工业部署具有直接参考价值。

*   开源 (0.0/1.5)：[A_OPEN] 论文未发布核心代码、模型权重或数据资源，也未给出明确的后续开源承诺。

*   可复现性 (0.2/0.5)：[A_METHOD][A_OPEN] 报告给出架构、25Hz Q=8、Qwen3-0.6B初始化、学习率与数据规模、推理配置等，但优化器、batch size、训练硬件及训练时长等关键配置缺失，第三方完整复现仍受限。

*   工程/实践价值 (1.3/1.5)：[A_METHOD][A_RESULTS] 通过vLLM-Omni支持离线全句与流式服务，双卡并行CFG保持字节一致，Realtime 8步双H20实现41.6ms首块延迟和0.024 RTF，工程部署画像明确且实用价值高。

### 🚨 局限与问题

1. **论文明确承认的局限**：
   - 韩语在 CV3-Eval 上 CER 为 5.93，是四种语言中最弱，可能与 6.9% 的韩语数据占比有关。
   - 语言覆盖仅限于中英日韩。
   - Luna-TTS 依赖外部 duration predictor 给定目标帧数。
   - Luna-TTS Realtime 使用固定 1.28s block，不随内容自适应；在 CV3 hard 子集上与 Luna-TTS 差距显著。

2. **审稿人发现的潜在问题**：
   - 论文在 §3.2 中声称 annealing 对 CV3-Eval 四语言平均 WER 有提升，但未给出分支点前后任何数字；同理 RL 后训练、expressive continual pretraining、block adaptation 均缺少组件级量化证据，导致 "SOTA 来自架构" 的归因不成立。
   - 闭环严重不足：无代码、无权重、无数据集，公开技术报告无法被第三方验证。
   - 部分对比不公平：表 8/9 中很多基线来自原始报告而非统一协议；SIM 指标在不同评测集和 embedding 模型下不可直接比较。
   - 延迟对比跨 H20/H100/RTX 4090/L20 等不同硬件，未做价格、显存或等价算力归一化；warmed batch-1 local protocol 不覆盖并发、排队和网络传输。
   - 表达控制评测中人类测试样本量、听者数量、统计检验方法未说明；Arena 中与 Gemini 的差异自述不显著。
   - 没有失败案例、codec 重建质量量化、RL 多样性降级、长句截断/复读错误等分析。论文声称 codec 重建质量 "in line with those of recent LLM-TTS systems"，但未提供任何客观或主观指标支撑。
   - 内部 1M 小时数据可能污染公开测试集，论文未提供泄漏检测或去测试集声明。
   - Realtime 的 EOS 学习机制在长文档和噪声 prompt 下的鲁棒性未得到充分压力测试，而 CV3 hard 子集上 12.56/13.98 的高错误率暗示该机制可能是不稳定性的主要来源之一。

---

[← 返回 2026-08-13 语音/音乐/音频论文速递](/audio-paper-digest-blog/posts/2026-08-13/)
