---
title: "ICLR 2026 - 基准测试 论文列表"
date: 2026-05-03
draft: false
tags: ["基准测试"]
categories: [iclr-2026]
description: "共 7 篇 ICLR 2026 基准测试 方向论文"
hiddenInHomeList: true
---

# ICLR 2026 - 基准测试

共 **7** 篇论文

[← 返回 ICLR 2026 总览](/audio-paper-digest-blog/posts/iclr2026-summary/)

---

| 排名 | 论文 | 评分 | 分档 |
|------|------|------|------|
| 🥇 | [AudioTrust: Benchmarking The Multifaceted Trustworthiness of](/audio-paper-digest-blog/posts/2026-05-03-audiotrust-benchmarking-the-multifaceted) | 8.0分 | 前25% |
| 🥈 | [VoxPrivacy: A Benchmark for Evaluating Interactional Privacy](/audio-paper-digest-blog/posts/2026-05-03-voxprivacy-a-benchmark-for-evaluating) | 8.0分 | 前25% |
| 🥉 | [MCIF: Multimodal Crosslingual Instruction-Following Benchmar](/audio-paper-digest-blog/posts/2026-05-03-mcif-multimodal-crosslingual-instruction) | 8.0分 | 前25% |
| 4. | [JointAVBench: A Benchmark for Joint Audio-Visual Reasoning E](/audio-paper-digest-blog/posts/2026-05-03-jointavbench-a-benchmark-for-joint-audio-visual) | 7.5分 | 前25% |
| 5. | [Omni-Reward: Towards Generalist Omni-Modal Reward Modeling w](/audio-paper-digest-blog/posts/2026-05-03-omni-reward-towards-generalist-omni-modal-reward) | 7.0分 | 前25% |
| 6. | [STAR-Bench: Probing Deep Spatio-Temporal Reasoning as Audio ](/audio-paper-digest-blog/posts/2026-05-03-star-bench-probing-deep-spatio-temporal-reasoning) | 7.0分 | 前25% |
| 7. | [VideoMathQA: Benchmarking Mathematical Reasoning via Multimo](/audio-paper-digest-blog/posts/2026-05-03-videomathqa-benchmarking-mathematical-reasoning) | 7.0分 | 前25% |

---

## 📋 论文详情

### 🥇 [AudioTrust: Benchmarking The Multifaceted Trustworthiness of Audio Large Language Models](/audio-paper-digest-blog/posts/2026-05-03-audiotrust-benchmarking-the-multifaceted)

🔥 **8.0/10** | 前25% | #基准测试 | #模型评估 | #音频大模型 #对抗样本

👥 **作者与机构**

- 第一作者：Kai Li（论文标注为共同第一作者，其单位为清华大学计算机系，人工智能研究院，BNRist）
- 通讯作者：Xinfeng Li（南洋理工大学）
- 作者列表：Kai Li（清华大学）、Can Shen（BNBU）、Yile Liu（早稻田大学）、Jirui Han（独立研究者）、Kelong Zheng（华中科技大学）、Xuechao Zou（北京交通大学）、Lionel Z. Wang（香港理工大学）、Shun Zhang（QHU）、Xingjian Du（罗切斯特大学）、Hanjun Luo（浙江大学）、Yingbin Jin（香港理工大学）、Xinxin Xing（独立研究者）、Ziyang Ma（上海交通大学）、Yue Liu（新加坡国立大学）、Yifan Zhang（中国科学院）、Junfeng Fang（新加坡国立大学）、Kun Wang（南洋理工大学）、Yibo Yan（香港科技大学（广州））、Gelei Deng（南洋理工大学）、Haoyang Li（香港理工大学）、Yiming Li（南洋理工大学）、Xiaobin Zhuang（字节跳动）、Tianlong Chen（北卡罗来纳大学教堂山分校）、Qingsong Wen（松鼠AI）、Tianwei Zhang（南洋理工大学）、Yang Liu（南洋理工大学）、Haibo Hu（香港理工大学）、Zhizheng Wu（香港中文大学（深圳））、Xiaolin Hu（清华大学）、Eng-Siong Chng（南洋理工大学）、Wenyuan Xu（浙江大学）、XiaoFeng Wang（南洋理工大学）、Wei Dong（南洋理工大学）、Xinfeng Li（南洋理工大学，通讯作者）。

