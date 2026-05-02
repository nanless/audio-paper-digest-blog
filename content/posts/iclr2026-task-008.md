---
title: "ICLR 2026 - 模型评估 论文列表"
date: 2026-05-02
draft: false
tags: ["模型评估"]
categories: [iclr-2026]
description: "共 4 篇 ICLR 2026 模型评估 方向论文"
hiddenInHomeList: true
---

# ICLR 2026 - 模型评估

共 **4** 篇论文

[← 返回 ICLR 2026 总览](/audio-paper-digest-blog/posts/iclr2026-summary/)

---

| 排名 | 论文 | 评分 | 分档 |
|------|------|------|------|
| 🥇 | [AudioTrust: Benchmarking The Multifaceted Trustworthiness of](/audio-paper-digest-blog/posts/2026-05-02-audiotrust-benchmarking-the-multifaceted) | 8.5分 | 前25% |
| 🥈 | [SpeechJudge: Towards Human-Level Judgment for Speech Natural](/audio-paper-digest-blog/posts/2026-05-02-speechjudge-towards-human-level-judgment-for) | 8.0分 | 前25% |
| 🥉 | [The Deleuzian Representation Hypothesis](/audio-paper-digest-blog/posts/2026-05-02-the-deleuzian-representation-hypothesis) | 7.5分 | 前25% |
| 4. | [TTSDS2: Resources and Benchmark for Evaluating Human-Quality](/audio-paper-digest-blog/posts/2026-05-02-ttsds2-resources-and-benchmark-for-evaluating) | 7.0分 | 前25% |

---

## 📋 论文详情

### 🥇 [AudioTrust: Benchmarking The Multifaceted Trustworthiness of Audio Large Language Models](/audio-paper-digest-blog/posts/2026-05-02-audiotrust-benchmarking-the-multifaceted)

🔥 **8.5/10** | 前25% | #模型评估 | #基准测试 | #音频安全 #音频大模型

👥 **作者与机构**

- 第一作者：Kai Li（南洋理工大学， 与清华大学计算机系、AI研究院、BNRist相关）
- 通讯作者：Xinfeng Li（南洋理工大学）
- 作者列表：Kai Li（南洋理工大学）， Can Shen（北京师范大学-香港浸会大学联合国际学院）， Yile Liu（早稻田大学）， Jirui Han（独立研究者）， Kelong Zheng（华中科技大学）， Xuechao Zou（北京交通大学）， Lionel Z. Wang（南洋理工大学）， Shun Zhang（火箭军工程大学）， Xingjian Du（罗切斯特大学）， Hanjun Luo（浙江大学）， Yingbin Jin（香港理工大学）， Xinxin Xing（独立研究者）， Ziyang Ma（南洋理工大学， 上海交通大学）， Yue Liu（新加坡国立大学）， YiFan Zhang（中国科学院）， Junfeng Fang（新加坡国立大学）， Kun Wang（南洋理工大学）， Yibo Yan（香港科技大学广州）， Gelei Deng（南洋理工大学）， Haoyang Li（香港理工大学）， Yiming Li（南洋理工大学）， Xiaobin Zhuang（字节跳动）， Tianlong Chen（北卡罗来纳大学教堂山分校）， Qingsong Wen（松鼠AI学习）， Tianwei Zhang（南洋理工大学）， Yang Liu（南洋理工大学）， Haibo Hu（香港理工大学）， Zhizheng Wu（香港中文大学深圳）， Xiaolin Hu（清华大学计算机系）， Eng Siong Chng（南洋理工大学）， Wenyuan Xu（浙江大学）， XiaoFeng Wang（南洋理工大学）， Wei Dong（南洋理工大学）， Xinfeng Li（南洋理工大学）

💡 **毒舌点评**

