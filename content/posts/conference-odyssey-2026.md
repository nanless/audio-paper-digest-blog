---
title: "odyssey-2026 论文深度解读"
date: 2026-09-12
draft: false
paper_digest_pipeline_owned: true
tags: ["半监督学习","病理语音评估","参数高效微调","大语言模型","低资源","端到端学习","对比学习","对抗训练","多模态学习","多任务学习","多语言","高效推理","环境声","混合专家模型","基准设计","静默语音接口","开源工具","可解释性","跨语言","零样本","领域适应","流匹配","鲁棒性","模型比较","模型集成","模型量化","模型评估","模型融合","脑信号","评测协议","迁移学习","前缀微调","少样本","生成对抗网络","生成模型","生理信号","时频分析","数据集","数据集构建","数据增强","说话人分离标注","说话人匿名化","说话人验证","统计分析","文献综述方法","无监督学习","向量量化","信号处理","形式化分析","言语感知","言语神经解码","医疗音频","音乐","音频分类","音频检索","音频深度伪造检测","音频事件检测","音频水印","音频问答","音频指纹","隐私保护","语言识别","语音","语音活动检测","语音情感识别","语音生物标志物","语音识别","语音属性识别","语音伪造检测","语音质量评估","预训练","正则化","知识蒸馏","众包评测","重叠语音检测","主观评测","注意力机制","状态空间模型","自监督学习","CNN","Conformer","LoRA"]
categories: ["odyssey-2026 论文"]
description: "共收录 52 篇 odyssey-2026 会议论文的 Reader 深度解读"
paper_digest_page_type: index
paper_digest_reader_quality: "reader-facing-v3"
paper_digest_taxonomy_contract: "paper-taxonomy-flat-tags-compat-v1"
paper_digest_taxonomy_selection_contract: "paper-taxonomy-selection-v1"
paper_digest_taxonomy_registry_version: "paper-taxonomy-v1"
paper_digest_taxonomy_registry_sha256: "15c82a567ce5a55dc1175684ed08b64c158558639d9c8fb822c9587ec32a8778"
paper_digest_taxonomy_scope: "aggregate-primary-task-counts"
---

# odyssey-2026 论文深度解读

本汇总收录 authenticated plan 选择集内全部 52 篇已完成分析、重标和单篇 staging 的论文。

🏷️ 标签说明：本期使用新版受控 taxonomy；热门方向只统计主任务。

## ⚡ 今日概览

✅ authenticated plan 入选 52 篇 → 🔬 深度分析、Reader 与页面投影完成

### 🏷️ 热门方向

| 方向（仅主任务） | 数量 |
|---|---:|
| #说话人验证 | 15 篇 |
| #病理语音评估 | 5 篇 |
| #音频深度伪造检测 | 5 篇 |
| #语音伪造检测 | 5 篇 |
| #语言识别 | 4 篇 |
| #说话人分离标注 | 3 篇 |
| #说话人匿名化 | 3 篇 |
| #言语神经解码 | 3 篇 |
| #语音属性识别 | 2 篇 |
| #静默语音接口 | 1 篇 |
| #音频分类 | 1 篇 |
| #音频检索 | 1 篇 |
| #音频水印 | 1 篇 |
| #音频指纹 | 1 篇 |
| #语音识别 | 1 篇 |
| #语音质量评估 | 1 篇 |

## 📊 论文评分排行榜

| 排名 | Reader 中文题目 | 英文题目 | 八维评分 | 分档 | 文档类型 | 主任务 |
|---:|---|---|---|---|---|---|
| 1 | [统一流程下比模型、比批量、比深度：Kiwano 如何让说话人确认结果可复现](/posts/conference-odyssey-2026-conference-paper-id-rouvier26-odyssey-7e4ce3a0dd/) | [Kiwano: A Cutting\-Edge Open\-Source Toolkit for Speaker Verification](/posts/conference-odyssey-2026-conference-paper-id-rouvier26-odyssey-7e4ce3a0dd/) | **8.3/10** · 创新 1.2/2 · 技术严谨 1.2/1.5 · 实验充分 1.2/1.5 · 清晰度 0.7/1 · 影响力 1.0/1.5 · 开源 1.5/1.5 · 可复现 0.3/0.5 · 工程/实践 1.2/1.5 | 前25% | 系统技术报告 | #说话人验证 |
| 2 | [声纹不可靠时如何认语言：声学嵌入与转写推理的互补验证](/posts/conference-odyssey-2026-conference-paper-id-olev26-odyssey-e412812978/) | [LLM\-Based Language Verification and Multimodal Ensemble for Spoken Language Recognition](/posts/conference-odyssey-2026-conference-paper-id-olev26-odyssey-e412812978/) | **8.0/10** · 创新 1.5/2 · 技术严谨 1.2/1.5 · 实验充分 1.0/1.5 · 清晰度 0.8/1 · 影响力 1.0/1.5 · 开源 1.0/1.5 · 可复现 0.3/0.5 · 工程/实践 1.2/1.5 | 前25% | 系统技术报告 | #语言识别 |
| 3 | [在单位球面上做高斯似然：以结构化说话人先验连接余弦、PLDA 与时长](/posts/conference-odyssey-2026-conference-paper-id-cumani26-odyssey-9d3708636c/) | [Spherical\-Gaussian TPSDA: combining PLDA, T\-PSDA and duration models for speaker verification](/posts/conference-odyssey-2026-conference-paper-id-cumani26-odyssey-9d3708636c/) | **7.7/10** · 创新 1.2/2 · 技术严谨 1.2/1.5 · 实验充分 1.2/1.5 · 清晰度 0.8/1 · 影响力 1.0/1.5 · 开源 1.0/1.5 · 可复现 0.3/0.5 · 工程/实践 1.0/1.5 | 前25% | 方法研究 | #说话人验证 |
| 4 | [2 比特是膝点：说话人确认中量化误差从哪里来、如何翻转判决](/posts/conference-odyssey-2026-conference-paper-id-leguillier26b-odyssey-855ecf0964/) | [On Low\-Bit Quantization Errors in Speaker Verification: Diagnostic and Mitigation](/posts/conference-odyssey-2026-conference-paper-id-leguillier26b-odyssey-855ecf0964/) | **7.7/10** · 创新 1.2/2 · 技术严谨 1.0/1.5 · 实验充分 1.2/1.5 · 清晰度 0.8/1 · 影响力 1.0/1.5 · 开源 1.2/1.5 · 可复现 0.3/0.5 · 工程/实践 1.0/1.5 | 前25% | 方法研究 | #说话人验证 |
| 5 | [增强把分类变难之后，损失与采样如何跟上：速度扰动与混合增强的协同](/posts/conference-odyssey-2026-conference-paper-id-bousquet26-odyssey-5ffd578d5f/) | [Harmonizing data augmentation and loss function for speaker recognition: examples with speed perturbation, mixup and mixout](/posts/conference-odyssey-2026-conference-paper-id-bousquet26-odyssey-5ffd578d5f/) | **7.5/10** · 创新 1.2/2 · 技术严谨 1.2/1.5 · 实验充分 1.2/1.5 · 清晰度 0.7/1 · 影响力 0.9/1.5 · 开源 1.0/1.5 · 可复现 0.3/0.5 · 工程/实践 1.0/1.5 | 前25% | 方法研究 | #说话人验证 |
| 6 | [固定条件缺语种、开放条件模型太重：I4U 用多嵌入与虚拟说话人补齐 SRE24](/posts/conference-odyssey-2026-conference-paper-id-colibro26-odyssey-a9d9da8650/) | [I4U’s Official and Streamlined Audio Systems for NIST SRE24](/posts/conference-odyssey-2026-conference-paper-id-colibro26-odyssey-a9d9da8650/) | **7.5/10** · 创新 1.2/2 · 技术严谨 1.0/1.5 · 实验充分 1.2/1.5 · 清晰度 0.8/1 · 影响力 1.0/1.5 · 开源 1.0/1.5 · 可复现 0.1/0.5 · 工程/实践 1.2/1.5 | 前25% | 系统技术报告 | #说话人验证 |
| 7 | [电话线抹掉了谁的指纹：带宽与编码对音频深度伪造溯源的分解影响](/posts/conference-odyssey-2026-conference-paper-id-klein26-odyssey-2fe7dc966f/) | [The Effect of Telephony Transmission on Source Tracing of Audio Deepfakes](/posts/conference-odyssey-2026-conference-paper-id-klein26-odyssey-2fe7dc966f/) | **7.5/10** · 创新 1.2/2 · 技术严谨 1.2/1.5 · 实验充分 1.0/1.5 · 清晰度 0.8/1 · 影响力 1.0/1.5 · 开源 1.0/1.5 · 可复现 0.3/0.5 · 工程/实践 1.0/1.5 | 前25% | 应用研究 | #音频深度伪造检测 |
| 8 | [整句高分掩盖局部损伤：用部分混合与帧对比学习做可定位的质量嵌入](/posts/conference-odyssey-2026-conference-paper-id-kuhlmann26-odyssey-83bd353b92/) | [Speech Quality Embeddings for Improved Detection and Classification of Degradations in Speech Signals](/posts/conference-odyssey-2026-conference-paper-id-kuhlmann26-odyssey-83bd353b92/) | **7.4/10** · 创新 1.4/2 · 技术严谨 1.1/1.5 · 实验充分 1.1/1.5 · 清晰度 0.8/1 · 影响力 0.9/1.5 · 开源 1.0/1.5 · 可复现 0.3/0.5 · 工程/实践 0.8/1.5 | 前50% | 方法研究 | #语音质量评估 |
| 9 | [更深更宽不一定更值：说话人确认中精度与能耗的拐点](/posts/conference-odyssey-2026-conference-paper-id-leguillier26-odyssey-ddda275653/) | [Assessing the Energy and Carbon Emissions of Neural Speaker Verification Model in Training and Inference](/posts/conference-odyssey-2026-conference-paper-id-leguillier26-odyssey-ddda275653/) | **7.4/10** · 创新 1.0/2 · 技术严谨 1.2/1.5 · 实验充分 1.0/1.5 · 清晰度 0.7/1 · 影响力 1.0/1.5 · 开源 1.0/1.5 · 可复现 0.3/0.5 · 工程/实践 1.2/1.5 | 前50% | 应用研究 | #说话人验证 |
| 10 | [等错误率打平不等于匿名打平：用相似度秩泄露称量残留身份](/posts/conference-odyssey-2026-conference-paper-id-chandra26-odyssey-98d4b9f1a7/) | [Evaluating voice anonymisation using similarity rank disclosure](/posts/conference-odyssey-2026-conference-paper-id-chandra26-odyssey-98d4b9f1a7/) | **7.0/10** · 创新 1.5/2 · 技术严谨 1.2/1.5 · 实验充分 1.2/1.5 · 清晰度 0.8/1 · 影响力 1.2/1.5 · 开源 0.0/1.5 · 可复现 0.1/0.5 · 工程/实践 1.0/1.5 | 前50% | 方法研究 | #说话人匿名化 |
| 11 | [听得出却标不对：当信任线索遇上部分合成语音的人耳定位实验](/posts/conference-odyssey-2026-conference-paper-id-erscoi26-odyssey-feb6ca7239/) | [I Hear, Therefore I Trust: A Socio\-Technical Investigation of Humans as Synthetic Speech Detectors](/posts/conference-odyssey-2026-conference-paper-id-erscoi26-odyssey-feb6ca7239/) | **7.0/10** · 创新 1.2/2 · 技术严谨 1.0/1.5 · 实验充分 0.9/1.5 · 清晰度 0.8/1 · 影响力 0.9/1.5 · 开源 1.0/1.5 · 可复现 0.3/0.5 · 工程/实践 0.9/1.5 | 前50% | 应用研究 | #音频深度伪造检测 |
| 12 | [在嵌入空间做生成式后端：FM\-SEE 如何把教师嵌入推向干净分布](/posts/conference-odyssey-2026-conference-paper-id-novoselov26-odyssey-52bb301c24/) | [FM\-SEE: Flow Matching\-based Generative Model For Speaker Embedding Enhancement](/posts/conference-odyssey-2026-conference-paper-id-novoselov26-odyssey-52bb301c24/) | **7.0/10** · 创新 1.3/2 · 技术严谨 0.8/1.5 · 实验充分 1.0/1.5 · 清晰度 0.8/1 · 影响力 1.0/1.5 · 开源 1.0/1.5 · 可复现 0.1/0.5 · 工程/实践 1.0/1.5 | 前50% | 方法研究 | #说话人验证 |
| 13 | [加密音频也要算频谱：用近似短时傅里叶把量化误差让给比特预算](/posts/conference-odyssey-2026-conference-paper-id-nguyen26-odyssey-0bd13e80ff/) | [Quantized Approximate Signal Processing \(QASP\): Towards Homomorphic Encryption for Audio](/posts/conference-odyssey-2026-conference-paper-id-nguyen26-odyssey-0bd13e80ff/) | **6.9/10** · 创新 1.6/2 · 技术严谨 1.2/1.5 · 实验充分 1.0/1.5 · 清晰度 0.8/1 · 影响力 1.0/1.5 · 开源 0.0/1.5 · 可复现 0.3/0.5 · 工程/实践 1.0/1.5 | 前50% | 方法研究 | #音频分类 |
| 14 | [冻住大模型只调说话人旋钮：FiLM 条件化做病理语音识别](/posts/conference-odyssey-2026-conference-paper-id-lopez26-odyssey-da31198119/) | [FiLM\-Based Speaker Conditioning of a SpeechLLM for Pathological Speech Recognition](/posts/conference-odyssey-2026-conference-paper-id-lopez26-odyssey-da31198119/) | **6.8/10** · 创新 1.2/2 · 技术严谨 1.0/1.5 · 实验充分 1.0/1.5 · 清晰度 0.7/1 · 影响力 0.6/1.5 · 开源 1.0/1.5 · 可复现 0.3/0.5 · 工程/实践 1.0/1.5 | 前50% | 方法研究 | #语音识别 |
| 15 | [用说话人描述做监督：SLAP 如何把人口学、嗓音与健康属性装进同一语音表示](/posts/conference-odyssey-2026-conference-paper-id-ando26-odyssey-54323ecc51/) | [SLAP: Learning Speaker and Health\-Related Representations from Natural Language Supervision](/posts/conference-odyssey-2026-conference-paper-id-ando26-odyssey-54323ecc51/) | **6.7/10** · 创新 1.4/2 · 技术严谨 1.0/1.5 · 实验充分 1.2/1.5 · 清晰度 0.8/1 · 影响力 1.0/1.5 · 开源 0.0/1.5 · 可复现 0.3/0.5 · 工程/实践 1.0/1.5 | 前50% | 方法研究 | #病理语音评估 |
| 16 | [把混杂语音赶出说话人簇：增广状态空间如何净化 HMM 聚类](/posts/conference-odyssey-2026-conference-paper-id-chowdhury26-odyssey-578c40d927/) | [Augmented State Space Speaker Clustering: Reformulating HMM Based Clustering To Improve Speaker Diarization](/posts/conference-odyssey-2026-conference-paper-id-chowdhury26-odyssey-578c40d927/) | **6.7/10** · 创新 1.4/2 · 技术严谨 1.2/1.5 · 实验充分 1.2/1.5 · 清晰度 0.8/1 · 影响力 1.0/1.5 · 开源 0.0/1.5 · 可复现 0.1/0.5 · 工程/实践 1.0/1.5 | 前50% | 方法研究 | #说话人分离标注 |
| 17 | [把预训练语音模型改成高层专家分工：抗伪造要在保留表示的前提下做稀疏扩容](/posts/conference-odyssey-2026-conference-paper-id-daumain26-odyssey-46e220378d/) | [From Self\-Supervised Speech Models to Mixture\-of\-Experts for Robust Anti\-Spoofing](/posts/conference-odyssey-2026-conference-paper-id-daumain26-odyssey-46e220378d/) | **6.7/10** · 创新 1.3/2 · 技术严谨 1.0/1.5 · 实验充分 1.3/1.5 · 清晰度 0.8/1 · 影响力 1.0/1.5 · 开源 0.0/1.5 · 可复现 0.3/0.5 · 工程/实践 1.0/1.5 | 前50% | 方法研究 | #语音伪造检测 |
| 18 | [说话人受控下做语种识别：用任务相关预训练压住说话人捷径，再用间隔损失拉开语种边界](/posts/conference-odyssey-2026-conference-paper-id-fang26-odyssey-d1602cc36a/) | [Spoken Language Identification with Pre\-trained Models and Margin Loss](/posts/conference-odyssey-2026-conference-paper-id-fang26-odyssey-d1602cc36a/) | **6.7/10** · 创新 1.0/2 · 技术严谨 1.0/1.5 · 实验充分 0.9/1.5 · 清晰度 0.8/1 · 影响力 0.7/1.5 · 开源 1.0/1.5 · 可复现 0.3/0.5 · 工程/实践 1.0/1.5 | 前50% | 系统技术报告 | #语言识别 |
| 19 | [不要语言模型改错，还能从皮层电流读出句子吗](/posts/conference-odyssey-2026-conference-paper-id-khanday26-odyssey-7808b08fb8/) | [End\-to\-End Intracortical Speech Decoding from Neural Activity](/posts/conference-odyssey-2026-conference-paper-id-khanday26-odyssey-7808b08fb8/) | **6.7/10** · 创新 1.2/2 · 技术严谨 1.0/1.5 · 实验充分 0.8/1.5 · 清晰度 0.7/1 · 影响力 0.9/1.5 · 开源 1.0/1.5 · 可复现 0.3/0.5 · 工程/实践 0.8/1.5 | 前50% | 方法研究 | #言语神经解码 |
| 20 | [只换音色不够：用离散单元同时改写节奏的匿名化](/posts/conference-odyssey-2026-conference-paper-id-bakari26-odyssey-693049de1a/) | [Joint Timbral and Non\-Timbral Speaker Anonymisation](/posts/conference-odyssey-2026-conference-paper-id-bakari26-odyssey-693049de1a/) | **6.6/10** · 创新 1.5/2 · 技术严谨 1.1/1.5 · 实验充分 1.2/1.5 · 清晰度 0.9/1 · 影响力 1.0/1.5 · 开源 0.0/1.5 · 可复现 0.1/0.5 · 工程/实践 0.8/1.5 | 前50% | 方法研究 | #说话人匿名化 |
| 21 | [说话人偏置当捷径：用教师引导加信息瓶颈做去身份的伪造检测](/posts/conference-odyssey-2026-conference-paper-id-dao26-odyssey-77988073ef/) | [Speaker\-Invariant Representation Learning for Spoofing Detection via Gradient Reversal and A Variational Information Bottleneck](/posts/conference-odyssey-2026-conference-paper-id-dao26-odyssey-77988073ef/) | **6.6/10** · 创新 1.4/2 · 技术严谨 1.2/1.5 · 实验充分 1.1/1.5 · 清晰度 0.8/1 · 影响力 1.0/1.5 · 开源 0.0/1.5 · 可复现 0.3/0.5 · 工程/实践 0.8/1.5 | 前50% | 方法研究 | #语音伪造检测 |
| 22 | [减去语言噪声、加回说话人线索：双路径解耦如何同时做说话人与语种识别](/posts/conference-odyssey-2026-conference-paper-id-farhadipour26-odyssey-164c1bccfc/) | [Subtract to Clean, Add to Enrich: Dual\-Path Disentanglement for Speaker and Language Recognition](/posts/conference-odyssey-2026-conference-paper-id-farhadipour26-odyssey-164c1bccfc/) | **6.6/10** · 创新 1.4/2 · 技术严谨 1.0/1.5 · 实验充分 1.1/1.5 · 清晰度 0.8/1 · 影响力 1.0/1.5 · 开源 0.0/1.5 · 可复现 0.3/0.5 · 工程/实践 1.0/1.5 | 前50% | 方法研究 | #说话人验证 |
| 23 | [同一骨干跑通检测与分类：MEGConformer 靠归一化弥合保留集偏移](/posts/conference-odyssey-2026-conference-paper-id-zuazo26-odyssey-d91951b70e/) | [MEGConformer: Conformer\-Based MEG Decoder for Robust Speech and Phoneme Classification](/posts/conference-odyssey-2026-conference-paper-id-zuazo26-odyssey-d91951b70e/) | **6.6/10** · 创新 1.2/2 · 技术严谨 1.2/1.5 · 实验充分 1.3/1.5 · 清晰度 0.8/1 · 影响力 0.8/1.5 · 开源 0.0/1.5 · 可复现 0.3/0.5 · 工程/实践 1.0/1.5 | 前50% | 方法研究 | #言语神经解码 |
| 24 | [只学顺序不学分值：比较器损失如何得到可跨库的语音严重度分数](/posts/conference-odyssey-2026-conference-paper-id-webber26-odyssey-019d0472ab/) | [Comparator Loss: An Ordinal Contrastive Loss to Derive a Severity Score for Speech\-based Health Monitoring](/posts/conference-odyssey-2026-conference-paper-id-webber26-odyssey-019d0472ab/) | **6.5/10** · 创新 1.3/2 · 技术严谨 1.0/1.5 · 实验充分 1.2/1.5 · 清晰度 0.8/1 · 影响力 0.9/1.5 · 开源 0.0/1.5 · 可复现 0.3/0.5 · 工程/实践 1.0/1.5 | 前50% | 方法研究 | #病理语音评估 |
| 25 | [语音预训练为何听不懂音乐与环境音：跨模态伪造检测的前端泛化检验](/posts/conference-odyssey-2026-conference-paper-id-das26-odyssey-6c3b6e064c/) | [Can SSL Frontend Generalize to All\-Type Audio Spoofing?](/posts/conference-odyssey-2026-conference-paper-id-das26-odyssey-6c3b6e064c/) | **6.4/10** · 创新 1.2/2 · 技术严谨 1.0/1.5 · 实验充分 1.2/1.5 · 清晰度 0.7/1 · 影响力 1.0/1.5 · 开源 0.0/1.5 · 可复现 0.3/0.5 · 工程/实践 1.0/1.5 | 前50% | 方法研究 | #音频深度伪造检测 |
| 26 | [为说话人日志做自监督：目标、数据与容量的分工与代价](/posts/conference-odyssey-2026-conference-paper-id-laurent26-odyssey-f85704e74b/) | [Scaling self\-supervised pretraining for speaker diarization](/posts/conference-odyssey-2026-conference-paper-id-laurent26-odyssey-f85704e74b/) | **6.4/10** · 创新 1.3/2 · 技术严谨 1.2/1.5 · 实验充分 1.1/1.5 · 清晰度 0.7/1 · 影响力 1.0/1.5 · 开源 0.0/1.5 · 可复现 0.1/0.5 · 工程/实践 1.0/1.5 | 前50% | 方法研究 | #说话人分离标注 |
| 27 | [稀疏让损失只看难样本：Q\-Margin 何时帮得上说话人确认](/posts/conference-odyssey-2026-conference-paper-id-mosner26-odyssey-89ca738130/) | [Beyond CosFace: Analysing Sparsity\-Inducing Losses in Speaker Verification](/posts/conference-odyssey-2026-conference-paper-id-mosner26-odyssey-89ca738130/) | **6.4/10** · 创新 1.2/2 · 技术严谨 1.2/1.5 · 实验充分 1.1/1.5 · 清晰度 0.8/1 · 影响力 0.8/1.5 · 开源 0.0/1.5 · 可复现 0.3/0.5 · 工程/实践 1.0/1.5 | 前50% | 方法研究 | #说话人验证 |
| 28 | [更难的重放与更真的合成：J\-SPAW2 如何让日语说话人验证同时失守](/posts/conference-odyssey-2026-conference-paper-id-shiota26-odyssey-ab3a7d2af7/) | [J\-SPAW2: A Japanese Corpus for Speaker Verification and Anti\-Spoofing with Challenging Replay and Speech Synthesis Attacks](/posts/conference-odyssey-2026-conference-paper-id-shiota26-odyssey-ab3a7d2af7/) | **6.4/10** · 创新 1.2/2 · 技术严谨 1.0/1.5 · 实验充分 1.2/1.5 · 清晰度 0.8/1 · 影响力 0.9/1.5 · 开源 0.0/1.5 · 可复现 0.3/0.5 · 工程/实践 1.0/1.5 | 前50% | 数据集与基准 | #说话人验证 |
| 29 | [扩数据反而退化：卷积后端与多语言前端在伪造语音检测中的域偏置对照](/posts/conference-odyssey-2026-conference-paper-id-dao26b-odyssey-b79840788a/) | [A Comparison of SSL\-Based Feature Extractors and Back\-End Classifiers for Spoofing Detection: A Multi\-Corpus Training and Cross\-Linguistic Analysis](/posts/conference-odyssey-2026-conference-paper-id-dao26b-odyssey-b79840788a/) | **6.3/10** · 创新 1.1/2 · 技术严谨 1.0/1.5 · 实验充分 1.2/1.5 · 清晰度 0.7/1 · 影响力 1.0/1.5 · 开源 0.0/1.5 · 可复现 0.3/0.5 · 工程/实践 1.0/1.5 | 前50% | 方法研究 | #语音伪造检测 |
| 30 | [硬标签丢掉了多少情绪：用软输出重测匿名化后的情感保留](/posts/conference-odyssey-2026-conference-paper-id-nguyen26b-odyssey-b47fd506d7/) | [Analysis of embedding\-based emotional preservation metrics for voice conversion models](/posts/conference-odyssey-2026-conference-paper-id-nguyen26b-odyssey-b47fd506d7/) | **6.3/10** · 创新 1.2/2 · 技术严谨 1.1/1.5 · 实验充分 1.0/1.5 · 清晰度 0.8/1 · 影响力 0.9/1.5 · 开源 0.0/1.5 · 可复现 0.3/0.5 · 工程/实践 1.0/1.5 | 前50% | 方法研究 | #说话人匿名化 |
| 31 | [伪造语音检测为何在实验室外失灵：把非语音当捷径的诊断框架](/posts/conference-odyssey-2026-conference-paper-id-rubio26-odyssey-1a27320724/) | [An Intervention\-Based Framework for Shortcut Diagnosis in Spoofing Countermeasures](/posts/conference-odyssey-2026-conference-paper-id-rubio26-odyssey-1a27320724/) | **6.3/10** · 创新 1.2/2 · 技术严谨 1.0/1.5 · 实验充分 1.2/1.5 · 清晰度 0.8/1 · 影响力 1.0/1.5 · 开源 0.0/1.5 · 可复现 0.3/0.5 · 工程/实践 0.8/1.5 | 前50% | 方法研究 | #语音伪造检测 |
| 32 | [退化信道复制了伪造痕迹：混合域适应如何挽回检测失效](/posts/conference-odyssey-2026-conference-paper-id-tsutsumi26-odyssey-103c80273c/) | [Domain Adaptation for Deepfake Audio Detection under Degraded Channel Conditions](/posts/conference-odyssey-2026-conference-paper-id-tsutsumi26-odyssey-103c80273c/) | **6.3/10** · 创新 1.0/2 · 技术严谨 1.2/1.5 · 实验充分 1.0/1.5 · 清晰度 0.8/1 · 影响力 1.0/1.5 · 开源 0.0/1.5 · 可复现 0.3/0.5 · 工程/实践 1.0/1.5 | 前50% | 应用研究 | #音频深度伪造检测 |
| 33 | [零样本失灵时再校准：想象言语跨被试解码的快速适应路径](/posts/conference-odyssey-2026-conference-paper-id-belfrouh26-odyssey-4ddff0df94/) | [Rapid Calibration for Cross\-Subject Imagined Speech Decoding Toward Restoring Communication](/posts/conference-odyssey-2026-conference-paper-id-belfrouh26-odyssey-4ddff0df94/) | **6.2/10** · 创新 1.2/2 · 技术严谨 1.0/1.5 · 实验充分 1.0/1.5 · 清晰度 0.8/1 · 影响力 0.9/1.5 · 开源 0.0/1.5 · 可复现 0.3/0.5 · 工程/实践 1.0/1.5 | 前50% | 方法研究 | #言语神经解码 |
| 34 | [临床印地\-英语混说下谁在说话：DiariZen 为何要解冻 WavLM 才跟得上](/posts/conference-odyssey-2026-conference-paper-id-barahona26-odyssey-cb08ce7915/) | [Adapting Speaker Diarization to Code\-Switched Medical Conversations: AUDIAS\-UAM at the DISPLACE\-M Challenge](/posts/conference-odyssey-2026-conference-paper-id-barahona26-odyssey-cb08ce7915/) | **6.1/10** · 创新 1.2/2 · 技术严谨 1.0/1.5 · 实验充分 1.0/1.5 · 清晰度 0.8/1 · 影响力 0.8/1.5 · 开源 0.0/1.5 · 可复现 0.3/0.5 · 工程/实践 1.0/1.5 | 前50% | 系统技术报告 | #说话人分离标注 |
| 35 | [先看 10 毫秒再做判断：大核一维卷积为何能做原始波形伪造检测](/posts/conference-odyssey-2026-conference-paper-id-perets26-odyssey-05efcbc17f/) | [Large\-Kernel 1D CNN for Raw Waveform Spoofing Countermeasures](/posts/conference-odyssey-2026-conference-paper-id-perets26-odyssey-05efcbc17f/) | **6.1/10** · 创新 1.0/2 · 技术严谨 1.0/1.5 · 实验充分 1.2/1.5 · 清晰度 0.8/1 · 影响力 0.8/1.5 · 开源 0.0/1.5 · 可复现 0.3/0.5 · 工程/实践 1.0/1.5 | 前50% | 方法研究 | #语音伪造检测 |
| 36 | [语音大模型流水线越往后越安全吗：分阶段可恢复性与选择性掩蔽的对照](/posts/conference-odyssey-2026-conference-paper-id-sepanta26-odyssey-d332d4b8dc/) | [Sensitive Speaker Attribute Leakage in Speech–LLM Pipelines](/posts/conference-odyssey-2026-conference-paper-id-sepanta26-odyssey-d332d4b8dc/) | **6.1/10** · 创新 1.3/2 · 技术严谨 1.2/1.5 · 实验充分 0.9/1.5 · 清晰度 0.7/1 · 影响力 0.9/1.5 · 开源 0.0/1.5 · 可复现 0.3/0.5 · 工程/实践 0.8/1.5 | 前50% | 方法研究 | #语音属性识别 |
| 37 | [不换打分只换加权：按隐含条件自适应融合说话人确认分数](/posts/conference-odyssey-2026-conference-paper-id-borgstrom26-odyssey-169e44380b/) | [Condition\-Aware System Fusion for Speaker Verification](/posts/conference-odyssey-2026-conference-paper-id-borgstrom26-odyssey-169e44380b/) | **6.0/10** · 创新 1.2/2 · 技术严谨 1.0/1.5 · 实验充分 1.0/1.5 · 清晰度 0.7/1 · 影响力 0.8/1.5 · 开源 0.0/1.5 · 可复现 0.3/0.5 · 工程/实践 1.0/1.5 | 前50% | 方法研究 | #说话人验证 |
| 38 | [说话人确认为何换个语言就变差：四种架构跨语言迁移的对照](/posts/conference-odyssey-2026-conference-paper-id-buitrago26-odyssey-ce583423b5/) | [Towards Language\-Agnostic Speaker Verification: A Cross\-Lingual Transfer Study of Architectures](/posts/conference-odyssey-2026-conference-paper-id-buitrago26-odyssey-ce583423b5/) | **5.9/10** · 创新 1.2/2 · 技术严谨 1.0/1.5 · 实验充分 1.1/1.5 · 清晰度 0.7/1 · 影响力 0.8/1.5 · 开源 0.0/1.5 · 可复现 0.3/0.5 · 工程/实践 0.8/1.5 | 前50% | 方法研究 | #说话人验证 |
| 39 | [词级对齐何时盖过手工声学特征：自发语音同时做淀粉样预测与失语分型的对照](/posts/conference-odyssey-2026-conference-paper-id-esteve26-odyssey-4d4a1e04ea/) | [Deep learning based analysis of spontaneous speech for diagnostic classification and biomarker prediction in Alzheimer’s disease and primary progressive aphasia](/posts/conference-odyssey-2026-conference-paper-id-esteve26-odyssey-4d4a1e04ea/) | **5.9/10** · 创新 1.2/2 · 技术严谨 1.0/1.5 · 实验充分 1.0/1.5 · 清晰度 0.8/1 · 影响力 0.9/1.5 · 开源 0.0/1.5 · 可复现 0.2/0.5 · 工程/实践 0.8/1.5 | 前50% | 应用研究 | #病理语音评估 |
| 40 | [难发的音就多练：按音素误差自适应加权的静音语音重建](/posts/conference-odyssey-2026-conference-paper-id-blanco26-odyssey-81c80036ba/) | [Adaptive Phone\-Wise Weighted Loss for Silent Speech Restoration in Continuous Spanish](/posts/conference-odyssey-2026-conference-paper-id-blanco26-odyssey-81c80036ba/) | **5.8/10** · 创新 1.2/2 · 技术严谨 1.2/1.5 · 实验充分 1.0/1.5 · 清晰度 0.8/1 · 影响力 0.6/1.5 · 开源 0.0/1.5 · 可复现 0.3/0.5 · 工程/实践 0.7/1.5 | 前50% | 方法研究 | #静默语音接口 |
| 41 | [训练没见过的攻击怎么验：把声纹验证搬到深度伪造溯源](/posts/conference-odyssey-2026-conference-paper-id-chhibber26-odyssey-07370ad578/) | [Advancing Zero\-Shot Open\-Set Speech Deepfake Source Tracing](/posts/conference-odyssey-2026-conference-paper-id-chhibber26-odyssey-07370ad578/) | **5.8/10** · 创新 1.2/2 · 技术严谨 1.0/1.5 · 实验充分 1.0/1.5 · 清晰度 0.7/1 · 影响力 0.8/1.5 · 开源 0.0/1.5 · 可复现 0.3/0.5 · 工程/实践 0.8/1.5 | 前50% | 方法研究 | #音频指纹 |
| 42 | [同一人说两种语言时，如何让语言验证不再被说话人带偏](/posts/conference-odyssey-2026-conference-paper-id-penagarikano26-odyssey-a5f8352c7d/) | [Speaker\-Aware Language Verification Based on Attentive Pooling, Mixture of Experts and Neural PLDA](/posts/conference-odyssey-2026-conference-paper-id-penagarikano26-odyssey-a5f8352c7d/) | **5.8/10** · 创新 1.2/2 · 技术严谨 1.0/1.5 · 实验充分 0.8/1.5 · 清晰度 0.7/1 · 影响力 0.8/1.5 · 开源 0.0/1.5 · 可复现 0.3/0.5 · 工程/实践 1.0/1.5 | 前50% | 系统技术报告 | #语言识别 |
| 43 | [余弦已很强时为何还要 PLDA：联合微调对齐嵌入与打分的防欺骗说话人确认](/posts/conference-odyssey-2026-conference-paper-id-budilovsky26-odyssey-1c48f1e043/) | [PLDA Scoring for Spoofing\-Robust Automatic Speaker Verification](/posts/conference-odyssey-2026-conference-paper-id-budilovsky26-odyssey-1c48f1e043/) | **5.7/10** · 创新 1.0/2 · 技术严谨 1.2/1.5 · 实验充分 1.0/1.5 · 清晰度 0.8/1 · 影响力 0.7/1.5 · 开源 0.0/1.5 · 可复现 0.3/0.5 · 工程/实践 0.7/1.5 | 前50% | 方法研究 | #说话人验证 |
| 44 | [不重训识别器：在语言向量空间里把失真推回干净流形](/posts/conference-odyssey-2026-conference-paper-id-cao26-odyssey-7f0d01567e/) | [Flow\-Enhanced Language Embeddings for Robust Language Recognition](/posts/conference-odyssey-2026-conference-paper-id-cao26-odyssey-7f0d01567e/) | **5.7/10** · 创新 1.2/2 · 技术严谨 1.0/1.5 · 实验充分 0.9/1.5 · 清晰度 0.7/1 · 影响力 0.8/1.5 · 开源 0.0/1.5 · 可复现 0.3/0.5 · 工程/实践 0.8/1.5 | 前50% | 方法研究 | #语言识别 |
| 45 | [在各向异性主成分平面里小角度旋转：无须训练的盲语音水印](/posts/conference-odyssey-2026-conference-paper-id-coletta26-odyssey-4da6eb8dbb/) | [Latent Secret Spin: Keyed Orthogonal Rotations for Blind Speech Watermarking in Anisotropic Latent Spaces](/posts/conference-odyssey-2026-conference-paper-id-coletta26-odyssey-4da6eb8dbb/) | **5.7/10** · 创新 1.3/2 · 技术严谨 1.0/1.5 · 实验充分 0.9/1.5 · 清晰度 0.7/1 · 影响力 0.8/1.5 · 开源 0.0/1.5 · 可复现 0.3/0.5 · 工程/实践 0.7/1.5 | 前50% | 方法研究 | #音频水印 |
| 46 | [注册分散比拉长更有效：SRE24 音频轨的条件拆解](/posts/conference-odyssey-2026-conference-paper-id-singer26-odyssey-61115597bf/) | [Analysis of the NIST 2024 Speaker Recognition Evaluation](/posts/conference-odyssey-2026-conference-paper-id-singer26-odyssey-61115597bf/) | **5.7/10** · 创新 1.0/2 · 技术严谨 1.2/1.5 · 实验充分 0.8/1.5 · 清晰度 0.8/1 · 影响力 1.0/1.5 · 开源 0.0/1.5 · 可复现 0.1/0.5 · 工程/实践 0.8/1.5 | 前50% | 系统技术报告 | #说话人验证 |
| 47 | [只留前 K 个激活：稀疏伪造检测为何同时改善泛化与解耦](/posts/conference-odyssey-2026-conference-paper-id-tahon26-odyssey-8529747f3a/) | [Sparse deepfake detection promotes better disentanglement](/posts/conference-odyssey-2026-conference-paper-id-tahon26-odyssey-8529747f3a/) | **5.6/10** · 创新 1.2/2 · 技术严谨 1.2/1.5 · 实验充分 0.9/1.5 · 清晰度 0.8/1 · 影响力 0.9/1.5 · 开源 0.0/1.5 · 可复现 0.1/0.5 · 工程/实践 0.5/1.5 | 前50% | 方法研究 | #音频深度伪造检测 |
| 48 | [一句话多属性纠缠时，如何让检索按语义或按说话人分开算相似](/posts/conference-odyssey-2026-conference-paper-id-oregan26-odyssey-41d85bc55d/) | [Multi\-Axis Speech Similarity via Factor\-Partitioned Embeddings](/posts/conference-odyssey-2026-conference-paper-id-oregan26-odyssey-41d85bc55d/) | **5.4/10** · 创新 1.2/2 · 技术严谨 1.0/1.5 · 实验充分 0.8/1.5 · 清晰度 0.8/1 · 影响力 0.7/1.5 · 开源 0.0/1.5 · 可复现 0.1/0.5 · 工程/实践 0.8/1.5 | 后50% | 方法研究 | #音频检索 |
| 49 | [稀疏与正交都能走向可解释：说话人表示的维度评测与取舍](/posts/conference-odyssey-2026-conference-paper-id-saget26-odyssey-b4975c9234/) | [Functionnally\-grounded evaluation of dimensional interpretability in sparse speaker representations](/posts/conference-odyssey-2026-conference-paper-id-saget26-odyssey-b4975c9234/) | **5.4/10** · 创新 1.2/2 · 技术严谨 1.3/1.5 · 实验充分 0.6/1.5 · 清晰度 0.7/1 · 影响力 0.8/1.5 · 开源 0.0/1.5 · 可复现 0.3/0.5 · 工程/实践 0.5/1.5 | 后50% | 数据集与基准 | #说话人验证 |
| 50 | [从单人声音到多人对话：互动本身如何泄露隐私属性](/posts/conference-odyssey-2026-conference-paper-id-bijmold26-odyssey-34f5fbb6d1/) | [Privacy in Spoken Interaction: An Overview of Inferable Attributes](/posts/conference-odyssey-2026-conference-paper-id-bijmold26-odyssey-34f5fbb6d1/) | **4.7/10** · 创新 1.0/2 · 技术严谨 0.8/1.5 · 实验充分 0.5/1.5 · 清晰度 0.8/1 · 影响力 0.8/1.5 · 开源 0.0/1.5 · 可复现 0.3/0.5 · 工程/实践 0.5/1.5 | 后50% | 综述 | #语音属性识别 |
| 51 | [持续元音能提示特纳综合征吗：共振峰下移与声门扰动降低的初步证据](/posts/conference-odyssey-2026-conference-paper-id-freixes26-odyssey-e9bd8568a1/) | [Vocal markers of Turner syndrome: a preliminary analysis of sustained vowel recordings](/posts/conference-odyssey-2026-conference-paper-id-freixes26-odyssey-e9bd8568a1/) | **4.6/10** · 创新 1.0/2 · 技术严谨 1.0/1.5 · 实验充分 0.7/1.5 · 清晰度 0.8/1 · 影响力 0.5/1.5 · 开源 0.0/1.5 · 可复现 0.1/0.5 · 工程/实践 0.5/1.5 | 后50% | 应用研究 | #病理语音评估 |
| 52 | [在说话人不见面的严苛划分下，用冻结语音表示加轻量解码器做构音障碍分级](/posts/conference-odyssey-2026-conference-paper-id-lillini26-odyssey-7214719769/) | [Dysarthria Severity Classification on the HeyJay\! Dataset: A Parameter\-Efficient Approach Using Self\-Supervised Speech Representations](/posts/conference-odyssey-2026-conference-paper-id-lillini26-odyssey-7214719769/) | **4.6/10** · 创新 1.0/2 · 技术严谨 1.0/1.5 · 实验充分 0.5/1.5 · 清晰度 0.8/1 · 影响力 0.5/1.5 · 开源 0.0/1.5 · 可复现 0.3/0.5 · 工程/实践 0.5/1.5 | 后50% | 应用研究 | #病理语音评估 |

