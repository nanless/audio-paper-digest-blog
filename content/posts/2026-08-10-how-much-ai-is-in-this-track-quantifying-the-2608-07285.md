---
title: "How Much AI Is in This Track? Quantifying the Proportion of AI-Generated Stems in Hybrid Music Mixtures"
date: 2026-08-10
draft: false
tags: [音频伪造检测, CNN, 模型评估]
categories: [论文速递]
description: "音频伪造检测 | 8.3/10"
hiddenInHomeList: true
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_arxiv_id: "2608.07285"
---

# 📄 How Much AI Is in This Track? Quantifying the Proportion of AI-Generated Stems in Hybrid Music Mixtures

标签：#音频伪造检测 #CNN #模型评估

**8.3/10** | 创新 1.5/2 | 严谨 1.2/1.5 | 实验 1/1.5 | 清晰 1/1 | 影响 1.1/1.5 | 开源 1.2/1.5 | 复现 0.3/0.5 | 工程 1/1.5

🔥 **8.3/10** | 前25% | 文档类型：方法研究 | 评分置信度：中 | #音频伪造检测 | #CNN | #模型评估 | [arxiv](https://arxiv.org/abs/2608.07285)


### 👥 作者与机构

- 第一作者：Fernando Garcia de la Cruz（未说明）
- 通讯作者：未说明
- 作者列表：Fernando Garcia de la Cruz（未说明）、David López-Ayala（未说明）、Pablo Zinemanas（未说明）、Emilio Molina（未说明）、Martín Rocamora（未说明）

### 💡 毒舌点评

将"AI音乐检测"从二元判断推向连续能量比回归，并用EnCodec伪影构造可控混合数据，问题意识和方法论都切中混合音乐生产的真实需求。可惜"AI stem"只是codec重建而非真实生成器输出，实验完全在自建pipeline中闭环，回归模型也仅是同一CNN换了输出头，距离部署级检测系统还差一次跨生成器的验证与模型校准。

### 📌 核心摘要

本文针对AI音乐检测在混合内容场景下的局限性，将全AI/全人类二分类重构为对连续AI能量比 \(\alpha\in[0,1]\) 的回归任务。作者利用EnCodec（3 kbps）对MoisesDB中人类演奏的stem进行编码-解码重建，获得带频谱伪影的"AI stem"，再通过组合替换枚举 \(2^n\) 种配置，生成21,212个带已知 \(\alpha\) 标签的混合样本。实验显示，一个二分类准确率超过99%的CNN检测器面对混合内容时输出随 \(\alpha\) 上升但严重失准（作为 \(\alpha\) 估计器 \(R^2=-0.85\)）；而相同骨干、改用MSE回归目标训练后，在5秒窗口下MAE为0.076、\(R^2\) 为0.85。乐器级分析表明鼓和吉他携带较强可检测伪影，贝斯与人声较弱，且该现象与fakeprint频谱分析结果一致。该工作为混合音乐场景下的AI含量量化检测提供了可控数据构建工具和回归基线。主要局限为AI stem仅为codec重建而非真实生成器输出，且未报告训练超参数与硬件配置。

### 🔗 开源详情

论文在方法部分脚注中宣布发布可复现的Python库**ARIA**（Authentic vs. Reconstructed Isolated Audio），代码托管于 https://github.com/fergarciadlc/aria。该库用于从本地MoisesDB安装构造混合数据，核心功能包括：对真实stem执行EnCodec编码-解码重建、组合枚举生成全部real/AI混合配置、计算每个混合样本的AI能量比 \(\alpha\)。论文强调该库与语料库和codec无关，只要输入任意多轨数据集（如MUSDB18、Slakh）即可复用混合生成流程。

关于模型、数据集和许可证的信息：`has_code`为是，但`has_model`与`has_dataset`均未说明。论文未提供预训练模型权重，也未直接发布MoisesDB数据的副本；是否附带训练好的模型检查点、是否提供数据集划分清单或是否包含许可证信息，原文未披露。

### 🏗️ 方法概述和架构

