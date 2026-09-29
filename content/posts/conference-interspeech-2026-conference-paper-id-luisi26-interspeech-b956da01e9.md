---
title: "Smooth Formant Tracking with Differentiable Linear Prediction"
date: 2026-09-27
draft: false
description: "针对经典线性预测按帧独立且假设高斯残差导致轨迹抖动的问题，论文提出直接优化对数面积比的 LP-DDSP 与端到端 SMELP，在 VTR 库上把平均误差降到 166-246 Hz，代价是 LP-DDSP 需每句 1500 轮逐句优化。"
tags: ["信号处理", "可解释性", "语音", "语音属性识别"]
categories: ["interspeech-2026 论文"]
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_paper_id: "conference:interspeech:2026:conference-paper-id:luisi26_interspeech"
paper_digest_source_kind: conference
paper_digest_conference_id: "interspeech-2026"
paper_digest_conference_record_url: "https://www.isca-archive.org/interspeech_2026/luisi26_interspeech.html"
paper_digest_conference_pdf_url: "https://www.isca-archive.org/interspeech_2026/luisi26_interspeech.pdf"
paper_digest_api_reader_contract: "beginner-researcher-v3"
paper_digest_api_reader_article_sha256: "dcf0b897cc5edb7f1ef4d737247e3d89254bf1da2b83c304bd160ad7feea37bb"
paper_digest_api_reader_plan_sha256: "8707fa679c3672f5b6f8c7bde71d1f93395f368471a1f12d795d94a5fc0007e0"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings-v4"
paper_digest_api_reader_source_bindings_sha256: "7f71c45407d0161d028da426d8b54373529af96b536aef3aeea6c96a62adc0fa"
paper_digest_api_reader_source_table_count: 2
paper_digest_api_reader_source_formula_count: 0
paper_digest_api_reader_structured_artifacts_sha256: "62bb67592dfb28e81f4433d827fbd9eba836bf0006a2b587ea4f7afb4c415c99"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity-v1"
paper_digest_api_reader_author_identity_sha256: "78932a640f75d54bc027eeb37406654526317e70fe786011c2dee01eaa8176a8"
paper_digest_api_reader_author_count: 2
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity-v1"
paper_digest_api_reader_resource_identity_sha256: "77e9f096882612569e8a007aa16cbec0a49608f8f01b70d5ce42e6b58cfc24cc"
paper_digest_api_reader_resource_count: 1
paper_digest_api_reader_decision_projection: "api-reader-decision-projection-v2"
paper_digest_scoring_contract: "api-scoring-audit-v2"
paper_digest_taxonomy_contract: "paper-taxonomy-flat-tags-compat-v1"
paper_digest_taxonomy_selection_contract: "paper-taxonomy-selection-v1"
paper_digest_taxonomy_registry_version: "paper-taxonomy-v1"
paper_digest_taxonomy_registry_sha256: "15c82a567ce5a55dc1175684ed08b64c158558639d9c8fb822c9587ec32a8778"
paper_digest_taxonomy_concepts: [{"facet":"method","id":"method.signal-processing","label":"信号处理"},{"facet":"research_focus","id":"research_focus.interpretability","label":"可解释性"},{"facet":"signal","id":"signal.speech","label":"语音"},{"facet":"task","id":"task.speech-attributes","label":"语音属性识别"}]
paper_digest_primary_task: "语音属性识别"
paper_digest_primary_method: "信号处理"
paper_digest_score: 6.8
paper_digest_rank_bucket: "前50%"
paper_digest_document_type: "方法研究"
paper_digest_conference_structure: pdf-visual-quote-evidence-v1
---

# 📄 把线性预测变成可微优化：用平滑对数面积比跟踪共振峰

> 英文题目：*Smooth Formant Tracking with Differentiable Linear Prediction*

> 会议身份：`conference:interspeech:2026:conference-paper-id:luisi26_interspeech`



> 来源为官方会议 PDF；图片依据原页像素，表格数字依据原文引用。PDF 文字层不视为原始 TeX，未可靠恢复的结构不作推断。


