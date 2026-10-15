---
title: "Spend Where It Matters: Particle Search with MH Refinement for Budget-Constrained Audio-Visual Alignment"
date: 2026-10-15
draft: false
tags: [音视频生成, 动态计算与早退, 音视频, 高效推理]
categories: [论文速递]
description: "论文针对联合音画生成中多目标对齐需要大量模型评估的问题，提出先做方差引导的自适应粒子搜索再做短链局部修正的两阶段推理对齐方法，在匹配计算量下提升七个对齐指标并用图像实验验证分配策略的通用性，代价是需要维护在线调度参数和两阶段奖励设置。"
hiddenInHomeList: true
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_arxiv_id: "2610.12811"
paper_digest_workbench_contract: "researcher-workbench-v1"
paper_digest_reader_title: "把有限计算花在刀刃上：粒子搜索加局部修正的音画对齐"
paper_digest_original_title: "Spend Where It Matters: Particle Search with MH Refinement for Budget-Constrained Audio-Visual Alignment"
paper_digest_arxiv_version: 1
paper_digest_arxiv_versioned_id: "2610.12811v1"
paper_digest_arxiv_abs_url: "https://arxiv.org/abs/2610.12811v1"
paper_digest_arxiv_pdf_url: "https://arxiv.org/pdf/2610.12811v1.pdf"
paper_digest_primary_task: "音视频生成"
paper_digest_tags_contract: "paper-tag-flat-tags-v2"
paper_digest_tags_selection_contract: "paper-tag-selection-v2"
paper_digest_tags_registry_version: "paper-tag-catalog-v2"
paper_digest_tags_registry_sha256: "cdef54423b5dfc00a1d017ef6639446d2ecd1d9c1acf71c8eb4f6219a46b7ba8"
paper_digest_tags_concepts: [{"facet":"task","id":"task.av-generation","label":"音视频生成"},{"facet":"method","id":"method.dynamic-computation","label":"动态计算与早退"},{"facet":"signal","id":"signal.audiovisual","label":"音视频"},{"facet":"research_focus","id":"research_focus.efficiency","label":"高效推理"}]
paper_digest_primary_method: "动态计算与早退"
paper_digest_score: 7.4
paper_digest_rank_bucket: "前50%"
paper_digest_document_type: "方法研究"
paper_digest_one_sentence: "论文针对联合音画生成中多目标对齐需要大量模型评估的问题，提出先做方差引导的自适应粒子搜索再做短链局部修正的两阶段推理对齐方法，在匹配计算量下提升七个对齐指标并用图像实验验证分配策略的通用性，代价是需要维护在线调度参数和两阶段奖励设置。"
paper_digest_authors: [{"affiliations":["University of Illinois Urbana-Champaign","Adobe Research"],"name":"Shivanshu Shekhar"},{"affiliations":["Adobe Research"],"name":"Raghavendra Addanki"},{"affiliations":["University of Illinois Urbana-Champaign"],"name":"Tong Zhang"},{"affiliations":["Adobe Research"],"name":"Uttaran Bhattacharya"}]
paper_digest_abstract_sha256: "93b6edcbf6d71c8475f71628f61cd543a76aa440c43a3760858c21ae13defe5e"
paper_digest_sidecars: {"citation.bib":{"sha256":"a260853e88d0e5dc81896a2e93efb43b7ce16b570a537da12794620210fb398c","url":"/audio-paper-digest-blog/data/papers/2026-10-15/2610-12811/citation.bib"},"citation.json":{"sha256":"9959b1dbbc01e3cde5915c92f59f3b3bbce36e0b478f0f8070683cd55a57e9f6","url":"/audio-paper-digest-blog/data/papers/2026-10-15/2610-12811/citation.json"},"citation.ris":{"sha256":"973bd9abe2502b9254a8ff3da8947f9b56b58c574ce1739a37d023db1034a240","url":"/audio-paper-digest-blog/data/papers/2026-10-15/2610-12811/citation.ris"},"rethink-context.json":{"contract":"paper-research-context-v2","sha256":"1c0f4a5228c18c9dff5d8e271198d1a7c6fe44c0ab021fd855d643202af7ef6b","url":"/audio-paper-digest-blog/data/papers/2026-10-15/2610-12811/rethink-context.json"}}
paper_digest_api_reader_contract: "beginner-researcher-v3"
paper_digest_api_reader_article_sha256: "b3e986902e84e61acad16d1e07173f75f7e08972fea62ed0fcce433b69d2d9d5"
paper_digest_api_reader_plan_sha256: "731ee83d11557ded7e33ea87b9fbb9c920af7f09d006e78b32f36045f6d44a70"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings-v4"
paper_digest_api_reader_source_bindings_sha256: "faf36b65c7dbad646471f82b5e2113433ecc456c72bb342932260d96bcdcc3a0"
paper_digest_api_reader_source_table_count: 3
paper_digest_api_reader_source_formula_count: 5
paper_digest_api_reader_structured_artifacts_sha256: "34944e616d95d5a09d395040f67bc42bb0cec0e1e3ed72551fc6c1133016595e"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity-v1"
paper_digest_api_reader_author_identity_sha256: "655d9919bb04c9c479e8c7dfad12c0eb35d9508a86b2c3a7b3163a7383c7d82a"
paper_digest_api_reader_author_count: 4
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity-v1"
paper_digest_api_reader_resource_identity_sha256: "04ef5ad5fb495c55fd11542fad181873e3f3a937c61c3d7a31a6b836b5b01201"
paper_digest_api_reader_resource_count: 0
paper_digest_api_reader_figure_persistence: "ephemeral-no-persisted-figure-assets-v1"
paper_digest_api_reader_decision_projection: "api-reader-decision-projection-v2"
---

