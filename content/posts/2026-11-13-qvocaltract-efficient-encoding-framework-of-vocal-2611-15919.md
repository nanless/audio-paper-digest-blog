---
title: "qVocalTract: Efficient encoding framework of vocal-tract spectra on a quantum computer"
date: 2026-11-13
draft: false
tags: [音频特征提取, 信号处理, 语音]
categories: [论文速递]
description: "论文把 DVTD 声道传递函数编码成量子态，在无辅助位阶梯层与顺序 MPS 制备之间用 256-bin 谱包络误差和共振恢复在 ibm_kawasaki 上比较，发现三层阶梯在该硬件上兼顾近似与噪声，但代价是需要已知完整目标向量、较多采样和重复运行。"
hiddenInHomeList: true
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_arxiv_id: "2611.15919"
paper_digest_workbench_contract: "researcher-workbench"
paper_digest_workbench_schema_fingerprint: "1f09b594c317cc38e934de27a5b0e8ceb4baa50ef79bd4f8683dd9adea720fe7"
paper_digest_reader_title: "qVocalTract：噪声量子硬件上的声道谱编码与共振恢复"
paper_digest_original_title: "qVocalTract: Efficient encoding framework of vocal-tract spectra on a quantum computer"
paper_digest_arxiv_version: 1
paper_digest_arxiv_versioned_id: "2611.15919v1"
paper_digest_arxiv_abs_url: "https://arxiv.org/abs/2611.15919v1"
paper_digest_arxiv_pdf_url: "https://arxiv.org/pdf/2611.15919v1.pdf"
paper_digest_primary_task: "音频特征提取"
paper_digest_tags_contract: "paper-tag-flat-tags"
paper_digest_tags_schema_fingerprint: "27e36280a4b8d3df62ebe54d3ab037920f4d69feb2b554163f01bbae2caf4338"
paper_digest_tags_selection_contract: "paper-tag-selection"
paper_digest_tags_registry_version: "paper-tag-catalog"
paper_digest_tags_registry_sha256: "9673bc0122e1905a5dcfd8b223675400cc2fa4c36095bc0e5f817edf99a0ec5c"
paper_digest_tags_concepts: [{"facet":"task","id":"task.audio-feature-extraction","label":"音频特征提取"},{"facet":"method","id":"method.signal-processing","label":"信号处理"},{"facet":"signal","id":"signal.speech","label":"语音"}]
paper_digest_primary_method: "信号处理"
paper_digest_score: 6.5
paper_digest_rank_bucket: "前50%"
paper_digest_document_type: "方法研究"
paper_digest_one_sentence: "论文把 DVTD 声道传递函数编码成量子态，在无辅助位阶梯层与顺序 MPS 制备之间用 256-bin 谱包络误差和共振恢复在 ibm_kawasaki 上比较，发现三层阶梯在该硬件上兼顾近似与噪声，但代价是需要已知完整目标向量、较多采样和重复运行。"
paper_digest_authors: [{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Sheng Li"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Jiyi Li"}]
paper_digest_abstract_sha256: "eb6b2e4ad1ee34ff6d68d3b752328201f40b39b43b44bedaeddb551e8eba8396"
paper_digest_sidecars: {"citation.bib":{"sha256":"cbdd6a4fc013803eb773e0a81eb70820485b3337f0c620b8ae6ba4a64a9ad79a","url":"/audio-paper-digest-blog/client/papers/2026-11-13/2611-15919/citation.bib"},"citation.json":{"sha256":"3baf0624f5fa82857ef8f2537d6f31807af19f5354b1f976e3ff06f528f60d8a","url":"/audio-paper-digest-blog/client/papers/2026-11-13/2611-15919/citation.json"},"citation.ris":{"sha256":"4130968f8d4a795b98dbdf63ee5692d20c14d86ddf04427a2cb83f21ff122e05","url":"/audio-paper-digest-blog/client/papers/2026-11-13/2611-15919/citation.ris"},"rethink-context.json":{"contract":"paper-research-context","schemaFingerprint":"5d4e79f7d3ee65b39ccb38281548bf20a1b2041ab7a27625eaf97ab9909a8383","sha256":"ef8e565c040a585867d20109345f91af14e22b84609e76ba83f18bfcd9092f12","url":"/audio-paper-digest-blog/client/papers/2026-11-13/2611-15919/rethink-context.json"}}
paper_digest_api_reader_contract: "beginner-researcher"
paper_digest_api_reader_schema_fingerprint: "cd8baf5b8bda3a49eec64f6005931af63de4e9a13148cba5f354c661ca6e9df2"
paper_digest_api_reader_article_sha256: "226bae0e346cf4a9c6f17af356b7d724bbd5b2f95430d83d9558f77a97b3703f"
paper_digest_api_reader_plan_sha256: "50008465573a1faabffabdc246e72e6dacd05b54452054bbbc839e196c9a43bd"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings"
paper_digest_api_reader_source_binding_schema_fingerprint: "d2a2607a6e561909473022eb43f56332ee357af8568566a095c29083ffdec9cc"
paper_digest_api_reader_source_bindings_sha256: "cee10f475988832f7f7210ef56b643d62c0c31493b8a6ef7c141cba11c65dfa7"
paper_digest_api_reader_source_table_count: 3
paper_digest_api_reader_source_formula_count: 2
paper_digest_api_reader_structured_artifacts_sha256: "dc5589dadf80adf1548112bb704e9a9f7b2cd6c8ea374ac07489bdf1e397dc92"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity"
paper_digest_api_reader_author_identity_schema_fingerprint: "1e3fd3a9a56c9a5bf52df8df5022690b9a3fa92e83e934f295af87c0e258ed2f"
paper_digest_api_reader_author_identity_sha256: "8f2b883e6b83efda438af73990357beeb69e87d8fd0970f29b21310564fbd07b"
paper_digest_api_reader_author_count: 2
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity"
paper_digest_api_reader_resource_identity_schema_fingerprint: "33b0be17118be61f39b85ce690c8da17e91f2864bb65e85284f60c40067328e0"
paper_digest_api_reader_resource_identity_sha256: "f703070dc99be088828e5c0ce87f5af39a922e0cfcdd4072b56e68fcddda3372"
paper_digest_api_reader_resource_count: 0
paper_digest_api_reader_figure_persistence: "ephemeral-no-persisted-figure-assets-v1"
paper_digest_api_reader_decision_projection: "api-reader-decision-projection"
paper_digest_api_reader_decision_projection_schema_fingerprint: "e56feb5ab75c8710904916b898f73dab9bb18bdf65bb60b7ed2edf7f99cea860"
---

