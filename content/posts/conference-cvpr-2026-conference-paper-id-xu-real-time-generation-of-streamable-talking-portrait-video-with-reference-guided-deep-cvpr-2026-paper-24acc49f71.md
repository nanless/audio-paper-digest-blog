---
title: "Real-Time Generation of Streamable Talking Portrait Video with Reference-Guided Deep Compression VAEs"
date: 2026-09-13
draft: false
description: "针对语音驱动说话人像需要同时满足实时流式、高保真和大范围躯干动态的问题，该工作用参考图引导的因果视频 VAE 把压缩率做到 768 并用块自回归整流流 Transformer 生成潜变量，在单卡实现 512×512 下 42 FPS，代价是强依赖参考图质量与训练数据分布且本次未能确认代码模型可达。"
tags: ["自回归模型", "变分自编码器", "实时处理", "流式处理", "音视频生成"]
categories: ["cvpr-2026 论文"]
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_paper_id: "conference:cvpr:2026:conference-paper-id:Xu_Real-Time_Generation_of_Streamable_Talking_Portrait_Video_with_Reference-Guided_Deep_CVPR_2026_paper"
paper_digest_source_kind: conference
paper_digest_conference_id: "cvpr-2026"
paper_digest_conference_record_url: "https://openaccess.thecvf.com/content/CVPR2026/html/Xu_Real-Time_Generation_of_Streamable_Talking_Portrait_Video_with_Reference-Guided_Deep_CVPR_2026_paper.html"
paper_digest_conference_pdf_url: "https://openaccess.thecvf.com/content/CVPR2026/papers/Xu_Real-Time_Generation_of_Streamable_Talking_Portrait_Video_with_Reference-Guided_Deep_CVPR_2026_paper.pdf"
paper_digest_api_reader_contract: "beginner-researcher-v3"
paper_digest_api_reader_article_sha256: "5f77969e17e89ac80c01faa33bb9d3ad9a2288e1961b9bc183b1b249e51b218c"
paper_digest_api_reader_plan_sha256: "074e836410c9a19021c9dd73ecb79b0a97455344a9d6b6773d70121c82e344f2"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings-v4"
paper_digest_api_reader_source_bindings_sha256: "9410da6539d9b7ce97311a669b1a4c2d1b2b7a881f1668ff498965b1275de297"
paper_digest_api_reader_source_table_count: 2
paper_digest_api_reader_source_formula_count: 0
paper_digest_api_reader_structured_artifacts_sha256: "39515992af0fc2c84e146e07df66efa8cd69da86b568fdd6bce97fe58da9f12f"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity-v1"
paper_digest_api_reader_author_identity_sha256: "b0b84c2cb50a1feba2f17f8319d77ee44c40df2e18220a5d41c8c824b05e2d54"
paper_digest_api_reader_author_count: 8
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity-v1"
paper_digest_api_reader_resource_identity_sha256: "a9b891920f048b8457e58f2cdf8546a2d0c5a37339fa1e2677c5157b8de84575"
paper_digest_api_reader_resource_count: 0
paper_digest_api_reader_decision_projection: "api-reader-decision-projection-v2"
paper_digest_scoring_contract: "api-scoring-audit-v2"
paper_digest_taxonomy_contract: "paper-taxonomy-flat-tags-compat-v1"
paper_digest_taxonomy_selection_contract: "paper-taxonomy-selection-v1"
paper_digest_taxonomy_registry_version: "paper-taxonomy-v1"
paper_digest_taxonomy_registry_sha256: "15c82a567ce5a55dc1175684ed08b64c158558639d9c8fb822c9587ec32a8778"
paper_digest_taxonomy_concepts: [{"facet":"method","id":"method.autoregressive","label":"自回归模型"},{"facet":"method","id":"method.vae","label":"变分自编码器"},{"facet":"setting","id":"setting.real-time","label":"实时处理"},{"facet":"setting","id":"setting.streaming","label":"流式处理"},{"facet":"task","id":"task.av-generation","label":"音视频生成"}]
paper_digest_primary_task: "音视频生成"
paper_digest_primary_method: "变分自编码器"
paper_digest_score: 7.1
paper_digest_rank_bucket: "前50%"
paper_digest_document_type: "方法研究"
paper_digest_conference_structure: replayable-pdf-layout-v1
---

# 📄 把长相交给参考图：参考引导深度压缩如何让说话人像视频实时可流式生成

> 英文题目：*Real-Time Generation of Streamable Talking Portrait Video with Reference-Guided Deep Compression VAEs*

> 会议身份：`conference:cvpr:2026:conference-paper-id:Xu_Real-Time_Generation_of_Streamable_Talking_Portrait_Video_with_Reference-Guided_Deep_CVPR_2026_paper`


> ✅ 来源为官方会议 PDF；表格与 Figure 按原文证据绑定。PDF 公式以原页区域图片展示，未冒称作者原始 TeX。

