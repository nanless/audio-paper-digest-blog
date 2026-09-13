---
title: "OmniZip: Learning a Unified and Lightweight Lossless Compressor for Multi-Modal Data"
date: 2026-09-13
draft: false
description: "针对单模态压缩器重复部署与大模型压缩器过重的问题，OmniZip 用统一可逆分词加双路模态路由的轻量序列模型预测概率再算术编码，在 16 个数据集上接近专用方法并在笔记本与手机上接近实时，代价是自然图像与基因等难例仍弱于专用大模型。"
tags: ["混合专家模型", "高效推理", "端侧运行", "语音编码"]
categories: ["cvpr-2026 论文"]
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_paper_id: "conference:cvpr:2026:conference-paper-id:Zhao_OmniZip_Learning_a_Unified_and_Lightweight_Lossless_Compressor_for_Multi-Modal_CVPR_2026_paper"
paper_digest_source_kind: conference
paper_digest_conference_id: "cvpr-2026"
paper_digest_conference_record_url: "https://openaccess.thecvf.com/content/CVPR2026/html/Zhao_OmniZip_Learning_a_Unified_and_Lightweight_Lossless_Compressor_for_Multi-Modal_CVPR_2026_paper.html"
paper_digest_conference_pdf_url: "https://openaccess.thecvf.com/content/CVPR2026/papers/Zhao_OmniZip_Learning_a_Unified_and_Lightweight_Lossless_Compressor_for_Multi-Modal_CVPR_2026_paper.pdf"
paper_digest_api_reader_contract: "beginner-researcher-v3"
paper_digest_api_reader_article_sha256: "28399000b16857b1929f490f2a055d9e9cabcfea3ccc6744a4815dde36bcca66"
paper_digest_api_reader_plan_sha256: "e96b128b16150e41abd785795ae904792cef820351b77d3b1b40abe96d7ffc43"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings-v4"
paper_digest_api_reader_source_bindings_sha256: "53929054eb895d54f25372605bd327a5a4e79cdc583d0c1db78da2dac1b62fc8"
paper_digest_api_reader_source_table_count: 4
paper_digest_api_reader_source_formula_count: 0
paper_digest_api_reader_structured_artifacts_sha256: "5315520974a7b32da146da1f1f1008b9a75963681ad2b9a73fb41e6adeaa739f"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity-v1"
paper_digest_api_reader_author_identity_sha256: "408f56580000e85543c71438220b481d4020dc38684dbbd59bc046d8e85f278a"
paper_digest_api_reader_author_count: 7
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity-v1"
paper_digest_api_reader_resource_identity_sha256: "a2fa60d30ccbc7b984f42f73a4496332e7f1dbb9c7954fb445d934c16cdf4679"
paper_digest_api_reader_resource_count: 1
paper_digest_api_reader_decision_projection: "api-reader-decision-projection-v2"
paper_digest_scoring_contract: "api-scoring-audit-v2"
paper_digest_taxonomy_contract: "paper-taxonomy-flat-tags-compat-v1"
paper_digest_taxonomy_selection_contract: "paper-taxonomy-selection-v1"
paper_digest_taxonomy_registry_version: "paper-taxonomy-v1"
paper_digest_taxonomy_registry_sha256: "15c82a567ce5a55dc1175684ed08b64c158558639d9c8fb822c9587ec32a8778"
paper_digest_taxonomy_concepts: [{"facet":"method","id":"method.moe","label":"混合专家模型"},{"facet":"research_focus","id":"research_focus.efficiency","label":"高效推理"},{"facet":"setting","id":"setting.on-device","label":"端侧运行"},{"facet":"task","id":"task.speech-coding","label":"语音编码"}]
paper_digest_primary_task: "语音编码"
paper_digest_primary_method: "混合专家模型"
paper_digest_score: 6.6
paper_digest_rank_bucket: "前50%"
paper_digest_document_type: "方法研究"
paper_digest_conference_structure: replayable-pdf-layout-v1
---

# 📄 一个模型压七种数据：OmniZip 以统一分词加稀疏路由做轻量无损压缩

