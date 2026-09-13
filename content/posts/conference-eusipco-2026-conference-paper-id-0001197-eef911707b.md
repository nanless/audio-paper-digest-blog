---
title: "LEARNING SOURCE MODEL FOR INDEPENDENT VECTOR EXTRACTION BY SCORE MATCHING"
date: 2026-09-13
draft: false
description: "该文针对独立向量抽取中源先验不准与二阶算法需要快速求导的问题，用许瓦里宁分数匹配训练正弦多层源非线性，并在仿真与目标说话人抽取中报告了对传统模型的系统性提升与对微调噪声指示器的累积增益。"
tags: ["信号处理", "可解释性", "麦克风阵列", "语音", "目标说话人提取"]
categories: ["eusipco-2026 论文"]
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_paper_id: "conference:eusipco:2026:conference-paper-id:0001197"
paper_digest_source_kind: conference
paper_digest_conference_id: "eusipco-2026"
paper_digest_conference_record_url: "https://eurasip.org/Proceedings/Eusipco/Eusipco2026/HTML/session-index/index.html"
paper_digest_conference_pdf_url: "https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0001197.pdf"
paper_digest_api_reader_contract: "beginner-researcher-v3"
paper_digest_api_reader_article_sha256: "51b26fa21653a18c180ec98485c552e2dc3aef3b8c1b046d156f9aaee88fde59"
paper_digest_api_reader_plan_sha256: "64faad7423dc806874a34d05f90aa84005fb249689a788dcf70819dc3578fb8d"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings-v4"
paper_digest_api_reader_source_bindings_sha256: "6ce0aa25c6465c58053bbd4921738351a0e2515f9027ef63a5d838230baba29d"
paper_digest_api_reader_source_table_count: 3
paper_digest_api_reader_source_formula_count: 0
paper_digest_api_reader_structured_artifacts_sha256: "45a223990aeea68491c08cb3f5bb686786a41104342559ddb76aeda4d774533d"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity-v1"
paper_digest_api_reader_author_identity_sha256: "7a6e92e2c4192be1d96798a51c111cf7e45e684e6f24e596d02b09c5d1bdffb9"
paper_digest_api_reader_author_count: 3
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity-v1"
paper_digest_api_reader_resource_identity_sha256: "bbfe2fd46981326b8667cf29dd08f3672a8ff460f9bd1c4c31480131477f2923"
paper_digest_api_reader_resource_count: 0
paper_digest_api_reader_decision_projection: "api-reader-decision-projection-v2"
paper_digest_scoring_contract: "api-scoring-audit-v2"
paper_digest_taxonomy_contract: "paper-taxonomy-flat-tags-compat-v1"
paper_digest_taxonomy_selection_contract: "paper-taxonomy-selection-v1"
paper_digest_taxonomy_registry_version: "paper-taxonomy-v1"
paper_digest_taxonomy_registry_sha256: "15c82a567ce5a55dc1175684ed08b64c158558639d9c8fb822c9587ec32a8778"
paper_digest_taxonomy_concepts: [{"facet":"method","id":"method.signal-processing","label":"信号处理"},{"facet":"research_focus","id":"research_focus.interpretability","label":"可解释性"},{"facet":"setting","id":"setting.microphone-array","label":"麦克风阵列"},{"facet":"signal","id":"signal.speech","label":"语音"},{"facet":"task","id":"task.target-speaker","label":"目标说话人提取"}]
paper_digest_primary_task: "目标说话人提取"
paper_digest_primary_method: "信号处理"
paper_digest_score: 5.7
paper_digest_rank_bucket: "前50%"
paper_digest_document_type: "方法研究"
paper_digest_conference_structure: replayable-pdf-layout-v1
---

# 📄 把得分函数学准：用分数匹配为独立向量抽取训练可解析求导的正弦源模型

> 英文题目：*LEARNING SOURCE MODEL FOR INDEPENDENT VECTOR EXTRACTION BY SCORE MATCHING*

