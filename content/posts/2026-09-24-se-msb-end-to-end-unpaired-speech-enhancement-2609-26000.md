---
title: "SE-MSB: End-to-End Unpaired Speech Enhancement using Mamba Schrödinger Bridges"
date: 2026-09-24
draft: false
tags: [语音增强, 扩散模型, 状态空间模型, 端到端]
categories: [论文速递]
description: "SE-MSB 用扩散薛定谔桥在干净与退化语音分布之间学习双向随机输运，并以端到端 Mamba 波形模型实现，在去混响与混合退化上报告可比拟配对方法的效果，同时保持少步采样与低计算量。"
hiddenInHomeList: true
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_arxiv_id: "2609.26000"
paper_digest_workbench_contract: "researcher-workbench-v1"
paper_digest_reader_title: "不看配对样本，如何学到从退化到干净的随机输运"
paper_digest_original_title: "SE-MSB: End-to-End Unpaired Speech Enhancement using Mamba Schrödinger Bridges"
paper_digest_arxiv_version: null
paper_digest_arxiv_versioned_id: null
paper_digest_arxiv_abs_url: "https://arxiv.org/abs/2609.26000"
paper_digest_arxiv_pdf_url: "https://arxiv.org/pdf/2609.26000.pdf"
paper_digest_primary_task: "语音增强"
paper_digest_taxonomy_contract: "paper-taxonomy-flat-tags-compat-v1"
paper_digest_taxonomy_selection_contract: "paper-taxonomy-selection-v1"
paper_digest_taxonomy_registry_version: "paper-taxonomy-v1"
paper_digest_taxonomy_registry_sha256: "15c82a567ce5a55dc1175684ed08b64c158558639d9c8fb822c9587ec32a8778"
paper_digest_taxonomy_concepts: [{"facet":"task","id":"task.speech-enhancement","label":"语音增强"},{"facet":"method","id":"method.diffusion","label":"扩散模型"},{"facet":"method","id":"method.state-space","label":"状态空间模型"},{"facet":"setting","id":"setting.end-to-end","label":"端到端"}]
paper_digest_primary_method: "扩散模型"
paper_digest_score: 7.2
paper_digest_rank_bucket: "前50%"
paper_digest_document_type: "方法研究"
paper_digest_one_sentence: "SE-MSB 用扩散薛定谔桥在干净与退化语音分布之间学习双向随机输运，并以端到端 Mamba 波形模型实现，在去混响与混合退化上报告可比拟配对方法的效果，同时保持少步采样与低计算量。"
paper_digest_authors: [{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Andreas Bagge"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Andreas Nymand"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Michael Riis Andersen"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Bjørn Sand Jensen"}]
paper_digest_abstract_sha256: "658d036bd3dcb56a66d7a30d090f586ab1e973be504297a748c52752b383b52b"
paper_digest_sidecars: {"citation.bib":{"sha256":"d4b56f8bb0220fbbb38f2b1148981713a2a699304a360991a4edd8932557e6c3","url":"/audio-paper-digest-blog/data/papers/2026-09-24/2609-26000/citation.bib"},"citation.json":{"sha256":"2ef25d26b9246951e2e20fe8e43634245277d7ae8cc2e88fbaa21d83b71826e8","url":"/audio-paper-digest-blog/data/papers/2026-09-24/2609-26000/citation.json"},"citation.ris":{"sha256":"224c919d1135d5132c2eb0b12159a90976f89ba76365082136316c0573dcd762","url":"/audio-paper-digest-blog/data/papers/2026-09-24/2609-26000/citation.ris"},"rethink-context.json":{"sha256":"86d419f2aa911df560a54e9473f736b52ee2f033ebf48544967b7e83f61d6029","url":"/audio-paper-digest-blog/data/papers/2026-09-24/2609-26000/rethink-context.json"}}
paper_digest_api_reader_contract: "beginner-researcher-v3"
paper_digest_api_reader_article_sha256: "810ce9f2f5a322de3fe6448d0aede97ebfde910acdb2f70823e3d8b233491185"
paper_digest_api_reader_plan_sha256: "38622f9a337f93cd11fa588d2e685ad43c12e1653e515cd3bba811e08f1da7e6"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings-v4"
paper_digest_api_reader_source_bindings_sha256: "efdd1f4af3309925e59ff055b456ced02622495a79e1a7cad82bbea5a16e8d1a"
paper_digest_api_reader_source_table_count: 4
paper_digest_api_reader_source_formula_count: 3
paper_digest_api_reader_structured_artifacts_sha256: "f38ad68a72268ddbec2767ad9377deb8c722cb5b4fd8bc969b33df4332302054"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity-v1"
paper_digest_api_reader_author_identity_sha256: "d4e30cdd9ad919fc1f4d505290d6e91dcb604b422a42b70fb9342d1fdb4d70e3"
paper_digest_api_reader_author_count: 4
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity-v1"
paper_digest_api_reader_resource_identity_sha256: "28799e76487f5c8d5f90f3d79104a6579e21d3b0d386de0c1957439409c8cff7"
paper_digest_api_reader_resource_count: 1
paper_digest_api_reader_figure_persistence: "ephemeral-no-persisted-figure-assets-v1"
paper_digest_api_reader_decision_projection: "api-reader-decision-projection-v2"
---

