---
title: "ICLR 2026 - 语音合成 论文列表"
date: 2026-05-03
draft: false
tags: ["语音合成"]
categories: [iclr-2026]
description: "共 9 篇 ICLR 2026 语音合成 方向论文"
hiddenInHomeList: true
---

# ICLR 2026 - 语音合成

共 **9** 篇论文

[← 返回 ICLR 2026 总览](/audio-paper-digest-blog/posts/iclr2026-summary/)

---

| 排名 | 论文 | 评分 | 分档 |
|------|------|------|------|
| 🥇 | [Scaling Speech Tokenizers with Diffusion Autoencoders](/audio-paper-digest-blog/posts/2026-05-03-scaling-speech-tokenizers-with-diffusion) | 9.0分 | 前10% |
| 🥈 | [SpeechJudge: Towards Human-Level Judgment for Speech Natural](/audio-paper-digest-blog/posts/2026-05-03-speechjudge-towards-human-level-judgment-for) | 8.5分 | 前10% |
| 🥉 | [Toward Complex-Valued Neural Networks for Waveform Generatio](/audio-paper-digest-blog/posts/2026-05-03-toward-complex-valued-neural-networks-for) | 8.5分 | 前25% |
| 4. | [Gogo: Group-wise granularity-ordered codec for stable and ef](/audio-paper-digest-blog/posts/2026-05-03-gogo-group-wise-granularity-ordered-codec-for) | 8.0分 | 前25% |
| 5. | [MambaVoiceCloning: Efficient and Expressive Text-to-Speech v](/audio-paper-digest-blog/posts/2026-05-03-mambavoicecloning-efficient-and-expressive-text) | 7.5分 | 前25% |
| 6. | [FlexiVoice: Enabling Flexible Style Control in Zero-Shot TTS](/audio-paper-digest-blog/posts/2026-05-03-flexivoice-enabling-flexible-style-control-in) | 7.5分 | 前25% |
| 7. | [VibeVoice: Expressive Podcast Generation with Next-Token Dif](/audio-paper-digest-blog/posts/2026-05-03-vibevoice-expressive-podcast-generation-with-next) | 7.5分 | 前25% |
| 8. | [From Natural Alignment to Conditional Controllability in Mul](/audio-paper-digest-blog/posts/2026-05-03-from-natural-alignment-to-conditional) | 7.5分 | 前25% |
| 9. | [Hierarchical Semantic-Acoustic Modeling via Semi-Discrete Re](/audio-paper-digest-blog/posts/2026-05-03-hierarchical-semantic-acoustic-modeling-via-semi) | 7.5分 | 前25% |

---

## 📋 论文详情

### 🥇 [Scaling Speech Tokenizers with Diffusion Autoencoders](/audio-paper-digest-blog/posts/2026-05-03-scaling-speech-tokenizers-with-diffusion)

🔥 **9.0/10** | 前10% | #语音合成 | #扩散模型 | #语音编码 #语音大模型

👥 **作者与机构**

请基于当前提供的论文内容尽量完整提取作者与机构信息，要求：
1. 明确标注第一作者（如论文可判断），否则写“未说明”
2. 明确标注通讯作者（如论文可判断），否则写“未说明”
3. 列出能确认的作者姓名及其所属机构（大学、实验室、公司）
4. 机构信息尽量具体到实验室或部门；如果文本里没有，就写到能确认的层级
5. 禁止猜测机构信息；无法确认时明确写“未说明”

输出格式示例：
- 第一作者：张三（清华大学计算机系）
- 通讯作者：李四（Google DeepMind）
- 作者列表：张三（清华大学计算机系）、李四（Google DeepMind）、王五（未说明）

- 第一作者：Yuancheng Wang（香港中文大学（深圳）， Meta超级智能实验室）
- 通讯作者：未说明
- 作者列表：Yuancheng Wang（香港中文大学（深圳）， Meta超级智能实验室）、Zhenyu Tang（Meta超级智能实验室）、Yun Wang（Meta超级智能实验室）、Arthur Hinsvark（Meta超级智能实验室）、Yingru Liu（Meta超级智能实验室）、Yinghao Aaron Li（Meta超级智能实验室）、Kainan Peng（Meta超级智能实验室）、Junyi Ao（香港中文大学（深圳）， Meta超级智能实验室）、Mingbo Ma（Meta超级智能实验室）、Mike Seltzer（Meta超级智能实验室）、Qing He（Meta超级智能实验室）、Xubo Liu（Meta超级智能实验室）

💡 **毒舌点评**

这篇论文提出了一个解决语音分词器根本矛盾的新范式，并通过1.6B模型和2M小时数据的大规模实验验证了其有效性，但对比基线选择略显陈旧，未与同期或稍晚的一些强基线（如CosyVoice 2的tokenizer）在相同设置下直接比较。

🔗 **开源详情**

- 代码：论文中明确提到“will release the full inference code”，并提供了演示网站链接（https://sitok-demo.github.io/）。代码仓库链接论文中未提及。
- 模型权重：论文中明确提到会发布预训练模型检查点（在公开研究数据集上）。
- 数据集：训练使用的是内部数据（200万小时），论文中未提及公开获取方式。评估使用了一些公开基准集（如SeedTTS test-en， LibriSpeech）。
- Demo：提供了在线演示网站：https://sitok-demo.github.io/
- 复现材料：非常充分。包括：1）详细的模型架构描述和伪代码；2）完整的训练循环伪代码；3）详尽的超参数（学习率、批处理策略、优化器设置等）；4）全面的消融实验设计。论文D节为可复现性声明。
- 论文中引用的开源项目：Vocos声码器（Siuzdak, 2024）、LLaMA架构（Touvron et al., 2023）、RoPE位置编码（Su et al., 2024）等。
- 整体开源计划：论文中提及将开源，但具体平台和时间点未说明。

