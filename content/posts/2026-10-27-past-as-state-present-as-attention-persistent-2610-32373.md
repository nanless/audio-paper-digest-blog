---
title: "Past as State, Present as Attention: Persistent-State Blockwise Flow Matching for Long-Horizon Co-Speech Motion Generation"
date: 2026-10-27
draft: false
tags: [语音驱动手势生成, 流匹配, 语音, 状态空间模型, 长音频处理]
categories: [论文速递]
description: "针对随语音生成长时间全身动作时会风格漂移和历史代价增大的问题，PASPA 把远历史压缩为跨块持续状态、把当前块用双向注意力精细建模，并在块式流匹配下用多块监督与混合引导训练推理，在 BEAT2 与 SHOW 上取得最优的生成质量指标，但长尾大位移与超长记忆仍有限制。"
hiddenInHomeList: true
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_arxiv_id: "2610.32373"
paper_digest_workbench_contract: "researcher-workbench-v1"
paper_digest_reader_title: "把过去记成状态、把现在做成注意力：面向长时语音手势的块式流匹配"
paper_digest_original_title: "Past as State, Present as Attention: Persistent-State Blockwise Flow Matching for Long-Horizon Co-Speech Motion Generation"
paper_digest_arxiv_version: 1
paper_digest_arxiv_versioned_id: "2610.32373v1"
paper_digest_arxiv_abs_url: "https://arxiv.org/abs/2610.32373v1"
paper_digest_arxiv_pdf_url: "https://arxiv.org/pdf/2610.32373v1.pdf"
paper_digest_primary_task: "语音驱动手势生成"
paper_digest_tags_contract: "paper-tag-flat-tags-v2"
paper_digest_tags_selection_contract: "paper-tag-selection-v2"
paper_digest_tags_registry_version: "paper-tag-catalog-v2"
paper_digest_tags_registry_sha256: "cdef54423b5dfc00a1d017ef6639446d2ecd1d9c1acf71c8eb4f6219a46b7ba8"
paper_digest_tags_concepts: [{"facet":"task","id":"task.speech-driven-gesture","label":"语音驱动手势生成"},{"facet":"method","id":"method.flow-matching","label":"流匹配"},{"facet":"signal","id":"signal.speech","label":"语音"},{"facet":"method","id":"method.state-space","label":"状态空间模型"},{"facet":"setting","id":"setting.long-audio","label":"长音频处理"}]
paper_digest_primary_method: "流匹配"
paper_digest_score: 6.9
paper_digest_rank_bucket: "前50%"
paper_digest_document_type: "方法研究"
paper_digest_one_sentence: "针对随语音生成长时间全身动作时会风格漂移和历史代价增大的问题，PASPA 把远历史压缩为跨块持续状态、把当前块用双向注意力精细建模，并在块式流匹配下用多块监督与混合引导训练推理，在 BEAT2 与 SHOW 上取得最优的生成质量指标，但长尾大位移与超长记忆仍有限制。"
paper_digest_authors: [{"affiliations":["Tongji University"],"name":"Yi Liu"},{"affiliations":["The University of Tokyo"],"name":"Xiangyue Zhang"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Jianfang Li"},{"affiliations":["Tongji University"],"name":"Jia Ma"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Yisheng He"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Jianqiang Ren"}]
paper_digest_abstract_sha256: "d401606f66bbb72f5f41dde1cfc067554531fda34a3a7ae57b0c93ee9a052336"
paper_digest_sidecars: {"citation.bib":{"sha256":"4b2b1a75b388686d9237de4715e1652902022d96275aec4a9793b7d56e659743","url":"/audio-paper-digest-blog/data/papers/2026-10-27/2610-32373/citation.bib"},"citation.json":{"sha256":"2a35c59aaa5cc1b5eacb4c111294a6a59cb084b881585b694ed125d5a3e6eb4f","url":"/audio-paper-digest-blog/data/papers/2026-10-27/2610-32373/citation.json"},"citation.ris":{"sha256":"01117f14a2db055e5ecbeaffd49003c1e40f55f81d076d16e6a3d17ee6ee2a11","url":"/audio-paper-digest-blog/data/papers/2026-10-27/2610-32373/citation.ris"},"rethink-context.json":{"contract":"paper-research-context-v2","sha256":"35a8c5b9c6c0cd7b582a5a023b26af2efc57822fe7a0d86ecacfa4a1d0a121ec","url":"/audio-paper-digest-blog/data/papers/2026-10-27/2610-32373/rethink-context.json"}}
paper_digest_api_reader_contract: "beginner-researcher-v3"
paper_digest_api_reader_article_sha256: "7fa4d5a6b6279782724c510d692d6ead184898065ef1280e98d55a82c5cb1579"
paper_digest_api_reader_plan_sha256: "e013bde63cd13592423e1bfae52ba1f157957a860e621927fbf85b7ca2bda5d0"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings-v4"
paper_digest_api_reader_source_bindings_sha256: "fdcd67b0beba00e2a99da4d1b5dab6d3c289ebc6714fc52a4f40d548f9daf803"
paper_digest_api_reader_source_table_count: 4
paper_digest_api_reader_source_formula_count: 5
paper_digest_api_reader_structured_artifacts_sha256: "9c279d7f6e461aa7fdd9c425fb501cd87e9a71c9e3bcc1d8eab733771497ac01"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity-v1"
paper_digest_api_reader_author_identity_sha256: "f6c5846bb5db6628b393a7b3224714a04781a5b314abad5761c5c21c52698b5b"
paper_digest_api_reader_author_count: 6
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity-v1"
paper_digest_api_reader_resource_identity_sha256: "a46f8779b2a6477edd3f35f3a6508b3f38d68a102855384e983e8c00fd909538"
paper_digest_api_reader_resource_count: 1
paper_digest_api_reader_figure_persistence: "ephemeral-no-persisted-figure-assets-v1"
paper_digest_api_reader_decision_projection: "api-reader-decision-projection-v2"
---

# 📄 把过去记成状态、把现在做成注意力：面向长时语音手势的块式流匹配

> 英文题目：*[Past as State, Present as Attention: Persistent-State Blockwise Flow Matching for Long-Horizon Co-Speech Motion Generation](https://arxiv.org/abs/2610.32373v1)*

<!--paper-tag-hierarchy-v1:start-->

**研究分类**

- **研究任务**：[语音驱动手势生成](/audio-paper-digest-blog/papers/?concept=task.speech-driven-gesture)
- **研究方法**：[生成模型](/audio-paper-digest-blog/papers/?concept=method.generative) → [流匹配](/audio-paper-digest-blog/papers/?concept=method.flow-matching)；[状态空间模型](/audio-paper-digest-blog/papers/?concept=method.state-space)
- **研究条件**：[长音频处理](/audio-paper-digest-blog/papers/?concept=setting.long-audio)
- **信号**：[语音](/audio-paper-digest-blog/papers/?concept=signal.speech)

<!--paper-tag-hierarchy-v1:end-->

> 评分：**6.9/10** | 创新 1.4/2 | 技术严谨 1.2/1.5 | 实验充分 1.3/1.5 | 清晰度 0.8/1 | 影响力 0.5/1.5 | 开源 0/1.5 | 可复现 0.5/0.5 | 工程/实践 1.2/1.5


## 👥 作者与机构

- Yi Liu：Tongji University
- Xiangyue Zhang：The University of Tokyo
- Jianfang Li：机构信息未能在本次解析中与作者逐人可靠绑定
- Jia Ma：Tongji University
- Yisheng He：机构信息未能在本次解析中与作者逐人可靠绑定
- Jianqiang Ren：机构信息未能在本次解析中与作者逐人可靠绑定

## 📌 核心摘要

随语音动作生成要从语音合成节奏语义协调的全身动作，长时需保持连贯与说话人风格一致，而短种子按段生成易漂移、保留全部历史词元则显存计算随长度增长且难稳定利用长历史。PASPA把序列切成64帧的块，先用门控增量状态读入语音与已生成块输出固定尺寸历史总结并作为下一块条件，再用块内双向自注意力结合该总结与语音条件精细建模当前块动态。训练对多个连续块施加不同噪声水平并行去噪，推理经状态预填缓存固定尺寸状态后迭代解码，并用混合无条件引导同时控制语音条件与历史依赖强度。与基于流匹配的GlobalDiff相比，在BEAT2单说话人测试集上PASPA的Fréchet gesture distance（生成与参考特征分布差异，越低越好）从4.78降到3.71。在10秒至60秒滚动生成取末端10秒窗口评估中，50至60秒段PASPA该指标为5.745，低于短种子基线的6.721，也低于词元注意力的5.771。该结论限于BEAT2与SHOW基准及所用自动指标评估，训练用真实历史而推理依赖生成历史致暴露偏差，长时滚动可能累积误差出现重复、姿态坍缩或身份漂移，固定尺寸状态也难复现远距离精确对应，60秒以上长时质量与新风格感知指标尚未验证。BEAT2模型约65.158M参数、单次前向16.633G运算量，在4张NVIDIA A800上训练约30小时，120秒至600秒合成中混合引导只增约4.9%至9.1%时延与0.01GB峰值显存。

## 🔗 开源与复现资源

- 第三方资源：<https://ly403.github.io/PASPA/> — 链接可访问（HTTP 200）

可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 随语音动作要解决什么输入与输出问题

随语音动作生成的输入是一段语音波形，输出是与之在时间上对齐、在语义上协调的全身动作与面部表情。论文用 SMPL-X 参数化身体，包括 55 个关节旋转与 3 维全局平移，旋转由轴角转为 6 维表示，加上平移共 333 维，每帧还配 100 维面部系数。语音侧用预提取的 WavLM 特征表示，说话人身份另作条件。任务的难点在于 1 对多：同一句话可以对应多种合理手势，模型既要多样，又要在长达数十秒的生成中保持时间连贯与个人风格稳定。评价因此同时看质量、同步、多样与面部误差，质量用生成分布与参考分布的特征差异衡量，方向是越小越好。

长时生成通常一段一段往后滚，每生成一块都要利用已生成的过去。过去用不好会出现两种典型失败：只看最近几帧会慢慢漂走，风格逐渐丢失；把全部历史都存成 token 又会让计算随长度增长，且在数据有限时难以学到稳定的长期利用方式。论文要回答的就是如何表示与传递过去，才能又便宜又稳。

### 已有路线为何在长时上容易漂移或变贵

早期多是语音到动作的直接映射，后来因 1 对多而转向生成式路线，包括扩散模型、流匹配与基于离散码本的方法。离散码本受码本表达限制，多样性往往不足；扩散与流匹配已成为该领域的主流，能支持更丰富的动作合成。长时外推上，主流做法仍是分段自回归，区别只在历史如何传入当前块。

一类是短种子截断，只把上一块末尾几帧作为条件，推理简单但长期风格必然衰减。另一类是长上下文 token 注意，把远历史都保留下来做全局注意力，理论上信息更多，但注意力代价随长度平方增长，且在随语音数据量有限时，模型很难从很长的显式历史中提炼出稳定的风格。也有流式与块扩散的工作尝试更长的历史或逐 token 噪声，但同样没有解决过去与现在应区别对待的问题。论文把这些路线放在相同的分段生成设定下比较，指出它们的输入条件与监督阶段一致，差异主要在历史表示上。

### 为什么过去与现在应该区别对待

论文先用自相关分析验证一个不对称假设：在 BEAT2 训练集上，把上身姿态转为去朝向与归一化后的关节位置，再在 30 帧滑窗内分别构造风格特征与局部特征。风格特征包括手臂伸展、双腕间距、相对脖子的高度、左右不对称与腕部活动范围等，局部特征是当前姿态减去窗内均值的高通残差。为排除语音能量直接抬高相关，还对每维做了语音能量的岭回归取残差，并按说话人标准化。

结果是风格自相关在 100 帧之后仍明显为正，而局部特征在几十帧内就衰减到零附近；把手工风格换成窗内原始姿态均值，趋势依然成立。也就是说，过去主要提供缓慢变化的风格倾向，值得压缩记忆；现在则是快速变化的细节，需要高分辨率建模。这正是后文持续状态加块内注意力的依据。

下面这张长时对比图把问题说得很直观，请按从左到右的时间顺序看三行的手部高度与标注细节。

> **看图路径：** 1. 对比三行在 0-2 秒、10-12 秒、31-33 秒与 51-52 秒的手部高度；2. 看红色圆圈标出的手臂下垂与风格偏离位置；3. 看第三行绿色框中真值与生成是否始终保持双手抬起

[![原论文 Figure 1：Long-horizon co-speech motion generation (52 s) from the same speech and speaker, with the GT…](https://arxiv.org/html/2610.32373v1/teaser.png)](https://arxiv.org/html/2610.32373v1/teaser.png)

*论文图 1。原论文 Figure 1:：“Long-horizon co-speech motion generation (52 s) from the same speech and speaker, with the GT style keeping both hands raised near the chest.”。*

图中同一语音与同一说话人的真值始终双手抬在胸前。短种子行起初能对上，但手随时间单调下垂；长上下文 token 行有时对上有时偏离，与远近无关；PASPA 行始终保持抬手风格，与真值最接近。这说明关键不是历史存了多少帧，而是历史以什么形式参与生成。

### PASPA 整体如何分工与滚动

PASPA 的总体流程是半自回归的块式生成：长序列切成每块 64 帧的块，块间按顺序自回归，块内做双向稠密建模。每个块的生成条件是当前块的语音与表情，加上由之前所有干净块压缩得到的持续状态。训练时用教师强制，把真值历史编码进状态；推理时把刚生成的块写进状态，再只读状态去噪下一块。

网络主体沿用全局旋转空间的双分支结构，躯干加平移与双手分开处理，再合并为完整动作。表情先由冻结的音频到表情网络从 WavLM 与说话人身份得到。每个 PASPA 层依次经过历史模块与当前块注意力模块，并用说话人与时间步的融合嵌入做自适应调制。先看历史传递的 3 种形态，再理解为什么中间的自相关证据支持右侧的设计。

> **看图路径：** 1. 看左侧丢弃远历史、中间保留全部 token、右侧压缩为状态的三条路径；2. 看当前音频指向生成块的箭头与历史指向生成块的方式差异；3. 对比底部标注的代价与风格稳定性结论

[![原论文 Figure 2：History propagation in co-speech motion generation.](https://arxiv.org/html/2610.32373v1/compare.png)](https://arxiv.org/html/2610.32373v1/compare.png)

*论文图 2。原论文 Figure 2:：“History propagation in co-speech motion generation.”。*

左图短种子只留最近帧并丢弃远历史，中图把全部历史存为 token 做全局注意，右图把全部历史压缩为持续状态、当前块另做双向注意力。右路底部标注了更强的连贯性、更稳的风格与更低的学习代价，这与上一节自相关揭示的快慢分离是一致的。

下面这条自相关曲线横轴是滞后帧数、纵轴是迹自相关，蓝色与橙色分别代表风格与局部，阴影是置信区间。

> **看图路径：** 1. 看横轴滞后帧数与纵轴自相关值的变化趋势；2. 对比蓝色风格曲线与橙色局部曲线的衰减速度；3. 注意内嵌小图用原始窗内姿态均值替换风格特征后趋势是否一致

[![原论文 Figure 3：Autocorrelation r(\\tau) on BEAT2, averaged across speakers with 95% confidence intervals (shaded).](https://arxiv.org/html/2610.32373v1/acf_highpass.svg)](https://arxiv.org/html/2610.32373v1/acf_highpass.svg)

*论文图 3。原论文 Figure 3:：“Autocorrelation r(\tau) on BEAT2, averaged across speakers with 95% confidence intervals (shaded).”。*

该曲线中蓝色风格曲线衰减很慢，橙色局部曲线迅速穿零，阴影是跨说话人平均后的置信区间。内嵌小图说明即使不用手工风格特征，结论依然成立，因此把过去压缩、把现在精细建模不是人为特征选择造成的假象。

### 持续状态如何只读严格过去

历史分支的核心是块级门控 DeltaNet。它沿用门控与 delta 规则的状态更新，用可学习的门控衰减无关波动，用写强度选择性写入有用的趋势，从而对缓慢风格形成时间衰减的归纳偏置。输入侧用带噪当前块得到查询，上下文侧用干净历史得到键、值与门控。为防止块内未来泄露，论文改了读机制：同一块内所有位置都只读块起始状态，也就是上一块的最终状态，而不是随 token 不断更新的状态。这在数学上保证每块只以严格过去为条件，维持块级因果。

实现上状态更新仍可用分块并行加速，读则退化为稠密矩阵乘，可用定制的 Triton 核加速。块大小取生成块长度，使计算分块与生成分块对齐。

\[\boldsymbol{x}_{t}=(1-t)\boldsymbol{x}_{0}+t\boldsymbol{z},\quad\boldsymbol{z}\sim\mathcal{N}(0,\boldsymbol{I}),\quad t\in[0,1],\]

上式是每块的流匹配插值，干净块与高斯噪声按时间步线性混合，时间步在 0 到 1 之间。

\[\boldsymbol{S}_{i}=\boldsymbol{S}_{i-1}\left(\alpha_{i}\left(\boldsymbol{I}-\beta_{i}\boldsymbol{k}_{i}\boldsymbol{k}_{i}^{\intercal}\right)\right)+\beta_{i}\boldsymbol{v}_{i}\boldsymbol{k}_{i}^{\intercal},\]

上式是持续状态的更新，门控控制遗忘，写强度控制按外积写入新信息。

\[\text{GDN: }\boldsymbol{o}_{i}={\boldsymbol{S}_{i}}\boldsymbol{q}_{i},\qquad\text{BGDN: }\boldsymbol{o}_{i}={\boldsymbol{S}_{[n]}^{0}}\boldsymbol{q}_{i}\quad\forall(n-1)K<i\leq nK,\]

上式对比了原始逐 token 读与块级只读块起始状态的差异，是保证因果的关键。

\[\boldsymbol{O}_{[n]}^{\mathrm{BGDN}}=\boldsymbol{Q}_{[n]}\left(\boldsymbol{S}_{[n]}^{0}\right)^{\intercal}\in\mathbb{R}^{K\times d_{v}},\qquad\boldsymbol{Q}_{[n]}\in\mathbb{R}^{K\times d_{k}},\quad\boldsymbol{S}_{[n]}^{0}=\boldsymbol{S}_{[n-1]}^{K}\in\mathbb{R}^{d_{v}\times d_{k}}.\]

上式是块级读的高效形式，当前块查询矩阵乘以块起始状态的转置，一次得到整块输出。

**过去 × 持续状态：** 过去指当前块之前已生成的所有干净动作历史，主要携带手臂幅度与空间偏好这类缓慢变化的风格倾向；持续状态指固定大小的矩阵记忆，随块递推更新并只读块起始时刻的值。两者搭配的意义是把稀疏抽象的长期倾向压缩保存，避免逐帧保留全部历史带来的代价与学习困难。

### 当前块为何用块内双向注意力

持续状态对整块共享同一个起点，块内 token 之间还没有直接交互，而当前块恰是快速动态所在，需要稠密建模。论文为此设计块内多头自注意力：掩码只允许同一块内互见，跨块一律屏蔽。这样既保留块内前后文对每个 token 的帮助，又不破坏块间的自回归因果。实现时把序列重排为块为批的形状，直接做标准双向注意力，复杂度从全序列平方降为每块平方乘以块数。位置编码用旋转位置编码，归一化用 RMSNorm。

需要注意，块内双向不等于打乱时间，它只是在已限定为当前块的范围内允许前后都参考，跨块未来依然不可见。若把当前块也换成状态递推，消融显示质量反而比不用历史更差，说明稠密交互对现在是必要的。

\[\boldsymbol{O}=\mathrm{Softmax}\!\left(\frac{\boldsymbol{Q}\boldsymbol{K}^{T}}{\sqrt{d}}+\boldsymbol{B}^{\text{blk}}\right)\boldsymbol{V}\boldsymbol{W}_{O},\quad\boldsymbol{B}^{\text{blk}}_{ij}=\begin{cases}0&\lceil i/K\rceil=\lceil j/K\rceil\\ -\infty&\text{otherwise}\end{cases},\]

上式是块对角掩码的注意力，同一块内权重正常计算，不同块的位置加负无穷而被屏蔽。

**现在 × 块内双向注意力：** 现在指正在去噪的当前动作块，包含速度与关节细节这类快速变化的局部动态；块内双向注意力指只在同一块内允许任意两帧互相看见、跨块则完全屏蔽的自注意力。搭配理由是当前块需要高分辨率的稠密交互，而跨块交互已由持续状态承担，二者分工避免互相干扰。

**预填充 × 状态缓存：** 预填充指只用干净片段更新持续状态而不做去噪解码的操作；状态缓存指滚动中唯一需要保留的是这个固定大小的状态。两者结合使推理分为先写状态再只读状态去噪当前块，历史长度增加时查询代价不增长，也避免每步重算全部历史。

### 多块如何加噪、监督与平衡损失

训练把每块的流匹配时间步独立采样，允许不同块处于不同噪声水平，网络一次前向并行去噪整个序列中的所有块。目标不是预测速度，而是直接预测每块的干净动作。历史分支只路由严格过去的真值块，保证因果。为贴近推理时的噪声形态，时间步强制弱单调递增，并用 logit 正态代替均匀采样。

损失包括旋转与平移的均方误差、经正向运动学得到的关节位置损失与骨骼结构损失，以及跨块交界窗的速度与加速度匹配的边界损失。边界窗取相邻两块各 4 帧拼接，共 8 帧。由于不同块与不同噪声水平的冲突，论文训练一个小网络预测随时间步的自适应权重，并对运动学损失的权重部分停止梯度，避免其波动干扰权重学习。

**块式流匹配 × 多块监督：** 块式流匹配指把长序列切成等长块，每块独立加噪并保持块间自回归因果的生成框架；多块监督指一次前向同时对所有块的去噪结果计算损失。组合后一次训练就能让每个块看到不同长度的历史状态与不同噪声水平，从而提高对推理时逐块滚动的鲁棒性。

**条件引导 × 历史引导：** 条件引导指增强语音与表情条件对当前块的影响；历史引导指通过可学习的空状态控制历史状态的影响强度。混合使用时四种预测按多线性组合，既保留各自的边际作用，又显式建模条件与历史的二阶联合作用，从而在不破坏语音对齐的前提下调节风格保持强度。

训练时条件以 10% 概率丢弃，历史状态以保持、置空与插值 3 种模式出现，比例分别为 70%、10% 与 20%，插值系数在 0 到 1 均匀采样，以便推理时连续调节历史强度。优化用 Muon 处理隐层矩阵权重、AdamW 处理其余参数，历史模块放在 AdamW 下，学习率先高后低，梯度按范数裁剪。

### 在什么数据、划分与指标下比较

主评测在 BEAT2 上，用官方划分，同时报告单说话人子集与全说话人集，前者聚焦个人风格建模，后者考跨身份泛化。补充评测在 SHOW 上，沿用已有手势评测协议，且不为 SHOW 单独调超参数，以看方法能否直接迁移。动作均为 30 帧每秒，语音为 16 千赫兹，BEAT2 用动作捕捉，SHOW 用视频重建的伪真值。

指标中生成质量用特征分布差异衡量，越小越好，是主要依据；多样性越大越好；语音动作同步用节拍一致性，越大越好；面部用均方误差，越小越好。为可读性，BEAT2 的质量与面部误差在表中分别放大 10 倍与 10 的 8 次方倍，SHOW 则不缩放。

消融多在单说话人设定下做 500 轮训练，主结果训练 1000 轮并按最优质量检查点报告。用户研究用盲排，要求对真实感、语义一致、同步与多样分别排名。

### 主结果在什么条件下成立

BEAT2 表格比较的是相同官方划分与相同指标方向下，PASPA 与一系列可运行基线在单人与多人两组上的质量、多样、同步与面部误差，质量越小越好。

| Method | 1 Speaker | 1 Speaker | 1 Speaker | 1 Speaker | All Speakers | All Speakers | All Speakers | All Speakers |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Method | FGD ↓ | BC ↑ | Div ↑ | MSE ↓ | FGD ↓ | BC ↑ | Div ↑ | MSE ↓ |
| CaMN [45] | 6.64 | 0.677 | 10.86 | – | 5.12 | 0.200 | 5.58 | – |
| DSG [80] | 8.81 | 0.724 | 11.49 | – | 11.74 | 0.734 | 11.12 | – |
| EMAGE [44] | 5.51 | 0.772 | 13.06 | 7.680 | 6.92 | 0.284 | 6.06 | 6.908 |
| DiffSHEG [11] | 8.99 | 0.714 | 11.91 | 7.665 | – | – | – | – |
| MambaTalk [79] | 5.37 | 0.781 | 13.05 | 6.289 | – | – | – | – |
| HoloGest [13] | 5.34 | 0.795 | 14.15 | – | 6.46 | 0.803 | 13.53 | – |
| RAG-GESTURE [54] | 8.08 | 0.734 | 11.97 | – | 4.87 | 0.514 | 9.94 | – |
| SemTalk [91] | 4.28 | 0.777 | 12.91 | 6.153 | – | – | – | – |
| GestureLSM [48] | 4.09 | 0.714 | 13.24 | – | – | – | – | – |
| GlobalDiff [90] | 4.78 | 0.705 | 13.13 | 6.330 | 2.63 | 0.404 | 8.24 | 4.144 |
| Ours | 3.71 | 0.746 | 13.38 | 5.768 | 2.33 | 0.645 | 9.42 | 3.793 |

该表显示 PASPA 在单人与多人下质量均为最优，面部误差也最低，多样次优，同步有竞争力；相对同为流匹配的基线有多项提升。这些结论依赖官方划分与相同特征提取，若换划分、换参考集或重调基线超参数，排序可能变化。用户研究的盲排也支持 PASPA 在 4 维上排名最优，但样本为 18 人共 167 组有效排名，仍属小样本感知证据。

SHOW 表格比较的是同一训练流程不调参直接迁移后的质量、同步与多样，数量级与 BEAT2 不同，需按原表数值阅读。

| Method | FGD ↓ | BA ↑ | Div ↑ |
| --- | --- | --- | --- |
| GT | – | 0.867 | 0.834 |
| LS3DCG [24] | 0.00478 | 0.947 | 0.645 |
| TalkSHOW [85] | 0.00328 | 0.872 | 0.711 |
| DiffSHEG [11] | 0.00271 | 0.902 | 0.810 |
| GlobalDiff [90] | 0.00198 | 0.870 | 1.180 |
| PASPA | 0.00111 | 0.876 | 1.043 |

SHOW 表的阅读要点是质量列的数量级很小，PASPA 为最优且相对基线降幅明显，同步略高、多样次优。这说明补充证据支持跨数据集有效，但同步与多样并非全面领先，不能据此声称所有维度都最强。

### 过去与现在的分工是否必要

该消融固定训练流程，只换过去与现在的建模方式，比较问题是更多历史是否自动带来更好利用。无历史时质量明显变差，说明长期上下文必要；把 token 历史从 8 帧扩到全量，质量有所提升但仍不如状态加注意力；把当前块也换成状态递推，质量甚至不如无历史。这组对照说明现在需要稠密双向交互，过去适合压缩记忆，二者不可互换。

训练构建的消融进一步说明，直接从单块切到多块会因块时间步无序与损失不平衡而变差，加入弱单调、自适应权重、停止梯度与 logit 正态采样后质量逐步恢复并超过起点。引导的消融显示，仅加条件丢弃已能改善质量，再加条件引导继续改善；只加历史丢弃而不加历史引导反而略差，只有包含 2 阶联合项的完整混合引导才大幅改善。这表明历史丢弃本身不是增益来源，增益来自显式的条件与历史联合建模。

### 长时质量衰减与推理代价如何权衡

下表回答长时外推的公平比较问题：在相同其余设置下只换历史传递方式，10 秒、30 秒与 60 秒总长度的末端 10 秒窗口质量与多样如何变化，质量越小越好、多样越大越好。

| Method | [0, 10]s | [0, 10]s | [20, 30]s | [20, 30]s | [50, 60]s | [50, 60]s |
| --- | --- | --- | --- | --- | --- | --- |
| Method | FGD ↓ | Div ↑ | FGD ↓ | Div ↑ | FGD ↓ | Div ↑ |
| Short Seed | 4.731 | 6.581 | 5.886 | 6.033 | 6.721 | 6.081 |
| Token Attention | 4.448 | 6.289 | 5.388 | 6.510 | 5.771 | 6.427 |
| PASPA | 4.448 | 7.217 | 5.119 | 7.133 | 5.745 | 7.138 |

表中可见 PASPA 末端质量随总长度上升的幅度最小，短种子在 60 秒时已明显落后；多样上 PASPA 三处均为最高。这支持长时优势，但需注意这是受控变体之间的比较，不是与全部外部完整方法的比较，且只报告末端窗口。

推理代价方面，不开引导时 PASPA 峰值显存接近短种子而远低于全 token 注意，因为历史被累积进固定状态而非增长的显式缓存；预填充与解码分离是把延迟从最慢变为最快的原因。下表进一步量化最终配置下开启混合引导的额外开销，比较 120 秒、300 秒与 600 秒的延迟与显存。

| Guidance | Lat. (ms) | Mem. (GB) | Lat. (ms) | Mem. (GB) | Lat. (ms) | Mem. (GB) |
| --- | --- | --- | --- | --- | --- | --- |
| No CFG | 11,411 | 0.36 | 28,562 | 0.40 | 55,978 | 0.47 |
| Hybrid CFG | 12,439 | 0.37 | 29,966 | 0.41 | 61,093 | 0.48 |

在 3 个长度上延迟增加约百分之几，峰值显存仅增加 0.01 GB。结合主结果中引导对质量的提升，可以说引导以小代价换质量，但该结论基于小批量动作生成未打满 GPU 的设定，批量或硬件变化时比例会不同。

### 哪些情况仍会失败与被高估

论文明确列出 4 类限制。原理层面，过去慢、现在快的假设只在随语音动作上验证，未验证音乐到舞蹈或文本到动作是否同样成立，直接迁移需重新检验。容量层面，持续状态大小固定，极长序列的早期细节会被覆盖，适合保留缓慢风格统计，但不适合需要精确复述远处动作的任务。训练层面仍用教师强制，推理用自生历史，存在暴露偏差，长滚可能出现重复、姿态塌陷或平移漂移。评价层面尚无公认的长期风格一致性指标，自动指标加小样本用户研究仍不足以覆盖真实部署。

失败案例显示，当真值出现大幅非线性的原地转圈与全局平移时，模型能给出合理局部手势，但转圈轨迹恢复不好，动作停留在原地附近。论文将其归因于沿用已有管线把平移与旋转放在同一流中学习，两者几何结构不同，大幅平移的动态被低估。这提醒读者不要把质量最优误读为轨迹完全准确，尤其在大位移场景要另做验证。

### 复现第一步要固定什么

复现应先固定数据与表示：BEAT2 按官方划分，骨骼 55 关节、平移 3 维、表情 100 维，轴角转 6 维表示后共 333 维，音频为 16 千赫兹的 1024 维 WavLM 特征；SHOW 需把手部主成分展开为轴角并对齐关节顺序，平移置零。块长默认 64 帧，训练窗 256 帧即 4 块，采样 10 步，种子 8 帧预填充，引导强度均取 1.5 且只在时间步 0.1 到 0.6 内生效。

训练用数据并行与 32 位精度，批量每卡 72 序列、全局 288，时间步弱单调的 logit 正态，均值负 1、标准差 1，自适应损失加权开启。优化器为混合设置，隐层矩阵用 Muon、其余用 AdamW，历史模块归入 AdamW，学习率在 5000 步后降低。评测按最优质量检查点报告，BEAT2 数值注意表中的放大倍数，长滚评测只取末端 10 秒窗口。论文提到将公开代码与说明，项目网页在证据中仅为第三方链接可达，不能据此断言作者权重已公开；实际复现仍以官方发布为准。

### 什么时候值得尝试与还缺什么验证

当任务是数十秒的随语音全身动作，且需要保持个人手势幅度与空间偏好，同时希望显存不随长度增长时，PASPA 的分工值得尝试：远历史进固定状态，当前块做块内双向注意力，再用多块监督与混合引导训练推理。若任务要求精确复述远处细节、超长记忆或大范围全局位移，则应谨慎，需另测边界损失与平移建模是否足够。

还缺的验证包括跨域检验、超长序列的遗忘曲线、不同批量与硬件下的真实延迟，以及更大规模感知评测。常见误解是把更多历史等同于更好利用，本文对照恰好说明利用方式比历史长度更重要；另一个误解是把多样次优当成失败，质量最优与多样次优可以并存，选择应看应用更看重分布接近还是样本分散程度。

<details>
<summary>📎 论文与评分元数据</summary>

排名：前50% | 文档类型：方法研究 | [arXiv 原文](https://arxiv.org/abs/2610.32373v1)

</details>

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。

- 评分规则：type-aware-v1

- 评分模型：muse-spark-1.3-contributor

- 评分请求协议：openai_responses

---

[← 返回 2026-10-27 语音/音乐/音频论文速递](/audio-paper-digest-blog/posts/2026-10-27/)
