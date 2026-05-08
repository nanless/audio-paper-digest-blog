---
title: "X-Voice: Enabling Everyone to Speak 30 Languages via Zero-Shot Cross-Lingual Voice Cloning"
date: 2026-05-08
draft: false
tags: [语音克隆, 流匹配, 多语言, 零样本, 高效推理]
categories: [论文速递]
description: "语音克隆 | 8.0/10"
hiddenInHomeList: true
---

# 📄 X-Voice: Enabling Everyone to Speak 30 Languages via Zero-Shot Cross-Lingual Voice Cloning

#语音克隆 #流匹配 #多语言 #零样本 #高效推理

🔥 **8.0/10** | 前25% | #语音克隆 | #流匹配 | #多语言 #零样本 | [arxiv](https://arxiv.org/abs/2605.05611v1)

学术质量 6.0/7 | 选题价值 1.5/2 | 复现加成 0.5 | 置信度 高


### 👥 作者与机构

- 第一作者：Rixi Xu（上海交通大学，MoE Key Lab of Artificial Intelligence, X-LANCE Lab）
- 通讯作者：Xie Chen（上海交通大学，MoE Key Lab of Artificial Intelligence, X-LANCE Lab; 上海创新研究院）
- 作者列表：
    - Rixi Xu（上海交通大学，MoE Key Lab of Artificial Intelligence, X-LANCE Lab）
    - Qingyu Liu（上海交通大学，MoE Key Lab of Artificial Intelligence, X-LANCE Lab; 约翰霍普金斯大学，Center for Language and Speech Processing）
    - Haitao Li（浙江大学; 上海创新研究院）
    - Yushen Chen（上海交通大学，MoE Key Lab of Artificial Intelligence, X-LANCE Lab; 上海创新研究院）
    - Zhikang Niu（上海交通大学，MoE Key Lab of Artificial Intelligence, X-LANCE Lab; 上海创新研究院）
    - Yunting Yang（吉利汽车研究院（宁波）有限公司）
    - Jian Zhao（吉利汽车研究院（宁波）有限公司）
    - Ke Li（北京海天瑞声科技有限公司）
    - Berrak Sisman（约翰霍普金斯大学，Center for Language and Speech Processing）
    - Qinyuan Cheng（复旦大学; 上海创新研究院）
    - Xipeng Qiu（复旦大学; 上海创新研究院）
    - Kai Yu（上海交通大学，MoE Key Lab of Artificial Intelligence, X-LANCE Lab）
    - Xie Chen（上海交通大学，MoE Key Lab of Artificial Intelligence, X-LANCE Lab; 上海创新研究院）

### 💡 毒舌点评

亮点在于它巧妙地用一个0.4B的小模型和两阶段“自举”训练，在30种语言的零样本克隆任务上达到了与1.7B级别大模型（如Qwen3-TTS）相当的性能，并且完全开源了训练数据和模型，堪称“以小博大”的工程典范。短板是其两阶段训练强依赖第一阶段模型生成的合成数据，这相当于“用自己的脚蹬子把自己提起来”，数据的多样性与质量天花板决定了第二阶段模型的上限，且论文未充分论证合成数据与真实数据分布差异对最终性能的长期影响。此外，其说话人相似度（SIM-o）在某些语言上仍低于部分大参数模型。

### 📌 核心摘要

