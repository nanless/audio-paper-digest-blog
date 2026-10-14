---
title: "Where Does the Audio Jailbreak Live? A Controlled Frequency-Depth Audit of AdvWave-P on Qwen2-Audio"
date: 2026-10-11
draft: false
tags: [音频问答, 对抗鲁棒性, 可解释性, 信号处理, 统计分析]
categories: [论文速递]
description: "论文用短时傅里叶域遮蔽加对照审计 AdvWave-P 在 Qwen2-Audio 上的表现，发现八频段排序几乎被扰动能量解释，深层音频表示差异与遮蔽必要性正相关但不能定位因果层。"
hiddenInHomeList: true
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_arxiv_id: "2610.07005"
paper_digest_workbench_contract: "researcher-workbench-v1"
paper_digest_reader_title: "音频越狱住在哪一层频率？AdvWave-P 在 Qwen2-Audio 上的受控频率-深度审计"
paper_digest_original_title: "Where Does the Audio Jailbreak Live? A Controlled Frequency-Depth Audit of AdvWave-P on Qwen2-Audio"
paper_digest_arxiv_version: 1
paper_digest_arxiv_versioned_id: "2610.07005v1"
paper_digest_arxiv_abs_url: "https://arxiv.org/abs/2610.07005v1"
paper_digest_arxiv_pdf_url: "https://arxiv.org/pdf/2610.07005v1.pdf"
paper_digest_primary_task: "音频问答"
paper_digest_tags_contract: "paper-tag-flat-tags-v2"
paper_digest_tags_selection_contract: "paper-tag-selection-v2"
paper_digest_tags_registry_version: "paper-tag-catalog-v2"
paper_digest_tags_registry_sha256: "0a0847314ab2059d95efac33376414498e598a1f02a1486869bee0efc481d1f7"
paper_digest_tags_concepts: [{"facet":"task","id":"task.audio-question-answering","label":"音频问答"},{"facet":"research_focus","id":"research_focus.adversarial-robustness","label":"对抗鲁棒性"},{"facet":"research_focus","id":"research_focus.interpretability","label":"可解释性"},{"facet":"method","id":"method.signal-processing","label":"信号处理"},{"facet":"method","id":"method.statistical-analysis","label":"统计分析"}]
paper_digest_primary_method: "信号处理"
paper_digest_score: 5.5
paper_digest_rank_bucket: "前50%"
paper_digest_document_type: "方法研究"
paper_digest_one_sentence: "论文用短时傅里叶域遮蔽加对照审计 AdvWave-P 在 Qwen2-Audio 上的表现，发现八频段排序几乎被扰动能量解释，深层音频表示差异与遮蔽必要性正相关但不能定位因果层。"
paper_digest_authors: [{"affiliations":["eBRAIN Lab, Division of Engineering, New York University Abu Dhabi, UAE","Tandon School of Engineering, New York University, NY, USA"],"name":"Boyuan Chen"},{"affiliations":["eBRAIN Lab, Division of Engineering, New York University Abu Dhabi, UAE"],"name":"Minseok Kim"},{"affiliations":["eBRAIN Lab, Division of Engineering, New York University Abu Dhabi, UAE"],"name":"Sohaila Abdulsattar"},{"affiliations":["eBRAIN Lab, Division of Engineering, New York University Abu Dhabi, UAE","Tandon School of Engineering, New York University, NY, USA"],"name":"Minghao Shao"},{"affiliations":["Tandon School of Engineering, New York University, NY, USA"],"name":"Siddharth Garg"},{"affiliations":["Tandon School of Engineering, New York University, NY, USA"],"name":"Ramesh Karri"},{"affiliations":["eBRAIN Lab, Division of Engineering, New York University Abu Dhabi, UAE"],"name":"Muhammad Shafique"}]
paper_digest_abstract_sha256: "f79a63119c2080835fc8452f0378653a257538065dddabe5abba70de5eb3faf8"
paper_digest_sidecars: {"citation.bib":{"sha256":"29cc7eb27e8713efa56de2bdb8a3f82db551b174dfb27d519eec62b541169aec","url":"/audio-paper-digest-blog/data/papers/2026-10-11/2610-07005/citation.bib"},"citation.json":{"sha256":"01aa402e7b63609f7cb756ecda4304ecc9aa4e63f1d3546877c4cbd3ac5880ac","url":"/audio-paper-digest-blog/data/papers/2026-10-11/2610-07005/citation.json"},"citation.ris":{"sha256":"8f8da63be8a1e4a48df5815da691d3918ffb6e19e6091de4e450c136ba2b9352","url":"/audio-paper-digest-blog/data/papers/2026-10-11/2610-07005/citation.ris"},"rethink-context.json":{"contract":"paper-research-context-v2","sha256":"9e8fb6e42c51d9c54a13de920ce77866a6ee1d38a607c2ca8f795978bb15f2a1","url":"/audio-paper-digest-blog/data/papers/2026-10-11/2610-07005/rethink-context.json"}}
paper_digest_api_reader_contract: "beginner-researcher-v3"
paper_digest_api_reader_article_sha256: "b184a8239e6502205c7ca21b4a4f1e4d0c876a9fb8f01b9b579d0c2d5a032463"
paper_digest_api_reader_plan_sha256: "5ff665c2a8c36be33d4e5682882b38928d04cf2a6ad35d6dc4b6fff4bdcb574a"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings-v4"
paper_digest_api_reader_source_bindings_sha256: "2e319ebd5476a4b420b573252bd9f5d49d353349c57abedd774b758c98912b5a"
paper_digest_api_reader_source_table_count: 4
paper_digest_api_reader_source_formula_count: 1
paper_digest_api_reader_structured_artifacts_sha256: "4e7d7512dc963510b3438c1ccfeff3f4c3535e84a162f2c9faa2ec5381c0f8ce"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity-v1"
paper_digest_api_reader_author_identity_sha256: "84ddf8bc61b46d6b493d48d91b0ded14f5d04d8dacda12bbed5da7ef144dcec8"
paper_digest_api_reader_author_count: 7
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity-v1"
paper_digest_api_reader_resource_identity_sha256: "57c95d8efc198d1583bc53d476471a85188f767c3793e30171ab9683a7c6435a"
paper_digest_api_reader_resource_count: 1
paper_digest_api_reader_figure_persistence: "ephemeral-no-persisted-figure-assets-v1"
paper_digest_api_reader_decision_projection: "api-reader-decision-projection-v2"
---

