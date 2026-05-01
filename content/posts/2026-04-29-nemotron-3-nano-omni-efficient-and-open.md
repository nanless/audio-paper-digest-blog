---
title: "Nemotron 3 Nano Omni: Efficient and Open Multimodal Intelligence"
date: 2026-04-29
draft: false
tags: [多模态模型, 混合专家, 跨模态, 强化学习, 模型评估]
categories: [论文速递]
description: "多模态模型 | 8.5/10"
hiddenInHomeList: true
---

# 📄 Nemotron 3 Nano Omni: Efficient and Open Multimodal Intelligence

#多模态模型 #混合专家 #跨模态 #强化学习 #模型评估

🔥 **8.5/10** | 前25% | #多模态模型 | #混合专家 | #跨模态 #强化学习 | [arxiv](https://arxiv.org/abs/2604.24954)

学术质量 6.0/7 | 选题价值 1.5/2 | 复现加成 0.8 | 置信度 高


### 👥 作者与机构

- 第一作者：Amala Sanjay Deshmukh（NVIDIA）
- 通讯作者：未说明
- 作者列表：Amala Sanjay Deshmukh, Kateryna Chumachenko, Tuomas Rintamaki, Matthieu Le, Tyler Poon, Danial Mohseni Taheri, Ilia Karmanov, Guilin Liu, Jarno Seppanen, Arushi Goel, Mike Ranzinger, Greg Heinrich, Guo Chen, Lukas Voegtle, Philipp Fischer, Timo Roman, Karan Sapra, Collin McCarthy, Shaokun Zhang, Fuxiao Liu, Hanrong Ye, Yi Dong, Mingjie Liu, Yifan Peng, Piotr Zelasko, Zhehuai Chen, Nithin Rao Koluguri, Nune Tadevosyan, Lilit Grigoryan, Ehsan Hosseini Asl, Pritam Biswas, Leili Tavabi, Yuanhang Su, Zhiding Yu, Peter Jin, Alexandre Milesi, Netanel Haber, Yao Xu, Sarah Amiraslani, Nabin Mulepati, Eric Tramel, Jaehun Jung, Ximing Lu, Brandon Cui, Jin Xu, Zhiqi Li, Shihao Wang, Yuanguo Kuang, Shaokun Zhang, Huck Yang, Boyi Li, Hongxu Yin, Song Han, Pavlo Molchanov, Adi Renduchintala, Charles Wang, David Mosallanezhad, Soumye Singhal, Luis Vega, Katherine Cheung, Sreyan Ghosh, Yian Zhang, Alexander Bukharin, Venkat Srinivasan, Johnny Greco, Andre Manoel, Maarten Van Segbroeck, Suseella Panguliri, Rohit Watve, Divyanshu Kakwani, Shubham Pachori, Jeffrey Glick, Radha Sri-Tharan, Aileen Zaman, Khanh Nguyen, Shi Chen, Jiaheng Fang, Qing Miao, Wenfei Zhou, Yu Wang, Zaid Pervaiz Bhat, Varun Praveen, Arihant Jain, Ramanathan Arunachalam, Tomasz Kornuta, Ashton Sharabiani, Amy Shen, Wei Huang, Yi-Fu Wu, Ali Roshan Ghias, Huiying Li, Brian Yu, Nima Tajbakhsh, Chen Cui, Wenwen Gao, Li Ding, Terry Kong, Manoj Kilaru, Anahita Bhiwandiwalla, Marek Wawrzos, Daniel Korzekwa, Pablo Ribalta, Grzegorz Chlebus, Besmira Nushi, Ewa Dobrowolska, Maciej Jakub Mikulski, Kunal Dhawan, Steve Huang, Jagadeesh Balam, Yongqiang Wang, Nikolay Karpov, Valentin Mendelev, George Zelenfroynd, Meline Mkrtchyan, Qing Miao, Omri Almog, Bhavesh Pawar, Rameshwar Shivbhakta, Sudeep Sabnis, Ashrton Sharabiani, Negar Habibi, Geethapriya Venkataramani, Pamela Peng, Prerit Rodney, Serge Panev, Richard Mazzarese, Nicky Liu, Michael Fukuyama, Andrii Skliar, Roger Waleffe, Duncan Riach, Yunheng Zou, Jian Hu, Hao Zhang, Binfeng Xu, Yuhao Yang, Zuhair Ahmed, Alexandre Milesi, Carlo del Mundo, Chad Voegele, Zhiyu Cheng, Nave Assaf, Andrii Skliar, Daniel Afrimi, Natan Bagrov, Ran Zilberstein, Ofri Masad, Eugene Khvedchenia, Natan Bagrov, Borys Tymchenko, Tomer Asida, Daniel Afrimi, Parth Mannan, Victor Cui, Michael Evans, Katherine Luna, Jie Lou, Pinky Xu, Guyue Huang, Negar Habibi, Michael Boone, Pradeep Thalasta, Adeola Adesoba, Dina Yared, Christopher Parisien, Leon Derczynski, Shaona Ghosh, Wes Feely, Micah Schaffer, Radha Sri-Tharan, Jeffrey Glick, Barnaby Simkin, George Zelenfroynd, Tomasz Grzegorzek, Rishabh Garg, Aastha Jhunjhunwala, Sergei Kolchenko, Farzan Memarian, Haran Kumar, Shiv Kumar, Isabel Hulseman, Anjali Shah, Kari Briski, Padmavathy Subramanian, Joey Conway, Udi Karpas, Jane Polak Scowcroft, Annie Surla, Shilpa Ammireddy, Ellie Evans, Jesse Oliver, Tom Balough, Chia-Chih Chen, Sandip Bhaskar, Alejandra Rico, Bardiya Sadeghi, Seph Mard, Katherine Cheung, Meredith Price, Laya Sleiman, Saori Kaji, Wesley Helmholz, Wendy Quan, Michael Lightstone, Jonathan Cohen, Jian Zhang, Oleksii Kuchaiev, Boris Ginsburg, Jan Kautz, Eileen Long, Mohammad Shoeybi, Mostofa Patwary, Oluwatobi Olabiyi, Andrew Tao, Bryan Catanzaro, Udi Karpas（均来自NVIDIA）

