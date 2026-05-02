---
title: "ICLR 2026 - 音频效果链估计 论文列表"
date: 2026-05-03
draft: false
tags: ["音频效果链估计"]
categories: [iclr-2026]
description: "共 1 篇 ICLR 2026 音频效果链估计 方向论文"
hiddenInHomeList: true
---

# ICLR 2026 - 音频效果链估计

共 **1** 篇论文

[← 返回 ICLR 2026 总览](/audio-paper-digest-blog/posts/iclr2026-summary/)

---

| 排名 | 论文 | 评分 | 分档 |
|------|------|------|------|
| 🥇 | [LLM2Fx-Tools: Tool Calling for Music Post-Production](/audio-paper-digest-blog/posts/2026-05-03-llm2fx-tools-tool-calling-for-music-post) | 7.0分 | 前25% |

---

## 📋 论文详情

### 🥇 [LLM2Fx-Tools: Tool Calling for Music Post-Production](/audio-paper-digest-blog/posts/2026-05-03-llm2fx-tools-tool-calling-for-music-post)

✅ **7.0/10** | 前25% | #音频效果链估计 | #工具调用 | #音频大模型 #音乐后期制作

👥 **作者与机构**

- 第一作者：SeungHeon Doh（KAIST；在论文脚注中注明工作于Sony AI期间完成）
- 通讯作者：未说明（论文未明确标注通讯作者）
- 作者列表：
    - SeungHeon Doh（KAIST；Sony AI）
    - Junghyun Koo（Sony AI）
    - Marco A. Martínez-Ramírez（Sony AI）
    - Woosung Choi（Sony AI）
    - Wei-Hsiang Liao（Sony AI）
    - Qiyu Wu（Sony Group Corporation）
    - Juhan Nam（KAIST）
    - Yuki Mitsufuji（Sony AI；Sony Group Corporation）

💡 **毒舌点评**

这篇论文的亮点在于其巧妙的“桥梁”作用——用LLM的CoT和工具调用能力，将模糊的用户意图（参考音频+指令）映射为可执行的、结构化的音频处理流水线（Fx-chain），大幅提升了结果的可解释性和可控性。然而，其短板也很明显：整个系统的端到端训练和评估高度依赖于一个由LLM合成（LP-Fx数据集）又由LLM评判的闭环生态，这种“AI训练AI”的方式虽然高效，但可能引入难以察觉的偏差，且论文对单乐器场景的验证，离真正复杂的多轨音乐制作实战还有距离。

🔗 **开源详情**

- 代码：论文中未提及代码仓库链接。
- 模型权重：未提及。
- 数据集：论文声称发布了LP-Fx数据集，但具体获取方式（通过提供的Demo网站下载还是需要其他申请）未在论文正文中说明。Demo网站链接为：`https://seungheondoh.github.io/llm2fx-tools-demo/`。
- Demo：提供了在线演示网站：`https://seungheondoh.github.io/llm2fx-tools-demo/`。
- 复现材料：论文详细描述了数据生成管道（4个阶段）和训练策略（两阶段），在附录中给出了详细的Prompt和参数范围，这为复现提供了重要指导。但未提供训练好的检查点、配置文件或硬件环境信息。
- 引用的开源项目：论文依赖并提到了以下开源工具/模型：
    - 音频效果库：Pedalboard (Spotify)， 以及作者自定义的效果模块。
    - 音频编码器：Fx-Encoder++。
    - 可微分信号处理基线：dasp-pytorch (用于适配DeepAFx-ST)。
    - 数据集：MedleyDB (Bittner et al.)， MoisesDB (Pereira et al.)。
    - LLM基础模型：Qwen3-4B (Yang et al.)。

📌 **核心摘要**

这篇论文针对音乐后期制作中从参考音频或用户指令自动推断音频效果链（Fx-chain）的任务，提出了LLM2Fx-Tools框架。其核心创新是首次将大型语言模型（LLM）的工具调用与链式思维（CoT） 能力应用于音频效果处理，使模型不仅能预测效果参数，还能“解释”其选择效果类型和顺序的推理过程。与传统基于回归、多任务学习或可微分信号处理的方法相比，LLM2Fx-Tools在效果链规划的灵活性、参数估计的准确性以及推理过程的可解释性上具有显著优势。实验表明，在逆向工程任务上，该方法在效果模块分类准确率（80% vs. 最佳基线61%）、排序相关性（0.56 vs. 0.00）和MUSHRA主观评分（62.8 vs. 54.8）上均优于基线。在更贴近实际的音频效果风格迁移任务中，它也取得了最优的DSP特征距离（7.41）和嵌入相似度（0.35）。此外，论文还贡献了一个大规模、带结构化标注的音乐制作对话数据集LP-Fx。其主要意义在于为音乐生产提供了可解释、可控的AI辅助工具。局限性包括：评估主要集中在单乐器，对复杂多轨场景验证不足；系统对输入音频有预处理（Fx-Removal/Normalization）依赖；以及存在音频效果链估计中固有的“一对多”歧义性问题。

---

