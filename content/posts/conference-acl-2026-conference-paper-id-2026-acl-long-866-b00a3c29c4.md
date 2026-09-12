---
title: "SEE: Signal Embedding Energy for Quantifying Noise Interference in Large Audio Language Models"
date: 2026-09-12
draft: false
description: "论文针对大音频语言模型在噪声下语义推理不稳定的问题，提出在模型内部嵌入空间度量噪声投影能量的 SEE 并用减去噪声子空间分量的 SEEN 做免训练缓解，最强证据是 SEE 与生成成功率呈约 0.98 负相关，而代价是需要对齐的干净与纯噪声标定数据且只能去除可分离干扰不能补回已丢失语义。"
tags: ["信号处理", "统计分析", "音频大模型", "鲁棒性", "音频问答"]
categories: ["acl-2026 论文"]
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_paper_id: "conference:acl:2026:conference-paper-id:2026.acl-long.866"
paper_digest_source_kind: conference
paper_digest_conference_id: "acl-2026"
paper_digest_conference_record_url: "https://aclanthology.org/2026.acl-long.866/"
paper_digest_conference_pdf_url: "https://aclanthology.org/2026.acl-long.866.pdf"
paper_digest_api_reader_contract: "beginner-researcher-v3"
paper_digest_api_reader_article_sha256: "e0062656d43fd66b9d20a378ab7a1025846432cf45444bc0f5107bb78ed1069d"
paper_digest_api_reader_plan_sha256: "fbdac63ee48674d7babbea6206876ac31ba46a80aea43862eaec36c36e76a684"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings-v4"
paper_digest_api_reader_source_bindings_sha256: "3b5685d459b9542edf9e7e1f283fae5134ce7fdc28bd1b7b59f1891bb7b34f34"
paper_digest_api_reader_source_table_count: 4
paper_digest_api_reader_source_formula_count: 0
paper_digest_api_reader_structured_artifacts_sha256: "b97589ce148b9d84fb87d4fcc4dea4e734b119ac7712e8298f3e12d29372026f"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity-v1"
paper_digest_api_reader_author_identity_sha256: "40721767c0f6f6053dd3fef487275af233b1b1be9d920eda46111485fa8c45e4"
paper_digest_api_reader_author_count: 8
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity-v1"
paper_digest_api_reader_resource_identity_sha256: "745a3a327d352ea012093eb13e47c324e2a30fc7f311394a4adf926bb30f1e75"
paper_digest_api_reader_resource_count: 0
paper_digest_api_reader_decision_projection: "api-reader-decision-projection-v2"
paper_digest_scoring_contract: "api-scoring-audit-v2"
paper_digest_taxonomy_contract: "paper-taxonomy-flat-tags-compat-v1"
paper_digest_taxonomy_selection_contract: "paper-taxonomy-selection-v1"
paper_digest_taxonomy_registry_version: "paper-taxonomy-v1"
paper_digest_taxonomy_registry_sha256: "15c82a567ce5a55dc1175684ed08b64c158558639d9c8fb822c9587ec32a8778"
paper_digest_taxonomy_concepts: [{"facet":"method","id":"method.signal-processing","label":"信号处理"},{"facet":"method","id":"method.statistical-analysis","label":"统计分析"},{"facet":"model_family","id":"model_family.audio-language","label":"音频大模型"},{"facet":"research_focus","id":"research_focus.robustness","label":"鲁棒性"},{"facet":"task","id":"task.audio-question-answering","label":"音频问答"}]
paper_digest_primary_task: "音频问答"
paper_digest_primary_method: "信号处理"
paper_digest_score: 6.7
paper_digest_rank_bucket: "前50%"
paper_digest_document_type: "方法研究"
paper_digest_conference_structure: replayable-pdf-layout-v1
---

# 📄 噪声不在波形里，而在嵌入的方向上：SEE 量化与 SEEN 中和

> 英文题目：*SEE: Signal Embedding Energy for Quantifying Noise Interference in Large Audio Language Models*

> 会议身份：`conference:acl:2026:conference-paper-id:2026.acl-long.866`


> ✅ 来源为官方会议 PDF；表格与 Figure 按原文证据绑定。PDF 公式以原页区域图片展示，未冒称作者原始 TeX。

