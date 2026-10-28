---
title: "Integrate the Reward, Don't Sample It: Window Likelihood for Interruptions and Backchannels in Full-Duplex Speech Models"
date: 2026-10-27
draft: false
tags: [轮次切换, 强化学习, 语音, 后训练]
categories: [论文速递]
description: "针对全双工语音模型在用户打断与附和时的让路或保持决策，论文用事件窗口内停止概率的闭式似然替代整段采样的 GRPO 奖励，在六个开源模型上取得最优让路保持 F1 且不增加静音下重开话轮的副作用。"
hiddenInHomeList: true
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_arxiv_id: "2610.35581"
paper_digest_workbench_contract: "researcher-workbench-v1"
paper_digest_reader_title: "打断要让，附和要留：窗口似然如何替代采样式时机奖励"
paper_digest_original_title: "Integrate the Reward, Don't Sample It: Window Likelihood for Interruptions and Backchannels in Full-Duplex Speech Models"
paper_digest_arxiv_version: 1
paper_digest_arxiv_versioned_id: "2610.35581v1"
paper_digest_arxiv_abs_url: "https://arxiv.org/abs/2610.35581v1"
paper_digest_arxiv_pdf_url: "https://arxiv.org/pdf/2610.35581v1.pdf"
paper_digest_primary_task: "轮次切换"
paper_digest_tags_contract: "paper-tag-flat-tags-v2"
paper_digest_tags_selection_contract: "paper-tag-selection-v2"
paper_digest_tags_registry_version: "paper-tag-catalog-v2"
paper_digest_tags_registry_sha256: "cdef54423b5dfc00a1d017ef6639446d2ecd1d9c1acf71c8eb4f6219a46b7ba8"
paper_digest_tags_concepts: [{"facet":"task","id":"task.turn-taking","label":"轮次切换"},{"facet":"method","id":"method.reinforcement","label":"强化学习"},{"facet":"signal","id":"signal.speech","label":"语音"},{"facet":"setting","id":"setting.post-training","label":"后训练"}]
paper_digest_primary_method: "强化学习"
paper_digest_score: 7.4
paper_digest_rank_bucket: "前50%"
paper_digest_document_type: "方法研究"
paper_digest_one_sentence: "针对全双工语音模型在用户打断与附和时的让路或保持决策，论文用事件窗口内停止概率的闭式似然替代整段采样的 GRPO 奖励，在六个开源模型上取得最优让路保持 F1 且不增加静音下重开话轮的副作用。"
paper_digest_authors: [{"affiliations":["Nanyang Technological University, Singapore","Tencent"],"name":"Guoqiang Hu"},{"affiliations":["Tencent"],"name":"Lichao Zhang"},{"affiliations":["Nanyang Technological University, Singapore"],"name":"Yizhou Peng"},{"affiliations":["Tencent"],"name":"Yuhao Luo"},{"affiliations":["Tencent"],"name":"Haifeng Hu"},{"affiliations":["Tencent"],"name":"Sallen Sun"},{"affiliations":["Tencent"],"name":"Will Yang"},{"affiliations":["Nanyang Technological University, Singapore"],"name":"Eng Siong Chng"}]
paper_digest_abstract_sha256: "e36f435c219724b76ae0ade56f6372c1d1d6164a532d22d4e5944d68354a9be9"
paper_digest_sidecars: {"citation.bib":{"sha256":"92161ee9fd23622ed30a119bf67b921985049c0fbb7fc20927df758ad15d5e4d","url":"/audio-paper-digest-blog/data/papers/2026-10-27/2610-35581/citation.bib"},"citation.json":{"sha256":"c118391dda57534df336a034bf173f4512343b89175f42107c6438917b341d38","url":"/audio-paper-digest-blog/data/papers/2026-10-27/2610-35581/citation.json"},"citation.ris":{"sha256":"bdc9df47912d1a1a71504b0266ec6d79b9384621424b9fb7aefb1a402ed669bc","url":"/audio-paper-digest-blog/data/papers/2026-10-27/2610-35581/citation.ris"},"rethink-context.json":{"contract":"paper-research-context-v2","sha256":"d2c18fca1247381b6fd13902b1dbe8c94725157c9e89e1b9fb6aa0f1532f6332","url":"/audio-paper-digest-blog/data/papers/2026-10-27/2610-35581/rethink-context.json"}}
paper_digest_api_reader_contract: "beginner-researcher-v3"
paper_digest_api_reader_article_sha256: "f3c75feafbee0460274df5c9e9a5209b4e64e9c02f8fca96071b18d4888b51da"
paper_digest_api_reader_plan_sha256: "0befd2f158a09ba4820438bfa79bdaf2fd7c54a720c88f1c4b91c60a78dbba77"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings-v4"
paper_digest_api_reader_source_bindings_sha256: "5985fdc526036285593b3a4b186201653b1532ba5eee8c4a2cba1a5c9e394c24"
paper_digest_api_reader_source_table_count: 4
paper_digest_api_reader_source_formula_count: 3
paper_digest_api_reader_structured_artifacts_sha256: "77f7a301b96daaab593d4b1e24287eb47ab1d6a7c87cc7abb4467cac31bd2111"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity-v1"
paper_digest_api_reader_author_identity_sha256: "907d40de1f3b7a32d9a83c3232515a285a18e4a5252543d59744c20ef2375f30"
paper_digest_api_reader_author_count: 8
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity-v1"
paper_digest_api_reader_resource_identity_sha256: "f34094520187149f3c0e5ef9ab15bda267f5ebb06b6310124529607cceb50f68"
paper_digest_api_reader_resource_count: 0
paper_digest_api_reader_figure_persistence: "ephemeral-no-persisted-figure-assets-v1"
paper_digest_api_reader_decision_projection: "api-reader-decision-projection-v2"
---

