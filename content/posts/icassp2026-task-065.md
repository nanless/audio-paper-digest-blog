---
title: "ICASSP 2026 - 语音对话系统 论文列表"
date: 2026-04-29
draft: false
tags: ["语音对话系统"]
categories: [icassp-2026]
description: "共 10 篇 ICASSP 2026 语音对话系统 方向论文"
hiddenInHomeList: true
---

# ICASSP 2026 - 语音对话系统

共 **10** 篇论文

[← 返回 ICASSP 2026 总览](/audio-paper-digest-blog/posts/icassp2026-summary/)

---

| 排名 | 论文 | 评分 | 分档 |
|------|------|------|------|
| 🥇 | [DOMA: Leveraging Diffusion Language Models with Adaptive Pri](/audio-paper-digest-blog/posts/2026-04-29-doma-leveraging-diffusion-language-models-with) | 8.5分 | 前25% |
| 🥈 | [PersonaPlex: Voice and Role Control for Full Duplex Conversa](/audio-paper-digest-blog/posts/2026-04-29-personaplex-voice-and-role-control-for-full) | 8.5分 | 前25% |
| 🥉 | [UTI-LLM: A Personalized Articulatory-Speech Therapy Assistan](/audio-paper-digest-blog/posts/2026-04-29-uti-llm-a-personalized-articulatory-speech) | 7.5分 | 前25% |
| 4. | [A Dataset of Robot-Patient and Doctor-Patient Medical Dialog](/audio-paper-digest-blog/posts/2026-04-29-a-dataset-of-robot-patient-and-doctor-patient) | 7.5分 | 前25% |
| 5. | [Game-Time: Evaluating Temporal Dynamics in Spoken Language M](/audio-paper-digest-blog/posts/2026-04-29-game-time-evaluating-temporal-dynamics-in-spoken) | 7.5分 | 前25% |
| 6. | [The Role of Prosodic and Lexical Cues in Turn-Taking with Se](/audio-paper-digest-blog/posts/2026-04-29-the-role-of-prosodic-and-lexical-cues-in-turn) | 7.5分 | 前25% |
| 7. | [Vocalnet-M2: Advancing Low-Latency Spoken Language Modeling ](/audio-paper-digest-blog/posts/2026-04-29-vocalnet-m2-advancing-low-latency-spoken-language) | 7.5分 | 前25% |
| 8. | [Easy Turn: Integrating Acoustic and Linguistic Modalities fo](/audio-paper-digest-blog/posts/2026-04-29-easy-turn-integrating-acoustic-and-linguistic) | 7.0分 | 前25% |
| 9. | [Still Thinking or Stopped Talking? Dialogue Silence Intentio](/audio-paper-digest-blog/posts/2026-04-29-still-thinking-or-stopped-talking-dialogue) | 6.5分 | 前25% |
| 10. | [Enhancing Dialogue-Related Speech Tasks with Generated Spoke](/audio-paper-digest-blog/posts/2026-04-29-enhancing-dialogue-related-speech-tasks-with) | 6.5分 | 前25% |

---

## 📋 论文详情

### 🥇 [DOMA: Leveraging Diffusion Language Models with Adaptive Prior for Intent Classification and Slot Filling](/audio-paper-digest-blog/posts/2026-04-29-doma-leveraging-diffusion-language-models-with)

🔥 **8.5/10** | 前25% | #语音对话系统 | #扩散模型 | #意图识别 #槽填充

👥 **作者与机构**

- 第一作者：Siqi Yang（电子科技大学）
- 通讯作者：Fan Zhou（电子科技大学；智能数字媒体技术四川省重点实验室；喀什电子与信息产业研究院）
- 作者列表：Siqi Yang（电子科技大学），Yue Lei（电子科技大学），Wenxin Tai（电子科技大学），Jin Wu（电子科技大学），Jia Chen（电子科技大学），Ting Zhong（电子科技大学），Fan Zhou*（电子科技大学；智能数字媒体技术四川省重点实验室；喀什电子与信息产业研究院）

💡 **毒舌点评**

这篇论文巧妙地将扩散语言模型（DLM）的并行生成能力用于纠正ASR转录错误，并通过一个轻量级的自适应先验模块来解决DLM可能“改对为错”的痛点，想法很实用。不过，整个框架的性能瓶颈和复杂度高度依赖于所使用的DLM（如LLaDA），自适应先验模块本身也可能引入新的错误（例如错误地掩码了本应保留的token），论文对此的边界讨论不足。

📌 **核心摘要**

