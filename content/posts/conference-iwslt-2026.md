---
title: "iwslt-2026 论文深度解读"
date: 2026-09-12
draft: false
paper_digest_pipeline_owned: true
tags: ["测试时自适应","大语言模型","低资源","端到端","多模态模型","多模态学习","多任务学习","多语言","高效推理","后训练","基准设计","检索增强","课程学习","口语意图与槽位识别","跨语言","零样本","流式处理","模型比较","模型量化","模型评估","模型融合","偏好优化","评测协议","强化学习","数据集","数据集构建","数据增强","音频大模型","音频问答","语音","语音翻译","语音克隆","语音识别","语音质量评估","长音频处理","知识蒸馏","指令微调","注意力机制","自回归模型","Adapter","LoRA","SFT","Transformer"]
categories: ["iwslt-2026 论文"]
description: "共收录 38 篇 iwslt-2026 会议论文的 Reader 深度解读"
paper_digest_page_type: index
paper_digest_reader_quality: "reader-facing-v3"
paper_digest_taxonomy_contract: "paper-taxonomy-flat-tags-compat-v1"
paper_digest_taxonomy_selection_contract: "paper-taxonomy-selection-v1"
paper_digest_taxonomy_registry_version: "paper-taxonomy-v1"
paper_digest_taxonomy_registry_sha256: "15c82a567ce5a55dc1175684ed08b64c158558639d9c8fb822c9587ec32a8778"
paper_digest_taxonomy_scope: "aggregate-primary-task-counts"
---

# iwslt-2026 论文深度解读

本汇总收录 authenticated plan 选择集内全部 38 篇已完成分析、重标和单篇 staging 的论文。

🏷️ 标签说明：本期使用新版受控 taxonomy；热门方向只统计主任务。

## ⚡ 今日概览

✅ authenticated plan 入选 38 篇 → 🔬 深度分析、Reader 与页面投影完成

### 🏷️ 热门方向

| 方向（仅主任务） | 数量 |
|---|---:|
| #语音翻译 | 30 篇 |
| #语音克隆 | 4 篇 |
| #音频问答 | 2 篇 |
| #口语意图与槽位识别 | 1 篇 |
| #语音质量评估 | 1 篇 |

## 📊 论文评分排行榜

| 排名 | Reader 中文题目 | 英文题目 | 八维评分 | 分档 | 文档类型 | 主任务 |
|---:|---|---|---|---|---|---|
| 1 | [字幕块太碎翻不好：先固定时间，再用整句重写文本](/posts/conference-iwslt-2026-conference-paper-id-2026-iwslt-1-7-d80e718c58/) | [The FBK Sentence\-Aware Subtitling System at the IWSLT 2026 Subtitling Track](/posts/conference-iwslt-2026-conference-paper-id-2026-iwslt-1-7-d80e718c58/) | **7.7/10** · 创新 1.2/2 · 技术严谨 1.0/1.5 · 实验充分 1.2/1.5 · 清晰度 0.8/1 · 影响力 1.0/1.5 · 开源 1.0/1.5 · 可复现 0.3/0.5 · 工程/实践 1.2/1.5 | 前25% | 系统技术报告 | #语音翻译 |
| 2 | [把连续打分变钝一点：用分桶平局校准提升语音翻译质量估计的段级排序](/posts/conference-iwslt-2026-conference-paper-id-2026-iwslt-1-36-545f8da686/) | [Tie\-Calibrated COMETKiwi for Speech Translation Quality Estimation: IWSLT2026 Metrics Track](/posts/conference-iwslt-2026-conference-paper-id-2026-iwslt-1-36-545f8da686/) | **7.1/10** · 创新 1.0/2 · 技术严谨 1.2/1.5 · 实验充分 1.0/1.5 · 清晰度 0.8/1 · 影响力 0.8/1.5 · 开源 1.0/1.5 · 可复现 0.3/0.5 · 工程/实践 1.0/1.5 | 前50% | 系统技术报告 | #语音翻译 |
| 3 | [没有交叉注意力时如何做 AlignAtt：把源文钉在提示词里再重算对齐块](/posts/conference-iwslt-2026-conference-paper-id-2026-iwslt-1-32-04bd65914a/) | [AlignAtt4LLM: Fast AlignAtt for Decoder\-Only LLMs at IWSLT 2026 Simultaneous Speech Translation Task](/posts/conference-iwslt-2026-conference-paper-id-2026-iwslt-1-32-04bd65914a/) | **7.0/10** · 创新 1.5/2 · 技术严谨 1.2/1.5 · 实验充分 1.0/1.5 · 清晰度 0.8/1 · 影响力 1.0/1.5 · 开源 0.0/1.5 · 可复现 0.3/0.5 · 工程/实践 1.2/1.5 | 前50% | 系统技术报告 | #语音翻译 |
| 4 | [从离线到同传再到打分：IWSLT 2026 如何把语音翻译的任务、系统与评价钉在一起](/posts/conference-iwslt-2026-conference-paper-id-2026-iwslt-1-39-77f9f06022/) | [Speech Translation and Metrics in 2026: Findings of the IWSLT Campaign](/posts/conference-iwslt-2026-conference-paper-id-2026-iwslt-1-39-77f9f06022/) | **6.9/10** · 创新 1.4/2 · 技术严谨 1.2/1.5 · 实验充分 1.0/1.5 · 清晰度 0.8/1 · 影响力 1.2/1.5 · 开源 0.0/1.5 · 可复现 0.1/0.5 · 工程/实践 1.2/1.5 | 前50% | 数据集与基准 | #语音翻译 |
| 5 | [用双模识别稳住部分音频，再让大模型翻译：NeMo 级联同传如何兼顾延迟与质量](/posts/conference-iwslt-2026-conference-paper-id-2026-iwslt-1-23-1a1426f5b3/) | [NeMo@IWSLT 2026: Cascaded System for Simultaneous Speech Translation](/posts/conference-iwslt-2026-conference-paper-id-2026-iwslt-1-23-1a1426f5b3/) | **6.8/10** · 创新 1.2/2 · 技术严谨 1.2/1.5 · 实验充分 1.2/1.5 · 清晰度 0.7/1 · 影响力 1.2/1.5 · 开源 0.0/1.5 · 可复现 0.1/0.5 · 工程/实践 1.2/1.5 | 前50% | 系统技术报告 | #语音翻译 |
| 6 | [零样本语音意图分类为何混合架构更稳：级联、端到端与混合的十三语言实证](/posts/conference-iwslt-2026-conference-paper-id-2026-iwslt-1-1-0ce5ab257e/) | [Towards Zero\-Shot SLU: An Empirical Study of Competing Architectural Paradigms](/posts/conference-iwslt-2026-conference-paper-id-2026-iwslt-1-1-0ce5ab257e/) | **6.5/10** · 创新 1.0/2 · 技术严谨 1.2/1.5 · 实验充分 0.9/1.5 · 清晰度 0.7/1 · 影响力 0.8/1.5 · 开源 1.0/1.5 · 可复现 0.1/0.5 · 工程/实践 0.8/1.5 | 前50% | 应用研究 | #口语意图与槽位识别 |
| 7 | [长语音指令跟随：把短语料拼成长训练、再用重排补转写的得失](/posts/conference-iwslt-2026-conference-paper-id-2026-iwslt-1-16-eadb46c8e5/) | [Multilingual Long\-Form Speech Instruction Following: KIT’s Submission to IWSLT 2026](/posts/conference-iwslt-2026-conference-paper-id-2026-iwslt-1-16-eadb46c8e5/) | **6.5/10** · 创新 1.2/2 · 技术严谨 1.0/1.5 · 实验充分 1.1/1.5 · 清晰度 0.7/1 · 影响力 1.0/1.5 · 开源 0.0/1.5 · 可复现 0.3/0.5 · 工程/实践 1.2/1.5 | 前50% | 系统技术报告 | #音频问答 |
| 8 | [用黑盒发射策略把离线大模型压成同传：Parakeet 加 Qwen 的级联取舍](/posts/conference-iwslt-2026-conference-paper-id-2026-iwslt-1-24-5bcdf60eaa/) | [MLLP\-VRAIN UPV System for the IWSLT 2026 Simultaneous Speech Translation Task](/posts/conference-iwslt-2026-conference-paper-id-2026-iwslt-1-24-5bcdf60eaa/) | **6.5/10** · 创新 1.2/2 · 技术严谨 1.0/1.5 · 实验充分 1.1/1.5 · 清晰度 0.7/1 · 影响力 1.0/1.5 · 开源 0.0/1.5 · 可复现 0.3/0.5 · 工程/实践 1.2/1.5 | 前50% | 系统技术报告 | #语音翻译 |
| 9 | [长语音同传评测为何卡在切句与时间戳：一条可复现的三段式流水线](/posts/conference-iwslt-2026-conference-paper-id-2026-iwslt-1-3-53c892bfd2/) | [A Practical Evaluation Method for Long\-Form Simultaneous Speech\-to\-Speech Translation](/posts/conference-iwslt-2026-conference-paper-id-2026-iwslt-1-3-53c892bfd2/) | **6.5/10** · 创新 1.2/2 · 技术严谨 1.2/1.5 · 实验充分 0.8/1.5 · 清晰度 0.8/1 · 影响力 1.0/1.5 · 开源 0.0/1.5 · 可复现 0.3/0.5 · 工程/实践 1.2/1.5 | 前50% | 方法研究 | #语音翻译 |
| 10 | [不用转写也能打分：HydraQE 把语音和译文一起编码做质量估计](/posts/conference-iwslt-2026-conference-paper-id-2026-iwslt-1-37-c81b5156ed/) | [HydraQE: OSU’s Submission for the IWSLT 2026 Speech Translation Metrics Shared Task](/posts/conference-iwslt-2026-conference-paper-id-2026-iwslt-1-37-c81b5156ed/) | **6.5/10** · 创新 1.3/2 · 技术严谨 1.0/1.5 · 实验充分 1.1/1.5 · 清晰度 0.8/1 · 影响力 1.0/1.5 · 开源 0.0/1.5 · 可复现 0.3/0.5 · 工程/实践 1.0/1.5 | 前50% | 系统技术报告 | #语音翻译 |
| 11 | [低资源下直接翻译为何胜过级联：QUESPA 以 SpeechT5 加增强与新语料推进克丘亚语语音翻译](/posts/conference-iwslt-2026-conference-paper-id-2026-iwslt-1-5-bd757f5843/) | [Team QUESPA System Submission for the IWSLT 2026 Dialectal and Low\-resource Speech Translation Task](/posts/conference-iwslt-2026-conference-paper-id-2026-iwslt-1-5-bd757f5843/) | **6.4/10** · 创新 1.0/2 · 技术严谨 1.0/1.5 · 实验充分 0.8/1.5 · 清晰度 0.5/1 · 影响力 0.8/1.5 · 开源 1.0/1.5 · 可复现 0.3/0.5 · 工程/实践 1.0/1.5 | 前50% | 系统技术报告 | #语音翻译 |
| 12 | [4 比特保翻译、3 比特现悬崖：Diet\-KIT 如何把 16 GB 语音大模型压进 4 GB](/posts/conference-iwslt-2026-conference-paper-id-2026-iwslt-1-21-fbe26efdc4/) | [Diet\-KIT: Post\-Training Quantization for Speech LLMs](/posts/conference-iwslt-2026-conference-paper-id-2026-iwslt-1-21-fbe26efdc4/) | **6.3/10** · 创新 1.1/2 · 技术严谨 1.0/1.5 · 实验充分 1.0/1.5 · 清晰度 0.8/1 · 影响力 0.9/1.5 · 开源 0.0/1.5 · 可复现 0.3/0.5 · 工程/实践 1.2/1.5 | 前50% | 系统技术报告 | #语音翻译 |
| 13 | [把离线 Canary 搬进同传：AlignAtt 截断如何换来口袋模型的低延迟](/posts/conference-iwslt-2026-conference-paper-id-2026-iwslt-1-22-fc60b1911e/) | [A Pocket Offline Model for Simultaneous Speech Translation as CUNI Submission to IWSLT 2026](/posts/conference-iwslt-2026-conference-paper-id-2026-iwslt-1-22-fc60b1911e/) | **6.3/10** · 创新 1.0/2 · 技术严谨 1.0/1.5 · 实验充分 1.0/1.5 · 清晰度 0.8/1 · 影响力 1.0/1.5 · 开源 0.0/1.5 · 可复现 0.3/0.5 · 工程/实践 1.2/1.5 | 前50% | 系统技术报告 | #语音翻译 |
| 14 | [离线大模型不重训怎么做同传：停顿切分加等待策略的测试时适配](/posts/conference-iwslt-2026-conference-paper-id-2026-iwslt-1-27-da942a5caf/) | [Test\-Time Adaptation of an Offline Multimodal Foundation Model for Simultaneous Speech Translation](/posts/conference-iwslt-2026-conference-paper-id-2026-iwslt-1-27-da942a5caf/) | **6.3/10** · 创新 1.2/2 · 技术严谨 1.0/1.5 · 实验充分 1.0/1.5 · 清晰度 0.8/1 · 影响力 1.0/1.5 · 开源 0.0/1.5 · 可复现 0.3/0.5 · 工程/实践 1.0/1.5 | 前50% | 系统技术报告 | #语音翻译 |
| 15 | [转录质量决定翻译上限：WhiNN\-ST 用级联与路由选择做低资源语音翻译](/posts/conference-iwslt-2026-conference-paper-id-2026-iwslt-1-6-db7e878593/) | [ADAPT–MTU HAI at IWSLT2026: Robust Cascaded Speech Translation for Bhojpuri–Hindi and Irish–English](/posts/conference-iwslt-2026-conference-paper-id-2026-iwslt-1-6-db7e878593/) | **6.3/10** · 创新 1.0/2 · 技术严谨 1.2/1.5 · 实验充分 1.0/1.5 · 清晰度 0.8/1 · 影响力 0.8/1.5 · 开源 0.0/1.5 · 可复现 0.3/0.5 · 工程/实践 1.2/1.5 | 前50% | 系统技术报告 | #语音翻译 |
| 16 | [把等待学进模型里：用原生音频大模型做无切分同声传译](/posts/conference-iwslt-2026-conference-paper-id-2026-iwslt-1-13-734ac6637a/) | [CUHKSZ Simultaneous Speech Translation System for IWSLT 2026](/posts/conference-iwslt-2026-conference-paper-id-2026-iwslt-1-13-734ac6637a/) | **6.2/10** · 创新 1.3/2 · 技术严谨 1.1/1.5 · 实验充分 0.7/1.5 · 清晰度 0.7/1 · 影响力 0.9/1.5 · 开源 0.0/1.5 · 可复现 0.3/0.5 · 工程/实践 1.2/1.5 | 前50% | 系统技术报告 | #语音翻译 |
| 17 | [不用人工标注的语音翻译数据从哪里来：伪标签真实语音与合成语音的对照](/posts/conference-iwslt-2026-conference-paper-id-2026-iwslt-1-15-d0297da7d7/) | [LIUM Submission for IWSLT 2026 Low\-resource Speech Translation Track](/posts/conference-iwslt-2026-conference-paper-id-2026-iwslt-1-15-d0297da7d7/) | **6.2/10** · 创新 1.2/2 · 技术严谨 1.0/1.5 · 实验充分 1.0/1.5 · 清晰度 0.7/1 · 影响力 0.8/1.5 · 开源 0.0/1.5 · 可复现 0.3/0.5 · 工程/实践 1.2/1.5 | 前50% | 系统技术报告 | #语音翻译 |
| 18 | [长音频不等说完再译：Pinch\-AST 用级联重翻译与噪声前缀训练换单卡实时](/posts/conference-iwslt-2026-conference-paper-id-2026-iwslt-1-30-ce5affc341/) | [Pinch\-AST: Robust Cascaded Speech Translation System for the IWSLT 2026 Simultaneous Speech Translation Task](/posts/conference-iwslt-2026-conference-paper-id-2026-iwslt-1-30-ce5affc341/) | **6.2/10** · 创新 1.2/2 · 技术严谨 1.0/1.5 · 实验充分 0.8/1.5 · 清晰度 0.8/1 · 影响力 0.9/1.5 · 开源 0.0/1.5 · 可复现 0.3/0.5 · 工程/实践 1.2/1.5 | 前50% | 系统技术报告 | #语音翻译 |
| 19 | [小语言模型下保住多任务语音跟随：换大容量投影器并补科学演讲合成数据](/posts/conference-iwslt-2026-conference-paper-id-2026-iwslt-1-17-e536bc964f/) | [NAVER LABS Europe Submission to the Instruction\-following 2026 Short Track](/posts/conference-iwslt-2026-conference-paper-id-2026-iwslt-1-17-e536bc964f/) | **6.1/10** · 创新 1.2/2 · 技术严谨 1.0/1.5 · 实验充分 1.0/1.5 · 清晰度 0.7/1 · 影响力 0.9/1.5 · 开源 0.0/1.5 · 可复现 0.3/0.5 · 工程/实践 1.0/1.5 | 前50% | 系统技术报告 | #音频问答 |
| 20 | [先转写再执行：用翻译大模型统一语音识别、翻译与问答的指令跟随系统](/posts/conference-iwslt-2026-conference-paper-id-2026-iwslt-1-19-cafa7769ee/) | [BSC’s Submission to the Instruction Following Track of IWSLT 2026](/posts/conference-iwslt-2026-conference-paper-id-2026-iwslt-1-19-cafa7769ee/) | **6.1/10** · 创新 1.2/2 · 技术严谨 1.0/1.5 · 实验充分 0.9/1.5 · 清晰度 0.7/1 · 影响力 1.0/1.5 · 开源 0.0/1.5 · 可复现 0.3/0.5 · 工程/实践 1.0/1.5 | 前50% | 系统技术报告 | #语音翻译 |
| 21 | [从等词输出到译员式取舍：用四种显式动作重做同声传译](/posts/conference-iwslt-2026-conference-paper-id-2026-iwslt-1-2-2e9a73dea7/) | [Redefining Machine Simultaneous Interpretation: From Incremental Translation to Human\-Like Strategies](/posts/conference-iwslt-2026-conference-paper-id-2026-iwslt-1-2-2e9a73dea7/) | **6.1/10** · 创新 1.4/2 · 技术严谨 1.0/1.5 · 实验充分 1.0/1.5 · 清晰度 0.7/1 · 影响力 0.9/1.5 · 开源 0.0/1.5 · 可复现 0.3/0.5 · 工程/实践 0.8/1.5 | 前50% | 方法研究 | #语音翻译 |
| 22 | [多语言一起训反而互相拖累：用梯度冲突定位瓶颈再做局部专化](/posts/conference-iwslt-2026-conference-paper-id-2026-iwslt-1-33-ce496423ec/) | [The CUHKSZ System for the IWSLT 2026 Low\-Resource Speech\-to\-Text Task](/posts/conference-iwslt-2026-conference-paper-id-2026-iwslt-1-33-ce496423ec/) | **6.0/10** · 创新 1.2/2 · 技术严谨 1.0/1.5 · 实验充分 1.0/1.5 · 清晰度 0.7/1 · 影响力 0.8/1.5 · 开源 0.0/1.5 · 可复现 0.3/0.5 · 工程/实践 1.0/1.5 | 前50% | 系统技术报告 | #语音翻译 |
| 23 | [长音频无切分条件下用两遍转写与语义合并压住幻觉的级联语音翻译](/posts/conference-iwslt-2026-conference-paper-id-2026-iwslt-1-9-dfc1d021a1/) | [HW\-TSC’s Submissions to the IWSLT 2026 Offline Speech Translation Task](/posts/conference-iwslt-2026-conference-paper-id-2026-iwslt-1-9-dfc1d021a1/) | **6.0/10** · 创新 1.0/2 · 技术严谨 1.0/1.5 · 实验充分 0.8/1.5 · 清晰度 0.8/1 · 影响力 0.9/1.5 · 开源 0.0/1.5 · 可复现 0.3/0.5 · 工程/实践 1.2/1.5 | 前50% | 系统技术报告 | #语音翻译 |
| 24 | [短模型拉长用：固定切分为何在长语音指令跟随中最稳](/posts/conference-iwslt-2026-conference-paper-id-2026-iwslt-1-29-bb3a100f1e/) | [FBK’s Long\-form SpeechLLMs for IWSLT 2026 Instruction Following](/posts/conference-iwslt-2026-conference-paper-id-2026-iwslt-1-29-bb3a100f1e/) | **5.9/10** · 创新 1.2/2 · 技术严谨 1.0/1.5 · 实验充分 0.8/1.5 · 清晰度 0.7/1 · 影响力 0.9/1.5 · 开源 0.0/1.5 · 可复现 0.3/0.5 · 工程/实践 1.0/1.5 | 前50% | 系统技术报告 | #语音翻译 |
| 25 | [科学口音难克隆：用三教师蒸馏加单语 LoRA 补学术域数据](/posts/conference-iwslt-2026-conference-paper-id-2026-iwslt-1-25-122fffe4fd/) | [One Voice, Many Tongues: Cross\-Lingual Voice Cloning for Scientific Speech](/posts/conference-iwslt-2026-conference-paper-id-2026-iwslt-1-25-122fffe4fd/) | **5.8/10** · 创新 1.0/2 · 技术严谨 1.0/1.5 · 实验充分 1.0/1.5 · 清晰度 0.7/1 · 影响力 0.8/1.5 · 开源 0.0/1.5 · 可复现 0.3/0.5 · 工程/实践 1.0/1.5 | 前50% | 系统技术报告 | #语音克隆 |
| 26 | [为 Badini 补上语音基准：5224 条平行语音文本如何翻译、录制与验证](/posts/conference-iwslt-2026-conference-paper-id-2026-iwslt-1-14-a4c037b1aa/) | [Fleurs\-Badini: Translation and Recording Fleurs Dataset for Badini Variant of Northern Kurdish](/posts/conference-iwslt-2026-conference-paper-id-2026-iwslt-1-14-a4c037b1aa/) | **5.7/10** · 创新 1.2/2 · 技术严谨 1.0/1.5 · 实验充分 0.9/1.5 · 清晰度 0.7/1 · 影响力 0.8/1.5 · 开源 0.0/1.5 · 可复现 0.1/0.5 · 工程/实践 1.0/1.5 | 前50% | 数据集与基准 | #语音翻译 |
| 27 | [低资源下直连还是级联：博杰普尔语语音翻译的适配器与质量估计融合](/posts/conference-iwslt-2026-conference-paper-id-2026-iwslt-1-31-9b6f81d9a0/) | [IIIT\-BGP IWSLT 2026 Systems for Low\-resource ST](/posts/conference-iwslt-2026-conference-paper-id-2026-iwslt-1-31-9b6f81d9a0/) | **5.7/10** · 创新 1.2/2 · 技术严谨 1.0/1.5 · 实验充分 0.9/1.5 · 清晰度 0.6/1 · 影响力 0.7/1.5 · 开源 0.0/1.5 · 可复现 0.3/0.5 · 工程/实践 1.0/1.5 | 前50% | 系统技术报告 | #语音翻译 |
| 28 | [先转准再压短：Qwen3 级联字幕如何在时间戳不动下满足中文字幕行数与语速](/posts/conference-iwslt-2026-conference-paper-id-2026-iwslt-1-10-17b65b6987/) | [HW\-TSC’s Submission to the IWSLT 2026 Subtitling Track](/posts/conference-iwslt-2026-conference-paper-id-2026-iwslt-1-10-17b65b6987/) | **5.6/10** · 创新 1.0/2 · 技术严谨 1.0/1.5 · 实验充分 0.8/1.5 · 清晰度 0.7/1 · 影响力 0.9/1.5 · 开源 0.0/1.5 · 可复现 0.1/0.5 · 工程/实践 1.1/1.5 | 前50% | 系统技术报告 | #语音翻译 |
| 29 | [不做跨注意力：把音频当作前缀塞进冻结大模型的翻译管线](/posts/conference-iwslt-2026-conference-paper-id-2026-iwslt-1-28-2c6a957238/) | [AURA\-ST: Acoustic\-Unconstrained Residual Architecture for Speech Translation](/posts/conference-iwslt-2026-conference-paper-id-2026-iwslt-1-28-2c6a957238/) | **5.6/10** · 创新 1.2/2 · 技术严谨 1.0/1.5 · 实验充分 0.7/1.5 · 清晰度 0.6/1 · 影响力 0.8/1.5 · 开源 0.0/1.5 · 可复现 0.3/0.5 · 工程/实践 1.0/1.5 | 前50% | 系统技术报告 | #语音翻译 |
| 30 | [多加一路语音却没更准：语音翻译质量估计的音频困境](/posts/conference-iwslt-2026-conference-paper-id-2026-iwslt-1-34-356bcb75f4/) | [Hurdles of Automatic Metric for Speech Translation Evaluation](/posts/conference-iwslt-2026-conference-paper-id-2026-iwslt-1-34-356bcb75f4/) | **5.6/10** · 创新 1.1/2 · 技术严谨 1.0/1.5 · 实验充分 1.0/1.5 · 清晰度 0.8/1 · 影响力 0.7/1.5 · 开源 0.0/1.5 · 可复现 0.3/0.5 · 工程/实践 0.7/1.5 | 前50% | 方法研究 | #语音翻译 |
| 31 | [英语音色说法语汉语为何走调：语言标签与词项检索如何稳住跨语种克隆](/posts/conference-iwslt-2026-conference-paper-id-2026-iwslt-1-8-931cb1166a/) | [KIT’s Submission to Cross\-Lingual Voice Cloning in IWSLT 2026](/posts/conference-iwslt-2026-conference-paper-id-2026-iwslt-1-8-931cb1166a/) | **5.6/10** · 创新 1.0/2 · 技术严谨 1.0/1.5 · 实验充分 0.8/1.5 · 清晰度 0.7/1 · 影响力 0.8/1.5 · 开源 0.0/1.5 · 可复现 0.3/0.5 · 工程/实践 1.0/1.5 | 前50% | 系统技术报告 | #语音克隆 |
| 32 | [加泰罗尼亚语到英语：级联为何仍压过端到端，瓶颈在语音端而不在翻译端](/posts/conference-iwslt-2026-conference-paper-id-2026-iwslt-1-18-8e4d5457db/) | [CATENG Submission for the IWSLT 2026: Dialectal and Low\-resource Speech Translation Task](/posts/conference-iwslt-2026-conference-paper-id-2026-iwslt-1-18-8e4d5457db/) | **5.5/10** · 创新 1.0/2 · 技术严谨 1.0/1.5 · 实验充分 0.8/1.5 · 清晰度 0.7/1 · 影响力 0.7/1.5 · 开源 0.0/1.5 · 可复现 0.3/0.5 · 工程/实践 1.0/1.5 | 前50% | 系统技术报告 | #语音翻译 |
| 33 | [压哪里比压多少更关键：只压 MLP 投影的编解码压缩](/posts/conference-iwslt-2026-conference-paper-id-2026-iwslt-1-4-24d482ed5d/) | [Selected\-Layer Codec Compression for Compact Speech Translation Models: An IWSLT 2026 English\-to\-Chinese Submission](/posts/conference-iwslt-2026-conference-paper-id-2026-iwslt-1-4-24d482ed5d/) | **5.5/10** · 创新 1.0/2 · 技术严谨 0.9/1.5 · 实验充分 0.8/1.5 · 清晰度 0.8/1 · 影响力 0.7/1.5 · 开源 0.0/1.5 · 可复现 0.3/0.5 · 工程/实践 1.0/1.5 | 前50% | 系统技术报告 | #语音翻译 |
| 34 | [评价要排序、训练却在拟合绝对分：用成对排序微调把 CometKiwi 对准文档内 Kendall τ](/posts/conference-iwslt-2026-conference-paper-id-2026-iwslt-1-38-4dd5abb2c5/) | [Lexilogic@IWSLT 2026: Pairwise Ranking Fine\-tuning of CometKiwi for Speech Translation Quality Estimation](/posts/conference-iwslt-2026-conference-paper-id-2026-iwslt-1-38-4dd5abb2c5/) | **5.4/10** · 创新 1.0/2 · 技术严谨 1.0/1.5 · 实验充分 0.8/1.5 · 清晰度 0.7/1 · 影响力 0.6/1.5 · 开源 0.0/1.5 · 可复现 0.3/0.5 · 工程/实践 1.0/1.5 | 后50% | 系统技术报告 | #语音质量评估 |
| 35 | [跨语种克隆要在说得对与听得出是谁之间做取舍](/posts/conference-iwslt-2026-conference-paper-id-2026-iwslt-1-12-ef09f51cb7/) | [Balancing Linguistic Intelligibility and Speaker Identity in Zero\-Shot Cross\-Lingual Voice Cloning](/posts/conference-iwslt-2026-conference-paper-id-2026-iwslt-1-12-ef09f51cb7/) | **5.3/10** · 创新 0.8/2 · 技术严谨 1.0/1.5 · 实验充分 0.8/1.5 · 清晰度 0.7/1 · 影响力 0.7/1.5 · 开源 0.0/1.5 · 可复现 0.3/0.5 · 工程/实践 1.0/1.5 | 后50% | 系统技术报告 | #语音克隆 |
| 36 | [让编码器自己学要看多远：动态前视掩码在同时语音翻译中的验证](/posts/conference-iwslt-2026-conference-paper-id-2026-iwslt-1-20-b172f24fd0/) | [Towards Dynamic Attention Masking for Simultaneous Speech Translation](/posts/conference-iwslt-2026-conference-paper-id-2026-iwslt-1-20-b172f24fd0/) | **5.2/10** · 创新 1.2/2 · 技术严谨 0.8/1.5 · 实验充分 0.8/1.5 · 清晰度 0.7/1 · 影响力 0.6/1.5 · 开源 0.0/1.5 · 可复现 0.3/0.5 · 工程/实践 0.8/1.5 | 后50% | 系统技术报告 | #语音翻译 |
| 37 | [借英语占位撬动马普敦贡语翻译：冻结大模型只练一个小适配器](/posts/conference-iwslt-2026-conference-paper-id-2026-iwslt-1-26-0f2b153765/) | [Mapudungun\-Spanish Speech Translation: A Low\-Resource End\-to\-End System for the IWSLT 2026 Shared Task](/posts/conference-iwslt-2026-conference-paper-id-2026-iwslt-1-26-0f2b153765/) | **5.1/10** · 创新 1.0/2 · 技术严谨 1.0/1.5 · 实验充分 0.6/1.5 · 清晰度 0.7/1 · 影响力 0.7/1.5 · 开源 0.0/1.5 · 可复现 0.1/0.5 · 工程/实践 1.0/1.5 | 后50% | 系统技术报告 | #语音翻译 |
| 38 | [长参考切短再选优：跨语言音色克隆如何兼顾内容与音色](/posts/conference-iwslt-2026-conference-paper-id-2026-iwslt-1-11-342ea3d3a8/) | [HW\-TSC’s Submission to the IWSLT 2026 Cross\-Lingual Voice Cloning Track](/posts/conference-iwslt-2026-conference-paper-id-2026-iwslt-1-11-342ea3d3a8/) | **4.7/10** · 创新 0.8/2 · 技术严谨 1.0/1.5 · 实验充分 0.5/1.5 · 清晰度 0.6/1 · 影响力 0.7/1.5 · 开源 0.0/1.5 · 可复现 0.1/0.5 · 工程/实践 1.0/1.5 | 后50% | 系统技术报告 | #语音克隆 |

