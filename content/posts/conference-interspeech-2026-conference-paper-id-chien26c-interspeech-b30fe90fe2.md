---
title: "Two-Sided Fairness Transfer for Gender-Neutral Speech Emotion Recognition with Partially Observed Attributes"
date: 2026-09-25
draft: false
description: "论文把语音情感识别拆成说话人侧与标注者侧两路公平，先用对抗去偏构造单侧 FairCLAP，再用源域双侧参数差 ATT2Fair 向量推断目标域缺失侧，在 IEMOCAP 等三库上以约 2.15% 平均 F1 代价换来统计 parity 明显下降。"
tags: ["对抗训练", "迁移学习", "公平性", "语音", "语音情感识别"]
categories: ["interspeech-2026 论文"]
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_paper_id: "conference:interspeech:2026:conference-paper-id:chien26c_interspeech"
paper_digest_source_kind: conference
paper_digest_conference_id: "interspeech-2026"
paper_digest_conference_record_url: "https://www.isca-archive.org/interspeech_2026/chien26c_interspeech.html"
paper_digest_conference_pdf_url: "https://www.isca-archive.org/interspeech_2026/chien26c_interspeech.pdf"
paper_digest_api_reader_contract: "beginner-researcher-v3"
paper_digest_api_reader_article_sha256: "5322740ca55dc8076dfeca55c84a2b7010367c9c3da4776481f255032ea7d3d2"
paper_digest_api_reader_plan_sha256: "673d374785f245161762d2cd1b0ec5569ccec12a57e51489a66f19fef81323f6"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings-v4"
paper_digest_api_reader_source_bindings_sha256: "7c08fb7e584963e8decbacb5dd503e7d6170cd823fa0376293f89b1611aead61"
paper_digest_api_reader_source_table_count: 2
paper_digest_api_reader_source_formula_count: 0
paper_digest_api_reader_structured_artifacts_sha256: "7289627ac19bb2df15861f0e531b50d958dc7a794057e5b96dc31b6517c9ff34"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity-v1"
paper_digest_api_reader_author_identity_sha256: "6fbafc1ff9ea8765013bf681124a30d60e30464b0430be892d1460da8dbf8405"
paper_digest_api_reader_author_count: 7
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity-v1"
paper_digest_api_reader_resource_identity_sha256: "4f1b5cc16ce10d084bfaee5b3176173ed2dcf9269d9b41c533221631ad70e465"
paper_digest_api_reader_resource_count: 0
paper_digest_api_reader_decision_projection: "api-reader-decision-projection-v2"
paper_digest_scoring_contract: "api-scoring-audit-v2"
paper_digest_taxonomy_contract: "paper-taxonomy-flat-tags-compat-v1"
paper_digest_taxonomy_selection_contract: "paper-taxonomy-selection-v1"
paper_digest_taxonomy_registry_version: "paper-taxonomy-v1"
paper_digest_taxonomy_registry_sha256: "15c82a567ce5a55dc1175684ed08b64c158558639d9c8fb822c9587ec32a8778"
paper_digest_taxonomy_concepts: [{"facet":"method","id":"method.adversarial-training","label":"对抗训练"},{"facet":"method","id":"method.transfer","label":"迁移学习"},{"facet":"research_focus","id":"research_focus.fairness","label":"公平性"},{"facet":"signal","id":"signal.speech","label":"语音"},{"facet":"task","id":"task.emotion-recognition","label":"语音情感识别"}]
paper_digest_primary_task: "语音情感识别"
paper_digest_primary_method: "迁移学习"
paper_digest_score: 5.8
paper_digest_rank_bucket: "前50%"
paper_digest_document_type: "方法研究"
paper_digest_conference_structure: pdf-visual-quote-evidence-v1
---

# 📄 缺一侧性别标签时，如何把另一侧的公平补回来

> 英文题目：*Two-Sided Fairness Transfer for Gender-Neutral Speech Emotion Recognition with Partially Observed Attributes*

> 会议身份：`conference:interspeech:2026:conference-paper-id:chien26c_interspeech`



> 来源为官方会议 PDF；图片依据原页像素，表格数字依据原文引用。PDF 文字层不视为原始 TeX，未可靠恢复的结构不作推断。


