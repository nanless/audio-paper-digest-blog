---
title: "Pseudo-Labels as Rewards, Not Targets: Group-Relative Policy Optimization for Semi-Supervised ASR"
date: 2026-10-27
draft: false
tags: [语音识别, 强化学习, 半监督学习, 多语言]
categories: [论文速递]
description: "针对只有无标注领域音频时的适应问题，论文把同一批伪标签从有监督微调的目标改为 GRPO 的奖励参照，在银行等对话领域上更抗标签噪声，但直接 GRPO 要求学生已有目标语种的输出支持。"
hiddenInHomeList: true
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_arxiv_id: "2610.32572"
paper_digest_workbench_contract: "researcher-workbench-v1"
paper_digest_reader_title: "把伪标签当奖励而不是目标：半监督语音识别的组相对策略优化"
paper_digest_original_title: "Pseudo-Labels as Rewards, Not Targets: Group-Relative Policy Optimization for Semi-Supervised ASR"
paper_digest_arxiv_version: 1
paper_digest_arxiv_versioned_id: "2610.32572v1"
paper_digest_arxiv_abs_url: "https://arxiv.org/abs/2610.32572v1"
paper_digest_arxiv_pdf_url: "https://arxiv.org/pdf/2610.32572v1.pdf"
paper_digest_primary_task: "语音识别"
paper_digest_tags_contract: "paper-tag-flat-tags-v2"
paper_digest_tags_selection_contract: "paper-tag-selection-v2"
paper_digest_tags_registry_version: "paper-tag-catalog-v2"
paper_digest_tags_registry_sha256: "cdef54423b5dfc00a1d017ef6639446d2ecd1d9c1acf71c8eb4f6219a46b7ba8"
paper_digest_tags_concepts: [{"facet":"task","id":"task.asr","label":"语音识别"},{"facet":"method","id":"method.reinforcement","label":"强化学习"},{"facet":"method","id":"method.semi-supervised","label":"半监督学习"},{"facet":"setting","id":"setting.multilingual","label":"多语言"}]
paper_digest_primary_method: "强化学习"
paper_digest_score: 7.5
paper_digest_rank_bucket: "前25%"
paper_digest_document_type: "方法研究"
paper_digest_one_sentence: "针对只有无标注领域音频时的适应问题，论文把同一批伪标签从有监督微调的目标改为 GRPO 的奖励参照，在银行等对话领域上更抗标签噪声，但直接 GRPO 要求学生已有目标语种的输出支持。"
paper_digest_authors: [{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Shashi Kumar"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Yanis Labrak"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Sergio Burdisso"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Esaú Villatoro-Tello"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Petr Motlicek"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Kadri Hacioglu"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Andreas Stolcke"}]
paper_digest_abstract_sha256: "29bf409f76f366d99dda30d5757312cd3e828ce7903f4fd916bd492490f7bae5"
paper_digest_sidecars: {"citation.bib":{"sha256":"21591733a4030fe46befebcf35d8491f14fa06ea44b2277385cc5df90224743f","url":"/audio-paper-digest-blog/data/papers/2026-10-27/2610-32572/citation.bib"},"citation.json":{"sha256":"73b2c18bf71b76a8ac70530e480e3fb702969261f02b86b6bfdc6c8123cd4071","url":"/audio-paper-digest-blog/data/papers/2026-10-27/2610-32572/citation.json"},"citation.ris":{"sha256":"0cfe0d57b361662dd85f80140882054d638412cf4e811e338aacf6fb22cbe8c3","url":"/audio-paper-digest-blog/data/papers/2026-10-27/2610-32572/citation.ris"},"rethink-context.json":{"contract":"paper-research-context-v2","sha256":"614d99bb0c75d6b76265349aa736121a2172c7892f5dff74e7fdfb7d717d873e","url":"/audio-paper-digest-blog/data/papers/2026-10-27/2610-32572/rethink-context.json"}}
paper_digest_api_reader_contract: "beginner-researcher-v3"
paper_digest_api_reader_article_sha256: "23bc6bad0ea2fff5c622b7de825fb8c404f74bf356cca3105c21c8a87d8ad7d1"
paper_digest_api_reader_plan_sha256: "077a3048c54eccf7b7e3fd7f08c166613a1083202fce2323c4c94cc19e03b458"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings-v4"
paper_digest_api_reader_source_bindings_sha256: "173e76d90a293e733b22c971db985a71386a492d97bfd73fe37ccfb34c40a1b6"
paper_digest_api_reader_source_table_count: 4
paper_digest_api_reader_source_formula_count: 3
paper_digest_api_reader_structured_artifacts_sha256: "637bb434845e24f00b4ee664ffd7dde2df04d8ad266f35da3ee7d7afaba1fdee"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity-v1"
paper_digest_api_reader_author_identity_sha256: "9c16a3e206222de60e1a21d6d4eecaef88d4af03d8ce4abd2bd25feb738a01e4"
paper_digest_api_reader_author_count: 7
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity-v1"
paper_digest_api_reader_resource_identity_sha256: "8ae795a8d4473d685e9f5667881ecf9a0a972bfe55b577bdb1f0f0169514f7b3"
paper_digest_api_reader_resource_count: 0
paper_digest_api_reader_figure_persistence: "ephemeral-no-persisted-figure-assets-v1"
paper_digest_api_reader_decision_projection: "api-reader-decision-projection-v2"
---

# 📄 把伪标签当奖励而不是目标：半监督语音识别的组相对策略优化

> 英文题目：*[Pseudo-Labels as Rewards, Not Targets: Group-Relative Policy Optimization for Semi-Supervised ASR](https://arxiv.org/abs/2610.32572v1)*

<!--paper-tag-hierarchy-v1:start-->

**研究分类**

- **研究任务**：[语音识别](/audio-paper-digest-blog/papers/?concept=task.asr)
- **研究方法**：[强化学习](/audio-paper-digest-blog/papers/?concept=method.reinforcement)；[半监督学习](/audio-paper-digest-blog/papers/?concept=method.semi-supervised)
- **研究条件**：[多语言](/audio-paper-digest-blog/papers/?concept=setting.multilingual)

<!--paper-tag-hierarchy-v1:end-->

> 评分：**7.5/10** | 创新 1.5/2 | 技术严谨 1.2/1.5 | 实验充分 1.3/1.5 | 清晰度 0.8/1 | 影响力 1.2/1.5 | 开源 0/1.5 | 可复现 0.5/0.5 | 工程/实践 1/1.5


## 👥 作者与机构

- Shashi Kumar：机构信息未能在本次解析中与作者逐人可靠绑定
- Yanis Labrak：机构信息未能在本次解析中与作者逐人可靠绑定
- Sergio Burdisso：机构信息未能在本次解析中与作者逐人可靠绑定
- Esaú Villatoro-Tello：机构信息未能在本次解析中与作者逐人可靠绑定
- Petr Motlicek：机构信息未能在本次解析中与作者逐人可靠绑定
- Kadri Hacioglu：机构信息未能在本次解析中与作者逐人可靠绑定
- Andreas Stolcke：机构信息未能在本次解析中与作者逐人可靠绑定

## 📌 核心摘要

读者需要理解的对象是只有领域内无转写音频时的识别器适配，困难是教师转写中的错词会被学生当成正确目标记住，处理过程是保留全部伪标签但改变使用方式。输入是银行、医疗、保险电话音频与 Common Voice 低资源语言音频，输出是转写文本，难点是伪标签词错率最高超过 26% 且无法用人工核对教师优劣。学生先在 LibriSpeech 960 小时外域数据上训练，再对每条无标注语音采样 4 个假设，用 \(1-\mathrm{WER}\) 相对伪标签打分并在组内归一化成优势后更新策略。伪标签只决定奖励高低，不直接决定每个词的似然目标，组内都相同的惩罚会被均值相减抵消。相对已有方法，关键差异是不清洗或重生成标签，只靠当前策略自身采样支撑过滤噪声。在银行测试集上，用 Whisper Tiny 伪标签的组相对策略优化（Group Relative Policy Optimization，GRPO）得到 14.06% 词错率，优于用 Whisper Large-V3 伪标签的有监督微调（Supervised Fine-Tuning，SFT）的 17.21%。结论适用于学生已能输出目标文字的情形，目标文字完全不在采样支撑内时直接做强化学习不再成立。原文未披露训练、推理或部署成本。

## 🔗 开源与复现资源

本次未形成可展示的已核验资源记录，开放状态尚未核实。

可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 要解决的任务是什么：没有转写的领域音频怎么做适应

论文处理的是语音识别的领域适应。输入是目标领域的大量无标注音频，例如银行客服电话，包含专门词汇、口音和电话信道特性，输出是每句话的文字转写。学生模型事先在域外数据 LibriSpeech 960 小时上训练好，直接拿到新领域时词错误率很高，原文中该学生在银行测试集上达到 66.44%。

困难在于客户通常只给音频不给转写，人工标注又贵又涉及隐私。常见做法是找一个现成的强教师模型先转写一遍，得到伪标签，再让满足生产约束的小学生模型去学。读者需要记住后文的对照：金标转写只用于评测、诊断分析和单独的金标基线，适应阶段学生能看到的只有音频和伪标签。

### 已有路线为什么还是在复述教师的输出

论文把已有工作分成两类。第一类不改损失，只改标签或数据。迭代伪标签、slimIPL、用学生滑动平均做教师的 Kaizen、加增强的 noisy student，都是在训练过程中更新标签；也有在训练前融合多个系统再用语音大模型纠错，或按领域分类器、词错误率预测、命名实体检查、多模型一致性做数据筛选。把硬伪标签换成软词分布反而可能导致坍缩。

第二类改目标但仍依赖金标。最小词错误率训练和策略梯度早已用于语音识别，但奖励参照是人工转写；组相对策略优化在推理大模型中省去价值评估模型，用组内比较代替学到的价值基线，最近用于语音识别时奖励仍对着真实文本或大模型反馈计算，或用合成语音的已知文本算奖励。论文的不同点是奖励参照本身就是不可靠的伪标签，这是无转写时唯一相关的情形，之前没有被系统研究过。

### 为什么把每个伪标签词都当目标会有结构性风险

有监督微调按词级交叉熵最大化伪标签每个词的似然，不管该词对错，还用教师强制把后面的预测条件建立在错误的词历史上。深层网络容易记住这样的目标，所以学生会跟踪甚至放大教师的错误模式。

论文提出换目标不换标签：同一批伪标签保留，但只作为奖励计算的参照。直觉是梯度只作用于学生自己生成的序列，如果学生本来很少生成教师写错的那个词，错误就很少被强化。这与常见的先学干净模式再记噪声的时间动态不同，这里是每一步靠采样分布的支持范围过滤噪声。机制是自限的而不是自纠正的，含错词的采样仍会被强化，只是梯度量级随该词被采样到的概率变化。

### 整体流程：同一批伪标签的两种用法

数据只有目标域音频集合，教师对每条音频生成伪标签。学生策略从域外训练好的初始点出发。两条路线用同一批伪标签：有监督微调用它做逐词目标，直接组相对策略优化用它做序列奖励的参照；还有一种先微调后优化的串行路线。

**伪标签 × 有监督微调 × 组相对策略优化：** 伪标签指用教师模型给无标注音频生成的转写文本；有监督微调指把伪标签每个词都当作要极大似然的目标；组相对策略优化指对同一句话采样多个假设并按组内相对奖励更新。本文把伪标签从前者的目标改为后者的奖励参照，前者无条件施加梯度，后者只对策略自己采样到的序列施加梯度，组合后保留了伪标签中的正确信息但减少了对错误词的强制拟合。

沿一条样本看：音频先经冻结的声学编码器和可训练投影层进入冻结的大语言模型，模型输出文字假设。有监督微调把伪标签全文喂给模型算损失；组相对策略优化则让当前策略对同一条音频采样 4 个假设，每个假设与伪标签算一次奖励，再在组内比较后更新投影层和 LoRA 参数。最终评测用贪婪解码，比较对象是保留的金标。

### 有监督微调施加梯度的方式

有监督微调的目标是对伪标签全文求负对数似然之和。关键符号是学生策略对当前词给定伪标签历史和音频的条件概率，求和范围是全部样本和全部词位置。这是无条件作用于伪标签的，错词也是目标。

\[\mathcal{L}_{\text{SFT}}(\theta)=-\sum_{n}\sum_{t}\log\pi_{\theta}\!\left(\tilde{y}_{n,t}\mid\tilde{y}_{n,<t},x_{n}\right).\]

对初学者可以这样理解：公式先对每个位置算模型给伪标签词的概率，再取对数加总取负，优化就是让这个值尽量小。教师错把正确词写成另一个词时，模型被推向去生成错词，且后续词还要以错词为条件，这就是误差被逐字继承的来源。

### 组相对策略优化如何采样、打分和归一化

每次对一条语音从旧策略采样 4 个假设，采样温度为 0.8，训练时每个假设最多 128 个新词元。每个假设与该句伪标签比较得到奖励，奖励等于 1 减去两者之间的词错误率。奖励越高说明假设越接近伪标签。

\[r_{i}=1-\mathrm{WER}\!\left(y^{(i)},\tilde{y}_{n}\right).\]

然后在组内做归一化得到优势：奖励减去组均值再除以组标准差。更新用标准的截断替代目标，截断范围为 0.2，并加权重为 0.04 的 KL 惩罚，把当前策略锚定在强化学习阶段开始时的参考策略上。

\[\hat{A}_{i}=\frac{r_{i}-\mu_{r}}{\sigma_{r}+\epsilon},\qquad\mu_{r}=\tfrac{1}{G}\textstyle\sum_{j}r_{j},\quad\sigma_{r}=\mathrm{sd}\!\left(r_{1},\dots,r_{G}\right),\]

**同策略采样 × 奖励 × 组相对优势：** 同策略采样指从当前学生策略自身采样多个识别假设；奖励指每个假设与伪标签比较得到的 1 减词错误率；组相对优势指奖励减去组均值再除以组标准差。采样决定梯度能作用到哪些序列，奖励决定方向，组内归一化抵消所有假设共同承担的惩罚，三者组合使只在少数假设中出现的教师错误词获得很小的梯度权重。

**教师模型 × 学生策略 × 参考策略：** 教师模型指生成伪标签的现成大模型，如 Whisper 各尺寸；学生策略指实际要部署的语音大语言模型，其声学编码器和大语言模型主体冻结，只训练投影层和 LoRA 适配器；参考策略指强化学习阶段开始时的学生快照，用于 KL 约束防止偏离过远。教师只提供奖励参照，学生是采样和更新的主体，参考策略是锚点，三者分工不同。

论文用一个例子解释抵消作用：伪标签把正确词换成错词，若 4 个采样都输出正确词，它们在该位置受到相同的惩罚，组均值相减后这部分被抵消，优势只取决于采样之间有差异的位置。只有当至少一个采样复述了错词，组内才会出现差异，而这种情况在错词采样概率很小时很少发生。

### 学生结构与两阶段训练的实际设置

学生是语音大语言模型：冻结的 WavLM-Large 编码器接可训练投影层，投影层是两层线性加 ReLU 并把声学序列下采样 5 倍，再接入冻结的 Llama-3.2-1B-Instruct 并用 LoRA 适配，秩为 16，缩放系数为 32。只有投影层和 LoRA 被训练。先在 LibriSpeech 960 小时上微调得到起点。

适应阶段有监督微调和组相对策略优化都用 AdamW、BF16 精度、批量 16、100 步热身、梯度范数裁剪到 1.0、训练 5 轮，学习率分别为 1×10−4 和 2×10−5。全部训练在单张 NVIDIA H100 80 GB 上完成。测试时贪婪解码，束宽为 1，上限 256 个词元。这些设置说明比较是在相同轮数和批量下进行的，差异主要来自目标本身。

### 在哪些数据和教师上比较，结果怎么算

主要目标域是 DefinedAI 的英文银行客服电话，训练约 54 小时，测试 6.55 小时。另有两个同提供方的对话域：医疗训练 11.51 小时、测试 1.11 小时，保险训练 27.60 小时、测试 3.24 小时。多语部分用 Common Voice 26 的印地语、希伯来语、越南语、塞尔维亚语，训练均不足 6 小时，测试从 1.34 小时到 4.75 小时不等。

教师方面，Whisper Tiny、Small、Medium 和 Large-V3 构成同一架构内的质量阶梯，在银行训练音频上相对金标的伪标签词错误率分别为 26.42%、17.23%、16.61% 和 14.61%，相差 11.81 个百分点。另有 Qwen3 ASR 1.7B、Phi-4 Multimodal IT 和 Audio Flamingo 3 3 个不同家族教师。多语的伪标签均来自 Whisper Large-V3。指标首次说明：词错误率衡量识别文本与参考文本的插入、删除、替换错误占比，越低越好；字符错误率用于非拉丁或重变音文字，同样越低越好。

### 标签变差时两种方法差距如何拉开

核心比较问题是：同一批伪标签质量从强到弱变化时，学生词错误率如何变化，比较条件是同一银行测试集、同一学生起点和相同的训练预算，指标越低越好。下表直接整理原文银行测试集结果，教师从弱到强排列，并以金标训练作为上限参照。

| PL Source | Method | WER | CER | INS/DEL/SUB |
| --- | --- | --- | --- | --- |
| LS960 (student) | SFT | 66.44 | 46.73 | 42.18/5.68/18.59 |
| Tiny | SFT | 32.11 | 23.71 | 15.17/4.91/12.03 |
| Tiny | GRPO | 14.06 | 10.68 | 1.87/5.69/6.49 |
| Tiny | SFT→GRPO | 22.77 | 16.71 | 6.20/5.77/10.80 |
| Small | SFT | 20.23 | 15.64 | 7.95/4.00/8.28 |
| Small | GRPO | 12.71 | 9.64 | 1.95/4.84/5.91 |
| Small | SFT→GRPO | 17.39 | 13.43 | 4.90/4.60/7.89 |
| Medium | SFT | 18.11 | 14.06 | 6.30/4.47/7.33 |
| Medium | GRPO | 12.58 | 9.54 | 1.98/4.67/5.93 |
| Medium | SFT→GRPO | 17.17 | 13.44 | 5.03/4.83/7.30 |
| Large-V3 | SFT | 17.21 | 13.60 | 6.25/3.77/7.19 |
| Large-V3 | GRPO | 12.17 | 9.29 | 2.12/4.32/5.73 |
| Large-V3 | SFT→GRPO | 16.31 | 12.91 | 5.35/3.95/7.01 |
| Gold | SFT | 10.27 | 7.11 | 2.99/2.13/5.14 |
| Gold | GRPO | 10.78 | 7.68 | 1.79/3.50/5.49 |
| Gold | SFT→GRPO | 9.49 | 6.66 | 1.98/2.50/5.01 |

表 1 是银行测试集上四档 Whisper 教师和金标上限的结果，包含词错误率、字符错误率和插入、删除、替换分解。直接读数显示，从 Large-V3 到 Tiny 标签词错误率上升 11.81 个百分点，但 GRPO 学生仅上升 1.89 个百分点，从 12.17 到 14.06，而 SFT 学生上升 14.90 个百分点，从 17.21 到 32.11。每增加 1 个百分点的标签错误，学生平均增加 1.31 个百分点对应 SFT，先 SFT 后 GRPO 为 0.56，直接 GRPO 仅 0.16。弱标签下训练的 GRPO 反而比强标签下训练的 SFT 好 3.15 个百分点。

**词错误率 × 插入错误 × 删除错误：** 词错误率指识别结果相对参考文本的插入、删除、替换错误之和占参考词数的比例，越低越好；插入错误指多出的词，删除错误指漏掉的词。本文用基于词错误率的奖励直接惩罚幻觉内容，使策略趋于保守，实验上表现为插入大幅下降而删除略有上升，理解这组分工才能看懂 GRPO 的保守化倾向。

误差分解显示 GRPO 大幅压低插入，例如 Tiny 标签下插入从 15.17 个百分点降到 1.87 个百分点，删除略升从 4.91 个百分点到 5.69 个百分点，说明基于词错误率的奖励让策略更保守。

处理对象是同一批银行通话音频，教师先给出伪标签，学生再用这批伪标签训练，训练后的学生在同一测试集上比较。金标下 SFT 为 10.27，GRPO 为 10.78，先 SFT 后 GRPO 为 9.49，说明优势只在噪声参照下出现，不是优化器本身普遍更强。用 Large-V3 伪标签代替金标的代价，SFT 为 6.94 个百分点，GRPO 仅 1.39 个百分点，先做 SFT 会把教师错误带入采样分布，后续组内比较难以纠正。

### 换教师和换领域后优势还在吗

第二个比较问题是优势是否依赖某个教师家族。银行测试集上换 3 个不同架构教师，条件同样是用伪标签训练、贪婪解码评测，指标为词错误率，越低越好。同一批银行领域音频先由教师转写成伪标签，学生再以伪标签为奖励参考采样多个假设并做组内比较，而不是把伪标签逐词当作目标去拟合。

| Teacher | SFT | GRPO | SFT→GRPO |
| --- | --- | --- | --- |
| Qwen3 ASR 1.7B | 13.83 | 11.35 | 13.41 |
| Phi-4 Multimodal IT | 14.34 | 11.81 | 14.76 |
| Audio Flamingo 3 | 14.96 | 11.83 | 14.32 |

表 2 为银行测试集上 3 个新教师家族的结果，单位为%WER。3 个教师的伪标签词错误率分别为 11.05、12.46 和 12.44，都优于 Whisper Large-V3 的 14.61，但 GRPO 仍全面低于 SFT，例如 Qwen3 教师下 11.35 对 13.83，降低 2.48 个百分点。这支持方法是教师无关的，不是靠某一家的高质量标签。先做 SFT 再做 GRPO 的三列结果也没有超过直接 GRPO，说明先把教师错误学进策略会留下负担。

第 3 个比较问题是医疗和保险两个新领域，伪标签均来自 Whisper Large-V3，金标结果作为上限对照，指标数值越低越好。

| Domain | Method | Gold WER | Gold CER | Pseudo WER | Pseudo CER |
| --- | --- | --- | --- | --- | --- |
| Healthcare | SFT | 12.28 | 8.40 | 18.72 | 14.32 |
| Healthcare | GRPO | 12.60 | 8.39 | 14.64 | 10.91 |
| Insurance | SFT | 14.02 | 10.27 | 19.59 | 15.53 |
| Insurance | GRPO | 14.35 | 10.24 | 15.70 | 12.12 |

表 3 显示医疗上 SFT 为 18.72 而 GRPO 为 14.64，金标 SFT 为 12.28；保险上 SFT 为 19.59 而 GRPO 为 15.70，金标 SFT 为 14.02。金标下 GRPO 略差，伪标签下 GRPO 明显更好，伪标签相对各自金标的差距在医疗是 6.44 对 2.04，在保险是 5.57 对 1.35，GRPO 都更接近上限。限制是这仍是同一提供方、同类电话对话，不能推广到朗读或会议等差异更大的场景。

### 训练不足 6 小时的小语种上还能直接用吗

第四个比较问题是低资源语言上先做监督微调再做组相对策略优化是否还有用。条件是每种语言训练不足 6 小时，伪标签来自 Whisper Large-V3，指标改用字符错误率，数值越低越好，原文表题标明单位为百分比。直接做组相对策略优化被略去，因为英文训练的学生采样是拉丁字母的近似发音，无法产生目标文字，每个假设相对伪标签的词错误率都超过 100%，组相对优势只会选最像目标语言的采样，无法区分好坏转写，所以必须先用监督微调把目标文字装进策略，再让强化阶段有可选择的采样支撑。

| Language | Gold SFT | Gold SFT-GRPO | Pseudo SFT | Pseudo SFT-GRPO |
| --- | --- | --- | --- | --- |
| Hindi | 27.01 | 28.26 | 24.27 | 22.94 |
| Hebrew | 46.40 | 37.33 | 40.03 | 36.89 |
| Vietnamese | 57.64 | 51.02 | 58.78 | 49.92 |
| Serbian | 34.31 | 30.68 | 35.01 | 30.17 |

上表整理 Common Voice 4 种语言的字符错误率结果，行按语言区分，列区分金标与伪标签训练以及是否在监督微调后加组相对策略优化，表题已说明单位为百分比，数值越低越好。伪标签下加优化后 4 种语言都下降，例如越南语从 58.78 到 49.92，希伯来语从 40.03 到 36.89，塞尔维亚语从 35.01 到 30.17，印地语从 24.27 到 22.94，并达到或超过各自金标对照。金标下加优化除印地语外也有帮助。

需要强调绝对值仍然很高，这是每种语言只有不足 6 小时训练音频加小模型的预期范围，论文也指出同类基于大语言模型的系统也在相近范围，结论只能是同一语言内的方法比较，不能当作已可用的绝对水平。未胜出项是印地语金标下加优化反而从 27.01 升到 28.26，说明在该语言金标条件下先监督后强化的组合没有带来增益。

### 为什么错误词很少进入更新：复制率与采样支持

要回答的机制问题有两个：为何 GRPO 在同一批伪标签上优于 SFT，为何先 SFT 后 GRPO 远不如直接 GRPO。分析只用金标来事后标出伪标签中的错误词，按每句错误词数分组。先看最终输出原样复述错误词的比例，这是理解过滤强度的直接观察任务，横轴是每句错误数，纵轴是复制比例。

> **看图路径：** 1. 先看横轴伪标签每句错误词数从 1 到 11+ 的分组，再看纵轴原样复制错误词的比例；2. 比较蓝色 GRPO 折线随损坏加重而下降，与红色 SFT 和紫色先 SFT 后 GRPO 两条高位线的差异；3. 注意每个分组附近散点的分布，理解均值线与样本离散的关系

[![原论文 Figure 1：Fraction of erroneous pseudo-label (PL) words that the student reproduces verbatim in its final…](https://arxiv.org/html/2610.32572v1/plot4_copy_rate.svg)](https://arxiv.org/html/2610.32572v1/plot4_copy_rate.svg)

*论文图 1。原论文 Figure 1:：“Fraction of erroneous pseudo-label (PL) words that the student reproduces verbatim in its final output, as a function of the number of word errors in the utterance’s pseudo-label.”。*

图 1 显示 3 条折线的走向差异：SFT 接近顶部接近 100%，先 SFT 后 GRPO 紧跟其后，直接 GRPO 的蓝色折线从 1 个错误组约 68% 一路降到 11 个以上错误组约 27%，损坏越重过滤越强。散点显示各组内样本存在离散，但均值线的排序稳定。论文解释为要复述多个独立错词，采样必须在同一序列中多次错过正确词，概率相乘后更小。

**先有监督微调再做强化学习 × 直接做强化学习：** 先有监督微调再做强化学习指先用交叉熵拟合伪标签再启动 GRPO；直接做强化学习指从域外训练好的学生出发直接采样和做 GRPO。前者把教师错误词放进策略的采样支持，后者保持错误词很少被采样到。在伪标签有噪声的英文对话任务中前者有害，只有当学生完全发不出目标文字、采样没有有效支持时，前者才是必要的起步。

进一步看采样：在直接 GRPO 之前，错误伪标签词只出现在 10% 到 30% 的采样中；经过 SFT 后则出现在 95% 以上。不在采样中的错词对组内所有假设惩罚相同，被均值相减抵消，更新由伪标签中大多正确的部分驱动。组内奖励标准差也支持这一点，直接 GRPO 维持在 0.06 到 0.09，经过 SFT 后降到约 0.01，采样高度相似导致奖励几乎相同，纠错信号被抹掉。学生的银行词错误率虽高达 66.44%，但关键不是整体准确率，而是采样与教师特定错误的重合率低。

### 结论在什么条件下才成立，有哪些边界

成立条件很具体：学生策略初始已能输出目标语言的文字，使正确词在采样支持内；伪标签错误与学生采样错误不高度重合；奖励参照与伪标签的词错误率计算一致；评测用贪婪解码和原领域测试集。多语实验是反例，英文学生发不出目标文字时直接 GRPO 不适用，必须先用短暂 SFT 建立文字输出，这时先 SFT 是必要而非有害。

另一边界是先 SFT 会把错误放进支持并压低奖励方差，后续 GRPO 只能部分挽回，Tiny 标签下先 SFT 后 GRPO 为 22.77，介于 SFT 的 32.11 和直接 GRPO 的 14.06 之间。GRPO 的保守化也有代价，插入下降伴随删除略升。论文未测量延迟、推理成本和误判率，不能承诺这些会改善；合成语音迭代伪标签和按置信度筛选 SFT 都列为未来工作，尚未验证。

### 要复现第一步做什么，需要哪些信息

复现应从银行英文对话任务起步，因为证据最完整。先用 LibriSpeech 960 小时训练好学生起点，记录其银行测试集的高词错误率基线；再用四档 Whisper 生成伪标签并算出相对金标的标签词错误率，确认约 11.81 个百分点的阶梯存在。

然后在相同轮数和批量下分别跑 SFT 和组相对策略优化，组大小 4、温度 0.8、截断 0.2、KL 权重 0.04，检查是否复现出标签变差时斜率差异和插入下降的签名。关键超参数和信息条件都要保留：只训练投影层和 LoRA、冻结编码器和大语言模型主体、奖励用 1 减词错误率、金标不进入训练。公开性方面，本次未发现来源绑定且完成验证的资源，不得声称代码、模型或数据已公开，需要按原文描述自行实现和申请 DefinedAI 与 Common Voice 数据。

### 什么时候值得尝试，还缺哪项验证

当只有领域音频、伪标签质量未知或教师不可选、且学生已能输出目标语言时，值得尝试把伪标签从目标改为奖励参照，尤其在插入和幻觉较多时。预期是随标签变差性能下降更平缓，而不是绝对达到金标水平。

当学生完全发不出目标文字时，不要直接做强化学习，先做短暂有监督微调建立文字支持再做强化学习。当伪标签基本干净时，传统先微调后优化的顺序仍然最好，银行金标下该顺序达到 9.49。

还缺的验证包括与其他噪声鲁棒损失在同数据同预算下的对照、不同解码和多次随机种子的方差、以及在朗读、会议、强噪声等非电话对话域上的重复。教学例子：可以把教师错词看作只在少数采样中出现的拼写，组内比较会把它当作共同背景噪声减掉；但这只是帮助理解的比喻，证明来自复制率和采样统计，不是比喻本身。

<details>
<summary>📎 论文与评分元数据</summary>

排名：前25% | 文档类型：方法研究 | [arXiv 原文](https://arxiv.org/abs/2610.32572v1)

</details>

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。

- 评分规则：type-aware-v1

- 评分模型：muse-spark-1.3-contributor

- 评分请求协议：openai_responses

---

[← 返回 2026-10-27 语音/音乐/音频论文速递](/audio-paper-digest-blog/posts/2026-10-27/)