📌 **核心摘要**

这篇论文旨在解决现有语音分词器在平衡语义理解、高保真重建和高压缩率方面的根本矛盾。核心方法是提出一种基于扩散自编码器的语音分词器（SiTok），通过端到端联合训练来建模量化不确定性，并引入CTC损失作为语义正则化，确保离散令牌富含语言学信息。相较于传统两阶段或仅依赖回归损失的方法，SiTok通过扩散模型实现了更鲁棒的重建，并通过语义监督直接塑造了潜在空间。实验在1.6B参数规模和200万小时数据��进行，在0.2 kbps的极低比特率下（12.5 Hz帧率），SiTok在语音重建（WER 3.34-4.06）、多项下游理解任务（ASR WER 4.95， ER 63.5%）以及零样本TTS任务上均优于强基线，验证了其统一表示的有效性。其实际意义在于为语音大模型提供了一种高质量、高效率的统一语音接口。主要局限在于，尽管表现优异，其重建和理解能力仍不及连续特征表示，且扩散解码器对流式生成构成挑战。

---

### 🥈 [SpeechJudge: Towards Human-Level Judgment for Speech Naturalness](/audio-paper-digest-blog/posts/2026-05-03-speechjudge-towards-human-level-judgment-for)

🔥 **8.5/10** | 前10% | #语音合成 | #强化学习 | #模型评估 #数据集

👥 **作者与机构**

- 第一作者：Xueyao Zhang（香港中文大学（深圳））
- 通讯作者：Zhizheng Wu（香港中文大学（深圳）、深圳湾区研究院、澳门城市大学、Amphion Technology Co., Ltd.）
- 作者列表：Xueyao Zhang（香港中文大学（深圳））、Chaoren Wang（香港中文大学（深圳））、Huan Liao（香港中文大学（深圳））、Ziniu Li（香港中文大学（深圳））、Yuancheng Wang（香港中文大学（深圳））、Li Wang（香港中文大学（深圳））、Dongya Jia（字节跳动 Seed）、Yuanzhe Chen（字节跳动 Seed）、Xiulin Li（DataBaker Technology）、Zhuo Chen（字节跳动 Seed）、Zhizheng Wu（香港中文大学（深圳）、深圳湾区研究院、澳门城市大学、Amphion Technology Co., Ltd.）

💡 **毒舌点评**

论文亮点在于首次构建了一个专注于语音自然度的大规模人类偏好数据集，并提出了一个能输出可解释推理过程的生成式奖励模型（GRM），超越了传统Bradley-Terry模型和当前最强的闭源AudioLLM。但短板也很明显：数据集标注者以中文母语者为主，导致模型在英语和中英混合数据上的判断能力偏弱；且评估基准完全基于合成语音，其泛化能力到真实人声或商业TTS克隆场景尚未得到充分验证。

🔗 **开源详情**

- 代码：论文明确承诺将在GitHub（https://github.com/AmphionTeam/SpeechJudge）发布所有资源，包括模型训练和下游实验的源代码。
- 模型权重：承诺发布SpeechJudge-GRM的训练模型检查点。
- 数据集：承诺发布SpeechJudge-Data（语料库）和SpeechJudge-Eval（基准）。
- Demo：提供了在线音频样例展示网站（https://speechjudge.github.io/）。
- 复现材料：论文正文和附录提供了详细的数据构建流程、标注指南、评估协议、训练超参数（学习率、优化器、LoRA设置等）和实验设置，复现信息充分。
- 论文中引用的开源项目：依赖或使用了Qwen2.5-Omni-7B（基座模型）、Gemini-2.5-Flash（教师模型）、ms-swift（RL训练工具包）、LoRA、多种TTS模型（CosyVoice2, F5-TTS等）、评估工具（DNSMOS, UTMOS, WER计算工具等）和音频处理库。

📌 **核心摘要**

1.  解决什么问题：语音合成领域缺乏大规模、专注于“自然度”这一核心主观指标的人类偏好数据集，导致现有评估指标和模型难以准确对齐人类感知。
2.  方法核心：提出“SpeechJudge”套件，包括：(1) SpeechJudge-Data：一个包含99K语音对的人类反馈语料库，由多位标注者对可懂度和自然度进行评估。(2) SpeechJudge-Eval：一个包含1000个高一致性样本的基准测试集，用于评估自然度判断能力。(3) SpeechJudge-GRM：基于Qwen2.5-Omni-7B的生成式奖励模型，通过监督微调（SFT）和强化学习（RL）两阶段训练，以人类偏好为奖励信号。
3.  新在哪里：(1) 首次构建了大规模、多模型、多语言、多风格的语音自然度偏好数据集。(2) 建立了首个专注于语音自然度判断的公开基准，揭示了当前最强AudioLLM（Gemini-2.5-Flash）的不足（<70%准确率）。(3) 提出了结合思维链（CoT）推理和强化学习的GRM，其性能（77.2%准确率）显著优于传统BTRM（72.7%）和零样本AudioLLM。
4.  主要实验结果：
    *   在SpeechJudge-Eval基准上，SpeechJudge-GRM（SFT+RL）的准确率达到77.2%，使用10次推理时投票（Voting@10）后提升至79.4%，优于最佳基线Gemini-2.5-Flash（69.1%）。
    *   在用于高质量样本选择的任务中，由GRM筛选的最佳语音比随机选择的语音在人类听感对比中获胜率更高（43.0% 胜 vs. 32.5% 负）。
    *   将SpeechJudge-GRM作为奖励函数用于零样本TTS模型（Qwen2.5-0.5B-TTS）的后训练，能有效提升其生成语音的自然度（图6）。
