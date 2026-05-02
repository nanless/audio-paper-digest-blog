---
title: "ICLR 2026 - 语音伪造检测 论文列表"
date: 2026-05-03
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
| 🥇 | [Tell me Habibi, is it Real or Fake?](/audio-paper-digest-blog/posts/2026-05-03-tell-me-habibi-is-it-real-or-fake) | 8.5分 | 前25% |

---

## 📋 论文详情

### 🥇 [Tell me Habibi, is it Real or Fake?](/audio-paper-digest-blog/posts/2026-05-03-tell-me-habibi-is-it-real-or-fake)

🔥 **8.5/10** | 前25% | #语音伪造检测 | #数据集 | #多语言 #多模态模型

👥 **作者与机构**

- 第一作者：Kartik Kuckreja (MBZUAI)
- 通讯作者：未明确说明（论文提供了作者邮箱，但未指定通讯作者）
- 作者列表：Kartik Kuckreja (MBZUAI), Parul Gupta (Monash University), Injy Hamed (MBZUAI), Thamar Solorio (MBZUAI), Muhammad Haris Khan (MBZUAI), Abhinav Dhall (Monash University)

💡 **毒舌点评**

这篇论文的核心亮点在于其填补了一个非常具体但重要的现实空白：首个大规模、包含阿拉伯-英语语码转换（Code-Switching）的音视频深度伪造数据集，其生成流程设计周全，评估全面。然而，短板在于它本质上是一项“数据集建设与基准测试”工作，其提出的检测模型（如BA-TFD）并非原创，论文的主要贡献在于揭示了现有SOTA模型在面对这种语言混合场景时的集体性失效，而非提出一种新的、能解决该问题的模型架构。

🔗 **开源详情**

-   代码：论文中明确表示将公开数据生成代码和评估脚本（见“REPRODUCIBILITY STATEMENT”），但未提供具体仓库链接。
-   模型权重：未提及公开训练好的伪造检测模型权重。
-   数据集：公开。ArEnAV数据集将公开发布，获取需遵守其EULA协议，要求提供大学IRB编号并用于非商业学术研究（见图7）。
-   Demo：未提及。
-   复现材料：提供了非常详细的复现信息，包括：完整的生成流程描述、文本操控的详细规则（表2）与示例（表16）、用于文本生成的完整提示词（图6）、真实扰动的完整列表（表15）、评估脚本以及详细的EULA协议。
-   论文中引用的开源项目：包括Yolo-v5 (人脸检测), Whisper-v2 (语音识别), wav2vec2 (强制对齐), XTTS-v2, OpenVoice-v2, Fairseq Arabic TTS, GPT-TTS (语音生成), Diff2Lip, LatentSync (唇形同步), Xception, Meso4/Inception (检测模型), BA-TFD/BA-TFD+ (检测/定位模型), XLSR-Mamba (音频检测), Video-LLaMA2/2.1 (多模态大模型)等。

📌 **核心摘要**

1.  问题：现有的深度伪造检测研究和数据集大多局限于单语内容，忽视了现实世界中普遍存在的语码转换现象，尤其是阿拉伯语-英语的混合使用，这为检测带来了新的挑战。
2.  方法核心：提出了一个名为ArEnAV的大规模数据集构建流程。该流程包括：使用GPT-4.1-mini对原始语音转录文本进行受控修改（引入语义变化、方言转换或语码转换）；使用四种TTS模型生成新语音并用两种基于扩散的lip-sync模型生成匹配视频，从而创建逼真的音视频伪造样本。
3.  新意：这是首个专注于阿拉伯语-英语语码转换、包含句内语码转换、方言变异且规模庞大（387k视频，765小时以上）的音视频深度伪造数据集。与已有数据集相比，它明确引入了“语码转换”这一语言现象作为核心挑战。
4.  主要实验结果：
    *   模型检测性能：在ArEnAV上，最先进的音视频深度伪造检测模型（如BA-TFD+）性能显著下降，仅在微调后达到82%的AUC（见下表），远低于其在单语数据集（如AV-1M）上的表现。
    *   跨数据集泛化：在多个SOTA模型（如Face-X-Ray, LipForensics）的跨数据集测试中，它们在ArEnAV上的AUC接近随机猜测（50%），表明现有模型难以泛化到多语言语码转换场景。
    *   人类评估：人类参与者对ArEnAV视频的伪造检测准确率仅为60%，定位精度（AP@0.5）仅为0.79%，证实了该任务的难度。
5.  实际意义：ArEnAV为训练和评估能够应对多语言、语码转换场景的更鲁棒的深度伪造检测模型提供了关键基准，推动了该领域向更现实、更多样化的方向发展。
6.  主要局限性：数据生成依赖现有的TTS和lip-sync模型，其质量可能影响伪造样本的多样性；数据集中真假视频数量不平衡；LLM在执行“语义+翻译”模式时指令遵循能力有限。

| 方法 | 模态 | 预训练数据 | 微调数据 | 全集 AUC | 全集 Acc. |
| :--- | :--- | :--- | :--- | :--- | :--- |
| BA-TFD+ | AV | AV-1M | 无 (零样本) | 60.96 | 25.84 |
| BA-TFD+ | AV | AV-1M | ArEnAV | 79.97 | 27.44 |
| BA-TFD+ | AV | AV-1M & ArEnAV | ArEnAV | 75.91 | 44.31 |

表10关键行（简化）：在ArEnAV全集上，BA-TFD+模型在仅经AV-1M预训练时（零样本）AUC为60.96，微调后提升至79.97。

---