> 会议身份：`conference:eusipco:2026:conference-paper-id:0001197`


> ✅ 来源为官方会议 PDF；表格与 Figure 按原文证据绑定。PDF 公式以原页区域图片展示，未冒称作者原始 TeX。

> 会议来源：[官方记录](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/HTML/session-index/index.html) · [官方 PDF](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0001197.pdf)

标签：#信号处理 #可解释性 #麦克风阵列 #语音 #目标说话人提取

评分：**5.7/10** | 创新 1.3/2 | 技术严谨 1.2/1.5 | 实验充分 0.9/1.5 | 清晰度 0.7/1 | 影响力 0.8/1.5 | 开源 0.0/1.5 | 可复现 0.1/0.5 | 工程/实践 0.7/1.5

排名：前50% | 文档类型：方法研究

## 👥 作者与机构

- Koldovský, Zbyněk：机构信息未能从会议 PDF 纯文本可靠映射
- Navrátil, Matěj：机构信息未能从会议 PDF 纯文本可靠映射
- Málek, Jiří：机构信息未能从会议 PDF 纯文本可靠映射

## 📌 核心摘要

该工作面向频域盲提取，输入为多频点多通道线性瞬时混合观测，输出为感兴趣源在各频点的估计，难点在于跨频点依赖未知带来排列模糊，固定球对称或tanh先验难以匹配真实语音分布。方法先对归一化感兴趣源样本构建由交替线性层与标量正弦非线性组成的SIREN网络以参数化多变量得分函数。接着以许温评分匹配损失训练该网络，使其输出逼近真实对数密度梯度，并可解析求取对复变量经实部虚部分解后的一阶Wirtinger导数。然后将学得非线性及其解析导数直接代入独立向量提取对比函数的二阶FastICE/FastIVE类迭代规则以更新分离向量。相对端到端学习替代函数或固定先验，该机制保留得分函数匹配最优性的可解释性，避免自动微分并实现快速部署，还与噪声活动检测等先验信息互补。在基线目标语音提取场景任务下，配备训练SIREN源模型的iFastIVE的SIR高于传统模型的SIR约0.3 dB，且其SDR高于传统模型的SDR约0.8 dB。该结论适用边界受限于中等混响与中等信噪比模拟房间及特定初始化区间，低信噪比与高混响下优势收窄且尚未验证真实录音迁移。原文未披露训练、推理或部署成本。

## 🔗 开源与复现资源

本次未形成可展示的已核验资源记录，开放状态尚未核实。
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 输入是什么，目标是什么，这篇解读要保留什么？

本文解读的对象是独立向量抽取的可训练源模型研究。输入是传声器观测到的多个复数混合信号，目标是从中只抽出一个感兴趣源，例如目标说话人，而把其他说话人与噪声当作背景。输出是每个频率上的分离向量作用后的感兴趣源估计。解读必须保留的关键信息是方法只学习得分函数而不学习归一化密度、网络结构保证 1 阶导数可解析计算、训练与部署使用同一非线性、实验同时覆盖受控仿真与目标说话人抽取。后续按学习依赖展开，先讲任务与相关路线，再讲方法全景与组件计算，然后讲训练构造与实验条件，最后讲结果反证与复现要点。

**独立向量抽取 × 独立向量分析：** 独立向量分析负责同时恢复混合物中的全部源并用向量建模跨频率依赖，独立向量抽取只负责抽出一个感兴趣源而把其余看作背景干扰，二者搭配的理由是抽取继承了向量对频率依赖的建模能力，同时把参数集中到一个分离向量上，从而降低了只需要目标说话人时的计算与建模负担。

初学者容易把抽取理解成把波形直接丢给神经网络做映射，原文路线不是这样。原文仍保留基于独立性与似然的抽取框架，神经网络只替换其中原来手写的源非线性。沿一个样本走一遍有助于建立全景：某一时刻的混合向量进入当前分离向量得到感兴趣源估计，该估计向量进入训练好的正弦网络得到每个频率的得分值，这些得分值与背景高斯项一起决定似然对比函数的梯度方向，优化器据此更新分离向量。教学例子仅为例子：可以把得分想象成告诉优化器估计值应该向分布更密集处移动的箭头，但箭头大小与方向以网络输出为准，不附加无来源数值。

