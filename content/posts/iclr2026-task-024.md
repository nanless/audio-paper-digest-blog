---
title: "ICLR 2026 - 语音大模型 论文列表"
date: 2026-05-03
draft: false
tags: ["语音大模型"]
categories: [iclr-2026]
description: "共 3 篇 ICLR 2026 语音大模型 方向论文"
hiddenInHomeList: true
---

# ICLR 2026 - 语音大模型

共 **3** 篇论文

[← 返回 ICLR 2026 总览](/audio-paper-digest-blog/posts/iclr2026-summary/)

---

| 排名 | 论文 | 评分 | 分档 |
|------|------|------|------|
| 🥇 | [Latent Speech-Text Transformer](/audio-paper-digest-blog/posts/2026-05-03-latent-speech-text-transformer) | 8.5分 | 前25% |
| 🥈 | [Towards True Speech-to-Speech Models Without Text Guidance](/audio-paper-digest-blog/posts/2026-05-03-towards-true-speech-to-speech-models-without-text) | 7.5分 | 前25% |
| 🥉 | [Scaling Speech Tokenizers with Diffusion Autoencoders](/audio-paper-digest-blog/posts/2026-05-03-scaling-speech-tokenizers-with-diffusion) | 6.5分 | 前25% |

---

## 📋 论文详情

### 🥇 [Latent Speech-Text Transformer](/audio-paper-digest-blog/posts/2026-05-03-latent-speech-text-transformer)

🔥 **8.5/10** | 前25% | #语音大模型 | #自回归模型 | #语音合成 #语音理解

👥 **作者与机构**

- 第一作者：Yen-Ju Lu（约翰霍普金斯大学 Center for Language and Speech Processing；Meta Superintelligence Labs（工作期间））
- 通讯作者：Srinivasan Iyer（Meta Superintelligence Labs）， Duc Le（Meta Superintelligence Labs）
- 作者列表：Yen-Ju Lu（约翰霍普金斯大学 CLSP, Meta）、Yashesh Gaur（Meta Superintelligence Labs）、Wei Zhou（Meta Superintelligence Labs）、Benjamin Muller（Meta Superintelligence Labs）、Jesus Villalba（约翰霍普金斯大学 CLSP）、Najim Dehak（约翰霍普金斯大学 CLSP）、Luke Zettlemoyer（Meta Superintelligence Labs）、Gargi Ghosh（Meta Superintelligence Labs）、Mike Lewis（Meta Superintelligence Labs）、Srinivasan Iyer（Meta Superintelligence Labs）、Duc Le（Meta Superintelligence Labs）

💡 **毒舌点评**

亮点：论文敏锐地抓住了语音大模型扩展的核心瓶颈——语音与文本的“信息密度鸿沟”，并用一种优雅的“潜空间分块”方法来对齐粒度，既提升了效率又促进了跨模态知识迁移，思路清晰且有效。
短板：最引人注目的“对齐分块”策略严重依赖外部对齐模型（Wav2Vec2+CTC）提供的强制对齐信息，这限制了其在纯无监督或低资源场景下的适用性，尽管“课程学习”部分缓解了推理依赖，但训练阶段的依赖仍是潜在短板。

🔗 **开源详情**

- 代码：提供代码仓库链接：`https://github.com/facebookresearch/lst`。
- 模型权重：论文中未提及公开预训练模型权重。
- 数据集：使用了多个公开数据集（LibriLight, People’s Speech, MLS, Spotify Podcast），并说明了其许可证。论文未提供新的数据集。
- Demo：论文中未提及在线演示。
- 复现材料：非常充分。附录提供了模型架构详细配置（表7）、优化器超参数、训练硬件设置（H100）、数据构建流程（交织数据生成、对齐方法）、评估基准细节等。
- 依赖的开源项目：明确提到了依赖 HuBERT（语音分词）、Llama 2 tokenizer（文本分词）、Wav2Vec2+CTC（强制对齐）、Kokoro TTS（生成评估语音）、Whisper（TTS质量评估）。

📌 **核心摘要**

1.  问题：当前自回归语音-文本大模型因语音token序列过长，导致计算效率远低于文本模型，严重阻碍了模型的规模扩展和有效的跨模态对齐。
2.  方法：提出潜空间语音-文本Transformer。核心是在自回归主干网络之前，引入一个轻量级的“分块编码器”，将冗长的语音token序列动态聚合为更高层、更紧凑的“语音块”（patch）。这些语音块与文本token的粒度对齐，再一同送入全局Transformer建模。同时，提出对齐分块、静态分块和课程学习分块三种策略。
3.  创新：将BLT架构适配并应用于语音-文本建模；提出了基于文本对齐的语音分块策略和课程学习方法，以无监督方式逐步替代对齐依赖；验证了分块操作能同时提升语音和文本的性能。
4.  实验结果：在故事完成度基准（Speech HellaSwag, StoryCloze等）上，LST（课程分块）在计算量控制下，相比基线绝对提升高达+6.5%（语音HellaSwag）。模型规模从420M扩展到1.8B时，LST的优势持续增长。在ASR适配中，LST仅需基线1/4的训练迭代数即可达到更低WER（6.8% vs 基线在1k迭代时的140%）。在TTS中，LST能减少约4倍的生成步数而不损失质量。以下是关键结果表格：

