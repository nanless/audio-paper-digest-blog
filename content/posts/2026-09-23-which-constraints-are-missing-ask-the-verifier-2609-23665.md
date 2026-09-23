---
title: "Which Constraints Are Missing? Ask the Verifier: Graded Rewards for Constraint-Following Music Generation"
date: 2026-09-23
draft: false
tags: [符号音乐生成, 强化学习, 基准测试, 音乐]
categories: [论文速递]
description: "针对多约束联合满足急剧下降的问题，论文用八族程序化验证器构造基准并以硬门加分级奖励做 GRPO，把 Qwen3-4B 在 Mixed 上的全满足率从 0.160 提升到 0.807，代价是奖励与评测共用同一套验证器且只度量合规不度量听感。"
hiddenInHomeList: true
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_arxiv_id: "2609.23665"
paper_digest_workbench_contract: "researcher-workbench-v1"
paper_digest_reader_title: "缺哪条补哪条：用验证器把乐谱约束变成可分级的训练信号"
paper_digest_original_title: "Which Constraints Are Missing? Ask the Verifier: Graded Rewards for Constraint-Following Music Generation"
paper_digest_arxiv_version: null
paper_digest_arxiv_versioned_id: null
paper_digest_arxiv_abs_url: "https://arxiv.org/abs/2609.23665"
paper_digest_arxiv_pdf_url: "https://arxiv.org/pdf/2609.23665.pdf"
paper_digest_primary_task: "符号音乐生成"
paper_digest_taxonomy_contract: "paper-taxonomy-flat-tags-compat-v1"
paper_digest_taxonomy_selection_contract: "paper-taxonomy-selection-v1"
paper_digest_taxonomy_registry_version: "paper-taxonomy-v1"
paper_digest_taxonomy_registry_sha256: "15c82a567ce5a55dc1175684ed08b64c158558639d9c8fb822c9587ec32a8778"
paper_digest_taxonomy_concepts: [{"facet":"task","id":"task.symbolic-music","label":"符号音乐生成"},{"facet":"method","id":"method.reinforcement","label":"强化学习"},{"facet":"artifact","id":"artifact.benchmark","label":"基准测试"},{"facet":"signal","id":"signal.music","label":"音乐"}]
paper_digest_primary_method: "强化学习"
paper_digest_score: 7.3
paper_digest_rank_bucket: "前50%"
paper_digest_document_type: "方法研究"
paper_digest_one_sentence: "针对多约束联合满足急剧下降的问题，论文用八族程序化验证器构造基准并以硬门加分级奖励做 GRPO，把 Qwen3-4B 在 Mixed 上的全满足率从 0.160 提升到 0.807，代价是奖励与评测共用同一套验证器且只度量合规不度量听感。"
paper_digest_authors: [{"affiliations":["School of Science and Engineering, The Chinese University of Hong Kong, Shenzhen 518172, China","Shenzhen Future Network of Intelligence Institute (FNii-Shenzhen)"],"name":"Haoyue Liu"},{"affiliations":["XJTU-POLIMI Joint School, Xi’an Jiaotong University, Xi’an 710049, China"],"name":"Ye Chen"},{"affiliations":["School of Science and Engineering, The Chinese University of Hong Kong, Shenzhen 518172, China"],"name":"Zhichao Wang"},{"affiliations":["School of Science and Engineering, The Chinese University of Hong Kong, Shenzhen 518172, China"],"name":"Xiaoyu Ma"},{"affiliations":["School of Science and Engineering, The Chinese University of Hong Kong, Shenzhen 518172, China"],"name":"Haoran Shou"},{"affiliations":["School of Science and Engineering, The Chinese University of Hong Kong, Shenzhen 518172, China","Shenzhen Future Network of Intelligence Institute (FNii-Shenzhen)"],"name":"Xiaoying Tang"}]
paper_digest_abstract_sha256: "9f65405f9014abe07cdd22804d1f40f4f2b91b0a2ddd31867c68cc03c9c8977d"
paper_digest_sidecars: {"citation.bib":{"sha256":"04049d894a9262d8a2b78f4a4582037ccda1833593f9ed6306a7b1376b08155e","url":"/audio-paper-digest-blog/data/papers/2026-09-23/2609-23665/citation.bib"},"citation.json":{"sha256":"ab6ebc7fbb5796f7a5ee373624e0235188c0294979f479c769a9d7c9fcae36ef","url":"/audio-paper-digest-blog/data/papers/2026-09-23/2609-23665/citation.json"},"citation.ris":{"sha256":"cec6a8b74e56fc69f37d0230b6c9cfacf13374cec9c09bd3655ee5538216ab11","url":"/audio-paper-digest-blog/data/papers/2026-09-23/2609-23665/citation.ris"},"rethink-context.json":{"sha256":"4aec5035e8c648a979c250b78dc5014d6ab774167b2da614a9818aaedc1ba884","url":"/audio-paper-digest-blog/data/papers/2026-09-23/2609-23665/rethink-context.json"}}
paper_digest_api_reader_contract: "beginner-researcher-v3"
paper_digest_api_reader_article_sha256: "162eb078f86a03b214cf3cd2e68025cb4a84e111add37b463658ce6fa20b8f20"
paper_digest_api_reader_plan_sha256: "4b7d5cfca7085203902d2ef872360316bbdd5efc9827bb9f515fa4831138f52c"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings-v4"
paper_digest_api_reader_source_bindings_sha256: "f19a4769eac665a2da4569d85f068095d9e7e4dffe3e174b85613f9b396b480a"
paper_digest_api_reader_source_table_count: 5
paper_digest_api_reader_source_formula_count: 3
paper_digest_api_reader_structured_artifacts_sha256: "490ecda0746288cf6447c4c0989f7fac108f3c593af31e37878e8a382a84c50f"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity-v1"
paper_digest_api_reader_author_identity_sha256: "ac137bbad9c919759854cd44e41a7c152bba616c9a9e594d44fa0a783b92d337"
paper_digest_api_reader_author_count: 6
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity-v1"
paper_digest_api_reader_resource_identity_sha256: "e24979948ec6751704a3f7602f691b6847f8b63968343978821f46ba2ceea23c"
paper_digest_api_reader_resource_count: 0
paper_digest_api_reader_figure_persistence: "ephemeral-no-persisted-figure-assets-v1"
paper_digest_api_reader_decision_projection: "api-reader-decision-projection-v2"
---