💡 **毒舌点评**

亮点：这是第一个系统性地“体检”音频大模型可信度的基准，像一份详尽的审计报告，揭示了现有模型在公平性、安全、隐私等方面普遍存在的短板，指明了未来必须攻克的方向。短板：它主要擅长“诊断问题”而非“开出药方”——提出了评估框架但未深入探讨如何从模型架构或训练方法上根本性地解决这些可信度风险，更像是一个优秀的“红队”报告而非“蓝图”。

🔗 **开源详情**

- 代码：论文明确提供了GitHub仓库链接：`https://github.com/JusperLee/AudioTrust`，包含评估框架、自动化脚本和排行榜代码。
- 模型权重：未提供被评估模型之外的自有模型权重。
- 数据集：论文声明评估数据集及元数据是公开的，并通过上述GitHub仓库获取。数据来源包括合成数据、公共数据集（如Common Voice, freesound）以及部分真实场景数据。
- Demo：论文中未提及在线演示链接。
- 复现材料：论文提供了极其详尽的附录（Appendix），详细说明了六个评估维度的数据集分类、构造方法、实验设计、评估指标和更多结果分析。同时，论文描述了其评估平台的“推理-评估”两阶段解耦架构，为复现提供了指导。
- 论文中引用的开源项目：论文在数据集构建中使用了F5-TTS（语音合成）、Common Voice（语音数据集）、freesound（音效数据集）。评估器使用了GPT-4o和Qwen3。

📌 **核心摘要**

1.  解决的问题：现有的大语言模型评估框架主要针对文本模态，无法有效评估音频大语言模型因声学特性（如音色、口音、背景噪音）而引入的独特可信度风险。
2.  方法核心：提出了AudioTrust，一个首个多维度、大规模、系统性的ALLM可信度评估基准。它覆盖了公平性、幻觉、安全性、隐私、鲁棒性和认证六个关键维度，设计了26个具体子任务，并构建了一个包含超过4420个真实场景音频样本的数据集。
3.  与已有方法的比较新意：首次将音频模态特有的非语义线索（如声学属性）作为核心评估对象，定义了全新的可信度威胁（如音频幻觉、情感欺骗攻击、基于声纹的隐私推断），而这些在传统文本安全基准中是不存在的。
4.  主要实验结果：对14个代表性的开源及闭源ALLM进行了大规模评测。结果显示：
    *   公平性：现有ALLM存在严重偏见，平均群体公平分数远低于理想值1.0（Γ_decision平均仅0.261）。开源模型表现差异巨大。
    *   幻觉：模型在检测明显物理或时序矛盾时表现较好（如PV得分7.43），但在内容匹配等需要常识推理的任务上较弱（如CM得分5.22）。
    *   安全性：闭源模型整体防御成功率更高（多数>99%），但医疗领域仍是其弱点。部分开源模型（如Kimi-Audio）表现优异，而另一些（如OpenS2S）则非常脆弱。
    *   隐私：模型在阻止直接内容泄露方面相对较好（使用隐私提示后，GPT-4o mini Audio拒绝率达100%），但在阻止基于声学线索的隐私推断方面极其薄弱（平均拒绝率仅12.12%）。
    *   鲁棒性：闭源模型（如Gemini-2.5 Pro）在噪声、多人说话等干扰下性能显著优于开源模型。
    *   认证：闭源模型在身份验证绕过和混合欺骗攻击中表现优异（IRR均>95%），但开源模型平均水平较低（约55%）。
5.  实际意义：为学术界和工业界评估、开发和安全部署音频大模型提供了首个全面的基准和公开排行榜，揭示了当前模型的关键局限性，对推动可信音频AI的发展具有重要指导价值。
6.  主要局限性：评估框架本身存在方法论依赖（如使用GPT-4o/Qwen3作为评估器），可能引入偏见；实验主要评估了主流模型在英文场景下的表现，对多语言、多方言场景的覆盖有待扩展；论文主要侧重于“评估”和“发现问题”，对于如何从模型设计层面系统性提升可信度，探讨相对有限。

---

### 🥈 [VoxPrivacy: A Benchmark for Evaluating Interactional Privacy of Speech Language Models](/audio-paper-digest-blog/posts/2026-05-03-voxprivacy-a-benchmark-for-evaluating)

