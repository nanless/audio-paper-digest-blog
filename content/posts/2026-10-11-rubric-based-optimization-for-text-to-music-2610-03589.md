---
title: "Rubric-Based Optimization for Text-to-Music Generation"
date: 2026-10-11
draft: false
tags: [音乐生成, 偏好优化, 强化学习, 后训练, 音乐]
categories: [论文速递]
description: "该文用预训练音频语言模型按显式评分细则打分来优化音乐生成，在 MusicCaps 上同时提升三个独立评价指标，而速度、调性、乐器等可精确测量的属性则仍需直接优化专用测量，代价是打分器与提问方式选择不当会失效。"
hiddenInHomeList: true
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_arxiv_id: "2610.03589"
paper_digest_workbench_contract: "researcher-workbench-v1"
paper_digest_reader_title: "用评分细则训练文本生成音乐：多维度奖励与专用测量的分工"
paper_digest_original_title: "Rubric-Based Optimization for Text-to-Music Generation"
paper_digest_arxiv_version: 2
paper_digest_arxiv_versioned_id: "2610.03589v2"
paper_digest_arxiv_abs_url: "https://arxiv.org/abs/2610.03589v2"
paper_digest_arxiv_pdf_url: "https://arxiv.org/pdf/2610.03589v2.pdf"
paper_digest_primary_task: "音乐生成"
paper_digest_tags_contract: "paper-tag-flat-tags-v2"
paper_digest_tags_selection_contract: "paper-tag-selection-v2"
paper_digest_tags_registry_version: "paper-tag-catalog-v2"
paper_digest_tags_registry_sha256: "0a0847314ab2059d95efac33376414498e598a1f02a1486869bee0efc481d1f7"
paper_digest_tags_concepts: [{"facet":"task","id":"task.music-generation","label":"音乐生成"},{"facet":"method","id":"method.preference-optimization","label":"偏好优化"},{"facet":"method","id":"method.reinforcement","label":"强化学习"},{"facet":"setting","id":"setting.post-training","label":"后训练"},{"facet":"signal","id":"signal.music","label":"音乐"}]
paper_digest_primary_method: "偏好优化"
paper_digest_score: 7.0
paper_digest_rank_bucket: "前50%"
paper_digest_document_type: "方法研究"
paper_digest_one_sentence: "该文用预训练音频语言模型按显式评分细则打分来优化音乐生成，在 MusicCaps 上同时提升三个独立评价指标，而速度、调性、乐器等可精确测量的属性则仍需直接优化专用测量，代价是打分器与提问方式选择不当会失效。"
paper_digest_authors: [{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Ping Wang"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Guang Yang"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Shao-Rong Su"},{"affiliations":["Department of Electrical and Computer Engineering, University of Washington"],"name":"Junkai Wu"},{"affiliations":["Paul G. Allen School of Computer Science & Engineering, University of Washington"],"name":"Pang Wei Koh"},{"affiliations":["Paul G. Allen School of Computer Science & Engineering, University of Washington","Allen Institute for AIEqual contribution"],"name":"Noah A. Smith"}]
paper_digest_abstract_sha256: "5b7a913a2ce621f06dd8430fe07e940fdbbaee67e7a2d404c5d287f999b2f840"
paper_digest_sidecars: {"citation.bib":{"sha256":"c8453a9b4ab0f6b2953c15033f9521c0987baf5c732d23d9d66da70acf9802c9","url":"/audio-paper-digest-blog/data/papers/2026-10-11/2610-03589/citation.bib"},"citation.json":{"sha256":"d34186eebc944165fcc710abd14bdf0ef5473e5102901d2983769cecf0a8df7e","url":"/audio-paper-digest-blog/data/papers/2026-10-11/2610-03589/citation.json"},"citation.ris":{"sha256":"131bafc953d7fd471ff726a20edb186eb5c32de64db807491650e781dcd78964","url":"/audio-paper-digest-blog/data/papers/2026-10-11/2610-03589/citation.ris"},"rethink-context.json":{"contract":"paper-research-context-v2","sha256":"659bfd2a1e0f8e83cc6e293a1a137a74b3671589282e78f758ebb0096ce376c1","url":"/audio-paper-digest-blog/data/papers/2026-10-11/2610-03589/rethink-context.json"}}
paper_digest_api_reader_contract: "beginner-researcher-v3"
paper_digest_api_reader_article_sha256: "18079846b10b72d5f01d93cd5380037fe2d5dd720c45c3d7e9489fcb1b7de42a"
paper_digest_api_reader_plan_sha256: "fbcfca0acd0d2689cae4618a375cf037f528c1ee54e59dc9c7405fe6aaa84164"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings-v4"
paper_digest_api_reader_source_bindings_sha256: "7e3fa529f19d5274f9fc3f49fea84c3ca4cabdb9fbefce9dbbafbbd4eb0bc2a7"
paper_digest_api_reader_source_table_count: 4
paper_digest_api_reader_source_formula_count: 5
paper_digest_api_reader_structured_artifacts_sha256: "f8ff91aa876bd4889c5c1072abfc31cafe61dde2f359596d7a3b9875a843f643"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity-v1"
paper_digest_api_reader_author_identity_sha256: "c52b463180c2ee4590c6e14c9d9357317eb420784829a9e76c9a86432ff932d4"
paper_digest_api_reader_author_count: 6
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity-v1"
paper_digest_api_reader_resource_identity_sha256: "312effff5da31a530aa4df2007461b3af50f6db3ad76c95a6db62e3218f550ff"
paper_digest_api_reader_resource_count: 0
paper_digest_api_reader_figure_persistence: "ephemeral-no-persisted-figure-assets-v1"
paper_digest_api_reader_decision_projection: "api-reader-decision-projection-v2"
---

# 📄 用评分细则训练文本生成音乐：多维度奖励与专用测量的分工

> 英文题目：*[Rubric-Based Optimization for Text-to-Music Generation](https://arxiv.org/abs/2610.03589v2)*

> 标签：#音乐生成 | #偏好优化 | #强化学习 | #后训练 | #音乐
>
> 评分：**7.0/10** | 创新 1.3/2 | 技术严谨 1/1.5 | 实验充分 1.2/1.5 | 清晰度 0.8/1 | 影响力 1/1.5 | 开源 0/1.5 | 可复现 0.5/0.5 | 工程/实践 1.2/1.5


## 👥 作者与机构

- Ping Wang：机构信息未在 arXiv HTML 中可靠披露
- Guang Yang：机构信息未在 arXiv HTML 中可靠披露
- Shao-Rong Su：机构信息未在 arXiv HTML 中可靠披露
- Junkai Wu：Department of Electrical and Computer Engineering, University of Washington
- Pang Wei Koh：Paul G. Allen School of Computer Science & Engineering, University of Washington
- Noah A. Smith：Paul G. Allen School of Computer Science & Engineering, University of Washington；Allen Institute for AIEqual contribution

## 📌 核心摘要

文本到音乐生成要求把一段文字描述变成数十秒的波形，难点是质量同时涉及文本对应、风格配器、旋律、节奏、结构、制作与整体音乐性，任何单一自动分数都只能覆盖其中很窄的一面。论文先把文字评分规则、每维要听的证据与分档锚点连同音频和文本描述一起送入现成的音频语言模型，模型返回各维评分的JSON对象，解析合并为加权平均奖励并作为后两步的训练信号。随后该奖励把同一文本的多个候选按分排序并将靠前与靠后配成偏好对做直接偏好优化，或在ACE-Step上把在线采样分组的奖励做组内归一化后直接更新流匹配模型。相对已有做法，方法不需要收集人类偏好，也不需要为每个质量维度训练专用奖励模型，改质量只需改文字规则。在MusicCaps测试集的测试描述上经固定轮数更新后评估，Qwen3-Omni分维度提问的DiffusionNFT相对未训练ACE-Step把文本音频相似度CLAP提高0.0180，把音乐人审美预测SongEval提高0.1057，把音频质量预测Audiobox-Aesthetics提高0.3385，三者均为越高越好。结论适用范围是难以形式化的宽泛听感质量，在速度、调性、配器这类可用专用分析器测量的属性上，规则奖励只恢复部分增益甚至无效。原文未披露训练、推理或部署成本。

## 🔗 开源与复现资源

本次未形成可展示的已核验资源记录，开放状态尚未核实。

可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 文本生成音乐要解决什么输入输出问题

这篇论文研究的是从一段文字描述直接生成一段器乐音乐片段。输入是一句自然语言，比如紧张的电影配乐、先是稀疏钢琴再加入不协和弦乐并推向管弦高潮，输出是一段持续若干秒的波形。读者可以把任务理解为翻译加创作：模型既要读懂风格、配器、情绪、节奏、结构等词语，又要把含糊的意图变成随时间展开且听感连贯的声音。论文把质量拆成多个方面：是否紧扣提示、作曲与动机发展、编曲与音色、制作质量、整体吸引力。

难点在于这些方面要一起变好，只盯着一个自动分数去优化，很可能钻了该分数的空子，其他方面反而变差。后训练在这里指在预训练生成器权重基本冻结、只用小适配器调整的条件下，用奖励信号继续微调，让生成更符合多维要求。

### 已有两条后训练路线各管什么

论文梳理了两条常见路线。第一条是优化专用自动指标，例如文本音频相似度 CLAP、音乐人美学预测器 SongEval、音频质量预测器 Audiobox-Aesthetics，它们便宜可扩展，但每个只覆盖很窄的质量集合。第二条是从人类偏好数据训练专用奖励模型再做强化学习，例如 MusicRL 微调自回归音乐模型，LeVo 对歌曲模型做直接偏好优化，还有用现成奖励组合的 MR-FlowDPO、面向扩散模型的 DRAGON、从人工标注学习偏好的 TuneJury。这些方法都要么事先固定质量集合，要么为新场景重新收集偏好或训练裁判。

论文研究的第 3 条路线是现成的预训练音频语言模型加显式多维评分细则，直接当奖励用。细则用文字列出要评什么、听什么证据、怎么给分，新增质量就是改文字，不必新增指标或重新标注。论文强调这是首次在不训练裁判、不收集偏好的条件下，同时对自回归和扩散两类生成器、同时用偏好优化和在线标量奖励优化来做这件事，并首次在可精确测量的属性上把细则奖励和客观奖励直接对比。

### 论文提出的两个具体问题是什么

第一个问题是细则奖励能否在没有任何偏好标注和奖励模型训练的情况下，同时改善生成的多个方面，而不是只改善被优化的那个分数。第二个问题是当某个质量可以被精确测量时，细则是否还是合适的奖励，还是应该直接优化那个测量。举例来说，速度可以用节拍跟踪器估计，调性可以用调性检测器判断，乐器可以用乐器标签器判断，这些都有相对直接的仪器，而提示符合度、旋律记忆点、整体音乐性则很难形式化。论文的回答策略是固定生成器和优化器，只换奖励来源，看外部独立评价指标和客观属性测量如何变化，从而给出分工建议。

### 整体流程如何把文字细则变成训练信号

流程可以沿着一个样本走一遍。训练时先取一个训练提示，用当前生成器采出多个候选音频。然后把每个候选音频、原提示和评分细则一起送给音频语言模型打分器，打分器以小的 JSON 对象返回每个维度的数字分数，解析后按权重聚合成一个标量细则奖励。接下来有两条消费路径。对两个生成器都可以用偏好路径：把同一提示的候选按细则奖励排序，取高分与低分配对，构成固定的偏好数据集，再用直接偏好优化微调。

对扩散生成器还可以用在线标量路径：每一轮从当前策略重新采样一组候选，打分、组内归一化后直接构造训练损失，既拉向高分样本又推离低分样本。最后在速度、调性和配器任务上，保持优化器不变，把细则奖励换成由专用分析器算出的客观奖励，对比两者在客观测量上的训练曲线。

### 七维通用细则包含什么以及如何计分

通用文本生成音乐实验用 7 维细则，覆盖提示对齐、风格与配器、旋律与动机、节奏与律动、结构与结尾、制作质量、整体音乐性。每个维度写明定义、要听的可闻证据、0、2、5、8、10 5 个锚点和权重。权重是手工设定的，提示对齐占 0.25，风格配器、结构、制作各占 0.15，旋律、节奏、整体音乐性各占 0.10，实验前固定。打分器收到音频、提示和细则后，每个维度返回一个 0 到 10 的数。解析非常严格，缺字段、多字段、超范围、夹带散文都算错，先重试 1 次再失败就丢弃，不做截断或补零，避免失败评分悄悄变成 0 分。

加权平均即为细则奖励，权重和为一，所以仍在 0 到 10 量程上；给 DiffusionNFT 用时每个维度先除以 10 再聚合，使奖励落在 0 到 1 区间，优化器内部再做中心化和归一化。

**文本提示 × 评分细则奖励 × 音频语言模型打分器：** 文本提示给出想要的风格、乐器和情绪，评分细则奖励把要听什么、按什么标准给分写成文字，音频语言模型打分器负责听生成音频并按细则逐维打分，三者组合后，一次打分就能同时覆盖提示符合度、作曲、制作等多个维度，不必为每个维度单独训练评价器。

\[R_{\text{rubric}}(x,c)=\frac{\sum_{k=1}^{K}w_{k}s_{k}(x,c)}{\sum_{k=1}^{K}w_{k}},\]

### 一次问完与逐维分开问有何不同

论文比较两种 eliciting 分数的方式。联合提问是 1 次请求同时评完所有维度并一起返回，逐维提问是每个维度单独开 1 次对话，维度按每样本确定性打乱顺序访问，避免固定顺序的位置偏误。两者用同样的定义、锚点和权重。代价差异很大：逐维提问每个片段要调七次打分器。构建直接偏好优化偏好集需要评约 26000 个片段，只能用联合提问。

DiffusionNFT 在 MusicCaps 上每轮评 8 个提示乘 4 个候选，共 125 轮约 4000 个片段，两种提问都负担得起，因此在那里比较。属性实验用联合提问以省成本。选择哪种提问不是小事，后面实验显示同一打分器换提问方式会从全面退化变成全面改善，或从偏重制作变成更兼顾提示符合度。

**联合提问 × 逐维提问：** 联合提问指一次请求让打分器同时给出全部维度分数，逐维提问指每个维度单独开一次对话分别打分，前者省调用次数，后者避免一个维度的判断被其他维度的分数带偏，论文比较了两者在扩散模型上的效果差异。

### 偏好数据如何构造并用直接偏好优化训练

偏好路径固定生成 1 次、不随训练更新。对每个提示从预训练策略采 6 个候选，按细则奖励排序，把最高的两个分别与最低的两个配对，得到最多 4 对。去掉平局、重复波形和奖励差低于阈值 m 的对，剩下构成偏好集。直接偏好优化的目标是提高高分片段相对低分片段的似然，同时用系数贝塔约束不远离冻结的参考模型。对 MusicGen-small 这类自回归模型，似然是 EnCodec 码在有效位置上的平均对数概率，对不同长度可比。

对 ACE-Step 这类流匹配扩散模型，取不到自回归似然，就用流匹配损失构造两样本离线近似：在共享时间步和共享噪声下比较选中与拒绝隐变量的策略与参考损失差。两个生成器都冻结预训练权重，只训练 LoRA 适配器，关掉适配器即回到参考模型。

**直接偏好优化 × 偏好对：** 偏好对指同一提示下生成的两个片段中得分高者与得分低者的配对，直接偏好优化用这些配对提高模型生成高分片段的相对似然，同时用正则项约束模型不远离预训练模型，适合有精确似然的自回归模型，也被近似推广到流匹配扩散模型。

\[\mathcal{D}_{\mathrm{pref}}=\left\{(c,x^{+},x^{-}):R_{\mathrm{rubric}}(x^{+},c)-R_{\mathrm{rubric}}(x^{-},c)\geq m\right\}.\]

\[\mathcal{L}_{\mathrm{DPO}}(\theta)=-\mathbb{E}_{(c,x^{+},x^{-})\sim\mathcal{D}_{\mathrm{pref}}}\left[\log\sigma\left(\beta\left[\log\frac{\pi_{\theta}(x^{+}\mid c)}{\pi_{\mathrm{ref}}(x^{+}\mid c)}-\log\frac{\pi_{\theta}(x^{-}\mid c)}{\pi_{\mathrm{ref}}(x^{-}\mid c)}\right]\right)\right],\]

### 在线标量奖励如何直接更新扩散模型

DiffusionNFT 路径不需要存轨迹，每轮从当前策略重新采样。对每个提示采 G 个候选，打细则分得到标量奖励，在组内减均值、除批量标准差得到优势，再截断到正负 5 以内并线性映射到 0 到 1 的权重。每个候选做流匹配加噪，分别用当前策略、缓慢更新的旧策略拷贝和冻结预训练模型预测速度场，按 DiffusionNFT 构造正预测与隐式负预测，并用各自的重构误差均值归一化得到正负损失。高于组均值的候选主导正损失，把策略拉向重构其干净隐变量；低于均值的候选主导负损失，通过负预测推开。

另加一项使策略靠近预训练模型的参考正则，系数为千分之一。旧策略拷贝每轮按步数相关的动量更新。因为候选每轮重采，训练信号随生成器演化，这与偏好集固定不变的离线方式不同。论文说明两种优化器在多个方面同时不同，因此只能说在线优化器在该生成器上更能利用细则，不能归因到某一个差异。

**DiffusionNFT × 组内归一化奖励：** DiffusionNFT 指直接用标量奖励在线优化扩散模型的方法，组内归一化奖励指对同一提示采出的一组候选按其细则分数减组均值再除标准差，高于均值的候选把模型拉向其隐变量，低于均值的候选通过隐式负预测推开模型，训练信号随当前策略重新采样而变化。

\[\mathcal{L}_{\mathrm{NFT}}(\theta)=\mathbb{E}_{c,\,i,\,t,\,\epsilon}\Big[A_{\max}\big(\rho_{i}\,\ell_{i}^{+}+(1-\rho_{i})\,\ell_{i}^{-}\big)\Big]+\beta_{\mathrm{KL}}\,\mathbb{E}_{c,\,i,\,t,\,\epsilon}\big\lVert v_{\theta}(x_{t},t,c)-v_{\mathrm{ref}}(x_{t},t,c)\big\rVert_{2}^{2},\]

### 数据、模型、评价与训练预算如何设置

通用实验用 MusicCaps 的 5521 条专家描述，按 4416 训练、552 验证、553 测试 1 次划分，训练描述用于后训练，验证用于选超参，测试只用于报告。属性实验从 MTG-Jamendo 标注构造速度、调性、乐器提示集，训练与评测来自不相交音轨，评测提示只用于记录曲线，不做选择。生成器是 300M 参数自回归 MusicGen-small 和 3.5B 参数流匹配扩散 ACE-Step-v1，都冻权重训 LoRA。打分器是 3 个开权重音频语言模型：偏音乐的 Music Flamingo、通用 7B 的 Qwen2-Audio、30B 的 Qwen3-Omni，都不微调，贪心解码。开权重是必需的，因为后训练要查数万次，商用按次计费模型负担不起。

外部检验用 CLAP 测图文符合度、SongEval 取 5 个维度均值测歌曲美学、Audiobox 取 4 个轴均值测音频质量。属性测量各有专用仪器：速度用 Beat This 估计并在正负 5 拍每分钟内给满分、之外指数衰减，调性用 S-KEY 做 24 类精确匹配，配器用 Essentia 乐器标签器算请求乐器相对最强非请求乐器的对比分。所有 MusicCaps 结果都是同提示、同种子下训练模型减未训练模型的每描述均值差，扩散模型固定 125 步后检查点，不按报告指标挑检查点。

**CLAP × SongEval × Audiobox-Aesthetics：** CLAP 指文本与音频在对比模型下的余弦相似度，用来衡量是否唱出提示内容，SongEval 指用音乐人评分训练的歌曲美学预测器均值，Audiobox-Aesthetics 指音频质量预测器均值，三者在细则实验中从不作为训练奖励，只作为独立的外部检验，避免自己考自己。

### 单个指标做偏好为何顾此失彼而细则能同时变好

先看读图说明：下图比较直接偏好优化在 MusicCaps 上的效果，上行是 MusicGen-small，下行是 ACE-Step-v1，每格是 1 次训练，格内三根柱分别是 3 个外部评价器相对未训练模型的变化百分比，正为好，左侧三格斜线柱是用单个自动指标排序偏好，右侧三格实心柱是用细则排序偏好，无折中应显示三柱全正，注意上下行刻度不同且上行大柱有断轴。

> **看图路径：** 1. 先看上下两行分别对应哪个生成器，注意两行纵轴刻度不同；2. 再看每组左侧三格斜线柱与右侧三格实心柱的正负方向；3. 对比同一格内蓝色、橙色、绿色三根柱是否同时为正

[![原论文 Figure 1：DPO on MusicCaps: change in each evaluator as a percentage of the untrained generator’s score…](https://arxiv.org/html/2610.03589v2/dpo_preferences.svg)](https://arxiv.org/html/2610.03589v2/dpo_preferences.svg)

*论文图 1。原论文 Figure 1:：“DPO on MusicCaps: change in each evaluator as a percentage of the untrained generator’s score (positive is better), for MusicGen-small (top row) and ACE-Step v1 (bottom row).”。*

在 MusicGen-small 上，用任一单个指标排序都提高自身但至少拉低另一个：按 CLAP 和按 SongEval 排序都降低 Audiobox，按 Audiobox 排序提升最大但同时降低 CLAP 和 SongEval。而用 3 个打分器中任一的细则排序，三次运行都同时提高 3 个外部指标，只是单项幅度小于针对性优化的最大值，且训练从未见过这些评价指标。论文把前者解读为窄代理的奖励操纵：模型学会讨好一个评价器而不全面变好。

在 ACE-Step 上，偏好优化无论单指标还是细则都只带来微小移动，单指标运行甚至不总能提高被优化的指标本身，作者猜测流匹配的两样本离线近似是原因之一，但未分离验证，于是转向在线优化器。初学者应记住：同时三正才是无折中，单柱很高但另柱转负不代表音乐整体变好。

### 换成在线优化后打分器与提问方式带来什么分化

下图聚焦 ACE-Step-v1，每个打分器一格，格内 3 组分别是细则偏好优化、联合提问的在线优化、逐维提问的在线优化，柱仍是 3 个外部指标相对未训练的变化百分比，三格共享同一刻度且中间大柱有断轴。

> **看图路径：** 1. 先按左中右三个面板找到三种打分器；2. 再在每个面板内比较偏好优化组与两种提问的在线优化组；3. 注意中间面板纵轴断裂处的大幅正柱与蓝色柱转负

[![原论文 Figure 2：ACE-Step v1 under different post-training methods: DPO versus DiffusionNFT for each ALM rater.](https://arxiv.org/html/2610.03589v2/acestep_comparison.svg)](https://arxiv.org/html/2610.03589v2/acestep_comparison.svg)

*论文图 2。原论文 Figure 2:：“ACE-Step v1 under different post-training methods: DPO versus DiffusionNFT for each ALM rater.”。*

先看优化器：在同一打分器与同提问下，在线优化比偏好优化大得多，以 Qwen3-Omni 联合提问为例，Audiobox 增益约 30 倍，CLAP 和 SongEval 增益 2 到 3 倍，逐维 Qwen3-Omni 取得全文最大 CLAP 和 SongEval 增益。再看打分器与提问：Music Flamingo 联合提问全面下跌，Audiobox 跌约未训练分数的 15%，但用同一打分器自评 7 维却全升且区间不含零，原因是超 98% 片段 7 维返回完全相同值，奖励几乎无维度信息；换逐维提问则三指标全正。

Qwen2-Audio 两种提问都取得最大 SongEval 和 Audiobox 增益，但 CLAP 跌约 1/4 到三分之一，CLAP 是唯一以提示为条件的指标，该模式符合偏爱通用精致感而丢提示符合度的奖励。Qwen3-Omni 两种提问都三正，逐维更强于 CLAP 和 SongEval，联合更强于 Audiobox。还有 longer 运行显示训练奖励继续上升而外部指标在 50 和 100 步后转差，说明训练奖励上升不等于持续变好，提前固定的停止规则很重要。

### 最好模型的自动增益人耳能否听出来

自动指标可能被操纵，因此论文对最好的一轮做了小规模配对听辨：ACE-Step 经 Qwen3-Omni 逐维在线训练的模型。听辨条件是排除描述人声的 40 条测试描述，每条用相同种子各生成 30 秒未训练与训练片段各一，随机顺序呈现并显示描述，只选整体更喜欢哪边或无偏好，7 位听众共 52 次判断覆盖 40 条。同种子、随机顺序与只选整体偏好都是本次听辨的方法条件，不计入偏好计数。

下表整理这次听辨的样本设置与偏好计数，比较自动增益是否可闻，公平条件是同描述、同种子、随机顺序，偏好训练模型的判断占比越高越好。

| 听辨对象 | 测试描述 | 每条生成 | 偏好训练模型 | 区间与检验 |
| --- | --- | --- | --- | --- |
| ACE-Step 未训练对 Qwen3-Omni 逐维在线训练模型 | 排除描述人声的 40 条测试描述 | 每条两段 30 s 配对片段，未训练与训练各一、同种子 | 36 of the 52 (69%) | 95% interval 48–89%; sign test p=0.008 |

52 次中有 36 次偏好训练模型，占 69%，基于描述与听众自助法的 95% 区间为 48% 到 89%，符号检验 p 为 0.008，支持增益不仅存在于评价器，也能被人耳察觉。样本仅 40 条、判断仅 52 次、区间下限接近 50%，且只测了最好的一轮，不能推广到所有打分器与提问组合，也未评估长结构、过渡与结尾等短片段测不到的能力。

### 可精确测量的属性上细则与直接测量的差距有多大

属性实验固定用 ACE-Step 加在线优化，只换奖励：细则用 Qwen3-Omni 联合提问，客观直接优化评测用的测量本身，所以是参照上限。每 10 步在评测提示上测 1 次客观值。该表列出每个属性在评测提示上的客观测量随 DiffusionNFT 更新步数的取值，分 rubric 与 objective 两种奖励条件，0 为未训练模型；采样预算见 Experiment/GG/Prompts-update/Clip/Updates 表。

| Task (measure) | Condition | 0 | 10 | 20 | 30 | 40 | 50 | 60 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Tempo (tempo reward) | objective | 0.268 | 0.435 | 0.523 | 0.545 | 0.555 | 0.524 | 0.500 |
|  | rubric | 0.277 | 0.289 | 0.245 | 0.270 | 0.290 | 0.343 | 0.353 |
| Key (exact key accuracy) | objective | 0.043 | 0.058 | 0.099 | 0.123 | 0.126 | 0.112 | – |
|  | rubric | 0.045 | 0.047 | 0.048 | 0.040 | 0.045 | 0.045 | – |
| Instrument. (contrastive) | objective | 0.414 | 0.498 | 0.592 | 0.538 | – | – | – |
|  | rubric | 0.414 | 0.436 | 0.443 | 0.402 | – | – | – |

该表回答同一属性上两种奖励的客观收益随训练的变化，公平条件是同生成器同优化器下只换奖励；每步评多少音频、跑多长的预算由另一配置表回答。数值上直接优化随更新步数明显上升而细则迁移有限，调性几乎无改善，配器只到 30 步所以后列为空，峰值早且有回落，停止规则影响结论。

下表是另一组配置记录：MusicCaps 统一每轮 4 候选乘 8 提示、30 秒、125 步，属性任务统一 24 候选乘 48 提示、15 秒，早期 Music Flamingo 逐维曾跑 200 步。

| Experiment | GG | Prompts/update | Clip | Updates |
| --- | --- | --- | --- | --- |
| MusicCaps, all Table 3 runs | 4 | 8 | 30 s | 125 |
| MusicCaps, earlier MF dimension-wise run (Sec. 5.2) | 4 | 8 | 30 s | 200 |
| Tempo / key / instrumentation (both conditions) | 24 | 48 | 15 s | 60 / 50 / 30 |

这张表回答不同实验的更新预算是否事先固定，公平条件是同行共享采样与片段长。含义是属性曲线峰值早且会回落，必须事先固定预算而不能事后挑峰。它只记录采样预算，不记录打分器质量。

客观奖励的计算以速度为例：目标为请求拍速，估计为去首尾静音后节拍跟踪的平均拍速，容差 5 拍每分钟内给 1，之外指数衰减，半速倍速不特殊处理。

\[R_{\mathrm{obj}}^{(\mathrm{tempo})}(x,b^{\ast})=\exp\!\Big(-\lambda\,\max\!\big(0,\;\big|\hat{b}(x)-b^{\ast}\big|-\tau\big)\Big),\]

3 条曲线的具体数值行为任务与奖励条件，列为更新步数，值为评测提示上的客观测量均值，0 为未训练模型，加粗为预算内峰值，配器只到 30 步所以后列为横线，数值已在上表列出。直接优化时速度分翻倍、调性从约 4% 机会水平升到约 13%、配器对比分升约 40%；细则只恢复速度约 1/4、配器约六分之一且峰后回落到起点下、调性无改善，而细则自评分在 3 个任务上都继续上升。调性失败在预训练筛查已有预兆：打分器分不清请求调与非请求调。分析器本身不完美、调性绝对值仍低、峰值早，停止规则影响结论。

### 哪些条件下结论才成立以及什么还没测

细则同时改善三指标的结论依赖具体条件：MusicCaps 短片段、8 秒或 30 秒生成、每描述均值差、固定检查点、不按报告指标选模型，以及打分器确实能输出有区分度的维度分。一旦打分器塌缩到 7 维同值，或奖励偏爱通用精致而丢提示，结论即失效，Qwen2-Audio 掉 CLAP 与 Music Flamingo 联合提问全面下跌就是反例。属性上细则弱于直接测量的结论依赖所用分析器的精度与所选乐器集合、24 调精确匹配等定义，换更强的闭源打分器可能缩小差距，但论文因预算未测。生成器只覆盖 MusicGen-small 与 ACE-Step-v1，跨新模型泛化未测。

评价只覆盖现有自动指标能测的部分，和声、声部进行、力度、乐句、风格真实性、原创性缺乏成熟评价器，长时形式也因片段短而受限。训练奖励上升而外部指标下降的轨迹提醒不能把训练曲线当改善证据。

### 复现第一步要固定什么与代价在哪里

复现先固定数据划分与生成设置：MusicCaps 1 次划分的 4416、552、553，属性提示来自与训练不相交音轨；MusicCaps 每测试描述各生成两段训练与两段基线并同种子，MusicGen 用 8 秒、ACE-Step 用 30 秒，属性用 15 秒；偏好每提示 6 候选取前二乘后二并按阈值过滤，扩散用 LoRA 只训注意力投影并保留冻结参考。打分器用原文检查点并贪心解码，解析失败重试 1 次后丢弃。客观奖励按附录公式实现，注意速度容差 5、衰减率约 0.058，调性做异名同音归一但关系大小调算错，配器取每类前 20% 帧均值再做请求均值减最强非请求的对比。

代价上偏好集每打分器约两万六千片段，逐维乘七；在线每轮 8 提示乘 4 候选共 125 轮约四千片段，属性每轮 48 提示乘 24 候选。论文未绑定可验证的公开代码与数据资源，本次也未发现来源绑定且完成验证的资源，因此不要默认代码模型数据已公开，应按附录的检查点名、细则版本与提示哈希自行配环境。

### 什么时候值得尝试细则与专用测量如何搭配

值得尝试的情形是目标多为难以形式化的感知质量，且能找到在筛查中显示维度区分度、提示符合度不塌的开权重打分器，并能负担在线采样的打分量。此时用细则做宽奖励更稳，避免单指标的顾此失彼。已有可靠测量时则优先直接优化测量：速度、调性、配器的直接优化远强于细则，细则对速度部分迁移、对配器弱且短暂、对调性无改善。论文建议的实用分工因此是细则管难测量的宽感知质量，客观奖励管能量准的属性，未来可把两者合进同一训练信号。

初学者易误解有三点：单指标大涨不等于音乐整体变好，要看独立指标是否同时变好；训练用打分器自评上升不等于外部变好，要看外部指标与听辨；事后峰值不等于部署可得，要用事先固定的检查点与预算。

下表把直接优化与细则迁移的量级并列，比较同一属性上两种奖励的客观收益差距，公平条件是同生成器同优化器，越高越符合请求。

| 属性 | 直接优化测量 | 细则恢复 | 细则自评 | 备注 |
| --- | --- | --- | --- | --- |
| tempo | tempo score doubles, twice as many clips land within five BPM | about a quarter of the tempo gain | rubric score keeps rising | objective is reference |
| key | from chance (about 4% for 24 keys) to about 13% | none of the key gain | rubric score keeps rising | still low but three times |
| instrumentation | instrument score rises by about 40% | about a sixth of the instrument gain | rubric score keeps rising | peaks early, falls back |

直接优化速度翻倍、调性约 3 倍、配器约 40%，细则只恢复一小部分且调性为零，代价是直接优化即优化评测本身，属参照上限，部署时仍需独立验证是否过拟合到分析器。还需补的验证包括更长片段的形式与结尾、更多生成器、细则加客观的联合训练，以及对调性与节拍更敏感的打分器筛查。

<details>
<summary>📎 论文与评分元数据</summary>

排名：前50% | 文档类型：方法研究 | [arXiv 原文](https://arxiv.org/abs/2610.03589v2)

</details>

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。

- 评分规则：type-aware-v1

- 评分模型：muse-spark-1.3-contributor

- 评分请求协议：openai_responses

---

[← 返回 2026-10-11 语音/音乐/音频论文速递](/audio-paper-digest-blog/posts/2026-10-11/)
