---
title: "PAPR-Aware Multimodal Token Transmission in MLLM-Based Multiuser Networks"
date: 2026-09-10
draft: false
tags: [音视频问答, 多模态学习, LoRA, 对比学习, 音视频]
categories: [论文速递]
description: "针对多用户 OFDM 下多模态 Token 经 Modified Rapp 功放非线性失真导致任务精度与能效下降的问题，MAPS 用两阶段训练在嵌入空间联合优化跨模态对齐与均衡 PAPR 抑制，在 IBO=3 dB 时相对同条件基线获得约 64.5% AVQA 精度提升与约 64.4% 任务导向能效提升，代价是引入方差均衡与锚定重构等额外约束以稳定训练。"
hiddenInHomeList: true
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_arxiv_id: "2609.08464"
paper_digest_workbench_contract: "researcher-workbench-v1"
paper_digest_reader_title: "把波形峰值关进语义空间：MAPS 如何在非线性功放下同时做对齐与 PAPR 抑制"
paper_digest_original_title: "PAPR-Aware Multimodal Token Transmission in MLLM-Based Multiuser Networks"
paper_digest_arxiv_version: null
paper_digest_arxiv_versioned_id: null
paper_digest_arxiv_abs_url: "https://arxiv.org/abs/2609.08464"
paper_digest_arxiv_pdf_url: "https://arxiv.org/pdf/2609.08464.pdf"
paper_digest_primary_task: "音视频问答"
paper_digest_taxonomy_contract: "paper-taxonomy-flat-tags-compat-v1"
paper_digest_taxonomy_selection_contract: "paper-taxonomy-selection-v1"
paper_digest_taxonomy_registry_version: "paper-taxonomy-v1"
paper_digest_taxonomy_registry_sha256: "15c82a567ce5a55dc1175684ed08b64c158558639d9c8fb822c9587ec32a8778"
paper_digest_taxonomy_concepts: [{"facet":"task","id":"task.av-question-answering","label":"音视频问答"},{"facet":"method","id":"method.multimodal-learning","label":"多模态学习"},{"facet":"method","id":"method.lora","label":"LoRA"},{"facet":"method","id":"method.contrastive","label":"对比学习"},{"facet":"signal","id":"signal.audiovisual","label":"音视频"}]
paper_digest_primary_method: "多模态学习"
paper_digest_score: 5.6
paper_digest_rank_bucket: "前50%"
paper_digest_document_type: "方法研究"
paper_digest_one_sentence: "针对多用户 OFDM 下多模态 Token 经 Modified Rapp 功放非线性失真导致任务精度与能效下降的问题，MAPS 用两阶段训练在嵌入空间联合优化跨模态对齐与均衡 PAPR 抑制，在 IBO=3 dB 时相对同条件基线获得约 64.5% AVQA 精度提升与约 64.4% 任务导向能效提升，代价是引入方差均衡与锚定重构等额外约束以稳定训练。"
paper_digest_authors: [{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Molka Trabelsi"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Rafik Zayani"}]
paper_digest_abstract_sha256: "b16234bbfd978cdc596c230c5fce73c6bf1719bf838dc4f3a845c0ffa63b7c95"
paper_digest_sidecars: {"citation.bib":{"sha256":"5e02f87e79fe97d066af20e19b1b865143312b297732e42523faaec2db4fac7e","url":"/audio-paper-digest-blog/data/papers/2026-09-10/2609-08464/citation.bib"},"citation.json":{"sha256":"f95c33bc2e86d35c2804c8c747048e04f9dffcb616b835d24be922f29bc12352","url":"/audio-paper-digest-blog/data/papers/2026-09-10/2609-08464/citation.json"},"citation.ris":{"sha256":"3472132aeba6fe92d6c47309225befbec6b537e70ab3ec874f8db7dbaceae9d3","url":"/audio-paper-digest-blog/data/papers/2026-09-10/2609-08464/citation.ris"},"rethink-context.json":{"sha256":"f8392d49bcd7e087240d7ca9d15d98eb42943569f01d9d8fa69e2b1fc3370b13","url":"/audio-paper-digest-blog/data/papers/2026-09-10/2609-08464/rethink-context.json"}}
paper_digest_api_reader_contract: "beginner-researcher-v3"
paper_digest_api_reader_article_sha256: "e691a446687b4bc410f60014798b98c9ab180c16a6046822e0d8d31c86775395"
paper_digest_api_reader_plan_sha256: "f744b752c62619ac8cd4a43f917b4fcc262ab2b571621baeeffcc3c600a243c5"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings-v4"
paper_digest_api_reader_source_bindings_sha256: "01b6ba2a0ee496469476529f3a1c871c08c8f834b9aaabc602c56852f9f5c7fd"
paper_digest_api_reader_source_table_count: 4
paper_digest_api_reader_source_formula_count: 4
paper_digest_api_reader_structured_artifacts_sha256: "cbcc003ab4b48ad8d47eb55b8aad956e6e6e4c39b1958be82c307f209c1cf789"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity-v1"
paper_digest_api_reader_author_identity_sha256: "81e31459d39000adcbbabe6c7c0ee5e3b992d1a93c8938ec0cd4247066589129"
paper_digest_api_reader_author_count: 2
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity-v1"
paper_digest_api_reader_resource_identity_sha256: "1965e1f443c86d49690dc4c148afe3c6944cf10738de32f52b94c69d9e3c5ca1"
paper_digest_api_reader_resource_count: 0
paper_digest_api_reader_figure_persistence: "ephemeral-no-persisted-figure-assets-v1"
paper_digest_api_reader_decision_projection: "api-reader-decision-projection-v2"
---

