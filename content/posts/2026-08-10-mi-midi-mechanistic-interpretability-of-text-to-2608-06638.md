---
title: "MI-MIDI: Mechanistic Interpretability of Text-to-MIDI Generation Models via Probing, Lenses and Steering"
date: 2026-08-10
draft: false
tags: [音乐生成, 自回归模型, 可解释性, 模型评估]
categories: [论文速递]
description: "音乐生成 | 7.1/10"
hiddenInHomeList: true
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_arxiv_id: "2608.06638"
---

# 📄 MI-MIDI: Mechanistic Interpretability of Text-to-MIDI Generation Models via Probing, Lenses and Steering

标签：#音乐生成 #自回归模型 #可解释性 #模型评估

**7.1/10** | 创新 1.3/2 | 严谨 1/1.5 | 实验 1.1/1.5 | 清晰 0.9/1 | 影响 1/1.5 | 开源 0.5/1.5 | 复现 0.3/0.5 | 工程 1/1.5

✅ **7.1/10** | 前50% | 文档类型：方法研究 | 评分置信度：中 | #音乐生成 | #自回归模型 | #可解释性 #模型评估 | [arxiv](https://arxiv.org/abs/2608.06638)


### 👥 作者与机构

- 第一作者：Jakub Poćwiardowski（华沙理工大学计算机科学研究所）
- 第二作者：Mateusz Modrzejewski（华沙理工大学计算机科学研究所）
- 通讯作者：论文未标注通讯作者

### 💡 毒舌点评

这篇工作把线性探针、logit/tuned lens、activation patching 和 steering 成套搬到文本到 MIDI 的符号音乐生成模型上，跨模型对比和双向干预分解是明显亮点，确实补了一个此前空白的方向。但它本质上是成熟可解释性工具的领域迁移与组合，且“架构决定预测形成方式”的核心判断建立在每种架构只有一个模型的基础上，无法排除分词、预训练数据和条件注入方式的混杂，作为因果结论仍然偏弱。更有经验的研究者会期待至少一个同架构不同 tokenizer/conditioning 的对照，或对 steering 方向做随机方向基线。

### 📌 核心摘要

论文针对文本到 MIDI 符号音乐生成模型缺乏机理研究的问题，选择 text2midi 与 MIDI-LLM 两个公开模型，用线性探针、logit lens/tuned lens、activation patching 和 activation steering 构建分析管线。与已有主要面向音频模型 MusicGen 的可解释工作不同，本作将工具箱迁移到符号音乐域，从 token 级标签、词汇概率质量、因果 patch 和双向干预等多条证据交叉验证。结果发现乐器族、和弦根音、音区、织体密度等音乐概念在两类模型中均线性可解码；text2midi 的预测随层数逐渐细化，而 MIDI-LLM 在 13–15 层发生从文本基座到音乐词汇的快速绑定。Steering 在两种模型上都能双向改变音区与织体，在 MIDI-LLM 上还能改变速度/能量，例如速度/能量方向最高使音符密度提升 70.4%。论文还提出将 steering 响应分解为方向性与对称性成分的双向评估协议。主要局限是每类架构只有一个模型，无法排除分词、数据与条件注入方式等混杂因素，部分标签来自启发式估计，因此结论更接近工程画像而非严格因果发现。

### 🔗 开源详情

- 代码：论文中未提及具体代码链接；正文仅声明“code for all experiments will be released”（代码将发布）。
- 模型权重：论文中未提及具体模型权重下载链接；研究对象为两个公开系统 text2midi 与 MIDI-LLM（基于 Llama 3.2 1B），但论文未给出其权重仓库地址。
- 数据集：论文中未提及数据集下载链接；使用了/提及 MIDICaps 数据集和 SynTheory 数据集（SynTheory 用于受控探测实验），但未提供获取方式。
- Demo：https://jpocwiar.github.io/MI-MIDI-Demo/
- 复现材料：论文中未提及训练配置、检查点或完整复现附录；仅说明代码将在后续发布。实验算力致谢 PLGrid（ACK Cyfronet AGH），但未给出可复现实验配置。
- 论文中引用的开源项目：论文中提到了 Jukebox、MusicLM、MusicGen、text2midi、MIDI-LLM、Llama 3.2 1B、MIDICaps、SynTheory 等，但在所给论文文本中未列出这些项目/数据集的 URL 或仓库链接。

### 🏗️ 方法概述和架构