| 模型 | 语音HellaSwag (S->S) | 文本HellaSwag (T->T) | 语音StoryCloze (S->S) | 文本StoryCloze (T->T) |
| :--- | :---: | :---: | :---: | :---: |
| 基线SpeechLLM | 39.0 | 47.0 | 59.1 | 67.8 |
| LST (课程分块) | 45.5 | 52.2 | 61.2 | 71.6 |
（表3：计算预算控制下的主要对比结果）

5.  意义：为构建高效、可扩展的语音-文本基础模型提供了关键架构思路，通过降低有效序列长度，显著减少了训练和推理成本，同时提升了模型能力。
6.  局限：主要关注双工（轮流发言）场景，未涉及全双工实时对话；预训练阶段部分分块策略依赖强制对齐标注；评估集中在故事完成度，未探索指令微调和更多下游任务。

---

### 🥈 [Towards True Speech-to-Speech Models Without Text Guidance](/audio-paper-digest-blog/posts/2026-05-03-towards-true-speech-to-speech-models-without-text)

✅ **7.5/10** | 前25% | #语音大模型 | #预训练 | #语音对话系统 #流匹配

👥 **作者与机构**

- 第一作者：Xingjian Zhao（复旦大学）
- 通讯作者：Xipeng Qiu（复旦大学）
- 作者列表：Xingjian Zhao（复旦大学、上海创新研究院、MOSI.AI），Zhe Xu（复旦大学、上海创新研究院、MOSI.AI），Luozhijie Jin（复旦大学、上海创新研究院、MOSI.AI），Yang Wang（复旦大学、MOSI.AI），Hanfu Chen（复旦大学、MOSI.AI），Yaozhou Jiang（复旦大学、MOSI.AI），Ke Chen（复旦大学、上海创新研究院、MOSI.AI），Ruixiao Li（复旦大学、上海创新研究院、MOSI.AI），Mingshu Chen（复旦大学、MOSI.AI），Ruiming Wang（复旦大学、MOSI.AI），Wenbo Zhang（复旦大学、上海创新研究院、MOSI.AI），Qinyuan Cheng（复旦大学、MOSI.AI），Zhaoye Fei（复旦大学、MOSI.AI），Shimin Li（MOSI.AI），Xipeng Qiu（复旦大学、上海创新研究院、MOSI.AI）

💡 **毒舌点评**

论文提出的“真正语音到语音”��式和相应的模态分层分割架构设计有巧思，实验也相当全面，在语音问答等任务上取得了有竞争力的结果。然而，其技术实现门槛较高（依赖大规模预训练文本LLM和高质量语音编解码器），并且合成数据在训练中扮演了关键角色，这对其在更广泛真实场景下的有效性和泛化能力提出了疑问。

🔗 **开源详情**

- 代码：论文中承诺“我们将发布代码和模型以支持进一步研究”，但未提供代码仓库链接。
- 模型权重：论文中承诺发布模型，未提及具体的权重下载链接或平台。
- 数据集：论文详细描述了训练数据的来源和处理方法，但未提及是否会公开原始或处理后的数据集。
- Demo：论文中未提及在线演示。
- 复现材料：论文在附录中提供了部分超参数（如学习率、批大小）、训练策略描述和数据处理提示（如附录C的Prompt），这有助于复现。但缺少完整的训练脚本、配置文件和环境说明。
- 论文中引用的开源项目：论文明确基于或使用了Qwen3-8B、CosyVoice 2、GLM-4-Voice Tokenizer、Seed-TTS、pyannote、FineWeb-Edu、SenseVoice等开源项目或模型。
- 总结：论文有开源意愿并承诺发布资源，但当前版本未提供任何可访问的开源材料。因此，开源详情部分无法提供实质性内容。

📌 **核心摘要**

本文旨在解决当前语音对话系统依赖文本中间表示（导致信息丢失、延迟和表达受限）的问题。其方法核心是提出一个真正的语音到语音大语言模型，基于模态分层分割架构和冻结预训练策略，从预训练文本LLM（Qwen3-8B）初始化，直接学习语音的输入理解和输出生成。与已有工作（如GLM-4-Voice、Moshi）相比，本文的新在于彻底移除了生成阶段的文本依赖，并通过架构设计和训练策略最大程度地保留了文本LLM的推理能力。主要实验结果表明，该模型在语音问答（LlamaQA，S->S: 63.67%）等任务上达到了与文本指导系统相当的性能，同时在StoryCloze等语音建模基准和MMLU等文本基准上也保持了竞争力。其实际意义是建立了一种更自然、低延迟、高表达性的端到端语音交互新范式。主要局限性在于模型训练依赖大规模合成数据，且在处理非言语语音内容（如笑声、犹豫）方面的效果依赖于下游语音合成模块的质量。

