---
title: "ClawMark: A Living-World Benchmark for Multi-Turn, Multi-Day, Multimodal Coworker Agents"
date: 2026-04-29
draft: false
tags: [基准测试, 模型评估, 多模态模型, 大语言模型, 动态环境]
categories: [论文速递]
description: "基准测试 | 7.0/10"
hiddenInHomeList: true
---

# 📄 ClawMark: A Living-World Benchmark for Multi-Turn, Multi-Day, Multimodal Coworker Agents

#基准测试 #模型评估 #多模态模型 #大语言模型 #动态环境

✅ **7.0/10** | 前25% | #基准测试 | #模型评估 | #多模态模型 #大语言模型 | [arxiv](https://arxiv.org/abs/2604.23781)

学术质量 6.5/7 | 选题价值 2.0/2 | 复现加成 0.5 | 置信度 高


### 👥 作者与机构

- 第一作者：Fanqing Meng (Evolvent AI, National University of Singapore) - 根据论文附录，其有*号标记为共同贡献者。
- 通讯作者：Mengkang Hu†, Michael Qizhe Shieh† (Evolvent AI, National University of Singapore) - 根据论文附录，其有†号标记为通讯作者。
- 作者列表：Fanqing Meng (Evolvent AI, National University of Singapore), Lingxiao Du (National University of Singapore), Zijian Wu (National University of Singapore), Guanzheng Chen (National University of Singapore), Xiangyan Liu (National University of Singapore), Jiaqi Liao (Independent Researcher), Chonghe Jiang (Massachusetts Institute of Technology), Zhenglin Wan (National University of Singapore), Jiawei Gu (University of Washington), Pengfei Zhou (National University of Singapore), Rui Huang (The University of Hong Kong), Ziqi Zhao (The Hong Kong Polytechnic University), Shengyuan Ding (Fudan University), Ailing Yu (Independent Researcher), Bo Peng (Shanghai Jiao Tong University), Bowei Xia (University of Electronic Science and Technology of China), Hao Sun (Peking University), Haotian Liang (University of Science and Technology of China), Ji Xie (Zhejiang University), Jiajun Chen (National University of Singapore), Jiajun Song (Renmin University of China), Liu Yang (The Hong Kong Polytechnic University), Ming Xu (National University of Singapore), Qionglin Qiu (Hunan University), Runhao Fu (Anhui University), Shengfang Zhai (National University of Singapore), Shijian Wang (Southeast University), Tengfei Ma (The Chinese University of Hong Kong), Tianyi Wu (National University of Singapore), Weiyang Jin (The University of Hong Kong), Yan Wang (Tongji University), Yang Dai (National University of Singapore), Yao Lai (The University of Hong Kong), Youwei Shu (National University of Singapore), Yue Liu (National University of Singapore), Yunzhuo Hao (Zhejiang University), Yuwei Niu (Peking University), Jinkai Huang (Evolvent AI, National University of Singapore), Jiayuan Zhuo (Evolvent AI, National University of Singapore), Zhennan Shen (The Hong Kong University of Science and Technology), Linyu Wu (National University of Singapore), Cihang Xie (University of California, Santa Cruz), Yuyin Zhou (University of California, Santa Cruz), Jiaheng Zhang (National University of Singapore), Zeyu Zheng (University of California, Berkeley), Mengkang Hu (Evolvent AI, National University of Singapore), Michael Qizhe Shieh (Evolvent AI, National University of Singapore)。

### 💡 毒舌点评

亮点：提出了一个设计极其严谨、评估维度（多天、动态环境、全模态）全面且完全杜绝“LLM当裁判”评分模糊性的智能体基准测试，填补了重要空白。短板：作为基准测试，其本身不产出新的模型或算法，对推动模型能力提升的作用是间接的；且100个任务的规模对于构建稳健的排行榜可能稍显不足。

### 📌 核心摘要

