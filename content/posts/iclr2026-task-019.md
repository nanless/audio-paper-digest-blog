---
title: "ICLR 2026 - 语音伪造检测 论文列表"
date: 2026-05-04
draft: false
tags: ["语音伪造检测"]
categories: [iclr-2026]
description: "共 1 篇 ICLR 2026 语音伪造检测 方向论文"
hiddenInHomeList: true
---

# ICLR 2026 - 语音伪造检测

共 **1** 篇论文

[← 返回 ICLR 2026 总览](/audio-paper-digest-blog/posts/iclr2026-summary/)

---

| 排名 | 论文 | 评分 | 分档 |
|------|------|------|------|
| 🥇 | [Tell me Habibi, is it Real or Fake?](/audio-paper-digest-blog/posts/2026-05-04-tell-me-habibi-is-it-real-or-fake) | 7.5分 | 前25% |

---

## 📋 论文详情

### 🥇 [Tell me Habibi, is it Real or Fake?](/audio-paper-digest-blog/posts/2026-05-04-tell-me-habibi-is-it-real-or-fake)

✅ **7.5/10** | 前25% | #语音伪造检测 | #数据集 | #音频深度伪造检测 #基准测试

👥 **作者与机构**

- 第一作者：Kartik Kuckreja (MBZUAI)
- 通讯作者：未明确说明（论文列出了作者邮箱，未指定通讯作者）
- 作者列表：Kartik Kuckreja (MBZUAI), Parul Gupta (Monash University), Injy Hamed (MBZUAI), Thamar Solorio (MBZUAI), Muhammad Haris Khan (MBZUAI), Abhinav Dhall (Monash University)

💡 **毒舌点评**

这篇论文的亮点在于它精准地切入了深度伪造检测研究中的一个“盲区”——多语言和代码转换内容，特别是阿拉伯语-英语混合场景，并为此构建了一个大规模、高质量的数据集。然而，其短板在于作为一篇发表的论文，其核心贡献更偏向于“基础设施”建设（数据集与评估框架），而在提出全新的、可泛化的检测模型算法方面着墨不多，创新点主要集中在数据生成流程而非检测器本身。

🔗 **开源详情**

- 代码：论文承诺“数据生成代码和评估脚本将公开”，但未在文中提供具体的代码仓库链接。
- 模型权重：未提及是否公开基线检测模型的权重。
- 数据集：是，数据集公开。获取方式需通过签署EULA（最终用户许可协议），并需要提供大学IRB批准ID。
- Demo：未提及。
- 复现材料：论文提供了详细的数据集生成流程描述（包括转录本操作规则、TTS模型组合、唇同步模型选择）、评估指标、基线模型配置细节以及部分附录（如提示词、增强示例）。训练数据的划分策略（多标签分层抽样）已说明。
- 论文中引用的开源项目：XTTS-v2, OpenVoice-v2, Fairseq, GPT-TTS, Whisper, Yolov5, MesoNet, Xception, BA-TFD/BA-TFD+, Diff2Lip, LatentSync, XLSR-Mamba, Video-LLaMA, Jais-3B, Qwen-2.5-7B等。

📌 **核心摘要**

1.  解决的问题：现有的深度伪造检测研究主要关注单语言内容，严重忽略了全球范围内普遍存在的多语言和代码转换（Code-Switching，CSW）语音场景，这导致检测模型在面对此类真实世界内容时泛化能力不足。
2.  方法核心：论文提出并构建了ArEnAV，首个大规模的阿拉伯语-英语音视频深度伪造数据集。该数据集包含387k个视频（765+小时），特点是包含句内代码转换、方言变体和纯阿拉伯语内容。
3.  创新之处：与现有数据集相比，ArEnAV首次系统性地覆盖了代码转换场景（表1）。其数据生成流程（图1）创新性地整合了四种针对多语言的文本到语音（TTS）模型和两种扩散式唇同步模型，并利用大语言模型（GPT-4.1-mini）对原始转录本进行可控的内容和语种切换修改。
4.  主要实验结果：
    - 时间定位：现有SOTA模型（如BA-TFD+）在ArEnAV上的AP@0.5性能（3.74）远低于其在LAV-DF（96.30）和AV-1M（44.42）数据集上的表现（表11a）。
    - 深度伪造检测：在ArEnAV上，未经微调的SOTA模型（如LipForensics）AUC接近随机猜测（49.76），而经过在AV-1M上预训练的BA-TFD+微调后，达到最佳性能AUC 79.97（表10）。
    - 用户研究：人类用户对ArEnAV中深度伪造视频的检测准确率仅为60%，且难以定位伪造区域（AP@0.5为0.79）（表5），证明了任务的极端难度。
5.  实际意义：ArEnAV数据集为评估和推动多语言、多模态深度伪造检测技术的发展提供了首个重要基准，揭示了当前检测技术的重大缺陷，促使研究面向更真实、更多样的全球场景。
6.  主要局限性：数据集存在真实与伪造视频数量不平衡；受限于当前阿拉伯语ASR模型，部分生成的转录本可能包含噪声；大语言模型在执行某些复杂指令（如“意义+翻译”）时表现不完美，可能导致部分伪造样本与真实样本过于相似（附录A.2）。

---

