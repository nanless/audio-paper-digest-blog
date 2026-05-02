---
title: "ICLR 2026 - 音频分类 论文列表"
date: 2026-05-03
draft: false
tags: ["音频分类"]
categories: [iclr-2026]
description: "共 3 篇 ICLR 2026 音频分类 方向论文"
hiddenInHomeList: true
---

# ICLR 2026 - 音频分类

共 **3** 篇论文

[← 返回 ICLR 2026 总览](/audio-paper-digest-blog/posts/iclr2026-summary/)

---

| 排名 | 论文 | 评分 | 分档 |
|------|------|------|------|
| 🥇 | [Resp-Agent: An Agent-Based System for Multimodal Respiratory](/audio-paper-digest-blog/posts/2026-05-03-resp-agent-an-agent-based-system-for-multimodal) | 8.0分 | 前25% |
| 🥈 | [Unmute the Patch Tokens: Rethinking Probing in Multi-Label A](/audio-paper-digest-blog/posts/2026-05-03-unmute-the-patch-tokens-rethinking-probing-in) | 7.5分 | 前25% |
| 🥉 | [PACE: Pretrained Audio Continual Learning](/audio-paper-digest-blog/posts/2026-05-03-pace-pretrained-audio-continual-learning) | 7.5分 | 前25% |

---

## 📋 论文详情

### 🥇 [Resp-Agent: An Agent-Based System for Multimodal Respiratory Sound Generation and Disease Diagnosis](/audio-paper-digest-blog/posts/2026-05-03-resp-agent-an-agent-based-system-for-multimodal)

🔥 **8.0/10** | 前25% | #音频分类 | #多模态模型 | #数据增强 #流匹配

👥 **作者与机构**

- 第一作者：Pengfei Zhang（香港科技大学（广州））
- 通讯作者：Li Liu（香港科技大学（广州））
- 作者列表：Pengfei Zhang（香港科技大学（广州））、Tianxin Xie（未说明）、Minghao Yang（未说明）、Li Liu（香港科技大学（广州））

💡 **毒舌点评**

亮点在于其“分析-生成”闭环的系统级设计，将诊断器的弱点反馈给生成器进行针对性数据合成，这在医疗音频领域是新颖且有价值的尝试。但论文在将核心贡献归为“首个”多模态大语言模型时略显武断，且Thinker-A2CA的具体规划逻辑和决策过程在方法部分描述不够透明，更像是一个黑箱调度器。

🔗 **开源详情**

- 代码：是，论文提供了公开的代码仓库链接：https://github.com/zpforlove/Resp-Agent。
- 模型权重：是，论文提到训练好的模型检查点已托管在 https://huggingface.co/AustinZhang/resp-agent-models。
- 数据集：是，论文整理的Resp-229k数据集已发布在 https://huggingface.co/datasets/AustinZhang/resp-agent-dataset。
- Demo：论文中未提及在线演示链接。
- 复现材料：论文提供了训练脚本、配置文件、精确的复现命令。在附录C��详细说明了实验设置，包括优化器、学习率调度、批量大小等关键超参数。
- 论文中引用的开源项目：引用了BEATs（音频编码器）、Vocos（声码器）、Longformer（骨干网络）、DeepSpeed（训练加速）、Qwen3-0.6B-Base（LLM骨干）、DeepSeek-R1-Distill-Qwen-7B和DeepSeek-V3.2-Exp（用于数据生成和规划器）。

📌 **核心摘要**

1.  问题：基于深度学习的呼吸音听诊面临两大挑战：将音频信号转换为频谱图会丢失相位和瞬态声学事件等信息；公开、标注良好的多模态（音频+文本）数据集稀缺且类别严重不平衡。
2.  方法：提出了Resp-Agent，一个由新型“主动对抗性课程代理”（Thinker-A2CA）协调的闭环多模态系统。该系统包含三个核心模块：作为中央规划器的Thinker；基于条件流匹配（CFM）和模态注入技术的可控音频生成器（Generator）；基于模态编织和稀疏全局注意力的鲁棒诊断器（Diagnoser）。
3.  创新：1) 构建了大规模基准数据集Resp-229k（229k条记录+LLM生成的临床摘要）。2) 设计了内容-风格解耦的两阶段生成器，能合成逼真的病理呼吸音。3) 提出了具有音频锚点的模态编织诊断器，实现文本与音频的早期深度融合。
4.  结果：在ICBHI官方评测集上，Resp-Agent取得72.7%的Score，超越之前SOTA（67.55%）超过5个百分点。在Resp-229k跨域测试集上，通过生成器平衡数据后，诊断器的Macro-F1从0.212提升至0.598。详细对比见下表。