1.  要解决什么问题：现有零样本语音克隆系统大多依赖参考音频的文本转录，这在低资源语言或无文本场景下难以实现。论文旨在实现无需参考文本的跨语言零样本语音克隆。
2.  方法核心是什么：提出X-Voice，一个基于流匹配的0.4B参数多语言TTS模型。核心是两阶段训练范式：第一阶段用标准数据训练基础模型（X-Voices1）；第二阶段用第一阶段模型生成合成语音作为“伪”参考音频对真实音频进行微调，同时屏蔽真实参考音频的文本，使模型学会从纯音频中提取说话人特征（X-Voices2）。架构上创新性地引入双层语言注入（时间层与文本层）和解耦的CFG调度策略（包括非对称预热）。
3.  与已有方法相比新在哪里：相比于依赖强制对齐或说话人编码器的方案，该方法无需复杂预处理或辅助模块；相比于大参数量的AR模型（如Qwen3-TTS），其推理速度更快（RTF低至0.073）。其“无文本SFT”范式是实现 transcript-free 语音克隆的一种简洁有效的新思路。
4.  主要实验结果如何：在作者构建的涵盖30种语言的测试集上，X-Voice在大多数语言的WER（字错率）上优于开源基线LEMAS-TTS，并与商业模型Qwen3-TTS持平（例如英语WER 2.29 vs 3.89）。说话人相似度（SIM-o）略低于部分大模型，但整体表现均衡。跨语言克隆测试（如中→俄，英→韩）取得了最佳或接近最佳的WER。消融实验验证了双层语言注入和解耦CFG策略的有效性。
5.  实际意义是什么：论文不仅提出了一个高效的多语言语音克隆模型，更开源了庞大的420K小时多语言训练语料、评测基准和完整训练方案，极大地降低了社区在多语言语音生成领域的研究门槛，推动了该领域的民主化。
6.  主要局限性是：论文自述的局限性包括：1）特定音素上下文中的说话人相似度仍有提升空间；2）句内代码混合场景下的表现有待优化；3）第二阶段训练对高质量合成数据的依赖，凸显了纯无监督跨语言迁移研究的必要性。

### 🔗 开源详情

- 代码：https://github.com/sunnyxrxrx/X-Voice
- 模型权重：论文中承诺开源X-Voice自身的模型权重，但未提供具体下载链接。论文中提及了初始化用的F5-TTS预训练权重链接：https://huggingface.co/SWivid/F5-TTS/tree/main/F5TTS_v1_Base。
- 数据集：
    - 论文明确承诺开源了420K小时的多语言训练语料、30K小时的高质量子集以及构建的评估基准，但未提供数据集的具体下载链接。
    - 附录A中列出了训练集所使用的具体开源数据集来源，并说明了处理方法。
- Demo：论文中未提及。
- 复现材料：
    - 论文提供了详细的模型配置（附录B）和训练/推理设置（4.1节）。
    - 论文承诺“release a standardized text normalization frontend and evaluation scripts”，但未提供这些工具的具体下载链接。
- 论文中引用的开源项目：
    - eSpeak-NG：https://github.com/espeak-ng/espeak-ng （用于生成IPA）
    - langdetect：https://github.com/fedelopez77/langdetect （用于转录文本语言检查）
    - DNSMOS：论文引用了Reddy et al., 2022的工作，但未提供其工具的具体链接。
    - Silero VAD：https://github.com/snakers4/silero-vad （用于检测语音边界）
    - ECAPA-TDNN：https://huggingface.co/speechbrain/spkrec-ecapa-voxceleb/tree/main （用于计算说话人相似度）
    - PyThaiNLP：论文中提及用于处理泰语，未提供链接。
    - PyOpenJTalk：https://github.com/r9y9/pyopenjtalk （用于处理日语）
    - g2pK：https://github.com/kyubyong/g2pK （用于处理韩语）
    - Paraformer：论文中提及用于中文ASR，未提供链接。
    - Whisper：论文中提及使用Whisper-large-v3进行其他语言ASR，未提供链接。
    - WavLM：论文中提及使用fine-tuned WavLM-Large模型提取说话人嵌入，未提供链接。
    - 基线模型官方代码与权重：
        - Qwen3-TTS：https://huggingface.co/Qwen/Qwen3-TTS-12Hz-1.7B-Base/tree/main
        - LEMAS-TTS：https://huggingface.co/LEMAS-Project/LEMAS-TTS/tree/main/pretrained_models/ckpts/multilingual_grl
        - MOSS-TTS：https://huggingface.co/OpenMOSS-Team/MOSS-TTS/tree/main
        - Fish Speech S2：https://huggingface.co/fishaudio/s2-pro/tree/main
        - OmniVoice：https://huggingface.co/k2-fsa/OmniVoice/tree/main

### 🏗️ 方法概述和架构

X-Voice是一个基于流匹配（Flow Matching）和扩散Transformer（DiT）架构的多语言零样本语音合成系统。其核心设计哲学是通过两阶段训练，最终实现无需参考文本的语音克隆。

