---
title: "Relevant Evidence Decoding for Audio-Visual Hallucination Mitigation"
date: 2026-10-11
draft: false
tags: [音视频问答, 工具增强与约束解码, 幻觉与忠实度, 音视频]
categories: [论文速递]
description: "针对音频视觉大模型中另一模态干扰问题所需证据的判断失准，RED 用问题选择证据类型并用逐点互信息增强对应贡献，在三个幻觉基准上提升准确率而首次 token 时间约为标准解码的 1.5 倍。"
hiddenInHomeList: true
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_arxiv_id: "2610.02976"
paper_digest_workbench_contract: "researcher-workbench-v1"
paper_digest_reader_title: "按问题所需证据做解码修正的音频视觉幻觉缓解"
paper_digest_original_title: "Relevant Evidence Decoding for Audio-Visual Hallucination Mitigation"
paper_digest_arxiv_version: 1
paper_digest_arxiv_versioned_id: "2610.02976v1"
paper_digest_arxiv_abs_url: "https://arxiv.org/abs/2610.02976v1"
paper_digest_arxiv_pdf_url: "https://arxiv.org/pdf/2610.02976v1.pdf"
paper_digest_primary_task: "音视频问答"
paper_digest_tags_contract: "paper-tag-flat-tags-v2"
paper_digest_tags_selection_contract: "paper-tag-selection-v2"
paper_digest_tags_registry_version: "paper-tag-catalog-v2"
paper_digest_tags_registry_sha256: "0a0847314ab2059d95efac33376414498e598a1f02a1486869bee0efc481d1f7"
paper_digest_tags_concepts: [{"facet":"task","id":"task.av-question-answering","label":"音视频问答"},{"facet":"method","id":"method.tool-augmentation","label":"工具增强与约束解码"},{"facet":"research_focus","id":"research_focus.hallucination-faithfulness","label":"幻觉与忠实度"},{"facet":"signal","id":"signal.audiovisual","label":"音视频"}]
paper_digest_primary_method: "工具增强与约束解码"
paper_digest_score: 7.1
paper_digest_rank_bucket: "前50%"
paper_digest_document_type: "方法研究"
paper_digest_one_sentence: "针对音频视觉大模型中另一模态干扰问题所需证据的判断失准，RED 用问题选择证据类型并用逐点互信息增强对应贡献，在三个幻觉基准上提升准确率而首次 token 时间约为标准解码的 1.5 倍。"
paper_digest_authors: [{"affiliations":["Sungkyunkwan University"],"name":"Hyunjae Ra"},{"affiliations":["Sungkyunkwan University"],"name":"Aecheon Jung"},{"affiliations":["Daegu Gyeongbuk Institute of Science and Technology (DGIST)"],"name":"Jungin Park"},{"affiliations":["Sungkyunkwan University"],"name":"Sungeun Hong"}]
paper_digest_abstract_sha256: "eeb221b78e710809866004584452393a2933b730f40560bd27173f4179bda7ec"
paper_digest_sidecars: {"citation.bib":{"sha256":"7c28989b14a79e840424a844a244462527a30816cc57b057b50997943333634b","url":"/audio-paper-digest-blog/data/papers/2026-10-11/2610-02976/citation.bib"},"citation.json":{"sha256":"e1d25cd4dbef8df2f7b90bd34ece887a6a23da0fbf78c9bd5899c0bc78440e51","url":"/audio-paper-digest-blog/data/papers/2026-10-11/2610-02976/citation.json"},"citation.ris":{"sha256":"666e9d2927e2d5a091b34d6fa4bb496035c4cce2985417d1455dc6a68ee39aef","url":"/audio-paper-digest-blog/data/papers/2026-10-11/2610-02976/citation.ris"},"rethink-context.json":{"contract":"paper-research-context-v2","sha256":"c4cf25b26f35857bf344529c7add432ff62872a845dc51f4acf1f173dd46a537","url":"/audio-paper-digest-blog/data/papers/2026-10-11/2610-02976/rethink-context.json"}}
paper_digest_api_reader_contract: "beginner-researcher-v3"
paper_digest_api_reader_article_sha256: "c74fd68fc59d88c28d2e891735ceda6b6b6bbd3b16bb470364a6f2a920f2da09"
paper_digest_api_reader_plan_sha256: "caf88034a372ad09398decc40089c8faeaf9380b36435a49f16984bc03adb13d"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings-v4"
paper_digest_api_reader_source_bindings_sha256: "950f23411eb443d8d0679bdb07574ea9f057782b8e9cd7e9998f99138280f7cc"
paper_digest_api_reader_source_table_count: 4
paper_digest_api_reader_source_formula_count: 4
paper_digest_api_reader_structured_artifacts_sha256: "19535cbef62c6a67516a7841faec6a1a30cfedd914b4252a2aa4478bc36d66a5"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity-v1"
paper_digest_api_reader_author_identity_sha256: "632f9025a16d4d6e39cf191ebed7ae166282c0f370b5c080861201badc6b38a1"
paper_digest_api_reader_author_count: 4
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity-v1"
paper_digest_api_reader_resource_identity_sha256: "7dcb6c1c6bd99a7039f869e36f79cca027248ac3718d674b8fecede02eddecf7"
paper_digest_api_reader_resource_count: 1
paper_digest_api_reader_figure_persistence: "ephemeral-no-persisted-figure-assets-v1"
paper_digest_api_reader_decision_projection: "api-reader-decision-projection-v2"
---