本文针对自动语音识别（ASR）错误会传播并损害下游口语理解（SLU）任务（如意图分类和槽填充）性能的问题，提出了一个模型无关的框架DOMA。DOMA的核心是使用扩散语言模型（DLM）对ASR转录文本进行细化，并引入了一个自适应先验（AP）机制来引导DLM的生成过程。具体来说，DOMA首先使用DLM生成多个候选细化假设，然后利用一个轻量级的、可训练的AP模块（包含自注意力和门控机制）来识别并保留原始ASR转录中可能正确的token，从而构建一个部分掩码的初始序列，而非从完全掩码开始生成。这有助于减少DLM的过度纠正，同时减少所需的扩散步数，提升推理效率。在SLURP、ATIS和SNIPS三个基准数据集上的实验表明，DOMA在多种基线模型（如RoBERTa, SpokenCSE）上一致提升了ICSF性能，相对提升最高达3.2%（例如，DOMA+SpokenCSE在SLURP上的IC准确率从85.51%提升至88.26%）。同时，与自回归LLM细化方法相比，DOMA将推理延迟降低了34.8%（RTF从0.66降至0.43）。该框架的意义在于为提升SLU系统对ASR错误的鲁棒性提供了一种高效、通用的后处理方案。主要局限性在于其效果依赖于强大的预训练DLM（如LLaDA-8B），且AP模块的训练需要额外数据和计算资源。

关键实验结果表：

| 模型 | 训练集 | 数据集 | SLURP (WER=17.12%) | ATIS (WER=10.31%) | SNIPS (WER=7.69%) |
| :--- | :--- | :--- | :--- | :--- | :--- |
| | | | Accuracy (↑) / SLU-F1 (↑) | Accuracy (↑) / SLU-F1 (↑) | Accuracy (↑) / SLU-F1 (↑) |
| RoBERTa [20] | Oracle | | 82.78 / 72.19 | 95.87 / 87.18 | 96.99 / 95.31 |
| DOMA+RoBERTa [20] | Oracle | | 84.77 / 74.23 | 97.40 / 88.56 | 97.72 / 97.19 |
| SpokenCSE [6] | Oracle+ASR | | 85.51 / 74.39 | 97.58 / 90.02 | 98.17 / 97.80 |
| DOMA+SpokenCSE [6] | Oracle+ASR | | 88.26 / 76.82 | 98.15 / 90.65 | 98.61 / 98.11 |

![图1: ICSF Workflow with DOMA](pdf-image-page1-idx0)
图1展示了DOMA嵌入整个ICSF工作流的示意图。DOMA位于ASR输出和ICSF模型之间，负责文本精细化。

---

### 🥈 [PersonaPlex: Voice and Role Control for Full Duplex Conversational Speech Models](/audio-paper-digest-blog/posts/2026-04-29-personaplex-voice-and-role-control-for-full)

🔥 **8.5/10** | 前25% | #语音对话系统 | #语音大模型 | #语音克隆 #零样本

👥 **作者与机构**

- 第一作者：Rajarshi Roy (NVIDIA)
- 通讯作者：未说明
- 作者列表：Rajarshi Roy (NVIDIA), Jonathan Raiman (NVIDIA), Sang-gil Lee (NVIDIA), Teodor-Dumitru Ene (NVIDIA), Robert Kirby (NVIDIA), Sungwon Kim (NVIDIA), Jaehyeon Kim (NVIDIA), Bryan Catanzaro (NVIDIA)

#

💡 **毒舌点评**

亮点：这是首个在全双工语音对话模型中实现实用级零样本语音克隆和细粒度角色控制的开源工作，其提出的`Service-Duplex-Bench`为评估此类系统提供了更贴近真实应用的标尺。短板：模型的全部能力均基于大规模合成数据训练，虽然实验验证了有效性，但其在复杂、真实世界交互中的泛化能力和“涌现”行为尚待检验；且合成对话是否覆盖了足够多样的真实交互模式，文中未做深入讨论。

#

📌 **核心摘要**

1.  问题：现有的全双工语音对话模型（如Moshi）虽然实现了自然、低延迟的语音交互，但均固定于单一角色和声音，无法满足现实世界中个性化、多角色的应用需求（如定制客服、多角色对话）。
2.  方法核心：提出了PersonaPlex，一个基于Moshi架构的全双工语音模型。其核心创新是引入混合系统提示，该提示将描述角色的文本（如“你是一个银行客服”）和用于克隆的音频样本进行时序拼接，输入到模型的音频和文本通道中，从而实现同时控制模型的角色行为和语音音色。
3.  新意：首次将基于文本的角色条件化和基于音频的语音克隆统一到一个端到端的全双工模型中，无需修改底层架构。同时，构建了大规模合成训练数据，并提出了新的多角色客服评估基准`Service-Duplex-Bench`。
4.  主要实验结果：
    *   自然度与语音相似度（表1）：在Full-Duplex-Bench上，PersonaPlex的DMOS得分为3.90，超越Gemini (3.72)和Moshi (3.11)；语音相似度SSIM为0.57，远超其他模型（最高为Moshi的0.10）。
    *   对话动态（表2）：在暂停处理、回溯、平滑轮换、用户打断等多项指标上达到或接近最优。
    *   角色遵循度（表4）：在新的Service-Duplex-Bench上，平均得分为4.48，仅次于Gemini (4.73)，远超Moshi (1.75)等模型。
5.  实际意义：为构建可定制音色和人格的实时语音交互系统（如智能客服、虚拟角色）提供了可行的技术路径和开源方案，是推动全双工对话模型从实验室走向实际应用的重要一步。
6.  主要局限性：模型训练完全依赖合成数据，可能引入合成数据的偏差；论文未深入探讨混合提示在极长对话或更复杂角色设定下的稳定性；模型的推理效率和端侧部署潜力未作分析。

