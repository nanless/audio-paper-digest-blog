---
title: "RenCon 2025: Revival of the Expressive Performance Rendering Competition"
date: 2026-05-07
draft: false
tags: [音乐生成, 基准测试, 音乐信息检索, 模型评估]
categories: [论文速递]
description: "音乐生成 | 6.5/10"
hiddenInHomeList: true
---

# 📄 RenCon 2025: Revival of the Expressive Performance Rendering Competition

#音乐生成 #基准测试 #音乐信息检索 #模型评估

✅ **6.5/10** | 前50% | #音乐生成 | #基准测试 | #音乐信息检索 #模型评估 | [arxiv](https://arxiv.org/abs/2605.02059v2)

学术质量 4.5/7 | 选题价值 1.5/2 | 复现加成 0.5 | 置信度 高


### 👥 作者与机构

- 第一作者：Huan Zhang（Queen Mary University of London）
- 通讯作者：未明确说明（论文未明确标注通讯作者。根据学术惯例，最后一位作者Dasaem Jeong可能是负责人，但论文未明确声明）
- 作者列表：Huan Zhang (Queen Mary University of London, UK), Taegyun Kwon (Korea Advanced Institute of Science and Technology, Korea), Anders Friberg (KTH Royal Institute of Technology, Sweden), Junyan Jiang (New York University, USA), Hayeon Bang (Korea Advanced Institute for Science and Technology, Korea), Hyeyoon Cho (Korea Advanced Institute for Science and Technology, Korea), Gus Xia (Mohamed bin Zayed University of Artificial Intelligence, UAE), Akira Maezawa (Yamaha Corporation, Japan), Simon Dixon (Queen Mary University of London, UK), Dasaem Jeong (Sogang University, Korea)

### 💡 毒舌点评

本文作为一篇“竞赛复盘报告”，组织工作扎实，数据详实，为音乐AI社区重启了一个有价值的评测标杆。但其核心是记录和汇总，而非提出新方法或深入技术探究，学术深度与一篇标准研究论文相比有明显差距，更像是MIREX或ISMIR会议中的一个优秀“Workshop Report”。

### 🔗 开源详情

- 代码：
    - 比赛官方代码与数据仓库：https://github.com/ismir-mirex/RenCon2025
    - 参赛系统 `Midihum` 的代码：https://github.com/erwald/midihum
- 模型权重：论文中未提及。
- 数据集：论文中未提及具体可下载的数据集链接。文中提及了两个用于研究的公开数据集 ATEPP 和 ASAP（作为引用文献提及，未给出直接链接）。
- Demo：
    - 比赛主页：https://ren-con2025.vercel.app/
    - 在线试听页面：https://ren-con2025-audition-page.vercel.app/
- 复现材料：论文详细描述了比赛的完整复现信息，包括：
    1.  两阶段竞赛设计：初赛在线评测和决赛现场直播的详细规则。
    2.  初赛指定乐谱：提供四首指定曲目的 MusicXML 格式文件，其中一首（Rachmaninoff: Here, how fair this spot）的改编版本来源于 Musescore：https://musescore.com/user/33600951/scores/10812568。
    3.  决赛乐谱：包含主题与变奏的完整乐谱（共94小节），论文中指出该乐谱发布在官方 GitHub 仓库中。
    4.  评估方法：在线投票表单的设计、加权评分系统、现场演出评估流程。
    5.  Disklavier 校准流程：描述了决赛现场对 MIDI 播放进行速度和踏板校准的具体步骤与使用的 Logic Pro 插件设置（图3）。
- 论文中引用的开源项目：
    - 比赛平台与数据：
        - RenCon 2025 官方网站：https://ren-con2025.vercel.app/
        - 在线试听页面：https://ren-con2025-audition-page.vercel.app/
        - 比赛结果与乐谱仓库：https://github.com/ismir-mirex/RenCon2025
    - 乐谱来源：
        - Musescore 改编曲目页面：https://musescore.com/user/33600951/scores/10812568
    - 分析工具（论文提及但未提供链接）：
        - Partitura：用于从对齐后的 MIDI 数据中提取表情参数的 Python 库。
        - Parangonar：用于将 MIDI 演奏与乐谱对齐的工具（使用 DualDTWAlignment 方法）。
        - GigaPiano：早期 RenCon 竞赛使用的商业采样合成器（未提供链接）。
        - Contin-U：参赛的跨模态合成系统（论文中未提供其代码或项目链接）。

