---
title: "ICLR 2026 - 音频检索 #视频检索 论文列表"
date: 2026-05-02
draft: false
tags: ["音频检索 #视频检索"]
categories: [iclr-2026]
description: "共 1 篇 ICLR 2026 音频检索 #视频检索 方向论文"
hiddenInHomeList: true
---

# ICLR 2026 - 音频检索 #视频检索

共 **1** 篇论文

[← 返回 ICLR 2026 总览](/audio-paper-digest-blog/posts/iclr2026-summary/)

---

| 排名 | 论文 | 评分 | 分档 |
|------|------|------|------|
| 🥇 | [WAVE: Learning Unified & Versatile Audio-Visual Embeddings w](/audio-paper-digest-blog/posts/2026-05-02-wave-learning-unified-versatile-audio-visual) | 8.5分 | 前10% |

---

## 📋 论文详情

### 🥇 [WAVE: Learning Unified & Versatile Audio-Visual Embeddings with Multimodal LLM](/audio-paper-digest-blog/posts/2026-05-02-wave-learning-unified-versatile-audio-visual)

🔥 **8.5/10** | 前10% | #音频检索 #视频检索 | #对比学习 #多任务学习 | #多模态模型 #音频检索

👥 **作者与机构**

- 第一作者：Changli Tang (清华大学)
- 通讯作者：Chao Zhang (清华大学)
- 作者列表：Changli Tang (清华大学)， Qinfan Xiao (清华大学)， Ke Mei (腾讯微信视觉)， Tianyi Wang (腾讯微信视觉)， Fengyun Rao (腾讯微信视觉)， Chao Zhang (清华大学)

💡 **毒舌点评**

亮点：该工作勇敢地填补了基于LLM的统一音频-视觉嵌入的空白，其提出的分层特征融合与联合训练策略在多项检索和QA任务上取得了令人信服的SOTA结果，显示了强大的跨模态理解与对齐能力。
短板：模型的通用性在一定程度上受限于其基础架构（Qwen2.5-Omni），且论文中提出的“versatile audio-visual learning”新基准未在附录或实验部分详细说明其构成与评估方式，略显缺失。

🔗 **开源详情**

- 代码：提供GitHub链接：https://github.com/TCL606/WAVE。
- 模型权重：论文明确提到将发布模型检查点（Checkpoints）。
- 数据集：论文详细列出了训练所用数据集名称和规模，但未说明是否会开源这些整合后的数据集（特别是重标注后的Panda-70M子集）。
- Demo：未提及。
- 复现材料：提供了详尽的模型架构说明、训练规格（学习率、批次大小、硬件、时长）、关键超参数和完整的消融实验设置，复现指南清晰。
- 论文中引用的开源项目：Qwen2.5-Omni（基础模型）、BEATs（音频编码器）、LoRA（微调技术）、以及多个公开数据集（WavCaps， AudioCaps， Clotho， Panda-70M等）。

📌 **核心摘要**

1.  问题：现有基于LLM的多模态嵌入模型大多局限于视觉（尤其是静态图像），未能有效处理动态的音频和音视频模态，难以实现真正通用的跨模态表征空间。
2.  方法核心：提出WAVE，首个基于多模态LLM（Qwen2.5-Omni）的统一音频-视觉嵌入模型。核心包括：(1) 设计了双音频编码器（语音+环境声）和分层特征融合模块（聚合多层LLM隐藏状态）；(2) 采用联合多模态、多任务对比学习策略进行训练。
3.  新颖性：WAVE首次实现了文本、音频、静音视频和同步音视频到统一语义空间的映射，不仅能进行任意到任意的跨模态检索，还能生成依赖于用户指令的“提示感知”嵌入。
4.  主要实验结果：在MMEB-v2视频基准上取得SOTA，整体性能超越工业级模型Seed-1.6-Embedding；在音频检索（AudioCaps/Clotho）、音视频检索（VGGSound/MusicCaps）和音频问答（MMAU/MMAR）任务上均显著优于基线模型。关键消融实验显示，联合训练和分层特征融合均能带来稳定性能提升。
5.  实际意义：为跨模态任何到任何的应用（如统一音视频搜索、多模态问答）提供了强大的基础模型，展示了利用LLM构建通用多模态嵌入的巨大潜力。
6.  主要局限性：模型性能依赖于高质量的基础LLM（Qwen2.5-Omni）；论文中提及的“versatile audio-visual learning”新基准未提供详细信息；主要在英文数据集上评估，多语言能力未验证。

### 实验结果关键数据表：

表1：视频嵌入基准测试结果
| 模型 | MMEB-v2-Video Overall | CLS | QA | RET | MRET | LoVR text-to-clip | theme-to-clip |
| :--- | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| LamRA 7B | 35.0 | 39.3 | 42.6 | 24.3 | 32.8 | 62.9 | 60.2 |
| GME 7B | 38.4 | 37.4 | 50.4 | 28.4 | 37.0 | 51.2 | 43.9 |
| CAFe 7B | 42.4 | 35.8 | 58.7 | 34.4 | 39.5 | - | - |
| Seed-1.6-Embedding | 55.3 | 55.0 | 60.9 | 51.3 | 53.5 | - | - |
| WAVE 7B | 59.9 | 57.8 | 72.5 | 54.7 | 50.8 | 62.9 | 66.0 |

表2：音频与音视频嵌入基准测试结果
| 方法 | A-RET (AudioCaps) | A-RET (Clotho) | AV-RET (VGGSound) | AV-RET (MusicCaps) | A-QA (MMAU) | A-QA (MMAR) |
| :--- | :---: | :---: | :---: | :---: | :---: | :---: |
| 参考模型 (各领域最优) | 42.2 | 21.5 | 10.3 | 8.6 | 71.5 | 56.7 |
| encoder-only retrieval model (ours) | - | - | - | - | - | - |
| Qwen2.5-Omni 7B | - | - | - | - | - | - |
| WAVE 7B | 44.2 | 25.6 | 25.0 | 20.4 | 76.6 | 68.1 |

表3：提示感知嵌入对视频问答的影响
| 模型 | MMEB-v2-Video QA Average |
| :--- | :---: |
| Seed-1.6-Embedding | 60.9 |
| WAVE 7B, w/ a common prompt | 51.8 |
| WAVE 7B, w/ separate questions | 72.5 |

---

