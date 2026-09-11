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
| 1 | [音频词元远多于文本时路由为何坍缩：CoPRIME 的证据下界与熵正则分工](/posts/conference-aistats-2026-conference-paper-id-naderi26a-b7556a28eb/) | [From Token Imbalance to Balanced Routing: An ELBO\-Regularized Probabilistic Framework for Contrastive Multimodal Learning](/posts/conference-aistats-2026-conference-paper-id-naderi26a-b7556a28eb/) | **6.4/10** · 创新 1.2/2 · 技术严谨 0.8/1.5 · 实验充分 0.9/1.5 · 清晰度 0.7/1 · 影响力 0.8/1.5 · 开源 1.0/1.5 · 可复现 0.3/0.5 · 工程/实践 0.7/1.5 | 前50% | 方法研究 | #语音情感识别 |

---

## 📋 论文列表

### 1. [音频词元远多于文本时路由为何坍缩：CoPRIME 的证据下界与熵正则分工](/posts/conference-aistats-2026-conference-paper-id-naderi26a-b7556a28eb/)

> 英文题目：*[From Token Imbalance to Balanced Routing: An ELBO\-Regularized Probabilistic Framework for Contrastive Multimodal Learning](/posts/conference-aistats-2026-conference-paper-id-naderi26a-b7556a28eb/)*

标签：#对比学习 #混合专家模型 #多模态学习 #语音情感识别

评分：**6.4/10** | 创新 1.2/2 | 技术严谨 0.8/1.5 | 实验充分 0.9/1.5 | 清晰度 0.7/1 | 影响力 0.8/1.5 | 开源 1.0/1.5 | 可复现 0.3/0.5 | 工程/实践 0.7/1.5

排名：前50% | 文档类型：方法研究 | 主任务：#语音情感识别 | 主方法：#混合专家模型

会议来源：[官方记录](https://proceedings.mlr.press/v300/naderi26a.html) · [官方 PDF](https://raw.githubusercontent.com/mlresearch/v300/main/assets/naderi26a/naderi26a.pdf)

👥 **作者与机构**

- Habibeh Naderi：机构信息未能从会议 PDF 纯文本可靠映射
- Behrouz Haji Soleimani：机构信息未能从会议 PDF 纯文本可靠映射
- Stan Matwin：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

该工作处理音频与文本到共享表征的对比对齐任务，输入为声谱图与转录文本，输出为可用于情绪与情感零样本和少样本分类的跨模态向量，难点在于声谱图分块产生远多于文本子词的token量并诱发专家坍缩与模态偏置。方法链分三步：先将声谱图按无重叠块展平线性投影、文本经子词查表投影到同维并加模态标记后拼接，为后续建模提供统一序列；再送入共享稠密Transformer编码实现隐式跨模态交互，按模态平均池化得音频与文本向量并经模态特定投影进入对比空间，为稀疏路由提供可比嵌入；最后在稀疏混合专家层做Top\-K门控路由，以双向对比损失拉近配对样本，同时用ELBO损失要求专家拟合所分配嵌入几何并以对均匀先验的散度防垄断，辅以熵型重要性与负载损失稳定路由。与变异系数硬约束相比，熵最大化仅鼓励均衡而允许受控偏离，从而涌现模态专用与多模态专家并保持梯度平滑。在LibriSpeech960预训练后跨域直评MOSEI 10\-shot任务设置下，CoPRIME\-L/32的情绪准确率为78\.21%，高于同规模自复现LIMoE\-L/32的77\.93%。该结论适用边界受限于LibriSpeech加MOSEI与IEMOCAP的小规模情感验证，尚未验证大规模噪声语料、开放词汇检索或跨语言泛化。原文未披露训练、推理或部署成本。

🔗 **开源资源**

- 代码相关资源：<https://github.com/hanadk/coprime> — 链接可访问（HTTP 200）
- 第三方资源：<https://aclanthology.org/D18-2012/> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---
