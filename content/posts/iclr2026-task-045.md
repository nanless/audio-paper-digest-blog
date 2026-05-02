---
title: "ICLR 2026 - 音频问答 论文列表"
date: 2026-05-02
draft: false
tags: ["音频问答"]
categories: [iclr-2026]
description: "共 8 篇 ICLR 2026 音频问答 方向论文"
hiddenInHomeList: true
---

# ICLR 2026 - 音频问答

共 **8** 篇论文

[← 返回 ICLR 2026 总览](/audio-paper-digest-blog/posts/iclr2026-summary/)

---

| 排名 | 论文 | 评分 | 分档 |
|------|------|------|------|
| 🥇 | [Incentivizing Consistent, Effective and Scalable Reasoning C](/audio-paper-digest-blog/posts/2026-05-02-incentivizing-consistent-effective-and-scalable) | 8.5分 | 前25% |
| 🥈 | [STAR-Bench: Probing Deep Spatio-Temporal Reasoning as Audio ](/audio-paper-digest-blog/posts/2026-05-02-star-bench-probing-deep-spatio-temporal-reasoning) | 8.5分 | 前25% |
| 🥉 | [Echo: Towards Advanced Audio Comprehension via Audio-Interle](/audio-paper-digest-blog/posts/2026-05-02-echo-towards-advanced-audio-comprehension-via) | 8.5分 | 前25% |
| 4. | [OmniVinci: Enhancing Architecture and Data for Omni-Modal Un](/audio-paper-digest-blog/posts/2026-05-02-omnivinci-enhancing-architecture-and-data-for) | 8.0分 | 前25% |
| 5. | [Seeing, Listening, Remembering, and Reasoning: A Multimodal ](/audio-paper-digest-blog/posts/2026-05-02-seeing-listening-remembering-and-reasoning-a) | 8.0分 | 前25% |
| 6. | [Can Vision-Language Models Answer Face to Face Questions in ](/audio-paper-digest-blog/posts/2026-05-02-can-vision-language-models-answer-face-to-face) | 7.5分 | 前25% |
| 7. | [Measuring Audio's Impact on Correctness: Audio-Contribution-](/audio-paper-digest-blog/posts/2026-05-02-measuring-audios-impact-on-correctness-audio) | 7.5分 | 前25% |
| 8. | [Query-Guided Spatial–Temporal–Frequency Interaction for Musi](/audio-paper-digest-blog/posts/2026-05-02-query-guided-spatialtemporalfrequency-interaction) | 7.0分 | 前25% |

---

## 📋 论文详情

### 🥇 [Incentivizing Consistent, Effective and Scalable Reasoning Capability in Audio LLMs via Reasoning Process Rewards](/audio-paper-digest-blog/posts/2026-05-02-incentivizing-consistent-effective-and-scalable)

🔥 **8.5/10** | 前25% | #音频问答 | #强化学习 | #音频大模型 #推理

👥 **作者与机构**

- 第一作者：Jiajun Fan (伊利诺伊大学厄巴纳-香槟分校 Siebel计算机与数据科学学院；实习于亚马逊)
- 通讯作者：未明确说明（论文提供了多位作者的邮箱，但未明确指定通讯作者）
- 作者列表：
    - Jiajun Fan (伊利诺伊大学厄巴纳-香槟分校；亚马逊)
    - Roger Ren (亚马逊)
    - Jingyuan Li (亚马逊)
    - Rahul Pandey (亚马逊)
    - Prashanth Gurunath Shivakumar (亚马逊)
    - Ivan Bulyko (亚马逊)
    - Ankur Gandhe (亚马逊)
    - Ge Liu (伊利诺伊大学厄巴纳-香槟分校)
    - Yile Gu (亚马逊)

#

💡 **毒舌点评**

本文最大的亮点在于精准诊断并命名了“测试时反向扩展”这一音频大模型推理的顽疾，并为此开出了“过程奖励”这剂对症良药，将强化学习的应用从粗放的结果监督提升到了精细的思维过程雕琢。然而，其方法的计算开销（需要多次采样）和奖励函数设计的复杂性，使其对资源有限的团队并不友好，且最终性能天花板仍受制于基础音频感知器的短板，这提醒我们“会思考”之前，得先“听清楚”。

#

🔗 **开源详情**

- 代码：论文中明确承诺将在论文发表后公开所有代码。当前未提供具体链接。
- 模型权重：论文中明确承诺将公开训练好的CESAR模型权重。当前未提供具体链接。
- 数据集：使用公开数据集AVQA、MMAU、MMSU等。数据增强模板在附录中提供。
- Demo：论文中未提及在线演示。
- 复现材料：提供了详尽的附录，包含超参数设置、奖励函数详细定义（关键词列表）、算法伪代码、人类评估协议等，复现指导性强。
- 引用的开源项目：基座模型Qwen2.5-Omni-7B，优化算法GRPO源自DeepSeekMath，对比基线Ke-Omni-R。

📌 **核心摘要**

1. 要解决的问题：音频大模型在引入链式思维（CoT）推理时，性能反而可能下降，出现“测试时反向扩展”现象。论文诊断其根本原因是训练不足，导致模型产生幻觉、不一致和无结构的推理过程。
2. 方法核心：提出CESAR框架，通过在线强化学习（GRPO）和多维度的推理过程奖励，将训练重点从仅验证最终答案，转向系统性地塑造和激励高质量的推理过程本身。
3. 创新点：与以往仅使用结果奖励（RLVR）的方法不同，CESAR引入了推理-答案一致性奖励、结构化推理模式与领域知识关键词奖励以及过思考惩罚等，形成了一个全面的过程监督信号体系。
4. 主要实验结果：CESAR在MMAU Test-mini基准测试上达到77.10%的准确率，超越了GPT-4o Audio (62.50%) 和 Gemini 2.5 Pro (71.60%)。在MMSU推理任务上达到81.07%，接近人类水平(86.77%)。消融实验表明各过程奖励组件贡献显著。人类评估显示，CESAR的推理过程以63.10%的胜率优于强RL基线Ke-Omni-R。
5. 实际意义：解决了音频大模型“思考反而变差”的关键问题，使得推理从负担转变为性能提升的关键杠杆，并揭示了通过测试时缩放寻找“推理甜点”的方法。
6. 主要局限性：计算资源消耗大（需要多次采样）；模型性能最终受限于基础音频感知能力（MMSU感知任务得分远低于人类）；奖励函数涉及多个超参数调优。

#

---

### 🥈 [STAR-Bench: Probing Deep Spatio-Temporal Reasoning as Audio 4D Intelligence](/audio-paper-digest-blog/posts/2026-05-02-star-bench-probing-deep-spatio-temporal-reasoning)

🔥 **8.5/10** | 前25% | #音频问答 | #基准测试 | #模型评估 #多模态模型

👥 **作者与机构**

- 第一作者：Zihan Liu（北京航空航天大学、上海AI实验室）
- 通讯作者：Yuhang Zang（上海AI实验室）、Jiaqi Wang（上海AI实验室）
- 作者列表：Zihan Liu（北京航空航天大学、上海AI实验室）， Zhikang Niu（上海交通大学、上海创新研究院）， Qiuyang Xiao（上海交通大学）， Zhisheng Zheng（上海交通大学）， Ruoqi Yuan（北京航空航天大学）， Yuhang Zang（上海AI实验室）， Yuhang Cao（上海AI实验室）， Xiaoyi Dong（上海AI实验室、香港中文大学）， Jianze Liang（上海AI实验室）， Xie Chen（上海交通大学、上海创新研究院）， Leilei Sun（北京航空航天大学）， Dahua Lin（上海AI实验室、香港中文大学）， Jiaqi Wang（上海AI实验室、上海创新研究院）

💡 **毒舌点评**

这篇论文精准地抓住了当前音频大模型“懂语义、不懂物理”的痛点，用一套精心设计的“体检套餐”（STAR-Bench）让模型们在感知灵敏度和物理推理能力上露了怯。它最大的亮点是为社区立了一个更严格的标杆，指明了从“能说会道”到“耳听八方”的进阶之路。短板则在于它主要是一份“诊断书”而非“药方”，对于如何让模型真正“听懂”多普勒效应和倒水声的变化，给出的解决方案线索有限。

🔗 **开源详情**

- 代码：论文提供了代码仓库链接：`https://github.com/InternLM/StarBench`。
- 模型权重：未提及。本文评估的是现有模型，未提出新模型。
- 数据集：论文提供了基准数据集链接：`https://huggingface.co/datasets/internlm/STAR-Bench`。
- Demo：提供了项目主页链接：`https://internlm.github.io/StarBench`，可能包含示例或更多信息。
- 复现材料：论文详细描述了数据收集流程（包括AI辅助过滤使用的提示词示例见附录B.3.1和图10/11）、人工标注流程（附录B.3.2）和鲁棒评估策略（附录C），提供了充分的复现指导。
- 论文中引用的开源项目：明确提及并使用了`Pyroomacoustics`进行空间音频仿真。评估的模型包括多个开源模型（如SALMONN， Qwen2-Audio， Audio Flamingo， Xiaomi-MiMo-Audio等）。

📌 **核心摘要**

1. 解决的问题：现有音频基准测试（如MMAU， MMAR）主要评估可通过文本描述传递的粗粒度语义信息，忽视了模型对音频中难以用语言描述的细微声学线索（如动态变化、空间线索）进行深度推理的能力。本文旨在系统评估音频模型在时间和三维空间维度上的综合推理能力，即“音频4D智能”。
2. 方法核心：提出STAR-Bench基准测试，包含两个互补层级：基础声学感知（使用程序合成音频，定量评估模型对音高、响度、时长、方位角、仰角、距离六大属性的绝对感知范围和相对辨别敏感度）和整体时空推理（使用真实世界音频，评估时序推理——如音频片段重排序，和空间推理——如单源定位、多源关系、动态轨迹跟踪）。
3. 与已有方法相比的新颖之处：(1) 正式化定义了“音频4D智能”这一评估范式；(2) 设计了层级化的任务体系，特别是时序推理要求理解物理因果和功能流程，空间推理强调对多通道信息的利用，超越了简单的事件检测；(3) 采用严格的四阶段数据收集流程，结合程序合成、AI辅助过滤和多轮人工标注与专家验证，确保数据质量。
4. 主要实验结果：对19个模型（16个开源，3个闭源）的评估显示，当前模型表现与人类差距巨大。具体数据见下表。
   | 任务类别 | 人类表现 | 最佳模型（Gemini 2.5 Pro）表现 | 开源模型最佳表现（MiDashengLM） |
   |---|---|---|---|
   | 基础声学感知（平均准确率） | 75.60% | 46.64% | 33.24% |
   | 时序推理（整体准确率） | 88.00% | 58.52% | 18.63% |
   | 空间推理（整体准确率） | 73.72% | 43.62% | 44.29% |
   消融实验显示，为Gemini 2.5 Pro提供全局描述或未切割的音频参考，能将其时序推理准确率从58.52%提升至76.33%和99.00%，但对开源模型提升甚微，暴露了后者在多音频信息整合上的根本缺陷。
5. 实际意义：STAR-Bench为评估和推动音频大模型向更鲁棒的物理世界理解发展提供了关键的诊断工具和明确的改进方向，其任务设计对未来面向具身智能的音频模型训练具有指导价值。
6. 主要局限性：基准测试主要用于“诊断”模型短板，未提出具体的模型架构或训练方法来解决这些问题；评估依赖于多选题形式，可能无法完全捕捉模型的推理过程；空间推理任务受限于当前模型普遍不支持原生多通道输入。

---

### 🥉 [Echo: Towards Advanced Audio Comprehension via Audio-Interleaved Reasoning](/audio-paper-digest-blog/posts/2026-05-02-echo-towards-advanced-audio-comprehension-via)

🔥 **8.5/10** | 前25% | #音频问答 | #强化学习 | #音频场景理解 #数据集

👥 **作者与机构**

- 第一作者：Daiqing Wu（中国科学院信息工程研究所；字节跳动）
- 通讯作者：Yangyang Kang（字节跳动），Yu Zhou（南开大学）
- 作者列表：
    - Daiqing Wu（中国科学院信息工程研究所；字节跳动；中国科学院大学）
    - Xuan Zhang（字节跳动）
    - Dongbao Yang（中国科学院信息工程研究所）
    - Jiashu Yao（字节跳动）
    - Longfei Chen（上海科技大学）
    - Qingsong Liu（字节跳动）
    - Sicheng Zhao（清华大学）
    - Can Ma（中国科学院信息工程研究所）
    - Yangyang Kang（浙江大学；字节跳动）
    - Yu Zhou（南开大学）

💡 **毒舌点评**

亮点： 论文清晰地指出了现有“音频条件化文本推理”的信息瓶颈问题，并受人类听觉认知启发，提出了“音频交错推理”这一新颖且合理的范式，通过两阶段训练框架（SFT+RL）使其落地，并在多个专家级音频理解基准上取得了SOTA性能，验证了范式的有效性。
短板： 训练数据完全依赖LLM（DeepSeek-R1）基于音频描述自动生成，其质量和与真实音频的匹配度可能存在噪声，且数据筛选过程引入了额外的不确定性；虽然提供了代码，但模型权重未公开，限制了复现和直接比较的便利性。

🔗 **开源详情**

- 代码：提供代码仓库链接：`https://github.com/wdqqdw/Echo`，包含训练代码和脚本。
- 模型权重：论文中未提及公开模型权重。
- 数据集：论文中提及构建了EAQA-SFT和EAQA-RL数据集，但未明确说明是否公开下载。训练中使用的其他数据集（AudioSet-Strong, MusicBench, AVQA）为公开数据集。
- Demo：论文中未提及在线演示。
- 复现材料：论文提供了详细的训练超参数、数据统计（附录F）、伪代码（附录D）、提示词模板（附录E）和评估设置，复现细节较为充分。
- 引用的开源项目：模型基座为`Qwen2.5-Omni`，数据合成使用了`DeepSeek-R1`，训练使用了`ms-swift`、`VERL`和`vLLM`框架。

📌 **核心摘要**

1.  解决的问题： 现有大音频语言模型（LALMs）在推理时普遍采用“一次性编码”的音频条件化文本推理，将连续音频信号压缩为静态嵌入，导致关键细节信息丢失，形成“信息瓶颈”，限制了模型处理复杂、多源音频的能力。
2.  方法核心： 提出“音频交错推理”范式，将音频作为主动推理组件。模型在推理过程中动态定位并回听关键音频片段（通过`<seg>`标签），将原始音频token插入推理上下文，形成多模态推理过程。为实现此范式，设计了两阶段训练框架：(1) 监督微调（SFT）使模型学会生成包含时间戳的音频定位推理链；(2) 强化学习（RL）通过设计的奖励函数（准确度、格式、一致性、片段奖励）优化模型的回听策略。同时，构建了一个利用LLM自动生成高质量音频问答及思维链（CoT）的数据生产流水线。
3.  创新之处： 核心创新在于提出了“音频交错推理”这一新的推理格式，改变了模型与音频交互的方式，从“思考音频”转向“用音频思考”。这与之前主要复制文本推理范式的方法有本质区别。配套的两阶段训练框架和自动化数据生成流水线也是重要贡献。
4.  主要结果： Echo模型在MMAR（平均69.99%）、MMAU-mini（平均80.41%）和MMAU（平均76.61%）等强调高级推理的音频理解基准上，取得了开源模型中的最优性能，并超越了GPT-4o-Audio和Gemini-2.0-Flash等先进商业模型。消融实验表明，音频交错推理格式、SFT数据、RL数据质量以及各奖励组件对性能提升均有贡献。下表总结了主要实验结果：

| 模型 | 类别 | MMAR Avg Acc (%) | MMAU-mini Avg Acc (%) | MMAU Avg Acc (%) |
| :--- | :--- | :--- | :--- | :--- |
| Qwen2.5-Omni (基线) | 开源基础模型 | 57.33 | 71.53 | 71.00 |
| GPT-4o-Audio | 专有模型 | 64.09 | 62.51 | 60.82 |
| Gemini-2.0-Flash | 专有模型 | 67.90 | 70.51 | 67.03 |
| Echo (本文) | 自适应模型 | 69.99 | 80.41 | 76.61 |

5.  实际意义： 为提升LALMs的复杂音频理解能力提供了一种符合认知科学、且实证有效的技术路径，特别是在需要精细时序分析和多轮音频感知的任务中（如多说话人角色映射、事件推理）。所提出的数据生成流水线对构建高质量音频训练数据也有参考价值。
6.  主要局限性： (1) 训练数据依赖于LLM的合成，其“听觉”基于文本描述而非原始音频，可能存在语义偏差和幻觉，尽管有交叉验证和过滤机制。(2) 当前的回听机制仅支持直接访问原始音频片段，未探索如慢速播放、频谱分析等更高级的“听觉”操作。(3) 模型在长音频上的泛化能力虽被提及但有待更深入验证。

---

### 4. [OmniVinci: Enhancing Architecture and Data for Omni-Modal Understanding LLM](/audio-paper-digest-blog/posts/2026-05-02-omnivinci-enhancing-architecture-and-data-for)

🔥 **8.0/10** | 前25% | #音频问答 | #多模态模型 | #音视频 #大语言模型

👥 **作者与机构**

- 第一作者：Hanrong Ye（NVIDIA）
- 通讯作者：Hongxu Yin (§†∗)， Pavlo Molchanov (§) （§ Equal Advisory, † Corresponding Authors， 均在NVIDIA）
- 作者列表：Hanrong Ye（NVIDIA）， Chao-Han Huck Yang（NVIDIA）， Arushi Goel（NVIDIA）， Wei Huang（NVIDIA）， Ligeng Zhu（NVIDIA）， Yuanhang Su（NVIDIA）， Sean Lin（NVIDIA）， An-Chieh Cheng（NVIDIA）， Zhen Wan（NVIDIA）， Jinchuan Tian（NVIDIA）， Yuming Lou（NVIDIA）， Dong Yang（NVIDIA）， Zhijian Liu（NVIDIA）， Yukang Chen（NVIDIA）， Ambrish Dantrey（NVIDIA）， Ehsan Jahangiri（NVIDIA）， Sreyan Ghosh（NVIDIA）， Daguang Xu（NVIDIA）， Ehsan Hosseini-Asl（NVIDIA）， Danial Mohseni Taheri（NVIDIA）， Vidya Murali（NVIDIA）， Sifei Liu（NVIDIA）， Yao Lu（NVIDIA）， Oluwatobi Olabiyi（NVIDIA）， Yu-Chiang Frank Wang（未说明）， Rafael Valle（NVIDIA）， Bryan Catanzaro（NVIDIA）， Andrew Tao（NVIDIA）， Song Han（NVIDIA）， Jan Kautz（NVIDIA）， Hongxu Yin§†∗（NVIDIA）， Pavlo Molchanov§（NVIDIA）。所有作者均隶属于NVIDIA。

💡 **毒舌点评**

这篇论文的亮点在于其对“全模态对齐”问题的系统性工程化拆解：提出的三个模块（OmniAlignNet, TEG, CRTE）在消融实验中表现出清晰的递进效果，且“隐式+显式”数据合成策略为解决稀缺全模态数据提供了一个可复用的思路。短板则在于，作为一篇声称“开源”的旗舰工作，其论文中对模型具体参数、训练超参数（如学习率、优化器设置）、以及核心代码仓库的链接均未明确给出，极大地影响了其声称的可复现性承诺。

🔗 **开源详情**

- 代码：论文中未提及具体的代码仓库链接。仅承诺“该项目将作为开源软件公开”。
- 模型权重：未提及是否公开预训练或微调后的模型权重。
- 数据集：未提及是否公开其构建的2400万对话数据集。
- Demo：未提及是否提供在线演示。
- 复现材料：论文在附录中提及了更详细的训练细节（Appendix D.3-D.4），但主要超参数（如学习率、批量大小）未在正文中给出。承诺公开模型架构和训练过程细节。
- 论文中引用的开源项目：论文依赖或对比了多个开源项目/模型，包括：ImageBind, CLIP, RoPE (Su et al., 2024), Magpie TTS, Whisper-large-v3, LLaVA系列, InternVL系列, Qwen系列, NVILA, VILA等。

📌 **核心摘要**

1.  要解决什么问题： 论文旨在构建一个能同时理解视觉、音频（含语音和非语音声音）和文本的“全模态”大语言模型，解决现有模型在多模态对齐（尤其是时间对齐）和数据稀缺方面的挑战。
2.  方法核心是什么： 核心是架构创新与数据工程。架构上，提出了OmniAlignNet（基于对比学习的跨模态对齐网络）、时间嵌入分组（TEG）和约束旋转时间嵌入（CRTE）三个模块，将视觉和音频嵌入对齐到统一的时空感知空间。数据上，构建了一个包含2400万对话的大规模数据集，并创新性地通过“隐式学习”（利用现有视频QA数据）和“显式学习”（通过多模型协作生成带对齐标签的合成数据）来训练模型。
3.  与已有方法相比新在哪里： 相比于简单拼接模态嵌入或仅进行语义对齐的方法，本文系统性地引入了相对时间顺序（TEG）和绝对时间信息（CRTE）编码，并利用跨模态对比学习（OmniAlignNet）在潜在空间进行显式对齐。数据层面，其“全模态数据引擎”合成流程（如图4所示）旨在解决模态特有的幻觉问题，生成更准确的联合描述。
4.  主要实验结果如何： OmniVinci在多个基准测试上达到了领先水平。与最强基线Qwen2.5-Omni相比，在DailyOmni（跨模态理解）上提升+19.05分，在MMAR（音频）上提升+1.7分，在Video-MME（视觉）上提升+3.9分。关键的是，它仅使用了0.2T训练token，相比Qwen2.5-Omni的1.2T token，训练效率提升了6倍。具体数据见下表及图表：

| 模型/方法 | Omni (平均) | WorldSense (↑) | Dailyomni (↑) | Omnibench (↑) | MMAR (↑) | Video-MME w/o sub. (↑) |
| :--- | :---: | :---: | :---: | :---: | :---: | :---: |
| Qwen2.5-Omni | 49.66 | 45.40 | 47.45 | 56.13 | 56.70 | 70.3 |
| OmniVinci | 53.73 | 48.23 | 66.50 | 46.47 | 58.40 | 70.6 |
| OmniVinci + RL | 54.52 | 48.70 | 67.08 | 47.79 | - | - |

![OmniVinci 在基准测试上的性能概览](icassp-img://DZeic3NpHy/0.jpg)
图1展示了OmniVinci在全模态、音频和视觉理解基准测试上相对于其他模型的性能比较，直观显示了其在跨模态理解任务（Dailyomni）上的显著优势。

![OmniVinci 模型架构](icassp-img://DZeic3NpHy/1.jpg)
图2展示了OmniVinci的架构：视觉、音频和文本输入分别经过编码器和投影层，再通过OmniAlignNet模块和所提出的时间编码技术（TEG, CRTE）融合成统一的“全模态嵌入序列”，最后输入LLM。

5.  实际意义是什么： 该工作为构建高效、强大的全模态理解模型提供了一个系统化的架构和数据解决方案。其展示的下游应用（如机器人语音导航、体育视频理解、医疗分析、半导体工厂监控）证明了全模态理解在实际场景中的广泛应用潜力。
6.  主要局限性是什么： 论文在关键的可复现性细节上存在缺失，如模型具体参数、训练超参数配置、核心代码和模型权重的公开链接均未在文中明确给出。此外，虽然展示了广泛的下游应用，但部分应用（如医疗、半导体）的实验规模和深度相对有限。

---

### 5. [Seeing, Listening, Remembering, and Reasoning: A Multimodal Agent with Long-Term Memory](/audio-paper-digest-blog/posts/2026-05-02-seeing-listening-remembering-and-reasoning-a)

🔥 **8.0/10** | 前25% | #音频问答 | #多模态模型 | #强化学习 #长期记忆

👥 **作者与机构**

- 第一作者：Lin Long（浙江大学）
- 通讯作者：Yuan Lin（字节跳动Seed）
- 作者列表：
    - Lin Long（浙江大学）, Yichen He（字节跳动Seed）, Wentao Ye（浙江大学）, Yiyuan Pan（卡内基梅隆大学Robotics Institute）, Yuan Lin（字节跳动Seed，通讯作者）, Hang Li（字节跳动Seed）, Junbo Zhao（浙江大学）, Wei Li（字节跳动Seed）

💡 **毒舌点评**

亮点： 该工作构建了一个从“感知（看/听）”到“记忆（构建实体中心图谱）”再到“推理（多轮检索与回答）”的完整类人闭环框架，并为此贡献了首个侧重记忆推理能力的长视频问答基准（M3-Bench），系统性很强。短板： 记忆构建模块严重依赖外部的人脸识别、说话人分离等工具，其鲁棒性和端到端的可训练性未充分探讨；此外，所采用的DAPO强化学习训练需要极高的计算资源（未说明具体成本），可能限制其广泛复现。

🔗 **开源详情**

- 代码：论文中提到代码将开源，提供了GitHub仓库链接：https://github.com/ByteDance-Seed/m3-agent。
- 模型权重：承诺发布记忆化模型（memory-7b-sft）和控制模型（control-32b-rl）的检查点。
- 数据集：承诺发布完整的M3-Bench基准，包括视频和问答标注。
- Demo：论文中未提及在线演示。
- 复现材料：论文承诺提供训练数据、代码、训练细节（包括超参数表）和附录说明。附录中详细列出了记忆节点的数据结构、工具实现、示范数据合成流程等关键复现信息。
- 引用的开源项目：论文中引用的依赖项目包括InsightFace（人脸识别）、ERes2NetV2（说话人验证模型）、OpenAI的文本嵌入模型（text-embedding-3-large），以及作为基础模型的Qwen2.5-Omni和Qwen3。

📌 **核心摘要**

1.  问题：现有长视频理解方法多为离线处理有限长视频，且关注低层感知而非高层知识积累；智能体缺乏像人类一样在持续交互中构建和利用长期记忆进行推理的能力。
2.  方法：提出M3-Agent框架，包含并行工作的记忆化与控制流程。记忆化流程持续处理视频流，生成情景记忆（具体事件）和语义记忆（如人物身份、属性、关系），并以实体为中心的图谱进行组织。控制流程根据指令，通过强化学习（DAPO）训练的策略模型，自主进行多轮推理并检索记忆图谱来完成任务。
3.  新意：1) 提出模拟人类记忆机制的、实体中心化的多模态长期记忆架构；2) 设计基于强化学习的多轮检索推理控制策略；3) 构建首个评估记忆能力的多模态智能体基准M3-Bench。
4.  结果：在M3-Bench-robot、M3-Bench-web和VideoMME-long三个基准上，M3-Agent均优于最强基线。例如，在M3-Bench-robot上比最强基线（MA-LMM）高6.3%，在M3-Bench-web上比Gemini-GPT4o-Hybrid高7.7%。消融实验证明了长期记忆（尤其是语义记忆）和强化学习训练的关键作用。
    | 方法 | M3-Bench-robot | M3-Bench-web | VideoMME-Long |
    | :--- | :---: | :---: | :---: |
    | MA-LMM (在线视频理解最佳) | 24.4 | 24.3 | 17.3 |
    | Gemini-GPT4o-Hybrid (混合Agent最佳) | 24.0 | 41.2 | 56.5 |
    | M3-Agent | 30.7 | 48.9 | 61.8 |
