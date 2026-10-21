---
title: "Uncovering Audio-Text Alignment in Large Audio-Language Models through Cross-Modal Concept Neurons"
date: 2026-10-21
draft: false
tags: [语音属性识别, 语音情感识别, 语言识别, 激活因果干预, 表示探测]
categories: [论文速递]
description: "论文研究只用文本预训练的主干如何识别语音和非语音属性，通过比较音频与文本在前馈神经元上的重合再用转向与关闭做因果验证，在三个模型与四类任务上发现标签特异的对齐但强度因模型而异。"
hiddenInHomeList: true
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_arxiv_id: "2610.28189"
paper_digest_workbench_contract: "researcher-workbench-v1"
paper_digest_reader_title: "大音频语言模型怎样听懂声音属性：跨模态概念神经元的发现与验证"
paper_digest_original_title: "Uncovering Audio-Text Alignment in Large Audio-Language Models through Cross-Modal Concept Neurons"
paper_digest_arxiv_version: 1
paper_digest_arxiv_versioned_id: "2610.28189v1"
paper_digest_arxiv_abs_url: "https://arxiv.org/abs/2610.28189v1"
paper_digest_arxiv_pdf_url: "https://arxiv.org/pdf/2610.28189v1.pdf"
paper_digest_primary_task: "语音属性识别"
paper_digest_tags_contract: "paper-tag-flat-tags-v2"
paper_digest_tags_selection_contract: "paper-tag-selection-v2"
paper_digest_tags_registry_version: "paper-tag-catalog-v2"
paper_digest_tags_registry_sha256: "cdef54423b5dfc00a1d017ef6639446d2ecd1d9c1acf71c8eb4f6219a46b7ba8"
paper_digest_tags_concepts: [{"facet":"task","id":"task.speech-attributes","label":"语音属性识别"},{"facet":"task","id":"task.emotion-recognition","label":"语音情感识别"},{"facet":"task","id":"task.language-identification","label":"语言识别"},{"facet":"method","id":"method.activation-intervention","label":"激活因果干预"},{"facet":"method","id":"method.representation-probing","label":"表示探测"}]
paper_digest_primary_method: "激活因果干预"
paper_digest_score: 6.5
paper_digest_rank_bucket: "前50%"
paper_digest_document_type: "方法研究"
paper_digest_one_sentence: "论文研究只用文本预训练的主干如何识别语音和非语音属性，通过比较音频与文本在前馈神经元上的重合再用转向与关闭做因果验证，在三个模型与四类任务上发现标签特异的对齐但强度因模型而异。"
paper_digest_authors: [{"affiliations":["Centre for Speech Technology Research, University of Edinburgh, United Kingdom","Graduate Institute of Communication Engineering, National Taiwan University, Taiwan"],"name":"Tzu-Quan Lin"},{"affiliations":["Graduate Institute of Communication Engineering, National Taiwan University, Taiwan"],"name":"Chih-Kai Yang"},{"affiliations":["Graduate Institute of Communication Engineering, National Taiwan University, Taiwan"],"name":"Yi-Cheng Lin"},{"affiliations":["Centre for Speech Technology Research, University of Edinburgh, United Kingdom"],"name":"Hao Tang"},{"affiliations":["Graduate Institute of Communication Engineering, National Taiwan University, Taiwan","NTU Artificial Intelligence Center of Research Excellence (NTU AI-CoRE), Taiwan"],"name":"Hung-yi Lee"}]
paper_digest_abstract_sha256: "fa36c84983840d5c750c2588e4359bff205c495a4d39c3890042ca2efbe1f926"
paper_digest_sidecars: {"citation.bib":{"sha256":"9bb8e9e6c095f71d1bc44393cced79790f6acf09f1cb2d2865b109647634f8d5","url":"/audio-paper-digest-blog/data/papers/2026-10-21/2610-28189/citation.bib"},"citation.json":{"sha256":"8b551854b33eba5565d7a16911336a476fe40e54763d2780f3ce84fd030e762d","url":"/audio-paper-digest-blog/data/papers/2026-10-21/2610-28189/citation.json"},"citation.ris":{"sha256":"aca07c2a3d341f788535ab40ae1ce24838e92b0c28472ac2cb7c0eb8c5b3a970","url":"/audio-paper-digest-blog/data/papers/2026-10-21/2610-28189/citation.ris"},"rethink-context.json":{"contract":"paper-research-context-v2","sha256":"1d86dad612ca2d5d0db0bfc2c2013a6f084d42583f078ab6a45ecd3643b6de3d","url":"/audio-paper-digest-blog/data/papers/2026-10-21/2610-28189/rethink-context.json"}}
paper_digest_api_reader_contract: "beginner-researcher-v3"
paper_digest_api_reader_article_sha256: "2e7e9c4234f1a79372e9b102a8605c97bcb98be8b22eb7916dc19c470d2967a9"
paper_digest_api_reader_plan_sha256: "d65d00b7d0a9942b8a5c384b6cef46469afd51ceea3b234d2d7b88a3a012e095"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings-v4"
paper_digest_api_reader_source_bindings_sha256: "4088a7f999dbdd5e6b9015653098f480fc5810ea216a610614c38f6fb9036d8e"
paper_digest_api_reader_source_table_count: 4
paper_digest_api_reader_source_formula_count: 4
paper_digest_api_reader_structured_artifacts_sha256: "e03f4c633d50eae7fa8a9e0ca5c61ad0b7b754a1c4503c6cf0589a30a2ee4f00"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity-v1"
paper_digest_api_reader_author_identity_sha256: "423911d6f5d96b947ca2ad680359c4bea61e9b34331f8de9986af53a1941f558"
paper_digest_api_reader_author_count: 5
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity-v1"
paper_digest_api_reader_resource_identity_sha256: "4d2aeb8f4e06e9a79a9ec3640a2266a272daefad2f05cdaef2876666b7cd37ac"
paper_digest_api_reader_resource_count: 0
paper_digest_api_reader_figure_persistence: "ephemeral-no-persisted-figure-assets-v1"
paper_digest_api_reader_decision_projection: "api-reader-decision-projection-v2"
---

