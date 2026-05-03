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
| 🥇 | [JALMBench: Benchmarking Jailbreak Vulnerabilities in Audio L](/audio-paper-digest-blog/posts/2026-05-03-jalmbench-benchmarking-jailbreak-vulnerabilities) | 8.5分 | 前10% |

---

## 📋 论文详情

### 🥇 [JALMBench: Benchmarking Jailbreak Vulnerabilities in Audio Language Models](/audio-paper-digest-blog/posts/2026-05-03-jalmbench-benchmarking-jailbreak-vulnerabilities)

🔥 **8.5/10** | 前10% | #音频安全 | #基准测试 | #音频大模型 #对抗样本

👥 **作者与机构**

- 第一作者：Zifan Peng（香港科技大学（广州）；清华大学网络体系结构国家重点实验室）
- 通讯作者：Wenhan Dong（香港科技大学（广州））、Xinlei He（香港科技大学（广州）；清华大学网络体系结构国家重点实验室）
- 作者列表：Zifan Peng（香港科技大学（广州），清华大学网络体系结构国家重点实验室）， Yule Liu（香港科技大学（广州））， Zhen Sun（香港科技大学（广州））， Mingchen Li（北德克萨斯大学）， Zeren Luo（香港科技大学（广州））， Jingyi Zheng（香港科技大学（广州））， Wenhan Dong（香港科技大学（广州））， Xinlei He（香港科技大学（广州），清华大学网络体系结构国家重点实验室）， Xuechao Wang（香港科技大学（广州））， Yingjie Xue（中国科学技术大学）， Shengmin Xu（福建师范大学）， Xinyi Huang（南京航空航天大学）

💡 **毒舌点评**

本文最大的亮点在于系统性地填补了大型音频语言模型安全评估的空白，构建了一个规模空前（24万+音频样本）且设计模块化的基准框架，其严谨的多维度分析（模态、架构、效率）为后续研究设立了很高的基线。然而，其短板也同样明显：防御部分的探索略显初步和薄弱，更像是对现有视觉-语言模型防御策略的迁移性测试，而非针对音频模态特性的原生防御设计，削弱了论文在“解决问题”层面的深度。

🔗 **开源详情**

- 代码：论文提供了完整的代码仓库链接：https://github.com/sfofgalaxy/JALMBench。
- 模型权重：论文评估的12个LALMs多为公开的开源模型（如SpeechGPT, SALMONN, Qwen2-Audio等）或商业API（GPT-4o-Audio, Gemini-2.0）。JALMBench本身不训练新模型。
- 数据集：数据集已在HuggingFace上公开，可通过上述代码仓库链接获取。
- Demo：论文中未提及在线演示链接。
- 复现材料：提供了极其详细的复现材料，包括：所有实验的具体设置（攻击参数、评估提示、TTS配置等）、详细的附录（A-F章节）解释框架使用和实验细节、伦理声明、以及使用说明。
- 论文中引用的开源项目：Google TTS, DeepL Translator, Coqui.ai TTS, CREMA-D dataset, F5-TTS, MMS-TTS, SpeechT5, 以及评估的各个LALM开源项目。
- 开源计划：论文已完整开源代码和数据集，未提及后续额外开源计划。

📌 **核心摘要**

1.  要解决什么问题：随着大型音频语言模型（LALMs）的部署，其面临越狱攻击的安全风险日益增长，但目前缺乏一个专门、统一的评估框架和大规模基准数据集来系统研究这一问题。
2.  方法核心是什么：提出JALMBench，一个全面的基准框架。其核心是构建了一个包含24.5万条音频样本（超1000小时）的大规模数据集，并设计了一个模块化评估平台，可支持多种LALMs、攻击方法和防御策略的标准化测试与比较。
3.  与已有方法相比新在哪里：这是首个针对LALM越狱漏洞的综合性基准。与此前工作相比，JALMBench在数据规模、攻击方法覆盖（首次综合评估文本迁移和音频原生两大类共8种攻击）、防御策略评估以及分析维度（效率、主题、语音多样性、模型架构）上均实现了显著超越。
4.  主要实验结果如何：实验表明，音频模态的平均攻击成功率（21.5%）高于文本模态（17.0%）。最强攻击方法AdvWave的攻击成功率高达96.2%。分析发现，离散音频令牌化策略（如GLM-4-Voice）比连续特征提取（如LLaMA-Omni）能更好地保持跨模态安全一致性。在防御方面，现有方法（如LLaMA-Guard、AdaShield）仅能小幅降低平均攻击成功率（分别减少18.0和19.6个百分点），且提示级防御会带来明显的性能损失。

| 防御方法 | 无防御 | LLaMA-Guard | Azure | JailbreakBench | FigStep | AdaShield |
| :--- | :---: | :---: | :---: | :---: | :---: | :---: |
| 平均ASR (%) | 53.7 | 35.7 | 43.1 | 43.7 | 40.5 | 34.1 |
表：不同防御方法下的平均攻击成功率（ASR）对比

![论文中的框架与总结图](icassp-img://DJkQ236C8B/0.png)
图：JALMBench框架与相关工作对比总结。该图展示了基准的组成（有害查询、文本迁移攻击、音频原生攻击数据集）、支持的12个LALMs、8种攻击和5种防御，并与已有的Audio Jailbreak基准在数据规模、攻击全面性、防御评估等维度进行了对比。

5.  实际意义是什么：为评估和提升音频大模型的安全性提供了首个权威、可扩展的基准工具。研究揭示了当前LALM安全性的关键弱点（如对音频原生攻击脆弱、跨模态安全对齐不足），并指明了未来防御研究应朝着“音频原生”防御方向发展的道路。
6.  主要局限性是什么：论文承认未探索多轮对话越狱、更细粒度的语音特征（如情绪）影响以及模型量化等方向。防御策略部分主要基于现有方法的迁移，尚未提出专门针对音频模态的高效防御方案。

---

