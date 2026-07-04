---
title: "Optimality of FSQ Tokens for Continuous Diffusion for Categorical Data with Application to Text-to-Speech"
date: 2026-07-04
draft: false
tags: [语音合成, 扩散模型]
categories: [icml-2026]
description: "语音合成 | 8/10"
hiddenInHomeList: true
---

# 📄 Optimality of FSQ Tokens for Continuous Diffusion for Categorical Data with Application to Text-to-Speech

#语音合成 #扩散模型

**8/10** | 创新 1.5/2 | 严谨 1.2/1.5 | 实验 1.2/1.5 | 清晰 0.8/1 | 影响 1.1/1.5 | 开源 0.5/1.5 | 复现 0.4/0.5 | 工程 1.3/1.5

🔥 **8/10** | 前25% | #语音合成 | #扩散模型 | [arxiv](https://openreview.net/forum?id=0uS3P0Dlh9)


### 👥 作者与机构

- 第一作者：Vadim Popov（Huawei Noah's Ark Lab, National Research University Higher School of Economics）
- 通讯作者：Vadim Popov（popov.vadim1@huawei.com）
- 作者列表：Vadim Popov（Huawei Noah’s Ark Lab, National Research University Higher School of Economics）、Wenju Gu（Huawei Noah’s Ark Lab）、Tasnima Sadekova（Huawei Noah’s Ark Lab, National Research University Higher School of Economics）、Georgii Aparin（Huawei Noah’s Ark Lab, National University of Science and Technology MISIS）、Assel Yermekova（Huawei Noah’s Ark Lab）

### 💡 毒舌点评

这篇论文巧妙地将 FSQ 的几何结构注入了连续扩散混合生成的理论框架, 从路径测度 KL 散度给出了一个漂亮的解释, 并用一套完整的 TTS 系统秀了肌肉。但理论的华美长袍下藏着“等先验”的致命伤疤, 一旦面对真实世界中不平衡的 token 分布, 所谓“最优性”可能瞬间沦为纸上谈兵, 而作者在实验中对此几乎是讳莫如深。

### 📌 核心摘要

- 问题：连续扩散在离散数据生成（CDCD）中, 其连续潜空间的结构如何影响模型训练与预测性能, 此前缺乏系统性的理论研究和原则性的设计指导。
- 方法核心：从扩散路径测度的 KL 散度出发, 将 token 嵌入的几何位置与反向扩散轨迹的可区分性建立联系, 证明 FSQ 码本在平均最近邻距离上局部最优, 并由此提出等先验下最优预测精度的假设。
- 新颖之处：首次从 KL 路径测度和预测精度的角度论证了 FSQ 方案对 CDCD 框架的“最优性”, 将其从单纯的量化技巧提升为有理论保障的潜空间设计准则。
- 主要实验结果：在 2-8 维随机码本搜索中, FSQ 的平均最近邻距离始终最优；TTS 任务上, CDCD-TTS (FSQ-original) 以 2.00% WER 大幅优于 CosyVoice2 的 2.57% WER, 主观/客观 MOS 达 4.119, 情感相似度 EMO 达 72.7%, 同时参数量减小约 10 倍、推理加速 5–10 倍。
| Model | WER | SIM | MOS | EMO |
|--------|-----|-----|-----|-----|
| CosyVoice2 (2024) | 2.57% | 0.652 | 4.077 | 72.2% |
| F5-TTS (2024) | 1.83% | 0.665 | 3.754 | 71.4% |
| CosyVoice3 (2025) | 1.68% | 0.695 | 3.937 | 72.7% |
| FSQ-original-25 (ours) | 2.00% | 0.653 | 4.119 | 72.7% |
- 实际意义：提出了一种比 LLM 小一个数量级、速度更快的新型非自回归 TTS 方案, 在零样本语音克隆任务上达到顶尖水平, 展示了 CDCD 作为 LLM 替代方案的巨大潜力。
- 局限性：理论最优性依赖理想的等概率先验和最优网络假设, 在真实数据分布下可能失效；FSQ-perturb 随去噪步数增加逼近原始性能, 暗示 FSQ 的几何优势对有限容量和少步数的模型更为显著。

### 🔗 开源详情