5.  实际意义：为语音生成模型与人类偏好对齐提供了关键的基础设施（数据、基准、奖励模型），可直接用于改进TTS模型的后训练（如DPO、RLHF），并能作为自动化评估工具筛选高质量语音。
6.  主要局限性：数据集和标注者偏向中文及中文-英文双语者，模型在纯英文和混合语言上的表现相对较弱；数据局限于合成语音，未包含真实对话语音；奖励模型的思维链能力源自闭源教师模型（Gemini），可能存在偏差。

---

### 🥉 [Toward Complex-Valued Neural Networks for Waveform Generation](/audio-paper-digest-blog/posts/2026-05-03-toward-complex-valued-neural-networks-for)

🔥 **8.5/10** | 前25% | #语音合成 | #生成模型 | #声码器 #复数值网络

👥 **作者与机构**

- 第一作者：Hyung-Seok Oh (高丽大学人工智能系)
- 通讯作者：Seong-Whan Lee (高丽大学人工智能系)
- 作者列表：Hyung-Seok Oh, Deok-Hyeon Cho, Seung-Bin Kim, Seong-Whan Lee (均隶属于高丽大学人工智能系 Department of Artificial Intelligence, Korea University)

💡 **毒舌点评**

ComVo 的核心亮点在于将复数值神经网络（CVNN）的优势——自然建模实部与虚部的耦合——系统性且完整地落地到iSTFT声码器的生成器和判别器中，形成了一个理论上自洽的复杂域对抗学习框架，这比仅仅把频谱当双通道实值输入要高级得多。然而，其计算复杂度的“优化”更多是来自减少自动微分计算图的冗余节点（图优化），而非算子本身的硬件加速，这导致其训练时内存占用（101MB vs ~51MB）和推理延迟仍显著高于实值基线，实用部署中“效率提升”的说法需要打个折扣。

🔗 **开源详情**

- 代码：提供代码仓库链接：https://hs-oh-prml.github.io/ComVo/
- 模型权重：论文中未提及是否公开预训练模型权重。需要根据提供的代码自行训练。
- 数据集：使用公开的LibriTTS语料库进行训练和评估。论文中未提及数据集是否随代码提供。
- Demo：提供在线演示页面：https://hs-oh-prml.github.io/ComVo/
- 复现材料：论文附录提供了极其详尽的训练细节，包括所有超参数、损失函数定义、评估指标的实现来源、硬件配置等，复现指导性强。
- 论文中引用的开源项目：
    - 基线模型实现：iSTFTNet, HiFi-GAN, BigVGAN, Vocos, APNet, APNet2, FreeV的官方或公开代码库。
    - 评估工具：UTMOS, auraloss (MR-STFT), PESQ, cargan (Periodicity & V/UV F1)的代码库。
    - 辅助库：complextorch (用于实现高斯乘法技巧作为对比)。
- 论文中未提及：开源计划的具体时间表、模型权重的发布平台。

📌 **核心摘要**

1.  问题：现有的基于逆短时傅里叶变换（iSTFT）的神经声码器通常使用实值神经网络（RVNN）将复数频谱的实部和虚部作为独立通道处理，这破坏了二者之间的固有代数结构，限制了模型对相位和幅度的联合建模能力。
2.  方法核心：提出ComVo，一个完全在复数域操作的神经声码器。其生成器和判别器均采用CVNN层，直接处理复数频谱系数。引入相位量化层作为归纳偏置来稳定训练，并设计分块矩阵计算方案以减少冗余操作，提高训练效率。
3.  创新点：ComVo是首个在生成器和判别器中都采用CVNN的iSTFT声码器，建立了复杂域的对抗训练框架。相位量化层和分块矩阵方案是针对复数域的特定优化。该方法超越了简单地将复数视为双通道实值输入的做法。
4.  主要结果：在LibriTTS和MUSDB18-HQ数据集上，ComVo在多个客观指标（如MR-STFT、PESQ、UTMOS）上优于HiFi-GAN、iSTFTNet、BigVGAN和Vocos等强基线。主观评估（MOS/CMOS）结果与最强基线相当或略优。消融实验表明，复数值生成器和判别器均能带来性能提升，且相位量化（Nq=128）在感知质量与重建精度间取得了最佳平衡。分块矩阵方案将训练时间减少了约25%。
5.  实际意义：证明了复数值建模能有效提升iSTFT声码器的合成质量，为处理具有复数结构的音频数据提供了新的范式。分块矩阵优化为CVNN的高效实现提供了实用方案。
6.  主要局限性：计算开销较大，内存占用约为实值模型的两倍，推理速度慢于最优的实值iSTFT声码器（如Vocos）。当前实现依赖于split-style设计（如分离的铰链损失、split GELU），可能不是最优的复数非线性处理。多GPU训练下的性能和稳定性有待进一步优化。

---

### 4. [Gogo: Group-wise granularity-ordered codec for stable and efficient speech generation](/audio-paper-digest-blog/posts/2026-05-03-gogo-group-wise-granularity-ordered-codec-for)

🔥 **8.0/10** | 前25% | #语音合成 | #流匹配 | #语音大模型 #零样本

👥 **作者与机构**

- 第一作者：Weidong Chen（香港中文大学计算机系）
- 通讯作者：Xixin Wu（香港中文大学计算机系）
- 作者列表：Weidong Chen（香港中文大学计算机系）、Helen M. Meng（香港中文大学计算机系）、Xixin Wu（香港中文大学计算机系）

💡 **毒舌点评**