| 方法 | 骨干网络 | 预训练数据 | Sp (%) | Se (%) | Score (%) | 来源 |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| Dong et al. (SOTA*) | AST | IN+AS | 85.99 | 49.11 | 67.55 | 主文Table 2 |
| Resp-Agent [Ours] | LLM+Longformer | HF+SPR | 79.29 | 66.10 | 72.70 | 主文Table 2 |

| 设置 | 方法 | B (k) | Acc | Macro-F1 | 来源 |
| :--- | :--- | :--- | :--- | :--- | :--- |
| Test-CD | No-Synth (CE) | 0 | 0.849 | 0.212 | 主文Table 3 |
| Test-CD | Thinker-A2CA | 50 | 0.887 | 0.598 | 主文Table 3 |

5.  意义：为数据稀缺的医疗音频领域提供了一个将主动分析与定向生成相结合的统一框架，并发布了大规模多模态基准，推动了呼吸音智能分析的鲁棒性和公平性。
6.  局限：论文未深入讨论生成音频的临床真实性验证或医生评估；Thinker-A2CA的规划算法（依赖LLM）可能成本高昂且推理时间较长；跨机构、跨设备的评估虽已设计，但模型在真实临床环境中的泛化能力仍需更多验证。

---

### 🥈 [Unmute the Patch Tokens: Rethinking Probing in Multi-Label Audio Classification](/audio-paper-digest-blog/posts/2026-05-03-unmute-the-patch-tokens-rethinking-probing-in)

✅ **7.5/10** | 前25% | #音频分类 | #预训练 | #模型评估 #基准测试

👥 **作者与机构**

-   第一作者：Lukas Rauch（University of Kassel）
-   通讯作者：未说明（论文中未明确标注通讯作者）
-   作者列表：
    -   Lukas Rauch（University of Kassel）
    -   René Heinrich（University of Kassel; Fraunhofer IEE）
    -   Houtan Ghaffari（Ghent University）
    -   Lukas Miklautz（ML and Systems Biology, MPI of Biochemistry）
    -   Ilyass Moummad（INRIA Montpellier）
    -   Bernhard Sick（University of Kassel）
    -   Christoph Scholz（University of Kassel; Fraunhofer IEE）

💡 **毒舌点评**

亮点：论文系统性地揭示了音频SSL评估中长期被忽视的“池化瓶颈”问题，并用优雅的二值化原型探针方法给出了高效解决方案，实验规模和广度堪称标杆。短板：方法本质上是为现有模型设计的评估改进，而非一种全新的表示学习范式，其提升虽然显著但受限于“探针”的天花板，最终性能仍难以完全匹敌端到端微调。

🔗 **开源详情**

详���
-   代码：提供GitHub仓库链接：`https://github.com/lurauch/unmute-patch-tokens/`。
-   模型权重：未直接提供本文训练的探针权重，但依赖的预训练SSL骨干（如EAT, BEATs, SSLAM等）均为公开模型。
-   数据集：提供了三个之前未公开数据集的Hugging Face链接：`https://huggingface.co/datasets/lrauch/desed`，`https://huggingface.co/datasets/lrauch/spass`，`https://huggingface.co/datasets/lrauch/urban-sed`。其他标准数据集（如AudioSet）为公开数据。
-   Demo：未提及。
-   复现材料：论文附录D详细说明了所有14个数据集的特征、11种池化的具体实现、超参数搜索的完整协议和固定设置，复现指南非常充分。
-   论文中引用的开源项目：主要依赖于各SSL骨干的官方实现（如`EAT`， `BEATs`），以及标准音频处理工具（如`scaper`）。

📌 **核心摘要**

1.  解决的问题：标准线性探针在评估音频自监督学习模型时性能不佳，尤其是在多标签音频任务上，这导致研究者仍依赖计算成本高昂的微调来追求SOTA，阻碍了探针作为高效评估工具的使用。
2.  方法核心：提出二值化原型探针。该方法维护一组可学习的原型向量，在每次前向传播时通过符号函数将其二值化为±1。它计算每个原型与冻结音频特征图中所有时频块的余弦相似度，并通过最大池化聚合，最终用线性分类器将原型分数映射为类别标签。这是一种类条件、多向量的池化策略。
3.  与已有方法相比的新颖之处：不同于将整个特征图压缩为单一全局向量（如线性探针、注意力池化），该方法为每个类别（或通过原型隐式地）生成多个判别性描述符，更适应多标签音频中声音事件分散、局部的特点。同时，相比先前的原型方法，它简化了设计（原型与类别解耦、无需显式正交损失），并通过二值化实现了32倍的内存压缩。
4.  主要实验结果：在涵盖13个数据集（包括通用音频和生物声学）和6个SSL骨干的广泛基准测试中，二值化原型探针显著优于线性探针和其他注意力池化方法。例如，在`as20k`数据集上，平均比线性探针高出14.41% mAP。该方法改变了基于探针评估的骨干网络排名（如图6所示），证明线性探针是对模型质量的“不忠实评估者”。
       关键对比数据*（摘自论文表2）：
