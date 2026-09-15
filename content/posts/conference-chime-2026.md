---
title: "chime-2026 论文深度解读"
date: 2026-09-14
draft: false
paper_digest_pipeline_owned: true
tags: ["波束成形","大语言模型","多模态学习","多任务学习","多通道","会议转录","流式处理","麦克风阵列","模型集成","目标说话人提取","强化学习","弱监督学习","时频分析","实时处理","数据增强","说话人分离标注","统计分析","严格因果","音视频","音视频语音分离","音视频语音识别","语音","语音增强","长音频处理","助听器","注意力机制","状态空间模型","RNN"]
categories: ["chime-2026 论文"]
description: "共收录 14 篇 chime-2026 会议论文的 Reader 深度解读"
paper_digest_page_type: index
paper_digest_reader_quality: "reader-facing-v3"
paper_digest_taxonomy_contract: "paper-taxonomy-flat-tags-compat-v1"
paper_digest_taxonomy_selection_contract: "paper-taxonomy-selection-v1"
paper_digest_taxonomy_registry_version: "paper-taxonomy-v1"
paper_digest_taxonomy_registry_sha256: "15c82a567ce5a55dc1175684ed08b64c158558639d9c8fb822c9587ec32a8778"
paper_digest_taxonomy_scope: "aggregate-primary-task-counts"
---

# chime-2026 论文深度解读

本汇总收录 authenticated plan 选择集内全部 14 篇已完成分析、重标和单篇 staging 的论文。

🏷️ 标签说明：本期使用新版受控 taxonomy；热门方向只统计主任务。

## ⚡ 今日概览

✅ authenticated plan 入选 14 篇 → 🔬 深度分析、Reader 与页面投影完成

### 🏷️ 热门方向

| 方向（仅主任务） | 数量 |
|---|---:|
| #音视频语音识别 | 7 篇 |
| #目标说话人提取 | 5 篇 |
| #语音增强 | 2 篇 |

## 📊 论文评分排行榜