论文巧妙地将编解码器的“分层量化”与大语言模型的“两阶段生成”理念结合，为语音生成任务提供了一个自洽且工程意义明确的框架；但作为一篇顶会论文，其核心架构（分组量化、两阶段生成）的原创性虽有，却非颠覆性，且在最关键、最能推动社区复现的代码和模型开源方面毫无作为，稍显遗憾。

🔗 **开源详情**

- 代码：论文中未提及代码仓库链接。
- 模型权重：未提及公开模型权重。
- 数据集：使用了公开的Emilia、LibriTTS、Seed-TTS等数据集，但论文未提供其自有的数据处理脚本或额外数据。
- Demo：论文提供了在线演示样例页面链接 (https://happycolor.github.io/gogo)。
- 复现材料：论文在附录中提供了极其详细的模型配置、训练超参数、损失函数公式、评估指标定义以及消融实验设置，为复现提供了充分的文本指导。
- 论文中引用的开源项目：Vocos (声码器)、LLaMA (GogoSpeech基础模型)、Llama-3.2-1B-Instruct (基座)。
- 总结：论文在“复现指南”层面信息充分，但在最核心的“资源开放”层面（代码、权重）完全缺失，这在顶会论文中是一个明显的短板。

📌 **核心摘要**

1. 要解决什么问题：现有语音编解码器在支持语音大语言模型时，面临一个根本矛盾：既需要高层语义信息（用于稳定的自回归建模），也需要低层声学细节（用于保真合成）。传统逐帧量化方式因局部性偏差，难以有效学习高层信息，且固定码率无法适应语音信号非均匀的信息密度。
2. 方法核心是什么：提出Gogo编解码器，采用“分组-分层”的量化方式：将语音分组，每组量化成多个从粗到细有序的token。粗token编码高层语义，细token恢复声学细节。基于此，构建GogoSpeech两阶段语音生成模型：第一阶段以极低token率生成粗粒度的“语音骨架”；第二阶段逐步填充细节。此外，设计了GRPO训练的token分配器，根据语音组的复杂度自适应分配第二阶段的token预算，提升效率。
3. 与已有方法相比新在哪里：
    - 编解码器设计：突破了传统逐帧量化范式，采用分组量化并强制token有序（粗→细），更好地满足了下游语言模型的需求。
    - 生成框架：明确的两阶段设计，先稳定生成骨架（低token率），再高效填充细节（高token率），与Gogo的token结构完美契合。
    - 自适应机制：将强化学习（GRPO）引入token分配，实现了端到端的、质量与效率权衡的动态分配。
4. 主要实验结果如何：
    - 重建性能：在LibriTTS测试集上，Gogo在约47Hz的token率下，在UTMOS、DNSMOS等主观指标上达到甚至超越SOTA，客观指标如SIM也极具竞争力。
    - 生成性能：在零样本TTS任务（Seed-TTS测试集）中，GogoSpeech在SMOS和CMOS主观评估中获得最佳分数，尤其在长语音生成稳定性上表现突出。
    - 效率提升：GRPO训练的token分配器可将平均token率从47Hz降至约36Hz，同时性能仅有微小下降。
    关键对比如下（表3摘选）：

| 模型 | SIM↑ | WER↓ | SMOS↑ | CMOS↑ | RTF |
| :--- | :--- | :--- | :--- | :--- | :--- |
| Ground Truth | 0.734 | 2.143 | 4.752 | 0.000 | - |
| CosyVoice 2 | 0.654 | 2.380 | 4.331 | +1.638 | 0.549 |
| FireRedTTS-1S | 0.660 | 2.170 | 4.247 | +1.634 | 0.506 |
| GogoSpeech (47 Hz) | 0.667 | 2.394 | 4.381 | +1.832 | 0.535 |
| w/ Allocator (36 Hz) | 0.662 | 2.469 | 4.253 | +1.587 | 0.455 |

    注：SIM为说话人相似度，WER为字错率，SMOS为相似性平均意见分，CMOS为比较平均意见分，RTF为实时因子（越低越快）。
5. 实际意义是什么：该工作为构建高效、稳定的端到端语音生成系统提供了一个新的设计范式。其自适应分配机制对实时交互、流式传输等资源受限场景有重要价值。
6. 主要局限性是什么：论文指出，1) flow-matching解码器中的placeholder token有时会引入伪影；2) 47Hz的token率仍高于一些低比特率编解码器（如25Hz）；3) 模型基于Llama-3.2-1B，其向更大模型的扩展性有待验证。

---

### 5. [MambaVoiceCloning: Efficient and Expressive Text-to-Speech via State-Space Modeling and Diffusion Control](/audio-paper-digest-blog/posts/2026-05-03-mambavoicecloning-efficient-and-expressive-text)

✅ **7.5/10** | 前25% | #语音合成 | #扩散模型 | #状态空间模型 #流式处理

👥 **作者与机构**

- 第一作者：Sahil Kumar（耶什瓦大学数学博士项目）
- 通讯作者：Youshan Zhang（滁州学院人工智能学院）
- 作者列表：Sahil Kumar（耶什瓦大学数学博士项目）、Namrataben Patel（耶什瓦大学数学博士项目）、Honggang Wang（耶什瓦大学计算机科学与工程系）、Youshan Zhang（滁州学院人工智能学院）

💡 **毒舌点评**

本文最漂亮的一步是把TTS条件路径里的注意力和循环层全部换成线性时间的Mamba，并用一个训练时的轻量级对齐器在推理时扔掉，实现了真正的SSM-only架构。不过，论文也坦率承认扩散解码器仍是主要延迟瓶颈，且绝对性能提升幅度不大，感觉是在为一个更高效但非更优的未来架构铺路。