---

### 🥉 [UTI-LLM: A Personalized Articulatory-Speech Therapy Assistance System Based on Multimodal Large Language Model](/audio-paper-digest-blog/posts/2026-04-29-uti-llm-a-personalized-articulatory-speech)

✅ **7.5/10** | 前25% | #语音对话系统 | #多模态模型 | #医疗应用 #数据集

👥 **作者与机构**

- 第一作者：未说明（论文首页列有多个作者，但未明确标注第一作者。根据作者列表顺序推测为Yudong Yang或Xiaokang Liu，但不明确）
- 通讯作者：Nan Yan, Lan Wang（论文中明确标注为“Corresponding authors”）
- 作者列表：
    - Yudong Yang (1, 2)
    - Xiaokang Liu (1)
    - Shaofeng Zhao (3)
    - Rongfeng Su (1)
    - Nan Yan (1, 2, *)
    - Lan Wang (1, 2, *)
    - 单位1：Shenzhen Institutes of Advanced Technology, Chinese Academy of Sciences, China (中国科学院深圳先进技术研究院)
    - 单位2：Key Laboratory of Biomedical Imaging Science and System, Chinese Academy of Sciences, China (中国科学院生物医学成像科学与系统重点实验室)
    - 单位3：Department of Rehabilitation Medicine, The Eighth Affiliated Hospital of Sun Yat-sen University, China (中山大学附属第八医院康复医学科)

#

💡 **毒舌点评**

亮点：系统性地解决了从领域数据构建（创新性的双智能体协作生成）、模型设计（针对UTI特性的时空特征融合）到多维度评估的完整流程，是一套“交钥匙”式的解决方案，对于想在医疗垂直领域应用MLLM的研究者有很好的示范作用。  
短板：核心的“多模态融合”方法（图2）实质上是将语音特征与UTI的时空特征简单拼接后输入LLM，缺乏更精巧的跨模态交互机制；更重要的是，整个系统的“个性化”和“治疗辅助”效果目前仅通过离线数据集上的分析准确率和文本生成质量来间接证明，缺乏真实医患交互场景的验证和用户研究，离临床实用尚有距离。

#

📌 **核心摘要**

这篇论文旨在解决传统言语康复治疗中专业治疗师短缺、反馈不实时和缺乏客观评估手段的问题。论文的核心方法是构建一个基于多模态大语言模型（MLLM）的言语康复辅助系统（UTI-LLM），该系统能够同时处理超声舌成像（UTI）视频和语音信号，提供个性化的发音分析和康复建议。与已有方法相比，本文的创新之处在于：1) 设计了一个双智能体协作框架，自动构建高质量的UTI-语音对话数据集；2) 提出了一个能够联合处理UTI时空特征和语音特征的模型架构；3) 首次将UTI-语音并行数据用于言语康复的推理对话。主要实验结果表明，UTI-LLM在舌部运动自然语言生成评估指标（平均得分0.3994，比最佳基线高4.5%）、构音障碍评估（准确率90.98%，比最强基线Qwen2-Audio高16.11%）以及多维度的专家评估中均优于对比的基线模型。其实际意义在于为言语康复提供了一种客观、可交互的新型辅助工具。主要局限性包括：所提的多模态融合方法相对直接，模型的临床实际疗效和用户接受度未得到验证，且开源程度有限。

#

---

### 4. [A Dataset of Robot-Patient and Doctor-Patient Medical Dialogues for Spoken Language Processing Tasks](/audio-paper-digest-blog/posts/2026-04-29-a-dataset-of-robot-patient-and-doctor-patient)

✅ **7.5/10** | 前25% | #语音对话系统 | #数据集 | #大语言模型 #模型评估

👥 **作者与机构**

- 第一作者：Heriberto Cuayáhuitl（University of Lincoln, School of Engineering and Physical Sciences）
- 通讯作者：未说明（论文中未明确指定通讯作者）
- 作者列表：
    - Heriberto Cuayáhuitl（University of Lincoln, School of Engineering and Physical Sciences）
    - Grace Jang（Lincoln Medical School, Universities of Lincoln and Nottingham）

#

💡 **毒舌点评**

亮点：数据集规模（111+小时）和收集方法（结合远程操控机器人与真实医患对话）在公开免费资源中独树一帜，并创新性地设计了模拟ASR噪声的评估协议。短板：对LLM的评估停留在通用多选题任务上，未能深入设计更能体现医疗对话复杂性和安全性的评测，使得这项重要的数据资源在论文中的价值释放略显不足，更像一个“半成品”基准。

#

📌 **核心摘要**