### 已有路线解决了什么，还留下什么缺口？

经典路线用固定闭式先验，例如双曲正切或向量范数型非线性，优点是简单稳健，对很多分布都能实现可靠但次优的分离。另一类工作引入深度源模型，例如在辅助函数型独立向量分析中学习替代函数，或端到端优化分离精度，往往性能好但可解释性下降，难以区分网络学到的是真实分布形状还是语音活动等隐含线索。还有工作在 2 阶相关与重尾分布方向扩展模型，但表达能力仍受限。

原文的缺口定位很明确：寻找可解释、可直接嵌入 2 阶抽取学习规则、且能刻画跨频率依赖的源模型。原文引用了非高斯独立成分分析的最优性结论，即当对比函数导数中的非线性等于真实得分函数时可达到统计最优，这为用网络逼近得分函数提供了理论动机。解读不把类别差异当同条件胜负，只记录原文实际比较的传统模型与训练模型的差异。

### 混合模型与抽取目标如何形式化？

原文考虑复数线性瞬时混合模型，每个混合表示为感兴趣源经混合向量加权加上背景向量。待求的是分离向量，估计值为分离向量共轭转置与观测的内积，并施加无失真约束。统计上把感兴趣源向量看作联合非高斯变量，把背景看作圆对称高斯变量，感兴趣源与背景相互独立。独立成分抽取把每个混合单独处理，独立向量抽取把多个频率的感兴趣源分量组成向量并建模其依赖，这对解决频域盲分离的排列问题很重要。

似然函数包含感兴趣源对数密度项与背景高斯项，由于真实密度未知，需要用模型密度代替。原文强调尺度模糊性，因此训练的是归一化到单位方差变量的密度对应的得分函数，实际使用时再通过样本方差做尺度变换。这一安排解释了为什么训练数据必须先做与部署一致的归一化。

### 方法全景：网络只替换哪一部分？

方法全景可以分为 3 步。第一步是确定替换位置：不替换整个抽取算法，只替换对比函数中源模型对应的非线性。第二步是确定学习目标：让网络输出逼近真实对数密度的梯度，即得分函数。第 3 步是确定部署方式：把训练好的网络及其解析 1 阶导数直接放入快速独立成分与独立向量类 2 阶学习规则。原文选择简单结构化网络，线性层与标量非线性交替，重点使用正弦激活的正弦激励网络。

部署时不需要自动微分，因为导数可写成矩阵与对角导数矩阵的连乘形式。渐进分析的作用是给出选择依据：当非线性等于真实得分函数时，干扰信号比的均值达到相应下界；即使只是近似，过去经验表明仍可获得可靠抽取，这支持了对泛化能力的猜想，但猜想部分仍需实验检验。

### 网络结构与解析导数如何计算？

组件按单个向量样本的前向过程理解。输入是归一化后的感兴趣源向量，依次经过多个线性变换与逐元正弦。记每层线性输出为中间变量，网络输出即最后一层线性输出再加偏置。参数包括各层矩阵与偏置，实验中使用的两层非线性版本对应 3 倍频率数平方量级的参数。

**源模型 × 得分函数：** 源模型负责给出感兴趣源向量分布的形状假设，得分函数负责给出对数密度对每个频率分量的梯度，2 阶抽取算法实际只调用得分函数及其导数，因此把源模型落实为得分函数的近似器可以直接决定学习规则中的非线性，搭配后避免了显式归一化密度的困难。