🔗 **开源详情**

- 代码：提供代码仓库链接：https://github.com/sahilkumar15/MVC。
- 模型权重：论文中未提及是否公开预训练模型权重。
- 数据集：使用公开数据集（LJSpeech, LibriTTS, VCTK, CSS10, Gutenberg公共领域有声书），未提供自定义数据集。
- Demo：论文中未提及在线演示。
- 复现材料：提供了详细的训练算法（Algorithm 1）、优化策略、超参数设置、匹配的基线配置（表14）以及消融实验方案，复现信息非常充分。
- 引用的开源项目：`phonemizer`（音素化工具）、`Phonemizer`。解码器和声码器复用了StyleTTS2的组件。

📌 **核心摘要**

1. 解决问题：传统基于扩散的文本到语音系统在推理时的条件路径（文本、节奏、韵律）依赖计算和内存开销较大的注意力机制或循环层，限制了部署效率、内存占用和流式处理稳定性。
2. 方法核心：提出MambaVoiceCloning，将推理时的所有条件模块替换为选择性状态空间模型。包括：(1) 门控双向Mamba文本编码器；(2) 由训练时轻量级注意力教师监督、推理时丢弃的时间Bi-Mamba；(3) 带有AdaLN调制的表现力Mamba。解码器部分（StyleTTS2扩散模型与声码器）保持不变。
3. 与已有方法区别：与之前的Mamba-TTS混合架构不同，本文首次实现了推理时完全SSM-only的条件路径，并引入了门控双向融合与AdaLN调制，以替代简单的拼接融合，提升了长程韵律稳定性。
4. 主要实验结果：在LJSpeech/LibriTTS上训练，在VCTK/CSS10/Gutenberg上评估。相比StyleTTS2，MVC在MOS/CMOS上取得稳健但适度的提升，编码器参数减少至21M，吞吐量提升1.6倍。长文本（2-6分钟）合成质量保持稳定。关键数据见下表：

| 模型 | MOS-N (↑) | MOS-S (↑) | F0 RMSE (Hz, ↓) | MCD (↓) | WER (↓) | PESQ (↑) | RTF (↓) |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| Ground Truth | 4.60 | 4.35 | - | - | - | - | - |
| VITS | 3.69 | 3.54 | 0.667 | 4.97 | 7.23% | 3.64 | 0.0211 |
| StyleTTS2 | 4.15 | 4.03 | 0.651 | 4.93 | 6.50% | 3.79 | 0.0174 |
| MVC (ours) | 4.22 | 4.07 | 0.653 | 4.91 | 6.52% | 3.85 | 0.0169 |
（表格数据来自论文表1、表4）

5. 实际意义：为TTS系统的高效、低内存、流式部署提供了一种纯SSM架构解决方案，尤其适用于边缘设备和实时生成场景。
6. 主要局限性：(1) 合成质量提升幅度有限；(2) 扩散解码器仍是主要延迟瓶颈；(3) 仅在英语数据上训练，缺乏对精细情感控制的支持。

---

### 6. [FlexiVoice: Enabling Flexible Style Control in Zero-Shot TTS with Natural Language Instructions](/audio-paper-digest-blog/posts/2026-05-03-flexivoice-enabling-flexible-style-control-in)

✅ **7.5/10** | 前25% | #语音合成 | #强化学习 | #语音大模型 #多语言

👥 **作者与机构**

- 第一作者：Dekun Chen（香港中文大学（深圳））
- 通讯作者：未说明（论文未明确标注）
- 作者列表：Dekun Chen（香港中文大学（深圳））、Xueyao Zhang（香港中文大学（深圳））、Yuancheng Wang（香港中文大学（深圳））、Kenan Dai（华为技术有限公司）、Li Ma（华为技术有限公司）、Zhizheng Wu（香港中文大学（深圳）、深圳湾区研究院、澳门城市大学、Amphion Technology Co., Ltd.）

💡 **毒舌点评**

本文最大的亮点在于直面了零样本多模态TTS中的“三角冲突”（风格、音色、内容），并通过一个设计精巧的渐进式课程学习（PPT）框架从数据构建到训练策略系统性地解决这个问题，效果显著。短板在于其复杂指令遵循的奖励模型（Kimi-Audio-7B）并非最权威的（如Gemini），且最终模型在跨语言性能上仍与闭源顶尖系统（如Gemini-flash）存在差距，距离“终极方案”尚有改进空间。

🔗 **开源详情**

- 代码：论文明确表示将开源训练和推理代码，但当前未提供具体仓库链接。
- 模型权重：论文明确表示将开源模型检查点（checkpoints）。
- 数据集：论文明确表示将开源构建的FlexiVoice-Instruct数据集。
- Demo：提供了在线演示页面链接（https://flexi-voice.github.io/）。
- 复现材料：提供了详细的可复现性声明，包括硬件配置（8xA800）、训练时间（各阶段）、超参数（学习率、β、组大小等）、数据构建流程等。
- 引用的开源项目：Phi-3.5-mini-instruct (LLM核心), DualCodec (语音分词器), Vocos (声码器), Emotion2vec-Large (情感识别奖励模型), CAM++ (说话人验证), Kimi-Audio-7B-Instruct (复杂指令奖励模型), DeepSeek-V3 (数据标注)。

📌 **核心摘要**