🔥 **8.0/10** | 前25% | #基准测试 | #语音大模型 | #隐私保护 #多语言

👥 **作者与机构**

- 第一作者：Yuxiang Wang (The Chinese University of Hong Kong, Shenzhen)
- 通讯作者：未明确说明（论文首页作者列表按顺序排列，未标注通讯作者）
- 作者列表：
    1. Yuxiang Wang (The Chinese University of Hong Kong, Shenzhen)
    2. Hongyu Liu (The Chinese University of Hong Kong, Shenzhen)
    3. Dekun Chen (The Chinese University of Hong Kong, Shenzhen)
    4. Xueyao Zhang (The Chinese University of Hong Kong, Shenzhen)
    5. Zhizheng Wu (The Chinese University of Hong Kong, Shenzhen; Shenzhen Loop Area Institute; City University of Macau; Amphion Technology Co., Ltd.)

💡 **毒舌点评**

亮点：这篇论文为语音AI领域提出了一个“皇帝的新衣”式的测试——当语音助手从你的手机走进客厅和办公室时，它能不能管住自己的嘴？VoxPrivacy基准用三层级任务巧妙拆解了这个难题，实验数据也赤裸裸地揭示了当前模型（尤其是开源模型）在这方面的集体“失忆症”和“大嘴巴”属性，敲响了实用化部署的警钟。
短板：诊断出病症，但开出的药方（监督微调）稍显保守。虽然证明了“练一练”能提升隐私保护能力，但缺乏对更优雅、更具泛化性的技术路径（如差分隐私、联邦学习、或基于推理的动态策略）的探索，使得“如何构建天生就注重隐私的SLM”这个更根本的问题仍然悬而未决。

🔗 **开源详情**

- 代码：论文中未直接提供代码仓库链接，但声明了发布意图，并提供了Demo主页链接：https://myflashbarry.github.io/VoxPrivacy.github.io/。评估脚本和模型代码是否开源未明确说明。
- 模型权重：论文明确表示将发布微调后的模型（Kimi-Audio-sft）。
- 数据集：论文明确表示将发布完整的VoxPrivacy基准数据集（7107样本）和大规模训练集（4000小时）。
- Demo：提供了在线演示页面链接。
- 复现材料：提供了详细的基准构建流程（四阶段）、评估框架（LLM判官提示词见附录A/F）、训练配置（超参数、硬件）、数据统计和附录中的大量提示词模板，复现信息较为充分。
- 论文中引用的开源项目/模型：
    - TTS引擎：CosyVoice2
    - 语音编码器：Whisper-large-v3
    - 基线SLM：Kimi-Audio, Qwen2.5-Omni, MiniCPM-o2.6, Gemini系列等
    - LLM判官：Deepseek-V3, Gemini-2.5-Pro
    - 说话人验证：使用预训练的说话人嵌入模型（引用Chen et al., 2022）
    - 数据集：AISHELL-2, WenetSpeech, LibriSpeech等。

📌 **核心摘要**