导数计算是本工作的部署关键。按链式法则，每层对输入的雅可比等于本层矩阵乘以上一层激活导数构成的对角矩阵再乘以下游雅可比。最终需要的是 1 阶偏导的对角部分，可以表示为多层矩阵与对角矩阵连乘后再取对角。原文指出利用对角矩阵恒等式可高效得到该结果。复数处理通过实部虚部分开实现实值分数匹配，再按 Wirtinger 微积分换算为复数得分及其导数。初学者应注意网络输出本身不是分离信号，而是参与梯度计算的得分，真正的信号估计仍由分离向量给出。

### 分数匹配如何训练，数据做了什么归一化？

训练阶段的监督来源不是干净信号回归目标，而是分数匹配损失。理想目标是最小化真实得分与网络输出的均方距离，但真实得分未知。许瓦里宁的结果把该目标转化为只依赖网络输出及其对输入 1 阶偏导的损失，包含导数项与输出平方项的样本平均，复数情形按实部虚部展开后使用。优化采用小批量随机梯度方法，原文提到可用自适应矩估计类方法逐步更新参数。

**分数匹配 × 正弦激励网络：** 分数匹配负责在不知道真实得分函数的条件下给出只依赖模型及其 1 阶导数的训练目标，正弦激励网络负责提供线性层与逐元正弦交替的可解析求导结构，二者搭配的理由是正弦导数仍是余弦形式且可写成对角矩阵连乘，从而训练与部署都不必依赖自动微分。

数据构造方面，仿真训练样本取自复广义高斯分布，背景样本取自拉普拉斯分布，以此验证在背景高斯假设不严格成立时仍可辨识感兴趣源。重要操作是归一化：训练样本必须像部署时的变量那样归一化，因为学习的是归一化密度的得分。原文未报告完整的学习率、批量大小与训练轮数细节，这是复现时需要补齐的缺项。解读不从网络名称推定这些超参数，也不把有训练等同于端到端分离精度的直接优化。

### 仿真实验测什么，条件如何保持一致？

仿真验证使用满足线性混合模型的合成混合。感兴趣源向量样本来自同一多变量分布，背景为拉普拉斯采样，混合矩阵为固定酉矩阵并重复多种矩阵以减少偶然性。算法以随机扰动的真分离向量为初值，扰动能量与正交条件在原文中有明确设定。比较的算法是快速抽取算法的 4 个变体：全盲的独立成分抽取与独立向量抽取，以及各自带参考信号的半盲版本，训练模型版本以后缀区分。

评价指标是信号干扰比与成功率，成功率定义为信号干扰比超过 3 分贝的试验比例，信号干扰比只在成功试验上平均以反映稳态精度。默认参数包括样本数与频率数等，原文以粗竖线标出默认值并分别扫描样本数、输入信干比与频率数。

**盲抽取 × 半盲抽取：** 盲抽取只依靠混合信号与源独立性假设启动分离向量，半盲抽取额外输入参考信号来约束全局收敛，二者分工不同但共享同一源非线性，搭配比较可以直接检验训练好的得分模型是对收敛帮助更大还是对稳态精度帮助更大。

下表整理仿真中可核对的分布与初始化条件，表中数值写法保留原文精度，单位留在同一格。

| 维度 | 参数 | 取值 | 单位与说明 | 比较公平性 |
| --- | --- | --- | --- | --- |
| 感兴趣源分布 | 形状参数 ξ | 0.4 | 无量纲，复广义高斯 | 训练与测试同分布 |
| 参考信号噪声 | ε 平方 | 2.1 | 无量纲，复高斯扰动 | 盲与半盲共用同一生成 |
| 分离向量初值 | δ 平方 | 0.1 | 无量纲，扰动能量 | 各方法相同初值分布 |
| 背景分布 | 拉普拉斯采样 | 拉普拉斯分布 | 非高斯背景检验可辨识性 | 与高斯假设形成偏离 |
| 混合矩阵 | 固定酉矩阵 | 10 种矩阵重复 | 每次设置重复试验 | 减少矩阵偶然性 |

