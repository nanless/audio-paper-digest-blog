---
title: "MoD-DPO: Towards Mitigating Cross-modal Hallucinations in Omni LLMs using Modality Decoupled Preference Optimization"
date: 2026-09-13
draft: false
description: "针对全模态大模型把一模态线索误用到另一模态提问以及过度依赖文本先验的问题，论文提出在偏好优化中加入不相关模态不变与相关模态敏感两项解耦约束并叠加纯文本惩罚，用自动构造的约 1.8 万偏好样本训练，在幻觉基准上报告最高约 27% 的匹配任务提升，而代价是每步增加无需梯度的损坏输入前向与四分之一轮数的训练预算控制。"
tags: ["偏好优化", "多模态模型", "后训练", "音视频", "音视频问答"]
categories: ["cvpr-2026 论文"]
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_paper_id: "conference:cvpr:2026:conference-paper-id:Chaubey_MoD-DPO_Towards_Mitigating_Cross-modal_Hallucinations_in_Omni_LLMs_using_Modality_CVPR_2026_paper"
paper_digest_source_kind: conference
paper_digest_conference_id: "cvpr-2026"
paper_digest_conference_record_url: "https://openaccess.thecvf.com/content/CVPR2026/html/Chaubey_MoD-DPO_Towards_Mitigating_Cross-modal_Hallucinations_in_Omni_LLMs_using_Modality_CVPR_2026_paper.html"
paper_digest_conference_pdf_url: "https://openaccess.thecvf.com/content/CVPR2026/papers/Chaubey_MoD-DPO_Towards_Mitigating_Cross-modal_Hallucinations_in_Omni_LLMs_using_Modality_CVPR_2026_paper.pdf"
paper_digest_api_reader_contract: "beginner-researcher-v3"
paper_digest_api_reader_article_sha256: "5b8db2faf20fa98a223dd2681209d01825856d5fed8fb88f346683e8050078c9"
paper_digest_api_reader_plan_sha256: "9eba7f6994d401345e588ae97c8e4c666c736b5ddc5b818ca0d8f85942eb7fb0"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings-v4"
paper_digest_api_reader_source_bindings_sha256: "4ed3c75609b4a45de9ae5fcfb246d7912be6e6e4cf3ef2a550dbe2f2024f1345"
paper_digest_api_reader_source_table_count: 4
paper_digest_api_reader_source_formula_count: 0
paper_digest_api_reader_structured_artifacts_sha256: "374a4e55995f98db8552d0d5672e37a601239c93f7c4e11bdbc0705aaf8f1fb8"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity-v1"
paper_digest_api_reader_author_identity_sha256: "01c0e633d5063816e01a89711f6217e9495111e82f2505a82b9bb0bc437ce7ad"
paper_digest_api_reader_author_count: 3
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity-v1"
paper_digest_api_reader_resource_identity_sha256: "e8fda201034bf07c93da9c2548432b33f703e21c50cbe663e18a61ff766d1a3b"
paper_digest_api_reader_resource_count: 0
paper_digest_api_reader_decision_projection: "api-reader-decision-projection-v2"
paper_digest_scoring_contract: "api-scoring-audit-v2"
paper_digest_taxonomy_contract: "paper-taxonomy-flat-tags-compat-v1"
paper_digest_taxonomy_selection_contract: "paper-taxonomy-selection-v1"
paper_digest_taxonomy_registry_version: "paper-taxonomy-v1"
paper_digest_taxonomy_registry_sha256: "15c82a567ce5a55dc1175684ed08b64c158558639d9c8fb822c9587ec32a8778"
paper_digest_taxonomy_concepts: [{"facet":"method","id":"method.preference-optimization","label":"偏好优化"},{"facet":"model_family","id":"model_family.multimodal","label":"多模态模型"},{"facet":"setting","id":"setting.post-training","label":"后训练"},{"facet":"signal","id":"signal.audiovisual","label":"音视频"},{"facet":"task","id":"task.av-question-answering","label":"音视频问答"}]
paper_digest_primary_task: "音视频问答"
paper_digest_primary_method: "偏好优化"
paper_digest_score: 7.0
paper_digest_rank_bucket: "前50%"
paper_digest_document_type: "方法研究"
paper_digest_conference_structure: replayable-pdf-layout-v1
---

