---
title: "A Federated Deepfake Speech Detection Method Based on Layer-Wise Center-Guided Weighting Aggregation"
date: 2026-10-02
draft: false
tags: [音频深度伪造检测, 联邦学习, 语音, 隐私保护]
categories: [论文速递]
description: "针对声码器伪造与编解码伪造分布差异大的问题，论文用本地 FedProx 加逐层按到中心距离加权的聚合做联邦伪造语音检测，最强证据是双客户端下平均等错误率降到 0.266% 接近集中联合训练，代价是仍略逊于集中训练且只验证了两客户端严重非独立同分布情形。"
hiddenInHomeList: true
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_arxiv_id: "2610.01259"
paper_digest_workbench_contract: "researcher-workbench-v1"
paper_digest_reader_title: "不共享原音频时两类伪造语音如何联合训练：按层靠近共识的联邦聚合"
paper_digest_original_title: "A Federated Deepfake Speech Detection Method Based on Layer-Wise Center-Guided Weighting Aggregation"
paper_digest_arxiv_version: 1
paper_digest_arxiv_versioned_id: "2610.01259v1"
paper_digest_arxiv_abs_url: "https://arxiv.org/abs/2610.01259v1"
paper_digest_arxiv_pdf_url: "https://arxiv.org/pdf/2610.01259v1.pdf"
paper_digest_primary_task: "音频深度伪造检测"
paper_digest_taxonomy_contract: "paper-taxonomy-flat-tags-compat-v1"
paper_digest_taxonomy_selection_contract: "paper-taxonomy-selection-v1"
paper_digest_taxonomy_registry_version: "paper-taxonomy-v1"
paper_digest_taxonomy_registry_sha256: "a3b75a149852076933ec2895de77c09c73667c8334bff046dde3b20b69ded03d"
paper_digest_taxonomy_concepts: [{"facet":"task","id":"task.audio-deepfake","label":"音频深度伪造检测"},{"facet":"method","id":"method.federated","label":"联邦学习"},{"facet":"signal","id":"signal.speech","label":"语音"},{"facet":"research_focus","id":"research_focus.privacy","label":"隐私保护"}]
paper_digest_primary_method: "联邦学习"
paper_digest_score: 6.0
paper_digest_rank_bucket: "前50%"
paper_digest_document_type: "方法研究"
paper_digest_one_sentence: "针对声码器伪造与编解码伪造分布差异大的问题，论文用本地 FedProx 加逐层按到中心距离加权的聚合做联邦伪造语音检测，最强证据是双客户端下平均等错误率降到 0.266% 接近集中联合训练，代价是仍略逊于集中训练且只验证了两客户端严重非独立同分布情形。"
paper_digest_authors: [{"affiliations":["School of Communications and Information Engineering, Nanjing University of Posts and Telecommunications, Nanjing 210003, China"],"name":"Yingjian Yu"},{"affiliations":["School of Communications and Information Engineering, Nanjing University of Posts and Telecommunications, Nanjing 210003, China"],"name":"Haiyan Guo"},{"affiliations":["School of Communications and Information Engineering, Nanjing University of Posts and Telecommunications, Nanjing 210003, China"],"name":"Tianshun Wang"},{"affiliations":["School of Communications and Information Engineering, Nanjing University of Posts and Telecommunications, Nanjing 210003, China"],"name":"Zirui Ge"},{"affiliations":["School of Communications and Information Engineering, Nanjing University of Posts and Telecommunications, Nanjing 210003, China"],"name":"Chi Liu"}]
paper_digest_abstract_sha256: "deec8d80f06b12c03bad84cf16c60ee283d1bfbb5d122dd27206ad0dff76cd31"
paper_digest_sidecars: {"citation.bib":{"sha256":"84a06379b7fc18cd90e58aa0235246482b36d1ea3925a9bb518a783f05a9137a","url":"/audio-paper-digest-blog/data/papers/2026-10-02/2610-01259/citation.bib"},"citation.json":{"sha256":"82b7f08b3171533ee093329700ff0193e6312dea78a24da2278628b007d55881","url":"/audio-paper-digest-blog/data/papers/2026-10-02/2610-01259/citation.json"},"citation.ris":{"sha256":"93b5bd26a4c6d3091fb5975be7eda5989b17ce6af1178079c46460e7c45d22b7","url":"/audio-paper-digest-blog/data/papers/2026-10-02/2610-01259/citation.ris"},"rethink-context.json":{"sha256":"c7193d7b5eafccb513eb02ab414932b7e0163a1064632fee08918ea386a3ce9a","url":"/audio-paper-digest-blog/data/papers/2026-10-02/2610-01259/rethink-context.json"}}
paper_digest_api_reader_contract: "beginner-researcher-v3"
paper_digest_api_reader_article_sha256: "36301301100c7fb4d753fe4f04e80eb2cf97656e97b68fdde054f93dab19362c"
paper_digest_api_reader_plan_sha256: "a61b163dec281c2e60164f3a3bc5c2c5ceaa8dd3ba31237ff76d61f15ff15ede"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings-v4"
paper_digest_api_reader_source_bindings_sha256: "efb679f08eee4146ccd708924af878d66f30a8ac3ec77c77144a98bf92605e7f"
paper_digest_api_reader_source_table_count: 4
paper_digest_api_reader_source_formula_count: 4
paper_digest_api_reader_structured_artifacts_sha256: "1435eeab50634edbc37742a95a869787f90dccea3591740bee8261c990857203"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity-v1"
paper_digest_api_reader_author_identity_sha256: "440169a85a214fc8121888134e726fc8687f99976ef8fd92fa4d94e4c9818104"
paper_digest_api_reader_author_count: 5
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity-v1"
paper_digest_api_reader_resource_identity_sha256: "68fa249d64d1c2f9b333a7e73a72a6fba8ce79fae4007f2a3ecb5eea0841786d"
paper_digest_api_reader_resource_count: 0
paper_digest_api_reader_figure_persistence: "ephemeral-no-persisted-figure-assets-v1"
paper_digest_api_reader_decision_projection: "api-reader-decision-projection-v2"
---

