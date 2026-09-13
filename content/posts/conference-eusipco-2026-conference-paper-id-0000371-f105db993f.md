---
title: "CINESUBNET: A MULTIMODAL ARCHITECTURE FOR TEXT-DRIVEN CINEMATIC AUDIO SOURCE SEPARATION"
date: 2026-09-13
draft: false
description: "针对电影音轨要分成对白音乐音效的问题，CineSubNet 用稀疏编解码加 Transformer 分离并以 Whisper 加 BERT 字幕作语义先验，在 DnR 全系列上以 SDR 为指标超过 BandIt 等基线，多模态版本代价是参数从 23.5M 到 24.1M 而延迟基本不变。"
tags: ["多模态学习", "Transformer", "语音", "音频分离"]
categories: ["eusipco-2026 论文"]
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_paper_id: "conference:eusipco:2026:conference-paper-id:0000371"
paper_digest_source_kind: conference
paper_digest_conference_id: "eusipco-2026"
paper_digest_conference_record_url: "https://eurasip.org/Proceedings/Eusipco/Eusipco2026/HTML/session-index/index.html"
paper_digest_conference_pdf_url: "https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0000371.pdf"
paper_digest_api_reader_contract: "beginner-researcher-v3"
paper_digest_api_reader_article_sha256: "b660cdea3802e519d1adf1cfd80fa181ccaf191617a4890a97f3e35edba3aa2c"
paper_digest_api_reader_plan_sha256: "1bbf414d73fdbc41bc4327ad7b7ac4c1921fc65bc8a88ddf7531db8c6f1faf69"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings-v4"
paper_digest_api_reader_source_bindings_sha256: "890a1c8d8e3ec77f40385d399d86a2040bfe96c2b3f9cca29bd188ef001fce3c"
paper_digest_api_reader_source_table_count: 3
paper_digest_api_reader_source_formula_count: 0
paper_digest_api_reader_structured_artifacts_sha256: "99352cd2ebac29839dd745bdeeaa5fb074d101bc69f469b233bf1562940cc913"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity-v1"
paper_digest_api_reader_author_identity_sha256: "5c1a8dc407a1d88f1290fff156e07bdcd67971764d637442d330ce1ce3e17274"
paper_digest_api_reader_author_count: 2
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity-v1"
paper_digest_api_reader_resource_identity_sha256: "12b364017a18e70c52aca2f70dbe22addb3754286863174a7be7bb6796d7b34f"
paper_digest_api_reader_resource_count: 1
paper_digest_api_reader_decision_projection: "api-reader-decision-projection-v2"
paper_digest_scoring_contract: "api-scoring-audit-v2"
paper_digest_taxonomy_contract: "paper-taxonomy-flat-tags-compat-v1"
paper_digest_taxonomy_selection_contract: "paper-taxonomy-selection-v1"
paper_digest_taxonomy_registry_version: "paper-taxonomy-v1"
paper_digest_taxonomy_registry_sha256: "15c82a567ce5a55dc1175684ed08b64c158558639d9c8fb822c9587ec32a8778"
paper_digest_taxonomy_concepts: [{"facet":"method","id":"method.multimodal-learning","label":"多模态学习"},{"facet":"method","id":"method.transformer","label":"Transformer"},{"facet":"signal","id":"signal.speech","label":"语音"},{"facet":"task","id":"task.audio-separation","label":"音频分离"}]
paper_digest_primary_task: "音频分离"
paper_digest_primary_method: "多模态学习"
paper_digest_score: 7.8
paper_digest_rank_bucket: "前25%"
paper_digest_document_type: "方法研究"
paper_digest_conference_structure: replayable-pdf-layout-v1
---

# 📄 字幕能帮耳朵分轨吗：CineSubNet 用文本先验做电影对白音乐音效分离

> 英文题目：*CINESUBNET: A MULTIMODAL ARCHITECTURE FOR TEXT-DRIVEN CINEMATIC AUDIO SOURCE SEPARATION*

> 会议身份：`conference:eusipco:2026:conference-paper-id:0000371`


> ✅ 来源为官方会议 PDF；表格与 Figure 按原文证据绑定。PDF 公式以原页区域图片展示，未冒称作者原始 TeX。