1.  问题：尽管大语言模型（LLM）发展迅速，但其在文本或语音形式的医疗问诊中应用仍是一个开放问题，主要瓶颈之一是缺乏大规模、公开、包含人机交互的医疗对话语音数据集。
2.  方法核心：提出MeDial-Speech数据集，通过创新的Wizard-of-Oz系统，收集了111+小时的机器人-患者和医生-患者对话语音数据，覆盖四种常见疾病。并设计了基于句子选择（20选1）的对话基准测试，评估了多个前沿LLM在有无ASR噪声下的表现。
3.  创新点：1) 数据集规模大、模态丰富（语音、转录、说话人标签），且免费开放；2) 同时包含人机和人人对话，更贴近未来应用场景；3) 基准测试引入ASR噪声，模拟真实世界中患者语音识别不准的情况。
4.  实验结果：在句子选择任务中，Claude Sonnet 4表现最佳，手动转录下平衡准确率为71.1%，自动转录下为74.7%。关键发现是所有被评估的LLM（GPT-5 mini, DeepSeek-V3, Claude Sonnet 4）都表现出强烈的过度自信，即无论预测正确与否，其给出的概率分布都高度集中。
    - 关键实验结果表格如下：
| 指标 | 无噪声（手动转录） | 有噪声（ASR转录） |
| :--- | :--- | :--- |
| 模型 | GPT-5 mini | DeepSeek V3 | Claude Sonnet 4 | GPT-5 mini | DeepSeek V3 | Claude Sonnet 4 |
| 平衡准确率↑ | 0.4919 | 0.6271 | 0.7119 | 0.5054 | 0.5598 | 0.7473 |
| F1分数↑ | 0.6591 | 0.7708 | 0.8317 | 0.6715 | 0.7178 | 0.8554 |
| Brier分数↓ | 0.2754 | 0.2421 | 0.1888 | 0.2450 | 0.3069 | 0.1917 |
| 校准损失↓ | 0.1119 | 0.1321 | 0.0541 | 0.1446 | 0.2526 | 0.1151 |
5.  实际意义：为医疗AI的训练和评估提供了宝贵的开放资源，有望加速语音对话系统、自动化临床辅助等应用的发展，并为医学生提供教学工具。
6.  主要局限性：1) 参与者为模拟患者而非真实患者，可能影响对话的临床真实性；2) 论文提出的基准任务相对简单，未深入探索对话生成、临床推理等更复杂任务；3) 对揭示的LLM“过度自信”问题，未能提出有效的解决方案。

#

---

### 5. [Game-Time: Evaluating Temporal Dynamics in Spoken Language Models](/audio-paper-digest-blog/posts/2026-04-29-game-time-evaluating-temporal-dynamics-in-spoken)

✅ **7.5/10** | 前25% | #语音对话系统 | #基准测试 | #模型评估 #语音大模型

👥 **作者与机构**

- 第一作者：Kai-Wei Chang1（麻省理工学院），En-Pei Hu2（台湾大学） （*表示共同第一作者）
- 通讯作者：未说明 （论文中未明确标注通讯作者）
- 作者列表：Kai-Wei Chang (麻省理工学院), En-Pei Hu (台湾大学), Chun-Yi Kuan (台湾大学), Wenze Ren (台湾大学), Wei-Chih Chen (台湾大学), Guan-Ting Lin (台湾大学), Yu Tsao (中央研究院), Shao-Hua Sun (台湾大学), Hung-yi Lee (台湾大学), James Glass (麻省理工学院)

💡 **毒舌点评**

亮点：选题精准地击中了当前语音对话模型“懂内容，不懂时间”的痛点，并创新性地将儿童语言学习中的“游戏化”概念引入评测框架设计，思路新颖且系统。短板：实验规模（模型数量与评测样本）相对有限，且高度依赖外部工具（如Whisper转录、Gemini作为Judge）进行评估，使得评测流程的自主性与结果的绝对可靠性存在一定折扣。

📌 **核心摘要**

1. 问题：当前对话式语音语言模型（SLM）的评测主要集中在内容生成、风格模仿和轮次转换上，严重缺乏对“时间动态”能力的评估。这种能力包括时间控制、节奏把握和同时说话（全双工），是实现自然、流畅人机语音交互的关键瓶颈。
2. 方法核心：本文提出了“Game-Time”评测基准。其灵感来源于儿童通过游戏（如石头剪刀布）学习语言中时间和节奏的过程。该基准包含两大类任务：基础任务（Basic Tasks）测试SLM的基础指令跟随能力；高级任务（Advanced Tasks）在基础任务上增加严格的时间约束（如快/慢速、静音等待、节奏同步、同时发言）。
3. 新在何处：与现有仅关注内容、风格或轮次的基准不同，Game-Time首次系统性地、量化地评估SLM的“时间意识”和全双工交互能力。它提出了一个形式化的指令跟随框架，用于生成带有精确时间约束的测试用例，并设计了基于双通道转录和LLM推理的评估方法。
4. 主要实验结果：论文评估了多种SLM架构（包括商业API）。结果显示：在基础任务上，最先进的商业模型（如GPT-Realtime）表现良好，但部分学术模型仍存在缺陷。关键结果是，几乎所有模型在引入时间约束后性能都急剧下降。具体而言：模型在“快速/慢速”任务上尚可，但在需要精确“静音等待”或“节奏遵循”的任务上几乎全部失败。全双工同步任务（如同时跟读、石头剪刀布）对所有模型都极具挑战。具体数值见下表：

