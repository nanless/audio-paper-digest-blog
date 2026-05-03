---
title: "ICLR 2026 - 音频生成 论文列表"
date: 2026-05-03
draft: false
tags: ["音频生成"]
categories: [iclr-2026]
description: "共 9 篇 ICLR 2026 音频生成 方向论文"
hiddenInHomeList: true
---

# ICLR 2026 - 音频生成

共 **9** 篇论文

[← 返回 ICLR 2026 总览](/audio-paper-digest-blog/posts/iclr2026-summary/)

---

| 排名 | 论文 | 评分 | 分档 |
|------|------|------|------|
| 🥇 | [Flow2GAN: Hybrid Flow Matching and GAN with Multi-Resolution](/audio-paper-digest-blog/posts/2026-05-03-flow2gan-hybrid-flow-matching-and-gan-with-multi) | 8.5分 | 前25% |
| 🥈 | [A Hidden Semantic Bottleneck in Conditional Embeddings of Di](/audio-paper-digest-blog/posts/2026-05-03-a-hidden-semantic-bottleneck-in-conditional) | 8.0分 | 前25% |
| 🥉 | [PrismAudio: Decomposed Chain-of-Thought and Multi-dimensiona](/audio-paper-digest-blog/posts/2026-05-03-prismaudio-decomposed-chain-of-thought-and-multi) | 8.0分 | 前25% |
| 4. | [AC-Foley: Reference-Audio-Guided Video-to-Audio Synthesis wi](/audio-paper-digest-blog/posts/2026-05-03-ac-foley-reference-audio-guided-video-to-audio) | 7.9分 | 前25% |
| 5. | [Aurelius: Relation Aware Text-to-Audio Generation At Scale](/audio-paper-digest-blog/posts/2026-05-03-aurelius-relation-aware-text-to-audio-generation) | 7.5分 | 前25% |
| 6. | [AudioX: A Unified Framework for Anything-to-Audio Generation](/audio-paper-digest-blog/posts/2026-05-03-audiox-a-unified-framework-for-anything-to-audio) | 7.5分 | 前25% |
| 7. | [LayerSync: Self-aligning Intermediate Layers](/audio-paper-digest-blog/posts/2026-05-03-layersync-self-aligning-intermediate-layers) | 7.0分 | 前25% |
| 8. | [SCRAPL: Scattering Transform with Random Paths for Machine L](/audio-paper-digest-blog/posts/2026-05-03-scrapl-scattering-transform-with-random-paths-for) | 7.0分 | 前25% |
| 9. | [TangoFlux: Super Fast and Faithful Text to Audio Generation ](/audio-paper-digest-blog/posts/2026-05-03-tangoflux-super-fast-and-faithful-text-to-audio) | 6.5分 | 前25% |

---

## 📋 论文详情

### 🥇 [Flow2GAN: Hybrid Flow Matching and GAN with Multi-Resolution Network for Few-step High-Fidelity Audio Generation](/audio-paper-digest-blog/posts/2026-05-03-flow2gan-hybrid-flow-matching-and-gan-with-multi)

🔥 **8.5/10** | 前25% | #音频生成 | #流匹配 | #对抗训练 #多分辨率

👥 **作者与机构**

- 第一作者：Zengwei Yao（Xiaomi Corp., Beijing, China）
- 通讯作者：Daniel Povey（dpovey@xiaomi.com, Xiaomi Corp., Beijing, China）
- 作者列表：Zengwei Yao（Xiaomi Corp.）、Wei Kang（Xiaomi Corp.）、Han Zhu（Xiaomi Corp.）、Liyong Guo（Xiaomi Corp.）、Lingxuan Ye（Xiaomi Corp.）、Fangjun Kuang（Xiaomi Corp.）、Weiji Zhuang（Xiaomi Corp.）、Zhaoqing Li（Xiaomi Corp.）、Zhifeng Han（Xiaomi Corp.）、Long Lin（Xiaomi Corp.）、Daniel Povey（Xiaomi Corp.）

💡 **毒舌点评**

这篇工作巧妙地将Flow Matching的稳定训练与GAN的细节增强能力“拧”在一起，用一个两阶段策略漂亮地解决了音频生成领域“要质量还是要速度”的经典取舍问题，多分辨率傅里叶系数的处理也颇有见地。不过，模型参数量高达78.9M，几乎是Vocos（13.5M）的六倍，这在追求轻量化部署的场景下可能是个明显的短板。

🔗 **开源详情**

- 代码：提供完整代码仓库链接：https://github.com/k2-fsa/Flow2GAN。
- 模型权重：论文中提到“the source code is released”，但未明确说明是否公开所有预训练模型权重的下载链接。从“Online demo samples are available”和代码仓库的存在推断，权重很可能已发布或即将发布。
- 数据集：训练使用的数据集（LibriTTS, Common Voice等）均为公开数据集。论文中未提供针对本任务的私有数据集。
- Demo：提供在线演示页面：https://flow2gan.github.io。
- 复现材料：提供了详尽的训练细节（Section 5.1）、模型配置（Appendix Table 10）、消融实验设置，以及针对不同条件（Mel, EnCodec）的训练步数、GPU数量和时长信息，复现指导性强。
- 论文中引用的开源项目：明确提到了Vocos、BigVGAN、HiFi-GAN、UnivNet、ConvNeXt、Encodec等开源模型和库作为基线或组件。

📌 **核心摘要**