# 📄 qVocalTract：噪声量子硬件上的声道谱编码与共振恢复

> 英文题目：*[qVocalTract: Efficient encoding framework of vocal-tract spectra on a quantum computer](https://arxiv.org/abs/2611.15919v1)*

<!--paper-tag-hierarchy-v1:start-->

**研究分类**

- **研究任务**：[音频特征提取](/audio-paper-digest-blog/papers/?concept=task.audio-feature-extraction)
- **研究方法**：[信号处理](/audio-paper-digest-blog/papers/?concept=method.signal-processing)
- **信号**：[语音](/audio-paper-digest-blog/papers/?concept=signal.speech)

<!--paper-tag-hierarchy-v1:end-->

> 评分：**6.5/10** | 创新 1.2/2 | 技术严谨 1.1/1.5 | 实验充分 1.2/1.5 | 清晰度 0.9/1 | 影响力 0.8/1.5 | 开源 0/1.5 | 可复现 0.3/0.5 | 工程/实践 1/1.5


## 👥 作者与机构

- Sheng Li：机构信息未能在本次解析中与作者逐人可靠绑定
- Jiyi Li：机构信息未能在本次解析中与作者逐人可靠绑定

## 📌 核心摘要

qVocalTract 要解决的问题是把声道传递函数这类结构化声学频谱装入量子态，并在超导硬件噪声下尽量保留谱包络和共振结构。输入是 Dresden Vocal Tract Dataset（DVTD）中按 10 kHz 上限采样、经峰值归一化的对数幅度序列，输出是可重建的包络及检测到的共振频率；困难在于通用量子态制备的门数随频点数增长，而更大的矩阵乘积态（MPS）键维虽降低近似误差，却增加双量子比特门和路由代价。方法先用截断到键维 \(\chi\) 的右规范张量列车奇异值分解（SVD）得到归一化近似态，并以顺序制备作对照；qVocalTract 改用无辅助比特阶梯层，由目标态构造第一层，再以残差态构造后续层，并用局部极分解更新优化门。电路执行后从计算基测量估计各频点概率，按已知符号恢复幅度，再合并相邻频点得到 256 个包络箱，并从中检测前三个共振峰。参考元音在 ibm_kawasaki 上的三层阶梯包络均方根误差（RMSE）为 3.52 dB，低于顺序 \(\chi=2\) 的 6.63 dB，也低于四层阶梯的 4.88 dB；在 44 个 DVTD 配置上，三层平均硬件 RMSE 为 4.74 dB，对照顺序 \(\chi=2\)、\(\chi=4\) 分别为 7.15、9.15 dB。上述门数、近似精度与累积噪声的取舍结论以 ibm_kawasaki 和 44 个 DVTD 配置为界，三层在此较平衡；峰值提取对漏检或虚假共振敏感，论文未报告重复硬件运行的变异性，且读出仅恢复幅度而不验证相对符号和相位。顺序 \(\chi=8\) 只在参考元音上评测、未进入 44 案例扫描，更广泛声道模型仍待验证，模态探针也只检验相干处理而非语音合成；论文未训练神经网络，原文未给出量子电路执行的时延、吞吐或部署成本。

## 🔗 开源与复现资源

本次未形成可展示的已核验资源记录，开放状态尚未核实。

可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 从声道传递函数到量子幅度编码

声道传递函数把发音器官的几何变化与声学共振联系起来：对某个声道配置，计算得到的 G(f) 给出频率响应，谱峰对应共振。量子编码要做的不是直接合成语音，而是把这条谱线变成量子态振幅，使后续测量能恢复谱包络和共振位置。振幅编码把 N=2^n 个数值放进 n 个量子比特，但通用态制备的门数随 N 增长，放在有噪声、连接受限的处理器上，加载电路本身就会成为主要成本。本文因此把声道传递函数当作结构化声学数据，要求输入采样后保留峰值归一化后的对数幅度结构，输出则由计算基测量得到概率，再还原为谱包络与共振。

### 顺序 MPS 制备与无辅助位阶梯层的分工

Li 等此前研究过 Dresden Vocal Tract Dataset（DVTD）传递函数的矩阵乘积态压缩。矩阵乘积态用局部张量表示高维振幅，张量之间由键索引连接；顺序制备把这个键索引沿辅助位寄存器逐位传递。键维数越大，近似容量越强，但每个位点的酉矩阵更大，辅助位在稀疏连接处理器上的路由成本也更高。qVocalTract 沿用无辅助位的阶梯分解和局部酉优化，把它们用于声学谱，并把编译后的二量子比特门数与谱包络误差、共振恢复放在同一个硬件比较里。本文的贡献不是提出通用量子态制备算法，而是在 ibm_kawasaki 上比较这些制备路线在声道谱上的实际表现。

### 要回答的是近似精度与硬件噪声怎样权衡

需要回答的具体问题有 3 个：在相同处理器和读出流程下，阶梯层是否比顺序 MPS 降低谱包络误差并改善共振恢复；编译后的二量子比特门数怎样与硬件上的 RMSE 相关；理想近似、静态噪声模型和真实硬件是否会选择不同的最佳层数。这里的误差至少有两类来源：截断键维数或有限层数带来的近似误差，以及门数增加后累积的电路噪声。评价指标包括 256-bin 包络的 RMSE（dB）、检测到的前 3 个共振、3 个共振都在 100 Hz 内的比例，以及可用目标–恢复配对的共振 MAE。论文还单独做一个模态探针实验，但它使用不同的平方根幅度编码，只能检验制备态的相干处理，不能直接当成语音合成结果。

### qVocalTract 的整体流程

整体流程从 DVTD 的计算传递函数开始：采样成谱线，做峰值归一化的对数幅度变换，再把非正幅度向量归一化为量子态。制备端有两条路线，一条是带辅助位的顺序 MPS，另一条是无辅助位的阶梯层；二者都输出同一计算基顺序下的振幅。硬件测量得到计算基概率后，读出端把相邻 bin 合并成 256-bin 包络，再用峰值规则提取共振。另一条支路是模态探针：它改变编码和后续演化，用来观察制备态能否参与相干处理，而不是替代主实验的谱恢复评价。

**振幅编码 × 对数幅度谱：** 振幅编码把 N 个数值放进 n 个量子比特的 N=2^n 个计算基概率幅中；对数幅度谱把声道传递函数的峰值归一化对数幅度作为这些数值。前者决定数据如何进入量子态，后者决定声学结构以什么尺度被保留。两者组合后，输入不再是一段波形，而是可由计算基测量恢复的谱包络，但读出主要给出幅度信息。

图 1 先给出从 DVTD 数据到量子读出的完整链路，再把两条制备电路并排画出；读图时应把 (a) 的流程箭头与 (b)、(c) 的线路结构对应起来。

> **看图路径：** 1. 沿 DVTD 数据→对数谱→制备→量子硬件→恢复看主路径；2. 比较 (b) 中共享辅助位的顺序 MPS（A0–A4 与标为 1/2 的辅助位通路）和 (c) 中无辅助位的阶梯层（G0–G4）；3. 注意 (c) 的时间箭头和 U2 先作用、U1 后作用的标注

[![原论文 Fig. 1：(a) Workflow from DVTD transfer functions to quantum readout.](https://arxiv.org/html/2611.15919v1/Figure1.svg)](https://arxiv.org/html/2611.15919v1/Figure1.svg)

*论文图 1。原论文 Fig. 1:：“(a) Workflow from DVTD transfer functions to quantum readout.”。*

图 1(a) 从左到右显示 DVTD 数据、计算得到的对数谱、MPS 或阶梯层制备、量子硬件和恢复谱；曲线只示意参考元音目标与原始三层重建。(b) 中 5 个数据量子比特 q0–q4 共享底部两个辅助位 a0、a1，数据线旁的 A0–A4 标出各位点，辅助位通路中的方框标为 1/2；(c) 没有单独辅助位，左侧残差层标为 U2、右侧目标层标为 U1，阶梯上的酉块标为 G0–G4，时间箭头说明 U2 先作用、U1 后作用。这个并排关系帮助理解后文的成本差异：辅助位方案把键放在额外寄存器，阶梯层把键留在数据量子比特之间。

### 从传递函数到非正幅度向量

对声道传递函数 G(f)，论文在 f_m=m f_max/N 处采样，取 N=2^14、f_max=10 kHz，网格包含零且不包含 f_max。每个采样点先算 20 log10 |G(f_m)|，再减去所有采样点中的最大值，得到峰值归一化的对数幅度 x_m；因此所有目标幅度非正。随后把 x 按 L2 范数归一化，写成计算基 |m⟩ 上的振幅，量子比特 i 携带 m 的第 i 位。这个处理保留了谱峰相对高度和频率位置，但丢弃了绝对声压级。

**矩阵乘积态 × 键维数：** 矩阵乘积态用逐位局部张量和键索引表示高维振幅向量；键维数限制相邻张量之间可传递的信息量。键维数越大，近似容量越强，但每个位点的酉矩阵和辅助位路由成本也越大。两者配合使 2^14 维谱向量可以被截断成可制备的电路，同时把误差来源明确落在截断近似上。

矩阵乘积态把 2^14 维向量拆成逐位局部张量，键维数截断决定近似容量；顺序制备与阶梯制备都在这个表示上工作，只是键索引放在哪里不同。键维数从 2 增到 4、8 会降低无噪声近似误差，但也会增大每个位点酉矩阵和编译成本。

### 顺序制备与阶梯制备的电路分工

顺序制备从 MPS 的每个位点等距出发，把它扩展为作用在一个数据量子比特和辅助位上的酉矩阵；辅助位携带相邻张量之间的键，并在电路结束时回到零。图 1(b) 的 5 个数据量子比特共享两个辅助位，就是 χ=4 时的结构。键维数越大，位点酉矩阵越大，辅助位在远距离数据量子比特之间移动时还需要路由。

**阶梯层 × 局部极分解更新：** 阶梯层把相邻数据量子比特之间的键直接留在数据寄存器里，用局部两比特门逐层构造目标态；局部极分解更新则在固定其他门时，用目标重叠的 SVD 求单个门的最优酉矩阵。阶梯层提供无辅助位的电路骨架，更新负责在 L≥2 时压缩剩余误差。组合后层数增加可以降低近似误差，但每层也会增加硬件噪声暴露。

键二 MPS 的阶梯制备只需要 n−1 个最近邻两量子比特门和一个单量子比特门；下一个数据量子比特直接携带键，因此不需要单独辅助位。第一层 U1 从目标态构造，第二层从残差态 U1†|ψ⟩ 构造，重复得到 U1U2⋯UL|0⟩；最后构造的层最先作用。对 L≥2，局部极分解更新在不改变层结构的情况下调节每个门。这样增加层数时，新增的是局部两比特门，而不是更大的位点酉矩阵和跨距离辅助位路由。

### 计算基读出、块合并与共振判定

硬件只能直接给出计算基概率。对制备态 |ϕ⟩，测量估计 P(m)=|ϕ_m|^2；由于目标 x_m 的符号全部非正且整体尺度已知，可以用 -||x||_2 sqrt(P(m)) 估计幅度绝对值。这个读出不能验证近似态中的相对符号或相位，只给出幅度大小。全分辨率下每个结果分到的样本很少：50,000 shots 对完整结果大约只有 3 个样本，因此主实验把 B=64 个相邻 bin 的概率相加，得到 256-bin 包络；每个粗 bin 的间距是 39.06 Hz。

**读出校正 × 块合并：** 块合并把相邻多个计算基结果的概率相加，降低全分辨率下每个结果样本过少带来的估计噪声；读出校正用全零和全一校准电路修正粗粒度边缘概率，并假设读出误差独立。前者改变统计粒度，后者改变概率读数。二者结合后可以得到 256-bin 包络，但校正依赖独立误差假设，原文因此同时报告原始计数结果。

下面的块合并读出公式计算第 b 个粗 bin 的幅度估计，b 覆盖相邻 m 的集合，求和对象是这些 bin 的测量概率。

\[\hat{x}_{B}[b]=-\|x\|_{2}\sqrt{\frac{1}{B}\sum_{m\in b}\hat{P}(m)}.\]

这个式子把概率先在同一粗 bin 内平均，再开方并乘回目标范数，因此降低的是全分辨率结果的采样噪声，而不是近似态本身的截断误差。包络 RMSE 在 0–10 kHz 上计算，目标按同一分辨率做块 RMS 归一化。共振定义为 150–4000 Hz 内前 3 个峰，要求至少 3 dB 突出度和约 200 Hz 间隔；参考元音不平滑，数据集扫描使用 3 个 bin 的滑动平均。缺失峰按失败计入三共振 100 Hz 判据，formant MAE 只用可用的目标–恢复配对并报告成功比例。论文还复现了全零/全一校准的读出校正，它修正粗粒度边缘概率并假设读出误差独立，因此原始计数结果也被并列报告。

### 模态探针怎样检验相干处理

模态探针使用另一套编码：η_m 正比于 sqrt(|G(f_m)|)，并满足 ∑ η_m^2=1，因此是平方根幅度编码，而不是式 (1) 的对数幅度态。设制备出的实振幅为 ϕ_m，且 S0=∑_m ϕ_m≠0；探针信号定义为 y(t)=Re∑_m ϕ_m e^{-i2π f_m t}。由于频率等间隔，对角演化可以用单量子比特相位门实现；为了做干涉读出，再加一个处于 |+⟩ 的时钟量子比特，用它控制演化，并在时钟和数据寄存器上做 Hadamard。

**模态探针 × 平方根幅度编码：** 平方根幅度编码让实振幅正比于 |G(f_m)| 的平方根；模态探针把这些振幅按线性频率间隔做相干演化，并从时钟量子比特与数据寄存器的联合概率读出 y(t)。编码决定初态，探针决定后续相位演化和干涉读出。二者组合用于检验制备态能否参与相干处理，而不是用于语音合成。

下面的联合概率读出式说明怎样从时钟位 c 和数据位 m=0 的测量概率差恢复 y(t)；N 是频率采样点数，S0 是制备实振幅之和。

\[y(t)=\frac{N}{S_{0}}\{P(c=0,m=0)-P(c=1,m=0)\}.\]

受控相位门在制备之后增加纠缠操作。单层阶梯的硬件实验每个电路最多使用 84 个两量子比特门，取 48 个时间样本、采样率 48 kHz，每个样本 2000 shots。硬件探针与理想制备态探针的相关系数为 0.974，噪声模型和理想采样器分别为 0.989 和 0.998。这个实验检验的是制备态的相干处理，不是语音合成，也不能用这个相关系数替代谱包络 RMSE 或共振恢复指标。

### 没有神经训练：SVD、逐层构造与局部门更新

本文没有训练神经网络，也没有用梯度更新可学习参数。实际构造分两步：先对目标振幅向量做右正则张量列 SVD，并在键维数 χ 处截断，得到归一化近似态；14 个位点时，χ=2、4、8 对应的存储张量数分别为 104、360、1192。顺序制备把每个位点的等距扩展为作用在一个数据量子比特和 ⌈log2 χ⌉ 个辅助位上的酉矩阵；阶梯制备则先从目标构造第一层，再从残差态构造下一层。

对 L≥2 的阶梯层，论文用局部极分解更新每个门：把一个门与目标的重叠写成 Tr(gE)，对 E=WΣV† 做 SVD 后取 g=VW†；优化最多 40 次前向扫描，fidelity 增益低于 10^-7 时停止，fidelity 定义为 |⟨ψ|ϕ⟩|^2。单层基线使用未优化的键 2 阶梯。所有构造都使用完整目标向量，门只连接相邻逻辑量子比特，实际路由由物理布局和 transpiler 决定。

### 数据、设备与比较预算

数据来自 DVTD 的 44 个声道配置，覆盖 2 位说话人的元音和辅音；计算传递函数定义目标，测量传递函数提供额外的声学参考。插值时分别处理幅度和展开相位，两个包络都用计算谱的峰值作为 dB 偏移。误差在完整频带上按块 RMS 计算；此前的独立研究把包络各自归一化并只评 80–5000 Hz，因此本文的数字不能与那组结果直接相减比较。

硬件实验在 ibm_kawasaki 上进行，使用 Qiskit、transpiler 优化级别 3、固定种子和 XY4 动态去耦。比较对象包括理想采样器和静态 FakeTorino 噪声模型，后者代表另一台设备的校准，不是当前硬件的实时噪声。参考案例是说话人 1 的 s1-01、紧 /a/，目标共振为 527、1113、2285 Hz。单案例的 shots 为：理想采样器 100,000，噪声模型 20,000，硬件 50,000；44 例扫描每个案例 20,000 shots。因此单案例噪声比较中的采样预算并不相同，解释模型与硬件差异时要把这一点和静态校准一起考虑。

### 参考元音：三层阶梯在硬件上误差最低

表 1 把参考元音 s1-01 的 χ=2、χ=8 两个顺序制备端点与三层阶梯放在同一硬件读数上。比较问题是：编译门数增加时，硬件 256-bin 包络 RMSE 是否随无噪声近似改善而下降；这里 RMSE 越小越好，门数只描述编译后的成本。原表题注给出 256-bin envelope RMSE (dB)，其中“2q” 表示编译后的 CZ 数；Device 列的数据格按原表保留裸数字，设备值使用记录的读出校正。

| Preparation | 2q | Device |
| --- | --- | --- |
| Ancilla χ=2 | 39 | 6.63 |
| Ancilla χ=8 | 1839 | 10.30 |
| qVocalTract L=3 | 98 | 3.52 |

3 个读数按同一顺序比较：顺序制备的硬件 RMSE 随编译门数从 39 增至 1839 而从 6.63 升至 10.30 dB，说明无噪声近似改善并没有抵消累积的硬件误差；qVocalTract L=3 用 98 个编译后的 CZ 得到 3.52 dB。原文还报告三层阶梯检测到 488、1113、2246 Hz，目标为 527、1113、2285 Hz，每个都在一个粗 bin 内。本表数值与单位依据论文 PDF。

**编译后的二量子比特门计数 × 谱包络误差：** 编译后的二量子比特门计数刻画电路在当前处理器上需要执行多少主要易错操作；谱包络误差用 256-bin、dB 单位的 RMSE 衡量恢复包络与目标的差异。前者是成本，后者是声学结果。把二者并列比较，才能看出为什么更高近似精度的顺序 MPS 在硬件上反而可能更差；它不直接测量语音质量或延迟。

完整参考元音表还给出（Approx./Ideal/Device 均按原表 256-bin envelope RMSE (dB) 题注，单位不重复写入裸数据格）：顺序 χ=2 为 6.22/6.35/6.63 dB，检测 879、1152、2011 Hz；χ=4 为 2.61/2.60/7.82 dB，检测 410、722、1074 Hz；χ=8 为 0.26/0.71/10.30 dB，检测 722、918、1465 Hz。阶梯 L=1 为 6.22/6.26/6.50 dB，检测 722、1113、1308 Hz；L=2 为 4.11/4.13/4.51 dB，检测 879、1777、2285 Hz。

L=3 为 2.32/2.39/3.52 dB，检测 488、1113、2246 Hz；L=4 为 1.89/2.03/4.88 dB，检测 449、761、1074 Hz。四层阶梯把无噪声近似做得更好（1.89/2.03 dB），但硬件误差升到 4.88 dB，这说明本表只说明三层在该硬件上的折中，不能推出层数越多越好。

图 2 用相同 256-bin 分辨率展示 4 组参考元音恢复包络，可检查误差是来自整体幅度、局部谱峰还是硬件噪声；读图时先看各面板标题的 corrected RMSE，再对照峰位。

> **看图路径：** 1. 看四个面板标题里的 corrected RMSE；2. 比较红线硬件恢复与黑线目标、灰线 measured TF；3. 注意频率轴 0–10 kHz 和纵轴 log magnitude (dB)

[![原论文 Fig. 2：Reference-vowel envelopes reconstructed from the archived hardware counts at 256-bin resolution.](https://arxiv.org/html/2611.15919v1/Figure2.svg)](https://arxiv.org/html/2611.15919v1/Figure2.svg)

*论文图 2。原论文 Fig. 2:：“Reference-vowel envelopes reconstructed from the archived hardware counts at 256-bin resolution.”。*

图 2 中 4 个面板分别是顺序 χ=2、χ=4 与阶梯 L=1、L=3；标题给出校正后的 RMSE。黑线是目标，蓝虚线是理想制备，红实线是硬件校正，灰线是测量传递函数。可以看到 χ=4 的硬件曲线在若干峰谷处偏离更大，而 L=3 的主要峰更接近目标；同时 L=3 也没有完全重合，低频和高频仍存在可见偏差。

### 44 例扫描：改善是否在每个案例上都成立

表 2 汇总 44 个 DVTD 案例的均值，比较三层阶梯和两个顺序 MPS 基线的校正后硬件 RMSE，并在表后对照原始计数重算值。原表题注给出 mean 256-bin RMSE (dB)，其中“2q” 是四舍五入到整数的平均编译门数；Device 列的数据格按原表保留裸数字，校正后数据来自 Table II 的 Device 列，每个案例使用 20 000 shots。原始计数重算值随后与这些校正值并列说明。

| Preparation | 2q | Device |
| --- | --- | --- |
| qVocalTract L=3 | 99 | 4.74 |
| Ancilla χ=2 | 39 | 7.15 |
| Ancilla χ=4 | 461 | 9.15 |

表 2 中三层阶梯的校正后平均硬件 RMSE 为 4.74 dB，顺序 χ=2、χ=4 分别为 7.15、9.15 dB；原始计数重算为 4.77、7.16、9.22 dB，排序不变。三层阶梯在全部 44 个案例上都优于两个顺序基线；全三共振判据的 ok 比例为 0.30，两个顺序基线为零。原文的 44 例表还给出 Approx./Ideal 数值：χ=2 为 6.26/6.50 dB，χ=4 为 2.56/3.06 dB，单层阶梯为 6.26/6.50 dB，三层阶梯为 2.48/2.99 dB。

平均编译门数分别为 39、461、30、99。本表数值与单位依据论文 PDF。

同一扫描的共振误差也不小：单层阶梯的校正后硬件 RMSE 为 6.88 dB，MAE 597/570/624 Hz，ok 为 0.02；χ=2 和 χ=4 的 MAE 分别为 452/586/619 Hz 和 222/563/1050 Hz，ok 都是 0.00；三层阶梯的 MAE 为 160/310/518 Hz。校正前后都是 13/44 个案例满足三共振判据。原始三层共振 MAE 为 157、324、522 Hz，分别基于 44、44、43 个有效配对，其中一个目标没有检测到第 3 个峰。

对测量传递函数，三层硬件 RMSE 为 5.96 dB，而其无噪声近似为 4.75 dB。顺序 χ=8 只评了参考元音，未进入 44 例扫描。

图 3 把 44 例扫描的分布画成箱线图，并在右侧单独给出检测共振的平均误差；左图比较 Approximation、Ideal sampler 与 Hardware，右图比较理想与硬件的 F1–F3 平均误差。

> **看图路径：** 1. 左图看每种制备的 Approximation、Ideal sampler、Hardware 分布；2. 右图看 F1–F3 平均误差在理想采样器与硬件上的差异；3. 注意箱线图纵轴单位 dB 与右图 Hz 不是同一量纲

[![原论文 Fig. 3：44-case sweep with the recorded readout correction.](https://arxiv.org/html/2611.15919v1/Figure3.svg)](https://arxiv.org/html/2611.15919v1/Figure3.svg)

*论文图 3。原论文 Fig. 3:：“44-case sweep with the recorded readout correction.”。*

图 3 左图中，χ=4 的硬件箱体最高，L=3 的硬件箱体明显低于两个顺序基线；L=1 的硬件中位数与 χ=2 接近。右图纵轴是 Hz，和左图 dB 不能混读；χ=4 的理想平均共振误差很低，但硬件并不因此最好。图中分布也显示 L=3 仍有较宽散布，不能把均值优势理解成每个案例都达到三峰 100 Hz。

### 噪声模型、最佳深度与模态探针

表 3 汇总参考元音上各制备在理想采样器、静态 FakeTorino 噪声模型与 ibm_kawasaki 硬件上的 256-bin RMSE，并给出为噪声模型编译的门数；讨论重点不是哪个无噪声近似更强，而是静态 FakeTorino 噪声模型和 ibm_kawasaki 硬件是否会选择不同深度。原表题注给出 256-bin RMSE (dB)，Ideal、Noise model 和 Device 列的数据格保留裸数字；Preparation 列括号给出为噪声模型编译的门数。FakeTorino 是另一台设备的静态校准，不是当前硬件的实时噪声。

| Preparation (2q) | Ideal | Noise model | Device |
| --- | --- | --- | --- |
| Ancilla χ=2 (39) | 6.35 | 6.42 | 6.63 |
| Ancilla χ=4 (452) | 2.60 | 6.51 | 7.82 |
| Ancilla χ=8 (1850) | 0.71 | 8.91 | 10.30 |
| qVocalTract L=1 (29) | 6.26 | 6.34 | 6.50 |
| qVocalTract L=2 (67) | 4.13 | 4.92 | 4.51 |
| qVocalTract L=3 (98) | 2.39 | 4.27 | 3.52 |
| qVocalTract L=4 (130) | 2.03 | 4.21 | 4.88 |

表 3 显示，噪声模型略微偏向四层（4.21 dB 对 4.27 dB），硬件则偏向三层（3.52 dB 对 4.88 dB）。这个反转支持“最佳深度随电路噪声变化” 的判断，但不能把 FakeTorino 的排序直接当作 ibm_kawasaki 的预测；而且单案例的 shots 预算不同，理想采样器 100 000、噪声模型 20 000、硬件 50 000。表 3 的括号门数是给噪声模型编译的门数，与表 1 的硬件编译门数不是同一编译目标；例如 χ=4 在此为 452，而表 1 为 461，不能把两组门数直接混用。本表数值与单位依据论文 PDF。

为便于核对，表 3 中各行的 Ideal/Noise model/Device 数值依次为：χ=2 为 6.35/6.42/6.63 dB（39），χ=4 为 2.60/6.51/7.82 dB（452），χ=8 为 0.71/8.91/10.30 dB（1850），阶梯 L=1 为 6.26/6.34/6.50 dB（29），L=2 为 4.13/4.92/4.51 dB（67），L=3 为 2.39/4.27/3.52 dB（98），L=4 为 2.03/4.21/4.88 dB（130）。

模态探针的结果放在同一实验体系里看更清楚：图 4 使用平方根幅度编码和一层阶梯，展示 48 个时间样本在 48 kHz 下的目标态、制备态与硬件探针曲线，可用于检查制备后的相干演化是否仍然跟随目标形状。

> **看图路径：** 1. 看标题中的 correlation = 0.974；2. 比较 target-state、prepared-state 和 hardware 三条曲线；3. 注意横轴 0–1.0 ms、纵轴 modal probe 幅度

[![原论文 Fig. 4：Modal probe with square-root-magnitude encoding and a one-layer staircase: 48 samples at 48 kHz on…](https://arxiv.org/html/2611.15919v1/Figure4.svg)](https://arxiv.org/html/2611.15919v1/Figure4.svg)

*论文图 4。原论文 Fig. 4:：“Modal probe with square-root-magnitude encoding and a one-layer staircase: 48 samples at 48 kHz on ibm_kawasaki. Curves show the target-state, prepared-state, and hardware probes.”。*

图 4 标题给出硬件与理想制备态探针的 correlation = 0.974；3 条曲线在前 0.1 ms 附近都有快速衰减，随后在若干振荡结构中，硬件曲线与目标态、制备态大体同步，但在谷值和局部细节上仍有偏差。这个图支持“制备态可以进行相干处理” 的有限判断，不能替代谱包络 RMSE，也不能说明语音合成质量。

### 结论在哪些条件下成立

结论的适用范围首先受硬件限制：主比较只在 ibm_kawasaki 上进行，噪声模型是另一台设备的静态校准，不能保证换到其他处理器后 L=3 仍最优。其次，阶梯层的经典优化每个案例都使用完整目标向量，这适合受控基准，却不是面对未知信号时可省略的信息；包络恢复还需要很多 shots，并且峰值提取对缺失峰和虚假峰敏感，所以论文明确说需要重复硬件运行来估计变异性。读出校正假设独立读出误差，只修正粗粒度边缘概率；幅度读出不验证近似态的相对符号或相位。

模态探针使用平方根幅度编码且只有一层阶梯，最多说明制备态可参与相干处理，不能推出语音合成质量。44 例中三共振 ok 只有 0.30，第二、第三峰误差仍大；一个目标没有检测到第 3 个峰。原文没有报告延迟、吞吐或主观听感，因此不能根据这些 RMSE 和相关系数承诺实际语音系统会改善。

### 复现时应先固定什么

复现应从固定输入和指标开始：取 DVTD 的计算传递函数，按 f_m=m f_max/N 采样，N=2^14、f_max=10 kHz，包含零且排除 f_max；做峰值归一化对数幅度并保留已知符号，再按 L2 范数归一化。制备端先实现右正则 TT-SVD 截断，记录 χ 和存储张量数；顺序制备要显式建辅助位，阶梯制备用键二近邻门并按目标与残差逐层构造，L≥2 时复现局部极分解更新、最多 40 次前向扫描和 10^-7 fidelity 停止阈值。电路编译使用 Qiskit、优化级别 3、固定种子和 XY4 动态去耦，并记录编译后的二量子比特门数。

读出端要复现 256-bin 块合并：B=64，间距 39.06 Hz，在 0–10 kHz 上按块 RMS 对齐目标；共振峰取 150–4000 Hz 内前 3 个峰，至少 3 dB 突出度和约 200 Hz 间隔，参考元音不平滑、数据集用 3 个 bin 滑动平均；任何缺失峰按三共振 100 Hz 判据失败处理。读出校正用全零和全一校准电路，并同时保留原始计数结果。单案例 shots 为理想 100,000、噪声模型 20,000、硬件 50,000，44 例扫描每个案例 20,000 shots。

若要比较噪声模型与硬件，必须先承认采样预算和静态校准不同。最后，至少重复多次硬件运行来估计峰值检测和 RMSE 的波动；本次材料没有给出可验证的公开代码、模型或数据链接，复现时不能假定已有可直接调用的实现。

### 什么时候值得尝试，下一步还缺什么

什么时候值得尝试 qVocalTract？当目标是近中期超导处理器上的结构化声学谱加载，且主要瓶颈是二量子比特门数和辅助位路由时，无辅助位阶梯层提供了一个可比较的折中；在本文测试的 ibm_kawasaki 上，三层阶梯在参考元音和 44 例均值上比顺序 χ=2、4 更好，但这是特定硬件、特定读出和已知完整目标向量条件下的结果。若应用更看重无噪声近似精度，χ=8 或 L=4 的数字更好，却会在该硬件上付出更高误差。

第一步复现应先做单案例的全链路：从采样、MPS/阶梯构造、transpiler 门数、块合并读出到三峰判据，并同时保留原始计数与校正结果。还需要补的验证包括：多次硬件运行的变异性、其他处理器和动态校准下的最佳层数、更广的物理声道模型、以及真正面向语音任务的评价。模态探针的 0.974 相关只说明制备态在该探针下可相干处理，不能替代语音合成或感知测试。

<details>
<summary>📎 论文与评分元数据</summary>

排名：前50% | 文档类型：方法研究 | [arXiv 原文](https://arxiv.org/abs/2611.15919v1)

</details>

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。

- 评分规则：type-aware-v1

- 评分模型：deepseek-v4.1-flash

- 评分请求协议：openai_responses

---

[← 返回 2026-11-13 语音/音乐/音频论文速递](/audio-paper-digest-blog/posts/2026-11-13/)