| 排名 | Reader 中文题目 | 英文题目 | 八维评分 | 分档 | 文档类型 | 主任务 |
|---:|---|---|---|---|---|---|
| 1 | [八人四会话强重叠下先用视觉定界再抽取转写的级联路线](/posts/conference-chime-2026-conference-paper-id-jiang26-chime-b5b2f79b4a/) | [The USTC\-NERCSLIP Systems for the CHiME\-9 MCoRec Challenge](/posts/conference-chime-2026-conference-paper-id-jiang26-chime-b5b2f79b4a/) | **7.8/10** · 创新 1.5/2 · 技术严谨 1.2/1.5 · 实验充分 1.0/1.5 · 清晰度 0.8/1 · 影响力 1.0/1.5 · 开源 1.0/1.5 · 可复现 0.1/0.5 · 工程/实践 1.2/1.5 | 前25% | 系统技术报告 | #音视频语音识别 |
| 2 | [重叠对话先听清谁再分清哪一桌：长时视听目标说话人识别加语义聚类](/posts/conference-chime-2026-conference-paper-id-klement26-chime-715146ec20/) | [BUT System Description for CHiME\-9 MCoRec Challenge](/posts/conference-chime-2026-conference-paper-id-klement26-chime-715146ec20/) | **7.6/10** · 创新 1.2/2 · 技术严谨 1.0/1.5 · 实验充分 1.1/1.5 · 清晰度 0.8/1 · 影响力 1.0/1.5 · 开源 1.0/1.5 · 可复现 0.3/0.5 · 工程/实践 1.2/1.5 | 前25% | 系统技术报告 | #音视频语音识别 |
| 3 | [重叠越密越要看嘴型：NJU\-AALAB 用数据清洗与模板混合加持视听识别](/posts/conference-chime-2026-conference-paper-id-song26-chime-079c21d66e/) | [The NJU\-AALAB Systems for the CHiME\-9 MCoRec Challenge](/posts/conference-chime-2026-conference-paper-id-song26-chime-079c21d66e/) | **7.2/10** · 创新 1.1/2 · 技术严谨 1.0/1.5 · 实验充分 1.0/1.5 · 清晰度 0.8/1 · 影响力 0.8/1.5 · 开源 1.0/1.5 · 可复现 0.3/0.5 · 工程/实践 1.2/1.5 | 前50% | 系统技术报告 | #音视频语音识别 |
| 4 | [相位对不齐就不能用细粒度损失：用对齐参考加递归增强做 20 毫秒可穿戴目标语音提取](/posts/conference-chime-2026-conference-paper-id-hu26-chime-e0233f6052/) | [Training Low\-Latency Target Speech Extraction for Wearable Devices Using Phase\- and Amplitude\-Aligned Data in the CHiME\-9 ECHI Task](/posts/conference-chime-2026-conference-paper-id-hu26-chime-e0233f6052/) | **6.8/10** · 创新 1.3/2 · 技术严谨 1.2/1.5 · 实验充分 1.0/1.5 · 清晰度 0.8/1 · 影响力 1.0/1.5 · 开源 0.0/1.5 · 可复现 0.3/0.5 · 工程/实践 1.2/1.5 | 前50% | 系统技术报告 | #目标说话人提取 |
| 5 | [重叠语音下先看眼神再听声音：互视聚类与双模型输出融合的 MCoRec 系统](/posts/conference-chime-2026-conference-paper-id-li26-chime-b8835425a9/) | [Conversation Clustering by Mutual Gaze Estimation and AV\-ASR by Dual Model Output Fusion](/posts/conference-chime-2026-conference-paper-id-li26-chime-b8835425a9/) | **6.4/10** · 创新 1.2/2 · 技术严谨 1.0/1.5 · 实验充分 1.1/1.5 · 清晰度 0.8/1 · 影响力 1.0/1.5 · 开源 0.0/1.5 · 可复现 0.3/0.5 · 工程/实践 1.0/1.5 | 前50% | 系统技术报告 | #音视频语音识别 |
| 6 | [先消近讲串扰再做视听提取：用增强近讲语音做伪标签弥合仿真与真实鸡尾酒会差距](/posts/conference-chime-2026-conference-paper-id-ling26-chime-45ee7e402c/) | [The SUSTech AILab System Description for CHiME\-9 MCoRec Challenge](/posts/conference-chime-2026-conference-paper-id-ling26-chime-45ee7e402c/) | **6.2/10** · 创新 1.2/2 · 技术严谨 1.0/1.5 · 实验充分 1.0/1.5 · 清晰度 0.7/1 · 影响力 1.0/1.5 · 开源 0.0/1.5 · 可复现 0.3/0.5 · 工程/实践 1.0/1.5 | 前50% | 系统技术报告 | #音视频语音识别 |
| 7 | [先压住佩戴者自己的声音，再找对话对象：CHiME\-9 ECHI 三阶段提取解读](/posts/conference-chime-2026-conference-paper-id-zhao26-chime-b62bba99af/) | [A Three\-Stage System for CHiME\-9 ECHI: Self\-Interference Suppression, Target Speaker Extraction, and Post\-Processing](/posts/conference-chime-2026-conference-paper-id-zhao26-chime-b62bba99af/) | **6.0/10** · 创新 1.2/2 · 技术严谨 1.0/1.5 · 实验充分 1.0/1.5 · 清晰度 0.7/1 · 影响力 0.8/1.5 · 开源 0.0/1.5 · 可复现 0.3/0.5 · 工程/实践 1.0/1.5 | 前50% | 系统技术报告 | #目标说话人提取 |
| 8 | [多通道子带切分与说话人调制的实时目标语音提取：MBSRNN 如何把空间线索装进 20 毫秒](/posts/conference-chime-2026-conference-paper-id-jhou26-chime-9d1707d46e/) | [A Multichannel Band\-split Recurrent Architecture for Real\-time Speaker\-conditioned Speech Enhancement](/posts/conference-chime-2026-conference-paper-id-jhou26-chime-9d1707d46e/) | **5.9/10** · 创新 1.2/2 · 技术严谨 1.0/1.5 · 实验充分 0.8/1.5 · 清晰度 0.8/1 · 影响力 0.8/1.5 · 开源 0.0/1.5 · 可复现 0.3/0.5 · 工程/实践 1.0/1.5 | 前50% | 系统技术报告 | #目标说话人提取 |
| 9 | [同一套因果 Mamba 核心如何兼顾 16 毫秒流式与高延迟离线增强](/posts/conference-chime-2026-conference-paper-id-chao26-chime-5fdf8aadec/) | [A Unified Latency\-Flexible Framework with a Causal Mamba Core for Multichannel Speech Enhancement](/posts/conference-chime-2026-conference-paper-id-chao26-chime-5fdf8aadec/) | **5.8/10** · 创新 1.2/2 · 技术严谨 1.0/1.5 · 实验充分 0.8/1.5 · 清晰度 0.7/1 · 影响力 0.8/1.5 · 开源 0.0/1.5 · 可复现 0.3/0.5 · 工程/实践 1.0/1.5 | 前50% | 系统技术报告 | #语音增强 |
| 10 | [不动主模型只调混合旋钮：用感知奖励微调多通道语音增强](/posts/conference-chime-2026-conference-paper-id-haghbin26-chime-4b857d0686/) | [Reinforcement Learning for Multi\-Channel Speech Enhancement](/posts/conference-chime-2026-conference-paper-id-haghbin26-chime-4b857d0686/) | **5.7/10** · 创新 1.1/2 · 技术严谨 0.9/1.5 · 实验充分 0.9/1.5 · 清晰度 0.7/1 · 影响力 0.8/1.5 · 开源 0.0/1.5 · 可复现 0.3/0.5 · 工程/实践 1.0/1.5 | 前50% | 应用研究 | #语音增强 |
| 11 | [不重建波形也能帮识别：在中间表示上练目标说话人提取](/posts/conference-chime-2026-conference-paper-id-hartanto26-chime-6540b34bc1/) | [Science Tokyo CHiME\-9 MCoRec System Description](/posts/conference-chime-2026-conference-paper-id-hartanto26-chime-6540b34bc1/) | **5.6/10** · 创新 1.0/2 · 技术严谨 1.2/1.5 · 实验充分 0.6/1.5 · 清晰度 0.8/1 · 影响力 0.7/1.5 · 开源 0.0/1.5 · 可复现 0.3/0.5 · 工程/实践 1.0/1.5 | 前50% | 系统技术报告 | #音视频语音识别 |
| 12 | [二十毫秒内先分区再跨波束提纯：多级多输入多输出目标语音提取如何兼顾延迟与感知质量](/posts/conference-chime-2026-conference-paper-id-tu26-chime-67091f0693/) | [A Low\-Latency Multi\-Stage MIMO System with Cross\-beam Interaction for CHiME\-9 Task 2 \(ECHI\)](/posts/conference-chime-2026-conference-paper-id-tu26-chime-67091f0693/) | **5.5/10** · 创新 1.2/2 · 技术严谨 1.0/1.5 · 实验充分 0.8/1.5 · 清晰度 0.6/1 · 影响力 0.8/1.5 · 开源 0.0/1.5 · 可复现 0.1/0.5 · 工程/实践 1.0/1.5 | 前50% | 系统技术报告 | #目标说话人提取 |
| 13 | [不估相位、只控增益：有界掩蔽与交叉注意力如何在 20 毫秒内做目标说话人提取](/posts/conference-chime-2026-conference-paper-id-sharma26-chime-e541ba0d94/) | [Perceptually Motivated Low\-Latency Target Speaker Extraction for CHiME\-9 ECHI](/posts/conference-chime-2026-conference-paper-id-sharma26-chime-e541ba0d94/) | **5.4/10** · 创新 1.0/2 · 技术严谨 1.0/1.5 · 实验充分 0.8/1.5 · 清晰度 0.7/1 · 影响力 0.8/1.5 · 开源 0.0/1.5 · 可复现 0.1/0.5 · 工程/实践 1.0/1.5 | 后50% | 系统技术报告 | #目标说话人提取 |
| 14 | [不先卷识别率：以对话聚类带动联合误差下降的 AUVIS 系统](/posts/conference-chime-2026-conference-paper-id-ackermann26-chime-b818fe5a3e/) | [The AUVIS System for the CHiME\-9 Multi\-Modal Context\-aware Recognition \(MCoRec\) Challenge](/posts/conference-chime-2026-conference-paper-id-ackermann26-chime-b818fe5a3e/) | **5.1/10** · 创新 0.8/2 · 技术严谨 1.0/1.5 · 实验充分 0.6/1.5 · 清晰度 0.7/1 · 影响力 0.7/1.5 · 开源 0.0/1.5 · 可复现 0.3/0.5 · 工程/实践 1.0/1.5 | 后50% | 系统技术报告 | #音视频语音识别 |

---

## 📋 论文列表

### 1. [八人四会话强重叠下先用视觉定界再抽取转写的级联路线](/posts/conference-chime-2026-conference-paper-id-jiang26-chime-b5b2f79b4a/)

> 英文题目：*[The USTC\-NERCSLIP Systems for the CHiME\-9 MCoRec Challenge](/posts/conference-chime-2026-conference-paper-id-jiang26-chime-b5b2f79b4a/)*

标签：#多模态学习 #大语言模型 #音视频语音识别 #音视频语音分离

评分：**7.8/10** | 创新 1.5/2 | 技术严谨 1.2/1.5 | 实验充分 1.0/1.5 | 清晰度 0.8/1 | 影响力 1.0/1.5 | 开源 1.0/1.5 | 可复现 0.1/0.5 | 工程/实践 1.2/1.5

排名：前25% | 文档类型：系统技术报告 | 主任务：#音视频语音识别 | 主方法：#多模态学习

