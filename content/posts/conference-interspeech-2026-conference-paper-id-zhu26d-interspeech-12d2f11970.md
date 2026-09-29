---
title: "DASM: Detecting AI-Synthetic Music via Authentic Manifold Deviation Modeling"
date: 2026-09-28
draft: false
description: "针对生成器持续演化导致判别边界失效的问题，DASM 只用真实音乐学习记忆库流形再用原始与偏差双分支判别，在 SONICS 上报告 0.13% EER、99.89% 准确率、99.98% AUC，代价是跨域到 FakeMusicCaps 时 EER 仍升至 25.59% 且需两阶段训练与 MERT 提示调优。"
tags: ["提示学习", "检索增强", "鲁棒性", "音乐", "音频深度伪造检测"]
categories: ["interspeech-2026 论文"]
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_paper_id: "conference:interspeech:2026:conference-paper-id:zhu26d_interspeech"
paper_digest_source_kind: conference
paper_digest_conference_id: "interspeech-2026"
paper_digest_conference_record_url: "https://www.isca-archive.org/interspeech_2026/zhu26d_interspeech.html"
paper_digest_conference_pdf_url: "https://www.isca-archive.org/interspeech_2026/zhu26d_interspeech.pdf"
paper_digest_api_reader_contract: "beginner-researcher-v3"
paper_digest_api_reader_article_sha256: "4b7b797ed9b282d57bffb56eab18a6ceb291820fe2cea36ba21a47ddcd155320"
paper_digest_api_reader_plan_sha256: "487ade65773ab8878065faf4e50b6cea26a44ff49e5c536eb291ec7672ab90c4"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings-v4"
paper_digest_api_reader_source_bindings_sha256: "dd5d91ad2817b935cfbb519accae6df621bc2bc69b20cbd49be96d5610755b82"
paper_digest_api_reader_source_table_count: 4
paper_digest_api_reader_source_formula_count: 0
paper_digest_api_reader_structured_artifacts_sha256: "fe7a7d380d26b75bd475b5be96025ad3ed40e129c6848391d87366127ba5071b"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity-v1"
paper_digest_api_reader_author_identity_sha256: "803abb2145057c362e69c0ea5aca3f53d931990468b918ef0f4f8ba908a709b7"
paper_digest_api_reader_author_count: 4
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity-v1"
paper_digest_api_reader_resource_identity_sha256: "5f6138ab3691b953405931218be923fe64a00ce48ad63f23c8559a84a424dd27"
paper_digest_api_reader_resource_count: 0
paper_digest_api_reader_decision_projection: "api-reader-decision-projection-v2"
paper_digest_scoring_contract: "api-scoring-audit-v2"
paper_digest_taxonomy_contract: "paper-taxonomy-flat-tags-compat-v1"
paper_digest_taxonomy_selection_contract: "paper-taxonomy-selection-v1"
paper_digest_taxonomy_registry_version: "paper-taxonomy-v1"
paper_digest_taxonomy_registry_sha256: "15c82a567ce5a55dc1175684ed08b64c158558639d9c8fb822c9587ec32a8778"
paper_digest_taxonomy_concepts: [{"facet":"method","id":"method.prompt-learning","label":"提示学习"},{"facet":"method","id":"method.retrieval-augmented","label":"检索增强"},{"facet":"research_focus","id":"research_focus.robustness","label":"鲁棒性"},{"facet":"signal","id":"signal.music","label":"音乐"},{"facet":"task","id":"task.audio-deepfake","label":"音频深度伪造检测"}]
paper_digest_primary_task: "音频深度伪造检测"
paper_digest_primary_method: "检索增强"
paper_digest_score: 7.3
paper_digest_rank_bucket: "前50%"
paper_digest_document_type: "方法研究"
paper_digest_conference_structure: pdf-visual-quote-evidence-v1
---

# 📄 不追踪伪造，只锚定真实：DASM 用真实流形偏差做音乐深伪检测

> 英文题目：*DASM: Detecting AI-Synthetic Music via Authentic Manifold Deviation Modeling*

> 会议身份：`conference:interspeech:2026:conference-paper-id:zhu26d_interspeech`



> 来源为官方会议 PDF；图片依据原页像素，表格数字依据原文引用。PDF 文字层不视为原始 TeX，未可靠恢复的结构不作推断。


