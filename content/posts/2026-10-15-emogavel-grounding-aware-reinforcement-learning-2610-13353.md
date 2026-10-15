---
title: "EmoGavel: Grounding-Aware Reinforcement Learning with Verifiable Rewards for Multimodal Emotion Preference Learning"
date: 2026-10-15
draft: false
tags: [语音情感识别, 强化学习, 偏好优化, 音视频]
categories: [论文速递]
description: "针对开放式情感描述偏好只给二选一标签而缺少错误定位监督的问题，EmoGavel 用受控错误构造的可验证目标先做接地监督微调再做偏好门控的组相对强化学习，在 EmoPrefer-Data 上自然偏好达到 79.75% 加权 F1、四类受控错误平均 88.20% 并保持 77.27% 接地总分，但缺失证据恢复略有下降且结论适用范围限于四种预设错误。"
hiddenInHomeList: true
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_arxiv_id: "2610.13353"
paper_digest_workbench_contract: "researcher-workbench-v1"
paper_digest_reader_title: "EmoGavel：让偏好判断说出错误在哪并给出修正"
paper_digest_original_title: "EmoGavel: Grounding-Aware Reinforcement Learning with Verifiable Rewards for Multimodal Emotion Preference Learning"
paper_digest_arxiv_version: 1
paper_digest_arxiv_versioned_id: "2610.13353v1"
paper_digest_arxiv_abs_url: "https://arxiv.org/abs/2610.13353v1"
paper_digest_arxiv_pdf_url: "https://arxiv.org/pdf/2610.13353v1.pdf"
paper_digest_primary_task: "语音情感识别"
paper_digest_tags_contract: "paper-tag-flat-tags-v2"
paper_digest_tags_selection_contract: "paper-tag-selection-v2"
paper_digest_tags_registry_version: "paper-tag-catalog-v2"
paper_digest_tags_registry_sha256: "cdef54423b5dfc00a1d017ef6639446d2ecd1d9c1acf71c8eb4f6219a46b7ba8"
paper_digest_tags_concepts: [{"facet":"task","id":"task.emotion-recognition","label":"语音情感识别"},{"facet":"method","id":"method.reinforcement","label":"强化学习"},{"facet":"method","id":"method.preference-optimization","label":"偏好优化"},{"facet":"signal","id":"signal.audiovisual","label":"音视频"}]
paper_digest_primary_method: "强化学习"
paper_digest_score: 5.9
paper_digest_rank_bucket: "前50%"
paper_digest_document_type: "方法研究"
paper_digest_one_sentence: "针对开放式情感描述偏好只给二选一标签而缺少错误定位监督的问题，EmoGavel 用受控错误构造的可验证目标先做接地监督微调再做偏好门控的组相对强化学习，在 EmoPrefer-Data 上自然偏好达到 79.75% 加权 F1、四类受控错误平均 88.20% 并保持 77.27% 接地总分，但缺失证据恢复略有下降且结论适用范围限于四种预设错误。"
paper_digest_authors: [{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Zilong Huang"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Kong Aik Lee"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Zezhong Jin"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Man-Wai Mak"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Tatsuya Kawahara"}]
paper_digest_abstract_sha256: "3c867e8cab4a500e092d524e17d78219db46ffb5007b5b3fbde11787059d912d"
paper_digest_sidecars: {"citation.bib":{"sha256":"5646aa7f17c2025c6c8dc0335017c031c37908f4bae12d10ccac8962783affcc","url":"/audio-paper-digest-blog/data/papers/2026-10-15/2610-13353/citation.bib"},"citation.json":{"sha256":"4667ee5e1c9f975013bc2f11780e6c5a719ba07a77ad8aae8b053b56adf89f47","url":"/audio-paper-digest-blog/data/papers/2026-10-15/2610-13353/citation.json"},"citation.ris":{"sha256":"8666134b34f622a45398938fb1bd529f6d901f4f52a55c6ce280898ad490a373","url":"/audio-paper-digest-blog/data/papers/2026-10-15/2610-13353/citation.ris"},"rethink-context.json":{"contract":"paper-research-context-v2","sha256":"7a45c9c2b9f8e59978aabab2d594e823ff1d1f12ab1cdd4847da3693e64c1b5a","url":"/audio-paper-digest-blog/data/papers/2026-10-15/2610-13353/rethink-context.json"}}
paper_digest_api_reader_contract: "beginner-researcher-v3"
paper_digest_api_reader_article_sha256: "98a03914432bd6defa398703977669c9cbe61825e4a4bc50ce518bc7269d31b0"
paper_digest_api_reader_plan_sha256: "d2a4d5083f7e1cf5cf7584f6932cdaac8c8ab0f2757238cd3ecabf5e4fd090a2"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings-v4"
paper_digest_api_reader_source_bindings_sha256: "16d8adc36aebcef8a65cc09a05ce80747853773e42555e948faeb943733153ce"
paper_digest_api_reader_source_table_count: 3
paper_digest_api_reader_source_formula_count: 5
paper_digest_api_reader_structured_artifacts_sha256: "b276285f1a17f8b2a260e27bb36d6c72471d72e921eeaddbb0bbbf870aedf2e6"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity-v1"
paper_digest_api_reader_author_identity_sha256: "2934d22acb0a50951c1cb981a809a1bc584ed2f4ad5f7e6cdbff8d323ceae80a"
paper_digest_api_reader_author_count: 5
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity-v1"
paper_digest_api_reader_resource_identity_sha256: "9ef95558eb653e3bcddd2538e97b68f488069b1cf6f288becd26d30e679e8d36"
paper_digest_api_reader_resource_count: 0
paper_digest_api_reader_figure_persistence: "ephemeral-no-persisted-figure-assets-v1"
paper_digest_api_reader_decision_projection: "api-reader-decision-projection-v2"
---

# 📄 EmoGavel：让偏好判断说出错误在哪并给出修正

> 英文题目：*[EmoGavel: Grounding-Aware Reinforcement Learning with Verifiable Rewards for Multimodal Emotion Preference Learning](https://arxiv.org/abs/2610.13353v1)*

<!--paper-tag-hierarchy-v1:start-->

**研究分类**

- **研究任务**：[语音情感识别](/audio-paper-digest-blog/papers/?concept=task.emotion-recognition)
- **研究方法**：[强化学习](/audio-paper-digest-blog/papers/?concept=method.reinforcement)；[偏好优化](/audio-paper-digest-blog/papers/?concept=method.preference-optimization)
- **信号**：[音视频](/audio-paper-digest-blog/papers/?concept=signal.audiovisual)

<!--paper-tag-hierarchy-v1:end-->

> 评分：**5.9/10** | 创新 1.2/2 | 技术严谨 1/1.5 | 实验充分 1.1/1.5 | 清晰度 0.8/1 | 影响力 0.7/1.5 | 开源 0/1.5 | 可复现 0.3/0.5 | 工程/实践 0.8/1.5


## 👥 作者与机构

- Zilong Huang：机构信息未在 arXiv HTML 中可靠披露
- Kong Aik Lee：机构信息未在 arXiv HTML 中可靠披露
- Zezhong Jin：机构信息未在 arXiv HTML 中可靠披露
- Man-Wai Mak：机构信息未在 arXiv HTML 中可靠披露
- Tatsuya Kawahara：机构信息未在 arXiv HTML 中可靠披露

## 📌 核心摘要

描述性多模态情感识别以自由文本描述目标人物情感状态，难点在于多种表述都可能成立，难以用单一参考评判优劣。pairwise偏好预测输入一段多模态片段与两个候选描述，输出更符合情感状态的一方，但已有训练只给二选一标签，不指出错在哪里或如何改正。EmoGavel先做接地监督微调，在受控错误对上联合学习偏好选择、错误片段定位、原文修复与缺失证据补全，再用接地感知组相对策略优化按可验证奖励优化这些结果。与只学二选一的误差增强方法不同，该框架要求偏好正确才激活接地奖励，并对全错组引入补救信号。在EmoPrefer-Data自然偏好与四类受控错误评估上，单个Qwen2.5-Omni-7B的EmoGavel以自然对加权F1为79.75%高于同基座同设置误差增强微调的77.15%，四类受控错误平均加权F1以88.20%高于该基线的77.13%。结论适用于含明确构造痕迹的四类受控错误及候选顺序打乱的一致性检验，其缺失证据恢复弱于接地监督微调，且向自然发生的非对齐错误的泛化与不同多模态证据条件下的接地仍未验证。训练在八块NVIDIA RTX A6000 GPU上完成，接地监督微调采用秩为8的低秩适配并训练两轮，接地感知组相对策略优化每提示采样4个输出并训练500步。

## 🔗 开源与复现资源

本次未形成可展示的已核验资源记录，开放状态尚未核实。

可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 开放式情感描述为什么难评，偏好判断要解决什么

描述性多模态情感识别希望用自由文本说清人的情感状态，比固定类别更细，但也带来评测难题：同一个情绪可以有多种合理说法，没有唯一参考答案可以直接比对。EmoPrefer 把评测转成成对偏好预测，给定一段包含视频和音频的多模态片段 x 和两个候选描述 d1、d2，让多模态大语言模型扮演裁判，判断哪个描述更符合目标人物的情感状态。输入是三元组 q=(x,d1,d2)，输出是选择 d1 或 d2 的标签 a1 或 a2，正确标准是更贴近人类判断的那一个。

论文的起点是，这类监督只能告诉模型选哪边，却不说没被选的那边错在哪里、该怎么改。对于刚入门的研究生，可以这样理解任务边界：模型必须保留多模态证据和两个候选的完整对比信息，不能只看文本流畅度；输出至少要给出偏好选择，而 EmoGavel 进一步要求在可验证样本上同时给出错误片段和修正内容。本文只研究这种成对偏好加错误接地的任务，不研究单句情感分类或连续情绪回归。

训练和评测都围绕同一个输入格式展开，区别只在监督信号是只有二选一，还是同时有定位与修复答案。

### 已有偏好训练路线缺了哪块监督

原文对比了 3 条在相同输入和相同二选一目标下的路线。第一是常规监督微调和直接偏好优化，只用自然偏好对学 a1 或 a2，监督稀疏，每个更优描述通常只配一个负例。第二是错误增强偏好优化 EAPO，从每个更优描述派生出最多 4 个受控负例，丰富了负例数量，但在优化时仍只用二元偏好标签，没有教模型错误位置和修正方法。第三是本文的接地扩展，把受控错误构造过程中自然保留的对应关系变成显式监督。

关键区别在于监督粒度和运行阶段：前两类在训练时只有偏好正确性信号，推理时也只输出选择；EmoGavel 在训练时对受控对增加定位、修复和缺失恢复目标，推理时对相应样本要求结构化输出。原文指出，只会选对不等于会指错，这正是偏好-only 方法接地分数低的动机。比较时不能把不同模型规模或融合策略的差异直接归为方法胜负，例如 EAPO 报告里用了 3 个适配裁判的融合，而 EmoGavel 主结果是单个 Qwen2.5-Omni-7B 裁判，读数时必须分开看单模型与融合的公平条件。

### 输入是什么，两类数据对各提供什么答案

每个训练和评测样本的输入都是 q=(x,d1,d2)，其中 x 是视频加音频等多模态证据，d1 和 d2 是两个候选情感描述，模型还要参考辅助多模态描述。目标是输出偏好预测与真实标签 y 星一致，y 星取值为 a1 或 a2。论文区分两类数据对。自然对(d+,d-) 是人类偏好的更优描述和被拒绝描述，被拒绝者只是相对较差，不保证有明确可定位的错误，因此只提供偏好监督。受控对(d+,dk-) 是把 d+ 按 4 种预设错误之一改坏得到的，类型集合 K 包括替换类 Krep 和模态缺失，替换类含情绪翻转、强度不匹配、证据矛盾，缺失类是模态缺失。

因为构造过程知道改了哪里，所以能直接得到可验证答案：对替换类，被改坏片段是定位目标 ek，对应原文片段是修复目标 rk；对模态缺失，被删掉的内容是恢复目标 mk。论文举例，把 disappointed 换成 confident，则 ek 是 confident、rk 是 disappointed；删掉 with a restrained tone，则 mk 就是该短语。这些目标不需要额外人工标注，是构造过程的副产品，自然对保留偏好监督，受控对同时提供偏好和接地监督。

**自然偏好对 × 受控错误对：** 自然偏好对指人类标注的更优描述 d+ 和较差描述 d-，d-只是相对不够好，不一定有明确错误，只能提供二选一监督；受控错误对指把 d+ 按四种预设方式改坏得到的 d+ 与 dk-，因为改动过程已知，所以除了二选一标签还附带错误位置和修复答案，两者搭配让模型既学真实分布的偏好，又在可验证样本上学定位与修正。

### EmoGavel 两阶段流程如何分工

EmoGavel 分 2 个阶段。第一阶段是接地监督微调 Grounded SFT，从自然对和受控对的监督目标中联合学习偏好预测和错误接地，学完的适配器同时作为第二阶段的可训练策略与冻结参考策略的起点。第二阶段是接地感知的组相对策略优化 GA-GRPO，对每个查询采样多个输出，计算可验证奖励和组内相对优势，对全错的二元偏好组做救援，再带 KL 正则更新策略。奖励设计按数据类型区分：自然对只有偏好奖励，受控对用偏好门控的接地奖励，即偏好错则总奖励为零，偏好对才加接地分。

下面这张官方总览图把左右 2 个阶段、中间采样优化链路和右侧奖励分支画在了一起，适合先建立整体输入输出路径再看细节，读图时先确认左侧输入如何分叉再沿右侧主链看强化学习闭环。

> **看图路径：** 1. 先沿左侧偏好查询到四类受控错误分支看监督从哪里来；2. 再看中间可训练模型采样 K 个输出到奖励再到优势的纵向链路；3. 对照右侧自然对与受控对的奖励分支区分门控逻辑；4. 找到底部动态零方差救援框确认全错组如何补入标准答案

[![原论文 Figure 1：Overview of the proposed EmoGavel framework for multimodal emotion preference learning.](https://arxiv.org/html/2610.13353v1/overall.png)](https://arxiv.org/html/2610.13353v1/overall.png)

*论文图 1。原论文 Figure 1:：“Overview of the proposed EmoGavel framework for multimodal emotion preference learning.”。*

图左侧显示偏好查询 q=(x,d1,d2) 包含多模态证据和候选对，上方分支给出更优描述、原始拒绝描述、替换类错误和模态缺失错误，底部汇总为一个原始拒绝加最多 4 个受控错误，并指向基础多模态大语言模型做 Grounded SFT，学习偏好预测、错误定位与修复、缺失证据恢复三项能力。图中间显示可训练模型对同一查询采样 K 个输出并计算奖励与优势，对全错组用动态救援补入标准答案，再经组相对更新并受参考模型 KL 约束。图右侧分三块给出自然对的偏好奖励、替换对的定位加修复奖励、缺失对的词级别 F1 加语义相似度恢复奖励，底部汇总为受控对偏好错则 0 分、偏好对则 1 加接地分，自然对只用偏好奖励。

### 接地监督目标长什么样，模型要输出什么格式

Grounded SFT 不改变自回归交叉熵的形式，只改变目标文本的格式。自然对和受控对的二元样本仍以 a1 或 a2 为目标，而受控错误额外要求结构化输出。对替换类，目标包含三行：偏好 a1、错误片段 ek、修复 rk；对模态缺失，目标包含偏好 a1 和缺失证据 mk。也就是说，同一套损失函数同时训练二元样本和结构化样本，区别只在目标格式，输入的提示词和多模态 token 不计入损失。

训练时结构化样本在 4 种错误间均衡，并以 0.5 概率交换候选顺序以减少位置偏置。这种设计让模型在第一阶段就建立格式遵从和基本接地能力，为第二阶段直接优化任务级结果打基础。符号上，q 是输入，t 是从 t1 到 tL 的目标 token 序列，L 是目标长度，损失是对每个目标 token 取负对数似然再平均。

**错误定位 × 修复：** 错误定位指在替换类错误中指出被改坏的片段 ek，例如把 disappointed 改成 confident 后要指出 confident；修复指给出原来正确的片段 rk，例如 disappointed，两者分工是先找错再给对，组合后模型输出不再只是选 a1 或 a2，而是同时给出可按词级别 F1 检验的结构化答案。

\[\mathcal{L}_{\mathrm{Grounded,SFT}}=-\frac{1}{L}\sum_{\ell=1}^{L}\log p_{\theta}(t_{\ell}\mid q,t_{<\ell}),\]

上式是接地监督微调的损失，含义是对目标序列逐 token 做下一词预测，只在目标部分算损失，提示词和多模态输入被掩掉。原文用低秩适配 LoRA 实现该阶段，秩为 8，缩放因子 16，丢弃率 0.05，训练两轮，第一轮学习率 5 乘 10 的负 6 次方，第二轮 2.5 乘 10 的负 6 次方，数据是二元偏好和结构化接地各占一半的混合，结构化部分在 4 类错误间均衡。

### 偏好和接地奖励如何计算，为什么要门控

第二阶段的奖励全部可验证，不需要再学一个奖励模型。先解析模型输出的偏好预测，与真实标签比较，相同得 1 否则得 0，这是偏好奖励。对替换类，用词级别 F1 分别衡量预测错误片段与真实 ek、预测修复与真实 rk 的重合度，得到定位奖励和修复奖励；对模态缺失，用词级别 F1 加冻结句编码器余弦相似度的非负部分衡量恢复质量，因为同一缺失证据可以有多种同义表达，字面 F1 之外需要语义分。

接地奖励再按类型加权组合，替换类用 alpha 乘定位加 beta 乘修复，缺失类用 beta 乘恢复奖励，原文实验取 alpha 和 beta 均为 0.25。最后做偏好门控：受控样本若偏好错，总奖励为 0；偏好对，总奖励为 1 加接地奖励。自然样本没有接地目标，总奖励就等于偏好奖励。这种偏好优先的层级保证模型不能靠把细节写得像而偏好选错来拿分。

\[R_{\mathrm{pref}}(\hat{y},y^{*})=\begin{cases}1,&\hat{y}=y^{*},\\ 0,&\text{otherwise}.\end{cases}\]

上式是偏好奖励的定义，预测与标签一致得 1，否则 0，是后续门控的开关，自然对直接用它作为总奖励。

\[R=\begin{cases}0,&R_{\mathrm{pref}}=0,\\ 1+R_{\mathrm{grd}}^{(k)},&R_{\mathrm{pref}}=1.\end{cases}\]

上式是受控对的总奖励，偏好错直接清零，偏好对才在 1 的基础上叠加接地奖励，1 可以看作偏好正确的基础分，接地分是附加分。消融显示，只加接地奖励而不加门控时受控鲁棒性提升有限，而加上门控后提升更大，说明门控对受控鲁棒性很关键。

**缺失证据恢复 × 替换类接地：** 缺失证据恢复针对模态缺失错误，要求补回被删掉的内容 mk，例如 with a restrained tone，允许同义表达所以用词级别 F1 加冻结句编码器余弦相似度打分；替换类接地针对情绪翻转、强度不匹配和证据矛盾，要求同时定位和修复，组合后四种错误类型都有各自的可验证目标，缺失类更看重语义召回，替换类更看重字面准确。

### 组相对优势和全错组救援具体怎么算

对每个提示 q，组相对策略优化采样 K 个输出，原文 K 为 4，采样温度 0.9。对 K 个奖励做组内标准化得到每个输出的标量优势，即奖励减组均值再除以组标准差加极小量，原文极小量为 10 的负 4 次方。当 K 个输出偏好全错时奖励全零，均值和标准差都为零，优势向量变成全零，没有纠正偏好的信号。动态零方差救援只处理这种全错二元偏好组：先算模型对正确答案的不确信度 u，即 1 减去正确答案在 a1 和 a2 上的归一化概率，该概率由两者的序列对数似然算得，并做停止梯度。

u 越大说明模型对正确答案越没信心。然后把标准答案加入 K 个错误输出形成救援集合，给 K 个错误输出负优势-u，给标准答案正优势+u，从而压制错误、增强正确答案。其他非全错组仍用原始组相对优势。整个目标带 KL 正则，系数 0.12，约束可训练策略不远离冻结的 Grounded SFT 参考策略，裁剪系数为 0.2。

**偏好门控接地奖励 × 动态零方差救援：** 偏好门控接地奖励指只有当偏好预测正确时才加接地分，答错偏好则总奖励为 0，保证偏好正确优先于细节写得好；动态零方差救援指当一组采样全部答错偏好导致组内奖励方差为零、优势全零时，加入标准答案并按模型对正确答案的不确信度 u 给予正负优势以恢复学习信号，两者搭配分别解决奖励主次和全错组无梯度的问题。

\[A_{j}=\frac{R_{j}-\operatorname{mean}(R_{1},\ldots,R_{K})}{\operatorname{std}(R_{1},\ldots,R_{K})+\epsilon},\qquad j=1,\ldots,K,\]

上式是组内优势的计算，目标是把绝对奖励转成组内相对好坏，标准差加极小量只是数值稳定，K 个输出共享同一组均值和标准差。

\[\widetilde{\mathbf{A}}=(\underbrace{-u,\ldots,-u}_{K\ \text{incorrect outputs}},+u),\]

上式是救援后的优势向量，前 K 个是错误输出的-u，最后一个是标准答案的+u，u 来自对正确答案概率的停止梯度估计，原文强调救援只用于全错二元偏好组，其他组保留原始优势。

### 训练数据、划分和优化设置如何复现

数据来自 EmoPrefer，开发用 EmoPrefer-Data-V2，held-out 基准用 EmoPrefer-Data，两者都按 EAPO 方式为每个更优描述扩展最多 4 个受控错误描述，因此每个视频级组包含一个更优描述、一个自然拒绝描述和最多 4 个受控变体。原文把扩展后的 V2 按视频编号分成 90% 训练和 10% 验证，防止同一来源泄漏，最终评测用 EmoPrefer-Data 测自然偏好，用其 EAPO 扩展测受控偏好、交换一致性和错误接地。基座是 Qwen2.5-Omni-7B，按 EmoPrefer 的 S2 设置同时接收辅助多模态描述、视频、音频和两个候选。Grounded SFT 从自然偏好检查点初始化，训练两轮，数据配比已在前文说明。

GA-GRPO 训练 500 步，学习率 1 乘 10 的负 7 次方，最终检查点按验证集四错误平均加权 F1 选择。实验在 8 块英伟达 RTX A6000 上完成。本研究包含神经网络训练，LoRA 参数更新，参考策略冻结，梯度经过可训练策略的输出 token，监督来自自然偏好标签和构造派生的 ek、rk、mk，以及第二阶段的可验证奖励；原文未报告随机种子和多次重复的方差，这是复现时缺的一项，需要自行补多次运行。

**Grounded SFT × GA-GRPO：** Grounded SFT 是用交叉熵模仿结构化目标的第一阶段，负责让模型学会输出格式和基本接地能力，并用 LoRA 适配器同时初始化可训练策略与冻结参考策略；GA-GRPO 是第二阶段的强化学习，直接按可验证奖励优化偏好和接地结果并带 KL 正则约束不偏离参考策略，两者分工是先学会怎么做，再按结果好坏调优。

### 评测指标、聚合方式和基线条件是什么

评测分偏好和接地两类。偏好用加权 F1，自然对报告自然集加权 F1，受控侧报告 4 类错误平均加权 F1 和候选顺序一致性，顺序一致性指交换 d1 和 d2 位置后判断是否稳定，越高说明位置偏置越小。接地用词级别 F1 衡量替换类的定位和修复，用词级别 F1 加冻结编码器余弦相似度衡量模态缺失的恢复，缺失恢复按百分比缩放；解析率指成功解析出结构化输出的比例，格式错算失败；接地总分是 3 类替换错误的定位修复平均与缺失恢复的宏平均。

基线覆盖同基座的零样本、常规监督微调、错误增强但只用偏好标签的监督微调、接地监督微调，以及更大规模的 Qwen3-Omni-30B 零样本和错误增强微调，还有 MiniCPM 加 Qwen2.5 加 Qwen3 的 3 模型融合 EAPO。比较时要注意公平条件：EmoGavel 主结果是单个 7B 裁判，而 EAPO 融合了 3 个适配裁判，自然集上融合仍略高；零样本与微调的训练数据量不同，只能说明监督的作用，不能直接说架构优劣。指标方向都是越高越好，但接地总分与缺失恢复的计算方式不同，不能跨指标直接相减排名。

### 自然偏好与受控鲁棒性各提升了多少

要回答的核心问题是自然偏好强是否等于受控错误也强，以及 EmoGavel 是否兼顾两者。下表比较 9 个裁判在自然集加权 F1、4 类受控子集、受控平均和交换一致性上的表现，单位均为百分比，数值越高越好，公平条件是同为 S2 推理设置下的不同优化策略，但模型规模和是否融合不同，读数时需分开看单模型与融合。

| Judge Configuration | Judge Configuration | Judge Configuration |  | 4 Controlled-Error Subsets | 4 Controlled-Error Subsets | 4 Controlled-Error Subsets | 4 Controlled-Error Subsets |  |  |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ID | Model | Setting / Method | Natural | Emotion Flip | Intensity Mismatch | Evidence Contradiction | Modality Omission | 4-Error Avg | Swap Cons |
| 1 | Qwen3-Omni-30B-Thinking [25] | S2 Zero-shot | 73.36 | 92.27 | 54.51 | 71.20 | 65.95 | 70.98 | 62.29 |
| 2 | Qwen3-Omni-30B-Instruct [25] | S2 Zero-shot | 73.43 | 87.06 | 52.29 | 63.49 | 77.75 | 70.15 | 54.13 |
| 3 | Qwen3-Omni-30B-Instruct | S2 Error-Aug SFT | 76.56 | 92.74 | 61.64 | 71.48 | 76.79 | 75.66 | 65.47 |
| 4 | MiniCPM [14] + Qwen2.5 + Qwen3 | EAPO [10] | 80.31 | 96.21 | 77.01 | 75.46 | 92.72 | 85.35 | 76.38 |
| 5 | Qwen2.5-Omni-7B-Instruct [24] | S2 Zero-shot | 68.65 | 83.80 | 49.30 | 51.82 | 47.59 | 58.01 | 34.96 |
| 6 | Qwen2.5-Omni-7B-Instruct | S2 SFT | 77.08 | 86.44 | 51.35 | 62.57 | 80.48 | 70.21 | 53.18 |
| 7 | Qwen2.5-Omni-7B-Instruct | S2 Error-Aug SFT | 77.15 | 94.32 | 67.13 | 68.58 | 78.49 | 77.13 | 64.41 |
| 8 | Qwen2.5-Omni-7B-Instruct | S2 Grounded SFT | 78.13 | 92.88 | 62.62 | 68.78 | 92.46 | 79.18 | 68.11 |
| 9 | Qwen2.5-Omni-7B-Instruct | EmoGavel | 79.75 | 95.90 | 83.73 | 80.70 | 92.47 | 88.20 | 81.25 |

表 1 显示，Qwen2.5-Omni-7B 零样本自然集仅 68.65%，受控平均 58.01%，交换一致性 34.96%；常规监督微调把自然集提到 77.08%，但受控平均仅 70.21%。错误增强监督微调和接地监督微调进一步把受控平均提到 77.13% 和 79.18%，说明增加受控负例主要改善受控子集。EmoGavel 达到自然集 79.75%、受控平均 88.20%、交换一致性 81.25%，是单模型裁判中三项最高，其中强度不匹配从接地微调的 62.62% 跃升到 83.73%，证据矛盾从 68.78% 到 80.70%。代价是与 3 模型融合 EAPO 相比，自然集 80.31% 仍略低 0.56 个百分点，说明融合在自然分布上仍有优势。

但 EmoGavel 在受控平均上超出 EAPO 的 85.35% 约 2.85 个百分点，且只用单个 7B 模型，推理成本更低。限制是这些提升只在 EmoPrefer-Data 及其 EAPO 扩展上验证，是否泛化到更自然、非预设的错误类型，原文未评测。

### 只会选对能否自动会指错，接地分数说明什么

第二个问题是偏好正确是否意味着能定位和修正错误。下表在同一 7B 基座下比较 5 种训练策略的解析率、3 类替换错误的定位与修复词级别 F1、模态缺失的证据恢复分数，以及自然偏好、受控平均和接地宏平均，单位均为百分比，越高越好，比较条件是相同基座和相同评测集，区别只在是否加入受控偏好标签或接地监督。

| Qwen2.5-Omni-7B-Instruct | Qwen2.5-Omni-7B-Instruct | Emotion Flip | Emotion Flip | Intensity Mismatch | Intensity Mismatch | Evidence Contradiction | Evidence Contradiction | Modality Omission | Overall | Overall | Overall |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Variant | Parse | Loc. | Rep. | Loc. | Rep. | Loc. | Rep. | Evid. Recovery | Natural | 4-Error Avg | Grounding |
| Zero-shot | 87.00 | 27.09 | 25.45 | 48.33 | 39.66 | 49.24 | 46.30 | 18.70 | 68.65 | 58.01 | 34.18 |
| SFT | 90.06 | 31.19 | 30.20 | 60.42 | 53.31 | 52.76 | 51.68 | 26.78 | 77.08 | 70.21 | 41.64 |
| Error-Aug SFT | 91.51 | 35.12 | 34.50 | 62.66 | 57.56 | 56.81 | 55.04 | 29.61 | 77.15 | 77.13 | 45.11 |
| Grounded SFT | 89.73 | 78.43 | 78.21 | 78.29 | 75.42 | 72.29 | 72.24 | 63.91 | 78.13 | 79.18 | 72.84 |
| EmoGavel | 98.42 | 92.39 | 92.37 | 80.14 | 78.42 | 76.30 | 75.97 | 62.51 | 79.75 | 88.20 | 77.27 |

偏好-only 训练的接地能力有限，常规监督微调定位修复多在 30% 到 60% 之间，错误增强后也仅到 35% 到 62%，缺失恢复不到 30%，而接地监督微调把定位修复拉到 72% 到 78%，缺失恢复到 63.91%，接地总分 72.84%。GA-GRPO 进一步把接地总分提到 77.27%，解析率从 89.73% 提到 98.42%，情绪翻转定位修复均超 92%。反例是模态缺失恢复从 63.91% 降到 62.51%，说明当前奖励对替换类定位修复更友好，对缺失恢复的语义多样性照顾不足，论文也在分析中承认这一不平衡。此外，结论正文有一处把接地总分写成 72.27%，与表格的 77.27% 不一致，应以表格为准。未胜出项是零样本的缺失恢复仅 18.70%，提示没有显式监督时模型几乎不会补证据。

### 门控、救援和接地奖励各自贡献了什么

消融要回答接地奖励、动态救援和偏好门控是否互补。下表以接地监督微调为起点，逐步加入香草组相对策略优化、接地奖励、动态救援和偏好门控，报告自然集、受控平均和接地总分，单位为百分比，越高越好，所有行共享同一基座和同一验证选点规则，最终检查点按验证集四错误平均选择。

| Variant | Natural | 4-Error Avg | Grounding |
| --- | --- | --- | --- |
| Vanilla GRPO | 78.53 | 81.13 | 72.73 |
| + Grounding Reward | 78.38 | 81.53 | 76.32 |
| + Grounding Reward + Dynamic Rescue | 79.03 | 82.11 | 78.12 |
| + Grounding Reward + Preference Gate | 78.88 | 85.62 | 76.99 |
| GA-GRPO (Full) | 79.75 | 88.20 | 77.27 |

香草组相对优化只用偏好奖励时，受控平均从 79.18% 到 81.13%，接地总分几乎不动，从 72.84% 到 72.73%，说明偏好奖励不足以改善接地。加入接地奖励后接地总分到 76.32%，但偏好变化很小。动态救援把接地总分进一步推到 78.12%，是接地单项最高；偏好门控则把受控平均推到 85.62%，是偏好鲁棒性更大的来源。两者结合的完整版达到自然集 79.75%、受控平均 88.20%、接地 77.27%，偏好最强而接地略低于只加救援的 78.12%，说明门控在压制偏好错误的同时可能牺牲少许缺失恢复的多样性。限制是消融只报告单次选择的检查点，没有方差和显著性，救援中 u 的量级与 KL 系数的交互也未展开，复现时应补多次种子和学习曲线。

### 结论在什么条件下成立，还有哪些没测

现有证据支持的结论是有边界的。第一，所有主结果都在 EmoPrefer-Data 及其 EAPO 扩展上取得，训练验证按视频编号划分，测试是 held-out 基准，但错误类型仍是 4 种预设的受控错误，论文未来工作也明确要扩展到更自然、对应关系不那么显式的错误，因此不能把 88.20% 受控平均直接推广到真实开放错误。第二，接地总分是替换类词级别 F1 与缺失类 F1 加余弦相似度的宏平均，不同子指标量纲和难度不同，总分提升不代表每一类都提升，模态缺失恢复下降就是反例。

第三，自然集上 3 模型融合仍高于单模型，说明规模和集成仍是有效手段，EmoGavel 的优势在于单模型下的受控鲁棒性和顺序一致性。第四，原文未测量误判率分布、推理延迟和训练成本对比，不能承诺这些会改善，8 卡 A6000、500 步强化学习和 K 为 4 的采样开销是实际代价。缺证据不等于技术缺陷，只是尚未验证的范围，相关提升也不等于因果上的普遍规律。

### 复现第一步做什么，需要哪些关键设置

复现先从数据和基座对齐做起。按 EAPO 方式为 EmoPrefer-Data-V2 每个更优描述生成 4 类受控错误，保留改动前后的片段对应以得到 ek、rk、mk，并按视频编号划分 90% 训练和 10% 验证；评测用 EmoPrefer-Data 及其扩展，指标按原文用加权 F1、交换一致性、词级别 F1 和冻结编码器余弦相似度，缺失恢复注意按百分比缩放。模型用 Qwen2.5-Omni-7B 的 S2 设置，输入含辅助多模态描述、视频、音频和两个候选。

先跑自然偏好检查点，再做两轮接地监督微调，二元与结构化各半、结构化在 4 类间均衡、0.5 概率交换候选顺序，LoRA 秩 8、缩放 16、丢弃 0.05，学习率分别为 5 乘 10 的负 6 次方和 2.5 乘 10 的负 6 次方。然后用该适配器初始化可训练与参考策略，做 500 步 GA-GRPO，K 为 4、温度 0.9、学习率 1 乘 10 的负 7 次方、alpha 和 beta 均为 0.25、KL 系数 0.12、裁剪 0.2，按验证集四错误平均选点。关于资源公开，原文只写代码和检查点将在接收后发布，本次未发现可验证的公开链接，因此不能说已开源或可下载，这是三件不同的事：论文提到、代码可运行、权重可下载需分开确认。

### 什么时候值得尝试，还需补哪项验证

当任务是成对偏好且部分负例可通过可控改写获得明确答案时，值得尝试 EmoGavel 的思路：先把构造过程的对应关系变成定位与修复目标做监督微调，再用偏好门控的接地奖励做强化学习，并对全错组做救援以保住偏好正确。复现第一步是重建 4 类受控对及其 ek、rk、mk 并对齐 S2 输入，而不是直接调强化学习超参数。还需要补的验证包括更自然错误的泛化、多次种子的方差、缺失恢复与替换修复的奖励平衡，以及融合与单模型在相同算力下的对比。

容易产生的误解是把受控平均的高分当成整体情感理解的提升，实际上它只说明对预设错误的辨别和接地变强；另一个误解是把门控理解为偏好不重要，恰恰相反，门控是偏好错则 0 分，偏好正确才是拿接地分的前提。回到研究生可复述的关键步骤：区分自然对与受控对，定义 ek、rk、mk，统一格式做接地微调，再按偏好奖励、接地奖励、门控总奖励和组内优势加救援做优化，最后在自然偏好、受控平均、交换一致性和接地总分上分别报告并说明适用条件。

<details>
<summary>📎 论文与评分元数据</summary>

排名：前50% | 文档类型：方法研究 | [arXiv 原文](https://arxiv.org/abs/2610.13353v1)

</details>

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。

- 评分规则：type-aware-v1

- 评分模型：muse-spark-1.3-contributor

- 评分请求协议：openai_responses

---

[← 返回 2026-10-15 语音/音乐/音频论文速递](/audio-paper-digest-blog/posts/2026-10-15/)
