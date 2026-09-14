---
title: "SteerDuplex: Steerable Duplex Speech Dialogue Models"
date: 2026-09-14
draft: false
tags: [全双工语音交互, 强化学习, 基准测试, 语音]
categories: [论文速递]
description: "SteerDuplex 针对全双工语音模型可操控性不足，用 Moshi 骨干加针对性监督微调建立语气人设语速操控，再用两阶段连续性感知的混合奖励强化学习改善打断响应与暂停等待，代价是仍存在过早让出话轮与奖励钻空子的权衡。"
hiddenInHomeList: true
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_arxiv_id: "2609.12623"
paper_digest_workbench_contract: "researcher-workbench-v1"
paper_digest_reader_title: "可操控的全双工对话：在会说话的同时听懂指令与保住话轮"
paper_digest_original_title: "SteerDuplex: Steerable Duplex Speech Dialogue Models"
paper_digest_arxiv_version: null
paper_digest_arxiv_versioned_id: null
paper_digest_arxiv_abs_url: "https://arxiv.org/abs/2609.12623"
paper_digest_arxiv_pdf_url: "https://arxiv.org/pdf/2609.12623.pdf"
paper_digest_primary_task: "全双工语音交互"
paper_digest_taxonomy_contract: "paper-taxonomy-flat-tags-compat-v1"
paper_digest_taxonomy_selection_contract: "paper-taxonomy-selection-v1"
paper_digest_taxonomy_registry_version: "paper-taxonomy-v1"
paper_digest_taxonomy_registry_sha256: "15c82a567ce5a55dc1175684ed08b64c158558639d9c8fb822c9587ec32a8778"
paper_digest_taxonomy_concepts: [{"facet":"task","id":"task.full-duplex","label":"全双工语音交互"},{"facet":"method","id":"method.reinforcement","label":"强化学习"},{"facet":"artifact","id":"artifact.benchmark","label":"基准测试"},{"facet":"signal","id":"signal.speech","label":"语音"}]
paper_digest_primary_method: "强化学习"
paper_digest_score: 8.5
paper_digest_rank_bucket: "前25%"
paper_digest_document_type: "模型报告"
paper_digest_one_sentence: "SteerDuplex 针对全双工语音模型可操控性不足，用 Moshi 骨干加针对性监督微调建立语气人设语速操控，再用两阶段连续性感知的混合奖励强化学习改善打断响应与暂停等待，代价是仍存在过早让出话轮与奖励钻空子的权衡。"
paper_digest_authors: [{"affiliations":["Equal contribution. Project lead."],"name":"Utkarsh Tyagi"},{"affiliations":["Equal contribution. Project lead."],"name":"Ramaneswaran Selvakumar"},{"affiliations":["Equal contribution. Project lead.","Scale AI"],"name":"Advait Gosai"},{"affiliations":["Equal contribution. Project lead.","University of Maryland"],"name":"Sonal Kumar"},{"affiliations":["Equal contribution. Project lead.","Scale AI"],"name":"Nikhil Barhate"},{"affiliations":["Equal contribution. Project lead.","Scale AI"],"name":"Isabell Sagar"},{"affiliations":["Equal contribution. Project lead.","Scale AI"],"name":"Steven Li"},{"affiliations":["Equal contribution. Project lead.","Scale AI"],"name":"Miheer Bavare"},{"affiliations":["Equal contribution. Project lead.","Scale AI"],"name":"Daniel Quigley"},{"affiliations":["Equal contribution. Project lead.","Scale AI"],"name":"Fabiola Tapia Carrillo"},{"affiliations":["Equal contribution. Project lead.","Scale AI"],"name":"Jose M Patron E"},{"affiliations":["Equal contribution. Project lead.","Scale AI"],"name":"Diego Macías Gutiérrez"},{"affiliations":["Equal contribution. Project lead.","Scale AI"],"name":"Paul Song"},{"affiliations":["Equal contribution. Project lead.","University of Maryland"],"name":"Ramani Duraiswami"},{"affiliations":["Equal contribution. Project lead.","University of Maryland"],"name":"Dinesh Manocha"},{"affiliations":["Equal contribution. Project lead.","Scale AI"],"name":"Yunzhong He"}]
paper_digest_abstract_sha256: "7175653850c94808ab30a4a16c22ced711850f8a59911bb6b1dde7cf430fe0cb"
paper_digest_sidecars: {"citation.bib":{"sha256":"3434035ae472f6d6f3d6106896c97fcc044c3ee6a8a7670cf8923d8525a429ac","url":"/audio-paper-digest-blog/data/papers/2026-09-14/2609-12623/citation.bib"},"citation.json":{"sha256":"1cf081c96320736a8fb76c77ab022aa2680ce90605d17ce1d36b50783586f236","url":"/audio-paper-digest-blog/data/papers/2026-09-14/2609-12623/citation.json"},"citation.ris":{"sha256":"0c897439df836916513b24025e6617e749e66276c8261577b28d206fe9cec2c9","url":"/audio-paper-digest-blog/data/papers/2026-09-14/2609-12623/citation.ris"},"rethink-context.json":{"sha256":"64f84b92f7c4475a262e79bb5725185ef7223881d3a33f9589c73f32cae7626a","url":"/audio-paper-digest-blog/data/papers/2026-09-14/2609-12623/rethink-context.json"}}
paper_digest_api_reader_contract: "beginner-researcher-v3"
paper_digest_api_reader_article_sha256: "a59d149b62fffc373a5ae45a1df7ff625f181c0476601baddc0fc61118d4522f"
paper_digest_api_reader_plan_sha256: "4b93820a41808445f5b0ae322aac0cb6c6df7505d66a5d0b3aba441d3b6afcb0"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings-v4"
paper_digest_api_reader_source_bindings_sha256: "8e8fbd1ea2ab4adbba70d541692f218e37d612a20801d98713c5f22a2a6341ee"
paper_digest_api_reader_source_table_count: 5
paper_digest_api_reader_source_formula_count: 1
paper_digest_api_reader_structured_artifacts_sha256: "5d27d40bfebd16de37c72ea7dc41c246afcbdb72d759c3a0bcf48193018ccab9"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity-v1"
paper_digest_api_reader_author_identity_sha256: "cc0988c673114761867ad2537a20e597889bd9b6face141ef35440275be04fba"
paper_digest_api_reader_author_count: 16
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity-v1"
paper_digest_api_reader_resource_identity_sha256: "7e9c733f771d5f48c2bb8bcb0c918f41abe3e81c77f0bd2ba05b8244dc7071e7"
paper_digest_api_reader_resource_count: 1
paper_digest_api_reader_figure_persistence: "ephemeral-no-persisted-figure-assets-v1"
paper_digest_api_reader_decision_projection: "api-reader-decision-projection-v2"
---

