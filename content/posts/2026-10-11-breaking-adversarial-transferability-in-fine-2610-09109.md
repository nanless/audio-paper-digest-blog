---
title: "Breaking Adversarial Transferability in Fine-Tuned Speech Recognition"
date: 2026-10-11
draft: false
tags: [语音识别, 对抗训练, 对抗鲁棒性, 多语言]
categories: [论文速递]
description: "针对公开基座上算出的扰动能直接拖垮私有微调语音识别的问题，论文把防御集中到基座来源的可迁移方向上，用基座扰动训练、隐层位移约束和混合梯度扰动，把平均对抗词错误率从 92.6 降到 27.8，干净词错误率则从 16.4 升到 18.9。"
hiddenInHomeList: true
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_arxiv_id: "2610.09109"
paper_digest_workbench_contract: "researcher-workbench-v1"
paper_digest_reader_title: "公开语音基座打得到自家微调模型：TransferBreaker 怎样切断对抗迁移"
paper_digest_original_title: "Breaking Adversarial Transferability in Fine-Tuned Speech Recognition"
paper_digest_arxiv_version: 1
paper_digest_arxiv_versioned_id: "2610.09109v1"
paper_digest_arxiv_abs_url: "https://arxiv.org/abs/2610.09109v1"
paper_digest_arxiv_pdf_url: "https://arxiv.org/pdf/2610.09109v1.pdf"
paper_digest_primary_task: "语音识别"
paper_digest_tags_contract: "paper-tag-flat-tags-v2"
paper_digest_tags_selection_contract: "paper-tag-selection-v2"
paper_digest_tags_registry_version: "paper-tag-catalog-v2"
paper_digest_tags_registry_sha256: "0a0847314ab2059d95efac33376414498e598a1f02a1486869bee0efc481d1f7"
paper_digest_tags_concepts: [{"facet":"task","id":"task.asr","label":"语音识别"},{"facet":"method","id":"method.adversarial-training","label":"对抗训练"},{"facet":"research_focus","id":"research_focus.adversarial-robustness","label":"对抗鲁棒性"},{"facet":"setting","id":"setting.multilingual","label":"多语言"}]
paper_digest_primary_method: "对抗训练"
paper_digest_score: 7.1
paper_digest_rank_bucket: "前50%"
paper_digest_document_type: "方法研究"
paper_digest_one_sentence: "针对公开基座上算出的扰动能直接拖垮私有微调语音识别的问题，论文把防御集中到基座来源的可迁移方向上，用基座扰动训练、隐层位移约束和混合梯度扰动，把平均对抗词错误率从 92.6 降到 27.8，干净词错误率则从 16.4 升到 18.9。"
paper_digest_authors: [{"affiliations":["Idiap Research Institute","École Polytechnique Fédérale de Lausanne (EPFL)"],"name":"Mojtaba Nafez"},{"affiliations":["Department of Computer Engineering","Sharif University of Technology"],"name":"Aref Mousavi"},{"affiliations":["Department of Computer Engineering","University of Isfahan"],"name":"Mohammad Ebrahim Mahdavi"},{"affiliations":["Department of Computer Engineering","Sharif University of Technology"],"name":"Mobina Poulaei"},{"affiliations":["Department of Computer Engineering","Sharif University of Technology"],"name":"Kiarash Kiani Feriz"},{"affiliations":["Department of Computer Engineering","Sharif University of Technology"],"name":"Mohammad Hossein Rohban"}]
paper_digest_abstract_sha256: "208b9f11846f7e49b0abcc748f6e31a411577cccd683bdcf31d6a1a3fe5b559b"
paper_digest_sidecars: {"citation.bib":{"sha256":"249caa732d9e3d21fc46b89b87fd7e8c7942e640ac486e12fa93b1e7b43baedb","url":"/audio-paper-digest-blog/data/papers/2026-10-11/2610-09109/citation.bib"},"citation.json":{"sha256":"cd47e5c7d875c2c961aa87c3e97a70fa29b8f8536d92483d807518a0c720018a","url":"/audio-paper-digest-blog/data/papers/2026-10-11/2610-09109/citation.json"},"citation.ris":{"sha256":"6bc652206f72a2fd4d11a0658edb5fc46e3947e9bffc7233af061b4e96e8007b","url":"/audio-paper-digest-blog/data/papers/2026-10-11/2610-09109/citation.ris"},"rethink-context.json":{"contract":"paper-research-context-v2","sha256":"e510295f1b2813464b3af90ad61442209005172bb9250e5d799095528af46962","url":"/audio-paper-digest-blog/data/papers/2026-10-11/2610-09109/rethink-context.json"}}
paper_digest_api_reader_contract: "beginner-researcher-v3"
paper_digest_api_reader_article_sha256: "492278f1784ec500b9890262533bbf09c13eb6c97c713b14250bd806486204e7"
paper_digest_api_reader_plan_sha256: "db1b0c0380e088edcfdd2c22652a31d36533aa38fd04c0f733b02dd7fcbe6708"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings-v4"
paper_digest_api_reader_source_bindings_sha256: "fc64c6de48b70df6c99ff6e0ab3b95a9b5e12047edbaa7420b375b0f1e6e4fd3"
paper_digest_api_reader_source_table_count: 4
paper_digest_api_reader_source_formula_count: 4
paper_digest_api_reader_structured_artifacts_sha256: "fca58345e3672b31cbb2d6f4071bd8db8e4b23f120c764255f7a48dab184831a"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity-v1"
paper_digest_api_reader_author_identity_sha256: "909abf66d7db3d893be6ca977a7483030a0ce785e7dce54faf2c20412a6d306a"
paper_digest_api_reader_author_count: 6
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity-v1"
paper_digest_api_reader_resource_identity_sha256: "cfe609d2c5aa07346244674da0d3fa5973e259dc58e5550af63362a8f17ac7fb"
paper_digest_api_reader_resource_count: 0
paper_digest_api_reader_figure_persistence: "ephemeral-no-persisted-figure-assets-v1"
paper_digest_api_reader_decision_projection: "api-reader-decision-projection-v2"
---

