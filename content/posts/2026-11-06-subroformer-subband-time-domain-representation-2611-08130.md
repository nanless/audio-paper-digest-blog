---
title: "SubRoformer: Subband Time-Domain Representation for Music Source Separation"
date: 2026-11-06
draft: false
tags: [音乐源分离, Transformer, 时频分析]
categories: [论文速递]
description: "论文把混合波形先切成多个窄带低速率复数子带，再在局部谱上估计复数掩码并用拼块轴向 RoFormer 建模长上下文，在 MUSDB18-HQ 上取得分组内最高的报告平均 SDR，代价是固定滤波器组带来约 28 dB 的重构上限和多模型部署开销。"
hiddenInHomeList: true
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_arxiv_id: "2611.08130"
paper_digest_workbench_contract: "researcher-workbench"
paper_digest_workbench_schema_fingerprint: "1f09b594c317cc38e934de27a5b0e8ceb4baa50ef79bd4f8683dd9adea720fe7"
paper_digest_reader_title: "SubRoFormer：先分窄带降速再做掩码的音乐源分离"
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
paper_digest_score: 7.0
paper_digest_rank_bucket: "前50%"
paper_digest_document_type: "方法研究"
paper_digest_one_sentence: "论文把混合波形先切成多个窄带低速率复数子带，再在局部谱上估计复数掩码并用拼块轴向 RoFormer 建模长上下文，在 MUSDB18-HQ 上取得分组内最高的报告平均 SDR，代价是固定滤波器组带来约 28 dB 的重构上限和多模型部署开销。"
paper_digest_authors: [{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Chunyat Wu"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Chuang Ding"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Paris Smaragdis"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Qiuqiang Kong"}]
paper_digest_abstract_sha256: "5f21ba428d9895c3c822d7e1f895c49adb180dc0e2023e0be9c7764e1707d8bf"
paper_digest_sidecars: {"citation.bib":{"sha256":"888fb3423ea44838f039b7561c6ad3a826604a7e1db89a9cd81ef6e2287e4185","url":"/audio-paper-digest-blog/client/papers/2026-11-06/2611-08130/citation.bib"},"citation.json":{"sha256":"b96e9d1696f66c931c2a09d4506d0d79619f1b7af4499d915f2c6b590e576678","url":"/audio-paper-digest-blog/client/papers/2026-11-06/2611-08130/citation.json"},"citation.ris":{"sha256":"237ed9ced607f43c4ac7f77d9c55847f6953854ab16ecb94aebe40d13bddfb00","url":"/audio-paper-digest-blog/client/papers/2026-11-06/2611-08130/citation.ris"},"rethink-context.json":{"contract":"paper-research-context","schemaFingerprint":"5d4e79f7d3ee65b39ccb38281548bf20a1b2041ab7a27625eaf97ab9909a8383","sha256":"61e637d8968cb124465708dd720ea5c3d74af478056b53eb1bf4854d77587eb4","url":"/audio-paper-digest-blog/client/papers/2026-11-06/2611-08130/rethink-context.json"}}
paper_digest_api_reader_contract: "beginner-researcher"
paper_digest_api_reader_schema_fingerprint: "cd8baf5b8bda3a49eec64f6005931af63de4e9a13148cba5f354c661ca6e9df2"
paper_digest_api_reader_article_sha256: "0e8e067849866f590d5f1d8a7ae26f81f62c085057ca7c9b79e0d45f5a74760b"
paper_digest_api_reader_plan_sha256: "7f7e414a12f76aeb41825db8ebb88fb098eb713495d9b89d8e00d91e33016028"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings"
paper_digest_api_reader_source_binding_schema_fingerprint: "d2a2607a6e561909473022eb43f56332ee357af8568566a095c29083ffdec9cc"
paper_digest_api_reader_source_bindings_sha256: "8b1519554d7036bba05c5aac023c0b20ddec202fee444b7b264b6127f625f7bc"
paper_digest_api_reader_source_table_count: 4
paper_digest_api_reader_source_formula_count: 5
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

# 📄 SubRoFormer：先分窄带降速再做掩码的音乐源分离