本文提出的是一套"问题重构 + 可控数据生成 + 回归检测"的三阶段方法论。整体输入为多轨录音中的各分轨stem，输出为每个混合片段对应的AI能量比估计值 \(\hat{\alpha}\)。整个过程可复现、可组合，并开源了ARIA库。

首先，AI重建管线的功能是将真实人类演奏的stem转换为携带neurocodec架构伪影的"AI化"版本。论文选择EnCodec（3 kbps）进行确定性encode-decode：编码器把波形映射为离散token，解码器通过转置卷积层重建波形时在频率轴上引入与stride对应的周期性峰值，伪影频率为 \(f_{\text{artifact}}=f_s/(2\times\text{stride})\)。为匹配检测器评估中的MP3预处理，重建后的stem被存储为256 kbps MP3/44.1 kHz，使混合实验中观察到的检测失效可归结于混合过程而非格式不匹配。该设计刻意避免使用真实生成器（如Stable Audio、Diff-A-Riff），以便在消除内容混淆变量的前提下单独测量解码器架构伪影的影响。

其次，组合式混合生成模块定义了一个基于子集枚举的数据构造算法。对一首包含 \(n\) 个stem的歌曲，引入集合 \(S\subseteq I\) 标记被替换为AI版本的stem下标，混合信号为 \(x_{\text{mix}}(S)=\sum_{i\in I\setminus S}s_i^{\text{real}}+\sum_{i\in S}s_i^{\text{AI}}\)，各stem按原始能量关系等权相加。通过枚举全部 \(2^n\) 个子集，歌曲被划分为 \(U_0\)（全real）到 \(U_n\)（全AI）共 \(n+1\) 个集合，每个集合含 \(\binom{n}{k}\) 个mixture。单个mixture的标签 \(\alpha\) 采用RMS能量加权：\(\alpha=\sum_{i\in S}\text{RMS}(s_i)^2/\sum_{i=1}^n\text{RMS}(s_i)^2\)。该设计同时覆盖了stem数量比例 \(k/n\) 和能量比例 \(\alpha\) 两个维度，且相同 \(k/n\) 下不同stem组合产生不同 \(\alpha\)，为乐器级marginalization分析提供了条件。

第三，检测模型建立在Afchar et al.的六层CNN骨干之上：对音频做STFT（窗长2048、hop 512、丢弃16 kHz以上频段），幅度谱图经六层卷积、全局平均池化后送入输出层。二分类变体用sigmoid输出和二元交叉熵在FMA-Medium及其EnCodec重建版本上训练；回归变体将输出层替换为单单元sigmoid，在MoisesDB混合集上以5秒窗口级 \(\alpha\) 为标签、MSE为损失训练。推理时对非重叠窗口的窗口级输出 \(\hat{y}\) 取平均得到片段级估计。论文先以1秒窗口训练两个模型，发现回归模型在5秒窗口下MAE更低（0.076 vs 0.104），二分类器的隐性 \(\alpha\) 估计在长窗口下反而恶化（\(R^2\) 从-0.193降至-0.851），说明分类分数本质是局部分类证据，长窗平均会抹掉微弱比例信息，而回归目标可从更长上下文中稳定获益，因此两个模型最终都以5秒窗口为匹配设置。

最后，fakeprint分析用于验证乐器级灵敏度差异是否源于码率谱伪影：将每个stem的log-power谱在时间上平均，减去滑动频率窗口的局部极小值包络，保留正向残差峰，并在[0,5] kHz上做高斯平滑。实验显示鼓和吉他的AI/real fakeprint曲线差异明显（鼓在2500 Hz以上AI曲线抬升；吉他在低中频段衰减、高频段增强），贝斯曲线几乎重合，人声差异微弱——该排序与分类器在stem级marginalization实验中的分离度一致（鼓/吉他 > 人声 > 贝斯），为方法提供了频谱证据链。

为解释乐器级可检测性差异，下图展示了四种主要乐器在真实和AI条件下的平均fakeprint频谱曲线。

