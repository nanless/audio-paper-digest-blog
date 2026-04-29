---
title: "ICASSP 2026 - 实时处理 论文列表"
date: 2026-04-29
draft: false
tags: ["实时处理"]
categories: [icassp-2026]
description: "共 1 篇 ICASSP 2026 实时处理 方向论文"
hiddenInHomeList: true
---

# ICASSP 2026 - 实时处理

共 **1** 篇论文

[← 返回 ICASSP 2026 总览](/audio-paper-digest-blog/posts/icassp2026-summary/)

---

| 排名 | 论文 | 评分 | 分档 |
|------|------|------|------|
| 🥇 | [A Personalized Real-Time Proactive Voice Memory Assistant](/audio-paper-digest-blog/posts/2026-04-29-a-personalized-real-time-proactive-voice-memory) | 7.0分 | 前50% |

---

## 📋 论文详情

### 🥇 [A Personalized Real-Time Proactive Voice Memory Assistant](/audio-paper-digest-blog/posts/2026-04-29-a-personalized-real-time-proactive-voice-memory)

✅ **7.0/10** | 前50% | #实时处理 | #大语言模型 | #语音识别 #说话人识别

👥 **作者与机构**

- 第一作者：Hao Zhou (Samsung Research America, The Pennsylvania State University) - 根据作者列表顺序和标注“†”判断。
- 通讯作者：论文中未明确标注通讯作者。
- 作者列表：Hao Zhou¹²†, Md Mahbubur Rahman¹, Simon A. Lee¹³†, Baiying Lu¹⁴†, Juhyeon Lee¹⁵†, Cyrus Tanade¹, Megha Thukral¹⁶†, Md. Sazzad Hissain Khan⁷, Samsad Ul Islam⁷, Subramaniam Venkatraman¹, Sharanya Arcot Desai¹。
- 机构信息：¹Samsung Research America, ²The Pennsylvania State University, ³University of California, Los Angeles, ⁴Dartmouth, ⁵University of Massachusetts Amherst, ⁶Georgia Institute of Technology, ⁷Samsung Research Bangladesh。标注“†”表示工作在三星研究美国实习期间完成。

💡 **毒舌点评**

亮点：论文清晰地定义了“主人意识（owner-awareness）”和“最小干预”两个核心设计要求，并用一个优雅的“前导序列”初始化方法低成本地实现了前者，有效解决了记忆助手的隐私痛点。  
短板：系统号称面向记忆障碍人群，但所有实验均在健康人群和脚本对话上完成，缺乏真实目标用户和自由对话场景的验证，使得其宣称的“潜力”仍停留在假设阶段。

📌 **核心摘要**

1. 问题：对于患有痴呆症或记忆障碍的人（全球5700万），在实时对话中及时回忆细节至关重要。现有辅助技术依赖手动查询，缺乏对对话所有权的感知，易导致无关信息检索和隐私泄露，在多人动态对话中效果有限。
2. 方法核心：本文提出MemoryAids，一个主动式实时语音记忆助手。其核心流程包括：a) 低延迟主人检测：通过一次性的短语音“前导序列（preamble）”建立主人语音嵌入参考，并在实时对话中通过余弦相似度过滤非主人语音。参考嵌入会随时间迭代更新。b) 回忆时刻检测：采用大语言模型（LLM）的上下文学习，通过在提示中嵌入带有“回忆”或“事实”标签的对话示例，来实时判断当前对话是需要提供缺失细节（回忆时刻），还是需要更新知识库（新事实）。c) 检索/更新与提示：根据LLM的判断，从知识库中检索相关信息或更新知识库，并将简洁提示显示在用户的设备（如手机、智能眼镜）上。
3. 与已有方法相比新在哪里：根据表1，MemoryAids是首个同时具备主动性（无需查询）、主人意识（仅处理主人语音以保护隐私）和对话内摘要能力的记忆助手。其通过前导序列实现轻量级、可适应的主人识别，区别于传统复杂的说话人分离；利用LLM上下文学习统一了回忆检测、摘要和生成，简化了多阶段流水线。
4. 主要实验结果：
    - 在用户研究中（12人），主人语音检测召回率为90.7%，对非主人语音的特异性为98.8%。
    - 在LLAMAPIE数据集上，使用Gemini 2.5 Flash-Lite的回忆时刻检测准确率为92.7%，响应词错误率（WER）为5.8%。
    - 系统端到端平均延迟为926.9毫秒（<1秒），其中主人检测约53ms，ASR约80ms，检索增强生成（RAG）约794ms。
    - 用户主观评分（5分制）在“准确性”和“及时性”上均获得高分（图5）。
    - 与基线LLAMAPIE（检测93.5%，WER 7.8%）相比，MemoryAids（使用Gemini 2.5 Pro）在检测准确率（99.1%）和WER（5.9%）上均达到可比或更优水平（表2）。
5. 实际意义：该系统为记忆障碍人群提供了一种主动、隐私保护、低干扰的实时对话辅助工具，有助于维持对话流畅性和提升沟通效率，并有潜力集成到耳机、手机、智能眼镜等日常设备中。
6. 主要局限性：a) 验证场景受限：所有实验均在健康人群和脚本化对话上进行，未在目标用户群体（记忆障碍者）和真实自由对话场景中验证有效性。b) 实时性依赖云端：核心LLM推理依赖云端服务（Gemini），限制了离线、低延迟和隐私保护的潜力。c) 说话人检测简化：前导序列方法在极端噪声或说话人声音高度相似时可能失效，论文未深入讨论其鲁棒性边界。

---