> 会议来源：[官方记录](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/HTML/session-index/index.html) · [官方 PDF](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0000371.pdf)

标签：#多模态学习 #Transformer #语音 #音频分离

评分：**7.8/10** | 创新 1.5/2 | 技术严谨 1.0/1.5 | 实验充分 1.0/1.5 | 清晰度 0.8/1 | 影响力 1.0/1.5 | 开源 1.0/1.5 | 可复现 0.3/0.5 | 工程/实践 1.2/1.5

排名：前25% | 文档类型：方法研究

## 👥 作者与机构

- Negru, Marian：机构信息未能从会议 PDF 纯文本可靠映射
- Nicolae, Ana：机构信息未能从会议 PDF 纯文本可靠映射

## 📌 核心摘要

电影音频源分离（Cinematic Audio Source Separation, CASS）需将电影混合音分解为对白（Dialogue, DX）、音乐（Music, MX）与音效（Effects, FX）三轨，难点在于三者高度相关且对白常被音乐和环境声掩蔽。CineSubNet采用编码器-融合-分离-解码器结构：立体声波形经短时傅里叶变换（Short-Time Fourier Transform, STFT）得到复数频谱，整片音频经Whisper Large v3自动转写为字幕并用双向编码器（Bidirectional Encoder Representations from Transformers, BERT）编码为384维语义向量，二者在编码器后经多模态融合块完成门控调制与交叉注意，再送入层叠Transformer分离栈与稀疏上采样解码器重建三轨。与手工子带加循环结构相比，该设计以稀疏压缩网络（Sparse Compression Network, SCNet）的自动三带压缩替代手工分带，并以全局语义先验调制时频特征，更贴近真实影院总有字幕的流程。在多语言Divide and Remaster v3测试集上平均信号失真比（Signal-to-Distortion Ratio, SDR）为12.68 dB，超过最强基线BandIt的12.06 dB，方向为越高越好。该结论目前仅在合成混音的Divide and Remaster系列上验证，对真实电影混音、强重叠下识别错误传播及视觉线索缺失场景尚未验证。论文披露了24.1M参数量、262 ms延迟与约0.0238实时因子，表明系统显著快于实时。

## 🔗 开源与复现资源

- 代码相关资源：<https://github.com/marian-negru/cinesubnet> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 输入是什么，要输出什么，哪些信息必须保留？

这篇论文研究的是电影音频源分离。输入是一段电影混音，通常是立体声，里面同时混着人说话、背景音乐和各种音效。目标是把这一个混音还原成三轨：对白、音乐、音效，对应论文中的对话、音乐与音效 3 类音源。初学者可以这样理解学习任务：给定混合波形，模型要为每一轨输出一个等长的波形，三轨相加应接近混音。必须保留的信息包括数据集版本、基线名称、实验阶段、指标名称与单位、聚合对象，因为同样的数字在不同条件下含义完全不同。

论文强调电影几乎总伴随字幕这一现实条件，因此把自动语音识别得到的字幕作为额外语义提示纳入分离流程，而不要求字幕与音频做显式时间同步。输出是 1 篇可复述方法的解读，不评价好坏，只讲论文实际做了什么、条件是什么、数字支持什么。本文默认只用论文原文证据写作，代码链接状态以本次校验为准，当前代码链接可用。后续各节按依赖展开，先讲任务与路线，再走完一个样本的全流程，再讲训练与评测，最后讨论复现。

### 从音乐分离到电影分离，路线发生了什么变化？

音乐源分离是更早被充分研究的问题，常用数据集把音乐分成鼓、贝斯、人声和其他，模型从时域的波形网络和编解码结构，发展到利用循环网络的混合模型，再到基于变换器的结构。电影分离是后来独立出来的任务，论文把起点归于鸡尾酒叉问题，目标固定为对白、音乐、音效三轨。数据集路线是先有 Divide and Remaster，再有挑战赛版本和多语言版本，最后加入笑声尖叫等非言语发声以更接近真实电影。

