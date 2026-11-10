---
title: "SubRoformer: Subband Time-Domain Representation for Music Source Separation"
date: 2026-11-09
draft: false
tags: [音乐源分离, Transformer, 时频分析]
categories: [论文速递]
description: "针对整曲波形太长、全频带谱分辨率难以兼顾的问题，SubRoFormer 先把混合声做成低速率的子带时域表示再估计复数掩码，在只用 MUSDB18-HQ 训练时四轨平均 SDR 达到 10.63 dB，代价是固定滤波器组本身带来约 28 dB 量级的重构失真和四模型部署成本。"
hiddenInHomeList: true
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_arxiv_id: "2611.08130"
paper_digest_workbench_contract: "researcher-workbench"
paper_digest_workbench_schema_fingerprint: "1f09b594c317cc38e934de27a5b0e8ceb4baa50ef79bd4f8683dd9adea720fe7"
paper_digest_reader_title: "SubRoFormer：用子带时域表示做音乐分离"
paper_digest_original_title: "SubRoformer: Subband Time-Domain Representation for Music Source Separation"
paper_digest_arxiv_version: 1
paper_digest_arxiv_versioned_id: "2611.08130v1"
paper_digest_arxiv_abs_url: "https://arxiv.org/abs/2611.08130v1"
paper_digest_arxiv_pdf_url: "https://arxiv.org/pdf/2611.08130v1.pdf"
paper_digest_primary_task: "音乐源分离"
paper_digest_tags_contract: "paper-tag-flat-tags"
paper_digest_tags_schema_fingerprint: "27e36280a4b8d3df62ebe54d3ab037920f4d69feb2b554163f01bbae2caf4338"
paper_digest_tags_selection_contract: "paper-tag-selection"
paper_digest_tags_registry_version: "paper-tag-catalog"
paper_digest_tags_registry_sha256: "9673bc0122e1905a5dcfd8b223675400cc2fa4c36095bc0e5f817edf99a0ec5c"
paper_digest_tags_concepts: [{"facet":"task","id":"task.music-separation","label":"音乐源分离"},{"facet":"method","id":"method.transformer","label":"Transformer"},{"facet":"method","id":"method.time-frequency","label":"时频分析"}]
paper_digest_primary_method: "Transformer"
paper_digest_score: 7.1
paper_digest_rank_bucket: "前50%"
paper_digest_document_type: "方法研究"
paper_digest_one_sentence: "针对整曲波形太长、全频带谱分辨率难以兼顾的问题，SubRoFormer 先把混合声做成低速率的子带时域表示再估计复数掩码，在只用 MUSDB18-HQ 训练时四轨平均 SDR 达到 10.63 dB，代价是固定滤波器组本身带来约 28 dB 量级的重构失真和四模型部署成本。"
paper_digest_authors: [{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Chunyat Wu"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Chuang Ding"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Paris Smaragdis"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Qiuqiang Kong"}]
paper_digest_abstract_sha256: "5f21ba428d9895c3c822d7e1f895c49adb180dc0e2023e0be9c7764e1707d8bf"
paper_digest_sidecars: {"citation.bib":{"sha256":"888fb3423ea44838f039b7561c6ad3a826604a7e1db89a9cd81ef6e2287e4185","url":"/audio-paper-digest-blog/client/papers/2026-11-09/2611-08130/citation.bib"},"citation.json":{"sha256":"b96e9d1696f66c931c2a09d4506d0d79619f1b7af4499d915f2c6b590e576678","url":"/audio-paper-digest-blog/client/papers/2026-11-09/2611-08130/citation.json"},"citation.ris":{"sha256":"237ed9ced607f43c4ac7f77d9c55847f6953854ab16ecb94aebe40d13bddfb00","url":"/audio-paper-digest-blog/client/papers/2026-11-09/2611-08130/citation.ris"},"rethink-context.json":{"contract":"paper-research-context","schemaFingerprint":"5d4e79f7d3ee65b39ccb38281548bf20a1b2041ab7a27625eaf97ab9909a8383","sha256":"f637792b0e2def8725b14e5c12b310dfac960747c3c732d06aa237d83929879e","url":"/audio-paper-digest-blog/client/papers/2026-11-09/2611-08130/rethink-context.json"}}
paper_digest_api_reader_contract: "beginner-researcher"
paper_digest_api_reader_schema_fingerprint: "cd8baf5b8bda3a49eec64f6005931af63de4e9a13148cba5f354c661ca6e9df2"
paper_digest_api_reader_article_sha256: "39871a1beb2307efffe1626156dfb63729cb765f27a734fbe3c5b916557cf728"
paper_digest_api_reader_plan_sha256: "632c8c99d15ba6945b7fc7e53f148164c9f6f48a700d15fd121ea744f5131fa2"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings"
paper_digest_api_reader_source_binding_schema_fingerprint: "d2a2607a6e561909473022eb43f56332ee357af8568566a095c29083ffdec9cc"
paper_digest_api_reader_source_bindings_sha256: "539aea554cfd7af5e7d492dcec11ed44036700a4265978ee7e6d26cec0a1538f"
paper_digest_api_reader_source_table_count: 4
paper_digest_api_reader_source_formula_count: 4
paper_digest_api_reader_structured_artifacts_sha256: "ff35511b3eb16adcaba06f077339efdfb6869fa7920b23e906b2c519d2ceb5af"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity"
paper_digest_api_reader_author_identity_schema_fingerprint: "1e3fd3a9a56c9a5bf52df8df5022690b9a3fa92e83e934f295af87c0e258ed2f"
paper_digest_api_reader_author_identity_sha256: "c4f761724879f5214093c03c44753dfa561dde12c603b08df702de94068f28a7"
paper_digest_api_reader_author_count: 4
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity"
paper_digest_api_reader_resource_identity_schema_fingerprint: "33b0be17118be61f39b85ce690c8da17e91f2864bb65e85284f60c40067328e0"
paper_digest_api_reader_resource_identity_sha256: "3899e64f24ef730440209ad04acafa3d6605af3bf0d779e160a37a64e462cd82"
paper_digest_api_reader_resource_count: 0
paper_digest_api_reader_figure_persistence: "ephemeral-no-persisted-figure-assets-v1"
paper_digest_api_reader_decision_projection: "api-reader-decision-projection"
paper_digest_api_reader_decision_projection_schema_fingerprint: "e56feb5ab75c8710904916b898f73dab9bb18bdf65bb60b7ed2edf7f99cea860"
---