1. 问题：随着语音语言模型（SLM）从个人设备走向智能家居等共享多用户环境，模型需要区分不同用户以管理信息流，防止一个用户的私密信息泄露给他人。这种保护跨用户情境信息的能力被定义为“交互式隐私”。现有基准忽视了对这种能力的评估。
2. 方法核心：提出首个评估SLM交互式隐私的基准VoxPrivacy。它包含三个难度递增的任务层级：Tier 1（服从直接保密命令）、Tier 2（以说话人声纹为密钥的条件访问控制）、Tier 3（无需指令，主动推断并保护私密信息）。基准构建基于一个四阶段流程：LLM生成秘密陈述、数据清洗与润色、结构化对话组装、高质量语音合成（CosyVoice2）。
3. 新意：与现有关注内容理解或全局敏感词的基准不同，VoxPrivacy首次系统性地评估模型结合说话人身份和对话上下文来管理情境敏感信息的能力。它填补了SLM评估中“隐私”与“多说话人感知”交叉领域的空白。
4. 主要实验结果：对9个SLM的评估显示，大多数开源模型在需要说话人感知的条件隐私决策（Tier 2/3）上表现接近随机水平（~50%准确率）。例如，Qwen2.5-Omni在Tier 2英文任务上的F1分数仅为44.63。闭源模型（如Gemini-2.5-pro）表现更好但仍不完美。通过SFT微调的Kimi-Audio-sft模型性能显著提升，在Tier 2英文任务上F1达到82.65，接近Gemini-2.5-pro。所有模型在Tier 3（主动推断）上性能均有下降，显示出从“遵守指令”到“社会推理”的鸿沟。实验在合成数据和真人录制数据（Real-VoxPrivacy）上均得到验证。具体关键数据见下表：

    表：主要模型在VoxPrivacy基准Tier 1/2/3任务上的性能对比（英文部分）
    | 模型 | Tier 1 准确率(%) | Tier 2 F1(%) | Tier 3 F1(%) |
    | :--- | :--- | :--- | :--- |
    | LLM (上界) | 98.01 | 90.64 | 86.71 |
    | Gemini-2.5-pro | 81.95 | 76.39 | 67.06 |
    | Gemini-2.0-flash | 81.35 | 64.95 | 56.69 |
    | Kimi-Audio | 71.38 | 59.14 | 55.39 |
    | Kimi-Audio-sft (Ours) | 87.92 | 82.65 | 77.83 |
    | Qwen2.5-Omni | 39.41 | 44.63 | 40.61 |
    | MiniCPM-o2.6 | 30.06 | 33.82 | 28.87 |

5. 实际意义：为开发更安全、值得信赖的共享环境SLM提供了关键的评估框架和改进路径（大规模多任务数据微调）。揭示了当前SLM在多用户场景下的重大隐私风险，指明了需要重点加强的领域（上下文跟踪、说话人绑定、常识推理）。
6. 主要局限性：基准构建依赖合成语音，可能无法完全捕捉真实对话中的情感副语言线索；评估的“解决方案”基于监督微调，属于相对直接的方法，未探索更复杂的隐私保护机制；任务场景主要聚焦于异步查询，对更复杂的实时、多方对话交互隐私评估不足。

---

### 🥉 [MCIF: Multimodal Crosslingual Instruction-Following Benchmark from Scientific Talks](/audio-paper-digest-blog/posts/2026-05-03-mcif-multimodal-crosslingual-instruction)

🔥 **8.0/10** | 前25% | #基准测试 | #多语言 | #跨模态 #模型评估

👥 **作者与机构**

- 第一作者：未说明
- 通讯作者：未说明
- 作者列表：Sara Papi（未说明）、Maike Züfle（未说明）、Marco Gaido（未说明）、Beatrice Savoldi（未说明）、Danni Liu（未说明）、Ioannis Douros（未说明）、Luisa Bentivogli（未说明）、Jan Niehues（未说明）

💡 **毒舌点评**

亮点：该工作系统地填补了多模态大模型评估体系中的关键空白，其平行设计的多语言、多模态、多任务基准，对于揭示模型在真实复杂场景下的短板具有直接且重要的指导价值。短板：作为一项基准测试工作，其核心贡献在于“评测”而非“建模”，对模型本身的创新推动较为间接，且论文摘要未详细说明评估脚本、基线配置等可能影响快速复现的细节。

🔗 **开源详情**

- 代码：论文摘要中未提及代码链接。
- 模型权重：论文摘要中未提及。MCIF本身是基准，非模型。
- 数据集：是。论文明确说明MCIF基准已发布，并采用CC-BY 4.0许可证，这意味着数据集是公开可获取的。
- Demo：论文摘要中未提及。
- 复现材料：论文摘要中未详细说明是否提供训练细节、配置、检查点或附录说明。
- 论文中引用的开源项目：论文摘要中未提及。

📌 **核心摘要**

