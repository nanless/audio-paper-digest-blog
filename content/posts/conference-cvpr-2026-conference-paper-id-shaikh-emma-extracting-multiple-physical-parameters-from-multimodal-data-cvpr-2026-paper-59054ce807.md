---
title: "EMMA: Extracting Multiple physical parameters from Multimodal Data"
date: 2026-09-13
draft: false
description: "EMMA 从视频、音频与图表时间序列联合反推显式参数、隐式动力学与坐标不变量，在 75 个 Delfys 视频与 rover、无人机及仿真图表上给出可仿真验证的参数，并以约 1.4 倍于基线的单轮耗时换取多参数与隐式建模能力。"
tags: ["多模态学习", "状态空间模型", "音视频", "音频理解"]
categories: ["cvpr-2026 论文"]
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_paper_id: "conference:cvpr:2026:conference-paper-id:Shaikh_EMMA_Extracting_Multiple_physical_parameters_from_Multimodal_Data_CVPR_2026_paper"
paper_digest_source_kind: conference
paper_digest_conference_id: "cvpr-2026"
paper_digest_conference_record_url: "https://openaccess.thecvf.com/content/CVPR2026/html/Shaikh_EMMA_Extracting_Multiple_physical_parameters_from_Multimodal_Data_CVPR_2026_paper.html"
paper_digest_conference_pdf_url: "https://openaccess.thecvf.com/content/CVPR2026/papers/Shaikh_EMMA_Extracting_Multiple_physical_parameters_from_Multimodal_Data_CVPR_2026_paper.pdf"
paper_digest_api_reader_contract: "beginner-researcher-v3"
paper_digest_api_reader_article_sha256: "8e921a54bae358a807e6ad6c0eaf0ea0c61b2cbdd2ce2f15688748fd4b8e7f4a"
paper_digest_api_reader_plan_sha256: "28c45dc0948c4862ed41513fb22789390513d6dfed54967ca68b87fb4354fb67"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings-v4"
paper_digest_api_reader_source_bindings_sha256: "1e069bf35225bd9deb93d1db42539954ce62e0f8989f8f4589dc75523b86649f"
paper_digest_api_reader_source_table_count: 3
paper_digest_api_reader_source_formula_count: 0
paper_digest_api_reader_structured_artifacts_sha256: "7279031ebff360acf334d34933ae49ac91266dcf95f6bc555127574473f29104"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity-v1"
paper_digest_api_reader_author_identity_sha256: "cee3ffe643d29b327b66a1e51ab65e96f1e161fbf656d3706b8efdd07137558b"
paper_digest_api_reader_author_count: 3
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity-v1"
paper_digest_api_reader_resource_identity_sha256: "d716587ff0ca3912960d9dd251c7af13cf189b9099a3b6e01573d87b6cf87f1c"
paper_digest_api_reader_resource_count: 1
paper_digest_api_reader_decision_projection: "api-reader-decision-projection-v2"
paper_digest_scoring_contract: "api-scoring-audit-v2"
paper_digest_taxonomy_contract: "paper-taxonomy-flat-tags-compat-v1"
paper_digest_taxonomy_selection_contract: "paper-taxonomy-selection-v1"
paper_digest_taxonomy_registry_version: "paper-taxonomy-v1"
paper_digest_taxonomy_registry_sha256: "15c82a567ce5a55dc1175684ed08b64c158558639d9c8fb822c9587ec32a8778"
paper_digest_taxonomy_concepts: [{"facet":"method","id":"method.multimodal-learning","label":"多模态学习"},{"facet":"method","id":"method.state-space","label":"状态空间模型"},{"facet":"signal","id":"signal.audiovisual","label":"音视频"},{"facet":"task","id":"task.audio-understanding","label":"音频理解"}]
paper_digest_primary_task: "音频理解"
paper_digest_primary_method: "多模态学习"
paper_digest_score: 6.0
paper_digest_rank_bucket: "前50%"
paper_digest_document_type: "方法研究"
paper_digest_conference_structure: replayable-pdf-layout-v1
---

# 📄 看不见输入时如何算出物理参数：EMMA 的多模态反演

> 英文题目：*EMMA: Extracting Multiple physical parameters from Multimodal Data*

> 会议身份：`conference:cvpr:2026:conference-paper-id:Shaikh_EMMA_Extracting_Multiple_physical_parameters_from_Multimodal_Data_CVPR_2026_paper`


> ✅ 来源为官方会议 PDF；表格与 Figure 按原文证据绑定。PDF 公式以原页区域图片展示，未冒称作者原始 TeX。

