---
title: "RenCon 2025: Revival of the Expressive Performance Rendering Competition"
date: 2026-05-07
draft: false
tags: [音乐生成, 音乐信息检索, 基准测试, 模型比较, 流匹配]
categories: [论文速递]
description: "音乐生成 | 6.5/10"
hiddenInHomeList: true
---

# 📄 RenCon 2025: Revival of the Expressive Performance Rendering Competition

#音乐生成 #音乐信息检索 #基准测试 #模型比较 #流匹配

✅ **6.5/10** | 前50% | #音乐生成 | #流匹配 | #音乐信息检索 #基准测试 | [arxiv](https://arxiv.org/abs/2605.02059v2)

学术质量 5.0/7 | 选题价值 1.0/2 | 复现加成 0.5 | 置信度 中


### 👥 作者与机构

- 第一作者：Huan Zhang（Queen Mary University of London）
- 通讯作者：未明确指定。从作者列表和邮箱格式看，所有作者均为共同作者，通讯作者信息未在提供的文本中明确标注。
- 作者列表：
    - Huan Zhang (Queen Mary University of London, London, UK)
    - Taegyun Kwon (Korea Advanced Institute of Science and Technology, Daejeon, Korea)
    - Anders Friberg (KTH Royal Institute of Technology, Stockholm, Sweden)
    - Junyan Jiang (New York University, New York, USA)
    - Hayeon Bang (Korea Advanced Institute of Science and Technology (KAIST), Daejeon, South Korea)
    - Hyeyoon Cho (Korea Advanced Institute of Science and Technology (KAIST), Daejeon, South Korea)
    - Gus Xia (Mohamed bin Zayed University of AI, Abu Dhabi, UAE)
    - Akira Maezawa (Yamaha Corporation, Hamamatsu, Japan)
    - Simon Dixon (Queen Mary University of London, London, UK)
    - Dasaem Jeong (Sogang University, Seoul, South Korea)

### 💡 毒舌点评

亮点：论文成功复兴了一个沉寂十年的标志性比赛，并创新性地设计了“在线评审+现场盲测”的两阶段赛制，为评估音乐生成模型提供了宝贵的实践范例和社区基准。
短板：作为一篇竞赛文档，其技术深度严重依赖于参赛系统本身的论文；文中对MIDI动态校准等关键操作环节的处理（如“启发式全局重映射”）显得较为粗糙，暴露出该领域在“从MIDI到真实听感”这一环节上仍缺乏标准化解决方案。

### 🔗 开源详情

- 代码：
    - RenCon 2025 竞赛结果: https://github.com/ismir-mirex/RenCon2025
    - 参赛系统 Midihum: https://github.com/erwald/midihum
    - 论文中未提及其它参赛系统（如VirtuosoNet, DirectorMusices等）的官方代码仓库链接。
- 模型权重：论文中未提及。
- 数据集：
    - 论文提及了用于性能渲染研究的大型数据集 ATEPP 和 ASAP，但未提供这些数据集的直接获取链接。
    - 论文中提及用于获取初赛乐谱的 Musescore 页面: https://musescore.com/user/33600951/scores/10812568
- Demo：
    - RenCon 2025 竞赛主页: https://ren-con2025.vercel.app/
    - 在线试听平台: https://ren-con2025-audition-page.vercel.app/
- 复现材料：论文中未提及。
- 论文中引用的开源项目：
    - Parangonar (用于音乐对齐的工具)：论文中未提供具体链接。
    - partitura (用于音乐性能分析的Python包)：论文中未提供具体链接。

## 补充信息

- [模型架构] 补充：分析中仅详细描述了VirtuosoNet和YQX+的架构。论文第5节对所有9个参赛系统进行了更清晰的高层次分类和具体方法描述。补充如下：
    - Midihum：使用XGBoost，基于400个手工设计特征，主要针对力度“人性化”。
    - Contin-U：跨模态Transformer，将乐谱转为图像，然后通过残差向量量化（RVQ）标记直接生成音频。
    - ElegantAIPianist：使用4层双向编码器和6层因果解码器，并通过风格自适应层归一化（SALN）注入作曲家特定特征。
    - ScorePerLockNAR：使用非自回归Transformer和模板约束流程，确保对乐谱结构的100%保真。
    - CueFreeExpressPedal：使用五个Transformer编码器的集成，从最小输入特征预测微时值和延音踏板参数。
    这些补充提供了对参赛技术多样性更完整的概览，有助于理解竞赛的广度。

- [实验结果] 补充：在决赛结果（表5）中，分析遗漏了一个关键细节：系统“CueFreeExpressPedal”未能参加决赛。论文明确提到“The model CueFreeExpressPedal was not able to participate in the final.”。这解释了为何其未出现在决赛排名中，是理解完整竞赛参与情况的重要信息。

