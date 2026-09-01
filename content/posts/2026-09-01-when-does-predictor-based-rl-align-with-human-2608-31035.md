---
title: "When Does Predictor-Based RL Align with Human Perception? A Study of Subjective Rewards in Codec-Based Speech Language Models"
date: 2026-09-01
draft: false
tags: [语音合成, 强化学习, 语音质量评估, 零样本]
categories: [论文速递]
description: "语音合成 | 7.5/10"
hiddenInHomeList: true
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_arxiv_id: "2608.31035"
paper_digest_api_reader_contract: "beginner-researcher-v2"
paper_digest_api_reader_article_sha256: "888788f84646471db40c39def0853a9e10aaa12c27c3997c19a56c9c25d74eff"
paper_digest_api_reader_plan_sha256: "2525103e47ab6a19b0e9e4da539c10406c126b9452299608ac5432ba0ddbef9e"
---

# 📄 主观分数能当奖励吗：当预测器学会讨好自己

> 英文题目：*[When Does Predictor-Based RL Align with Human Perception? A Study of Subjective Rewards in Codec-Based Speech Language Models](https://arxiv.org/abs/2608.31035)*
>
> 一句话：**论文用 CER 三区硬约束把 AnimeScore 等主观预测器放进 GRPO 训练，发现机器分数都能涨但只有部分能让人听出来好，且同门奖励下 Best-of-8 已与策略优化打平，代价是小样本与单基座限制了结论的外推。**

> 标签：#语音合成 #强化学习 #语音质量评估 #零样本
>
> 评分：**7.5/10** | 创新 1.4/2 | 技术严谨 1.1/1.5 | 实验充分 1/1.5 | 清晰度 0.8/1 | 影响力 0.9/1.5 | 开源 1/1.5 | 可复现 0.3/0.5 | 工程/实践 1/1.5


## 👥 作者与机构

- Joonyong Park：Spellbrush
- Jerry Li：Spellbrush

## 💬 毒舌点评

亮点在于把主观奖励当作预测器—轴—基座三元组来解剖，并用 CER 分区与 Best-of-8 对照把策略优化的幻觉打回原形，诊断框架比单纯刷分更有价值。短板是每轴仅 50 句、单基座 Llasa-1B-Multilingual 的小样本证据却要支撑通用筛选启发式，且 Likability 等关键结论依赖事后分箱解释，统计功效与外推性都偏薄。

## 📌 核心摘要

论文要解决编解码器语音语言模型中学习型主观预测器能否作为强化学习奖励且仍与人耳感知对齐的问题。方法核心是在 Group Relative Policy Optimization（GRPO，组相对策略优化）中引入字符错误率（Character Error Rate，CER）三区硬约束奖励模板，仅在 CER ≤ 0.10 与 0.10 < CER ≤ 0.30 时允许 AnimeScore、UTMOS、Likability 等感知分数生效，否则给予 -1.0 惩罚，并与同奖励门的 Best-of-N 重排序对比以区分采样选择与策略内化。相较以往直接优化 MOS 或可验证奖励的工作，新意在于将奖励视为预测器—轴—基座三元组，并通过平均迁移与奖励间隔校准分离来诊断何时可优化。主实验显示单奖励 GRPO 均主要提升自身轴且 CER 均值下降约 0.02 至 0.03，但人评迁移不均：AnimeScore 人类胜率 80.0%、UTMOS 62.0%、Likability 仅 36.0%，而 GRPO 对 Best-of-8 人类胜率均在 46.0% 至 52.0% 附近无显著优势。实际意义是为主观语音奖励的多奖励后训练前筛选提供了可操作的四项检查清单。局限在于单基座、单解码配置、小规模日语众包听音与未完全解耦的预测器架构差异，结论外推需谨慎。

## 🔗 开源与复现资源

- 代码：https://github.com/sizigi/animeGRPO ，同时发布 AnimeScore 预测器仓库 https://github.com/sizigi/animescore
- 模型权重：基座语音模型 Llasa-1B-Multilingual 公开 checkpoint https://huggingface.co/HKUSTAudio/Llasa-1B-Multilingual ，AnimeScore 使用 microsoft/wavlm-base 编码器 https://huggingface.co/microsoft/wavlm-base ，Likability 使用 microsoft/wavlm-base-plus 编码器，UTMOS22-strong 使用离线 checkpoint https://github.com/sarulab-speech/UTMOS22 ，VAD-Arousal 使用 wav2vec2-large-robust 骨干，CER 门控使用 Whisper large-v3 ，论文明确说明不重新分发合并后的基座模型权重与受限许可的奖励模型权重
- 数据集：基座模型训练数据 Emilia 与 Multilingual LibriSpeech ，Likability 训练数据 CocoNut-Humoresque 采用原始划分并使用类别加权交叉熵训练，AnimeScore 偏好语料库 AnimeScore preference corpus ，辅助诊断使用 MSP-Dim 数据集，论文中未提供上述数据集的直接下载链接
- Demo：https://sizigi.github.io/animeGRPO/
- 复现材料：论文在 https://github.com/sizigi/animeGRPO 发布代码、提示词、生成音频样本与奖励分数，附录 A 报告 GRPO 通用超参数与基于 verl 和 vLLM 的 rollout 配置，附录 A 与附录 J 报告检查点选择策略与 KL 轨迹，附录 B 报告奖励预测器实现细节与输出尺度，附录 C 报告 50 条测试集构成，附录 G 报告奖励差距分箱统计，附录 H 报告英语 AnimeScore 辅助实验，训练配置包含验证集规模 100 条日语与 100 条英语及每种语言 50 条评测集
- 论文中引用的开源项目：Llasa https://huggingface.co/HKUSTAudio/Llasa-1B-Multilingual ，XCodec2 声学 tokenizer 与波形解码器，verl 强化学习框架，vLLM 推理框架，AnimeScore https://github.com/sizigi/animescore ，UTMOS22-strong https://github.com/sarulab-speech/UTMOS22 ，WavLM-base https://huggingface.co/microsoft/wavlm-base ，Whisper large-v3 ，MSP-Dim VAD 预测器，SoundStream 与 EnCodec 神经音频编解码器

## 🧭 深度解读

### 为什么把声音做得像，不等于让人觉得好？
想象你让模型读一句台词，它把每个字都读对了，却像在念说明书。字是对的，听感却不对。语音合成的难处正在这里：可验证的对错只管字面，而好听、自然、像动画声优这类感受，最终由听者说了算。

编解码器语音语言模型（Codec-based Speech Language Model）把这个矛盾搬进了语言模型的框架。文本和一段参考音频进来，模型自回归地吐出一串离散声学码，再由解码器还原成波形。流程很像写句子，但评价不再是一串字符是否匹配，而是波形是否既说对了话，又让人愿意听下去。

于是出现一个诱惑：既然有能预测人打分的模型，比如预测自然度的 UTMOS 或预测动漫感的 AnimeScore，直接拿它的分数当奖励去强化学习，不就能让声音变好听吗？论文要追问的正是这个直觉何时成立、何时只是预测器在自我陶醉。

### 已有路线在奖励什么，论文站在哪里？
最近的语音强化学习大多奖励能算清楚的东西。转录错误率、文本似然、说话人相似度、时长和韵律规则，这些都可自动度量，优化它们确实能让生成更稳、更像目标文本。另一条线是学一个主观分数预测器，把平均意见分（Mean Opinion Score，MOS）这类听感代理变成可微或可打分的奖励。

两条线各有盲点。只奖可验证指标，管不住自然度和风格；只奖学习型预测器，模型可能钻预测器的空子，分数涨了，声音却出现含糊、失真或不可懂。语音尤其敏感，因为可懂度、音质、音色一致性和风格往往互相牵制。

这篇工作的站位是把两者绑在一起做受控诊断。它不急于宣布某个主观轴一定可优化，而是把奖励看成预测器—轴—基座三元组：同一个“好听”，换了预测器架构、训练数据、分数尺度或基座模型，行为可能完全不同。为此它固定一套带硬约束的训练与评估支架，再系统比较策略优化与推理时重排序。

### 要回答的具体问题是什么？
问题可以收敛为一句：在编解码器语音语言模型里，学习型主观预测器何时能作为强化学习奖励，既推动目标听感，又不丢掉人耳对齐？

论文把答案拆成 3 层检验。第一层，机器层面是否产生轴特异的移动，还是只是泛泛的质量抖动。第二层，人耳层面是否跟随移动，平均胜率是否真的偏向优化后的系统。第 3 层，分数差距本身是否在样本对内就能解释人的选择，还是被残留的可懂度差异所混淆。

为了让 3 层检验可比，所有奖励都走同一道门：字符错误率（Character Error Rate，CER）分区。只有先过可懂度这一关，感知分数才被允许说话。

### 方法全景：从文本到波形，奖励何时生效？
输入是一条文本提示 x。策略 πθ 自回归采样声学码序列 s = (s1,…,sT)，经 XCodec2 解码器 Dec(s) 还原为波形 w。所有感知预测器 p(s) 实际在波形上计算，为简洁记为对 s 的函数。优化目标是在贴近冻结参考策略 πref 的同时提升目标感知属性，且不让转录漂移。

核心是一套受约束的组相对策略优化（Group Relative Policy Optimization，GRPO）。奖励模板按 CER 分三区：

\[R(s,x)=\begin{cases}\tilde{p}(s)+b,&c(s,x)\leq\tau_{l},\\ \tilde{p}(s),&\tau_{l}<c(s,x)\leq\tau_{h},\\ -\rho,&c(s,x)>\tau_{h}.\end{cases}\]

其中 c(s,x) 是 Whisper large-v3 转录与原文的 CER，τl=0.10 为 CLEAN 阈值，τh=0.30 为 VIOLATE 阈值，b=0.5 是 CLEAN 区加成，ρ=1.0 是 VIOLATE 区固定惩罚，~p(s) 是归一化后的非负预测分。

直观理解是：足够清晰时多奖一点，勉强可懂时只给原分，不可懂时直接罚到负数，防止高感知分去补偿转录失败。归一化按预测器而异，例如 AnimeScore 为 \[\tilde{p}(s)=\max(0,p(s)+3.0).\] UTMOS 为分数除以 5，Likability 为 \[\tilde{p}(s)=\frac{p(s)-1}{5}.\] 优势估计则在组内标准化： \[\hat{A}_{i}=(r_{i}-\mu_{r})/(\sigma_{r}+\epsilon).\] 其中 ri 是减去自适应 KL 惩罚后的奖励，μr 与 σr 是同组均值与标准差。

### 关键组件各自负责什么？
基座与码化器负责表示。Llasa-1B-Multilingual 提供自回归声学码生成能力，XCodec2 负责码与波形的双向转换。它们决定了策略的支撑集：奖励再喜欢某种声音，基座采样不到也无法被选中或内化。

奖励预测器负责主观轴的度量。AnimeScore 用 WavLM-base 编码器加 BiLSTM 与 RankNet 排序头，以成对偏好训练，输出有符号分；UTMOS22-strong 是现成自然度预测器，输出 1 至 5 分；Likability 在 CocoNut-Humoresque 上以类别加权交叉熵训练六分类期望模型，验证集上秩相关约 0.712；VAD-Arousal 仅作训练动态反例，未进入人评。

门控与优化器负责约束与移动。CER 门控用同一套阈值对所有轴一视同仁，避免事后挑样本。GRPO 对每条提示采样 K=4 条轨迹，PPO 裁剪比 0.1，熵系数 0，KL 以 in-reward 形式自适应控制，初始 β=0.05，目标 KL=0.05。检查点不以原始预测分最高为准，而以约束感知的验证奖励最高为准，并监控违规率与 KL 漂移。

对照基线负责区分两种成功。Best-of-N 在基座上采样 N 个候选，用同一 CER 门控奖励选优。它检验奖励偏好的样本是否已在基座分布里；GRPO 则检验能否把这种选择行为摊销进策略参数。

![原论文 Figure 1：Overview of constrained perceptual GRPO.](/audio-paper-digest-blog/images/papers/2608.31035/figure-1-3b110c9755665c50.png)

*论文图 1。这张图来自原论文 Figure 1:，图示内容为“Overview of constrained perceptual GRPO.”。请结合“关键组件各自负责什么？”的正文，按图例、坐标轴或模块连线核对；图中没有呈现的内容不作外推。*

### 训练如何跑起来，算力与时间花在哪里？
训练数据固定为 900 条日语 Wikipedia 衍生提示，验证集 100 条，评测集 50 条，三者与奖励模型训练数据互不相交。所有主轴共用同一训练提示集，刻意让奖励预测器成为唯一可变因素。Actor 用 AdamW 全参更新，学习率 5×10^-7，Top-p 0.85，Temperature 1.0，重复惩罚 1.05，输入最长 512，响应最长 2048 个声学码。

实现基于 verl 与 vLLM，rollout 与奖励预测分置于 2 张 H100 80 GB，显存利用率设为 0.6。每步约 115 秒含 Whisper 转录，约 43 秒不含。每提示采样 4 条轨迹，训练批大小 16，PPO 小批 16，单卡微批 4。保存与验证频率均为 30 步，KL 控制器视界 2000 步。

一个细节体现了约束优先的选点逻辑。AnimeScore 日语轨迹在步 1400 验证奖励 2.584 最高，步 1710 原始分升至 0.955 但违规率升至 0.31，验证奖励回落至 2.556，因此不选后者。Likability 训练则用 AdamW 学习率 1×10^-5、权重衰减 0.01、线性 warmup 后余弦衰减，并加入 30 至 50 dB 高斯噪声与±3 dB 增益扰动以保持分数分散度。

### 用什么数据、怎么评、跟谁比？
根据论文正文与图中报告值整理，评测与协议如下。指标方向需先明确：目标轴分数越高越好，CER 与违规率越低越好；人评胜率以多数投票为准。

| 构成/协议 | 具体设置 | 说明 |
|---|---|---|
| 评测集 | 50 条日语 held-out，分为情感表达 18、动漫风格 14、中性对话 10、长叙事 3、语言学挑战 5 | 与训练、验证、奖励训练均不相交 |
| 训练/验证 | 训练 900 条日语，验证 100 条日语，另有英语辅助集各 100 条训练与 50 条评测 | 主实验仅用日语，英语仅作辅助 |
| 解码协议 | 首发单次随机采样度量原始违规率；CER 重试对基座与 GRPO 对称执行，首发 CER>0.30 则重试至首个≤0.30，否则保留最低 CER，保留全部 50 题不事后过滤 | 避免对 RL 支架指标的有偏筛选 |
| 人评协议 | Lancers 平台，每轴 50 对、每对 5 人、每轴 10 人且轴间听者不重叠，A/B 盲测随机侧位，每会话 25 对约 10 分钟报酬 200 日元 | 指标含人类胜率 HWR、机器胜率 MWR、一致率 Agreement，另做投票级 logistic 回归 |
| 基线 | Best-of-4 与 Best-of-8 同门控奖励选优；Target-only 为无 CER 约束对照 | 用于分离采样选择与策略内化 |
| 统计与硬件 | 投票级回归用轴固定效应与题簇稳健标准误，报告 Wilson 区间；训练用 2×H100 80 GB | 单步耗时如训练节所述 |

这样的设计让机器增益、人耳迁移与奖励间隔校准能在同一把尺子上比较，而不是各说各话。

### 主结果：分数涨了，人耳跟上了吗？重排序能否替代训练？
先看机器层面是否轴特异。单奖励 GRPO 的对角线增益最大，说明主观奖励不是通用质量代理：优化 AnimeScore 主要动 AnimeScore，优化 UTMOS 主要动 UTMOS，交叉轴增益小甚至为负。CER 均值在三轴上均下降约 0.02 至 0.03，约束模板在可懂度上起了作用。

根据论文正文与图中报告值整理，关键对比可归纳为下表。数值越高越好或越低越好已在表头标明，最后一列点出该数字支持什么。

| 比较或条件 | 指标 | 明确报告值 | 这项数字支持什么 |
|---|---|---|---|
| AnimeScore Zone-CER vs Best-of-8 vs Target-only | 目标增量 ΔTarget | +1.35 vs +1.21 vs +1.08 | 约束 GRPO 在该轴上机器增益最大 |
| AnimeScore 同上 | 中位 CER / 违规率 | 0.054/16.0% vs 0.070/10.0% vs 0.087/24.0% | Zone-CER 比无约束更稳，但违规率未优于 Best-of-8 |
| UTMOS Zone-CER vs Best-of-8 vs Target-only | ΔTarget | +0.49 vs +0.47 vs +0.25 | 约束带来明显增益，Best-of-8 已接近 GRPO |
| UTMOS 同上 | 中位 CER / 违规率 | 0.074/6.0% vs 0.055/10.0% vs 0.154/14.0% | 约束降低违规，Best-of-8 中位 CER 更低 |
| Likability Zone-CER vs Best-of-8 vs Target-only | ΔTarget | +0.17 vs +0.14 vs +0.15 | 增益小，约束模板未能弥补预测器分辨率不足 |
| Likability 同上 | 中位 CER / 违规率 | 0.098/6.0% vs 0.043/10.0% vs 0.119/16.0% | GRPO 中位 CER 高于 Best-of-8，代价可见 |
| 人评 GRPO vs 基座 50 题多数投票 | HWR | AnimeScore 80.0%，UTMOS 62.0%，Likability 36.0% | 平均迁移不均，Likability 平均未赢基座 |
| 人评 GRPO vs Best-of-8 | HWR | 52.0%、46.0%、48.0% | 人耳层面未显著优于重排序 |
| 投票级回归 1000 票汇合 | 奖励间隔系数 | +0.657，p<0.001，胜算比 1.93；CER 间隔 -0.041，p=0.83 | 奖励差距能预测个体选择，残留 CER 差距不能 |

反证与边界同样重要。Likability 平均 HWR 仅 36.0% 却在奖励绝对差距 0.3 至 1.0 区间投票 HWR 达 90.0%，但该区间仅 8 题，说明平均失败掩盖了高置信区校准。VAD-Arousal 训练中验证奖励提升主要来自违规率从 0.62 降至 0.45，而唤醒度本身仅动 0.014，提示奖励提升可能只是把样本搬出惩罚区。英语辅助实验虽显示 ΔAnimeScore +0.77 且 HWR 70.0%，但听者仍为日语母语池，不能当作跨语言人感证据。

![原论文 Figure 2：Screenshots of the human-evaluation interface.](/audio-paper-digest-blog/images/papers/2608.31035/figure-2-9d66b4bf4e21d7ab.png)

*论文图 2。这张图来自原论文 Figure 2:，图示内容为“Screenshots of the human-evaluation interface.”。请结合“主结果：分数涨了，人耳跟上了吗？重排序能否替代训练？”的正文，按图例、坐标轴或模块连线核对；图中没有呈现的内容不作外推。*

### 哪些结论要谨慎使用？
作者明确把结果定位为三元组诊断，而非对感知轴本身难易的因果判断。不同预测器在架构、数据、尺度与基座覆盖上本就不等，跨轴比较容易把预测器质量误读为轴特性。

评估预算也带来边界。仅用单一基座 Llasa-1B-Multilingual 与单一解码配置，Best-of-8 之外未展开更大重排序预算、固定 KL 对比或多随机种子；每轴 50 题、每题 5 票使 Wilson 区间偏宽，高置信分箱仅 2 至 8 题，Likability 的高间隔校准覆盖度存疑。CER 以 Whisper large-v3 自动转录且无语言特定归一化，阈值 0.10 与 0.30 未做敏感性分析。

这些限制不是否定方法，而是提醒使用方式：把平均迁移与奖励间隔校准分开看，把约束模板当作必要支架而非充分条件，在纳入多奖励后训练前先做小规模人感与校准诊断。

### 若要复现，需要哪些材料与配置？
代码与演示已开放：训练与评估脚本在 animeGRPO 仓库，AnimeScore 预测器在 animescore 仓库，演示页提供提示词、生成音频与奖励分数。基座用 Llasa-1B-Multilingual 公开 checkpoint，声学码化器为 XCodec2，奖励侧涉及 WavLM-base、WavLM-base-plus、UTMOS22-strong、wav2vec2-large-robust 与 Whisper large-v3。论文说明不重新分发合并后基座权重与受限许可的奖励权重，数据集如 Emilia、Multilingual LibriSpeech、CocoNut-Humoresque 与 MSP-Dim 需按原许可获取。

可复现性上，附录给出了 GRPO 通用超参、verl 与 vLLM 的 rollout 配置、检查点选择策略与 KL 轨迹、奖励预测器实现与输出尺度、50 条测试集构成、奖励差距分箱与英语辅助实验细节。训练侧关键设置为每提示 4 条轨迹、批大小 16、PPO 裁剪 0.1、熵系数 0、Top-p 0.85、Temperature 1.0、重复惩罚 1.05、AdamW 学习率 5×10^-7，KL 为 in-reward 模式，初始 β0.05、目标 0.05、视界 2000，验证与保存频率 30 步。

工程上需准备双 H100 80 GB 分别跑 Actor 与奖励预测，区分含 Whisper 与不含 Whisper 的耗时差异，并实现对称的 CER 重试评估与同门 Best-of-N 选优，才能复刻论文的公平对比。

### 收束：何时可以把主观预测器当奖励？
回到开头的反例：字对了不代表好听，分数高了也不代表人会选。论文的价值在于把一句模糊的经验变成可操作的检查清单。先看基座分布是否有足够分数分散度，再看奖励差距是否在样本对内校准人选，最后看平均迁移是否稳健，且全程用 CER 三区把可懂度锁住。

在这个清单下，AnimeScore 在该基座与该预测器上呈现强平均迁移，UTMOS 呈现中度迁移且校准显著，Likability 则呈现平均失败但高置信区校准的异质形态。更关键的是，Best-of-8 在人耳层面与 GRPO 打平，提示策略优化的角色更像是把奖励偏好的采样行为摊销进参数，而非无条件超越重排序。

对刚入行的读者，这意味着做主观语音奖励前，先做小规模、带约束、带重排序对照的诊断，比直接堆多奖励联合训练更省力，也更诚实。预测器会讨好自己，约束与校准是让人耳重新拥有否决权的办法。

<details>
<summary>📎 论文与评分元数据</summary>

标签：#语音合成 #强化学习 #语音质量评估 #零样本

**7.5/10** | 创新 1.4/2 | 技术严谨 1.1/1.5 | 实验充分 1/1.5 | 清晰度 0.8/1 | 影响力 0.9/1.5 | 开源 1/1.5 | 可复现 0.3/0.5 | 工程/实践 1/1.5

✅ **7.5/10** | 前25% | 文档类型：方法研究 | 评分置信度：中 | #语音合成 | #强化学习 | #语音质量评估 #零样本 | [arxiv](https://arxiv.org/abs/2608.31035)

</details>

## ⚖️ 评分依据与证据（展开查看）

<details>
<summary>逐维得分、全文证据与扣分边界</summary>

*   创新性 (1.4/2)：提出 CER 三区硬约束奖励模板仅在 CER ≤ 0.10 与 0.10 < CER ≤ 0.30 时允许感知分生效否则 -1.0，并将奖励定义为预测器—轴—基座三元组，配合平均迁移与奖励间隔校准分离诊断，系统级组合有证据支撑非纯宣传。

*   技术严谨性 (1.1/1.5)：奖励分段函数 R(s,x) 与归一化方式定义清晰，GRPO 组内标准化优势与自适应 in-reward KL 惩罚及检查点选择逻辑自洽，明确未发现推导错误，阈值选择缺乏敏感性分析属于证据充分性问题不计入本维度。

*   实验充分性 (1.0/1.5)：提供 Zone-CER 对 Best-of-8 与 Target-only 的代表性基线及对角线增益对比，50 题每题 5 票多数投票与投票级 logistic 回归及 Wilson 区间，但 单基座 Llasa-1B-Multilingual 单解码配置且高置信分箱仅 2 至 8 题，跨基座与跨域泛化不足。

*   清晰度 (0.8/1)：结构完整覆盖问题定义 CER 分区 GRPO 与 Best-of-N 对照及人评协议，公式与表格方向标注清晰，表后解释区分对角线增益与违规率代价，整体可读但多轴结果与分箱细节密度较高。

*   影响力 (0.9/1.5)：为编解码器语音语言模型主观奖励是否可优化且保持人耳对齐提供可操作四项检查清单，AnimeScore 人类胜率 80.0% 与 UTMOS 62.0% 显示区分度，但 局限于日语众包与单基座小样本，外推至多奖励后训练仍需谨慎。

*   开源 (1.0/1.5)：代码在 https://github.com/sizigi/animeGRPO 与 https://github.com/sizigi/animescore 开放并提供 Demo 与音频样本，但明确不重新分发合并后基座权重与受限许可奖励权重且数据集未提供直接下载链接，属部分核心产物开放。

*   可复现性 (0.3/0.5)：披露 Llasa-1B-Multilingual 与 XCodec2 流水线及 GRPO 组采样 K 为 4 与 PPO 裁剪比 0.1 等关键设置，补充 verl 与 vLLM 配置与验证集 100 条与评测集 50 条划分，但部分实现细节仍依赖仓库补充。

*   工程/实践价值 (1.0/1.5)：基于 verl 与 vLLM 实现双 H100 80GB 流水线区分 rollout 与奖励预测，报告每步约 115 秒含 Whisper 与 43 秒不含 Whisper 及 CER 重试对称评估协议形成可复用工程链路，但未报告真实部署延迟与吞吐测量。

</details>

---

[← 返回 2026-09-01 语音/音乐/音频论文速递](/audio-paper-digest-blog/posts/2026-09-01/)