| 模型 | 全双工方法 | 基础任务平均分（推测） | 高级任务平均分（推测） | 关键观察 |
| :--- | :--- | :--- | :--- | :--- |
| SSML-LLM（Oracle） | 非因果补全 | 最高 | 最高 | 理论性能天花板 |
| GPT-realtime | 未说明 | 很高 | 显著下降，但仍可能领先 | 在重复任务上表现突出 |
| Gemini-Live | 未说明 | 高 | 显著下降 | 商业模型表现尚可 |
| Freeze-Omni | 时分复用 | 中高 | 性能大幅下降 | 基础任务尚可，时间任务困难 |
| Unmute | 时分复用 | 中 | 性能大幅下降 | 类似Freeze-Omni |
| Moshi | 双通道 | 中低 | 性能大幅下降 | 基础任务已落后，时间任务更差 |

（注：论文图3展示了详细分数，但未提供具体数值表格，上表根据图表趋势和文字描述总结。）

![图3：Game-Time基准得分](pdf-image-page4-idx2)
结论：该图清晰展示了所有模型在高级任务（Bottom）上的得分远低于基础任务（Top），且离Oracle系统差距巨大，证实了时间动态是当前SLM的普遍弱点。

5. 实际意义：该基准为SLM研究提供了一个关键的评测维度，指明了未来模型需要重点突破的方向——时间意识。它推动了从“说什么”到“何时说”的评测范式转变，对开发更自然、更实用的语音交互AI具有重要指导意义。
6. 主要局限性：1) 评测的模型数量有限，可能无法覆盖所有最新进展。2) 评估流程依赖ASR转录和LLM判断，其准确性可能影响最终得分。3) 高级任务的设计虽具代表性，但现实对话中的时间动态可能更为复杂和微妙。4) 论文是评测工作，未提出解决时间动态问题的新模型方法。

---

### 6. [The Role of Prosodic and Lexical Cues in Turn-Taking with Self-Supervised Speech Representations](/audio-paper-digest-blog/posts/2026-04-29-the-role-of-prosodic-and-lexical-cues-in-turn)

✅ **7.5/10** | 前25% | #语音对话系统 | #自监督学习 | #语音活动检测 #语音表示学习

👥 **作者与机构**

- 第一作者：Sam O’Connor Russell（都柏林三一学院工程学院）
- 通讯作者：未说明
- 作者列表：Sam O’Connor Russell（都柏林三一学院工程学院）、Delphine Charuau（都柏林三一学院工程学院）、Naomi Harte（都柏林三一学院工程学院）

#

💡 **毒舌点评**

本文巧妙地将神经科学中的“声音相关噪声”范式移植到语音轮次预测的可解释性分析中，像做手术一样干净地分离了韵律和词汇线索，方法论上值得称赞。然而，结论“仅韵律就够了”可能过于乐观，毕竟实验中的“韵律匹配噪声”在真实世界的噪声环境下难以复现，且模型在复杂对话场景中是否仍能如此可靠地依赖单一线索存疑。

#

📌 **核心摘要**

1.  要解决的问题：基于自监督语音表示（S3R）的轮次预测模型性能优异，但其决策依赖于语音中的哪些线索（韵律 vs. 词汇）尚不清楚，这限制了模型的可解释性、隐私保护和轻量化潜力。
2.  方法核心：引入一种基于WORLD vocoder的控制方法，能够干净地生成仅保留韵律（去除词汇可懂度）或仅保留词汇（平滑韵律）的语音，用于系统性地探究S3R模型（主要是VAP模型）的线索依赖关系。
3.  与已有方法相比新在哪里：不同于以往通过简单滤波或添加背景噪声（会同时破坏多种线索）的研究，该方法能独立、可控地操纵语音的韵律和词汇成分，提供了更干净的实验条件。研究范围从单一S3R（CPC）扩展到了wav2vec2.0，增强了结论的普适性。
4.  主要实验结果：
    - 在纯净语音上训练的VAP模型，在测试时面对仅保留韵律的噪声语音（WER>100%），仍能保持较高的轮次预测准确率（S/H-Pred平衡准确率≈70%，见表2），接近纯净语音性能的91%（图4）。
    - 相反，去除韵律（平滑音高和强度）后，性能虽下降但仍显著高于随机水平（表2）。
    - 当一种线索被破坏时，模型无需重新训练即可利用另一种线索，证明两种线索在S3R编码中相互独立（图2）。这一结论在wav2vec2.0前端上同样成立。
5.  实际意义：该发现为设计轻量化、仅依赖韵律的轮次预测模型提供了理论支持，此类模型具有计算高效和保护语音隐私（去除可识别词汇内容）的双重优势。
6.  主要局限性：研究仅在英语对话语料库（CANDOR）上进行，跨语言泛化性未验证。所使用的“韵律匹配噪声”是一种受控实验条件，与真实世界的噪声干扰存在差异。

#

---

### 7. [Vocalnet-M2: Advancing Low-Latency Spoken Language Modeling via Integrated Multi-Codebook Tokenization and Multi-Token Prediction](/audio-paper-digest-blog/posts/2026-04-29-vocalnet-m2-advancing-low-latency-spoken-language)