这篇论文旨在解决零样本文本到语音（TTS）系统中，如何利用自然语言指令灵活控制说话风格（如情绪），同时保持参考语音音色不变的难题，即“风格-音色-内容冲突”问题。其方法核心是构建一个基于大语言模型（LLM）核心的TTS系统，并提出了一个创新的渐进式后训练（PPT）框架。该框架分三阶段：1）使用多模态DPO进行基础对齐；2）使用多目标GRPO和冲突场景数据，显式解耦风格与音色/内容；3）使用音频语言模型（ALM）作为奖励，通过指令GRPO泛化到复杂指令。此外，论文利用LLM构建了一个4316小时的高质量指令-语音数据集FlexiVoice-Instruct。实验表明，FlexiVoice在多模态控制任务（中英文情绪TTS）上，其指令遵循准确率（ACC-I）相比基线大幅提升（如中文TR-hard任务从38.0%提升至75.8%），同时保持了高音色相似度（SV>98%）。在复杂指令基准InstructTTSEval上，其平均准确率（英文79.3%，中文70.8%）超越所有开源基线，接近闭源商业模型。该工作的实际意义在于提供了一个可灵活组合风格与音色的TTS框架，并完全开源以促进研究。主要局限性是其复杂指令性能仍落后于最强的闭源系统，且评估集中于情绪和一些预设属性，对更开放、细粒度风格的泛化能力有待进一步验证。

---

### 7. [VibeVoice: Expressive Podcast Generation with Next-Token Diffusion](/audio-paper-digest-blog/posts/2026-05-03-vibevoice-expressive-podcast-generation-with-next)

✅ **7.5/10** | 前25% | #语音合成 | #语音大模型 | #扩散模型 #端到端

👥 **作者与机构**

- 第一作者：未说明（论文标注为“Core contributors”，未明确排序）
- 通讯作者：Furu Wei (fuwei@microsoft.com)（微软研究院）
- 作者列表：Zhiliang Peng, Jianwei Yu, Wenhui Wang, Yaoyao Chang, Yutao Sun, Li Dong, Yi Zhu, Weijiang Xu, Hangbo Bao, Zehua Wang, Shaohan Huang, Yan Xia, Furu Wei（以上作者均来自微软研究院 Microsoft Research）

💡 **毒舌点评**

亮点：论文系统工程能力很强，将超低帧率连续分词器、LLM与扩散头进行有效集成，实现了在长序列（90分钟）和多说话人（4人）场景下的稳定高质量播客生成，这是当前多数开源模型难以做到的。短板：核心的模型架构创新（LLM+Diffusion）在先前工作（如LatentLM）中已有体现，本文更侧重于在播客生成这一垂直领域的工程化实现和数据流程构建；其构建的“VIBEVOICE-Eval”评估集和主观评估细节虽详尽，但缺乏更广泛、公认的基准测试支持。

🔗 **开源详情**

- 代码：提供GitHub仓库链接：https://github.com/microsoft/VibeVoice。
- 模型权重：提供检查点链接（在代码仓库中）。
- 数据集：训练数据为“内部伪标签播客音频”，未公开。评估数据集VIBEVOICE-Eval也未提及公开。
- Demo：未提及。
- 复现材料：论文提供了详细的训练超参数（附录F）、模型规格、训练时长与硬件、推理时间分析（附录E），以及数据处理流程（附录A）和评估集分布（附录G）。复现指南较为完善。
- 引用的开源项目：Silero VAD, Whisper-large-v3-turbo, WeSpeaker, Qwen-Audio（用于WER计算）, seed-tts-eval（用于SIM-O计算）。详见附录A表4。

📌 **核心摘要**

1. 问题：传统TTS系统难以扩展到生成长篇幅（如播客）、多说话人、富有表现力的自然对话音频，面临说话人一致性、自然轮换和表现力保持等挑战。
2. 方法核心：提出VIBEVOICE框架，采用两个独立的超低帧率（7.5 Hz）连续语音分词器（声学分词器保真度高，语义分词器基于ASR任务）提取混合特征，并通过一个以LLM（Qwen2.5）为核心、结合轻量级扩散头的端到端生成模型，直接在下一个声学token的扩散中进行合成。
3. 与已有方法相比新在哪里：不同于传统拼接方法，VIBEVOICE是端到端生成；相比于同方向工作的MoonCast，它在生成长度（90分钟 vs 10分钟）、说话人数量（4人 vs 2人）和鲁棒性上均有显著提升；其连续、低帧率分词器设计相比离散或高帧率方法，极大提升了处理长序列的效率。
4. 主要实验结果：
   - 主观评估（8个样本，24名标注员）：VIBEVOICE-7B在“真实感”、“丰富度”和“偏好”三个维度均取得最高分（平均3.76），超越Google Gemini 2.5 Pro TTS（3.66）和ElevenLabs v3 alpha（3.40）。
   - 客观评估（自建VIBEVOICE-Eval，108样本）：
     ```
     | 模型 | 整体WER-W↓ | 整体SIM-O↑ |
     | :--- | :--- | :--- |
     | Cosyvoice2 (拼接) | 4.27 | 0.73 |
     | MoonCast | 10.4‡ | 0.55‡ |
     | VIBEVOICE-1.5B | 1.22 | 0.60 |
     | VIBEVOICE-7B | 0.66 | 0.75 |
     ```
   注：‡表示MoonCast在长音频/多说话人场景下频繁崩溃，仅统计成功案例。
   - 说话人相似度(SIM-O)：VIBEVOICE-7B达到0.692，优于Seed-TTS的0.796吗？不，论文显示Seed-TTS为0.796（SEED测试集），但VIBEVOICE-7B在自家评估集SIM-O为0.75，在SEED测试集为0.689（见附录C表6），仍具竞争力。