1.  问题：现有的音频生成方法中，GAN训练不稳定且易收敛慢，而基于扩散/流匹配的方法需要多步推理，计算开销大。
2.  方法：提出Flow2GAN两阶段框架。第一阶段：改进Flow Matching以适配音频特性，包括将目标重新表述为端点估计（避免静音区域的估计难题），并引入基于频谱能量的损失缩放以强调感知上更重要的安静区域。第二阶段：将训练好的Flow Matching模型转化为1/2/4步生成器，并使用精心设计的判别器（MPD, MRD）进行GAN微调，以提升细节质量并实现快速推理。
3.  创新点：a) 针对音频特性的Flow Matching改进（端点估计+频谱能量损失）；b) 两阶段训练范式结合两者优势；c) 多分辨率多分支网络结构，处理不同时间频率分辨率的傅里叶系数。
4.  实验结果：在Mel频谱图和EnCodec音频token条件生成上均取得了SOTA或接近SOTA的性能。关键结果如下表所示（数据摘自论文）：

表1：Mel频谱图条件生成（LibriTTS测试集）对比
| 模型 | 参数(M) | PESQ↑ | ViSQOL↑ | MOS↑ |
| :--- | :--- | :--- | :--- | :--- |
| BigVGAN | 112.4 | 4.241 | 4.964 | 4.33 ± 0.18 |
| Vocos | 13.5 | 3.618 | 4.898 | 4.38 ± 0.16 |
| WaveFM (1步) | 19.5 | 3.540 | 4.894 | 3.76 ± 0.18 |
| Flow2GAN (1步) | 78.9 | 4.189 | 4.957 | 4.39 ± 0.15 |
| Flow2GAN (2步) | 78.9 | 4.440 | 4.979 | 4.56 ± 0.11 |

表2：EnCodec音频token条件生成（统一测试集）对比（带宽=6.0 kbps）
| 模型 | PESQ↑ | ViSQOL↑ | SMOS↑ | MOS↑ |
| :--- | :--- | :--- | :--- | :--- |
| PeriodWave-Turbo (4步) | 3.229 | 4.424 | 4.00 ± 0.17 | 4.40 ± 0.21 |
| Flow2GAN (1步) | 2.904 | 4.300 | 4.46 ± 0.16 | 4.42 ± 0.22 |
| Flow2GAN (4步) | 3.089 | 4.351 | 4.19 ± 0.12 | 4.38 ± 0.13 |