- 代码：https://github.com/li1jkdaw/CDCD-TTS （论文中声称将发布训练代码及最佳 TTS 模型 checkpoint）
- 模型权重：https://github.com/li1jkdaw/CDCD-TTS （与代码同一仓库，论文中未单独提供 HuggingFace 或 ModelScope 链接）
- 数据集：LibriLight (https://github.com/facebookresearch/libri-light)，GigaSpeech (https://github.com/SpeechColab/GigaSpeech)，Emilia (https://huggingface.co/datasets/amphion/Emilia)，SEED-TTS test-en (https://github.com/BytedanceSpeech/seed-tts-eval)。训练使用上述数据集的英文子集，论文未提供预处理后数据的直接下载链接。
- Demo：论文中未提及任何 demo 页面。
- 复现材料：论文附录 E 详细描述了 CDCD‑TTS 的文本条件模块、时长预测器和 DiT 等架构细节，并承诺在代码仓库中包含完整训练配置与最佳检查点，其余复现细节需待仓库内容公开。
- 论文中引用的开源项目：
  - CosyVoice2：https://github.com/FunAudioLLM/CosyVoice
  - F5‑TTS：https://github.com/SWivid/F5-TTS
  - seed‑tts‑eval：https://github.com/BytedanceSpeech/seed-tts-eval
  - UTMOS：https://huggingface.co/spaces/sarulab-speech/UTMOS-demo
  - emotion2vec：https://huggingface.co/emotion2vec
  - EnCodec：https://github.com/facebookresearch/encodec
  - HiFi‑GAN：https://github.com/jik876/hifi-gan
  - WavLM：https://github.com/microsoft/unilm/tree/master/wavlm

### 🏗️ 方法概述和架构

论文的核心方法论分两层：理论层 将 CDCD 潜空间几何与扩散轨迹差异挂钩；应用层 则基于此构建 FSQ-CDCD 驱动的文本到语音模型。

在理论层, 作者首先基于 DDPM 的 SDE 正向过程, 借助 Doob 变换推导了以任意两端点 a、b 为条件的扩散桥（Lemma 4.1）, 得到其反向时间 SDE。然后利用 Girsanov 定理, 计算出两条分别终止于 \(a_1\) 和 \(a_2\) 的反向扩散轨迹所对应的路径测度之间的 KL 散度（Statement 4.2）, 结果恰好正比于 \(\|a_1-a_2\|^2\) 与一个仅依赖扩散系数 \(\alpha_t, \sigma_t\) 的积分的乘积。这直接将“生成不同 token 的可区分度”量化为 token 嵌入间的欧氏距离。以此为基础, 定义平均最近邻距离 \(D(E)\), 并证明 FSQ 的 base2 和 base3 码本在 \(L_\infty\) 范数约束下对该度量是局部最优的（Theorem 4.3）。接着定义平均预测精度 \(A(E,t)\), 提出“最优精度假设”：在等先验概率下, FSQ 码本能最大化任意时刻 \(t\) 的 \(A(E,t)\), 并对 1 维情形给出了完整证明。

在应用层, 构建了 CDCD-TTS 模型。该模型选择性替换了 CosyVoice2 中的 LLM 文本到 token 模块, 保留其 flow matching token-到-梅尔和 HiFi-GAN 梅尔-到-波形后端。其前端流水线为：输入文本经字符级 tokenizer 嵌入, 通过 4 层 ConvNeXt v2（隐藏维 256）产生文本条件, 同时参考语音的 FSQ token 嵌入作为说话人/风格条件, 两者与带噪潜变量拼接, 送入 8 层 DiT（adaLN-zero 归一化, 8 注意力头, 内维 512, RoPE 位置编码）。DiT 的输出经 softmax 预测 6561 类 FSQ token 概率, 训练采用标准的 CDCD 交叉熵损失。一个关键的配套模块是统计性时长预测器, 它通过统计字符到 token 的映射和参考语速系数 \(\kappa\) 决定生成序列长度, 完全无需神经网络。推理时用 DDIM 求解 ODE, 配合无分类器引导（文本条件权重 0.5）, 并从扩大的先验 \(\mathcal{N}(0,(2/3)^2\mathbf{I})\) 采样, 以提升稳定性和音质。该设计将 CosyVoice2 的文本到 token 模块从自回归 LLM 变为非自回归 CDCD, 在保留零样本能力的同时, 获得了巨大的参数与速度优势。

### 💡 核心创新点

- KL 路径度量连接几何与生成难度：率先将 FSQ 嵌入布局与反向扩散轨道路径测度的 KL 散度建立显式关系, 揭示了最大化平均最近邻距离等价于最小化生成轨迹混淆度, 为潜空间设计提供了原则性的理论解释和可优化的度量。
- FSQ 码本的局部最优性与精度假设：在 \(L_\infty\) 约束下证明了 FSQ 码本在最近邻距离上的局部最优性, 并从预测精度角度提出了最优性猜想（1 维严密证明, 高维数值验证）, 将 VQ 编码从经验选择提升为理论引导的设计。
- CDCD-TTS：高效非自回归零样本语音合成：用轻量 DiT CDCD 替代 0.5B LLM, 在 65k 小时数据上训练出首个 CDCD 驱动的零样本 TTS, 性能超越对标的 LLM 基线（CosyVoice2）, 推理速度快 5–10 倍, 填补了该方向的应用空白。

### 📊 实验结果

论文在数值模拟和 TTS 两个层面进行了验证。

数值实验：在 \(L_\infty\) 约束下随机生成 10000 个码本, FSQ 的最近邻距离在 base2 (n=2,3,4,8) 和 base3 下均未被超越, 强烈支持其全局最优性。FSQ 预测精度在 2–4 维 base2/base3 码本对比中也始终最高（如 base2-2D：FSQ 38.18% vs. 最佳随机 37.39%）, 验证了最优精度假设。玩具生成任务中, 使用 FSQ 码本的 CDCD 模型 log-KL 优于扰动版本（base2: -9.55 vs -8.68; base3: -7.16 vs -6.72）, 证明了几何优势对模型训练的直接益处。

TTS 主实验（SEED test-en, 约 1000 句）：全面对比了 FSQ-original, FSQ-perturb, FSQ-permute 和 RVQ 四种 CDCD 变体及 CosyVoice2, F5-TTS, CosyVoice3。FSQ-original 在 5/8/12/25 步去噪下均全面领先对应扰动版, 且 25 步 FSQ-original 的 WER 达 2.00%, MOS 达 4.119, 优于 CosyVoice2 的 WER 2.57% 和 MOS 4.077。值得注意的是，25步时 FSQ-perturb 性能已接近 FSQ-original（WER 2.03% vs 2.00%）。FSQ-permute 和 RVQ 效果很差（WER 分别为 15.4% 和 21.3%）, 表明 token ID 与嵌入的映射关系以及嵌入维度至关重要。模型参数仅约 45M, 而 CosyVoice2 LLM 为 500M。

### 🔬 细节详述

- 训练数据：LibriLight, GigaSpeech, Emilia 英文子集, 合计约 65k 小时英语语音。
- 损失函数：负对数似然损失（交叉熵）, 使用公式 (4) 的 \(L_{diff}(\theta)\), 从 \(p(k|X_t,c)\) 采样计算。
- 训练策略：Adam 优化器, 最大学习率 1e-4, warmup, batch size 600s（8 GPU V100）, 训练 1.5M 步；RVQ 模型因嵌入维 128 将 batch size 降至 300s, 最大学习率降至 5e-5。
- 关键超参数：FSQ 码本为 base3 (8维, \(3^8=6561\) tokens), CDCD 潜维为 8, DiT 共 8 层, 上下文长度 1024（约 41 秒语音）。扩散噪声调度为线性, 总时间步 \(T=1\), 前向过程方差保持为 1。
- 训练硬件：8 张 V100 GPU, 未说明训练时长。
- 推理细节：DDIM 求解 ODE, 步数设为 5/8/12/25, 无分类器引导权重 0.5, 初始噪声从 \(\mathcal{N}(0,(2/3)^2\mathbf{I})\) 采样。
- 正则化/技巧：初始噪声方差扩大至 \((2/3)^2\)；字符级统计时长预测模块, 无需神经网络。

### ⚖️ 评分理由

*   创新性 (1.5/2)：将 FSQ 嵌入布置与 CDCD 的扩散路径 KL 散度、预测精度问题联系起来, 提供了一个比单纯“嵌入排列”更深刻的视角。通过理论引导模型设计（CDCD-TTS）构成了完整的创新闭环。但 FSQ 和 CDCD 框架本身均非首创, 核心增量在于对几何-性能关系的理论分析和应用, 尚未达到范式级突破。

*   技术严谨性 (1.2/1.5)：推导链条较为严密（Doob 变换→路径 KL→最近邻距离→局部最优性）, 1 维预测精度有完整证明。但关键的“最优精度假设”在高维上仅依赖数值实验支持, 且等先验条件过于理想化, 脱离实际；Theorem 4.3 仅证明了局部最优性, 对全局最优缺乏严格证明或反证, 留下明显的理论缺口。

*   实验充分性 (1.2/1.5)：数值实验设计精巧, 覆盖维度、码本大小、扰动类型等多个维度, 对理论形成有力支撑。TTS 实验基线丰富, 覆盖 LLM, flow-matching 等强基线, 消融研究也较为全面。然而, 实验的致命伤在于未触及理论的核心局限性——完全没有非等先验下的精度验证。此外, 仅评估英文单语种, 缺乏多语种或低资源场景的泛化性分析。

*   清晰度 (0.8/1)：论文结构和分析递进逻辑清晰, 公式定义明确。但部分关键假设（如等先验）在理论部分被快速带过, 其重要性和局限性未得到足够强调。Statement 4.2 的积分条件及其对噪声调度的依赖性未深入讨论, 主文对附录有一定依赖, 影响阅读流畅性。

*   影响力 (1.1/1.5)：为 CDCD 潜空间设计提供了可操作的几何准则, 在 TTS 领域成功展示了小型非自回归模型替代大 LLM 的可行路径, 对后续离散 token 生成模型有直接启发。但理论对等先验的强依赖限制了其在非均匀分布任务中的直接应用。论文未提出新数据集或基准, 其对纯 CDCD 方法论在更广泛领域的通用影响力仍需观察。

*   开源 (0.5/1.5)：论文中承诺将在指定 GitHub 仓库 (https://github.com/li1jkdaw/CDCD-TTS) 发布训练代码和最佳检查点, 但目前状态为“即将开源”, 无法确认内容是否已就绪。未提及模型权重或 Demo 页面, 故得分较低。

*   可复现性 (0.4/0.5)：论文给出了大部分超参、模型结构、学习率、batch size、GPU 类型、训练步数、FSQ 归一化方式、推理采样策略等关键信息, 复现可行性较高。但未提供训练/推理脚本模板, 统计性时长预测模块的构建细节（如统计语料库）未充分展开, 增加了复现摩擦。

*   工程/实践价值 (1.3/1.5)：建成了一条完整的 CDCD-TTS 流水线, 包含时序统计性时长控制、CDCD 训练、flow-matching 后端等, 展现了直接落地的工业潜力。参数量大幅缩减、推理速度显著提升, 对资源受限场景非常有吸引力。但模块替换设计使其依赖于 CosyVoice2 生态, 独立部署需额外整合工作。

### 🚨 局限与问题

论文明确承认的局限：理论分析假设等先验概率, 作者明确表示非均衡分布需要不同处理, 并留作未来工作。

审稿人发现的潜在问题：
- 全局最优性未证且难以证明：Theorem 4.3 是局部最优, 虽然随机搜索实验支持全局最优, 但并非严格证明, 且无法排除未来发现更优确定性结构的可能。
- 最优性的时效性：实验显示 FSQ-perturb 性能随推理步数增加迅速逼近 FSQ-original。这强烈暗示 FSQ 的几何最优性实际上是一种“训练不足”或“有限容量”下的最优策略, 在计算资源充足、推理步数极大的情况下可能不再重要。
- 先验假设的脆弱性：等先验是理论优美性的核心支柱, 但在真实语音 token 序列中, token 分布高度不平衡和上下文相关, 此假设不成立。作者虽承认但未提供任何过渡方案或修正项, 使得理论与实际存在鸿沟。
- 实验与理论脱节：TTS 实验证明了 FSQ 优于随机打乱和 RVQ, 但未能设计实验直接验证或证伪基于 KL 散度或预测精度的理论机制在实际 TTS 系统中发挥了多大作用。对照组（FSQ-perturb）的扰动方式是否足以构成“非最优”几何的有力替代也是可商榷的。
- 评测局限性：TTS 评测仅在英文单语种的标准测试集上进行；用于衡量自然度的 MOS 使用 UTMOS 代理, 并非真实人类主观评价；未探究在不同口音、噪声背景下的鲁棒性。
- 与 SOTA 的差距：论文主推的 CDCD-TTS 在 WER, SIM 等指标上仍未能超越一些最新的模型（如 F5-TTS, CosyVoice3）, 其最大卖点更多是在效率和模型尺寸上实现的性能均衡。

---

[← 返回 ICML 2026 论文速递](/audio-paper-digest-blog/posts/icml2026-summary/)