整体流程：输入自由文本描述。text2midi 使用 frozen Flan-T5 编码文本，通过解码器每一层的 cross-attention 注入文本信息，以 REMI+ 元组 token 自回归生成 MIDI；MIDI-LLM 则将文本 prompt 和 AMT MIDI token 拼接进同一上下文，由 Llama 3.2 1B 解码器自回归生成。论文在 predictive alignment 下记录残差流激活 \(h_{\ell,t}^{(i)}\)，即模型在预测第 \(t\) 个 token 时第 \(\ell\) 层之后的残差流状态；由于 causal masking，一次 hook forward pass 即可等价捕获所有生成步的激活。

第一类是线性探针。对每一层单独训练 L2 正则化的多项逻辑回归，输入 \(h_{\ell,t}\)，输出从解码后 MIDI 中提取的音乐概念标签，例如音高类、八度、乐器族、和弦根音、织体密度等。探针刻意限制为 logistic regression，避免用探针容量掩盖表征不存在的问题。实验采用 grouped 5-fold CV，同一序列的所有 token 始终在同一折；同时用打乱标签的控制探针确认高准确率来自激活中的信息。序列级 key 对 token 激活做 last-token 或 mean-pooling 聚合后再分类。

第二类是 logit lens 与 tuned lens。Logit lens 把中间层激活直接通过最终 LayerNorm/RMSNorm 和词表投影 \(U\)：
\[z_{\ell,t}=U\big(\operatorname{Norm}(h_{\ell,t})\big)+b_U,\qquad p_{\ell,t}=\operatorname{softmax}(z_{\ell,t}).\]
对 MIDI-LLM 额外计算完整词表上音乐 token 的概率质量份额：
\[\operatorname{mass}^{\mathrm{MIDI}}_{\ell,t}=\frac{\sum_{v\in V_{\mathrm{MIDI}}}\exp(z_{\ell,t}(v))}{\sum_{v\in V}\exp(z_{\ell,t}(v))}.\]
Tuned lens 为每个中间层训练一个仿射翻译器 \(t_\ell\)，将 \(h_{\ell,t}\) 映射到最终层基底，再用 frozen 的 normalization 和 unembedding 读取分布；翻译器初始化为 identity，通过蒸馏模型自身最终层分布、最小化 \(\mathrm{KL}(p_L \,\|\, p_{\ell}^{\mathrm{tuned}})\) 训练。该设计用于区分“信息其实早已存在、只是基底不可读”与“决策真的到深层才形成”。

第三类是 activation patching。在 MIDI-LLM 中，生成 piano prompt 时把第 \(L\) 层输入处的 prompt 激活替换为 violin prompt 对应激活，测量 piano-note 占比从原始值向对比值移动的程度；同时设置 self-patch 和 neutral-prompt 控制，分别排除构造零效应和无关干扰。在 text2midi 中，镜像实验是替换某一解码器层的 cross-attention encoder memory，考察条件信息是否被单层瓶颈化。

第四类是 activation steering。方向 \(d_\ell\) 取 25 个对比 prompt 的激活均值差并做 L2 归一化：
\[d_\ell=\frac{\mu_\ell^B-\mu_\ell^A}{\lVert \mu_\ell^B-\mu_\ell^A \rVert_2}.\]
生成时向残差流注入 \(\alpha d_\ell\)，可以只在计算该方向的单层注入，也可以所有层注入。关键设计是双向评估协议：每个配置同时运行 A→B 和 B→A 两个方向，将两个方向拟合斜率分解为
\[s_{\mathrm{dir}}=\frac{s_{BA}-s_{AB}}{2},\qquad s_{\mathrm{non}}=\frac{s_{BA}+s_{AB}}{2},\qquad \mathrm{spec}=\frac{|s_{\mathrm{dir}}|}{|s_{\mathrm{dir}}|+|s_{\mathrm{non}}|}.\]
同时用 note-count 稳定性守卫确定最大可用 \(\alpha\)，避免干预导致生成崩溃。Norm-relative 实验中，注入改为 \(h_t\leftarrow h_t+\alpha\lVert h_t\rVert_2\,d\)，使每层收到相等比例的相对扰动。

下图直观展示了激活转向作为文本到MIDI生成的控制面板概念。

