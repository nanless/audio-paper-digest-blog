---
title: "FlexiCodec: A Dynamic Neural Audio Codec for Low Frame Rates"
date: 2026-05-03
draft: false
tags: [音频编解码, 语音合成, 流匹配, 低资源, 开源工具]
categories: [iclr-2026]
description: "FlexiCodec: A Dynamic Neural Audio Codec for Low Frame Rates"
hiddenInHomeList: true
---

# 📄 FlexiCodec: A Dynamic Neural Audio Codec for Low Frame Rates

#音频编解码 #语音合成 #流匹配 #低资源 #开源工具

🔥 **8.5/10** | #音频编解码 #语音合成


### 👥 作者与机构

- 第一作者：Jiaqi Li（香港中文大学（深圳），The Chinese University of Hong Kong, Shenzhen）
- 通讯作者：未说明
- 作者列表：Jiaqi Li（香港中文大学（深圳）），Yao Qian（Microsoft, USA），Yuxuan Hu（Microsoft, USA），Leying Zhang（上海交通大学，Shanghai Jiao Tong University），Xiaofei Wang（Microsoft, USA），Heng Lu（Microsoft, USA），Manthan Thakker（Microsoft, USA），Jinyu Li（Microsoft, USA），Sheng Zhao（Microsoft, USA），Zhizheng Wu（香港中文大学（深圳）等多单位）

### 💡 毒舌点评

FlexiCodec的动态帧率设计和ASR特征引导的语义编码思路确实巧妙，成功将低帧率音频编解码的语义保持能力推到3Hz，显著优于固定帧率方案。不过，论文在展示“动态”优势时，对比的固定帧率基线是作者自己重训的简化版本，这稍弱于与成熟的公开基线直接对比的说服力；此外，其多语言泛化能力有限，在未见语言上语义token表现糟糕，这限制了其作为通用语音表示模型的潜力。

### 🔗 开源详情

*   代码：提供代码仓库链接：https://github.com/amphionteam/flexicodec。
*   模型权重：论文中提及“Code is available”，通常暗示模型权重可能随代码发布，但未明确声明公开预训练权重。
*   数据集：训练数据集Librilight-Large为公开数据集，但论文未提供直接获取方式。评估数据集LibriSpeech、TIMIT、Emilia均为公开可用。
*   Demo：提供在线演示网站：https://flexicodec.github.io。
*   复现材料：论文提供了极其详细的训练细节、配置、模型参数量、评估设置，以及多篇附录（A-L）补充实验和可视化，复现信息非常充分。
*   引用的开源项目：SenseVoice-Small (ASR), Vocos (vocoder), Amphion Toolkit。

### 📌 核心摘要

1.  要解决的问题：现有低帧率（<12.5Hz）神经音频编解码器在压缩语音时会严重丢失语义信息，主要原因是语义与声学信息解耦不足，以及固定的低帧率无法适应语音中瞬态音素细节的变化。这限制了其在低计算开销语音语言模型中的应用。
2.  方法核心：提出FlexiCodec，一个采用动态帧率（3Hz-12.5Hz）的低帧率神经音频编解码器。其核心是双流编码架构（ASR特征流 + 波形特征流），并引入基于ASR特征相似度的动态帧合并模块，自适应地将语义相似的帧进行合并，从而在信息稀疏区域使用更少的帧。语义流使用FSQ量化产生RVQ-1 token，声学流使用多层RVQ量化。
3.  与已有方法相比新在哪里：(1) 动态帧率：首次在极低帧率（≤10Hz）领域引入动态分配机制，与固定帧率的CodecSlime等工作不同；(2) ASR特征引导：使用冻结的预训练ASR模型（SenseVoice-Small）特征而非SSL特征来引导语义编码和帧合并，被证明在低帧率下更能保留语义；(3) 推理时帧率可连续可控：通过调整合并阈值τ，单一模型可支持3Hz到12.5Hz的任意平均帧率。
4.  主要实验结果：
    *   在LibriSpeech测试集上，FlexiCodec在6.25Hz平均帧率下，仅使用RVQ-1 token重建音频的WER为4.15%，远优于重训的DualCodec基线（31.5%），接近2.1%的地面真值WER。
    *   在声学质量上（RVQ1:8 token），FlexiCodec在12.5Hz、8.3Hz、6.25Hz下的PESQ分别为3.35、3.03、2.76，SIM为0.85、0.78、0.71，均优于或持平于相同码率的基线系统。
    *   消融实验表明，动态帧率策略相比固定帧率（FFR）版本，在8.3Hz和6.25Hz下分别将RVQ-1 WER相对降低了19%和26%。
    *   在下游TTS任务中（FlexiCodec-TTS），使用6.25Hz AR帧率和50Hz NAR的配置，达到了3.2%的WER、3.32的NMOS和3.40的QMOS，与CosyVoice等先进基线性能相当，同时AR阶段RTF降低至0.07（比CosyVoice快7.3倍）。
    *   与超过10种开源音频编解码器对比，FlexiCodec在多个比特率级别（1.3kbps， 0.85kbps， 0.64kbps）上均取得了有竞争力的声学质量和语义保持能力。
