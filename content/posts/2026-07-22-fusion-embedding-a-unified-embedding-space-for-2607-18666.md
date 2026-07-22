---
title: "Fusion Embedding: A Unified Embedding Space for Text, Image, Video, and Audio"
date: 2026-07-22
draft: false
tags: [多模态模型, 音频检索, 对比学习, 参数高效微调, 音频理解]
categories: [论文速递]
description: "音频检索 | 8.6/10"
hiddenInHomeList: true
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_arxiv_id: "2607.18666"
---

# 📄 Fusion Embedding: A Unified Embedding Space for Text, Image, Video, and Audio

标签：#多模态模型 #音频检索 #对比学习 #参数高效微调 #音频理解

**8.6/10** | 创新 1.2/2 | 严谨 1.2/1.5 | 实验 1/1.5 | 清晰 0.9/1 | 影响 1/1.5 | 开源 1.5/1.5 | 复现 0.3/0.5 | 工程 1.5/1.5

🔥 **8.6/10** | 前25% | 文档类型：系统技术报告 | 评分置信度：高 | #音频检索 | #多模态模型 | #对比学习 #参数高效微调 | [arxiv](https://arxiv.org/abs/2607.18666)


### 👥 作者与机构

- 第一作者：Abdul Basit Tonmoy (Eximius Labs, Wabash College, Skop Intelligence Co.)
- 通讯作者：Abdul Basit Tonmoy (Eximius Labs, Wabash College, Skop Intelligence Co.)
- 作者列表：Abdul Basit Tonmoy (Eximius Labs, Wabash College, Skop Intelligence Co.)、Kazi Fardinul Hoque (Wabash College)、Md. Shahrier Islam Arham (Eximius Labs, Wabash College)、Arman Luthra (Eximius Labs, Wabash College)

### 💡 毒舌点评

本文提出了一种设计精巧的“打补丁”方案，在保持现有强大视觉-语言模型参数完全不变的前提下，将其成功扩展至音频模态，工程严谨性（比特级不变性保证）和可复现性在同类工作中堪称典范。然而，其核心架构的创新本质是组合与连接，而非范式突破，且所有实验均为单种子，评估方式相对保守，其影响力可能主要限于多模态检索系统工程领域。

### 📌 核心摘要

本文旨在解决多模态检索中缺乏统一嵌入空间覆盖文本、图像、视频和音频的问题。作者提出了Fusion Embedding家族，核心方法是在一个冻结的、强大的视觉-语言嵌入模型（Qwen3-VL-Embedding-2B）基础上，通过连接器（Generation 1）和模态门控深度适配器（Generation 2）将一个冻结的音频编码器（Qwen2.5-Omni）对齐到该空间，且保证原始基础模型的文本/图像/视频输出比特级不变。与现有方法相比，其创新在于仅需训练极少参数（16.4M-60.6M）即可扩展模态，且严格保留基础模型性能，避免重嵌索引。实验结果表明，该方法在AudioCaps测试集上实现了音频到文本R@10 0.741（Generation 1）和0.743（Generation 2），并展现出强大的零样本跨模态音频-图像检索能力（R@10 ~0.4，29倍于随机）。该工作的实际意义在于为现有视觉-语言检索系统提供了低成本、高保真度的音频扩展方案。主要局限性在于语音和音乐数据训练不足，评估为单种子，且与全参数微调的音频专精系统在性能上仍有差距。

**关键实验结果表格 (AudioCaps Test Retrieval)**

| Model | Trained params | A→T R@1 | A→T R@10 | T→A R@1 | T→A R@10 |
| :--- | :--- | :--- | :--- | :--- | :--- |
| fusion-embedding-1 v0.3 | 16.4M | 0.332 | 0.741 | 0.280 | 0.746 |
| fusion-embedding-2 (deep adapters) | 60.6M | 0.302 | 0.743 | 0.292 | 0.775 |
| **Audio-native specialist systems** | | | | | |
| OEA | 11–16M | — | — | 0.389 | 0.845 |
| AuroLA + re-ranker | 418M + 7B | 0.656 | 0.933 | 0.510 | 0.896 |
| **CLAP-class dual encoders** | | | | | |
| M2D-CLAP | ~0.20B | 0.593 | 0.928 | 0.420 | 0.886 |
| **Unified space, all towers trained** | | | | | |
| ONE-PEACE | 4B | 0.510 | 0.920 | 0.425 | 0.884 |