# 📄 不看配对样本，如何学到从退化到干净的随机输运

> 英文题目：*[SE-MSB: End-to-End Unpaired Speech Enhancement using Mamba Schrödinger Bridges](https://arxiv.org/abs/2609.26000)*

> 标签：#语音增强 | #扩散模型 | #状态空间模型 | #端到端
>
> 评分：**7.2/10** | 创新 1.6/2 | 技术严谨 1.3/1.5 | 实验充分 1/1.5 | 清晰度 0.7/1 | 影响力 1/1.5 | 开源 0/1.5 | 可复现 0.3/0.5 | 工程/实践 1.3/1.5


## 👥 作者与机构

- Andreas Bagge：机构信息未在 arXiv HTML 中可靠披露
- Andreas Nymand：机构信息未在 arXiv HTML 中可靠披露
- Michael Riis Andersen：机构信息未在 arXiv HTML 中可靠披露
- Bjørn Sand Jensen：机构信息未在 arXiv HTML 中可靠披露

## 📌 核心摘要

输入为混响、加性噪声与削波退化的单通道语音波形，输出为干净语音波形，难点是真实环境中干净与退化样本无法配对且退化算子未知。方法分三步：先在干净分布与退化分布间以独立采样的随机耦合预训练双向漂移网络，学习前后向过程的漂移估计；再用当前模型仿真生成耦合做微调，以逼近熵正则最优传输的薛定谔桥；然后以Mamba扩散骨干在原始波形上执行少步欧拉采样，直接输出增强波形。该链条区别于经高斯中转的桥方法和需已知退化结构的后验采样方法，直接学习两端分布间随机传输，避免了借助第三分布的中转与启发式相位重建。在VCTK去混响任务评测下，SE-MSB（10）的FAD指标为0.15，低于BUDDy（100）的FAD指标0.17。结论适用边界受限于VCTK合成退化与CHiME-6验证，历史录音与Lombard效应尚未验证。训练为单张 RTX 4090 约 1 天 9 小时，2.048 秒音频 10 步推理约 214.19 ms，原文披露了该成本口径。

## 🔗 开源与复现资源

- 第三方资源：<https://github.com/state-spaces/mamba> — 链接可访问（HTTP 200）

可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 输入是什么，目标是什么，本文解决哪一类增强？

本文的输入是两堆没有对应关系的录音。一堆是干净语音，记作来自干净分布的样本，另一堆是退化语音，记作来自含噪分布的样本。退化包括混响、加性噪声和削波 3 种，实验中还考察混响加噪声、混响加噪声再加削波的复合退化。目标是在推理时给定一段退化波形，输出一段内容不变但听感更干净的波形。传统监督做法要求每个干净句子都有一个由它人工加噪或加混响得到的配对退化版本，模型学习 1 对一的去退化映射。

本文要解决的是完全非配对条件下的学习，也就是训练时干净集合与退化集合独立采样，模型从未见过同一句话的干净与退化同时出现。论文明确指出这种设定对应真实场景，例如用户所处房间混响未知、历史录音退化过程不可仿真、Lombard 效应等难以建模的情况。需要保留的关键信息是训练非配对但评测仍用人为可控退化来计算需要配对的失真指标，作者用 VCTK 做干净源并人工构造退化，但训练时打散配对关系，另用 LibriSpeech 检验跨数据集泛化。

输出是 1 篇可复述训练、推理与评测条件的解读，不做超出原文的性能承诺。

### 同输入同目标的已有路线有何不同假设？

在同样的非配对输入与增强目标下，已有路线做了不同假设。高斯流桥把干净与退化先映射到同一个高斯中间分布，推理时再从中间分布转到目标分布，代价是输运路径不是两分布之间的直接最优输运，且原文指出该基线还以混响时间与清晰度作为条件输入，而 SE-MSB 不使用这类退化描述符。

盲去混响方法 BUDDy 用预训练干净语音扩散模型做先验，在推理时联合估计房间声学参数与干净信号，它假设退化是与未知房间冲激响应的卷积，当退化变为加噪加削波时该假设被违反。扩散后验采样类方法同样需要退化数学结构已知，这在野外数据中往往不成立。配对路线如 SGMSE 与 A2ASB 则要求训练时使用联合分布采样得到的配对样本，其中 A2ASB 在本文附录中被写成只训练后向过程的配对版扩散桥。

本文表 1 的对照把是否非配对、是否端到端、是否任务灵活并列，SE-MSB 三项均为是，而 GFB 不是端到端，BUDDy 不是任务灵活，A2ASB 不是非配对。

**高斯流桥 × 扩散后验采样：** 高斯流桥负责先把两个分布映射到共享高斯中间分布再做转换，扩散后验采样负责用预训练干净语音先验在推理时引导逆过程；搭配理由是两者都避免了训练时需要配对样本，但前者输运路径经过第三方分布而非直接最优，后者需要已知退化数学结构，组合对照意义是说明 SE-MSB 为何选择直接学习两分布之间的桥。

### 配对与非配对的学习对象差在哪里？

配对学习的对象是已知对应关系下的映射，训练可以直接最小化同一句话的输出与干净参考之间的误差。非配对学习的对象是两个分布之间的随机输运，训练只能看到干净集合的边缘分布与退化集合的边缘分布，要求学到的过程把一个分布的样本送到另一个分布，同时保持语音内容。初学者可以把配对理解为老师已经把每道脏卷子与干净答案钉在一起，非配对则是脏卷子与干净答案分开放置，需要模型自己发现合理的对应方式。教学例子仅为帮助理解配对概念，不代表本文使用该数值或该退化强度。

为确认已知对应与待学输运的区别，请先看下图可见的分布椭圆、样本圆点、黑色虚线与浅蓝色箭头。该绑定官方原图像素实际只显示蓝色干净分布椭圆、橙色退化分布椭圆、样本圆点、黑色虚线和浅蓝色向左箭头；像素中没有 Paired 与 Unpaired 标题、没有采样公式、没有波形包络，也没有额外面板。关于配对采样符号与波形示例的说明来自论文正文与公式，另行理解，不归为该图像素所见。

> **看图路径：** 1. 先看左侧蓝色同心椭圆与右侧橙色同心椭圆，确认两个分布的位置与颜色归属；2. 再数蓝色与橙色圆点样本的位置，确认左侧圆点与右侧圆点是否对齐；3. 最后对比左侧黑色水平虚线与两侧浅蓝色向左箭头的有无与走向

[![原论文 Figure 1：In traditional supervised speech enhancement (left), we assume access to a clean sample x_0 from…](https://arxiv.org/html/2609.26000v1/figures/algo_illustration.drawio.png)](https://arxiv.org/html/2609.26000v1/figures/algo_illustration.drawio.png)

*论文图 1。原论文 Figure 1:：“In traditional supervised speech enhancement (left), we assume access to a clean sample x_0 from the clean target distribution and a corresponding degraded sample from the…”。*

该图像素左侧为蓝色同心椭圆表示干净分布，右侧为橙色同心椭圆表示退化分布，椭圆上附着蓝色与橙色圆形样本点。左侧跨分布样本点之间有黑色水平虚线连接，表示已知样本级对应；左右两侧均有浅蓝色向左箭头，表示从退化指向干净的输运方向，右侧只有箭头而无黑色虚线。该图支持的判断是本文方法必须在没有虚线的条件下学习箭头，而限制是该像素不展示具体网络与训练损失，也不包含标题、公式与波形线索，输运质量需由后文实验度量。论文图注仍为原论文 Figure 1 关于传统监督增强与本文方法对独立样本要求的对照描述，来源链接不变。

### 桥过程如何把增强写成两个方向的随机微分方程？

方法全景可以沿一个样本走一遍。取一段退化波形作为起点，目标是经过后向随机微分方程的仿真得到干净波形。训练时另有干净波形作为另一端的起点，用于学习前向方程。两个方程共享扩散系数，原文为简化假设扩散系数为常数，学习对象只剩下两个漂移项。推理时只需要后向漂移，从退化样本出发逐步去噪去混响。

表示层面直接使用原始波形采样点，不经过固定短时傅里叶变换。组件层面用同一个神经网络加方向指示变量同时近似前后向漂移。目标层面用漂移回归损失逼近两端点决定的条件漂移。输出层面用欧拉马鲁亚纳离散仿真得到波形。

**薛定谔桥 × 熵正则最优输运：** 薛定谔桥负责给出两个任意分布之间最可能的随机演化路径，熵正则最优输运负责定义这条路径的优化目标即在输运代价之外保留随机性；两者搭配的理由是纯确定性映射难以表达语音退化的多变性，而带熵正则的随机桥可以直接从非配对样本学习，组合意义是把增强问题转化为可仿真的前后向随机微分方程的漂移学习问题。

网络对漂移的参数化用方向变量区分前后向，时间变量表示当前在桥上的位置。

\[f({\mathbf{X}}_{t},t)\approx v_{\theta}({\mathbf{X}}_{t},t,1),\hskip 14.22636ptb({\mathbf{X}}_{t},t)\approx v_{\theta}({\mathbf{X}}_{t},t,0),\]

该式说明输入为当前桥状态、时间与方向指示，输出为对应方向的漂移估计，前向对应指示为 1，后向对应指示为 0。给定两端点时桥中间点的条件分布是高斯，其均值为两端点的线性插值，方差为与时间有关的抛物线形状。

\[p({\mathbf{X}}_{t_{k}}|{\mathbf{X}}_{0},{\mathbf{X}}_{1})=\mathcal{N}((1-t_{k}){\mathbf{X}}_{0}+t_{k}{\mathbf{X}}_{1},\beta t_{k}(1-t_{k})\mathbf{I}).\]

该式说明训练时可以在随机时间采样中间点，均值由干净端与退化端加权得到，方差由常数扩散系数与时间乘积决定。附录中配对版 A2ASB 在常数扩散系数下的中间分布被化简为同样形式。

\[\mu_{t}=(1-t){\mathbf{X}}_{0}+t{\mathbf{X}}_{1},\hskip 14.22636pt\Sigma_{t}=\beta t(1-t)\mathbf{I}\]

该式与上一式一致，表明在常数扩散系数假设下配对版与非配对版的中间采样公式相同，区别在于耦合来源是联合分布还是独立采样加模型仿真。原文报告当扩散系数取零时该算法退化为回流算法的随机版本，此时流趋向直线，这为少步采样提供了机制解释，但原文未给出该性质在语音上的形式化证明，仅以实验显示步数鲁棒性。

### Mamba 扩散模型内部如何处理波形与条件？

沿样本继续走，退化波形先进入 1 维卷积编码器。原文给出卷积核长 256、步长 16、填充 120，输出通道 512，序列长度满足 T 除以 16，可理解为可学习的时频表示。时间步经过类似扩散模型常用的时间嵌入，方向变量用可学习嵌入表示，两者相加得到条件向量并广播到每个 Mamba 扩散块。每个块内部先对语音表示做层归一化，对条件向量做两路线性变换，一路加一后做乘法调制，另一路做加法偏置，这种自适应层归一化把扩散位置与方向信息注入每一层。

调制后的序列进入双向 Mamba2 个分支，一路先翻转时间轴再过 Mamba2 再翻转回来，另一路直接过 Mamba2，两路在通道维拼接后经线性层输出。堆叠 10 个这样的块后经反卷积回到原始采样率，输出与输入波形同形状。模型总量约为 45 million parameters，与高斯流桥的 44 million parameters 量级相当。选择 Mamba 的理由是原始波形序列长，线性扩展比 2 次扩展更省计算，且推理时状态大小恒定。

**前向漂移 × 后向漂移：** 前向漂移负责把干净样本推向退化分布，后向漂移负责把退化样本拉回干净分布；搭配理由是增强推理只需要后向方向，但双向同时训练可以互相提供耦合样本，组合意义是用同一个网络加方向指示变量同时参数化两个漂移，减少参数并保持双向一致性。

为确认编码、条件广播与双分支汇合的具体位置，请仔细对照下图上下两部分的分工与连接关系。该图上半为整体模型、下半为单个扩散块，像素中可见输入符号与模块方框及箭头走向，解读只依据这些可见框线。

> **看图路径：** 1. 先沿顶部主链从输入波形经一维卷积到多个扩散块再到反卷积；2. 再看时间步与方向嵌入如何相加后广播到每个扩散块；3. 最后在下半块内确认条件分支经缩放平移后与双向 Mamba 分支的汇合点

[![原论文 Figure 3：The Mamba Diffusion Model architecture proposed for SE-MSB.](https://arxiv.org/html/2609.26000v1/figures/model_architecture.drawio.png)](https://arxiv.org/html/2609.26000v1/figures/model_architecture.drawio.png)

*论文图 3。原论文 Figure 3:：“The Mamba Diffusion Model architecture proposed for SE-MSB.”。*

上半部分为整体模型，从左到右依次为 1 维卷积、多个 Mamba 扩散块与反卷积，左侧另有时间步嵌入器与方向嵌入器经加法节点后向上广播到每个扩散块。下半部分为单个扩散块，左侧输入为语音表示与条件向量，条件经两路线性层分别参与乘法与加法调制，中间为翻转加 Mamba2 的上支路与直接 Mamba2 的下支路，右侧经拼接与线性层输出。该图支持的判断是条件在每一块都重复注入而非只在入口注入，限制是图中未标注具体通道数与状态维度，需结合附录文字中的 512 维与 128 维状态复现。

**Mamba × 端到端波形处理：** Mamba 负责以选择性状态空间实现序列长度线性扩展的长序列建模，端到端波形处理负责直接对原始采样点学习内部表示而不依赖固定短时傅里叶变换；搭配理由是原始波形维度高而 Transformer 类结构计算增长快，组合意义是用可学习的卷积前端加堆叠 Mamba 扩散块同时保留相位信息与推理效率。

### 预训练与微调各做什么，何时重置耦合？

训练分为预训练与微调 2 个阶段。预训练时从干净分布与含噪分布独立抽样组成随机耦合，在随机时间采样桥中间点，网络回归前后向条件漂移，目标分别为退化端减中间点除以剩余时间，以及干净端减中间点除以已过时间。损失为前后向两项平均的 L1 误差，梯度同时更新同一网络。微调时不再使用随机耦合，而是用当前网络参数仿真前后向随机微分方程得到耦合，再用同样的漂移回归目标继续训练。

原文算法用 20 步欧拉马鲁亚纳仿真生成微调耦合，总步数为预训练 250k 步加微调 100k 步共 350k 步。优化器为 AdamW，学习率恒定，梯度裁剪与混合精度与指数滑动平均按附录设置。需要指出的缺项是原文未报告何时判定收敛的具体阈值，也未消融微调起始时机与仿真步数对最终桥质量的影响，因此复现时应保留原文的 250k 加 100k 划分作为起点。

**扩散薛定谔桥匹配 × 回流算法：** 扩散薛定谔桥匹配负责用随机耦合预训练加仿真耦合微调来逼近桥过程，回流算法负责在去掉噪声时给出沿直线输运的确定性版本；搭配理由是前者解释了为何先随机配对再用当前模型生成配对可以逐步拉直输运，后者解释了为何该过程支持少步采样，组合意义是训练与推理步数的解耦。

下表把训练中可直接复用的时间、采样与优化条件整理为可核对条目，表中数值与单位均来自原文连续句子，不做四舍五入。表前问题的关键是哪些训练条件是原文明确给出的，公平复现应锁定这些条件再比较方法差异。

| 条件类别 | 训练阶段 | 原文配置 | 测试对应 | 备注 |
| --- | --- | --- | --- | --- |
| 总步数 | 预训练加微调 | 250k 加 100k 共 350k | 不适用 | 分阶段明确 |
| 优化器 | 全程 | AdamW 恒定学习率 | 不适用 | 梯度裁剪 1.0 |
| 训练切片 | 训练 | 1.00 seconds at 16 kHz | 5.12 seconds | 长度不同需分段 |
| 批大小 | 全程 | batch size of 18 | 不适用 | 与附录 8 冲突需记录 |
| 计算输入 | 效率统计 | 32768 samples 2.048 seconds at 16 kHz | 同左 | 浮点量基准 |

表后解释是这些条目构成复现基线的主要代价与边界。250k 加 100k 意味着单卡约 1 天 9 小时的预算，1.00 秒训练切片与 5.12 秒测试切片的差异意味着长句需拼接或分段，16 kHz 意味着 48 kHz 原始数据需重采样。未胜出项是附录中批大小写为 8 而正文写为 18，两处冲突需在复现记录中明确采用哪一处，本文解读表采用正文的 18 以对应主实验描述。

### 数据、退化构造与指标如何对应评测问题？

评测围绕 3 个问题组织。去混响问题测房间卷积的可逆程度，混合退化问题测方法对未知复合退化的任务灵活性，少步采样问题测计算量下降时性能是否保持。干净源为 VCTK，约 109 人约 44 小时，48 kHz 重采样到 16 kHz，训练测试划分保留未见房间冲激响应。噪声源为 WHAM!约 78 小时真实环境噪声，按 5 dB 信噪比混合，削波实验随机去除 0 到 1 dB 信号功率。

跨域检验用 LibriSpeech 测试集约 5.4 小时 40 人。计算量度量用处理 32768 采样点即 2.048 秒 16 kHz 音频所需的浮点运算，工具为 PyTorch 计数器加 Mamba2 选择性扫描的手工计数。指标方向为 FAD 越低越好，DNSMOS 越高越好，SISDRi 越高越好，WER 越低越好，说话人余弦相似度越高越好。其中 WER 用小 Whisper 转写干净参考得到伪真值，作者提醒该转写模型对失真鲁棒故不完全代表重建质量，说话人相似度用说话人嵌入余弦计算，FAD 用 CLAP 编码计算。基线覆盖非配对的 GFB、BUDDy 与 WPE，配对的 SGMSE、配对版 SE-MSB 即 A2ASB、UNIVERSE++ 与 Sepformer，以及不处理的上界对照。

下表把数据源与退化构造整理为可核对条目，表中条件均有原文句子支撑。表前比较问题是各方法是否在同一干净源与同一退化族上训练，公平条件是 GFB 与 BUDDy 同样使用 VCTK 干净语音且 GFB 使用相同混响集合。

| 数据用途 | 数据集 | 退化构造 | 采样率 | 说明 |
| --- | --- | --- | --- | --- |
| 干净训练评测 | VCTK | 人声 | 16 kHz | 主实验干净源 |
| 混响 | 多房间冲激响应集合 | 卷积 | 16 kHz | 测试用未见房间 |
| 加噪 | WHAM! | 5 dB SNR | 16 kHz | 真实环境噪声 |
| 削波 | 同上混合后 | 去除 0 到 1 dB 功率 | 16 kHz | 仅部分实验 |
| 跨域 | LibriSpeech | 同样加混响 | 16 kHz | 检验泛化 |

表后解释是该构造支持的判断与限制。支持的是训练非配对但评测用人工配对计算失真指标，因此 SISDRi 等内容保真度指标可计算。限制是人工混响加噪仍可能与真实野外分布有差距，CHiME-6 等真实录音只能报告无需配对的 FAD 与 DNSMOS，未报告 SISDRi 等需参考的指标，这是未评测边界。

### 去混响与混合退化各在什么条件下胜出？

主结果按条件分述。去混响的 VCTK 与 Libri 评测中，SE-MSB 在非配对组内多数指标占优或持平，但 BUDDy 在充分优化步数下部分感知指标更高，代价是计算量高约两个数量级。混合退化中当假设为纯卷积被违反时，SE-MSB 大幅超过 BUDDy，并与监督 Sepformer 接近。少步采样中 SE-MSB 在 10 步与 50 步差异很小，而 GFB 从 10 步到 50 步提升明显。

原文结果段的原话是去混响与效率结果显示 SE-MSB 在多数指标上被 BUDDy 适度超过但效率高约两个数量级，混合任务显示当退化不再只是房间冲激响应卷积而是包含加噪与削波时 SE-MSB 大幅领先，少步结果显示 SE-MSB 几乎不受采样步数影响而 GFB 在少步时明显下降。这些表述界定了胜出条件而非无条件最优。下表把原文对 3 类结果的定性判断整理为可核对的对照，表中对象与条件均来自原文连续报告，不引入无源数值。

表前比较问题是在相同计算预算与相同退化假设下谁更稳，指标方向按 FAD 与 WER 越低越好、其余越高越好。

| 评测问题 | 比较对象 | 原文报告 | 代价或条件 | 适用判断 |
| --- | --- | --- | --- | --- |
| 去混响效率 | SE-MSB 对 BUDDy | 适度落后但效率高约两个数量级 | BUDDy 需更多优化步 | 预算受限时选少步桥 |
| 混合退化 | SE-MSB 对 BUDDy | 大幅领先 | BUDDy 卷积假设被违反 | 未知复合退化选任务灵活方法 |
| 少步采样 | SE-MSB 对 GFB | 前者几乎不变后者明显下降 | GFB 需更多步 | 推理步数可调时桥更稳 |
| 配对差距 | 非配对对配对 | 部分指标差距可忽略 | 配对仍多胜 | 有配对时配对仍是上限参考 |

表后解释是主要收益与具体代价。收益是 10 步推理即可保持性能，Mamba 线性扩展使长波形可行。代价是去混响的绝对感知上限仍属于配对模型与充分优化的 BUDDy，反例是 Libri 上 WPE 等传统方法在部分保真指标上仍具竞争力，因此不能把非配对灵活直接读成全面超越。原文还提示步数增加时 WER 与 SISDRi 可能轻微变差，暗示感知与失真的权衡，总体趋势不等于每步都单调变好。

### 步数变化时性能曲线给出什么可操作结论？

少步实验只用一个已训练模型在推理时改变扩散步数，分别在 10 到 50 步之间评测 FAD、DNSMOS、SISDRi、说话人相似度与 WER。操作上这是推理超参数而非重新训练，因此结论可直接用于部署。可见内容是蓝色 SE-MSB 曲线在 5 个子图中几乎水平，绿色配对版同样水平但位置更高，橙色 GFB 在 FAD 与 DNSMOS 上随步数增加明显改善，在少步端落差最大。需要先确认纵轴方向再判断好坏，FAD 与 WER 向下越好，DNSMOS、SISDRi 与相似度向上越好，不能把曲线向下一律读成变差。为确认少步鲁棒性与 GFB 的步数敏感性，请看下图的五联曲线。该图横轴均为扩散步数，纵轴分别为各指标，图例区分 3 条曲线，解读只依据可见曲线走向。

> **看图路径：** 1. 先横看每个子图横轴扩散步数从 10 到 50 的变化方向；2. 再纵看橙色曲线与其他两条曲线的斜率差异；3. 最后重点观察左下与右下两幅小样本波动较大的区间

[![原论文 Figure 4：Metrics as a function of the number of diffusion steps.](https://arxiv.org/html/2609.26000v1/figures/diffusion_steps.png)](https://arxiv.org/html/2609.26000v1/figures/diffusion_steps.png)

*论文图 4。原论文 Figure 4:：“Metrics as a function of the number of diffusion steps. The SE-MSB model is almost unaffected by the number of steps, showing that SE-MSB can do few-step generation.”。*

左上 FAD 越低越好，蓝色与绿色几乎水平，橙色从 10 步高点快速下降到 20 步后趋平。中上 DNSMOS 越高越好，蓝色与绿色水平，橙色从 10 步低点陡峭上升。右上 SISDRi 越高越好，蓝色与绿色水平，橙色在零附近波动。左下说话人相似度越高越好，蓝色与绿色水平，橙色随步数上升。右下 WER 越低越好，蓝色轻微起伏，绿色平稳，橙色在 20 步处方差带很大随后回落。该图支持的判断是 SE-MSB 可用 10 步部署以节省计算，限制是像素无法精确读出每步数值，精确数字需以原文表格为准，且 WER 随步数增加轻微变差的机制未验证。

### 哪些边界未被测到，不宜推广到哪里？

原文明确留下的边界有 3 类。内容保真度指标依赖人工配对构造，真实 CHiME-6 录音只能报告 FAD 与 DNSMOS 而无 SISDRi、WER 与说话人相似度，因此真实野外的可懂度与说话人保持程度待验证。基线覆盖以 16 kHz 英语朗读为主，未报告多语种、强混响加低信噪比极限、流式因果推理与实际延迟，训练资源、推理浮点量、墙钟时间与参数量需分别讨论，不能把浮点量低直接等同于端到端延迟低。

方法层面微调依赖当前模型仿真生成耦合，若初始预训练桥偏差大，微调可能放大偏差，但原文未给出失败案例的诊断。此外 GFB 使用了混响时间与清晰度条件而 SE-MSB 未用，这使公平性解读需谨慎，一方有额外信息而另一方没有。缺失证据不是技术错误，相关性也不是因果，本文未测量误判率与个性化联邦场景下的隐私代价，不承诺这些量得到改善。

### 复现应先锁定哪些超参数与代码条件？

复现先做数据与训练锁定。数据侧把 VCTK、房间冲激响应集合、WHAM!与 LibriSpeech 统一到 16 kHz，训练切片 1.00 秒、测试切片 5.12 秒，音频归一化到负 20 dBFS 后乘以 20 以保证梯度尺度，损失用 L1。模型侧用 1 维卷积加 10 个 Mamba 扩散块，模型维 512、状态维 128，其余沿用 Mamba2 默认，扩散系数取 0.1，微调仿真用 20 步。优化侧用 AdamW 恒定学习率，梯度裁剪 1.0、混合精度与指数滑动平均，单卡 24 GB 约 1 天 9 小时。

下表把可运行的关键预算与仿真条件整理为核对清单，表中数字与单位来自原文连续句子。表前问题是哪些配置是复现必须相同的，公平条件是先复刻该配置再调步数与采样器。

| 复现项 | 原文配置 | 硬件或阶段 | 说明 | 风险 |
| --- | --- | --- | --- | --- |
| 优化器 | AdamW 恒定学习率 | 全程训练 | 权重衰减为零 | 学习率调度缺项 |
| 微调仿真 | 20 diffusion steps | 微调阶段 | 欧拉马鲁亚纳 | 步数影响待消融 |
| 扩散系数 | 0.1 | 全部任务 | 参数扫描后选择 | 其他任务需重扫 |
| 单卡预算 | 24 GB 约 1 day and 9 hours | 单卡训练 | 4090 级别 | 显存不足需降批 |

表后解释是具体代价与操作。20 步微调仿真与 350k 总步数决定了训练时间主要花在仿真上，0.1 的扩散系数是扫描结果而非理论最优，换任务应重扫。第三方 Mamba 代码当前可用，链接状态为 available，但本文匿名代码链接与权重可得性需以正式发布为准，区分代码开源、权重下载与系统可运行三者。推理时步数可在 10 到 50 之间调节而不重训，这是实际可部署的策略，搜索最优步数应单独标注而非代替部署收益。

### 何时值得尝试这种桥方法，还需补哪项验证？

当训练只有两堆独立录音而无法获得配对，且退化结构未知或复合多变时，值得尝试直接学习两分布之间随机桥的路线。当已有大量高质量配对或退化就是已知卷积且可用传统方法稳定解决时，配对模型或 WPE 仍可能是更省预算的选择。复现建议先锁定 16 kHz、1.00 秒训练切片、0.1 扩散系数与 20 步微调仿真，跑通去混响后再做混响加噪与削波的复合任务，最后再做 10 步与 50 步的推理对照。

还需补的验证是真实录音上的可懂度与说话人一致性、长句拼接伪影、多语种与低资源口音的稳定性，以及流式部署的实际延迟与内存占用。理解上应把薛定谔桥记为分布之间的随机输运目标，把 Mamba 记为处理长波形的效率载体，两者组合的意义是以较少推理步数实现任务灵活的增强，而非在所有指标上无条件取代配对监督。

<details>
<summary>📎 论文与评分元数据</summary>

排名：前50% | 文档类型：方法研究 | [arXiv 原文](https://arxiv.org/abs/2609.26000)

</details>

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。

- 评分规则：type-aware-v1

- 评分模型：muse-spark-1.3-contributor

- 评分请求协议：openai_responses

---

[← 返回 2026-09-24 语音/音乐/音频论文速递](/audio-paper-digest-blog/posts/2026-09-24/)