![Flow2GAN示例](icassp-img://5eTpRIULtb/1.png)
（图2：不同模型生成波形的对比。改进的Flow Matching（e）在静音区域比标准版本（d）更干净，GAN微调（f）进一步恢复了细节。）
5.  实际意义：提供了一种在质量和效率之间取得高度平衡的音频生成方案，特别适用于需要低延迟推理的实时应用（如TTS、语音交互）。
6.  主要局限性：模型参数量较大；主要评估集中在波形生成（声码器）任务，对更复杂的端到端音频生成（如从文本直接生成）能力未深入探讨。

---

### 🥈 [A Hidden Semantic Bottleneck in Conditional Embeddings of Diffusion Transformers](/audio-paper-digest-blog/posts/2026-05-03-a-hidden-semantic-bottleneck-in-conditional)

🔥 **8.0/10** | 前25% | #音频生成 | #扩散模型 | #生成模型 #条件嵌入

👥 **作者与机构**

- 第一作者：Trung X. Pham (Korea Advanced Institute of Science and Technology, KAIST)
- 通讯作者：Chang D. Yoo (Korea Advanced Institute of Science and Technology, KAIST)
- 作者列表：Trung X. Pham (KAIST)、Kang Zhang (KAIST)、Ji Woo Hong (KAIST)、Chang D. Yoo (KAIST)

💡 **毒舌点评**

亮点：论文发现了扩散Transformer模型中一个被忽视的重要现象——条件嵌入存在极端的“语义瓶颈”，即所有类别的条件向量在角度上几乎完全一致（>99%相似），而语义信息却集中在仅1-2%的维度上，这一发现具有很强的启示性和系统性分析价值。
短板：虽然现象描述详尽，但论文对于“为何这种极端的冗余和相似性不影响生成质量”这一核心问题的理论解释仍停留在假设层面，缺乏更深入的数学或机制性证明，使得结论的完备性稍显不足。

🔗 **开源详情**

- 代码：论文中未明确提及针对本研究的开源代码仓库链接。但分析使用了多个模型的官方公开权重。
- 模型权重：论文中明确使用了DiT、MDT、SiT、REPA、LightningDiT、MG、X-MDPT、MDSGen等模型的公开预训练权重（XL/L/B尺寸）。
- 数据集：使用的是标准公开数据集（ImageNet-1K, DeepFashion, VGGSound）。
- Demo：论文中未提及在线演示。
- 复现材料：论文在附录（A.1-A.6）中提供了较为详细的实验设置说明、更多可视化结果和分析，有助于复现其分析过程。
- 论文中引用的开源项目：论文引用并使用了DiT, MDT, SiT, REPA, LightningDiT, MG, X-MDPT, MDSGen等项目的预训练模型。

📌 **核心摘要**

1.  问题：本文旨在系统性地研究基于Transformer的扩散模型（Diffusion Transformers）中条件嵌入（Conditional Embeddings）的内部结构与编码机制，而此前这一关键组件的作用原理尚未被充分理解。
2.  方法核心：通过对多个SOTA模型（DiT, SiT, MDT, REPA等）的预训练条件向量进行系统性分析，研究其成对余弦相似度、幅度分布、参与率（PR）等统计特性，并通过裁剪（Pruning）实验验证其冗余性。
3.  创新点：首次发现并量化了条件嵌入中的两个核心“涌现”特性：(1) 不同类别的条件向量间存在极端的角相似性（类条件任务>99%，连续条件任务>99.9%）；(2) 语义信息高度集中在少数几个高幅值维度（“头部”维度），其余大部分维度（“尾部”）贡献极小，呈现极高的稀疏性。
4.  主要实验结果：在ImageNet-1K上，多数SOTA模型的条件向量仅用其原始维度（d=1152）的1-2%（约10-20个维度）即可携带主要信号。裁剪实验表明，移除多达66%的低幅值“尾部”维度后，生成质量（FID, IS, CLIP）保持不变甚至略有提升；反之，移除少数“头部”维度则会显著破坏生成结果。
5.  实际意义：揭示了当前扩散Transformer在条件编码上存在严重的过参数化，为设计更高效、轻量化的条件注入机制（如直接使用稀疏向量或低维子空间）提供了实证依据和新思路。
6.  主要局限性：对所观察到的极端相似性如何仍能指导模型进行高质量生成的深层机制解释，主要基于假设和直观分析，尚缺乏严格的理论证明。此外，研究主要聚焦于分析已训练好的模型，对于如何在训练过程中直接引导或优化这种瓶颈结构探索有限。

---

### 🥉 [PrismAudio: Decomposed Chain-of-Thought and Multi-dimensional Rewards for Video-to-Audio Generation](/audio-paper-digest-blog/posts/2026-05-03-prismaudio-decomposed-chain-of-thought-and-multi)

🔥 **8.0/10** | 前25% | #音频生成 | #强化学习 | #流匹配 #链式思维

👥 **作者与机构**

- 第一作者：Huadai Liu (香港科技大学, 阿里巴巴通义团队)
- 通讯作者：Wei Xue (香港科技大学)
- 作者列表：Huadai Liu (香港科技大学, 阿里巴巴通义团队), Kaicheng Luo (阿里巴巴通义团队), Wen Wang (阿里巴巴通义团队), Qian Chen (阿里巴巴通义团队), Peiwen Sun (香港中文大学), Rongjie Huang (香港中文大学), Xiangang Li (阿里巴巴通义团队), Jieping Ye (阿里巴巴通义团队), Wei Xue (香港科技大学)

💡 **毒舌点评**

亮点： 论文首次将“分解式链式思维推理”与“多维度强化学习奖励”在V2A生成中紧密结合，系统性解决了多目标优化难题，技术路线完整且有深度，新基准AudioCanvas设计严谨。
短板： 整个框架堆叠了太多重型组件（VideoLLaMA2、Gemini 2.5 Pro生成数据、VideoPrism、T5-Gemma），工程复杂度和训练成本极高，这在一定程度上稀释了其作为通用解决方案的优雅性和可及性。

🔗 **开源详情**

- 代码：论文明确承诺将公开完整代码，包括训练脚本和配置文件。链接未提供，但承诺发布。
- 模型权重：论文承诺将公开所有模型权重，包括音频基础模型、微调后的VideoLLaMA2等。
- 数据集：论文承诺将公开新构建的AudioCanvas基准数据集，以及用于VideoLLaMA2微调的CoT训练数据。
- Demo：论文未提及是否提供在线演示。项目主页地址为https://PrismAudio.github.io，可能包含演示。
- 复现材料：论文提供了详细的训练细节、超参数配置（附录D），并承诺发布预训练检查点。GPU资源需求也被明确说明。
- 论文中引用的开源项目：使用了多个开源模型和工具，包括：Gemini 2.5 Pro（用于数据生成）、VideoLLaMA2（CoT生成模型）、VideoPrism（视频编码器）、T5-Gemma（文本编码器）、MS-CLAP/Synchformer/Meta Audiobox Aesthetics/StereoCRW（奖励模型）、Stable Audio Tools（VAE基础）。

📌 **核心摘要**

1.  要解决的问题：现有视频到音频（V2A）生成方法面临两大核心挑战：一是语义一致性、时序同步、美学质量和空间准确性等多个感知目标在单一损失函数中相互纠缠，难以平衡；二是模型优化与真实人类偏好脱节，导致生成结果技术正确但听感不佳。
2.  方法核心：提出PrismAudio框架，其核心是将V2A生成的推理过程分解为四个专门的链式思维（CoT）模块（语义、时序、美学、空间），并为每个模块设计对应的目标奖励函数，通过强化学习（GRPO）进行多维度联合优化。同时，提出Fast-GRPO算法，通过混合ODE-SDE采样策略大幅提升训练效率。
3.  与已有方法的创新：1）首次在V2A任务中引入分解式CoT与多维度RL奖励对齐的框架，解决了目标纠缠问题。2）提出Fast-GRPO，首次在流匹配模型中通过随机窗口的混合采样实现了高效的RL训练。3）构建了更严格、更多样化的V2A评测基准AudioCanvas。
4.  主要实验结果：PrismAudio在VGGSound测试集（域内）和AudioCanvas基准（域外）上，于语义、时序、美学、空间所有维度上均取得SOTA性能。例如，在AudioCanvas上，其语义对齐（CLAP: 0.52）和时序同步（DeSync: 0.36）均优于基线模型ThinkSound（0.48， 0.80）。消融实验证明，分解式CoT优于整体式CoT，多维度奖励优于单维度奖励。
5.  实际意义：为可控、可解释、高质量的V2A生成提供了新的技术范式，其分解式推理和多目标优化思路可推广至其他多模态生成任务。新基准AudioCanvas为该领域提供了更严峻、更贴近现实的评测标准。
6.  主要局限性：框架复杂度高，依赖多个大型预训练模型（Gemini、VideoLLaMA2、VideoPrism等），训练和数据构建成本高昂。奖励函数（如CLAP、Synchformer）作为人类感知的代理，其自身存在上限和偏差，可能导致奖励黑客问题（尽管使用了KL惩罚缓解）。

---

### 4. [AC-Foley: Reference-Audio-Guided Video-to-Audio Synthesis with Acoustic Transfer](/audio-paper-digest-blog/posts/2026-05-03-ac-foley-reference-audio-guided-video-to-audio)

✅ **7.9/10** | 前25% | #音频生成 | #流匹配 | #音视频 #跨模态

👥 **作者与机构**

- 第一作者：Pengjun Fang（香港科技大学）
- 通讯作者：未说明
- 作者列表：Pengjun Fang（香港科技大学），Yingqing He（香港科技大学），Yazhou Xing（香港科技大学），Qifeng Chen（香港科技大学，B标注可能表示共同指导），Ser-Nam Lim（中佛罗里达大学，B标注），Harry Yang（香港科技大学，B标注）

💡 **毒舌点评**

亮点：论文核心思路非常直接且有效——绕过文本描述的模糊性，直接用参考音频的“声学指纹”来控制生成，这在细粒度合成和音色迁移上效果立竿见影，实验中MCD指标的大幅降低就是证明。短板：其“两阶段训练”中第二阶段利用视频内音频自相似性的假设，在现实场景中（如非重复性动作视频）可能不成立，论文对此的泛化性讨论不足；此外，论文声称“competitive”但未开源，其声称的复现便利性要打折扣。

🔗 **开源详情**

- 代码：论文中未提及代码链接或开源计划。
- 模型权重：未提及。
- 数据集：论文中明确列出了使用的公开数据集及其许可证：VGGSound (CC-BY 4.0), AudioCaps2.0 (MIT), WavCaps (CC-BY 4.0)。但未提供处理后的数据脚本。
- Demo：未提及。
- 复现材料：提供了详细的训练细节（附录A）、网络结构细节（附录B）以及人类研究流程（附录C），这些对复现至关重要。
- 论文中引用的开源项目：CLIP, Synchformer, BigVGAN, ImageBind, VGGish, PANNs, PaSST等。

📌 **核心摘要**

1.  问题：现有的视频到音频（V2A）生成方法主要依赖文本提示进行控制，但面临两大瓶颈：训练数据语义粒度粗糙（如所有狗叫被统一标注），以及文本难以精确描述微小的声学特征（如金属撞击的瞬态和共振），导致难以实现精细的声音合成。
2.  方法核心：提出AC-Foley，一个直接以参考音频作为控制信号的V2A模型。通过多模态Transformer联合建模视频、文本和参考音频，并利用条件流匹配目标进行生成。
3.  与已有方法不同：不同于使用文本或CLAP等语义编码器进行控制，AC-Foley使用预训练VAE编码器直接提取参考音频的完整声学特征（音色、频谱），并提出两阶段训练策略（重叠与非重叠条件训练）来教会模型如何将参考音频的特征适应到视频的时间和内容上下文中。
4.  主要实验结果：在VGGSound测试集上，AC-Foley在多个指标上达到SOTA。例如，在有音频条件下，相比最强基线（MMAudio + CLAP），Fréchet Distance (PaSST) 从70.80降至56.00，Mel Cepstral Distortion (MCD) 从14.63降至11.37。在无音频条件下（使用空嵌入），其性能也与顶尖方法（如MMAudio-L-V2）持平或更优（见表1）。在Greatest Hits数据集上的音色迁移任务中，也优于专为该任务训练的CondFoley（见表2）。
5.  实际意义：为视频创作者提供了更灵活、精确的音频控制工具，能够生成具有特定材质感的脚步声、特定乐器音色的声音，甚至零样本生成训练集中未见的音效（如装消音器的枪声），极大地拓展了Foley制作的可能性。
6.  主要局限性：1) 两阶段训练依赖视频内音频的自相似性，对非重复性视频场景的泛化能力可能受限；2) 论文指出，当视频和参考音频包含多个并发声源或时间模式严重不匹配时，模型性能会下降。

