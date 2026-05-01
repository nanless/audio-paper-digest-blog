---
title: "ICASSP 2026 - 对抗样本 论文列表"
date: 2026-04-29
draft: false
tags: ["对抗样本"]
categories: [icassp-2026]
description: "共 1 篇 ICASSP 2026 对抗样本 方向论文"
hiddenInHomeList: true
---

# ICASSP 2026 - 对抗样本

共 **1** 篇论文

[← 返回 ICASSP 2026 总览](/audio-paper-digest-blog/posts/icassp2026-summary/)

---

| 排名 | 论文 | 评分 | 分档 |
|------|------|------|------|
| 🥇 | [Style Attack Disguise: When Fonts Become a Camouflage for Ad](/audio-paper-digest-blog/posts/2026-04-29-style-attack-disguise-when-fonts-become-a) | 7.0分 | 前25% |

---

## 📋 论文详情

### 🥇 [Style Attack Disguise: When Fonts Become a Camouflage for Adversarial Intent](/audio-paper-digest-blog/posts/2026-04-29-style-attack-disguise-when-fonts-become-a)

✅ **7.0/10** | 前25% | #对抗样本 | #数据增强 | #文本分类 #机器翻译

👥 **作者与机构**

- 第一作者：Yangshijie Zhang† (Lanzhou University)
- 通讯作者：Xingxing Jia⋆ (Lanzhou University, jiaxx@lzu.edu.cn)
- 作者列表：
    - Yangshijie Zhang† (Lanzhou University)
    - Xinda Wang† (Peking University)
    - Jialin Liu (Peking University)
    - Wenqiang Wang (Sun Yat-sen University)
    - Zhicong Ma (Lanzhou University)
    - Xingxing Jia⋆ (Lanzhou University)
- 机构：兰州大学、北京大学、中山大学

#

💡 **毒舌点评**

亮点：选题角度刁钻且极具现实意义，将社交媒体上常见的“花式字体”转化为对AI系统的武器，这种“社会工程学+技术漏洞”的结合方式颇有新意，且实验结果确实亮眼。短板：论文对“为什么这些字体能骗过LLM”的机制分析略显肤浅（仅提及“过度解释”），更像是一个现象观察和应用展示，理论贡献深度有限；同时，一个声称“即插即用”的框架却没有开源代码，让其宣称的“实用价值”打了折扣。

#

🔗 **开源详情**

- 代码：论文中未提及代码链接。
- 模型权重：未提及。
- 数据集：使用了公开数据集（SST5， Emotion， OPUS-100），但未提供SAD专用数据集。
- Demo：未提及。
- 复现材料：提供了基本的超参数设置（`α=β=0.5`, `T=25`）和字体类别描述，但缺少关键细节（如`m`值、字体库完整列表、攻击脚本）。
- 引用的开源项目：论文引用并基于`TextAttack`框架进行了部分基线实验。
- 总结：论文中未提及开源计划。

---

[← 返回 ICASSP 2026 论文分析](/audio-paper-digest-blog/posts/icassp2026-summary/)

📌 **核心摘要**

1.  要解决的问题：社交媒体用户广泛使用风格化字体（如数学字母、区域指示符）来装饰文本，这种视觉上的人类可读性与模型处理上的差异性之间存在“感知差距”，可被利用进行对抗攻击。
2.  方法核心：提出风格攻击伪装（SAD）框架，包含两种模式：SADlight（逐步替换，查询高效）和SADstrong（一次性全替换，攻击性强）。核心步骤是：首先通过注意力重要性评分（AIS） 和分词不稳定性评分（TIS） 的混合方法对单词进行排序，选择关键攻击目标；然后将目标单词的标准字符替换为视觉相似但编码不同的风格化字符。
3.  与已有方法的新颖之处：首次提出并系统化“风格层面”的对抗攻击，不同于传统的字符级（如错字）、词级（如同义词替换）或句子级攻击。该方法利用Unicode字符的视觉相似性，能在保持人类可读性的同时，干扰多种架构（WordPiece, BPE, LLM）的模型。
4.  主要实验结果：在情感分类（SST5, Emotion）和机器翻译（OPUS-100 En-Fr, En-Zh）任务上进行了广泛评估。关键结果包括：
    - 情感分类：在DistilBERT和RoBERTa上，SADlight以平均不到4次查询，达到44.48%-57.95%的攻击成功率（ASR），同时保持语义相似度（Sim）>0.96。SADstrong的ASR高达67.75%-87.10%。
    - 机器翻译：在OPUS-MT上，SADlight的相对BLEU（RDBLEU）达到0.55-0.63，显著高于多数基线；在商业翻译服务（Google， 百度， 阿里）上，SADlight的RDBLEU达到0.43-0.61。
    - 对LLM：在Qwen2.5-7B等模型上，SADlight取得了88%-99%的ASR，优于其他攻击方法。
    - 对抗复述防御：SAD的性能下降幅度小于其他攻击方法，显示出更强的鲁棒性。
5.  实际意义：揭示了当前NLP模型在处理真实世界中存在的风格化文本时存在的普遍脆弱性，为评估和增强模型鲁棒性提供了新的攻击向量和测试用例。
6.  主要局限性：论文未深入探讨针对此类攻击的有效防御机制；对LLM内部为何会被风格字体干扰的机理分析不够透彻；实验主要在英语数据上进行，对其他语言的泛化性未验证。

---

