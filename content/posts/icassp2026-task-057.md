---
title: "ICASSP 2026 - 语音克隆 论文列表"
date: 2026-04-29
draft: false
tags: ["语音克隆"]
categories: [icassp-2026]
description: "共 4 篇 ICASSP 2026 语音克隆 方向论文"
hiddenInHomeList: true
---

# ICASSP 2026 - 语音克隆

共 **4** 篇论文

[← 返回 ICASSP 2026 总览](/audio-paper-digest-blog/posts/icassp2026-summary/)

---

| 排名 | 论文 | 评分 | 分档 |
|------|------|------|------|
| 🥇 | [VoxMorph: Scalable Zero-Shot Voice Identity Morphing via Dis](/audio-paper-digest-blog/posts/2026-04-29-voxmorph-scalable-zero-shot-voice-identity) | 9.0分 | 前10% |
| 🥈 | [FED-PISA: Federated Voice Cloning Via Personalized Identity-](/audio-paper-digest-blog/posts/2026-04-29-fed-pisa-federated-voice-cloning-via-personalized) | 8.0分 | 前25% |
| 🥉 | [Cross-Lingual F5-TTS: Towards Language-Agnostic Voice Clonin](/audio-paper-digest-blog/posts/2026-04-29-cross-lingual-f5-tts-towards-language-agnostic) | 7.5分 | 前25% |
| 4. | [ZSV2C-MLLM: Zero-Shot Visual Voice Cloning Via Multimodal La](/audio-paper-digest-blog/posts/2026-04-29-zsv2c-mllm-zero-shot-visual-voice-cloning-via) | 6.5分 | 前50% |

---

## 📋 论文详情

### 🥇 [VoxMorph: Scalable Zero-Shot Voice Identity Morphing via Disentangled Embeddings](/audio-paper-digest-blog/posts/2026-04-29-voxmorph-scalable-zero-shot-voice-identity)

🔥 **9.0/10** | 前10% | #语音克隆 | #流匹配 | #零样本 #语音合成

👥 **作者与机构**

-   第一作者：Bharath Krishnamurthy (北德克萨斯大学)
-   通讯作者：Ajita Rattani (北德克萨斯大学)
-   作者列表：Bharath Krishnamurthy (北德克萨斯大学)， Ajita Rattani (北德克萨斯大学)

💡 **毒舌点评**

这篇论文堪称生物识别安全领域的一声警钟，它用优雅的技术（解纠缠表示学习）和极低的成本（5秒音频），制造出了一个足以让现有语音验证系统头疼不已的“合成身份”。其亮点在于将看似复杂的攻击变得异常简单高效；短板则是，这种“降维打击”式的技术突破，也立刻暴露了当前ASV系统在应对此类高级、细粒度伪造时的脆弱性，给防御方带来了前所未有的压力。

🔗 **开源详情**

-   代码：论文中提供了代码仓库链接：`Vcbsl/VoxMorph`。
-   模型权重：论文中未明确提及是否公开预训练模型权重，但鉴于其代码开源，权重很可能包含在内或后续会提供。
-   数据集：公开。论文明确声明“we release the first publicly available dataset of 10, 000 high-fidelity voice morphs”，并提供了项目页面链接。
-   Demo：论文中未提及在线演示。
-   复现材料：论文提供了充分的复现信息，包括：数据集（LibriSpeech）、评估指标（FAD, KLD, WER, MMPMR/FMMPMR）及其计算方式、使用的基线模型（ViM, Vevo, MorphFader）、硬件环境（RTX 5000 Ada GPU）以及详细的消融实验设置。
-   引用的开源项目：论文引用并依赖了多个开源项目/模型，包括：GE2E（说话人验证）、CAM++（说话人验证）、自回归语言模型（如LLaMA）、条件流匹配模型（如COSYVOICE）、HiFTNet（声码器）、ECAPA-TDNN、HuBERT、Wav2Vec2（用于编码器消融）、Resemblyzer（用于评估）、Wav2Vec2-Base-960h（用于WER计算）。

---

[← 返回 ICASSP 2026 论文分析](/audio-paper-digest-blog/posts/icassp2026-summary/)

📌 **核心摘要**

