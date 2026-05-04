---
title: "ICLR 2026 - 音乐信息检索 论文列表"
date: 2026-05-04
draft: false
tags: ["音乐信息检索"]
categories: [iclr-2026]
description: "共 2 篇 ICLR 2026 音乐信息检索 方向论文"
hiddenInHomeList: true
---

# ICLR 2026 - 音乐信息检索

共 **2** 篇论文

[← 返回 ICLR 2026 总览](/audio-paper-digest-blog/posts/iclr2026-summary/)

---

| 排名 | 论文 | 评分 | 分档 |
|------|------|------|------|
| 🥇 | [Bridging Piano Transcription and Rendering via Disentangled ](/audio-paper-digest-blog/posts/2026-05-04-bridging-piano-transcription-and-rendering-via) | 8.0分 | 前25% |
| 🥈 | [LLM2Fx-Tools: Tool Calling for Music Post-Production](/audio-paper-digest-blog/posts/2026-05-04-llm2fx-tools-tool-calling-for-music-post) | 7.0分 | 前25% |

---

## 📋 论文详情

### 🥇 [Bridging Piano Transcription and Rendering via Disentangled Score Content and Style](/audio-paper-digest-blog/posts/2026-05-04-bridging-piano-transcription-and-rendering-via)

🔥 **8.0/10** | 前25% | #音乐信息检索 | #多任务学习 | #音乐生成 #扩散模型

👥 **作者与机构**

- 第一作者：Wei Zeng (National University of Singapore, Integrative Sciences and Engineering Programme, NUS Graduate School; School of Computing)
- 通讯作者：Ye Wang (National University of Singapore, Integrative Sciences and Engineering Programme, NUS Graduate School; School of Singapore, Email: dcswangy@nus.edu.sg)
- 作者列表：Wei Zeng (National University of Singapore, Integrative Sciences and Engineering Programme, NUS Graduate School; School of Computing), Junchuan Zhao (National University of Singapore, School of Computing), Ye Wang (National University of Singapore, Integrative Sciences and Engineering Programme, NUS Graduate School; School of Computing)

#

💡 **毒舌点评**

亮点：巧妙地将演奏渲染（EPR）和乐谱转录（APT）这两个互逆任务统一到一个解耦表示学习的框架中，不仅提升了两个任务的性能，还为可控的音乐表达（风格迁移、自动推荐）开辟了新路径，理论动机清晰，工程实现完整。
短板：模型本身规模较大（188M参数），且PSR模块需要单独训练和推理，增加了部署复杂性；实验数据主要局限于古典钢琴音乐，其在更广泛音乐流派（如爵士、流行）上的泛化能力未得到验证。

#

🔗 **开源详情**

- 代码：论文中未直接提供代码仓库链接，但在结论处承诺“将在论文接收后发布代码，提供充分的说明以使用公共数据集（如ASAP和ATEPP）复现模型架构和训练流程”。
- 模型权重：未提及公开预训练模型权重。
- 数据集：使用了公共数据集ASAP和ATEPP，论文中描述了数据划分和处理流程。无配对数据（MuseScore乐谱、YouTube转录演奏）为自行收集，但部分来源公开。
- Demo：提供了一个项目主页（https://wei-zeng98.github.io/joint-apt-epr/）用于展示EPR和风格迁移的示例音频。
- 复现材料：论文附录（A-G）提供了极其详细的数据处理细节（数据过滤规则、表示方案）、模型实现细节（训练任务、损失公式、优化配置、PSR架构）、主观测试说明、补充实验（消融、多样性分析、GPT标注验证）、以及挑战与未来工作讨论。这些信息为复现提供了坚实基础。
- 引用的开源项目：MidiTok (用于MIDI令牌化)， Partitura (用于音乐处理)， Aria-AMT (用于音频转录)。

📌 **核心摘要**

