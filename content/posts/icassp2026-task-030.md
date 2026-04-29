---
title: "ICASSP 2026 - 数据集 论文列表"
date: 2026-04-29
draft: false
tags: ["数据集"]
categories: [icassp-2026]
description: "共 3 篇 ICASSP 2026 数据集 方向论文"
hiddenInHomeList: true
---

# ICASSP 2026 - 数据集

共 **3** 篇论文

[← 返回 ICASSP 2026 总览](/audio-paper-digest-blog/posts/icassp2026-summary/)

---

| 排名 | 论文 | 评分 | 分档 |
|------|------|------|------|
| 🥇 | [HiFi-HARP: A High-Fidelity 7th-Order Ambisonic Room Impulse ](/audio-paper-digest-blog/posts/2026-04-29-hifi-harp-a-high-fidelity-7th-order-ambisonic) | 7.5分 | 前25% |
| 🥈 | [Representation-Based Data Quality Audits for Audio](/audio-paper-digest-blog/posts/2026-04-29-representation-based-data-quality-audits-for-audio) | 7.5分 | 前25% |
| 🥉 | [AMBISONIC-DML: A Benchmark Dataset for Dynamic Higher-Order ](/audio-paper-digest-blog/posts/2026-04-29-ambisonic-dml-a-benchmark-dataset-for-dynamic) | 7.5分 | 前25% |

---

## 📋 论文详情

### 🥇 [HiFi-HARP: A High-Fidelity 7th-Order Ambisonic Room Impulse Response Dataset](/audio-paper-digest-blog/posts/2026-04-29-hifi-harp-a-high-fidelity-7th-order-ambisonic)

✅ **7.5/10** | 前25% | #数据集 | #混合仿真 | #麦克风阵列 #空间音频

👥 **作者与机构**

- 第一作者：Shivam Saini（Leibniz University Hannover, Institut für Kommunikationstechnik）
- 通讯作者：未说明
- 作者列表：Shivam Saini（Leibniz University Hannover, Institut für Kommunikationstechnik）、Jürgen Peissig（Leibniz University Hannover, Institut für Kommunikationstechnik）

#

💡 **毒舌点评**

亮点：论文的亮点在于其“集大成”的工程实现——将高阶Ambisonics（7阶）、混合声学仿真（低频波导+高频射线追踪）以及来自3D-FRONT的复杂室内场景这三个关键要素成功融合并规模化，形成了一个在技术规格上超越以往同类数据集（如HARP、GWA）的资源。短板：主要短板在于其“高保真”声称部分依赖于文本语义的材料映射（图2，图3），这引入了一个与真实世界材料属性不确定性的间隙，使得数据集的保真度上限可能受限于该映射方法的精度，而非物理仿真本身的极限。

#

📌 **核心摘要**

1.  解决的问题：为了解决现有大规模房间脉冲响应（RIR）数据集要么Ambisonic阶数低（如FOA），要么声学仿真方法单一（仅几何声学或仅波导），要么房间场景过于简单（鞋盒模型）的问题，本论文旨在创建一个结合了高阶、高保真仿真和复杂真实场景的大规模RIR数据集。
2.  方法核心：方法核心是构建一个混合声学仿真流水线：对900 Hz以下的低频采用基于有限差分时域（FDTD）的波导仿真，以准确模拟衍射等波动现象；对900 Hz以上的高频采用射线追踪方法进行高效仿真。数据基于3D-FRONT数据库中复杂、带家具的室内场景，并通过基于语义标签的文本分类方法为物体表面分配频率相关的声学吸收系数。最终将原始RIR编码为AmbiX格式（ACN）的7阶Ambisonic表示。
3.  相比已有方法新在哪里：HiFi-HARP是首个将7阶高阶Ambisonics与混合波导-几何声学仿真相结合，并应用于大规模复杂室内场景的数据集。相比仅用图像源法（ISM）的HARP数据集，它引入了更精确的低频波动效应；相比仅用几何仿真的SoundSpaces，它提供了更高的Ambisonic阶数和低频精度；相比单通道的GWA数据集，它提供了完整的高阶空间信息。
4.  主要实验结果：
    *   数据集规模与特性：包含超过10万个7阶RIR，场景覆盖约2000个复杂室内空间，RT60主要分布在0.2-0.8秒，中频吸收系数在0.2-0.9之间。
    *   下游任务验证：
        *   T60估计（表II）：使用HiFi-HARP数据对测量数据增强训练后，模型在真实测试集上的性能显著提升，Pearson相关系数(ρ)从0.85提高到0.92，MSE从0.018降至0.012。
        *   DOA估计（表III）：训练数据的Ambisonic阶数越高，DOA估计模型在真实BRIR测试集上的性能越好。使用7阶数据训练的模型达到最低MSE（1.93）和最高的Pearson相关系数（0.90）。
    *   仿真验证：与商业仿真软件Treble及实验室测量对比（图2，图3），显示在不同频带存在一定误差，主要归因于材料属性映射的不精确。
