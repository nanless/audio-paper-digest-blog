---
title: "ICLR 2026 - 音乐信息检索 论文列表"
date: 2026-05-03
draft: false
tags: ["音乐信息检索"]
categories: [iclr-2026]
description: "共 1 篇 ICLR 2026 音乐信息检索 方向论文"
hiddenInHomeList: true
---

# ICLR 2026 - 音乐信息检索

共 **1** 篇论文

[← 返回 ICLR 2026 总览](/audio-paper-digest-blog/posts/iclr2026-summary/)

---

| 排名 | 论文 | 评分 | 分档 |
|------|------|------|------|
| 🥇 | [LadderSym: A Multimodal Interleaved Transformer for Music Pr](/audio-paper-digest-blog/posts/2026-05-03-laddersym-a-multimodal-interleaved-transformer) | 7.5分 | 前25% |

---

## 📋 论文详情

### 🥇 [LadderSym: A Multimodal Interleaved Transformer for Music Practice Error Detection](/audio-paper-digest-blog/posts/2026-05-03-laddersym-a-multimodal-interleaved-transformer)

✅ **7.5/10** | 前25% | #音乐信息检索 | #多模态模型 | #跨模态 #提示学习

👥 **作者与机构**

- 第一作者：Benjamin Shiue-Hal Chou (普渡大学)
- 通讯作者：论文中未明确指定通讯作者（作者邮箱均列出，无标注）
- 作者列表：
    - Benjamin Shiue-Hal Chou (普渡大学)
    - Purvish Jajal (普渡大学)
    - Nicholas John Eliopoulos (普渡大学)
    - James C. Davis (普渡大学)
    - George K. Thiruvathukal (洛约拉大学芝加哥分校)
    - Kristen Yeon-Ji Yun (普渡大学)
    - Yung-Hsiang Lu (普渡大学)

💡 **毒舌点评**

亮点：LadderSym的设计思路非常巧妙，通过交替的跨流对齐模块“强迫”两个音频流在每一层都进行交互，同时用符号乐谱作为提示，直击了先前方法“听不准”和“看不清”两大痛点，性能提升显著。短板：模型的泛化边界在论文中界定得比较模糊，它主要解决了局部时间偏差，对于学生练习时整体速度严重偏差（如半速）的场景，论文自己也承认需要额外模块，这限制了其在真实辅导场景中的“一键可用”性。

🔗 **开源详情**

- 代码：论文提供了代码仓库链接：https://github.com/ben2002chou/LadderSYM。
- 模型权重：论文中未提及是否公开预训练模型权重。
- 数据集：
    - 使用的MAESTRO-E和CocoChorales-E数据集是公开可用的（由Chou et al. 2025创建）。
    - 新收集的真实初学者数据集（20首曲子）已在论文附录中描述，未明确说明是否公开下载。
- Demo：论文提到提供模型输出的演示示例，但链接在正文中被移除（占位符为“our demo page”），未提供具体URL。
- 复现材料：论文提供了极其详细的复现信息，包括：
    - 完整的训练超参数设置（Table 7）。
    - 数据集构建的算法（Algorithm 1）和详细描述（Appendix A.6, A.7）。
    - 输入输出的分词细节（Appendix A.2, A.3）。
    - 评估指标的定义（Appendix A.5）。
    - 明确的随机种子设置（seed=365）。
- 论文中引用的开源项目：
    - 模型组件：基于`EfficientTTMs`（MIT License）和`Polytune`（BSD 3-Clause）的代码进行适配。
    - 音频分词：遵循`MT3`（Gardner et al., 2022）和`Polytune`的方法。
    - MIDI合成：使用`MIDI-DDSP`（Wu et al., 2022）生成音频。
    - 评估指标：使用`mir_eval`包计算F1分数。

📌 **核心摘要**

这篇论文针对音乐学习者练习错误检测任务，提出了一个名为LadderSym的新型多模态Transformer模型。该模型旨在解决现有方法（如Polytune）的两个核心局限：1) 晚期融合设计限制了参考音频与练习音频之间的精细对齐能力；2) 将乐谱仅以音频形式表示会引入频率重叠歧义，尤其在和弦演奏时。LadderSym的核心创新包括：1) 设计了一个名为“Ladder”的双流编码器，在每个Transformer层之前交替进行跨流对齐与融合，实现了特征提取与跨模态对齐的解耦；2) 在解码器端引入符号乐谱（MIDI）作为提示（Prompt），为模型提供明确的参考信息，减少了音频表示的歧义。实验在MAESTRO-E和CocoChorales-E合成数据集以及新收集的真实初学者数据集上进行。相比之前的SOTA模型Polytune，LadderSym在MAESTRO-E上将漏音（Missed Note）的F1分数从26.8%提升至56.3%，多音（Extra Note）F1从72.0%提升至86.4%；在CocoChorales-E上，漏音F1从51.3%提升至61.7%，多音F1从46.8%提升至61.4%。该工作不仅推动了音乐错误检测任务，其提出的跨模态频繁对齐与非对称特征提取的设计原则，对强化学习中的奖励模型、人类技能评估等领域也具有启示意义。主要局限性在于模型对大幅度速度变化缺乏鲁棒性，且在密集和声场景下漏音检测仍具挑战。

---

