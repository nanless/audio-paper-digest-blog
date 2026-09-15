---
title: "BaldWhisper: réduction des coûts par élagage et fusion des couches"
date: 2026-09-14
draft: false
description: "针对班巴拉语 32 小时监督数据的离线解码任务，BaldWhisper 先把 Whisper-base 解码器 6 层按相邻对加权融合为 3 层并做知识蒸馏，再把共享输入输出嵌入矩阵做秩 96 低秩分解加特征蒸馏，最终在保持基线约九成性能的同时把体积缩小约一半并把解码速度提高到两倍以上，代价是词错误率从基线水平上升数个百分点。"
tags: ["模型剪枝", "高效推理", "低资源", "语音识别"]
categories: ["jep-2026 论文"]
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_paper_id: "conference:jep:2026:conference-paper-id:sy26_jep"
paper_digest_source_kind: conference
paper_digest_conference_id: "jep-2026"
paper_digest_conference_record_url: "https://www.isca-archive.org/jep_2026/sy26_jep.html"
paper_digest_conference_pdf_url: "https://www.isca-archive.org/jep_2026/sy26_jep.pdf"
paper_digest_api_reader_contract: "beginner-researcher-v3"
paper_digest_api_reader_article_sha256: "c63c0a1cd4e0cd6fbf3936136f6eaad449c718e1d13456293892fec0e21f1aab"
paper_digest_api_reader_plan_sha256: "6ceec08a732f5ae284e807dae79f494fe6da4d5ad63366cbcb00361b2585c87c"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings-v4"
paper_digest_api_reader_source_bindings_sha256: "86448a81c514857773902b809bb264f049fc5e54e0d88135f83dfc445514c23d"
paper_digest_api_reader_source_table_count: 2
paper_digest_api_reader_source_formula_count: 0
paper_digest_api_reader_structured_artifacts_sha256: "8a555e205f807893d916c5dc2f07de48cd758fe4ff0adb75a8725b9d654a7d13"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity-v1"
paper_digest_api_reader_author_identity_sha256: "0c72ee09e27f51bc3c5e39548036b185a4b21007a10fa658ec394c365cc89429"
paper_digest_api_reader_author_count: 3
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity-v1"
paper_digest_api_reader_resource_identity_sha256: "5aed92544225adbfc15dcf876ea26c2529d120a45b706a0383a33a8bbb5dc93d"
paper_digest_api_reader_resource_count: 2
paper_digest_api_reader_decision_projection: "api-reader-decision-projection-v2"
paper_digest_scoring_contract: "api-scoring-audit-v2"
paper_digest_taxonomy_contract: "paper-taxonomy-flat-tags-compat-v1"
paper_digest_taxonomy_selection_contract: "paper-taxonomy-selection-v1"
paper_digest_taxonomy_registry_version: "paper-taxonomy-v1"
paper_digest_taxonomy_registry_sha256: "15c82a567ce5a55dc1175684ed08b64c158558639d9c8fb822c9587ec32a8778"
paper_digest_taxonomy_concepts: [{"facet":"method","id":"method.pruning","label":"模型剪枝"},{"facet":"research_focus","id":"research_focus.efficiency","label":"高效推理"},{"facet":"setting","id":"setting.low-resource","label":"低资源"},{"facet":"task","id":"task.asr","label":"语音识别"}]
paper_digest_primary_task: "语音识别"
paper_digest_primary_method: "模型剪枝"
paper_digest_score: 6.4
paper_digest_rank_bucket: "前50%"
paper_digest_document_type: "方法研究"
paper_digest_conference_structure: replayable-pdf-layout-v1
---

# 📄 只有 32 小时班巴拉语数据时，把解码器对折而不砍掉

> 英文题目：*BaldWhisper: réduction des coûts par élagage et fusion des couches*

> 会议身份：`conference:jep:2026:conference-paper-id:sy26_jep`



> ✅ 来源为官方会议 PDF；表格与 Figure 按原文证据绑定。PDF 公式以原页区域图片展示，未冒称作者原始 TeX。