会议来源：[官方记录](https://www.isca-archive.org/chime_2026/jiang26_chime.html) · [官方 PDF](https://www.isca-archive.org/chime_2026/jiang26_chime.pdf)

👥 **作者与机构**

- Ya Jiang：机构信息未能从会议 PDF 纯文本可靠映射
- Ruoyu Wang：机构信息未能从会议 PDF 纯文本可靠映射
- Jingxuan Zhang：机构信息未能从会议 PDF 纯文本可靠映射
- Jun Du：机构信息未能从会议 PDF 纯文本可靠映射
- Yi Han：机构信息未能从会议 PDF 纯文本可靠映射
- Zihao Quan：机构信息未能从会议 PDF 纯文本可靠映射
- Hang Chen：机构信息未能从会议 PDF 纯文本可靠映射
- Yeran Yang：机构信息未能从会议 PDF 纯文本可靠映射
- Kongzhi Zheng：机构信息未能从会议 PDF 纯文本可靠映射
- Zhuo Chen：机构信息未能从会议 PDF 纯文本可靠映射
- Yanhui Tu：机构信息未能从会议 PDF 纯文本可靠映射
- Shutong Niu：机构信息未能从会议 PDF 纯文本可靠映射
- Changfeng Xi：机构信息未能从会议 PDF 纯文本可靠映射
- Mengzhi Wang：机构信息未能从会议 PDF 纯文本可靠映射
- Zhongbin Wu：机构信息未能从会议 PDF 纯文本可靠映射
- Jieru Chen：机构信息未能从会议 PDF 纯文本可靠映射
- Henghui Zhi：机构信息未能从会议 PDF 纯文本可靠映射
- Weiyi Shi：机构信息未能从会议 PDF 纯文本可靠映射
- Shuhang Wu：机构信息未能从会议 PDF 纯文本可靠映射
- Genshun Wan：机构信息未能从会议 PDF 纯文本可靠映射
- Jia Pan：机构信息未能从会议 PDF 纯文本可靠映射
- Jianqing Gao：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

该任务输入为单通道远场混叠音频与360度视频切分的人脸轨迹，输出为分说话人转写与会话归属，难点是最多8人多会话并行且重叠密集、目标语音持续被竞争对话压制。流水线先由音视频主动说话人检测估计帧级活动并切分说话人边界，其输出的时间段与唇动视频一起进入音视频目标语音抽取以分离重叠语音流。抽取的增强语音与全脸加唇部视觉随后送入融合Whisper与大语言模型的音视频语音识别，经后验概率平均与ROVER多系统融合生成转写。最后大语言模型以转写文本、时间戳与基线说话人顺序为输入做两阶段零样本会话聚类并经多次选择投票融合。与官方基线相比，关键机制差异在于用大规模音视频自监督预训练编码器与全脸身份线索构建三模态抽取，并在识别端以跨注意力向冻结Whisper注入视觉及用适配器连接Qwen解码器。在D'dev精修开发集评测设置下，AVTSE Model II系统的WER为30\.82%，低于原始音频Original系统的WER 31\.23%。该结论适用边界受限于官方开发集及其剔除3个错位样本的精修子集，对未见房间、佩戴遮挡与标注噪声的泛化尚未验证，原文未披露训练、推理或部署成本。

🔗 **开源资源**

- 模型相关资源：<https://huggingface.co/Qwen> — 链接可访问（HTTP 200）
- 模型相关资源：<https://huggingface.co/deepseek-ai> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 2. [重叠对话先听清谁再分清哪一桌：长时视听目标说话人识别加语义聚类](/posts/conference-chime-2026-conference-paper-id-klement26-chime-715146ec20/)

> 英文题目：*[BUT System Description for CHiME\-9 MCoRec Challenge](/posts/conference-chime-2026-conference-paper-id-klement26-chime-715146ec20/)*

标签：#多模态学习 #大语言模型 #长音频处理 #音视频 #音视频语音识别

评分：**7.6/10** | 创新 1.2/2 | 技术严谨 1.0/1.5 | 实验充分 1.1/1.5 | 清晰度 0.8/1 | 影响力 1.0/1.5 | 开源 1.0/1.5 | 可复现 0.3/0.5 | 工程/实践 1.2/1.5

排名：前25% | 文档类型：系统技术报告 | 主任务：#音视频语音识别 | 主方法：#多模态学习

会议来源：[官方记录](https://www.isca-archive.org/chime_2026/klement26_chime.html) · [官方 PDF](https://www.isca-archive.org/chime_2026/klement26_chime.pdf)

👥 **作者与机构**

- Dominik Klement：机构信息未能从会议 PDF 纯文本可靠映射
- Alexander Polok：机构信息未能从会议 PDF 纯文本可靠映射
- Nguyen Hai Phong：机构信息未能从会议 PDF 纯文本可靠映射
- Prachi Singh：机构信息未能从会议 PDF 纯文本可靠映射
- Lukáš Burget：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

面向鸡尾酒会多会话并行场景，系统需从单通道混合音频与多说话人唇部视频中输出目标说话人转写，并将参与者划分至各自对话组，重叠严重与视觉缺失是主要难点。流程先由视觉编码器提取目标唇动特征并经时序对齐后门控注入声学编码器，再由时间和时长换能器解码器完成长时单遍解码得到各说话人转写，随后大语言模型先判别活跃与被动说话人，再对活跃者做两两话题相似度估计与层次聚类，被动者回退至重叠度分配。该设计区别于短句切分与纯重叠启发式聚类之处在于全长上下文解码与语义相似度主导分组。在MCoRec开发集上所选系统取得词错率Word Error Rate为33\.69%与聚类F1为0\.967，相对官方基线49\.90%与0\.815分别改善16\.21个百分点与0\.152，联合分数从0\.355降至0\.184。结论仅在该挑战数据分布与提供人脸轨迹条件下成立，视觉缺失严重、话题相近或转写质量骤降时分组可靠性尚未验证。原文未披露训练、推理或部署成本。

🔗 **开源资源**

- 代码相关资源：<https://github.com/BUTSpeechFIT/CHiME-9-AV-TS-ASR> → <https://github.com/BUTSpeechFIT/CHiME-9-MCoRec-AV-TS-ASR> — 链接可访问（HTTP 200）
- 第三方资源：<https://www.chimechallenge.org/current/task1/results> — 链接不可用（HTTP 404）
- 第三方资源：<https://dspy.ai/learn/programming/signatures/> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 3. [重叠越密越要看嘴型：NJU\-AALAB 用数据清洗与模板混合加持视听识别](/posts/conference-chime-2026-conference-paper-id-song26-chime-079c21d66e/)

> 英文题目：*[The NJU\-AALAB Systems for the CHiME\-9 MCoRec Challenge](/posts/conference-chime-2026-conference-paper-id-song26-chime-079c21d66e/)*

标签：#数据增强 #多模态学习 #大语言模型 #音视频 #音视频语音识别

评分：**7.2/10** | 创新 1.1/2 | 技术严谨 1.0/1.5 | 实验充分 1.0/1.5 | 清晰度 0.8/1 | 影响力 0.8/1.5 | 开源 1.0/1.5 | 可复现 0.3/0.5 | 工程/实践 1.2/1.5

排名：前50% | 文档类型：系统技术报告 | 主任务：#音视频语音识别 | 主方法：#多模态学习

会议来源：[官方记录](https://www.isca-archive.org/chime_2026/song26_chime.html) · [官方 PDF](https://www.isca-archive.org/chime_2026/song26_chime.pdf)

👥 **作者与机构**

- Zeyan Song：机构信息未能从会议 PDF 纯文本可靠映射
- Yushi Wang：机构信息未能从会议 PDF 纯文本可靠映射
- Jing Lu：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

CHiME\-9 MCoRec要求从多人高重叠音视频中完成目标说话人转写与多会话聚类，输入为麦克风音频与目标唇部视频，输出为逐说话人文本与会话归属，难点在于并发说话人多、重叠严重与低信噪比干扰。系统保留基线主动说话人检测切分目标语音边界，其输出的时间戳与语音段进入音视频语音识别模块。音视频语音识别以唇动为条件抑制干扰并解码文本，文本与时间戳再一并送入本地部署的大语言模型。大语言模型按说话人分组并开启深度思考同时推断会话聚类标签与校正识别假设，形成三段式流水线。相对已有基线混合仿真的关键差异是用目标域标注统计的模板驱动仿真编码背景占用与并发重叠结构，并去除目标静音伪标签以缓解预训练与目标数据失配。在MCoRec开发集评测条件下，模板采样AV\-HuBERT微调后的WER为42\.88%，低于预训练阶段的WER 49\.76%。该结论适用边界限于保留基线主动说话人检测并在目标域微调的流水线，跨场景泛化与端到端重叠分离尚未验证。训练成本与推理开销受限于大规模预训练微调，AV\-HuBERT微调需两块硬件RTX 5880，会话聚类每会话约100秒并消耗约9\.7k tokens。

🔗 **开源资源**

- 模型相关资源：<https://huggingface.co/Qwen/Qwen3-8B> — 链接可访问（HTTP 200）
- 数据相关资源：<https://huggingface.co/datasets/nguyenvulebinh/> → <https://huggingface.co/nguyenvulebinh/datasets> — 链接可访问（HTTP 200）
- 数据相关资源：<https://www.chimechallenge.org/current/task1/> — 链接不可用（HTTP 404）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 4. [相位对不齐就不能用细粒度损失：用对齐参考加递归增强做 20 毫秒可穿戴目标语音提取](/posts/conference-chime-2026-conference-paper-id-hu26-chime-e0233f6052/)

> 英文题目：*[Training Low\-Latency Target Speech Extraction for Wearable Devices Using Phase\- and Amplitude\-Aligned Data in the CHiME\-9 ECHI Task](/posts/conference-chime-2026-conference-paper-id-hu26-chime-e0233f6052/)*

标签：#助听器 #波束成形 #实时处理 #语音 #目标说话人提取

评分：**6.8/10** | 创新 1.3/2 | 技术严谨 1.2/1.5 | 实验充分 1.0/1.5 | 清晰度 0.8/1 | 影响力 1.0/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 1.2/1.5

排名：前50% | 文档类型：系统技术报告 | 主任务：#目标说话人提取 | 主方法：#波束成形

会议来源：[官方记录](https://www.isca-archive.org/chime_2026/hu26_chime.html) · [官方 PDF](https://www.isca-archive.org/chime_2026/hu26_chime.pdf)

👥 **作者与机构**

- Dengxiang Hu：机构信息未能从会议 PDF 纯文本可靠映射
- Tomohiro Nakatani：机构信息未能从会议 PDF 纯文本可靠映射
- Naoyuki Kamo：机构信息未能从会议 PDF 纯文本可靠映射
- Marc Delcorix：机构信息未能从会议 PDF 纯文本可靠映射
- Tsubasa Ochiai：机构信息未能从会议 PDF 纯文本可靠映射
- Shoji Makino：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

CHiME\-9 ECHI任务要求从佩戴者所戴多麦克风设备录音中实时提取除佩戴者外的3路目标说话人语音，难点在于极低信噪比、佩戴者强语音干扰、头部运动导致的空变特性以及缺少相位对齐的干净训练参考。系统先以贴近到远端麦克风投影（Close\-to\-Distant microphone projection，C2D）生成相位与幅度对齐的训练参考，使细粒度目标可训，再以固定系数零陷波束成形（Null Beamforming，NBF）抑制佩戴者语音得到递归初值，最后由确定性递归增强（Deterministic Recursive Enhancement，DRE）复用同一增强网络逐轮精炼目标语音。与仅用官方非对齐参考和单遍因果网络的基线不同，该链路把参考对齐、空域抑制与迭代精炼解耦为可递进优化的低延迟流水线。在Aria设备开发集与评估集上，所提交的System\-2相对官方基线将短时客观可懂度（Short\-Time Objective Intelligibility，STOI）从0\.50提升至0\.56与0\.57，主观总体质量与可懂度亦同步改善。结论目前仅在Aria可穿戴录音与20 ms算法延迟约束下得到验证，对助听器形态、多语种与强混响外推尚未证明。原文未披露训练、推理或部署成本。

🔗 **开源资源**

本次未形成可展示的已核验资源记录，开放状态尚未核实。
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 5. [重叠语音下先看眼神再听声音：互视聚类与双模型输出融合的 MCoRec 系统](/posts/conference-chime-2026-conference-paper-id-li26-chime-b8835425a9/)

> 英文题目：*[Conversation Clustering by Mutual Gaze Estimation and AV\-ASR by Dual Model Output Fusion](/posts/conference-chime-2026-conference-paper-id-li26-chime-b8835425a9/)*

标签：#模型集成 #多模态学习 #音视频 #语音 #音视频语音识别

评分：**6.4/10** | 创新 1.2/2 | 技术严谨 1.0/1.5 | 实验充分 1.1/1.5 | 清晰度 0.8/1 | 影响力 1.0/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 1.0/1.5

排名：前50% | 文档类型：系统技术报告 | 主任务：#音视频语音识别 | 主方法：#模型集成

会议来源：[官方记录](https://www.isca-archive.org/chime_2026/li26_chime.html) · [官方 PDF](https://www.isca-archive.org/chime_2026/li26_chime.pdf)

👥 **作者与机构**

- Zhengyang Li：机构信息未能从会议 PDF 纯文本可靠映射
- Aziz Hakiri：机构信息未能从会议 PDF 纯文本可靠映射
- Zehang Wu：机构信息未能从会议 PDF 纯文本可靠映射
- Thomas Graave：机构信息未能从会议 PDF 纯文本可靠映射
- Ernst Seidel：机构信息未能从会议 PDF 纯文本可靠映射
- Yihui Fu：机构信息未能从会议 PDF 纯文本可靠映射
- Björn Möller：机构信息未能从会议 PDF 纯文本可靠映射
- Patrick Blumenberg：机构信息未能从会议 PDF 纯文本可靠映射
- Tim Fingscheidt：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

CHiME 9多模态上下文感知识别任务输入中央360度音视频流与说话人边界框轨迹，要求输出互不相交的会话分组与每位目标说话人的转写文本，难点是多组并发会话与严重语音重叠导致语音活动检测失准与识别删除加剧。系统先将等距圆柱投影帧转为透视视图并用UniGaze估计注视方向，再计算注视到目标夹角与随角间距自适应的动态门限得到方向注意力，并取双向最小值形成相互注视分数。接着对注视相似度与语音帧重叠分数做非对角最小最大归一化并用均方根融合，以一减融合分作距离送入完全连接层次聚类完成分组，分组结果决定后续按说话人计分的识别评估归属。最后并行运行AV\-HuBERT CTC/注意力模型与基于Whisper medium的双用途模型，当基线输出为空时用后者回填，以同时保留声学对齐与大语言先验互补，这是相对仅用帧重叠启发与单一基线识别的关键机制差异。在挑战评测设置Deval下，融合系统的WER为48\.67%，低于基线的WER 51\.99%。该结论适用边界受限于圆周等高排布、全部说话人可见帧筛选与挑战域内调参，极端头姿、遮挡及非面对面会话属于尚未验证的失败条件。原文未披露训练、推理或部署成本。

🔗 **开源资源**

- 第三方资源：<https://pypi.org/project/unigaze/> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 6. [先消近讲串扰再做视听提取：用增强近讲语音做伪标签弥合仿真与真实鸡尾酒会差距](/posts/conference-chime-2026-conference-paper-id-ling26-chime-45ee7e402c/)

> 英文题目：*[The SUSTech AILab System Description for CHiME\-9 MCoRec Challenge](/posts/conference-chime-2026-conference-paper-id-ling26-chime-45ee7e402c/)*

标签：#会议转录 #弱监督学习 #音视频 #音视频语音识别 #目标说话人提取

评分：**6.2/10** | 创新 1.2/2 | 技术严谨 1.0/1.5 | 实验充分 1.0/1.5 | 清晰度 0.7/1 | 影响力 1.0/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 1.0/1.5

排名：前50% | 文档类型：系统技术报告 | 主任务：#音视频语音识别 | 主方法：#弱监督学习

会议来源：[官方记录](https://www.isca-archive.org/chime_2026/ling26_chime.html) · [官方 PDF](https://www.isca-archive.org/chime_2026/ling26_chime.pdf)

👥 **作者与机构**

- Tongtao Ling：机构信息未能从会议 PDF 纯文本可靠映射
- Pengjie Shen：机构信息未能从会议 PDF 纯文本可靠映射
- Zhong\-Qiu Wang：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

多模态上下文感知识别需从单通道远场音频与全景视频中转写鸡尾酒会场景下每位说话人的语音并判断说话人所属会话，难点在于真实重叠、混响与近场麦克风串音使直接音视频语音识别错误率极高。所提两阶段框架先以跨串音降低网络堆叠近场与远场信号无监督抑制近场串音，得到更干净的近场语音。再经前向卷积预测对齐到远场后作为伪标签，用于将在仿真数据预训练的视听目标说话人提取网络微调到真实会议条件。最后对提取的目标语音做主动说话人检测、音视频识别转写与基于时间的会话聚类，形成完整链路。相对仅微调识别器的基线，该前端显式分离与后端识别互补，避免了把含串音的近场信号直接当监督。在MCoRec开发集评测任务下，PuL\-AVTSE结合AV\-HuBERT CTC/Attention的Joint ASR\-Clustering Error Rate为33\.78%，低于基线AV\-HuBERT CTC/Attention的Joint ASR\-Clustering Error Rate 38\.21%。该结论适用边界受限于MCoRec真实会议场景且对标注时间戳噪声敏感，在已做域适应的识别器上增益明显收窄，原文未披露训练、推理或部署成本。

🔗 **开源资源**

本次未形成可展示的已核验资源记录，开放状态尚未核实。
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 7. [先压住佩戴者自己的声音，再找对话对象：CHiME\-9 ECHI 三阶段提取解读](/posts/conference-chime-2026-conference-paper-id-zhao26-chime-b62bba99af/)

> 英文题目：*[A Three\-Stage System for CHiME\-9 ECHI: Self\-Interference Suppression, Target Speaker Extraction, and Post\-Processing](/posts/conference-chime-2026-conference-paper-id-zhao26-chime-b62bba99af/)*

标签：#助听器 #时频分析 #麦克风阵列 #语音 #目标说话人提取

评分：**6.0/10** | 创新 1.2/2 | 技术严谨 1.0/1.5 | 实验充分 1.0/1.5 | 清晰度 0.7/1 | 影响力 0.8/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 1.0/1.5

排名：前50% | 文档类型：系统技术报告 | 主任务：#目标说话人提取 | 主方法：#时频分析

会议来源：[官方记录](https://www.isca-archive.org/chime_2026/zhao26_chime.html) · [官方 PDF](https://www.isca-archive.org/chime_2026/zhao26_chime.pdf)

👥 **作者与机构**

- Fei Zhao：机构信息未能从会议 PDF 纯文本可靠映射
- Changjiang Zhao：机构信息未能从会议 PDF 纯文本可靠映射
- Zhenlong Guo：机构信息未能从会议 PDF 纯文本可靠映射
- Wenzheng Zhang：机构信息未能从会议 PDF 纯文本可靠映射
- Yongjie Yan：机构信息未能从会议 PDF 纯文本可靠映射
- Xueliang Zhang：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

CHiME\-9 ECHI 要求从 7 通道 Aria 眼镜录音中为每个对话伙伴恢复单通道清洁语音，核心难点是佩戴者语音显著强于目标伙伴，且目标注册音频与混合中说话风格情感失配。系统采用三阶段串行流水线：第一阶段以佩戴者注册音频为条件抑制自干扰并保留空间线索，第二阶段联合原始 7 通道混合与第一阶段输出、以目标加 2 个非佩戴干扰人注册音频为对比条件提取目标，第三阶段以映射网络逼近近场语音并用第二阶段语音活动检测（Voice Activity Detection，VAD）门控回退到第一阶段输出。与仅用单目标嵌入的基线式提取相比，多干扰锚负参考与短时傅里叶变换（Short\-Time Fourier Transform，STFT）域线性滤波伪标签构成关键差异，使无中间监督时仍可分阶段训练。开发集 Aria 单人轨上最终策略 3S（PP\+VAD\+FB）短时客观可懂度（Short\-Time Objective Intelligibility，STOI）为 0\.54，高于基线的 0\.50，信号失真综合指标（Csig）为 1\.83，总质量（Covl）为 1\.38；测试集 Aria 轨上可懂度为 48\.43%，低于基线的 55\.28%，信号质量（SIG）为 3\.56，高于基线的 2\.31，整体质量（OVRL）为 2\.28，高于基线的 2\.16。该结论仅在 Aria 设备开发集与官方主客观指标上验证，对未见噪声、失配加重及求和轨以外泛化尚未证明。原文未披露训练推理成本与吞吐压力测试。

🔗 **开源资源**

- 第三方资源：<https://huggingface.co/speechbrain/spkrec-ecapa-voxceleb> — 链接可访问（HTTP 200）
- 第三方资源：<https://github.com/zhenghuatan/rVADfast> — 链接可访问（HTTP 200）
- 第三方资源：<https://huggingface.co/microsoft/wavlm-large> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 8. [多通道子带切分与说话人调制的实时目标语音提取：MBSRNN 如何把空间线索装进 20 毫秒](/posts/conference-chime-2026-conference-paper-id-jhou26-chime-9d1707d46e/)

> 英文题目：*[A Multichannel Band\-split Recurrent Architecture for Real\-time Speaker\-conditioned Speech Enhancement](/posts/conference-chime-2026-conference-paper-id-jhou26-chime-9d1707d46e/)*

标签：#助听器 #RNN #多通道 #实时处理 #目标说话人提取

评分：**5.9/10** | 创新 1.2/2 | 技术严谨 1.0/1.5 | 实验充分 0.8/1.5 | 清晰度 0.8/1 | 影响力 0.8/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 1.0/1.5

排名：前50% | 文档类型：系统技术报告 | 主任务：#目标说话人提取 | 主方法：#RNN

会议来源：[官方记录](https://www.isca-archive.org/chime_2026/jhou26_chime.html) · [官方 PDF](https://www.isca-archive.org/chime_2026/jhou26_chime.pdf)

👥 **作者与机构**

- Zeen Jhou：机构信息未能从会议 PDF 纯文本可靠映射
- Rong Chao：机构信息未能从会议 PDF 纯文本可靠映射
- You\-Jin Li：机构信息未能从会议 PDF 纯文本可靠映射
- Yu Tsao：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

CHiME\-9 ECHI任务需从助听器与可穿戴设备的多通道嘈杂录音中实时提取目标说话人，输入为含混响巴布尔噪声与干扰说话人的多麦克风波形，输出为目标语音波形，难点在于空间线索利用与极低信噪比下的说话人条件建模。所提多通道子带切分循环网络先将多通道短时傅里叶谱与注册语音频谱按33个子带切分编码，输出子带特征表示。注册语音子带特征经堆叠卷积U\-Net说话人编码器池化得到嵌入，再与含噪子带特征一同进入特征线性调制与长短期记忆交叠层实现逐层说话人条件调制。调制后特征由卷积解码器映射回目标频谱，并经分块流式推理每次输出末端信号，严格控制算法延迟。与直接从全带提取说话人嵌入的做法不同，该机制在子带粒度保留音色细节并逐层调制时频建模，因而更能提升感知频段信噪比。在CHiME\-9开发集HA设备流式评测下，MBSRNN的fwSNRseg指标为4\.43，高于基线的fwSNRseg指标2\.18。该结论适用边界限于官方训练与开发集划分及双设备配置，在更长混响、移动说话人与未见注册时长下的外推尚未验证。单秒片段处理计算量为224\.3 GMACs，在NVIDIA RTX 5090硬件上实时因子为0\.93，算法延迟为20 ms。

🔗 **开源资源**

本次未形成可展示的已核验资源记录，开放状态尚未核实。
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 9. [同一套因果 Mamba 核心如何兼顾 16 毫秒流式与高延迟离线增强](/posts/conference-chime-2026-conference-paper-id-chao26-chime-5fdf8aadec/)

> 英文题目：*[A Unified Latency\-Flexible Framework with a Causal Mamba Core for Multichannel Speech Enhancement](/posts/conference-chime-2026-conference-paper-id-chao26-chime-5fdf8aadec/)*

标签：#助听器 #状态空间模型 #严格因果 #多通道 #语音增强

评分：**5.8/10** | 创新 1.2/2 | 技术严谨 1.0/1.5 | 实验充分 0.8/1.5 | 清晰度 0.7/1 | 影响力 0.8/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 1.0/1.5

排名：前50% | 文档类型：系统技术报告 | 主任务：#语音增强 | 主方法：#状态空间模型

会议来源：[官方记录](https://www.isca-archive.org/chime_2026/chao26_chime.html) · [官方 PDF](https://www.isca-archive.org/chime_2026/chao26_chime.pdf)

👥 **作者与机构**

- Rong Chao：机构信息未能从会议 PDF 纯文本可靠映射
- Zeen Jhou：机构信息未能从会议 PDF 纯文本可靠映射
- You\-Jin Li：机构信息未能从会议 PDF 纯文本可靠映射
- Sung\-Feng Huang：机构信息未能从会议 PDF 纯文本可靠映射
- Moreno La Quatra：机构信息未能从会议 PDF 纯文本可靠映射
- Sabato Marco Siniscalchi：机构信息未能从会议 PDF 纯文本可靠映射
- Wen\-Huang Cheng：机构信息未能从会议 PDF 纯文本可靠映射
- Szu\-Wei Fu：机构信息未能从会议 PDF 纯文本可靠映射
- Yu Tsao：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

面向助听器等多通道场景，需从强噪声混响多通道观测中恢复目标说话人干净语音，同时满足严格流式因果与低延迟约束。方法链分为三步：延迟感知外壳先对多通道幅度相位与说话人条件特征做局部谱空间编码，外壳输出进入因果核心做长时建模，最后由外壳解码器重建目标语音幅度与相位。核心采用时频双路径选择性状态建模，时间分支强制单向而频率分支保留双向，外壳以左侧填充与可控移位提供显式前视。与全注意力方案的关键差异在于以线性时间状态递推替代二次自注意力，使长上下文建模与流式因果约束天然兼容并降低计算负担。在HA设备开发集整体评测设置下，Ours（causal）的STOI为0\.53，高于Baseline（official）的STOI 0\.51。该低延迟配置以0\.016s延迟与0\.005实时率运行，参数量仅1\.36M，其延迟与推理开销均显著优于基线。该结论适用边界受限于仅在HA开发集整体与目标说话人评测验证，尚未验证Aria设备、测试集泛化与主观听感，且离线高性能需1\.136s延迟与更大计算量。

🔗 **开源资源**

本次未形成可展示的已核验资源记录，开放状态尚未核实。
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 10. [不动主模型只调混合旋钮：用感知奖励微调多通道语音增强](/posts/conference-chime-2026-conference-paper-id-haghbin26-chime-4b857d0686/)

> 英文题目：*[Reinforcement Learning for Multi\-Channel Speech Enhancement](/posts/conference-chime-2026-conference-paper-id-haghbin26-chime-4b857d0686/)*

标签：#助听器 #强化学习 #多通道 #语音增强

评分：**5.7/10** | 创新 1.1/2 | 技术严谨 0.9/1.5 | 实验充分 0.9/1.5 | 清晰度 0.7/1 | 影响力 0.8/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 1.0/1.5

排名：前50% | 文档类型：应用研究 | 主任务：#语音增强 | 主方法：#强化学习

会议来源：[官方记录](https://www.isca-archive.org/chime_2026/haghbin26_chime.html) · [官方 PDF](https://www.isca-archive.org/chime_2026/haghbin26_chime.pdf)

👥 **作者与机构**

- Afrooz Haghbin：机构信息未能从会议 PDF 纯文本可靠映射
- Rodney Vaughan：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

该工作处理多通道助听语音增强，输入为模拟餐厅中4通道助听器与7通道智能眼镜采集的含噪混响语音，输出为单路目标说话人增强波形，难点是混响失真下信干噪比提升未必转化为可懂度提升。方法分三步：首先因果多通道时频网格网络基线由含噪语谱图生成时频掩蔽并经乘性变换与逆短时傅里叶变换得到增强信号，其次参考无关特征提取器从含噪输入、说话人标识与基线输出提取包含响度与谱形状的87维观测，最后近端策略优化策略输出标量混合系数并凸组合基线输出与原始多通道输入得到最终波形。与直接微调基线参数或训练单通道去噪智能体不同，该设计冻结基线只学习外部混合旋钮，换来稳定但保守的优化空间。奖励为感知函数相对基线的提升，由PESQ、STOI与SI\-SDR加权组合并经官方评测器估计，PPO截断损失约束新旧策略偏离。在CHiME9\-ECHI开发集评测下，PPO\-FT的STOI为0\.59，高于基线的STOI 0\.50。该结论适用边界受限于官方开发集与官方评测器，在助听器求和流上出现回退且尚未验证跨场景泛化与真实听障主观听感。训练成本方面原文以4秒片段在训练集上训练并保持因果低前视，推理开销满足20 ms延迟约束。

🔗 **开源资源**

本次未形成可展示的已核验资源记录，开放状态尚未核实。
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 11. [不重建波形也能帮识别：在中间表示上练目标说话人提取](/posts/conference-chime-2026-conference-paper-id-hartanto26-chime-6540b34bc1/)

> 英文题目：*[Science Tokyo CHiME\-9 MCoRec System Description](/posts/conference-chime-2026-conference-paper-id-hartanto26-chime-6540b34bc1/)*

标签：#多任务学习 #音视频 #语音 #音视频语音识别 #目标说话人提取

评分：**5.6/10** | 创新 1.0/2 | 技术严谨 1.2/1.5 | 实验充分 0.6/1.5 | 清晰度 0.8/1 | 影响力 0.7/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 1.0/1.5

排名：前50% | 文档类型：系统技术报告 | 主任务：#音视频语音识别 | 主方法：#多任务学习

会议来源：[官方记录](https://www.isca-archive.org/chime_2026/hartanto26_chime.html) · [官方 PDF](https://www.isca-archive.org/chime_2026/hartanto26_chime.pdf)

👥 **作者与机构**

- Roland Hartanto：机构信息未能从会议 PDF 纯文本可靠映射
- Daichi Nitsu：机构信息未能从会议 PDF 纯文本可靠映射
- Nhu Minh Phuong Dinh：机构信息未能从会议 PDF 纯文本可靠映射
- Koichi Shinoda：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

多模态上下文感知识别（Multi\-Modal Context\-aware Recognition，MCoRec）要求从单个360度视频与远场音频中同时转写多达8个说话人的重叠自发对话并划分会话归属，强干扰与最小声学隔离使目标说话人建模极为困难。本文系统沿用基线流水线，先由主动说话人检测（Active Speaker Detection）与人脸关键点检测获得目标说话人时间戳与嘴部裁剪视频，再切分音视频片段送入音视频自动语音识别（Audio\-Visual Automatic Speech Recognition，AV\-ASR）转写目标文本。与级联式先分离后识别不同，本文在AV\-ASR中间表示上并联音视频目标说话人提取（Audio\-Visual Target Speaker Extraction，AV\-TSE）分支，以滤波器组（Filter Bank，FBank）特征重构为辅助目标显式约束编码器保留目标声学信息。在MCoRec开发集上，所提全层加权配置相对AV\-HuBERT CTC/Attention基线将词错误率从49\.90%降至49\.55%，绝对下降0\.35个百分点。该结论目前仅在开发集转写任务上验证，未覆盖会话聚类分支与测试集外推，且提升幅度较小而失败模式未被刻画。原文未披露训练、推理或部署成本。

🔗 **开源资源**

本次未形成可展示的已核验资源记录，开放状态尚未核实。
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 12. [二十毫秒内先分区再跨波束提纯：多级多输入多输出目标语音提取如何兼顾延迟与感知质量](/posts/conference-chime-2026-conference-paper-id-tu26-chime-67091f0693/)

> 英文题目：*[A Low\-Latency Multi\-Stage MIMO System with Cross\-beam Interaction for CHiME\-9 Task 2 \(ECHI\)](/posts/conference-chime-2026-conference-paper-id-tu26-chime-67091f0693/)*

标签：#波束成形 #多通道 #实时处理 #流式处理 #目标说话人提取

评分：**5.5/10** | 创新 1.2/2 | 技术严谨 1.0/1.5 | 实验充分 0.8/1.5 | 清晰度 0.6/1 | 影响力 0.8/1.5 | 开源 0.0/1.5 | 可复现 0.1/0.5 | 工程/实践 1.0/1.5

排名：前50% | 文档类型：系统技术报告 | 主任务：#目标说话人提取 | 主方法：#波束成形

会议来源：[官方记录](https://www.isca-archive.org/chime_2026/tu26_chime.html) · [官方 PDF](https://www.isca-archive.org/chime_2026/tu26_chime.pdf)

👥 **作者与机构**

- Yan\-Hui Tu：机构信息未能从会议 PDF 纯文本可靠映射
- Rui He：机构信息未能从会议 PDF 纯文本可靠映射
- Lele Xu：机构信息未能从会议 PDF 纯文本可靠映射
- Xiao Wang：机构信息未能从会议 PDF 纯文本可靠映射
- Changyin Sun：机构信息未能从会议 PDF 纯文本可靠映射
- Yi Fang：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

面向助听增强会话听感任务，输入为 Aria 与 HA 设备采集的多通道远场混合语音，输出为目标说话人增强语音，难点在于强混响、残留回声、频繁重叠、极低信噪比与不超过 20 ms 的硬算法延迟。系统先用轻量双向长短期记忆网络去噪器清洗近讲参考以缓解串音标签噪声，再由区域多输入多输出前端输出 5 个方位扇区复谱估计并构造目标掩蔽，接着在线波束成形器按块复用上一块权重提取目标，最后跨波束交互网络融合多波束视图压制残留干扰并做掩蔽后滤波。与单流基线直接映射相比，该链路显式引入扇区分区先验与空间滤波，使低延迟下仍保留频率分辨率与空间分辨能力。开发集个体评测下第一阶段在 Aria 将可懂度从 0\.50 提升至 0\.70、感知质量从 1\.16 提升至 1\.38，分段信噪比从 2\.34 dB 提升至 6\.36 dB；HA 上可懂度从 0\.46 提升至 0\.67、感知质量从 1\.11 提升至 1\.37；汇总评测对应达到 1\.44/0\.70 与 1\.42/0\.69；系统总延迟为 19\.875 ms。该结论仅适用于官方开发集与所用侵入式客观指标，跨设备泛化、说话人运动与主观排名外推尚未验证。原文未披露训练推理成本、参数量与实时系数。

🔗 **开源资源**

本次未形成可展示的已核验资源记录，开放状态尚未核实。
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 13. [不估相位、只控增益：有界掩蔽与交叉注意力如何在 20 毫秒内做目标说话人提取](/posts/conference-chime-2026-conference-paper-id-sharma26-chime-e541ba0d94/)

> 英文题目：*[Perceptually Motivated Low\-Latency Target Speaker Extraction for CHiME\-9 ECHI](/posts/conference-chime-2026-conference-paper-id-sharma26-chime-e541ba0d94/)*

标签：#助听器 #注意力机制 #多通道 #流式处理 #目标说话人提取

评分：**5.4/10** | 创新 1.0/2 | 技术严谨 1.0/1.5 | 实验充分 0.8/1.5 | 清晰度 0.7/1 | 影响力 0.8/1.5 | 开源 0.0/1.5 | 可复现 0.1/0.5 | 工程/实践 1.0/1.5

排名：后50% | 文档类型：系统技术报告 | 主任务：#目标说话人提取 | 主方法：#注意力机制

会议来源：[官方记录](https://www.isca-archive.org/chime_2026/sharma26_chime.html) · [官方 PDF](https://www.isca-archive.org/chime_2026/sharma26_chime.pdf)

👥 **作者与机构**

- Prachi Sharma：机构信息未能从会议 PDF 纯文本可靠映射
- Ferdinand Campe：机构信息未能从会议 PDF 纯文本可靠映射
- Dorothea Kolossa：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

助听器与智能眼镜需从多通道混响噪声混合与单通道注册语音中提取目标说话人波形，难点在于重叠语音频谱相似、复谱相位难估计及严格流式约束下易出现金属声与响度跳变。系统将多通道混合经短时傅里叶变换与卷积编码为时频特征，注册语音分支离线提取条件表征后经特征线性调制融合，再由3个因果GridNet块建模时频结构，最后估计有界增益乘参考通道复谱并逆变换输出。方法1保留全局调制但以有界幅度掩蔽加混合相位复用替代复谱直接回归以稳定相位与增益，方法2进一步将注册压缩为16个token并用交叉注意力生成逐时频点调制参数以增强重叠段选择性。在CHiME\-9 ECHI开发子集Aria个体评分评测设置下，方法2的Csig得分为1\.73，高于基线的Csig得分1\.56。与直接复谱回归基线相比，有界掩蔽与相位复用限制了极端衰减与放大，交叉注意力则实现自适应时频调制，代价是频率加权分段信噪比有所下降但可懂度保持稳定。该结论适用边界受限于16 kHz助听4通道与Aria 7通道语料及离线注册条件，尚未验证未见说话人与正式主观听测外推。系统算法延迟约20 ms且注册计算不计入流式开销，训练统一采用多分辨率STFT损失加时域L1与响度匹配。

🔗 **开源资源**

本次未形成可展示的已核验资源记录，开放状态尚未核实。
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 14. [不先卷识别率：以对话聚类带动联合误差下降的 AUVIS 系统](/posts/conference-chime-2026-conference-paper-id-ackermann26-chime-b818fe5a3e/)

> 英文题目：*[The AUVIS System for the CHiME\-9 Multi\-Modal Context\-aware Recognition \(MCoRec\) Challenge](/posts/conference-chime-2026-conference-paper-id-ackermann26-chime-b818fe5a3e/)*

标签：#统计分析 #音视频 #音视频语音识别 #说话人分离标注

评分：**5.1/10** | 创新 0.8/2 | 技术严谨 1.0/1.5 | 实验充分 0.6/1.5 | 清晰度 0.7/1 | 影响力 0.7/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 1.0/1.5

排名：后50% | 文档类型：系统技术报告 | 主任务：#音视频语音识别 | 主方法：#统计分析

会议来源：[官方记录](https://www.isca-archive.org/chime_2026/ackermann26_chime.html) · [官方 PDF](https://www.isca-archive.org/chime_2026/ackermann26_chime.pdf)

👥 **作者与机构**

- Sean Ackermann：机构信息未能从会议 PDF 纯文本可靠映射
- Michael Becker：机构信息未能从会议 PDF 纯文本可靠映射
- Erol Celik：机构信息未能从会议 PDF 纯文本可靠映射
- Magdalena Eggers：机构信息未能从会议 PDF 纯文本可靠映射
- Johannes Anton Kaiser：机构信息未能从会议 PDF 纯文本可靠映射
- Hendrik Leddin：机构信息未能从会议 PDF 纯文本可靠映射
- Adrian Nowak：机构信息未能从会议 PDF 纯文本可靠映射
- Alexander Reimann：机构信息未能从会议 PDF 纯文本可靠映射
- Dagmar Schönenberg：机构信息未能从会议 PDF 纯文本可靠映射
- Johanna Schulze：机构信息未能从会议 PDF 纯文本可靠映射
- Alison Vanzetta：机构信息未能从会议 PDF 纯文本可靠映射
- Alexandra Wasilkow：机构信息未能从会议 PDF 纯文本可靠映射
- Stefan Goetze：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

CHiME\-9多模态上下文感知识别任务输入为单点360度相机视频加远场麦克风采集的多说话人长对话，输出为带说话人归属的转写文本，难点是重叠语音、背景噪声与说话人歧义在联合语音识别聚类指标下相互放大。方法沿基线流水线形成三步链：先由主动说话人检测负责语音切分并保留基线L\-ASD模型，其分段输出同时进入识别与聚类两支。接着音视频语音识别支对切分参数解耦后重搜解码配置，以长分段保留上下文并解码文本，分段文本与语音段一并送入会话聚类。然后会话聚类支联合调优上游切分阈值与层次聚类的阈值与连接方式，对语音段按说话人归组并将归属回填到转写。与孤立优化词错率不同，该工作把主要预算投向聚类与上游切分的联合优化，并为识别与聚类分别解耦切分参数以适配不同子任务需求。在25个开发集会话评测条件下，优化系统的WER为0\.4943，低于基线的WER 0\.4987。该增益的适用边界仅限开发集与官方基线配置，尚未验证在隐藏测试集与更换主动说话人检测或声学模型后的外推性。原文未披露训练、推理或部署成本。

🔗 **开源资源**

本次未形成可展示的已核验资源记录，开放状态尚未核实。
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---