# 📄 用不相关扰动不变、相关损坏敏感拆开音视频：MoD-DPO 如何压制跨模态幻觉

> 英文题目：*MoD-DPO: Towards Mitigating Cross-modal Hallucinations in Omni LLMs using Modality Decoupled Preference Optimization*

> 会议身份：`conference:cvpr:2026:conference-paper-id:Chaubey_MoD-DPO_Towards_Mitigating_Cross-modal_Hallucinations_in_Omni_LLMs_using_Modality_CVPR_2026_paper`


> ✅ 来源为官方会议 PDF；表格与 Figure 按原文证据绑定。PDF 公式以原页区域图片展示，未冒称作者原始 TeX。

> 会议来源：[官方记录](https://openaccess.thecvf.com/content/CVPR2026/html/Chaubey_MoD-DPO_Towards_Mitigating_Cross-modal_Hallucinations_in_Omni_LLMs_using_Modality_CVPR_2026_paper.html) · [官方 PDF](https://openaccess.thecvf.com/content/CVPR2026/papers/Chaubey_MoD-DPO_Towards_Mitigating_Cross-modal_Hallucinations_in_Omni_LLMs_using_Modality_CVPR_2026_paper.pdf)

标签：#偏好优化 #多模态模型 #后训练 #音视频 #音视频问答

评分：**7.0/10** | 创新 1.5/2 | 技术严谨 1.0/1.5 | 实验充分 1.2/1.5 | 清晰度 0.8/1 | 影响力 1.0/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 1.2/1.5

排名：前50% | 文档类型：方法研究

## 👥 作者与机构

- Ashutosh Chaubey：机构信息未能从会议 PDF 纯文本可靠映射
- Jiacheng Pang：机构信息未能从会议 PDF 纯文本可靠映射
- Mohammad Soleymani：机构信息未能从会议 PDF 纯文本可靠映射

## 📌 核心摘要

输入为包含音频流、视频帧与文本问句的全模态三元组，输出为自然语言回答，难点在于视觉线索诱发虚假听觉描述与音频线索诱发虚假视觉描述，以及大语言模型先验压制弱视听证据而产生空想。方法先用解耦字幕管线分别抽取视觉与音频证据并构造模态专属问答，为偏好学习提供可归因的正负样本来源。接着以损坏无关模态保持分布不变、损坏相关模态放大分布偏移的方式重写DPO奖励并求闭式偏好损失，使模型对无关扰动不变而对相关证据敏感。然后叠加仅文本输入的语言先验去偏惩罚以抑制空想回答，前一步的解耦偏好目标输出直接作为最终联合训练目标进入优化。与OmniDPO等仅构造多模态偏好对的方法不同，该工作在目标函数层面强制证据归因而非依赖数据隐式学习，因而能改变模型内部决策边界而非事后校正。在AVHBench音频驱动视频幻觉任务评测下，Qwen2.5Omni加MoD-DPO++的准确率为88.19，高于同基座加OmniDPO的准确率85.34。该结论的适用边界仅限于单模态强相关问答与匹配判断，对需互补融合的联合音视频推理尚未验证。原文未披露训练、推理或部署成本。

## 🔗 开源与复现资源

本次未形成可展示的已核验资源记录，开放状态尚未核实。
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 输入是什么，目标是什么，本文要解决哪种听错看错？

本文输入是同时包含音频轨、视频帧与文本提问的样本，目标是让全模态大模型只用提问指定的模态证据回答，减少把另一模态的线索或语言习惯当成事实的现象。作者把失败分成两类，一类是模态间虚假关联，例如画面里有人拍球、声音只是说话与拍球声，模型却因为看见狗而回答听见狗叫；另一类是过度依赖语言先验，例如画面是街道积水且音频静音，模型却顺着河流等词回答看见河水流动。必须保留的信息是基准、参考模型、训练预算与指标方向，否则无法判断改进是否公平。输出是一套可复述的偏好优化做法与自动数据构造流程，而非单纯调大模型。

**跨模态幻觉 × 全模态大模型：** 跨模态幻觉指回答引用了提问模态中并不存在的声音或画面，例如看到狗就说听见狗叫；全模态大模型指同时接受音频、视频与文本并用同一语言主干生成回答的模型。两者搭配的原因是同一主干既要融合互补信息又要守住模态边界，一旦预训练相关性与语言先验占上风，融合就变成串扰，本研究因此把减少串扰作为对齐目标。

对刚入门的读者，白话是模型不是听不清或看不清，而是在证据不足时用错了证据来源。学习依赖是先理解任务的提问归属，再理解优化目标如何把归属写进损失，最后才看数据与评测。后续各节按此顺序展开，例子会明确标为教学例子，不虚构数值。

### 同输入同目标的前人路线有哪些，本文站在哪一步？

在幻觉诊断方面，前人已提出面向视觉语言、音视频与更广义音视频语言的基准，用来暴露未 grounded 的生成，另有利用跨模态注意力模式探测幻觉痕迹的工作。按同输入同目标比较，训练时缓解路线包括构造新数据集与引入惩罚未 grounded 生成的目标，解码时防御路线包括视觉对比解码及其音视频扩展、指令对比与自适应焦点对比，以及可视化辅助与回溯重采样，这些方法在推理时重塑词概率但不改变模型内部决策边界。

在偏好优化方面，直接偏好优化提供了无需单独奖励模型的 rollout-free 替代，已被推广到多模态幻觉治理，例如用强裁判模型、检索增强上下文与合成偏好构造数据，或把偏好对偏向 grounded 回答。文中点名的视觉偏好优化通过散度项抑制纯文本策略，条件偏好优化比较信息完整与退化图像下的回答，视频层次偏好优化区分实例、时间与区域，全模态偏好优化则同时设文本偏好与多模态偏好以促进对视觉与听觉证据的关注。

本文的差异是目标中心且模态感知：不只换数据，而是把对无关模态不变、对相关模态敏感以及纯文本去偏直接写进优化目标，并给出闭式最优策略后用自动偏好数据训练。解码时方法可免重训但属事后干预，本文属训练时改变决策边界，两者运行阶段不同，不宜当成同条件胜负。

### 两类幻觉在样本层面长什么样？

为建立直觉，先看论文首图安排的两个对照。第一组是听觉提问配视觉干扰，音频标注为说话与篮球拍击声，提问问是否听见狗叫，基线与普通偏好优化多给出肯定开头，只有本方法给出否定开头。第二组是视觉提问配语言干扰，音频标注为静音，画面为街道积水，提问问是否看见河水流动，前几种方法仍给出肯定开头，本方法给出否定并指出是街道积水。该图的作用是把抽象的虚假关联与语言先验落到可检查的首词与证据引用上。

> **看图路径：** 1. 先看上半部分提问是否为听觉问题而配音标注是否为说话与拍球声；2. 再对比四行回答首词是肯定还是否定以及哪一行给出否定纠正；3. 再看下半部分提问是否为河流画面而配音标注是否为静音；4. 最后确认两类失败分别对应模态间错误关联与文本先验主导

[![原论文 Figure 1：Comparison of the proposed MoD-DPO with other pref- erence optimization baselines for mitigating…](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/ed96351dbf60/figure-1.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/ed96351dbf60/figure-1.png)

*论文图 1。原论文 Figure 1：“Comparison of the proposed MoD-DPO with other pref- erence optimization baselines for mitigating cross-modal halluci- nations arising from spurious inter-modality correlations…”。*

从像素可见，上半部分两张室外拍球帧对应同一段拍球音频，下半部分两张积水街道帧对应静音标注，右侧 4 个回答框按模型版本纵向排列，肯定词用红色、否定词用绿色突出，虚线分隔上下两类失败。教学例子是若把狗的画面与叫声同时出现当成必然联系，模型就会在只有其一时补全另一；若把河流一词的文本共现当成视觉事实，模型就会在静音积水时仍说看见河流。复述时应核对提问模态、实际提供模态与回答首词三者是否一致。

### 方法全景：一个样本如何走完输入到输出？

沿一个视觉相关提问走完全流程有助于定位每个组件。输入是音频、视频与视觉提问三元组，模型先用当前策略对完整输入生成回答分布，同时用参考模型对同一完整输入生成参考分布以防偏离太远。接着构造两类损坏输入，一类损坏无关音频，一类损坏相关视频，分别送入停止梯度的目标分支得到两个固定分布。优化目标要求完整分布靠近参考分布、靠近无关损坏分布、远离相关损坏分布，同时让选中回答的隐式奖励高于拒绝回答。输出是更新后的策略，它在完整输入下更可能给出基于相关模态的回答。

下图把上述路径画成三块，左侧是标准偏好与参考正则，中间是按提问模态分组的损坏分支，右侧是纯文本惩罚，绿色加号表示在原目标上做加法扩展。

> **看图路径：** 1. 先沿左侧直接偏好优化框确认回答偏好与参考正则两条支路；2. 再看中间两组损坏输入分支如何分别标注不变与敏感的方向；3. 最后看右侧纯文本惩罚如何把文本奖励向下压

[![原论文 Figure 3：Modality Decoupled Preference Optimization.](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/ed96351dbf60/figure-3.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/ed96351dbf60/figure-3.png)

*论文图 3。原论文 Figure 3：“Modality Decoupled Preference Optimization.”。*

从像素可见，左侧上下两框分别标注回答偏好与参考正则，中间左右两大框分别对应视觉提问与音频提问，每框内上方为完整输入分布、下方经模态损坏分叉为两个损坏分布，虚线箭头标注不变方向向下压、敏感方向向上抬，右侧从原始奖励经文本惩罚得到最终奖励。复述时注意损坏分支不回传梯度，只作为固定目标参与散度计算，交替按视觉批与音频批训练而非混批。

### 不变、敏感与文本去偏各自计算什么？

标准直接偏好优化从带参考约束的强化学习目标出发，最优策略可写成奖励与参考策略比值的指数形式，再经 Bradley-Terry 模型得到只比较选中与拒绝回答对数比的损失。本文把该目标推广到音视频输入，期望取自音视频数据集，奖励与策略均以音频、视频与提问为条件。

**直接偏好优化 × 模态解耦：** 直接偏好优化负责在不训练单独奖励模型的情况下让选中回答的隐式奖励高于拒绝回答，同时用参考模型约束不偏离太远；模态解耦负责把上述比较按提问所属模态拆开，要求损坏不相关模态时分布不动、损坏相关模态时分布明显移动。搭配理由是只比回答好坏学不到证据归属，解耦项把证据归属写进优化目标，组合后梯度同时推动答对与用对模态。

对视觉提问，作者在原目标上减去无关音频损坏的散度并加上相关视频损坏的散度，系数分别记为不变强度与敏感强度。为使优化可行，假设损坏分支的分布在每一步内固定为目标分布，用拉格朗日乘子法求平稳点得到最优策略的闭式形式，其中温度系数为三项系数之和，策略正比于奖励指数乘以参考分布与两个固定分布的幂次。将该奖励代回偏好模型即得视觉分支损失，音频分支对称可得，最终解耦损失为两者之和。

**不变性 × 敏感性：** 不变性分工是压住无关模态的影响，提问问画面时把音频损坏前后输出分布拉近；敏感性分工是放大相关模态的作用，提问问画面时把画面损坏前后输出分布推远。两者必须成对出现的原因是只压无关项模型可能对所有扰动都麻木，只推相关项模型可能对任何扰动都惊慌，成对使用才形成只认相关证据的决策边界。

语言先验去偏是对上述奖励再减去纯文本下选中回答的对数概率，使用的纯文本模型取为冻结的参考模型以节省开销，强度记为去偏系数，最终完整目标在解耦损失上再减去纯文本对数比的加权项。

**语言先验去偏 × 模态解耦偏好优化：** 语言先验去偏分工是降低只看文本就能给出选中回答的概率，抵消主干从大规模纯文本预训练带来的文本捷径；模态解耦偏好优化分工是重排音视频证据的权重。搭配原因是即使音视频权重排对了，强文本先验仍可直接生成幻觉答案，去偏项把纯文本路径的奖励压低，组合后模型必须从音视频中找依据才能获得高奖励。

实现细节是损坏输入的前向不计算也不累积梯度，训练时视觉提问批与音频提问批交替出现，且不变强度设得低于敏感强度，理由是跨模态信息有时仍有益，例如狗的画面可用叫声佐证。原文还讨论了联合音视频任务的扩展形式，但实证显示对消除跨模态幻觉增益不明显，因此主训练只用强关联单模态提问。

### 偏好数据如何自动构造，匹配与错配为何都要？

数据流水线分 3 段。第一段把音视频解耦标注，视频侧用大模型生成详细视觉描述并用 tagging 模型抽取帧标签，音频侧用音频大模型生成详细音频描述，原始文件取自视频描述、视觉音频语言预训练与音频描述 3 类公开来源。第二段用大模型基于解耦信息生成两类问答，一类是只描述所见或所闻的描述任务，一类是判断某物体或事件是否在指定模态出现的存在任务。第 3 段按提问模态构造难负例，选中回答只用相关模态信息，拒绝回答混入无关模态信息，例如视觉提问的拒绝回答掺入音频线索，而非完全无关文本。

下图从左到右展示了上述 3 段，左侧为视频帧与波形分别进入不同标注器，中间为描述与存在两组提问模板，右侧为视觉提问与听觉提问各自的选中与拒绝回答来源。

> **看图路径：** 1. 先从左到右走完视频帧与音频波形到解耦标注的分离路径；2. 再看中间问答生成如何分为描述与存在判断两类任务；3. 最后看右侧选中与拒绝回答分别取自相关与无关模态信息

[![原论文 Figure 4：Preference Data Generation Pipeline.](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/ed96351dbf60/figure-4.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/ed96351dbf60/figure-4.png)

*论文图 4。原论文 Figure 4：“Preference Data Generation Pipeline. We disentangle the audiovisual input to obtain separate audio and visual captions or tags (Stage 1), which are then used to generate QA pairs…”。*

从像素可见，第一段 3 个标注框颜色不同以示分离，第二段上下两框分别对应描述与存在判断，第 3 段上下两框分别对应视觉提问取视觉标注为选中、取音频标注为拒绝，音频提问反之，箭头明确标出信息来源。多数情况下作者还把不同文件的音频与视频拼成错配上下文以增强去关联效果。

**匹配上下文 × 错配上下文：** 匹配上下文指音频与视频取自同一原始文件，保留自然共现；错配上下文指音频与视频来自不同文件，人为打破共现。两者搭配训练的原因是只用匹配数据模型容易把共现当因果，只用错配数据又偏离真实分布，混合使用让拒绝回答中的对侧模态信息成为难负例，迫使模型按提问模态取证而非按共现猜测。

复述时需记住解耦发生在标注与问答生成两处，目的是不让模型在数据层面重新学到模态间捷径。

### 训练与推理的计算过程到底是什么？

训练是偏好微调而非从零预训练，更新的是参考全模态模型的策略参数，参考模型冻结用于正则与纯文本去偏。每步对同一批样本做 4 次前向，1 次完整输入需梯度，3 次损坏或纯文本输入免梯度并作为固定目标，损失比较选中与拒绝回答的隐式奖励差，梯度只经完整输入路径回传。推理与普通全模态模型相同，无需额外对比解码，直接用更新后策略自回归生成。

成本上额外开销在训练侧而非推理侧，推理开销与输出长度有关，训练预算通过减少轮数对齐，复现时应分别记录训练资源与推理延迟，不把总前向量等同于实际 wall-clock 时间。

### 用什么数据、模型与预算做公平比较？

评测分 3 类。幻觉评测用音视频幻觉基准与多模态诅咒基准，前者约数千样本覆盖数千视频，测试音频驱动的视频幻觉、视频驱动的音频幻觉与音视频匹配，后者测试虚假模态间关联与单模态过度依赖。通用能力评测用联合音视频理解、视频理解与音频理解 3 类基准，以检验去幻觉是否损伤通用能力。指标在幻觉基准上报告准确率、精确率、召回率与调和平均，以及感知准确率与幻觉抵抗率，方向均为越高越好，通用基准报告多任务平均准确率。

参考模型为两个公开全模态模型，基线包括直接在其上做普通偏好优化与全模态偏好优化。实现基于常用微调代码库改造，本方法单轮训练，基线训 4 轮以对齐总前向预算，因为本方法每步需额外对损坏音频、损坏视频与纯文本做免梯度前向。优化器超参数按调参选定，复现时应先对齐该预算口径而非只对齐轮数。

下表按原文连续句子整理评测协议的关键规模，数字与单位保留原文写法，裸值不擅自补百分号，表头单位另行说明。

| 评测对象 | 任务侧重 | 样本规模 | 视频规模 | 通用能力对照 |
| --- | --- | --- | --- | --- |
| 幻觉基准一 | 跨模态幻觉与上下文匹配 | around 5k samples | over 2k unique videos | 联合音视频理解 |
| 幻觉基准二 | 单模态依赖与模态间关联 | 2.4k samples | over 1.2k unique videos | 视频理解与音频理解 |

上表说明幻觉评测与通用评测分工不同，前者查是否用错证据，后者查去幻觉是否以掉点为代价。未报告统计显著性与多次随机种子方差，引用时应表述为单次报告而非普遍保证。资源状态方面，未发现来源绑定且完成验证的资源，不得声称代码模型数据已公开，复现应按论文文字重写流水线。

论文报告在音视频幻觉基准上，本方法在总体准确率与调和平均上优于所有基线，尤其在音视频匹配任务上 results in gains of up to 27% accuracy relative to the reference models on the audiovisual matching task，在另 1 基准上有 around 3-4 % overall performance gain over the reference models，比较均保留原文数字与单位写法，不另行换算。

### 数据划分与聚合口径如何交代？

原文交代偏好数据总量与视频数，评测基准交代样本数与视频数，但未给出训练验证测试划分、采样随机种子与聚合是宏平均还是微平均，引用时应明确标注口径缺失。指标聚合在幻觉基准上分任务报告准确率、精确率、召回率与调和平均，在诅咒基准上分虚假关联与单模态依赖报告感知准确率与抵抗率，通用基准报告多任务平均准确率。数值相同不代表同一指标，百分点与相对百分比不同，比较时必须核对数据集、模型阶段、指标与聚合对象四者一致。

### 主结果测什么，与谁比，关键数字支持什么判断？

主结果回答在相同参考模型下，本方法是否比普通偏好优化与全模态偏好优化更少幻觉且保持通用能力。论文报告在音视频幻觉基准上，本方法在总体准确率与调和平均上优于所有基线，尤其在音视频匹配任务上相对参考模型有最高达 2 位数的准确率（%）提升；在多模态诅咒基准上总体有数个百分点的提升，其中语言主导任务上叠加文本去偏后的增益更明显，支持去偏项确实压制了文本捷径。通用基准上基线提升不一致，而本方法在联合、视频与音频三侧均有稳定增益，支持去幻觉未以通用能力为代价。

下图展示 3 组平均准确率柱状对比，4 种颜色分别对应参考模型、普通偏好优化、全模态偏好优化与完整方法，纵轴为百分比。

> **看图路径：** 1. 先确认横轴为对数似然纵轴为密度并区分完整与损坏输入两条曲线；2. 再比较左侧两幅相关模态损坏时的分布偏移量是否大于右侧两幅；3. 最后核对基线与本方法在无关损坏下谁的重叠面积更大

[![原论文 Figure 7：Distribution shift for the log-likelihood of the correct answer when the relevant modality is…](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/ed96351dbf60/figure-7.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/ed96351dbf60/figure-7.png)

*论文图 7。原论文 Figure 7：“Distribution shift for the log-likelihood of the correct answer when the relevant modality is corrupted (left two plots) and when the irrelevant modality is corrupted (right two…”。*

从像素可见，四幅密度图按相关损坏与无关损坏分组，每幅内青色为完整输入分布、品红为损坏输入分布，虚线标出均值偏移量，左侧两幅相关损坏下本方法偏移更大，右侧两幅无关损坏下本方法重叠更大。该分布证据支持不变与敏感两项确实改变了决策边界，而非仅靠回答措辞变化。下表用原文连续句中的增益数字做最小可核对汇总，不搬运宽表裸值，避免在表头缺失时误贴单位。

| 比较维度 | 指标方向 | 基线 | 本方法 | 原文报告的增益 |
| --- | --- | --- | --- | --- |
| 音视频匹配 | 准确率越高越好 | 参考模型 | 模态解耦偏好优化 | up to 27% accuracy relative to the reference models |
| 多模态诅咒总体 | 感知准确率与抵抗率越高越好 | 普通与全模态偏好优化 | 叠加文本去偏的完整目标 | around 3-4 % overall performance gain over the reference models |

上表的主要收益是匹配任务提升最大，代价是该数字为相对参考模型的最大值而非每任务平均值，不能推广为所有任务都有同等幅度。未胜出项是部分细分子任务上普通偏好优化的召回率仍有竞争力，说明本方法用精确率换取了更少幻觉，引用时应同时报告精确率与召回率而非只看准确率。

### 拿掉哪一项会掉点，损坏方式与上下文如何影响结果？

消融按三项系数是否为零组织。只开敏感或只开不变均优于全关，两者同开进一步提升，叠加文本去偏后召回率与幻觉抵抗率提升最明显，支持三项互补而非重复。超参数趋势是敏感强度增至一定值前精确率与感知准确率上升，过高后召回率与抵抗率下降；不变强度超过较小阈值后性能明显下降，与跨模态信息有时有益的先验一致；去偏强度过高会连有益语言先验一起压制，导致精确率与感知准确率骤降。

损坏方式比较显示，用扩散加噪损坏音视频效果最好，随机噪声与随机跨文件音视频次之，全零与小步数扩散较差，小步数下损坏与原输入过于相似会导致散度估计失真。拒绝回答用对侧模态相关内容做难负例明显优于完全无关文本，支持难负例的教学价值。上下文比较显示只用匹配或只用错配均不如两者混合，加入联合音视频任务的额外损失未带来显著增益，因此主方法不依赖联合任务。

下表用原文连续句整理数据规模，说明消融与主结果共享同一自动数据分布，避免把数据差异误读为方法差异。

| 数据属性 | 指标 | 基线规模 | 本方法规模 | 来源说明 |
| --- | --- | --- | --- | --- |
| 偏好样本总量 | 样本数 | over 10.8k unique videos | 18,112 preference data samples | 自动生成 |
| 视频总量 | 视频数 | over 18.1k automatically generated samples | over 10,854 unique videos | 跨 3 类来源 |

上表提示数据以存在判断与描述两类任务为主，来源跨 3 类数据集，复现消融时应固定该分布再调系数，否则无法归因。局限是原文未报告多次运行方差与显著性检验，超参数结论基于单次调参，不宜当成跨模型最优值。

### 哪些边界未评测，哪些推论不能做？

论文在讨论中明确当前框架未显式促进需要互补音视频协同推理的任务，例如必须同时听清与看清才能答对的联合推理，解耦目标偏向压制串扰，可能对有益协同帮助有限，这是适用边界而非实现错误。未测量推理延迟、每步额外前向的实际耗时与输出帧率，总体趋势不等于每步都更快，不能承诺延迟改善。未报告误判率的人工复核与跨领域泛化，自动指标不能当成人评。

相关性不等于因果，注意力占比提升与分布偏移支持模型更依赖音视频，但不能单独证明幻觉减少完全由注意力引起。缺失证据不是技术错误，例如未给出梯度路径的逐层分析、未开源权重与代码链接可达性验证，复现时应列为待补验证而非默认成立。总体上可表述为报告显示与支持，跨模型与跨任务推广表述为可能与待验证。

### 复现先做什么，需要哪些超参数与信息条件？

先按 3 段重写数据流水线，再实现三项损失，最后对齐预算评测。数据侧需解耦标注器、问答生成器与难负例模板，保留提问模态归属与匹配错配混合比例。训练侧需实现完整输入、损坏音频、损坏视频与纯文本 4 路前向，其中后 3 路停止梯度，视觉批与音频批交替，温度系数为三项系数之和。评测侧固定参考模型、相同偏好数据与相近总前向量，分别跑幻觉基准与通用基准。

下表整理原文明确给出的可运行配置，数值保留原文写法，学习率与系数不四舍五入。

| 配置项 | 参数名 | 基线取值 | 本方法取值 | 原文条件 |
| --- | --- | --- | --- | --- |
| 优化步数 | 训练轮数 | four epochs | a single epoch | 8 H100 GPUs |
| 学习率与批量 | 学习率与每卡批量 | β = 0.1 | 3e−7 with batch size of 1 | 单轮偏好数据 |
| 解耦与去偏强度 | 系数 | 普通偏好优化 | βsens = 0.05, βinv = 0.02, γLPD = 0.05 | 按调参选定 |

上表是最小可运行集合，缺项是标注器版本、扩散损坏步数默认值、随机种子与数据划分细节，原文未完全给出时应记录为缺项而不猜测。资源方面本次未获得可用链接验证，不得写当前可用或已公开，复现应视为需自行实现。先跑小规模验证不变与敏感分布是否按预期一小一大，再放大到全量评测，可节省预算。

### 何时值得尝试，一句话如何带走？

当问答明确归属单一模态、且错误多为串扰或文本捷径时值得尝试本方法，例如问听觉却答视觉、静音却答有声；当任务必须深度融合互补音视频才能答对时，应先小规模验证是否需要额外协同目标。带走的判断是把证据归属写进偏好优化比只比回答好坏更能减少跨模态幻觉，而纯文本惩罚是守住该收益的关键，但三项强度与损坏方式需在自有分布上重调，不可直接搬运最优值。后续验证应补多种子方差、人工误判复核与延迟成本，才能从基准增益走向可部署收益。

## 📐 原文公式与排版

以下展示论文原页中的数学表达区域，保留原始上下标、分式和符号排版。区域序号仅用于本文导航，不是论文公式编号。

[![原文数学表达区域 1，PDF 第 3 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/b0468e2e3505/figure-1.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/b0468e2e3505/figure-1.png)

区域 1 · [查看论文原页](https://openaccess.thecvf.com/content/CVPR2026/papers/Chaubey_MoD-DPO_Towards_Mitigating_Cross-modal_Hallucinations_in_Omni_LLMs_using_Modality_CVPR_2026_paper.pdf#page=3)

[![原文数学表达区域 2，PDF 第 4 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/b0468e2e3505/figure-2.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/b0468e2e3505/figure-2.png)

区域 2 · [查看论文原页](https://openaccess.thecvf.com/content/CVPR2026/papers/Chaubey_MoD-DPO_Towards_Mitigating_Cross-modal_Hallucinations_in_Omni_LLMs_using_Modality_CVPR_2026_paper.pdf#page=4)

[![原文数学表达区域 3，PDF 第 5 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/b0468e2e3505/figure-3.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/b0468e2e3505/figure-3.png)

区域 3 · [查看论文原页](https://openaccess.thecvf.com/content/CVPR2026/papers/Chaubey_MoD-DPO_Towards_Mitigating_Cross-modal_Hallucinations_in_Omni_LLMs_using_Modality_CVPR_2026_paper.pdf#page=5)

[![原文数学表达区域 4，PDF 第 5 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/b0468e2e3505/figure-4.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/b0468e2e3505/figure-4.png)

区域 4 · [查看论文原页](https://openaccess.thecvf.com/content/CVPR2026/papers/Chaubey_MoD-DPO_Towards_Mitigating_Cross-modal_Hallucinations_in_Omni_LLMs_using_Modality_CVPR_2026_paper.pdf#page=5)

另有 13 个候选区域因边界不明确或图片数量、尺寸限制未展开；请[查看完整论文](https://openaccess.thecvf.com/content/CVPR2026/papers/Chaubey_MoD-DPO_Towards_Mitigating_Cross-modal_Hallucinations_in_Omni_LLMs_using_Modality_CVPR_2026_paper.pdf)中的原始排版。

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。
- 评分规则：type-aware-v1
- 评分模型：muse-spark-1.3-contributor
- 评分请求协议：openai_responses

---

[← 返回 cvpr-2026 论文汇总](/posts/conference-cvpr-2026/)
