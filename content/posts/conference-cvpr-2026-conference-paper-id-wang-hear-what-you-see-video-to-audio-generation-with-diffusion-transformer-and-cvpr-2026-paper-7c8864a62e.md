---
title: "Hear What You See: Video-to-Audio Generation with Diffusion Transformer and Semantic-Temporal Alignment-Ranked Direct Preference Optimization"
date: 2026-09-13
draft: false
description: "针对无声视频生成音频时语义错位与时间错位并存的问题，论文用音视频时间对齐加图文语义引导的流匹配扩散变换器做基座，再用 ImageBind 与 Synchformer 自动排序的偏好优化做对齐微调，在 VGGSound 测试集上以 151M 参数取得分布与同步指标的领先，但高帧率编码与多轮偏好迭代仍带来额外开销与过优化风险。"
tags: ["流匹配", "偏好优化", "音视频", "视频到声音生成"]
categories: ["cvpr-2026 论文"]
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_paper_id: "conference:cvpr:2026:conference-paper-id:Wang_Hear_What_You_See_Video-to-Audio_Generation_with_Diffusion_Transformer_and_CVPR_2026_paper"
paper_digest_source_kind: conference
paper_digest_conference_id: "cvpr-2026"
paper_digest_conference_record_url: "https://openaccess.thecvf.com/content/CVPR2026/html/Wang_Hear_What_You_See_Video-to-Audio_Generation_with_Diffusion_Transformer_and_CVPR_2026_paper.html"
paper_digest_conference_pdf_url: "https://openaccess.thecvf.com/content/CVPR2026/papers/Wang_Hear_What_You_See_Video-to-Audio_Generation_with_Diffusion_Transformer_and_CVPR_2026_paper.pdf"
paper_digest_api_reader_contract: "beginner-researcher-v3"
paper_digest_api_reader_article_sha256: "4633f54f43b2dd607dcd9ef80d2eb9fb7605ba485b6b0411a50829a4e7cf5b0b"
paper_digest_api_reader_plan_sha256: "39bd2aea5b191f333ed7bfb30bab0f4f1b883bc4b988f4541609460835539d27"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings-v4"
paper_digest_api_reader_source_bindings_sha256: "35532bb3c33f9598a698d2121efeef1929e3cd049a02b49eeb6b896e6ee773e4"
paper_digest_api_reader_source_table_count: 4
paper_digest_api_reader_source_formula_count: 0
paper_digest_api_reader_structured_artifacts_sha256: "3183e48c36926c7ea06f8745956cb8724c5d6857229cb92cc3736a4db5064f43"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity-v1"
paper_digest_api_reader_author_identity_sha256: "57a0ee093c9853d894251884004c0bba9d3f97a9c2af0f2658e07f32b583f8c8"
paper_digest_api_reader_author_count: 13
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity-v1"
paper_digest_api_reader_resource_identity_sha256: "590727e1cff8f89dbd0a59a2ab92cc6ae8d601db309b86af4877b5f0cc5d98a3"
paper_digest_api_reader_resource_count: 0
paper_digest_api_reader_decision_projection: "api-reader-decision-projection-v2"
paper_digest_scoring_contract: "api-scoring-audit-v2"
paper_digest_taxonomy_contract: "paper-taxonomy-flat-tags-compat-v1"
paper_digest_taxonomy_selection_contract: "paper-taxonomy-selection-v1"
paper_digest_taxonomy_registry_version: "paper-taxonomy-v1"
paper_digest_taxonomy_registry_sha256: "15c82a567ce5a55dc1175684ed08b64c158558639d9c8fb822c9587ec32a8778"
paper_digest_taxonomy_concepts: [{"facet":"method","id":"method.flow-matching","label":"流匹配"},{"facet":"method","id":"method.preference-optimization","label":"偏好优化"},{"facet":"signal","id":"signal.audiovisual","label":"音视频"},{"facet":"task","id":"task.video-to-audio","label":"视频到声音生成"}]
paper_digest_primary_task: "视频到声音生成"
paper_digest_primary_method: "流匹配"
paper_digest_score: 7.3
paper_digest_rank_bucket: "前50%"
paper_digest_document_type: "方法研究"
paper_digest_conference_structure: replayable-pdf-layout-v1
---

