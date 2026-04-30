---
title: "Direct Transfer of Prosody in Speech-to-speech Translation using Disentangled Speech Tokens"
date: 2026-04-29
draft: false
tags: [语音翻译, 自监督学习, 端到端, 多语言]
categories: [icassp-2026]
description: "语音翻译 | 7.5/10"
hiddenInHomeList: true
---

# 📄 Direct Transfer of Prosody in Speech-to-speech Translation using Disentangled Speech Tokens

#语音翻译 #自监督学习 #端到端 #多语言

✅ **7.5/10** | 前25% | #语音翻译 | #端到端 | #自监督学习 #多语言

学术质量 5.5/7 | 选题价值 1.8/2 | 复现加成 0.2 | 置信度 中


### 👥 作者与机构

- 第一作者：Ismail Rasim Ulgen (Amazon Prime Video, USA; Center for Language and Speech Processing, Johns Hopkins University, USA)
- 通讯作者：未说明
- 作者列表：Ismail Rasim Ulgen (Amazon Prime Video, USA; Center for Language and Speech Processing, Johns Hopkins University, USA), Nancy Liu (Amazon Prime Video, USA), Najmeh Sadoughi (Amazon Prime Video, USA), Abhishek Yanamandra (Amazon Prime Video, USA), Abhinav Jain (Amazon Prime Video, USA), Zhu Liu (Amazon Prime Video, USA), Vimal Bhat (Amazon Prime Video, USA)

### 💡 毒舌点评

亮点：这篇论文直击语音翻译中“翻译腔”这一痛点，用“解耦-传递”的巧思，将困扰领域多年的“韵律平行数据缺失”问题绕了过去，思路清晰且效果显著。短板：研究略显“工程化”，虽然提出了巧妙的对齐机制，但过度依赖一个外部强大且未开源的解耦编解码器（FACodec），且实验仅验证了两个语言对，在更复杂语系或低资源场景下的鲁棒性存疑。

### 📌 核心摘要

1.  问题：当前语音到语音翻译（S2ST）系统在翻译时往往丢失源语音的韵律（节奏、音调、情感），主要原因是缺乏韵律对齐的平行训练数据，导致模型只能间接建模韵律，存在训练-推理不匹配问题。
2.  方法核心：提出PASST框架。首先利用FACodec将语音解耦为独立的语言内容、韵律、声学细节和音色等离散令牌。然后，仅对语言内容令牌进行跨语言翻译。核心创新在于：利用内容翻译模块（Transformer）内部的交叉注意力图，建立源语言内容与目标语言内容之间的精细时序对齐关系，并利用此对齐关系，将源语音的韵律和声学令牌“映射”到对应目标内容令牌的位置上，最后与原始音色结合，由FACodec解码器重建出保留源韵律的翻译语音。
3.  创新性：相比传统间接建模韵律或忽略韵律的方法，PASST实现了显式、直接的韵律传递。其核心洞见在于，利用翻译模型自身学到的内容对齐信息（注意力图），作为传递源语音非内容属性的桥梁，避免了寻找韵律平行数据的难题。
4.  实验结果：在mExpresso数据集（En-Fr和En-Es）上，PASST在韵律相似度（A.PCP, P-Sim）、说话人相似度（S-Sim）和自然度（NISQA）等多个指标上显著优于TransVIP、SeamlessM4T等基线。例如，在En-Fr上，最佳PASST变体的A.PCP达到2.99（基线最高2.71），NISQA达到3.89（基线最高3.43）。
5.  实际意义：能够生成翻译内容准确、同时保留原说话者情感、语调和风格的语音，极大提升了跨语言交流的自然度和表现力，对实时同传、内容本地化（如配音）等场景价值重大。
6.  局限性：a) 强依赖预训练的FACodec，其解耦质量直接决定上限；b) 实验规模有限，仅测试了两个语言对，未涉及更复杂的语调语言或低资源语言；c) 论文未提供代码，核心组件的可复现性受限。

### 🏗️ 模型架构

PASST的整体流程如图1所示，可分为三个主要阶段：解耦编码、内容翻译、韵律对齐与解码。