### 📌 核心摘要

1. 要解决什么问题：论文旨在重启并记录“表达性能渲染竞赛”(RenCon)，以建立一个标准化的评估平台，比较不同计算系统将乐谱转化为具有人类般时间、力度和 articulation 的钢琴演奏的能力。
2. 方法核心是什么：采用两阶段竞赛设计：(1) 在线初赛，参赛系统提交对给定乐谱的渲染音频，由领域专家在线匿名评分；(2) 线下决赛，在ISMIR会议现场，入围系统实时渲染一首未知新曲，现场观众评分并与一位人类钢琴家的基准演奏对比。
3. 与已有方法相比新在哪里：相较于2013年停办的旧RenCon，本次竞赛在形式上进行了重要创新：(1) 引入在线初赛以扩大参与度；(2) 在决赛中设置人类基准演奏（图灵测试变体）；(3) 评估了包括跨模态合成（直接音频生成）在内的多样化新方法；(4) 对竞赛流程（如MIDI力度校准）进行了详细文档化。
4. 主要实验结果如何：初赛和决赛排名整体一致，VirtuosoNet、DirectorMusices和Midihum始终位列前三。人类基准演奏（4.40/5.0）得分最高，且75%的观众正确识别出了人类演奏（图5）。分析表明，与观众评分正相关最强的特征是力度的变化范围和标准差（图5、图6），而非速度的大幅变化。
5. 实际意义是什么：为音乐信息检索和计算音乐学社区提供了一个更新的、公开的表达性能渲染系统评估基准和方法论，揭示了当前AI系统的优势（如力度控制）与局限（仍可被听众与人类区分），指明了未来研究方向（如更多模态、更标准化的评估协议）。
6. 主要局限性是什么：作为竞赛报告，其技术深度有限，未对任何单一模型进行深入剖析或提出改进。评估结果受竞赛特定设置（如选定曲目、特定Disklavier的音色、现场声学环境）影响，泛化性需谨慎看待。MIDI力度校准等实际操作问题凸显了该领域缺乏标准化的音频-性能映射协议。

### 🏗️ 模型架构

重要说明： 本文档是一篇竞赛组织与结果分析报告，并非提出一种新的表达性能渲染模型或架构。因此，下文将描述竞赛本身的设计框架，并概述9个参赛系统所代表的几大类方法论架构。

竞赛框架架构：
1.  输入：标准乐谱（MusicXML格式）。
2.  核心处理单元：各参赛的“表达性能渲染系统”。论文将这些系统大致分为四类：
    *   基于规则与统计学习：如DirectorMusices（使用乐句拱规则和SVR动力学模型）和Midihum（使用XGBoost和400+特征进行力度“人性化”）。
    *   层级与概率模型：如VirtuosoNet（层级GRU + cVAE，建模音符和乐句层级的表达依赖）和YQX+（使用条件流匹配CFM，将表达建模为从噪声到表达偏差的传输过程）。
    *   Transformer架构：如ElegantAIPianist（双向编码器+因果解码器+风格自适应层归一化）、ScorePerLockNAR（非自回归Transformer+模板约束）、CueFreeExpressPedal（五编码器集成）。
    *   跨模态合成：Contin-U（绕过MIDI，使用统一Transformer将乐谱图像直接转换为音频的RVQ tokens）。
3.  输出：演奏数据（MIDI或音频）。
4.  评估框架：采用结构化在线评分表（5分量表）进行观众评分，权重可调。在分析环节，使用Parangonar对齐工具和partitura库提取性能参数（速度、力度、时间、 articulation）进行量化分析。