亮点：堪称音频大模型“安全审计”的瑞士军刀，首次系统性地为ALLMs量身定制了六大可信度维度与评估工具集，填补了该领域至关重要的评估空白。
短板：评估流程高度依赖GPT-4o等LLM作为“法官”，其判定本身可能引入与音频模型相似的偏差，形成“用AI评估AI”的循环论证风险。

📌 **核心摘要**

1.  要解决什么问题：现有针对大型语言模型的可信度评估框架主要针对文本模态，无法捕捉和评估音频大语言模型（ALLMs）因音频模态（如音色、口音、背景噪声）引入的独特安全风险（如声学偏见、音频幻觉、声学社会工程攻击）。
2.  方法核心是什么：提出AudioTrust，首个针对ALLMs可信度的综合基准框架。它构建了一个包含超过4420个真实场景音频样本的数据集，设计了跨越公平性、幻觉、安全性、隐私、鲁棒性和认证六个核心维度的26个具体评估子任务，并采用基于GPT-4o和Qwen3的自动化评估管道进行可扩展、可重复的评估。
3.  与已有方法相比新在哪里：这是第一个专门为音频大模型设计的可信度评估基准。它超越了文本安全评估，首次系统性地将音频的声学特性（如情感、口音、环境音）作为核心风险源纳入评估框架，并针对这些风险设计了专门的攻击策略和评估任务。
4.  主要实验结果如何：论文对14个主流开源和闭源ALLMs进行了全面评估。主要发现包括：(1) 公平性：模型表现出严重的不公平，GPT-4o系列在决策任务中为维持准确性牺牲了公平性；(2) 幻觉：模型在检测违背物理规律和时间逻辑的音频幻觉时表现不一，且对人类易辨别的语义矛盾识别能力较弱；(3) 安全性：闭源模型整体更安全，但医疗领域仍是薄弱点；开源模型如Kimi-Audio表现出色，而OpenS2S等则非常脆弱；(4) 隐私：模型在直接内容泄露防护上较好，但从语音线索推断隐私信息（如年龄、种族）的能力极弱；(5) 鲁棒性：闭源模型（如Gemini-2.5 Pro）在噪声、多说话人等干扰下表现稳健，开源模型性能下降明显；(6) 认证：闭源模型在身份验证和混合欺骗攻击下更可靠，但声音克隆欺骗对所有模型都是挑战，严格的系统提示可提升防御能力。
    关键数据表格（公平性-表1部分结果）:
    | 模型 | 社会刻板印象公平分Γ_stereo(↑) | 决策公平分Γ_decision(↑) |
    | :--- | :---: | :---: |
    | 开源平均 | 0.192 | 0.249 |
    | Step-Fun | 0.658 | 0.505 |
    | OpenS2S | 0.017 | 0.157 |
    | 闭源平均 | 0.555 | 0.274 |
    | GPT-4o Audio | 0.926 | 0.264 |
    (注：完整表格见正文Table 1)

5.  实际意义是什么：AudioTrust为研究社区和产业界提供了一个评估、理解和改进ALLMs安全可信度的标准化工具和公开排行榜。它揭示了当前ALLMs在真实高风险场景下的边界和局限性，为开发更安全、可信的音频AI系统提供了关键的实证依据和改进方向。
6.  主要局限性是什么：(1) 评估核心依赖LLM评判器，其自身可能在音频理解上存在偏差；(2) 数据集虽力求真实，但部分通过TTS合成，可能与完全自然语音存在差距；(3) 评估维度虽已全面，但随着攻击手段的进化，新的风险维度可能被遗漏。

---

### 🥈 [SpeechJudge: Towards Human-Level Judgment for Speech Naturalness](/audio-paper-digest-blog/posts/2026-05-02-speechjudge-towards-human-level-judgment-for)

🔥 **8.0/10** | 前25% | #模型评估 | #强化学习 | #奖励模型 #大语言模型

👥 **作者与机构**