![图1: pdf-image-page2-idx0](https://audio-paper-digest-images.bkt.clouddn.com/icassp-2026/2026-04-29/11464610-0.png)

1.  解耦编码（FACodec Encoder）：
    - 输入：源语音波形 `x`。
    - 过程：使用预训练的FACodec编码器，将语音通过残差向量量化（RVQ）分解为四种对齐的离散令牌序列：语言内容令牌 `zc`，韵律令牌 `zp`，声学细节令牌 `za`，以及音色向量 `h`。这些令牌每12.5ms提取一次。
    - 输出：`zc_source`, `zp_source`, `za_source`, `h`。
    - 设计动机：将语音的“说什么”与“怎么说”彻底分离，为后续选择性翻译和直接传递奠定基础。

2.  内容翻译模块：
    - 输入：源语音的梅尔频谱图（用于语义编码）和语音/非语音指示（用于等时性编码）。
    - 组件：
        - 语义编码器 (w2v-BERT 2.0)：冻结参数，将源语音编码为语义特征 `hs`（帧长160ms）。
        - 等时性编码器 (Isochrony Encoder)：编码源语音的时长信息 `i`。
        - 自回归解码器 (Transformer Decoder)：以 `hs` 和 `i` 为条件，分两步生成：
            a) 目标语言文本序列 `T_target`。
            b) 目标语言内容令牌序列 `zc_target`。
    - 输出：翻译后的内容令牌 `zc_target` 及其生成过程中产生的交叉注意力图 `A(hs, zc_target[i])`。
    - 设计动机：将翻译任务简化为仅处理离散内容令牌，避免了声学信息的干扰。生成中间文本可引导语义更准确。

3.  韵律与声学对齐（核心创新）：
    - 问题：源韵律/声学令牌 (`zp_source`, `za_source`) 与源内容对齐，但需要与新的目标内容令牌 `zc_target` 对齐。
    - 方法：利用解码器在预测每个 `zc_target[i]` 时的交叉注意力权重 `A`，找到源语义特征 `hs` 中对其贡献最大的部分。
    - 具体策略：
        - 软对齐（Soft Alignment）：计算注意力权重加权平均的源语义特征 `h_selected_s[i]`，然后对应该特征所在时间窗口内的源高分辨率韵律/声学令牌 (`zp_source`, `za_source`) 进行平均池化，得到对齐后的令牌 `zp_aligned[i]` 和 `za_aligned[i]`。注意力校准：为解决“注意力汇聚”问题，先屏蔽掉非语音区域和范数过小的源token的注意力。
        - 硬对齐（Hard Alignment）：直接选取注意力权重最大的单个源特征对应的时间窗口。
    - 输出：与目标内容令牌序列等长、对齐的韵律令牌序列 `zp_aligned` 和声学令牌序列 `za_aligned`。

4.  语音解码（FACodec Decoder）：
    - 输入：目标内容令牌 `zc_target`、对齐后的韵律令牌 `zp_aligned`、对齐后的声学令牌 `za_aligned`、以及原始的源音色向量 `h`。
    - 过程：FACodec解码器 `DF_A` 将这些成分合成为最终的语音波形。
    - 输出：保留源韵律和音色的翻译语音 `x_target`。

数据流总结：源语音 -> [解码器] -> 源令牌 -> [翻译模块] -> 目标内容令牌 + 注意力图 -> [对齐模块] -> 目标内容令牌 + 对齐的源韵律/声学令牌 + 源音色 -> [解码器] -> 翻译语音。注意力图是连接源和目标的桥梁。

### 💡 核心创新点

1.  显式直接的韵律传递范式：不同于以往通过条件生成间接建模韵律，PASST首次在S2ST中提出利用离散表示，将源语音的韵律属性直接转移到目标语音中，从根本上规避了训练-推理不匹配和缺乏韵律平行数据的问题。
2.  利用注意力图作为跨语言对齐桥梁：创造性地将内容翻译模型内部的交叉注意力权重，用于建立源语音内容与目标语音内容之间的精细时序对应关系，从而指导源韵律信息的正确映射。这一方法无需额外的对齐模型。
3.  针对“注意力汇聚”的校准机制：发现并解决了Transformer注意力中常见的“注意力汇聚”问题（注意力过度集中在少数非语音token上），通过简单的阈值过滤提升了对齐的准确性。
4.  解耦表示下的选择性翻译：基于FACodec强大的解耦能力，仅对“内容”部分进行翻译，而“韵律”、“音色”等非语言信息则从源端直接继承，这种“分而治之”的策略高效且有效。

