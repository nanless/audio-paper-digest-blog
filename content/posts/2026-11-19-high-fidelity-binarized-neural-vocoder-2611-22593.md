---
title: "High-Fidelity Binarized Neural Vocoder"
date: 2026-11-19
draft: false
tags: [语音合成, 模型量化, 生成对抗网络, 语音]
categories: [论文速递]
description: "针对 mel 频谱图到波形的重建任务，BiVoC 用值域-零空间分解保留可解析部分、只让二值网络估计剩余幅度和相位，并配合非均匀子带与简单二值单元，在 LibriTTS 训练、外部分布测试上明显优于直接二值化的 HiFiGAN 与 Vocos，代价是理论等效算力与通用硬件实测速度不一致且仍需专用位运算内核才能兑现。"
hiddenInHomeList: true
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_arxiv_id: "2611.22593"
paper_digest_workbench_contract: "researcher-workbench"
paper_digest_workbench_schema_fingerprint: "1f09b594c317cc38e934de27a5b0e8ceb4baa50ef79bd4f8683dd9adea720fe7"
paper_digest_reader_title: "把声码器压到 1 比特还能保真吗：BiVoC 的做法"
paper_digest_original_title: "High-Fidelity Binarized Neural Vocoder"
paper_digest_arxiv_version: 1
paper_digest_arxiv_versioned_id: "2611.22593v1"
paper_digest_arxiv_abs_url: "https://arxiv.org/abs/2611.22593v1"
paper_digest_arxiv_pdf_url: "https://arxiv.org/pdf/2611.22593v1.pdf"
paper_digest_primary_task: "语音合成"
paper_digest_tags_contract: "paper-tag-flat-tags"
paper_digest_tags_schema_fingerprint: "27e36280a4b8d3df62ebe54d3ab037920f4d69feb2b554163f01bbae2caf4338"
paper_digest_tags_selection_contract: "paper-tag-selection"
paper_digest_tags_registry_version: "paper-tag-catalog"
paper_digest_tags_registry_sha256: "9673bc0122e1905a5dcfd8b223675400cc2fa4c36095bc0e5f817edf99a0ec5c"
paper_digest_tags_concepts: [{"facet":"task","id":"task.speech-synthesis","label":"语音合成"},{"facet":"method","id":"method.quantization","label":"模型量化"},{"facet":"method","id":"method.gan","label":"生成对抗网络"},{"facet":"signal","id":"signal.speech","label":"语音"}]
paper_digest_primary_method: "模型量化"
paper_digest_score: 7.0
paper_digest_rank_bucket: "前50%"
paper_digest_document_type: "方法研究"
paper_digest_one_sentence: "针对 mel 频谱图到波形的重建任务，BiVoC 用值域-零空间分解保留可解析部分、只让二值网络估计剩余幅度和相位，并配合非均匀子带与简单二值单元，在 LibriTTS 训练、外部分布测试上明显优于直接二值化的 HiFiGAN 与 Vocos，代价是理论等效算力与通用硬件实测速度不一致且仍需专用位运算内核才能兑现。"
paper_digest_authors: [{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Andong Li"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Tong Lei"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Xiaodong Li"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Chengshi Zheng"}]
paper_digest_abstract_sha256: "632c2472c534a76fcd238b53091dcf4a40435c0f96c35b78236fcf5a20648112"
paper_digest_sidecars: {"citation.bib":{"sha256":"5ea3c819ff30fe1bce5c9e1d8db75a1ef83e2cbb17856b4a44b6f53913bf352e","url":"/audio-paper-digest-blog/client/papers/2026-11-19/2611-22593/citation.bib"},"citation.json":{"sha256":"176413ce96c0d36af967d10dc3923f1db981d5493683846b8a7504eb3b69e410","url":"/audio-paper-digest-blog/client/papers/2026-11-19/2611-22593/citation.json"},"citation.ris":{"sha256":"0179fcaad2c6aafc73e4cfd6b07512441eb4e85a508e9a545b59bc7488e8240c","url":"/audio-paper-digest-blog/client/papers/2026-11-19/2611-22593/citation.ris"},"rethink-context.json":{"contract":"paper-research-context","schemaFingerprint":"5d4e79f7d3ee65b39ccb38281548bf20a1b2041ab7a27625eaf97ab9909a8383","sha256":"d7b28a67f49aaa5f8a4ae8ab4b8e5c1cabcafc7abaa91d071a7d8c96e07de326","url":"/audio-paper-digest-blog/client/papers/2026-11-19/2611-22593/rethink-context.json"}}
paper_digest_api_reader_contract: "beginner-researcher"
paper_digest_api_reader_schema_fingerprint: "cd8baf5b8bda3a49eec64f6005931af63de4e9a13148cba5f354c661ca6e9df2"
paper_digest_api_reader_article_sha256: "40bc5ee754dd988c500a582e295e9264339cfae5b6579853246f5342c2f63523"
paper_digest_api_reader_plan_sha256: "282bc07c4fbed4ad1c94839e8f7394702b8dc8ea4d31b576d4a805b7c1c7a28c"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings"
paper_digest_api_reader_source_binding_schema_fingerprint: "d2a2607a6e561909473022eb43f56332ee357af8568566a095c29083ffdec9cc"
paper_digest_api_reader_source_bindings_sha256: "19eff5e0b2f45ab68983af61f48d3507b457c943f1e3f814da9e2a623c07ac3b"
paper_digest_api_reader_source_table_count: 5
paper_digest_api_reader_source_formula_count: 5
paper_digest_api_reader_structured_artifacts_sha256: "ae08eb5f0ccef88b87bc4d435804e4cce5f4899f7c764a3d92ea360e1ac83f5d"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity"
paper_digest_api_reader_author_identity_schema_fingerprint: "1e3fd3a9a56c9a5bf52df8df5022690b9a3fa92e83e934f295af87c0e258ed2f"
paper_digest_api_reader_author_identity_sha256: "a1719a73e65782f120677683a8c5d1408e2bf384514ac729b0ab80ad475e9797"
paper_digest_api_reader_author_count: 4
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity"
paper_digest_api_reader_resource_identity_schema_fingerprint: "33b0be17118be61f39b85ce690c8da17e91f2864bb65e85284f60c40067328e0"
paper_digest_api_reader_resource_identity_sha256: "ab2789cf8d97dce4093750972d6bada64e82bc07913e90a6d2a5c75c31dfb633"
paper_digest_api_reader_resource_count: 10
paper_digest_api_reader_figure_persistence: "ephemeral-no-persisted-figure-assets-v1"
paper_digest_api_reader_decision_projection: "api-reader-decision-projection"
paper_digest_api_reader_decision_projection_schema_fingerprint: "e56feb5ab75c8710904916b898f73dab9bb18bdf65bb60b7ed2edf7f99cea860"
---

