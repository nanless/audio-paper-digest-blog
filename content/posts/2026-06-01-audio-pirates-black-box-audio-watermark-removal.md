---
title: "Black-box Audio Watermark Removal via Diffusion Priors"
date: 2026-06-01
draft: false
tags: [音频水印, 扩散模型, 音频安全, 形式化分析]
categories: [论文速递]
description: "针对语音/音乐/环境声的神经音频水印，DiffErase 在不查询检测器且不知水印方案的黑盒条件下，通过梅尔频谱的中间噪声扰动与预训练扩散去噪重生实现去除，并在五种水印系统上将检测 TPR 降至近 0 的同时以 t* 控制保真度代价。"
hiddenInHomeList: true
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_arxiv_id: "2605.30614"
paper_digest_workbench_contract: "researcher-workbench-v1"
paper_digest_reader_title: "不可听水印为何在扩散重生面前失效：DiffErase 的黑盒去除与保真权衡"
paper_digest_original_title: "Black-box Audio Watermark Removal via Diffusion Priors"
paper_digest_arxiv_version: null
paper_digest_arxiv_versioned_id: null
paper_digest_arxiv_abs_url: "https://arxiv.org/abs/2605.30614"
paper_digest_arxiv_pdf_url: "https://arxiv.org/pdf/2605.30614.pdf"
paper_digest_primary_task: "音频水印"
paper_digest_taxonomy_contract: "paper-taxonomy-flat-tags-compat-v1"
paper_digest_taxonomy_selection_contract: "paper-taxonomy-selection-v1"
paper_digest_taxonomy_registry_version: "paper-taxonomy-v1"
paper_digest_taxonomy_registry_sha256: "15c82a567ce5a55dc1175684ed08b64c158558639d9c8fb822c9587ec32a8778"
paper_digest_taxonomy_concepts: [{"facet":"task","id":"task.watermarking","label":"音频水印"},{"facet":"method","id":"method.diffusion","label":"扩散模型"},{"facet":"research_focus","id":"research_focus.security","label":"音频安全"},{"facet":"method","id":"method.formal-analysis","label":"形式化分析"}]
paper_digest_primary_method: "扩散模型"
paper_digest_score: 7.9
paper_digest_rank_bucket: "前25%"
paper_digest_document_type: "方法研究"
paper_digest_one_sentence: "针对语音/音乐/环境声的神经音频水印，DiffErase 在不查询检测器且不知水印方案的黑盒条件下，通过梅尔频谱的中间噪声扰动与预训练扩散去噪重生实现去除，并在五种水印系统上将检测 TPR 降至近 0 的同时以 t* 控制保真度代价。"
paper_digest_authors: [{"affiliations":["University of Houston"],"name":"Lingfeng Yao"},{"affiliations":["Waseda University"],"name":"Xincong Zhong"},{"affiliations":["University of Houston"],"name":"Chenpei Huang"},{"affiliations":["UC Berkeley"],"name":"Xuandong Zhao"},{"affiliations":["University of Hawaii at Mānoa"],"name":"Hanqing Guo"},{"affiliations":["The University of Electro-Communications"],"name":"Aohan Li"},{"affiliations":["Waseda University"],"name":"Jiang Liu"},{"affiliations":["Keio University"],"name":"Tomoaki Ohtsuki"},{"affiliations":["University of Houston"],"name":"Miao Pan"}]
paper_digest_abstract_sha256: "751cb236a78503380ede03181a3d5aee09414206c78a7cd0550cf6f48a0ecca4"
paper_digest_sidecars: {"citation.bib":{"sha256":"4a5213fc78002f15f09884b54624fa9e0939f06ec8556f2f88e8ef7a579686fd","url":"/audio-paper-digest-blog/data/papers/2026-06-01/2605-30614/citation.bib"},"citation.json":{"sha256":"41b607d207bcc6f015dfa8e7ce545ee252d30358ddd02a1a5b81f66a3d365beb","url":"/audio-paper-digest-blog/data/papers/2026-06-01/2605-30614/citation.json"},"citation.ris":{"sha256":"cfe1c42b6686e7ec34366e80292404afcbd8873411d3ffc074631b7f641d04f7","url":"/audio-paper-digest-blog/data/papers/2026-06-01/2605-30614/citation.ris"},"rethink-context.json":{"sha256":"42e278a60bd195cb547ca781c84f461208c35e954bbd71a8c4711837e3f4014f","url":"/audio-paper-digest-blog/data/papers/2026-06-01/2605-30614/rethink-context.json"}}
paper_digest_api_reader_contract: "beginner-researcher-v3"
paper_digest_api_reader_article_sha256: "a9cb405e956fec836c0a5251f75db583c2c834ab5f9ef212a9d503f7c6dcb5e7"
paper_digest_api_reader_plan_sha256: "0618350dfb08e34c2be867e7cff8073870d0f847b462a122c58ef407c6fb9716"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings-v4"
paper_digest_api_reader_source_bindings_sha256: "653bf07d898d3ed152e31cc75025fa93cbaa63d099643c53c713557deab724ab"
paper_digest_api_reader_source_table_count: 4
paper_digest_api_reader_source_formula_count: 3
paper_digest_api_reader_structured_artifacts_sha256: "53c4a95cf5bc8151799217d03580ab36c4a086133995e9f6effce468ba6cf4a4"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity-v1"
paper_digest_api_reader_author_identity_sha256: "7f930427e5973e00f7a324821e130741caeaf93d595a97d87b07b9be05c970e3"
paper_digest_api_reader_author_count: 9
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity-v1"
paper_digest_api_reader_resource_identity_sha256: "2117514f17b34bba50fcccb8c2bd52cb004dd9cea0ab2bf0886811af395b389d"
paper_digest_api_reader_resource_count: 2
paper_digest_api_reader_figure_persistence: "ephemeral-no-persisted-figure-assets-v1"
paper_digest_api_reader_decision_projection: "api-reader-decision-projection-v2"
---