5.  实际意义：为低计算开销、低延迟的语音生成（如TTS）和语音语言模型提供了更高效的音频tokenizer。动态帧率设计允许在质量与效率间灵活权衡，特别适合边缘设备等资源受限场景。
6.  主要局限性：(1) 多语言泛化能力有限，在未见语言（如中、日、韩）上，仅使用RVQ-1 token的语义表示（WER）表现很差，需要针对性微调；(2) 动态帧率依赖ASR特征，其质量直接影响合并效果；(3) 论文未明确提供FlexiCodec训练所用的数据集信息（仅说明使用Librilight-Large）。

### 🏗️ 模型架构

FlexiCodec是一个端到端的神经音频编解码器，整体架构如图1所示。其完整输入输出流程如下：输入16kHz语音波形，经过双流编码、动态帧合并、量化、动态帧展开和卷积解码，输出重建的语音波形。

![图1](/audio-paper-digest-blog/images/iclr-2026/2026-05-03/kYkfCs4ZAH-0.png)

主要组件与数据流：
1.  双流特征提取：
    *   ASR编码器：使用冻结的预训练SenseVoice-Small Transformer模型的最后隐藏层（除CTC头）作为语义特征，输出16.67Hz特征，经线性插值对齐到12.5Hz。
    *   Codec编码器：一个卷积神经网络（5个CNN块，步长[4,4,5,8,2]），将16kHz波形下采样至12.5Hz，得到波形特征（声学流）。
2.  动态帧合并模块（图2a）：作用于12.5Hz的ASR特征和波形特征。计算相邻ASR帧的余弦相似度，当连续帧的相似度大于阈值τ时，将这些帧合并为一帧（对两个流分别求平均）。合并后记录每个帧的原始长度ℓₖ。为平滑合并带来的不自然感，将合并前后的帧交错后送入一个带局部注意力的Transformer进行细化。
3.  量化：
    *   语义量化（RVQ-1）：使用FSQ对动态帧率的ASR特征进行量化，产生语义token。FSQ先投影到D=5维，每维量化到L=8级（总码本32768），再投影回原维度。用L2损失对齐量化前后特征。
    *   声学量化（RVQ-rest）：计算动态帧率下波形特征与ASR特征的残差，使用24层RVQ（每层码本4096，维度512）进行量化，产生声学token。
4.  帧展开与解码：解码时，利用记录的帧长度ℓₖ将动态帧率序列展开回12.5Hz固定帧率序列。展开后的特征送入另一个带局部注意力的Transformer细化，最后经过与编码器对称的Codec解码器（转置卷积）生成波形。

关键设计选择：
*   ASR特征引导：利用ASR模型在训练时学到的丰富语义信息来指导低帧率下的语义编码和帧合并，比SSL特征更有效。
*   局部注意力Transformer：用于处理合并/展开前后的特征，能捕获局部上下文，且可推广到训练时未见过的更长音频。
*   FSQ用于语义量化：相比VQ，FSQ无需码本更新损失，训练更稳定。

### 💡 核心创新点

1.  极低帧率下的动态帧率分配：提出在≤10Hz的极低帧率领域实现动态压缩。通过自适应合并语义相似帧，使token率与语音的音素复杂度（信息密度）匹配，在信息稀疏区域（如长音、静音）用更少帧，从而在更低平均帧率下保持语义完整性。实验（图4）显示其帧率与音素率有强正相关（r=0.775）。
2.  ASR特征引导的语义解耦：摒弃常用的SSL特征（如HuBERT, w2v-bert-2），改用冻结的预训练ASR模型（SenseVoice-Small）的特征作为语义指导。该特征为文本预测而优化，语义更集中，在低帧率下对语义保持更有效（消融表8，使用w2v-bert-2的WER从4.15大幅劣化至27.3）。
3.  推理时帧率连续可控：通过在训练时采样不同的合并阈值τ（0.7-1.0），单一模型可在推理时通过调整τ实现3Hz到12.5Hz之间的任意平均帧率，为下游任务提供灵活的效率-质量权衡。

### 🔬 细节详述