5. 实际意义：为自动化生成高质量、个性化的长篇播客、有声读物和对话内容提供了可行的技术方案，降低了内容创作门槛。
6. 主要局限性：
   - 训练依赖于内部未公开的伪标签播客数据集，数据获取和质量过滤流程是关键但未完全公开。
   - 论文虽声称超越商业模型，但对比的是其特定版本和评估集，商业模型可能持续迭代。
   - 主观评估样本规模有限（8个），且长音频评估耗时巨大，评估普适性有待验证。
   - 扩散推理步数与说话人相似度的“反直觉”关系（步数越多，SIM-O可能越低）提示模型可能过度净化了自然环境声，这可能是其训练数据特征导致的偏差。

---

### 8. [From Natural Alignment to Conditional Controllability in Multimodal Dialogue](/audio-paper-digest-blog/posts/2026-05-03-from-natural-alignment-to-conditional)

✅ **7.5/10** | 前25% | #语音合成 | #数据集 | #多模态模型 #基准测试

👥 **作者与机构**

- 第一作者：Zeyu Jin (清华大学计算机科学与技术系), Songtao Zhou (清华大学计算机科学与技术系) - 论文标注二人贡献均等。
- 通讯作者：Xiaoyu Qin (清华大学计算机科学与技术系), Jia Jia (清华大学计算机科学与技术系， BNRist)
- 作者列表：
  - Zeyu Jin (清华大学计算机科学与技术系)
  - Songtao Zhou (清华大学计算机科学与技术系)
  - Haoyu Wang (清华大学计算机科学与技术系)
  - Minghao Tian (Rice University)
  - Kaifeng Yun (清华大学深圳国际研究生院)
  - Zhuo Chen (字节跳动)
  - Xiaoyu Qin (清华大学计算机科学与技术系)
  - Jia Jia (清华大学计算机科学与技术系， BNRist)

💡 **毒舌点评**

这篇论文最大的亮点是“造轮子造得用心”：它没有去卷某个具体的生成模型，而是针对“可控多模态对话”这个任务，从头搭建了第一个像样的数据集（MM-DIA）和评测标准（MM-DIA-BENCH），填补了基础设施的空白。但短板也同样明显：在“怎么生成”这个更核心的算法层面，论文并没有提出新颖的模型架构，本质上只是证明了“在好的数据上微调现有模型有点用”，创新高度打了折扣。

🔗 **开源详情**

- 代码：论文在附录和引言中提及了GitHub仓库链接（`https://github.com/jessyjinzy/MM-Dia`），并承诺实验代码和数据流水线将在论文被接受后公开。当前状态为“论文中提及了计划，但具体链接有效性未知”。
- 模型权重：未提及公开任何微调后的模型权重。
- 数据集：论文核心贡献之一。MM-DIA数据集包含详细的标注（如文本、情感三元组、描述、说话人ID、关键帧等），但不包含原始的视频或音频文件。研究人员需要根据提供的时间戳和标识符自行从原始影视作品中获取相应片段。基准集MM-DIA-BENCH同理。
- Demo：论文提供了演示页面链接（`https://mmdiaiclr26.github.io/mmdiaiclr26/`），其中可能包含音频样本等示例。
- 复现材料：论文在附录中提供了部分技术细节，如字幕校准方法、缓冲机制的伪代码（算法1）、消融实验设置。但缺少关键的模型微调超参数、训练脚本、环境配置和完整的检查点说明。
- 论文中引用的开源项目：提到了依赖的工具和模型，包括：
  - 语音生成模型：Higgs-Audio-V2 (Boson AI), Dia-1.6B (Nari Labs)
  - 人脸工具包：Insightface
  - 视觉语言模型：Gemini 2.5-pro, GPT-5, Qwen2.5-VL-7B-Instruct
  - 视频生成基线：FLOAT, MultiTalk, Sonic, Wan-2.2, HunyuanVideo
- 复现计划：论文明确表示“Our experimental code and data curation pipeline will be made publicly available upon acceptance of the paper.”，即计划在论文被接收后开源。

📌 **核心摘要**

1.  问题：当前多模态对话生成研究侧重于单模态（语音或视频）的真实性，忽视了跨模态交互风格（如情感、关系）的可控性与一致性，主要受限于缺乏高质量、细粒度标注的多模态对话数据集和系统性评测基准。
2.  方法核心：本文核心工作是构建数据集和定义任务。作者提出了一套从电影/电视剧中自动提取、标注多模态对话的流水线，构建了首个大规模表达能力数据集MM-DIA（360+小时， 54,700段对话）。同时，提出“情感三元组”与“自由描述”两种表达能力建模范式，并形式化定义了多模态对话生成（MDG）任务及其三个子任务（风格可控语音合成、视觉条件语音合成、语音驱动视频生成）。最后，构建了高表达性的评测基准MM-DIA-BENCH。
3.  创新点：与已有工作相比，新在：a) 首个专注于“对话表达能力”的大型多模态对话数据集；b) 系统性的对话表达能力标注范式；c) 首次将“可控多模态对话生成”形式化为一个独立的、包含显式/隐式控制的研究任务。
4.  主要实验结果：实验表明，在MM-DIA上微调可显著提升模型的可控性。例如，Higgs-Audio-V2模型微调后，在风格可控对话语音合成任务上，词错率(WER)从31.25%降至4.45%，指令遵循分数大幅提升（表4）。然而，MM-DIA-BENCH评测揭示，现有模型在隐式跨模态控制任务上表现不佳，难以维持音频与视觉风格的一致性（表5， 表6）。
5.  实际意义：为构建有情感、懂交互的下一代对话AI（如虚拟人、数字演员）提供了关键的数据基础和评测标尺，指明了当前技术的短板所在。
6.  主要局限性：a) 论文的核心贡献在于数据集和任务定义，在生成模型架构上缺乏创新；b) 评估体系过度依赖Gemini-as-Judge等主观指标；c) 所定义的“多模态对话生成”任务对计算资源要求极高，目前尚无端到端的解决方案。