**关键实验结果表格 (Clotho v2.1 Retrieval, Zero-shot)**

| Model | Trained params | A→T R@1 | A→T R@10 | T→A R@1 | T→A R@10 |
| :--- | :--- | :--- | :--- | :--- | :--- |
| fusion-embedding-1 v0.3 | 16.4M | 0.135 | 0.433 | 0.136 | 0.460 |
| fusion-embedding-2 | 60.6M | 0.127 | 0.421 | 0.151 | 0.482 |
| **Audio-native specialist systems** | | | | | |
| AuroLA (pretrain, ZS) | 418M | 0.329 | — | 0.265 | — |
| **CLAP-class dual encoders** | | | | | |
| WavCaps HTSAT-BERT (ZS) | ~0.14B | 0.200 | 0.566 | 0.165 | 0.509 |
| GLAP | 0.86B | 0.218 | 0.615 | 0.194 | 0.583 |

**关键实验结果表格 (VGGSound-696 Cross-modal Retrieval, R@10)**

| Model | audio↔image | audio↔text | text↔image |
| :--- | :--- | :--- | :--- |
| Chance | 0.014 | 0.014 | 0.014 |
| ImageBind-Huge | 0.718 / 0.720 | 0.404 / 0.348 | 0.243 / 0.282 |
| LanguageBind | 0.365 / 0.415 | 0.547 / 0.331 | 0.221 / 0.283 |
| Gemini Embedding 2 | 0.312 / 0.316 | 0.379 / 0.374 | 0.273 / 0.366 |
| fusion-embedding-1 v0.2 | 0.418 / 0.440 | 0.588 / 0.631 | 0.331 / 0.319 |
| fusion-embedding-2 | 0.392 / 0.430 | 0.665 / 0.681 | 0.331 / 0.319 |

### 🔗 开源详情

- 代码：论文中明确给出了代码仓库链接：`https://github.com/Eximius-Labs/fusion-embedding`。该代码库包含训练和评估代码，使用Apache-2.0许可证。
- 模型权重：论文中明确给出了两个模型家族的HuggingFace链接：
    - 第一代（Fusion Embedding 1）：`https://huggingface.co/EximiusLabs/fusion-embedding-1-2b-preview`（包含v0.1/v0.2/v0.3-preview）。
    - 第二代（Fusion Embedding 2）：`https://huggingface.co/EximiusLabs/fusion-embedding-2-2b-preview`（包含v0.1/v0.2-preview）。
- 数据集：论文中使用了多个数据集进行训练和评估，但未提供统一的下载链接。具体使用的数据集包括：
    - **训练集**：AudioCaps（训练集部分）、FSD50K、WavCaps（AudioSet-SL子集）、LAION-FreeSound（子集）、BBC sound effects。第一代模型训练使用了484,372对，第二代使用了518,183对（清理后）。此外，**AudioCaps 2.0**数据集的扩展部分在后续工作中被用于微调（第9节）。
    - **评估集**：AudioCaps（测试集）、Clotho v2.1、ESC-50、VGGSound、MAEB benchmark。数据获取方式在各基准测试的原始论文中说明。
- Demo：论文中未提及在线演示或Demo链接。
- 复现材料：论文提供了详细的复现材料，包括：
    - **配置**：完整的训练超参数、评估协议（§4.5， Appendix A）。
    - **检查点**：发布在HuggingFace上的、带有固定版本标签的权重。
    - **验证**：论文声称每个训练运行都会生成一个结果记录，包含配置、损失轨迹、`base_drift`断言和自动评分结果（§6.4， Reproducibility statement）。
    - **集成**：第一代模型已集成到`mteb`库中，可以通过`mteb.get_model`函数按名称加载（§10， Reproducibility statement）。

### 🏗️ 方法概述和架构

本文提出的方法是一个端到端的多模态嵌入系统扩展框架，其核心流程是：输入音频波形→经过冻结的音频编码器提取帧级特征→通过可训练的连接器或适配器映射到冻结的基础视觉-语言模型的输入嵌入空间→基础模型进行前向传播并输出最终的统一嵌入向量。该系统不修改基础模型任何参数，仅通过训练新增模块实现模态扩展。