![图1：X-Voice两阶段训练范式概览](https://arxiv.org/html/2605.05611v1/x1.png)
图1展示了整体流程：第一阶段（Stage 1）用大规模多语料训练基础模型；第二阶段（Stage 2）用该模型生成合成音频作为“伪”提示，与真实目标音频配对，进行无需参考文本的微调。

第一阶段：构建多语言基础（X-Voices1）
此阶段旨在学习一个强大的、支持30种语言的语音声学空间。
- 架构：基于F5-TTS的DiT架构，核心是一个文本引导的语音填充（speech-infilling）任务。模型接收被部分掩码的梅尔频谱图和对应的文本序列作为输入，预测被掩码部分的语音。
- 统一表征：采用国际音标（IPA）作为所有语言的统一语音表征（中文使用拼音）。IPA token通过eSpeak-NG等工具生成，并被分解为基本发音单元和超音段修饰符（如重音、声调、长音）。论文强调了保留词汇重音标记和分离发音单元与修饰符的重要性。
- 双层语言注入（Dual-Level Language Injection）：这是关键创新之一，用于解决跨语言合成时的口音泄漏问题。
    - 时间层：将语言标识符（LID）嵌入与时间步嵌入拼接，通过MLP融合，为整个ODE轨迹提供全局语言约束，引导合成语音的韵律符合目标语言。
    - 文本层：使用特征线性调制（FiLM）对文本嵌入进行调节，即通过LID学习缩放（γ）和平移（β）参数，使共享的IPA表征能适配不同语言的特定发音模式。
    ![图3：X-Voices1的训练框架](https://arxiv.org/html/2605.05611v1/x3.png)
    图3清晰展示了双层语言注入：LID同时在时间嵌入（Time Embedding）和文本嵌入（Text Embedding）两个层面与条件信息交互。
- 解耦与调度的CFG（Decoupled & Scheduled CFG）：在推理时优化引导策略。
    - 解耦（DCFG）：将引导分为声学引导和语言引导，可独立调节强度。声学引导用于锚定说话人音色，语言引导用于确保发音准确。
    - 非对称预热调度（A-Warmup）：声学引导强度从一开始就保持高位，以快速锁定音色；语言引导强度则从0线性预热，避免初期在噪声中因强引导导致轨迹振荡。两者在后期均按时间平方衰减。
    $$v_{t,\text{DCFG}} = v_t(\psi_t; A, T, L) + w_A(t)\cdot(v_t(\psi_t; A, T, L) - v_t(\psi_t; T, L)) + w_L(t)\cdot(v_t(\psi_t; T, L) - v_t(\psi_t))$$

第二阶段：无文本监督微调（X-Voices2）
此阶段的目标是让模型摆脱对参考文本的依赖。
![图4：X-Voices2的训练范式](https://arxiv.org/html/2605.05611v1/x4.png)
图4左侧为合成数据生成：用X-Voices1为真实音频生成配对的“伪”提示音频。右侧为无文本微调：在微调时，将“伪”提示音频对应的文本用特殊占位符替代。
- 数据构建：从高保真数据子集中，使用X-Voices1为每条真实音频生成一个“伪”提示音频。生成时，提示音频是真实音频本身，但驱动合成的文本是从该语言文本池中随机采样的。
- 无文本微调：在微调时，将“伪”提示音频的文本部分替换为一系列可学习的提示令牌`<P>`和填充符`<F>`，剥夺模型获取参考文本信息的能力。模型被迫仅从提示音频中提取说话人特征，并根据目标文本生成新的语音。此过程使用了与第一阶段相同的填充任务框架，但调整了文本序列的构建方式（引入`<P>`和`<F>`）以及LID注入的模式（提示和填充符对应位置不注入LID）。

输入-输出流程：
- 训练：输入为（部分掩码的梅尔频谱图，对应文本序列）。输出为预测的掩码区域梅尔频谱图。第二阶段文本部分被特殊令牌替代。
- 推理：输入为（提示音频的梅尔频谱图，目标语言文本序列）。输出为生成的梅尔频谱图，再通过声码器转换为波形。时长由基于说话率预测器估计。

### 💡 核心创新点

1.  两阶段无文本训练范式（Transcript-Free SFT Paradigm）
    - 是什么：一种新的训练流程，第一阶段训练基础模型，第二阶段利用该模型生成合成数据进行“自监督”微调，最终模型无需参考文本即可克隆声音。
    - 之前局限：现有无文本克隆方案需引入额外的说话人编码器、推理时分类器或依赖强制对齐，增加了系统复杂性和预处理错误累积。
    - 如何起作用：通过让模型在第二阶段学习从“伪”提示音频（与真实目标音频是同一说话人）重建真实音频，并屏蔽提示文本，隐式地迫使模型学会仅从音频中提取说话人身份信息。
    - 收益：以较低的模型参数量和较简洁的架构，实现了无需参考文本的跨语言克隆，且不依赖外部模块。
2.  双层语言注入机制（Dual-Level Language Injection）
    - 是什么：在模型的时间层和文本层同时注入语言标识符信息。
    - 之前局限：仅在文本层注入LID（如其他工作）不足以完全解耦说话人音色与口音，导致跨语言合成时出现源语言口音泄漏。
    - 如何起作用：时间层注入提供全局的韵律约束，文本层的FiLM注入则精细调节发音特征，两者协同工作，更好地分离音色与语言相关特征。
    - 收益：消融实验（表8）证明，该机制显著降低了跨语言任务的WER（例如中→意从6.65降至2.93），有效抑制了口音泄漏。
3.  非对称预热的解耦CFG调度（A-Warmup DCFG）
    - 是什么：一种针对多语言场景的推理引导策略，将声学和语言引导解耦，并采用不同的强度时间调度。
    - 之前局限：标准CFG需在说话人相似度和发音准确度间做权衡，且引导强度全局固定易导致初期不稳定。
    - 如何起作用：声学引导全程强启动以锁定音色，语言引导则缓慢预热，避免早期在随机噪声中过度引导。两者后期同步衰减，保证自然度。
    - 收益：消融实验（表9）显示，该策略在保持较高说话人相似度的同时，取得了最低的WER和最高的UTMOS（语音自然度），实现了更优的平衡。

### 🔬 细节详述

- 训练数据：
    - 规模与来源：第一阶段使用420K小时、涵盖30种语言的多语言语料。来源包括Emilia（中英）、GigaSpeech 2（越泰印尼）、KoreaSpeech（韩）、ReazonSpeech（日）、LEMAS（俄）、MMS/Granary（西意法等欧洲语言）等多个开源数据集（详见附录A）。
    - 预处理：严格的多阶段处理流程，包括时长/语速过滤（不同语言有特定阈值）、文本语言检查、去重（移除重复20次以上的语句）、基于DNSMOS（阈值1.5）的声学质量评分与筛选。
    - 数据增强：第二阶段使用X-Voices1生成约10K小时（精确为10,533小时）的合成数据用于微调。
- 损失函数：核心是流匹配目标函数（式1），模型预测概率路径的向量场。
    $$\mathcal{L}_{\text{CFM}}=\mathbf{E}_{t,q(x_{1}),p(x_{0})}\left\|v_{t}(\psi_{t}(x_{0}))-\frac{\text{d}}{\text{d}t}\psi_{t}(x_{0})\right\|^{2}$$
- 训练策略：
    - 优化器：AdamW。
    - 学习率：第一阶段为7.5e-5，前20K步线性warmup，之后线性衰减。
    - 批量大小：每GPU每步38,400音频帧。
    - 精度：bfloat16混合精度。
    - 训练步数：第一阶段600K步；第二阶段70K步。训练初期（前10K步）冻结DiT模块。
    - 说话率预测器：单独训练，批量大小19,200帧，学习率2.5e-4，预热7.5K步。
- 关键超参数：
    - 模型参数量：第一阶段（X-Voices1）为0.3B，第二阶段（X-Voices2）为0.4B。
    - DiT配置：22层，16个注意力头，1024维文本嵌入，512维语言嵌入。
    - 说话率预测器：16层Transformer，12个头，512维嵌入。
- 训练硬件：论文中未明确说明使用的GPU型号、数量和训练时长。
- 推理细节：
    - 求解器：Euler ODE求解器。
    - 步数（NFE）：16步。
    - CFG强度：语言引导强度wL_start=4.0，声学引导强度wA_start=2.5。
    - 调度参数：预热时间twarm=0.01（前3步），衰减时间tdecay=0.6（后2步）。
    - 采样系数：sway系数为-1.0。
    - 时长预测：第一阶段使用参考文本与目标文本长度比；第二阶段使用训练好的说话率预测器。
- 正则化技巧：论文未提及使用Dropout等常规正则化技巧。关键的正则化来自数据过滤和训练策略（如初期冻结部分参数）。

### 📊 实验结果

主要基准与结果：
1.  种子TTS测试集（Seed-TTS Test Set， 中英）：
    | 模型 | RTF↓ | test-zh WER↓ | test-zh SIM-o↑ | test-en WER↓ | test-en SIM-o↑ |
    | :--- | :--- | :--- | :--- | :--- | :--- |
    | Qwen3-TTS | 1.754 | 0.92 | 0.77 | 1.08 | 0.71 |
    | LEMAS-TTS | 0.131 | 3.34 | 0.71 | 1.49 | 0.62 |
    | X-Voices2 | 0.073 | 1.28 | 0.76 | 1.30 | 0.65 |
    X-Voice在推理速度上显著领先，在WER上与Qwen3-TTS接近，SIM-o略低但有竞争力。

2.  LEMAS-TTS测试集（10种语言）：
    以中文和英文为例：
    | 模型 | zh WER↓ | zh SIM-o↑ | en WER↓ | en SIM-o↑ |
    | :--- | :--- | :--- | :--- | :--- |
    | LEMAS-TTS | 2.17 | 0.788 | 1.82 | 0.726 |
    | X-Voices2 | 1.87 | 0.817 | 0.98 | 0.710 |
    X-Voice在大多数语言上WER更低，SIM-o更高或相当。

3.  X-Voice多语言测试集（30种语言）：
    关键结果摘录（英语）：
    | 模型 | WER↓ | SIM-o↑ |
    | :--- | :--- | :--- |
    | Qwen3-TTS | 3.89 | 0.697 |
    | LEMAS-TTS | 4.15 | 0.560 |
    | X-Voices2 | 2.29 | 0.547 |
    X-Voice在英语WER上取得最佳，但SIM-o低于部分基线。

    跨语言克隆WER结果（部分）：
    | 模型 | en→it | it→zh | zh→ru | ru→ko | ko→en |
    | :--- | :--- | :--- | :--- | :--- | :--- |
    | Qwen3-TTS | 2.69 | 2.44 | 2.91 | 14.15 | 2.46 |
    | X-Voices2 | 4.70 | 3.11 | 2.85 | 3.00 | 2.15 |
    X-Voice在多个跨语言对上取得最佳WER，尤其在俄→韩等困难对上表现突出。注意：已有分析中en→it数值4.70有误，已根据原文表7修正。

4.  消融实验：
    - LID注入策略（表8）：双层注入（文本FiLM+时间Concat）使跨语言WER（中→意）从无注入的6.65降至2.93，显著优于仅文本注入（5.89）。
    - CFG策略（表9）：
        | 策略 | WER↓ | SIM-o↑ | UTMOS↑ |
        | :--- | :--- | :--- | :--- |
        | Base (w=2.5) | 8.85 | 0.693 | 3.207 |
        | Decoupled + Decay | 8.29 | 0.684 | 3.261 |
        | Decoupled + A-Warmup | 8.20 | 0.685 | 3.284 |
    解耦加非对称预热策略在WER和UTMOS上均取得最优。论文同时指出，最高的SIM-o（0.693）仍由标准的Base (w=2.5) + Decay策略获得，表明其方法在最大化说话人相似度与平衡综合指标间存在权衡。

![图2：X-Voice数据集中30种语言的时长统计](https://arxiv.org/html/2605.05611v1/x2.png)
图2直观展示了训练语料库的语言分布和规模，体现了工作的多语言广度。

### ⚖️ 评分理由

- 学术质量：6.0/7：论文提出了清晰、有动机的两阶段训练范式和架构改进（双层注入、解耦CFG），并在构建的大规模、多语言评测基准上进行了充分的实验验证和消融分析。技术细节完整，证据链较为可信。其创新属于扎实的工程与应用优化，而非底层原理突破。
- 选题价值：1.5/2：多语言、零样本语音克隆是当前语音生成领域的前沿和热点，具有明确的应用前景。论文聚焦解决去除参考文本依赖这一实际痛点，对领域内外研究者和开发者均有价值。
- 开源与复现加成：0.5/1：论文承诺并提供了开源仓库链接，计划开源全部资源（代码、模型、数据、评测脚本）。训练与推理的关键超参数、策略细节在正文和附录中描述得非常详细，为复现提供了极大便利。加成显著。

---

[← 返回 2026-05-08 论文速递](/audio-paper-digest-blog/posts/2026-05-08/)