模型迁移是一条主线：多分辨率交叉网络是早期针对该数据集的适配，后来把音乐分离里的频带切分循环网络扩展成 BandIt，并在新版本上取得最好结果。CineSubNet 延续了跨领域迁移的思路，但增加了一个此前较少探索的分支：利用电影几乎总有字幕这一事实，把自动语音识别得到的文本作为额外输入。需要提醒的是，类别不同不能直接比胜负，音乐四轨与电影三轨的划分、响度与语言分布都不同，本文只在电影分离基准内讨论比较。

### 混音的数学形式与文本无对齐假设是什么？

论文把任务写成每个通道每个采样点的加法关系。设混音为多通道信号，通道数与采样点数分别记为通道维和时间维，对每个通道的每个时刻，混音等于对白加音乐加音效。举一个教学例子：某时刻左通道混音采样值是三轨采样值之和，模型要反推这 3 个分量，这只是一个例子，不代表论文给出具体数值。输入表示用短时傅里叶变换把波形变成复数频谱，实部虚部分开存放，形成频率乘时间乘通道数的张量。

文本侧的假设很关键：字幕来自 Whisper Large v3 对整段音频的识别并存成字幕文件，再按 11 秒音频窗取出对应字幕，不要求人工时间对齐。也就是说，文本是全局语义提示，不是逐帧标签。模型要自己通过门控和注意力决定文本在每个时频点起多大作用。这种无显式对齐的设计是为了实用和可扩展，但也意味着当语音被严重遮蔽导致识别错误时，文本提示的质量会下降。

### 一个样本如何走完输入到三轨输出？

先沿一个样本走完全程。输入是一段 11 秒的立体声电影混音和它对应的自动字幕。音频先做短时傅里叶变换得到复数频谱，字幕先用 BERT 得到文本嵌入。音频频谱进入稀疏下采样编码器，被压缩成多分辨率特征；文本嵌入经线性映射进入同一嵌入空间。

然后多模态融合块把两路特征拼成共享表示，再送入多层 Transformer 做分离，最后由稀疏上采样解码器输出三轨的频谱估计并逆变换回波形。音频单模版本则跳过融合块，直接把编码特征送入 Transformer。

**电影音频源分离 × 字幕语义先验：** 电影音频源分离负责把混合声波分成对白、音乐、音效 3 个波形，字幕语义先验负责告诉模型当前在说什么，二者搭配的理由是重叠严重时纯声学线索不足而对话内容可区分人声与背景，组合意义是用全局文本约束局部时频掩码，让对白估计更贴近有人说话的时刻。

训练时的监督来自干净的三轨真值，优化的是掩码后的均方误差；评价时用信号失真比衡量每轨的还原程度。这种先走通主路径再看分支的顺序，有助于把编码、融合、分离、解码的职责分开，避免把文本的作用误归于骨干变强。

### 编码器与分离器各自做什么，为何这样搭配？

编码器采用来自稀疏压缩网络的稀疏下采样层。论文描述的做法不是手工把频谱切成多个频带，而是自动压缩成低中高 3 类，用 3 路并行卷积提取下采样后的信息，再拼接并通过全局 2 维卷积，形成多分辨率特征提取器。初学者可以理解为编码器先做有损但有重点的压缩，让重要频段保留更多容量。分离模块采用来自频带切分旋转位置 Transformer 的分层 Transformer 堆叠。与常见对 1 维向量做自注意力不同，这里轮流在时间和频率两个维度上处理，有助于分别学习时序连续性和频谱结构，并引入旋转位置编码来更好地表示相对位置。

**稀疏下采样编码 × 分频 Transformer 分离：** 稀疏下采样编码负责把全频谱自动压缩成低中高 3 类子带并提取多分辨率特征，分频 Transformer 分离负责在时间和频率两个维度上分别建模依赖，二者搭配的原因是编码先降维去冗余再让注意力学长程结构，组合后编码器给分离模块更紧凑且保留细节的表示。

解码器采用对应的稀疏上采样块，用转置卷积实现，层数与编码器对应并使用跳跃连接把同级编码预测与解码预测相加，最后一块把输出通道改成目标音源数，再经 2 维卷积和门控线性单元引入非线性与自适应控制。论文没有给出图模块的具体坐标与颜色，本文只按文字描述复述，不猜测模块在图中的位置。

### 文本分支在融合块里经历了哪几步计算？