- [细节详述] 补充：论文第7.1.2节详细描述了现场比赛中的一个具体操作事件：DirectorMusices的MIDI因首次播放音量过低而被播放了两次。论文指出“This incident further indicates that robust playback procedures and level-check protocols are needed.”。分析中未提及此具体事件，但它强化了论文所讨论的竞赛组织挑战，并为未来比赛提供了直接教训。

- [开源详情] 补充：论文第1节脚注提供了在线试听平台的直接链接：`https://ren-con2025-audition-page.vercel.app/`。分析中仅列出了比赛主页和结果仓库，遗漏了此关键资源入口。

- [细节详述] 补充：论文第3.1节提到了初赛阶段MIDI文件渲染为音频的具体执行地点：使用位于林茨约翰·开普勒大学维也纳办公室的一台Disklavier。这是一个确保评估一致性的具体操作细节，分析中未提及。

- [实验结果] 补充：论文表2提供了评估者的人口统计数据（初赛N=24，决赛N=48）。分析在“核心摘要”和“实验结果”部分均未引用此数据。这些数据表明评审团具有高水平的专业性（如研究人员、音乐技术人员、演奏者的比例），为评估结果提供了背景信度。

- [核心摘要] 补充：论文在讨论MIDI动态校准问题时，明确指出这是RenCon竞赛自2003年就存在的历史性问题（第2节、第3.2.2节）。它源于不同数字钢琴和Disklavier的MIDI力度响应不同，且缺乏标准化解决方案。分析将其表述为“暴露了…缺乏标准化转换流程的问题”，但未强调其历史延续性。补充此点有助于理解当前工作是对一个长期挑战的延续，而非新发现的问题。

### 📌 核心摘要

1.  要解决什么问题？ 解决音乐信息检索（MIR）和AI音乐生成领域中，对“可表达性能渲染”（将乐谱转化为具有人类般时值、力度和表情的演奏）系统缺乏系统性、公开化评估和比较平台的问题。该领域自2013年后竞赛活动中断，亟需更新基准。
2.  方法核心是什么？ 组织并实施了RenCon 2025竞赛。竞赛核心是采用两阶段评估：a) 在线初赛：参赛系统渲染指定曲目（MusicXML格式），由全球在线评审者进行匿名盲听评分；b) 现场决赛：入围系统在48小时内渲染一首未公开的新曲，结果在ISMIR会议音乐会上由现场观众盲听评分。同时设置了人类钢琴家作为基准。
3.  与已有方法相比新在哪里？ a) 赛制创新：首次引入大规模在线评审阶段，结合传统现场音乐会评审，提高了参与度和评估的多样性。b) 评估维度：不仅比较最终排名，还通过MIDI对齐分析（使用Partitura库），探究了时值、力度、发音等表现参数与听众评分的相关性（图5），并可视化了“性能虫”（图6）以分析表达轨迹。c) 时代性：评估了2019年至2025年的多样态技术，包括基于规则、统计学习、分层概率模型、Transformer以及跨模态合成（如Contin-U）的系统。
4.  主要实验结果如何？ 结果显示：a) 总体排名：VirtuosoNet（分层GRU+cVAE）和DirectorMusices（规则系统）在两个阶段均位列前二，Midihum（XGBoost）稳定在第三。b) 人机差异：人类基准得分最高（4.40/5.0），75%的评审者正确识别了人类演奏，表明当前系统与人类水平仍有可感知的差距。c) 参数分析：力度（velocity）的动态范围和标准差与观众评分呈更强正相关，而速度（tempo）的变化与评分关系较弱。具体排名见表4、表5。
5.  实际意义是什么？ 为AI音乐生成领域提供了一个更新的、多阶段的性能渲染评估基准和操作范例。收集的评审数据和分析结果揭示了当前系统的优势和不足（如动态表现的重要性），为未来模型改进指明了方向。同时，论文详细记录了竞赛组织中的技术挑战（如不同系统的MIDI力度响应差异、现场校准问题），为后续研究提供了宝贵经验。
6.  主要局限性是什么？ a) 评估的主观性：尽管设计了结构化评审，但音乐表达评估本质上是主观的，且评审者背景各异。b) 技术细节缺失：论文作为竞赛文档，对各参赛系统内部模型的具体技术细节描述有限。c) 操作挑战：现场比赛中，MIDI动态校准需要人工启发式调整，暴露了从符号数据到真实声学表现之间缺乏标准化转换流程的问题。d) 普适性有限：比赛曲目集中在西方古典钢琴曲，评估结果是否能推广到其他音乐风格和乐器有待验证。

### 🏗️ 模型架构

本文并非提出一个单一的新模型架构，而是对多个参赛系统的竞赛表现进行文档记录。因此，无法描述一个统一的模型架构。论文仅对9个参赛系统进行了高层次的分类描述（见第5节），例如：
- VirtuosoNet：分层GRU + 条件变分自编码器（cVAE），用于建模音符和乐句级别的表现依赖。
- YQX+：基于条件流匹配（CFM）的多尺度概率模型。
- Contin-U：跨模态Transformer，直接将乐谱图像转换为音频。
详细的模型架构需参见各参赛系统自身的论文。论文中未提供任何参赛系统的架构图。

