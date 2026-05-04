---
title: "ICLR 2026 - 语音识别 #语音合成 论文列表"
date: 2026-05-04
draft: false
tags: ["语音识别 #语音合成"]
categories: [iclr-2026]
description: "共 1 篇 ICLR 2026 语音识别 #语音合成 方向论文"
hiddenInHomeList: true
---

# ICLR 2026 - 语音识别 #语音合成

共 **1** 篇论文

[← 返回 ICLR 2026 总览](/audio-paper-digest-blog/posts/iclr2026-summary/)

---

| 排名 | 论文 | 评分 | 分档 |
|------|------|------|------|
| 🥇 | [Latent Speech-Text Transformer](/audio-paper-digest-blog/posts/2026-05-04-latent-speech-text-transformer) | 7.0分 | 前25% |

---

## 📋 论文详情

### 🥇 [Latent Speech-Text Transformer](/audio-paper-digest-blog/posts/2026-05-04-latent-speech-text-transformer)

✅ **7.0/10** | 前25% | #语音识别 #语音合成 | #预训练 | #语音识别 #语音合成

👥 **作者与机构**

- 第一作者：Yen-Ju Lu ( Johns Hopkins University, Center for Language and Speech Processing )，工作于 Meta 期间完成。
- 通讯作者：Srinivasan Iyer, Duc Le ( Meta Superintelligence Labs )
- 作者列表：
    - Yen-Ju Lu ( Johns Hopkins University, CLSP )
    - Yashesh Gaur ( Meta Superintelligence Labs )
    - Wei Zhou ( Meta Superintelligence Labs )，工作于 Meta 期间完成。
    - Benjamin Muller ( Meta Superintelligence Labs )
    - Jesus Villalba ( Johns Hopkins University, CLSP )
    - Najim Dehak ( Johns Hopkins University, CLSP )
    - Luke Zettlemoyer ( Meta Superintelligence Labs )
    - Gargi Ghosh ( Meta Superintelligence Labs )
    - Mike Lewis ( Meta Superintelligence Labs )
    - Srinivasan Iyer ( Meta Superintelligence Labs )
    - Duc Le ( Meta Superintelligence Labs )

#

💡 **毒舌点评**

亮点在于精准识别了语音-文本模型因序列长度悬殊导致的“计算不公平”问题，并借鉴了文本领域的字节级Transformer思想，设计出一套从静态、对齐到课程学习的渐进式语音分块方案，有效提升了模型效率和跨模态性能。短板是部分最有效方案（如对齐分块）在推理时仍依赖外部对齐模型（Wav2Vec2+CTC），课程学习虽缓解了此问题，但完全无对齐依赖的端到端训练方案更具吸引力；此外，论文聚焦于预训练和补全任务，对更复杂的生成、理解或实时对话任务的探索尚待深入。

#

🔗 **开源详情**

-   代码：提供代码仓库链接：`https://github.com/facebookresearch/lst`。
-   模型权重：论文中未提及是否公开预训练模型权重。
-   数据集：使用了多个公开数据集（LibriLight, People’s Speech, Multilingual LibriSpeech, Spotify），并在附录中说明了各自的数据许可。论文中未提供统一的数据获取链接。
-   Demo：论文中未提及在线演示。
-   复现材料：提供了详尽的训练细节（数据集构成、比例、预处理、交错数据构造方法）、模型架构配置（表7）、优化器设置、训练硬件、超参数以及消融实验设置。附录包含大量补充细节。
-   引用的开源项目/模型：Llama 2 (tokenizer), HuBERT (speech tokenizer), Wav2Vec2+CTC (alignment), HiFi-GAN (vocoder), Kokoro TTS (评估用), Whisper (CER计算), SentencePiece (BPE), BLT (架构灵感)。

📌 **核心摘要**

1.  解决的问题：现有的自回归语音-文本模型因语音token序列远长于文本，导致计算开销巨大，严重阻碍了模型的扩展效率和跨模态对齐效果。
2.  方法核心：提出Latent Speech-Text Transformer (LST)。其核心是一个分块机制，将密集的语音token聚合成更高层次、信息更密集的“语音块”（latent speech patches）。全局Transformer则在交错的文本token和语音块序列上进行自回归建模。
3.  创新之处：相比直接对语音token建模或尝试BPE压缩（效果不佳），LST通过一个轻量级的分块编码器和解码器，动态地将语音片段压缩成块。创新性地设计了多种分块策略（静态、对齐、混合、课程），其中课程分块是关键，它在训练早期利用对齐信息获得语义一致的块，后期过渡到静态分块，使模型摆脱推理时对对齐工具的依赖。
4.  实验结果：在故事补全基准测试上，LST（特别是课程分块）在计算控制和数据控制设置下均显著优于基线。例如，在计算控制训练中，语音HellaSwag准确率绝对提升最高达6.5%，文本任务也同步提升。模型扩展性分析（从420M到1.8B参数）表明，LST的收益随模型规模增长而扩大。在下游任务中，LST稳定了ASR适应过程，并在ASR和TTS推理中将有效序列长度缩短约4倍，降低了计算成本。可视化分析显示，对齐分块能产生语义连贯的语音块嵌入。
5.  实际意义：为构建更高效、可扩展的统一语音-文本基础模型提供了一条切实路径，能显著降低训练和推理成本，同时提升模型的跨模态理解与生成能力。
6.  主要局限性：研究局限于半双工（交替对话）建模，未涉及全双工实时对话；核心预训练阶段未探索指令微调；部分最优分块策略（如对齐）在训练时仍依赖外部对齐模型。

---

