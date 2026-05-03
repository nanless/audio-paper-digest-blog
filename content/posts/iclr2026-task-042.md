---
title: "ICLR 2026 - 音频分类 #音频生成 论文列表"
date: 2026-05-03
draft: false
tags: ["音频分类 #音频生成"]
categories: [iclr-2026]
description: "共 1 篇 ICLR 2026 音频分类 #音频生成 方向论文"
hiddenInHomeList: true
---

# ICLR 2026 - 音频分类 #音频生成

共 **1** 篇论文

[← 返回 ICLR 2026 总览](/audio-paper-digest-blog/posts/iclr2026-summary/)

---

| 排名 | 论文 | 评分 | 分档 |
|------|------|------|------|
| 🥇 | [Resp-Agent: An Agent-Based System for Multimodal Respiratory](/audio-paper-digest-blog/posts/2026-05-03-resp-agent-an-agent-based-system-for-multimodal) | 8.0分 | 前25% |

---

## 📋 论文详情

### 🥇 [Resp-Agent: An Agent-Based System for Multimodal Respiratory Sound Generation and Disease Diagnosis](/audio-paper-digest-blog/posts/2026-05-03-resp-agent-an-agent-based-system-for-multimodal)

🔥 **8.0/10** | 前25% | #音频分类 #音频生成 | #多模态模型 #流匹配 | #音频分类 #音频生成

👥 **作者与机构**

- 第一作者：Pengfei ZHANG（香港科技大学（广州））
- 通讯作者：Li Liu（香港科技大学（广州））
- 作者列表：Pengfei ZHANG（香港科技大学（广州））、Tianxin Xie（香港科技大学（广州））、Minghao Yang（香港科技大学（广州））、Li Liu（香港科技大学（广州））

💡 **毒舌点评**

亮点在于其构建的闭环智能体框架（Thinker-A2CA）和精心打造的大规模多模态数据集（Resp-229k），将数据生成与模型诊断能力紧密耦合，这种“自省式”的增强思路比盲目数据扩增高明得多；然而，其系统复杂度极高，多个组件（LLM规划器、流匹配生成器、长上下文诊断器）的性能高度依赖彼此，且评估完全建立在合成数据与跨域验证上，缺乏在真实、未知临床环境中的端到端部署验证，使得“临床实用性”这一最终目标的证明仍显遥远。

🔗 **开源详情**

*   **代码**：论文明确提供代码仓库链接：`https://github.com/zpforlove/Resp-Agent`。
*   **模型权重**：论文明确提供模型权重下载链接：`https://huggingface.co/AustinZhang/resp-agent-models`。
*   **数据集**：论文明确提供 Resp-229k 数据集下载链接：`https://huggingface.co/datasets/AustinZhang/resp-agent-dataset`。
*   **Demo**：论文中未提及在线演示（Demo）。
*   **复现材料**：论文提供了详细的训练配置、超参数设置（如学习率、批次大小、优化器参数）、架构描述，并在附录中提供了完整的实验设置（附录C）、数据审计流程（附录E）等信息，复现材料非常充分。
*   **论文中引用的开源项目**：引用了多个开源工具/模型，包括：
    *   **LLM骨干**：Qwen3-0.6B-Base, DeepSeek-V3.2-Exp, DeepSeek-R1-Distill-Qwen-7B
    *   **音频模型**：BEATs, Conformer, AST, PANNs, Whisper-Small, Vocos
    *   **文本模型**：BERT, RoBERTa, Longformer
    *   **生成模型**：c-WaveGAN, AudioLDM 2, StableAudio Open
    *   **框架/工具**：DeepSpeed, ICLR Code of Ethics。

📌 **核心摘要**

1.  **解决的问题**：当前基于深度学习的呼吸音分析面临两大挑战：一是单模态表示（如仅用频谱图）造成的信息损失，无法同时捕捉瞬态声学事件和临床文本上下文；二是缺乏大规模、高质量且类别不平衡的多模态数据集。
2.  **方法核心**：提出 Resp-Agent，一个由新颖的“主动对抗性课程智能体”（Thinker-A2CA）协调的闭环多模态系统。该系统包含一个可控的“生成器”和一个鲁棒的“诊断器”。生成器通过模态注入改造一个纯文本LLM，并利用流匹配解码器合成指定病理内容的呼吸音；诊断器则采用“模态编织”策略，将临床文本与音频token在输入层交织，并通过战略全局注意力（利用音频锚点）进行融合推理。
3.  **新意所在**：不同于静态流水线，Thinker-A2CA 作为中央控制器，主动识别诊断弱点并调度针对性合成，形成“诊断-生成”闭环。首次构建了包含22.9万条记录、配有LLM生成临床叙述的 Resp-229k 大规模基准。设计了内容-风格解耦的可控生成器与基于音频锚点的多模态诊断器。
4.  **主要实验结果**：在 ICBHI 四分类任务上，Resp-Agent 达到 72.7% 的分数（Sp=79.3%, Se=66.1%），显著超越此前最优音频模型。在 Resp-229k 的严格跨域测试集（Test-CD）上，完整系统在平衡数据后达到 0.8870 准确率和 0.5980 Macro-F1，远优于无合成基线（0.849/0.212）。消融实验验证了生成器内容-风格解耦能力（Style-Sim >0.9）以及诊断器中模态编织与音频锚点（≈80ms分辨率）的关键作用。
5.  **实际意义**：为医疗音频领域（特别是呼吸音）提供了一个将可控生成与鲁棒诊断相统一的系统化框架，推动了从被动分析到主动生成-诊断协同设计的范式转变，对医学教育、数据增强和模型可解释性研究有潜在价值。
6.  **主要局限**：系统依赖一个强大的中央LLM（DeepSeek-V3.2-Exp）进行规划，计算成本与可控性需权衡。评估严重依赖合成数据和严格的源离域协议，缺乏在真实、混杂临床场景中的前瞻性验证。生成器的质量依赖上游LLM生成的文本和风格参考，引入了额外的误差传播链。

---