### 🔬 细节详述

- 训练数据：
    - 英语-法语（En-Fr）和英语-西班牙语（En-Es）子集，来自CVSS-T数据集。
    - En-Es子集因规模较小，使用来自SeamlessAlign的额外平行数据进行增强。
    - 评估使用mExpresso数据集（En-Fr和En-Es子集，共300条来自两个说话者的富有韵律表现力的语句）。
- 损失函数：未在摘要中明确说明，但根据方法描述（自回归生成文本和内容令牌），主要损失应为序列到序列模型的标准交叉熵损失（分别针对文本和内容令牌）。此外，训练目标还包括让翻译模块生成正确的内容令牌 `zc_target`。
- 训练策略：
    - 语义编码器（w2v-BERT 2.0）参数冻结。
    - 可训练模块：等时性编码器、Transformer解码器、新扩展的内容令牌嵌入层。
    - 优化器、学习率、warmup策略等细节未说明。
    - 训练时长：在8块NVIDIA A100 GPU上，每个模型（每个翻译方向）训练约一周。
- 关键超参数：
    - FACodec：每12.5ms一帧，使用RVQ。论文中使用了第一级内容令牌，丢弃了第二级。
    - 语义编码器（w2v-BERT 2.0）：帧长160ms。
    - 解码器：使用了12层Transformer解码器。注意力图取自第6层，并对所有注意力头取平均（此设置效果最佳）。
    - FACodec模型在LibriLight数据集上预训练。
- 训练硬件：8 x NVIDIA A100 GPUs。
- 推理细节：
    - 解码策略：束搜索 (Beam Search)，束大小 (beam size) 为 5。
    - 对齐方法：主要报告软对齐（温度参数 `T=0.01` 效果最佳）和硬对齐的结果，并与文本对齐基线对比。
- 正则化/稳定训练：未明确说明。但注意力校准步骤本身是一种推理时的稳定技巧。

### 📊 实验结果

论文在mExpresso数据集上，对En-Fr和En-Es两个方向进行了评估。主要结果如下表所示。

表1：mExpresso En-Fr 实验结果
| 方法 | ASR-BLEU ↑ | S-Sim ↑ | A.PCP ↑ | P-Sim ↑ | NISQA ↑ |
| :--- | :---: | :---: | :---: | :---: | :---: |
| Unit-to-Unit [5] | 15.74 | 0.05 | 2.55 | 0.25 | 4.12 |
| SeamlessM4T [22] | 16.67 | 0.06 | 2.67 | 0.26 | 3.13 |
| TransVIP [9] | 16.35 | 0.18 | 2.71 | 0.32 | 3.43 |
| PASST w/ hard align | 18.17 | 0.23 | 2.95 | 0.37 | 3.87 |
| PASST w/ soft align (T = 1) | 18.89 | 0.22 | 2.97 | 0.37 | 3.82 |
| PASST w/ soft align (T = 0.01) | 18.76 | 0.23 | 2.99 | 0.37 | 3.89 |
| PASST w/ word align | 18.69 | 0.23 | 3.00 | 0.38 | 3.89 |

表2：mExpresso En-Es 实验结果
| 方法 | ASR-BLEU ↑ | S-Sim ↑ | A.PCP ↑ | NISQA ↑ |
| :--- | :---: | :---: | :---: | :---: |
| Unit-to-Unit [5] | 13.76 | 0.06 | 2.37 | 3.15 |
| SeamlessM4T [22] | 19.55 | 0.04 | 2.45 | 3.13 |
| TransVIP [9] | 23.37 | 0.19 | 2.68 | 3.23 |
| PASST w/ hard align | 25.50 | 0.24 | 2.92 | 3.70 |
| PASST w/ soft align (T = 1) | 25.72 | 0.23 | 2.87 | 3.72 |
| PASST w/ soft align (T = 0.01) | 25.70 | 0.23 | 2.89 | 3.75 |