- 第一作者：Xueyao Zhang（香港中文大学（深圳））
- 通讯作者：Zhizheng Wu（香港中文大学（深圳）、深圳湾区研究院、澳门城市大学、Amphion Technology Co., Ltd）
- 作者列表：
    - Xueyao Zhang（香港中文大学（深圳））
    - Chaoren Wang（香港中文大学（深圳））
    - Huan Liao（香港中文大学（深圳））
    - Ziniu Li（香港中文大学（深圳））
    - Yuancheng Wang（香港中文大学（深圳））
    - Li Wang（香港中文大学（深圳））
    - Dongya Jia（字节跳动 Seed）
    - Yuanzhe Chen（字节跳动 Seed）
    - Xiulin Li（DataBaker Technology）
    - Zhuo Chen（字节跳动 Seed）
    - Zhizheng Wu（香港中文大学（深圳）、深圳湾区研究院、澳门城市大学、Amphion Technology Co., Ltd）

💡 **毒舌点评**

亮点：工作非常“接地气”且系统，从最基础的“数据集-基准-模型”三位一体入手，解决了语音合成对齐中缺乏大规模人类偏好数据的关键瓶颈，且承诺全部开源，这对领域发展是扎实的贡献。
短板：核心的奖励模型训练依赖闭源的Gemini-2.5-Flash生成CoT数据进行“冷启动”，其“教学”质量直接决定了“学生”GRM的上限，这使得方法的独立性和可复现性打了点折扣；同时，数据集的语言（中英）和风格覆盖仍有明显局限。

🔗 **开源详情**

- 代码：论文明确承诺将开源，代码仓库链接为 `https://github.com/AmphionTeam/SpeechJudge`。
- 模型权重：论文明确承诺将发布训练好的SpeechJudge-GRM模型检查点。
- 数据集：论文明确承诺将公开SpeechJudge-Data数据集。
- Demo：论文提供了音频样本的在线演示网站 `https://speechjudge.github.io/`。
- 复现材料：论文在正文中描述了数据集构建协议，并在附录F中提供了详尽的SFT和RL训练细节（学习率、优化器、LoRA秩、batch size等）。
- 论文中引用的开源项目：
    - 基础模型：Qwen2.5-Omni-7B
    - 教师模型（API调用）：Gemini-2.5-Flash
    - 训练工具包：ms-swift
    - TTS模型（用于生成数据）：CosyVoice2, F5-TTS, MaskGCT等
    - 评估工具：Whisper, Paraformer, WavLM, UTMOS, AASIST等

📌 **核心摘要**

1.  问题：语音合成领域缺乏大规模、以“自然度”为核心的人类偏好反馈数据集，这严重阻碍了能真正与人类感知对齐的模型的开发与评估。
2.  方法：本文提出了SpeechJudge套件，包含三部分：a) SpeechJudge-Data：使用多种先进零样本TTS模型生成语音对，并由人工标注可懂度与自然度偏好，构建了99K对的大规模数据集。b) SpeechJudge-Eval：从数据集中筛选高质量样本构成基准，用于评估模型判断语音自然度的能力。c) SpeechJudge-GRM：一个基于Qwen2.5-Omni-7B的生成式奖励模型，通过两阶段后训练（监督微调+基于人类偏好的强化学习）来提升自然度判断能力。
3.  创新性：与先前工作相比，a) 首次构建了大规模、多风格、多语言、以自然度为核心的人类偏好数据集；b) 提出了具有挑战性的自动化评估基准，并揭示了当前最佳AudioLLM（Gemini-2.5-Flash）的一致性不足70%；c) 提出的GRM模型结合了链式思维推理和推理时缩放，在性能上显著优于经典的Bradley-Terry奖励模型。
4.  主要实验结果：
    - SpeechJudge-Eval基准测试：现有指标和模型表现不佳，最强闭源模型Gemini-2.5-Flash准确率为69.1%。
    - SpeechJudge-GRM性能：经两阶段训练后，准确率达77.2%；使用推理时缩放（Voting@10）后，进一步提升至79.4%（表3）。
    - 下游应用：作为奖励模型用于语音合成模型的后训练，能有效提升生成语音的自然度（图6）；用于样本选择时，优于BTRM基线（图5）。