# 📄 可操控的全双工对话：在会说话的同时听懂指令与保住话轮

> 英文题目：*[SteerDuplex: Steerable Duplex Speech Dialogue Models](https://arxiv.org/abs/2609.12623)*

> 标签：#全双工语音交互 | #强化学习 | #基准测试 | #语音
>
> 评分：**8.5/10** | 创新 1.5/2 | 技术严谨 1.1/1.5 | 实验充分 1.2/1.5 | 清晰度 0.8/1 | 影响力 1.2/1.5 | 开源 1/1.5 | 可复现 0.5/0.5 | 工程/实践 1.2/1.5


## 👥 作者与机构

- Utkarsh Tyagi：Equal contribution. Project lead.
- Ramaneswaran Selvakumar：Equal contribution. Project lead.
- Advait Gosai：Equal contribution. Project lead.；Scale AI
- Sonal Kumar：Equal contribution. Project lead.；University of Maryland
- Nikhil Barhate：Equal contribution. Project lead.；Scale AI
- Isabell Sagar：Equal contribution. Project lead.；Scale AI
- Steven Li：Equal contribution. Project lead.；Scale AI
- Miheer Bavare：Equal contribution. Project lead.；Scale AI
- Daniel Quigley：Equal contribution. Project lead.；Scale AI
- Fabiola Tapia Carrillo：Equal contribution. Project lead.；Scale AI
- Jose M Patron E：Equal contribution. Project lead.；Scale AI
- Diego Macías Gutiérrez：Equal contribution. Project lead.；Scale AI
- Paul Song：Equal contribution. Project lead.；Scale AI
- Ramani Duraiswami：Equal contribution. Project lead.；University of Maryland
- Dinesh Manocha：Equal contribution. Project lead.；University of Maryland
- Yunzhong He：Equal contribution. Project lead.；Scale AI

## 📌 核心摘要

全双工语音对话需在双通道同时监听与发声下完成内容作答、韵律交付与抢话管理，仅看文本转录无法评判语气人设语速与打断时机。方法链分三步：先在Moshi骨干上做掩蔽系统提示的监督微调以建立指令跟随与发声能力，其交互窗口采样进入分组解耦归一化策略优化，第一阶段以连续性约束抑制短答刷分，第二阶段追加延续奖励以穿过噪声与听众反信道。相对已有方法的关键差异是将内容裁判与声学有效性及时序可验证奖励解耦归一化并显式奖励持续说话，避免用短答或沉默换取时序得分，具有维持回答完整性的实际意义。在SteerBench基准下，SteerDuplex的Audio APR指标为65.10%，高于Moshi的Audio APR指标20.55%。强化学习进一步将源清洁中断响应与合成停顿抢话等交互行为优化，但部分聚合任务得分基本持平且存在过早让出话轮的权衡。结论适用边界受限于受控英语单轮操控与所用裁判协议，尚未验证多语言方言长期个性化与真实部署安全。训练成本方面监督阶段使用80张H100硬件完成3600步训练，报告约194.8卡时的两阶段RL区间算力，推理开销与部署吞吐仍需结合流式架构评估。

## 🔗 开源与复现资源

- 代码相关资源：<https://github.com/Utkarsh4430/SteerDuplex> — 链接可访问（HTTP 200）

可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 输入是什么，目标是什么，先保留哪些关键信息？

本文解读的对象是全双工语音对话模型的可操控性研究。输入是用户的实时语音，包含词义内容，也包含语气、语速、停顿、背景声与是否打断等声学与交互信号。目标是让模型在边听边说的同时，既能完成具体任务，又能按口头指令改变语气、人设、说话风格与语速长短。必须保留的关键信息有 3 类。第一是任务边界，论文区分说什么、怎么说与何时说话，评测也要分开。

第二是实验条件，所有主分数都注明是音频输入音频输出、3 次解码的均值与总体标准差，基线保留原协议分数。第三是输出形态，代码仓库当前可用，地址为官方给出的 GitHub 链接，但基准与部分训练音频受许可与知情同意限制，不随论文无条件重分发。

对刚入门的读者，先建立一个动作链条。用户说话进入两个并行音频流，模型同时生成自己的音频流与对齐的文本流。文本流决定回答的命题内容，音频码决定听起来的交付。交互层决定每 1 帧是继续说、等待、让出还是接管。如果只看最终转录本，会丢失语速是否达标、打断是否及时、暂停是否被抢话等信息。因此后文所有方法与实验都围绕内容、交付、时机 3 路信号展开，不把转录本分数当成全部。

### 已有路线解决了什么，还缺哪一块？

全双工路线先解决了双通道同时建模。早期工作建立双人对话的联合建模，后续加入同步与流交织，Moshi 把用户与助手两路音频流加上一路时间对齐文本流放在一起处理。PersonaPlex 加入角色与声音条件，F-Actor 用监督模仿学习交互控制。这些工作让模型能开口、能接话，但没有系统回答能否按指令改变语气与交付。

可控文本生成路线解决了按控制码改变风格情感与人设，语音理解路线让音频语言模型能推理音频中的关系与事件，语音助手评测覆盖口头指令遵循与多轮修订保持，全双工基准开始度量暂停、打断与后向通道。论文的对照做法是同输入同目标比较：同样是全双工语音输入输出，Moshi 与 PersonaPlex 作为可运行的开放基线直接对比操控与任务；同样是多轮任务，用音频多轮挑战与全双工多轮任务作补充；不同协议的托管模型分数只作背景上下文，不当作同条件胜负。缺的一块是参考锚定的声音交付评测与连续性感知的时机优化，这正是本文要补的训练与基准。

### 可操控性到底指什么，本文测哪一部分？

论文把可操控性定义为响应用户指令可靠地改变对话行为的能力。白话说，就是用户说请讽刺一点、请像退休文学教授、请只说一句、请说快点，模型下一轮真的照做，并且在后续对话中保持住，而不是只在文字上答应。英文是 steerability，后文简称操控。它与一般指令遵循的区别在于强调声音交付也要变，而不只是把事情做对。

分类图把设计空间分成三大家族，文本操控管语气人设语速与中途改指令，音频操控管听懂叹气耳语并调整自己声音，通用双工能力管轮流打断与暂停。下面的导读先帮你定位基准覆盖范围，再看像素细节。

**全双工 × 可操控性：** 全双工负责同时听和同时说，分工是管理何时开口、何时等待、何时让出话轮；可操控性负责按用户自然语言指令可靠地改变说什么和怎么说，分工是内容与声音交付的控制；二者搭配的理由是只会抢话不等于是好助手，必须在保持交互节奏的同时落实指令，组合意义是把话轮管理与指令遵循放在同一训练与评测框架下联合优化。

读图前先明确，图中例子是示意，不是模型输出也不是延迟测量。左列 5 个文本操控例子覆盖从全程讽刺到拒绝改变声音的边界，中列 5 个音频例子覆盖从听出压力到多轮打断后保持同一声音，右列 5 个双工例子覆盖 500 毫秒内响应、立即让出与嗯我知道了等短确认。

> **看图路径：** 1. 先看顶部三列标题，确认文本操控、音频操控与通用双工能力是并列家族；2. 再沿左侧紫色列看语气人设语速与中途改指令四行，理解本基准覆盖哪部分；3. 对照中间绿色列的叹气耳语与大声请求，区分听懂声音与改变自己声音；4. 最后看右侧蓝色列的轮流打断与暂停，确认时机管理是独立评测维度

[![原论文 Figure 1：A capability taxonomy for full-duplex spoken dialogue.](https://arxiv.org/html/2609.12623v1/fig1_capability_map.png)](https://arxiv.org/html/2609.12623v1/fig1_capability_map.png)

*论文图 1。原论文 Figure 1:：“A capability taxonomy for full-duplex spoken dialogue.”。*

这张图告诉你本文实测只是大空间的子集。SteerBench 只测明确要求的语气、人设、风格口音与速度长度四轴的内容加交付，音频多轮挑战、语音指令基准与全双工基准补任务与交互。学习时先记住这个分工，后面看到某个分数涨了，要先问是内容涨了、声音涨了，还是时机涨了。

### SteerDuplex 全景：一个样本走完输入到输出

SteerDuplex 基于公开 Moshi 骨干，保留时间变换器、深度变换器与分层音频编解码器。训练分两大段，先做监督微调得到 SteerDuplex-SFT，再做 2 阶段强化学习得到 SteerDuplex-RL，表格中加 RL 即指后者。推理与评测统一用共享默认助手提示，音频输入音频输出。

沿一个样本走一遍。用户语音与历史助手语音作为两路音频进入，助手文本流前先放一段自然语言系统提示前缀，两路音频在前缀期间保持静音并用分隔符标记结束，训练损失屏蔽掉这段提示。时间变换器读联合音频文本历史，给出文本 logits 与供音频解码用的表示，深度变换器预测分层音频码，最终合成语音。监督阶段用转录本与音频同时教内容与交付，强化阶段从交互窗口采样多个语音延续，用时机奖励加转录本准则打分，只对文本流动作算策略损失，音频码本动作不直接算策略损失，但因共享表示仍会被文本梯度间接影响。
下图是架构与训练总览，先看主路径再看奖励细节。

> **看图路径：** 1. 先沿 a 到 d 看条件前缀、编解码、分组奖励到两阶段训练的主路径；2. 再看 b 中时间变换器与深度变换器如何分工处理历史与音频码；3. 对照 c 中可验证时机、转录本准则与连续性两项的权重数值；4. 确认 d 中每阶段冻结初始模型作 KL 参照的箭头关系

[![原论文 Figure 2：SteerDuplex architecture and training.](https://arxiv.org/html/2609.12623v1/fig2_training_pipeline.svg)](https://arxiv.org/html/2609.12623v1/fig2_training_pipeline.svg)

*论文图 2。原论文 Figure 2:：“SteerDuplex architecture and training.”。*

图中 a 显示屏蔽损失的前缀如何条件化联合序列，静音前缀后以每秒 12.5 赫兹联合生成。b 显示因果时间变换器处理 300 秒上下文，深度变换器预测 8 层残差向量量化码本。c 列出混合奖励权重，可验证时机为 1.0，转录本准则为 0.75，响应连续性为 0.5，第二阶段延续时长为 2.0，并先在组内归一化再合并，同时有静音削波无效音频的波形门控。d 显示监督用自然对话加明确操控样本，第一阶段奖语义响应加时机加连续性，第二阶段专奖听众反馈后继续说，每阶段冻结初始模型作 KL 参照。记住这个顺序，后面公式与消融都围绕它展开。

### 奖励如何合并，连续性项解决什么钻空子？

强化学习的数据是交互窗口，覆盖轮流、打断、暂停、后向通道、噪声与语音镜像等场景，每个窗口有对齐的用户音频、助手历史、转录本、时机目标与语义打分元数据，同一上下文采一组延续共享比较。优化器用分组奖励解耦归一化策略优化，英文是 Group reward-Decoupled Normalization Policy Optimization，简称 GDPO。白话是每个奖励分量先在组内减均值除标准差，再按权重相加得到优势，避免某个分量数值大就主导更新。若某分量在组内恒定，则不提供学习信号。

**响应连续性 × 打断让出：** 响应连续性分工是奖励在用户未真正接管话轮时把回答说下去，要求首个回答达到一定时长；打断让出分工是奖励在用户真正打断时及时停下并恢复；搭配理由是只奖让出会让模型一听到动静就闭嘴，只奖连续会让模型不肯让路，组合意义是用 2 个方向相反的奖励项把该停与该讲分开，避免用缩短回答来刷时机分数。

具体权重按原文报告，第一阶段交互时机 1.0，转录本准则在轮流与打断层激活为 0.75，响应连续性 0.5 并带 4 秒首答目标，第二阶段在噪声与用户后向通道事件上加延续时长奖励 2.0 并带 4 秒目标，同时加强用户后向通道采样。波形完整性是硬门控，静音削波无效直接判无效；打断得分要求打断前助手确有语音，防止用沉默骗取让出分。文本流含填充动作也计入策略，因为填充帧决定暂停与起音时机。

\[\hat{A}_{i}=\sum_{k}w_{k}\frac{R_{i}^{(k)}-\mathrm{mean}(\mathbf{R}^{(k)})}{\mathrm{std}(\mathbf{R}^{(k)})+\epsilon}.\]

上式中 i 是同一组内的第 i 条采样，k 是奖励分量，R 是原始分量奖励，w 是分量权重，mean 与 std 是该分量在组内的均值与标准差，epsilon 防除零。计算目标是得到每条采样的组合优势，用于加权文本动作的策略更新。原文明确的实现是加权求和后再做批归一化，用自适应采样动作 KL 惩罚而非全分布精确 KL，梯度经文本头与共享时间变换器流动。未报告的是音频码本的直接梯度路径，原文明确说不给直接策略损失，因此不要臆测音频码被直接优化。

**分组奖励解耦归一化 × 波形完整性门控：** 分组奖励解耦归一化分工是把同一上下文采出的多个延续按每个奖励分量分别做均值方差归一化再加权，防止量纲大的分量淹没其他信号；波形完整性门控分工是直接剔除静音削波与无效语音的采样，不让其赚取让出分数；搭配理由是时机奖励与语义奖励尺度不同且都可能被空语音钻空子，组合意义是在优化前先保证每个分量可比且语音有效。

这组设计直接回应一个失败模式：模型为拿时机分而过早闭嘴。连续性项逼它在用户未接管时说下去，波形门控堵住空语音，组内归一化防止某一项恒定时被其他项裹挟。后文奖励探针会展示拿掉联合约束后空输出如何暴涨。

### 监督与强化各用什么数据，算力与检查点如何选？

监督混合包含 504416 条音频记录与 65675 条文本记录，训练质量按 88% 与 12% 采样，音频记录时长合计 8510.9 小时，但因重复源材料不等于独立录音时长。目标子集有明确数量，20000 条多轮指令遵循来自 5000 会话，25000 条操控记录来自 5000 会话，1200 条双工记录，1300 段 6 轮数学对话。上下文与回答上限 300 秒，按对齐边界切分，用词级对齐与轮次感知损失掩码。质量检查覆盖语义一致、音频有效、来源隐私与安全。报告的监督检查点是 3600 步中的第 2925 步。

**监督微调 × 2 阶段强化学习：** 监督微调分工是先建立基本操控与任务能力，用自然对话加合成操控样本教会模型按指令改变语气人设语速；2 阶段强化学习分工是再细化交互时机，用可验证交互奖励加转录本语义评判优化采样到的语音延续；搭配理由是监督只能模仿已有样本，难以直接优化等待还是打断的时机选择，组合意义是先有能完整作答的起点，再在不丢掉完整性的前提下学好时机。

强化 2 阶段都保持参数可训练，学习率 5 乘 10 的负 7 次方，事件上下文与最大回答各 30 秒。第一阶段在 4 节点各 8 卡 H100 上跑约 5.08 小时，对应约 162.7 卡时，第二阶段在单 8 卡节点跑约 4.01 小时，对应约 32.1 卡时，均含采样打分优化与写检查点，不含排队与评测。检查点选择用与基准测试集分离的开发集，只看交互与任务能力，冻结后再跑基准，基准分数不反向影响选择。交互池过滤掉已识别的与评测重叠的 CANDOR 材料，官方测试提示与标签不进优化。

复现时先做三件事：按记录列表固定划分并去重长样本，确认系统提示在训练与推理格式一致且损失屏蔽正确，确认强化采样包含暂停打断后向通道与噪声的完整事件分布。若缺少任一事件，时机奖励容易偏向单一行为。

### 用什么基准、什么指标、什么条件下比？

评测分四块。SteerBench 测口头操控，390 条语音提示，1067 条人工二值准则，其中 438 条音频准则与 629 条文本准则，覆盖语气人设风格口音与速度长度。音频准则用固定合成与真人参照片段锚定目标交付，人审验证参照是否符合要求。聚合分 3 层，音频操控平均通过率要求每条样本的全部音频准则通过，样本通过率进一步要求文本准则也全过，准则通过率是单条二值判断的平均。前两者是全约束通过，后者是散点平均，三者方向都是越高越好，不能互替。

**文本准则 × 音频参照准则：** 文本准则分工是看转录本判断任务内容是否完成；音频参照准则分工是拿一段固定参照语音作锚点，判断生成语音的语气韵律语速是否符合要求；搭配理由是文字看不出语速快慢与语气像不像，耳朵听又需要统一标准，组合意义是把说什么与怎么说分开打分，使操控评测同时覆盖内容与交付。

另三块是多轮鲁棒性用音频多轮挑战，口头指令用 VoiceBench，交互用全双工基准第一版、1.5 版与第二版。第一版部分轮流暂停样例复用训练中出现过的 CANDOR 对话，论文明确标为诊断用；泛化结论依赖第二版、无 Fisher 与 CANDOR 的 498 条 1.5 版切分，以及第一版中来源干净的合成打断、合成暂停与后向通道任务。开放基线是 Moshi 公开权重与 PersonaPlex 官方推理服务，同为 7,000,000,000 参数全双工语音模型。托管模型分数保留原协议只作上下文。

判分上 SteerBench 与第二版用 Gemini 3.6 Flash，音频多轮、VoiceBench 与第一版打断用 gpt-5.4-mini 中等推理力度，转录用 parakeet 模型。重复评测报告 3 次解码的均值与总体标准差。

初学者易混的是百分点与百分比。论文说音频操控平均通过率提高 44.5 个百分点，指两个百分比直接相减，不是相对提升 44.5%。后文表格差值同样用百分点或原量表差表示。

### 操控与任务主结果：涨在哪里，代价是什么？

先看操控总览。匹配条目、同一准则实现与同一判分下，监督模型音频操控平均通过率达 65.10% 正负 1.13%，Moshi 为 20.55%，PersonaPlex 为 16.44%。样本通过率在 32% 到 51.11% 之间，单准则通过率在 63.10% 到 77.03% 之间。说明交付控制大幅改善，但要同时满足所有约束仍难。

> **看图路径：** 1. 先看左图三条横棒的长度与数值，确认监督模型相对两个基线的位置；2. 再看右图每行深色全约束点与浅色单准则点之间的落差；3. 重点比较速度长度行全约束明显更低的现象；4. 确认两图横轴分别是音频通过率与通过率且越高越好

[![原论文 Figure 3：Steering improves, but complete task compliance remains difficult.](https://arxiv.org/html/2609.12623v1/fig3_steerbench.svg)](https://arxiv.org/html/2609.12623v1/fig3_steerbench.svg)

*论文图 3。原论文 Figure 3:：“Steering improves, but complete task compliance remains difficult.”。*

左图紫色长棒对应 65.10，灰蓝两根短棒对应 20.55 与 16.44，标注的加 44.5 个百分点是相对 Moshi。右图每行右侧菱形是单准则平均，左侧方块是全约束通过，速度长度行方块仅 32 而单准则 63.1，落差最大，意味着长度语速约束最难 1 次全过。判分均为 Gemini 3.6 Flash，结论限于该判分与匹配条目条件。

再看任务保持。下表是能力与交互的精简对比，3 次运行取均值，完整离散在附表。方向均为越高越好。表前问题是强化后操控与综合任务是否保持，公平条件是同一 3 次运行供给所有子分，指标含操控准则、多轮任务、语音指令与多轮双工任务。

| Steering and task capability | Steering and task capability | Steering and task capability |
| --- | --- | --- |
| SteerBench rubric pass (%) | 63.75 | 65.22 |
| AudioMC APR (%) | 13.64 | 14.38 |
| VoiceBench overall | 40.87 | 41.38 |
| FDB-v2 task mean | 4.17 | 4.17 |

表后解释是强化后各项为持平或更高。操控准则从 63.75 到 65.22，多轮任务通过率从 13.64 到 14.38，语音指令总分从 40.87 到 41.38，双工任务均值 4.17 持平，轮流从 4.18 到 4.19，指令遵循从 3.67 到 3.81。但这只是任务层均值，不能证明每个对话行为都被保留，后文会指出过早让出仍在某些上下文出现。

时机改进如下图，左图暂停抢话越低越好，右图重叠下响应越高越好。表前问题是强化是否学会何时等何时答，公平条件是来源干净的合成暂停与 498 条配对样本，指标方向已在图注标明。

> **看图路径：** 1. 先看左图两根柱子的高度，确认暂停抢话率是越低越好；2. 再看右图四行中打断响应与用户后向通道两行的右移幅度；3. 对照背景音与他人对话两行变化很小，理解改进不是均匀的；4. 注意右图圆点与菱形分别代表监督与强化后，横轴是成功率

[![原论文 Figure 4：RL improves when to wait and when to respond.](https://arxiv.org/html/2609.12623v1/fig4_overlap.svg)](https://arxiv.org/html/2609.12623v1/fig4_overlap.svg)

*论文图 4。原论文 Figure 4:：“RL improves when to wait and when to respond.”。*

左图紫柱 26.5 降到 9，差 17.5 个百分点，3 次运行平均。右图打断后正确响应从 72.5% 到 82.5%，用户后向通道后继续从 71.4% 到 80.6%，背景音恢复从 60% 到 59%，朝他人说话后恢复从 42% 到 48%。合成打断响应率从 96% 到 97.7%，语义从 3.94 到 3.88，接管延迟均值增加 40 毫秒。可见时机更好不等于每项交互都更好，语义与延迟有轻微代价。

### 多轮任务还能做对吗，哪些轴最弱？

音频多轮挑战上监督模型通过率 13.64% 正负 0.28%，平均准则分 37.17% 正负 1.33%，最强开放基线 PersonaPlex 为 6.64% 与 20.56%。完全成功的长任务仍少见，尤其需要口头修订的任务。全双工第二版慢速考官下监督模型均值 4.17，超 Moshi 的 2.59 与 PersonaPlex 的 2.65，且 4 个任务族全面领先。语音指令均值 40.87 正负 0.27，对 Moshi38.55 与 PersonaPlex30.51。强化后第二版均值变化仅负 0.003，安全从 4.65 到 4.81，日常从 3.74 降到 3.41，修正从 4.21 到 4.41，实体从 4.07 到 4.04。

下表是来源干净的重叠处理对比，498 条配对样本，行为打分加判分，阶段一用户后向通道声学检查缺失故只算行为。表前问题是在打断背景音与后向通道 4 种条件下谁更稳，公平条件是同一冻结行为打分与同一判分，指标越高越好。

| Checkpoint | response | recovery | another | backchannel |
| --- | --- | --- | --- | --- |
| Examples | 200 | 100 | 100 | 98 |
| SFT | 72.5 | 60 | 42 | 71.4 |
| RL stage 1 | 80.5 | 53 | 45 | 65.3 |
| + RL | 82.5 | 59 | 48 | 80.6 |

表后看，强化后打断响应 82.5 为最高，用户后向通道 80.6 为最高，与他人对话 48 为最高，背景音 59 略低于监督的 60。阶段一打断已到 80.5，说明第一阶段已拿大部分增益，第二阶段主要补后向通道的继续说。但强化在日常任务中趁考官说话时结束话语的比例从 23.6% 升到 32.3%，尽管平均词数从 22.1 到 23.0 变长，说明变长不等于不抢话。

下表展开第二版四任务族，慢速考官每轮 200 会话，3 次运行平均。表前问题是强化是否以掉任务为代价换时机，公平条件是同一 3 次运行供给全部分类，量表 1 到 5 越高越好。

| System | Corr. | Daily | Entity | Safety | Mean |
| --- | --- | --- | --- | --- | --- |
| SteerDuplex (matched ref.) | 4.21 | 3.74 | 4.07 | 4.65 | 4.17 |
| + RL | 4.41 | 3.41 | 4.04 | 4.81 | 4.17 |

表后结论是均值持平 4.17，但结构有 trade-off。修正与安全涨，日常掉 0.33，实体微掉。未胜出项是日常任务，说明在更随意的长对话中强化模型更容易提前结束或让出。复现时不要只看均值，要同时看分任务族与事件分。

### 拿掉连续性会怎样，单奖励为何钻空子？

对照组显示连续性不可少。不加连续性的原始时机配方从监督起点出发，在固定开发诊断中用户后向通道后只延续 1.10 秒，第二版轮流 3.93，低于监督的 4.18、阶段一的 4.04 与阶段二的 4.19。第二阶段把开发延续从监督的 2.60 秒提到 3.20 秒。但因交互池优化设置与训练预算不同，不能把增益唯一归因于连续性奖励，这是论文明确的限制。

下表是控制变体相对各自监督均值的差值，方向越高越好。表前问题是不同训练组织方式的影响，公平条件是每个变体 3 次运行均值减对应监督均值，但预算与配置不完全一致，故不能当单变量消融。

| Variant | FDB-v2 mean | FDB-v2 turn taking | VoiceBench |
| --- | --- | --- | --- |
| Original timing recipe | -0.115 | -0.244 | +0.049 |
| Stage 1 | +0.107 | -0.140 | +0.444 |
| SteerDuplex-RL | -0.003 | +0.018 | +0.505 |
| Training-seed replicate | +0.155 | +0.048 | +0.227 |
| Single-stage | -0.177 | -0.050 | -0.363 |

表后看，原始配方轮流负 0.244，第二版轮流正 0.018 且语音指令正 0.505。单阶段直接套最终奖励轮流负 0.05 且语音指令负 0.363，但其训练更少，所以不能断言分阶段本身带来优势。换种子复现仍达暂停抢话 9% 与轮流 4.22，说明主效应有一定稳健性。未胜出项是单阶段，负结果提示训练量与采样分布同样关键。

奖励探针进一步做反证，每条件 96 条留出采样，对比单族奖励与联合组合。标量训练奖励目标不同不可跨条件比，只能比共同行为诊断。表前问题是孤立奖励是否会产生空语音，公平条件是同一 96 条留出与同一双工诊断，空输出越少越好，双工分越高越好。

| Measurement | Earlier | Later |
| --- | --- | --- |
| Training noise-robustness reward | 1.96 | 0.77 |
| Development interruption reward | 0.450 | 0.793 |
| Continuation after user backchannel (s) | 3.20 | 2.00 |

表后数字很直观。仅及时性标量 0.670 但双工诊断 0，空 25 条；仅文本准则空 47 条双工 0.055；仅音频准则与仅音频质量各空 41 条双工 0；联合组合标量 0.554，空降到 4 条，双工 0.371。

证明孤立奖励都留下至少 26% 的空输出，双工分近零，联合大幅改善但仍剩 4 条空输出。判分用共享双工诊断，结论限于本研究的小探针，不是对某奖励组合的一般必要性断言。

### 哪些结论要打折，什么还没测？

范围上 SteerBench 是受控英语单轮显式请求加固定参照，不测跨语言方言录音条件与长期个性化，部分细粒度风格仍低于更强开放基线。重复评测取不等大小池中最高的 3 次平均，可能抬高分数，1.5 版每检查点只解码 1 次。CANDOR 重叠使官方第一版轮流暂停只能当诊断。

交互上报告的强化检查点在部分第二版上下文让话过快，单阶段对比训练量更少，不能证明分阶段本身的因果优势。阶段一 1.5 版缺一项声学检查，延迟只有均值无分布。骨干上仍是 Moshi 的 7,000,000,000 模型、编解码与流架构，推理声学表示与延迟上限已被限定，结论是该骨干内的改进，不是可操控语音模型的天花板，也未分离骨干数据与奖励各自贡献。

判分与部署上准则奖励是不完美代理，依赖大模型能否识别正确回答的请求特征，参照音频评测还可能偏爱该风格的特定实现。换判分在公共重打分池中轮流差为负，与更广对比的小正差方向不同，而 SteerBench 与多轮挑战无第二判分研究。自动安全与音频检查不等于可部署安全，英语评估不保证跨语言口音安全。误解纠正：总趋势成立不等于每组每步成立，标量奖励涨不等于对话变好，必须同时看完整性与事件分。

### 要复现，先跑通什么，再补哪项验证？

先跑通三件套。第一，用公开 Moshi 权重与官方推理服务复现两个开放基线在匹配条目与同一判分下的音频操控通过率，确认 20.55% 与 16.44% 量级可重现，再跑监督检查点确认 65.10% 附近。第二，用来源干净的 498 条 1.5 版与合成暂停探针复现打断 72.5% 到 82.5% 与抢话 26.5% 到 9%，注意官方暂停片段在用户末词后仅 0.02 到 0.11 秒，无法测等后回答，必须用合成暂停补延续测量。第三，固定 3 次解码种子，记录均值与总体标准差，不要只报最好 1 次。

关键超参数与信息条件要保留。监督批量每卡 88 全局 640，AdamW 学习率 2.828 乘 10 负 6 次方，深度变换器 5.657 乘 10 负 6 次方，音频文本采样质量 0.88 比 0.12。强化学习率 5 乘 10 负 7 次方，KL 系数 0.05 目标 0.01 自适应下限 0.02，裁剪 0.2 梯度裁剪 1.0，连续性 0.5 目标 4 秒，第二阶段延续 2.0 目标 4 秒，交互 1.0 转录本 0.75，事件上下文与最大回答各 30 秒，策略只含文本流含填充。开发集选检查点与测试集严格分离，测试提示标签不进优化。

还需补的验证有两项。一是对 SteerBench 与多轮挑战做第二判分，确认操控增益不依赖单一判分。二是补延迟分布与多人打断下的继续说时长，而非只看均值。代码当前可用，但训练音频与基准音频受知情同意与来源条款限制，重分发前需核对许可。

### 何时值得尝试这套做法，一句话收束？

当你的语音助手已能流利接话，但用户说请温柔点、请快点、请只说一句时经常做不到，或一遇到停顿就抢话、一被打断就丢失回答，就值得尝试先加针对性操控监督，再加连续性感知的 2 阶段时机优化。做法的适用条件是全双工流架构、能拿到词级对齐与交互事件窗口、有固定参照可做声音锚点。若只有转录本分数而无音频参照与时机事件，硬套权重只会刷出短回答。

收束是三句。监督解决操控从无到有，强化解决何时等何时答，连续性约束防止用闭嘴换分数。但第二阶段继续优化会出现打断分涨而后向通道延续从 3.20 秒掉到 2.00 秒、噪声鲁棒奖励从 1.96 掉到 0.77，说明让出与继续的冲突未被消除。因此以后每次报时机增益，都要并排报回答完整性与分事件任务分，否则单个成功率会掩盖过早让出。

<details>
<summary>📎 论文与评分元数据</summary>

排名：前25% | 文档类型：模型报告 | [arXiv 原文](https://arxiv.org/abs/2609.12623)

</details>

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。

- 评分规则：type-aware-v1

- 评分模型：muse-spark-1.3-contributor

- 评分请求协议：openai_responses

---

[← 返回 2026-09-14 语音/音乐/音频论文速递](/audio-paper-digest-blog/posts/2026-09-14/)