---

### 5. [Aurelius: Relation Aware Text-to-Audio Generation At Scale](/audio-paper-digest-blog/posts/2026-05-03-aurelius-relation-aware-text-to-audio-generation)

✅ **7.5/10** | 前25% | #音频生成 | #数据集 | #基准测试

👥 **作者与机构**

- 第一作者：Yuhang He（微软研究院；牛津大学计算机系）
- 通讯作者：Yuhang He（yuhanghe@microsoft.com）
- 作者列表：Yuhang He（微软研究院，牛津大学计算机系）、He Liang（未说明）、Yash Jain（微软研究院）、Andrew Markham（微软研究院）、Vibhav Vineet（微软研究院）

#

💡 **毒舌点评**

这篇论文的亮点在于其系统性：它不仅指出了当前文本到音频生成模型在理解复杂关系（如“如果A发生，则B发生，否则C发生”）上的无能，还亲手搭建了完整的“练兵场”——从定义关系（100种）到提供干净“弹药”（110种音频事件）再到制定考题和评分标准。然而，短板也相当明显：作为一篇发表于顶会的工作，其核心贡献“AudioRelGen框架”在论文中缺乏足够的架构细节和深度创新描述，更像一个概念性的解耦设计，而大量篇幅用于描述数据集和基准建设，使得方法的厚度略显不足。

#

🔗 **开源详情**

