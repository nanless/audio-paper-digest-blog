---
title: "ARENA: Automated Red-Teaming for Large Audio Language Models"
date: 2026-08-18
draft: false
tags: [音频理解, 后训练, 音频大模型, SFT, 内容审核]
categories: [论文速递]
description: "音频理解 | 6.5/10"
hiddenInHomeList: true
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_arxiv_id: "2608.15578"
---

# 📄 ARENA: Automated Red-Teaming for Large Audio Language Models

标签：#音频理解 #后训练 #音频大模型 #SFT #内容审核

**6.5/10** | 创新 1.3/2 | 严谨 1.1/1.5 | 实验 1/1.5 | 清晰 0.8/1 | 影响 1/1.5 | 开源 0/1.5 | 复现 0.3/0.5 | 工程 1/1.5

✅ **6.5/10** | 前50% | 文档类型：方法研究 | 评分置信度：中 | #音频理解 | #后训练 | #音频大模型 #SFT | [arxiv](https://arxiv.org/abs/2608.15578)


### 👥 作者与机构

- 第一作者：Jiaming He（未说明）
- 通讯作者：未说明
- 作者列表：Jiaming He（未说明）、Zhicong Huang（未说明）、Tian Jin（未说明）、Zhen Sun（未说明）、Cheng Hong（未说明）、Yi Yu（未说明）、Wenbo Jiang（未说明）、Xudong Jiang（未说明）

### 💡 毒舌点评

该工作将 LALM 红队测试从静态音频越狱集推进到闭环控制器优化，且在搜索反馈与最终评估者之间做了清晰解耦，设计动机明确，消融也证明了反馈细化和声效变体搜索的价值。但实验基线仅有两个静态集，缺少与文本/图像自动红队方法适配后的横向对比；控制器训练关键超参和训练数据未公开，仅凭"Code is available at Github"的空声明无法真正复现。整体方向有价值，但还远未达到顶会方法论文的完整性标准。

### 📌 核心摘要

论文研究大音频语言模型中的音频接地红队测试问题，要求文本查询单独看安全，但文本+音频联合输入可诱发有害顺从。作者提出 ARENA，一个训练控制器生成非安全文本查询、音频提示与合成模态，并通过 MD-Judge 反馈进行闭环细化的框架。控制器在 2000 条独立 text-audio 规范上以 reward-weighted SFT 和 DPO 训练，搜索过程中使用 MD-Judge 提供奖励和失败反馈，最终结果仅由独立的 Llama Guard 3 评判。在 520 条 held-out AdvBench 目标上，ARENA 在 Audio Flamingo 3、Qwen2-Audio、MiMo-Audio、GPT-Audio 上分别取得 FDR/PSR 87.9/100.0、71.5/96.3、68.1/100.0、75.4/98.5，远高于两个静态音频越狱基准。跨目标迁移实验显示攻击案例具有一定可复用性，消融表明失败反馈与声效变体数量显著提升攻击发现率。实际意义在于为 LALM 安全审计提供可扩展的自动化工具。主要局限包括控制器训练细节不完整、基线仅限静态集、最终评分依赖单一 LLM 裁判、缺少多语言和统计显著性评估。

### 🔗 开源详情

