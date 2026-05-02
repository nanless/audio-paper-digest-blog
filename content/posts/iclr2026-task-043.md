---
title: "ICLR 2026 - 音频效果处理 论文列表"
date: 2026-05-03
draft: false
tags: ["音频效果处理"]
categories: [iclr-2026]
description: "共 1 篇 ICLR 2026 音频效果处理 方向论文"
hiddenInHomeList: true
---

# ICLR 2026 - 音频效果处理

共 **1** 篇论文

[← 返回 ICLR 2026 总览](/audio-paper-digest-blog/posts/iclr2026-summary/)

---

| 排名 | 论文 | 评分 | 分档 |
|------|------|------|------|
| 🥇 | [LLM2Fx-Tools: Tool Calling for Music Post-Production](/audio-paper-digest-blog/posts/2026-05-03-llm2fx-tools-tool-calling-for-music-post) | 7.5分 | 前25% |

---

## 📋 论文详情

### 🥇 [LLM2Fx-Tools: Tool Calling for Music Post-Production](/audio-paper-digest-blog/posts/2026-05-03-llm2fx-tools-tool-calling-for-music-post)

✅ **7.5/10** | 前25% | #音频效果处理 | #大语言模型 #工具调用 | #音乐信息检索 #大语言模型

👥 **作者与机构**

- 第一作者：SeungHeon Doh（KAIST， Sony AI）
- 通讯作者：未说明（论文中作者贡献部分标注两位共同一作为SeungHeon Doh和Junghyun Koo，无明确通讯作者信息）
- 作者列表：SeungHeon Doh（KAIST， Sony AI）， Junghyun Koo（Sony AI）， Marco A. Martínez-Ramírez（Sony AI）， Woosung Choi（Sony AI）， Wei-Hsiang Liao（Sony AI）， Qiyu Wu（Sony Group Corporation）， Juhan Nam（KAIST）， Yuki Mitsufuji（Sony AI， Sony Group Corporation）

#

💡 **毒舌点评**

亮点在于它成功地将LLM的“思考-规划-执行”（CoT+工具调用）范式引入了一个全新的、需要专业知识的音频处理任务，并构建了配套的大规模数据集LP-Fx，为后续研究奠定了基础；然而，其局限性在于实验验证仅限于单乐器、9种预定义效果器的场景，距离真实世界复杂多轨音乐制作的通用性和可扩展性还有相当距离，更像一个精心设计的“原型验证”。

#

🔗 **开源详情**

-   代码：论文中未提及代码链接。提供了一个演示网站：https://seungheondoh.github.io/llm2fx-tools-demo/
-   模型权重：未提及是否公开模型权重。
-   数据集：论文中提出了LP-Fx数据集，但未提及公开获取方式。
-   Demo：提供了在线演示链接。
-   复现材料：论文详细描述了训练阶段、学习率、批大小、步数等部分超参数，但缺少硬件信息、完整配置文件和预训练检查点。附录中包含详细的提示词（Prompt）设计。
-   论文中引用的开源项目：依赖的开源项目包括：Pedalboard（音频效果库），Fx-Encoder++（音频编码器），Qwen3-4B（LLM骨干），以及dasp-pytorch（用于适配DeepAFx-ST基线）。

📌 **核心摘要**

1.  问题：传统音频效果链（Fx-chain）估计方法存在灵活性差（需预定义配置）、缺乏可解释性（无法提供推理过程）以及难以遵循复杂自然语言指令等局限。
2.  方法核心：提出LLM2Fx-Tools框架，利用一个经过多阶段训练的多模态LLM，通过链式思考（CoT）规划，理解音频输入和自然语言指令，然后生成结构化的工具调用序列（即Fx-chain及其参数），最终由外部音频效果模块执行。
3.  新意：1) 首次将LLM工具调用应用于音频效果处理，实现了对非可微效果模块的灵活控制；2) 引入为Fx-chain生成设计的CoT机制，将复杂任务分解为效果选择、排序、参数估计等可解释步骤；3) 将任务扩展为多模态指令跟随，支持用户通过文本定制效果链。
4.  主要实验结果：
    -   逆向工程：在Fx-chain规划上显著优于基线（效果分类准确率80%，排序相关性0.56），在感知距离（L/R MRS: 3.13）和嵌入相似度（AFx-Rep: 0.68）上也表现最佳。
    -   风格迁移：在跨数据集泛化上，DSP特征距离最低（7.41），嵌入相似度最高（AFx-Rep: 0.35）。
    -   自然语言生成：在LLM-as-a-Judge评估中，指令跟随质量（3.50）和CoT质量（3.05）得分优于或持平于基线。
    -   主观听测（图4）：LLM2Fx-Tools（62.8分）显著优于Gemini 2.5 Flash（56.5分）和DeepAFX-ST（54.8分）。
    关键对比数据见下表。

    | 方法 | 效果分类准确率 | 排序相关性 | 参数MAE | L/R MRS | DSP距离(AF) | 嵌入相似度(AFx-Rep) |
    | :--- | :---: | :---: | :---: | :---: | :---: | :---: |
    | MultiTask | 61% | 0.00 | 0.23 | 3.17 | 8.39 | 0.63 |
    | DeepAFx-ST | - | - | - | 1.75* | 3.95 | 0.62 |
    | Gemini 2.5 Flash | 78% | 0.54 | 0.32 | 3.42 | 14.97 | 0.56 |
    | LLM2Fx-Tools | 80% | 0.56 | 0.23 | 3.13 | 8.29 | 0.68 |
    (表2关键数据，DeepAFx-ST以感知距离为训练目标)*

5.  实际意义：为音乐后期制作提供了一种可解释、可控且能理解自然语言的新工具，降低了专业处理门槛，是LLM赋能垂直创意领域的重要实践。
6.  主要局限性：1) 可解释性依赖于“伪干音”预处理；2) 存在一对多映射的模糊性问题；3) 实验仅验证了单乐器和有限的效果器模块，对复杂混音和未见过的效果器泛化能力未知。

---