5.  意义：为构建具备长期记忆和推理能力的多模态智能体提供了新的框架思路和评估标准，推动智能体从“单次感知”向“经验积累”进化。
6.  局限：记忆模块依赖外部预训练工具（人脸识别、说话人分离）；强化学习训练成本高昂；记忆图谱的规模化管理和高效检索策略有待进一步研究。

---

### 6. [Can Vision-Language Models Answer Face to Face Questions in the Real-World?](/audio-paper-digest-blog/posts/2026-05-02-can-vision-language-models-answer-face-to-face)

✅ **7.5/10** | 前25% | #音频问答 | #基准测试 | #数据集 #流式处理

👥 **作者与机构**

- 第一作者：Reza Pourreza（Qualcomm AI Research）
- 通讯作者：未说明
- 作者列表：Reza Pourreza（Qualcomm AI Research），Rishit Dagli（University of Toronto，实习于Qualcomm AI Research），Apratim Bhattacharyya（Qualcomm AI Research），Sunny Panchal（Qualcomm AI Research），Guillaume Berger（Qualcomm AI Research），Roland Memisevic（Qualcomm AI Research）

💡 **毒舌点评**

这篇论文犀利地戳破了“多模态模型已懂交流”的泡沫，用精心设计的QIVD数据集证明，让AI像人一样“边看边听边聊”还差得远，尤其是在把握“回答时机”和理解动态动作上。遗憾的是，其提出的流式处理基线（拼接ASR和视频LLM）更像是权宜之计，而非优雅的端到端解决方案，这或许暗示了当前模型架构的根本性局限。