关键结论：
1.  全面超越基线：PASST所有变体在语义质量（ASR-BLEU）、韵律相似度（A.PCP， P-Sim）和自然度（NISQA）上均显著优于TransVIP、SeamlessM4T等基线，验证了直接韵律传递的有效性。
2.  韵律保持能力突出：在体现细粒度韵律相似性的A.PCP和P-Sim指标上，PASST优势明显（如En-Fr上，最佳PASST的A.PCP为2.99 vs TransVIP的2.71）。
3.  说话人相似度提升：PASST在S-Sim指标上也优于基线，表明更好的韵律保持有助于保留说话人风格。
4.  软对齐略优于硬对齐：软对齐（尤其是温度T=0.01）通常带来更稳定、稍优的性能。
5.  文本对齐基线对比：基于文本的对齐（word align）效果与最佳注意力对齐接近，证明了注意力对齐方法的鲁棒性，同时也说明在内容对齐良好的情况下，不同对齐策略差异不大。

表3：声学令牌消融实验 (En-Fr)
| 方法 | ASR-BLEU ↑ | S-Sim ↑ | A.PCP ↑ | P-Sim ↑ | NISQA ↑ |
| :--- | :---: | :---: | :---: | :---: | :---: |
| PASST w/ aligned acoustic tokens | 18.76 | 0.23 | 2.99 | 0.37 | 3.89 |
| PASST w/ no acoustic tokens | 18.60 | 0.23 | 2.97 | 0.37 | 3.87 |
| PASST w/ predicted acoustic tokens | 18.78 | 0.21 | 2.78 | 0.33 | 3.13 |

关键结论：直接传递源声学令牌（aligned）或完全不用（no）对性能影响很小。但预测（predicted）声学令牌会严重损害韵律相似度和自然度。这强有力地支持了论文的核心论点：直接传递原始属性比从零生成更可靠。

（注：论文未提供架构图或实验结果图的URL，因此无法插入图片，仅通过文字和表格描述。）

### ⚖️ 评分理由

- 学术质量：5.5/7：创新性很强，提出了一个新颖且概念清晰的框架。技术实现上，将注意力图用于跨模态对齐的想法巧妙。实验设置合理，对比了多个强基线，并有细致的消融实验（如声学令牌作用、对齐方式比较）。扣分项在于，方法的普适性（如对极不相似语言对）、对核心组件FACodec的依赖性分析、以及更大规模语料上的验证有所欠缺。
- 选题价值：1.8/2：S2ST中的韵律保持是一个公认的难题和前沿方向，该工作直接针对此痛点，提出的解决方案具有明确的学术意义和应用前景（如高质量跨语言交流、内容创作）。
- 开源与复现加成：0.2/1：论文提供了演示页面链接（https://lec-synt.github.io/passt-demo/），并给出了模型训练的基本硬件、时长、关键组件选型等信息，有一定参考价值。但未提供代码仓库链接、模型权重或完整的超参数配置，这使得完全复现存在较大障碍，因此加成有限。

### 🔗 开源详情

- 代码：论文中未提及代码链接。未提及开源计划。
- 模型权重：未提及是否公开。
- 数据集：使用了公开数据集CVSS-T和mExpresso。论文未提供其预处理后的数据。
- Demo：提供了在线演示页面：https://lec-synt.github.io/passt-demo/
- 复现材料：给出了部分复现所需信息，包括：
    - 语义编码器：w2v-BERT 2.0（公开预训练模型）。
    - 声学编解码器：FACodec（来自NaturalSpeech 3，论文中提及但未说明是否公开权重）。
    - 基线模型：使用了SeamlessM4T和Unit-to-Unit的官方发布，以及基于公开实现复现的TransVIP。
    - 训练硬件：8 x NVIDIA A100 GPUs。
    - 训练时长：约一周/模型。
    - 关键推理设置：beam size=5，注意力取自解码器第6层并平均所有头。
- 论文中引用的开源项目/模型：w2v-BERT 2.0, FACodec (NaturalSpeech 3), SeamlessM4T, TransVIP, Unit-to-Unit, Whisper (用于ASR评估), MPM (用于P-Sim评估), NISQA-TTS (用于NISQA评估), LibriLight (用于FACodec预训练)。

---

[← 返回 ICASSP 2026 论文分析](/audio-paper-digest-blog/posts/icassp2026-summary/)