![Figure 1: Activation steering as a control panel for text-to-MIDI: shifting residual-stream activations allows steering the generated score. We locate such concepts in two public models and ask when interventions remain safe.](https://arxiv.org/html/2608.06638v1/figures/steering_hero_en_cut.png)

通过调整残差流激活，可以引导生成乐谱的不同音乐概念，如音区和织体密度。


整体来看，这不是一个端到端新模型，而是一套可迁移的机理分析流程。方法之间形成互补：probing 说明“信息是否存在”，logit/tuned lens 说明“预测何时形成”，patching 提供因果对应，steering 提供可控干预。

### 💡 核心创新点

1. 据作者所述，这是首批面向符号音乐生成模型的 mechanistic interpretability 研究之一，且是第一个聚焦 text-to-MIDI 模型的系统分析。此前音乐可解释工作主要面向 MusicGen 等音频模型，符号模型基本空白；本工作填补了这一特定空白，并利用符号输出便于精确量化干预效果的优势。
2. 跨架构比较揭示两种不同的预测形成路径：text2midi 随深度渐进细化，而 MIDI-LLM 在 13–15 层发生从文本基座到音乐词表的快速旋转。该结论由经典 lens、音乐词表概率质量、tuned lens 和 instrument patching 的延迟衰减共同支撑。
3. 提出双向 steering 评估协议，把响应分解为方向性分量与对称性漂移，并给出 specificity 指标。这能识别出“两个方向都同向变化”的假阳性控制，优于只看单方向移动量的做法。
4. 给出架构相关的干预配方：text2midi 支持 all-layer steering 且特异性很高，MIDI-LLM 则更适合 single-layer steering；norm-relative 实验进一步说明 MIDI-LLM 的 all-layer 不稳定性来自多层累积扰动而非早期层过缩放。

### 📊 实验结果

论文的研究目标是机理分析而非刷生成指标，因此没有与传统生成质量 SOTA 比较，也未提供 MusicGen 等音频模型的量化基线。

在线性探针中，乐器族是最易解码的概念之一：MIDI-LLM 在 layer 14 达到 lift 0.630，text2midi 在 layer 10 达到 lift 0.419；和弦根音 lift 分别为 0.356 和 0.346；序列级 estimated key 的 mean-pooled readout 在 MIDI-LLM 上 lift 0.545，在 text2midi 上 lift 0.401。在 SynTheory 受控数据上，MIDI-LLM 的 interval lift 达 0.914，text2midi 为 0.521；chord progression lift 分别达 0.947 和 0.675。Scale mode 上 text2midi 低于基线，而 MIDI-LLM 有明显正 lift；论文用绝对音高 vs 相对音高的表征几何解释该差异，但属于事后推断。

下图展示了两个模型在token级概念上的逐层线性探针准确率。

![Figure 2: Per-layer probe accuracy for each token-level concept, in text2midi and MIDI-LLM; dashed lines mark each model’s majority-class baseline,](https://arxiv.org/html/2608.06638v1/x1.png)

图中曲线与基线的差距显示了概念在不同层的可解码性，乐器族和音高类在深层达到高lift。


Logit lens 显示 text2midi 的 top-1 agreement 从低层约 0.05 逐步升到 layer 17 的 0.677；MIDI-LLM 在 layer 12 之前基本接近 0，layer 13 为 0.238，layer 14 跃升到 0.712，layer 15 为 0.801。MIDI 词表概率质量在前 12 层保持在约 0.30 的 size-based share 附近，到 layers 13–15 旋转到接近 1.0。Tuned lens 把 MIDI-LLM 的可读性提前 2–3 层，说明跳变部分来自基底变化，但深层仍存在真实预测精炼。

下图显示了MIDI-LLM中每层MIDI词表概率质量份额的变化。

![Figure 4: MIDI share of the full-vocabulary probability mass per layer of MIDI-LLM, for all analyzed tokens and by token type.](https://arxiv.org/html/2608.06638v1/x3.png)

从图中可见，概率质量在层13-15发生旋转，从文本词汇快速切换到音乐词汇，支撑了预测形成的关键转变。


Instrument patching 在 MIDI-LLM 中到 layer 13 之前 transfer 都接近完整，layer 14 降至 0.62，layer 15 降至 0.27，与 lens 显示的绑定过渡带一致；text2midi 则没有孤立深度峰，说明条件信息分布在不同层。

下图展示了在MIDI-LLM中进行乐器补丁实验的效果分数随层的变化。

![Figure 6: Instrument patching (piano →\\to violin) at each MIDI-LLM layer input: effect score with paired 95% bootstrap CIs,](https://arxiv.org/html/2608.06638v1/x5.png)

效果分数在层13之前保持较高，在层14-15急剧衰减，与logit lens显示的绑定过渡带一致。


Steering 的关键单层干预结果如下表（保留论文 Table 6 的核心行；* 表示未通过 \(|s_{\mathrm{dir}}|>2\mathrm{SE}\) 的探索性规则）：

| 概念 | 方向 | text2midi 基线→干预 (Δ) | MIDI-LLM 基线→干预 (Δ) |
|---|---|---|---|
| 速度/能量 | 更高 | 5.92→6.73 (+13.6%*) | 17.58→29.97 (+70.4%) |
| 速度/能量 | 更低 | 5.92→4.59 (-22.5%*) | 17.58→17.04 (-3.1%) |
| 音区 | 更高 | 64.49→66.34 (+2.9%) | 61.14→64.33 (+5.2%) |
| 音区 | 更低 | 64.49→59.34 (-8.0%) | 61.14→58.34 (-4.6%) |
| 织体密度 | 更密 | 3.21→4.48 (+39.6%) | 2.84→3.46 (+21.6%) |
| 织体密度 | 更疏 | 3.21→2.39 (-25.7%) | 2.84→2.00 (-29.8%) |

在 best single-layer 配置中，除 text2midi tempo/energy 外，register 与 polyphony 都满足 \(|s_{\mathrm{dir}}|>2\mathrm{SE}\)。MIDI-LLM 的 all-layer 注入在 \(\alpha\approx0.75\) 到达稳定性上限，而 text2midi 的 all-layer 注入仍可保持稳定并产生高特异性方向，说明两模型的干预边界确实不同。Norm-relative 实验中，MIDI-LLM 的 single-layer 注入在整个 20% 相对扰动范围内保持稳定，all-layer 注入则在 tempo 2%、register/polyphony 5% 每层附近到达上限，说明 all-layer 不稳定性来自多层同时扰动而非早期层过缩放。

### 🔬 细节详述

- 训练数据：论文未训练新生成模型，使用公开的 text2midi 与 MIDI-LLM。全文生成探针数据为 1000 条随机音乐描述，每条描述组合 key、meter、tempo、mood 与 instrumentation，以 temperature 1.0、per-sample seed、1024 token 预算采样。Token-level 探针在固定随机 200 条序列子集上训练，序列级 key 变体使用全部可用序列。SynTheory 采用 MIDI 形式，N=1080。Tuned lens 训练使用 60000 个 token 位置，额外 50000 个位置用于评估。
- 损失函数：线性探针为 L2 正则化多项逻辑回归损失；tuned lens 使用 \(\mathrm{KL}(p_L \,\|\, p_{\ell}^{\mathrm{tuned}})\) 蒸馏最终层分布；steering 没有额外损失函数；原始生成模型训练损失未说明。
- 训练策略：探针使用 L-BFGS，200 次迭代，C=1.0，特征缩放只在训练折拟合；tuned lens 翻译器训练 4 epochs，学习率 1e-3；未训练生成模型。
- 关键超参数：text2midi 分析 18 个解码器层，\(d_{\mathrm{model}}=768\)，REMI+ 词表 524；MIDI-LLM 分析 16 层，\(d_{\mathrm{model}}=2048\)，完整词表 183282，其中 MIDI 音乐词表 55026。REMI+ 为节拍式时间编码，AMT 为绝对 10ms 网格。
- 训练硬件：论文未提供具体 GPU/TPU 型号与数量，仅在致谢中提到 PLGrid 高性能计算基础设施。
- 推理细节：全文生成使用 ancestral sampling，temperature 1.0，per-sample seed，token budget 1024。MIDI-LLM 使用官方 prompt 格式，中性描述加 `MIDI_BOS`；text2midi 使用原始 REMI tokenizer。Steering 中 MIDI-LLM 的 readout 取最后一个 prompt token，text2midi 取 teacher-forced prefix 的平均激活。Steering sweep 为 \(\alpha\in[0,2]\)、步长 0.25、9 个源层、两种注入策略、两个方向、每个点 10 seeds，每个模型 native readout 下共 9720 条序列；norm-relative 实验 \(\alpha\in[0,0.2]\)。
- 正则化或稳定训练技巧：grouped 5-fold CV 防止 sequence-level 泄漏；shuffled-label control 验证探针信息性；patching 使用 self-patch 与 neutral-prompt 控制；steering 使用 note-count guard 和双向分解；MIDI-LLM norm-relative 实验用于排除 early-layer overscaling。

### ⚖️ 评分理由

*   创新性 (1.3/2)：[A_METHOD] 将线性探针、logit/tuned lens、activation patching 与 steering 成套迁移到符号音乐生成，是首个针对 text-to-MIDI 的机制可解释性研究；跨架构比较和双向评估协议构成可用的方法贡献，但本质是成熟工具的组合迁移，故给 1.3。

*   技术严谨性 (1.0/1.5)：[A_METHOD][A_LIMITS] 技术管线在探针、lens、patching、steering 中均设了对照和稳定性守卫，公式推导清晰；但“架构决定预测形成方式”的核心判断建立在每架构单一模型上，无法排除分词、数据与条件注入混杂，且部分几何解释属事后推断，故扣分。

*   实验充分性 (1.1/1.5)：[A_RESULTS][A_LIMITS] 有 grouped 5-fold CV、shuffled-label 对照、SynTheory 受控数据集、bootstrap CI 与双向 steering 稳态范围，实验覆盖面较全；但 best-layer/best-config 选择未做多重比较校正，steering 缺少随机方向对照，note-count guard 不足以排除音色和和弦质量退化，故给 1.1。

*   清晰度 (0.9/1)：[A_METHOD][A_RESULTS] logit lens、tuned lens、patching 和 steering 均有明确数学定义，结果表与逐层曲线能支撑结论；但大量层、概念与注入策略的结果分散在多个表中，读者需交叉核对才能还原 best-config 设定，清晰度略扣。

*   影响力 (1.0/1.5)：[A_SUMMARY][A_RESULTS] 作为首批符号音乐生成机制可解释性工作，为 text-to-MIDI 提供 tracing/steering 工具和跨架构对比发现，对音乐生成与可解释性交叉领域有方法启发；但尚未形成通用模型或广泛验证，影响以方法启发为主，给 1.0。

*   开源 (0.5/1.5)：[A_OPEN] 论文明确承诺未来开放核心产物，但当前尚未发布可用代码、模型权重或数据资源。

*   可复现性 (0.3/0.5)：[A_METHOD][A_OPEN] 已披露探针超参数、tuned lens 训练细节、采样配置和部分稳定性规则，大部分关键设置可依文重建；但未给出完整复现附录、检查点/训练配置和硬件细节，关键配置仍有少量缺失，故给 0.3。

*   工程/实践价值 (1.0/1.5)：[A_METHOD][A_RESULTS] 形成了可操作的架构相关干预配方：text2midi 支持 all-layer steering、MIDI-LLM 宜用 single-layer，norm-relative 实验还划定了稳定性边界；demo 页面提供音频示例，具备实际控制面板价值，故给 1.0。

### 🚨 局限与问题

论文明确承认的局限：
1. 每种架构只有一个模型，无法把 conditioning pathway 与其他设计差异完全隔离。
2. Difference-in-means 方向来自文本对比，对比 prompt 在词法和音乐线索上同时变化，方向并不“纯净”。
3. 速度/能量用音符密度代理，与 polyphony 指标并不完全独立。
4. 真实生成的 probing 标签是从解码 MIDI 中启发式估计的，高层概念的弱结果可能来自标签噪声而非表征缺失。
5. 更复杂、难以在 multi-track MIDI 中精确定义和测量的音乐概念没有进入定量协议。

审稿人发现的潜在问题：
1. 在大量层、概念、注入策略上做 best-layer/best-config 选择，却未做多重比较校正，某些峰值可能是选择效应。
2. Steering 缺乏随机方向或无关方向的对照，双向分解只能识别对称漂移，不能完全排除“任意方向都会改变该指标”的可能性。
3. Note-count guard 过于粗略：即使总音符数不降，语义重复、音色崩坏、和弦错乱等质量退化仍可能发生，论文未做系统的人工或自动自然度评估。
4. SynTheory 和 full generations 的 readout 方式不同（mean pooling vs per-token），两者 lift 不能直接比较，论文虽已说明，但读者仍需小心。
5. 对 text2midi 的 patching 结论依赖于 cross-attention memory 替换这一特定实现，未证明该操作能覆盖所有可能的单层瓶颈。

---

[← 返回 2026-08-10 语音/音乐/音频论文速递](/audio-paper-digest-blog/posts/2026-08-10/)
