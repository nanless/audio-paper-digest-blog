---
title: "HEAR Who Said What: Unlocking Speaker-Attributed Reasoning via Counterfactual Voice Grounding"
date: 2026-09-01
draft: false
tags: [说话人日志, 强化学习, 语音识别, 音频理解, 基准测试]
categories: [论文速递]
description: "说话人日志 | 7.0/10"
hiddenInHomeList: true
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_arxiv_id: "2608.29120"
paper_digest_api_reader_contract: "beginner-researcher-v3"
paper_digest_api_reader_article_sha256: "a12e9daa68bbd5d7c8b7ec908560334ff513348958de38c632b33c9481f386d5"
paper_digest_api_reader_plan_sha256: "8e08f1d006de25a61cc82b484ffcaea0991f1907dd8249cbfde6ff2972091f53"
---

# 📄 听见是谁在说：用反事实声纹逼语音模型从猜文本回到听声音

> 英文题目：*[HEAR Who Said What: Unlocking Speaker-Attributed Reasoning via Counterfactual Voice Grounding](https://arxiv.org/abs/2608.29120)*
>
> 一句话：**针对多说话人场景下语音模型靠语义先验猜测谁说了什么的问题，论文以 Erber 听觉层级构建 HEAR 诊断基准与声纹交换的 CASH 硬负样本，并用转录优先的 GRPO 训练 A2R，在配对评估与三项零样本迁移上显著提升声学接地，代价是显式转录带来的延迟与合成分布局限。**

> 标签：#说话人日志 #强化学习 #语音识别 #音频理解 #基准测试
>
> 评分：**7.0/10** | 创新 1.5/2 | 技术严谨 1.1/1.5 | 实验充分 1.2/1.5 | 清晰度 0.8/1 | 影响力 1/1.5 | 开源 0/1.5 | 可复现 0.3/0.5 | 工程/实践 1.1/1.5


## 👥 作者与机构

- Dongwook Lee：IPAI, Seoul National University (SNU)
- Sangkwon Park：Department of ECE, SNU
- Eunwoo Song：Department of EE, Yonsei University
- Che Hyun Lee：Department of ECE, SNU
- Youngho Cho：机构信息未在 arXiv HTML 中可靠披露
- Junho Kim：机构信息未在 arXiv HTML 中可靠披露
- June Young Yi：机构信息未在 arXiv HTML 中可靠披露
- Heeseung Kim：机构信息未在 arXiv HTML 中可靠披露
- Sungroh Yoon：机构信息未在 arXiv HTML 中可靠披露

## 💬 毒舌点评

亮点在于用反事实语音克隆把语义先验与声学身份彻底解耦，配上配对评估让依赖文本捷径的模型无处遁形，诊断非常犀利。短板是 CASH 完全依赖合成语音构建 hard negative，且仅在 Qwen3-Omni 单一基座上验证 GRPO 收益，对真实声学多样性和架构泛化性的说服力仍显单薄。

## 📌 核心摘要

多说话人场景下语音语言模型（Speech Language Model, SLM）难以可靠完成“谁说了什么”的绑定，导致下游推理建立在不可靠的声学接地之上。论文提出层次化基准 HEAR（Hierarchical Evaluation of Attribution and Reasoning），基于 Erber 听觉层级将能力分解为区分（Discrimination）、归因（Attribution）与推理（Reasoning）三层，并构建反事实数据集 CASH（Counterfactual Audio with Speaker-level Hard negatives），通过语音克隆交换说话人身份而保持文本与时序不变来强制模型关注声纹。方法上提出 A2R（Attribution-to-Reasoning），在 Qwen3-Omni-30B-A3B-Instruct 基座上以 GRPO（Group Relative Policy Optimization）优化，采用先转录后推理的奖励结构。HEAR 上 A2R 取得 67.1% 的加权平均准确率（配对平均 60.5%），显著超越同基座基线的 35.4%（配对 24.1%），并在 What Do You Like、GAOKAO、Find the Spy 等 3 个零样本迁移任务上提升 19.0 至 36.4 个百分点。该工作为多方对话理解提供了可诊断的评测与可迁移的声学接地训练范式。局限在于显式转录推理带来延迟，且合成语音分布与真实复杂重叠语音仍有差距。

## 🔗 开源与复现资源

- 代码：论文中未提及代码链接，论文仅在摘要中表述 All resources are available on our project page 但未在正文片段中给出具体 URL，附录中说明 Code、evaluation protocols、non-identifying annotations and metadata 可公开发布
- 模型权重：论文中未提及 A2R 模型权重的具体 HuggingFace 或 ModelScope 链接，论文说明 A2R 基于 Qwen3-Omni-30B-A3B-Instruct 通过 GRPO 优化得到，参数规模为 30B，基座模型为 Qwen/Qwen3-Omni-30B-A3B-Instruct Apache 2.0 协议
- 数据集：HEAR 基准包含 2395 个人工验证样本来自 887 个多方音频片段，平均每段 4.05 个说话人，CASH 数据集为约 60K 规模的 Counterfactual Audio with Speaker-level Hard negatives 合成语料（19422 音频/59762 查询），论文未给出直接下载链接，说明非识别性标注和元数据可公开，合成波形数据仅通过 gated research repository 向已批准的非商业研究开放，需提供身份、机构归属、研究用途并签署 Data Use Agreement，源数据集 AMI、ICSI、VoxMM 均为 CC BY 4.0 协议
- Demo：论文中未提及
- 复现材料：论文在附录 Table 7 中给出全部基线模型的解码超参，包括 Temperature、Top-p、Max tokens 设置，A2R 沿用 Qwen3-Omni-30B-A3B-Instruct 的 0.6、0.95、8192 配置，训练方法为 GRPO 并采用 transcription-first 目标先在 ``<transcript>`` 中转录再推理，评估协议和人类验证流程在附录 B.3 和 Appendix C 中描述
- 论文中引用的开源项目：Qwen3-Omni-30B-A3B-Instruct https://huggingface.co/Qwen/Qwen3-Omni-30B-A3B-Instruct，Qwen3-Omni-30B-A3B-Thinking https://huggingface.co/Qwen/Qwen3-Omni-30B-A3B-Thinking，Qwen2.5-Omni-7B https://huggingface.co/Qwen/Qwen2.5-Omni-7B，Qwen2.5-Omni-3B https://huggingface.co/Qwen/Qwen2.5-Omni-3B，Qwen2-Audio-7B-Instruct https://huggingface.co/Qwen/Qwen2-Audio-7B-Instruct，Audio-Flamingo 3 https://huggingface.co/nvidia/audio-flamingo-3-hf，Fun-Audio-Chat-8B https://huggingface.co/FunAudioLLM/Fun-Audio-Chat-8B，Kimi-Audio-7B-Instruct https://huggingface.co/moonshotai/Kimi-Audio-7B-Instruct，MiDashengLM-7B https://huggingface.co/mispeech/midashenglm-7b，Voxtral-Small-24B https://huggingface.co/mistralai/Voxtral-Small-24B-2507，Voxtral-Mini-3B https://huggingface.co/mistralai/Voxtral-Mini-3B-2507，MiniCPM-o-4.5 https://huggingface.co/openbmb/MiniCPM-o-4_5，MiniCPM-o-2.6 https://huggingface.co/openbmb/MiniCPM-o-2_6，Phi-4-Multimodal https://huggingface.co/microsoft/Phi-4-multimodal-instruct，Gemma 4 E4B-it https://huggingface.co/google/gemma-4-E4B-it，Step-Audio-R1 和 Step-Audio-2-mini 为 StepFun 开源系列，推理引擎 vLLM https://github.com/vllm-project/vllm

## 🧭 深度解读

### 多说话人对话为什么让语音模型集体失语
想象一段 3 人会议录音，A 说我喜欢喝咖啡，B 说我更爱茶，C 追问你刚才说喜欢什么。人类闭着眼睛也能凭音色分辨是谁在回答，但今天的语音语言模型常常答错。不是因为听不清字，而是分不清谁说的字。

模型把语音当成带文字的音频，把谁说的当成可有可无的元信息。推理时直接用语义合理性填空，谁更可能说这句话就判给谁。这种捷径在单人指令场景下无害，一旦进入多人对话就会系统性崩塌。

谁说了什么成为后续一切判断的前提。统计谁提过某个词、排序谁说得最久、判断两句话是否同一个人说的，都依赖可靠的声纹绑定。如果底层绑定错误，上层推理无论多强都是空中楼阁。论文的起点正是把这个隐含前提显式化，追问模型究竟是听见了声音，还是只读懂了文字。

### 从说话人日志到多模态问答，评测为何始终测不准
传统路线把谁说了什么拆成两个独立任务。说话人日志负责切分谁在何时说话，自动语音识别负责转写说了什么。近年出现的 LLM 式识别器把两者合在一起，直接输出带说话人标签的转录，但评测仍停留在转录准确率。

另一条路线是通用音频问答基准，如 MMAU、AudioMarathon 等，它们把多说话人当作众多维度中的一个小分支，用数人头这类浅层任务一带而过。M3-SLU 和 MSU-Bench 更接近本题，但前者局限于单句匹配的真假判断，后者把归因混在对话理解中不作独立诊断。

结果是模型在下游任务上看似能推理，失败根因却无法定位。是听不出有几个人，还是听得出人却绑不对句，或是绑对了却不会推理。HEAR 的价值在于把这 3 层混在一起的黑盒切开，让每一层的失效都能被单独度量。

### HEAR 如何用听觉层级把能力切成三段
论文借用 Erber 听觉层级，把人类从感知到理解的路径映射为区分、归因、推理 3 层。区分是能否把声音按身份聚类，包括数人头、给定参考音定位目标说话人出现或缺席的区间、检测轮替或重叠边界。归因是能否双向绑定内容与声音，包括给定文本找声音和给定声音找文本。

推理则是在绑定之上做身份、时序与数量的组合判断，例如同人句匹配、首句定位与条件计数。每层都配有重叠与非重叠两种变体，回答是否必须关注重叠区间由人工标注决定。

**说话人归因 × 说话人推理：** 说话人归因指把一句具体话语精确绑定到对应的声纹身份，回答谁说了什么；说话人推理则是在归因结果之上做跨句判断，例如谁说得最早、谁说得最多或哪两句出自同一人。前者提供证据锚点，负责把连续声音映射到离散身份；后者负责在锚点上做计数、排序与时序对齐。没有可靠的归因，任何推理都会建立在错误绑定上，二者组合才构成从感知到理解的完整链路。

更关键的是幻觉设计。所有推理题都配有语义幻觉对，文本与时序完全一致，仅把关键话语换成另一个人的声音，答案随之翻转。模型若忽略声纹，两题必答成同一答案，配对即判错。这套设计把能不能听见与会不会推理分开计分。

### 从诊断到纠偏：HEAR、CASH 与 A2R 如何闭环
论文的整体流水线是先诊断后纠偏。输入是长时多说话人音频与五选一选择题，输出是带说话人编号的转录、基于转录的推理链与 JSON 答案。HEAR 负责诊断，CASH 负责制造必须靠耳朵才能做对的训练数据，A2R 负责把听觉能力学进去。

在进入模块细节前，需要先建立全景。HEAR 覆盖 887 段真实音频与 2395 道人工校验题目，平均每段约 93 秒、4.05 人，来源为 AMI、ICSI 与 VoxMM 的测试切分。CASH 基于 VoxMM 训练集抽取 5242 段原始音频，合成 14180 个交换变体，形成 19422 段音频与 59762 个查询，覆盖全部 3 层维度。

2 阶段共用同一哲学：用声纹交换制造最小可控差异，让语言先验失效。为了看清 3 层如何组织任务划分，建议先浏览 HEAR 的层级图示。图中左侧黄区为区分、中间绿区为归因、右侧蓝区为推理，每区下列出具体子任务与题干范例，有助于理解为什么区分与归因是推理的必要前提。

> **看图路径：** 1. 先看顶部黄绿蓝三栏标题对应的难度递进；2. 再对比中间归因栏 CVA 与 VCA 箭头方向相反的对称设计；3. 最后观察右侧推理栏 IR、TR、QR 三类题干的提问差异

![原论文 Figure 1：Illustration of HEAR benchmark. Inspired by Erber’s auditory hierarchy Erber (1982), HEAR breaks…](/audio-paper-digest-blog/images/papers/2608.29120/figure-1-95dd7b868ea87f4a.png)

*论文图 1。原论文 Figure 1:：“Illustration of HEAR benchmark. Inspired by Erber’s auditory hierarchy Erber (1982), HEAR breaks speaker-attributed reasoning down into several foundational capabilities:…”。*

图 1 把抽象层级落到了具体题型。左侧区分栏展示 VC 数人数的对比示例、VL 带参考音的时序定位以及用不同颜色波形标注的 VCD 轮替检测；中间归因栏用五选一声纹与五选一文本的双向箭头呈现 CVA 与 VCA 的对称绑定；右侧推理栏给出 IR 同人句匹配、TR 首句定位与 QR 条件计数的范例。颜色与图标帮助初学者直观感受从感知到推理的难度爬坡，也解释了为何论文要对每层单独计分而非混为一个总分。

### CASH：用同句换声制造必须听声纹的难题
CASH 的核心操作是语音克隆交换。给定一段多人对话，保持全部文字与时间结构不变，仅把目标句用另一个说话人的声音重说一遍。合成使用 VoxCPM2 生成训练变体，HEAR 推理对则改用 IndexTTS 2 以避免合成器伪影被模型记住。

每段合成都经过双重过滤。Whisper-large-v3 转写词错误率在 CASH 中需小于 0.1、在 HEAR 推理对中需等于 0，ECAPA-TDNN 声纹相似度需大于 0.7，未通过则丢弃。平均每段原始音频产生约 2.7 个变体，查询分布为归因 31045、推理 20094、区分 8623。

**反事实语音克隆 × 说话人级硬负样本：** 反事实语音克隆指用语音克隆把某句话原封不动地换成另一个说话人的声音，保持文字与时间结构不变；说话人级硬负样本指由此产生的训练样本，其正确选项仅随声纹改变而翻转。前者是构造手段，负责解耦语义与声学身份；后者是监督信号，迫使模型不能靠文本合理性猜答案。二者组合把谁更可能说这句话的偏好失效，只留下声纹到标签的接地路径。

这种构造的巧妙在于控制变量。文本先验被完全冻结，唯一变化是声纹身份，正确答案随之翻转。模型若继续依赖谁更可能说这句话的语义偏好，就会在原始与反事实样本上给出相同答案，配对评估下必然失败。

理解 CASH 如何翻转答案，最好对照论文的总览图。图中 A 区展示了同一段四句对话的 5 种交换方式，B 区用最简的 2 人口味对话说明为何不听声纹就无法回答我的最爱是什么，C 区则预告了模型将如何先转录后推理。

> **看图路径：** 1. 沿 A 区顶部原始四段波形到下方 Swap1-5 的颜色变化看身份交换；2. 对比 B 区 Baseline 与 A2R 对同一问句的答案差异；3. 追踪 C 区从波形到`<transcript>`再到`<reasoning>`的生成顺序

![原论文 Figure 2：Overview of our dataset and method on speaker-attributed reasoning.](/audio-paper-digest-blog/images/papers/2608.29120/figure-2-5159d1ffc67646ab.png)

*论文图 2。原论文 Figure 2:：“Overview of our dataset and method on speaker-attributed reasoning.”。*

图 2 的 A 区顶部为原始波形，按说话人 A、B、C、A 着色，下方 Swap1 至 Swap5 用不同颜色段展示同一文本被不同声纹覆盖的情形，左侧对应五道题的答案随交换而变化，直观呈现声纹是唯一决定因素；B 区左侧 Baseline 把葡萄误判为苹果，右侧 A2R 正确，正好对应语义捷径与声学接地的对比；C 区给出模型的实际输出格式，先在`<transcript>`中按出现顺序编号再展开推理，说明离散标签如何成为后续推理的锚点。

### A2R：为何要先写转录再做推理
A2R 以 Qwen3-Omni-30B-A3B-Instruct 为基座，冻结音频与视觉编码器及模态对齐器，仅训练语言侧 LoRA 适配器。推理时被约束为两段式生成：在`<reasoning>`内首先在`<transcript>`中输出 Speaker 1: ... 逐行按时序聚合的说话人标签化转录，随后基于该转录展开推理，最后在`<answer>`中输出 JSON 答案。

论文观察到，若让模型直接用高音、纪录片式嗓音等主观形容词追踪身份，连续声学信号到模糊文本的映射极易产生身份幻觉。仅在提示中要求使用 Speaker 1 并不能解决问题，必须通过奖励显式强化标签与声纹的一 1 对应。

**转录优先 × 离散说话人标签：** 转录优先指模型被约束先输出带说话人编号的逐行转录再展开推理；离散说话人标签指用 Speaker 1、Speaker 2 这类抽象编号替代高音、沙哑等主观声学描述。前者提供结构化推理支架，负责把长音频压缩为可引用的符号序列；后者提供稳定的身份锚点，避免模糊形容词在长思维链中漂移。组合后连续声学信号被映射到可复用的离散身份，推理得以在稳定指针上展开。

使离散编号成为贯穿长思维链的稳定指针，是 A2R 与普通思维链提示的本质区别。奖励设计把这种思想量化为三部分。整体奖励为转录奖励、答案奖励与格式奖励的加权和，转录奖励又细分为基于 cpWER 的归因奖励、说话人数奖励与基于 LCS 的顺序奖励，分别惩罚绑错句、数错人与排错序。

### 奖励与优化：把听见翻译成可学习的信号
训练采用组相对策略优化 GRPO。对每个输入采样 G=4 条轨迹，计算奖励后在组内归一化为优势，再做非对称裁剪的策略更新。有效批次由 16 个提示构成，共 64 条轨迹，训练 1 个 epoch，学习率 5×10^-6 余弦衰减至 5×10^-7，warmup 239 步，温度 1.0，KL 系数为 0，精度 bfloat16，LoRA rank 64、alpha 128。

最关键的公式是复合奖励与优化目标。整体奖励定义为：

\[R(Y_{i};\tau^{\star},a^{\star})=R_{\mathrm{tr}}(\hat{\tau}_{i};\tau^{\star})+\lambda_{\mathrm{ans}}R_{\mathrm{ans}}(\hat{a}_{i};a^{\star})+\lambda_{\mathrm{fmt}}R_{\mathrm{fmt}}(Y_{i})\]

其中转录奖励进一步分解为：

\[R_{\mathrm{tr}}(\hat{\tau}_{i};\tau^{\star})=\lambda_{\mathrm{cp}}R_{\mathrm{cp}}(\hat{\tau}_{i};\tau^{\star})+\lambda_{\mathrm{cnt}}R_{\mathrm{cnt}}(\hat{\tau}_{i};\tau^{\star})+\lambda_{\mathrm{ord}}R_{\mathrm{ord}}(\hat{\tau}_{i};\tau^{\star})\]

\[R_{\mathrm{ord}}(\hat{\tau}_{i};\tau^{\star})=\frac{\mathrm{LCS}(P,Q)}{\max(|P|,|Q|,1)}\in[0,1]\]

\[\mathcal{L}_{\mathrm{GRPO}}=-\frac{1}{G}\sum_{i=1}^{G}\min\!\left(r_{i}A_{i},\bar{r}_{i}A_{i}\right)\]

第一式说明最终奖励由转录、答案与格式三项加权，系数分别为 1.0、0.2 与转录内部三项各 0.5。第二式把转录质量拆为归因、计数与顺序。第三式用最长公共子序列衡量预测与真实说话人序列的时序一致性。第四式为 GRPO 目标，r_i 为新旧策略比值，A_i 为组内归一化优势，bar r_i 为裁剪后比值。

**cpWER × LCS 说话人顺序奖励：** cpWER 即拼接后最小排列词错误率，在最优说话人排列下衡量谁说了什么的联合错误；LCS 说话人顺序奖励用最长公共子序列长度归一化衡量说话人轮替顺序的保真度。前者惩罚内容与身份的错配，负责归因精度；后者惩罚时序错乱，负责轮次保真。二者在 GRPO 奖励中互补，共同把转录质量从单纯文本正确提升为归因与时序双重正确。

配对评估的定义同样需要形式化以避免误读。推理配对准确率与加权平均分别为：

\[R_{\mathrm{pair}}=\frac{1}{N_{R}}\sum_{i=1}^{N_{R}}c_{i}\tilde{c}_{i},\]

\[\mathrm{Avg.}=\frac{N_{D}D+N_{A}A+N_{R}R_{\mathrm{pair}}}{N_{D}+N_{A}+N_{R}},\]

前者要求同一对的两题同时答对才计 1，后者按区分、归因与推理对的数量加权，避免用单题准确率掩盖幻觉。

### 数据、协议与基线：如何保证测的是耳朵而非记忆
数据集构成上，HEAR 的 887 段音频来自 63 个源录制，涉及 290 个去重说话人，时长 22.84 小时，VoxMM、AMI、ICSI 分别贡献 360、241、286 段，平均时长 87.8 至 97.4 秒。题目分布为区分 627、归因 608、推理 1160 道，推理中 1160 已包含原始与交换对。所有题目经规则生成后由 8 名作者人工复核，过滤不可解、多解、转录边界错误与合成身份不一致样本。

CASH 的合成协议与 HEAR 推理对刻意使用不同合成器隔离，训练用 VoxCPM2，评测用 IndexTTS 2，且 HEAR 要求 WER 等于 0 而 CASH 允许小于 0.1，均要求声纹相似度大于 0.7。重叠标注按回答是否必须关注重叠区间判定，而非简单是否存在重叠，确保重叠子集真正考验声学分离。

**语义幻觉对 × 配对准确率：** 语义幻觉对指同一段对话的原始音频与仅交换关键话语声纹的反事实变体，文本与时序完全不变但正确答案翻转；配对准确率要求模型在这 1 对上同时答对才计分。幻觉对负责制造必须靠声纹才能区分的陷阱，配对准确率负责把捷径量化为失败。前者是探针，后者是标尺，二者搭配把依赖语言先验的猜测暴露为可度量的声学不敏感。

零样本迁移设置更能说明泛化。What Do You Like 合成 2 人偏好对话后用其中 1 人声纹提问我的最爱是什么，GAOKAO 在高考听力对话后用随机角色声纹提问，Find the Spy 则让 3 至 6 名玩家先自我介绍再打乱顺序描述词语，模型需把线索与身份跨时段绑定。3 个任务的文本本身都不足以定位答案，必须靠声纹。

根据论文正文与图中报告值整理，数据与协议构成如下表，指标方向均为越高越好，合成过滤阈值与重叠标注口径统一。

| 数据集 | 音频来源与规模 | 查询/题目构成 | 合成与过滤协议 | 评测口径 |
| --- | --- | --- | --- | --- |
| HEAR | 887 段真实音频，22.84 小时，平均 92.7 秒，4.05 人/段，290 去重说话人 | 2395 题：区分 627、归因 608、推理 1160（含幻觉对） | 评测用 IndexTTS 2，WER=0 且 ECAPA 相似度>0.7，8 人复核 | 区分与归因用标准准确率，推理用配对准确率，加权平均按对数计 |
| CASH | VoxMM 训练集 5242 段原始，合成 14180 变体，共 19422 段 | 59762 查询：归因 31045、推理 20094、区分 8623 | 训练用 VoxCPM2，WER<0.1 且相似度>0.7 | 与 HEAR 同分布，用于 GRPO 训练 |
| WDYL/GAOKAO/FTS | WDYL 793 段 10.7 秒、GAOKAO 93 段 20 秒、FTS 400 段 33.1 秒 | WDYL 三选一、GAOKAO 二选一、FTS 3-6 人投票 | 追加问句用 IndexTTS 2，相似度>0.7，GAOKAO 额外 WER≤0.2 | 零样本迁移，100 条人声对照由 5 人重录验证 |

Find the Spy 的游戏流程值得单独展开，因为它把归因与推理的依赖展现得最直观。左侧自我介绍建立人名与声纹的初始映射，右侧线索阶段顺序被打乱且不再报名字，模型必须跨轮次追踪谁说了哪条线索，再判断哪条线索语义不一致。

> **看图路径：** 1. 先看左侧自我介绍阶段人名与卡片颜色的对应；2. 再看右侧线索阶段说话顺序被打乱后的箭头指向；3. 思考为什么仅靠线索文本无法定位间谍

![原论文 Figure 3：Illustration of Find the Spy, a benchmark where speaker attribution is essential.](/audio-paper-digest-blog/images/papers/2608.29120/figure-3-41ac5ed9f1312d3f.png)

*论文图 3。原论文 Figure 3:：“Illustration of Find the Spy, a benchmark where speaker attribution is essential.”。*

图 3 左侧 4 人围坐，手中卡片显示除 1 人持 APPLE 外其余持 BANANA，气泡中依次出现 Karen、Sam、Tom、Chloe 的自我介绍，箭头标示发言顺序；右侧同一批人气泡变为 Yellow、Easy to peel 等线索，顺序已打乱。图中可见仅靠线索文本无法知道谁是间谍，必须把线索与左侧建立的身份对应起来，这正是论文强调的归因是推理前提的具象化。

### HEAR 上谁真的听见了：单题高分与配对露馅
要回答模型是否真正利用声纹，需要同时看单题准确率与配对准确率。单题高可能来自语义猜测，配对要求原始与反事实同时答对才能得分，直接度量声学敏感度。实验对比 20 个模型，包含闭源 Gemini 与 GPT-4o-audio 及多款开源 Omni 模型，统一为五选一选择题，加权平均按三轴题目数加权且推理轴使用配对分数。

根据论文正文与图中报告值整理，关键对比聚焦最强闭源、同基座思考版、同基座指令版与 A2R 完整版。下表统一实验条件为 HEAR 全量五选一，指标方向越高越好，推理括号内为配对分数。

| 模型 | 区分 VC | 归因 VCA | 推理 IR 单题/配对 | 推理 TR 单题/配对 | 加权平均/配对平均 | 数字支持什么 |
| --- | --- | --- | --- | --- | --- | --- |
| Gemini-3.1-Pro-preview | 68.4 | 86.4 | 96.2 / 47.6 | 91.3 / 51.3 | 88.8 / 75.8 | 闭源上限仍有近半幻觉损失 |
| Qwen3-Omni-30B-A3B-Thinking | 34.2 | 34.6 | 71.4 / 17.3 | 65.2 / 12.2 | 45.0 / 31.4 | 思考提示未解决归因 |
| Qwen3-Omni-30B-A3B-Instruct 基线 | 31.1 | 28.9 | 59.5 / 8.6 | 57.4 / 15.7 | 35.4 / 24.1 | 单题高分靠语义捷径 |
| A2R (CASH) | 57.5 | 70.1 | 91.6 / 70.8 | 84.9 / 66.9 | 67.1 / 60.5 | 声纹接地带来配对跃升 |

表中可见基线在推理单题上可达 59.5 与 57.4，但配对骤降至 8.6 与 15.7，说明高分主要靠语义先验。A2R 将加权平均从 35.4 提升至 67.1，配对平均从 24.1 提升至 60.5，归因维度从 CVA 26.1 提升至 80.1、VCA 从 28.9 提升至 70.1，接近 Gemini-Flash 水平。即使最强的 Gemini-3.1-Pro，推理单题 96.2 与 91.3 的背后配对也仅 47.6 与 51.3，证明幻觉并非开源独有。

重叠与幻觉的双重退化在柱状图中更为直观。图中按模型分组，每组六根柱分别代表区分、归因、推理在非重叠与重叠下的准确率，推理柱上方半透明灰段即因幻觉对而损失的分数。

> **看图路径：** 1. 对比每组模型中实色与斜纹柱的高度差看重叠带来的下降；2. 观察绿色推理柱上方半透明灰段表示的幻觉损失；3. 横向比较 A2R 与 Gemini 在重叠与非重叠上的稳定性

![原论文 Figure 4：Performance degradation under overlap samples and the effect of semantic hallucination.](/audio-paper-digest-blog/images/papers/2608.29120/figure-4-ac633c1d0962ce05.png)

*论文图 4。原论文 Figure 4:：“Performance degradation under overlap samples and the effect of semantic hallucination.”。*

图 4 横轴为 7 个代表模型，纵轴为准确率百分比。蓝色区分柱与紫色归因柱在斜纹重叠条件下普遍低于实色非重叠柱，绿色推理柱的灰色损失段在所有模型上都显著，说明重叠与语义捷径是两类独立的压力源。A2R 的蓝色与紫色柱在重叠下下降幅度明显收窄，绿色柱的灰段也大幅缩短，表明声纹接地同时缓解了两类退化，但重叠仍未完全消除，提示合成与真实重叠分布仍有差距。

### 合成学到的声纹能否迁移到真人声音
合成数据训练的模型是否只是记住了合成器伪影，需要用零样本迁移检验。论文在 3 个归因关键任务上对比随机基线、同基座基线与 A2R，音频来源分为合成与 100 条人工录制对照，后者由 5 名参与者按同一文本重录并随机分配角色，平均时长 10.7 至 33.1 秒。

根据论文正文与图中报告值整理，迁移结果如下，指标为准确率，越高越好，合成与人声各 100 条对照条件一致。

| 条件 | WDYL | GAOKAO | Find the Spy | 关键控制变量 | 这项数字支持什么 |
| --- | --- | --- | --- | --- | --- |
| 随机猜测 | 50.0 | 50.0 | 23.8 | 理论下界 | 任务难度基线 |
| Qwen3-Instruct 合成全量 | 61.3 | 65.6 | 29.2 | 无声纹接地 | 基线接近随机 |
| A2R 合成全量 | 97.7 | 88.2 | 48.2 | CASH+GRPO | 较基线 +36.4/+22.6/+19.0 |
| Qwen3-Instruct 人声 100 条 | 50.0 | 63.3 | 40.0 | 真人声纹 | 合成到真人未自动泛化 |
| A2R 人声 100 条 | 98.0 | 83.3 | 70.0 | 真人声纹 | 较基线 +48.0/+20.0/+30.0，抗伪影 |

完整集上 A2R 在 WDYL、GAOKAO、FTS 分别提升 36.4、22.6、19.0 个百分点。100 条对照上合成与人声提升幅度基本一致，WDYL 甚至在人声上达 98.0 超过合成 96.0，说明未过拟合于 VoxCPM2 伪影。但 GAOKAO 人声 83.3 低于合成 93.3 达 10 个百分点，FTS 人声 70.0 虽大幅提升仍远未饱和，且对照仅 100 条、冻结编码器仅更新 rank 64 的 LoRA，长时多人与更复杂重叠仍是未覆盖边界。

提示词分析进一步区分了能力内化与提示技巧。仅要求简短推理时，A2R 仍显著优于基线。加上转录优先提示后，HEAR 额外提升 7.2 个百分点，GAOKAO 提升 10.3 个百分点，而基线模型在同一切换上甚至下降，说明转录支架对已具备接地能力的模型是增益，对未具备的模型则无效。

> **看图路径：** 1. 观察 HEAR 子图中绿色线从 Reasoning 到 Reasoning w/ Transcript 的上升斜率；2. 对比蓝色基线在同一切换上的下降或平坦；3. 注意 Find the Spy 中橙色无硬负样本线上升幅度大于绿色线的特殊情况

![原论文 Figure 7：Prompt Analysis on benchmarks.](/audio-paper-digest-blog/images/papers/2608.29120/figure-7-79ef2e41226459f1.png)

*论文图 7。原论文 Figure 7:：“Prompt Analysis on benchmarks. “Reasoning” denotes a prompt that asks the model to provide brief reasoning before answering, while “Reasoning w/ transcript” asks for a transcript…”。*

图 7 为四宫格折线图，横轴为 Reasoning 与 Reasoning w/ Transcript 两种提示，纵轴为准确率。绿色 A2R 线在 HEAR、GAOKAO、Find the Spy 上均明显上扬，标注 +7.2、+10.3、+8.2；蓝色基线几乎平坦或微降，WDYL 上甚至出现 -5.7。这表明 A2R 已内化声纹绑定，而基线即使被要求先转录也无法产生有效转录，提示本身不能无中生有。

### 硬负样本与奖励结构各自贡献了什么
消融沿 3 条轴展开：是否包含说话人级硬负样本、是否保留结构化转录奖励、训练范式用 GRPO 还是 SFT。所有消融均训练 1 个 epoch 并在验证稳定后评估，避免训练时长干扰。

硬负样本的作用在幻觉对上最清晰。移除硬负样本后，HEAR 推理配对准确率从 60.0% 降至 43.0，同答案率显著上升，说明模型重新退回语义一致性偏好。零样本迁移上，无硬负样本的 A2R 在 WDYL、GAOKAO、FTS 上仍显著高于基线，但分别比完整版低 2.7、9.7、7.7 个百分点，证明 HEAR 轴数据本身带来声学敏感性，硬负样本进一步强化。

**GRPO × SFT：** GRPO 即组相对策略优化，通过同提示采样多条轨迹的组内归一化优势进行带裁剪的策略更新，保留探索与奖励塑造能力；SFT 即监督微调，直接拟合目标转录与答案。前者负责在奖励空间中搜索更可靠的归因策略，后者负责记忆固定映射。论文对比显示仅用 SFT 会损伤通用对话能力且配对一致性不足，而 GRPO 配合结构化奖励能在提升归因的同时保留基座推理，说明优化范式本身决定接地能否泛化。

奖励与范式的对比揭示了更细的机制。仅奖励最终答案而不约束转录时，配对一致性下降。用 SFT 替代 GRPO 时，HEAR 与 VoiceBench 双双弱于 GRPO，SFT 在 AlpacaEval 上从 4.38 退化至 3.19、在 BBH 上从 94.00 退化至 68.10，说明监督拟合虽能降低同答案率但未能建立可迁移的接地且损伤通用能力。

根据论文正文与图中报告值整理，关键消融与失败条件如下表，指标方向已标注，训练预算统一为 1 epoch、LoRA rank 64。

| 比较条件 | 控制变量 | HEAR 整体/配对 | VoiceBench AlpacaEval/BBH | 同答案率变化 | 解释 |
| --- | --- | --- | --- | --- | --- |
| A2R vs w/o HN | 是否含声纹交换硬负样本 | 60.0 vs 43.0 配对 | 4.31/93.90 vs 未单列 | 同答案率上升 | 硬负样本是声学敏感关键 |
| A2R vs RL(answer-only) | 是否含转录三项奖励 | 61.5% vs 54.4% 整体 | 保持 vs 下降 | 配对一致性下降 | 转录奖励对 QR/TR 尤为重要 |
| GRPO vs SFT | 优化范式 | 60.5 vs 28.0 配对 | 4.31/93.90 vs 3.19/68.10 | SFT 同答案率低但配对不高 | SFT 记忆而非接地 |

两组柱状图把上述结论可视化。左组关注同答案率越低越好，右组关注配对准确率越高越好。

> **看图路径：** 1. 左图关注绿色 A2R 柱显著低于蓝色基线的同答案率；2. 右图关注绿色柱在 IR/TR 上远高于橙色无硬负样本版本；3. 注意虚线随机基线与各模型配对准确率的差距

![原论文 Figure 5：Results on semantic hallucination pairs in the “Reasoning” category of HEAR.](/audio-paper-digest-blog/images/papers/2608.29120/figure-5-fbf914afdfb97061.png)

*论文图 5。原论文 Figure 5:：“Results on semantic hallucination pairs in the “Reasoning” category of HEAR.”。*

图 5 左图为同答案率，纵轴 0-100%，横轴 IR、QR、TR 与 Overall，浅蓝与深蓝基线在 IR 上均接近 47%，橙色无硬负样本降至 32%，绿色完整 A2R 进一步降至 15%；右图为配对准确率，绿色柱在 IR 达 71%、TR 达 63%、Overall 达 60%，远高于橙色与蓝色，虚线为随机基线约 4%。两图对照说明硬负样本同时降低捷径一致性并提升正确配对能力。

> **看图路径：** 1. 对比左图 A2R 与 SFT 在整体准确率上的落差；2. 中图观察 SFT 在 IR 上同答案率极低但右图配对准确率并未同步最高；3. 右图关注 RL(answer-only) 与 A2R 在 QR 上的差距

![原论文 Figure 6：Ablation of training regimes on HEAR.](/audio-paper-digest-blog/images/papers/2608.29120/figure-6-f5f441e52d21ba13.png)

*论文图 6。原论文 Figure 6:：“Ablation of training regimes on HEAR.”。*

图 6 分三栏：左栏整体准确率显示 SFT 仅略高于基线而 RL(answer-only) 与 A2R 大幅领先；中栏同答案率显示 SFT 在 IR 上极低但右栏配对准确率并未同步登顶，说明单纯降低同答案率不等于答对；右栏配对准确率显示 A2R 在 QR 上 51% 显著高于 RL(answer-only) 的 31%，证明转录奖励对数量与时序类推理尤为关键。

### 延迟、合成分布与单一基座的边界
论文坦承显式转录推理虽最大化归因精度，却引入延迟，限制实时应用。实验也表明去掉显式转录仍显著优于基线，只是略低于完整版，未来可探索基于内部表征的隐式推理以平衡延迟与性能。这意味着当前方案更适合离线分析或可容忍额外生成开销的场景。

合成分布是另一边界。CASH 完全基于合成语音，声学多样性、信道与重叠真实性与真实会议仍有差距，虽用双合成器隔离训练与评测并通过相似度与 WER 过滤，仍未量化合成器特有伪影被利用的程度。HEAR 重叠标注仅覆盖回答必须关注重叠区间的子集，且人工对照仅 100 条，未报告多随机种子方差，显著性边界仍需更充分统计。

架构泛化性也待检验。所有增益均在 Qwen3-Omni-30B-A3B 单一基座上验证，未展示跨规模与跨架构的迁移。伦理层面，语音克隆涉及冒充与再识别风险，合成音频仅限受控非商业研究访问，需签署数据使用协议并提供下架机制，原始说话人未获针对语音克隆的额外授权，合规边界需更明确。

### 复现要点：数据、奖励、优化与评测细节
数据与协议复现需严格对齐过滤阈值。CASH 基于 VoxMM 训练集，合成前保留 WER 小于 0.1 且相似度大于 0.7 的样本。HEAR 推理对要求 WER 等于 0 且相似度大于 0.7，并经人工验证声纹一致性。HEAR 题目为五选一，区分与归因用标准准确率，推理用配对准确率，加权平均按三轴题目数加权，推理轴计为对数而非题数。

训练复现关键是冻结与奖励系数。基座为 Qwen3-Omni-30B-A3B-Instruct，冻结音频与视觉编码器及对齐器，仅训练 LoRA rank 64、alpha 128、dropout 0。奖励系数为答案 1.0、格式 0.2、cpWER 0.5、人数 0.5、顺序 0.5，LCS 通过 O(nm) 动态规划计算并以 max 归一化。优化为 GRPO，每提示采样 4 条、有效批次 64、温度 1.0、非对称裁剪 epsilon low 3×10^-4、high 4×10^-4、KL 系数 0、bfloat16、余弦调度 5×10^-6 至 5×10^-7、warmup 239 步。

根据论文正文与图中报告值整理，训练与部署成本如下表，硬件与推理配置需一并固定才能复现配对增益。

| 模块 | 关键超参 | 硬件与实现 | 推理配置 | 成本与限制 |
| --- | --- | --- | --- | --- |
| 训练 | GRPO G=4，batch 64，1 epoch，lr 5e-6→5e-7，warmup 239 | 4×4 H200，专家并行 4，Megatron-SWIFT+vLLM，bfloat16 | - | 仅更新 LoRA，编码器冻结，显式转录增加生成长度 |
| 奖励 | λ_ans1.0 λ_fmt0.2 λ_cp0.5 λ_cnt0.5 λ_ord0.5 | LCS O(nm) DP | - | 三项转录奖励缺一则配对下降 |
| 评测 | HEAR 2395 题，CASH 59762 查询 | - | Qwen3-Omni 温度 0.6 top-p0.95 max8192，Thinking 16384 | VoiceBench 用 gpt-5.4-mini 评判，合成波形需门控申请 |

评测复现需固定解码与提示。HEAR 与迁移任务均使用转录优先提示，要求先在`<transcript>`中输出 Speaker 1: ... 再推理，最后输出 JSON 答案。论文称所有资源在项目页可用，但正文未给出具体代码与权重链接，合成波形需通过门控仓库申请，复现时需注意数据访问限制。

### 从听见到理解：声纹接地为何是多方对话的第一块基石
HEAR 的诊断价值在于把多说话人理解从一个模糊的下游分数拆成可定位的阶梯。实验显示多数开源模型在区分与归因上接近随机，推理高分在配对下大幅缩水，闭源模型亦然，说明语义捷径是行业共性而非个别缺陷。A2R 的贡献不在于堆砌更大模型，而在于用最小可控的声纹交换制造必须听的压力。

迁移结果进一步把声纹接地从基准技巧提升为可复用的归纳偏置。合成数据上学到的绑定能零样本泛化到真人声音，并在口味偏好、高考听力与社交推理 3 类任务上一致提升，且在双人对话基准上仅小幅回落，证明接地能力与通用能力并非零和。

对刚入方向的研究生而言，这篇工作提供了一个清晰的研究范式。先用反事实构造让正确性仅随目标因素翻转，再用配对评估让捷径无处遁形，最后用奖励把中间表征显式化。未来的开放问题也很明确：如何在不生成显式转录的前提下保留接地、如何量化合成与真实重叠的分布差距、以及如何在更多基座与更长、更嘈杂的真实会议上验证同一结论。

<details>
<summary>📎 论文与评分元数据</summary>

标签：#说话人日志 #强化学习 #语音识别 #音频理解 #基准测试

**7.0/10** | 创新 1.5/2 | 技术严谨 1.1/1.5 | 实验充分 1.2/1.5 | 清晰度 0.8/1 | 影响力 1/1.5 | 开源 0/1.5 | 可复现 0.3/0.5 | 工程/实践 1.1/1.5

✅ **7.0/10** | 前50% | 文档类型：数据集与基准 | 评分置信度：高 | #说话人日志 | #强化学习 | #语音识别 #音频理解 | [arxiv](https://arxiv.org/abs/2608.29120)

</details>

## ⚖️ 评分依据与证据（展开查看）

<details>
<summary>逐维得分、全文证据与扣分边界</summary>

*   创新性 (1.5/2)：基于 Erber 层级将多说话人能力分解为区分归因推理 3 轴 8 子任务，并引入语义幻觉配对与反事实语音克隆交换身份构造 hard negative，配合不同合成器隔离训练与评测，形成可诊断的声纹接地范式，组合创新度高。

*   技术严谨性 (1.1/1.5)：采用 Whisper-large-v3 WER 小于 0.1 与 ECAPA-TDNN 相似度大于 0.7 双重过滤，HEAR 推理对要求 WER 等于 0 并经 8 人复核，奖励以 cpWER 与 LCS 归一化刻画归因与时序，逻辑自洽，但合成分布与真实重叠差距及阈值鲁棒性未量化分析。

*   实验充分性 (1.2/1.5)：在 HEAR 上评测 20 个模型并报告配对准确率，A2R 加权平均 67.1% 配对 60.5% 较同基座 35.4% 配对 24.1% 显著提升，完成移除 hard negative 配对 60.0 降至 43.0 与移除结构化转录奖励及 SFT 对比等消融，并在 3 个任务上零样本提升 19.0 至 36.4 个百分点且含 100 条人工录制对照，但人工对照规模有限且未报告多随机种子方差。

*   清晰度 (0.8/1)：摘要与方法对 HEAR 三层结构与 CASH 构造及 A2R 转录优先奖励公式表述清晰，表格区分单项与配对准确率，但部分表格平均口径与消融细节需结合附录才能完全对齐，整体可读性良好。

*   影响力 (1.0/1.5)：针对语音语言模型在多说话人场景下谁说了什么绑定不可靠的核心痛点，提供层次化诊断基准与可迁移声学接地训练范式，在 HEAR 与 3 个归因关键任务上验证泛化，对语音多方对话理解具有明确领域价值，但影响主要集中于语音赛道。

*   开源 (0.0/1.5)：论文未发布核心代码、模型权重或数据资源，也未给出明确的后续开源承诺。

*   可复现性 (0.3/0.5)：已披露基座 Qwen3-Omni-30B-A3B-Instruct 冻结编码器仅训练 LoRA rank 64 alpha 128，GRPO 每 prompt 采样 4 条有效 batch 64 训练 1 epoch 学习率 5e-6 余弦至 5e-7 warmup 239 步及奖励系数与解码温度 0.6 top-p 0.95，但训练时长与完整环境细节未完全披露。

*   工程/实践价值 (1.1/1.5)：构建从 VoxMM 抽取 5242 段合成 14180 变体到双重过滤与双合成器隔离的完整数据流水线，并实现冻结编码器加 LoRA 的 GRPO 训练与转录优先推理流水线，形成可复用的基准与数据产物，具备明确工程价值但未提供真实延迟吞吐测量。

</details>

---

[← 返回 2026-09-01 语音/音乐/音频论文速递](/audio-paper-digest-blog/posts/2026-09-01/)