表前提出的问题是仿真是否在相同混合与初值下比较传统与训练模型，公平条件是同分布、同矩阵集合与同初值扰动，指标方向是信号干扰比越高越好、成功率越高越好。表后解释是该设计的价值在于分离分布建模与算法利用依赖的能力，代价是仿真分布单一，不能直接推广到真实混响语音，未胜出项与失败条件需结合频率数扫描与低样本段进一步看，原文指出训练模型在频率数增大时保持或提升成功率，而传统模型呈下降趋势。

### 目标说话人抽取的房间与数据如何设置？

目标说话人抽取实验基于三传声器阵列的仿真房间。基线场景目标在阵列轴线附近有限角度与距离范围内，干扰说话人在房间他处且与阵列保持最小距离，混响时间与信噪比范围明确，短时傅里叶参数与数据划分明确。除基线外还设置 3 个失配场景，分别改变混响时间或输入信噪比，用于检验在训练场景之外是否稳健。比较对象包括带传统源模型的半盲抽取、带噪声活动检测器的版本、对检测器做展开微调的版本及其各自加训练源模型的版本，另有参数量大一个数量级的全数据驱动方法作为参照。评价采用盲源分离评测工具箱的信号干扰比与信号失真比，均为越高越好。

| 场景 | 混响时间 | 输入信噪比 | 数据划分与长度 | 处理参数 |
| --- | --- | --- | --- | --- |
| 基线 | 180 ms | ⟨2, 10⟩dB | 1000 训练，200 验证，300 测试，5 s | 16 kHz，窗长 512 样本，重叠 128 样本 |
| 中混响失配 | 300 ms | ⟨2, 10⟩dB | 1000 训练，200 验证，300 测试，5 s | 16 kHz，窗长 512 样本，重叠 128 样本 |
| 高混响失配 | 600 ms | ⟨2, 10⟩dB | 1000 训练，200 验证，300 测试，5 s | 16 kHz，窗长 512 样本，重叠 128 样本 |
| 低信噪比失配 | 180 ms | ⟨−6, 0⟩dB | 1000 训练，200 验证，300 测试，5 s | 16 kHz，窗长 512 样本，重叠 128 样本 |

表前的问题是失配是否只改变声学条件而不改变比较协议，公平条件是同一划分与同一评价工具，指标方向是两项指标越高越好。表后解释是该设计能区分过拟合训练场景与真正泛化，代价是仿真房间仍非实录，原文报告训练模型在失配下与传统模型相当或略好，而全数据驱动方法在低信噪比失配下退化更明显，但该判断限于本次仿真条件，不能推广为所有真实场景。

### 主结果支持什么判断，又在何处受限？

仿真主结果报告为成功率与成功试验平均信号干扰比随样本数、输入信干比与频率数变化的曲线。原文总结三点：向量方法因建模感兴趣源内部依赖而优于逐频率独立处理；半盲方法全局收敛明显好于全盲；训练源模型同时加强盲与半盲的全局收敛，并在部分情形提升精度。最值得注意的是随频率数变化的趋势，传统模型成功率下降，训练模型成功率上升，原文将其解释为精确捕获依赖的优势。需要限制的是半盲平均精度未必高于全盲，因为参考信号含噪可能引入偏置，总体趋势不等于每组都成立。

**噪声活动检测器 × 源非线性：** 噪声活动检测器负责提供与语音活动有关的先验边信息，源非线性负责刻画目标语音向量本身的跨频率统计结构，前者编码场景相关的活动线索，后者编码分布层面的形状线索，论文把二者叠加使用是为了验证分布建模与先验信息是互补而非互相替代。

目标说话人抽取的数值结果见下表，表头单位为分贝，数据格保留原文裸值写法以避免逐格追加单位，比较保留实际可运行策略，事后最优不计入。

| 方法 | 基线信号干扰比[dB] | 基线信号失真比[dB] | 中混响信号干扰比[dB] | 失配信号失真比[dB] |
| --- | --- | --- | --- | --- |
| 微调检测器版本 | 18.2 | 13.8 | 15.5 | 10.1 |
| 微调检测器加训练模型 | 18.3 | 14.5 | 15.6 | 10.7 |
| 说话人波束参照 | 17.3 | 10.8 | 16.0 | 9.5 |

