---
title: "ICLR 2026 - 音频大模型 论文列表"
date: 2026-05-03
draft: false
tags: ["音频大模型"]
categories: [iclr-2026]
description: "共 1 篇 ICLR 2026 音频大模型 方向论文"
hiddenInHomeList: true
---

# ICLR 2026 - 音频大模型

共 **1** 篇论文

[← 返回 ICLR 2026 总览](/audio-paper-digest-blog/posts/iclr2026-summary/)

---

| 排名 | 论文 | 评分 | 分档 |
|------|------|------|------|
| 🥇 | [AudioTrust: Benchmarking The Multifaceted Trustworthiness of](/audio-paper-digest-blog/posts/2026-05-03-audiotrust-benchmarking-the-multifaceted) | 8.0分 | 前10% |

---

## 📋 论文详情

### 🥇 [AudioTrust: Benchmarking The Multifaceted Trustworthiness of Audio Large Language Models](/audio-paper-digest-blog/posts/2026-05-03-audiotrust-benchmarking-the-multifaceted)

🔥 **8.0/10** | 前10% | #音频大模型 | #基准测试 | #模型评估 #鲁棒性

👥 **作者与机构**

- 第一作者：Kai Li（清华大学计算机系，人工智能研究院，与其他人共同第一作者）、Can Shen（北京师范大学-香港浸会大学联合国际学院）、Yile Liu（早稻田大学）、Jirui Han（独立研究员）、Kelong Zheng（华中科技大学）、Xuechao Zou（北京交通大学）
- 通讯作者：Xinfeng Li（南洋理工大学）
- 作者列表：Kai Li（清华大学计算机系）， Can Shen（北京师范大学-香港浸会大学联合国际学院）， Yile Liu（早稻田大学）， Jirui Han（独立研究员）， Kelong Zheng（华中科技大学）， Xuechao Zou（北京交通大学）， Lionel Z. Wang（香港理工大学）， Shun Zhang（青海民族大学）， Xingjian Du（罗切斯特大学）， Hanjun Luo（浙江大学）， Yingbin Jin（香港理工大学）， Xinxin Xing（独立研究员）， Ziyang Ma（上海交通大学）， Yue Liu（新加坡国立大学）， Yifan Zhang（中国科学院）， Junfeng Fang（新加坡国立大学）， Kun Wang（南洋理工大学）， Yibo Yan（香港科技大学（广州））， Gelei Deng（南洋理工大学）， Haoyang Li（香港理工大学）， Yiming Li（南洋理工大学）， Xiaobin Zhuang（字节跳动）， Tianlong Chen（北卡罗来纳大学教堂山分校）， Qingsong Wen（松鼠AI学习）， Tianwei Zhang（南洋理工大学）， Yang Liu（南洋理工大学）， Haibo Hu（香港理工大学）， Zhizheng Wu（香港中文大学（深圳））， Xiaolin Hu（清华大学计算机系）， Eng Siong Chng（南洋理工大学）， Wenyuan Xu（浙江大学）， XiaoFeng Wang（南洋理工大学）， Wei Dong（南洋理工大学）

💡 **毒舌点评**

这篇论文最大的价值在于为音频大语言模型的安全可信评估“立了规矩”，其六维框架和4420个样本的数据集构建非常扎实，填补了该领域的空白。但坦率地说，其评估严重依赖GPT-4o/Qwen3作为“裁判”，这种“用大模型评判大模型”的范式虽然高效，却可能将偏见和局限性系统性地带入评估结果，其本身的“可信度”仍需更根本的、不依赖模型的验证手段来确立。

🔗 **开源详情**

- 代码：是。论文提供了公开的GitHub仓库链接：https://github.com/JusperLee/AudioTrust，包含评测框架、自动化脚本和排行榜生成代码。
- 模型权重：未提及。本文为评估工作，不涉及发布新模型。
- 数据集：是。论文提到公开了包含4420+音频样本的数据集元数据及获取方式，具体可通过上述代码仓库或论文平台获取。
- Demo：未提及。
- 复现材料：提供了详细的附录（C节及附录D-I），说明了平台设计、数据集构建、评估协议和指标计算方法，复现指导较为充分。
- 论文中引用的开源项目：引用并依赖于多个开源模型或工具作为评测对象或基础，如Qwen2-Audio, MiniCPM-o, SALMONN, Ultravox, OpenS2S, F5-TTS, Common Voice数据集等。

📌 **核心摘要**

1. 要解决什么问题：当前针对音频大语言模型（ALLMs）的可信度评估框架缺乏，现有的文本安全基准无法覆盖由音频声学特性（如音色、口音、背景噪声）引入的独特风险。
2. 方法核心是什么：提出AudioTrust，首个系统化评估ALLMs可信度的基准框架，涵盖公平性、幻觉、安全性、隐私、鲁棒性和认证六个维度，通过26个子任务和一个包含超过4420个真实场景音频样本的数据集进行大规模评测。
3. 与已有方法相比新在哪里：首次将评估焦点从文本语义转向由音频物理特性引发的特有风险，例如由非语义声学线索引发的偏见、基于情感声音的越狱攻击、声学场景逻辑矛盾导致的幻觉，以及通过声纹推断隐私信息等。
4. 主要实验结果如何：对14个SOTA开源和闭源ALLMs进行评测。结果揭示，闭源模型（如GPT-4o Audio）在总体安全性和隐私保护（直接泄露）上通常更强，但开源模型（如Kimi-Audio）在某些方面也表现突出；所有模型在应对基于声音线索的推断性隐私泄露（如从声纹推断年龄、种族）时都极其脆弱，平均拒绝率仅约12%。
5. 实际意义是什么：为未来音频大模型的安全、可靠部署提供了量化评估标准和关键洞见，指明了当前模型在音频特定风险下的局限，推动社区关注并解决这些新出现的可信度挑战。
6. 主要局限性是什么：评估流程高度依赖以GPT-4o和Qwen3作为自动化评估器，其评价的绝对准确性和与人类判断的一致性有待进一步验证；评估框架主要关注风险识别，对如何防御这些风险的深入探讨较少。

---