# 📄 不可听水印为何在扩散重生面前失效：DiffErase 的黑盒去除与保真权衡

> 英文题目：*[Black-box Audio Watermark Removal via Diffusion Priors](https://arxiv.org/abs/2605.30614)*

> 标签：#音频水印 | #扩散模型 | #音频安全 | #形式化分析
>
> 评分：**7.9/10** | 创新 1.4/2 | 技术严谨 1.0/1.5 | 实验充分 1.3/1.5 | 清晰度 0.8/1 | 影响力 1.2/1.5 | 开源 1.0/1.5 | 可复现 0.3/0.5 | 工程/实践 0.9/1.5


## 👥 作者与机构

- Lingfeng Yao：University of Houston
- Xincong Zhong：Waseda University
- Chenpei Huang：University of Houston
- Xuandong Zhao：UC Berkeley
- Hanqing Guo：University of Hawaii at Mānoa
- Aohan Li：The University of Electro-Communications
- Jiang Liu：Waseda University
- Tomoaki Ohtsuki：Keio University
- Miao Pan：University of Houston

## 📌 核心摘要

本文任务是在仅有已加水印波形\(x_w\)的黑盒条件下生成去除水印且保持听感的波形\(\hat{x}_0\)，难点在于水印扰动幅度小且与内容耦合、攻击者无法查询检测器或获知嵌入架构因而难以定向擦除。方法链首先经STFT转80维梅尔谱保留能量包络与时序结构以适配神经声码器并压缩表示，输出的梅尔谱进入下一步加噪。接着按SDEdit式前向加噪至归一化噪声水平\(t^*=t/N=0.1\)以\(\sqrt{\bar{\alpha}_{t^*}}\)缩放信号并淹没水印残差，得到中间态\(x_{t^*}\)作为去噪起点。最后用在干净音频上预训练的去噪网络\(\epsilon_\theta\)沿概率流ODE逆向重建梅尔谱并经BigVGAN声码器还原波形，将样本拉回自然流形并对离流形水印分量形成指数收缩，无需知晓水印方案。相比依赖加噪、重压缩或需查询检测器的对抗改写，该机制利用扩散先验收缩而非破坏性变换，在去除水印的同时保留感知质量。在LibriSpeech语音域评测设置下，DiffErase-mel对Perth水印的TPR@1%FPR指标从1.00降至0.00。结论的适用边界在于\(\Delta\)-不可感知小扰动且梅尔域扩散先验匹配的场景，失败条件为\(\ell_2\)扰动高4至10倍的Perth在音乐与环境声上仍有残留如音乐上TPR为0.46、环境声上0.19，尚未验证对更大扰动或未见域外声码器的外推。原文未披露训练、推理或部署成本。

## 🔗 开源与复现资源

- 代码相关资源：<https://differase.github.io/DiffErase/> — 链接可访问（HTTP 200）

- 演示资源：<https://differase.github.io/DiffErase/> — 链接可访问（HTTP 200）

可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 输入是什么、要输出什么、哪些信息必须保留？

本解读面向刚进入语音/音乐/音频方向的研究生，目标是让你能按原文复述 DiffErase 的黑盒水印去除流程，并在相同实验条件下复现关键现象。输入是仅有一段带水印音频 xw，攻击者不知道水印的嵌入结构、密钥 k、检测器参数，也不能查询检测器分数。输出是一段攻击后音频 x̂，要求同时满足两点：检测器判定为无水印或消息提取准确率低于阈值，且与带水印音频的感知距离低于可听阈值。论文把水印建模为对干净音频 x0 的微小扰动 δ，即 xw=x0+δ，且‖δ‖2≤Δ 以保证不可听。

评估时必须同时报告安全性与保真度：安全性用 TPR@1%FPR 衡量，越低越好；保真度用 SQUIM-MOS、ViSQOL 与主观 MUSHRA 衡量，越高越好。代码与演示当前可用，地址为<https://differase.github.io/DiffErase/>，资源状态为 available 可公开访问。本研究关注的是生成式音频治理中的水印鲁棒性评估，不是提升水印嵌入本身。后续各节按学习依赖展开：先界定任务与现有路线，再给出方法全景，随后拆组件与计算，说明无训练的调用与推理，交代实验条件，最后用数字结果与反证收束。

### 同输入同目标的已有路线为何不够实用？

相关工作可按输入、目标与运行阶段对比。神经音频水印本身分为嵌入与检测两端，AudioSeal 与 SilentCipher 采用生成器-检测器在学习表征中嵌入，WavMark 与 IDEAW 用可逆网络建模可逆变换，TimbreWM 与 DeAR 在频域嵌入，Perth 为商业系统。它们的共同目标是不可听且对常见失真鲁棒，但原文指出其对扩散重生的脆弱性尚未被系统检验。攻击路线分 3 类。第一类是信号级变换，如变调、变速、滤波、加噪与重录，不需水印知识但要有效去除往往引入可听失真。

第二类是覆写攻击，嵌入第二重水印干扰原水印，通常需要知道目标嵌入架构。第 3 类是对抗攻击，迭代优化波形扰动以欺骗检测器，但需要查询检测器输出，在私有检测器场景不现实。扩散模型在音频中已有 DiffWave 等波形生成与声码器、文本到音频与音频修复等应用；在防御侧有 DiffPure 等用扩散去噪抑制对抗扰动，在图像侧已有重生攻击去除不可见水印的证据。

这些工作提示扩散对小幅不可听扰动有抑制作用，但是否能以黑盒方式在音频水印上同时实现强去除与高保真，仍是空白。DiffErase 的定位正是填补这一空白，且明确选择梅尔频谱而非波形或线性频谱作为扩散域，以兼顾去除与重建质量。

### 黑盒威胁模型与成功判定如何形式化？

形式化上，干净音频记为 x∈ℝ^T，嵌入器输出 xw=Embed(x,m,k)，其中 m 为可选的 L 比特消息，k 为密钥或等价的秘密参数。检测分为两类：对带消息方案，提取器输出 m̂=Ext(x,k)，若为带水印则应与 m 一致，否则为随机比特；对零比特存在性方案，检测器输出分数 s=Det(x,k)∈[0,1]，阈值 γ 判定 Result=𝕀[s≥γ]。攻击者在黑盒威胁模型下仅能访问 xw，不知道架构、权重与超参，也不能查询检测器分数，但有算力用扩散模型处理 xw。攻击成功定义为 Result(x̂,k)=0 或 Acc(Ext(x̂,k),m)<η，同时感知距离 Q(x̂,xw)≤q0。

这一定义把安全与保真解耦：前者是统计可检测性，后者是人耳可听性。论文评估的 5 种目标系统为 AudioSeal、TimbreWM、WavMark、Perth 与 SilentCipher，均为开源或可复现的最新神经水印。数据集覆盖三域：语音用 LibriSpeech 的 100 小时子集，音乐用 FMA-small，环境声用 Clotho，每域随机抽 100 段评估。理解该形式化后，才能正确解读后续的 TPR 与 MUSHRA 数字：TPR 下降表示安全失效，MUSHRA 下降表示保真代价。

### DiffErase 的全流程如何走通一个样本？

先沿一个样本走通全流程，再看公式。输入为带水印波形 xw。第一步经 STFT 与梅尔滤波得到梅尔频谱 Mel(xw)，这是后续扩散的操作对象。第二步是扩散擦除：按闭式前向边缘把 Mel(xw) 扰动到中间时刻 t*，得到 xt*，t* 是 0 到 1 归一化噪声水平，控制去除与保真的权衡。第三步是语义重建：从 xt* 出发，用预训练去噪网络沿逆向采样回到 t=0，得到重生的梅尔频谱。

第四步用神经声码器把重生梅尔频谱逆回波形 x̂0。整个过程不涉及水印模型的梯度或查询，完全黑盒。

** 扩散先验 × 黑盒攻击：** 扩散先验指在干净音频上训练的去噪模型对自然数据流形的建模能力，负责把偏离流形的样本拉回高密度区；黑盒攻击指攻击者仅持有带水印音频、无法访问水印嵌入结构与检测器。两者搭配的理由是：水印为保证不可听而做的小幅结构化扰动恰好是离流形扰动，扩散先验无需知道水印细节即可通过去噪收缩该扰动，从而在黑盒条件下实现去除。

为明确嵌入的数学含义，先看嵌入定义。

\[x_{w}=\mathsf{Embed}(x,m,k)\in\mathbb{R}^{T}.\]

该式说明 xw 由干净音频、消息与密钥共同决定，攻击者仅见 xw。DiffErase 的关键在于把 xw 视为 x0+δ，并在梅尔域用扩散先验收缩 δ。图 1 展示了这一全景：左侧水印音频经 STFT 到频谱，中间扩散模型内含前向与反向两条路径，右侧声码器重建攻击音频并使检测器失效，底部滑杆直观表达 t* 的权衡。

> **看图路径：** 1. 沿左侧水印音频经 STFT/Rescale 到梅尔频谱，再进入中间灰色扩散模型的箭头，确认前向加噪 0→t* 与反向去噪 t*→0 两条子路径；2. 观察底部噪声水平滑杆，左侧 Better Fidelity 与右侧 Stronger Removal 的权衡标注，确认 t* 越大去除越强但保真越低；3. 对比左右两侧检测器结果：左侧 Detected 与右侧 Not Detected，确认攻击目标是使同一检测器失效；4. 查看输出侧 Vocoder 将频谱重建为波形的垂直箭头，确认重建发生在去噪之后

[![原论文 Figure 1：Overview of DiffErase. Watermarked audio is converted to a mel-spectrogram via STFT, perturbed to…](https://arxiv.org/html/2605.30614v1/illustration_nobox.png)](https://arxiv.org/html/2605.30614v1/illustration_nobox.png)

*论文图 1。原论文 Figure 1:：“Overview of DiffErase. Watermarked audio is converted to a mel-spectrogram via STFT, perturbed to an intermediate noise level t^* via forward noising, and then denoised back to t=0.”。*

从像素看，图 1 中央灰色框为 Audio Diffusion Model，内部上下两排频谱块分别标注 Forward noising(0→t*) 与 Reverse denoising(t*→0)，中间时间轴从 t=0 指向 t=t*，底部双向箭头标注 Better Fidelity 与 Stronger Removal，说明增大 t* 增强去除但降低保真。左右两侧分别为输入与输出频谱，底部检测器标签由 Detected 变为 Not Detected，完整闭环了输入→表示→扩散→重建→验证的路径。理解该图后，再进入组件细节与公式实现。

### 为何选梅尔频谱与两类扩散实现？

表示选择是方法成败的关键。论文对比 3 种表示：波形域扩散、线性频谱扩散与梅尔频谱扩散。波形域维度高、时序依赖长，直接扩散易过平滑与时序漂移；线性频谱扩散若复用原始相位，重生的幅度与保留相位不一致会产生可听伪影。梅尔频谱保留能量轮廓与包络，维度适中且与现代声码器天然衔接，因此被选为默认域。

** 梅尔频谱 × 声码器：** 梅尔频谱是通过 STFT 再经梅尔滤波得到的感知相关时频表示，保留能量轮廓与时序包络且维度适中；声码器负责把梅尔频谱逆变换回波形。组合意义在于：扩散在梅尔域操作可稳定建模并抑制水印纹理，而现代神经声码器能高质量重建波形，避免直接在波形域扩散导致的过平滑与时序漂移，或在线性频谱上保留原始相位带来的幅相不一致伪影。

具体实现分 2 个阶段。阶段一前向加噪有闭式采样：

\[x_{t}=\sqrt{\bar{\alpha}_{t}}\,x_{0}+\sqrt{1-\bar{\alpha}_{t}}\,\epsilon,\qquad\epsilon\sim\mathcal{N}(\mathbf{0},\mathbf{I}).\]

其中 ᾱt 为方差计划的累积系数，ε 为标准高斯噪声。该式说明 xt 可由 x0 直接采样，无需逐步迭代，便于把 xw 精确扰动到 t*。t* 越大，√ᾱt* 越小，信号成分被缩放得越弱，水印幅值随之衰减，但重建难度上升。

** 前向加噪 × 反向去噪：** 前向加噪按固定方差计划把带水印梅尔频谱逐步扰动到中间时刻 t*，用缩放因子削弱原始水印幅值并注入高斯噪声；反向去噪则用预训练分数模型沿概率流 ODE 逐步去噪回 t=0。前向负责稀释与掩盖结构化水印，反向负责利用干净数据先验收缩残差，二者以 t* 为旋钮形成去除强度与保真度的可控权衡。

阶段二逆向去噪学习均值预测：

\[\mu_{\theta}(x_{t},t)=\frac{1}{\sqrt{\alpha_{t}}}\left(x_{t}-\frac{\beta_{t}}{\sqrt{1-\bar{\alpha}_{t}}}\,\epsilon_{\theta}(x_{t},t)\right).\]

其中 εθ(xt,t) 为噪声预测网络，μθ 为逆向均值。该式对应训练目标最小化‖ε−εθ‖2，推理时按调度从 t* 逐步去噪回 0。论文实现两类骨干：DiffErase-mel 直接在梅尔域用 UNet2D 去噪并以 BigVGAN 重建波形；DiffErase-latent 先用 VAE 把梅尔频谱编码到潜空间，在潜空间扩散后再解码并以 HiFi-GAN 重建，前者保真略高，后者计算更省且因 VAE 瓶颈去除更强。理论上，水印被视为离流形扰动，分数在法向指向流形，对法向残差产生收缩。

** 流形假设 × 离流形扰动：** 流形假设认为干净音频集中在低维流形附近；离流形扰动指与切空间正交、改变统计特性但不改变语义的分量。水印为保持不可听，其扰动被建模为以离流形分量为主。扩散分数在法向近似为指向流形的高斯恢复力，因此对离流形成分产生负内积的收缩作用，这解释了为何去噪轨迹能指数衰减水印残差。

两类实现共享同一 t* 权衡：语音上 t*=0.1 已能使最强水印失效且保持高 ViSQOL，音乐与环境声需更大 t*。后续训练与实验节将说明预训练模型的冻结与调用方式。

### 本研究训练了什么、冻结了什么、如何推理？

本研究没有训练水印模型，也没有为攻击而微调水印检测器；DiffErase 的扩散骨干与声码器均为预训练且在攻击时冻结，仅做推理。DiffErase-mel 基于 diffusers 库，UNet2D 把梅尔频谱当单通道图像处理，梅尔维度 80，声码器为 BigVGAN 的 bigvgan_v2_22khz_80band_256x。DiffErase-latent 基于 AudioLDM 管线，梅尔维度 64，先经 AutoencoderKL 编码到通道 8 的潜空间，扩散 UNet 配置为图像尺寸 64、基通道 128、每阶段 2 个残差块、通道倍数[1,2,3,5]、注意力分辨率{8,4,2}，重建用 HiFi-GAN。两者均在 LibriSpeech、FMA-small 与 Clotho 的训练划分上学习干净音频先验，评估时仅在每域 100 段上测试。

推理时对每段带水印音频执行 1 次前向到 t* 再逆向到 0 的重生，无需梯度回传到水印模型，也无需查询检测器。采样器对比了 DDPM 与 DDIM，DDPM 在相同 t* 下去除更彻底但更慢。超参中 t* 以归一化比值 t/N 报告，N=1000，论文主要报告 t*=0.1 附近的权衡。未报告的细节包括扩散训练的具体优化器与学习率调度，复现时应以官方实现为准，不从模型名推定训练细节。推理成本主要来自逆向步数，潜空间版本因维度压缩而更快。

### 在什么数据、基线与指标下比较才算公平？

实验按问题组织：测什么、与谁比、条件是否一致、指标方向如何。数据上三域独立评估，语音、音乐、环境声各 100 段，训练与测试划分不重叠，避免信息泄露。基线分 3 类且条件一致：信号级包括变调±1 半音、变速 0.95–1.05、低通 4000 Hz、高通 500 Hz、加性高斯噪声 σ=0.01；编解码包括 MP3 32 kbps 与 EnCodec 24 kbps；自适应包括 Square Attack 在频谱域、语音查询预算 10000 且扰动界 0.02、音乐与环境声扰动界增至 0.2 以求有效。

所有攻击仅以带水印音频为参考计算感知指标，符合黑盒设定。指标方向明确：TPR@1%FPR 越低越好，SQUIM-MOS 与 ViSQOL 为 1–5 越高越好，MUSHRA 为 0–100 越高越好，主观测试有 16 名有效被试经 webMUSHRA 完成。

**TPR@1%FPR × MUSHRA：** TPR@1%FPR 是在固定 1% 误报率下检测器真阳率，越低表示去除越彻底，属于客观安全性指标；MUSHRA 是 0-100 主观听感评分，越高表示保真越好。两者分工互补：前者衡量水印是否可被验证，后者衡量攻击是否可听；论文同时报告二者以证明去除不是以严重失真换来。

公平性体现在：同一批带水印样本、同一检测阈值、同一感知参考。论文还通过ℓ2 距离分析水印强度，发现 Perth 扰动幅度约为其他方法的 4–10 倍，这为后续解释其残留可检测性提供依据。统计上报告 TPR 与主观均值，未报告置信区间，解读时应关注跨域一致性而非单点数值。

### 主结果显示什么收益、付出什么代价、谁未被完全去除？

主结果回答：在黑盒且保真的约束下，DiffErase 能否稳定使检测失效。语音域上，信号级基线要么失效要么失真严重，编解码基线保真高但对 AudioSeal 与 Perth 几乎无效，自适应 Square Attack 虽能降 TPR 但 MUSHRA 仅 54.07。DiffErase 在 t*=0.1 时对 5 种水印均实现 TPR 近 0，同时保持高保真。

为量化保真与去除的权衡，先看客观感知指标的直接对比。以下表以相邻独立段落呈现：表前提出比较问题——在相同带水印参考下，本文方法是否能在去除的同时保持客观质量不低于强基线；表后解释收益与代价。

| 评估维度 | 方法 | SQUIM-MOS | ViSQOL | MUSHRA |
| --- | --- | --- | --- | --- |
| 基线攻击 | Pitch shift | — | 1.165 | 61.66 |
| 本文方法 | DiffErase-latent (t*=0.1) | 4.214 | 3.477 | — |
| 本文方法 | DiffErase-mel (t*=0.1) | 4.423 | 3.961 | — |

该表显示 Pitch shift 虽能去除但 ViSQOL 仅 1.165 且 MUSHRA 61.66，明显低于 DiffErase 的 3.477–3.961 与 4.214–4.423，说明信号级变换以可听失真换去除，而扩散重生在保持感知结构的同时抑制水印。代价是 DiffErase 仍有轻微平滑，MUSHRA 相对带水印参考下降 2–10 点，但在可接受范围。

再看安全性指标的跨域一致性。表前问题：在三域与五系统上，TPR 是否从高降至近 0 且代价可控；表后需指出未完全去除的例外。

| 域 | 水印系统 | 攻击前 TPR@1%FPR | 攻击后 TPR@1%FPR | 感知代价 |
| --- | --- | --- | --- | --- |
| Speech | AudioSeal/WavMark/TimbreWM/Perth/SilentCipher | 1.00 | 0.00 | MUSHRA 下降 2–10 |
| Music | 同上 | 1.00 | 0.00 | 同上 |
| Env | 同上 | 1.00 | 0.00 | 同上 |

该表概括论文报告的总体趋势：多数系统在三域上 TPR 从 1.00 降至近 0.00，MUSHRA 仅下降 2–10 点。但存在未胜出项：Perth 在音乐上残留 TPR 0.46、环境声上 0.19，语音上可完全去除。原因与ℓ2 距离一致，Perth 嵌入更强扰动，需更大 t* 才能完全去除，这也解释了为何其保真下降相对更大。

> **看图路径：** 1. 先看横轴五种水印方法与纵轴 L2 距离，确认度量是干净与带水印音频的ℓ2 距离；2. 按图例区分三色柱：Speech、Env、Music，观察 Perth 在三域上柱高远超其他四种方法；3. 对比 SilentCipher 与 WavMark 等在 Speech 上接近零的柱高，确认其扰动幅度小；4. 结合柱高差异思考去除难度：扰动越大越难在低 t* 下完全去除，需更大噪声水平

[![原论文 Figure 3：The \\ell_2 distance between clean and watermarked audio across five watermarking methods on three…](https://arxiv.org/html/2605.30614v1/l2_distance.svg)](https://arxiv.org/html/2605.30614v1/l2_distance.svg)

*论文图 3。原论文 Figure 3:：“The \ell_2 distance between clean and watermarked audio across five watermarking methods on three domains. Perth embeds substantially stronger perturbations.”。*

从像素看，图 3 横轴为 5 种水印方法，纵轴为 L2 距离，3 组柱分别代表 Speech、Env、Music。Perth 的三根柱显著高于其他 4 组，Music 柱最高超过 2000，Env 接近 2000，Speech 约 350，而 SilentCipher 与 WavMark 在 Speech 上接近零。该分布支持强水印更鲁棒但更易被感知的判断，也为 t* 需随域调整提供依据。总体上，DiffErase 在语音上实现完全去除且保真最高，音乐与环境声上需在去除与保真间进一步权衡。

### 去除能力来自扩散还是重建？采样器与表示如何影响？

消融旨在反证：若去除仅来自波形重建或采样器选择，则扩散本身的贡献不成立。论文设计两组对照。第一组隔离重建：仅用 Griffin-Lim 做频谱到波形的重建，不经过扩散扰动与去噪；第二组对比采样器：相同 t* 下比较 DDPM 与 DDIM。

先看噪声水平 t* 的单调权衡。表前问题：增大 t* 是否单调提升 FNR 但单调降低 ViSQOL，且是否存在阈值使强水印失效；表后解释阈值与域差异。

| 域 | 噪声水平 t* | ViSQOL | FNR | 检测结果 |
| --- | --- | --- | --- | --- |
| Speech (Perth) | 0.10 | >3.5 | ≈1 | 不可检 |
| Music (Perth) | 0.20 | 下降 | 上升但未达 1 | 仍可检 |
| Env (Perth) | 0.20 | 下降 | 上升但未达 1 | 仍可检 |

该表对应论文图 2 的趋势：t* 从 0.01 增至 0.2，FNR 上升而 ViSQOL 下降；语音上 t*≥0.10 即可使 Perth 不可检且 ViSQOL 仍>3.5，音乐与环境声即使 0.20 仍有残留，说明强扰动水印需更大 t*。

再看重建与采样器的贡献。表前问题：在排除 AudioSeal 与 SilentCipher 因单纯重建已失效的干扰后，TimbreWM、Perth 与 WavMark 的去除是否依赖扩散；表后区分 DDPM 与 DDIM 的细粒度效应。

| 消融条件 | 方法 | TimbreWM TPR | Perth TPR | WavMark TPR |
| --- | --- | --- | --- | --- |
| 仅重构 | Griffin-Lim only | 1.00 | 1.00 | 1.00 |
| 加入扩散 | DiffErase-mel + GLA | 0.00 | 0.18 | 0.00 |
| 加入扩散 | DiffErase-latent + GLA | 0.00 | 0.00 | 0.00 |

该表显示仅 Griffin-Lim 重建时 TPR 保持 1.00，加入扩散后 TimbreWM 与 WavMark 降至 0.00，Perth 降至 0.18 或 0.00，证明去除主要来自扩散而非重建。采样器对比中，DDPM 在相同 t* 下对 Perth 去除更强，DDIM 虽快但残留更高，说明细粒度逆向轨迹更能收缩残差。

**DDPM × DDIM：** DDPM 是步数多、随机性强的去噪采样，轨迹细粒度；DDIM 是步数少、确定性更强的加速采样。两者在相同 t* 下对比可检验去除是否依赖细粒度收缩：论文显示 DDPM 对 Perth 等强水印去除更彻底，说明更细的逆向轨迹能更充分地过滤残差，但代价是推理更慢。

表示消融进一步显示：波形扩散虽能去除但 SQUIM-MOS 仅 2.541 且 MUSHRA 71.21，过平滑严重；线性频谱扩散因幅相不一致产生伪影，MUSHRA 79.66；梅尔与潜空间版本在去除与保真间取得最佳平衡。这些反证共同支持扩散先验是去除的主因，而非重建或采样器的偶然效应。

### 哪些边界未被评测、哪些推断仍待验证？

论文明确报告的局限与待验证点需区分于未测量的推断。首先，Perth 等强扰动水印在音乐与环境声上未被完全去除，说明不可听性与鲁棒性的矛盾：增大扰动可提升对扩散的抵抗，但会降低感知质量并仍可能被更大 t* 去除。其次，主观 MUSHRA 虽显示保真优势，但未报告延迟、实时因子与计算预算，推理开销与总体趋势不能等同于每段音频的实时性。

第三，评估限于 5 种开源水印与三域各 100 段，未覆盖自适应水印训练或检测器对抗微调等更强防御，也未测量误判率在干净音频上的变化。理论部分给出指数衰减界与阈值 t*min 的存在性，但依赖流形假设、局部高斯近似与 Lipschitz 检测器等假设，实际音频流形的几何与分数模型的误差未被量化，因此阈值公式应视为支持性解释而非精确预测。

最后，扩散重生会轻微平滑细粒度纹理，t* 越小保留越好但残留风险越高，应用时需按域与水印强度校准 t*，不能把语音上的 0.10 直接推广到所有场景。

### 复现应先做什么、关键超参与信息条件是什么？

复现时先确认信息条件：仅持有带水印音频，无需水印密钥与检测器。第一步准备数据：按论文划分准备 LibriSpeech train-clean-100、FMA-small 与 Clotho，每域留 100 段作评估，采样率与梅尔参数需与声码器匹配，DiffErase-mel 用 80 梅尔、DiffErase-latent 用 64 梅尔。第二步加载预训练：diffusers 的 UNet2D 与 BigVGAN，或 AudioLDM 的 AutoencoderKL 与 HiFi-GAN，权重冻结不训练。第三步实现攻击：对每段音频计算梅尔频谱，按式(9) 前向采样到 t*，再按式(11) 的逆向均值用 DDPM 从 t* 去噪回 0，最后经声码器重建。关键超参为 t*，论文以归一化比值报告，主结果用 0.1，强水印或音乐/环境声可尝试 0.15–0.2 并监测 ViSQOL 与 FNR 权衡。

评估时以带水印音频为参考计算 SQUIM-MOS、ViSQOL，并用官方检测器在 1%FPR 下计算 TPR，同时做 MUSHRA 主观校验。代码与演示当前可用，地址为<https://differase.github.io/DiffErase/>，可直接运行官方脚本复现表 1 与图 2 趋势。未报告的训练优化细节不应自行猜测，复现失败时优先核对梅尔维度、声码器采样率与扩散步数 N=1000 的一致性。

### 何时值得尝试 DiffErase、还能补哪项验证？

何时值得尝试：当需要评估音频水印在黑盒、保真约束下的真实鲁棒性，或需要一个无需查询检测器的强基线时，DiffErase 是首选。其优势在于利用干净音频先验而非水印细节，对多域与多系统一致有效，且 t* 提供可解释的权衡旋钮。何时不值得：若场景要求零失真或实时流式处理，需权衡扩散的平滑与推理成本；若水印设计已显式考虑扩散重生并增大扰动，单纯 t*=0.1 可能不足，需更大 t* 或结合其他变换。

还需补的验证包括：在更大规模与更多语种/乐器上的泛化、与水印对抗训练的联合评估、对干净音频误报率与下游任务如语音识别的影响、以及端到端延迟与内存的系统测量。总体判断是：不可听性本身使水印扰动易被扩散先验视为离流形噪声而被收缩，未来水印设计需显式考虑扩散重生威胁，例如在流形切向嵌入或引入可验证的语义绑定，而评估协议应把 DiffErase 这类黑盒重生攻击纳入标准基线。

<details>
<summary>📎 论文与评分元数据</summary>

排名：前25% | 文档类型：方法研究 | [arXiv 原文](https://arxiv.org/abs/2605.30614)

</details>

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。

- 评分规则：type-aware-v1

- 评分模型：muse-spark-1.2-contributor

- 评分请求协议：openai_responses

---

[← 返回 2026-06-01 语音/音乐/音频论文速递](/audio-paper-digest-blog/posts/2026-06-01/)
