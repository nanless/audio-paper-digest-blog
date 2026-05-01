---
title: "ICASSP 2026 - 说话人日志 论文列表"
date: 2026-04-29
draft: false
tags: ["说话人日志"]
categories: [icassp-2026]
description: "共 2 篇 ICASSP 2026 说话人日志 方向论文"
hiddenInHomeList: true
---

# ICASSP 2026 - 说话人日志

共 **2** 篇论文

[← 返回 ICASSP 2026 总览](/audio-paper-digest-blog/posts/icassp2026-summary/)

---

| 排名 | 论文 | 评分 | 分档 |
|------|------|------|------|
| 🥇 | [A Framework for Controlled Multi-Speaker Audio Synthesis for](/audio-paper-digest-blog/posts/2026-04-29-a-framework-for-controlled-multi-speaker-audio) | 7.5分 | 前25% |
| 🥈 | [Mitigating Intra-Speaker Variability in Diarization with Sty](/audio-paper-digest-blog/posts/2026-04-29-mitigating-intra-speaker-variability-in) | 7.0分 | 前25% |

---

## 📋 论文详情

### 🥇 [A Framework for Controlled Multi-Speaker Audio Synthesis for Robustness Evaluation of Speaker Diarisation Systems](/audio-paper-digest-blog/posts/2026-04-29-a-framework-for-controlled-multi-speaker-audio)

✅ **7.5/10** | 前25% | #说话人日志 | #数据增强 | #说话人分离 #基准测试

👥 **作者与机构**

- 第一作者：Shreyas Ramoji（谢菲尔德大学计算机学院，SpandH Group）
- 通讯作者：未说明
- 作者列表：Shreyas Ramoji（谢菲尔德大学计算机学院，SpandH Group）、Vivek Kumar Thoppe Ravindranath（谢菲尔德大学计算机学院，SpandH Group）、Thomas Hain（谢菲尔德大学计算机学院，SpandH Group）

💡 **毒舌点评**

亮点：论文提供了一套模块化、可复现的合成框架，将现有的说话人日志数据集（如AMI， CALLHOME）的标注作为“蓝图”，系统地解耦了说话人、内容、声学环境的影响，并引入了sDER和NEC两个指标来量化系统在可控变化下的鲁棒性，方法论清晰严谨。短板：其核心局限在于“合成数据与真实对话的语义连续性鸿沟”这一根本性问题仍未解决，仅通过顺序采样LibriSpeech片段无法模拟真实对话中的话题承接与语境依赖，这使得合成数据在评估上的有效性存在天花板。

🔗 **开源详情**

- 代码：论文明确提供了代码仓库链接：https://github.com/shreyas2206/MultiSpeakerDataSyn。
- 模型权重：未提及。论文评估的是已有的公开模型（PyAnnote, NeMo, DiariZen），未提供其自身的模型权重。
- 数据集：合成数据集未直接公开，但框架基于公开数据集（LibriSpeech作为语音源，以及AMI, CALLHOME等作为RTTM来源）构建，用户可通过运行框架自行生成。
- Demo：未提供在线演示。
- 复现材料：论文提供了完整的合成配置文件（通过代码仓库），并详细记录了实验使用的种子、采样策略等关键参数，复现性高。
- 论文中引用的开源项目：依赖的开源工具/模型包括：
    - 数据集：LibriSpeech, RIRs Noises。
    - 说话人日志模型：PyAnnote 3.0, NeMo Sortformer, DiariZen (基于WavLM)。
    - 工具：Montreal Forced Aligner (MFA) (用于词对齐)。

---

[← 返回 ICASSP 2026 论文分析](/audio-paper-digest-blog/posts/icassp2026-summary/)

📌 **核心摘要**

1.  解决的问题：说话人日志系统的鲁棒性评估缺乏能够严格控制变量、同时保留真实对话动态（如重叠、打断）的可控基准数据集。
2.  方法核心：提出一个模块化合成框架，以公开数据集（AMI等）的RTTM标注作为对话时间蓝图，使用LibriSpeech的干净语音片段作为说话人语音源，通过分层采样（说话人、话语、片段）生成合成音频，并可叠加混响与噪声。
3.  创新点：a) 以真实对话标注为蓝图合成音频，而非从零构建统计模型；b) 提出对称DER (sDER) 和归一化误差一致性 (NEC) 两个新指标，用于量化系统在不同合成条件下的性能一致性（鲁棒性）；c) 通过控制实验（改变说话人、内容、声学）系统分析了各因素对不同说话人日志系统的影响。
4.  主要实验结果：
    *   基准结果：在4个数据集上，合成音频与原始真实音频的DER存在差距，但系统间的相对排序大致保持。
    *   鲁棒性分析：内容（话语）随机化比说话人重新采样对系统（尤其是端到端系统）的性能一致性冲击更大；声学增强的影响具有领域依赖性（如对AMI影响小于CALLHOME）。

| 数据集 | 条件 (来自表3) | PyAnnote DER | NeMo DER | DiariZen DER |
| :--- | :--- | :--- | :--- | :--- |
| AMI-Test | (1) 清洁基线 | 17.8 | 5.5 | 11.5 |
| | (2) 增强 (固定说话人/话语) | 15.4 | 6.9 | 9.4 |
| | (3) 新说话人种子 (固定顺序话语) | 17.6 | 6.4 | 10.9 |
| | (4) 话语随机化 (固定说话人) | 16.6 | 17.3 | 13.4 |
| Callhome | (1) 清洁基线 | 18.8 | 9.9 | 9.6 |
| | (2) 增强 (固定说话人/话语) | 22.1 | 11.6 | 11.6 |
| | (3) 新说话人种子 (固定顺序话语) | 18.8 | 10.4 | 10.3 |
| | (4) 话语随机化 (固定说话人) | 18.5 | 16.6 | 12.1 |