1.  解决的问题：现有的语音身份变形（VIM）攻击方法存在严重缺陷：计算成本高、不可扩展（需要为每对说话人微调）、依赖声学相似的说话人对，且生成语音质量低。这些限制了其作为实际威胁的可行性。
2.  方法核心：提出VoxMorph，一个零样本框架。其核心是将声音解纠缠为韵律嵌入（说话风格）和音色嵌入（核心身份）。对两个说话人的这两种嵌入分别使用球面线性插值进行混合，然后将融合的嵌入输入一个三阶段合成管线：自回归语言模型生成声学令牌（由融合韵律引导），条件流匹配网络生成梅尔频谱图（由融合音色引导），最后神经声码器生成波形。
3.  与已有方法相比新在哪里：a) 零样本与可扩展性：仅需5秒音频，无需微调即可生成变形语音。b) 解纠缠表示：将风格与身份分离，可独立精细控制，避免了传统单一嵌入混合产生的声学伪影。c) 先进合成架构：利用自回归模型和流匹配模型的强大生成能力，确保了高保真度。d) 首个大规模数据集：发布包含10,000个样本的数据集用于防御研究。
4.  主要实验结果：在严格安全阈值（0.01% FAR）下，VoxMorph-v2实现了67.8%的完全匹配变形成功率（FMMPMR），比之前最优方法（ViM的2.61%）高出数十倍。音频质量（FAD）比基线提升2.6倍，可理解性错误（WER）降低73%。详细对比见下表：

| 方法 | FAD↓ (vs Real) | WER↓ | KLD↓ | MMPMR (%) @ 0.01% | FMMPMR (%) @ 0.01% |
| :--- | :--- | :--- | :--- | :--- | :--- |
| MorphFader [16] | 8.96 | 1.84 | 0.4332 | 0.0 | 0.0 |
| Vevo [3] | 9.14 | 0.54 | 0.1899 | 82.40 | 9.00 |
| ViM [14] | 7.52 | 1.06 | 0.3501 | 2.61 | 0.00 |
| VoxMorph-v1 | 5.03 | 0.33 | 0.1404 | 78.60 | 60.60 |
| VoxMorph-v2 | 4.90 | 0.19 | 0.1385 | 99.80 | 67.80 |

5.  实际意义：证明了语音变形攻击已从理论走向实用，对自动说话人验证（ASV）系统构成切实、可扩展的安全威胁。同时，通过开源代码、模型和大规模数据集，为社区研究和开发下一代变形攻击检测（MAD）对策提供了关键工具和基准。
6.  主要局限性：a) 攻击属性：该技术本身是一种攻击手段，存在滥用风险。b) 评估局限：评估主要在LibriSpeech数据集上进行，且攻击的是特定ASV系统（Resemblyzer），对真实世界、多场景、多模态ASV系统的威胁程度有待进一步验证。c) 多说话人变形：当前方法聚焦于两两变形，未来可扩展至更多说话人融合。

---

### 🥈 [FED-PISA: Federated Voice Cloning Via Personalized Identity-Style Adaptation](/audio-paper-digest-blog/posts/2026-04-29-fed-pisa-federated-voice-cloning-via-personalized)

🔥 **8.0/10** | 前25% | #语音克隆 | #联邦学习 | #语音合成 #低秩适配

👥 **作者与机构**

- 第一作者：Qi Wang（鹏城实验室；中国科学院计算技术研究所；中国科学院大学）
- 通讯作者：未说明
- 作者列表：Qi Wang（鹏城实验室，中国科学院计算技术研究所，中国科学院大学）、Shituo Ma（中国科学院信息工程研究所，中国科学院大学）、Guoxin Yu（鹏城实验室）、Hanyang Peng（鹏城实验室）、Yue Yu（鹏城实验室）

💡 **毒舌点评**

亮点： 论文框架设计巧妙，通过解耦“身份（ID-LoRA）”和“风格（Style-LoRA）”，并借鉴协同过滤思想进行个性化聚合，优雅地解决了联邦学习中“隐私保护-通信效率-个性化”三者间的矛盾，是一个完整且实用的系统方案。
短板： 实验部分缺少对最新、最强的端到端语音大模型（如GPT-SoVITS的最新版本或CosyVoice 2的直接微调基线）的深入对比，使得其“显著优于零样本方法”的结论在当前技术背景下略显单薄，也未能充分展示其在更复杂（如跨语言）场景下的泛化能力。

🔗 **开源详情**

