---
title: "ICASSP 2026 - 音频描述 论文列表"
date: 2026-04-29
draft: false
tags: ["音频描述"]
categories: [icassp-2026]
description: "共 1 篇 ICASSP 2026 音频描述 方向论文"
hiddenInHomeList: true
---

# ICASSP 2026 - 音频描述

共 **1** 篇论文

[← 返回 ICASSP 2026 总览](/audio-paper-digest-blog/posts/icassp2026-summary/)

---

| 排名 | 论文 | 评分 | 分档 |
|------|------|------|------|
| 🥇 | [LAMB: LLM-Based Audio Captioning with Modality Gap Bridging ](/audio-paper-digest-blog/posts/2026-04-29-lamb-llm-based-audio-captioning-with-modality-gap) | 7.0分 | 前25% |

---

## 📋 论文详情

### 🥇 [LAMB: LLM-Based Audio Captioning with Modality Gap Bridging Via Cauchy-Schwarz Divergence](/audio-paper-digest-blog/posts/2026-04-29-lamb-llm-based-audio-captioning-with-modality-gap)

✅ **7.0/10** | 前25% | #音频描述 | #跨模态对齐 | #大语言模型 #音频场景理解

👥 **作者与机构**

请基于当前提供的论文内容尽量完整提取作者与机构信息，要求：
1. 明确标注第一作者（如论文可判断），否则写“未说明”
2. 明确标注通讯作者（如论文可判断），否则写“未说明”
3. 列出能确认的作者姓名及其所属机构（大学、实验室、公司）
4. 机构信息尽量具体到实验室或部门；如果文本里没有，就写到能确认的层级
5. 禁止猜测机构信息；无法确认时明确写“未说明”

输出格式示例：
- 第一作者：张三（清华大学计算机系）
- 通讯作者：李四（Google DeepMind）
- 作者列表：张三（清华大学计算机系）、李四（Google DeepMind）、王五（未说明）

- 第一作者：Hyeongkeun Lee（韩国科学技术院， KAIST）
- 通讯作者：未说明
- 作者列表：Hyeongkeun Lee（韩国科学技术院， KAIST）， Jongmin Choi（韩国科学技术院， KAIST）， KiHyun Nam（韩国科学技术院， KAIST）， Joon Son Chung（韩国科学技术院， KAIST）

💡 **毒舌点评**

这篇论文在技术上做得扎实，首次将柯西-散度引入音频-文本对齐并取得了SOTA，证明了其有效性。但整体框架更像是现有“音频编码器+LLM解码器”范式的一个精细化升级，而非颠覆性创新，且主要验证集中在AudioCaps一个数据集上，泛化性的说服力略显不足。

📌 **核心摘要**

这篇论文旨在解决基于大语言模型的自动音频描述（AAC）任务中存在的模态差距问题，即音频特征被简单投影到LLM嵌入空间后，与文本嵌入空间对齐不佳，限制了LLM的推理能力。方法核心是提出LAMB框架，其创新之处在于首次将柯西-散度引入AAC任务，设计了一个跨模态对齐器（Cross-Modal Aligner）来最小化音频与文本分布的距离，同时最大化互信息。此外，通过双流适配器（Two-Stream Adapter）提取更丰富的语义和时序音频特征，并利用令牌引导（Token Guide）在LLM词表空间内直接引导解码。在AudioCaps数据集上，LAMB在CIDEr、SPIDEr等指标上取得了显著提升（如CIDEr从SOTA的84.1提升到91.1），达到了新的技术水平。其实际意义在于证明了显式跨模态对齐对于释放LLM在音频理解任务中潜力的关键作用。主要局限性在于，尽���在AudioCaps上表现突出，但在更复杂、标注更多样的Clotho数据集上，性能提升相对有限，且其泛化性在其他音频任务上尚未得到验证。

---

