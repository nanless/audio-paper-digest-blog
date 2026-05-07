---
title: "RenCon 2025: Revival of the Expressive Performance Rendering Competition"
date: 2026-05-07
draft: false
tags: [音乐生成, 基准测试, 模型评估, 数据集]
categories: [论文速递]
description: "音乐生成 | 6.5/10"
hiddenInHomeList: true
---

# 📄 RenCon 2025: Revival of the Expressive Performance Rendering Competition

#音乐生成 #基准测试 #模型评估 #数据集

✅ **6.5/10** | 前50% | #音乐生成 | #基准测试 | #模型评估 #数据集 | [arxiv](https://arxiv.org/abs/2605.02059v2)

学术质量 5.0/7 | 选题价值 1.0/2 | 复现加成 0.5 | 置信度 中


### 👥 作者与机构

- 第一作者：Huan Zhang（Queen Mary University of London）
- 通讯作者：未说明（论文未明确指定通讯作者，但提供了多位作者的邮箱，通常第一作者和最后一位作者可能为通讯作者，此处按论文原文不明确标注）。
- 作者列表：Huan Zhang (Queen Mary University of London), Taegyun Kwon (Korea Advanced Institute of Science and Technology), Anders Friberg (KTH Royal Institute of Technology), Junyan Jiang (New York University), Hayeon Bang (Korea Advanced Institute for Science and Technology (KAIST)), Hyeyoon Cho (Korea Advanced Institute of Science and Technology (KAIST)), Gus Xia (Mohamed bin Zayed University of Artificial Intelligence), Akira Maezawa (Yamaha Corporation), Simon Dixon (Queen Mary University of London), Dasaem Jeong (Sogang University)。

### 💡 毒舌点评

这篇论文巧妙地重启了沉寂十余年的经典竞赛“RenCon”，其两阶段（线上初选+现场决赛）的设计和融入MIREX的策略，为社区提供了一次难得的、对当前音乐表达渲染技术水平的“全景扫描”，这是其最大亮点。但作为一篇竞赛报告，其“学术创新”更多体现在组织设计而非算法本身；论文对竞赛中暴露的核心技术难题（如不同数字钢琴的MIDI速度动态映射标准化）虽有提及却未深入探讨解决方案，对于渴望具体技术细节的读者而言，深度稍显不足。

### 🔗 开源详情

- 代码：https://github.com/ismir-mirex/RenCon2025 (论文中明确指向此 GitHub 仓库以获取竞赛结果)
- 模型权重：论文中未提及
- 数据集：论文中未提及竞赛本身的训练或测试数据集链接。论文提到了现有的大型钢琴性能数据集，如 ATEPP 和 ASAP，但未给出其具体开源链接。
- Demo：https://ren-con2025.vercel.app/ (竞赛官方网站), https://ren-con2025-audition-page.vercel.app/ (在线试听与投票平台)
- 复现材料：论文中未提及
- 论文中引用的开源项目：
    - Midihum: https://github.com/erwald/midihum
    - Parangonar (用于性能对齐分析): 论文引用了 Peter2024TheGlueNoteAlignment，但未提供具体链接。
    - partitura (用于从对齐的MIDI中提取表现力参数): 论文引用了 Grachten2019PartituraData，但未提供具体链接。

## 补充信息

- [模型架构] 补充：在描述VirtuosoNet系统时，论文明确指出了其设计动机是“to model expressive dependencies across note and phrase levels”，即在音符和乐句级别建模表达性依赖关系，这是其采用分层结构的核心原因。这一点在分析的概述中未被强调。

- [实验结果] 补充：论文在“评估见解”部分特别指出了一个关键发现：“Midihum and ScorePerLockNAR, which largely preserve score timing with minimal expressive rubato, still receive mid‑tier rankings. This suggests that a stable tempo is acceptable, or in fact preferable to poorly chosen tempo or timing deviations.”（即，基本保持乐谱时值、几乎没有表现性速度变化的系统仍然获得了中等排名。这表明稳定的节奏是可接受的，甚至可能优于选择不当的速度或时值变化。）这为理解评估标准提供了重要视角。

- [评分理由] 补充：论文在“讨论与反思”中明确指出了竞赛设计的几项局限性，可视为论文的自我反思，而非分析中归因于“创新性有限”的一般性描述。具体包括：1) 线上初选的浮动界面给部分评估者带来了操作困难；2) 技术报告未与提交作品一同展示，导致评估者无法评判技术创新；3) 现场决赛因时间所限，未能让团队直接调试场馆设备，由组织者进行的统一校准和调整（如使用MIDI Velocity Processor进行速度重映射）应在未来正式化并提前分享；4) 现场活动中出现了DirectorMusices的MIDI因音量过低而重放的操作问题，暴露出回放流程和音量检查协议需要完善。这些是论文自身提出的未来改进方向。

