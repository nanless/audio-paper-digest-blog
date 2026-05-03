---
title: "ICLR 2026 - 数据集 论文列表"
date: 2026-05-03
draft: false
tags: ["数据集"]
categories: [iclr-2026]
description: "共 1 篇 ICLR 2026 数据集 方向论文"
hiddenInHomeList: true
---

# ICLR 2026 - 数据集

共 **1** 篇论文

[← 返回 ICLR 2026 总览](/audio-paper-digest-blog/posts/iclr2026-summary/)

---

| 排名 | 论文 | 评分 | 分档 |
|------|------|------|------|
| 🥇 | [SpeakerVid-5M: A Large-Scale High-Quality Dataset for Audio-](/audio-paper-digest-blog/posts/2026-05-03-speakervid-5m-a-large-scale-high-quality-dataset) | 8.5分 | 前25% |

---

## 📋 论文详情

### 🥇 [SpeakerVid-5M: A Large-Scale High-Quality Dataset for Audio-Visual Dyadic Interactive Human Generation](/audio-paper-digest-blog/posts/2026-05-03-speakervid-5m-a-large-scale-high-quality-dataset)

🔥 **8.5/10** | 前25% | #数据集 | #数据集构建 | #音视频 #多模态模型

👥 **作者与机构**

- 第一作者：Youliang Zhang（清华大学；StepFun）
- 通讯作者：Xiu Li（清华大学）
- 作者列表：
    - Youliang Zhang（清华大学，StepFun）
    - Zhaoyang Li（StepFun）
    - Duomin Wang†（StepFun；†表示共同第一作者或贡献相当）
    - Jiahe Zhang（未明确说明机构，根据上下文可能为StepFun）
    - Deyu Zhou（StepFun；香港科技大学广州）
    - Zixin Yin（StepFun；香港科技大学）
    - Xili Dai（香港科技大学；StepFun）
    - Gang Yu（StepFun）
    - Xiu Li‡（清华大学；‡表示通讯作者）

💡 **毒舌点评**

亮点：这是一篇极为务实且急需的工作，用工业级的数据管线（从YouTube收集到多模态标注再到严格过滤）填补了音视频交互虚拟人领域“无大规模高质量数据可用”的关键空白，堪称该方向研究的“基建”工程，开源承诺也值得称赞。
短板：其提出的AR基线模型结构（结合Qwen2.5-Omni、CosyVoice等现有模型）更像一个验证性的集成方案，创新深度有限；尽管数据集巨大（5.2M clips），但主要来源是YouTube，论文坦诚的偏差分析（如白人/英语内容占主导）提示我们，训练出的模型在跨文化、跨种族场景下的泛化能力可能面临挑战。

🔗 **开源详情**

- 代码：论文明确承诺公开数据处理代码和基线模型代码（“the data processing code will be publicly released”）。
- 模型权重：论文未明确说明基线模型权重是否公开，但基于其开源承诺，很可能包含。论文中未明确提及权重链接。
- 数据集：将公开发布，包括原始视频链接、所有标注和数据处理代码。获取方式需遵循其CC-BY-NC 4.0许可和数据使用协议。
- Demo：论文中未提及。
- 复现材料：提供了详细的训练细节（超参数、硬件、时长）、模型架构说明、数据标注文件使用指南（附录A.7, A.8, A.11），以及完整的伦理与偏差分析，复现信息充分。
- 引用的开源项目：论文依赖并引用了众多开源工具/模型，包括：
    - 场景分割：PySceneDetect
    - 说话人分离：3D-Speaker
    - 目标检测：YOLOv8
    - 音唇同步：SyncNet
    - 人脸识别：ArcFace
    - 多模态大模型：Qwen2.5-VL, Qwen2.5-Omni, Qwen3
    - 语音识别：Whisper
    - 人体姿态估计：DWpose
    - 视频质量评估：DOVER
    - VAE：参考OpenSora Plan中的3D-VAE
    - 语音声码器：CosyVoice 2
    - 视觉生成组件：参考了MAR, NOVA等工作的设计

📌 **核心摘要**

1.  解决的问题：当前学术界严重缺乏用于训练和评估“音频视觉双人交互式虚拟人”生成模型的大规模、高质量、带丰富标注的数据集，这限制了该领域的发展。
2.  方法核心：提出并构建了 SpeakerVid-5M 数据集。其核心是一套系统的数据处理流程：从YouTube收集原始视频，经过场景分割、说话人分离、人脸检测、唇音同步校准、身份修正等预处理，再利用大型多模态模型（如Qwen2.5-VL）进行多模态标注，最后通过视频质量、音频质量、清晰度、运动模糊等多维度严格过滤，得到最终数据集。同时，提供了一个基于自回归框架的基线生成模型和一个专用基准测试 VidChatBench。
3.  与已有方法相比新在哪里：这是首个专门针对音视频双人交互（Dyadic）场景的大规模数据集。与现有数据集相比，它不仅规模巨大（5.2M片段，8.7K小时），还首次提供了完整的、高质量的双人对话音视频对（770K对，1.8K小时），并支持多种交互类型（对话、独白、倾听、多轮）和丰富的标注（文本、骨架、模糊度、运动得分等），且数据质量（93%为1080P以上）和分层设计（预训练子集+SFT子集）更优。
4.  主要实验结果：论文在其自建的VidChatBench基准上验证了数据集和基线模型的有效性。基线模型采用“音频+视觉联合生成”的端到端方案，在双人对话（Dyadic）设置下，视频质量指标（FVD: 28.82）、身份保持度（ArcFace: 0.772）、情感对齐度（FIDEmotion: 3.22）均优于文本条件（Conditioned）设置，并证明了空间Transformer模块和噪声训练策略的有效性。关键结果对比如下表所示：

| 方法 | 设置 | 联合音频 | 空间Transformer | 噪声 | FVD ↓ | ArcFace ↑ | Syncconf ↑ | FIDEmotion ↓ |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| 我们的基线 | 双人(Dyadic) | ✓ | ✓ | ✓ | 28.82 | 0.772 | 2.698 | 3.22 |
| 我们的基线 | 条件(Conditioned) | ✓ | ✓ | ✓ | 30.43 | 0.758 | 2.655 | 3.23 |

5.  实际意义：该数据集的开源将极大推动学术界对交互式虚拟人、多模态对话、可控人物动画等任务的研究，为开发更自然、更具情境感知能力的虚拟助手、数字主播等应用提供关键数据支持。
6.  主要局限性：1）数据源于YouTube，存在显著的人口统计学偏差（如英语/白人内容占主导），可能限制模型的泛化性；2）提供的基线模型相对简单，其生成质量与前沿的扩散模型方法相比仍有差距（尽管在推理速度和手势质量上有优势）；3）伦理与版权问题复杂，采用仅提供URL和标注的开源方式是一种规避方案，但原始数据获取的责任转移给了用户。

---