---

### 9. [Hierarchical Semantic-Acoustic Modeling via Semi-Discrete Residual Representations for Expressive End-to-End Speech Synthesis](/audio-paper-digest-blog/posts/2026-05-03-hierarchical-semantic-acoustic-modeling-via-semi)

✅ **7.5/10** | 前25% | #语音合成 | #语音大模型 | #自回归模型 #端到端

👥 **作者与机构**

- 第一作者：Yixuan Zhou（清华大学深圳国际研究生院）
- 通讯作者：Zhiyong Wu（清华大学深圳国际研究生院）
- 作者列表：Yixuan Zhou（清华大学深圳国际研究生院）、Guoyang Zeng（ModelBest Inc）、Xin Liu（ModelBest Inc）、Xiang Li（清华大学深圳国际研究生院）、Renjie Yu（清华大学深圳国际研究生院）、Ziyang Wang（ModelBest Inc）、Runchuan Ye（清华大学深圳国际研究生院）、Weiyue Sun（ModelBest Inc）、Jiancheng Gui（ModelBest Inc）、Kehan Li（清华大学深圳国际研究生院）、Zhiyong Wu（清华大学深圳国际研究生院）、Zhiyuan Liu（清华大学计算机科学与技术系）

💡 **毒舌点评**

论文的架构设计相当精巧，通过将FSQ瓶颈作为内部正则化器，成功在单个端到端框架内实现了语义与声学的隐式分离，避免了对外部离散tokenizer的依赖，这是一个显著的工程和设计亮点。然而，其宣称的“SOTA”主要建立在“开源系统”限定词下，且最佳性能严重依赖其内部千万小时级别的独占数据，这使得其结论的普适性和在学术界广泛复现的可能性打上折扣。

🔗 **开源详情**

- 代码：论文中提供了推理代码链接：`codes.zip`。作者承诺将发布完整代码（“We will release code and models to support future research.”）。
- 模型权重：论文中提及了模型名称VoxCPM-0.5B，并承诺开源模型权重。论文中提及的Demo页面为：https://voxcpm.github.io/VoxCPM-demopage/。
- 数据集：最强性能依赖内部未公开的超大规模双语数据集（>1M小时）。消融研究使用的Emilia数据集（95K小时）是公开的。
- Demo：提供了在线演示页面：https://voxcpm.github.io/VoxCPM-demopage/。
- 复现材料：论文附录中提供了详尽的模型架构细节（表5）、训练配置（表6）、评估指标问卷（H部分）、以及所有消融实验的详细设置。这些信息对于在Emilia数据集上复现其研究版本（VoxCPM-Emilia）是充分的。
- 论文中引用的开源项目/工具：论文依赖或对比的开源项目包括：MiniCPM-4（文本LLM骨干）， Megatron（训练框架）， 以及多个作为基线的开源TTS系统：CosyVoice系列， MaskGCT， F5-TTS， SparkTTS， FireRedTTS系列， IndexTTS2， HiggsAudio-v2， OpenAudio-s1-mini等。

📌 **核心摘要**

1.  问题：文本转语音（TTS）系统面临“表达性”与“稳定性”的根本权衡。基于离散token的方法稳定但损失声学细节；基于连续表示的方法保留细节但易因任务纠缠导致长序列误差累积。现有多阶段流水线则割裂了语义与声学建模。
2.  方法核心：提出一个端到端的层次化语义-声学建模框架（VoxCPM）。其核心是引入一个可微分的有限标量量化（FSQ）瓶颈，该瓶颈作为内部正则化器，自然诱导模型进行功能分离：文本-语义语言模型（TSLM）负责生成稳定的语义韵律规划，残差声学模型（RALM）负责恢复量化丢失的细粒度声学细节。两者输出相加形成层次化表示，指导一个局部扩散Transformer解码器（LocDiT）生成高保真语音隐向量。整个模型在流匹配目标下进行端到端训练。
3.  创新点：与已有方法相比，该工作首次将FSQ瓶颈作为内部归纳偏置而非预测目标，用于在连续数据流中实现隐式的语义-声学分离；实现了无需外部离散tokenizer的完全端到端训练；并通过残差连接将“规划”与“渲染”模块有机统一在一个自回归框架中。
4.  主要实验结果：论文在超过100万小时的中英文数据上训练了0.5B参数的VoxCPM。在SEED-TTS-EVAL基准测试中，它在开源系统中取得了最佳性能：英语WER为1.85%，中文CER为0.93%，英语说话人相似度（SIM）为72.9%，中文SIM为77.2%。在更具挑战性的CV3-EVAL基准上，其在中文CER（3.40%）和英文WER（4.04%）上也表现优异。消融研究证实，去掉FSQ瓶颈或RALM模块会导致性能，尤其是在困难样本上的性能急剧下降。
5.  实际意义：该工作为构建高表现力、高稳定性的端到端语音合成系统提供了一种新颖且有效的架构范式。它验证了通过结构化的内部表示学习（而非依赖外部离散化）来平衡生成质量与长程连贯性的可行性，对开发更自然、可控的TTS系统有重要参考价值。
6.  主要局限性：模型的最佳性能高度依赖其专有的超大规模训练数据（>100万小时），这在学术界难以复现。此外，虽然声称端到端，但其训练仍依赖于预训练的音频VAE和文本LLM骨干网络（MiniCPM-4）。评估指标以客观度量为主，主观MOS评估中其自然度得分在某些场景下并非最高。

---