*   代码：提供了代码仓库链接：https://github.com/yuhanghe01/Aurelius。
*   模型权重：论文中未提及公开预训练或微调后的模型权重。
*   数据集：论文详细描述了`AudioEventSet`和`AudioRelSet`的构建过程和本体，但未直接提供其整合数据集的下载链接���文中提到音频素材来源于freesound.org和FSD50K数据集。
*   Demo：提供了项目主页：https://yuhanghe01.github.io/Aurelius-Proj/，但未明确说明是否有在线交互式Demo。
*   复现材料：论文附录详细列出了基线模型的推理设置（表III）和代理工作流的详细提示词，为复现评估提供了必要信息。训练超参数（如学习率）未在正文明确给出。
*   引用的开源项目：评测了大量开源TTA模型（AudioLDM, AudioGen, Tango系列等），使用了开源音频事件检测模型PANNs，并利用LLM（Qwen系列）作为代理。

📌 **核心摘要**

1.  问题：现有文本到音频（TTA）生成模型在处理需要关系推理的复杂文本提示时表现糟糕。模型往往只能生成孤立的音频事件，而无法准确理解并生成事件之间的时间、空间、逻辑等复杂关系。
2.  方法核心：提出了“Aurelius”框架，其核心是将音频事件建模与关系建模解耦。为此，精心构建了两个大规模语料库：包含110类层次化音频事件的AudioEventSet，以及包含100种可嵌套组合关系的AudioRelSet。基于这两个语料库，设计了一种可扩展的`<文本，音频>`对生成策略，用于创建海量训练和测试数据。
3.  创新点：相比之前的小规模、噪声多或关系简单的尝试，本工作提供了规模大（事件×关系）、质量高（经验证）、结构清晰（层次化本体）且可扩展的关系感知TTA研究资源与评估基准。
4.  实验结果：在构建的基准上对9个主流TTA模型进行了零样本评估，结果表明所有模型在关系感知指标（如mAPre, mARel, mAPar）上表现极差，最高分（TangoFlux）的mAMSR仅为1.77%。然而，通过在构建的100小时数据上微调或从头训练，模型性能可显著提升（例如，TangoFlux微调后mAMSR提升至5.58%），验证了基准和数据的有效性。关键对比数据见下表：

    | 模型 | 评估方式 | 通用指标 (FAD↓, KL↓) | 关系感知指标 (mAPre, mARel, mAPar, mAMSR↑%) |
    | :--- | :--- | :--- | :--- |
    | TangoFlux | 零样本 | 6.01, 26.73 | 12.38, 3.34, 7.28, 1.77 |
    | TangoFlux | 微调 (100h) | 1.29, 9.68 | 28.57, 8.02, 20.84, 5.58 |
    | TangoFlux | 从头训练 (100h) | 1.64, 17.82 | 16.68, 3.82, 12.01, 2.58 |
    注：指标数值来源于论文中表2和表3。

5.  实际意义：本工作为社区提供了第一个系统评估和推进“关系感知音频生成”任务的标准平台，其构建的语料库和基准有望催生更注重结构化理解的TTA新模型。
6.  主要局限性：主要贡献集中于资源建设与基准评估，提出的具体生成框架（AudioRelGen）的技术细节和架构深度阐述不足。实验主要基于单一基础模型（TangoFlux）进行微调和比较，结论的普适性有待更广泛验证。

#

---

### 6. [AudioX: A Unified Framework for Anything-to-Audio Generation](/audio-paper-digest-blog/posts/2026-05-03-audiox-a-unified-framework-for-anything-to-audio)

✅ **7.5/10** | 前25% | #音频生成 | #扩散模型 | #统一模型 #多模态

👥 **作者与机构**

- 第一作者：Zeyue Tian（香港科技大学）
- 通讯作者：Wei Xue（香港科技大学）， Yike Guo（香港科技大学）
- 作者列表：Zeyue Tian（香港科技大学）， Zhaoyang Liu（香港科技大学）， Yizhu Jin（香港科技大学）， Ruibin Yuan（香港科技大学）， Liumeng Xue（香港科技大学）， Xu Tan（独立研究者）， Qifeng Chen（香港科技大学）， Wei Xue†（香港科技大学）， Yike Guo†（香港科技大学）

#

💡 **毒舌点评**

亮点：论文的野心不小，不仅提出了一个统一的“万能”音频生成框架，还亲手打造了一个包含700多万样本的高质量多模态数据集IF-caps，这相当于为未来的“通用音频模型”铺了一条高质量的数据高速公路。短板：模型的统一性目前还停留在“支持多种模态组合输入”的层面，真正的跨模态泛化能力（例如，将视频中提取的视觉风格迁移到音乐生成中）并未深入探讨。此外，其庞大的数据集完全依赖自动标注（Gemini和Qwen），其中不可避免的噪声和偏差可能会在长期训练中积累并放大。

#

🔗 **开源详情**

- 代码：论文中提及将开源代码，链接为：https://zeyuet.github.io/AudioX/。
- 模型权重：论文中提及将开源预训练模型检查点。
- 数据集：论文中提及将开源完整的IF-caps数据集（包含超过700万样本）。
- Demo：论文提供的网站（https://zeyuet.github.io/AudioX/）很可能包含在线演示。
- 复现材料：论文详细提供了训练细节（优化器、学习率、batch size、训练硬件、时长）、模型架构描述、评估指标定义、新基准T2A-bench的构建和评估流程，以及附录中的详细数据集和实验信息，为复现提供了充分材料。
- 论文中引用的开源项目：CLIP-ViT-B/32, Synchformer, T5-base, Stable Audio Open (音频Autoencoder和DiT预训练模型), Qwen2-Audio, Gemini 2.5 Pro (用于数据标注), AnimeGANv2 (用于图像到音频的零样本实验)。

📌 **核心摘要**

