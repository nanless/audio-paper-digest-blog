---
title: "QC-GAN: A Parameter-Efficient Quaternion Conformer GAN for High-Fidelity Speech Enhancement"
date: 2026-09-28
draft: false
description: "针对单通道语音增强中轻量化导致相位建模退化的问题，QC-GAN 用四元数 Conformer 生成器加 MetricGAN 判别器，在 VoiceBank+DEMAND 上以 0.89M 参数达到 PESQ 3.48，以 35K 参数达到 3.23，代价是四元数运算带来更高的实数乘加量与 CPU 负担。"
tags: ["Conformer", "生成对抗网络", "高效推理", "单通道", "语音增强"]
categories: ["interspeech-2026 论文"]
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_paper_id: "conference:interspeech:2026:conference-paper-id:yamauchi26_interspeech"
paper_digest_source_kind: conference
paper_digest_conference_id: "interspeech-2026"
paper_digest_conference_record_url: "https://www.isca-archive.org/interspeech_2026/yamauchi26_interspeech.html"
paper_digest_conference_pdf_url: "https://www.isca-archive.org/interspeech_2026/yamauchi26_interspeech.pdf"
paper_digest_api_reader_contract: "beginner-researcher-v3"
paper_digest_api_reader_article_sha256: "f10fcfd98fbc472cac3905112386c9d68a4f40d0619b6824a699e5b23f6a1eae"
paper_digest_api_reader_plan_sha256: "0d0939f199d45f30153202d12885127ddd5b6e2e875c0c75e83d3499e5814198"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings-v4"
paper_digest_api_reader_source_bindings_sha256: "78e6fc3d9da1d3d182c6177a7005a3cdd1cafb685e8f0c5f2147dddf6edbddf0"
paper_digest_api_reader_source_table_count: 3
paper_digest_api_reader_source_formula_count: 0
paper_digest_api_reader_structured_artifacts_sha256: "4fec228f51caf186f61043918c90ee7ff9a1d7454d8173061f0bbdd922ff9807"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity-v1"
paper_digest_api_reader_author_identity_sha256: "e970b46e57ca48990774cec0900c125485c2f5a8cbd5319b6a1757be4bf5ba84"
paper_digest_api_reader_author_count: 5
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity-v1"
paper_digest_api_reader_resource_identity_sha256: "7f899903142ce595c3a5db025f1dbe223e962c4315465165bd003778364d0889"
paper_digest_api_reader_resource_count: 1
paper_digest_api_reader_decision_projection: "api-reader-decision-projection-v2"
paper_digest_scoring_contract: "api-scoring-audit-v2"
paper_digest_taxonomy_contract: "paper-taxonomy-flat-tags-compat-v1"
paper_digest_taxonomy_selection_contract: "paper-taxonomy-selection-v1"
paper_digest_taxonomy_registry_version: "paper-taxonomy-v1"
paper_digest_taxonomy_registry_sha256: "15c82a567ce5a55dc1175684ed08b64c158558639d9c8fb822c9587ec32a8778"
paper_digest_taxonomy_concepts: [{"facet":"method","id":"method.conformer","label":"Conformer"},{"facet":"method","id":"method.gan","label":"生成对抗网络"},{"facet":"research_focus","id":"research_focus.efficiency","label":"高效推理"},{"facet":"setting","id":"setting.single-channel","label":"单通道"},{"facet":"task","id":"task.speech-enhancement","label":"语音增强"}]
paper_digest_primary_task: "语音增强"
paper_digest_primary_method: "生成对抗网络"
paper_digest_score: 7.5
paper_digest_rank_bucket: "前25%"
paper_digest_document_type: "方法研究"
paper_digest_conference_structure: pdf-visual-quote-evidence-v1
---

# 📄 用四元数耦合幅度与相位：QC-GAN 如何在 0.89M 参数下逼近全尺寸 Conformer 增强质量

> 英文题目：*QC-GAN: A Parameter-Efficient Quaternion Conformer GAN for High-Fidelity Speech Enhancement*

> 会议身份：`conference:interspeech:2026:conference-paper-id:yamauchi26_interspeech`



> 来源为官方会议 PDF；图片依据原页像素，表格数字依据原文引用。PDF 文字层不视为原始 TeX，未可靠恢复的结构不作推断。


