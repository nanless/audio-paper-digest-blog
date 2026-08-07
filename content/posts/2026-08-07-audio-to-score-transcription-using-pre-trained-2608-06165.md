---
title: "Audio-to-Score Transcription using Pre-trained Features, Data Augmentation, and the New SheetSage-A2S Dataset"
date: 2026-08-07
draft: false
tags: [音乐转录, Transformer, 预训练, 数据集, 基准测试]
categories: [论文速递]
description: "音乐转录 | 7.7/10"
hiddenInHomeList: true
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_arxiv_id: "2608.06165"
---

# 📄 Audio-to-Score Transcription using Pre-trained Features, Data Augmentation, and the New SheetSage-A2S Dataset

标签：#音乐转录 #Transformer #预训练 #数据集 #基准测试

**7.7/10** | 创新 1.2/2 | 严谨 1/1.5 | 实验 1/1.5 | 清晰 0.8/1 | 影响 1.2/1.5 | 开源 1/1.5 | 复现 0.3/0.5 | 工程 1.2/1.5

✅ **7.7/10** | 前25% | 文档类型：数据集与基准 | 评分置信度：中 | #音乐转录 | #Transformer | #预训练 #数据集 | [arxiv](https://arxiv.org/abs/2608.06165)


### 👥 作者与机构

- 第一作者：Eoin Cummins（University College Dublin）
- 通讯作者：Yaolong Ju（Great Bay University），电子邮箱：juyaolong@gbu.edu.cn
- 作者列表：Eoin Cummins（University College Dublin）、Zhongyi Huang（Guangxi Normal University）、Alexandre D’Hooge（Great Bay University）、Zhuoro Mo（Shenzhen University）、Yaolong Ju（Great Bay University）

### 💡 毒舌点评

SheetSage-A2S 数据集本身是 A2S 走向流行音乐真实录音的重要资产，61 小时、9,468 个片段的规模填补了该方向的数据空白；但模型侧本质是“换预训练编码器 + 扩大 FFN + 数据增强”的组合，实验虽然完整，却既未量化 MuQ 预训练数据与评估集的潜在重叠，也未与 MERT/MusicFM 等其他音乐基础模型做公平对比，因此“MuQ 是合适选择”的结论仍缺乏足够说服力。

### 📌 核心摘要

论文解决音频到乐谱转录（A2S）中缺乏流行音乐数据、以及现有方法依赖合成音频且未充分利用预训练模型与数据增强的问题。作者基于 SheetSage 标注与 YouTube 真实录音构建了 SheetSage-A2S 数据集：61 小时音频、9,468 个片段、6,066 首歌曲，并配有 `**kern` 格式的旋律与和弦主奏谱。模型侧以 Alfaro-Contreras 等人 2024 年的 CNN+Transformer 为基线，将解码器 FFN 从 256 扩大到 1024 并改为 Pre-Norm，用冻结的 MuQ 预训练特征替换 CNN 编码器，再加入移调与变速数据增强。在 Quartets 古典音乐基准上，SER 从基线 15.3% 降至 4.98%；在 SheetSage-A2S 流行音乐基准上取得 20.92% SER。消融显示 MuQ 与数据增强均带来显著提升。实际意义是提供首个面向流行音乐真实录音的 A2S 基准与可复现 pipeline；主要局限是标注来自用户生成内容、存在不一致，且受版权限制不直接分发音频文件。

### 🔗 开源详情

- 代码：https://github.com/Multimodal-Music-Research-Lab/SheetSage2Kern_model （论文声明数据集、模型、代码均

### 🏗️ 方法概述和架构

本文方法包含两条主线：一是 SheetSage-A2S 数据集构建流程，二是音频到 `**kern` 符号的转录模型。

整体流程上，数据构建流程的输入是 SheetSage 的 JSON 标注与 YouTube 音频链接，输出是“音频片段 + `**kern` 乐谱”配对；转录模型流程的输入是音频波形，输出是 `**kern` 符号序列。前者是典型的多阶段数据管线，后者是端到端的编码器-解码器生成系统。