1.  要解决什么问题：现有的多模态大语言模型基准测试存在局限，通常局限于英语、单一模态、短输入或缺乏人工标注，无法全面评估模型在跨语言、多模态、长/短输入下的指令跟随能力。
2.  方法核心是什么：作者提出了MCIF，一个首个基于科学演讲的人工标注跨语言基准测试。它覆盖了三种核心模态（语音、视觉、文本）、四种语言（英、德、意、中）和四大类任务（识别、翻译、问答、摘要），并通过平行设计确保所有维度完全对齐。
3.  与已有方法相比新在哪里：MCIF是首个联合评估跨语言、多模态、多任务和不同输入长度的人工标注基准。其设计强调跨维度的平行性和系统性，能够更全面地剖析模型的多维度能力。
4.  主要实验结果如何：论文对23个模型进行了基准测试和分析，揭示了模型在模态和任务上存在普遍的挑战，表明未来的多模态大模型发展仍有很大提升空间。论文摘要未提供具体的数值结果。
5.  实际意义是什么：MCIF为研究和开发更具通用性的多模态大语言模型提供了急需的全面评估工具，能够更准确地指导模型在跨语言、多模态场景下的优化方向。
6.  主要局限性是什么：作为基准测试，其本身不提出新的模型架构或训练方法。其评估结果依赖于被测模型的发展，且基准覆盖的语言和任务虽然多样，但仍为有限集合，可能无法涵盖所有真实世界场景。

---

### 4. [JointAVBench: A Benchmark for Joint Audio-Visual Reasoning Evaluation](/audio-paper-digest-blog/posts/2026-05-03-jointavbench-a-benchmark-for-joint-audio-visual)

✅ **7.5/10** | 前25% | #基准测试 | #多模态模型 | #音视频

👥 **作者与机构**

- 第一作者：Jianghan Chao（中国人民大学高瓴人工智能学院）
- 通讯作者：Ruihua Song（中国人民大学高瓴人工智能学院）
- 作者列表：Jianghan Chao（中国人民大学高瓴人工智能学院）、Jianzhang Gao（中国人民大学高瓴人工智能学院）、Wenhui Tan（中国人民大学高瓴人工智能学院）、Yuchong Sun（中国人民大学高瓴人工智能学院）、Ruihua Song（中国人民大学高瓴人工智能学院）、Liyun Ru（百川智能）

#

💡 **毒舌点评**

亮点在于提出了一个真正“严格”要求音视频必须协同的评估框架，直击现有基准“音视频可分离答题”的痛点，迫使模型进行真正的跨模态推理。短板则在于其完全依赖现有LLM/VLM自动化生成的流程，虽然高效且降低了成本，但可能引入模型自身的偏差，且对生成质量的最终保障仍依赖人工抽检，评估的“纯粹性”打了折扣。

#

🔗 **开源详情**

- 代码：论文中未提及代码链接。项目主页 `https://jointavbench.github.io` 可能提供数据下载入口，但未明确说明是否包含生成代码。
- 模型权重：未提及开源模型权重。论文评估的模型为已有的开源或闭源模型。
- 数据集：是，论文明确表示将发布JointAVBench数据集，采用CC BY-NC-SA 4.0许可协议。
- Demo：未提及在线演示。
- 复现材料：论文详细描述了三阶段生成流水线和质量控制过程，并在附录中提供了大量提示词模板（如图10-16），这为复现提供了重要参考。但未提供完整的训练配置、检查点等。
- 引用的开源项目：论文中引用了多项开源工具与模型，包括：PySceneDetect（场景分割）、Qwen2.5-VL/72B-Instruct（视频/文本描述生成）、Whisper-v3（语音转录）、Qwen2.5-Omni（音频描述生成）。

📌 **核心摘要**

