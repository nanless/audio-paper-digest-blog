---
title: "ResMamba: A Dual-Path Convolution-Mamba Model for Music Genre Classification"
date: 2026-11-03
draft: false
tags: [音频分类, 音乐信息检索, CNN, 状态空间模型]
categories: [论文速递]
description: "针对梅尔频谱图同时需要局部时频纹理和长时跨段结构的问题，ResMamba 在 ResNet 式四阶段主干中并行使用卷积分支抓局部与选择性状态空间分支抓全局并做多尺度融合，在 GTZAN 五折平均 88.99% 且全程从零训练，代价是依赖全分辨率输入与分窗折中。"
hiddenInHomeList: true
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_arxiv_id: "2611.00746"
paper_digest_workbench_contract: "researcher-workbench"
paper_digest_workbench_schema_fingerprint: "1f09b594c317cc38e934de27a5b0e8ceb4baa50ef79bd4f8683dd9adea720fe7"
paper_digest_reader_title: "ResMamba：用双路卷积加状态空间模型做音乐流派分类"
paper_digest_original_title: "ResMamba: A Dual-Path Convolution-Mamba Model for Music Genre Classification"
paper_digest_arxiv_version: 1
paper_digest_arxiv_versioned_id: "2611.00746v1"
paper_digest_arxiv_abs_url: "https://arxiv.org/abs/2611.00746v1"
paper_digest_arxiv_pdf_url: "https://arxiv.org/pdf/2611.00746v1.pdf"
paper_digest_primary_task: "音频分类"
paper_digest_tags_contract: "paper-tag-flat-tags"
paper_digest_tags_schema_fingerprint: "27e36280a4b8d3df62ebe54d3ab037920f4d69feb2b554163f01bbae2caf4338"
paper_digest_tags_selection_contract: "paper-tag-selection"
paper_digest_tags_registry_version: "paper-tag-catalog"
paper_digest_tags_registry_sha256: "9673bc0122e1905a5dcfd8b223675400cc2fa4c36095bc0e5f817edf99a0ec5c"
paper_digest_tags_concepts: [{"facet":"task","id":"task.audio-classification","label":"音频分类"},{"facet":"scientific_topic","id":"scientific_topic.music-information","label":"音乐信息检索"},{"facet":"method","id":"method.cnn","label":"CNN"},{"facet":"method","id":"method.state-space","label":"状态空间模型"}]
paper_digest_primary_method: "状态空间模型"
paper_digest_score: 6.3
paper_digest_rank_bucket: "前50%"
paper_digest_document_type: "方法研究"
paper_digest_one_sentence: "针对梅尔频谱图同时需要局部时频纹理和长时跨段结构的问题，ResMamba 在 ResNet 式四阶段主干中并行使用卷积分支抓局部与选择性状态空间分支抓全局并做多尺度融合，在 GTZAN 五折平均 88.99% 且全程从零训练，代价是依赖全分辨率输入与分窗折中。"
paper_digest_authors: [{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Yingyu Zhang"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Pu Qu"}]
paper_digest_abstract_sha256: "f5a986cf4824ee409aa2e9c38d5ae9a46218a45b0fc77da6c59325af9a0d2453"
paper_digest_sidecars: {"citation.bib":{"sha256":"ea647e049949c4f257fb096721a52f9d02df55066159eac5869a1afa76e5192c","url":"/audio-paper-digest-blog/client/papers/2026-11-03/2611-00746/citation.bib"},"citation.json":{"sha256":"af3a46d49d1eb1b7661be5d71b300258405c1aa0122229f24aea6caf432f13a6","url":"/audio-paper-digest-blog/client/papers/2026-11-03/2611-00746/citation.json"},"citation.ris":{"sha256":"7a8aa953e14835f84b9d5140c9d722d6e2303be49ab2098069d0b2009c985de5","url":"/audio-paper-digest-blog/client/papers/2026-11-03/2611-00746/citation.ris"},"rethink-context.json":{"contract":"paper-research-context","schemaFingerprint":"5d4e79f7d3ee65b39ccb38281548bf20a1b2041ab7a27625eaf97ab9909a8383","sha256":"1c6eda49780dc07b47e743a10b97ea26ae0b49d2f819ef8c48effb5841ccec2d","url":"/audio-paper-digest-blog/client/papers/2026-11-03/2611-00746/rethink-context.json"}}
paper_digest_api_reader_contract: "beginner-researcher"
paper_digest_api_reader_schema_fingerprint: "cd8baf5b8bda3a49eec64f6005931af63de4e9a13148cba5f354c661ca6e9df2"
paper_digest_api_reader_article_sha256: "37bc819d7b8819b67c302740cfd4614b059ab108c60bb764676ac03eaa971414"
paper_digest_api_reader_plan_sha256: "b7d55c6db71d02c5911285add0fd46e56a6b920a5fbc1c54b30b2293f899d631"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings"
paper_digest_api_reader_source_binding_schema_fingerprint: "d2a2607a6e561909473022eb43f56332ee357af8568566a095c29083ffdec9cc"
paper_digest_api_reader_source_bindings_sha256: "184f2c33b212a205d203b57021687fca20c529611efa8b585fd9cda527b0d47f"
paper_digest_api_reader_source_table_count: 4
paper_digest_api_reader_source_formula_count: 3
paper_digest_api_reader_structured_artifacts_sha256: "e73105c84c202d9f4646c1ee80c76e2262140e62bc6f08fe024bef38a0633a7e"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity"
paper_digest_api_reader_author_identity_schema_fingerprint: "1e3fd3a9a56c9a5bf52df8df5022690b9a3fa92e83e934f295af87c0e258ed2f"
paper_digest_api_reader_author_identity_sha256: "bf0ad28383649e9439bfe6ed56b6050647d6a65e0309b97b514dc7a4148aa2d6"
paper_digest_api_reader_author_count: 2
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity"
paper_digest_api_reader_resource_identity_schema_fingerprint: "33b0be17118be61f39b85ce690c8da17e91f2864bb65e85284f60c40067328e0"
paper_digest_api_reader_resource_identity_sha256: "4f30473aab9e42c0fb9010442fd4f4780b496846a154b607d555606aef01bb15"
paper_digest_api_reader_resource_count: 0
paper_digest_api_reader_figure_persistence: "ephemeral-no-persisted-figure-assets-v1"
paper_digest_api_reader_decision_projection: "api-reader-decision-projection"
paper_digest_api_reader_decision_projection_schema_fingerprint: "e56feb5ab75c8710904916b898f73dab9bb18bdf65bb60b7ed2edf7f99cea860"
---