> 会议来源：[官方记录](https://www.isca-archive.org/interspeech_2026/chien26c_interspeech.html) · [官方 PDF](https://www.isca-archive.org/interspeech_2026/chien26c_interspeech.pdf)

标签：#对抗训练 #迁移学习 #公平性 #语音 #语音情感识别

评分：**5.8/10** | 创新 1.2/2 | 技术严谨 1.0/1.5 | 实验充分 1.0/1.5 | 清晰度 0.7/1 | 影响力 0.8/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 0.8/1.5

排名：前50% | 文档类型：方法研究

## 👥 作者与机构

- Woan-Shiuan Chien：机构信息未能从会议 PDF 纯文本可靠映射
- Tomohiko Nakamura：机构信息未能从会议 PDF 纯文本可靠映射
- Huan-Yu Chen：机构信息未能从会议 PDF 纯文本可靠映射
- Satoru Fukayama：机构信息未能从会议 PDF 纯文本可靠映射
- Hitoshi Suda：机构信息未能从会议 PDF 纯文本可靠映射
- Jun Ogata：机构信息未能从会议 PDF 纯文本可靠映射
- Chi-Chun Lee：机构信息未能从会议 PDF 纯文本可靠映射

## 📌 核心摘要

语音情感识别输入为语音与文本查询，输出为Neutral、Happiness、Anger、Sadness四类情绪，难点是说话人侧与标注人侧性别偏置并存，而目标域常缺失一侧性别标签导致传统双侧去偏无法训练。第一阶段在属性完备源域以对比语言音频预训练为基座微调情绪分类器，并联两层全连接性别分类器做对抗去偏，分别得到说话人侧与标注人侧单侧公平模型。第二阶段计算源域两侧公平模型参数差作为属性到公平任务向量，按缩放系数加到目标域已知单侧模型上以推断缺失侧模型，前一阶段输出的单侧参数直接构成后一阶段向量计算与加算的输入。与需双侧标签的对抗去偏不同，该机制把公平校正视为可在参数空间平移的方向而非重新训练约束，因而无需目标缺失侧标签即可实现跨数据集公平迁移。在跨数据集嵌入对齐评测设置下，BIIC-Podcast的平均余弦相似度指标为0.33，高于IEMOCAP的平均余弦相似度指标0.31。其适用边界限于性别二分类、三套播客及表演数据集和四情绪分类，尚未验证其他属性、语言与真实部署分布。原文未披露训练、推理或部署成本。

## 🔗 开源与复现资源

本次未形成可展示的已核验资源记录，开放状态尚未核实。
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 语音情感识别为什么要同时看说话人与标注人？

输入是一段语音，目标是判断其中表达的情绪，论文把情绪限定为中性、高兴、愤怒、悲伤 4 类，标签由多数投票决定。初学者容易把任务想成声音到情绪的直接映射，但原文强调数据经过两道人为环节，第一道是说话人如何用声音表达情绪，第二道是标注者如何感知并打标签，两道环节都可能引入与性别相关的系统偏差。也就是说，即使模型结构不变，训练用的语音来自不同性别说话人，标签来自不同性别标注者，学到的边界就可能对某一性别更友好。

论文因此提出双侧公平，要求系统对说话人性别与标注者性别都保持中性。本文讨论的资源状态是本次未发现来源绑定且完成验证的资源，不得声称代码模型数据已公开。

**说话人侧公平 × 标注者侧公平：** 说话人侧公平分工是让模型对不同性别说话人的同一情绪判得一致，处理表达偏差；标注者侧公平分工是让模型不受标注者性别带来的感知偏差影响，处理标签偏差；二者搭配的原因是语音情感数据同时包含说话与被评两个人类环节，只做一侧会漏掉另一侧偏差，组合意义是构成论文所说的双侧公平。

开场需要交代清楚，本文目标是讲清在目标数据集只有一侧性别标签时如何补出另一侧公平模型，必须保留的信息包括三库名称与属性完备性、2 阶段做法、识别与公平指标方向与关键数字，输出是 1 篇可核对可复述方法的技术解读。后续按学习依赖展开，先讲任务与相关路线，再讲方法全景与组件计算，然后讲训练构造推理，接着讲实验条件结果反证，最后讲复现与收束。

### 已有去偏路线缺了哪一块？

同输入同目标的已有工作多是单侧去偏，一条路线处理说话人侧，例如用对抗框架减轻年龄与性别相关的说话人偏差，另一条路线处理标注者侧，例如缩小不同标注者性别组之间的分布差异。论文引用了这两类做法，并指出它们共同的前提是在被去偏的那一侧能拿到显式属性标签以定义分组并施加公平约束。另一类相关工作是跨域公平，讨论把偏见缓解策略从一个数据集搬到另一个数据集的困难，但同样假设目标侧属性可用。

于是现实中常见的部分标注情形被留空，即目标域只有说话人或只有标注人一侧有性别标签，另一侧无标注，现有方法无法直接训练缺失侧的公平模型。论文把要解决的问题定位为跨数据集公平迁移下的部分属性监督，而不是在单库内同时有双侧标签时做联合去偏。教学例子是，假设甲库说话人与标注人性别都知道，乙库只有说话人性别已知，任务就是在不索取乙库标注人性别的前提下，补出乙库的标注人侧公平模型。

### 部分可观察属性下的迁移问题如何形式化？

论文把问题框为公平知识的域适应，源域是属性已知的域，目标域是只有一侧有性别标签的域。因为完整的公平语音情感模型需要说话人侧与标注者侧两个分量，目标域缺失侧的公平必须被推断而非直接训练。图注原文说该图展示说话人侧与标注者侧公平模型在源域与目标域之间的偏移，这是理解为何不能直接复制参数的关键。
以下导读帮助建立坐标系，横向是公平的侧别维度，纵向是数据集的域维度，4 个方块分别对应源域说话人侧、源域标注者侧、目标域说话人侧、目标域标注者侧，颜色差异同时暗示侧别位移与域位移并存。

> **看图路径：** 1. 先看横轴说话人到标注者与纵轴源域到目标域构成的四个象限；2. 再对比左上与右上在源域内从说话人侧到标注者侧的颜色变化；3. 再对比上排源域与下排目标域整体色调从紫系到蓝系的域偏移；4. 最后确认缺失侧需要推断的是右下或左下哪一个方块

[![原论文 Figure 2：Illustration of domain adaptation challenges in SER, showing shifts between speaker-side and…](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/interspeech-2026/5881998232c8/figure-2.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/interspeech-2026/5881998232c8/figure-2.png)

*论文图 2。原论文 Figure 2：“Illustration of domain adaptation challenges in SER, showing shifts between speaker-side and rater-side fair models across source and target domains.”。*

从像素可见，画面是双轴十字结构，上为源域下为目标域，左为说话人右为标注者，中间红色标注 4 个参数符号，4 个参数色块在紫色系与蓝色系之间变化，直观说明源域内部的侧别差与跨域的整体分布差是两类不同的位移，迁移时需要把侧别方向剥离出来单独搬运，而不是把源域模型整体覆盖到目标域。

### 两阶段框架如何把缺失侧补出来？

方法全景分两步，第一阶段在属性已知的数据上用对抗去偏分别构造说话人侧与标注者侧的单侧性别中性模型，记为 FairCLAP，第二阶段从源域成对的公平模型中算出任务向量，再把它加到目标域已知的单侧模型上以推断缺失侧。图注原文说该向量由源域说话人侧与标注者侧公平模型的参数差导出，并用于推断目标域缺失侧公平模型。
以下导读先看上排如何做减法得到向量，再看该向量如何跨过虚线向下迁移，最后看下排如何做加法得到缺失模型，右侧勾叉标记标明哪一侧属性缺失。

> **看图路径：** 1. 先沿上排源域从标注者侧公平模型减去说话人侧公平模型得到任务向量；2. 再沿黑色粗箭头看该向量如何被搬运到下排目标域；3. 再核对目标域已知说话人侧加向量等于推断的标注者侧的等式方向；4. 最后对照左右两侧属性勾选标记确认哪一侧缺失

[![原论文 Figure 1：Overview of ATT2Fair task vector approach, which is derived from the parameter difference between…](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/interspeech-2026/5881998232c8/figure-1.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/interspeech-2026/5881998232c8/figure-1.png)

*论文图 1。原论文 Figure 1：“Overview of ATT2Fair task vector approach, which is derived from the parameter difference between speaker-side and rater-side fair models in the source domain and is applied to…”。*

从像素可见，上排左侧绿色标注者侧模型减去灰色说话人侧模型等于粉色任务向量，下排右侧蓝色说话人侧模型加上同一粉色向量等于左侧橙色标注者侧模型，中间黑色粗箭头表示跨域搬运，源域两侧属性均为勾选，目标域标注者侧为叉、说话人侧为勾选，完整对应了已知说话人侧推断标注者侧这一支，对称地也可反向推断。

**任务向量 × ATT2Fair：** 任务向量分工是把同一底座上两种行为的参数差作为可迁移的操作，ATT2Fair 分工是把源域标注者侧公平模型减说话人侧公平模型得到公平方向；搭配原因是跨数据集直接复制参数会被域偏移污染，而只迁移方向更稳定，组合意义是用加法把目标域已知的单侧模型推向缺失侧。

沿一个样本走一遍有助于定位 2 阶段分工，输入是一条语音与一条文本查询，语音进语音编码器得到语音嵌入，文本查询进文本编码器得到文本嵌入，两者在情绪分类头比较以判情绪，同时语音嵌入还进入性别分类器以暴露性别信息，第一阶段通过联合优化让情绪可分而性别不可分，第二阶段不再看单个样本，而是直接在参数空间做向量加减，把源域学到的侧别转换复用到目标域。

### FairCLAP 的编码器与对抗分支各自做什么？

组件层面先解释术语，CLAP 是对比语言音频预训练的缩写，白话说就是用大量语音文本对把声音与文字对齐到同一表示空间的基础模型，文本查询是形如句子模板的输入，论文按情绪生成查询，格式为句子包含情绪类名或否定形式，例如判断是否高兴就构造包含高兴与非高兴的查询。对抗去偏白话说是额外训练一个性别分类器去猜语音表示中的性别，同时让语音编码器学会让它猜不准，从而剥离性别线索。

**CLAP × 对抗去偏：** CLAP 分工是提供语音编码器与文本编码器对齐后的情感表示与分类能力，对抗去偏分工是用性别分类器从语音表示中剥离性别可预测性；搭配原因是只微调 CLAP 会保留性别捷径，而对抗分支迫使编码器输出性别中性，组合成 FairCLAP 后同时保留情绪判别力并降低性别可分性。

具体计算上，输入语音文本对记为语音与文本，编码器输出分别为语音嵌入与文本嵌入，编码器结构沿用引文设计，先在情绪数据上用交叉熵损失微调做情绪分类。公平目标再引入域分类器，由两层全连接组成，输入语音编码器输出，输出性别预测，用标准的交叉熵作为对抗损失，论文给出的 FairCLAP 目标是情绪分类损失加对抗损失之和。

原文没有给出梯度反转层或交替更新的显式公式细节，只说明分类器最小化预测与真实属性标签之间的交叉熵，因此复述时不猜测梯度路径是反转还是最大最小博弈的具体实现，只保留损失相加与监督来源为性别标签这一已验证安排。域分类器的监督在说话人侧模型训练时使用说话人集合，在标注者侧训练时使用标注者性别偏置集合，这是两侧模型行为不同的来源。

### 两阶段的训练与向量构造如何执行？

训练部分先讲第一阶段的真实计算过程，起点是同一个预训练 CLAP 模型，对每个数据集独立微调出单侧基线，先是不加公平约束的基线，再是加对抗目标的 FairCLAP。文本查询按情绪类别生成，优化器用 Adam，微调 30 轮，学习率设为 1 乘 10 的负 4 次方，批量 32，超参数缩放因子在千分之一到 1% 之间网格搜索。说话人侧域分类器用 S1 集合训练，标注者侧用 S2 集合训练，硬件为 40 GB 的英伟达 A100，代码基于 PyTorch 实现。以下导读把左半的样本级训练与右半的参数级迁移连起来，左侧看损失如何形成单侧模型，右侧看单侧模型如何变成跨域向量。

> **看图路径：** 1. 先沿左侧语音与文本两路输入到语音编码器与文本编码器的主路径；2. 再找到右下属性分类器回指语音分支的对抗损失回路；3. 再看中间二分类头输出的情绪分类损失与对抗损失如何相加；4. 最后看右侧参数空间中源域双点连线如何平移到目标域单点

[![原论文 Figure 3：Overview of the two-stage fair SER framework, which first fine-tunes CLAP with an adversarial…](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/interspeech-2026/5881998232c8/figure-3.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/interspeech-2026/5881998232c8/figure-3.png)

*论文图 3。原论文 Figure 3：“Overview of the two-stage fair SER framework, which first fine-tunes CLAP with an adversarial debiasing objective to construct one-sided FairCLAP models, and then applies…”。*

从像素可见，左框内上方文本支路显示多条句子模板进入文本编码器得到文本嵌入，下方语音支路显示波形与性别序列进入语音编码器得到语音嵌入，中间二分类头引出情绪分类损失，右下性别分类器引出对抗损失，两者相加为 FairCLAP 损失，右框上方写出向量等于标注者侧减说话人侧、目标缺失侧等于已知侧加缩放向量的关系式，下方散点示意源域两点连线平移到目标域单点，虚线区分源域说话人侧、源域标注者侧与目标域说话人侧轨迹。

第二阶段的构造是参数运算，设源域说话人侧与标注者侧公平模型的参数向量分别为两者符号，任务向量定义为后者减前者，若目标域已知说话人侧而缺失标注者侧，则推断模型等于已知模型加缩放后的任务向量，缩放因子控制迁移强度，对称地在已知标注者侧时可反向推断。原文未报告编码器哪些层冻结哪些层更新，也未报告对抗分支的学习率与重置时机，这些缺项在复现时必须按缺失处理，不从模型名称推定实现。

### 数据、划分与指标如何保证可比？

实验条件按问题组织，先说测什么，测情绪识别能力与性别公平程度，识别在 S1 上用加权 F1，越高越好，公平用统计 parity 差，记为增量符号，理想值为零，越小越好，分别在 S1 上测说话人侧，在 S2 上测标注者侧。数据用 3 个公开语料，IEMOCAP 提供说话人与标注人双方的性别信息，5 组双人交互，6 名标注者中 2 男 4 女，MSP 播客约 150,000 条情感语音轮次，提供说话人性别但缺失标注者性别，每条至少 5 名众包者评估，BIIC 播客约 60,000 条台湾国语情感话语，收集流程类似 MSP，提供双方性别，每条 3 至 5 名标注者。

划分上 S1 取各数据集全部说话人集合用于说话人侧公平分析，S2 取真值仅与单一性别标注者一致的样本构成标注者性别偏置集用于标注者侧分析。

**S1 × S2：** S1 分工是取各数据集全部说话人集合评估说话人侧公平，S2 分工是只取真值与单一性别标注者一致的样本评估标注者侧公平；搭配原因是两侧偏差的分组依据不同，不能用同一划分同时测，组合意义是让识别用加权 F1、公平用统计 parity 在各自有意义的协议下报告。

为让比较条件一致，论文强调同一预训练 CLAP 起点对各数据集独立微调，得到各自的单侧基线，FairCLAP 与基线的差异仅在于是否加入对抗公平目标，跨数据集推断时源对应有属性监督的成对公平模型，目标对应无对应侧标签而需推断的域。以下表格把关键的训练与评估条件收拢，便于复述时 1 次核对数据集模型阶段指标与聚合对象，表中数值与单位保留原文写法。

| 条件 | 指标 | 基线 | 本方法 | 比较对象 |
| --- | --- | --- | --- | --- |
| 三库独立微调 | 平均 F1 下降 | CLAP 基线 | 约 2.15% | FairCLAP |
| 30 轮批量 32 | 学习率 | 预训练起点 | 1×10−4 | Adam 优化 |
| 嵌入轨迹检验 | 均值余弦 | 源域位移 | 0.31 与 0.33 | IEMOCAP 与 BIIC |
| 分布峰位置 | 相似度峰 | 负区少量 | 0.4 至 0.5 | 双库一致 |

表前已提出比较问题与公平条件，识别看加权 F1 方向向上，公平看 parity 差方向向下，源目标划分如上。

表后解释是，该表并非主性能表，而是把训练预算与对齐证据放在同一视图，主性能仍需看下一节按情绪展开的识别公平对照，此处先确认微调成本可控且对齐均值为正，为后续讨论迁移的是公平方向而非随机扰动提供前提，同时保留未胜出项的空间，主表中有个别情绪公平波动仍在可忽略范围。

### 单侧去偏与跨域推断各付出什么代价？

主结果先看第一阶段，论文报告 FairCLAP 相对 CLAP 会有轻微识别下降，但平均 F1 只降约 2.15%，小于先前工作的权衡，同时在说话人侧与标注者侧一致改善公平，IEMOCAP 与 MSP 的性别差异大幅下降且不伤识别，悲伤类尤为明显，BIIC 个别情绪如中性有轻微公平波动但在可忽略范围。以下导读先确认横轴相似度与纵轴比例的含义，再看主体是否位于零右侧，最后核对均值线位置。

> **看图路径：** 1. 先确认横轴是余弦相似度从负到正，纵轴是比例；2. 再观察左右两幅直方图主体是否都落在零右侧；3. 再找到图中标注的均值虚线在零点右侧的位置；4. 最后对比两库分布峰形是否都集中而非均匀散开

[![原论文 Figure 4：Histogram of embedding trajectory alignment under ATT2Fair.](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/interspeech-2026/5881998232c8/figure-4.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/interspeech-2026/5881998232c8/figure-4.png)

*论文图 4。原论文 Figure 4：“Histogram of embedding trajectory alignment under ATT2Fair.”。*

从像素可见，左右两幅紫色直方图横轴均为余弦相似度从负一到一，纵轴为比例，左为 IEMOCAP 右为 BIIC 播客，主体明显偏向零右侧，峰在 0.4 至 0.5 附近，图例标注均值分别为 0.31 与 0.33，虚线标出零点与均值，直观支持目标域推断位移与源域公平位移方向一致。
以下表格收拢论文直接报告的跨域推断收益与代价，数字来自原文连续表述，单位保留原文写法，便于核对模型基线实验阶段与聚合对象。

| 条件 | 指标 | 基线 | 本方法 | 比较对象 |
| --- | --- | --- | --- | --- |
| IEMOCAP 愤怒标注者侧 | F1 提升 | FairCLAP | 1.8% | 推断模型更优 |
| IEMOCAP 愤怒说话人侧 | F1 提升 | FairCLAP | 4.8% | 推断模型更优 |
| 无属性域如 MSP 标注者侧 | 公平值 | CLAP 基线 | 约 0.2 | 推断模型 |
| 训练实现 | 硬件 | PyTorch | A100 40 GB | 单卡 |

表前比较问题是，在有真值 FairCLAP 可对照的 4 组配置中推断模型是否接近或超越直接训练，在无属性的 MSP 标注者侧是否仍能产出公平模型，指标方向为 F1 向上 parity 向下。

表后解释是，论文显示 4 组可直接比较的推断模型仅有轻微识别下降且公平达到相当或更好，IEMOCAP 愤怒类的两处 F1 反超是具体收益，以 MSP 标注者侧为例，用 IEMOCAP 或 BIIC 作源域的推断模型优于原始 CLAP 基线且各情绪公平稳定在 0.2 附近，代价是部分情绪识别仍低于直接训练的 FairCLAP，且未胜出项如个别中性公平波动与部分推断 F1 回落需要在复现时逐情绪核对，不把总体趋势推广到每组每步都成立。

### 向量搬运的是公平方向还是随机扰动？

反证部分做嵌入轨迹对齐分析，做法是对每条语音取同一编码器层的 utterance 级嵌入，定义公平位移方向为两类单侧模型产生嵌入之差，源域位移由标注者侧减说话人侧得到，目标域位移由推断的缺失侧模型参与得到，再对每条语音算两类位移之间的余弦相似度，越高说明目标域推断的公平变换与源域观察到的方向越一致。论文报告两库对齐分数明显集中在正区，多数在零以上，峰在 0.4 至 0.5，均值在 IEMOCAP 为 0.31，在 BIIC 播客为 0.33。

**嵌入轨迹对齐 × 余弦相似度：** 嵌入轨迹对齐分工是检验源域与目标域的公平位移是否指向同一方向，余弦相似度分工是把每条语音在两类单侧模型下的表示差作为向量并算夹角一致性；搭配原因是只看 F1 与 parity 无法证明迁移的是公平而非随机扰动，组合意义是若相似度集中为正则支持任务向量搬运的是连贯的公平修正。

该分析支持而非证明因果，原文用词是正向对齐表明推断位移沿着与源域类似的公平相关轨迹移动，而不是引入任意扰动，一致性跨数据集成立则进一步支持任务向量捕捉的是可迁移的公平变换。但需注意相关性不是因果，未测量误判率延迟成本，总体趋势不等于每条语音都对齐，像素中左尾仍有少量负相似度样本，这正是未评测边界与失败条件的提示。若去掉向量或改用随机向量会怎样，原文没有报告此类消融，因此不补写拿掉后必然怎样，只指出该缺项是后续验证需要补的对照。

### 哪些边界尚未被验证？

限制先按证据区分 3 类表述，论文直接报告的是四情绪多数投票标签下的加权 F1 与统计 parity 差，支持的是跨库部分监督下推断模型可接近直接训练的公平水平，待验证的是更广属性与完全无监督情形。原文结论明确未来计划扩展到更广属性集与部分可观察或缺失监督，说明当前仅验证性别二元分组，未验证年龄口音语言等其他敏感属性，也未验证多属性交集公平。

数据层面 MSP 天然缺失标注者性别，恰好成为实用检验，但 IEMOCAP 与 BIIC 的标注者构成与 MSP 众包者差异较大，域偏移中语言从英语到台湾国语的变化是否被向量完全解耦，原文没有给出按语言分层的对照。方法层面缩放因子的网格范围已给，但最优值按源目标组合是否稳定没有逐项披露，直接部署时不能把搜索最优当作可部署收益，事后最优需另行标明。度量层面只报告统计 parity，未报告均衡错误率或人评一致性，不能把自动指标当成人评，也不能承诺误判率延迟成本得到改善。

训练资源只报告单卡型号与显存，未报告时长与推理开销，输出帧率与实际延迟需分别讨论。

### 复现时先做什么才能对上口径？

复现先做数据口径，IEMOCAP 用 5 组双人交互的性别平衡对与 6 名标注者信息重建 S1 与 S2，MSP 用说话人性别与至少 5 名评估重建 S1 并确认标注者性别缺失，BIIC 用双方性别与每条 3 至 5 名标注者重建 S1 与 S2，4 类情绪按多数规则取共识标签，查询模板按句子包含情绪类名或否定形式生成，例如判断高兴就生成包含高兴与非高兴的查询。

模型起点用同一预训练 CLAP 对各库独立微调，先跑无公平约束基线，再跑 FairCLAP，对抗分支用两层全连接预测性别，说话人侧在 S1 上训练，标注者侧在 S2 上训练，优化用 Adam，30 轮，学习率 1 乘 10 的负 4 次方，批量 32，缩放因子在千分之一到 1% 网格搜索，硬件为 40 GB 的 A100。第二步向量复现需严格配对，先在源域拿到成对的说话人侧与标注者侧 FairCLAP 参数，再做减法得任务向量，然后加到目标域已知单侧上，符号方向不可颠倒，已知说话人侧加向量得标注者侧，已知标注者侧则反向。

评估时识别看加权 F1 向上，公平看 parity 差向下，理想为零，逐情绪报告中性高兴愤怒悲伤，不把不同指标的差值混入模型列。资源状态本次为未发现绑定验证的资源，因此只按原文文字复述，不声称代码权重数据已公开，可运行性需读者按上述超参数与信息条件自行实现。

### 何时值得尝试这条向量迁移？

综合判断是，当目标库只有一侧性别标签而另一侧完全缺失，且源库同时有双侧标签时，值得尝试用源域参数差推断缺失侧，而不是放弃公平或冒险收集敏感属性。适用条件是底座相同且微调流程一致，源目标的情绪标签口径与查询模板一致，评估分别在 S1 与 S2 上进行。预期收益是识别仅付约 2.15% 平均 F1 代价，公平从基线的高位降至 0.2 附近，个别如 IEMOCAP 愤怒还能反超直接训练的 FairCLAP 约 1.8% 与 4.8%，对齐均值 0.31 与 0.33 支持搬运的是连贯方向。

代价与风险是部分情绪仍有回落，BIIC 个别公平波动虽小但需逐项核对，缩放因子需按源目标组合重搜，不能把最优搜索值当部署保证。常见误解是把任务向量当成模型平均或直接复制，实际上它是侧别差而非模型本身，复制模型会连域偏移一起搬运，而只搬运差值才更稳定，另一误解是把正向对齐当成因果证明，实际上它只是方向一致的证据，还需补随机向量与消融对照、下游人评与多属性验证，才能把公平覆盖真正拓宽。

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。
- 评分规则：type-aware-v1
- 评分模型：muse-spark-1.3-contributor
- 评分请求协议：openai_responses

---

[← 返回 interspeech-2026 论文汇总](/posts/conference-interspeech-2026/)
