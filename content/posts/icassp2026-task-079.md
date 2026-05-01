---
title: "ICASSP 2026 - 语音识别 #语音合成 论文列表"
date: 2026-04-29
draft: false
tags: ["语音识别 #语音合成"]
categories: [icassp-2026]
description: "共 1 篇 ICASSP 2026 语音识别 #语音合成 方向论文"
hiddenInHomeList: true
---

# ICASSP 2026 - 语音识别 #语音合成

共 **1** 篇论文

[← 返回 ICASSP 2026 总览](/audio-paper-digest-blog/posts/icassp2026-summary/)

---

| 排名 | 论文 | 评分 | 分档 |
|------|------|------|------|
| 🥇 | [TAGARELA - A Portuguese Speech Dataset from Podcasts](/audio-paper-digest-blog/posts/2026-04-29-tagarela-a-portuguese-speech-dataset-from-podcasts) | 7.0分 | 前25% |

---

## 📋 论文详情

### 🥇 [TAGARELA - A Portuguese Speech Dataset from Podcasts](/audio-paper-digest-blog/posts/2026-04-29-tagarela-a-portuguese-speech-dataset-from-podcasts)

✅ **7.0/10** | 前25% | #语音识别 #语音合成 | #预训练 | #语音识别 #语音合成

👥 **作者与机构**

- 第一作者：Frederico Santos de Oliveira（Federal University of Mato Grosso (UFMT)）
- 通讯作者：未说明
- 作者列表：Frederico Santos de Oliveira (UFMT), Lucas Rafael Stefanel Gris (UFG), Alef Iury Siqueira Ferreira (UFG), Augusto Seben da Rosa (UNESP), Alexandre Costa Ferro Filho (UFG), Edresson Casanova (NVIDIA), Christopher Dane Shulby (Elsa Speak), Rafael Teixeira Sousa (UFMT), Diogo Fernandes Costa Silva (UFG), Anderson da Silva Soares (UFG), Arlindo Rodrigues Galvão Filho (UFG)

💡 **毒舌点评**

这篇论文在解决“数据饥饿”问题上做得非常扎实，为葡萄牙语社区贡献了一个规模空前（近9000小时）且处理精细的语音数据集，其多阶段处理流水线的工程设计体现了对实际数据挑战的深刻理解。然而，其核心创新更偏向于工程集成与数据处理，而非算法突破；此外，部分关键转录步骤依赖商业闭源服务，这为追求完全开源复现的研究者设置了一定的门槛。

🔗 **开源详情**

- 代码：论文中未提及完整的处理流水线代码仓库链接。
- 模型权重：提及提供了训练好的重叠检测模型和��噪模型（基于Vocos）的检查点用于下载。还提及了ASR/TTS实验中使用的模型，如Parakeet v2 FT, Orpheus-TTS, Chatterbox等，部分模型本身为开源项目。
- 数据集：公开。论文明确声明TAGARELA数据集已公开发布，并提供了访问地址：https://freds0.github.io/TAGARELA/。
- Demo：论文中未提及在线演示。
- 复现材料：提供了处理流水线的高层次描述、数据集统计信息和模型评估结果。提供了用于特定步骤（重叠检测、降噪）的模型检查点。但缺少详细的超参数配置、训练日志等深度复现材料。
- 论文中引用的开源项目：pyannote.audio（说话人分离）、Wav2vec2-XLS-R（重叠检测、转录一致性检查）、Whisper large-v3（转录）、Vocos（降噪）、RedimNet B6（说话人嵌入）、HDBSCAN（聚类）、wav2vec-base（方言分类）。

---

[← 返回 ICASSP 2026 论文分析](/audio-paper-digest-blog/posts/icassp2026-summary/)

📌 **核心摘要**

1.  要解决的问题：葡萄牙语作为全球广泛使用的语言，缺乏像英语那样大规模、高质量的公开语音数据集，这严重制约了葡萄牙语自动语音识别和文本转语音技术的发展。
2.  方法核心：作者从“Cem Mil Podcasts”原始语料出发，设计并实施了一个多阶段数据处理流水线。该流水线包括音频标准化、说话人分离、基于模型的重叠语音检测与过滤、基于商业ASR种子语料的自举式转录（微调Whisper生成伪标签），以及最后的音频增强（降噪）。
3.  与已有方法相比新在哪里：相比于已有的小规模葡萄牙语语料（如CORAA，290小时），TAGARELA在规模上实现了量级飞跃（8972小时），并且通过精细的流水线显著提升了音频和转录质量，使其同时适用于ASR和通常需要更干净音频的TTS任务。
4.  主要实验结果：
    *   ASR：在TAGARELA测试集上，微调后的Parakeet v2模型取得最佳性能，WER为15.18%，CER为7.09%。
    *   TTS：使用2800小时干净子集训练的Orpheus-TTS和Chatterbox模型，在生成语音的可懂度和自然度上与真实语音差距较小。
    *   数据质量客观评估：使用无参考指标（STOI, PESQ, SI-SDR）评估了降噪后的音频质量。
    *   实验结果表格见下文详细分析。
5.  实际意义：TAGARELA数据集的发布，为葡萄牙语语音技术研究提供了一个可与顶级英语数据集媲美的基准资源，有望大幅推动该语言领域ASR和TTS模型性能的提升。
6.  主要局限性：论文承认数据集在文本-音频对齐方面仍有改进空间；部分转录步骤依赖商业API；性别分布上男性语音占比较大（70%）。

---

