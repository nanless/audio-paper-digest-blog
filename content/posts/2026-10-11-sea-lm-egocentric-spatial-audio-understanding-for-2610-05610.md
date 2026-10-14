---
title: "SEA-LM: Egocentric Spatial Audio Understanding for Wearable Microphone Arrays"
date: 2026-10-11
draft: false
tags: [联合声音事件检测定位, 声源定位, 语音识别, 多模态学习, 麦克风阵列]
categories: [论文速递]
description: "SEA-LM 针对可穿戴麦克风阵列的自我中心多声源场景，用 FOACoder 把可变阵列信号统一为一阶 Ambisonics 空间嵌入再与单声道语义嵌入联合输入大语言模型，在合成评测集上降低了方位角与俯仰角误差并改善了转写与检测，但结论只在仿真静态场景和 1211 种眼镜阵列配置内成立。"
hiddenInHomeList: true
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_arxiv_id: "2610.05610"
paper_digest_workbench_contract: "researcher-workbench-v1"
paper_digest_reader_title: "智能眼镜上的自我中心空间音频理解：SEA-LM 如何听清谁在何处说什么"
paper_digest_original_title: "SEA-LM: Egocentric Spatial Audio Understanding for Wearable Microphone Arrays"
paper_digest_arxiv_version: 2
paper_digest_arxiv_versioned_id: "2610.05610v2"
paper_digest_arxiv_abs_url: "https://arxiv.org/abs/2610.05610v2"
paper_digest_arxiv_pdf_url: "https://arxiv.org/pdf/2610.05610v2.pdf"
paper_digest_primary_task: "联合声音事件检测定位"
paper_digest_tags_contract: "paper-tag-flat-tags-v2"
paper_digest_tags_selection_contract: "paper-tag-selection-v2"
paper_digest_tags_registry_version: "paper-tag-catalog-v2"
paper_digest_tags_registry_sha256: "0a0847314ab2059d95efac33376414498e598a1f02a1486869bee0efc481d1f7"
paper_digest_tags_concepts: [{"facet":"task","id":"task.seld","label":"联合声音事件检测定位"},{"facet":"task","id":"task.localization","label":"声源定位"},{"facet":"task","id":"task.asr","label":"语音识别"},{"facet":"method","id":"method.multimodal-learning","label":"多模态学习"},{"facet":"setting","id":"setting.microphone-array","label":"麦克风阵列"}]
paper_digest_primary_method: "多模态学习"
paper_digest_score: 7.0
paper_digest_rank_bucket: "前50%"
paper_digest_document_type: "模型报告"
paper_digest_one_sentence: "SEA-LM 针对可穿戴麦克风阵列的自我中心多声源场景，用 FOACoder 把可变阵列信号统一为一阶 Ambisonics 空间嵌入再与单声道语义嵌入联合输入大语言模型，在合成评测集上降低了方位角与俯仰角误差并改善了转写与检测，但结论只在仿真静态场景和 1211 种眼镜阵列配置内成立。"
paper_digest_authors: [{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Sonal Kumar"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Sinan Hersek"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Artem Dementyev"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Mengzhen Pan"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Ishan Chatterjee"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Anurag Kumar"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Ramani Duraiswami"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Dinesh Manocha"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Andrea Colaco"}]
paper_digest_abstract_sha256: "d79227a131beddceaee3750e810290b31fb0db923beaa25a25f5117e34a00833"
paper_digest_sidecars: {"citation.bib":{"sha256":"e4512b01d5c0b821a6307a6b143dc1b10f0a95f968aa9390227d62a83a6a89d5","url":"/audio-paper-digest-blog/data/papers/2026-10-11/2610-05610/citation.bib"},"citation.json":{"sha256":"0da19bcda8296559a48cfff5b334b6d231ee990b0b3c55d5f9e3cd425af053d2","url":"/audio-paper-digest-blog/data/papers/2026-10-11/2610-05610/citation.json"},"citation.ris":{"sha256":"a7038a0b1edfb3dea49aee8bc83d9ed0e8cb87ac4ab387ceaae956a83c65eb99","url":"/audio-paper-digest-blog/data/papers/2026-10-11/2610-05610/citation.ris"},"rethink-context.json":{"contract":"paper-research-context-v2","sha256":"7f85e41ed73594054331ff82c34e6dee99ab3e42f05920d1bad43af55337e018","url":"/audio-paper-digest-blog/data/papers/2026-10-11/2610-05610/rethink-context.json"}}
paper_digest_api_reader_contract: "beginner-researcher-v3"
paper_digest_api_reader_article_sha256: "9649bcf9584b935ff832c1c027ffd4ec6faf3384e489dd1c30db3fe7c6cd51f4"
paper_digest_api_reader_plan_sha256: "56752ccb1e012c301cd2ff506684a0927d6324a7d81bf5122bffc4425626989f"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings-v4"
paper_digest_api_reader_source_bindings_sha256: "2ab9b63f33f8d78f0a12ba15ce87918e7c542babf987957948412cd0f4bd013d"
paper_digest_api_reader_source_table_count: 4
paper_digest_api_reader_source_formula_count: 3
paper_digest_api_reader_structured_artifacts_sha256: "716810a15f1c26eee060bdfdf1ac8bfb7a467d2e4a5e62c64d2fd19ad82fe5d5"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity-v1"
paper_digest_api_reader_author_identity_sha256: "52924adc0dbeff95e0938c28d65be9372d3635246fe31be750594f3e6d2d99d9"
paper_digest_api_reader_author_count: 9
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity-v1"
paper_digest_api_reader_resource_identity_sha256: "ca2ca5609dbcfce991b5479bc12d881526d3318819459435e8530aca64acdf5e"
paper_digest_api_reader_resource_count: 1
paper_digest_api_reader_figure_persistence: "ephemeral-no-persisted-figure-assets-v1"
paper_digest_api_reader_decision_projection: "api-reader-decision-projection-v2"
---

# 📄 智能眼镜上的自我中心空间音频理解：SEA-LM 如何听清谁在何处说什么

> 英文题目：*[SEA-LM: Egocentric Spatial Audio Understanding for Wearable Microphone Arrays](https://arxiv.org/abs/2610.05610v2)*

> 标签：#联合声音事件检测定位 | #声源定位 | #语音识别 | #多模态学习 | #麦克风阵列
>
> 评分：**7.0/10** | 创新 1.5/2 | 技术严谨 1.2/1.5 | 实验充分 1.2/1.5 | 清晰度 0.8/1 | 影响力 1/1.5 | 开源 0/1.5 | 可复现 0.3/0.5 | 工程/实践 1/1.5


## 👥 作者与机构

- Sonal Kumar：机构信息未在 arXiv HTML 中可靠披露
- Sinan Hersek：机构信息未在 arXiv HTML 中可靠披露
- Artem Dementyev：机构信息未在 arXiv HTML 中可靠披露
- Mengzhen Pan：机构信息未在 arXiv HTML 中可靠披露
- Ishan Chatterjee：机构信息未在 arXiv HTML 中可靠披露
- Anurag Kumar：机构信息未在 arXiv HTML 中可靠披露
- Ramani Duraiswami：机构信息未在 arXiv HTML 中可靠披露
- Dinesh Manocha：机构信息未在 arXiv HTML 中可靠披露
- Andrea Colaco：机构信息未在 arXiv HTML 中可靠披露

## 📌 核心摘要

输入是智能眼镜上4至9个麦克风采集的30秒多通道音频，输出是结构化JSON声源列表，每个外部源给出声音类型、起止时间、方位角、俯仰角、距离与类别方向，转写任务还输出文本并区分佩戴者与旁观者。难点在于阵列几何可变、混响与头体散射使空间线索失真，多源重叠时转写文本token数量远多于方向与时间token，容易淹没定位监督。FOACoder先把可变阵列经匹配波束成形转成一阶Ambisonics加一路原始通道，再用因果Transformer编出每100ms一个的空间嵌入。SEA-LM把该空间支路与每40ms一个的单声道语义支路一同送入Gemma-4-E4B-it，用两阶段课程学习六类整体与条件式任务，并对空间与时间数值token加权。在合成held-out评测的整体定位任务1上，SEA-LM方位角平均绝对误差为14.9度，低于仅替换空间编码器的SELDNet++基线的80.6度。在报告条件的课程消融中，直接两阶段的任务1方位角平均绝对误差为14.9度，优于插入Stage2a的15.5度。在合成held-out评测的定向佩戴者转写上，SEA-LM词错误率为5.8%，低于对照基线的31.6%。结论只在两种眼镜几何衍生的1211种配置与静态合成场景内成立，未验证真实与动态场景；编码器已披露在8卡H100上训练200万步、批量128及语言模型两阶段配置，未披露墙钟时长、推理延迟与显存占用。

## 🔗 开源与复现资源

- 第三方资源：<https://github.com/partha2409/DCASE2024_seld_baseline> — 链接可访问（HTTP 200）

可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 智能眼镜要听懂什么：输入、目标与必须保留的信息

这篇论文处理的是戴着智能眼镜的人在复杂房间里听到的声音。输入是眼镜上 4 到 9 个麦克风录到的最长 30 秒多通道音频，采样率 16 kHz，场景里最多有 3 个同时或交叠的声源，包括佩戴者自己的说话、旁观者的说话和环境非语音。目标是让多模态大语言模型同时回答 5 个问题：有什么声音、何时出现、从佩戴者看去的方位角、俯仰角和距离是多少、说了什么内容、说话的是佩戴者还是旁人。

必须保留的信息是通道间的时间差和强度差等空间线索，以及佩戴者与外部声源的身份区分。输出是结构化 JSON 列表，每个声源给出类型、起止时间，外部源还给出数值方位角、俯仰角、距离和类别化方向与距离描述，语音源还给出转写文本，而佩戴者语音只给转写和时间，不给空间属性。读者在理解后续编码器和评测时，需要先记住这种自我中心坐标：以佩戴者面朝为正 x 轴，左为正 y 轴，上为正 z 轴，方位角在水平面内从正 x 轴起算，俯仰角从水平面向上为正。

下面这张坐标示意图有助于固定方位角、俯仰角和距离的几何含义，后文所有定位误差都相对这个坐标系计算，阅读定位表时需要回到这个定义。

> **看图路径：** 1. 确认 x 轴为前方、y 轴为左方、z 轴为上方的佩戴者中心朝向；2. 区分方位角在水平面内绕 x 轴测量与俯仰角从水平面向上测量

[![原论文 Figure 2：Spherical coordinate system showing distance r, elevation angle \\theta (measured from the…](https://arxiv.org/html/2610.05610v2/coord_sys.svg)](https://arxiv.org/html/2610.05610v2/coord_sys.svg)

*论文图 2。原论文 Figure 2:：“Spherical coordinate system showing distance r, elevation angle \theta (measured from the xy-plane), and azimuth angle \phi.”。*

图中用原点表示佩戴者设备位置，从原点出发的 3 条箭头分别标出 x、y、z 轴，空间点用虚线投影到水平面来分解水平偏转与垂直仰角，斜边长度即距离。这种表示把方向解耦为水平一周 360 度的方位与上下正负 90 度的俯仰，论文的类别方向也是按这两个角度范围划分的，后文谈到前方、左方、后方、右方、上方和下方时，指的都是这个坐标下的区间映射。

### 已有路线为何不够：双耳、一阶 Ambisonics 理想信号与单声道模型的分工

在相同输入、相同目标和相同运行阶段下比较，已有工作各只解决了一部分问题。单声道大音频语言模型只用一路音频做语义推理，输入就丢掉了多通道空间线索，因此不能定位也不能在鸡尾酒会式交叠中有效分离说话人。双耳模型如 BAT、OWL 等限定在耳机式双通道、一到两个声源，不预测事件边界，不做转写，也不区分佩戴者与旁观者。

1 阶 Ambisonics 模型如 Sci-Phi 等假设输入就是理想合成的 Ambisonics 房间脉冲响应或理想球形阵列录音，没有建模从不规则可穿戴阵列经波束形成转到 1 阶 Ambisonics 时引入的频谱染色和通道衰减。PhaseCoder 支持任意原始阵列和指向性转写，但其语言模型只在无交叠纯语音场景训练，把非语音当干扰，也不建模设备声学。

本文的差异在于输入就是眼镜不规则阵列经波束形成后的非理想 1 阶 Ambisonics，目标同时覆盖连续 3 维定位、时间边界、语音与非语音理解、交叠分离、佩戴者与旁观者归属以及整体与指向性转写，评测也在 1211 种眼镜阵列配置上不做阵列特定重训。

### 论文要解决的三个具体困难是什么

第一个困难是硬件泛化。两副眼镜分别有 9 和 15 个可用麦克风位置，实际每次只选其中 4 到 9 个组成阵列，不同组合对高频空间线索和垂直通道的重建能力差别很大，共面阵列甚至无法重建高度通道。如果编码器只见过理想 1 阶 Ambisonics，部署到眼镜阵列就会遇到没见过的失真。第二个困难是自我中心视角。佩戴者说话离麦克风很近、能量强，但没有外部方向，需要与外部旁观者区分开，否则转写会混淆说话人角色，定位也会把自身误当外部源。

第 3 个困难是标记稀释。结构化回答里转写文本很长、占用大量标记，而方位角、距离和起止时间只有几个数值标记，若用均匀的下一词预测损失训练，梯度会被转写主导，方向和时间学不好。论文的 3 个对应设计分别是布局灵活的 FOACoder 编码、双通路自我中心语言模型和对稀疏数值标记加权的损失。

### 整体流程：一个样本如何从多通道波形变成结构化回答

以一个 30 秒眼镜录音和一句文本指令为例，系统走两条并行支路。空间支路先按当前阵列配置查表得到 Ambisonic Signal Matching 波束形成权重，把可变通道数映射为 4 通道 1 阶 Ambisonics，再拼接一路随机原始麦克风通道形成 5 通道，计算短时傅里叶变换得到复数频谱，经 FOACoder 得到 300 个每 100 毫秒一个的 512 维空间嵌入。语义支路把单声道信号送入冻结的 Gemma 原生音频塔，得到 750 个每 40 毫秒一个的嵌入。文本指令经分词得到文本嵌入。

三者在语言模型输入嵌入序列中拼接，空间块固定占 300 个占位符，不足 30 秒的填充帧用共享的可学习填充嵌入经同样投影替换，以区别于有效观测。语言模型在 2 阶段课程微调后输出 JSON 声源列表。训练时空间编码器和原生音频塔冻结，只更新空间投影器和语言模型的低秩适配器。

下图左侧为 FOACoder 预训练，右侧为 SEA-LM 双通路接入，箭头标明了冻结与可训练部分的划分，适合对照上面的文字路径阅读。

> **看图路径：** 1. 沿左侧从多通道音频经波束形成到复数频谱再到空间嵌入的主路径看预处理顺序；2. 对比右侧空间支路与单声道语义支路在输入嵌入层的汇合位置；3. 注意雪花标记的冻结模块与第一二阶段可训练的空间投影器和 LoRA 位置

[![原论文 Figure 1：Overview of SEA-LM and FOACoder architectures.](https://arxiv.org/html/2610.05610v2/sealm_arch_3.png)](https://arxiv.org/html/2610.05610v2/sealm_arch_3.png)

*论文图 1。原论文 Figure 1:：“Overview of SEA-LM and FOACoder architectures.”。*

左半显示多通道音频先经波束形成与短时傅里叶变换得到复数频谱，再经分块嵌入、因果自注意力编码器层得到空间嵌入，顶部 2 个任务头在预训练后丢弃。右半显示多通道音频与单声道音频分别经 FOACoder 与 Gemma 音频塔，文本经分词器，3 路嵌入拼入大语言模型并输出结构化 JSON，训练目标为时空加权交叉熵。图中雪花表示冻结，空间投影器在 2 阶段都可训练，语言模型内的低秩适配器只在第二阶段可训练。

### 波束形成与频谱输入：非理想一阶 Ambisonics 从哪里来

预处理必须把可变阵列统一到公共格式。对选定的眼镜阵列，论文用该配置的远场到麦克风传递函数离线计算 Ambisonic Signal Matching 权重，对每个频点的多通道频域向量加权得到估计的 1 阶 Ambisonics 4 通道，再做逆短时傅里叶变换回时域。这一过程引入两类可观测失真：一是当波长与麦克风间距可比时空间混叠加上正则化对高频功率的惩罚，表现为估计功率谱相对目标谱的高频下垂，即低通效应。

二是当麦克风沿某轴位移不足时对应通道整体衰减，最典型的是共面阵列无法重建高度通道。为缓解信息损失，论文在 4 通道 1 阶 Ambisonics 后拼接一路随机原始麦克风，形成 5 通道输入，再用窗长 320 点 20 毫秒、跳长 160 点 10 毫秒的汉恩窗计算短时傅里叶变换，得到 161 个频点、3000 个时间帧、5 通道的复数张量。实部虚部沿通道交织为 10 通道后，把频率与通道展平，用核长与步长均为 10 的 1 维卷积在时间上分块，对应每 100 毫秒一个嵌入，最终序列长 300，隐层 512 维，并加可学习 1 维位置嵌入，送入因果自注意力堆叠。

**一阶 Ambisonics × FOACoder：** 一阶 Ambisonics 是把任意数量和位置的麦克风信号统一为 4 通道球谐表示的公共格式，负责抹平硬件差异；FOACoder 是作用在其上的因果 Transformer 编码器，负责从频谱中提取保留时间与方向信息的空间嵌入，二者搭配使同一模型能处理 4 到 9 麦克风的不同眼镜阵列。

**Ambisonic Signal Matching 波束形成 × 原始麦克风通道：** Ambisonic Signal Matching 波束形成是按每个阵列离线计算权重、把多通道信号映射到一阶 Ambisonics 的步骤，会带来高频衰减等非理想失真；拼接一路随机选择的原始麦克风通道是为了补偿这种信息损失，保留被波束形成削弱的细节。

下图用仿真说明阵列几何如何决定 1 阶 Ambisonics 能否重建，左为失败的共面四麦克风，右为增加镜圈麦克风后通过的五麦克风，阅读时重点看高度通道的功率谱差距。

> **看图路径：** 1. 对比左图 4 麦克风共面配置与右图增加镜圈麦克风后 Z 通道的重建差异；2. 观察估计功率谱相对目标谱在高频段的整体下垂即低通效应

[![原论文 Figure 3：Ambisonic Signal Matching Simulation Results.](https://arxiv.org/html/2610.05610v2/asm_simulation_figure.png)](https://arxiv.org/html/2610.05610v2/asm_simulation_figure.png)

*论文图 3。原论文 Figure 3:：“Ambisonic Signal Matching Simulation Results.”。*

左面板四麦克风位于左右镜腿前后，高度方向无位移，高度通道估计谱整体大幅低于目标谱，归一化均方误差不能满足选择阈值。右面板在右镜圈底部增加一个麦克风后引入垂直位移，高度通道估计谱明显抬升并通过阈值。两面板中多数通道的估计谱在高频段都相对目标谱下垂，说明低通染色是波束形成的共有现象，而高度通道是否衰减则取决于阵列是否有垂直 spread。

### FOACoder 结构：为何保留时间分辨率并使用因果注意力

FOACoder 借鉴音频频谱 Transformer 但刻意不做重时间池化，因为 3 维定位需要精细的时间与空间分辨率。输入复数频谱经实虚交织、分块投影后形成 300 个嵌入，堆叠 N 个 Transformer 块，每块含层归一化、因果自注意力和前馈网络，末端再做层归一化。严格因果掩码使编码器支持未来流式使用，但论文明确当前端到端模型不是流式的，因为冻结的单声道音频编码器是非因果的。不足 30 秒的输入补零，并用长度为 L 的注意力掩码区分有效帧与填充，填充帧不参与后续任务损失。

编码器输出记为批量、序列长与隐层维度的 3 维张量，直接作为空间嵌入路由到语言模型的空间投影器。空间投影器沿用 Gemma 多模态嵌入设计：对每个 512 维向量做可学习均方根归一化、无偏置 512 到语言模型维线性、GELU 激活、第二层无偏置线性与后投影归一化，块长度恒为 300。

### 编码器学什么：佩戴者检测与多轨定位的监督与损失

FOACoder 预训练同时做两个逐帧任务，每帧 100 毫秒共 300 帧。佩戴者语音活动检测头把隐表示投影为每步一个 logit，用二元交叉熵判断佩戴者是否在说话，填充帧用掩码排除。声音事件定位与检测头采用多活动耦合笛卡尔到达方向格式，类别为语音与非语音两类，每类最多三轨，直接回归 3 维笛卡尔单位方向向量，无源时为零向量，其模长隐式表示检测置信度，不显式预测距离。若同类同帧声源少于轨数，用最后一个事件重复填充空轨；若该类无源则全填零。

同类多源按到原点距离排序以固定轨分配，并用基于位置的训练损失解决轨置换问题。定位部分用均方误差在有效帧、类别与轨上平均。

编码器总损失是两项等权相加，任务头在预训练后丢弃，骨干冻结供给语言模型。

\[\mathcal{L}_{\text{VAD}}=-\frac{1}{L_{\text{not-padded}}}\sum_{t=1}^{L}m_{t}[y_{t}^{\text{vad}}\log(\sigma(\hat{y}_{t}^{\text{vad}}))+(1-y_{t}^{\text{vad}})\log(1-\sigma(\hat{y}_{t}^{\text{vad}}))]\]

上式中掩码区分有效与填充，sigmoid 后概率与佩戴者真值比较，含义是只在有效语音存在性上施加监督。

\[\mathcal{L}_{\text{SELD}}=\frac{1}{K_{\text{act.}}}\sum_{t=1}^{L}\sum_{c=1}^{N_{c}}\sum_{k=1}^{N_{t}}m_{t}\left\|\mathbf{p}_{t,c,k}-\hat{\mathbf{p}}_{t,c,k}\right\|_{2}^{2}\]

上式对有效帧上所有类别与轨的预测与真值单位向量求平方误差并按有效总数归一化，含义是同时学检测与方向。

\[\mathcal{L}_{\text{ST-WCE}}=\frac{\sum_{t\in\mathcal{I}}w_{t}\ell_{t}}{\sum_{t\in\mathcal{I}}w_{t}},\qquad w_{t}=\begin{cases}\alpha_{\mathrm{spatial}},&t\in\mathcal{I}_{\mathrm{spatial}},\\ \alpha_{\mathrm{temporal}},&t\in\mathcal{I}_{\mathrm{temporal}},\\ 1,&\text{otherwise}.\end{cases}\]

上式是语言模型微调阶段的时空加权交叉熵：先定位目标回答中方位角、俯仰角、距离与起止数值对应的标记区间，空间与时间子集分别乘以 5，其余乘以 1，再按权重和归一化，提示词、占位符与填充不计入，两个子集来自不同 JSON 键故不重叠。权重 5 是在固定数据与课程下比较 1、5、10 组合后按验证集评估损失选出的经验值。

### 数据如何造：从阵列传递函数到房间脉冲响应再到混音

为覆盖多阵列与多声源，论文合成了约 200 万训练、15 万验证、15 万测试的 30 秒场景。先用两副眼镜 CAD 装到头 torso 模型上，用 COMSOL 边界元与互易原理仿真非回声阵列传递函数，覆盖球面 12602 个方向与 62.5 Hz 到 8000 Hz 的 128 个线性频点，并做归一化与 SOFA 保存，这些传递函数同时用于构造波束形成权重和房间声学仿真。再经波束形成仿真研究筛选出 1211 种 4 到 9 麦克风配置，要求方位通道在 500 Hz 以下归一化均方误差不大于负 5 分贝、高度通道在 100 Hz 以下不大于负 1 分贝，高度阈值放宽是因为镜架麦克风基本共面、垂直位移天然受限。

房间仿真用镜像源法生成随机鞋盒房间，宽长 2.0 到 15.0 米、高 3.0 到 6.0 米，佩戴者与两个外部源随机放置，外部源距佩戴者 0.6 到 12.0 米，墙面材料与全局反射增益随机，并把非回声传递函数融入以计入头部与设备散射，得到约 20 万训练、2 万验证、2 万测试的多源房间脉冲响应。声源从 LibriTTS 取语音、AudioSet 与 Freesound 取环境声，每场景三源各以 0.5 概率激活，约 12.5% 为全静音负例，增益与 0 到 10 秒延迟随机，卷积后相加形成密集交叠而非轮流说话。

**佩戴者语音活动检测 × 声音事件定位与检测：** 佩戴者语音活动检测是逐帧判断佩戴者自己是否在说话的二分类任务，声音事件定位与检测是逐帧判断外部语音与非语音是否存在并回归其单位方向向量的任务，二者联合训练迫使 FOACoder 同时保留自我中心语音存在性和外部声源几何信息。

**空间投影器 × 大语言模型：** 空间投影器是把 512 维 FOACoder 嵌入映射到语言模型隐层维度的两层线性加归一化模块，负责跨模态对齐；大语言模型负责联合文本、单声道语义嵌入和空间嵌入做推理，投影器使空间线索能以固定 300 个占位符的形式被注意力直接使用。

**时空加权交叉熵损失 × 方向与时间标记：** 时空加权交叉熵损失是对目标序列中方位角、俯仰角、距离和起止时间对应的标记赋予更大权重 5 的训练目标，方向与时间标记是结构化 JSON 中稀疏但关键的数值标记，加权是为了防止冗长的转写文本在下一词预测损失中淹没定位信号。

### 语言模型分哪两阶段学：六个任务与课程安排

SEA-LM 基座为 Gemma-4-E4B-it。第 1 阶段只对齐空间投影器，冻结大语言模型、原生音频塔、FOACoder、词嵌入与输出头，只在单声源的整体声源定位任务上训 3 轮，学习率 5 乘 10 的负 4 次方，每设备批量 4 加 2 步累积，全局 64。第二阶段从第 1 阶段最优 checkpoint 热启动，继续训投影器并在语言模型所有注意力与前馈投影上加秩 128、alpha256、dropout0.05 的低秩适配器，基座、词嵌入、输出头与两音频塔仍冻结，在全部六任务、一到四声源上训 3 轮，学习率 1 乘 10 的负 4 次方，每设备批量 2 加 4 步累积，全局 64，2 阶段上下文 2048、bfloat16、AdamW 加 5% 热身余弦衰减。

六任务为整体定位、按非语音类别的选择性定位、含佩戴者与旁观者转写的整体描述、区分角色的转写、只转写佩戴者、按类别方向只转写旁观者，选择性两任务以 0.3 概率构造空查询并要求输出空源列表。插入聚焦中间阶段的消融显示性能下降，论文把原因假设为过早特化到短查询输出、冻结表示下对齐偏置以及优化轨迹变复杂，但这仍是假设而非已证明的因果。

### 在什么条件下测：评测集划分、匹配规则与指标方向

评测用与训练不重叠的单声道测试音频与不相交测试房间脉冲响应生成 held-out 合成集，共 136378 个场景问答对，任务 1 到 6 分别为 26985、17247、33977、25876、17372 和 14921 对，每场景按支持任务均匀抽一题，选择性任务以 0.3 概率用缺席类别或方向考拒绝能力。所有模型用同一解析器、同一分配与聚合规则打分。解析要求合法 JSON 且满足模式：外部源必有空间信息、语音必有转写、非语音无转写、佩戴者无空间、起始早于结束，否则记格式失败并按空预测处理。

外部源用匈牙利算法按空间大圆距离与时间交并比各 0.5 加权的代价配对，代价超 0.7 拒绝，未匹配预测记幻觉、未匹配真值记漏检，报告的是含至少一个此类源的解析样本百分比。定位、时间、类型与转写误差只在接受配对上用微平均计算，必须与幻觉漏检率一起看。

方位误差计环绕，俯仰与距离计绝对差，距离还计百分比误差，方向与距离另有类别区间准确率，时间用起止平均绝对误差与交并比，转写用上限 100% 的词错误率，佩戴者检测在样本级、查询检测在源级报告准确率、精确率、召回率与 F1。

**匈牙利匹配 × 幻觉源与漏检源：** 匈牙利匹配是按空间大圆距离与时间交并比组合代价把预测源与真值源配对的步骤，幻觉源与漏检源是配对后未被匹配的预测与真值，匹配使定位、转写等条件误差只在成功配对上计算，而幻觉与漏检率单独反映数量错误。

下表先说明六任务各用哪些指标，避免把只在部分任务计算的转写或检测误读为全局能力。

| Metric | Definition | T1 | T2 | T3 | T4 | T5 | T6 |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Format adherence | Percentage of outputs that parse and satisfy the required schema. | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |
| External-source hallucination and missing-source rates | Percentage of validly parsed examples with at least one unmatched predicted or ground-truth external source. | ✓ | ✓ | ✓ | ✓ | ✗ | ✓ |
| Source-type accuracy | Exact agreement between the sound descriptors of matched predicted and ground-truth external sources after text normalization and mapping synonyms to canonical labels. | ✓ | ✗ | ✓ | ✗ | ✗ | ✗ |
| Azimuth, elevation, and distance MAE; percentage distance error | Spatial localization errors over matched predicted and ground-truth external sources. | ✓ | ✓ | ✓ | ✓ | ✗ | ✓ |
| Location- and distance-bin accuracy | Exact agreement between the categorical spatial bins of matched predicted and ground-truth external sources. | ✓ | ✓ | ✓ | ✓ | ✗ | ✓ |
| Start- and end-time MAE; temporal IoU | Temporal boundary error and interval overlap over matched predicted and ground-truth sources. | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |
| Speech transcription WER | Capped WER on normalized transcripts from matched speech sources. | ✗ | ✗ | ✓ | ✓ | ✓ | ✓ |
| Wearer detection (accuracy, precision, recall, F1) | Example-level detection of whether wearer speech is present. | ✗ | ✗ | ✓ | ✓ | ✓ | ✗ |
| Query detection (accuracy, precision, recall, F1) | Source-level detection of the queried sound class or direction. | ✗ | ✓ | ✗ | ✗ | ✗ | ✓ |

表中勾选表示该任务计算该组指标，例如定位类任务不计转写词错误率，佩戴者转写任务不计空间误差，选择性任务额外计查询检测。这种分工意味着跨任务比较必须对齐指标子集，不能把整体描述的词错误率直接等同于指向性转写的难度。

### 主结果回答什么：在相同数据与课程下空间支路带来多少定位与转写增益

比较条件需要先讲清。未适配的原生 Gemma 不做任务适配。微调 Gemma 是只保留原生单声道通路、在合成数据上微调的对照。SELDNet 加 Gemma 是把 1 阶 Ambisonics 对数梅尔与强度向量经 DCASE2024 基线初始化的 SELDNet 主干作冻结空间编码器，其语言模型骨干、原生音频编码器、合成微调数据与 2 阶段课程与 SEA-LM 相同，只换空间编码器。两个微调基线共享合成训练数据与课程，只有 SELDNet 空间基线明确采用与 SEA-LM 相同的可训练与冻结部件划分，单声道基线只有原生通路，不应推断完全相同的部件划分。

下表是任务 1 整体定位与任务 2 选择性定位的子集，箭头表示越小或越大越好，报告了方位角、俯仰角、距离平均绝对误差、类型准确率、时间交并比与查询 F1。

| (a) Spatial and event understanding (Tasks 1–2). | (a) Spatial and event understanding (Tasks 1–2). | (a) Spatial and event understanding (Tasks 1–2). | (a) Spatial and event understanding (Tasks 1–2). | (a) Spatial and event understanding (Tasks 1–2). | (a) Spatial and event understanding (Tasks 1–2). | (a) Spatial and event understanding (Tasks 1–2). | (a) Spatial and event understanding (Tasks 1–2). | (a) Spatial and event understanding (Tasks 1–2). |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
|  | Task 1: Holistic Sound Localization | Task 1: Holistic Sound Localization | Task 1: Holistic Sound Localization | Task 1: Holistic Sound Localization | Task 1: Holistic Sound Localization | Task 2: Selective Sound Localization | Task 2: Selective Sound Localization | Task 2: Selective Sound Localization |
| Model | Azim. ↓\downarrow | Elev. ↓\downarrow | Dist. ↓\downarrow | Type acc. ↑\uparrow | tIoU ↑\uparrow | Azim. ↓\downarrow | Elev. ↓\downarrow | Query F1† ↑\uparrow |
|  | (∘) | (∘) | (m) | (%) |  | (∘) | (∘) | (%) |
| Gemma-4-E4B-it (vanilla) | 67.9 | 27.7 | 1.88 | 0.9 | 0.37 | 48.0 | 26.4 | 10.9 |
| Gemma-4-E4B-it (fine-tuned) | 87.5 | 27.7 | 1.28 | 62.2 | 0.91 | 88.2 | 28.3 | 78.0 |
| SELDNet ++ Gemma-4-E4B-it | 80.6 | 27.4 | 1.26 | 55.6 | 0.61 | 80.2 | 27.4 | 76.2 |
| SEA-LM (ours) | 14.9 | 12.8 | 1.07 | 63.7 | 0.92 | 17.5 | 14.8 | 94.9 |

表中 SEA-LM 在任务 1 把方位角平均绝对误差从 SELDNet 基线的 80.6 度降到 14.9 度、俯仰角从 27.4 度降到 12.8 度，距离从 1.26 米降到 1.07 米，类型准确率 63.7%，时间交并比 0.92；任务 2 方位角从 80.2 度降到 17.5 度、俯仰角从 27.4 度降到 14.8 度，查询 F1 达 94.9%。完整附表还显示任务 1 位置区间准确率从 42.0% 升到 84.1%，幻觉与漏检率下降。转写与检测的任务 3 到 6 完整数字见附表，趋势是多数转写任务词错误率最低，唯一例外是角色感知转写中 SELDNet 基线略优。所有条件误差都只在匹配对上计算，须结合幻觉漏检率理解，且结论限于合成静态场景。

单检查点在 4 到 9 麦克风上的稳定性如下图所示，阅读时注意纵轴是原始误差与百分比，曲线平坦不代表任意拓扑都泛化。

> **看图路径：** 1. 看定位误差与转写错误率随麦克风数 4 到 9 的变化是否平坦；2. 对比佩戴者转写与其他外部任务曲线的稳定性差异

[![原论文 Figure 8：Results segmented by array microphone count.](https://arxiv.org/html/2610.05610v2/evaluation_microphone_count.svg)](https://arxiv.org/html/2610.05610v2/evaluation_microphone_count.svg)

*论文图 8。原论文 Figure 8:：“Results segmented by array microphone count.”。*

面板 a 显示方位角误差在 13 到 16 度间波动、俯仰角缓慢下降，面板 b 位置区间准确率与时间交并比基本持平，面板 c 4 类转写词错误率随麦克风数几乎水平，佩戴者转写稳定在低位，面板 d 两类查询 F1 稳定在 94% 附近。论文明确这只证明在两种固定镜架子集内无需阵列特定重训，不证明对未见拓扑或加麦克风必然提升，受限的垂直位移可能掩盖了随机布局下本会出现的趋势。

### 何时变难：声源数、说话人数与交叠比例如何改变误差

按声源总数、说话人数与交叠百分比切分，趋势一致但影响对象不同。声源从 1 增到 3 个以上时，整体定位方位角误差上升、位置区间准确率与时间交并比下降，外部转写词错误率明显上升，而佩戴者指向转写因离麦克风近保持稳定，查询 F1 也下降。说话人数增加时，整体与角色感知转写、外部指向转写词错误率上升，外部任务时间交并比下降，佩戴者检测 F1 仍近 100% 而外部查询 F1 下降，但三说话人以上每任务仅 546 到 586 例，估计不稳定。

交叠比例按活动并集归一化分为 0、1 到 25%、26 到 50%、51 到 75%、76 到 100%，随交叠增大方位俯仰误差增大、位置准确率下降、外部转写恶化、佩戴者转写相对稳健，最高交叠每任务仅 508 到 836 例，同样不稳定。这些切分说明密集交叠主要伤害外部语音的分离与转写，佩戴者因近场优势受影响小，部署前需按目标场景的密度与交叠单独验证。

### 编码器本身有多强：与 SELDNet 参考的诊断性对比说明什么

在语言模型接入之前，独立编码器评测回答空间表征是否保留了几何与佩戴者活动。SELDNet 参考未在合成集上微调、参数约 0.74M 且训练自理想球阵数据，而 FOACoder 约 46M 并在含波束形成非理想的合成集上训练，因此论文强调这不是直接架构基准，而是说明合成场景声学复杂度的诊断参考。

下表为编码器 DCASE 指标，箭头表示优选方向，含角度误差、错误率、F 值、定位召回与综合分。

| (a) DCASE Metrics | (a) DCASE Metrics | (a) DCASE Metrics | (a) DCASE Metrics | (a) DCASE Metrics | (a) DCASE Metrics | (a) DCASE Metrics |
| --- | --- | --- | --- | --- | --- | --- |
| Model | Parameter Count | Angular Error (∘) ↓\downarrow | Error Rate ↓\downarrow | F-score ↑\uparrow | Localization Recall ↑\uparrow | SELD Score ↓\downarrow |
| SELDNet | 0.74M | 44.01 | 1.20 | 12.62 | 32.29 | 0.75 |
| FOACoder 1s context | 46.03M | 15.84 | 0.41 | 63.43 | 75.87 | 0.28 |
| FOACoder 30s context | 46.18M | 15.06 | 0.34 | 70.46 | 86.50 | 0.21 |

表中 30 秒 FOACoder 把角度误差从 44.01 度降到 15.06 度，定位召回从 32.29% 升到 86.50%，错误率从 1.20 降到 0.34，综合分从 0.75 降到 0.21；1 秒上下文版本角度误差 15.84 度，略差但计算量随序列长度 2 次下降，适合未来动态场景的滑动窗扩展。佩戴者检测附表显示准确率约 99.8%、F1 约 98.53%，论文认为佩戴者任务相对容易且有专用目标，而基线是用 0.15 米距离阈值启发式导出的，不能视为原生能力。参数量与训练分布差异是差距的主要可能来源，不应解读为同条件架构胜负。

### 课程需要多细：在阶段 1 与阶段 2 之间加聚焦阶段会怎样

为检验更细课程是否有益，论文在投影器对齐与联合微调之间插入阶段 2a，只在 1 到 2 声源上训选择性定位、佩戴者指向转写与外部指向转写，再进入全六任务，训练数据与评测方法不变，可训练与冻结划分与最终阶段相同。

下表比较 2 阶段与 3 阶段在任务 1 整体定位与任务 2 选择性定位上的效果，箭头为优选方向。

|  | Task 1: Holistic Sound Localization | Task 1: Holistic Sound Localization | Task 1: Holistic Sound Localization | Task 1: Holistic Sound Localization | Task 1: Holistic Sound Localization | Task 1: Holistic Sound Localization | Task 2: Selective Sound Localization | Task 2: Selective Sound Localization | Task 2: Selective Sound Localization |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Curriculum | Azim. ↓\downarrow | Elev. ↓\downarrow | Dist. ↓\downarrow | Loc. bin ↑\uparrow | Type acc. ↑\uparrow | tIoU ↑\uparrow | Azim. ↓\downarrow | Elev. ↓\downarrow | Query F1 ↑\uparrow |
|  | (∘) | (∘) | (m) | (%) | (%) |  | (∘) | (∘) | (%) |
| Stage 1 →\rightarrow Stage 2a →\rightarrow Stage 2 | 15.5 | 13.1 | 1.20 | 85.5 | 61.4 | 0.84 | 19.7 | 15.2 | 83.9 |
| Stage 1 →\rightarrow Stage 2 (ours) | 14.9 | 12.8 | 1.07 | 84.1 | 63.7 | 0.92 | 17.5 | 14.8 | 94.9 |

表中 2 阶段在任务 1 方位角 14.9 度、俯仰角 12.8 度、距离 1.07 米、时间交并比 0.92，任务 2 查询 F1 94.9%；3 阶段对应为 15.5 度、13.1 度、1.20 米、0.84 与 83.9%，几乎全面变差，任务 3 到 6 的词错误率与佩戴者 F1 也同步恶化。论文假设是过早特化到短查询输出难以在第二阶段撤销，加上冻结表示下更新集中在投影器与低秩适配器导致对齐偏置，以及更复杂优化轨迹偏离更优解，但未做进一步因果验证，实际采用的仍是阶段 1 直接到阶段 2 的 2 阶段课程。

### 哪些还没测：仿真、静态与固定镜架带来的边界

论文在结论与局限中明确范围：全部训练与评测只用合成静态场景，1211 种配置来自两种固定眼镜几何的子集，未评测真实录音、运动声源、未见阵列拓扑与其他设备形态如手机与机器人，也未做详尽部件、 uncertainty 与流式研究，原因是运动仿真与现有数据集后处理的复杂度与保真难兼顾。固定镜架的候选位置非完全随机、垂直位移受限，这解释了麦克风数增加不带来定位提升的反直觉现象，与全随机布局下加麦克风有益的 PhaseCoder 结论并不矛盾。

外部语音在密集交叠下转写仍是短板，未来计划在鸡尾酒场景上微调单声道编码器。偏差方面，源语料、语言、声学环境与仿真几何可能导致不同说话人与部署条件性能不均，重要场景使用前需在代表性人群与环境上复测。伦理上，定位、角色归属与转写可助听与具身交互，也可被用于侵入式监听，部署需征得同意、最小化数据、安全处理音频并保持人工监督。

### 复现第一步做什么：数据、训练与评测的必要细节

复现应从仿真链开始而非直接训语言模型。先按附录准备两副眼镜 CAD 与头 torso 模型，用边界元仿真远场与口到麦克风传递函数并存 SOFA，再为每个候选阵列离线算波束形成权重并做仿真筛选，只保留满足方位与高度归一化均方误差阈值的配置。房间用镜像源法随机尺寸与材料，把传递函数融入以计入散射，口部直达用精确脉冲加反射分离处理。混音按三源各 0.5 激活、LibriTTS 与 AudioSet 与 Freesound 按源位不同比例采样、增益延迟随机，生成 30 秒样本与 3 维元数据。

FOACoder 训 2,000,000 步、批量 128、8 卡 H100、AdamW 加 500,000 步热身到 2 乘 10 的负 5 次方余弦衰减。语言模型 2 阶段如前所述，损失用空间时间权重 5。评测必须用同一 JSON 模式解析、同一匈牙利代价与 0.7 拒绝阈值、同一微平均聚合，否则数字不可比。代码开源、权重可下载、系统可运行是三件独立的事：本篇只证明论文提到 DCASE 基线链接可用，不证明作者已开源本系统，来源未确认不是技术缺陷，复现前需单独确认作者资源是否当前可用。

### 什么时候值得尝试：条件、代价与还需补的验证

当设备是麦克风数与位置多变的智能眼镜、任务需要同时知道谁在何处何时说什么，且能接受合成静态场景的结论边界时，这套把可变阵列先统一到非理想 1 阶 Ambisonics 再用双通路语言模型推理的路线值得尝试。关键超参数与信息条件是波束形成正则化、1211 配置筛选阈值、FOACoder 每 100 毫秒 1 帧共 300 帧、原生每 40 毫秒 1 帧共 750 帧、时空权重 5、2 阶段课程与低秩适配器设置。代价是仿真与训练成本高、编码器参数大、推理需同时跑两音频塔。

还需补的验证是真实眼镜录音、运动声源、未见拓扑与跨设备形态的定位转写稳定性，以及延迟与成本实测，因为原文未报告误判率延迟与推理开销，不能承诺它们会改善。教学例子：若眼镜从四麦克风共面换成在镜圈加一麦克风，预期高度通道重建改善，但这只是按仿真功率谱的定性预期，具体方位角能降多少必须在目标阵列与交叠条件下重测，不能把合成集上的 14.9 度直接当部署保证。

<details>
<summary>📎 论文与评分元数据</summary>

排名：前50% | 文档类型：模型报告 | [arXiv 原文](https://arxiv.org/abs/2610.05610v2)

</details>

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。

- 评分规则：type-aware-v1

- 评分模型：muse-spark-1.3-contributor

- 评分请求协议：openai_responses

---

[← 返回 2026-10-11 语音/音乐/音频论文速递](/audio-paper-digest-blog/posts/2026-10-11/)
