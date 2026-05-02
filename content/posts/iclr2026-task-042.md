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
| 🥇 | [JALMBench: Benchmarking Jailbreak Vulnerabilities in Audio L](/audio-paper-digest-blog/posts/2026-05-03-jalmbench-benchmarking-jailbreak-vulnerabilities) | 7.5分 | 前25% |

---

## 📋 论文详情

### 🥇 [JALMBench: Benchmarking Jailbreak Vulnerabilities in Audio Language Models](/audio-paper-digest-blog/posts/2026-05-03-jalmbench-benchmarking-jailbreak-vulnerabilities)

✅ **7.5/10** | 前25% | #音频安全 | #基准测试 | #语音大模型 #对抗样本

👥 **作者与机构**

- 第一作者：Zifan Peng（香港科技大学（广州）； State Key Laboratory of Internet Architecture, Tsinghua University）
- 通讯作者：Wenhan Dong（香港科技大学（广州）），Xinlei He（香港科技大学（广州）； State Key Laboratory of Internet Architecture, Tsinghua University）
- 作者列表：Zifan Peng（香港科技大学（广州）、清华大学）、Yule Liu（香港科技大学（广州））、Zhen Sun（香港科技大学（广州））、Mingchen Li（University of North Texas）、Zeren Luo（香港科技大学（广州））、Jingyi Zheng（香港科技大学（广州））、Wenhan Dong（香港科技大学（广州））、Xinlei He（香港科技大学（广州）、清华大学）、Xuechao Wang（香港科技大学（广州））、Yingjie Xue（University of Science and Technology of China）、Shengmin Xu（Fujian Normal University）、Xinyi Huang（Nanjing University of Aeronautics and Astronautics）

💡 **毒舌点评**

亮点在于其作为“第一个吃螃蟹的人”，用庞大而严谨的实验揭示了当前音频大模型在对抗攻击下的脆弱性（AdvWave攻击成功率高达96.2%），为整个社区敲响了警钟并树立了评估标杆。短板则是作为基准论文，其提出的防御策略效果有限（平均ASR仅降低11.3%），更像是一个“诊断报告”而非“药方”，未能给出真正有效的解决方案，凸显了领域防御研究的严重滞后。

🔗 **开源详情**

- 代码：提供GitHub仓库链接：https://github.com/sfofgalaxy/JALMBench。
- 模型权重：未提及提供JALMBench自身评估的模型权重。论文评估的12个LALMs本身多为已公开的模型（如SALMONN, Qwen2-Audio等）。
- 数据集：已公开，托管于HuggingFace平台（链接包含在GitHub仓库中）。
- Demo：未提及。
- 复现材料：论文附录提供了详细的实验设置、评估提示模板、攻击和防御方法的具体配置、以及补充实验结果（如白盒AdvWave设置、更多可视化结果），复现信息充分。
- 论文中引用的开源项目：使用了Google TTS、DeepL翻译器、Coqui.ai TTS等工具生成数据；评估的模型依赖Whisper, HuBERT, LLaMA, Qwen等预训练编码器和语言模型；防御评估使用了LLaMA-Guard和Azure AI内容安全服务。

📌 **核心摘要**

1.  要解决什么问题：大型音频语言模型（LALMs）正被广泛部署，但面临越狱攻击的安全风险。目前缺乏一个专门用于评估和比较针对LALMs的越狱攻击的统一基准测试框架和大规模数据集。
2.  方法核心是什么：本文提出了JALMBench，一个综合性的LALM安全评估基准。它包含11,316个文本样本和245,355个音频样本（超过1000小时），并提供了一个模块化的评估框架。该框架支持12个主流LALMs、8种攻击方法（4种文本迁移型，4种音频原生型）和5种防御方法。
3.  与已有方法相比新在哪里：这是第一个专门针对LALM越狱漏洞的系统化基准。相比先前零散、聚焦特定攻击（如多语言或扰动）的工作，JALMBench实现了大规模（数据量级）、全面性（覆盖多种攻击与防御）和深度分析（攻击效率、话题敏感性、语音多样性、模型架构影响）的统一。
4.  主要实验结果如何：
    *   攻击有效性：音频模态的攻击成功率通常高于文本模态（基准有害查询ASR：音频21.5% vs. 文本17.0%）。最强的攻击方法AdvWave在所有模型上实现了高达96.2%的平均攻击成功率。
    *   攻击效率：实现超过60%的ASR通常需要至少100秒，但达到约40%的ASR可能只需10秒（如SSJ, AMSE攻击），表明低成本现实攻击是可行的。
    *   防御有效性：现有防御策略效果有限。最佳的提示级防御（AdaShield）和响应级防御（LLaMA-Guard）分别将平均ASR降低了19.6和18.0个百分点，但提示级防御会带来显著的效用损失（如AdaShield导致QA准确率下降6.3%）。
    *   架构影响：采用离散音频token化并进行交错音频-文本训练的模型（如GLM-4-Voice）展现出更好的跨模态安全泛化能力，其文本和音频模态的ASR接近。
5.  实际意义是什么：为LALM安全研究提供了标准化的评估工具和大规模数据集，揭示了当前模型普遍存在的安全短板（特别是对音频原生攻击脆弱），并证明了从视觉语言模型移植的防御方法效果不佳，强烈呼吁开发专门针对音频模态的安全防御机制。
6.  主要局限性是什么：论文承认未探索多轮对话攻击、更精细的语音情感/韵律因素、模型量化和推理模式的影响。防御策略探索仅为初步尝试，效果有限，未能提供行之有效的解决方案。

---