# 📄 SubRoFormer：用子带时域表示做音乐分离

> 英文题目：*[SubRoformer: Subband Time-Domain Representation for Music Source Separation](https://arxiv.org/abs/2611.08130v1)*

<!--paper-tag-hierarchy-v1:start-->

**研究分类**

- **研究任务**：[音频分离](/audio-paper-digest-blog/papers/?concept=task.audio-separation) → [音乐源分离](/audio-paper-digest-blog/papers/?concept=task.music-separation)
- **研究方法**：[Transformer](/audio-paper-digest-blog/papers/?concept=method.transformer)；[信号处理](/audio-paper-digest-blog/papers/?concept=method.signal-processing) → [时频分析](/audio-paper-digest-blog/papers/?concept=method.time-frequency)

<!--paper-tag-hierarchy-v1:end-->

> 评分：**7.1/10** | 创新 1.5/2 | 技术严谨 1.2/1.5 | 实验充分 1.2/1.5 | 清晰度 0.8/1 | 影响力 1/1.5 | 开源 0/1.5 | 可复现 0.4/0.5 | 工程/实践 1/1.5


## 👥 作者与机构

- Chunyat Wu：机构信息未能在本次解析中与作者逐人可靠绑定
- Chuang Ding：机构信息未能在本次解析中与作者逐人可靠绑定
- Paris Smaragdis：机构信息未能在本次解析中与作者逐人可靠绑定
- Qiuqiang Kong：机构信息未能在本次解析中与作者逐人可靠绑定

## 📌 核心摘要

音乐源分离要从一路或两路混音中恢复人声、贝斯、鼓和其他乐器的波形，重叠的时频成分与多变的音色使归属判断困难。先由子带模块用固定三角滤波器组把48 kHz立体声混音分成128个重叠频带，经希尔伯特变换取解析信号、复解调移到零频再抽取，提取低速率复基带表示并送入分离器。再由分离器对每个子带做局部短时傅里叶变换提取细粒度时频特征，送入时域分块压缩到25帧/秒做长程建模，最后经门控残差融合恢复细粒度并输出复数掩码预测。最后逆变换把掩码结果经插值、再调制、取实部和求和重建波形，与全频带谱分组的BSRNN或BS-RoFormer不同，本文把波形速率降低与特征序列压缩放在前后端不同阶段控制。在MUSDB18-HQ 50首测试曲上以四轨中位SDR平均的四轨平均SDR衡量，仅用MUSDB18-HQ训练的四个独立目标模型为10.63 dB，高于已列完整结果中最强的BS-RoFormer的10.02 dB。同样在该50首测试曲上以相同四轨平均SDR衡量，加500首额外训练曲的单模型四轨联合SubRoFormer-B为11.59 dB，高于同表语境参考ACE Studio分离器输出的10.92 dB。无额外数据训练各模型用100万次优化更新，其中SubRoFormer-B用6块RTX 5090全局批量18，额外数据模型用8块RTX 4090训练140万次更新全局批量16，推理用2秒分段75%重叠，该结论限于该数据集与所列基线，固定滤波器重建失真、单种子消融与训练预算差异尚未排除。

## 🔗 开源与复现资源

本次未形成可展示的已核验资源记录，开放状态尚未核实。

可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 音乐分离要从混合声里拿回什么

音乐分离的输入是一到两个声道的成品混合声，目标是还原人声、贝斯、鼓和其他乐器四轨各自的波形。难点在于不同乐器在时间和频率上高度重叠，同一乐器的音高和录音条件变化又很大，输出还必须保留音高、瞬态和相位，否则重混和转调就不可用。论文把混合建模为各轨波形相加，评价用 museval 计算的 SDR，数值越高表示估计波形越接近参考轨，每轨取 50 首测试曲的中位数，四轨平均再取算术平均。

初学者容易把分离质量与前端本身的保真度混淆。本文专门区分两者：即使不做任何分离，只让固定滤波器组走一遍分析和合成，也会因有限长滤波和边界效应产生失真。这部分失真独立于神经网络，后文会用重构实验单独量化。

### 已有路线为何在序列长度和频率结构之间为难

纯波形路线直接学混合采样点到目标采样点的映射，相位隐含在波形里，困难是音频采样率太高，序列太长。Wave-U-Net 和 Demucs 靠下采样和多尺度编码把序列缩短，再用跳线保留高分辨率细节。纯频谱路线先做全频带短时傅里叶变换，在公共时频网格上估计掩码，再逆变换回波形，困难是单一分辨率对高低频用了同样的折中。

近年的折中是分带建模。BSRNN 按目标声把全频带谱切成不等宽频带，带内做时间建模、带间做跨带建模；BS-RoFormer 把循环换成沿时间轴和频带轴交替的 Transformer 并加入旋转位置编码；Mel-RoFormer 改用交叠的梅尔带。另一支是波形子带路线，在波形端先滤波再抽取，对子带谱做分离。SubRoFormer 属于后者，但它强调两种降速分工不同：波形端降速是为了降低采样率并保留合成路径，网络内部拼块降速是为了缩短 Transformer 看到的序列。

### 本文要解决的具体矛盾是什么

论文要回答的设计问题是：如何在保留谱结构和局部时间细节的同时，让分离器处理的序列变短。波形输入哪怕很短一段也有很多采样点，全频带谱虽然暴露了频率轴，但高频需要时间精度、低频需要频率精度的矛盾仍被同一个窗长绑住。子带表示的想法是让每个频带拥有自己的带宽，再把窄带信号搬到零频附近用低速率表示。

为此作者提出三件事：给出基于复数解调和速率转换的固定子带时域表示，并带显式合成路径和失真评估；给出避免算被抽掉样本的多相快速实现；再给出结合细率特征处理、复数掩码预测和分块轴向 RoFormer 的 SubRoFormer 分离器，用门控残差融合把细率和粗率信息合起来。

### 一个样本如何走完分析分离合成全程

以一段 48 kHz 立体声混合为例。固定前端先把它分成 128 个交叠子带，每个子带经滤波、解析变换、解调搬到零频，再抽取 60 倍，得到 800 Hz 的复数基带序列。接着对每个子带的低速率信号做局部短时傅里叶变换，得到细率复数谱，帧率是 100 帧/秒。

分离器先用边界块提炼细率特征并保留一条跳线，再把相邻帧拼块成 25 帧/秒的粗率序列交给轴向 RoFormer 做时间和跨带建模。粗率结果经反拼块回到 100 帧/秒，与跳线拼接融合后预测每个子带、每个时频点的复数掩码。掩码乘到混合子带谱上，经局部逆变换恢复各子带信号，再经插值、搬回原频率、取实部、求和得到全频带估计波形。

下图是全文流程的总览，先看主路径，再看上下展开的子带细节和跳线位置。

> **看图路径：** 1. 先沿最上一行从混合 x 到估计 y 看主路径；2. 再看下半两块子带分析与合成如何展开为滤波加变速率；3. 注意中间跳线：细率特征直接连到融合与掩码乘法处

[![原论文 Fig. 1：Overview of SubRoFormer. The fixed front end converts the analytic mixture into demodulated,…](https://arxiv.org/html/2611.08130v1/assets/architecture.png)](https://arxiv.org/html/2611.08130v1/assets/architecture.png)

*论文图 1。原论文 Fig. 1:：“Overview of SubRoFormer. The fixed front end converts the analytic mixture into demodulated, decimated subbands; local complex features are processed by fine-rate boundary blocks…”。*

图中上行从左到右是子带分析、局部谱变换、前块、降块、RoFormer 主体、升块、融合、后块、掩码相乘、逆变换、子带合成。下半左右两块分别展开了分析端的解析变换加滤波加解调加抽取，以及合成端的插值加搬频加求和。中间两条长跳线分别把细率特征送往融合模块和掩码乘法之前，这是保留细节的关键。

### 子带分析如何把高频窄带变成低速率信号

子带分析对每个通道独立进行，包含四步。第一步带通滤波决定频率分辨率，作者用三角形目标响应，相邻带在斜边交叠，首尾带用单边低通和高通，保证在非负频率上各带相加为 1。这种设计避免矩形切分的硬边界，低频可用梅尔刻度变窄，高频用 390 Hz 间隔的线性刻度。实现上是用 SciPy 的 firwin2 加汉明窗做的有限长滤波器，系数固定不学。

目标响应的求和约束写作：

\[\sum_{k=1}^{K}A_{k}(f)=1,\qquad 0\leq f\leq F_{s}/2,\]

该图只画理想目标，不是实际有限长响应的实测曲线。

下图画出一个中间带的理想形状，横轴是频率，纵轴是目标幅度，顶部虚线是各带之和，适合先建立交叠相加为 1 的直觉。

> **看图路径：** 1. 看中间蓝色三角形与其下三个频率标记的对应关系；2. 看相邻灰色虚线三角形在斜边处如何交叠；3. 看顶部黑色虚线为何保持在 1.0 附近

[![原论文 Fig. 2：Schematic target magnitude responses of the triangular filter bank, with illustrative frequency…](https://arxiv.org/html/2611.08130v1/assets/triangular_filterbank.png)](https://arxiv.org/html/2611.08130v1/assets/triangular_filterbank.png)

*论文图 2。原论文 Fig. 2:：“Schematic target magnitude responses of the triangular filter bank, with illustrative frequency spacing.”。*

蓝色填充三角形是当前带，下沿 3 个标记分别是下边缘、峰值和上边缘，左右灰色虚线是相邻带的斜边，首尾带只保留一侧。理解这张图时不要把它当成 FIR 实现后的真实频率响应。

第二步解析变换用希尔伯特变换去掉冗余的负频率分量：

\[x_{k}^{\mathrm{a}}[n]=x_{k}[n]+j\mathcal{H}\{x_{k}[n]\},\]

第三步复数解调把中心频率搬到零频：

\[b_{k}[n]=x_{k}^{\mathrm{a}}[n]e^{-j2\pi f_{k}n/F_{s}},\]

第四步每 D 个点保留一个：

\[z_{k}[m]=b_{k}[mD].\]

当基带总宽度小于 Fs 除以 D 时抽取无混叠，实际因过渡带有容差，作者对 800 Hz 目标带宽按 780 Hz 留余量。128 带配置下 D 取 60，子带采样率降到 800 Hz。

**子带分析 × 子带合成：** 子带分析负责把全速率混合波形切成多个频率局部、低速率的复数基带序列，解决长序列建模困难；子带合成负责把估计后的子带插值、搬回原频率再相加恢复波形，提供显式的逆变换路径；两者配对才构成可评估重构误差的固定前端。

下图用中心频率为 10.4 kHz、带宽约 800 Hz 的例子串起五步，左侧是时域波形变化，右侧是幅度谱位置变化。

> **看图路径：** 1. 自上而下对照左侧波形形态与右侧频谱位置的变化；2. 注意从(b) 到(c) 负频率分量如何消失；3. 注意从(d) 到(e) 采样率标注如何从 48 kHz 变为 800 Hz

[![原论文 Fig. 3：Per-band analysis and rate conversion: (a) the input x\[n\]; (b) the band-pass filtered signal…](https://arxiv.org/html/2611.08130v1/assets/figure2-subband.png)](https://arxiv.org/html/2611.08130v1/assets/figure2-subband.png)

*论文图 3。原论文 Fig. 3:：“Per-band analysis and rate conversion: (a) the input x[n]; (b) the band-pass filtered signal x_k[n]; (c) the analytic signal x_k^a[n]; (d) the complex baseband signal b_k[n]; and…”。*

从上到下依次是原始宽带输入、带通后仍在 10.4 kHz 附近的快振荡、解析变换后只剩正频率、解调后搬到零频附近的慢变化、抽取后点数稀疏但包络仍在。最后一行谱轴已缩到正负 400 Hz，标注降速后为 800 Hz，直观显示了速率下降的原因是带宽变窄后不再需要高采样率。

### 子带合成与快速实现如何把估计搬回去

合成是分析的镜像。对估计出的每个子带先在抽取位置补零，再用截断的 sinc 插值滤波恢复到全速率，接着乘以相反的复指数搬回原中心频率，取实部得到该带的实值贡献，最后把多个带相加。理想情况下可完美重构，有限长滤波的混叠和边缘振铃则造成可测失真。

直接实现复杂度随带数、滤波器长和信号长增长。作者先把卷积换成快速傅里叶卷积，再把滤波与抽取、插值与滤波联合做多相实现，不计算注定被丢弃或本为零的中间样本。分析端和合成端的计算与内存都降到与抽取后长度相关的对数线性量级。这里抽取因子越大节省越多，但前提是信号远长于滤波器。滤波器系数本身仍固定，不参与训练。

**细率特征 × 粗率上下文：** 细率特征指对子带做局部短时傅里叶变换后保持的每 100 帧/秒的谱特征，用于保留瞬态和相位细节；粗率上下文指把相邻帧拼块后降到 25 帧/秒再做长程建模的表示，用于看清乐句级依赖；两者分工后由门控残差融合汇合，兼顾细节与上下文。

**复数掩码 × 局部短时傅里叶变换：** 局部短时傅里叶变换是对每个低速率子带再做的短窗谱分析，给出幅度加相位的复数系数；复数掩码是作用在该谱每个时频点上的复数乘子，同时改幅度和转相位；两者搭配才能从混合谱中抽出目标声的子带谱。

### 分离器如何在两种时间网格上分工

分离器输入是每个子带的局部谱，其实部虚部拼接后再把通道和频率展平。前处理块用类 ConvNeXt-V2 时间混合加 RMSNorm 和 SwiGLU 门控，先沿时间做一层 Transformer，再沿子带做一层，得到细率表示。随后学习式拼块把相邻时间帧合并，子带轴不动，得到粗率表示。只拼时间不拼子带，是怕再压缩频率细节会丢掉分离所需的谱结构。

主体是堆叠的轴向 RoFormer，每层先做子带轴注意力再做时间轴注意力，沿用 BS-RoFormer 设计并用旋转位置编码区分位置，前馈用 SwiGLU。因为输入已是 25 帧/秒的拼块序列，长程依赖的计算量明显下降。主体输出经反拼块回到 100 帧/秒，与前处理跳线拼接后送入 GEGLU 融合，以加法残差形式把长程上下文叠加到细率流上。后处理块再做时间加子带两层 Transformer，投影到复数掩码，经逐点相乘、局部逆变换和子带合成得到波形。单目标与多目标的区别只在最后投影头是一个还是 4 个，共享主干时 1 次前向给出四轨。

### 训练用什么数据增强和损失

训练只用 MUSDB18-HQ 的 100 首训练曲时，每首含人声、贝斯、鼓、其他四轨立体声。混合不是直接用原混音，而是每轨独立采样曲目和片段，分别做增益、声道交换、反转和极性翻转后再相加，同轨混叠还以一定概率再叠一到两段同类片段。作者沿用 ZFTurbo 仓库的增强配方且保持不变，以便与同配方系统比较。

优化用 AdamW，峰值学习率 3×10-4，预热 1000 步后余弦衰减到零，零权重衰减，梯度裁剪 1.0，EMA 衰减 0.999，最终报告用训练结束时的 EMA 权重而非验证挑选。损失是波形 L1 加 5 种窗长的复数谱 L1 之和，窗长集合为 4096、2048、1024、512、256，谱跳长 147 点，复数残差取模而非实虚部分别求和，各项权重均为 1。多目标训练对四轨损失取平均，保证每轨权重相等。训练片段是 2 秒 48 kHz 立体声裁剪，推理用 2 秒窗、75% 交叠的汉明窗叠加。

### 评价指标和基线如何分组才可比

主指标是 SDR，越高越好。每轨先在 50 首测试曲上取中位数，四轨平均再取算术平均。比较时必须先看输出契约：单目标组用 4 个专用模型分别估计四轨，多目标组用一个模型 1 次估计四轨，两组的参数量口径和前向次数都不同。论文把无额外数据表按这两组分开，加额外数据的系统另放一表，基线分数取自原论文而非重跑。

前端保真度用重构 SDR、对数谱距离和归一化幅度误差衡量，前者越高越好，后两者越低越好，系数率统计每样本每通道的实数系数量。理解后文数字时要记住：重构表回答固定前端本身损耗多少，分离表回答整个系统能分多干净。

**重构 SDR × 分离 SDR：** 重构 SDR 只让固定分析合成前端空转、不做分离，衡量滤波器本身的失真；分离 SDR 衡量整个系统输出与干净目标轨的接近程度；前者是后者的上限性代价，后者好不代表前者无损，论文用表一单独量化了这一层损失。

### 固定前端本身损失多少

下表比较只过分析合成、不做分离时的保真度，问题是固定三角形滤波器组是否接近无损。条件是 MUSDB18-HQ 全部 50 首测试曲的立体声混合与四轨，48 kHz 下与重采样参考比较，重构 SDR 经时延对齐后取中位数。

| Transform | Rate | Mixture | NME ↓ |
| --- | --- | --- | --- |
| STFT [19] | 4.271 | 138.58 | 0.0000 |
| SubRoFormer mel–linear | 4.267 | 28.04 | 0.0264 |
| PQMF [18] | 1.000 | 11.30 | 0.2770 |

表中 STFT 对照的重构 SDR 高达 138 dB 量级，MDCT 和小波包也在 130 dB 以上，说明这些变换几乎无损。SubRoFormer 的梅尔线性带重构混合 SDR 只有 28.04 dB，明显有损，但仍远好于听觉 ERB 和 PQMF。贝斯轨重构到 47.78 dB，高于其他轨，说明低频窄带划分对贝斯更友好。代价是系数率与 STFT 几乎相同，降速率并没有换来系数减少，因为 128 个交叠带本身带来了冗余。这一层约 28 dB 的上限损耗是后文分离结果必须背负的前提。

### 不加额外数据时分离效果与代价

下表比较不加额外数据时的分离质量，公平条件是同为 MUSDB18-HQ 训练、按单目标与多目标分组，指标方向均为越高越好。为可读只摘录人声、贝斯和平均三列，完整四轨见原文表二。

| Model | Voc. ↑ | Bass ↑ | Avg. ↑ |
| --- | --- | --- | --- |
| BS-RoFormer [15, 35] | 11.02 | 11.58 | 10.02 |
| SubRoFormer-B (Ours) | 12.63 | 10.20 | 10.63 |
| SCNet-large [36] | 10.86 | 9.49 | 9.69 |
| SubRoFormer-S (Ours) | 11.72 | 9.59 | 10.29 |

单目标 SubRoFormer-B 四轨平均 10.63 dB，是表中完整四轨结果里的最高平均，比 BS-RoFormer 高 0.61 dB，人声、鼓、其他更高，但贝斯低 1.38 dB。单目标小模型平均 9.82 dB，放大到 B 模型平均涨 0.81 dB，其中鼓反而下降，说明增大全模型并非每轨都赢。多目标小模型平均 10.29 dB，超过 41.2M 的 SCNet-large，而自身只需 22.59M；多目标 B 模型平均 10.19 dB，比其单目标版本低 0.44 dB，只有鼓上涨，其余三轨都下降。

参数效率要看部署总量而非单网络。单目标小模型每网 22.52M，四网共 90.08M；单目标 B 模型四网共 388.68M。多目标 1 次给出四轨，小模型 22.59M，B 模型 97.23M。BS-RoFormer 用 3 个 93.4M 网络共 280.2M 才覆盖四轨，其中其他轨还是用混合减法得到。因此多目标 SubRoFormer-B 用约三分之一部署参数达到接近的平均分，但这只是输出契约和模型个数的比较，不等于同数据同算力的架构胜负。

**单目标模型 × 多目标联合模型：** 单目标模型指为人声、贝斯、鼓、其他各训一个网络，分离质量高但要存四个网络、跑四次；多目标联合模型指共享主干、只用不同输出头一次给出四轨，部署参数少但各轨之间要共享容量；论文同时报告两种契约，比较时不能混为一谈。

下图把平均 SDR 与部署总参数画在一起，横轴是对数参数量，纵轴是平均 SDR，读图时先区分星形是本文系统、圆圈是基线。

> **看图路径：** 1. 横轴是对数参数量，纵轴是平均 SDR，注意星形与圆圈的分组；2. 比较同一纵向高度下 SubRoFormer-S 与 SCNet-L 的位置；3. 观察右侧大参数区 SubRoFormer-B 与 BS-RoFormer 的上下关系

[![原论文 Fig. 4：Mean test SDR (dB; higher is better) on MUSDB18-HQ versus total deployed parameters for selected…](https://arxiv.org/html/2611.08130v1/assets/parameter_efficiency.png)](https://arxiv.org/html/2611.08130v1/assets/parameter_efficiency.png)

*论文图 4。原论文 Fig. 4:：“Mean test SDR (dB; higher is better) on MUSDB18-HQ versus total deployed parameters for selected systems trained without extra data.”。*

图中 SubRoFormer-S 星形在约 90M 处接近 9.8 dB，SubRoFormer-B 星形在约 390M 处超过 10.6 dB，右侧 BS-RoFormer 与 Mel-RoFormer 圆圈参数相近但纵轴更低。左下 SCNet 圆圈参数很小但平均约 9 dB，说明小模型仍有竞争力。该图只描述模型大小与分数的权衡，没有测量延迟、内存和训练成本，不能推出全局最优。

### 加 500 首额外数据后能到多高

下表整理加额外数据后的多目标结果，比较问题是数据更多、训练更长时单模型 1 次给四轨能到什么水平。条件是 MUSDB18-HQ 之外加 500 首内部歌曲，训练 1,400,000 步、全局批量 16，与无额外数据时的 1,000,000 步、批量 18 都不同，因此涨幅不能全归于数据。

| 条件 | 指标 | 模型 | 结果 |
| --- | --- | --- | --- |
| 加 500 首 | 平均 SDR | 多目标 SubRoFormer-B | 11.59 dB |
| 加 500 首 | 其他 SDR | 多目标 SubRoFormer-B | 9.94 dB |
| 加 450 首 | 平均 SDR | BS-RoFormer L12 的 3 个模型 | 11.99 dB |

多目标 B 模型平均比无额外数据版本高 1.40 dB，四轨都涨，但 BS-RoFormer L12 仍以 11.99 dB 更高，后者在人声、贝斯、鼓领先，本文模型只在其他轨更高。参数口径上本文用一个 97.23M 网络，约为对方 280.2M 部署总量的 35%，但训练歌曲数 500 对 450、代际都不匹配，只能算分离质量与部署规模的描述性对照。商业系统 ACE Studio 作为上下文参考平均 10.92 dB，本文加数据版本更高，但对方是有损导出、模型和数据未知、协议未完全对齐，不能推广为对商业系统普遍更优。

### 哪些设计真正影响人声分离

下表整理人声消融的关键数字，比较问题是前端、子带数、拼块因子和融合方式在其他条件相近时改变多少。基准是 400,000 步 EMA 的人声单目标小模型 10.88 dB，单种子、单轨观察，描述性而非因果结论，主结果的 1000000 步结果另算。

| 条件 | 指标 | 变体 |
| --- | --- | --- |
| 前端替换 | SDR | 全局 STFT 分带 |
| 前端替换 | SDR | 梅尔分带 |
| 子带数 | SDR | 64 子带 |
| 拼块因子 | SDR | 因子 1 |
| 拼块因子 | SDR | 因子 2 |
| 跳线融合 | SDR | 无跳线 |

表中前端替换掉局部子带分析后掉 1.45 dB 和 2.00 dB，64 子带比 128 子带低 1.31 dB，但 64 子带实验保持了 100 帧/秒细率和 25 帧/秒主干网格不变，仍混入了带宽和采样率变化，不能单独归因于带数。拼块因子 1 和 2 分别涨 0.14 dB 和 0.06 dB，保留了更多时间位置，但论文未给运行时间和多种子重复，不能断言性价比。无跳线融合掉到 10.45 dB，加性、乘性和线性拼接也低于门控融合。局部谱分析优于 CNN 分析和直接用子带样本，前馈激活的比较说的是前馈本身，不是跳线处的门控算子。总体上局部子带谱在被测前端里最高，更小的拼块在人声单项上最高，但都限于单种子人声，还需全轨和重复验证。

### 结论在什么条件下才成立

所有主结论都绑在 MUSDB18-HQ 的 50 首测试曲、中位数加四轨算术平均上，换数据集、换平均方式或换推理窗长都可能变化。无额外数据表的最高平均只针对表内完整四轨结果，梅尔带缺贝斯项所以不参与平均比较；额外数据表的比较双方数据量、训练步数和批量都不同，不能解读为同算力架构胜负。

消融全是人声单种子，400,000 步基准与主结果 1,000,000 步基准不同步，参照还用了不同推理段长，只能做方向性参考。参数分布比较把三者主干统一为 6 层 384 维块后，SubRoFormer 表示加掩码只占 2.76M 而对方占 50M 以上，但这是在替换对方原生前端后的构造性比较，不是原始完整模型的直接对比。固定前端约 28 dB 的重构上限、贝斯弱于 BS-RoFormer、多目标 B 模型不如其单目标版本，都是明确的未胜出项和代价。

### 复现第一步做什么与还有什么缺口

复现先做数据集与评价对齐：准备 MUSDB18-HQ 100 首训练、50 首测试，用 2 秒 48 kHz 裁剪训练，用 2 秒窗 75% 交叠汉明窗叠加推理，用 museval 取每轨中位数再算四轨平均。前端按梅尔到线性 128 带、抽取 60、局部 32 点汉明窗跳 8 点实现，确认空转重构 SDR 在 28 dB 附近，再接分离器训练。单目标与多目标不要混用同一个平均去比，参数量要报部署总量。

论文声明代码和权重在 GitHub 公开，但本次只见到链接文本，未验证链接当前可达，因此不能写成已确认可用。缺口包括：消融缺多种子与全轨结果，缺推理延迟、内存和训练时长的实测，缺更长上下文是否更好的对照，缺参数严格对齐的全轨消融。要把草稿结论变成期刊级主张，还需要版本化评测产物、重复种子和效率测量。

### 什么时候值得尝试 SubRoFormer

当任务是四轨音乐分离、输入是立体声成品混音、评价接受 MUSDB 式 SDR，且希望用一个多目标模型减少部署参数时，SubRoFormer 的思路值得尝试：先用固定窄带滤波把速率降下来，再在细率上保细节、在粗率上看长程，最后用门控残差融合预测复数掩码。小模型多目标在 22M 量级达到 10.29 dB，适合参数受限场景；大模型单目标在无额外数据时平均最高，但要付出 4 模型成本。

若应用对贝斯极敏感，或要求前端近乎无损，或只有单一种子人声结果就想推广到全轨，则不应直接套用本文数字。先复现重构表确认前端损耗，再在自己的曲风和采样率上重跑单目标与多目标两条线，并补齐重复种子和延迟测量，才是对初学者最稳妥的路径。

<details>
<summary>📎 论文与评分元数据</summary>

排名：前50% | 文档类型：方法研究 | [arXiv 原文](https://arxiv.org/abs/2611.08130v1)

</details>

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。

- 评分规则：type-aware-v1

- 评分模型：muse-spark-1.3-contributor

- 评分请求协议：openai_responses

---

[← 返回 2026-11-09 语音/音乐/音频论文速递](/audio-paper-digest-blog/posts/2026-11-09/)