1.  问题：当前缺乏一个能全面、严格评估多模态大语言模型（Omni-LLMs）联合音频-视觉推理能力的基准测试，现有数据集在音视频依赖性、音频类型覆盖和场景复杂度上存在不足。
2.  方法核心：提出JointAVBench，一个包含2,853个高质量多选题的基准。其核心设计包括一个三层维度的系统化任务分类（认知维度、音频类型、场景复杂度）和一个三阶段（全模态描述生成、QA对创建、质量控制）的半自动化数据生成流水线。
3.  新意：首次系统性地将评估维度细化到5种认知能力、4种音频信号（语音、发声特征、声音事件、音乐）和3种场景跨度（单场景、跨场景、全场景），并强调所有问题必须100%需要音视频信息联合才能回答。
4.  实验结果：对多种主流模型（Omni-LLMs、Video-LLMs、Audio-LLMs）进行了评估。结果显示，性能最好的Omni-LLM（Gemini2.5-Pro）平均准确率仅为62.6%，显著优于单模态模型，但在处理发声特征、跨场景推理等任务时表现不佳，存在明显能力短板。具体结果见表3。
    | Model | STL | SPL | SOOG | SOER | SPER | MPTI | VSSR | CSA | MPO | PTG | AFA | PDP | AVDM | MESI | CRI | Avg |
    |---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
    | Gemini2.5-Pro | 73.0 | 59.4 | 60.8 | 68.9 | 35.2 | 68.1 | 76.5 | 43.8 | 66.0 | 60.7 | 65.5 | 45.7 | 75.5 | 66.1 | 81.9 | 62.6 |
    | Qwen3-Omni | 71.1 | 43.4 | 73.8 | 78.4 | 35.7 | 80.3 | 75.7 | 42.1 | 45.2 | 30.9 | 59.7 | 47.3 | 61.8 | 69.2 | 84.0 | 62.1 |
    | InternVL-2.5 | 28.7 | 37.9 | 59.8 | 71.1 | 23.6 | 64.1 | 52.2 | 42.5 | 44.2 | 27.5 | 63.6 | 41.9 | 50.0 | 68.4 | 68.3 | 51.3 |
    | Kimi-Audio | 56.5 | 21.9 | 48.6 | 61.7 | 32.9 | 53.3 | 34.3 | 38.0 | 33.0 | 26.2 | 65.3 | 38.7 | 40.2 | 56.1 | 69.5 | 45.9 |
5.  实际意义：揭示了当前最先进多模态模型在联合音视频推理上仍存在显著差距，特别是在抽象音频理解（如情感、语调）和复杂跨场景推理方面，为未来模型改进指明了方向。
6.  局限性：数据集视频来源单一（仅来自SF20K电影集），可能引入领域偏差；评估的模型范围有限；完全自动化的生成流程可能无法覆盖所有长尾推理场景。

#

---

### 5. [Omni-Reward: Towards Generalist Omni-Modal Reward Modeling with Free-Form Preferences](/audio-paper-digest-blog/posts/2026-05-03-omni-reward-towards-generalist-omni-modal-reward)

✅ **7.0/10** | 前25% | #基准测试 | #强化学习 | #多模态模型 #偏好学习

👥 **作者与机构**

- 第一作者：Zhuoran Jin, Hongbang Yuan, Kejian Zhu (并列第一作者)
- 通讯作者：Jun Zhao
- 作者列表：
  - Zhuoran Jin (中国科学院大学人工智能学院; 中国科学院自动化研究所复杂系统认知与决策智能重点实验室)
  - Hongbang Yuan (中国科学院大学人工智能学院; 中国科学院自动化研究所复杂系统认知与决策智能重点实验室)
  - Kejian Zhu (中国科学院大学人工智能学院; 中国科学院自动化研究所复杂系统认知与决策智能重点实验室)
  - Jiachun Li (中国科学院大学人工智能学院; 中国科学院自动化研究所复杂系统认知与决策智能重点实验室)
  - Pengfei Cao (中国科学院大学人工智能学院; 中国科学院自动化研究所复杂系统认知与决策智能重点实验室)
  - Yubo Chen (中国科学院大学人工智能学院; 中国科学院自动化研究所复杂系统认知与决策智能重点实验室)
  - Kang Liu (中国科学院大学人工智能学院; 中国科学院自动化研究所复杂系统认知与决策智能重点实验室)
  - Jun Zhao (中国科学院大学人工智能学院; 中国科学院自动化研究所复杂系统认知与决策智能重点实验室)

💡 **毒舌点评**

论文在系统性和完整性上做得不错，为多模态奖励建模领域同时提供了评估基准（Omni-RewardBench）、训练数据（Omni-RewardData）和模型（Omni-RewardModel）这“三件套”，属于领域基础设施建设。然而，其核心模型（Omni-RewardModel）本身的架构创新相对有限，主要是在现有基座模型上进行微调或用标准RL训练，更多价值在于系统集成和数据工程，而非提出全新的奖励建模范式。

🔗 **开源详情**

- 代码：提供了GitHub仓库链接：https://github.com/HongbangYuan/OmniReward
- 模型权重：提到了将发布Omni-RewardModel，但未在论文中提供具体的权重下载链接。
- 数据集：提供了两个Hugging Face数据集链接：
  - Omni-RewardBench: https://huggingface.co/datasets/HongbangYuan/OmniRewardBench
  - Omni-RewardData: https://huggingface.co/datasets/jinzhuoran/OmniRewardData