5.  实际意义：为声场录制、空间音频渲染（VR/AR）、声源定位、去混响、房间声学参数估计等领域的数据驱动算法研究和基准测试提供了前所未有的高质量、大规模、多样化的训练和评估资源。
6.  主要局限性：局限性包括：1）材料属性通过文本语义映射获取，与真实测量存在偏差；2）所有场景和声源均为静态，不包含动态变化；3）64通道球形麦克风阵列是一个物理近似，在900 Hz以上存在空间混叠；4）未建模家具的细微结构和房间内人员的存在。

#

---

### 🥈 [Representation-Based Data Quality Audits for Audio](/audio-paper-digest-blog/posts/2026-04-29-representation-based-data-quality-audits-for-audio)

✅ **7.5/10** | 前25% | #数据集 | #自监督学习 #对比学习 | #自监督学习 #对比学习

👥 **作者与机构**

- 第一作者：Alvaro Gonzalez-Jimenez (1,3)， Fabian Gröger (1,2) （论文注明“Equal contribution”）
- 通讯作者：未说明
- 作者列表：
    - Alvaro Gonzalez-Jimenez (1 Lucerne University of Applied Sciences and Arts, 3 University Hospital of Basel)
    - Fabian Gröger (1 Lucerne University of Applied Sciences and Arts, 2 University of Basel)
    - Linda Wermelinger (1 Lucerne University of Applied Sciences and Arts, 2 University of Basel)
    - Andrin Bürli (4 CSEM)
    - Iason Kastanis (4 CSEM)
    - Simone Lionetti (1 Lucerne University of Applied Sciences and Arts)
    - Marc Pouly (1 Lucerne University of Applied Sciences and Arts)

💡 **毒舌点评**

亮点：本文成功将针对图像的SelfClean框架迁移至音频领域，并通过详实的实验证明，直接使用预训练的通用音频编码器（如BEATs）比从头训练的“自监督”编码器效果更好，为工业级数据审计提供了一个即插即用、高效统一的解决方案。短板：在核心创新上略显薄弱，更像是一个应用验证和工程适配的工作，缺乏对音频领域特有问题的深度建模或算法层面的原创突破；此外，在小规模工业数据集（CSEM）上的绝对性能有限，凸显了该方法在高度专业化、声学模式单一场景下的泛化挑战。

📌 **核心摘要**

1.  要解决的问题：音频数据集中的离题样本、近重复样本和标签错误等数据质量问题，会严重损害音频系统的性能，且现有清洗方法多针对单一问题、依赖特定模型。
2.  方法核心：将图像领域的SelfClean数据审计框架迁移至音频域。核心是采用预训练的通用音频编码器（如BEATs、M2D）提取表示，然后应用统一的指标函数（基于表示空间的局部结构、邻近性和类内/类间比率）同时检测多种质量问题，并生成排序列表供人工审查。
3.  与已有方法相比新在哪里：区别于针对单一问题（如离群点检测、指纹识别）的专用方法，本文提供了一个统一的、基于表示的数据质量审计框架。关键发现是，在音频领域，直接利用大规模预训练模型的效果远优于在小数据集上进行自监督训练。
4.  主要实验结果：
    - 合成数据 (ESC-50)：在注入不同比例噪声的测试中，基于BEATs的SelfClean在近重复（ND）和标签错误（LE）检测上性能优异（例如，α=0.2时，ND的AUROC=0.978， LE的AUROC=0.980），且通常优于或媲美专用基线（Isolation Forest, Confident Learning, Dejavu）。
    - 自然数据 (GTZAN & CSEM)：在GTZAN上，ND检测达到近乎完美（AUROC=1.000， AP=0.977）。在私有工业数据集CSEM上，SelfClean在ND（AP=0.121 vs Dejavu的0.063）和标签错误（AP=0.750 vs Confident Learning的0.476）检测上均优于对比方法。
    - 效率提升：使用Fraction of Effort (FoE) 指标，在ESC-50合成数据上，SelfClean分别将审查近重复、离题样本和标签错误所需的人工努力节省了97.1%、62.9% 和 94.6%，相当于34.2倍、2.69倍和18.3倍的审查加速。