1.  要解决什么问题：现有AI智能体基准测试大多局限于单次会话、静态环境和以文本为主的输入，无法充分评估作为持久化协作者的智能体所需的关键能力：在跨多天的动态工作流中，适应独立于智能体的外部环境变化，并整合图像、音频、视频等原始多模态证据。
2.  方法核心是什么：构建了ClawMark基准测试，包含100个多轮（每轮代表一个工作日）、多天、跨13个专业场景的任务。任务在由文件系统、邮件、日历、知识库和电子表格组成的有状态沙箱环境中执行。环境状态在轮次之间通过“有声事件”和“无声突变”独立于智能体发生变化。评分完全基于1,537个确定性Python检查器对执行后服务状态的检查，杜绝了LLM-as-judge。
3.  与已有方法相比新在哪里：首次在单一评估设置中同时结合了多天时间跨度、动态环境变化（外部独立突变）、原始多模态证据以及确定性规则评分。与表1中所有现有基准相比，这是独一无二的组合。
4.  主要实验结果如何：对7个前沿模型（5个专有，2个开源）进行了评估。最佳加权得分（Eq.1）为75.8（Claude Sonnet 4.6），但最严格的任务成功率（Eq.2，要求所有检查器通过）仅为20.0%（Claude Opus 4.6）。分析发现，大多数模型在首次外部环境变化后（第2天）性能下降，且恢复不完全。失败模式分析表明，“无声变化检测”和“后端写回”是两大主要失败点，其失败率（56.5%和53.6%）远高于基准平均水平（31.6%）。
5.  实际意义是什么：为开发和评估能够在真实、动态办公环境中可靠工作的AI协作者提供了重要的标准化测试平台，指明了当前模型在环境适应性和后端操作完整性方面的不足，为未来研究提供了明确目标。
6.  主要局限性是什么：当前发布版本包含100个任务，规模有待扩大。任务成功率普遍偏低，表明现有模型在复杂工作流的完整执行上仍有很大差距。评估结果依赖于特定的智能体框架（OpenClaw），虽然报告了框架补丁，但模型能力评估与框架交互的影响需进一步厘清。

### 🏗️ 模型架构

本文并非提出一个新的AI模型，而是定义了一个评估基准测试（Benchmark）和对应的评估框架。因此，没有传统意义上的“模型架构”。其核心“架构”是基准测试系统本身，主要包括：
- 任务定义层：每个任务由一个`task.py`文件定义，包含多轮（天）的唤醒提示、服务种子钩子、轮次间注入（有声/无声事件）以及一个加权检查器评分标准。
- 运行时环境层：每个任务在一个隔离的`docker-compose`组中运行，包含智能体容器和五个有状态沙箱服务（文件系统、GreenMail邮件、Notion兼容知识库、Google Sheets兼容电子表格、Radicale CalDAV日历）。
- 评估执行层：在每轮结束后，确定性Python检查器对沙箱服务的当前状态进行检查，生成通过/失败判定。所有判定和得分在两次独立重跑中必须逐位相同。
- 构建流水线层：一个四阶段流程（任务创作、证据获取、审查循环、发布门控），确保任务质量、多模态真实性和评估的确定性。