![Figure 3: Average fakeprint curves (Gaussian-smoothed) for Real and AI stems across bass, drums, guitar, and vocals over the \[0,5\]\[0,5\] kHz band, highlighting stem-specific spectral differences between real and generated content.](https://arxiv.org/html/2608.07285v1/x3.png)

鼓和吉他的AI与真实曲线在特定频段差异显著，而贝斯和人声的差异较小，这为检测灵敏度的乐器依赖性提供了频谱层面的证据。

### 💡 核心创新点

1. **问题重构为连续比例回归**：首次将AI音乐检测从 {0,1} 二分类推广到 \(\alpha\in[0,1]\) 的连续能量比估计，为混合音乐生产场景提供比二元标签更细粒度、更适合披露要求的输出形式。此前工作没有考虑AI stem与人类stem混合时的检测问题。
2. **基于codec重建的可控混合数据生成方法论**：通过EnCodec对真实stem做encode-decode，在保留原始内容前提下植入可重复的频谱伪影；再利用 \(2^n\) 组合替换生成密集 \(\alpha\) 覆盖的训练集，绕开真实生成器stem不可获取的问题，实现了大规模、低代价、完全已知标签的实验条件。
3. **首次量化二分类器在混合内容上的"隐性比例感知"与失准**：仅在端点 {0,1} 上训练的二分类器面对混合内容时输出与 \(\alpha\) 单调相关但高度阈值化（\(\alpha\in[0.4,0.5]\) 时中位数仅0.10，\(\alpha>0.9\) 时接近0.97），作为 \(\alpha\) 估计器 \(R^2<0\)。该发现直接论证了分类目标不能当比例估计器使用，为专用回归训练提供了必要性依据。
4. **乐器级可检测性分析与fakeprint频谱验证**：通过stem marginalization与fakeprint分析相结合，证明检测灵敏度取决于stem的频带能量分布（鼓/吉他强、贝斯弱、人声居中），并显示回归训练可以部分恢复对人声/贝斯的检测能力，为instrument-aware检测器提供了频谱先验。
5. **开源ARIA库**：发布不依赖特定多轨数据集的混合数据构建工具，任何人可用本地多轨数据复现混合生成流程，填补了该方向工具缺失的空白。

### 📊 实验结果

论文在MoisesDB 240曲目产生的21,212个混合样本上评估，按track级80/10/10分层划分，保留24首held-out歌曲、1,792个测试mixture。表1列出主方法、最强基线与窗口消融（数据与原文Table 1一致）。

回归模型在测试集上的预测值与真实AI能量比α的散点图如下所示。

![Figure 4: Predicted versus true AI energy ratio α\\alpha for the regression model, averaged across the windows of each mixture, on the held-out test split.](https://arxiv.org/html/2608.07285v1/x4.png)

数据点紧密分布在对角线周围，证实了回归模型的整体有效性，同时也显示出在α两端存在一定的边界压缩现象。


| 模型 | 窗口 | MAE | RMSE | \(R^2\) | Pearson |
|---|---|---|---|---|---|
| Binary CNN（\(\alpha\)估计） | 1 s | 0.228 | 0.289 | -0.193 | 0.617 |
| Binary CNN（\(\alpha\)估计） | 5 s | 0.289 | 0.360 | -0.851 | 0.505 |
| Regression CNN | 1 s | 0.104 | 0.124 | 0.782 | 0.892 |
| Regression CNN | 5 s | 0.076 | 0.102 | 0.854 | 0.925 |

补充结果：
- 二分类器在FMA独立测试集上达到99.97% accuracy / 99.98% F1，且在 \(U_0\)/\(U_n\) 端点分数接近0/1，确认重建流程保留了检测器依赖的伪影。
- 二分类器输出在 \(\alpha\in[0.4,0.5]\) 区间中位数为0.10，而回归模型为0.44，显示回归目标能更有效地从混合内容中恢复比例信息。
- 回归模型在 \(\alpha\) 两端存在边界压缩：全真混合预测下界约0.05–0.10，全AI混合预测上界约0.85–0.95；最大误差出现在中段区间，对应stem组合多样性最高的区域。

下图展示了在1秒窗口下，各乐器stem在真实与AI条件下，由二分类和回归模型输出的分数分布。

![Figure 2: Kernel density estimates of y^\\hat{y} for each instrument under real and AI conditions, for the binary detector (top row) and regression model (bottom row), both at 1-second windows.](https://arxiv.org/html/2608.07285v1/x2.png)

图中可见，二分类模型的输出分布极端化，难以区分中间状态；回归模型则能生成更连续的分数，且吉他和鼓的分布分离度高于人声和贝斯。


下图直观展示了在5秒窗口设置下，二分类模型与回归模型的中位分数随真实AI能量比α的变化。

![Figure 1: Median y^\\hat{y} as a function of the AI energy ratio α\\alpha for the binary and regression models, both at 5-second windows; error bars show the interquartile range.](https://arxiv.org/html/2608.07285v1/x1.png)

图中可见，二分类模型的输出在α约0.4以下严重失准，作为α估计器完全失效；而回归模型的输出更接近理想预测。

### 🔬 细节详述

本节补充论文在数据、训练、评估和辅助分析方面的关键实现细节，以保证复现路径的完整性。

**数据与混合生成细节。** 实验使用MoisesDB中的240首专业混音多轨歌曲，每首歌曲的stem数量为2到10个，多数为4到7个，stem按乐器类型分为人声、鼓、贝斯、吉他以及其他（键盘、弦乐、合成器等）。对每首歌曲枚举全部 \(2^n\) 个AI/real组合，共生成21,212个混合样本。混合信号按原始能量关系等权相加，标签 \(\alpha\) 按RMS能量定义。由于不同歌曲的stem数不同，聚合后的 \(\alpha\) 覆盖全部 \([0,1]\) 区间，且大多集中在中段值。

**模型与训练细节。** 两个模型共享六层卷积骨干。输入为幅度谱图，STFT采用2048样本窗、512样本hop，丢弃16 kHz以上频段。二分类器输出层为sigmoid，使用BCE损失，在FMA-Medium及其EnCodec重建版本上训练；回归模型输出层为单单元sigmoid，使用MSE损失，在MoisesDB混合集上以5秒窗口级 \(\alpha\) 为标签训练。推理时，将非重叠窗口的窗口级输出平均得到片段/轨道级估计。作者最初以1秒窗口训练两个模型，随后发现5秒窗口对回归模型更有利（特别在 \(\alpha\) 边界附近），因此重新以5秒窗口训练二分类器，并采用匹配的5秒窗口作为最终比较设置。训练/验证/测试按track级80/10/10分层划分，确保同一首歌的所有mixed窗口都在同一分区，避免内容与时序相关泄漏；最终保留24首held-out歌曲、1,792个测试mixture。

**评估与验证细节。** 使用MAE、RMSE、\(R^2\) 和Pearson相关系数衡量 \(\alpha\) 估计性能。复现验证中，二分类器在FMA独立测试集上达到99.97%准确率、99.98% F1，并在 \(U_0\)/\(U_n\) 纯端点集上输出分别接近0和1。乐器级分析选择测试语料中stem恰好为 {人声、鼓、贝斯、吉他} 的歌曲，生成全部16种配置（排除全real），通过marginalization比较同一stem为real或AI时模型输出的分布。fakeprint计算沿用Afchar等人的方法：对log-power谱做时间平均，减去滑动频率窗口的局部极小值包络，保留正向残差峰，并在 \([0,5]\) kHz带宽上做高斯平滑。该带宽选择覆盖乐器基频与低次谐波所在频段，平滑后反映的是真实与AI条件间的频谱包络差异，而非理论预测的窄带stride峰。**训练超参数（学习率、batch size、训练轮数等）与硬件配置原文未披露。**

### ⚖️ 评分理由

*   创新性 (1.5/2)：[A_METHOD][A_RESULTS] 将AI音乐检测从二元分类重构为连续AI能量比回归，并提出基于EnCodec重建与2^n组合替换的可控混合数据生成方法；实验揭示二分类器在混合内容上的隐性比例感知与严重失准，为问题定义和方法论层面提供了实质新贡献。

*   技术严谨性 (1.2/1.5)：[A_METHOD][A_RESULTS] alpha的RMS能量定义、组合替换混合公式、窗口匹配策略与fakeprint验证链在逻辑上自洽，乐器级灵敏度排序与频谱证据一致，未发现内部推导矛盾；整体属于受控条件下的严谨方法验证。

*   实验充分性 (1.0/1.5)：[A_RESULTS][A_LIMITS] 在240首曲目上生成21,212个混合样本，按track级80/10/10分层划分并保留1,792个测试mixture，给出二分类基线、1s/5s窗口消融、乐器marginalization和fakeprint交叉验证；但未测试其他codec、比特率或真实生成器输出，跨条件泛化证据不足。

*   清晰度 (1.0/1)：[A_METHOD][A_RESULTS] 问题重构、alpha公式、混合生成算法、模型结构与fakeprint流程均以明确符号和图表呈现，表1与窗口消融结果便于核对，没有发现组织或表达上的明显缺陷。

*   影响力 (1.1/1.5)：[A_SUMMARY][A_METHOD] 面向混合音乐制作中真实存在的AI含量量化需求，将检测输出从二元标签推进到连续比例，对AI音乐检测与音频取证具有方向性参考价值；其在音频/音乐读者中的领域相关性直接且明确。

*   开源 (1.2/1.5)：[A_OPEN] ARIA库已在GitHub开放，可对任意多轨语料复用混合生成流程，属于核心产物开放；但未提供预训练模型权重、数据集副本或许可证信息，文档完整度未达最高锚点，故按固定锚点给1.2。

*   可复现性 (0.3/0.5)：[A_METHOD][A_LIMITS] 论文披露了STFT配置、窗口长度、损失、划分比例与推理平均方式，数据构造流程有可用代码；但未报告学习率、batch size、训练轮数、优化器与硬件配置，模型训练层面的复现仍需补全。

*   工程/实践价值 (1.0/1.5)：[A_METHOD][A_OPEN][A_LIMITS] 组合式混合生成可枚举全部2^n配置并按RMS能量计算alpha，且不依赖特定语料与codec，为混合检测提供标准化数据构建与评估流程；但未包含EQ、压缩、电平平衡等专业后期处理，距部署级工具仍有工程差距。

### 🚨 局限与问题

论文在原文Section 6中明确列出了若干局限，结合实验分析可归纳如下：

- **AI stem仅为codec重建而非真实生成器输出**：所有"AI生成"内容都来自EnCodec 3 kbps的编码-解码重建，而非Suno、Udio、Stable Audio、Diff-A-Riff等实际音乐生成系统的输出。因此论文测量的是codec架构伪影所对应的"AI能量比例"，不能直接泛化为商业生成器场景。
- **单一codec与单一比特率**：实验仅采用EnCodec在3 kbps下的条件，未测试其他神经音频codec（如DAC）或其他比特率。如果替换生成器或codec，伪影出现的频率可能不同，检测器的表现需要重新验证。
- **缺少专业后期制作环节**：混合由原始stem直接等权相加，未包含EQ、压缩、电平平衡、创造性编辑等真实生产中的处理步骤。这些处理可能改变伪影的可检测性，也会影响 \(\alpha\) 估计的有效性。
- **回归模型的边界压缩**：模型对全真混合的预测下界约0.05–0.10，对全AI混合的预测上界约0.85–0.95，边界输出未完全校准。这与sigmoid回归在MSE下的特性一致，但限制了在极低或极高AI含量场景下的量化精度。
- **检测粒度限于stem级**：方法以整条stem为单元，无法定位单个AI生成片段（如一段合成鼓点）或更细粒度的时间局部内容。若要实现此类检测，需要构建比stem更细的混合单元。
- **可复现性问题**：原文未披露训练超参数、硬件配置、优化器设置等，导致模型训练层面的完全复现受阻。虽然ARIA库提供了数据构造代码，但评估和基线复现仍需更多细节。

---

[← 返回 2026-08-10 语音/音乐/音频论文速递](/audio-paper-digest-blog/posts/2026-08-10/)