# 📄 ResMamba：用双路卷积加状态空间模型做音乐流派分类

> 英文题目：*[ResMamba: A Dual-Path Convolution-Mamba Model for Music Genre Classification](https://arxiv.org/abs/2611.00746v1)*

<!--paper-tag-hierarchy-v1:start-->

**研究分类**

- **研究任务**：[音频分类](/audio-paper-digest-blog/papers/?concept=task.audio-classification)
- **研究方法**：[CNN](/audio-paper-digest-blog/papers/?concept=method.cnn)；[状态空间模型](/audio-paper-digest-blog/papers/?concept=method.state-space)
- **科学主题**：[音乐信息检索](/audio-paper-digest-blog/papers/?concept=scientific_topic.music-information)

<!--paper-tag-hierarchy-v1:end-->

> 评分：**6.3/10** | 创新 1.2/2 | 技术严谨 1/1.5 | 实验充分 1.2/1.5 | 清晰度 0.8/1 | 影响力 1/1.5 | 开源 0/1.5 | 可复现 0.3/0.5 | 工程/实践 0.8/1.5


## 👥 作者与机构

- Yingyu Zhang：机构信息未能在本次解析中与作者逐人可靠绑定
- Pu Qu：机构信息未能在本次解析中与作者逐人可靠绑定

## 📌 核心摘要

音乐流派分类要把约30 s音频判为blues、classical等10类之一，输入是128×1292梅尔语谱图，难点是同时保留局部纹理和谐波细节，并关联相隔数十秒的段落变化。论文把完整语谱图送入ResNet风格四阶段骨干，每阶段用可替换残差块处理，输出经多尺度融合头分类。MambaWrapper先用1×1卷积映射通道并展平为序列，送入单向MambaVision混合器做全局建模后再恢复空间形状，高分辨率阶段用8×8软窗口限制扫描长度，低分辨率阶段做全图扫描。双路径ConvMamba块让选择性状态空间分支与两层3×3卷积分支并行计算，再用可学习的1×1卷积拼接融合，多尺度头聚合四个阶段特征，该设计区分时间轴长程叙事和频率轴局部谐波并保留卷积局部先验。在GTZAN曲目级5折交叉验证上，以平均准确率计完整模型为88.99%±1.58%，超过同表最强已发表方法的88.64%。在FMA-Small曲目级分层10折交叉验证上，以平均准确率计ResMamba为64.52%±1.88%，高于同协议从零训练ResNet-18基线的59.95%±1.81%。在FMA-Medium官方艺术家级划分上，以准确率计ResMamba为65.75%，超过同划分手工特征SVM基线的63%。三处结果均从零训练且无预训练、外部数据与数据增强，原文未披露训练、推理或部署成本，结论目前只在GTZAN、FMA-Small和FMA-Medium的音频内容内验证。

## 🔗 开源与复现资源

本次未形成可展示的已核验资源记录，开放状态尚未核实。

可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 音乐流派分类要从音频里保留什么信息

输入是约 30 秒的单声道音乐波形，目标是输出 blues、classical 等 10 个或更多流派中的一个标签。论文把波形先转成梅尔频谱图：纵向是 128 个梅尔频率带，横向是时间帧，数值取分贝刻度，再复制成 3 通道当作图像输入。必须保留的信息有两类：纵向的音高音色细节如谐波排布与瞬态起音，横向的节奏乐句演化如鼓点周期、主歌副歌过渡与配器变化。只看很短窗口容易丢掉跨数秒的呼应，只看全局平均又容易抹掉细粒度纹理，这就是后续既要局部又要全局的动机。

执行上对不足 30 秒的尾部补零、超长截断前 30 秒，用固定窗长与跳长算出 128×1292 表示，直接送入网络而不做时域降采样与任何波形或频谱增强，以保留完整频率轴与全时间上下文。这种不压缩的输入保留了最多判别线索，但也让高分辨率特征展平后的序列变得很长，成为后文必须用分窗折中的直接原因。

**梅尔频谱图 × 时频局部纹理 × 长时结构：** 梅尔频谱图是把 30 秒音频按频率纵轴与时间横轴展开的二维表示；时频局部纹理指谐波堆叠、起音瞬态等小邻域模式，长时结构指主歌副歌交替与配器变化等跨越数秒的关联，前者适合卷积的局部感受野，后者需要能跨远距离传递信息的序列模型，二者共同决定流派判别的依据。

### 已有路线为什么在长时建模上吃力

早期用梅尔倒谱系数、谱质心、过零率等手工特征加支持向量机或混合高斯模型，特征固定而表达有限，对复杂编曲的区分力不足。卷积网络把频谱当图像，用较深的层级堆叠局部卷积提取时频模式，感受野随深度扩大但仍偏局部，对跨越十几秒的段落呼应建模间接而低效。循环网络与卷积循环网络能沿时间建模前后依赖，但长序列上的梯度保持与并行效率受限，在几十秒音频上训练缓慢。

Transformer 用自注意力直接建立远距离关联，但二次复杂度在长音频上开销大，且在 GTZAN 每折仅约 800 个训练样本时容易过拟合，论文中从零训练的 Swin-T 表现明显偏低就是例证。状态空间模型提供了线性复杂度的替代路线，其中 S4 用结构化参数化处理长序列，选择性版本 Mamba 让转移参数随输入变化以动态保留或过滤信息，视觉侧又发展出双向扫描与四方向交叉扫描。混合卷积与状态空间的思路已被用于医学与高光谱图像，本文的双路残差块与可学习 1×1 融合是面向梅尔谱各向异性的特化，时间轴重叙事而频率轴重局部谐波，这与自然图像的平移不变假设并不相同。

### 论文要解决的具体困难是什么

困难在于梅尔频谱不是各向同性自然图像：时间轴承载长叙事，频率轴承载局部谐波结构，同一套方形卷积或全局注意力难以同时兼顾。直接把整个高分辨率特征展平成一个长序列送入选择性状态空间模型，阶段 1 和阶段 2 的序列长度可达上万量级，计算与显存压力大；若粗暴降采样压缩时间，又会丢掉流派判别信息，论文的分辨率消融证实了这种单调损失。

论文因此要回答 3 个连带问题：如何在 ResNet 式 4 阶段层级里嵌入全局扫描而不破坏 2 维主干形状，如何保住局部谱时先验以稳定浅层表示，如何让浅层细节参与最终决策而不被逐级下采样抹掉。具体数量上 128×1292 输入在阶段 1 和阶段 2 展平后约为 10336 与 2576 个 token，阶段 3 和阶段 4 仅约 640 与 160 个 token，前者若全图扫描则单次序列过长，后者则可承受全图建模。这直接导出高分辨率分 8×8 窗口、每窗 64 个 token、低分辨率全序列建模的折中，以及用并行卷积分支与跨阶段多尺度聚合补偿窗间割裂的方案。

### ResMamba 的整体流程是怎样的

沿一个样本走一遍：3 通道 128×1292 频谱先进 Stem，经 7×7 步长 2 卷积加归一化激活，再经 3×3 步长 2 最大池化，变为 64 通道的 1/4 分辨率。随后依次经过 4 个阶段，通道数为 64、128、256、512，阶段 2 到 4 开头降采样。每个阶段由若干残差块组成，主实验每阶段 2 块即紧凑配置，另以更深配置考察深度影响。浅层高分辨率阶段把特征切成 8×8 不重叠软窗口，在窗内做状态扫描；深层低分辨率阶段直接全图扫描。4 个阶段的输出最后送入多尺度融合头，对齐分辨率后拼接压缩，再经全局池化与全连接输出类别。

融合头内先自适应平均池化统一尺寸再通道拼接，随后 1×1 卷积加归一化激活、丢弃正则、全局池化与 128 维全连接接分类层，从而同时看到高分辨率谐波瞬态与深层语义模式。这种设计把容量放在宽度互补与层级复用上，而不是单纯加深，这与后文小数据上加深反而下降的观察是一致的。

下面导读针对总体结构图，重点看主干自上而下的通道与分辨率变化，以及虚线跳接如何把 4 个阶段连到融合头，这决定了浅层细节能否被复用。

> **看图路径：** 1. 沿从输入经 Stem 到四个阶段再到融合头的黑色主箭头看分辨率与通道变化；2. 对比黄色带窗阶段与绿色无窗阶段的图例颜色与窗口标注；3. 追踪绿色与紫色虚线多尺度跳接到融合头的位置；4. 核对每阶段通道数递增与分辨率递减是否与正文一致

[![原论文 Fig. 1：Overall architecture of ResMamba.](https://arxiv.org/html/2611.00746v1/architecture.png)](https://arxiv.org/html/2611.00746v1/architecture.png)

*论文图 1。原论文 Fig. 1:：“Overall architecture of ResMamba. The backbone adopts a four-stage hierarchy, beginning with a stem that projects the 3-channel mel-spectrogram input to 64 feature maps via a…”。*

图中自上而下可见输入经 Stem 变为 64 通道，随后阶段通道递增而分辨率递减，阶段 1 和阶段 2 标为带 8×8 窗口，阶段 3 和阶段 4 标为无窗口，底部融合头汇聚多路虚线跳接后接分类层。这说明全局扫描的范围是按分辨率折中的：高分辨率分窗保代价可控，低分辨率全图扫描保上下文完整，多尺度头则补偿下采样造成的信息损失。

### Mamba 分支如何把二维特征变成序列再变回来

MambaWrapper 的作用是接口适配。输入是批量、通道、高、宽的 4 维特征，先用 1×1 卷积把通道投影到序列嵌入维，保持空间布局不变，再沿空间展平成批量、序列长、嵌入维的 3 维序列。序列送入单向 MambaVision 混合器：线性投影分成两路，各经深度 1 维卷积加激活补局部上下文，再由输入算出选择性参数并做离散化递推，最后把两路结果拼接投影回嵌入维，再整形回 4 维。原文用下式表示 Stem 的起点变换，便于对照通道与分辨率的首次变化。

\[\mathbf{F}_{0}=\text{ReLU}\big(\text{BN}\big(\text{Conv2d}_{7\times 7,\,s=2,\,p=3}(\mathbf{X})\big)\big),\]

该式中输入是 3 通道频谱，输出是 64 通道特征，卷积核与步长决定了高宽减半。理解这一点后，才能明白后续各阶段的序列长度是由特征图尺寸决定的。包装器内部先经输入投影到 2 倍内部维并切分为两路，每路经核长为 3 的深度 1 维卷积加激活，再由其中一路算出选择性参数，其中状态维为 8，连续参数经 1 阶近似离散化后逐时刻递推，输出与门控支拼接再投影回嵌入维并恢复为批量嵌入维高宽，从而完成保结构的 2 维到 1 维再到 2 维往返变换。

**选择性状态空间模型 × MambaWrapper × 四维残差接口：** 选择性状态空间模型指状态转移参数随输入变化的循环更新机制，能按内容决定保留或遗忘，实现线性复杂度的全局建模；MambaWrapper 是把它包成接受与返回批量通道高宽四维特征的适配器，先用 1×1 卷积投影再展平扫描最后恢复布局，使二维频谱能直接调用一维扫描而不改主干形状。

这种往返的意义在于主干其余部分仍可按 4 维残差块组织，下采样、归一化与残差对齐都不必改写，只有扫描内部看到 1 维序列。高分辨率下展平会很长，因此只在窗内展平；低分辨率下展平很短，因此可以直接全图展平。

### 选择性扫描内部算的是什么

核心是随输入变化的递推。连续参数经步长离散化得到随位置变化的转移矩阵，隐藏状态逐时刻更新并输出，门控分支再与之合并。这种选择机制让模型能动态决定沿序列保留或丢弃哪些信息，与固定参数的状态空间模型形成区别。阅读时先看离散化如何把连续矩阵变成可递推形式，再看递推如何把历史状态与当前输入结合。

\[\overline{\mathbf{A}}=\exp(\bm{\Delta}\mathbf{A}),\quad\overline{\mathbf{B}}=\bm{\Delta}\mathbf{B}\]

\[\mathbf{h}_{t}=\overline{\mathbf{A}}_{t}\mathbf{h}_{t-1}+\overline{\mathbf{B}}_{t}\tilde{\mathbf{x}}_{t},\quad\mathbf{y}_{t}=\mathbf{C}_{t}\mathbf{h}_{t}+\mathbf{D}\odot\tilde{\mathbf{x}}_{t}\]

前者说明离散转移由指数与乘法近似得到，后者说明隐藏状态是加权历史加当前输入，输出再加可学习跳接。下标表示随位置变化，下标范围即序列长度，低分辨率阶段序列短因而可全图扫描，高分辨率阶段序列长因而需分窗。其中转移矩阵具对角结构且特征值为负实数以保证稳定，输入相关矩阵与步长均由当前序列算出，跳接为可学习逐通道参数。

低分辨率全图建模以适度开销聚合整图上下文，高分辨率每窗仅 64 长度并对应约 0.7 至 1.5 秒音频以低代价捕获短节奏与乐句结构，窗内局部由扫描前的深度卷积增强，跨窗信息则靠并行卷积分支与多尺度聚合重新整合而无需移位重分窗。

### 双路块把全局与局部分别怎么处理又在哪里汇合

下面导读针对双路块细节图，注意输入先经一次共享的平均池化降采样，再分叉为左右两路，最后在拼接与 1×1 卷积处汇合，这决定了两路看到的是同一分辨率而分工不同。

> **看图路径：** 1. 先看顶部平均池化后分叉为左右两路的位置；2. 对比左侧绿色状态扫描块与右侧蓝色两层卷积块的标注；3. 观察拼接后 1×1 卷积如何把 2C 压回 C 再与残差相加

[![原论文 Fig. 3：Architecture of the ConvMamba dual-path block.](https://arxiv.org/html/2611.00746v1/convmamba_block.png)](https://arxiv.org/html/2611.00746v1/convmamba_block.png)

*论文图 3。原论文 Fig. 3:：“Architecture of the ConvMamba dual-path block.”。*

图中左侧绿色块标为状态扫描，右侧蓝色两块标为 3×3 卷积，前者负责跨时间全局依赖，后者由两层 3×3 加归一化激活负责局部谱时模式，两路输出按通道拼成 2 倍通道再经 1×1 卷积压回原通道，最后与残差相加过激活。共享的平均池化避免两路重复降采样，残差在形状不一致时用 1×1 步长 2 卷积对齐。执行顺序是先对输入做 2×2 平均池化得到共享下采样表示，再并行算出经归一化的 Mamba 分支与经卷积归一化激活卷积归一化的卷积分支，接着通道拼接并经 1×1 卷积加归一化融合为互补表示，最后经随机深度丢弃与跳接相加再过激活输出，可学习的 1×1 融合在每个空间位置自适应权衡全局与局部贡献。

**卷积分支 × Mamba 分支 × 1×1 融合：** 卷积分支用两层 3×3 卷积提取局部谱时模式，Mamba 分支用状态扫描聚合跨时间全局上下文，1×1 融合把两路按通道拼接后再投影回原通道数，作用是在每个空间位置自适应加权全局与局部信息，组合后同时保留细粒度纹理和远距离依赖。

**残差连接 × 随机深度 × 平均池化下采样：** 残差连接指把输入经恒等或 1×1 投影后加到变换输出上，保证梯度直通与形状对齐；随机深度是在训练时按深度递增概率整块丢弃主路的正则手段；平均池化下采样是在阶段交界处共享的一次分辨率减半，三者搭配让混合块在小数据上仍能稳定优化。

### 单路基线与多尺度头各自起什么作用

AdaptMambaBlock 是单路对照：只有 MambaWrapper 加归一化与随机深度，没有并行卷积，用于检验纯全局建模能走多远。ConvMambaBlock 是完整双路，在此基础上加卷积先验。多尺度融合头则把 4 个阶段输出先自适应池化到统一分辨率再拼接，经 1×1 卷积压缩、丢弃正则、全局池化与 128 维全连接后分类。浅层保留高分辨率的谐波与瞬态，深层编码语义级流派模式，融合让分类器同时看到两端，这是相对只用末级特征的直接改进。

消融上单 Mamba 已超过 ResNet-18 个基线，加上双路卷积分支后再加多尺度头达到最高，而加深反而回落，说明在每折约 800 训练样本下紧凑双路加多尺度聚合的容量与泛化折中更优。单路参数量很小但缺局部先验，双路用更多参数换来局部稳定性，多尺度头只增加少量参数却复用了全层级信息，这三者的代价与收益是分开的，不能只看总准确率。

### 训练与优化按什么协议执行

所有模型都从零训练，不用预训练、外部数据与任何波形或频谱增强。优化器为 AdamW，初始学习率 10 的负 4 次方，权重衰减 10 的负 2 次方，前 5 轮从较小值线性热身。GTZAN 批量 16 训练 120 轮，在第 60 与 90 轮把学习率乘 0.1 且不用早停；FMA 每批使用 32 个样本。验证准确率和验证损失连续 10 轮无改善时，学习率减半。

早停的等待上限为 20 轮。损失为交叉熵，正则含丢弃与随机深度。

对比的视觉主干也去掉预训练权重，只换最后分类层以匹配类别数，保证差异主要来自结构而非预处理。训练在单卡上执行，输入统一为全分辨率频谱，评估时 GTZAN 用分层五折轨道级交叉验证，FMA-Small 用分层 10 折轨道级交叉验证，FMA-Medium 用官方艺术家级划分。这种固定预处理与统一超参的安排，是为了让自训基线之间的比较尽量公平，而不是为了刷出某一折的峰值。

### 数据输入分辨率与划分如何保证可比

GTZAN 为 1000 轨 10 类，实际可用 999 轨，每轨约 30 秒，采样率 22050 赫兹，短则尾部补零、长则截前 30 秒。FMA-Small 为 8000 轨 8 类，剔除损坏后 7994 轨；FMA-Medium 为 25000 轨 16 类，按官方艺术家级划分合并后训练验证测试为 19904、2504、2572 轨。频谱参数固定为窗长 2048、跳长 512、128 梅尔带，得到 128×1292 表示。GTZAN 用分层五折轨道级交叉验证，FMA-Small 用分层 10 折轨道级交叉验证，FMA-Medium 用官方艺术家级划分。轨道级保证同曲不跨训练测试，这是与片段级比较时必须注意的分界。

**轨道级划分 × 片段级划分 × 艺术家隔离：** 轨道级划分指同一首歌的全部内容只进训练或只进测试，避免同曲泄露；片段级划分是把一首歌切成多段当独立样本，可能使同曲片段分处两边而虚高准确率；艺术家隔离进一步要求演唱者不跨划分，三者严格程度递增，直接决定跨论文数字能否并排比较。

下面导读针对 10 类代表频谱图，把它们当作图像分类的直观依据，观察不同流派在能量分布与时间延续性上的差异，但不要把肉眼可分直接等同于模型易分。

> **看图路径：** 1. 先横看每幅图的时间横轴与频率纵轴及分贝色标；2. 对比古典的稀疏线条与金属的宽带持续高能量；3. 观察嘻哈流行的低频聚集与爵士的不规则起音差异

[![原论文 Fig. 4：Mel-spectrograms of the first track from each of the ten GTZAN genres: blues.00000, classical.00000…](https://arxiv.org/html/2611.00746v1/mel_spectrograms.png)](https://arxiv.org/html/2611.00746v1/mel_spectrograms.png)

*论文图 4。原论文 Fig. 4:：“Mel-spectrograms of the first track from each of the ten GTZAN genres: blues.00000, classical.00000, country.00000, disco.00000, hiphop.00000, jazz.00000, metal.00000, pop.00000,…”。*

图中可见古典呈稀疏分离的谐波线加静默间隙，金属摇滚呈宽带持续高能量，嘻哈流行低频集中成块状突发，爵士变化较不规则，乡村雷鬼迪斯科则兼具谐波与打击成分。这些视觉差异支持把流派分类当作图像识别问题，但具体判别仍需模型在完整分辨率下学习，降采样会系统性地削弱时间细节。

### 主结果在相同输入下比强基线高多少

比较问题是：在同样全分辨率输入、同预处理同训练超参且无增强条件下，完整 ResMamba 相对常见视觉主干能否取得更高五折平均准确率，指标方向为越高越好，代价看参数量与浮点运算量。下表汇总 GTZAN 上各主干的准确率均值与波动、参数量与浮点运算量，均为作者同协议从零训练，其中 ResMamba 指 4 阶段双路加多尺度头的紧凑配置。

准确率以百分比计，参数量以百万计，浮点运算量以十亿计。

| 方法 | 准确率 | 参数量 | 浮点运算量 |
| --- | --- | --- | --- |
| ResNet-18 | 85.38 ± 1.54 | 11.2 | 12.1 |
| ResNet-34 | 82.38 ± 0.95 | 21.3 | 24.3 |
| ResNet-50 | 85.08 ± 1.16 | 23.5 | 27.2 |
| ResNet-101 | 82.18 ± 2.71 | 42.5 | 51.8 |
| EfficientNet-B0 | 77.98 ± 1.39 | 4.0 | 2.6 |
| EfficientNet-B1 | 76.68 ± 2.98 | 6.5 | 3.9 |
| EfficientNet-B2 | 78.38 ± 2.16 | 7.7 | 4.5 |
| EfficientNet-B3 | 78.48 ± 2.78 | 10.7 | 6.5 |
| EfficientNet V2-S | 81.48 ± 1.88 | 20.2 | 19.0 |
| ResNeXt-50 (32×4d) | 84.88 ± 3.07 | 23.0 | 28.2 |
| Swin-T | 77.48 ± 1.75 | 27.5 | 19.7 |
| MambaVision-T | 83.59 ± 4.16 | 31.1 | 29.6 |
| ResMamba | 88.99 ± 1.58 | 15.1 | 15.6 |

表中 ResMamba 以适中的参数和运算量达到最高准确率，比 ResNet-18 高约 3.6 个百分点，比 ResNeXt-50 高约 4.1 个百分点且参数少约三分之一；Swin-T 仅 70% 多说明纯注意力在每折约 800 训练样本下难以学好，而 EfficientNet 系列同样偏低，表明为自然图像优化的轻量设计不能直接迁移到频谱。未胜出项是更深的 ResNet-50 与 101 并未随容量单调提升，反而低于 ResNet-18，这为后文紧凑配置的选择提供了依据。

下面导读针对混淆矩阵图，先看对角正确数判断哪些类最易分，再看非对角亮格定位系统性混淆，这能揭示仅看总准确率看不到的误差结构。

> **看图路径：** 1. 先沿对角线读每类正确数再看非对角混淆格；2. 重点找摇滚到乡村 9 例与雷鬼到迪斯科的亮格；3. 结合右侧计数色标判断混淆的相对严重程度

[![原论文 Fig. 5：Confusion matrix aggregated over all five cross-validation folds for ResMamba on the GTZAN dataset.](https://arxiv.org/html/2611.00746v1/confusion_matrix.png)](https://arxiv.org/html/2611.00746v1/confusion_matrix.png)

*论文图 5。原论文 Fig. 5:：“Confusion matrix aggregated over all five cross-validation folds for ResMamba on the GTZAN dataset.”。*

图中对角可见古典、布鲁斯、金属最高，摇滚最低、雷鬼次低；非对角以摇滚判为乡村多例、金属与摇滚互判、雷鬼与迪斯科及摇滚互判最突出。这与布鲁斯影响的摇滚与乡村连续体、失真音色的硬摇滚与重金属重叠、切分舞曲节奏共享等音乐直觉一致，也说明总准确率的剩余误差集中在少数风格相邻对上。

### 输入分辨率降低会丢掉多少判别信息

比较问题是：在 ResNet-18 上只改变时间压缩、保持 128 梅尔带不变时，准确率是否随分辨率单调变化，指标为五折平均准确率，越高越好，代价是序列长度与计算量。下表比较 4 个候选分辨率，频率轴不变而时间轴逐步压缩。

准确率以百分比计。全局平均池化之前，四档输入分辨率对应的特征图依次是 4 × 10、4 × 20、4 × 30 和 4 × 41。

| 分辨率 | 压缩倍数 | 准确率 |
| --- | --- | --- |
| 128 × 320 | 4.0× | 78.28 ± 2.62 |
| 128 × 640 | 2.0× | 83.18 ± 2.45 |
| 128 × 960 | 1.35× | 84.28 ± 1.91 |
| 128 × 1292 | 1.0× | 85.38 ± 1.54 |

表中从最激进压缩到中等压缩提升约 4.9 个百分点，从中等压缩到全分辨率再提升约 2.2 个百分点，说明直到约 23 毫秒粒度仍未饱和，激进压缩到接近 100 毫秒感知阈会丢失大量判别信息。因此后续所有实验统一用全分辨率输入，代价是序列更长而必须配合分窗策略。这个单调性也反过来说明双路与多尺度设计的收益是在信息最完整的输入上测得的，而不是靠低分辨率掩盖长时建模的短板。

### 双路多尺度与加深分别带来什么变化

比较问题是：在相同主干与超参下，单路、双路、加多尺度、加深分别表现如何，指标为 GTZAN 五折平均，越高越好，代价看参数量。下表为同输入同协议下的组件消融。

准确率以百分比计。

| Model | Block Type | nBlocks | Acc. | Params (M) |
| --- | --- | --- | --- | --- |
| ResNet-18 | BasicBlock | [2,2,2,2] | 85.38 ± 1.54 | 11.2 |
| ResMamba | AdaptMamba | [2,2,2,2] | 86.79 ± 1.03 | 2.2 |
| ResMamba | ConvMamba | [2,2,2,2] | 88.39 ± 2.55 | 14.6 |
| ResMamba | ConvMamba+MS | [2,2,2,2] | 88.99 ± 1.58 | 15.1 |
| ResMamba | ConvMamba+MS | [3,4,6,3] | 87.49 ± 0.88 | 28.0 |

表中单路已超 ResNet-18 约 1.4 个百分点，但纯扫描缺局部先验；加卷积分支后再加多尺度头达到最高，说明两路互补与层级聚合各自有效；加深到 28.0M 参数反而回落，在 GTZAN 小数据下更大容量加剧过拟合而非提升判别力。尚未评测的是在更大语料上深配置是否反超，原文只在结论中作为展望提出。跨文献对照还需注意划分差异：片段级会因同曲泄露而虚高，轨道级与艺术家级更严格，因此与引用值的并排只能作背景参考。本表数值与单位依据论文 PDF。

跨数据集上同协议自训基线的相对提升依然成立：在 FMA-Small 上比自训 ResNet-18 高约 4.6 个百分点，在 FMA-Medium 上比广泛引用的手工特征基线高约 2.8 个百分点。但 FMA 整体远难于 GTZAN，依赖外部知识或大规模预训练的方法更高，而冻结大模型加线性探针的结果因不在 FMA 上训练而不可直接比较。

### 结论的边界与容易误解的地方

第一，最高准确率是轨道级分层五折在 999 可用轨上的均值加减标准差，比较对象中片段级划分会因同曲泄露而虚高，不能直接说超越所有历史方法。原文明确提醒不同划分、时长与增强下的数字不宜强排胜负，这个提醒不是客套，而是因为分母与泄露程度根本不同。

第二，FMA-Medium 的结果是在官方艺术家级划分下从零训练得到，与用外部乐器标注或大语料预训练的结果不在同一信息条件下，后者高 2 到 3 个百分点不代表同结构更优。信息条件不同时，比较只能说明自包含方案的上限与预训练方案的上限各在哪里。第三，加深反而下降只在 GTZAN 小数据下成立，不能推广为深网络普遍无用，在更大语料上容量与泛化的平衡点会移动。第四，无增强是为保证公平而非证明增强无用，实际部署是否加增强仍需另行验证，不能把控制变量误读为最佳实践。

### 复现第一步要固定哪些细节

先按 22050 赫兹、窗长 2048、跳长 512、128 梅尔带算分贝频谱，短补零长截前 30 秒得到 128×1292，再复制 3 通道。GTZAN 剔除不可读轨后做分层五折轨道级划分，FMA-Small 剔除损坏轨后 10 折，FMA-Medium 用官方艺术家级合并划分。模型用紧凑每阶段 2 块的双路加多尺度配置，AdamW 加 5 轮热身与分数据集学习率调度训练至多 120 轮。

评估时聚合所有折的逐样本预测再算混淆矩阵，不要只看单折峰值。FMA-Medium 的对照需要同时报告准确率与宏平均 F1，因为类别不均衡下只看准确率会掩盖小类表现。未提供来源绑定的代码与权重信息不得声称为已开源，本篇解读不作此断言，复现应以论文描述的预处理、划分与超参为准，而不是以第三方复刻的默认配置为准。

### 什么时候值得尝试以及还缺什么验证

当输入是长时频谱、既需要局部谐波纹理又需要跨秒级结构，且训练数据不多、不能依赖预训练时，这种卷积加线性扫描的双路与多尺度聚合值得尝试。复现应从紧凑配置与全分辨率输入起步，先验证分辨率单调性与双路增益是否复现，再看多尺度头在浅层细节丰富的类别上是否有针对性改善。

FMA 对照表进一步给出了跨数据集的证据，比较问题是官方艺术家划分下从零训练的端到端模型能否超过经典手工特征基线，指标越高越好。下表为 FMA-Medium 官方划分下的自训对照，包含准确率与宏平均 F1。

准确率以百分比计。

| Method | Acc. | Macro F1 | Split |
| --- | --- | --- | --- |
| Defferrard et al. [17] | 63.00 | — | Official artist split |
| ResNet-18† | 62.99 | 0.3558 | Official artist split |
| ResNeXt-50† (32×4d) | 61.00 | 0.3516 | Official artist split |
| ResMamba† | 65.75 | 0.4262 | Official artist split |

表中 ResMamba 在准确率与宏平均 F1 上都高于同协议自训的残差基线，说明泛化不只限于 GTZAN，但与依赖外部知识或大规模预训练的结果仍有差距。还缺的验证包括：在更大语料上深配置是否反转、在跨窗口扫描或预训练初始化下差距如何变化，以及在音乐标注、乐器识别与情感分类等任务上的通用性，这些在原文结论中只列为未来方向而无实测支撑。

<details>
<summary>📎 论文与评分元数据</summary>

排名：前50% | 文档类型：方法研究 | [arXiv 原文](https://arxiv.org/abs/2611.00746v1)

</details>

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。

- 评分规则：type-aware-v1

- 评分模型：muse-spark-1.3-contributor

- 评分请求协议：openai_responses

---

[← 返回 2026-11-03 语音/音乐/音频论文速递](/audio-paper-digest-blog/posts/2026-11-03/)