- Demo：论文中未提及在线演示。
- 复现材料：提供了基准测试和数据集的详细统计信息（Tables 5-7），以及标注指南、质量控制流程等附录细节。但模型训练的超参数、硬件等关键复现细节在正文中描述不够详尽。
- 论文中引用的开源项目：主要依赖MiniCPM-o-2.6和Qwen2.5-VL作为基座模型，并提及使用了GPT-4o/GPT-4o-mini用于数据生成。

📌 **核心摘要**

1. 要解决什么问题：当前奖励模型存在两大挑战：(1) 模态不平衡，主要关注文本和图像，对视频、音频、3D等模态支持不足；(2) 偏好僵化，训练于固定的二元偏好对，难以捕捉复杂多样的个性化偏好。
2. 方法核心是什么：提出Omni-Reward统一框架，包含：(1) Omni-RewardBench：首个支持自由形式偏好标注的全模态奖励模型评测基准，覆盖5种模态、9类任务；(2) Omni-RewardData：包含248K通用偏好对和69K指令微调对的大规模多模态偏好数据集；(3) Omni-RewardModel：基于上述数据训练的判别式（BT）和生成式（R1）全模态奖励模型。
3. 与已有方法相比新在哪里：首次将奖励建模系统扩展到包含文本、图像、视频、音频、3D在内的“全模态”；首次引入自由形式的、基于文本描述的偏好标准，而非仅二元选择；构建了配套的、规模较大的多模态偏好训练数据集。
4. 主要实验结果如何：Omni-RewardModel-BT在Omni-RewardBench的“w/o Ties”设置下达到73.68%准确率，在“w/ Ties”设置下达到65.36%，均优于大多数现有模型。在VL-RewardBench等通用基准上也达到或接近SOTA水平。消融实验证明混合多模态数据和指令微调数据对性能提升至关重要。
5. 实际意义是什么：为评估和训练能够理解并遵循用户多样化、具体化偏好的全模态AI系统（如多模态对话、生成）提供了关键的基础设施（评测、数据、模型），推动了AI对齐向更复杂、更贴近现实的方向发展。
6. 主要局限性是什么：基准测试规模有限（3.7K对）；任务粒度较粗；偏好数据仅限于单轮交互；生成式模型（Omni-RewardModel-R1）的强化学习训练是初步探索；未涵盖更多模态（如热成像、雷达）。

---

### 6. [STAR-Bench: Probing Deep Spatio-Temporal Reasoning as Audio 4D Intelligence](/audio-paper-digest-blog/posts/2026-05-03-star-bench-probing-deep-spatio-temporal-reasoning)

✅ **7.0/10** | 前25% | #基准测试 | #模型评估 | #音频场景理解 #音频问答

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

- 第一作者：未说明（摘要未明确标注）
- 通讯作者：未说明（摘要未明确标注）
- 作者列表：Zihan Liu, Zhikang Niu, Qiuyang Xiao, Zhisheng Zheng, Ruoqi Yuan, Yuhang Zang, Yuhang Cao, Xiaoyi Dong, Jianze Liang, Xie Chen, Leilei Sun, Dahua Lin, Jiaqi Wang（所有作者的具体所属机构均未说明）

💡 **毒舌点评**

亮点在于直击当前音频评估体系的软肋——过度依赖文本语义，构建了一个专注于语言难以描述的“物理世界理解”能力的全新基准，定义清晰且任务设计有层次。短板则是作为一篇基准测试论文，其自身并未提出解决这些短板的模型方法，对如何弥补这些缺陷的路径阐述稍显不足，更像是“诊断书”而非“处方”。

🔗 **开源详情**

- 代码：摘要中未提及代码仓库链接。
- 模型权重：本文为基准测试论文，不涉及提出新模型，未提及模型权重。
- 数据集：论文中介绍了数据构建方法，但未明确说明是否已公开发布完整的STAR-Bench数据集及获取方式。
- Demo：未提及。
- 复现材料：摘要中描述了数据构建流程的概要（如程序化合成、四阶段流程），但未提供具体的复现配置、��参数等细节。
- 论文中引用的开源项目：摘要中未提及。

📌 **核心摘要**

