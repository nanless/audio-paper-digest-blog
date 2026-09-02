---
title: "Sequential Trajectories and Simultaneous Blending: Multi-Emotion Modeling for Instruction-Following TTS"
date: 2026-09-01
draft: false
tags: [语音合成, 强化学习, 语音克隆, 后训练]
categories: [论文速递]
description: "语音合成 | 7.5/10"
hiddenInHomeList: true
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_arxiv_id: "2608.30325"
paper_digest_api_reader_contract: "beginner-researcher-v3"
paper_digest_api_reader_article_sha256: "e0de0d081a232f23754f504cd337d272c03940fae9ff407b4e46bafc55f95261"
paper_digest_api_reader_plan_sha256: "8e9acc081080c3d39fe0f342669e82853008f4d2b6db45d7922bec1fe7e71c42"
---

# 📄 一句里装不下两种心情：HybridEmo 如何让 TTS 先走完轨迹再调好混合

> 英文题目：*[Sequential Trajectories and Simultaneous Blending: Multi-Emotion Modeling for Instruction-Following TTS](https://arxiv.org/abs/2608.30325)*
>
> 一句话：**针对指令跟随 TTS 中多情感的时序演变与并发共存难题，HybridEmo 用有监督微调初始化再以样本感知路由的 GRPO 分别优化轨迹一致性与混合密度奖励，在 MultiEmo-Test 上提升轨迹正确性与混合强度且保持 WER 在 2% 以内，代价是奖励与评估同源且切分与锚点仍依赖近似假设。**

> 标签：#语音合成 #强化学习 #语音克隆 #后训练
>
> 评分：**7.5/10** | 创新 1.4/2 | 技术严谨 1/1.5 | 实验充分 1/1.5 | 清晰度 0.8/1 | 影响力 1/1.5 | 开源 1/1.5 | 可复现 0.3/0.5 | 工程/实践 1/1.5


## 👥 作者与机构

- Yan Zhou：机构信息未在 arXiv HTML 中可靠披露
- Yun Hong：机构信息未在 arXiv HTML 中可靠披露
- Yang Feng：机构信息未在 arXiv HTML 中可靠披露

## 💬 毒舌点评

亮点在于把多情感控制拆成时序轨迹与并发混合两类任务，并为其定制可区分的奖励路由与混合密度打分，问题定义清晰且奖励设计有针对性。短板是轨迹分段依赖文本长度等比切分、混合奖励依赖离线合成锚点与 emotion2vec 判别器，评估高度耦合于同一判别空间且人工偏好样本仅 80 次判断，证据闭环感偏重。

## 📌 核心摘要

指令跟随的情感语音合成（Emotional Text-to-Speech，Emotional TTS）长期以单句单一情感为主，难以刻画真实话语中多情感的时序演变与并发共存。HybridEmo 提出两阶段后训练（Post-Training）框架，先以有监督微调（Supervised Fine-Tuning，SFT）初始化多情感生成能力，再以组相对策略优化（Group Relative Policy Optimization，GRPO）对齐语音令牌策略，并通过样本感知的混合奖励路由轨迹一致性与混合密度反馈。与现有以全局可懂度或说话人相似度为奖励的语音强化学习不同，该方法为轨迹提供均值与最弱段联合的分段对齐一致性奖励，为混合提供基于高斯混合模型（Gaussian Mixture Model，GMM）锚点的帧级并集支持与弱目标裕量正则。在包含 720 个条件的 MultiEmo-Test 上，轨迹宏平均正确性从 3.24 提升至 3.33，混合强度从 3.47 提升至 3.71，且词错误率（Word Error Rate，WER）保持在 2% 以内。该框架验证了任务结构化奖励对多情感指令跟随的有效性，但其奖励与评估均依赖同一情感表征空间，且离线锚点的域外泛化与时序切分的近似性仍限制外推。

## 🔗 开源与复现资源

- 代码：https://github.com/ictnlp/HybridEmo
- 模型权重：论文中未提及 HybridEmo 独立权重链接，初始化权重为 0.5B CosyVoice 3 checkpoint，来源为 https://github.com/FunAudioLLM/CosyVoice
- 数据集：SFT 语料基于 Emilia Dataset 英文子集构建，链接为 https://huggingface.co/datasets/amphion/Emilia-Dataset，包含 124096 条 utterance，总时长 383.6 小时，其中 trajectory 119981 条，blending 4115 条，MultiEmo-RL 包含 14400 个样本，MultiEmo-Test 包含 720 个样本，评估参考音频来自 seed-tts-eval，链接为 https://github.com/BytedanceSpeech/seed-tts-eval，声学解码随机采样 LibriSpeech，链接为 https://www.openslr.org/12，表征分析使用 RAVDESS，链接为 https://zenodo.org/records/1188976
- Demo：论文中未提及
- 复现材料：SFT 训练 5 epoch，使用 Adam，学习率 \(2\times10^{-6}\)，全局 batch size 64，GRPO 训练 1 epoch，使用 verl 框架，链接为 https://github.com/verl-project/verl，每个输入采样 8 条 rollout，温度 0.6，学习率 \(1\times10^{-6}\)，batch size 64，带 KL 正则，训练设备为 4 张 NVIDIA H800 GPU，奖励权重 \(\beta=0.7\)，\(w_{\mathrm{asr}}=0.5\)，\(w_{\mathrm{consi}}=0.5\)，\(w_{\mathrm{gmm}}=0.3\)，\(\alpha=0.01\)，\(\rho=0.05\)，离线锚点阈值 \(\tau=0.8\)，边界裁剪 5%，LDA 降维至 6 维，Isolation Forest 去除 8% 离群帧，每类情绪 GMM 组件数 3
- 论文中引用的开源项目：CosyVoice 3 https://github.com/FunAudioLLM/CosyVoice，SenseVoice https://github.com/FunAudioLLM/SenseVoice，emotion2vec plus large https://huggingface.co/emotion2vec/emotion2vec_plus_large，Qwen3-Omni-30B-A3B-Captioner https://huggingface.co/Qwen/Qwen3-Omni-30B-A3B-Captioner，MiniMax-M2.5 https://huggingface.co/MiniMaxAI/MiniMax-M2.5，verl https://github.com/verl-project/verl，Qwen3-Omni-30B-A3B-Instruct https://huggingface.co/Qwen/Qwen3-Omni-30B-A3B-Instruct，whisper-large-v3 https://huggingface.co/openai/whisper-large-v3，UTMOSv2 https://huggingface.co/sarulab-speech/UTMOSv2，ERes2Net https://modelscope.cn/models/iic/speech_eres2net_sv_en_voxceleb_16k

## 🧭 深度解读

### 当一句话里情绪会变，TTS 该怎么听懂指令
想象一句台词：前半句是压抑的道歉，后半句突然转为愤怒的质问，最后又落回无奈。如果合成系统只接受一个全局标签如“悲伤”，它只能把整句都染成同一种颜色，听感既不真实也违背剧本。真实对话里情感常常是流动的，或是像“又气又难过”那样叠在一起的。

指令跟随的情感语音合成想解决的就是这种细粒度控制：用户用自然语言写一句指令，模型要生成既保留文本内容和参考音色，又精确实现指令中情感模式的语音。难点在于，情感不是像字那样可以逐字对齐的符号，它分布在韵律、能量和音色细节里，且没有唯一的正确波形。

更棘手的是，现有系统大多在单句单情感上训练和评估，奖励也多关注可懂度或说话人相似度这类全局属性。当指令要求“先开心后悲伤”或“愤怒与悲伤共存”时，模型缺乏能定位段错误或衡量共存程度的反馈信号，这正是 HybridEmo 要补上的结构化监督。

### 从离散语音令牌到强化学习，情感控制走到了哪一步
离散语音令牌为 TTS 接上了大语言模型的生成范式。VALL-E 把零样本 TTS 做成对神经编解码码本的条件语言建模，CosyVoice 系列则用自回归语音令牌大语言模型加流匹配声学解码器实现可控合成与音色克隆。这类架构把内容与声学解耦，让文本与指令可以先决定令牌序列，再由解码器渲染波形。

在控制方式上，PromptTTS、InstructTTS、EmoVoice 等把固定风格标签换成自然语言描述，用大语言模型理解细粒度情感描述并预测语音令牌。但它们大多仍把情感当作整句条件，没有显式建模轨迹的时序关系或混合的并发关系。

强化学习为序列级偏好提供了补充。DPO 直接从偏好对学习，GRPO 则通过组内采样估计相对优势而无需评论家网络。F5R-TTS、CosyVoice 3 的奖励优化等已用可懂度和说话人相似度做 GRPO，但这些全局奖励无法回答“第二段情感是否缺失”或“两种情感是否真的共存”。HybridEmo 的位置就在这里：保留令牌化架构与 GRPO 框架，但把奖励按任务结构重做。

### 把多情感拆成两类任务，才能定义对的奖励
论文把多情感控制形式化为两类互补任务。给定文本 x、情感指令 ce 和音色参考 yref，模型生成波形要满足：

\[\hat{y}=F_{\theta}(x,c_{e},y_{\mathrm{ref}}).\]

情感轨迹任务提供有序序列 T={(xk,ek)}，x 由各段文本拼接而成，要求按顺序实现每个阶段的情感；情感混合任务提供无序对 B={A,B}，要求两种情感在整句共存。前者考有序完成，后者考并发兼容。

**情感轨迹 × 情感混合：** 情感轨迹负责刻画一句话内情感按顺序切换，要求模型在正确的时间段表达正确的情感，解决的是时序正确性与完整性；情感混合负责让两种非中性情感在全句同时存在，解决的是并发共存与强度平衡。二者搭配才覆盖真实话语的两种多情感形态，单独只做轨迹会漏掉共存，单独只做混合会漏掉演变，组合后论文才能用同一策略处理有序与无序两类指令。

这种拆分直接暴露了监督失配：有监督微调的交叉熵只拟合目标令牌序列，不评价情感模式是否按指令实现；而单情感分类器的整句后验既不能定位轨迹中的错序与缺段，也不能衡量混合中双目标的共存度。因此需要为两类结构分别构造可区分的奖励，并在同一策略下路由。

### HybridEmo 的两阶段流水线：先学会，再对齐
HybridEmo 基于 CosyVoice 3，只优化自回归语音令牌大语言模型策略 πθ，冻结语音分词器与流匹配声学解码器 D。解码时 D 才使用 yref 渲染音色，大语言模型仅以 x 和 ce 为条件，实现内容与情感控制和音色渲染的解耦。输入到输出的主路径是文本与指令进入策略采样令牌，再经解码器成波形。

为直观区分两种多情感形态，先看任务示意图。它把轨迹画成分段纯色波形，混合画成全程叠加的交叉带，中间由同一个 TTS 模型分叉指向两侧，强调统一输入下两种输出结构的差异。

> **看图路径：** 1. 对比左右两栏的波形着色方式：左侧分段纯色，右侧全程叠加；2. 看中间 TTS 模型箭头如何同时指向两种任务，理解统一输入不同输出形态；3. 注意混合任务中⊗符号与交叉渐变带的含义：并发而非拼接

![原论文 Figure 1：Multi-emotion control through sequential emotion trajectories and concurrent emotion blending.](/audio-paper-digest-blog/images/papers/2608.30325/figure-1-9ac4e1be9b7e8c00.png)

*论文图 1。原论文 Figure 1:：“Multi-emotion control through sequential emotion trajectories and concurrent emotion blending.”。*

图中左侧 3 段黄蓝红波形分别标注`<happy>``<sad>``<angry>`，对应时序拼接；右侧`<angry>`⊗`<sad>`对应全程叠加的红蓝渐变带，说明混合不是拼接而是并发。中间 TTS Model 用双向箭头连接两侧，头顶气泡显示指令输入，这种可视化直接支撑后文为何需要两种奖励：分段一致性对应左侧，混合密度对应右侧。

整体训练分 2 个阶段。第 1 阶段用 124096 条多情感演示做有监督微调，目标是学习条件令牌分布：

\[\mathcal{L}_{\mathrm{SFT}}=-\sum_{t=1}^{|z^{*}|}\log p_{\theta}\left(z_{t}^{*}\mid z_{\lt t}^{*},x,c_{e}\right).\]

第二阶段以该 checkpoint 为起点做 GRPO 对齐。对每条无目标波形的条件采样 G=8 条令牌轨迹，解码成波形后由样本感知的混合奖励打分，再计算组内相对优势并在 KL 约束下更新策略。奖励路由由样本类型 s 决定，共享的自动语音识别奖励与任务专用奖励二选一组合。

GRPO 对齐的细节在另一幅流程图中展开，值得在此对照主路径理解奖励如何分流与合并。

> **看图路径：** 1. 从左到右追踪文本、指令、音色参考如何进入 TTS 策略并采样多条候选；2. 在 Sample-aware Hybrid Reward 框内区分三条奖励分支的输入与输出；3. 观察 Task Type Router 的虚线如何路由到不同的最终奖励组合再触发 GRPO 更新

![原论文 Figure 2：HybridEmo GRPO alignment.](/audio-paper-digest-blog/images/papers/2608.30325/figure-2-ef59fa93c500d2f0.png)

*论文图 2。原论文 Figure 2:：“HybridEmo GRPO alignment. A shared ASR reward preserves linguistic content, while the task router selects either trajectory consistency or GMM-based mixture-density feedback…”。*

图中左侧 Text、Natural Language Emotion Instruction、Timbre Reference Audio 汇入 TTS Policy πθ 并扇出多条 Candidate Speech Samples；右侧 Sample-aware Hybrid Reward 框内并列 ASR Reward、Emotion Consistency Reward、Blending GMM Reward 3 个分支，中间 Task Type Router 用橙色与紫色虚线分别将轨迹与混合样本路由到不同分支，最终在 Sample-aware Reward Combination 处按公式组合后触发 GRPO Update 并以绿色箭头回传策略。这种布局说明内容奖励始终共享，而情感奖励按类型掩蔽。

**有监督微调 × 组相对策略优化：** 有监督微调负责让模型先学会多情感语音令牌的条件分布，提供稳定的初始生成能力，解决从零开始奖励稀疏的问题；组相对策略优化负责在无配对目标波形的条件下，通过组内采样的相对优势直接优化可感知的情感模式，解决交叉熵不评价情感结构的失配。二者搭配形成 2 阶段后训练，先拟合分布再对齐偏好，比单独使用任 1 阶段更能兼顾稳定性与指令跟随精度。

### 共享的内容守护与轨迹的分段一致性
所有样本共享的自动语音识别奖励负责守住可懂度。用 SenseVoice 转写候选波形，经同一英语文本归一化后计算词错误率 εwer，再映射为有界奖励：

\[R_{\mathrm{asr}}=\operatorname{clip}_{[0,1]}\!\left(1-\tanh(3\epsilon_{\mathrm{wer}})\right).\]

tanh 的非线性让低 WER 接近满分、高 WER 快速惩罚，clip 保证在 0 到 1 之间，避免情感优化以牺牲内容为代价。

轨迹分支要解决无时间戳下的定位问题。论文按文本长度比例近似切分波形时长 D，第 k 段区间为：

\[I_{k}=\left[D\frac{\sum_{j=1}^{k-1}\ell_{j}}{\sum_{j=1}^{K}\ell_{j}},D\frac{\sum_{j=1}^{k}\ell_{j}}{\sum_{j=1}^{K}\ell_{j}}\right).\]

其中ℓk=max(|xk|,1)。每段用 emotion2vec+ large 提取目标情感后验 pk，计算均值 p̄与最弱段 pmin，加权得到：

\[R_{\mathrm{consi}}=\beta\bar{p}+(1-\beta)p_{\min}.\]

β=0.7 兼顾整体正确性与最差段补全，单段时退化为整句一致性。这种均值加最弱段的设计防止高平均分掩盖失败段。

**自动语音识别奖励 × 轨迹一致性奖励：** 自动语音识别奖励负责守护内容可懂度，通过转写后计算词错误率并映射为有界分数，防止情感优化把字念错；轨迹一致性奖励负责评价有序情感段是否按指令完成，通过分段后验的均值与最弱段加权来定位缺失段。二者搭配让轨迹样本在优化情感时不牺牲文本保真，单独只用情感奖励易导致 WER 上升，组合后才实现内容与情感的联合对齐。

### 混合的密度并集与弱目标裕量
混合任务没有分段标签，整句后验无法表示共存。论文离线用基座 CosyVoice 3 合成单情感语音，经置信度阈值 τ=0.8 筛选并裁掉边界 5 % 帧后提取帧级情感特征，经线性判别分析投影矩阵 W 降至 6 维并用孤立森林去除 8 % 离群帧，为每种情感拟合 3 分量的全协方差高斯混合模型：

\[p_{e}(u)=\sum_{m=1}^{M}\omega_{e,m}\mathcal{N}(u;\mu_{e,m},\Sigma_{e,m}).\]

W 与各情感的密度锚点在强化学习阶段冻结。

在线打分时，候选波形的帧特征 ht 投影为 ut=Wht，对目标对 A、B 计算对数域并集分数：

\[\ell_{\mathrm{mix}}(u_{t})=\operatorname{LSE}\!\left(\log p_{A}(u_{t}),\log p_{B}(u_{t})\right).\]

LSE 让落在任一目标支持区的帧都能获得高分，体现并发兼容性。为防止坍缩到单一情感，再计算归一化贡献 qt,e 与弱目标平均占比 m，并引入裕量惩罚与标准化后经 Sigmoid 得到有界奖励 Rgmm。该分支在保留情感内多模态的同时显式惩罚单锚点主导。

离线锚点的几何形态有助于理解为何需要密度而非硬分类。下图把 6 维空间投影到前 2 维可视化。

> **看图路径：** 1. 观察 LD1-LD2 平面上 7 种情感点云与椭圆的分离与重叠区域；2. 注意每种颜色的三个叉号与对应椭圆如何体现多模态；3. 对比 happy 与 neutral、sad 与 fearful 的重叠程度，思考混合为何需要密度而非硬分类

![原论文 Figure 4：2D LDA projection of three-component GMM emotion anchors.](/audio-paper-digest-blog/images/papers/2608.30325/figure-4-4cbb51192ede2fe9.png)

*论文图 4。原论文 Figure 4:：“2D LDA projection of three-component GMM emotion anchors. Crosses mark component means, and ellipses show 95% contours; scoring uses the full 6D space.”。*

图中横轴 LD1、纵轴 LD2，7 种情感用不同颜色点云表示，叉号为高斯分量均值，椭圆为 95 % 轮廓。可见 angry 在左上方集中，sad 与 fearful 在右侧部分重叠，happy 与 neutral 在下方重叠，disgusted 与 surprised 居中但可分。部分重叠说明真实情感边界模糊，硬分类会丢失渐变信息，而多椭圆结构说明同情感内存在多模态，支撑论文用混合密度而非单点原型来衡量混合强度。

**线性判别分析投影 × 高斯混合模型锚点：** 线性判别分析投影负责把高维帧级情感特征压缩到 6 维可分空间，降低噪声与计算负担；高斯混合模型锚点负责在该空间内为每种情感拟合 3 个全协方差分量，保留同情感内的多模态分布。前者提供判别性坐标系，后者提供连续密度支撑，二者搭配才能用密度并集去衡量混合样本是否同时落在两个目标情感的支持区内，单独投影无密度无法打分，单独建模无投影则判别性不足。

**并集支持度 × 弱目标裕量：** 并集支持度负责用对数求和指数计算帧级对两个目标情感密度的联合兼容性，分数高说明该帧被任一目标支持；弱目标裕量负责在 utterance 级别统计两个目标贡献较弱一方的平均占比，当弱方低于阈值时施加惩罚。前者鼓励落在目标区域，后者抑制单情感主导，二者搭配才让混合奖励既追求强度又保证共存，单独并集易坍缩到单一情感，单独裕量则缺乏细粒度帧级信号。

### 如何训练与解码：只动大语言模型，冻结其余
训练配置刻意保持克制。初始化为 0.5B 的 CosyVoice 3 checkpoint，有监督微调训练 5 轮，Adam 优化器，学习率 2×10⁻⁶，全局 batch size 64，目标是拟合真实多情感语音的条件令牌分布。强化学习阶段在 MultiEmo-RL 上训练 1 轮 GRPO，学习率 1×10⁻⁶，batch size 64，每输入采样 8 条轨迹，采样温度 0.6，并对有监督微调参考策略施加 KL 正则。

奖励权重设为 wasr=0.5、wconsi=0.5、wgmm=0.3，轨迹分支 β=0.7，混合分支 α=0.01、ρ=0.05。离线锚点构建中 τ=0.8、边界裁剪 5 %、LDA 降至 6 维、孤立森林去除 8 %、每情感 3 分量。奖励的运行均值与尺度经指数滑动平均更新，尺度基于绝对偏差，保证标准化稳定。

使用的框架为 verl，训练在 4 张 NVIDIA H800 上运行。推理时策略采样温度仍为 0.6，声学解码器随机采样 LibriSpeech 话语作为音色提示；评估时所有支持音色条件的系统使用相同参考语音，Qwen3-TTS 因接口限制采用文本指令加指定音色，作为外部能力参考而非严格对齐对比。

### 数据如何构造，评测如何组织
要回答结构化奖励是否有效，先要看数据与评测是否把两类任务分开度量。论文从 Emilia 英语子集出发，先用 Qwen3-Omni-30B-A3B-Captioner 描述声学与副语言特征，再用 MiniMax-M2.5 筛选情感语音并按 7 类情感标注轨迹或混合结构并生成自然语言指令。轨迹样本含 1 至 3 个情感标注文本段，混合样本含 2 个不同非中性情感。

评测协议区分任务结构。轨迹按 1 段、2 段、3 段分别报告正确性与自然度，自然度仅在多段时定义；混合报告强度与自然度，强度衡量双情感共存的感知强度，自然度衡量共存是否自然而非串行或坍缩。内容保真用 whisper-large-v3 计算语料级 WER，声学质量用 UTMOSv2，说话人相似度用 ERes2Net 余弦相似度。情感控制分数由 Qwen3-Omni-30B-A3B-Instruct 按 1 至 5 分 rubric 打分。

下表整理 3 套数据的构成与评测条件，统一口径便于对照后续结果。所有系统合成相同目标文本，轨迹与混合分别用对应指标，方向已在表头标明。

| 数据集 / 协议 | 规模与构成 | 时长/样本类型 | 情感与指令 | 评估条件与指标方向 |
|---|---|---|---|---|
| SFT 语料 | 124096 条 (轨迹 119981 条, 混合 4115 条) | 383.6 小时 (轨迹 372.4 小时, 混合 11.2 小时) | 7 类情感，轨迹 1-3 段，混合 12 个无序对，自然语言指令 | 用于初始化，不直接评测 |
| MultiEmo-RL | 14400 条 (轨迹 12000, 混合 2400) | 无目标波形的文本-指令对 | 覆盖 12 个混合对，轨迹含情感标注转录仅用于奖励 | GRPO 训练 1 轮，每输入 8 条采样，温度 0.6 |
| MultiEmo-Test | 720 条 (轨迹 600: 每段数 200, 混合 120) | 参考音色来自 Seed-TTS 英语评测集 | 同 12 个混合对，训练与测试无重复 | 轨迹正确性↑/自然度↑，混合强度↑/自然度↑，WER↓，UTMOS↑，SIM↑ |
| 基线与对照 | CosyVoice 3 0.5B, EmoVoice 0.5B/1.5B, Qwen3-TTS 1.7B | 相同目标文本，相同参考语音（Qwen3-TTS 除外） | 相同自然语言情感指令 | Qwen3-TTS 为指定音色非语音提示，仅作外部参考 |
| 人工评估 | 4 名听者，每对模型 80 次判断 (轨迹 70% 混合 30%) | 成对偏好 Win/Tie/Lose | 考量正确性、表现力、自然度、可懂度 | 与自动打分互为印证 |

该表说明混合在 SFT 中仅占约 3 %，数据不平衡是后续联合训练需要关注的背景。更关键的是奖励与评估均依赖 emotion2vec+ large 空间，存在同源偏置风险，这决定了后续结果需要同时看自动分数与人工偏好。

统一口径上，轨迹宏平均正确性为 1-3 段平均，自然度为 2-3 段平均；混合强度与自然度为整句感知分；WER 越低越好，UTMOS 与 SIM 越高越好。基线中 CosyVoice 3 是同架构最公平对照，EmoVoice 为开源情感 TTS 代表，Qwen3-TTS 因音色条件不同只能作为能力上限参考。

这些设定让主结果的比较问题更清晰：结构化奖励是否在保持 WER 与 SIM 的前提下，同时提升轨迹的段级正确性与混合的共存强度。

### 主结果：轨迹更准，混合更强，且没有把字念错
主结果要回答的核心问题是：结构化奖励是否同时提升轨迹正确性与混合强度，且不损害可懂度与音色。所有系统在 MultiEmo-Test 上合成相同文本，指标按 1 至 5 分与百分比报告，轨迹宏平均与混合感知分是关键。

下表根据论文正文与图中报告值整理，聚焦与最强基线 CosyVoice 3 的净收益，并保留外部参考 Qwen3-TTS 以定位能力边界。表中箭头表示指标方向，数值均为论文明确报告值。

| 比较条件 | 轨迹宏平均正确性 (1-3 段) ↑ | 轨迹宏平均自然度 (2-3 段) ↑ | 混合强度 ↑ | 混合自然度 ↑ | WER (轨迹/混合) ↓ | 支撑的结论 | 不能推出的结论 |
|---|---|---|---|---|---|---|---|
| CosyVoice 3 (基线) | 3.24 | 2.40 | 3.47 | 3.06 | 1.91% / 0.30% | 基准能力 | - |
| HybridEmo | 3.33 (+0.09) | 2.50 (+0.10) | 3.71 (+0.24) | 3.24 (+0.18) | 1.87% / 0.37% | 结构化奖励有效且 WER 保持在 2% 内 | 未证明跨语言泛化 |
| EmoVoice-0.5B | 3.27 | 2.41 | 3.57 | 3.13 | 4.29% / 1.89% | 开源基线低于 HybridEmo | 模型规模非唯一因素 |
| Qwen3-TTS* (指定音色) | 3.44 | 2.57 | 3.71 | 3.29 | 2.69% / 0.64% | 外部能力参考，混合强度持平 | 音色条件不严格对齐，不可直接排名 |
| 分段细节 HybridEmo | 1 段 3.78 / 2 段 3.01 / 3 段 3.21 | 2 段 2.40 / 3 段 2.60 | - | - | UTMOS 3.21/3.17, SIM 0.66/0.64 | 各段长均有增益，3 段仍处中等水平 | 未与强制对齐时长模型对比 |

表中 HybridEmo 相对 CosyVoice 3 在轨迹上每段均提升，混合强度追平 Qwen3-TTS 且自然度仅落后 0.05，UTMOS 与说话人相似度未出现明显退化，说明情感优化未以牺牲声学质量为代价。最公平的净收益来自同为 0.5B 且同用语音提示的 CosyVoice 3 对比，而非与 Qwen3-TTS 的跨条件对比。

一个未胜出项是轨迹自然度：HybridEmo 的 2.50 仍低于 Qwen3-TTS 的 2.57，3 段正确性 3.21 也仅处中等水平，说明长轨迹的过渡连贯性仍有差距。负结果方面，EmoVoice-1.5B 在轨迹 WER 上达 7.94%，显著高于其他系统，提示规模增大未必自动改善可懂度。

不能由这张表推出的是跨语言与跨情感粒度的泛化能力，也不能推出奖励与评估同源偏置已被排除，因为自动分数与奖励共享 emotion2vec+ large 判别空间。WER 上 1.87% vs 1.91% 仅差 0.04%，接近测量噪声，不宜过度解读为可懂度提升。

人工偏好进一步印证自动指标。图 3 展示从 HybridEmo 视角的成对偏好，值得在此对照自动分数看听感是否一致。

> **看图路径：** 1. 横向对比三行中蓝色 Win 段与橙色 Lose 段的长度差异；2. 关注最下一行与 Qwen3-TTS 对比时三色几乎均分的形态；3. 结合图上 46% vs 14% 等数字判断人工偏好是否与自动指标一致

![原论文 Figure 3：Pairwise preferences from human listeners on MultiEmo-Test from HybridEmo’s perspective.](/audio-paper-digest-blog/images/papers/2608.30325/figure-3-b557cc6b1884c45c.png)

*论文图 3。原论文 Figure 3:：“Pairwise preferences from human listeners on MultiEmo-Test from HybridEmo’s perspective.”。*

图中三行堆叠条分别对应与 CosyVoice 3、EmoVoice-0.5B、Qwen3-TTS 的对比，横轴为偏好率，蓝色 Win、灰色 Tie、橙色 Lose。第一行 46% Win、40% Tie、14% Lose，第二行 49% Win、34% Tie、17% Lose，均显示 Win 超出 Lose 约 32 个百分点；第三行 35% Win、29% Tie、36% Lose 则基本均分。像素上蓝色段在前两行明显长于橙色段，在第三行与橙色段等长，说明 HybridEmo 在人工听感上优于同条件基线，与 Qwen3-TTS 持平但受音色条件差异影响。

### 消融：谁在起作用，联合训练是否必要
消融要分离有监督初始化与结构化强化学习的贡献，并检验混合裕量的作用。比较问题是：仅 SFT、直接 GRPO、单任务 GRPO 与联合 GRPO 在轨迹与混合上的增益如何分配。统一条件为同一 MultiEmo-Test、同一 1-5 分与 WER 口径，基线为 CosyVoice 3。

下表根据论文正文与图中报告值整理，展示不同变体在两类任务上的表现与代价。

| 变体 | 轨迹正确性 (1-3 段宏平均) ↑ | 轨迹自然度 (2-3 段宏平均) ↑ | 混合强度 ↑ | 混合自然度 ↑ | WER (轨迹/混合) ↓ | 解释 |
|---|---|---|---|---|---|---|
| CosyVoice 3 | 3.24 | 2.40 | 3.47 | 3.06 | 1.91% / 0.30% | 起点 |
| SFT | 3.28 (+0.04) | 2.47 | 3.50 (+0.03) | 3.03 | 2.06% / 0.50% | 初始化有增益但有限 |
| Direct Hybrid-GRPO | 3.30 | 2.47 | 3.50 | 3.03 | 2.08% / 0.71% | 无 SFT 时 WER 上升且低于联合模型 |
| Trajectory-GRPO | 3.35 | 2.53 | 3.53 | 3.05 | 1.85% / 0.30% | 单任务在轨迹上略超联合模型 |
| Blending-GRPO | 3.26 | 2.44 | 3.63 | 3.17 | 1.82% / 0.37% | 单任务混合低于联合模型 |
| HybridEmo (联合) | 3.33 | 2.50 | 3.71 | 3.24 | 1.87% / 0.37% | 混合最强且轨迹保持竞争力 |
| HybridEmo w/o margin | - | - | 3.66 (-0.05) | 3.05 (-0.19) | 0.32% | 去除裕量后强度与自然度均回落 |

最公平的净收益是联合模型在混合上的领先：3.71 超过单任务 Blending-GRPO 的 3.63，且自然度 3.24 也高于 3.17，说明两类奖励在同一策略下协同而非互斥。轨迹上 Trajectory-GRPO 的 3.35 略高于联合的 3.33，体现任务专精与联合泛化的权衡。

失败项是 Direct Hybrid-GRPO：跳过 SFT 直接做混合奖励 GRPO 虽有情感增益，但 WER 升至 2.08%/0.71%，高于 SFT 初始化后的联合训练，说明先拟合分布再对齐偏好更稳。另一负结果是仅 SFT 的提升有限，轨迹 +0.04、混合 +0.03，印证交叉熵本身不直接优化情感模式。

不能推出的是单任务一定优于联合：轨迹上单任务略优但混合上联合更优，说明不同任务对共享策略的依赖不同。去除裕量的回落尤其在自然度上更明显，说明并集支持度若无弱目标约束易产生生硬或偏向一方的混合。

另一组表征分析显示 CosyVoice 3 分词器重建前后在 emotion2vec+ large 空间的平均余弦相似度为 0.9441，说明离散化未严重丢失情感信息，为后续在该空间内用密度打分提供了前提。

### 边界与风险：奖励同源、切分近似与数据不平衡
论文坦诚了若干近似。轨迹奖励按文本长度等比切分时长，假设文本长度近似反映发音时长，在语速不均或停顿较多时可能错位，且未与强制对齐或时长模型对比；3 段轨迹正确性仅 3.21，仍处中等水平，说明长轨迹的时序控制仍有提升空间。

混合奖励依赖离线合成的单情感锚点与固定 6 维投影，合成数据可能放大基座模型的偏置，对真实人声的泛化未验证；LDA 降维的信息损失也未量化。更关键的是，训练奖励与评估打分同源于 emotion2vec+ large 与 Qwen3-Omni 的判别空间，存在奖励黑客与评估同源偏置风险，缺乏与人类情感感知的独立相关性校准。

数据与评估层面，SFT 语料中混合仅 4115 条约 11.2 小时，占比不足 3 %，数据不平衡可能影响联合训练；MultiEmo-Test 仅 720 条、覆盖英语 7 类情感与 12 个混合对，语言、文化与情感粒度的外推未检验；人工评估每对仅 80 次判断且未报告一致性与统计显著性，Qwen3-TTS 对比因接口不支持语音提示与文本指令并行而采用指定音色，条件不严格对齐。

### 复现要点：数据、配置与开源现状
复现需要回答哪些材料已就绪、哪些仍缺失。数据上，SFT 语料基于 Emilia 英语子集构建，共 124096 条约 383.6 小时；MultiEmo-RL 含 14400 条文本-指令对，MultiEmo-Test 含 720 条，参考音色来自 Seed-TTS 英语评测集，训练与测试经程序校验无重复；声学解码随机采样 LibriSpeech，表征分析使用 RAVDESS。

训练上，SFT 5 轮、GRPO 1 轮，batch size 均为 64，学习率分别为 2×10⁻⁶ 与 1×10⁻⁶，每输入 8 条采样温度 0.6，KL 正则以 SFT 为锚点，使用 verl 框架在 4 张 H800 上运行；奖励与锚点超参已完整披露，包括 β=0.7、α=0.01、ρ=0.05、τ=0.8、边界裁剪 5 %、孤立森林 8 %、GMM 每情感 3 分量等。

下表按复现维度整理已提供与待补齐项，统一说明对复现的影响与成本。

| 复现维度 | 已提供 | 缺失或待补齐 | 关键参数与来源 | 对复现的影响与成本 |
|---|---|---|---|---|
| 代码与框架 | HybridEmo 仓库、verl、CosyVoice 3、SenseVoice、emotion2vec+ large | HybridEmo 权重未单独发布 | 初始化为 0.5B CosyVoice 3 checkpoint | 可跑通流程但难一键复现最优分数 |
| 数据 | Emilia、Seed-TTS、LibriSpeech、RAVDESS 链接，SFT 统计完整 | MultiEmo-RL/Test 无下载包 | 需用 Qwen3-Omni 与 MiniMax-M2.5 重建标注 | 需自行按描述重建指令与标注，成本较高 |
| 训练配置 | 轮数、batch、学习率、采样数、温度、奖励权重、锚点阈值 | 训练时长、KL 系数、运行统计更新细节 | β=0.7, α=0.01, ρ=0.05, τ=0.8 | 影响收敛稳定性与复现精度 |
| 评估 | Qwen3-Omni 打分、whisper WER、UTMOSv2、ERes2Net SIM | 人工评估一致性与显著性 | 1-5 分 rubric, WER↓, UTMOS↑, SIM↑ | 难以判断小幅差异是否稳健 |
| 硬件与预算 | 4×H800, SFT 5 轮+GRPO 1 轮 | 具体小时数与吞吐未报告 | batch 64, 8 路采样 | 难以估算部署延迟与资源占用 |

开源上，代码已发布于https://github.com/ictnlp/HybridEmo，初始化权重为 0.5B CosyVoice 3 checkpoint；但论文未提供 HybridEmo 独立权重链接，MultiEmo-RL 与 MultiEmo-Test 未发布可下载数据包，Demo 未提及，核心产物仅部分开放。

这意味着第三方复核可以验证方法逻辑与奖励设计，但要达到论文报告的 3.33/3.71 分数，仍需补齐数据重建与细节超参。运行均值更新描述较简略，也会增加复现时的调参负担。

总体看，工程流水线已可复用，但完整复现仍依赖自行构造多情感指令与离线锚点，数据不平衡与奖励同源问题也需要在复现时额外做独立人类校准。

### 收束：结构化奖励让指令真正落地
回到开头的问题：一句话里的情绪会变，也会叠加。HybridEmo 的判断是，不要用一个全局分数去评价两种结构，而是让奖励本身就区分结构。轨迹用分段后验的均值与最弱段来守住每一段，混合用密度并集与弱目标裕量来守住共存，内容则由有界的 ASR 奖励兜底，三者在样本感知路由下由同一策略共同优化。

证据上，轨迹宏平均正确性从 3.24 到 3.33、混合强度从 3.47 到 3.71 且 WER 保持在 2 % 以内，人工偏好对同条件基线胜率超出负率 32 个百分点，对 Qwen3-TTS 基本持平；消融显示先有监督再强化优于直接强化，联合训练在混合上优于单任务，去除裕量则强度与自然度回落。

代价与下一步也很清晰：切分的等比近似、离线合成锚点的域外泛化、奖励与评估同源的偏置，以及英语与有限情感对的覆盖，都限制了外推。若能在真实多情感语音上学习锚点、引入时长模型或强制对齐来替代等比切分，并用独立于训练空间的人类感知校准评估，结构化奖励的思路有望从实验室的 720 条测试走向更开放的语言与场景。

<details>
<summary>📎 论文与评分元数据</summary>

标签：#语音合成 #强化学习 #语音克隆 #后训练

**7.5/10** | 创新 1.4/2 | 技术严谨 1/1.5 | 实验充分 1/1.5 | 清晰度 0.8/1 | 影响力 1/1.5 | 开源 1/1.5 | 可复现 0.3/0.5 | 工程/实践 1/1.5

✅ **7.5/10** | 前25% | 文档类型：方法研究 | 评分置信度：中 | #语音合成 | #强化学习 | #语音克隆 #后训练 | [arxiv](https://arxiv.org/abs/2608.30325)

</details>

## ⚖️ 评分依据与证据（展开查看）

<details>
<summary>逐维得分、全文证据与扣分边界</summary>

*   创新性 (1.4/2)：提出两阶段后训练与样本感知混合奖励路由，轨迹分支用均值与最弱段加权 R_consi，混合分支用 6 维 LDA 投影下 3 分量 GMM 并集 LSE 与弱目标裕量正则，针对时序轨迹与并发混合双任务提供结构化反馈，区别于全局可懂度奖励 

*   技术严谨性 (1.0/1.5)：冻结分词器与流匹配解码器仅优化 LLM 策略，KL 约束以 SFT 为锚点，奖励经裁剪与 Sigmoid 有界化逻辑自洽；但轨迹按文本长度等比切分假设时长近似，混合锚点依赖合成数据拟合与固定投影，存在域外泛化与信息损失未量化风险 

*   实验充分性 (1.0/1.5)：在 720 条 MultiEmo-Test 上对比 CosyVoice 3、EmoVoice-0.5B 与外部参考 Qwen3-TTS，并提供 SFT、Direct Hybrid-GRPO、Trajectory-GRPO、Blending-GRPO 与去裕量直接消融；但仅内部评测无跨数据集泛化，人工偏好每对仅 80 次判断且未报告显著性，奖励与评估同源于 emotion2vec+ large 

*   清晰度 (0.8/1)：以公式 5 至 14 完整定义 R_asr、R_consi 与 R_gmm 的路由、标准化与映射，图 2 展示 GRPO 对齐结构，表 2 与表 3 明确宏平均口径；但轨迹切分与 GMM 构建细节分散，符号与阈值较多增加阅读负担 

*   影响力 (1.0/1.5)：面向指令跟随情感语音合成中多情感时序演变与并发共存空白，验证结构化奖励使轨迹正确性从 3.24 提升至 3.33、混合强度从 3.47 提升至 3.71 且 WER 保持在 2% 以内；但仅覆盖英语 7 类情感与 12 个混合对，语言与文化外推未检验 

*   开源 (1.0/1.5)：代码已发布于 https://github.com/ictnlp/HybridEmo，SFT 语料基于 Emilia 构建并给出 124096 条与 383.6 小时统计；但未提供 HybridEmo 独立模型权重链接，MultiEmo-RL 与 MultiEmo-Test 未发布可下载数据包，Demo 未提及，核心产物仅部分开放 

*   可复现性 (0.3/0.5)：披露 SFT 5 轮与 GRPO 1 轮、batch size 64、学习率 2e-6 与 1e-6、每输入 8 条 rollout 温度 0.6、奖励权重 beta 0.7 与 alpha 0.01 等关键设置及 verl 框架与 4 张 H800；但未报告训练时长与 KL 系数等细节，运行均值更新描述较简略 

*   工程/实践价值 (1.0/1.5)：基于 CosyVoice 3 构建仅优化 LLM 策略、冻结声学解码器的两阶段流水线，实现 8 路采样与样本感知奖励路由的 GRPO 对齐并给出可复用训练配置；但未报告真实延迟、吞吐或资源占用等部署测量，工程价值停留于可复用流水线层面 

</details>

---

[← 返回 2026-09-01 语音/音乐/音频论文速递](/audio-paper-digest-blog/posts/2026-09-01/)