✅ **7.5/10** | 前25% | #语音对话系统 | #多令牌预测 | #多码本分词 #语音大模型

👥 **作者与机构**

- 第一作者：Yuhao Wang (上海交通大学，蚂蚁集团)
- 通讯作者：Yu Wang (上海交通大学)
- 作者列表：Yuhao Wang (上海交通大学，蚂蚁集团)、Ziyang Cheng (上海交通大学)、Heyang Liu (上海交通大学，蚂蚁集团)、Ronghua Wu (蚂蚁集团)、Qunshan Gu (蚂蚁集团)、Yanfeng Wang (上海交通大学)、Yu Wang (上海交通大学)

💡 **毒舌点评**

论文直击当前语音大模型在实时交互中的“阿喀琉斯之踵”——延迟，并通过多码本直出和MTP策略给出了有效缓解方案，工程实用性值得肯定。然而，多码本学习的“高门槛”特性意味着它严重依赖高质量、大规规模的训练数据，这可能成为其在资源受限场景下落地的“新瓶颈”。

📌 **核心摘要**

本文旨在解决当前端到端语音语言模型因自回归生成和依赖流匹配模型导致的响应延迟过高问题。方法核心是提出VocalNet-M2，一个采用“思考者-说话者”架构的低延迟模态对齐SLM。其创新在于：1）集成多码本分词器，直接生成包含丰富声学信息的8码本语音令牌，从而省去了高延迟的流匹配声学重建模型；2）设计了针对多码本生成的多令牌预测策略，在单次推理步骤中预测多个未来令牌，进一步提升效率并改善性能。主要实验结果表明，VocalNet-M2在保持与主流SLM竞争性的文本与语音质量（如AlpacaEval 7.29， WER 6.07）的同时，将首音频块延迟从基线系统的约725毫秒大幅降低至约349毫秒，实现了约2倍的推理加速。该工作的实际意义在于为构建低延迟、高响应的实时语音交互系统提供了有价值的架构设计和对比分析。主要局限性在于，学习多码本语音令牌比单码本令牌更困难，对训练数据的质量和数量要求更高。

---

### 8. [Easy Turn: Integrating Acoustic and Linguistic Modalities for Robust Turn-Taking in Full-Duplex Spoken Dialogue Systems](/audio-paper-digest-blog/posts/2026-04-29-easy-turn-integrating-acoustic-and-linguistic)

✅ **7.0/10** | 前25% | #语音对话系统 | #多模态模型 | #大语言模型 #数据集

👥 **作者与机构**

- 第一作者：Guojian Li（西北工业大学计算机学院，音频、语音与语言处理组）
- 通讯作者：Zhonghua Fu（西北工业大学计算机学院），Lei Xie（西北工业大学计算机学院）
- 作者列表：
    - Guojian Li，Chengyou Wang，Hongfei Xue，Shuiyuan Wang，Dehui Gao，Zhonghua Fu，Lei Xie（西北工业大学计算机学院，音频、语音与语言处理组）
    - Zihan Zhang，Yuke Lin，Wenjie Li，Longshuai Xiao（华为技术有限公司）

#

💡 **毒舌点评**

亮点：论文直击全双工对话系统中轮次检测“缺乏开源、数据稀缺”的痛点，不仅提出了一个性能优越的开源模型，还配套发布了超千小时的专项训练集，堪称“送数据送模型”的良心之作，对社区的实用价值很高。短板：模型架构本质上是Whisper和轻量LLM的常规组合，创新更多体现在工程化整合与ASR+检测的串联范式，理论突破有限；合成数据流程复杂，其与真实用户交互数据的分布差异可能影响模型在极端情况下的鲁棒性。

#

📌 **核心摘要**

1. 问题：在全双工语音对话系统中，需要一个鲁棒的轮次检测模块来判断用户何时说完、未说完、在回应或要求暂停，但现有开源方案或受限于单模态、或模型过大、或需要大量稀缺的全双工数据。
2. 方法：提出Easy Turn，一个开源的模块化双模态（声学+语言学）轮次检测模型。它采用“ASR+轮次检测”范式，以Whisper为音频编码器，通过适配器连接轻量级的Qwen2.5-0.5B LLM，先生成语音转录文本，再融合声学与文本特征预测四种对话状态。同时发布了Easy Turn trainset，一个1145小时、覆盖四种状态的大规模训练数据集。
3. 创新：主要创新在于：(1) 开源了首个支持四种对话状态、性能领先的轮次检测模型和配套数据集，填补了领域空白；(2) 采用“ASR+检测”范式有效融合声学与语言信息，避免了单模态的局限；(3) 通过模块化设计和轻量级LLM，在性能和效率间取得了平衡。
4. 实验结果：在自建的Easy Turn测试集上，Easy Turn在四种状态（完整、不完整、回应、等待）上的准确率（96.33%， 97.67%， 91%， 98%）均显著优于现有开源模型TEN Turn Detection和Smart Turn V2。同时，模型参数量（850MB）、延迟（263ms）和内存占用（2559MB）处于可接受范围。消融实验表明，双模态融合及“ASR+检测”范式对性能提升至关重要（平均准确率从单模态的~86%提升至95.75%）。
    | 模型 | 参数量(MB) ↓ | 延迟(ms) | 内存(MB) | 完整(%) ↑ | 不完整(%) | 回应(%) | 等待(%) |
    | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
    | Paraformer + TEN Turn Detection | 7220 | 204 | 15419 | 86.67 | 89.3 | - | 91 |
    | Smart Turn V2 | 95 | 27 | 370 | 78.67 | 62 | - | - |
    | Easy Turn (Proposed) | 850 | 263 | 2559 | 96.33 | 97.67 | 91 | 98 |