# 📄 把波形峰值关进语义空间：MAPS 如何在非线性功放下同时做对齐与 PAPR 抑制

> 英文题目：*[PAPR-Aware Multimodal Token Transmission in MLLM-Based Multiuser Networks](https://arxiv.org/abs/2609.08464)*

> 标签：#音视频问答 | #多模态学习 | #LoRA | #对比学习 | #音视频
>
> 评分：**5.6/10** | 创新 1.2/2 | 技术严谨 1/1.5 | 实验充分 0.8/1.5 | 清晰度 0.7/1 | 影响力 0.7/1.5 | 开源 0/1.5 | 可复现 0.3/0.5 | 工程/实践 0.9/1.5


## 👥 作者与机构

- Molka Trabelsi：机构信息未在 arXiv HTML 中可靠披露
- Rafik Zayani：机构信息未在 arXiv HTML 中可靠披露

## 📌 核心摘要

本文任务是从分布式多用户端采集文本、音频、视觉等多模态原始数据，经令牌化后通过正交频分复用（Orthogonal Frequency Division Multiplexing, OFDM）波形在非线性功率放大器下传输，最终在基站侧由多模态大语言模型（Multimodal Large Language Model, MLLM）融合完成音视频问答（Audio-Visual Question Answering, AVQA）推理，难点在于跨模态语义一致性、任务相关性与波形PAPR之间的联合优化。方法分两阶段：第一阶段冻结各模态编码器与基座模型，仅训练投影层与令牌接收器，以对比损失与锚定重构损失实现跨模态对齐，同时以均衡多模态PAPR损失对OFDM时域信号做波形整形；第二阶段冻结第一阶段组件，仅以低秩适配（Low-Rank Adaptation, LoRA）微调基座模型适配AVQA任务。与仅做任务微调的基线相比，关键机制差异在于将PAPR控制从电路域移至可学习的嵌入空间，并通过固定语义锚点解耦波形优化与对齐。在MUSIC-AVQA测试集、信噪比12 dB、输入回退（Input Back-Off, IBO）3 dB非线性功放下，MAPS相对基线取得约64.5%的准确率提升与64.4%的任务导向能量效率提升，原文在信噪比扫描中另报告同条件下31.7%对18.8%的绝对准确率对应68.3%相对增益。结论仅在AWGN、静态子载波正交分配、离线训练时关闭功放的条件下验证，未覆盖多径衰落、用户异步与分布式边缘协同等外推场景。原文未披露训练、推理或部署成本。

## 🔗 开源与复现资源

本次未形成可展示的已核验资源记录，开放状态尚未核实。

可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 输入是什么、要输出什么、为什么功放会成为瓶颈

这篇论文研究的输入是多用户、多模态的原始数据：一端是文本问题，另一端是图像与音频。每个用户设备只处理一种模态，提取出的 Token 嵌入要经过 OFDM 调制后在无线信道上并发传输，基站侧再把各模态的接收 Token 拼接后送入部署在边缘服务器上的多模态大模型，完成音频-视觉问答任务。目标不是比特级无差错，而是任务级正确：模型对问题的回答词是否与真值一致。

必须保留的关键信息是：所有编码器都是预训练且冻结的，真正的可训练部分是连接编码器与调制器之间的投影层、接收端的两层 MLP 以及第二阶段的 LoRA 增量；训练时功放是关闭的，只在推理时施加 Modified Rapp 模型的非线性；信道在评估时为 AWGN，训练信噪比固定为 12 dB。输出是 3 类度量：按模态统计的 PAPR 及其互补累积分布、不同输入回退 IBO 下的 AVQA 精度、以及把精度与总功耗结合的任务导向能效。
对刚进入音频领域的同学，要先把两个看似无关的概念连起来。

音频、图像的 Token 序列通常很长，直接传会占用大量子载波；OFDM 把这些 Token 映射到频域子载波后经逆傅里叶变换得到时域波形。时域波形的峰值功率与平均功率之比就是 PAPR。PAPR 高意味着波形偶尔出现很高尖峰，功放为了不削峰必须回退工作点，回退越大效率越低；若不回退，尖峰会被非线性压缩，产生幅度与相位失真，直接污染恢复出的 Token 嵌入，最终拉低问答精度。

论文的出发点就是在语义对齐的同时把波形峰值压下来，让系统既能在低 IBO 高效率区工作，又不损失任务精度。
本文不继承其他解读的评价，所有事实核对回到原文证据。资源状态为 NONE，未发现完成 HTTPS 验证的开源声明，因此不能声称代码、模型或数据已公开；下文所有数字与条件均以原文连续句为准。

### 同类工作在做什么、本文补上了哪块缺口

在语义通信范式里，已有 3 条相关路线。第一条是 TokCom-MLMs，提出多模态 Token 传输框架，通过跨模态对齐与任务导向微调让不同模态的 Token 落入统一特征空间。第二条是 GenSemCom，关注面向生成式多模态语言模型的语义感知功率分配。第 3 条是 VQ-VAE 路线，探索离散 Token 表示并做重要性感知的 OFDM 传输。这些工作共同把传输单位从比特转向 Token，并验证了在理想信道下语义对齐对下游任务的增益。

但原文明确指出，据作者所知，开放文献中尚无工作在多模态 Token 语义通信中考虑硬件损伤，特别是功放非线性。这就是本文的缺口定位：之前的对齐与分配都假设发射波形是线性放大的，而实际 OFDM 信号的高 PAPR 会与功放饱和特性直接冲突。若不处理，之前在理想功放下获得的对齐增益会在低 IBO 时被非线性失真抵消。
因此本文不是重复做 1 次对齐，而是把 PAPR 感知作为一等约束加入 2 阶段训练。

相关工作的对照维度应按同输入、同目标、同运行阶段来比：输入都是多模态 Token，目标都是下游任务精度，运行阶段都包含无线传输。与仅做功率分配或仅做离散化的工作相比，本文的差异在于联合优化波形统计特性与语义一致性，并在评估时显式扫描 IBO 与信噪比，而不是只报告单一信道点的精度。

### 要解决的三个纠缠问题是什么

论文把挑战拆成 3 个必须同时满足的子问题。第一是模态间一致性：文本、音频、图像的嵌入来自不同预训练编码器，维度与分布不一致，直接拼接会让大模型难以融合。第二是任务相关传输：在有限带宽与噪声下，哪些 Token 更值得保真，需要通过对齐与微调让传输聚焦于任务相关语义。第三是 PAPR 抑制：经 OFDM 调制后的复数信号峰均比高，非线性功放会引入幅度压缩与相位旋转。
这三者的纠缠在于优化目标会互相牵制。

文本编码器冻结导致 PAPR 损失无法直接影响文本分支；若强行加入可训练投影，投影的更新会让重构目标漂移，破坏对齐稳定性；若简单把 PAPR 损失与对比损失相加，图像分支较强的对齐梯度会抵抗 PAPR 下降，导致各模态的 PAPR 下降不均衡。论文因此提出两个关键设计来解耦与均衡：把重构损失锚定到冻结的原始文本嵌入，以及在 PAPR 损失中加入模态间方差正则与图像分支的额外压力项。

形式化上，系统模型为多用户上行：每个模态 m 的 Token 嵌入经 R2C、IFFT、加循环前缀后得到时域信号 ym(n)，经功放得到 sm(n)，多用户信号在信道叠加后加噪声到达基站，再经去循环前缀、FFT、C2R 恢复为接收嵌入。评估时功放按 Modified Rapp 模型施加，IBO 定义为 10 log10(Psat/Pin)，通过缩放因子 alpha 控制工作点。

### 两阶段框架如何分工、数据如何走完一轮

MAPS 的全流程可按一个样本走一遍。发送端：文本数据 XT 经冻结文本编码器得到 ET，维度为 sT×dT；音频或图像数据 Xm 经各自冻结编码器得到 Em，原始长度为 hat sm，经滑窗均值池化压缩到 sm 长度，再经全连接层映射到 dT 维度得到 Ym。文本分支额外经过可训练线性投影 PT 得到 YT，其余模态的 Ym 直接送入 Tx 模块。Tx 模块内，Ym 经 R2C 转为复数符号，分配到专属子载波带，带间有 Ng 个空子载波作保护，经 IFFT 与加循环前缀得到 ym(n)，推理时再经功放得到 sm(n)。

多用户信号在空中叠加为 r(n) 后到达基站。
接收端：r(n) 经 Rx 模块的去循环前缀、FFT、C2R 与重塑，按模态分离为 tilde Ym，再经两层 ReLU 的 MLP 接收器 Gm 得到 Y'm。所有模态的 Y'm 拼接后送入边缘服务器上的基础模型 W，输出任务答案 O。
训练分 2 个阶段。阶段一在 VALOR 上联合做跨模态对齐与 PAPR 抑制，只训练投影层与接收器，编码器与基础模型冻结。

阶段二在 MUSIC-AVQA 上做任务导向微调，冻结阶段一所有组件，仅更新基础模型的 LoRA 增量。功放在训练阶段关闭，仅在推理评估时开启，这种设置让阶段一学到的波形特性在阶段二保持不变。
下面这张系统架构图把上述分工可视化，左侧为多用户发射侧的编码器、投影与 Tx 模块，中间为无线与 Rx 模块，右侧为 Token 接收器与带 LoRA 的基础模型，顶部与底部分别标注阶段一与阶段二的优化范围。

> **看图路径：** 1. 沿左侧 Device T/1/M-1 到中间基站再到右侧 Foundation Model 的主数据流追踪 Token 路径；2. 对比 Stage 1 虚线框内的 PAPR Loss 与 Reconstruction Loss 与 Stage 2 右侧 Task Loss 的作用位置；3. 观察火焰图标 Trainable 与雪花图标 Frozen 在文本投影、滑窗投影与 LoRA 处的分布

[![原论文 Fig. 1：MAPS system architecture. Stage 1: joint PAPR reduction and cross-modal alignment.](https://arxiv.org/html/2609.08464v1/arch.png)](https://arxiv.org/html/2609.08464v1/arch.png)

*论文图 1。原论文 Fig. 1:：“MAPS system architecture. Stage 1: joint PAPR reduction and cross-modal alignment.”。*

图中可执行观察是：首先确认文本编码器到文本投影的箭头上标注的火焰表示可训练，而编码器本身为雪花冻结；其次注意 PAPR Loss 的虚线同时指向 3 个模态的 Tx 输入，说明它是跨模态联合约束；最后看右侧 Foundation Model 中 W0 冻结而 Delta W 可训练，且 Task Loss 仅回传到 LoRA，验证 2 阶段解耦的实现方式。

### 发射与接收链路的每个模块在算什么

先看文本分支的投影设计。冻结文本编码器输出 ET 后，引入可训练线性投影 PT 得到 YT。这一步的计算目标是提供梯度通路：若没有 PT，PAPR 损失对文本嵌入的梯度会被冻结编码器阻断，文本模态的波形就无法被整形。PT 是线性层，保留语义结构的同时让优化器可以调整文本 Token 的幅度分布。

\[\mathbf{Y}_{T}=P_{T}(\mathbf{E}_{T}),\]

该式说明 YT 是 ET 经 PT 的线性变换结果，维度保持 sT×dT，后续直接送入 Tx 模块参与 OFDM 调制。
再看非文本分支的压缩与映射。原始编码器输出 Em 长度为 hat sm，经滑窗池化 Sm 按窗口大小 ceil(hat sm/sm) 做非重叠均值池化，得到 sm 长度的压缩序列，再经全连接层 Fm 映射到 dT 维度得到 Ym。这一步的目标是在保留时序模式的前提下降低传输开销，使不同模态的 Token 维度对齐到同一 dT，便于后续统一调制与拼接。
Tx 模块的计算是标准的 OFDM 调制链：R2C 把实数嵌入转为复数符号，IFFT 把频域符号转为时域波形，加循环前缀抵抗多径，得到 ym(n)。为避免模态间干扰，NFFT 个子载波被划分为|M|个专用频带，每带 Nm 个子载波，带间留 Ng 个空子载波作保护。

\[\boldsymbol{y}_{m}=C_{m}(\mathbf{Y}_{m}),\quad\forall m\in\mathcal{M},\]

该式把 Ym 到 ym 的转换抽象为 Cm，包含 R2C、IFFT、重塑与加循环前缀的全部操作。
功放建模采用 Modified Rapp，输入 ym(n)=a0(n) exp(j theta(n))，输出为幅度函数 A 与相位函数 phi 共同作用的结果，缩放因子 alpha 由目标 IBO 决定。

\[\alpha=\sqrt{\frac{P_{\mathrm{sat}}}{10^{\mathrm{IBO}/10}\,P_{t}}},\]

该式给出为达到指定 IBO 所需的输入缩放，Psat 为饱和功率，Pt 为平均输入功率，IBO 越大回退越深，波形越线性但效率越低。接收端 Rx 模块执行逆过程：去循环前缀、FFT、C2R 与重塑，按模态恢复 tilde Ym。

**跨模态对齐 × PAPR 抑制：** 跨模态对齐负责把文本、图像、音频的 Token 嵌入拉到同一语义空间以便大模型融合，PAPR 抑制负责把嵌入经 OFDM 调制后的时域波形峰均比压低以减轻功放非线性失真，二者搭配的理由是若只对齐不整形则波形尖峰仍会触发失真，若只整形不对齐则语义不一致，组合后通过方差均衡的 PAPR 损失与锚定重构损失实现在不破坏语义一致性的前提下让各模态波形同时变得对功放友好。

**可训练文本投影 × 冻结文本编码器：** 冻结文本编码器负责保持预训练语言语义的稳定性但阻断了 PAPR 损失的梯度回传，可训练文本投影负责在冻结编码器输出与 OFDM 调制器之间提供可学习的线性映射，二者搭配的理由是既保留原始语义锚点又打通梯度路径，组合后使文本分支也能参与 PAPR 优化而无需微调整个语言编码器。

### 为什么需要方差均衡与锚定重构

阶段一的损失由三部分组成：重构损失、对比损失与 PAPR 损失。对比损失对每个非文本模态 m 计算池化表示 am 与文本表示 aT 的余弦相似度，用温度 tau 做缩放，在批次内做 InfoNCE 形式的归一化，目标是把同语义的跨模态样本拉近。PAPR 损失则设计为四项加权和：平均 PAPR、最大 PAPR、模态间方差与图像分支专属压力。
平均项驱动全局下降，最大项针对每一步最差模态，方差项惩罚模态间不均衡，图像专属项则补偿图像分支较强的对齐梯度对 PAPR 下降的抵抗。

权重 alpha1 至 alpha4 控制相对重要性，整体再乘以系数 lambda 与对齐损失相加。
若直接把 PAPR 损失与对比损失相加，会出现不均衡：图像分支的对齐梯度更强，优化器会优先满足图像对齐而牺牲其 PAPR 下降，导致音频与图像的 PAPR 下降幅度不一致。方差项的作用是自动给落后分支更大梯度压力，迫使各模态同步下降。
另一个不稳定来源是文本投影的可训练性。若重构损失的目标是投影后的文本嵌入，则 PAPR 优化会牵引该目标移动，对齐过程失去固定参照。

论文因此把重构损失锚定到冻结的原始文本嵌入 E_text^raw 与接收端恢复的文本嵌入 hat E_text,rx 之间的均方误差，使对齐目标在训练中保持固定，PAPR 整形与语义对齐得以解耦。

### 两阶段如何训练、哪些参数何时冻结

阶段一的目标是联合学习跨模态对齐与波形整形。数据上使用 VALOR 数据集，优化对象仅为投影层与 Token 接收器，模态编码器与基础模型全程冻结。损失为 L = L_MSE + L_CON + lambda L_PAPR，其中 L_MSE 为锚定重构损失，L_CON 为各非文本模态的对比损失之和，L_PAPR 为上述均衡 PAPR 损失。训练信噪比固定为 12 dB，批次 32，学习率 1e-4，温度 tau=0.07，PAPR 权重 lambda=5，迭代 1000 次。
接收端的恢复过程在训练中同样参与优化，但功放关闭，信道为 AWGN，接收嵌入 tilde Ym 经两层 MLP 得到 Y'm 后，再池化与文本表示计算对比损失。

\[\tilde{\mathbf{Y}}_{m}=C_{m}^{-1}(\boldsymbol{r}),\quad\forall m\in\mathcal{M},\]

该式对应接收端按模态恢复 tilde Ym 的逆变换，包含去循环前缀、FFT、C2R 与重塑，与发射端的 Cm 互为逆操作。
阶段二的目标是任务适配。数据切换为 MUSIC-AVQA，接收嵌入拼接后送入基础模型 Qwen2.5-1.5B，基础模型权重 W0 冻结，引入低秩增量 Delta W = B A^T，秩 r=4，仅更新 B 与 A。损失为交叉熵，迭代 300 次，其余超参数与阶段一一致。阶段一的所有组件在阶段二冻结，确保已学到的 PAPR 友好特性不被任务微调破坏。
下面这张训练曲线图展示阶段一的收敛行为，左侧为对齐损失，右侧为 PAPR 演化。

> **看图路径：** 1. 左图对比 MSE 接近零的平坦曲线与 Audio/Image 对比损失的下降斜率；2. 右图同时读取左侧纵轴 PAPR Mean 蓝色实线与右侧纵轴 PAPR reduction gain 红色虚线的交叉趋势；3. 确认 1000 次迭代内两类损失是否同步收敛而非此消彼长

[![原论文 Fig. 5：Stage-1 training curves. Left: alignment loss components — MSE (21), audio and image contrastive…](https://arxiv.org/html/2609.08464v1/images/training_results.jpg)](https://arxiv.org/html/2609.08464v1/images/training_results.jpg)

*论文图 5。原论文 Fig. 5:：“Stage-1 training curves. Left: alignment loss components — MSE (21), audio and image contrastive losses from (20).”。*

图中可见：左侧 MSE 曲线贴近零且平坦，验证锚定策略使重构目标稳定；音频对比损失从约 3.47 降至约 2.22，图像对比损失从约 3.47 降至约 2.83，二者平滑下降；右侧平均 PAPR 从约 9.09 dB 降至约 6.0 dB，累计下降约 3.1 dB，且下降过程与对齐损失下降同步，说明两类目标未互相干扰。

**重构损失锚定 × 对比损失：** 对比损失负责把音频与图像的池化表示拉向文本表示以实现跨模态相对对齐，重构损失锚定负责把重构目标固定为冻结的原始文本嵌入而非可变的投影输出，二者搭配的理由是若重构目标随投影一起移动则 PAPR 优化会牵引对齐目标漂移，组合后对比损失负责相对关系而锚定重构损失负责绝对坐标稳定。

**LoRA 微调 × 阶段 1 对齐：** 阶段 1 对齐负责在 VALOR 上学到跨模态共享且 PAPR 友好的表示，LoRA 微调负责在 MUSIC-AVQA 上以低秩增量适配基础大模型，二者搭配的理由是若直接端到端微调会破坏已学到的波形特性，组合后冻结阶段一的投影与接收器仅更新 LoRA 参数从而保留对齐与 PAPR 特性。

### 在什么数据、信道与功放条件下测什么

仿真场景为文本、音频、视觉 3 模态的多用户上行。编码器选择为：文本用 Qwen2.5 文本编码器，视觉用 ViViT-B/16×2，音频用在 AudioSet 上微调的 AST，全部冻结。基础模型为 Qwen2.5-1.5B，LoRA 秩 4，部署于边缘服务器。OFDM 参数为：FFT 大小 2448，子载波带宽按 Nm×15 kHz 分配，保护带 Ng=3，循环前缀比例 7%。功率方面，各设备发射功率 Pt 与 IBO 关联，IBO 在评估时从 1 到 16 dB 扫描。

功放采用 Modified Rapp，参数为 Asat/G/p/q = 1.9/16/1.1/4.0，最大效率 eta_max=0.785。信道默认为 AWGN，训练信噪比 12 dB，评估时信噪比从 0 到 15 dB 扫描。数据集划分为：阶段一在 VALOR 上训练，阶段二在 MUSIC-AVQA 上微调并在 MUSIC-AVQA 测试集上评估。基线为未做 PAPR 感知训练但同样经过阶段二微调的模型，信道与功放配置与 MAPS 完全一致，保证对比公平。
度量定义上，PAPR 按 max|ym(n)|^2 / E[|ym(n)|^2] 计算，单位 dB 为 10 log10(PAPR)，并用 CCDF 即 Pr(PAPR>gamma0) 刻画分布。

任务精度为预测词与真值词完全一致的比例；任务导向能效为 Davg·A(IBO)/Ptot(IBO)，其中 Ptot 包含功放功耗 Asat^2 sqrt(10^{IBO/10})/eta_max、基带射频功耗 P0 与处理功耗 epsilon R。
下表整理关键系统与训练配置，数值与单位按原文连续句保留。

| 配置项 | 符号 | 取值 |
| --- | --- | --- |
| 训练条件 | 训练 SNR, 批次/学习率, 温度/PAPR 权重 | 12 dB, 32/1e-4, 0.07/5 |
| 模型与 Token | dT/sT/sm, 阶段一/二迭代, LoRA 秩 | 1536/32/128, 1000/300, 4 |
| 数据划分 | 阶段一数据, 阶段二数据, 评估集 | VALOR, MUSIC-AVQA, MUSIC-AVQA 测试集 |
| 评估扫描 | IBO 范围, SNR 范围, 信道 | 1-16 dB, 0-15 dB, AWGN |

表前说明：该表用于核对复现所需的完整实验条件，比较时需保证基线与 MAPS 在同一功放模型、同一信道与同一 IBO 下评估，指标方向为 PAPR 越低越好、精度与能效越高越好。
表后解释：表中参数表明系统在常规 OFDM 配置下运行，训练与评估的信噪比与 IBO 扫描范围覆盖了从高效率低线性到高线性低效率的全区间。

未胜出项在于原文未报告多径或 MIMO 衰落信道下的结果，也未评估用户间异步或分布式边缘服务器的开销，因此复现时若切换信道模型需另行验证。

### PAPR、精度与能效在不同 IBO 与 SNR 下如何变化

主结果围绕 3 个问题组织：波形是否真正被压低、压低后任务精度是否提升、精度提升是否转化为能效提升。所有结果均在阶段二后、功放非线性开启条件下测得。
先看 PAPR 分布。图 6 给出测试集上音频与图像模态的 CCDF 曲线，横轴为 PAPR 阈值，纵轴为超过阈值的概率。MAPS 的实线相对基线虚线整体左移，说明在相同概率下所需阈值更低。

原文报告在 CCDF=1e-2 处，音频相关 OFDM 信号平均下降 2.62 dB，图像相关下降 1.80 dB。这一结果支持均衡 PAPR 损失的有效性，且音频分支下降更大，符合其对齐梯度相对较弱、更易被 PAPR 整形的预期。

> **看图路径：** 1. 横轴 PAPR 阈值与纵轴 Pr:PAPR>threshold 的对数刻度关系；2. 对比 Audio-Baseline 虚黄线与 Audio-MAPS 实黄线的左移幅度；3. 对比 Image 两条绿线的间距是否小于 Audio 两条黄线的间距

[![原论文 Fig. 6：Stage 2 PAPR reduction across modalities (Image and Audio).](https://arxiv.org/html/2609.08464v1/images/ccdf.jpg)](https://arxiv.org/html/2609.08464v1/images/ccdf.jpg)

*论文图 6。原论文 Fig. 6:：“Stage 2 PAPR reduction across modalities (Image and Audio).”。*

图中可执行观察是：先在纵轴 1e-2 处画水平线与 4 条曲线相交，再垂直下读横轴阈值，比较同色虚实线间距；其次注意音频 MAPS 曲线在低阈值区已显著低于基线，说明小概率尖峰被有效抑制。
再看精度随 IBO 的变化。图 7 在 SNR=12 dB 下扫描 IBO 0-16 dB，MAPS 在所有 IBO 点均高于基线，增益在低 IBO 时最大，原文在 IBO=3 dB 处标注 +64.5% 相对提升。随着 IBO 增大、功放趋于线性，MAPS 曲线逐渐逼近理想功放的 37% 上界虚线，但始终保持正增益，说明阶段一学到的波形特性在高线性区仍有残余优势。

> **看图路径：** 1. 横轴 IBO 从 0 到 16 dB 时 Baseline 红线与 MAPS 蓝线的整体走向；2. 在 IBO=3 dB 处读取双向箭头标注的 +64.5% 增益对应的纵轴精度差；3. 观察顶部 37% MAPS ideal PA 虚线作为无失真上界与 MAPS 实线的逼近程度

[![原论文 Fig. 7：AVQA accuracy vs. IBO (SNR = 12 dB, measured after Stage-2).](https://arxiv.org/html/2609.08464v1/images/acc_vs_ibo.png)](https://arxiv.org/html/2609.08464v1/images/acc_vs_ibo.png)

*论文图 7。原论文 Fig. 7:：“AVQA accuracy vs. IBO (SNR = 12 dB, measured after Stage-2).”。*

图中可执行观察是：沿 IBO 增大方向追踪红蓝两线的斜率，确认二者均上升但蓝线始终在上；重点核对 IBO=3 dB 处双向箭头的起止纵坐标，验证相对增益的计算基准。
信噪比鲁棒性在图 8 中进一步验证，固定 IBO=3 dB 与 6 dB，扫描 SNR 0-15 dB，MAPS 在全区间均优于基线，且在训练 SNR 12 dB 处，IBO=3 dB 时 MAPS 约 31.7% 对基线约 18.8%，相对增益约 68.31%，说明 PAPR 感知训练的收益不限于特定噪声水平。能效方面，图 9 显示任务导向能效随 IBO 增大而下降，因为 IBO 越大功放效率越低；MAPS 在全 IBO 区间均高于基线，在 IBO=3 dB 处约 5.46 q/J 对基线约 3.32 q/J，增益约 64.4%，在 IBO=16 dB 处仍有约 37.5% 增益，体现精度提升与功耗节省的叠加。

**输入回退 IBO × 任务导向能效：** 输入回退 IBO 负责衡量功放工作点离饱和点的距离，IBO 越小功放效率越高但非线性失真越重，任务导向能效负责把 AVQA 精度与总功耗联系起来，二者搭配的理由是仅看精度会忽略功放功耗，仅看功耗会忽略语义损失，组合后能在不同 IBO 下评估精度增益与功耗节省的综合收益。

下表汇总核心可运行策略的定量对比，基线为同条件无 PAPR 训练的阶段二微调模型。

| 评估条件 | 指标 | 基线 | MAPS | 相对增益 |
| --- | --- | --- | --- | --- |
| CCDF=1e-2, 音频 | PAPR 阈值 | 高 | 低 2.62 dB | 下降 2.62 dB |
| CCDF=1e-2, 图像 | PAPR 阈值 | 高 | 低 1.80 dB | 下降 1.80 dB |
| IBO=3 dB, SNR=12 dB | AVQA 精度 | 18.8% | 31.7% | +68.31% |
| IBO=3 dB, SNR=12 dB | 任务能效 | 3.32 q/J | 5.46 q/J | +64.4% |
| IBO=3 dB, 全 SNR 平均 | AVQA 精度 | 基线曲线 | MAPS 曲线 | +64.5% 标注 |

表前说明：该表比较同一功放与信道下可部署的基线与 MAPS，指标方向为 PAPR 越低越好、精度与能效越高越好，IBO 与 SNR 条件按原文连续句保留。
表后解释：主要收益在低 IBO 高效率区最显著，因为此时非线性失真最重，PAPR 抑制带来的失真减轻直接转化为精度与能效双增益。

代价是阶段一需额外优化 PAPR 损失且需仔细平衡各模态权重，否则会出现某模态 PAPR 下降不足；未胜出项是图像模态的 PAPR 下降幅度小于音频，提示图像分支的对齐压力仍部分抵抗波形整形。

| 对比维度 | 数据集 | 阶段 | 指标 | 基线 | MAPS |
| --- | --- | --- | --- | --- | --- |
| 训练收敛 | VALOR | 阶段一 | 音频对比损失 | 3.47 | 2.22 |
| 训练收敛 | VALOR | 阶段一 | 图像对比损失 | 3.47 | 2.83 |
| 训练收敛 | VALOR | 阶段一 | 平均 PAPR | 9.09 dB | 6.0 dB |
| 任务评估 | MUSIC-AVQA | 阶段二 | AVQA 精度 | 18.8% | 31.7% |

表前说明：该表用于检验训练是否同时满足对齐与 PAPR 目标，比较对象为训练前后同一模型，指标方向为损失与 PAPR 越低越好、精度越高越好，数据与阶段按原文连续句保留。
表后解释：主要收益是两类目标同步收敛且最终分布均衡，代价是超参数 lambda 与 alpha 需协调，若 lambda 过大可能压制对齐，若过小则 PAPR 下降不足。

未胜出项是图像分支的 PAPR 增益始终小于音频，提示未来可针对图像分支进一步增强压力或调整池化策略。

### 哪些设计是关键、去掉会怎样、训练过程是否稳定

论文通过阶段一训练曲线与消融含义来验证关键设计。第一，锚定重构损失的必要性体现在左图 MSE 曲线始终贴近零，若不锚定，文本投影的更新会让重构目标漂移，MSE 应出现波动或上升，但实测保持稳定，支持解耦有效。第二，均衡 PAPR 损失的必要性体现在右图平均 PAPR 与累计增益的同步变化：平均 PAPR 从约 9.09 dB 平滑降至约 6.0 dB，累计增益升至约 3.1 dB，且与对比损失下降同步，说明未出现某模态 PAPR 停滞而其他模态继续下降的不均衡现象。

对比损失的数值进一步说明对齐未被牺牲：音频对比损失从约 3.47 降至约 2.22，图像从约 3.47 降至约 2.83，降幅合理且未反弹，表明在加入 PAPR 约束后语义对齐仍能收敛。若去掉方差正则或图像专属压力，预期会出现图像 PAPR 下降滞后，但原文未单独报告该消融的数值，因此不能量化其单独贡献，只能从设计动机与最终均衡结果间接支持。
另一个隐含消融是文本投影：若保持文本编码器完全冻结且不加投影，文本分支的 PAPR 将无法优化，整体平均 PAPR 下降会受限于文本模态的短板。

论文引入线性投影后，文本分支得以参与联合优化，最终实现跨模态均衡下降。
下表把训练稳定性与关键设计的证据组织为可核对条目。

| 验证维度 | 观察对象 | 数值变化 | 支持的判断 | 限制 |
| --- | --- | --- | --- | --- |
| 对齐稳定性 | MSE 损失 | 保持近零 | 锚定有效 | 未报告无锚定对照 |
| 对比收敛 | 音频/图像对比损失 | 3.47→2.22 / 3.47→2.83 | 对齐未被 PAPR 破坏 | 未报告单项权重消融 |
| PAPR 收敛 | 平均 PAPR | 9.09 dB→6.0 dB, 累计 3.1 dB | 联合优化收敛 | 仅报告均值未报告方差时序 |
| 模态均衡 | CCDF 在 1e-2 处 | 音频 2.62 dB, 图像 1.80 dB | 均衡但图像略弱 | 未报告去掉方差项后的分布 |
| 任务保持 | 阶段二精度 | 全 IBO 优于基线 | 波形特性保留 | 未报告冻结阶段一与否的对照 |

表前说明：该表用于检验训练是否同时满足对齐与 PAPR 目标，比较对象为训练前后同一模型，指标方向为损失与 PAPR 越低越好、精度越高越好。

### 哪些边界未被验证、哪些结论不能外推

首先，信道模型局限于 AWGN，原文所有主结果均在 SNR=12 dB 训练、0-15 dB 评估的 AWGN 下报告，未涉及多径衰落、MIMO 或用户间异步，结论不能直接外推到频率选择性信道。其次，功放模型固定为 Modified Rapp 且参数固定，IBO 扫描虽覆盖 1-16 dB，但未评估不同饱和功率或不同非线性强度下的泛化。第三，数据与任务局限于 VALOR 对齐与 MUSIC-AVQA 问答，未报告在其他音频任务如语音识别或音乐分类上的表现，也未测量误判率以外的延迟、吞吐或实际硬件功耗。

第四，资源与成本方面，原文未报告训练时长、显存占用或推理帧率，总体能效提升不等于每样本延迟都降低，也未评估 LoRA 秩变化对精度与 PAPR 的权衡。第五，开源状态为 NONE，未发现完成 HTTPS 验证的资源绑定，因此不能声称代码、模型或数据当前可用，复现需自行实现。
最后，比较公平性上基线已是同条件阶段二微调模型，属于可运行策略，但未包含传统 PAPR 抑制方法如限幅或编码作为对照，也未报告搜索最优或 oracle 上界，因此不能把 MAPS 的增益等同于对所有 PAPR 方法的优势。

### 复现时先做什么、按什么顺序核对

复现建议按数据流顺序逐步核对。第一步搭建多用户 OFDM 链路：实现 R2C、IFFT、加循环前缀与对应的去循环前缀、FFT、C2R，按 NFFT=2448、保护带 3、循环前缀 7% 配置子载波分配，确保无功放时端到端 Token 重构误差可控。第二步接入冻结编码器：文本用 Qwen2.5 文本编码器，视觉用 ViViT-B/16×2，音频用 AST，验证输出维度分别为 sT=32、sm=128、dT=1536。第三步实现滑窗池化与投影：非文本分支按 ceil(hat sm/sm) 窗口做均值池化再经全连接映射，文本分支加入线性投影 PT。

第四步实现阶段一损失：对比损失按余弦相似度与温度 0.07 计算，重构损失锚定到冻结原始文本嵌入，PAPR 损失按平均、最大、方差与图像专属四项加权，lambda=5，批次 32，学习率 1e-4，迭代 1000 次，训练时关闭功放、信道为 AWGN 12 dB。核对指标为 MSE 近零、对比损失分别降至约 2.22 与 2.83、平均 PAPR 从约 9.09 dB 降至约 6.0 dB。
第五步实现阶段二 LoRA 微调：在 MUSIC-AVQA 上冻结阶段一组件，仅更新秩 4 的 LoRA，迭代 300 次，交叉熵损失，评估时开启 Modified Rapp 功放，参数 1.9/16/1.1/4.0，eta_max=0.785，扫描 IBO 与 SNR，核对 CCDF 在 1e-2 处音频下降约 2.62 dB、图像约 1.80 dB，IBO=3 dB 时精度约 31.7% 对基线约 18.8%、能效约 5.46 q/J 对约 3.32 q/J。

若复现中发现图像 PAPR 下降不足，优先检查 PAPR 损失中方差项与图像专属权重是否生效；若对齐不收敛，检查重构损失是否错误地以投影后嵌入为目标。

### 何时值得尝试 MAPS、还有什么需要补验证

当系统需要在低 IBO 高效率区运行且下游任务对语义保真敏感时，MAPS 的值得尝试：它把 PAPR 控制从电路域移到嵌入学习域，通过联合优化让波形整形与语义对齐互不破坏，实测在 IBO=3 dB 附近同时获得精度与能效的显著提升，且在高 IBO 与全 SNR 区间保持正增益。对于以音频为重要模态的问答或检索任务，音频分支的 PAPR 下降更明显，收益可能更大。
不值得盲目照搬的场景是：信道已是强多径或需 MIMO 预编码时，OFDM 子载波分配与 PAPR 统计会发生变化，需重新验证。

对延迟极敏感的实时音频传输，LoRA 推理与 2 阶段训练的开销需实测；若已有成熟的数字预失真或限幅方案，应与 MAPS 做同 IBO 同功放的直接对照，而非仅与无 PAPR 训练的基线比。
后续验证应补三项：第一，在多径与 MIMO 信道下重测 CCDF 与精度，观察均衡损失是否仍能保持模态间一致；第二，报告训练与推理的实际时间、显存与功耗，区分能效公式中的理论功耗与实测功耗。

第三，公开可运行代码与权重，使他人能在同一 VALOR 与 MUSIC-AVQA 划分上复现 9.09 dB 到 6.0 dB 的 PAPR 下降与 64% 量级的任务增益，避免因实现细节差异导致结论不可比。

<details>
<summary>📎 论文与评分元数据</summary>

排名：前50% | 文档类型：方法研究 | [arXiv 原文](https://arxiv.org/abs/2609.08464)

</details>

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。

- 评分规则：type-aware-v1

- 评分模型：muse-spark-1.2-contributor

- 评分请求协议：openai_responses

---

[← 返回 2026-09-10 语音/音乐/音频论文速递](/audio-paper-digest-blog/posts/2026-09-10/)
