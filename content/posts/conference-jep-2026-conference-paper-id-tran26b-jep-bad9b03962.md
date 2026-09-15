---
title: "Simplifier la détection des deepfakes audio avec les réseaux de Kolmogorov-Arnold"
date: 2026-09-14
draft: false
description: "该工作以 XLS-R 高维表示为输入，对比单层全连接与单层 KAN 后端，在 21LA 上把聚合 EER 从 2.38% 降到 1.07%，代价是后端参数从 2.05k 增至 22.54k 但仍远小于主流系统，且在 FoR 等个别集上 KAN 并未取胜。"
tags: ["迁移学习", "模型比较", "多语言", "语音", "语音伪造检测"]
categories: ["jep-2026 论文"]
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_paper_id: "conference:jep:2026:conference-paper-id:tran26b_jep"
paper_digest_source_kind: conference
paper_digest_conference_id: "jep-2026"
paper_digest_conference_record_url: "https://www.isca-archive.org/jep_2026/tran26b_jep.html"
paper_digest_conference_pdf_url: "https://www.isca-archive.org/jep_2026/tran26b_jep.pdf"
paper_digest_api_reader_contract: "beginner-researcher-v3"
paper_digest_api_reader_article_sha256: "87b17f930140d278858636eb762465224ed5e59ac4b75797f521285e2aee5922"
paper_digest_api_reader_plan_sha256: "c8f155dccaec1585d4408f74d92a95fc34b3c8c999212de71133550028f911a5"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings-v4"
paper_digest_api_reader_source_bindings_sha256: "3f87e8e5b507c25e7ceda3708152ac30a23bdc2fe35fedc761d92ead29b06798"
paper_digest_api_reader_source_table_count: 4
paper_digest_api_reader_source_formula_count: 0
paper_digest_api_reader_structured_artifacts_sha256: "72820bd992f4203442ba0c450a985c76659b6209f94a163ba76042128eb977de"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity-v1"
paper_digest_api_reader_author_identity_sha256: "30c0d37d71c5e4d5268385674018e7b79e1324b58ba93b8f95cf1492d5051695"
paper_digest_api_reader_author_count: 6
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity-v1"
paper_digest_api_reader_resource_identity_sha256: "c93791e703cd36760079bcb4cea118745049b131946f53b297abda1f56d8f597"
paper_digest_api_reader_resource_count: 1
paper_digest_api_reader_decision_projection: "api-reader-decision-projection-v2"
paper_digest_scoring_contract: "api-scoring-audit-v2"
paper_digest_taxonomy_contract: "paper-taxonomy-flat-tags-compat-v1"
paper_digest_taxonomy_selection_contract: "paper-taxonomy-selection-v1"
paper_digest_taxonomy_registry_version: "paper-taxonomy-v1"
paper_digest_taxonomy_registry_sha256: "15c82a567ce5a55dc1175684ed08b64c158558639d9c8fb822c9587ec32a8778"
paper_digest_taxonomy_concepts: [{"facet":"method","id":"method.transfer","label":"迁移学习"},{"facet":"research_focus","id":"research_focus.comparison","label":"模型比较"},{"facet":"setting","id":"setting.multilingual","label":"多语言"},{"facet":"signal","id":"signal.speech","label":"语音"},{"facet":"task","id":"task.speech-spoofing","label":"语音伪造检测"}]
paper_digest_primary_task: "语音伪造检测"
paper_digest_primary_method: "迁移学习"
paper_digest_score: 5.7
paper_digest_rank_bucket: "前50%"
paper_digest_document_type: "方法研究"
paper_digest_conference_structure: replayable-pdf-layout-v1
---

# 📄 保留高维语音表示，只用一层分类器：KAN 为何比全连接更省且更稳

> 英文题目：*Simplifier la détection des deepfakes audio avec les réseaux de Kolmogorov-Arnold*

> 会议身份：`conference:jep:2026:conference-paper-id:tran26b_jep`



> ✅ 来源为官方会议 PDF；表格与 Figure 按原文证据绑定。PDF 公式以原页区域图片展示，未冒称作者原始 TeX。

