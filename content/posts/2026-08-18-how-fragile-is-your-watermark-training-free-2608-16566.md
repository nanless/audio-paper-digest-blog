---
title: "How Fragile Is Your Watermark? Training-Free Structural Removal of Neural Audio Watermarks"
date: 2026-08-18
draft: false
tags: [音频水印, 鲁棒性, 基准测试]
categories: [论文速递]
description: "音频水印 | 7.6/10"
hiddenInHomeList: true
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_arxiv_id: "2608.16566"
---

# 📄 How Fragile Is Your Watermark? Training-Free Structural Removal of Neural Audio Watermarks

标签：#音频水印 #鲁棒性 #基准测试

**7.6/10** | 创新 1.2/2 | 严谨 0.9/1.5 | 实验 1/1.5 | 清晰 0.8/1 | 影响 1/1.5 | 开源 1.2/1.5 | 复现 0.3/0.5 | 工程 1.2/1.5

✅ **7.6/10** | 前25% | 文档类型：方法研究 | 评分置信度：中 | #音频水印 | #鲁棒性 | #基准测试 | [arxiv](https://arxiv.org/abs/2608.16566)


### 👥 作者与机构

- 第一作者：Likhith Kumara（Indian Institute of Technology Madras, Chennai, India）
- 通讯作者：未说明（论文仅有一名作者，未标注通讯作者）
- 作者列表：Likhith Kumara（Indian Institute of Technology Madras, Chennai, India）

### 💡 毒舌点评

亮点在于把“先诊断后攻击”做成了一套便宜、可解释、训练无关的结构探针，并在十种音频水印方案上给出了自洽的脆弱/鲁棒分层；但攻击本身仍是已有扰动类的复用，且同步攻击因缺少有效质量指标被整体回避，使“how fragile”的答案对同步失真场景和部分低质量嵌入场景仍不完整。

### 📌 核心摘要

该论文解决音频水印鲁棒性评估中“固定盲扰动集忽略方案差异”的问题，提出从少量 clean/watermarked 对中诊断水印嵌入域，再选择匹配攻击。其方法是训练无关的四个结构探针：Concentration、Coherence、Estimability、Linearity，分别表征窄带载波、频率冗余、普适模板和载荷线性轴。相比传统盲目对每个方案施加同一扰动电池，该方法把去除归因于结构诊断，并且不访问解码器、不训练任何网络。在十个方案、五种内容类型、每方案 100 个片段上，匹配攻击以接近透明质量移除多个脆弱方案：WavMark 载荷降至 5.9%、SilentCipher 降至 10.3%、audiowmark 降至 48.4%，AudioSeal 检测标志降至 0.05。同时，VoiceMark、WMCodec、AWARE、AlignMark 等 latent 域标记在训练无关攻击下保持低脆弱性，脆弱分仅 0.27–0.39。论文还提出阈值无关的准确率-质量前沿脆弱性分数，并以同一探针特征实现 83.7% 的方案识别准确率。其主要局限是排除同步攻击、PESQ/ViSQOL 有效性受限，以及设计建议未经验证为防御方案。

### 🔗 开源详情

- 代码：https://github.com/i-618/audio-watermark-fragility（论文脚注给出的代码仓库）
- 模型权重：论文中未提及
- 数据集：论文使用 LibriSpeech、VCTK、MUSDB18、VocalSet，以及由 XTTS-v2 / F5-TTS / CosyVoice 2 生成的合成语音集；论文中未提供这些数据集的下载链接或开源协议
- Demo：论文中未提及
- 复现材料：论文提供代码仓库 https://github.com/i-618/audio-watermark-fragility；文中报告了实验设置（例如 probe 查询预算为每 clip 39 次编码器调用、攻击拟合最多 150 次编码器查询、N=100 测试 clip），但未提供训练配置或检查点（方法为训练自由）
- 论文中引用的开源项目：audiowmark、AudioSeal、SilentCipher、Timbre、VoiceMark、AlignMark、WMCodec、DNN-AWM、WavMark、AWARE；数据集/工具 LibriSpeech、VCTK、MUSDB18、VocalSet、XTTS-v2、F5-TTS、CosyVoice 2、PESQ、ViSQOL（论文中均未给出这些第三方项目的 URL）

### 🏗️ 方法概述和架构

整体流程：该文提出的是一个“诊断—匹配攻击—量化脆弱性”的评估框架，而不是训练一个去除网络。输入是成对的干净音频和水印音频，允许黑盒查询水印编码器；输出是对水印嵌入域的判定、匹配的去除攻击结果，以及阈值无关的脆弱性分数。整个过程不访问解码器、不需要梯度更新，属于训练无关、编码器查询受限的流水线。