下图（图5）展示了实现层面的任务定义、解析和检查流程：
![ClawMark实现层面视图](https://arxiv.org/html/2604.23781v1/x5.png)
图中展示了文件包（`task.py`， `assets/`， `inject/stage{k}/`）如何被加载器解析为运行时任务对象，编排器如何在隔离的沙箱环境中执行各轮，并在每轮后运行确定性检查器，最终汇总结果。

### 💡 核心创新点

1.  整合动态多天环境与确定性评估：首次在智能体基准测试中系统性地模拟跨越多个工作日、环境状态独立于智能体发生变化（包括未通知的“无声突变”）的工作流，并使用完全确定性的规则进行评估，消除了LLM-as-judge的评分不确定性。
2.  原始多模态证据作为一等公民：基准测试包含音频、视频、扫描PDF、图像和电子表格等原始多模态证据，且不提供预转录文本，强制智能体使用自身工具进行解析和理解，更贴近真实办公场景。
3.  专业领域的任务设计：覆盖了13个专业场景，包括法律助理、投资分析、电子设计自动化（EDA）等现有基准较少涉及的领域，且任务内角色（87个）是实质性的。
4.  系统化的构建与验证流程：提出了一个从任务创作到发布的四阶段流水线，包含多轮人工与AI辅助审查，以及基于确定性重跑结果的严格发布门控，确保了基准测试本身的质量和可复现性。

### 🔬 细节详述

- 训练数据：不适用。本论文是关于评估基准，不涉及训练数据。
- 损失函数：不适用。
- 训练策略：不适用。
- 关键超参数：不适用。
- 训练硬件：不适用。
- 推理细节：论文未提供具体的解码策略等推理细节，但说明所有模型使用提供商默认推理参数，在支持的情况下启用扩展思考（如Claude, GPT-5.4, Gemini）和提示缓存。
- 正则化或稳定训练技巧：不适用。

### 📊 实验结果

论文主要报告了在ClawMark基准测试上对7个前沿模型的评估结果。

主要结果总览表（表3）
| 模型 | 得分 (0-100) | 任务成功率 (0-100) | 红线失败率 | 墙钟时间 | 输入Token | 输出Token | 工具调用次数 |
| :--- | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| Claude Sonnet 4.6 | 75.8 | 14.0 | 3.6% | 22.3 h | 257.8 M | 2.57 M | 5,736 |
| Claude Opus 4.6 | 74.6 | 20.0 | 5.5% | 22.6 h | 266.7 M | 2.02 M | 6,112 |
| GPT-5.4 (high) | 72.0 | 9.0 | 3.6% | 26.1 h | 231.5 M | 2.93 M | 7,052 |
| Kimi K2.6 | 68.4 | 7.0 | 7.3% | 22.6 h | 226.3 M | 2.30 M | 6,026 |
| Gemini 3.1 Pro Preview | 68.2 | 8.0 | 3.6% | 18.9 h | 338.8 M | 1.77 M | 5,877 |
| Qwen 3.6 Plus | 57.2 | 5.0 | 14.5% | 33.3 h | 315.1 M | 4.56 M | 6,119 |
| Kimi K2.5 | 56.0 | 0.0 | 9.1% | 22.8 h | 214.0 M | 1.47 M | 4,776 |

关键结论： 即使最强模型（Claude Sonnet 4.6）的加权得分也仅为75.8，而最严格的“任务成功率”最高仅为20.0%，表明完全端到端的工作流完成非常困难。红线（合规性）失败率在Qwen 3.6 Plus上最高（14.5%）。

逐日轨迹分析（图4）
![逐日轨迹](https://arxiv.org/html/2604.23781v1/x4.png)
关键结论： 在73个三轮任务中，6个模型在第2天（首次外部变化）性能下降，仅Qwen 3.6 Plus小幅上升。到第3天，大多数模型仍低于第1天基线，表明适应外部变化是主要挑战。

失败模式分类（表5）
| 失败模式 | 评估数 | 失败数 | 失败率 | 失败占比 |
| :--- | :---: | :---: | :---: | :---: |
| 无声变化检测 | 315 | 178 | 56.5% | 5.2% |
| 后端写回 | 1,057 | 567 | 53.6% | 16.7% |
| 跨源一致性 | 203 | 69 | 34.0% | 2.0% |
| 交付物正确性 | 427 | 134 | 31.4% | 3.9% |
| 证据提取 | 259 | 61 | 23.6% | 1.8% |
| 合规护栏 | 413 | 89 | 21.5% | 2.6% |
| 红线违规 | 364 | 26 | 7.1% | 0.8% |
| 场景特定 | 7,721 | 2,280 | 29.5% | 67.0% |
| 所有评估 | 10,759 | 3,404 | 31.6% | 100.0% |

关键结论： “无声变化检测”和“后端写回”两项失败率接近56.5%，几乎是整体��败率的两倍，是模型的主要短板。

### ⚖️ 评分理由

- 学术质量：6.0/7 - 创新性体现在评估范式设计的系统性和完整性上，而非提出新算法。技术方案（沙箱环境、确定性检查器、构建流水线）设计严谨、正确。实验充分，对多个前沿模型进行了多维度评估和深入分析。证据可信度高，因为评估过程完全确定且可复现。扣分点在于其本质是基础设施工作，学术贡献类型与传统算法论文不同。
- 选题价值：2.0/2 - 选题极其前沿，直接针对AI智能体从“工具”向“持久化协作者”演进过程中的评估瓶颈。具有广泛的实际影响，能指导工业界和学术界开发更可靠的办公助手。潜在应用空间巨大。
- 开源与复现加成：0.5/1 - 论文明确承诺并提供了基准测试、评估框架（OpenClaw的特定构建）和任务构建流水线。详细说明了复现所需的容器设置、框架补丁（附录C）和推理设置。提供了700个执行轨迹。这使得复现评估过程变得可行。扣0.5分是因为未明确提及模型权重或训练细节（因为不涉及模型训练），但就评估基准而言，开源程度很高。

### 🔗 开源详情

- 代码：提供。论文明确提到“我们发布基准测试、评估框架和构建流水线”，并给出了GitHub链接 `github.com/evolvent-ai/ClawMark` 和项目主页 `claw-mark.com`。
- 模型权重：不适用。本论文不提出新模型。
- 数据集：公开。论文明确提到发布了包含100个任务的语料库（`release corpus`）。
- Demo：未提及。
- 复现材料：提供。包括评估框架、构建流水线、容器化环境设置（附录B）、针对OpenClaw框架的补丁（附录C）、以及700个执行轨迹。
- 论文中引用的开源项目：使用了OpenClaw作为统一的智能体框架进行评估。沙箱服务依赖Docker、GreenMail、Radicale等开源组件。工具使用了whisper， ffmpeg， PyMuPDF等用于处理多模态证据。

---

[← 返回 2026-04-29 论文速递](/audio-paper-digest-blog/posts/2026-04-29/)