表前的问题是在相同半盲框架下训练模型是否带来可运行增益，公平条件是仅替换源非线性而保留检测器与抽取迭代，指标方向是越高越好。表后解释是主要收益为基线约零点几分贝的提升并可叠加到微调检测器之上，代价是提升幅度小于更换大参数全数据驱动模型在匹配条件下的差距，未胜出项是部分高混响条件下全数据驱动仍有更高数值，但其在低输入信噪比失配下退化明显，且参数量分别为约五到七百万量级，远大于噪声活动检测器的五万余参数与源网络的轻量结构。

### 哪些对照说明增益来自分布建模而非单一技巧？

论文的消融逻辑不是 1 次去掉某层，而是用多维对照逼近因果。第一维是盲与半盲共用同一训练模型，若两类算法同时改善，则支持增益来自源分布本身而非参考信号。第二维是传统检测器与微调检测器分别加训练模型，若 2 次都提升，则支持分布建模与先验信息互补。第三维是基线与 3 个失配场景，若失配下不明显退化，则支持一定泛化而非过拟合训练房间。第四维是频率数扫描，若优势随维度增大而扩大，则支持跨频率依赖被更准确捕获。

原文还提到背景用拉普拉斯而非高斯仍可抽取，这构成对高斯背景假设稳健性的反证。缺失的是对网络深度与正弦频率等超参数的系统消融，原文只报告两层非线性版本，未给出拿掉正弦或减少层数后的定量变化，因此不能断言结构选择的必要性。

### 还有哪些边界没有评测，不能承诺什么？

首先是资源状态，原文证据中未发现完成超文本传输协议状态验证的开源资源，因此不能声称代码模型或数据已公开，复现需按描述自行实现。其次是训练细节缺项，学习率、批量、轮数与停止准则未报告，复现时需自行搜索并记录。再次是评价边界，仿真只用单一形状参数与酉混合，真实房间只用仿真脉冲响应，未评测移动说话人、阵列失配与强非平稳噪声。最后是成本边界，未测量每步迭代延迟、收敛步数与内存占用，不能承诺推理更快或更省。

相关性不等于因果，成功率随频率数提升与训练模型相关，但未控制优化难度与初始化的全部交互，应表述为支持而非证明。百分点与相对百分比不同，解读中只用分贝差值，不换算为百分比提升。

### 要复现应先做什么，先固定哪些条件？

复现建议分 2 个阶段。第 1 阶段复现仿真闭环：按复广义高斯形状参数生成感兴趣源向量，按拉普拉斯生成背景，用固定酉矩阵混合，参考信号按给定噪声能量生成，初值按给定扰动能量在真分离向量附近随机化。先实现传统非线性基线并记录成功率与成功平均信号干扰比，再接入正弦网络。网络训练前必须做与部署一致的归一化，损失只用网络输出及其解析 1 阶导数，避免引入自动微分依赖。

第 2 阶段复现目标说话人抽取：按基线混响与信噪比生成训练验证测试划分，用短时傅里叶给定窗长与重叠处理，先跑通半盲抽取与噪声活动检测器，再替换源非线性。关键超参数与信息条件应保留原文值，包括形状参数、噪声能量、初值扰动、混响时间、信噪比范围与数据量。还需补做的验证是记录不同随机种子下的方差、报告失败试验的分布、测量单步导数耗时与总迭代数。

### 何时值得尝试这种源模型？

当系统已采用快速独立成分或独立向量类 2 阶算法，且希望在不改动整体框架的前提下提升建模能力时，值得尝试把手写非线性替换为分数匹配训练的正弦网络。当只有目标说话人需要抽出且参考信号不可靠时，向量建模的价值更大。当训练场景与部署场景可能失配时，原文的失配实验支持轻量分布模型比大参数全数据驱动更稳健，但这仍是有限解释，需在实录数据上验证。

