---
title: "ICLR 2026 - 语音转换 #语音匿名化 论文列表"
date: 2026-05-04
draft: false
tags: ["语音转换 #语音匿名化"]
categories: [iclr-2026]
description: "共 1 篇 ICLR 2026 语音转换 #语音匿名化 方向论文"
hiddenInHomeList: true
---

# ICLR 2026 - 语音转换 #语音匿名化

共 **1** 篇论文

[← 返回 ICLR 2026 总览](/audio-paper-digest-blog/posts/iclr2026-summary/)

---

| 排名 | 论文 | 评分 | 分档 |
|------|------|------|------|
| 🥇 | [TVTSyn: Content-Synchronous Time-Varying Timbre for Streamin](/audio-paper-digest-blog/posts/2026-05-04-tvtsyn-content-synchronous-time-varying-timbre) | 7.5分 | 前25% |

---

## 📋 论文详情

### 🥇 [TVTSyn: Content-Synchronous Time-Varying Timbre for Streaming Voice Conversion and Anonymization](/audio-paper-digest-blog/posts/2026-05-04-tvtsyn-content-synchronous-time-varying-timbre)

✅ **7.5/10** | 前25% | #语音转换 #语音匿名化 | #流式处理 #自监督学习 #向量量化 | #语音转换 #语音匿名化

👥 **作者与机构**

- 第一作者：Waris Quamer（Texas A&M University, Department of Computer Science and Engineering）
- 通讯作者：未说明
- 作者列表：Waris Quamer（Texas A&M University, Department of Computer Science and Engineering）、Mu-Ruei Tseng（Texas A&M University, Department of Computer Science and Engineering）、Ghady Nasrallah（Texas A&M University, Department of Computer Science and Engineering）、Ricardo Gutierrez-Osuna（Texas A&M University, Department of Computer Science and Engineering）

#

💡 **毒舌点评**

亮点：论文精准地抓住了流式语音处理中“静态说话人嵌入 vs 动态内容”这一核心矛盾，并提出了“全局音色记忆”加“球面插值”的优雅解决方案，让说话人特征能“跟着”内容实时微调，这对于提升合成语音的自然度和表现力是实实在在的贡献。短板：虽然在流式系统中表现优异，但其匿名化效果（EER 47.55%）与顶级离线方案（如T8-4的48.25%）相比并未形成代差优势，且整个系统的训练和评估高度依赖特定的预训练模型（HuBERT, X-vector）和数据集（LibriTTS），通用性有待验证。

#

🔗 **开源详情**

- 代码：论文中未提及代码仓库链接。
- 模型权重：未提及公开权重。
- 数据集：使用了公开数据集（LibriTTS, VoxCeleb, CMU ARCTIC等），但论文本身未创建或公开新数据集。
- Demo：论文提供了音频样本链接：`https://anonymized0826.github.io/TVTSyn/`。
- 复现材料：附录提供了详细的架构配置和超参数（表5, 街6），有助于理解模型设计。
- 论文中引用的开源项目：引用了SpeechBrain（用于预训练说话人编码器）、fairseq（用于HuBERT模型）。

📌 **核心摘要**

本文针对实时语音转换和说话人匿名化中因使用静态说话人嵌入而与动态内容表示不匹配导致语音质量下降的问题，提出了TVTSyn系统。该系统引入了一种内容同步的时变音色（TVT）表示，通过一个全局音色记忆（GTM）将全局说话人嵌入扩展为多个音色“切面”，内容特征在每一帧动态关注这些切面，并通过门控和球面线性插值（Slerp）生成时变的说话人条件向量，从而在保持身份几何结构的同时允许局部平滑变化。此外，系统采用因子化向量量化瓶颈正则化内容网络，减少残留的说话人信息。实验表明，TVTSyn在保持低于80ms GPU延迟的流式能力下，在自然度、说话人转换和匿名化方面均优于现有的流式基线系统。具体地，在语音转换任务中，其合成语音的自然度评分（NISQA MOS）为3.91，目标说话人相似度（Trg-SIM）为0.77；在语音匿名化任务中，其词错误率（WER）为5.35%，等错误率（EER）为47.55%（懒惰攻击者模型），在隐私-效用权衡上表现突出。该工作的实际意义在于为实时通信、隐私保护等应用提供了高性能、低延迟的语音匿名化方案。主要局限包括训练依赖于特定的预训练模型和数据集，且其完全匿名化效果（需进一步降低EER）和对口音/情感等副语言特性的可控性仍有提升空间。

#

---