- 代码： 提供了一个Hugging Face Spaces Demo链接 (`https://huggingface.co/spaces/sDuoluoluos/FedPISA-Demo`)，但论文未提供完整的训练或评估代码仓库链接。
- 模型权重： 论文未提及是否公开FED-PISA或其组件（如训练好的ID-LoRA、Style-LoRA）的权重。
- 数据集： 使用了四个公开数据集（ESD, EmoV-DB, RAVDESS, CREMA-D），并说明了数据获取与预处理方式，但未提供统一的预处理后数据包。
- Demo： 提供了在线演示链接。
- 复现材料： 论文非常详细地给出了模型配置（骨干版本、LoRA秩/缩放）、训练超参数（学习率、batch size、轮数、步数分配）、优化器、评估指标（包括使用的模型，如Whisper, emotion2vec, ECAPA-TDNN）和硬件环境，复现细节充分。
- 引用的开源项目： GPT-SOVITS-V4（作为骨干）、emotion2vec（用于风格标签映射和评估）、Whisper-large-v3 Turbo（用于文本标注和WER/CER计算）、SpeechBrain（提供ECAPA-TDNN用于说话人相似度评估）。
- 论文中未提及代码仓库链接和模型权重下载地址，但提供了Demo链接。

---

[← 返回 ICASSP 2026 论文分析](/audio-paper-digest-blog/posts/icassp2026-summary/)

📌 **核心摘要**

1.  问题： 现有联邦语音克隆（TTS）方法面临两大挑战：高昂的通信开销和对说话人风格异质性的抑制，导致个性化不足。
2.  方法核心： 提出FED-PISA框架。其核心是解耦的LoRA机制：为每个客户端维护一个私有的、冻结的ID-LoRA（捕捉音色），以及一个可全局通信的、轻量的Style-LoRA（捕捉风格）。服务器端采用受协同过滤启发的个性化聚合策略，为每个客户端从风格相似的对等方学习，生成定制化的风格模型。
3.  创新点： 与传统联邦TTS相比，新在：1）首次在联邦语音克隆中实现身份与风格的解耦设计，通过LoRA分离；2）引入个性化聚合算法（基于风格相似度的注意力加权），主动利用而非抑制风格异质性；3）在强大的预训练骨干（GPT-SOVITS-V4）上应用PEFT，显著提升框架的性能上限。
4.  主要实验结果： 在四个公开数据集（ESD, EmoV-DB, RAVDESS, CREMA-D）上进行50轮联邦训练。关键结果见下表。FED-PISA在风格表达性（SE: 0.704）、说话人相似度（SS: 0.645）、自然度（nMOS: 4.08）和正确率（WER: 2.70%）上均优于所有基线，同时通信开销（45.8 GiB）远低于其他联邦方法。

| 方法 | 骨干 | SE ↑ | WER (%) ↓ | SS ↑ | nMOS ↑ | 通信开销 (GiB) ↓ |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| 零样本 (COSYVOICE2) | - | 0.659 | 7.20 | 0.619 | 3.84 | - |
| 本地微调 (LoRA) | GPT-SOVITS-V4 | 0.626 | 3.35 | 0.529 | 3.36 | - |
| FedSpeech | FASTSPEECH2 | 0.416 | 6.82 | 0.556 | 3.77 | 145.28 |
| Fed Dy. Trans. | TRANSFORMER-TTS | 0.463 | 8.75 | 0.602 | 3.72 | 456.35 |
| FED-PISA (Ours) | GPT-SOVITS-V4 | 0.704 | 2.70 | 0.645 | 4.08 | 45.8 |

5.  实际意义： 为在隐私保护前提下，实现高效、高保真的个性化语音合成提供了一个可行的联邦学习解决方案，有助于推动语音合成技术在边缘设备和隐私敏感场景（如个人设备）中的应用。
6.  主要局限性： 1）框架假设客户端拥有可用于初始化ID-LoRA的中性语料，在纯语音交互或冷启动场景下可能受限；2）个性化聚合的计算开销随客户端数量增长，论文未讨论其可扩展性；3）未在真实的、资源异构的边缘设备集群上评估部署性能。

---

### 🥉 [Cross-Lingual F5-TTS: Towards Language-Agnostic Voice Cloning and Speech Synthesis](/audio-paper-digest-blog/posts/2026-04-29-cross-lingual-f5-tts-towards-language-agnostic)