5. 实际意义：为全双工语音对话研究提供了即插即用的开源工具和高质量数据，显著降低了研究门槛，有望加速相关技术从实验室走向产品应用。
6. 主要局限性：模型在极端真实环境（如极高噪声、多人同时说话）下的鲁棒性尚未充分验证；训练数据中的合成部分可能无法完全覆盖所有自然交互场景；“ASR+检测”的串联设计可能带来一定延迟，且在ASR错误时可能影响检测性能。

---

### 9. [Still Thinking or Stopped Talking? Dialogue Silence Intention Classification Using Multimodal Large Language Model](/audio-paper-digest-blog/posts/2026-04-29-still-thinking-or-stopped-talking-dialogue)

✅ **6.5/10** | 前25% | #语音对话系统 | #多模态模型 | #数据集 #大语言模型

👥 **作者与机构**

- 第一作者：Muyun Wu（京都大学信息学院）
- 通讯作者：未说明
- 作者列表：Muyun Wu（京都大学信息学院）、Zi Haur Pang（京都大学信息学院）、Koji Inoue（京都大学信息学院）、Tatsuya Kawahara（京都大学信息学院）

#

💡 **毒舌点评**

亮点：论文精准地抓住了对话系统中一个被长期忽视但至关重要的细节——沉默的意图解读，并为此构建了首个专门的多模态数据集，这种对具体问题的深入挖掘值得肯定。
短板：模型更像是现有成熟组件（Whisper， SigLip2， Q-former， Qwen3）的“乐高式”拼装，在多模态融合的核心技术上缺乏原创性。数据集规模相对较小（仅63名说话人），且仅针对日语，结论的普适性存疑。

#

📌 **核心摘要**

本文旨在解决对话式语音系统（SDS）中用户长暂停（沉默）意图不明确的问题，即无法判断用户是在“思考”还是已“停止发言”。方法核心是将此问题重新定义为多模态（音频-视频）分类任务，并构建了一个包含63名日语母语者与“倾听系统”交互的专用数据集，对2秒以上的静音区间基于前后文语言线索、视觉线索和后续行为进行标注。基于此数据集，作者提出了一种名为SilenceLLM的多模态大语言模型架构，该架构结合了视觉编码器（评估了CLIP， SigLip2， AV-HuBERT， Marlin）、音频编码器（Whisper， HuBERT）、AV Q-former和LLM解码器。与已有方法相比，其新意在于专门针对沉默理解设计了数据集和端到端的分类框架，并在多个组件组合上进行了系统性对比。实验表明，最优配置（Qwen3-1.7B + SigLip2 (带STPConnector) + Whisper）达到了0.857的宏F1分数，显著优于单模态基线（音频0.662， 视频0.392），且与通用多模态LLM（如MMS-LlaMA）相比也有显著提升（p<0.05）。这项工作的实际意义在于为提升对话系统的交互自然性提供了关键模块和评估数据集。主要局限性是数据集规模较小、语种单一，且模型的创新性更多体现在系统集成而非底层算法突破。

#

---

### 10. [Enhancing Dialogue-Related Speech Tasks with Generated Spoken Dialogues](/audio-paper-digest-blog/posts/2026-04-29-enhancing-dialogue-related-speech-tasks-with)

✅ **6.5/10** | 前25% | #语音对话系统 | #数据增强 | #语音大模型 #说话人分离

👥 **作者与机构**

- 第一作者：Haitian Lu（中国科学院声学研究所语音声学与内容理解重点实验室；中国科学院大学）
- 通讯作者：Gaofeng Cheng（中国科学院声学研究所语音声学与内容理解重点实验室；中国科学院大学）
- 作者列表：Haitian Lu（中国科学院声学研究所语音声学与内容理解重点实验室；中国科学院大学）、Zhihao Bai（中国科学院声学研究所语音声学与内容理解重点实验室；中国科学院大学）、Yukun Liu（中国科学院声学研究所语音声学与内容理解重点实验室；中国科学院大学）、Xuyang Wang（中国科学院声学研究所语音声学与内容理解重点实验室；中国科学院大学）、Gaofeng Cheng（中国科学院声学研究所语音声学与内容理解重点实验室；中国科学院大学）、Yonghong Yan（中国科学院声学研究所语音声学与内容理解重点实验室；中国科学院大学）

💡 **毒舌点评**