🔗 **开源详情**

- 代码：论文中未提及公开的代码仓库链接。
- 模型权重：评估中使用了多个公开的预训练模型权重（如VideoLLaMA系列、Qwen系列、GPT-4o等）。论文本身贡献的微调模型权重（如微调后的VideoLLaMA2.1-7B-FT-AV， Stream-Qwen-Omni）未明确说明是否公开。
- 数据集：QIVD数据集已提供访问链接（`qualcomm.com/developer/software/qualcomm-interactive-video-dataset-qivd`），应为公开可用。
- Demo：论文中未提及在线演示。
- 复现材料：提供了详尽的附录，包含训练超参数（表D.2）、模型模块冻结/训练状态（表D.1）、评估用的LLM裁判提示词（表D.3, D.4）、GPT-4o的提示词（表D.5）以及对数据集语义分类的详细定义，复现材料非常充分。
- 引用的开源项目：引用了Whisper, Whisper-Streaming, Cosmos-Tokenizer, BEATs, SigLIP等开源工具或模型作为技术组件。
- 开源计划：论文中未明确提及后续开源代码的计划。

📌 **核心摘要**

1.  解决的问题：现有大型多模态模型（LMM）虽然能描述图片、回答静态问题，但在需要结合实时视频和音频流进行情境化问答时表现不佳。它们难以整合多模态信息来理解指代（如“这个”）、判断动态事件，并且最关键的是，不知道“何时”回答。
2.  方法核心：提出了一个全新的数据集和基准——Qualcomm Interactive Video Dataset (QIVD)。该数据集通过众包收集，参与者用手机边拍视频边提出开放性问题，数据集包含原始视频、音频、问题的文字转录、答案以及至关重要的“最佳回答时机”时间戳。
3.  与已有方法的对比新意：与现有离线视频问答数据集不同，QIVD强制模型处理在线、实时、自包含的问答场景。它不仅评估模型能否“答对”，更评估其能否在动态场景中“听懂”问题并在信息充分时“恰当地”作答，这是对模型情境理解和时序推理能力的直接测试。
4.  主要实验结果：
    *   人类表现：在子集上人类正确率约为87.3%。
    *   模型表现：最强的开源模型（如VideoLLaMA3-7B）在提供完美问题和时机的离线设置下正确率仅为56.4%；最强闭源模型（GPT-4o）正确率为58.8%，远低于人类。
    *   时机至关重要：使用模型自身预测的“最佳回答时机”（Stream-Qwen-Omni）会比使用固定时机（如问题结束时）显著提升性能，但仍然存在误差。
    *   音频的作用：直接使用音频信息并不总是能提升性能，但经过在QIVD上微调后，模型能有效利用音频，特别是在主观、动作计数等任务上提升巨大（如主观任务+23.26%，动作计数+16.96%）。
    *   关键差距：模型在“动作计数”、“音视频理解”、“物体指代”等需要时序推理和跨模态理解的任务上，与人类差距最大。
