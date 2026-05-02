---
title: "ICLR 2026 - 语音增强 论文列表"
date: 2026-05-03
draft: false
tags: ["语音增强"]
categories: [iclr-2026]
description: "共 2 篇 ICLR 2026 语音增强 方向论文"
hiddenInHomeList: true
---

# ICLR 2026 - 语音增强

共 **2** 篇论文

[← 返回 ICLR 2026 总览](/audio-paper-digest-blog/posts/iclr2026-summary/)

---

| 排名 | 论文 | 评分 | 分档 |
|------|------|------|------|
| 🥇 | [Are Deep Speech Denoising Models Robust to Adversarial Noise](/audio-paper-digest-blog/posts/2026-05-03-are-deep-speech-denoising-models-robust-to) | 8.5分 | 前10% |
| 🥈 | [SpeechOp: Inference-Time Task Composition for Generative Spe](/audio-paper-digest-blog/posts/2026-05-03-speechop-inference-time-task-composition-for) | 7.0分 | 前25% |

---

## 📋 论文详情

### 🥇 [Are Deep Speech Denoising Models Robust to Adversarial Noise?](/audio-paper-digest-blog/posts/2026-05-03-are-deep-speech-denoising-models-robust-to)

🔥 **8.5/10** | 前10% | #语音增强 | #对抗样本 | #鲁棒性

👥 **作者与机构**

- 第一作者：Will Schwarzer (University of Massachusetts, Amherst)
- 通讯作者：未明确指定（论文注明对应作者为Will Schwarzer，邮箱 wschwarzer@umass.edu）
- 作者列表：Will Schwarzer (University of Massachusetts, Amherst)、Philip S. Thomas (University of Massachusetts, Amherst)、Andrea Fanelli (Dolby Laboratories)、Xiaoyu Liu† (Dolby Laboratories / Meta)（†标注表明论文工作主要在Dolby Laboratories完成）

💡 **毒舌点评**

这篇论文首次将“心理声学隐藏对抗攻击”系统性地应用于语音降噪（DNS）任务，并通过精心设计的实验（包括人类研究和模拟真实环境）令人信服地证明了当前主流开源模型在安全关键场景下的严重脆弱性，是一个扎实且警钟长鸣的工作。然而，它的攻击本质上是白盒、逐句的，且未能提出令人信服的、针对适应性攻击者的防御方案，更多是“揭示了问题”而非“解决了问题”。

🔗 **开源详情**

- 代码：论文明确提供了公开的代码仓库链接 `https://github.com/willschwarzer/adv-dns-public`。
- 模型权重：论文研究了四个模型，其公开的检查点信息在附录E.1中详细列出（包括GitHub仓库和commit ID）。这些权重是公开的。
- 数据集：攻击实验使用的音频样本（语音、噪声、RIR）来自公开的 ICASSP 2022 DNS Challenge 4 数据集。
- Demo：论文提供了在线样本链接 `https://sites.google.com/view/adv-dns`，允许读者主观评估攻击的不可感知性和效果。
- 复现材料：论文在正文、附录A-G中提供了极其详尽的复现信息，包括完整的心理声学模型计算细节、优化算法、超参数设置、硬件环境、人类研究方案以及所有依赖项的版本和许可证。
- 论文中引用的开源项目：明确列出了所使用的开源项目及其许可证，包括：Whisper (MIT), MP-SENet (MIT), Denoiser (MIT), FRCRN (Apache-2.0), MaskGCT (MIT), DNS Challenge (CC-BY-4.0/MIT), DNSMOS P.835 (CC-BY-4.0/MIT), FullSubNet-Plus (Apache-2.0), NISQA (MIT), ViSQOL (Apache-2.0)。

📌 **核心摘要**

1.  解决的问题：评估深度语音降噪（DNS）模型是否对人耳不可察觉的对抗性扰动具有鲁棒性，特别是在安全关键应用（如助听器、空管通信）的背景下。
2.  方法核心：提出了一种结合心理声学模型（利用听觉掩蔽效应）和投影梯度下降（PGD）的攻击框架，生成能在时频域被原始语音掩蔽的对抗噪声。攻击目标是通过最大化STOI（短时客观可懂度）损失来破坏模型输出的清晰度。
3.  与已有方法相比新在哪里：a) 首次对DNS模型进行系统性攻击研究，且攻击扰动是严格心理声学隐藏的；b) 提出了增强的感知约束方法，包括时间前/后掩蔽和阈值偏移；c) 将攻击扩展至模拟真实环境的“空中传输”场景，并使用真实录音的房间脉冲响应进行验证。
4.  主要实验结果：所有测试的四个开源DNS模型（Demucs, Full-SubNet+, FRCRN, MP-SENet）均可被成功攻击，使其输出变得几乎无法理解。攻击在多种背景噪声水平和混响条件下均有效，甚至在接近干净的环境（70 dB SNR，无混响）下也有效。人类研究证实攻击后输出不可懂，且扰动通常不可感知。模型大小与鲁棒性无直接关系，Full-SubNet+的部分鲁棒性源于梯度爆炸（一种已知的脆弱防御）。
5.  实际意义：明确警示了在安全关键系统中部署开源DNS模型的重大风险，攻击者可利用公开的模型权重使系统失效。这强调了在部署前必须开发和评估更强的对抗性防御措施。
6.  主要局限性：a) 攻击是白盒的，需要模型梯度信息；b) 初步的迁移攻击和通用扰动（UAP）效果不佳，表明攻击可能具有模型和语句特定性；c) 针对性攻击在主观听感上效果有限；d) 未提出足够强大的、能抵御自适应攻击的防御方法。