# 📄 缺哪条补哪条：用验证器把乐谱约束变成可分级的训练信号

> 英文题目：*[Which Constraints Are Missing? Ask the Verifier: Graded Rewards for Constraint-Following Music Generation](https://arxiv.org/abs/2609.23665)*

> 标签：#符号音乐生成 | #强化学习 | #基准测试 | #音乐
>
> 评分：**7.3/10** | 创新 1.5/2 | 技术严谨 1.2/1.5 | 实验充分 1.3/1.5 | 清晰度 0.8/1 | 影响力 1/1.5 | 开源 0/1.5 | 可复现 0.5/0.5 | 工程/实践 1/1.5


## 👥 作者与机构

- Haoyue Liu：School of Science and Engineering, The Chinese University of Hong Kong, Shenzhen 518172, China；Shenzhen Future Network of Intelligence Institute (FNii-Shenzhen)
- Ye Chen：XJTU-POLIMI Joint School, Xi’an Jiaotong University, Xi’an 710049, China
- Zhichao Wang：School of Science and Engineering, The Chinese University of Hong Kong, Shenzhen 518172, China
- Xiaoyu Ma：School of Science and Engineering, The Chinese University of Hong Kong, Shenzhen 518172, China
- Haoran Shou：School of Science and Engineering, The Chinese University of Hong Kong, Shenzhen 518172, China
- Xiaoying Tang：School of Science and Engineering, The Chinese University of Hong Kong, Shenzhen 518172, China；Shenzhen Future Network of Intelligence Institute (FNii-Shenzhen)

## 📌 核心摘要

约束跟随音乐生成要求根据自然语言规格一次性输出满足调性、节拍、长度、音域、终止音、节奏词汇、跳进与曲式的单声部ABC乐谱，多约束合取导致任一失败即整体失败，约束增多时联合满足急剧下降。所提MusicRLVR先用硬验证门拦截不可解析或畸形输出，再对过门样本按请求约束族计算分级信用并附加全满足奖励，最后以组相对优势做GRPO更新。与二值全满足奖励相比，该机制保留了部分合规排序并恢复了零方差组的梯度信号。配套MusicConstraintBench覆盖8个约束族与混合、单约束、已见组合、未见组合、高约束数、曲式、密度与参数外推测试，共2180项加400项改写。在Mixed混合约束基准下，直接训练的MusicRLVR的联合满足率指标为0.807，高于Qwen3-4B基线的联合满足率指标0.160。结论限于短单声部民谣风格与程序化可验属性，不保证感知质量与长结构音乐性。原文未披露训练、推理或部署成本。

## 🔗 开源与复现资源

本次未形成可展示的已核验资源记录，开放状态尚未核实。

可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 输入是什么，输出是什么，什么信息必须保留？

这篇论文研究的不是给一段文字描述就自由生成一段好听音乐，而是给定一份乐谱规格说明书，要求模型 1 次写出一首同时满足所有条目的单声部曲子。输入是自然语言提示，模板固定为写单声部 ABC 记谱、显式写出每一小节、只输出 ABC 文本，然后逐条列出约束，例如调性为 D 小调、拍号为 6/8、长度为 16 小节、结尾音为主音、旋律跳进受限、曲式为 AABA。输出是 ABC 文本，包含 X、T、M、L、K 表头和乐谱主体。

必须保留的信息是每个约束族及其参数，因为评测不是打分听感，而是用确定性程序检查解析后的乐谱是否逐条成立。初学者容易把解析通过当成任务完成，论文强调解析只是门槛，联合满足才是目标。Llama-3.1-70B 在 Mixed 上有 0.970 的解析通过率但全满足率只有 0.380，这个差距就是本任务的起点。资源状态方面，本次未发现来源绑定且完成验证的资源，因此不声称代码、模型或数据已公开，只能按论文文字复述方法与数字。

### 这条路线与听感优化和解码时加规则有何不同？

相关工作分为两条线。第一条是符号音乐语言模型，从 ABC 上的循环网络、Music Transformer 到 ABC 原生大模型，以及描述条件控制和音频模型，训练多用似然或音乐文本编码器，硬规则即使出现也多在解码时加入。第二条是强化学习，一类优化人类或学到的质量信号，另一类把乐理启发式当作风格先验奖励。这些方法都不能报告本次提示请求的属性是否成立。

论文的选择是把随题目变化的确定性检查器当作奖励，族和参数因题而异，并刻意留出训练时从未共同出现的组合来考组合泛化。与之最接近的同期工作是合成可验证的乐谱推理题并看迁移到续写，而本文要求在没有目标曲子的开放生成中同时满足多个音乐属性，奖励由生成提示请求的属性计算，评测看未见组合与参数外推，而非推理题准确率。

教学上可以这样记：听感路线回答像不像好音乐，解码约束回答能不能在生成时卡住一条规则，本文路线回答 1 次生成是否同时满足用户点名的多条可验证属性。

### 为什么约束一多，联合满足就急剧下降？

论文把约束跟随定义为属性可验证生成问题。设约束族集合包含调性、拍号、长度、音域、结尾音、节奏词汇、跳进和曲式八族，每个约束是族加参数，验证器对可解析乐谱返回 0 或 1。一道题是多个不同族的集合，策略输出 ABC 字符串，先过验证门得到解析乐谱或被拒。全满足要求门通过且每个请求的族检查都通过，评测的全满足率就是测试题上该指示的均值。难点在于合取关系：错一条即整体不合规。

随着同时约束数增加，单条都对但组合错的概率累积，单约束表现好不能推出多约束表现好。论文在 Mixed 上按约束数切片，Llama-3.1-70B 从单约束的 0.720 掉到四约束的 0.050，下降约 14.4 倍，而直接 MusicRLVR 只下降约 2.0 倍。这个例子说明规格说明书所在的恰恰是多约束区，单指令能力不能替代联合能力。

### MusicRLVR 的全景：采样、过门、按条给分再做组内比较

MusicRLVR 的训练循环可以沿一个样本走完。输入是包含若干条约束的提示，策略对其采样一组 ABC 输出。每个输出先过硬验证门：提取 ABC 块失败、含反复记号、解析超时或失败、音符过少、小节过少或含和弦对象都会被拒，被拒奖励为 0。过门输出再用确定性属性验证器逐条检查本次请求的子集，非曲式族给二值分，曲式族给分级分，最后把各族平均分与全满足指示加权相加作为奖励。

同一提示的组内奖励再做中心化和归一化得到优势，同一输出的所有词共享该优势，用带参考模型惩罚的截断替代目标更新策略。整个过程不需要人工标注、不需要学到的奖励模型，也不需要音乐领域有监督微调，验证器是回路中唯一的任务监督来源。
导读：下图左侧解释二值奖励为何稀疏，右侧给出采样到过门再到分级奖励与组内更新的主路径，适合先看整体再细看公式。

> **看图路径：** 1. 先沿左侧多约束示例看到八个约束族如何同时激活；2. 再看左侧二值奖励下三个部分正确的样本为何都得 0 分；3. 然后沿右侧采样 G 个 ABC 输出到解析门再到 music21 验证器的箭头走一遍；4. 最后看右下奖励公式中部分分与全满足项如何合成组内优势

[![原论文 Figure 2：Overview of MusicRLVR. Left: Multi-constraint prompts make binary all-satisfied rewards sparse,…](https://arxiv.org/html/2609.23665v1/overview0919.png)](https://arxiv.org/html/2609.23665v1/overview0919.png)

*论文图 2。原论文 Figure 2:：“Overview of MusicRLVR. Left: Multi-constraint prompts make binary all-satisfied rewards sparse, leaving partially correct rollouts indistinguishable.”。*

解释：左侧用一个同时请求 G 大调、6/8、16 小节、音域、曲式等多条属性的示例说明，一题激活自己的子集验证器；3 个部分正确的样本在二值下都得 0 分，组内无排序从而优势接近 0。右侧主路径是约束提示进入语言模型策略，生成 G 个 ABC 候选，经过 ABC 解析与格式门，通过后才进入 music21 验证器逐条打勾，示例中节奏一项打叉其余通过。右下把奖励写成部分分与全满足项的加权，非曲式族二值、曲式族对重复部分给连续分，再用组均值和组标准差算优势回传更新策略。看图时不要把通过门与属性分混为一件事，门管成曲，分管每条。

### 门、逐族分与曲式内部分：三个计算各管什么？

先把符号讲清。y 是补全字符串，C 是该题约束集合，k 是约束条数，rho 是提取 ABC 并做验证门的函数，解析失败记为拒绝，S 是可解析乐谱集合，vf 是第 f 族的二值验证器，A 是全满足指示，sf 是第 f 族的训练用分，lambda 是部分分与全满足项的权重，G 是每提示采样数，mu 与 sigma 是组均值与组标准差。计算目标是给每个输出一个能区分部分正确的奖励，同时保证不成曲的碎片拿不到分。

**硬验证门 × 分级奖励：** 硬验证门负责先判断输出是否为可解析的单声部乐谱，不通过则奖励为 0，不再给任何属性分；分级奖励只对过门输出按其请求的每个约束族给 0 到 1 的分并加上全满足 bonus。两者搭配的原因是只给部分分会奖励碎片，只给通过/失败又无法区分部分正确，门保证先成曲、分级保证每条约束都有梯度。

全满足指示的定义是过门输出下各请求族验证器的连乘，不过门则为 0：

\[A(y,C)\;=\;\prod_{(f,\theta)\in C}v_{f}\!\left(\rho(y),\theta\right)\;\in\;\{0,1\}\quad\text{if }\rho(y)\neq\bot,\qquad A(y,C)=0\quad\text{if }\rho(y)=\bot,\]

训练奖励的定义是不过门得 0，过门则为 lambda 乘以各族平均分加上剩余权重乘以全满足指示，默认 lambda 为 0.7：

\[R(y,C)\;=\;\begin{cases}0,&\rho(y)=\bot,\\[4.0pt] \lambda\cdot\dfrac{1}{k}\displaystyle\sum_{(f,\theta)\in C}s_{f}(\rho(y),\theta)\;+\;(1-\lambda)\,A(y,C),&\text{otherwise},\end{cases}\]

其中 7 个非曲式族的 sf 等于 vf，曲式族的 sf 为 0.7 乘以重复比例加上 0.3 乘以对比二值。重复比例按要求相同的单元对逐小节统计匹配位置，对比仍要求异字母单元至少一处不同。组内优势的定义是对同一提示的 G 个奖励减组均值除以组标准差加小常数：

\[\hat{A}_{i}\;=\;\frac{R(y_{i},C)-\mu_{C}}{\sigma_{C}+\epsilon},\quad\mu_{C}=\frac{1}{G}\sum_{j=1}^{G}R(y_{j},C),\quad\sigma_{C}^{2}=\frac{1}{G-1}\sum_{j=1}^{G}\bigl(R(y_{j},C)-\mu_{C}\bigr)^{2},\]

原文明确指出，只有组内奖励不同才有奖励驱动的更新，水平高低不进入更新；组内全同则该组只剩散度项。分级的作用分两层：跨族拉开满足条数不同的输出，族内对曲式拉开重复位置匹配比例不同的输出。

**组内归一化优势 × 零方差组：** 组内归一化优势指同一提示采样 G 个输出，用组均值和组标准差把奖励中心化后作为每个输出的优势；零方差组指组内奖励全相同、标准差为 0 从而优势为 0 的组。搭配意义在于 GRPO 没有价值网络，学习信号完全来自组内排序，二值奖励下大量组变为零方差组，分级奖励通过拉开部分正确的差距让更多组恢复梯度。

**曲式约束 × 重复与对比：** 曲式约束要求 16 小节按四小节单元构成 AABA、AABB 或 ABAB，同字母单元音符完全相同、异字母单元至少一处不同；重复指同字母单元之间的小节匹配比例，对比指异字母单元之间是否相异。训练对重复给连续的部分分而对比保持二值，因为小节匹配比例容易度量，而差异小节数不一定对应听感上有意义的对比。

调性验证器是唯一的混合设计，因为只看 K 表头可被糊弄，只做内容分析又与曲库标注只有 0.750 的一致率，论文采用表头匹配且内容分析为请求调或其关系大小调才算通过，在 400 首校准集上与标注一致率为 0.890。拍号要求表头一致且每小节时值恰好填满，长度要求非空小节数一致且首尾不允许不完全小节来容忍弱起，音域逐音检查，结尾音只看最后一个发音音高类，节奏要求每个音时值属于允许集合且不允许休止符，跳进检查相邻音程是否超限，曲式先要求恰好 16 个非空小节再按四小节单元比较小节签名。

### 训练与数据构造：直接 GRPO 和验证器自标注 SFT 各做了什么？

论文比较两种起点。直接路线从 Qwen3-4B-Instruct 出发做 GRPO，有监督暖启动路线先做音乐领域 SFT 再做同样的 GRPO。GRPO 设置是每提示采样 8 个输出，散度系数 0.04，学习率 1 乘 10 的负 6 次方，共 300 个优化步，强化提示池 6000 条，约束数 1 到 3，曲式占比上采样到约 33%。初始策略同时作为散度参考模型，因此路线比较同时改变了初始化与参考策略。有监督数据来自 IrishMAN 曲库约 45000 首爱尔兰传统曲调，经过滤波解析、属性抽取、随机选 1 到 3 族渲染成指令、再用评测验证器重验，不通过则丢弃，共 12890 对，另留 125 对做验证。

曲式样本单独构造，取至少 8 小节且前两个四小节单元不同者，按概率拼成 AABA、AABB 或 ABAB 形状并重验。两个训练池都排除 4 个留出组合，SFT 训练 2 轮，验证损失降到 0.913，验证下一词准确率停在 0.748。

**直接强化学习 × 验证器标注的有监督暖启动：** 直接强化学习指从 Qwen3-4B-Instruct 出发直接用验证器奖励做 GRPO；验证器标注的有监督暖启动指先从 IrishMAN 曲库读出每首曲子的真实属性、组成指令再用验证器过滤后做 SFT。两者分工是比较初始化是否必要，结果显示直接路线在 Mixed 上更高，说明音乐领域 SFT 不是获得约束跟随能力的必要前提。

需要如实说明的缺项是，论文未测试更长的有监督训练是否会改变下游合规，截断上限 768 词在默认诊断运行中未被触及，截断计数为 0。匹配研究固定种子 43、300 步、每更新 48 个补全，其余 GRPO 设置与诊断表一致，直接两臂仅奖励混合权重不同。

### 用什么题目、什么指标、什么条件下比较？

MusicConstraintBench 共 2180 题，含 400 条改写。按约束密度有 Single200 题全为单约束，Mixed300 题按 1 到 4 约束为 100、100、60、40，High-kk160 题全为 4 约束；按组合泛化有 Seen200 题用训练中共同出现过的族组合，Unseen200 题每题要求 4 个留出对之一，留出对为调性与节奏、拍号与跳进、结尾音与曲式、长度与音域，构成八族的完美匹配；Structure120 题必含跨段曲式；Dense500 题与 Edge500 题后加，前者也是 4 约束但族混合与留出对不同，后者把拍号、长度、跳进、节奏、音域移到训练值域之外。

6 个原始划分在奖励设计时已被使用，Dense 与 Edge 是之后加入的。评测用贪心解码保存输出，以全满足率为主要比较口径，部分分永不计入成功。基线包含 Qwen3 的 4B、8B、32B、Llama-3.1-70B、MiniMax-M3 和 ChatMusician-7B，同一用户提示各用自家对话模板，无推理要求。3 个匹配运行共享种子与预算，最终检查点每套件评 1 次，另有 McNemar 配对检验。解码本身有不确定性，同一检查点 2 次贪心评测在 Mixed 上差 0.040、在 Structure 上差 0.050，因此 0.010 量级的差距在重评波动之内。

**全满足率 × 逐族满足率：** 全满足率要求 1 次生成同时通过解析门和该题请求的全部约束族，是主指标；逐族满足率只看请求了该族的题目子集上该验证器通过的比例，用于定位短板。两者搭配是因为全满足为 0 时看不出缺哪条，逐族分可以指出是调性、长度还是曲式拖了后腿，但不能把逐族平均当成联合能力。

下表先看题目构成，k 分布与族覆盖决定了跨套件比较不能只看题数。

| Split | nn | kk distribution | Families (count) |
| --- | --- | --- | --- |
| Mixed | 300 | 1:100, 2:100, 3:60, 4:40 | All eight |
| Single | 200 | 1:200 | All eight (16–29 each) |
| Seen comb. | 200 | 2:116, 3:84 | All eight (51–72 each) |
| Unseen comb. | 200 | 2:88, 3:112 | All eight (54–70 each) |
| High-kk | 160 | 4:160 | All eight (56–104 each) |
| Structure | 120 | 1:54, 2:66 | structure: 120; 5 others |

该表说明 Mixed 覆盖全部八族且 k 从 1 到 4，Single 每族 16 到 29 题，Seen 与 Unseen 各覆盖全部八族但组合是否在训练中出现过不同，High-kk 全为 4 约束，Structure 必含曲式。重提数字时要记住每个 k 切片有自己的族混合，固定 k 不等于固定族构成。

### 主结果：多约束下谁掉得最厉害，谁真正可用？

先看问题：现有模型能否 1 次满足多条音乐指令，比较是否同提示同贪心同全满足口径，指标越大越好。导读：下图按约束数 k 展开 Mixed，纵轴为全满足率，适合看联合满足随 k 的衰减。

> **看图路径：** 1. 先确认横轴是约束个数 k、纵轴是全满足率；2. 比较 k=1 到 k=4 各条曲线的下降斜率；3. 看 k=4 处直接 MusicRLVR 标记与其他基线的垂直差距

[![原论文 Figure 1：All-satisfied rate against k on Mixed, for the matched runs and the baselines of Table 2; each…](https://arxiv.org/html/2609.23665v1/fig_degrade_s43.svg)](https://arxiv.org/html/2609.23665v1/fig_degrade_s43.svg)

*论文图 1。原论文 Figure 1:：“All-satisfied rate against k on Mixed, for the matched runs and the baselines of Table 2; each slice has its own family mixture.”。*

解释：像素显示横轴为约束数 1 到 4，纵轴为全满足率，多条曲线都随 k 下降，但斜率不同。基线在 k=1 时尚可，Llama-3.1-70B 单约束达 0.720，与有监督检查点持平，到 k=4 只剩 0.050。直接 MusicRLVR 在 k=4 处标记为 0.500，显著高于基线，且整体下降约 2.0 倍而非 14.4 倍。不能把曲线向下直接读成全程性能变差的证明，因为每个 k 切片是不同的题目与族混合，但端点比足以说明单指令强不代表多指令强。

下表把关键数字放在同一口径下比较，表前问题是直接强化学习是否超过最强零样本与有监督基线，公平条件是同题、同解析门、同全满足定义。

| 条件 | 指标 | 基线 | 本方法 | 比较对象 |
| --- | --- | --- | --- | --- |
| Mixed 全满足率 | 全满足率 | 0.160 | 0.807 | Qwen3-4B 直接提升 |
| High-kk 四约束 | 全满足率 | 0.100 | 0.575 | 最强零样本对直接法 |
| Single 与 Structure | 全满足率 | - | 0.985，0.967 | 直接法分布内表现 |
| Mixed 最强零样本 | 全满足率 | 0.380，0.363，0.367 | - | Llama-70B，Qwen3-32B，MiniMax-M3 |

表后解释：直接 MusicRLVR 把 Mixed 从 0.160 提高到 0.807，在 8 个套件上都超过所有零样本对照，在 Single 达 0.985、在 Structure 达 0.967、在 High-kk 达 0.575 而最强零样本仅 0.100，且 6 个原始套件全部通过解析门。

未胜出项也要说明：Qwen3-8B 在 Mixed 仅 0.123，反而低于更小的 Qwen3-4B 的 0.160，说明容量不排序；ChatMusician-7B 在 Mixed 仅 0.160 且在共享提示下曲式解析通过率低，但其训练目标本是风格生成而非按规格生成，不能据此否定音乐预训练本身。SFT 基线在 Mixed 为 0.477，仍明显低于直接强化学习。

### 泛化到未见组合、参数外推与改写是否成立？

组合泛化看 Unseen 与 Dense。Unseen 每题含一个训练中从未共同出现的族对，直接法达 0.595 而 Seen 为 0.815，最强零样本在两者上为 0.195 与 0.315；High-kk 为 0.575，同样要求留出对且族混合不同的 Dense 为 0.362，说明四约束下仍保持，但 Dense 与 High-kk 族构成不同，不能只比题数。参数外推看 Edge，它把拍号换成 5/4、2/2、9/8、12/8，长度换成 4、24、32 小节并收紧跳进与音域，直接法为 0.310，最强零样本 0.160，有监督检查点仅 0.076。语言稳健性看 400 条改写，诊断研究中 MusicRLVR 从 0.735 到 0.688，有监督从 0.580 到 0.535，各掉 19 与 18 题，差距完整保留。限制是 Edge 内部可再分是否含留出对，诊断显示无留出对子集上领先暖启动，有留出对子集上顺序反转，因此外推收益不是在所有子集上均匀成立。

### 奖励为何有效：零方差组、曲式占比与混合权重的对照

先看机制问题：二值奖励是否让很多组失去梯度，分级是否在相同起点与预算下改善迁移而非训练拟合。匹配运行固定提示混合，只改奖励权重，前 50 步二值组有 0.550 无奖励梯度，分级组为 0.307；训练末两臂 rollout 合规接近 0.890 与 0.884，说明分级改善的是基准迁移。导读：下图是匹配运行的训练动态，重点看零方差组、曲式两半与长度。

> **看图路径：** 1. 先看子图 b 零方差组比例随训练步的变化；2. 再看子图 e 曲式重复与对比两半的通过情况；3. 最后对照子图 f 平均补全长度是否同步缩短

[![原论文 Figure 4：Matched runs in Table 2.](https://arxiv.org/html/2609.23665v1/fig_matched.svg)](https://arxiv.org/html/2609.23665v1/fig_matched.svg)

*论文图 4。原论文 Figure 4:：“Matched runs in Table 2. “Binary” and “graded” are the two Direct arms, differing only in the reward weight \lambda; “SFT init.” uses the graded reward from the music-domain SFT…”。*

解释：子图 b 显示分级臂早期零方差组更少，后期两臂都因大多数组直接成功而上升到 0.823 附近；子图 e 把曲式拆成重复与对比，分级臂对比通过更高且全同输出更少；子图 c 与 f 显示初始化同时固定散度参考，直接臂与有监督暖启动臂的散度与长度轨迹不同。不能把零方差比例跨路线直接比较，有监督初始化臂全程更低但基准更差，因此只在共享初始化的两臂之间读该比例。
下表先看诊断与匹配中的题目重叠与解析情况，公平条件是同检查点同历史门，指标方向是重叠越少越能说明泛化。

| Split | Items | Unique prompts | Exact overlap | Set overlap |
| --- | --- | --- | --- | --- |
| Mixed | 300 | 222 | 201 | 203 |
| Single | 200 | 39 | 200 | 200 |
| Seen | 200 | 177 | 147 | 151 |
| Unseen | 200 | 159 | 0 | 0 |
| High-kk | 160 | 156 | 0 | 0 |
| Structure | 120 | 50 | 120 | 120 |
| Dense | 500 | 490 | 0 | 0 |
| Edge | 500 | 437 | 32 | 39 |

该表显示 Single 与 Structure 的 120 到 200 行几乎全在训练中出现过，而 Unseen、High-kk 与 Dense 无完整提示或约束集重叠，Edge 只有少量重叠。结合训练池零留出对的事实，Unseen 与 Dense 的得分更能支持组合泛化，而 Single 与 Structure 更偏向熟悉指令上的执行。
下表是奖励设计的汇总对照，表前问题是曲式占比提升与曲式内部分级各贡献多少，条件是同一起点单次 300 步、同一二值成功口径。

| 条件 | 指标 | 二值低占比 | 本方法 | 比较对象 |
| --- | --- | --- | --- | --- |
| 前 50 步零方差组 | 无梯度组比例 | 0.550 | 0.307 | 二值对分级 |
| High-kk 与 Seen | 全满足率 | 0.469，0.745 | 0.575，0.815 | 二值对分级 |

表后解释：分级在 2180 题上以 1265 对 1188 领先，不一致项中以 229 对 152 获胜，最大增益在 High-kk 与 Seen，且 8 个套件全部更高，但 Mixed 与 Edge 上 0.010 的差距在重评波动内。诊断消融显示曲式占比从 21% 提到 33% 把 Structure 从 0.250 提到 0.525，同占比下分级再提到 0.808，而其余 5 套件变化至多 0.025。

负结果是外层混合权重取 1.0 或对称曲式分都会让全同输出大增、对比通过大跌，说明只奖重复不奖对比会坍缩到四单元全同的取巧解。

### 验证器改变了什么，又没有度量什么？

先看输出分析。诊断研究取 297 题双方都足够长的前八小节做长度控制，音符数 42.7 对 40.5，相异小节比例 0.417 对 0.426，四元组相异度 0.419 对 0.403，最大变化是音高类熵 1.930 到 1.826。

| Model | Notes | PC ent. | Dist. bars | Dist. 4-gr. |
| --- | --- | --- | --- | --- |
| SFT | 42.7 | 1.930 | 0.417 | 0.419 |
| MusicRLVR (diag.) | 40.5 | 1.826 | 0.426 | 0.403 |

该表说明在控制长度后表面统计变化不大，不能把合规分读成品质分。论文明确指出满足全部约束的输出可以只重复一个短动机，听感需要独立听评。残差分析显示直接检查点在 Mixed 错 58 题，其中 48 题只错一族，10 题错两族及以上，曲式是最常见的单错族，解析失败为 0，说明失败是浅而非遍布。解码时用验证器选优也有用，8 选 1 可把诊断 Mixed 提到 0.950，但这需要部署时有验证器且多花生成与验证成本，不能替代训练。

调性容忍的敏感性分析显示去掉关系调容忍后各模型下降，有监督初始化路线仍在 7 个划分领先，Edge 前 2 名差一题，说明调性定义不改变主要排序。严格格式门审计显示 3 个匹配强化检查点在 6540 题上无新增拒绝，而 ChatMusician 因缺表头与包装文本在严格门下归零，这属于格式 verdict，不改变主比较的 AA 口径。

### 复现先做什么，需要哪些超参数与信息条件？

复现应先锁定验证器与门。历史门用于训练与主表，提取 ABC 块、拒反复记号、music21 解析 20 秒超时、首声部至少 8 音与 4 非空小节、无和弦对象；严格门另做审计，要求单曲、指定表头、无包装残留、无歌词与倚音、无多声部与重叠音。八族检查不变，曲式用最小对集，AABA 的相同对为 1-2 与 1-4、相异对为 1-3，AABB 与 ABAB 类推。奖励取 lambda0.7，曲式内部分为 0.7 重复加 0.3 对比。

GRPO 取组大小 8、散度 0.04、截断 0.2、学习率 1 乘 10 负 6、300 步、6000 提示、温度 1.0，用 vLLM 在独立设备上 serving 回放。SFT 用 12890 对、学习率 1 乘 10 负 5、余弦、2 轮。硬件为 Ascend 910B2，本地上下文 4096、每题最多 1200 词，托管基线走 NVIDIA NIM 并按模型给不同补全预算。论文称将发布 8 个 JSONL、验证器与奖励函数、SFT 与强化提示、每题补全与验证子信号、聚合报告与资产脚本，但本次未验证可达性，不写已公开。常见误解是把解析通过当成功，复现时必须同时记录门决策与每族子信号，否则无法定位是门、调性混合策略还是曲式对比失败。

### 何时值得尝试，还需补哪项验证？

当任务是按规格写出可解析乐谱、每条要求都能写成确定性检查、且没有唯一目标曲子时，这套方法值得尝试。做法是先为每族写出验证器与提示渲染，再用硬门保证成曲，用逐族部分分与全满足 bonus 保证组内有排序，曲式这类合取结构再给族内部分分。预期是多约束与未见组合上提升最大，单约束上基线本已不低。不值得照搬的情形是目标含听感、演奏表现或风格相似度，这些不在验证器内，合规分高不代表好听。

还需补的验证包括独立听评、多次训练种子的方差、单请求 serving 的确定性、以及严格门下重训而非仅重评，因为当前主结果用历史门，审计只说明匹配检查点在严格门下不变。总体判断是，确定性属性检查可以为开放式结构化生成提供有效的任务监督，但监督的有效边界就是验证器本身的音乐学近似与格式假设。

<details>
<summary>📎 论文与评分元数据</summary>

排名：前50% | 文档类型：方法研究 | [arXiv 原文](https://arxiv.org/abs/2609.23665)

</details>

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。

- 评分规则：type-aware-v1

- 评分模型：muse-spark-1.3-contributor

- 评分请求协议：openai_responses

---

[← 返回 2026-09-23 语音/音乐/音频论文速递](/audio-paper-digest-blog/posts/2026-09-23/)