5.  实际意义：为构建能够与人类进行实时视频通话的AI助手、人形机器人或远程协作系统提供了关键的评估基准和瓶颈分析，明确了未来模型需要突破的方向。
6.  主要局限性：数据集规模（2900个视频）和类别多样性有限；数据主要来自众包的日常场景，可能缺乏专业或复杂场景；研究的“流式基线”方法本质上是模块化拼接，而非真正的端到端实时系统。

---

### 7. [Measuring Audio's Impact on Correctness: Audio-Contribution-Aware Post-Training of Large Audio Language Models](/audio-paper-digest-blog/posts/2026-05-02-measuring-audios-impact-on-correctness-audio)

✅ **7.5/10** | 前25% | #音频问答 | #强化学习 | #音频大模型 #数据集

👥 **作者与机构**

- 第一作者：Haolin He（香港中文大学、蚂蚁集团）
- 通讯作者：Jian Liu（蚂蚁集团， rex.lj@antgroup.com）、Qiuqiang Kong（香港中文大学， qqkong@ee.cuhk.edu.hk）
- 作者列表：Haolin He（香港中文大学、蚂蚁集团）、Xingjian Du（罗切斯特大学）、Renhe Sun（蚂蚁集团）、Zheqi Dai（香港中文大学）、Yujia Xiao（香港中文大学）、Mingru Yang（蚂蚁集团）、Jiayi Zhou（蚂蚁集团）、Xiquan Li（上海交通大学）、Zhengxi Liu（香港中文大学）、Zining Liang（香港中文大学）、Chunyat Wu（香港中文大学）、Qianhua He（华南理工大学）、Tan Lee（香港中文大学）、Xie Chen（上海交通大学）、Wei-Long Zheng（上海交通大学）、Weiqiang Wang（蚂蚁集团）、Mark Plumbley（伦敦国王学院）、Jian Liu（蚂蚁集团）、Qiuqiang Kong（香港中文大学）