✅ **7.5/10** | 前25% | #语音克隆 | #流匹配 | #语音合成 #多语言

👥 **作者与机构**

- 第一作者：Qingyu Liu（上海交通大学 X-LANCE Lab / 约翰斯·霍普金斯大学）
- 通讯作者：Xie Chen（上海交通大学 X-LANCE Lab / 上海创新研究院）†（论文中明确标注为通讯作者）
- 作者列表：Qingyu Liu（上海交通大学、约翰斯·霍普金斯大学）、Yushen Chen（上海交通大学、上海创新研究院）、Zhikang Niu（上海交通大学、上海创新研究院）、Chunhui Wang（吉利）、Yunting Yang（吉利）、Bowen Zhang（吉利）、Jian Zhao（吉利）、Pengcheng Zhu（吉利）、Kai Yu（上海交通大学）、Xie Chen（上海交通大学、上海创新研究院）

#

💡 **毒舌点评**

亮点：论文精准地找到了flow-matching TTS在跨语言场景下的痛点——对音频提示转录文本的依赖，并通过引入多粒度说话率预测器给出了一个工程上优雅的解决方案。短板：说话率预测器本身只在中文和英文数据上训练，却要声称对德、法、印地、韩等“未见语言”有效，这一结论的支撑略显单薄；此外，去除转录文本后“细粒度说话人特征（如口音、情感）”的迁移能力下降，在论文中被轻描淡写为“未来工作”，但这恰恰是克隆质量的要害。

#

🔗 **开源详情**

- 代码：提供了Demo链接（https://huggingface.co/spaces/chenxie95/Cross-Lingual_F5-TTS_Space）和个人主页示例（https://qingyuliu0521.github.io/Cross_lingual-F5-TTS/）。论文指出Cross-Lingual F5-TTS的代码可通过这些链接访问，暗示已开源。
- 模型权重：基础模型F5-TTS-Base已开源。本文提出的Cross-Lingual F5-TTS模型和说话率预测器的具体权重下载地址论文中未明确提供。
- 数据集：使用了公开数据集Emilia、LibriSpeech、FLEURS。未提供本文特有的测试集（跨语言测试集）的独立下载。
- Demo：提供了交互式HuggingFace Spaces Demo。
- 复现材料：提供了详尽的训练配置（模型架构、优化器、学习率、batch size、训练步数）、推理设置（NFE、CFG等）和预处理方法描述，为复现提供了坚实基础。
- 依赖的开源项目：MMS (forced alignment), Vocos (vocoder), Whisper-large-V3 (WER评估), Paraformer-zh (中文WER评估), WavLM (说话人相似度评估), UTMOS (自然度评估)。

---

[← 返回 ICASSP 2026 论文分析](/audio-paper-digest-blog/posts/icassp2026-summary/)

📌 **核心摘要**

1. 问题：现有的基于流匹配的文本转语音（TTS）模型在进行跨语言语音克隆时，严重依赖于对音频提示（参考音频）的转录文本，这在目标语言未知或转录不可用时无法实现。
2. 方法核心：提出Cross-Lingual F5-TTS框架。训练时，利用MMS强制对齐工具预处理数据，获取词边界，将音频提示部分及其对应文本完全丢弃，仅用提示音频指导合成剩余被掩码的音频。推理时，为解决缺失文本导致的时长预测难题，训练了音素、音节、词三种粒度的说话率预测器，直接从音频提示的声学特征估算其说话速度，进而结合目标文本的单元数量计算合成时长。
3. 创新点：相比原F5-TTS及同类模型，本文首次在flow-matching TTS框架内实现了无需音频提示转录的跨语言克隆；引入了基于Gaussian Cross-Entropy损失的多粒度说话率预测器作为时长建模的替代方案。
4. 实验结果：在语内测试（LibriSpeech-PC test-clean, SeedTTS test-en/zh）上，该方法在WER和UTMOS等指标上匹配甚至优于原F5-TTS基线（如CL-F5+M1在LibriSpeech-PC test-clean上WER为2.079%，低于基线的2.205%）。在跨语言测试（473个样本，德、法、印地、韩语音提示合成中英文）上，成功实现了克隆，其中M1/M2模型表现良好（如合成英文WER为2.496%），而M3（词级）显著变差（WER达16.494%）。说话率预测器在MRE上表现最佳为M2在中文测试的13.771%。
5. 实际意义：使高质量语音克隆摆脱了对参考音频转录的强依赖，极大扩展了应用场景，尤其是在处理无法转录的罕见语言或实时克隆场景。
6. 局限性：1）说话率预测器在中英文以外语言上的有效性未直接验证，其泛化性存疑。2）去除文本信息后，对说话人细微特征（如口音、情感）的迁移能力下降，论文未提出解决方案。3）跨语言测试集的语言覆盖范围和样本量有限。