5.  实际意义：为语音合成的对齐与评估提供了关键基础设施（数据与基准），并证明了一个更优的奖励模型可以用于改进语音生成模型本身，形成“评估促进生成”的闭环。
6.  主要局限性：数据集和标注者群体主要集中于中英双语，对其他语言和文化背景的覆盖不足；奖励模型的能力依赖于闭源教师模型（Gemini）生成的训练数据；模型在处理极端表达风格或细微自然度差异时仍有错误。

---

### 🥉 [The Deleuzian Representation Hypothesis](/audio-paper-digest-blog/posts/2026-05-02-the-deleuzian-representation-hypothesis)

✅ **7.5/10** | 前25% | #模型评估 | #自监督学习 | #多模态模型 #可解释性

👥 **作者与机构**

- 第一作者：Clément Cornet（Université Paris-Saclay, CEA, List）
- 通讯作者：未说明（论文未明确指定通讯作者）
- 作者列表：Clément Cornet（Université Paris-Saclay, CEA, List）、Romaric Besançon（Université Paris-Saclay, CEA, List）、Hervé Le Borgne（Université Paris-Saclay, CEA, List）

💡 **毒舌点评**

亮点： 论文将哲学观点（德勒兹的“差异”概念）与严谨的判别分析框架结合，为神经网络可解释性提供了一个新颖且理论基础扎实的视角，并在涵盖视觉、语言、音频三大模态的跨模型、大规模实验中证明了其优于多种前沿稀疏自编码器（SAE）方法。
短板： 该方法的评估严重依赖于带有标签的数据集，这可能导致那些有意义但未与现有标签对齐的“概念”被低估；此外，其核心基于激活差异线性表达的假设，在面对高度非线性表征的模型时可能存在局限性。

📌 **核心摘要**

这篇论文旨在解决从神经网络中无监督地提取人类可解释“概念”这一挑战，其核心创新在于提出了一种与稀疏自编码器（SAE）不同的新方法。该方法受德勒兹哲学启发，将“概念”形式化为激活空间中捕获数据样本间差异的方向。其技术核心是无监督的判别分析：首先对激活值进行随机配对并计算差值，然后通过使用激活分布的偏度进行加权来增强多样性，并使用K均值聚类这些差异向量，从而得到一组代表“重复差异”的概念向量。与需要重建激活的SAE不同，该方法直接在激活空间中操作，允许无损的概念引导（steering）。实验在5个模型、3种模态（视觉、语言、音频）的874个属性上进行。主要结果（如表1所示）表明，该方法在探测损失（Probe Loss）指标上平均排名最优，在多个任务上显著优于各类SAE基线，并接近监督线性判别分析（LDA）的性能。例如，在CLIP的WikiArt艺术家分类任务上，该方法的探测损失为0.0119，而最优的SAE基线（Tk-SAE）为0.0125。此外，该方法提取的概念在多次运行中具有高度一致性（表2），并能成功用于模型行为引导（图3、图4）。论文的局限性在于评估依赖标签，且线性假设可能不适用于所有模型。

---

### 4. [TTSDS2: Resources and Benchmark for Evaluating Human-Quality Text to Speech Systems](/audio-paper-digest-blog/posts/2026-05-02-ttsds2-resources-and-benchmark-for-evaluating)

✅ **7.0/10** | 前25% | #模型评估 | #基准测试 | #语音合成 #多语言

👥 **作者与机构**

- 第一作者：Christoph Minixhofer（爱丁堡大学语音技术研究中心）
- 通讯作者：未说明
- 作者列表：Christoph Minixhofer（爱丁堡大学语音技术研究中心）、Ondrej Klejch（爱丁堡大学语音技术研究中心）、Peter Bell（爱丁堡大学语音技术研究中心）

