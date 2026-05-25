---
title: "Comprehensive Dataset and Signal Processing Framework for Phonocardiogram-Based Heart Rate and Blood Pressure Estimation"
date: 2026-05-25
draft: false
tags: [心音图, 生理信号处理, 心率估计, 血压估计, 包络检测, Hilbert变换, Shannon熵, 小波能量谱, 多元回归, 低成本硬件]
categories: [论文速递]
description: "生理信号处理 | 2.5/10"
hiddenInHomeList: true
---

# 📄 Comprehensive Dataset and Signal Processing Framework for Phonocardiogram-Based Heart Rate and Blood Pressure Estimation

#心音图 #生理信号处理 #心率估计 #血压估计 #包络检测 #Hilbert变换 #Shannon熵 #小波能量谱 #多元回归 #低成本硬件

📝 **2.5/10** | 后50% | #生理信号处理 | #信号处理 | #心音图 #心率估计 | [arxiv](https://arxiv.org/abs/2605.23516v1)

学术质量 2.1/7 | 影响力 0.4/2 | 可复现性 0/2


### 👥 作者与机构

- 第一作者: Abdul Ahad Mamun, Department of Electrical and Electronic Engineering, Bangladesh University of Engineering and Technology, Dhaka 1205, Bangladesh
- 第二作者/通讯作者: Utsab Saha (同时为BRAC University, Department of Computer Science and Engineering, utsab.saha@bracu.ac.bd)
- 其他作者: Md Hasibul Hasan, Shahed Ahmed, MD Jahin Alam（后两者同Utsab Saha跨机构）
- 机构: Bangladesh University of Engineering and Technology (BUET), BRAC University

### 💡 毒舌点评

这是一份将本科课程设计包装成"comprehensive dataset and signal processing framework"的典型反面教材。论文的标题与内容之间存在令人咋舌的落差——所谓"comprehensive dataset"仅有15名健康男性，每人60秒静坐记录；所谓"framework"不过是MATLAB内置函数（`hilbert`, `filtfilt`, `cwt`）的流水线式调用；所谓"semi-empirical model"是用10个系数拟合15个数据点的多项式回归灾难。

最令人震惊的是作者对统计学的公然漠视。Table 1展示的回归系数精确到小数点后三位，仿佛这些数字具有物理意义，但LOOCV将SBP的RMSE从2.10 mmHg（in-sample SD）膨胀至9.89 mmHg——误差放大4.7倍，这已不能用"过拟合风险"轻描淡写，这是模型完全失效的铁证。然而作者将这一关键结果 buried in supplementary material，正文却用"standard deviations of 2.10 mmHg for SBP"误导读者，这种选择性报告在学术伦理上极为可疑。

HR估计部分同样乏善可陈。三种包络检测方法的R值差异（0.955-0.973）在统计上可能不显著，却被当作"comprehensive comparison"呈现。更荒谬的是，44.1 kHz的PCG采样率——这是CD音质标准，而非医学信号采集的理性选择。作者辩称"提供2kHz降采样版本"，却未解释为何原始采集要浪费两个数量级的带宽。

硬件层面的"低成本"叙事同样经不起推敲。iPad作为核心录音设备，其成本被完全忽略；所谓"wearable"愿景与当前有线连接、静坐场景、手动触发的现实形成讽刺性对比。论文末尾的"future work"清单（运动、姿势变化、压力测试）恰恰证明了当前系统的非实用性。

作为面向语音/音频领域读者的评审，我必须指出：该工作对音频信号处理社区几乎无迁移价值。PCG的窄带特性（<200 Hz）与语音/音乐信号的全频段复杂性不可同日而语；所采用的包络检测、小波去噪均为入门级技术，无方法学创新；数据集规模与多样性不足以支撑任何有意义的声学建模研究。

### 📌 核心摘要

本研究提出PhonoTrack系统，尝试仅用单通道心音图（PCG）信号同时估计心率（HR）和血压（BP）。系统硬件为标准听诊器内嵌麦克风，通���有线连接至iPad录音（44.1 kHz，16-bit PCM），同步采集三导联ECG（~190 Hz，AD8232模块+Arduino）和手动水银血压计读数。数据集包含15名健康男性（18-50岁），每人60秒静坐记录，听诊器膜型胸件置于左胸骨旁区域（三尖瓣听诊区上方一个肋间）。