💡 **毒舌点评**

亮点在于敏锐地抓住了音频问答模型“偷懒”不听音频的“零音频贡献”问题，并巧妙地将此“缺陷”转化为训练策略设计的依据（Weak-to-Strong），结果亮眼。短板则是整个方法链条严重依赖强大的生成式AI（Qwen3-235B）来构建数据集和进行质量过滤，这多少有点“用魔法打败魔法”，其生成质量的天花板可能直接决定了本方法的天花板。

🔗 **开源详情**

- 代码：论文中未提及代码仓库链接。
- 模型权重：论文未提及是否公开本次实验微调后的模型权重。所使用的基础模型（Qwen2.5-Omni）和评估模型（A-Flamingo2, R1-AQA, Kimi-Audio）均为已公开的模型。
- 数据集：AudioMCQ是本文构建的数据集，论文中描述了构建方法和组成，但未明确提供数据集的公开下载链接或获取方式。
- Demo：论文中未提及在线演示。
- 复现材料：提供了详细的超参数配置表（表6，表7）、训练策略说明、评估提示模板（附录B）和质量验证流程（附录C），复现细节较为充分。
- 论文中引用的开源项目：Qwen3-235B（用于数据生成）、Qwen2.5-Omni（骨干模型）、A-Flamingo2、R1-AQA、Kimi-Audio（用于ACF评估）、GRPO（训练方法）、DeepSpeed ZeRO-2（优化器）。
- 开源计划：论文中未提及明确的开源计划。