融合块的输入是编码器输出的时频特征和 BERT 文本嵌入。论文列出的步骤是：先用线性投影把文本维度映射到音频特征的嵌入空间；再为音频和文本分别加入可学习的模态嵌入，作为区分信号来源的偏置；接着对文本特征做门控投影，学习一个动态掩码，在每个时频点上调节文本贡献，语义相关则增强对应音频特征，不相关则抑制；然后把两路特征拼接再经线性投影，保留各自表示与跨模态交互；最后做交叉注意力，让局部频谱模式选择性地对齐全局语义线索，论文将其比喻为人类听觉接地过程，但这只是帮助理解的说法，真实计算仍是注意力加权。

**BERT 文本嵌入 × 多模态融合块：** BERT 文本嵌入负责把 Whisper 转写的字幕变成语义向量，多模态融合块负责用线性映射加模态嵌入加门控加交叉注意力把文本对齐到时频特征，二者搭配的原因是文本是全局无时间戳的而音频是局部时频的需要可学习的自适应加权，组合后模型能按语义相关性增强或抑制对应时频点。

需要强调的是，该融合块只存在于多模态版本，音频单模版本不包含它。这种设计使消融可以直接对比有无文本的效果，而不改变编码与分离骨干的基本配置。

### 损失如何掩码，优化与硬件过程是什么？

训练用的是分位数掩码均方误差。先按常规均方误差算每个样本的平方误差，再在训练批量内算 0.95 分位数，只保留低于该分位数的误差参与平均，高误差离群点被掩掉。论文的动机是减少极端样本的影响，让训练聚焦更具代表性的例子。优化器用 Adam，初始学习率 0.0001， patience 为 2 个周期时乘 0.95 衰减，共训练 50 个周期，每个周期 10,000 步，并用衰减 0.999 的指数滑动平均。音频窗为 11 秒随机裁剪，短时傅里叶变换用 92 毫秒窗、4096 点傅里叶变换、21 毫秒跳、1024 点跳，得到 2049 个频 bins。

文本处理按论文执行顺序展开：先用 Whisper Large v3 对整段音频做识别并存成字幕文件，再按 11 秒音频窗取出对应字幕，然后用 BERT 得到文本嵌入，使文本分支与音频窗在样本层面对应。编码器 3 层通道为 64、128、256，Transformer 维度 256、8 层、8 头、丢弃率 0.1 并用闪速注意力。单声道样本通过复制成双通道来模拟立体声播放条件，初始 2 通道相同，模型在多通道框架下学习通道间关系。所有实验在一块 A6000 上运行。

**分位数掩码均方误差 × 信号失真比：** 分位数掩码均方误差负责训练时只保留批量中损失低于 0.95 分位数的样本做平均以抑制高误差离群点，信号失真比负责评价时用目标能量与误差能量之比衡量分离干净程度，二者分工是前者管优化稳定后者管最终可比性，搭配意义是训练不被极端重叠片段带偏而评价仍反映整体失真。

论文未报告哪些参数冻结、梯度是否在 BERT 或 Whisper 侧回传、文本分支重置时机等细节，本文不从模型名称推定这些实现，只指出这是复现时需要补看代码的缺项，执行时应先固定音频窗与频谱参数，再确认文本取出与嵌入步骤是否与训练批量划分一致。

### 在哪些数据与指标下比较，条件是否一致？

实验覆盖 3 个电影分离基准：DnR 第二版、DnR 第三版和 DnR 非言语版。第二版是挑战赛版本，目标是分开对白音乐音效；第三版引入 30 多种语言的对白、更多类型与声学多样性，并改进响度与时间对齐；非言语版增加笑声尖叫等表达性发声。论文说明主要聚焦第三版和非言语版，因为它们更难更真实，同时也在第二版上训练以检验泛化。

评价指标是信号失真比，数值越高表示目标能量相对误差能量越大，即分离越干净，论文用该指标衡量每轨还原程度并在 3 个基准上比较。比较对象包括 UMXHQ、BSRNN、BandIt 等实际可运行方法，以及自家的音频单模版本，其中多模态版本相对音频单模版本的差异可直接归因于是否加入融合块与文本输入。计算效率测试统一用 11 秒 48 千赫立体声窗，多模态再加 384 维 BERT 嵌入，延迟取 200 次计时中位数，预热 50 次，并用浮点运算与延迟之比估算 TFLOPS，用延迟除以音频时长算实时因子。