- 代码：论文摘要中声明"Code is available at Github."，但正文未给出具体仓库 URL、提交信息或版本号；无法核实代码是否真实可用。
- 模型权重：论文中未提及控制器 LoRA 权重或目标 LALM 权重的具体下载链接；评估目标模型包括 Audio Flamingo 3、Qwen2-Audio-7B-Instruct、MiMo-Audio-7B-Instruct、GPT-Audio。
- 数据集：论文使用自建的 2,000-case text-audio 训练种子池/执行日志，与 AdvBench 无重叠；未提供下载链接、开源协议或获取方式。评估基准为 AdvBench 的 520 个 harmful objectives，论文中未提及 AdvBench 的具体获取链接。
- Demo：论文中未提及。
- 复现材料：论文中未提及检查点、权重文件或附录下载链接；可实现性信息包括：控制器为 LoRA-tuned Qwen3-32B；speech 由 Piper TTS 渲染，sound 由 TangoFlux 渲染 4 秒；解码参数为 temperature=0.7、top-p=0.95、256 new tokens；开源 LALMs 推理 300 tokens，GPT-Audio 为 512 tokens；refinement budget \(K=30\)；奖励超参数 \(\kappa=.05\)、\(\mathbf{w}^+=(.25,.25,.20,.15,.18)^{\top}\)、\(\mathbf{w}^-=(.34,.28,.18)^{\top}\)；最终评估使用 Llama Guard 3-8B，训练/搜索反馈使用 MD-Judge-v0.2。
- 论文中引用的开源项目：论文中提及但未给出 URL 的项目/工具包括：Audio Flamingo 3、Qwen2-Audio、MiMo-Audio、GPT-Audio、Piper TTS、TangoFlux、Llama Guard 3、MD-Judge、AdvBench、AJailBench、JALMBench、AudioGuard、Qwen3-32B。未能从论文文本中提取到任何具体开源链接。

### 🏗️ 方法概述和架构

ARENA 是一个多阶段闭环红队测试框架，将控制器训练、自适应搜索与最终评估分离。威胁模型为黑盒访问：审计者可以生成文本和音频输入、查询目标 LALM 并观察响应，但无法访问目标权重、梯度或内部安全机制。整体流程为：给定有害目标 \(x\)，控制器策略 \(\pi_\theta\) 输出结构化规范 \(z=(q_p, p_a, m)\)，其中 \(q_p\) 是文本查询，\(p_a\) 是语音转录或声效提示，\(m \in \{\text{speech}, \text{sound}\}\) 选择合成模态；随后经过文本安全守卫、模态渲染、目标模型识别查询与红队查询、MD-Judge 反馈、迭代细化，最后冻结候选并由 Llama Guard 3 独立评分。

下图展示了ARENA框架的完整流程。