*   训练数据：Codec训练使用Librilight-Large（16kHz, 54k小时）。TTS下游实验使用Libriheavy（16kHz, 50k小时）。评估使用LibriSpeech-test-clean子集和TIMIT子集。
   损失函数：总损失L = Lrecon + λGAN  LGAN + λRVQ  LRVQ + λfeat  Lfeat。
    *   Lrecon: 多尺度L1梅尔谱重建损失。
    *   LGAN: 对抗损失和特征匹配损失，使用多周期判别器（MPD）和多分辨率谱判别器（MRSD）。
    *   LRVQ: RVQ的L1码本更新损失和承诺损失。
    *   Lfeat: 语义token嵌入与未量化ASR特征之间的L2对齐损失。
*   训练策略：
    *   优化器：AdamW（lr=1e-4, betas=(0.8, 0.99)）。
    *   学习率调度：指数衰减（gamma=0.999998）。
    *   训练步数：800k步。
    *   Batch Size：每GPU 5个样本，每个样本5秒。共8个NVIDIA V100 32GB GPU。
    *   τ采样：训练时τ在[0.7, 1.0]区间随机采样。
*   关键超参数：
    *   模型总参数：216M。
    *   FSQ：D=5维，L=8级，码本大小32768。
    *   RVQ-rest：24层，每层码本4096，维度512。
    *   最大合并长度ℓₖ=8（存储需3比特）。
    *   用于TTS的FlexiCodec-TTS：AR模型250M参数，NAR模型300M参数。
*   推理细节：解码时，从动态帧率token序列通过帧展开模块恢复12.5Hz序列，再通过卷积解码器生成波形。TTS的NAR阶段使用条件流匹配（15步，CFG=1.5）。
*   稳定训练技巧：延迟Transformer模块的参数更新（如初始10%步骤设为恒等映射）有助于稳定训练。

### 📊 实验结果

表1：不同音频tokenization方法属性对比（论文中Table 1）
| Method | Frame Rate (Hz) | Dynamic Rate | Controllable Rate | Semantic Augmentation | TTS Oriented? |
| :--- | :--- | :--- | :--- | :--- | :--- |
| DAC | 75 | ✗ | ✗ | ✗ | ✗ |
| SpeechTokenizer | 50 | ✗ | ✗ | SSL feature (HuBERT) | ✓ |
| CodecSlime | 40 (Avg) | ✓ | ✓ | ✗ | ✗ |
| Mimi | 12.5 | ✗ | ✗ | SSL feature (WavLM) | ✓ |
| DualCodec | 12.5 / 25 | ✗ | ✗ | SSL feature (w2v-bert-2) | ✓ |
| TaDiCodec | 6.25 | ✗ | ✗ | Text | ✓ |
| FlexiCodec | 6.25 / 8.3 / 12.5 (Avg) | ✓ | ✓(Any from 3 to 12.5Hz) | ASR feature | ✓ |
结论：FlexiCodec是唯一同时具备动态帧率、任意可控帧率（3-12.5Hz）和面向TTS特性的方法。

表2：FlexiCodec在不同τ下的平均帧率与WER（论文中Table 2）
| τ | 0.7 | 0.75 | 0.8 | 0.9 | 1.0 |
| :--- | :--- | :--- | :--- | :--- | :--- |
| AVG frame rate | 3.0 | 3.6 | 4.5 | 7.9 | 12.5 |
| WER(RVQ1)↓ | 51.5 | 29.5 | 14.4 | 3.13 | 2.76 |
| WER(RVQ1:8)↓ | 18.1 | 8.90 | 4.38 | 2.37 | 2.23 |
结论：τ越小，平均帧率越低，语义保持（WER）越差。但即使τ=0.8（平均4.5Hz），WER仍可接受。

表3：动态帧率消融实验（语义测试，论文中Table 3）
| | WER(RVQ1)↓ | WER(RVQ1:8)↓ | ASR probing WER↓ |
| :--- | :--- | :--- | :--- |
| GT / Upper bound | 2.10 | 2.10 | 11.1 |
| FlexiCodec @8.3Hz | 2.98 | 2.28 | 13.0 |
| →w/o dynamic frame rate | 3.56 (+19% rel.) | 2.43 (+6% rel.) | 14.5 (+12% rel.) |
| FlexiCodec @6.25Hz | 4.15 | 2.53 | 15.6 |
| →w/o dynamic frame rate | 5.22 (+26% rel.) | 2.73 (+8% rel.) | 18.8 (+21% rel.) |
结论：移除动态帧率（使用固定帧率FFR）会显著增加WER，尤其在极低帧率6.25Hz下，RVQ-1 WER相对增加26%。动态帧率策略对语义保持至关重要。