> 会议来源：[官方记录](https://www.isca-archive.org/interspeech_2026/zhu26d_interspeech.html) · [官方 PDF](https://www.isca-archive.org/interspeech_2026/zhu26d_interspeech.pdf)

标签：#提示学习 #检索增强 #鲁棒性 #音乐 #音频深度伪造检测

评分：**7.3/10** | 创新 1.6/2 | 技术严谨 1.3/1.5 | 实验充分 1.2/1.5 | 清晰度 0.8/1 | 影响力 1.2/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 0.9/1.5

排名：前50% | 文档类型：方法研究

## 👥 作者与机构

- Xinya Zhu：机构信息未能从会议 PDF 纯文本可靠映射
- Mengyu Qiao：机构信息未能从会议 PDF 纯文本可靠映射
- Wenqiang Li：机构信息未能从会议 PDF 纯文本可靠映射
- Zhihui Yang：机构信息未能从会议 PDF 纯文本可靠映射

## 📌 核心摘要

音乐伪造检测的输入为完整音乐波形，输出为真伪二分类，难点在于生成器快速迭代导致伪造分布非平稳而判别边界迅速过时。本文提出真品流形偏差建模框架 DASM（Detecting AI-Synthetic Music via Authentic Manifold Deviation Modeling），方法链分为两阶段。第一阶段用冻结音乐编码器 MERT-330M 抽取声学语义特征并仅在真品上训练正交记忆库以形成压缩流形先验。第二阶段冻结记忆库，用稀疏交叉注意力以记忆库重构输入并经平均池化得到原始向量与偏差向量。第三将两路信号经独立投影融合后送入交叉熵加角间隔分类头完成判决。与已有判别式方法相比，该机制不拟合伪造伪影而度量偏离真品流形的方向与幅度，因而对未知生成器更具稳定性。在 SONICS 数据集上，DASM 以 0.13% 等错误率显著优于最强基线 WPT-XLSR-AASIST 的 1.04%，准确率达 99.89%，曲线下面积达 99.98%，且平均声学退化精度下降更小。该结论目前仅在全曲合成音乐上得到验证，对跨数据集分布偏移与局部篡改仍存在明显性能边界。训练使用单卡 RTX 4090，原文未披露推理时延、吞吐与部署成本。

## 🔗 开源与复现资源

本次未形成可展示的已核验资源记录，开放状态尚未核实。
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 输入是什么，目标是什么，这篇解读要交付什么？

本文解读的输入是 Interspeech 2026 论文 DASM 的正文证据与两张官方原图像素，目标是让刚进入语音与音乐音频方向的研究生能复述方法并核对实验条件。必须保留的信息包括数据集构成与划分、2 阶段冻结与更新关系、记忆库规模与检索参数、提示 token 数量、损失权重、主结果与跨域结果的适用边界。输出按学习依赖组织，先讲任务与相关路线，再走完一个样本的输入到输出，然后讲训练、实验条件、结果与反证，最后给出复现清单。文中教学例子会明确标为例子，不引入无源数值。

资源状态方面，本次未发现来源绑定且完成 HTTPS 验证的资源，因此不能声称代码、模型或数据已公开，复现讨论只依据论文报告的配置进行。

### 此前路线为什么在新生成器面前容易失效？

论文把已有工作分为 3 条线。第一条是语音反欺诈与音乐深伪检测的判别路线，从 ASVspoof 的手工谱特征与混合高斯，到 RawNet2 端到端波形、AASIST 谱时图网络、基于自监督语音表示的方法，再到音乐侧的轻量卷积 M5、图建模 SingGraph、声源分离 MOSS 和 wavelets 增强的 WPT-XLSR-AASIST。它们的共同点是训练时同时需要真实与伪造样本，决策边界被训练期见过的伪造模式塑造。

第二条是记忆增强的异常检测，在图像等领域用原型记忆正常样本，但论文指出该思路在音频取证中尚未被探索，且已有重建方法多把检测压缩为标量误差阈值，丢掉了偏差的方向结构，还把正常表示学习与判别训练混在一起。第 3 条是 MERT 音乐理解模型与提示调优，前者提供大规模自监督的音乐表示，后者通过在冻结编码器前加可学习 token 做参数高效适配。

论文的判断是，当 Suno 与 Udio 等新生成器改变伪造分布时，第一条路线的边界会系统性偏移，这属于结构性盲区，而非单纯增加伪造样本就能根治。DASM 因此选择锚定真实分布，把检测重定义为偏离测量。

### 任务设定与评测问题是什么？

研究任务是音乐级 AI 合成检测，输入为完整歌曲或 10 秒音频片段，输出为真实与合成的二分类。SONICS 是主训练与评测基准，包含 97164 首，其中 48090 首真实来自 YouTube，49074 首全合成来自 Suno 与 Udio，采样率 24 kHz，按 7 比 1 比 2 划分训练、验证与测试。FakeMusicCaps 用于跨数据集评测，包含 39056 个片段，其中 5324 个真实来自 MusicCaps，33732 个合成来自 MusicGen、MusicLDM、AudioLDM2、StableAudio 和 Mustango，同样 24 kHz 并按 7 比 1 比 2 划分。两者的关键差异是 SONICS 提供带人声与伴奏的完整伪造曲目，而 FakeMusicCaps 混合了全合成、仅人声合成与仅伴奏合成，生成场景更多样。评测指标为等错误率 EER、准确率 ACC 与曲线下面积 AUC，EER 越低越好，ACC 与 AUC 越高越好。

论文还设置了声学退化鲁棒性、跨域泛化与重建误差分布 3 类附加问题，分别考察压缩、噪声、混响与时移下的稳定性、未见生成器下的迁移能力，以及记忆库是否真正学到真实与伪造的几何分界。

### DASM 的两阶段全景如何串起一个样本？

沿一个 10 秒片段走完全流程有助于建立整体感。音频先重采样到 24 kHz 并切为 240000 采样点，经冻结的 MERT-330M 编码器得到时频特征 Forig，形状为时间帧 T 乘特征维 D。第一阶段只用真实音乐训练记忆库，此时 MERT 与分类器冻结，只有记忆库参数更新，目标是让记忆库能重建真实特征。第二阶段冻结记忆库，用稀疏交叉注意力把 Forig 投影为 Frecon，再分别平均池化得到 zorig 与 zrecon，相减得到偏差 zdev，最后把原始向量与偏差向量送入双分支分类器输出真伪。

2 阶段解耦的安排理由在原文中明确写出，即避免正常表示学习与判别学习互相干扰，先把真实流形压成先验，再学如何利用偏离做判别。第二阶段还加入提示调优与数据增强，前者适配 MERT 而不改主干，后者以 50% 概率施加卷积噪声、脉冲噪声、平稳噪声、时移、音量扰动、高斯噪声与压缩，信噪比 10 到 40 dB，时移正负 20%，音量 0.8 到 1.2 倍，高斯标准差 0.005，压缩 64 到 128 kbps。
下面导读图 1 的 2 阶段框架，重点看蓝色与橙色区域的分工与冻结关系。

> **看图路径：** 1. 先沿左上蓝色 Phase 1 箭头看真实音频如何经冻结编码器进入记忆库并回传最小化距离；2. 再看右上橙色冻结流形先验如何向下方提供 K 与 V 投影；3. 接着沿左下 Phase 2 两条音频输入看 Forig 分叉为保留聚合支路与 Top-k 重建支路；4. 最后看右下 Zorig 与 Zdev 如何汇入 Classify 输出 Fake 与 True

[![原论文 Figure 1：DASM framework. Phase 1 (blue): Memory bank training on real audio via reconstruction loss, with…](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/interspeech-2026/69de1281a039/figure-1.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/interspeech-2026/69de1281a039/figure-1.png)

*论文图 1。原论文 Figure 1：“DASM framework. Phase 1 (blue): Memory bank training on real audio via reconstruction loss, with MERT and the classifier frozen.”。*

图 1 上半蓝色框为 Phase 1 真实流形建模，真实音频经冻结的特征提取器进入记忆库云，通过最小化距离更新记忆库，火焰图标表示可训练，雪花表示冻结，右侧箭头标明学好后整体冻结。下半橙色框为 Phase 2 偏差检测，真实与伪造音频共用带提示 P 的提取器，一路保留聚合得到 Zorig，另一路经 Project 得到查询 Q，对冻结记忆库的 K 与 V 做 Top-k 注意力、掩码与 softmax 加权得到 Frecon 与 Zdev，最后拼接分类。像素细节显示注意力矩阵为紫色热力块，掩码后稀疏化，聚合符号为叉圈，分类端以红色伪造与绿色真实图标收束。该图不支持读出具体数值，只能确认模块连接与冻结位置，数值以正文配置为准。

### 记忆库、重建与双分支各自做什么？

音乐感知特征提取是起点。MERT 在大规模音乐语料上通过自监督预训练，能同时捕捉低层音色与高层音乐结构，论文认为这比通用语音表示更适合音乐深伪检测，冻结使用则保留预训练声学知识并避免灾难性遗忘。

**真实音频流形 × 记忆库：** 真实音频流形指真实音乐特征在表示空间中相对稳定的分布范围，负责提供不变的参照；记忆库是用 N=2048 个可学习正交向量对该分布做的压缩近似，负责在推理时把任意输入投影回真实侧，二者搭配的理由是判别边界会随伪造分布漂移而真实分布更稳定，组合后检测不再拟合伪造痕迹而是测量偏离真实的几何距离。

记忆库矩阵 B 为 2048 乘 D，包含 2048 个正交先验，每个代表一类稳定的真实声学模式。正交约束用贝塔 0.1 加权的 F 范数项实现，目的是防止冗余编码，让记忆库张成不重叠的真实分区，从而最大化多样性并消除冗余。

**稀疏交叉注意力重建 × 流形偏差：** 稀疏交叉注意力重建负责以原始特征为查询、记忆库为键值做 Top-k=64 检索加权，得到输入在真实子空间上的投影；流形偏差负责用原始池化向量减重建池化向量得到 zdev 并保留方向与大小，二者搭配的理由是只看标量重建误差会丢掉偏离方向，组合后分类器同时看到绝对音色内容与偏离真实的向量。

具体计算按算法 1 进行，先对 Forig 与 B 做查询、键、值投影，再做 8 头稀疏注意力，每头只保留 Top-k 为 64 的最大注意力后做 softmax 加权求和，最后拼接多头并投影回 Frecon。稀疏的理由是每次只激活最相关的先验，迫使 specialization 并减少无关原型的重建噪声，用紧凑而具表达力的编码覆盖真实流形。

**MERT 编码器 × 提示调优：** MERT 编码器负责提供在大规模音乐语料上自监督预训练的声学与音乐语义表示，参数保持冻结以保留先验；提示调优负责在每层前拼接 Np=10 个可学习提示 token，只用 10240 量级参数做任务适配，二者搭配的理由是全量微调易遗忘且开销大，组合后在不改动主干的前提下让特征更适合真伪判别。

得到 Frecon 后做平均池化并相减得到 zdev，再经两组全连接加批量归一化与 ReLU 得到 z1 与 z2。其中 z1 捕捉输入的绝对声学特性，z2 编码其相对真实流形的几何偏离，两者分工互补。

**原始分支 × 偏差分支：** 原始分支负责对 zorig 做投影得到 z1，编码输入本身的绝对声学特性；偏差分支负责对 zdev 做投影得到 z2，编码输入相对真实流形的几何偏离，二者搭配的理由是真实样本偏差接近零而伪造样本系统性偏大但绝对特征仍有辅助价值，组合拼接后送入分类头可互补判决。

分类头把拼接向量映射到 2 维对数几率。举例说明，设某真实片段池化后与重建几乎重合，则 zdev 接近零向量，偏差分支输出小激活，判决偏向真实；设某合成片段的合成器混响不在记忆库覆盖内，则重建只能用最近的真实原型近似，残差在多个维度系统性偏大，偏差分支输出大激活，判决偏向伪造。这只是帮助理解方向的例子，不代表论文给出逐维数值。

### 两阶段各冻结谁、更新谁、用什么监督？

第一阶段为真实流形学习，只用 37582 个真实片段，监督来自重建均方误差加正交正则，优化器为 AdamW，学习率 1 乘 10 的负 4 次方，权重衰减 1 乘 10 的负 5 次方，余弦退火 10 轮，无增强。更新集合为记忆库本体 B 与投影矩阵 WQ、WK、WV、WO，MERT 与分类器冻结，因此梯度不进入主干，执行顺序上必须先完成该阶段再冻结记忆库进入第二阶段。第二阶段为偏差判别，冻结记忆库与 MERT 主干，只更新提示嵌入 P 与分类器参数，提示每层 10 个 token，分类器学习率为提示的 5 倍，基础学习率 2 乘 10 的负 5 次方，同样 AdamW 与余弦退火，最多 20 轮，早停耐心 10，批量 16，在单张 RTX 4090 上运行。监督为交叉熵加 0.5 倍 A-Softmax，角度间隔 4，尺度 30，提示调优仅在第二阶段引入以适配真伪判别任务。

**交叉熵损失 × A-Softmax 损失：** 交叉熵损失负责保证二分类的预测准确性；A-Softmax 损失负责以角度间隔 m=4 和尺度 s=30 增大类间角距离，二者以 LPhase2=LCE+0.5*LAS 联合优化，搭配理由是仅有准确率目标时真伪嵌入可能在边界处混叠，组合后同时优化正确性与可分性。

需要指出的缺项是，论文未报告提示插入的具体层数是每层独立还是共享、分类器两层宽度 D 的取值、A-Softmax 在小批量下的数值稳定处理，以及第一阶段记忆库初始化方式，这些在复现时需按常规实现补齐并记录，不从模型名称推定，复现清单应逐项核对冻结对象与更新对象。

### 数据、切分、增强与指标如何保证可比？

数据侧已在问题节交代总量与来源，此处强调可比条件。SONICS 与 FakeMusicCaps 均固定 24 kHz，主实验训练与测试均切 10 秒片段即 240000 采样点，避免时长不一致引入偏差。SONICS 按 7 比 1 比 2 划分，FakeMusicCaps 同样比例，跨域时在 SONICS 上训练、在 FakeMusicCaps 上测试，不混入目标域伪造做适配，因此测的是未见生成器与声学域偏移下的泛化。对照基线包括 M5、SSL 反欺诈、AASIST、RawNet2、SingGraph 与 WPT-XLSR-AASIST，覆盖传统卷积、语音自监督、图网络与音乐专用路线，论文在同一 SONICS 划分下比较，消融则在 SONICS 上开关记忆库、单双分支与提示调优。

鲁棒性对比选择此前最强的 WPT-XLSR-AASIST，条件包括轻重音量、脉冲噪声、高斯噪声、平稳噪声、卷积混响、时移与压缩，报告相对原始精度的升降百分点，而非绝对精度直接相减后的百分点概念混淆。聚合对象为片段级准确率与全测试集 EER 与 AUC，未报告置信区间与多次随机种子方差，这是后续验证需要补的统计量，复现时应固定划分与片段切分再对比。

### 主结果、跨域与鲁棒性分别支持什么？

主结果问题是，在同一 SONICS 全曲合成条件下，DASM 是否优于已有可运行方法。公平条件为相同划分与片段长度，指标方向为 EER 越低越好。下表聚焦 EER，用原文连续句覆盖的数值组织，DASM 的 ACC 与 AUC 见表后文字，避免为凑宽度编造基线 ACC。

| 评估条件 | 指标与方向 | 对照基线 | 对照基线 EER | DASM 的 EER |
| --- | --- | --- | --- | --- |
| SONICS 全曲合成 | EER 越低越好 | WPT-XLSR-AASIST | 1.04% | 0.13% |
| SONICS 全曲合成 | EER 越低越好 | SingGraph | 1.59% | 0.13% |
| FakeMusicCaps 跨域 | EER 越低越好 | SingGraph | 30.92% | 25.59% |

表后解释，DASM 在 SONICS 上报告 0.13% EER、99.89% 准确率与 99.98% AUC，优于音乐专用的 WPT-XLSR-AASIST 的 1.04% EER 与 SingGraph 的 1.59% EER。

跨域到 FakeMusicCaps 时 DASM 为 25.59% EER 与 75.77% 准确率，相对 SingGraph 的 30.92% 有原文所述的相对降低，但绝对值仍高，说明真实流形建模提供了更通用的真实线索，却未弥合声学域差距。未胜出边界是跨域绝对性能仍然不足，不能把相对提升解读为已解决泛化。鲁棒性方面，DASM 原始精度 99.81% 高于基线 98.91%，平均下降 1.74% 对比 4.7%，在轻重时移下几乎无下降，在重压缩与重平稳噪声下分别下降 5.1% 与 5.6%，而基线在对应条件下下降可达 19.3% 与 15.6%，支持其对压缩与噪声更稳，但重脉冲下 DASM 下降 1.8% 略大于基线的 0.2%，属于具体代价。

跨域比较问题是，在 SONICS 训练而 FakeMusicCaps 测试的未见生成器条件下，各方法的准确率与 AUC 是否同步分层。下表用原文表 4 的准确率与 AUC 组织，保持五列结构以便对照 EER 表的结论。

| 评估条件 | 指标与方向 | 对照基线 | DASM 数值 |
| --- | --- | --- | --- |
| FakeMusicCaps 跨域 | ACC 越高越好 | SingGraph | 75.77% |
| FakeMusicCaps 跨域 | ACC 越高越好 | WPT-XLSR-AASIST | 75.77% |

表后解释，该表说明跨域时 DASM 的 75.77% 准确率与 81.43% AUC 仍高于 SingGraph 的 71.15% 与 76.43%，以及 WPT-XLSR-AASIST 的 66.84% 准确率，传统方法则更低，M5、RawNet2 与 SSL 反欺诈的 EER 均在 39% 以上且准确率不足 60%。

这支持真实流形线索更具生成器无关性，但 25.59% 的绝对 EER 表明声学域差距仍是开放挑战，不能外推为全测试集阈值性能。
下面导读图 2 的重建偏差累积分布，重点看真实与伪造两条曲线的分离方向与均值标注含义。

> **看图路径：** 1. 先看左图横轴残差范数与纵轴累积概率，比较蓝色真实曲线与红色伪造曲线左右位置；2. 再看右图横轴余弦相似度，比较红色伪造集中在低相似区而蓝色真实偏向高相似区；3. 核对两图图例中均值 mu 与样本量 n=200 的标注；4. 结合标题确认这是从每类 5000 池中选 200 个最优样本的累积分布而非全部测试集分布

[![原论文 Figure 2：CDF of reconstruction deviation for real and AI- synthetic music.](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/interspeech-2026/69de1281a039/figure-2.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/interspeech-2026/69de1281a039/figure-2.png)

*论文图 2。原论文 Figure 2：“CDF of reconstruction deviation for real and AI- synthetic music.”。*

图 2 左为残差范数累积分布，横轴为原始减重建的范数，右为大残差，蓝色真实曲线集中在 300 到 410 区间，红色伪造曲线集中在 500 附近几乎垂直，说明伪造重建误差系统性更大。右为余弦相似度累积分布，横轴为原始与重建余弦，左为低相似，红色伪造集中在 0.18 附近，蓝色真实集中在 0.27 到 0.30 并向 0.45 拖尾，说明真实方向一致性更高。两图图例标注每类 200 样本与均值，标题说明是从每类 5000 池中选 200 个最优样本绘制，因此分离程度不能直接推广为全测试集的阈值性能，需结合正文均值理解。

### 拿掉记忆库、单分支与提示调优会发生什么？

消融问题是，性能增益是否分别来自真实先验、双信号互补与任务适配。条件为同一 SONICS 配置，每次只改一处。下表用原文连续句覆盖的 EER 与精度组织，同样保持 5 列但不混入重建几何度量。

| 检验目标 | 指标与方向 | 消融配置的 EER | 完整 DASM 的 EER | 论文报告的判断 |
| --- | --- | --- | --- | --- |
| 记忆库作用 | EER 越低越好 | 0.52% | 0.13% | 去记忆库后明显上升 |
| 提示调优作用 | EER 越低越好 | 0.89% | 0.13% | 去提示调优后上升至 0.89% |
| 提示调优作用 | 准确率越高越好 | 98.27% | 99.89% | 去提示调优后精度下降 |

表后解释，完全去掉记忆库后 EER 升至 0.52%，说明真实流形编码不可或缺。

只用原始特征或只用重建特征均劣于双分支完整模型的 0.13%，支持两路互补；去掉第二阶段提示调优后 EER 升至 0.89% 且精度降至 98.27%，说明冻结 MERT 若不做任务适配则判别不足。反例是消融未报告去掉正交约束或改变 Top-k 与记忆库规模时的曲线，论文仅文字说明较大的 k 会引入无关原型噪声而 EER 无持续改善，因此 2048 与 64 是兼顾性能与稳定的选择，而非全局最优的证明。

### 还有哪些边界与未验证的推测？

直接报告的限制是跨域绝对误差仍高，FakeMusicCaps 上 25.59% EER 意味着约 1/4 片段会误判，不能用于高风险自动下架。有限解释是偏差幅度可量化 AI 参与度并为 AI 辅助内容管理提供基础，论文以支持口吻提出，但未在部分合成或人声与伴奏分离合成上做定量阈值实验，因此属于待验证的延伸，而非已证明的分级能力。

未验证的推测包括对未见声码器与未来音乐生成器的持续有效性，论文用真实分布更稳定的论证支持，但未测量延迟、推理显存与吞吐，训练用单卡 4090 而推理开销未拆分编码器、前向检索与分类头的占比。统计上缺少多种子方差与显著性检验，鲁棒性表格中个别正值表示相对原始精度的提升而非绝对改善，解读时需先确认纵轴是改变量还是原始指标，避免把曲线向下直接当作性能变差。

### 复现应先做什么，需要哪些超参数？

复现先做数据与特征对齐，再做 2 阶段流水线。第一步按 24 kHz 重采样并切 10 秒片段，复刻 7 比 1 比 2 划分，冻结 MERT-330M，只用真实片段训练 2048 先验、8 头、Top-k 为 64 的记忆库 10 轮，学习率 1 乘 10 的负 4 次方，权重衰减 1 乘 10 的负 5 次方，余弦退火，正交权重 0.1。第二步冻结记忆库与主干，加入每层 10 个提示 token，与双分支分类器联合训练，学习率 2 乘 10 的负 5 次方且分类器取 5 倍，损失为交叉熵加 0.5 倍 A-Softmax，间隔 4，尺度 30，批量 16，早停 10 轮，增强按 50% 概率施加前述噪声、时移、音量与压缩。

先验证第一阶段真实重建误差是否收敛，再验证第二阶段 SONICS 的 EER 是否接近 0.13%，最后再测跨域与退化，避免跳过第一阶段直接联合训练。信息条件方面，当前无可用代码与权重声明，因此需自行实现算法 1 的稀疏注意力、平均池化与偏差相减，并记录随机种子、划分文件与增强参数，还需补测误判率、延迟与显存才能评估部署可行性。

### 何时值得尝试 DASM，何时应谨慎？

当任务是全曲合成音乐检测且有充足真实音乐可用于建模真实分布，同时希望对压缩与噪声保持稳定，DASM 值得尝试，其 2 阶段解耦与双分支设计把绝对内容与偏离方向分开利用，重建几何分析也提供了可解释的调试信号。下表聚焦重建几何，用原文均值组织，帮助判断阈值思路的可行性。

| 信号类型 | 度量名称 | 真实音频均值 | 合成音频均值 | 方向解读 |
| --- | --- | --- | --- | --- |
| 全曲音乐 | 欧氏残差均值 | 390.84 | 506.83 | 合成更大，偏离真实 |
| 全曲音乐 | 余弦相似度均值 | 0.2769 | 0.1822 | 真实更高，方向更一致 |

表后解释，欧氏距离与余弦相似度在互补维度上分离真实与伪造，支持记忆库学到流形边界，但这是基于优选 200 样本的累积分布展示，不能直接当作全量阈值。当目标是跨域到新生成器、部分合成或实时系统时应谨慎，因为跨域 EER 仍超 25%，部分合成未定量验证，且推理成本未报告。

后续至少补三项验证，多种子统计、部分合成与人声伴奏分离场景的分级测试，以及编码器与检索的延迟拆分，才能把相对优势转化为可部署收益。

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。
- 评分规则：type-aware-v1
- 评分模型：muse-spark-1.3-contributor
- 评分请求协议：openai_responses

---

[← 返回 interspeech-2026 论文汇总](/posts/conference-interspeech-2026/)