📌 **核心摘要**

1.  解决的问题：大型音频语言模型（LALMs）的多阶段后训练（如SFT后接RL）效果不佳，缺乏针对性的高质量数据集，且普遍存在“零音频贡献”现象（模型仅凭文本信息即可答对，无需听音频）。
2.  方法核心：首先构建了大规模音频选择题数据集AudioMCQ（571k样本）。其次，提出音频贡献过滤（ACF）方法，利用多个模型在“静音”输入下的正确率，将数据分为“弱音频贡献”和“强音频贡献”子集。最后，基于此提出两种训练范式：Weak-to-Strong（SFT用弱音频贡献数据，GRPO用强音频贡献数据）和Mixed-to-Strong（SFT用混合数据，GRPO用强音频贡献数据）。
3.  创新性：1) 构建了首个大规模、带思维链注释的音频选择题数据集；2) 系统性地量化并分析了LALMs中的零音频贡献现象及其类型（显式逻辑推理与隐式知识检索）；3) 基于音频贡献度提出了简单有效的后训练数据分配策略。
4.  实验结果：使用Weak-to-Strong策略，在MMAU-test-mini和MMAU上分别达到78.2%和75.6%；使用Mixed-to-Strong策略，在MMAR和MMSU上分别达到67.0%和71.7%，均为开源模型SOTA。具体结果见表5及下表：