1. 要解决的问题：当前音频/音乐生成模型多为专用模型，输入模态（如仅文本或仅视频）和输出域（如仅音效或仅音乐）受限，缺乏一个统一的、能处理任意模态组合输入并生成高质量音频的通用框架，同时面临训练数据稀缺的问题。
2. 方法核心：提出AudioX统一框架，核心包括：1）基于Diffusion Transformer (DiT)的生成骨干网络；2）一个轻量级的多模态自适应融合模块，用于有效融合文本、视频、音频等多种条件信号，减少跨模态干扰；3）设计并构建了大规模、高质量的多模态数据集IF-caps。
3. 与已有方法相比新在哪里：1）实现了首个支持文本、视频、音频任意组合输入，并统一生成音频和音乐的框架；2）MAF模块能自适应地加权和对齐不同模态的条件，增强了跨模态控制能力；3）构建了包含700多万样本的细粒度标注数据集IF-caps，并提出两阶段（高质量标注+大规模增强）的数据构建流水线。
4. 主要实验结果：AudioX在文本到音频（T2A）、文本到音乐（T2M）、视频到音频（V2A）等多个任务和基准测试上达到或超过了当时的SOTA。特别在指令遵循能力上表现突出，在作者提出的T2A-bench和AudioTime基准上大幅领先所有基线。例如，在T2A-bench上，其类别准确率（34.2%）、排序准确率（23.6%）和时间戳准确率（28.2%）均显著最高。用户研究也显示其生成质量获得专家高分。
5. 实际意义：为多媒体内容创作（影视、游戏、短视频等）提供了更灵活、强大的自动化音频生成工具，降低了专业门槛，同时为“通用音频基础模型”的研究提供了架构和数据方面的宝贵参考。
6. 主要局限性：模型的统一性尚未在更复杂的跨模态推理任务（如图像风格指导音乐生成）上得到充分验证；数据集IF-caps虽规模庞大且标注精细，但完全由自动化模型生成，可能存在偏差和错误，且目前仅覆盖英文标注。

#

---

### 7. [LayerSync: Self-aligning Intermediate Layers](/audio-paper-digest-blog/posts/2026-05-03-layersync-self-aligning-intermediate-layers)

✅ **7.0/10** | 前25% | #音频生成 | #自监督学习 | #扩散模型 #流匹配

👥 **作者与机构**

- 第一作者：Yasaman Haghighi (Ecole Polytechnique Fédérale de Lausanne, EPFL)
- 通讯作者：未明确说明（但所有作者邮箱均指向 @epfl.ch）
- 作者列表：Yasaman Haghighi (EPFL)， Bastien van Delft (EPFL)， Mariam Hassan (EPFL)， Alexandre Alahi (EPFL)

💡 **毒舌点评**

这篇工作最漂亮的地方在于“以己为师”的极简设计思想，用一个无参数、低开销的层间对齐损失，就撬动了跨模态的显著性能提升，真正做到了即插即用，这在目前依赖庞大外部模型提供监督信号的浪潮中是一股清流。不过，其理论解释深度稍显不足，仅仅指出“深层语义更丰富”就作为对齐依据稍显薄弱，对于“为何某些层更丰富”以及对齐引发的特征动力学变化缺乏更细致的剖析。

🔗 **开源详情**

- 代码：论文中提供了代码仓库链接：`https://github.com/vita-epfl/LayerSync.git`。
- 模型权重：论文中未明确提及是否公开训练好的模型权重。
- 数据集：实验使用公开数据集（ImageNet, MTG-Jamendo, HumanML3D, CLEVRER, MixKit），论文中未提及对数据集本身的特殊修改或分发。
- Demo：未提及。
- 复现材料：论文正文和附录提供了非常详细的实验设置，包括各任务的数据集处理、模型架构配置（表18-20）、训练超参数、硬件资源和评估指标定义，并提供了算法伪代码（算法1），复现指引清晰。
- 引用的开源项目：主要依赖 SiT (Ma et al., 2024) 作为基础生成模型，使用 Stable Diffusion VAE、Stable Audio Open VAE 等组件。

📌 **核心摘要**

1.  问题：当前提升扩散模型训练效率和生成质量的主流方法严重依赖大型外部预训练模型（如 DINOv2, Qwen2-VL）提供的监督信号，这引入了额外的计算开销、数据依赖和跨模态泛化难题。
2.  方法核心：提出 LayerSync，一种无参数、即插即用的正则化框架。核心思想是利用扩散模型自身深层语义更丰富的表示作为“内在导师”，通过最大化中间表示层（浅层）与深层表示间的相似性，来引导和增强浅层特征的学习，从而形成模型内部的自指导学习。
3.  创新点：与依赖外部模型的主流方法（如 REPA）和依赖 EMA 模型的方法（如 SRA）相比，LayerSync 完全自包含，无需额外模型或数据，且训练时计算开销极小（仅增加一次前向传播和一次相似度计算）。
4.  实验结果：该方法在图像、音频、视频和人体运动生成任务上均有效。关键结果包括：在 ImageNet 256x256 上，使 Flow Transformer (SiT-XL) 的训练加速超过 8.75 倍，FID 提升 23.6%；在音频生成（MTG-Jamendo）上 FAD 改进 21%；在人体运动生成（HumanML3D）上 FID 改进 7.7%。在 ImageNet 纯自监督生成中达到 SOTA（FID 1.89）。消融实验表明其性能对层选择不敏感，且超参数鲁棒性强。