![图1: 在线初赛平台界面，展示了匿名的参赛系统作品浮窗和评分表单](https://arxiv.org/html/2605.02059v2/images/online_audition_screenshot.png)
图1展示了在线初赛的交互界面。参赛系统被匿名化，评审者点击浮窗即可播放音频并填写评分表，旨在减少顺序偏差。

### 💡 核心创新点

1.  竞赛重启与形式创新：在AI生成音乐蓬勃发展的背景下，重启了停办十年的RenCon竞赛，并设计了“在线初赛+线下决赛（含人类基准）”的两阶段评估模式，为该领域提供了新的、更符合当前研究现状的评估平台。
2.  人类基准的引入：在决赛中设置由专业钢琴家演奏并录制的人类基准性能（图2），并将该性能匿名混入AI作品中让观众评分和识别，使竞赛成为一场实质性的“音乐表达图灵测试”，明确量化了当前AI与人类表演者之间的差距（75%的识别率）。
3.  对评估方法论的详细文档化：论文详细记录并反思了评估过程中遇到的实际问题，如MIDI力度在不同数字钢琴间的校准难题（图3、图4）、在线评审的顺序偏差、现场演出的音量平衡等，为未来举办类似评测活动提供了宝贵的操作指南。
4.  对参赛系统的多元化分类与分析：不仅报告了竞赛结果，还对参赛系统进行了清晰的方法论归类（规则、层级模型、Transformer、跨模态），并初步分析了性能参数与观众评分之间的关联（图5、图6），指出力度变化的相关性强于速度变化。

### 🔬 细节详述

*   训练数据：未说明。论文仅提及了用于测试的乐谱（初赛4首，决赛1首），未提供各参赛系统所使用的训练数据集细节（如ATEPP、ASAP等数据库的使用情况）。
*   损失函数：未说明。作为竞赛报告，论文不涉及任何具体模型的训练细节。
*   训练策略：未说明。
*   关键超参数：未说明。
*   训练硬件：未说明。
*   推理细节：对于决赛现场的MIDI播放，组织者使用了Logic Pro的“MIDI Velocity Processor”插件进行全局的力度偏移和斜率调整（图3），并对没有踏板预测的文件应用了保守的半踏板设置。各参赛系统自身的推理细节未提及。
*   正则化或稳定训练技巧：未说明。

### 📊 实验结果

本文的“实验结果”即为竞赛的评审结果。关键结果如下表所示：

表4：初赛结果（按加权平均分排名）
| 排名 | 系统 | 分数 |
| :--- | :--- | :--- |
| 1 | DirectorMusices | 4.33/5.0 |
| 2 | VirtuosoNet | 3.54/5.0 |
| 3 | Midihum | 3.32/5.0 |
| 4 | ElegantAIPianist | 3.19/5.0 |
| 5 | Contin-U | 3.00/5.0 |
| 6 | YQX+ | 2.83/5.0 |
| 7 | ScorePerLockNAR | 2.53/5.0 |
| 8 | RenConnoisseur | 2.53/5.0 |
| 9 | CueFreeExpressPedal | 2.31/5.0 |

表5：决赛结果（含人类基准及排名变化）
| 排名 | 系统 | 分数 | 初赛排名 | 变化 |
| :--- | :--- | :--- | :--- | :--- |
| 1 | VirtuosoNet | 3.62/5.0 | 2 | ↑1 |
| 2 | DirectorMusices | 3.06/5.0 | 1 | ↓1 |
| 3 | Midihum | 2.90/5.0 | 3 | — |
| 4 | Contin-U | 2.90/5.0 | 5 | ↑1 |
| 5 | ScorePerLockNAR | 2.52/5.0 | 7 | ↑2 |
| 6 | RenConnoisseur | 2.40/5.0 | 8 | ↑2 |
| 7 | ElegantAIPianist | 2.08/5.0 | 4 | ↓3 |
| 8 | YQX+ | 1.79/5.0 | 6 | ↓2 |
| — | Human | 4.40/5.0 | — | — |

*   主要发现：
    1.  冠军易主：基于规则的DirectorMusices初赛第一，但在决赛中被层级概率模型VirtuosoNet超越。
    2.  人类优势明显：人类演奏得分（4.40）显著高于所有AI系统（最高3.62），且75%的观众成功识别。
    3.  性能参数相关性分析（图5、图6）：力度（Velocity）的范围和标准差与观众评分的皮尔逊相关系数最高（r=0.64, 0.58），而速度（Tempo）范围的相关性较弱（r=0.40）。“性能蠕虫”图（图6）显示，高分性能（Human, VirtuosoNet）在速度-力度平面上呈现连贯的弧线，而低分系统则呈现破碎的点云。

![图5: 性能参数与观众评分的散点图网格](https://arxiv.org/html/2605.02059v2/images/score_scatter_grid.png)
图5分析了四个表达性参数与观众评分的相关性。可以看到，与力度相关的指标（velocity spread, velocity std）具有最强的正相关性（r值最高），而与速度和时值相关的指标相关性较弱或不一致。

![图6: 第二变奏段（m.22-m.41）的“性能蠕虫”图](https://arxiv.org/html/2605.02059v2/images/performance_worms_m22_m41.png)
图6展示了不同系统在速度-力度平面上的表达轨迹。高分系统（如Human, VirtuosoNet）轨迹平滑连贯，显示出有意图的表达规划；低分系统轨迹则散乱无序。

### ⚖️ 评分理由

- 学术质量：4.5/7。论文在竞赛组织、记录和初步分析方面技术正确且充分，证据（评审数据、参数分析）可信。但作为一篇报告，其核心学术贡献在于“组织一个活动”而非“提出一个新方法或发现一个新现象”，创新性有限，深度不及标准研究论文。
- 选题价值：1.5/2。重启RenCon对于音乐AI社区具有明确的正面影响，提供了一个急需的标准化评估基准。但“音乐表达渲染”是一个相对垂直、小众的研究方向，在更广泛的音频/语音AI领域影响力一般。
- 开源与复现加成：0.5/1。论文提供了竞赛官网、结果仓库链接，部分参赛系统信息已知，这为社区提供了宝贵的评测数据集和比较基准。但未提供统一的评测框架代码或详细的复现步骤，开源程度中等。

### 📎 补充信息

- [核心摘要] 补充：论文明确指出其为NIME‘26（国际新音乐界面会议）的会议论文，是对在ISMIR 2025会议期间举办的RenCon竞赛的全面记录。
- [模型架构] 补充：参赛系统代表了极宽的技术时间跨度（2002年至2025年），从基于规则的系统（DirectorMusices）到最新的跨模态合成系统（Contin-U），这本身反映了该领域技术演进的轨迹。
- [实验结果] 补充：在性能参数与观众评分的相关性分析（图5）中，除了提到力度范围的相关系数（r=0.64），力度标准差（velocity std）的相关系数为0.58，同样高于速度范围（r=0.40）。
- [细节详述/论文自我声明的局限性] 补充：论文在“讨论与反思”部分（7.1.1）明确指出了一个评审方法的局限性：在线评审阶段为了匿名而隐去了参赛系统的技术报告，这导致评审者无法评价技术创新性，只能基于渲染输出进行判断。这是一个重要的设计权衡和自我批评。
- [实验结果/与SOTA的差距] 补充：量化了当前AI系统与人类表演者之间的具体差距。在决赛中，人类基准演奏得分为4.40/5.0，而表现最好的AI系统（VirtuosoNet）得分为3.62/5.0，两者相差0.78分。同时，75%的观众正确识别出了人类演奏。
- [标签] 补充：论文关键词中包含了“Computational creativity”，分析中未体现此标签。
- [毒舌点评] 补充/修正：论文虽为竞赛报告，但已作为正式会议论文（NIME‘26）发表，而非仅为Workshop报告。分析中的描述可调整为“其性质类似于优秀的竞赛报告或基准测试论文，但已作为正式会议论文发表”。

---

[← 返回 2026-05-07 论文速递](/audio-paper-digest-blog/posts/2026-05-07/)