HR估计采用6秒非重叠帧处理，经db4小波8层分解去噪（阈值15%最大幅值）、归一化后，分别用Hilbert变换（HT）、Shannon熵（SE）和小波能量谱（WES）提取包络，低通滤波（Butterworth, 20 Hz截止）后峰值检测（最小间距0.125s，最小高度15%最大包络值），最后取收缩期与舒张期HR的平均。

BP估计提取S1/S2持续时间、上升/下降时间、收缩/舒张期时长、HR等特征，构建含线性项、二次项和交互项的多项式回归模型（SBP 10项，DBP 10项），以受试者级聚合数据拟合。

实验结果：HR估计帧级（225帧）SE最优（R=0.973, RMSE=1.688 bpm）；BP估计受试者级（n=15）SBP的R=0.891, SD=2.10 mmHg，DBP的R=0.700, SD=3.20 mmHg。LOOCV显示SBP的RMSE=9.8871 mmHg, MAE=7.2565 mmHg；DBP的RMSE=11.0508 mmHg, MAE=8.6295 mmHg。

### 🔗 开源详情

/ 1.5 → 0.0/1.5

完全未开源：无代码链接、无模型权重、无数据集公开下载。仅声明"corresponding author will provide it upon reasonable request"，不符合当前开放科学标准。补充材料（Fig. S1-S9, Table S1-S4）未提供获取链接或托管平台信息。MATLAB为商业软件，增加复现门槛。

### 可复现性 / 0.5 → 0.1/0.5

障碍：关键参数（小波阈值15%、低通截止20 Hz、峰值检测阈值15%）缺乏优化过程或敏感性分析（除截止频率外）；硬件组件的精确型号、麦克风规格、iPad型号未说明；手动血压计操作者间变异未评估；同步校正算法细节不足。

## 局限与问题


多项式回归在n=15、p=10条件下的维度灾难是根本性方法学错误。LOOCV的RMSE（~10 mmHg）已接近或超过临床可用的血压计本身的测量误差范围，模型完全丧失实用价值。作者将LOOCV结果置于补充材料，正文突出in-sample SD，构成误导性报告。


"Semi-empirical"一词暗示模型融合生理先验与数据拟合，但实际为纯数据驱动的多项式回归。S1/S2时间特征与动脉血压的因果链需经Frank-Starling机制、动脉顺应性、外周阻力等中介，这些在模型中完全未体现。回归系数的符号和量级缺乏生理可解释性（如\(\sigma_{\text{s,HR}^2} = 0.41 \times 10^{-5}\)的极二次项）。


- 性别单一：全男性样本，心血管生理存在已知性别差异
- 年龄狭窄：18-50岁健康人，无老年高血压高发人群
- 状态单一：静坐60秒，无日间变异、无运动负荷、无情绪应激
- 记录过短：60秒仅约60-100个心动周期，特征估计方差大


当前系统：有线连接、iPad依赖、绑带固定、手动触发、静坐场景。未来愿景："continuous monitoring"、"wearable device"。两者差距未诚实讨论。


手动触发的时间偏差经"post-processing phase"校正，但：
- 校正算法未详细描述（仅提及"time indices"和"R-peak/S1 alignment"）
- 残余误差未量化
- ECG的190 Hz与PCG的44.1 kHz时间分辨率差异巨大（5.3 ms vs 0.023 ms），对齐精度受限于ECG采样


- db4小波、8层分解、15%阈值：无数据集特定优化
- 20 Hz低通：虽提供敏感性分析，但最优性未证，且未与文献标准（如Schmidt的8 Hz）公平比较
- 峰值检测阈值15%：未报告假阳性/假阴性率


Table 3对比的"Wearable cuff-less watch"（SD=4.70/2.70 mmHg, n=21）等研究，其验证策略可能为out-of-sample，而PhonoTrack的2.10/3.20 mmHg为in-sample过拟合结果，直接对比不成立。


