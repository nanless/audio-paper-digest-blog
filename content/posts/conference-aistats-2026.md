---
title: "aistats-2026 论文深度解读"
date: 2026-09-11
draft: false
paper_digest_pipeline_owned: true
tags: ["对比学习","多模态学习","混合专家模型","语音","语音情感识别"]
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
| 1 | [音频 token 太多、文本太少：CoPRIME 用 ELBO 路由让专家分工](/posts/conference-aistats-2026-conference-paper-id-naderi26a-b7556a28eb/) | [From Token Imbalance to Balanced Routing: An ELBO\-Regularized Probabilistic Framework for Contrastive Multimodal Learning](/posts/conference-aistats-2026-conference-paper-id-naderi26a-b7556a28eb/) | **6.9/10** · 创新 1.2/2 · 技术严谨 0.9/1.5 · 实验充分 0.9/1.5 · 清晰度 0.7/1 · 影响力 0.9/1.5 · 开源 1.0/1.5 · 可复现 0.3/0.5 · 工程/实践 1.0/1.5 | 前50% | 方法研究 | #语音情感识别 |

---

## 📋 论文列表

### 1. [音频 token 太多、文本太少：CoPRIME 用 ELBO 路由让专家分工](/posts/conference-aistats-2026-conference-paper-id-naderi26a-b7556a28eb/)

> 英文题目：*[From Token Imbalance to Balanced Routing: An ELBO\-Regularized Probabilistic Framework for Contrastive Multimodal Learning](/posts/conference-aistats-2026-conference-paper-id-naderi26a-b7556a28eb/)*

标签：#对比学习 #混合专家模型 #多模态学习 #语音 #语音情感识别

评分：**6.9/10** | 创新 1.2/2 | 技术严谨 0.9/1.5 | 实验充分 0.9/1.5 | 清晰度 0.7/1 | 影响力 0.9/1.5 | 开源 1.0/1.5 | 可复现 0.3/0.5 | 工程/实践 1.0/1.5

排名：前50% | 文档类型：方法研究 | 主任务：#语音情感识别 | 主方法：#混合专家模型

会议来源：[官方记录](https://proceedings.mlr.press/v300/naderi26a.html) · [官方 PDF](https://raw.githubusercontent.com/mlresearch/v300/main/assets/naderi26a/naderi26a.pdf)

👥 **作者与机构**

- Habibeh Naderi：机构信息未能从会议 PDF 纯文本可靠映射
- Behrouz Haji Soleimani：机构信息未能从会议 PDF 纯文本可靠映射
- Stan Matwin：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

该工作处理音频文本对比预训练后的情感与情绪识别，输入为语音频谱块序列与转写文本，输出为共享空间中的跨模态表示与零样本或少样本分类，难点在于频谱词元数量远超文本且语义密度相反导致路由坍缩与模态偏置。方法先将音频频谱按32×32方形块展平线性投影，文本经句子切分（SentencePiece）嵌入并投影到同维，附加模态标记后拼接送入共享密集Transformer编码，再堆叠稀疏混合专家（Mixture of Experts，MoE）层按词元取前K专家加权求和，随后平均池化与模态特定映射得到向量并以双向对比损失对齐。路由侧为每个专家维护指数滑动平均更新的原型均值，以球形高斯衡量词元与原型距离作为似然，集合后验取模态内路由平均并以均匀先验的散度（Kullback\-Leibler，KL）保持多样性，再叠加熵形式的重要性与负载损失及Z损失与互信息（Mutual Information，MI）损失稳定门控。在LibriSpeech960预训练后直接评测的跨域设置中，大模型CoPRIME\-L/32在MOSEI 10样本情感准确率为78\.21%，在IEMOCAP 10样本为79\.70%，相对自实现语言图像混合专家基线LIMoE\-L/32分别高0\.28和1\.37个百分点；MOSEI微调后再测IEMOCAP的域内10样本准确率为82\.17%，低于直接监督CORECT所报84\.7%。结论仅在LibriSpeech加MOSEI与IEMOCAP内成立，未验证大规模噪声语料与开放词汇检索外推。训练在单卡NVIDIA GH200上完成，稀疏激活保持推理效率，但附录另有Titan RTX表述且未披露时长与吞吐实测。

🔗 **开源资源**

- 代码相关资源：<https://github.com/hanadk/coprime> — 链接可访问（HTTP 200）
- 第三方资源：<https://aclanthology.org/D18-2012/> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---