| 方法 | MMAU-test-mini | MMAU | MMAR | MMSU |
| :--- | :---: | :---: | :---: | :---: |
| Weak-to-Strong | 78.2% | 75.6% | 65.3% | 69.3% |
| Mixed-to-Strong | 76.4% | 75.1% | 67.0% | 71.7% |
| 所有数据 SFT | 75.2% | 75.0% | 64.6% | 64.0% |
| 所有数据 GRPO | 78.1% | 75.4% | 63.0% | 70.2% |
| GPT4o-Audio (基线) | 62.5% | 60.8% | 63.5% | 56.4% |

5.  实际意义：为音频大模型后训练提供了可复现的数据构建方案和高效的数据分配策略，揭示了当前评估基准中可能存在的“伪音频理解”问题。
6.  主要局限性：数据集构建完全依赖一个强大的大语言模型（Qwen3-235B），可能引入偏差；ACF方法依赖三个特定的现成模型；Weak-to-Strong范式在MMAR/MMSU上弱于Mixed-to-Strong，表明其普适性有待验证。

---

### 8. [Query-Guided Spatial–Temporal–Frequency Interaction for Music Audio–Visual Question Answering](/audio-paper-digest-blog/posts/2026-05-02-query-guided-spatialtemporalfrequency-interaction)

