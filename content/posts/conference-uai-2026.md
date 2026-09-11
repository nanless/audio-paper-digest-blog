---
title: "uai-2026 论文深度解读"
date: 2026-09-11
draft: false
paper_digest_pipeline_owned: true
tags: ["对抗训练","领域适应","脑信号","言语神经解码","CTC"]
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
| 1 | [跨天解码为何会塌：ALIGN 用对抗对齐剥离会话线索](/posts/conference-uai-2026-conference-paper-id-zhang26a-5ce4ff0071/) | [ALIGN: Adversarial Learning for Generalizable Speech Neuroprosthesis](/posts/conference-uai-2026-conference-paper-id-zhang26a-5ce4ff0071/) | **6.5/10** · 创新 1.2/2 · 技术严谨 1.0/1.5 · 实验充分 1.2/1.5 · 清晰度 0.8/1 · 影响力 1.0/1.5 · 开源 0.0/1.5 · 可复现 0.3/0.5 · 工程/实践 1.0/1.5 | 前50% | 方法研究 | #言语神经解码 |

---

## 📋 论文列表

### 1. [跨天解码为何会塌：ALIGN 用对抗对齐剥离会话线索](/posts/conference-uai-2026-conference-paper-id-zhang26a-5ce4ff0071/)

> 英文题目：*[ALIGN: Adversarial Learning for Generalizable Speech Neuroprosthesis](/posts/conference-uai-2026-conference-paper-id-zhang26a-5ce4ff0071/)*

标签：#对抗训练 #CTC #领域适应 #脑信号 #言语神经解码

评分：**6.5/10** | 创新 1.2/2 | 技术严谨 1.0/1.5 | 实验充分 1.2/1.5 | 清晰度 0.8/1 | 影响力 1.0/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 1.0/1.5

排名：前50% | 文档类型：方法研究 | 主任务：#言语神经解码 | 主方法：#对抗训练

会议来源：[官方记录](https://proceedings.mlr.press/v337/zhang26a.html) · [官方 PDF](https://raw.githubusercontent.com/mlresearch/v337/main/assets/zhang26a/zhang26a.pdf)

👥 **作者与机构**

- Zhanqi Zhang：机构信息未能从会议 PDF 纯文本可靠映射
- Shun Li：机构信息未能从会议 PDF 纯文本可靠映射
- Bernardo L\. Sabatini：机构信息未能从会议 PDF 纯文本可靠映射
- Mikio Christian Aoi：机构信息未能从会议 PDF 纯文本可靠映射
- Gal Mishne：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

皮层内语音脑机接口需从每20ms分箱的多通道神经发放序列解码音素再经语言模型生成文本，难点是跨会话电极漂移、神经更替与策略变化导致分布偏移，而新会话仅有句子级转录而无逐帧标签。ALIGN先用Transformer特征编码器将神经时间序列映射为潜表征并以CTC目标训练音素分类器，使编码器输出直接进入后续解码与语言模型束搜索。接着多头会话判别器在编码器中间层表征上区分各源会话与无标签目标会话，并经梯度反转层迫使编码器抹除会话可识别结构而保留任务信息。同时时间拉伸增强在输入端对神经特征序列做大于1的时域重采样以模拟语速变化，推理时判别器移除并可选接DietCORP测试时自适应，这与仅靠伪标签自训练的基线形成显式会话不变对齐差异。在12源4目标7测试划分的T12评测设置下，ALIGN的WER为46\.50±0\.46%，低于Transformer基线WER的60\.01±1\.44%。从首个测试会话启动自适应后ALIGN维持在29%至33%区间而基线从第二个测试会话起升至90%以上，表明更鲁棒的起点抑制了误差放大。该结论适用边界受限于T12与T15两名受试者离线回顾评估，依赖无标签目标数据参与对齐，尚未验证完全不见目标数据的外推与在线闭环部署。训练附加参数量小于0\.1%且推理阶段判别器移除带来零额外延迟。

🔗 **开源资源**

本次未形成可展示的已核验资源记录，开放状态尚未核实。
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---