> 会议来源：[官方记录](https://www.isca-archive.org/jep_2026/sy26_jep.html) · [官方 PDF](https://www.isca-archive.org/jep_2026/sy26_jep.pdf)

标签：#模型剪枝 #高效推理 #低资源 #语音识别

评分：**6.4/10** | 创新 1.2/2 | 技术严谨 1.2/1.5 | 实验充分 0.9/1.5 | 清晰度 0.7/1 | 影响力 0.9/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 1.2/1.5

排名：前50% | 文档类型：方法研究

## 👥 作者与机构

- Yaya Sy：机构信息未能从会议 PDF 纯文本可靠映射
- Irina Illina：机构信息未能从会议 PDF 纯文本可靠映射
- Christophe Cerisara：机构信息未能从会议 PDF 纯文本可靠映射

## 📌 核心摘要

该工作处理班巴拉语语音识别，输入为真实场景语音，输出为转写文本，难点在于标注仅约32小时、拼写非标准化且频繁混用外语发生语码切换。方法第一步将Whisper-base解码器相邻两层按加权平均融合成三层浅解码器，以保留相似激活并减少解码层数；第二步以交叉熵加知识蒸馏微调学生编码器与融合后解码器，使冻结教师分布约束压缩后输出并恢复精度。第三步对共享输入输出嵌入矩阵做奇异值分解低秩近似，并以特征蒸馏约束保持输入查询与输出投影一致，压缩后嵌入进入最终微调。与直接删层或删词表路线不同，该方法以融合替代删除保留层间信息，以低秩替代词表剪枝从而兼容跨语言词元生成，避免了大数据重训。在Bambara测试集下，压缩模型的WER为36.49%，高于Whisper-base基线的WER33.11%。该结论适用边界受限于单语言离线解码与Whisper-base规模，尚未验证大模型与其他语言及流式场景的外推性。在硬件与推理开销上，微调使用单块A100-80GB训练20轮，压缩模型在MacBook Air M1上达到约2.14倍加速且参数减少48%。

## 🔗 开源与复现资源

- 数据相关资源：<https://huggingface.co/datasets/RobotsMali/jeli-asr> — 暂时无法访问
- 第三方资源：<https://ax.dev/> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 输入只有 32 小时班巴拉语音时，任务目标是什么？

本文输入是班巴拉语的语音到文本任务。白话说，就是把在马里地区采集的班巴拉语录音转写成文字。英文名是自动语音识别，缩写为 ASR。目标设备是离线嵌入式设备，具体评测载体是苹果 M1 芯片的笔记本电脑，要求模型更小更快，能在本地完成解码。

必须保留的信息是数据规模极小。论文使用的全部监督数据只有 32 小时，其中 50 分钟留作开发集，1 小时 20 分钟留作测试集，其余才用于训练。这个量级与英语大模型常用的上 10000 小时再训练完全不在一个数量级。

输出是转写文本序列，用词错误率衡量，英文为 Word Error Rate，缩写为 WER，数值越低越好。论文还同时报告参数量和每秒解码词符数。学习依赖上，先要理解编码器解码器结构中解码器主导自回归延迟，再理解压缩必须在小数据下保住性能，最后才能进入具体的融合与嵌入压缩操作。

本解读只讲论文实际做的班巴拉语 Whisper-base 压缩，不扩展到其他语言的效果承诺。后续所有加速比和体积数字都以该任务和该测速协议为前提。

### 已有路线为什么在小语种下难以直接套用？

第一条路线是深编码器浅解码器。白话说，就是编码器保持较深以充分理解语音，解码器做得很浅以减少逐词生成的步数。英文可记为 deep encoder, shallow decoder。论文借鉴了这类思想，决定主要压缩解码器，但不同之处在于前人多从零训练，而本文从已预训练的 Whisper 出发做压缩。

第二条路线是蒸馏版 Whisper，英文为 Distill-Whisper。它把大型 Whisper 解码器的 32 层中的 30 层删掉，再用 21000 小时语音做序列级知识蒸馏恢复性能。论文引用该数字的目的不是复现它，而是说明小语种拿不出这么多数据，因此不能照搬先删层再大数据重训的流程。

第三条路线是模型融合。白话说，就是把多个模型或多个层的权重平均成一个。论文提到前人有用流形对齐后再融合的做法，但本文选择更简单的做法，直接对相邻层做加权平均，依据是相邻层激活相似。

第四条路线是词表剪枝。白话说，就是把目标语言用不到的词符从嵌入矩阵中删掉。论文明确拒绝这条路线，理由是班巴拉语说话人频繁在法语或英语之间切换，即代码切换，英文为 code-switching，删词会导致切换来的外语词无法生成。

第五条路线是低秩分解。白话说，就是把大矩阵拆成两个小矩阵相乘。论文采用对激活敏感的分解，并用基于梯度的特征蒸馏训练低秩嵌入，而不是只做 1 次奇异值分解。

### 为什么只压解码器，不压编码器和词表？

问题可以拆成延迟结构、参数结构和语言现象 3 个约束。延迟结构上，编码器对一句话只运行 1 次，解码器对每个生成的词符都要运行 1 次并通过交叉注意力查询编码器。因此在离线自回归解码中，解码器层数直接决定步数级延迟。论文据此把压缩对象限定为解码器，编码器保持 6 层不变。

参数结构上，小尺寸 Whisper 的输入输出共享嵌入矩阵很大。论文指出在 Whisper-tiny 中该矩阵占总参数的 51%，原因是多语言大词表。Whisper-base 的隐藏维度是 384，这个矩阵同样是压缩的重点。

语言现象上，班巴拉语正字法不如英语标准化，论文报告的 WER 基线本身就偏高。同时说话人频繁代码切换，意味着不能用删词符的方式缩小矩阵，否则切换片段的建模能力会丢失。

所以问题不是简单地把模型变小，而是要在保留全词表生成能力的前提下，同时减少解码步数和嵌入参数，并且只用 32 小时数据完成恢复训练。这就排除了大数据重训和词表删除两条捷径。

### 两步压缩如何沿着一个样本走通？

先沿一个样本走完全流程。输入是一段班巴拉语音频和对应的转写文本。音频同时送入冻结教师编码器和可训练学生编码器，得到两路声学表示。转写文本同时送入教师 6 层解码器和学生 3 层解码器。学生每一层都由教师相邻两层的参数加权平均初始化，然后在训练中更新。

两路解码器都通过交叉注意力读取各自编码器的表示，最终输出词符分布。训练目标同时看真实标签和教师分布，测试时只用学生链路生成转写。

下图是第一步层融合的结构总览，左侧为冻结教师链路而右侧为可训练学生链路，中间为两两合并关系而顶部为联合损失，值得在读方法前先建立整体位置感。

> **看图路径：** 1. 先从底部音频波形向上看，确认同一音频同时送入左侧冻结教师编码器和右侧可训练学生编码器；2. 再看中间蓝色六层与绿色三层的连线，确认每两层教师层经加号汇入一个学生合并层；3. 接着看顶部损失箭头，确认交叉熵与蒸馏损失同时从两路解码器输出汇合

[![原论文 Figure 1：Fusion de couches dans le décodeur de Whisper : chaque couche étudiante est une moyenne pondérée…](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/jep-2026/0fe6b11d98d1/figure-1.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/jep-2026/0fe6b11d98d1/figure-1.png)

*论文图 1。原论文 Figure 1：“Fusion de couches dans le décodeur de Whisper : chaque couche étudiante est une moyenne pondérée de deux couches consécutives du modèle enseignant, puis entraînée avec une perte…”。*

该图显示底部音频向上分出两路，左侧灰色大框标注冻结教师编码器，右侧标注可训练学生编码器，中间蓝色 6 个小框为教师第 1 至第 6 层，绿色 3 个小框为学生合并层，合并关系为第 1 与第 2 层合并、第 3 与第 4 层合并、第 5 与第 6 层合并，顶部同时引出交叉熵与蒸馏损失。这种画法把冻结与可训练、6 层与 3 层的对应关系 1 次讲清。

**层融合 × 层删除：** 层删除的分工是直接丢掉若干解码器层以减少深度和计算，层融合的分工是把相邻两层的参数按加权平均合成为一个新层再继续训练，二者搭配比较的理由是相邻层激活相似时直接删除会造成表示断裂而融合保留了两层的信息起点，组合意义是用可训练的合并初始化代替从零恢复，使小数据蒸馏更容易接住教师分布。

**编码器 × 解码器：** 编码器的分工是对整句音频做 1 次前向得到声学表示，解码器的分工是逐词符自回归生成并反复查询编码器表示，二者搭配的理由是离线解码时解码器被调用次数与输出长度成正比因而主导延迟，组合意义是只压缩解码器而保持编码器不变，用最小改动换取最大的逐步加速比。

第二步在第一步得到的 3 层解码器基础上，把共享的输入输出嵌入矩阵替换为低秩版本。输入侧把词符索引映射为低维再升维，输出侧把解码器隐状态先压缩再映射到全词表，保持词表尺寸不变。训练时同样有交叉熵和特征级蒸馏约束，使低秩表示逼近原稠密表示的激活行为。两步的共同点是都不删除生成能力，只改变参数的组织形式，再靠小数据蒸馏恢复。

### 层融合与低秩嵌入各自改变了什么？

层融合操作的对象是解码器层的全部参数。白话说，Transformer 的一层包含自注意力、前馈网络、交叉注意力以及层归一化等权重，融合就是把两层的同位置权重按系数平均。记第 i 层参数为对应层的参数向量，相邻下一层为第 j 层，合并层为加权平均结果，公式为 α 乘第 i 层加 β 乘第 j 层再除以 α 加 β 之和。其中 α 控制下层贡献，β 控制上层贡献。Whisper-base 解码器原来有 6 层，按第 1 与第 2、第 3 与第 4、第 5 与第 63 对合并，得到 3 层学生解码器。论文的贝叶斯搜索发现 α 应保持较小，意味着上层权重应占更大比重。

下图是第二步嵌入低秩压缩的结构总览，左右仍是教师与学生双链路，但焦点从层数变为嵌入矩阵，适合对照第一步理解压缩位置的变化。

> **看图路径：** 1. 先对照顶部图例确认蓝色方块为冻结稠密嵌入而绿色沙漏为可训练低秩嵌入；2. 再沿底部转写框向上看输入嵌入分支，确认教师与学生各有一条输入路径并有特征距离约束；3. 接着看顶部输出嵌入分支，确认解码器输出经各自嵌入矩阵后同样汇入联合损失

[![原论文 Figure 2：Suppression de têtes (head shearing) des embeddings de Whisper via une décomposition de faible rang.](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/jep-2026/0fe6b11d98d1/figure-2.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/jep-2026/0fe6b11d98d1/figure-2.png)

*论文图 2。原论文 Figure 2：“Suppression de têtes (head shearing) des embeddings de Whisper via une décomposition de faible rang.”。*

该图左侧仍是冻结教师编码器加冻结教师解码器，右侧是可训练学生编码器加可训练学生解码器，区别在于解码器上下各有一个嵌入模块。蓝色方块为冻结稠密嵌入，绿色沙漏为可训练低秩嵌入，底部转写同时进入两侧输入嵌入并有特征距离约束，顶部输出嵌入同样汇入联合损失，右侧虚线注明输入输出共用低秩矩阵。这种对称画法说明监督既来自最终词符，也来自中间嵌入激活。

**低秩分解 × 特征蒸馏：** 低秩分解的分工是把大词表嵌入矩阵 E 近似为 E1 乘 E2 两个瘦矩阵以减少参数，特征蒸馏的分工是用教师稠密嵌入的输入输出激活作为监督信号拉住学生低秩嵌入的表示，二者搭配的理由是纯奇异值分解只保重构误差不保任务可区分性，组合意义是在压缩多语言词表冗余的同时保留单语言加代码切换所需的表示方向。

**词表剪枝 × 嵌入压缩：** 词表剪枝的分工是删掉目标语言用不到的词符行以直接缩小矩阵，嵌入压缩的分工是保留全部词符但把每行表示压到低维子空间，二者搭配比较的理由是班巴拉语常混用法语或英语词而删词会造成域外词无法生成，组合意义是否定剪枝而选择低秩保留全词表，用参数共享方式处理代码切换风险。

需要强调的是，融合不是拼接也不是选一层丢一层。拼接会增加维度，选一层会丢失另一层的信息。加权平均保持了层输入输出维度不变，因此学生层可以直接放入原解码器堆叠中继续训练，这是该方法可复述的关键实现细节。嵌入侧同样保持词表维度不变，只是中间经过低维瓶颈。

### 低秩嵌入如何保持全词表生成？

嵌入矩阵记为 E，尺寸为词表大小 V 乘隐藏维度 h。Whisper-base 的 h 为 384。低秩分解把它近似为 E1 乘 E2，其中 E1 是 V 乘秩 r，E2 是 r 乘 h，且 r 远小于 V 与 h 的最小值。论文取 r 为 96，与 Whisper-tiny 的规模对齐，秩压缩倍数为 4 倍。输入时词符索引先查 E1 的对应行得到 96 维向量，再乘 E2 升到 384 维。输出时解码器输出先乘 E2 的转置再乘 E1 的转置，得到全词表上的打分，因此词表没有被删除，法语或英语切换词仍有输出位置。

训练目标包含三项。第一项是学生任务交叉熵。第二项是输入侧特征距离，比较原嵌入查表结果与低秩查表结果。第三项是输出侧特征距离，比较原输出投影与低秩输出投影。距离函数由平均绝对误差加余弦相似度的负对数 sigmoid 组成，兼顾数值接近和方向一致。

论文称该分解对激活敏感，含义是低秩权重不是 1 次性分解固定，而是通过上述特征蒸馏用梯度继续训练，使其在真实班巴拉数据激活下逼近教师行为。例子仅为帮助理解：可以把 E1 看作词符的压缩编号本，E2 看作编号本到语义方向的展开表，蒸馏就是让学生编号本在实际语句中指到与教师相近的方向。

### 冻结谁、训练谁、损失从哪里来？

训练分 3 个阶段，冻结与更新关系必须分清。最开始是基线微调阶段，把 73M 参数的 Whisper 在班巴拉数据上微调 20 个轮次，学习率为 5 乘 10 的负 5 次方，硬件为单张 A100 显存 80 GB。这个微调后的模型既作为后续压缩的起点，也作为蒸馏中的教师。第一步融合训练中，教师编码器和教师解码器全部冻结，学生编码器和学生 3 层解码器可训练。监督来自两处，一处是学生对真实转写的交叉熵，另一处是学生输出分布与教师输出分布之间的标准 KL 散度，权重为 λ 和 γ，并使用了可学习的温度系数。融合系数 α 和 β 通过贝叶斯优化单独搜索，目标是开发集 WER 最小，工具为 Ax 库，迭代 30 次。

第二步嵌入训练中，教师侧稠密嵌入冻结，学生侧低秩嵌入可训练，损失为交叉熵加输入输出特征距离。论文未报告优化器类型、批量大小、学习率调度以及 λ 和 γ 的具体最优数值，这是复现时需要补记的缺项，不能从模型名称推定。

下图是 α 与 β 搜索结果的可视化，横轴为下层权重而纵轴为上层权重，颜色为词错误率，读图时应先看坐标含义再看颜色趋势，该图是理解上层为主结论的直接依据。

> **看图路径：** 1. 先确认横轴为下层权重 α 而纵轴为上层权重 β 且右侧颜色条为词错误率；2. 再沿横轴从左向右观察颜色由深紫变黄的变化，确认 α 增大时误差明显上升；3. 接着沿纵轴上下比较，确认 β 在较大范围内仍可保持深色低误差区

[![原论文 Figure 3：Choix des valeurs de α et β.](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/jep-2026/0fe6b11d98d1/figure-3.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/jep-2026/0fe6b11d98d1/figure-3.png)

*论文图 3。原论文 Figure 3：“Choix des valeurs de α et β. Les résultats de la recherche bayésienne d’hyperparamètres suggèrent que la seule contrainte importante est que α doit rester faible.”。*

该图显示左侧 α 接近零的纵向条带为深紫色低误差区，右侧 α 增大到 6 至 10 时变为黄绿色高误差区，而 β 从 0 到 10 的变化在左侧仍可保持低误差。论文据此总结的约束是 α 必须保持较小，β 相对不敏感。这支持了上层为主的合并策略，也说明搜索空间可以大幅缩小。

**交叉熵损失 × 知识蒸馏损失：** 交叉熵损失的分工是让学生对真实转写文本的预测分布对准人工标注，知识蒸馏损失的分工是让学生的输出分布对准冻结教师的输出分布，二者搭配的理由是小数据下只学硬标签容易过拟合且丢失教师的类间关系，组合意义是以加权和同时获得任务正确性和教师平滑先验，权重由超参数搜索决定。

重置时机方面，论文是先融合再训练，然后独立地对嵌入做低秩替换再训练，没有报告是否把两步联合端到端再优化 1 次。因此复现时应按先微调基线、再融合蒸馏、再嵌入蒸馏的顺序执行，不要自行合并为一步。

### 数据、基线、指标与测速条件是什么？

数据来自公开的班巴拉语料，论文正文脚注给出地址为 RobotsMali 的 jeli-asr 数据集。本次收到的资源核查显示该数据集链接本次未能确认可达，因此当前不能写该数据已公开可用，只能说论文标注了该来源，复现前需自行确认可达性与版本划分。划分为训练约 30 小时出头，开发集 50 分钟，测试集 1 小时 20 分钟。超参数搜索时还用了部分抽样，即每次用 30% 训练数据训练、用 60% 开发集评估，共 30 轮，这种抽样是为了节省搜索成本，正式训练仍用全量训练集。

基线包括微调后的 Whisper-base、融合后模型、融合加嵌入压缩后模型，以及同参数量级的 Whisper-tiny 作为速度对照。指标方向为 WER 越低越好，速度为每秒词符数越高越好，参数量越小越好。测速条件明确为 MacBook Air M1 离线解码，对每个测试语句解码 256 个词符、批量为 10 的设置下计时。

论文在摘要写 2,15 倍、在正文多处写 2,14 倍，两处小数不一致，应视为原文内部表述冲突，复现时以自己实测为准，不自行取舍。实现细节中贝叶斯优化工具来自 Ax，资源核查显示该链接当前可用，状态码为 200，可作为工具可达的依据。

### 主结果在同等测速下保住了多少性能？

比较问题是两步压缩相对微调后基线，在相同 M1 测速协议下分别付出多少精度代价，又获得多少体积与速度收益，公平条件是同一班巴拉测试集与同一解码设置，指标方向为词错误率越低越好。

| 条件 | 指标 | 基线 | 融合后 | 最终压缩 |
| --- | --- | --- | --- | --- |
| 同一班巴拉测试集 | 词错误率 | 33,11 % ± 2,41 % | 34,77 % ± 2,44 % | 36,49 % ± 2,47 % |

表后解释需要同时看到收益与代价，融合阶段词错误率从基线升至融合后水平但置信区间高度重叠，论文称统计上难以区分，这支持了融合初始化的有效性。最终压缩阶段词错误率进一步上升，但相对基线仍保留约九成性能表述成立，应理解为错误率意义上的近似保留而非准确率直接相减。未胜出项是最终模型并未在精度上超过基线，任何只看加速比而忽略词错误率上升的说法都是不完整的。边界是班巴拉正字法不标准导致基线本身偏高，该结论不能直接推广到英语等正字法稳定的语言。

### 为什么选择相邻层合并，而不是随机删层？

待验证的假设是激活相似的层合并后损伤更小。论文用验证集前向得到各层激活并计算两两相似度，热力图用于支撑相邻合并的选择。读图前应确认对象是 6 层解码器层间相似度，不是训练曲线，数值含义为相似度越高越适合合并，该图是理解合并策略合理性的关键证据。

> **看图路径：** 1. 先确认横轴与纵轴均为第 1 至第 6 解码器层且对角线为自身相似的最亮格；2. 再观察紧邻对角线的格子颜色，确认相邻层对的相似度高于远距离层对；3. 接着对比首尾层交叉格，确认距离最远的层对相似度最低呈深色

[![原论文 Figure 4：Visualisation des similarités d’activation entre toutes les paires possibles de couches du décodeur.](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/jep-2026/0fe6b11d98d1/figure-4.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/jep-2026/0fe6b11d98d1/figure-4.png)

*论文图 4。原论文 Figure 4：“Visualisation des similarités d’activation entre toutes les paires possibles de couches du décodeur.”。*

该图为 6 乘 6 相似度矩阵，对角线最亮表示自身相似为最高，紧邻对角线的格子明显亮于远离对角线的格子，而首尾层交叉格呈深色。这支持了相邻层激活更相似因而更适合合并的判断，但论文也承认最优合并子集需要专用搜索，因计算限制未做穷举。作为反证，论文比较了随机删除 3 层的对照，报告融合收敛更快且更稳定，而随机删除方差大且高度依赖删掉哪几层。

比较问题是体积与速度收益是否来自同一部位，公平条件仍是同一 M1 测速协议，指标方向为参数越小越好而速度越高越好，下表把原文直接报告的阶段性收益整理为可对照形式。

| 模型阶段 | 参数量 (M) | 速度 (tokens/s) | 参数减少 | 加速比 |
| --- | --- | --- | --- | --- |
| Whisper-base 基线 | 73 | 66,57 | 基线 | 基线 |
| 仅融合层 | 60 | 102,24 | 18 % | 1,54× |
| 融合加嵌入压缩 | 38 | 142,82 | 48 % | 2,14× |

表后解释应区分两种加速来源，仅融合阶段参数只减 18 % 却已快 1,54 倍，说明减少自回归步数比减少参数更直接。加入嵌入压缩后参数减少达 48 %，速度进一步升至 2,14 倍，且在相近参数量下快于 Whisper-tiny 的 116,24 每秒，原因归于 3 层解码器加低秩嵌入的结构不同于 tiny 的 4 层加大嵌入。但代价同样明确，最终词错误率高于基线，且论文未报告不同语句长度下的分段延迟，因此总体更快不等于每句都快同样倍数。更强的穷举对照需要组合数级训练量，实践中不可行，因此随机删除不能作为可部署策略，只作为说明稳定性的参照。

### 哪些验证还没有做，不能直接下结论？

第一，超参数的泛化性尚未验证。α 与 β 的最优值是在班巴拉开发集上搜到的，且论文结论只是 α 应小，没有给出每对合并层各自的最优值。未来工作提到可为每层学习专用权重，但当前结果不能保证换一个语言仍是同一组权重最优。

第二，融合函数的形式尚未充分探索。当前只是加权平均，更复杂的融合方法可能更好，但论文未实际测试，因此不能说加权平均是最优融合。第三，嵌入秩的选择单一。论文只报告 r 为 96 即 4 倍压缩的结果，没有给出秩与词错误率的权衡曲线，不能推断更小秩 1 定可行。

第四，统计与成本报告不完整。虽然给出了词错误率的置信区间，但未说明区间计算方法，也未报告训练时长、能耗和推理内存占用。训练在 A100 上完成，推理在 M1 上测量，两者硬件不同，训练成本与部署收益应分开讨论。

第五，数据可达性存在缺口。本次核查中数据集链接为暂时不可达，复现前必须重新确认语料版本和划分，否则同样的 32 小时数字也可能对应不同切分。

### 要复现这套流程，先做什么、记什么？

复现顺序建议按论文的 3 段式执行。先微调 Whisper-base 得到教师，记录 20 轮、学习率、随机种子和开发集词错误率，确保基线接近原文水平再往下走，否则后续压缩的相对保留率无从谈起。接着做层融合，用 α 小 β 大的初始化合并第 1 与第 2、第 3 与第 4、第 5 与第 6 层，再用交叉熵加 KL 蒸馏训练学生编码器与解码器，同时用 Ax 做 30 轮贝叶斯搜索并完整记录每次的 α、β、温度和开发集词错误率，不要只记最优值。

然后把共享嵌入替换为秩 96 的低秩版本，用交叉熵加输入输出特征距离继续训练，记录平均绝对误差与余弦两项各自的变化，以判断方向对齐是否起作用。测速时必须复刻论文条件，即 M1 离线、每句解码 256 词符、批量 10，并同时报告参数量、每秒词符数和词错误率，避免只报加速比。

工具层面，Ax 链接本次确认可用，可直接使用。数据层面，论文标注的 jeli-asr 链接本次未能确认可达，需先解决下载与划分对齐，并保留语料校验和。论文未给出代码与权重可下载的直接证据，因此应把本研究当作方法可复现但产物不可直接下载的类型，缺失的优化器、批量和调度需在复现报告中明确标为自选。

### 何时值得尝试这套先融合后压嵌入的路线？

当任务同时满足 3 个条件时值得尝试。第一，部署瓶颈在自回归解码步数而非单次编码，此时把 6 层压到 3 层的收益最大。第二，词表很大但目标场景存在代码切换，不能删词符，此时低秩保留全词表的方案比词表剪枝更安全。第三，再训练数据只有几十小时，无法承受删层后从零恢复，此时用加权平均保留两层信息再蒸馏，比随机删层更稳定。

反之，如果数据量达到上 10000 小时，或者目标语言正字法稳定且无切换，或者设备瓶颈在内存带宽而非解码步数，则应重新评估其他路线。回到初学者的复述要点，记住两句话即可。融合解决的是深度减半不断裂，嵌入压缩解决的是词表不删而变瘦。两步都依赖冻结教师提供软目标，小数据的恢复能力来自教师先验而非数据规模本身。

未来的补验证应包括分层专用融合权重、不同秩的权衡曲线、分长度延迟统计，以及在第二个低资源语言上的重复实验，以检验该流程的可迁移性。只有补齐这些验证，才能把单语言 1 次成功的报告升级为可复用的压缩流程。

## 📐 原文公式与排版

以下展示论文原页中的数学表达区域，保留原始上下标、分式和符号排版。区域序号仅用于本文导航，不是论文公式编号。

[![原文数学表达区域 1，PDF 第 4 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/jep-2026/2ab7021e344c/figure-1.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/jep-2026/2ab7021e344c/figure-1.png)

区域 1 · [查看论文原页](https://www.isca-archive.org/jep_2026/sy26_jep.pdf#page=4)

[![原文数学表达区域 2，PDF 第 4 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/jep-2026/2ab7021e344c/figure-2.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/jep-2026/2ab7021e344c/figure-2.png)

区域 2 · [查看论文原页](https://www.isca-archive.org/jep_2026/sy26_jep.pdf#page=4)

[![原文数学表达区域 3，PDF 第 5 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/jep-2026/2ab7021e344c/figure-3.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/jep-2026/2ab7021e344c/figure-3.png)

区域 3 · [查看论文原页](https://www.isca-archive.org/jep_2026/sy26_jep.pdf#page=5)

[![原文数学表达区域 4，PDF 第 5 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/jep-2026/2ab7021e344c/figure-4.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/jep-2026/2ab7021e344c/figure-4.png)

区域 4 · [查看论文原页](https://www.isca-archive.org/jep_2026/sy26_jep.pdf#page=5)

另有 3 个候选区域因边界不明确或图片数量、尺寸限制未展开；请[查看完整论文](https://www.isca-archive.org/jep_2026/sy26_jep.pdf)中的原始排版。

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。
- 评分规则：type-aware-v1
- 评分模型：muse-spark-1.3-contributor
- 评分请求协议：openai_responses

---

[← 返回 jep-2026 论文汇总](/posts/conference-jep-2026/)