### 📌 核心摘要

本文是对RenCon 2025竞赛的全面记录与分析。该竞赛旨在评估将乐谱转化为具有人类般时值、力度、连断等表达特征的钢琴演奏性能的“表达性性能渲染”技术。竞赛在ISMIR 2025会议重启，采用了线上初选和现场决赛的两阶段赛制。线上初选提供了4首指定曲目，要求提交乐谱到MIDI/WAV的转换结果，由在线评委投票；现场决赛要求参赛系统在48小时内处理一首未公开的、具有多种古典风格的新作品，并在音乐厅通过Disklavier回放，由现场观众评审，同时包含了一位专业钢琴家的现场表演作为人类基线。共有来自6个国家的9个系统参赛，方法涵盖基于规则、统计学习、分层概率模型、Transformer架构及跨模态生成。结果显示，在两个阶段中，基于规则的DirectorMusices和基于分层GRU的VirtuosoNet系统均位列前三。现场决赛中，人类表演获得最高分（4.40/5.0），且75%的观众能正确识别出人类演奏，表明当前AI系统尚未达到与人类无法区分的水平。对MIDI数据的分析表明，与节奏大起大落（rubato）相比，更丰富的力度变化与更高的观众评分相关性更强。论文总结了竞赛设计的得失、评估方法的见解以及未来发展方向，如引入更多数据模态（如演奏动作捕捉）和更广泛的输入形式（如扫描乐谱）。

### 🏗️ 模型架构

本文并非提出一个统一的新模型，而是报告并分析了9个不同的参赛系统。因此，本节将概述这9个系统所体现的主要架构类别。论文对它们的分类与描述如下：