> 会议来源：[官方记录](https://aclanthology.org/2026.acl-long.866/) · [官方 PDF](https://aclanthology.org/2026.acl-long.866.pdf)

标签：#信号处理 #统计分析 #音频大模型 #鲁棒性 #音频问答

评分：**6.7/10** | 创新 1.5/2 | 技术严谨 1.0/1.5 | 实验充分 1.2/1.5 | 清晰度 0.7/1 | 影响力 1.0/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 1.0/1.5

排名：前50% | 文档类型：方法研究

## 👥 作者与机构

- Yuanhe Zhang：机构信息未能从会议 PDF 纯文本可靠映射
- Jiayu Tian：机构信息未能从会议 PDF 纯文本可靠映射
- Yibo Zhang：机构信息未能从会议 PDF 纯文本可靠映射
- Shilinlu Yan：机构信息未能从会议 PDF 纯文本可靠映射
- Liang Lin：机构信息未能从会议 PDF 纯文本可靠映射
- Zhenhong Zhou：机构信息未能从会议 PDF 纯文本可靠映射
- Li Sun：机构信息未能从会议 PDF 纯文本可靠映射
- Sen Su：机构信息未能从会议 PDF 纯文本可靠映射

## 📌 核心摘要

大型音频语言模型以连续音频帧为输入生成文本回答，设备与环境噪声会扭曲波形并引发语义幻觉，仅靠任务准确率难以定位干扰来源。离线标定阶段对干净语义集与50段纯噪声集的层级池化激活做奇异值分解并筛选噪声独有方向构建噪声子空间，其基矩阵输出进入下一步。在线评估阶段将输入激活投影到该子空间并按归一化能量计算信号嵌入能量得到SEE，单调反映噪声强度。能量中和阶段由激活减去重构的噪声分量后继续前向推理得到净化输出。与波形级语音增强只优化声学保真不同，该方法直接在嵌入空间度量并消除语义偏置，具有可解释的探针意义。在Music任务SNR=5条件下，SEEN的余弦相似度分数为0.8636，高于STFT的余弦相似度分数0.7610。该结论适用边界受限于可采集配对纯噪声的中低多变环境与所测问答转写任务，对强破坏信息缺失与长时非平稳干扰尚未验证。实验部署硬件为配备NVIDIA RTX 5090的服务器并以16kHz单声道输入运行，原文未细化训练成本与延迟差异。

## 🔗 开源与复现资源

本次未形成可展示的已核验资源记录，开放状态尚未核实。
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 输入是什么，目标是什么，本文要解决哪种失败？

本文的输入是一段可能被设备采样瑕疵和环境噪声污染的音频，目标是让大音频语言模型按指令完成音乐、声音、语音问答或语音转写。输出是模型生成的文本答案，评价时主要看在噪声下输出与干净条件下输出的一致程度，也就是生成成功率。必须保留的信息是噪声强度、任务类型、模型层号和投影能量，因为结论依赖于表示层而不是波形层。

初学者可以这样理解流程：先把音频送入编码器得到逐帧激活，再经过语言主干生成答案。噪声同时污染波形和内部表示，严重时会让模型把雨声听成对话之类的语义错误。论文把这种错误称为语义层面的干扰，而不是单纯的字错率上升。

**大音频语言模型 × 语义幻觉：** 大音频语言模型负责把连续音频帧映射到语义空间并按指令生成文本，语义幻觉指噪声把这种映射推偏后模型编造出与音频无关的答案，二者搭配的原因是本文不把噪声只看成波形失真，而是看成嵌入层对语义方向的系统性偏移，组合意义在于后续所有量化和缓解都要在表示层验证是否真的减少了误判。

本文开场就强调车载助手和在线会议等实时场景，训练时条件相对理想，部署时却充满非平稳噪声。已有工作多用大规模任务评测间接反映鲁棒性，难以定位干扰发生在哪里。它们也难以指导缓解，因此作者提出一个模型感知的内部判据。

判据的作用是先量化再缓解，而不是只报告任务分数下降了多少。这种先定位后干预的顺序是全文的学习主线。

### 同输入同目标的已有路线如何处理噪声？

第一条路线是传统语音鲁棒性。它处理同样的带噪语音输入，目标多是降低词错误率。手段包括多条件训练、数据增强和增强前端。

论文指出这类方法关注声学失配，评价停留在信号保真度。它没有直接保证大模型的指令跟随和逻辑一致性。因此声学指标变好不等于推理变对。

第二条路线是大音频语言模型本身。从结构看，它把预训练音频编码器与文本主干通过离散切分或跨模态适配器对齐。代表是有问答与推理一体化的端到端系统。

与级联流水线不同，它的错误可以从编码层一直传到生成层。因此波形前端的微小伪影也可能被放大为语义偏移。这是后文要重点检验的传导路径。

第 3 条路线是语音增强前端。从维纳滤波、谱减到时域卷积分离和生成式增强，目标都是提升信噪比或听感。论文的有源对照是短时傅里叶变换、小波变换、语音增强生成对抗网络和深度滤波类方法。

原文明确这些基线按各自原始论文的参数与流程实现，没有额外调参。教学例子是：把增强想象成先擦掉波形上的污渍，但擦拭本身可能留下新的划痕。模型看到的划痕方向与原来噪声不同，却同样会误导推理。

### 为什么不用信噪比或任务分数直接刻画噪声？

信噪比是物理量，它描述波形能量比，不描述模型内部哪一层、哪个方向被推偏。两个信噪比相同的样本可以有完全不同的语义影响。单看分贝数无法预测模型是否会答错。

任务分数是结果量，它需要大量评测才能得到。它把定位、编码、推理的误差混在一起，无法告诉研究者该在哪一层干预。

论文要解决的形式化问题是：给定一个音频输入，构造一个与生成质量单调相关的内部标量。使其在干净时稳定、在噪声增强时上升，并能跨噪声类型迁移。

再基于同一标量构造免训练的缓解操作，使标量下降的同时生成成功率回升。关键约束是不能改模型参数，不能依赖转写真值做监督。只能用对齐的干净请求集和纯噪声集做离线标定。

### SEE 与 SEEN 的全景：离线建方向，在线算能量做减法

方法分离线与在线 2 个阶段。离线阶段收集语义干净集与纯噪声集，逐层做平均池化形成两个矩阵。比较幅度和方向差异以定位噪声主导层，再对这些层做奇异值分解。

筛选出与语义主方向近似正交的噪声方向，组成噪声基。在线阶段对每个新输入把逐帧激活投影到噪声基上，按帧算相对能量。再跨保留层平均得到信号嵌入能量。

**信号嵌入能量 × 噪声子空间：** 噪声子空间负责给出模型内容易被干扰的方向集合，信号嵌入能量负责度量当前输入激活落在这组方向上的能量占比，二者搭配的原因是只有先离线固定一组与语义主方向近似正交的基，才能在线对任意输入算出可比的标量，组合意义是把难以比较的逐层激活差异压缩成随噪声强度单调变化的探针。

沿一个样本走一遍：带人声与交通噪声的问答音频进入编码器，在后部层得到帧数乘隐藏维度的激活矩阵。把它投影到该层噪声基上得到低维噪声坐标。计算噪声坐标能量占原激活能量的比例并跨层平均，得到该样本的分数。

若启用缓解，则把噪声坐标乘回基转置得到同尺寸干扰估计。再从原激活中减去后送入后续层，这样诊断与干预使用同一组方向。

下图是 3 条路线的总览，阅读时先看主路径再看结论气泡的差异。图中红色向上箭头表示能量升高，绿色向下箭头表示能量降低。

> **看图路径：** 1. 先从左到右看三栏主路径：直接输入、波形去噪后输入、嵌入层干预后输入；2. 再对比每栏下方羊驼表情与对话框结论的差异；3. 最后看每栏右上角 SEE 放大镜箭头向上还是向下

[![原论文 Figure 1：Motivation and overview of representation- level noise robustness in LALMs.](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/acl-2026/9463c9fd39e7/figure-1.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/acl-2026/9463c9fd39e7/figure-1.png)

*论文图 1。原论文 Figure 1：“Motivation and overview of representation- level noise robustness in LALMs.”。*

这张总览图把声学路线与表示路线的分叉点画清楚了。中栏的分叉在波形处，右栏的分叉在嵌入矩阵处。前者改善的是人耳或频谱指标，后者改善的是模型内部投影能量。

左栏噪声音频直接进入嵌入与深层模型，底部表情困惑。中栏先做语音去噪再进入模型，但仍把音频误判为对话并打叉。右栏在嵌入层面先度量再去掉噪声分量，对话框正确描述为师生交流并打勾。这为后文先建子空间再算能量最后做减法提供了总览。

### 方向如何分离，能量如何计算，减法如何执行？

先讲符号与输入。记模型有可观测的激活层，层号为层索引，输入音频为样本。某层激活是帧数乘隐藏宽度的矩阵。离线有语义集与噪声集，样本数记为帧集合规模。

每个样本先对时间维做平均池化，把变长帧序列压成一个向量。再跨样本堆成语义矩阵与噪声矩阵，平均池化抹掉了时序细节。这是后文局限中承认的近似。

**语义激活矩阵 × 噪声激活矩阵：** 语义激活矩阵负责汇总干净请求在某层的平均池化向量，噪声激活矩阵负责汇总纯噪声在同层的平均池化向量，二者搭配的原因是只有在相同层、相同池化方式下对比幅度和方向，才能定位噪声真正改变编码倾向的位置，组合意义是为后续奇异值分解提供可分解的配对输入。

定位噪声矩阵用两个互补量。幅度差异用差矩阵的弗罗贝尼乌斯范数，能量越大说明整体偏离越大。方向一致性用展平向量的余弦相似，能量越低说明方向越不一致。

分别对所有层求平均得到全局阈值，取同时超过幅度均值与方向均值的最早层作为起点。保留该层到最后一层用于监测，原文报告这类起点通常出现在模型后部。

噪声基提取对语义矩阵与噪声矩阵分别做奇异值分解，关注右奇异向量代表的隐藏空间方向。按奇异值大于阈值保留主导方向，再对每个噪声方向计算它与所有语义主方向的最大绝对余弦相似。

若小于 0.1 则视为噪声独有方向予以保留，这些方向按列拼成噪声基矩阵。阈值 0.1 是原文给定的默认超参数，抑制强度默认为 1。

下图展示离线标定与在线应用的数据流，阅读时先看上半部分再看下半部分。注意右上定位框与右下基提取框之间的箭头指向。

> **看图路径：** 1. 先沿上半部分看干净与噪声音频如何汇成逐层平均向量；2. 再看右上定位与右下基提取两个虚线框之间的数据流向；3. 最后看下半部分投影算分与投影相减两条支路如何分叉又汇入生成

[![原论文 Figure 2：Offline, we construct noise activation matrices, localize noise dominant layers, and extract…](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/acl-2026/9463c9fd39e7/figure-2.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/acl-2026/9463c9fd39e7/figure-2.png)

*论文图 2。原论文 Figure 2：“Offline, we construct noise activation matrices, localize noise dominant layers, and extract principal noise directions to form a noise subspace.”。*

上图上半部分展示离线标定：左右两侧干净与噪声音频进入嵌入层形成逐帧表示。经层平均得到向量，再堆成语义与噪声矩阵，右上框用减法与范数算幅度。用展平向量算方向一致性并求跨层平均以找起始层。

右下框用奇异值分解得到语义方向与噪声方向，再经方向比较筛选出噪声基。下半部分展示在线应用：输入音频的激活一路上行投影到噪声基算能量得到分数。另一路把投影重构为干扰估计并按系数减去得到中和后的激活，再送入后续层生成文本。两条支路共享同一基是理解全文的关键。

**信号嵌入能量 × 信号嵌入能量中和：** 信号嵌入能量负责诊断噪声分量有多强，信号嵌入能量中和负责把这部分分量从激活中减去，二者搭配的原因是它们共享同一组噪声基矩阵，前者是投影后算能量，后者是投影后重构再相减，组合意义是对齐缓解目标与度量目标，避免波形降噪那种声学变好但语义更偏的情况。

在线能量计算是对每帧先求投影向量二范数平方与原激活二范数平方之比。再对帧平均并加小常数保证数值稳定，最后跨保留层平均。中和操作是把激活乘基再乘基转置得到同尺寸干扰，再按强度系数相减。

系数为 1 是默认设置，超过 1 会引入反方向分量并带来新的语义扰动。这是超参数消融中明确报告的现象，也是复现时需要检查的边界。

### 没有梯度训练时，真正的计算与标定过程是什么？

本研究没有训练或微调任何大音频语言模型参数，也没有反向传播更新编码器与语言主干。所有模型权重保持冻结，所谓的构造只是用前向激活做统计与线性代数。

再用前向钩子在推理时改写中间激活，不能把这种冻结等同于确定性求解。因为生成仍受采样与噪声随机性的影响，冻结只说明参数不更新。

真实计算分 3 步。第一步是离线标定：用约 50 段纯噪声与配对干净请求在目标层提取激活。做平均池化、堆叠、范数比较与奇异值分解，得到保留层集合与每层噪声基。

第二步是在线评分：对测试音频做 1 次前向得到保留层激活，投影算能量。第 3 步是在线中和：同一前向过程中用钩子替换激活为减去干扰后的版本，再继续生成。

原文未报告用梯度学习基或用能量做正则训练，只在局限中把能量正则列为未来方向。因此不存在优化器、学习率或梯度路径需要交代，缺项是训练侧验证而非实现笔误。

### 在什么数据、模型、噪声与指标下比较？

模型覆盖 3 个大音频语言模型：千问系的音频全模态版本、MiniCPM 系的音频版本与 StepAudio 系的轻量版本。均为公开架构的既有权重，不做重训练，任务分 4 类：语音转写、语音问答、声音感知和音乐推理。

主要评测集是多模态音频理解基准与朗读语音库，问答用多选题并用正则抽取字母答案。转写用固定提示要求逐字听写，噪声分已知与未知，已知包括高斯白噪声与人群、机械、车辆 3 类环境声。

未知则另设动物、淋浴、风声等以检验迁移，合成时把噪声按信噪比混入干净音频。覆盖从高信噪比到负信噪比的多个档位，未标注实验默认用负 10 分贝。

问答与转写的样本量与敏感区间需要先交代，这是后文判断相关性与提升幅度的前提。音频统一重采样到 16000 赫兹单声道，模型以半精度与高效注意力运行。

| 实验要素 | 具体设置 | 样本量 | 关键区间 | 备注 |
| --- | --- | --- | --- | --- |
| 问答任务 | 多选抽取字母 | N = 300 | 全信噪比档 | 每条件统计量 |
| 转写任务 | 固定听写提示 | N = 100 | 全信噪比档 | 每条件统计量 |
| 标定噪声 | 纯噪声 50 段 | N = 300 | 参考电平 | 离线估计子空间 |
| 物理转折 | 成功率斜率 | N = 100 | ≈10 dB | 进入敏感区 |
| 噪声类型 | 高斯人群机械车辆 | N = 300 | 负 10 分贝默认 | 已知与未知对照 |

上表整理了数据量与关键区间，问答每条件 300 条、转写每条件 100 条以保证统计量。物理侧成功率在约 10 分贝以下斜率变陡，进入敏感区。这与后文能量急剧上升的区间对齐，支持能量捕捉了可导致失败的内部干扰。

下面第一张原表是跨噪声类型分离表，比较问题是干净与噪声的能量区间是否重叠。公平条件是同一任务下改变噪声类型，指标方向是能量越低表示干扰越小。

| Dataset | Method Gauss | Crowd | Machine | Traffic |
| --- | --- | --- | --- | --- |
|  |  |  |  | (%) |
| Clean | 0.35 | 1.32 | 1.30 | 1.17 |
| Clean | 0.67 | 2.12 | 2.47 | 1.85 |
| Clean | 0.66 | 3.12 | 3.54 | 3.28 |
| Noise | 1.63 | 4.79 | 6.74 | 4.14 |

该表列出不同任务与噪声下的能量值，干净行数值明显低于噪声行。且跨高斯、人群、机械、车辆 4 类都保持这种分离，表后需要强调的是这只是单调性与可分性的初步证据。真正的强度相关性与缓解收益要看后文散点与柱状对比，不能仅凭区间不重叠就断言因果。

### SEE 随噪声单调上升吗，与生成质量的相关有多强？

先看强度扫描。干净音频的能量在每个模型内保持稳定，跨音乐声音语音 3 类只有微小波动。这说明该指标对内容差异不敏感，箱线图显示随信噪比降低能量中位数右移。

物理侧的成功率随信噪比下降而下降，在约 10 分贝以下斜率变陡。这与能量急剧上升的区间对齐，支持能量捕捉了可导致失败的内部干扰。

**声学去噪 × 嵌入空间缓解：** 声学去噪负责在波形或频谱域压低噪声能量，嵌入空间缓解负责在模型隐藏表示中去掉噪声方向分量，二者搭配比较的原因是论文发现前者可能引入新的表示偏移而后者直接优化 SEE，组合意义是说明缓解要在模型感知的空间里评估，而不是只看信噪比或人耳听感。

下面整理核心相关性数字，比较问题是能量上升是否对应成功率下降。公平条件是同一模型同一任务下改变信噪比，指标方向是能量越低越好、成功率越高越好。

| 条件 | 指标 | 报告值 | 方向 | 适用对象 |
| --- | --- | --- | --- | --- |
| 全任务扫描 | 皮尔逊相关绝对值 | 0.98 | 越接近 1 越强 | 跨模型平均趋势 |
| 分格扫描下限 | 相关系数 | −0.96 | 负相关越强越好 | 各模型任务格 |
| 分格扫描上限 | 相关系数 | −1.00 | 负相关越强越好 | 各模型任务格 |
| 显著性 | P 值量级 | P ≪ 0.001 | 越小越可信 | 同上九宫格 |
| 缓解平均 | 准确率提升 | 6.7% | 越高越好 | SEEN 相对已有去噪 |

上表显示能量与成功率呈强负相关，分格相关系数落在负 0.96 到负 1.00 之间。且显著性远小于 0.001，平均相关达 0.98，缓解侧 SEEN 平均比已有去噪高 6.7%。

代价是附录指出当噪声已抹掉任务关键声学线索时，仅靠减去投影无法补回缺失内容。提升幅度受可恢复信息量上限约束，未胜出项是部分低信噪比下绝对恢复仍然有限。

下图是九宫格散点，阅读时先看行列布局再看散点走向。每格右上角的相关系数与显著性是判断强弱的关键。

> **看图路径：** 1. 先按行看三个模型、按列看音乐声音语音三类任务的九宫格布局；2. 再看每格横轴 SEE 增大时纵轴生成成功率的散点走向；3. 最后核对每格右上角相关系数与显著性标注的量级

[![原论文 Figure 3：SEE is negatively correlated with GSR, with a consistent trend observed across different task types.](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/acl-2026/9463c9fd39e7/figure-3.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/acl-2026/9463c9fd39e7/figure-3.png)

*论文图 3。原论文 Figure 3：“SEE is negatively correlated with GSR, with a consistent trend observed across different task types.”。*

该九宫格每格横轴为能量、纵轴为生成成功率百分比，蓝色散点随能量增大向右下走。橙色虚线为趋势线并带 95% 置信带，第一行千问系、第二行 StepAudio 系、第三行 MiniCPM 系。

列依次为音乐、声音、语音，每格右上角标注相关系数与 P 值，量级与上表一致。这种跨模型跨任务的一致走向是支持能量作为模型中心探针的主要证据，但仍是相关性证据而非因果证明。

### 传统去噪为何降不下 SEE，层选择与强度如何影响结果？

反证来自波形去噪。把去噪后音频再算能量，发现多数情况下能量不降反升。效果相当于额外增加了零分贝左右的噪声，余弦相似分析也显示增强后表示相似度常常更低。

这说明前端引入了原噪声之外的波形错位，雷达图把干净、两种噪声强度与 4 种去噪方法画在一起。去噪折线贴近噪声外圈而非干净内圈，直观呈现了声学目标与语义编码的错位。

层选择消融比较只用前三分之一、中三分之一、全部层与本文的后部保留层。前中部有效方向少、检测不稳定，用全部层则受早中层干扰导致变化幅度不稳。

只有后部保留层能稳定分离干净与噪声，这支持干扰主要在深层改变语义整合的判断。强度消融显示增大中和系数通常更有效，但超过 1 会引入反向分量并扰动语义。

下面整理缓解收益与保持性对照，比较问题是在可部署条件下哪种策略更划算。公平条件是同一噪声与同一任务下比较生成成功率，指标方向是噪声下越高越好、干净侧不掉点越好。

| 条件 | 指标 | 基线侧表现 | 本方法侧表现 | 比较含义 |
| --- | --- | --- | --- | --- |
| 噪声平均 | 准确率提升 | 已有去噪为基准 | 6.7% | 嵌入减法更有效 |
| 干净保持 | 性能下降 | 波形处理常掉点 | negligible | 不损伤正常请求 |
| 语义保真 | 定性判断 | 声学变好语义偏 | preserves semantic fidelity | 目标对齐 |
| 方向保护 | 阈值选择 | 放大易误伤 | does not harm normal requests | 需保护主方向 |
| 未恢复项 | 信息缺失 | 无法补回内容 | 提升受限 | 非万能修复 |

上表说明本方法的收益来自对准噪声子空间的减法，而代价主要是离线标定与阈值选择。若标定噪声与部署环境差异大，或池化丢掉关键时序与副语言线索，效果会打折。

未评测边界包括高度可变环境下难以采集纯噪声，以及对长帧序列逐帧抑制的累积误差。这些在原文局限中明确承认，不能把单调相关读成全部失败都可恢复。

下图是雷达图，阅读时先确认外圈标签再比较内外多边形。重点看去噪折线落在干净附近还是噪声外圈。

> **看图路径：** 1. 先确认雷达图外圈的模型与任务维度标签；2. 再对比干净小多边形与噪声大外圈多边形的相对大小；3. 最后看四种波形去噪折线是否回落到干净附近还是贴近噪声外圈

[![原论文 Figure 6：Effect of waveform denoising measured by SEE.](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/acl-2026/9463c9fd39e7/figure-6.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/acl-2026/9463c9fd39e7/figure-6.png)

*论文图 6。原论文 Figure 6：“Effect of waveform denoising measured by SEE. Many conventional denoisers fail to reduce SEE and can even increase it. Lower SEE indicates less noise-aligned interference.”。*

该雷达图外圈按模型与任务划分维度，径向为能量值。绿色小多边形为干净，粉色大外圈为强噪声，橙色虚线为中等噪声。4 条实线为不同波形去噪，可以看到去噪折线大多落在干净与强噪声之间偏外的位置。

尤其在 StepAudio 语音与声音维度上甚至超出中等噪声圈，说明它们没有把表示拉回干净附近。这与能量表与相似度表的结论互相印证，但同样只说明可测干扰被去除的程度。不等于生成错误被完全修复，缺失内容的上限仍然存在。

### 哪些条件不满足时结论会失效？

第一是信息条件。方法假设能从目标部署环境拿到对齐的干净请求与纯噪声录音。以估计稳定子空间，若环境噪声类别多变或难以单独采集。标定方向会不准，单一样本估计的奇异向量也可能不稳定。

原文指出类别单一或少数类别的环境更适合，高度可变环境会增加难度。这是复现前必须确认的采集前提，不是算法本身能自动克服的。

第二是表示近似。当前用平均池化把变长帧压成向量，可能低估时序破坏与副语言线索的影响。推理时虽逐帧评估可应对局部插入噪声，但对长序列上分散的小扰动累积仍难以完全逆转。

过度中和可能去掉任务相关信息，特别是在语义本已残缺时。此时加大减法强度并不能补回内容，反而可能引入新的偏移。

第三是证据边界。强相关不等于因果，能量可测与可恢复是两回事。原文明确 SEEN 只能去除噪声对齐分量，不能重建被抹掉的声学内容。

若模型本身对残缺输入缺乏鲁棒性，单靠表示减法提升有限。延迟、误判率与训练成本也未被承诺改善，总体趋势不等于每组每步都成立。

### 要复现先做什么，需要哪些超参数与检查点？

先准备数据与环境。收集目标场景的干净问答音频与同场景纯噪声各至少 50 段。按原文把音频重采样到 16000 赫兹单声道，模型以半精度运行。

任务提示要固定：多选只输出字母并用正则抽取，转写用固定听写提示。噪声按信噪比混合，问答每条件 300 条、转写每条件 100 条以保证统计量。

再做离线标定。对 3 个模型的指定后部编码层注册前向钩子，千问从约 23 层到末层。MiniCPM 从约 18 层到末层、StepAudio 从约 27 层到末层，按平均池化堆叠矩阵。

算幅度与方向均值找起始层，再做奇异值分解并以 0.1 为余弦阈值筛选噪声基。能量阈值比例取 0.95 左右，中和强度默认取 1，调大时要观察是否超过 1 后回落。

检查点包括：干净能量是否稳定且明显低于噪声，能量是否随信噪比单调上升。去噪基线是否出现能量不降反升，SEEN 是否在干净侧几乎不掉点而在噪声侧小幅稳定提升。

若任一步不满足，先检查层范围与噪声采集是否与部署一致。再检查池化与阈值，资源状态方面，本次未发现来源绑定且完成验证的公开代码与权重。不得声称代码模型或数据已公开，复现应按上述流程自行实现钩子与线性代数。

### 何时值得尝试，还需补哪项验证？

当部署环境噪声相对集中、能采到纯噪声，且观察到波形去噪后主观变干净但模型仍答错时。值得尝试这种表示层诊断，先用能量做探针判断失败是否来自噪声方向投影。

再用小强度中和验证能量下降是否带来成功率回升，若能量不高但仍答错。问题可能在语义理解本身，不应强行加大减法，否则可能误伤任务方向。

还需补的验证是把能量用作训练侧信号，例如在噪声增强下惩罚噪声对齐能量。或学习保留语义的嵌入增强模块，而不是只做推理时减法。

同时应补充跨采集设备、跨说话人与跨语言的迁移测试，以及对长时局部噪声的逐帧可视化。以确认方向筛选没有误伤任务线索，总体上，本文的价值在于提供了一个可复述的内部度量。

它把鲁棒性讨论从波形好坏推进到模型感知的方向与能量，并给出了对齐的缓解动作。对初学者而言，记住先定位方向再算能量最后做减法的顺序，比记住具体数值更重要。

## 📐 原文公式与排版

以下展示论文原页中的数学表达区域，保留原始上下标、分式和符号排版。区域序号仅用于本文导航，不是论文公式编号。

[![原文数学表达区域 1，PDF 第 4 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/acl-2026/ccfcd5735715/figure-1.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/acl-2026/ccfcd5735715/figure-1.png)

区域 1 · [查看论文原页](https://aclanthology.org/2026.acl-long.866.pdf#page=4)

[![原文数学表达区域 2，PDF 第 4 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/acl-2026/ccfcd5735715/figure-2.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/acl-2026/ccfcd5735715/figure-2.png)

区域 2 · [查看论文原页](https://aclanthology.org/2026.acl-long.866.pdf#page=4)

[![原文数学表达区域 3，PDF 第 4 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/acl-2026/ccfcd5735715/figure-3.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/acl-2026/ccfcd5735715/figure-3.png)

区域 3 · [查看论文原页](https://aclanthology.org/2026.acl-long.866.pdf#page=4)

[![原文数学表达区域 4，PDF 第 4 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/acl-2026/ccfcd5735715/figure-4.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/acl-2026/ccfcd5735715/figure-4.png)

区域 4 · [查看论文原页](https://aclanthology.org/2026.acl-long.866.pdf#page=4)

[![原文数学表达区域 5，PDF 第 4 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/acl-2026/ccfcd5735715/figure-5.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/acl-2026/ccfcd5735715/figure-5.png)

区域 5 · [查看论文原页](https://aclanthology.org/2026.acl-long.866.pdf#page=4)

[![原文数学表达区域 6，PDF 第 4 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/acl-2026/ccfcd5735715/figure-6.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/acl-2026/ccfcd5735715/figure-6.png)

区域 6 · [查看论文原页](https://aclanthology.org/2026.acl-long.866.pdf#page=4)

[![原文数学表达区域 7，PDF 第 4 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/acl-2026/ccfcd5735715/figure-7.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/acl-2026/ccfcd5735715/figure-7.png)

区域 7 · [查看论文原页](https://aclanthology.org/2026.acl-long.866.pdf#page=4)

[![原文数学表达区域 8，PDF 第 4 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/acl-2026/ccfcd5735715/figure-8.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/acl-2026/ccfcd5735715/figure-8.png)

区域 8 · [查看论文原页](https://aclanthology.org/2026.acl-long.866.pdf#page=4)

[![原文数学表达区域 9，PDF 第 4 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/acl-2026/ccfcd5735715/figure-9.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/acl-2026/ccfcd5735715/figure-9.png)

区域 9 · [查看论文原页](https://aclanthology.org/2026.acl-long.866.pdf#page=4)

[![原文数学表达区域 10，PDF 第 5 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/acl-2026/ccfcd5735715/figure-10.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/acl-2026/ccfcd5735715/figure-10.png)

区域 10 · [查看论文原页](https://aclanthology.org/2026.acl-long.866.pdf#page=5)

[![原文数学表达区域 11，PDF 第 20 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/acl-2026/ccfcd5735715/figure-11.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/acl-2026/ccfcd5735715/figure-11.png)

区域 11 · [查看论文原页](https://aclanthology.org/2026.acl-long.866.pdf#page=20)

另有 58 个候选区域因边界不明确或图片数量、尺寸限制未展开；请[查看完整论文](https://aclanthology.org/2026.acl-long.866.pdf)中的原始排版。

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。
- 评分规则：type-aware-v1
- 评分模型：muse-spark-1.3-contributor
- 评分请求协议：openai_responses

---

[← 返回 acl-2026 论文汇总](/posts/conference-acl-2026/)