> 会议来源：[官方记录](https://openaccess.thecvf.com/content/CVPR2026/html/Xu_Real-Time_Generation_of_Streamable_Talking_Portrait_Video_with_Reference-Guided_Deep_CVPR_2026_paper.html) · [官方 PDF](https://openaccess.thecvf.com/content/CVPR2026/papers/Xu_Real-Time_Generation_of_Streamable_Talking_Portrait_Video_with_Reference-Guided_Deep_CVPR_2026_paper.pdf)

标签：#自回归模型 #变分自编码器 #实时处理 #流式处理 #音视频生成

评分：**7.1/10** | 创新 1.6/2 | 技术严谨 1.2/1.5 | 实验充分 1.0/1.5 | 清晰度 0.8/1 | 影响力 1.0/1.5 | 开源 0.0/1.5 | 可复现 0.1/0.5 | 工程/实践 1.4/1.5

排名：前50% | 文档类型：方法研究

## 👥 作者与机构

- Sicheng Xu：机构信息未能从会议 PDF 纯文本可靠映射
- Yu Deng：机构信息未能从会议 PDF 纯文本可靠映射
- Shoukang Hu：机构信息未能从会议 PDF 纯文本可靠映射
- Yichuan Wang：机构信息未能从会议 PDF 纯文本可靠映射
- Yizhong Zhang：机构信息未能从会议 PDF 纯文本可靠映射
- Zhan Chen：机构信息未能从会议 PDF 纯文本可靠映射
- Jiaolong Yang：机构信息未能从会议 PDF 纯文本可靠映射
- Baining Guo：机构信息未能从会议 PDF 纯文本可靠映射

## 📌 核心摘要

该任务以一张或多张参考人像与任意语音为输入，流式输出任意时长、唇音同步的半身说话人视频，难点是超高压缩下保真、长时因果一致与低延迟难以兼得。方法分两级：参考引导深度压缩因果视频变分自编码器（causal video VAE）先把视频压为紧凑隐变量，参考引导融合模块把参考图特征在解码中间层注入，使隐变量主载运动、解码时补回外观；块自回归整流流变换器（blockwise autoregressive Rectified Flow Transformer）以音频与参考隐变量为条件逐块去噪生成隐序列，再流式送入因果解码器成像。与复用通用大隐空间的肖像扩散模型不同，该设计把人物先验转化为压缩增益并原生支持键值缓存（KV caching）增量推理。在512×512 HDTF未见身份评测中，单参考取得同步置信度8.943、同步距离6.286、头动音频对齐0.699，优于Sonic的8.799、6.602、0.689，但FVD25的62.300弱于Sonic的43.920；三参考时FVD25降至43.270追平Sonic，单张H100达42.3 FPS约25倍于Sonic。适用边界为正脸半身受控说话场景，极端姿态、遮挡、长时一致性外推与训练推理成本均未验证。原文未披露代码权重与训练开销。

## 🔗 开源与复现资源

本次未形成可展示的已核验资源记录，开放状态尚未核实。
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 输入是什么，要输出什么，为什么实时流式很难？

这篇论文研究的输入是两类信号：一张或多张人物参考图，加上任意时长语音音频。目标输出是与语音同步的说话人像视频，分辨率为 512×512，要求能从音频连续生成任意长度视频并实时播放。必须保留的信息条件是人物身份外观由参考图决定，口型、表情、头部与躯干运动由音频驱动，背景与光影要保持合理连续。

难点在于 3 个目标互相牵制。第一是质量与生动度：不仅唇音要对齐，还要有表情、头动、躯干、头发动态和阴影变化，且裁剪范围要超出头部、包含较宽的躯干区域以增强沉浸感。第二是效率：已有大视频扩散模型能生成生动的人像动态，但原文报告生成 5 秒视频需要在现代 GPU 上花费数分钟，只能做离线内容生产。第三是流式：交互应用要求边生成边播放、延迟低、长视频无时间断裂，而整段去噪的扩散流程天然需要等待完整上下文。

为理解这种矛盾，可以设想一个教学例子：给定一张正面半身照和一句你好，模型需要输出数秒内嘴部张合、头部微动、衣领与头发轻微晃动且背景不变的视频。例子只用于说明任务形态，不附加任何数值承诺。论文的思路是把重建与生成的负担拆开：先用一个极紧凑的因果潜空间把视频变短，再用自回归生成器逐块预测潜变量并立即解码，从而同时压低计算量和延迟。

下图展示了该任务的输入输出形态与期望的动态维度，是全文目标最直观的锚点，阅读时先建立输入、输出与评价维度的对应关系。

> **看图路径：** 1. 先看顶部输入到输出的箭头：单张或多张参考图加语音经实时流式箭头得到视频；2. 再看右侧七个能力图标：高速 42 FPS、唇音同步、表情、头动、躯干、头发、阴影；3. 对照左下角小参考图与右侧大生成帧，确认身份外观保持而口型表情变化

[![原论文 Figure 1：Our method synthesizes streamable talking portrait videos given speech audio and one or multiple…](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/e3474d5f7e85/figure-1.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/e3474d5f7e85/figure-1.png)

*论文图 1。原论文 Figure 1：“Our method synthesizes streamable talking portrait videos given speech audio and one or multiple reference images, enabling generation of 512 × 512 videos at 42 FPS on a single GPU.”。*

图中顶部明确画出单张或多张参考图与语音经实时流式箭头生成视频的路径，右侧并列高速、唇音同步、表情、头动、躯干运动、头发动态与阴影 7 个图标。下半部分三排人物示例中，每组左下角小图为参考身份，右侧大图为不同时刻生成帧，可以看到同一服装背景下口型与表情连续变化。图注同时声明论文中身份为不存在的合成身份，由 Gemini 2.5 flash image 生成，这意味着外观多样性展示不等同于真实身份保持测试，后文实验节需回到 HDTF 等真实基准核对。

### 已有路线在输入目标监督和运行阶段上有何不同？

音频驱动说话人像的第一条路线是基于显式运动表示的方法。输入同样是音频加单图，目标多集中在脸部或头部区域，监督依赖稀疏关键点、3 维参数或学习到的隐式运动特征。这类设计把运动与外观解耦，生成可控且计算较轻，历史上在唇同步、眨眼、注视和头部姿态上取得进展。但原文指出其精细真实感受限，难以刻画头发动态、躯干运动和复杂光影，因为紧凑运动瓶颈丢掉了非刚性细节。

第二条路线是大型视频生成基础模型做人像视频。输入可以是文本、图像或音频，目标是高质量离线视频，监督是海量视频数据的扩散或流匹配训练。这类模型能生成超出头部的生动动态与较强美学质量，但计算成本高，无法实时。论文列举的比较对象包括基于 Stable Diffusion 的 EchoMimic 与 Hallo、基于 Stable Video Diffusion 的 Hallo2 与 Sonic、基于 CogVideoX 的 Hallo3、基于 Wan2.1 的 FantasyTalking，它们都属于该路线，运行阶段为离线整段生成。

第三条路线是高效图像视频生成。一种做法是提高 VAE 压缩率以缩短潜变量序列，如 DC-AE 等工作，但多聚焦静态图像或离线视频。另一种做法是训练后蒸馏减少去噪步数，或把自回归与蒸馏结合实现实时。原文明确表示本方法不做蒸馏，而是依靠参考引导深度压缩 VAE 缩短序列，加上原生自回归设计支持顺序生成，从而在不蒸馏的情况下实现 512×512 实时。与 MAGI-1 等大规模自回归视频生成相比，本工作的差异在于条件是音频加参考图、场景限定为说话人像，并引入块级因果注意力与教师强制训练。

对照时要注意同输入同目标同运行阶段：显式运动方法运行快但目标区域小，基础模型质量高但运行阶段为离线，本文方法限定在说话人像的流式阶段做比较，不能把类别差异直接读作同条件胜负。

### 任务的形式化与三项目标如何约束设计？

论文把任务写成条件概率建模问题：给定参考图集合与语音信号，对人像视频序列建模。视频记为多帧序列，参考图集合包含一张或多张人像图，音频为连续语音特征。生成过程分解为两个子任务：先以音频为条件生成紧凑潜表示，再把潜表示解码为最终视频。这种分解沿用了现代视频生成的潜空间范式，但增加了因果与流式约束。

三项目标直接决定模块选择。实时可流式要求 VAE 的编解码是因果的，去噪生成器是自回归的并支持键值缓存复用。高视觉质量与生动度要求潜空间虽紧凑但重建保真，且生成器能建模唇音同步、头部音频对齐与整体视频质量。处理宽躯干区域要求编码器裁剪与感受野覆盖胸肩范围，而非仅人脸先验。

设计上因此出现两个关键判断。第一，说话人像视频的主体固定，参考图与目标视频共享大量外观信息，若解码器能直接看到参考图，编码器就不必重复编码长相，可专注动态信息。第二，潜变量序列必须足够短，生成器的自注意力成本才可接受，这推动压缩率远高于通用视频扩散模型的常用水平。后续方法节将沿一个样本走完输入到输出，再展开每个模块的具体计算。

### 方法全景：一个样本如何走完输入到输出？

假设输入是一张半身参考图与一段语音。处理分 3 步。第一步是编码：视频编码器把训练时的真实视频压成潜变量，参考图经同一编码器前端逐帧编码为参考潜变量与中层特征，音频经预训练音频编码器提取特征再经可训练时间嵌入器压缩 4 倍以对齐潜变量时间分辨率，并沿空间轴广播以便逐元素融合。第二步是生成：整流流 Transformer 以参考潜变量与压缩音频为条件，从噪声出发逐块去噪得到视频潜变量，块内全注意力、块间只看历史块。第 3 步是解码：因果视频解码器把潜变量先空间上采样，再经参考融合模块注入参考外观，最后联合时空上采样重建视频帧，并可流式输出。

下图是全文结构锚点，建议按输入到输出的主路径阅读，再看参考支路在何处汇入。

> **看图路径：** 1. 沿左下输入视频经因果视频编码器到潜变量 z 再经空间上采样与参考融合到重建视频；2. 观察左上参考图支路与主支路共享权重的标注及交叉注意力汇入位置；3. 看右侧音频编码压缩为 a'后与加噪潜变量通道拼接送入因果 Transformer 块

[![原论文 Figure 2：Overview of our framework. Left: The proposed reference-guided causal video VAE.](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/e3474d5f7e85/figure-2.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/e3474d5f7e85/figure-2.png)

*论文图 2。原论文 Figure 2：“Overview of our framework. Left: The proposed reference-guided causal video VAE.”。*

左侧为参考引导因果视频 VAE：下方输入视频经空间时间下采样与空间下采样得到潜变量 z，经空间上采样后与左上参考图经共享权重编码得到的中层特征做自注意力与交叉注意力融合，再经空间时间上采样得到重建视频，右上小框标注因果残差视频自编码的上下采样残差设计。右侧为生成器：输入视频分别做随机采样编码得到参考潜变量与干净目标潜变量，加噪后与音频压缩特征通道拼接送入因果 Transformer 块输出预测潜变量。图中查询键对标注表明融合发生在 2 次上采样之间，这是理解压缩 efficacy 的关键位置，后文组件节将拆解该融合与残差编码的计算细节。

### 编码器解码器与参考融合各自分工什么？

因果视频 VAE 采用 2 级对称结构。编码器包含级联的两个模块：第一个模块同时做空间与时间下采样，第二个模块进一步压缩空间分辨率。输入视频的时间维度记为 T 加 1，这是因果视频 VAE 兼容单图的常见设计，第 1 帧可视为图像。压缩后得到通道数、时间、高度、宽度 4 个维度的潜张量。解码器镜像该层级：第一个解码模块做空间上采样，第二个模块联合做时空上采样以重建。4 个卷积模块均使用因果卷积，归一化采用均方根层归一化以保持时间因果。

参考引导注入发生在 2 次解码之间。具体做法是复用编码器前端逐帧处理参考图，得到保留主体与背景外观线索的中层特征图。潜变量经第 1 次空间上采样后得到相同空间尺寸的特征，在融合 Transformer 中先做帧内自注意力以维持因果，再做交叉注意力从参考特征中注入细粒度视觉信息，最后送入第二次解码。训练时从输入视频随机采样不同数量参考图，使模型在测试时能处理用户提供的可变数量参考输入。

**参考引导 × 深度压缩 VAE：** 参考引导负责把人物长相和背景外观直接提供给解码器，深度压缩 VAE 负责把视频压成极短的潜变量序列，二者搭配的理由是说话人像视频主体固定、大量比特浪费在重复外观上，组合后编码器只需编码运动与光影变化，从而在 768 倍压缩下仍保持重建保真。

**因果卷积 × 流式解码：** 因果卷积负责只允许当前帧依赖过去帧、不依赖未来帧，流式解码负责逐块输出视频而不等待整段生成，搭配原因是只有因果结构才能保证任意长度拼接时没有时间断裂，组合后生成器每算出一块潜变量就可立即送入解码器显示，降低首帧延迟。

**整流流 × 块自回归：** 整流流负责学习从噪声到目标潜变量的传输向量场并用常微分方程采样去噪，块自回归负责把潜变量序列切成不重叠块、块内全注意力、块间只看历史，搭配原因是整流流本身是整段去噪、难以流式，组合后每次只去噪当前块并复用历史键值缓存，兼顾生成质量与低延迟。

**因果残差自编码 × 时空分辨率变换：** 时空分辨率变换负责在通道与时间或空间之间折叠以改变分辨率，因果残差自编码负责用通道平均或复制做维度对齐的直通残差支路，搭配原因是高压缩下卷积主支路易丢失细节，组合后残差支路保留可逆的结构信息，第 1 帧单独处理以维持因果，进一步放大参考引导的增益。

下图拆解了残差分支在分辨率变换时的两步顺序与首帧特殊处理，是复述因果性的直接依据。

> **看图路径：** 1. 先看上半下采样支路中时间到通道与空间到通道的两步顺序；2. 注意首帧特征被单独引出的箭头，确认其不参与时间折叠；3. 对比下半上采样中通道复制与通道到时间的逆操作位置

[![原论文 Figure 3：Causal residual video auto-encoding.](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/e3474d5f7e85/figure-3.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/e3474d5f7e85/figure-3.png)

*论文图 3。原论文 Figure 3：“Causal residual video auto-encoding. We apply sepa- rate temporal and spatial down/up-sampling with residual encod- ing.”。*

上半下采样先做时间到通道折叠以改变时间分辨率并用通道平均对齐维度，且排除第 1 帧，再对所有帧做空间到通道折叠同样用通道平均对齐，若启用时间处理则空间步骤在其后。主分支做相同的时间与空间操作但用卷积层做特征维度匹配。下半上采样为逆过程，用通道复制与通道到时间或空间实现维度恢复，第 1 帧同样独立处理以保持因果。像素上可看到首帧特征箭头单独引出，上下两路最终相加形成残差，这是高压缩下保持细节的核心动作。

块自回归注意力的因果结构如下图所示，阅读时先分清查询与键的分组再看可见区域。

> **看图路径：** 1. 先确认横轴三组键与纵轴三组查询的划分：参考、干净历史、带噪当前；2. 观察绿色块内全注意与块间下三角因果的阶梯形状；3. 检查蓝色对角块，确认当前块去噪时只融合对齐的音频与空间位置

[![原论文 Figure 4：The causal block- wise attention mask.](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/e3474d5f7e85/figure-4.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/e3474d5f7e85/figure-4.png)

*论文图 4。原论文 Figure 4：“The causal block- wise attention mask.”。*

横轴为 3 组键：参考潜变量、干净历史潜变量、带噪当前潜变量与音频融合序列，纵轴为对应 3 组查询。橙色竖条表示所有查询都可见参考，绿色阶梯表示历史块的因果可见，蓝色对角表示当前块内全注意而块间仅看过去。该掩码同时降低显存与计算，并天然支持流式，因为每时刻生成只依赖已生成上下文。

### 训练目标、教师强制与推理外推如何衔接？

VAE 训练目标是最小化重建帧与原始输入的差异，包含逐像素绝对误差项与感知差异项，权重为两个标量系数，并对潜变量加 Kullback-Leibler 正则以获得结构良好的潜空间。论文未报告这两个权重的具体数值与退火策略，这是复现时需要补看补充材料或代码的缺项。训练初期在 256 分辨率与 5 帧短片段上训练，再逐步增加片段长度以减少时间漂移并增强时间一致性，最后在 512 分辨率微调。

生成器采用条件流匹配损失训练。训练时把视频片段编码为目标潜变量，按时间步加噪构造带噪潜变量，与压缩音频沿通道拼接，再展平并与展平参考潜变量拼接作为 Transformer 输入，去噪时间步经自适应层归一化注入。网络预测从噪声到干净数据的速度场，损失为预测向量场与目标差的平方误差。训练中随机把参考潜变量与音频替换为可学习空嵌入以支持推理时分类器无关引导，同时随机掩码参考潜变量以支持可变数量参考。作为上下文的真实潜变量会加 0 到 0.7 水平的噪声以防止漂移并缓解训练推理失配，采样段若包含首帧则对首帧加可学习掩码以区分其未压缩特性。

**教师强制 × 键值缓存：** 教师强制负责训练时用真实历史潜变量做干净上下文、并加高斯噪声防止漂移，键值缓存负责推理时复用已生成块的注意力键值而不重算，搭配原因是训练与推理的上下文分布不一致，组合后训练模拟带噪历史、推理复用历史，使得分块生成能窗口接窗口连续外推。

推理时模型逐块自回归预测潜变量块并流式送入解码器，窗口内应用键值缓存复用历史，超出一窗口时复用上一窗口最后一块作为下一窗口上下文以保证无缝拼接。去噪过程原文报告使用 12 步并设置时间步偏移为 5，分类器无关引导对音频与参考潜变量的尺度为 2。这些超参数为经验设置，复现时应保持一致再做消融。

### 数据、基准、指标与速度口径是什么？

训练数据由过滤后的 VoxCeleb2 约 50 小时说话人像视频与自有说话人像数据集约 280 小时视频组成，共约 10,000 个不同身份。视频帧裁剪为人像区域，切分为最长 10 秒的片段。评估用两个基准：HDTF 按训练相同方式处理，为保证身份均衡每个身份最多采样两段，共 66 个未见身份的 123 段；自采 PortraitOneMin 包含 16 个未见身份的 32 个 1 分钟片段，来源为在线辅导与教育讲座，口语风格多样。VAE 重建消融另含 VoxCeleb2 约 1 千片段测试划分。所有评估在 512×512 分辨率进行。

指标按问题组织。唇音同步用同步网络的置信分数与特征距离，分数越高、距离越低表示同步越好。头部姿态用音频对齐指标衡量与输入音频的一致性。整体视频质量用连续 25 帧序列计算的视频距离，越低越好。速度在单张 H100 上测量，定义为每个方法生成窗口的帧数除以生成时间，本文方法取最长键值缓存窗口报告速度下界。

比较条件为所有方法与其他单参考设置均用第 1 帧做参考，本文方法另设多参考变体：两张时加原视频最后 1 帧，3 张时再加中间帧。原文说明 FantasyTalking 在 PortraitOneMin 上因实现无法处理长视频生成而未报告，这是明确的评测边界。

网络规模按原文交代以便复现预算估计。编码器前端含 8 个残差块，每两块做 1 次空间下采样共 16 倍，第 4 与第 6 块做时间下采样共 4 倍，输出特征维度 1024，后级再做 2 次下采样。参考引导解码器含 6 个 Transformer 块，注意力头 16 个、头维度 64。生成器含 24 个 Transformer 块、12 个注意力头、头维度 128，采用 3 维旋转位置编码，音频嵌入用两个多层感知机分别处理首帧与剩余帧，生成窗口为 32 个潜帧对应 128 个视频帧，块大小为 4 个潜帧。资源状态方面，本次未发现来源绑定且完成安全验证的资源，不得声称代码模型或数据已公开，复现只能依据论文文字与补充材料。

### 主结果：质量与速度在什么条件下同时成立？

要回答的比较问题是：在相同单参考与 512 分辨率条件下，本文方法相对离线大模型能否在保持唇同步与视频质量的同时实现实时。公平条件是各方法均以第 1 帧为参考，指标方向为同步置信与头部对齐越高越好，同步距离与视频距离越低越好，速度越高越好。下表整理原文连续句子中直接报告的重建增益与压缩速度结论，保留基线对照与可运行策略的数值关系。

| 条件 | 指标 | 无参考基线 | 单参考本方法 | 多参考增益 |
| --- | --- | --- | --- | --- |
| VoxCeleb2 重建 | 峰值信噪比 | 29.071 | 31.676 (+2.605 dB) | 三参考下残差增益 4.375 dB 高于无残差 3.695 dB |
| 通用视频扩散 VAE | 总压缩率 | 48 | 768 | 约 10-15×高于常用 VAE |

表后解释需要同时看到收益与代价。收益是单张参考即可带来 2.605 dB 至 3.762 dB 的重建提升，且残差编码与参考引导协同放大增益，三参考下在 HDTF 上达到 6.696 dB 相对无参考的提升。压缩率 768 相对通用模型的 48 高出一个数量级，这是 42 FPS 实时生成的潜序列长度基础。代价是重建质量随参考数量增加而提升，意味着单参考长视频中外观锚点少时生成分布建模更难，原文也报告多参考通过提供更多人像信息与解码保真来降低视频距离。

未胜出项方面，单参考下整体视频距离在部分基准上仅为相当或略优于 Sonic 等大模型，并非全面碾压，且 FantasyTalking 长视频缺失使 PortraitOneMin 对比不完整。速度口径为最长缓存窗口的下界，实际短窗口会更快，但跨机型与批量设置会改变绝对帧率，复现时应按相同窗口定义重测。

另一组数字聚焦压缩配置本身，说明 768 是如何由时空因子与通道数构成，以及速度结论的原文表述边界，下表承接上表的压缩率结论展开机制分工。

| 项目 | 本方法数值 | 对照基线数值 | 倍数关系 | 来源条件 |
| --- | --- | --- | --- | --- |
| 空间下采样因子 | 64 | 通用模型隐含更低 | 总压缩 768 的组成部分 | 512 分辨率视频编码 |
| 时间下采样因子 | 4 | 通用模型隐含更低 | 总压缩 768 的组成部分 | 因果卷积保持首帧 |
| 潜通道维度 | 64 | 通用模型隐含更低 | 总压缩 768 的组成部分 | 潜张量通道数 |
| 总压缩率 | 768 | 48 | 约 10-15× | 相对常用视频扩散 VAE |
| 生成速度 | 42 FPS | 离线模型需数分钟产 5 秒 | 超过 25×快 | 单卡 512×512 流式 |

该表显示压缩并非单一技巧，而是空间 64 乘时间 4 再结合通道维度的总体效果，速度结论限定在单 GPU、512×512 与流式窗口定义下。限制是原文未给出不同 GPU 或不同 batch 下的延迟分布，也未测量误判率与长时漂移的定量曲线，因此不能把 42 FPS 直接承诺为任意硬件与任意时长的实际延迟改善。

### 参考数量与残差编码各自带来什么，能否拆开？

消融要验证两个假设：参考引导是否有效，残差编码是否在高压缩下进一步放大收益。实验保持除交叉注意力与残差分支外的其他组件相同，比较无参考与 1 至 3 张参考，以及无残差与有残差的组合。数据集覆盖 VoxCeleb2 与 HDTF，指标为绝对误差、峰值信噪比及其相对无参考的提升、感知距离。

原文报告显示，仅加一张参考就在 VoxCeleb2 上提升 2.605 dB、在 HDTF 上提升 3.762 dB，且参考数增至 2 与 3 时继续提升，说明网络确实把外观负担转移给参考支路。无参考时残差编码仅带来轻微提升，但随参考数增加，残差编码持续优于插值基线并放大参考增益，三参考下 VoxCeleb2 增益从 3.695 dB 升至 4.375 dB，HDTF 从 4.843 dB 升至 6.696 dB。这支持二者协同而非简单叠加的判断。

反证与边界同样重要。无参考基线感知距离明显更差，说明深度压缩本身不可独立承担高质量重建，必须依赖参考。若参考图与目标光照姿态差异大，或参考数量在推理时少于训练分布，增益可能回落，但原文未系统测量跨姿态参考的鲁棒性曲线，这是待验证项。复述时应强调差值单位为分贝的绝对提升，而非相对百分比，避免把百分点与百分比混淆。

### 哪些条件未测，哪些结论不能推广？

首先是资源可达性。本次未发现完成安全验证的开源资源，因此不能声称代码、权重或数据当前可用，复现需从论文文字与补充材料起步，训练资源与推理开销需自行估计。训练用了约 330 小时视频与约 1 万身份，但未报告训练步数、批量大小、优化器与显存预算，无法直接推断训练成本。

其次是评测边界。主结果在 HDTF 与 PortraitOneMin 上报告，但 FantasyTalking 长视频缺失，对比矩阵不完整。指标为自动同步与视频距离，未包含人评的自然度与身份一致性，也未测量长视频的漂移率、首帧延迟与尾帧延迟的分布。总体趋势不等于每组每步都成立，多参考改善视频距离的结论依赖首尾与中间帧作为锚点，若实际交互中只有单张正面照，质量应按单参考档位理解。

最后是因果推断的克制。相关性不等于因果，参考数量与质量正相关不能直接证明生成器建模能力提升，因为解码保真本身也会降低视频距离。残差编码的增益在有参考时更大，支持协同解释，但未做拿掉参考后残差必然失效的反事实实验，不应补写必然性判断。缺失证据不是技术错误，需要在复现中补测跨身份、跨光照与长时外推的稳定性。

### 要复现应先做什么，先固定哪些超参数？

复现第一步是重建数据管线。将视频裁剪为人像区域并统一到 512×512，切分为最长 10 秒片段，HDTF 按相同裁剪处理以保证指标可比，PortraitOneMin 若无法获取可用 HDTF 长片段做流式外推的替代测试，但需注明分布差异。先实现因果视频 VAE 的 2 级编解码与首帧特殊处理，再加入参考融合 Transformer 与残差分支，用重建损失加感知损失加潜正则训练，初期用短片段与低分辨率稳定训练后再加长微调。

第二步固定生成器配置。音频特征经预训练编码器提取后压缩 4 倍并广播到潜变量时空尺寸，参考潜变量随机掩码以支持 1 至 3 张可变输入，块大小取 4 潜帧、窗口取 32 潜帧，去噪 12 步、时间步偏移 5、分类器无关引导尺度 2、上下文噪声 0 到 0.7。推理时实现块因果掩码与键值缓存，超出一窗口时用上一窗口最后一块做上下文。先验证单参考在短窗口的唇同步与重建峰值信噪比，再测多参考与长视频的连续性。

第 3 步补验证。记录单 H100 上的窗口帧数除以生成时间的速度下界，同时记录首帧延迟与长视频漂移。对比时保留实际可运行的单参考策略，把搜索最优或事后挑选的最优帧另行标注，不代替可部署收益。若需判断何时值得尝试：当场景为固定单人、需要低延迟交互且能提供清晰参考图时该框架值得尝试；当参考姿态多变或硬件远弱于 H100 时，需先补测再承诺效果。

### 核心判断与后续验证清单

核心判断是把外观与动态解耦到解码器与编码器：参考图承担静态外观，潜变量只编码动态，从而用 768 倍压缩换来可自回归生成的短序列，再用因果解码保证流式无断裂。最强证据是单参考即带来 2.6 至 3.7 dB 的重建提升与 42 FPS 的单卡速度，而主要代价是对参考质量与数量的依赖以及大模型离线质量在单参考下仅为相当水平。

后续验证应补三项。第一是跨条件鲁棒性：单张侧脸或光照差异大的参考下的同步与身份保持。第二是长时稳定性：分钟级生成的漂移、闪烁与延迟分布，而非仅 25 帧视频距离。第三是成本透明：训练与推理的显存、延迟与不同 GPU 的帧率对照。只有补齐这些，才能把论文报告的实时生动从基准成绩转化为可部署的交互能力。

## 📐 原文公式与排版

以下展示论文原页中的数学表达区域，保留原始上下标、分式和符号排版。区域序号仅用于本文导航，不是论文公式编号。

[![原文数学表达区域 1，PDF 第 7 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/bcaad67b278c/figure-1.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/bcaad67b278c/figure-1.png)

区域 1 · [查看论文原页](https://openaccess.thecvf.com/content/CVPR2026/papers/Xu_Real-Time_Generation_of_Streamable_Talking_Portrait_Video_with_Reference-Guided_Deep_CVPR_2026_paper.pdf#page=7)

[![原文数学表达区域 2，PDF 第 7 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/bcaad67b278c/figure-2.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/bcaad67b278c/figure-2.png)

区域 2 · [查看论文原页](https://openaccess.thecvf.com/content/CVPR2026/papers/Xu_Real-Time_Generation_of_Streamable_Talking_Portrait_Video_with_Reference-Guided_Deep_CVPR_2026_paper.pdf#page=7)

[![原文数学表达区域 3，PDF 第 7 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/bcaad67b278c/figure-3.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/bcaad67b278c/figure-3.png)

区域 3 · [查看论文原页](https://openaccess.thecvf.com/content/CVPR2026/papers/Xu_Real-Time_Generation_of_Streamable_Talking_Portrait_Video_with_Reference-Guided_Deep_CVPR_2026_paper.pdf#page=7)

[![原文数学表达区域 4，PDF 第 7 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/bcaad67b278c/figure-4.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/bcaad67b278c/figure-4.png)

区域 4 · [查看论文原页](https://openaccess.thecvf.com/content/CVPR2026/papers/Xu_Real-Time_Generation_of_Streamable_Talking_Portrait_Video_with_Reference-Guided_Deep_CVPR_2026_paper.pdf#page=7)

[![原文数学表达区域 5，PDF 第 7 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/bcaad67b278c/figure-5.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/bcaad67b278c/figure-5.png)

区域 5 · [查看论文原页](https://openaccess.thecvf.com/content/CVPR2026/papers/Xu_Real-Time_Generation_of_Streamable_Talking_Portrait_Video_with_Reference-Guided_Deep_CVPR_2026_paper.pdf#page=7)

[![原文数学表达区域 6，PDF 第 7 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/bcaad67b278c/figure-6.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/bcaad67b278c/figure-6.png)

区域 6 · [查看论文原页](https://openaccess.thecvf.com/content/CVPR2026/papers/Xu_Real-Time_Generation_of_Streamable_Talking_Portrait_Video_with_Reference-Guided_Deep_CVPR_2026_paper.pdf#page=7)

[![原文数学表达区域 7，PDF 第 7 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/bcaad67b278c/figure-7.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/bcaad67b278c/figure-7.png)

区域 7 · [查看论文原页](https://openaccess.thecvf.com/content/CVPR2026/papers/Xu_Real-Time_Generation_of_Streamable_Talking_Portrait_Video_with_Reference-Guided_Deep_CVPR_2026_paper.pdf#page=7)

[![原文数学表达区域 8，PDF 第 7 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/bcaad67b278c/figure-8.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/bcaad67b278c/figure-8.png)

区域 8 · [查看论文原页](https://openaccess.thecvf.com/content/CVPR2026/papers/Xu_Real-Time_Generation_of_Streamable_Talking_Portrait_Video_with_Reference-Guided_Deep_CVPR_2026_paper.pdf#page=7)

[![原文数学表达区域 9，PDF 第 7 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/bcaad67b278c/figure-9.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/bcaad67b278c/figure-9.png)

区域 9 · [查看论文原页](https://openaccess.thecvf.com/content/CVPR2026/papers/Xu_Real-Time_Generation_of_Streamable_Talking_Portrait_Video_with_Reference-Guided_Deep_CVPR_2026_paper.pdf#page=7)

[![原文数学表达区域 10，PDF 第 7 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/bcaad67b278c/figure-10.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/bcaad67b278c/figure-10.png)

区域 10 · [查看论文原页](https://openaccess.thecvf.com/content/CVPR2026/papers/Xu_Real-Time_Generation_of_Streamable_Talking_Portrait_Video_with_Reference-Guided_Deep_CVPR_2026_paper.pdf#page=7)

[![原文数学表达区域 11，PDF 第 7 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/bcaad67b278c/figure-11.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/bcaad67b278c/figure-11.png)

区域 11 · [查看论文原页](https://openaccess.thecvf.com/content/CVPR2026/papers/Xu_Real-Time_Generation_of_Streamable_Talking_Portrait_Video_with_Reference-Guided_Deep_CVPR_2026_paper.pdf#page=7)

另有 8 个候选区域因边界不明确或图片数量、尺寸限制未展开；请[查看完整论文](https://openaccess.thecvf.com/content/CVPR2026/papers/Xu_Real-Time_Generation_of_Streamable_Talking_Portrait_Video_with_Reference-Guided_Deep_CVPR_2026_paper.pdf)中的原始排版。

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。
- 评分规则：type-aware-v1
- 评分模型：muse-spark-1.3-contributor
- 评分请求协议：openai_responses

---

[← 返回 cvpr-2026 论文汇总](/posts/conference-cvpr-2026/)