下图展示了Fusion Embedding系统的整体架构，包括冻结的基础模型、音频编码器和新增的连接器与适配器模块。

![Figure 1: The Fusion Embedding family. Both generations share the frozen stack: a byte-frozen Qwen3-VL-Embedding-2B base (last-token pooling, Matryoshka output ladder) and the frozen Qwen2.5-Omni audio tower. Generation 1 (fusion-embedding-](https://arxiv.org/html/2607.18666v1/x1.png)

图中清晰显示了音频输入如何通过冻结的音频编码器和可训练的FusionResampler（Generation 1）或模态门控适配器（Generation 2）融入冻结的基础模型，同时保持文本/图像/视频路径不变。


**主要组件详解：**
1.  **冻结基础模型**：采用`Qwen3-VL-Embedding-2B`，一个基于解码器语言模型的嵌入模型。其功能是提供已存在的文本、图像、视频的统一嵌入空间。它采用最后token（EOS）池化，并支持Matryoshka表示学习（MRL）的嵌套截断输出。其所有参数在训练中完全冻结。
2.  **冻结音频编码器**：采用`Qwen2.5-Omni-7B`中的音频编码器（`Whisper-large-v3`衍生），功能是处理16kHz单声道音频的128-bin log-mel频谱图（30秒窗口），输出维度为3584的帧级特征（约25帧/秒）。其参数同样完全冻结。
3.  **Generation 1 连接器（FusionResampler）**：功能是将音频编码器的帧级特征映射到基础模型的输入嵌入空间。它是一个`Flamingo`风格的感知器重采样器，内部瓶颈宽度为384，包含64个可学习潜在查询，经过6个预归一化Transformer块（潜在自注意力→音频帧交叉注意力→FFN），总参数16.4M。其输出序列覆盖基础模型输入流中的N个占位符token的位置。
4.  **Generation 2 模态门控深度适配器**：功能是在不改变非音频输入行为的前提下，为音频处理增加基础模型内部的计算能力。它在基础模型的28个解码器层中的每一层附加一个瓶颈适配器（`LayerNorm` → 2048×384 → `SiLU` → 384×2048，共44.2M参数）。关键设计是**硬门控**：适配器分支仅在音频被编码时执行；对于文本、图像、视频输入，钩子直接返回原始冻结层的输出，确保非音频输入的计算图与基础模型完全一致。适配器的上投影初始化为零，使得初始状态等同于Generation 1。

**组件间数据流与交互**：音频波形输入冻结音频编码器，得到帧特征。在Generation 1中，这些特征经`FusionResampler`压缩和重采样后，直接注入基础模型输入流的占位符位置。在Generation 2中，注入过程相同，但当基础模型处理这些含音频token的序列时，每一层都会触发门控适配器参与残差流计算，增强模型对音频token的内部处理能力。文本/图像/视频输入则完全绕过适配器，走原始冻结路径。

**关键设计选择及动机**：核心设计哲学是“冻结基础，外部扩展”。选择冻结基础模型而非微调，是为了保证已部署系统的索引和基准性能**比特级不变**，避免重嵌成本。选择将音频对齐到文本空间（而非反之），是因为文本是连接其他模态的自然枢纽，训练音频-文本对齐即可使音频-图像检索能力**涌现**。使用模态门控适配器而非`LoRA`等参数高效微调方法，是因为`LoRA`会修改所有token的计算路径，无法保证非音频输入的字节一致性。这一设计将“保留基础模型性能”的声明从经验性验证转变为架构的机械性保证。

### 💡 核心创新点

1.  **比特级基础模型不变性保证**：通过参数回归守卫和计算图门控机制，确保扩展音频后，原始视觉-语言模型对任何非音频输入的输出与发布时的基准模型**完全一致**（比特级相等）。这解决了传统模型融合或适配器方法会微妙改变基础模型行为的问题，为已建立索引的系统提供了“即插即用”的升级路径。
2.  **通过纯文本对齐实现跨模态涌现**：仅使用音频-文本对进行训练，但音频嵌入能够与图像嵌入在向量空间中有效对齐，实现强大的音频-图像零样本检索（在VGGSound-696上R@10达0.418，29倍于随机）。这验证了“对齐到文本即对齐到一切”的假设，且成本极低。
3.  **系统化的负结果与设计空间映射**：论文不仅报告成功，更通过严谨的A/B实验报告了三项关键负结果：用LLM重写训练标题（更“干净”）反而降低检索性能；使用在浅层投影中表现更好的声音事件音频编码器（Dasheng），在拼接到冻结LLM后反而性能骤降；扩大连接器宽度导致过拟合。这些负结果精确定位了该架构的性能瓶颈在于冻结LLM处理音频token的能力，直接催生了Generation 2的适配器设计。
4.  **针对冻结骨干的训练协议洞察**：发现并量化了输入协议（如聊天模板格式）对基于LLM的嵌入模型性能的巨大影响（AudioCaps R@10相差14.5点），这一洞察具有广泛迁移价值，适用于任何冻结的解码器型嵌入骨干。

下图进一步证实了这一涌现能力，在VGGSound-696数据集上，fusion-embedding模型以极少的训练参数实现了与大型基线模型可比的跨模态检索性能。

![Figure 4: Positioning among unified embedding models on VGGSound-696 cross-modal retrieval (R@10 averaged over both directions; log axis of trained parameters). Left: audio↔\\leftrightarrowtext. Right: emergent audio↔\\leftrightarrowimage, wh](https://arxiv.org/html/2607.18666v1/x4.png)

图中可见，fusion-embedding-2在audio↔text和emergent audio↔image任务上均达到了高召回率，而其训练参数远少于ImageBind和LanguageBind。

### 📊 实验结果

论文在多个维度进行了全面评估。主实验在AudioCaps和Clotho（零样本）数据集上对比了不同类别的系统，结果如上表所示。在跨模态检索上，在VGGSound-696上评估了音频-图像、音频-文本、文本-图像检索，结果如上表所示。

论文还报告了在MAEB基准的9个任务上的结果（Table 15），总体排名在#3-#6位。所有结果均为单种子。作者明确指出，对于883个查询和1045个查询的池，召回率比例的二项式标准误差分别约为1.5点和1.4点，因此将低于约2点的差异视为统计噪声。

**关键实验结果表格 (Family Delta, Release Protocol)**

| Metric | Gen. 1 (v0.3) | Gen. 2 |
| :--- | :--- | :--- |
| AudioCaps A→T R@1 | 0.332 | 0.302 |
| AudioCaps A→T R@10 | 0.741 | 0.743 |
| AudioCaps T→A R@1 | 0.280 | 0.292 |
| AudioCaps T→A R@10 | 0.746 | 0.775 |
| Clotho A→T R@1 | 0.135 | 0.127 |
| Clotho A→T R@10 | 0.433 | 0.421 |
| Clotho T→A R@1 | 0.136 | 0.151 |
| Clotho T→A R@10 | 0.460 | 0.482 |
| VGGSound A→T R@10 | 0.625 | 0.665 |
| VGGSound T→A R@1 | 0.213 | 0.266 |
| VGGSound T→A R@10 | 0.645 | 0.681 |
| Emergent A→I R@10 | 0.407 | 0.392 |

关键消融实验结果：
- **训练协议影响**：使用基础模型原生聊天模板格式训练，比使用裸格式在AudioCaps A→T R@10上提升14.5点。论文指出，在裸格式下评估原生格式训练的检查点会导致分数从0.626暴跌至0.370（差25.6点）。
- **连接器宽度**：在131K数据下，宽度从256增到384提升4.7 R@10，但增到512无进一步提升且出现过拟合迹象（Table 10）。在484K数据下，`dr=512`比`dr=384`的性能更差（R@10 0.675 vs 0.717）。
- **负样本银行缩放**：当训练数据超过500K时，全库负样本银行会导致性能下降，需引入软标签（`β=0.3`）和假阴性掩码（`τ=0.98`）来缓解（在592K A/B中恢复了+2.6 R@10）。
- **适配器有效性**：在控制实验中，加入模态门控适配器（rank 384）使音频到文本R@10从0.631提升到0.665（Table 14, Appendix C）。
- **负结果实验**：
    - 重写字幕：使用LLM重写所有FreeSound和BBC字幕后，尽管字幕更“干净”（重复率下降），但In-domain检索（AudioCaps R@10）反而下降了2.5点（从0.674降至0.649）（Table 13）。
    - 音频编码器替换：用排行榜更强的`Dasheng-base`编码器替换`Whisper`家族编码器后，性能骤降16点（AudioCaps R@10从0.631降至0.469）（Table 14）。
- **精度不匹配代价**：用4-bit基础模型重新打分bf16训练的检查点会静默损失5.6 R@10点。

下图直观展示了训练协议对性能的巨大影响，同一检查点在不同输入格式下评分可导致超过25点的R@10差异。

![Figure 2: Protocol sensitivity (AudioCaps A→\\toT R@10). The same generation-1 checkpoint reads 25.6 points apart under the bare vs. native input format (left), while the bare-trained control (right) shows the native format inflates nothing.](https://arxiv.org/html/2607.18666v1/x2.png)

图中对比了使用原生协议训练的检查点在裸格式和原生格式评分下的性能差异，证实了协议敏感性是部署时必须考虑的关键因素。

### 🔬 细节详述

- **训练数据**：主要使用AudioCaps训练集（~45K）、FSD50K、WavCaps AudioSet-SL子集和LAION-FreeSound子集。Generation 1使用484K对，Generation 2使用清洗后的518K对（移除了73,716个描述无声音内容的片段）。所有评估集（AudioCaps test, Clotho, ESC-50, VGGSound）均按clip ID从训练集中排除。长音频随机裁剪为10秒窗口。论文在后续阶段（评估冻结后）使用了AudioCaps 2.0扩展集（86,394对）进行微调。
- **损失函数**：对称InfoNCE损失，应用于每个Matryoshka运行点，并加上一个轻量的`CORAL`协方差惩罚（`λ=0.05`）以防止音频形成独立聚类。对于500K+语料，启用了软标签（`β=0.3`）和假阴性掩码（`τ=0.98`）。
- **训练策略**：使用`AdamW`优化器，余弦退火调度，5%线性预热。有效批大小为1024（微批128×8梯度累积）。Generation 1预训练3200步（约6.8 epoch），然后进行400步领域内微调。Generation 2预训练3900步，然后进行400步领域内微调。音频和文本特征预计算并缓存。所有训练在单个H100 GPU上完成，Generation 1耗时约5.1小时。
- **关键超参数**：连接器内部维度384，64个潜在查询，6层。适配器秩384，应用于28层。检索时使用1024维Matryoshka截断。温度参数初始化为`log(1/0.07)`，并限制在`log(100)`。
- **训练硬件**：单个H100 GPU。
- **推理细节**：使用模型原生的聊天模板进行指令条件编码。评估时使用每个模态的均值中心化（per-modality mean-centering）进行画廊归一化。
- **正则化/稳定训练技巧**：损失函数中的`CORAL`惩罚；冻结文本嵌入的对角白化（均值中心化，除以每维标准差），该操作设计为对角形式以保持Matryoshka截断性质；温度参数限制；对于Generation 2的适配器，上投影初始化为零以确保初始恒等映射。

下图展示了随着训练数据量的增加和训练协议的改进，模型在AudioCaps测试集上A→T R@10性能的变化轨迹。

![Figure 3: AudioCaps A→\\toT R@10 (883 clips, five-reference min-rank) versus training-corpus size across the milestones of Table 2. Grey circles: runs with bare-format text targets; orange squares: native-protocol targets. The dotted riser m](https://arxiv.org/html/2607.18666v1/x3.png)

图中可见，使用原生协议目标（橙色）相比裸格式目标（灰色）带来了显著的性能提升，且后续微调阶段进一步优化了结果。

### ⚖️ 评分理由

*   创新性 (1.2/2)：提出了模态门控深度适配器，通过硬门控机制保证非音频输入的计算图与基础模型完全一致（比特级不变），实现了“即插即用”的模态扩展，是系统级创新。验证了仅通过纯文本对齐即可实现跨模态（音频-图像）检索能力的涌现。提供了系统化的负结果映射（如LLM重写标题、替换音频编码器反而降低性能），精确定位了架构瓶颈。

*   技术严谨性 (1.2/1.5)：提供了严格且可验证的“比特级不变性保证”设计，通过参数回归守卫和计算图门控进行机械性验证。在VGGSound上与ImageBind和LanguageBind等竞品进行了公平的head-to-head对比。报告了多项关键的、经过控制的负结果，增强了方法的严谨性。

*   实验充分性 (1.0/1.5)：在AudioCaps、Clotho（零样本）和跨模态VGGSound上评估了端到端的检索性能。给出了训练成本（单H100 GPU，小时级）和参数量。报告了详尽的消融实验（连接器宽度、损失函数项、训练协议）。但所有结果均为单种子，作者虽提及统计噪声，但缺乏对结果可变性的系统讨论和误差条。

*   清晰度 (0.9/1)：论文结构清晰，对核心组件（冻结基础模型、音频编码器、连接器、适配器）的描述详细，并配有架构图和数据流说明。关键设计选择（如冻结基础、门控机制）的动机阐述明确。实验结果以多张清晰的表格呈现，并进行了深入的讨论。

*   影响力 (1.0/1.5)：论文提出了一种低侵入、低成本扩展现有视觉-语言检索系统音频能力的实用方案，对多模态检索系统工程有明确价值。工作聚焦于音频模态的引入，与音频检索和多模态嵌入社区高度相关。但影响力可能主要限于该特定工程领域，且与全参数微调的专精系统存在性能差距。

*   开源 (1.5/1.5)：核心产物完全开放：代码仓库（Apache-2.0）和所有生成的模型权重（带有版本标签）均已公开。论文提供了详细的复现材料，包括完整的训练超参数、评估协议、检查点以及用于验证不变性的测试套件。

*   可复现性 (0.3/0.5)：论文提供了非常详细的训练配置、超参数、损失函数、数据准备协议和评估细节。但训练数据由多个来源组成，且未提供统一的下载链接或处理脚本，部分基线结果为单源，可能给完全复现带来挑战。

*   工程/实践价值 (1.5/1.5)：提供了完整的端到端工程实践方案：单GPU、小时级训练成本，提出了“冻结基础，外部扩展”的设计哲学和具体的比特级不变性保证机制。详细分析了部署约束（如避免重嵌索引）、训练协议敏感性、精度不匹配代价等实际工程问题，并给出了清晰的负案例指导。

### 🚨 局限与问题

**论文明确承认的局限：**
1.  语音和音乐数据训练不足，模型在相关基准（如MAEB中的语音任务）上表现较弱。
2.  仅支持英语输入。
3.  评估的跨模态结果主要基于VGGSound-696单一基准。
4.  训练数据包含YouTube来源，因此预览版检查点在CC-BY-NC-4.0许可下发布，商用需清洁数据。

**审稿人发现的潜在问题：**
1.  **单种子实验**：所有报告的结果均为单次运行结果，尽管作者承认了统计噪声（~1.5-2点），但缺乏对结果可变性的系统性讨论和误差条。这使得对一些微小增益（如Generation 2在AudioCaps A→T R@10上仅领先0.002）的解读存疑。
2.  **负样本银行拥挤问题的普适性**：论文揭示的负样本银行在语料库超过500K时性能下降的问题，是基于特定（冻结文本侧）设置的发现。这在其他对比学习场景中是否普遍存在，以及软标签和掩码是否为最优解决方案，值得进一步探讨。
3.  **与全参数微调系统的差距**：论文坦承与训练双塔或使用原生音频骨干的系统存在性能差距（~15 R@10）。虽然这是设计约束下的结果，但对于追求极致检索性能的场景，该方案是否为最优选择值得思考。
4.  **跨模态涌现能力的边界**：音频-图像检索能力是“涌现”的，但论文未深入分析这种能力在不同音频-图像对复杂度、抽象程度下的稳定性和局限性。
5.  **MAEB评估的潜在数据污染**：论文主动发现并报告了FSD2019Kaggle任务中测试集与训练集（FSD50K）存在重叠的问题，这是一个值得称赞的细节，但也反映了基准评估中潜在的系统性问题。
6.  **协议敏感性的影响**：论文强调了评估协议（如输入模板、评分方式）对结果的巨大影响。这虽然指出了领域的一个重要问题，但也意味着其报告的具体数值与采用不同协议的工作难以直接比较，削弱了结果的可迁移性。
7.  **对基础模型的依赖**：方法的成功极大程度上依赖于一个强大且固定的视觉-语言基础模型。如果基础模型本身在某些模态（如视频）上表现不佳，该扩展方案也无法改进这些部分。

---

[← 返回 2026-07-22 语音/音乐/音频论文速递](/audio-paper-digest-blog/posts/2026-07-22/)