# 📄 看见鼓槌落下才发声：用音视频对齐的扩散变换器与语义时间偏好优化做视频生音频

> 英文题目：*Hear What You See: Video-to-Audio Generation with Diffusion Transformer and Semantic-Temporal Alignment-Ranked Direct Preference Optimization*

> 会议身份：`conference:cvpr:2026:conference-paper-id:Wang_Hear_What_You_See_Video-to-Audio_Generation_with_Diffusion_Transformer_and_CVPR_2026_paper`


> ✅ 来源为官方会议 PDF；表格与 Figure 按原文证据绑定。PDF 公式以原页区域图片展示，未冒称作者原始 TeX。

> 会议来源：[官方记录](https://openaccess.thecvf.com/content/CVPR2026/html/Wang_Hear_What_You_See_Video-to-Audio_Generation_with_Diffusion_Transformer_and_CVPR_2026_paper.html) · [官方 PDF](https://openaccess.thecvf.com/content/CVPR2026/papers/Wang_Hear_What_You_See_Video-to-Audio_Generation_with_Diffusion_Transformer_and_CVPR_2026_paper.pdf)

标签：#流匹配 #偏好优化 #音视频 #视频到声音生成

评分：**7.3/10** | 创新 1.5/2 | 技术严谨 1.2/1.5 | 实验充分 1.3/1.5 | 清晰度 0.8/1 | 影响力 1.2/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 1.0/1.5

排名：前50% | 文档类型：方法研究

## 👥 作者与机构

- Kai Wang：机构信息未能从会议 PDF 纯文本可靠映射
- Tao Zhou：机构信息未能从会议 PDF 纯文本可靠映射
- Jiayi Lei：机构信息未能从会议 PDF 纯文本可靠映射
- Jing Wang：机构信息未能从会议 PDF 纯文本可靠映射
- Jinman Zhao：机构信息未能从会议 PDF 纯文本可靠映射
- Weiguo Pian：机构信息未能从会议 PDF 纯文本可靠映射
- Yuan Cheng：机构信息未能从会议 PDF 纯文本可靠映射
- Yapeng Tian：机构信息未能从会议 PDF 纯文本可靠映射
- Peng Gao：机构信息未能从会议 PDF 纯文本可靠映射
- Bin Fu：机构信息未能从会议 PDF 纯文本可靠映射
- Yihao Liu：机构信息未能从会议 PDF 纯文本可靠映射
- Dimitrios Hatzinakos：机构信息未能从会议 PDF 纯文本可靠映射
- Yuewen Cao：机构信息未能从会议 PDF 纯文本可靠映射

## 📌 核心摘要

视频到音频生成需以无声视频与文本为输入生成44.1kHz波形，要求语义相符且时间同步，难点在于低帧率语义特征丢失敲击点而高帧率运动特征缺乏语义 grounding。VisioSonic先用多模态条件器分别以CLIP视觉塔抽取低帧率语义嵌入、以Synchformer抽取高帧率时间线索并与文本融合形成层次条件。接着令牌对齐器将视频上采样至音频隐变量长度后沿通道拼接，显式保留音视频时间对应关系。然后视频文本音频共注意力扩散变换器基于整流流匹配迭代去噪生成梅尔隐变量，再经VAE与HiFi-GAN恢复波形，并以语义时间对齐排序直接偏好优化筛选最优最劣对做迭代微调。与三模态顺序拼接做联合自注意力的MMDiT类方案不同，该设计用门控交叉注意力注入文本而避免文本视频提前混合破坏同步。在VGGSound测试集下，VisioSonic w/ STAR-DPO的FD_PaSST指标为55.48，低于VisioSonic Base的FD_PaSST指标58.27。该结论适用边界受限于8秒短片段与VGGSound分布，外域MovieGen上语义指标落后于HunyuanVideoFoley且FD_VGG并非最优，存在失败条件。原文未披露训练、推理或部署成本。

## 🔗 开源与复现资源

本次未形成可展示的已核验资源记录，开放状态尚未核实。
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 输入是什么，要输出什么，什么必须保留？

这篇论文研究的是视频到音频生成。输入是一段无声视频，外加一段文本描述，输出是一段与视频内容匹配的音频波形。初学者容易把任务理解为配一段好听的声音就行，但论文强调有两个必须同时保留的信息。

第一个是语义。画面里出现狗就该出现狗叫，画面是打鼓就该是鼓声，而不是持续的背景音乐。第二个是时间。鼓槌落下的那一刻声音才该出现，落下之前和衰减之后应该是安静的。如果只保证语义而时间错位，听感会明显虚假。

如果只保证时间包络而语义错误，内容也不可用。论文把困难归因于常用数据的弱对齐。VGGSound 这类数据包含大量真实视频，但其中混有非发声对象的声音，也存在声音与画面动作不同步的样本。

直接在这种数据上训练，模型会学到错误的对应关系。另一条路线是把视频映射成文字再调用文本到音频模型，这会丢失细粒度的时间信息。文字也难以描述敲击发生的精确时刻。

因此论文选择同时使用视频帧和文本提示，并显式处理帧级同步。从复述角度，一个样本的完整链路是取一段无声视频与一句描述性文本，先把音频真值变成谱图再压缩成潜变量。视频则分别走低帧率语义分支和高帧率时间分支，文本走编码器分支。

三者在扩散变换器中融合，模型预测从噪声指向真值的速度场。推理时从噪声出发积分得到音频潜变量，再解码为谱图并经声码器还原波形。后续所有组件与评价都是围绕这条链路如何保持语义与时间来展开的。

### 已有两条路线各解决了什么，还缺什么？

论文把已有视频到音频方法分成两类。第一类是直接在音视频对上训练生成模型。早期有自回归式的 SpecVQGAN 和 Im2Wav，用视觉特征与光流生成音频。扩散时代有 Diff-Foley 和 Frieren，分别用对比潜在空间或输入级对齐改善同步。

MMAudio 则用多模态变换器联合处理视频、文本与音频。这类方法的优点是能直接建模时间对应，但受数据质量与计算量限制。MMAudio 还需要联合训练文本音频数据，成本明显更高。

第二类是复用预训练文本到音频模型。V2A-Mapper 把视频特征映射为文本嵌入，FoleyCrafter 加入语义与时间控制器。Seeing-and-Hearing 用 ImageBind 做多模态对齐并在测试时优化。这类方法生成质量较好，但视频到文字的转换会造成语义损失。

控制器也难以做到鲁棒的帧级同步。论文指出 VisioSonic 与 MMAudio 的区别在于不用类别标签加自注意力，而是用协同注意力机制与描述性标题。这样可以用更少的计算实现更丰富的上下文引导。

在偏好对齐方面，直接偏好优化最初用于大语言模型，后来扩展到图像扩散与视频扩散。TangoFlux 用预训练的语言音频对比模型自动构造偏好数据。论文的判断是这些工作都停留在单模态质量对齐。

它们没有处理视频与音频之间的跨模态同步。本文提出的语义时间对齐排序直接偏好优化是第一次把自动构造偏好数据的思路用于视频到音频。奖励模型分别选用 ImageBind 与 Synchformer，而不是人工标注。

### 问题如何定义，什么算做对了？

论文把任务定义为给定静音视频帧序列与文本提示，生成在语义上一致、在时间上同步的音频。语义一致指声音事件与视觉语义对应，时间同步指音频能量变化与视觉运动精确对齐。举例来说，打鼓视频中鼓槌触鼓时刻就是必须对齐的时间锚点。

鼓声的音色类别就是必须正确的语义标签。这个例子是为理解而设的教学例子，不是论文新增的定量声明。评价因此分成 4 个视角。分布相似度用 Fréchet 距离衡量生成与真实音频在多种特征上的接近程度。

数值越小越好，还用 KL 散度衡量类别分布差异，同样越小越好。感知质量用基于分类器的 Inception 分数，越大越好。语义对齐用 ImageBind 抽取音视频嵌入后的余弦相似度，记为 IB 分数。

越大越好，时间对齐用 Synchformer 预测的偏移秒数，记为 DeSync。越小越好，论文按前段与后段取平均。需要提醒初学者的是，数值相同不代表指标相同。分布距离小只说明整体听感分布接近真值。

不保证某一段鼓点准时，IB 分数高只说明语义对应好，不保证时间偏移小。因此论文同时报告多组指标，后文解读结果时必须把数据集与模型版本一起核对。不能只看单一指标的升降，也不能把自动指标直接当作人评。

### VisioSonic 全景：条件器、变换器与偏好循环如何分工？

VisioSonic 包含两个训练阶段。第一阶段训练基座模型 VisioSonic-Base，它由多模态条件器与基于协同注意力的扩散变换器组成。第二阶段是语义时间对齐排序直接偏好优化，简称 STAR-DPO。

它用基座模型在未见过的验证集视频文本对上生成多个候选音频，用奖励模型排序选出胜者与败者。再对扩散模型做偏好微调，并可迭代重复。基座模型的数据流是音频经变换与编码器压缩成潜变量并加噪。

视频经 CLIP 视觉塔得到低帧率语义嵌入，经 Synchformer 视觉编码器得到高帧率时间嵌入。文本经 CLIP 文本塔得到文本嵌入，三者经条件器融合成层次化条件。加噪音频潜变量与插值后的视频潜变量经令牌对齐器在时间上对齐。

再与文本一起送入多个扩散变换器块预测速度场。推理时用常微分方程求解器从噪声积分得到音频潜变量，再经解码器与声码器还原波形。下图是论文给出的整体结构，左侧是基座模型，右侧是偏好优化循环。

阅读时应先走主生成路径，再看偏好数据如何回训基座模型，中间的协同注意力面板是理解融合方式的关键。

> **看图路径：** 1. 先从左侧多模态条件器追踪视频文本与高帧率分支如何汇入扩散变换器块；2. 再看中间协同注意力面板中音视频自注意力与文本交叉注意力的两条路径；3. 最后看右侧偏好数据循环中生成排序与回训箭头如何闭环

[![原论文 Figure 2：Overview of proposed VisioSonic: base model architecture (left) and STAR-DPO pipeline (right).](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/567492a97560/figure-2.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/567492a97560/figure-2.png)

*论文图 2。原论文 Figure 2：“Overview of proposed VisioSonic: base model architecture (left) and STAR-DPO pipeline (right).”。*

该图左侧展示了从音频、视频、文本到条件器、令牌对齐器、扩散变换器块、速度预测与声码器的完整路径。实线与虚线区分了训练与推理，右侧展示了数据池、基座模型生成多个候选、奖励模型打分与偏好对形成。

中间放大的协同注意力面板说明了对齐后音视频嵌入的自注意力与文本交叉注意力如何相加输出。理解这张图后，再逐个拆开条件器与变换器块的计算细节会更顺利，也能看清偏好循环的闭环位置。

### 条件器与变换器块内部做了哪些具体计算？

多模态条件器的输入是视频帧与文本。文本提示经 CLIP 文本塔与线性投影得到文本嵌入。视频帧经 CLIP 视觉塔与线性投影得到视觉嵌入，保证与文本在语义空间可比。

但低帧率输入不足以支撑同步，论文额外用 Synchformer 视觉编码器在高帧率上抽取视觉特征。经上采样与线性投影得到与音频潜变量相同长度的高帧率嵌入。条件融合时先对全局视频嵌入与全局文本嵌入做池化与投影再相加。

经多层感知机得到全局图文条件，再与时间嵌入和高帧率视觉嵌入相加，得到层次化条件。这个设计同时保留了说什么与何时发生。扩散变换器块的关键是令牌对齐器与协同注意力。

由于视频帧率远低于音频谱图的时间分辨率，令牌对齐器先把视频嵌入沿时间轴插值到相同长度。再用两个投影层分别把音视频潜变量投影到原来一半维度并沿通道拼接。这样做的理由是让模型直接利用固有的时间对应。

而不是把三者简单串联后交给共享自注意力处理。在每个协同注意力块内，对齐后的音视频嵌入经投影得到查询、键、值。文本嵌入经投影得到键值，文本键与音视频查询键分别做归一化。

音视频查询键还加入 2 维旋转位置编码。然后音视频部分做自注意力实现特征交互，音视频查询与文本键值做交叉注意力注入文本信息。交叉注意力输出经零初始化门控动态控制注入强度，最后与自注意力输出相加再经线性层输出。

**流匹配 × 扩散变换器：** 流匹配负责给出从噪声到音频潜变量的直线传输路径与速度场回归目标，扩散变换器负责在视频与文本条件下预测该速度场，二者搭配的原因是前者把生成问题转化为每一步可回归的速度预测，后者提供融合多模态条件的容量，组合后模型能沿常微分方程积分从噪声逐步生成与视频同步的音频。

**多模态条件器 × 协同注意力：** 多模态条件器负责把低帧率语义嵌入、高帧率时间嵌入、文本嵌入与时间步嵌入合成为层次化条件，协同注意力负责让已对齐的音视频表征做自注意力交互并以交叉注意力注入文本信息，二者搭配的原因是条件器提供说什么与何时发生，协同注意力决定在每一层如何融合，组合后文本语义与视频动作能同时约束音频生成。

**令牌对齐器 × 音视频时间同步：** 令牌对齐器负责把低帧率视频嵌入沿时间插值到与音频潜变量相同的长度并分别投影后拼接，音视频时间同步是要求鼓点与敲击等声音起止与画面动作对齐的目标，二者搭配的原因是只有先让两种模态在序列长度上逐帧对应，后续注意力才能学到帧级对应关系，组合后模型不再把视频当作全局标签而是当作时间线。

上述 3 组搭配共同回答了为什么不用 3 模态串联自注意力。串联忽略了音视频在时间轴上的天然对齐，而先对齐再协同注意可以用更少的参数实现更紧的时间约束。条件嵌入则通过缩放与门控调制块的输入输出与前馈网络。

### 基座训练与偏好数据构造、优化目标如何执行？

基座训练采用整流流匹配目标。记音频样本为数据分布中的真值，噪声样本为标准正态分布中的噪声。在时间处插值潜变量为二者的线性组合，模型要预测的速度场就是真值减噪声。

损失是预测速度与真实速度差的平方期望，条件包括视频与文本。音频变分自编码器与声码器是预训练的，论文没有报告对它们做微调。因此复述时应视为冻结的压缩与还原工具，未报告的部分不做推测。

偏好数据构造在验证集上进行，该子集在预训练时未见过但分布相近。对每个视频文本对，基座模型生成 5 个音频候选。奖励模型分别用 ImageBind 评价语义，用 Synchformer 评价时间。

加权求和得到最终奖励分，得分最高者为胜者，最低者为败者。这个过程可迭代，用最新模型重新生成与排序，再做下一轮偏好微调。优化时论文在直接偏好优化目标之外保留了流匹配损失。

具体做法是分别计算胜者与败者在当前模型与参考模型下的速度预测误差。再把误差之差送入偏好损失，同时加上回归损失稳定训练。论文报告偏好微调时微调数千步，最多做 3 轮迭代。

第二轮最好，第 3 轮略有下降，这支持了偏好优化在少数轮内有效但继续迭代可能过优化的判断。

**ImageBind × Synchformer：** ImageBind 负责计算音频与视频嵌入余弦相似度以评价语义是否一致，Synchformer 负责计算生成音频与高帧率视频嵌入沿时间的相似度以评价同步偏移，二者搭配的原因是语义对与时间准是两个不同维度的错误，加权求和后才能选出两者都好的胜者样本，组合后自动排序可以在无人标注的情况下构造偏好对。

**直接偏好优化 × 流匹配损失：** 直接偏好优化负责拉大胜者样本与败者样本在模型与参考模型速度预测误差之差上的间隔，流匹配损失负责保持模型对胜者路径的基本回归能力，二者搭配的原因是纯偏好目标容易过优化而偏离可听的音频分布，保留回归项可以稳定训练，组合后模型向更对齐的方向移动而不丢失生成能力。

需要明确的是，论文没有给出奖励加权系数的具体数值与梯度细节。复现时应把这部分记为缺项，而不是从模型名称推定实现。

### 数据、特征、模型与推理条件是什么？

实验主数据集是 VGGSound。论文报告过滤无效编号后保留约 180,000 段训练、2000 段验证、15000 段测试。每段 10 秒，训练时取每段视频的前 8 秒，文本方面不用类别标签。

而是用描述性标题，缺失标题时回退为类别标签模板句。这种标题被认为能提供更丰富的上下文与同步线索。特征与模型配置按原文交代如下，音频采样率为 44.1 千赫兹。

视频低帧率分支为每秒 8 帧，文本为 1024 维，高帧率分支为每秒 24 帧。去噪主干为多个变换器块，每块多头注意力的配置是固定的。训练时音视频特征预抽取缓存，以降低训练成本。

推理用欧拉积分多步采样，并使用分类器无关引导。偏好构造时每对生成 5 个候选，用加权语义时间分排序。论文未报告硬件型号与耗时，训练成本只能从步数与参数量间接理解。

不能承诺实际延迟，参数最少也不等于推理最快。以下先看主结果表的第一组对照，重点是与多模态联合训练基线的比较。公平条件是同一 VGGSound 测试集，指标方向为距离越小越好，质量与语义越大越好。

| Seeing&Hearing [47] 415M | 219.01 | 24.58 | 5.40 | 2.26 | 2.30 | 8.58 | 33.99 | 1.204 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| MMAudio-S (44.1kHz) [4] 157M | 65.25 | 5.55 | 1.66 | 1.67 | 1.44 | 18.02 | 32.27 | 0.444 |
| MMAudio-L (44.1kHz) 1.03B | 60.60 | 4.72 | 0.97 | 1.65 | 1.40 | 17.40 | 33.22 | 0.442 |
| VisioSonic Base (44.1kHz), ours 151M | 58.27 | 4.41 | 1.18 | 1.44 | 1.30 | 18.12 | 32.8 | 0.45 |
| VisioSonic w/ STAR-DPO, ours 151M | 55.48 | 4.36 | 0.99 | 1.44 | 1.29 | 18.41 | 33.1 | 0.41 |

该表保留了原表中的多模态基线与本方法基座加偏好优化版本。列覆盖了多种分布距离、KL、感知分数、语义分数与时间偏移，可以一次性核对分布与同步。

数据显示本方法在保持 151M 参数的同时改善了分布距离，偏好优化版本进一步提升。后文还将用不同基线子集重复核对，避免只看单一对照就下结论。

### 主结果：在相同测试集上谁的分布与同步更好？

主结果要回答在相同视频文本输入下，哪个模型生成的音频分布更接近真值。感知质量是否更高，语义与时间对齐是否更好，公平条件是同一测试集。指标方向为距离与偏移越小越好，感知与语义越大越好。

论文报告基座与偏好微调版本均为 44.1 千赫兹、151M 可训练参数。是对比中参数最少的之一，以下先补充与自回归和控制器路线的对照。基线包含早期自回归模型与映射类方法，条件同样是 VGGSound 测试集。

| Seeing&Hearing [47] 415M | 219.01 | 24.58 | 5.40 | 2.26 | 2.30 | 8.58 | 33.99 | 1.204 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Frieren [45] 159M | 106.10 | 11.45 | 1.34 | 2.73 | 2.86 | 12.25 | 22.78 | 0.851 |
| V2A-Mapper [42] 229M | 84.57 | 8.40 | 0.84 | 2.69 | 2.56 | 12.47 | 22.58 | 1.225 |
| VisioSonic Base (44.1kHz), ours 151M | 58.27 | 4.41 | 1.18 | 1.44 | 1.30 | 18.12 | 32.8 | 0.45 |
| VisioSonic w/ STAR-DPO, ours 151M | 55.48 | 4.36 | 0.99 | 1.44 | 1.29 | 18.41 | 33.1 | 0.41 |

该表选择了原表中的早期基线与本方法版本，覆盖了分布、质量与对齐列。可见早期方法的分布距离明显更大，时间偏移也更大，支持了直接建模时间对应的必要性。

但这组对照不能说明与最强多模态基线的差距，因此还需要看大参数量基线的对照。下图用雷达包络直观展示了多指标对比，外圈代表更好。阅读时不要把某一轴的凹陷直接推广为整体变差。

> **看图路径：** 1. 先确认雷达图每个轴对应一种分布距离或对齐指标且外圈代表更好；2. 再比较红色代表的本方法多边形与其他基线多边形的包络大小；3. 最后观察哪些轴上本方法包络未明显领先以定位代价

[![原论文 Figure 1：Comparison with other V2A models](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/567492a97560/figure-1.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/567492a97560/figure-1.png)

*论文图 1。原论文 Figure 1：“Comparison with other V2A models”。*

该雷达图把多种分布距离、感知分数、语义分数与时间偏移放在同一极坐标下。红色代表本方法的外层包络在多数轴上大于其他颜色的基线包络，支持了分布与质量上的整体优势。

但像素分辨率有限，无法精确读出每个轴的具体数值。定量结论仍以主结果表为准，结合表格看偏好优化版本实现了分布与同步的联合改善。这是论文最强的可运行证据，未胜出项仍需在下一组对照中指出。

### 消融与反证：哪些基线未被超越，单样本说明什么？

论文做了多组对照，第一组是模态融合方式与奖励模型的讨论。第二组是迭代次数与排序管线的讨论，第 3 组是域外泛化的讨论。这里先用原表数字核对与控制器和大模型基线的差距。

以下对照保留了参数量差异很大的基线，目的是检查最少参数下的收益是否全面。

| Seeing&Hearing [47] 415M | 219.01 | 24.58 | 5.40 | 2.26 | 2.30 | 8.58 | 33.99 | 1.204 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| FoleyCrafter [50] 1.22B | 140.09 | 16.24 | 2.51 | 2.30 | 2.23 | 15.68 | 25.68 | 1.225 |
| MMAudio-S (44.1kHz) [4] 157M | 65.25 | 5.55 | 1.66 | 1.67 | 1.44 | 18.02 | 32.27 | 0.444 |
| VisioSonic Base (44.1kHz), ours 151M | 58.27 | 4.41 | 1.18 | 1.44 | 1.30 | 18.12 | 32.8 | 0.45 |
| VisioSonic w/ STAR-DPO, ours 151M | 55.48 | 4.36 | 0.99 | 1.44 | 1.29 | 18.41 | 33.1 | 0.41 |

该表保留了控制器路线与多模态小参数基线，以及本方法的两个版本。数据显示本方法基座在分布距离上领先，偏好优化后进一步改善，感知与语义分数也提升。

代价是部分距离指标上大模型仍有优势，论文解释为对方用了额外训练数据与更大模型。以下再核对与另一组强基线的对照，避免只保留有利基线。公平条件仍是同一测试集与同一指标方向。

| Seeing&Hearing [47] 415M | 219.01 | 24.58 | 5.40 | 2.26 | 2.30 | 8.58 | 33.99 | 1.204 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| V-AURA [40] 695M | 218.50 | 14.80 | 2.88 | 2.42 | 2.07 | 10.08 | 27.64 | 0.654 |
| VATT [24] - | 131.88 | 10.63 | 2.77 | 1.48 | 1.41 | 11.90 | 25.00 | 1.195 |
| VisioSonic Base (44.1kHz), ours 151M | 58.27 | 4.41 | 1.18 | 1.44 | 1.30 | 18.12 | 32.8 | 0.45 |
| VisioSonic w/ STAR-DPO, ours 151M | 55.48 | 4.36 | 0.99 | 1.44 | 1.29 | 18.41 | 33.1 | 0.41 |

该表保留了另一组基线与本方法版本，重点是检查时间同步是否全面最优。数据显示基座的时间偏移略高于部分基线，说明仅靠监督训练时同步并非全面最优。

偏好优化才把该指标推到最好，这正是偏好循环的增量价值。下图是打鼓案例的频谱可视化，绿色虚线标出多次鼓击时刻。可用于检验时间对齐是否只停留在数字上。

> **看图路径：** 1. 先看顶部鼓面视频帧与四次鼓击虚线标记的时间位置；2. 再自上而下比较各方法频谱图中能量块是否只出现在虚线附近；3. 最后对比本方法行与真值行在静音段干净程度上的差异

[![原论文 Figure 3：Visualization of generated audio spectrograms.](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/567492a97560/figure-3.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/567492a97560/figure-3.png)

*论文图 3。原论文 Figure 3：“Visualization of generated audio spectrograms. “SAH” means the Seeing&Hearing method [47]. More subjective results are referred to the video demo in the supplementary material.”。*

该图顶部是鼓面视频帧，下方各行分别是不同方法与真值的频谱。可见早期方法频谱能量连续不断，而本方法与真值一样只在虚线附近出现短促能量块。

静音段干净，这种单样本可视化支持了时间同步的结论。但它是定性证据，不能替代多样本平均的时间偏移数字，也不能证明所有类别都有同样效果。

### 哪些结论有边界，哪些量没有被测量？

论文直接报告的是在 VGGSound 域内分布与对齐指标领先。域外基准上时间偏移最好，但语义分数次于用了筛选数据的大模型。有限解释是语义差距来自对方的数据筛选，而非结构必然优势。

时间差距来自共享解耦变换器的复杂度。这些解释有合理性，但论文没有做控制数据筛选的对照实验。因此应表述为可能的原因，而不是已验证的因果。

未验证的推测包括继续增加偏好迭代是否持续变差。换其他奖励权重是否改变结论，以及在更长视频或多人多声源场景下同步是否保持。论文没有测量误判率与推理延迟。

也没有报告训练硬件与耗时，因此不能承诺这些量得到改善。训练资源、推理开销与实际延迟应分开讨论，参数最少不等于推理最快。因为高帧率编码与多步积分仍有开销，输出帧率也未给出。

另一个边界是文本依赖。消融显示类别标签替代描述标题会掉点，说明方法依赖高质量描述性标题。如果实际部署时只有类别标签或无文本，性能可能回落。

论文虽然支持推理时省略某一模态，但没有给出单模态缺失下的完整数字表。这部分应记为未评测边界，而不是默认可以无损降级。

### 复现先做什么，需要哪些信息条件？

复现应先准备数据与特征。按论文划分过滤无效编号，保留训练验证测试数量。每段取前 8 秒，音频重采样到 44.1 千赫兹并转谱图，视频分别按低帧与高帧抽取。

文本优先用描述性标题，缺失时用模板句。特征建议预抽取并缓存，以降低训练成本。模型侧搭建协同注意力变换器，变分自编码器与声码器用预训练权重。

除非后续更新说明，否则不要自行微调它们。训练先跑基座数十万步，优化器用 AdamW，学习率按热身再分段衰减的安排。训练时以一定概率掩码视觉或文本，以支持无条件引导。

推理用多步欧拉积分与引导尺度。偏好阶段在验证集上每对生成 5 个候选，用语义与时间加权排序取胜败对。微调数千步，学习率热身后恒定，最多做 3 轮并选最好一轮。

奖励加权系数在原文未给出具体值，这是复现前必须补问的第一项缺项。关于可用性，证据清单显示本次没有完成超链接状态验证的资源。

因此不能声称代码、模型或数据已公开。论文首页给出了项目页地址，但按证据规则应写本次未能确认可达。复现前应先确认能合法获取视频与标题，再谈权重下载与系统可运行。

### 何时值得尝试这个方案？

当任务同时要求语义正确与帧级同步，且输入能提供视频加描述性文本时。这个方案值得尝试，它的可复述要点是先用插值把视频长度对齐到音频潜变量长度。

再用协同注意力分开处理音视频自交互与文本交叉注入。最后用自动排序的偏好优化补齐监督训练顾不上的同步误差。主结果表显示这种组合在最少参数下取得了联合收益。

打鼓可视化也显示了静音段更干净、敲击更准时的效果。当只有类别标签、无文本，或对推理步数与高帧率编码开销敏感时。应谨慎采用，此时可先做两项验证。

把描述标题退化为类别标签看分布与时间偏移掉多少。只用低帧率分支看时间指标损失多少，如果掉点不可接受。再考虑是否引入外部文本音频数据或更大的主干。

总体上，论文把视频生音频从配一段像的声音推进到配一段准时的声音。其代价是更复杂的条件管线与需要调参的偏好循环，理解这一取舍比记住单一分数更重要。

## 📐 原文公式与排版

以下展示论文原页中的数学表达区域，保留原始上下标、分式和符号排版。区域序号仅用于本文导航，不是论文公式编号。

[![原文数学表达区域 1，PDF 第 5 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/d1b5b7cc0101/figure-1.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/d1b5b7cc0101/figure-1.png)

区域 1 · [查看论文原页](https://openaccess.thecvf.com/content/CVPR2026/papers/Wang_Hear_What_You_See_Video-to-Audio_Generation_with_Diffusion_Transformer_and_CVPR_2026_paper.pdf#page=5)

另有 9 个候选区域因边界不明确或图片数量、尺寸限制未展开；请[查看完整论文](https://openaccess.thecvf.com/content/CVPR2026/papers/Wang_Hear_What_You_See_Video-to-Audio_Generation_with_Diffusion_Transformer_and_CVPR_2026_paper.pdf)中的原始排版。

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。
- 评分规则：type-aware-v1
- 评分模型：muse-spark-1.3-contributor
- 评分请求协议：openai_responses

---

[← 返回 cvpr-2026 论文汇总](/posts/conference-cvpr-2026/)
