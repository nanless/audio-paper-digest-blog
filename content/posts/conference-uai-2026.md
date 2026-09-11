---
title: "uai-2026 论文深度解读"
date: 2026-09-11
draft: false
paper_digest_pipeline_owned: true
tags: ["半监督学习","对抗训练","领域适应","脑信号","言语神经解码"]
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
| 1 | [跨会话漂移下保留音素判别力的对抗对齐：ALIGN 的中间层约束与时间拉伸](/posts/conference-uai-2026-conference-paper-id-zhang26a-5ce4ff0071/) | [ALIGN: Adversarial Learning for Generalizable Speech Neuroprosthesis](/posts/conference-uai-2026-conference-paper-id-zhang26a-5ce4ff0071/) | **6.3/10** · 创新 1.2/2 · 技术严谨 1.0/1.5 · 实验充分 1.1/1.5 · 清晰度 0.8/1 · 影响力 1.0/1.5 · 开源 0.0/1.5 · 可复现 0.3/0.5 · 工程/实践 0.9/1.5 | 前50% | 方法研究 | #言语神经解码 |

---

## 📋 论文列表

### 1. [跨会话漂移下保留音素判别力的对抗对齐：ALIGN 的中间层约束与时间拉伸](/posts/conference-uai-2026-conference-paper-id-zhang26a-5ce4ff0071/)

> 英文题目：*[ALIGN: Adversarial Learning for Generalizable Speech Neuroprosthesis](/posts/conference-uai-2026-conference-paper-id-zhang26a-5ce4ff0071/)*

标签：#对抗训练 #领域适应 #半监督学习 #脑信号 #言语神经解码

评分：**6.3/10** | 创新 1.2/2 | 技术严谨 1.0/1.5 | 实验充分 1.1/1.5 | 清晰度 0.8/1 | 影响力 1.0/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 0.9/1.5

排名：前50% | 文档类型：方法研究 | 主任务：#言语神经解码 | 主方法：#领域适应

会议来源：[官方记录](https://proceedings.mlr.press/v337/zhang26a.html) · [官方 PDF](https://raw.githubusercontent.com/mlresearch/v337/main/assets/zhang26a/zhang26a.pdf)

👥 **作者与机构**

- Zhanqi Zhang：机构信息未能从会议 PDF 纯文本可靠映射
- Shun Li：机构信息未能从会议 PDF 纯文本可靠映射
- Bernardo L\. Sabatini：机构信息未能从会议 PDF 纯文本可靠映射
- Mikio Christian Aoi：机构信息未能从会议 PDF 纯文本可靠映射
- Gal Mishne：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

皮层内语音脑机接口以每20ms分箱的多通道神经特征为输入，直接解码音素序列再经语言模型转写为词，难点是电极漂移、神经更替与用户策略变化导致跨记录天分布偏移，且监督仅在句子级而无帧级对齐。ALIGN先用5层因果Transformer编码器将神经时序映射为潜特征，输出同时送入CTC音素分类器与多头会话判别器。前者保留语音判别信息并经CTC实现序列级对齐，后者经梯度反转层迫使编码器抹除会话线索，其对抗损失施加于中间层并配合时间拉伸增强以应对表征漂移与语速时变。相比单源对齐与单纯测试时自适应，该设计在训练期显式学习多源会话不变表示，为语言模型伪标签自训练提供更稳健起点，避免漂移累积下误差放大。在T12的12源4目标7测试划分评测设置下，ALIGN在首个未见测试天的词错率WER为46\.50±0\.46%，低于Transformer基线的60\.01±1\.44%。叠加从首个测试天启动的测试时自适应后ALIGN稳定在29%至33%而基线从第二个测试天起崩溃至90%以上，T15上亦保持更低词错率。其结论适用边界受限于仅2名肌萎缩侧索硬化被试、至多86天跨度的回溯按天划分，尚未验证在线闭环与跨被试泛化；训练成本仅增加3855个判别器参数不足编码器0\.1%计算量，推理开销因判别器移除而为零额外延迟。

🔗 **开源资源**

本次未形成可展示的已核验资源记录，开放状态尚未核实。
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---