> 会议来源：[官方记录](https://www.isca-archive.org/interspeech_2026/yamauchi26_interspeech.html) · [官方 PDF](https://www.isca-archive.org/interspeech_2026/yamauchi26_interspeech.pdf)

标签：#Conformer #生成对抗网络 #高效推理 #单通道 #语音增强

评分：**7.5/10** | 创新 1.2/2 | 技术严谨 1.0/1.5 | 实验充分 1.2/1.5 | 清晰度 0.8/1 | 影响力 1.0/1.5 | 开源 1.0/1.5 | 可复现 0.3/0.5 | 工程/实践 1.0/1.5

排名：前25% | 文档类型：方法研究

## 👥 作者与机构

- Shogo Yamauchi：机构信息未能从会议 PDF 纯文本可靠映射
- Hideaki Tamori：机构信息未能从会议 PDF 纯文本可靠映射
- Makoto Sakai：机构信息未能从会议 PDF 纯文本可靠映射
- Yosuke Yamano：机构信息未能从会议 PDF 纯文本可靠映射
- Tohru Nitta：机构信息未能从会议 PDF 纯文本可靠映射

## 📌 核心摘要

单通道语音增强需从含噪短时傅里叶变换（Short-Time Fourier Transform，STFT）中恢复干净波形，难点在于极小参数下同时重建幅度包络与相位连续性，否则易产生音乐噪声并拉低感知质量。所提四元数Conformer生成对抗网络（Quaternion Conformer GAN，QC-GAN）先将对数幅度差分、静态对数幅度与归一化相位余弦正弦拼成四元数输入，再经四元数编码器与两阶段四元数Conformer瓶颈建模局部谱纹与全局时频依赖，随后由幅度掩蔽与复数残差双分支合成增强谱，最后用度量判别器逼近感知分数以优化听感。与实值网络独立处理各通道不同，哈密顿积（Hamilton Product）以结构化权值共享实现旋转式耦合，把幅度相位当作统一实体变换。在VoiceBank+DEMAND上Base模型以0.89M参数取得感知语音质量评估（Perceptual Evaluation of Speech Quality，PESQ）3.48，超过1.83M参数的CMGAN的3.41并接近2.05M参数的MP-SENet的3.50；在DNS-Challenge 3盲测中整体质量亦领先同类基线。结论限于16 kHz非流式单通道增强与所测噪声分布，未验证多通道、流式与跨采样率外推。Tiny模型中央处理器（Central Processing Unit，CPU）实时率约0.89，虽满足实时门限但主要耗时集中于注意力瓶颈，部署裕量有限。

## 🔗 开源与复现资源

- 代码相关资源：<https://github.com/asahi-research/QC-GAN> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 输入是什么，要输出什么，什么信息必须保留？

这篇论文研究的是单通道语音增强。输入是一段被噪声污染的语音，通常先做短时傅里叶变换得到时频谱，每个时频点都有幅度和相位，幅度大致对应声音在该频率有多响，相位对应波形的精细对齐。目标是输出一段更干净的语音波形，既要压住噪声，又不能引入新的刺耳痕迹。

初学者容易只盯着幅度，因为幅度画成频谱图最直观，但论文反复强调的约束是相位精度直接影响听感，即使幅度重建准确，相位失真仍会带来类似音乐噪声的可闻伪影，并拉低语音质量感知评价等指标。所以方法必须同时估计幅度与相位，并且在压缩参数时不能把两者拆开独立处理。输出形式是增强后的复数谱再经逆短时傅里叶变换得到的时域波形。评价时既看感知质量，也看可懂度与信号失真、背景残留、整体质量等复合指标。

本文代码当前可用，已公开在官方仓库链接，权重与可运行状态需以该链接当前内容为准。

### 已有路线走到哪里，轻量化为什么卡在相位上？

按同输入、同目标、同运行阶段对照，已有路线可分为 3 类。第一类是全尺寸时频增强模型，从卷积、循环网络发展到 Transformer 与 Conformer，代表是 CMGAN 与 MP-SENet，它们用 Conformer 同时捕捉局部谱模式与全局依赖，在 VoiceBank 加 DEMAND 上达到很高的感知分数，但参数量在 1.8M 到 2M 以上。第二类是轻量化增强，通过通道缩减、剪枝、深度可分离卷积等压缩，例如 LiSenNet 用子带加双路径，LSENet 用扩张卷积加注意力，都能在不到 0.1M 参数下把感知分数做到 3.0 以上，但在极低参数下对复杂谱结构与相位信息的建模会明显受损。

第 3 类是四元数神经网络，此前多用于判别任务，例如把梅尔滤波器能量及其导数放到四元数轴上做语音识别、多通道远场识别与声源定位，预测的是标签或空间位置，而不是重建干净波形，也没有直接把短时傅里叶变换的幅度与相位放到四元数轴上。本文的定位是首次把四元数网络用于单通道语音增强，并把 Conformer 整体改写到超复数代数中，让哈密顿积的耦合正好落在相位重建最需要的地方。

### 要解决的具体矛盾是什么？

具体矛盾是参数效率与相位保真之间的拉扯。 aggressive 压缩能把模型做小，却削弱了表达能力，而相位恰恰是对容量最敏感的部分。论文把这个问题拆成两个可检验的动作：一是用结构化的权重共享减少参数，同时强制幅度与相位联合编码；二是用面向感知指标的训练把优化方向从谱均方误差拉回人耳听感。举例来说，这里的例子仅为教学类比，不代表论文数值：好比要同时记录水面的高度与波纹方向，若分成两个独立本子记，参数少时容易记丢两者关系。

若用一套带固定换算规则的联动表格记，写得少但关系不会丢。四元数与哈密顿积在论文中就承担这种联动表格的角色，后文会沿着一个样本走完它如何参与计算。

### 沿一个样本走完输入到输出的主路径

拿一段 2 秒的含噪语音为例，先重采样到 16 千赫兹，做 25 毫秒汉宁窗、6.25 毫秒跳长的短时傅里叶变换，得到含噪复谱。接着构造四元数输入，把对数幅度的时域差分、静态对数幅度、归一化余弦相位与正弦相位分别放到实部与 3 个虚部，形成单四元数通道的 4 维表示，并做 0.3 次方的功率压缩。编码器用四元数门控扩张密集网络提取多尺度谱特征并把频率维下采样一半，瓶颈用 2 阶段四元数 Conformer 先沿时间再沿频率做自注意力，解码器分成两路，一路估计实数幅度掩蔽，一路预测复数残差。

**幅度掩蔽分支 × 复数残差分支：** 幅度掩蔽分支负责估计实数幅度掩蔽并与带噪相位相乘得到粗增强谱，复数残差分支负责预测复数残差以修正相位细节，两者搭配是因为只做掩蔽会残留相位失真，组合意义是先用乘性掩蔽抑制噪声能量，再用加性残差修复精细结构，最后相加得到增强复谱。

具体合成时，先把掩蔽乘到含噪幅度并保留含噪相位得到粗谱，再加上复数残差得到精细复谱，功率解压缩后做逆变换得到波形。判别器以幅度谱对为输入，学习预测归一化感知分数，训练时同时指导生成器。下面的总体结构图把这条主路径与 4 个子模块画在一起，值得按箭头完整跟一遍。

> **看图路径：** 1. 先沿含噪 STFT 到四元数特征到编码器到瓶颈到双解码器再到 ISTFT 的主路径走一遍；2. 再找到左下 QG-Dilated DenseNet 门控分支与中间 TSQ-Conformer 的位置；3. 最后看右下度量判别器以干净与增强音频预测 PESQ 分数的回路

[![原论文 Figure 2：Overall architecture of the proposed QC-GAN, comprising a Quaternion Encoder, a QG-Dilated…](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/interspeech-2026/a1a3373e9005/figure-2.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/interspeech-2026/a1a3373e9005/figure-2.png)

*论文图 2。原论文 Figure 2：“Overall architecture of the proposed QC-GAN, comprising a Quaternion Encoder, a QG-Dilated DenseNet encoder (b), a two-stage Quaternion Conformer bottleneck (c), a dual-branch…”。*

从图中可以看到，生成器是左侧到右侧的主链，左下是带门控与密集连接的编码细节，中间下方是 2 个阶段 Conformer 的展开，右下是度量判别器用干净与增强音频预测分数的闭环。双分支解码器最后分别输出掩蔽与残差，再与原始含噪相位项相乘相加，这是理解掩蔽加残差分工的关键位置。读图时不要把虚线标出的实数投影当成四元数层，它只是最后回到实数域的转换。

### 四元数层与 Conformer 组件各自算什么？

白话来说，四元数就是一个实部加 3 个虚部的超复数，英文为 quaternion。哈密顿积是四元数之间的乘法规则，英文为 Hamilton product，它规定了 4 个分量如何带符号交叉相乘。论文用它构造了四元数全连接层与四元数卷积层：权重由 4 个实数子矩阵组成，通过固定的符号模式复用到 4 个输出分量上，等效实数层的输入输出维度是 4 倍时，参数量减少 75%。四元数多头自注意力把查询、键、值都用四元数全连接投影，用哈密顿积算注意力分数，再对 4 个分量分别做 Softmax，最后拼接并投影回去，查询与键还用了均方根归一化稳定尺度。

**四元数神经网络 × 哈密顿积：** 四元数神经网络负责把 4 个分量作为一个整体来变换，哈密顿积负责规定这 4 个分量之间如何交叉相乘与共享权重，两者搭配的理由是语音的幅度与相位本就相互牵连，组合意义是用结构化的旋转式耦合代替无约束的全连接，从而以约 1/4 参数保持跨分量关系。

Conformer 的白话含义是卷积加 Transformer 的混合块，擅长局部与全局兼顾。论文把它改写为 2 阶段四元数 Conformer，每块包含四元数前馈、注意力和卷积模块，先沿时间做自注意力，再沿频率做自注意力，块外加残差帮助梯度流动。编码器中的门控扩张密集网络用扩张率为 1、2、4、8 的四元数扩张卷积捕捉多尺度模式，用并行 Sigmoid 分支逐元素相乘抑制噪声激活，并用基于四元数方差统计的批量归一化。解码器每分支先用同样扩张率的四元数卷积看宽上下文，再用四元数子像素卷积把频率维上采样回原尺寸以避免棋盘伪影，掩蔽分支末尾用可学习的通道 PReLU 激活。

**Conformer × 四元数多头自注意力：** Conformer 负责同时捕捉局部谱纹理与全局时频依赖，四元数多头自注意力负责在四元数域内实现查询与键值的相关计算与分量内 Softmax，两者搭配是因为轻量卷积擅长局部但缺长程，组合意义是把时间轴与频率轴的 2 阶段注意力完整搬到四元数代数中而不丢失长程建模能力。

实数层与四元数层的差别在这张对比图中最直观，左侧是独立参数的并行标量乘法，右侧是共享参数的哈密顿积，右侧明确标出参数减少 75%。

> **看图路径：** 1. 先对比左右两侧输入都是四个特征但权重组织不同；2. 再看右侧哈密顿矩阵中 W0 到 W3 如何带符号复用；3. 最后对照底部注释理解耦合是结构保证还是靠数据学习

[![原论文 Figure 1：Feature learning in real-valued vs. quaternion layers.](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/interspeech-2026/a1a3373e9005/figure-1.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/interspeech-2026/a1a3373e9005/figure-1.png)

*论文图 1。原论文 Figure 1：“Feature learning in real-valued vs. quaternion layers.”。*

从像素可见，左右顶部都是 4 个输入特征，左侧每个特征对应独立权重列，右侧 4 个权重块带正负号复用，底部左侧输出是 4 个分离空间，右侧输出是一个统一空间并配有旋转与缩放示意。解释是右侧的结构先验把谱动态、静态幅度与余弦正弦相位当作统一表示来旋转耦合，而不是留给优化器从数据中慢慢学出耦合，这正是小参数下仍能保持关系的原因。

### 损失如何构造，判别器与生成器如何交替优化？

训练是标准的生成对抗加多任务回归。生成器损失是五项加权求和，权重按预实验经验确定：复谱实部虚部误差权重 0.1，幅度谱误差权重 0.9，时域波形绝对误差权重 0.2，可微感知损失权重 0.05，对抗损失权重 0.05。其中可微感知损失来自响度谱的对称与非对称扰动项，对抗损失让判别器对增强幅度谱的打分尽量接近 1。判别器损失让干净谱对的预测接近 1，让增强谱对的预测接近归一化到 0 到 1 的真实感知分数。谱域损失与判别器都在压缩域计算，预测谱在逆变换前先做功率解压缩。

优化器用 AdamW，生成器初始学习率 5 乘 10 的负 4 次方，判别器 1 乘 10 的负 3 次方，每 30 轮衰减，梯度裁剪为 1.0。VoiceBank 加 DEMAND 训练 100 轮，DNS 挑战数据单独从零训练 50 轮。

**MetricGAN × 可微 PESQ 损失：** MetricGAN 负责让判别器学会近似 PESQ 等感知分数并回传自适应的感知梯度，可微 PESQ 损失负责从响度谱的对称与非对称扰动项给出稳定的可微感知信号，两者搭配是因为均方误差与听感不一致，组合意义是一路稳定、一路自适应，共同把生成器推向感知质量而不仅是谱误差最小。

论文明确报告，可微感知损失提供稳定的感知训练信号，度量判别器提供来自数据分布的自适应指导，两者结合促进感知质量。未报告的是判别器与生成器的具体交替频率、是否冻结某些层、梯度是否在某处截断，这些缺项不能从模型名称推定，复现时应先按常规每步同时更新、梯度全通来起步，并记录稳定性。

### 数据、划分、基线与指标如何保证可比？

VoiceBank 加 DEMAND 训练用 28 个说话人共 11572 句，测试用 2 个说话人共 824 句，训练信噪比 0 到 15 分贝，测试用未见噪声在 2.5 到 17.5 分贝。DNS 第三届挑战数据提供约 760 小时干净语音、181 小时约 150 类噪声与超过 118,000 条房间脉冲响应，用于验证真实复杂条件的泛化，盲测集无干净参考故用无参考指标。基线分 3 组：全尺寸组含 CMGAN、MP-SENet、SE-Mamba、可比参数的 DPT-FSNet 与度量代表 MetricGAN 加；超轻量组含 RNNoise、CCFNet 精简版、FSPEN、LiSenNet、LSENet；跨域组在 DNS 上与官方基线 NSNet2、DCCRN 及实数 Conformer 最近基线 CMGAN 对比，且都在 DNS 训练集上从零训练以保证公平。

VoiceBank 指标是感知分数、短时客观可懂度与信号失真、背景侵扰、整体质量复合指标，数值越大越好；DNS 盲测用 DNSMOS 的信号、背景、整体分与 P808 平均意见分，同样越大越好。模型分 Base 与 Tiny 两档，Base 增长率为 64、4 层 2 个阶段 Conformer、解码 64 通道共 0.89M 参数，Tiny 对应 16、1 层、16 通道共 35K 参数，注意力头数都是 4。所有音频重采样到 16 千赫兹，训练裁成 2 秒固定长度。

### 主结果：多大模型换来多少感知质量？

要回答的核心比较问题是，在相同数据集与相同指标下，更小的参数是否换来可比的感知质量。公平条件是同为 VoiceBank 加 DEMAND 测试集、同为感知分数等客观指标，指标方向都是越高越好。下表把 Base 模型与全尺寸代表放在同一条件下对比，重点看参数量与感知分数的 trade-off。

| 条件 | 指标 | CMGAN | 本方法 QC-GAN Base | MP-SENet |
| --- | --- | --- | --- | --- |
| VoiceBank+DEMAND | PESQ | 3.41 | 3.48 | 3.50 |
| VoiceBank+DEMAND | 参数量 M | 1.83 | 0.89 | 2.05 |
| VoiceBank+DEMAND | 可懂度 STOI | 0.96 | 0.95 | 0.96 |

表后解释需要同时讲收益与代价。报告显示，Base 以 0.89M 参数达到 3.48，超过 1.83M 的 CMGAN 的 3.41，接近 2.05M 的 MP-SENet 的 3.50 与 2.26M 的 SE-Mamba 的 3.55，约为后两者一半以下的参数，支持参数效率的判断。但未胜出项同样明确：Base 的背景指标 3.65 低于 CMGAN 的 3.94 与 MP-SENet 的 3.95，可懂度 0.95 也略低于 0.96，说明在背景抑制单项上并未全面领先，不能把整体感知优势推广为所有子指标都更好。超轻量对比的问题是，在 35K 量级是否仍能超过同量级已发表小模型。

| 条件 | 指标 | LiSenNet 37K | 本方法 Tiny 35K | LSENet 39K |
| --- | --- | --- | --- | --- |
| VoiceBank+DEMAND | PESQ | 3.07 | 3.23 | 3.12 |
| VoiceBank+DEMAND | 可懂度 STOI | 0.94 | 0.94 | 0.95 |
| VoiceBank+DEMAND | RNNoise 基线 PESQ | 2.33 | 3.23 | 2.97 |

该表显示 Tiny 以 35K 参数达到 3.23，超过 37K 的 LiSenNet 的 3.07、39K 的 LSENet 的 3.12 与 60K 的 RNNoise 的 2.33，可懂度保持 0.94，支持在极端压缩下仍能捕捉语音结构。但 LSENet 的可懂度 0.95 略高于 Tiny，且 Tiny 的实数乘加量因四元数展开而更高，这是必须同时记住的代价。DNS 盲测上 Base 在整体 2.73、背景 3.79、P808 平均意见分 3.37 均为对比中最高，Tiny 以 35K 参数超过 2.7M 的 NSNet2 并接近 3.7M 的 DCCRN，支持泛化到真实噪声的判断，但 DNS 指标为无参考预测分，不能等同于人评，还需补主观听音验证。

### 拿掉什么会变差，四元数优势来自相位吗？

消融用 Tiny 配置在 VoiceBank 加 DEMAND 上进行，对照是把所有四元数层换成标准实数层的 Real-NN，分参数对齐的 32K 版与容量匹配的 140K 版，两者用相同的 4 通道输入、训练配置与损失。另对判别器与 Conformer 瓶颈分别做移除，以观察各组件与两种表示的交互。要检验的问题是，四元数增益是否来自更好的相位重建，而不仅是参数量差异。

| 条件 | 指标 | Real-NN 32K | 本方法 Tiny 35K | Real-NN 140K |
| --- | --- | --- | --- | --- |
| VoiceBank+DEMAND | PESQ | 3.12 | 3.23 | 3.29 |
| VoiceBank+DEMAND | 整体质量 COVL | 3.73 | 3.79 | 3.90 |
| VoiceBank+DEMAND | 去 Conformer 后 PESQ | 3.10 | 2.99 | 3.10 |

表后解释是，Tiny 超过参数对齐的 32K 的 3.12 到 3.23，且以 25% 参数接近 4 倍参数的 140K 的 3.29，支持四元数在单位参数下保持表达能力的判断。移除判别器时 Tiny 从 3.23 掉到 3.14 而整体质量从 3.79 到 3.76，实数 140K 去掉判别器反而感知分数从 3.29 微升到 3.32 但整体质量从 3.90 掉到 3.76，说明判别器对整体听感的贡献更一致，而对单一分数的影响在两种表示下并不相同。移除 Conformer 时 Tiny 掉 0.24、实数掉 0.19，幅度远大于去掉判别器，支持长程建模是主因，且四元数卷积更依赖注意力的长程补充。

**瞬时相位误差 × 群延迟误差：** 瞬时相位误差负责衡量每个时频点相位本身的偏差，群延迟误差负责衡量相位沿频率斜率的偏差即时间一致性，两者搭配是因为单点准确不等于结构连贯，组合意义是共同检验四元数耦合是否同时改善了局部相位值与跨频相位连续性。

相位证据用瞬时相位、瞬时角频率与群延迟三项误差衡量，越低越好，柱状图对比最直接。

> **看图路径：** 1. 先确认纵轴是弧度误差且越低越好；2. 再逐组对比蓝色 32K 与绿色 35K 四元数模型的柱高；3. 最后重点看群延迟组下降幅度是否大于瞬时相位组

[![原论文 Figure 5：5](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/interspeech-2026/a1a3373e9005/figure-5.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/interspeech-2026/a1a3373e9005/figure-5.png)

*论文图 5。原论文 Figure 5：“5”。*

从像素可见，3 组误差中绿色 35K 四元数柱均为最低，瞬时相位从 0.961 降到 0.933，瞬时角频率从 0.903 降到 0.850，群延迟从 0.930 降到 0.844，其中群延迟降幅约 9.25% 最为显著，支持相位斜率与时间一致性改善最大的解释。单样本的相位误差图进一步把这种差异定位到时频平面。

> **看图路径：** 1. 先看上排两张幅度谱的整体结构是否一致；2. 再看下排相位误差图中蓝色斑点密度与深浅差异；3. 最后结合 0 到 0.5 秒静音段观察哪侧残留更少

[![原论文 Figure 6：Phase reconstruction for QC-GAN and Real-NN (32K): spectrograms (top) and absolute phase error…](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/interspeech-2026/a1a3373e9005/figure-6.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/interspeech-2026/a1a3373e9005/figure-6.png)

*论文图 6。原论文 Figure 6：“Phase reconstruction for QC-GAN and Real-NN (32K): spectrograms (top) and absolute phase error weighted by clean speech amplitude (bottom).”。*

上排是 2 模型的幅度谱，下排是经干净幅度加权的绝对相位误差，颜色越深误差越大，可见左侧四元数模型的下排蓝色斑点更少更浅，平均加权相位误差从 0.414 弧度降到 0.353 弧度约 14.7%，且前 0.5 秒静音段的噪声抑制更接近干净参考。但需注意这是单样本可视化，不能推广为全测试集每句都如此，全集结论应以柱状图的 824 句聚合为准。

### 成本、边界与还不能承诺的事

论文直接报告的代价是计算开销。四元数 Tiny 需要 3.75G 实数乘加量，其中参数化层为 0.22G 四元数乘加，1 个四元数乘加等于 16 个实数乘加，而 32K 实数对照仅需 0.07G。实测 4 线程 CPU 上 Tiny 的实时率为 0.89，虽低于 1.0 的实时门限但余量很小，去掉 2 个阶段 Conformer 后降到 0.107，与 32K 实数的 0.106 几乎相同，说明 CPU 瓶颈主要在 Conformer 的调度开销而非算术总量，GPU 上 Tiny 为 0.015 远低于实时。限制还包括判别器在实数大模型上对单一分数与整体质量的影响方向不一致，背景单项上 Base 并未领先，以及 DNS 用的是无参考客观分而非人评。

未测量误判率、流式延迟与端侧功耗，不能承诺这些量同步改善。总体趋势不等于每组每步都成立，训练曲线显示四元数在 30 到 40 轮后进入稳定平台，而 32K 实数全程波动在低位，140K 实数虽高但用了 4 倍参数，这些都是特定配置下的观察，换数据与超参数需重新验证。

### 复现先做什么，需要哪些配置？

复现应先从官方仓库确认代码当前可用，再按论文实验条件搭建。数据上准备 VoiceBank 加 DEMAND 的 28 人训练与 2 人测试划分，或 DNS 第三届挑战的 760 小时语音、181 小时噪声与房间脉冲响应，注意 2 个数据集分别从零训练，不能混用权重。信号处理固定为 16 千赫兹、2 秒裁剪、25 毫秒窗、6.25 毫秒跳长、0.3 次方压缩，损失权重按 0.1、0.9、0.2、0.05、0.05 起步，优化器用 AdamW 并设生成器 5 乘 10 的负 4 次方、判别器 1 乘 10 的负 3 次方、每 30 轮衰减、梯度裁剪 1.0。模型先跑 Tiny 的 16 增长、1 层瓶颈、16 解码通道与 4 注意力头，验证 35K 量级能否复现 3.23 附近，再扩到 Base 的 64 增长、4 层瓶颈、64 通道。

判别器输入是幅度谱对，输出归一化感知分，训练时同时记录感知分数、可懂度与复合指标，避免只看单一分数。推理开销要同时记录实数乘加、四元数乘加与 CPU、GPU 实时率，因为参数量小不等于计算量小。若要部署到 CPU 端侧，应优先验证融合四元数算子与线性注意力等降延迟手段，并补上真实延迟与主观听音这两项论文未充分覆盖的验证。

### 何时值得尝试这个方法？

当任务是单通道增强、输入为短时傅里叶变换谱、必须在 0.1M 甚至 0.05M 以下保持可懂度与感知质量时，这个框架值得尝试，因为它的结构先验把幅度与相位的耦合写进代数，实测在参数对齐下提升感知分数并降低群延迟误差。当已有充足参数预算且只追求背景抑制单项最高时，实数大模型仍可能是更直接的选择。当数据是多通道、流式或端侧强实时约束时，论文仅展望了多通道与流式扩展，并指出注意力是 CPU 瓶颈，直接照搬前需先做延迟优化。

常见误解是把参数减少 75% 等同于计算更快，实际上哈密顿展开会增加实数乘加，参数与算力要分开评估；另一个误解是把无参考客观分当成人评，DNS 上的领先仍需主观验证。收束一句话：用四元数耦合换参数效率，用度量判别换听感方向，是本文可复述的核心动作，而成本是更高的实数运算与更紧的 CPU 实时余量。

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。
- 评分规则：type-aware-v1
- 评分模型：muse-spark-1.3-contributor
- 评分请求协议：openai_responses

---

[← 返回 interspeech-2026 论文汇总](/posts/conference-interspeech-2026/)
