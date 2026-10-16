---
title: "CochlearMark: Audio Watermarking via Phase Locked Auditory Nerve Representations"
date: 2026-10-16
draft: false
tags: [音频水印, 信号处理, 语音, 音乐, 环境声]
categories: [论文速递]
description: "CochlearMark 把水印藏在听神经锁相特征经密钥投影后的得分里，用很小的波形扰动把得分推过阈值，在语音音乐环境音上保持可听性与常规编辑鲁棒性，但在神经编解码低码率与改内容变换下会失效。"
hiddenInHomeList: true
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_arxiv_id: "2610.20105"
paper_digest_workbench_contract: "researcher-workbench-v1"
paper_digest_reader_title: "用听神经锁相做无训练音频水印：CochlearMark 解读"
paper_digest_original_title: "CochlearMark: Audio Watermarking via Phase Locked Auditory Nerve Representations"
paper_digest_arxiv_version: 1
paper_digest_arxiv_versioned_id: "2610.20105v1"
paper_digest_arxiv_abs_url: "https://arxiv.org/abs/2610.20105v1"
paper_digest_arxiv_pdf_url: "https://arxiv.org/pdf/2610.20105v1.pdf"
paper_digest_primary_task: "音频水印"
paper_digest_tags_contract: "paper-tag-flat-tags-v2"
paper_digest_tags_selection_contract: "paper-tag-selection-v2"
paper_digest_tags_registry_version: "paper-tag-catalog-v2"
paper_digest_tags_registry_sha256: "cdef54423b5dfc00a1d017ef6639446d2ecd1d9c1acf71c8eb4f6219a46b7ba8"
paper_digest_tags_concepts: [{"facet":"task","id":"task.watermarking","label":"音频水印"},{"facet":"method","id":"method.signal-processing","label":"信号处理"},{"facet":"signal","id":"signal.speech","label":"语音"},{"facet":"signal","id":"signal.music","label":"音乐"},{"facet":"signal","id":"signal.environmental","label":"环境声"}]
paper_digest_primary_method: "信号处理"
paper_digest_score: 7.5
paper_digest_rank_bucket: "前25%"
paper_digest_document_type: "方法研究"
paper_digest_one_sentence: "CochlearMark 把水印藏在听神经锁相特征经密钥投影后的得分里，用很小的波形扰动把得分推过阈值，在语音音乐环境音上保持可听性与常规编辑鲁棒性，但在神经编解码低码率与改内容变换下会失效。"
paper_digest_authors: [{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Qin Liu"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Strahinja Nikolic"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Milos Cernak"}]
paper_digest_abstract_sha256: "057859f5b15d84335ec3b73b944587c7cd46ad44e6b2a3e29b43632463e83106"
paper_digest_sidecars: {"citation.bib":{"sha256":"06057e1681d7336b7f9da880a7f6d1a74abebd384b73d7c6ef2eb837bf85b42a","url":"/audio-paper-digest-blog/data/papers/2026-10-16/2610-20105/citation.bib"},"citation.json":{"sha256":"0c5db4888424e5a2a60f8f19c131925d56698fa111a6a299c3ddf695cf26a9d0","url":"/audio-paper-digest-blog/data/papers/2026-10-16/2610-20105/citation.json"},"citation.ris":{"sha256":"beb344331a6874fbb58dc94a03fea3ff3405a3ef8478f7aca575026ba24cd34a","url":"/audio-paper-digest-blog/data/papers/2026-10-16/2610-20105/citation.ris"},"rethink-context.json":{"contract":"paper-research-context-v2","sha256":"1f5aeb4dca00f0e59594df241182c678a5d1294c509568cfd592aa7a9dfe35dc","url":"/audio-paper-digest-blog/data/papers/2026-10-16/2610-20105/rethink-context.json"}}
paper_digest_api_reader_contract: "beginner-researcher-v3"
paper_digest_api_reader_article_sha256: "4b93c68239eedee142eb0cf5926496eed294c0bdced934451cc54f5892710f45"
paper_digest_api_reader_plan_sha256: "69c6139a45af4258992416cdbf3e637eb0e3ed6b1c93959a9f6f524270dcdf75"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings-v4"
paper_digest_api_reader_source_bindings_sha256: "300ab244fdd5df2d7e8136f6aaee50a51ab0e51c1d54bfcea3a1b0a64e3f2377"
paper_digest_api_reader_source_table_count: 2
paper_digest_api_reader_source_formula_count: 3
paper_digest_api_reader_structured_artifacts_sha256: "867187680beb7b10f409e2e57a8c60429edf9b53f24d4fdd6d45e82cd7439f36"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity-v1"
paper_digest_api_reader_author_identity_sha256: "ed0eda2071818e2bd8e1da38341980dc03accda0cfddb0081faa45d6f5fcb1d5"
paper_digest_api_reader_author_count: 3
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity-v1"
paper_digest_api_reader_resource_identity_sha256: "44140122b42912e352082daf9a6458bdea0c688eddd7d63c69f90e7f2233ad72"
paper_digest_api_reader_resource_count: 2
paper_digest_api_reader_figure_persistence: "ephemeral-no-persisted-figure-assets-v1"
paper_digest_api_reader_decision_projection: "api-reader-decision-projection-v2"
---

# 📄 用听神经锁相做无训练音频水印：CochlearMark 解读

> 英文题目：*[CochlearMark: Audio Watermarking via Phase Locked Auditory Nerve Representations](https://arxiv.org/abs/2610.20105v1)*

<!--paper-tag-hierarchy-v1:start-->

**研究分类**

- **研究任务**：[音频水印](/audio-paper-digest-blog/papers/?concept=task.watermarking)
- **研究方法**：[信号处理](/audio-paper-digest-blog/papers/?concept=method.signal-processing)
- **信号**：[语音](/audio-paper-digest-blog/papers/?concept=signal.speech)；[音乐](/audio-paper-digest-blog/papers/?concept=signal.music)；[环境声](/audio-paper-digest-blog/papers/?concept=signal.environmental)

<!--paper-tag-hierarchy-v1:end-->

> 评分：**7.5/10** | 创新 1.5/2 | 技术严谨 1.3/1.5 | 实验充分 1.3/1.5 | 清晰度 0.9/1 | 影响力 1/1.5 | 开源 0/1.5 | 可复现 0.3/0.5 | 工程/实践 1.2/1.5


## 👥 作者与机构

- Qin Liu：机构信息未能在本次解析中与作者逐人可靠绑定
- Strahinja Nikolic：机构信息未能在本次解析中与作者逐人可靠绑定
- Milos Cernak：机构信息未能在本次解析中与作者逐人可靠绑定

## 📌 核心摘要

音频水印需在波形中加入难察觉扰动并在压缩滤波混响等处理后仍可检出，已有神经水印的鲁棒性来自训练学到的编码器和检测器，在新处理下的行为只能靠实测确认。CochlearMark输入4.0 s波形，输出加性水印波形与投影分数，可微听神经纤维模型先将其映射为各特征频率通道的神经图，神经图再按各通道特征频率计算向量强度得到锁相特征。锁相特征与密钥生成的单位方向做内积得到分数，检测比较该分数与干净样本均值加权标准差所得阈值，嵌入则沿该分数对波形的梯度优化扰动使分数超过同一阈值。嵌入沿初始分数梯度方向用二次模型估计到达阈值的最小能量步长并经带限与包络门控约束，未达阈值时追加至多三次Adam校正，校正后的扰动加回原采样率信号。与AudioSeal、WavMark、Patchwork和扩频使用相同来源片段相比，在LibriSpeech、GuitarSet和Clotho混合的6,964个片段上，未攻击检测以ROC-AUC衡量CochlearMark为0.987-1.000，与神经基线相当，信噪比约31.0 dB落在基线范围内。在上述6,964个片段混合评测下以存活率即TPR@1% FPR衡量，EnCodec重编码存活率从24 kbps时的0.87降至6 kbps时的0.20。结论适用于保留时间精细结构的信号编辑，不适用于音高变换、音色转换、文本到语音重合成与去除链等重建波形的变换。在Intel Core i7-6850K单CPU上按每秒音频计，以计算时延衡量嵌入39 ms高于检测4.4 ms，模型体积为145 KB且免训练、无训练开销。

## 🔗 开源与复现资源

- 第三方资源：<https://github.com/msaddler/auditory_machine_learning> — 链接可访问（HTTP 200）

- 第三方资源：<https://github.com/guillaumemeyer/watermarks-remover> — 链接可访问（HTTP 200）

可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 音频水印要解决什么问题

音频水印的输入是一段原始波形，目标是在人耳不易察觉的前提下加入可检测的标记，输出是加了标记的波形，检测时只看测试波形是否含有该标记。必须保留的信息有两个，一是听感上与原音接近，二是标记在常见处理后还能被认出来。论文把处理分成 4 类，常规信号编辑、神经编解码重编码、改变内容的处理，以及专门去除水印的工具链。评价时先看干净音频的检出与听感，再看每种处理后的存活率。

初学者容易把内容保真等同于水印保留，论文后文用 EnCodec 的例子说明两者可以分离，内容听起来还在，但精细相位结构已被重建，水印就可能丢失。理解这一点是读懂全文鲁棒性边界的关键。

### 已有路线与本文位置

论文梳理了 3 条路线。第一条是学习的编解码水印，例如 AudioSeal 联合训练生成器与检测器做局部检测，WavMark 学习多比特嵌入与恢复，SilentCipher 在训练中加入可微失真与压缩，AWARE 用对抗优化代替固定失真堆栈。这类方法鲁棒性来自训练目标与数据，遇到新处理只能靠实测。第二条是经典无训练规则，例如扩展频谱、量化索引调制和 Patchwork，在波形或变换域用固定规则嵌入检测。第 3 条是 Hidden in Plain Tokens，利用生成式音频离散 token 的冗余做无梯度水印，但依赖特定生成系统的离散表示。

CochlearMark 的位置是直接对波形音频的无训练水印，不训练编码器与检测器，也不依赖生成系统的 token，而是借用听神经锁相作为特征空间，鲁棒性边界由时间精细结构是否保留来解释。

### 为什么选听神经锁相

听神经纤维会在刺激精细结构固定相位处发放，这称为锁相。许多常规编辑大体保留这种时间精细结构，而破坏或重建波形的处理会改变它。如果水印特征直接建立在锁相上，那么保留结构时水印保留，破坏结构时水印丢失，行为就有生理学解释，而不需要从数据中学。论文为此用了一个基于 Bruce 等人的可微听神经外周模型，包含 Gammatone 滤波器组、半波整流和内毛细胞低通，内毛细胞低通截止为 3 千赫兹，把锁相信息集中在截止以下。

随机突触部分被换成 Sigmoid 发放率函数，使梯度能从检测得分传回波形，这是后续做扰动优化的前提。前端记为 Phi，把 N 点波形映射为 C 乘 T 的神经图，本文取 36 通道，等效矩形带宽尺度从 80 赫兹到 6 千赫兹，内部速率 20 千赫兹，神经图帧率 10 千赫兹。

### 整体流程如何走通

嵌入与检测共用同一条前端与同一个密钥投影。嵌入时输入干净波形，先加一个待优化的小扰动，经过听神经模型得到神经图，再算锁相特征并投影到密钥方向得到得分，优化扰动使得分超过阈值就停止，保留加扰后的波形作为带水印音频。检测时对测试波形走同样的前端加投影，直接比较得分与阈值，大于阈值判为带水印。攻击评估时把带水印音频先过攻击仿真器，再走同样的检测。论文图 1 把这个闭环画成上下两排，上排是嵌入约束，下排是处理后的存活示意，右侧波形示例把扰动放大 5 倍显示，实际扰动远小于图示。

上排从左到右是嵌入主路径，下排在水印音频后插入攻击仿真器再进同一前端，右侧柱状示意从信号编辑的高得分经神经编解码下降到内容改变的低得分，右端波形显示扰动包络跟随语音活动段。

> **看图路径：** 1. 沿上排从干净音频到扰动音频再到听神经模型与神经图的箭头看嵌入主路径；2. 看锁相投影示意中特征向量向密钥方向投影得到得分 s 的几何关系；3. 对比下排攻击仿真器插入的位置与右侧三类处理下投影得分由高到低的示意；4. 看右端波形示例中放大 5 倍的扰动与原波形的相对幅度与包络关系

[![原论文 Figure 1：Overview of CochlearMark.](https://arxiv.org/html/2610.20105v1/framework.png)](https://arxiv.org/html/2610.20105v1/framework.png)

*论文图 1。原论文 Figure 1:：“Overview of CochlearMark. (1) Watermark embedding: a waveform perturbation is optimized through the differentiable ANF model so that the phase-locking feature yields a keyed…”。*

上排虚线表示基于梯度的扰动优化回路，中间神经图为时频发放率可视化，投影示意中棕色箭头为锁相特征向量，蓝色箭头为密钥方向，红色分量 s 为投影得分。下排同样结构在攻击后重新计算投影得分，右侧示意柱从左到右依次对应信号编辑、神经编解码与内容改变，高度表示可检测性。波形示例横轴为 0 到 1 秒，纵轴为幅度，紫色扰动在放大 5 倍后仍明显小于原波形，且在静音段较小。

### 锁相特征与密钥检测如何计算

前端输出神经图后，每个通道按下式计算向量强度，符号含义是该通道发放率在自身特征频率处的归一化傅里叶幅度，帧率为分母求和的归一化项，取值在 0 到 1 之间，接近 1 表示锁定在同一相位，接近 0 表示锁相弱。把 36 个通道的值堆成向量即锁相特征。

\[\psi_{c}=\frac{\left|\sum_{t=1}^{T}z_{c,t}\,e^{-\mathrm{i}2\pi f_{c}t/f_{s}}\right|}{\sum_{t=1}^{T}z_{c,t}}\in[0,1].\]

锁相特征再与密钥方向做内积得到检测得分，密钥方向由检测密钥生成并归一化为单位长度。阈值由干净片段得分的均值加 kappa 倍标准差标定，本文 kappa 取 3.5，标定用 LibriSpeech dev-clean 中 200 段与评测不相交的数据。检测器没有可训练参数，嵌入与检测用同一投影。

\[s=\langle\bm{\psi},\,\bm{d}\rangle,\]

\[\gamma=\mu_{\mathrm{clean}}+\kappa\,\sigma_{\mathrm{clean}},\]

**听神经纤维模型 × 神经图 × 向量强度：** 听神经纤维模型指可微的耳蜗前端，把波形变成各特征频率通道随时间变化的发放率，即神经图；向量强度是在每个通道上按该通道特征频率对神经图做傅里叶分量归一化，取值在 0 到 1 之间，表示发放是否锁定在同一相位。三者组合后，波形的时间精细结构被转成 36 维的锁相特征，后续水印只改这个特征的投影得分。

**锁相特征 × 密钥方向 × 检测得分：** 锁相特征是 36 个通道向量强度堆成的向量，密钥方向是由检测密钥生成的单位长度随机向量，检测得分是二者的内积。密钥方向决定了往哪个随机方向推才算加水印，检测时用同一方向投影并与阈值比较，没有可训练的编码器或检测器。

对初学者可以这样复述，波形先变成 36 个频率通道随时间变化的发放率图，每个通道看发放是否跟随该通道频率的周期整齐出现，整齐度量化成 0 到 1 的数，36 个数拼成特征，再看这个特征在随机密钥方向上有多少分量，超过干净均值加 3.5 倍标准差就判有水印。

### 扰动加在哪里又受什么约束

水印以加性扰动形式出现，记带水印音频为原波形加扰动。优化目标是扰动能量最小，约束是检测得分达到阈值，同时扰动被参数化为包络与带限算子作用在优化变量上。带限把能量限制在 300 赫兹到 2.5 千赫兹，去掉过低与过高成分，对应锁相信息集中的范围。包络是原信号平滑幅度包络，取值在 0 到 1 之间，在静音区压小扰动，把扰动集中在有信号活动的区域。记录统一为 4.0 秒，扰动以原采样率加回，带外内容得以保留。

求解时先沿初始得分梯度方向做 1 维近似，用一次前向反向加一次前向探测拟合 2 次函数，闭式估计达到阈值的最小步长，若未达到再做至多 3 步 Adam 修正，前端与检测器全程固定。这种做法不是训练神经网络，而是在每个片段上解一个带约束的小优化，代价是嵌入时需要几次模型前向反向，检测时只需一次前向加投影。

前端先把波形送入可微听神经模型，经过伽马通滤波、半波整流和内毛细胞低通，得到各特征频率通道随时间变化的发放率，再按通道特征频率计算向量强度，组成 36 维锁相特征，通道按等效矩形带宽从 80 赫兹排到 6 千赫兹，内毛细胞低通截断在 3 千赫兹，神经图帧率为 10 千赫兹。检测分数是该特征与密钥生成的单位长度随机方向的内积，阈值取自 200 段干净语音分数的均值加 3.5 倍标准差，校准片段与评测数据不重叠。

优化变量与原波形等长，扰动能量用平方欧氏范数衡量，包络与带限在优化全程都作用在变量上，保证每次尝试都满足频带和静音抑制要求。先用一次前向反向得到沿梯度方向的斜率，再用一次前向探测得到曲率，由此定出 2 次曲线与阈值的最小非负交点，作为最小能量步长的闭式估计，若一次走不到阈值，再补至多 3 步 Adam 调整，听神经前端和键控投影方向始终不变。

### 本研究没有训练什么实际算了什么

本研究没有训练编码器、解码器或检测器，也没有学习前端参数。前端滤波器组与内毛细胞低通等是固定生理模型，密钥方向是固定随机种子生成的随机向量，阈值乘子与频带等是预设超参数。实际计算分两部分，标定时在 200 段干净音频上算得分均值与标准差得到阈值，嵌入时对每个片段优化扰动变量。优化变量与波形等长，梯度从内积得分经向量强度、神经图、Sigmoid 发放率一路传回波形，带限与包络门控在每次迭代中保持扰动形态。

论文没有报告去掉包络或换频带的消融数值，也没有报告优化步数与收敛率的分布，因此不能从名称推断哪一项必不可少，只能按原文说频带与门控是为了听感与锁相集中。无训练不等于输出确定，随机密钥不同会导致方向不同，同一密钥下优化路径仍受数值计算影响。

### 在什么数据与处理上评测

评测用 3 类语料共 6964 段，LibriSpeech 的 test-clean 与 test-other 代表语音，GuitarSet 代表独奏乐器音乐，Clotho 代表环境音，同一语料的相同源片段用于跨方法比较。基线包括两个训练式神经水印 AudioSeal 与 WavMark，以及两个无训练经典方法 Patchwork 与扩展频谱。攻击分 4 组，信号编辑包括重采样到 88 与 44 千赫兹、加噪、低通高通、重量化、MP3 与 Opus、均衡、全通相位扰乱、混响回声、mu 律压扩、丢包式 dropout、55 毫秒时移与 10% 裁剪，以及基于 DeepFilterNet 的 VoIP 降噪链。神经编解码用 EnCodec 多码率，内容改变包括变调、FreeVC 音色转换与 XTTS 语音合成重建，去除类用 watermarks-remover 的 remix 链，含 1.08 倍变速、升高 2 半音、35 赫兹到 14 千赫兹带限加 8 分贝高频衰减与 96 千比特 AAC 重编码。干净检测用 ROC-AUC 与 1% 误报下检出率，听感用 SNR、PESQ 与 Zimtohrli，鲁棒性用每种攻击后的存活率。

**ROC-AUC × TPR@1% FPR × 存活率：** ROC-AUC 指未攻击时区分加水印与干净音频的整体能力，TPR@1% FPR 指把误报固定在 1% 时的检出率，存活率指每种攻击后仍被检出的加水印片段比例，其计算方式与 TPR@1% FPR 相同。论文用前两者报告干净检测，用存活率逐项报告鲁棒性。

需要提醒的是阈值只在 LibriSpeech dev-clean 上标定，跨到音乐与环境音时分布可能偏移，这会影响 TPR@1% FPR 的绝对值，读数时要结合干净检测一起看。

### 干净音频的听感与检出如何

下表比较的是未攻击时的问题，即加水印后是否还能听、能否检出。公平条件是同一语料源片段，指标方向是 SNR、PESQ、Zimtohrli 越高越好，AUC 与 TPR@1% 越高越好。表中 LibriSpeech 部分显示 5 种方法干净检出均为 1，听感各有高低，CochlearMark 的 SNR 为 31.0，介于基线之间。

| Corpus | Method | SNR | PESQ | Zimtohrli | AUC | TPR@1% |
| --- | --- | --- | --- | --- | --- | --- |
| Libri- Speech | CochlearMark | 31.0 | 3.91 | 4.50 | 1.000 | 1.000 |
| Libri- Speech | AudioSeal | 27.5 | 4.41 | 4.94 | 1.000 | 1.000 |
| Libri- Speech | WavMark | 36.7 | 4.14 | 4.39 | 1.000 | 1.000 |
| Libri- Speech | Patchwork | 24.6 | 4.52 | 4.91 | 1.000 | 1.000 |
| Libri- Speech | Spread-Spectrum | 33.4 | 3.56 | 3.91 | 1.000 | 1.000 |

表中 LibriSpeech 五行分别给出 CochlearMark、AudioSeal、WavMark、Patchwork 与扩展频谱的 SNR、PESQ、Zimtohrli、AUC 与 TPR@1% 数值，列数满足同时看听感与检出。正文报告跨三语料 CochlearMark 的 AUC 在 0.987 到 1.000 之间，TPR@1% 在 0.975 到 1.000 之间，GuitarSet 与 Clotho 略低于 LibriSpeech，WavMark 在 Clotho 上 AUC 为 0.979，说明跨域标定与音乐环境音特性会带来小幅波动。限制是这些都是干净条件，未经任何处理，不能推广到攻击后，且 PESQ 等客观指标不等于主观听感，静音门控的效果还需结合波形听。未胜出项是 PESQ 上 Patchwork 在多语料更高，SNR 上 WavMark 更高，CochlearMark 处在基线范围内而非全面最优。

### 各类攻击后谁还留得住

下图回答的核心问题是不同处理后水印是否还活着，纵横分别是方法与攻击，格内数值为该攻击后的存活率，颜色越蓝越高。读图时先看首行 CochlearMark，再横向对比其他行，纵向看 4 组攻击的边界。

pooled 跨三语料每方法 6964 段，横轴从重采样低通到 MP3 Opus 均衡混响，再到 EnCodec 多码率与变调转换合成，最后是去除工具，纵轴五行为 CochlearMark 与 4 个基线。

> **看图路径：** 1. 先看首行 CochlearMark 在信号编辑区多数格为高存活，在噪声与低码率处下降；2. 对比 Patchwork 与 Spread-Spectrum 在重采样低通与神经编解码列的低存活格；3. 对比 AudioSeal 与 WavMark 在全通与部分编解码列的差异；4. 看最右侧内容改变与去除工具列所有方法接近零的整列颜色

[![原论文 Figure 2：Per-attack watermark survival (TPR@1% FPR) pooled across LibriSpeech, GuitarSet, and Clotho (6…](https://arxiv.org/html/2610.20105v1/survival.png)](https://arxiv.org/html/2610.20105v1/survival.png)

*论文图 2。原论文 Figure 2:：“Per-attack watermark survival (TPR@1% FPR) pooled across LibriSpeech, GuitarSet, and Clotho (6,964 clips per method), spanning signal edits, neural-codec re-encoding,…”。*

可见内容是 CochlearMark 在多数信号编辑列接近 1，例如重采样 MP3 Opus 混响回声等保持高存活，随加噪增强而下降，EnCodec 从 24 千比特的 0.87 经 12 千比特的 0.71 降到 6 千比特的 0.20，内容改变四列与去除列接近零。对比可见 Patchwork 在重采样到 4 千赫兹仅 0.23、低通 2 千赫兹 0.99 但噪声 20 分贝 0.34，扩展频谱在全通为 0.00 而噪声 10 分贝 0.98，AudioSeal 在均衡 10 波段 0.20，WavMark 在重采样 4 千赫兹与低通为 0.00，说明各方法短板不同。论文据此称在受评无训练方法中只有 CochlearMark 在神经编解码重编码下保留可观检出，该结论成立条件是限定在本文的两个无训练基线与 EnCodec 码率范围内。

**信号编辑 × 神经编解码重编码 × 内容改变变换：** 信号编辑指重采样滤波压缩混响等大体保留时间精细结构的处理，神经编解码重编码指 EnCodec 先压缩再重建波形，内容改变变换指变调音色转换与语音合成这类重写内容的处理。三类处理的共同标尺是是否保留原波形的精细相位结构，这直接决定锁相投影得分能否保留。

另一细节是去除链让 5 种方法全部接近零，内容改变同样接近零，这划出了锁相水印的边界，重建波形即改写相位结构，标记随之丢失。

### 码率与噪声如何改变存活

论文没有做去掉某模块的消融，但给出了两类剂量关系，可视为失败条件的刻画。一是 EnCodec 码率越低存活越低，从 24 千比特的 0.87 降到 6 千比特的 0.20，说明内容保留不等于水印保留，低码率解码器重建了可听波形却改变了精细结构。二是加性噪声越大锁相越差，低频通道的锁相先被破坏，存活随信噪比下降而下降。变调则改变频率到通道的对应关系，同样降低密钥投影。这些都与向量强度的定义一致，频率对不上或相位被打乱，归一化傅里叶幅度就会下降。

尚未评测的是多说话人混叠、长时混响尾巴与极低码率语音编解码的连续曲线，以及同一攻击强度在语音音乐环境音上的差异是否显著，原文只给 pooled 总表，跨语料差异没有展开。

### 边界与容易误读之处

首先是容量边界，当前检测器只报告有无水印，不恢复多比特载荷，密钥投影扩展到多比特仍是未来工作，不能把检出率当成信息传输率。其次是鲁棒性边界，信号编辑可比基线，但变调、音色转换、语音合成与去除链下接近零，低码率神经编解码也明显下降，因此不能宣称对生成式重建鲁棒。第三是听感边界，客观指标在基线范围内不等于主观无感，门控依赖原信号包络，在极安静或瞬态丰富的片段上仍需听。

第四是标定泛化，阈值只在语音 dev 集上标定，音乐与环境音的干净检出略低，跨域误报需要重新校准。最后是资源表中的数值只在单 CPU 上测得，嵌入检测延迟与内存会随实现与时长变化，不能直接当作部署保证。

### 复现第一步与成本几何

复现第一步是搭好可微听神经前端与密钥投影。按原文配置 36 通道 Gammatone，等效矩形带宽从 80 赫兹到 6 千赫兹，内毛细胞低通 3 千赫兹，内部速率 20 千赫兹，神经图帧率 10 千赫兹即 0.1 毫秒 1 帧，密钥方向固定随机种子生成并归一化，阈值乘子 3.5，扰动带限 300 赫兹到 2.5 千赫兹，音频统一 4.0 秒。先在 200 段 LibriSpeech dev-clean 上算干净得分均值与标准差得到阈值，再对每段跑 2 次近似加至多 3 步 Adam 的嵌入，最后用同一前端检测。下表是原文在 Intel Core i7-6850K 单 CPU 上每秒音频的开销，比较问题是轻量 footprint 是否成立，Size 为磁盘占用，Memory 为峰值内存，Compute 与 Latency 两列均为嵌入斜杠检测。

| Method | Size | Memory | Compute (GFLOPs) | Latency (ms) |
| --- | --- | --- | --- | --- |
| CochlearMark | 145 KB | 120 MB | ∼1.0 / 0.13 | 39 / 4.4 |
| AudioSeal | 93 MB | 906 MB | 2.70 / 1.50 | 38 / 21 |
| WavMark | 9.9 MB | 879 MB | 80.6 / 913 | 282 / 4607 |
| Patchwork | 16 MB | 260 MB | ∼0.005 / ∼0.005 | 7.0 / 78 |
| Spread-Spectrum | ∼10 KB | 147 MB | 0.0015 / 0.0007 | 0.5 / 0.3 |

该表显示 CochlearMark 为 145 KB 与 120 MB，计算约 1.0 与 0.13 GFLOPs，延迟 39 与 4.4 毫秒，低于 AudioSeal 的 93 MB 与 906 MB，高于经典扩展频谱。限制是 GFLOPs 与设备无关但内存与延迟与实现相关，且只计每秒音频，不能外推到流式长音频。来源方面，论文脚注给出第三方听神经模型仓库与去除工具链接，前者可用不代表作者已开源本方法，后者只是论文提到的攻击链，不证明作者提供去除代码。是否可运行需按原文环境另行验证。

### 何时值得尝试与还缺什么验证

当需要无训练、轻量、可解释的水印，且主要威胁是常规编辑与较高码率压缩转码时，CochlearMark 值得尝试，因为它不训练模型，嵌入检测在 CPU 上快于实时，且行为可用精细结构是否保留来预判。当威胁包括低码率神经编解码、变调变速、音色转换合成或专用去除工具时，则不应选用当前版本，因为这些处理重建波形，存活接近零。复现时先固定前端、密钥与阈值标定，再验证干净检出与听感，最后复刻 EnCodec 码率曲线与加噪曲线，确认边界与原文一致。

还缺的验证包括多比特扩展后的容量误码、跨语料阈值重标定、主观听感测试，以及携带密钥冗余跨频带时间尺度后能否在可接受降质下抵抗去除，这些在原文只是未来方向。

**频带限制 × 幅度包络门控 × 加性扰动：** 加性扰动指直接加在波形上的水印信号，频带限制指只保留 300 赫兹到 2.5 千赫兹的优化变量，幅度包络门控指用原信号平滑包络在静音区压小扰动。二者相乘构成参数化，既把能量集中在锁相信息集中的频段，又避免在静音处产生可闻噪声。

总体看，论文直接报告的是在所评语料与攻击集上干净检出高、听感在基线范围内、信号编辑可比、神经编解码中无训练方法里唯一保留可观检出，证据支持这些限定结论，但不支持推广到未测处理或多比特场景。

<details>
<summary>📎 论文与评分元数据</summary>

排名：前25% | 文档类型：方法研究 | [arXiv 原文](https://arxiv.org/abs/2610.20105v1)

</details>

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。

- 评分规则：type-aware-v1

- 评分模型：muse-spark-1.3-contributor

- 评分请求协议：openai_responses

---

[← 返回 2026-10-16 语音/音乐/音频论文速递](/audio-paper-digest-blog/posts/2026-10-16/)