# 📄 公开语音基座打得到自家微调模型：TransferBreaker 怎样切断对抗迁移

> 英文题目：*[Breaking Adversarial Transferability in Fine-Tuned Speech Recognition](https://arxiv.org/abs/2610.09109v1)*

> 标签：#语音识别 | #对抗训练 | #对抗鲁棒性 | #多语言
>
> 评分：**7.1/10** | 创新 1.5/2 | 技术严谨 1.2/1.5 | 实验充分 1.3/1.5 | 清晰度 0.8/1 | 影响力 1/1.5 | 开源 0/1.5 | 可复现 0.3/0.5 | 工程/实践 1/1.5


## 👥 作者与机构

- Mojtaba Nafez：Idiap Research Institute；École Polytechnique Fédérale de Lausanne (EPFL)
- Aref Mousavi：Department of Computer Engineering；Sharif University of Technology
- Mohammad Ebrahim Mahdavi：Department of Computer Engineering；University of Isfahan
- Mobina Poulaei：Department of Computer Engineering；Sharif University of Technology
- Kiarash Kiani Feriz：Department of Computer Engineering；Sharif University of Technology
- Mohammad Hossein Rohban：Department of Computer Engineering；Sharif University of Technology

## 📌 核心摘要

自动语音识别（Automatic Speech Recognition，ASR）把输入音频波形转写为可变长文本序列，本文研究公开基座被微调为私有目标模型后，对抗扰动从基座向目标迁移的问题。攻击者在基座上用白盒梯度优化不可察觉扰动，零查询地直接施加到目标模型，导致转写质量崩溃。TransferBreaker在微调时先做基座对抗微调，它以干净语音为输入只用固定的基座梯度生成扰动，得到对准攻击者实际方向的对抗样本用于更新目标模型。接着混合梯度对抗微调在迭代攻击中由基座梯度逐步过渡到基座与目标梯度组合，生成第二类对抗样本并与前一步样本混合输入训练，覆盖可迁移的基础方向。隐空间雅可比正则项（Latent Jacobian Regularization，LJR）再以冻结基座对干净语音的编码输出为锚点，约束目标模型对上述扰动语音的隐表示向其靠拢，并与对抗微调损失联合优化。在多语言多骨干平均结果上，基座迁移攻击把微调模型的词错误率（Word Error Rate，WER，越低越好）从16.4%推高到92.6%，TransferBreaker将其降到27.8%。该结论适用于27 dB信噪比约束的数字式、样本特定、非目标攻击，对目标式攻击、物理信道播放和更强白盒攻击尚未验证。原文披露单卡RTX-4090上本文方法训练时间显著高于标准对抗微调，推理阶段无额外开销。

## 🔗 开源与复现资源

本次未形成可展示的已核验资源记录，开放状态尚未核实。

可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 这篇论文担心什么样的语音部署方式

很多团队做语音识别不会从零训练，而是拿公开的 Whisper、wav2vec2、MMS 这类基座，再用波兰语、葡萄牙语、阿拉伯语等自家数据微调，然后以不公开参数和梯度的黑盒服务上线。论文的起点是这种部署直觉并不可靠。攻击者根本不需要查询你的服务，只要在公开基座上用白盒梯度给一段语音加一点细微扰动，再把同一段音频交给你的微调模型，转写质量就会断崖式下跌。

论文把输入明确为一段波形和它的正确文字，输出是模型给出的变长文字序列，评价用词错误率和字错误率，越低越好。对刚入门的读者，关键是把这件事理解成血缘带来的迁移。微调并没有把模型带到很远的地方，基座上的脆弱方向在目标上还留着。论文还强调语音比图像分类更难。Whisper 这类自回归模型要逐词生成很长的序列，每个位置都是几万词表上的分类，扰动一旦把前面带偏，后面会连锁错下去。

词错误率能超过 100%，是因为多出来的插入词也会被计数，并不是计算写错了。

### 已有防御为什么在这个场景下不够用

此前的语音对抗研究已经证明白盒和黑盒攻击都存在，也有跨模型迁移的零星报告，但系统研究公开基座到它的微调后代之间迁移的工作很少，尤其缺少在现代大模型上的证据。防御一边主要有两条路线。一是输入前处理，比如加降噪、扩散净化，论文在附录里对比发现它们要么让干净语音掉点严重，要么根本挡不住迁移来的扰动。

二是标准对抗微调，也就是训练时用当前目标模型自己算最坏扰动再混进去训练，它在白盒意义下最强，但论文认为它在这个威胁下过于保守。它要求模型对整个扰动球里的所有方向都鲁棒，对长序列大词表任务来说约束太多，优化负担重，实际对基座来源的攻击反而防得一般。论文的差异正在于不追求全空间白盒鲁棒，而是利用攻击者只能用基座算扰动这个先验，把防御集中到真正会被用的方向上。

### 攻击者能做什么，不能做什么

论文先把最核心的零查询迁移威胁讲清楚。攻击者拥有公开基座的全部参数和梯度，可以在感知约束下对每条语音单独优化一个无目标扰动，目标是让基座的训练损失变大，表现为转写错误变多。约束不是固定的范数半径，而是要求信噪比不低于 27 dB，训练时为了省步数放宽到 22 dB，评测统一用 27 dB。攻击者全程不查询目标模型，不做适配，直接把在基座上做好的含扰动音频搬到目标上，如果目标的词错误率也跟着大涨，就算攻击成功。

更强的自适应攻击者还知道防御者用了 TransferBreaker，会自己拿另一份数据照着同样流程练一个替代模型，再用替代模型算扰动来打目标。这已经非常接近白盒，但论文仍把它和直接在目标上算梯度的真白盒区分开。替代模型用的是 Multilingual LibriSpeech 这类公开数据，与目标的 Common Voice 私有训练分布不同，用来模拟攻击者拿不到私有数据的情况。

**基座模型 × 目标模型：** 基座模型是公开可下载的原始语音识别模型，攻击者能拿到参数和梯度；目标模型是机构拿基座再用自家语音微调后私有部署的模型，攻击者不能直接访问。两者血缘相近，对基座有效的扰动方向在目标上仍大概率有效，防御必须围绕这对关系设计。

### TransferBreaker 的整体训练流程是什么

TransferBreaker 不是推理时加模块，而是一套微调流程。起点是目标模型参数从基座复制过来，基座随后冻结不再更新。每一批训练语音会走 3 条损失。一是干净语音上的正常任务损失，Whisper 用交叉熵，wav2vec2 和 MMS 用 CTC。二是对抗语音上的任务损失，对抗语音的扰动以一半概率取自基座扰动，以一半概率取自混合梯度扰动。

三是隐层约束项，要求目标在对抗音频上的编码器输出靠近冻结基座在干净音频上的编码器输出。三项按系数加权，论文默认对抗损失系数为 4，隐层约束系数为 2.5。扰动生成用带动量的投影梯度下降，训练时走 10 步，评测用自适应的 Advance-PGD 走 50 步。下面这张框架图把左右两边分得很清楚，左边是两种扰动怎么算，右边是一次训练迭代里数据和损失怎么流动。读图时先看箭头主路，再看冻结和可训练的区别，就不会把梯度走错地方。

> **看图路径：** 1. 先沿左侧两条扰动生成回路看梯度来自哪个模型；2. 再看右侧训练环里干净损失、对抗损失和隐层约束如何汇入加权总损失；3. 注意底部图例对可训练与冻结模块的区分

[![原论文 Figure 2：The TransferBreaker Framework.](https://arxiv.org/html/2610.09109v1/main_figure.png)](https://arxiv.org/html/2610.09109v1/main_figure.png)

*论文图 2。原论文 Figure 2:：“The TransferBreaker Framework. Left: Adversarial perturbation generation, including Base Perturbation (Δ_base) and HybridGrad Perturbation (Δ_hybrid), where the latter combines…”。*

从输入到输出走一遍就是这样。一条波形先被复制成干净版和待加扰动版，扰动按伯努利抽样二选一，得到对抗波形。干净波形经过冻结基座取出隐层参考，对抗波形经过可训练目标取出隐层和文字输出。最后把干净文字损失、对抗文字损失、隐层距离三者加起来反传，只更新目标参数，基座参数不动，扰动在外层更新时也被截断不再求导。图中左侧上方是只用基座梯度迭代更新扰动的回路，下方是同时用基座和目标梯度加权混合的回路。

右侧把干净输入、加扰动输入分别送入冻结基座和可训练目标，再把 3 路损失加权求和。底部图例用不同图标区分可训练、冻结和投影梯度循环，读图时可以对照着看梯度从哪里来、到哪里去。

### 只练基座扰动的 Base-AFT 在算什么

Base-AFT 的想法很直接。既然攻击者只会用基座算扰动，防御训练时也就只练基座算出来的扰动。做法是基座冻结，用动量投影梯度下降对每条训练语音算一个让基座损失最大的扰动，加到波形上，再要求目标在这段对抗语音上损失尽量小，同时不丢干净语音的准确率。论文用 1 阶泰勒展开解释为什么这比标准对抗微调更聚焦。基座扰动近似沿着与基座输入梯度内积最大的单位方向，防御目标就变成在干净损失之外，再压住目标输入梯度在这个基座方向上的投影。

而标准对抗微调近似要压住目标输入梯度的整个范数，也就是所有方向都要小。前者是子空间约束，后者是全空间约束，在语音这种复杂序列任务上后者更容易把模型管得太死。打个比方，Base-AFT 是拿对方手里那根矛来练盾，盾只需要挡住这个方向。标准做法是假设对方有无数根矛，要求盾哪个方向都挡，结果每一面都要加厚，反而跑不动。论文的消融显示只用 Base-AFT 就已经比标准对抗微调更能挡基座迁移攻击，但它对自适应替代模型的攻击还不够，这就引出后面两招。

**Base-AFT × Standard-AFT：** Standard-AFT 是每一步都用正在训练的目标模型自己算最坏扰动再拿来训练，追求全空间白盒鲁棒；Base-AFT 是固定用冻结的公开基座算扰动再拿来练目标，只求对基座来源的迁移扰动鲁棒。前者约束面太宽，后者把训练集中在攻击者真正会用的子空间上。

攻击者在基座上求的扰动形式如下，符号含义是 x 为波形，y 为正确文字，扰动范数受限：

\[\delta_{\mathrm{base}}=\arg\max_{\|\delta\|_{p}\leq\epsilon}\mathcal{L}_{b}(x+\delta,y)\,.\]

防御者要最小化的就是目标在这种基座扰动下的期望损失，期望是对训练语音取的，优化变量是目标参数：

\[\min_{\theta_{t}}\mathbb{E}_{(x,y)}\left[\mathcal{L}_{t}(x+\delta_{\mathrm{base}},y)\right]\,.\]

作为对照，标准对抗微调的内外层优化是先在目标上找最坏扰动再最小化它，形式上多了一层对扰动的取最大值：

\[\min_{\theta_{t}}\mathbb{E}_{(x,y)}\left[\max_{\|\delta\|_{p}\leq\epsilon}\mathcal{L}_{t}(x+\delta,y)\right]\,.\]

### 隐层约束为什么要锚定冻结基座

论文观察到一个现象。在只用 Base-AFT 的目标上，某条语音的对抗字错误率越高，它在目标隐层里干净版和对抗版的距离往往也越大。下面这张散点图就是为这个动机服务的。横轴是干净到对抗的隐层均方根距离，纵轴是对抗字错误率，每个点是一条评测语音，虚线是回归拟合，左右两块面板分别是不同骨干，走向都是右上。这说明只靠文字损失还压不住隐层位移，有必要显式约束隐层。

做法是把冻结基座在干净语音上的隐层当固定靶，要求目标在对抗语音上的隐层向它靠拢，用均方距离除以隐层元素数来平均。之所以不用目标自己的干净隐层当靶，是因为两边都可训练时容易坍缩到平凡解，而冻结基座既避免了这个问题，又和基座到目标的迁移威胁天然对齐。

> **看图路径：** 1. 先看横轴干净到对抗的隐层距离与纵轴对抗 CER 的走向；2. 再对比左右两块不同骨干上散点与虚线拟合是否同向；3. 注意每个点是一条评测语音，不是模型平均值

[![原论文 Figure 3：Motivation for Latent Jacobian Regularization.](https://arxiv.org/html/2610.09109v1/LJR_figure.png)](https://arxiv.org/html/2610.09109v1/LJR_figure.png)

*论文图 3。原论文 Figure 3:：“Motivation for Latent Jacobian Regularization.”。*

这张散点图左为 Whisper Medium，右为 Wav2Vec2 Large XLSR，横轴为干净到对抗的隐层距离，纵轴为对抗字错误率百分比，蓝色点为评测样本，橙色虚线为拟合。可见距离越大错误率整体越高，支持在训练里显式压住隐层位移的假设，但它本身没有证明压住位移就一定降低错误率，还需要后面的消融来验证。读图时不要把散点当成模型平均，每个点的横纵坐标都来自同一条语音，回归线只是提示正相关，不是因果证明。

隐层约束的具体形式是目标对抗隐层减去基座干净隐层的平方距离平均，d 为参与比较的隐层元素数：

\[\mathcal{L}_{\mathrm{LJ-Regularization}}=\frac{1}{d}\,\big\|h_{t}(x+\delta)-h_{b}(x)\big\|_{2}^{2}\,.\]

论文还把它的外层梯度拆成两部分来理解。一部分是带停止梯度的自不变更新，也就是让对抗隐层向当前目标干净隐层靠但不反传到干净分支。另一部分是由干净漂移决定的修正项，漂移指目标干净隐层已经偏离基座干净隐层的那部分。初始化时两者重合，修正为零。微调越久漂移一般越大，冻结基座的牵引就越重要。附录用方向隐层敏感度进一步佐证，加了该约束后扰动方向上的雅可比能量明显下降。

**隐层表示 × Latent Jacobian Regularization：** 隐层表示是编码器输出的连续向量，转写头靠它解码；Latent Jacobian Regularization 要求目标模型在对抗音频上的隐层去靠近冻结基座在干净音频上的隐层，距离越小越好。它不只看最终文字错几个字，而是直接压住扰动在隐层里引起的位移，补上只练文字损失压不住的部分。

### 混合梯度扰动如何补上自适应攻击的缺口

只用基座扰动加隐层约束后，基座直接打过来的攻击基本被压住，但攻击者自己照着防御流程练一个替代模型再打过来，成功率又上去了。因为替代模型和目标流程相同、起点相同，两者共享的脆弱方向比基座和目标之间更多。论文的 HybridGrad-AFT 就是为这种可迁移方向准备的。每次扰动迭代里同时算基座梯度和目标梯度，各自按 L1 归一化后加权相加再进入动量，权重随迭代从偏基座逐渐滑向偏目标，默认混合比为 0.5。

这样早期的扰动保证在基座上有效，后期又向目标的弱点靠拢，最终得到两边都有效的扰动，训练时练它就等于提前练了最可能被迁移利用的那块子空间。论文强调这不是宣称找回全部根本扰动集合，而是给优化加了一个偏向可迁移区域的倾向。训练时基座扰动和混合扰动按伯努利概率二选一，而不是每次两种都用，这样几乎省下一半的扰动生成开销，鲁棒只差一点。

**HybridGrad × 自适应攻击：** 自适应攻击是攻击者知道防御做法，自己照着同样流程在另一份数据上练一个替代模型再迁移打目标；HybridGrad 是在一次扰动迭代里把基座梯度和目标梯度按进度加权混合得到的扰动方向。前者逼出比单纯基座攻击更接近目标的弱点，后者提前把这类两边都有效的可迁移方向练进去。

### 训练时梯度从哪里来，到哪里去

复现时最容易搞错的是谁冻结、谁更新、梯度穿过哪里。基座全程冻结，不建优化器状态，只提供前向的隐层参考和扰动用的输入梯度。目标全程可训练，编码器输出同时用于隐层约束，解码或 CTC 头用于文字损失。扰动生成是内层循环，基座扰动只对基座求输入梯度，混合扰动对基座和目标各求一次输入梯度再混合，扰动本身在送入外层损失时做截断，不再对扰动求导。

外层反传只更新目标参数，隐层约束里基座分支不反传，目标干净分支在冻结基座版本里也不作为可优化的靶。超参数按论文默认是训练信噪比 22 dB、10 步、步长为预算的 0.25 倍、动量 0.9，伯努利概率 0.5，对抗系数 4，隐层系数 2.5，优化器为 AdamW，学习率 1e-5，4 个轮次，10% 线性热身后线性衰减。编码器输出是加约束的位置，不同架构都统一在这里比较。训练代价明显高于普通微调，论文报告在单张 RTX-4090 上每轮次比标准对抗微调慢约 1.8 倍，显存多出约 1 到 3 GB，但推理时没有额外开销。

缺少多次随机种子的方差报告，复现时至少要固定种子并记录单次结果的波动。

### 数据模型和评测条件是怎么对齐的

实验用 Common Voice 24 的葡萄牙语、波兰语、阿拉伯语 3 个子集，兼顾语系和文字差异，每语约 30 小时训练、约 4 小时测试，训练 4 个轮次。骨干覆盖 Whisper-Medium、Wav2Vec2-Large-XLSR、MMS-1B 和 Whisper-Large-V3-Turbo，前者是自回归编码器解码器，吃对数梅尔谱，后两者是非自回归，吃原始波形，损失也分别对应交叉熵和 CTC。评测分干净和迁移对抗两种，对抗音频一律在基座上用 Advance-PGD 生成，50 步，信噪比 27 dB，再原样搬到目标上打分，基线和本方法用同一套训练和评测配置。

自适应评测的替代模型用 MLS 数据按同样流程训练，与目标训练分布不同，以模拟攻击者拿不到私有数据的情况。指标方向都是越低越好，干净看保了多少可用性，对抗看挡了多少迁移。举例来说，阿拉伯语 Whisper-Medium 这类难例在普通微调下被打得更惨，但论文主要用 4 模型三语言的平均数来说明迁移不是偶发，读数时要分清平均数和单点难例。

**WER × CER：** WER 是按词算的编辑距离除以参考词数，CER 是按字算的编辑距离除以参考字数，两者都是越低越好。语音里一个词错可能连带多个字错，自回归模型还可能空转出大量插入词，所以论文同时报告两者，WER 超过 100% 并不代表算错。

### 基座打过来的扰动有多强，新方法挡住多少

先看威胁本身有多严重。跨语言和模型的平均数显示，普通微调模型在干净语音上表现尚可，一旦换成基座上做好的对抗音频，词错误率和字错误率都涨到几乎不可用的水平。标准对抗微调能部分缓解，但对抗词错误率仍然很高，干净性能也有损失。TransferBreaker 把对抗词错误率和字错误率进一步压低，干净损失反而比标准对抗微调小一些。下面的表把这组平均数按干净与对抗、词与字拆开，比较条件一致，都是同一评测流程下的平均，指标方向越低越好。

读数时注意这是 4 模型三语言的平均，具体到某些难例会被打得更惨，但平均数已经足够说明迁移不是偶发。下面这张柱状图比较普通微调与本方法在波兰语和葡萄牙语上的干净与迁移对抗词错误率。每个语言内左侧为普通微调，右侧为本方法，实色条为干净，斜线条为对抗，纵轴为百分比越低越好。若斜线条远高于实色条说明迁移成功，若右侧斜线条明显低于左侧斜线条说明防御起效。

> **看图路径：** 1. 先看每组左侧实色干净条与右侧斜线扰动条的高度差；2. 再对比同一语言下 FT 组与 Ours 组斜线条的下降幅度；3. 注意纵轴是 WER 百分比，越高代表转写崩得越厉害

[![原论文 Figure 1：Adversarial Transferability from Base to Fine-Tuned ASR Models.](https://arxiv.org/html/2610.09109v1/motivation_fig.svg)](https://arxiv.org/html/2610.09109v1/motivation_fig.svg)

*论文图 1。原论文 Figure 1:：“Adversarial Transferability from Base to Fine-Tuned ASR Models.”。*

从像素可见，波兰语普通微调的三根斜线条都在 80% 以上，而本方法三根斜线条压到 24.8% 以下。葡萄牙语普通微调斜线条最高超过 100%，本方法压到 32.7% 以下，而实色干净条只小幅抬高。这与平均数表格是一致的。干净小幅掉点，对抗大幅回落，而且在不同骨干上都成立。

以下第一张表比较在基座迁移攻击下 3 种训练策略的鲁棒差距，条件是相同评测扰动和相同平均范围，指标越低越好。

| 条件 | 指标 | 普通微调 | 标准对抗微调 | TransferBreaker |
| --- | --- | --- | --- | --- |
| 对抗语音 | 词错误率 | 92.6 | 42.8 | 27.8 |
| 对抗语音 | 字错误率 | 48.3 | 16.4 | 9.0 |

对抗条件下的对比显示了收益与边界。本方法相对普通微调下降约 64.8 个词错误率百分点，相对标准对抗微调也有约 15 个百分点的优势，字错误率同样最低。但这只是基座直接攻击下的结论，自适应攻击下差距会缩小，绝对值也更高，不能把这张表的数字直接推广到替代模型攻击。

以下第二张表比较为换鲁棒付了多少干净代价，条件与上表相同的平均范围，指标越低越好。

| 条件 | 指标 | 普通微调 | 标准对抗微调 | TransferBreaker |
| --- | --- | --- | --- | --- |
| 干净语音 | 词错误率 | 16.4 | 20.3 | 18.9 |
| 干净语音 | 字错误率 | 4.3 | 5.7 | 5.2 |

干净代价的对比呈现了权衡。干净词错误率从 16.4% 升到 18.9%，字错误率从 4.3% 升到 5.2%，说明鲁棒是以可用性为代价的，但本方法的干净代价小于标准对抗微调。这符合对抗鲁棒里常见的准确率与鲁棒权衡，不能理解成免费提升，低资源语言或对干净要求极高的场景要另行权衡。

### 三个组件各自补了哪块短板

论文把组件拆得很细。只看基座扰动的作用，Base-AFT 在基座攻击下全面好于标准对抗微调，而且把标准做法的轮次从 4 翻到 8 也追不上，说明差距不是训练步数不够，而是目标函数本身不对路。隐层约束是纯加分项，去掉它对抗词错误率在三语三骨干上都回升，方向敏感度能量也更高。把它换成用目标自己干净隐层当靶的自不变版本，效果不如用冻结基座当靶，证明锚定公开基座是有信息量的。

混合梯度是为自适应攻击准备的，4 路消融显示加上它后替代模型攻击的词错误率大幅下降，但在基座攻击上会略有回吐，而隐层约束能把这部分回吐追回一些，所以完整版是在两种攻击之间取平衡，而不是在每个单项上都最优。下面的表把平均改善拆成可比的行，便于在相同条件下对照基线与本方法。

以下第三张表比较完整方法相对普通微调的平均对抗收益，条件是相同的基座迁移评测，数值越低越好，最后一列为改善点数。

| 比较基准 | 指标 | 基线数值 | 本方法数值 | 改善点数 |
| --- | --- | --- | --- | --- |
| 普通微调 | 对抗词错误率 | 92.6 | 27.8 | 64.8 |

标题性数字只在特定攻击类型下成立。相对普通微调的 64.8 点改善是论文最常被引用的数字，字错误率同样大幅下降。但这组数字只覆盖基座直接攻击，若换成替代模型攻击，绝对词错误率会回到 40 多，优势也收窄到几个点，引用时需要同时带上攻击类型。

以下第四张表比较干净代价的相对大小，条件是相同的干净评测平均，数值越低越好，最后一列为差异点数。

| 比较基准 | 指标 | 基线数值 | 本方法数值 | 差异点数 |
| --- | --- | --- | --- | --- |
| 普通微调 | 干净词错误率 | 16.4 | 18.9 | 2.5 |

没有胜出的干净项也需要记住。本方法干净词错误率比普通微调高 2.5 个点，但比标准对抗微调低 1.4 个点，说明它在更强鲁棒的同时反而更省干净代价。混合梯度单看会让基座攻击变差一点，完整版并没有在基座攻击上打败纯 Base-AFT 加隐层约束的特化版本，它的价值在于兼顾自适应攻击。

### 哪些情况下结论会变弱或不再成立

先说最硬的边界。自适应替代模型攻击下，本方法平均词错误率仍在 43% 左右，远高于基座攻击下的 27.8%，只比标准对抗微调好几个百分点。真白盒直接在目标上算梯度时，词错误率到 50% 多，本方法与标准做法基本打平。这不是本篇独有的问题，而是接近白盒的对抗本来就难，论文也承认这是开放挑战。数据量救不了迁移。

在 ParlaSpeech 波兰语上从 30 小时加到 1000 小时，干净词错误率一路下降，对抗词错误率只降 4 到 5 个百分点，仍在 80% 附近，说明多堆数据不能替代针对性防御。不同信噪比下本方法都好于普通微调，但扰动越强绝对值越高。极低资源语言上虽仍有效，但干净基数和超参数敏感度会变化。论文也没有评估定点目标攻击，不承诺延迟和成本改善，训练还更贵。下图展示微调数据量从 30 到 1000 小时时干净与对抗词错误率的变化，左为 Whisper Medium，右为 Wav2Vec2，橙色为干净，蓝色为对抗，纵轴为百分比越低越好。

若蓝色线随数据量几乎走平而橙色线持续下降，说明堆数据不能解决迁移脆弱。

> **看图路径：** 1. 先看橙色干净曲线随数据量是否持续下行；2. 再看蓝色对抗曲线从 30 小时到 1000 小时下降是否很平；3. 注意纵轴中间有截断，上下两段刻度含义不同

[![原论文 Figure 4：Clean and base-model adversarial attack (Base-Adv) WER across different fine-tuning data sizes…](https://arxiv.org/html/2610.09109v1/more_FT_plot.svg)](https://arxiv.org/html/2610.09109v1/more_FT_plot.svg)

*论文图 4。原论文 Figure 4:：“Clean and base-model adversarial attack (Base-Adv) WER across different fine-tuning data sizes from the ParlaSpeech Polish dataset using Whisper-Medium and Wav2Vec2-Large-XLSR.”。*

从像素可见，两块面板里橙色干净曲线都明显下行，蓝色对抗曲线只轻微下探后走平，1000 小时仍处高位。这支持论文的判断。迁移脆弱是血缘结构带来的，不是数据不够，复现时不要指望只加数据就能得到鲁棒。纵轴中间有截断，读数时不要把上下两段的斜率直接比较，重点看蓝色对抗线长期停留在高位这个事实。

### 要复现第一步该做什么

先按论文的最小闭环跑通波兰语 Whisper-Medium。数据用 Common Voice 24 官方划分，训练约 30 小时，测试约 4 小时。目标从基座初始化，基座冻结。训练按 10 步动量投影梯度下降造扰动，信噪比 22 dB，伯努利 0.5 二选一，对抗系数 4，隐层系数 2.5，约束加在编码器输出，AdamW 学习率 1e-5，训练 4 个轮次。评测用 50 步自适应步长的 Advance-PGD，信噪比 27 dB，报告词错误率和字错误率，注意词错误率可超 100%。

自适应部分要另准备 MLS 数据按同样流程练替代模型，再迁移打目标。缺少的信息主要是随机种子多次重复的方差，论文因大模型对抗训练太贵没有报告误差条，复现时至少固定种子并记录单次结果的波动范围。代码方面，论文正文给了一个代码地址，本次收到的证据只说明链接可达不等于可用，具体内容以资源文档为准。模型权重方面，目前尚无法确认公开情况。完整系统方面，目前尚无法确认公开情况，不要默认下载即用。

### 什么时候值得试，还缺哪项验证

当产品是拿公开语音基座微调后私有部署，而且攻击者能拿到基座时，这套流程值得试，尤其是波兰语、葡萄牙语、阿拉伯语这类中等资源语言，因为论文在三语四骨干上都复现了同一趋势。第一步先复现基座攻击下的平均数，再补自适应攻击，最后才调混合比和两个损失系数。还需要补的验证是定点目标攻击是否同样被抑制、真实过空气播放后扰动是否还有效、长尾口音和噪声下的干净代价，以及多次种子的统计显著性。

容易误解的是把 27.8 当成白盒鲁棒，它只是基座来源迁移攻击下的平均值。把伯努利二选一当成同时用两种扰动，前者省近一半训练时间而且鲁棒只差一点。把隐层距离正相关当成因果，真正因果靠的是去掉约束后变差的消融。记住这三点，就能准确复述这篇论文的分量。

<details>
<summary>📎 论文与评分元数据</summary>

排名：前50% | 文档类型：方法研究 | [arXiv 原文](https://arxiv.org/abs/2610.09109v1)

</details>

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。

- 评分规则：type-aware-v1

- 评分模型：muse-spark-1.3-contributor

- 评分请求协议：openai_responses

---

[← 返回 2026-10-11 语音/音乐/音频论文速递](/audio-paper-digest-blog/posts/2026-10-11/)