---

## 📋 论文列表

### 1. [统一流程下比模型、比批量、比深度：Kiwano 如何让说话人确认结果可复现](/posts/conference-odyssey-2026-conference-paper-id-rouvier26-odyssey-7e4ce3a0dd/)

> 英文题目：*[Kiwano: A Cutting\-Edge Open\-Source Toolkit for Speaker Verification](/posts/conference-odyssey-2026-conference-paper-id-rouvier26-odyssey-7e4ce3a0dd/)*

标签：#开源工具 #基准设计 #语音 #说话人验证

评分：**8.3/10** | 创新 1.2/2 | 技术严谨 1.2/1.5 | 实验充分 1.2/1.5 | 清晰度 0.7/1 | 影响力 1.0/1.5 | 开源 1.5/1.5 | 可复现 0.3/0.5 | 工程/实践 1.2/1.5

排名：前25% | 文档类型：系统技术报告 | 主任务：#说话人验证 | 主方法：#基准设计

会议来源：[官方记录](https://www.isca-archive.org/odyssey_2026/rouvier26_odyssey.html) · [官方 PDF](https://www.isca-archive.org/odyssey_2026/rouvier26_odyssey.pdf)

👥 **作者与机构**

- Mickael Rouvier：机构信息未能从会议 PDF 纯文本可靠映射
- Pierre Michel Bousquet：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

说话人验证需将变长语音映射为固定维说话人嵌入并在信道与语言失配下保持稳定可分，复现常受训练配置与评测协议不一致严重困扰。Kiwano以PyTorch为底座先做数据管理，用列表式元数据按需加载并经在线噪声混响增强、变速扰动与特征切分输出训练段，其输出直接进入前端嵌入提取。前端以fwSE\-ResNet\-200等编码器加池化与分类头学习256维嵌入并用AM\-Softmax约束角裕度，嵌入再进入后端打分校准完成判决。与仅关注嵌入提取的工具箱不同，其后端统一集成余弦相似度与PLDA、AS\-Norm与QMF及CORAL系域适应，使模型平均、LM\-FT与分数校准形成可比闭环。在VoxCeleb1\-O评测设置下，叠加完整管线的fwSE\-ResNet\-200的EER为0\.34%，低于仅余弦打分基线fwSE\-ResNet\-200的EER 0\.50%。该结论适用边界受限于近场英文训练语料，跨域CN\-Celeb上仍显著退化且深至600层后收益饱和，尚未验证远场会议与多语混合部署的外推范围，全量训练成本在相应硬件上约79小时与706\.3 kWh。

🔗 **开源资源**

- 代码相关资源：<https://github.com/kiwano-toolkit/kiwano/> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 2. [声纹不可靠时如何认语言：声学嵌入与转写推理的互补验证](/posts/conference-odyssey-2026-conference-paper-id-olev26-odyssey-e412812978/)

> 英文题目：*[LLM\-Based Language Verification and Multimodal Ensemble for Spoken Language Recognition](/posts/conference-odyssey-2026-conference-paper-id-olev26-odyssey-e412812978/)*

标签：#LoRA #模型集成 #大语言模型 #多语言 #语言识别

评分：**8.0/10** | 创新 1.5/2 | 技术严谨 1.2/1.5 | 实验充分 1.0/1.5 | 清晰度 0.8/1 | 影响力 1.0/1.5 | 开源 1.0/1.5 | 可复现 0.3/0.5 | 工程/实践 1.2/1.5

排名：前25% | 文档类型：系统技术报告 | 主任务：#语言识别 | 主方法：#模型集成

会议来源：[官方记录](https://www.isca-archive.org/odyssey_2026/olev26_odyssey.html) · [官方 PDF](https://www.isca-archive.org/odyssey_2026/olev26_odyssey.pdf)

👥 **作者与机构**

- Aivo Olev：机构信息未能从会议 PDF 纯文本可靠映射
- Tanel Alumäe：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

TidyLang 2026在TidyVoiceX上评估口语识别，输入为同一说话人讲2至10种语言的语音，任务1输出35个可见语种的闭集标签，任务2输出注册集与测试语音是否同语的判定，难点在于不能依赖说话人捷径且验证语种在评测时完全未见。该系统先用微调W2V\-BERT 2\.0提取声学嵌入与后验，用MMS\-zeroshot经罗马化加文本二元语言模型提供零语音监督的音位似然，同时用LoRA微调Qwen3\-Omni提供独立后验，三路按发育集优化权重融合为任务1标签。任务2另设验证分支，对每条语音分别调用Qwen3\-Omni纯识别与omniASR加GlotLID得到双路转写，若注册与测试标签全一致则短路赋0\.95，否则按注册嵌入平均余弦一致性路由到三档提示，令Qwen3\.5输出同语分数再与归一化PLDA分数插值融合。与纯声学打分不同，该机制让大模型直接比对双路转写的文字与形态证据并按声学相干度升级提示，实现了声学与语言学证据互补。在封闭条件评测下，TalTech三路集成的宏观准确率为96\.78%，高于第二名的宏观准确率92\.46%。该融合在发育集将等错误率从2\.50%降至0\.90%但评测集回升至3\.06%，其适用边界受限于发育集仅5个未见语种而评测集含40个未见语种的不对称，失败条件集中于Dutch–German等同语系易混对。原文未披露训练、推理或部署成本。

🔗 **开源资源**

- 数据相关资源：<https://tidylang2026.github.io/> — 链接可访问（HTTP 200）
- 第三方资源：<https://huggingface.co/facebook/omniASR-CTC-7B> — 暂时无法访问
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 3. [在单位球面上做高斯似然：以结构化说话人先验连接余弦、PLDA 与时长](/posts/conference-odyssey-2026-conference-paper-id-cumani26-odyssey-9d3708636c/)

> 英文题目：*[Spherical\-Gaussian TPSDA: combining PLDA, T\-PSDA and duration models for speaker verification](/posts/conference-odyssey-2026-conference-paper-id-cumani26-odyssey-9d3708636c/)*

标签：#生成模型 #语音 #说话人验证

评分：**7.7/10** | 创新 1.2/2 | 技术严谨 1.2/1.5 | 实验充分 1.2/1.5 | 清晰度 0.8/1 | 影响力 1.0/1.5 | 开源 1.0/1.5 | 可复现 0.3/0.5 | 工程/实践 1.0/1.5

排名：前25% | 文档类型：方法研究 | 主任务：#说话人验证 | 主方法：#生成模型

会议来源：[官方记录](https://www.isca-archive.org/odyssey_2026/cumani26_odyssey.html) · [官方 PDF](https://www.isca-archive.org/odyssey_2026/cumani26_odyssey.pdf)

👥 **作者与机构**

- Sandro Cumani：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

说话人验证以两段语音嵌入为输入，输出是否为同一说话人的对数似然比，难点在于角距离训练使余弦打分已很强，且时长变化带来不确定性。方法链分三步：首先构建各向同性概率线性判别分析ISO\-PLDA，用正交说话人子空间与标量方差保留解析打分，其输出的高斯似然进入下一步。其次承接该高斯似然，将高斯说话人先验替换为von Mises\-Fisher先验形成球面高斯模型SG\-TPSDA，使后验保持共轭并复用环面模型打分。最后承接SG\-TPSDA的共轭后验，在似然中引入与时长相关的各向同性方差项实现时长感知，非归一化输入可直接进入似然而无需长度归一化。与缺乏子空间的球面PLDA及纯方向建模的T\-PSDA不同，该拼接同时保留非归一化处理能力与结构化说话人刻画。在SRE 24评测设置下，时长感知非归一化SG\-TPSDA的EER为6\.5%，低于T\-PSDA基线的EER 7\.1%。结论的适用边界在于长语音主导的SRE 19原始集上增益减弱，且ReDimNet\-B6上外推受限，原文未披露训练、推理或部署成本。

🔗 **开源资源**

- 模型相关资源：<https://github.com/wenet-e2e/wespeaker/blob/master/docs/pretrained.md> — 链接可访问（HTTP 200）
- 模型相关资源：<https://github.com/IDRnD/redimnet/blob/master/EVALUATION.md> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 4. [2 比特是膝点：说话人确认中量化误差从哪里来、如何翻转判决](/posts/conference-odyssey-2026-conference-paper-id-leguillier26b-odyssey-855ecf0964/)

> 英文题目：*[On Low\-Bit Quantization Errors in Speaker Verification: Diagnostic and Mitigation](/posts/conference-odyssey-2026-conference-paper-id-leguillier26b-odyssey-855ecf0964/)*

标签：#模型量化 #高效推理 #鲁棒性 #说话人验证

评分：**7.7/10** | 创新 1.2/2 | 技术严谨 1.0/1.5 | 实验充分 1.2/1.5 | 清晰度 0.8/1 | 影响力 1.0/1.5 | 开源 1.2/1.5 | 可复现 0.3/0.5 | 工程/实践 1.0/1.5

排名：前25% | 文档类型：方法研究 | 主任务：#说话人验证 | 主方法：#模型量化

会议来源：[官方记录](https://www.isca-archive.org/odyssey_2026/leguillier26b_odyssey.html) · [官方 PDF](https://www.isca-archive.org/odyssey_2026/leguillier26b_odyssey.pdf)

👥 **作者与机构**

- Hugo Leguillier：机构信息未能从会议 PDF 纯文本可靠映射
- Driss Matrouf：机构信息未能从会议 PDF 纯文本可靠映射
- Guillaume Lechien：机构信息未能从会议 PDF 纯文本可靠映射
- Mickael Rouvier：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

说话人验证的输入为不定长注册与测试语音，输出为余弦相似度分数与是否同人的二值判定，实际难点是低比特量化在域偏移下引发结构化分数漂移而非均匀退化。该工作先以均匀K均值量化感知训练在ResNet\-36与ResNet\-200上构建4比特、3比特和2比特模型，为跨架构与跨位宽比较提供统一失真来源。基于上述量化模型，接着做阶段保留敏感性分析，将除目标阶段外全量化为2比特并观察性能回升，以定位脆弱中间层及其域相关分布。基于定位到的脆弱层分布，然后量化全量与仅测试端分数漂移及有害翻转与FP32裕量的关系，揭示近阈值试验最易被翻转且跨精度分数仍高度相关。据此在VoxTube上学习等距回归校准并以双阈值多精度级联先用2比特评分，仅将模糊试验上送至3比特与4比特，这与已有整体报EER的压缩评估不同，把层级失真与分数空间决策风险显式衔接，使高精度推理只用于模糊试验。在全局平均评测设置下，级联模型的EER为3\.947%，低于纯2比特模型的EER 4\.293%。该结论在域内与CN\-Celeb及CommonBench外域评测下仍成立，但其适用边界受限于校准阈值在域偏移下会推高上送率。级联以平均序列精度成本降低单次试验计算量，但需驻留多套模型而增加存储负担，且其逐试验重评路径会带来额外推理开销与延迟。

🔗 **开源资源**

- 代码相关资源：<https://github.com/kiwano-toolkit/kiwano> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 5. [增强把分类变难之后，损失与采样如何跟上：速度扰动与混合增强的协同](/posts/conference-odyssey-2026-conference-paper-id-bousquet26-odyssey-5ffd578d5f/)

> 英文题目：*[Harmonizing data augmentation and loss function for speaker recognition: examples with speed perturbation, mixup and mixout](/posts/conference-odyssey-2026-conference-paper-id-bousquet26-odyssey-5ffd578d5f/)*

标签：#数据增强 #正则化 #鲁棒性 #语音 #说话人验证

评分：**7.5/10** | 创新 1.2/2 | 技术严谨 1.2/1.5 | 实验充分 1.2/1.5 | 清晰度 0.7/1 | 影响力 0.9/1.5 | 开源 1.0/1.5 | 可复现 0.3/0.5 | 工程/实践 1.0/1.5

排名：前25% | 文档类型：方法研究 | 主任务：#说话人验证 | 主方法：#数据增强

会议来源：[官方记录](https://www.isca-archive.org/odyssey_2026/bousquet26_odyssey.html) · [官方 PDF](https://www.isca-archive.org/odyssey_2026/bousquet26_odyssey.pdf)

👥 **作者与机构**

- Pierre\-Michel Bousquet：机构信息未能从会议 PDF 纯文本可靠映射
- Mickaël Rouvier：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

说话人验证需从可变长语音中提取判别性嵌入，在开放集注册与语言通道失配下输出校准分数，训练说话人有限使类内多变性与类间稠密邻域难以兼顾。本文先以0\.9与1\.1倍速度扰动构造虚拟说话人并扩充标签空间，用杰弗里斯损失在交叉熵外约束非目标输出趋向均匀，以容纳新增类并拉大原始与虚拟话语的判别间隔。接着为混合与拼接混合设计近邻感知采样器，每批以前4个样本强制在余弦近邻内按混合系数合成邻域样本，其余样本仍用随机混合，以匹配局部线性假设并检验邻域纯度。采样器输出进入混合损失，上一步近邻合成样本用适配杰弗里斯损失正则化邻域分布，其余样本用适配交叉熵保持全局判别，两路单增强系统最终做分数融合而非单炉联合训练。相对仅压目标类的硬目标交叉熵与随机混合，该链条显式平滑非目标分布并把混合集中到近邻，使增强难度与损失正则化同向协同，缓解多增强混训导致的尾部分数异常。在Cn\-Celeb1评测下，速度扰动结合交叉熵的EER为10\.99%，低于基线交叉熵的EER 11\.15%。该结论适用边界受限，内域VoxCeleb1增益微弱且多增强单炉联合训练易恶化检测代价尾部，向更大规模训练与其他增强的外推尚未验证。原文未披露训练、推理或部署成本。

🔗 **开源资源**

- 代码相关资源：<https://github.com/kiwano-toolkit/kiwano> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 6. [固定条件缺语种、开放条件模型太重：I4U 用多嵌入与虚拟说话人补齐 SRE24](/posts/conference-odyssey-2026-conference-paper-id-colibro26-odyssey-a9d9da8650/)

> 英文题目：*[I4U’s Official and Streamlined Audio Systems for NIST SRE24](/posts/conference-odyssey-2026-conference-paper-id-colibro26-odyssey-a9d9da8650/)*

标签：#数据增强 #模型集成 #语音 #说话人分离标注 #说话人验证

评分：**7.5/10** | 创新 1.2/2 | 技术严谨 1.0/1.5 | 实验充分 1.2/1.5 | 清晰度 0.8/1 | 影响力 1.0/1.5 | 开源 1.0/1.5 | 可复现 0.1/0.5 | 工程/实践 1.2/1.5

排名：前25% | 文档类型：系统技术报告 | 主任务：#说话人验证 | 主方法：#模型集成

会议来源：[官方记录](https://www.isca-archive.org/odyssey_2026/colibro26_odyssey.html) · [官方 PDF](https://www.isca-archive.org/odyssey_2026/colibro26_odyssey.pdf)

👥 **作者与机构**

- Daniele Colibro：机构信息未能从会议 PDF 纯文本可靠映射
- Claudio Vair：机构信息未能从会议 PDF 纯文本可靠映射
- Youzhi Tu：机构信息未能从会议 PDF 纯文本可靠映射
- Junjie Li：机构信息未能从会议 PDF 纯文本可靠映射
- Zilong Huang：机构信息未能从会议 PDF 纯文本可靠映射
- Yijia Chen：机构信息未能从会议 PDF 纯文本可靠映射
- Kong Aik Lee：机构信息未能从会议 PDF 纯文本可靠映射
- Man\-Wai Mak：机构信息未能从会议 PDF 纯文本可靠映射
- Jagabandhu Mishra：机构信息未能从会议 PDF 纯文本可靠映射
- Vishwanath Singh：机构信息未能从会议 PDF 纯文本可靠映射
- Xi Xuan：机构信息未能从会议 PDF 纯文本可靠映射
- Manasi Chhibber：机构信息未能从会议 PDF 纯文本可靠映射
- Oguzhan Kurnaz：机构信息未能从会议 PDF 纯文本可靠映射
- Tomi Kinnunen：机构信息未能从会议 PDF 纯文本可靠映射
- Suyeon Lee：机构信息未能从会议 PDF 纯文本可靠映射
- Chaeyoung Jung：机构信息未能从会议 PDF 纯文本可靠映射
- Kihyun Nam：机构信息未能从会议 PDF 纯文本可靠映射
- Joon Son Chung：机构信息未能从会议 PDF 纯文本可靠映射
- Shuai Wang：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

NIST SRE24要求以可变时长注册语音判断测试语音身份是否一致，输入混合电话语音与视频伴音并含阿拉伯语、法语与英语，输出为说话人是否相同的检测分数，实际难点在于短测试段、多说话人干扰与固定训练语料缺失目标语种及视频信道。方法链首先以对数梅尔谱与语音活动检测前端接Multi2dCoTNet等深度嵌入提取器输出说话人向量，其次经白化、判别降维与长度归一化后由神经PLDA或神经对向量机打分并送入自适应归一化，随后对含多说话人的视频伴音测试段做基于滑窗嵌入聚类的说话人分离标注，最后经融合与质量因子校准输出代价最优分数。关键机制差异在于Multi2dCoTNet在训练期对三个深度的嵌入施加附加间隔损失与两两余弦对齐约束而推理仅用首个嵌入，Mixed\-Norm则拼接多说话人短块构造虚拟说话人扩充归一化队列，从而兼顾判别性与信道鲁棒性。在SRE24开发集与评测集条件下，Multi2dCoTNet单嵌入模型的minCPrim在评测集为0\.276，高于开发集的minCPrim 0\.263。开放条件简化系统以窄带Multi2dCoTNet融合自监督模型替代五系统融合，保持相近精度同时大幅降低部署负担。该结论适用边界受限于SRE24性别、语种与信道划分，测试净语音短于5秒与跨源试验下性能显著恶化尚未验证，而简化方案将计算量从15\.5 TFLOPs降至约4\.8 TFLOPs，推理开销明显下降。

🔗 **开源资源**

- 数据相关资源：<https://catalog.ldc.upenn.edu/> — 链接可访问（HTTP 200）
- 数据相关资源：<https://datasets.appendata.com/datasets> — 链接可访问（HTTP 200）
- 第三方资源：<https://github.com/zhenghuatan/rVAD> — 链接可访问（HTTP 200）
- 第三方资源：<https://github.com/wenet-e2e/wespeaker> — 链接可访问（HTTP 200）
- 第三方资源：<https://github.com/luferrer/ConfidenceIntervals> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 7. [电话线抹掉了谁的指纹：带宽与编码对音频深度伪造溯源的分解影响](/posts/conference-odyssey-2026-conference-paper-id-klein26-odyssey-2fe7dc966f/)

> 英文题目：*[The Effect of Telephony Transmission on Source Tracing of Audio Deepfakes](/posts/conference-odyssey-2026-conference-paper-id-klein26-odyssey-2fe7dc966f/)*

标签：#数据增强 #鲁棒性 #语音 #音频深度伪造检测

评分：**7.5/10** | 创新 1.2/2 | 技术严谨 1.2/1.5 | 实验充分 1.0/1.5 | 清晰度 0.8/1 | 影响力 1.0/1.5 | 开源 1.0/1.5 | 可复现 0.3/0.5 | 工程/实践 1.0/1.5

排名：前25% | 文档类型：应用研究 | 主任务：#音频深度伪造检测 | 主方法：#数据增强

会议来源：[官方记录](https://www.isca-archive.org/odyssey_2026/klein26_odyssey.html) · [官方 PDF](https://www.isca-archive.org/odyssey_2026/klein26_odyssey.pdf)

👥 **作者与机构**

- Nicholas Klein：机构信息未能从会议 PDF 纯文本可靠映射
- Hemlata Tak：机构信息未能从会议 PDF 纯文本可靠映射
- Nikolay Gaubitch：机构信息未能从会议 PDF 纯文本可靠映射
- David Looney：机构信息未能从会议 PDF 纯文本可靠映射
- Tianxiang Chen：机构信息未能从会议 PDF 纯文本可靠映射
- Elie Khoury：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

源追踪输入为经公共电话网传输的窄带语音，输出为已知生成模型类别标签与未知模型检测，难点在于带宽压缩与编解码抹除生成器指纹并引入信道伪影。该工作先基于MLAAD构建宽带与窄带对照条件以分离带宽与编解码退化，其输出的对照性能进入下一步训练设计。接着以残差网络ResNet34学习判别嵌入并用柔性最大能量进行开放集检测，其输出的嵌入分数作为最终判决依据。最后将随机量化与原始增强联合仿真电话失真以替代真实电话数据训练，从而扩大训练分布。相比直接干净训练后测试编解码条件的已有范式，关键差异在于将增强放在重采样与编解码之后以掩蔽易过拟合的高频伪影，实际意义是免除昂贵的真实电话采集。在MLAAD窄带VoIP/PSTN评测条件下，8k→Quantize→RawBoost\+G711训练模型的EERc错误率为15\.1%，低于直接VoIP/PSTN训练模型的EERc错误率18\.9%。该结论适用边界受限于MLAAD所含声码器与Twilio单一路线的英语为主电话场景，对丢包与多运营商级联等更复杂失真尚未验证。原文未披露训练、推理或部署成本。

🔗 **开源资源**

- 代码相关资源：<https://github.com/TakHemlata/> — 链接可访问（HTTP 200）
- 代码相关资源：<https://github.com/swshon/multi-speakerID> — 链接可访问（HTTP 200）
- 数据相关资源：<https://deepfake-total.com/sourcetracing> — 链接可访问（HTTP 200）
- 第三方资源：<https://huggingface.co/speechbrain/> — 暂时无法访问
- 第三方资源：<https://www.twilio.com/docs/voice/api/sip-interface> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 8. [整句高分掩盖局部损伤：用部分混合与帧对比学习做可定位的质量嵌入](/posts/conference-odyssey-2026-conference-paper-id-kuhlmann26-odyssey-83bd353b92/)

> 英文题目：*[Speech Quality Embeddings for Improved Detection and Classification of Degradations in Speech Signals](/posts/conference-odyssey-2026-conference-paper-id-kuhlmann26-odyssey-83bd353b92/)*

标签：#数据增强 #对比学习 #语音 #音频事件检测 #语音质量评估

评分：**7.4/10** | 创新 1.4/2 | 技术严谨 1.1/1.5 | 实验充分 1.1/1.5 | 清晰度 0.8/1 | 影响力 0.9/1.5 | 开源 1.0/1.5 | 可复现 0.3/0.5 | 工程/实践 0.8/1.5

排名：前50% | 文档类型：方法研究 | 主任务：#语音质量评估 | 主方法：#对比学习

会议来源：[官方记录](https://www.isca-archive.org/odyssey_2026/kuhlmann26_odyssey.html) · [官方 PDF](https://www.isca-archive.org/odyssey_2026/kuhlmann26_odyssey.pdf)

👥 **作者与机构**

- Michael Kuhlmann：机构信息未能从会议 PDF 纯文本可靠映射
- Tobias Cord\-Landwehr：机构信息未能从会议 PDF 纯文本可靠映射
- Reinhold Haeb\-Umbach：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

自动主观语音质量评估以整句语音为输入、输出 utterance 级平均意见分，难以定位现代高质量语音中时域受限的局部短时退化，且缺乏帧级标注导致弱监督学习困难。方法先利用干净与退化平行语料，以预训练局部评估模型生成帧级伪分，再经部分混合在波形域拼接局部退化片段并按同一掩码加权伪分，形成帧级强伪目标以训练帧级MOS分支。为解耦评分与表征学习，模型在共享编码器后增加退化类型嵌入分支，对每帧退化组合类别施加帧级有监督对比损失，使同类退化帧在单位超球面隐空间聚拢。检测时以干净验证集嵌入均值作为注册向量，与输入帧嵌入做余弦相似度判决，从而替代MOS阈值路径并保留更大判决裕量。与弱标签基线相比，该嵌入路径对退化起始更敏感，并能同时支持退化类型验证与检索。在LibriAugmented测试集下，模型CON1的EER错误率为4\.88%，高于NISQA域内条件下模型CON1的EER错误率3\.87%。多退化并发与域外未见退化时类别可分性与聚类纯度明显下降，结论适用边界受限于合成局部退化与已知退化组合，跨真实退化与大规模并发场景尚未验证。原文未披露训练、推理或部署成本

🔗 **开源资源**

- 代码相关资源：<https://github.com/fgnt/local_sqa> — 链接可访问（HTTP 200）
- 代码相关资源：<https://github.com/fgnt/> — 链接可访问（HTTP 200）
- 第三方资源：<https://github.com/iver56/audiomentations/> — 链接可访问（HTTP 200）
- 第三方资源：<https://openreview.net/forum?id=7fQohcFrxG> → <https://openreview.net/challenge?redirect=%2Fforum%3Fid%3D7fQohcFrxG> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 9. [更深更宽不一定更值：说话人确认中精度与能耗的拐点](/posts/conference-odyssey-2026-conference-paper-id-leguillier26-odyssey-ddda275653/)

> 英文题目：*[Assessing the Energy and Carbon Emissions of Neural Speaker Verification Model in Training and Inference](/posts/conference-odyssey-2026-conference-paper-id-leguillier26-odyssey-ddda275653/)*

标签：#CNN #模型比较 #高效推理 #说话人验证

评分：**7.4/10** | 创新 1.0/2 | 技术严谨 1.2/1.5 | 实验充分 1.0/1.5 | 清晰度 0.7/1 | 影响力 1.0/1.5 | 开源 1.0/1.5 | 可复现 0.3/0.5 | 工程/实践 1.2/1.5

排名：前50% | 文档类型：应用研究 | 主任务：#说话人验证 | 主方法：#CNN

会议来源：[官方记录](https://www.isca-archive.org/odyssey_2026/leguillier26_odyssey.html) · [官方 PDF](https://www.isca-archive.org/odyssey_2026/leguillier26_odyssey.pdf)

👥 **作者与机构**

- Hugo Leguillier：机构信息未能从会议 PDF 纯文本可靠映射
- Driss Matrouf：机构信息未能从会议 PDF 纯文本可靠映射
- Guillaume Lechien：机构信息未能从会议 PDF 纯文本可靠映射
- Mickael Rouvier：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

说话人验证（speaker verification, SV）需将变长语音映射为固定说话人嵌入（speaker embedding）并完成跨信道验证，难点是精度提升高度依赖主干容量而环境代价未被量化。本文以残差网络（Residual Network, ResNet）主干为对象构建三步评估链：首先在VoxCeleb2上按深度、宽度和阶段分布训练系列变体并经池化与全连接得到嵌入，其次用域内与域外评测得到等错误率（equal error rate, EER）与最小检测代价（minimum detection cost function, minDCF），最后经节点级传感同步记录训练与推理的能耗与碳足迹以刻画权衡。与仅报告精度的已有SV研究不同，该工作将结构缩放与实测千瓦时及二氧化碳当量直接挂钩，揭示容量集中于中间阶段更有效。在5个评测集平均指标上ResNet\-419\-D相对ResNet\-200\-D的平均EER仅从3\.44%降至3\.35%，而训练能耗从222\.53 kWh激增至895\.67 kWh，呈现明显收益递减。该结论限于单卡NVIDIA Tesla V100 32GB与法国低碳电网条件，未验证其它硬件、大规模自监督主干与超参数搜索总成本，且极深模型推理缺失全精度对照。训练成本最高达数百千瓦时，推理在CommonBench全量提取时为千瓦时量级，混合精度可降低约25%至35%能耗。

🔗 **开源资源**

- 代码相关资源：<https://github.com/kiwano-toolkit/kiwano> — 链接可访问（HTTP 200）
- 第三方资源：<https://www.electricitymaps.com/> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 10. [等错误率打平不等于匿名打平：用相似度秩泄露称量残留身份](/posts/conference-odyssey-2026-conference-paper-id-chandra26-odyssey-98d4b9f1a7/)

> 英文题目：*[Evaluating voice anonymisation using similarity rank disclosure](/posts/conference-odyssey-2026-conference-paper-id-chandra26-odyssey-98d4b9f1a7/)*

标签：#评测协议 #模型评估 #隐私保护 #说话人匿名化

评分：**7.0/10** | 创新 1.5/2 | 技术严谨 1.2/1.5 | 实验充分 1.2/1.5 | 清晰度 0.8/1 | 影响力 1.2/1.5 | 开源 0.0/1.5 | 可复现 0.1/0.5 | 工程/实践 1.0/1.5

排名：前50% | 文档类型：方法研究 | 主任务：#说话人匿名化 | 主方法：#评测协议

会议来源：[官方记录](https://www.isca-archive.org/odyssey_2026/chandra26_odyssey.html) · [官方 PDF](https://www.isca-archive.org/odyssey_2026/chandra26_odyssey.pdf)

👥 **作者与机构**

- Shilpa Chandra：机构信息未能从会议 PDF 纯文本可靠映射
- Matteo Pettenò：机构信息未能从会议 PDF 纯文本可靠映射
- Michele Panariello：机构信息未能从会议 PDF 纯文本可靠映射
- Nicholas Evans：机构信息未能从会议 PDF 纯文本可靠映射
- Massimiliano Todisco：机构信息未能从会议 PDF 纯文本可靠映射
- Tom Bäckström：机构信息未能从会议 PDF 纯文本可靠映射
- Dorothea Kolossa：机构信息未能从会议 PDF 纯文本可靠映射
- Rainer Martin：机构信息未能从会议 PDF 纯文本可靠映射
- Themos Stafylakis：机构信息未能从会议 PDF 纯文本可靠映射
- Nicolas Gengembre：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

语音匿名化输入原始波形，期望输出保留语言内容但不可链接到原说话人，难点是现有评估依赖自动说话人验证的二值判决与工作点选择，难以反映表征层残留的可识别信息。该方法先对输入与参考库提取说话人嵌入等表征并计算相似度排序，输出每个输入对应的匹配秩序列。再由匹配秩序列构建经验秩分布并经贝塔二项拟合平滑，将离散直方图转化为平滑秩概率。最后将先验均匀熵与后验秩概率之差换算为比特级披露量，由平滑概率直接得到平均与最坏泄露及秩 spread。与等错误率相比，该机制不依赖分类器阈值与校准，可直接比较不同表征并揭示分布尾部风险，因而能发现验证判决掩盖的系统性弱点。在2024年语音隐私挑战半知情攻击评测设置下，T10\-2的识别率指标IdR为69\.37%，高于T8\-5的识别率指标IdR的4\.62%。该结论适用边界目前仅在40个说话人英文朗读语料与所选嵌入下验证，向大规模开放集与跨属性泄露的外推尚未验证，原文未披露训练、推理或部署成本。

🔗 **开源资源**

- 第三方资源：<https://doi.org/10.1121/1.1458024> → <https://pubs.aip.org/jasa/article/111/4/1917/547221/YIN-a-fundamental-frequency-estimator-for-speech> — 链接不可用（HTTP 403）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 11. [听得出却标不对：当信任线索遇上部分合成语音的人耳定位实验](/posts/conference-odyssey-2026-conference-paper-id-erscoi26-odyssey-feb6ca7239/)

> 英文题目：*[I Hear, Therefore I Trust: A Socio\-Technical Investigation of Humans as Synthetic Speech Detectors](/posts/conference-odyssey-2026-conference-paper-id-erscoi26-odyssey-feb6ca7239/)*

标签：#众包评测 #言语感知 #语音 #音频深度伪造检测

评分：**7.0/10** | 创新 1.2/2 | 技术严谨 1.0/1.5 | 实验充分 0.9/1.5 | 清晰度 0.8/1 | 影响力 0.9/1.5 | 开源 1.0/1.5 | 可复现 0.3/0.5 | 工程/实践 0.9/1.5

排名：前50% | 文档类型：应用研究 | 主任务：#音频深度伪造检测 | 主方法：#众包评测

会议来源：[官方记录](https://www.isca-archive.org/odyssey_2026/erscoi26_odyssey.html) · [官方 PDF](https://www.isca-archive.org/odyssey_2026/erscoi26_odyssey.pdf)

👥 **作者与机构**

- Lelia Erscoi：机构信息未能从会议 PDF 纯文本可靠映射
- Tomi Kinnunen：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

该研究输入为真实、完全合成与部分合成英语语音叠加城市环境声与情感效价图片，输出为听众标记的可疑语音区间与机械感等六维感知质量评分，难点在于合成痕迹微弱且局部篡改缺乏可对照锚点，而日常信任线索会争夺注意并扭曲真实性判断。方法链分三步：首先从LlamaPartialSpoof抽取限定 utterances 并混入声景、匹配高唤醒图片以构造类社交媒体试次，其试次材料直接进入操纵环节；其次在被试间操纵指导框架与效价启动、在试次内随机操纵来源标签以形成信任条件，其分组标签随试次进入行为采集；最后要求47名美国英语母语者在Streamlit平台完整收听后做回顾式旗标或区间标注并完成量表评分，标注结果以0\.2秒滑窗加正负200毫秒容差换算为窗口准确率并用被试随机截距线性混合模型检验。与孤立二分类听辨范式相比，该定位任务同时观测行为定位、主观质量与操作日志，因而能暴露完全合成被系统性漏检与低估的范围。在20试次多数投票评测任务下，真实语音试次的准确率为80%，高于全部20个试次总体的准确率60%。该结论适用边界受限于有预警的众包审核场景、美国英语母语者与有限合成器集合，尚未验证无预警野外遭遇与跨语言泛化。原文未披露训练、推理或部署成本。

🔗 **开源资源**

- 模型相关资源：<https://github.com/espnet/espnet/tree/master/egs2/ljspeech/tts1> — 链接可访问（HTTP 200）
- 模型相关资源：<https://github.com/coquI%E2%88%92ai/TTS/> — 链接不可用（HTTP 404）
- 模型相关资源：<https://huggingface.co/coqui/XTTS-v2> — 暂时无法访问
- 模型相关资源：<https://huggingface.co/lj1995/GPT-SoVITS/tree/main> — 暂时无法访问
- 模型相关资源：<https://github.com/FunAudioLLM/CosyVoice> → <https://github.com/QwenAudio/CosyVoice> — 链接可访问（HTTP 200）
- 模型相关资源：<https://elevenlabs.io/> — 链接可访问（HTTP 200）
- 第三方资源：<https://streamlit.io/> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 12. [在嵌入空间做生成式后端：FM\-SEE 如何把教师嵌入推向干净分布](/posts/conference-odyssey-2026-conference-paper-id-novoselov26-odyssey-52bb301c24/)

> 英文题目：*[FM\-SEE: Flow Matching\-based Generative Model For Speaker Embedding Enhancement](/posts/conference-odyssey-2026-conference-paper-id-novoselov26-odyssey-52bb301c24/)*

标签：#流匹配 #鲁棒性 #语音 #说话人验证

评分：**7.0/10** | 创新 1.3/2 | 技术严谨 0.8/1.5 | 实验充分 1.0/1.5 | 清晰度 0.8/1 | 影响力 1.0/1.5 | 开源 1.0/1.5 | 可复现 0.1/0.5 | 工程/实践 1.0/1.5

排名：前50% | 文档类型：方法研究 | 主任务：#说话人验证 | 主方法：#流匹配

会议来源：[官方记录](https://www.isca-archive.org/odyssey_2026/novoselov26_odyssey.html) · [官方 PDF](https://www.isca-archive.org/odyssey_2026/novoselov26_odyssey.pdf)

👥 **作者与机构**

- Sergey Novoselov：机构信息未能从会议 PDF 纯文本可靠映射
- Vladimir Volokhov：机构信息未能从会议 PDF 纯文本可靠映射
- Nikita Khmelev：机构信息未能从会议 PDF 纯文本可靠映射
- Anikin Alexandr：机构信息未能从会议 PDF 纯文本可靠映射
- Anastasia Zorkina：机构信息未能从会议 PDF 纯文本可靠映射
- Anastasia Korenevskaya：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

说话人验证以话语对余弦相似度为输出，输入为信道、混响、语言、时长与多人干扰高度失配的注册与测试语音，目标与非目标分数严重交叠导致判别与校准同时退化且嵌入不确定性未被建模。先由判别式wav2vec2\.0教师编码器输入增强失真语音，负责提取含噪条件嵌入与干净目标嵌入并组成训练对，输出的成对向量进入流匹配训练。再由流匹配网络输入标准高斯噪声与条件嵌入的线性插值向量，负责以均方误差回归目标差向量学习从高斯到干净嵌入分布的条件向量场，输出的向量场进入推理采样器。最后推理时以含噪嵌入为条件，用欧拉常微分方程求解器沿已学向量场采样得到增强嵌入，该增强嵌入再进入同一生成器估计话语目标分数均值以推导线性话语间分数归一化并保留余弦打分。与直接去噪自编码器和监督信道归一化不同，该方法将鲁棒性统一为后端嵌入分布传输与似然比导向的分数建模，无需大训练集。在SRE 24 eval audio\-video评测下，w2v FM\-SEE的EER为4\.695，低于w2v的EER 5\.048。其适用边界受限于噪声混响远场失配，在干净VoxCeleb1\-O上增益消失并相对退化且与监督信道归一化叠加增量有限，推理开销表现为实时因子由基线1\.69变为FM\-SEE的1\.82。

🔗 **开源资源**

- 数据相关资源：<https://catalog.ldc.upenn.edu/LDC2019S20> — 链接可访问（HTTP 200）
- 数据相关资源：<https://catalog.ldc.upenn.edu/LDC2023S03> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 13. [加密音频也要算频谱：用近似短时傅里叶把量化误差让给比特预算](/posts/conference-odyssey-2026-conference-paper-id-nguyen26-odyssey-0bd13e80ff/)

> 英文题目：*[Quantized Approximate Signal Processing \(QASP\): Towards Homomorphic Encryption for Audio](/posts/conference-odyssey-2026-conference-paper-id-nguyen26-odyssey-0bd13e80ff/)*

标签：#模型量化 #时频分析 #隐私保护 #音频分类

评分：**6.9/10** | 创新 1.6/2 | 技术严谨 1.2/1.5 | 实验充分 1.0/1.5 | 清晰度 0.8/1 | 影响力 1.0/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 1.0/1.5

排名：前50% | 文档类型：方法研究 | 主任务：#音频分类 | 主方法：#模型量化

会议来源：[官方记录](https://www.isca-archive.org/odyssey_2026/nguyen26_odyssey.html) · [官方 PDF](https://www.isca-archive.org/odyssey_2026/nguyen26_odyssey.pdf)

👥 **作者与机构**

- Tu Duyen Nguyen：机构信息未能从会议 PDF 纯文本可靠映射
- Adrien Lesage：机构信息未能从会议 PDF 纯文本可靠映射
- Clotilde Cantini：机构信息未能从会议 PDF 纯文本可靠映射
- Rachid Riad：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

输入为客户端原始语音波形，输出为服务端在加密态直接得到的时频谱及其描述符或分类判定，难点在于全同态加密仅支持低位宽整数查表运算而传统谱计算依赖高精度复数乘法与对数变换。该链路先将短时傅里叶变换与Mel、倒谱系数与Gammatone滤波器重写为固定权重卷积网络，使其输出进入量化编译工具链。接着以膨胀抽取、变窗与Poor Man投影等近似压缩累加器位宽需求，把省出预算留给激活量化以降低整体量化误差。最后经范围仿射量化编译为TFHE电路，在密文上执行描述符统计或浅层分类，密文结果解密后逼近明文流水线输出。与以往仅加密后端而前端仍在明文计算特征的做法不同，该工作把前端本身加密，以牺牲部分高频谱精度换取量化误差下降，具有补齐隐私短板的实际意义。在VocalSet任务下，膨胀d=4的错误率为8\.3%，低于传统STFT的错误率10\.4%。其结论适用边界受限于短片段离线批处理与低频主导描述符，高频谐波损失严重且MFCC误差最大，在VoxCeleb等大规模说话人验证上尚未验证。原文披露64ms音频加密短时傅里叶变换在Apple M2硬件上延迟约12970s而明文仅0\.004s，但帧间可并行故推理开销须靠服务器级加速分摊。

🔗 **开源资源**

- 第三方资源：<https://github.com/zama-ai/concrete> — 链接可访问（HTTP 200）
- 第三方资源：<https://doi.org/10.5281/zenodo.3333552> → <https://zenodo.org/records/22146916> — 链接可访问（HTTP 200）
- 第三方资源：<https://heir.dev/> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 14. [冻住大模型只调说话人旋钮：FiLM 条件化做病理语音识别](/posts/conference-odyssey-2026-conference-paper-id-lopez26-odyssey-da31198119/)

> 英文题目：*[FiLM\-Based Speaker Conditioning of a SpeechLLM for Pathological Speech Recognition](/posts/conference-odyssey-2026-conference-paper-id-lopez26-odyssey-da31198119/)*

标签：#参数高效微调 #低资源 #语音 #语音识别 #音频问答

评分：**6.8/10** | 创新 1.2/2 | 技术严谨 1.0/1.5 | 实验充分 1.0/1.5 | 清晰度 0.7/1 | 影响力 0.6/1.5 | 开源 1.0/1.5 | 可复现 0.3/0.5 | 工程/实践 1.0/1.5

排名：前50% | 文档类型：方法研究 | 主任务：#语音识别 | 主方法：#参数高效微调

会议来源：[官方记录](https://www.isca-archive.org/odyssey_2026/lopez26_odyssey.html) · [官方 PDF](https://www.isca-archive.org/odyssey_2026/lopez26_odyssey.pdf)

👥 **作者与机构**

- Fernando López：机构信息未能从会议 PDF 纯文本可靠映射
- Santosh Kesiraju：机构信息未能从会议 PDF 纯文本可靠映射
- Jordi Luque：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

病理语音识别的输入是构音障碍者的语音波形，输出是文字转写，难点在于神经运动障碍导致的高说话人间变异与规范语音预训练分布严重失配，而可用病理数据稀少且说话人多样性低。所提方法先用说话人编码器从原始波形提取x向量并对健康语音置零，再经每层独立的FiLM生成器产生仿射参数与门控系数，随后在冻结的语音大模型编码器各Transformer层输出上做门控残差调制，最后经冻结连接器与解码器生成文本。与直接修改基座权重的全量微调和低秩适配不同，该方法不改动基座参数并以恒等初始化保证健康语音无扰动。在TORGO整体测试集上，全量微调将词错误率从基座模型的25\.15%降至10\.97%，而所提说话人条件方法原始输出仅为23\.24%，经规则后处理后为16\.36%。该结论仅适用于以轻中度为主的英语TORGO与西班牙语NeuroVoz小样本适配场景，对重度单字、噪声与短时语音的外推尚未验证。原文未披露训练、推理或部署成本。

🔗 **开源资源**

- 代码相关资源：<https://github.com/ferugit/film-spk-asr> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 15. [用说话人描述做监督：SLAP 如何把人口学、嗓音与健康属性装进同一语音表示](/posts/conference-odyssey-2026-conference-paper-id-ando26-odyssey-54323ecc51/)

> 英文题目：*[SLAP: Learning Speaker and Health\-Related Representations from Natural Language Supervision](/posts/conference-odyssey-2026-conference-paper-id-ando26-odyssey-54323ecc51/)*

标签：#语音生物标志物 #对比学习 #多语言 #零样本 #病理语音评估

评分：**6.7/10** | 创新 1.4/2 | 技术严谨 1.0/1.5 | 实验充分 1.2/1.5 | 清晰度 0.8/1 | 影响力 1.0/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 1.0/1.5

排名：前50% | 文档类型：方法研究 | 主任务：#病理语音评估 | 主方法：#对比学习

会议来源：[官方记录](https://www.isca-archive.org/odyssey_2026/ando26_odyssey.html) · [官方 PDF](https://www.isca-archive.org/odyssey_2026/ando26_odyssey.pdf)

👥 **作者与机构**

- Angelika Andò：机构信息未能从会议 PDF 纯文本可靠映射
- Auguste Crabeil：机构信息未能从会议 PDF 纯文本可靠映射
- Quentin Spinat：机构信息未能从会议 PDF 纯文本可靠映射
- Adrien Lesage：机构信息未能从会议 PDF 纯文本可靠映射
- Rachid Riad：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

输入为任意时长语音，输出为人口统计学、嗓音特征与健康状态的二分类判断，难点在于标注异构、跨语言差异与临床人群分布偏移大，且小样本下难以泛化。该方法先将临床量表分数按临床指南离散为严重度标签并拼接打乱属性，再经大语言模型生成多版本说话人自然语言描述以提供监督文本。接着将语音对数梅尔谱送入视觉Transformer音频编码器提取声学嵌入，同时将上一步描述送入文本编码器得到语义嵌入并映射至共享空间。最后以双向对比损失对齐音频文本对，并联合掩码自编码重建损失保留细粒度时频结构，共同优化表示。与通用CLAP及纯自监督编码器不同，其监督信号直接描述年龄性别与抑郁疲劳等临床状态，因而保留临床可解释的语言对齐能力。在38个任务的零样本评测下，SLAP的F1为62\.9%，高于CLAP\-MS的F1 42\.4%。结论受限于二分类粗粒度标签与小样本临床子集，多分类严重度与未见病种外推尚未验证。原文未披露训练、推理或部署成本。

🔗 **开源资源**

本次未形成可展示的已核验资源记录，开放状态尚未核实。
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 16. [把混杂语音赶出说话人簇：增广状态空间如何净化 HMM 聚类](/posts/conference-odyssey-2026-conference-paper-id-chowdhury26-odyssey-578c40d927/)

> 英文题目：*[Augmented State Space Speaker Clustering: Reformulating HMM Based Clustering To Improve Speaker Diarization](/posts/conference-odyssey-2026-conference-paper-id-chowdhury26-odyssey-578c40d927/)*

标签：#状态空间模型 #语音 #说话人分离标注 #重叠语音检测

评分：**6.7/10** | 创新 1.4/2 | 技术严谨 1.2/1.5 | 实验充分 1.2/1.5 | 清晰度 0.8/1 | 影响力 1.0/1.5 | 开源 0.0/1.5 | 可复现 0.1/0.5 | 工程/实践 1.0/1.5

排名：前50% | 文档类型：方法研究 | 主任务：#说话人分离标注 | 主方法：#状态空间模型

会议来源：[官方记录](https://www.isca-archive.org/odyssey_2026/chowdhury26_odyssey.html) · [官方 PDF](https://www.isca-archive.org/odyssey_2026/chowdhury26_odyssey.pdf)

👥 **作者与机构**

- Anurag Chowdhury：机构信息未能从会议 PDF 纯文本可靠映射
- Abhinav Misra：机构信息未能从会议 PDF 纯文本可靠映射
- Yinong Wang：机构信息未能从会议 PDF 纯文本可靠映射
- Bongjun Kim：机构信息未能从会议 PDF 纯文本可靠映射
- Mark C\. Fuhs：机构信息未能从会议 PDF 纯文本可靠映射
- Monika Woszczyna：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

说话人日志输入长录音需输出按说话人划分的时间区间，难点在于医患远场对话中多轮交替、重叠语音与背景人声会污染单说话人表征并模糊切换边界。方法先以语音活动检测与说话人转换点切分滑窗并提取ECAPA\-TDNN嵌入，再以凝聚层次聚类初始化说话人状态并以前验平滑后验。接着在期望最大化中以背景与多说话人专用状态吸收低置信帧并排除其对单说话人均值与精度矩阵估计的干扰，切换约束强制边界状态转移。最后按需以外部分段重叠语音检测替代熵基多说话人检测实现重叠帧第二说话人归属，形成切分\-初始化\-约束估计\-重叠归属链条。与VBx将所有帧更新单说话人状态不同，该方法通过状态增广与转移约束实现噪声隔离与边界强制切换，提升单说话人状态估计纯度。在DoPaCo无重叠评测设置下，AS3C的SER错误率为3\.17，低于VBx的SER错误率7\.06。当前结论适用边界限于两到四人英语会议与医患对话的测试条件，尚未验证大说话人数与强噪声远场外推。原文未披露训练、推理或部署成本。

🔗 **开源资源**

- 第三方资源：<https://github.com/BUTSpeechFIT/DiariZen> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 17. [把预训练语音模型改成高层专家分工：抗伪造要在保留表示的前提下做稀疏扩容](/posts/conference-odyssey-2026-conference-paper-id-daumain26-odyssey-46e220378d/)

> 英文题目：*[From Self\-Supervised Speech Models to Mixture\-of\-Experts for Robust Anti\-Spoofing](/posts/conference-odyssey-2026-conference-paper-id-daumain26-odyssey-46e220378d/)*

标签：#混合专家模型 #自监督学习 #鲁棒性 #语音 #语音伪造检测

评分：**6.7/10** | 创新 1.3/2 | 技术严谨 1.0/1.5 | 实验充分 1.3/1.5 | 清晰度 0.8/1 | 影响力 1.0/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 1.0/1.5

排名：前50% | 文档类型：方法研究 | 主任务：#语音伪造检测 | 主方法：#混合专家模型

会议来源：[官方记录](https://www.isca-archive.org/odyssey_2026/daumain26_odyssey.html) · [官方 PDF](https://www.isca-archive.org/odyssey_2026/daumain26_odyssey.pdf)

👥 **作者与机构**

- Hugo Daumain：机构信息未能从会议 PDF 纯文本可靠映射
- Driss Matrouf：机构信息未能从会议 PDF 纯文本可靠映射
- Khaled Khelif：机构信息未能从会议 PDF 纯文本可靠映射
- Mickael Rouvier：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

语音伪造检测的输入为原始波形，输出为真实与伪造的二分类概率，难点在于训练时见过的合成器与测试时新出现的编解码、扩散和流匹配方法之间存在显著分布偏移。所提方法以 WavLM\-Large 为自监督骨干抽取分层声学表示，将所用 13 层中后部 6 层的变换器前馈模块替换为 4 专家稠密混合专家结构并由层独立门控做整句 Top\-1 硬路由，再由多头因子化注意力（Multi\-Head Factorized Attention，MHFA）聚合多层表示完成分类。与冻结骨干加低秩适配器（Low\-Rank Adaptation，LoRA）的做法不同，该路线允许专家、注意力与门控联合全量微调以重塑内部表示。在 14 个评测库上的宏观平均等错误率（Macro EER）由基线的 5\.46% 降至 4\.81%，相对改善 11\.9%，微观混合等错误率（Micro EER）由 14\.95% 降至 12\.34%，显示跨合成器与跨语言泛化有所改善。专家激活分析表明路由分布在不同合成器间差异较小，平均成对 Jensen\-Shannon 散度多在 0\.08\-0\.29 区间，未发现面向特定攻击的清晰分工，结论不宜外推为可解释的攻击归因。原文未披露训练、推理或部署成本。

🔗 **开源资源**

- 第三方资源：<https://github.com/kiwano-toolkit/kiwano> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 18. [说话人受控下做语种识别：用任务相关预训练压住说话人捷径，再用间隔损失拉开语种边界](/posts/conference-odyssey-2026-conference-paper-id-fang26-odyssey-d1602cc36a/)

> 英文题目：*[Spoken Language Identification with Pre\-trained Models and Margin Loss](/posts/conference-odyssey-2026-conference-paper-id-fang26-odyssey-d1602cc36a/)*

标签：#迁移学习 #多语言 #预训练 #语言识别

评分：**6.7/10** | 创新 1.0/2 | 技术严谨 1.0/1.5 | 实验充分 0.9/1.5 | 清晰度 0.8/1 | 影响力 0.7/1.5 | 开源 1.0/1.5 | 可复现 0.3/0.5 | 工程/实践 1.0/1.5

排名：前50% | 文档类型：系统技术报告 | 主任务：#语言识别 | 主方法：#迁移学习

会议来源：[官方记录](https://www.isca-archive.org/odyssey_2026/fang26_odyssey.html) · [官方 PDF](https://www.isca-archive.org/odyssey_2026/fang26_odyssey.pdf)

👥 **作者与机构**

- Zhihua Fang：机构信息未能从会议 PDF 纯文本可靠映射
- Liang He：机构信息未能从会议 PDF 纯文本可靠映射
- Weiwu Jiang：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

TidyLang Challenge 2026要求在同一说话人讲2至10种语言的说话人控制条件下，以语音波形为输入，输出语种标签或注册与测试语音的相似度分数，难点在于剥离说话人特征干扰并泛化到未见语种。第一步采用VoxLingua107预训练的ECAPA\-TDNN作为话语级编码器，通过多尺度时序建模与注意力统计池化提取语言判别性嵌入。第二步将嵌入送入加性角间隔Softmax或真实加性间隔Softmax分类头，以角度间隔约束或难负类真实间隔惩罚计算损失并微调整体网络。第三步按任务分流推理，闭集分类直接取分类头最高分，未见语言验证则仅用编码器嵌入做余弦相似度打分。相对Wav2Vec2\-Large聚合多层表示加ArcFace的官方基线，该方法以任务相关预训练替代通用自监督表示，并用显式间隔压缩类内分布、拉开类间边界，从而抑制说话人变异并聚焦相似语言细粒度差异。在Tidy\-X语料任务1评测设置下，ECAPA\-TDNN加AAM\-Softmax方法的宏观准确率为85\.95%，高于官方基线方法的宏观准确率40\.25%。该结论适用边界受限于仅使用Tidy\-X训练与验证划分的闭条件，对噪声、短语音与完全开放语种的外推尚未验证，训练成本对应单块NVIDIA RTX 4090D硬件上最多30轮、批量64的微调开销。

🔗 **开源资源**

- 代码相关资源：<https://github.com/PunkMale/TidyLang2026> — 链接可访问（HTTP 200）
- 第三方资源：<https://tidylang2026.github.io/> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 19. [不要语言模型改错，还能从皮层电流读出句子吗](/posts/conference-odyssey-2026-conference-paper-id-khanday26-odyssey-7808b08fb8/)

> 英文题目：*[End\-to\-End Intracortical Speech Decoding from Neural Activity](/posts/conference-odyssey-2026-conference-paper-id-khanday26-odyssey-7808b08fb8/)*

标签：#数据增强 #Conformer #脑信号 #言语神经解码

评分：**6.7/10** | 创新 1.2/2 | 技术严谨 1.0/1.5 | 实验充分 0.8/1.5 | 清晰度 0.7/1 | 影响力 0.9/1.5 | 开源 1.0/1.5 | 可复现 0.3/0.5 | 工程/实践 0.8/1.5

排名：前50% | 文档类型：方法研究 | 主任务：#言语神经解码 | 主方法：#Conformer

会议来源：[官方记录](https://www.isca-archive.org/odyssey_2026/khanday26_odyssey.html) · [官方 PDF](https://www.isca-archive.org/odyssey_2026/khanday26_odyssey.pdf)

👥 **作者与机构**

- Owais M\. Khanday：机构信息未能从会议 PDF 纯文本可靠映射
- Jose A\. Gonzalez\-Lopez：机构信息未能从会议 PDF 纯文本可靠映射
- Marc Ouellet：机构信息未能从会议 PDF 纯文本可靠映射
- Alberto Galdón：机构信息未能从会议 PDF 纯文本可靠映射
- Gonzalo Olivares Granado：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

该任务输入为4阵列共256电极提取的阈值穿越与尖峰带功率特征，按20ms分箱为512维序列，输出为英文字符序列，难点在于无声学证据、跨45会话非平稳漂移以及无语言模型纠错时的边界模糊。方法链分4步：会话特定线性对齐层先归一化各会话特征分布，再经跨步时间块嵌入压缩序列并保留局部动态，接着6层Conformer编码器联合建模全局与局部依赖，最后双层预测头以联结时序分类做字符预测。相比依赖外部大词表重打分的传统管线，该设计将语言结构剥离出神经解码，突出神经信号本身的可解码性与低延迟可部署性。在Brain\-to\-Text 25基准验证集1426句上，贪婪解码字符错误率为23\.80%，相对30\.00%的基线绝对降低6\.20个百分点、相对降低20\.67%。结论仅适用于单名肌萎缩侧索硬化症被试的离线验证划分，后期会话退化与词边界错误仍严重，跨被试与实时外推尚未验证。原文未披露训练、推理或部署成本。

🔗 **开源资源**

- 代码相关资源：<https://github.com/owaismujtaba/E2ESpeechDecoding.git> → <https://github.com/owaismujtaba/E2ESpeechDecoding> — 链接可访问（HTTP 200）
- 数据相关资源：<https://www.kaggle.com/competitions/> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 20. [只换音色不够：用离散单元同时改写节奏的匿名化](/posts/conference-odyssey-2026-conference-paper-id-bakari26-odyssey-693049de1a/)

> 英文题目：*[Joint Timbral and Non\-Timbral Speaker Anonymisation](/posts/conference-odyssey-2026-conference-paper-id-bakari26-odyssey-693049de1a/)*

标签：#生成对抗网络 #向量量化 #隐私保护 #语音 #说话人匿名化

评分：**6.6/10** | 创新 1.5/2 | 技术严谨 1.1/1.5 | 实验充分 1.2/1.5 | 清晰度 0.9/1 | 影响力 1.0/1.5 | 开源 0.0/1.5 | 可复现 0.1/0.5 | 工程/实践 0.8/1.5

排名：前50% | 文档类型：方法研究 | 主任务：#说话人匿名化 | 主方法：#向量量化

会议来源：[官方记录](https://www.isca-archive.org/odyssey_2026/bakari26_odyssey.html) · [官方 PDF](https://www.isca-archive.org/odyssey_2026/bakari26_odyssey.pdf)

👥 **作者与机构**

- Rayane Bakari：机构信息未能从会议 PDF 纯文本可靠映射
- Olivier Le Blouch：机构信息未能从会议 PDF 纯文本可靠映射
- Nicolas Gengembre：机构信息未能从会议 PDF 纯文本可靠映射
- Nicholas Evans：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

语音匿名化的输入是源说话人波形，输出是保留语言内容但不可关联原身份的波形，难点在于替换音色后语速、节奏、风格等非音色线索仍可泄露身份。所提框架先用预训练HuBERT提取帧级表示并经K均值聚类得到离散单元序列，去重折叠后得到音素级内容序列，再由时长预测器在目标说话人嵌入条件下重写各单元持续时间以完成节奏转换，最后将按预测时长扩展的单元序列与同一目标嵌入拼接送入单元HiFi\-GAN声码器合成波形。与保留源时长的kNN\-VC和仅报告通用验证的Private kNN\-VC不同，该机制同时改写时间结构与合成条件以联合遮蔽音色与非音色线索。在LibriSpeech测试集与VoicePrivacy Challenge 2024框架下，最强变体DU\-pred\-nt在半知情攻击下非音色验证等错误率为24\.6%，相对Private kNN\-VC的18\.6%提升6\.0个百分点，约32%相对提升。代价是词错误率升至7\.41%，高于Private kNN\-VC的5\.63%。结论仅在朗读英语与LibriTTS采样的目标嵌入下验证，对自发语音、口音与情感保留的外推尚未证明。原文未披露训练与推理成本。

🔗 **开源资源**

本次未形成可展示的已核验资源记录，开放状态尚未核实。
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 21. [说话人偏置当捷径：用教师引导加信息瓶颈做去身份的伪造检测](/posts/conference-odyssey-2026-conference-paper-id-dao26-odyssey-77988073ef/)

> 英文题目：*[Speaker\-Invariant Representation Learning for Spoofing Detection via Gradient Reversal and A Variational Information Bottleneck](/posts/conference-odyssey-2026-conference-paper-id-dao26-odyssey-77988073ef/)*

标签：#对抗训练 #知识蒸馏 #正则化 #语音伪造检测

评分：**6.6/10** | 创新 1.4/2 | 技术严谨 1.2/1.5 | 实验充分 1.1/1.5 | 清晰度 0.8/1 | 影响力 1.0/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 0.8/1.5

排名：前50% | 文档类型：方法研究 | 主任务：#语音伪造检测 | 主方法：#对抗训练

会议来源：[官方记录](https://www.isca-archive.org/odyssey_2026/dao26_odyssey.html) · [官方 PDF](https://www.isca-archive.org/odyssey_2026/dao26_odyssey.pdf)

👥 **作者与机构**

- Anh\-Tuan Dao：机构信息未能从会议 PDF 纯文本可靠映射
- Driss Matrouf：机构信息未能从会议 PDF 纯文本可靠映射
- Mickael Rouvier：机构信息未能从会议 PDF 纯文本可靠映射
- Nicholas Evans：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

语音伪造检测以原始波形为输入，输出真实或伪造二分类，难点在于训练集中说话人身份与真伪标签纠缠，模型易依赖特定音色或合成器平均音色捷径而非伪造痕迹。该方法先在VoxCeleb2大规模数据上训练说话人识别教师模型以显式编码身份信息，再以XLSR编码器加多头因子化注意力构建伪造检测学生模型提取表征。接着经梯度反转层将学生特征与教师嵌入对抗对齐，迫使学生丢弃身份线索而保留伪造相关伪影。最后在说话人分支键表示上施加变分信息瓶颈约束，压缩键与隐变量互信息以控制剔除强度，使聚合过程本身对虚假关联鲁棒。与直接利用域内说话人标签做对抗多任务的前作不同，该设计无需目标库说话人标签，且借助外部多样身份与瓶颈调节实现可控不变学习，实际意义在于提升跨库泛化。在SONAR语料评测设置下，MHFA\-VIB的EER为9\.37%，低于MHFA的EER24\.37%。该结论适用边界限于ASVspoof5训练的英语跨库评估，在域内ASVspoof5上牺牲部分性能且个别库仍存在波动，尚未验证非英语与未知攻击外推范围。训练在NVIDIA A100硬件上以32批量完成30轮，原文未量化推理开销与部署延迟对应的计算量。

🔗 **开源资源**

本次未形成可展示的已核验资源记录，开放状态尚未核实。
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 22. [减去语言噪声、加回说话人线索：双路径解耦如何同时做说话人与语种识别](/posts/conference-odyssey-2026-conference-paper-id-farhadipour26-odyssey-164c1bccfc/)

> 英文题目：*[Subtract to Clean, Add to Enrich: Dual\-Path Disentanglement for Speaker and Language Recognition](/posts/conference-odyssey-2026-conference-paper-id-farhadipour26-odyssey-164c1bccfc/)*

标签：#前缀微调 #跨语言 #语言识别 #说话人验证

评分：**6.6/10** | 创新 1.4/2 | 技术严谨 1.0/1.5 | 实验充分 1.1/1.5 | 清晰度 0.8/1 | 影响力 1.0/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 1.0/1.5

排名：前50% | 文档类型：方法研究 | 主任务：#说话人验证 | 主方法：#前缀微调

会议来源：[官方记录](https://www.isca-archive.org/odyssey_2026/farhadipour26_odyssey.html) · [官方 PDF](https://www.isca-archive.org/odyssey_2026/farhadipour26_odyssey.pdf)

👥 **作者与机构**

- Aref Farhadipour：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

跨语言说话人验证输入注册与测试两段语音并输出是否同人的判定，难点在于换语言引起的声道与韵律偏移易导致误拒；语言识别输入单段语音输出语种标签，难点在于模型易走捷径记忆说话人音色而非学到语言分布。该方法第一步冻结W2V\-BERT 2\.0主干并在每层注入小波前缀调制注意力，输出分层声学语言特征立方，为后续解耦保留通用表征而不遗忘。第二步说话人与语种双专家头分别做动态键值层加权融合与静态门控融合再经池化，得到原始说话人嵌入与原始语种嵌入，明确分开两种不变性需求。第三步双路融合模块以减路径投影去除语言子空间得到净化嵌入，以加路径用多头交叉注意力从语种嵌入中取回说话人线索得到增强嵌入，并用跨路一致损失与语言不变损失对齐约束，两路输出同一身份的互补表征。第四步推理时计算原始说话人分、减路径分、加路径分与语种分并做多粒度加权融合与双向惩罚，将几何去污与信息取回解耦，这与单共享网络或仅分数融合不同，避免了负任务干扰。在tv26 eval\-A评测任务下，全融合加自适应归一化与校准系统的EER为3\.16%，低于标准ASV基线系统的EER 8\.27%。其结论适用边界受限于朗读式多语数据与35类可见语种封闭集，在40类未见语种零样本验证上外推尚未验证且未获益。原文未披露训练、推理或部署成本。

🔗 **开源资源**

- 代码相关资源：<https://github.com/areffarhadi/ASV-LID> — 暂时无法访问
- 第三方资源：<https://tidylang2026.github.io/7_baseline_> — 链接不可用（HTTP 404）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 23. [同一骨干跑通检测与分类：MEGConformer 靠归一化弥合保留集偏移](/posts/conference-odyssey-2026-conference-paper-id-zuazo26-odyssey-d91951b70e/)

> 英文题目：*[MEGConformer: Conformer\-Based MEG Decoder for Robust Speech and Phoneme Classification](/posts/conference-odyssey-2026-conference-paper-id-zuazo26-odyssey-d91951b70e/)*

标签：#Conformer #鲁棒性 #脑信号 #言语神经解码 #语音活动检测

评分：**6.6/10** | 创新 1.2/2 | 技术严谨 1.2/1.5 | 实验充分 1.3/1.5 | 清晰度 0.8/1 | 影响力 0.8/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 1.0/1.5

排名：前50% | 文档类型：方法研究 | 主任务：#言语神经解码 | 主方法：#Conformer

会议来源：[官方记录](https://www.isca-archive.org/odyssey_2026/zuazo26_odyssey.html) · [官方 PDF](https://www.isca-archive.org/odyssey_2026/zuazo26_odyssey.pdf)

👥 **作者与机构**

- Xabier de Zuazo：机构信息未能从会议 PDF 纯文本可靠映射
- Ibon Saratxaga：机构信息未能从会议 PDF 纯文本可靠映射
- Eva Navas：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

本文处理脑磁图言语解码，输入为306通道降采样至250Hz的原始传感器时间窗，输出为语音有无二分类与39类ARPAbet音素标签，实际难点在于信噪比低、音素长尾不平衡与跨记录分布漂移导致保持集统计特性偏移。方法链先以轻量一维卷积将306通道投影至144维紧凑隐空间并经Dropout正则，再送入堆叠Conformer同步提取局部时序纹理与长程语境依赖，其输出分别接入语音检测与音素分类线性头完成判别。音素分支在前向中先做百点窗内平均再经无仿射参数的InstanceNorm1d消除幅度漂移，并配合逆平方根类别加权、MEG增强与动态分组多数投票集成优化。相对纯卷积SEANet或纯注意力基线，该组合在同一主干下兼顾慢速皮层动力学与音素级细粒度判别，且窗级归一化直接对齐训练与评测分布。在LibriBrain2025标准赛道语音检测任务保持集下，MEGConformer的F1\-macro为88\.90%，高于基线的F1\-macro68\.04%。音素分类保持集F1\-macro达73\.60%为标准赛道最优，频带分析显示判别力集中于Delta至Beta低频而Gamma以上贡献甚微。结论适用边界受限于单被试聆听范式，跨被试、跨设备与实时在线推理尚未验证，原文未披露训练、推理或部署成本。

🔗 **开源资源**

- 第三方资源：<https://openreview.net/forum?id=gRJ9dd07QF> → <https://openreview.net/challenge?redirect=%2Fforum%3Fid%3DgRJ9dd07QF> — 链接可访问（HTTP 200）
- 第三方资源：<https://openreview.net/forum?id=lRVOPe1EZy> → <https://openreview.net/challenge?redirect=%2Fforum%3Fid%3DlRVOPe1EZy> — 链接可访问（HTTP 200）
- 第三方资源：<https://openreview.net/forum?id=Bkg6RiCqY7> → <https://openreview.net/challenge?redirect=%2Fforum%3Fid%3DBkg6RiCqY7> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 24. [只学顺序不学分值：比较器损失如何得到可跨库的语音严重度分数](/posts/conference-odyssey-2026-conference-paper-id-webber26-odyssey-019d0472ab/)

> 英文题目：*[Comparator Loss: An Ordinal Contrastive Loss to Derive a Severity Score for Speech\-based Health Monitoring](/posts/conference-odyssey-2026-conference-paper-id-webber26-odyssey-019d0472ab/)*

标签：#语音生物标志物 #对比学习 #语音 #病理语音评估

评分：**6.5/10** | 创新 1.3/2 | 技术严谨 1.0/1.5 | 实验充分 1.2/1.5 | 清晰度 0.8/1 | 影响力 0.9/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 1.0/1.5

排名：前50% | 文档类型：方法研究 | 主任务：#病理语音评估 | 主方法：#对比学习

会议来源：[官方记录](https://www.isca-archive.org/odyssey_2026/webber26_odyssey.html) · [官方 PDF](https://www.isca-archive.org/odyssey_2026/webber26_odyssey.pdf)

👥 **作者与机构**

- Jacob J Webber：机构信息未能从会议 PDF 纯文本可靠映射
- Oliver Watts：机构信息未能从会议 PDF 纯文本可靠映射
- Lovisa Wihlborg：机构信息未能从会议 PDF 纯文本可靠映射
- Johnny Tam：机构信息未能从会议 PDF 纯文本可靠映射
- Christine Weaver：机构信息未能从会议 PDF 纯文本可靠映射
- Suvankar Pal：机构信息未能从会议 PDF 纯文本可靠映射
- Siddharthan Chandran：机构信息未能从会议 PDF 纯文本可靠映射
- Cassia Valentini\-Botinhao：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

本文任务是以语音波形为输入输出连续严重度评分，用于区分健康对照与运动神经元病或帕金森病并跟踪病情，难点在于标注稀缺异构且临床量表跨评分者跨中心不可比。方法链分三步：首先冻结预训练编码器将波形转为嵌入，只微调后续网络以保留通用表征并适配任务。接着前馈评分网络将嵌入映射为单标量分数\(f\_\{\\theta\}(\\cdot)\)，作为严重度代理。然后训练时以比较器损失对批内样本对强制排序一致并以间隔\(\\epsilon\)容忍正确排序，推理时仅用单条未配对波形经编码器与评分网络直接输出分数。与交叉熵分类的关键差异在于不固定类别数与量表尺度、不要求概率归一，只要求顺序正确，因而可混合不同来源弱监督与仅有排序关系的纵向时序信号。在Neurovoz语料HC/PD任务下，所提方法的AUC为0\.84，高于交叉熵基线的AUC 0\.65。结论适用边界在于健康对照分数跨数据集漂移明显，帕金森相关区分整体弱于运动神经元病任务，且纵向病情追踪能力尚未验证。原文未披露训练、推理或部署成本。

🔗 **开源资源**

- 第三方资源：<https://huggingface.co/nvidia/> — 暂时无法访问
- 第三方资源：<https://huggingface.co/patrickvonplaten/> — 暂时无法访问
- 第三方资源：<https://huggingface.co/speechbrain/spkrec-xvect-voxceleb> — 暂时无法访问
- 第三方资源：<https://huggingface.co/facebook/> — 暂时无法访问
- 第三方资源：<https://huggingface.co/> — 暂时无法访问
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 25. [语音预训练为何听不懂音乐与环境音：跨模态伪造检测的前端泛化检验](/posts/conference-odyssey-2026-conference-paper-id-das26-odyssey-6c3b6e064c/)

> 英文题目：*[Can SSL Frontend Generalize to All\-Type Audio Spoofing?](/posts/conference-odyssey-2026-conference-paper-id-das26-odyssey-6c3b6e064c/)*

标签：#自监督学习 #环境声 #音乐 #语音 #音频深度伪造检测

评分：**6.4/10** | 创新 1.2/2 | 技术严谨 1.0/1.5 | 实验充分 1.2/1.5 | 清晰度 0.7/1 | 影响力 1.0/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 1.0/1.5

排名：前50% | 文档类型：方法研究 | 主任务：#音频深度伪造检测 | 主方法：#自监督学习

会议来源：[官方记录](https://www.isca-archive.org/odyssey_2026/das26_odyssey.html) · [官方 PDF](https://www.isca-archive.org/odyssey_2026/das26_odyssey.pdf)

👥 **作者与机构**

- Arnab Das：机构信息未能从会议 PDF 纯文本可靠映射
- Yassine El Kheir：机构信息未能从会议 PDF 纯文本可靠映射
- Fabian Ritter Guttierez：机构信息未能从会议 PDF 纯文本可靠映射
- Tim Polzehl：机构信息未能从会议 PDF 纯文本可靠映射
- Sebastian Möller：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

该工作处理全类型音频伪造检测，输入为4秒音频片段并对不足长度做重复填充，输出为真伪二分类分数，难点在于语音、音乐、环境声与歌声的伪造痕迹分布差异大，单一预训练偏置难以跨模态泛化。方法链分为三步：第一步由自监督前端抽取序列表示并全量微调，其中语音专用XLS\-R直接处理原始波形输出帧级表示，通用音频EAT处理梅尔谱图并展平块表示为序列嵌入。第二步将上一步拼接后的双前端表征送入神经后端建模谱与时序交互，并以A\-Softmax损失完成二分类训练，使前端偏置与后端判别联合优化。第三步为跨模态扩展与压缩，保留XLS\-R全深度而将EAT截断至浅层，并以冻结EAT教师第18层或第24层表示经投影对齐做蒸馏补偿，以减少参数同时保留局部谱特征。与通用自监督模型直接联合预训练相比，双前端保留互补归纳偏置实现分工，语音分支捕捉发音与韵律结构而音频分支捕捉宽带谱纹理，因而更适配多模态伪造检测。在六数据集联合训练评测下，XLS\-R加EAT十八层配置的平均等错误率为3\.02%，低于EAT单前端的平均等错误率5\.07%。其结论适用边界限于四类已见伪造分布的联合训练场景，在混合语音与环境声的ESDD2及未见编解码器偏移下显著退化为失败条件；训练成本方面原文披露硬件为英伟达H100、批量为32、至多训练50轮并按验证集等错误率早停。

🔗 **开源资源**

- 模型相关资源：<https://huggingface.co/worstchan/EAT-large_> — 暂时无法访问
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 26. [为说话人日志做自监督：目标、数据与容量的分工与代价](/posts/conference-odyssey-2026-conference-paper-id-laurent26-odyssey-f85704e74b/)

> 英文题目：*[Scaling self\-supervised pretraining for speaker diarization](/posts/conference-odyssey-2026-conference-paper-id-laurent26-odyssey-f85704e74b/)*

标签：#自监督学习 #预训练 #语音 #说话人分离标注

评分：**6.4/10** | 创新 1.3/2 | 技术严谨 1.2/1.5 | 实验充分 1.1/1.5 | 清晰度 0.7/1 | 影响力 1.0/1.5 | 开源 0.0/1.5 | 可复现 0.1/0.5 | 工程/实践 1.0/1.5

排名：前50% | 文档类型：方法研究 | 主任务：#说话人分离标注 | 主方法：#自监督学习

会议来源：[官方记录](https://www.isca-archive.org/odyssey_2026/laurent26_odyssey.html) · [官方 PDF](https://www.isca-archive.org/odyssey_2026/laurent26_odyssey.pdf)

👥 **作者与机构**

- Antoine Laurent：机构信息未能从会议 PDF 纯文本可靠映射
- Joonas Kalda：机构信息未能从会议 PDF 纯文本可靠映射
- Hervé Bredin：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

说话人分离标注（Speaker Diarization）需从长录音预测谁在何时说话，输出为帧级多人活动与说话人归属，难点在于重叠语音、任意说话人数与边界精度要求高。该工作以会话型WavLM为编码器，先学习层权重并用加权平均特征做K均值聚类生成离散伪标签，再在Yodas2大规模无标注音频上做掩码预测加去噪预训练，最后在有监督分离标注语料上训练功率集分割模型并经VBx聚类输出长时结果。与沿用HuBERT（Hidden\-Unit BERT）第5层目标不同，加权多层目标融合了分布在各层的说话人信息，因而更适配分离标注。在无领结分离错误率（Diarization Error Rate, DER）复合评测上，最优Conformer（卷积增强Transformer）分割模型宏平均达到12\.0%，优于同期最优基线的12\.3%。结论仅适用于短块分割加聚类的混合架构与会议对话主导场景，重标注显示官方标注噪声可达数个百分点，外推到流式或音频大语言模型路径尚未验证。原文未披露训练与推理成本量化。

🔗 **开源资源**

本次未形成可展示的已核验资源记录，开放状态尚未核实。
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 27. [稀疏让损失只看难样本：Q\-Margin 何时帮得上说话人确认](/posts/conference-odyssey-2026-conference-paper-id-mosner26-odyssey-89ca738130/)

> 英文题目：*[Beyond CosFace: Analysing Sparsity\-Inducing Losses in Speaker Verification](/posts/conference-odyssey-2026-conference-paper-id-mosner26-odyssey-89ca738130/)*

标签：#开源工具 #形式化分析 #语音 #说话人验证

评分：**6.4/10** | 创新 1.2/2 | 技术严谨 1.2/1.5 | 实验充分 1.1/1.5 | 清晰度 0.8/1 | 影响力 0.8/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 1.0/1.5

排名：前50% | 文档类型：方法研究 | 主任务：#说话人验证 | 主方法：#形式化分析

会议来源：[官方记录](https://www.isca-archive.org/odyssey_2026/mosner26_odyssey.html) · [官方 PDF](https://www.isca-archive.org/odyssey_2026/mosner26_odyssey.pdf)

👥 **作者与机构**

- Ladislav Mošner：机构信息未能从会议 PDF 纯文本可靠映射
- Dimitrios Koutsianos：机构信息未能从会议 PDF 纯文本可靠映射
- Themos Stafylakis：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

说话人验证需将变长语音映射为固定维判别性嵌入并以余弦打分判定是否同人，难点在于开放集下类间可分与低误报区漏报的稳定性。该工作先将交叉熵重写为Fenchel\-Young损失族形式，把负熵替换为预测分布与参考测度间的α散度以控制稀疏性。接着在样本相关参考测度中编码间隔构造Q\-Margin损失，使对数到概率映射变为稀疏softargmax并对易分样本输出精确零梯度。然后以缩放余弦相似度为对数计算损失，联合更新嵌入提取器与说话人原型以聚焦难例微调。与CosFace启发式相减间隔不同，该方法统一间隔与稀疏性，α趋于1时退化为CosFace，α大于1时以稀疏性实现难例挖掘而非固定加权。在VoxCeleb1\-H评测设置下，WavLM结合多头因子化注意力池化微调的Q\-Margin模型的等错误率为1\.65%，低于CosFace基线的等错误率1\.70%。该增益的适用边界受限于小规模消融与高容量模型微调，在大规模从零训练与低容量ResNet34上收敛或失效，低误报区外推尚未验证，原文未披露训练、推理或部署成本。

🔗 **开源资源**

- 第三方资源：<https://github.com/wenet-e2e/wespeaker> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 28. [更难的重放与更真的合成：J\-SPAW2 如何让日语说话人验证同时失守](/posts/conference-odyssey-2026-conference-paper-id-shiota26-odyssey-ab3a7d2af7/)

> 英文题目：*[J\-SPAW2: A Japanese Corpus for Speaker Verification and Anti\-Spoofing with Challenging Replay and Speech Synthesis Attacks](/posts/conference-odyssey-2026-conference-paper-id-shiota26-odyssey-ab3a7d2af7/)*

标签：#数据集 #数据集构建 #说话人验证 #语音伪造检测

评分：**6.4/10** | 创新 1.2/2 | 技术严谨 1.0/1.5 | 实验充分 1.2/1.5 | 清晰度 0.8/1 | 影响力 0.9/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 1.0/1.5

排名：前50% | 文档类型：数据集与基准 | 主任务：#说话人验证 | 主方法：#数据集构建

会议来源：[官方记录](https://www.isca-archive.org/odyssey_2026/shiota26_odyssey.html) · [官方 PDF](https://www.isca-archive.org/odyssey_2026/shiota26_odyssey.pdf)

👥 **作者与机构**

- Sayaka Shiota：机构信息未能从会议 PDF 纯文本可靠映射
- Suzuka Horie：机构信息未能从会议 PDF 纯文本可靠映射
- Sawato Furubayashi：机构信息未能从会议 PDF 纯文本可靠映射
- Shinnosuke Takamichi：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

该任务输入为日语真实环境录制的目标语音与非同意录音衍生的攻击语音，输出为说话人验证判决、防欺骗对策判决及其级联风险，难点在于需同时抵御物理接入重放失真与逻辑接入高保真语音克隆的联合威胁。该方法链分三步：先沿用40人多环境真实录音划分评测用真实试验与攻击源语音，再在安静室内系统改变四种播放设备、近距离与远场距离及高低音量重录重放攻击并送入下一阶段评测，然后以短时含噪参考驱动零样本语音合成生成候选并经语音活动检测、识别字错率与UTMOS自然度筛选最优攻击样本后统一级联评测。与前作固定重放和较弱合成相比，该设计以低信噪比远场重放暴露对策模型脆弱性，并以含噪提示激发克隆保真度，从而同时压测感知自然度与机器可欺骗性。在低音量远场重放协议下，w2v2\+AASIST级联系统的t\-DCF指标为0\.619，高于前作J\-SPAW的t\-DCF指标0\.096。该结果表明即使强对策模型在恶劣重放条件下仍会被联合绕过，而高保真合成攻击在逻辑接入任务中同样维持高风险。该结论的适用边界受限于日语安静重放室与所测三款合成器威胁模型，尚未验证跨语言跨信道与自适应攻击下的外推能力。原文未披露训练、推理或部署成本。

🔗 **开源资源**

- 数据相关资源：<https://github.com/we/will/> — 链接不可用（HTTP 404）
- 第三方资源：<https://www.asvspoof.org/> — 链接可访问（HTTP 200）
- 第三方资源：<https://github.com/TakHemlata/SSL> — 链接不可用（HTTP 404）
- 第三方资源：<https://github.com/your-org/> — 链接可访问（HTTP 200）
- 第三方资源：<https://github.com/snakers4/silero-vad/> — 链接可访问（HTTP 200）
- 第三方资源：<https://elevenlabs.io//> → <https://elevenlabs.io/> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 29. [扩数据反而退化：卷积后端与多语言前端在伪造语音检测中的域偏置对照](/posts/conference-odyssey-2026-conference-paper-id-dao26b-odyssey-b79840788a/)

> 英文题目：*[A Comparison of SSL\-Based Feature Extractors and Back\-End Classifiers for Spoofing Detection: A Multi\-Corpus Training and Cross\-Linguistic Analysis](/posts/conference-odyssey-2026-conference-paper-id-dao26b-odyssey-b79840788a/)*

标签：#自监督学习 #模型比较 #跨语言 #语音伪造检测

评分：**6.3/10** | 创新 1.1/2 | 技术严谨 1.0/1.5 | 实验充分 1.2/1.5 | 清晰度 0.7/1 | 影响力 1.0/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 1.0/1.5

排名：前50% | 文档类型：方法研究 | 主任务：#语音伪造检测 | 主方法：#自监督学习

会议来源：[官方记录](https://www.isca-archive.org/odyssey_2026/dao26b_odyssey.html) · [官方 PDF](https://www.isca-archive.org/odyssey_2026/dao26b_odyssey.pdf)

👥 **作者与机构**

- Anh\-Tuan Dao：机构信息未能从会议 PDF 纯文本可靠映射
- Driss Matrouf：机构信息未能从会议 PDF 纯文本可靠映射
- Mickael Rouvier：机构信息未能从会议 PDF 纯文本可靠映射
- Nicholas Evans：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

语音伪造检测以原始波形为输入、输出话语级真伪判定，难点在于攻击类型、编解码信道与语言差异交织，导致跨语料评测时泛化性能剧烈波动。该研究先以自监督前端将波形编码为帧级上下文表示，再以残差后端对该高维表示做层次卷积与降采样，以捕捉局域时频伪造痕迹并经池化聚合为话语分数。随后前端与后端端到端联合微调，训练时将混响与MUSAN加噪增强后的四秒片段送入优化，而评测时使用完整音频以保留长时线索。与注意力全局聚合与图关系建模不同，残差卷积不做全局序列加权，而是强化对SSL嵌入中局部异常的建模，因而更能抑制数据集捷径并改善跨库鲁棒性。在ASVspoof 5评测下，训练情形1的XLSR\-ResNet模型的EER pooled为4\.72%，高于非编解码音频的EER 0\.95%。跨语言上西班牙语随多语训练显著改善而中文几乎停滞，表明少量目标语言暴露即可实现对齐，但无覆盖语种仍存在显著语言域间隔。上述结论适用边界受限于英语主导训练加少量目标语言覆盖及编解码匹配条件，跨信道与未见语种的外推尚未验证，原文未披露训练、推理或部署成本。

🔗 **开源资源**

本次未形成可展示的已核验资源记录，开放状态尚未核实。
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 30. [硬标签丢掉了多少情绪：用软输出重测匿名化后的情感保留](/posts/conference-odyssey-2026-conference-paper-id-nguyen26b-odyssey-b47fd506d7/)

> 英文题目：*[Analysis of embedding\-based emotional preservation metrics for voice conversion models](/posts/conference-odyssey-2026-conference-paper-id-nguyen26b-odyssey-b47fd506d7/)*

标签：#评测协议 #主观评测 #说话人匿名化 #语音情感识别

评分：**6.3/10** | 创新 1.2/2 | 技术严谨 1.1/1.5 | 实验充分 1.0/1.5 | 清晰度 0.8/1 | 影响力 0.9/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 1.0/1.5

排名：前50% | 文档类型：方法研究 | 主任务：#说话人匿名化 | 主方法：#评测协议

会议来源：[官方记录](https://www.isca-archive.org/odyssey_2026/nguyen26b_odyssey.html) · [官方 PDF](https://www.isca-archive.org/odyssey_2026/nguyen26b_odyssey.pdf)

👥 **作者与机构**

- Théo Nguyen：机构信息未能从会议 PDF 纯文本可靠映射
- Tom Bäckström：机构信息未能从会议 PDF 纯文本可靠映射
- Rainer Martin：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

语音匿名化以原始波形为输入，输出隐藏说话人但保留情感的语音，难点在于情感定义主观且标注噪声大，硬标签对错难以反映真实失真程度。该方法先用冻结SER模型对原始与匿名语音分别提取硬标签、概率向量或对数几率表示，将评估锚点从真值转向模型预测。接着以预测对预测方式对齐同一SER空间下两版嵌入，使无标注语料也可比较，消除对情感真值的依赖。然后用欧氏距离、余弦相似度或KL散度量化分布漂移，并以MUSHRA人听情感相似评分为参照验证相关性。相对VPC2024用真值对匿名预测计算UAR，该链条关键差异是从分类正确与否转向漂移多少，因而保留不确定性且可泛化到无标签数据。在IEMOCAP会话5的MUSHRA评测下，分类任务中MED的相关性得分为0\.67，高于MCS的相关性得分0\.64。该结论适用边界受限于表演式英语IEMOCAP及所用wav2vec2与Odyssey识别器，向自发对话与跨语言外推尚未验证。原文未披露训练、推理或部署成本。

🔗 **开源资源**

- 模型相关资源：<https://huggingface.co/hexgrad/> — 暂时无法访问
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 31. [伪造语音检测为何在实验室外失灵：把非语音当捷径的诊断框架](/posts/conference-odyssey-2026-conference-paper-id-rubio26-odyssey-1a27320724/)

> 英文题目：*[An Intervention\-Based Framework for Shortcut Diagnosis in Spoofing Countermeasures](/posts/conference-odyssey-2026-conference-paper-id-rubio26-odyssey-1a27320724/)*

标签：#评测协议 #鲁棒性 #语音 #语音伪造检测

评分：**6.3/10** | 创新 1.2/2 | 技术严谨 1.0/1.5 | 实验充分 1.2/1.5 | 清晰度 0.8/1 | 影响力 1.0/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 0.8/1.5

排名：前50% | 文档类型：方法研究 | 主任务：#语音伪造检测 | 主方法：#评测协议

会议来源：[官方记录](https://www.isca-archive.org/odyssey_2026/rubio26_odyssey.html) · [官方 PDF](https://www.isca-archive.org/odyssey_2026/rubio26_odyssey.pdf)

👥 **作者与机构**

- Santiago Rubio：机构信息未能从会议 PDF 纯文本可靠映射
- Pilar Bello：机构信息未能从会议 PDF 纯文本可靠映射
- Dayana Ribas：机构信息未能从会议 PDF 纯文本可靠映射
- Antonio Miguel：机构信息未能从会议 PDF 纯文本可靠映射
- Eduardo Lleida：机构信息未能从会议 PDF 纯文本可靠映射
- Alfonso Ortega：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

输入为原始语音波形，输出为真实与伪造的二分类分数，实际难点在于受控基准上的低误差难以迁移到开放信道与未知合成算法下的野外鲁棒性。所提流程先以有向无环图区分本征合成痕迹Z、流水线特异伪影Cd与外生信道因子Ci，明确捷径依赖的因果定义与判据，其输出的候选划分进入下一步统计筛选。接着用语料级Jensen\-Shannon散度比较真实与伪造语音的声学描述符分布，筛选候选捷径并将其输出作为干预设计的目标。然后对评估语音施加非语音结构、频谱内容与能量三类受控扰动，并以相对检测代价退化度量敏感性，形成可比较的敏感性画像。在能量扰动评估设置下，峰值归一化μ=0\.65条件的能量指标为0\.65，高于峰值归一化μ=0\.45条件的能量指标0\.45。与以往仅记录个别伪影或直接做增强修复的做法相比，该机制把是否遮蔽Z作为判读前提，从而分离捷径利用与正常域偏移，具有指导缓解的诊断意义。该结论适用边界受限于XLS\-R与RawGAT\-ST混合架构及所测试的编解码与攻击分布，尚未验证向其他前端或真实野外流量的外推范围。原文未披露训练、推理或部署成本。

🔗 **开源资源**

本次未形成可展示的已核验资源记录，开放状态尚未核实。
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 32. [退化信道复制了伪造痕迹：混合域适应如何挽回检测失效](/posts/conference-odyssey-2026-conference-paper-id-tsutsumi26-odyssey-103c80273c/)

> 英文题目：*[Domain Adaptation for Deepfake Audio Detection under Degraded Channel Conditions](/posts/conference-odyssey-2026-conference-paper-id-tsutsumi26-odyssey-103c80273c/)*

标签：#领域适应 #鲁棒性 #语音 #音频深度伪造检测

评分：**6.3/10** | 创新 1.0/2 | 技术严谨 1.2/1.5 | 实验充分 1.0/1.5 | 清晰度 0.8/1 | 影响力 1.0/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 1.0/1.5

排名：前50% | 文档类型：应用研究 | 主任务：#音频深度伪造检测 | 主方法：#领域适应

会议来源：[官方记录](https://www.isca-archive.org/odyssey_2026/tsutsumi26_odyssey.html) · [官方 PDF](https://www.isca-archive.org/odyssey_2026/tsutsumi26_odyssey.pdf)

👥 **作者与机构**

- Ayuto Tsutsumi：机构信息未能从会议 PDF 纯文本可靠映射
- Akira Gotoh：机构信息未能从会议 PDF 纯文本可靠映射
- Yuko Saito：机构信息未能从会议 PDF 纯文本可靠映射
- Hiroki Matsuura：机构信息未能从会议 PDF 纯文本可靠映射
- Sayaka Shiota：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

本任务输入为经电话带宽限制与编解码压缩的8 kHz日语退化语音，输出为真实与伪造二分类及说话人验证是否被欺骗的判定，难点是训练用干净英文语音与部署用退化日语语音存在严重信道失配。方法先以三类真实退化语料作参考，用11个零样本合成与转换模型生成配对伪造语音并下采样至8 kHz以匹配部署信道。接着用UTMOS评估自然度并用ECAPA\-TDNN验证伪造语音对说话人验证系统的欺骗能力，其输出的攻击成功分布直接决定后续对策微调的攻防重点。最后将ASVspoof 2019训练数据与域内退化数据混合微调RawNet2与wav2vec2\+AASIST对策模型，以在学习新信道分布时保留旧域能力。相对已有增强训练，该机制差异在于直接学习退化信道下真实语音分布而非记忆特定伪造痕迹，因而对同家族未见攻击也有改善并缓解灾难性遗忘。在Telegram条件评测下，含CosyVoice3\-VC伪造试验的错误率指标EERASV为11\.63%，高于仅含真实试验的错误率指标EERASV的0\.91%。其适用边界受限于Interview独特混响噪声难以被电话类条件替代，且对FishAudio S1\-mini与Seed\-VC仍失效，原文未披露训练、推理或部署成本。

🔗 **开源资源**

本次未形成可展示的已核验资源记录，开放状态尚未核实。
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 33. [零样本失灵时再校准：想象言语跨被试解码的快速适应路径](/posts/conference-odyssey-2026-conference-paper-id-belfrouh26-odyssey-4ddff0df94/)

> 英文题目：*[Rapid Calibration for Cross\-Subject Imagined Speech Decoding Toward Restoring Communication](/posts/conference-odyssey-2026-conference-paper-id-belfrouh26-odyssey-4ddff0df94/)*

标签：#迁移学习 #少样本 #脑信号 #言语神经解码

评分：**6.2/10** | 创新 1.2/2 | 技术严谨 1.0/1.5 | 实验充分 1.0/1.5 | 清晰度 0.8/1 | 影响力 0.9/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 1.0/1.5

排名：前50% | 文档类型：方法研究 | 主任务：#言语神经解码 | 主方法：#迁移学习

会议来源：[官方记录](https://www.isca-archive.org/odyssey_2026/belfrouh26_odyssey.html) · [官方 PDF](https://www.isca-archive.org/odyssey_2026/belfrouh26_odyssey.pdf)

👥 **作者与机构**

- Sanae Belfrouh：机构信息未能从会议 PDF 纯文本可靠映射
- Rahhal Errattahi：机构信息未能从会议 PDF 纯文本可靠映射
- Fatima zahra Salmam：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

输入为64导或14导脑电记录的想象言语试次，输出为Hello等5类助残词汇标签，难点在于个体颅脑几何与复述策略差异使留一被试零样本准确率跌至随机水平。方法分三步：先按125ms半重叠分窗取平均幅值并插值为32×32地形图序列，再在14被试混合池上预训练共享三维卷积前端加不同时序头模型，最后用新被试每类1至60样本做原型、相关对齐或微调校准并在剩余试次测试。其中最优路径以前端冻结、仅微调分类头适配新被试，前端输出直接进入校准头参与重加权。与追求被试不变表示的主流思路不同，该工作以源域训练精度与特征丰富度优先，发现训练精度越高则校准后绝对精度越高，对快速校准更具实际意义。在BCI Competition 2020 Track 3数据集留一被试评测设置下，64导三维卷积经头微调的校准准确率为53\.71%，高于14导Transformer的校准准确率32\.48%。该结论适用边界受限于15名健康人共5250试次与5词封闭集，尚未验证瘫痪患者、大词表与连续解码的外推，原文未披露训练、推理或部署成本。

🔗 **开源资源**

本次未形成可展示的已核验资源记录，开放状态尚未核实。
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 34. [临床印地\-英语混说下谁在说话：DiariZen 为何要解冻 WavLM 才跟得上](/posts/conference-odyssey-2026-conference-paper-id-barahona26-odyssey-cb08ce7915/)

> 英文题目：*[Adapting Speaker Diarization to Code\-Switched Medical Conversations: AUDIAS\-UAM at the DISPLACE\-M Challenge](/posts/conference-odyssey-2026-conference-paper-id-barahona26-odyssey-cb08ce7915/)*

标签：#医疗音频 #领域适应 #半监督学习 #多语言 #说话人分离标注

评分：**6.1/10** | 创新 1.2/2 | 技术严谨 1.0/1.5 | 实验充分 1.0/1.5 | 清晰度 0.8/1 | 影响力 0.8/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 1.0/1.5

排名：前50% | 文档类型：系统技术报告 | 主任务：#说话人分离标注 | 主方法：#领域适应

会议来源：[官方记录](https://www.isca-archive.org/odyssey_2026/barahona26_odyssey.html) · [官方 PDF](https://www.isca-archive.org/odyssey_2026/barahona26_odyssey.pdf)

👥 **作者与机构**

- Sara Barahona：机构信息未能从会议 PDF 纯文本可靠映射
- Laura Herrera\-Alarcón：机构信息未能从会议 PDF 纯文本可靠映射
- Juan Ignacio Alvarez\-Trejos：机构信息未能从会议 PDF 纯文本可靠映射
- Alicia Lozano\-Diez：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

输入为移动设备采集的十六千赫单通道双人印地语英语临床对话，需输出支持重叠的说话人时间边界，难点在于自发语音、轮转不均、医患风格差异与代码切换声学失配。方法链先由局部端到端分割预测帧级多人活动，再由说话人嵌入提取器将语音段映射为向量。随后跨窗约束聚类统一全局说话人身份，最后对多系统帧级概率校准融合输出，前一步的活动预测与嵌入直接作为后一步聚类与融合的输入。相对传统模块流水线，混合结构将局部重叠建模与全局聚类解耦，预训练语音编码器加 conformer 提供大规模自监督表征以缓解域失配。在dev2验证集条件下，六系统DOVER\-Lap融合的DER为8\.48%，低于最优单系统S6的DER 8\.57%。结论的适用边界仅限双人低重叠临床对话与给定数据划分，尚未验证多人、高重叠或非印地语场景的外推能力，原文未披露训练、推理或部署成本。

🔗 **开源资源**

本次未形成可展示的已核验资源记录，开放状态尚未核实。
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 35. [先看 10 毫秒再做判断：大核一维卷积为何能做原始波形伪造检测](/posts/conference-odyssey-2026-conference-paper-id-perets26-odyssey-05efcbc17f/)

> 英文题目：*[Large\-Kernel 1D CNN for Raw Waveform Spoofing Countermeasures](/posts/conference-odyssey-2026-conference-paper-id-perets26-odyssey-05efcbc17f/)*

标签：#CNN #语音 #语音伪造检测

评分：**6.1/10** | 创新 1.0/2 | 技术严谨 1.0/1.5 | 实验充分 1.2/1.5 | 清晰度 0.8/1 | 影响力 0.8/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 1.0/1.5

排名：前50% | 文档类型：方法研究 | 主任务：#语音伪造检测 | 主方法：#CNN

会议来源：[官方记录](https://www.isca-archive.org/odyssey_2026/perets26_odyssey.html) · [官方 PDF](https://www.isca-archive.org/odyssey_2026/perets26_odyssey.pdf)

👥 **作者与机构**

- Guy Perets：机构信息未能从会议 PDF 纯文本可靠映射
- Yehuda Ben\-Shimol：机构信息未能从会议 PDF 纯文本可靠映射
- Itshak Lapidot：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

语音伪造检测需以16 kHz单声道原始波形为输入，直接输出真实语音与合成转换伪造的二分类后验，其难点在于伪造痕迹微弱且分散于相位与长时不一致性中，固定时频前端易将其平滑丢失。该方法先以核长160点的大核一维卷积前端直接学习宽时域滤波器组，将原始波形映射为高时间分辨率特征流。接着一维ResNet34残差主干逐级抽象与下采样得到话语级嵌入，再经统计池化与全连接分类输出真实性分数。与首层短核依赖深层堆叠累积感受野的思路不同，大核在首层即暴露约10毫秒音素级上下文，使判别线索更早形成而无需图注意力等复杂后端，且稠密大核比同等感受野的空洞近似更具表达力。在ASVspoof2019 LA评测集下，所提模型的等错误率为1\.37%，低于RW\-ResNet基线的等错误率2\.98%。该结论适用边界受限于干净英文朗读式伪造语料，错误集中于A08、A17与A18等神经波形攻击，尚未验证编解码、噪声与混响下的外推能力。原文未披露训练、推理或部署成本。

🔗 **开源资源**

- 第三方资源：<https://jmlr.org/papers/v22/20-1061.html> — 链接可访问（HTTP 200）
- 第三方资源：<https://link.springer.com/article/10.1186/> → <https://link.springer.com/article/10.1186> — 链接不可用（HTTP 404）
- 第三方资源：<https://www.sciencedirect.com/science/article/> — 链接不可用（HTTP 403）
- 第三方资源：<https://www.eurasip.org/> → <https://eurasip.org/> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 36. [语音大模型流水线越往后越安全吗：分阶段可恢复性与选择性掩蔽的对照](/posts/conference-odyssey-2026-conference-paper-id-sepanta26-odyssey-d332d4b8dc/)

> 英文题目：*[Sensitive Speaker Attribute Leakage in Speech–LLM Pipelines](/posts/conference-odyssey-2026-conference-paper-id-sepanta26-odyssey-d332d4b8dc/)*

标签：#对抗训练 #隐私保护 #语音 #语音属性识别

评分：**6.1/10** | 创新 1.3/2 | 技术严谨 1.2/1.5 | 实验充分 0.9/1.5 | 清晰度 0.7/1 | 影响力 0.9/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 0.8/1.5

排名：前50% | 文档类型：方法研究 | 主任务：#语音属性识别 | 主方法：#对抗训练

会议来源：[官方记录](https://www.isca-archive.org/odyssey_2026/sepanta26_odyssey.html) · [官方 PDF](https://www.isca-archive.org/odyssey_2026/sepanta26_odyssey.pdf)

👥 **作者与机构**

- Siavosh Sepanta：机构信息未能从会议 PDF 纯文本可靠映射
- Alessio Brutti：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

本文输入为连续语音波形，输出为转写之外说话人敏感属性在管线各阶段的可推断性评估与定向抑制，难点在于语言内容与身份、人口统计、情感线索纠缠于同一声学表示且随抽象程度演化。方法链分三步：冻结语音编码器将波形转为帧级声学表示，轻量多语言投影器将其映射到大语言模型词嵌入空间实现跨模态对齐，冻结大语言模型隐状态提供更高层表示，每步输出均由同一多头分类器探测。多头分类器用共享卷积前端与注意力统计池化得到定长向量，再由属性专属头联合预测身份、年龄、性别、口音或情感，其多任务交叉熵损失高低直接指示该属性可恢复性。与单层探测相比，关键差异是全管线分阶段比较加选择性属性掩蔽，即用PGD在频谱上增大目标属性损失并保持其余属性损失，从而在不改主干下实现可控抑制并揭示属性非均匀影响。在Common Voice语料条件下，掩蔽后编码器阶段说话人识别准确率为0\.01，低于掩蔽前编码器阶段说话人识别准确率0\.51。跨域情感任务进一步显示该抑制随阶段与域偏移衰减，说明生物特征定位可控而情感线索更弥散且依赖上下文。结论适用边界受限于特定编码器加投影器加大语言模型组合与受控到真实互动跨域设置，换编码器、换语言或开放对话时外推尚未验证。原文未披露训练、推理或部署成本。

🔗 **开源资源**

本次未形成可展示的已核验资源记录，开放状态尚未核实。
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 37. [不换打分只换加权：按隐含条件自适应融合说话人确认分数](/posts/conference-odyssey-2026-conference-paper-id-borgstrom26-odyssey-169e44380b/)

> 英文题目：*[Condition\-Aware System Fusion for Speaker Verification](/posts/conference-odyssey-2026-conference-paper-id-borgstrom26-odyssey-169e44380b/)*

标签：#模型融合 #统计分析 #无监督学习 #说话人验证

评分：**6.0/10** | 创新 1.2/2 | 技术严谨 1.0/1.5 | 实验充分 1.0/1.5 | 清晰度 0.7/1 | 影响力 0.8/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 1.0/1.5

排名：前50% | 文档类型：方法研究 | 主任务：#说话人验证 | 主方法：#模型融合

会议来源：[官方记录](https://www.isca-archive.org/odyssey_2026/borgstrom26_odyssey.html) · [官方 PDF](https://www.isca-archive.org/odyssey_2026/borgstrom26_odyssey.pdf)

👥 **作者与机构**

- Jonas J\. Borgstrom：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

说话人验证需将多个异构系统的分数向量映射为单个校准对数似然比输出，输入还包括拼接的注册与测试说话人嵌入，难点在于通道与性别等潜在条件会改变目标与非目标分数分布而全局映射无法自适应。为此先建立含离散潜条件的生成模型，对嵌入用条件相关高斯建模，对分数在各条件下用共享精度的目标与非目标高斯建模并以混合权重刻画先验。接着用期望最大化无监督估计条件参数，期望步按分数似然与嵌入似然计算潜条件后验并做类别均衡，最大化步据此更新均值精度与混合权重。推理时先将观测嵌入与学习到的高斯混合对齐得到后验，再按后验加权各条件下的目标与非目标分数似然取对数比得到条件感知融合输出，其单条件特例退化为约束最大似然高斯校准闭式解。相对逻辑回归的全局仿射映射，关键差异是用嵌入驱动的后验混合替代固定权重，使融合映射随输入条件自适应，从而更好利用异构后端互补性。在NIST SRE24评测集5系统融合任务下，GCA的等错误率为10\.08%，低于LogReg的等错误率13\.99%。该结论适用边界受限于SRE系列电话与视听语料的验证，尚未验证对未见语言或强噪声场景的外推有效性。原文未披露训练、推理或部署成本。

🔗 **开源资源**

- 第三方资源：<https://www.nist.gov/file/325336> → <https://www.nist.gov/system/files/documents/2016/10/07/sre16_eval_plan_v1.3.pdf> — 链接可访问（HTTP 200）
- 第三方资源：<https://www.nist.gov/document/sre18evalplan2018-05-31v6.pdf> — 链接不可用（HTTP 404）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 38. [说话人确认为何换个语言就变差：四种架构跨语言迁移的对照](/posts/conference-odyssey-2026-conference-paper-id-buitrago26-odyssey-ce583423b5/)

> 英文题目：*[Towards Language\-Agnostic Speaker Verification: A Cross\-Lingual Transfer Study of Architectures](/posts/conference-odyssey-2026-conference-paper-id-buitrago26-odyssey-ce583423b5/)*

标签：#迁移学习 #模型比较 #跨语言 #说话人验证

评分：**5.9/10** | 创新 1.2/2 | 技术严谨 1.0/1.5 | 实验充分 1.1/1.5 | 清晰度 0.7/1 | 影响力 0.8/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 0.8/1.5

排名：前50% | 文档类型：方法研究 | 主任务：#说话人验证 | 主方法：#迁移学习

会议来源：[官方记录](https://www.isca-archive.org/odyssey_2026/buitrago26_odyssey.html) · [官方 PDF](https://www.isca-archive.org/odyssey_2026/buitrago26_odyssey.pdf)

👥 **作者与机构**

- Pol Buitrago：机构信息未能从会议 PDF 纯文本可靠映射
- Javier Hernando：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

说话人验证以两段语音为输入并判定是否属于同一说话人，理想身份线索应与语言内容解耦，但实证中跨语言失配仍导致性能退化。为隔离架构效应，作者沿用跨语言迁移矩阵框架，先为每种目标语言固定1000样本基线与1000样本增量以测自增益，再以等量目标增量为分母度量施主语言增量的相对增益，最后对44种语言两两配对形成矩阵并计算偏离全1理想矩阵的结构诊断。该链条使前一步的增益比值直接进入下一步的矩阵表征，矩阵结构再进入架构间比较，从而在相同数据配比下比较四种建模范式。与固定架构只谈数据效应的既有分析不同，本文把表征来源本身作为变量，判别式时延架构展现均匀正迁移而自监督编码器呈现稀疏不对称负迁移，消融表明替换编码器而非分类头决定语言无关性。在Mozilla Common Voice 22\.0的44语言评测下，ECAPA\-TDNN的prop\+指标为98\.8%，高于HuBERT\-SID的prop\+指标8\.9%。该结论适用边界受限于短时长众包朗读语音与性别受控的余弦验证协议，尚未验证长时对话、信道失配或更大规模预训练下的外推。原文未披露训练、推理或部署成本。

🔗 **开源资源**

- 第三方资源：<https://aclanthology.org/2020.lrec-1.520/> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 39. [词级对齐何时盖过手工声学特征：自发语音同时做淀粉样预测与失语分型的对照](/posts/conference-odyssey-2026-conference-paper-id-esteve26-odyssey-4d4a1e04ea/)

> 英文题目：*[Deep learning based analysis of spontaneous speech for diagnostic classification and biomarker prediction in Alzheimer’s disease and primary progressive aphasia](/posts/conference-odyssey-2026-conference-paper-id-esteve26-odyssey-4d4a1e04ea/)*

标签：#语音生物标志物 #多模态学习 #多语言 #语音 #病理语音评估

评分：**5.9/10** | 创新 1.2/2 | 技术严谨 1.0/1.5 | 实验充分 1.0/1.5 | 清晰度 0.8/1 | 影响力 0.9/1.5 | 开源 0.0/1.5 | 可复现 0.2/0.5 | 工程/实践 0.8/1.5

排名：前50% | 文档类型：应用研究 | 主任务：#病理语音评估 | 主方法：#多模态学习

会议来源：[官方记录](https://www.isca-archive.org/odyssey_2026/esteve26_odyssey.html) · [官方 PDF](https://www.isca-archive.org/odyssey_2026/esteve26_odyssey.pdf)

👥 **作者与机构**

- Roger Esteve：机构信息未能从会议 PDF 纯文本可靠映射
- Pilar Armas：机构信息未能从会议 PDF 纯文本可靠映射
- Marc Casals\-Salvador：机构信息未能从会议 PDF 纯文本可靠映射
- Miguel A Santos\-Santos：机构信息未能从会议 PDF 纯文本可靠映射
- Alexandre Bejanin：机构信息未能从会议 PDF 纯文本可靠映射
- Javier Hernando：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

本文输入为图片描述任务的自发语音波形及其自动转写文本，输出为阿尔茨海默病相关淀粉样蛋白\-β与 Amyloid\-beta / Aβ 阴阳性以及原发性进行性失语与 Primary Progressive Aphasia / PPA 三亚型标签，难点在于早期病理信号微弱、亚型语言表型重叠且西班牙语数据稀缺。方法链分为四步：先用冻结的自监督语音编码器与文本编码器分别提取帧级声学表征和词级语言表征；再经 Whisper 转写对齐实现跨模态时间同步；随后由门控交叉注意力完成声学与语言信息的动态融合与池化；最后拼接 55 维手工声学特征并送入多层感知机分类。相比简单拼接加自注意力的基线，该对齐融合机制显式建模停顿与语速等时序线索，更贴合失语与流畅性障碍的临床表征。在 SPIN 队列患者级分层五折交叉验证下最佳配置 Aβ 预测准确率达 83\.86%，显著优于基线双流模型，ADReSSo 英文基准上复现架构准确率为 87\.20%。结论仅适用于图片描述诱发的短时自发语音与单中心西班牙语人群，向自然对话、他语言及无症状前期人群外推尚未验证。原文未披露训练、推理或部署成本。

🔗 **开源资源**

- 第三方资源：<https://aclanthology.org/N19-1423/> — 链接可访问（HTTP 200）
- 第三方资源：<https://onlinelibrary.wiley.com/doi/pdf/10.1002/acn3.653> — 链接不可用（HTTP 403）
- 第三方资源：<https://doi.org/10.1080/02687038.2016.1191054> → <https://www.tandfonline.com/doi/full/10.1080/02687038.2016.1191054> — 链接不可用（HTTP 403）
- 第三方资源：<https://www.science.org/doi/abs/10.1126/science.1566067> — 链接不可用（HTTP 403）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 40. [难发的音就多练：按音素误差自适应加权的静音语音重建](/posts/conference-odyssey-2026-conference-paper-id-blanco26-odyssey-81c80036ba/)

> 英文题目：*[Adaptive Phone\-Wise Weighted Loss for Silent Speech Restoration in Continuous Spanish](/posts/conference-odyssey-2026-conference-paper-id-blanco26-odyssey-81c80036ba/)*

标签：#多任务学习 #低资源 #生理信号 #语音 #静默语音接口

评分：**5.8/10** | 创新 1.2/2 | 技术严谨 1.2/1.5 | 实验充分 1.0/1.5 | 清晰度 0.8/1 | 影响力 0.6/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 0.7/1.5

排名：前50% | 文档类型：方法研究 | 主任务：#静默语音接口 | 主方法：#多任务学习

会议来源：[官方记录](https://www.isca-archive.org/odyssey_2026/blanco26_odyssey.html) · [官方 PDF](https://www.isca-archive.org/odyssey_2026/blanco26_odyssey.pdf)

👥 **作者与机构**

- Eder del Blanco：机构信息未能从会议 PDF 纯文本可靠映射
- David Gimeno\-Gómez：机构信息未能从会议 PDF 纯文本可靠映射
- Ibon Saratxaga：机构信息未能从会议 PDF 纯文本可靠映射
- Eva Navas：机构信息未能从会议 PDF 纯文本可靠映射
- Inma Hernáez：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

该工作处理连续西班牙语静默语音恢复，输入为静默时的表面肌电或唇部视频，输出为可懂语音波形，难点在于静默与有声信号失配、说话人构音差异大且适配数据稀缺。方法链分为四步：卷积前端将 EMG 或视频转为 512 维特征并压缩至 256 维，12 层 E\-Branchformer 编码器建模长短时依赖，双头分别回归 80 维梅尔谱与分类 29 类音素加静音，冻结 HiFTNet 声码器合成波形。训练先用 L1 重建加交叉熵音素监督加谱收敛损失并以动态时间规整对齐静默与有声参考，再按每轮各音素平均无加权误差更新音素权重并均值归一化。与基线相比，该加权迫使模型聚焦难学音素而非均匀优化帧。在 ReSSInt 静默测试集上，唇读无预训练平均 CER 从 60\.8% 降至 57\.2%，前端预训练从 58\.1% 降至 55\.8%，整体预训练从 28\.8% 降至 27\.1%，EMG 从零训练从 63\.7% 降至 61\.0%。结论限于 6 名喉正常西班牙语者的单说话人小数据场景，多说话人联合训练、跨语言泛化与大语料有效性均未验证。原文未披露训练、推理或部署成本。

🔗 **开源资源**

本次未形成可展示的已核验资源记录，开放状态尚未核实。
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 41. [训练没见过的攻击怎么验：把声纹验证搬到深度伪造溯源](/posts/conference-odyssey-2026-conference-paper-id-chhibber26-odyssey-07370ad578/)

> 英文题目：*[Advancing Zero\-Shot Open\-Set Speech Deepfake Source Tracing](/posts/conference-odyssey-2026-conference-paper-id-chhibber26-odyssey-07370ad578/)*

标签：#对比学习 #少样本 #零样本 #语音 #音频指纹

评分：**5.8/10** | 创新 1.2/2 | 技术严谨 1.0/1.5 | 实验充分 1.0/1.5 | 清晰度 0.7/1 | 影响力 0.8/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 0.8/1.5

排名：前50% | 文档类型：方法研究 | 主任务：#音频指纹 | 主方法：#对比学习

会议来源：[官方记录](https://www.isca-archive.org/odyssey_2026/chhibber26_odyssey.html) · [官方 PDF](https://www.isca-archive.org/odyssey_2026/chhibber26_odyssey.pdf)

👥 **作者与机构**

- Manasi Chhibber：机构信息未能从会议 PDF 纯文本可靠映射
- Jagabandhu Mishra：机构信息未能从会议 PDF 纯文本可靠映射
- Tomi H\. Kinnunen：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

开放集溯源要求输入待测语音并判定其是否来自某个已注册攻击指纹，难点在于生成方法持续涌现导致测试攻击与训练攻击完全不相交，且声学模型与声码器差异细微。方法链分四段推进：先用自监督学习（Self\-Supervised Learning, SSL）前端加AASIST在9类训练攻击上学习攻击嵌入，接着对每种注册攻击平均多个参考嵌入形成指纹，再提取试听嵌入，最后用余弦相似度（Cosine Similarity）或孪生网络（Siamese Network）与多层感知机（Multilayer Perceptron, MLP）完成试听与指纹的验证打分。与既有交叉熵分类复用嵌入的做法不同，该工作引入加性角度间隔损失（Additive Angular Margin, AAM）收紧类内分布并用回归混合（Regression Mixup, RegMixup）平滑类间表示以提升未知攻击泛化。在STOPA数据集上，分布内攻击验证中少样本MLP达到13\.11%等错误率（Equal Error Rate, EER），显著优于零样本余弦的29\.91%，而分布外条件下零样本余弦以16\.43%反超少样本方法。该结论仅适用于STOPA定义的声学模型与声码器组合划分及英文朗读式数据，跨语种、真实压缩传输与全新架构族尚未验证。原文未披露训练、推理或部署成本。

🔗 **开源资源**

本次未形成可展示的已核验资源记录，开放状态尚未核实。
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 42. [同一人说两种语言时，如何让语言验证不再被说话人带偏](/posts/conference-odyssey-2026-conference-paper-id-penagarikano26-odyssey-a5f8352c7d/)

> 英文题目：*[Speaker\-Aware Language Verification Based on Attentive Pooling, Mixture of Experts and Neural PLDA](/posts/conference-odyssey-2026-conference-paper-id-penagarikano26-odyssey-a5f8352c7d/)*

标签：#注意力机制 #混合专家模型 #多语言 #语音 #语言识别

评分：**5.8/10** | 创新 1.2/2 | 技术严谨 1.0/1.5 | 实验充分 0.8/1.5 | 清晰度 0.7/1 | 影响力 0.8/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 1.0/1.5

排名：前50% | 文档类型：系统技术报告 | 主任务：#语言识别 | 主方法：#混合专家模型

会议来源：[官方记录](https://www.isca-archive.org/odyssey_2026/penagarikano26_odyssey.html) · [官方 PDF](https://www.isca-archive.org/odyssey_2026/penagarikano26_odyssey.pdf)

👥 **作者与机构**

- Mikel Penagarikano：机构信息未能从会议 PDF 纯文本可靠映射
- Luis Javier Rodriguez\-Fuentes：机构信息未能从会议 PDF 纯文本可靠映射
- Amparo Varona：机构信息未能从会议 PDF 纯文本可靠映射
- Germán Bordel：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

口语验证需以注册语音与测试语音为输入，判定两者是否同属一种语言，多说话人跨语言发音与零样本未知语言导致说话人音色与语言音系高度纠缠，单阈值系统易高估同说话人跨语言相似性并低估跨说话人同语言相似性。方法先以微调的多语言Wav2Vec 2\.0 XLS\-R为前端抽取帧级声学表征，再经注意力池化加权聚合为定长语言嵌入，同时用外部说话人模型抽取说话人嵌入以保留身份信息。门控网络计算说话人嵌入余弦相似度并经逻辑回归校准为同说话人概率，该概率作为路由权重进入下一步。两个神经概率线性判别分析专家分别负责同说话人与跨说话人试验评分，按门控概率加权融合后对八个注册配对取均值得到最终验证分，识别任务则进一步对三十五维得分做类均衡逻辑回归。相比全局单一判决面，该按生物相似度动态切换判决面的机制意在隔离音色干扰并保留语言判别力。在闭集识别开发集任务下，逻辑回归后端宏平均准确率为99%，从直接聚合相似度得分宏平均准确率的97%升至99%。该结论适用边界受限于挑战赛定义的注册加测试配对协议与数据划分引入的泄漏，向完全未知信道与开放语言的外推尚未验证；训练成本依托4块NVIDIA RTX A5000硬件以分布式数据并行执行百轮优化。

🔗 **开源资源**

- 第三方资源：<https://pypi.org/project/pyannote-audio/> — 链接可访问（HTTP 200）
- 第三方资源：<https://github.com/> — 链接可访问（HTTP 200）
- 第三方资源：<https://hal.science/hal-02995345> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 43. [余弦已很强时为何还要 PLDA：联合微调对齐嵌入与打分的防欺骗说话人确认](/posts/conference-odyssey-2026-conference-paper-id-budilovsky26-odyssey-1c48f1e043/)

> 英文题目：*[PLDA Scoring for Spoofing\-Robust Automatic Speaker Verification](/posts/conference-odyssey-2026-conference-paper-id-budilovsky26-odyssey-1c48f1e043/)*

标签：#端到端学习 #鲁棒性 #语音 #说话人验证 #语音伪造检测

评分：**5.7/10** | 创新 1.0/2 | 技术严谨 1.2/1.5 | 实验充分 1.0/1.5 | 清晰度 0.8/1 | 影响力 0.7/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 0.7/1.5

排名：前50% | 文档类型：方法研究 | 主任务：#说话人验证 | 主方法：#端到端学习

会议来源：[官方记录](https://www.isca-archive.org/odyssey_2026/budilovsky26_odyssey.html) · [官方 PDF](https://www.isca-archive.org/odyssey_2026/budilovsky26_odyssey.pdf)

👥 **作者与机构**

- Shani Budilovsky：机构信息未能从会议 PDF 纯文本可靠映射
- Yehuda Ben\-Shimol：机构信息未能从会议 PDF 纯文本可靠映射
- Itshak Lapidot：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

本文处理欺骗鲁棒说话人验证（Spoofing\-robust Automatic Speaker Verification，SASV），输入为注册与测试语音对，输出为目标、非目标或欺骗试次的判决，需同时抵抗通道失配与合成、转换、重放攻击。方法链为预训练ECAPA\-TDNN抽取说话人嵌入（speaker embedding），经预处理进入生成式PLDA初始化的二次打分函数，再经逻辑回归（Logistic Regression，LR）校准，最后将试次级二元交叉熵误差反传至抽取器末层实现协同优化。与固定嵌入只调后端不同，联合优化让嵌入空间按PLDA的类间与类内协方差逻辑重排，保持打分与校准一致。在VoxCeleb1测试集90%说话人评测上，余弦基线以0\.76%等错误率（Equal Error Rate，EER）领先，联合微调PLDA在PLDA家族内最优为0\.98%但仍落后。在ASVspoof2019评估集真人子集上余弦以0\.80% EER领先，联合模型将PLDA系EER从2\.08%压至1\.36%。串接指标上ResNet SASV的归一化不可知检测代价函数（agnostic Detection Cost Function，a\-DCF）余弦0\.0260显著优于最优PLDA的0\.0318，归一化串接检测代价函数（tandem Detection Cost Function，t\-DCF）各系统集中在0\.0535至0\.0557且置信区间重叠。结论限于VoxCeleb1训练与VoxCeleb1及ASVspoof2019评测，跨数据集与未知攻击外推尚未验证，原文未披露训练、推理或部署成本。

🔗 **开源资源**

- 第三方资源：<https://openreview.net/forum?id=qbrE0LR7fF> → <https://openreview.net/challenge?redirect=%2Fforum%3Fid%3DqbrE0LR7fF> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 44. [不重训识别器：在语言向量空间里把失真推回干净流形](/posts/conference-odyssey-2026-conference-paper-id-cao26-odyssey-7f0d01567e/)

> 英文题目：*[Flow\-Enhanced Language Embeddings for Robust Language Recognition](/posts/conference-odyssey-2026-conference-paper-id-cao26-odyssey-7f0d01567e/)*

标签：#流匹配 #鲁棒性 #多语言 #语音 #语言识别

评分：**5.7/10** | 创新 1.2/2 | 技术严谨 1.0/1.5 | 实验充分 0.9/1.5 | 清晰度 0.7/1 | 影响力 0.8/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 0.8/1.5

排名：前50% | 文档类型：方法研究 | 主任务：#语言识别 | 主方法：#流匹配

会议来源：[官方记录](https://www.isca-archive.org/odyssey_2026/cao26_odyssey.html) · [官方 PDF](https://www.isca-archive.org/odyssey_2026/cao26_odyssey.pdf)

👥 **作者与机构**

- Tianyu Cao：机构信息未能从会议 PDF 纯文本可靠映射
- Laureano Moro Velazquez：机构信息未能从会议 PDF 纯文本可靠映射
- Jesus Villalba：机构信息未能从会议 PDF 纯文本可靠映射
- Thomas Thebaud：机构信息未能从会议 PDF 纯文本可靠映射
- Najim Dehak：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

语言识别以变长语音为输入，映射为定长语言向量后输出语种判决，实际难点在于噪声、混响、削波、限带、编解码、丢包与风噪等失配使同语种向量发散、语言可分性骤降。 该方法冻结预训练嵌入器，先对干净语音与失配语音提取配对向量，以失配向量为源分布、干净向量为目标参考。 接着以条件流匹配在嵌入空间学习从失配分布指向干净流形的连续速度场，上一阶段的配对向量直接作为流训练的监督对。 推理时以上一步学到的速度场为驱动，以失配向量为初值求解常微分方程得到精炼向量，再送入原有后端分类，全程无需语言标签与流水线改动。 与波形端先做信号增强再提取特征不同，该方法直接精炼下游分类所用的紧凑表征，使去噪目标与语言判别目标对齐，具有任务针对性与实际意义。 在URGENT2026七种失真混合测试条件下，ECAPA\-TDNN上Flow\-Enhanced Embedding的总体准确率为86\.72%，高于噪声基线的总体准确率69\.00%。 其结论适用边界受限于自建德英西法中五语种子集与两款冻结编码器，法语等语言提升不一致，跨数据集与未知失真外推尚未验证。 推理开销来自50步常微分方程求解，实验硬件为NVIDIA A100 GPU，原文未披露完整训练成本与部署吞吐。

🔗 **开源资源**

- 模型相关资源：<https://huggingface.co/openai/whisper-small> — 暂时无法访问
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 45. [在各向异性主成分平面里小角度旋转：无须训练的盲语音水印](/posts/conference-odyssey-2026-conference-paper-id-coletta26-odyssey-4da6eb8dbb/)

> 英文题目：*[Latent Secret Spin: Keyed Orthogonal Rotations for Blind Speech Watermarking in Anisotropic Latent Spaces](/posts/conference-odyssey-2026-conference-paper-id-coletta26-odyssey-4da6eb8dbb/)*

标签：#信号处理 #鲁棒性 #语音 #音频水印

评分：**5.7/10** | 创新 1.3/2 | 技术严谨 1.0/1.5 | 实验充分 0.9/1.5 | 清晰度 0.7/1 | 影响力 0.8/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 0.7/1.5

排名：前50% | 文档类型：方法研究 | 主任务：#音频水印 | 主方法：#信号处理

会议来源：[官方记录](https://www.isca-archive.org/odyssey_2026/coletta26_odyssey.html) · [官方 PDF](https://www.isca-archive.org/odyssey_2026/coletta26_odyssey.pdf)

👥 **作者与机构**

- Emma Coletta：机构信息未能从会议 PDF 纯文本可靠映射
- Massimiliano Todisco：机构信息未能从会议 PDF 纯文本可靠映射
- Michele Panariello：机构信息未能从会议 PDF 纯文本可靠映射
- Antonio Faonio：机构信息未能从会议 PDF 纯文本可靠映射
- Nicholas Evans：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

盲水印任务输入为待保护语音波形，输出为含不可感知载荷的水印波形与无原音频参考下的盲检判决，实际难点在于低通滤波、压缩重采样与加性噪声易抹除弱扰动并扭曲隐统计量。LSS先用冻结的24kHz EnCodec编码器将波形映射为128维连续隐特征，并减去语料均值后投影到预计算主成分空间，得到协方差近似对角的各向异性表示。接着按密钥与随机数生成的调度，在24个主成分平面多分块上施加0\.18弧度的微小正交旋转，并以比特与码片调制旋转符号，再经逆投影与解码器重建含水印波形。检测端对接收语音重编码，计算归一化协方差并按相同调度加权累积得分判决，无正确密钥或无水印时正负贡献相互抵消而得分趋零。与加性学习式水印不同，LSS利用方差差放大的符号化非对角协方差作为可检签名，无需训练嵌入器且即使解码器公开仍需密钥可检。在低通滤波截止频率为1kHz的评测条件下，LSS的AUC为96\.5%，高于AudioSeal的AUC 67\.8%。该结论适用边界受限于善意变换与固定编解码器验证，拼接与自适应擦除等强攻击及跨编码器泛化尚未验证。原文未披露训练、推理或部署成本。

🔗 **开源资源**

本次未形成可展示的已核验资源记录，开放状态尚未核实。
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 46. [注册分散比拉长更有效：SRE24 音频轨的条件拆解](/posts/conference-odyssey-2026-conference-paper-id-singer26-odyssey-61115597bf/)

> 英文题目：*[Analysis of the NIST 2024 Speaker Recognition Evaluation](/posts/conference-odyssey-2026-conference-paper-id-singer26-odyssey-61115597bf/)*

标签：#统计分析 #模型评估 #多语言 #语音 #说话人验证

评分：**5.7/10** | 创新 1.0/2 | 技术严谨 1.2/1.5 | 实验充分 0.8/1.5 | 清晰度 0.8/1 | 影响力 1.0/1.5 | 开源 0.0/1.5 | 可复现 0.1/0.5 | 工程/实践 0.8/1.5

排名：前50% | 文档类型：系统技术报告 | 主任务：#说话人验证 | 主方法：#统计分析

会议来源：[官方记录](https://www.isca-archive.org/odyssey_2026/singer26_odyssey.html) · [官方 PDF](https://www.isca-archive.org/odyssey_2026/singer26_odyssey.pdf)

👥 **作者与机构**

- Elliot Singer：机构信息未能从会议 PDF 纯文本可靠映射
- Craig Greenberg：机构信息未能从会议 PDF 纯文本可靠映射
- Lukas Diduch：机构信息未能从会议 PDF 纯文本可靠映射
- Trang Nguyen：机构信息未能从会议 PDF 纯文本可靠映射
- Lisa Mason：机构信息未能从会议 PDF 纯文本可靠映射
- Beth Matys：机构信息未能从会议 PDF 纯文本可靠映射
- Bob Dunn：机构信息未能从会议 PDF 纯文本可靠映射
- Audrey Tong：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

该文分析SRE24音频轨说话人验证，输入为注册语音Xenroll与测试语音Xtest，输出为目标与非目标假设下的对数似然比，以平均归一化检测代价判定，难点在于会话电话语音与视频伴音的信道失配、可变注册与低至5秒测试的不确定性及多人干扰。分析链分三步：先汇总固定与开放训练条件下主融合系统与单系统的总体表现，其分组输出进入下一步；再按性别、注册段数与时长、源类型、语言、测试时长与单多人条件分组计算actual与minimum Cprimary，其差异模式进入归纳；最后结合检测错误权衡曲线提炼高水平队伍的增强与建模共性。与此前SRE总结相比，该文把多注册增益与语言失配影响解耦，指出增加注册段数优于延长单段注册，其实质意义在于用多会话多样性对抗信道与语言变异。在SRE24音频轨评测设置下，完美系统的得分为0，低于仅输出H1假设的系统的得分1。评估语料为新采集的TELVID语料，仅含英语、突尼斯阿拉伯语与法语，注册约10、30或60秒语音，测试为5至60秒语音，多人同段影响33个试验并已更新键值剔除。该结论适用边界受限于上述三语与会话电话和视频伴音组合，尚未验证其他语种、更强噪声与跨年数据的外推性，短时与多人测试为主要失败条件。原文未披露训练、推理或部署成本。

🔗 **开源资源**

- 复现相关资源：<https://www.nist.gov/system/files/documents/2024/06/11/> — 链接不可用（HTTP 404）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 47. [只留前 K 个激活：稀疏伪造检测为何同时改善泛化与解耦](/posts/conference-odyssey-2026-conference-paper-id-tahon26-odyssey-8529747f3a/)

> 英文题目：*[Sparse deepfake detection promotes better disentanglement](/posts/conference-odyssey-2026-conference-paper-id-tahon26-odyssey-8529747f3a/)*

标签：#正则化 #可解释性 #语音 #音频深度伪造检测

评分：**5.6/10** | 创新 1.2/2 | 技术严谨 1.2/1.5 | 实验充分 0.9/1.5 | 清晰度 0.8/1 | 影响力 0.9/1.5 | 开源 0.0/1.5 | 可复现 0.1/0.5 | 工程/实践 0.5/1.5

排名：前50% | 文档类型：方法研究 | 主任务：#音频深度伪造检测 | 主方法：#正则化

会议来源：[官方记录](https://www.isca-archive.org/odyssey_2026/tahon26_odyssey.html) · [官方 PDF](https://www.isca-archive.org/odyssey_2026/tahon26_odyssey.pdf)

👥 **作者与机构**

- Marie Tahon：机构信息未能从会议 PDF 纯文本可靠映射
- Antoine Tessier：机构信息未能从会议 PDF 纯文本可靠映射
- Nicolas Dugué：机构信息未能从会议 PDF 纯文本可靠映射
- Aghilas Sini：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

语音伪造检测输入原始波形并输出真伪伪概率，难点在于训练、开发、测试三划分攻击完全不重叠且测试集混入对抗滤波，模型易过拟合并缺乏可解释依据。该文方法链分为三步：先用图注意力反欺骗网络AASIST提取谱时序图表示并池化为隐向量，再在末层Sigmoid后施加Top\-K激活仅保留最大响应，其余置零以形成稀疏编码，最后用二分类器基于稀疏向量判决并端到端从零训练。与事后探测或注意力可视化不同，该约束在训练时重塑表征分布，使可解释性成为模型内生属性而非外部诊断。在ASVspoof 5测试集上最稀疏模型等错误率EER为23\.36%，低于同设置密集基线，方向为下降且泛化更好。该结论仅适用于攻击类型可分且已滤除难检攻击的子空间，对单元拼接与对抗滤波攻击仍失效，外推到说话人等连续因素时结构更分散。原文未披露损失函数、优化器、推理与部署成本。

🔗 **开源资源**

本次未形成可展示的已核验资源记录，开放状态尚未核实。
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 48. [一句话多属性纠缠时，如何让检索按语义或按说话人分开算相似](/posts/conference-odyssey-2026-conference-paper-id-oregan26-odyssey-41d85bc55d/)

> 英文题目：*[Multi\-Axis Speech Similarity via Factor\-Partitioned Embeddings](/posts/conference-odyssey-2026-conference-paper-id-oregan26-odyssey-41d85bc55d/)*

标签：#对比学习 #知识蒸馏 #语音 #音频检索

评分：**5.4/10** | 创新 1.2/2 | 技术严谨 1.0/1.5 | 实验充分 0.8/1.5 | 清晰度 0.8/1 | 影响力 0.7/1.5 | 开源 0.0/1.5 | 可复现 0.1/0.5 | 工程/实践 0.8/1.5

排名：后50% | 文档类型：方法研究 | 主任务：#音频检索 | 主方法：#知识蒸馏

会议来源：[官方记录](https://www.isca-archive.org/odyssey_2026/oregan26_odyssey.html) · [官方 PDF](https://www.isca-archive.org/odyssey_2026/oregan26_odyssey.pdf)

👥 **作者与机构**

- Jim O'Regan：机构信息未能从会议 PDF 纯文本可靠映射
- Jens Edlund：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

语音相似检索的输入为待查询话语与候选语音库，输出是按语义内容或说话人等指定维度排序的候选列表，实际难点在于单向量将内容与说话人等属性纠缠，跨录音条件时语义召回易被同说话人相似淹没。该方法先用冻结声学编码器加均值池化将每句话映射为句级表示，负责提供保留多因素信息的初始向量。再经多组线性投影头将该向量切分为语义与说话人等轴子空间并归一化拼接，各轴分别用文本教师与说话人教师蒸馏监督，使上一步的纠缠表示转化为轴专属几何。检索时对各轴余弦相似做带符号加权求和并排序，负权显式排斥某轴相似项，从而在不重编码的情况下翻转检索偏好。与单空间检索或二值掩码选择相比，符号加权允许连续调节与反向抑制多轴贡献，实际意义在于同一套向量可按需强调说什么或压制谁在说。在rehasp查询对OSR\+rehasp混合索引的跨语料检索任务下，resem\-dial模型的P@1指标为65\.5%，高于语义单轴基线sem384模型的P@1指标0\.5%。该结论的适用边界受限于提示高度重叠的小规模朗读语料，尚未验证大词汇量、自发语音或多属性并存时的轴间泄漏与外推能力。原文未披露训练、推理或部署成本。

🔗 **开源资源**

- 模型相关资源：<https://huggingface.co/microsoft/wavlm-base-plus-sv> — 暂时无法访问
- 模型相关资源：<https://huggingface.co/jimregan/merged-tts-dialect-classification> — 暂时无法访问
- 第三方资源：<https://github.com/huggingface/sentence-transformers> — 链接可访问（HTTP 200）
- 第三方资源：<https://github.com/resemble-ai/resemblyzer> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 49. [稀疏与正交都能走向可解释：说话人表示的维度评测与取舍](/posts/conference-odyssey-2026-conference-paper-id-saget26-odyssey-b4975c9234/)

> 英文题目：*[Functionnally\-grounded evaluation of dimensional interpretability in sparse speaker representations](/posts/conference-odyssey-2026-conference-paper-id-saget26-odyssey-b4975c9234/)*

标签：#基准设计 #模型评估 #可解释性 #语音 #说话人验证

评分：**5.4/10** | 创新 1.2/2 | 技术严谨 1.3/1.5 | 实验充分 0.6/1.5 | 清晰度 0.7/1 | 影响力 0.8/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 0.5/1.5

排名：后50% | 文档类型：数据集与基准 | 主任务：#说话人验证 | 主方法：#基准设计

会议来源：[官方记录](https://www.isca-archive.org/odyssey_2026/saget26_odyssey.html) · [官方 PDF](https://www.isca-archive.org/odyssey_2026/saget26_odyssey.pdf)

👥 **作者与机构**

- Félix Saget：机构信息未能从会议 PDF 纯文本可靠映射
- Nicolas Dugué：机构信息未能从会议 PDF 纯文本可靠映射
- Marie Tahon：机构信息未能从会议 PDF 纯文本可靠映射
- Anthony Larcher：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

输入为256维冻结说话人嵌入，输出为500维自编码隐表征，难点在于说话人身份线索连续纠缠且不存在公认的原子概念集，单个维度难以对应人类可理解因素。该工作先用WavLM base\-plus前端加ECAPA\-TDNN抽取基线嵌入，再分别以矩阵级稀疏、向量级稀疏和维度正交三种约束训练浅层自编码器重构输入，最后以说话人验证、无监督稀疏性与解纠缠指标加典型性做功能接地评估。与文本稀疏嵌入的可解释性研究相比，关键差异是引入与验证任务相关的典型性做外部参照，并系统对照稀疏与正交两条路线。在VoxCeleb1\-O上基线等错误率EER为1\.98%，三类模型在筛选后均能出现EER低于5\.00%的模型，SPINE有效区间约30%至90%稀疏度，典型性在50%以上稀疏后下降，MI\-DCI完备性随稀疏上升。结论仅适用于VoxCeleb英文主导数据与4个概念，高稀疏常数维度、小评测集偏差与单隐维度设置尚未解决。原文未披露训练、推理或部署成本。

🔗 **开源资源**

- 第三方资源：<https://openai.com/index/> → <https://openai.com/news/> — 链接不可用（HTTP 403）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 50. [从单人声音到多人对话：互动本身如何泄露隐私属性](/posts/conference-odyssey-2026-conference-paper-id-bijmold26-odyssey-34f5fbb6d1/)

> 英文题目：*[Privacy in Spoken Interaction: An Overview of Inferable Attributes](/posts/conference-odyssey-2026-conference-paper-id-bijmold26-odyssey-34f5fbb6d1/)*

标签：#文献综述方法 #隐私保护 #语音 #语音属性识别

评分：**4.7/10** | 创新 1.0/2 | 技术严谨 0.8/1.5 | 实验充分 0.5/1.5 | 清晰度 0.8/1 | 影响力 0.8/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 0.5/1.5

排名：后50% | 文档类型：综述 | 主任务：#语音属性识别 | 主方法：#文献综述方法

会议来源：[官方记录](https://www.isca-archive.org/odyssey_2026/bijmold26_odyssey.html) · [官方 PDF](https://www.isca-archive.org/odyssey_2026/bijmold26_odyssey.pdf)

👥 **作者与机构**

- Eline Bijmold：机构信息未能从会议 PDF 纯文本可靠映射
- Anastasiia Korenevskaia：机构信息未能从会议 PDF 纯文本可靠映射
- Martha Larson：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

本文输入为两人及以上人类语音对话的录音与转写，输出为个人与群体两类可推断隐私属性的分类总览及其可利用的互动特征映射，难点在于许多敏感属性在孤立语音中不可见而仅在轮次协调与相互影响中显现。方法链分三步展开：先围绕个人稳定属性增强与群体特有属性两类研究问题界定纳入标准并构造检索式，其输出的查询集合进入下一步文献搜集，再经Google Scholar与ACM及IEEE Xplore常规检索叠加Google Scholar Labs的AI检索合并去重扩大文献池，最后按必须涉及多人人类互动且超越单人可观测性的标准筛选并聚类为个人与群体两大属性簇及其语音特征映射。相对已有单说话人语音隐私研究的关键机制差异在于引入轮次接管与打断统计、语言镜像与情感传染序列及互动词模式作为推断通道，其实质意义在于揭示互动本身创造了新的可推断性而非仅增强原有声学线索。原文未提供可核对的关键定量结果。结论的适用边界限于人类之间自发语音互动的文献综合，对人机对话与跨文化群体的外推尚未验证。原文未披露训练、推理或部署成本。

🔗 **开源资源**

- 代码相关资源：<https://github.com/nastyakor01/Privacy-In-Spoken-I> — 链接不可用（HTTP 404）
- 第三方资源：<https://www.read.ai/meeting-reports> — 链接可访问（HTTP 200）
- 第三方资源：<https://fireflies.ai/> — 链接可访问（HTTP 200）
- 第三方资源：<https://scholar.google.com/> — 链接可访问（HTTP 200）
- 第三方资源：<https://dl.acm.org/> — 链接不可用（HTTP 403）
- 第三方资源：<https://ieeexplore.ieee.org/Xplore/> → <https://ieeexplore.ieee.org/Xplore/login.jsp?url=%2FXplore%2F&authDecision=-203> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 51. [持续元音能提示特纳综合征吗：共振峰下移与声门扰动降低的初步证据](/posts/conference-odyssey-2026-conference-paper-id-freixes26-odyssey-e9bd8568a1/)

> 英文题目：*[Vocal markers of Turner syndrome: a preliminary analysis of sustained vowel recordings](/posts/conference-odyssey-2026-conference-paper-id-freixes26-odyssey-e9bd8568a1/)*

标签：#语音生物标志物 #统计分析 #语音 #病理语音评估

评分：**4.6/10** | 创新 1.0/2 | 技术严谨 1.0/1.5 | 实验充分 0.7/1.5 | 清晰度 0.8/1 | 影响力 0.5/1.5 | 开源 0.0/1.5 | 可复现 0.1/0.5 | 工程/实践 0.5/1.5

排名：后50% | 文档类型：应用研究 | 主任务：#病理语音评估 | 主方法：#统计分析

会议来源：[官方记录](https://www.isca-archive.org/odyssey_2026/freixes26_odyssey.html) · [官方 PDF](https://www.isca-archive.org/odyssey_2026/freixes26_odyssey.pdf)

👥 **作者与机构**

- Marc Freixes：机构信息未能从会议 PDF 纯文本可靠映射
- Jordi Sanz：机构信息未能从会议 PDF 纯文本可靠映射
- Joan Claudi Socoró：机构信息未能从会议 PDF 纯文本可靠映射
- Jordi\-Elm Margalef：机构信息未能从会议 PDF 纯文本可靠映射
- Isabella Monlleó：机构信息未能从会议 PDF 纯文本可靠映射
- Debora Michelatto：机构信息未能从会议 PDF 纯文本可靠映射
- Francesc Alías\-Pujol：机构信息未能从会议 PDF 纯文本可靠映射
- Neus Martínez\-Abadías：机构信息未能从会议 PDF 纯文本可靠映射
- Xavier Sevillano：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

本文任务以智能手机采集的持续元音/a/录音为输入，输出特纳综合征与对照的二分类判断，难点在于表型异质性强、年龄与激素治疗干扰音高且罕见病样本稀缺。方法链分三步：先用OpenSMILE与经Parselmouth调用的Praat提取韵律频谱与共振峰共43维声学特征，输出逐文件特征向量进入下一步。接着对年龄相关特征做基于对照组回归的残差校正，再并行以Mann\-Whitney U检验加FDR校正与MRMR筛选特征，形成可解释与数据驱动两套子集。最后在分组嵌套交叉验证下训练逻辑回归、随机森林、核支持向量机与极端梯度提升树并比较泛化性能。相对既往仅报告基频偏高的零散观察，该工作将声门源微扰与声道共振统计纳入统一流水线，并对比统计显著性与多变量互信息选特征对线性与树模型的差异化影响，具有可解释筛查意义。在巴西子集持续元音/a/分组嵌套交叉验证评测设置下，XGBoost的AUC为0\.821 ± 0\.028，高于Logistic Regression的AUC 0\.613 ± 0\.043。结论适用边界仅限单设备安静环境下巴西女性持续元音/a/，跨语言、连续语料、儿童与不同核型的外推尚未验证。原文未披露训练、推理或部署成本。

🔗 **开源资源**

本次未形成可展示的已核验资源记录，开放状态尚未核实。
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 52. [在说话人不见面的严苛划分下，用冻结语音表示加轻量解码器做构音障碍分级](/posts/conference-odyssey-2026-conference-paper-id-lillini26-odyssey-7214719769/)

> 英文题目：*[Dysarthria Severity Classification on the HeyJay\! Dataset: A Parameter\-Efficient Approach Using Self\-Supervised Speech Representations](/posts/conference-odyssey-2026-conference-paper-id-lillini26-odyssey-7214719769/)*

标签：#参数高效微调 #自监督学习 #低资源 #语音 #病理语音评估

评分：**4.6/10** | 创新 1.0/2 | 技术严谨 1.0/1.5 | 实验充分 0.5/1.5 | 清晰度 0.8/1 | 影响力 0.5/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 0.5/1.5

排名：后50% | 文档类型：应用研究 | 主任务：#病理语音评估 | 主方法：#参数高效微调

会议来源：[官方记录](https://www.isca-archive.org/odyssey_2026/lillini26_odyssey.html) · [官方 PDF](https://www.isca-archive.org/odyssey_2026/lillini26_odyssey.pdf)

👥 **作者与机构**

- Davide Lillini：机构信息未能从会议 PDF 纯文本可靠映射
- Thomas Thebaud：机构信息未能从会议 PDF 纯文本可靠映射
- Lucia Migliorelli：机构信息未能从会议 PDF 纯文本可靠映射
- Najim Dehak：机构信息未能从会议 PDF 纯文本可靠映射
- Stefano Squartini：机构信息未能从会议 PDF 纯文本可靠映射
- Laureano Moro Velazquez：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

构音障碍严重程度分类需从变长虚拟助手命令语音预测低中重三档感知标签，难点在于连续感知量表离散化后的相邻边界模糊与对未见说话人的泛化要求。该方法以冻结的wav2vec 2\.0 Large XLSR\-53为声学骨干，先经可学习加权求和融合25层隐表示以选择抽象层级，其输出送入时序注意力池化将变长帧序列压缩为定长向量，再经紧凑嵌入网络与线性层输出三分类。与依赖可懂度标签且存在说话人泄露划分的已有方法不同，该设计冻结约300M参数主干仅训练轻量解码器，并强制说话人无关五折划分与固定发育集调参，更贴近临床评估未见说话人的实际意义。在HeyJay\!说话人无关交叉验证评测下，多数投票聚合后说话人级的准确率为80\.2%，高于话语级准确率的64\.6%。误差分析显示80\.3%错误集中于相邻类别且中重边界最严重，与专家在同一阈值62\.5%的不一致率趋势吻合，层权重分析表明高层语境音系信息最具判别力。结论适用边界受限于英语虚拟助手命令、36人小队列与三档离散体系，向连续回归与跨库泛化的外推尚未验证。原文未披露训练、推理或部署成本。

🔗 **开源资源**

本次未形成可展示的已核验资源记录，开放状态尚未核实。
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---