![RenCon 2025竞赛主题乐谱](https://arxiv.org/html/2605.02059v2/images/rencon-theme.png)
图2展示了现场决赛所用未见作品的主题，改编自韩国民谣。

1.  基于规则与统计学习的方法：
    *   DirectorMusices：采用专家定义的启发式规则（如“乐句拱形规则”用于时值）和支持向量回归（SVR）模型（用于力度）的组合。
    *   RenConnoisseur：使用基于乐句轮廓和结构的启发式规则。
    *   Midihum：使用XGBoost模型，基于超过400个手工设计的特征，主要目标是力度“人性化”，但保留原始乐谱时值。

2.  分层与概率模型：
    *   VirtuosoNet (v1.1)：采用分层结构，结合门控循环单元（GRU）和条件变分自编码器（cVAE），建模音符级别和乐句级别的表达依赖关系。
    *   YQX+：采用多尺度概率框架，使用条件流匹配（CFM）将性能表达建模为从高斯噪声到表达性偏差的传输过程。

3.  基于Transformer的架构：
    *   ElegantAIPianist：使用一个4层双向编码器和一个6层因果解码器，并引入“风格自适应层归一化（SALN）”来注入作曲家特定特征。
    *   ScorePerLockNAR：采用非自回归Transformer，并通过模板约束的流程确保输出与乐谱结构100%一致。
    *   CueFreeExpressPedal：使用五个Transformer编码器的集成，从最少的输入特征预测微时值和延音踏板参数。

4.  跨模态合成：
    *   Contin-U：绕过中间的符号化MIDI表示。它使用一个统一的跨模态Transformer，将MusicXML“刻录”成图像，然后利用残差向量量化（RVQ）token进行直接的图像到音频合成。

### 💡 核心创新点

由于本文是竞赛报告，其“核心创新点”主要体现在竞赛组织与评估方法上，而非单一的技术模型。

1.  重启并现代化经典评估平台：在沉寂12年后，重启RenCon竞赛，将其嵌入主流MIREX框架，为评估音乐表达渲染技术提供了一个标准化的、当代的基准。
2.  两阶段竞赛设计：引入线上初选（扩大参与度、异步评审）和现场决赛（模拟真实表演场景、测试系统在时间压力下的应变能力），兼顾了广泛参与与深度评估。
3.  包含人类基线的“图灵测试”：在现场决赛中，将专业钢琴家的实时演奏与AI系统输出匿名混合播放，直接测试当前技术是否达到“以假乱真”的水平，这是对“表达性渲染”目标的终极检验。
4.  多维度分析与洞察：不仅公布排名，还深入分析了评估者背景、系统表现的相关性指标（如力度、节奏变异与得分的关系），并利用“性能蠕虫图”可视化不同系统的表达轨迹，提供了超越简单分数的深度理解。

### 🔬 细节详述

本文重点在于竞赛流程记录，许多技术细节因涉及多个不同系统而未在本文中统一说明。

*   训练数据：未说明。各参赛系统使用了各自的数据集（如论文提及的ATEPP、ASAP等），但本文未详细列出。
*   损失函数：未说明（针对各个参赛系统）。
*   训练策略：未说明（针对各个参赛系统）。
*   关键超参数：未说明（针对各个参赛系统）。
*   训练硬件：未说明（针对各个参赛系统）。
*   推理细节：论文提到在现场决赛中，由于时间限制，无法让各团队对场馆设备进行直接调试。组织者使用了Logic Pro中的MIDI Velocity Processor插件（图3）进行启发式的全局速度重映射，并对无踏板信息的MIDI文件统一应用了半踏板设置。
*   正则化或稳定训练技巧：未说明（针对各个参赛系统）。

竞赛特有技术细节：
   在线初选曲目：Handel: Capriccio in G minor, HWV 483; Beethoven: 32 Variations in C minor, WoO 80 - Theme and the first 5 variations; Rachmaninoff: Здесь хорошо* (Op. 21, No. 7)的钢琴改编版; Amy Beach: Eskimos, Op.64, No.4 - With Dog-Teams。输入为MusicXML。
*   现场决赛曲目：Hayeon Bang创作的未公开新作，基于韩国民谣主题，包含巴赫、莫扎特、肖邦、拉赫玛尼诺夫四种风格的变奏。
*   评估方法：使用5点李克特量表评分，并要求评估者给出1-5分的置信度。评估表包含总体评价、开放评论和可选的人口统计问题。

### 📊 实验结果

论文的主要“实验结果”即为竞赛的排名与分析数据。

表4：线上初选结果
| 排名 | 系统 | 分数（/5.0） |
| :--- | :--- | :--- |
| 1 | DirectorMusices | 4.33 |
| 2 | VirtuosoNet | 3.54 |
| 3 | Midihum | 3.32 |
| 4 | ElegantAIPianist | 3.19 |
| 5 | Contin-U | 3.00 |
| 6 | YQX+ | 2.83 |
| 7 | ScorePerLockNAR | 2.53 |
| 8 | RenConnoisseur | 2.53 |
| 9 | CueFreeExpressPedal | 2.31 |

表5：现场决赛结果及排名变化
| 排名 | 系统 | 分数（/5.0） | 初选排名 | 变化 |
| :--- | :--- | :--- | :--- | :--- |
| 1 | VirtuosoNet | 3.62 | 2 | ↑1 |
| 2 | DirectorMusices | 3.06 | 1 | ↓1 |
| 3 | Midihum | 2.90 | 3 | — |
| 4 | Contin-U | 2.90 | 5 | ↑1 |
| 5 | ScorePerLockNAR | 2.52 | 7 | ↑2 |
| 6 | RenConnoisseur | 2.40 | 8 | ↑2 |
| 7 | ElegantAIPianist | 2.08 | 4 | ↓3 |
| 8 | YQX+ | 1.79 | 6 | ↓2 |
| — | 人类 | 4.40 | — | — |

![现场决赛MIDI提交速度箱线图](https://arxiv.org/html/2605.02059v2/images/live_contest_velocity_boxplot.png)
图4展示了各参赛系统MIDI输出的速度值分布，显示不同系统间的力度动态范围存在显著差异，这解释了进行校准的必要性。

![评分与表现指标相关性散点图](https://arxiv.org/html/2605.02059v2/images/score_scatter_grid.png)
图5分析了表现指标与观众得分的关系。关键结论是：力度相关指标（速度标准差）与得分呈最强正相关；时值变异也有正相关；而节奏范围（tempo range）与得分的相关性较弱且不一致。

![表现蠕虫图](https://arxiv.org/html/2605.02059v2/images/performance_worms_m22_m41.png)
图6展示了第二变奏段的“速度-力度”性能蠕虫图。高分系统（如Human, VirtuosoNet）的轨迹呈现连贯、有方向性的弧线，表明其表达规划稳定且有意图；低分系统的轨迹则更碎片化、无规律。

### ⚖️ 评分理由

- 学术质量：5.0/7 - 作为竞赛文档，本文在组织、记录和分析方面做得全面、清晰，提供了有价值的领域快照和评估方法论讨论。然而，其贡献本质是整理和报告，而非提出新颖的技术理论或模型，创新性有限。实验部分即为竞赛结果，其“充分性”体现在对竞赛过程的完整呈现。
- 选题价值：1.0/2 - 主题聚焦于音乐表达渲染的评估竞赛，对于MIR社区尤其是该子领域的研究者具有明确的参考和基准价值。但相对于更广泛的音频/语音处理或通用AI领域，其影响面较窄，普适性一般。
- 开源与复现加成：0.5/1 - 论文明确提供了竞赛结果仓库和试听平台的链接（`https://github.com/ismir-mirex/RenCon2025`），便于获取参赛系统的输出进行进一步研究或复现评估环境。但未提供各参赛系统本身的代码、模型和详细训练信息，限制了对具体算法层面的复现。

---

[← 返回 2026-05-07 论文速递](/audio-paper-digest-blog/posts/2026-05-07/)