5.  实际意义：为音频数据维护提供了高效、实用的工具，能显著减少人工审查数据的时间和成本，尤其适用于大规模、异构的工业音频数据流水线。
6.  主要局限性：性能高度依赖于预训练编码器的质量和通用性；在小数据集上从头进行自监督训练效果不佳；在声学模式高度重复的特定工业场景中，检测性能有显著下降。

---

### 🥉 [AMBISONIC-DML: A Benchmark Dataset for Dynamic Higher-Order Ambisonics Music with Motion-Aligned Stems](/audio-paper-digest-blog/posts/2026-04-29-ambisonic-dml-a-benchmark-dataset-for-dynamic)

✅ **7.5/10** | 前25% | #数据集 | #信号处理 | #空间音频 #基准测试

👥 **作者与机构**

- 第一作者：Seungryeol Paik（首尔大学 智能与信息学系）
- 通讯作者：Kyogu Lee（首尔大学 人工智能项目、首尔大学 人工智能研究所）
- 作者列表：Seungryeol Paik（首尔大学 智能与信息学系）、Taehyup Kim（Dream Scape Inc.）、Kyogu Lee（首尔大学 智能与信息学系、首尔大学 跨学科人工智能项目、首尔大学 人工智能研究所）

💡 **毒舌点评**

亮点：该工作精准切入了沉浸式音频研究中一个被忽视但关键的痛点，即缺乏动态、音乐化且高精度的基准数据集，其从艺术装置中提炼科研资源的做法颇具巧思。短板：尽管数据集质量评估详尽，但论文更像是一份详实的“产品说明书”，缺乏对基于此数据集能解决哪些具体研究挑战的深入探讨，且开源信息仅限于数据文件，代码级复现材料缺失。

📌 **核心摘要**

1. 问题：现有公共空间音频数据集主要聚焦于环境声或静态音乐场景，缺乏同时包含动态声源运动轨迹、高阶Ambisonics编码和干声轨道的音乐数据，无法满足音乐驱动的沉浸式音频处理与生成研究需求。
2. 方法核心：论文发布了AMBISONIC-DML数据集，包含120个音乐片段。其核心是通过确定性渲染管线（使用SPAT Revolution软件），将专业录制的干声（包含合成器、打击乐、人声等）与作曲家通过OSC实时设计的三维运动轨迹同步，生成5阶Ambisonics（HOA5，36通道）音频及对应的XYZ轨迹数据。
3. 创新性：这是首个公开的、提供动态音乐运动轨迹与干声同步的HOA5数据集。与TAU-NIGENS、STARSS23等环境声数据集及EigenScape等静态音乐数据集相比，它提供了独特的动态、结构化音乐内容。
4. 主要实验结果：数据集质量评估包括：客观分析显示HOA5编码正确（36通道DOF），运动轨迹对齐精度达±0.10mm。主观听力测试（25名听众）表明，相比立体声和低阶Ambisonics（HOA1/HOA3），HOA5格式在定位（MOS 4.5±0.3） 和 沉浸感（MOS 4.7±0.2） 上显著更优（p<0.01），而立体声在 清晰度（MOS 4.3±0.3） 和 节奏（MOS 4.6±0.2） 上更好。
5. 实际意义：为轨迹感知信号处理、运动驱动的音频分离与生成（如空间混合、轨迹条件音乐合成）等前沿研究提供了必需的基准数据集，推动了从艺术驱动到技术验证的闭环。
6. 主要局限性：数据集源自特定沉浸式艺术装置，其音乐风格与运动模式的多样性未被量化评估；作为数据集论文，未提出并验证具体的下游AI任务基线模型。

---

