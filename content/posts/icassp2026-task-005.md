---
title: "ICASSP 2026 - 医疗AI 论文列表"
date: 2026-04-29
draft: false
tags: ["医疗AI"]
categories: [icassp-2026]
description: "共 1 篇 ICASSP 2026 医疗AI 方向论文"
hiddenInHomeList: true
---

# ICASSP 2026 - 医疗AI

共 **1** 篇论文

[← 返回 ICASSP 2026 总览](/audio-paper-digest-blog/posts/icassp2026-summary/)

---

| 排名 | 论文 | 评分 | 分档 |
|------|------|------|------|
| 🥇 | [SpeechCT-CLIP: Distilling Text-Image Knowledge to Speech for](/audio-paper-digest-blog/posts/2026-04-29-speechct-clip-distilling-text-image-knowledge-to) | 7.5分 | 前25% |

---

## 📋 论文详情

### 🥇 [SpeechCT-CLIP: Distilling Text-Image Knowledge to Speech for Voice-Native Multimodal CT Analysis](/audio-paper-digest-blog/posts/2026-04-29-speechct-clip-distilling-text-image-knowledge-to)

✅ **7.5/10** | 前25% | #医疗AI | #知识蒸馏 | #多模态模型 #对比学习

👥 **作者与机构**

- 第一作者：Lukas Buess（弗里德里希-亚历山大大学埃尔朗根-纽伦堡分校，模式识别实验室）
- 通讯作者：Lukas Buess (Lukas.Buess@fau.de)（弗里德里希-亚历山大大学埃尔朗根-纽伦堡分校，模式识别实验室）
- 作者列表：Lukas Buess（弗里德里希-亚历山大大学埃尔朗根-纽伦堡分校，模式识别实验室），Jan Geier（弗里德里希-亚历山大大学埃尔朗根-纽伦堡分校，模式识别实验室），David Bani-Harouni（慕尼黑工业大学，计算机辅助医疗程序组），Chantal Pellegrini（慕尼黑工业大学，计算机辅助医疗程序组），Matthias Keicher（慕尼黑工业大学，计算机辅助医疗程序组），Paula Andrea Perez-Toro（弗里德里希-亚历山大大学埃尔朗根-纽伦堡分校，模式识别实验室），Nassir Navab（慕尼黑工业大学，计算机辅助医疗程序组），Andreas Maier（弗里德里希-亚历山大大学埃尔朗根-纽伦堡分校，模式识别实验室），Tomas Arias-Vergara（弗里德里希-亚历山大大学埃尔朗根-纽伦堡分校，模式识别实验室）

#

💡 **毒舌点评**

这篇论文精准地切入了放射科医生“动口不动手”的报告习惯与现有AI“只认文字”之间的尴尬断层，为构建语音原生的医疗AI开了个好头，且数据集的合成与公开思路值得称赞。但其核心方法本质上是将强大的文本-影像CLIP模型作为“拐杖”来教一个语音模型，缺乏对语音本身独特信息（如语调、停顿）的深度挖掘与利用，使得“语音原生”的潜力尚未被充分释放。

#

🔗 **开源详情**

- 代码：论文中未提及代码链接。
- 模型权重：论文中未提及公开模型权重。
- 数据集：Speech-RATE数据集承诺在 Hugging Face 上公开发布（地址：`https://huggingface.co/datasets/lbuess/Speech-RATE`）。
- Demo：未提供在线演示。
- 复现材料：论文给出了基本的训练超参数（学习率、batch size、优化器、训练步数），但缺少详细配置、检查点及更完整的复现说明（如环境配置、数据预处理脚本）。蒸馏权重λ等关键超参数未提供。
- 论文中引用的开源项目：依赖的开源工具/模型包括：Kokoro TTS引擎、CT-RATE数据集、CT-CLIP模型、Whisper、HuBERT、wav2vec 2.0等预训练模型。

📌 **核心摘要**

1.  问题：临床放射学报告主要通过口述生成，但现有的医学多模态基础模型（如CT-CLIP）完全依赖书面文本进行训练，忽略了语音这一原生输入模态，且依赖ASR转录会引入错误并丢失信息。
2.  方法核心：提出SpeechCT-CLIP，一个将语音报告与3D CT体积对齐的对比学习模型。核心是构建一个大规模合成语音-CT对数据集Speech-RATE，并采用知识蒸馏策略，将一个预训练的文本-影像CLIP模型（教师）的知识迁移到语音-影像模型（学生）中。
3.  创新点：首次提出并实现了语音-CT的对比对齐；构建了首个大规模合成语音放射学报告数据集Speech-RATE；证明了从文本模型向语音模型进行知识蒸馏能有效弥合性能差距。
4.  实验结果：在零样本分类任务上，SpeechCT-CLIP的F1分数达到0.705，相比不使用知识蒸馏的基线（0.623）提升了13.2%，恢复了文本模型（CT-CLIP， F1=0.718）与语音基线之间88%的性能差距。在跨模态检索任务上，蒸馏也带来了显著提升（如R@100从0.291提升至0.377）。在外部数据集RAD-ChestCT上也验证了方法的泛化性。
5.  实际意义：为构建无需中间转录、直接以语音为输入的诊断支持工具铺平了道路，有望提升临床工作流程的效率和鲁棒性。
6.  主要局限性：1）用于训练的语音数据来自合成（TTS），与真实临床口述在韵律、噪声、口音等方面可能存在差距；2）模型在性能上仍略逊于以文本为输入的CLIP模型；3）论文未探讨模型对语音中额外信息（如犹豫、强调）的建模能力。

---