### 实验结果关键数据：

表4：预训练模型评估结果
| 模型 | 语音 (tS.C. / sS.C. / zh-tS.C. / zh-sS.C.) | 文本 (MMLU / CMMLU) |
| :--- | :--- | :--- |
| Moshi | 83.60 / 62.70 / - / - | 49.8 / - |
| GLM-4-Voice | 82.90 / 62.40 / 83.27 / 69.10 | 57.49 / 54.39 |
| SpiritLM | 82.90 / 61.00 / - / - | 36.90 / - |
| Ours | 84.87 / 63.17 / 90.32 / 71.94 | 67.19 / 69.53 |

表5：语音问答与语音质量评估结果
| 模型 | LlamaQA (S->T / S->S) | TriviaQA (S->T / S->S) | WebQA (S->T / S->S) | UTMOS |
| :--- | :--- | :--- | :--- | :--- |
| Ours | 77.33 / 63.67 | 45.20 / 28.80 | 45.90 / 36.71 | 4.37 |
| GLM-4-Voice* | 74.33 / 65.67 | 45.90 / 43.20 | 39.22 / 38.34 | 4.25 |
| Moshi* | - / 62.30 | - / 22.80 | - / 26.60 | - |

*注：S->S 结果是在文本指导下获得。

![论文中的实验结果图](icassp-img://zjaV5zmlkl/5.png)
图5（论文中为Figure 2e）：展示了不同样本在模型各层上的跨模态（语音-文本）表示相似度分数。曲线表明，相似度在中间层（约第10-24层）达到峰值，而在首尾层较低，这为模态分层分割提供了依据。

---

### 🥉 [Scaling Speech Tokenizers with Diffusion Autoencoders](/audio-paper-digest-blog/posts/2026-05-03-scaling-speech-tokenizers-with-diffusion)

✅ **6.5/10** | 前25% | #语音大模型 | #扩散模型 | #语音转换 #预训练

👥 **作者与机构**

- 第一作者：未说明（论文摘要仅列出作者名单，未指明第一作者）
- 通讯作者：未说明
- 作者列表：Yuancheng Wang, Zhenyu Tang, Yun Wang, Arthur Hinsvark, Yingru Liu, Yinghao Aaron Li, Kainan Peng, Junyi Ao, Mingbo Ma, Mike Seltzer, Qing He, Xubo Liu（论文摘要未提供任何作者的所属机构信息）

💡 **毒舌点评**

亮点： 将扩散模型“降维”用于语音分词器的训练，是一个巧妙的思路，理论上能同时优化语义监督和高保真重建这两个通常相互矛盾的目标。短板： 论文摘要中声称在多项任务上“超越强基线”，却未给出任何具体数字对比，这让“超越”的成色大打折扣，也让读者难以判断其优势是实质性的还是微小的；此外，200 bits-per-second的码率在当今标准下可能已不算“极低”。

🔗 **开源详情**

根据论文摘要内容：
- 代码：未提及代码仓库链接。
- 模型权重：未提及。
- 数据集：未提及是否公开其使用的200万小时语音数据集。
- Demo：未提及在线演示。
- 复现材料：未提及训练细节、配置、检查点或附录说明。
- 论文中引用的开源项目：摘要未提及。

结论：论文摘要未提及任何开源计划或细节。

📌 **核心摘要**

1.  要解决什么问题：现有的语音分词器在编码时面临两难选择：要么侧重语义（利于理解），要么侧重声学细节（利于重建），且难以同时实现低比特率和低token率。
2.  方法核心是什么：提出名为SiTok的扩散自编码器。它结合了监督学习（获取语义丰富的表示）和扩散模型（实现高保真音频重建）的联合训练框架。
3.  与已有方法相比新在哪里：创新性地将扩散模型引入语音分词器的解码/重建阶段，以此作为提升重建质量的强大生成器，而编码器部分则通过监督学习直接优化语义特征。这是一个新的混合训练范式。
4.  主要实验结果如何：论文摘要声称SiTok在理解、重建和生成任务上均优于强基线，但未提供具体数值。论文中未提及实验结果表格。
5.  实际意义是什么：为语音语言模型提供了一个更强大的基础组件，其低token率（12.5 Hz）和低码率（200 bps）有助于提升下游任务的效率和性能，尤其是在生成高质量语音方面。
6.  主要局限性是什么：论文摘要未明确说明。可能的局限包括：模型规模较大（1.6B参数）带来的训练和部署成本；低码率可能在某些极端场景下仍不满足需求；以及与其他更简单的分词器方法相比，引入扩散模型是否带来了不必要的复杂度。

---