| 骨干 | 线性探针 (mAP) | 原型探针 (protobin) (mAP) |
| :--- | :--- | :--- |
| EAT | 17.29 | 31.67 |
| BEATs | 24.71 | 31.54 |
| SSLAM | 17.04 | 30.94 |
| Dasheng | 20.98 | 29.94 |
（在`as20k`数据集上的结果，显示原型探针带来巨大提升）

5.  实际意义：确立了探针（特别是原型探针）作为评估音频SSL模型的一种可靠且高效的范式，挑战了社区对微调的过度依赖，有助于更公平、低成本地比较不同预训练模型。
6.  主要局限性：1） 尽管大幅缩小了差距，探针性能在多标签任务上仍低于微调（如图2所示）。2） 方法的有效性可能部分依赖于所评估的基于ViT的骨干，对其他架构的泛化性需进一步验证。

---

### 🥉 [PACE: Pretrained Audio Continual Learning](/audio-paper-digest-blog/posts/2026-05-03-pace-pretrained-audio-continual-learning)

✅ **7.5/10** | 前25% | #音频分类 | #预训练 #持续学习 | #预训练 #持续学习

👥 **作者与机构**

- 第一作者：未说明 （摘要仅列出姓名，无法确认）
- 通讯作者：未说明 （摘要未提供相关信息）
- 作者列表：Chang Li（未说明）、Kanglei Zhou（未说明）、Liyuan Wang（未说明） （摘要未提及任何作者所属机构）

💡 **毒舌点评**

亮点：该工作敏锐地指出了视觉领域的PEFT方法在音频持续学习上“水土不服”的根本原因（表示不对齐），并为此设计了极具针对性的解决方案（PACE），不是简单套用，而是基于音频特性做了深刻分析和改造。短板：论文摘要中未提及任何代码、模型或数据集的开源信息，对于一个提出新方法并建立新基准的工作而言，这显著降低了其立即被社区验证和跟进的可能性，也让其宣称的“显著优于基线”的结论在可复现性上打了折扣。

🔗 **开源详情**

- 代码：论文中未提及代码链接。
- 模型权重：未提及。
- 数据集：未提及是否公开或如何获取。
- Demo：未提及。
- 复现材料：论文摘要未提及是否提供训练细节、配置文件、检查点或详细附录说明。
- 论文中引用的开源项目：摘要未提及。
- 总结：论文中未提及开源计划。这在当前AI研究实践中是一个显著的缺陷。

📌 **核心摘要**

1. 要解决什么问题：预训练音频模型在真实场景中面临数据分布随时间变化的问题（持续学习，CL）。直接应用在视觉领域有效的参数高效微调（PEFT）策略到音频上效果不佳，因为音频模型更强调低级频谱细节而非高级语义，导致预训练表示与下游任务存在严重的不对齐。
2. 方法核心是什么：本文提出了PACE方法。它首先改进了“首次会话适应”（FSA）下的分析分类器，引入正则化以防止表示饱和；其次，通过“多会话适应”和自适应子空间正交PEFT来更好地对齐语义，缓解表示偏移；最后，设计了基于频谱的边界感知扰动，以减少任务间表示重叠，提升稳定性。
3. 与已有方法相比新在哪里：这是首次对预训练模型下的音频CL进行系统性研究。与直接迁移视觉CL方法不同，本文深入分析了音频领域的独特挑战（上游-下游不对齐），并据此提出了一整套从分析到方法的针对性解决方案（PACE），包括正则化分析器、多会话适应和特定扰动策略。
4. 主要实验结果如何：在六个不同的音频CL基准上，PACE方法显著优于当前最先进的基线。论文摘要未提供具体数值，但声称取得了“显著的性能提升”。
5. 实际意义是什么：为构建能够在真实动态音频环境中（如不断出现的环境声、演进的音乐流派）持续学习和适应的AI系统提供了理论基础和实用工具，是迈向鲁棒且可扩展的音频持续学习的重要一步。
6. 主要局限性是什么：论文摘要未明确指出局限性，但可推断：1）所提方法的复杂性可能增加计算开销；2）有效性可能高度依赖于预训练模型本身的表示质量；3）论文未提及开源任何资源，极大限制了其实际影响力和可复现性。

---