# 📄 按问题所需证据做解码修正的音频视觉幻觉缓解

> 英文题目：*[Relevant Evidence Decoding for Audio-Visual Hallucination Mitigation](https://arxiv.org/abs/2610.02976v1)*

> 标签：#音视频问答 | #工具增强与约束解码 | #幻觉与忠实度 | #音视频
>
> 评分：**7.1/10** | 创新 1.5/2 | 技术严谨 1.2/1.5 | 实验充分 1.3/1.5 | 清晰度 0.8/1 | 影响力 1/1.5 | 开源 0/1.5 | 可复现 0.3/0.5 | 工程/实践 1/1.5


## 👥 作者与机构

- Hyunjae Ra：Sungkyunkwan University
- Aecheon Jung：Sungkyunkwan University
- Jungin Park：Daegu Gyeongbuk Institute of Science and Technology (DGIST)
- Sungeun Hong：Sungkyunkwan University

## 📌 核心摘要

音视频大语言模型（Audio-Visual Large Language Model，AV-LLM）输入为配对的音频、视频和文本问题，输出为答案标记，难点是某一模态会干扰另一模态的判断，问题实际只需要音频、视频或二者交互中的一部分。相关证据解码（Relevant Evidence Decoding，RED）先用仅问题的前向推理选出五种证据类型之一，该选择在整个自回归解码中保持不变。随后模型以问题单独预测为公共参照，用点逐互信息（Pointwise Mutual Information，PMI）度量音频、视频加入后对候选标记概率的改变量，并把联合贡献拆成音频、视频与非加性残差交互三部分。最终解码把原始音视频分数与所选类型对应的贡献相加，保留音视频分支作为解码锚点且仅评估所选证据类型必需的辅助分支，而非每个问题都执行全部辅助分支。与调制各模态分支权重或放大全部附加信息的方法不同，RED只增强问题所需的那部分贡献。在Qwen2.5-Omni-7B上，CMM基准准确率从82.2%提高到89.2%，该结论适用于所测的幻觉与通用问答基准，但在长文本描述生成中尚未验证。原文报告相对首标记时间（Time To First Token，TTFT）平均为标准解码的1.5倍，附录分析给出证据选择89.1毫秒、媒体准备2372.1毫秒、感知编码1881.4毫秒、答案提示预填充1381.7毫秒、答案标记预测28.4毫秒、分数合成与开销37.2毫秒、总计5789.9毫秒，未报告端到端长文本生成成本、显存或吞吐。

## 🔗 开源与复现资源

- 第三方资源：<https://github.com/GeWu-Lab/MUSIC-AVQA/blob/main/data/json_update/avqa-test.json> — 链接可访问（HTTP 200）

可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 音频视觉问答的输入输出与幻觉从哪里来

刚接触语音与音频的研究生可以先把任务想成 3 路输入加一路输出。输入是音频波形或编码后的音频特征、视频帧或视频编码特征，以及文本问题与已生成的历史词。输出是下一个词的概率分布，自回归地逐词生成答案。模型参数在整个方法中保持冻结，所有改动只发生在解码时如何组合不同条件下的分数。论文关心的失败不是听不清或看不清，而是跨模态幻觉，即一个模态错误地影响关于另一模态的预测。

例如问听到了哪种乐器，单独听音频能答对小提琴，加上显示吉他的视频后，对小提琴的置信反而下降。也就是说，信息变多了，判断反而被带偏。理解这一点后，后续的证据选择与贡献增强才有意义：目标不是一味融合更多感知信号，而是让预测跟随问题真正需要的那路证据。

### 干预数字如何读：敏感性与不变性的含义

为避免误读干预表，先把测量对象讲清。敏感性要求 1 对干预中原输入与替换输入 2 次都答对，因为 2 次的参考答案不同，始终答是或始终答否都无法通过，这比单次准确率更严格。不变性违反统计无关替换后预测翻转的比例，翻转即记为违反。下表整理原文报告的平均行为与真假阳性变化，方向为前者越高越好、后者越低越好。

| 对比条件 | 敏感性或真阳性率 | 不变性违反或假阳性率 | 输入条件 | 指标方向 |
| --- | --- | --- | --- | --- |
| 仅给所需模态 | 59.7% | 0.0% | 目标参考 | 敏感性越高越好 |
| 同时给音频与视频 | 44.0% | 17.0% | Base | 违反越低越好 |
| Base 平均 | 78.8% | 23.6% | Base 真假阳性 | – |
| RED 平均 | 84.7% | 19.3% | RED 真假阳性 | 真阳升假阳降 |

上表第一组数字说明同时给出两路输入后敏感性从 59.7% 降至 44.0%，无关干预改变 17.0% 的预测，这是联合推理削弱所需证据的直接证据。第二组数字说明 RED 在提高真阳性率的同时降低假阳性率，而非靠偏向某一答案刷准确率。结合主结果看，RED 的增益集中在感知模态相互竞争的子集，而非语言先验主导的子集，这与方法只增强问题所需贡献的设计一致。

### 已有对比解码路线为何没有对准问题

对比解码的基本想法是让同一模型在不同输入条件下各做 1 次预测，再用分布之间的差异去调整原始预测，不需要额外训练。在视觉语言模型中，常见做法是构造受损视觉输入、扰动指令或自生成描述作为参照。在音频视觉大模型中，已有工作沿着 3 条路线扩展：按模态主导构造注意力掩码对比分支，按问题自适应加权各模态分支，或促进跨模态信息流动。论文指出这些路线更关注平衡或融合多个模态，而不是让修正量对准每个问题所需的证据。

举例来说，一道需要听音频的问题，可能靠相关的视觉线索就蒙对了，而真正的音频证据对预测几乎没有影响。此时准确率上去了，但不能说幻觉被缓解了。另一类相关的信息论解码强调整体附加条件的贡献，例如把全部音视频作为新增上下文一并增强，同样没有区分音频、视频与二者交互各自的支持。因此本文要补的缺口是把问题需要什么证据与该证据实际支持哪个候选答案耦合起来。

### 与最接近的自适应加权方法有何运行差异

与 RED 最接近的是同样考虑问题所需证据的自适应加权方法，但二者在运行阶段不同。该方法用相关性分数加权组合各模态条件预测，而 RED 以纯问题为共同参照定义贡献，再只把所选的一项加回原始音视频分数。前者每次都需要评估多个分支并融合，后者只评估所选类型需要的辅助分支，因此在相近或更好准确率下延迟更低。论文报告 RED 相对该方法在平均准确率上从 73.6% 到 75.3%，同时相对首 token 时间从 2.6 倍降至 1.5 倍，约为 1.7 倍加速。

另一差异是关系类问题：RED 用残差交互刻画非加性对应，而加权单路难以表达这种交互。在 AVHBench 的关系任务上，残差交互的准确率与 AUROC 最高，而在单路任务上对应单路贡献最高，支持按证据类型匹配贡献项的做法。

### 什么叫用对证据：答对还不够的检验

论文提出用证据跟随作为更严格的标准。理想行为有两条：当问题所需的证据发生变化、正确答案随之变化时，预测应当跟着变化；当与问题无关的证据发生变化、正确答案不变时，预测应当保持不变。图 1 的例子把这一点讲得很具体，顶部问题是海浪声是否出现在音频中，类型标注为音频。左侧原始对同时有冲浪者画面与海浪声，答案为是。

中间列保持画面不变、把音频换成气枪声，答案应变为否。右侧列保持音频不变、把画面换成气枪，答案仍为是。

> **看图路径：** 1. 先看顶部问题类型标注为音频，再看三列中哪一列替换了音频、哪一列替换了视频；2. 对比中间 Base 行在替换所需音频后仍答 Yes 与替换无关视频后翻转为 No 的两处失误；3. 再看底部 RED 行三次回答如何随所需证据翻转、随无关证据保持 Yes

[![原论文 Figure 1：Motivation of this study.](https://arxiv.org/html/2610.02976v1/figure1_motivation.png)](https://arxiv.org/html/2610.02976v1/figure1_motivation.png)

*论文图 1。原论文 Figure 1:：“Motivation of this study. (a) A correct prediction does not necessarily indicate successful hallucination mitigation.”。*

上图三列分别对应原始、替换所需证据、替换无关证据。基础模型在中间仍答是、在右侧翻转为否，两处都违反证据跟随，而 RED 在中间正确翻转为否、在右侧保持为是。论文进一步用大规模干预验证了这种现象的普遍性：只给所需模态时敏感性较高，同时给出音视频后敏感性明显下降，且替换无关模态会改变相当比例的预测。这说明所需证据往往是模型可获得的，只是在多模态联合推理时没有得到足够的权重。

### RED 的三步流程如何从问题走到最终分数

RED 是训练无关的解码方法，整体分 3 步。第一步只看文本问题，用同一个冻结主干判断需要哪类证据，在无、音频、视频、音频加视频、音频视频交互 5 种之间选一种，每个问题只选 1 次并在整个自回归解码中保持不变。第二步以纯问题预测为共同参照，度量音频、视频与联合带来的预测变化，并把联合变化分解为音频、视频与非加性的残差交互三部分。第 3 步保留原始音视频预测作为解码锚点，只把所选证据类型对应的贡献加回去，得到最终的证据引导分数。

只计算所选类型需要的辅助分支，避免不必要的感知处理。下图以先进入的是哪种乐器为例，问题被判定为需要音频，视频显示吉他而音频为小提琴，原始预测偏向吉他，增强音频贡献后翻转为小提琴。

> **看图路径：** 1. 沿左上问题到右上五选一的实线箭头确认本次选中的是音频路径；2. 比较中间四条 Q、V、A、AV 分布条形，确认音频使小提琴抬升而视频偏向吉他；3. 沿底部加号到右下 RED 分布，观察小提琴被增强后如何超过吉他

[![原论文 Figure 2：Overview of RED for an audio-required case.](https://arxiv.org/html/2610.02976v1/RED_figure2_method.png)](https://arxiv.org/html/2610.02976v1/RED_figure2_method.png)

*论文图 2。原论文 Figure 2:：“Overview of RED for an audio-required case.”。*

上图左侧为冻结的音频视觉大模型与编码器，右上为五选一的问题引导选择，中间为 4 种条件的分布与贡献分解，右下为原始分布与增强后的分布对比。关键在于所有贡献都相对同一文本参照计算，选择器决定补哪一项，而不是把所有模态信号一并放大。

### 参照与分解：贡献到底如何度量

先理解参照的作用。直接看某模态条件下的概率高，不代表该模态真的支持该候选，因为问题与语言上下文本身可能已经偏向该候选。论文用条件逐点互信息近似来扣除这部分，即比较加上音视频与不加感知输入时的对数概率差，差值才代表感知输入带来的新增预测贡献。把音视频整体作为新增上下文的近似写成如下形式。

\[\operatorname{PMI}(w;a,v\mid c_{t})\approx\log p_{\theta}(w\mid a,v,c_{t})-\log p_{\theta}(w\mid c_{t}).\]

其中 w 为候选词，a 与 v 为音频与视频，ct 为问题与已生成前缀组成的文本上下文。该式把纯问题预测作为边际分布的实用近似。但它把音视频视为单一新增来源，模态特异与交互纠缠在一起。为此论文对每个条件定义相对同一问题基线的证据贡献。

\[\Delta_{t}^{S}(w)=\log p_{t}^{S}(w)-\log p_{t}^{Q}(w).\]

其中 S 取音视频联合、音频、视频与纯问题 4 种，pt 为对应条件下的下一个词概率。音频贡献与视频贡献分别度量单独加入一路的变化，联合贡献度量同时加入两路的变化，残差交互定义为联合减去两者之和，即不能被单路相加解释的非加性部分。

**问题引导的证据选择 × 逐点互信息贡献：** 问题引导的证据选择只看文本问题判断需要音频、视频、两者相加还是两者交互，逐点互信息贡献则度量加上某路感知输入后候选词概率相对纯问题基线的变化，前者决定补哪一路，后者给出该路到底带来多少新增支持，两者组合才构成有针对性的修正。

**音频贡献 × 视频贡献：** 音频贡献是只加音频相对纯问题的对数概率差，视频贡献是只加视频相对纯问题的对数概率差，二者都以同一问题基线为参照所以可以直接相加或比较，联合贡献减去二者后剩下的残差才被定义为交互贡献。

选定证据类型 e 后，最终加回的修正量按 5 类分别处理，无需证据时加零，只需音频或视频时加对应单路，需要两者但不问关系时加两路之和，明确询问对应或对齐等关系时加残差交互。

\[\rho_{t}(w)=\begin{cases}0,&e=\varnothing,\\ \widetilde{\Delta}_{t}^{e}(w),&e\in\{A,V\},\\ \widetilde{\Delta}_{t}^{A}(w)+\widetilde{\Delta}_{t}^{V}(w),&e=A+V,\\ \widetilde{\Delta}_{t}^{I}(w),&e=A\leftrightarrow V.\end{cases}\]

最终分数为中心化后的原始音视频分数加上所选修正量，替换标准解码的下一个词分数，其他解码操作不变。

\[s_{t}^{\mathrm{RED}}(w)=\widetilde{\ell}_{t}^{AV}(w)+\rho_{t}(w).\]

中心化是指减去用无标注问题估计的均值偏置，细节在训练一节交代。

### 没有训练时参数、中心化与选择器如何执行

本研究没有训练任何模型，3 个主干的参数全程冻结，包括 VideoLLaMA2.1-7B-AV 与 Qwen2.5-Omni-3B 和 7B。所谓训练一节实际要讲的是无标注统计估计与提示执行过程。中心化所用的均值偏置从每个基准随机抽取 100 个问题估计，不使用答案标签，与已有方法用 100 个有标注样本调解码强度保持相同的样本预算。估计时按选择器判定的证据类型分组求均值，若某组不足 5 个有效样本则用跨类型汇总均值，估计后固定用于该基准的完整评测。附录还报告了样本量与抽样种子的敏感性，例如在 CMM 上不同预算与 5 次独立抽样的波动，但默认预算仍为 100。

**中心化分数 × 原始音频视觉分数：** 原始音频视觉分数是完整音视频条件下的对数概率，中心化分数是减去用 100 个无标注问题估计的均值偏置后的分数，前者保留模型的直接输出，后者校正不同证据类型和主干上的系统性偏移，修正量与主分数都使用中心化版本相加。

问题引导的选择器同样不需要训练，它用同一冻结主干、只给问题文本、通过提示把问题分到无、音频、视频、两者、关系 5 类，不提供任何音频或视频输入。两者对应需要听与看共同定位或回答两个可分事实的情形，关系对应明确询问音视频是否匹配、对应或描述同一事件的情形。选择器每个问题执行 1 次，开销在后文的耗时分解中仅占很小部分。

### 在哪些数据与模型上测量，指标如何聚合

评测覆盖 3 个音频视觉幻觉基准与两个通用问答基准。CMM 考察模态主导与虚假跨模态关联，包含 6 个子集，每个子集 200 个样本、每个样本一正一负两个是否问题，共 2400 个问题，平均准确率为 6 个子集的无加权均值。AVHBench 考察音视频证据不一致导致的幻觉，评测 3 个二元判断任务，包括音频诱发的视频幻觉、视频诱发的音频幻觉与音视频匹配，共 5302 个问题，平均为三任务无加权均值。

SVHalluc 考察语音与视觉在语义与时间维度的幻觉，包含 3 个语义任务与 3 个时间任务，共 2405 个视频问题对，语义与时间分别取无加权均值后再取六任务均值。通用侧用 MUSIC-AVQA 官方修正后的 9129 个测试问题及其 2808 附近规模的困难子集 MUSIC-AVQA-Hard 的 2508 个问题，报告总体准确率。主干为上述 3 个冻结模型，基线包括面向音视频幻觉的对比解码与面向视觉语言幻觉并按 3 模态扩展的对比解码，均在相同确定性流程下复现。

**跨模态幻觉 × 证据跟随：** 跨模态幻觉指一个模态错误地影响关于另一模态的判断，证据跟随则要求预测随问题所需的证据变化而变化、随无关证据变化而保持稳定，前者是待缓解的现象，后者是本文用来检验是否真正用对证据的标准。

干预评测从 AVHBench 构造原始与替换对，保留问题与另一模态不变、只替换一路。替换所需模态会改变正确答案，用于计算敏感性，要求原输入与替换输入 2 次都答对；替换无关模态不改变答案，用于计算不变性违反，统计预测发生变化的比例。只给所需模态的参考天然不受无关替换影响，因此其不变性违反按构造为零。

**敏感性 × 不变性违反：** 敏感性统计替换所需模态后原答案与新答案两次都答对的比例，考察是否跟随所需证据，不变性违反统计替换无关模态后预测发生变化的比例，考察是否被无关证据带偏，前者越高越好，后者越低越好，共同刻画证据跟随。

### 幻觉基准上的准确率提升在何处集中

先看比较问题：在相同主干与完整基准上，RED 相对标准解码与 7 个可运行的对比解码基线能否提高准确率，指标方向为准确率越高越好。下表整理论文报告的相对提升与绝对区间，数值保留原文写法。表前已说明公平条件为冻结主干与确定性复现，表后将解释集中趋势与代价。

| 基准 | RED 相对标准解码最高提升 | Base 准确率区间 | RED 准确率区间 | 指标方向 |
| --- | --- | --- | --- | --- |
| CMM | 7% | – | – | 越高越好 |
| AVHBench | 6.3% | – | – | 越高越好 |
| SVHalluc | 3.8% | 53.3–60.5% | 57.1–63.4% | 越高越好 |

上表显示 RED 在 3 个幻觉基准上相对标准解码的最高提升，以及 SVHalluc 在 3 个主干上的绝对区间。论文正文进一步指出在 Qwen2.5-Omni-7B 上 CMM 从 82.2% 到 89.2%，其中视觉主导与音频主导子集分别有明显增益，而语言主导变化很小。在 AVHBench 上对视频诱发的音频幻觉任务的提升在 3 个主干上分别为 5.6、7.9 与 12.1 个百分点。在 SVHalluc 上语义绑定类任务的改善更一致，而时间类任务随主干变化更大，且部分接近随机水平的任务与基准报告的对齐偏置有关。干预视角的结果如下图所示，左高为好、右低为好。

> **看图路径：** 1. 左图先看虚线 59.7% 目标参考，再比较 Base 的 44.0% 与 RED 的 64.2% 柱高；2. 右图先看虚线 0.0% 参考，再比较 Base 的 17.0% 与 RED 的 6.6% 柱高；3. 注意两图纵轴方向相反，左高为好、右低为好

[![原论文 Figure 3：Evidence following under modality interventions.](https://arxiv.org/html/2610.02976v1/figure_03_sensitivity_invariance.svg)](https://arxiv.org/html/2610.02976v1/figure_03_sensitivity_invariance.svg)

*论文图 3。原论文 Figure 3:：“Evidence following under modality interventions.”。*

上图为三主干与两类所需证据上的平均，虚线为只给所需模态的参考。RED 的敏感性超过该参考且不变性违反最低，说明准确率提升伴随更强的证据跟随，而不是简单地把决策阈值推向某一侧。真阳性率与假阳性率的分析也支持这一点，RED 同时提高前者并降低后者，而仅移动阈值的基线扫描无法在相同或更低假阳性下达到相同的真阳性。

### 通用问答与推理延迟的实际代价

再看通用问答的比较问题：在 Qwen2.5-Omni-7B 上，RED 在 MUSIC-AVQA 完整集与困难子集上的准确率与首 token 时间相对标准解码如何变化。下表整理原文的准确率与相对延迟，延迟以标准解码为 1.0 倍，越低越好。

| 评测集 | Base 准确率 | RED 准确率 | 与最强自适应加权基线的差异 | 平均相对首 token 时间 |
| --- | --- | --- | --- | --- |
| MUSIC-AVQA | 64.5% | 67.1% | 持平 MAD | 1.5 × |
| MUSIC-AVQA-Hard | 31.9% | 40.5% | 超出 4.5% | 1.5 × |

上表表明 RED 在完整集与困难集上分别从 64.5% 到 67.1% 与从 31.9% 到 40.5%，在完整集上与最强的自适应加权基线持平，在困难集上超出 4.5 个百分点，困难集增益更大说明在更依赖音频视觉联合推理时针对性修正的价值更明显。代价方面，RED 在 9 个主干与幻觉基准组合上的平均相对首 token 时间为 1.5 倍，优于需要评估更多分支或迭代的方法。耗时分解显示选择器本身仅约 89.1 毫秒，主要开销在媒体准备与感知编码，因此只评估所选类型需要的辅助分支是控制延迟的关键。需要指出延迟是平均趋势，不代表每一组基准与主干都恰为 1.5 倍，原文分项从 1.2 倍到 1.7 倍不等。

### 选择与分解各自带来多少，选错会怎样

消融要回答两个问题：问题引导的选择与逐点互信息分解是否都必要，以及把修正加到错误的证据类型上会发生什么。论文固定其余流程，分别关闭其中之一。仅用选择而不用分解时，以原始模态条件分数代替贡献量；仅用分解而不用选择时，对所有问题都加上 3 路贡献；两者都不用时直接加原始单路分数。

下表为三主干平均的准确率与 AUROC，AUROC 衡量与阈值无关的区分能力。表前已说明比较对象均为实际可运行的变体，表后解释增益来源与误配的后果。

| 消融配置 | AVHBench 准确率 | AVHBench AUROC | 是否实际可运行变体 | 结果方向 |
| --- | --- | --- | --- | --- |
| 仅 Q-guided 启用、PMI 关闭 | 76.2% | 82.7% | 是 | 分解加入前的起点 |
| Q-guided 与 PMI 同时启用 | 78.6% | 86.1% | 是 | 全量最强 |

上表需按原文准确理解：76.2% 准确率与 82.7%AUROC 对应仅启用问题引导选择、关闭逐点互信息分解的起点，在此基础上再启用分解后达到 78.6% 与 86.1%，两者同时启用为最强。仅启用分解而不做选择的实际原表值不在这组比较中，不能与上述起点混淆。这说明分解的作用是分离出真正的新增支持后再有选择地增强。证据指派的对比进一步显示，误配与随机指派不如 RED，而用显式关键词规则或问题级标注作为参照的上界与 RED 接近，说明对准所需证据比选择器的具体实现更重要。

仅用所选感知输入直接回答也能超过基线，但 RED 保留完整音视频锚点后再修正，在通用问答上更稳定。下图为 5 基准上选择器预测的分布，反映的只是问题文本的判断而非真实标注。

> **看图路径：** 1. 先看每个环形中心的总问题数，再看音频与视频两段在 CMM 与 AVHBench 中的占比；2. 对比 MUSIC-AVQA 与 Hard 中两者相加段扩大到 60.4% 与 78.9% 的变化；3. 注意底部小字中不足 1% 的两者与无修正类别，不要忽略其存在

[![原论文 Figure E：Figure E: Question-guided evidence selection across five benchmarks.](https://arxiv.org/html/2610.02976v1/contribution_selection.svg)](https://arxiv.org/html/2610.02976v1/contribution_selection.svg)

*论文图 9。原论文 Figure E:：“Figure E: Question-guided evidence selection across five benchmarks.”。*

上图中心数字为每个主干的评测问题数，CMM 以音频与视频为主，AVHBench 有较大比例的关系类，困难子集两者相加占比最高。分布差异解释了为何不同基准上最有效的贡献项不同，也提醒选择错误仍可能限制增益。

### 哪些范围尚未评测与可能失效

论文明确了三项局限。评测集中在音频视觉问答，包括二元、多选与开放式问答，未覆盖长文生成如音视频描述任务。证据空间为离散的 5 种类型，对更细粒度的问题或其它模态组合可能需要重新定义分解与选择机制。向音视频之外的扩展同样需要重新定义对应的贡献分解。结果层面也有未胜出项：在视频所需问题的无关音频替换下，自适应加权基线的不变性违反略低于 RED。

在 SVHalluc 的时间任务上提升随主干变化较大；在中心化估计中较小主干的收益更不稳定。这些都说明方法改善的是平均与多数条件下的证据跟随，不能推广为在所有子任务与主干上必然最优。

### 复现第一步与必须保持的信息条件

复现应从冻结主干与确定性解码开始，保持与原文相同的完整评测划分与无加权平均方式。关键超参数是中心化用的 100 个无标注问题及其分组均值，需按主干与基准分别估计并固定，不能复用其它基准的偏置。选择器提示需完整保留 5 类定义与示例区分，尤其是两者与关系的界限：前者为需要同时听看但不明确比较对应关系，后者为明确询问是否匹配或对齐。解码时保留音视频分支为锚点，只计算所选类型需要的纯问题、音频与视频分支。

MUSIC-AVQA 需使用官方修正后的测试标注，共 9129 个问题，困难子集为其中的 2508 个问题，证据分布图中的数量即按此统计。论文表示计划在发表后公开代码，当前可用的第三方链接仅证明论文提到了该修正标注地址，不代表作者资源已开源。硬件方面原文在英伟达 RTX A6000 上实验，延迟需以各自环境下的标准解码为基准归一化后比较。

### 何时值得尝试与还需补哪项验证

当问题所需模态明确而另一模态容易干扰判断时值得尝试 RED，例如需要听乐器进入顺序但画面有误导性乐器，或需要看是否出现某物但音频有相关杂音。复现第一步是先跑通纯问题、单模态与完整音视频 4 种分支的分数记录，再实现同一参照下的差值与残差交互，最后接上问题分类。还需补的验证包括长文本生成的稳定性、5 类之外证据划分的鲁棒性，以及在新主干上中心化样本量与抽样波动的报告。

容易产生的误解是把准确率提升等同于幻觉根除，实际上论文用敏感性与不变性证明的是预测更跟随所需证据，且平均延迟仍为 1.5 倍，部署前需结合具体任务的错误代价与延迟预算再做选择。

<details>
<summary>📎 论文与评分元数据</summary>

排名：前50% | 文档类型：方法研究 | [arXiv 原文](https://arxiv.org/abs/2610.02976v1)

</details>

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。

- 评分规则：type-aware-v1

- 评分模型：muse-spark-1.3-contributor

- 评分请求协议：openai_responses

---

[← 返回 2026-10-11 语音/音乐/音频论文速递](/audio-paper-digest-blog/posts/2026-10-11/)
