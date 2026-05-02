---
title: "ICLR 2026 - 音频安全 论文列表"
date: 2026-05-03
draft: false
tags: ["音频安全"]
categories: [iclr-2026]
description: "共 1 篇 ICLR 2026 音频安全 方向论文"
hiddenInHomeList: true
---

# ICLR 2026 - 音频安全

共 **1** 篇论文

[← 返回 ICLR 2026 总览](/audio-paper-digest-blog/posts/iclr2026-summary/)

---

| 排名 | 论文 | 评分 | 分档 |
|------|------|------|------|
| 🥇 | [JALMBench: Benchmarking Jailbreak Vulnerabilities in Audio L](/audio-paper-digest-blog/posts/2026-05-03-jalmbench-benchmarking-jailbreak-vulnerabilities) | 9.0分 | 前25% |

---

## 📋 论文详情

### 🥇 [JALMBench: Benchmarking Jailbreak Vulnerabilities in Audio Language Models](/audio-paper-digest-blog/posts/2026-05-03-jalmbench-benchmarking-jailbreak-vulnerabilities)

🔥 **9.0/10** | 前25% | #音频安全 | #模型评估 | #基准测试 #多模态模型

👥 **作者与机构**

- 第一作者：Zifan Peng（香港科技大学（广州），State Key Laboratory of Internet Architecture, Tsinghua University）
- 通讯作者：Wenhan Dong，Xinlei He（未明确指定通讯作者，但标注了星号*）
- 作者列表：
  - Zifan Peng（香港科技大学（广州），State Key Laboratory of Internet Architecture, Tsinghua University）
  - Yule Liu（香港科技大学（广州））
  - Zhen Sun（香港科技大学（广州））
  - Mingchen Li（University of North Texas）
  - Zeren Luo（香港科技大学（广州））
  - Jingyi Zheng（香港科技大学（广州））
  - Wenhan Dong*（香港科技大学（广州））
  - Xinlei He*（香港科技大学（广州），State Key Laboratory of Internet Architecture, Tsinghua University）
  - Xuechao Wang（香港科技大学（广州））
  - Yingjie Xue（University of Science and Technology of China）
  - Shengmin Xu（Fujian Normal University）
  - Xinyi Huang（Nanjing University of Aeronautics and Astronautics）

💡 **毒舌点评**

亮点：这是一份极其详尽、系统且开源的“体检报告”，为音频大模型（LALM）的安全性敲响了警钟，用海量数据（>24万音频样本）和多维度攻击/防御测试，无情揭示了当前模型在面对针对性音频对抗攻击时的脆弱性（如AdvWave攻击成功率超96%），填补了该领域的评估空白。短板：论文更像是安全领域的“质检员”和“评测工具提供商”，虽然诊断了问题（现有文本安全机制无法完全迁移到音频模态，且缺乏有效防御），但并未开出新的“药方”——提出的防御方法均为现有文本/视觉模态防御的简单迁移，效果有限（平均ASR仅降低11.3%），其核心贡献在于揭示问题而非解决问题。

🔗 **开源详情**

- 代码：提供代码仓库链接：`https://github.com/sfofgalaxy/JALMBench`
- 模型权重：未提及提供新的模型权重。评估使用的是已有的LALM（列表见附录B.2）。
- 数据集：公开提供。数据集托管在HuggingFace，可通过上述GitHub仓库链接获取。
- Demo：未提及提供在线演示。
- 复现材料：提供了详细的框架使用说明（附录A）、评估设置（附录B）、所有实验的详细设置（附录B.4-B.5）、攻击分析细节（附录D）和防御细节（附录E）。提供了Docker镜像以支持运行。
- 论文中引用的开源项目：
    - 模型：SpeechGPT, Spirit LM, GLM-4-Voice, SALMONN, Qwen2-Audio, LLaMA-Omni, DiVA, Freeze-Omni, VITA-1.0, VITA-1.5 (开源LALM)；GPT-4o-Audio, Gemini-2.0 (商业模型)。
    - 工具：Google TTS, DeepL Translator, Coqui.ai TTS, F5-TTS, MMS-TTS, SpeechT5 (用于数据生成)。
    - 防御/评估：LLaMA-Guard-3-8B, Azure AI Content Safety, GPT-4o (用作评判者)。

📌 **核心摘要**

1. 问题：大型音频语言模型（LALMs）在现实世界中面临越狱攻击（jailbreak）的安全风险，但目前缺乏专门针对LALM的统一评估框架和大规模对抗数据集，导致攻击方法研究分散，难以公平比较。
2. 方法：提出了JALMBench，一个全面的基准测试框架，包含11,316条文本样本和245,355条（>1000小时）音频样本。它支持评估12个主流LALM，8种攻击方法（4种文本迁移攻击，4种音频原生攻击），以及5种防御策略。
3. 创新点：首个针对LALM越狱漏洞的大规模、多维度评估基准。相较于先前工作（如AJailBench），它同时覆盖了文本迁移和音频原生攻击，并全面评估了语音多样性、话题敏感性和模型架构的影响。
4. 主要实验结果：评估显示LALM安全性堪忧。非对抗性有害查询在音频模态下的平均攻击成功率（ASR）为21.5%，高于文本模态的17.0%。最强的攻击方法AdvWave平均ASR高达96.2%。现有通用防御方法效果有限，最佳的提示级防御（AdaShield）和响应级防御（LLaMA-Guard）分别将平均ASR降低了19.6和18.0个百分点，但提示级防御会损害模型实用性。
5. 实际意义：揭示了当前LALM存在严重的模态特定漏洞，音频模态的安全对齐无法完全从文本模态迁移，强调了设计专用音频安全防御机制的紧迫性，为LALM的安全设计提供了重要参考。
6. 主要局限性：论文本身未探索针对音频模态的新型防御方法；当前评估框架未涵盖多轮对话攻击；部分攻击（如DAN）的样本量有限。

#

---