数据集构建分三部分。第一部分是数据获取与对齐：作者从 SheetSage 提供的 HookTheory JSON 中获取 26,175 条标注，用 yt-dlp 下载得到 20,072 个音频片段；标注中的音符和和弦以音乐节拍为时间单位，作者使用 madmom 的节拍与下拍检测生成对齐函数 \(A:[0,B)\to[0,T)\)，将节拍映射到音频秒级时间。第二部分是八度推断：由于 SheetSage 的旋律音高是相对八度，作者先用 Mel-band Roformer 做歌声源分离，再对 RMS 能量大于 0.0005 的 16,310 个候选片段用 RMVPE 提取音高概率矩阵 \(P \in [0,1]^{T \times 72}\)（覆盖 C1-B6 的 72 个半音 bin）。为了确定绝对八度和起始时间，作者生成 12 个假设：6 个八度偏移 \(O \in \{0,1,2,3,4,5\}\) 乘以 2 个起始时间偏移 \(s\)（madmom 检测的下拍或用户定义起始点）。每个假设对应一个音符在 \(P\) 上的掩码 \(H(O,s)\)，并用掩码内的概率质量除以总音符时长得到置信度 \(C(H)=\frac{\sum_{(t,p)\in H}P(t,p)}{\sum_{n\in N}(t_{end,n}(s)-t_{start,n}(s))}\)，选择最大值对应的假设；置信度低于 0.2 的片段被丢弃，最终保留 9,468 个片段。第三部分是 `**kern` 转换：根据调号决定旋律音符的拼写；将和弦根音、音程内容与转位转换为 Harte 语法标签（如 `` `<root>:`<nature>`[/bass]` ``）；对旋律和和弦事件做时间对齐与节奏量化，最大分母为 96；最后生成包含 `**kern` 旋律 spine、`**cdata` 和弦 spine、头部元信息和尾部引用信息的 Humdrum 文件。

下图展示了 SheetSage-A2S 数据集从音频获取到最终 `**kern` 乐谱的整体构建流程。