#

---

### 4. [ZSV2C-MLLM: Zero-Shot Visual Voice Cloning Via Multimodal Large Language Models](/audio-paper-digest-blog/posts/2026-04-29-zsv2c-mllm-zero-shot-visual-voice-cloning-via)

✅ **6.5/10** | 前50% | #语音克隆 | #多模态模型 | #零样本 #强化学习

👥 **作者与机构**

- 第一作者：Yanling Zhang（昆明理工大学）
- 通讯作者：Shengxiang Gao（昆明理工大学）
- 作者列表：Yanling Zhang（昆明理工大学，云南人工智能重点实验室）、Linqing Wang（昆明理工大学，云南人工智能重点实验室）、Shengxiang Gao（昆明理工大学，云南人工智能重点实验室）

💡 **毒舌点评**

亮点：论文最大的亮点在于将“情感规划”这个抽象任务显式地交给一个经过微调的大语言模型来完成，这个思路比传统基于规则或回归的方法更灵活，也更契合当前LLM赋能各任务的潮流。短板：论文在最关键的“如何做到零样本”和“LLM具体如何规划韵律”这两个核心问题上，细节描述过于粗疏，比如对“融合”操作（公式1）和“情绪调制”函数（公式4）的实现一笔带过，给人的感觉是框架大于细节，实验数据漂亮但“黑盒”感较强。

🔗 **开源详情**

- 代码：论文中未提及代码链接。
- 模型权重：未提及公开模型权重。
- 数据集：使用了公开数据集GRID和CHEM，但未提供获取方式或预处理脚本。
- Demo：未提及在线演示。
- 复现材料：仅提供了极有限的训练设置（优化器、学习率、硬件），缺乏复现所需的详细配置文件、超参数表、代码或检查点。
- 论文中引用的开源项目：引用了CosyVoice/CosyVoice2的工作，但未明确说明其开源项目是否被直接使用或作为基础进行构建。
- 总结：论文中未提及任何开源计划。

---

[← 返回 ICASSP 2026 论文分析](/audio-paper-digest-blog/posts/icassp2026-summary/)

📌 **核心摘要**

1. 要解决的问题：现有的视觉语音克隆（V2C）方法大多依赖于配对的音频-视觉数据，缺乏零样本能力，这限制了其在资源受限环境（如无配对数据）下的可扩展性。
2. 方法核心：提出一个零样本V2C框架，集成文本、静音视频、参考音频和用户情感标签作为输入。其核心创新是一个基于预训练大语言模型（Qwen）的情感韵律规划器，它能根据多模态融合特征生成连续的韵律轨迹（如音高、语速、停顿）。
3. 与已有方法相比新在哪里：主要区别在于引入了LLM作为多模态信息整合与情感韵律规划的中心模块，并实现了无需配对音频数据的零样本推理。相比于V2C-Net、Face-TTS等方法，该框架在数据要求上更灵活。
4. 主要实验结果：在GRID和CHEM两个数据集上，该方法在语音质量（MOS-S）、自然度（MOS-N）和说话人相似度（SPK-SIM）上均显著优于基线方法。例如，在GRID数据集上，MOS-S达到3.94，比最强基线Multi-TTS（3.50）高0.44；SPK-SIM达到71.52，远高于其他方法。消融实验证明，移除视觉输入、情感控制、强化学习或LLM规划器都会导致性能明显下降。
5. 实际意义：为电影配音、语音修复、交互媒体等需要情感化语音合成但缺乏配对训练数据的场景，提供了一种可扩展的解决方案。
6. 主要局限性：实验仅在两个相对小规模和特定领域的数据集（GRID为命令式语音，CHEM为情感语音）上验证，对于更复杂、更自然对话场景的泛化能力未证明。此外，论文未公开代码和模型细节，可复现性存疑。

---