![Figure 2: Overview of the ARENA framework.](https://arxiv.org/html/2608.15578v1/Audio_Red_Teaming.png)

图中详细描绘了从训练数据准备到两阶段控制器训练，再到基于循环的测试用例生成和反馈细化的闭环过程。


训练数据构造阶段：作者基于 AudioGuard 的风险分类构建 2000 条与 AdvBench 无关的 seed pool，其中 1200 条为语音类，主要承载社会交互、欺骗意图和指令式场景；800 条为环境声类，包括爆炸、碰撞、武器声、强行入室等。每条 seed 表示为 \((x, q_p, p_a, m, \mathbf{t})\)，其中 \(\mathbf{t}\) 是仅用于分析的策略标签。语音 seed 由手写场景模板配以说话人变化生成，模板将 AudioGuard 的语音与语音内容分支翻译为文本安全查询加短语音片段；环境声 seed 实例化非语音声事件分支，提示为简洁事件描述并约束无语音无音乐以提升识别性。每条 seed 离线执行一次后记录目标响应、识别结果、MD-Judge 标签和 shaped reward \(R_{\text{Aud}}\)。正向记录构成 SFT 数据集 \(\mathcal{D}_m^+\)，成对比较记录构成偏好数据集 \(\mathcal{D}_{\text{pref}}\)。

控制器组件：控制器是 LoRA 微调的 Qwen3-32B，输出 JSON 风格规范，包括 `text_query`、`audio_prompt`、`modality` 和 `strategy_tags`。生成时温度 0.7、top-p 0.95，最多 256 个新 token。控制器从训练数据中学习模态选择：语言依赖型目标使用 speech，物理事件型目标使用 sound。

模态渲染组件：speech 模态使用 Piper TTS 将 \(p_a\) 作为语音转录合成；sound 模态使用 TangoFlux 将 \(p_a\) 作为环境声提示合成为 4 秒音频。渲染在每次执行时动态进行，seed 本身只存储文本级规范而非波形。

执行与反馈组件：文本查询首先经过 Llama Guard 3 输入检查，未通过则直接标记 text unsafe，不进入合成。通过后，目标 LALM 先收到识别查询，生成 \(r^{\text{rec}}\)，再收到红队查询 \(q_p\)，生成响应 \(r\)。MD-Judge 产生结构化报告，包括 \(d,u,b,g,e\) 五类正向证据和 \(f,o,\rho\) 三类失败证据，分别表示不合规帮助、目标顺从、可操作性、音频接地、具体细节，以及通用/Foley 内容、事件复述、拒绝/安全重定向。奖励函数 \(R_{\text{Aud}}\) 由式(4)(5)计算：\(\widetilde{R}_i = \kappa + {\mathbf{w}^{+}}^{\top}\mathbf{s}^{+}_i - {\mathbf{w}^{-}}^{\top}\mathbf{s}^{-}_i\)，\(R_i = [1-\phi_t(q_{p,i})]\,\mathrm{clip}(\widetilde{R}_i, -1, 1) - \phi_t(q_{p,i})\)。搜索反馈根据失败层级提供修正建议：识别失败建议简化声事件或切换模态；事件复述失败建议让文本查询请求音频接地分析而非复述；拒绝失败建议使用更安全的间接框架；通用/Foley 内容失败建议更清晰连接音频提示与目标情境。

控制器训练阶段：第一阶段 reward-weighted SFT，对 \(\mathcal{D}_m^+\) 中每条样本按 \(\lambda_i = 1+R_i+\mathbf{1}[(x_i,q_{p,i},a_i)\in\mathcal{Z}^{\star}]\) 加权，权重范围 [1,3]，损失为 \(\mathcal{L}_s(\theta)=-\frac{1}{|\mathcal{D}_m^+|}\sum \lambda_i \log \pi_\theta(z_i\mid x_i)\)。第二阶段 DPO，policy 与 reference 均从 SFT checkpoint 初始化，排序同一目标下不同尝试的 \(R_{\text{Aud}}\) 组正负样本对，剔除目标侧音频识别错误主导的对，优化 \(\mathcal{L}_d(\theta)=-\frac{1}{|\mathcal{D}_{\text{pref}}|}\sum \log \sigma(\beta \delta_i)\)，总目标为 \(\mathcal{L}_d+\mu\mathcal{L}_s\)，其中 replay 样本用于保持输出格式。ARENA 核心设计选择是将搜索反馈与最终评估分离：MD-Judge 可影响候选优化，但最终 Llama Guard 3 只评分一次，不参与搜索，从而降低对最终评估器的过拟合风险。

细化循环中，下一次候选生成条件包括 \(x\)、上一轮 \(z^{(t)}\)、目标响应 \(r^{(t)}\)、失败层级 \(y^{(t)}\) 和反馈 \(f^{(t)}\)。循环最多 \(K=30\) 步，保留奖励最高的候选。此设计允许控制器根据瓶颈调整 \(q_p\)、\(p_a\) 或 \(m\)，而不是简单重复采样。

### 💡 核心创新点

1. 提出面向 LALM 的音频接地红队测试问题形式化，明确两侧安全条件：\(q_p\) 单独安全且联合 text-audio 输入引发有害顺从。之前的工作主要使用静态音频越狱集，缺乏对语音、环境声和文本三者的自动化协调。
2. 构建 ARENA 闭环控制器优化框架，将 reward-weighted SFT、DPO、语音/环境声双模态渲染和失败感知细化组合。控制器不仅生成文本，还决定有害上下文应藏在口语还是环境声中，解决"文本安全但音频包含有害语境"的构造难题。
3. 将搜索反馈与最终评估者解耦：MD-Judge 用于奖励和细化，Llama Guard 3 在冻结候选上唯一决定最终成败。相比直接优化最终裁判的方法，该设计更接近真实安全审计，降低奖励套利风险。
4. 通过声效变体与闭环细化实验，揭示波形实现是攻击成功的关键随机因素。相同语义音频提示的不同合成变体可导致 ASR 显著变化，提示固定音频基准会低估风险。该证据为音频安全评估引入"生成-执行全链路测试"的新视角。

下图直观展示了音频接地红队测试的挑战。

![Figure 1: Audio-grounded red-teaming. Harmful intent can hide in the audio channel while the text query remains safe.](https://arxiv.org/html/2608.15578v1/intro_redteam.png)

文本查询单独通过NSFW检测器，但结合音频输入后，目标模型生成了有害响应，体现了双侧安全条件。

### 📊 实验结果

主结果表保留本文方法 ARENA 与两个静态音频越狱基线 AJailBench、JALMBench；为控制表宽省略 Div 列，仅保留 FDR 与 PSR 诊断指标。表中 FDR 为全部 520 个 held-out AdvBench 目标上的联合成功率，PSR 为输入侧文本安全通过率；固定模板基线的 PSR 不随目标变化。数值与原文 Table 1 一致。

| Method | AF3 FDR | AF3 PSR | Qwen2 FDR | Qwen2 PSR | MiMo FDR | MiMo PSR | GPT FDR | GPT PSR |
|---|---|---|---|---|---|---|---|---|
| AJailBench | 31.2 | 68.6 | 10.8 | 68.6 | 25.3 | 68.6 | 24.6 | 68.6 |
| JALMBench | 12.6 | 25.3 | 11.9 | 25.3 | 10.7 | 25.3 | 11.3 | 25.3 |
| ARENA | 87.9 | 100.0 | 71.5 | 96.3 | 68.1 | 100.0 | 75.4 | 98.5 |

ARENA 在四个目标 LALM 上均取得最高 FDR，并保持接近完美的 PSR。相比之下，AJailBench 的固定模板往往不能有效诱发不安全响应；JALMBench 则有较多候选在输入侧被过滤。平均搜索尝试次数方面，AF3 为 9.2，Qwen2-Audio 为 9.1，MiMo-Audio 为 12.5，GPT-Audio 为 11.4。迁移性回放实验显示，AF3 成功案例迁移到 Qwen2-Audio、MiMo-Audio、GPT-Audio 的 ASR 分别为 59.7%、60.0%、50.4%；Qwen2、MiMo、GPT-Audio 成功案例迁移到 AF3 分别为 57.0%、58.6%、63.7%，说明不同目标间存在共享脆弱性，但对新目标进行审计仍受益于闭环细化。

关键消融结果表按长格式保留支撑消融结论的 ASR 证据，仅列出原文给出明确数值的设置；K=0 行为原文报告的跨模型区间，不是单一模型点估计。温度、top-p 及 GPT-Audio 在相应设置下未给出具体数值的组合不在表中列出。

| 消融维度 | 设置 | 模型 | ASR (%) |
|---|---|---|---|
| Refinement budget | K=0 | AF3/Qwen2-Audio/MiMo-Audio | 23–30（跨模型区间） |
| Refinement budget | K=30 | AF3 | 88 |
| Refinement budget | K=30 | Qwen2-Audio | 74 |
| Refinement budget | K=30 | MiMo-Audio | 68 |
| Sound variants | M=1 | AF3 | 70 |
| Sound variants | M=1 | Qwen2-Audio | 59 |
| Sound variants | M=1 | MiMo-Audio | 49 |
| Sound variants | M=16 | AF3 | 95 |
| Sound variants | M=16 | Qwen2-Audio | 96 |
| Sound variants | M=16 | MiMo-Audio | 85 |
| Target temperature | 0.3 | AF3 | 86 |
| Target temperature | 1.5 | MiMo-Audio | 10 |

消融结果显示，反馈式细化显著提升 ASR：K=0 时 ASR 仅为 23%–30%，K=30 时 AF3、Qwen2-Audio、MiMo-Audio 分别达到 88%、74%、68%，且大部分收益出现在前 10 轮。声效变体数量同样关键：M 从 1 增至 16 时，AF3 ASR 从 70% 升至 95%，Qwen2-Audio 从 59% 升至 96%，MiMo-Audio 从 49% 升至 85%。目标端温度升高通常降低攻击成功率，AF3 从温度 0.3 的 86% 降至温度 0.7–1.2 区间的低至中 70% 区间，MiMo-Audio 在温度 1.5 时降至 10%；top-p 的影响较弱且非单调。论文未提供多次重复实验的方差或置信区间。

下图进一步展示了ARENA在不同有害类别上的分类级攻击成功率。

![Figure 4: Category-level ASR. Final Llama Guard ASR of ARENA across six consolidated harmful categories.](https://arxiv.org/html/2608.15578v1/category_asr_heatmap.png)

热力图显示，模型在网络安全、暴力/武器等类别的攻击成功率较高，而在自我伤害/物质滥用类别相对较低。

### 🔬 细节详述

- 训练数据：论文构造 2000 条独立 text-audio 规范，其中语音类 1200 条、环境声类 800 条，来源是手写场景模板和 AudioGuard 风险分类；评估使用 AdvBench 520 条 held-out 目标，声称与训练集无重叠。数据预处理、模板总数、人工参与程度和校验流程未说明。
- 损失函数：reward-weighted SFT 损失为 \(\mathcal{L}_s(\theta)=-\frac{1}{|\mathcal{D}_m^+|}\sum_{(x_i,z_i,R_i)\in\mathcal{D}_m^+}\lambda_i\log\pi_\theta(z_i\mid x_i)\)，样本权重 \(\lambda_i=1+R_i+\mathbf{1}[(x_i,q_{p,i},a_i)\in\mathcal{Z}^{\star}]\)；DPO 损失为 \(\mathcal{L}_d(\theta)=-\frac{1}{|\mathcal{D}_{\text{pref}}|}\sum_{i=1}^{|\mathcal{D}_{\text{pref}}|}\log\sigma(\beta\delta_i)\)，policy 与 reference 均从 SFT checkpoint 初始化；总目标为 \(\mathcal{L}_d+\mu\mathcal{L}_s\)，但 \(\mu\) 的具体值未说明。
- 训练策略：控制器为 LoRA 微调 Qwen3-32B；控制器解码温度 0.7、top-p 0.95、最多 256 新 token。论文未给出控制器训练的学习率、warmup、batch size、优化器、训练轮数或调度策略。
- 关键超参数：reward 超参数 \(\kappa=0.05\)，\(\mathbf{w}^{+}=(0.25,0.25,0.20,0.15,0.18)^{\top}\)，\(\mathbf{w}^{-}=(0.34,0.28,0.18)^{\top}\)；细化预算 \(K=30\)；开源 LALM 最多生成 300 token，GPT-Audio 最多 512 token；环境声音频为 4 秒。
- 训练硬件：未说明。
- 推理细节：文本守卫先由 Llama Guard 3 检查；目标模型先做识别查询，再做红队查询；语音渲染用 Piper TTS，环境声渲染用 TangoFlux。主实验的目标模型温度/top-p 未明确给出，仅消融中显示固定 top-p 0.95，并 sweep 温度 0.3–1.5 等设置。
- 正则化或稳定训练技巧：SFT 阶段用 reward-dependent oversampling；DPO 阶段使用 replay 示例保持格式；偏好对中删除目标侧识别错误主导的对；未见其他正则化说明。

### ⚖️ 评分理由

*   创新性 (1.3/2)：[A_METHOD] 论文提出两安全条件下的音频接地红队测试问题形式化，并构建 ARENA 闭环框架，组合 reward-weighted SFT、DPO、语音/环境声双模态渲染和失败感知细化；[A_SUMMARY] 搜索反馈与最终评估解耦以及声效变体重要性的发现具有增量创新，但整体属系统化框架创新而非全新理论突破。

*   技术严谨性 (1.1/1.5)：[A_METHOD] 方法对威胁模型、结构化规范、渲染、执行反馈、奖励函数和两阶段训练目标给出了较完整定义，并且搜索反馈与最终评估者解耦的设计逻辑自洽；账本未记录推导错误或不合理假设。

*   实验充分性 (1.0/1.5)：[A_RESULTS] 实验覆盖四个 LALM、520 个 held-out AdvBench 目标，报告了 FDR/PSR、迁移性和多种消融；但[A_LIMITS] 基线仅含两个静态音频越狱集，未与文本/图像自动红队方法适配比较，最终成功仅由单一 Llama Guard 3 判断且缺少人类评估、第二裁判、统计显著性或方差，结论强度受限。

*   清晰度 (0.8/1)：[A_SUMMARY] 论文总体结构清楚，贡献和主要结果表述明确；[A_LIMITS] 未单列 limitations 部分，使局限信息分散，组织上略有不足。

*   影响力 (1.0/1.5)：[A_SUMMARY] 面向大音频语言模型安全审计提出可扩展的自动化红队工具；[A_RESULTS] 在四个音频语言模型上发现远高于静态基准的有害顺从，且迁移性说明共享脆弱性，对音频安全评估具有实际意义。

*   开源 (0.0/1.5)：[A_OPEN] 论文未发布核心代码、模型权重或数据资源，也未给出明确的后续开源承诺。

*   可复现性 (0.3/0.5)：[A_METHOD] 论文披露了控制器模型、渲染器、部分解码参数、奖励权重和细化预算；但控制器训练的学习率、优化器、batch size、训练轮数、warmup 以及训练硬件未说明，[A_LIMITS] 主实验目标模型解码参数也未明确，复现所需关键配置存在明显缺口。

*   工程/实践价值 (1.0/1.5)：[A_METHOD] ARENA 集成了 LoRA 控制器、Piper/TangoFlux 双模态渲染、文本守卫、MD-Judge 反馈和冻结 Llama Guard 评估，形成可运行的红队闭环；[A_RESULTS] 平均搜索次数低于预算，且跨模型迁移性体现一定审计工具复用价值。

### 🚨 局限与问题

1. 论文明确承认的局限：论文未单列 limitations 部分，但从讨论可以看出，剩余失败主要来自目标模型在识别到声事件后仍拒绝操作性细节、声音事件被识别为错误粒度，以及近失误只描述风险但不给出可操作步骤。作者也暗示固定音频基准可能低估风险，因为波形实现存在随机性。
2. 审稿人发现的潜在问题：基线选择过窄，仅比较两个静态音频越狱集，未对比将文本或图像自动红队方法适配到音频输入后的性能。最终成功仅由 Llama Guard 3 独立判断，没有人类评估或另一独立裁判，裁判偏差未被量化。FDR 在 PSR 接近 100% 时几乎退化为条件 ASR，联合指标对 text-unsafe 样本的惩罚体现不足。训练 seed 虽声称与 AdvBench 无重叠，但 AdvBench 本身与常见有害类别高度重合，泛化性仍待跨数据集验证。论文未明确主实验目标模型解码参数，也未控制多次声效合成和细化所带来的总推理成本。MD-Judge 与 Llama Guard 3 之间的一致性未报告，如果两者系统性分歧，搜索阶段可能优化了错误目标。总体结论方向合理，但"最高 FDR"的声明受限于当前基线选择，尚不宜被解读为对所有自动红队方法的 SOTA。

---

[← 返回 2026-08-18 语音/音乐/音频论文速递](/audio-paper-digest-blog/posts/2026-08-18/)