常见误解是把网络输出当作增强后的波形，实际上网络输出是得分，波形仍由分离向量产生。另一个误解是把失配下相当或略好理解为在所有条件下都最优，原文同时报告了全数据驱动在部分匹配条件下的更高数值，应按参数量与稳健性一起权衡。收束判断是该模型可解释、互补且有泛化迹象，但复现与选型仍需补齐训练超参数、结构消融与延迟成本三项证据。

## 📐 原文公式与排版

以下展示论文原页中的数学表达区域，保留原始上下标、分式和符号排版。区域序号仅用于本文导航，不是论文公式编号。

[![原文数学表达区域 1，PDF 第 2 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/d528b60f95ec/figure-1.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/d528b60f95ec/figure-1.png)

区域 1 · [查看论文原页](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0001197.pdf#page=2)

[![原文数学表达区域 2，PDF 第 2 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/d528b60f95ec/figure-2.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/d528b60f95ec/figure-2.png)

区域 2 · [查看论文原页](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0001197.pdf#page=2)

[![原文数学表达区域 3，PDF 第 2 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/d528b60f95ec/figure-3.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/d528b60f95ec/figure-3.png)

区域 3 · [查看论文原页](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0001197.pdf#page=2)

[![原文数学表达区域 4，PDF 第 2 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/d528b60f95ec/figure-4.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/d528b60f95ec/figure-4.png)

区域 4 · [查看论文原页](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0001197.pdf#page=2)

[![原文数学表达区域 5，PDF 第 2 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/d528b60f95ec/figure-5.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/d528b60f95ec/figure-5.png)

区域 5 · [查看论文原页](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0001197.pdf#page=2)

[![原文数学表达区域 6，PDF 第 2 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/d528b60f95ec/figure-6.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/d528b60f95ec/figure-6.png)

区域 6 · [查看论文原页](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0001197.pdf#page=2)

[![原文数学表达区域 7，PDF 第 2 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/d528b60f95ec/figure-7.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/d528b60f95ec/figure-7.png)

区域 7 · [查看论文原页](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0001197.pdf#page=2)

[![原文数学表达区域 8，PDF 第 3 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/d528b60f95ec/figure-8.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/d528b60f95ec/figure-8.png)

区域 8 · [查看论文原页](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0001197.pdf#page=3)

[![原文数学表达区域 9，PDF 第 3 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/d528b60f95ec/figure-9.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/d528b60f95ec/figure-9.png)

区域 9 · [查看论文原页](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0001197.pdf#page=3)

[![原文数学表达区域 10，PDF 第 3 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/d528b60f95ec/figure-10.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/d528b60f95ec/figure-10.png)

区域 10 · [查看论文原页](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0001197.pdf#page=3)

[![原文数学表达区域 11，PDF 第 3 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/d528b60f95ec/figure-11.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/d528b60f95ec/figure-11.png)

区域 11 · [查看论文原页](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0001197.pdf#page=3)

[![原文数学表达区域 12，PDF 第 3 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/d528b60f95ec/figure-12.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/d528b60f95ec/figure-12.png)

区域 12 · [查看论文原页](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0001197.pdf#page=3)

[![原文数学表达区域 13，PDF 第 3 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/d528b60f95ec/figure-13.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/d528b60f95ec/figure-13.png)

区域 13 · [查看论文原页](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0001197.pdf#page=3)

[![原文数学表达区域 14，PDF 第 3 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/d528b60f95ec/figure-14.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/d528b60f95ec/figure-14.png)

区域 14 · [查看论文原页](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0001197.pdf#page=3)

另有 28 个候选区域因边界不明确或图片数量、尺寸限制未展开；请[查看完整论文](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0001197.pdf)中的原始排版。

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。
- 评分规则：type-aware-v1
- 评分模型：muse-spark-1.3-contributor
- 评分请求协议：openai_responses

---

[← 返回 eusipco-2026 论文汇总](/posts/conference-eusipco-2026/)