# 📄 大音频语言模型怎样听懂声音属性：跨模态概念神经元的发现与验证

> 英文题目：*[Uncovering Audio-Text Alignment in Large Audio-Language Models through Cross-Modal Concept Neurons](https://arxiv.org/abs/2610.28189v1)*

<!--paper-tag-hierarchy-v1:start-->

**研究分类**

- **研究任务**：[语音属性识别](/audio-paper-digest-blog/papers/?concept=task.speech-attributes)；[语音情感识别](/audio-paper-digest-blog/papers/?concept=task.emotion-recognition)；[语言识别](/audio-paper-digest-blog/papers/?concept=task.language-identification)
- **研究方法**：[激活因果干预](/audio-paper-digest-blog/papers/?concept=method.activation-intervention)；[表示探测](/audio-paper-digest-blog/papers/?concept=method.representation-probing)

<!--paper-tag-hierarchy-v1:end-->

> 评分：**6.5/10** | 创新 1.5/2 | 技术严谨 1.2/1.5 | 实验充分 1.2/1.5 | 清晰度 0.8/1 | 影响力 1/1.5 | 开源 0/1.5 | 可复现 0.3/0.5 | 工程/实践 0.5/1.5


## 👥 作者与机构

- Tzu-Quan Lin：Centre for Speech Technology Research, University of Edinburgh, United Kingdom；Graduate Institute of Communication Engineering, National Taiwan University, Taiwan
- Chih-Kai Yang：Graduate Institute of Communication Engineering, National Taiwan University, Taiwan
- Yi-Cheng Lin：Graduate Institute of Communication Engineering, National Taiwan University, Taiwan
- Hao Tang：Centre for Speech Technology Research, University of Edinburgh, United Kingdom
- Hung-yi Lee：Graduate Institute of Communication Engineering, National Taiwan University, Taiwan；NTU Artificial Intelligence Center of Research Excellence (NTU AI-CoRE), Taiwan

## 📌 核心摘要

读者需要理解的对象是大音频语言模型如何把声音表征接入文字预训练主干，困难在于整体向量相似度会被对所有输入都高的维度主导，无法说明标签本身是否共享。研究输入有两路，一路是属性音频加选择题，例如一段愤怒语音加“说话人情绪是什么”，另一路是描述该标签的文字，例如 `The speaker feels angry`，输出是选择题答案或标签相关激活。方法是把前馈网络第一层输出先在音频段或文字描述段内平均，再在同标签样本间平均得到标签表征，减去同任务其他标签均值得到区别度，排序后取前 \(k\) 个神经元，音频和文字的交集称为跨模态概念神经元。随后用只从文字算出的目标减载体方向推动该交集的激活，观察音频识别是否转向目标，用置零该交集观察目标任务是否先于控制任务下降。与只看整体余弦相似度的做法不同，本文只比较标签特定的少数维度，并把重叠从相关观察推进到双向干预。在 Qwen2.5-Omni 等 3 个模型和动物声、情绪、性别、语言 4 项任务上，神经元重叠的匹配标签方差份额在 9% 到 92% 之间，高于余弦相似度的 0% 到 9.69%，转向在 42 个模型标签组合上高于随机神经元，失活在 10 个模型任务组合上先损伤目标任务。结论适用于所测的语音和非语音属性识别，不适用于证明所有层或所有模型都同等依赖该对齐，DeSTA2.5-Audio 的动物和语言任务即未出现选择性损伤。原文未披露训练、推理或部署成本。

## 🔗 开源与复现资源

本次未形成可展示的已核验资源记录，开放状态尚未核实。

可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 模型要从音频回答什么，文本主干为何让人意外

这篇论文研究的大音频语言模型接受一段音频并配一个文字问题，然后用文字回答音频的属性。4 个任务分别是情绪、动物声音、说话人性别和所说语言，每个任务都是单跳选择题，例如听到一段生气的语音要选出情绪标签。输入必须保留的信息是属性本身，输出是选项字母，评价看答对比例。

让人意外的地方在于，这类模型的主干语言模型最初只在文本上预训练，却在接入音频编码器后能在相当程度上识别声音属性。问题于是变成音频表示是否真正融入了文本表示，还是两套表示各自独立只在最后拼出答案。论文假设存在一个共享子空间，音频和文本在那里对齐，识别声音属性就是利用了这种对齐。

对刚入门的读者，关键是区分两种比较思路。一种是拿整段隐藏向量直接算相似，另一种是只看与标签最相关的少数维度是否重合。前者容易被与标签无关的高激活维度主导，后者更可能暴露标签本身是否共享。论文的全部设计都围绕这个区分展开。

### 已有路线比较了什么，本文补上哪一块

与音频语言模型相关的可解释性工作此前走过几条路线。有工作跟踪属性信息如何随层变化，有工作定位控制模型关注音频程度的注意力头，也有工作找负责情绪等属性的单个神经元。另一条路线证明语音的语言内容会被映射到与文本嵌入对齐的表示，但那是说什么内容，而不是副语言或说话人属性。

与本文最接近的是语义枢纽假设，它认为多模态模型把包括动物叫声在内的异质输入送入以文本为锚的共享语义空间。但其证据只用一个模型和非语音声音，且依赖整向量在完整空间的余弦相似度。论文指出这种比较会把标签无关维度的贡献也算进来，相似高不代表标签共享，相似低也不能排除共享。

本文补上的一块是同时满足 3 个条件：覆盖语音和非语音的多类属性，在单个前馈神经元粒度上找音频与文本共用的单元，并用转向和关闭两种因果操作分别检验可操纵性和必要性。视觉语言模型中也有多模态神经元和关闭实验，但不涉及音频，也不用基于文本方向的激活干预来改写对音频的识别。

### 论文要回答的具体问题和判断标准

论文把大问题拆成 3 个可检验的小问题。第一，整向量相似是否能看见对齐，如果看不见，神经元级别的重合是否能看见。第二，如果重合只是相关，能否只用文本算出的方向去改写模型对音频的判断。第三，如果去掉这些神经元，识别是否会先在对应任务上受损，而在无关任务上暂时保持。

判断标准事先讲清楚。存在性要求同一标签的音频前列集合与文本前列集合的重合大于随机两个等大集合的重合。特异性要求匹配标签对的重合大于不匹配标签对的重合。转向要求目标答案比例在跨模态神经元上高于同样大小的随机神经元集合。关闭要求目标任务的下降起点早于对照任务的下降起点。

这些标准都依赖对照。随机集合控制神经元数量的影响，音频对照控制只对音频敏感也可能造成损伤的解释，其他任务控制全局破坏的解释。缺少这些对照，任何上升或下降都难以归因到跨模态对齐本身。

### 两次独立前向如何产生可比较的音频与文本表示

整体流程是对同一标签做两次独立前向。一次是音频片段加上问题，例如一段生气语音加你觉得说话人情绪如何，取音频词符位置的激活。另一次是只有文本描述，例如说话人感到生气，取文本描述词符位置的激活。两次前向都经过同一个大音频语言模型，得到的是同一套前馈神经元上的两组激活。

这样做的好处是比较对象明确。音频侧包含声音证据加问题，文本侧只包含答案含义的文字表达。如果两者在某些神经元上都表现出对同一标签的特异反应，就有理由说该标签在两种模态下共享了方向。文本侧为避免只记住一种说法，每个标签写了 5 个改写句，测试时不依赖单一表面形式。

下图把为什么不直接比整向量讲得很直观，读图时先看输入与输出的对应，再看两种比较方式的结论差异。

> **看图路径：** 1. 先看上方两次独立前向：音频加问题与纯文本描述分别进入同一模型；2. 再看中间整向量余弦匹配与不匹配都给出 0.70 的示意；3. 最后看下方只保留标签特异维度后匹配 3 个共享、不匹配 1 个共享的对比

[![原论文 Figure 1：Why we compare neurons rather than entire vectors in the ambient space (schematic).](https://arxiv.org/html/2610.28189v1/method_fig_v10_identification.png)](https://arxiv.org/html/2610.28189v1/method_fig_v10_identification.png)

*论文图 1。原论文 Figure 1:：“Why we compare neurons rather than entire vectors in the ambient space (schematic).”。*

从像素可见，上方第一路是波形进入模型得到一组前馈激活，第二路是引号中的英文情绪句进入同一模型得到另一组激活。中部用红色叉号标出整向量余弦比较，示意中匹配与不匹配都得到 0.70，箭头指向与标签无关的维度。下部用绿色对号标出只看重要维度的做法，匹配共享 3 个蓝色框，不匹配只共享 1 个橙色框，下方注明对每个标签都高的维度不被选中。这张图帮助理解后文为何先减基线再取前列，蓝色框就是后文要找的跨模态概念神经元的示意。

### 从词符激活到标签代表向量：池化与差异度在算什么

模型的前馈层按键值记忆理解。第一矩阵的每一行是一个键，词符的残差表示与它比较，经过非线性得到神经元激活强度。第二矩阵是对应的值，激活越强，写回残差流的值向量越多。因此单个维度是否活跃，可以看作是否检测到某个固定方向。

一个输入跨越多个词符，论文先在实例内对音频段或文本段的位置求平均，再在同一标签的多个实例间求平均，得到该标签该模态的代表向量。这一步把一次处理从可变长度变成固定维度的标签表示，交给下一步比较。

直接按平均激活排序会选中对所有标签都很高的神经元，所以论文减去同任务其他标签的平均，得到差异度。差异度的每 1 维表示该神经元对当前标签超出其他标签的程度，排序后取前列才更像标签特异。

\[s^{m}(c)=\mu^{m}(c)-\frac{1}{|\mathcal{C}\setminus\{c\}|}\sum_{c^{\prime}\in\mathcal{C}\setminus\{c\}}\mu^{m}(c^{\prime}),\]

上式中上标区分音频与文本，集合是同任务的标签集，求和排除当前标签。它先形成代表向量，再用其他标签的均值作为基线扣除，结果用于后文的排序。原文还说明音频侧排除了转录文本词符，性别等任务的细节见原文附录。

**前馈神经元 × 键值记忆：** 前馈神经元指第一层前馈输出向量的单个维度，它的激活强度表示当前词符与某一固定方向的匹配程度；键值记忆把第一矩阵看作一组键、第二矩阵看作对应值来解释这种匹配与写回。两者搭配后，神经元成为可以跨音频和文本比较是否共享同一方向的细粒度单位，组合起来才有条件做标签级别的取交集和后续干预。

### 如何从排序结果取出跨模态概念神经元并做因果试验

有了差异度，论文在所有层的所有前馈维度上一起排序，音频侧取前 k 个，文本侧取前 k 个，交集就是该标签的跨模态概念神经元集合。k 在不同实验中按验证集选择，存在性与特异性部分在 12 个模型任务组合上选出的 k 是 100 或 200。只比较前列集合可以避免整向量中标签无关维度的淹没，也把后续干预锁定到具体维度。

\[\mathcal{S}(c)=\text{TopK}_{k}^{\text{audio}}(c)\cap\text{TopK}_{k}^{\text{text}}(c)\]

上式就是取交集的定义，左右分别是音频与文本的前 k 集合。交集非空只是起点，后文还要检验它是否大于随机、是否区分匹配与不匹配、能否被文本方向推动、是否对识别必要。

因果试验的总体思路如下图左侧先算方向再推动，右侧先关闭再看哪个任务先掉，读图时注意干预位置与对照的含义。

> **看图路径：** 1. 左侧先看纯文本两次前向如何相减得到方向，再看该方向被加到听音频时的目标神经元上；2. 右侧比较情绪任务关闭后答错而性别任务关闭同样神经元仍答对的示意；3. 注意两侧下方都配有同等大小随机神经元对照的文字说明

[![原论文 Figure 2：Overview of the causal tests (schematic; activation values are illustrative).](https://arxiv.org/html/2610.28189v1/method_fig_v10_causal_tests.svg)](https://arxiv.org/html/2610.28189v1/method_fig_v10_causal_tests.svg)

*论文图 2。原论文 Figure 2:：“Overview of the causal tests (schematic; activation values are illustrative).”。*

从像素可见，左侧转向分两步，第一步两次纯文本前向分别得到生气与难过的激活，相减得到方向，蓝色框标出跨模态神经元。第二步在模型听到难过音频时沿该方向推动这些神经元，输出变为生气，下方注明同样大小的随机集合很少做到。右侧关闭分三行，生气音频完整时答对生气，置零情绪任务的跨模态神经元后答错为难过，而把同样神经元置零后性别任务仍答对女性，下方注明随机关闭损伤小得多。这张图把后文两个公式的操作对象讲清：转向只动目标标签的集合，关闭动整个任务各标签集合的并集。

**池化表示 × 差异度：** 池化表示指把音频段或文本描述段内多个词符位置的激活先平均，再按同一标签的多个样本平均，得到该标签的代表向量；差异度指该代表向量减去同任务其他标签代表向量的平均，用于去掉对所有标签都高的基线。两者分工是先得到稳定代表再突出标签特异，组合后选出的前列维度才更可能携带属性本身而非通用激活。

### 本研究没有训练新模型，实际执行的是什么计算

需要先说明，论文没有训练新的音频或语言模型，也没有微调权重。3 个人工制品都是已有公开模型：Qwen2.5-Omni-7B 和 Audio Flamingo 3 更新了基于 Qwen2.5-7B 的主干，DeSTA2.5-Audio 冻结 Llama-3.1-8B 主干并训练适配器，且在检测到语音时会额外输入语音转写文本。论文的计算全部是推理时提取激活或干预激活。

实际执行的计算包括 4 类。第一类是两次前向得到池化与差异度并排序取交集。第二类是拼接各层代表向量算音频标签矩阵与文本标签矩阵的余弦相似。第三类是转向时在前向钩子处给指定神经元加文本方向乘以系数。第 4 类是关闭时把指定神经元激活置零并在选择题上测准确率。

原文没有报告梯度更新路径、优化器或新参数，因为不存在训练过程。解码采用贪心无采样，同样的输入与干预会得到确定输出。随机性只来自随机神经元对照的抽样、蒙特卡洛基线估计和自助重采样，论文对这些部分说明了试验次数与种子规则。

**跨模态概念神经元 × Jaccard 重合：** 跨模态概念神经元指同一标签下音频侧前列神经元集合与文本侧前列神经元集合的交集；Jaccard 重合指交集大小除以并集大小，用来度量两个集合的重叠程度。两者搭配的意义是把共享子空间的假设变成可计数的集合重叠，组合后既能检验是否大于随机，又能比较匹配与不匹配标签对的差异。

### 模型、任务、划分与文本描述如何保证条件可比

模型侧用 3 个大音频语言模型，任务侧用 SAKURA 基准的 4 个属性识别任务。情绪有 5 个标签，动物声音有 9 个标签，性别有 2 个标签，语言有 8 个标签，每个任务用 500 段音频的选择题。每个标签配 5 个改写后的文本描述，模板在任务内共享，只替换标签词，动物任务还替换对应的叫声动词。

划分采用分层抽样的验证与测试 split，比例为 20% 与 80%，随机种子固定。神经元集合的选择用验证集，报告的重合与干预结果用测试集。转向用的载体包括同任务其他标签的音频，以及静音与噪声两种合成非语音载体，避免单一载体驱动结论。

回答解析规则是让模型输出单个选项字母，取去空格小写后的首字符，也接受括号形式。无有效字母计为解析失败，按答错或未判为目标处理。原文报告解析失败很少，基线时 3 个模型都没有，关闭到目标下降起点时除个别情况外也不改变结论，转向在大系数下解析失败更多，但失败只会压低目标比例，对跨模态集合不利而非有利。

### 整向量余弦为何看不清，神经元重合看见了什么

要回答对齐是否可见，论文对每个模型任务组合构造标签矩阵。行是音频标签，列是文本标签，格子是相似或重合。对角线是匹配对，非对角线是不匹配对。再用双向方差分解的思路，把矩阵变化分成行列偏移、匹配对角附加项和噪声，匹配方差占比就是对角附加项解释的比例。

下表比较的是同一模型同一任务下两种矩阵的匹配方差占比，指标方向是越大越说明匹配与不匹配分得开。在相同标签集与相同池化来源下，它对比整向量余弦与神经元重合哪一个更能暴露标签本身的对齐。

| Model | Task | Cosine | Neuron |
| --- | --- | --- | --- |
| Qwen2.5-Omni | animal | 8.74% | 70.08% |
|  | emotion | 0.88% | 25.04% |
|  | gender | 0.16% | 76.04% |
|  | language | 0.23% | 55.08% |
| DeSTA2.5-Audio | animal | 0.07% | 9.22% |
|  | emotion | 1.58% | 52.03% |
|  | gender | 1.85% | 91.69% |
|  | language | 0.06% | 9.73% |
| Audio Flamingo 3 | animal | 9.69% | 67.05% |
|  | emotion | 1.05% | 45.46% |
|  | gender | <<0.01% | 68.57% |
|  | language | 0.38% | 59.30% |

上表显示余弦的匹配占比在情绪、性别和语言上都小于 2%，动物上最高也只有 9.69%，而标签无关的行列偏移占 88% 到 100%。同一格的神经元重合占比是 9% 到 92%，在每个组合上都高于余弦。这支持论文的判断：对齐存在但藏在少数维度里，整向量比较基本分不清匹配与不匹配。

神经元层面的重合本身是否大于随机，还需看下表的平均 Jaccard 重合与检验。该表比较同一标签的音频前列与文本前列是否比随机相遇更重合，以及匹配对是否比特定不匹配对更重合。

| Model | Anim. | Emo. | Gen. | Lang. |
| --- | --- | --- | --- | --- |
| Qwen2.5-Omni | 0.245∗∗ | 0.174∗ | 0.144† | 0.177∗∗ |
| DeSTA2.5-Audio | 0.094∗∗ | 0.121∗∗ | 0.127† | 0.125∗∗ |
| Audio Flamingo 3 | 0.264∗∗ | 0.202∗∗ | 0.098† | 0.216∗∗ |

上表每个格是该任务各标签匹配对 Jaccard 的均值，星号是标签置换检验的结果。9 个可检验的组合全部在 0.05 水平下显著，性别因只有两个标签，最小可达到的置换 p 值就是 0.5，所以只能描述性报告匹配均值高于不匹配均值。附录还给出超几何存在性检验的最大 p 值低于 10 的负 29 次方量级，随机基线只有万分之一左右，说明重合远非偶然。限制是 k 在验证集上按 Jaccard 最大选择，测试集上重选集合报告，存在选择与评估的对应关系，复现时应保留同一流程。

**余弦相似度 × 标签匹配方差占比：** 余弦相似度指整段拼接向量之间夹角的相似程度，包含所有维度；标签匹配方差占比指标签矩阵的总变化中有多少来自对角线是否匹配，而不是来自某些标签对所有标签都相似的行列偏移。两者搭配才能说明整向量比较为何被标签无关结构淹没，组合后也让神经元重叠矩阵可以用同一比例尺与之对比。

### 只用文本算出的方向能否改写模型对音频的判断

转向检验的是跨模态性。方向完全来自纯文本前向的目标减载体差向量，干预时模型正在处理载体音频。操作是在目标标签的跨模态神经元上加上系数乘以该方向，系数取 0.5 到 5 之间多个值。度量是目标比例，即多少样本的答案变成目标标签。对每个标签汇总载体与系数的平均，再与 5 个同样大小的随机神经元集合比较。

\[\tilde{h}_{\ell}[i]=h_{\ell}[i]+\lambda\cdot\Delta_{\ell}^{\text{text}}[i](c_{t},c_{r}),\quad(\ell,i)\in\mathcal{S}(c_{t})\]

上式中波浪线是干预后的激活，lambda 是转向系数，下标表示层与神经元编号，集合限定只动目标标签的跨模态神经元。方向来自文本均值之差，干预加在处理载体音频的每一步，原文还验证过只加在音频词符位置时结论不变。

下图是 Qwen2.5-Omni 上 happy 目标的一个强例子，读图前先明确任务：看蓝色是否系统性高于灰色，尤其在无证据载体上是否也能拉起。

> **看图路径：** 1. 横轴是转向系数，纵轴是判为 happy 的样本比例，蓝色高于灰色才算有效；2. 比较四个真实载体面板与静音和噪声两个无证据载体面板的蓝色上升幅度；3. 注意灰色中线是五个随机集合的中位数，阴影是最小到最大范围

[![原论文 Figure 3：Contrastive neuron steering toward the emotion label “happy” in Qwen2.5-Omni, one panel per…](https://arxiv.org/html/2610.28189v1/figures/exp4_qwen_emotion_happy.png)](https://arxiv.org/html/2610.28189v1/figures/exp4_qwen_emotion_happy.png)

*论文图 3。原论文 Figure 3:：“Contrastive neuron steering toward the emotion label “happy” in Qwen2.5-Omni, one panel per carrier label.”。*

从像素可见，6 个面板分别是载体为恐惧、厌恶、难过、生气、静音和噪声，横轴是转向系数，纵轴是判为 happy 的比例。蓝色跨模态曲线随系数上升，在多数面板接近 1.0，静音面板从约 0.2 的基线拉到 1.0，噪声面板类似。灰色随机中线与阴影带明显更低，静音与噪声下面板中灰色甚至停留在 0.1 到 0.3 附近。这说明文本方向通过这些神经元改变了对音频的识别，而不是随机扰动的效果。

下表汇总全部 72 个标签的显著性，指标方向是显著标签数越多越说明可操纵。表前比较问题是跨模态集合的目标比例是否高于 5 个随机集合，条件是同载体、同样本、同系数，统计用预测区间 t 检验并做多重校正。

| Model | Anim. | Emo. | Gen. | Lang. | Total |
| --- | --- | --- | --- | --- | --- |
| Qwen2.5-Omni | 4/9 | 5/5 | 2/2 | 7/8 | 18/24 |
| DeSTA2.5-Audio | 2/9 | 4/5 | 0/2 | 1/8 | 7/24 |
| Audio Flamingo 3 | 6/9 | 4/5 | 1/2 | 6/8 | 17/24 |
| Total | 12/27 | 13/15 | 3/6 | 14/24 | 42/72 |

上表显示 72 个标签中有 42 个显著，模型差异明显。Qwen2.5-Omni 显著 18 个，Audio Flamingo 3 显著 17 个，DeSTA2.5-Audio 只显著 7 个，语言任务在该模型上仅 1 个显著。排序检验也一致，前 2 个模型的平均名次接近 1.2，远好于随机的 3.5，DeSTA2.5-Audio 平均 2.5 虽好于随机但弱得多。论文讨论转录输入可能是原因之一，因为语言答案可从转录文字直接读出，转向音频神经元难以覆盖。未显著的标签与较弱的模型就是本节的反例，说明操纵性不是在所有条件下都一样强。

### 关掉这些神经元后哪个任务先受损

关闭检验的是必要性。做法是把某任务各标签跨模态集合取并集后置零，在该任务与另外 3 个任务上分别测准确率。总结曲线的规则是下降起点，即准确率相对基线下降超过 10% 且之后不再恢复的最小关闭数 N。目标起点早于对照起点才算有选择性必要窗口。对照包括同样大小的随机关闭和只对音频敏感的音频对照。

\[\tilde{h}_{\ell}[i]=\begin{cases}0&(\ell,i)\in\mathcal{S}\\ h_{\ell}[i]&\text{otherwise}\end{cases}\]

上式表示属于关闭集合的神经元激活置零，否则保持原值，作用在每次前向的指定输入位置。关闭数 N 随每标签阈值 k 增大而严格增大，所以用 N 或 k 报告起点不改变是否先后的判断。Qwen2.5-Omni 目标起点对应其全部前馈神经元的 0.2% 到 0.7% 左右，说明损伤发生在很小的比例上。

下图是情绪任务的 3 模型曲线，读图前先明确比较：蓝色目标是否先于橙色对照下降，随机虚线是否要大得多才下降。

> **看图路径：** 1. 横轴是关闭神经元数 N 的对数轴，纵轴是选择题准确率；2. 比较蓝色目标任务曲线与橙色其他任务均值曲线的下降先后；3. 注意紫色星形音频对照与浅蓝灰色随机对照的位置关系

[![原论文 Figure 4：Task-level deactivation on the emotion task.](https://arxiv.org/html/2610.28189v1/figures/exp3_emotion_task_comparison.png)](https://arxiv.org/html/2610.28189v1/figures/exp3_emotion_task_comparison.png)

*论文图 4。原论文 Figure 4:：“Task-level deactivation on the emotion task.”。*

从像素可见，3 个面板横轴都是关闭数 N 的对数轴，纵轴是准确率。Qwen2.5-Omni 面板蓝色情绪曲线在约 10 的 3 次方附近先掉，橙色对照到约 7 万才掉。DeSTA2.5-Audio 与 Audio Flamingo 3 面板也呈现蓝色先掉、橙色后掉，紫色星形音频对照与蓝色接近，浅蓝随机带要到更大 N 才明显下降。这支持识别依赖携带对齐的神经元，而不只是最对音频敏感的神经元。

下表给出 12 个组合的双起点与是否选择性，表前比较问题是同等关闭规模下目标任务是否先于对照任务下降。

| Task | Model | Target NN | Control NN | Sel. |
| --- | --- | --- | --- | --- |
| animal | Qwen2.5-Omni | 1,745 | 36,014 | yes |
| animal | DeSTA2.5-Audio | 5,973 | 5,973 | no |
| animal | Audio Flamingo 3 | 984 | 123,275 | yes |
| emotion | Qwen2.5-Omni | 1,618 | 71,812 | yes |
| emotion | DeSTA2.5-Audio | 10,336 | 26,763 | yes |
| emotion | Audio Flamingo 3 | 5,862 | 180,203 | yes |
| gender | Qwen2.5-Omni | 1,255 | 264,115 | yes |
| gender | DeSTA2.5-Audio | 317 | 93,948 | yes |
| gender | Audio Flamingo 3 | 74,073 | 251,664 | yes |
| language | Qwen2.5-Omni | 3,817 | 107,461 | yes |
| language | DeSTA2.5-Audio | 5,430 | 5,430 | no |
| language | Audio Flamingo 3 | 19,538 | 102,782 | yes |

上表 10 个组合显示目标先于对照，两个非选择性组合都是 DeSTA2.5-Audio，分别在动物与语言任务上目标与对照同时下降。自助重采样显示 10 个选择性窗口中有 9 个在 90% 以上重采样中保持，Audio Flamingo 3 性别窗口只有 39%，稳定性较弱。论文还报告这些神经元在音频特异排序中远不如音频对照靠前，中位名次是 1.5 到 5 倍，37% 到 74% 排在所有音频神经元之后，说明损伤不是因为关掉了最懂音频的单元。限制是 DeSTA2.5-Audio 同时存在冻结主干、不同主干家族和转录输入 3 个差异，3 模型无法分离哪个导致更弱，转录只能解释语言任务，不能解释动物任务。

**转向 × 关闭：** 转向指沿纯文本算出的目标减载体方向，给目标标签的跨模态神经元加上一定系数的偏移，观察音频识别是否倒向目标答案；关闭指把某任务的跨模态神经元激活置零，观察该任务先掉还是其他任务先掉。两者分工是分别检验充分方向的可操纵性和必要性，组合后才能同时回答这些神经元能否改写识别以及识别是否依赖它们。

### 结论在什么条件下才成立，还有哪些缺口

结论成立的条件需要逐条记住。材料全部来自 SAKURA 的 4 个固定任务与作者自写的 5 个模板改写句，文本侧不是大规模自然语料。划分固定，神经元选择与评估分开，但在转向的集合大小选择上用了测试集上的必要窗口，论文已在局限中说明该选择用的是关闭任务准确率而非转向目标比例，且随机对照匹配了同样大小。

性别任务只有两个标签，置换检验无法检验特异性，只能描述匹配均值高于不匹配均值。动物任务在 DeSTA2.5-Audio 上无选择性窗口，语言任务在该模型上转向与关闭都弱，转录输入只能部分解释语言，不能解释动物。3 个模型不足以分离冻结主干、主干家族与转录输入的影响。

同义词对照只在 Qwen2.5-Omni 情绪任务上做过，用无共享词符的同义词替换标签词后集合仍高度重合，关闭效果接近，说明至少在该条件下跟踪的是属性而非字面词。但这不能推广到所有模型与任务。层分布对照也在同一条件下做过，匹配每层数量的随机集合仍弱于跨模态集合，说明优势不只是层位置。

### 要复现第一步做什么，需要哪些信息与成本

复现第一步是按原文固定划分与模板重建代表向量。取每个任务 500 段音频的 20% 验证与 80% 测试分层划分，种子为 0。对每个标签收集音频加问题的音频段激活与 5 个改写句的文本段激活，实例内平均再标签内平均，减去其他标签均值得到差异度，全层排序取前 k。k 在验证集上按平均 Jaccard 最大从 25 到 4000 的网格选择，报告时在测试集上重选。

第二步是构造标签矩阵并做方差分解与置换检验，第三步是按附录规则定转向集合大小并在多载体多系数上与 5 个随机集合比较，第四步是做任务级关闭扫描并找下降起点。解析、随机种子、转录流水线与软件环境都要按附录还原，3 个模型分属不同依赖环境。

成本方面，论文报告单卡复现约 800 GPU 小时，多数花在关闭扫描上。模型大小是 7,000,000,000 到 8,000,000,000 参数量级，Qwen2.5-Omni 与 DeSTA2.5-Audio 用 24 GB 卡，Audio Flamingo 3 用 48 GB 卡。关于来源需要分开说：论文未提供可验证的代码与数据链接，本次也未发现完成 HTTPS 校验的作者资源，因此不能写作者资源可用，只能按论文文字与附录复现。

### 什么时候值得尝试这个思路，还需补哪项验证

当研究问题是文本主干如何利用音频，且怀疑整向量相似被通用维度淹没时，值得尝试先减基线再取前列交集的做法。它把对齐定位到具体神经元，也为转向与关闭提供操作目标。反之，如果任务答案可以直接从转录文字读出，或标签集很小导致置换检验不可行，就要预期效应变弱或只能描述性报告。

还需要补的验证包括更多模型以分离冻结、家族与转录的影响，更自然的文本描述以排除模板效应，以及除准确率外的误判模式与延迟成本测量。论文没有测量这些，不能承诺改善识别率或降低开销。

总体判断是，跨模态概念神经元在 3 个模型与 4 类属性上都表现出标签特异的重合，在 2 个模型上表现出较强的可操纵性与必要性，在第 3 个模型上明显更弱。这种不均匀本身就是结论的一部分，说明对齐的存在与依赖程度都因模型与条件而异。

<details>
<summary>📎 论文与评分元数据</summary>

排名：前50% | 文档类型：方法研究 | [arXiv 原文](https://arxiv.org/abs/2610.28189v1)

</details>

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。

- 评分规则：type-aware-v1

- 评分模型：muse-spark-1.3-contributor

- 评分请求协议：openai_responses

---

[← 返回 2026-10-21 语音/音乐/音频论文速递](/audio-paper-digest-blog/posts/2026-10-21/)
