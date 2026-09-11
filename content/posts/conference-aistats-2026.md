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
| 1 | [音频 token 远多于文本时，对比学习加稀疏路由如何保持稳定分工](/posts/conference-aistats-2026-conference-paper-id-naderi26a-b7556a28eb/) | [From Token Imbalance to Balanced Routing: An ELBO\-Regularized Probabilistic Framework for Contrastive Multimodal Learning](/posts/conference-aistats-2026-conference-paper-id-naderi26a-b7556a28eb/) | **7.0/10** · 创新 1.2/2 · 技术严谨 0.9/1.5 · 实验充分 1.0/1.5 · 清晰度 0.7/1 · 影响力 0.9/1.5 · 开源 1.2/1.5 · 可复现 0.3/0.5 · 工程/实践 0.8/1.5 | 前50% | 方法研究 | #语音情感识别 |

---

## 📋 论文列表

### 1. [音频 token 远多于文本时，对比学习加稀疏路由如何保持稳定分工](/posts/conference-aistats-2026-conference-paper-id-naderi26a-b7556a28eb/)

> 英文题目：*[From Token Imbalance to Balanced Routing: An ELBO\-Regularized Probabilistic Framework for Contrastive Multimodal Learning](/posts/conference-aistats-2026-conference-paper-id-naderi26a-b7556a28eb/)*

标签：#对比学习 #混合专家模型 #多模态学习 #语音情感识别

评分：**7.0/10** | 创新 1.2/2 | 技术严谨 0.9/1.5 | 实验充分 1.0/1.5 | 清晰度 0.7/1 | 影响力 0.9/1.5 | 开源 1.2/1.5 | 可复现 0.3/0.5 | 工程/实践 0.8/1.5

排名：前50% | 文档类型：方法研究 | 主任务：#语音情感识别 | 主方法：#混合专家模型

会议来源：[官方记录](https://proceedings.mlr.press/v300/naderi26a.html) · [官方 PDF](https://raw.githubusercontent.com/mlresearch/v300/main/assets/naderi26a/naderi26a.pdf)

👥 **作者与机构**

- Habibeh Naderi：机构信息未能从会议 PDF 纯文本可靠映射
- Behrouz Haji Soleimani：机构信息未能从会议 PDF 纯文本可靠映射
- Stan Matwin：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

本文处理音频文本对比表征学习，输入为频谱块序列与子词序列，输出为可做零样本与少样本情感和情绪分类的对齐向量，难点是频谱分块带来约50:1的音频文本 token 数量比，远高于图文约12:1，且音频语义密度低，导致路由器丢弃少数派文本 token 而坍缩到少数专家。方法链分三步：先用频谱分块投影与句子分词将双模态映射到共享维度并拼接送入共享 Transformer，再用 Top\-K 稀疏门控把每个 token 分给少数多层感知机专家并加权求和，最后用双向对比目标拉近配对音频文本，同时用证据下界与熵类辅助损失约束路由分布与专家拟合。与 LIMoE 的差异在于以均匀先验的散度项与原型高斯似然显式要求专家解释所分配 token 的特征几何，而非仅平衡流量，因此允许模态特化又防止少数派 token 被丢弃。在 LibriSpeech960 预训练后直接跨域评测的设置下，大型模型在 IEMOCAP 10样本情感准确率达到79\.7%，高于同规模自实现 LIMoE 基线的78\.33%；在 MOSEI 10样本情绪上为84\.8%，高于 LIMoE 的83\.06%。在 MOSEI 微调后再测 IEMOCAP 的域内设置下，10样本准确率为82\.17%，接近直接监督训练的 CORECT 的84\.7%。结论仅在 LibriSpeech 预训练加 MOSEI 与 IEMOCAP 评测上验证，未证明在大规模噪声语料或开放词汇检索上的外推能力。原文未披露训练、推理或部署成本。

🔗 **开源资源**

- 代码相关资源：<https://github.com/hanadk/coprime> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---