> 会议来源：[官方记录](https://openaccess.thecvf.com/content/CVPR2026/html/Shaikh_EMMA_Extracting_Multiple_physical_parameters_from_Multimodal_Data_CVPR_2026_paper.html) · [官方 PDF](https://openaccess.thecvf.com/content/CVPR2026/papers/Shaikh_EMMA_Extracting_Multiple_physical_parameters_from_Multimodal_Data_CVPR_2026_paper.pdf)

标签：#多模态学习 #状态空间模型 #音视频 #音频理解

评分：**6.0/10** | 创新 1.5/2 | 技术严谨 1.0/1.5 | 实验充分 1.0/1.5 | 清晰度 0.8/1 | 影响力 0.4/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 1.0/1.5

排名：前50% | 文档类型：方法研究

## 👥 作者与机构

- Farhat Shaikh：机构信息未能从会议 PDF 纯文本可靠映射
- Ayan Banerjee：机构信息未能从会议 PDF 纯文本可靠映射
- Sandeep Gupta：机构信息未能从会议 PDF 纯文本可靠映射

## 📌 核心摘要

本文任务是从原始视频、音频与图表图像中直接恢复控制连续时间受迫动力学的全部可辨识物理参数与标定不变量，难点在于视频遮挡隐状态与轮速等外部激励不可测、摩擦等隐式动力学无直接观测，且相机位姿与坐标原点等初始条件未知。先由统一多模态特征提取将检测轨迹、音频声学特征与图表曲线插值到同一视频时间网格并拼接为状态向量，为时序建模提供对齐输入。再由液体时间常数网络接收对齐后的状态向量，以输入依赖时间常数学习隐动力学并输出隐轨迹与隐激励表征，承接非线性与不规则采样建模。最后由稠密读出头将隐轨迹回归为显式物理参数与坐标原点等不变量，并将参数注入已知常微分方程经可微仿真计算轨迹误差反传，实现联合标定与训练。与仅视频单参数方法不同，该机制将激励估计、隐动力学容量与坐标标定放在同一可微闭环内联合优化，具有处理受迫与隐动态的实际意义。在Delfys基准单摆150cm任务下，EMMA的长度估计指标为1.50，高于Delfys的长度估计指标1.30。该结论适用边界受限于已知常微分方程形式与至少一个时变模态，在严重抖动与未知方程结构下尚未验证；在NVIDIA RTX Ada 6000硬件上EMMA单轮训练时间为0.37，计算量约为基线的1.4倍但参数量仅53.2K。

## 🔗 开源与复现资源

- 第三方资源：<https://zulko.github.io/moviepy/> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 输入是什么，目标是什么，哪些信息必须保留？

这篇论文研究的输入是机会主义多模态观测：同步的原始视频帧序列、原始音频波形，以及从图像图表中重建的时间序列。视频提供可观测的位姿轨迹，音频提供被遮挡的驱动线索，图表提供仿真或传感器曲线的离散点序列。目标是从这些观测直接恢复控制系统运动的全部可辨识动力学参数，并同时处理 3 类必须保留的信息：显式物理参数、隐式动力学分量和标定不变量。显式物理参数是白话说的方程里的常量，例如摆长、阻尼、排水常数、摩擦系数。

隐式动力学是白话说的测不到但影响运动的那部分力，例如摩擦拖拽、地形阻力；标定不变量是白话说的不随时间变的参考系信息，例如坐标原点、相机到世界的对齐、初始状态、音频频率到转速的仿射系数。输出不是重建的视频帧，也不是分割掩膜，而是一组可直接代入已知常微分方程前向仿真的参数估计。论文强调不做帧重建和分割掩膜，不依赖可微渲染和专用传感器，这是理解其数字孪生定位的关键。

研究生复述时要先说清这条主线：拿一个样本走完输入到表示再到参数再到仿真验证，再展开各管线的具体计算。

### 只用视频的方法卡在哪里，多模态为何必要？

相关工作按同输入、同目标、同监督来对照才公平。论文把视频恢复物理参数的路线分成几类：以 Delfys 为代表的无监督视频恢复已知连续时间常微分方程参数路线，不做解码器帧预测，对真实视频的光照与尺度变化更稳定，是本文的主要定量基线；以 NIRPI 和 PAIG 为代表的更简单的无激励、小未知数路线；依赖可微渲染与已知几何模板的 gradSim、rSim 与形状模板路线；做状态或动作估计而非参数辨识的路线。

以及仿真训练或需要实测控制输入的路线。通用方程发现框架如 PySINDy 与物理信息神经网络需要先有视频到状态或视频到场的前端，因此不是视频原生方法。论文指出四点局限：忽略外部激励输入、只恢复单个或少数参数、不能处理隐式动力学分量、假设已知初始条件或坐标原点等不变量。举例来说，漫游车视频能看到车轮位姿，但看不到轮功率指令，只用视频做运动学反演是不适定的；此时车轮旋转声与电机转速强相关，声音补上了被遮挡的输入通道。

这就是多模态的必要性：不是把声音丢给模型就结束，而是用声音解决视频的结构性缺失，用隐状态解决任何模态都测不到的潜在力，用联合标定解决真实相机位姿未知的问题。

### 反演问题如何形式化，什么是可测与不可测？

论文把动力系统写成参数化常微分方程：状态随时间的变化率等于由状态、外部输入和参数决定的域相关物理函数。其中状态是随时间演化的向量，外部输入是经常在视觉模态中缺失的驱动，不变量是与时间无关但决定观测到世界坐标映射的参考量。测量矩阵是白话说的哪些状态能被测到的对角指示：对角元为 1 表示该状态可测，为 0 表示不可测。

参数估计的验收方式是给定估计参数与初值，用方程仿真出轨迹与可观测量的仿真值，再最小化观测序列与仿真序列在时间上的差异，并加上保证物理有效性的正则项，例如正性与上下界。需要区分原始目标与实现：原始目标是轨迹误差加参数约束，近似体现在用神经网络隐状态与稠密读出代替直接优化，以及用可微仿真提供梯度。论文明确这是对参数无监督的：训练时不使用参数真值，学习完全由基于物理的损失驱动。

研究生容易误解的是可测与隐式的划分：可测指某个模态能直接给出时间序列，隐式指方程中影响运动但任何模态都不直接给出的项，后者只能通过可测状态间的非线性依赖间接辨识。

### EMMA 的三段流水线如何从观测走到可仿真参数？

EMMA 的总体安排分为 3 段。第一段是统一多模态特征提取，把视频、音频、图像处理成时间对齐的序列；第二段是液体时间常数网络建模连续时间隐动力学，输出隐轨迹；第 3 段是多参数估计，经序列到序列预测与时间平均得到参数均值，再用物理仿真验证为数字孪生。沿一个漫游车样本走一遍：输入是地面上小车的视频加环境声，视频管线输出每帧物理坐标，音频管线输出对齐到视频时间戳的声学特征并映射为角速度，拼接成多模态状态向量。

LTC 网络学习隐动力学，稠密头读出物理参数与标定量；把参数代入已知方程积分，得到仿真轨迹并与观测比较。下面的总览图把这条主路径画了出来，左侧是输入，中间是特征与动力学，右侧是可仿真输出，初学者应先看懂箭头主路径再看分支细节。

以下总览图展示从多模态观测到物理信息数字孪生再到前向仿真的完整闭环，是理解 3 段分工的最短路径。

> **看图路径：** 1. 先从左侧多模态输入框沿箭头看到中间视频四格与音频波形分支；2. 再看中间 DATA 圆柱如何汇入右侧物理方程与参数估计虚线框；3. 最后看最右侧仿真轨迹曲线的起点与终点标记是否与输入小车运动一致

[![原论文 Figure 1：Given unified multi-modal observations (video, audio, image), EMMA extracts identifiable physical…](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/492ed64bc7dd/figure-1.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/492ed64bc7dd/figure-1.png)

*论文图 1。原论文 Figure 1：“Given unified multi-modal observations (video, audio, image), EMMA extracts identifiable physical parameters through a physics-informed digital twin.”。*

该图报告的内容支持上述走读：左侧标注多模态输入为视频加音频与时间序列，中间上方四格视频管线输出位置序列，下方音频管线从波形到角速度的转换清晰可见，中间 DATA 圆柱表示时间对齐后的统一表示，右侧虚线框上方为物理方程、下方为多变量到多参数经 LTC 的估计，最右侧为用估计参数仿真的轨迹曲线。像素可见的要点是视频格中的绿色检测框随小车移动、音频波形为红色脉冲式曲线、右侧轨迹为蓝色平滑曲线带起点终点标记。解读时不要把示意箭头当成梯度路径的全部，梯度细节要回到训练节的损失与优化描述核对。

### 视频、音频、图像三条管线各自算什么，如何对齐？

视频管线分 5 步：检测、过滤、平滑、变换、去噪。检测用 YOLOv11 并设置信度阈值 0.85，论文说明更高阈值会导致显著丢帧；过滤计算中心、去除边缘检测并强制时间稳定性；平滑用状态为位置加速度的卡尔曼滤波减少抖动；变换按系统标定把像素转到物理量，摆用像素到角度的反正切式，运动用标定的像素到米制变换。

去噪用窗口为 10 的加权移动平均。输出是每帧物理坐标。论文还评估了无监督的 Farneback 光流替代方案，精度相当，用以说明核心贡献在 LTC 物理层而非特定检测器。音频管线分信号处理与先验两部分：原始音频按 44.1 千赫兹记录并重采样到 22.05 千赫兹，用短时傅里叶变换提取均方根能量、谱质心与主谱峰频率，再经自动标定模块对齐到视频时间戳得到声学特征向量。

先验是制造商数据表给出的标称音调频率与转速关系，在非飞行区间主音调近似随转速线性变化，线性系数作为不变量由网络学习。图像模态处理传感器与热成像等图像，用轻量预处理与像素掩膜把图表曲线颜色分离并离散化为时间序列点。统一对齐是对所有模态特征做时间插值到视频帧时间网格再拼接，缺失模态用零填充或学习嵌入处理；多场景系统还把时间轨迹离散为每模态 100 个空间样本以保持跨模态时间一致性。

下面的架构图给出了各管线的具体算子与维度标注，适合对照复现。

下图是复现时最值得对照的架构细节图，包含视频 5 步、音频 2 阶段与图像预处理的算子、参数与维度，读图时应把标注当作待核对的配置清单。

> **看图路径：** 1. 先沿左上 START 视频分支逐框核对检测、滤波、卡尔曼与坐标变换的输出维度标注；2. 再看左下音频两阶段如何把重采样与谱特征对齐到视频帧时间；3. 最后追踪右上 LTC 与参数头到右下 ODE 求解器的反向传播箭头闭环

[![原论文 Figure 2：EMMA Architecture. Multi-modal inputs (video, audio and image) are processed through specialized…](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/492ed64bc7dd/figure-2.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/492ed64bc7dd/figure-2.png)

*论文图 2。原论文 Figure 2：“EMMA Architecture. Multi-modal inputs (video, audio and image) are processed through specialized pipelines into unified temporal representations.”。*

该图显示的内容与正文相互印证：左上视频分支明确写出边界框、中心、平滑状态与坐标变换的维度，左下音频分支写出重采样率、傅里叶点数与跳长以及插值到视频帧时间的第二阶段，中间 DATA 罐表示统一后的文本文件汇入，右上 LTC 与参数头写出拼接向量、时间池化与稠密估计，右下物理常微分方程求解器写出从初值到估计轨迹的积分与均方误差损失回路，底部还有 3 维无人机轨迹仿真。像素可见的音频四小图分别为能量、质心、峰值频率与电机指令曲线，视频侧为无人机俯视帧。需要提醒的是图上个别英文缩写的具体实现要以正文为准，不要从框图位置推定计算顺序。

**隐式动力学 × 显式物理参数：** 显式物理参数指直接出现在运动方程中的可命名常量，如摆长、阻尼、排水系数，负责决定轨迹形状；隐式动力学指没有传感器直接测量、但通过非线性耦合影响可测状态的潜在分量，如摩擦阻力、地形阻力。EMMA 让显式参数由可微仿真直接约束，让隐式分量由 LTC 隐状态的超完备微分方程组承载，再由稠密头同时读出两类估计，组合意义是只测部分状态时仍能闭合方程并前向仿真。

**外部激励输入 × 音频速度先验：** 外部激励输入指视频看不到的驱动量，如轮角速度、电机转速，缺了它运动学反演不适定；音频速度先验指非飞行旋翼与车轮的峰值音调近似随转速线性变化的关系。EMMA 用音频管线提取频谱峰值，再把线性系数作为待标定的不变量与动力学一起学习，搭配理由是声音编码了被遮挡的驱动，组合后可用被动麦克风补齐视频缺失的输入通道。

**不变量标定 × 坐标变换：** 坐标变换指把像素观测映射到世界坐标的函数，如摆的像素转角度、运动的像素转米制；不变量标定指联合估计不随时间变化的参考量，如坐标原点、悬挂点、初始状态与音频仿射系数。EMMA 在稠密头中为标定量增设单元，用校准后的轨迹损失驱动它们，组合意义是相机位姿与原点未知时仍能把参数表达在正确的物理坐标系中。

### LTC 隐状态与稠密头如何分工读出参数与标定量？

参数估计部件用两层全连接结构：LTC 网络解决隐式动力学与激励输入问题，稠密层把实测与隐动力学非线性映射为模型参数估计并同时标定不变量。LTC 用 64 个隐单元，每个单元的微分包含输入依赖时间常数与前向传播项，前者帮助建模激励输入，后者表达物理一致的动力学。论文的直觉是 LTC 前向传播天然带有输入依赖时间常数，适合处理受迫输入；隐输出数量多于系统所需状态数，因而能承载多个隐式动力学分量。

稠密头用 S 形激活做非线性读出，利用前馈网络的通用逼近性质，可理解为对隐轨迹的数据驱动模态分解；标定则靠增加比动力学参数更多的稠密单元并用线性整流激活，使其随隐输入与损失梯度线性变化，用于建模标定参数。去归一化把稠密输出映射到物理尺度，公式中用标称值乘以缩放系数实现。论文报告了对照：受迫输入下 LTC 比神经常微分方程平均参数误差低约 25%，比连续时间门控循环单元低约 5%，用以支持输入依赖时间常数的重要性。

复述时要强调分工：LTC 负责连续时间隐动力学表达，稠密头负责读出与标定，可微仿真负责物理一致性筛选。

### 没有参数真值时，损失与优化如何驱动学习？

EMMA 对参数是无监督的：训练不用参数真值，完全由物理损失驱动。总损失由标定轨迹损失与参数约束加权组成。标定轨迹损失对可测变量求仿真与观测的差异，若某状态需要标定则乘以由稠密层输出的校准系数，否则不校准；参数约束用线性整流惩罚违反正性、下界与上界的情况。优化用 AdamW 加余弦退火，LTC 输入尺寸为 100、隐单元 64、序列到序列输出、常微分展开 6 步，视频处理用 YOLOv11 与 OpenCV 跟踪，音频用 librosa 与 MoviePy 提取，所有输入用训练统计做标准化，推理时按去归一化恢复物理尺度。

需要明确的是论文未报告某些梯度细节的完整路径，例如稠密头内部每一步的停止梯度位置，复述时应指出这是缺项而不猜测。下图把稠密层搜索一致隐动力学子集的直觉画成闭环，有助于理解为何轨迹误差能同时训练参数与标定量。

下图把参数估计的搜索直觉压缩为从测量到隐动力学再到参数与标定的闭环，适合在理解损失前先建立因果方向。

> **看图路径：** 1. 先看左侧实测状态与激励输入如何同时进入 LTC 模块；2. 再看中间超定线性方程组方框与稠密层的分叉箭头；3. 最后看底部回路箭头如何把 ODE 损失指回稠密层的一致子集搜索

[![原论文 Figure 3：Intuition for using LTC-NN for parameter estimation.](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/492ed64bc7dd/figure-3.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/492ed64bc7dd/figure-3.png)

*论文图 3。原论文 Figure 3：“Intuition for using LTC-NN for parameter estimation.”。*

该图报告的流程是：左侧实测状态与激励输入进入 LTC 网络，中间经可微受迫隐动力学集合形成超定线性方程组视角的洞见，再经稠密层分出参数估计与标定估计两支进入常微分方程求解器得到估计轨迹，底部箭头把基于方程损失的一致子集搜索指回稠密层，顶部还有初值与输入直达求解器的旁路。像素可见的橙色大框强调模型系数表达，右侧两色小框区分参数与标定，绿色输出框为估计轨迹。结合正文可知，这张图是直觉示意而非代码结构图，不能把方框数量当作网络层数。

**LTC 网络 × 可微物理仿真器：** LTC 网络指带输入依赖时间常数的连续时间循环网络，负责把多模态序列编码为隐动力学并读出参数；可微物理仿真器指把预测参数代入已知常微分方程积分得到仿真轨迹的模块，负责提供物理一致性梯度。二者搭配的原因是前者表达能力强但不受物理约束，后者强制轨迹服从方程，组合后形成端到端梯度回路，使无参数真值的监督也能通过轨迹误差训练。

### 在什么数据、划分与基线上测，指标方向是什么？

评估分 3 个目标。实验 A 是视频多参数研究，用 Delfys 数据集的 5 个标准动力学基准共 75 个视频：摆估计长度与阻尼分 3 种长度配置各 5 个视频，Torricelli 排水估计排水常数分 3 种容器，滑块估计加速度与摩擦分 3 种坡度，发光二极管衰减估计衰减率分 3 种时间机制，自由落体估计重力加速度分 3 种物体尺寸。基线包括视频参数推理的 PAIG、NIRPI、Delfys，以及多参数的 PySINDy，指标是提取参数与真值的直接比较，误差越小越好，每个配置报告 5 个视频的均值与标准差。

实验 B 是隐式与受迫动力学下的多模态音视频参数提取，用实验室差速漫游车与宾夕法尼亚大学实验室视频页的 6 自由度四旋翼：漫游车 9 个参数中 5 个有数据表真值，四旋翼 12 个参数中 7 个已知，漫游车质心高度与轮半径、四旋翼推力系数等被列为隐式相关参数，比较方式是估计值对照真值。

实验 C 是从仿真图表提取多参数，用 F8 巡洋舰、Lotka-Volterra、Lorenz 振子、艾滋病治疗及胰岛素自动给药等案例的仿真器生成图像，分隐式条件与显式条件：只用一个状态变量图表为隐式，用全部状态变量图表为显式，基线 PySINDy 共用 EMMA 图像管线以保证公平，指标同时报告参数均方根误差与重建均方根误差，两者越小越好。输入预处理按原文交代：视频用 YOLOv11 置信度 0.85 与图像尺寸 640 像素加卡尔曼状态向量，音频用 MoviePy 在 44100 赫兹采样与 librosa 谱特征。

报告与划分按每个基准配置算均值与标准差，固定随机种子并在附表中做多种子验证。资源状态方面，第三方 MoviePy 文档链接本次可达，但这只是音频工具文档可达，不代表论文代码仓库可运行。

### 主结果在五个基准上是否更准，代价是什么？

实验 A 的单参数与多参数结果显示 EMMA 在多数设置下 competitive 或更优，且消除了掩膜与像素重建开销。摆上 EMMA 恢复的长度接近真值，视频基线在极端长度偏差更大，PySINDy 对噪声与遮挡敏感方差高；Torricelli 上 EMMA 稳定估计排水常数而 PySINDy 难以表达分数幂出现系统误差；滑块上 EMMA 在低中高坡度保持稳定；发光二极管衰减上 EMMA 跨快中慢机制方差低。

自由落体上 EMMA 的连续时间形式自然处理不规则采样，而 PySINDy 对离散微分与帧率敏感。论文还报告 EMMA 能学习摆悬挂点与起点等不变量，且在 200% 扩展初始化区间 5/6 配置仍收敛。下表整理了论文原表中的关键数字，比较问题是同视频输入下谁的参数更接近真值，公平条件是同基准同配置的 5 视频均值，指标方向是绝对偏差越小越好。

为回答同视频条件下参数谁更接近真值，下表在相同基准与配置下对比 EMMA 估计、真值与视频基线，数值越接近真值越好。

| 系统与配置 | 估计对象 | EMMA 估计 | 真值 | 基线 Delfys 估计 |
| --- | --- | --- | --- | --- |
| 摆 45 厘米 | 长度 | 0.50 | 0.45 | 0.51 |
| 摆 90 厘米 | 长度 | 0.86 | 0.90 | 1.07 |
| 摆 150 厘米 | 长度 | 1.50 | 1.50 | 1.30 |
| Torricelli 小中大 | 排水常数 | 0.0093 0.0132 0.0163 | 0.0095 0.0128 0.0162 | 0.0094 0.0132 0.0167 |
| 滑块低中高 | 加速度 | 1.41 2.27 3.14 | 1.441 2.300 3.141 | 1.29 2.70 3.44 |

表后需要同时看到收益与反例。主要收益是 EMMA 在摆长极端值与排水分数幂等难处更接近真值且方差低，例如摆 150 厘米估计 1.50 与真值一致，排水三档误差在千分位内。代价与反例是自由落体小尺寸档 EMMA 估计 5.2 而真值 9.8，明显偏离，说明总体趋势不等于每档都成立；且原表显示 PAIG 与 NIRPI 在部分摆长与排水档也有接近真值的估计，不能说所有基线全面失效。未胜出项必须保留：自由落体小物体与个别滑块中坡度的基线误差更小，复述时不能只挑胜项。

### 受迫与隐式场景及图表仿真能否同时成立？

实验 B 报告漫游车可测参数平均误差 8.8% 加减 1.7%，无人机可测参数平均误差 15.9% 加减 7.4%，且隐式相关与实测相关参数表现稳定。漫游车质心高度与轮半径、无人机推力系数、扭矩系数、电机增益与时间常数被列为隐式动力学参数，论文称即使在控制器激励下仍能提取两类参数，并能学习闲置轮功率与坐标原点等不变量。音频噪声鲁棒性在附表中称信噪比低至 5 分贝时漫游车参数变化小于 1.1%。

实验 C 在图表仿真上同时报告参数误差与重建误差，显示 EMMA 优于 PySINDy，且从显式变为隐式时两者都下降但 EMMA 退化更小。重提结果时要增加适用条件：图表实验的公平性来自共用图像管线，真实漫游车与无人机的真值只覆盖部分参数，未知参数无法验证；隐式条件的定义是只用一个状态变量图表，因此退化是可预期的信息缺失而非方法失效。

可能与待验证的表述要分开：已报告的是误差数字，支持的是多模态补齐遮挡输入的解释，待验证的是 turbulence 下线性音频先验是否成立，论文在局限中已提示该先验可能退化。

### 哪些对照支撑关键选择，失败条件在哪里？

论文用 3 类对照支撑设计。特征器对照显示无监督光流替代 YOLOv11 精度相当，支持核心贡献在 LTC 物理层；动力学对照显示受迫下 LTC 优于神经常微分方程与连续门控循环单元，支持输入依赖时间常数的必要性；初始化对照显示扩大到 200% 范围仍多配置收敛，支持对不良初始化的鲁棒性。失败与敏感条件同样明确：严重相机抖动敏感、至少需要一个随时间变化的模态、线性频率速度先验在湍流下可能退化、LTC 求解常微分方程带来额外运行时。

图表隐式化是受控的失败条件：只给单变量图表时参数与重建误差都上升，说明信息缺失的代价可度量。复述时不要补写拿掉某模块必然怎样，原文未给完整消融数值时应指出缺项。下表把训练配置与执行成本放在一起，比较问题是复现需要什么预算，公平条件是同 GPU 下每轮平均时间与参数量，指标方向是时间越小、参数量越小越有利于边缘部署。

为回答复现 EMMA 需要多少训练预算，下表对比超参数规模与实测单轮耗时，时间越短、参数量越小越好，但需结合多参数与隐式能力一起权衡。

| 配置组 | 取值 1 | 取值 2 | 取值 3 | 取值 4 | 备注 |
| --- | --- | --- | --- | --- | --- |
| LTC 网络 | 64 | 6 | 10−8 | 0.9 | 隐单元数 展开步数 容差 动量项 |
| 优化器 | 5 × 10−3 | 10−4 | 10−8 | 0.999 | 学习率 权重衰减 精度 系数 |
| 调度窗口 | 16 | 1 | 32 | 40 epochs | 窗口 步长 批量 耐心轮数 |
| 调度余弦 | 10 | 2 | 10−6 | 0.3 | 周期 倍乘 最小学习率 丢弃率 |

表后解释主要收益与具体代价。收益是配置完全公开且模型紧凑，论文称参数量仅 53.2K 而基线为 5.7M，相差约 107 倍，适合边缘部署研究；代价是 LTC 积分使单轮耗时从 0.19 秒增至 0.37 秒，约为 1.4 倍，标准差分别为 0.03 秒与 0.01 秒。未评测边界是总体趋势不等于每步都快，且训练资源、推理延迟与输出帧率是不同量，论文只报告训练每轮时间，不能直接承诺推理延迟同样改善。

为量化紧凑模型的额外耗时，下表在同 GPU 下对比两者的每轮时间与参数量，时间越小越好，参数量越小越有利于部署。

| 模型 | 平均每轮时间 | 标准差 | 参数量 | 相对耗时 | 测试平台 |
| --- | --- | --- | --- | --- | --- |
| Delfys 基线 | 0.19 | 0.03 | 5.7M | 1.0 倍 | NVIDIA RTX Ada 6000 GPU |
| EMMA | 0.37 | 0.01 | 53.2K | 1.4 倍 | NVIDIA RTX Ada 6000 GPU |

该表显示 EMMA 以更小的模型换取更高的单轮计算量，论文解释为常微分求解是固有 heavier 操作，但换来多参数、受迫与隐式估计的新能力。反例是若只看单轮时间，EMMA 并不占优；若只看参数量，EMMA 明显占优，评价时必须同时保留两者，不能用参数量小掩盖耗时增加。

### 什么情况下不应直接套用 EMMA？

论文明确列出四点局限。第一，依赖至少一个随时间变化的模态，若视频静止且音频无变化则没有动力学信息可学。第二，线性频率速度音频先验在湍流下可能退化，非飞行区间的线性假设不再成立时，声音到转速的映射需要重新标定或更换模型。第三，对严重相机抖动敏感，抖动会污染检测中心与坐标变换，使轨迹误差不再反映物理参数误差。第四，LTC 的常微分积分带来更高运行时，训练每轮更慢，边缘部署需权衡。

相关性不是因果的提醒也适用：音频峰值与转速相关不等于声音直接等于控制指令，中间的仿射系数仍需联合估计；仿真轨迹拟合好不等于每个参数都可辨识，不可辨识参数的误差不能从重建误差推出。这些边界决定了何时值得尝试：有被遮挡驱动但有声音、部分状态可测但含隐式力、相机位姿未知但运动连续的场景最匹配；纯静态图像、无时间序列、无已知方程结构的任务不在本文范围内。

### 复现先做什么，需要哪些配置与数据？

复现应先沿单样本走通再扩展到基准。第一步准备数据：Delfys 的 75 个视频按五系统三分档各 5 视频组织，漫游车实验室视频与四旋翼公开视频按原文说明获取，图表案例用各仿真器生成的图像并记录生成机制，划分与采样按每配置 5 视频算均值与标准差，固定随机种子。第二步跑通管线：视频用 YOLOv11 置信度 0.85、图像尺寸 640 像素、10 像素边缘剔除、状态向量位置加速度的卡尔曼滤波、窗口 10 的加权移动平均与域特定坐标变换。

音频按 44.1 千赫兹记录、重采样 22.05 千赫兹、傅里叶点数 2048 跳长 512 提取能量质心峰值并插值到视频帧时间；图像用 Pillow 加载裁剪与对比度归一化再转张量，图表用像素掩膜分离曲线颜色离散化为序列。第三步配置模型与训练：LTC 输入 100、隐单元 64、展开 6 步，AdamW 学习率 5 乘 10 的负 3 次方、权重衰减 10 的负 4 次方、余弦周期 10 倍乘 2 最小学习率 10 的负 6 次方，窗口 16 步长 1 批量 32 耐心 40 轮丢弃率 0.3，损失为标定轨迹误差加参数正性与界约束。第四步验证：先看仿真轨迹是否闭合，再看参数是否落在物理界内，最后对照真值算误差。

代码与数据可用性方面，论文给出仓库链接但本次证据未验证其可达性，只能说原文声明可用，不能写当前已公开可运行；第三方 MoviePy 文档本次可达，可用于音频读取环节。缺项是附表细节与部分图表生成脚本需查补充材料，不宜自行编造划分口径。

### 如何一句话记住 EMMA，何时值得尝试？

记住 EMMA 的关键是它把反演拆成三件事同时做：用声音补视频看不到的驱动，用超完备隐动力学补任何模态都测不到的力，用联合标定补未知的坐标系与初值，再用可微仿真把三者锁在同一方程里。当你的系统有已知方程结构、有连续视频或声音、有部分真值可核对时，值得尝试按上述复现顺序先做单样本闭环；当任务没有时间变化模态、没有方程结构、或噪声已淹没运动信号时，不应期待本文方法直接给出可信参数。

**数字孪生 × 前向仿真验证：** 数字孪生指用估计参数实例化的可执行动力学模型，可用于测试与故障诊断；前向仿真验证指用估计参数与估计初值积分出轨迹，再与观测轨迹比较的做法。EMMA 把反演结果必须能重新仿真作为验收标准，组合意义是参数不是只拟合曲线，而是可直接用于仿真、验证与下游控制的物理模型。

回到研究生可核对的动作清单：先复述输入输出与 3 类保留信息，再画出 3 段流水线并指出每段的输入输出维度，接着说清损失中哪项管轨迹、哪项管物理有效性，最后用原表数字说明在哪档胜、在哪档败。若能不看笔记讲出音频先验的线性形式、视频 5 步的阈值与窗口、LTC 与稠密头的分工以及 1.4 倍耗时的代价，就达到了能复述方法的程度。

## 📐 原文公式与排版

以下展示论文原页中的数学表达区域，保留原始上下标、分式和符号排版。区域序号仅用于本文导航，不是论文公式编号。

[![原文数学表达区域 1，PDF 第 3 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/68e01d5206d1/figure-1.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/68e01d5206d1/figure-1.png)

区域 1 · [查看论文原页](https://openaccess.thecvf.com/content/CVPR2026/papers/Shaikh_EMMA_Extracting_Multiple_physical_parameters_from_Multimodal_Data_CVPR_2026_paper.pdf#page=3)

[![原文数学表达区域 2，PDF 第 3 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/68e01d5206d1/figure-2.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/68e01d5206d1/figure-2.png)

区域 2 · [查看论文原页](https://openaccess.thecvf.com/content/CVPR2026/papers/Shaikh_EMMA_Extracting_Multiple_physical_parameters_from_Multimodal_Data_CVPR_2026_paper.pdf#page=3)

[![原文数学表达区域 3，PDF 第 5 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/68e01d5206d1/figure-3.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/68e01d5206d1/figure-3.png)

区域 3 · [查看论文原页](https://openaccess.thecvf.com/content/CVPR2026/papers/Shaikh_EMMA_Extracting_Multiple_physical_parameters_from_Multimodal_Data_CVPR_2026_paper.pdf#page=5)

[![原文数学表达区域 4，PDF 第 5 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/68e01d5206d1/figure-4.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/68e01d5206d1/figure-4.png)

区域 4 · [查看论文原页](https://openaccess.thecvf.com/content/CVPR2026/papers/Shaikh_EMMA_Extracting_Multiple_physical_parameters_from_Multimodal_Data_CVPR_2026_paper.pdf#page=5)

[![原文数学表达区域 5，PDF 第 5 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/68e01d5206d1/figure-5.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/68e01d5206d1/figure-5.png)

区域 5 · [查看论文原页](https://openaccess.thecvf.com/content/CVPR2026/papers/Shaikh_EMMA_Extracting_Multiple_physical_parameters_from_Multimodal_Data_CVPR_2026_paper.pdf#page=5)

[![原文数学表达区域 6，PDF 第 5 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/68e01d5206d1/figure-6.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/68e01d5206d1/figure-6.png)

区域 6 · [查看论文原页](https://openaccess.thecvf.com/content/CVPR2026/papers/Shaikh_EMMA_Extracting_Multiple_physical_parameters_from_Multimodal_Data_CVPR_2026_paper.pdf#page=5)

[![原文数学表达区域 7，PDF 第 5 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/68e01d5206d1/figure-7.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/68e01d5206d1/figure-7.png)

区域 7 · [查看论文原页](https://openaccess.thecvf.com/content/CVPR2026/papers/Shaikh_EMMA_Extracting_Multiple_physical_parameters_from_Multimodal_Data_CVPR_2026_paper.pdf#page=5)

另有 18 个候选区域因边界不明确或图片数量、尺寸限制未展开；请[查看完整论文](https://openaccess.thecvf.com/content/CVPR2026/papers/Shaikh_EMMA_Extracting_Multiple_physical_parameters_from_Multimodal_Data_CVPR_2026_paper.pdf)中的原始排版。

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。
- 评分规则：type-aware-v1
- 评分模型：muse-spark-1.3-contributor
- 评分请求协议：openai_responses

---

[← 返回 cvpr-2026 论文汇总](/posts/conference-cvpr-2026/)
