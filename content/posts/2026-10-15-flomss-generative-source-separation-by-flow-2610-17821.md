---
title: "FLOMSS: Generative Source Separation by Flow Matching"
date: 2026-10-15
draft: false
tags: [音乐源分离, 流匹配, 音乐]
categories: [论文速递]
description: "论文把音乐分离写成以混合为条件的生成问题，用流匹配学习从混合到各乐器的传输，在 MUSDB18-HQ 上用频谱与嵌入指标超过同骨干判别基线和已有生成方法，但波形重建类的 SDR 仍弱于强判别方法。"
hiddenInHomeList: true
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_arxiv_id: "2610.17821"
paper_digest_workbench_contract: "researcher-workbench-v1"
paper_digest_reader_title: "FLOMSS：用条件流匹配做四轨全频立体声音乐分离"
paper_digest_original_title: "FLOMSS: Generative Source Separation by Flow Matching"
paper_digest_arxiv_version: 1
paper_digest_arxiv_versioned_id: "2610.17821v1"
paper_digest_arxiv_abs_url: "https://arxiv.org/abs/2610.17821v1"
paper_digest_arxiv_pdf_url: "https://arxiv.org/pdf/2610.17821v1.pdf"
paper_digest_primary_task: "音乐源分离"
paper_digest_tags_contract: "paper-tag-flat-tags-v2"
paper_digest_tags_selection_contract: "paper-tag-selection-v2"
paper_digest_tags_registry_version: "paper-tag-catalog-v2"
paper_digest_tags_registry_sha256: "cdef54423b5dfc00a1d017ef6639446d2ecd1d9c1acf71c8eb4f6219a46b7ba8"
paper_digest_tags_concepts: [{"facet":"task","id":"task.music-separation","label":"音乐源分离"},{"facet":"method","id":"method.flow-matching","label":"流匹配"},{"facet":"signal","id":"signal.music","label":"音乐"}]
paper_digest_primary_method: "流匹配"
paper_digest_score: 7.0
paper_digest_rank_bucket: "前50%"
paper_digest_document_type: "方法研究"
paper_digest_one_sentence: "论文把音乐分离写成以混合为条件的生成问题，用流匹配学习从混合到各乐器的传输，在 MUSDB18-HQ 上用频谱与嵌入指标超过同骨干判别基线和已有生成方法，但波形重建类的 SDR 仍弱于强判别方法。"
paper_digest_authors: [{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Shuyang Cui"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Zhi Zhong"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Keisuke Toyama"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Koichi Saito"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Qiyu Wu"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Yukara Ikemiya"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Junghyun Koo"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Kin Wai Cheuk"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Woosung Choi"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Giorgio Fabbro"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Wei-Hsiang Liao"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Shusuke Takahashi"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Yuki Mitsufuji"}]
paper_digest_abstract_sha256: "3846d6be60882c405965d75f036f816ad61296874a5866942e4295ab4e52c95b"
paper_digest_sidecars: {"citation.bib":{"sha256":"89462f10de61e9be90d83fc5dc7859fbfd83fea8c875ff3d2c199995e2397af1","url":"/audio-paper-digest-blog/data/papers/2026-10-15/2610-17821/citation.bib"},"citation.json":{"sha256":"8a8a145b0a7b4535def7a7111d62d997459dbf6ad94c049bdb41f20490687a9e","url":"/audio-paper-digest-blog/data/papers/2026-10-15/2610-17821/citation.json"},"citation.ris":{"sha256":"62171b157a1eacd9d412405dd81e94a85fa7124ed4e1265e4b8c5b22f0eec92c","url":"/audio-paper-digest-blog/data/papers/2026-10-15/2610-17821/citation.ris"},"rethink-context.json":{"contract":"paper-research-context-v2","sha256":"0e699aa552fcb49840774e647d98a372ba14035da8e61a4116c462136b317fa8","url":"/audio-paper-digest-blog/data/papers/2026-10-15/2610-17821/rethink-context.json"}}
paper_digest_api_reader_contract: "beginner-researcher-v3"
paper_digest_api_reader_article_sha256: "2411f64e739dee92048c3cacff5a585d869a85e03f3b58180f6df68fc5ac5f29"
paper_digest_api_reader_plan_sha256: "e06f7c1b72c0d98f83c69de65748c07c79b24a75f1add705f6aead918baa13f5"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings-v4"
paper_digest_api_reader_source_bindings_sha256: "d98d814ebc249cd7b977f058105841de960f498f4e53da027c4d8ac13dc080bd"
paper_digest_api_reader_source_table_count: 4
paper_digest_api_reader_source_formula_count: 3
paper_digest_api_reader_structured_artifacts_sha256: "ac22506a6e31014fad8574bfb8ca19775b24a3f1626958ec95c3850e0246970b"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity-v1"
paper_digest_api_reader_author_identity_sha256: "bfbb04dbb62320c544bd417b481db2bf84ffc78ec977fc62f5b0a9a0705a4f04"
paper_digest_api_reader_author_count: 13
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity-v1"
paper_digest_api_reader_resource_identity_sha256: "ba8cc71a1ee5ee3492858103bbc6201ae3029f8fd040a484de664e019180f5bc"
paper_digest_api_reader_resource_count: 1
paper_digest_api_reader_figure_persistence: "ephemeral-no-persisted-figure-assets-v1"
paper_digest_api_reader_decision_projection: "api-reader-decision-projection-v2"
---

# 📄 FLOMSS：用条件流匹配做四轨全频立体声音乐分离

> 英文题目：*[FLOMSS: Generative Source Separation by Flow Matching](https://arxiv.org/abs/2610.17821v1)*

<!--paper-tag-hierarchy-v1:start-->

**研究分类**

- **研究任务**：[音频分离](/audio-paper-digest-blog/papers/?concept=task.audio-separation) → [音乐源分离](/audio-paper-digest-blog/papers/?concept=task.music-separation)
- **研究方法**：[生成模型](/audio-paper-digest-blog/papers/?concept=method.generative) → [流匹配](/audio-paper-digest-blog/papers/?concept=method.flow-matching)
- **信号**：[音乐](/audio-paper-digest-blog/papers/?concept=signal.music)

<!--paper-tag-hierarchy-v1:end-->

> 评分：**7.0/10** | 创新 1.5/2 | 技术严谨 1.2/1.5 | 实验充分 1.2/1.5 | 清晰度 0.8/1 | 影响力 1/1.5 | 开源 0/1.5 | 可复现 0.3/0.5 | 工程/实践 1/1.5


## 👥 作者与机构

- Shuyang Cui：机构信息未在 arXiv HTML 中可靠披露
- Zhi Zhong：机构信息未在 arXiv HTML 中可靠披露
- Keisuke Toyama：机构信息未在 arXiv HTML 中可靠披露
- Koichi Saito：机构信息未在 arXiv HTML 中可靠披露
- Qiyu Wu：机构信息未在 arXiv HTML 中可靠披露
- Yukara Ikemiya：机构信息未在 arXiv HTML 中可靠披露
- Junghyun Koo：机构信息未在 arXiv HTML 中可靠披露
- Kin Wai Cheuk：机构信息未在 arXiv HTML 中可靠披露
- Woosung Choi：机构信息未在 arXiv HTML 中可靠披露
- Giorgio Fabbro：机构信息未在 arXiv HTML 中可靠披露
- Wei-Hsiang Liao：机构信息未在 arXiv HTML 中可靠披露
- Shusuke Takahashi：机构信息未在 arXiv HTML 中可靠披露
- Yuki Mitsufuji：机构信息未在 arXiv HTML 中可靠披露

## 📌 核心摘要

音乐源分离的输入是人声、贝斯、鼓与其余声部叠加的立体声混音，输出是四个独立波形，难点在于全频带高采样率下各声部频谱重叠严重且相位细节难以还原。FLOMSS先对混音与目标声部做复数短时傅里叶变换并按幂律压缩幅度，得到尺度更稳定的压缩谱图作为模型输入。训练时沿预设均值轨迹加噪采样中间状态，将该中间状态与混音拼接后输入骨干网络学习速度场或目标样本，推理时以混音为条件用常微分方程求解器积分该向量场得到估计谱图，再对估计谱图做逆压缩与逆短时傅里叶变换恢复波形。与同骨干直接预测基线不同，该框架学习混音条件下的生成分布，单源建模优于多源联合建模。在MUSDB18-HQ测试集四声部平均上，单源OT-CFM目标预测的Mel距离为1.63，低于同骨干判别式基线的2.30，而SDR为3.77 dB，低于该基线的4.95 dB，呈现分布相似性与波形重建之间的权衡。该结论限于MUSDB18-HQ全频带立体声四声部评测，与训练数据更多的判别式方法比较需谨慎，波形域与未压缩短时傅里叶变换域硬混合一致路径整体退化；训练使用4块A100、93600步、有效批量32，推理对最优传输路径使用10步中点求解器，原文未报告延迟与内存实测。

## 🔗 开源与复现资源

- 第三方资源：<https://ik4sumii.github.io/FLOMSS/> — 链接可访问（HTTP 200）

可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 音乐分离要从混合里恢复什么

刚接触音频分离的读者可以先把任务想成一道逆混合题。输入是一段立体声音乐混合，论文记为 m，它是 K 个声部波形 xk 相加的结果，通道数 ch 为 2，分别对应左右声道。目标是把混合拆回 Vocals 人声、Bass 贝斯、Drums 鼓和 Other 其他 4 路，其中 Other 装的是除前三者之外的所有剩余乐器。必须保留的信息包括每路的音色、音高进行、瞬态和空间感，因为高保真音乐制作要的是可以直接再混音的全频立体声，而不是单声道或降采样后的粗略轮廓。输出就是 4 路与混合同采样率、同声道的波形。

评价时既要看波形逐点接近程度，也要看频谱和听感上像不像真实乐器，这正是论文要在 SDR 之外引入多套指标的原因。传统做法学一个或一组判别映射，用波形 L1 或短时傅里叶变换域的重建损失把估计往真值上拉。生成式做法则把每路看成在给定混合条件下的条件分布 p，并从中采样，本文的 FLOMSS 走的是第二条路。

### 判别路线与生成路线各在解决什么

音乐分离的深度学习研究长期由判别目标主导，时频掩蔽和波形到波形两类分离器都属于这一族，SCNet、HTDemucs 和 Open-Unmix 是论文拿来对比的代表。它们的输入、目标和监督是一致的：输入混合，输出各声部估计，训练阶段用重建损失，运行阶段一次前向得到结果。

生成路线在语音增强、语音分离和音乐带宽扩展里受到关注，但在音乐分离里已有工作多是学无条件或联合先验再做后验采样或条件修复，例如 InstGlow 优化独立源先验下的隐变量，MSDM 学联合源先验再在混合约束下后验采样，MGE-LDM 把分离写成隐空间条件修复。论文指出这些工作一般不直接学从混合到源的生成映射，也不输出全频立体声。流匹配是扩散之外的一种生成范式，通过回归预设概率路径的速度场来学连续传输，最优传输或矫直路径可以更直、采样更快。

已有音频工作把它用于语言查询的目标声分离、语音增强和语音分离，SAM Audio 还加入文本视觉时间提示做开放域分离。但针对预定义四轨全频立体声音乐混合的系统研究仍然缺失，FLOMSS 要补的就是这一块。

**判别式分离 × 条件流匹配：** 判别式分离指直接从混合预测目标波形或谱并用重建损失训练，目标是逐点接近真值；条件流匹配指以混合为条件学习一条从噪声化混合到目标源分布的连续传输，训练时回归预设概率路径的速度场，推理时沿常微分方程积分得到采样。两者分工不同：前者保波形 fidelity，后者建模分布；论文把后者用于音乐分离，就是想在保持可懂分离的同时让输出的频谱与语义嵌入分布更接近真实乐器。

### FLOMSS 面对的输入输出与约束是什么

论文把问题限定得很具体：44.1 kHz 立体声，四轨，监督式条件流匹配，在 MUSDB18-HQ 上训练和评价。输入是混合的压缩复数短时傅里叶变换表示，输出是目标声部的同类表示再经逆压缩和逆短时傅里叶变换回到波形。约束有两层，一是物理上的混合一致，即 4 路估计相加应等于输入混合；二是评价上的全面性，不能只看信号失真比 SDR，还要看频谱距离和基于预训练语义音频编码器的嵌入指标以及听感测试。

论文要回答的不是能否分离，而是流匹配的预测目标、流路径、单源还是多源建模、混合一致以何种方式加入，这 4 个选择如何影响重建保真与分布相似之间的权衡。所有比较都固定采样率、声道和曲目划分来谈，跨数据集或跨采样率的模型只做格式匹配后的参考，不当作同条件胜负。

### FLOMSS 的整体流程是怎样的

可以沿着一个混合片段走一遍流程。训练时先对混合与各声部做短时傅里叶变换并做幅度压缩，得到尺度更均匀的复谱表示。接着为每个混合-源对构造一条条件概率路径，起点是混合附近的高斯，终点是目标源附近的高斯，中间时刻的状态 xt 是按均值插值加方差扰动采样得到的。网络的输入是当前状态 xt、时间 t 和混合条件，输出按参数化不同或是速度或是目标样本，损失就是估计与预设目标之间的均方误差。

推理时不再采样训练用的中间点，而是从起点出发，用 10 步常微分方程求解器沿学到的速度场积分，对 OT 路径用中点法，对 SB 路径用指数积分器，每一步都可以读出当前对目标的预测，最后一步经逆压缩和逆变换得到波形。长曲按与训练同长的片段切块处理，块间 10% 重叠并用三角交叉淡化拼接。单源版本为每轨单独走这套流程，多源版本把 4 路状态拼接后在联合空间走同一套流程，只是输入输出通道变宽，骨干主体不变。

### 压缩复谱表示解决什么问题

流匹配在高斯扰动下工作，如果直接用复谱，幅度动态范围太大，大小声部和大小频点会被同一方差的噪声不公平对待。论文沿用 SGMSE 的做法，对复谱 X 做逐元素的幂律压缩，保留相位，只压缩幅度，并乘全局缩放因子。压缩后的混合与源尺度更一致，网络在拼接 xt 与混合条件时更容易学，速度场的回归目标也不会被极端大幅值主导。实现上用 Hann 窗长 1534、跳长 384，压缩因子 alpha 为 0.5，缩放 beta 为 0.15。推理的最后一步必须做逆压缩再做逆短时傅里叶变换，否则幅度会被系统性压小。需要注意压缩是非线性的，它破坏了源相加等于混合的线性关系，这直接影响后文硬混合一致要在波形域或未压缩复谱域另建路径的原因。

\[\widetilde{X}=\beta|X|^{\alpha}e^{j\angle X},\]

上式中 X 是复谱，|X|是幅度，angle X 是相位，alpha 控制压缩强度，beta 控制全局尺度，输出是压缩后的复谱表示。

### 条件概率路径与两种预测目标如何分工

条件流匹配的核心是一条高斯条件路径。论文把它写成以混合为条件的分布，均值 mu_t 是混合与目标的线性插值，方差是随时间变化的计划。起点在混合附近，终点在目标源附近，训练时从这条路径采样 xt 并要求网络拟合对应的速度场。OT 与 SB 共享同样的线性均值插值，区别只在方差计划，OT 用 sigma_max 为 0.5 到 sigma_min 为 0 的计划，SB 用布朗桥噪声尺度为 1，在 t 为 0.5 时最大标准差为 0.5。速度预测直接拟合速度场 ut，数据预测直接拟合终点 x1，判别基线则不用时间与 xt，只从混合直接预测目标并用均方误差训练，三者用同一 NCSN++ U-Net 骨干以隔离建模范式的影响。

\[p_{t}(\mathbf{x}\mid\mathbf{x}_{1},\widetilde{M})=\mathcal{N}\!\bigl(\mathbf{x};\boldsymbol{\mu}_{t}(\mathbf{x}_{1},\widetilde{M}),\sigma_{t}^{2}\mathbf{I}\bigr),\]

上式中 x 是路径状态，x1 是压缩后的目标源，M 波浪线是压缩后的混合条件，mu_t 是线性插值均值，sigma_t 是方差计划。

**最优传输流路径 × 薛定谔桥流路径：** 最优传输流路径指均值在混合与目标之间线性插值、方差按简单计划变化的概率路径，轨迹较直；薛定谔桥流路径指两端固定、中间方差非零的高斯桥路径，中间状态随机性更大。两者都是条件流匹配训练时预先规定的 xt 分布与目标速度场，搭配后决定了模型要拟合的速度形态与采样难度，论文对比它们是为了看哪种传输更适合全频立体声音乐谱。

**速度预测 × 数据预测：** 速度预测指网络直接估计概率路径在当前时刻的速度场 ut，数据预测指网络直接估计终点目标样本 x1。两者参数化的是同一条预设概率路径，理想下等价，但在有限容量和有限数据下优化行为不同：前者贴近流匹配的动力学，后者贴近重建目标。论文同时试验两者，是为了在分布相似性与波形重建之间找平衡。

### 单源多源与混合一致如何实现

单源建模为每轨单独训练一个模型，输入是该轨的 xt 与混合，输出是该轨的速度或目标。多源建模把 4 路状态拼在一起，用一个模型同时输出 4 路，通道顺序固定，骨干宽度基本不变，训练目标沿用表现较均衡的 OT 加数据预测。混合一致有软硬两种加法。软一致在无约束多源损失上再加 0.1 倍的估计和与输入混合之间的均方误差，不改变流路径。

硬一致要求路径上每一时刻 4 路状态之和恒等于混合波形 m 或其复谱 M，因为压缩域不满足可加性，所以硬路径定义在波形域或未压缩复谱域，而骨干内部仍用压缩表示。论文在消融中不给硬约束加额外的信号级辅助损失，以保持训练目标一致，这一点是理解硬约束失效结论的前提。

\[\vskip-4.2679pt\mathcal{L}_{\mathrm{SoftMC}}=\mathcal{L}_{\mathrm{\mathbf{x}}}+0.1\mathcal{L}_{\mathrm{MSE}},\vskip-1.42262pt\]

上式中 Lx 是数据预测损失，LMSE 是 4 路估计之和与输入混合之间的均方误差，系数 0.1 控制软约束强度。

**单源建模 × 多源建模：** 单源建模指为 Vocals、Bass、Drums、Other 各训练一个只输出一路的模型，多源建模指用一个模型同时输出四路并把四路状态拼接后一起传输。单源分工清晰但要存四个模型，多源把声部间关系放在同一网络里联合学习，省模型但增加了联合分布的学习难度。论文保持骨干基本不变只扩展输入输出通道，就是为了隔离比较这种建模方式本身的代价。

**软混合一致 × 硬混合一致：** 软混合一致指在数据预测损失之外再加一项估计四路之和与输入混合均方误差的惩罚，只鼓励相加接近混合；硬混合一致指要求概率路径上每一时刻四路状态之和恒等于混合，在路径构造层面强制成立。软约束不改变流路径，硬约束改变路径所在的域与采样方式。论文对比两者，是要检验混合可加这一先验应该以损失还是以路径约束的方式加入生成式分离。

### 模型如何训练与推理

骨干默认是 16M 参数的 NCSN++ U-Net，按 SGMSE 配置，输入处拼接 xt 与压缩混合并单独提供时间 t，判别基线只接收压缩混合。放大版把通道加宽到 67M 参数。训练用 MUSDB18-HQ 官方划分的 44.1 kHz 立体声，随机裁 97,920 采样点的片段，并做在线重混增强：对同一首歌同一时间区采样 2 到 4 个分轨重新混成新混合。优化用 Adam，学习率 1e-4，有效批量 32，在 4 张 A100 上训练 93,600 步。推理切与训练同长片段，10% 重叠三角交叉淡化拼接。

OT 推理用 10 步中点常微分方程求解器，SB 用 10 步指数积分器。论文把实现细节放在将公开的代码库，本文只按原文交代训练与推理的计算过程，不推测未报告的冻结或梯度细节。

### 数据划分与指标如何度量好坏

数据是 MUSDB18-HQ 的官方训练测试划分，全频立体声。对比的公平条件需要仔细看：SCNet、Open-Unmix 和 FLOMSS 只用该训练集，HTDemucs 额外用了 800 首，InstGlow 在 MUSDB18 上加了 Slakh2100 的吉他钢琴轨，SAM Audio 与 MGE-LDM 在不同数据集上训练且采样率不同，单通道模型在评价时对左右声道分别处理再拼成立体声。信号类指标包括按 DAC 的频谱与波形 L1 距离中的 Mel 距离、STFT 距离、波形距离，以及 MDX23 实现的 SDR，方向是 Mel、STFT、波形越低越好，SDR 越高越好。嵌入类指标把估计与真值切成无重叠 10 秒段，用 VGGish、PaSST、OpenL3、CLAP、MERT 等预训练编码器提嵌入，再算 LPAPS 成对距离、Fréchet 距离 FD 和最大均值差异 MMD，都是越低越好。主观评价用 WebMUSHRA，23 名不同音乐制作经验的被试对 10 段 8 秒摘录按 0 到 100 打总体质量分，含全频真值和 16 kHz 带限隐参考，匿名随机排序。

**Fréchet 距离 × 最大均值差异 × LPAPS：** Fréchet 距离指用均值与协方差刻画两组嵌入集合的分布差异，最大均值差异指用核均值比较两组嵌入集合的分布差异，两者都是集合层面的分布指标；LPAPS 指用 CLAP 嵌入计算对应 10 秒片段之间成对感知距离再平均，是样本对层面的相似性。论文同时用三者，是因为 SDR 只反映波形逐点误差，而生成方法更需要在语义与听感层面被评价，成对距离与集合分布要分开看。

### 流路径与预测目标的消融说明什么

该消融固定单源建模，对四轨取平均，比较最优传输速度预测、最优传输数据预测、薛定谔桥数据预测、同骨干判别基线和未处理混合。想看清的问题是，在同一骨干下生成做法是否用信号重建换分布相似，以及不同路径与预测目标之间如何取舍。

| 组别 | 指标 | OT-CFM-v | OT-CFM-x | SB-CFM-x | 判别基线 | 混合 |
| --- | --- | --- | --- | --- | --- | --- |
| 信号 | Mel ↓ | 1.71 | 1.63 | 2.99 | 2.30 | 4.71 |
| 信号 | STFT ↓ | 2.81 | 2.69 | 3.72 | 3.16 | 6.13 |
| 信号 | Wav. ↓ | 0.0241 | 0.0226 | 0.0203 | 0.0197 | 0.0723 |
| 信号 | SDR ↑ | 3.23 | 3.77 | 4.63 | 4.95 | -5.56 |
| FD ↓ | VGG | 0.77 | 0.87 | 2.88 | 2.55 | 6.46 |
| FD ↓ | PaSST | 225 | 261 | 306 | 308 | 802 |
| FD ↓ | OpenL3 | 108 | 116 | 144 | 144 | 166 |
| FD ↓ | CLAP | 0.23 | 0.31 | 0.33 | 0.33 | 0.68 |
| FD ↓ | MERT | 5.35 | 5.43 | 6.87 | 6.23 | 13.8 |
| MMD ↓ | VGG | 2.66 | 3.26 | 9.68 | 9.14 | 28.2 |
| MMD ↓ | PaSST | 36.4 | 44.5 | 72.3 | 51.7 | 49.2 |
| MMD ↓ | OpenL3 | 51.1 | 59.4 | 112 | 109 | 169 |
| MMD ↓ | CLAP | 0.98 | 1.58 | 1.73 | 1.76 | 3.55 |
| MMD ↓ | MERT | 11.1 | 11.1 | 21.7 | 15.4 | 51.5 |
| LPAPS ↓ | CLAP | 2.43 | 2.45 | 2.72 | 2.58 | 4.13 |

表中判别基线在波形距离 0.0197 和 SDR 4.95 上仍是同组最好，说明直接预测目标样本在逐点重建上有优势。两种最优传输变体把 Mel 降到 1.71 与 1.63、STFT 降到 2.81 与 2.69，都好于判别基线的 2.30 与 3.16，并在多数嵌入指标上更优。速度预测在嵌入类多为最好，例如 FD-VGG 0.77 对 0.87，但 SDR 3.23 低于数据预测的 3.77。薛定谔桥数据预测拿下生成方法中最好的波形 0.0203 与 SDR 4.63，却在 Mel 2.99 与嵌入指标上弱于最优传输。论文因此选最优传输加数据预测继续往后做，理由是它在各组指标间比较均衡。

限制是这只是四轨平均，没有展开单轨差异，采样步数的影响也要看逐步采样分析。本表数值与单位依据论文 PDF。

### 与已有方法的基准对比在什么条件下成立

主基准在 MUSDB18-HQ 测试集上报告平均与分轨的 Mel、SDR、FD 与 LPAPS，方向同前，Mel 与分布距离越低越好，SDR 越高越好。比较前必须强调条件不一致：SAM Audio 与 MGE-LDM 是文本条件模型且论文发现 Other 轨难以正确分离，HTDemucs 多用了 800 首，采样率与声道也不同，单通道模型是双通道独立处理再拼接。因此只能谈格式匹配下的参考，不把跨条件差异读成同条件胜负。

| Method (Avg) | Mel ↓ | SDR ↑ | FD VGG ↓ | FD PaSST ↓ | FD CLAP ↓ | FD MERT ↓ | LPAPS CLAP ↓ |
| --- | --- | --- | --- | --- | --- | --- | --- |
| SCNet | 1.66 | 9.69 | 1.62 | 286 | 0.25 | 6.67 | 2.24 |
| HTDemucs | 1.61 | 8.14 | 2.05 | 279 | 0.26 | 6.08 | 2.28 |
| Open-Unmix | 2.36 | 5.19 | 2.45 | 436 | 0.45 | 6.93 | 2.97 |
| FLOMSS-S-Disc. | 2.30 | 4.95 | 2.55 | 308 | 0.33 | 6.23 | 2.58 |
| InstGlow | 3.08 | 2.75 | 3.96 | 535 | 0.69 | 10.6 | 3.27 |
| FLOMSS-S | 1.63 | 3.77 | 0.87 | 261 | 0.31 | 5.43 | 2.45 |
| FLOMSS-M | 1.55 | 4.34 | 0.65 | 205 | 0.24 | 5.15 | 2.30 |

表中 16M 的 FLOMSS-S 平均 Mel 1.63、SDR 3.77，在多数频谱与感知指标上已超过 InstGlow 平均 Mel 3.08、SDR 2.75 等已有生成基线。相对同骨干判别基线 FLOMSS-S-Disc 平均 Mel 2.30、SDR 4.95，FLOMSS-S 把 Mel 与全部嵌入指标做得更好而 SDR 略低，与前文权衡一致。放大到 67M 的 FLOMSS-M 平均 Mel 1.55、SDR 4.34，超过 Open-Unmix 除 SDR 外的全部指标，相对 SCNet 平均 Mel 1.66、SDR 9.69 与 HTDemucs 平均 Mel 1.61、SDR 8.14，FLOMSS-M 在平均 Mel 与各嵌入 FD 上更好，但 SDR 明显更弱、LPAPS 略差。分轨看 Vocals Mel 1.42 对 SCNet 1.73 有优势而 SDR 6.21 对 10.9 仍落后，说明结论依赖指标选择，不能推广为全面超越。本表数值与单位依据论文 PDF。

### 听感测试是否支持仪器指标的判断

主观表报告 WebMUSHRA 均分，总体分越高越好，排名排除参考条件与缺轨系统。表前问题是当 SDR 落后时，人耳总体质量是否仍认可生成方法的分布优势，以及结论是否受参试曲目与带限参考的影响。

| Method | # Params (M) | Overall Avg. ↑ | Rank ↓ | Vocals ↑ | Bass ↑ | Drums ↑ | Other ↑ |
| --- | --- | --- | --- | --- | --- | --- | --- |
| GT | – | 94.57 | – | 96.64 | 92.90 | 94.33 | 94.40 |
| 16 kHz GT | – | 78.24 | – | 73.62 | 89.29 | 67.40 | 82.65 |
| SCNet | 41 | 62.59 | 1 | 73.10 | 48.88 | 62.39 | 65.98 |
| HTDemucs | 42 | 58.71 | 3 | 65.00 | 43.38 | 60.82 | 65.63 |
| Open-Unmix | 36 | 35.40 | 6 | 44.05 | 24.14 | 31.35 | 42.07 |
| FLOMSS-S-Disc. | 15 × 4 = 60 | 40.28 | 5 | 48.41 | 32.62 | 37.46 | 42.61 |
| MGE-LDM | 1,179 | – | – | 30.90 | 37.76 | 42.11 | – |
| InstGlow | 15 × 4 = 60 | 26.6 | 7 | 26.95 | 20.22 | 30.60 | 28.75 |
| SAM Audio | 709 | – | – | 45.60 | 41.14 | 66.54 | – |
| FLOMSS-S | 16 × 4 = 64 | 53.99 | 4 | 55.31 | 47.36 | 59.02 | 54.28 |
| FLOMSS-M | 67 × 4 = 268 | 59.12 | 2 | 67.16 | 51.71 | 61.21 | 56.40 |

表中可见全频真值 94.57、16 kHz 真值 78.24 作为锚点，SCNet 总体 62.59 排第一，每轨 67M、4 模型合计 268M 的 FLOMSS-M 总体 59.12 排第二，HTDemucs 58.71 排第三，每轨 16M、4 模型合计 64M 的 FLOMSS-S 53.99 排第四，同骨干判别基线 40.28、Open-Unmix 35.40、InstGlow 26.6 依次靠后。分轨上 FLOMSS-M 在 Bass 51.71 排第一，Vocals 67.16 排第二，Drums 61.21 排第三，Other 56.40，显示尽管 SDR 低，听感仍有竞争力。限制是仅 10 段 8 秒摘录、23 名被试，且 MGE-LDM 与 SAM Audio 缺 Other 轨不进总体排名，因此听感第二只在所评曲目与所列系统范围内成立，不能外推到所有音乐类型。本表数值与单位依据论文 PDF。

### 采样过程与多源混合一致带来什么代价

读逐步采样图要先确认对象是 Vocals 单源 OT 数据预测模型，横轴是中点求解器第 0 到 9 步从目标预测算出的指标值，虚线是判别基线，星号是每指标的最优点，且该图全部纵轴均越低越好，其中负 SDR 格向下即 SDR 变好。导读之后看像素可见的趋势：Mel、STFT、波形与 LPAPS 在前两步大幅下降后趋平，FD 与 MMD 各格多随步数继续下降，负 SDR 格先降后升。

> **看图路径：** 1. 先看每列标题区分样本层、Fréchet 距离与最大均值差异三组，再对齐横轴 Step index 看 0 到 9 步的变化；2. 对比蓝色虚线判别基线与带点实线 OT-CFM-x 在 Mel、负 SDR 与波形三格的前两步落差；3. 找每格星号 Best 位置，确认分布类指标多在第 9 步最好而负 SDR 类在中间步最好；4. 注意纵轴已统一为越低越好，负 SDR 格向下即 SDR 变好，按负 SDR 定义正读即可

[![原论文 Figure 1：Stepwise behavior of OT-CFM-\\mathbfx for Vocals.](https://arxiv.org/html/2610.17821v1/midpoint_sampler_metrics_singlecol_OTCFM.svg)](https://arxiv.org/html/2610.17821v1/midpoint_sampler_metrics_singlecol_OTCFM.svg)

*论文图 1。原论文 Figure 1:：“Stepwise behavior of OT-CFM-\mathbfx for Vocals.”。*

图后解释是早期估计先靠近判别基线，Mel 与 SDR 在前几步与虚线接近，说明模型先恢复重建导向的估计；后期继续积分改善频谱与嵌入指标，但以牺牲 SDR 为代价，负 SDR 先降即 SDR 先变好、后升即 SDR 后变差，星号在分布类多落在第 9 步而在重建类落在中间步，揭示了分布相似与波形重建的权衡。多源对比进一步显示，无约束多源把骨干几乎不变而一次输出四轨，Mel 从 1.63 升到 1.71、SDR 从 3.77 掉到 3.07，嵌入指标全面变差。加软一致后 SDR 回到 3.69，Mel 与 LPAPS 基本保持。硬一致无论波形域还是未压缩谱域都整体变差，仅 MERT 例外。这里比较的是单模型一次输出四轨能否不损质量，以及混合可加先验以何种形式加入才有效。

| Method / Path | Domain | Mel ↓ | SDR ↑ | FD VGG ↓ | FD PaSST ↓ | FD CLAP ↓ | FD MERT ↓ | LPAPS CLAP ↓ |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Single Source / OT-CFM-x | Compressed STFT | 1.63 | 3.77 | 0.87 | 261 | 0.31 | 5.43 | 2.45 |
| Multi Source / w/o MC | Compressed STFT | 1.71 | 3.07 | 2.30 | 416 | 0.45 | 10.6 | 2.71 |
| Multi Source / Soft MC | 同组 Compressed STFT | 1.73 | 3.69 | 2.87 | 446 | 0.47 | 13.7 | 2.71 |
| Multi Source / Hard MC | Waveform | 2.74 | 2.11 | 5.17 | 497 | 0.45 | 9.61 | 3.23 |
| Multi Source / Hard MC | STFT | 2.71 | 2.34 | 6.30 | 597 | 0.55 | 8.83 | 3.40 |

结果说明软约束能追回大部分 SDR 损失而不损 Mel 与 LPAPS，硬约束在本文的路径与无辅助损失训练下不 work，论文明确把该结论限定在所评的波形与谱域路径内，并指出硬约束可能需要音乐分离专用的流路径与训练策略，留作未来工作。本表数值与单位依据论文 PDF。

### 哪些地方没有胜出与尚未验证

最清楚的未胜出项是 SDR。无论单源消融还是主基准，生成模型在 Mel 与嵌入分布上占优的同时，SDR 都低于同级或更强的判别模型，逐步采样图也显示后期改善分布要以 SDR 为代价。论文把这称为分布重建权衡，并把进一步提升 SDR 留作未来工作。第二个负结果是硬混合一致在波形域与谱域都整体退化，论文不将其归因于混合一致思想本身不行，而是指出结论仅限于本文评过的路径与保持训练目标一致、不加辅助信号损失的设置。

第三是评价范围：嵌入指标依赖 VGGish、PaSST、CLAP、MERT 等编码器的采样率与切段方式，OpenL3 在后文被略去只保留 FD 为代表，完整结果放在代码库；主观测试样本量与曲风覆盖有限；跨数据集训练的基线不可比。这些限制意味着论文支持的是在 MUSDB18-HQ、四轨全频立体声、所用切分与指标下的相对判断，而非生成方法在所有条件下全面替代判别方法。

### 复现第一步要准备什么

复现应从数据与特征对齐开始，而不是直接调大模型。先按官方划分拿到 MUSDB18-HQ 的 44.1 kHz 立体声，用 Hann 窗 1534、跳长 384 做复数短时傅里叶变换，再按 alpha 0.5、beta 0.15 做压缩，推理末端记得逆压缩加逆变换。骨干用 16M 的 NCSN++ U-Net，输入拼接 xt 与压缩混合并单独给 t，OT 计划 sigma_max 0.5 到 sigma_min 0，SB 桥噪声尺度 1，训练裁 97,920 点片段并做同歌同时间区 2 到 4 轨重混，Adam 学习率 1e-4、有效批量 32、93,600 步。推理切同样长度、10% 重叠三角交叉淡化，OT 用 10 步中点法。先复现单源 OT 数据预测与同骨干判别基线，确认 Mel 改善而 SDR 略降的权衡出现，再试多源无约束与软一致。

论文提到开放代码库与演示页，但按原文措辞是将公开，链接本次未能确认可达，因此不要把代码权重可下载与系统可运行混为一谈，缺失项应在复现记录中标明待验证。

### 什么时候值得尝试与还缺哪项验证

当任务是全频立体声音乐制作，需要输出听起来像真实乐器且频谱与语义分布接近真值，而对逐样本波形误差容忍度较高时，FLOMSS 这类条件流匹配值得尝试；当下游依赖 SDR 或逐点残差，例如再做精细编辑与客观失真考核时，强判别模型仍是更稳的选择。复现第一步是把压缩特征、OT 路径与数据预测在单源 Vocals 上跑通，并同时跑通同骨干判别基线，用 Mel、SDR 与至少一种嵌入 FD 对照确认权衡方向。

还缺的验证包括硬混合一致在音乐专用路径与辅助损失下的表现、更大规模与更多曲风数据的泛化、推理步数与求解器对质量延迟的定量关系，以及更长时与跨专辑的主观测试。理解了压缩表示、概率路径、预测目标、单多源与软硬一致这几组分工，就能复述关键步骤，也能说清每个结论成立的条件。

<details>
<summary>📎 论文与评分元数据</summary>

排名：前50% | 文档类型：方法研究 | [arXiv 原文](https://arxiv.org/abs/2610.17821v1)

</details>

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。

- 评分规则：type-aware-v1

- 评分模型：muse-spark-1.3-contributor

- 评分请求协议：openai_responses

---

[← 返回 2026-10-15 语音/音乐/音频论文速递](/audio-paper-digest-blog/posts/2026-10-15/)