![Figure 2. Overview of the SheetSage-A2S dataset creation pipeline, with three main steps that are introduced in detail at section 2. The confidence score CC measures how well a potential octave and starting beat align with RMVPE’s (Wei et a](https://arxiv.org/html/2608.06165v1/x2.png)

流程包括数据获取与对齐、基于歌声分离和 RMVPE 音高概率的八度推断，以及 Json2Kern 符号转换三个阶段；其中八度推断通过 12 个假设的置信度比较筛选出可靠的绝对音高。


模型架构方面，基线是 Alfaro-Contreras 等人 2024 年的 CNN 编码器 + Transformer 解码器：CNN 将单声道频谱图转为二维特征图，加二维位置编码后展平作为交叉注意力记忆，8 层 Transformer 解码器自回归生成 `**kern` 符号。本文的改进有三点。第一，将解码器 FFN 维度从 256 扩大到 1024，并将 Post-Norm 改为 Pre-Norm 以提升训练稳定性，得到“1024-PreNorm”基线。第二，用冻结的 MuQ 预训练模型替换 CNN 编码器：MuQ 输出频率为每秒 25 帧、维度为 1024 的隐状态序列，经线性投影和 LayerNorm 降到 256 维，再加入一维正弦位置编码作为解码器的交叉注意力记忆。MuQ 在 MARBLE 音乐理解基准上表现优异，且预训练于包含大量流行音乐的 Million Song Dataset（MSD），这解释了其在流行音乐上的更大增益。第三，对训练数据做离线数据增强：对每个训练样本生成 \(k \in \{-3,-2,-1,1,2,3\}\) 共 6 个移调版本，每个版本独立采样 \(s \in \{0.9,0.95,1.05,1.1\}\) 的变速因子，用 Rubber Band 实现；移调时同步移调目标 `**kern` 符号，SheetSage-A2S 的变速不修改目标符号，因为其符号采用相对时值、对速度不变；但对于 Quartets 数据集，变速后目标符号的 tempo 元数据会相应更新。原样本保留，训练集扩大 7 倍。

下图直观对比了基线模型与本文提出模型在编码器与解码器结构上的主要差异。

![Figure 5. Comparison of our proposed architecture against the baseline of (Alfaro-Contreras et al., 2024).](https://arxiv.org/html/2608.06165v1/x5.png)

与基线的 CNN 频谱编码器不同，本文使用冻结的 MuQ 提取音频特征，经线性投影与 LayerNorm 后送入解码器；同时解码器 FFN 维度由 256 扩大至 1024，并将 Post-Norm 改为 Pre-Norm。


关键设计选择包括：使用真实 YouTube 录音而非合成音频以提升泛化性；使用冻结 MuQ 以避免小数据集上微调过拟合，并借用其在大规模流行音乐上的自监督表征；数据增强用于缓解真实录音中音高、速度与演唱风格的变化。整体上，这是一个“数据管线 + 预训练特征 + 自回归解码”的组合式系统，工程性大于方法论上的原创性。

### 💡 核心创新点

1. 提出 SheetSage-A2S 数据集：这是首个面向流行音乐、使用真实商业录音的 A2S 数据集，包含 61 小时音频、9,468 个片段、6,066 首歌曲，并配有旋律与和弦的 `**kern` 主奏谱。已有数据集多为合成古典音乐音频，缺少真实录音和流行音乐，该数据集直接填补这一空白。
2. 设计基于源分离与音高概率假设检验的八度推断流程：利用 Mel-band Roformer 分离歌声、RMVPE 估计音高概率，再对 6 个八度候选和 2 个起始时间候选进行置信度比较，解决 SheetSage 相对八度标注无法直接用于 A2S 的问题。该流程以 0.2 置信度阈值过滤掉不可靠片段。
3. 将 MuQ 预训练音乐特征引入 A2S 编码器：替换原有 CNN 频谱编码器，使用冻结的 MuQ 隐状态并投影到 256 维作为交叉注意力记忆。相比 CNN，MuQ 提供了更强的音乐语义表征，在 SheetSage-A2S 上 SER 从 53.7% 降至 25.39%，在 Quartets 上从 8.48% 降至 7.16%。
4. 扩大并稳定 Transformer 解码器：将 FFN 从 256 扩至 1024、Post-Norm 改为 Pre-Norm，单这一项使 Quartets SER 从 15.3% 降至 8.48%，SheetSage-A2S 从 66.85% 降至 53.7%。
5. 引入移调与变速数据增强：对训练音频施加 ±1 到 ±3 个半音的移调和 0.9 到 1.1 的变速，同步处理目标符号（SheetSage-A2S 的变速不改变目标符号；Quartets 更新 tempo 元数据），使训练集扩大 7 倍；最终在 Quartets 上达到 4.98% SER，在 SheetSage-A2S 上达到 20.92% SER。

### 📊 实验结果

主要实验在 Quartets 古典音乐基准和 SheetSage-A2S 流行音乐基准上进行，采用词级 SER 作为主指标。下表保留主方法、最强基线与关键消融项，完整数据见论文 Table 2。

| 变体 | SheetSage-A2S SER | Melody SER | Chord SER | Quartets SER |
|---|---:|---:|---:|---:|
| Baseline（Alfaro-Contreras et al., 2024） | 66.85 | 106.88 | 64.12 | 15.3 |
| +1024-PreNorm | 53.7 | 90.56 | 51.8 | 8.48 |
| +MuQ encoder | 25.39 | 46.21 | 26.76 | 7.16 |
| +Augmented data | 20.92 | 38.62 | 22.28 | 4.98 |

在 Quartets 上，最终模型 SER 为 4.98%，相对本文复现的基线 15.3% 降低了 67.5%，被作者称为超过 Alfaro-Contreras 等人 2024 年的现有最优结果。在 SheetSage-A2S 上，最终 SER 为 20.92%；此前缺乏面向流行音乐真实录音的公开 A2S 基准，作者将其作为后续研究的强基准。细分旋律与和弦 SER 均随每个组件改进而下降，说明所有修改对旋律和和弦转录都有正向贡献。

下图给出了模型在一段流行音乐片段上的预测乐谱与真实乐谱的并排对比。

![Figure 6. Measures 5 to 7 from Love Live - Bokutachi wa Hitotsu no Hikari.12 It demonstrates that our best model can have trouble determining exact note-rest boundaries and non-triad chord labels.](https://arxiv.org/html/2608.06165v1/fmin7_version.png)

可见模型在音符与休止符的边界划分以及非三和弦标签（如 F:min7、Eb:sus4）上仍存在明显错误，反映出当前任务仍有较大挑战。


词级、中粒度和字符级三种 tokenisation 的消融在 MuQ 变体（未加数据增强）上进行：词级 SER 25.39%（token count 4763），中粒度 30.44%（224），字符级 33.97%（61）。论文归因于词级 tokenisation 在长序列上的序列长度优势。

论文未提供与 MERT、MusicFM 等其他预训练音乐模型的对比，也未提供统计显著性检验。所有 SER 均为 greedy decoding 结果。

### 🔬 细节详述

- 训练数据：
  - SheetSage-A2S：9,468 个片段，按艺术家分层 80%/10%/10% 划分训练/验证/测试；两个数据集在基线路径下音频重采样至 22,050 Hz，在 MuQ 路径下重采样至 24,000 Hz。
  - Quartets：沿用 Alfaro-Contreras 等人 2024 年的 70%/15%/15% 划分。
  - 数据增强：移调半音数 \(k \in \{-3,-2,-1,1,2,3\}\)，变速因子 \(s \in \{0.9,0.95,1.05,1.1\}\)，每个训练样本生成 6 个移调版本，每个版本随机采样一个变速因子，原始样本保留，训练集扩大 7 倍；工具为 Rubber Band。
- 损失函数：交叉熵损失；SheetSage-A2S 上使用 label smoothing=0.1；Quartets 上未说明是否使用 label smoothing。
- 训练策略：AdamW 优化器，weight decay=1e-3，学习率恒定为 5e-5，batch size=8；早停 patience=5，最小 delta=1e-3，保留验证损失最低的模型。论文指出这与原始训练设置（Adam、无 weight decay、lr 1e-4、batch size 1）不同，并通过经验测试发现新设置训练更稳定。
- 关键超参数：Transformer 解码器 8 层，FFN 维度 1024，Pre-Norm；MuQ 冻结，输出 1024 维隐状态，经线性投影和 LayerNorm 降至 256 维；MuQ 特征帧率 25 帧/秒，基线 CNN 特征约为 5.38 帧/秒；使用一维正弦位置编码。
- 训练硬件：论文未说明 GPU/TPU 型号、数量或训练时长，仅在致谢中提及计算资源由松山湖高性能计算中心（SSL-HPC）提供。
- 推理细节：greedy decoding；未使用 beam search、温度采样或流式设置。
- 正则化或稳定训练技巧：Pre-Norm、LayerNorm、label smoothing、早停、冻结预训练编码器。
- 数据集预处理的额外细节：madmom 节拍/下拍对齐；RMVPE 音高概率矩阵为 72 个半音 bin，覆盖 C1-B6；源分离工具为 Mel-band Roformer；歌词/旋律过滤基于歌声 RMS 能量阈值 0.0005；八度推断置信度阈值 0.2。
- 评估细节：SER 为 Levenshtein 编辑距离；Melody SER 和 Chord SER 排除制表符、换行等结构 token，因此可能超过 100%。

下图展示了 SheetSage-A2S 数据集的片段时长与推断绝对八度分布统计。

![Figure 4. SheetSage-A2S dataset statistics. (a) Clip duration, truncated at 100 seconds; (b) Inferred absolute octave.](https://arxiv.org/html/2608.06165v1/x4.png)

大多数片段时长集中在 20 秒左右，且旋律音高主要落在第 3 和第 4 八度，符合流行音乐主唱音域的常见分布。

### ⚖️ 评分理由

*   创新性 (1.2/2)：首个面向流行音乐真实录音的A2S数据集（61小时、9468片段、6066首歌）填补空白，基于源分离与RMVPE的八度推断也是可复用的数据构建创新；但模型侧主要是替换预训练编码器、扩FFN与数据增强的组合，创新增量有限。[A_SUMMARY][A_METHOD]

*   技术严谨性 (1.0/1.5)：八度推断的12假设置信度公式、阈值过滤和 **kern 转换流程定义清楚，整体方法逻辑自洽；但作为组合式系统，其严谨性主要依赖各组件的成熟度，故评1.0。[A_METHOD]

*   实验充分性 (1.0/1.5)：提供了基线与逐项消融并报告旋律/和弦细分；但缺少与MERT/MusicFM等其他预训练模型的对比、统计显著性检验、MuQ预训练重叠量化、同歌片段划分泄漏说明和阈值敏感性分析，结论稳健性不足。[A_RESULTS][A_LIMITS]

*   清晰度 (0.8/1)：数据管线三步骤、置信度公式和模型变体说明清楚，图示与表格辅助理解；但数据增强移调后目标**kern的调号是否同步更新等关键处理未说明，影响实现复读时的理解。[A_METHOD][A_LIMITS]

*   影响力 (1.2/1.5)：首个流行音乐真实录音A2S基准并给出20.92% SER强基线，Quartets上4.98%相对现有最优大幅下降，对后续A2S研究有直接推动作用；但领域集中在音乐转录子方向。[A_SUMMARY][A_RESULTS]

*   开源 (1.0/1.5)：代码、注释与预计算特征公开，但音频仅提供外部链接而未直接分发，核心数据产物只部分开放，因此按锚点给1.0而非满分。[A_OPEN][S_1][S_7]

*   可复现性 (0.3/0.5)：已披露优化器、学习率、batch size、早停和推理greedy等训练配置；但未报告GPU/TPU型号、数量与训练时长，且Quartets是否使用label smoothing未说明，关键复现信息仍有缺失。[A_METHOD][S_15]

*   工程/实践价值 (1.2/1.5)：数据获取、歌声分离、八度推断到**kern转换的pipeline完整可执行，冻结预训练特征加数据增强的训练方案也具备实用价值，工程组合是本文的主要贡献之一。[A_SUMMARY][A_METHOD]

### 🚨 局限与问题

1. 论文明确承认的局限：
   - SheetSage-A2S 标注来自用户生成内容，存在和弦标注粒度不一致、提前停止标注、偶尔记录伴奏、节奏粒度不统一、对滑音/装饰音的记法不一致等问题。
   - 八度推断当前只保留歌声旋律片段，乐器演奏的旋律片段被排除。
   - 数据集音频受版权限制不直接分发，只提供链接与预计算特征。
   - 现有 MV2H 评估工具不支持主奏谱格式，因此无法直接用于该数据集。
   - MuQ 预训练数据可能与 SheetSage-A2S 歌曲存在重叠，论文未量化该重叠程度。
2. 审稿人发现的潜在问题：
   - 论文声称 MuQ 优于 CNN，但没有与 MERT、MusicFM 等同样在 MARBLE 上表现优异的模型进行 A2S 任务对比，无法排除“任意强预训练模型都能带来类似提升”的替代解释。
   - 八度推断的质量验证规模较小（约 150 个片段），且没有给出置信度阈值 0.2 的敏感性分析；在被丢弃的片段中，可能仍有可用的低置信度数据。
   - 数据增强改变音高后，目标 `**kern` 的调号是否同步更新论文未说明；若只移调旋律/和弦音高而不改调号，可能引入不自然的离调样本。
   - 最终 SER 在高位（20.92%）说明任务仍有挑战性，但论文未分析预测错误中多大比例来自用户标注噪声、多大比例来自模型能力不足，这会直接影响基准的意义。
   - 缺少多次运行的标准差或显著性检验，4.98% 与 7.16% 等差异的稳健性未知。
   - 数据集按艺术家分层划分，但同一首歌可能包含多个片段（clip），论文未说明同一首歌的不同片段是否会被分到不同划分中；若歌词片段跨划分，可能造成数据泄漏，使基准结果偏乐观。

---

[← 返回 2026-08-07 语音/音乐/音频论文速递](/audio-paper-digest-blog/posts/2026-08-07/)