这篇论文的亮点在于思路清晰，将“生成可控对话数据”这一上游能力与多个下游具体任务紧密结合，并系统验证了其作为数据增强工具的实用价值，尤其是在改善VAD的对话级错误率（CDER）上效果显著。短板在于，其“增强”的根基——生成模型SLIDE是前作，本文的增量贡献更多是应用层面的实验验证；同时，生成数据的说话人多样性不足（仅120人）导致EEND的说话人错误率居高不下���暴露了当前生成对话数据用于复杂说话人场景时的核心瓶颈。

📌 **核心摘要**

1. 解决的问题：大语言模型（LLM）和语音语言模型（SLM）能生成自然的对话语音，但生成的语音在文本-语音一致性、精确的时间戳获取以及保持自然对话动态（如韵律、重叠）方面存在挑战，限制了其作为高质量数据增强资源在下游任务中的应用。
2. 方法核心：基于SLIDE框架，扩展生成带有精确转录和话语时间戳的双通道语音对话。通过从模型预测的音素时长中解析出连续的语音片段边界，获得精确的监督信号。随后，将这些生成的对话数据以多种策略（单独使用、与真实数据混合、预训练后微调）应用于四个下游任务：自动语音识别（ASR）、端到端神经说话人分离（EEND）、语音活动检测（VAD）和重叠语音检测（OSD）。
3. 创新点：相比于直接使用真实数据或传统仿真数据，本文提出的方法生成的对话兼具自然对话动态和准确的标注（文本与时间戳）。它不是提出一个新的生成模型，而是系统地探索和验证了可控生成对话数据作为通用数据增强方案的潜力和具体应用方法。
4. 主要实验结果：在Fisher和CALLHOME数据集上的实验表明：
    *   ASR：使用100小时真实数据+1600小时生成数据进行预训练-微调后，WER为14.31%，优于仅使用1600小时真实数据的15.20%。
    *   VAD：仅用400小时生成数据训练的模型，CDER（对话级错误率）为34.4%，相比仅用真实数据的最佳结果48.1%有28.5%的相对改进。
    *   OSD：结合1600小时真实数据与1600小时生成数据，F1分数达到65.4%，优于仅用1600小时真实数据的62.0%。
    *   EEND：生成数据在MS+FA（漏检与误检）指标上表现良好，但由于生成对话仅包含120位说话人，导致说话人错误率较高，整体DER提升有限。
    具体实验结果表格如下：

表1：ASR性能（Fisher数据集）
| 模型 | 训练数据规模 | WER ↓ |
| :--- | :--- | :--- |
| Wav2vec2 (真实数据) | 100h | 26.98% |
| Wav2vec2 (真实数据) | 1600h | 15.20% |
| Wav2vec2 (真实+生成数据) | 100h+1600h (预训练+微调) | 23.78% |
| Wav2vec2 (真实+生成数据) | 1600h+1600h (预训练+微调) | 14.31% |

表2：EEND性能（CALLHOME数据集）
| 模型 | 训练数据规模 | MS ↓ | FA ↓ | ERROR ↓ | DER ↓ |
| :--- | :--- | :--- | :--- | :--- | :--- |
| BLSTM-EEND (真实数据) | 1600h | 9.6% | 3.7% | 8.4% | 21.7% |
| BLSTM-EEND (生成数据) | 1600h | 11.2% | 8.3% | 27.6% | 47.1% |

表3：VAD性能（CALLHOME数据集）
| 模型 | 训练数据规模 | CDER ↓ | MS+FA ↓ (collar=0.25) | MS+FA ↓ (collar=0) |
| :--- | :--- | :--- | :--- | :--- |
| CRDNN (真实数据) | 200h | 48.1% | 2.80% | 9.64% |
| CRDNN (生成数据) | 400h | 34.4% | 3.92% | 9.27% |
| pyannote2.1 | - | 76.3% | 5.54% | 9.29% |
| Silero | - | 98.5% | 9.07% | 12.37% |

表4：OSD性能（CALLHOME数据集）
| 模型 | 训练数据规模 | Precision ↑ | Recall ↑ | F1 ↑ |
| :--- | :--- | :--- | :--- | :--- |
| ResNet-LSTM (真实数据) | 1600h | 61.4% | 62.6% | 62.0% |
| ResNet-LSTM (生成数据) | 1600h | 60.6% | 61.2% | 60.9% |
| ResNet-LSTM (真实+生成数据) | 1600h+1600h | 65.3% | 65.5% | 65.4% |
| Sincnet | - | 72.7% | 34.6% | 46.9% |

5. 实际意义：该方法为解决标注对话数据稀缺、昂贵的问题提供了一条可扩展的路径。生成的对话数据可作为现有真实数据的有效补充，尤其对于VAD、ASR等任务，在低资源场景下能显著提升模型性能。
6. 主要局限性：生成对话的说话人多样性有限（仅120人），严重制约了其在说话人分离（EEND）等说话人相关任务上的效果。此外，生成对话是否完全捕获了真实对话中复杂的声学场景（如复杂背景噪声、远场效应）仍需进一步验证。

---