# 📄 不共享原音频时两类伪造语音如何联合训练：按层靠近共识的联邦聚合

> 英文题目：*[A Federated Deepfake Speech Detection Method Based on Layer-Wise Center-Guided Weighting Aggregation](https://arxiv.org/abs/2610.01259v1)*

> 标签：#音频深度伪造检测 | #联邦学习 | #语音 | #隐私保护
>
> 评分：**6.0/10** | 创新 1.2/2 | 技术严谨 1/1.5 | 实验充分 1/1.5 | 清晰度 0.7/1 | 影响力 1/1.5 | 开源 0/1.5 | 可复现 0.3/0.5 | 工程/实践 0.8/1.5


## 👥 作者与机构

- Yingjian Yu：School of Communications and Information Engineering, Nanjing University of Posts and Telecommunications, Nanjing 210003, China
- Haiyan Guo：School of Communications and Information Engineering, Nanjing University of Posts and Telecommunications, Nanjing 210003, China
- Tianshun Wang：School of Communications and Information Engineering, Nanjing University of Posts and Telecommunications, Nanjing 210003, China
- Zirui Ge：School of Communications and Information Engineering, Nanjing University of Posts and Telecommunications, Nanjing 210003, China
- Chi Liu：School of Communications and Information Engineering, Nanjing University of Posts and Telecommunications, Nanjing 210003, China

## 📌 核心摘要

伪造语音检测输入为原始语音波形，输出为真实或伪造二分类，难点在于基于声码器的19LA与基于神经音频编解码的Codecfake分布差异大，且原始语音含敏感个人信息无法集中共享。客户端先在本地以联邦近端优化约束训练声学模型并只上传参数，其输出的参数进入服务器的逐层聚合阶段。服务器对每一层求客户端参数算术均值作为临时参考中心，再按各层参数到中心欧氏距离的倒数归一化计算权重，该权重直接决定全局模型各层的加权聚合结果。聚合后的全局模型下发作为下一轮本地初始化，重复20轮通信后按聚合验证损失选最优模型下发。与整模型统一加权相比，逐层定心能区分浅层通用声学模式与深层数据集特异表征的不同偏移程度，压制偏离共识的异构更新。在19LA与Codecfake联合评测设置下，FedDSD的平均EER为0.266%，低于Codecfake单语料训练的平均EER 0.631%。在W2V2-AASIST上联邦训练在19LA评估集取得0.571%等错误率（Equal Error Rate，EER），在Codecfake C1-C7取得0.224%平均EER，总平均0.266%，显著优于单语料训练并接近集中式协同训练的0.185%，在21DF上取得2.27%显示跨域泛化。该结论仅在2客户端、2种骨干及所列跨域集上验证，对大规模客户端、通信成本与恶意更新的外推尚未验证。原文未披露训练推理部署成本与代码权重链接。

## 🔗 开源与复现资源

本次未形成可展示的已核验资源记录，开放状态尚未核实。

可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 输入是什么：要解决的输入目标与输出是什么？

本文的输入是一段待判定的语音波形，目标是判断它是真实人声还是合成或转换生成的伪造语音，输出是真伪二分类分数并用等错误率衡量好坏。初学者可以这样理解动作：系统先读入原始采样点，再由检测主干抽取表示，最后给出伪造得分，阈值 sweep 到误接受等于误拒绝的那一点就是等错误率，越低越好。

论文强调的矛盾在于，当前基于音频语言模型的文字转语音只要几秒就能模仿说话人，而多数检测器只在声码器生成的伪造上训练，对基于神经音频编解码离散表示生成的语音效果下降。Codecfake 这类数据集把同一段语音用不同编解码器重合成，用来补上这一类伪造，但在 Codecfake 上训练的模型又在声码器音频上变差。于是问题变成如何在不把各方原始音频集中到一起的前提下，让一个模型同时覆盖两类伪造机理。

论文没有声称已公开代码、模型或数据，本次也未能确认任何资源链接可达，因此后文只讲方法动作与报告的数字，不做可下载复现的承诺。理解这个输入输出关系后，才能明白为什么后文要用联邦而不是简单混合数据。

### 已有路线走到哪里：检测器与聚合各负责什么？

检测器路线经历了从手工特征加混合高斯或轻量卷积，到端到端直接吃波形的转变。原文点名的例子包括用可学习 SincNet 做前端的 RawNet2、在谱时图上加图注意的 AASIST、用预训练 W2V2 或 WavLM 抽泛化嵌入的做法，以及用 Mamba 捕长程痕迹并保持低推理延迟的做法。论文选择 W2V2-AASIST 和 RawBMamba 作为本地模型，动作是直接沿用原工作的默认超参数，目的是说明联邦流程对两种主干都适用，而不是改进主干结构。聚合路线上，常用的 FedAvg 按各客户端数据量加权平均，缺点是在数据异构时会偏向数据量大的一方。

后续改进有按与全局模型偏离程度加权、按类别分布差异加权，以及按余弦相似度逐层加权等。论文把这些方法归为整模型统一权重或只考虑单一因素，提出逐层中心引导加权聚合，动作是为每一层单独算中心并按距离倒数加权。与同输入同目标的集中联合训练相比，联邦路线的运行阶段不同：集中路线要求服务器存下全部音频，联邦路线只传模型参数。

初学者不要把类别差异当成同条件胜负，例如只在 19LA 上训练的模型在 21LA 上好，不代表它整体更强，可能只是分布更接近。

### 为什么集中混合数据不可行：隐私与异构卡在哪里？

论文给出的集中联合训练动作是把 19LA 和 Codecfake 的音频都搬到一台有大存储和算力的服务器上统一训练一个模型，以消除域偏置。它的代价是资源受限的客户端自己存不下、算不动，只能用服务器下发的固定模型，而新收到的语音一旦分布漂移，固定模型就会失效；若要继续提升就得把原始语音上传，这会触及语音中敏感个人信息，存在用户不愿或法律不允许的问题。

另一方面，即使走联邦，两端数据来自根本不同的伪造范式，一端是声码器驱动的文字转语音与语音转换，另一端是编解码器重合成，这种严重非独立同分布会导致本地更新方向不一致、全局收敛困难。论文把实验配成两个客户端，客户端 A 只拿 19LA，客户端 B 只拿 Codecfake，原文明确说明这不是大规模联邦的代表，而是故意构造的高异构场景，用来考验方法在严重非独立同分布下的稳健性。

**联邦伪造语音检测 × 集中联合训练：** 联邦伪造语音检测的分工是不搬运原始语音、只在本地训练并上传模型参数来协作；集中联合训练的分工是把所有数据汇到一台服务器统一训练以消除域偏置；二者搭配的理由是论文想保留联合训练的多域覆盖能力，同时去掉集中存音频带来的隐私与算力门槛，组合意义是用多轮参数聚合近似集中数据的梯度效果。

联邦与集中的对照条件在后文是 4 种训练条件：只练 19LA、只练 Codecfake、集中混合两者、联邦协作两者，指标都是等错误率，方向都是越低越好。理解这个对照，才能读懂结果表中单数据集模型在对方域上等错误率高达几十的原因，那不是实现错误，而是域鸿沟的直接体现。

### 方法全景：一个样本如何走完一轮联邦？

论文的联邦伪造语音检测流程按 4 步循环：全局模型下载、本地更新、本地模型上传、模型聚合。先沿一个样本走一遍：客户端收到全局参数作为起点，取本地一条语音与其真伪标签，用本地检测主干算损失并做多轮本地梯度更新，更新后的整网分层参数被上传到服务器，服务器对每一层分别做加权平均得到新全局参数，再下发给各客户端开始下一轮。

目标函数是对所有客户端样本的加权损失求和，权重是各客户端样本数占总样本数的比例，这与集中训练的目标形式一致，只是优化时看不到对方原始音频。服务器在每轮结束还会收集各客户端在本地验证集上的平均损失再简单平均，用来挑出验证损失最低的那一轮全局模型作为最终下发的检测模型。整个过程重复 20 轮，每轮本地做 10 个 epoch，本地用 FedProx，聚合用逐层中心引导加权。下面的框架图把数据不出本地、只传参数的思想画了出来，是理解后文公式的前提。

导读：下图是联邦总体框架，请先看底部数据与顶部服务器的上下关系，再看上传与下载箭头的图例，最后看逐层符号的对应方式。

> **看图路径：** 1. 先沿底部客户端数据桶向上看本地模型分层符号再到顶部云端全局分层；2. 再对比实线上传箭头与虚线下发箭头的方向与标注；3. 再看云端公式中对客户端与层级的双重求和符号；4. 再看三个客户端数据桶上方分布小图是否形状不同以确认异构设定

[![原论文 Fig. 1：Overview of our FedDSD framework.](https://arxiv.org/html/2610.01259v1/overview.png)](https://arxiv.org/html/2610.01259v1/overview.png)

*论文图 1。原论文 Fig. 1:：“Overview of our FedDSD framework.”。*

图中底部是多个客户端各自的数据桶，每个桶内画了语音转换与文字转语音两种伪造来源以及不同的分布小图，表示各方伪造类型不同；中部是各客户端结构相同的分层网络，符号按客户端编号与层编号一一对应；顶部云端是服务器侧的全局分层网络，旁边写了对客户端和层级双重求和的聚合式；实线箭头表示模型聚合上传，虚线箭头表示模型下载。可见内容支持的判断是参数按层对齐聚合、原始波形不出桶。像素不能精确辨别的层间连接权重数值不要硬读，原文用公式给出计算，后文逐个解释。

### 关键组件如何计算：近端约束与逐层中心加权做什么？

先讲全局目标的符号与输入。全局参数记为全局模型权重，输入是各客户端的语音片段与真伪标签，计算目标是最小化按数据量加权的总检测损失。这个目标只是说明联邦想近似什么，不直接给出梯度路径，真正的优化拆成两部分。

\[\displaystyle\min_{w_{G}}\sum_{k=1}^{K}\frac{\lvert\mathcal{D}_{k}\rvert}{N}\sum_{i=1}^{\lvert\mathcal{D}_{k}\rvert}\mathcal{L}(\mathcal{F}(w_{G};x_{k,i}),y_{k,i}),\]

本地训练部分采用 FedProx。符号是本地模型参数、本地语音与标签、全局参数与非负正则系数，计算目标是在原检测损失上加一项本地参数偏离全局参数的平方惩罚。原文把该系数设为 0.1。实现上，每轮从全局参数出发做本地 epoch，惩罚项把更新拉回全局解附近，以缓解异构导致的优化不一致。需要指出的是，原文只报告了该系数值与轮数，未报告优化器类型、学习率与冻结细节，因此不能从主干名称推定哪些层冻结或梯度是否截断。

\[\displaystyle\min_{w_{k}}\mathcal{L}(f_{k}(w_{k};x_{k,i}),y_{k,i})+\frac{\mu}{2}\|w_{k}-w_{G}\|^{2},\]

聚合部分是逐层中心引导加权。先为每一层的每个客户端算一个未归一化权重，它等于该层参数到该层参考中心的欧氏距离加小常数后的倒数，距离越近权重越大；再在客户端间归一化得到每层权重；参考中心就是该层所有客户端参数的算术平均。原文解释了三点安排理由：几何上均值是中性参考点，不偏向任一客户端。

评价上它给出一致的贡献基线，越靠近中心越可能抓住跨数据集共享模式；稳健性上它自动压低异常或过特化更新的作用，而不需要显式做离群检测。

\[\displaystyle\tilde{\alpha}_{k,l}^{t}=\frac{1}{\|w_{k,l}^{t}-w_{\text{center},l}^{t}\|_{2}+\epsilon},\]

\[\displaystyle w_{center,l}^{t}=\frac{\sum_{k=1}^{K}w_{k,l}^{t}}{K}.\]

论文还提到浅层倾向学通用声学模式、深层对数据集特性更敏感，这是采用逐层而不是整网统一权重的直接依据。原文公式中全局某层参数的写法在求和符号上把层求和与客户端求和写在一起，初学者应按文字理解为对固定层只在客户端间加权平均，不要误读成把不同层参数混加。

**FedProx × 客户端漂移：** 客户端漂移指各客户端在差异很大的伪造类型上把本地模型推向不同方向；FedProx 的分工是在本地损失上加一项迫使本地参数不要远离全局模型的近端约束；搭配原因是只靠本地交叉熵会在声码器域和编解码域上发散，组合后本地更新被锚定在全局解附近，稳定性提高。

**逐层中心引导加权聚合 × 层间差异：** 层间差异指浅层学通用声学模式、深层更易受数据集特有伪造痕迹影响，因而各层发散程度不同；逐层中心引导加权聚合的分工是为每一层单独算一个跨客户端均值中心，再按到中心距离的倒数给权重；搭配原因是整模型统一权重无法照顾不同深度的发散，逐层处理后更贴近共识的层更新占比更高，离群更新被压制。

两个组合机制紧接上文：前者管本地更新不要跑偏，后者管服务器聚合时按层信任多数共识，二者分别对应训练稳定性与聚合稳健性，缺一不可的判断留待消融表验证。

### 训练如何组织：轮数、选择与验证损失怎么用？

训练组织严格按算法循环。服务器初始化全局参数后，对每一轮并行让每个客户端做本地更新，收齐分层参数后逐层按上节权重聚合得到新全局参数再下发，重复 20 轮。客户端侧的动作是把全局参数作为起点，按带近端项的本地目标做 10 个本地 epoch，然后上传整网参数。模型选择不集中验证数据：每个客户端在本地验证集上算平均损失并上传数值，服务器简单平均后保留聚合验证损失最低的那一轮全局模型，最终下发给各客户端做检测任务。

这个做法的监督来源完全是本地真伪标签，服务器看不到语音，只能看到参数与标量损失。原文未报告每轮是否全员参与之外的采样策略，实验部分是两个客户端全参与；也未报告学习率调度与早停之外的停止规则，因此复现时应先按 20 轮全量跑完再按验证损失选轮，不要自行加入额外采样。

**W2V2-AASIST × RawBMamba：** W2V2-AASIST 的分工是用预训练语音表示抽取泛化嵌入再用图注意力建模谱时关系，RawBMamba 的分工是直接处理原始波形并用 Mamba 捕捉长程伪造痕迹且推理延迟低；二者搭配验证的理由是证明联邦流程不绑定某一种主干，组合意义是同一套下载、本地更新、上传、逐层聚合能在两种结构上都收敛。

导读：下图是两主干在 20 轮内的验证损失曲线，请先看标题区分主干，再看图例区分两客户端与加和线，最后沿横轴看下降速度与尾部平稳程度。

> **看图路径：** 1. 先确认左右两子图标题分别对应哪一种本地主干；2. 再按图例区分客户端 A、客户端 B 与加和损失三条曲线；3. 再沿横轴通信轮数从 1 到 20 观察纵轴验证损失的下降形态；4. 再比较左右两图在第 1 轮起点与第 20 轮终点的大致高低关系

[![原论文 Fig. 2：Validation loss versus communication rounds for FedDSD method with W2V2-AASIST and RawBMamba as…](https://arxiv.org/html/2610.01259v1/fig3.png)](https://arxiv.org/html/2610.01259v1/fig3.png)

*论文图 2。原论文 Fig. 2:：“Validation loss versus communication rounds for FedDSD method with W2V2-AASIST and RawBMamba as local model, respectively.”。*

左子图是 W2V2-AASIST 的联邦过程，右子图是 RawBMamba 的联邦过程，横轴都是通信轮数从 1 到 20，纵轴都是验证损失。可见的趋势是两客户端各自曲线与加和曲线都随轮数单调下降，前几轮下降快，后段趋平，报告为稳定收敛。左图客户端 A 起点较低且下降更快，右图两客户端起点与终点更接近。像素不能精确读出的每轮具体损失数值不要硬写，原文只用趋势支持收敛判断，最终好坏以后文等错误率表为准。总体趋势不等于每一轮都有同等提升，选择最低验证损失轮的做法正是为了避免把末轮当成最优。

### 实验条件是什么：数据、划分与指标如何对齐？

实验用两块公开数据做联邦两端。19LA 基于声码器驱动的合成与转换，训练、开发与评估的样本量与攻击种类按标准划分；Codecfake 面向音频语言模型伪造，用 6 种神经音频编解码模型生成训练 utterance，留一种作为未见方法，开发与评估另有固定规模。评估时 19LA 看整体等错误率，Codecfake 按 C1 到 C6 与未见 C7 分列并再算平均，平均的聚合对象是跨这些测试条件的等错误率。跨域泛化另在 21LA、21DF 与 In-the-Wild 上测等错误率，这些集未参与联邦训练。

实现上客户端 A 分 19LA、客户端 B 分 Codecfake，主干分别试 W2V2-AASIST 与 RawBMamba，均用原工作默认超参数，正则系数 0.1，20 轮通信，每轮 10 本地 epoch。对比的公平条件是聚合对照都架在 FedProx 本地训练之上，只换服务器聚合策略。
下表整理两端数据的规模与构成，提出的问题是两客户端的异构到底有多严重，公平条件是都按原文标准划分，指标方向是后文等错误率越低越好，规模差异本身是 FedAvg 会偏向大方的背景。

| 数据集 | 训练规模 | 开发规模 | 评估规模 | 伪造来源说明 |
| --- | --- | --- | --- | --- |
| 19LA | 25,380 training samples | 24,844 development samples | 71,237 evaluation samples | vocoder-driven TTS and VC methods |
| Codecfake | 740,747 training utterances | 92,596 samples | 224,873 samples | six neural audio codec models (C1-C6), with C7 reserved as an unseen method |

表后解释：两端训练量相差一个数量级且伪造机理根本不同，这是论文自称严重非独立同分布的依据，也是按数据量平均会失衡、需要逐层按距离加权的动机。代价是两客户端设定无法验证大规模联邦下的通信与采样问题，未评测边界应在复现时说明。百分点与相对百分比在此不混用，后文等错误率的差值都以百分点理解。

**等错误率 × 跨域评估：** 等错误率的分工是给出误接受与误拒绝相等时的单点错误，数值越低越好；跨域评估的分工是把在 19LA 和 Codecfake 上联邦训练出的全局模型放到 21LA、21DF 和 In-the-Wild 等未参与训练的分布上测试；搭配原因是只看域内等错误率会掩盖对新合成器的过拟合，组合后才能判断联邦模型是否学到可迁移的共性。

### 主结果回答什么：联邦比单数据集好多少，离集中多远？

主结果要回答两个问题：在 19LA 与 Codecfake 各自测试上，联邦全局模型是否显著好于只看一端数据的模型，以及是否接近把两端音频集中混合训练的上限。比较对象包括单数据集训练、集中混合训练与联邦训练，模型分 W2V2-AASIST 与 RawBMamba 两条线，指标都是等错误率，越低越好。原文报告的定性结论是联邦显著好于单数据集，略逊于集中混合，原因归为异构导致的更新不一致影响全局收敛。

需要补充的具体数字来自聚合对照表，该表同时给出只用 FedProx 聚合的基线与多种聚合方法的等错误率，可作为联邦收益的直接证据。
下表比较不同聚合策略在同一 FedProx 本地训练下的跨域表现，问题是哪种聚合更能照顾层间差异，公平条件是本地训练相同、只换聚合权重，指标方向是等错误率与平均值越低越好。

| Methods | 19LA | Codecfake | Codecfake | AVG |
| --- | --- | --- | --- | --- |
|  |  | C1 | C7 |  |
| Fedprox[13] | 4.025 | 0.023 | 1.058 | 0.675 |
| IDA[21] | 0.720 | 0.008 | 1.186 | 0.287 |
| FedLAMA[23] | 0.831 | 0.038 | 1.359 | 0.298 |
| FedDSD | 0.571 | 0.023 | 1.111 | 0.266 |

表后解释：表中联邦方法平均等错误率 0.266% 为最低，优于只用 FedProx 平均的 0.675%，也低于逆距离聚合、FedDisco、逐层余弦与 FedLAMA 等对照。收益主要来自逐层按到中心距离加权对离群层更新的压制。具体代价与反例是在 19LA 这一列上联邦为 0.571%，低于逆距离聚合的 0.720%，但在 Codecfake 的 C2 子条件上联邦 0.098% 不如只用 FedProx 的 0.030% 与逆距离的 0.083%，说明总体最优不等于每个子条件都最优。未胜出项应保留：例如 FedDisco 平均 0.853% 明显偏高，逐层余弦平均 0.479% 居中，这些负结果支持逐层自适应重要，但实现形式不同效果不同。原文另报告 RawBMamba 联邦平均 1.332% 与 W2V2-AASIST 联邦平均 0.266%，显著低于各自单数据集平均几十的水平，但仍略高于集中混合的 1.201% 与 0.185%，差距即为联邦的隐私代价。

### 跨域泛化如何：在没见过的集上还能打吗？

跨域问题是联邦全局模型在完全未参与训练的 21LA、21DF 与 In-the-Wild 上表现如何。对照包括 RawNet2、RawBMamba、多种 W2V2 与 WavLM 变体、XLSR 系列，主干与预训练规模并不一致，因此只能做有源对照，不能当成同条件胜负。指标仍是等错误率，越低越好。原文报告联邦方法在这三集上分别为 2.86%、2.27% 与 8.98%，优于所列的 RawNet2、RawBMamba、部分 WavLM 与 W2V2 变体，在 21DF 上也好于只在 19LA 上训练的 W2V2+AASIST2 与 XLSR+AASIST，但在 21LA 上不如后两者，原文解释为后两者训练分布与 21LA 更接近。
下表列出各方法在三集上的等错误率，问题是联邦的多域覆盖是否带来泛化收益，条件是各方法训练数据与主干不同，解读时必须保留该差异，指标方向越低越好。

| Methods | 21LA | 21DF | ITW |
| --- | --- | --- | --- |
| RawNet2[1] | 5.31 | 22.38 | 33.94 (Reported by [25]) |
| RawBMamba[7] | 3.28 | 15.85 | 47.02 (Evaluated by released checkpoint) |
| W2V2+AASIST2[26] | 1.61 | 2.77 | – |
| XLSR+Mamba[8] | 0.93 | 1.88 | 6.71 (Reported by [8]) |
| FedDSD (Ours) | 2.86 | 2.27 | 8.98 |

表后解释：主要收益是联邦在 21DF 与 In-the-Wild 上相对靠前，支持多域协作学到更通用的伪造痕迹。代价是 XLSR 加 Mamba 或 Conformer 的两行在整体上更低，原文把优势部分归因于大规模多语言预训练与更强时序建模，这属于有限解释而非因果证明，待验证。未胜出项必须指出：联邦在 21LA 的 2.86% 明显高于 XLSR 系的 1% 左右，在 In-the-Wild 的 8.98% 也高于 XLSR+Mamba 的 6.71%，说明在真实野外数据上仍有差距。不同指标差值不能混放到同一模型列下比较，此处三列都是等错误率但测试集不同，跨列平均没有意义，应分列解读。

### 拿掉一块会怎样：近端约束与逐层加权各自贡献多少？

消融要验证 FedProx 与逐层中心引导加权是否都不可少。实验固定主干为 W2V2-AASIST，比较只用 FedProx、只用逐层加权、两者都用 3 种可运行策略，测试条件与指标与主结果一致，方向仍是越低越好。只用逐层加权意味着本地不用近端约束，只用 FedProx 意味着聚合回到按数据量或均匀的基准聚合，原文把后者记为 FedProx 一行。
下表给出 3 种组合在 19LA 与 Codecfake 各子条件及平均上的等错误率，问题是收益来自优化端还是聚合端，公平条件是数据划分与主干相同，指标方向越低越好。

| Components | Components | 19LA | Codecfake | AVG |
| --- | --- | --- | --- | --- |
| FedProx | L-CGWA |  | C7 |  |
| ✓ |  | 4.025 | 1.058 | 0.675 |
|  | ✓ | 1.088 | 1.064 | 0.324 |
| ✓ | ✓ | 0.571 | 1.111 | 0.266 |

表后解释：两者都用时平均 0.266% 最低，只用逐层加权时平均 0.324%，只用 FedProx 时平均 0.675%。这支持论文的判断：两块都有贡献，且聚合端的改进幅度大于单加优化端。代价与反例同样存在：在 C2 上两者都用的 0.098% 反而高于只用逐层加权的 0.076% 与只用 FedProx 的 0.030%，在 C7 上两者都用的 1.111% 略高于只用逐层加权的 1.064%，说明组合在平均意义上最好，但不是每个切片都单调改进。复现时应完整报告各子条件，不要只贴平均值，否则会掩盖这种非一致性。

### 边界在哪里：哪些结论不能推广？

论文直接报告的是两客户端、2 个数据集、两种主干下的等错误率与验证损失趋势，有限解释是对 21LA 偏弱归因于训练分布接近性、对 XLSR 优势归因于预训练与主干，这些都应读作可能而非已证因果。未验证的推测包括把逐层中心推广到更多客户端、更大规模联邦、其他伪造类型与实时检测延迟，原文没有测量误判率之外的延迟、通信量与算力开销，因此不能承诺这些量得到改善。

训练资源方面，原文只给出 20 轮与每轮 10 本地 epoch，未报告硬件型号、显存占用与每轮时长，推理开销与输出帧率也未讨论，复现时应补记这些预算。总体趋势不等于每组都成立，前文已见 C2 与 C7 上的反例。相关性不是因果：验证损失下降与等错误率降低同时出现，不代表前者必然导致后者，最终选择仍按验证损失挑轮，可能与测试最优轮有偏离。缺失证据不是技术错误，但使用时要明确边界，例如客户端数量、采样策略、非全参与、恶意更新等联邦特有风险都未评测。

### 要复现先做什么：按什么顺序固定条件？

复现的第一步是按原文固定数据与划分：客户端 A 只放 19LA 标准训练集，客户端 B 只放 Codecfake 标准训练集，开发集留作本地验证损失计算，测试集按 19LA 整体与 Codecfake 的 C1 到 C7 分列。第二步固定主干与超参数：分别用 W2V2-AASIST 与 RawBMamba 的原默认超参数，正则系数设为 0.1，通信 20 轮，每轮本地 10 epoch，全员参与，服务器按逐层中心距离倒数加权聚合，每轮收集本地验证平均损失再平均选最低轮。

第三步固定对照：先跑单数据集基线与集中混合上限，再在相同本地训练下换聚合策略做公平比较，最后做只用 FedProx、只用逐层加权、两者都用的消融。记录时每个数字同时核对数据集、模型、实验阶段、指标与聚合对象，数值相同不代表同一指标。资源状态方面，未发现来源绑定且完成验证的资源，因此不得声称代码、模型或数据已公开，复现需自行实现并补测硬件预算、通信量与推理延迟。常见误解是把平均等错误率最低当成每列都最好，复现报告应保留未胜出子条件。

另一个误解是把无原始音频共享当成无隐私风险，参数仍可能泄露信息，论文只做到不传音频，不承诺形式化隐私保证。

### 何时值得尝试：这套方法的适用与收束是什么？

当手上有分布差异大的伪造语音各一块、又不能或不愿集中原始音频时，这套联邦加逐层中心加权值得尝试：本地用近端约束稳住更新，服务器按层信任多数共识，20 轮后按聚合验证损失选轮，有望接近集中混合的效果。论文在两种主干上都显示联邦显著好于单数据集，并在 21DF 与野外集上保持竞争力，这是支持尝试的直接证据。适用条件是各客户端主干结构相同、能做多轮参数同步，且能接受仍略低于集中上限的小幅差距。

不适用或需补验证的情形包括客户端很多、非全参与、通信受限、需要形式化隐私、需要低延迟实时检测，以及主干不同构的异构联邦，这些在原文都未覆盖。收束一句话：不搬音频也能联合两类伪造知识，关键动作是本地别跑偏、聚合时按层靠近共识，但每域最优与野外最优仍需分开看，复现时先对齐数据划分与聚合对照，再补上成本与延迟测量。

<details>
<summary>📎 论文与评分元数据</summary>

排名：前50% | 文档类型：方法研究 | [arXiv 原文](https://arxiv.org/abs/2610.01259v1)

</details>

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。

- 评分规则：type-aware-v1

- 评分模型：muse-spark-1.3-contributor

- 评分请求协议：openai_responses

---

[← 返回 2026-10-02 语音/音乐/音频论文速递](/audio-paper-digest-blog/posts/2026-10-02/)