1.  问题：表现性钢琴演奏渲染（EPR，从乐谱生成演奏）和自动钢琴转录（APT，从演奏恢复乐谱）是音乐信息检索中的两个基础互逆任务。现有工作通常独立处理它们，且EPR系统大多依赖精细的音符级对齐数据，限制了其灵活性和可扩展性。
2.  方法：本文提出了一个基于Transformer的统一序列到序列（Seq2Seq）框架，通过解耦音符级乐谱内容和全局演奏风格表示，联合建模EPR和APT。该模型可使用序列对齐的配对数据进行训练，无需音符级对齐。此外，独立引入了一个基于扩散模型的性能风格推荐（PSR）模块，能够仅从乐谱内容生成多样且风格适配的风格嵌入。
3.  创新：主要创新在于：(1) 首次通过统一框架和解耦表示联合建模EPR和APT，实现任务间互监督；(2) 提出无需音符级对齐的Seq2Seq EPR公式，降低了数据门槛；(3) 设计了PSR模块，模拟了演奏家从乐谱推断风格的能力，实现了自动化且可控的渲染。
4.  结果：在ASAP基准数据集上，该联合模型在APT任务上取得了与SOTA方法相当的性能（例如，在MUSTER和ScoreSimilarity多项指标上表现优异）。在EPR任务上，其性能（Ours-Target）优于仅训练EPR的模型和部分基线，生成的演奏在方差、KL散度等指标上更接近人类演奏，主观评价也获得了高分。风格解耦通过表演者/作曲家识别实验和风格迁移测试得到了验证。
5.  意义：该工作为音乐AI系统提供了更统一、灵活的处理范式，推动了无对齐监督学习在音乐领域的应用。PSR模块使得非专业用户也能轻松生成具有合适风格的音乐演奏，具有潜在的教育和创作辅助价值。
6.  局限性：当前评估主要在古典钢琴音乐数据集上进行，对流行、爵士等更广泛风格的泛化性有待探索。模型复杂度较高，PSR作为独立模块增加了系统的两阶段训练和推理开销。

#

---

### 🥈 [LLM2Fx-Tools: Tool Calling for Music Post-Production](/audio-paper-digest-blog/posts/2026-05-04-llm2fx-tools-tool-calling-for-music-post)

✅ **7.0/10** | 前25% | #音乐信息检索 | #大语言模型 | #多模态模型 #数据集

👥 **作者与机构**

- 第一作者：SeungHeon Doh（KAIST, Sony AI）、Junghyun Koo（Sony AI）（共同第一作者）
- 通讯作者：未明确说明
- 作者列表：SeungHeon Doh (KAIST, Sony AI), Junghyun Koo (Sony AI), Marco A. Martínez-Ramírez (Sony AI), Woosung Choi (Sony AI), Wei-Hsiang Liao (Sony AI), Qiyu Wu (Sony Group Corporation), Juhan Nam (KAIST), Yuki Mitsufuji (Sony AI, Sony Group Corporation)

💡 **毒舌点评**

亮点是这篇论文首次将LLM的工具调用范式引入到音频效果链生成任务，框架设计完整（从感知、推理到执行），并配套发布了高质量的对话式数据集LP-Fx，为后续研究建立了不错的基础。短板是实验验证范围主要局限于单声道、单乐器音频，在真正复杂的多轨混音场景下有效性存疑，且“可解释性”在面对多效果器组合产生的复杂听感时可能大打折扣。

🔗 **开源详情**

*   代码：论文中未提及代码仓库链接。
*   模型权重：未提及公开权重。
*   数据集：开源了LP-Fx数据集。论文提供了Demo页面链接：`https://seungheondoh.github.io/llm2fx-tools-demo/`，通常数据集下载链接会在此类页面上提供。
*   Demo：提供了在线演示页面：`https://seungheondoh.github.io/llm2fx-tools-demo/`。
*   复现材料：论文详细说明了数据生成流程、参数范围（表6）、训练两阶段的学习率/步数等关键细节。提供了多个附录（C-F）用于补充生成提示词、评估指标定义等。
*   论文中引用的开源项目：
    *   音频效果库：Pedalboard（用于部分效果器）。
    *   音频效果移除：Fx-Removal (Rice et al., 2023)。
    *   不同iable DSP基线：dasp-pytorch仓库（用于DeepAFx-ST基线）。
    *   LLM基础：Qwen3模型（Yang et al., 2025）。

📌 **核心摘要**

本文提出LLM2Fx-Tools，一个基于大语言模型（LLM）的多模态框架，用于自动生成可执行的音乐后期制作音频效果链（Fx-chain）。该方法旨在解决传统自动FX链估计方法在灵活性（动态选择效果和排序）和可解释性方面的不足。核心方法是利用一个预训练音频编码器将干声和参考音频映射到语言模型空间，再通过LLM（Qwen3-4B）以链式思维（CoT）规划为引导，生成结构化的工具调用序列，从而选择效果器、确定顺序并估算参数。为训练此模型，作者构建并开源了LP-Fx数据集，包含约10.1万条带有CoT标注的对话式样本。实验在逆向工程（给定干声和湿声推导FX链）和音频效果风格迁移（从参考音频推断FX链并应用于新音频）两个任务上进行。主要结果表明，LLM2Fx-Tools在效果分类准确率（80%）、排序相关性（0.56）以及多项感知和特征距离指标上优于回归、多任务学习等传统基线，也优于闭源的Gemini 2.5 Flash模型。MUSHRA主观听感测试也证实了其优势。论文的核心意义在于提出了一种可解释、可控且基于对话的音频后期制作新范式。主要局限性包括：处理范围限于单声道音频、FX链推导依赖于预处理得到的伪干声、以及效果器逆向工程本身存在的一到多映射歧义性。

---

