---
title: "ICLR 2026 - 音频安全 论文列表"
date: 2026-05-04
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
| 🥇 | [JALMBench: Benchmarking Jailbreak Vulnerabilities in Audio L](/audio-paper-digest-blog/posts/2026-05-04-jalmbench-benchmarking-jailbreak-vulnerabilities) | 7.5分 | 前25% |

---

## 📋 论文详情

### 🥇 [JALMBench: Benchmarking Jailbreak Vulnerabilities in Audio Language Models](/audio-paper-digest-blog/posts/2026-05-04-jalmbench-benchmarking-jailbreak-vulnerabilities)

✅ **7.5/10** | 前25% | #音频安全 | #基准测试 | #音频大模型 #鲁棒性

👥 **作者与机构**

- 第一作者：Zifan Peng（香港科技大学（广州）、清华大学互联网体系结构国家重点实验室）
- 通讯作者：Wenhan Dong（香港科技大学（广州）），Xinlei He（香港科技大学（广州）、清华大学互联网体系结构国家重点实验室）
- 作者列表：Zifan Peng（香港科技大学（广州）、清华大学互联网体系结构国家重点实验室），Yule Liu（香港科技大学（广州）），Zhen Sun（香港科技大学（广州）），Mingchen Li（北德克萨斯大学），Zeren Luo（香港科技大学（广州）），Jingyi Zheng（香港科技大学（广州）），Wenhan Dong（香港科技大学（广州）），Xinlei He（香港科技大学（广州）、清华大学互联网体系结构国家重点实验室），Xuechao Wang（香港科技大学（广州）），Yingjie Xue（中国科学技术大学），Shengmin Xu（福建师范大学），Xinyi Huang（南京航空航天大学）

💡 **毒舌点评**

论文的亮点在于首次系统性地为音频大模型构建了大规模、多攻击、多防御的越狱基准（JALMBench），数据规模（>20万音频样本）和分析维度（攻击效率、主题、语音多样性、模型架构）的全面性值得肯定。但短板也很明显：其提出的防御策略效果有限（平均ASR仅下降约11%），且对模型架构影响的分析虽有启发，但更像是现象描述而非机理性的深入挖掘，未能给出明确的防御设计指导原则。

🔗 **开源详情**

- 代码：提供GitHub仓库链接：https://github.com/sfofgalaxy/JALMBench。代码包含模块化框架实现。
- 模型权重：论文中评估了多个开源模型（如SpeechGPT， Qwen2-Audio等），但未提及是否提供或托管这些特定检查点。商业模型（GPT-4o-Audio， Gemini-2.0）使用API。
- 数据集：明确提及将数据集发布在HuggingFace平台，并包含在上述GitHub仓库中。
- Demo：论文中未提及在线演示。
- 复现材料：提供了极其详细的复现信息，包括：所有攻击方法的实现细节与参数（附录B.4-B.5）、评估用的具体提示模板（附录B.3）、被评估模型的架构与参数表格（表4）、实验硬件配置、评估器可靠性分析（附录C.1）。这些信息足以支撑复现其评估流程。
- 论文中引用的开源项目：依赖或对比了众多开源项目，包括：AdvBench， JailbreakBench， HarmBench等数据集；GCG， PAP等攻击方法；LLaMA-Guard， Azure AI Content Safety等防御工具；Whisper， HuBERT， Qwen等模型；以及多种TTS引擎（Google TTS， F5-TTS， MMS-TTS， SpeechT5）。

📌 **核心摘要**

1. 要解决的问题：随着大型音频语言模型（LALMs）在真实场景中部署，其面临越狱攻击的安全风险日益突出。目前缺乏针对LALMs的统一评估框架和大规模对抗数据集，导致相关研究碎片化，难以公平比较攻击与防御方法。
2. 方法核心：本文提出了JALMBench，一个综合性的LALMs安全基准框架。它包含11，316条文本样本和超过24.5万条音频样本（>1，000小时），覆盖了12个主流LALMs、8种攻击方法（4种文本迁移、4种音频原生）以及5种防御策略。
3. 与已有方法相比新在哪里：相较于之前聚焦于单一攻击类型（如扰动、多语言）或小规模的零散研究，JALMBench是首个全面评估多种文本迁移与音频原生攻击、并系统探索防御策略的基准。它统一了实现框架，提供了标准化的API，使公平对比成为可能。
4. 主要实验结果：
    - 对于非对抗性的有害查询，音频模态的平均攻击成功率（ASR）为21.5%，高于文本模态的17.0%。
    - 在越狱攻击中，最强的音频原生攻击（AdvWave）能达到96.2%的ASR。
    - 评估的防御策略中，最优的提示级防御（AdaShield）和响应级防御（LLaMA-Guard）分别将平均ASR降低了19.6和18.0个百分点。
    - 详细的攻击成功率对比见下表（部分数据摘自论文）：

| 模型 | 无防御(平均ASR%) | AdaShield(平均ASR%) | LLaMA-Guard(平均ASR%) |
| :--- | :--- | :--- | :--- |
| 所有模型平均 | 53.7 | 34.1 | 35.7 |

5. 实际意义：本工作填补了LALMs安全评估的空白，揭示了当前模型在音频模态下的脆弱性（尤其是音频原生攻击），证明了从视觉语言模型迁移的防御策略效果有限。这为未来设计更鲁棒的LALMs和专门的音频模态防御方法提供了重要的基准和见解。
6. 主要局限性：1) 论文承认多轮越狱攻击、更细粒度的语音特征（如情感、说话人身份）的影响尚未充分探索。2) 虽然评估了多种防御，但这些策略（主要来自VLM领域）效果提升有限，凸显了专用防御研发的必要性。3) 作为基准研究，其贡献主要在评估和分析，而非提出一种性能更优的新攻击或防御模型。

---