威胁模型与查询预算：假设攻击者可访问黑盒水印服务，能提交自选音频并获得水印版本。每个探针使用固定编码器调用次数：Concentration 用 1 次，Coherence 用 \(M=14\) 次，Estimability 用 \(A=3\) 次，Linearity 用 \(C\times(1+6)=21\) 次，总计 39 次。攻击拟合是一次性开销：subtraction 变体 15 次，estimation footprint 150 次，band-stop/band-sweep 无需额外拟合。论文还声称降低 \(M\) 到 4、每种内容类型仅用一个 clip 时，探针到攻击的分配不变，总查询约 145 次，而非原始配置的约 3,900 次。

四个结构探针：对所有探针，以 \(r=y-h\) 表示干净/水印对残差，\(\hat{r}\) 表示其 DFT，\(V_m\) 表示消息 \(m\) 下时间平均残差 STFT 幅值。

第一，Concentration 计算残差能量在最集中频带中的占比：将 \(P[f]=|\hat{r}[f]|^2\) 按 \(F\) 个频点均分为 16 个频带，取最大带内能量与总能量之比。高 Concentration 表明水印是窄带载波，匹配 band-stop 陷波攻击。

第二，Coherence 评估载荷码是否跨频带一致可恢复。它将 \(M\) 条消息的 \(V_m\) 堆叠成 \(M\times F\) 矩阵 \(D\)，对 \(F\) 频点分成 \(K\) 个频带，对每个频带取 \(D\) 在该频带上的 top-\(\kappa\) 左奇异向量 \(U_b\)，然后计算不同频带子空间间的平均 \(\frac{1}{\kappa}\|U_b^\top U_{b'}\|_F^2\)。该值高于 \(\kappa/M\approx 0.14\) 的概率水平时，表示存在频域冗余编码，单一陷波会留下可解码子带，因此匹配 band-sweep 而非 notch。

第三，Estimability 判断是否存在可跨 clip 迁移的宿主无关幅值模板。对每个 clip 构造单位残差幅值 footprint \(v_i\)，先投影掉平均宿主包络方向 \(\bar{H}\)，得到 \(R_i=v_i-(v_i^\top \bar{H})\bar{H}\)，再计算 \(\hat{R}_i\) 之间的平均余弦相似度。高 Estimability 表示存在一个可从少量配对中估计的普适加性载波，匹配 template subtraction。

第四，Linearity 评估嵌入对载荷位的加性线性程度。对第 \(i\) 个 bit 和上下文消息 \(m^{(c)}\)，定义单 bit 翻转增量 \(\delta_i^{(c)}=\mathrm{embed}(x,m^{(c)}\oplus e_i)-\mathrm{embed}(x,m^{(c)})\)，计算同一 bit 在不同上下文间增量的绝对 cosine 平均。高 Linearity 表示存在上下文无关线性轴，适合 estimation–subtraction 攻击。

联合签名与匹配攻击：论文不依赖单探针阈值，而是把四个探针读成联合签名，将方案归入窄带载波、频率冗余、普适模板、线性载荷轴等原型。例如 AudioSeal 主要走 Concentration，DNN-AWM 主要走 Coherence，WavMark/audiowmark/SilentCipher/AudioSeal payload 走 Estimability，Timbre 走 Linearity。匹配攻击包括幅值模板减法、RMS 加权减法、估计减法、band-stop、band-sweep 低通滤波等。论文强调先按原型分类，再通过运行攻击验证，而不是单一探针硬阈值判定。

下图展示了十个音频水印方案在四个结构探针（Concentration, Coherence, Estimability, Linearity）上的签名值热力图，直观呈现了探针如何区分脆弱组与鲁棒锚点。

![Figure 2: Structural probe signatures per scheme (pair-only, no attack run; means over N=100N{=}100 clips/scheme,](https://arxiv.org/html/2608.16566v1/probe_signatures.png)

图中左侧脆弱组（如AudioSeal、WavMark）的探针值较高，表明它们存在易被利用的嵌入域特征；右侧鲁棒锚点（如WMCodec、VoiceMark）的探针值普遍较低，预测其对训练无关攻击的抵抗性。探针签名也用于方案识别，支持诊断与匹配攻击框架。


脆弱性评分：匹配攻击按强度 \(\alpha\in\{1,\dots,16\}\) 扫描，得到质量-准确率前沿。将质量 \(Q\) 归一化到 \(\hat{q}\in[0,1]\)，论文使用 \(\hat{q}=(\mathrm{PESQ}-1)/3.5\)；将 bit accuracy 归一化为 \(\hat{a}=(\mathrm{acc}-\mathrm{chance})/(\mathrm{clean}-\mathrm{chance})\)，其中 \(\mathrm{chance}=50\%\)，\(\mathrm{clean}\) 为攻击前准确率。定义前沿 \(a^*(q)=\min\{\hat{a}:\hat{q}\ge q\}\)，计算前沿下面积 \(R=\int_0^1 a^*(q)\,dq\)，脆弱性 \(\mathrm{fragility}=1-R\)。脆弱性 1 表示近透明质量下擦除消息，0 表示鲁棒。

结构识别：随机森林以每 clip 的 Concentration、Coherence、Linearity 为特征，Estimability 被排除以避免作为 per-scheme 常数造成标签泄漏；按宿主 clip 分组交叉验证，得到 83.7% 的十类方案识别准确率，说明探针签名确实携带嵌入结构信息。

该框架属于非训练评估方法，因此没有神经网络架构、损失函数或训练阶段；其核心“架构”是探针计算、联合签名匹配、攻击执行和前沿积分四个模块的串行流水线。各模块之间以标量探针值和攻击超参传递，签名匹配和攻击强度扫描形成条件分支，无需任何参数更新。数据流为：clean/watermarked 对 → 残差 → 四个结构探针 → 联合签名 → 匹配攻击 → 准确率-质量前沿 → 脆弱性分数；同一批探针特征也用于方案识别。

### 💡 核心创新点

1. **先诊断后移除的音频水印攻击框架**：之前 AudioMarkBench、RAW-Bench 等对每个方案施加固定扰动集，论文改为从 clean/watermarked 对计算结构探针，先判断嵌入域再选择匹配攻击。该思路把攻击有效性归因于诊断而非盲扫。

2. **四个可解释的训练无关结构探针**：Concentration、Coherence、Estimability、Linearity 分别覆盖窄带载波、频域冗余、普适模板和线性载荷轴，且都不用运行攻击即可计算。相比训练去除网络，该探针成本极低，并可直接反推水印设计缺陷。

3. **阈值无关的脆弱性分数**：将脆弱性定义为准确率-质量前沿上方区域面积，避免仅报告某固定质量下的 bit accuracy。这样能区分“高质量下被擦除”和“质量被破坏后才失效”的不同脆弱模式。

4. **跨十个方案的统一脆弱/鲁棒分层与结构识别**：实验覆盖幅度域、声码器域、codec/latent/speaker 域和经典工具 audiowmark，显示多条脆弱方案可被近透明攻击移除，而 latent 域锚点抵抗训练无关攻击；同一探针特征还达到 83.7% 方案识别准确率。

5. **受限查询预算与极低计算开销**：攻击拟合至多 150 次编码器调用，后续对目标 clip 不再额外查询解码器或编码器；单 clip 推理成本约 17 MFLOP，远低于训练式 HarmonicAttack 的 233 GFLOP，实用性更强。

### 📊 实验结果

论文在 LibriSpeech、VCTK、MUSDB18、VocalSet 和由 XTTS-v2 / F5-TTS / CosyVoice 2 合成的语音集上评测，共五种内容类型、每方案 100 个测试 clip，片段为 4 秒、mono、峰值归一化。质量指标为 PESQ（仅语音内容 \(N=60\)）和 audio-mode ViSQOL（全部内容）。论文没有设置传统“固定盲扰动集”基线作为直接定量对照，而是以方案间匹配攻击与脆弱性比较为核心，并与训练式 HarmonicAttack 的计算成本做对比。

主要移除结果如下：WavMark 在模板减法后 bit accuracy 降至 \(5.9\pm4.6\%\)，检测标志 0.06，PESQ 4.17，ViSQOL 4.47，脆弱性 0.87。SilentCipher 在 RMS 自适应减法后 bit accuracy 降至 \(10.3\pm4.1\%\)，PESQ 3.84，ViSQOL 4.22，脆弱性 0.84。audiowmark 模板减法后 bit accuracy \(48.4\pm2.9\%\)，检测 0.00，PESQ 4.22，ViSQOL 4.62，脆弱性 0.85。AudioSeal 在 band-stop 后检测降至 0.05，但 bit accuracy 仍 \(60.7\pm2.8\%\)，PESQ 3.62；其模板减法可使检测降到 0.01、bit accuracy 降至 \(52.4\%\)，PESQ 3.89，ViSQOL 4.63。DNN-AWM 只有 band-sweep 有效，bit accuracy 降至 \(58.9\pm3.6\%\)，但检测仍为 1.00，PESQ 3.34，ViSQOL 3.36，脆弱性 0.62。Timbre 估计减法仅将 bit accuracy 降至 \(62.6\pm1.2\%\)，检测仍为 1.00，PESQ 3.99，脆弱性 0.74。

鲁棒锚点方面，WMCodec、VoiceMark、AWARE、AlignMark 的匹配减法虽分别得到 \(57.4\%\)、\(61.9\%\)、\(81.0\%\)、\(61.3\%\) bit accuracy，但 PESQ 分别低至 1.47、1.52、2.39、1.69，说明仅在质量被明显破坏后才发生部分降准，对应脆弱性 0.27、0.28、0.38、0.39。

方案识别实验使用随机森林、按宿主 clip 分组交叉验证，在十类方案上达到 83.7% 分类准确率，机会水平约 10%；主要混淆对为 audiowmark↔WMCodec、AlignMark↔VoiceMark。论文还报告降低 Coherence 预算 \(M\) 从 14 到 4、每内容类型仅用一个 clip 时，探针到攻击分配不变，查询约从 3,900 降到 145。

以下表保留全部十个方案及关键结果：

| 方案 | 匹配攻击 | bit-acc | det | PESQ | ViSQOL | fragility |
|---|---:|---:|---:|---:|---:|---:|
| audiowmark | 模板减法 | 48.4±2.9 | 0.00 | 4.22 | 4.62 | 0.85 |
| WavMark | 模板减法 | 5.9±4.6 | 0.06 | 4.17 | 4.47 | 0.87 |
| AudioSeal | band-stop | 60.7±2.8 | 0.05 | 3.62 | 4.55 | 0.80 |
| SilentCipher | RMS自适应减法 | 10.3±4.1 | 0.20 | 3.84 | 4.22 | 0.84 |
| DNN-AWM | band-sweep | 58.9±3.6 | 1.00 | 3.34 | 3.36 | 0.62 |
| Timbre | 估计减法 | 62.6±1.2 | 1.00 | 3.99 | 4.30 | 0.74 |
| WMCodec | 模板减法 | 57.4±2.1 | 1.00 | 1.47 | 3.27 | 0.27 |
| VoiceMark | 模板减法 | 61.9±2.6 | 0.54 | 1.52 | 3.50 | 0.28 |
| AWARE | 模板减法 | 81.0±2.5 | 0.09 | 2.39 | 4.28 | 0.38 |
| AlignMark | 模板减法 | 61.3±2.6 | 1.00 | 1.69 | 3.77 | 0.39 |

### 🔬 细节详述

- **训练数据**：论文不训练任何神经网络，没有训练集、损失函数或优化器。评测数据使用公开 LibriSpeech、VCTK、MUSDB18、VocalSet，以及由 XTTS-v2、F5-TTS、CosyVoice 2 合成的语音集，每类 20 个测试 clip，4 秒、mono、峰值归一化；每方案共 100 个测试 clip（20 每内容类型 × 5 内容类型）。
- **损失函数**：论文中未使用训练损失；攻击中的估计和减法均为闭式操作，不涉及损失函数。
- **训练策略**：论文为训练无关攻击评估，因此没有学习率、warmup、batch size、优化器、训练步数等配置。
- **关键超参数**：Concentration 分 16 个等宽频带；Coherence 使用 \(M=14\)，top-\(\kappa\) 左奇异向量，chance level \(\kappa/M\approx0.14\)；Estimability 使用 3 个 clip；Linearity 使用 3 个上下文、每上下文 6 次 bit-flip，即 \(C\times(1+6)=21\)；攻击强度扫描 \(\alpha\in\{1,\dots,16\}\)；DNN-AWM 低通截止 2.25 kHz；AudioSeal concentrated band 约 1.25 kHz。脆弱性质量归一化为 \(\hat{q}=(\mathrm{PESQ}-1)/3.5\)，chance=50%。\(K\) 和 \(\kappa\) 的精确值未在正文明确给出。
- **训练硬件**：未说明。
- **推理细节**：攻击只使用 fit 后的模板、滤波器或 footprint，不再调用解码器；解码器仅用于 bit accuracy 评分。攻击后保留相位；Timbre 估计减法对每帧幅值做估计并扣去 footprint。论文报道单 clip 攻击成本约 17 MFLOP，对比 HarmonicAttack 的 233 GFLOP。
- **正则化或稳定训练技巧**：未说明；但攻击中有投影掉平均宿主包络方向 \(\bar{H}\) 来减少宿主相关性。
- **方案识别细节**：随机森林特征为每 clip 的 Concentration、Coherence、Linearity；Estimability 因是 per-scheme 常数、会导致标签泄漏而被排除。

### ⚖️ 评分理由

*   创新性 (1.2/2)：[A_METHOD] 提出训练无关的“诊断—匹配攻击”框架和四个可解释结构探针，并将去除归因于嵌入域诊断而非固定盲扰动集；[A_SUMMARY] 还给出阈值无关脆弱性分数，创新明确但攻击本身复用已有扰动类。

*   技术严谨性 (0.9/1.5)：[A_METHOD] 四个探针定义、联合签名和脆弱性积分的归一化逻辑自洽，避免单探针硬阈值；[A_LIMITS] 明确同步攻击排除与脆弱性下界，未发现明显推导或系统逻辑错误。

*   实验充分性 (1.0/1.5)：[A_RESULTS] 覆盖十种方案、五种内容类型、每方案100片段并给出置信区间和脆弱性前沿；但[A_LIMITS] 缺少盲扰动集对比、方案识别简单基线、主观感知指标及参数敏感性分析。

*   清晰度 (0.8/1)：[A_METHOD] 以诊断、匹配攻击、脆弱性量化串行组织，四探针公式和攻击选择有较完整解释；[A_SUMMARY] 概念密度较高，联合签名到攻击匹配依赖表格，非专家可读性有提升空间。

*   影响力 (1.0/1.5)：[A_SUMMARY] 对十种音频水印方案给出脆弱/鲁棒分层和阈值无关分数，对音频水印安全评估有参考价值；[A_LIMITS] 设计建议未经验证为防御方案，训练无关鲁棒不等于最终安全，影响上限受限。

*   开源 (1.2/1.5)：[A_OPEN] 提供代码仓库链接，核心方法实现开放，但未说明仓库文档完整性，按核心产物开放但文档不完整锚点给1.2。

*   可复现性 (0.3/0.5)：[A_METHOD] 探针公式、查询预算、攻击强度扫描和实验设置大多披露；但K、κ等关键值未明确，硬件配置未说明，[A_OPEN] 部分数据集/工具下载链接未提供，给0.3。

*   工程/实践价值 (1.2/1.5)：[A_METHOD] 黑盒查询预算低（每clip39次、攻击拟合最多150次），无需训练；[SCORING_SOURCE_1/1] 单clip约17MFLOP，显著低于HarmonicAttack的233GFLOP，适合实际部署前自审计。

### 🚨 局限与问题

- 同步攻击被排除，因为 PESQ 和 audio-mode ViSQOL 内部会做时间对齐，无法可靠评价去同步失真；因此脆弱性分数只覆盖能量/幅值域攻击。
- Fragility 是基于当前扫描攻击库的下界，并非最坏可移除性；AudioSeal 的模板减法在 like-for-like sweep 下可达 0.87±0.03，高于表列 notch 的 0.80，说明分数依赖所用攻击，而表列值反映最便宜攻击的下界。
- latent-domain 锚点可能被训练式去除网络（如 HarmonicAttack）击败，训练无关鲁棒不算最终安全。
- 设计启示（避免 Concentration/Coherence/Estimability/Linearity）是 reverse implication，并未作为防御方案训练或验证。
- 歌唱内容上鲁棒 latent 标记因 clean−chance 分母缩小而显得异常脆弱，属于嵌入弱而非攻击有效。

### 审稿人发现的潜在问题
- 论文没有做“盲扰动集 vs 匹配攻击”的直接对比实验，虽然声称盲扫错过方案差异，但未证明同一质量预算下盲扫确实不能达到匹配攻击的移除效果。
- 方案识别只报了 83.7% 准确率，没有与简单特征基线（如残差能量、频谱质心）或 Majority/线性分类器比较，不易判断 83.7% 的含金量；Estimability 被排除后，也未报告加入该特征是否会造成标签泄漏或提升准确率。
- 对 Timbre，bit accuracy 降至 62.6% 但检测标志仍为 1.00，论文未深入解释该 payload/presence split 的实际安全含义；若系统只依赖检测，该攻击可能被高估为有效移除。
- 缺少主观试听或更多感知指标；PESQ 仅用于语音，band-sweep 在音乐上的 ViSQOL 仅 2.78，说明单一质量指标和语音评估不适用于所有攻击和内容类型。
- 某些攻击参数（如 low-pass 2.25 kHz、notch 约 1.25 kHz）似乎是手动选择，缺少对截止频率和带宽的更细扫描或敏感性分析。

---

[← 返回 2026-08-18 语音/音乐/音频论文速递](/audio-paper-digest-blog/posts/2026-08-18/)