> 英文题目：*OmniZip: Learning a Unified and Lightweight Lossless Compressor for Multi-Modal Data*

> 会议身份：`conference:cvpr:2026:conference-paper-id:Zhao_OmniZip_Learning_a_Unified_and_Lightweight_Lossless_Compressor_for_Multi-Modal_CVPR_2026_paper`


> ✅ 来源为官方会议 PDF；表格与 Figure 按原文证据绑定。PDF 公式以原页区域图片展示，未冒称作者原始 TeX。

> 会议来源：[官方记录](https://openaccess.thecvf.com/content/CVPR2026/html/Zhao_OmniZip_Learning_a_Unified_and_Lightweight_Lossless_Compressor_for_Multi-Modal_CVPR_2026_paper.html) · [官方 PDF](https://openaccess.thecvf.com/content/CVPR2026/papers/Zhao_OmniZip_Learning_a_Unified_and_Lightweight_Lossless_Compressor_for_Multi-Modal_CVPR_2026_paper.pdf)

标签：#混合专家模型 #高效推理 #端侧运行 #语音编码

评分：**6.6/10** | 创新 1.4/2 | 技术严谨 1.2/1.5 | 实验充分 1.3/1.5 | 清晰度 0.8/1 | 影响力 0.4/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 1.2/1.5

排名：前50% | 文档类型：方法研究

## 👥 作者与机构

- Yan Zhao：机构信息未能从会议 PDF 纯文本可靠映射
- Zhengxue Cheng：机构信息未能从会议 PDF 纯文本可靠映射
- Junxuan Zhang：机构信息未能从会议 PDF 纯文本可靠映射
- Dajiang Zhou：机构信息未能从会议 PDF 纯文本可靠映射
- Qunshan Gu：机构信息未能从会议 PDF 纯文本可靠映射
- Qi Wang：机构信息未能从会议 PDF 纯文本可靠映射
- Li Song：机构信息未能从会议 PDF 纯文本可靠映射

## 📌 核心摘要

本文面向多模态无损压缩，输入覆盖自然图像与医学图像及触觉信号等图像类数据，以及自然文本与基因序列及数据库记录与语音字节流，输出为可经熵编码精确还原的比特流，实际难点在于各模态维度与统计特性及离散化粒度高度异构，难以用单一概率模型统一估计似然。方法链由四步构成：模态统一分词器先将图像分块展平与文本字节对编码及语音字节映射为统一可逆词元并附加模态前缀，其输出序列直接进入基于RWKV的概率预测主干；模态路由上下文学习在时间混合的V投影上以四专家取二路由适配不同上下文依赖，其输出隐状态进入模态路由前馈模块；模态路由前馈模块以小型多层感知机专家增强非线性表达并保持每词元激活量基本不变；重参数化训练分支仅在训练期扩容以提升容量，推理时合并而不增加开销。相对把全模态转为字节或ASCII文本再套用大语言模型的做法，该设计保留了图像局部空间相关性与语音连续字节结构，并以稀疏激活控制多模态容量扩张，具有更轻量的实际意义。在Kodak消融评测任务下，完整OmniZip的压缩性能指标bits/Byte为3.307 bits/Byte，低于消融变体的压缩性能指标bits/Byte的3.414 bits/Byte。该结论适用边界受限于论文内十六个数据集的均衡训练评测划分，跨域泛化与音乐及噪声语音等外推场景尚未验证。训练成本来自在NVIDIA A100硬件上以余弦退火策略训练二十轮，推理开销在批量一百二十八时边缘端仍可维持零点一至一兆字节每秒量级的吞吐。

## 🔗 开源与复现资源

- 第三方资源：<https://github.com/facebook/zstd> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 输入是什么，要解决什么存储问题？

这篇论文的输入是真实世界中需要无损保存的多种数据。原文把数据分为 3 组：图像类包括自然图像、医学图像和触觉信号，文本类包括自然语言、基因序列和数据库，第 3 组是语音。目标是无损压缩，即解压后与原始比特完全一致，同时用尽可能少的比特表示。

评价沿用信息论的思路，最优码长由符号的负对数概率决定。做法是先把输入切成符号序列，再自回归地估计每个符号在历史条件下的概率，最后用熵编码把高概率符号用短码表示。论文采用算术编码逼近熵界。

必须保留的信息是评价指标比特每字节越低越好，以及压缩速度由模型推理速度决定。输出是一个统一的轻量压缩器，能在服务器、笔记本和手机上运行，而不需要为每种模态各部署一个专用压缩器。论文声明代码已公开，本次仅确认第三方压缩库链接可用，不对论文仓库可达性做断言。

### 已有路线分几类，各自卡在哪里？

按同输入同目标对照，已有工作可分为 3 类。第一类是经典通用压缩器，例如字典匹配加哈夫曼编码的工具、基于块排序变换的工具、基于快速匹配加有限状态熵编码的工具。它们不假设领域知识，能处理多种数据，但在图像类数据上效率有限。

第二类是经典专用压缩器。图像编码利用空间冗余做滤波预测或变换编码，语音无损编码用线性预测建模波形再压缩残差。它们在各自领域更强，但一个格式管一种模态，多模态系统要装多套，软件与硬件成本上升。

第 3 类是学习型压缩器。文本方法用自回归结构建模符号序列，图像方法建模空间依赖，近年还出现用大语言模型做概率预测的方法。论文报告用 8000000000 参数模型压一张高清图要超过 30 分钟，压一吉字节文本要数天，说明参数量远超被压缩数据，推理太慢难以部署。还有一类多模态尝试是把所有模态转成字节或文本再套用预训练大模型，论文指出这种做法忽略模态异构性，在非文本模态上效果次优。

### 为什么统一压缩难，难在数据哪里不一样？

难点来自模态在格式、维度和统计上的差异。论文明确对比：文本是离散序列且词汇变化大，图像是 2 维空间组织且有局部相关，语音是连续波形且频谱平滑，数据库是结构化类别字段，基因是符号序列但有特征基序。

如果都当成同一种符号处理，模型要么学不到空间相关，要么学不到时序平滑。举一个教学例子：把图像像素直接当文本子词送入文本分词器，只是为了说明分词空间对不上的问题，不代表论文做法。真正的困难是符号空间和依赖模式对不上。

第二个难点是轻量与容量的矛盾。大模型能记住跨模态规律但推理慢，小模型快但容易在混合训练中互相干扰。论文因此提出 3 个动作：设计可逆的统一符号空间，设计能按模态分配计算的上下文建模，设计能按模态变形表示的前馈结构，并用训练期增强容量的手段弥补小模型的容量损失。

### 一个样本走完哪三步？

先沿一个样本走完全流程。以一句文本为例，输入句子先经过统一分词得到符号序列，序列最前面加上文本前缀标记。预测模型从左到右估计每个符号在前面符号条件下的概率，得到一串条件概率。算术编码根据这些概率把序列转为比特流，解码端用同样模型和概率重放即可无损恢复。图像和语音走同样的 3 步，只是分词前端不同。

下图是全文框架总览，左侧是 3 类分词，右上是概率预测，右下是算术编码，阅读时请先分清三块的位置再看箭头走向与符号标注。

> **看图路径：** 1. 先沿左侧分词虚线框到中间预测模型框的红色大箭头看主路径走向；2. 再对比图像块扫描与文本子词切分与语音字节读入三类标注的差异；3. 最后看右下概率直方图到黑白比特条带的箭头理解编码输出形式

[![原论文 Figure 2：Overview of the proposed OmniZip framework.](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/934e0b2efa99/figure-2.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/934e0b2efa99/figure-2.png)

*论文图 2。原论文 Figure 2：“Overview of the proposed OmniZip framework.”。*

从像素可见，左侧虚线框内并排展示图像、医学、触觉、语音、文本、基因、数据库 7 种示例，每种示例下方都标注了前缀加数字串的形式，说明不同模态最终都变成了数字序列。中间红色大箭头把所有序列汇入右上预测模型框，框内写出输入符号集合与输出条件概率集合。右下框用概率直方图到黑白条带的箭头表示编码输出。解释是统一发生在分词输出端，建模发生在预测模型内部，压缩发生在编码端，三者解耦后换模态只需换分词前端。这也为后文在输出概率上屏蔽非目标模态词表的掩码操作埋下伏笔。

### 分词与掩码如何做到可逆又统一？

分词要同时满足可逆与统一。论文把数据分为 3 组处理。文本类包括自然语言、基因和数据库，使用子词分词，词表大小为十六千，并显式加入领域符号，例如基因的 4 个碱基字母和数据库常见关键字，以减少切分碎片。

图像类包括自然图像、医学图像和触觉图像，先切成 16 乘 16 乘三的图像块以保留局部空间相关，块内按光栅扫描展开，每个像素的红绿蓝依次展开为子像素，每个子像素作为一个符号。触觉力信号先从 3 维映射为彩色图像再同法处理，灰度医学图像则把每个像素强度直接当一个符号。语音因连续难无损离散化，直接读原始字节流，每个字节当一个符号。最后把各模态词表合并，并在每条序列前加模态专用前缀，帮助模型区分模态。在输出端做模态掩码，把非目标模态符号概率置零，只保留当前模态概率再编码。

**模态统一分词 × 算术编码：** 模态统一分词负责把图像块扫描、文本子词、语音字节等异构输入可逆映射为同一符号集并加模态前缀，算术编码负责依据预测概率把符号序列转为比特流，二者搭配的原因是算术编码只关心概率是否准确而不关心模态来源，组合后新增的含义是一个预测器加一个编码器即可处理多模态。

白话说，分词是翻译官，把方言翻成普通话但保留口音标签，编码是打包员，只按词频决定包装大小。复述时要能说出 3 组动作：文本类查子词表，图像类分块扫描展平，语音类按字节读入，以及前缀加在输入端而掩码做在输出端。

### 两个路由模块各自管什么？

预测骨干选型是轻量化的起点。论文在文本压缩上对比常见骨干，并测量笔记本处理器上的速度，结论是在轻量设置下循环注意力变体在压缩效率与速度上最平衡，因此选它作为骨干。每个块包含时间混合与多层感知机两部分，前者做上下文依赖，后者做非线性变换。

**上下文学习 × 前馈变换：** 上下文学习指时间混合模块对历史符号依赖的建模，前馈变换指多层感知机对当前表示的非线性变换，前者分工是决定看多远和看谁，后者分工是决定如何变形，搭配原因是多模态既有依赖长度差异又有分布差异，组合后新增的含义是可在依赖与变换两处分别按模态选专家。

论文在两处都加入稀疏路由。上下文路由只对值投影层做专家化，键层做语义索引、感受野门控层做记忆门控保持共享，值层代表具体记忆内容，多样性对多模态更关键。实现上用可学习路由器对每个输入给出每个专家分数，经归一化后取分最高的两个专家加权求和。前馈路由把原来一个大感知机换成 4 个小感知机，每次激活两个，激活参数量与原来大致相当。

**混合专家 × 模态路由：** 混合专家指保留多个并行子网络每次只激活其中得分最高的两个的结构，模态路由指用小网络按当前符号内容给出每个专家分数并做前二选择，二者搭配的原因是全量增大模型会拖慢推理而稀疏激活只增加少量计算，组合后新增的含义是每符号激活参数基本不变但拥有了按模态分工的容量。

下图展示了一个块的内部连接，左侧是主干，右侧是两个路由放大图，阅读时注意路由器虚线指向哪些分支以及加权求和的位置。

> **看图路径：** 1. 先看左侧主干上下两段残差结构区分上下文与前馈的位置关系；2. 再看右上绿框中路由器经归一化后只对值分支做前二选择的连线；3. 最后看右下蓝框中多个小感知机如何替代一个大感知机并加权求和

[![原论文 Figure 3：One block of OmniZip’s predictive model.](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/934e0b2efa99/figure-3.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/934e0b2efa99/figure-3.png)

*论文图 3。原论文 Figure 3：“One block of OmniZip’s predictive model.”。*

从像素可见，左列从上到下依次是层归一化、符号移位、感受野与键分支、含路由器的值分支、加权求和与输出，下半段是第二层归一化与含路由器的前馈分支，均有残差相加。右上绿框放大值路由，路由器经归一化给出分数并做前二选择，两个被选值块输出按权重相加。右下蓝框放大前馈路由，多个小感知机中被选中的两个同样加权相加。解释是上下文路由管看什么记忆，前馈路由管如何变形，两处都只在必要位置引入稀疏性，因此额外参数相对整个模型可忽略。消融显示只动值层比只动键或感受野更好。

### 损失与三阶段训练如何配合？

训练目标由三部分组成：主交叉熵衡量预测分布与目标分布的差异，门控对数平方损失惩罚过大的路由对数以稳定训练并加速收敛，负载均衡损失用变异系数的平方惩罚专家重要性与分配的方差，鼓励专家被均衡使用。权重分别取千分之一和 1%。

优化器使用融合版自适应矩估计，训练分 3 阶段以稳定混合专家：先冻结前馈路由训练其余参数两个周期，再冻结上下文路由训练其他部分两个周期，最后解冻全部参数用余弦退火训练 20 个周期，学习率从万分之一衰减到十万分之一，全程在图形处理器上进行。为平衡模态，每模态训练集通过采样控制在一吉字节，并用均衡批量采样器保证每批均匀采样。

**重参数化训练 × 稀疏推理：** 重参数化训练指训练时在感受野与键值层旁加额外分支增大容量且推理前合并回主路，稀疏推理指推理时每个符号只走被选中的专家分支，前者分工是解决训练容量不足，后者分工是解决推理成本过高，搭配理由是两者都追求容量与速度兼得，组合后新增的含义是训练更强而推理结构不变。

重参数化策略在训练时给感受野、键、值层加额外分支并用高秩矩阵分解增大容量，推理前合并回主路，因此不增加推理复杂度。需要指出的缺项是原文未报告路由器与专家之间的梯度截断细节，也未给出分支合并的恒等式推导，复述时不应从模型名称推定实现，只能说训练加分支而推理结构不变。

### 构造与推理的真实计算是什么？

为避免误解，这里把构造与推理的真实计算再讲一遍。构造指分词与批量组织，全部是确定性规则：查表、切块、扫描、字节读取、前缀拼接与掩码，没有可学习参数。训练指预测模型的参数更新，梯度来自交叉熵与两个正则项，路由器与专家参数按冻结与解冻参与更新。

推理指给定历史逐个预测下一个符号的概率分布，再送入算术编码器生成比特，解码端重复同样预测即可恢复，推理复杂度由激活的专家决定而非总参数决定。重参数化分支只在训练前向中出现，推理前合并，因此推理图比训练图小。本论文确有神经网络训练，以上阶段均实际执行，不属于无训练调用的情形。

### 数据基线与指标如何保证可比？

数据覆盖 7 种类型共 16 个数据集。图像在高分辨率数据集训练，在柯达、学习图像压缩挑战赛专业版与移动版以及同源测试集评估。医学用膝关节磁共振的轴位、冠状位与矢状位并沿用官方划分。文本用英文维基与电子书训练，在完整维基转储与电子书测试。

语音用公开朗读语音库官方划分。数据库在蜘蛛训练集训练，在维基结构化查询与蜘蛛测试集评估。基因用两个公开序列库并沿用官方划分。触觉用两个视觉触觉数据集官方划分。比较对象包括通用经典压缩器、图像专用编码器、语音专用编码器、近期学习型单模态压缩器以及转文本再套用大模型的方法。指标是比特每字节越低越好，复杂度看运算量与在图形处理器、笔记本处理器、手机神经引擎上的推理速度。

下表是骨干选型依据，直接选用原表以保留原始行列，比较前先明确问题与方向。

表前问题是轻量设置下哪种骨干兼顾压缩与速度，公平条件是同一文本分词与序列长度，指标方向是比特越低越好而速度越高越好。

| Model #Params | ↓MACs ↓bits/Byte ↓Speed | (KB/s) ↑ |
| --- | --- | --- |
| 0.2M 0.88M | 2.197 | 714 |
| 3.2M 4.43M | 1.984 | 280 |
| 0.2M 0.85M | 1.910 | 2292 |
| 3.2M 3.68M | 1.658 | 856 |

表后解释是该表报告循环注意力变体在两档参数下取得了更低比特与更高速度，支持了后文选它做骨干的决定。代价是该结论仅在文本上验证，未在图像与语音上做同表选型，跨模态泛化需看后文主结果，不能把此表直接当多模态最优证明。

### 速度与路由模式说明了什么？

除主精度表外，论文有两个特有细节值得展开。第一是速度随批量的饱和曲线，小模型在图形处理器上峰值约 4 兆字节每秒，在边缘端约 1 兆字节每秒，大模型在边缘端约 200 千字节每秒，批量 512 后增益变平，说明吞吐受并行度与内存带宽共同限制，复现时要报告批量条件否则不可比。

下表整理摘要报告的相对提升，比较前先明确问题与方向，表中数字与单位保留原文写法。

表前问题是统一模型相对通用基线在 5 个数据集上省了多少，公平条件是同数据集与同比特指标，指标方向是相对提升越高越好。

| 条件 | 指标 | 基线 | 本方法相对提升 | 比较对象 |
| --- | --- | --- | --- | --- |
| CLIC-M 图像 | 相对提升越高越好 | gzip | 42% | 统一大模型 |
| TouchandGo 触觉 | 相对提升越高越好 | gzip | 57% | 统一大模型 |
| enwik9 文本 | 相对提升越高越好 | gzip | 62% | 统一大模型 |
| LibriSpeech 语音 | 相对提升越高越好 | gzip | 42% | 统一大模型 |
| WikiSQL 数据库 | 相对提升越高越好 | gzip | 53% | 统一大模型 |

表后解释是主要收益是 5 个数据集同时优于通用基线，其中文本与触觉降幅最大，支持统一符号集的有效性。代价是百分比是相对提升而非百分点差值，复述时不可混淆，且该表未给出绝对比特值，需结合主结果表看基线水平。未胜出项是自然图像上仍有专用方法绝对值更低，但它们参数量大且速度慢。

### 主结果在三类数据上各赢在哪里？

按问题组织主结果：能否一个模型在 3 类数据上都接近专用方法。图像类上经典通用方法约四比特以上，经典图像编码中较好的能提升 1.5 到 2.5 倍，学习型自然图像方法在触觉与医学上变差，转文本的大模型方法因把图像转字符处理而次优。文本类上专用文本方法在自然语言上可到 0.8 比特左右，预训练大模型在自然语言更强但在基因上增益有限且计算重。语音上专用语音编码约数比特，大模型多模态方法约 3.6 比特但复杂度高。

下表整理经典图像编码与统一模型的对照，表中数字保留原文倍率与百分比写法。

| 条件 | 指标 | 基线表现 | 本方法表现 | 比较对象 |
| --- | --- | --- | --- | --- |
| 经典图像编码 | 相对提升越高越好 | gzip | 1.5×∼2.5× | 统一模型参照 |
| CLIC-M 图像 | 相对提升越高越好 | gzip | 42% | 统一大模型 |
| enwik9 文本 | 相对提升越高越好 | gzip | 62% | 统一大模型 |
| TouchandGo 触觉 | 相对提升越高越好 | gzip | 57% | 统一大模型 |
| WikiSQL 数据库 | 相对提升越高越好 | gzip | 53% | 统一大模型 |

表后解释是主要收益是跨图像、触觉、文本、数据库同时低于通用基线，触觉降幅最大，支持统一分词加路由对空间相关与纹理的有效性。具体代价是自然图像上仍弱于专用学习方法，医学轴位与矢状位提升较小，说明小模型容量与灰度医学纹理仍是短板。未胜出项是部分自然图像专用大模型绝对值更低，但它们参数量大两个数量级且速度慢。

下表整理语音与大模型成本的对照，表中数字保留原文时间与容量单位。

| 条件 | 指标 | 基线或参照 | 本方法收益 | 比较对象 |
| --- | --- | --- | --- | --- |
| LibriSpeech 语音 | 相对提升越高越好 | gzip | 36%∼42% | 统一模型 |
| LibriSpeech 语音 | 相对提升越高越好 | FLAC | 15∼23% | 统一模型 |
| 单张高清图大模型 | 时间越低越好 | LLaMA3-8B | over 30 minutes | 通用大模型 |
| 1 GB 文本大模型 | 时间越低越好 | 通用大模型 | several days | 通用大模型 |
| 1 GB 训练控制 | 容量按原文控制 | 各模态 | 1 GB | 均衡采样 |

表后解释是语音在无专用学习对手的情况下仍优于经典与专用编码，具有实用价值，而大模型耗时说明精度换速度的代价。限制是基因序列上最大模型也只是接近最优，数据库符号增强有帮助但不等同于领域知识建模。百分比是相对提升而非百分点差值。

下图是跨数据集的参数效率散点，阅读时先看坐标与基线再看星形与圆点的相对位置。

> **看图路径：** 1. 先确认每子图横轴为参数量纵轴为比特每字节且越低表示压缩越好；2. 再找橙色虚线通用基线与红色星形本方法系列的上下相对位置；3. 最后对比自然图像子图与医学子图中星形与圆形点的差距变化情况

[![原论文 Figure 4：Comparison of learning-based lossless compressors across multi-modal datasets.](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/934e0b2efa99/figure-4.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/934e0b2efa99/figure-4.png)

*论文图 4。原论文 Figure 4：“Comparison of learning-based lossless compressors across multi-modal datasets.”。*

从像素可见，16 个子图横轴均为参数量对数轴纵轴为比特每字节，橙色虚线为通用基线，红色星形为本方法系列，蓝色与绿色圆点为大模型方法。在柯达、触觉、文本等子图中星形位于左下靠近纵轴低位，说明以小参数达到低比特。在医学轴位等子图中星形与灰色圆点接近，说明优势收窄。解释是参数效率优势在自然图像、触觉、文本、语音上更明显，在医学与基因上需更大尺寸才能接近专用方法，这与上下文路由不均衡的现象一致。

### 拿掉路由与重参数化会发生什么？

消融按代表数据集组织，测统一分词、上下文路由、前馈路由与重参数化各自的作用。比较条件是同一小模型与超参数，指标仍是比特越低越好，速度在笔记本批量 128 下测量。报告显示去掉任一路由都会明显变差，证实两处自适应的有效性。

对上下文路由施加位置的对比显示只动值层优于只动键或感受野，同时动多处会增加 10%∼20% 参数而收益不稳定。对路由超参数的对比显示 4 专家取前 2 在复杂度与性能间最平衡，前馈专家隐藏倍率取 2 倍最紧凑。专家使用图显示上下文路由在不同模态间使用更不均衡，某些专家主导特定模态，前馈路由更均衡，支持了上下文管特有依赖而前馈管泛化表示的解释。

代价是路由带来速度下降，小模型从 800 多降到 500 千字节每秒，仍在可接受范围。未胜出项是 5 专家或 4 倍隐藏在个别数据集稍好，但参数与速度代价更大，未被选为默认。原文未测量误判率与逐步延迟，相关性不等于因果，复述时用支持而非证明。

### 哪些边界没有测，哪些结论不能推广？

首先是模态覆盖的边界，论文明确支持 7 类数据，但视频、表格图像混合、加密或已压缩数据的 2 次压缩未评估，不能推广到所有字节流。其次是性能边界，自然图像上最大统一模型仍低于部分专用大模型，基因与医学提升幅度小于触觉与文本，说明统一并未消除领域差距。

第三是成本边界，训练资源只说明在图形处理器上进行，未报告总卡时与能耗，推理只报告吞吐未报告逐符号延迟与内存峰值，边缘峰值速度依赖大批量，不能等同于实时交互延迟。第四是统计边界，原文未报告多次随机种子的方差与显著性检验，雷达与散点展示的是单点估计，总体趋势不等于每组都成立。

第五是证据冲突的标注，原表头与结构化抽取存在空表头与行身份不明，本文仅对第一张骨干表做原表选择，其余宽表改用连续原句整理的引用表，避免猜表头。缺失证据不是技术错误，需要补的验证是流式小批量延迟、跨设备内存占用以及在新基因库与新医学中心的泛化测试。

### 要复现先准备什么，先跑哪一步？

先准备数据与划分。按原文每模态控制一吉字节训练集，沿用各数据集官方划分，文本用子词分词并加入基因与数据库符号，图像按 16 乘 16 乘三切块扫描，语音按字节读入，所有序列加模态前缀，输出端按模态掩码。模型从小尺寸起步，块数与嵌入维度按原文三档配置，先跑通无路由基线再分别打开上下文路由与前馈路由。

专家数取四、前二选择、前馈隐藏 2 倍，只对值层做路由。训练按 3 阶段冻结策略执行，优化器用融合自适应矩估计，学习率万分之一起、余弦退火到十万分之一，批量保证每模态均匀采样，损失权重取千分之一与 1%。评估先算比特每字节再测速度，速度要分别在图形处理器、笔记本处理器与手机神经引擎上扫批量一到一千，避免只报峰值。

基线至少保留通用压缩器与一个同模态专用方法，相对提升要区分相对百分比与百分点。代码方面原文声明已公开，但本次仅确认第三方压缩库链接可用，复现前需自行确认仓库可达与权重是否提供，不把代码存在等同于一键可运行。

### 何时值得尝试，还需补哪项验证？

当系统需要同时存图像、文本、语音、基因或数据库，且不愿为每种模态维护一套压缩器，又无法承担数十亿参数大模型的延迟与内存时，值得尝试这种统一轻量路线。先从小模型与默认路由配置起步，优先在触觉、文本与语音上验证收益，再把医学与基因作为难例单独调参。

复现先跑通分词可逆性检查，确保解压比特完全一致，再跑精度与速度两条曲线，避免只看比特忽略批量条件。还需补的验证是小批量延迟、峰值内存、新中心的泛化以及多次种子的稳定性。回到中心矛盾：统一带来部署简化，轻量带来边缘可用，代价是在自然图像与基因上让出部分精度给专用大模型。理解这个取舍，就能把方法复述为一句话：用可逆统一分词把多模态变成一种语言，用双路稀疏路由让小模型按模态分工预测概率，再用算术编码把概率变成比特。

## 📐 原文公式与排版

以下展示论文原页中的数学表达区域，保留原始上下标、分式和符号排版。区域序号仅用于本文导航，不是论文公式编号。

[![原文数学表达区域 1，PDF 第 4 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/31bd37baf363/figure-1.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/31bd37baf363/figure-1.png)

区域 1 · [查看论文原页](https://openaccess.thecvf.com/content/CVPR2026/papers/Zhao_OmniZip_Learning_a_Unified_and_Lightweight_Lossless_Compressor_for_Multi-Modal_CVPR_2026_paper.pdf#page=4)

[![原文数学表达区域 2，PDF 第 4 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/31bd37baf363/figure-2.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/31bd37baf363/figure-2.png)

区域 2 · [查看论文原页](https://openaccess.thecvf.com/content/CVPR2026/papers/Zhao_OmniZip_Learning_a_Unified_and_Lightweight_Lossless_Compressor_for_Multi-Modal_CVPR_2026_paper.pdf#page=4)

[![原文数学表达区域 3，PDF 第 4 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/31bd37baf363/figure-3.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/31bd37baf363/figure-3.png)

区域 3 · [查看论文原页](https://openaccess.thecvf.com/content/CVPR2026/papers/Zhao_OmniZip_Learning_a_Unified_and_Lightweight_Lossless_Compressor_for_Multi-Modal_CVPR_2026_paper.pdf#page=4)

另有 6 个候选区域因边界不明确或图片数量、尺寸限制未展开；请[查看完整论文](https://openaccess.thecvf.com/content/CVPR2026/papers/Zhao_OmniZip_Learning_a_Unified_and_Lightweight_Lossless_Compressor_for_Multi-Modal_CVPR_2026_paper.pdf)中的原始排版。

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。
- 评分规则：type-aware-v1
- 评分模型：muse-spark-1.3-contributor
- 评分请求协议：openai_responses

---

[← 返回 cvpr-2026 论文汇总](/posts/conference-cvpr-2026/)