这篇论文旨在解决现有音频基准测试过于依赖文本描述，无法有效评估模型对音频底层时空动态感知与推理能力的问题。为此，作者提出了“音频4D智能”的概念，并构建了STAR-Bench基准测试。STAR-Bench包含两个核心部分：基础声学感知（测试6种属性的绝对和相对判断）和整体时空推理（包含片段重排序、空间定位、多源关系及动态轨迹等任务）。基准数据通过程序化合成、物理仿真及包含人类标注的四阶段流程生成，确保高质量。实验结果显示，与仅需文本回答的基准相比，STAR-Bench导致模型性能大幅下降（时间任务-31.5%，空间任务-35.2%），证明了其聚焦于语言难以描述的细粒度线索。对19个模型的评估揭示了人类与模型间的显著差距，并形成了能力层级：闭源模型在细粒度感知上受限，开源模型则在感知、知识和推理上全面落后。该基准为未来构建具备更鲁棒物理世界理解能力的模型提供了关键洞察和明确方向。

| 模型类型/设置 | 时间任务准确率 | 空间任务准确率 |
| :--- | :--- | :--- |
| （基准设置） | （与文本基准对比的降幅） | （与文本基准对比的降幅） |
| 在STAR-Bench上评估 | -31.5% | -35.2% |

(表格根据摘要描述构建，显示STAR-Bench相对于文本基准的性能降幅)

---

### 7. [VideoMathQA: Benchmarking Mathematical Reasoning via Multimodal Understanding in Video](/audio-paper-digest-blog/posts/2026-05-03-videomathqa-benchmarking-mathematical-reasoning)

✅ **7.0/10** | 前25% | #基准测试 | #多模态模型 | #大语言模型 #音频问答

👥 **作者与机构**

- 第一作者：未说明（摘要仅列出多位作者，无法判断排序）
- 通讯作者：未说明
- 作者列表：Hanoona Abdul Rasheed（未说明）、Abdelrahman M Shaker（未说明）、Anqi Tang（未说明）、Muhammad Maaz（未说明）、Ming-Hsuan Yang（未说明）、Salman Khan（未说明）、Fahad Shahbaz Khan（未说明）

💡 **毒舌点评**

这篇论文的亮点在于瞄准了一个真正困难且实际的问题——视频中的数学推理，其构建的多步骤推理标注为细粒度能力诊断提供了宝贵工具。然而，短板也相当明显：论文摘要中完全未提供任何基准测试上的具体实验结果和对比数据，使得其宣称的“评估框架”的有效性难以判断，也让读者无法评估当前顶尖模型在此任务上的真实水平。

🔗 **开源详情**

- 代码：论文摘要中未提及代码仓库链接。
- 模型权重：未提及。
- 数据集：论文明确提出了VideoMathQA基准数据集，但关于如何公开获取、发布平台等具体信息论文摘要中未说明。
- Demo：未提及。
- 复现材料：论文摘要中未提及具体的训练细节、配置、检查点或附录说明。
- 论文中引用的开源项目：摘要中未提及任何依赖的开源工具或模型。

📌 **核心摘要**

1.  该论文要解决的问题是：如何评估模型在真实视频场景下进行复杂数学推理的能力。这与静态图像或文本的推理有本质区别，涉及对时序分散的视觉、文本、语音信息的整合与理解。
2.  方法核心是：构建一个名为VideoMathQA的基准测试集。该数据集包含来自10个数学领域的、时长从10秒到1小时以上的视频，并设计了围绕直接解题、概念迁移和深度教学理解三类核心挑战的问题，每个问题附带多步骤推理标注。
3.  与已有工作相比新在：1）专注于视频这一更复杂的多模态、时序性载体；2）明确区分了三种递进式的推理挑战；3）提供了详尽的步骤级标注以支持细粒度诊断。
4.  主要实验结果：论文摘要中未提供在VideoMathQA基准上的具体模型性能数值或对比表格。
5.  实际意义：为推动能够进行“推理”而不仅是“感知”的视频理解模型的发展提供了标准化评估平台，对教育辅助、视频内容分析等应用有潜在价值。
6.  主要局限性：作为基准测试论文，其核心局限在于未展示当前模型在该基准上的基线结果，也未讨论数据集构建过程中的具体偏见或局限性分析。

---