---

## 📋 论文列表

### 1. [字幕块太碎翻不好：先固定时间，再用整句重写文本](/posts/conference-iwslt-2026-conference-paper-id-2026-iwslt-1-7-d80e718c58/)

> 英文题目：*[The FBK Sentence\-Aware Subtitling System at the IWSLT 2026 Subtitling Track](/posts/conference-iwslt-2026-conference-paper-id-2026-iwslt-1-7-d80e718c58/)*

标签：#模型融合 #多语言 #语音 #语音翻译

评分：**7.7/10** | 创新 1.2/2 | 技术严谨 1.0/1.5 | 实验充分 1.2/1.5 | 清晰度 0.8/1 | 影响力 1.0/1.5 | 开源 1.0/1.5 | 可复现 0.3/0.5 | 工程/实践 1.2/1.5

排名：前25% | 文档类型：系统技术报告 | 主任务：#语音翻译 | 主方法：#模型融合

会议来源：[官方记录](https://aclanthology.org/2026.iwslt-1.7/) · [官方 PDF](https://aclanthology.org/2026.iwslt-1.7.pdf)

👥 **作者与机构**

- Mauro Cettolo：机构信息未能从会议 PDF 纯文本可靠映射
- Roldano Cattoni：机构信息未能从会议 PDF 纯文本可靠映射
- Matteo Negri：机构信息未能从会议 PDF 纯文本可靠映射
- Luisa Bentivogli：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

该任务输入为英语音视频音频，输出为多语种且满足阅读速度与版式约束的字幕文件，难点在于语音活动检测碎片同时损害识别连贯性与翻译完整性。第一阶段先由语音活动检测切分音频，再由Whisper生成带时间戳的字幕级转写并经多语言机器翻译模型逐条翻译以固定时间模板。第二阶段聚合相邻语音活动检测片段形成长音频，用Voxtral重转写并按强标点切分为整句，再做整句翻译后经词级对齐回贴到原字幕时间轴。在dev2026评测设置下，primary系统的BLEU为22\.94，高于contrastive\-1基线的BLEU 21\.02。与逐字幕独立翻译相比，该设计保留同步约束的同时恢复了跨字幕句法上下文，因而改善了转写与翻译质量。该结论在娱乐新闻与YouTube三类英语源语料上验证，对其他源语言与实时场景的外推尚未验证，适用边界受限于所测领域与语言对。原文按处理步骤量化了各阶段计算量，推理开销的细节在第3\.2节结合硬件条件分步讨论。

🔗 **开源资源**

- 模型相关资源：<https://huggingface.co/mistralai/> — 暂时无法访问
- 模型相关资源：<https://huggingface.co/google/> — 暂时无法访问
- 模型相关资源：<https://github.com/openai/whisper> — 暂时无法访问
- 模型相关资源：<https://github.com/SYSTRAN/faster-whisper> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 2. [把连续打分变钝一点：用分桶平局校准提升语音翻译质量估计的段级排序](/posts/conference-iwslt-2026-conference-paper-id-2026-iwslt-1-36-545f8da686/)

> 英文题目：*[Tie\-Calibrated COMETKiwi for Speech Translation Quality Estimation: IWSLT2026 Metrics Track](/posts/conference-iwslt-2026-conference-paper-id-2026-iwslt-1-36-545f8da686/)*

标签：#评测协议 #多语言 #语音 #语音翻译

评分：**7.1/10** | 创新 1.0/2 | 技术严谨 1.2/1.5 | 实验充分 1.0/1.5 | 清晰度 0.8/1 | 影响力 0.8/1.5 | 开源 1.0/1.5 | 可复现 0.3/0.5 | 工程/实践 1.0/1.5

排名：前50% | 文档类型：系统技术报告 | 主任务：#语音翻译 | 主方法：#评测协议

会议来源：[官方记录](https://aclanthology.org/2026.iwslt-1.36/) · [官方 PDF](https://aclanthology.org/2026.iwslt-1.36.pdf)

👥 **作者与机构**

- Mubashir Hussain Shah：机构信息未能从会议 PDF 纯文本可靠映射
- Aymen Fatima：机构信息未能从会议 PDF 纯文本可靠映射
- Kiho Choi：机构信息未能从会议 PDF 纯文本可靠映射
- Daehee Jang：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

语音翻译质量估计需在无参考译文下，仅凭源语音、ASR转写与机器译文预测每段质量，难点在于自动切分错位与转写噪声会污染文本指标。该系统先以冻结的COMETKiwi\-22为ASR转写与假设译文打分并线性缩放到0到100，为后续校准提供连续质量信号。接着在训练切分上估计分数标准差并按比例网格搜索分桶宽度，以训练集文档级平均τb最大为准则选出每目标语言最优宽度。最后将待评分数按最优宽度圆整为离散桶值以输出校准分，使文档内微小差异变为τb忽略的精确同分。与直接输出连续分的基线相比，该机制消除了任意微排序造成的伪不和谐对，而不改变系统级排序，因而具有实际意义。在IWSLT 2026开发集评测下，主系统的段级平均Kendall τb为39\.4%，高于任务方COMETKiwi基线的段级平均Kendall τb34\.6%。该结论适用边界限于高质量讲座语音与已校对转写场景，对呼叫中心等噪声域的可靠性尚未验证，而推理硬件为单个NVIDIA RTX A6000 GPU且批量为16。

🔗 **开源资源**

- 模型相关资源：<https://huggingface.co/Unbabel/wmt22> — 暂时无法访问
- 数据相关资源：<https://huggingface.co/datasets/maik> — 暂时无法访问
- 数据相关资源：<https://speechm.cloud.cyfronet.pl/> — 链接可访问（HTTP 200）
- 数据相关资源：<https://iwslt.org/2026/metrics> — 链接可访问（HTTP 200）
- 复现相关资源：<https://github.com/zouharvi/iwslt26-m> — 链接不可用（HTTP 404）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 3. [没有交叉注意力时如何做 AlignAtt：把源文钉在提示词里再重算对齐块](/posts/conference-iwslt-2026-conference-paper-id-2026-iwslt-1-32-04bd65914a/)

> 英文题目：*[AlignAtt4LLM: Fast AlignAtt for Decoder\-Only LLMs at IWSLT 2026 Simultaneous Speech Translation Task](/posts/conference-iwslt-2026-conference-paper-id-2026-iwslt-1-32-04bd65914a/)*

标签：#注意力机制 #大语言模型 #多语言 #流式处理 #语音翻译

评分：**7.0/10** | 创新 1.5/2 | 技术严谨 1.2/1.5 | 实验充分 1.0/1.5 | 清晰度 0.8/1 | 影响力 1.0/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 1.2/1.5

排名：前50% | 文档类型：系统技术报告 | 主任务：#语音翻译 | 主方法：#注意力机制

会议来源：[官方记录](https://aclanthology.org/2026.iwslt-1.32/) · [官方 PDF](https://aclanthology.org/2026.iwslt-1.32.pdf)

👥 **作者与机构**

- Quentin Fuxa：机构信息未能从会议 PDF 纯文本可靠映射
- Dominik Macháček：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

面向未切分长讲座英语到德语、意大利语和中文的追加式同时传译，输入为连续语音流而输出为只增译文，难点在于解码器大模型没有可读源端交叉注意力且易在不完整前缀上幻觉。方法链第一步由Qwen3\-ASR与强制对齐器逐块重转录并给出词级结束时间，以界定当前可访问源前沿并输出实时转录前缀。第二步用确定性提示布局将该转录前缀暴露为连续源跨度，再拼接系统指令与已接受译文，形成因果解码的完整草稿输入。第三步离线校准从全部336个头中每语言方向保留8个翻译对齐头，固定为推理时唯一依赖校准的头集。第四步在vLLM运行时捕获已部署注意力的查询与键，仅重放草稿到源块并经双分支聚合做首次失败接受扫描，输出最长可接受前缀。相对标准AlignAtt直接读取编码器解码器源归一化交叉注意力，关键差异在于必须从因果自注意力中分离源列并抑制大量非源注意力，同时保持与融合内核比特一致，具有可部署的实际意义。在IWSLT 2026 MCIF开发集评测下，本系统的BLEU为28\.76，高于组织方无上下文基线的BLEU 22\.35。结论适用边界限于欧洲语言低延迟与高延迟两档，中文方向BLEU与XCOMET\-XL仍落后且尚未验证更换翻译专用骨干后的外推。推理开销方面系统在单卡同步调度下运行，低延迟档延迟为2\.00秒CU\-LongYAAL且MT每词元中位延迟降至25\.4毫秒。

🔗 **开源资源**

本次未形成可展示的已核验资源记录，开放状态尚未核实。
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 4. [从离线到同传再到打分：IWSLT 2026 如何把语音翻译的任务、系统与评价钉在一起](/posts/conference-iwslt-2026-conference-paper-id-2026-iwslt-1-39-77f9f06022/)

> 英文题目：*[Speech Translation and Metrics in 2026: Findings of the IWSLT Campaign](/posts/conference-iwslt-2026-conference-paper-id-2026-iwslt-1-39-77f9f06022/)*

标签：#基准设计 #模型评估 #多语言 #语音 #语音翻译

评分：**6.9/10** | 创新 1.4/2 | 技术严谨 1.2/1.5 | 实验充分 1.0/1.5 | 清晰度 0.8/1 | 影响力 1.2/1.5 | 开源 0.0/1.5 | 可复现 0.1/0.5 | 工程/实践 1.2/1.5

排名：前50% | 文档类型：数据集与基准 | 主任务：#语音翻译 | 主方法：#基准设计

会议来源：[官方记录](https://aclanthology.org/2026.iwslt-1.39/) · [官方 PDF](https://aclanthology.org/2026.iwslt-1.39.pdf)

👥 **作者与机构**

- David Ifeoluwa Adelani：机构信息未能从会议 PDF 纯文本可靠映射
- Victor Agostinelli：机构信息未能从会议 PDF 纯文本可靠映射
- Antonios Anastasopoulos：机构信息未能从会议 PDF 纯文本可靠映射
- Luisa Bentivogli：机构信息未能从会议 PDF 纯文本可靠映射
- Ondřej Bojar：机构信息未能从会议 PDF 纯文本可靠映射
- Sébastien Bratières：机构信息未能从会议 PDF 纯文本可靠映射
- Marine Carpuat：机构信息未能从会议 PDF 纯文本可靠映射
- Fabrício Carraro：机构信息未能从会议 PDF 纯文本可靠映射
- Roldano Cattoni：机构信息未能从会议 PDF 纯文本可靠映射
- Mauro Cettolo：机构信息未能从会议 PDF 纯文本可靠映射
- Lizhong Chen：机构信息未能从会议 PDF 纯文本可靠映射
- Marcello Federico：机构信息未能从会议 PDF 纯文本可靠映射
- Marco Gaido：机构信息未能从会议 PDF 纯文本可靠映射
- Mahendra Gupta：机构信息未能从会议 PDF 纯文本可靠映射
- HyoJung Han：机构信息未能从会议 PDF 纯文本可靠映射
- Ali Hatami：机构信息未能从会议 PDF 纯文本可靠映射
- Lewis C\. Howe：机构信息未能从会议 PDF 纯文本可靠映射
- Dávid Javorský：机构信息未能从会议 PDF 纯文本可靠映射
- Yejin Jeon：机构信息未能从会议 PDF 纯文本可靠映射
- Marek Kasztelnik：机构信息未能从会议 PDF 纯文本可靠映射
- Antoine Laurent：机构信息未能从会议 PDF 纯文本可靠映射
- Danni Liu：机构信息未能从会议 PDF 纯文本可靠映射
- Nam Luu：机构信息未能从会议 PDF 纯文本可靠映射
- Min Ma：机构信息未能从会议 PDF 纯文本可靠映射
- Dominik Macháček：机构信息未能从会议 PDF 纯文本可靠映射
- Marie Maltais：机构信息未能从会议 PDF 纯文本可靠映射
- Evgeny Matusov：机构信息未能从会议 PDF 纯文本可靠映射
- John McCrae：机构信息未能从会议 PDF 纯文本可靠映射
- Chutong Meng：机构信息未能从会议 PDF 纯文本可靠映射
- Chandresh Kumar Maurya：机构信息未能从会议 PDF 纯文本可靠映射
- Mohammad Mohammadamini：机构信息未能从会议 PDF 纯文本可靠映射
- Yasmin Moslem：机构信息未能从会议 PDF 纯文本可靠映射
- Kenton Murray：机构信息未能从会议 PDF 纯文本可靠映射
- Satoshi Nakamura：机构信息未能从会议 PDF 纯文本可靠映射
- Matteo Negri：机构信息未能从会议 PDF 纯文本可靠映射
- Jan Niehues：机构信息未能从会议 PDF 纯文本可靠映射
- Atul Kr\. Ojha：机构信息未能从会议 PDF 纯文本可靠映射
- John E\. Ortega：机构信息未能从会议 PDF 纯文本可靠映射
- Siqi Ouyang：机构信息未能从会议 PDF 纯文本可靠映射
- Sara Papi：机构信息未能从会议 PDF 纯文本可靠映射
- Peter Polák：机构信息未能从会议 PDF 纯文本可靠映射
- Fabian Retkowski：机构信息未能从会议 PDF 纯文本可靠映射
- Stephanny Sánchez：机构信息未能从会议 PDF 纯文本可靠映射
- Beatrice Savoldi：机构信息未能从会议 PDF 纯文本可靠映射
- Claytone Sikasote：机构信息未能从会议 PDF 纯文本可靠映射
- Matthias Sperber：机构信息未能从会议 PDF 纯文本可靠映射
- Sebastian Stüker：机构信息未能从会议 PDF 纯文本可靠映射
- Katsuhito Sudoh：机构信息未能从会议 PDF 纯文本可靠映射
- Marie Tahon：机构信息未能从会议 PDF 纯文本可靠映射
- Marco Turchi：机构信息未能从会议 PDF 纯文本可靠映射
- Alexander Waibel：机构信息未能从会议 PDF 纯文本可靠映射
- Patrick Wilken：机构信息未能从会议 PDF 纯文本可靠映射
- Rodolfo Joel Zevallos：机构信息未能从会议 PDF 纯文本可靠映射
- Vilem Zouhar：机构信息未能从会议 PDF 纯文本可靠映射
- Maike Züfle：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

本文任务是以长时无切分演讲与新闻语音为输入，直接生成多语种文本译文、字幕、语音及问答摘要输出，难点在于真实噪声、多说话人、长音频连贯性与严格时延可读性约束并存。方法链首先按离线、同时、字幕与语音到语音等赛道发放开发集与测试集并统一经SPEECHM平台提交评测，使长音频输入进入统一协议下的解码比较。接着以COMET、SubER、WER与CER等自动指标对转写翻译与字幕切分做初排与对齐，将初排输出送入下一阶段的人工与源音频直接评估。最后针对离线压缩与指令跟随任务基于源音频做直接打分，形成从自动初筛到人工终评的闭环。与已有级联评测相比，关键机制差异是引入无预切分流式分割、额外上下文增强与语音质量估计赛道并统一长短音频评测流程，其实质是将分段误差纳入系统比较而非事后切分对齐。在SHORT至LONG问答任务评测下，FBK受限主系统的WER为19\.6，高于其在SHORT条件的WER12\.3。该结论适用边界受限于所发布演讲与新闻测试域及参评系统分布，跨域低资源外推尚未验证。原文未披露训练、推理或部署成本。

🔗 **开源资源**

本次未形成可展示的已核验资源记录，开放状态尚未核实。
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 5. [用双模识别稳住部分音频，再让大模型翻译：NeMo 级联同传如何兼顾延迟与质量](/posts/conference-iwslt-2026-conference-paper-id-2026-iwslt-1-23-1a1426f5b3/)

> 英文题目：*[NeMo@IWSLT 2026: Cascaded System for Simultaneous Speech Translation](/posts/conference-iwslt-2026-conference-paper-id-2026-iwslt-1-23-1a1426f5b3/)*

标签：#模型融合 #大语言模型 #多语言 #流式处理 #语音翻译

评分：**6.8/10** | 创新 1.2/2 | 技术严谨 1.2/1.5 | 实验充分 1.2/1.5 | 清晰度 0.7/1 | 影响力 1.2/1.5 | 开源 0.0/1.5 | 可复现 0.1/0.5 | 工程/实践 1.2/1.5

排名：前50% | 文档类型：系统技术报告 | 主任务：#语音翻译 | 主方法：#模型融合

会议来源：[官方记录](https://aclanthology.org/2026.iwslt-1.23/) · [官方 PDF](https://aclanthology.org/2026.iwslt-1.23.pdf)

👥 **作者与机构**

- Lilit Grigoryan：机构信息未能从会议 PDF 纯文本可靠映射
- Vladimir Bataev：机构信息未能从会议 PDF 纯文本可靠映射
- Andrei Andrusenko：机构信息未能从会议 PDF 纯文本可靠映射
- Oleksii Hrinchuk：机构信息未能从会议 PDF 纯文本可靠映射
- Davit Karamyan：机构信息未能从会议 PDF 纯文本可靠映射
- Enas Albasiri：机构信息未能从会议 PDF 纯文本可靠映射
- Vitaly Lavrukhin：机构信息未能从会议 PDF 纯文本可靠映射
- Nikolay Karpov：机构信息未能从会议 PDF 纯文本可靠映射
- Boris Ginsburg：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

本文处理同时语音翻译，输入为连续到达的英语或捷克语音频流，输出为德语、意大利语、中文或英语目标文本，难点是在计算感知LongYAAL小于2秒的低延迟与小于4秒的高延迟约束下保持增量输出稳定可读。方法链由三步构成：统一自动语音识别转导器先将音频分块增量转写并以非语音帧计数检测语句结束，其输出的部分转写与已确认前缀进入多语言大语言模型做前缀约束翻译，最长公共前缀策略再截断跨步变化的尾部以保证一致性。相对直接流式化离线模型的缓冲重算方案，双模训练加一致性正则让流式假设更贴近离线质量，而基于全论文分块的图偏置词表则针对科学实体定制识别以降低误识传播。定制词表构建时解析全文并按约4000词分块抽取实体，经去重过滤后提升偏置权重以改善命名实体识别。在IWSLT 2026低延迟评测设置下，本系统英德方向的COMET为92\.74，高于官方基线的COMET 74\.80。该结论适用边界受限于IWSLT 2026定义的特定语料与延迟口径，对高重排序语言与开放噪声场景尚未验证。原文未披露训练、推理或部署成本。

🔗 **开源资源**

本次未形成可展示的已核验资源记录，开放状态尚未核实。
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 6. [零样本语音意图分类为何混合架构更稳：级联、端到端与混合的十三语言实证](/posts/conference-iwslt-2026-conference-paper-id-2026-iwslt-1-1-0ce5ab257e/)

> 英文题目：*[Towards Zero\-Shot SLU: An Empirical Study of Competing Architectural Paradigms](/posts/conference-iwslt-2026-conference-paper-id-2026-iwslt-1-1-0ce5ab257e/)*

标签：#评测协议 #模型比较 #多语言 #零样本 #口语意图与槽位识别

评分：**6.5/10** | 创新 1.0/2 | 技术严谨 1.2/1.5 | 实验充分 0.9/1.5 | 清晰度 0.7/1 | 影响力 0.8/1.5 | 开源 1.0/1.5 | 可复现 0.1/0.5 | 工程/实践 0.8/1.5

排名：前50% | 文档类型：应用研究 | 主任务：#口语意图与槽位识别 | 主方法：#评测协议

会议来源：[官方记录](https://aclanthology.org/2026.iwslt-1.1/) · [官方 PDF](https://aclanthology.org/2026.iwslt-1.1.pdf)

👥 **作者与机构**

- Beomseok Lee：机构信息未能从会议 PDF 纯文本可靠映射
- Marco Gaido：机构信息未能从会议 PDF 纯文本可靠映射
- Ioan Calapodescu：机构信息未能从会议 PDF 纯文本可靠映射
- Laurent Besacier：机构信息未能从会议 PDF 纯文本可靠映射
- Matteo Negri：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

口语理解需将原始语音映射为结构化意图，难点在于标注成本高昂且意图与槽位难以跨领域跨语言迁移，纯文本意图分类虽可作性能上限却无法消除语音模态误差。本文以Llama\-3\.1\-8B\-Instruct为默认大语言模型组织比较，首先由Whisper等语音基础模型负责转写或编码，将连续语音变为文本假设或特征序列。接着冻结语音编码器与大语言模型，仅用英语语音识别监督训练接口层将其映射至文本嵌入空间，再把映射后表征送入大语言模型理解。最后采用思维链提示先转写话语并阐释说话人意图，再在封闭候选集中选择单一意图，使转写错误与语义推理失败得以分离归因。与纯级联只依赖转写文本和纯端到端直连声学特征不同，混合架构同时输入显式转写与声学表征，以声学证据补偿转写错误传播并缓解模态对齐不足。在SLURP英语与Speech\-MASSIVE多语言共13种语言的零样本意图分类评测下，混合系统Desta2\.5\-Audio的准确率为50\.77%，高于Whisper级联系统的准确率50\.41%。该结论适用边界仅限封闭候选集意图分类且依赖思维链提示，槽位填充、开放意图及强噪声口音等外推尚未验证，原文未披露训练、推理或部署成本。

🔗 **开源资源**

- 模型相关资源：<https://huggingface.co/openai/whisper-large-v3> — 暂时无法访问
- 模型相关资源：<https://huggingface.co/facebook/seamless-m4t-v2-large> — 暂时无法访问
- 模型相关资源：<https://deepmind.google/models/gemini/flash-lite/> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 7. [长语音指令跟随：把短语料拼成长训练、再用重排补转写的得失](/posts/conference-iwslt-2026-conference-paper-id-2026-iwslt-1-16-eadb46c8e5/)

> 英文题目：*[Multilingual Long\-Form Speech Instruction Following: KIT’s Submission to IWSLT 2026](/posts/conference-iwslt-2026-conference-paper-id-2026-iwslt-1-16-eadb46c8e5/)*

标签：#指令微调 #长音频处理 #多语言 #音频问答

评分：**6.5/10** | 创新 1.2/2 | 技术严谨 1.0/1.5 | 实验充分 1.1/1.5 | 清晰度 0.7/1 | 影响力 1.0/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 1.2/1.5

排名：前50% | 文档类型：系统技术报告 | 主任务：#音频问答 | 主方法：#指令微调

会议来源：[官方记录](https://aclanthology.org/2026.iwslt-1.16/) · [官方 PDF](https://aclanthology.org/2026.iwslt-1.16.pdf)

👥 **作者与机构**

- Enes Yavuz Ugan：机构信息未能从会议 PDF 纯文本可靠映射
- Maike Züfle：机构信息未能从会议 PDF 纯文本可靠映射
- Yuka Ko：机构信息未能从会议 PDF 纯文本可靠映射
- Supriti Sinhamahapatra：机构信息未能从会议 PDF 纯文本可靠映射
- Fabian Retkowski：机构信息未能从会议 PDF 纯文本可靠映射
- Seymanur Akti：机构信息未能从会议 PDF 纯文本可靠映射
- Jan Niehues：机构信息未能从会议 PDF 纯文本可靠映射
- Alexander Waibel：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

该任务输入为最长15分钟英语演讲长音频加自然语言指令，输出需按指令完成转写、翻译、问答、摘要与章节划分等多类结果，难点是仅见短音频的模型向长音频泛化退化严重且推理时任务身份未知。先将短语料片段拼接成15分钟长音频并用大语言模型合成问答、摘要与章节标签，职责是补齐长音频覆盖，输出带标注长音频训练集并送入混合训练。再以温度平滑采样按平方根比例混合多任务数据来训练端到端与级联系统，职责是平衡多任务分布，输出的17个候选转写与答案直接进入重排序。最后对候选做无任务先验的似然加最小贝叶斯风险重排序，职责是以最小贝叶斯风险为正则抑制似然偏置，输出兼顾转写与语义的最终结果。与短音频指令跟随相比，关键差异是将长音频覆盖成本转嫁给数据拼接与合成标注，并以重排序作为统一多任务的正则器，其意义是在未知任务条件下同时保住转写精度与语义质量。在MCIF\-long固定指令评测下，重排序系统的WER为21\.39，低于贪婪基线系统的WER37\.65。该结论适用边界受限于学术演讲类英语长音频，德语与意大利语重排序无稳定增益，惊喜任务与真实噪声多说话人场景尚未验证，原文未披露训练、推理或部署成本。

🔗 **开源资源**

- 代码相关资源：<https://github.com/retkowski/chunkseg> — 暂时无法访问
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 8. [用黑盒发射策略把离线大模型压成同传：Parakeet 加 Qwen 的级联取舍](/posts/conference-iwslt-2026-conference-paper-id-2026-iwslt-1-24-5bcdf60eaa/)

> 英文题目：*[MLLP\-VRAIN UPV System for the IWSLT 2026 Simultaneous Speech Translation Task](/posts/conference-iwslt-2026-conference-paper-id-2026-iwslt-1-24-5bcdf60eaa/)*

标签：#检索增强 #大语言模型 #流式处理 #语音翻译

评分：**6.5/10** | 创新 1.2/2 | 技术严谨 1.0/1.5 | 实验充分 1.1/1.5 | 清晰度 0.7/1 | 影响力 1.0/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 1.2/1.5

排名：前50% | 文档类型：系统技术报告 | 主任务：#语音翻译 | 主方法：#检索增强

会议来源：[官方记录](https://aclanthology.org/2026.iwslt-1.24/) · [官方 PDF](https://aclanthology.org/2026.iwslt-1.24.pdf)

👥 **作者与机构**

- Jorge Iranzo\-Sánchez：机构信息未能从会议 PDF 纯文本可靠映射
- Gerard Mas\-Mollà：机构信息未能从会议 PDF 纯文本可靠映射
- Adrià Gimenez：机构信息未能从会议 PDF 纯文本可靠映射
- Jorge Civera Saiz：机构信息未能从会议 PDF 纯文本可靠映射
- Albert Sanchis：机构信息未能从会议 PDF 纯文本可靠映射
- Alfons Juan：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

本文处理长语音同步翻译任务，输入为连续讲座级长音频流，输出为英译德意中与捷译英多方向低延迟流式译文，实际难点在于流式重译振荡导致延迟尖峰、长文档历史无限增长与质量延迟权衡及延迟指标失真。方法第一步由Parakeet\-TDT\-0\.6B以固定块声学滑窗做增量转写，并经时间戳去重与稳定前缀筛选输出源端流。第二步将该稳定源前缀连同源历史与源活动缓冲送入量化Qwen 3\.5大语言模型做增量重译，以保持标点与强标点触发的句级历史裁剪维持上下文连贯。第三步在上下文赛道并行引入面向ASR的GPU短语偏置浅融合与面向MT的离线预翻译记忆词法检索增强，检索句作为提示上下文注入以稳定术语并减少重写。相对严格最长公共前缀与贪婪发射，柔性锚点传播与掩码投机发射允许更早推进并抑制过早停播与振荡幻觉，同时以外部强制对齐校准常用延迟指标的负延迟失真。在MCIF开发集评测条件下，文档级短语增强系统的WER为6\.4，从基线系统的WER7\.2降至6\.4。该结论适用边界受限于MCIF科学讲座域与上述语言方向，尚未验证端到端语音大模型与非讲座域迁移，且系统需满足实时因子小于1的延迟约束以维持真实流式推理。

🔗 **开源资源**

- 第三方资源：<https://github.com/jvamvas/fastChrF> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 9. [长语音同传评测为何卡在切句与时间戳：一条可复现的三段式流水线](/posts/conference-iwslt-2026-conference-paper-id-2026-iwslt-1-3-53c892bfd2/)

> 英文题目：*[A Practical Evaluation Method for Long\-Form Simultaneous Speech\-to\-Speech Translation](/posts/conference-iwslt-2026-conference-paper-id-2026-iwslt-1-3-53c892bfd2/)*

标签：#评测协议 #长音频处理 #流式处理 #语音翻译

评分：**6.5/10** | 创新 1.2/2 | 技术严谨 1.2/1.5 | 实验充分 0.8/1.5 | 清晰度 0.8/1 | 影响力 1.0/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 1.2/1.5

排名：前50% | 文档类型：方法研究 | 主任务：#语音翻译 | 主方法：#评测协议

会议来源：[官方记录](https://aclanthology.org/2026.iwslt-1.3/) · [官方 PDF](https://aclanthology.org/2026.iwslt-1.3.pdf)

👥 **作者与机构**

- Yulin Xue：机构信息未能从会议 PDF 纯文本可靠映射
- Siqi Ouyang：机构信息未能从会议 PDF 纯文本可靠映射
- Lei Li：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

长形式同时语音到语音翻译以连续数分钟源语音为输入并实时生成目标语音，预切分评测掩盖了长时累积延迟、过翻与漏翻等真实难点。方法链分三步：先用Qwen3\-ASR\-1\.7B对目标语音转写并用Qwen3\-ForcedAligner\-0\.6B恢复词级结束时间戳，分块时长为180秒；再用SEGALE结合句子边界检测与句子嵌入将目标句对齐到源语句与参考译文，前步的文本与时间戳直接作为对齐输入；最后在每个对齐组内按理想均匀时长计算延迟并用xCOMET等计算质量，再平均为系统级分数。与边界感知延迟的关键差异在于不对齐源端流式识别输出而对齐真值源句，且不依赖级联中间文本，因而可评端到端系统并降低源端识别误差敏感性。在ACL 60/60开发集评测下，Seed LiveInterpret 2\.0英语到德语方向的xCOMET\-XL为85\.39，高于SeamlessStreaming的xCOMET\-XL 67\.56，但前者延迟达7\.939秒亦更高。分析还发现英译日目标时长系统性偏长导致句尾偏移累积超200秒，而英译中偏短则偏移稳定。该结论适用边界限于有句子级源转写与参考译文的受控长语音评测，尚未验证无参考或高噪声直播场景。原文未披露训练、推理或部署成本。

🔗 **开源资源**

- 第三方资源：<https://spacy.io/> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 10. [不用转写也能打分：HydraQE 把语音和译文一起编码做质量估计](/posts/conference-iwslt-2026-conference-paper-id-2026-iwslt-1-37-c81b5156ed/)

> 英文题目：*[HydraQE: OSU’s Submission for the IWSLT 2026 Speech Translation Metrics Shared Task](/posts/conference-iwslt-2026-conference-paper-id-2026-iwslt-1-37-c81b5156ed/)*

标签：#课程学习 #多任务学习 #多语言 #语音 #语音翻译

评分：**6.5/10** | 创新 1.3/2 | 技术严谨 1.0/1.5 | 实验充分 1.1/1.5 | 清晰度 0.8/1 | 影响力 1.0/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 1.0/1.5

排名：前50% | 文档类型：系统技术报告 | 主任务：#语音翻译 | 主方法：#多任务学习

会议来源：[官方记录](https://aclanthology.org/2026.iwslt-1.37/) · [官方 PDF](https://aclanthology.org/2026.iwslt-1.37.pdf)

👥 **作者与机构**

- Kevin Krahn：机构信息未能从会议 PDF 纯文本可靠映射
- Eric Fosler\-Lussier：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

语音翻译质量估计需在无参考译文时仅以源语音和翻译假设预测人工直接评估分数，级联先做语音识别再做文本估计会累积识别误差并丢失韵律等语音线索。HydraQE以Qwen3\-ASR\-1\.7B为骨干将源音频与假设文本拼接为强制输入做联合编码，经低秩适配微调以保留多语种语音文本表征能力。全部层隐状态经可学习稀疏混合加权融合，再由轻量两层双向Transformer重编码实现跨模态交互，最后经注意力池化得到共享向量。该向量同时送入DA头、MetricX头和xCOMET头分别拟合人工标注与两个大文本指标伪标签，并以先合成与银标签后人工标注的课程采样缓解人工数据稀缺。在IWSLT2026测试集英译德与英译中任务下，HydraQE的Kendall\-Tau为29\.8，高于CometKiwi的Kendall\-Tau28\.5。相对依赖金标准转写的级联文本基线与先前语音基线，该端到端联合建模避免了识别误差传递并保留了语音信息，因而在段级别与系统级均更稳定。其结论适用边界受限于英语源、德语和中文目标及演讲类数据，向更多语种、噪声语音与低质量区间的外推尚未验证。原文未披露训练、推理或部署成本。

🔗 **开源资源**

本次未形成可展示的已核验资源记录，开放状态尚未核实。
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 11. [低资源下直接翻译为何胜过级联：QUESPA 以 SpeechT5 加增强与新语料推进克丘亚语语音翻译](/posts/conference-iwslt-2026-conference-paper-id-2026-iwslt-1-5-bd757f5843/)

> 英文题目：*[Team QUESPA System Submission for the IWSLT 2026 Dialectal and Low\-resource Speech Translation Task](/posts/conference-iwslt-2026-conference-paper-id-2026-iwslt-1-5-bd757f5843/)*

标签：#SFT #低资源 #语音 #语音翻译

评分：**6.4/10** | 创新 1.0/2 | 技术严谨 1.0/1.5 | 实验充分 0.8/1.5 | 清晰度 0.5/1 | 影响力 0.8/1.5 | 开源 1.0/1.5 | 可复现 0.3/0.5 | 工程/实践 1.0/1.5

排名：前50% | 文档类型：系统技术报告 | 主任务：#语音翻译 | 主方法：#SFT

会议来源：[官方记录](https://aclanthology.org/2026.iwslt-1.5/) · [官方 PDF](https://aclanthology.org/2026.iwslt-1.5.pdf)

👥 **作者与机构**

- John E\. Ortega：机构信息未能从会议 PDF 纯文本可靠映射
- Rodolfo Joel Zevallos：机构信息未能从会议 PDF 纯文本可靠映射
- Fabrício Carraro：机构信息未能从会议 PDF 纯文本可靠映射
- Stephanny Gabriela Sánchez Bautista：机构信息未能从会议 PDF 纯文本可靠映射
- Chad Howe：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

该任务输入为秘鲁安第斯广播域的克丘亚语语音，输出为西班牙语文本，实际难点在于配对语音翻译仅1小时40分钟而转写音频约48小时，且克丘亚语高度黏着并存在Chanka与Collao方言分化与录音条件异构。方法链先用SIDON对全部训练音频做降噪去混响与信道归一化以输出干净波形，再将干净音频送入语音编码识别器得到克丘亚语转写文本，最后将转写文本送入微调后的NLLB模型生成西班牙语译文。主系统采用ConMamba识别后级联NLLB翻译，对比一将识别器替换为Whisper Large V3后级联同一NLLB，对比二则采用SpeechT5直接语音到译文端到端微调并叠加新增Collao语料与数据增强。相对已有级联基线的关键差异在于用大规模预训练语音编解码与端到端建模替代分步转写以避免误差累积，并以信号级增强降低异构录音方差，具有减少级联脆弱性的实际意义。提示翻译多家商用大模型仅作为对照，其最佳结果仍明显落后于微调专用模型，说明零少样本提示难以处理方言混合与幻觉问题。在IWSLT 2026无约束评测任务下，Contrastive 2系统的BLEU为27\.2，高于Primary系统的BLEU 15\.0。该结论适用边界受限于南方克丘亚语双变体与小规模广播评测，跨方言跨噪声与长尾主题泛化尚未验证，原文未披露训练、推理或部署成本。

🔗 **开源资源**

- 代码相关资源：<https://github.com/xi-j/Mamba-ASR> — 链接可访问（HTTP 200）
- 代码相关资源：<https://github.com/speechbrain/speechbrain/> — 链接可访问（HTTP 200）
- 代码相关资源：<https://github.com/microsoft/SpeechT5> — 链接可访问（HTTP 200）
- 代码相关资源：<https://github.com/makcedward/nlpaug> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 12. [4 比特保翻译、3 比特现悬崖：Diet\-KIT 如何把 16 GB 语音大模型压进 4 GB](/posts/conference-iwslt-2026-conference-paper-id-2026-iwslt-1-21-fbe26efdc4/)

> 英文题目：*[Diet\-KIT: Post\-Training Quantization for Speech LLMs](/posts/conference-iwslt-2026-conference-paper-id-2026-iwslt-1-21-fbe26efdc4/)*

标签：#模型量化 #音频大模型 #后训练 #语音翻译

评分：**6.3/10** | 创新 1.1/2 | 技术严谨 1.0/1.5 | 实验充分 1.0/1.5 | 清晰度 0.8/1 | 影响力 0.9/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 1.2/1.5

排名：前50% | 文档类型：系统技术报告 | 主任务：#语音翻译 | 主方法：#模型量化

会议来源：[官方记录](https://aclanthology.org/2026.iwslt-1.21/) · [官方 PDF](https://aclanthology.org/2026.iwslt-1.21.pdf)

👥 **作者与机构**

- Danni Liu：机构信息未能从会议 PDF 纯文本可靠映射
- Sai Koneru：机构信息未能从会议 PDF 纯文本可靠映射
- Jan Niehues：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

英语语音到德语与中文文本的翻译需将16GB的Qwen2\-Audio\-7B压至4GB以下磁盘体积，而基座模型原始翻译能力不足使压缩退化与任务无能难以区分。流水线先以半二次量化建立4比特线性层基线并直接序列化打包权重以满足磁盘约束，其输出进入嵌入表2比特激进量化与分组粒度调优阶段以换取体积。灵敏度分析阶段逐层将多层感知机切至3比特并以教师强制交叉熵度量容忍度，仅将最不敏感的四层保留为3比特以跨过存储线，末端再以激活感知量化做数据相关的逐通道缩放修正。与统一整体降至3比特及首尾中间等位置启发式选层相比，该链条以实测灵敏度替代人工先验并保留高敏感输出头精度，因而在存储边界附近损失更小。在ACL 60/60金标准切分测试集下，灵敏度选中层方案的英德BLEU得分为24\.8，低于行8基线方案的BLEU 25\.3。结论的适用边界限于域内金标准切分与英德英中两个方向，盲测中域外噪声集与自动切分下增益不再稳定。原文未披露训练、推理或部署成本。

🔗 **开源资源**

- 第三方资源：<https://github.com/dropbox/hqq> — 暂时无法访问
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 13. [把离线 Canary 搬进同传：AlignAtt 截断如何换来口袋模型的低延迟](/posts/conference-iwslt-2026-conference-paper-id-2026-iwslt-1-22-fc60b1911e/)

> 英文题目：*[A Pocket Offline Model for Simultaneous Speech Translation as CUNI Submission to IWSLT 2026](/posts/conference-iwslt-2026-conference-paper-id-2026-iwslt-1-22-fc60b1911e/)*

标签：#注意力机制 #多语言 #流式处理 #语音翻译

评分：**6.3/10** | 创新 1.0/2 | 技术严谨 1.0/1.5 | 实验充分 1.0/1.5 | 清晰度 0.8/1 | 影响力 1.0/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 1.2/1.5

排名：前50% | 文档类型：系统技术报告 | 主任务：#语音翻译 | 主方法：#注意力机制

会议来源：[官方记录](https://aclanthology.org/2026.iwslt-1.22/) · [官方 PDF](https://aclanthology.org/2026.iwslt-1.22.pdf)

👥 **作者与机构**

- Aziz Sharipov Ortega：机构信息未能从会议 PDF 纯文本可靠映射
- Dominik Macháček：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

同时语音翻译需在语音流持续到达时增量生成目标文本，离线注意力编码解码器依赖完整上下文，在前缀输入下易幻觉且需反复重编码全量缓冲。作者以Canary\-1B\-v2离线直译模型为底座且不做再训练，先用Silero语音活动检测过滤非语音并切分长音频，其输出的语音段进入至多30秒原始音频缓冲，系统每步对缓冲重编码以获得完整声学表示。随后解码器以强制前缀方式自回归续写历史稳定文本，并用AlignAtt依据交叉注意力词级音频对齐位置截断不稳定后缀，仅提交稳定前缀用于显示。相对滑动窗口重翻译的最长公共子序列启发式，AlignAtt用显式对齐边界决定提交时机，在计算无感知仿真下兼顾翻译质量与延迟。在MCIF开发集评测下，Canary ours的BLEU为31\.73，高于组织方级联基线的BLEU 27\.66。该结论适用边界受限于三个欧洲语言对开发集与计算无感知LongYAAL仿真，低延迟与离线模式仍出现落后，且尚未验证计算感知实时推理开销与口袋设备部署延迟。

🔗 **开源资源**

本次未形成可展示的已核验资源记录，开放状态尚未核实。
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 14. [离线大模型不重训怎么做同传：停顿切分加等待策略的测试时适配](/posts/conference-iwslt-2026-conference-paper-id-2026-iwslt-1-27-da942a5caf/)

> 英文题目：*[Test\-Time Adaptation of an Offline Multimodal Foundation Model for Simultaneous Speech Translation](/posts/conference-iwslt-2026-conference-paper-id-2026-iwslt-1-27-da942a5caf/)*

标签：#测试时自适应 #多模态模型 #流式处理 #语音翻译

评分：**6.3/10** | 创新 1.2/2 | 技术严谨 1.0/1.5 | 实验充分 1.0/1.5 | 清晰度 0.8/1 | 影响力 1.0/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 1.0/1.5

排名：前50% | 文档类型：系统技术报告 | 主任务：#语音翻译 | 主方法：#测试时自适应

会议来源：[官方记录](https://aclanthology.org/2026.iwslt-1.27/) · [官方 PDF](https://aclanthology.org/2026.iwslt-1.27.pdf)

👥 **作者与机构**

- Yi Xing：机构信息未能从会议 PDF 纯文本可靠映射
- Manli Yu：机构信息未能从会议 PDF 纯文本可靠映射
- Pengfei Liu：机构信息未能从会议 PDF 纯文本可靠映射
- Helen Meng：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

同时语音翻译需将源语言无限语音流实时转为目标语言文本，难点在于质量延迟权衡与缺乏任务专用训练且需维持长流一致性。该系统先用混合语音活动检测按暂停与最小最大时长将音频流切为变长块并对齐自然停顿，输出块依次送入翻译模块。翻译模块以多轮对话形式调用离线多模态模型Qwen3\-Omni\-30B\-A3B\-Instruct逐块增量翻译，通过wait\-\(k,s,n\)读写策略、响应预填与键值缓存复用维持跨轮连贯并实现零微调测试时适配。其内建词元惩罚与字面加模糊重复回退截断生成以防落后与幻觉，与级联基线及自适应训练架构的关键差异在于无需专用训练而靠指令约束与缓存复用兼顾效率。在MCIF发育集英译德低延迟场景验证集下，本系统的COMET得分为0\.8884，高于级联基线的COMET得分0\.7656。但英译中高延迟质量低于基线且多轮格式易误差累积、单轮拒遵指令会连带后续轮次，构成明确失败条件。该结论适用边界受限于仅两个小规模单领域发育集的五折交叉验证，尚未验证测试集泛化与计算感知延迟，大模型长流推理开销与缓存管理成本仍使延迟维持在约两秒量级。

🔗 **开源资源**

本次未形成可展示的已核验资源记录，开放状态尚未核实。
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 15. [转录质量决定翻译上限：WhiNN\-ST 用级联与路由选择做低资源语音翻译](/posts/conference-iwslt-2026-conference-paper-id-2026-iwslt-1-6-db7e878593/)

> 英文题目：*[ADAPT–MTU HAI at IWSLT2026: Robust Cascaded Speech Translation for Bhojpuri–Hindi and Irish–English](/posts/conference-iwslt-2026-conference-paper-id-2026-iwslt-1-6-db7e878593/)*

标签：#模型融合 #低资源 #多语言 #语音翻译

评分：**6.3/10** | 创新 1.0/2 | 技术严谨 1.2/1.5 | 实验充分 1.0/1.5 | 清晰度 0.8/1 | 影响力 0.8/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 1.2/1.5

排名：前50% | 文档类型：系统技术报告 | 主任务：#语音翻译 | 主方法：#模型融合

会议来源：[官方记录](https://aclanthology.org/2026.iwslt-1.6/) · [官方 PDF](https://aclanthology.org/2026.iwslt-1.6.pdf)

👥 **作者与机构**

- Pournima Sonawane：机构信息未能从会议 PDF 纯文本可靠映射
- Haithem Afli：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

低资源语音翻译需将博杰普尔语或爱尔兰语语音转写并译为印地语或英语文本，难点在于标注稀缺、方言发音变异大且级联误差易累积。本文提出的WhiNN\-ST采用级联架构，先以音频预处理将语音重采样为16kHz单声道并规范清单，再由Whisper\-large\-v3负责语音到源语言文本的转写。转写文本随后进入NLLB\-200多语言翻译，系统支持直接翻译与经英语或印地语中转的枢轴翻译两条路由，并辅以文字规范化后输出目标语。与端到端直接映射不同，该方案将ASR与MT解耦优化，允许独立更换ASR前端并依据转写质量在直接与枢轴路由间切换，使枢轴仅作为直接路径不可靠时的补偿策略。在包含1056段的博杰普尔语到印地语开发集评测设置下，直接NLLB路线的BLEU为25\.59，高于经英语中转枢轴路线的BLEU 21\.62。爱尔兰语到英语因缺乏公开带参考译文的开发集而只能用覆盖率与重复率等代理诊断评估，Wav2Vec2爱尔兰模型以全覆盖被选为主提交，结论受限于参考缺失的评估条件。该结论适用边界限于本次IWSLT2026两个语言对与给定数据领域，尚未验证向其他语言、领域和噪声条件的泛化，实验硬件为T4 GPU且爱尔兰测试集推理开销约为转写47分钟、翻译12分钟。

🔗 **开源资源**

- 第三方资源：<https://iwslt.org/2026/low-resource> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 16. [把等待学进模型里：用原生音频大模型做无切分同声传译](/posts/conference-iwslt-2026-conference-paper-id-2026-iwslt-1-13-734ac6637a/)

> 英文题目：*[CUHKSZ Simultaneous Speech Translation System for IWSLT 2026](/posts/conference-iwslt-2026-conference-paper-id-2026-iwslt-1-13-734ac6637a/)*

标签：#LoRA #高效推理 #多语言 #流式处理 #语音翻译

评分：**6.2/10** | 创新 1.3/2 | 技术严谨 1.1/1.5 | 实验充分 0.7/1.5 | 清晰度 0.7/1 | 影响力 0.9/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 1.2/1.5

排名：前50% | 文档类型：系统技术报告 | 主任务：#语音翻译 | 主方法：#LoRA

会议来源：[官方记录](https://aclanthology.org/2026.iwslt-1.13/) · [官方 PDF](https://aclanthology.org/2026.iwslt-1.13.pdf)

👥 **作者与机构**

- Zeyu Yang：机构信息未能从会议 PDF 纯文本可靠映射
- Satoshi Nakamura：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

同时语音翻译（Simultaneous Speech Translation，SimulST）要求在无切分长音频流式到达时增量输出目标语言文本，难点在于无先验句子边界下的读写时机与计算感知延迟约束。作者以原生对齐音文大模型Qwen3\-Omni\-30B\-A3B为单骨干，先用文本指令模型Qwen3\-32B合成伪平行译文并切分为句法感知块，再以低秩适配（Low\-Rank Adaptation，LoRA）只微调语言侧思考器（Thinker）使其在声学前缀不完整时自主输出等待符 \`\`\<wait\>\`\`。推理时轻量流式智能体以固定音频窗多轮对话驱动经vLLM服务的模型，并用最小提交长度、尾部截断、空格归一化等护栏控制提交。该路线与级联编码器\-投影\-解码器方案的机制差异在于取消显式投影与外部启发式策略，将对齐与时机内化为模型生成行为。在官方MCIF开发集919个无切分样本上，低延迟英译中达到40\.46 BLEU、73\.54 XCOMET\-XL且计算感知延迟为1954 ms，高延迟英译德达到30\.54 BLEU、86\.56 XCOMET\-XL且延迟为2288 ms。该结论仅在该开发集与单卡A800贪婪解码设置下验证，未报告盲测集成绩与统计显著性。原文未披露训练时长、推理成本与失败案例。

🔗 **开源资源**

本次未形成可展示的已核验资源记录，开放状态尚未核实。
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 17. [不用人工标注的语音翻译数据从哪里来：伪标签真实语音与合成语音的对照](/posts/conference-iwslt-2026-conference-paper-id-2026-iwslt-1-15-d0297da7d7/)

> 英文题目：*[LIUM Submission for IWSLT 2026 Low\-resource Speech Translation Track](/posts/conference-iwslt-2026-conference-paper-id-2026-iwslt-1-15-d0297da7d7/)*

标签：#数据增强 #低资源 #语音 #语音翻译

评分：**6.2/10** | 创新 1.2/2 | 技术严谨 1.0/1.5 | 实验充分 1.0/1.5 | 清晰度 0.7/1 | 影响力 0.8/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 1.2/1.5

排名：前50% | 文档类型：系统技术报告 | 主任务：#语音翻译 | 主方法：#数据增强

会议来源：[官方记录](https://aclanthology.org/2026.iwslt-1.15/) · [官方 PDF](https://aclanthology.org/2026.iwslt-1.15.pdf)

👥 **作者与机构**

- Mohammad Mohammadamini：机构信息未能从会议 PDF 纯文本可靠映射
- Marie Tahon：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

中库尔德语到英语端到端语音到文本翻译输入为自发库尔德语语音，输出为英语文本，难点在于人工平行语音稀缺且自发语音存在口误韵律变体与方言码切换。该工作先走伪标注链，能量语音活动检测切分4300小时有声书得到语音段，再用177小时人工数据微调的Seamless Large V2生成源语言伪转写，最后用222k句对微调的NLLB 1\.3B生成英语伪译文并经时长置信度与长度比过滤后训练Fairseq\-S2T。另一条合成链先在约13小时单说话人录音室数据与多说话人有声书上微调3个F5\-TTS模型，再分别由已有平行文本与新闻单语文本加机器翻译生成源侧合成语音以训练Whisper\-L\-V3。与朗读受控场景下合成数据有效的既有结论不同，本文强调在自发媒体域真实声学覆盖决定成败而非单纯文本域适配。在COMMUTE\-Kurdish测试集下，伪标注Fairseq\-S2T分支的BLEU为21\.09，高于合成平行扩展Whisper\-L\-V3分支的BLEU 10\.36。该结论适用边界受限于库尔德语自发媒体域与所用过滤阈值，尚未验证跨语言与跨自发风格的外推，合成与伪标注简单混合反而下降至16\.24 BLEU构成失败条件。合成模型各在1张48GB显存RTX8000硬件上微调约2天构成训练成本，端到端大模型总计算量与推理开销延迟未完全披露。

🔗 **开源资源**

- 第三方资源：<https://github.com/AsoSoft/AsoSoft-Library> — 暂时无法访问
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 18. [长音频不等说完再译：Pinch\-AST 用级联重翻译与噪声前缀训练换单卡实时](/posts/conference-iwslt-2026-conference-paper-id-2026-iwslt-1-30-ce5affc341/)

> 英文题目：*[Pinch\-AST: Robust Cascaded Speech Translation System for the IWSLT 2026 Simultaneous Speech Translation Task](/posts/conference-iwslt-2026-conference-paper-id-2026-iwslt-1-30-ce5affc341/)*

标签：#数据增强 #LoRA #多语言 #流式处理 #语音翻译

评分：**6.2/10** | 创新 1.2/2 | 技术严谨 1.0/1.5 | 实验充分 0.8/1.5 | 清晰度 0.8/1 | 影响力 0.9/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 1.2/1.5

排名：前50% | 文档类型：系统技术报告 | 主任务：#语音翻译 | 主方法：#LoRA

会议来源：[官方记录](https://aclanthology.org/2026.iwslt-1.30/) · [官方 PDF](https://aclanthology.org/2026.iwslt-1.30.pdf)

👥 **作者与机构**

- Carlos Bentes：机构信息未能从会议 PDF 纯文本可靠映射
- Christian Safka：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

输入为最长约2\.5小时的无分割长语音连续流，英语源为ACL科学演讲而捷克语源为政治会议演讲，输出为增量追加的目标语言文本，需在低延迟0到2秒和高延迟2到4秒双区间下以非计算感知的LongYAAL排序并在单卡上实时运行，难点在于无边界累积音频易发散且重翻译易回撤。先由语音识别负责稳定转写，其输入为上个语句边界以来的累积音频，职责是对每片640毫秒或2500毫秒触发的音频反复重解码并取连续假设的字符级最长公共前缀，其输出的稳定转写前缀进入边界检测。再由边界检测负责冻结语句，其输入为含句末标点的稳定文本，职责是对英语调用强制对齐截断音频缓冲而对捷克语用流式时间戳加停顿启发，其输出的冻结语句进入机器翻译。最后由机器翻译负责追加输出，其输入为冻结后的稳定源文本，职责是从头重翻译全序列并仅释放超出已发送前缀的公共前缀字符，其输出的追加字符直接发往客户端且保证零规范化删除。相对已有级联的关键差异在于用基于实测混淆矩阵的词汇噪声混合微调与词对齐单调包络截断的部分到部分样本训练，使模型见过真实识别错误并学会不对不完整输入超前猜测。在MCIF长语音开发集评测设置下，高延迟配置的OE\-COMET为0\.717–0\.815，高于低延迟配置的OE\-COMET 0\.652–0\.812。结论适用边界受限于MCIF长语音21场演讲与捷克语开发集43个录音尚未验证测试集与上下文子赛道，且流水线为满足延迟与硬件约束而依赖单张H100上常驻识别与翻译模型的推理开销控制。

🔗 **开源资源**

- 第三方资源：<https://qwen.ai/blog?id=qwen3> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 19. [小语言模型下保住多任务语音跟随：换大容量投影器并补科学演讲合成数据](/posts/conference-iwslt-2026-conference-paper-id-2026-iwslt-1-17-e536bc964f/)

> 英文题目：*[NAVER LABS Europe Submission to the Instruction\-following 2026 Short Track](/posts/conference-iwslt-2026-conference-paper-id-2026-iwslt-1-17-e536bc964f/)*

标签：#多模态学习 #多语言 #语音识别 #音频问答 #语音翻译

评分：**6.1/10** | 创新 1.2/2 | 技术严谨 1.0/1.5 | 实验充分 1.0/1.5 | 清晰度 0.7/1 | 影响力 0.9/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 1.0/1.5

排名：前50% | 文档类型：系统技术报告 | 主任务：#音频问答 | 主方法：#多模态学习

会议来源：[官方记录](https://aclanthology.org/2026.iwslt-1.17/) · [官方 PDF](https://aclanthology.org/2026.iwslt-1.17.pdf)

👥 **作者与机构**

- Marcely Zanon Boito：机构信息未能从会议 PDF 纯文本可靠映射
- Hemant Yadav：机构信息未能从会议 PDF 纯文本可靠映射
- Jean\-Luc Meunier：机构信息未能从会议 PDF 纯文本可靠映射
- Ioan Calapodescu：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

该工作处理英语语音输入下的多语言指令跟随，输出涵盖英语转写、德语与意大利语及中文语音翻译和多语言语音问答，难点在于受限数据下同时保持转写精度、翻译质量和问答泛化并应对科学演讲领域偏移与突发指令。方法链分为三段：先用纯自动语音识别数据训练语音映射器 SpeechMapper，将 SeamlessM4T\-v2\-large 编码器特征映射到冻结大语言模型嵌入空间；再并行用机器翻译与问答文本训练低秩适配器 LoRA，以注入多语言生成能力；最后将两者装配并在语音加文本混合数据上做短程监督微调以对齐模态与指令格式。与上届直接前向投影器相比，新目标只用分词器与嵌入层即可训练，省去大语言模型前向并加入对比与连接时序分类约束以强化词级可分性。在 MCIF 评测中主提交语音翻译平均 COMET 达到 0\.772，自动语音识别词错率为 12\.0%，整体超过上届最优短赛道系统。该结论限于 IWSLT 2026 短赛道受限语料与科学演讲评测分布，对自发对话、噪声环境及未见语种的外推尚未验证。原文未披露训练、推理或部署成本。

🔗 **开源资源**

- 第三方资源：<https://github.com/naver/bergen> — 暂时无法访问
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 20. [先转写再执行：用翻译大模型统一语音识别、翻译与问答的指令跟随系统](/posts/conference-iwslt-2026-conference-paper-id-2026-iwslt-1-19-cafa7769ee/)

> 英文题目：*[BSC’s Submission to the Instruction Following Track of IWSLT 2026](/posts/conference-iwslt-2026-conference-paper-id-2026-iwslt-1-19-cafa7769ee/)*

标签：#指令微调 #多语言 #语音识别 #音频问答 #语音翻译

评分：**6.1/10** | 创新 1.2/2 | 技术严谨 1.0/1.5 | 实验充分 0.9/1.5 | 清晰度 0.7/1 | 影响力 1.0/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 1.0/1.5

排名：前50% | 文档类型：系统技术报告 | 主任务：#语音翻译 | 主方法：#指令微调

会议来源：[官方记录](https://aclanthology.org/2026.iwslt-1.19/) · [官方 PDF](https://aclanthology.org/2026.iwslt-1.19.pdf)

👥 **作者与机构**

- Oriol Pareras：机构信息未能从会议 PDF 纯文本可靠映射
- Joan Llado：机构信息未能从会议 PDF 纯文本可靠映射
- Pol Buitrago：机构信息未能从会议 PDF 纯文本可靠映射
- Marc Casals\-Salvador：机构信息未能从会议 PDF 纯文本可靠映射
- Federico Costa：机构信息未能从会议 PDF 纯文本可靠映射
- Cristina Espana\-Bonet：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

该工作面向英语语音输入与英中意德指令下的统一口语理解，需同时完成自动语音识别、语音翻译、语音问答与未知惊喜任务并严格遵从输出格式。系统先以语音编码器加线性映射将音频嵌入翻译专用大语言模型，再强制模型先输出转写思考块后生成答案，使语音与纯文本共享同一推理路径。纯文本问答与翻译数据以伪转写形式混入训练，配合多语言多样化提示模板实现跨模态能力迁移。推理时先用五束搜索解码并剥离思考块，再以大模型后编辑校正格式不一致。相比直接端到端映射，显式转写分解降低了声学到语义的跨度并复用了文本监督，因而在翻译与问答上更稳健。在IWSLT 2025测试集下，SEAMLESS模型加后编辑的COMET为0\.78，高于Phi4\-Multimodal的COMET 0\.77。该结论适用边界受限于科学演讲域与四个目标语言，且主力模型仅完成约0\.8轮训练，惊喜任务泛化尚未验证并依赖后编辑校正。训练成本涉及在32卡定制H100硬件上以全局批量256进行最长2048序列的混合精度训练，推理开销包含五束搜索与后编辑带来的额外延迟。

🔗 **开源资源**

- 模型相关资源：<https://huggingface.co/Unbabel/Tower-Plus-9B> — 暂时无法访问
- 模型相关资源：<https://huggingface.co/google/gemma-4-31B> — 暂时无法访问
- 模型相关资源：<https://huggingface.co/kyutai/tts-1.6b-en_fr> — 暂时无法访问
- 第三方资源：<https://github.com/hlt-mt/mcif> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 21. [从等词输出到译员式取舍：用四种显式动作重做同声传译](/posts/conference-iwslt-2026-conference-paper-id-2026-iwslt-1-2-2e9a73dea7/)

> 英文题目：*[Redefining Machine Simultaneous Interpretation: From Incremental Translation to Human\-Like Strategies](/posts/conference-iwslt-2026-conference-paper-id-2026-iwslt-1-2-2e9a73dea7/)*

标签：#SFT #大语言模型 #多语言 #流式处理 #语音翻译

评分：**6.1/10** | 创新 1.4/2 | 技术严谨 1.0/1.5 | 实验充分 1.0/1.5 | 清晰度 0.7/1 | 影响力 0.9/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 0.8/1.5

排名：前50% | 文档类型：方法研究 | 主任务：#语音翻译 | 主方法：#SFT

会议来源：[官方记录](https://aclanthology.org/2026.iwslt-1.2/) · [官方 PDF](https://aclanthology.org/2026.iwslt-1.2.pdf)

👥 **作者与机构**

- Qianen Zhang：机构信息未能从会议 PDF 纯文本可靠映射
- Zeyu Yang：机构信息未能从会议 PDF 纯文本可靠映射
- Satoshi Nakamura：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

同时语音翻译需在源语不完整时增量输出译文，难点在于长距离语序差异与等待完整输入带来的延迟。作者将传统读与写（READ/WRITE）扩展为句子切分（Sentence\_Cut）、删除（Drop）、部分概括（Partial\_Summarization）与代词化（Pronominalization）四类译员动作，先用GPT\-4o按动作组合改写离线参考为同传风格参考，再在ACL60/60开发集上统计各动作的BLEU与延迟并写入提示，最后由Qwen3\-8B按统计量逐步选择动作并追加译文，另用Whisper取源词时间戳加SimAlign求词对齐加语音合成搭建延迟感知流水线以获得秒级长度自适应平均滞后（Length\-Adaptive Average Lagging，LAAL）。该机制区别于传统策略之处在于允许主动重构、删除填充与压缩冗余，而非仅决定何时等待或输出。在ACL60/60英汉测试中删除加切分组合取得BLEU 62\.84与LAAL 2\.118秒，优于萨拉米（salami）切分与TransLLaMA微调基线并在COMET\-KIWI上接近参考译文。结论仅适用于文本模拟的英中、英德、英日同传解码器环节，未验证真实语音输入、噪声与长尾语义丢失下的外推能力。原文未披露训练、推理或部署成本。

🔗 **开源资源**

本次未形成可展示的已核验资源记录，开放状态尚未核实。
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 22. [多语言一起训反而互相拖累：用梯度冲突定位瓶颈再做局部专化](/posts/conference-iwslt-2026-conference-paper-id-2026-iwslt-1-33-ce496423ec/)

> 英文题目：*[The CUHKSZ System for the IWSLT 2026 Low\-Resource Speech\-to\-Text Task](/posts/conference-iwslt-2026-conference-paper-id-2026-iwslt-1-33-ce496423ec/)*

标签：#知识蒸馏 #多任务学习 #低资源 #多语言 #语音翻译

评分：**6.0/10** | 创新 1.2/2 | 技术严谨 1.0/1.5 | 实验充分 1.0/1.5 | 清晰度 0.7/1 | 影响力 0.8/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 1.0/1.5

排名：前50% | 文档类型：系统技术报告 | 主任务：#语音翻译 | 主方法：#多任务学习

会议来源：[官方记录](https://aclanthology.org/2026.iwslt-1.33/) · [官方 PDF](https://aclanthology.org/2026.iwslt-1.33.pdf)

👥 **作者与机构**

- ruiyan SUN：机构信息未能从会议 PDF 纯文本可靠映射
- Qingming Li：机构信息未能从会议 PDF 纯文本可靠映射
- Satoshi Nakamura：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

该任务输入为8种低资源语言语音，输出为英语文本翻译，难点在于平行语料稀缺且多语言联合微调时梯度方向冲突导致弱势语言出现负迁移。系统先对统一微调的SeamlessM4T\-Medium做三路梯度诊断，以跨语言子空间分歧定位第11层前馈第二子层为冲突瓶颈，并用相似度层次聚类划分出高冲突离群与低冲突簇。诊断输出的分组与冲突分数直接决定共享比例，接着仅在该冲突层做共享\-私有分解，经奇异值分解保留一半共享容量并按能量分配私有容量后分组微调，其余编码器表示仍保持共享。随后以SeamlessM4T\-v2\-Large为教师做渐进混入真实数据的课程蒸馏以稳定训练，其产生的异构检查点再进入基于先验BLEU加权与自一致性打分的测试期重排序来选择最优译文。与仅投影校正梯度但维持单一共享参数集的已有方法相比，该流程把梯度统计转化为分组结构与容量配比，从架构上隔离离群语言的干扰并保留兼容组内的正向迁移。在8语言验证集下，GDPS\-Med在Bemba上的BLEU为20\.56，高于UFT\-Med的BLEU 18\.49。其适用边界在于分组能定位强离群却难以解释同簇内部分语言退化，且爱尔兰语接近零分与中央库尔德语依赖重排序挽回表明外推受限，原文未披露训练、推理或部署成本。

🔗 **开源资源**

本次未形成可展示的已核验资源记录，开放状态尚未核实。
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 23. [长音频无切分条件下用两遍转写与语义合并压住幻觉的级联语音翻译](/posts/conference-iwslt-2026-conference-paper-id-2026-iwslt-1-9-dfc1d021a1/)

> 英文题目：*[HW\-TSC’s Submissions to the IWSLT 2026 Offline Speech Translation Task](/posts/conference-iwslt-2026-conference-paper-id-2026-iwslt-1-9-dfc1d021a1/)*

标签：#SFT #大语言模型 #长音频处理 #语音 #语音翻译

评分：**6.0/10** | 创新 1.0/2 | 技术严谨 1.0/1.5 | 实验充分 0.8/1.5 | 清晰度 0.8/1 | 影响力 0.9/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 1.2/1.5

排名：前50% | 文档类型：系统技术报告 | 主任务：#语音翻译 | 主方法：#SFT

会议来源：[官方记录](https://aclanthology.org/2026.iwslt-1.9/) · [官方 PDF](https://aclanthology.org/2026.iwslt-1.9.pdf)

👥 **作者与机构**

- Boqi Huang：机构信息未能从会议 PDF 纯文本可靠映射
- Daimeng Wei：机构信息未能从会议 PDF 纯文本可靠映射
- Jiaxin GUO：机构信息未能从会议 PDF 纯文本可靠映射
- Yuanchang Luo：机构信息未能从会议 PDF 纯文本可靠映射
- Hengchao Shang：机构信息未能从会议 PDF 纯文本可靠映射
- Zongyao Li：机构信息未能从会议 PDF 纯文本可靠映射
- Zhiqiang Rao：机构信息未能从会议 PDF 纯文本可靠映射
- Jinlong Yang：机构信息未能从会议 PDF 纯文本可靠映射
- Zhanglin Wu：机构信息未能从会议 PDF 纯文本可靠映射
- Yu He：机构信息未能从会议 PDF 纯文本可靠映射
- Xiaoqing Lan：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

本文处理无预切分的长时英语语音到中文与德语文本的离线语音翻译（Offline Speech Translation），难点在于无语音活动检测（Voice Activity Detection，VAD）边界时长序列易幻觉，且句子截断误差会传导至翻译。该系统先以 Silero VAD 滤除非语音，再以流式自动语音识别（Automatic Speech Recognition，ASR）加约 12 秒上下文缓存产生带换行符的初排句子，接着以 Qwen3\-ForcedAligner\-0\.6B 生成句子级时间戳。基于时间戳重切分为不超过 30 秒的片段后调用 Qwen3\-Omni 做第二遍精转写，最后将文本合并为不超过 150 词元的语义块送入 Qwen3\-8B 翻译。与单遍流式加标准机器翻译（Machine Translation，MT）的常规级联相比，关键差异在于用模型学到的语义边界替代人工切分并以长上下文同时约束识别与翻译。在 tst\-2022 上完整流水线相对单遍基线英语到中文词错率（Word Error Rate，WER，越低越好）从 6\.31% 降至 3\.01%，翻译质量 COMET（越高越好）从 0\.7924 提升至 0\.8462；英语到德语 WER 从 6\.54% 降至 3\.25%，COMET 从 0\.7409 提升至 0\.7854。结论仅在 TED 类朗读演讲域与离线非实时条件下验证，重口音强噪声与多说话人重叠场景尚未验证。原文未披露训练、推理或部署成本。

🔗 **开源资源**

- 第三方资源：<https://github.com/> — 暂时无法访问
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 24. [短模型拉长用：固定切分为何在长语音指令跟随中最稳](/posts/conference-iwslt-2026-conference-paper-id-2026-iwslt-1-29-bb3a100f1e/)

> 英文题目：*[FBK’s Long\-form SpeechLLMs for IWSLT 2026 Instruction Following](/posts/conference-iwslt-2026-conference-paper-id-2026-iwslt-1-29-bb3a100f1e/)*

标签：#指令微调 #长音频处理 #语音识别 #音频问答 #语音翻译

评分：**5.9/10** | 创新 1.2/2 | 技术严谨 1.0/1.5 | 实验充分 0.8/1.5 | 清晰度 0.7/1 | 影响力 0.9/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 1.0/1.5

排名：前50% | 文档类型：系统技术报告 | 主任务：#语音翻译 | 主方法：#指令微调

会议来源：[官方记录](https://aclanthology.org/2026.iwslt-1.29/) · [官方 PDF](https://aclanthology.org/2026.iwslt-1.29.pdf)

👥 **作者与机构**

- Zhihang Xie：机构信息未能从会议 PDF 纯文本可靠映射
- Marco Gaido：机构信息未能从会议 PDF 纯文本可靠映射
- Sara Papi：机构信息未能从会议 PDF 纯文本可靠映射
- Matteo Negri：机构信息未能从会议 PDF 纯文本可靠映射
- Luisa Bentivogli：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

该任务输入为6秒至10分钟多语言语音加自然语言指令，输出需完成识别翻译问答摘要与章节切分，实际难点是长音频声学token过长、跨章上下文建模与重复幻觉扭曲评测。编码器先用SEAMLESSM4T\-V2\-LARGE将语音转为50Hz表征，适配器再以步长8卷积压缩至约6\.25Hz并映射到2560维后前置拼接到指令模型输入。解码器由QWEN3\-4B\-INSTRUCT统一自回归生成多任务答案，长音频则先经固定窗或语音活动检测或混合分治分段再逐段推理并做正则去重后评价。与已有SpeechLLM的差异在于同一模型下受控比较三种分段策略，并引入幻觉惩罚分数HIFS对任务分加权求和以抑制插入型幻觉带来的虚高。在MCIF长轨评测下，含幻觉输出的CRDNN分段的WER为1\.0161，高于去除幻觉输出的WER 0\.1580。该结论适用边界受限于10分钟内演讲类语音与受限数据训练，长摘要与章节切分仍低分且噪声音乐等场景尚未验证。原文未披露训练、推理或部署成本。

🔗 **开源资源**

本次未形成可展示的已核验资源记录，开放状态尚未核实。
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 25. [科学口音难克隆：用三教师蒸馏加单语 LoRA 补学术域数据](/posts/conference-iwslt-2026-conference-paper-id-2026-iwslt-1-25-122fffe4fd/)

> 英文题目：*[One Voice, Many Tongues: Cross\-Lingual Voice Cloning for Scientific Speech](/posts/conference-iwslt-2026-conference-paper-id-2026-iwslt-1-25-122fffe4fd/)*

标签：#知识蒸馏 #LoRA #跨语言 #语音克隆

评分：**5.8/10** | 创新 1.0/2 | 技术严谨 1.0/1.5 | 实验充分 1.0/1.5 | 清晰度 0.7/1 | 影响力 0.8/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 1.0/1.5

排名：前50% | 文档类型：系统技术报告 | 主任务：#语音克隆 | 主方法：#LoRA

会议来源：[官方记录](https://aclanthology.org/2026.iwslt-1.25/) · [官方 PDF](https://aclanthology.org/2026.iwslt-1.25.pdf)

👥 **作者与机构**

- Amanuel Gizachew Abebe：机构信息未能从会议 PDF 纯文本可靠映射
- Yasmin Moslem：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

跨语言语音克隆以英文参考音频为音色条件，将阿拉伯语、法语与中文科学文本合成为保留原说话人音色的语音，难点在于学术术语密集、代码混排与跨语言韵律迁移易同时损伤可懂度与相似度。该系统先用OmniVoice2、VoxCPM与Chatterbox三个零样本教师模型对ACL 60/60开发集每条样本各生成一个候选，再以Whisper large\-v3转写的字符错误率与ECAPA\-TDNN余弦相似度等权融合的组合分数优选最佳候选构成合成微调集。随后将优选音频经HIGGS分词器离散化并划分为训练与开发划分，输入以Qwen3\-0\.6B为底座的OmniVoice模型进行建模。接着为阿拉伯语、法语与中文分别独立训练秩稳定低秩适配器，仅更新自注意力、前馈与音频投影层以捕捉分语言声学分布并避免灾难性遗忘。与零样本基线相比，关键差异在于把多模型集成蒸馏当作领域数据引擎而非直接依赖稀缺平行语料，并用分语言低秩自适应代替统一多语言适配器以保留音系细节。在blindset\-full完整测试集下，阿拉伯语微调OmniVoice模型的WER为0\.228，低于基线OmniVoice的WER 0\.244。该结论适用边界限于短科学演讲片段与Whisper加ECAPA\-TDNN自动指标下的优选结果，尚未验证人类主观听感外推，训练在每种语言独立占用一块NVIDIA A40硬件上以混合精度完成400步微调。

🔗 **开源资源**

- 第三方资源：<https://huggingface.co/k2-fsa/OmniVoice> — 暂时无法访问
- 第三方资源：<https://huggingface.co/openbmb/VoxCPM> — 暂时无法访问
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 26. [为 Badini 补上语音基准：5224 条平行语音文本如何翻译、录制与验证](/posts/conference-iwslt-2026-conference-paper-id-2026-iwslt-1-14-a4c037b1aa/)

> 英文题目：*[Fleurs\-Badini: Translation and Recording Fleurs Dataset for Badini Variant of Northern Kurdish](/posts/conference-iwslt-2026-conference-paper-id-2026-iwslt-1-14-a4c037b1aa/)*

标签：#数据集 #数据集构建 #低资源 #语音识别 #语音翻译

评分：**5.7/10** | 创新 1.2/2 | 技术严谨 1.0/1.5 | 实验充分 0.9/1.5 | 清晰度 0.7/1 | 影响力 0.8/1.5 | 开源 0.0/1.5 | 可复现 0.1/0.5 | 工程/实践 1.0/1.5

排名：前50% | 文档类型：数据集与基准 | 主任务：#语音翻译 | 主方法：#数据集构建

会议来源：[官方记录](https://aclanthology.org/2026.iwslt-1.14/) · [官方 PDF](https://aclanthology.org/2026.iwslt-1.14.pdf)

👥 **作者与机构**

- Mohammad Mohammadamini：机构信息未能从会议 PDF 纯文本可靠映射
- Dilgash Mohammed Salih Tayib：机构信息未能从会议 PDF 纯文本可靠映射
- Dezheen H\. Abdulazeez：机构信息未能从会议 PDF 纯文本可靠映射
- Barzan Hussein Mohammed：机构信息未能从会议 PDF 纯文本可靠映射
- Imad Saeed Sadeeq：机构信息未能从会议 PDF 纯文本可靠映射
- Aveen Jalal Mohammed：机构信息未能从会议 PDF 纯文本可靠映射
- Amera Ismail Melhum：机构信息未能从会议 PDF 纯文本可靠映射
- Abuobaida Abdullah Dheyab：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

巴迪尼语语音识别与语音翻译任务以巴迪尼语语音为输入，以同语转写或英语文本为输出，实际难点在于平行语音文本稀缺且发音词汇与书写偏离标准北库尔德语，常用改良阿拉伯字符进一步加剧建模困难。方法链首先由杜霍克大学50名英语与翻译专业母语学生将2000条Flores英语句直接译为巴迪尼语，经教师两阶段审校输出平行文本，该文本直接进入下一步充当朗读脚本。接着母语者经网页平台在安静环境下朗读录音并保留麦克风与口音等自然变异，随后人工逐条核对语音文本一致性并剔除1078条错配样本，形成对齐语料。最终语料共5224条约15小时40分钟，含45名说话人且训练开发测试说话人不重叠，可同时支撑识别与翻译双任务评测。相对已有库尔德语资源，该工作首次覆盖巴迪尼变体并坚持从英语直接翻译以保持与FLEURS多语平行，其实际意义在于提供可比基准与双任务基线。在FLEURS\-Badini测试集条件下，W2V\-BERT CTC的WER为55\.07，低于Omnilingual LLM 1B的WER 60\.20。该结论适用边界受限于朗读式短句与相对可控录音，尚未验证自发对话与强噪声跨域外推。原文未披露训练、推理或部署成本。

🔗 **开源资源**

本次未形成可展示的已核验资源记录，开放状态尚未核实。
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 27. [低资源下直连还是级联：博杰普尔语语音翻译的适配器与质量估计融合](/posts/conference-iwslt-2026-conference-paper-id-2026-iwslt-1-31-9b6f81d9a0/)

> 英文题目：*[IIIT\-BGP IWSLT 2026 Systems for Low\-resource ST](/posts/conference-iwslt-2026-conference-paper-id-2026-iwslt-1-31-9b6f81d9a0/)*

标签：#Adapter #低资源 #语音 #语音翻译

评分：**5.7/10** | 创新 1.2/2 | 技术严谨 1.0/1.5 | 实验充分 0.9/1.5 | 清晰度 0.6/1 | 影响力 0.7/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 1.0/1.5

排名：前50% | 文档类型：系统技术报告 | 主任务：#语音翻译 | 主方法：#Adapter

会议来源：[官方记录](https://aclanthology.org/2026.iwslt-1.31/) · [官方 PDF](https://aclanthology.org/2026.iwslt-1.31.pdf)

👥 **作者与机构**

- Kaustuk Pratap Singh：机构信息未能从会议 PDF 纯文本可靠映射
- Dipanshu：机构信息未能从会议 PDF 纯文本可靠映射
- Vedant Singh：机构信息未能从会议 PDF 纯文本可靠映射
- Kumar Rishu：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

本文处理博杰普尔语语音到印地语文本翻译，输入为新闻领域博杰普尔语波形，输出为印地语天城体文本，难点在于仅20小时配对数据且拼写非标准化并混杂印地语表达。端到端链路先由博杰普尔语微调Wav2Vec2编码器抽取第6、8、10、12层语音表征并可学习加权聚合，再经两层步幅卷积实现4倍时间压缩与线性投影到NLLB解码器隐空间，接着由两层Transformer精炼块生成跨模态上下文，最后由NLLB\-200解码器交叉注意力自回归生成印地语。级联链路先由微调Whisper生成博杰普尔语转写，再由微调NLLB\-200生成5个候选并由COMET\-Kiwi质量估计融合重组最优片段。与已有预训练编码器直连解码器方案相比，关键差异在于显式压缩加精炼适配器承担模态对齐，使解码器保留多语言先验并仅做LoRA轻量适配。在IWSLT 2026博杰普尔语\-印地语开发集验证集条件下，全适配器加解码器LoRA加数据增强方法的BLEU为32\.77，高于解冻交叉注意力加顶两层方法的BLEU 30\.23。其结论适用边界限于新闻训练分布，从开发集到测试集端到端分数大幅下降表明对标注噪声和域偏移敏感，跨域泛化能力尚未验证。原文未披露训练、推理或部署成本。

🔗 **开源资源**

本次未形成可展示的已核验资源记录，开放状态尚未核实。
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 28. [先转准再压短：Qwen3 级联字幕如何在时间戳不动下满足中文字幕行数与语速](/posts/conference-iwslt-2026-conference-paper-id-2026-iwslt-1-10-17b65b6987/)

> 英文题目：*[HW\-TSC’s Submission to the IWSLT 2026 Subtitling Track](/posts/conference-iwslt-2026-conference-paper-id-2026-iwslt-1-10-17b65b6987/)*

标签：#自回归模型 #大语言模型 #流式处理 #语音识别 #语音翻译

评分：**5.6/10** | 创新 1.0/2 | 技术严谨 1.0/1.5 | 实验充分 0.8/1.5 | 清晰度 0.7/1 | 影响力 0.9/1.5 | 开源 0.0/1.5 | 可复现 0.1/0.5 | 工程/实践 1.1/1.5

排名：前50% | 文档类型：系统技术报告 | 主任务：#语音翻译 | 主方法：#自回归模型

会议来源：[官方记录](https://aclanthology.org/2026.iwslt-1.10/) · [官方 PDF](https://aclanthology.org/2026.iwslt-1.10.pdf)

👥 **作者与机构**

- Xiaoqing Lan：机构信息未能从会议 PDF 纯文本可靠映射
- Daimeng Wei：机构信息未能从会议 PDF 纯文本可靠映射
- Jiaxin GUO：机构信息未能从会议 PDF 纯文本可靠映射
- Yuanchang Luo：机构信息未能从会议 PDF 纯文本可靠映射
- Hengchao Shang：机构信息未能从会议 PDF 纯文本可靠映射
- Zongyao Li：机构信息未能从会议 PDF 纯文本可靠映射
- Zhiqiang Rao：机构信息未能从会议 PDF 纯文本可靠映射
- Jinlong Yang：机构信息未能从会议 PDF 纯文本可靠映射
- Zhanglin Wu：机构信息未能从会议 PDF 纯文本可靠映射
- Boqi Huang：机构信息未能从会议 PDF 纯文本可靠映射
- Yu He：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

输入为英语长音频与低质量视频轨，输出是满足每块至多两行、每行至多16字符、每秒至多9字符的中文字幕，难点在于口语冗长与高信息密度新闻文本难以同时兼顾翻译保真、可读速度与时间同步。方法链第一步是基于Qwen3系列的流式语音识别负责切分长音频并生成带词级时间戳的英文转写，结合语音活动检测、滑动窗与强制对齐保证时间精度。第二步文本预处理按句末标点合并碎片并按英中长度先验做贪心重组形成可翻译单元，保持时间戳不变为翻译提供规范输入。第三步机器翻译保持时间戳不变生成中文初稿后由大模型压缩改写负责修复超限片段，采用先松后紧两阶段策略保留专有名词与核心语义。相对传统级联方案的关键差异在于以同一系列大模型统一识别对齐翻译压缩，并将压缩约束与翻译保真联合考虑，从而减少误差传播并提升合规性。在IWSLT2026开发集英译中ITV任务评测设置下，启用压缩条件的SubER指标为62\.94，低于未压缩基线条件的SubER指标63\.50。结论适用边界仅在英译中与三类新闻综艺语料开发集上验证，向多语与强噪声重叠语音的外推尚未验证。原文未披露训练、推理或部署成本。

🔗 **开源资源**

本次未形成可展示的已核验资源记录，开放状态尚未核实。
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 29. [不做跨注意力：把音频当作前缀塞进冻结大模型的翻译管线](/posts/conference-iwslt-2026-conference-paper-id-2026-iwslt-1-28-2c6a957238/)

> 英文题目：*[AURA\-ST: Acoustic\-Unconstrained Residual Architecture for Speech Translation](/posts/conference-iwslt-2026-conference-paper-id-2026-iwslt-1-28-2c6a957238/)*

标签：#LoRA #大语言模型 #低资源 #多语言 #语音翻译

评分：**5.6/10** | 创新 1.2/2 | 技术严谨 1.0/1.5 | 实验充分 0.7/1.5 | 清晰度 0.6/1 | 影响力 0.8/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 1.0/1.5

排名：前50% | 文档类型：系统技术报告 | 主任务：#语音翻译 | 主方法：#LoRA

会议来源：[官方记录](https://aclanthology.org/2026.iwslt-1.28/) · [官方 PDF](https://aclanthology.org/2026.iwslt-1.28.pdf)

👥 **作者与机构**

- Barathi Ganesh HB：机构信息未能从会议 PDF 纯文本可靠映射
- Michal Ptaszynski：机构信息未能从会议 PDF 纯文本可靠映射
- Jairam R：机构信息未能从会议 PDF 纯文本可靠映射
- Reshma Unnikrishnan：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

本文处理低资源语音到文本翻译，输入为豪萨语、伊博语和约鲁巴语语音，输出为英语文本，难点在于数据稀缺、声调对比强烈且缺乏域内声学预训练模型。方法为三阶段模块化流水线：先由双流声学编码器融合语义与韵律信息并经多目标预训练形成帧级表示，再经卷积下采样器压缩并映射至冻结大语言模型的词嵌入空间形成音频前缀，最后仅用低秩适配微调多层感知机层学习翻译映射。与跨注意力端到端架构的关键差异在于将音频视为因果前缀，避免改造注意力与位置编码并降低显存开销。在IWSLT 2026第一赛道验证集上教师强制代理指标达到91\.29，而官方测试集约鲁巴语到英语自由解码仅取得19\.5 SpBLEU，暴露了强监督对齐与自回归生成的鸿沟。该结论仅适用于所给三语短语音条件，不支持向凯尔特语分支或长语音外推。原文未披露训练、推理或部署成本，未提供外部基线对比。

🔗 **开源资源**

本次未形成可展示的已核验资源记录，开放状态尚未核实。
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 30. [多加一路语音却没更准：语音翻译质量估计的音频困境](/posts/conference-iwslt-2026-conference-paper-id-2026-iwslt-1-34-356bcb75f4/)

> 英文题目：*[Hurdles of Automatic Metric for Speech Translation Evaluation](/posts/conference-iwslt-2026-conference-paper-id-2026-iwslt-1-34-356bcb75f4/)*

标签：#多模态学习 #模型评估 #语音 #语音翻译

评分：**5.6/10** | 创新 1.1/2 | 技术严谨 1.0/1.5 | 实验充分 1.0/1.5 | 清晰度 0.8/1 | 影响力 0.7/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 0.7/1.5

排名：前50% | 文档类型：方法研究 | 主任务：#语音翻译 | 主方法：#多模态学习

会议来源：[官方记录](https://aclanthology.org/2026.iwslt-1.34/) · [官方 PDF](https://aclanthology.org/2026.iwslt-1.34.pdf)

👥 **作者与机构**

- Victor Eugen Zarzu：机构信息未能从会议 PDF 纯文本可靠映射
- Vilem Zouhar：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

语音翻译无参考质量估计输入为源语言语音与机器译文，输出 0 到 100 的质量分，难点在于纯文本指标丢失韵律、强调和停顿等副语言信息。作者对比两条音频增强路线：一是 COMET\+audio 回归模型，用 InfoXLM 编码源转写与译文、用 Whisper 编码源音频，经注意力池化、共享投影与双线性融合后回归人工分；二是 Speech LLM 提示评估，用 Phi\-4\-multimodal\-instruct 同时读音频与文本，结合按分数分档的动态少样本与 5 次采样平均直接打分。两路共同假设是把源音频作为与转写并列的证据，而非先做语音识别再评文本，因而理论上可利用互补声学线索。在 IWSLT 2026 指标共享任务开发集上，Speech LLM 文本模式片段级相关性为 27\.4%，明显高于音频文本联合模式的 18\.4%；COMET\+audio 联合与文本模式分别为 18\.3% 与 18\.2%，基本持平。作者将边界归因于开发集以技术内容为主、韵律可利用性低，以及约 27% 音频中途截断、34% 音频文本信息不一致，导致音频更多是噪声而非增益。原文未披露训练时长、推理成本与部署开销。

🔗 **开源资源**

本次未形成可展示的已核验资源记录，开放状态尚未核实。
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 31. [英语音色说法语汉语为何走调：语言标签与词项检索如何稳住跨语种克隆](/posts/conference-iwslt-2026-conference-paper-id-2026-iwslt-1-8-931cb1166a/)

> 英文题目：*[KIT’s Submission to Cross\-Lingual Voice Cloning in IWSLT 2026](/posts/conference-iwslt-2026-conference-paper-id-2026-iwslt-1-8-931cb1166a/)*

标签：#强化学习 #检索增强 #跨语言 #语音克隆

评分：**5.6/10** | 创新 1.0/2 | 技术严谨 1.0/1.5 | 实验充分 0.8/1.5 | 清晰度 0.7/1 | 影响力 0.8/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 1.0/1.5

排名：前50% | 文档类型：系统技术报告 | 主任务：#语音克隆 | 主方法：#强化学习

会议来源：[官方记录](https://aclanthology.org/2026.iwslt-1.8/) · [官方 PDF](https://aclanthology.org/2026.iwslt-1.8.pdf)

👥 **作者与机构**

- Seymanur Akti：机构信息未能从会议 PDF 纯文本可靠映射
- Alexander Waibel：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

跨语言语音克隆以英语参考语音及法语阿拉伯语中文目标文本为输入，合成保留说话人身份的目标语语音，难点是参考口音导致的发音漂移与领域术语命名实体在目标语中分布缺失。系统以鱼声语音大模型为基座，先在参考文本与目标文本前分别插入母语形式显式语言标签以约束音系实现，引导模型向目标语音系靠拢并减少跨语干扰。接着采用组相对策略优化强化学习微调适配新增标签分布，以反转字符错误率与说话人相似度均值为奖励，在保持基座质量下进一步修正跨语发音一致性。推理时对长参考音频用长语音识别模型切分为秒级片段并转写，再按目标文本与转写片段的词汇重叠检索含领域词片段进行条件合成，为罕见词提供声学发音依据。在ACL 60/60评测子集下，强化微调模型的字符错误率为6\.38%，低于无标签基线模型的字符错误率6\.57%。相对无标签基线与先合成后转换的级联思路，该链条分工明确提示约束负责语言控制，强化微调负责新标签分布适配，检索条件负责术语发音接地，从而在改善可懂度的同时保留说话人特性。上述结论适用边界限于该语料三种目标语短句评测，词汇匹配在无词形重叠时失效且盲测长音频与人类听测尚未验证，原文未披露训练、推理或部署成本。

🔗 **开源资源**

本次未形成可展示的已核验资源记录，开放状态尚未核实。
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 32. [加泰罗尼亚语到英语：级联为何仍压过端到端，瓶颈在语音端而不在翻译端](/posts/conference-iwslt-2026-conference-paper-id-2026-iwslt-1-18-8e4d5457db/)

> 英文题目：*[CATENG Submission for the IWSLT 2026: Dialectal and Low\-resource Speech Translation Task](/posts/conference-iwslt-2026-conference-paper-id-2026-iwslt-1-18-8e4d5457db/)*

标签：#SFT #跨语言 #语音 #语音翻译

评分：**5.5/10** | 创新 1.0/2 | 技术严谨 1.0/1.5 | 实验充分 0.8/1.5 | 清晰度 0.7/1 | 影响力 0.7/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 1.0/1.5

排名：前50% | 文档类型：系统技术报告 | 主任务：#语音翻译 | 主方法：#SFT

会议来源：[官方记录](https://aclanthology.org/2026.iwslt-1.18/) · [官方 PDF](https://aclanthology.org/2026.iwslt-1.18.pdf)

👥 **作者与机构**

- Rodolfo Joel Zevallos：机构信息未能从会议 PDF 纯文本可靠映射
- Marc Casals：机构信息未能从会议 PDF 纯文本可靠映射
- John E\. Ortega：机构信息未能从会议 PDF 纯文本可靠映射
- Fabrício Carraro：机构信息未能从会议 PDF 纯文本可靠映射
- Pol Buitrago：机构信息未能从会议 PDF 纯文本可靠映射
- Guillermo Cámbara：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

加泰罗尼亚语到英语语音翻译的输入为多方言加泰罗尼亚语语音，输出为英语文本，难点在于东部与西部方言的元音弱化与词汇差异、自然口语中频繁的加泰罗尼亚语与西班牙语语码切换，以及加泰罗尼亚语与英语的类型距离。主系统采用两步级联链：加泰罗尼亚语语音先由 ConMamba识别器转写为加泰罗尼亚语文本，再经微调后的 NLLB\-200翻译器以束搜索生成英语译文，对照系统分别将识别器替换为 Whisper large\-v3或将全链替换为 SpeechT5直译。与已有低资源语音翻译工作相比，该文的关键机制差异是将强英语解码器固定而比较不同语音前端，凸显状态空间模型无注意力长程建模与大规模多语言预训练表征的互补价值。在 IWSLT 2026加泰罗尼亚语到英语非受限测试集上，对照级联1以44\.7 BLEU和65\.1 chrF领先主级联约1\.5 BLEU，端到端模型落后最高值3\.4 BLEU，证明在当前数据下分解为识别加翻译更稳健。结论仅适用于约15小时配对语音翻译加大规模外部平行文本的非受限场景，未验证各方言、噪声域和混码比例下的外推能力。原文未披露训练、推理或部署成本。

🔗 **开源资源**

- 第三方资源：<https://github.com/makcedward/nlpaug> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 33. [压哪里比压多少更关键：只压 MLP 投影的编解码压缩](/posts/conference-iwslt-2026-conference-paper-id-2026-iwslt-1-4-24d482ed5d/)

> 英文题目：*[Selected\-Layer Codec Compression for Compact Speech Translation Models: An IWSLT 2026 English\-to\-Chinese Submission](/posts/conference-iwslt-2026-conference-paper-id-2026-iwslt-1-4-24d482ed5d/)*

标签：#模型量化 #高效推理 #跨语言 #语音 #语音翻译

评分：**5.5/10** | 创新 1.0/2 | 技术严谨 0.9/1.5 | 实验充分 0.8/1.5 | 清晰度 0.8/1 | 影响力 0.7/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 1.0/1.5

排名：前50% | 文档类型：系统技术报告 | 主任务：#语音翻译 | 主方法：#模型量化

会议来源：[官方记录](https://aclanthology.org/2026.iwslt-1.4/) · [官方 PDF](https://aclanthology.org/2026.iwslt-1.4.pdf)

👥 **作者与机构**

- Alonso Palomino：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

该工作处理受限条件下英语口语到中文书面语的端到端语音翻译压缩问题，输入为已分句的长音频，输出为中文译文，难点在于同时保留语音理解与跨语言生成能力且禁止使用外部数据。在固定Qwen2\-Audio\-7B\-Instruct音频大模型骨干上，方法链先按层名筛选变换器前馈投影\`gate\_proj\`、上投影\`up\_proj\`与下投影\`down\_proj\`共96个线性层，再对其权重做有损有效数字量化，最后用无损Zstandard编码压缩量化字节流，推理时解压重构后由定制线性层包装器执行。与全局均匀压缩的关键差异在于仅压缩参数占比大但假设敏感度较低的前馈子层，保留注意力投影与整体架构不变。在416条受限英中本地评测集上q3加Zstd取得压缩系统最高COMET分数0\.7767，仅比FP16基线低0\.0025，显著优于全局压缩的0\.7411。该结论仅在单语言对、单骨干与单提示解码下验证，官方盲测分数为0\.339，外推至其他语言与模型仍待检验。原文未披露训练、压缩耗时与部署成本。

🔗 **开源资源**

- 模型相关资源：<https://huggingface.co/Qwen/> — 暂时无法访问
- 第三方资源：<https://iwslt.org/2026/compression> — 链接可访问（HTTP 200）
- 第三方资源：<https://numcodecs.readthedocs.io/en/stable/> — 链接可访问（HTTP 200）
- 第三方资源：<https://speechm.cloud.cyfronet.pl/> — 链接可访问（HTTP 200）
- 第三方资源：<https://www.grammarly.com/> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 34. [评价要排序、训练却在拟合绝对分：用成对排序微调把 CometKiwi 对准文档内 Kendall τ](/posts/conference-iwslt-2026-conference-paper-id-2026-iwslt-1-38-4dd5abb2c5/)

> 英文题目：*[Lexilogic@IWSLT 2026: Pairwise Ranking Fine\-tuning of CometKiwi for Speech Translation Quality Estimation](/posts/conference-iwslt-2026-conference-paper-id-2026-iwslt-1-38-4dd5abb2c5/)*

标签：#偏好优化 #多语言 #语音 #语音质量评估

评分：**5.4/10** | 创新 1.0/2 | 技术严谨 1.0/1.5 | 实验充分 0.8/1.5 | 清晰度 0.7/1 | 影响力 0.6/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 1.0/1.5

排名：后50% | 文档类型：系统技术报告 | 主任务：#语音质量评估 | 主方法：#偏好优化

会议来源：[官方记录](https://aclanthology.org/2026.iwslt-1.38/) · [官方 PDF](https://aclanthology.org/2026.iwslt-1.38.pdf)

👥 **作者与机构**

- Pranav Gupta：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

语音翻译质量估计以语音识别转写的源文与系统译文为输入，输出无参考质量分数，实际难点在于自动切分边界混乱、识别错误传播及跨文档质量分布漂移导致绝对分难以直接比较。为此先在英语德语与英语中文训练段中按同一文档标识符筛选人工分差至少一分的大量翻译对，并经采样得到五万对用于学习文档内相对顺序。接着以随金标分差自适应放大的间隔排序损失约束预测分差，同时保留均方误差分支以维持分数可解释性并防止表示坍缩。然后采用回归头预热与编码器解冻的两阶段调度，先冻结编码器适配新损失再以更低学习率联合优化，使上一步的成对信号稳定进入编码器表示。相对直接回归绝对分的CometKiwi\-22基线，该机制对单调变换不变，直接优化文档内一致对比例，因而更贴合肯德尔τ只计排序一致性的评价逻辑。在IWSLT 2026开发集逐源评测下，主系统的Kendall’s τ指标为35\.2%，高于组织方CometKiwi\-22基线的Kendall’s τ指标34\.6%。该结论适用边界限于英语德语与英语中文演讲文档内排序，跨语言跨领域外推与音频特征增益尚未验证。原文披露的训练成本为单GPU约三十分钟完成微调，推理无需额外候选输入。

🔗 **开源资源**

本次未形成可展示的已核验资源记录，开放状态尚未核实。
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 35. [跨语种克隆要在说得对与听得出是谁之间做取舍](/posts/conference-iwslt-2026-conference-paper-id-2026-iwslt-1-12-ef09f51cb7/)

> 英文题目：*[Balancing Linguistic Intelligibility and Speaker Identity in Zero\-Shot Cross\-Lingual Voice Cloning](/posts/conference-iwslt-2026-conference-paper-id-2026-iwslt-1-12-ef09f51cb7/)*

标签：#评测协议 #模型比较 #跨语言 #零样本 #语音克隆

评分：**5.3/10** | 创新 0.8/2 | 技术严谨 1.0/1.5 | 实验充分 0.8/1.5 | 清晰度 0.7/1 | 影响力 0.7/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 1.0/1.5

排名：后50% | 文档类型：系统技术报告 | 主任务：#语音克隆 | 主方法：#评测协议

会议来源：[官方记录](https://aclanthology.org/2026.iwslt-1.12/) · [官方 PDF](https://aclanthology.org/2026.iwslt-1.12.pdf)

👥 **作者与机构**

- Mo Ahtasam：机构信息未能从会议 PDF 纯文本可靠映射
- Jamal uddin：机构信息未能从会议 PDF 纯文本可靠映射
- Mohammad Nadeem：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

跨语言语音克隆以英语参考音频与目标语言文本为输入，输出保留源说话人音色与风格的目标语言语音，难点在于英语韵律与目标音系的语音分歧及可懂度与说话人相似度的权衡。该工作构建统一零样本评测管线而非提出新合成器，第一步按模型原生分词路径做分语言文本归一化，阿拉伯语去变音符号、中文转字符级处理，输出规整化Unicode文本直接送入各模型推理。第二步仅用英语音频做说话人调制，经重采样与单声道规整后提取说话人表征，MOSS\-TTS与Qwen3\-TTS走多模态音频标记或向量调制，VoxCPM2走波形条件扩散，CosyVoice3走流匹配路径。第三步以隔离子进程在各自环境调度四系统推理，经峰值归一化存为波形后，用Whisper large\-v3转写计算WER/CER并用ECAPA\-TDNN余弦相似度统一打分，使架构偏置暴露为可比结果。与强制共享音素空间的做法不同，该管线刻意保留各模型原生G2P与声学调制路径，其实测意义在于区分自回归语言建模与扩散及流匹配在多语言泛化上的归纳偏置差异。在阿拉伯语评测条件下，VoxCPM2的WER为0\.25，低于MOSS\-TTS的WER 0\.31。其结论适用边界受限于英语源、六语自动指标与所测四系统版本，情感韵律迁移与人耳听感外推尚未验证。原文未披露训练、推理或部署成本。

🔗 **开源资源**

本次未形成可展示的已核验资源记录，开放状态尚未核实。
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 36. [让编码器自己学要看多远：动态前视掩码在同时语音翻译中的验证](/posts/conference-iwslt-2026-conference-paper-id-2026-iwslt-1-20-b172f24fd0/)

> 英文题目：*[Towards Dynamic Attention Masking for Simultaneous Speech Translation](/posts/conference-iwslt-2026-conference-paper-id-2026-iwslt-1-20-b172f24fd0/)*

标签：#注意力机制 #LoRA #多语言 #流式处理 #语音翻译

评分：**5.2/10** | 创新 1.2/2 | 技术严谨 0.8/1.5 | 实验充分 0.8/1.5 | 清晰度 0.7/1 | 影响力 0.6/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 0.8/1.5

排名：后50% | 文档类型：系统技术报告 | 主任务：#语音翻译 | 主方法：#注意力机制

会议来源：[官方记录](https://aclanthology.org/2026.iwslt-1.20/) · [官方 PDF](https://aclanthology.org/2026.iwslt-1.20.pdf)

👥 **作者与机构**

- Benjamin Pong：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

同声语音翻译需在持续到达的英语语音流上增量生成德语、意大利语和中文译文，难点是每帧需权衡等待未来声学上下文以提升质量与尽早发射以降低延迟。方法先在SeamlessM4T的12层Conformer编码器每层插入双层前馈调度器，由上一层隐状态预测当前帧所需前视帧数o\-score并生成软掩码叠加到自注意力以抑制对未来帧的关注。接着冻结预训练主干，仅全参数微调调度器并联合微调语音编码器与解码器自注意力输出投影上的LoRA适配器，以验证集BLEU选优，学到的前视预算直接进入下一步推理。推理时一路沿用12秒重叠滑动窗口重翻译加最长公共子序列去重，另一路改造StreamAtt，以末层调度器o\-score分布均值构造语言相关发射阈值替代固定尾帧数f，只发射最关注编码帧落在截断内的词。与固定分块或固定截断相比，该机制把前视控制从推理启发式前移到编码器训练时逐帧可学习预算，使发射决策能感知内容相关的声学不确定性。在MCIF dev集评测设置下，动态模型的COMET为0\.4433，低于基线SeamlessM4T的COMET 0\.8090。其质量增益向低延迟在线与域外学术演讲词汇风格的外推尚未验证，适用边界受限于所测三方向与高延迟重翻译配置，训练成本为单卡A100硬件上微调，推理开销依赖SimulStream流水线实现延迟测量。

🔗 **开源资源**

本次未形成可展示的已核验资源记录，开放状态尚未核实。
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 37. [借英语占位撬动马普敦贡语翻译：冻结大模型只练一个小适配器](/posts/conference-iwslt-2026-conference-paper-id-2026-iwslt-1-26-0f2b153765/)

> 英文题目：*[Mapudungun\-Spanish Speech Translation: A Low\-Resource End\-to\-End System for the IWSLT 2026 Shared Task](/posts/conference-iwslt-2026-conference-paper-id-2026-iwslt-1-26-0f2b153765/)*

标签：#Adapter #端到端 #低资源 #语音翻译

评分：**5.1/10** | 创新 1.0/2 | 技术严谨 1.0/1.5 | 实验充分 0.6/1.5 | 清晰度 0.7/1 | 影响力 0.7/1.5 | 开源 0.0/1.5 | 可复现 0.1/0.5 | 工程/实践 1.0/1.5

排名：后50% | 文档类型：系统技术报告 | 主任务：#语音翻译 | 主方法：#Adapter

会议来源：[官方记录](https://aclanthology.org/2026.iwslt-1.26/) · [官方 PDF](https://aclanthology.org/2026.iwslt-1.26.pdf)

👥 **作者与机构**

- Diego Alberto Barriga Martínez：机构信息未能从会议 PDF 纯文本可靠映射
- Amilkar Gazque：机构信息未能从会议 PDF 纯文本可靠映射
- Mikel Segura Elizalde：机构信息未能从会议 PDF 纯文本可靠映射
- Carlos Daniel Hernandez Mena：机构信息未能从会议 PDF 纯文本可靠映射
- Ximena Gutierrez\-Vasques：机构信息未能从会议 PDF 纯文本可靠映射
- Ivan Vladimir Meza Ruiz：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

该任务输入为马普敦贡语口语录音、输出为西班牙语文本，难点在于平行语料稀缺、三种方言覆盖不均、正字法非标准且访谈口语中存在停顿、非言语声与西班牙语语码混合。方法第一步做数据规整与扰动，语音侧在组批前做在线波形扰动并过滤超15秒长句以稳定批内时长，文本侧统一小写并删除标点，输出的梅尔频谱与规整译文直接进入骨干微调。方法第二步复用冻结的Canary\-1B\-v2骨干，将梅尔频谱送入冻结的FastConformer编码器与冻结的Transformer解码器，仅在编码器侧训练轻量线性适配器以学习新的声学映射。方法第三步做占位语言劫持与高效训练，以英语到西班牙语配置作为马普敦贡语到西班牙语的占位符来保留西班牙语生成能力，并以半精度与基于时长的动态分桶完成训练。与全量微调或新增语言建模不同，其关键机制差异在于冻结约17亿参数仅训练589k适配器并借用英语声学先验，实际意义是以极低可训练量复用高资源西班牙语生成能力。在官方测试集下，Filtered配置的BLEU为0\.82，高于Vanilla配置的BLEU 0\.34。该结论适用边界受限于短句主导的同域划分，面对长话语与开放词汇仍出现重复与幻觉，其训练硬件为单卡训练19轮早停与双卡过滤训练，推理开销尚未验证大规模部署外推。

🔗 **开源资源**

- 代码相关资源：<https://github.com/umoqnier/> — 暂时无法访问
- 第三方资源：本次 URL 不完整，未作为可点击链接展示 — 暂时无法访问
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 38. [长参考切短再选优：跨语言音色克隆如何兼顾内容与音色](/posts/conference-iwslt-2026-conference-paper-id-2026-iwslt-1-11-342ea3d3a8/)

> 英文题目：*[HW\-TSC’s Submission to the IWSLT 2026 Cross\-Lingual Voice Cloning Track](/posts/conference-iwslt-2026-conference-paper-id-2026-iwslt-1-11-342ea3d3a8/)*

标签：#Transformer #跨语言 #多语言 #语音克隆

评分：**4.7/10** | 创新 0.8/2 | 技术严谨 1.0/1.5 | 实验充分 0.5/1.5 | 清晰度 0.6/1 | 影响力 0.7/1.5 | 开源 0.0/1.5 | 可复现 0.1/0.5 | 工程/实践 1.0/1.5

排名：后50% | 文档类型：系统技术报告 | 主任务：#语音克隆 | 主方法：#Transformer

会议来源：[官方记录](https://aclanthology.org/2026.iwslt-1.11/) · [官方 PDF](https://aclanthology.org/2026.iwslt-1.11.pdf)

👥 **作者与机构**

- Yu He：机构信息未能从会议 PDF 纯文本可靠映射
- Daimeng Wei：机构信息未能从会议 PDF 纯文本可靠映射
- Jiaxin GUO：机构信息未能从会议 PDF 纯文本可靠映射
- Yuanchang Luo：机构信息未能从会议 PDF 纯文本可靠映射
- Hengchao Shang：机构信息未能从会议 PDF 纯文本可靠映射
- Zongyao Li：机构信息未能从会议 PDF 纯文本可靠映射
- Zhiqiang Rao：机构信息未能从会议 PDF 纯文本可靠映射
- Jinlong Yang：机构信息未能从会议 PDF 纯文本可靠映射
- Zhanglin Wu：机构信息未能从会议 PDF 纯文本可靠映射
- Boqi Huang：机构信息未能从会议 PDF 纯文本可靠映射
- Xiaoqing Lan：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

跨语言语音克隆（Cross\-Lingual Voice Cloning）要求在源语言参考音色约束下生成目标语言语音，保持内容可懂与音色一致。赛道含阿拉伯文、中文、法文三个目标语言，本文仅参加中文与法文两轨。难点在于官方提供的12段约5分钟长参考音频直接输入易出现特征衰减与特征分散，加之跨语言韵律失配导致音色相似度下降。本文方法为无训练三阶段流水线：重叠滑动窗口预处理将长音频按10秒窗长、5秒步长切分为约60个标准化短片段，构建多候选参考库；每个短片段作为独立音色约束，联合官方文本chinese\.txt和french\.txt中单句目标文本，输入Qwen3\-TTS\-12Hz\-1\.7B\-Base进行一对多批量合成；再用冻结的ECAPA\-TDNN说话人确认（Speaker Verification）模型提取声纹嵌入向量，以余弦相似度对同一文本同一说话人的全部候选取峰值保留。与直接使用整段长音频的常规零样本（Zero\-Shot）克隆相比，该组合以冗余切分扩大候选多样性并以后验筛选替代人工试听。在BlindData评测中，中文字符错误率（Character Error Rate，CER）为1\.39%到2\.25%，法文词错误率（Word Error Rate，WER）为4\.40%到8\.52%，音色余弦相似度多在0\.5以上，法文样本2023\.acl\-long\.23达0\.7173且WER为5\.00%，中文样本2023\.acl\-long\.193达0\.7052且CER为2\.10%。该结论仅适用于12个样本的单次评测，未验证短参考、噪声参考、阿拉伯文及其他语言的外推能力，原文未披露训练、推理耗时与部署成本。

🔗 **开源资源**

本次未形成可展示的已核验资源记录，开放状态尚未核实。
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---