### 💡 核心创新点

作为竞赛文档，其创新主要体现在竞赛设计和分析方法上，而非提出新的渲染算法。
1.  两阶段竞赛赛制：结合在线盲听评审与现场音乐会评审，平衡了广泛的国际参与和严格的现场评估，为评估生成式音乐系统提供了可复用的框架。
2.  系统性的表现参数分析：利用Parangonar和Partitura工具对MIDI输出进行量化对齐分析，首次在RenCon竞赛中系统性地探究了时值、力度等具体表现参数（图5、图6）与主观评分之间的关联，为“什么是好的表达性演奏”提供了数据驱动的见解。
3.  对跨模态生成方法的包容：在评审中纳入了如Contin-U这类直接从乐谱图像生成音频、绕过中间MIDI表示的系统，反映了该领域技术路线的最新多样性。
4.  人类基准的正式设立与盲测：明确邀请并训练了人类钢琴家作为基准，并将其演奏匿名混入系统输出中进行“图灵测试”式评审，直接量化了当前AI与人类表现的差距。

### 🔬 细节详述

- 训练数据：论文未提供各参赛系统使用的训练数据集的具体细节（如数据集名称、规模、预处理）。文中仅提及存在ATEPP和ASAP等大规模性能数据集。
- 损失函数：未说明。各系统的损失函数在其各自的论文中。
- 训练策略：未说明。
- 关键超参数：未说明。论文仅展示了为现场演出调整的一个示例（图3：MIDI速度处理器设置）。
- 训练硬件：未说明。
- 推理细节：现场决赛系统需在48小时内完成对未见曲目的渲染，但具体的推理时长、温度、束搜索等参数未提及。
- 正则化或稳定训练技巧：未说明。
- 竞赛操作细节：
    - MIDI动态校准：由于各系统输出的MIDI力度响应不统一，且无法在真实场地（KAIST礼堂的Disklavier）预先调试，组织者使用Logic Pro的MIDI速度处理器插件进行了“启发式全局速度重映射”（图3）。图4展示了各系统提交MIDI的力度分布差异。
    - 踏板处理：对未预测延音踏踏板的MIDI文件，保守地添加了半踏板设置。

### 📊 实验结果

本文的“实验”即竞赛本身，结果如下：

表4：初赛（在线）排名
| 排名 | 系统 | 平均分（/5.0） |
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

表5：决赛（现场）排名
| 排名 | 系统 | 平均分（/5.0） | 初赛排名 | 变化 |
| :--- | :--- | :--- | :--- | :--- |
| 1 | VirtuosoNet | 3.62 | 2 | ↑1 |
| 2 | DirectorMusices | 3.06 | 1 | ↓1 |
| 3 | Midihum | 2.90 | 3 | — |
| 4 | Contin-U | 2.90 | 5 | ↑1 |
| 5 | ScorePerLockNAR | 2.52 | 7 | ↑2 |
| 6 | RenConnoisseur | 2.40 | 8 | ↑2 |
| 7 | ElegantAIPianist | 2.08 | 4 | ↓3 |
| 8 | YQX+ | 1.79 | 6 | ↓2 |
| — | Human | 4.40 | — | — |

关键结果分析：
- 人机差距：人类基准得分（4.40）显著高于所有系统（最高3.62），且75%的现场评审（48人中的36人）正确识别了人类演奏。
- 性能参数相关性（图5）：力度动态范围（Velocity range）和力度标准差（Velocity std）与观众评分呈最强正相关。速度范围（Tempo range）和速度波动（Tempo volatility）的相关性较弱或不稳定。
- 性能虫可视化（图6）：展示了各系统在第二变奏段的速度-力度轨迹。高分表演（如Human, VirtuosoNet）的轨迹连贯、有明确走向；低分系统则显得碎片化、缺乏方向性。

### ⚖️ 评分理由

- 学术质量：5.0/7 - 论文在竞赛组织、评估设计和结果分析方面表现扎实、逻辑清晰，具有文档价值。但缺乏原创性的算法或理论贡献，技术细节大量依赖外部系统，部分操作（如校准）存在瑕疵。证据（竞赛结果）可信，但评估本身具有主观性。
- 选题价值：1.0/2 - 恢复一个重要的垂直领域基准测试，对AI音乐生成社区具有明确的评估和推动价值。但该领域相对小众，与更广泛的音频/语音读者的直接相关性一般，实际应用局限于学术研究。
- 开源与复现加成：0.5/1 - 提供了比赛网站和结果仓库链接，增加了透明度。但未提供用于复现竞赛环境的核心代码、统一的评审数据集或对参赛系统权重的引用，复现完整竞赛仍存在门槛。

---

[← 返回 2026-05-07 论文速递](/audio-paper-digest-blog/posts/2026-05-07/)