这些条件交代使主结果、消融与成本可以在同一基准内解读，也避免把不同数据集版本或不同聚合口径下的数字混为一谈。

### 主结果测了什么，谁在什么条件下更高？

主结果要回答的问题是：在同一数据集测试集上，用信号失真比衡量，CineSubNet 是否超过已有可运行基线。公平条件是同数据集同切分同三轨目标，指标方向是越高越好。下表整理论文原表中的对白、音乐与综合值，单位为分贝，表头单位覆盖整组，数据格为裸值，本文保留原写法不逐格加单位。

| 数据集 | 模型 | 对白 DX | 音乐 MX | 综合 All |
| --- | --- | --- | --- | --- |
| DnR v3 | BandIt | 15.73 | 10.23 | 12.06 |
| DnR v3 | CineSubNet | 16.16 | 11.17 | 12.68 |
| DnR v2 | BandIt | 15.10 | 8.20 | 10.90 |
| DnR v2 | CineSubNet | 15.94 | 9.54 | 11.98 |

表后解释需要同时看到收益与边界。论文报告显示，在所列条件下 CineSubNet 在对白、音乐、音效与综合上均高于对应 BandIt，DnR 第三版综合从 12.06 到 12.68，第二版综合从 10.90 到 11.98。

未胜出项在主表内不存在，但在细节上音乐与音效的绝对值仍明显低于对白，说明背景成分更难分；非言语版的绝对分数整体更低，表明笑声尖叫等表达性内容带来额外挑战。总体趋势不等于每一段都成立，重叠严重且识别错误多的片段仍可能提升有限，这是解读时必须保留的限制。

### 去掉文本后性能掉多少，文本质量瓶颈在哪？

消融要回答的问题是：骨干相同、只差融合块与文本输入时，增益是否来自文本。比较条件是同一数据集、同一训练流程，指标仍是越高越好的信号失真比。下表对比音频单模与多模态版本，列含义与上表一致。

| 数据集 | 模型 | 对白 DX | 音乐 MX | 综合 All |
| --- | --- | --- | --- | --- |
| DnR v3 | CineSubNet audio | 15.86 | 10.37 | 12.18 |
| DnR v3 | CineSubNet | 16.16 | 11.17 | 12.68 |
| DnR nv | CineSubNet audio | 10.95 | 6.59 | 8.06 |
| DnR nv | CineSubNet | 11.74 | 8.23 | 9.11 |

表后解释要给出代价与反例。论文报告显示，多模态在综合上最多高出约 1 分贝，非言语版从 8.06 到 9.11，提升幅度相对更大。论文给出的有限解释是语音与其他声音重叠时识别模型表现不佳，且 DnR 没有文本真值所以无法做文本质量消融，这属于支持性解释而非已验证因果。

**音频单模版本 × 文本增强版本：** 音频单模版本负责只用频谱走稀疏编码加 Transformer 不经过融合块，文本增强版本负责在同一骨干前插入融合块引入字幕，二者搭配做消融的原因是骨干相同才能把增益归因于文本，组合意义是量化语义信息在 ASR 不完美时仍能带来的提升与额外开销。

未评测边界是文本嵌入模型更好时增益是否更大，论文用可能性的措辞提出展望，本文按待验证处理，不承诺换更大语言模型必然带来同等提升。

### 哪些结论有直接证据，哪些还只是推测？

直接报告的是：在 3 个 DnR 版本测试集上，CineSubNet 及其音频单模版本在所列指标上高于所列基线；多模态版本参数为 24.1M，少于 BandIt 的 37.0M；实时因子约 0.023，约为音频时长的四十二分之一。有限解释的是：文本带来提升是因为语义线索与音频表示对齐，以及稀疏编码与 Transformer 比循环与手工分频更高效，这些解释与数字趋势一致但没有单独控制每一种设计的实验。

未验证推测包括更好的语音识别与文本嵌入会带来更大提升、视觉线索与大语言模型能进一步推进电影场景，这些在本文中只能写成可能与待验证。缺失证据不是技术错误，例如没有文本真值就无法量化字幕错误率，没有每类语言或每种噪声的细分统计就无法判断多语言增益的来源。相关性也不等于因果，综合分贝提升不能直接等同于下游语音识别或人工听感改善，因为论文没有报告这些指标。