> 会议来源：[官方记录](https://www.isca-archive.org/interspeech_2026/luisi26_interspeech.html) · [官方 PDF](https://www.isca-archive.org/interspeech_2026/luisi26_interspeech.pdf)

标签：#信号处理 #可解释性 #语音 #语音属性识别

评分：**6.8/10** | 创新 1.2/2 | 技术严谨 1.2/1.5 | 实验充分 1.0/1.5 | 清晰度 0.7/1 | 影响力 0.8/1.5 | 开源 1.0/1.5 | 可复现 0.3/0.5 | 工程/实践 0.6/1.5

排名：前50% | 文档类型：方法研究

## 👥 作者与机构

- Bryn Luisi：机构信息未能从会议 PDF 纯文本可靠映射
- Lauri Juvela：机构信息未能从会议 PDF 纯文本可靠映射

## 📌 核心摘要

共振峰跟踪输入为语音波形，输出为4条随时间变化的共振频率轨迹，难点在于浊音谐波偏置、帧独立假设与高斯残差假设导致轨迹抖动且跨帧不连续。本文先将对数面积比（Log-Area Ratio，LAR）经双曲正切映射为反射系数（Reflection Coefficient，RC）并经前向Levinson递推得到全极点系数，再用逆滤波求时域残差并以L2加L1加帧间平滑项联合优化，最后经伴随矩阵求特征值与带宽筛选得到共振峰，神经版本则由卷积网络预测LAR并由长短期记忆网络（Long Short-Term Memory，LSTM）解码共振峰。与自相关法由Yule-Walker方程耦合求解反射系数不同，该方法把LAR当作自由变量直接做梯度优化，因而可容忍非高斯拉普拉斯激励并强制平滑。在VTR Formants Database测试集下，SMELP的均方根误差指标为166 ± 5 Hz，低于KARMA的均方根误差指标254 ± 14 Hz。训练集消融表明同时使用L1、L2与帧间正则的损失误差最低，证实拉普拉斯假设与平滑约束共同改善轨迹连续性。结论限于16 kHz英文朗读语音的有共振峰音段，未验证噪声、儿童语音或跨语种外推，原文未报告延迟吞吐与部署成本。该结论的适用边界受限于英文朗读语料条件，噪声与跨语种外推尚未验证，原文未披露训练、推理或部署成本。

## 🔗 开源与复现资源

- 代码相关资源：<https://github.com/brynluisi/allpole-formants.git> → <https://github.com/brynluisi/allpole-formants> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 输入是什么？为什么共振峰跟踪容易抖？

本文输入是 16 kHz 采样的连续英文朗读语音，目标是在整句范围内逐帧估计前 4 个共振峰频率。共振峰用白话说就是声道共振在频谱上形成的能量集中位置，英文名 formant；它随口型变化而缓慢移动，是区分元音和浊辅音的关键线索。研究生可复述的判断标准是：预测轨迹应与手修真值在有声段逐 10 毫秒对齐比较，只在元音、鼻音、流音、滑音、浊擦音和浊塞音等标注为期望出现共振峰的音段计分，清音段不计分。

经典做法是线性预测，英文名 linear prediction，简称 LP。它假设短时语音由全极点声道滤波器加高斯激励产生，每帧独立解 Yule-Walker 方程得到预测系数，再对预测多项式求根，把共轭复根换算成频率与带宽。原文明确指出这种做法有 3 个学习依赖：局部平稳假设、帧独立处理、高斯残差假设。浊音残差实际是周期脉冲串，更接近拉普拉斯分布，且声道运动连续，按帧独立最小二乘容易受谐波偏置影响，表现为轨迹出现尖峰跳变。Praat 的 Burg 法加 Viterbi 搜索与 KARMA 的卡尔曼平滑都是在解码侧补救，但不改变按帧估计本身。

本解读的输入是论文正文与 3 张官方原图像素，目标是讲清 LP-DDSP 与 SMELP 的计算与实验条件，输出是 1 篇可核对的方法复述。必须保留的信息包括：16 阶 LP、512 点短时傅里叶变换、VTR 库 324 训练与 192 测试划分、均方根误差指标与平均值、LP-DDSP 每句 1500 轮与 SMELP 训练 100 轮的优化设置。修辞不增加证据，教学例子会明确标注为例子。

### 同任务的已有路线差在哪里？

按同输入、同目标、同监督与同运行阶段对照，已有路线可分为 3 类。第一类是经典 LP 及其加权改进，包括自相关法、加权线性预测、离散全极点建模、准闭相分析与时变 LP。它们输入都是短时语音，目标都是改善包络估计，但准闭相需要可靠基音跟踪来构造加权窗，且加窗流程不可微，难以嵌入端到端系统；时变 LP 用跨帧基函数共享系数，时间正则 LP 惩罚参数动态，都试图引入帧间依赖。

第二类是跟踪解码器，包括 Praat 的 Viterbi 搜索与 KARMA 的状态空间卡尔曼滤波。它们不改变 LP 估计本身，而是在已有多候选或倒谱特征上做跨帧平滑。第 3 类是混合神经方法，例如 DeepFormants 用多阶 LP 倒谱系数驱动长短时记忆网络，或先由深度网络初猜再用准闭相正反向 LP 谱峰修正。这类方法报告了精度提升，但原文指出其缺乏可微性，无法把 LP 损失回传到特征学习。

可微数字信号处理，英文名 differentiable digital signal processing，简称 DDSP，是第四条路线。它把 DSP 模块写成可求导算子，使损失梯度能穿过滤波器。端到端 LPCNet 与时变全极点音频效应建模是先例，但前者服务于声码器特征，后者在直接型系数上求导。本文的差异是把优化变量选为对数面积比，并把 L1 与时间正则显式写入损失，直接面向共振峰估计。

### 论文要解决的具体问题是什么？

论文要解决的是无监督且可微的全极点系数优化问题，外加一个有监督的端到端跟踪问题。第一个问题可表述为：给定单句语音波形，在不依赖自相关求解的条件下，直接找到一组跨帧平滑的稳定滤波器系数，使时域预测残差的 L1 与 L2 组合最小。第二个问题是：给定跨句训练集的频谱与手修共振峰真值，学习一个 1 次前向就能输出平滑轨迹与可解释中间系数的网络。

举一个教学例子：假设一句 2.5 秒语音按 160 点帧移切出约 250 帧，每帧 16 阶。若按经典法每帧独立求解，250 组系数互不约束；本文则把 250 乘 16 个对数面积比看成一个整体变量，用梯度下降同时优化，并在损失中加入相邻帧差平方项。这不是论文报告的具体数值，只是帮助理解问题规模的例子。真正的约束在方法节给出：频率只保留 0 到 5500 赫兹、带宽小于 400 赫兹的前 4 个候选，其余根丢弃。

### LP-DDSP 与 SMELP 的全景是什么？

沿一个样本走完流程有助于建立依赖顺序。输入为原始波形，先做 0.97 预加重与短时傅里叶变换，得到分帧频谱。LP-DDSP 路径是：把对数面积比矩阵随机初始化为均值 0 方差 0.2 的高斯变量，经双曲正切换算为反射系数，再经前向 Levinson 递推换算为直接型预测系数，用逆滤波器作用于频域信号并经逆傅里叶变换得到时域残差，计算残差 L1、L2 与帧间正则三项损失，反向传播到对数面积比并用 Adam 更新，重复 1500 轮。最终用根求解法把收敛系数换算为共振峰。

SMELP 路径只做 1 次前向加反传：卷积特征预测器从频谱预测对数面积比，同一组对数面积比分 3 路使用，一路经 Levinson 与逆滤波计算无监督残差损失与正则损失，一路直连长短时记忆解码器预测共振峰，一路与自相关法系数比较计算系数均方误差。共振峰预测再与真值比较得到频率均方误差，总损失为四项之和。下面先看系统框图确认分支关系。

> **看图路径：** 1. 从右下 Signal 经 STFT 到 Feature predictor 再到 LAR，确认主前向路径；2. 观察 LAR 分出三路：经 Levinson 到 a、直连 Decoder LSTM、直连 Lreg；3. 核对 Inverse filter 同时接收原始 Signal 与系数 a 并向上输出残差激励；4. 辨认蓝色损失位置：LF 在顶部、Lcoeff 在中间、L1 与 L2 在残差顶部

[![原论文 Figure 1：SMELP system overview.](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/interspeech-2026/26b87aa76e0d/figure-1.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/interspeech-2026/26b87aa76e0d/figure-1.png)

*论文图 1。原论文 Figure 1：“SMELP system overview.”。*

上图显示 SMELP 的信号与监督流向。底部 Signal 箭头同时指向短时傅里叶变换与逆滤波器，说明逆滤波需要原始波形与当前系数共同决定残差。中间 LAR 节点是全文枢纽，它向上经 Levinson 得到系数 a 再向右进入逆滤波，同时向左上直连解码长短时记忆网络，向右直连正则损失。顶部蓝色损失从左到右依次是共振峰损失、系数损失、残差 L1 与 L2 损失，分别对应有监督轨迹、中间表示对齐与无监督拟合 3 个来源。读图时不要把 a_lpc 当成网络预测，它是自相关法给出的参考系数，仅用于计算系数损失。

### 基线自相关法如何得到系数与残差？

自相关法是全文的对照基线，也是 SMELP 系数监督的来源。操作按帧进行：对加窗语音求功率谱再经逆傅里叶变换得到短时自相关序列，组装 Toeplitz 矩阵并列出 Yule-Walker 方程，用 Levinson-Durbin 递推由低阶到高阶依次求出反射系数、均方预测误差与预测系数。预测误差滤波器记为 A(z) 等于 1 减去各阶系数与延迟算子的乘积和，它是声道滤波器 H(z) 的逆。把语音通过 A(z) 即得残差，对应声门激励的估计。

根求解步骤对基线与 LP-DDSP 共用：由预测系数构造伴随矩阵，求特征值得到多项式根，每对共轭复根换算出一组频率与带宽候选，过滤后取前 4 个。这一步在训练中不参与求导，只在评价时把系数翻译成可比的频率误差。理解这一点才能明白为何 LP-DDSP 只优化系数却能改善共振峰指标：系数空间的平滑与鲁棒残差间接稳定了根的位置。

### LP-DDSP 如何把反射系数变成可优化变量？

LP-DDSP 的关键改动是断开反射系数与自相关的耦合，把反射系数当成自由变量。白话说，原来反射系数是由自相关算出来的中间量，现在把它当成可以直接改的参数。为保证稳定，优化不在反射系数上直接进行，而在对数面积比上进行。对数面积比，英文名 log-area ratio，简称 LAR，是反射系数的对数变换，二者经 tanh 互换。优化器改动 LAR，经 tanh 压缩回(-1,1) 区间，再走标准前向 Levinson 公式得到直接型系数。

**线性预测 × 共振峰：** 线性预测负责用全极点滤波器拟合声道包络并给出残差，对应声源-滤波器假设下的声道部分；共振峰是该包络共振峰频率与带宽的读数，由预测多项式共轭复根换算得到；可微线性预测把反射系数到直接型系数再到逆滤波残差的整条链路做成可求导计算，使残差损失能直接回传更新声道参数，组合意义是把原来先解 Yule-Walker 再求根的两步流程变成可联合优化和平滑约束的估计器。

损失由三项组成：时域残差平方和、0.5 倍的残差绝对值和、0.1 倍的归一化帧间 LAR 差平方和。平方项对应高斯假设，绝对值项对应拉普拉斯假设以容忍浊音大脉冲，正则项惩罚相邻帧同一阶系数的突变。算法每轮包含变换、滤波、求损失、反传、Adam 更新 5 个动作，学习率为 0.1，迭代 1500 次。原文未给出 Adam 的 1 阶与 2 阶矩超参数与批处理细节，复现时只能按常用默认值并记录为缺项，不从方法名推定。

**反射系数 × 对数面积比：** 反射系数是 Levinson 递推中的每阶反射量，取值必须落在(-1,1) 内才能保证全极点滤波器稳定；对数面积比是对反射系数的对数变换，定义域扩展到全体实数且与反射系数经 tanh 一一对应；二者搭配的理由是优化器可以在无约束的对数面积比空间自由更新，再经 tanh 映射回稳定反射系数，新增作用是既保留稳定性又获得可微的连续优化变量。

**可微数字信号处理 × 逆滤波：** 可微数字信号处理负责把经典 DSP 模块写成可反向传播的算子，使损失梯度能穿过信号处理块；逆滤波负责用预测滤波器 A(z) 作用于预加重语音得到时域残差 e，作为声道拟合好坏的直接证据；二者搭配时逆滤波成为连接参数与波形误差的可微桥梁，新增作用是让 L1 与 L2 残差损失能端到端驱动对数面积比更新，而不依赖自相关矩阵求解。

**时间正则 × L1 残差：** 时间正则负责惩罚相邻帧对数面积比的平方差，对应声道不可能突变的生理先验；L1 残差负责对浊音周期性残差按拉普拉斯假设计量误差，比平方误差更不怕大幅值脉冲；二者搭配的理由是分别处理帧间独立与高斯假设两个缺陷，组合后损失同时要求每帧残差小且帧间参数连续，从而得到更平滑的包络与轨迹。

上述 3 组桥接的含义是：先沿样本走完输入到残差的因果链，再理解每一项损失为何需要可微链路。若正则只作用于 LAR 而不经过语音，梯度路径最短；若 L1 与 L2 作用于残差，梯度必须穿过逆滤波与 Levinson 2 级映射，这正是可微实现的核心代价。

### SMELP 训练什么、冻结什么、梯度走哪里？

SMELP 是有监督训练模型，LP-DDSP 是逐句无监督优化，二者训练含义不同，需分开说明。SMELP 的网络由 5 层 2 维卷积特征预测器与长短时记忆解码器组成。卷积核为 5，每层通道从 16 开始逐层加倍，每层含 2 维卷积、批归一化与 ReLU；解码器是与对照 LP-LSTM 复杂度相当的循环结构。输入是 512 点短时傅里叶变换谱，窗长 512、帧移 160、汉恩窗。

监督来源有三处：残差 L1 与 L2 来自当前预测系数经逆滤波得到的残差，无需人工标注；系数均方误差来自自相关法系数，作为中间表示的教师；共振峰均方误差来自 VTR 手修真值，仅在期望出现共振峰的音段计分。总损失为四项直接相加，原文未报告加权系数，复现时按等权相加并注明。梯度 1 次前向后反传到卷积预测器与 LSTM 解码器，每句只更新 1 次，共训练 100 轮，学习率 0.001，Adam 加余弦退火调度。

对照 LP-LSTM 是两层双向 LSTM、隐层 128，直接把 LP 系数当特征输入，不把 LP 纳入损失，也不回传改善 LP 估计。LP-DDSP 没有跨句训练阶段，不存在冻结与泛化问题；SMELP 训练时未说明冻结自相关分支，自相关系数仅作为目标值，不参与求导。

**SMELP × LP-DDSP：** LP-DDSP 负责对单条语音从随机初始化开始反复迭代优化对数面积比，属于无监督的逐句拟合；SMELP 负责用卷积特征预测器 1 次前向给出对数面积比，再用 LSTM 解码器给出共振峰，属于有监督的跨句泛化模型；二者搭配时 LP-DDSP 的残差加正则损失被原样搬进 SMELP 作为无监督分支，与系数监督和共振峰监督相加，新增作用是让网络同时学到可解释的中间声道表示与准确的轨迹输出。

硬件条件按原文交代为英伟达 V100，训练轮数与优化器如上。原文未报告批量大小、早停与随机种子，复现时需补做 3 次以上重复并报告均值与标准差的方向，不能把单次最优当可部署收益。

### 数据、划分与指标如何保证可比？

实验使用 VTR 共振峰库，它是 TIMIT 的子集，共 516 句，采样率 16 kHz，时长多为 2 到 5 秒，划分为 324 句训练与 192 句测试。真值是每 10 毫秒手修的共振峰轨迹，附音素类别与时间戳。评价时只比较期望出现共振峰的音段，指标为预测与真值的前 4 个共振峰均方根误差，单位赫兹，越小越好，同时报告四者均值作为总体指标。所有 LP 模型阶数固定为 16，保证估计容量一致。

基线包括自相关 LP 基线、时变准闭相、Praat、KARMA 与 LP-LSTM。其中 LP 基线无跨帧跟踪，时变准闭相、Praat 与 KARMA 带各自解码或滤波跟踪，LP-LSTM 与 SMELP 用神经解码。原文把第一组定为无跨帧跟踪的估计方法，第二组为 LP 特征加 Viterbi 或卡尔曼跟踪，第 3 组为 LP 特征加 LSTM 跟踪。比较时需注意解码器差异本身带来较大增益，不能把 SMELP 对 LP-DDSP 的优势全部归因于可微损失。短时傅里叶变换配置与滤波根筛选条件全组一致，这是公平条件。

### 主结果显示什么收益与代价？

比较问题是：在相同 16 阶与相同筛选规则下，可微优化与端到端学习能否在测试集上降低 4 个共振峰的均方根误差。公平条件是同 VTR 测试划分、同音段计分、同赫兹单位，指标方向为越小越好。下表整理测试集均值与波动范围，总体列为四者均值。

| 条件 | 指标 | LP 基线 | LP-DDSP | SMELP | 对照方法 |
| --- | --- | --- | --- | --- | --- |
| VTR 测试集 192 句，16 阶，前 4 共振峰 | F1 均方根误差，赫兹 | 163 ± 9 | 131 ± 10 | 100 ± 4 | KARMA 108 ± 5，LP-LSTM 107 ± 3 |
| VTR 测试集 192 句，16 阶，前 4 共振峰 | F2 均方根误差，赫兹 | 299 ± 20 | 222 ± 13 | 141 ± 6 | KARMA 195 ± 10，LP-LSTM 145 ± 6 |
| VTR 测试集 192 句，16 阶，前 4 共振峰 | F3 均方根误差，赫兹 | 389 ± 26 | 268 ± 18 | 195 ± 10 | KARMA 228 ± 15，LP-LSTM 183 ± 10 |
| VTR 测试集 192 句，16 阶，前 4 共振峰 | F4 均方根误差，赫兹 | 662 ± 33 | 362 ± 24 | 230 ± 15 | Praat 356 ± 18，KARMA 486 ± 34 |
| VTR 测试集 192 句，16 阶，前 4 共振峰 | 总体均值，赫兹 | 378 ± 17 | 246 ± 12 | 166 ± 5 | LP-LSTM 171 ± 5，KARMA 254 ± 14 |

表后解释需同时讲收益与代价。LP-DDSP 总体 246 赫兹，明显低于 LP 基线 378 赫兹与时变准闭相 379 赫兹，在非神经解码器中最低，支持可微优化加正则改善了逐帧估计。但分项看 KARMA 在 F1 到 F3 更优，Praat 在 F4 为 356 赫兹略优于 LP-DDSP 的 362 赫兹，说明传统跟踪在特定共振峰仍有优势，不能宣称全面超越。SMELP 总体 166 赫兹，为全表最低，且在 F1、F2、F4 最低；LP-LSTM 总体 171 赫兹且在 F3 最低，表明解码器贡献很大。

未胜出项是 SMELP 的 F3 弱于 LP-LSTM，这是就近的反例。代价是 LP-DDSP 需每句 1500 轮优化，推理成本远高于 1 次前向的 SMELP 与经典法，原文未报告延迟与参数量，不承诺实时性。
为理解平滑来源，看包络对比图的像素内容。

> **看图路径：** 1. 对比上下两幅包络图的横轴 0-3 秒与纵轴 0-5.5 kHz 是否一致；2. 观察下图低频亮带是否比上图更连续，抖动竖纹是否减少；3. 注意深色竖直静音段在两图中是否都存在，不把能量中断当方法失效

[![原论文 Figure 2：Spectral envelope calculated from the LP coefficients.](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/interspeech-2026/26b87aa76e0d/figure-2.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/interspeech-2026/26b87aa76e0d/figure-2.png)

*论文图 2。原论文 Figure 2：“Spectral envelope calculated from the LP coefficients.”。*

上下面板为同一句语音由 LP 系数算出的谱包络，横轴时间 0 到 3 秒，纵轴频率 0 到 5.5 千赫，亮度表示包络幅度。上方面板基线方法出现大量纵向抖动竖纹与断裂亮带，尤其 1 到 2 秒中频轨迹分叉剧烈；下面板 LP-DDSP 的低频主共振带连续明亮，中高频横向纹理更平直，深色静音竖纹依然保留。这支持正则与梯度优化使系数跨帧变化更小，但也提示过度平滑可能抹掉快速过渡，快速音段的保真边界尚未评测。

### 损失中哪一项真正起作用？

消融问题是：在训练集上逐项去掉 L1、L2 与帧间正则后，误差如何变化。条件是同 LP-DDSP 优化流程、同 16 阶，指标仍为四共振峰均方根误差与均值，单位赫兹。下表整理训练集结果，注意这是训练集拟合误差，不能直接当泛化排名。

| 条件 | 指标 | 仅 L1 | 仅 L2 | L1 加 L2 | 全损失 |
| --- | --- | --- | --- | --- | --- |
| LP-DDSP 训练集，16 阶 | F1 均方根误差，赫兹 | 237 | 239 | 236 | 121 |
| LP-DDSP 训练集，16 阶 | F2 均方根误差，赫兹 | 405 | 396 | 405 | 170 |
| LP-DDSP 训练集，16 阶 | F3 均方根误差，赫兹 | 487 | 491 | 487 | 201 |
| LP-DDSP 训练集，16 阶 | F4 均方根误差，赫兹 | 912 | 932 | 910 | 462 |
| LP-DDSP 训练集，16 阶 | 总体均值，赫兹 | 510 | 514 | 509 | 239 |

表后解释要区分充分证据与待验证推测。报告显示全损失 239 赫兹远低于任一消融，支持三项组合必要。仅加正则的对比最有信息量：L1 从 510 降到 295，L2 从 514 降到 420，说明正则本身带来大幅下降；L1 加 L2 无正则时为 509，与单项几乎无差别，说明不用正则时双残差项叠加作用有限。加入 L1 的对比为 L2 加正则 420 降到全损失 239，支持 L1 对浊音脉冲的鲁棒作用。

但这只是训练集误差，未报告测试集消融，不能推定泛化增益相同；也未测量误判率与带宽误差，不承诺这些量同步改善。
单句轨迹的像素对比进一步显示解码与平滑的差异。

> **看图路径：** 1. 先确认每子图蓝色为真值、红色为预测，底图为同一句的语谱图；2. 横向比较上排 Praat 与 LP Baseline 的红色毛刺与下排 SMELP 的平滑段；3. 重点看 1.2 秒与 2.0 秒附近的静音竖纹处各方法是否断开或飞点

[![原论文 Figure 3：Comparison of formant tracking methods.](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/interspeech-2026/26b87aa76e0d/figure-3.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/interspeech-2026/26b87aa76e0d/figure-3.png)

*论文图 3。原论文 Figure 3：“Comparison of formant tracking methods.”。*

六子图为同一测试句的语谱图叠加轨迹，蓝为真值，红为预测，横轴 0 到约 2.8 秒，纵轴 0 到 5.5 千赫。上排 Praat 与 LP 基线的红色轨迹毛刺与垂直飞点多，尤其 2.0 到 2.5 秒高频段出现大幅跳变；上排右 LP-DDSP 的红线明显更平滑但在 1.5 到 2.0 秒中频段与蓝线存在系统性偏低。下排 LP-LSTM、KARMA 与 SMELP 整体更贴合蓝线，其中 SMELP 在低频段贴合最好。原文文字报告 KARMA 与时变准闭相倾向于低估频率，Praat 与基线不稳定但有时贴合，这与像素观察一致。不能把末段贴合推广到全程，静音段的断开是正常计分排除区。

### 哪些边界没有测？何时不应直接套用？

论文直接报告的局限包括：LP-DDSP 是逐句优化，不具备跨句泛化的 1 次前向能力；SMELP 依赖手修真值与自相关教师，仍是有监督方法；评价只覆盖 VTR 的英文朗读语音与期望出现共振峰的音段，未评测清音、噪声、儿童与病理语音。原文未报告训练资源消耗、推理延迟、模型参数量与输出帧率，总体趋势不等于每帧都平滑，快速过渡段可能被过度平滑。

另一个边界是根筛选规则固定为 0 到 5500 赫兹与带宽小于 400 赫兹，若采样率或语种改变，高频共振峰分布变化后该阈值是否仍合适待验证。比较中搜索最优与事后最优未单独标明，但 LP-DDSP 的 1500 轮是按句优化的拟合值，不能当成可部署的 1 次前向收益。若要在新语料尝试，应先确认音段计分口径与帧移是否与 VTR 一致，否则相同数值也不是同一指标。

### 复现先做什么？代码与参数如何对应？

代码状态按本次核验为当前可用，地址为论文脚注给出的仓库。复现 LP-DDSP 先做三件事：按窗长 512、帧移 160、汉恩窗与 0.97 预加重重建分帧流程；实现对数面积比经 tanh 到反射系数再到直接型系数的前向 Levinson 与逆滤波残差计算，保证梯度能回传；按平方项加 0.5 倍绝对值项加 0.1 倍归一化帧间差平方项组装损失，用学习率 0.1 的 Adam 优化 1500 轮。随机初始化按均值 0 方差 0.2 记录种子，缺失的矩参数按框架默认并注明。

复现 SMELP 先准备 VTR 划分与 10 毫秒真值对齐，只在有声期望段计算频率损失；用自相关法生成 16 阶教师系数计算系数损失；卷积预测器按 5 层、核 5、通道 16 起逐层加倍搭建，训练 100 轮、学习率 0.001 加余弦退火。评价时复用相同的伴随矩阵求根与频率带宽筛选，再计算四共振峰均方根误差。原文未给出批量大小与种子，需自行补做多次重复。若只想验证平滑效果，可先复现包络对比与单句轨迹图，再跑全库指标。

### 何时值得尝试这种可微 LP？

当任务需要可解释的中间声道表示，又希望把声学拟合与轨迹平滑放进同一个可微目标时，本文路线值得尝试。LP-DDSP 适合离线分析单句或小规模语料，用计算换平滑；SMELP 适合有标注训练集且需要 1 次前向输出的跟踪系统，同时保留系数可视化能力。若只有 CPU 或需要实时输出，不应直接套用每句 1500 轮的 LP-DDSP，应优先考虑 SMELP 或经典跟踪加平滑解码。

还需补的验证包括：测试集上的损失消融、噪声与跨语种泛化、带宽误差与听感相关性、参数量与延迟测量。常见误解是把包络变平滑等同于共振峰一定更准，实际上平滑减少飞点但可能引入偏置，图 3 中 LP-DDSP 中频偏低即为例证；另一个误解是把 L1 当成万能鲁棒项，消融显示无正则时 L1 几乎无增益，必须与时间约束配合。记住这一点才能正确复述方法：可微只是让联合优化成为可能，真正带来增益的是残差假设修正与帧间约束的组合。

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。
- 评分规则：type-aware-v1
- 评分模型：muse-spark-1.3-contributor
- 评分请求协议：openai_responses

---

[← 返回 interspeech-2026 论文汇总](/posts/conference-interspeech-2026/)