# 📄 音频越狱住在哪一层频率？AdvWave-P 在 Qwen2-Audio 上的受控频率-深度审计

> 英文题目：*[Where Does the Audio Jailbreak Live? A Controlled Frequency-Depth Audit of AdvWave-P on Qwen2-Audio](https://arxiv.org/abs/2610.07005v1)*

> 标签：#音频问答 | #对抗鲁棒性 | #可解释性 | #信号处理 | #统计分析
>
> 评分：**5.5/10** | 创新 1/2 | 技术严谨 1/1.5 | 实验充分 1/1.5 | 清晰度 0.7/1 | 影响力 0.5/1.5 | 开源 0.5/1.5 | 可复现 0.3/0.5 | 工程/实践 0.5/1.5


## 👥 作者与机构

- Boyuan Chen：eBRAIN Lab, Division of Engineering, New York University Abu Dhabi, UAE；Tandon School of Engineering, New York University, NY, USA
- Minseok Kim：eBRAIN Lab, Division of Engineering, New York University Abu Dhabi, UAE
- Sohaila Abdulsattar：eBRAIN Lab, Division of Engineering, New York University Abu Dhabi, UAE
- Minghao Shao：eBRAIN Lab, Division of Engineering, New York University Abu Dhabi, UAE；Tandon School of Engineering, New York University, NY, USA
- Siddharth Garg：Tandon School of Engineering, New York University, NY, USA
- Ramesh Karri：Tandon School of Engineering, New York University, NY, USA
- Muhammad Shafique：eBRAIN Lab, Division of Engineering, New York University Abu Dhabi, UAE

## 📌 核心摘要

论文研究加性音频越狱AdvWave-P在Qwen2-Audio上是否真正依赖某个特定频率，输入是干净语音与加性扰动叠加后的波形，输出是模型文本回答是否构成越狱，难点是频段位置、带宽、能量和移除结构容易混在一起。方法先按mel尺度在独立于受害者128-bin前端的80-bin分析基上划分连续频段并映射到STFT bins实施遮蔽，再经逆变换重建波形送入受害者与判官统计攻击成功率，同时比较音频片段在解码器各层的表示变化。在520条AdvBench提示、Qwen2-Audio贪婪解码、主判官GPT-4o-mini评测下，遮蔽mel分析基索引区间70-79对应的5613-8000 Hz后，判官统计的攻击成功率从完整对抗的0.767降至0.054。在同一520条语料8频段划分下，能量占比几乎完全预测该排序，Spearman相关系数为0.95，因此不能直接读成频率位置的因果结论。在同一评测设置下能量均衡划分和打散移除对照显示，遮蔽任意测试频段后攻击成功率均明显低于完整对抗，低频段连续移除比同能量打散移除后攻击成功率更低、更具破坏性。在399条被完整对抗越狱提示上提示与能量调整后的混合效应模型估计表示差异与频段必要性的关联，层30减投影层输出的对比为+0.293，95%置信区间为[0.11, 0.51]，该结果为关联而非因果定位。上述结论仅适用于epsilon为0.01的AdvWave-P在Qwen2-Audio上的表现，LLaMA-Omni因干净提示越狱率过高缺乏余量，其他攻击、受害者与扰动域及更细顶频段结果尚未验证。原文未披露训练、推理或部署成本。

## 🔗 开源与复现资源

- 第三方资源：<https://github.com/BoyuanChen99/Where_Does_The_Audio_Jailbreak_Live> — 链接可访问（HTTP 200）

可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 这篇论文要回答什么音频安全问题

任务的输入是把有害文字指令用语音合成读出来，再叠加一个很小的对抗扰动后送给音频语言模型，目标是让本该拒绝的模型转而给出有害回答，必须保留的信息是干净语音内容、对抗扰动结构和模型回复是否越狱，输出是判官打分的攻击成功率和解码器内部音频表示的变化。

已有路线发现文本侧的安全对齐不一定能迁移到音频侧，AdvWave 通过双阶段优化解决编码器梯度破碎，AdvWave-P 是它的加性版本，本文不提出新攻击，只审计一个说法：越狱效果是否住在某个特定频率或某个特定解码层。初学者容易误以为去掉高频就安全了，论文要检验这种定位说法在换划分、控能量、换去除结构后是否还成立。

### 已有频率选择方法和本文审计的区别

相关工作按原文可分为 3 类。第一类是音频对抗与心理声学攻击，早期工作做定向语音对抗或用掩蔽阈值降低可听性，但 AdvWave-P 只约束扰动的最大绝对值不超过 0.01，没有显式心理声学目标，所以本文不讨论可听性机制。第二类是频域选择与防御，GRM 按攻击与效用梯度比排序 mel 频段并扰动子集，ALMGuard 在 mel 频点上选择防御性通用扰动的位置，另有工作用编码器注意力找宽频区域，它们的输入、目标和运行阶段各不相同，不能直接当成同一条件下的优劣比较。

第 3 类是可解释性方法，包括遮挡归因、重训练对照、随机掩蔽平均和单层激活补丁，本文借用其谨慎态度：遮挡效应的大小可能来自位置、带宽、能量或去除结构，单层补丁也可能测不到跨层累积效应。

### 为什么频率定位容易被带宽和能量误导

论文要解决的具体混杂是分析频段本身不均匀。标准八频段按 mel 尺度划分，高频段覆盖更宽的赫兹范围，自然装下更多扰动能量。如果只报告去掉最高频段后成功率下降最多，就分不清是频率位置特殊，还是仅仅因为去掉的能量最多、带宽最宽。同样，连续整块去掉和打散去掉同样能量，对模型的影响可能不同；整体缩小扰动幅度和按频率挖掉一块，位移大小也不同。因此需要一组匹配对照：等赫兹划分、等能量划分、相同能量和相同频点数的打散去除、全局缩放，以及只留单频段和逐步累加保留，才能把位置、宽度、能量和结构分开。

### 审计总流程如何从波形走到行为和表示

整体流程分四步。第一步准备干净语音和 AdvWave-P 扰动，干净语音来自 AdvBench 提示词的语音合成并重采样到 16 kHz 单声道，扰动用 Adam 优化 3000 步得到。第二步在短时傅里叶域对扰动做遮蔽或保留，再逆变换重建波形，同时设置随机连续区、等赫兹、等能量、打散去除和全局缩放等对照。第三步把每种波形送给受害模型生成回复并由判官打分，同时记录解码器各层音频跨度隐藏状态。第四步比较行为下降量与能量、梯度排序的一致性，并检验表示差异随深度的变化，对原始深度曲线做替代检验，再用考虑提示词和能量的混合效应模型估计关联。

**加性扰动 × 短时傅里叶变换遮蔽：** 加性扰动指加在干净语音波形上的小幅对抗信号，短时傅里叶变换遮蔽指把该扰动变换到时频域后按频段置零再逆变换回波形。二者搭配的原因是只动扰动而不动干净语音，可以分离攻击结构的作用，组合后得到每个频段被拿掉后的新攻击波形，用于测必要性。

以下导读帮助阅读论文图 1，图中左侧是输入，中部是遮蔽，对照列在同一管线内，右侧分出行为与表示两个分支，底部是相关与检验。

> **看图路径：** 1. 先看左侧输入如何由干净波形加扰动得到对抗波形；2. 再看中间遮蔽分支与对照分支各改了什么；3. 最后看右侧行为分支与表示分支分别输出什么指标

[![原论文 Figure 1：Protocol overview. We decompose the perturbation Δ in the STFT domain, mask or retain each…](https://arxiv.org/html/2610.07005v1/methodology.svg)](https://arxiv.org/html/2610.07005v1/methodology.svg)

*论文图 1。原论文 Figure 1:：“Protocol overview. We decompose the perturbation Δ in the STFT domain, mask or retain each analysis band, reconstruct the waveform, and score the victim response.”。*

图 1 实际展示了从干净波形、对抗扰动到对抗波形的箭头，中部标出掩蔽扫描、仅保留扫描和累加保留 3 种操作，以及随机带宽匹配、等赫兹与等能量划分、能量匹配打散、均匀缩放和分级衰减等对照，右侧行为分支输出每频段成功率下降量，表示分支输出每层每频段的音频跨度差异，底部列出能量份额、梯度归因、替代检验和混合效应模型等检验环节。

### 频段遮蔽具体改了什么信号

分析基与受害者前端是两套东西，需要先讲清。受害模型自己用 128 个通道的对数 mel 前端，本文分析另起一套在 0 到 8 kHz 上的 mel 尺度分析基，Qwen 用 80 个分析通道分成 8 个频段，每段 10 个分析通道，16 频段细化时每段 5 个通道，Omni 用 128 个分析通道分成 13 个频段。论文先按 mel 边界定频段并报告赫兹边界，再把赫兹边界映射到短时傅里叶频点上实施遮蔽，重建用单精度浮点、不截幅、不做 16 位量化，保证逆变换误差很小。掩蔽扫描把某频段内扰动的短时傅里叶系数置零，仅保留扫描只留该频段，累加保留逐步增加保留的频段数。

**掩蔽扫描 × 仅保留扫描：** 掩蔽扫描指一次去掉一个频段而保留其余扰动，用于测必要性，去掉后攻击成功率下降越多说明该频段越必要；仅保留扫描指只留一个频段而去掉其余，用于测充分性，保留后还能维持攻击才算充分。二者分工互补，组合后才能区分某个频段是不可或缺还是单独就够。

遮蔽公式的符号含义是干净波形为输入，扰动为被改造对象，二值掩蔽在目标频段内为零其余为一，点乘后逆变换得到改造扰动再加回干净波形，计算目标是得到只缺一块扰动成分的新波形。

\[\tilde{\mathbf{x}}_{\text{mask}}^{(k)}=\mathbf{x}+\mathrm{ISTFT}\,\big(\mathrm{STFT}(\bm{\delta})\odot\mathbf{m}^{(k)}\big),\]

该公式只描述一次遮蔽重建，不包含优化、判官打分和隐藏状态计算，梯度路径和优化步骤属于攻击构造部分，不在此式中。

**音频跨度表示 × 音频跨度差异：** 音频跨度表示指解码器中对应音频 token 区间隐藏状态的平均池化向量，音频跨度差异指完整对抗与遮蔽版本在该向量上的欧氏距离平均值。前者是每层的状态读数，后者是遮蔽引起的位移大小，组合后用于检验行为上的必要性是否伴随表示层的大位移。

### 本文没有训练新模型实际做了哪些计算

本文没有训练新的语音模型或语言模型，需要明确说明。实际计算有 3 类。第一类是攻击优化，对 520 条 AdvBench 语音在扰动最大绝对值不超过 0.01 的约束下用 Adam 学习率 0.001 优化 3000 步，得到每条语音的加性扰动。第二类是重建与推理，对每个频段条件做短时傅里叶掩蔽逆变换重建，再用贪心解码和固定种子生成回复，隐藏状态在相同输入和解码配置的另一前向过程中记录。第 3 类是统计计算，包括提示词自助法区间、跨频段排序相关、相位随机化替代检验和分提示词混合效应模型拟合。

优化种子检查显示 20 条提示词在 3 个初始化下最大能量频段都落在同一高频段，但这只说明能量分布稳定，不能推出频率必要性。

### 评测条件判官样本量如何对应

主实验用 Qwen2-Audio-7B-Instruct，解码器共 32 层，隐藏维度 4096，攻击 520 条 AdvBench 提示词，主行为扫描和深度估计都用全部 520 条。判官分工必须对应条件：主八频段掩蔽和仅保留扫描用 AdvWave 的大模型判官提示词、默认阈值和温度为零的 GPT-4o-mini；等赫兹与等能量划分、打散去除、分级衰减、全局缩放和 ALMGuard 抑制扫描用 Meta-Llama-3-8B-Instruct 打分，不同判官的成功率不混合比较。另有 50 条子集用 GPT-5.6-sol 做严格参考判官的敏感性检查。LLaMA-Omni 作为空对照臂，其干净输入成功率已达 0.41，可用余量太小，频段比较的自助区间都会与零重叠。

**攻击成功率 × 攻击成功率下降量：** 攻击成功率指判官判定为越狱的回复占比，攻击成功率下降量指完整对抗输入的成功率减去某频段被遮蔽后的成功率。前者是各条件的绝对水平，后者是该频段造成的改变量，组合后才能在基线不同的条件下比较频段重要性。

### 标准八频段下去掉高频会发生什么

以下比较回答标准划分下各频段是否看起来重要，公平条件是同一重建管线、同一判官、同一 520 条提示词和贪心解码，指标是判官成功率，数值越大表示越狱越多，下降量越大表示该频段越必要。本表比较中 70 到 79 是独立于受害者前端的 80 通道 mel 分析基索引区间，对应 5613 到 8000 Hz，不是短时傅里叶频点索引，也不是受害者 128 通道前端的索引。

| 条件 | 样本量 | 判官 | 成功率 | 变化含义 |
| --- | --- | --- | --- | --- |
| 干净输入 | 520 | GPT-4o-mini | 0.008 | 基线几乎不越狱 |
| 去掉 0-9 分析通道 | 520 | GPT-4o-mini | 0.24 | 低频去掉也有大下降 |
| 仅保留单频段 | 520 | GPT-4o-mini | 贴近底部 | 单频段不充分 |

去掉最高分析频段后成功率从 0.767 降到 0.054，下降 0.714，95% 区间为 0.671 到 0.754，但去掉最低频段也从 0.77 降到 0.24，仅保留任一单频段原始成分时成功率都贴近底部。代价是该排序与能量份额高度重合，能量份额单独就能以 0.95 的排序相关预测该排序，梯度归因也达到 0.97，因此不能把该排序直接读成频率位置的发现。

论文图 2 左侧是 Qwen 的掩蔽下降蓝条与仅保留橙色虚线，右侧是 Omni 的对应结果，纵轴是相对完整对抗的下降量。

> **看图路径：** 1. 对比左侧 Qwen 高频蓝条高度与右侧 Omni 蓝条高度和误差线；2. 看橙色虚线代表的仅保留条件是否贴近顶部；3. 注意横轴是 mel 分析基索引区间不是受害者前端索引

[![原论文 Figure 2：Per-band behavioral importance on the n=520 corpus; bars show mask-sweep and keep-only drops, with…](https://arxiv.org/html/2610.07005v1/fig2_n520_asr.svg)](https://arxiv.org/html/2610.07005v1/fig2_n520_asr.svg)

*论文图 2。原论文 Figure 2:：“Per-band behavioral importance on the n=520 corpus; bars show mask-sweep and keep-only drops, with prompt-bootstrap 95% CIs for the primary mask sweep.”。*

图 2 可见 Qwen 左侧高频蓝条更高且误差线不贴零，橙色仅保留虚线贴近顶部表示下降量大即残留成功率低，右侧 Omni 蓝条矮且每个 95% 区间都与零重叠，说明在该模型上没有可靠的频段差异，横轴标签是 mel 分析基索引区间。

### 换成等宽与等能量划分后排序还稳定吗

该小节比较划分改变后结论是否改变，公平条件是同样只动扰动、同样重建管线，指标方向仍是残留成功率越低表示破坏越大。等赫兹八频段下去掉任一频段后残留成功率都不超过 0.30，低于 1 kHz 的成分只占扰动能量 23.0%。按语料平均扰动能量均分成 8 个连续频段后，去掉每段的残留成功率在 0.07 到 0.16 之间，范围不足以称为各段同等重要。在更细的 16 频段等能量分辨率下，去掉 7520 到 7960 Hz 的窄顶段后残留成功率为 0.10，下降 0.667，能量份额为 0.065，是该分辨率下最大下降，但没有该分辨率下的匹配随机对照，因此仍是未解决的观察，不是定位结论。

| 划分条件 | 样本量 | 判官 | 残留成功率 | 结果限制 |
| --- | --- | --- | --- | --- |
| 等赫兹八频段任一段 | 520 | Llama-3-8B | 不超过 0.30 | 各段都有破坏 |
| 等能量十六频段窄顶段 | 520 | GPT-4o-mini | 0.10 | 缺匹配对照未解决 |

等能量划分显示去掉任意 tested 频段都能大幅降低成功率，随机连续区对照去掉同样 40 个分析通道后均值 0.015，与去掉最高频段后的 0.05 同在底部附近，无法区分具体位置。反例是累加保留实验中按重要性和按能量排序的两条曲线几乎重合，保留最不重要的 6 段时成功率仍在 0.00 到 0.08，直到保留 7 段才到 0.28，8 段全保留才回到 0.80，说明充分性信号来自带宽加能量覆盖而非具体保留了哪几段。

论文图 6 横轴是 Transformer 层索引，纵轴是跨频段的成功率下降量与音频跨度差异的相关系数，蓝色是均值趋势，橙色带是提示词自助区间。

> **看图路径：** 1. 看左侧蓝色均值曲线从投影层到 30 层的上升幅度；2. 看橙色带的提示自助区间在浅层是否更宽；3. 对比右侧 Omni 曲线晚层是否基本走平

[![原论文 Figure 6：Raw full-depth correlation curve. The blue line shows per-band Pearson correlation…](https://arxiv.org/html/2610.07005v1/fig_depth_rho.svg)](https://arxiv.org/html/2610.07005v1/fig_depth_rho.svg)

*论文图 6。原论文 Figure 6:：“Raw full-depth correlation curve. The blue line shows per-band Pearson correlation \rho_\ell=corr(ASR\_Drop,Δ_llm^(\ell)) from the n=520 mean divergences across 32 layers.”。*

图 6 左侧 Qwen 点估计从投影层输出约 0.568 上升到第 30 层 0.877，但原文报告该原始曲线未拒绝相位随机化替代检验，p 值为 0.183，且留一频段 spread 达 0.172，右侧 Omni 晚层斜率近零，标记层只是视觉参考不是关键层估计。

### 表示差异随深度变大能定位到哪一层吗

测量对象是每层音频跨度差异与频段必要性的关联，比较方法是原始跨频段相关和考虑提示词与每提示词每频段能量的混合效应逻辑模型。原始八频段相关从投影层输出 0.568 上升到第 30 层 0.877，提示词自助估计的增量为 0.307，区间 0.271 到 0.342，但该区间以固定划分为条件，留一频段 spread 约 0.172，且未拒绝自相关保留的替代检验。

混合效应模型只用被完整对抗攻破的 399 条提示词，加入提示词随机截距和能量协变量后，差异系数从投影层 0.63 上升到第 30 层 0.93，第 30 层区间 0.70 到 1.19，预先指定的第 30 层减投影层对照为 0.29，区间 0.11 到 0.51，晚层均值 0.52，区间 0.31 到 0.76。行为无关的频段统计量没有相应深度对照，末音频帧相关停在 0.45 到 0.49，随机 token 跨度也能复现池化水平，因此只能说能量调整后的关联随深度变大，不能说找到了因果层。

单层激活补丁在投影层输出恢复 0.83，到 16 层 0.08，18 到 30 层为零，对照频段模式相似，且下游位置已在低层处理过被遮蔽音频，设计上测不到累积效应，属于定位无效的空结果。

| 估计量 | 样本量 | 起始值 | 第 30 层值 | 对照增量 |
| --- | --- | --- | --- | --- |
| 原始池化相关 | 520 | 0.568 | 0.877 | 增量 0.309 |
| 提示词自助原始 | 520 | 0.564 | 0.872 | 增量 0.307 区间 0.271 到 0.342 |
| 调整后混合效应系数 | 399 | 0.63 | 0.93 | 对照 0.293 区间 0.11 到 0.51 |
| 替代检验显著性 | 520 | 未设 | 未设 | p 0.183 未拒绝 |

原始增大的证据与调整后关联的证据回答不同问题，前者对划分敏感且未拒绝替代零假设，后者控制提示词身份和能量后仍为正但同样基于粗划分，对照统计也用同一粗划分，单层补丁不能检验跨层累积，累积或缓存补丁、拒绝方向读出和大激活通道检查是原文建议的下一步。

### 去除结构整体缩放和重优化支持说明什么

该小节回答破坏力来自连续结构还是单纯能量减少，比较时匹配了去除的频点数和总扰动能量。能量匹配的打散去除对照在每段做 20 次随机抽取，连续整块去除在低频段留下的成功率更低，高频段两者都贴近底部，因此去除结构有影响，但不能据此认定唯一必要频段。

全局缩放在保持扰动方向下按每段能量份额的平方根补数缩放，成功率仍在 0.75 到 0.79 附近，均匀去掉八分之一能量时为 0.76，这只是幅度敏感性检查，不是位置对照，因为掩蔽的相对位移为 0.27 到 0.49，而缩放位移仅 0.037 到 0.13，相差 3.8 到 7.3 倍。重优化试点在 20 条提示词上把扰动限制在单频段或两频段并集重优化，成功率仅 0.00、0.25 和 0.40，而覆盖约一半短时傅里叶频点的随机支撑均值达 0.86，说明 tested 的窄支撑不行，但某些宽随机支撑可以维持攻击。

| 对照条件 | 样本量 | 判官 | 成功率 | 比较含义 |
| --- | --- | --- | --- | --- |
| 全局缩放各段 | 未注明 | Llama-3-8B | 0.75 到 0.79 | 幅度检查非定位 |
| 均匀去掉八分之一能量 | 未注明 | Llama-3-8B | 0.76 | 贴近基线 |
| GRM 选择支撑重优化 | 20 | GPT-4o-mini | 0.75 | 随机均值 0.86 范围下沿 |
| ALMGuard 等能量抑制 | 520 | Llama-3-8B | 0.15 | 随机均值 0.17 范围内 |
| 随机支撑约一半频点 | 20 | GPT-4o-mini | 均值 0.86 | 窄支撑之外的存在性 |

ALMGuard 条件 0.15 落在 20 个匹配随机掩蔽的均值 0.17 和范围 0.150 到 0.187 内，GRM 条件 0.75 落在带宽匹配随机支撑均值 0.86 和范围 0.75 到 0.95 的下沿，两项试点都是不确定结论，且都不评价原方法的防御或效用目标。未胜出项是 GRM 随机的打散支撑与所选支撑结构不匹配，ALMGuard 只测了所选掩蔽在 AdvWave-P 上的抑制，不测其防御性通用扰动本身。

**能量份额 × 相邻层自相关的替代检验：** 能量份额指某频段扰动能量占总扰动能量的比例，相邻层自相关的替代检验指保留原始深度曲线频谱特性做相位随机化后比较晚层斜率。前者解释排序可能是带宽和能量带来的假象，后者检验原始相关随深度上升是否超出自相关基线，组合后避免把能量混杂和深度自相关误读为频率定位或因果层。

论文图 8 横轴是累积保留的频段数，纵轴是成功率，蓝色按重要性排序，绿色按能量排序，橙色带是能量匹配随机基线。

> **看图路径：** 1. 看横轴保留频段数 k 从 1 到 8 的成功率变化拐点；2. 对比按重要性排序与按能量排序两条线的重合程度；3. 看橙色随机基线带在 k=7 之前是否贴近底部

[![原论文 Figure 8：Cumulative band-addition on Qwen2-Audio (n=50).](https://arxiv.org/html/2610.07005v1/fig_r2_cumulative.svg)](https://arxiv.org/html/2610.07005v1/fig_r2_cumulative.svg)

*论文图 8。原论文 Figure 8:：“Cumulative band-addition on Qwen2-Audio (n=50).”。*

图 8 可见保留 1 到 6 段时两条排序线都在底部，重要性路径为 0.00、0.00、0.02、0.04、0.06、0.08，到 7 段才升到 0.28，8 段全保留回到 0.80，橙色随机带直到 7 到 8 段才上升，支持充分性来自覆盖量而非具体频段。

### 哪些结论在什么条件下才成立

正向结论只在 AdvWave-P、扰动预算 0.01、Qwen2-Audio 且有可用余量的条件下成立，预算 0.005 和 0.02 的攻击在冷启动重推理下从优化时 0.84 和 0.76 跌到 0.32 和 0.40，原因未分离，所以行为结果都用 0.01。Omni 干净成功率 0.41 导致频段效应区间都与零重叠，只能当空对照臂。遮蔽只动扰动而保持干净波形不变，能分离扰动结构，但不等同可部署滤波器，附录的低频单缺口把成功率从 0.77 降到 0.24，不能推荐为防御，也未测语音效用。

判官方面，主判官经 120 条对抗回复、40 条干净对照和 60 条分歧层抽样的条件盲单标注者校验，误报率 0.095，漏报率 0.131，Rogan-Gladen 修正后对抗条件约 0.87，区间约 0.83 到 0.95，但该修正不能搬到遮蔽条件，把对抗误报率套到残留 0.05 的顶段会得到负值，因此条件比较仍用未修正分数。50 条子集上严格参考判官的对抗成功率为 0.64，主判官为 0.76，排序保留但绝对值有漂移。

跨语料只有 JailbreakBench 全被攻破池 70 条无选择地复现宽排序，另两个 50 条最高必要性子集是选择性样本，不能独立验证用于选择它们的排序，3 个深度曲线也都未拒绝替代检验。

### 复现第一步做什么仓库现在能提供什么

复现第一步是按原文拿到公开提示词语料和公开受害模型，用相同语音合成渲染得到 16 kHz 单声道干净音频，再按相同预算和优化超参数重做 AdvWave-P 扰动，然后用单精度浮点、无截幅的短时傅里叶掩蔽逆变换管线重建各条件波形，用相同判官提示词和温度零配置打分，并保存回复与逐条件分数以备判官版本漂移。关于资源需要分开说三件事：代码开源、当前可达和未来提供是不同状态。

原文附录明确说伴随仓库将提供分析和优化代码、随机种子、攻击超参数、渲染说明、提示标识、模型响应和逐条件判官分数，用于从公开语料重新推导结果，但不发布优化后的对抗波形与扰动；判官是无不可变快照的服务方模型，已发布回复与分数才是复现标签的依据。本次收到一个第三方链接可达且状态码为 200，只能说明该链接本次可达，不能据此宣告代码已公开，也不能推断许可证、模型权重或新数据开放，更不能否认原文明确的未来提供计划。

判官敏感性方面，50 条子集上主判官与参考判官的一致率在 0.80 到 1.00，括号内是 Cohen kappa，对抗条件为 0.53，各频段约为 0.79、0.81、0.85 等，不能把一致率区间写成 kappa 区间。

### 什么时候值得尝试还需要补哪项验证

当研究者想检验某个音频越狱是否真有频率偏好，或想检验表示差异是否随深度变化时，值得尝试本文的分区感知审计：先做标准划分，再做等赫兹和等能量划分，再做能量与频点数匹配的打散去除和幅度缩放，最后做重优化支撑试点，行为与表示分开下结论。复现时先对齐分析基定义，Qwen 的 70 到 79 是 80 通道 mel 分析基索引，对应 5613 到 8000 Hz，不要与受害者 128 通道前端或 201 点短时傅里叶表示混为一谈。

还需要补的验证包括细分辨率下的匹配随机对照以解决窄顶段问题，累积或缓存补丁以检验跨层累积效应，以及在更多攻击、更多受害模型和更多语料上的全池复现。总体上，论文支持用受控对照审计频率说法，留下细分辨率顶段结果和更广泛化性悬而未决。

<details>
<summary>📎 论文与评分元数据</summary>

排名：前50% | 文档类型：方法研究 | [arXiv 原文](https://arxiv.org/abs/2610.07005v1)

</details>

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。

- 评分规则：type-aware-v1

- 评分模型：muse-spark-1.3-contributor

- 评分请求协议：openai_responses

---

[← 返回 2026-10-11 语音/音乐/音频论文速递](/audio-paper-digest-blog/posts/2026-10-11/)
