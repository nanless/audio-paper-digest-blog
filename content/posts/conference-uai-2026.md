---
title: "uai-2026 论文深度解读"
date: 2026-09-11
draft: false
paper_digest_pipeline_owned: true
tags: ["对抗训练","领域适应","脑信号","言语神经解码"]
categories: ["uai-2026 论文"]
description: "共收录 1 篇 uai-2026 会议论文的 Reader 深度解读"
paper_digest_page_type: index
paper_digest_reader_quality: "reader-facing-v3"
paper_digest_taxonomy_contract: "paper-taxonomy-flat-tags-compat-v1"
paper_digest_taxonomy_selection_contract: "paper-taxonomy-selection-v1"
paper_digest_taxonomy_registry_version: "paper-taxonomy-v1"
paper_digest_taxonomy_registry_sha256: "15c82a567ce5a55dc1175684ed08b64c158558639d9c8fb822c9587ec32a8778"
paper_digest_taxonomy_scope: "aggregate-primary-task-counts"
---

# uai-2026 论文深度解读

本汇总收录 authenticated plan 选择集内全部 1 篇已完成分析、重标和单篇 staging 的论文。

🏷️ 标签说明：本期使用新版受控 taxonomy；热门方向只统计主任务。

## ⚡ 今日概览

✅ authenticated plan 入选 1 篇 → 🔬 深度分析、Reader 与页面投影完成

### 🏷️ 热门方向

| 方向（仅主任务） | 数量 |
|---|---:|
| #言语神经解码 | 1 篇 |

## 📊 论文评分排行榜

| 排名 | Reader 中文题目 | 英文题目 | 八维评分 | 分档 | 文档类型 | 主任务 |
|---:|---|---|---|---|---|---|
| 1 | [跨会话漂移下做脑到文本：用对抗对齐保留音素信息](/posts/conference-uai-2026-conference-paper-id-zhang26a-5ce4ff0071/) | [ALIGN: Adversarial Learning for Generalizable Speech Neuroprosthesis](/posts/conference-uai-2026-conference-paper-id-zhang26a-5ce4ff0071/) | **8.0/10** · 创新 1.5/2 · 技术严谨 1.2/1.5 · 实验充分 1.2/1.5 · 清晰度 0.8/1 · 影响力 1.0/1.5 · 开源 1.0/1.5 · 可复现 0.3/0.5 · 工程/实践 1.0/1.5 | 前25% | 方法研究 | #言语神经解码 |

---

## 📋 论文列表

### 1. [跨会话漂移下做脑到文本：用对抗对齐保留音素信息](/posts/conference-uai-2026-conference-paper-id-zhang26a-5ce4ff0071/)

> 英文题目：*[ALIGN: Adversarial Learning for Generalizable Speech Neuroprosthesis](/posts/conference-uai-2026-conference-paper-id-zhang26a-5ce4ff0071/)*

标签：#对抗训练 #领域适应 #脑信号 #言语神经解码

评分：**8.0/10** | 创新 1.5/2 | 技术严谨 1.2/1.5 | 实验充分 1.2/1.5 | 清晰度 0.8/1 | 影响力 1.0/1.5 | 开源 1.0/1.5 | 可复现 0.3/0.5 | 工程/实践 1.0/1.5

排名：前25% | 文档类型：方法研究 | 主任务：#言语神经解码 | 主方法：#对抗训练

会议来源：[官方记录](https://proceedings.mlr.press/v337/zhang26a.html) · [官方 PDF](https://raw.githubusercontent.com/mlresearch/v337/main/assets/zhang26a/zhang26a.pdf)

👥 **作者与机构**

- Zhanqi Zhang：机构信息未能从会议 PDF 纯文本可靠映射
- Shun Li：机构信息未能从会议 PDF 纯文本可靠映射
- Bernardo L\. Sabatini：机构信息未能从会议 PDF 纯文本可靠映射
- Mikio Christian Aoi：机构信息未能从会议 PDF 纯文本可靠映射
- Gal Mishne：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

颅内言语神经假体需从多通道神经时间序列直接解码音素序列再经语言模型生成文本，但跨记录会话的电极漂移与神经更新导致分布偏移，且监督仅在句子级序列层面而无逐帧标签。ALIGN先用Transformer或GRU编码器将神经序列映射为隐特征并以联结时序分类损失学习音素判别结构，再在中间层接入多头二分类域判别器并经梯度反转层反传梯度迫使编码器抹除会话可分信息，同时以时间拉伸增强模拟语速变化并与原试验混合训练，隐特征依次经音素分类与语言模型得到文本。相对单源自适应与依赖伪标签的测试时自适应，该设计在训练时以多源到无标注目标会话的对抗不变表示学习替代事后修正，因而提供更稳健的自适应起点。在12源4目标7测试划分的T12评测设置下，ALIGN的WER为46\.50±0\.46%，低于Transformer基线的60\.01±1\.44%。该结论适用边界受限于同被试跨会话且有无标注目标会话可用的半监督场景，跨被试与无目标数据的零样本泛化尚未验证。训练成本上域判别器在T12下仅增加3855个参数且不足编码器0\.1%，推理开销为零因判别器在推理时被移除。

🔗 **开源资源**

- 代码相关资源：<https://github.com/ZhanqiZhang66/align> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---