未报告伦理审批编号、知情同意书细节、数据去标识化措施。"Upon reasonable request"的数据共享政策不符合FAIR原则。

## 开源详情

| 项目 | 状态 |
|:---|:---|
| 代码 | 未提及任何代码链接或仓库 |
| 模型权重 | 未提及 |
| 数据集 | 无公开下载链接或托管平台（Zenodo/Figshare/PhysioNet等）。仅声明："All the simulation data are presented in the main text, and the corresponding author will provide it upon reasonable request" |
| Demo | 未提及 |
| 补充材料 | 论文提及但未提供获取方式或链接，包括：Fig. S1-S2（设备设置图）、Fig. S3（MFCC图）、Fig. S4（Bland-Altman图）、Fig. S5-S7（手动标注S1/S2子集及元数据）、Fig. S9（完整流程图及截止频率敏感性分析）、Supplementary Note 1（窗函数策略）、Supplementary Table S1（受试者级HR结果）、Supplementary Table S2（PhysioNet 2016及噪声测试）、Supplementary Table S3（回归系数稳定性/过拟合评估）、Supplementary Table S4（成本明细） |
| 依赖软件 | MATLAB（商业软件，`hilbert`、`filtfilt`、`cwt`等函数），未说明版本 |
| 外部数据集引用 | PhysioNet 2016 Challenge (https://physionet.org/content/challenge-2016/1.0.0/)，用于外部验证测试 |

### 🏗️ 方法概述和架构

核心组件与信号流：
- PCG采集路径：标准听诊器（膜型胸件）→ 内嵌麦克风 → 有线连接 → iPad内置录音应用 → 44.1 kHz/16-bit PCM存储。作者声称此设计"preserved natural frequency characteristics"，但未提供麦克风的频率响应规格或听诊器-皮肤耦合的声学传递函数。
- ECG采集路径：三导联配置（双手+左下肢/左下肋）→ AD8232前端模块（集成双极点高通滤波消除运动伪影和电极半电池电位，三极点低通滤波降噪）→ ADC → Arduino USB传输 → 笔记本电脑文本格式存储。
- 血压金标准：手动水银血压计，记录前后各测一次，取平均。

同步机制：PCG（iPad）与ECG（Arduino）分别手动触发录制，"almost simultaneously"但存在"slight time mismatches"。后处理校正方法：利用时间索引对齐，并以ECG的R峰与PCG的S1心音作为生理锚点验证。原文未量化残余同步误差。

受试者配置：15名健康男性，18-50岁，排除心血管疾病、植入设备、胸壁异常者。静坐于扶手椅，听诊器以可调节绑带固定于左胸骨旁区域（三尖瓣听诊区上方一个肋间），同一名训练有素的操作者执行，受试者正常呼吸、避免说话和深呼吸。

降采样处理：44.1 kHz原始数据经抗混叠低通滤波后降采样至2 kHz供分析使用。


帧级处理架构（6秒非重叠帧，与ECG帧同步）：

1. 小波去噪：Daubechies-4（db4）小波，8层分解，阈值设为最大信号幅值的15%，软阈值收缩后重建。此参数选择依据为文献[24]中"up to 20%"的范围，但未在本数据集上优化验证。

2. 归一化：每帧除以最大绝对幅值。

3. 包络提取（三种并行方法）：
   - Hilbert变换（HT）：通过MATLAB `hilbert`函数（FFT-based实现）计算解析信号，取模得瞬时幅值包络。公式(2a)中\(h[n] = \frac{2}{\pi n}\)（n为奇数）为离散Hilbert变换核，但注意标准定义应为\(\frac{1}{\pi n}\)，作者未解释此2倍差异（可能为归一化约定）。
   - Shannon熵（SE）：\(E_{SE}[n] = -x[n]^2 \cdot \log(x[n]^2 + \epsilon)\)，\(\epsilon = 10^{-12}\)防止数值下溢。后接零相位Butterworth低通滤波（`filtfilt`实现）。
   - 小波能量谱（WES）：连续小波变换（CWT）后，各尺度系数模平方求和：\(\text{WES}(n) = \frac{1}{N}\sum_{k=1}^{L}|\text{CWT}(n,k)|^2\)。原文未明确指定母小波类型（Morlet/Morse/Bump仅在NRMSE质量评估时提及）。

4. 包络平滑：Butterworth低通滤波，20 Hz截止频率。作者提供补充敏感性分析（Fig. S9）：8 Hz时MAE显著恶化，≥10 Hz进入稳定平台，15-30 Hz为"宽稳定区"，故取20 Hz作为保守值。

5. 峰值检测：局部极大值搜索，约束条件：
   - 最小峰间距0.125 s（对应最大HR 240 bpm）
   - 最小峰高度15%最大包络值

6. S1/S2标记规则：比较相邻峰间距，若第一、二峰间距小于第二、三峰间距，则交替标记为S1、S2。

7. HR计算：分别由S1-S2（收缩期）和S2-S1（舒张期）间隔计算瞬时HR，取两者平均：
   \[\text{HR}_{\text{pcg}} = \left(\frac{1}{t_{\text{sys}}} + \frac{1}{t_{\text{dias}}}\right) \times \frac{60}{2}\]


特征工程层（每帧提取后受试者级平均）：
- 收缩期时长 \(t_{\text{sys}}\)（S1-S2间隔）
- 舒张期时长 \(t_{\text{dias}}\)（S2-S1间隔）
- S1上升时间 \(t_{\text{rs1}}\)、下降时间 \(t_{\text{ds1}}\)（基于包络幅值跨越小阈值的时长）
- S2上升时间 \(t_{\text{rd2}}\)、下降时间 \(t_{\text{dd2}}\)
- S1持续时间 \(t_{\text{s1}} = t_{\text{rs1}} + t_{\text{ds1}}\)
- S2持续时间 \(t_{\text{s2}} = t_{\text{rd2}} + t_{\text{dd2}}\)
- 平均心率 \(\text{HR}_{\text{pcg}}\)

回归模型层：多项式回归，含线性项、二次项和交互项：

\[P_{\text{sys}} = C_1 + \sigma_{\text{sys}}t_{\text{sys}} + \sigma_{\text{rs1}}t_{\text{rs1}} + \sigma_{\text{ds1}}t_{\text{ds1}} + \sigma_{\text{s1}}t_{\text{s1}} + \sigma_{\text{s,HR}}\text{HR}_{\text{pcg}} + \sigma_{\text{s,HR}^2}\text{HR}_{\text{pcg}}^2 + \sigma_{\text{sys}^2}t_{\text{sys}}^2 + \sigma_{\text{s1}^2}t_{\text{s1}}^2 + \sigma_{\text{rds1}}t_{\text{rs1}}t_{\text{ds1}}\]

\[P_{\text{dias}} = C_2 + \alpha_{\text{dias}}t_{\text{dias}} + \alpha_{\text{rd2}}t_{\text{rd2}} + \alpha_{\text{dd2}}t_{\text{dd2}} + \alpha_{\text{s2}}t_{\text{s2}} + \alpha_{\text{d,HR}}\text{HR}_{\text{pcg}} + \alpha_{\text{d,HR}^2}\text{HR}_{\text{pcg}}^2 + \alpha_{\text{dias}^2}t_{\text{dias}}^2 + \alpha_{\text{s2}^2}t_{\text{s2}}^2 + \alpha_{\text{rdd2}}t_{\text{rd2}}t_{\text{dd2}}\]

关键设计缺陷：10项回归模型拟合15个数据点，维度灾难必然导致过拟合。作者虽在补充材料Table S3进行"回归系数稳定性分析"，但正文未报告任何正则化或特征选择过程。


- HR验证：帧级（15受试者×15帧=225帧），以ECG-derived HR为金标准
- BP验证：受试者级（n=15），以手动血压计平均值为金标准；额外进行LOOCV作为"overfitting risk assessment"

### 💡 核心创新点

1. 低成本硬件集成：将商用听诊器与嵌入式麦克风、iPad录音结合，声称成本效益优于多模态系统（但Table S4成本明细仅标注"indicative only"且未在正文出现）。

2. 同步PCG-ECG-BP数据集：15人数据集，强调"time-aligned PCG-ECG recordings with paired cuff BP in the same session"的稀缺性。

3. 三方法包络检测对比：HT、SE、WES的系统比较（但创新性有限，均为成熟方法）。

4. PCG-only BP估计尝试：探索S1/S2时间特征与血压的回归关系（但生理机制解释薄弱，模型不可靠）。

### 📊 实验结果

| 方法 | Pearson R | RMSE (bpm) |
|:---|:---|:---|
| Hilbert Transform (HT) | 0.965 | 2.467 |
| Shannon Entropy (SE) | 0.973 | 1.688 |
| Wavelet Energy Spectrum (WES) | 0.955 | 1.992 |

注：三种方法性能差异的统计显著性未检验。WES计算成本最高却被降级为"optional quality checking"，成本-效益权衡未量化。

### BP估计结果（受试者级，n=15，in-sample）

| 指标 | SBP | DBP |
|:---|:---|:---|
| Pearson R | 0.891 | 0.700 |
| SD (mmHg) | 2.10 | 3.20 |

### BP估计LOOCV结果（out-of-sample，补充材料）

| 指标 | SBP | DBP |
|:---|:---|:---|
| RMSE (mmHg) | 9.8871 | 11.0508 |
| MAE (mmHg) | 7.2565 | 8.6295 |

关键解读：LOOCV误差较in-sample SD放大4.7×（SBP）和3.5×（DBP），证实严重过拟合。此结果在正文中被淡化处理，仅提及"additional evaluate...in the supplementary material"。

### 外部验证（补充材料Table S2）

PhysioNet 2016数据集测试和噪声环境测试的误差统计，但具体数值未在提供的原文片段中完整呈现。

### Bland-Altman分析

- SBP：95%一致性界限未明确报告具体数值
- DBP：95%一致性界限约±10 mmHg，作者描述为"more variable than SBP"

### 🔬 细节详述

信号质量评估：除HR/BP估计外，论文包含WES与传统能量谱（ES）的NRMSE比较，使用Morlet、Morse、Bump等小波，但未明确最优选择及其对后续处理的影响。

手动标注资源：补充材料Fig. S5-S7提供代表性子集的手动S1/S2峰值标注及受试者元数据（年龄、性别、身高、体重、参考血压），但未说明标注者间一致性或标注协议。

滤波截止频率敏感性：补充材料Fig. S9显示8 Hz低通导致MAE急剧恶化，10-30 Hz平台期稳定，支撑20 Hz选择。但未解释8 Hz恶化的物理原因（可能与S1/S2包络主频重叠有关）。

公式笔误：公式(9b)分母为"N"而非"N_C"，与(8a)-(9a)不一致，疑似排版错误。

### ⚖️ 评分理由

缺陷：HR估计的包络检测方法均为经典信号处理技术，无算法创新；BP估计的多项式回归是统计学基础方法，无结构创新。所谓"semi-empirical model"缺乏生理机制的深度整合，仅是特征堆砌。硬件设计为现成组件的物理集成，无电子学或声学工程突破。

微弱亮点：PCG-only BP估计在文献中较少尝试，但作者未充分论证此方向的生理合理性。

### 技术严谨性 / 1.5 → 0.4/1.5

严重缺陷：
- 回归模型维度灾难：10系数/15样本，无正则化、无特征选择��无多重共线性诊断
- 选择性报告：in-sample SD置于正文突出位置，LOOCV灾难性结果 buried in supplementary
- 同步精度未量化：手动触发"slight time mismatches"的残余误差未知
- 44.1 kHz过采样无合理辩护，增加存储/计算负担
- 公式(2a) Hilbert核系数2/π与标准1/π的差异未解释；公式(9b)分母笔误

### 实验充分性 / 1.5 → 0.4/1.5

致命短板：
- 样本量：15名健康男性，无女性、无患者、无年龄多样性
- 记录时长：每人仅60秒静坐，无运动/姿势/生理状态变化
- 验证策略：BP模型无独立测试集，LOOCV作为事后补救而非核心设计
- 金标准局限：手动血压计仅前后各一次，60秒内血压波动被忽略；与PCG特征的时间对应关系模糊（瞬时vs区间平均）
- 无与SOTA的公平对比：Table 3对比文献的传感器复杂度、样本量、验证策略差异巨大

### 清晰度 / 1 → 0.5/1

问题：引言冗长且文献综述堆砌缺乏批判整合；方法部分公式符号前后不一致（如\(\sigma_{\text{rs1}}\)重复出现不同值：4.890×10¹和4.845×10¹，Table 1疑似排版错误）；BP模型"semi-empirical"的术语掩盖其纯数据驱动本质；结果呈现具有误导性。

### 影响力 / 2 → 0.4/2

语音/音频领域相关性极低：PCG为<200 Hz窄带生理信号，与语音/音乐的全频段、高动态复杂性无共通技术挑战。所采用的去噪、包络检测方法为入门级技术，对音频社区无迁移价值。数据集规模与多样性不足以支撑声学建模研究。硬件设计面向特定医学场景，无通用性。

医学工程领域影响亦有限：BP估计模型不可靠，LOOCV误差远超临床可接受范围（AHA要求<5 mmHg MAE）；样本量不足以支撑任何临床声明。

#

### 🚨 局限与问题

多项式回归在n=15、p=10条件下的维度灾难是根本性方法学错误。LOOCV的RMSE（~10 mmHg）已接近或超过临床可用的血压计本身的测量误差范围，模型完全丧失实用价值。作者将LOOCV结果置于补充材料，正文突出in-sample SD，构成误导性报告。


"Semi-empirical"一词暗示模型融合生理先验与数据拟合，但实际为纯数据驱动的多项式回归。S1/S2时间特征与动脉血压的因果链需经Frank-Starling机制、动脉顺应性、外周阻力等中介，这些在模型中完全未体现。回归系数的符号和量级缺乏生理可解释性（如\(\sigma_{\text{s,HR}^2} = 0.41 \times 10^{-5}\)的极二次项）。


- 性别单一：全男性样本，心血管生理存在已知性别差异
- 年龄狭窄：18-50岁健康人，无老年高血压高发人群
- 状态单一：静坐60秒，无日间变异、无运动负荷、无情绪应激
- 记录过短：60秒仅约60-100个心动周期，特征估计方差大


当前系统：有线连接、iPad依赖、绑带固定、手动触发、静坐场景。未来愿景："continuous monitoring"、"wearable device"。两者差距未诚实讨论。


手动触发的时间偏差经"post-processing phase"校正，但：
- 校正算法未详细描述（仅提及"time indices"和"R-peak/S1 alignment"）
- 残余误差未量化
- ECG的190 Hz与PCG的44.1 kHz时间分辨率差异巨大（5.3 ms vs 0.023 ms），对齐精度受限于ECG采样


- db4小波、8层分解、15%阈值：无数据集特定优化
- 20 Hz低通：虽提供敏感性分析，但最优性未证，且未与文献标准（如Schmidt的8 Hz）公平比较
- 峰值检测阈值15%：未报告假阳性/假阴性率


Table 3对比的"Wearable cuff-less watch"（SD=4.70/2.70 mmHg, n=21）等研究，其验证策略可能为out-of-sample，而PhonoTrack的2.10/3.20 mmHg为in-sample过拟合结果，直接对比不成立。


未报告伦理审批编号、知情同意书细节、数据去标识化措施。"Upon reasonable request"的数据共享政策不符合FAIR原则。

### 📷 论文图片

![图1](https://arxiv.org/html/2605.23516v1/x1.png)

![图2](https://arxiv.org/html/2605.23516v1/x2.png)

![图3](https://arxiv.org/html/2605.23516v1/x3.png)

![图4](https://arxiv.org/html/2605.23516v1/x4.png)

![图5](https://arxiv.org/html/2605.23516v1/x5.png)


---

[← 返回 2026-05-25 语音/音乐/音频论文速递](/audio-paper-digest-blog/posts/2026-05-25/)