# 📄 把声码器压到 1 比特还能保真吗：BiVoC 的做法

> 英文题目：*[High-Fidelity Binarized Neural Vocoder](https://arxiv.org/abs/2611.22593v1)*

<!--paper-tag-hierarchy-v1:start-->

**研究分类**

- **研究任务**：[语音合成](/audio-paper-digest-blog/papers/?concept=task.speech-synthesis)
- **研究方法**：[模型压缩](/audio-paper-digest-blog/papers/?concept=method.compression) → [模型量化](/audio-paper-digest-blog/papers/?concept=method.quantization)；[生成模型](/audio-paper-digest-blog/papers/?concept=method.generative) → [生成对抗网络](/audio-paper-digest-blog/papers/?concept=method.gan)
- **信号**：[语音](/audio-paper-digest-blog/papers/?concept=signal.speech)

<!--paper-tag-hierarchy-v1:end-->

> 评分：**7.0/10** | 创新 1.5/2 | 技术严谨 1.2/1.5 | 实验充分 1.2/1.5 | 清晰度 0.8/1 | 影响力 1/1.5 | 开源 0/1.5 | 可复现 0.3/0.5 | 工程/实践 1/1.5


## 👥 作者与机构

- Andong Li：机构信息未能在本次解析中与作者逐人可靠绑定
- Tong Lei：机构信息未能在本次解析中与作者逐人可靠绑定
- Xiaodong Li：机构信息未能在本次解析中与作者逐人可靠绑定
- Chengshi Zheng：机构信息未能在本次解析中与作者逐人可靠绑定

## 📌 核心摘要

语音声码器要把压缩的 100 维梅尔频谱图还原为 24 kHz 连续波形，需要同时恢复谐波结构、相位连续性和时间细节，细小的频谱误差都会被听成杂音。把权重和激活压缩到 1 比特的二值神经网络（binary neural networks，BNN）能用位运算代替大量浮点乘法，但表示能力不足，直接替换已有声码器的卷积会导致频谱模糊。BiVoC 把梅尔频谱图到幅度谱的映射看成线性逆问题，先用梅尔滤波矩阵的伪逆投影得到与观测一致的距离空间幅度，再让二值网络只估计零空间残余幅度和相位。线性幅度谱按低频细、高频粗切成 25 个子带分别编码，8 个简单的二值卷积单元在子带和帧维度上传递特征，最后由幅度解码和相位解码分支输出残余幅度和相位，经距离零空间组合与逆短时傅里叶变换（inverse short-time Fourier transform，iSTFT）合成波形。计算量大的主体用二值运算，对质量最敏感的头部保留全精度。与已有全精度框架的区别在于重建负担被解析部分分担，建模只在局部子带内进行，单元只保留残差和归一化等稳定结构。在 LibriTTS 内部分布测试上，BiVoC 的多分辨率短时傅里叶变换距离为 0.962，PESQ 为 3.447，明显好于直接二值化的 Vocos 对应版本的 1.381 和 1.829，也超过 HiFiGAN-V1 并接近 Vocos，而理论计算量为每 5 秒音频 1.01 G 操作。跨域和主观测试趋势一致，但在通用硬件上的实测加速尚未实现，绝对质量仍落后于 BigVGAN 和 DegVoC 等大容量全精度模型。

## 🔗 开源与复现资源

- 第三方资源：<https://github.com/Andong-Li-speech/BiVoC> — 链接可访问（HTTP 200）

- 第三方资源：<https://github.com/jik876/hifi-gan> — 链接可访问（HTTP 200）

- 第三方资源：<https://github.com/rishikksh20/iSTFTNet-pytorch> — 链接可访问（HTTP 200）

- 第三方资源：<https://github.com/ncsoft/avocodo> — 链接可访问（HTTP 200）

- 第三方资源：<https://github.com/NVIDIA/BigVGAN> — 链接可访问（HTTP 200）

- 第三方资源：<https://github.com/redmist328/APNet2> — 链接可访问（HTTP 200）

- 第三方资源：<https://github.com/gemelo-ai/vocos> — 链接可访问（HTTP 200）

- 第三方资源：<https://github.com/microsoft/NeuralSpeech/tree/master/PriorGrad-vocoder> — 链接可访问（HTTP 200）

- 第三方资源：<https://github.com/Andong-Li-speech/DegVoC> — 链接可访问（HTTP 200）

可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 声码器要从什么输入恢复出什么波形

神经声码器的输入是紧凑声学表示，本文只研究 mel 频谱图到时域波形的重建。mel 频谱图是对线性幅度谱做 mel 滤波压缩后的 2 维时频表示，帧率较低、压缩比较高时仍是主流选择，目标是从它恢复出采样点级别的连续波形。

恢复时必须保留的信息包括谐波的频率位置与连续性、幅度包络以及相位结构，任何小的频谱误差都可能被人耳听成可闻伪影。输出是 24 kHz 采样率的波形样本，论文的默认分析条件是窗长 1024、帧移 256、1024 点傅里叶变换、100 个 mel 通道，低频与高频截止分别设为 0 与 12 kHz。

评价是否恢复成功既看频谱数值距离，也看听感与可懂度。论文同时报告多分辨率短时傅里叶距离、语音质量感知评价、mel 倒谱失真、周期性误差与浊清音分数、结合全向相位差的信噪比指标、频谱时域相似度以及用 Whisper-Base 计算的词错误率，前三者越小越好中后者越大越好的基本方向需要在读表时先确认。

### 已有声码器路线各自解决了什么又留下了什么

自回归路线把波形生成看成逐点条件概率，用空洞卷积扩大感受野，质量有提升但推理慢。流模型路线在简单分布与目标分布之间建立可逆映射，生成速度有所改善，但可逆块设计受限，训练与推理开销仍然偏大。

生成对抗路线成为兼顾质量与效率的主流，代表做法是用多尺度与多周期判别器检测不同尺度的伪影，生成器通过上采样把 mel 频谱展开成波形。时频域路线不直接生成波形，而是估计频谱幅度和相位再经逆短时傅里叶变换合成，Vocos 用 ConvNeXt 块加幅度与相位双头，DegVoC 把 mel 声码看成退化复原并引入子带结构，都取得了接近前沿的生成对抗效果。

扩散与流匹配路线也在发展，但本文的基线与对比主要围绕生成对抗的时域与时频方法展开。另一条效率路线是结构剪枝与量化，本文只研究其中最极端的 1 比特二值化，此前二值网络多用于图像分类复原以及语音识别与说话人确认等分析任务，很少直接做高保真波形生成。

### 为什么把现成声码器直接二值化会失败

二值神经网络把权重和激活都量化到 1 比特，理论上二值参数按 1/32 计数、二值运算按 1/64 计数，在有位运算支持时可大幅降低存储与计算。但声码需要逐样本重建波形，对谐波连续性与相位结构非常敏感，信息损失很容易变成可闻失真。

论文用 MUSDB18 的一个例子展示了这种困难，真值频谱谐波清晰，而把 HiFiGAN-V1 与 Vocos 中间卷积直接换成二值对应物后，谐波被抹平并出现大面积噪声状底噪。要理解这张对比图，可以先看真值再看两个直接二值化版本，最后看本文方法是否恢复了谐波。

> **看图路径：** 1. 先看(a) 真值的谐波线是否清晰连续；2. 再对比(c)(e) 两个直接二值化版本的模糊与底噪；3. 最后看(f)BiVoC 是否恢复了接近真值的谐波结构

[![原论文 Fig. 1：A typical spectral comparison, where the audio file is from MUSDB18 test set \[8\].](https://arxiv.org/html/2611.22593v1/fig1_demo_comparisons.png)](https://arxiv.org/html/2611.22593v1/fig1_demo_comparisons.png)

*论文图 1。原论文 Fig. 1:：“A typical spectral comparison, where the audio file is from MUSDB18 test set [8].”。*

这张图确实可见的是左右两类差异，直接二值化版本在绿色框选的中高频区域丢失了谐波线并抬高了谐间底噪，而本文的 BiVoC 保留了更接近真值的谐波轨迹。它说明问题不在训练轮数，而在架构本身不适合 1 比特表示，全频带统一建模与复杂门控调制在二值下会放大表示误差。

**mel 频谱图 × 线性逆问题：** mel 频谱图是把线性幅度谱经 mel 滤波器组压缩得到的观测，它丢掉了相位并合并了频率细节；线性逆问题是把这种压缩看成已知矩阵 A 的线性观测 y=Ax，由此 BiVoC 才能区分哪部分幅度可由伪逆直接算回，哪部分必须由网络补足。

### BiVoC 让一个样本走完从 mel 到波形的哪几步

BiVoC 的总体思路是先用固定线性运算拿回能算的部分，再让二值网络只补剩余部分。输入 mel 频谱先经值域模块做伪逆投影，得到与目标频谱同尺寸的线性幅度初始化，然后进入零空间模块估计剩余幅度与相位，最后由值域零空间分解模块合成波形。

要读懂系统框图，建议沿左侧 mel 输入到右侧波形的箭头看主路径，再区分上路初始化与下路估计在哪里汇合，最后对照编码、建模、解码与合成 4 个子图的分工。

> **看图路径：** 1. 沿左侧 mel 输入经伪逆到右侧波形的箭头看主路径；2. 区分上路值域初始化与下路零空间估计在哪里汇合；3. 对照(b)(c)(d)(e) 四个子图看编码、建模、解码、合成的分工

[![原论文 Fig. 4：System diagram of the proposed BiVoC.](https://arxiv.org/html/2611.22593v1/fig4_system_diagram.png)](https://arxiv.org/html/2611.22593v1/fig4_system_diagram.png)

*论文图 4。原论文 Fig. 4:：“System diagram of the proposed BiVoC.”。*

框图可见的主路径是 Y 经伪逆进入分层子带编码模块得到 3 维特征 O，再经 8 个二值卷积单元组成的深层模块得到输出特征，分别送入幅度解码与相位解码，最后与初始化幅度按分解公式合并并经逆短时傅里叶变换得到波形。编码与解码都按子带独立处理后再拼接，深层模块则在子带与帧两个维度上做交互，这种分支分别处理再汇合的设计是为了让二值特征只在局部频率范围内承担建模压力。

### 值域与零空间分解如何减轻二值网络的负担

论文把 mel 观测写成压缩矩阵作用于目标幅度谱的线性形式，这是把声码看成线性逆问题的关键一步。它把观测、目标与噪声的关系抽象为压缩加噪声，为后续区分可解析部分与待学习部分提供了依据。

\[\boldsymbol{y}=\mathbf{A}\boldsymbol{x}+\boldsymbol{n},\]

在无噪声假设下，满足退化一致性与分布一致性的解可以写成两项之和，第一项是伪逆直接得到的观测一致部分，第二项是经投影滤波后的网络估计部分。第一项不需要学习，第二项才是网络要补的剩余量。

\[\tilde{\boldsymbol{x}}=\mathbf{A}^{\dagger}\boldsymbol{y}+\left(\mathbf{I}-\mathbf{A}^{\dagger}\mathbf{A}\right)\hat{\boldsymbol{x}},\]

具体到声码，mel 频谱是 mel 滤波器矩阵作用于目标幅度谱的结果，这正是上式压缩模型的实例化。网络输入是伪逆初始化后的线性谱，而不是原始 mel，因此后续重建更接近时频复原任务，可以借用语音增强的结构思想。

\[\mathbf{Y}=\mathcal{A}\left|\mathbf{X}\right|,\]

实现上网络同时输出剩余幅度与相位，再按分解公式把初始化幅度与滤波后的剩余幅度相加并耦合相位得到复谱，幅度部分还用 1e-5 的下限截断保证非负，最后经逆短时傅里叶变换合成波形。正交性保证了两部分不互相干扰，这对表示能力受限的二值网络尤其重要。

**值域分量 × 零空间分量：** 值域分量是伪逆投影直接得到的、与 mel 观测一致的幅度初始化，不需要学习；零空间分量是观测中没有的剩余幅度和全部相位，必须由网络估计，二者正交相加才得到完整频谱，这种分工直接降低了二值网络的重建负担。

### 子带切分、二值单元与混合精度各自承担什么

二值卷积的前向把特征与卷积核二值化为正负 1，再用异或加计数代替浮点乘法。权重还带一个按输出通道平均绝对值得到的缩放系数，激活按通道阈值比较得到正负 1，激活函数采用带可学习偏移与斜率的 RPReLU。

\[\mathcal{X}^{b}\otimes\mathcal{W}^{b}=\text{BitCount}\left(\text{XNOR}\left(\mathcal{X}^{b},\mathcal{W}^{b}\right)\right),\]

阈值比较的具体规则是大于通道阈值取正 1，否则取负 1，这是二值特征的来源，也是信息损失的来源。

\[x_{c,n,t}^{b}=\text{Sign}\left(x_{c,n,t}^{f}-\alpha_{c}\right)=\begin{cases}+1,&\text{if }x_{c,n,t}^{f}>\alpha_{c}\\ -1,&\text{if }x_{c,n,t}^{f}\leq\alpha_{c}\end{cases},\]

编码端把伪逆后的线性谱按从细到粗切成 25 个子带，默认低频 12 个 250 Hz 子带、中频 8 个 500 Hz 子带、高频 4 个 1 kHz 子带加 1 个剩余子带，每个子带独立做归一化与 1 维二值卷积再拼成通道乘子带乘帧的 3 维特征。解码端对每个子带分别估计幅度与相位，幅度经指数运算，相位经实虚部分离加反正切得到，最后再拼回全频带，最后一层投影保持全精度以输出连续谱值。

深层模块由 8 个二值卷积单元堆叠而成，每个单元先用全局响应归一化加深度可分离 2 维二值卷积聚合子带帧上下文，再用分组为 2 的 2 维二值卷积做通道交互，两处都有残差连接。论文强调简单残差流比直接二值化 ConvNeXtV2 或大核注意力块更稳定，因为复杂门控与多重非线性会在 1 比特下放大误差。

不同模块对质量与复杂度的敏感度不同是混合精度的依据。下表比较零空间模块中头、体、尾三部分在全精度与二值下的参数量与每 5 s 音频的运算量，括号内是各部分在模块内的占比，参数以百万计，运算量以 1,000,000,000 次计。

| Precision | Metric | HSEM | BCM | HSMM+HSPM |
| --- | --- | --- | --- | --- |
| Full-precision | #Params (M) | 0.28(4.33%) | 2.43(37.96%) | 3.70(57.71%) |
| Full-precision | OPsf (Giga/5s) | 0.13(0.44%) | 28.70(93.78%) | 1.77(5.78%) |
| Binary | #Params (M) | 0.01(1.49%) | 0.20(26.27%) | 0.56(72.24%) |
| Binary | OPsb (Giga/5s) | 0.006(0.54%) | 0.83(75.87%) | 0.26(23.59%) |

这张表支撑的判断是体部分主导计算量而尾部分主导参数量，全精度下体占运算量的 93.78%，二值下仍占 75.87%，尾部参数占比在两种设置下都超过一半。因此把对质量敏感但计算量小的头部保留为全精度，把计算主导的体部与参数主导的尾部二值化，能以较小的额外开销换取较大的质量回升，后续默认配置正是头部全精度加体尾二值。

**二值卷积 × 替代梯度：** 二值卷积把权重和激活限制为正负 1 并用异或加计数代替乘法，前向省存储省算力但符号函数几乎处处不可导；替代梯度是在反向用可导的分段函数近似符号函数的导数，让 1 比特网络能够被优化，两者组合才构成可训练的二值前向与反向。

**分层子带建模 × 二值卷积单元：** 分层子带建模是把频谱按低频密、高频疏切成多个子带分别编码解码，避免全频带共用一套二值特征；二值卷积单元是在子带与帧维度上做深层特征交互的基本残差块，子带划分提供细粒度表示，简单单元提供稳定的二值信息流。

### 梯度不可导时如何训练以及损失由哪些项组成

符号函数几乎处处导数为零，论文比较了 3 种替代梯度。直通估计用截断函数，区间内梯度恒定；高阶近似用 2 次分段光滑曲线，在截断区内提供更有信息量的梯度；自适应近似引入通道可学习参数同时调整截断范围与拟合精度，高阶近似可看成它取特定参数时的特例。消融显示自适应近似在 LibriTTS 上取得最低的多分辨率距离与失真以及最高的质量与信噪比，因此被选为默认优化方式。

要读懂梯度对比图，可先看直通估计的折线与阴影区，再看高阶近似的光滑曲线，最后看自适应近似多条曲线的截断宽度如何随参数变化。

> **看图路径：** 1. 看(a) 直通估计在区间外的零梯度和区间内的恒定斜率；2. 看(b) 高阶近似如何把折线换成光滑曲线；3. 看(c) 自适应近似的不同通道曲线如何改变截断宽度

[![原论文 Fig. 2：Comparisons among different gradient approximation strategies.](https://arxiv.org/html/2611.22593v1/fig2_bnn_gradient_approximation.svg)](https://arxiv.org/html/2611.22593v1/fig2_bnn_gradient_approximation.svg)

*论文图 2。原论文 Fig. 2:：“Comparisons among different gradient approximation strategies. (a) Straight through estimator; (b) High-order approximation estimator; (c) Adaptive approximation estimator.”。*

该图可见的是 3 条替代曲线都把不可导的阶跃换成截断区内可导的过渡，但只有自适应版本允许不同通道拥有不同宽度的过渡区，这对应论文所说的分布感知优化，对缓解二值声码器的优化困难有帮助。

重建损失由五项加权组成，多分辨率 mel 用平均绝对误差，实虚部用平均绝对误差，对数幅度用均方误差，相位用加权的全向相位损失，一致性用估计谱与其短时傅里叶往返结果的均方误差，权重依次取 45、45、45、100、45。对抗部分采用多周期判别器加多分辨率短时傅里叶判别器的合页生成对抗损失，并加入特征匹配损失，权重取 1。训练时批量为 16，每段截 64 帧即 16384 个采样点，优化器为 AdamW，参数取 0.8 与 0.99，学习率初值 2e-4，在单张 A100 上生成器与判别器各更新 1,000,000 步。

**重建损失 × 对抗损失：** 重建损失用多分辨率 mel、实虚部、对数幅度、相位和一致性五项约束频谱数值接近目标；对抗损失用多周期判别器和多分辨率短时傅里叶判别器加特征匹配约束听感与细节分布，前者管数值误差，后者管感知伪影。

### 在哪些数据与基线上比较以及如何读指标

训练只用 LibriTTS 的 train-clean-100、train-clean-360 与 train-other-500，验证用 val-full。评测包括分布内 LibriTTS 的 dev-clean 与 dev-other 共 208 段，以及 3 个外部分布，富有表现力的英文 EARS 抽 200 段、中文 AISHELL3 抽 200 段、覆盖语音音效音乐的 RFWave 统一 900 段测试集，另加 MUSDB18 的音乐测试集，所有音频重采样到 24 kHz。

基线分两类，一类是把 HiFiGAN-V1 与 Vocos 中间深层卷积二值化而首尾保持全精度的直接二值化版本，另一类是 10 个全精度声码器，包括 HiFiGAN-V1、iSTFTNet-V1、Avocodo、BigVGAN-base、BigVGAN、APNet2、Vocos、PriorGrad、RNDVoC 与 DegVoC。直接把全精度模型压窄到相近算力的做法也单独做了对照，用来回答是否直接用小全精度模型更划算。

指标方向需要先统一，多分辨率短时傅里叶距离、mel 倒谱失真、周期性均方根误差与词错误率越小越好，语音质量感知评价、浊清音分数、结合相位差的信噪比与频谱相似度越大越好。主观部分招募 21 名有音频工程背景的听音人，做 1 到 5 分、步长 0.5 的平均意见分与带平局选项的偏好测试，顺序随机打乱，整体显著性用 Friedman 检验，两两比较用 Holm 校正的 Wilcoxon 符号秩检验。

### 外部分布上的数字支持什么结论又在什么边界内成立

核心比较问题是相同训练只在 LibriTTS 下，换到未见过的中文语音、情感英文与混合音效时，二值方法谁的退化更小，以及与常用全精度方法相比差距多大。公平条件是所有模型都从 LibriTTS 预训练出发，输入都是 mel 频谱图，指标方向按上一节确认。下表给出 AISHELL3、EARS 与 RFWave 上的完整客观对比，包含全部全精度代表与两个直接二值化版本及 BiVoC，数值保留原文精度与单位方向。

| Datasets | Metrics | Full-precision Vocoders | Full-precision Vocoders | Full-precision Vocoders | Full-precision Vocoders | Full-precision Vocoders | Full-precision Vocoders | Full-precision Vocoders | Full-precision Vocoders | Full-precision Vocoders | Full-precision Vocoders | BNN-based Vocoders | BNN-based Vocoders | BNN-based Vocoders |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Datasets | Metrics | HiFiGAN-V1 | iSTFTNet-V1 | Avocodo | BigVGAN -base | BigVGAN | APNet2 | Vocos‡ | PriorGrad | RNDVoC | DegVoC | HiFiGAN +BNN | Vocos +BNN | BiVoC (Ours) |
| AISHELL3 | M-STFT↓ | 1.059 | 1.132 | 1.040 | 0.858 | 0.769 | 0.975 | 0.845 | 1.054 | 0.702 | 0.747 | 2.599 | 1.355 | 0.897 |
| AISHELL3 | PESQ↑ | 2.823 | 2.595 | 3.003 | 3.414 | 3.878 | 2.846 | 3.342 | 3.995 | 4.049 | 4.075 | 1.167 | 1.742 | 3.330 |
| AISHELL3 | MCD↓ | 2.827 | 3.061 | 2.864 | 1.902 | 1.602 | 2.743 | 2.046 | 1.717 | 1.267 | 1.508 | 6.327 | 3.666 | 1.950 |
| AISHELL3 | GOMPSNR↑ | 3.351 | 3.242 | 3.721 | 4.860 | 5.746 | 4.182 | 4.549 | 6.067 | 6.436 | 6.560 | 1.039 | 2.423 | 4.928 |
| AISHELL3 | VISQOL↑ | 4.651 | 4.486 | 4.731 | 4.806 | 4.907 | 4.715 | 4.836 | 4.675 | 4.897 | 4.904 | 3.249 | 4.331 | 4.737 |
| EARS | M-STFT↓ | 1.210 | 1.245 | 1.197 | 1.025 | 0.839 | 1.202 | 0.898 | 1.062 | 0.754 | 0.769 | 2.613 | 1.526 | 0.990 |
| EARS | PESQ↑ | 2.907 | 2.604 | 3.065 | 3.492 | 3.892 | 2.450 | 3.522 | 3.847 | 3.989 | 4.147 | 1.239 | 1.783 | 3.163 |
| EARS | MCD↓ | 2.733 | 2.819 | 2.703 | 1.871 | 1.400 | 2.768 | 1.949 | 1.692 | 0.951 | 1.114 | 4.804 | 3.193 | 1.979 |
| EARS | GOMPSNR↑ | 2.923 | 2.583 | 2.972 | 4.227 | 5.287 | 3.098 | 4.495 | 5.374 | 6.307 | 6.452 | 0.636 | 1.726 | 4.148 |
| EARS | VISQOL↑ | 4.570 | 4.480 | 4.641 | 4.739 | 4.898 | 4.456 | 4.848 | 4.636 | 4.869 | 4.903 | 3.085 | 4.157 | 4.673 |
| RFWave | M-STFT↓ | 1.263 | 1.352 | 1.280 | 1.033 | 0.933 | 1.487 | 0.950 | 1.285 | 0.793 | 0.935 | 3.664 | 1.728 | 0.998 |
| RFWave | PESQ↑ | 2.558 | 2.342 | 2.756 | 3.080 | 3.585 | 2.458 | 3.186 | 3.508 | 3.839 | 3.758 | 1.198 | 1.652 | 3.180 |
| RFWave | MCD↓ | 4.703 | 4.997 | 4.634 | 3.590 | 3.081 | 5.315 | 3.408 | 3.620 | 2.470 | 3.075 | 9.698 | 6.374 | 3.430 |
| RFWave | GOMPSNR↑ | 2.699 | 2.536 | 2.958 | 3.755 | 4.720 | 3.231 | 3.880 | 3.989 | 5.681 | 5.477 | 0.658 | 1.685 | 4.147 |
| RFWave | VISQOL↑ | 4.509 | 4.409 | 4.590 | 4.730 | 4.842 | 4.527 | 4.826 | 4.569 | 4.907 | 4.844 | 2.968 | 4.084 | 4.718 |

这张表支撑的判断是在 AISHELL3 上 BiVoC 在二值组内全面最优，多分辨率距离 0.897、语音质量评价 3.330、倒谱失真 1.950、信噪比 4.928、相似度 4.737，都明显好于 HiFiGAN 加二值与 Vocos 加二值。同时它超过了 HiFiGAN-V1 与 APNet2 等常用基线，并接近 Vocos，但仍低于 BigVGAN 与 DegVoC 等近期强方法。限制是该结论只在 LibriTTS 训练、外部分布评测的条件下成立，且客观指标不能直接等同于听感，音乐与音效上的泛化需要结合 MUSDB18 与 RFWave 的例子另行对照。

分布内 LibriTTS 的趋势与此一致，BiVoC 以 1.08 M 参数与每 5 s 音频 1.01 Giga 等效运算量取得二值组最优，客观上超过 HiFiGAN 与 APNet2 并接近 Vocos，但未超过 BigVGAN、RNDVoC 与 DegVoC。主观上 AISHELL3 的平均意见分 BiVoC 为 4.00，HiFiGAN-V1 为 3.93，Vocos 为 4.07，与两个全精度代表均无统计显著差异，而对两个二值版本的优势显著。在 MUSDB18 人声上 BiVoC 为 3.61，高于 HiFiGAN-V1 的 3.38 与 Vocos 的 3.49 且差异显著，对二值版本优势更大。未胜出项是面对参数量上百兆的 BigVGAN 与同门全精度 DegVoC 时，BiVoC 的客观指标仍有差距，听感测试也未把这两个最强全精度模型纳入主观比较，因此不能宣称全面超越。

### 哪些设计真正带来了提升以及代价是什么

消融要回答 3 个问题，替代梯度是否需要自适应，值域零空间分解与子带是否必要，简单单元与归一化如何选择。以下 3 张小表都在 LibriTTS 上、默认层归一化下比较，指标方向与前文一致。

第一张比较直通估计、高阶近似与自适应近似，行是梯度类型，列是距离与质量指标。

| Type | M-STFT↓ | PESQ↑ | MCD↓ | GOMPSNR↑ | VISQOL↑ |
| --- | --- | --- | --- | --- | --- |
| STE | 1.030 | 3.009 | 3.635 | 3.958 | 4.692 |
| HOA | 1.030 | 3.048 | 3.584 | 4.021 | 4.699 |
| AAE | 1.024 | 3.055 | 3.568 | 4.045 | 4.705 |

这张表支撑的是自适应近似在五项指标上都略优于高阶近似并明显优于直通估计，例如语音质量评价从 3.009 经 3.048 提升到 3.055，信噪比从 3.958 经 4.021 提升到 4.045。代价是引入通道级可学习截断参数，但相比二值优化困难，这个额外参数量可以接受。限制是提升幅度较小，不能单独解释 BiVoC 与直接二值化版本之间的大差距。

第二张比较是否使用值域零空间分解，行是关闭与开启，列同上。

| w/i RND | M-STFT↓ | PESQ↑ | MCD↓ | GOMPSNR↑ | VISQOL↑ |
| --- | --- | --- | --- | --- | --- |
| ✗ | 1.512 | 2.676 | 4.968 | 3.464 | 4.536 |
| ✓ | 0.975 | 3.349 | 3.342 | 4.540 | 4.759 |

这张表支撑的是分解带来大幅改善，不用时多分辨率距离为 1.512、语音质量评价仅 2.676，开启后分别变为 0.975 与 3.349，倒谱失真与信噪比同步大幅好转。要观察的频谱例子是 LibriTTS 的一段语音，不用分解时谐波模糊且谐间充满噪声状伪影，用分解后谐波更清晰并接近参考。

> **看图路径：** 1. 对比(a) 参考与(b) 不用值域-零空间分解的谐波模糊；2. 看(c) 引入分解后谐间噪声是否被压低；3. 注意低频与中频谐波线的连续性差异

[![原论文 Fig. 6：A typical spectral comparison w.r.t whether the RND strategy is utilized, where the audio file is…](https://arxiv.org/html/2611.22593v1/fig7_rnd.png)](https://arxiv.org/html/2611.22593v1/fig7_rnd.png)

*论文图 6。原论文 Fig. 6:：“A typical spectral comparison w.r.t whether the RND strategy is utilized, where the audio file is from the LibriTTS test set.”。*

该图确实可见中间面板的谐波线断裂模糊，右侧面板恢复了更连续的谐波与更低的底噪，这与表格中的距离下降是一致的。它说明把可解析幅度固定下来对 1 比特网络至关重要，但结论依赖于 mel 滤波器矩阵已知且伪逆准确的条件下成立。

第 3 张比较基本单元，行包括直接二值化的 ConvNeXtV2、大核注意力块、去掉归一化的本文单元与完整本文单元。

| Unit Type | M-STFT↓ | PESQ↑ | MCD↓ | GOMPSNR↑ | VISQOL↑ |
| --- | --- | --- | --- | --- | --- |
| ConvNextv2 [44] | 1.053 | 2.890 | 3.720 | 3.842 | 4.710 |
| LKCAB [30] | 1.005 | 3.169 | 3.494 | 4.185 | 4.743 |
| BCU w/o Norm | 0.982 | 3.287 | 3.433 | 4.382 | 4.763 |
| BCU (Ours) | 0.975 | 3.349 | 3.342 | 4.540 | 4.759 |

这张表支撑的是复杂全精度模块直接二值化效果反而更差，而简单残差的本文单元最优，去掉归一化后性能回落，说明归一化对稳定二值卷积输出范围是必要的。归一化类型上批量归一化在 LibriTTS 上取得语音质量评价 3.447 与信噪比 4.645，优于层归一化与 DyT 且等效运算量最低，论文解释为批量归一化的滑动统计对离散波动的二值特征更稳定，但这仍是推测而非直接测量。子带数量上从 7 到 49 越密越好但参数与算力同步上升，25 个非均匀子带是性能与复杂度的折中，均匀切分在同等数量下明显更差。

### 理论算力节省为什么没有变成实测加速

论文报告的等效运算量按二值参数计 1/32、二值运算计 1/64 折算，BiVoC 每 5 s 音频仅 1.01 Giga，而 HiFiGAN-V1 为 166.41 Giga，Vocos 为 6.35 Giga。但实测在通用中央处理器与图形处理器上，BiVoC 的加速比为中央处理器 14.24 倍实时、图形处理器 191 倍实时，慢于全精度 Vocos 的 142.76 倍与 1538 倍实时，二值版 Vocos 甚至慢于其全精度版本。

原因在原文中有明确交代，当前 PyTorch 实现仍用浮点张量表示二值激活与缩放权重，卷积仍走标准浮点内核，还要额外做即时二值化与缩放，25 个子带的编码解码是顺序执行，硬件利用率低于全频带高度向量化的 Vocos。因此理论等效值假设了位打包的异或加计数指令，而实测平台没有这种专用内核，两者不能直接换算。

存储与显存的节省同样是理论值，按位打包计算时头部权重存储可减少 93.40%，尾部绝对节省 11.92 MB，体部峰值激活缓冲从 22.95 MB 降到 11.83 MB，但当前实现并未真正分配 1 比特张量。测试硬件为 Intel i7-14700F 与 RTX 4060 Ti，结果应视为通用平台参考，而非专用硬件上的极限加速。未来工作需要开发位打包内核并行化子带分支，才能验证延迟、内存与能耗的实际收益。

### 要复现这篇工作第一步做什么

复现应从数据与配置对齐开始，而不是先改模型。按原文把所有音频重采样到 24 kHz，mel 参数取窗长 1024、帧移 256、1024 点变换、100 通道，子带按 12 个 250 Hz、8 个 500 Hz、4 个 1 kHz 加剩余 1 个切分，通道数 256，深层堆 8 个单元，核尺寸取 5 乘 5，归一化默认用批量归一化，替代梯度用自适应近似，头部保持全精度而体尾二值化。

训练沿用 LibriTTS 的 3 个训练子集与验证集划分，批量 16、每段 64 帧，AdamW 学习率 2e-4，生成器与判别器各 1,000,000 步，并同时优化五项重建损失与两种判别器的对抗加特征匹配损失。评测时固定用 LibriTTS 的 208 段分布内集与 EARS、AISHELL3、RFWave、MUSDB18 的外部分布集，指标聚合方式与原文一致后再做主观对照。

论文正文给出了 BiVoC 的代码链接，本次只确认该链接在请求时可达，属于论文提到的第三方链接，不能据此断言作者已开源或权重可直接下载运行。第三方基线链接同样只证明论文提到了对应实现，复现时需要自行核对版本、预训练权重与 24 kHz 条件是否一致。仍需补充的验证是位打包内核下的真实延迟与内存，以及在延迟、功耗受限的端侧设备上的可部署性，这些在原文中尚未测量。

### 什么时候值得尝试以及结论的适用边界

当声码器需要长期运行在内存、功耗与响应受限的设备上，又希望保留接近常用全精度模型的听感时，BiVoC 的思路值得尝试。它的适用前提是输入为 mel 频谱图且 mel 矩阵已知，目标是高保真重建而非极低码率潜在特征重建，部署方有能力实现或等待位打包二值卷积内核。

行动顺序是先复现全精度头部加二值体尾的默认配置并验证值域零空间分解与非均匀子带是否生效，再根据质量复杂度敏感度决定是否调整子带数与归一化，最后才考虑把等效算力换算成真实加速。直接把现成声码器逐层二值化，以及直接把全精度模型压窄到相近算力，在本文的对照中都不是更优的低复杂度方案。

结论的边界需要说清，BiVoC 的优势在 LibriTTS 训练加多个外部分布的条件下成立，客观上未超过 BigVGAN、RNDVoC 与 DegVoC 等最强全精度方法，主观上也只在代表性基线上验证了可比或更优。没有测量误判率、延迟与能耗就不能承诺这些会同步改善，理论存储与算力节省不等于当前 PyTorch 实现的实际节省，端侧部署仍是待验证项。

<details>
<summary>📎 论文与评分元数据</summary>

排名：前50% | 文档类型：方法研究 | [arXiv 原文](https://arxiv.org/abs/2611.22593v1)

</details>

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。

- 评分规则：type-aware-v1

- 评分模型：muse-spark-1.3-contributor

- 评分请求协议：openai_responses

---

[← 返回 2026-11-19 语音/音乐/音频论文速递](/audio-paper-digest-blog/posts/2026-11-19/)
