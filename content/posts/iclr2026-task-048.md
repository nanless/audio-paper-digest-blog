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
| 🥇 | [JALMBench: Benchmarking Jailbreak Vulnerabilities in Audio L](/audio-paper-digest-blog/posts/2026-05-04-jalmbench-benchmarking-jailbreak-vulnerabilities) | 8.0分 | 前10% |

---

## 📋 论文详情

### 🥇 [JALMBench: Benchmarking Jailbreak Vulnerabilities in Audio Language Models](/audio-paper-digest-blog/posts/2026-05-04-jalmbench-benchmarking-jailbreak-vulnerabilities)

🔥 **8.0/10** | 前10% | #音频安全 | #基准测试 | #音频大模型 #对抗样本

👥 **作者与机构**

- 第一作者：Zifan Peng (香港科技大学（广州），State Key Laboratory of Internet Architecture，清华大学)
- 通讯作者：Wenhan Dong (未说明具体单位，但标注为*Corresponding authors)，Xinlei He (香港科技大学（广州），State Key Laboratory of Internet Architecture，清华大学)
- 作者列表：Zifan Peng (香港科技大学（广州），清华大学State Key Laboratory of Internet Architecture)、Yule Liu (香港科技大学（广州）)、Zhen Sun (香港科技大学（广州）)、Mingchen Li (University of North Texas)、Zeren Luo (香港科技大学（广州）)、Jingyi Zheng (香港科技大学（广州）)、Wenhan Dong (香港科技大学（广州）)、Xinlei He (香港科技大学（广州），清华大学State Key Laboratory of Internet Architecture)、Xuechao Wang (香港科技大学（广州）)、Yingjie Xue (中国科学技术大学)、Shengmin Xu (福建师范大学)、Xinyi Huang (南京航空航天大学)

#

💡 **毒舌点评**

亮点：论文的系统性和工程完备性令人印象深刻，它不仅仅是一个数据集，更是一个集成了多种攻击、防御方法和分析工具的标准化评测平台，为尚处蓝海的音频大模型安全研究立下了第一个重要的坐标。短板：防御策略的探索相对浅尝辄止，仅仅是将视觉语言模型的方法简单适配，未能提出真正针对音频模态（如声学特征扰动）的、更有效的防御机制，使得“提出防御”这一目标打了折扣。

#

🔗 **开源详情**

- 代码：论文提供了GitHub仓库链接（https://github.com/sfofgalaxy/JALMBench），框架模块化，可扩展。
- 模型权重：论文评估了多个开源和商业模型，但并未贡献新的模型权重。未提及。
- 数据集：论文明确将数据集托管在HuggingFace平台（包含在上述GitHub仓库中），并详细说明了数据构成和获取方式。
- Demo：未提及在线演示。
- 复现材料：提供了详��的论文附录（如攻击方法实现细节、评测提示、额外的实验结果表格），以及Docker镜像以支持复现。
- 引用的开源项目：论文依赖多个开源工具，包括Google TTS, DeepL Translator, 各种TTS系统（F5-TTS, MMS-TTS, SpeechT5），以及评估中使用的LLM（如GPT-4o）。

📌 **核心摘要**

该论文旨在解决大型音频语言模型（LALM）日益增长的安全风险，特别是缺乏针对越狱攻击的统一评估框架和大规模基准数据集的问题。论文的核心贡献是构建了JALMBench，一个包含超过24.5万音频样本（>1000小时）和1.1万文本样本的全面基准，支持评估12个主流LALM、8种攻击方法（4种文本迁移、4种音频原生）和5种防御策略。与已有零散的工作相比，JALMBench是首个系统化、模态统一、覆盖全面的评估平台。主要实验结果显示，音频原生攻击（如AdvWave）的成功率极高（平均96.2%），远高于直接有害查询（平均21.5%），表明当前LALM在音频模态存在严重安全漏洞。论文还通过深入分析揭示了关键发现：离散音频令牌化策略比连续特征提取更能保持跨模态安全一致性；现有防御方法（如AdaShield）仅能小幅降低攻击成功率（约19.6个百分点）。该工作的实际意义在于为LALM安全研究提供了权威的评估标准，指明了防御研究的迫切性。主要局限性在于对防御策略的探索不够深入，未能提出针对音频模态特性的有效新防御。

#

---