表4：与开源编解码器在各比特率下的对比（论文中Table 5， 部分关键行）
| System | RVQ1 WER↓ | RVQ1:8 WER↓ | BR(kbps) | PESQ↑ | UTMOS↑ | MCD↓ | SIM↑ |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| >1kbps组 | | | | | | | |
| DualCodec-12.5Hz | 5.93 | 2.26 | 1.2 | 3.29 | 4.18 | 2.81 | 0.85 |
| FlexiCodec @12.5Hz | 2.76 | 2.23 | 1.3 | 3.35 | 4.22 | 2.76 | 0.85 |
| ∼0.8kbps组 | | | | | | | |
| XCodec2-50Hz | 2.80 | 2.80 | 0.8 | 2.77 | 4.08 | 3.65 | 0.82 |
| FlexiCodec @8.3Hz | 2.98 | 2.28 | 0.85 | 3.03 | 4.21 | 3.10 | 0.78 |
| ≤0.7kbps组 | | | | | | | |
| TaDiCodec-6.25Hz | 4.32 | 4.32 | 0.15 | 1.73 | 4.05 | 9.75 | 0.83 |
| FlexiCodec @6.25Hz | 4.15 | 2.53 | 0.64 | 2.76 | 4.18 | 3.42 | 0.71 |
结论：在每个比特率级别，FlexiCodec在语义保持（尤其RVQ-1:8）和声学质量上均达到或超越其他开源基线。

表5：TTS实验结果（论文中Table 6， 部分关键行）
| Model | AR Frame rate | WER↓ | SIM-o↑ | RTF(AR)↓ | NMOS↑ | QMOS↑ |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| CosyVoice | 50 | 3.2 | 0.63 | 0.51 | 3.17±0.95 | 3.32±0.85 |
| FlexiCodec-TTS (w/ 50Hz NAR) | 12.5 | 2.5 | 0.64 | 0.15 | 3.27±0.95 | 3.30±0.84 |
| | 8.3 | 2.5 | 0.65 | 0.10 | 3.22±0.91 | 3.28±0.84 |
| | 6.25 | 3.2 | 0.65 | 0.07 | 3.32±0.87 | 3.40±0.78 |
结论：FlexiCodec-TTS在6.25Hz AR下，性能与CosyVoice相当，但AR阶段速度快7.3倍（RTF 0.07 vs 0.51）。更低AR帧率不一定导致性能下降。

![图3](/audio-paper-digest-blog/images/iclr-2026/2026-05-03/kYkfCs4ZAH-2.jpg)
图3(a)：不同基线（DAC, DualCodec, FlexiCodec）在12.5Hz, 8.3Hz, 6.25Hz平均帧率下，仅用RVQ-1 token重建音频的WER。FlexiCodec在所有帧率下WER最低，优势在6.25Hz下尤为明显（4.15% vs 31.5%）。
![图4](/audio-paper-digest-blog/images/iclr-2026/2026-05-03/kYkfCs4ZAH-3.jpg)
图4：在固定合并阈值τ下，FlexiCodec的平均帧率与TIMIT数据集中语音的平均音素率呈现强正相关（Pearson r = 0.775）。这证明了动态帧率机制自适应音素复杂度的特性。

### ⚖️ 评分理由

*   学术质量：6.5/7：创新性突出，提出了针对极低帧率挑战的动态帧率和ASR引导新范式。技术路线设计合理，有充分的消融实验支持（如表3，8，9）验证每个设计选择的有效性。实验全面，覆盖了编解码器自身性能（多种帧率、多种指标）、与众多开源基线对比、下游TTS任务以及泛化性测试。证据可信，关键结果（如WER从31.5%降至4.15%）具有显著提升。未给满分是因为部分基线（如DAC, DualCodec at 6.25Hz���为作者重训版本，与完全公开的SOTA直接对比稍弱。
*   选题价值：1.5/2：选题非常前沿，直接针对当前语音大模型降低计算开销的关键瓶颈（高帧率token序列过长）。提出的低帧率、动态可控方案具有明确的实用价值（边缘设备、自适应传输），对音频/语音领域的研究者和工程师有较高相关性。
*   开源与复现加成：0.5/1：论文明确提供了代码仓库（https://github.com/amphionteam/flexicodec）和在线demo链接。给出了非常详细的训练配置（数据、优化器、超参数、硬件）。模型权重应随代码开源（未明确提及但通常可获取）。未提供训练数据（Librilight-Large）的直接下载链接，扣分。

---

[← 返回 ICLR 2026 论文分析](/audio-paper-digest-blog/posts/iclr2026-summary/)