> 会议来源：[官方记录](https://www.isca-archive.org/jep_2026/tran26b_jep.html) · [官方 PDF](https://www.isca-archive.org/jep_2026/tran26b_jep.pdf)

标签：#迁移学习 #模型比较 #多语言 #语音 #语音伪造检测

评分：**5.7/10** | 创新 1.0/2 | 技术严谨 1.0/1.5 | 实验充分 1.0/1.5 | 清晰度 0.7/1 | 影响力 0.9/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 0.8/1.5

排名：前50% | 文档类型：方法研究

## 👥 作者与机构

- Hoan My Tran：机构信息未能从会议 PDF 纯文本可靠映射
- Aghilas Sini：机构信息未能从会议 PDF 纯文本可靠映射
- David Guennec：机构信息未能从会议 PDF 纯文本可靠映射
- Arnaud Delhay：机构信息未能从会议 PDF 纯文本可靠映射
- Damien Lolive：机构信息未能从会议 PDF 纯文本可靠映射
- Pierre-François Marteau：机构信息未能从会议 PDF 纯文本可靠映射

## 📌 核心摘要

输入为原始语音波形，输出为真实与伪造的二分类判决，难点在于未知合成算法、编解码压缩与跨语言条件下的泛化。首先冻结跨语言自监督模型抽取 utterance 级表征并做时间平均，得到高维向量。其次将该向量直接送入单层全连接或单层快速 KAN 分类器完成判决，避免降维投影造成信息损失。最后在域内与多域外语料上统一评测泛化能力。与传统重型后端相比，关键机制差异是用可学习单变量样条或径向基函数替代固定线性加非线性，从而增强高维表示的非线性拟合。在 21LA 聚合条件下 KAN 将平均等错误率降至 1.07%，明显优于全连接的 2.38%，并在 21DF、ITW、DFADD 上保持小幅优势。该结论仅适用于冻结 XLS-R 300M 表示与 19LA 训练条件，在 FoR 上 KAN 大幅退化，在 25DF、德语、法语、D-EN 上亦不如全连接，且未验证持续学习与校准能力。原文未披露训练时长与推理时延等完整成本，部署代价仅能从极简后端结构间接推断。

## 🔗 开源与复现资源

- 模型相关资源：<https://huggingface.co/facebook/wav2vec2-xls-r-300m> — 暂时无法访问
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 要解决的威胁是什么，为什么需要单独的反制模块？

输入是这篇法语论文的全文证据，目标是让语音初学者能复述其方法与实验条件，输出是 1 篇可核对的技术解读，必须保留的内容包括前后端划分、是否降维、训练集与评测集、评价指标方向和关键超参数。本文只研究音频深伪检测，也就是判断一段语音是真实录制还是合成转换生成，不研究语音识别内容或说话人身份本身。

用白话说，语音合成指把文字变成语音，英文叫文本转语音，缩写为 TTS；语音转换指把一个人的声音变成另一个人的音色，英文叫语音转换，缩写为 VC。两者都能生成高度逼真的假语音，会欺骗自动说话人验证系统，该系统英文为自动说话人验证，缩写为 ASV。反制模块的任务就是在验证之前先拦截假语音，英文叫反制措施，缩写为 CM。

**逻辑访问 × 深伪检测：** 逻辑访问分工是特指经由语音合成和语音转换生成的假语音攻击说话人验证系统，深伪检测分工是更广义的压缩、传输和开放场景假音频判定，搭配理由是前者提供可控的攻击类型划分，后者提供真实信道变化，组合意义是本文用 19LA 训练、用 21LA 和 21DF 及多语料检验从受控到开放的泛化。

论文把研究放在 ASVspoof 系列挑战的框架下，训练只用 2019 年逻辑访问集，测试则扩展到 2021 年逻辑访问、2021 年深伪以及多个开放语料。评价指标是等错误率，英文为等错误率，缩写为 EER，数值越低表示真假判决越可靠。这个指标是初学者首先要建立的方向感，后文所有比较都围绕它展开。

### 已有路线为什么越做越重，本文要反其道而行吗？

已有路线大致分为两类。第一类是端到端模型，直接从波形或频谱学到判决；第二类是前后端分离，前端负责提取特征，后端负责分类。前端过去常用手工设计的梅尔频率倒谱系数，英文为梅尔频率倒谱系数，缩写为 MFCC，后来被自监督语音表示取代。

论文回顾了 3 条加重后端的尝试。一是用变换器或一致性卷积增强模块建模时间通道关系，二是用状态空间模型 Mamba 及其双向变体处理长序列，三是把 KAN 与一致性卷积结合或用图方法避免降维。这些工作提高了精度，但后端参数量动辄数十万到数千万。另一条证据来自轻量嵌套结构，说明轻模型也可能接近最优水平。

本文的对照思路不是提出更复杂的后端，而是反问是否需要复杂后端。它借鉴了后训练深伪检测的整体流程，并借鉴了去掉说话人识别下游模型的研究策略，做法是保留高维自监督表示的原始维度，不做投影压缩，只比较一层全连接和一层 KAN。这种简化是否成立，需要在同前端、同训练、同指标下用数字回答，而不是用概念论证。

### 要比较的具体问题是什么，公平比较的条件有哪些？

具体问题可以表述为：当上游给出同一个高维向量时，一层传统全连接和一层 KAN 谁的检测误差更低，谁在未知攻击、压缩信道和跨语言条件下更稳，代价是多大的参数量。沿一个样本走一遍有助于理解。输入是一段待测波形，前端输出随时间变化的特征序列，时间平均把序列压成一个向量，分类器输出两个分数，分别对应真实和伪造，取高者为判决。

公平比较要求固定四件事。第一，前端相同，都是同一预训练模型；第二，训练数据相同，都只在 2019 年逻辑访问训练集上训练；第三，输入维度相同，都不做降维；第四，指标与聚合相同，都用等错误率报告。

论文还区分了域内和域外评测。域内指与训练分布接近的 2019 年评测，域外指编解码、压缩、 vocoder 类型、语言和采集渠道发生变化的集合。只有满足这些条件，单层差异才能归因于分类器本身。

### 整体流程如何从波形走到真假判决？

方法全景分为 3 步。第一步是特征提取，用多语言扩展模型 XLS-R 把原始音频变成上下文表示，该模型是 wav2vec 2.0 的多语言扩展，包含卷积编码器和多层变换器上下文网络。第二步是时间聚合，对时间维取平均得到固定维度向量。第 3 步是单层判决，把该向量送入全连接或 KAN，输出 2 维分数。

下面这张总体结构图值得先读，因为它把常见做法和本文做法并排放在一起，箭头方向就是数据流向，阅读时不要把它当成两个并联分支，而应看成左右两种方案的对照。

> **看图路径：** 1. 先从顶部箭头向下追踪左侧常见路径经过的三个方框；2. 对比右侧路径是否跳过了梯形降维模块；3. 确认两侧最下方都分叉为真和假两个输出分支；4. 记住右侧绿色框标注的是二选一的分类器而不是串联结构

[![原论文 Figure 1：Architecture générale du modèle proposé.](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/jep-2026/eeb47c07d596/figure-1.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/jep-2026/eeb47c07d596/figure-1.png)

*论文图 1。原论文 Figure 1：“Architecture générale du modèle proposé.”。*

从像素可见，左侧常见路径自上而下依次是语音基础模型方框、梯形降维模块、分类器方框，最后分叉为真实和伪造两个输出，下方标注为常见方法。右侧本文路径自上而下只有语音基础模型方框和标注为二选一的分类器方框，中间用一条长箭头直接连接，同样分叉为两个输出，下方标注为所提方法。关键差异是右侧没有梯形降维，标注的维度符号在两侧发生变化，左侧经过梯形后维度变小，右侧保持原始高维直接进入分类器。这个视觉对照就是全文方法主张的核心，初学者复述时应先画出这两条路径，再说训练与评测细节。

### 前端如何得到高维向量，时间平均做了什么？

前端采用 XLS-R 作为特征提取器。按论文描述，它包括一个由多层卷积构成的特征编码器，把原始波形映射为隐特征，再经过由多层变换器构成的上下文网络，输出随时间变化的上下文表示。论文使用的预训练检查点链接在本次核对中未能确认可达，因此复现时不能默认该链接当前可用，需要自行确认可下载的权重版本和维度是否一致。

**自监督学习 × 语音基础模型：** 自监督学习负责在没有逐帧真假标签的情况下从大量无标注语音中学习通用声学结构，语音基础模型是这种训练的产物和载体，本文用 XLS-R 把原始波形变成高维上下文表示，搭配理由是下游只需要一个极简分类器就能读出真假线索，组合意义在于把表征能力留在上游，把判决简化到下游。

时间平均的作用是处理变长问题。不同音频时长不同，变换器输出的时间步数也不同，直接分类无法对齐。论文对时间维求平均，把矩阵变成一个向量，公式含义是把所有时间帧相加再除以帧数。这个操作没有可学习参数，也不改变特征维度，只是把时间信息压平。教学上可以举一个例子帮助理解：例如一段 3 秒音频得到 300 帧表示，平均后变成一个向量。

另一段 5 秒音频得到 500 帧表示，平均后同样变成一个向量，二者才能送入同一分类器。这个例子只是说明变长到定长的机制，不代表论文的真实帧数。

**时间平均 × 降维投影：** 时间平均负责把变长序列压缩成固定维度向量，降维投影负责把高维特征压到低维再送分类器，本文保留前者而去掉后者，搭配理由是作者认为先降维可能丢掉判别信息，组合意义是只做时间维聚合、不做特征维压缩，让单层分类器直接面对完整维度。

需要强调的是，本文刻意不做特征维降维。常见系统会把维度从大写维度压到远小于它的小维度再分类，本文认为这一步可能丢失判别线索，因此直接保留原始维度。这个选择把压力全部交给单层分类器，也是后文参数对比的前提。

### 单层全连接与单层 KAN 各自如何计算？

后端二选一是本文唯一的模型变量。全连接层的白话解释是带权重的线性加权求和，每个输入维度都有独立权重，再加偏置得到输出。它的优点是参数少、优化稳定，缺点是表达能力受限于线性划分。KAN 层的白话解释是把复杂多元函数拆成多个一元函数的组合，每个一元函数自身可学习，再求和组合。论文回顾了其数学来源是柯尔莫哥洛夫表示定理，网络形式是多层函数复合，每层输出是前层各分量经一元函数变换后的求和。

**全连接层 × KAN 层：** 全连接层分工是用一个全局线性映射加偏置直接划分高维向量空间，KAN 层分工是把多元映射拆成多个可学习一元函数的求和组合，搭配理由是两者都只占一层、输入都是同一时间平均向量，可做公平对照，组合意义不是叠加使用，而是验证在不降维时非线性一元函数是否比线性划分更能保留细粒度伪造痕迹。

在实现层面，论文介绍每个激活函数由非线性基函数与样条函数加权组成，样条部分是多个基函数样条基的加权和。优化变体使用高斯核径向基函数代替 3 次样条以提高计算效率，径向基只与到中心的距离有关，高斯宽度控制每个中心的影响范围。初学者不必背诵定理形式，关键是记住分工差异：全连接把学习放在矩阵权重上，KAN 把学习放在一元函数的形状上。两者输入都是同一时间平均向量，输出都是 2 维真假分数，这种对齐使得后文误差差异可以直接对比。

论文未报告 KAN 的具体网格数、样条阶数、径向基中心数和宽度初始化等细节，也未说明前端 XLS-R 在训练中是冻结还是微调。从优化器和学习率的写法看，训练至少更新了下游参数，但梯度是否回传到上游、回传到哪一层，原文没有明确交代，复现时应把这项记为缺项，而不能从模型名称推定为全量微调或完全冻结。

### 训练时优化了什么，类别不平衡如何处理？

本节讲真实的训练计算过程，不是推理调用。训练集是 2019 年逻辑访问训练集，验证集是 2019 年逻辑访问开发集，测试阶段才使用其他集合。输入音频在每个批次内做动态填充，使其对齐到该批次最长音频的长度，评估时则用批次大小为 1 处理完整音频而不填充。所有实验在一块英伟达 A100 上进行，并使用原始波形增强方法引入卷积噪声、脉冲噪声和稳态噪声以提高鲁棒性。

优化器使用 Adam，学习率与权重衰减在原文中有明确数值，损失是加权交叉熵，对少数类真实语音给大权重，对多数类伪造语音给小权重，以缓解类别不平衡。早停策略是基于开发集最优点，最多等待 3 个周期。训练目标是最小化加权分类损失，监督来源是每段音频的真实或伪造标签，输出是 2 维分数。论文没有报告总训练轮数、批次大小、随机种子和多次运行的方差，只在文末对 KAN 做了 3 次重复，其他主表是否取单次最优需要谨慎看待。

复现时应先固定数据划分和填充逻辑，再固定损失权重和早停依据，最后才调学习率。不要把数据增强当成可选项，因为它直接影响对编解码和信道变化的鲁棒性结论。

### 评测集、攻击划分与指标如何组织？

实验按问题组织。第一个问题是域内与近域性能，第二个问题是压缩与未知声码器下的泛化，第 3 个问题是跨语料、跨语言和跨声码器的开放泛化，第四个问题是参数代价是否值得。指标统一为等错误率，越低越好。

数据方面，2019 年逻辑访问评测包含训练未见的多种攻击算法，2021 年逻辑访问引入编解码和传输效应，2021 年深伪进一步引入有损压缩和未见声码器。开放集合覆盖英语开放来源、社交网络真实采集、扩散与流匹配生成、声码器伪影、中英跨语言、多语言、中文、西班牙语、名人场景和 2025 年深伪等。论文对攻击的划分有明确说明，例如 2021 年逻辑访问中一部分攻击基于语音合成，另一部分基于语音转换；2021 年深伪按波形拼接、传统声码器、自回归神经模型和非自回归神经模型分组。

下面整理训练配置时，必须保留原文数值写法和权重含义，表格本身不引入新的超参数，阅读时把该表当作复现清单而不是结果表。

### 在 2021 逻辑访问上，KAN 相对全连接改进了多少？

要回答的核心比较问题是：在同一高维表示下，单层 KAN 是否比单层全连接更低误差，比较的公平条件是同前端、同训练集和同指标，指标方向是等错误率越低越好。表前需要明确这一点，否则直接看数字容易把不同攻击和不同信道混在一起。

| 评测条件 | 指标 | 全连接后端 | KAN 后端 | 参数量 |
| --- | --- | --- | --- | --- |
| 21LA 聚合 | EER | 2,38 % | 1,07 % | 2,05k 对应全连接，22,54k 对应 KAN |
| 21LA 合成攻击段 | EER | 高于 KAN 约 1 倍以上 | 明显更低 | 同上 |
| 21LA 转换攻击段 | EER | 与 KAN 接近 | 略优 | 同上 |
| 复杂度 | 后端参数 | 2,05k | 22,54k | 远小于数百万量级系统 |
| 结论方向 | 泛化 | 基线 | 更优 | 需结合域外表再判断 |

表后解释主要收益与代价。论文报告 KAN 把 21LA 聚合误差从 2.38% 降到 1.07%，改进在合成攻击段尤其明显，困难条件下误差下降幅度大；在转换攻击段两者接近，KAN 只有温和增益。这支持单层非线性在保留高维细节时更有效的判断，但代价是后端参数从 2.05k 增至 22.54k，约为 10 倍。不过与数百万参数的变换器或 Mamba 后端相比，两者都属于极简量级，因此论文所说的省参数是相对于主流复杂系统而言，而不是 KAN 比全连接更小。未胜出项也要保留：转换攻击并非全面碾压，说明 KAN 的优势与攻击类型有关，不能推广为所有伪造都必然更优。

### 多语言雷达图显示了哪些语言差异？

第二个结果问题是多语言泛化是否一致，比较对象仍是同一前端下的全连接与 KAN，指标仍是等错误率越低越好，条件是多语言深伪语料的不同语言子集。这个问题之所以重要，是因为语音的音素和韵律随语系变化，单层分类器的抽象能力可能并不均匀。

> **看图路径：** 1. 先确认雷达图每个轴对应一种语言而不是一种攻击；2. 比较两种颜色多边形在外圈和内圈的相对位置；3. 重点观察英语轴上内外两层面积差异最大的位置

[![原论文 Figure 2：Comparaison des performances (EER %) entre FC et KAN sur le jeu de données MLAAD.](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/jep-2026/eeb47c07d596/figure-2.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/jep-2026/eeb47c07d596/figure-2.png)

*论文图 2。原论文 Figure 2：“Comparaison des performances (EER %) entre FC et KAN sur le jeu de données MLAAD.”。*

从实际收到的雷达图像素看，画面是圆形多轴雷达图，轴标签可见英语、法语、意大利语、西班牙语、波兰语和乌克兰语等语言缩写，两种颜色填充的多边形分别代表两种后端，面积越靠内通常对应误差越低。由于本次收到的图像分辨率有限，不应硬读每个轴的具体数值，而应结合正文文字核对趋势。正文报告 KAN 在斯拉夫语组和英语上优势明显，在英语上把误差降至约一半；在罗曼语系内部存在分化，对意大利语和西班牙语占优但对法语不占优。

在日耳曼语系内部对英语占优但对德语明显回落。这种分化支持一个有限判断：KAN 整体上捕捉多语言伪造线索更有效，但其抽象能力随语音特性变化，总体趋势不等于每种语言都成立。复现多语言结论时，应按语言分别报告而不是只看平均值，否则会掩盖法语和德语上的反例。

### 压缩、声码器与开放语料能否证伪简化方案？

消融在这里不是去掉某一层，而是用更难的条件检验简化方案是否脆弱。第一个检验是 2021 年深伪的不同声码器与压缩条件，第二个检验是开放语料的不同采集与生成方式。只有同时看到胜出项和未胜出项，才能判断简化方案的边界。

| 评测条件 | 指标 | 全连接后端 | KAN 后端 | 对照含义 |
| --- | --- | --- | --- | --- |
| 21DF 聚合 | EER | 1,49 % | 1,35 % | KAN 整体更优 |
| 21DF 传统与自回归段 | EER | 较高 | 更低 | KAN 鲁棒性更好 |
| 21DF 波形拼接段 | EER | 更低 | 较高 | 全连接反超，需保留 |
| ITW 开放采集 | EER | 4,69 % | 3,89 % | KAN 改进 |
| FoR 开放来源 | EER | 0,93 % | 4,68 % | KAN 明显回落 |

表后需要解释反证。论文报告 KAN 在 21DF 聚合上为 1.35%，优于全连接的 1.49%，在传统声码器和自回归神经模型段更低，但在波形拼接段被全连接反超。这说明 KAN 对压缩和多数声码器更稳，但不是全条件占优。开放集上，社交网络采集的误差从 4.69% 降到 3.89%，扩散与流匹配集从 17.51% 大幅降到 7.41%，声码器中心集从 1.74% 降到 1.51%，这些支持泛化判断；但开放来源集上 KAN 为 4.68%，差于全连接的 0.93%，这是一个必须保留的负结果。它提醒读者，单层 KAN 并非在所有数据分布上都更好，复现时若只挑有利集合报告，会高估方法的稳定性。

| 开放条件 | 指标 | 全连接后端 | KAN 后端 | 语言含义 |
| --- | --- | --- | --- | --- |
| DFADD 扩散生成 | EER | 17,51 % | 7,41 % | KAN 大幅改进 |
| LSV 声码器伪影 | EER | 1,74 % | 1,51 % | KAN 小幅改进 |
| HABLA 西班牙语 | EER | 2,25 % | 4,46 % | 全连接更好 |
| 中文与跨语言段 | EER | 基线 | 多数改进 | 需按子集细看 |

第二张开放表进一步显示，西班牙语集上全连接更优，中文集上 KAN 多数改进但幅度不一，文末 3 次 KAN 重复的聚合误差在相近区间波动。这支持简化方案在多数组合下可用，但适用条件是高维表示本身足够丰富，且评估必须分条件报告，不能只用一个平均值代替全部结论。

### 哪些结论尚未验证，哪些数字不能直接比较？

论文直接报告的是等错误率数字和后端参数量，有限解释是 KAN 更适合多语言和域外泛化，未验证推测是其抽象能力随音系变化的原因，相关性不应写成因果。缺失证据不是技术错误，但复现时要明确补项。

第一，前端更新状态不明，梯度是否回传到 XLS-R、微调了多少层、学习率是否分层，原文没有交代，不能从模型名称推定。第二，KAN 结构超参数不明，样条或径向基的具体规模、初始化和正则化没有报告，22.54k 只是结果参数量，不是可直接复现的配置。第三，统计不确定性不明，主表多为单次结果，只有文末对 KAN 做了 3 次重复，没有显著性检验，数值相同也不代表同一指标可比。第四，成本只报告了参数量，没有报告训练时长、推理延迟、显存占用和输出帧率，参数少不等于延迟低。

不同指标的差值不能混放，百分点变化和相对百分比变化是两回事。例如从 2.38% 到 1.07% 是下降 1.31 个百分点，相对下降约 50% 以上，表述时应保留原始百分点写法，不要自行换算成新的百分比数字。自动指标也不能当成人工听感评价，误差低只代表机器判决更准，不代表人耳可分辨性相同。

### 若要复现，应按什么顺序固定条件？

复现先做三件事。第一，确认数据与权重可达性。训练与验证固定为 2019 年逻辑访问划分，评估按原文扩展到 2021 年逻辑访问、2021 年深伪及其他开放集；XLS-R 权重链接在本次核对中未能确认可达，应先解决版本与维度对齐，再谈训练。第二，固定可运行策略。

前端输出后只做时间平均，不加降维投影；后端分别实现单层全连接和单层 KAN；损失用加权交叉熵，真实类权重 0.9，伪造类权重 0.1；优化器用 Adam 并保留原文学习率与权重衰减写法；早停 patience 为 3 个周期，以开发集最优点为准。

第三，固定评估协议。评估用单条完整音频，批次大小为 1，避免填充影响；指标统一为等错误率，越低越好；报告时按攻击类型、压缩条件和语言分别列出，再给聚合值。

下面这张复现核对表把必须保留的超参数集中在一起，阅读时把它当作实验记录本，而不是性能榜单。

| 环节 | 配置名 | 取值 | 适用阶段 | 备注 |
| --- | --- | --- | --- | --- |
| 数据 | 训练集 | 19LA 训练集 | 训练 | 开发集用于选点 |
| 优化 | 学习率 | 2, 5 × 10−6 | 训练 | 保留原文标点 |
| 正则 | 权重衰减 | 1 × 10−4 | 训练 | 与 Adam 配合 |
| 损失 | 类别权重 | 0,9 与 0,1 | 训练 | 真实类更大 |
| 停止 | 早停等待 | 3 个周期 | 训练 | 开发集最优 |

表后补充代价与边界。按此配置复现时，计算预算至少需要一块可运行 XLS-R 量级模型与单层后端的设备，原文使用 A100，但未报告总时长和显存峰值，因此硬件预算只能记为不完整。数据增强开关必须记录，因为它影响域外结果；若关闭增强后重新比较，结论可能变化。权重下载与代码开源在原文证据中没有给出可用声明，不能写成已公开或当前可用，只能写按原文链接本次未能确认可达，需要读者自行验证。

### 何时值得尝试这种极简后端，还需补哪项验证？

综合所有证据，可以给出一个可操作的判断。当上游已经是高质量多语言自监督表示，且任务是二分类真假判决时，值得先尝试不降维加单层分类器，因为它把可学习参数压缩到数千量级，仍能在多数域内和域外集上保持竞争力。若计算资源有限或需要快速验证新前端，这种极简后端是合理的起点；若目标是覆盖所有语言和所有声码器，则不应默认 KAN 全面更优。

常见误解需要澄清。第一，参数少不等于训练快或推理快，本文只报告了后端参数量，没有测量延迟与吞吐。第二，聚合误差低不等于每种攻击都低，波形拼接、法语、德语和个别开放集上的反例表明优势是有条件的。第三，去掉降维不等于信息无损，时间平均本身也会平滑掉时序细节，只是本文证明在当前表示下这种简化仍具竞争力。

还需补的验证包括：公布 KAN 超参数与前端冻结策略并做多次随机种子报告，给出训练与推理的实际开销，补充按语言和按攻击的统计检验，以及在 2025 年深伪等对抗与压缩条件下的完整消融。只有补齐这些，才能把有希望的简化方案变成可部署的可靠结论。

## 📐 原文公式与排版

以下展示论文原页中的数学表达区域，保留原始上下标、分式和符号排版。区域序号仅用于本文导航，不是论文公式编号。

[![原文数学表达区域 1，PDF 第 3 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/jep-2026/52b7d1d99512/figure-1.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/jep-2026/52b7d1d99512/figure-1.png)

区域 1 · [查看论文原页](https://www.isca-archive.org/jep_2026/tran26b_jep.pdf#page=3)

[![原文数学表达区域 2，PDF 第 3 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/jep-2026/52b7d1d99512/figure-2.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/jep-2026/52b7d1d99512/figure-2.png)

区域 2 · [查看论文原页](https://www.isca-archive.org/jep_2026/tran26b_jep.pdf#page=3)

[![原文数学表达区域 3，PDF 第 3 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/jep-2026/52b7d1d99512/figure-3.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/jep-2026/52b7d1d99512/figure-3.png)

区域 3 · [查看论文原页](https://www.isca-archive.org/jep_2026/tran26b_jep.pdf#page=3)

[![原文数学表达区域 4，PDF 第 3 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/jep-2026/52b7d1d99512/figure-4.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/jep-2026/52b7d1d99512/figure-4.png)

区域 4 · [查看论文原页](https://www.isca-archive.org/jep_2026/tran26b_jep.pdf#page=3)

[![原文数学表达区域 5，PDF 第 3 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/jep-2026/52b7d1d99512/figure-5.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/jep-2026/52b7d1d99512/figure-5.png)

区域 5 · [查看论文原页](https://www.isca-archive.org/jep_2026/tran26b_jep.pdf#page=3)

[![原文数学表达区域 6，PDF 第 3 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/jep-2026/52b7d1d99512/figure-6.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/jep-2026/52b7d1d99512/figure-6.png)

区域 6 · [查看论文原页](https://www.isca-archive.org/jep_2026/tran26b_jep.pdf#page=3)

[![原文数学表达区域 7，PDF 第 3 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/jep-2026/52b7d1d99512/figure-7.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/jep-2026/52b7d1d99512/figure-7.png)

区域 7 · [查看论文原页](https://www.isca-archive.org/jep_2026/tran26b_jep.pdf#page=3)

[![原文数学表达区域 8，PDF 第 3 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/jep-2026/52b7d1d99512/figure-8.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/jep-2026/52b7d1d99512/figure-8.png)

区域 8 · [查看论文原页](https://www.isca-archive.org/jep_2026/tran26b_jep.pdf#page=3)

[![原文数学表达区域 9，PDF 第 3 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/jep-2026/52b7d1d99512/figure-9.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/jep-2026/52b7d1d99512/figure-9.png)

区域 9 · [查看论文原页](https://www.isca-archive.org/jep_2026/tran26b_jep.pdf#page=3)

[![原文数学表达区域 10，PDF 第 4 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/jep-2026/52b7d1d99512/figure-10.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/jep-2026/52b7d1d99512/figure-10.png)

区域 10 · [查看论文原页](https://www.isca-archive.org/jep_2026/tran26b_jep.pdf#page=4)

[![原文数学表达区域 11，PDF 第 4 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/jep-2026/52b7d1d99512/figure-11.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/jep-2026/52b7d1d99512/figure-11.png)

区域 11 · [查看论文原页](https://www.isca-archive.org/jep_2026/tran26b_jep.pdf#page=4)

[![原文数学表达区域 12，PDF 第 4 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/jep-2026/52b7d1d99512/figure-12.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/jep-2026/52b7d1d99512/figure-12.png)

区域 12 · [查看论文原页](https://www.isca-archive.org/jep_2026/tran26b_jep.pdf#page=4)

[![原文数学表达区域 13，PDF 第 4 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/jep-2026/52b7d1d99512/figure-13.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/jep-2026/52b7d1d99512/figure-13.png)

区域 13 · [查看论文原页](https://www.isca-archive.org/jep_2026/tran26b_jep.pdf#page=4)

[![原文数学表达区域 14，PDF 第 4 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/jep-2026/52b7d1d99512/figure-14.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/jep-2026/52b7d1d99512/figure-14.png)

区域 14 · [查看论文原页](https://www.isca-archive.org/jep_2026/tran26b_jep.pdf#page=4)

另有 1 个候选区域因边界不明确或图片数量、尺寸限制未展开；请[查看完整论文](https://www.isca-archive.org/jep_2026/tran26b_jep.pdf)中的原始排版。

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。
- 评分规则：type-aware-v1
- 评分模型：muse-spark-1.3-contributor
- 评分请求协议：openai_responses

---

[← 返回 jep-2026 论文汇总](/posts/conference-jep-2026/)