# 📄 把有限计算花在刀刃上：粒子搜索加局部修正的音画对齐

> 英文题目：*[Spend Where It Matters: Particle Search with MH Refinement for Budget-Constrained Audio-Visual Alignment](https://arxiv.org/abs/2610.12811v1)*

<!--paper-tag-hierarchy-v1:start-->

**研究分类**

- **研究任务**：[音视频生成](/audio-paper-digest-blog/papers/?concept=task.av-generation)
- **研究方法**：[模型压缩](/audio-paper-digest-blog/papers/?concept=method.compression) → [动态计算与早退](/audio-paper-digest-blog/papers/?concept=method.dynamic-computation)
- **信号**：[音视频](/audio-paper-digest-blog/papers/?concept=signal.audiovisual)
- **研究重点**：[高效推理](/audio-paper-digest-blog/papers/?concept=research_focus.efficiency)

<!--paper-tag-hierarchy-v1:end-->

> 评分：**7.4/10** | 创新 1.5/2 | 技术严谨 1.3/1.5 | 实验充分 1.3/1.5 | 清晰度 0.8/1 | 影响力 1/1.5 | 开源 0/1.5 | 可复现 0.3/0.5 | 工程/实践 1.2/1.5


## 👥 作者与机构

- Shivanshu Shekhar：University of Illinois Urbana-Champaign；Adobe Research
- Raghavendra Addanki：Adobe Research
- Tong Zhang：University of Illinois Urbana-Champaign
- Uttaran Bhattacharya：Adobe Research

## 📌 核心摘要

联合音视频生成需从文本同时生成匹配的画面与声音，难点是文本与画面、文本与音频、音频与画面三组对齐须同时满足，而每次评估都消耗昂贵的模型前向计算。论文提出的Spend Where It Matters先用自适应粒子漏斗在去噪轨迹上全局搜索，按中间奖励筛选粒子并输出得分最高的完整样本，再以该样本为起点做短链Metropolis-Hastings局部扰动与重去噪。粒子阶段在有限预算内建立粗粒度结构，MH阶段在粗结构固定后优化细粒度对齐，两阶段共享同一个总前向次数预算。该方法免训练，推理开销以总前向次数计，音视频实验为360次中粒子搜索200次加MH精修160次，高预算为560次中粒子400次加MH160次。在JavisBench-Mini上，360次前向计算下SWIM以JavisDiT++为底座时七个指标平均相对提升30.7%超过Best-of-N、14.1%超过EvoSearch，以LTX-2为底座时平均相对提升9.2%超过Best-of-N、17.0%超过EvoSearch。高预算560次前向计算下，在JavisBench-Mini上七个指标平均相对增益为JavisDiT++上31.5%超过Best-of-N、13.5%超过EvoSearch，LTX-2上7.2%超过Best-of-N、10.9%超过EvoSearch。结论适用于预算受限的推理时对齐，在预算很大、均匀分配已能充分探索时自适应分配的额外收益会缩小。

## 🔗 开源与复现资源

本次未形成可展示的已核验资源记录，开放状态尚未核实。

可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 联合音画生成要解决什么样的对齐问题

这篇论文研究的输入是一个文本提示，输出是一段同时包含画面和声音的视频。理想的输出要同时满足 3 类要求：画面内容符合文本描述，音频内容符合文本描述，音频和画面在时间和语义上互相配合，例如画面中出现敲门动作时声音也应在相近时刻出现敲门声。论文使用的两类主干模型是联合生成音频和视频的流匹配模型，分别是 JavisDiT++ 和 LTX-2，它们从噪声出发经过约 50 步去噪得到完整样本。

问题在于，即使主干模型已经能生成大致合理的视频和音频，文本与视觉、文本与音频、音频与视觉之间的细致对齐仍然容易出错。论文把解决办法限定在推理时对齐，也就是不修改生成器权重，只在生成过程中通过奖励模型打分来挑选和改进样本。这样做的好处是更换对齐目标时只需更换奖励模型，不需要重新训练。对于刚入门的读者，可以把整个任务理解为：在总计算量固定的前提下，如何用尽量少的生成器前向评估次数，找到奖励更高的完整音画样本。

### 已有路线为什么在有限预算下不够用

论文把相关工作分成两条线。第一条是音画对齐本身。训练侧的方法通过修改模型来改善同步，例如用时间错位负样本做偏好优化，或引入双流结构和同步感知训练；推理侧的 ITS-AVGen 则用多个验证器和自适应奖励加权同时优化粗细粒度目标。论文的方法属于推理侧，与训练侧的输入输出相同但运行阶段不同，因此不能把是否训练模型的差异直接解读为同等预算下的优劣。

第二条是高效推理时对齐。Best-of-N 独立生成多个完整样本再取最高分，优点是简单并行，缺点是失败轨迹的计算无法复用；Feynman-Kac 类转向方法用相互作用的粒子和中间重采样来引导轨迹，VASR 进一步研究方差最优的重采样；EvoSearch 沿去噪轨迹做进化搜索；MH 类方法做局部加噪再去噪的修正。

论文指出，粒子数有限会带来估计误差，MH 从弱起点出发则混合缓慢需要大量全局探索，而过早引入细粒度奖励可能在粗结构未建立时给出不可靠信号。这些判断是提出 2 阶段分工的直接动机。

### 预算约束具体限制了什么

论文用 NFE 表示总预算，也就是生成器前向评估的总次数。一次去噪步推进一个粒子消耗一次评估，粒子越多、步数越多、MH 提议越多，总花费就越高。实验中音画部分设置了 360 和 560 两档总预算，其中粒子阶段分别占 200 和 400，MH 阶段占 160，每个 MH 提议花费 8 次评估，共做 20 个提议。图像部分以 400 次评估为主要比较点。预算约束的含义是：不能靠无限增加粒子数或无限延长 MH 链来换取奖励，必须在同一数量级的总评估次数下比较均值奖励。

论文还强调，粒子阶段结束时只保留奖励最高的一个终止粒子作为 MH 起点，最终输出是搜索决策的结果，而不是从某个奖励倾斜分布中的一次抽样。因此，报告的提升是在固定花费下搜索和修正策略带来的提升，而不是模型本身生成能力的变化。

### 两阶段流程如何分工

方法名为 Spend Where It Matters，简称为 SWIM，包含前后衔接的两个阶段。第 1 阶段是自适应粒子漏斗：从多个独立噪声出发并行去噪，在固定的检查点处打分、估计权重离散度，然后决定下一段保留多少粒子，目标是把计算集中到信息量大的去噪段，先建立粗对齐并得到一个有希望的候选。第二阶段是 MH 修正：把第 1 阶段终止时奖励最高的完整样本作为短链起点，反复做整体隐变量加噪到水平再重新去噪得到提议，按奖励差决定接受与否，进一步提升细粒度对齐。

2 阶段的预算切分是事先固定的，在线自适应只发生在粒子阶段内部。论文的中心主张是：在匹配计算量时，粒子搜索加 MH 修正的组合高于只用其中之一，因为前者提供全局探索和好起点，后者回收有限粒子留下的估计误差，而不需要把同样计算量花在更多粒子上。

### 自适应粒子漏斗如何决定每段留多少粒子

粒子漏斗把 50 步去噪按检查点切成若干段，原文默认检查点在第 10、20、30、40 步。设初始粒子数为 K0，每段长度为 Lm，每段维持的粒子数为 Km，传播 Km 个粒子走 Lm 步就花费 Km 乘以 Lm 次评估。在检查点处，论文对到达的粒子用中间奖励打分，得到非负选择权重，并用有效样本量计算权重的平方变异系数的经验估计。这个估计在权重相等时为零，权重集中到少数粒子时变大，它是当前可在线获得的离散信号。

**粒子搜索 × 重采样：** 粒子搜索指同时推进多个去噪轨迹并在检查点保留高奖励轨迹的全局探索方式，重采样指按选择权重从到达粒子中抽出下一阶段粒子数的操作，二者搭配后搜索负责提出多样候选，重采样负责把计算集中到有希望的分支上，组合起来在固定步数内实现可复用的全局探索。

论文用该离散度构造估计方差代理，即各检查点离散度除以对应粒子数后的求和。原文明确说明这只是一个易于处理的代理，不是最终输出的精确方差，因为重采样后的轨迹共享祖先，还存在依赖和传播效应。

\[\hat{\sigma}_{m}^{2}=\frac{K_{m-1}}{\mathrm{ESS}_{m}}-1,\]

在把离散系数看作已知、初始粒子数固定的条件下，最小化该代理并满足粒子预算约束，得到闭式最优分配：粒子数与下一检查点的预期离散度成正比，与该段长度的平方根成反比。段越长越贵，应少放粒子；离散越大，说明该处选择不确定性大，应多放粒子。

\[\min_{K_{1},\ldots,K_{M-1}}\;\sum_{m=1}^{M-1}\frac{\sigma_{m+1}^{2}}{K_{m}}\qquad\text{s.t.}\quad\sum_{m=1}^{M-1}K_{m}L_{m}=\tilde{B}-K_{0}n_{1}.\]

\[K_{m}^{*}=\frac{\tilde{B}-K_{0}n_{1}}{\mathcal{Z}}\cdot\frac{\sigma_{m+1}}{\sqrt{L_{m}}},\qquad 1\leq m\leq M{-}1,\]

实际推理时未来离散度未知，论文用当前估计作为一步预测，并用对偶变量调节总体计算规模。若之前花超了按比例应花的目标，对偶变量增大，下一段粒子数缩小；若之前花少了，则允许下一段增大。为了防止单点高方差一次花光预算，还设置了保留未来最少粒子数的 pacing 下限和保证剩余段至少各走一个粒子的可负担上限。

**有效样本量 × 估计方差代理：** 有效样本量衡量选择权重的集中程度，权重越集中有效样本量越小，估计方差代理把各检查点的权重离散度除以该段粒子数后求和，二者搭配后前者提供每个检查点可在线算出的离散信号，后者把这些信号变成跨检查点的分配目标，组合起来指导哪里值得多放粒子。

\[\nu_{m}=\max\left\{\nu_{\min},\nu_{m-1}+\eta_{\nu}\frac{C_{m-1}-T_{m-1}}{B_{\mathrm{seg}}}\right\},\]

**NFE 预算 × 粒子数分配：** NFE 预算指生成器前向评估的总次数，是论文统一比较计算量的单位，粒子数分配指把预算切分到各去噪段分别维持多少条轨迹，前者限定总花费，后者决定花费在时间轴上的分布，组合后所有方法才能在相同或接近的总步数下比较奖励高低。

### 粒子阶段用什么奖励打分

粒子阶段的奖励是随去噪时间变化的。论文把奖励写成两项之和：第一项在所有检查点都使用，第二项只在去噪时间小于阈值后才加入，权重由系数控制。在音画实验中，第一项是文本视觉相关奖励，第二项是文本音频相关奖励，阈值取 0.85，权重取 0.3。背后的理由是音频相关的中间估计在高噪声下区分能力弱，过早加入会误导粒子选择；等去噪推进、估计更可靠后再加入，才能在剩余搜索时间内发挥作用。

附录用高斯线性奖励的例子说明，去噪估计与最终奖励的相关性随去噪推进而提高，但原文同时强调这只是一个说明性例子，不决定权重离散度的变化形态，实际调度仍依赖每个检查点观测到的有效样本量。消融实验比较了过早、过晚和不同权重，发现中间阈值和中等权重在文本音频和视频质量之间取得较好平衡。

\[R_{t}(x)=R_{1}(x)+\beta_{\mathrm{mix}}\mathbf{1}[t<t_{\mathrm{mix}}]R_{2}(x).\]

**分阶段奖励 × 固定 MH 奖励：** 分阶段奖励指粒子阶段随去噪时间改变的打分规则，早期只用文本视觉项，后期才加入文本音频项，固定 MH 奖励指修正阶段对完整输出始终不变的加权和，前者避免在高噪声下用不可靠的细粒度信号选粒子，后者保证局部修正优化的是最终要交付的质量，组合实现由粗到细的分工。

### MH 修正如何提出和接受新样本

粒子漏斗返回终止奖励最高的粒子后，MH 阶段围绕它做局部搜索。每一步把该完整样本的整体隐变量加噪到水平，再沿一条新的随机路径重新去噪，同时重建两个模态，得到一个提议样本。加噪水平同时控制提议的步长和单步成本，步数则控制总修正成本。每个完整提议用固定的 MH 奖励打分，该奖励是多个对齐或质量目标的加权和，音画实验中是 JavisScore 加小权重的视频文本对齐奖励，目的是提升对齐同时不明显损失视频质量。

接受规则只看奖励差：提议更好则接受，提议更差则以随奖励差指数衰减的概率接受。原文在精确逆过程假设下推导了该简化规则，说明此时与参考分布相关的因子恰好抵消；但也明确指出使用学习到的逆模型时该规则只是近似，不保证链的平稳分布恰好等于奖励倾斜后的参考分布。由于只跑短链，起点质量很重要，这正是用粒子搜索提供强起点的原因。

**粒子漏斗 × MH 修正：** 粒子漏斗指第一阶段随去噪推进不断调整粒子数的自适应搜索过程，MH 修正指从已完成样本出发做加噪再去噪并按奖励差决定是否接受的局部改进过程，前者负责建立粗粒度音画结构并给出好起点，后者负责在起点附近做精细调整，组合后避免了从零开始做全局探索的高成本。

**提议尺度 × 接受概率：** 提议尺度由加噪水平控制，加噪越深重去噪后的样本偏离原样本越远，接受概率按新旧样本奖励差的指数决定是否保留提议，二者搭配后尺度控制探索步长，接受规则控制只保留不明显变差的移动，组合起来在保持粗结构的同时寻找奖励更高的邻域样本。

### 本研究没有训练什么，实际计算是什么

本研究没有训练任何生成器，也没有训练奖励模型。JavisDiT++、LTX-2 和 SD1.5 都是已有的预训练主干，ImageBind、CLAP、JavisScore、VideoReward、ImageReward 和美学打分等都是现成的评价或引导信号。论文实际做的计算全部发生在推理时：沿去噪轨迹推进粒子、在检查点用去噪估计解码后打分、按权重重采样并调整粒子数、选出最佳终止粒子、再对其做加噪再去噪的 MH 提议和接受判断。需要人工设定的主要是预算切分、初始粒子数、检查点位置、粒子阶段温度、MH 温度、加噪水平、提议数、分阶段奖励的阈值和权重，以及在线调度中的步长和 pacing 比例。

这些参数在论文中是固定的超参数，不是梯度更新的对象。无训练不意味着输出确定，因为去噪中的随机路径、重采样中的抽样和 MH 中的接受判断都带有随机性。复现时缺失的不是训练代码，而是奖励模型的版本、解码中间估计的实现细节和随机种子管理，这些都会影响相同预算下的均值奖励。

### 实验在什么条件下比较

音画实验在 JavisBench-Mini 上进行，两个主干分别是 JavisDiT++ 和 LTX-2。比较对象包括 Best-of-N、带自适应奖励加权的 EvoSearch、固定粒子数的均匀分配、不带自适应分配但带 MH 的均匀加 MH，以及完整的 SWIM。论文报告每个设置的 NFE 并在相等或接近预算下比较，低预算约 360 次评估，高预算约 560 次评估，均匀基线取 400 次评估附近的设置。指标共 7 个，覆盖文本视觉、文本音频、音画一致性和总体质量，方向都是越高越好。

图像实验在 SD1.5 上进行，分别用 DrawBench 配 ImageReward 和 Simple Animals 配美学打分，比较不同重采样规则下均匀加 MH 与 SWIM 的差异，以验证分配策略不依赖特定重采样实现。人工评价招募 62 名参与者，每人看 25 组随机提示的成对视频，分别在文本视觉、文本音频、音画对齐和视觉、音频、总体美学 6 个维度做偏好判断，共收集 JavisDiT++ 约 741 对、LTX-2 约 764 对。消融实验多在 50 个提示和 3 个种子上取均值，分别考察粒子与 MH 的分工、起点强度、加噪水平、 pacing 下限、对偶步长和粒子增长策略。

### 音画主结果在匹配预算下说明了什么

下面这张表整理的是论文正文用文字报告的平均相对提升，比较问题是在接近的总评估次数下，自适应 2 阶段方法是否高于独立采样和进化搜索，以及其中多少来自自适应分配本身。公平条件是低预算和高预算分别对应约 360 和 560 次评估，相对提升是对 7 个指标分别算相对增益再取平均，数值越高表示在该预算下平均对齐更好，但不代表每个单项指标都同时最优。

| 模型与预算 | 评价方式 | 对比基线 | 平均相对提升 | 比较对象与条件 |
| --- | --- | --- | --- | --- |
| JavisDiT++ 低预算 | 七指标平均 | BoN | 30.7% | SWIM 在接近匹配计算量下 |
| JavisDiT++ 低预算 | 七指标平均 | EvoSearch | 14.1% | SWIM 在接近匹配计算量下 |
| LTX-2 低预算 | 七指标平均 | BoN | 9.2% | SWIM 在接近匹配计算量下 |
| LTX-2 低预算 | 七指标平均 | EvoSearch | 17.0% | SWIM 在接近匹配计算量下 |
| JavisDiT++ 低预算 | 七指标平均 | Uniform | 7.0% | SWIM 相对固定粒子数 |
| LTX-2 低预算 | 七指标平均 | Uniform | 8.9% | SWIM 相对固定粒子数 |
| JavisDiT++ 高预算 | 七指标平均 | BoN | 31.5% | SWIM 在较高预算下 |
| JavisDiT++ 高预算 | 七指标平均 | EvoSearch | 13.5% | SWIM 在较高预算下 |
| LTX-2 高预算 | 七指标平均 | BoN | 7.2% | SWIM 在较高预算下 |
| LTX-2 高预算 | 七指标平均 | EvoSearch | 10.9% | SWIM 在较高预算下 |
| JavisDiT++ 低预算 | 七指标平均 | Uniform 加 MH | 1.0% | 仅隔离自适应分配效应 |
| LTX-2 低预算 | 七指标平均 | Uniform 加 MH | 1.2% | 仅隔离自适应分配效应 |
| JavisDiT++ 高预算 | 七指标平均 | Uniform 加 MH | 1.2% | 仅隔离自适应分配效应 |
| LTX-2 高预算 | 七指标平均 | Uniform 加 MH | 3.0% | 仅隔离自适应分配效应 |

最大的相对提升出现在与 BoN 和 EvoSearch 的比较中，说明在昂贵音画模型的小预算区间，复用中间计算的粒子搜索加局部修正比独立采样和进化搜索更有效。但与均匀加 MH 的比较只有 1.0% 到 3.0%，说明 2 阶段组合的大部分收益来自引入 MH 修正本身，自适应分配是在此基础上的额外改进。论文没有声称每个单项指标都显著领先，也没有报告统计显著性检验，因此平均提升不能推广为所有提示和所有指标都稳定变好。未胜出的情况也存在：均匀基线在个别单项上仍可能更高，MH 加噪过大时会破坏已建立的粗对齐，这些都说明结论只在匹配预算、固定奖励权重和短链设置的条件下成立。

### 图像与人工评价是否支持同样的结论

图像实验要回答的比较问题是：自适应分配的收益是否依赖特定的重采样实现。公平条件是所有方法都匹配 400 次评估，分别在系统重采样、多项式重采样和 Fleming-Viot 重采样下比较均匀加 MH 与 SWIM，指标是美学打分和 ImageReward，方向都是越高越好。

| 重采样策略 | 评价指标 | 对比基线 | 相对提升 | 适用条件 |
| --- | --- | --- | --- | --- |
| 系统重采样 | 美学与 ImageReward 平均 | 均匀加 MH | 4.1% | SD1.5 匹配评估次数 |
| 多项式重采样 | 美学与 ImageReward 平均 | 均匀加 MH | 4.6% | SD1.5 匹配评估次数 |
| Fleming-Viot 重采样 | 美学与 ImageReward 平均 | 均匀加 MH | 3.3% | SD1.5 匹配评估次数 |
| 3 种策略总体 | 美学与 ImageReward 平均 | 均匀加 MH | 4.0% | SD1.5 匹配评估次数 |
| 不区分策略 | 美学打分 | 均匀分配 | 2.2% | SD1.5 图像生成 |
| 不区分策略 | ImageReward | 均匀分配 | 6.0% | SD1.5 图像生成 |

3 种重采样下 SWIM 都高于对应的均匀加 MH，平均约 4.0%，支持自适应分配不只适用于某一种重采样规则。但这只是图像领域的验证，不能直接证明音画领域的所有奖励组合都有同样幅度的提升。人工评价方面，SWIM 在 JavisDiT++ 上 6 个维度的偏好领先幅度为 15 到 44 个百分点，在 LTX-2 上为 1 到 7 个百分点，方向一致但幅度差异很大，说明主观偏好提升依赖主干模型和提示分布。自动指标与人工偏好也不完全等同，论文同时报告两者恰好提醒读者：自动奖励的提升需要人工判断来补充，而不是互相替代。

### 哪些设置决定了改进来自哪里

消融实验要回答 3 个更细的问题：粒子搜索和 MH 各自贡献多少，MH 的起点和噪声水平如何影响结果，粒子数增加时新粒子应从哪里复制。论文报告粒子加 MH 在匹配总预算下高于纯粒子搜索和纯 MH，纯 MH 从无引导样本出发提升最小，纯粒子搜索靠全局探索取得较大提升但受有限粒子误差限制，组合的优势在低预算时最大，随预算增加而缩小。

起点实验显示强漏斗起点更高且更早达到峰值，弱漏斗起点虽低但在 MH 中追回大部分差距，说明 MH 能部分弥补粒子数的不足，但不能完全替代好的全局探索。噪声水平实验显示过小的加噪步长接受率高但改进小，过大的加噪接近重新生成并可能丢掉粗对齐，0.7 附近在两个主干上取得较好平衡。下面的图和表聚焦粒子增长策略，比较问题是当调度决定增大粒子数时，如何选择被复制的粒子。

该图横轴是 5 种增长方式，纵轴是相对基础生成的平均奖励改进，曲线整体上升意味着越重视奖励和谱系保留的策略改进越大，解读时应关注端点差值和单调性，而不是把纵轴绝对值当成最终质量。

> **看图路径：** 1. 先看横轴五种增长方式的顺序，再看纵轴平均改进的高度变化；2. 比较均匀复制与救援策略两个端点的纵轴差值；3. 观察中间三种策略的增量是否单调上升；4. 结合图注确认该图只反映粒子数增加时的新粒子来源，不反映总预算变化

[![原论文 Figure 12：Effect of population growth strategy on VR-TA improvement over base generation.](https://arxiv.org/html/2610.12811v1/growth_mode.svg)](https://arxiv.org/html/2610.12811v1/growth_mode.svg)

*论文图 11。原论文 Figure 12:：“Effect of population growth strategy on VR-TA improvement over base generation.”。*

图中可见均匀随机复制的改进最低，救援策略的改进最高，中间依次为分散、最好和加权策略，说明只复制最高分或只按权重抽样都不如先重采样再优先扩展后代少的粒子，后者兼顾了奖励引导和谱系多样性。同一结论的数值整理如下，这里比较的是固定调度、只改变新粒子来源，指标是视频文本对齐相对基础生成的改进，条件是 JavisDiT++ 上 50 个提示和 3 个种子。

| 增长策略 | 评价指标 | 对比基线 | 实验条件 |
| --- | --- | --- | --- |
| 均匀复制 | 视频文本对齐 | 基础生成 | JavisDiT++ 共 50 提示 3 种子 |
| 分散谱系 | 视频文本对齐 | 基础生成 | JavisDiT++ 共 50 提示 3 种子 |
| 复制最高分 | 视频文本对齐 | 基础生成 | JavisDiT++ 共 50 提示 3 种子 |
| 按权重抽样 | 视频文本对齐 | 基础生成 | JavisDiT++ 共 50 提示 3 种子 |
| 救援策略 | 视频文本对齐 | 基础生成 | JavisDiT++ 共 50 提示 3 种子 |

救援策略比均匀复制多出约 0.031，比加权抽样多出约 0.010，差距不算巨大但方向稳定，论文因此在后续实验中固定使用救援策略。尚未评测的范围是：该结论只在视频文本对齐和该提示规模下报告，未证明在其他奖励或更大提示集下排序不变，也未报告不同增长策略的额外时间开销。

### 方法的边界和可能误解是什么

论文明确列出 3 个局限。第一，在大预算下自适应分配的增益变小，可能不足以抵消额外的调度参数，此时均匀分配也能靠更多粒子探索奖励 landscape。第二，持续性预测假设相邻检查点的方差相近，当方差在相邻检查点间快速变化时可能不是最优。第三，MH 的奖励接受规则在学习到的逆模型下只是近似，不保证收敛到精确的奖励倾斜分布。容易产生的误解需要澄清：估计方差代理降低不等于最终输出方差一定同等降低，因为代理忽略了轨迹相关和传播效应。

MH 接受率高不等于混合快，大步长可能走得远但接受率低，小步长接受率高但移动有限，两者需要结合判断；平均相对提升不等于每个指标都提升，个别单项上均匀基线仍可能更高；图像上的成功不等于音画上同样幅度的成功，因为搜索空间和奖励可靠性不同。这些边界意味着该方法更适合昂贵模型的小预算区间，而不是所有预算下都值得开启全部自适应机制。

### 复现第一步要固定什么

复现第一步应先固定预算口径和奖励版本，再跑通均匀基线。建议按论文设置 50 步去噪、检查点在第 10、20、30、40 步，粒子温度取 1.0，音画粒子奖励用文本视觉加权重 0.3 的文本音频且阈值为 0.85，MH 奖励用 JavisScore 加权重 0.05 的视频文本对齐，MH 做 20 个提议、每个花费 8 次评估、加噪水平 0.7、MH 温度 150，低预算初始粒子数 6、高预算初始粒子数 8， pacing 比例 0.9，图像部分匹配 400 次评估。先实现均匀粒子数加 MH 并记录 7 个音画指标和 NFE，确认与论文同一数量级后再加入在线方差估计、对偶变量更新和上下限裁剪。

粒子增长建议直接用救援策略，避免在该细节上反复调参。需要记录的还包括中间估计的解码方式、重采样实现、随机种子和提示子集，因为消融多在 50 个提示和 3 个种子上取均值，子集不同会导致数值漂移。论文未提供经校验的公开代码和模型链接，因此不能声称作者资源当前可用，复现只能基于原文描述和各自环境中的公开主干与奖励模型搭建。

### 什么时候值得尝试，还缺哪项验证

当同时满足 3 个条件时值得尝试：生成器单步昂贵且总评估次数受限，需要同时优化文本对齐和音画一致性，已有可靠的中间奖励并能在检查点解码打分。此时可以先用小粒子漏斗建立粗结构，再用短 MH 链做局部修正，而不是一开始就把预算花在大量独立采样上。若预算充裕、奖励在早期完全不可靠，或只能承担极简调度，则均匀分配加少量 MH 可能是更稳妥的起点。还需要补的验证包括：在更大提示集和更多种子下报告置信区间，检验平均提升是否稳定。

在不同奖励权重和不同主干上重复加噪水平和阈值的选择，确认 0.7 和 0.85 不是过拟合到当前奖励组合；测量端到端 wall-clock 时间和显存占用，因为 NFE 只计前向次数，未包含打分、解码和重采样的开销；补充失败案例分析，例如 MH 破坏粗对齐或自适应过早剪枝的具体提示类型。只有补上这些，才能把当前在匹配 NFE 下观察到的平均奖励提升，转化为可部署的预算分配建议。

<details>
<summary>📎 论文与评分元数据</summary>

排名：前50% | 文档类型：方法研究 | [arXiv 原文](https://arxiv.org/abs/2610.12811v1)

</details>

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。

- 评分规则：type-aware-v1

- 评分模型：muse-spark-1.3-contributor

- 评分请求协议：openai_responses

---

[← 返回 2026-10-15 语音/音乐/音频论文速递](/audio-paper-digest-blog/posts/2026-10-15/)