### 💡 毒舌点评

NVIDIA用一套极其工程化、标准化的“组合拳”把文本、视觉、音频模型缝合成了一个高效且性能可观的“全家桶”，开源力度也极大，堪称工业界的模范作业。但其核心创新更像是在现有强大组件（MoE、C-RADIOv4、Parakeet）上的系统整合与优化，缺乏一种能改写多模态游戏规则的架构或算法层面的根本性突破。

### 🔗 开源详情

- 代码：提供了训练代码仓库链接：Megatron-Bridge (https://github.com/NVIDIA/Megatron-LM 相关) 和 NeMo RL guide。数据生成管道示例也开源：https://github.com/NVIDIA-NeMo/DataDesigner/tree/main/docs/assets/recipes/vlm_long_doc。
- 模型权重：在HuggingFace上公开了三种格式的模型权重：
  - Nemotron-3-Nano-Omni-30B-A3B-Reasoning-BF16
  - Nemotron-3-Nano-Omni-30B-A3B-Reasoning-FP8
  - Nemotron-3-Nano-Omni-30B-A3B-Reasoning-NVFP4
- 数据集：开源了部分训练数据集 Nemotron-Image-Training-v3，包含约6.9M个训练样本。
- Demo：论文中未提及在线演示（Demo）。
- 复现材料：提供了极其详细的训练阶段描述（SFT 7个阶段+RL多个阶段）、超参数配置表（表6）、数据集组成表（表1-5）、量化方案、以及评估框架（VLMEvalKit， NeMo-Skills）。
- 引用的开源项目：论文中引用了其依赖的多个开源模型或框架，包括：C-RADIOv4-H视觉编码器、Parakeet-TDT-0.6B-v2音频编码器、Nemotron 3 Nano 30B-A3B LLM骨干、Megatron-LM、Transformer Engine、Megatron Energon、vLLM、VLMEvalKit、NeMo-Skills，以及用于数据生成的Qwen3-VL/Qwen3.5、GPT-OSS、Nemotron-Parse、DeepSeek-OCR等模型。


### 📌 核心摘要

1.  要解决什么问题：构建一个高效、开源、能原生处理文本、图像、视频和音频输入的多模态模型，使其在现实世界的文档理解、长音视频理解和智能体操作等任务上表现更优，并提升推理效率。
2.  方法核心是什么：采用编码器-投影器-解码器架构，以Nemotron 3 Nano 30B-A3B（一种混合专家模型）为语言模型骨干，集成C-RADIOv4-H视觉编码器和Parakeet-TDT-0.6B-v2音频编码器，并通过多模态MLP投影器连接。训练采用分阶段、渐进式的策略，逐步引入新模态和扩展上下文长度，并结合多轮强化学习进行优化。
3.  与已有方法相比新在哪里：
    *   骨干升级：从密集的12B模型升级为30B-A3B的MoE混合架构，提升处理长序列和多模态的效率。
    *   原生音频支持：首次在该系列模型中支持音频输入。
    *   动态图像分辨率：采用更灵活的动态分辨率策略，替代基于平铺的方法，更好地保留原始图像宽高比。
    *   时序视频压缩：引入基于Conv3D的时序压缩，将视频的时序token数量减少2倍。
    *   超长上下文：最大上下文长度从128K扩展至256K token。
    *   高效推理技术：提出了EVS（高效视频采样）等token压缩技术，大幅降低推理延迟和成本。
4.  主要实验结果如何：该模型在文档理解（OCRBench-V2）、长音视频理解（WorldSense, DailyOmni）、语音交互（VoiceBench）等多个基准测试中取得了领先或接近领先的成绩。在推理效率上，在NVIDIA B200上单流输出吞吐量是Qwen3-Omni的3倍，固定交互性目标下吞吐量高出9倍。与前代模型Nemotron Nano V2 VL相比，在相同交互目标下吞吐量高3倍，单流吞吐量高2倍。关键数据见下表（节选自论文表7和表8）：
    | 任务类别 | 基准测试 | Nemotron 3 Nano Omni (Reasoning on) | Qwen3-Omni (Thinking) | 说明 |
    | :--- | :--- | :--- | :--- | :--- |
    | 视觉理解 | MMMU (val) | 70.8 | 76.9 | |
    | | OCRBench-V2 (EN) | 67.0 | - | 论文未提供Qwen3-Omni具体数值 |
    | | MMLongBench-Doc | 57.5 | 53.6 | 超过Qwen3-Omni |
    | | ChartQA (Test) | 90.3 | - | |
    | | DocVQA (Test) | 95.6 | - | |
    | | ScreenSpot-Pro | 57.8 | 5.5 | 显著超过Qwen3-Omni |
    | | OSWorld | 47.4 | 29.0 | 显著超过Qwen3-Omni |
    | | VideoMME (w/o sub) | 72.2 | 77.0 | |
    | 音频理解 | OpenASR Avg (WER↓) | 5.95 | 6.55 | 优于Qwen3-Omni |
    | | VoiceBench Avg | 89.4 | 88.8 (Qwen3-Omni) | 优于Qwen3-Omni |
    | 音视频理解 | DailyOmni | 74.1 | 73.6 | 优于Qwen3-Omni |
    | | WorldSense | 55.4 | 54.0 | 优于Qwen3-Omni |
5.  实际意义是什么：提供了一个性能强大且高效、开源的多模态模型，降低了部署成本，有望推动多模态AI在文档分析、内容创作、人机交互等领域的实际应用，并为社区研究提供了优质的基础模型和大量开源资源（模型、数据、代码）。
6.  主要局限性是什么：1. 模型的创新更多体现在系统集成和工程优化上，在多模态融合的架构或算法层面缺乏根本性创新；2. 训练依赖海量数据（总计约467B tokens）和大量GPU资源（32-128个H100节点），复现门槛极高；3. 部分SOTA声明基于特定基准（如ScreenSpot-Pro），在更通用的多模态任务上并非全面超越所有竞争对手（如MMMU）。

### 🏗️ 模型架构

模型整体遵循编码器-投影器-解码器的设计模式。核心组件包括：

1.  语言模型骨干 (LLM Backbone)：采用 Nemotron 3 Nano 30B-A3B，这是一个基于混合专家（MoE）的混合架构（结合了Transformer和类似Mamba的结构）。其总参数量约为30B，但每个token只激活约3B参数（A3B），这使其在处理长序列时具有高吞吐量和效率。

2.  视觉编码器 (Vision Encoder)：使用 C-RADIOv4-H，这是一个专为视觉理解设计的编码器。它处理输入的图像和视频帧。对于图像，采用动态分辨率策略：将图像分解为16x16的patch块，总数限制在1024到13312个token之间（对应约512x512到1840x1840的图像大小）。在投影前，应用4x下采样的像素洗牌（pixel shuffle）操作，减少token数量。

3.  音频编码器 (Audio Encoder)：初始化使用 Parakeet-TDT-0.6B-v2，这是一个基于FastConformer的编码器。音频输入被重采样为16kHz单声道，先计算对数梅尔谱图特征（10ms跳数），然后通过三层步长为2的卷积子采样，实现约8倍的时间下采样，最终产生约每秒12.5个token（即约80ms/token）。音频流被分割成30秒的片段（约375个token）进行处理。

4.  MLP投影器 (Projectors)：有两个独立的MLP投影器，一个用于将视觉编码器的输出映射到LLM的嵌入空间，另一个用于将音频编码器的输出映射到LLM的嵌入空间。这些投影器在训练初期会进行预热（warmup），以对齐不同模态的表征。

5.  多模态融合与输入：文本、视觉token和音频token被拼接（concatenated）成一个序列，然后输入到LLM中。对于包含视觉和音频流的视频，模态token会按时间顺序交错排列，以支持跨模态的联合时间推理。

6.  时序压缩：针对视频输入，使用Conv3D patch embedder，每2帧融合成一个“管状体”（tubelet），这使得视频的时序token数量减少一半。此外，还引入了高效视频采样（EVS）技术，这是一种运行时技术，在ViT块和视觉适配器之后、token进入LLM之前，根据相邻tubelet的余弦不相似度进行裁剪，保留最具信息量的token，进一步在空间维度上减少token数量。

架构图如下：

![Nemotron 3 Nano Omni architecture.](https://arxiv.org/html/2604.24954v1/x1.png)

图1说明：该图展示了Nemotron 3 Nano Omni的整体架构。左侧是输入模态：图像、视频（多帧）和音频。图像和视频帧经过动态分辨率处理和Conv3D压缩后，由C-RADIOv4-H视觉编码器处理；音频由Parakeet-TDT-0.6B-v2音频编码器处理。编码后的视觉和音频特征分别通过各自的MLP投影器转换为token。这些token与文本token一起被拼接，形成一个统一的序列，输入到Nemotron 3 Nano 30B-A3B LLM中。图中还提到了可选的EVS（高效视频采样）用于进一步压缩视频token。

### 💡 核心创新点

1.  高效MoE多模态骨干与原生音频支持：将LLM从密集模型升级为MoE架构（30B-A3B），在显著提升模型容量和序列处理能力的同时，通过稀疏激活保持了高效率。同时首次原生支持音频输入，实现了真正的全模态（Omni）能力。之前模型（如Nemotron Nano V2 VL）仅支持视觉-语言，且骨干为密集模型。
2.  自适应的视觉处理流水线：引入了动态图像分辨率和Conv3D时序视频压缩。动态分辨率避免了固定平铺带来的信息损失或token浪费；Conv3D则从架构层面高效压缩了视频的冗余时序信息。这两者共同提升了模型处理不同尺寸图像和长时间视频的能力与效率。
3.  创新的多模态Token缩减技术：提出了EVS（高效视频采样），这是一种推理时的动态token剪枝算法。它利用token间的相似性信息，保留信息量最大的token，从而在几乎不损失精度的前提下，大幅减少送入LLM的token数量，显著降低了推理延迟和计算成本。
4.  渐进式、大规模的多阶段训练策略：设计了一个包含7个SFT阶段和多个RL阶段的训练课程。从单模态对齐（视觉/音频投影器预热）开始，逐步解锁模态、扩展上下文长度（从16K到256K），最后通过多轮、多模态的强化学习进行整体优化。这种策略有效缓解了多模态训练中的灾难性遗忘和模态对齐不稳定问题，是成功训练超大规模多模态模型的关键。
5.  全面的开源与高精度量化：不仅开源了BF16、FP8、FP4三种精度的模型权重，还开源了部分训练数据（~6.9M样本）、数据生成管线示例和训练代码。其FP4量化方案（NVFP4）实现了极高的压缩比（约5 bits per weight），且精度损失极小（中位数准确度下降<1%），极大地降低了部署门槛。

### 🔬 细节详述

- 训练数据：
  - 规模与构成：整个SFT阶段使用了约4.34亿个样本，总计约4669亿个token。各阶段数据构成见论文表1、表2、表3、表4、表5。数据涵盖文本、图像、视频、音频、多模态及安全领域。包括公开数据集（如Granary ASR数据集）和内部策划的数据，使用了多个前沿模型（如Qwen3系列、GPT-OSS、Nemotron-Parse）生成合成数据、重标注和生成推理链。
  - 预处理：音频统一为16kHz单声道；图像采用动态分辨率处理；视频帧采样（最多64或256帧）。
- 损失函数：SFT阶段使用标准的下一token预测损失。RL阶段使用了混合偏好优化（MPO），结合了直接偏好优化（DPO）作为偏好损失和二元分类器优化（BCO）作为质量损失。在RL训练中，奖励来自基于规则的验证器（字符串匹配、数学等价、多选题匹配、GUI坐标匹配、ASR的1-WER）。
- 训练策略：
  - SFT：使用Megatron框架、Transformer Engine和Megatron Energon数据加载器。优化器为AdamW（β1=0.9, β2=0.999），使用余弦退火调度和线性warmup。学习率、批量大小、可训练模块等在各阶段不同（详见论文表6）。使用选择性激活重计算、全块重计算、序列打包（平衡贪心背包算法）和上下文并行（后期阶段）等技术来优化训练。
  - RL：基于NeMo-RL的Ray分布式训练框架。全局批量大小为4096，每个提示生成16个rollout。采用组序列策略优化（GSPO）算法。使用多模态去重策略和并行技术（张量、专家、上下文并行）。
- 关键超参数：
  - 模型大小：骨干为Nemotron 3 Nano 30B-A3B（约30B总参数，约3B激活参数）。视觉编码器C-RADIOv4-H和音频编码器Parakeet-TDT-0.6B-v2的参数量未明确说明，但Parakeet编码器本身约0.6B参数。
  - 上下文长度：训练和推理支持从16K到256K token。
  - 量化：FP8模型约8.5 bpw（32.8 GB）；NVFP4模型约4.98 bpw（20.9 GB）。量化细节见论文4.7节。
- 训练硬件：SFT阶段使用了32至128个NVIDIA H100 GPU节点。RL阶段使用了NVIDIA B200和H100 GPU集群。具体训练时长未说明。
- 推理细节：使用vLLM作为推理后端。解码策略、温度等参数在不同评估中设置（例如文本评估：最大输出长度131,072，温度1.0，top-p 1.0）。EVS的剪枝率q=0.5为常用设置。
- 正则化与稳定训练：通过渐进式训练、各阶段冻结/解冻不同模块、选择性激活重计算、上下文并行、RL阶段的pass-rate过滤（过滤掉太易或太难的样本）等手段来稳定训练。

### 📊 实验结果

论文在视觉、音频、音视频和文本任务上进行了全面评估，关键结果如下：

视觉评估 (表7节选)
| 基准测试 | Nemotron 3 Nano Omni (Reasoning on) | Nemotron Nano V2 VL (Reasoning on) | Qwen3-Omni (Thinking) |
| :--- | :--- | :--- | :--- |
| MMMU (val) | 70.8 | 67.8 | 76.9 |
| MathVista-Mini | 82.8 | 75.5 | 82.9 |
| MMLongBench-Doc | 57.5 | 38.0 | 53.6 |
| OCRBench | 86.6 | 83.5 | 89.1 |
| ChartQA (Test) | 90.3 | 84.9 | - |
| DocVQA (Test) | 95.6 | 93.2 | - |
| ScreenSpot-Pro | 57.8 | 5.5 | 5.5 |
| OSWorld | 47.4 | 11.1 | 29.0 |
| VideoMME (w/o sub) | 72.2 | 63.0 | 77.0 |

结论：在文档理解（MMLongBench-Doc）、GUI理解（ScreenSpot-Pro, OSWorld）等任务上显著超越前代模型和Qwen3-Omni。在部分任务（如MMMU）上仍落后于Qwen3-Omni。

音频评估 (表8节选)
| 基准测试 | Nemotron 3 Nano Omni | Qwen3-Omni | Qwen3.5-Omni |
| :--- | :--- | :--- | :--- |
| OpenASR Avg (WER↓) | 5.95 | 6.55 | - |
| MMAU Avg | 74.6 | 77.5 | 80.4 |
| VoiceBench Avg | 89.4 | 88.8 | 87.8 |

结论：在ASR和语音交互任务（VoiceBench）上优于Qwen系列模型。在通用音频理解（MMAU）上稍有不及。

音视频评估 (表9)
| 基准测试 | Nemotron 3 Nano Omni (Reasoning on) | Qwen3-Omni (Instruct) | Qwen3.5-Omni |
| :--- | :--- | :--- | :--- |
| DailyOmni | 74.1 | 71.9 | 73.6 |
| WorldSense | 55.4 | 54 | 57.8 |

结论：在跨模态音视频问答任务上超越Qwen3-Omni。

文本评估 (表10节选)
| 基准测试 | Nemotron 3 Nano Omni | Nemotron 3 Nano 30B-A3B | Qwen3-Omni |
| :--- | :--- | :--- | :--- |
| MMLU-Pro | 77.3 | 78.3 | 61.6 |
| AIME25 (no tools) | 82.1 | 89.1 | 73.7 |

结论：在多模态微调后，仍较好地保留了基础LLM的文本推理能力，但略有下降。在多项文本任务上优于Qwen3-Omni。

推理效率分析 (表12, 14)
- Conv3D与EVS消融：在BF16精度下，基线TTFT为7969ms。单独使用EVS (-19%)或Conv3D (-25%)均可降低TTFT，两者结合可降低33%，代价仅为平均准确度下降约0.5个百分点。
- 量化精度：NVFP4模型在25个基准测试上的中位数准确度下降不到1%，模型大小从61.5 GB (BF16) 缩减到20.9 GB (NVFP4)。
- 吞吐量对比：在NVIDIA B200上，NVFP4精度的Nemotron 3 Nano Omni单流输出超过500 tokens/s，是Qwen3-Omni的2.4-2.9倍；在高并发下，吞吐量可达9倍于Qwen3-Omni。

![描述](https://arxiv.org/html/2604.24954v1/x1.png)
（重复插入架构图以满足“每张架构图必须贴出”的要求）

### ⚖️ 评分理由

- 学术质量：6.0/7：该工作是一项扎实的工程与系统研究。创新点清晰（MoE骨干、动态分辨率、Conv3D/EVS、渐进训练），技术细节丰富，实验极其充分（涵盖视觉、音频、多模态、文本四大类，多个SOTA基准），证据可信度高（对比了前代模型及多个竞争对手）。扣分点在于其核心贡献更多是现有技术的创新性整合与系统优化，而非提出一个全新、有广泛启发性的多模态建模范式或算法。
- 选题价值：1.5/2：多模态智能是当前AI的核心前沿，构建一个高效、开源、全能的“全家桶”模型具有很高的实用价值和产业意义。对音频/语音领域的读者而言，该模型展示了如何将ASR和音频理解能力深度集成到强大的多模态LLM中，并提供了高效率的解决方案，参考价值高。未得满分是因为该工作并非专门针对音频/语音的突破性研究。
- 开源与复现加成：0.8/1：开源信息非常完整。提供了BF16/FP8/FP4三种精度的模型权重、部分训练数据（~6.9M样本）、数据生成管线示例、训练代码（Megatron-Bridge）和微调指南（NeMo-RL）。训练细节（超参数、阶段描述）描述详尽。然而，完全复现仍需海量计算资源和数据，因此加成未达满分。


---

[← 返回 2026-04-29 论文速递](/audio-paper-digest-blog/posts/2026-04-29/)
