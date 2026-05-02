---
title: "ICLR 2026 - 音频深度伪造检测 论文列表"
date: 2026-05-02
draft: false
tags: ["音频深度伪造检测"]
categories: [iclr-2026]
description: "共 1 篇 ICLR 2026 音频深度伪造检测 方向论文"
hiddenInHomeList: true
---

# ICLR 2026 - 音频深度伪造检测

共 **1** 篇论文

[← 返回 ICLR 2026 总览](/audio-paper-digest-blog/posts/iclr2026-summary/)

---

| 排名 | 论文 | 评分 | 分档 |
|------|------|------|------|
| 🥇 | [Tell me Habibi, is it Real or Fake?](/audio-paper-digest-blog/posts/2026-05-02-tell-me-habibi-is-it-real-or-fake) | 8.0分 | 前25% |

---

## 📋 论文详情

### 🥇 [Tell me Habibi, is it Real or Fake?](/audio-paper-digest-blog/posts/2026-05-02-tell-me-habibi-is-it-real-or-fake)

🔥 **8.0/10** | 前25% | #音频深度伪造检测 | #数据集 | #多语言 #语音克隆

👥 **作者与机构**

- 第一作者：Kartik Kuckreja (MBZUAI)
- 通讯作者：未说明
- 作者列表：Kartik Kuckreja (MBZUAI), Parul Gupta (Monash University), Injy Hamed (MBZUAI), Thamar Solorio (MBZUAI), Muhammad Haris Khan (MBZUAI), Abhinav Dhall (Monash University)

💡 **毒舌点评**

这篇论文精准地抓住了现有深度伪造检测数据集在多语言（尤其是阿拉伯语-英语语码转换）场景下的巨大空白，并提供了一个规模空前的数据集（387k视频），填补了这一重要缺口。然而，其数据生成管道高度依赖多个前沿但复杂的TTS/唇同步模型组合以及GPT-4的文本编辑，虽然保证了多样性，但也使得“伪造”样本的生成过程本身成为一个“黑盒”集成，其质量的上限和下限都极大程度地受限于这些商业/开源模型的能力，而非论文提出的统一框架。

🔗 **开源详情**

- 代码：论文中未提及代码仓库链接。
- 模型权重：未提及。
- 数据集：论文明确表示将公开数据集，并提供了获取所需的EULA表单（图7）。访问需通过机构IRB批准和签署EULA。
- Demo：未提及在线演示。
- 复现材料：论文提供了数据生成管道的详细描述、关键工具（Whisper-v2, GPT-4.1-mini, XTTS-v2, OpenVoice-v2, Fairseq, Diff2Lip, LatentSync）以及评估脚本的开源承诺。附录中提供了详细的文本操作提示（图6）、数据分布、扰动列表和身份重叠分析等复现相关信息。
- 论文中引用的开源项目：Whisper, wav2vec 2.0, XTTS-v2, OpenVoice-v2, Fairseq, Diff2Lip, LatentSync, XLSR-Mamba, Jais-3B, Qwen2.5等。

📌 **核心摘要**

1.  问题：现有的深度伪造检测研究主要针对单语内容，忽略了全球普遍存在的多语言，特别是阿拉伯语-英语语码转换（CSW）场景下的检测挑战。
2.  方法核心：提出了ArEnAV，首个大规模阿拉伯-英语音视频深度伪造数据集，并设计了一个三阶段数据生成流程：利用GPT-4.1-mini进行受控的文本（语码转换）操纵，使用4种TTS和2种唇同步模型组合生成伪造的音频和视频。
3.  创新点：数据集首次系统性地包含了句内语码转换、方言变体和纯阿拉伯语内容；生成流程专门针对阿拉伯语-英语混合内容设计；提供了多维度的基准测试，包括与现有单语/多语言数据集的对比、SOTA模型评估及用户研究。
4.  主要实验结果：
    - 数据集对比：ArEnAV是目前最大的多语言音视频深度伪造数据集（387k视频，765小时），远超PolyGlotFake（15k）和Illusion（1.37M但非重点CSW）。伪造片段更长，检测更难。
    - 检测性能：现有SOTA模型（如BA-TFD+）在ArEnAV上性能大幅下降。在测试集上，BA-TFD+（AV-1M预训练）的AP@0.5仅为3.74，而微调后AUC可达79.97%。
    - 跨数据集泛化：在DFDC, FF++, CelebDF上表现良好的模型（如Face-X-Ray, LipForensics），在ArEnAV上AUC接近随机猜测（~50%）。
    - 用户研究：人类参与者的检测准确率仅为60.00%，定位精度（AP@0.5）仅0.79，证明该任务极具挑战性。85%的失败案例发生在语码转换中的英语单词部分。
5.  实际意义：为构建更具鲁棒性、能应对真实世界多语言语码转换场景的深度伪造检测模型提供了关键资源和基准，推动了该领域向全球化、多样化方向发展。
6.  主要局限性：生成管道复杂，依赖外部模型（Whisper, GPT-4, TTS，唇同步模型），其质量和特性直接影响数据集质量；“含义+翻译”模式下，LLM有时未能充分改变语义；数据集目前仅限于阿拉伯语和英语。

---