### 要复现应先准备什么，成本与运行状态如何？

复现先做三件事。第一，按论文配置准备数据与切分：3 个 DnR 版本分别评测，训练用 11 秒随机裁剪，短时傅里叶变换参数与频点数按原文设置，单声道复制成双通道。第二，准备文本分支：用 Whisper Large v3 对整段音频识别并存字幕，再按音频窗取出对应字幕并用 BERT 提嵌入，多模态测试需 384 维嵌入输入。第三，对齐优化与评价：用 0.95 分位数掩码均方误差训练，Adam 与指数滑动平均按原文设置，评价用信号失真比。

成本方面要区分训练与推理：论文只给出推理侧数字，下表整理原文计算效率测试，参数单位为百万，延迟单位为毫秒，其余为比值，本文保留原表头单位。

| 模型 | 参数 Params | 延迟 Latency | 算力 TFLOPS | 实时因子 RTF |
| --- | --- | --- | --- | --- |
| CineSubNet audio | 23.5 | 260 | 4.31 | 0.0236 |
| CineSubNet | 24.1 | 262 | 4.31 | 0.0238 |

表后说明代价与可运行性。多模态比单模多约 0.6M 参数，延迟从 260 毫秒到 262 毫秒，算力同为 4.31，实时因子几乎不变，说明文本分支的额外开销很小。

论文给出代码链接，本次资源校验显示可用，因此可写当前已公开，但权重下载与完整可运行状态仍需以实际仓库为准，不把代码开源等同于开箱可运行。

### 何时值得尝试这个方法，还需补哪项验证？

当你的电影混音总有字幕或可做语音识别，且主要痛点是对白被音乐音效遮蔽时，这个方法值得尝试，因为它在不要求显式对齐的情况下引入全局语义约束，复现时可先跑音频单模版本确认骨干，再加入文本分支看增量。当没有字幕、语言不在识别模型覆盖内或全是纯器乐时，不应期待同等收益，因为文本提示缺失或错误会削弱融合块的作用。

还需补的验证包括：字幕错误率与分离增益的关系、按语言与重叠度细分的表现、以及下游任务如语音识别或人工听感是否同步变好。常见误解是把分贝提升直接当成听感提升，或把参数更少直接当成训练更快，实际上论文只报告了推理延迟与实时因子，没有报告训练时长与内存占用。总体上，CineSubNet 为电影分离提供了一个可复现的多模态基线，其价值在于证明文本可作为低成本补充，而非替代声学建模。

## 📐 原文公式与排版

以下展示论文原页中的数学表达区域，保留原始上下标、分式和符号排版。区域序号仅用于本文导航，不是论文公式编号。

[![原文数学表达区域 1，PDF 第 2 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/2d6df1004d08/figure-1.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/2d6df1004d08/figure-1.png)

区域 1 · [查看论文原页](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0000371.pdf#page=2)

[![原文数学表达区域 2，PDF 第 2 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/2d6df1004d08/figure-2.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/2d6df1004d08/figure-2.png)

区域 2 · [查看论文原页](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0000371.pdf#page=2)

[![原文数学表达区域 3，PDF 第 2 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/2d6df1004d08/figure-3.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/2d6df1004d08/figure-3.png)

区域 3 · [查看论文原页](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0000371.pdf#page=2)

[![原文数学表达区域 4，PDF 第 4 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/2d6df1004d08/figure-4.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/2d6df1004d08/figure-4.png)

区域 4 · [查看论文原页](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0000371.pdf#page=4)

[![原文数学表达区域 5，PDF 第 4 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/2d6df1004d08/figure-5.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/2d6df1004d08/figure-5.png)

区域 5 · [查看论文原页](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0000371.pdf#page=4)

另有 7 个候选区域因边界不明确或图片数量、尺寸限制未展开；请[查看完整论文](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0000371.pdf)中的原始排版。

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。
- 评分规则：type-aware-v1
- 评分模型：muse-spark-1.3-contributor
- 评分请求协议：openai_responses

---

[← 返回 eusipco-2026 论文汇总](/posts/conference-eusipco-2026/)