5.  实际意义：为说话人日志社区提供了一个强大的基准测试和诊断工具，可以在没有昂贵人工标注和错误边界的情况下，标准化地评估系统在不同扰动下的稳定性。
6.  主要局限性：a) 合成数据缺乏语义连续性，无法完全模拟真实对话的语用动态；b) 框架依赖于LibriSpeech，其语音风格（朗读式）与真实对话有差异；c) 增强模型（混响、噪声）较为简单，无法完全覆盖所有真实声学场景（如特定电话信道）。

---

### 🥈 [Mitigating Intra-Speaker Variability in Diarization with Style-Controllable Speech Augmentation](/audio-paper-digest-blog/posts/2026-04-29-mitigating-intra-speaker-variability-in)

✅ **7.0/10** | 前25% | #说话人日志 | #数据增强 | #语音合成 #流匹配

👥 **作者与机构**

- 第一作者：Miseul Kim（延世大学电气与电子工程系）
- 通讯作者：未说明（论文未明确标注通讯作者）
- 作者列表：Miseul Kim（延世大学电气与电子工程系）、Soo Jin Park（高通技术有限公司）、Kyungguen Byun（高通技术有限公司）、Hyeon-Kyeong Shin（高通技术有限公司）、Sunkuk Moon（高通技术有限公司）、Shuhua Zhang（高通技术有限公司）、Erik Visser（高通技术有限公司）

💡 **毒舌点评**

亮点：论文巧妙地将“用TTS生成多样风格语音”这一生成任务，嫁接到“解决聚类分裂问题”这一理解任务上，思路清晰且具有实用价值，可视化结果（图4）直观地展示了增强样本如何弥合聚类鸿沟。短板：创新更多是系统层面的巧妙组合而非底层模型突破，且实验设置（对AMI数据集进行人为截断以凸显问题）虽然有效，但也侧面说明该方法在未经“处理”的长对话自然数据上的普适性有待进一步验证，与端到端SOTA的缺席对比是重大遗憾。

🔗 **开源详情**

- 代码：论文中未提及代码链接。
- 模型权重：未提及公开模型权重。
- 数据集：评估数据集（Concatenated emotional corpus, Truncated AMI corpus）是作者基于公开数据集（ESD， AMI）构建的，论文未说明是否公开构建脚本或处理后的数据。训练数据LibriTTS-R是公开的。
- Demo：未提及在线演示。
- 复现材料：论文提供了部分实现细节（如训练步数、学习率、特征维度），但缺少完整的配置文件、训练日志、预训练检查点或更详尽的超参数列表。
- 论文中引用的开源项目：GST[11]， Vevo[12]， ECAPA-TDNN[4]， BigVGAN[14]， 谱聚类工具[15]， dscore评分工具[1]。
- 开源计划：论文中未提及开源计划。

---

[← 返回 ICASSP 2026 论文分析](/audio-paper-digest-blog/posts/icassp2026-summary/)

📌 **核心摘要**

1.  解决什么问题：说话人日志系统常因同一说话人因情绪、健康状况等产生的内在语音风格差异（说话人内变异性），而将同一人的语音片段错误聚类为不同说话人（分裂错误）。
2.  方法核心：提出一个两阶段框架，利用一个风格可控的语音生成模型进行数据增强。第一阶段（内容风格建模）使用GST学习无监督的风格表征；第二阶段（声学建模）使用条件流匹配生成目标说话人的语音，保持身份但变化风格。
3.  新在哪里：将先进的语音合成技术（结合GST与流匹配）专门用于说话人日志的数据增强。生成模型输出与原始音频的说话人嵌入混合，用于增强后续聚类的鲁棒性，该流程可即插即用，无需重训核心聚类模型。
4.  主要实验结果：
    *   在模拟情感语音数据集上，应用增强后，说话人日志错误率（DER）从10.71%降至5.48%，降幅49%，说话人计数更准确（平均3.06→2.76）。图4的t-SNE可视化显示，增强样本帮助合并了原本分裂的聚类。
    *   在截断的AMI真实对话数据集上，增强对短语音（15秒、30秒）效果显著，DER分别降低22%和35%；对长语音（>60秒）无显著提升也无负面影响（图5）。
    *   关键表格（来自Table 1）：

    | 方法      | DER (%) | Miss (%) | FA (%) | Conf (%) | 估计说话人数 |
    |-----------|---------|----------|--------|----------|--------------|
    | 无增强    | 10.71   | 0.00     | 0.00   | 10.70    | 3.06         |
    | 有增强 | 5.48 | 0.00     | 0.00   | 5.48 | 2.76     |

5.  实际意义：为处理真实场景中（如会议、访谈）说话人语音风格多变导致的日志错误提供了一种实用的数据增强解决方案，能提升现有模块化系统的鲁棒性。
6.  主要局限性：方法依赖初始聚类的质量和文本转录；生成的语音质量可能引入新噪声；与当前端到端（EEND等）SOTA说话人日志模型的集成与效果未探索。

---

