---
title: "aistats-2026 论文深度解读"
date: 2026-09-11
draft: false
paper_digest_pipeline_owned: true
tags: ["对比学习","多模态学习","混合专家模型","语音情感识别"]
categories: ["aistats-2026 论文"]
description: "共收录 1 篇 aistats-2026 会议论文的 Reader 深度解读"
paper_digest_page_type: index
paper_digest_reader_quality: "reader-facing-v3"
paper_digest_taxonomy_contract: "paper-taxonomy-flat-tags-compat-v1"
paper_digest_taxonomy_selection_contract: "paper-taxonomy-selection-v1"
paper_digest_taxonomy_registry_version: "paper-taxonomy-v1"
paper_digest_taxonomy_registry_sha256: "15c82a567ce5a55dc1175684ed08b64c158558639d9c8fb822c9587ec32a8778"
paper_digest_taxonomy_scope: "aggregate-primary-task-counts"
---

# aistats-2026 论文深度解读

本汇总收录 authenticated plan 选择集内全部 1 篇已完成分析、重标和单篇 staging 的论文。

🏷️ 标签说明：本期使用新版受控 taxonomy；热门方向只统计主任务。

## ⚡ 今日概览

✅ authenticated plan 入选 1 篇 → 🔬 深度分析、Reader 与页面投影完成

### 🏷️ 热门方向

| 方向（仅主任务） | 数量 |
|---|---:|
| #语音情感识别 | 1 篇 |

## 📊 论文评分排行榜

| 排名 | Reader 中文题目 | 英文题目 | 八维评分 | 分档 | 文档类型 | 主任务 |
|---:|---|---|---|---|---|---|
| 1 | [音频词元太多文本词元太少时如何让专家分工而不崩溃](/posts/conference-aistats-2026-conference-paper-id-naderi26a-b7556a28eb/) | [From Token Imbalance to Balanced Routing: An ELBO\-Regularized Probabilistic Framework for Contrastive Multimodal Learning](/posts/conference-aistats-2026-conference-paper-id-naderi26a-b7556a28eb/) | **7.1/10** · 创新 1.3/2 · 技术严谨 1.0/1.5 · 实验充分 1.1/1.5 · 清晰度 0.7/1 · 影响力 0.8/1.5 · 开源 1.2/1.5 · 可复现 0.3/0.5 · 工程/实践 0.7/1.5 | 前50% | 方法研究 | #语音情感识别 |

---

## 📋 论文列表

### 1. [音频词元太多文本词元太少时如何让专家分工而不崩溃](/posts/conference-aistats-2026-conference-paper-id-naderi26a-b7556a28eb/)

> 英文题目：*[From Token Imbalance to Balanced Routing: An ELBO\-Regularized Probabilistic Framework for Contrastive Multimodal Learning](/posts/conference-aistats-2026-conference-paper-id-naderi26a-b7556a28eb/)*

标签：#对比学习 #混合专家模型 #多模态学习 #语音情感识别

评分：**7.1/10** | 创新 1.3/2 | 技术严谨 1.0/1.5 | 实验充分 1.1/1.5 | 清晰度 0.7/1 | 影响力 0.8/1.5 | 开源 1.2/1.5 | 可复现 0.3/0.5 | 工程/实践 0.7/1.5

排名：前50% | 文档类型：方法研究 | 主任务：#语音情感识别 | 主方法：#混合专家模型

会议来源：[官方记录](https://proceedings.mlr.press/v300/naderi26a.html) · [官方 PDF](https://raw.githubusercontent.com/mlresearch/v300/main/assets/naderi26a/naderi26a.pdf)

👥 **作者与机构**

- Habibeh Naderi：机构信息未能从会议 PDF 纯文本可靠映射
- Behrouz Haji Soleimani：机构信息未能从会议 PDF 纯文本可靠映射
- Stan Matwin：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

音频文本对比学习以频谱图切块后的海量音频token与少量文本token为输入，以映射到共享语义空间的对齐表示为输出，用于零样本与小样本情感和情绪识别，实际难点是约50:1的极端数量失衡易引发专家过载、路由塌缩与少数模态被淹没。方法先以共享Transformer对音频频谱块与文本序列做统一编码，输出上下文表示进入下一步稀疏路由。然后由混合专家层以top\-k门控做条件计算，将每token分配给少数专家以保留稀疏效率，路由分布再经平均池化聚合为模态级向量。最后以双向对比损失拉近配对音频文本并推远非配对，完成跨模态对齐。与强制均匀的CoV正则不同，该框架以证据下界同时奖励专家对所分配token的高斯似然拟合以促特化，并以KL散度拉向均匀先验以保多样，再辅以熵形式重要性负载Z损失与互信息维持柔性均衡。在LibriSpeech960预训练并在IEMOCAP上10\-shot迁移评测下，CoPRIME\-L/32的准确率为79\.7%，高于LIMoE\-L/32的78\.33%。其结论适用边界受限于MOSEI与IEMOCAP的小样本情感迁移，尚未验证大规模开放词汇检索或强噪声外推。原文未披露训练、推理或部署成本。

🔗 **开源资源**

- 代码相关资源：<https://github.com/hanadk/coprime> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---