# 📄 打断要让，附和要留：窗口似然如何替代采样式时机奖励

> 英文题目：*[Integrate the Reward, Don't Sample It: Window Likelihood for Interruptions and Backchannels in Full-Duplex Speech Models](https://arxiv.org/abs/2610.35581v1)*

<!--paper-tag-hierarchy-v1:start-->

**研究分类**

- **研究任务**：[语音交互](/audio-paper-digest-blog/papers/?concept=task.speech-interaction) → [轮次切换](/audio-paper-digest-blog/papers/?concept=task.turn-taking)
- **研究方法**：[强化学习](/audio-paper-digest-blog/papers/?concept=method.reinforcement)
- **研究条件**：[后训练](/audio-paper-digest-blog/papers/?concept=setting.post-training)
- **信号**：[语音](/audio-paper-digest-blog/papers/?concept=signal.speech)

<!--paper-tag-hierarchy-v1:end-->

> 评分：**7.4/10** | 创新 1.5/2 | 技术严谨 1.2/1.5 | 实验充分 1.2/1.5 | 清晰度 0.8/1 | 影响力 1.1/1.5 | 开源 0/1.5 | 可复现 0.3/0.5 | 工程/实践 1.3/1.5


## 👥 作者与机构

- Guoqiang Hu：Nanyang Technological University, Singapore；Tencent
- Lichao Zhang：Tencent
- Yizhou Peng：Nanyang Technological University, Singapore
- Yuhao Luo：Tencent
- Haifeng Hu：Tencent
- Sallen Sun：Tencent
- Will Yang：Tencent
- Eng Siong Chng：Nanyang Technological University, Singapore

## 📌 核心摘要

边说边听的全双工语音对话模型要在用户插话时让出、在用户附和时保持，难点是打断与附和在声学上接近，且让出过多会误停、过少会抢话。评测沿一条样本注入真实打断或附和录音，读出模型在插话 onset 后 2 秒事件窗口内的停止决策，再统计打断停止率与附和误停率。窗口似然先为每个窗口采样一条模型自身的回答延续，延续中按测试方式注入插话并保留其内容与自身停止位置。接着用教师强制前向重算该延续在窗口内访问过的说话态停止决策概率，采样过程不通梯度，前一步的延续直接成为这一步重算的输入。然后在这些概率上闭式积分，打断用噪声或最大化至少停一次的对数概率，附和用生存积最大化一次不停的对数概率。相对整段组相对策略优化把一个二值分数分给整段所有决策，窗口似然只在奖励依赖的决策上放梯度，并用对数避免最难窗口梯度消失。在 HumDial-FDBench 中文 Lychee-FD 上，窗口似然相对基线的 F1 从 62.6 提高到 91.4，且 100 秒静默重开率为 0%，而同预算组相对策略优化为 100%。结论适用于有显式停止通道与无控制符的两类模型，但 Freeze-Omni 等受限结构仍绝对偏低。原文未披露训练、推理或部署成本。

## 🔗 开源与复现资源

本次未形成可展示的已核验资源记录，开放状态尚未核实。

可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 全双工对话要解决什么输入输出问题

全双工语音对话模型的输入是两路同时到达的音频，一路是模型自己正在播报的回答，另一路是用户随时可能插入的语音，输出是同一条流中继续说还是立刻停。论文聚焦其中一个中心判断：当用户在模型说话时开口，模型该让路还是保持。让路对应真实打断，例如追问价格、要求重复、换话题；保持对应用户附和，例如嗯嗯、好的、是呀，这时停下来就是误伤。

这个任务的难点在于两类错误处在一个跷跷板上。让模型更爱停，打断停对了，附和也跟着误停；让模型更爱说，附和保住了，打断又不让了。公开模型的两个极端在引言里被点名：Moshi 只对少数真实打断让路，Lychee-FD 则在约一半用户附和上停下来。初看容易把这当成阈值没调好，但论文强调这是后训练目标写法的问题，后续用整段强化学习调停止频率时，跷跷板依然存在。

**打断 × 附和 × 让路与保持：** 打断指用户在模型说话时插入需要停下来的实质内容，附和指表示在听的短语不需要停，让路与保持就是前者要在 2 秒窗口内停后者要在同一窗口内不停，二者共用停止决策但标签相反，所以调高一侧容易拉坏另一侧。

### 已有时机后训练为什么常用整段采样奖励

已有路线大多用带时机奖励的在线强化学习来平衡抢话与附和延续。常见做法是采多条对话延续，按模型是否在该停时停来打分，再用组相对优势更新。论文列举了在自有小模型与合成测试上做权衡的工作、在 Moshika 与 PersonaPlex 上用规则奖励加内容奖励的工作，以及只在关键交互窗口内做 GRPO 但仍采样奖励的 DuplexPO，还有把动作投影到说与静音但仍采样的工作。离线偏好对做法也是先采样再构造时机对。

论文把自己的基线刻意做成整段形式，以便暴露问题：每步取一个窗口、采 16 条延续，每条按窗口内停对与否给正负 1 分，优势在组内归一化后乘到延续的每个决策上。延续从模型首答之前开始，因此策略还会做出听态决策，即何时开始首答、静音时是否说话。窗口化变体从窗口内开始以保持信用局部，论文用只把优势加在说话态决策的消融来逼近这种思想，但仍保留采样。

**整段 GRPO × 零梯度陷阱 × 信用泄漏：** 整段 GRPO 指每步采 16 条完整延续按窗口内是否停对打分再把组归一化优势分摊到整条延续的做法，零梯度陷阱指 16 条全对或全错时优势为零最需要学习的难窗反而学不到，信用泄漏指分数摊到包括听态在内的无关决策导致静音下乱说话，窗口似然正是针对这两处提出替代。

### 事件窗口与停止决策如何定义

训练对话包含用户首问、模型回答，以及在模型说话途中从 t0 时刻插入的插话，插话被标注为打断或附和。事件窗口定义为 t0 开始的 2 秒。窗口内模型按自身决策频率做出 K 个二值停止决策。Lychee-FD 每 0.4 秒一个控制状态所以 K 不超过 5，MiniCPM-o 与 BayLing 在每个文本位置决策，Freeze-Omni 在每个语音活动检测帧决策，Moshi 类每 80 毫秒 1 帧。

什么算停取决于接口：Lychee-FD 控制分支的停止状态，MiniCPM-o 的 listen 与 turn-eos 词，BayLing 的[EPAD]，Freeze-Omni 状态头的状态 1，Moshi 类的一段无词块。记 pk 为在已保持说话直到 k 的前缀下第 k 个决策停的概率。给定该前缀，即固定一条已采样的内容路径，窗口内至少停 1 次的概率写成连乘形式，它不需要独立性假设，因为每个 pk 已对保持说话至今为条件。

**事件窗口 × 停止决策 × 窗口停止概率：** 事件窗口指从用户插话起点开始的 2 秒区间，停止决策指模型在窗口内按自身节奏做出的若干二值停不停判断，窗口停止概率指在该窗口内至少停一次的概率，它把多个离散决策合并成一个可优化的标量，是后文两种损失的共同基础。

### 从采样奖励到积分奖励的整体思路

论文的核心判断是窗口奖励本来就是窗口内少数二值控制决策的已知函数，却被当成整条延续上的黑盒标量来采样和分摊，这是浪费且错位。浪费在于几个伯努利变量的已知函数其期望有闭式，不必采样；错位在于函数点名了它依赖哪些决策，不该把分数摊到听态等无关决策上。因此方法保留一条采样延续来确定内容路径与访问到的决策位置，但对这些控制决策在闭式内积分，再把期望奖励当作对数似然最大化，这就是窗口似然。

下图把两种学习方式放在同一事件窗口下对比，左侧是整段做法，右侧是本文做法，读图时先看时间与决策的对应，再看分数的去向。

> **看图路径：** 1. 先看顶部时间轴上用户问题模型说话插话与 2 秒窗口的先后关系；2. 对比左侧 16 条延续共用一个分数与右侧一条延续直接算闭式期望的差异；3. 注意底部听态与说态决策的划分，理解分数被分摊到哪里

[![原论文 Figure 1：One event window, two ways to learn from it.](https://arxiv.org/html/2610.35581v1/fig_overview.svg)](https://arxiv.org/html/2610.35581v1/fig_overview.svg)

*论文图 1。原论文 Figure 1:：“One event window, two ways to learn from it.”。*

从像素可见，顶部是用户问题条、模型说话条、插话条与 2 秒窗口，窗口内标出多个停止概率。左侧画出 16 条延续，每条一个分数，组归一化后难窗上无梯度，底部把分数摊到听态问句、间隙、说话段、窗口、之后段。右侧只用一条采样延续，对打断写至少停 1 次的形式，对附和写永不停的形式，并注明梯度只在事件决策上、在最难窗口不消失、每窗都可用。

### 打断与附和的两项似然各算什么

窗口似然保留采样延续，但替换采样分数。对打断用负对数表示至少停 1 次，对附和用不停对数之和表示永不停。前者是多示例学习中的噪声或，后者是离散时间生存似然，论文称新意在于把它们用作轮次奖励的替代，而不是监督某个标注的停止时刻。窗口内不停在何处停都可以，这正是多示例设定。

pk 来自对当前策略采样的一条延续做教师强制前向，只取窗口内访问到的说话态停止决策，直到延续自身停止处为止。访问到的决策在闭式内被边缘化，内容与提前停止被固定，不让梯度流过采样。因此这是在自生成延续上的教师强制似然，是期望奖励的替代而非无偏估计，没有奖励模型、没有组、没有优势。

\[S\;=\;1-\prod_{k=1}^{K}(1-p_{k}),\]

上式就是窗口停止概率 S 的定义，pk 是第 k 个停止决策的停止概率，下标遍历窗口内访问到的决策。打断项是对 S 取负对数，附和项是对每个不停概率取对数再求和。复述时要记住输入是同一延续的 pk 序列，输出是两个标量损失，分别对应让路与保持。

**噪声或 × 生存连乘 × 窗口似然：** 噪声或指用 1 减去都不停的连乘来表示至少停一次，负责打断样本，生存连乘指把每个决策的不停概率连乘并取对数，负责附和样本，窗口似然就是把这两种闭式期望当作似然来最大化，只用一次采样延续提供位置，不再对奖励采样。

### 没有控制词的模型如何定义停

PersonaPlex 与 Moshika 没有停止决策，文本流在静音时只是输出 PAD。论文把停定义为连续 10 个无词 80 毫秒帧，即 0.8 秒，这也是评测用的合并间隙。块分数是沿已采样的有词前缀对 PAD 概率做教师强制连乘，作为块概率的替代。因为块互相重叠，噪声或被替换为基于并界的单调替代。因此在这类模型上两项都是替代而非严格似然。

只训练文本输出投影的 PAD 与文末 PAD 两行，共 8194 个参数，这样模型能改变出词还是出 PAD，但不改变说什么，这对应 Lychee-FD 用控制分支实现的内容与控制分离。PAD 同时编码听态保持静音，若读出不加门就会像 GRPO 一样泄漏到听态，因此事件行只在让路保持决策有定义的时段接入，从用户盖住模型说话开始到用户停后 2 秒，其余位置用冻结行。门只读两路音频通道。另 1 对回答后行在第二阶段训练，用于压住回答后自身的重开，而打断与附和分数不变。

**事件门 × 投影行 × 话后行：** 投影行指 Moshi 类无控制分支模型中只训练文本输出投影的两行，用来改变出词还是出静音而不改变说什么，事件门指这两行只在用户盖住模型说话到用户停后 2 秒内生效，话后行指第二阶段在回答后静音段训练的另一对行，专门压住回答后重开话轮。

### 总损失与辅助项如何组织训练

除事件项外，还有两项复用同样两种形式的时机事件。事件前项对模型起始到 t0 之间的停止决策用生存形式，让模型在用户进来时仍在说话。轮次项对用户首问结束后 2 秒内的开始说话决策用噪声或，对用户仍在说话时的开始说话决策用生存形式。总损失是事件项加 0.5 倍事件前项加轮次项加 KL 约束，KL 权重为 0.05，Moshi 类为 0.1。每项只用在控制通道同时管辖该决策的位置，Moshi 类不用这两项而用门与回答后行。

\[\mathcal{L}=\mathcal{L}_{\mathrm{event}}+0.5\,\mathcal{L}_{\mathrm{pre}}+\mathcal{L}_{\mathrm{tt}}+\beta\,\mathrm{KL}(\pi_{\theta}\,\|\,\pi_{\mathrm{ref}}),\]

上式中事件项按标签取打断或附和形式，策略与基座模型的 KL 防止漂移过远。论文给出的方法配方是通用三步：点名奖励依赖的决策，把至少 1 次写成噪声或、永不写成生存连乘，对一条延续教师强制并把对数似然作为时机项。训练时打断与附和窗口交替，不构造静音独白或合成数据，Moshi 回答后阶段除外，它用同一附和对话中回答后 16 秒。

下表是 6 个模型与训练预算的原始对照，比较问题是不同控制接口下各训练哪里、与哪种 GRPO 对照是否公平。表前说明已讲清接口差异，读表时注意前 4 个有显式停止决策因而支持受控对照，后两个只能与论文提及的检查点比较。

| Model | Stop decision | Trained part | GRPO comparison | Event rollouts |
| --- | --- | --- | --- | --- |
| Lychee-FD (2026) | control branch, one state per 0.4 s | control head | controlled | 8,864 |
| MiniCPM-o 4.5 (2026) | listen / eos tokens (text vocabulary) | LoRA (attention) | controlled | 1,200 |
| BayLing-Duplex (2026) | [EPAD] / assistant tokens (text channel) | LoRA (attention) | controlled | 2,400 |
| Freeze-Omni (2025) | VAD gate + state head | state head | controlled | 2,400 |

表中可见 Lychee-FD 训练控制头，MiniCPM-o 与 BayLing 训练注意力 LoRA，Freeze-Omni 训练状态头，PersonaPlex 与 Moshika 只训练两投影行。事件延续数从一千余到八千余不等，Moshi 类还有第二阶段回答后窗数。限制是前 4 个的 GRPO 与窗口似然在事件窗口延续数与训练参数上匹配，但 Lychee-FD 轮次项多加两窗，MiniCPM-o 更新次数不同，这些混杂在后文结果解读时被明确保留，不归因于单一因素。

### 评测如何保证事件真的发生在模型说话时

评测用 HumDial-FDBench，论文称这是所知的唯一含双语真实录制打断与用户附和的基准。每语言 1500 条真实打断分 5 类各 300 条，加 300 条用户附和。中文用于 Lychee-FD、MiniCPM-o 与 Freeze-Omni，英文用于其余。训练与测试说话人与对话不重叠，训练只用 HumDial 第二轨的打断与附和片段，按模型测试语言选取。

固定用户轨重放不能保证插话到达时模型仍在说话，不同模型起停不同。为此采用闭环协议：播放用户问题，等模型开始回答，在模型起始后 0.8、1.6 或 2.4 秒注入真实插话录音，轮换条目。仅当注入时模型仍在说话才算有效条目，无效丢弃并报告有效数，因此靠保持沉默不能得分。所有模型与配置用同一片段、延迟与种子。打断在插话起点后 2 秒内触发模型自有停止决策算让路，附和同样算误停，Moshi 类用输出能量间隙判定。

\[\mathrm{F1}=\frac{2\,I\,(1-B)}{I+1-B}\]

上式是让路率与保持率的调和平均，记为 F1，只有两者都好时才高。论文不用大模型判分，理由是转录记录说了什么而非何时决定停，且已有转录判分与人的一致性中等。另加 100 秒静音测试：用户问一句、模型答完后静音 100 秒，报告重开话轮比例与说话秒数，该段训练从未触及，用于捕捉为拿时机分而多说话的副作用。

### 六个模型上的让路保持结果如何

论文报告窗口似然在 6 个模型上 F1 均为最高，且测试条目自助置信区间与次优不重叠。在可稳定训练的 Lychee-FD 与 MiniCPM-o 上，窗口似然超过最优 GRPO 变体约 7 个点与约 6 个点。BayLing 与 Freeze-Omni 的 GRPO 坍塌，多个模型的 GRPO 带副作用。具体到 Lychee-FD，整段 GRPO 让打断停止率下降，窗口似然升到 90% 以上且误停明显下降；MiniCPM-o 基座打断很低，整段 GRPO 拉高打断但误停到 30% 以上，窗口似然在保持打断的同时把误停压到很低。

BayLing 整段 GRPO 把打断打到个位数，窗口似然升到 90% 以上；Freeze-Omni 绝对值仍低，窗口似然有所提升而 GRPO 有效条目只剩数百。PersonaPlex 窗口似然以降停止率换误停减到三分之一，Moshika 有所提升。完整数字与有效条目数、置信区间与静音列见下表原表，比较问题是同窗口同读出下各配置的让路率误停率与综合 F1 高低。

| Model | Configuration | II (%) ↑ | nn | BB (%) ↓ | nn | F1 ↑ | 100-s silence: re-open / s |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Lychee-FD (zh) | Base | 85.3 ± 1.9 | 1369 | 50.5 ± 5.9 | 273 | 62.6 ± 4.8 | 2.5% / 0.4 s |
| Lychee-FD (zh) | GRPO G16 | 61.3 ± 2.3 | 1500 | 0.3 | 300 | 75.9 ± 1.8 | 100% / 45.8 s |
| Lychee-FD (zh) | GRPO speaking-only | 73.1 ± 2.1 | 1499 | 0.7 | 300 | 84.2 ± 1.4 | 0% / 0 s |
| Lychee-FD (zh) | WL (ours) | 95.9 ± 1.0 | 1475 | 12.8 ± 3.9 | 298 | 91.4 ± 2.1 | 0% / 0 s |
| MiniCPM-o 4.5 (zh) | Base | 16.5 ± 1.9 | 1447 | 10.0 ± 3.3 | 299 | 27.9 ± 2.7 | 0% / 0 s |
| MiniCPM-o 4.5 (zh) | GRPO G16 | 92.1 ± 1.4 | 1440 | 34.7 ± 5.4 | 297 | 76.4 ± 3.8 | 0% / 0 s |
| MiniCPM-o 4.5 (zh) | GRPO speaking-only | 80.1 ± 1.9 | 1452 | 11.9 ± 3.6 | 295 | 83.9 ± 2.0 | 0% / 0 s |
| MiniCPM-o 4.5 (zh) | WL (ours) | 81.3 ± 1.9 | 1450 | 0.3 | 296 | 89.6 ± 1.2 | 0% / 0 s |
| BayLing-Duplex (en) | Base | 76.0 ± 2.1 | 1483 | 79.5 ± 4.5 | 298 | 32.3 ± 5.6 | 100% / 69.0 s |
| BayLing-Duplex (en) | GRPO G16 | 4.9 ± 1.1 | 1495 | 4.7 ± 2.5 | 299 | 9.4 ± 2.0 | 100% / 67.9 s |
| BayLing-Duplex (en) | GRPO speaking-only | 77.7 ± 2.0 | 1489 | 79.3 ± 4.7 | 299 | 32.7 ± 5.8 | 100% / 66.6 s |
| BayLing-Duplex (en) | WL (ours) | 95.7 ± 1.0 | 1434 | 22.4 ± 4.8 | 294 | 85.7 ± 2.9 | 0% / 0 s‡ |
| Freeze-Omni (zh) | Base | 11.7 ± 1.5 | 1457 | 37.6 ± 5.4 | 298 | 19.7 ± 2.2 | 0% / 0 s |
| Freeze-Omni (zh) | GRPO G16 | 0.3 | 375 | 0.0 | 104 | 0.5 | 0% / 0 s |
| Freeze-Omni (zh) | GRPO speaking-only | 0.4 | 779 | 0.0 | 168 | 0.8 | 0% / 0 s |
| Freeze-Omni (zh) | WL (ours) | 26.0 ± 2.2 | 1448 | 9.1 ± 3.2 | 298 | 40.5 ± 2.7 | 0% / 0 s |
| PersonaPlex (en) | Base | 93.8 ± 1.2 | 1407 | 54.0 ± 5.8 | 274 | 61.7 ± 5.4 | 10% / 1.4 s |
| PersonaPlex (en) | Kyutai GRPO† | 96.0 ± 1.0 | 1411 | 63.9 ± 5.7 | 280 | 52.4 ± 6.0 | 100% / 40.9 s |
| PersonaPlex (en) | WL (ours) | 72.6 ± 2.2 | 1440 | 17.5 ± 4.4 | 286 | 77.2 ± 2.3 | 0% / 0 s |
| Moshika (en) | Base | 47.2 ± 2.7 | 1200 | 27.1 ± 5.9 | 221 | 57.3 ± 2.8 | 94.6% / 13.4 s |
| Moshika (en) | Kyutai GRPO† | 59.4 ± 3.0 | 1057 | 40.7 ± 6.5 | 214 | 59.4 ± 3.6 | 100% / 52.4 s |
| Moshika (en) | WL (ours) | 66.3 ± 2.6 | 1203 | 25.8 ± 5.8 | 217 | 70.0 ± 2.9 | 5.4% / 0.2 s |

该原表保留全部模型行与全部指标列，读表时注意有效数 n 随模型是否在注入时说话而变化，静音列按首答结束对话计算。限制是 Kyutai 检查点训练数据奖励不同，只能作参考对照；BayLing 窗口似然有部分首答未结束被排除；不同语言模型不可直接排名。

### 单条目时间线能看到什么行为差异

下图是 Lychee-FD 在 3 种情形下的单条目时间线，每种情形各一个测试条目，不作全体统计。横轴是相对插话起点或首答结束后的秒数，灰条是用户语音、彩条是模型语音、黑刻度是停止决策、阴影是计分的 2 秒窗口，读图时逐行对比基座与 3 种后训练在同一条目下的停不停与何时停。

> **看图路径：** 1. 对比同一打断条目下基座窗口似然与两种 GRPO 的停止刻度位置；2. 看附和条目下谁误停谁继续说，确认保持行为的差异；3. 看 100 秒静音段 GRPO 的多次重开与其他配置保持安静的对比

[![原论文 Figure 4：Lychee-FD on three test situations (one test item each; rows are the base model and three…](https://arxiv.org/html/2610.35581v1/fig_timeline.svg)](https://arxiv.org/html/2610.35581v1/fig_timeline.svg)

*论文图 4。原论文 Figure 4:：“Lychee-FD on three test situations (one test item each; rows are the base model and three post-trained variants).”。*

从像素可见，左侧打断下基座与窗口似然在阴影窗内有停止刻度，整段 GRPO 无停止，说话态消融停在边缘；中间附和条目下基座误停，其余继续；右侧 100 秒静音下整段 GRPO 出现多次重开，其余安静。这与主表总体趋势一致，但本图只是 3 个单条目例证，跷跷板与工作点左上最优等总体描述只归于主表指标，不当成本图特征。

### 分打断类别看难在哪里

按类别拆分要回答哪类语义最难、方法是否只在易类上赢。论文报告 wait 最难，deny 次之，Lychee-FD 与 BayLing 的窗口似然在每类都较高。MiniCPM-o 上窗口似然在每类都落后于 GRPO 配置，但误停远低于后者，这是用误停换来的。PersonaPlex 上窗口似然在部分类别下降，属于移动工作点而非提高区分度，线性探针结果也支持该解释。

下表是原始分列停止率的对照，比较问题是在相同类别下各配置的让路率高低。表前已说明 wait 与 deny 更难，读表时注意同行跨列比较类别难度，同列跨行比较方法。

| Configuration | ask | deny | repeat | shift | wait |
| --- | --- | --- | --- | --- | --- |
| GRPO G16 | 78.0 | 45.3 | 66.0 | 81.0 | 36.3 |
| WL | 100.0 | 89.1 | 99.0 | 99.7 | 91.9 |
| WL | 95.5 | 74.3 | 92.3 | 88.9 | 54.8 |
| WL | 98.9 | 99.0 | 96.1 | 99.3 | 84.6 |

表中 Lychee-FD 窗口似然在多数类别接近满分而整段 GRPO 在 wait 很低；BayLing 整段 GRPO 全类坍到个位数，说话态消融回到基座水平，窗口似然全类高。限制是该表只看打断停止率，不看附和误停，不能单独定优劣，必须与主结果同看。Freeze-Omni 与 Moshi 类的分列在原文附录，趋势相同但绝对值低或伴随工作点移动。

### 静音重开副作用的形态是什么

静音测试要回答时机奖励是否被用多说话来满足。协议用 40 个英文问题让 6 模型都答英文，首答能量法判结束，后 100 秒静音，报告重开比例与说话秒数，未答或长时间未结束不进入分母。结果是自家整段 GRPO 在 Lychee-FD 从很低到全部重开并填数十秒，BayLing 保持全部重开，Kyutai 两检查点在 PersonaPlex 与 Moshika 到全部重开。窗口似然多数模型为零，Moshika 有少数重开，含文本投影行控不住的非言语音频。

下图是每对话一行的语音条，理想面板为空，读图时按行密度判断填充程度。

> **看图路径：** 1. 按行对比基座 GRPO 与窗口似然在同一模型下的填充密度；2. 注意 Lychee 与 PersonaPlex 从稀疏到填满的变化以及窗口似然恢复为空；3. 确认 Freeze-Omni 与 MiniCPM-o 被省略的原因与正文说明一致

[![原论文 Figure 6：The 100-s silence test, one row per dialogue that entered the test, speech drawn as filled bars;…](https://arxiv.org/html/2610.35581v1/fig_silence_raster.svg)](https://arxiv.org/html/2610.35581v1/fig_silence_raster.svg)

*论文图 6。原论文 Figure 6:：“The 100-s silence test, one row per dialogue that entered the test, speech drawn as filled bars; an ideal panel is empty.”。*

从像素可见基座行 Lychee-FD 近空、BayLing 填满、PersonaPlex 稀疏、Moshika 较密；GRPO 行多块全密；窗口似然行近空，仅 Moshika 尾部有短条。这确认副作用跟随整段信用而非偶发，也确认窗口似然事件项不碰听态决策。限制是 BayLing 窗口似然部分首答未结束被排除，若计入则零是有条件的；Freeze-Omni 因语音活动检测门无触发而天然不能重开，MiniCPM-o 无配置重开，这两组不证明方法差异。

### 零梯度陷阱与信用泄漏如何被测到

零梯度陷阱的测量是统计 16 条全同的窗口占比：Lychee-FD 较高，MiniCPM-o 较低，BayLing 居中，Freeze-Omni 很高。难在个体窗口而非平均停止率，Lychee-FD 训练窗平均停止概率较高，但多数窗处在两端。落在错误极端且 16 条全错的窗占 Lychee-FD 约 20%、BayLing 约 30%、Freeze-Omni 约 30%，采样组在这些窗上给不出任何东西，而窗口似然梯度在这些窗最大。论文强调 GRPO 期望梯度非零，但经由罕见有效组以高方差到达，窗口似然每步给量级稳定的梯度且无分数方差。

下图把学习信号画成停止概率的函数，读图前先明确横轴是当前策略下窗口停止概率，纵轴上下两部分量纲不同，只能比各自在哪里归零。

> **看图路径：** 1. 看横轴窗口停止概率从 0 到 1 时顶部 GRPO 有效组概率在两端归零；2. 看中部两条窗口似然梯度曲线只在已解端衰减在难端保持量级；3. 看底部基座策略分布大量堆在两端，确认难窗确实存在

[![原论文 Figure 2：Learning signal on one window against its stop probability S under the current policy.](https://arxiv.org/html/2610.35581v1/fig_signal.svg)](https://arxiv.org/html/2610.35581v1/fig_signal.svg)

*论文图 2。原论文 Figure 2:：“Learning signal on one window against its stop probability S under the current policy.”。*

从像素可见顶部不同组大小曲线在两端归零，中部窗口似然打断项在趋零时保持，附和项在趋一时大，底部基座分布在两端堆高。这支持难窗确实大量存在且 GRPO 在两端失效、窗口似然只在已解端衰减的判断。

信用泄漏的测量是看优势落在何处：事件窗内仅占 Lychee-FD 约一半、MiniCPM-o 与 Freeze-Omni 约 1/4、BayLing 更低，Freeze-Omni 多数落在首问仍在问时的听态决策，直接对应不回答首问，BayLing 半数在问题、部分在事件前回答。因果消融是只把优势加在说话态：Lychee-FD 静音重开从全部到零，MiniCPM-o 误停明显下降，BayLing 坍塌消失但 F1 未超基座，Freeze-Omni 不回答率下降但仍坍塌，且 4 模型仍低于窗口似然。论文明确剩余差距不能单归因于零梯度陷阱，因为窗口似然还有辅助项与每步更多不同窗口。

### 门控消融如何证明副作用跟随门而非目标

Moshi 类消融只改变两学习行在哪里生效，目标不变，比较问题是重开是否由门的位置决定。开发子集用部分打断加全部附和，排序与全集一致。结果是不加门时重开接近全部，能量门漂向多说话、部分首答永不结束，事件门回到基座水平，加回答后行后清零而打断附和不变。

下表是 PersonaPlex 门控消融的原始数字，表前已说明只变门位置，读表时注意 F1 与静音列要同看，F1 升但静音差仍是失败。

| PersonaPlex variant | II | BB | F1 | silence |
| --- | --- | --- | --- | --- |
| Base | 95.7 | 54.0 | 62.1 | 10% / 1.4 s |
| Kyutai GRPO (released) | 98.4 | 63.9 | 52.8 | 100% / 40.9 s |
| WL, event-gated | 80.2 | 17.5 | 81.3 | 10% / 1.4 s |
| WL, event-gated + post-turn | 80.2 | 17.5 | 81.3 | 0% / 0 s |

表中未加门 F1 不高且静音接近全部，能量门 F1 较高但仍有重开，事件门 F1 略降且静音同基座，加回答后行 F1 不变而静音清零。这支持副作用跟随门而非目标的结论，也说明只训两行还需门才能实现内容与控制分离。限制是该表为开发子集，全集最后一行略低，另在整投影上加 LoRA 同目标很快坍成不停输出，说明参数范围选错会让多说话成为平凡解。

### 哪些模型与范围仍未解决

Freeze-Omni 绝对值仍低，窗口似然 F1 仅 40% 左右。原因是语音活动检测门控的线性状态头分不开用户仍在问与刚问完，窗口数据不含该区分信息，方法只能在现有接口内优化。BayLing 共享控制词，同时表示让路与回答结束，在附和上压住它会泄漏到回答结尾，部分首答长时间内不结束，这是接口复用带来的代价。

Moshi 类 PersonaPlex 是移动工作点而非提高区分，Moshika 仍有少数重开且为非言语音频，文本投影行控不住。范围上数字与官方 HumDial 榜单不可比，因官方用转录判分而本文读自有停止决策；研究只用一个基准、每配置单一种子，自助区间只覆盖测试条目抽样，不覆盖训练随机性。这些限制决定了结论成立条件：同协议、同窗口、同读出下最优，换榜单或换接口需重测。

### 复现第一步做什么与需要什么条件

复现先按接口确定停止决策的读出与训练部位：有控制分支或状态头只训该头，有文本控制词训注意力 LoRA，无控制词只训 PAD 两行并实现事件门。训练数据只用 HumDial 第二轨打断与附和片段，按模型测试语言选取，中英分开，训练测试说话人与对话不重叠。延续按测试时方式生成，即等模型起答后注入插话，再教师强制前向取窗口内说话态停止概率，内容固定、梯度不过采样。

关键超参数按原文保留：总损失中事件前权重 0.5，KL 权重 0.05、Moshi 类 0.1，Lychee-FD 每步多窗多延续加轮次窗，其余每步多窗，Moshi 事件阶段每步打断附和各半。评测必须用闭环注入，延迟轮换，无效条目丢弃并报告数，停止判 2 秒窗，Moshi 用能量间隙，另可用更大间隙做稳健性检查。静音多问、100 秒、能量判结束必须同做，否则看不到泄漏。

来源方面，本次未发现完成验证的绑定资源，不得声称代码模型数据已公开或当前可用。论文提到的 Kyutai 检查点是第三方提及，其数据奖励不同，只能作参考对照，不能当同条件基线。

### 何时值得尝试与还需补什么验证

当可验证奖励是少数策略概率的已知函数时值得尝试本文配方：点名决策、至少 1 次写噪声或、永不写生存连乘、一条延续教师强制加对数似然。它可作窗口化强化学习内的时机项，训练只动停止头或注意力 LoRA 或两投影行，代价是需实现按状态取梯度与门控，前 4 个模型还需事件前与轮次辅助项才能同时保住起答与保持说话。

还需补的验证是多基准、多种子与真实人机交互，现有单基准单种子不能推广；需测延迟与算力，论文未报告训练资源与推理开销，不能承诺更快更省；需在共享控制词与语音活动检测门模型上补接口解耦，否则 BayLing 式回答不结束与 Freeze-Omni 式低绝对值仍在。容易误解的是把相对提升当百分点、把不同窗口或转录判分下的数字直接排名，以及把论文提到检查点的差距全归因于方法，原文已明确数据奖励不同与混杂项，复述时应保留这些条件。

<details>
<summary>📎 论文与评分元数据</summary>

排名：前50% | 文档类型：方法研究 | [arXiv 原文](https://arxiv.org/abs/2610.35581v1)

</details>

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。

- 评分规则：type-aware-v1

- 评分模型：muse-spark-1.3-contributor

- 评分请求协议：openai_responses

---

[← 返回 2026-10-27 语音/音乐/音频论文速递](/audio-paper-digest-blog/posts/2026-10-27/)
