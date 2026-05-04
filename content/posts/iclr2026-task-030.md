---
title: "ICLR 2026 - 语音生成 论文列表"
date: 2026-05-04
draft: false
tags: ["语音生成"]
categories: [iclr-2026]
description: "共 1 篇 ICLR 2026 语音生成 方向论文"
hiddenInHomeList: true
---

# ICLR 2026 - 语音生成

共 **1** 篇论文

[← 返回 ICLR 2026 总览](/audio-paper-digest-blog/posts/iclr2026-summary/)

---

| 排名 | 论文 | 评分 | 分档 |
|------|------|------|------|
| 🥇 | [TASTE: Text-Aligned Speech Tokenization and Embedding for Sp](/audio-paper-digest-blog/posts/2026-05-04-taste-text-aligned-speech-tokenization-and) | 7.0分 | 前25% |

---

## 📋 论文详情

### 🥇 [TASTE: Text-Aligned Speech Tokenization and Embedding for Spoken Language Modeling](/audio-paper-digest-blog/posts/2026-05-04-taste-text-aligned-speech-tokenization-and)

✅ **7.0/10** | 前25% | #语音生成 | #自回归模型 | #语音大模型 #预训练

👥 **作者与机构**

- 第一作者：Liang-Hsuan Tseng (台湾大学电信工程学研究所，MediaTek Research实习)
- 通讯作者：未明确说明，但Yi-Chang Chen和Hung-yi Lee提供了单位邮箱。
- 作者列表：
    - Liang-Hsuan Tseng (台湾大学电信工程学研究所，MediaTek Research实习)
    - Yi-Chang Chen (MediaTek Research)
    - Kuan-Yi Lee (台湾大学电信工程学研究所，MediaTek Research实习)
    - Da-Shan Shiu (MediaTek Research)
    - Hung-yi Lee (台湾大学人工智能研究中心)

💡 **毒舌点评**

论文提出了一个解决语音-文本联合建模中序列长度不匹配问题的优雅方案，即让语音token在分词阶段就与文本转录对齐，这确实简化了后续的语言模型训练。然而，该方法强依赖于一个准确的ASR前端（尽管论文进行了鲁棒性测试），且当前验证主要集中在语音续写等相对简单的任务上，对于更复杂的多轮对话、指令跟随等能力未做探讨，其作为“基础模型”的通用性仍有待证明。

🔗 **开源详情**

- 代码：论文中明确提及提供代码，地址为 `https://mtkresearch.github.io/TASTE-SpokenLM.github.io`（实际为项目主页，需跳转至代码仓库）。
- 模型权重：论文中明确提及提供模型，地址同上。
- 数据集：使用公开数据集 Emilia 和 LibriTTS，未提供独有数据集。
- Demo：论文中明确提及提供在线演示，地址为上述网址。
- 复现材料：论文在附录中提供了非常详细的超参数、训练配置、评估细节和算法伪代码（如解决分词器不匹配的算法1），复现信息充分。
- 引用的开源项目：Whisper (编码器), S3 token/Vocoder (语音单元和声码器), LLaMA (基座LLM), DeepSpeed/Liger Kernel (训练加速), Montreal Forced Aligner (对齐工具), HiFi-GAN。

📌 **核心摘要**

1.  要解决什么问题：现有语音语言模型（SLM）在联合文本和语音建模时，面临模态间隙和序列长度不匹配的挑战。传统语音分词（如EnCodec）产生的token序列远长于对应文本，需要复杂的对齐策略（如插入填充、交错生成）才能进行联合建模，增加了复杂性。
2.  方法核心是什么：提出TASTE，一种文本对齐的语音分词与嵌入方法。它直接将语音分词过程与文本转录对齐：首先使用ASR获得文本转录，然后通过一个基于注意力的聚合器（以文本转录为查询，ASR编码器最后一层为键、浅层为值）将语音表示压缩并硬对齐到每个文本token上，最后通过RVQ量化。训练目标为语音重建。由此得到的语音token/嵌入在序列长度和位置上与文本token一一对应。
3.  与已有方法相比新在哪里：不同于以往先独立分词再设法对齐的思路，TASTE在分词阶段就完成了文本-语音对齐，实现了一种“端到端”的联合分词。这使得在联合语言模型（TASLM）中，可以同时预测下一个文本token和对应的语音token/嵌入，无需额外对齐规则。其语音token专注于携带副语言信息（如韵律、音色），避免了冗余编码文本内容。
4.  主要实验结果如何：
    *   语音重建：在LibriSpeech上，TASTE以极低比特率（~150 bps，约3 tokens/秒）实现了与高比特率方法（如S3 token, 600 bps）可比的重建质量和相似度（表1）。
    *   语音续写：在3秒语音提示后的续写任务上，基于1.3B参数LLaMA微调的TASLM在GPT-4o语义评分（3.16）和人工MOS（4.16）上显著优于其他7B级SLM（表2）。
    *   似然基准：在SALMON（声学）和StoryCloze（语义）基准上表现与其它联合建模方法相当，在StoryCloze上达到最佳（76.5%/76.7%）。
    *   少样本语音QA：TASLM是少数能在少样本场景下保持基座文本LLM性能的SLM（表3）。
5.  实际意义是什么：TASTE提供了一种更简洁、高效的构建文本-语音联合模型的方式，降低了训练复杂度。其极低比特率的语音分词对带宽敏感的传输和存储场景有潜在价值。文本对齐的特性也自然支持了文本对齐的语音编辑（如图3），为精细的语音控制提供了新思路。
6.  主要局限性是什么：论文明确提到，当前模型缺乏对话轮次管理和指令跟随能力；仅在英语上验证，多语言泛化性未知；分词器聚焦于清晰语音，未处理重叠语音、非语言事件（如笑声）；系统延迟和流式性能未优化。

---