---

### 🥈 [SpeechOp: Inference-Time Task Composition for Generative Speech Processing](/audio-paper-digest-blog/posts/2026-05-03-speechop-inference-time-task-composition-for)

✅ **7.0/10** | 前25% | #语音增强 | #扩散模型 | #语音分离 #多任务学习

👥 **作者与机构**

请基于当前提供的论文内容尽量完整提取作者与机构信息，要求：
1. 明确标注第一作者（如论文可判断），否则写“未说明”
2. 明确标注通讯作者（如论文可判断），否则写“未说明”
3. 列出能确认的作者姓名及其所属机构（大学、实验室、公司）
4. 机构信息尽量具体到实验室或部门；如果文本里没有，就写到能确认的层级
5. 禁止猜测机构信息；无法确认时明确写“未说明”

输出格式示例：
- 第一作者：张三（清华大学计算机系）
- 通讯作者：李四（Google DeepMind）
- 作者列表：张三（清华大学计算机系）、李四（Google DeepMind）、王五（未说明）

- 第一作者：Justin Lovelace（康奈尔大学）
- 通讯作者：未说明
- 作者列表：Justin Lovelace（康奈尔大学）、Rithesh Kumar（Adobe Research）、Jiaqi Su（Adobe Research）、Ke Chen（Adobe Research）、Kilian Q Weinberger（康奈尔大学）、Zeyu Jin（Adobe Research）

💡 **毒舌点评**

用 2-3 句话做有信息量的点评，必须同时包含至少 1 个亮点和 1 个短板。可以犀利，但不要空泛嘲讽，不要只喊“很强”或“很水”。

亮点在于巧妙地将TTS模型“改造”为通用语音处理器，并提出了TC-CFG这种推理时任务组合框架，思路新颖且理论上更优雅；短板在于其核心优势（如内容保存）高度依赖外部ASR模型（Whisper）的输出质量，且在需要严格信号保真度（如SI-SDRi）的场景下，其生成式方法并未展现绝对优势。

🔗 **开源详情**

请只根据论文内容或当前提供文本中的链接信息总结开源情况，禁止编造仓库、stars、平台热度。尽量覆盖：
- 代码：是否提供代码仓库链接；若无，写“论文中未提及代码链接”
- 模型权重：是否提到公开权重；若无，写“未提及”
- 数据集：是否公开、如何获取；若无，写“未提及”
- Demo：是否提供在线演示；若无，写“未提及”
- 复现材料：是否给出训练细节、配置、检查点、附录说明
- 论文中引用的开源项目：列出了哪些依赖的开源工具/模型？
- 如果论文中未提及，明确说明“论文中未提及开源计划”

- 代码：论文中未提及代码链接。
- 模型权重：未提及公开模型权重。
- 数据集：使用的均为公开数据集（MLS, LibriTTS, LibriTTS-R, DNS Challenge等），但未提及自身S2S模拟数据的发布计划。
- Demo：提供了在线示例网站：https://justinlovelace.github.io/projects/speechop。
- 复现材料：论文提供了非常详尽的架构参数（附录E.1）、训练配置（附录E.2）、采样配置（附录E.3）和超参数细节，为复现提供了充分的理论信息。但未提供代码和配置文件。
- 引用的开源项目：论文中引用了多个开源模型和工具，包括：DAC (Kumar et al., 2023), ByT5 (Xue et al., 2022), DiT (Peebles & Xie, 2023), Whisper/WhisperX (Radford et al., 2023; Bain et al., 2023), HuBERT (Hsu et al., 2021), HiFi-GAN (Kong et al., 2020)等。
- 论文中未提及完整的开源计划。

📌 **核心摘要**

用 5-8 句话总结这篇论文，必须覆盖：
1. 要解决什么问题
2. 方法核心是什么
3. 与已有方法相比新在哪里
4. 主要实验结果如何（尽量带数字；没有就写未提供）。如果论文中有实验结果表格，必须用 Markdown 表格完整列出关键数据；如果有实验结果相关图表，描述图表内容
5. 实际意义是什么
6. 主要局限性是什么

这篇论文旨在解决语音到语音（S2S）任务（如增强、分离）因配对数据稀缺而导致性能受限，而文本到语音（TTS）任务能利用海量数据的难题。方法核心是提出SpeechOp，一个基于潜在扩散Transformer的多任务模型，它首先用TTS数据预训练，然后在多任务（包括TTS和S2S）上微调。其关键创新在于提出了任务组合无分类器引导（TC-CFG），能在推理时优雅地组合不同能力（如增强与文本引导）。与已有方法相比，新在两点：一是证明了TTS预训练能加速并提升S2S任务性能；二是TC-CFG避免了直接混合生成先验的缺陷，通过判别式引导实现了更优的任务组合。主要实验结果包括：在语音增强中，结合Whisper转录本的隐式任务组合（ITC）管线取得了2.9%的WER，相比HiFi-GAN-2基线（5.4%）相对降低46%；在语音分离的主观MOS评分上（如LibriMix Noise数据集3.68），显著优于SepFormer系列模型（如AC-SIM-ML SepFormer为3.02）。实际意义在于提供了一种利用丰富TTS数据提升S2S任务，并实现灵活、可控语音处理的新范式。主要局限性是其内容恢复质量依赖外部ASR模型的准确性，且在传统信号保真度指标上可能不如专门优化的模型。

---