✅ **7.0/10** | 前25% | #音频问答 | #多模态模型 | #时频分析 #跨模态

👥 **作者与机构**

- 第一作者：Kun Li (University of Twente, Netherlands; 工作完成于 IT University of Copenhagen, Denmark)
- 通讯作者：Sami Sebastian Brandt (IT University of Copenhagen, Denmark)
- 作者列表：Kun Li（University of Twente， IT University of Copenhagen）、Michael Ying Yang（University of Bath）、Sami Sebastian Brandt（IT University of Copenhagen）

#

💡 **毒舌点评**

亮点：本文最大的优点在于“系统性”和“针对性”——它没有孤立地提出一个模块，而是构建了一个从早期查询引导到中期时空频交互、再到后期上下文推理的完整流水线，并且为每个阶段都找到了扎实的动机（例如，用频率特征解决视觉模糊问题）。短板：尽管在总分上超越了前作，但在Visual QA（特别是位置相关问题）子任务上仍略逊于使用了对象检测器等先验知识的方法（如QA-TIGER），这暗示其“纯频率视角”在需要精细空间推理的场景中可能存在天花板，创新性更多体现在对已知技术的巧妙整合与优化上。

#

🔗 **开源详情**

- 代码：论文明确提供了代码仓库链接：https://github.com/lik1996/QSTar。
- 模型权重：论文未明确提及是否公开预训练模型权重。
- 数据集：实验主要基于公开的MUSIC-AVQA和AVQA数据集，论文中提供了数据集的基本信息和来源引用。
- Demo：论文中未提及在线演示。
- 复现材料：论文在附录和实验部分详细说明了训练设置（优化器、学习率、batch size、epoch数）、模型配置（特征维度、所用预训练模型）和硬件环境（NVIDIA H100 GPU），提供了充分的复现信息。
- 引用的开源项目：依赖的开源项目/模型包括：CLIP（视觉和文本特征提取）、VGGish（音频特征提取）、AST（频率音频特征提取）、Token Merging（视觉token压缩）。

📌 **核心摘要**

1.  问题：现有音视频问答（AVQA）方法主要关注视觉处理，音频仅作为补充，且文本问题信息通常在最后阶段才融合，导致音视频对齐不充分，难以处理视觉线索微弱（如乐手动作细微）但音频特征鲜明的音乐场景。
2.  方法核心：提出了查询引导的空间-时间-频率交互（QSTar）框架。核心包括三个模块：1）查询引导多模态关联模块（QGMC），在早期利用问题特征分别增强音频和视觉表征；2）空间-时间-频率交互模块（STFI），在空间和时间维度上增强视觉，并引入AST模型提取频率特征，在时间-频率维度上增强音频；3）查询上下文推理块（QCR），通过提示注入任务相关的语言上下文，指导最终融合与预测。
3.  创新点：a) 将查询引导从“后期融合”提前至“全程引导”，从特征学习阶段就开始模态特异性优化；b) 引入频率域建模（通过AST），明确利用乐器独特的频谱指纹来区分听觉相似但视觉不同的事件；c) 设计基于提示的查询上下文推理，为最终决策提供结构化的语言约束。
4.  主要实验结果：在MUSIC-AVQA基准测试上，QSTar平均准确率达到78.98%，超越之前最佳方法QA-TIGER（77.62%）1.36个百分点。具体地，在Audio QA（尤其是比较类问题）和Audio-Visual QA（尤其是比较和时序类问题）上提升显著，分别高出QA-TIGER 2.05%和2.24%。消融研究证实，移除任一主要模块（QGMC, STI, TFI, QCR）或任何阶段的查询引导都会导致性能下降。
5.  实际意义：该方法推动了在音视频理解任务中，如何更深度、更早期地融合语言查询信息，以及如何有效利用音频的频域特性，为处理类似多模态问答任务提供了新的设计思路。
6.  主要局限性：a) 在需要精确空间定位的Visual QA子任务上，性能仍略低于使用了专门视觉感知模块（如对象检测）的方法；b) 当前模型处理固定长度视频片段，可能难以直接扩展到需要长时记忆的更长视频；c) 频率域建模目前仅应用于音频，未探索视觉信号的频率域处理（如微动作捕捉）。

#

---