💡 **毒舌点评**

亮点：论文构建了迄今最全面的TTS系统公开评测框架，涵盖20个系统、4个测试域、14种语言，并发布了超过1万条主观评分数据，这本身就是一项耗时耗力的重要基础设施贡献。短板：TTSDS2指标本身创新有限，本质是多个特征分布的Wasserstein距离集成，且计算开销大（每分需约10分钟CPU时间），其最大优势——“跨域一致性”更像是一个精心设计和调优的工程成果，而非理论突破。

🔗 **开源详情**

- 代码：提供了流水线代码仓库链接：github.com/ttsds/pipeline。
- 模型权重：TTSDS2本身是一个评估算法，不涉及模型权重。论文中评估的20个TTS系统中，大部分开源代码和权重（见表6附录A）。
- 数据集：a) 主观评测数据集：hf.co/datasets/ttsds/listening_test；b) 自动化生成的评测数据集：可通过上述流水线重建，噪声参考集在 hf.co/datasets/ttsds/noise-reference。
- Demo：提供了多语言基准排行榜网站 ttsdsbenchmark.com，可查看各系统分数。论文未提及交互式Demo。
- 复现材料：论文提供了详细的算法伪代码（算法1）、因子特征选择表（表1）、附录中的听测问卷细节（附录B）、以及所有实验数据的详细表格（附录C-H）。
- 论文中引用的开源项目：Whisper（语音识别与转录）、FastText（语言识别）、Pyannote（说话人分割）、Demucs（音乐分离）、VERSA（评估工具包）、以及所有被评测的20个TTS系统。

📌 **核心摘要**

1.  解决的问题：现有TTS评估方法（主观MOS耗时费力且不可比，客观指标在域外泛化差且与主观分相关性弱）已无法满足评估高质量、接近真人水平的现代TTS系统的需求。
2.  方法核心：提出TTSDS2，一个分布式的、因子化的客观评估指标。它从Generic、Speaker、Prosody、Intelligibility四个感知维度，提取多种特征，并计算合成语音特征分布与真实语音分布、噪声分布之间的2-Wasserstein距离，归一化后得到分数。
3.  与已有方法相比新在哪里：a) 是首个在4个差异巨大的域（干净朗读、嘈杂、野外、儿童语音）和14种语言上，都能与主观评分（MOS/CMOS/SMOS）保持 Spearman 相关系数 ρ > 0.5 的单一指标。b) 发布了一个持续更新、可自动化复现的多语言TTS评测基准和流程。c) 收集并发布了大规模、跨系统的主观评测数据集（11,282条有效评分）。
4.  主要实验结果：
    - TTSDS2在所有4个域、3类主观评分（共12个评测点）上的平均Spearman相关系数为0.67，是唯一一个在所有评测点上ρ > 0.5的指标（表3）。
    - 相比之下，其他15个指标中表现最好的Speaker Similarity类指标（RawNet3）平均相关系数为0.6，但存在域失效；MOS预测网络（SQUIM）平均为0.57。
    - 对20个开源TTS系统的排名中，TTSDS2与MOS和CMOS在Top 4和Bottom 3系统上达成一致（图2）。
5.  实际意义：为TTS社区提供了一个可靠、稳健、可自动化的跨语言、跨域评估标尺和持续更新的基准排行榜，有助于更公平、更高效地比较和推进TTS技术，尤其对评估那些声称达到“人机难辨”水平的系统至关重要。
6.  主要局限性：a) 计算成本高（CPU-bound）。b) 仍无法完全替代主观评测（最高相关系数约0.8）。c) 无法检测TTS系统可能存在的语义错误（如转录不忠实），需辅以WER等指标。d) 评估粒度为句子级别，不支持长文本。

---