| 实验任务 | 数据集 | 基线模型 | 指标 | 基线值 | + LayerSync | 改进幅度 |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| 图像生成 | ImageNet 256x256 | SiT-XL/2 (1400 epochs) | FID↓ | 2.06 | 1.89 (800 epochs) | (无直接对比，但更快) |
| | ImageNet 256x256 | SiT-XL/2 (800 epochs) | FID↓ | 8.99 | 6.87 | 23.6% |
| | ImageNet 256x256 | SiT-XL/2 (800 epochs) | FID↓ (w/ SDE) | 8.3 | 6.32 | 23.9% |
| 音频生成 | MTG-Jamendo | SiT-XL (650 epochs) | FAD (CLAP)↓ | 0.251 | 0.199 | 20.7% |
| 人体运动生成 | HumanML3D | MDM (600K iter) | FID↓ | 0.5206 | 0.4801 | 7.7% |
| 视频生成 | CLEVRER | SiT-XL (from scratch) | FVD↓ | 265.50 | 120.13 | 54.7% |

![LayerSync 对生成质量的影响](icassp-img://4itprlvbRQ/2.png)
图：LayerSync 与 Dispersive Loss 在相同设置下的生成结果对比，显示 LayerSync 能在不依赖外部表示的情况下提升生成质量。

5.  实际意义：为扩散模型训练提供了一种零额外成本、跨模态通用的效率提升方案，降低了获得高性能生成模型的门槛。
6.  局限性：论文指出层间高度相似是否会导致层冗余值得探讨，初步实验显示剪枝效果不佳；长期正则化效应需进一步研究；相似度函数（当前使用余弦相似度）对不同数据域的适应性是一个开放问题。

---

### 8. [SCRAPL: Scattering Transform with Random Paths for Machine Learning](/audio-paper-digest-blog/posts/2026-05-03-scrapl-scattering-transform-with-random-paths-for)

✅ **7.0/10** | 前25% | #音频生成 | #时频分析 | #优化算法 #可微信号处理

👥 **作者与机构**

- 第一作者：Christopher Mitcheltree（Queen Mary University of London, Centre for Digital Music）
- 通讯作者：未明确说明（根据邮箱推测，Christopher Mitcheltree和Emmanouil Benetos可能为共同通讯作者）
- 作者列表：Christopher Mitcheltree（Queen Mary University of London, Centre for Digital Music）、Vincent Lostanlen（Nantes Université, École Centrale Nantes, CNRS, LS2N）、Emmanouil Benetos（Queen Mary University of London, Centre for Digital Music）、Mathieu Lagrange（Nantes Université, École Centrale Nantes, CNRS, LS2N）

#

💡 **毒舌点评**

亮点：论文巧妙地将随机优化思想应用于经典散射变换，并设计了P-Adam和P-SAGA来应对路径分布非独立同分布的问题，同时提出的θ重要性采样启发式方法具有很强的实用性和可解释性。短板：虽然算法在多个合成器任务上验证有效，但其核心优势（相对于全树JTFS的加速）在更复杂的、真实的音频任务（如TR-808）上提升并不绝对显著，且实验主要局限在无监督声音匹配这一相对特定的范式内。

#

🔗 **开源详情**

- 代码：提供开源Python包和代码仓库，链接为：https://christhetree.github.io/scrapl/
- 模型权重：论文中未提及公开预训练模型权重。任务为从头训练的无监督声音匹配。
- 数据集：TR-808数据集来自外部商业来源（Samples From Mars），论文中未提及自行公开数据。其他实验数据为合成生成，复现时可按代码生成。
- Demo：论文提供了伴随网站（https://christhetree.github.io/scrapl/）展示音频样本。
- 复现材料：极其充分。附录E包含了三个实验所有超参数的详细表格。论文明确承诺提供“代码、音频样本、配置文件、复现说明以及SCRAPL算法的Python包”。
- 引用的开源项目：依赖的开源工具/模型包括：PyTorch、nnAudio（用于CQT）、PANNs、MS-CLAP、不同的可微DSP实现（如用于颗粒合成和TR-808）。

📌 **核心摘要**

1.  要解决什么问题：散射变换（ST）作为感知损失函数在训练神经网络时计算成本过高，因为需要遍历所有路径（paths），严重限制了其在大规模训练中的应用。
2.  方法核心是什么：提出SCRAPL算法，通过随机采样单个路径来近似完整ST损失的梯度。核心是三个技术：1）路径均匀采样的随机近似；2）路径自适应矩估计（P-Adam）稳定梯度方差；3）路径随机平均梯度加速（P-SAGA）利用历史梯度信息。此外，针对可微数字信号处理（DDSP），提出了θ重要性采样（θ-IS）来初始化路径采样概率，使其更关注对合成器参数影响大的路径。
3.  与已有方法相比新在哪里：相比于计算所有路径的全树散射变换（如JTFS），SCRAPL大幅降低了计算和内存开销。相比于直接随机采样路径，SCRAPL通过P-Adam、P-SAGA和θ-IS显著降低了梯度估计的方差，提高了收敛速度和最终精度。相比于其他感知损失（如MSS、预训练嵌入），SCRAPL（基于JTFS）能更好地处理时频调制模式和未对齐音频。
4.  主要实验结果如何：在无监督颗粒合成器声音匹配任务中，SCRAPL相比全树JTFS，在精度上仅差约2倍，但计算速度快约2倍，内存占用低约5倍，达到了更好的帕累托前沿（图1）。与基线方法（如MSS, MS-CLAP）相比，SCRAPL的参数误差显著更低（表1）。消融实验（表2）表明每项技术（P-Adam, P-SAGA, θ-IS）都能带来统计显著的改进。在啁啾合成器上，θ-IS相比均匀采样可将收敛时间减少23-50%，参数误差降低14-80%（表3）。在TR-808鼓机匹配中，JTFS在多数指标上最优，SCRAPL则提供了稳定的折中方案，尤其在未对齐（meso）设置下优于大多数MSS变体（表4）。
5.  实际意义是什么：使得在大规模神经网络训练中有效使用计算昂贵的、具有感知动机的散射变换损失成为可能，特别是对于需要处理时频调制模式或存在未对齐问题的音频/语音生成、增强等逆问题。
6.  主要局限性是什么：方法的有效性高度依赖于所选散射变换路径的代表性，对于衰减部分（如鼓声）路径稀疏时可能效果不佳。θ-IS初始化启发式需要预计算。算法分析和收敛性证明仍有待深入。

## 核心摘要
该论文旨在解决将多变量散射变换（如JTFS）作为不同可微损失函数时计算成本过高的问题。作者提出了SCRAPL算法，其核心是通过随机采样单个路径并利用路径自适应矩估计（P-Adam）、路径随机平均梯度（P-SAGA）和θ重要性采样（θ-IS）三种技术来稳定梯度估计。与计算所有路径的全树散射相比，SCRAPL在计算效率和内存占用上实现了数量级的提升，同时保持了接近的精度。在无监督颗粒合成器声音匹配任务中，SCRAPL的计算速度是JTFS的约2倍，误差仅为其约1.5倍，明显优于MSS等基线。在啁啾合成器任务中，θ-IS相比均匀采样显著提升了收敛速度和参数精度。该算法为在大规模训练中利用具有神经生理学依据的感知损失提供了实用工具，尤其适用于处理存在时频调制或未对齐的音频合成逆问题，但其性能受限于路径分布的稀疏性和初始化的启发式。

---

### 9. [TangoFlux: Super Fast and Faithful Text to Audio Generation with Flow Matching and Clap-Ranked Preference Optimization](/audio-paper-digest-blog/posts/2026-05-03-tangoflux-super-fast-and-faithful-text-to-audio)

✅ **6.5/10** | 前25% | #音频生成 | #流匹配 | #音频大模型 #模型评估

👥 **作者与机构**

- 第一作者：Chia-Yu Hung (南洋理工大学，chiayu001@e.ntu.edu.sg)
- 通讯作者：论文未明确说明，但邮件列表中显示有来自NTU的Navonil Majumder (navonil.majumder@ntu.edu.sg) 和 Soujanya Poria (soujanya.poria@ntu.edu.sg)，可视为主要联系人。
- 作者列表：
  - Chia-Yu Hung (南洋理工大学)
  - Navonil Majumder (南洋理工大学)
  - Zhifeng Kong (NVIDIA)
  - Ambuj Mehrish (威尼斯大学)
  - Amir Ali Bagherzadeh (Lambda Labs)
  - Chuan Li (Lambda Labs)
  - Rafael Valle (NVIDIA)
  - Bryan Catanzaro (NVIDIA)
  - Soujanya Poria (南洋理工大学)

#

💡 **毒舌点评**

亮点：CRPO框架很聪明地将CLAP作为“裁判”，通过模型自我生成、排序、学习的闭环，巧妙地绕开了TTA领域缺乏标准答案的对齐困境，实验证明其效果远超静态数据集。短板：最终性能高度依赖CLAP这个“裁判”自身的偏好和偏见，论文对此风险讨论不足，且最终模型的“对齐”究竟在多大程度上反映了真实的人类音频审美，仍是一个未完全解决的问题。

#

🔗 **开源详情**

- 代码：论文中未提及具体代码仓库链接，但明确表示“将在接受后公开模型训练、推理和评估的实现”。
- 模型权重：论文中明确表示“将在接受后公开模型权重”。
- 数据集：使用并遵循了开源数据集WavCaps和AudioCaps的许可。CRPO中使用的提示词库来源于AudioCaps训练集。
- Demo：提供了一个在线演示页面：https://tangoflux.github.io/ ，用于对比模型生成的音频样本。
- 复现材料：在附录中提供了非常详尽的训练细节（超参数、优化器设置、硬件）、评估指标说明、人类评估协议和所有消融实验结果，复现支持充分。
- 引用的开源项目：Stable Audio Open的VAE、FLAN-T5文本编码器、CLAP模型、diffusers库（用于流匹配）、AudioLDM评估工具包等。

📌 **核心摘要**

本文旨在解决文本到音频（TTA）生成中对齐困难的问题，即现有模型常遗漏细节或产生“幻觉”音频，而构建对齐所需的偏好数据对又缺乏标准。核心方法是提出CLAP-Ranked Preference Optimization（CRPO），这是一个迭代式自我改进框架：在每个训练迭代中，模型（TangoFlux）先为一批提示词生成多个音频，然后用CLAP模型根据与文本的相似度对音频进行排序，构造出“优胜”和“落败”的偏好对，最后通过优化一个新的损失函数LCRPO（结合DPO-FM损失和流匹配损失）来对模型进行微调。与已有方法相比，CRPO的新颖之处在于动态在线生成偏好数据，而非依赖固定的、可能已过时的人工标注或静态数据集。主要实验结果显示，TangoFlux（515M参数）在AudioCaps测试集上全面超越了Tango2、Stable Audio Open等基线模型，在多项客观指标（如CLAPscore 0.480， FDopenl3 75.1）和人类评估（OVL和REL的z-score及Elo评分）上达到最先进水平，同时仅需3.7秒即可生成30秒44.1kHz音频。该研究的实际意义在于提供了一个完全基于开源数据训练的高效、高质量TTA模型及其对齐方法，加速了音频内容创作。主要局限性在于对齐质量受制于CLAP作为代理奖励模型的准确性，且LCRPO方法在理论上如何缓解“奖励过度优化”问题的机制仍需更深入探讨。

#

---