> 英文题目：*[SubRoformer: Subband Time-Domain Representation for Music Source Separation](https://arxiv.org/abs/2611.08130v1)*

<!--paper-tag-hierarchy-v1:start-->

**研究分类**

- **研究任务**：[音频分离](/audio-paper-digest-blog/papers/?concept=task.audio-separation) → [音乐源分离](/audio-paper-digest-blog/papers/?concept=task.music-separation)
- **研究方法**：[Transformer](/audio-paper-digest-blog/papers/?concept=method.transformer)；[信号处理](/audio-paper-digest-blog/papers/?concept=method.signal-processing) → [时频分析](/audio-paper-digest-blog/papers/?concept=method.time-frequency)

<!--paper-tag-hierarchy-v1:end-->

> 评分：**7.0/10** | 创新 1.5/2 | 技术严谨 1.2/1.5 | 实验充分 1.2/1.5 | 清晰度 0.8/1 | 影响力 1/1.5 | 开源 0/1.5 | 可复现 0.3/0.5 | 工程/实践 1/1.5


## 👥 作者与机构

- Chunyat Wu：机构信息未能在本次解析中与作者逐人可靠绑定
- Chuang Ding：机构信息未能在本次解析中与作者逐人可靠绑定
- Paris Smaragdis：机构信息未能在本次解析中与作者逐人可靠绑定
- Qiuqiang Kong：机构信息未能在本次解析中与作者逐人可靠绑定

## 📌 核心摘要

混音仅一两个通道却叠加人声与多种乐器，需恢复各自波形，难点是声源在时频上重叠且音色多变。论文把48 kHz立体声送入固定三角形滤波器组，经解析变换解调并60倍抽取成低速率复数基带，再经局部短时傅里叶变换得到每秒100帧细粒度谱。细粒度特征一路作跳跃连接保留，另一路拼块压至每秒25帧后由轴向旋转位置编码Transformer做时间与跨带建模，再经门控残差融合预测复数掩码并逆变换合成波形。在MUSDB18-HQ 50首测试集按每轨中值再四轨平均的信号失真比SDR衡量，目标专用SubRoFormer-B为10.63 dB，高于表II已报告完整四轨无额外数据系统中的其他结果，为其中最高。在同一50首测试集与同一SDR口径下，500首内部数据训练的单模型四轨联合版为11.59 dB，高于表V中ACE Studio的10.92 dB，为所比较单模型多轨系统中最高。同一测试集上128带固定前端重建混合的SDR为28.04 dB，低于STFT重建的138.58 dB，其中贝斯保真相对较好。无额外数据时每模型训练100万次更新、6卡RTX 5090全局批量18，额外数据版训练140万次更新、全局批量16，推理均用2秒75%重叠Hamming窗叠加；比较非匹配训练条件，内部500首不公开，更长上下文未验证。

## 🔗 开源与复现资源

本次未形成可展示的已核验资源记录，开放状态尚未核实。

可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 音乐源分离要从混合里恢复什么

音乐源分离的输入是已经混好的立体声波形，目标是还原其中的人声、低音、鼓和其他四轨分轨。论文把混合建模为各源波形相加，估计时既可以为每轨单独训练模型，也可以让一个模型同时输出四轨。

难点在于不同乐器在时间和频率上高度重叠，同一乐器的音高、演奏法和录音条件变化又很大，传统依靠谐波、独立性或重复性的假设常常不成立。神经网络需要从配对的混合与分轨中学习音色和音乐上下文，但这类配对数据远少于成品音乐，因此模型既要抓住长上下文，又要保留音高、瞬态和相位等细粒度声学细节。

评价沿用 MUSDB18-HQ 的 50 首测试曲，每轨分数是 50 首逐轨 SDR 的中位数，四轨平均是 4 个中位数的算术平均。SDR 越高表示估计波形越接近参考分轨。论文的全部结论都绑定在这个数据集、这种聚合方式以及 2 秒训练切片与推理分段条件下。

### 波形、频谱和子带三条路线有何不同

纯波形路线直接从混合采样映射到源采样，相位隐含在波形里，核心困难是在音频采样率上建模长依赖。Wave-U-Net 靠多尺度下采样上采样加跳连保留分辨率，Demucs 靠步进卷积加瓶颈双向长短时记忆在短潜序列上建模时间，Conv-TasNet 和双路径循环网络则分别用学习编解码加时域卷积掩码、块内块间分解来处理长序列。

时频路线先对全带波形做短时傅里叶变换，暴露频率轴，再估计复数掩码并逆变换回波形。Open-Unmix 用全带特征预测幅度，BSRNN 按目标把频点分成不等宽频带并交替做带内时间建模和帧内跨带建模，BS-RoFormer 把循环换成带旋转位置编码的时间带轴向 Transformer，Mel-RoFormer 改用交叠 mel 带，但分析接口仍然是全带波形的短时傅里叶变换。

子带路线在算谱之前先对波形滤波并降采样。通道式子带把子带谱堆到通道维，CWS-PResUNet 对降采样子带再做相位敏感分离。论文把自己定位为后者：先做波形子带分析降速率，再在局部谱上分离，同时用拼块把长上下文建模放在更短序列上。组织上区分信号表示与依赖建模，子带系统仍可在局部谱上分离，不与频谱分组互斥。

### 为什么要在子带上分离而不是全带谱或原始波形

波形输入即使很短也有大量采样点，直接建模序列很长。单一分辨率的频谱则让所有频率共享同一时频分辨率权衡，难以同时照顾低频精细结构和高频瞬态。带分裂方法在全带谱之后分组频点，而通道式子带在算谱之前就滤波降采样。

论文要解决的是如何在保留谱结构和局部时间细节的同时，缩短送入分离器的序列长度。做法是区分两种降速：子带分析降低每带波形采样率并保留显式合成通路，分离器把相邻局部谱帧拼成时间块，在短得多的块序列上做主体 Transformer。细速率指预测掩码的局部谱帧速率，粗速率指做长上下文建模的块速率，另有一条跳连保留细速率特征用于掩码预测。

这种设计 опирается 在经典分析滤波器组上：把选定频带变为复信号并解调到零频附近，带宽受控后即可低速率处理。论文把这些复数基带序列称为子带时域表示，分离器操作的是由它们算出的局部短时傅里叶变换。前端有显式合成通路，但有限长滤波实现会引入重构误差，需要与分离性能分开量化。

### SubRoFormer 的完整链路是怎样的

对一个立体声混合片段，系统先经过固定的子带分析得到 K 个低速率复数基带序列，再对每带做局部短时傅里叶变换得到复数特征。预处理边界块提炼细速率特征并保留跳连表示，拼块降采样后由轴向 RoFormer 在粗速率上建模时间与跨带关系，解块回细速率后与跳连经门控残差融合，再由后处理块预测各源复数掩码。掩码乘到混合谱上，经逆局部变换恢复估计基带，最后经子带合成插值、再调制、取实部并求和得到波形。

下图是理解全文的总览，上方是主链，下方左右分别是分析与合成滤波器组的放大，读图时先走通主路径，再看跳连的汇合点。

> **看图路径：** 1. 沿顶部从混合波形到估计波形走一遍主路径；2. 看谱立方体引出的两条长跳线分别汇入哪里；3. 对比下方左右两个放大框中分析与合成的对称操作

[![原论文 Fig. 1：Overview of SubRoFormer. The fixed front end converts the analytic mixture into demodulated,…](https://arxiv.org/html/2611.08130v1/assets/architecture.png)](https://arxiv.org/html/2611.08130v1/assets/architecture.png)

*论文图 1。原论文 Fig. 1:：“Overview of SubRoFormer. The fixed front end converts the analytic mixture into demodulated, decimated subbands; local complex features are processed by fine-rate boundary blocks…”。*

图中左侧蓝色框把输入波形经解析变换、有限冲激响应滤波器组、复数混频解调和降采样变为多带表示，中间经短时傅里叶变换、预处理块、拼块下采样、堆叠 RoFormer 块、拼块上采样、门控融合和后处理块，再经逐点乘掩码和逆变换回到多带，右侧绿色框经上采样、插值、再调制、跨带求和与取实部得到估计波形。两条由谱立方体引出的长跳线分别送往融合模块和掩码乘法处，说明细粒度信息被直接保留到后端。

### 三角滤波器组如何划分频率

带通滤波器决定分析的频率分辨率。与固定分辨率的短时傅里叶变换不同，子带滤波器组可以通过改变带宽实现不同的分辨率，这对低频分析有用。论文用三角形目标幅度响应，相邻带沿斜坡交叠，避免矩形不交叠带的陡峭边界，首尾带用单边低通和高通使覆盖完整频谱。滤波器系数用 SciPy 的 firwin2 加 Hamming 窗实现，构造后固定，不与分离器联合学习。

\[\sum_{k=1}^{K}A_{k}(f)=1,\qquad 0\leq f\leq F_{s}/2,\]

上式要求 K 个目标响应在非负频率上逐频求和为 1，保证理想划分不丢失能量。下图是示意而非实际有限长响应的测量，蓝色填充为被高亮的中间带，相邻灰色虚线三角在斜坡中点交叠，顶部虚线为单位和。

> **看图路径：** 1. 看蓝色三角底边三处刻度对应的下边缘峰值和上边缘；2. 看灰色虚线相邻三角如何在斜坡中点交叠；3. 看顶部黑色虚线在全频段保持为 1 的含义

[![原论文 Fig. 2：Schematic target magnitude responses of the triangular filter bank, with illustrative frequency…](https://arxiv.org/html/2611.08130v1/assets/triangular_filterbank.png)](https://arxiv.org/html/2611.08130v1/assets/triangular_filterbank.png)

*论文图 2。原论文 Fig. 2:：“Schematic target magnitude responses of the triangular filter bank, with illustrative frequency spacing.”。*

图中横轴为频率，纵轴为目标幅度，蓝色三角底边的三处刻度分别对应下边缘、响应峰值和上边缘。首尾带为单边形状，中间带为双边三角。实际有限冲激响应会有过渡带和旁瓣，因此理想求和为 1 不等于实现后完全重构，这正是后文需要单独报告重构失真的原因。

### 从波形到低速率基带经历哪四步

以 48 kHz 输入、中心 10.4 kHz、约 800 Hz 带宽、抽取因子 60 为例，单带的变换可以对照波形与频谱两列来理解。先对输入做带通滤波，只保留目标窄带，频谱由覆盖正负 24 kHz 的宽带变为正负 10.4 kHz 处的两个窄峰，时域仍然是高频密振荡。

> **看图路径：** 1. 从上到下对照左侧波形由密振荡变为稀疏样点的过程；2. 对照右侧频谱由双边宽带变为单边再搬到零频的过程；3. 看最后一行采样率与频率轴范围的变化

[![原论文 Fig. 3：Per-band analysis and rate conversion: (a) the input x\[n\]; (b) the band-pass filtered signal…](https://arxiv.org/html/2611.08130v1/assets/figure2-subband.png)](https://arxiv.org/html/2611.08130v1/assets/figure2-subband.png)

*论文图 3。原论文 Fig. 3:：“Per-band analysis and rate conversion: (a) the input x[n]; (b) the band-pass filtered signal x_k[n]; (c) the analytic signal x_k^a[n]; (d) the complex baseband signal b_k[n]; and…”。*

图中左侧五行分别为输入、带通后、解析后、基带和抽取后波形，右侧对应幅度谱。解析变换去掉冗余负频，频谱只剩正频单边峰，时域外观变化不大但变为复数。

\[x_{k}^{\mathrm{a}}[n]=x_{k}[n]+j\mathcal{H}\{x_{k}[n]\},\]

上式用 Hilbert 变换构造虚部，使实带信号变为解析信号，为后续单边解调做准备。解调把载频搬到零频，频谱窄峰移到零点附近，时域由高频密振荡变为缓慢起伏的复包络。

\[b_{k}[n]=x_{k}^{\mathrm{a}}[n]e^{-j2\pi f_{k}n/F_{s}},\]

上式按中心频率做复指数乘法，利用傅里叶频移性质实现搬移。最后每 D 个样点保留一个，采样率由 48 kHz 降到 800 Hz，频谱支撑缩到正负 400 Hz 内，时域变为稀疏样点。

\[z_{k}[m]=b_{k}[mD].\]

上式为抽取操作，要求基带总宽度小于采样率除以抽取因子才无混叠，实际因过渡带残留混叠，论文对 800 Hz 目标带宽按 780 Hz 留裕量。多通道多带堆叠后得到降速表示，长度除以 D。

**子带时域表示 × 局部谱特征：** 子带时域表示是对波形做带通滤波、解析变换、解调和抽取后得到的低速率复数基带序列，负责把 48 kHz 全速率降到每带 800 Hz 并保留带内相位；局部谱特征是对每条基带再做短窗傅里叶分析得到的细粒度幅度相位结构，负责让分离器看到瞬态和谐波细节；两者搭配后，分离器不必在原始采样率上建模长序列。

### 合成如何回去以及固定链路本身有多大失真

合成是分析的镜像。对每带低速率序列先在样点间补零到全速率，再经截断 sinc 插值滤波恢复波形形状，接着乘反向复指数搬回原载频形成解析带信号，取实部得到实值带贡献，最后跨 K 带求和。理想情况下可以完美重构，但带通混叠和边缘振铃会带来失真。

论文用 50 首测试曲的立体声混合与四轨参考量化这种固定失真，音频重采样到 48 kHz 后与重采样参考比较。下面的表比较不同变换自身的重构保真度与系数率，数值越大表示重构越真，距离与误差越低越好，系数率按每通道每样本的实数系数计含填充。

| Transform | Rate | Mixture | LSD (dB) ↓ | NME ↓ |
| --- | --- | --- | --- | --- |
| STFT [19] | 4.271 | 138.58 | 0.0000 | 0.0000 |
| SubRoFormer mel–linear | 4.267 | 28.04 | 3.3375 | 0.0264 |
| PQMF [18] | 1.000 | 11.30 | 3.5195 | 0.2770 |
| MDCT [47] | 1.000 | 132.03 | 0.0001 | 0.0000 |

表中短时傅里叶变换接近完美重构，混合重构 SDR 超过 130 dB，而论文 mel-linear 子带库仅约 28 dB，低音重构明显好于其他轨，系数率约 4.267 与短时傅里叶变换的 4.271 接近。听觉 ERB 和 PQMF 速率更低但失真更大。这说明子带前端的速率优势并非免费，其约 28 dB 的重构天花板会传导给分离任务，解释了子带系统难以在极高 SDR 区与近无损变换比极限保真。

**重构 SDR × 分离 SDR：** 重构 SDR 是固定分析合成链路不做任何分离时输出与输入的误差比，只衡量滤波器组本身的失真上限；分离 SDR 是完整系统估计波形与真实分轨的误差比，同时包含前端失真和掩码估计误差；前者解释了子带系统即使掩码完美也受约 28 dB 天花板限制，后者才是任务指标。

为降低直接实现的代价，论文先用快速傅里叶卷积把每卷积由滤波器长乘序列长降到序列长乘对数，再用多相结构把滤波与抽取联合、插值与滤波联合，避免计算抽取丢弃的样点和插值中的显式零填充，使分析与合成的计算与中间内存都降到与降速后长度成正比。

### 分离器如何在两种时间密度上分工

分离器输入是每子带局部谱的复数表示，转为实部虚部拼接并展平通道与频点后，先经类 ConvNeXt-V2 时间混合加均方根归一化和门控，再沿时间与子带各过一层 Transformer，得到细分辨率表示。学习式拼块把相邻时间帧分组，只沿时间拼而不在子带轴压缩，以保留谱细节。主体由堆叠轴向 RoFormer 块组成，每层先做子带轴注意力再做时间轴注意力，均用旋转位置编码，避免展平整个时间子带网格。解块回细速率后与预处理跳连拼接，经门控融合再由对称的后处理块提炼。

**细速率特征 × 粗速率上下文：** 细速率特征是预处理块输出的未拼块谱帧表示，保持每秒 100 帧的时间密度，用于保留音高起振和鼓点边缘；粗速率上下文是把相邻 4 帧拼成一块后送入轴向 RoFormer 得到的表示，降到每秒 25 帧，用于建模乐句延续和跨带共现；两者经门控残差融合汇合，使掩码预测同时看到细节和长依赖。

门控融合把粗表示与细跳连拼接后做两路投影相乘再加回粗表示，兼顾长依赖与细分辨率。输出投影到通道乘频点乘实虚的维度并整形为复数掩码，逐点乘到混合谱上。

\[\hat{\mathbf{S}}_{j}=\mathbf{M}_{j}\odot\mathbf{X},\qquad\hat{\mathbf{s}}_{j}=\operatorname{iSTFT}(\hat{\mathbf{S}}_{j}),\]

上式中掩码为复数，每个系数同时改变幅度和相位，不限于保留混合幅度的一部分，这与有界实值掩码不同。随后逆局部变换恢复子带信号，再经子带合成得到波形。多目标版本共享主干，仅把输出投影扩大到多轨并整形为多个掩码，1 次前向同时得到四轨。

**子带轴注意力 × 时间轴注意力：** 子带轴注意力是在同一时刻对 K 个子带做自注意力，负责学习谐波在不同频带的共现；时间轴注意力是在同一子带内对时间块序列做自注意力，负责学习同一乐器的延续；两者交替堆叠构成轴向建模，避免把时间乘子带的大网格直接展平，从而控制注意力长度。

**复数掩码 × 子带合成：** 复数掩码是对每个通道、子带、谱帧和频点预测的复数值，逐点乘到混合谱上，同时改变幅度和相位；子带合成是对估计谱做逆局部变换、插值、再调制、取实部并跨带求和，把各窄带搬回原载频叠成波形；掩码决定分离质量，合成决定最终波形能否正确重建。

### 模型用什么目标和预算训练

训练用 2 秒立体声切片，在 48 kHz 下每通道 96000 样点。目标是波形 L1 误差加多分辨率复数谱误差之和，谱分支用窗长 4096、2048、1024、512、256 的未归一化短时傅里叶变换，Hann 窗，跳 147 样点，傅里叶点数取窗长与 2048 的最大值，复残差取模而非实虚绝对值相加，5 个分辨率的均值直接求和且与波形项等权。单目标对单轨计损失，多目标对四轨平均，每轨等权。

优化用 AdamW，峰值学习率 3×10-4，1 阶 2 阶动量 0.9 和 0.95，零权重衰减，1000 步线性热身后余弦退火到零，半精度、无梯度累积、梯度范数裁到 1.0，指数滑动平均衰减 0.999，报告用训练结束的滑动平均权重而非验证挑选。全轨推理用 2 秒窗、75% 交叠、Hamming 窗交叠相加、半精度。

小模型主体 6 层 384 维，大模型 12 层 576 维。消融与小模型在一张 RTX 4090 上批量 4 训练，仅 MUSDB18-HQ 的大模型在 6 张 RTX 5090 上全局批量 18 训练，单目标与多目标各 1,000,000 更新。加 500 首内部数据的多目标大模型在 8 张 RTX 4090 上全局批量 16 训练 1,400,000 更新。数据增广沿用 ZFTurbo 配方，每轨独立采样曲目与片段、增益在 0.5 到 1.5 均匀缩放，声道交换、时间反转、极性翻转按概率执行，同轨混音再叠加至多两路。

### 数据、基线和两种输出契约如何对齐

主比较用 MUSDB18-HQ 的 100 首训练曲，每首含人声、低音、鼓、其他四轨立体声分轨。基线覆盖波形 Demucs V2 HQ、时频 BSRNN、TFC-TDF、SCNet、BS-RoFormer、Mel-RoFormer，以及混合 HT Demucs 和 Hybrid Demucs，基线分数取自原论文而非本地重跑。

关键是输出契约不同：多目标单模型 1 次输出四轨，单目标需多个专精模型分别估计。论文同时给出两种 SubRoFormer 版本以便分组比较。参数量按部署计：单目标 4 模型总和，多目标单模型。BS-RoFormer L12 用 3 个 93.4M 专精模型覆盖四轨，其他轨由混合残差得到，共 280.2M，而多目标 SubRoFormer-B 用一个 97.23M 网络直接预测四轨，约为其三分之一。这只是输出契约与模型个数的效率对照，不是匹配数据与检查点代际的控制实验。

前端固定为 mel 到线性三角库，低频 mel 间隔、高频 390 Hz 线性间隔，共 128 交叠子带，抽取 60 到 800 Hz 复基带，局部用双边 32 点 Hann 窗、跳 8 子带样点得到每秒 100 帧细网格，拼块因子 4 降到每秒 25 帧。64 带消融改上部为 790 Hz 间隔、抽取 30 到 1600 Hz、局部跳 16 样点，仍对齐 100 与 25 帧每秒以固定时间速率，只改变子带数、带宽与采样率。

### 不加额外数据时分离分数说明了什么

本节回答无额外数据下各契约分组内的相对位置，指标均为 MUSDB18-HQ 测试集逐轨中位数及四轨平均，数值越大越好，基线为原论文报告值，训练与推理条件并不完全匹配。先看参数与分数的整体分布，横轴为部署总参数对数，纵轴为平均 SDR，两颗红色星形为本方法。

> **看图路径：** 1. 先看横轴对数参数量与纵轴平均 SDR 的方向；2. 找两颗红色星形与其他灰色圆点的上下左右关系；3. 看 SCNet 系列在小参数区的相对位置

[![原论文 Fig. 4：Mean test SDR (dB; higher is better) on MUSDB18-HQ versus total deployed parameters for selected…](https://arxiv.org/html/2611.08130v1/assets/parameter_efficiency.png)](https://arxiv.org/html/2611.08130v1/assets/parameter_efficiency.png)

*论文图 4。原论文 Fig. 4:：“Mean test SDR (dB; higher is better) on MUSDB18-HQ versus total deployed parameters for selected systems trained without extra data.”。*

图中可见 SubRoFormer-B 星形在最右上，SubRoFormer-S 星形居中上，SCNet 系列在小参数区较高，波形与早期混合基线偏下。读图只能得到相对位置，不能推出全局最优或延迟内存优势。下面的表给出分组内的具体逐轨分数，比较时同为单目标 4 模型或同为多目标单模型，参数为部署总量。

| Model | Voc. ↑ | Bass ↑ | Dr. ↑ | Oth. ↑ | Avg. ↑ |
| --- | --- | --- | --- | --- | --- |
| BS-RoFormer [15, 35] | 11.02 | 11.58 | 9.66 | 7.80 | 10.02 |
| SubRoFormer-B (Ours) | 12.63 | 10.20 | 10.40 | 9.27 | 10.63 |
| SubRoFormer-S (Ours) | 11.72 | 9.59 | 11.05 | 8.78 | 10.29 |
| SubRoFormer-B (Ours) | 12.10 | 8.81 | 11.08 | 8.78 | 10.19 |

表中单目标 SubRoFormer-B 平均 10.63 dB，为完整四轨结果中最高，比 BS-RoFormer 高 0.61 dB，人声、鼓、其他更高但低音低 1.38 dB；单目标小模型 9.82 dB，增大到大模型平均升 0.81 dB 但鼓反而低 0.20 dB，说明均值提升不等于每轨一致提升。多目标小模型 10.29 dB、大模型 10.19 dB，为多目标组前二，小模型比 SCNet-large 高 0.60 dB 且参数 22.59M 对 41.2M；但大模型多目标比其单目标低 0.44 dB，联合预测的收益随尺寸与目标而异，不能单凭分数断言过拟合。

**单目标模型 × 多目标联合模型：** 单目标模型是为人声、低音、鼓、其他各训练一个独立网络，分离四轨需要四次前向，优点是每模型专精一轨；多目标联合模型是共享主干加四个输出头，一次前向同时输出四轨，优点是部署参数少；论文同时报告两种契约，比较时必须按同契约分组，不能把四模型总量与单模型直接比优劣。

没有胜出的地方必须指出：低音轨上 BS-RoFormer 保持明显优势，多目标大模型在低音上低于小模型，鼓轨上尺寸增大的收益也不稳定。这些反例说明当前证据只支持报告性能与部署参数的描述性对照，不支持架构效应的因果分离，且结论限于 2 秒上下文与百万更新预算。

### 加 500 首额外数据后结果有何变化与限制

本节回答加内部 500 首后多目标大模型的位置，比较对象是原论文报告的加额外数据系统，训练曲数、训练步数与批量均未匹配。下面的表比较各自额外数据下单模型多轨的平均 SDR，数值越大越好，部署参数同时列出以便权衡。

| 模型 | 平均 SDR | 人声 | 低音 | 鼓 | 其他 |
| --- | --- | --- | --- | --- | --- |
| BS-RoFormer L12 | 11.99 dB | - | - | - | - |

表中多目标 SubRoFormer-B 用 500 首额外数据达到平均 11.59 dB，人声 12.69 dB、低音 11.50 dB、鼓 12.23 dB、其他 9.94 dB，比其无额外数据多目标版高 1.40 dB 且每轨都高，但该运行同时用了更长训练步数与不同全局批量，增益不能单独归因于数据。BS-RoFormer L12 以 450 首额外数据保持 11.99 dB 更高均值，本方法仅在其他轨更高，且对方用 3 模型共 280.2M、其他轨取残差，本方法用单模型 97.23M 约其 35%，数据量与检查点代际均未对齐。商业 ACE Studio 以默认切分的有损导出得到 10.92 dB，仅能作单系统输出背景，不能推广为对商业系统普遍更优。

### 哪些设计在人声消融中更关键

消融用人声单轨、单种子、400,000 更新滑动平均检查点，与百万更新主结果分离，6 层基线用百万更新与不同推理段长仅作背景。在固定每秒 100 帧局部特征与每秒 25 帧主干网格下，下表比较前端表示、子带数和拼块因子对人声 SDR 的影响，数值越大越好。

| 配置 | 人声 SDR | 与参考差值 |
| --- | --- | --- |
| 拼块因子 2 | 10.94 dB | +0.06 dB |

表中参考为 10.88 dB，全局谱带分裂与 mel 带分裂分别 9.43 dB 和 8.88 dB，但替换仅用线性投影接入主干而非复现原模型完整前端。64 子带 9.57 dB，时间速率已对齐，仍混杂带宽与采样率变化，不能分离为子带数因果效应。拼块因子 1 和 2 得到 11.02 dB 和 10.94 dB，保留更多时间位置，提示质量与序列长度权衡，但无运行时间与多种子证据。跳连中门控参考高于无跳连与加性乘性变体，局部分析中卷积和直接子带样点低于局部短时傅里叶变换，总体均为单种子人声观察，需全轨与重复种子才能转为主张。

### 参数主要花在哪里以及还有哪些未验证

参数效率取决于按单网络还是四轨部署总量计。单目标小模型每网 22.52M、四网 90.08M 得到 9.82 dB，对 82.8M 每网共 331.2M 得到 10.02 dB 的 BS-RoFormer 配置；多目标小模型仅 22.59M 覆盖四轨得到 10.29 dB，大模型对应 388.68M 与 97.23M 得到 10.63 dB 与 10.19 dB，联合预测省部署参数但不总升均值。

论文另做固定同等分离器容量时的参数分布比较，问题是表示与掩码头占多少、分离器占多少。三变体共享 6 个同宽 384 维轴向块加终端归一化，分离器均为 21.32M，SubRoFormer 表示加掩码仅 2.76M 占 11.45%，而 BS-RoFormer 为 50.87M 占 70.47%，Mel-RoFormer 为 62.87M 占 74.68%，固定分带滤波无学习参数，总量差异来自表示与掩码模块。但该对照变体不同于质量结果模型，不能直接解释主结果差距。

其他限制包括单种子消融无统计保证、基线分数来自原论文而非同预算重跑、额外数据实验混杂训练步数批量、商业比较用有损导出且协议未全匹配、未报告延迟内存与误判率。固定前端的重构误差已单独量化，分离增益不能脱离该上限与 2 秒上下文来谈。

### 复现第一步做什么以及需要什么条件

复现应从 MUSDB18-HQ 的 100 首训练与 50 首测试划分做起，音频重采样到 48 kHz，立体声处理，固定 mel 到线性 128 带三角库，抽取 60，局部 32 点 Hann 窗跳 8 样点，拼块因子 4，主干按 S 6 层 384 维或 B 12 层 576 维搭建，训练用 2 秒切片、波形加多分辨率谱损失、AdamW 与余弦退火、滑动平均权重评估，全轨用 2 秒 75% 交叠 Hamming 交叠相加。单目标需训 4 个模型，多目标训一模型，更新数与批量按论文预算设置，增广保持 ZFTurbo 配方不变以便对照。

来源方面，论文正文给出代码链接，但本次未发现完成 HTTPS 验证的作者资源绑定，因此不能写作者资源当前可用或已公开，只能按论文所述链接去核对版本与检查点。基线应优先用原论文报告值分组对照，若要做控制架构比较，需自备同数据同预算的本地重跑，而非直接引用不同代际的数字。评估必须用 museval 的逐轨 SDR 中位数与四轨平均，延迟对齐只用于重构表，分离表按原文聚合，不要混用均值与中位数。

### 什么时候值得尝试以及还缺哪项验证

当任务是 MUSDB18-HQ 四轨分离、部署参数受限且希望单模型 1 次输出四轨时，多目标 SubRoFormer-S 值得尝试，它在 22.59M 下报告 10.29 dB；当追求无额外数据下最高报告均值且能负担 4 模型部署时，单目标 SubRoFormer-B 报告 10.63 dB，但要接受其低音低于 BS-RoFormer 与固定前端约 28 dB 重构上限。加内部数据的 11.59 dB 仅在同类单模型多轨对照中有意义，不能当作架构必然更优。

容易误解的是把平均 SDR 领先当作每轨全面领先，把参数少当作延迟内存全面更优，把消融差值当作因果效应，把额外数据增益当作纯数据效应。原文已明确这些比较只总结报告系统而非隔离架构效应，单种子人声观察只具方向性。

要转为稳健主张，还需版本化评估产物、多种子重复、效率实测、参数匹配的全轨消融，以及更长上下文的对照。研究生复述时应能讲清样本如何经滤波、解析、解调、抽取、局部谱、拼块 RoFormer、融合、掩码、合成回到波形，并说明每个结论依赖的数据、契约与预算条件。

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

[← 返回 2026-11-06 语音/音乐/音频论文速递](/audio-paper-digest-blog/posts/2026-11-06/)
