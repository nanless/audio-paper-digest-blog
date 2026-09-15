---
title: "jep-2026 论文深度解读"
date: 2026-09-15
draft: false
paper_digest_pipeline_owned: true
tags: ["病理语音评估","大语言模型","低资源","端到端","对抗鲁棒性","多模态学习","多语言","发声与构音","高效推理","集成学习","教育","静默语音接口","开源工具","可解释性","口语理解","跨语言","零样本","领域适应","流式处理","鲁棒性","模型比较","模型剪枝","模型融合","脑信号","评测协议","迁移学习","强制对齐","人类参与评测","社会语音学","生成对抗网络","生理信号","时频分析","数据标注","数据集","数据集构建","数据增强","说话人分离标注","说话人识别","说话人验证","统计分析","文献综述方法","无监督学习","系统综述","向量量化","心理声学实验","信号处理","言语感知","言语障碍","医疗音频","音乐","音频分类","音频分离","音频交互","音频理解","音频深度伪造检测","音频问答","音视频","音视频交互","音视频理解","隐私保护","用户研究","语言识别","语言习得","语音","语音编辑","语音编码","语音合成","语音可懂度评估","语音克隆","语音情感识别","语音生物标志物","语音识别","语音属性识别","语音伪造检测","语音学与音系","语音质量评估","语音转换","预训练","韵律","知识蒸馏","重叠语音检测","主观评测","助听器","注意力机制","自监督学习","CNN","RNN","SFT"]
categories: ["jep-2026 论文"]
description: "共收录 118 篇 jep-2026 会议论文的 Reader 深度解读"
paper_digest_page_type: index
paper_digest_reader_quality: "reader-facing-v3"
paper_digest_taxonomy_contract: "paper-taxonomy-flat-tags-compat-v1"
paper_digest_taxonomy_selection_contract: "paper-taxonomy-selection-v1"
paper_digest_taxonomy_registry_version: "paper-taxonomy-v1"
paper_digest_taxonomy_registry_sha256: "15c82a567ce5a55dc1175684ed08b64c158558639d9c8fb822c9587ec32a8778"
paper_digest_taxonomy_scope: "aggregate-primary-task-counts"
---

# jep-2026 论文深度解读

本汇总收录 authenticated plan 选择集内全部 118 篇已完成分析、重标和单篇 staging 的论文。

🏷️ 标签说明：本期使用新版受控 taxonomy；热门方向只统计主任务。

## ⚡ 今日概览

✅ authenticated plan 入选 118 篇 → 🔬 深度分析、Reader 与页面投影完成

### 🏷️ 热门方向

| 方向（仅主任务） | 数量 |
|---|---:|
| #语音属性识别 | 40 篇 |
| #语音识别 | 14 篇 |
| #病理语音评估 | 12 篇 |
| #语音可懂度评估 | 10 篇 |
| #音频分类 | 6 篇 |
| #语言识别 | 4 篇 |
| #口语理解 | 3 篇 |
| #强制对齐 | 3 篇 |
| #说话人验证 | 3 篇 |
| #语音情感识别 | 3 篇 |
| #说话人识别 | 2 篇 |
| #音频理解 | 2 篇 |
| #音频深度伪造检测 | 2 篇 |
| #语音合成 | 2 篇 |
| #静默语音接口 | 1 篇 |
| #音频分离 | 1 篇 |
| #音频交互 | 1 篇 |
| #音频问答 | 1 篇 |
| #音视频交互 | 1 篇 |
| #音视频理解 | 1 篇 |
| #语音编辑 | 1 篇 |
| #语音编码 | 1 篇 |
| #语音伪造检测 | 1 篇 |
| #语音质量评估 | 1 篇 |
| #语音转换 | 1 篇 |
| #重叠语音检测 | 1 篇 |

## 📊 论文评分排行榜

| 排名 | Reader 中文题目 | 英文题目 | 八维评分 | 分档 | 文档类型 | 主任务 |
|---:|---|---|---|---|---|---|
| 1 | [八类法语口音为何难分：小而偏的训练集与人类听辨上限共同设限](/posts/conference-jep-2026-conference-paper-id-fabre26-jep-163727d529/) | [Construction d'un jeu de données pour l'évaluation de la classification des accents français : où en sommes\-nous ?](/posts/conference-jep-2026-conference-paper-id-fabre26-jep-163727d529/) | **7.2/10** · 创新 1.2/2 · 技术严谨 1.0/1.5 · 实验充分 1.0/1.5 · 清晰度 0.7/1 · 影响力 0.8/1.5 · 开源 1.2/1.5 · 可复现 0.3/0.5 · 工程/实践 1.0/1.5 | 前50% | 数据集与基准 | #语言识别 |
| 2 | [用无标注空管语音改造 Whisper 编码器：BEARD 为何要把自监督放在中间层并用蒸馏拴住解码器](/posts/conference-jep-2026-conference-paper-id-bagat26-jep-f3d897c9ab/) | [Adaptation de domaine de Whisper à l'aide de l'apprentissage auto\-supervisé](/posts/conference-jep-2026-conference-paper-id-bagat26-jep-f3d897c9ab/) | **7.1/10** · 创新 1.3/2 · 技术严谨 1.0/1.5 · 实验充分 1.0/1.5 · 清晰度 0.7/1 · 影响力 0.8/1.5 · 开源 1.0/1.5 · 可复现 0.3/0.5 · 工程/实践 1.0/1.5 | 前50% | 方法研究 | #语音识别 |
| 3 | [弱擦音还是强辅音：马赛语 Arusa 方言 /w/ 的时长与收紧度如何撑起 fortis 对立](/posts/conference-jep-2026-conference-paper-id-ghio26-jep-ccd6adb18a/) | [Évidence acoustique du contraste fortis/lenis de l’approximante labio\-vélaire /w/ en Maa Arusa](/posts/conference-jep-2026-conference-paper-id-ghio26-jep-ccd6adb18a/) | **7.1/10** · 创新 1.4/2 · 技术严谨 1.0/1.5 · 实验充分 1.0/1.5 · 清晰度 0.8/1 · 影响力 0.8/1.5 · 开源 1.0/1.5 · 可复现 0.3/0.5 · 工程/实践 0.8/1.5 | 前50% | 应用研究 | #语音属性识别 |
| 4 | [重音走出重读音节：意大利语中元音到元音协同发音的抵抗与手势缪模型](/posts/conference-jep-2026-conference-paper-id-orrico26-jep-851426ff68/) | [L’accent au\-delà des frontières syllabiques : coarticulation V\-à\-V et geste\-µ en italien](/posts/conference-jep-2026-conference-paper-id-orrico26-jep-851426ff68/) | **7.1/10** · 创新 1.4/2 · 技术严谨 1.2/1.5 · 实验充分 1.1/1.5 · 清晰度 0.8/1 · 影响力 0.8/1.5 · 开源 1.5/1.5 · 可复现 0.3/0.5 · 工程/实践 0.0/1.5 | 前50% | 理论研究 | #语音属性识别 |
| 5 | [位置不同，对立的作用就不同：法语功能负荷的位置依赖解读](/posts/conference-jep-2026-conference-paper-id-audibert26b-jep-83f7dfdd48/) | [Variation de la charge fonctionnelle en français en fonction de la position dans le mot et la syllabe](/posts/conference-jep-2026-conference-paper-id-audibert26b-jep-83f7dfdd48/) | **6.8/10** · 创新 1.2/2 · 技术严谨 1.0/1.5 · 实验充分 0.9/1.5 · 清晰度 0.7/1 · 影响力 0.7/1.5 · 开源 1.2/1.5 · 可复现 0.3/0.5 · 工程/实践 0.8/1.5 | 前50% | 方法研究 | #语音属性识别 |
| 6 | [都用边界和重音断句，为何运动性言语障碍的切分轮廓仍然不同](/posts/conference-jep-2026-conference-paper-id-gindre26-jep-658561c72e/) | [Exploration du phrasé prosodique pour la caractérisation des troubles moteurs de la parole](/posts/conference-jep-2026-conference-paper-id-gindre26-jep-658561c72e/) | **6.6/10** · 创新 1.3/2 · 技术严谨 1.1/1.5 · 实验充分 1.1/1.5 · 清晰度 0.8/1 · 影响力 0.5/1.5 · 开源 1.0/1.5 · 可复现 0.3/0.5 · 工程/实践 0.5/1.5 | 前50% | 应用研究 | #病理语音评估 |
| 7 | [普通话拼音 r 是塞擦类的阻塞音还是边音类的响音：从知觉修复看响度层级](/posts/conference-jep-2026-conference-paper-id-jiang26-jep-c90b63c654/) | [Le /r/ mandarin se comporte\-t\-il comme une obstruante ou comme une liquide ?](/posts/conference-jep-2026-conference-paper-id-jiang26-jep-c90b63c654/) | **6.5/10** · 创新 1.3/2 · 技术严谨 1.2/1.5 · 实验充分 0.8/1.5 · 清晰度 0.8/1 · 影响力 0.8/1.5 · 开源 1.5/1.5 · 可复现 0.1/0.5 · 工程/实践 0.0/1.5 | 前50% | 理论研究 | #语音属性识别 |
| 8 | [预训练语言越多越好吗：语音基础模型做音频伪造检测的对照解读](/posts/conference-jep-2026-conference-paper-id-tran26c-jep-b0854d00f6/) | [Évaluation de la robustesse des modèles de fondation pour la détection de deepfakes audio : Influence de la diversité linguistique des données de pré\-entraînement](/posts/conference-jep-2026-conference-paper-id-tran26c-jep-b0854d00f6/) | **6.5/10** · 创新 0.8/2 · 技术严谨 1.0/1.5 · 实验充分 1.1/1.5 · 清晰度 0.7/1 · 影响力 0.8/1.5 · 开源 1.0/1.5 · 可复现 0.3/0.5 · 工程/实践 0.8/1.5 | 前50% | 应用研究 | #音频深度伪造检测 |
| 9 | [用同一套国际音标序列做语种识别：可解释的音位组合为何仍摆脱不了语言偏置](/posts/conference-jep-2026-conference-paper-id-iradukunda26-jep-61d27abaa5/) | [Identification de la langue par modélisation phonotactique de séquences en API](/posts/conference-jep-2026-conference-paper-id-iradukunda26-jep-61d27abaa5/) | **6.4/10** · 创新 1.0/2 · 技术严谨 1.2/1.5 · 实验充分 1.2/1.5 · 清晰度 0.8/1 · 影响力 0.9/1.5 · 开源 0.0/1.5 · 可复现 0.3/0.5 · 工程/实践 1.0/1.5 | 前50% | 应用研究 | #语言识别 |
| 10 | [重叠语音靠什么被认出来：短时起伏与长时交互线索的分工](/posts/conference-jep-2026-conference-paper-id-lebourdais26-jep-8714939949/) | [Propriétés acoustiques et temporelles dans un détecteur de parole superposée\.](/posts/conference-jep-2026-conference-paper-id-lebourdais26-jep-8714939949/) | **6.4/10** · 创新 1.2/2 · 技术严谨 1.2/1.5 · 实验充分 0.7/1.5 · 清晰度 0.7/1 · 影响力 0.8/1.5 · 开源 1.0/1.5 · 可复现 0.3/0.5 · 工程/实践 0.5/1.5 | 前50% | 方法研究 | #重叠语音检测 |
| 11 | [大模型造数据、小模型干活：库尔德语低资源语音识别的节俭路线](/posts/conference-jep-2026-conference-paper-id-mohammadamini26-jep-ce5803e0ad/) | [Apprentissage de modèles frugaux pour les langues peu dotées à partir de larges modèles d'ASR](/posts/conference-jep-2026-conference-paper-id-mohammadamini26-jep-ce5803e0ad/) | **6.4/10** · 创新 1.2/2 · 技术严谨 1.2/1.5 · 实验充分 1.0/1.5 · 清晰度 0.7/1 · 影响力 0.8/1.5 · 开源 0.0/1.5 · 可复现 0.3/0.5 · 工程/实践 1.2/1.5 | 前50% | 应用研究 | #语音识别 |
| 12 | [只有 32 小时班巴拉语数据时，把解码器对折而不砍掉](/posts/conference-jep-2026-conference-paper-id-sy26-jep-4e68cf8823/) | [BaldWhisper: réduction des coûts par élagage et fusion des couches](/posts/conference-jep-2026-conference-paper-id-sy26-jep-4e68cf8823/) | **6.4/10** · 创新 1.2/2 · 技术严谨 1.2/1.5 · 实验充分 0.9/1.5 · 清晰度 0.7/1 · 影响力 0.9/1.5 · 开源 0.0/1.5 · 可复现 0.3/0.5 · 工程/实践 1.2/1.5 | 前50% | 方法研究 | #语音识别 |
| 13 | [常州吴语是左重还是右重：名词短语的部分左主导与动词短语的协同发音之辨](/posts/conference-jep-2026-conference-paper-id-chen26-jep-69dcf5c107/) | [Étude acoustique du sandhi tonal de la langue wu de Changzhou](/posts/conference-jep-2026-conference-paper-id-chen26-jep-69dcf5c107/) | **6.3/10** · 创新 1.2/2 · 技术严谨 1.1/1.5 · 实验充分 0.9/1.5 · 清晰度 0.8/1 · 影响力 0.7/1.5 · 开源 1.0/1.5 · 可复现 0.3/0.5 · 工程/实践 0.3/1.5 | 前50% | 理论研究 | #语音属性识别 |
| 14 | [流式约束下自注意力退化为局部算子：去掉它为何词错误率几乎不变](/posts/conference-jep-2026-conference-paper-id-dkhissi26-jep-9bd6350666/) | [L'auto\-attention est\-elle pertinente pour la reconnaissance automatique de la parole en streaming?](/posts/conference-jep-2026-conference-paper-id-dkhissi26-jep-9bd6350666/) | **6.2/10** · 创新 1.2/2 · 技术严谨 1.2/1.5 · 实验充分 1.0/1.5 · 清晰度 0.6/1 · 影响力 0.9/1.5 · 开源 0.0/1.5 · 可复现 0.3/0.5 · 工程/实践 1.0/1.5 | 前50% | 方法研究 | #语音识别 |
| 15 | [广播里混着音乐和重播，编码器该吃什么：法语语音自监督的数据选择对照](/posts/conference-jep-2026-conference-paper-id-pelloin26-jep-54934b9504/) | [Effets de la sélection des données pour l'apprentissage de modèles autosupervisés audio pour le français](/posts/conference-jep-2026-conference-paper-id-pelloin26-jep-54934b9504/) | **6.2/10** · 创新 1.2/2 · 技术严谨 1.2/1.5 · 实验充分 1.0/1.5 · 清晰度 0.7/1 · 影响力 1.0/1.5 · 开源 0.2/1.5 · 可复现 0.1/0.5 · 工程/实践 0.8/1.5 | 前50% | 数据集与基准 | #语音识别 |
| 16 | [少资源语言先补数据质量：LELD 用混合转写把捷克语等三语 ASR 做上去](/posts/conference-jep-2026-conference-paper-id-pettirossi26-jep-26ce4fb389/) | [LELD : Un corpus de parole multilingue pour la reconnaissance automatique de la parole dans des langues européennes peu dotées](/posts/conference-jep-2026-conference-paper-id-pettirossi26-jep-26ce4fb389/) | **6.2/10** · 创新 1.2/2 · 技术严谨 1.2/1.5 · 实验充分 0.9/1.5 · 清晰度 0.8/1 · 影响力 1.0/1.5 · 开源 0.0/1.5 · 可复现 0.1/0.5 · 工程/实践 1.0/1.5 | 前50% | 数据集与基准 | #语音识别 |
| 17 | [跳过转写直接做摘要：用句子向量把多语言语音送进法语摘要器](/posts/conference-jep-2026-conference-paper-id-chellaf26-jep-332240e3a2/) | [Résumé automatique abstractif de la parole de bout en bout, bimodal et translingue](/posts/conference-jep-2026-conference-paper-id-chellaf26-jep-332240e3a2/) | **6.0/10** · 创新 1.2/2 · 技术严谨 1.2/1.5 · 实验充分 0.9/1.5 · 清晰度 0.8/1 · 影响力 0.8/1.5 · 开源 0.0/1.5 · 可复现 0.3/0.5 · 工程/实践 0.8/1.5 | 前50% | 方法研究 | #口语理解 |
| 18 | [女声真的变低了吗：用贝叶斯证据检验年龄、性别与年代对基频的影响](/posts/conference-jep-2026-conference-paper-id-devauchelle26-jep-d87f60becb/) | [Une approche bayésienne pour modéliser l'évolution diachronique de la voix comme marqueur du genre en France](/posts/conference-jep-2026-conference-paper-id-devauchelle26-jep-d87f60becb/) | **6.0/10** · 创新 1.2/2 · 技术严谨 1.2/1.5 · 实验充分 1.0/1.5 · 清晰度 0.8/1 · 影响力 0.7/1.5 · 开源 0.0/1.5 · 可复现 0.3/0.5 · 工程/实践 0.8/1.5 | 前50% | 方法研究 | #语音属性识别 |
| 19 | [把 ResNet 做大做宽之后，说话人验证的误差降了多少，能耗又涨了多少](/posts/conference-jep-2026-conference-paper-id-leguillier26-jep-c4b0b4e75f/) | [Analyse de la consommation énergétique et des émissions de carbone pour l’entraînement d’un modèle neuronal de vérification du locuteur](/posts/conference-jep-2026-conference-paper-id-leguillier26-jep-c4b0b4e75f/) | **6.0/10** · 创新 0.8/2 · 技术严谨 1.2/1.5 · 实验充分 0.9/1.5 · 清晰度 0.8/1 · 影响力 0.8/1.5 · 开源 0.0/1.5 · 可复现 0.3/0.5 · 工程/实践 1.2/1.5 | 前50% | 应用研究 | #说话人验证 |
| 20 | [归一化后还能听出发声有多用力吗：从频谱过拟合到自监督表示的跨录音条件泛化](/posts/conference-jep-2026-conference-paper-id-letellier26-jep-a6e77c33d6/) | [Estimation robuste de l'intensité vocale à l'aide de représentations auto\-supervisées de la parole](/posts/conference-jep-2026-conference-paper-id-letellier26-jep-a6e77c33d6/) | **6.0/10** · 创新 1.2/2 · 技术严谨 1.1/1.5 · 实验充分 1.1/1.5 · 清晰度 0.8/1 · 影响力 0.7/1.5 · 开源 0.0/1.5 · 可复现 0.3/0.5 · 工程/实践 0.8/1.5 | 前50% | 方法研究 | #语音属性识别 |
| 21 | [不会写脚本也能用 PsyToolkit：DYE 把感知评测做成图形化拼装](/posts/conference-jep-2026-conference-paper-id-audibert26c-jep-775fc92fcb/) | [DYE &\#40;Design Your Experiment&\#41; : une interface graphique en ligne pour la conception d’évaluation perceptives avec PsyToolkit](/posts/conference-jep-2026-conference-paper-id-audibert26c-jep-775fc92fcb/) | **5.9/10** · 创新 0.8/2 · 技术严谨 1.0/1.5 · 实验充分 0.3/1.5 · 清晰度 0.7/1 · 影响力 0.6/1.5 · 开源 1.2/1.5 · 可复现 0.3/0.5 · 工程/实践 1.0/1.5 | 前50% | 系统技术报告 | #语音可懂度评估 |
| 22 | [合成儿童语音该放在哪一步：只做自监督预训练才增益的儿童语音识别](/posts/conference-jep-2026-conference-paper-id-labbe26-jep-a004349b69/) | [Apport des données synthétiques dans l’apprentissage auto\-supervisé pour la reconnaissance de la parole d’enfants](/posts/conference-jep-2026-conference-paper-id-labbe26-jep-a004349b69/) | **5.9/10** · 创新 1.2/2 · 技术严谨 1.0/1.5 · 实验充分 1.0/1.5 · 清晰度 0.7/1 · 影响力 0.7/1.5 · 开源 0.0/1.5 · 可复现 0.3/0.5 · 工程/实践 1.0/1.5 | 前50% | 应用研究 | #语音识别 |
| 23 | [小块流式缺未来信息时，用过去帧蒸馏出的语义向量增强当前帧](/posts/conference-jep-2026-conference-paper-id-dkhissi26b-jep-4f89be605a/) | [Injection de l'information sémantique au sein des modèles de la reconnaissance automatique de la parole en streaming](/posts/conference-jep-2026-conference-paper-id-dkhissi26b-jep-4f89be605a/) | **5.8/10** · 创新 1.2/2 · 技术严谨 1.0/1.5 · 实验充分 1.0/1.5 · 清晰度 0.7/1 · 影响力 0.8/1.5 · 开源 0.0/1.5 · 可复现 0.3/0.5 · 工程/实践 0.8/1.5 | 前50% | 方法研究 | #语音识别 |
| 24 | [不重建声音本身：在潜空间里预测被遮住的法语语音](/posts/conference-jep-2026-conference-paper-id-le26-jep-71381ada03/) | [Encodeurs autosupervisés unifiés entre les modalités : focus sur la parole en français](/posts/conference-jep-2026-conference-paper-id-le26-jep-71381ada03/) | **5.8/10** · 创新 1.0/2 · 技术严谨 1.0/1.5 · 实验充分 1.0/1.5 · 清晰度 0.7/1 · 影响力 1.0/1.5 · 开源 0.0/1.5 · 可复现 0.1/0.5 · 工程/实践 1.0/1.5 | 前50% | 模型报告 | #语音识别 |
| 25 | [把大语言模型接到 Whisper 上，为什么朗读提升了、管制通话却没有？](/posts/conference-jep-2026-conference-paper-id-aitbachir26-jep-7939b0bef5/) | [Étude de l'association de grands modèles de langage à Whisper dans le domaine du contrôle de la circulation aérienne](/posts/conference-jep-2026-conference-paper-id-aitbachir26-jep-7939b0bef5/) | **5.7/10** · 创新 1.0/2 · 技术严谨 1.2/1.5 · 实验充分 1.0/1.5 · 清晰度 0.8/1 · 影响力 0.6/1.5 · 开源 0.0/1.5 · 可复现 0.3/0.5 · 工程/实践 0.8/1.5 | 前50% | 应用研究 | #语音识别 |
| 26 | [朗读中的时间组织：帕金森构音障碍的两个维度与五个无监督轮廓](/posts/conference-jep-2026-conference-paper-id-deghorain26-jep-1d078a31e2/) | [Organisation temporelle de la parole lue dans le cadre de la maladie de Parkinson : une étude exploratoire](/posts/conference-jep-2026-conference-paper-id-deghorain26-jep-1d078a31e2/) | **5.7/10** · 创新 1.0/2 · 技术严谨 1.0/1.5 · 实验充分 0.7/1.5 · 清晰度 0.8/1 · 影响力 0.4/1.5 · 开源 1.0/1.5 · 可复现 0.3/0.5 · 工程/实践 0.5/1.5 | 前50% | 应用研究 | #病理语音评估 |
| 27 | [把百科知识换成一张图：用句子验证任务测言语可理解度](/posts/conference-jep-2026-conference-paper-id-ghio26b-jep-539dccbbd6/) | [Elaboration d’un test de compréhensibilité de la parole utilisant une tâche de vérification de phrases avec support iconographique](/posts/conference-jep-2026-conference-paper-id-ghio26b-jep-539dccbbd6/) | **5.7/10** · 创新 1.2/2 · 技术严谨 1.1/1.5 · 实验充分 0.8/1.5 · 清晰度 0.8/1 · 影响力 0.7/1.5 · 开源 0.0/1.5 · 可复现 0.3/0.5 · 工程/实践 0.8/1.5 | 前50% | 应用研究 | #语音可懂度评估 |
| 28 | [元音空间越大越自然吗：用法语共振峰距离诊断语音合成自然度](/posts/conference-jep-2026-conference-paper-id-miniconi26-jep-23b6898ff0/) | [Indicateurs phonétiques fondés sur les formants pour l’évaluation de la qualité des systèmes TTS](/posts/conference-jep-2026-conference-paper-id-miniconi26-jep-23b6898ff0/) | **5.7/10** · 创新 1.2/2 · 技术严谨 1.1/1.5 · 实验充分 0.9/1.5 · 清晰度 0.8/1 · 影响力 0.7/1.5 · 开源 0.0/1.5 · 可复现 0.3/0.5 · 工程/实践 0.7/1.5 | 前50% | 方法研究 | #语音质量评估 |
| 29 | [保留高维语音表示，只用一层分类器：KAN 为何比全连接更省且更稳](/posts/conference-jep-2026-conference-paper-id-tran26b-jep-bad9b03962/) | [Simplifier la détection des deepfakes audio avec les réseaux de Kolmogorov\-Arnold](/posts/conference-jep-2026-conference-paper-id-tran26b-jep-bad9b03962/) | **5.7/10** · 创新 1.0/2 · 技术严谨 1.0/1.5 · 实验充分 1.0/1.5 · 清晰度 0.7/1 · 影响力 0.9/1.5 · 开源 0.0/1.5 · 可复现 0.3/0.5 · 工程/实践 0.8/1.5 | 前50% | 方法研究 | #语音伪造检测 |
| 30 | [没有统一赢家：四类法语语音识别在自发与病理语音上的错法不同](/posts/conference-jep-2026-conference-paper-id-benamor26-jep-763c8cfeac/) | [Évaluation comparative de modèles de reconnaissance automatique de la parole sur des corpus français sains et pathologiques](/posts/conference-jep-2026-conference-paper-id-benamor26-jep-763c8cfeac/) | **5.6/10** · 创新 1.0/2 · 技术严谨 1.0/1.5 · 实验充分 1.0/1.5 · 清晰度 0.7/1 · 影响力 0.8/1.5 · 开源 0.0/1.5 · 可复现 0.1/0.5 · 工程/实践 1.0/1.5 | 前50% | 应用研究 | #语音识别 |
| 31 | [喉塞音不是音位，却能标记焦点：法语产出与感知的双重证据](/posts/conference-jep-2026-conference-paper-id-depaolis26-jep-37216037dd/) | [Glottalisation et focus en français: perception et production](/posts/conference-jep-2026-conference-paper-id-depaolis26-jep-37216037dd/) | **5.6/10** · 创新 1.3/2 · 技术严谨 1.1/1.5 · 实验充分 1.0/1.5 · 清晰度 0.8/1 · 影响力 0.8/1.5 · 开源 0.0/1.5 · 可复现 0.3/0.5 · 工程/实践 0.3/1.5 | 前50% | 应用研究 | #音频问答 |
| 32 | [照护语音不是统一变温柔：两组护理员用不同声学策略进入照护情境](/posts/conference-jep-2026-conference-paper-id-kegltourneix26-jep-8413164e66/) | [Stratégies individuelles dans la parole des soignants envers les personnes âgées en EHPAD](/posts/conference-jep-2026-conference-paper-id-kegltourneix26-jep-8413164e66/) | **5.6/10** · 创新 1.2/2 · 技术严谨 1.0/1.5 · 实验充分 0.9/1.5 · 清晰度 0.7/1 · 影响力 0.5/1.5 · 开源 0.0/1.5 · 可复现 0.3/0.5 · 工程/实践 1.0/1.5 | 前50% | 应用研究 | #语音属性识别 |
| 33 | [用伪词堵住语言补偿之后，可懂度评分还变吗](/posts/conference-jep-2026-conference-paper-id-lalain26-jep-df38733db2/) | [Variabilité de l'évaluation perceptive de l'intelligibilité par Décodage Acoustico Phonétique?](/posts/conference-jep-2026-conference-paper-id-lalain26-jep-df38733db2/) | **5.6/10** · 创新 1.0/2 · 技术严谨 1.0/1.5 · 实验充分 1.0/1.5 · 清晰度 0.8/1 · 影响力 0.5/1.5 · 开源 0.0/1.5 · 可复现 0.3/0.5 · 工程/实践 1.0/1.5 | 前50% | 应用研究 | #语音可懂度评估 |
| 34 | [打码说话为何变慢：法语补码口语中音段时长与手动键结构的协同](/posts/conference-jep-2026-conference-paper-id-lancien26-jep-86d7cc202f/) | [Relations entre les durées segmentales et les clés en Langue française Parlée Complétée](/posts/conference-jep-2026-conference-paper-id-lancien26-jep-86d7cc202f/) | **5.6/10** · 创新 1.0/2 · 技术严谨 1.0/1.5 · 实验充分 0.6/1.5 · 清晰度 0.6/1 · 影响力 0.4/1.5 · 开源 1.2/1.5 · 可复现 0.3/0.5 · 工程/实践 0.5/1.5 | 前50% | 应用研究 | #强制对齐 |
| 35 | [发声时也在场的外激扫频：唇端阻抗分离如何同时拿下共振频率与带宽](/posts/conference-jep-2026-conference-paper-id-launet26-jep-00099a97b8/) | [Mesure des résonances du conduit vocal pendant la production de sons voisés : expérimentation sur maquettes](/posts/conference-jep-2026-conference-paper-id-launet26-jep-00099a97b8/) | **5.6/10** · 创新 1.2/2 · 技术严谨 1.0/1.5 · 实验充分 0.9/1.5 · 清晰度 0.7/1 · 影响力 0.7/1.5 · 开源 0.0/1.5 · 可复现 0.3/0.5 · 工程/实践 0.8/1.5 | 前50% | 方法研究 | #音频分离 |
| 36 | [稀疏了却不一定可解释：说话人入侵测试检验维度可解释性](/posts/conference-jep-2026-conference-paper-id-saget26-jep-d3897742a3/) | [Évaluation perceptive de l'interprétabilité dimensionnelle dans les représentations parcimonieuses du locuteur](/posts/conference-jep-2026-conference-paper-id-saget26-jep-d3897742a3/) | **5.6/10** · 创新 1.3/2 · 技术严谨 1.0/1.5 · 实验充分 0.9/1.5 · 清晰度 0.7/1 · 影响力 0.8/1.5 · 开源 0.0/1.5 · 可复现 0.3/0.5 · 工程/实践 0.6/1.5 | 前50% | 方法研究 | #说话人验证 |
| 37 | [急救电话里的情绪不等于病情：27 项语音辅助分诊研究的任务、证据与落地差距](/posts/conference-jep-2026-conference-paper-id-stasica26-jep-8f5692d7f9/) | [Quand l’IA écoute l’urgence : revue systématique des approches automatiques d’analyse de la voix et de la parole dans la régulation médicale des appels d’urgence](/posts/conference-jep-2026-conference-paper-id-stasica26-jep-8f5692d7f9/) | **5.6/10** · 创新 1.2/2 · 技术严谨 0.9/1.5 · 实验充分 0.9/1.5 · 清晰度 0.7/1 · 影响力 0.9/1.5 · 开源 0.0/1.5 · 可复现 0.3/0.5 · 工程/实践 0.7/1.5 | 前50% | 综述 | #语音情感识别 |
| 38 | [元音动、辅音稳：任务切换如何撕开法语二语与三语的节奏差异](/posts/conference-jep-2026-conference-paper-id-yang26-jep-1ecffabb64/) | [L’organisation rythmique du français L2 vs L3 chez les apprenants sinophones et les effets de la tâche](/posts/conference-jep-2026-conference-paper-id-yang26-jep-1ecffabb64/) | **5.6/10** · 创新 1.2/2 · 技术严谨 1.2/1.5 · 实验充分 1.0/1.5 · 清晰度 0.8/1 · 影响力 0.6/1.5 · 开源 0.0/1.5 · 可复现 0.3/0.5 · 工程/实践 0.5/1.5 | 前50% | 应用研究 | #语音属性识别 |
| 39 | [文件名对不上内容、全员标注缺失：把 MOCHA\-TIMIT 九个说话人重新对齐](/posts/conference-jep-2026-conference-paper-id-yuan26-jep-ba6f0dd61c/) | [Alignement Forcé Multi\-Niveaux pour le Corpus MOCHA\-TIMIT](/posts/conference-jep-2026-conference-paper-id-yuan26-jep-ba6f0dd61c/) | **5.6/10** · 创新 1.0/2 · 技术严谨 0.9/1.5 · 实验充分 0.7/1.5 · 清晰度 0.8/1 · 影响力 0.9/1.5 · 开源 0.0/1.5 · 可复现 0.3/0.5 · 工程/实践 1.0/1.5 | 前50% | 数据集与基准 | #强制对齐 |
| 40 | [听不清鼻音时，孩子跟着念也会丢掉鼻口对比：声码器模拟下的鼻音度证据](/posts/conference-jep-2026-conference-paper-id-fagniart26-jep-6f94f8702a/) | [Répétition de voyelles nasales et orales vocodées : mesures de nasalance\.](/posts/conference-jep-2026-conference-paper-id-fagniart26-jep-6f94f8702a/) | **5.5/10** · 创新 1.3/2 · 技术严谨 1.0/1.5 · 实验充分 0.8/1.5 · 清晰度 0.8/1 · 影响力 0.5/1.5 · 开源 0.0/1.5 · 可复现 0.3/0.5 · 工程/实践 0.8/1.5 | 前50% | 应用研究 | #语音属性识别 |
| 41 | [语言识别可解释了但判分还能用吗：BA\-Lang 把嵌入变成可数属性](/posts/conference-jep-2026-conference-paper-id-jelassi26-jep-c1b915a275/) | [Reconnaissance de la langue parlée explicable avec BA\-LR](/posts/conference-jep-2026-conference-paper-id-jelassi26-jep-c1b915a275/) | **5.5/10** · 创新 1.2/2 · 技术严谨 1.0/1.5 · 实验充分 1.0/1.5 · 清晰度 0.7/1 · 影响力 0.7/1.5 · 开源 0.0/1.5 · 可复现 0.3/0.5 · 工程/实践 0.6/1.5 | 前50% | 方法研究 | #语言识别 |
| 42 | [仙居话低调域的气嗓音能维持多久：老年组到韵尾与青年组退到韵腹的对照](/posts/conference-jep-2026-conference-paper-id-jin26-jep-17cd26625d/) | [Caractéristiques phonétiques du contraste de registre tonal en chinois de Xianju](/posts/conference-jep-2026-conference-paper-id-jin26-jep-17cd26625d/) | **5.5/10** · 创新 1.2/2 · 技术严谨 1.2/1.5 · 实验充分 0.8/1.5 · 清晰度 0.8/1 · 影响力 0.7/1.5 · 开源 0.0/1.5 · 可复现 0.3/0.5 · 工程/实践 0.5/1.5 | 前50% | 应用研究 | #语音属性识别 |
| 43 | [用可解释卷积滤波暴露预训练检测器的可迁移弱点：Malasimplex 攻击解读](/posts/conference-jep-2026-conference-paper-id-kandharsingh26-jep-0c9bd2fbb6/) | [Robustesse aux attaques adversariales de détecteurs de deepfakes audio basés sur un modèle pré\-entraîné](/posts/conference-jep-2026-conference-paper-id-kandharsingh26-jep-0c9bd2fbb6/) | **5.5/10** · 创新 1.2/2 · 技术严谨 1.0/1.5 · 实验充分 0.9/1.5 · 清晰度 0.7/1 · 影响力 0.9/1.5 · 开源 0.0/1.5 · 可复现 0.3/0.5 · 工程/实践 0.5/1.5 | 前50% | 方法研究 | #音频深度伪造检测 |
| 44 | [机器和人耳都会听错年龄：误差从何而来，又靠哪些声学线索解释](/posts/conference-jep-2026-conference-paper-id-millot26-jep-c5634d0d89/) | [Estimation de l'âge d'un locuteur par des auditeurs humains et un système de détection : comparaison et analyse acoustique](/posts/conference-jep-2026-conference-paper-id-millot26-jep-c5634d0d89/) | **5.5/10** · 创新 1.2/2 · 技术严谨 0.9/1.5 · 实验充分 0.9/1.5 · 清晰度 0.7/1 · 影响力 0.7/1.5 · 开源 0.0/1.5 · 可复现 0.3/0.5 · 工程/实践 0.8/1.5 | 前50% | 应用研究 | #语音属性识别 |
| 45 | [时长学会了，音色还没分开：400 名法语者英语/i:/\-/ɪ/的声学证据](/posts/conference-jep-2026-conference-paper-id-moreau26-jep-b327fd3433/) | [Étude acoustique du contraste /i:/\-/ɪ/ chez 400 apprenants francophones de l’anglais](/posts/conference-jep-2026-conference-paper-id-moreau26-jep-b327fd3433/) | **5.5/10** · 创新 1.2/2 · 技术严谨 1.2/1.5 · 实验充分 1.0/1.5 · 清晰度 0.8/1 · 影响力 0.5/1.5 · 开源 0.0/1.5 · 可复现 0.3/0.5 · 工程/实践 0.5/1.5 | 前50% | 应用研究 | #语音属性识别 |
| 46 | [音素串能否替代专家打分：17 个法语预训练模型的域内精度与病理跨域对照](/posts/conference-jep-2026-conference-paper-id-nguyen26-jep-7cd47e2f71/) | [De la reconnaissance phonémique à l'évaluation de la parole pathologique : comparaison de modèles pré\-entraînés français](/posts/conference-jep-2026-conference-paper-id-nguyen26-jep-7cd47e2f71/) | **5.5/10** · 创新 1.0/2 · 技术严谨 1.2/1.5 · 实验充分 1.0/1.5 · 清晰度 0.7/1 · 影响力 0.7/1.5 · 开源 0.0/1.5 · 可复现 0.1/0.5 · 工程/实践 0.8/1.5 | 前50% | 应用研究 | #病理语音评估 |
| 47 | [多语多设备之下帕金森构音障碍检测为何跨库就失效：冻结声学模型加多库训练的取舍](/posts/conference-jep-2026-conference-paper-id-ponchard26-jep-4039efe41c/) | [Détection automatique de la dysarthrie parkinsonienne par apprentissage profond : une évaluation multi\-corpus hors domaine](/posts/conference-jep-2026-conference-paper-id-ponchard26-jep-4039efe41c/) | **5.5/10** · 创新 1.0/2 · 技术严谨 1.0/1.5 · 实验充分 1.0/1.5 · 清晰度 0.7/1 · 影响力 0.5/1.5 · 开源 0.0/1.5 · 可复现 0.3/0.5 · 工程/实践 1.0/1.5 | 前50% | 应用研究 | #病理语音评估 |
| 48 | [唇部收缩多少与感觉费力多少：构音努力自评的测量方法与个体差异](/posts/conference-jep-2026-conference-paper-id-ronayette26-jep-99f18b747d/) | [Auto\-évaluation perceptive de l’effort articulatoire: Méthodologie de mesure et variabilité inter\-individuelle](/posts/conference-jep-2026-conference-paper-id-ronayette26-jep-99f18b747d/) | **5.5/10** · 创新 1.2/2 · 技术严谨 1.1/1.5 · 实验充分 1.0/1.5 · 清晰度 0.8/1 · 影响力 0.6/1.5 · 开源 0.0/1.5 · 可复现 0.3/0.5 · 工程/实践 0.5/1.5 | 前50% | 方法研究 | #语音属性识别 |
| 49 | [既像元音又有摩擦噪声：平良方言摩擦元音为何不能归为一类](/posts/conference-jep-2026-conference-paper-id-shao26-jep-76dda2668f/) | [Une étude acoustique de la « voyelle fricative » du dialecte hirara du Miyako ryukyuan](/posts/conference-jep-2026-conference-paper-id-shao26-jep-76dda2668f/) | **5.5/10** · 创新 1.2/2 · 技术严谨 1.1/1.5 · 实验充分 1.0/1.5 · 清晰度 0.8/1 · 影响力 0.6/1.5 · 开源 0.0/1.5 · 可复现 0.3/0.5 · 工程/实践 0.5/1.5 | 前50% | 应用研究 | #语音属性识别 |
| 50 | [无母语冲突的词先学会：具身训练为何只在部分任务和人群中显效](/posts/conference-jep-2026-conference-paper-id-ville26-jep-f5ad52fead/) | [Sensibilisation prosodique et acquisition de l’accentuation en anglais](/posts/conference-jep-2026-conference-paper-id-ville26-jep-f5ad52fead/) | **5.5/10** · 创新 1.2/2 · 技术严谨 1.0/1.5 · 实验充分 0.6/1.5 · 清晰度 0.8/1 · 影响力 0.6/1.5 · 开源 0.0/1.5 · 可复现 0.3/0.5 · 工程/实践 1.0/1.5 | 前50% | 应用研究 | #语音属性识别 |
| 51 | [强边界前的下倾有多陡：德语标题与间接引语区分母语者与法语学习者](/posts/conference-jep-2026-conference-paper-id-wottawa26-jep-94562569f2/) | [Lecture L2: modulations prosodiques aux frontières syntaxiques majeures de textes allemands](/posts/conference-jep-2026-conference-paper-id-wottawa26-jep-94562569f2/) | **5.5/10** · 创新 1.2/2 · 技术严谨 1.1/1.5 · 实验充分 1.0/1.5 · 清晰度 0.8/1 · 影响力 0.6/1.5 · 开源 0.0/1.5 · 可复现 0.3/0.5 · 工程/实践 0.5/1.5 | 前50% | 应用研究 | #语音属性识别 |
| 52 | [手势加 prosodie 能练顺语调，却练不准圆唇元音：一次 8 小时生态课堂的 verbo\-tonale 再检验](/posts/conference-jep-2026-conference-paper-id-daoussi26-jep-1a5efb8b80/) | [Gestes, prosodie et prononciation des voyelles en français L2 : réflexions sur la Méthode Verbo\-Tonale](/posts/conference-jep-2026-conference-paper-id-daoussi26-jep-1a5efb8b80/) | **5.4/10** · 创新 1.1/2 · 技术严谨 1.0/1.5 · 实验充分 0.8/1.5 · 清晰度 0.7/1 · 影响力 0.7/1.5 · 开源 0.0/1.5 · 可复现 0.3/0.5 · 工程/实践 0.8/1.5 | 后50% | 应用研究 | #语音属性识别 |
| 53 | [时间不变信息放在哪一层抽、用什么片段学：TiCodec 的 TIRE 拆解与 Dual\-TIRE](/posts/conference-jep-2026-conference-paper-id-esteve26-jep-c6e30a41e3/) | [Représentations invariantes dans le temps dans un codec neuronal](/posts/conference-jep-2026-conference-paper-id-esteve26-jep-c6e30a41e3/) | **5.4/10** · 创新 1.0/2 · 技术严谨 1.0/1.5 · 实验充分 1.0/1.5 · 清晰度 0.7/1 · 影响力 0.8/1.5 · 开源 0.0/1.5 · 可复现 0.1/0.5 · 工程/实践 0.8/1.5 | 后50% | 方法研究 | #语音编码 |
| 54 | [读词末尾多出来的摩擦音：法兰西岛 /i/ 尾语料中性别效应偏向男性一侧](/posts/conference-jep-2026-conference-paper-id-hutin26-jep-e7719a794b/) | [Effet du genre sur la réalisation de l'épithèse fricative en français francilien](/posts/conference-jep-2026-conference-paper-id-hutin26-jep-e7719a794b/) | **5.4/10** · 创新 0.8/2 · 技术严谨 1.0/1.5 · 实验充分 0.5/1.5 · 清晰度 0.8/1 · 影响力 0.5/1.5 · 开源 1.0/1.5 · 可复现 0.3/0.5 · 工程/实践 0.5/1.5 | 后50% | 应用研究 | #强制对齐 |
| 55 | [声音包络的慢起伏从哪里来：喉头与下颌谁更贴近声学节律](/posts/conference-jep-2026-conference-paper-id-lancia26-jep-f60bbb5417/) | [Origines articulatoires des modulations rythmiques de l’amplitude acoustique](/posts/conference-jep-2026-conference-paper-id-lancia26-jep-f60bbb5417/) | **5.4/10** · 创新 1.3/2 · 技术严谨 1.0/1.5 · 实验充分 0.8/1.5 · 清晰度 0.8/1 · 影响力 0.9/1.5 · 开源 0.0/1.5 · 可复现 0.1/0.5 · 工程/实践 0.5/1.5 | 后50% | 应用研究 | #语音属性识别 |
| 56 | [甲状腺术后声音变了但喉镜看不出：/apa/上的相对基频能抓住什么](/posts/conference-jep-2026-conference-paper-id-massis26-jep-2a5b3f78f5/) | [Fréquence fondamentale relative en période post\-opératoire thyroïdienne : une possible différence en présence d'altération vocale sur l'énoncé /apa/&\#41;](/posts/conference-jep-2026-conference-paper-id-massis26-jep-2a5b3f78f5/) | **5.4/10** · 创新 1.1/2 · 技术严谨 1.0/1.5 · 实验充分 0.8/1.5 · 清晰度 0.9/1 · 影响力 0.5/1.5 · 开源 0.0/1.5 · 可复现 0.3/0.5 · 工程/实践 0.8/1.5 | 后50% | 应用研究 | #病理语音评估 |
| 57 | [换词不换声：直接剪贴与编解码器重建哪条路更自然](/posts/conference-jep-2026-conference-paper-id-rodriguesdealmeida26-jep-23b91229a5/) | [Vers l'édition linguistique de la parole : étude sur le remplacement de mots dans un signal de parole](/posts/conference-jep-2026-conference-paper-id-rodriguesdealmeida26-jep-23b91229a5/) | **5.4/10** · 创新 1.0/2 · 技术严谨 1.2/1.5 · 实验充分 0.9/1.5 · 清晰度 0.7/1 · 影响力 0.7/1.5 · 开源 0.0/1.5 · 可复现 0.3/0.5 · 工程/实践 0.6/1.5 | 后50% | 应用研究 | #语音编辑 |
| 58 | [资源不均时先学共性再学个性：奥克语六方言的跨方言微调](/posts/conference-jep-2026-conference-paper-id-yaich26-jep-a0cdf423d2/) | [Exploitation des similarités inter\-dialectales pour la reconnaissance automatique de la parole en occitan](/posts/conference-jep-2026-conference-paper-id-yaich26-jep-a0cdf423d2/) | **5.4/10** · 创新 1.0/2 · 技术严谨 1.0/1.5 · 实验充分 1.0/1.5 · 清晰度 0.7/1 · 影响力 0.7/1.5 · 开源 0.0/1.5 · 可复现 0.3/0.5 · 工程/实践 0.7/1.5 | 后50% | 应用研究 | #语音识别 |
| 59 | [用手指画出声调：非母语者能靠手势复现普通话声调对比吗](/posts/conference-jep-2026-conference-paper-id-zhang26-jep-9a4e8bd877/) | [Reproduction gestuelle des contrastes tonals du mandarin via l’interface ToneCanvas : Une étude comparative entre locuteurs natifs et non\-natifs](/posts/conference-jep-2026-conference-paper-id-zhang26-jep-9a4e8bd877/) | **5.4/10** · 创新 1.2/2 · 技术严谨 1.2/1.5 · 实验充分 0.8/1.5 · 清晰度 0.9/1 · 影响力 0.5/1.5 · 开源 0.0/1.5 · 可复现 0.1/0.5 · 工程/实践 0.7/1.5 | 后50% | 应用研究 | #音频交互 |
| 60 | [法语形容词前后位置之争：句法邻近要求与韵律分组如何共同起作用](/posts/conference-jep-2026-conference-paper-id-drouillet26-jep-37b81c6cbd/) | [Étude de l'interaction prosodie\-syntaxe dans le choix de la position de l'adjectif à l'oral](/posts/conference-jep-2026-conference-paper-id-drouillet26-jep-37b81c6cbd/) | **5.3/10** · 创新 1.2/2 · 技术严谨 1.0/1.5 · 实验充分 0.8/1.5 · 清晰度 0.8/1 · 影响力 0.7/1.5 · 开源 0.0/1.5 · 可复现 0.3/0.5 · 工程/实践 0.5/1.5 | 后50% | 应用研究 | #音频理解 |
| 61 | [法语嘎裂嗓能量化吗：H1\-H2 与 H1\*\-H2\* 在法英复述任务中的对照检验](/posts/conference-jep-2026-conference-paper-id-jacobs26-jep-fc5dffe0ca/) | [Comment mesurer la voix craquée française ?](/posts/conference-jep-2026-conference-paper-id-jacobs26-jep-fc5dffe0ca/) | **5.3/10** · 创新 1.2/2 · 技术严谨 1.1/1.5 · 实验充分 0.6/1.5 · 清晰度 0.7/1 · 影响力 0.8/1.5 · 开源 0.0/1.5 · 可复现 0.3/0.5 · 工程/实践 0.6/1.5 | 后50% | 应用研究 | #语音属性识别 |
| 62 | [从逐帧鼻音概率到说话人指数：滑动窗口聚合在连续法语中的稳定与混杂](/posts/conference-jep-2026-conference-paper-id-kim26-jep-b5c60b9539/) | [De la nasalité à l’indice global : approche méthodologique pour la détection automatique de la nasalité fondée sur wav2vec 2\.0](/posts/conference-jep-2026-conference-paper-id-kim26-jep-b5c60b9539/) | **5.3/10** · 创新 1.2/2 · 技术严谨 1.0/1.5 · 实验充分 0.7/1.5 · 清晰度 0.8/1 · 影响力 0.7/1.5 · 开源 0.0/1.5 · 可复现 0.1/0.5 · 工程/实践 0.8/1.5 | 后50% | 方法研究 | #语音属性识别 |
| 63 | [先把法语语音从 WavLM 还原出来：层选择与对抗监督决定重建上限](/posts/conference-jep-2026-conference-paper-id-ouldouali26-jep-1043c66d79/) | [Vocodage WavLM vers audio en français : Ablation des couches et supervision adversariale comme fondation pour la conversion de voix continue](/posts/conference-jep-2026-conference-paper-id-ouldouali26-jep-1043c66d79/) | **5.3/10** · 创新 1.0/2 · 技术严谨 0.9/1.5 · 实验充分 0.7/1.5 · 清晰度 0.7/1 · 影响力 0.8/1.5 · 开源 0.0/1.5 · 可复现 0.3/0.5 · 工程/实践 0.9/1.5 | 后50% | 方法研究 | #语音合成 |
| 64 | [看不见声带时还能猜出音高吗：从舌唇运动预测基频的上下文与重音检验](/posts/conference-jep-2026-conference-paper-id-ozkan26-jep-ef5b56a26d/) | [Prédiction automatique de la fréquence fondamentale à partir des mouvements articulatoires pour la communication silencieuse](/posts/conference-jep-2026-conference-paper-id-ozkan26-jep-ef5b56a26d/) | **5.3/10** · 创新 1.2/2 · 技术严谨 1.0/1.5 · 实验充分 0.9/1.5 · 清晰度 0.7/1 · 影响力 0.8/1.5 · 开源 0.0/1.5 · 可复现 0.1/0.5 · 工程/实践 0.6/1.5 | 后50% | 方法研究 | #静默语音接口 |
| 65 | [法语浊唇阻塞音是变懒了还是正在音变：从/b/与/v/的近音化看弱化起点](/posts/conference-jep-2026-conference-paper-id-dong26-jep-08af0be602/) | [« \[β\]ref, \[ʋ\]oilà » : Affaiblissement des obstruantes labiales voisées en français conversationnel, réduction ou lénition ?](/posts/conference-jep-2026-conference-paper-id-dong26-jep-08af0be602/) | **5.2/10** · 创新 1.2/2 · 技术严谨 1.2/1.5 · 实验充分 0.8/1.5 · 清晰度 0.7/1 · 影响力 0.7/1.5 · 开源 0.0/1.5 · 可复现 0.3/0.5 · 工程/实践 0.3/1.5 | 后50% | 应用研究 | #音频分类 |
| 66 | [滑音与元音之争：变异行为能否区分两类音？](/posts/conference-jep-2026-conference-paper-id-fougeron26-jep-b3eb12a13a/) | [Glides vs\. voyelles : une différence de variabilité articulatoire ?](/posts/conference-jep-2026-conference-paper-id-fougeron26-jep-b3eb12a13a/) | **5.2/10** · 创新 1.2/2 · 技术严谨 1.0/1.5 · 实验充分 0.5/1.5 · 清晰度 0.7/1 · 影响力 0.5/1.5 · 开源 1.2/1.5 · 可复现 0.1/0.5 · 工程/实践 0.0/1.5 | 后50% | 理论研究 | #语音属性识别 |
| 67 | [听得到却听不懂：助听效果差异是否来自对精细声学线索的提取能力](/posts/conference-jep-2026-conference-paper-id-lebagousse26-jep-dd228608d0/) | [Expliquer la différence d'efficacité des aides auditives entre individus en reliant sensibilité aux modulations spectro\-temporelles et utilisation des indices acoustiques](/posts/conference-jep-2026-conference-paper-id-lebagousse26-jep-dd228608d0/) | **5.2/10** · 创新 1.2/2 · 技术严谨 1.0/1.5 · 实验充分 0.7/1.5 · 清晰度 0.8/1 · 影响力 0.7/1.5 · 开源 0.0/1.5 · 可复现 0.3/0.5 · 工程/实践 0.5/1.5 | 后50% | 应用研究 | #语音可懂度评估 |
| 68 | [换一句语言就换一个人吗：法英双语对自动说话人识别相似度分数的系统性压低](/posts/conference-jep-2026-conference-paper-id-cecchini26-jep-53fb92fe6f/) | [Impact du bilinguisme français\-anglais sur les performances de la reconnaissance automatique du locuteur](/posts/conference-jep-2026-conference-paper-id-cecchini26-jep-53fb92fe6f/) | **5.1/10** · 创新 1.0/2 · 技术严谨 1.2/1.5 · 实验充分 0.6/1.5 · 清晰度 0.8/1 · 影响力 0.8/1.5 · 开源 0.0/1.5 · 可复现 0.1/0.5 · 工程/实践 0.6/1.5 | 后50% | 应用研究 | #说话人验证 |
| 69 | [马赛口音不是有或无：用感知等级检验口音的连续性与可变性](/posts/conference-jep-2026-conference-paper-id-ghio26c-jep-28d2342848/) | [Etude empirique de la pluriphonie de l’accent marseillais](/posts/conference-jep-2026-conference-paper-id-ghio26c-jep-28d2342848/) | **5.1/10** · 创新 1.2/2 · 技术严谨 1.2/1.5 · 实验充分 0.7/1.5 · 清晰度 0.8/1 · 影响力 0.7/1.5 · 开源 0.0/1.5 · 可复现 0.1/0.5 · 工程/实践 0.4/1.5 | 后50% | 应用研究 | #语言识别 |
| 70 | [送气主要靠时长，声调约束基频：普通话与阜新话 VOT 与 CF0 的分工与补偿](/posts/conference-jep-2026-conference-paper-id-huo26-jep-92c79a8541/) | [Étude acoustique comparative du VOT et de la CF0 en mandarin et fuxinois](/posts/conference-jep-2026-conference-paper-id-huo26-jep-92c79a8541/) | **5.1/10** · 创新 1.3/2 · 技术严谨 1.1/1.5 · 实验充分 0.6/1.5 · 清晰度 0.7/1 · 影响力 0.7/1.5 · 开源 0.0/1.5 · 可复现 0.3/0.5 · 工程/实践 0.4/1.5 | 后50% | 应用研究 | #语音属性识别 |
| 71 | [走路的节奏能传到说话吗：帕金森音乐步态训练后语音节律的变化](/posts/conference-jep-2026-conference-paper-id-kashid26-jep-c8a207a8c9/) | [Évolution de la rythmicité de la parole chez les personnes atteintes de la maladie de Parkinson après rééducation à la marche basée sur le rythme musical](/posts/conference-jep-2026-conference-paper-id-kashid26-jep-c8a207a8c9/) | **5.1/10** · 创新 1.2/2 · 技术严谨 1.0/1.5 · 实验充分 0.6/1.5 · 清晰度 0.8/1 · 影响力 0.6/1.5 · 开源 0.0/1.5 · 可复现 0.1/0.5 · 工程/实践 0.8/1.5 | 后50% | 应用研究 | #病理语音评估 |
| 72 | [青春期前就有性别口音：8\-10 岁儿童 VOT、嗓音质量与 t/d 塞擦化的阶级分化](/posts/conference-jep-2026-conference-paper-id-pepiot26-jep-94def285b7/) | [Variations sociales dans les voix d’enfants : une étude du VOT, de l’affrication et de la qualité de voix\.](/posts/conference-jep-2026-conference-paper-id-pepiot26-jep-94def285b7/) | **5.1/10** · 创新 1.3/2 · 技术严谨 1.1/1.5 · 实验充分 0.7/1.5 · 清晰度 0.8/1 · 影响力 0.7/1.5 · 开源 0.0/1.5 · 可复现 0.1/0.5 · 工程/实践 0.4/1.5 | 后50% | 应用研究 | #语音属性识别 |
| 73 | [普通话双元音为何变短就变中央化：时长与语体如何分工压缩共振峰轨迹](/posts/conference-jep-2026-conference-paper-id-xiang26-jep-0a35ba543a/) | [La réduction des diphtongues du mandarin standard : effets de la durée et du style de parole](/posts/conference-jep-2026-conference-paper-id-xiang26-jep-0a35ba543a/) | **5.1/10** · 创新 1.2/2 · 技术严谨 1.2/1.5 · 实验充分 0.8/1.5 · 清晰度 0.7/1 · 影响力 0.7/1.5 · 开源 0.0/1.5 · 可复现 0.1/0.5 · 工程/实践 0.4/1.5 | 后50% | 应用研究 | #语音属性识别 |
| 74 | [对齐到文本之后，说话人信息去哪了：残差、层权重与注意力权重的三路核查](/posts/conference-jep-2026-conference-paper-id-bouziane26-jep-68ac5751b4/) | [Encodage de la sémantique et du locuteur dans les représentations sémantiques de la parole](/posts/conference-jep-2026-conference-paper-id-bouziane26-jep-68ac5751b4/) | **5.0/10** · 创新 1.1/2 · 技术严谨 1.2/1.5 · 实验充分 0.7/1.5 · 清晰度 0.8/1 · 影响力 0.8/1.5 · 开源 0.0/1.5 · 可复现 0.1/0.5 · 工程/实践 0.3/1.5 | 后50% | 方法研究 | #说话人识别 |
| 75 | [说话人向量记得是谁，却也记住了房间：噪声、混响与修复如何重塑嵌入空间](/posts/conference-jep-2026-conference-paper-id-martin26-jep-c4bb521344/) | [Sur la robustesse des plongements de locuteur dans les systèmes de traitement de la parole](/posts/conference-jep-2026-conference-paper-id-martin26-jep-c4bb521344/) | **5.0/10** · 创新 1.0/2 · 技术严谨 1.0/1.5 · 实验充分 0.7/1.5 · 清晰度 0.7/1 · 影响力 0.8/1.5 · 开源 0.0/1.5 · 可复现 0.3/0.5 · 工程/实践 0.5/1.5 | 后50% | 方法研究 | #说话人识别 |
| 76 | [法语节奏不是重音位置：意大利学习者如何协调重音、句法与手势](/posts/conference-jep-2026-conference-paper-id-souchet26-jep-102ce36f55/) | [La coordination multimodale du rythme chez des apprenants italophones de FLE](/posts/conference-jep-2026-conference-paper-id-souchet26-jep-102ce36f55/) | **4.9/10** · 创新 1.2/2 · 技术严谨 0.9/1.5 · 实验充分 0.6/1.5 · 清晰度 0.8/1 · 影响力 0.5/1.5 · 开源 0.0/1.5 · 可复现 0.3/0.5 · 工程/实践 0.6/1.5 | 后50% | 应用研究 | #语音属性识别 |
| 77 | [重音位置决定成败：法语初学者俄语词重音为何首音节偏强、弱化元音分不清](/posts/conference-jep-2026-conference-paper-id-stinchkum26-jep-00610e8d11/) | [Acquisition de l’accent lexical en russe langue étrangère chez des apprenants francophones débutants : une étude pilote de la production](/posts/conference-jep-2026-conference-paper-id-stinchkum26-jep-00610e8d11/) | **4.9/10** · 创新 1.2/2 · 技术严谨 1.0/1.5 · 实验充分 0.7/1.5 · 清晰度 0.8/1 · 影响力 0.6/1.5 · 开源 0.0/1.5 · 可复现 0.1/0.5 · 工程/实践 0.5/1.5 | 后50% | 应用研究 | #语音属性识别 |
| 78 | [四到七岁听出喜怒哀惧：语言复杂度、目标情绪与双语经验如何分工](/posts/conference-jep-2026-conference-paper-id-terny26-jep-ec6533b770/) | [Étude exploratoire du développement de la prosodie émotionnelle chez des enfants aux profils linguistiques variés : effet de la langue, du type de stimuli et de l’émotion cible](/posts/conference-jep-2026-conference-paper-id-terny26-jep-ec6533b770/) | **4.9/10** · 创新 1.2/2 · 技术严谨 1.0/1.5 · 实验充分 0.7/1.5 · 清晰度 0.7/1 · 影响力 0.6/1.5 · 开源 0.0/1.5 · 可复现 0.2/0.5 · 工程/实践 0.5/1.5 | 后50% | 应用研究 | #语音情感识别 |
| 79 | [皮肤拉伸为何只让日本人更常听到长元音：体感与母语音位表征的配合](/posts/conference-jep-2026-conference-paper-id-vallois26-jep-98888ed3ff/) | [Rôle des entrées somatosensorielles et de la langue maternelle pour la perception du contraste de quantité vocalique japonais](/posts/conference-jep-2026-conference-paper-id-vallois26-jep-98888ed3ff/) | **4.9/10** · 创新 1.3/2 · 技术严谨 1.2/1.5 · 实验充分 0.7/1.5 · 清晰度 0.8/1 · 影响力 0.8/1.5 · 开源 0.0/1.5 · 可复现 0.1/0.5 · 工程/实践 0.0/1.5 | 后50% | 应用研究 | #音频分类 |
| 80 | [听觉反馈不一致时口腔如何调整：辅音语境与掩蔽噪声共同塑造元音适应](/posts/conference-jep-2026-conference-paper-id-vancheri26-jep-f1b2aa2761/) | [Adaptation audio\-motrice lors de la parole : impact de la conduction interne et du niveau de bruit de masquage](/posts/conference-jep-2026-conference-paper-id-vancheri26-jep-f1b2aa2761/) | **4.9/10** · 创新 1.2/2 · 技术严谨 1.0/1.5 · 实验充分 0.6/1.5 · 清晰度 0.7/1 · 影响力 0.6/1.5 · 开源 0.0/1.5 · 可复现 0.3/0.5 · 工程/实践 0.5/1.5 | 后50% | 应用研究 | #语音属性识别 |
| 81 | [声带不振动时，法语清浊对立靠时长和邻音保住，但塞音连缀会中和](/posts/conference-jep-2026-conference-paper-id-bodiou26-jep-b25c3ce617/) | [Contraste de voisement des obstruantes du français dans des énoncés mono\- et bisyllabiques en parole chuchotée](/posts/conference-jep-2026-conference-paper-id-bodiou26-jep-b25c3ce617/) | **4.8/10** · 创新 1.3/2 · 技术严谨 1.1/1.5 · 实验充分 0.7/1.5 · 清晰度 0.7/1 · 影响力 0.6/1.5 · 开源 0.0/1.5 · 可复现 0.1/0.5 · 工程/实践 0.3/1.5 | 后50% | 应用研究 | #语音可懂度评估 |
| 82 | [四人声嘈杂中听句子的青春期改善：抑制反应时部分传递年龄效应](/posts/conference-jep-2026-conference-paper-id-fontan26-jep-caf0dcae14/) | [Développement des performances de perception de la parole dans le bruit : rôles des capacités d’inhibition et de mémoire de travail](/posts/conference-jep-2026-conference-paper-id-fontan26-jep-caf0dcae14/) | **4.8/10** · 创新 0.8/2 · 技术严谨 1.0/1.5 · 实验充分 0.8/1.5 · 清晰度 0.8/1 · 影响力 0.5/1.5 · 开源 0.0/1.5 · 可复现 0.3/0.5 · 工程/实践 0.6/1.5 | 后50% | 应用研究 | #语音可懂度评估 |
| 83 | [把文本变成手码：TextCueS 如何让 LfPC 编码步骤可见可改](/posts/conference-jep-2026-conference-paper-id-bigi26-jep-25528e7dee/) | [Génération du code LfPC / Cued Speech à partir du texte](/posts/conference-jep-2026-conference-paper-id-bigi26-jep-25528e7dee/) | **4.7/10** · 创新 1.0/2 · 技术严谨 1.0/1.5 · 实验充分 0.2/1.5 · 清晰度 0.7/1 · 影响力 0.5/1.5 · 开源 0.2/1.5 · 可复现 0.1/0.5 · 工程/实践 1.0/1.5 | 后50% | 应用研究 | #语音合成 |
| 84 | [尾巴上的 /\-s/ 去哪了：用时长和重心在 20 人访谈里检验社会变量](/posts/conference-jep-2026-conference-paper-id-kim26b-jep-32f9d15d20/) | [La variation en espagnol d'Amérique latine : analyse socio\-phonétique de la coda /\-s/ chez les micro\-travailleurs de l'IA](/posts/conference-jep-2026-conference-paper-id-kim26b-jep-32f9d15d20/) | **4.7/10** · 创新 1.1/2 · 技术严谨 1.0/1.5 · 实验充分 0.5/1.5 · 清晰度 0.8/1 · 影响力 0.5/1.5 · 开源 0.0/1.5 · 可复现 0.3/0.5 · 工程/实践 0.5/1.5 | 后50% | 应用研究 | #语音属性识别 |
| 85 | [浊音去哪了：普通话听者用送气与否重新划分法语塞音](/posts/conference-jep-2026-conference-paper-id-su26-jep-68e41e580c/) | [Assimilation perceptive des consonnes occlusives françaises par des auditeurs du chinois mandarin](/posts/conference-jep-2026-conference-paper-id-su26-jep-68e41e580c/) | **4.7/10** · 创新 1.0/2 · 技术严谨 1.2/1.5 · 实验充分 0.6/1.5 · 清晰度 0.8/1 · 影响力 0.5/1.5 · 开源 0.0/1.5 · 可复现 0.3/0.5 · 工程/实践 0.3/1.5 | 后50% | 应用研究 | #语音识别 |
| 86 | [把对话、主动发起与非言语表达压进一个提示驱动策略：基于 LLM 的工作流能否替代分离式规则](/posts/conference-jep-2026-conference-paper-id-sucal26-jep-b20a670b67/) | [Intégrer la multimodalité dans les interactions humain\-robot situées avec un LLM supervisé par un workflow agentique](/posts/conference-jep-2026-conference-paper-id-sucal26-jep-b20a670b67/) | **4.7/10** · 创新 1.2/2 · 技术严谨 1.0/1.5 · 实验充分 0.7/1.5 · 清晰度 0.6/1 · 影响力 0.4/1.5 · 开源 0.0/1.5 · 可复现 0.1/0.5 · 工程/实践 0.7/1.5 | 后50% | 系统技术报告 | #音视频交互 |
| 87 | [调超韵律参数为何比直接调共振峰更能纠正法语元音](/posts/conference-jep-2026-conference-paper-id-gioiella26-jep-2832294245/) | [Intervention phonétique en langue étrangère : effets comparés de stratégies correctives sur la production vocalique](/posts/conference-jep-2026-conference-paper-id-gioiella26-jep-2832294245/) | **4.6/10** · 创新 1.2/2 · 技术严谨 1.0/1.5 · 实验充分 0.5/1.5 · 清晰度 0.7/1 · 影响力 0.6/1.5 · 开源 0.0/1.5 · 可复现 0.1/0.5 · 工程/实践 0.5/1.5 | 后50% | 应用研究 | #语音属性识别 |
| 88 | [可读难了，机器还能听准吗：可听性中结构复杂度与识别错误的解耦](/posts/conference-jep-2026-conference-paper-id-ramonda26-jep-d454db559a/) | [Dissocier la lisibilité et l’intelligibilité : un nouveau paradigme pour l’écoutabilité](/posts/conference-jep-2026-conference-paper-id-ramonda26-jep-d454db559a/) | **4.6/10** · 创新 1.0/2 · 技术严谨 0.9/1.5 · 实验充分 0.5/1.5 · 清晰度 0.8/1 · 影响力 0.6/1.5 · 开源 0.0/1.5 · 可复现 0.3/0.5 · 工程/实践 0.5/1.5 | 后50% | 应用研究 | #语音可懂度评估 |
| 89 | [窄聚焦不只抬高音高峰：法语三区韵律的再量化](/posts/conference-jep-2026-conference-paper-id-yan26-jep-ad20a28631/) | [Requantification des ajustements tri\-zonaux du focus en français : indices de F0, d’intensité et de durée](/posts/conference-jep-2026-conference-paper-id-yan26-jep-ad20a28631/) | **4.6/10** · 创新 1.0/2 · 技术严谨 1.2/1.5 · 实验充分 0.8/1.5 · 清晰度 0.7/1 · 影响力 0.4/1.5 · 开源 0.0/1.5 · 可复现 0.3/0.5 · 工程/实践 0.2/1.5 | 后50% | 应用研究 | #语音属性识别 |
| 90 | [哨音只剩一个频率时，元音靠高低区分、辅音藏在元音开头里](/posts/conference-jep-2026-conference-paper-id-marczykbuklaha26-jep-71cb84439f/) | [Structure phonologique en parole sifflée : le cas de l’occitan béarnais](/posts/conference-jep-2026-conference-paper-id-marczykbuklaha26-jep-71cb84439f/) | **4.5/10** · 创新 1.0/2 · 技术严谨 1.0/1.5 · 实验充分 0.6/1.5 · 清晰度 0.7/1 · 影响力 0.4/1.5 · 开源 0.0/1.5 · 可复现 0.3/0.5 · 工程/实践 0.5/1.5 | 后50% | 应用研究 | #语音属性识别 |
| 91 | [把成人运动性言语评估改给 2 岁半幼儿用：双音节交替任务能测什么、不能只看语速](/posts/conference-jep-2026-conference-paper-id-piccaluga26-jep-a4b5fcc287/) | [Évaluation des performances à une tâche de diadococinésies chez de jeunes enfants francophones au développement langagier typique](/posts/conference-jep-2026-conference-paper-id-piccaluga26-jep-a4b5fcc287/) | **4.5/10** · 创新 1.0/2 · 技术严谨 1.2/1.5 · 实验充分 0.5/1.5 · 清晰度 0.5/1 · 影响力 0.5/1.5 · 开源 0.0/1.5 · 可复现 0.1/0.5 · 工程/实践 0.7/1.5 | 后50% | 应用研究 | #语音属性识别 |
| 92 | [词尾 schwa 多出一个音节时，法语升调是换地方还是变形状](/posts/conference-jep-2026-conference-paper-id-portes26-jep-e7580a0555/) | [Schwa et ajustement de l’intonation en français](/posts/conference-jep-2026-conference-paper-id-portes26-jep-e7580a0555/) | **4.5/10** · 创新 1.0/2 · 技术严谨 0.8/1.5 · 实验充分 0.4/1.5 · 清晰度 0.6/1 · 影响力 0.5/1.5 · 开源 1.0/1.5 · 可复现 0.1/0.5 · 工程/实践 0.1/1.5 | 后50% | 理论研究 | #语音属性识别 |
| 93 | [总时长没有区别时区别藏在哪里：donc 话语标记用法的分段与边界策略](/posts/conference-jep-2026-conference-paper-id-arida26-jep-804f80d5aa/) | [Réduction phonétique et marquage prosodique de donc : effets de l’usage discursif et du bégaiement](/posts/conference-jep-2026-conference-paper-id-arida26-jep-804f80d5aa/) | **4.4/10** · 创新 1.2/2 · 技术严谨 1.0/1.5 · 实验充分 0.6/1.5 · 清晰度 0.7/1 · 影响力 0.4/1.5 · 开源 0.0/1.5 · 可复现 0.3/0.5 · 工程/实践 0.2/1.5 | 后50% | 应用研究 | #病理语音评估 |
| 94 | [只用三个元音能判断年龄吗：科西嘉塔拉瓦方言的尝试与落空](/posts/conference-jep-2026-conference-paper-id-collardburesi26-jep-cfb423f527/) | [Variation Vocalique relative à l’âge et classification automatique en Corse Taravai](/posts/conference-jep-2026-conference-paper-id-collardburesi26-jep-cfb423f527/) | **4.4/10** · 创新 1.0/2 · 技术严谨 1.0/1.5 · 实验充分 0.5/1.5 · 清晰度 0.6/1 · 影响力 0.4/1.5 · 开源 0.0/1.5 · 可复现 0.1/0.5 · 工程/实践 0.8/1.5 | 后50% | 应用研究 | #语音属性识别 |
| 95 | [在节日广场上听懂口哨话：缺失数据随时间爬升时还能怎么谈识别率](/posts/conference-jep-2026-conference-paper-id-crouzet26-jep-34f040d80a/) | [Perception de parole sifflée par des auditeurs naïfs hors du laboratoire : Une exploration de l’impact du contexte expérimental\.](/posts/conference-jep-2026-conference-paper-id-crouzet26-jep-34f040d80a/) | **4.4/10** · 创新 1.0/2 · 技术严谨 0.8/1.5 · 实验充分 0.7/1.5 · 清晰度 0.7/1 · 影响力 0.4/1.5 · 开源 0.0/1.5 · 可复现 0.3/0.5 · 工程/实践 0.5/1.5 | 后50% | 应用研究 | #音频分类 |
| 96 | [把可懂度放进对话时间里：舌切除患者与临床医生轮流说话时的动态测量](/posts/conference-jep-2026-conference-paper-id-fabriol26-jep-08f270b8dd/) | [Étude de l’évolution de l’intelligibilité dans une discussion : application au cas clinique de la glossectomie](/posts/conference-jep-2026-conference-paper-id-fabriol26-jep-08f270b8dd/) | **4.4/10** · 创新 1.0/2 · 技术严谨 0.7/1.5 · 实验充分 0.6/1.5 · 清晰度 0.7/1 · 影响力 0.5/1.5 · 开源 0.0/1.5 · 可复现 0.1/0.5 · 工程/实践 0.8/1.5 | 后50% | 应用研究 | #语音可懂度评估 |
| 97 | [转换来的嗄声能当真病人用吗：Seed\-VC 扩增的临床可信度检验](/posts/conference-jep-2026-conference-paper-id-forges26-jep-6e6a7c6581/) | [Conversion de voix dysphoniques pour l’augmentation de données : évaluation de la plausibilité clinique](/posts/conference-jep-2026-conference-paper-id-forges26-jep-6e6a7c6581/) | **4.4/10** · 创新 1.0/2 · 技术严谨 0.8/1.5 · 实验充分 0.7/1.5 · 清晰度 0.7/1 · 影响力 0.5/1.5 · 开源 0.0/1.5 · 可复现 0.1/0.5 · 工程/实践 0.6/1.5 | 后50% | 应用研究 | #语音转换 |
| 98 | [声调是否藏在第一共振峰里：普通话与西安话双元音上的时间耦合检验](/posts/conference-jep-2026-conference-paper-id-li26b-jep-368d57224d/) | [Information tonale dans F1 dans deux variétés de mandarin](/posts/conference-jep-2026-conference-paper-id-li26b-jep-368d57224d/) | **4.4/10** · 创新 1.2/2 · 技术严谨 1.1/1.5 · 实验充分 0.6/1.5 · 清晰度 0.6/1 · 影响力 0.5/1.5 · 开源 0.0/1.5 · 可复现 0.1/0.5 · 工程/实践 0.3/1.5 | 后50% | 应用研究 | #音频分类 |
| 99 | [阿尔茨海默病是元音更集中还是更夸张：半控制地图任务下的 F1 与 F3 证据](/posts/conference-jep-2026-conference-paper-id-ferrera26-jep-57aed26d80/) | [Altérations formantiques chez des sujets atteints de la maladie d’Alzheimer : évidences d’une tâche de parole semi\-contrôlée](/posts/conference-jep-2026-conference-paper-id-ferrera26-jep-57aed26d80/) | **4.2/10** · 创新 1.1/2 · 技术严谨 1.0/1.5 · 实验充分 0.5/1.5 · 清晰度 0.7/1 · 影响力 0.5/1.5 · 开源 0.0/1.5 · 可复现 0.1/0.5 · 工程/实践 0.3/1.5 | 后50% | 应用研究 | #病理语音评估 |
| 100 | [转录文本里的停顿与问答为何比语义向量更能分开自闭症与发育迟缓](/posts/conference-jep-2026-conference-paper-id-ghennani26-jep-ed6122332b/) | [Contributions de caractéristiques issues de la transcription de parole pour la détection de l’autisme chez l’enfant](/posts/conference-jep-2026-conference-paper-id-ghennani26-jep-ed6122332b/) | **4.2/10** · 创新 1.0/2 · 技术严谨 1.0/1.5 · 实验充分 0.5/1.5 · 清晰度 0.7/1 · 影响力 0.4/1.5 · 开源 0.0/1.5 · 可复现 0.1/0.5 · 工程/实践 0.5/1.5 | 后50% | 应用研究 | #病理语音评估 |
| 101 | [二语模仿是绕过音系的语音模仿吗：一次打断语音模式的直接检验](/posts/conference-jep-2026-conference-paper-id-weller26-jep-1584a7383a/) | [L’imitation en langue seconde à lumière du modèle de la perception sélective automatique](/posts/conference-jep-2026-conference-paper-id-weller26-jep-1584a7383a/) | **4.2/10** · 创新 1.0/2 · 技术严谨 0.8/1.5 · 实验充分 0.6/1.5 · 清晰度 0.8/1 · 影响力 0.5/1.5 · 开源 0.0/1.5 · 可复现 0.3/0.5 · 工程/实践 0.2/1.5 | 后50% | 应用研究 | #音频分类 |
| 102 | [静默停顿不是停下：上气道癌变语音如何在边界处多停、停长并重组节律](/posts/conference-jep-2026-conference-paper-id-colau26-jep-78e8f8ceac/) | [Fréquence, fonctionnalisation et durée des pauses silencieuses : étude comparée entre locuteurs sains et locuteurs atteints d'un cancer des voies aéro\-digestives](/posts/conference-jep-2026-conference-paper-id-colau26-jep-78e8f8ceac/) | **4.1/10** · 创新 1.0/2 · 技术严谨 1.0/1.5 · 实验充分 0.5/1.5 · 清晰度 0.7/1 · 影响力 0.5/1.5 · 开源 0.0/1.5 · 可复现 0.1/0.5 · 工程/实践 0.3/1.5 | 后50% | 应用研究 | #病理语音评估 |
| 103 | [显式稳重音、隐式动语调：两种课堂训练对法语二语韵律感知的分化影响](/posts/conference-jep-2026-conference-paper-id-bellomoskvasik26-jep-787ca8e3a1/) | [Les entraînements Meaning\-Based et Form\-Based ont\-ils des effets similaires sur la perception de la prosodie en français L2 ?](/posts/conference-jep-2026-conference-paper-id-bellomoskvasik26-jep-787ca8e3a1/) | **4.0/10** · 创新 0.8/2 · 技术严谨 0.8/1.5 · 实验充分 0.5/1.5 · 清晰度 0.6/1 · 影响力 0.5/1.5 · 开源 0.0/1.5 · 可复现 0.3/0.5 · 工程/实践 0.5/1.5 | 后50% | 应用研究 | #语音属性识别 |
| 104 | [在手术室里听出细微口吃：用 GRU 把脑刺激引起的言语障碍自动分成正常与异常](/posts/conference-jep-2026-conference-paper-id-berger26-jep-2b8cc7acdb/) | [Approche méthodologique de la classification clinique automatique des troubles de la paroles en contexte de chirurgie éveillée des tumeurs cérébrales](/posts/conference-jep-2026-conference-paper-id-berger26-jep-2b8cc7acdb/) | **4.0/10** · 创新 0.8/2 · 技术严谨 1.0/1.5 · 实验充分 0.5/1.5 · 清晰度 0.7/1 · 影响力 0.4/1.5 · 开源 0.0/1.5 · 可复现 0.1/0.5 · 工程/实践 0.5/1.5 | 后50% | 应用研究 | #病理语音评估 |
| 105 | [反讽没有单一声音：自闭症成人与神经典型成人的产出为何都偏离原型](/posts/conference-jep-2026-conference-paper-id-deffuant26-jep-986fb0dc09/) | [Caractéristiques prosodiques de l’ironie chez les adultes avec troubles du spectre de l’autisme](/posts/conference-jep-2026-conference-paper-id-deffuant26-jep-986fb0dc09/) | **4.0/10** · 创新 1.2/2 · 技术严谨 0.7/1.5 · 实验充分 0.4/1.5 · 清晰度 0.8/1 · 影响力 0.4/1.5 · 开源 0.0/1.5 · 可复现 0.3/0.5 · 工程/实践 0.2/1.5 | 后50% | 应用研究 | #语音属性识别 |
| 106 | [自发性病理语音转写为何随严重程度分化：以 CER 为轴的多层次误差解读](/posts/conference-jep-2026-conference-paper-id-thibault26-jep-7b315ce227/) | [Efficacité des systèmes de transcription automatique en parole spontanée après cancer lèvres\-bouche\-pharynx](/posts/conference-jep-2026-conference-paper-id-thibault26-jep-7b315ce227/) | **4.0/10** · 创新 0.8/2 · 技术严谨 0.8/1.5 · 实验充分 0.6/1.5 · 清晰度 0.7/1 · 影响力 0.5/1.5 · 开源 0.0/1.5 · 可复现 0.1/0.5 · 工程/实践 0.5/1.5 | 后50% | 应用研究 | #语音识别 |
| 107 | [不识别情绪类别，只跟踪状态漂移：用效价唤醒优势曲线看接警员是否还在状态](/posts/conference-jep-2026-conference-paper-id-bompay26-jep-337519a3f5/) | [Détection de la perte d'engagement ou de flexibilité mentale dans les centre de traitement des alertes](/posts/conference-jep-2026-conference-paper-id-bompay26-jep-337519a3f5/) | **3.9/10** · 创新 1.0/2 · 技术严谨 0.8/1.5 · 实验充分 0.3/1.5 · 清晰度 0.7/1 · 影响力 0.5/1.5 · 开源 0.0/1.5 · 可复现 0.1/0.5 · 工程/实践 0.5/1.5 | 后50% | 应用研究 | #语音情感识别 |
| 108 | [把声音变成可比的痕迹：从电磁记录到光学比较与乐器模型](/posts/conference-jep-2026-conference-paper-id-schweitzer26-jep-23f2145ae8/) | [De l’audible au visible : visualiser, comparer et mesurer les phénomènes sonores](/posts/conference-jep-2026-conference-paper-id-schweitzer26-jep-23f2145ae8/) | **3.9/10** · 创新 1.0/2 · 技术严谨 0.6/1.5 · 实验充分 0.7/1.5 · 清晰度 0.8/1 · 影响力 0.7/1.5 · 开源 0.0/1.5 · 可复现 0.1/0.5 · 工程/实践 0.0/1.5 | 后50% | 综述 | #音频理解 |
| 109 | [没有爆破音也能分辨：在越南语里看元音尾段如何留下辅音位置信息](/posts/conference-jep-2026-conference-paper-id-tran26-jep-3103595eed/) | [Indices acoustiques des plosives finales non relâchées en vietnamien](/posts/conference-jep-2026-conference-paper-id-tran26-jep-3103595eed/) | **3.8/10** · 创新 0.8/2 · 技术严谨 1.2/1.5 · 实验充分 0.4/1.5 · 清晰度 0.7/1 · 影响力 0.4/1.5 · 开源 0.0/1.5 · 可复现 0.1/0.5 · 工程/实践 0.2/1.5 | 后50% | 应用研究 | #语音属性识别 |
| 110 | [提前发出下一个元音有多难：年龄减少了元音间预期协同发音，双任务却没有](/posts/conference-jep-2026-conference-paper-id-bruzzo26-jep-bbee5f2782/) | [Coarticulation anticipatoire V\-à\-V : effets de l’âge et d’une double\-tâche sur la planification de l’articulation\.](/posts/conference-jep-2026-conference-paper-id-bruzzo26-jep-bbee5f2782/) | **3.7/10** · 创新 0.8/2 · 技术严谨 1.0/1.5 · 实验充分 0.7/1.5 · 清晰度 0.7/1 · 影响力 0.4/1.5 · 开源 0.0/1.5 · 可复现 0.1/0.5 · 工程/实践 0.0/1.5 | 后50% | 应用研究 | #语音属性识别 |
| 111 | [缩读形式是存起来的词条，还是由完整形式现场算出来的：法语者听英语央元音脱落的启动证据](/posts/conference-jep-2026-conference-paper-id-mouquet26-jep-2cabf31d22/) | [Les réductions phonétiques sont\-elles encodées dans le lexique mental d’une L2 ? Résultats d’une étude d’amorçage](/posts/conference-jep-2026-conference-paper-id-mouquet26-jep-2cabf31d22/) | **3.7/10** · 创新 1.0/2 · 技术严谨 1.0/1.5 · 实验充分 0.3/1.5 · 清晰度 0.6/1 · 影响力 0.5/1.5 · 开源 0.0/1.5 · 可复现 0.1/0.5 · 工程/实践 0.2/1.5 | 后50% | 应用研究 | #口语理解 |
| 112 | [多数人发成近音、仅一人拍出触碰：摩洛哥方言舌尖 r 的刚度与路径对质](/posts/conference-jep-2026-conference-paper-id-zeroual26-jep-5a60d222c8/) | [Etude physiologique du r apical de l’arabe dialectal marocain](/posts/conference-jep-2026-conference-paper-id-zeroual26-jep-5a60d222c8/) | **3.7/10** · 创新 0.8/2 · 技术严谨 0.8/1.5 · 实验充分 0.6/1.5 · 清晰度 0.6/1 · 影响力 0.4/1.5 · 开源 0.0/1.5 · 可复现 0.3/0.5 · 工程/实践 0.2/1.5 | 后50% | 应用研究 | #语音属性识别 |
| 113 | [从文本到手脸编码：用法语补唇语钥匙数量给阅读材料排难度](/posts/conference-jep-2026-conference-paper-id-norre26-jep-d0d25ad13a/) | [Un modèle de sélection de ressources multimodales pour l'apprentissage de la Langue française Parlée Complétée](/posts/conference-jep-2026-conference-paper-id-norre26-jep-d0d25ad13a/) | **3.6/10** · 创新 0.8/2 · 技术严谨 0.7/1.5 · 实验充分 0.4/1.5 · 清晰度 0.7/1 · 影响力 0.4/1.5 · 开源 0.0/1.5 · 可复现 0.1/0.5 · 工程/实践 0.5/1.5 | 后50% | 应用研究 | #音频分类 |
| 114 | [把对话拆成可对齐的多维交际行为再生成剧本：MINERAL 的多参与者建模路线](/posts/conference-jep-2026-conference-paper-id-cottrez26-jep-fe925807ef/) | [Représentation multi dimensionnelle pour la modélisation des conversations](/posts/conference-jep-2026-conference-paper-id-cottrez26-jep-fe925807ef/) | **3.5/10** · 创新 1.0/2 · 技术严谨 0.6/1.5 · 实验充分 0.2/1.5 · 清晰度 0.7/1 · 影响力 0.5/1.5 · 开源 0.0/1.5 · 可复现 0.0/0.5 · 工程/实践 0.5/1.5 | 后50% | 应用研究 | #音视频理解 |
| 115 | [年长者更容易被念偏的词启动：词汇表征稳固性下降的启动实证](/posts/conference-jep-2026-conference-paper-id-hureaux26-jep-39b5db65ed/) | [Robustesse des représentations lexicales et vieillissement cognitif](/posts/conference-jep-2026-conference-paper-id-hureaux26-jep-39b5db65ed/) | **3.5/10** · 创新 0.8/2 · 技术严谨 1.0/1.5 · 实验充分 0.5/1.5 · 清晰度 0.6/1 · 影响力 0.5/1.5 · 开源 0.0/1.5 · 可复现 0.1/0.5 · 工程/实践 0.0/1.5 | 后50% | 应用研究 | #口语理解 |
| 116 | [苍白球内侧部脑深部刺激后韵律大体稳定、仅平均基频下降：一项肌张力障碍朗读研究的核对式解读](/posts/conference-jep-2026-conference-paper-id-noirot26-jep-5eeccb7917/) | [Paramètres prosodiques de la parole dans la dystonie : effets de la stimulation cérébrale profonde](/posts/conference-jep-2026-conference-paper-id-noirot26-jep-5eeccb7917/) | **3.5/10** · 创新 0.8/2 · 技术严谨 1.0/1.5 · 实验充分 0.4/1.5 · 清晰度 0.6/1 · 影响力 0.3/1.5 · 开源 0.0/1.5 · 可复现 0.1/0.5 · 工程/实践 0.3/1.5 | 后50% | 应用研究 | #病理语音评估 |
| 117 | [语速加快时大脑跟不上节奏：健康老化中三角波耦合与言语理解的初步证据](/posts/conference-jep-2026-conference-paper-id-nopere26-jep-625012f8a0/) | [La compréhension de la parole dans le vieillissement sain : étude neurophysiologique de la perception du rythme\.](/posts/conference-jep-2026-conference-paper-id-nopere26-jep-625012f8a0/) | **3.4/10** · 创新 0.8/2 · 技术严谨 1.0/1.5 · 实验充分 0.4/1.5 · 清晰度 0.7/1 · 影响力 0.4/1.5 · 开源 0.0/1.5 · 可复现 0.1/0.5 · 工程/实践 0.0/1.5 | 后50% | 应用研究 | #语音可懂度评估 |
| 118 | [想让人听懂时，说话人会更用力抵抗被扭曲的听觉反馈吗](/posts/conference-jep-2026-conference-paper-id-rochasbenlalou26-jep-4edf5fe940/) | [L'influence de la recherche d'intelligibilité sur l'adaptation auditivo\-motrice de la parole](/posts/conference-jep-2026-conference-paper-id-rochasbenlalou26-jep-4edf5fe940/) | **3.1/10** · 创新 0.8/2 · 技术严谨 1.0/1.5 · 实验充分 0.2/1.5 · 清晰度 0.6/1 · 影响力 0.4/1.5 · 开源 0.0/1.5 · 可复现 0.1/0.5 · 工程/实践 0.0/1.5 | 后50% | 应用研究 | #语音可懂度评估 |

---

## 📋 论文列表

### 1. [八类法语口音为何难分：小而偏的训练集与人类听辨上限共同设限](/posts/conference-jep-2026-conference-paper-id-fabre26-jep-163727d529/)

> 英文题目：*[Construction d'un jeu de données pour l'évaluation de la classification des accents français : où en sommes\-nous ?](/posts/conference-jep-2026-conference-paper-id-fabre26-jep-163727d529/)*

标签：#数据集 #数据集构建 #人类参与评测 #语言识别

评分：**7.2/10** | 创新 1.2/2 | 技术严谨 1.0/1.5 | 实验充分 1.0/1.5 | 清晰度 0.7/1 | 影响力 0.8/1.5 | 开源 1.2/1.5 | 可复现 0.3/0.5 | 工程/实践 1.0/1.5

排名：前50% | 文档类型：数据集与基准 | 主任务：#语言识别 | 主方法：#数据集构建

会议来源：[官方记录](https://www.isca-archive.org/jep_2026/fabre26_jep.html) · [官方 PDF](https://www.isca-archive.org/jep_2026/fabre26_jep.pdf)

👥 **作者与机构**

- Diandra Fabre：机构信息未能从会议 PDF 纯文本可靠映射
- Mathieu Avanzi：机构信息未能从会议 PDF 纯文本可靠映射
- François Portet：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

该研究以法语访谈短语音片段为输入，输出8类区域口音标签，难点在于类内变异大而标注资源稀缺，且相近地域口音连母语听者也难以稳定分辨。方法链分三步：先以协同听辨结合元数据校核为CFPR186名说话人构建参考标签，再用87人在线感知实验检验标签可辨性并以多数投票与一致性分析回流评估标签可靠性，最后冻结MMS\-LID\-256编码器仅训练8类分类头完成自动分类。以Common Voice22\.0训练的模型在CFPR6599个片段上推理，并将片段预测聚合到说话人级作为下一步评测输入。与Voxlect粗分为4类的机制不同，该研究坚持更细的社会语言学8分，并以统一CFPR测试揭示粗粒度高分掩盖细粒度混淆，具有基准诊断意义。在CFPR测试集下，M\_cv22的整体准确率为40\.98，高于M\_aug的整体准确率25\.04。该结论适用边界限于短时访谈语音，对法国中部与东部/北部混合类及小样本海外类的外推尚未验证。原文未披露训练、推理或部署成本。

🔗 **开源资源**

- 数据相关资源：<https://zenodo.org/records/18848970> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 2. [用无标注空管语音改造 Whisper 编码器：BEARD 为何要把自监督放在中间层并用蒸馏拴住解码器](/posts/conference-jep-2026-conference-paper-id-bagat26-jep-f3d897c9ab/)

> 英文题目：*[Adaptation de domaine de Whisper à l'aide de l'apprentissage auto\-supervisé](/posts/conference-jep-2026-conference-paper-id-bagat26-jep-f3d897c9ab/)*

标签：#知识蒸馏 #领域适应 #自监督学习 #语音识别

评分：**7.1/10** | 创新 1.3/2 | 技术严谨 1.0/1.5 | 实验充分 1.0/1.5 | 清晰度 0.7/1 | 影响力 0.8/1.5 | 开源 1.0/1.5 | 可复现 0.3/0.5 | 工程/实践 1.0/1.5

排名：前50% | 文档类型：方法研究 | 主任务：#语音识别 | 主方法：#自监督学习

会议来源：[官方记录](https://www.isca-archive.org/jep_2026/bagat26_jep.html) · [官方 PDF](https://www.isca-archive.org/jep_2026/bagat26_jep.pdf)

👥 **作者与机构**

- Raphaël Bagat：机构信息未能从会议 PDF 纯文本可靠映射
- Irina Illina：机构信息未能从会议 PDF 纯文本可靠映射
- Emmanuel Vincent：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

空中交通管制语音的自动语音识别以管制员与飞行员的噪声通话为输入并输出转写文本，难点集中在非母语口音、低信噪比与专用短语结构导致的域偏移。所提方法域适应编码器重训与蒸馏 BEST\-RQ Encoder Adaptation with Re\-training and Distillation &\#40;BEARD&\#41; 先复制冻结教师编码器并保留可训学生编码器，再对学生中间层施加随机投影量化预测以学习目标域声学表示，随后在未掩蔽区域用两路余弦蒸馏约束中间层与输出层贴近教师，最后将适配后编码器与原解码器用少量标注语音联合微调。与直接在编码器输出做自监督预训练不同，该方法刻意避开顶层并用双重蒸馏维持编码器解码器接口稳定，使声学适应不破坏语言解码。在空中交通管制语料 Air Traffic Control 2 &\#40;ATCO2&\#41; 四折交叉验证下，最优配置相对同量标注微调基线将词错误率 Word Error Rate &\#40;WER&\#41; 相对降低 12%。该结论目前仅在小型编码器解码器模型与单一噪声管制域内验证，对更大模型、多语言混合及其他噪声域的外推尚未证明。单轮大规模重训在 8 卡 V100 上耗时约 7 小时，推理沿用贪婪搜索而无额外开销。

🔗 **开源资源**

- 代码相关资源：<https://gitlab.inria.fr/rbagat/beard> — 链接可访问（HTTP 200）
- 第三方资源：<https://github.com/usnistgov/SCTK.git> → <https://github.com/usnistgov/SCTK> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 3. [弱擦音还是强辅音：马赛语 Arusa 方言 /w/ 的时长与收紧度如何撑起 fortis 对立](/posts/conference-jep-2026-conference-paper-id-ghio26-jep-ccd6adb18a/)

> 英文题目：*[Évidence acoustique du contraste fortis/lenis de l’approximante labio\-vélaire /w/ en Maa Arusa](/posts/conference-jep-2026-conference-paper-id-ghio26-jep-ccd6adb18a/)*

标签：#统计分析 #语音学与音系 #语音 #语音属性识别

评分：**7.1/10** | 创新 1.4/2 | 技术严谨 1.0/1.5 | 实验充分 1.0/1.5 | 清晰度 0.8/1 | 影响力 0.8/1.5 | 开源 1.0/1.5 | 可复现 0.3/0.5 | 工程/实践 0.8/1.5

排名：前50% | 文档类型：应用研究 | 主任务：#语音属性识别 | 主方法：#统计分析

会议来源：[官方记录](https://www.isca-archive.org/jep_2026/ghio26_jep.html) · [官方 PDF](https://www.isca-archive.org/jep_2026/ghio26_jep.pdf)

👥 **作者与机构**

- Alain Ghio：机构信息未能从会议 PDF 纯文本可靠映射
- Michael Karani：机构信息未能从会议 PDF 纯文本可靠映射
- Yohann Meynadier：机构信息未能从会议 PDF 纯文本可靠映射
- Brigitte Bigi：机构信息未能从会议 PDF 纯文本可靠映射
- Didier Demolin：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

该研究输入为坦桑尼亚Arusa Maa孤立词朗读波形，输出为唇软腭近似音强式/ŵ/与弱式/w/是否存在系统声学差异的判定，难点在于元音间近似音呈渐变弹道式过渡且弱式常退化为元音过渡，人工划界不可靠。方法链先由参照人领读 elicitation采集9名母语者多遍重复语料并同步记录声学信号，剔除受损样本后输出可用波形进入对齐。接着基于Maa词典的SPPAS强制对齐自动给出目标段边界并输出段时长，其边界再向两侧扩展窗计算RMS序列并做二次多项式拟合得到二次项系数，最后经Shapiro正态检验后用Wilcoxon检验组间差异。与仅凭正字法与印象推测强式更长更紧的已有描述不同，该工作把紧度操作化为相对振幅形态，强式因 constriction增强使辐射能量下降形成能量凹陷，对应RMS曲线呈凸形，从而可用符号判定紧度。在孤立词语料条件下，强式/ŵ/的时长指标为117\.612 ms，高于弱式/w/可测子集的时长指标69\.391 ms。二次项均值符号相反且逐说话人方向基本一致，弱式另有约三分之二样本短至30 ms以下而难以可靠定界。该结论适用边界仅为受控孤立词中Arusa方言/w/的时长与紧度差异，/j/对立、自发语、跨方言及唇形视频与感知相关性均尚未验证。原文未披露训练、推理或部署成本。

🔗 **开源资源**

- 数据相关资源：<https://darkwing.uoregon.edu/~maasai/> — 链接可访问（HTTP 200）
- 数据相关资源：<https://doi.org/10.5281/ZENODO.10389820> → <https://zenodo.org/records/10389820> — 链接可访问（HTTP 200）
- 复现相关资源：<https://mapcarta.com/N10836698430> — 暂时无法访问
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 4. [重音走出重读音节：意大利语中元音到元音协同发音的抵抗与手势缪模型](/posts/conference-jep-2026-conference-paper-id-orrico26-jep-851426ff68/)

> 英文题目：*[L’accent au\-delà des frontières syllabiques : coarticulation V\-à\-V et geste\-µ en italien](/posts/conference-jep-2026-conference-paper-id-orrico26-jep-851426ff68/)*

标签：#统计分析 #发声与构音 #韵律 #语音 #语音属性识别

评分：**7.1/10** | 创新 1.4/2 | 技术严谨 1.2/1.5 | 实验充分 1.1/1.5 | 清晰度 0.8/1 | 影响力 0.8/1.5 | 开源 1.5/1.5 | 可复现 0.3/0.5 | 工程/实践 0.0/1.5

排名：前50% | 文档类型：理论研究 | 主任务：#语音属性识别 | 主方法：#统计分析

会议来源：[官方记录](https://www.isca-archive.org/jep_2026/orrico26_jep.html) · [官方 PDF](https://www.isca-archive.org/jep_2026/orrico26_jep.pdf)

👥 **作者与机构**

- Riccardo Orrico：机构信息未能从会议 PDF 纯文本可靠映射
- Maria Giavazzi：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

本文输入为意大利语四音节伪词中跨辅音元音序列的舌体运动轨迹，输出为重音是否扩大相邻元音手势距离并抑制协同发音的判断，难点在于非重读元音不发生弱化且重音效应可能越过音节边界衰减而不易分离前瞻与延存方向。研究先用电磁发音仪同步采集声学与舌体传感器信号并经强制对齐获得音段界标，为后续窗口分析提供时间基准。接着按声学界标取元音末段首段与辅音首尾窗口计算舌体坐标均值与欧氏距离，将连续运动转化为可比较的空间距离。再以线性混合模型分离重音、序列组合及其交互贡献并用归一化舌位分析定位效应来源，使距离变化归因到特定元音与辅音位置。与仅关注重读元音本身或后重读辅音的前人工作不同，本文直接检验远端跨辅音元音的双向前瞻与延存元音到元音协同发音，并将其归因于重读元音超发音与邻接辅音连带位移的µ手势调制，具有验证重音域大于音节的理论意义。原文未提供可核对的关键定量结果。结论适用边界受限于北部意大利语发音人、低元音与高元音交替及清塞音伪词语境，对其他元音系统与自然词汇的外推尚未验证。原文未披露训练、推理或部署成本。

🔗 **开源资源**

- 复现相关资源：<https://osf.io/mhgc5/overview?view_only=520897c39eac47aab0c33afdb1e26774> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 5. [位置不同，对立的作用就不同：法语功能负荷的位置依赖解读](/posts/conference-jep-2026-conference-paper-id-audibert26b-jep-83f7dfdd48/)

> 英文题目：*[Variation de la charge fonctionnelle en français en fonction de la position dans le mot et la syllabe](/posts/conference-jep-2026-conference-paper-id-audibert26b-jep-83f7dfdd48/)*

标签：#统计分析 #语音学与音系 #语音 #语音属性识别

评分：**6.8/10** | 创新 1.2/2 | 技术严谨 1.0/1.5 | 实验充分 0.9/1.5 | 清晰度 0.7/1 | 影响力 0.7/1.5 | 开源 1.2/1.5 | 可复现 0.3/0.5 | 工程/实践 0.8/1.5

排名：前50% | 文档类型：方法研究 | 主任务：#语音属性识别 | 主方法：#统计分析

会议来源：[官方记录](https://www.isca-archive.org/jep_2026/audibert26b_jep.html) · [官方 PDF](https://www.isca-archive.org/jep_2026/audibert26b_jep.pdf)

👥 **作者与机构**

- Nicolas Audibert：机构信息未能从会议 PDF 纯文本可靠映射
- Naomi Yamaguchi：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

该研究输入为法语词典音系形式、词类与口语频率，输出为按词内与音节位置划分的音位、音位对与区别特征的功能负载，难点在于罕见词会扭曲计数且位置效应长期被全局平均掩盖。方法第一步基于法语词库以正字形、音系转写与词类组合定义词形并做鼻元音合并等规范化，其输出的清洗词表进入第二步的位置标注。第二步为每个音段标注词首、词中、词末及辅音攻击与韵尾、元音开放与闭合音节等位置，输出带位置标签的候选集进入第三步的对比计数。第三步穷举同词类内可成词的全部替换对并过滤为仅差一个区别特征的最小对，以两词频率乘积加权求和得到功能负载。相对多特征最小对计数与基于熵的方法，该机制避免了低频位置出现虚高估计并能分离特征贡献，具有位置可比的实际意义。原文未提供可核对的关键定量结果。结论的适用边界受限于标准法语词典法语，尚未验证自发口语与历时音变预测等外推范围。原文未披露训练、推理或部署成本。

🔗 **开源资源**

- 代码相关资源：<https://github.com/nicolasaudibert/position_dependent_functional_load> — 链接可访问（HTTP 200）
- 演示资源：<https://shiny.laboratoirephonetiquephonologie.fr/pairesMin_fr/> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 6. [都用边界和重音断句，为何运动性言语障碍的切分轮廓仍然不同](/posts/conference-jep-2026-conference-paper-id-gindre26-jep-658561c72e/)

> 英文题目：*[Exploration du phrasé prosodique pour la caractérisation des troubles moteurs de la parole](/posts/conference-jep-2026-conference-paper-id-gindre26-jep-658561c72e/)*

标签：#数据标注 #韵律 #言语障碍 #语音 #病理语音评估

评分：**6.6/10** | 创新 1.3/2 | 技术严谨 1.1/1.5 | 实验充分 1.1/1.5 | 清晰度 0.8/1 | 影响力 0.5/1.5 | 开源 1.0/1.5 | 可复现 0.3/0.5 | 工程/实践 0.5/1.5

排名：前50% | 文档类型：应用研究 | 主任务：#病理语音评估 | 主方法：#数据标注

会议来源：[官方记录](https://www.isca-archive.org/jep_2026/gindre26_jep.html) · [官方 PDF](https://www.isca-archive.org/jep_2026/gindre26_jep.pdf)

👥 **作者与机构**

- Anne\-Flore Gindre：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

本研究输入为法语朗读语句录音与对应文本，输出为运动性言语障碍亚型的韵律短语剖面，难点在于感知上的慢速与断裂既可能源于计划与编程缺陷，也可能源于执行与呼吸限制。首先蒙特利尔强制对齐器自动切分对齐词、音素与音节并经Praat人工校对获得时间锚点，其输出进入逐说话人校准的感知性韵律标注，标注边界强弱与节奏突显强弱。随后以事件存在率、等级分布与区间容量为因变量，以短语与被试为随机效应构建混合效应模型检验组别效应，组间差异经Bonferroni事后检验确认。相对以往只报告语速或停顿数的声学描述，该工作把构成成分结构与突显结构分开建模，因而能区分事件过多型与分布偏移型紊乱并对应计划与执行解释。在MoSpeeDi/ChaSpeePro朗读语料一致性评测下，边界强度的加权kappa指标为0\.75，低于突显强度的加权kappa指标0\.77。失用组同时提高词尾与词内边界及突显出现率并压缩同级极强边界间隔音节数，帕金森与共济失调组存在率正常但极强边界占比升高且区间容量走向分离。该结论适用边界受限于受控朗读的法语短句，尚未验证自发言语、其他语言与严重度分层的可外推性。原文未披露训练、推理或部署成本

🔗 **开源资源**

- 数据相关资源：<https://www.unige.ch/fapse/mospeedi/mospeedi-dataset> — 链接可访问（HTTP 200）
- 第三方资源：<https://gamlj.github.io/> — 链接可访问（HTTP 200）
- 第三方资源：<https://rhapsodie.modyco.fr/tuto/Codage> — 链接不可用（HTTP 404）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 7. [普通话拼音 r 是塞擦类的阻塞音还是边音类的响音：从知觉修复看响度层级](/posts/conference-jep-2026-conference-paper-id-jiang26-jep-c90b63c654/)

> 英文题目：*[Le /r/ mandarin se comporte\-t\-il comme une obstruante ou comme une liquide ?](/posts/conference-jep-2026-conference-paper-id-jiang26-jep-c90b63c654/)*

标签：#心理声学实验 #语音学与音系 #言语感知 #语音 #语音属性识别

评分：**6.5/10** | 创新 1.3/2 | 技术严谨 1.2/1.5 | 实验充分 0.8/1.5 | 清晰度 0.8/1 | 影响力 0.8/1.5 | 开源 1.5/1.5 | 可复现 0.1/0.5 | 工程/实践 0.0/1.5

排名：前50% | 文档类型：理论研究 | 主任务：#语音属性识别 | 主方法：#心理声学实验

会议来源：[官方记录](https://www.isca-archive.org/jep_2026/jiang26_jep.html) · [官方 PDF](https://www.isca-archive.org/jep_2026/jiang26_jep.pdf)

👥 **作者与机构**

- Yezhou Jiang：机构信息未能从会议 PDF 纯文本可靠映射
- Pierre André Hallé：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

普通话拼音 \`\`\<r\>\`\` 的音系地位存在分歧：近期描写主张其为近音型颤音 /r/、与边音 /l/ 对立，传统描写与历史音系学主张其为卷舌擦音 /ʐ/、与 /ʂ/ 配对。本文输入为塞音加目标辅音构成的非词对立，输出为母语听者能否区分辅音簇与带央元音过渡形式的感知判断，难点在于表面常呈近音实现却可能具有阻塞音音系行为。研究先以母语者录制塞音加 /l， s， r/ 的 C1C2 与 C1əC2 非词对，再组织30名普通话单语听者完成词首对比的辨别任务，随后按目标辅音类型比较辨别正确率，最后结合音响顺序原则解释修复偏好差异。与把 \`\`\<r\>\`\` 视作近音流音的近期描写不同，该设计用感知响度而非声学摩擦直判类别归属。在辨别任务中，CəL 与 CL 条件正确率为74\.6%，显著高于 CəR 与 CR 条件的62\.6%与 CəS 与 CS 条件的59\.6%，而后两者之间无显著差异。该结论仅适用于普通话母语者对词首塞音加目标辅音结构的感知，未验证其他辅音组合、语境位置或跨语言群体的外推性。原文未披露训练、推理或部署成本。

🔗 **开源资源**

本次未形成可展示的已核验资源记录，开放状态尚未核实。
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 8. [预训练语言越多越好吗：语音基础模型做音频伪造检测的对照解读](/posts/conference-jep-2026-conference-paper-id-tran26c-jep-b0854d00f6/)

> 英文题目：*[Évaluation de la robustesse des modèles de fondation pour la détection de deepfakes audio : Influence de la diversité linguistique des données de pré\-entraînement](/posts/conference-jep-2026-conference-paper-id-tran26c-jep-b0854d00f6/)*

标签：#SFT #鲁棒性 #多语言 #音频深度伪造检测

评分：**6.5/10** | 创新 0.8/2 | 技术严谨 1.0/1.5 | 实验充分 1.1/1.5 | 清晰度 0.7/1 | 影响力 0.8/1.5 | 开源 1.0/1.5 | 可复现 0.3/0.5 | 工程/实践 0.8/1.5

排名：前50% | 文档类型：应用研究 | 主任务：#音频深度伪造检测 | 主方法：#SFT

会议来源：[官方记录](https://www.isca-archive.org/jep_2026/tran26c_jep.html) · [官方 PDF](https://www.isca-archive.org/jep_2026/tran26c_jep.pdf)

👥 **作者与机构**

- Hoan My Tran：机构信息未能从会议 PDF 纯文本可靠映射
- Damien Lolive：机构信息未能从会议 PDF 纯文本可靠映射
- Aghilas Sini：机构信息未能从会议 PDF 纯文本可靠映射
- David Guennec：机构信息未能从会议 PDF 纯文本可靠映射
- Arnaud Delhay：机构信息未能从会议 PDF 纯文本可靠映射
- Pierre\-François Marteau：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

音频深度伪造检测以原始波形为输入，输出真假二分类结果，难点在于未知合成算法与真实信道失真下泛化急剧下降。本文以语音基础模型为可微特征提取器，先经卷积前端将 16 kHz 波形压缩为约 20 ms 帧级隐变量，再由深层 Transformer 编码器输出上下文表示，随后全局时间平均得到定长向量，最后经线性层与 Softmax 完成欺骗判定，全链路在 ASVspoof 2019 LA 训练集上微调。与既有反欺骗工作依赖单语 wav2vec 2\.0 或 HuBERT 不同，本文将预训练语言多样性作为核心变量，对比单语系与覆盖数十至上千语言的多语系基础模型，揭示了语言广度带来的声学不变性收益。在 In\-the\-Wild 外域测试上多语模型 XLS\-R\-128\-0\.3B 取得 4\.97% 等错误率，显著优于单语模型普遍高于 10\.79% 的水平，证明适度多语预训练已足够实现鲁棒检测。该结论目前仅在英语训练加英语为主测试的短句场景验证，未覆盖中文等多语攻击、重放攻击与对抗样本。原文未披露训练、推理或部署成本。

🔗 **开源资源**

- 数据相关资源：<https://doi.org/10.7488/ds/2555> → <https://datashare.ed.ac.uk/items/31074a11-b6f6-4e92-a4ad-07093f8c0c45> — 链接可访问（HTTP 200）
- 数据相关资源：<https://doi.org/10.5281/zenodo.4817650> → <https://zenodo.org/records/4837263> — 链接可访问（HTTP 200）
- 数据相关资源：<https://doi.org/10.5281/zenodo.4835107> → <https://zenodo.org/records/4835108> — 链接可访问（HTTP 200）
- 数据相关资源：<https://deepfake-total.com/in_the_wild> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 9. [用同一套国际音标序列做语种识别：可解释的音位组合为何仍摆脱不了语言偏置](/posts/conference-jep-2026-conference-paper-id-iradukunda26-jep-61d27abaa5/)

> 英文题目：*[Identification de la langue par modélisation phonotactique de séquences en API](/posts/conference-jep-2026-conference-paper-id-iradukunda26-jep-61d27abaa5/)*

标签：#统计分析 #语音学与音系 #多语言 #语音 #语言识别

评分：**6.4/10** | 创新 1.0/2 | 技术严谨 1.2/1.5 | 实验充分 1.2/1.5 | 清晰度 0.8/1 | 影响力 0.9/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 1.0/1.5

排名：前50% | 文档类型：应用研究 | 主任务：#语言识别 | 主方法：#统计分析

会议来源：[官方记录](https://www.isca-archive.org/jep_2026/iradukunda26_jep.html) · [官方 PDF](https://www.isca-archive.org/jep_2026/iradukunda26_jep.pdf)

👥 **作者与机构**

- Murielle Iradukunda：机构信息未能从会议 PDF 纯文本可靠映射
- Raphaël Duroselle：机构信息未能从会议 PDF 纯文本可靠映射
- Clara Ponchard：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

自动语言识别需从朗读语音判定目标语言，难点在于短语音片段信息不足、近似语言对易混淆与声学抽取器对未见语言的系统性偏置。该方法链分三步：通用声学抽取器将波形转为逐帧国际音标符号后验，再经无语言模型的贪婪解码得到单条名义语言无关符号序列，随后每种语言的五元文法模型估计该序列似然并经逻辑回归校准输出判别分。贪婪解码输出直接作为下一阶段 n 元建模的输入以避免引入目标语言先验，而校准模块则将多语言似然比转化为可比的闭集分类决策。相比依赖参考语言音素集的并行解码，该链条改用统一符号表以实现跨语言共享与基于高辨别力双音子的分数可分解解释。在FLEURS测试集下，本系统五元文法模型的准确率为94\.2%，高于TitaNet\-LID的准确率93\.8%。然而贪婪解码音素错误率平均超过47%，且用文本音素化序列训练的模型迁移到预测序列时性能崩塌，说明所谓无关表征仍隐含语言相关性。因此其结论适用边界受限于朗读语音与闭集分类协议，在短句与近似语言对上失败条件显著，跨信道与开放集场景尚未验证，原文未披露训练、推理或部署成本。

🔗 **开源资源**

本次未形成可展示的已核验资源记录，开放状态尚未核实。
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 10. [重叠语音靠什么被认出来：短时起伏与长时交互线索的分工](/posts/conference-jep-2026-conference-paper-id-lebourdais26-jep-8714939949/)

> 英文题目：*[Propriétés acoustiques et temporelles dans un détecteur de parole superposée\.](/posts/conference-jep-2026-conference-paper-id-lebourdais26-jep-8714939949/)*

标签：#CNN #可解释性 #语音 #重叠语音检测

评分：**6.4/10** | 创新 1.2/2 | 技术严谨 1.2/1.5 | 实验充分 0.7/1.5 | 清晰度 0.7/1 | 影响力 0.8/1.5 | 开源 1.0/1.5 | 可复现 0.3/0.5 | 工程/实践 0.5/1.5

排名：前50% | 文档类型：方法研究 | 主任务：#重叠语音检测 | 主方法：#CNN

会议来源：[官方记录](https://www.isca-archive.org/jep_2026/lebourdais26_jep.html) · [官方 PDF](https://www.isca-archive.org/jep_2026/lebourdais26_jep.pdf)

👥 **作者与机构**

- Martin Lebourdais：机构信息未能从会议 PDF 纯文本可靠映射
- Marie Tahon：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

重叠语音检测需对连续音频逐帧输出单人语音与多人重叠的分割标签，难点在于重叠定义与标注协议不一、媒体中音量差异使噪声难分及人声babble干扰不清。本文复用已有多任务多标签时域卷积分割器作为待解释基线，先输出重叠类伪概率与logits以锁定时间信息评估起点。接着用帧间差分剥离绝对特征只保留短时变化输入同一分割器，对比绝对输入性能以检验短时结构充分性。然后以前置1 s单人声拼接的4 s窗对照无上下文窗，仅评估后3 s共有段以分离长时过渡贡献。最后对窗内帧按比例混合破坏内部时序并观察召回与logits漂移以验证混乱度偏好。在DIHARD III测试集评测下，仅用帧差分Δ的WavLM的F1\-score为0,654，低于使用绝对特征的WavLM的F1\-score 0,680。与直接提出新检测器不同，该扰动探针链揭示模型将时间不连续映射为重叠倾向，长时过渡与内部异质性共同决定判定。该结论适用边界受限于所用TCN分割器、4 s窗与ALLIES和DIHARD III语料组合，尚未验证流式低信噪远场与其他架构的外推性，原文未披露训练、推理或部署成本。

🔗 **开源资源**

- 数据相关资源：<https://lium.univ-lemans.fr/en/corpus-allies/> — 链接可访问（HTTP 200）
- 第三方资源：<https://pypi.org/project/pyannote.audio/> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 11. [大模型造数据、小模型干活：库尔德语低资源语音识别的节俭路线](/posts/conference-jep-2026-conference-paper-id-mohammadamini26-jep-ce5803e0ad/)

> 英文题目：*[Apprentissage de modèles frugaux pour les langues peu dotées à partir de larges modèles d'ASR](/posts/conference-jep-2026-conference-paper-id-mohammadamini26-jep-ce5803e0ad/)*

标签：#知识蒸馏 #高效推理 #低资源 #语音 #语音识别

评分：**6.4/10** | 创新 1.2/2 | 技术严谨 1.2/1.5 | 实验充分 1.0/1.5 | 清晰度 0.7/1 | 影响力 0.8/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 1.2/1.5

排名：前50% | 文档类型：应用研究 | 主任务：#语音识别 | 主方法：#知识蒸馏

会议来源：[官方记录](https://www.isca-archive.org/jep_2026/mohammadamini26_jep.html) · [官方 PDF](https://www.isca-archive.org/jep_2026/mohammadamini26_jep.pdf)

👥 **作者与机构**

- Mohammad Mohammadamini：机构信息未能从会议 PDF 纯文本可靠映射
- Marie Tahon：机构信息未能从会议 PDF 纯文本可靠映射
- Aghilas Sini：机构信息未能从会议 PDF 纯文本可靠映射
- Antoine Laurent：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

本文处理中库尔德语（Central Kurdish）语音识别（Automatic Speech Recognition， ASR）的输入为连续语音、输出为规范化文本，难点在于人工标注仅177小时且仅1\.91万独特句、重复严重，而大模型推理又超出本地算力。方法链分为三步：先用能量检波语音活动检测（Voice Activity Detection， VAD）将4300小时有声书切分为短句，再将多语言大模型Seamless v2在人工标注上微调后生成伪标签（Pseudo\-Label， PL），最后经语速与置信度等多重过滤得到3300小时数据以训练轻量Transformer。与直接在小标注上训练轻量模型相比，该链条的关键差异是用已适配大模型同时解决语言覆盖与标注质量问题，而非单纯做数据增广。在Asosoft测试集上微调大模型词错误率（Word Error Rate， WER）为8\.18%，31M参数轻量模型伪标签预训练再人工微调后达到7\.67%，在Fleurs测试集上则为20\.31%对22\.46%，基本持平且体积缩小约75倍。摘要中另写Fleurs大模型20\.01%与轻量7\.57%，与正文表格20\.31%不一致，应以正文表格为准。结论仅在中库尔德语有声书域内验证，对噪声、方言偏移与其它低资源语言尚未验证。轻量模型在CPU上数十秒完成推理而大模型无法实时运行，原文未披露训练、推理或部署成本的完整量化。

🔗 **开源资源**

本次未形成可展示的已核验资源记录，开放状态尚未核实。
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 12. [只有 32 小时班巴拉语数据时，把解码器对折而不砍掉](/posts/conference-jep-2026-conference-paper-id-sy26-jep-4e68cf8823/)

> 英文题目：*[BaldWhisper: réduction des coûts par élagage et fusion des couches](/posts/conference-jep-2026-conference-paper-id-sy26-jep-4e68cf8823/)*

标签：#模型剪枝 #高效推理 #低资源 #语音识别

评分：**6.4/10** | 创新 1.2/2 | 技术严谨 1.2/1.5 | 实验充分 0.9/1.5 | 清晰度 0.7/1 | 影响力 0.9/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 1.2/1.5

排名：前50% | 文档类型：方法研究 | 主任务：#语音识别 | 主方法：#模型剪枝

会议来源：[官方记录](https://www.isca-archive.org/jep_2026/sy26_jep.html) · [官方 PDF](https://www.isca-archive.org/jep_2026/sy26_jep.pdf)

👥 **作者与机构**

- Yaya Sy：机构信息未能从会议 PDF 纯文本可靠映射
- Irina Illina：机构信息未能从会议 PDF 纯文本可靠映射
- Christophe Cerisara：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

该工作处理班巴拉语语音识别，输入为真实场景语音，输出为转写文本，难点在于标注仅约32小时、拼写非标准化且频繁混用外语发生语码切换。方法第一步将Whisper\-base解码器相邻两层按加权平均融合成三层浅解码器，以保留相似激活并减少解码层数；第二步以交叉熵加知识蒸馏微调学生编码器与融合后解码器，使冻结教师分布约束压缩后输出并恢复精度。第三步对共享输入输出嵌入矩阵做奇异值分解低秩近似，并以特征蒸馏约束保持输入查询与输出投影一致，压缩后嵌入进入最终微调。与直接删层或删词表路线不同，该方法以融合替代删除保留层间信息，以低秩替代词表剪枝从而兼容跨语言词元生成，避免了大数据重训。在Bambara测试集下，压缩模型的WER为36\.49%，高于Whisper\-base基线的WER33\.11%。该结论适用边界受限于单语言离线解码与Whisper\-base规模，尚未验证大模型与其他语言及流式场景的外推性。在硬件与推理开销上，微调使用单块A100\-80GB训练20轮，压缩模型在MacBook Air M1上达到约2\.14倍加速且参数减少48%。

🔗 **开源资源**

- 数据相关资源：<https://huggingface.co/datasets/RobotsMali/jeli-asr> — 暂时无法访问
- 第三方资源：<https://ax.dev/> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 13. [常州吴语是左重还是右重：名词短语的部分左主导与动词短语的协同发音之辨](/posts/conference-jep-2026-conference-paper-id-chen26-jep-69dcf5c107/)

> 英文题目：*[Étude acoustique du sandhi tonal de la langue wu de Changzhou](/posts/conference-jep-2026-conference-paper-id-chen26-jep-69dcf5c107/)*

标签：#统计分析 #语音学与音系 #韵律 #语音 #语音属性识别

评分：**6.3/10** | 创新 1.2/2 | 技术严谨 1.1/1.5 | 实验充分 0.9/1.5 | 清晰度 0.8/1 | 影响力 0.7/1.5 | 开源 1.0/1.5 | 可复现 0.3/0.5 | 工程/实践 0.3/1.5

排名：前50% | 文档类型：理论研究 | 主任务：#语音属性识别 | 主方法：#统计分析

会议来源：[官方记录](https://www.isca-archive.org/jep_2026/chen26_jep.html) · [官方 PDF](https://www.isca-archive.org/jep_2026/chen26_jep.pdf)

👥 **作者与机构**

- Yu Chen：机构信息未能从会议 PDF 纯文本可靠映射
- Nathalie Vallee：机构信息未能从会议 PDF 纯文本可靠映射
- Thi Thuy Hien Tran：机构信息未能从会议 PDF 纯文本可靠映射
- Giovanni Depau：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

本文输入为常州吴语双音节名词与动词短语录音，输出为各调类组合在连续语流中的基频实现是否构成音系性变调的判断，难点在于区分真正的左主导变调与纯语音性声调协同发音的渐变连续体。方法链分四步：先用载体句采集196组双音节及对应单音节基线语料并做强制对齐与韵母切分，其输出的切分段进入基频提取与半音z\-score归一化以得到可比轮廓。接着按调类组合、短语类型与音节位置分别拟合广义加性混合模型，最后比较高度系数与轮廓平滑差异以判定变调类型与词汇变异。相对上海话完全左主导加右主导协同发音的二分解释，关键机制差异在于常州话名词短语呈现部分左主导，即第二音节在T1\+X与T7\+X等组合中仍决定整体走向，具有方言比较意义。在动词短语与单音节基线比较条件下，T6\+T1组合第二音节的条件效应系数指标为\-1\.8，低于T8\+T1组合第二音节的条件效应系数指标\-1\.5。结论适用边界受限于受控朗读体双音节样本，向自然语流、老年男性及其他吴语的推广尚未验证。原文未披露训练、推理或部署成本。

🔗 **开源资源**

本次未形成可展示的已核验资源记录，开放状态尚未核实。
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 14. [流式约束下自注意力退化为局部算子：去掉它为何词错误率几乎不变](/posts/conference-jep-2026-conference-paper-id-dkhissi26-jep-9bd6350666/)

> 英文题目：*[L'auto\-attention est\-elle pertinente pour la reconnaissance automatique de la parole en streaming?](/posts/conference-jep-2026-conference-paper-id-dkhissi26-jep-9bd6350666/)*

标签：#CNN #高效推理 #流式处理 #语音识别

评分：**6.2/10** | 创新 1.2/2 | 技术严谨 1.2/1.5 | 实验充分 1.0/1.5 | 清晰度 0.6/1 | 影响力 0.9/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 1.0/1.5

排名：前50% | 文档类型：方法研究 | 主任务：#语音识别 | 主方法：#CNN

会议来源：[官方记录](https://www.isca-archive.org/jep_2026/dkhissi26_jep.html) · [官方 PDF](https://www.isca-archive.org/jep_2026/dkhissi26_jep.pdf)

👥 **作者与机构**

- Youness Dkhissi：机构信息未能从会议 PDF 纯文本可靠映射
- Valentin Vielzeuf：机构信息未能从会议 PDF 纯文本可靠映射
- Elys Allesiardo：机构信息未能从会议 PDF 纯文本可靠映射
- Anthony Larcher：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

流式自动语音识别以按固定分块增量到达的语音为输入，逐块即时输出转写文本，难点是自注意力本为全局建模设计，在不允许跨块访问过去与未来上下文的严格分块下被迫局部运算却保留高昂计算代价。作者以12层Conformer Transducer为基线在严格分块训练与评测协议下复现该受限行为，先计算每层平均注意力图并在推理时对中心对角外加掩码探测局部性，其输出的退化幅度进入下一步改造依据。基于探测结论提出软硬两条编码器路径，软路径以核长5的一维可变形卷积替代自注意力来自适应聚焦块内相关位置，硬路径直接删除自注意力子层而由核长31的卷积模块同时承担局部与块级聚合。与全局Conformer注意力对全序列做加权不同，两者只做块内自适应局部聚合，因而在严格分块下保留必要感受野的同时降低计算量与参数量，具有实际部署意义。在LibriSpeech test\-clean评测设置下，保留7条中心对角方法的WER为3\.84，高于基线的WER 3\.36。该结果支撑了流式下自注意力主要充当昂贵局部算子的判断，也解释了删除后仍可维持可用词错率的原因。该结论适用边界受限于无跨块历史的单分块训练与评测条件，尚未验证带历史缓存或更依赖长程的自发语音场景，在硬件层面原文在AMD EPYC CPU与RTX 4070 GPU上测量编码器实时率以刻画推理开销。

🔗 **开源资源**

本次未形成可展示的已核验资源记录，开放状态尚未核实。
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 15. [广播里混着音乐和重播，编码器该吃什么：法语语音自监督的数据选择对照](/posts/conference-jep-2026-conference-paper-id-pelloin26-jep-54934b9504/)

> 英文题目：*[Effets de la sélection des données pour l'apprentissage de modèles autosupervisés audio pour le français](/posts/conference-jep-2026-conference-paper-id-pelloin26-jep-54934b9504/)*

标签：#自监督学习 #音乐 #语音 #语音识别

评分：**6.2/10** | 创新 1.2/2 | 技术严谨 1.2/1.5 | 实验充分 1.0/1.5 | 清晰度 0.7/1 | 影响力 1.0/1.5 | 开源 0.2/1.5 | 可复现 0.1/0.5 | 工程/实践 0.8/1.5

排名：前50% | 文档类型：数据集与基准 | 主任务：#语音识别 | 主方法：#自监督学习

会议来源：[官方记录](https://www.isca-archive.org/jep_2026/pelloin26_jep.html) · [官方 PDF](https://www.isca-archive.org/jep_2026/pelloin26_jep.pdf)

👥 **作者与机构**

- Valentin Pelloin：机构信息未能从会议 PDF 纯文本可靠映射
- Lina Bekkali：机构信息未能从会议 PDF 纯文本可靠映射
- Reda Dehak：机构信息未能从会议 PDF 纯文本可靠映射
- David Doukhan：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

该研究面向法语广播档案的通用音频表征，输入为30秒电视与广播片段，输出为可支撑识别与检测的冻结或微调编码器，难点在于音乐与噪声混合、性别失衡与大规模重复如何影响下游。作为数据集与基准型工作，作者从1940至2022年INA档案随机抽取473k小时，经声学指纹去重154k小时并剔除623小时评测重叠后，随机截取12M个30秒片段构成100k小时母库，再用Whisper、InaSpeechSegmenter与自研音乐比例估计器自动标注语言、语音、音乐与感知性别。接着派生6个1000小时受控子集，每个子集独立预训练一个93M参数的data2vec2编码器。与在有声书上预训练的法语基线不同，该流程保留真实广播混合分布并可控对比数据成分，因而能分离音乐与多样性效应。在Antract、QUAERO、EPAC、ESTER1与REPERE联合训练的无语言模型贪婪解码评测中，无音乐子集全局词错率为14\.4%，相对随机基线的15\.3%下降0\.9个百分点。该结论仅在1000小时与100k步设置下验证，未验证100k小时全量训练，性别均衡仅在除ESTER1外缩小男女相对差距，音乐检测仍落后专用music2vec。原文未披露训练与推理成本。

🔗 **开源资源**

- 模型相关资源：<https://hf.co/spaces/ina-foss/LREC-2026-Data-Selection-Effects> → <https://huggingface.co/spaces/ina-foss/LREC-2026-Data-Selection-Effects> — 暂时无法访问
- 演示资源：<https://hf.co/spaces/ina-foss/LREC-2026-Data-Selection-Effects> → <https://huggingface.co/spaces/ina-foss/LREC-2026-Data-Selection-Effects> — 暂时无法访问
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 16. [少资源语言先补数据质量：LELD 用混合转写把捷克语等三语 ASR 做上去](/posts/conference-jep-2026-conference-paper-id-pettirossi26-jep-26ce4fb389/)

> 英文题目：*[LELD : Un corpus de parole multilingue pour la reconnaissance automatique de la parole dans des langues européennes peu dotées](/posts/conference-jep-2026-conference-paper-id-pettirossi26-jep-26ce4fb389/)*

标签：#数据集 #数据集构建 #低资源 #多语言 #语音识别

评分：**6.2/10** | 创新 1.2/2 | 技术严谨 1.2/1.5 | 实验充分 0.9/1.5 | 清晰度 0.8/1 | 影响力 1.0/1.5 | 开源 0.0/1.5 | 可复现 0.1/0.5 | 工程/实践 1.0/1.5

排名：前50% | 文档类型：数据集与基准 | 主任务：#语音识别 | 主方法：#数据集构建

会议来源：[官方记录](https://www.isca-archive.org/jep_2026/pettirossi26_jep.html) · [官方 PDF](https://www.isca-archive.org/jep_2026/pettirossi26_jep.pdf)

👥 **作者与机构**

- Amelia Pettirossi：机构信息未能从会议 PDF 纯文本可靠映射
- Inae Song：机构信息未能从会议 PDF 纯文本可靠映射
- Gabriele Chignoli：机构信息未能从会议 PDF 纯文本可靠映射
- Khalid Choukri：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

本文任务是将议会与机构录音转写为文字，输入为多说话人远场混响语音，输出为规范化正字法文本，难点在于捷克语、爱沙尼亚语与希腊语形态丰富且公开资源稀缺异构。方法链分四步推进：先从公共机构抓取原始音频并统一转码重采样，再用语音活动检测与说话人日志分割出可标注片段，接着以基线模型预转写加母语者人工校对建立高质量种子集，最后用正字纠错与语言等价规则半自动扩量并回训识别模型。相比直接复用Mozilla Common Voice与VoxPopuli，其差异在于把转写规范、跨标注一致性校验与评测归一化显式纳入流水线，使形态变体不再计为错误。在约5小时独立双标注测试集上，引入首批约100小时自建数据后归一化词错误率从基线大幅降至10%左右，最终1500小时全量训练后希腊语达到3\.38%。该结论仅适用于机构演讲域内评测与归一化词错误率口径，尚未验证跨域泛化与外部基准可比性。原文未披露训练、推理或部署成本。

🔗 **开源资源**

本次未形成可展示的已核验资源记录，开放状态尚未核实。
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 17. [跳过转写直接做摘要：用句子向量把多语言语音送进法语摘要器](/posts/conference-jep-2026-conference-paper-id-chellaf26-jep-332240e3a2/)

> 英文题目：*[Résumé automatique abstractif de la parole de bout en bout, bimodal et translingue](/posts/conference-jep-2026-conference-paper-id-chellaf26-jep-332240e3a2/)*

标签：#多模态学习 #跨语言 #端到端 #语音 #口语理解

评分：**6.0/10** | 创新 1.2/2 | 技术严谨 1.2/1.5 | 实验充分 0.9/1.5 | 清晰度 0.8/1 | 影响力 0.8/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 0.8/1.5

排名：前50% | 文档类型：方法研究 | 主任务：#口语理解 | 主方法：#多模态学习

会议来源：[官方记录](https://www.isca-archive.org/jep_2026/chellaf26_jep.html) · [官方 PDF](https://www.isca-archive.org/jep_2026/chellaf26_jep.pdf)

👥 **作者与机构**

- Chaimae Chellaf：机构信息未能从会议 PDF 纯文本可靠映射
- Salima Mdhaffar：机构信息未能从会议 PDF 纯文本可靠映射
- Yannick Estève：机构信息未能从会议 PDF 纯文本可靠映射
- Stéphane Huet：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

输入为连续长语音或多语语音，输出为法语抽象摘要文本，难点是缺乏大规模音频摘要配对数据且级联转写会传播识别错误。方法先将输入音频按话轮或自动切分切为语句级片段并用SENSE编码为1024维语言无关语义向量以统一双模态表示。接着经线性投影加GeLU激活映射到BARThez的768维编码空间，再由保留词元解码器的语义BARThez自回归生成摘要。训练分两阶段：先在法语MLSUM文本句嵌入上学习摘要，再在DECODA上用文本或语音嵌入微调适配。与词元级联相比，该机制跳过离散转写并依赖语言无关句嵌入空间实现双模态与跨语言共享，同时提升对分割变化的鲁棒性并降低对手工转写的依赖。在DECODA测试集下，文本训练SBARThez的Rouge\-L为24,09，高于语音训练的Rouge\-L 22,80。该结论适用边界限于法语呼叫中心对话与合成朗读类跨语言数据，尚未验证真实噪声、自发多语会议与长摘要忠实度。原文未披露训练、推理或部署成本。

🔗 **开源资源**

- 第三方资源：<https://github.com/snakers4/silero-vad> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 18. [女声真的变低了吗：用贝叶斯证据检验年龄、性别与年代对基频的影响](/posts/conference-jep-2026-conference-paper-id-devauchelle26-jep-d87f60becb/)

> 英文题目：*[Une approche bayésienne pour modéliser l'évolution diachronique de la voix comme marqueur du genre en France](/posts/conference-jep-2026-conference-paper-id-devauchelle26-jep-d87f60becb/)*

标签：#开源工具 #统计分析 #社会语音学 #语音 #语音属性识别

评分：**6.0/10** | 创新 1.2/2 | 技术严谨 1.2/1.5 | 实验充分 1.0/1.5 | 清晰度 0.8/1 | 影响力 0.7/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 0.8/1.5

排名：前50% | 文档类型：方法研究 | 主任务：#语音属性识别 | 主方法：#统计分析

会议来源：[官方记录](https://www.isca-archive.org/jep_2026/devauchelle26_jep.html) · [官方 PDF](https://www.isca-archive.org/jep_2026/devauchelle26_jep.pdf)

👥 **作者与机构**

- Simon Devauchelle：机构信息未能从会议 PDF 纯文本可靠映射
- Lucas Ondel Yang：机构信息未能从会议 PDF 纯文本可靠映射
- David Doukhan：机构信息未能从会议 PDF 纯文本可靠映射
- Rémi Uro：机构信息未能从会议 PDF 纯文本可靠映射
- Nicolas Denier：机构信息未能从会议 PDF 纯文本可靠映射
- Albert Rilliard：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

本文输入为法国广电访谈中说话人平均基频及标注性别年龄与录制年代，输出为性别与年龄效应是否随年代变化的模型判断，难点在于生理老化、录音实践演变与性别展演相互混杂且历史样本极不均衡。方法链分三步：先从国家视听研究所档案提取每人平均基频并按性别与年代分组，输出分组样本进入下一步回归建模。接着对年龄施加零至二阶多项式回归并配置伽马正态共轭先验，得到各分组回归的后验分布并送入证据计算。最后以解析对数证据比较无分组性别分组与性别年代分组假设，并经柔性最大化转化为假设后验概率以选择模型。与既往仅报告均值升降的描述性比较不同，该机制以证据对复杂度惩罚直接回答何种分组值得保留，因而能区分真实演变与过拟合。原文未提供可核对的关键定量结果。该结论适用边界受限于名人主导的全国性视听访谈及所涉历史区间，尚未验证向日常口语或整个法国人口的外推。原文未披露训练、推理或部署成本。

🔗 **开源资源**

本次未形成可展示的已核验资源记录，开放状态尚未核实。
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 19. [把 ResNet 做大做宽之后，说话人验证的误差降了多少，能耗又涨了多少](/posts/conference-jep-2026-conference-paper-id-leguillier26-jep-c4b0b4e75f/)

> 英文题目：*[Analyse de la consommation énergétique et des émissions de carbone pour l’entraînement d’un modèle neuronal de vérification du locuteur](/posts/conference-jep-2026-conference-paper-id-leguillier26-jep-c4b0b4e75f/)*

标签：#CNN #评测协议 #语音 #说话人验证

评分：**6.0/10** | 创新 0.8/2 | 技术严谨 1.2/1.5 | 实验充分 0.9/1.5 | 清晰度 0.8/1 | 影响力 0.8/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 1.2/1.5

排名：前50% | 文档类型：应用研究 | 主任务：#说话人验证 | 主方法：#CNN

会议来源：[官方记录](https://www.isca-archive.org/jep_2026/leguillier26_jep.html) · [官方 PDF](https://www.isca-archive.org/jep_2026/leguillier26_jep.pdf)

👥 **作者与机构**

- Hugo Leguillier：机构信息未能从会议 PDF 纯文本可靠映射
- Driss Matrouf：机构信息未能从会议 PDF 纯文本可靠映射
- Guillaume Lechien：机构信息未能从会议 PDF 纯文本可靠映射
- Mickael Rouvier：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

说话人验证（Speaker Verification，SV）需将变长语音映射为固定维度说话人嵌入（speaker embedding），并在未知说话人与域偏移下保持可分性，而深层网络的训练能耗与碳成本长期缺乏量化。本文以残差网络（Residual Network，ResNet）为载体，在 VoxCeleb2 上训练不同深度、宽度和块分布变体，再用机级传感栈同步采集训练能耗并折算碳排放，最后在域内与域外语料上联合评估错误率与能耗帕累托前沿。与单纯追求精度的已有 SV 研究不同，该工作把能量作为与精度并列的一等优化目标，揭示了中间层集中配置更有效的结构偏好。代表性结果显示 ResNet\-419\-D 在 5 个测试集平均等错率（Equal Error Rate，EER）上为 3\.35%，仅比 ResNet\-200\-D 的 3\.44%相对改善约 2\.6%，而训练能耗从 222\.53 kWh 增长至 895\.67 kWh，达 4 倍以上。结论仅适用于法国低碳电网（19\.6 gCO2e/kWh）与 Tesla V100\-32GB 单一硬件下的 ResNet 训练阶段，未验证推理成本与其他主流架构的外推性。训练成本最高单模型达 895\.67 kWh 与 13\.734 kgCO2e，中等模型可降至约 50 kWh 和 1 kgCO2e 量级。

🔗 **开源资源**

- 第三方资源：<https://www.rte-france.com/en/eco2mix> — 链接不可用（HTTP 404）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 20. [归一化后还能听出发声有多用力吗：从频谱过拟合到自监督表示的跨录音条件泛化](/posts/conference-jep-2026-conference-paper-id-letellier26-jep-a6e77c33d6/)

> 英文题目：*[Estimation robuste de l'intensité vocale à l'aide de représentations auto\-supervisées de la parole](/posts/conference-jep-2026-conference-paper-id-letellier26-jep-a6e77c33d6/)*

标签：#自监督学习 #迁移学习 #鲁棒性 #语音 #语音属性识别

评分：**6.0/10** | 创新 1.2/2 | 技术严谨 1.1/1.5 | 实验充分 1.1/1.5 | 清晰度 0.8/1 | 影响力 0.7/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 0.8/1.5

排名：前50% | 文档类型：方法研究 | 主任务：#语音属性识别 | 主方法：#迁移学习

会议来源：[官方记录](https://www.isca-archive.org/jep_2026/letellier26_jep.html) · [官方 PDF](https://www.isca-archive.org/jep_2026/letellier26_jep.pdf)

👥 **作者与机构**

- Quentin Le Tellier：机构信息未能从会议 PDF 纯文本可靠映射
- Marc Evrard：机构信息未能从会议 PDF 纯文本可靠映射
- Albert Rilliard：机构信息未能从会议 PDF 纯文本可靠映射
- Jean\-Sylvain Liénard：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

语音强度估计需从幅度归一化后的语句推断说话人前方自由场声压级，难点在于归一化抹除明显响度线索后仅剩频谱倾斜等弱线索，且易与麦克风与房间声学指纹混淆。该工作先对音频重采样并按句最大幅度归一化构造去增益输入，以迫使模型从频率内容而非能量大小进行推断。接着并行提取频谱图与梅尔频谱图统计向量及自监督语音模型各层时间平均向量，形成候选语句级表示。然后在英语朗读语句库上训练线性回归与支持向量机并按说话人不重叠划分验证，最优模型再送入法国自采朗读与表演性情感语料检验跨设备跨房间与跨风格泛化。与直接拟合高维频谱不同，冻结自监督浅层表示以掩蔽重构目标在大规模朗读语音上预训练得到更紧凑且对录音特异线索更不敏感的声学抽象，因而降低过拟合。原文未提供可核对的关键定量结果。该结论适用边界受限于朗读与表演性语句级估计，尚未验证自发对话与远场混响等更难外推范围；原文未披露训练、推理或部署成本。

🔗 **开源资源**

本次未形成可展示的已核验资源记录，开放状态尚未核实。
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 21. [不会写脚本也能用 PsyToolkit：DYE 把感知评测做成图形化拼装](/posts/conference-jep-2026-conference-paper-id-audibert26c-jep-775fc92fcb/)

> 英文题目：*[DYE &\#40;Design Your Experiment&\#41; : une interface graphique en ligne pour la conception d’évaluation perceptives avec PsyToolkit](/posts/conference-jep-2026-conference-paper-id-audibert26c-jep-775fc92fcb/)*

标签：#开源工具 #主观评测 #言语感知 #语音 #语音可懂度评估

评分：**5.9/10** | 创新 0.8/2 | 技术严谨 1.0/1.5 | 实验充分 0.3/1.5 | 清晰度 0.7/1 | 影响力 0.6/1.5 | 开源 1.2/1.5 | 可复现 0.3/0.5 | 工程/实践 1.0/1.5

排名：前50% | 文档类型：系统技术报告 | 主任务：#语音可懂度评估 | 主方法：#主观评测

会议来源：[官方记录](https://www.isca-archive.org/jep_2026/audibert26c_jep.html) · [官方 PDF](https://www.isca-archive.org/jep_2026/audibert26c_jep.pdf)

👥 **作者与机构**

- Nicolas Audibert：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

本任务以语音刺激与感知范式需求为输入，以可在PsyToolkit中直接导入编译的感知评估实验为输出，实际难点在于非编程用户需手写脚本并为每个视觉元素指定图像坐标与呈现逻辑。DYE构建了三步方法链：首先图形化配置模块收集强制选择选项、李克特量表点数与指导页等参数并提供实时预览与对齐网格，其输出的版式参数进入版式计算与素材渲染器以生成各元素中心坐标、范围与对应位图。随后代码生成与导出管理器将上述定位结果转换为带详细注释的PsyToolkit脚本及配套图像，并打包为可直接导入编译的压缩档案，同时支持项目存档复用与预定义受控随机呈现顺序。相对已有方法的关键机制差异在于以模块化R与Shiny封装的图形交互替代手写坐标脚本，既保留Go Listen式免编程易用性，又继承PsyToolkit对多样范式的覆盖能力，具有降低使用门槛与节省资深用户时间的实际意义。原文未提供可核对的关键定量结果。该结论的适用边界受限于当前仅覆盖强制选择加少量量表与指导页的简单组合，当多量表与强制选择按钮需同步呈现或复杂布局时，会因rate命令仅顺序呈现而出现失败条件。原文未披露训练、推理或部署成本。

🔗 **开源资源**

- 代码相关资源：<https://github.com/nicolasaudibert/DYE> — 链接可访问（HTTP 200）
- 演示资源：<https://shiny.laboratoirephonetiquephonologie.fr/DYE> → <https://shiny.laboratoirephonetiquephonologie.fr/DYE/> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 22. [合成儿童语音该放在哪一步：只做自监督预训练才增益的儿童语音识别](/posts/conference-jep-2026-conference-paper-id-labbe26-jep-a004349b69/)

> 英文题目：*[Apport des données synthétiques dans l’apprentissage auto\-supervisé pour la reconnaissance de la parole d’enfants](/posts/conference-jep-2026-conference-paper-id-labbe26-jep-a004349b69/)*

标签：#数据增强 #自监督学习 #低资源 #语音 #语音识别

评分：**5.9/10** | 创新 1.2/2 | 技术严谨 1.0/1.5 | 实验充分 1.0/1.5 | 清晰度 0.7/1 | 影响力 0.7/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 1.0/1.5

排名：前50% | 文档类型：应用研究 | 主任务：#语音识别 | 主方法：#自监督学习

会议来源：[官方记录](https://www.isca-archive.org/jep_2026/labbe26_jep.html) · [官方 PDF](https://www.isca-archive.org/jep_2026/labbe26_jep.pdf)

👥 **作者与机构**

- Etienne Labbé：机构信息未能从会议 PDF 纯文本可靠映射
- Lucile Gelin：机构信息未能从会议 PDF 纯文本可靠映射
- Isabelle Ferrané：机构信息未能从会议 PDF 纯文本可靠映射
- Thomas Pellegrini：机构信息未能从会议 PDF 纯文本可靠映射
- Julien Pinquier：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

儿童自发语音识别以声学语音为输入、以字符级转写文本为输出，难点在于儿童音高范围宽且不同于成人、自发口语不流利与语法不规则、标注数据稀缺且部分转写存在缺词与音频文本错配。作者先用成人朗读LibriSpeech与儿童自发My Science Tutor真实音频联合构建自监督表示，再用语音转换克隆儿童音色生成大规模合成音频扩展预训练，最后用真实标注数据微调基于联结时序分类的识别器。关键机制是合成数据仅参与不依赖文本的表示学习，从而绕开合成语音内容缺失与原始标注错误对监督对齐的损害。与真实数据联合基线相比，在My Science Tutor测试集上词错误率由17\.74%降至16\.07%，方向为显著改善，同时成人朗读集也有改善。该结论目前仅在英语8至10岁自发对话及VEVO转换管线下验证，未证明可外推至其他语言、年龄段或朗读与噪声场景。每轮自监督预训练约耗时4天并排放1\.49 kg二氧化碳当量，监督训练则需3至9天对应1\.72至3\.22 kg二氧化碳当量。

🔗 **开源资源**

- 第三方资源：<https://pypi.org/project/num2words/> — 链接可访问（HTTP 200）
- 第三方资源：<https://github.com/mlco2/codecarbon> — 链接可访问（HTTP 200）
- 第三方资源：<https://huggingface.co/spaces/hf-audio/open_asr_leaderboard> — 暂时无法访问
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 23. [小块流式缺未来信息时，用过去帧蒸馏出的语义向量增强当前帧](/posts/conference-jep-2026-conference-paper-id-dkhissi26b-jep-4f89be605a/)

> 英文题目：*[Injection de l'information sémantique au sein des modèles de la reconnaissance automatique de la parole en streaming](/posts/conference-jep-2026-conference-paper-id-dkhissi26b-jep-4f89be605a/)*

标签：#知识蒸馏 #流式处理 #语音 #语音识别

评分：**5.8/10** | 创新 1.2/2 | 技术严谨 1.0/1.5 | 实验充分 1.0/1.5 | 清晰度 0.7/1 | 影响力 0.8/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 0.8/1.5

排名：前50% | 文档类型：方法研究 | 主任务：#语音识别 | 主方法：#知识蒸馏

会议来源：[官方记录](https://www.isca-archive.org/jep_2026/dkhissi26b_jep.html) · [官方 PDF](https://www.isca-archive.org/jep_2026/dkhissi26b_jep.pdf)

👥 **作者与机构**

- Youness Dkhissi：机构信息未能从会议 PDF 纯文本可靠映射
- Valentin Vielzeuf：机构信息未能从会议 PDF 纯文本可靠映射
- Elys Allesiardo：机构信息未能从会议 PDF 纯文本可靠映射
- Anthony Larcher：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

流式自动语音识别以连续音频流为输入，要求在仅见过去与有限未来帧时逐块输出转录文本，需在未来上下文受限下即时解码。低延迟切片使声学证据碎片化，编码器帧表示偏向声学而缺乏长程语义，解码器易产生冗长或不一致预测，导致词错误率显著上升。该方法先用Mistral 7B对训练转录生成改写以构造正负句对，对预训练MPnet句子嵌入教师做领域微调，从而获得全局语义目标。接着以上下文模块接收过去声学帧嵌入，用三层Transformer解码器做注意力池化并经知识蒸馏逼近教师向量，蒸馏损失与RNN\-T损失联合优化。最后将该语义向量拼接到当前切片各帧表示后送入Conformer编码器、联合网络与LSTM预测器贪婪解码，区别于仅依赖声学建模或外部语言模型重打分的已有方法。在LibriSpeech test\-clean评测设置下，SENS\-ASR模型的WER为7\.21%，低于模型基线的WER 7\.55%。增益随切片增大迅速衰减且全上下文下基本消失，其适用边界受限于强流式小切片约束而非通用识别增强。原文未披露训练、推理或部署成本。

🔗 **开源资源**

本次未形成可展示的已核验资源记录，开放状态尚未核实。
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 24. [不重建声音本身：在潜空间里预测被遮住的法语语音](/posts/conference-jep-2026-conference-paper-id-le26-jep-71381ada03/)

> 英文题目：*[Encodeurs autosupervisés unifiés entre les modalités : focus sur la parole en français](/posts/conference-jep-2026-conference-paper-id-le26-jep-71381ada03/)*

标签：#数据集 #自监督学习 #预训练 #语音 #语音识别

评分：**5.8/10** | 创新 1.0/2 | 技术严谨 1.0/1.5 | 实验充分 1.0/1.5 | 清晰度 0.7/1 | 影响力 1.0/1.5 | 开源 0.0/1.5 | 可复现 0.1/0.5 | 工程/实践 1.0/1.5

排名：前50% | 文档类型：模型报告 | 主任务：#语音识别 | 主方法：#自监督学习

会议来源：[官方记录](https://www.isca-archive.org/jep_2026/le26_jep.html) · [官方 PDF](https://www.isca-archive.org/jep_2026/le26_jep.pdf)

👥 **作者与机构**

- Phuong\-Hang Le：机构信息未能从会议 PDF 纯文本可靠映射
- Valentin Pelloin：机构信息未能从会议 PDF 纯文本可靠映射
- Arnault Chatelain：机构信息未能从会议 PDF 纯文本可靠映射
- Maryem Bouziane：机构信息未能从会议 PDF 纯文本可靠映射
- Mohammed Ghennai：机构信息未能从会议 PDF 纯文本可靠映射
- Qianwen Guan：机构信息未能从会议 PDF 纯文本可靠映射
- Kirill Milintsevich：机构信息未能从会议 PDF 纯文本可靠映射
- Salima Mdhaffar：机构信息未能从会议 PDF 纯文本可靠映射
- Aidan Mannion：机构信息未能从会议 PDF 纯文本可靠映射
- Nils Defauw：机构信息未能从会议 PDF 纯文本可靠映射
- Shuyue Gu：机构信息未能从会议 PDF 纯文本可靠映射
- Alexandre Audibert：机构信息未能从会议 PDF 纯文本可靠映射
- Marco Dinarelli：机构信息未能从会议 PDF 纯文本可靠映射
- Yannick Estève：机构信息未能从会议 PDF 纯文本可靠映射
- Lorraine Goeuriot：机构信息未能从会议 PDF 纯文本可靠映射
- Steffen Lalande：机构信息未能从会议 PDF 纯文本可靠映射
- Nicolas Hervé：机构信息未能从会议 PDF 纯文本可靠映射
- Maximin Coavoux：机构信息未能从会议 PDF 纯文本可靠映射
- François Portet：机构信息未能从会议 PDF 纯文本可靠映射
- Étienne Ollion：机构信息未能从会议 PDF 纯文本可靠映射
- Marie Candito：机构信息未能从会议 PDF 纯文本可靠映射
- Maxime Peyrard：机构信息未能从会议 PDF 纯文本可靠映射
- Solange Rossato：机构信息未能从会议 PDF 纯文本可靠映射
- Benjamin Lecouteux：机构信息未能从会议 PDF 纯文本可靠映射
- Aurélie Nardy：机构信息未能从会议 PDF 纯文本可靠映射
- Gilles Sérasset：机构信息未能从会议 PDF 纯文本可靠映射
- Vincent Segonne：机构信息未能从会议 PDF 纯文本可靠映射
- Solène Evain：机构信息未能从会议 PDF 纯文本可靠映射
- Diandra Fabre：机构信息未能从会议 PDF 纯文本可靠映射
- Didier Schwab：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

本文处理法语语音自监督编码，输入为连续声学波形，输出为可微调的上下文表示，难点在于口音、自发变体与广播噪声大而标注稀缺。先由小型卷积预网络接收原始波形并提取帧级向量序列，为掩蔽建模提供时序输入。再将完整向量序列送入教师编码器，同时仅将随机采样的可见片段送入同构的学生编码器，使学生输出成为缺失上下文的受限表示。最后由仅在预训练使用的轻量卷积解码器接收学生输出并回归被掩蔽位置的教师隐表示，以掩蔽区L2距离为损失，而教师参数由学生参数指数移动平均更新并逐步稳定。相对wav2vec2\.0预测量化单元与HuBERT预测离散簇的做法，该机制直接回归上下文隐向量，避开离散量化与表面重建，更侧重高层语义抽象。在ETAPE低资源场景下，Pantagruel\-L\-114k的WER为19\.1，低于LeBenchmark\-w2v\-L\-14k的WER 26\.0。结论适用边界受限于法语朗读、广播与儿童自发语音的微调评测，14k至114k小时在CommonVoice验证集上未持续获益且跨语言零样本尚未验证。原文未披露训练、推理或部署成本。

🔗 **开源资源**

- 模型相关资源：<https://huggingface.co/PantagrueLLM> — 暂时无法访问
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 25. [把大语言模型接到 Whisper 上，为什么朗读提升了、管制通话却没有？](/posts/conference-jep-2026-conference-paper-id-aitbachir26-jep-7939b0bef5/)

> 英文题目：*[Étude de l'association de grands modèles de langage à Whisper dans le domaine du contrôle de la circulation aérienne](/posts/conference-jep-2026-conference-paper-id-aitbachir26-jep-7939b0bef5/)*

标签：#模型融合 #大语言模型 #低资源 #语音 #语音识别

评分：**5.7/10** | 创新 1.0/2 | 技术严谨 1.2/1.5 | 实验充分 1.0/1.5 | 清晰度 0.8/1 | 影响力 0.6/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 0.8/1.5

排名：前50% | 文档类型：应用研究 | 主任务：#语音识别 | 主方法：#模型融合

会议来源：[官方记录](https://www.isca-archive.org/jep_2026/aitbachir26_jep.html) · [官方 PDF](https://www.isca-archive.org/jep_2026/aitbachir26_jep.pdf)

👥 **作者与机构**

- Romuald Ait\-Bachir：机构信息未能从会议 PDF 纯文本可靠映射
- Raphaël Bagat：机构信息未能从会议 PDF 纯文本可靠映射
- Irina Illina：机构信息未能从会议 PDF 纯文本可靠映射
- Emmanuel Vincent：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

空中交通管制语音识别以带噪非母语管制员\-飞行员通话音频为输入，输出符合严格管制短语学的文本转写，实际难点在于标注音频稀缺、信噪比低至\-10dB、口音多样且呼号频率分布特殊。为此先对Whisper\-small在ATCO2训练折上微调并以波束搜索产生K个候选转写，使声学模型适配管制语音并保留多样假设供后续优选。接着二遍重排将K个假设送入Mistral 7B打分并与Whisper分数按权重插值选优，负责整句级语言合理性仲裁而不改动解码过程。同时浅融合在Whisper自回归解码每步将词表对数概率与Mistral对数概率线性插值，负责逐词干预生成路径以解决重排无法挽回已被剪枝正确假设的问题。相对已有单遍Whisper基线，关键差异在于引入外部大模型先验的两种不同介入粒度，重排重用完整假设而浅融合深入解码内循环，实际意义是无需重训声学模型即可注入语言知识。在Common Voice朗读语音评测设置下，Mistral7B二遍重排的WER为14\.18%，低于基线Whisper\-small的WER 15\.28%。但该增益的适用边界受限于朗读语音与通用语言分布，在ATCO2管制语音上最优重排与浅融合均与基线统计等价，提示通用先验难以覆盖管制表达为失败条件。原文未披露训练、推理或部署成本。

🔗 **开源资源**

- 第三方资源：<https://github.com/usnistgov/SCTK.git> → <https://github.com/usnistgov/SCTK> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 26. [朗读中的时间组织：帕金森构音障碍的两个维度与五个无监督轮廓](/posts/conference-jep-2026-conference-paper-id-deghorain26-jep-1d078a31e2/)

> 英文题目：*[Organisation temporelle de la parole lue dans le cadre de la maladie de Parkinson : une étude exploratoire](/posts/conference-jep-2026-conference-paper-id-deghorain26-jep-1d078a31e2/)*

标签：#统计分析 #言语障碍 #语音 #病理语音评估

评分：**5.7/10** | 创新 1.0/2 | 技术严谨 1.0/1.5 | 实验充分 0.7/1.5 | 清晰度 0.8/1 | 影响力 0.4/1.5 | 开源 1.0/1.5 | 可复现 0.3/0.5 | 工程/实践 0.5/1.5

排名：前50% | 文档类型：应用研究 | 主任务：#病理语音评估 | 主方法：#统计分析

会议来源：[官方记录](https://www.isca-archive.org/jep_2026/deghorain26_jep.html) · [官方 PDF](https://www.isca-archive.org/jep_2026/deghorain26_jep.pdf)

👥 **作者与机构**

- Pauline Deghorain：机构信息未能从会议 PDF 纯文本可靠映射
- Kathy Huet：机构信息未能从会议 PDF 纯文本可靠映射
- Véronique Delvaux：机构信息未能从会议 PDF 纯文本可靠映射
- Myriam Piccaluga：机构信息未能从会议 PDF 纯文本可靠映射
- Sophie Fagniart：机构信息未能从会议 PDF 纯文本可靠映射
- Virginie Roland：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

本研究输入为法语标准化文本朗读录音，输出是受试者时间组织剖面归属与临床关联判断，难点在于帕金森运动迟缓型构音障碍异质性大、感知严重度评估主观且与整体运动评分不同步。 方法第一步用MonPaGe\-2\.0\.2\-S对188词朗读做自动对齐与人工校对并提取总时长、停顿、EIS与言语速率等多维时间指标均值并做z\-score标准化。 第二步以主成分分析提取潜维度并将年龄、Hoehn\-Yahr分期与感知严重度作为补充变量投影而不参与轴构建，其输出的前两个主成分直接作为下一步聚类输入。 第三步在保留的前两主成分上做升序层次分类构建树状图得到五个簇划分，再用混合模型刻画簇间时间指标差异。 相对单指标判读，关键机制差异在于多变量分解同时分离整体快慢分割与节律规则性两个正交维度，避免被单一语速误导并显现参数冗余。 在法语朗读语料评测设置下，维度2上débit articulatoire的相关系数指标为0\.70，高于débit de parole的相关系数指标0\.47。 该结论适用边界限于法语朗读任务的时间维度，尚未验证自发话、共振峰声学特征与纵向演变，且重度分期与重度构音障碍样本过少导致外推受限。 原文未披露训练、推理或部署成本。

🔗 **开源资源**

- 数据相关资源：<https://aclanthology.org/L18-1679> → <https://aclanthology.org/L18-1679/> — 链接可访问（HTTP 200）
- 第三方资源：<https://www.r-project.org/> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 27. [把百科知识换成一张图：用句子验证任务测言语可理解度](/posts/conference-jep-2026-conference-paper-id-ghio26b-jep-539dccbbd6/)

> 英文题目：*[Elaboration d’un test de compréhensibilité de la parole utilisant une tâche de vérification de phrases avec support iconographique](/posts/conference-jep-2026-conference-paper-id-ghio26b-jep-539dccbbd6/)*

标签：#心理声学实验 #言语感知 #语音 #语音可懂度评估

评分：**5.7/10** | 创新 1.2/2 | 技术严谨 1.1/1.5 | 实验充分 0.8/1.5 | 清晰度 0.8/1 | 影响力 0.7/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 0.8/1.5

排名：前50% | 文档类型：应用研究 | 主任务：#语音可懂度评估 | 主方法：#心理声学实验

会议来源：[官方记录](https://www.isca-archive.org/jep_2026/ghio26b_jep.html) · [官方 PDF](https://www.isca-archive.org/jep_2026/ghio26b_jep.pdf)

👥 **作者与机构**

- Alain Ghio：机构信息未能从会议 PDF 纯文本可靠映射
- Muriel Lalain：机构信息未能从会议 PDF 纯文本可靠映射
- Marie Rebourg：机构信息未能从会议 PDF 纯文本可靠映射
- Lilia Beladjimi：机构信息未能从会议 PDF 纯文本可靠映射
- Marie Fabre：机构信息未能从会议 PDF 纯文本可靠映射
- Charlotte Rodier：机构信息未能从会议 PDF 纯文本可靠映射
- Carine Andre：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

本研究针对病理语音的可理解性（compréhensibilité）评估难题，输入为朗读的法语简单句语音并配单张场景图，输出为听者对图文是否对应的二选判断及反应时，难点在于区分声学解码失败与百科知识或记忆负荷干扰。方法链分为三步：先按主语加动词加补语1加补语2的四槽模板生成6个场景的语句集，其输出进入图像配准环节生成无歧义的单一视觉参照，再进入在线听辨环节同步呈现声图并采集正确率与对数反应时。与四选一图片理解任务相比，该设计坚持单图加单句验证的句子验证任务（Sentence Verification Task，SVT）逻辑，避免了多图比较引入的视觉搜索偏差和策略性排除作答。在6名说话人乘3种条件乘24句共432条刺激和10名听者的在线实验中，正常条件正确率为87\.7%，显著高于扰动加噪声条件的72\.4%，初步修订版在正常条件下达到97\.9%。该结论目前仅适用于法语健康人模拟退化语音的小样本听辨，尚未在真实口腔癌或构音障碍患者语音上验证。原文未披露训练、推理或部署成本。

🔗 **开源资源**

- 第三方资源：<https://doi.org/10.1159/000519427> → <https://karger.com/article/doi/10.1159/000519427> — 链接不可用（HTTP 403）
- 第三方资源：<https://doi.org/10.2310/7070.2008.1001> — 链接不可用（HTTP 404）
- 第三方资源：<https://doi.org/10.1016/0885-2308> — 链接不可用（HTTP 404）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 28. [元音空间越大越自然吗：用法语共振峰距离诊断语音合成自然度](/posts/conference-jep-2026-conference-paper-id-miniconi26-jep-23b6898ff0/)

> 英文题目：*[Indicateurs phonétiques fondés sur les formants pour l’évaluation de la qualité des systèmes TTS](/posts/conference-jep-2026-conference-paper-id-miniconi26-jep-23b6898ff0/)*

标签：#统计分析 #语音学与音系 #语音 #语音质量评估

评分：**5.7/10** | 创新 1.2/2 | 技术严谨 1.1/1.5 | 实验充分 0.9/1.5 | 清晰度 0.8/1 | 影响力 0.7/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 0.7/1.5

排名：前50% | 文档类型：方法研究 | 主任务：#语音质量评估 | 主方法：#统计分析

会议来源：[官方记录](https://www.isca-archive.org/jep_2026/miniconi26_jep.html) · [官方 PDF](https://www.isca-archive.org/jep_2026/miniconi26_jep.pdf)

👥 **作者与机构**

- Natacha Miniconi：机构信息未能从会议 PDF 纯文本可靠映射
- Jane Wottawa：机构信息未能从会议 PDF 纯文本可靠映射
- Meysam Shamsi：机构信息未能从会议 PDF 纯文本可靠映射
- Anthony Larcher：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

该研究输入为法语TTS合成音频与听众自然度MOS排序，输出是可解释的共振峰音质诊断指标，难点在于自然度成因多维且自动MOS预测缺乏语音学可解释性。方法链分三步：先用蒙特利尔强制对齐器做音素对齐得到元音边界，其输出的切分段进入Parselmouth加Burg算法逐实现提取F1与F2并以四分位距按k为1\.5剔除离群值。最后由平均共振峰坐标派生三角与多边形面积、元音内离散度与元音间距离三类指标，并与系统级MOS做斯皮尔曼秩相关比较。与既有整体元音空间研究的关键机制差异在于细化到F1与F2分轴的局部对比与特定元音不稳定性诊断，因而能定位压缩或混淆位置以指导数据收集与微调。在BC\-FR语料评测设置下，MOS 4\-5组的多边形面积指标为186 060，高于MOS 1\-2组的多边形面积指标143 317。同时F1轴上/i\-E/元音间距离指标与MOS的SRCC为0\.48而/o/在F2上的元音内离散度指标与MOS的SRCC为\-0\.56，前者为正相关而后者为负相关。该结论适用边界受限于单女性说话人朗读体法语与20个TTS系统加1个自然参考的验证范围，向多说话人、自发语体与其他语言的外推尚未验证，原文未披露训练、推理或部署成本。

🔗 **开源资源**

本次未形成可展示的已核验资源记录，开放状态尚未核实。
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 29. [保留高维语音表示，只用一层分类器：KAN 为何比全连接更省且更稳](/posts/conference-jep-2026-conference-paper-id-tran26b-jep-bad9b03962/)

> 英文题目：*[Simplifier la détection des deepfakes audio avec les réseaux de Kolmogorov\-Arnold](/posts/conference-jep-2026-conference-paper-id-tran26b-jep-bad9b03962/)*

标签：#迁移学习 #模型比较 #多语言 #语音 #语音伪造检测

评分：**5.7/10** | 创新 1.0/2 | 技术严谨 1.0/1.5 | 实验充分 1.0/1.5 | 清晰度 0.7/1 | 影响力 0.9/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 0.8/1.5

排名：前50% | 文档类型：方法研究 | 主任务：#语音伪造检测 | 主方法：#迁移学习

会议来源：[官方记录](https://www.isca-archive.org/jep_2026/tran26b_jep.html) · [官方 PDF](https://www.isca-archive.org/jep_2026/tran26b_jep.pdf)

👥 **作者与机构**

- Hoan My Tran：机构信息未能从会议 PDF 纯文本可靠映射
- Aghilas Sini：机构信息未能从会议 PDF 纯文本可靠映射
- David Guennec：机构信息未能从会议 PDF 纯文本可靠映射
- Arnaud Delhay：机构信息未能从会议 PDF 纯文本可靠映射
- Damien Lolive：机构信息未能从会议 PDF 纯文本可靠映射
- Pierre\-François Marteau：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

输入为原始语音波形，输出为真实与伪造的二分类判决，难点在于未知合成算法、编解码压缩与跨语言条件下的泛化。首先冻结跨语言自监督模型抽取 utterance 级表征并做时间平均，得到高维向量。其次将该向量直接送入单层全连接或单层快速 KAN 分类器完成判决，避免降维投影造成信息损失。最后在域内与多域外语料上统一评测泛化能力。与传统重型后端相比，关键机制差异是用可学习单变量样条或径向基函数替代固定线性加非线性，从而增强高维表示的非线性拟合。在 21LA 聚合条件下 KAN 将平均等错误率降至 1\.07%，明显优于全连接的 2\.38%，并在 21DF、ITW、DFADD 上保持小幅优势。该结论仅适用于冻结 XLS\-R 300M 表示与 19LA 训练条件，在 FoR 上 KAN 大幅退化，在 25DF、德语、法语、D\-EN 上亦不如全连接，且未验证持续学习与校准能力。原文未披露训练时长与推理时延等完整成本，部署代价仅能从极简后端结构间接推断。

🔗 **开源资源**

- 模型相关资源：<https://huggingface.co/facebook/wav2vec2-xls-r-300m> — 暂时无法访问
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 30. [没有统一赢家：四类法语语音识别在自发与病理语音上的错法不同](/posts/conference-jep-2026-conference-paper-id-benamor26-jep-763c8cfeac/)

> 英文题目：*[Évaluation comparative de modèles de reconnaissance automatique de la parole sur des corpus français sains et pathologiques](/posts/conference-jep-2026-conference-paper-id-benamor26-jep-763c8cfeac/)*

标签：#评测协议 #模型比较 #言语障碍 #语音 #语音识别

评分：**5.6/10** | 创新 1.0/2 | 技术严谨 1.0/1.5 | 实验充分 1.0/1.5 | 清晰度 0.7/1 | 影响力 0.8/1.5 | 开源 0.0/1.5 | 可复现 0.1/0.5 | 工程/实践 1.0/1.5

排名：前50% | 文档类型：应用研究 | 主任务：#语音识别 | 主方法：#评测协议

会议来源：[官方记录](https://www.isca-archive.org/jep_2026/benamor26_jep.html) · [官方 PDF](https://www.isca-archive.org/jep_2026/benamor26_jep.pdf)

👥 **作者与机构**

- Imen Ben\-Amor：机构信息未能从会议 PDF 纯文本可靠映射
- Jean\-Luc Rouas：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

本文任务输入为法语健康与病理长录音，输出为正字转写并以词错误率衡量质量，难点在于自发语音的犹豫重复与非流畅结构，以及帕金森等神经疾病导致的构音韵律退化与录音时长可达数分钟。方法链第一步将全部音频重采样至16kHz并用无监督rVAD检测语音活动，按0\.6秒停顿规则合并为最长30秒片段，第二步将各片段分别送入五个系统独立解码，第三步将片段假设拼接后统一归一化再与参考计算分组WER。归一化负责去重音去标点去括号内容转小写，其输出直接进入按语料风格与病理分组的对比环节，从而隔离转写误差。与英文主导评测相比，该工作关键差异在于覆盖法语计划半自发自发三风格与多病理交互，并揭示犹豫词删除与功能词规范化行为差异，对强制对齐前选型具有实际意义。在Rhapsodie计划性语音语料下，Conformer&\#40;ESTER&\#41;的WER为13\.16%，低于Whisper\-large的WER36\.07%。结论适用边界受限于所测三语料与非重叠训练条件，尚未验证转写误差向音素边界误差的传导及儿童语音与重度噪声外推。原文未披露训练、推理或部署成本。

🔗 **开源资源**

- 模型相关资源：<https://huggingface.co/LeBenchmark/wav2vec2-FR-7K-large> — 暂时无法访问
- 模型相关资源：<https://huggingface.co/speechbrain/asr-whisper-large-v2-commonvoice-fr> — 暂时无法访问
- 第三方资源：<https://github.com/speechbrain/speechbrain> — 暂时无法访问（HTTP 504）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 31. [喉塞音不是音位，却能标记焦点：法语产出与感知的双重证据](/posts/conference-jep-2026-conference-paper-id-depaolis26-jep-37216037dd/)

> 英文题目：*[Glottalisation et focus en français: perception et production](/posts/conference-jep-2026-conference-paper-id-depaolis26-jep-37216037dd/)*

标签：#心理声学实验 #韵律 #言语感知 #语音 #音频问答

评分：**5.6/10** | 创新 1.3/2 | 技术严谨 1.1/1.5 | 实验充分 1.0/1.5 | 清晰度 0.8/1 | 影响力 0.8/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 0.3/1.5

排名：前50% | 文档类型：应用研究 | 主任务：#音频问答 | 主方法：#心理声学实验

会议来源：[官方记录](https://www.isca-archive.org/jep_2026/depaolis26_jep.html) · [官方 PDF](https://www.isca-archive.org/jep_2026/depaolis26_jep.pdf)

👥 **作者与机构**

- Bianca Maria De Paolis：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

法语声门化常现于韵律边界却无音位地位，任务输入为边界语音与问答语境信息，输出为焦点与非焦点结构解读，难点在于区分边界强化附带产物与主动标记焦点线索的因果关系。先复用半自发问答语料并标注潜在韵律边界声门化，以焦点语境与非焦点语境为输入，职责是统计分布差异，输出关联假设进入感知验证。再以宽焦点自然语句为基线输入，职责是经交叉拼接插入同说话人同语境自然声门段并保持基频曲线与相邻时长不变，输出操控与非操控配对刺激进入听辨环节。最后以配对刺激为输入要求母语者仅据韵律做理解判断，职责是以混合逻辑回归建模解读倾向，输出从分布关联到感知因果的验证结论。相对视声门化为语调副产品的解释，该工作将其视为可独立引导焦点解读的边界强化线索，即使不改变语调仍具可解释性。原文未提供可核对的关键定量结果。该结论适用边界受限于句末窄焦点简单句场景，句首与句中焦点及与语调交互等情形尚未验证，原文未披露训练、推理或部署成本。

🔗 **开源资源**

本次未形成可展示的已核验资源记录，开放状态尚未核实。
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 32. [照护语音不是统一变温柔：两组护理员用不同声学策略进入照护情境](/posts/conference-jep-2026-conference-paper-id-kegltourneix26-jep-8413164e66/)

> 英文题目：*[Stratégies individuelles dans la parole des soignants envers les personnes âgées en EHPAD](/posts/conference-jep-2026-conference-paper-id-kegltourneix26-jep-8413164e66/)*

标签：#统计分析 #无监督学习 #韵律 #语音 #语音属性识别

评分：**5.6/10** | 创新 1.2/2 | 技术严谨 1.0/1.5 | 实验充分 0.9/1.5 | 清晰度 0.7/1 | 影响力 0.5/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 1.0/1.5

排名：前50% | 文档类型：应用研究 | 主任务：#语音属性识别 | 主方法：#统计分析

会议来源：[官方记录](https://www.isca-archive.org/jep_2026/kegltourneix26_jep.html) · [官方 PDF](https://www.isca-archive.org/jep_2026/kegltourneix26_jep.pdf)

👥 **作者与机构**

- Noémie Kegl\-Tourneix：机构信息未能从会议 PDF 纯文本可靠映射
- Yaru Wu：机构信息未能从会议 PDF 纯文本可靠映射
- Jean\-Luc Rouas：机构信息未能从会议 PDF 纯文本可靠映射
- Nicolas Audibert：机构信息未能从会议 PDF 纯文本可靠映射
- Takaaki Shochi：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

本文输入为法国4所养老院50名 aides\-soignants在朗读、非正式访谈与模拟照护三种条件下头戴麦克风采集的语音，输出是对职业话语风格及个体策略差异的声学刻画，难点在于自然照护语料稀缺且个体基线差异大易掩盖条件效应。方法链第一步以Kaldi完成转写与音素对齐并做音节切分，为后续韵律计算提供时间基准。第二步以多方法投票提取基频F0与能量并换算为相对朗读的半音与相对值，其输出直接进入局部调制计算。第三步计算音节间F0与能量局部差分及基于MFCC的元音质心距离并做聚类，以得到条件效应与分组结构。与既有均值比较不同，本文强调音节对比度与元音类内离散度，用以捕捉重音强化与超发音，其实际意义在于区分共享的韵律策略与仅属子群的发音强化。原文未提供可核对的关键定量结果。该结论适用边界仅限于模拟非言语合作老人的法语照护场景，在真实痴呆互动与感知评价中尚未验证。原文未披露训练、推理或部署成本。

🔗 **开源资源**

本次未形成可展示的已核验资源记录，开放状态尚未核实。
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 33. [用伪词堵住语言补偿之后，可懂度评分还变吗](/posts/conference-jep-2026-conference-paper-id-lalain26-jep-df38733db2/)

> 英文题目：*[Variabilité de l'évaluation perceptive de l'intelligibilité par Décodage Acoustico Phonétique?](/posts/conference-jep-2026-conference-paper-id-lalain26-jep-df38733db2/)*

标签：#人类参与评测 #言语障碍 #语音 #语音可懂度评估

评分：**5.6/10** | 创新 1.0/2 | 技术严谨 1.0/1.5 | 实验充分 1.0/1.5 | 清晰度 0.8/1 | 影响力 0.5/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 1.0/1.5

排名：前50% | 文档类型：应用研究 | 主任务：#语音可懂度评估 | 主方法：#人类参与评测

会议来源：[官方记录](https://www.isca-archive.org/jep_2026/lalain26_jep.html) · [官方 PDF](https://www.isca-archive.org/jep_2026/lalain26_jep.pdf)

👥 **作者与机构**

- Muriel Lalain：机构信息未能从会议 PDF 纯文本可靠映射
- Alain Ghio：机构信息未能从会议 PDF 纯文本可靠映射
- Céline Bonneau：机构信息未能从会议 PDF 纯文本可靠映射
- Corinne Fredouille：机构信息未能从会议 PDF 纯文本可靠映射
- Marie Rebourg：机构信息未能从会议 PDF 纯文本可靠映射
- Camille Galant：机构信息未能从会议 PDF 纯文本可靠映射
- Clémence Devoucoux：机构信息未能从会议 PDF 纯文本可靠映射
- Anaïs Galtier：机构信息未能从会议 PDF 纯文本可靠映射
- Nicolas Fakhry：机构信息未能从会议 PDF 纯文本可靠映射
- Virginie Woisard：机构信息未能从会议 PDF 纯文本可靠映射
- Mathieu Balaguer：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

口腔与口咽癌治疗后可懂度感知评估易受词表记忆与词汇修复污染，难以分离说话人产出损伤与听者语言补偿。本文验证声学语音解码任务，输入为患者朗读的伪词音频，输出为每音素平均受损特征数的音系感知偏离全局与局部分数，分数越高损伤越重。方法链分四步：从大规模伪词库生成音位平衡开放词表以阻断词汇恢复；经录音软件采集两中心纳入的法语母语缓解期患者朗读，每人朗读不同词表；听者做正字法转写并转为音素后与目标形比对计算偏离分数；再以混合模型检验词表、现场对比远程与专家对比非专家三因素稳健性。与传统词句转写或量表评分不同，该机制强制听者仅依赖声学信号，使测量聚焦说话人产出而非听者高层补偿，具有开放词表抗学习效应的实际意义。在现场对比远程与专家对比非专家的评测条件下，偏离分数在不同条件下的高低比较原文未提供可核对的关键定量结果。结论适用边界仅限法语口腔与口咽癌缓解期成人，尚未验证自动评分与解剖动力学缺损对照及跨语种外推。原文未披露训练、推理或部署成本。

🔗 **开源资源**

- 第三方资源：<https://doi.org/10.1159/000519427> → <https://karger.com/article/doi/10.1159/000519427> — 链接不可用（HTTP 403）
- 第三方资源：<https://hal.science/hal-02798584> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 34. [打码说话为何变慢：法语补码口语中音段时长与手动键结构的协同](/posts/conference-jep-2026-conference-paper-id-lancien26-jep-86d7cc202f/)

> 英文题目：*[Relations entre les durées segmentales et les clés en Langue française Parlée Complétée](/posts/conference-jep-2026-conference-paper-id-lancien26-jep-86d7cc202f/)*

标签：#统计分析 #语音学与音系 #语音 #强制对齐

评分：**5.6/10** | 创新 1.0/2 | 技术严谨 1.0/1.5 | 实验充分 0.6/1.5 | 清晰度 0.6/1 | 影响力 0.4/1.5 | 开源 1.2/1.5 | 可复现 0.3/0.5 | 工程/实践 0.5/1.5

排名：前50% | 文档类型：应用研究 | 主任务：#强制对齐 | 主方法：#统计分析

会议来源：[官方记录](https://www.isca-archive.org/jep_2026/lancien26_jep.html) · [官方 PDF](https://www.isca-archive.org/jep_2026/lancien26_jep.pdf)

👥 **作者与机构**

- Mélanie Lancien：机构信息未能从会议 PDF 纯文本可靠映射
- Brigitte Bigi：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

本文以朗读任务的音视频与正字法文本为输入，以辅音与元音时长的统计解释为输出，难点在于手部提前与语音规划相互交织且说话人与音素个体差异极大。方法分三步：先用SPPAS对CLeLfPC多模态语料做词与音素自动对齐并人工校正，输出的音素边界进入键序列生成环节。接着自动生成键序列并人工核验，仅保留发声段内CV键并划分中立间单元，所获样本直接进入统计建模。然后以对数时长为因变量，以位置任务词类与对侧时长为固定效应拟合线性混合模型并经赤池信息准则与似然比检验选型，其关键差异在于把手动编码结构视为一级时间组织者，凸显手口一体化规划的实际意义。在CLeLfPC语料任务下，元音的时长指标为133ms，高于辅音的时长指标125ms。结论的适用边界限于五位熟练非聋女性编码者的朗读式编码，尚未验证向自发对话或听障编码者外推。原文未披露训练、推理或部署成本。

🔗 **开源资源**

- 代码相关资源：<https://hal.science/hal-05463859> — 链接可访问（HTTP 200）
- 数据相关资源：<https://hdl.handle.net/11403/clelfpc> → <https://www.ortolang.fr/market/item/clelfpc/v11> — 链接可访问（HTTP 200）
- 演示资源：<https://auto-cuedspeech.org/> — 链接可访问（HTTP 200）
- 复现相关资源：<https://hal.science/hal-05463859> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 35. [发声时也在场的外激扫频：唇端阻抗分离如何同时拿下共振频率与带宽](/posts/conference-jep-2026-conference-paper-id-launet26-jep-00099a97b8/)

> 英文题目：*[Mesure des résonances du conduit vocal pendant la production de sons voisés : expérimentation sur maquettes](/posts/conference-jep-2026-conference-paper-id-launet26-jep-00099a97b8/)*

标签：#时频分析 #发声与构音 #语音 #音频分离

评分：**5.6/10** | 创新 1.2/2 | 技术严谨 1.0/1.5 | 实验充分 0.9/1.5 | 清晰度 0.7/1 | 影响力 0.7/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 0.8/1.5

排名：前50% | 文档类型：方法研究 | 主任务：#音频分离 | 主方法：#时频分析

会议来源：[官方记录](https://www.isca-archive.org/jep_2026/launet26_jep.html) · [官方 PDF](https://www.isca-archive.org/jep_2026/launet26_jep.pdf)

👥 **作者与机构**

- Alice Launet：机构信息未能从会议 PDF 纯文本可靠映射
- Fabrice Silva：机构信息未能从会议 PDF 纯文本可靠映射
- Philippe Guillemain：机构信息未能从会议 PDF 纯文本可靠映射
- Nathalie Henrich Bernardoni：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

输入是唇部麦克风记录的混合声，其中外部扫频激励经声道滤波的响应与合成声门源经同一声道滤波的浊音相互叠加，输出是前四个声道共振的频率与带宽，难点在于浊音谐波与激励响应在频域重叠且存在源滤波器交互导致直接估计失真。方法链分三步：先在唇部注入同步扫频并采集混合声与纯浊音参考，其输出为待分离的唇部记录；再用高阶小波啁啾变换重建扫频幅相调制并剔除浊音谐波，其输出为净化的扫频响应；最后经闭口校准解卷积得到唇部响应并做复平面模态分析提取频率与带宽。与线性预测共振峰估计不同，该机制不依赖谐波包络反推传递函数而是直接测量外部激励滤波结果，故在高基频下仍可分辨共振并给出可靠带宽。在静态/a/体模测量条件下，分离后R4的带宽指标为283\.0±2\.5 Hz，高于无浊音参考Hlips的带宽指标209 Hz。该结论适用边界受限于静态单元音体模与合成激励，在共振与基频重合及低基频密集谐波下误差显著增大且尚未验证活体变构型与连续语音外推。原文未披露训练、推理或部署成本。

🔗 **开源资源**

本次未形成可展示的已核验资源记录，开放状态尚未核实。
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 36. [稀疏了却不一定可解释：说话人入侵测试检验维度可解释性](/posts/conference-jep-2026-conference-paper-id-saget26-jep-d3897742a3/)

> 英文题目：*[Évaluation perceptive de l'interprétabilité dimensionnelle dans les représentations parcimonieuses du locuteur](/posts/conference-jep-2026-conference-paper-id-saget26-jep-d3897742a3/)*

标签：#人类参与评测 #可解释性 #语音 #说话人验证

评分：**5.6/10** | 创新 1.3/2 | 技术严谨 1.0/1.5 | 实验充分 0.9/1.5 | 清晰度 0.7/1 | 影响力 0.8/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 0.6/1.5

排名：前50% | 文档类型：方法研究 | 主任务：#说话人验证 | 主方法：#人类参与评测

会议来源：[官方记录](https://www.isca-archive.org/jep_2026/saget26_jep.html) · [官方 PDF](https://www.isca-archive.org/jep_2026/saget26_jep.pdf)

👥 **作者与机构**

- Félix Saget：机构信息未能从会议 PDF 纯文本可靠映射
- Nicolas Dugué：机构信息未能从会议 PDF 纯文本可靠映射
- Marie Tahon：机构信息未能从会议 PDF 纯文本可靠映射
- Anthony Larcher：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

本文输入连续语音片段并输出稀疏说话人表示，难点在于稠密嵌入将性别、基频、语言等线索纠缠分布且单个维度无明确语义。人耳难以直接建立维度与可解释概念的对应，使可解释性评估缺乏公认概念清单。在方法链上，先用基于WavLM的ECAPA\-TDNN提取256维话语级稠密向量，再经Top\-K稀疏自编码器映射至500维隐空间并每样本仅保留激活最强的62维，其余置零后重构输入以保留信息，最后以说话人侵入测试检验维度可解释性。与预设概念清单的探针式解耦评估不同，该路线不依赖既定语音概念本体，靠稀疏约束涌现候选维度，再由人耳从三同类加一异类样本中判别完成发现式验证。在VoxCeleb1\-o验证集下，所选稀疏模型的等错误率为2\.718%，高于基线模型的等错误率1\.977%。感知实验选取30个低典型性维度，由22名佩戴耳机的受试者完成每维度平均约12\.97次判别，整体检出率为37\.275%，随机阴性对照的检出率为29\.167%，阳性对照接近100%。该结论适用边界受限于英语占35%、男性占70%的VoxCeleb1语料且部分评估复用训练数据，尚未验证跨语料泛化，原文未披露训练、推理或部署成本。

🔗 **开源资源**

本次未形成可展示的已核验资源记录，开放状态尚未核实。
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 37. [急救电话里的情绪不等于病情：27 项语音辅助分诊研究的任务、证据与落地差距](/posts/conference-jep-2026-conference-paper-id-stasica26-jep-8f5692d7f9/)

> 英文题目：*[Quand l’IA écoute l’urgence : revue systématique des approches automatiques d’analyse de la voix et de la parole dans la régulation médicale des appels d’urgence](/posts/conference-jep-2026-conference-paper-id-stasica26-jep-8f5692d7f9/)*

标签：#医疗音频 #系统综述 #语音 #语音情感识别

评分：**5.6/10** | 创新 1.2/2 | 技术严谨 0.9/1.5 | 实验充分 0.9/1.5 | 清晰度 0.7/1 | 影响力 0.9/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 0.7/1.5

排名：前50% | 文档类型：综述 | 主任务：#语音情感识别 | 主方法：#系统综述

会议来源：[官方记录](https://www.isca-archive.org/jep_2026/stasica26_jep.html) · [官方 PDF](https://www.isca-archive.org/jep_2026/stasica26_jep.pdf)

👥 **作者与机构**

- Elio Stasica：机构信息未能从会议 PDF 纯文本可靠映射
- Clément Joly：机构信息未能从会议 PDF 纯文本可靠映射
- Vincent P\. Martin：机构信息未能从会议 PDF 纯文本可靠映射
- Romain Sérizel：机构信息未能从会议 PDF 纯文本可靠映射
- Emmanuel Vincent：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

紧急呼叫医疗调度需从噪声大、信息残缺且无法体格检查的电话语音中快速判定紧急程度与处置路径，难点在于症状非特异、时间压力大与情绪干扰强。该综述先以人群概念情境界定人群为紧急呼叫、概念为语音转录与交互分析、情境为医疗调度，形成纳入排除标准。接着在五个文献库按统一检索式检索并补充引文，去重后经标题摘要初筛与全文复筛输出二十七篇二零一四年至二零二五年法英同行评议文献。最后围绕调度目标、临床依据与调度中心协作三个问题抽取综合，区分上游排队与实时辅助两类用途并核查临床对接。相对既有情感或决策综述，其关键差异在于紧扣调度流程将情绪识别与优先级预测拆分用途，并揭示多数研究仅评估情绪识别性能而缺乏与医疗紧急度的关联验证，具有凸显生态效度缺口的实际意义。原文未提供可核对的关键定量结果。该结论适用边界受限于电话语音转录分析与法英文献，对视频调度与多模态生理信号尚未验证，原文未披露训练、推理或部署成本。

🔗 **开源资源**

本次未形成可展示的已核验资源记录，开放状态尚未核实。
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 38. [元音动、辅音稳：任务切换如何撕开法语二语与三语的节奏差异](/posts/conference-jep-2026-conference-paper-id-yang26-jep-1ecffabb64/)

> 英文题目：*[L’organisation rythmique du français L2 vs L3 chez les apprenants sinophones et les effets de la tâche](/posts/conference-jep-2026-conference-paper-id-yang26-jep-1ecffabb64/)*

标签：#统计分析 #语言习得 #韵律 #语音 #语音属性识别

评分：**5.6/10** | 创新 1.2/2 | 技术严谨 1.2/1.5 | 实验充分 1.0/1.5 | 清晰度 0.8/1 | 影响力 0.6/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 0.5/1.5

排名：前50% | 文档类型：应用研究 | 主任务：#语音属性识别 | 主方法：#统计分析

会议来源：[官方记录](https://www.isca-archive.org/jep_2026/yang26_jep.html) · [官方 PDF](https://www.isca-archive.org/jep_2026/yang26_jep.pdf)

👥 **作者与机构**

- Yufeng Yang：机构信息未能从会议 PDF 纯文本可靠映射
- Fabian Santiago：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

本文输入为8名巴黎法语母语者、10名汉语母语法语二语者与10名英法双外语法语三语者高级学习者在朗读十句陈述句与半自发生日图描述中的录音，输出为元音与辅音各三项节奏指标的组别与任务效应，难点在于语速放缓与停顿会拉长元音区间并抬高变异，易与二语或三语韵律迁移混淆。正字法转写结果输入SPPAS自动切分得到元音辅音边界序列，再经Praat人工校对并按150 ms阈值切分跨停顿单元以剔除填充词与重复，得到干净的发音区间序列。该序列直接计算%V等六项节奏指标，形成按跨停顿单元保留的重复观测，随后输入线性混合模型分离组别与任务固定效应并以Tukey事后比较定位交互。与既往单任务法语二语研究不同，本研究将任务作为核心自变量并以重复观测建模个体内变异，从而区分全局时长分布变化与局部相邻时长对比。在朗读任务语料下，双语组的ΔC指标为71\.6，高于母语组的ΔC指标64\.2，但任务主效应与交互均不显著而呈现辅音稳定性。该结论适用边界受限于高级C1汉语背景与小样本女性偏多结构，对初级水平、其他母语或强英语干扰情境尚未验证；原文未披露训练、推理或部署成本。

🔗 **开源资源**

- 第三方资源：<https://www.r-project.org/> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 39. [文件名对不上内容、全员标注缺失：把 MOCHA\-TIMIT 九个说话人重新对齐](/posts/conference-jep-2026-conference-paper-id-yuan26-jep-ba6f0dd61c/)

> 英文题目：*[Alignement Forcé Multi\-Niveaux pour le Corpus MOCHA\-TIMIT](/posts/conference-jep-2026-conference-paper-id-yuan26-jep-ba6f0dd61c/)*

标签：#数据标注 #语音学与音系 #韵律 #语音 #强制对齐

评分：**5.6/10** | 创新 1.0/2 | 技术严谨 0.9/1.5 | 实验充分 0.7/1.5 | 清晰度 0.8/1 | 影响力 0.9/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 1.0/1.5

排名：前50% | 文档类型：数据集与基准 | 主任务：#强制对齐 | 主方法：#数据标注

会议来源：[官方记录](https://www.isca-archive.org/jep_2026/yuan26_jep.html) · [官方 PDF](https://www.isca-archive.org/jep_2026/yuan26_jep.pdf)

👥 **作者与机构**

- Zheng Yuan：机构信息未能从会议 PDF 纯文本可靠映射
- Leonardo Lancia：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

该工作针对MOCHA\-TIMIT长期仅少数说话人被反复使用的问题，输入为文件名与朗读内容错位且混入噪声与额外言语的多信号同步记录，输出为每句从词级至韵律级的多层时间对齐标注。其难点在于文件名内容不一致、缺乏全库统一音素时间基准以及缺少音节与重音等韵律标注，使音频与发音运动等多模态信号难以联合分析。为此先用自动语音识别转写话语内容以纠正文件名内容错配，其清洗后文本与音频对应关系进入人工视听质检以剔除噪声与多余言语文件。质检后保留的干净音频文本对送入强制对齐器生成音素边界，该边界再经词典与规则映射扩展为词形、音素变体、重音、国际音标、窄式音标、音节与突显等多层标注。与以往仅少数说话人有手工对齐而无全库统一时间基准的局面相比，该链条以自动纠错加人工质检统一了多说话人的音素音节重音框架，使音频、电磁发音、腭电图与喉头信号可联合分析。在手工标注比对的评测设置下，关于边界误差与分类准确率等指标，原文未提供可核对的关键定量结果。该结论适用边界受限于英式英语朗读体与已验证说话人的验证，音节与突显层无独立精度报告，原文未披露训练、推理或部署成本。

🔗 **开源资源**

本次未形成可展示的已核验资源记录，开放状态尚未核实。
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 40. [听不清鼻音时，孩子跟着念也会丢掉鼻口对比：声码器模拟下的鼻音度证据](/posts/conference-jep-2026-conference-paper-id-fagniart26-jep-6f94f8702a/)

> 英文题目：*[Répétition de voyelles nasales et orales vocodées : mesures de nasalance\.](/posts/conference-jep-2026-conference-paper-id-fagniart26-jep-6f94f8702a/)*

标签：#人类参与评测 #语音学与音系 #言语感知 #语音 #语音属性识别

评分：**5.5/10** | 创新 1.3/2 | 技术严谨 1.0/1.5 | 实验充分 0.8/1.5 | 清晰度 0.8/1 | 影响力 0.5/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 0.8/1.5

排名：前50% | 文档类型：应用研究 | 主任务：#语音属性识别 | 主方法：#人类参与评测

会议来源：[官方记录](https://www.isca-archive.org/jep_2026/fagniart26_jep.html) · [官方 PDF](https://www.isca-archive.org/jep_2026/fagniart26_jep.pdf)

👥 **作者与机构**

- Sophie Fagniart：机构信息未能从会议 PDF 纯文本可靠映射
- Olivier Crouzet：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

本研究输入为经声码器降解的法语鼻口元音单词，输出为儿童跟读时的鼻音度，难点在于频谱线索受损后鼻口对立易混淆且个体差异大。方法第一步由成年女声录制最小对并归一化时长与基频以隔离频谱线索，得到仅保留共振峰差异的参考刺激。第二步将参考刺激送入声码器生成多通道与不同插入深度的降解刺激，使上一步的纯频谱输入系统变为可控降解条件。第三步用鼻音仪采集跟读的鼻口强度并按鼻强度占比计算鼻音度，再以线性混合模型检验通道数、插入深度与目标鼻音性的主效应及交互。与既有感知研究相比，关键差异在于把降解感知延伸到生产端并量化鼻化与口化双向漂移，具有揭示编码缺陷传导至发音的实际意义。原文未提供可核对的关键定量结果。该结论适用边界仅限安静下典型听力儿童的即时跟读，尚未验证自发语、噪声与长期植入适应中的外推。原文未披露训练、推理或部署成本。

🔗 **开源资源**

本次未形成可展示的已核验资源记录，开放状态尚未核实。
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 41. [语言识别可解释了但判分还能用吗：BA\-Lang 把嵌入变成可数属性](/posts/conference-jep-2026-conference-paper-id-jelassi26-jep-c1b915a275/)

> 英文题目：*[Reconnaissance de la langue parlée explicable avec BA\-LR](/posts/conference-jep-2026-conference-paper-id-jelassi26-jep-c1b915a275/)*

标签：#统计分析 #模型比较 #可解释性 #多语言 #语言识别

评分：**5.5/10** | 创新 1.2/2 | 技术严谨 1.0/1.5 | 实验充分 1.0/1.5 | 清晰度 0.7/1 | 影响力 0.7/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 0.6/1.5

排名：前50% | 文档类型：方法研究 | 主任务：#语言识别 | 主方法：#统计分析

会议来源：[官方记录](https://www.isca-archive.org/jep_2026/jelassi26_jep.html) · [官方 PDF](https://www.isca-archive.org/jep_2026/jelassi26_jep.pdf)

👥 **作者与机构**

- Yosra Jelassi：机构信息未能从会议 PDF 纯文本可靠映射
- Raphaël Duroselle：机构信息未能从会议 PDF 纯文本可靠映射
- Jean\-François Bonastre：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

输入为连续语音波形，输出为102种语言组成的闭集中的语言标签，难点在于深度嵌入不可读且在敏感语音画像场景需要可追溯的决策依据。该工作先用语言辨识嵌入器将语音映射为定长向量，再经二值自编码器压缩为二值属性激活向量，最后由BA\-Lang按语言估计各属性伯努利激活概率并在条件独立假设下连乘得到似然，再经逻辑回归校准输出后验。与概率线性判别分析相比，关键机制差异在于把稠密高斯打分换成按属性独立计算的伯努利似然贡献，使每维都有明确的激活概率语义。在FLEURS测试集下，基于mms\-lid\-126的256属性BA\-Lang的EERavg为0\.154%，低于同嵌入下PLDA的EERavg 0\.194%，其准确率为98\.24%。该可解释性来自各语言共享的属性激活概率向量，可直接对比法语、意大利语等语言在各属性上的激活差异以追溯混淆来源。该结论适用边界仅在嵌入器已见全部测试语言时成立，对ECAPA\-TDNN未见语言子集BA\-Lang劣化更显著，且独立性假设尚未验证。原文未披露训练、推理或部署成本。

🔗 **开源资源**

本次未形成可展示的已核验资源记录，开放状态尚未核实。
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 42. [仙居话低调域的气嗓音能维持多久：老年组到韵尾与青年组退到韵腹的对照](/posts/conference-jep-2026-conference-paper-id-jin26-jep-17cd26625d/)

> 英文题目：*[Caractéristiques phonétiques du contraste de registre tonal en chinois de Xianju](/posts/conference-jep-2026-conference-paper-id-jin26-jep-17cd26625d/)*

标签：#统计分析 #发声与构音 #语音学与音系 #语音 #语音属性识别

评分：**5.5/10** | 创新 1.2/2 | 技术严谨 1.2/1.5 | 实验充分 0.8/1.5 | 清晰度 0.8/1 | 影响力 0.7/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 0.5/1.5

排名：前50% | 文档类型：应用研究 | 主任务：#语音属性识别 | 主方法：#统计分析

会议来源：[官方记录](https://www.isca-archive.org/jep_2026/jin26_jep.html) · [官方 PDF](https://www.isca-archive.org/jep_2026/jin26_jep.pdf)

👥 **作者与机构**

- Yishan Jin：机构信息未能从会议 PDF 纯文本可靠映射
- Damien Chabanal：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

该研究输入为青年与老年女性发音人重复产出的仙居话单音节词田野录音，输出为低寄存器是否为气嗓音及其代际弱化判定，难点在于气嗓音差异集中于元音起始并随韵母时程快速衰减，且与年龄时长和说话人变异混杂，单点均值会掩盖动态差异。方法第一步在人工切分元音段后提取谱倾斜与谱噪声多类参数的时序曲线，输出按韵母时长归一化的多点观测序列以保留动态过程。第二步将上述时序序列输入广义加性混合模型，分别估计寄存器主效应与非线性时间轨迹，输出逐点差异幅度与显著区间以定位气嗓音起止范围。第三步将全元音均值层面的多参数汇总输入线性判别分析，输出可分性系数并与上海话与苏州话结果比较，以判断演变快慢。相对已有北部吴语青年人气嗓音近乎消失的结论，该链条以动态轨迹加整体判别的双重视角揭示仙居话弱化更慢且噪声指标比谱倾斜指标更稳定，实际意义在于为保守型吴语保留寄存器对立的融合路径提供声学证据。原文未提供可核对的关键定量结果。该结论适用边界受限于仅覆盖女性发音人特定中古调类单音节词，男性嘎裂声调类与连续语流等条件尚未验证，原文未披露训练、推理或部署成本。

🔗 **开源资源**

本次未形成可展示的已核验资源记录，开放状态尚未核实。
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 43. [用可解释卷积滤波暴露预训练检测器的可迁移弱点：Malasimplex 攻击解读](/posts/conference-jep-2026-conference-paper-id-kandharsingh26-jep-0c9bd2fbb6/)

> 英文题目：*[Robustesse aux attaques adversariales de détecteurs de deepfakes audio basés sur un modèle pré\-entraîné](/posts/conference-jep-2026-conference-paper-id-kandharsingh26-jep-0c9bd2fbb6/)*

标签：#信号处理 #对抗鲁棒性 #可解释性 #音频深度伪造检测

评分：**5.5/10** | 创新 1.2/2 | 技术严谨 1.0/1.5 | 实验充分 0.9/1.5 | 清晰度 0.7/1 | 影响力 0.9/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 0.5/1.5

排名：前50% | 文档类型：方法研究 | 主任务：#音频深度伪造检测 | 主方法：#信号处理

会议来源：[官方记录](https://www.isca-archive.org/jep_2026/kandharsingh26_jep.html) · [官方 PDF](https://www.isca-archive.org/jep_2026/kandharsingh26_jep.pdf)

👥 **作者与机构**

- Shirley Kandharsingh：机构信息未能从会议 PDF 纯文本可靠映射
- Pierre Serrano：机构信息未能从会议 PDF 纯文本可靠映射
- Jean\-François Bonastre：机构信息未能从会议 PDF 纯文本可靠映射
- Olivier Boëffard：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

音频深度伪造检测需将原始波形判为真实或伪造，难点在于高性能系统普遍依赖公开自监督语音编码器，其架构与训练数据高度透明而易被攻击者复用以构造迁移攻击。作者提出Malasimplex两阶段方法链：先冻结Wav2Vec 2\.0 XLS\-R编码器并在其上训练多头注意力投影头以形成可分的真实与伪造潜在空间，该投影头输出直接作为下一步的度量空间。再冻结该投影头并在伪造音频上优化长度为257的线性卷积滤波器，滤波后批量嵌入均值与原始真实嵌入均值之间的余弦相似度最大化驱动滤波器更新直至收敛。相对Malafide仅利用目标系统响应而不显式建模真实分布、Malacopula依赖同说话人配对与非线性结构并逐说话人训练，新方法摆脱说话人依赖并直接向真实类靠拢，滤波器更简单且频响可解释。在YourTTS\-Eval评测设置下，攻击后DDA目标1的EER为19\.91%，从攻击前DDA目标1的EER 5\.07%升至19\.91%。该结论适用边界限于两种文本到语音伪造与两种编码器后端组合，尚未验证商业高质量伪造与局部篡改等外推范围，原文未披露训练、推理或部署成本。

🔗 **开源资源**

本次未形成可展示的已核验资源记录，开放状态尚未核实。
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 44. [机器和人耳都会听错年龄：误差从何而来，又靠哪些声学线索解释](/posts/conference-jep-2026-conference-paper-id-millot26-jep-c5634d0d89/)

> 英文题目：*[Estimation de l'âge d'un locuteur par des auditeurs humains et un système de détection : comparaison et analyse acoustique](/posts/conference-jep-2026-conference-paper-id-millot26-jep-c5634d0d89/)*

标签：#人类参与评测 #可解释性 #言语感知 #语音 #语音属性识别

评分：**5.5/10** | 创新 1.2/2 | 技术严谨 0.9/1.5 | 实验充分 0.9/1.5 | 清晰度 0.7/1 | 影响力 0.7/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 0.8/1.5

排名：前50% | 文档类型：应用研究 | 主任务：#语音属性识别 | 主方法：#人类参与评测

会议来源：[官方记录](https://www.isca-archive.org/jep_2026/millot26_jep.html) · [官方 PDF](https://www.isca-archive.org/jep_2026/millot26_jep.pdf)

👥 **作者与机构**

- Carole Millot：机构信息未能从会议 PDF 纯文本可靠映射
- Clara Ponchard：机构信息未能从会议 PDF 纯文本可靠映射
- Cedric Gendrot：机构信息未能从会议 PDF 纯文本可靠映射
- Jean\-François Bonastre：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

该研究输入为VoxCeleb2年龄增补语料中每轮3秒至12秒的说话轮次，输出为说话人年龄回归值与人类配对年龄判断正确率及其声学解释，难点在于野外录音质量不均与年龄分布不平衡导致年轻段和年老段估计不稳。方法先用预训练WeSpeaker ResNet293提取256维说话人嵌入，再经三层多层感知机回归年龄，其输出的每说话人平均绝对误差直接进入下一步分层抽样。接着按平均绝对误差大于10年与小于3年并结合3年与10年年龄差构造32个配对刺激，最后用广义与线性混合模型关联f0等11个声学韵律指标与双方绩效。与以往仅对比准确率的工作不同，该文把系统误差作为人类绩效模型的固定效应预测因子并检验共享声学基础，因而具有可解释说话人表征意义。在测试集与验证集条件下，系统在测试集上的平均绝对误差指标为6\.8年，高于验证集上的平均绝对误差指标2\.6年。89名被试问题A平均52%而问题B平均47%，系统误差效应p为2\.32e\-07而年龄差效应p为1\.58e\-12，人机判断Phi系数为0\.4，声学上双方共享f0与H1\-A3而人类额外依赖语速与F1。该结论适用边界限于英美口音25岁至43岁中等质量录音，对儿童老年人及高噪声场景尚未验证。原文未披露训练、推理或部署成本。

🔗 **开源资源**

本次未形成可展示的已核验资源记录，开放状态尚未核实。
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 45. [时长学会了，音色还没分开：400 名法语者英语/i:/\-/ɪ/的声学证据](/posts/conference-jep-2026-conference-paper-id-moreau26-jep-b327fd3433/)

> 英文题目：*[Étude acoustique du contraste /i:/\-/ɪ/ chez 400 apprenants francophones de l’anglais](/posts/conference-jep-2026-conference-paper-id-moreau26-jep-b327fd3433/)*

标签：#统计分析 #语言习得 #语音学与音系 #语音 #语音属性识别

评分：**5.5/10** | 创新 1.2/2 | 技术严谨 1.2/1.5 | 实验充分 1.0/1.5 | 清晰度 0.8/1 | 影响力 0.5/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 0.5/1.5

排名：前50% | 文档类型：应用研究 | 主任务：#语音属性识别 | 主方法：#统计分析

会议来源：[官方记录](https://www.isca-archive.org/jep_2026/moreau26_jep.html) · [官方 PDF](https://www.isca-archive.org/jep_2026/moreau26_jep.pdf)

👥 **作者与机构**

- Romane Moreau：机构信息未能从会议 PDF 纯文本可靠映射
- Emmanuel Ferragne：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

本研究处理法语母语者产出的英语/i:/与/ɪ/对比习得问题，输入为朗读词表中的元音段，输出为时长与频谱归属判断，难点在于两者均易被同化到法语/i/单范畴且时长在法语中无音位作用。方法链分三步推进：先以强制对齐工具WebMAUS加Praat人工校正切分元音并剔除误读，其切分结果进入频谱测量。再用半自动脚本每5毫秒估计第一共振峰F1与第二共振峰F2并取时域中点，其中点值进入统计检验。最后分别以线性混合模型检验时长效应与以Pillai分数度量F1\-F2分布重叠，得到习得与否的双重证据。与仅报告均值的前人工作不同，该文将时长显著性与分布重叠度并置，区分了习得音位线索与实现接近母语两个层次。在朗读词表语料下，英语对内/I/\-/i:/的Pillai分数为0,57，低于英法跨语言对/i/\-/i:/的Pillai分数0,72。该结论适用边界仅限于朗读孤立词表的大学生群体，尚未验证自发语、知觉范畴与可懂度外推。原文未披露训练、推理或部署成本。

🔗 **开源资源**

本次未形成可展示的已核验资源记录，开放状态尚未核实。
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 46. [音素串能否替代专家打分：17 个法语预训练模型的域内精度与病理跨域对照](/posts/conference-jep-2026-conference-paper-id-nguyen26-jep-7cd47e2f71/)

> 英文题目：*[De la reconnaissance phonémique à l'évaluation de la parole pathologique : comparaison de modèles pré\-entraînés français](/posts/conference-jep-2026-conference-paper-id-nguyen26-jep-7cd47e2f71/)*

标签：#SFT #模型比较 #语音识别 #病理语音评估

评分：**5.5/10** | 创新 1.0/2 | 技术严谨 1.2/1.5 | 实验充分 1.0/1.5 | 清晰度 0.7/1 | 影响力 0.7/1.5 | 开源 0.0/1.5 | 可复现 0.1/0.5 | 工程/实践 0.8/1.5

排名：前50% | 文档类型：应用研究 | 主任务：#病理语音评估 | 主方法：#SFT

会议来源：[官方记录](https://www.isca-archive.org/jep_2026/nguyen26_jep.html) · [官方 PDF](https://www.isca-archive.org/jep_2026/nguyen26_jep.pdf)

👥 **作者与机构**

- Tuan Nguyen：机构信息未能从会议 PDF 纯文本可靠映射
- Corinne Fredouille：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

输入为法语朗读语音，输出为35音素序列及其音素错误率PER，难点在于健康众包录音与口腔口咽癌病理语音之间存在采集信道与构音退化双重分布偏移。为此先将正字法文本经自动音素转换统一为传统35音素监督标签体系，为微调提供一致目标。接着以Wav2vec 2\.0、HuBERT与Whisper等17个预训练模型作语音编码器抽取声学表征，再经线性层加分类层映射到音素空间。然后以联结时序分类CTC在健康语音上微调并择优解码，其PER直接进入跨域测试并换算为可懂度与严重度代理分。与直接回归临床分数的词级识别相比，该链条保留可检查的音素对齐，因而更贴合临床转录习惯并具有可解释意义。在Common Voice健康语音评测下，W2v2\-14k\-large的PER为6,2%，低于W2v2\-3k\-large的PER 6,7%。结论适用边界限于法语朗读体口腔或口咽癌评估，自发对话与其他病因及重度失真的外推尚未验证。原文未披露训练、推理或部署成本。

🔗 **开源资源**

本次未形成可展示的已核验资源记录，开放状态尚未核实。
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 47. [多语多设备之下帕金森构音障碍检测为何跨库就失效：冻结声学模型加多库训练的取舍](/posts/conference-jep-2026-conference-paper-id-ponchard26-jep-4039efe41c/)

> 英文题目：*[Détection automatique de la dysarthrie parkinsonienne par apprentissage profond : une évaluation multi\-corpus hors domaine](/posts/conference-jep-2026-conference-paper-id-ponchard26-jep-4039efe41c/)*

标签：#迁移学习 #鲁棒性 #多语言 #语音 #病理语音评估

评分：**5.5/10** | 创新 1.0/2 | 技术严谨 1.0/1.5 | 实验充分 1.0/1.5 | 清晰度 0.7/1 | 影响力 0.5/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 1.0/1.5

排名：前50% | 文档类型：应用研究 | 主任务：#病理语音评估 | 主方法：#迁移学习

会议来源：[官方记录](https://www.isca-archive.org/jep_2026/ponchard26_jep.html) · [官方 PDF](https://www.isca-archive.org/jep_2026/ponchard26_jep.pdf)

👥 **作者与机构**

- Clara Ponchard：机构信息未能从会议 PDF 纯文本可靠映射
- Pierre Serrano：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

输入为覆盖朗读、复述、持续元音、双唇交替运动与自发独白的病理语音录音，输出为受试者属于帕金森病还是健康对照的二分类判决，实际难点在于语言、言语任务、采集通道、药物状态与疾病严重度交织造成的域偏移。方法链由三步构成：先将音频重采样至16 kHz并切分为训练用秒级片段，再送入冻结的多语言自监督骨干Wav2Vec 2\.0 XLS\-R以抽取多层声学表征并由多头因子注意力头跨层加权、沿时间聚合为录音级嵌入，最后经交叉熵优化的分类层输出判决且推理时直接处理完整录音。与既往取最后一层嵌入接支持向量机或线性分类器的做法不同，该方案保留并自适应选择中层韵律信息且采用说话人识别式后端建模，因而在小样本下更能抑制过拟合。在MDVR\-KCL未见语料评测下，N\+I\+A三语料联合训练模型的AUC为85\.3 ± 1\.6%，高于I\+A双语料模型的AUC 74\.5 ± 3\.9%对应的74\.1 ± 4\.6%。该多语料联合训练同时避免了单语料跨域近随机的退化，并使三测试语料的AUC保持在84%以上。上述结论的适用边界受限于所用的四语料任务与采集条件组合，低UPDRS分数与停药状态下检测更困难等真实筛查外推尚未验证。原文未披露训练、推理或部署成本。

🔗 **开源资源**

本次未形成可展示的已核验资源记录，开放状态尚未核实。
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 48. [唇部收缩多少与感觉费力多少：构音努力自评的测量方法与个体差异](/posts/conference-jep-2026-conference-paper-id-ronayette26-jep-99f18b747d/)

> 英文题目：*[Auto\-évaluation perceptive de l’effort articulatoire: Méthodologie de mesure et variabilité inter\-individuelle](/posts/conference-jep-2026-conference-paper-id-ronayette26-jep-99f18b747d/)*

标签：#主观评测 #发声与构音 #生理信号 #语音属性识别

评分：**5.5/10** | 创新 1.2/2 | 技术严谨 1.1/1.5 | 实验充分 1.0/1.5 | 清晰度 0.8/1 | 影响力 0.6/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 0.5/1.5

排名：前50% | 文档类型：方法研究 | 主任务：#语音属性识别 | 主方法：#主观评测

会议来源：[官方记录](https://www.isca-archive.org/jep_2026/ronayette26_jep.html) · [官方 PDF](https://www.isca-archive.org/jep_2026/ronayette26_jep.pdf)

👥 **作者与机构**

- Elodie Ronayette：机构信息未能从会议 PDF 纯文本可靠映射
- Fabien Cignetti：机构信息未能从会议 PDF 纯文本可靠映射
- Pascal Perrier：机构信息未能从会议 PDF 纯文本可靠映射
- Maeva Garnier：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

本任务以唇部肌肉收缩强度为输入，以主观努力感知为输出，试图建立可测量的心理物理函数，难点在于生理产出与内部感知之间存在非线性映射与显著个体差异。方法链首先以最大自主收缩标定个体基准，其输出的归一化尺度作为后续目标强度的参照基础。其次以表面肌电实时反馈引导被试逼近伪随机目标并维持收缩，该阶段输出的稳定肌肉活动轨迹直接进入评分环节。最后在每试次后以视觉模拟量表采集主观评分，从而形成收缩与感知的配对数据用于刻画个体心理物理关系。与既往聚焦喉部发声努力或舌压测量的研究相比，本工作将可控视觉钳制与无发声唇圆展动作结合，直接分离了构音成分，具有方法学上的补充意义。原文未提供可核对的关键定量结果。该结论适用边界受限于健康法语成人的孤立唇圆展动作与实验室反馈条件，向连续言语及病理人群的外推尚未验证。原文未披露训练、推理或部署成本。

🔗 **开源资源**

本次未形成可展示的已核验资源记录，开放状态尚未核实。
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 49. [既像元音又有摩擦噪声：平良方言摩擦元音为何不能归为一类](/posts/conference-jep-2026-conference-paper-id-shao26-jep-76dda2668f/)

> 英文题目：*[Une étude acoustique de la « voyelle fricative » du dialecte hirara du Miyako ryukyuan](/posts/conference-jep-2026-conference-paper-id-shao26-jep-76dda2668f/)*

标签：#统计分析 #语音学与音系 #语音 #语音属性识别

评分：**5.5/10** | 创新 1.2/2 | 技术严谨 1.1/1.5 | 实验充分 1.0/1.5 | 清晰度 0.8/1 | 影响力 0.6/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 0.5/1.5

排名：前50% | 文档类型：应用研究 | 主任务：#语音属性识别 | 主方法：#统计分析

会议来源：[官方记录](https://www.isca-archive.org/jep_2026/shao26_jep.html) · [官方 PDF](https://www.isca-archive.org/jep_2026/shao26_jep.pdf)

👥 **作者与机构**

- Bowei Shao：机构信息未能从会议 PDF 纯文本可靠映射
- Shigeko Shinohara：机构信息未能从会议 PDF 纯文本可靠映射
- Masako Fujimoto：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

本文输入为平良宫古语摩擦元音Ｉ与对照元音及擦音的田野录音，输出为其音类归属判断，难点在于该段兼具清晰共振峰与高频摩擦噪声且与邻段边界模糊难切分。方法先按嗓音起始与共振峰突变人工切分并取中段均值以获得稳定估计，其输出直接进入下一步的元音空间定位。接着用Ｐｒａａｔ按性别设上限提取第一与第二共振峰以确定其居于ｉ与ｕ之间的高央位置，该空间结果再进入摩擦动态比较。然后逐帧计算振幅距离并以广义加性混合模型比较摩擦元音与ｓ与ｚ的时间轨迹差异从而判定其独特性。与将其静态归为高央元音或音节性浊擦音的做法不同，本文以起首峰后接平台而非倒Ｖ形的时间动态作为分类关键机制，具有维持音节核 voicing 的解释意义。原文未提供可核对的关键定量结果。该结论适用边界限于老年日语双语人自然变体的声学描写，尚未验证构音成像与跨方言外推且在特定浊擦音语境下存在切分失败条件而受限。原文未披露训练、推理或部署成本。

🔗 **开源资源**

- 第三方资源：<https://praat.org/> — 链接可访问（HTTP 200）
- 第三方资源：<https://stefanocoretta.github.io/tidygam/> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 50. [无母语冲突的词先学会：具身训练为何只在部分任务和人群中显效](/posts/conference-jep-2026-conference-paper-id-ville26-jep-f5ad52fead/)

> 英文题目：*[Sensibilisation prosodique et acquisition de l’accentuation en anglais](/posts/conference-jep-2026-conference-paper-id-ville26-jep-f5ad52fead/)*

标签：#教育 #统计分析 #语言习得 #韵律 #语音属性识别

评分：**5.5/10** | 创新 1.2/2 | 技术严谨 1.0/1.5 | 实验充分 0.6/1.5 | 清晰度 0.8/1 | 影响力 0.6/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 1.0/1.5

排名：前50% | 文档类型：应用研究 | 主任务：#语音属性识别 | 主方法：#统计分析

会议来源：[官方记录](https://www.isca-archive.org/jep_2026/ville26_jep.html) · [官方 PDF](https://www.isca-archive.org/jep_2026/ville26_jep.pdf)

👥 **作者与机构**

- Stella Ville：机构信息未能从会议 PDF 纯文本可靠映射
- Solange Rossato：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

本研究面向西班牙语背景成人英语词汇重音感知与产出，输入为重音标注、听后重复与文本朗读语音，输出为重音位置是否落在词典预期音节的二值判定，难点在于西班牙语缺乏弱化音节导致的重音聋、母语迁移与正字法干扰交织。方法链分三步：2023年1月至5月开展12周每周2次每次30分钟共18至22次的具身感知训练，覆盖元音弱化、音节结构、词汇重音、节奏与语调并限制书面依赖以重塑母语听觉过滤器。其次显性语音意识测试用10词纸笔标注检验词汇形式与重音知识，其输出的词汇表征假设进入听后重复与朗读的对比检验，27句听后重复测感知运动模仿而107词朗读测正字法整合产出。最后WebMAUS对齐与PLSPP按基频、时长、强度百分位均值大于50自动判定重音位置，为跨任务比较提供统一计分。相对重书面讲解的常规教学，关键机制差异是先用听觉与身体训练建立稳定重音表征再处理高干扰词项，实际意义是先学非同源词再过渡到假同源词。在词汇重音意识测试任务下，训练后T2的准确率为0\.583，高于训练前T1的准确率0\.446。结论适用边界受限于西班牙Palma官方语言学校54名A1\-A2成人及9小时短时干预，双语者在意识测试中拉开差距而朗读中未见优势，外推至其他母语或长期保持尚未验证。原文未披露训练、推理或部署成本。

🔗 **开源资源**

- 第三方资源：<https://praat.org/> — 链接可访问（HTTP 200）
- 第三方资源：<https://plspp.univ-grenoble-alpes.fr/> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 51. [强边界前的下倾有多陡：德语标题与间接引语区分母语者与法语学习者](/posts/conference-jep-2026-conference-paper-id-wottawa26-jep-94562569f2/)

> 英文题目：*[Lecture L2: modulations prosodiques aux frontières syntaxiques majeures de textes allemands](/posts/conference-jep-2026-conference-paper-id-wottawa26-jep-94562569f2/)*

标签：#统计分析 #语言习得 #韵律 #语音 #语音属性识别

评分：**5.5/10** | 创新 1.2/2 | 技术严谨 1.1/1.5 | 实验充分 1.0/1.5 | 清晰度 0.8/1 | 影响力 0.6/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 0.5/1.5

排名：前50% | 文档类型：应用研究 | 主任务：#语音属性识别 | 主方法：#统计分析

会议来源：[官方记录](https://www.isca-archive.org/jep_2026/wottawa26_jep.html) · [官方 PDF](https://www.isca-archive.org/jep_2026/wottawa26_jep.pdf)

👥 **作者与机构**

- Jane Wottawa：机构信息未能从会议 PDF 纯文本可靠映射
- Martine Adda\-Decker：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

本研究输入为德语叙事文本的朗读录音与对应正字法文本，输出为强句法边界前基频斜率随标题与陈述句类型及母语背景的变化规律，难点在于流利度不足、词汇理解障碍与母语迁移相互交织，且边界附近嗓音不规则使均值估计失效。首先人工按德语正字法转写后经慕尼黑自动切分获得词与音节时间锚点，再在边界前最后实词重音音节上用语声分析工具提取最大基频并换算为半音，所得时间与频率锚点直接进入下一步计算。然后用半音差除以时间差归一化为单位时间斜率，正值记上升负值记下降，再按标题与陈述句语法结构分组做方差分析与校正的事后比较。相比以往只报告第二语言基频范围收窄的做法，该文将差异定位到名词性标题的语调迁移机制与间接引语的词汇理解门槛机制，前者偏向法德语调迁移，后者偏向对言说动词等词义识别不足，具有区分迁移与理解的实际意义。原文未提供可核对的关键定量结果。该结论适用边界受限于朗读体德语叙事文本与强标点边界，尚未验证其向自发对话、疑问句及未充分采样句类的外推，边界附近嗓音嘶哑构成失败条件。原文未披露训练、推理或部署成本。

🔗 **开源资源**

本次未形成可展示的已核验资源记录，开放状态尚未核实。
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 52. [手势加 prosodie 能练顺语调，却练不准圆唇元音：一次 8 小时生态课堂的 verbo\-tonale 再检验](/posts/conference-jep-2026-conference-paper-id-daoussi26-jep-1a5efb8b80/)

> 英文题目：*[Gestes, prosodie et prononciation des voyelles en français L2 : réflexions sur la Méthode Verbo\-Tonale](/posts/conference-jep-2026-conference-paper-id-daoussi26-jep-1a5efb8b80/)*

标签：#心理声学实验 #语言习得 #语音学与音系 #韵律 #语音属性识别

评分：**5.4/10** | 创新 1.1/2 | 技术严谨 1.0/1.5 | 实验充分 0.8/1.5 | 清晰度 0.7/1 | 影响力 0.7/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 0.8/1.5

排名：后50% | 文档类型：应用研究 | 主任务：#语音属性识别 | 主方法：#心理声学实验

会议来源：[官方记录](https://www.isca-archive.org/jep_2026/daoussi26_jep.html) · [官方 PDF](https://www.isca-archive.org/jep_2026/daoussi26_jep.pdf)

👥 **作者与机构**

- Syrine Daoussi：机构信息未能从会议 PDF 纯文本可靠映射
- Charlotte Alazard\-Guiu：机构信息未能从会议 PDF 纯文本可靠映射
- Fanny Guitard\-Ivent：机构信息未能从会议 PDF 纯文本可靠映射
- Fabian Santiago：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

输入是课堂跟读的听说材料，输出是可懂的疑问升调韵律与可区分的圆唇元音，难点在于实验室朗读增益难迁移到自发语且感知与产出常被割裂考察。先将西班牙语母语者按性别与水平配对分组，输入是被试背景信息，职责是控制个体差异，输出是手势组与纯听觉对照组，分组结果直接作为后继训练的分组条件。再开展生态课堂重复跟读训练，输入是分组后的两组学习者与简单句听说材料，职责是以描摹上扬语调的手势加韵律矫正元音，输出是前后测的辨别反应与自发口语语料，该语料直接进入下一步的统计检验。最后构建线性混合效应模型，输入是上述反应与语料的声学度量，职责是检验组别与时间交互效应，输出是韵律受益而元音无增益的结论。与仅操纵音高或仅关注朗读的既有工作不同，该设计把手势加韵律作为元音矫正媒介并在图像描述与视频复述中检验迁移，因而更贴近多模态教学逻辑。原文未提供可核对的关键定量结果。该结论适用边界仅限短时生态训练向自发语迁移的情形，重复跟读外推与实验室条件下的局部增益尚未验证。原文未披露训练、推理或部署成本。

🔗 **开源资源**

- 第三方资源：<https://praat.org/> — 链接可访问（HTTP 200）
- 第三方资源：<https://www.r-project.org/> — 链接可访问（HTTP 200）
- 第三方资源：<https://doi.org/10.21437/Interspeech.2011-815> → <https://www.isca-archive.org/interspeech_2011/goldman11_interspeech.html> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 53. [时间不变信息放在哪一层抽、用什么片段学：TiCodec 的 TIRE 拆解与 Dual\-TIRE](/posts/conference-jep-2026-conference-paper-id-esteve26-jep-c6e30a41e3/)

> 英文题目：*[Représentations invariantes dans le temps dans un codec neuronal](/posts/conference-jep-2026-conference-paper-id-esteve26-jep-c6e30a41e3/)*

标签：#向量量化 #可解释性 #多语言 #语音 #语音编码

评分：**5.4/10** | 创新 1.0/2 | 技术严谨 1.0/1.5 | 实验充分 1.0/1.5 | 清晰度 0.7/1 | 影响力 0.8/1.5 | 开源 0.0/1.5 | 可复现 0.1/0.5 | 工程/实践 0.8/1.5

排名：后50% | 文档类型：方法研究 | 主任务：#语音编码 | 主方法：#向量量化

会议来源：[官方记录](https://www.isca-archive.org/jep_2026/esteve26_jep.html) · [官方 PDF](https://www.isca-archive.org/jep_2026/esteve26_jep.pdf)

👥 **作者与机构**

- Kélian Estève：机构信息未能从会议 PDF 纯文本可靠映射
- Mickael Rouvier：机构信息未能从会议 PDF 纯文本可靠映射
- Richard Dufour：机构信息未能从会议 PDF 纯文本可靠映射
- Salima Mdhaffar：机构信息未能从会议 PDF 纯文本可靠映射
- Yannick Estève：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

本文任务是将24 kHz朗读语音压缩为可重建波形，要求在低码率下同时保留时变语义韵律与全局音色环境，难点是全局信息若逐帧重复编码会造成冗余且易与音素纠缠。方法链分三步：卷积编码器先将波形映射为分层隐表示并经残差向量量化得到时变令牌，为后续分离提供时频骨架。时间不变表示提取分支再从中间层截取语音子段池化为固定长度离散表示并复制到时间轴，直接拼入对应解码层提供全局条件。解码器最后融合时变令牌与不变令牌重建波形，使细粒度结构重建与说话人环境保持解耦互补。与原始TiCodec仅在第2层单点接入不同，本文系统比较第1至第4层接入与多种训练段采样，并提出同时利用第2层与第3层的双分支Dual\-TIRE结构以兼顾清晰度与保真度。在LibriTTS test\-clean测试集下，Dual\-TIRE文件交叉变体的ViSQOL为4\.410，高于单TIRE基线的ViSQOL 4\.382。该结论适用边界受限于英语朗读域内客观指标，跨语言与噪声场景仅做小规模抽测且部分指标出现回退，其层选择与交叉文件策略的失败条件尚未验证。原文未披露训练、推理或部署成本。

🔗 **开源资源**

本次未形成可展示的已核验资源记录，开放状态尚未核实。
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 54. [读词末尾多出来的摩擦音：法兰西岛 /i/ 尾语料中性别效应偏向男性一侧](/posts/conference-jep-2026-conference-paper-id-hutin26-jep-e7719a794b/)

> 英文题目：*[Effet du genre sur la réalisation de l'épithèse fricative en français francilien](/posts/conference-jep-2026-conference-paper-id-hutin26-jep-e7719a794b/)*

标签：#数据标注 #统计分析 #社会语音学 #语音 #强制对齐

评分：**5.4/10** | 创新 0.8/2 | 技术严谨 1.0/1.5 | 实验充分 0.5/1.5 | 清晰度 0.8/1 | 影响力 0.5/1.5 | 开源 1.0/1.5 | 可复现 0.3/0.5 | 工程/实践 0.5/1.5

排名：后50% | 文档类型：应用研究 | 主任务：#强制对齐 | 主方法：#统计分析

会议来源：[官方记录](https://www.isca-archive.org/jep_2026/hutin26_jep.html) · [官方 PDF](https://www.isca-archive.org/jep_2026/hutin26_jep.pdf)

👥 **作者与机构**

- Mathilde Hutin：机构信息未能从会议 PDF 纯文本可靠映射
- Esté Defurne：机构信息未能从会议 PDF 纯文本可靠映射
- Florian Cuny：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

本文以法兰西岛孤立词朗读录音为输入，输出每条录音是否存在句末/i/后清擦音尾，难点在于现象偶发且易与韵律边界和录音质量混淆。方法链分三步：先从Lingua Libre众包库筛选法兰西岛母语者以/i/结尾的录音并平衡男女说话人数量，其输出的音频与转写文本进入下一步。接着用WebMAUS自动对齐生成Praat可读标注，再由母语语音学家手工校正音素边界并依据听觉与频谱中非周期噪声和F0缺失判读擦音尾，存疑案例经双人协商达成一致。最后将逐条标注送入以说话人为随机截距的混合效应模型检验性别关联，并辅以按人统计比率的模型对照个体差异影响。与既往主张女性偏好或性别无关的结论不同，该链条通过控制地域与元音语境并分离录音层面与说话人层面效应，揭示了男性偏高的反向模式并以性别悖论讨论其历时反转含义。在孤立词朗读语料条件下，男性录音的擦音尾检出率指标为36,41%，高于女性录音的擦音尾检出率指标7,37%。该结论适用边界限于2018年至2025年法兰西岛/i/尾孤立词朗读，尚未验证自发对话与其他元音及地域的外推，原文未披露训练、推理或部署成本。

🔗 **开源资源**

- 数据相关资源：<https://osf.io/25w8v/> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 55. [声音包络的慢起伏从哪里来：喉头与下颌谁更贴近声学节律](/posts/conference-jep-2026-conference-paper-id-lancia26-jep-f60bbb5417/)

> 英文题目：*[Origines articulatoires des modulations rythmiques de l’amplitude acoustique](/posts/conference-jep-2026-conference-paper-id-lancia26-jep-f60bbb5417/)*

标签：#统计分析 #发声与构音 #韵律 #语音 #语音属性识别

评分：**5.4/10** | 创新 1.3/2 | 技术严谨 1.0/1.5 | 实验充分 0.8/1.5 | 清晰度 0.8/1 | 影响力 0.9/1.5 | 开源 0.0/1.5 | 可复现 0.1/0.5 | 工程/实践 0.5/1.5

排名：后50% | 文档类型：应用研究 | 主任务：#语音属性识别 | 主方法：#统计分析

会议来源：[官方记录](https://www.isca-archive.org/jep_2026/lancia26_jep.html) · [官方 PDF](https://www.isca-archive.org/jep_2026/lancia26_jep.pdf)

👥 **作者与机构**

- Leonardo Lancia：机构信息未能从会议 PDF 纯文本可靠映射
- Zheng Yuan：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

该研究以同步采集的声学波形、上声道发音运动轨迹与喉头仪信号为输入，以音节层与超音节层上发音调制与声学幅度调制的时序协调度为输出，难点在于分离下颌开合的共振腔效应与喉部声门活动决定的响度效应对慢速包络节奏各自的贡献。方法先对各信号求希尔伯特幅度包络并去除喉头仪信号中喉垂直移动引起的慢漂，为后续调制提取提供干净包络。接着按每句语速自适应带通滤波提取音节调制，并由其上下包络之差构造超音节调制，使两层节奏进入可比表示。最后求各调制的瞬时相位并以成对相位一致性度量同层发音声学同步，再用混合模型回归比较不同发音源的协调强度。与强调下颌框架的已有解释不同，该工作把喉部声门活动作为独立候选驱动源与下颌及整体上声道运动并列检验，使响度机制得到显式评估。原文未提供可核对的关键定量结果。结论的适用边界目前仅限于英语朗读短句内的相对排序，尚未验证自发语料、其他语言节奏类型与知觉相关性。原文未披露训练、推理或部署成本。

🔗 **开源资源**

本次未形成可展示的已核验资源记录，开放状态尚未核实。
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 56. [甲状腺术后声音变了但喉镜看不出：/apa/上的相对基频能抓住什么](/posts/conference-jep-2026-conference-paper-id-massis26-jep-2a5b3f78f5/)

> 英文题目：*[Fréquence fondamentale relative en période post\-opératoire thyroïdienne : une possible différence en présence d'altération vocale sur l'énoncé /apa/&\#41;](/posts/conference-jep-2026-conference-paper-id-massis26-jep-2a5b3f78f5/)*

标签：#语音生物标志物 #统计分析 #语音 #病理语音评估

评分：**5.4/10** | 创新 1.1/2 | 技术严谨 1.0/1.5 | 实验充分 0.8/1.5 | 清晰度 0.9/1 | 影响力 0.5/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 0.8/1.5

排名：后50% | 文档类型：应用研究 | 主任务：#病理语音评估 | 主方法：#统计分析

会议来源：[官方记录](https://www.isca-archive.org/jep_2026/massis26_jep.html) · [官方 PDF](https://www.isca-archive.org/jep_2026/massis26_jep.pdf)

👥 **作者与机构**

- Hélène Massis：机构信息未能从会议 PDF 纯文本可靠映射
- Ludovic Malezieux：机构信息未能从会议 PDF 纯文本可靠映射
- Fatima El Abdellaoui：机构信息未能从会议 PDF 纯文本可靠映射
- Laura Westermeyer：机构信息未能从会议 PDF 纯文本可靠映射
- Elisabeth Bonneville：机构信息未能从会议 PDF 纯文本可靠映射
- Audrey Tamic：机构信息未能从会议 PDF 纯文本可靠映射
- Frédérique Frouin：机构信息未能从会议 PDF 纯文本可靠映射
- Christophe Trésallet：机构信息未能从会议 PDF 纯文本可靠映射
- Agnès Rouxel：机构信息未能从会议 PDF 纯文本可靠映射
- Juliette Dindart：机构信息未能从会议 PDF 纯文本可靠映射
- Claire Pillot\-Loiseau：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

任务输入为甲状腺术后第一天在病房重复6次的/apa/发音与健康对照在安静室的相同任务，输出为健康对照、术后无感知障碍与术后有嗓音障碍三组能否被相对基频区分，难点在于抖动与闪烁对非周期信号不敏感且术后早期变化多为亚临床扰动。方法链先经自动对齐加人工校对切分元音与双唇塞音边界以定位前后各10个周期窗口，该窗口划分结果进入声学测量。接着用Praat自相关逐周期提取基频并按公式换算为半音相对值得到每人120个值，该分布进入分组检验。最后按视觉模拟量表整体严重度以50分为界分组并做Kruskal\-Wallis与Mann\-Whitney非参数检验以判定组间差异。相对整体微扰指标，该机制只聚焦清辅音前后各10个周期的局部过渡，因而对声门外展与发声起始协调失调更敏感。在/apa/偏移与起始双相检验设置下，偏移相的H指标为92\.06，高于起始相的H指标5\.54。该结论适用边界限于单音节/apa/术后急性期单次评估，术后无障碍与有障碍组在偏移总体上无分离且小样本与高数据缺失使外推受限。原文未披露训练、推理或部署成本

🔗 **开源资源**

- 第三方资源：<https://www.ncbi.nlm.nih.gov/books/NBK560809/> — 链接可访问（HTTP 200）
- 第三方资源：<https://shs.hal.science/halshs-00363980> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 57. [换词不换声：直接剪贴与编解码器重建哪条路更自然](/posts/conference-jep-2026-conference-paper-id-rodriguesdealmeida26-jep-23b91229a5/)

> 英文题目：*[Vers l'édition linguistique de la parole : étude sur le remplacement de mots dans un signal de parole](/posts/conference-jep-2026-conference-paper-id-rodriguesdealmeida26-jep-23b91229a5/)*

标签：#向量量化 #隐私保护 #语音编辑 #语音合成 #语音克隆

评分：**5.4/10** | 创新 1.0/2 | 技术严谨 1.2/1.5 | 实验充分 0.9/1.5 | 清晰度 0.7/1 | 影响力 0.7/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 0.6/1.5

排名：后50% | 文档类型：应用研究 | 主任务：#语音编辑 | 主方法：#向量量化

会议来源：[官方记录](https://www.isca-archive.org/jep_2026/rodriguesdealmeida26_jep.html) · [官方 PDF](https://www.isca-archive.org/jep_2026/rodriguesdealmeida26_jep.pdf)

👥 **作者与机构**

- Lílian Rodrigues de Almeida：机构信息未能从会议 PDF 纯文本可靠映射
- Vincent Colotte：机构信息未能从会议 PDF 纯文本可靠映射
- Yannick Estève：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

该任务输入为含敏感词的原始语音、待替换词位置与替换词文本，输出为替换后保持说话人与环境连贯的语音，难点在于拼接边界不连续、合成词韵律失配与匿名化可感知性之间的权衡。方法链先用多说话人合成生成替换词，正交控制是否克隆目标语音与是否置于载体句中，其输出作为待插入单元进入下一步。接着对比直接波形剪贴、边界淡入淡出与神经编解码器路径，将替换词切入原始语句并统一离散单元与波形重构以弥合音色与通道差异。最后在替换词加左右各400ms上下文窗口内以滑动窗口评分，用自然度、可懂度与信号质量等多维客观指标检验插入效果。在插入技术对比评测下，实验II的DF指标为55,08，高于实验I的DF指标51,68。相对直接修改信号的关键差异在于经编解码器重构全句，实际意义是以整体重合成掩盖拼接痕迹，其中WavTokenizer偏向可懂度与信号质量而TiCodec偏向自然度。结论适用边界受限于短词替换、手动定位与所用客观指标体系，尚未验证长片段改写、自动敏感词检测误差及主观自然度是否一致。原文未披露训练、推理或部署成本。

🔗 **开源资源**

本次未形成可展示的已核验资源记录，开放状态尚未核实。
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 58. [资源不均时先学共性再学个性：奥克语六方言的跨方言微调](/posts/conference-jep-2026-conference-paper-id-yaich26-jep-a0cdf423d2/)

> 英文题目：*[Exploitation des similarités inter\-dialectales pour la reconnaissance automatique de la parole en occitan](/posts/conference-jep-2026-conference-paper-id-yaich26-jep-a0cdf423d2/)*

标签：#迁移学习 #低资源 #语音 #语音识别

评分：**5.4/10** | 创新 1.0/2 | 技术严谨 1.0/1.5 | 实验充分 1.0/1.5 | 清晰度 0.7/1 | 影响力 0.7/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 0.7/1.5

排名：后50% | 文档类型：应用研究 | 主任务：#语音识别 | 主方法：#迁移学习

会议来源：[官方记录](https://www.isca-archive.org/jep_2026/yaich26_jep.html) · [官方 PDF](https://www.isca-archive.org/jep_2026/yaich26_jep.pdf)

👥 **作者与机构**

- Malek Yaich：机构信息未能从会议 PDF 纯文本可靠映射
- Vincent Colotte：机构信息未能从会议 PDF 纯文本可靠映射
- Emmanuel Vincent：机构信息未能从会议 PDF 纯文本可靠映射
- Sam Bigeard：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

本文处理低资源多方言语音识别，输入为奥克语六种方言语音，输出为奥克语正字法转写，难点在于方言间音系形态词汇分歧显著且除Gascon与Languedocien外目标数据仅数分钟至数秒、评测划分严重不均。方法以Whisper\-large\-v3为基座并固定目标语言为奥克语，训练采用学习率1×10−5与批量8并以验证集损失早停选优，推理采用束宽为5的束搜索解码。第一步做泛奥克语预适应，在排除目标方言的其他方言数据上叠加Common Voice奥克语数据训练以学习跨方言共性表示，其所得权重直接作为第二步初始化。第二步对富资源目标在目标方言训练验证测试划分上定向精调实现特异化，而贫资源目标则直接用跨方言模型评测以检验零目标泛化，两条分支复用同一预适应证据。相对逐方言直接微调，该链条把共性学习与特异适配解耦，先借亲缘方言扩大有效覆盖再聚焦目标，从而缓解小数据过拟合并保留方言特异音词汇映射。在ReVOc划分的评测下，两阶段微调在Gascon上的WER为10\.83%，低于直接微调的WER 11\.04%。结论适用边界是仅在目标有数十小时数据且与训练方言亲缘较近时较可信，对仅36秒的Vivaro\-alpin等贫资源外推尚未验证。原文未披露训练、推理或部署成本

🔗 **开源资源**

本次未形成可展示的已核验资源记录，开放状态尚未核实。
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 59. [用手指画出声调：非母语者能靠手势复现普通话声调对比吗](/posts/conference-jep-2026-conference-paper-id-zhang26-jep-9a4e8bd877/)

> 英文题目：*[Reproduction gestuelle des contrastes tonals du mandarin via l’interface ToneCanvas : Une étude comparative entre locuteurs natifs et non\-natifs](/posts/conference-jep-2026-conference-paper-id-zhang26-jep-9a4e8bd877/)*

标签：#统计分析 #语言习得 #韵律 #语音 #音频交互

评分：**5.4/10** | 创新 1.2/2 | 技术严谨 1.2/1.5 | 实验充分 0.8/1.5 | 清晰度 0.9/1 | 影响力 0.5/1.5 | 开源 0.0/1.5 | 可复现 0.1/0.5 | 工程/实践 0.7/1.5

排名：后50% | 文档类型：应用研究 | 主任务：#音频交互 | 主方法：#统计分析

会议来源：[官方记录](https://www.isca-archive.org/jep_2026/zhang26_jep.html) · [官方 PDF](https://www.isca-archive.org/jep_2026/zhang26_jep.pdf)

👥 **作者与机构**

- Haohan Zhang：机构信息未能从会议 PDF 纯文本可靠映射
- Yedong Wu：机构信息未能从会议 PDF 纯文本可靠映射
- Claire Pillot\-Loiseau：机构信息未能从会议 PDF 纯文本可靠映射
- Xiao Xiao：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

本研究以共享音节且首音节声调恒定、末音节构成对立的普通话双音节预录音频及其可视基频参考轮廓为输入，以被试在空白触屏上用手指垂直运动驱动正弦发生器产生的音高轨迹为输出，难点在于无声调经验的法语者缺乏稳定的音高范畴表征和对快速音高变化的时间控制能力。首先在触屏声调画布上呈现参考轮廓并提供听视觉反馈，负责建立手势垂直位移到音高的映射关系。接着进行有引导的描摹熟悉，将听视觉对应转化为可执行的描摹操作，其形成的操作记忆直接作为下一步独立复现的起点。最后撤除参考在空白界面上独立复现并记录轨迹，输出的连续轨迹进入以说话人和项目为随机效应并按组做时间平滑的广义加性混合模型分析。与传统跟读模仿相比，该机制将声调负担从喉部发音解耦为手部空间运动，使音高幅度与转折时序可见可控，因而更适合初学者先把握动态声调形状再整合到词汇产出。在手势复现任务条件下，原文未提供可核对的关键定量结果。该结论适用边界仅限于引导描摹后的即时空白复现，尚未验证向口头词汇产出或无视觉支持听辨的迁移，也未覆盖连续语流变调情境，原文未披露训练、推理或部署成本。

🔗 **开源资源**

本次未形成可展示的已核验资源记录，开放状态尚未核实。
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 60. [法语形容词前后位置之争：句法邻近要求与韵律分组如何共同起作用](/posts/conference-jep-2026-conference-paper-id-drouillet26-jep-37b81c6cbd/)

> 英文题目：*[Étude de l'interaction prosodie\-syntaxe dans le choix de la position de l'adjectif à l'oral](/posts/conference-jep-2026-conference-paper-id-drouillet26-jep-37b81c6cbd/)*

标签：#人类参与评测 #统计分析 #韵律 #语音 #音频理解

评分：**5.3/10** | 创新 1.2/2 | 技术严谨 1.0/1.5 | 实验充分 0.8/1.5 | 清晰度 0.8/1 | 影响力 0.7/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 0.5/1.5

排名：后50% | 文档类型：应用研究 | 主任务：#音频理解 | 主方法：#人类参与评测

会议来源：[官方记录](https://www.isca-archive.org/jep_2026/drouillet26_jep.html) · [官方 PDF](https://www.isca-archive.org/jep_2026/drouillet26_jep.pdf)

👥 **作者与机构**

- Lucie Drouillet：机构信息未能从会议 PDF 纯文本可靠映射
- Juliette Thuilier：机构信息未能从会议 PDF 纯文本可靠映射
- Corine Astésano：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

该研究处理法语口语中形容词前置或后置选择问题，输入为含可前后置且意义不变形容词与可选介词短语的乱序词组，输出为说话人口头重组后的词序，难点在于句法邻近偏好与韵律节奏偏好可能协同或冲突而难以分离。其方法链先以受控词云重组任务诱发口语产出，输入为按形容词长短与补语类型构造的乱序材料，职责是控制句法与长度变量并获得自然口语录音，输出为带目标名词短语的产出语音。再对录音标注形容词位置并以混合效应逻辑回归建模，输入为上一步产出语音的位置标注与补语类型及形容词长度，职责是分离句法与韵律变量效应，输出为位置选择效应的统计检验结果。最后将统计结果送入待完成的韵律分析，输入为前一步统计差异与对应语音，职责是验证节奏分组解释，输出为对韵律机制的补充解读。与仅强调名词与补语邻近性的句法解释相比，该工作引入重音弧与均衡节奏组机制，认为短形容词易与名词构成和谐节律而长形容词需更均衡切分，具有分离句法依赖与韵律偏好的实际意义。原文未提供可核对的关键定量结果。该结论适用边界受限于特定音节模板的受控材料与词云任务，尚未验证其他名词长度与自发语料的外推范围。原文未披露训练、推理或部署成本。

🔗 **开源资源**

本次未形成可展示的已核验资源记录，开放状态尚未核实。
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 61. [法语嘎裂嗓能量化吗：H1\-H2 与 H1\*\-H2\* 在法英复述任务中的对照检验](/posts/conference-jep-2026-conference-paper-id-jacobs26-jep-fc5dffe0ca/)

> 英文题目：*[Comment mesurer la voix craquée française ?](/posts/conference-jep-2026-conference-paper-id-jacobs26-jep-fc5dffe0ca/)*

标签：#信号处理 #发声与构音 #社会语音学 #语音 #语音属性识别

评分：**5.3/10** | 创新 1.2/2 | 技术严谨 1.1/1.5 | 实验充分 0.6/1.5 | 清晰度 0.7/1 | 影响力 0.8/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 0.6/1.5

排名：后50% | 文档类型：应用研究 | 主任务：#语音属性识别 | 主方法：#信号处理

会议来源：[官方记录](https://www.isca-archive.org/jep_2026/jacobs26_jep.html) · [官方 PDF](https://www.isca-archive.org/jep_2026/jacobs26_jep.pdf)

👥 **作者与机构**

- Justin Jacobs：机构信息未能从会议 PDF 纯文本可靠映射
- Maria Candea：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

本文输入为法国法语组与美国英语组大学生模仿童话反派台词跟读的嗓音片段，输出为通用声学指标能否稳定检测法语嘎裂嗓的判断，难点在于法语嘎裂嗓社会语音学分布不明且鼻音邻接与元音开口度易混淆谐波测量。方法链分三步：先由第一作者听辨结合Praat语图目检给出嘎裂嗓与否的定性编码，为后续对照提供参照标签。接着在Praat中以过零点定界并截取元音20%至80%中段以抑制协同发音干扰，其输出片段进入下一步计算。最后在VoiceSauce中并行计算未校正谐波差H1\-H2与声道校正谐波差H1\-H2并与定性判断对照，而相对已有英语做法的关键差异在于同时检验声道校正是否有效，以区分失效源于共振峰混淆还是发声子类型差异。在英语对照条件与法语实验条件对比的评测设置下，法语实验条件下校正谐波差H1\-H2的成功率为72%，低于英语对照条件下校正谐波差H1\-H2的成功率的89%。该结论的适用边界仅限于朗读模仿的反派风格化嗓音与所选开口元音，鼻音邻接仍会导致漏检与误报双向失效，尚未验证其能否外推到自发会话或非二元性别展演等新兴社会意义。原文未披露训练、推理或部署成本。

🔗 **开源资源**

本次未形成可展示的已核验资源记录，开放状态尚未核实。
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 62. [从逐帧鼻音概率到说话人指数：滑动窗口聚合在连续法语中的稳定与混杂](/posts/conference-jep-2026-conference-paper-id-kim26-jep-b5c60b9539/)

> 英文题目：*[De la nasalité à l’indice global : approche méthodologique pour la détection automatique de la nasalité fondée sur wav2vec 2\.0](/posts/conference-jep-2026-conference-paper-id-kim26-jep-b5c60b9539/)*

标签：#迁移学习 #语音学与音系 #语音 #语音属性识别

评分：**5.3/10** | 创新 1.2/2 | 技术严谨 1.0/1.5 | 实验充分 0.7/1.5 | 清晰度 0.8/1 | 影响力 0.7/1.5 | 开源 0.0/1.5 | 可复现 0.1/0.5 | 工程/实践 0.8/1.5

排名：后50% | 文档类型：方法研究 | 主任务：#语音属性识别 | 主方法：#迁移学习

会议来源：[官方记录](https://www.isca-archive.org/jep_2026/kim26_jep.html) · [官方 PDF](https://www.isca-archive.org/jep_2026/kim26_jep.pdf)

👥 **作者与机构**

- Lila Kim：机构信息未能从会议 PDF 纯文本可靠映射
- Cedric Gendrot：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

本文输入为法语连续语音信号，输出为逐窗鼻音性概率构成的时间轨迹与说话人级全局指数，难点在于鼻耦合声学线索微弱且受协同发音、元音音色、说话人解剖形态与朗读自发风格差异调制。预处理先用语音活动检测剔除静音并拼接为可用的四秒单元，其输出直接作为滑窗切分的对象。推理切分采用五十毫秒窗与十毫秒步长的密集过采样滑窗，使同一音素对应多个含过渡区的观测，该窗序列逐段送入编码器。编码器取wav2vec 2\.0第四层Transformer表征并经单隐层多层感知机输出鼻音性概率，再按全局平均与语境归一化等策略聚合为说话人指数。与依赖音素边界的既有方法相比，该连续估计显式保留前向与后向协同发音过渡并通过大量非对齐窗口平滑局部波动，因而更适合长时比较与风格间比较。在PTSVOX语料的朗读对比自发评测设置下，自发条件的鼻音检出率CV指标为0\.240，高于朗读条件的鼻音检出率CV指标0\.238。全局平均鼻音性在自发语音中显著更强，配对检验为t&\#40;22&\#41;=\-7\.84且p\<0\.001，语境归一化则呈现相反但不显著趋势，提示聚合方式决定风格效应方向。该结论适用边界限于法语朗读与自发对比及所用聚合口径，病理鼻音、跨语言泛化与感知鼻音评分尚未验证，且基频混杂尚未解耦，原文未披露训练、推理或部署成本。

🔗 **开源资源**

本次未形成可展示的已核验资源记录，开放状态尚未核实。
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 63. [先把法语语音从 WavLM 还原出来：层选择与对抗监督决定重建上限](/posts/conference-jep-2026-conference-paper-id-ouldouali26-jep-1043c66d79/)

> 英文题目：*[Vocodage WavLM vers audio en français : Ablation des couches et supervision adversariale comme fondation pour la conversion de voix continue](/posts/conference-jep-2026-conference-paper-id-ouldouali26-jep-1043c66d79/)*

标签：#生成对抗网络 #模型比较 #语音 #语音合成

评分：**5.3/10** | 创新 1.0/2 | 技术严谨 0.9/1.5 | 实验充分 0.7/1.5 | 清晰度 0.7/1 | 影响力 0.8/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 0.9/1.5

排名：后50% | 文档类型：方法研究 | 主任务：#语音合成 | 主方法：#生成对抗网络

会议来源：[官方记录](https://www.isca-archive.org/jep_2026/ouldouali26_jep.html) · [官方 PDF](https://www.isca-archive.org/jep_2026/ouldouali26_jep.pdf)

👥 **作者与机构**

- Nassima Ould Ouali：机构信息未能从会议 PDF 纯文本可靠映射
- Awais Sani：机构信息未能从会议 PDF 纯文本可靠映射
- Eric Moulines：机构信息未能从会议 PDF 纯文本可靠映射
- Reda Dehak：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

本文任务是从冻结自监督表征重建16 kHz法语波形，输入为WavLM\-Base\+深层连续特征，输出为时域音频，难点是表征经压缩抽象后丢失相位与精细谐波结构，且英语声码器在法语上易出现韵律偏移与伪影。方法链分三步：冻结WavLM编码器提取后N层表征并输出帧级向量，其输出进入可学习加权融合与残差卷积适配器以统一维度与时间上下文，适配后特征再送入HiFi\-GAN生成器经逐级上采样合成波形。与仅用频谱损失的基线相比，关键机制差异是引入多周期判别器Multi\-Period Discriminator（MPD）与多尺度判别器Multi\-Scale Discriminator（MSD）加特征匹配Feature Matching（FM），从波形周期性与多分辨率纹理层面约束生成。在Common Voice French未见说话人测试子集的15个样本上，有对抗监督将美尔倒谱失真Mel\-Cepstral Distortion（MCD）从9\.72 dB降至8\.43 dB，同时基频相关性从0\.83升至0\.96。该结论仅适用于1\.5 s至5\.0 s短句朗读类法语重建，未验证强噪声、长时篇章与跨语言泛化，也未证明转换后身份保持能力。原文未披露训练时长、推理延迟与部署成本。

🔗 **开源资源**

本次未形成可展示的已核验资源记录，开放状态尚未核实。
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 64. [看不见声带时还能猜出音高吗：从舌唇运动预测基频的上下文与重音检验](/posts/conference-jep-2026-conference-paper-id-ozkan26-jep-ef5b56a26d/)

> 英文题目：*[Prédiction automatique de la fréquence fondamentale à partir des mouvements articulatoires pour la communication silencieuse](/posts/conference-jep-2026-conference-paper-id-ozkan26-jep-ef5b56a26d/)*

标签：#CNN #发声与构音 #韵律 #静默语音接口

评分：**5.3/10** | 创新 1.2/2 | 技术严谨 1.0/1.5 | 实验充分 0.9/1.5 | 清晰度 0.7/1 | 影响力 0.8/1.5 | 开源 0.0/1.5 | 可复现 0.1/0.5 | 工程/实践 0.6/1.5

排名：后50% | 文档类型：方法研究 | 主任务：#静默语音接口 | 主方法：#CNN

会议来源：[官方记录](https://www.isca-archive.org/jep_2026/ozkan26_jep.html) · [官方 PDF](https://www.isca-archive.org/jep_2026/ozkan26_jep.pdf)

👥 **作者与机构**

- Beliz Ozkan：机构信息未能从会议 PDF 纯文本可靠映射
- Jonas Michael：机构信息未能从会议 PDF 纯文本可靠映射
- Thomas Hueber：机构信息未能从会议 PDF 纯文本可靠映射
- Olivier Perrotin：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

本文任务是从超声舌像T与唇部视频L等发音运动观测预测逐帧中心化标准化基频f0曲线，输入缺少声门直接观测且仅有带声语音可提供Praat估计的监督目标，输出需在源滤波弱耦合假设下从声道形状间接推断声源变化，难点在于韵律显著性与上下文依赖难以从局部帧显式建模。方法链分三步：先按16\.7至283\.3毫秒可变窗堆叠目标帧周围舌唇图像形成上下文输入，再经卷积双分支编码器分别提取舌唇空域运动特征并拼接融合为联合表征，最后经时序回归头输出中心帧f0并以句级Spearman相关评估，词级再用连续小波变换显著度分级做细化分析。相对已有静默语音接口直接回归做法，关键差异在于系统扫描上下文尺度并引入词级显著度分级，同时以梅尔倒谱子带M0:2与M3:12对照区分强度谱倾斜与声道滤波器贡献，其实质意义是检验发音可观测性能解释多少韵律变化而非盲目扩大模型。在TaL语料句级评测设置下，L\+T模型在TaL1上的Spearman相关指标为0\.72，高于在TaL80上的Spearman相关指标0\.66。词级分析显示高显著词预测质量较高而低显著词预测质量较低，上下文增大对舌唇模型提升有限而对梅尔倒谱模型影响更明显。该结论适用边界受限于英语有声朗读与TaL1参考说话人及Praat参考f0，跨至无声发音与跨语言及感知有效性尚未验证。原文未披露训练、推理或部署成本。

🔗 **开源资源**

本次未形成可展示的已核验资源记录，开放状态尚未核实。
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 65. [法语浊唇阻塞音是变懒了还是正在音变：从/b/与/v/的近音化看弱化起点](/posts/conference-jep-2026-conference-paper-id-dong26-jep-08af0be602/)

> 英文题目：*[« \[β\]ref, \[ʋ\]oilà » : Affaiblissement des obstruantes labiales voisées en français conversationnel, réduction ou lénition ?](/posts/conference-jep-2026-conference-paper-id-dong26-jep-08af0be602/)*

标签：#统计分析 #语音学与音系 #语音 #音频分类

评分：**5.2/10** | 创新 1.2/2 | 技术严谨 1.2/1.5 | 实验充分 0.8/1.5 | 清晰度 0.7/1 | 影响力 0.7/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 0.3/1.5

排名：后50% | 文档类型：应用研究 | 主任务：#音频分类 | 主方法：#统计分析

会议来源：[官方记录](https://www.isca-archive.org/jep_2026/dong26_jep.html) · [官方 PDF](https://www.isca-archive.org/jep_2026/dong26_jep.pdf)

👥 **作者与机构**

- Suyuan Dong：机构信息未能从会议 PDF 纯文本可靠映射
- Nicolas Audibert：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

该研究输入为NCCFr朋友间会话录音中标注出的6961个/b/与10844个/v/切段，输出为各目标音的发音变体类别与持阻段声学特征，难点在于自发语流快、叠音与嗓音质量多变使塞音与近音边界模糊。方法链分三步推进：先对20位青年本土说话人全部目标音做Praat声谱图人工分类，输出塞音、近音、中间音与鼻化等标签并进入位置分析。再对元音间/b/持阻段做时长与频谱能量、谐噪比与过零率测量，输出近音与塞音的声学对比量进入统计检验。然后用线性混合模型与二项广义线性混合模型检验性别与音节词位置效应，并跨音位计算说话人级弱化率相关与词频效应以判定简化还是lénition。与聚焦西班牙语齿龈音的既有lénition研究不同，本工作将Occlusive\>Fricative\>Approximante\>Zero轨迹扩展至法语唇音并覆盖全部音系位置，具有填补语种与部位空白的意义。在NCCFr语料下，/v/的近音实现指标为38%，高于/b/的近音实现指标20%。该结论适用边界限于青年本土法语朋友会话中的浊唇阻塞音，向其他辅音、语体与年龄群的外推尚未验证。原文未披露训练、推理或部署成本。

🔗 **开源资源**

- 第三方资源：<https://praat.org/> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 66. [滑音与元音之争：变异行为能否区分两类音？](/posts/conference-jep-2026-conference-paper-id-fougeron26-jep-b3eb12a13a/)

> 英文题目：*[Glides vs\. voyelles : une différence de variabilité articulatoire ?](/posts/conference-jep-2026-conference-paper-id-fougeron26-jep-b3eb12a13a/)*

标签：#统计分析 #发声与构音 #语音学与音系 #韵律 #语音属性识别

评分：**5.2/10** | 创新 1.2/2 | 技术严谨 1.0/1.5 | 实验充分 0.5/1.5 | 清晰度 0.7/1 | 影响力 0.5/1.5 | 开源 1.2/1.5 | 可复现 0.1/0.5 | 工程/实践 0.0/1.5

排名：后50% | 文档类型：理论研究 | 主任务：#语音属性识别 | 主方法：#统计分析

会议来源：[官方记录](https://www.isca-archive.org/jep_2026/fougeron26_jep.html) · [官方 PDF](https://www.isca-archive.org/jep_2026/fougeron26_jep.pdf)

👥 **作者与机构**

- Cécile Fougeron：机构信息未能从会议 PDF 纯文本可靠映射
- Leonardo Lancia：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

本文以连续重复朗读的法语交替序列/ujujuj/与/wiwiwi/的唇、下颌与舌体电磁发音仪轨迹为输入，输出滑音/j/、/w/与高元音/i/、/u/是否构成不同发音类别及其协同发音抵抗力判断，难点在于两者靶位高度重叠且绝对收缩程度差异不稳定难以直接区分。方法链分三步：第一步基于音频分割滑音与元音并剔除发生重音节化的样本，输出净化后的类别标签以避免音节归属混淆进入建模。第二步以唇、下颌、舌尖、舌中和舌背轨迹训练线性判别函数区分两类音段，并由判别函数距零最大偏离推导每段发音精确度指数，使变异程度进入可度量比较。第三步在该指数基础上并行计算唇间距离表征的圆唇指数与舌体前后位置表征的前化指数，分别量化唇与舌子系统的语境影响，使位置与语境效应可分离比较。与既有直接比较绝对收缩或时长的方法不同，本文比较语境与韵律位置引发的变异模式差异，实际意义在于以不同发音指定假设解释不对称协同发音。原文未提供可核对的关键定量结果。结论的适用边界在于仅在二十五名说话人重复朗读的两组对立及六个序列位置上验证，未覆盖/ɥ/、其他元音语境或自发语体因而尚未验证外推性。原文未披露训练、推理或部署成本。

🔗 **开源资源**

本次未形成可展示的已核验资源记录，开放状态尚未核实。
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 67. [听得到却听不懂：助听效果差异是否来自对精细声学线索的提取能力](/posts/conference-jep-2026-conference-paper-id-lebagousse26-jep-dd228608d0/)

> 英文题目：*[Expliquer la différence d'efficacité des aides auditives entre individus en reliant sensibilité aux modulations spectro\-temporelles et utilisation des indices acoustiques](/posts/conference-jep-2026-conference-paper-id-lebagousse26-jep-dd228608d0/)*

标签：#助听器 #心理声学实验 #言语感知 #语音 #语音可懂度评估

评分：**5.2/10** | 创新 1.2/2 | 技术严谨 1.0/1.5 | 实验充分 0.7/1.5 | 清晰度 0.8/1 | 影响力 0.7/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 0.5/1.5

排名：后50% | 文档类型：应用研究 | 主任务：#语音可懂度评估 | 主方法：#心理声学实验

会议来源：[官方记录](https://www.isca-archive.org/jep_2026/lebagousse26_jep.html) · [官方 PDF](https://www.isca-archive.org/jep_2026/lebagousse26_jep.pdf)

👥 **作者与机构**

- Azal Le Bagousse：机构信息未能从会议 PDF 纯文本可靠映射
- Margaux Populasker：机构信息未能从会议 PDF 纯文本可靠映射
- Léo Varnet：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

本文输入为佩戴助听器的轻中度感音神经性聋老年法语用户在噪声下的言语感知行为，输出为个体间助听收益差异的超阈值机制解释，难点在于纯音听力图相当者言语可懂度差异极大而常规测听无法刻画精细声学线索提取能力。方法链分三步：先在白噪声中用/ada/\-/aga/二分类的一上二下阶梯测得每人70\.7%正确率的信噪比阈值，再在该个体阈值下用凸块噪声参数化操纵三线索能量并以心理测量函数斜率估计线索权重β1、β2、β3，最后用三区间迫选任务测与三线索结构对应的STM1、STM2、STM3调制检测阈值并做跨任务相关。与仅用单一原型调制预测整体可懂度的可听对比阈值测试不同，本文使调制朝向分别模仿第一共振峰、第二共振峰和高频爆破的声学结构，从而将低级调制敏感性与特定线索利用直接对应，为个性化补偿和信号处理优化提供指向。在FraMatrix言语接收阈值测试条件下，STM1灵敏度与阈值的Pearson相关指标r为0\.456，高于STM2灵敏度与阈值的Pearson相关指标r 0\.431。该结论适用边界受限于21人小样本的老年助听塞音分类任务，STM3仅3人完成且STM1\-F1与STM3\-爆破两对对应关系尚未验证，难以直接外推至自然连续言语。原文未披露训练、推理或部署成本。

🔗 **开源资源**

本次未形成可展示的已核验资源记录，开放状态尚未核实。
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 68. [换一句语言就换一个人吗：法英双语对自动说话人识别相似度分数的系统性压低](/posts/conference-jep-2026-conference-paper-id-cecchini26-jep-53fb92fe6f/)

> 英文题目：*[Impact du bilinguisme français\-anglais sur les performances de la reconnaissance automatique du locuteur](/posts/conference-jep-2026-conference-paper-id-cecchini26-jep-53fb92fe6f/)*

标签：#统计分析 #跨语言 #语音 #说话人验证

评分：**5.1/10** | 创新 1.0/2 | 技术严谨 1.2/1.5 | 实验充分 0.6/1.5 | 清晰度 0.8/1 | 影响力 0.8/1.5 | 开源 0.0/1.5 | 可复现 0.1/0.5 | 工程/实践 0.6/1.5

排名：后50% | 文档类型：应用研究 | 主任务：#说话人验证 | 主方法：#统计分析

会议来源：[官方记录](https://www.isca-archive.org/jep_2026/cecchini26_jep.html) · [官方 PDF](https://www.isca-archive.org/jep_2026/cecchini26_jep.pdf)

👥 **作者与机构**

- Margaux Cecchini：机构信息未能从会议 PDF 纯文本可靠映射
- Emmanuel Ferragne：机构信息未能从会议 PDF 纯文本可靠映射
- Laurianne Georgeton：机构信息未能从会议 PDF 纯文本可靠映射
- Christophe Stecoli：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

本研究面向法庭语音学中的自动说话人识别，输入为同一双语人在法语与英语下分别录制的语音对，输出为系统给出的相似度似然比分数，实际难点在于语内语言切换带来的声学变异会被系统误读为说话人身份变化。方法链由三步衔接：先组织法英双语人朗读语料并构造单语比较与双语比较条件，其成对组合直接作为待评样本。再调用法医商用系统对其成对计分得到原始似然比，并按单语与双语分别使用独立参考人群归一化以消除条件间量纲差异。随后将归一化分数送入线性混合模型，以语言类型与身份及其交互为固定效应并控制两端信噪比，说话人设随机截距，其估计结果直接支撑结论判断。相对已有小样本双语个案，关键机制差异在于以大样本与性别分组重复验证语言与身份交互，将论证从偶发误差转向系统性混淆及其实际法庭评估意义。原文未提供可核对的关键定量结果。该结论适用边界受限于朗读体长时录音与单一系统，尚未验证自发语音短时噪声与跨信道的外推。原文未披露训练、推理或部署成本。

🔗 **开源资源**

本次未形成可展示的已核验资源记录，开放状态尚未核实。
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 69. [马赛口音不是有或无：用感知等级检验口音的连续性与可变性](/posts/conference-jep-2026-conference-paper-id-ghio26c-jep-28d2342848/)

> 英文题目：*[Etude empirique de la pluriphonie de l’accent marseillais](/posts/conference-jep-2026-conference-paper-id-ghio26c-jep-28d2342848/)*

标签：#主观评测 #社会语音学 #语音 #语言识别

评分：**5.1/10** | 创新 1.2/2 | 技术严谨 1.2/1.5 | 实验充分 0.7/1.5 | 清晰度 0.8/1 | 影响力 0.7/1.5 | 开源 0.0/1.5 | 可复现 0.1/0.5 | 工程/实践 0.4/1.5

排名：后50% | 文档类型：应用研究 | 主任务：#语言识别 | 主方法：#主观评测

会议来源：[官方记录](https://www.isca-archive.org/jep_2026/ghio26c_jep.html) · [官方 PDF](https://www.isca-archive.org/jep_2026/ghio26c_jep.pdf)

👥 **作者与机构**

- Alain Ghio：机构信息未能从会议 PDF 纯文本可靠映射
- Célina Bacha：机构信息未能从会议 PDF 纯文本可靠映射
- Kossi Abotsi：机构信息未能从会议 PDF 纯文本可靠映射
- Médéric Gasquet\-Cyrus：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

本研究输入为马赛市政会议半自发法语发言片段，输出为5级马赛口音程度感知评分，难点在于口音是相对标准参照的主观他者判断，随语境话题对话者与听者表征变化。方法链分三步衔接：先用官网话轮信息以Python预切割2023年三场8至9小时会议录音并以Whisper AI转写辅助检索定位说话人话轮。接着先验挑选估计无弱强口音的10人每人随机抽5段10秒至20秒刺激并剔除争议内容，共50段进入感知环节。然后经Labvanced远程收集49名听者问卷与随机呈现的1至5级评分，再以贝叶斯brms累积logit序数混合模型分离说话人片段嵌套与听者变异，并用LOO与WAIC比较含片段效应与简化模型，另用clmm检验听者地理传记与态度变量。与罗列鼻元音非末重音辅音群简化等原型特征并视为稳定系统的传统做法不同，本文以集体感知分布直接检验Candea与Gasquet\-Cyrus多声性假设，具有揭示语境化资源调动的实际意义。在市政会议50段刺激感知评测设置下，MRS\_H的平均口音程度得分为4\.10，高于MRS\_D的平均口音程度得分1\.33。结论的适用边界受限于单一机构正式场合小样本与无声学机制验证，且听者地理熟悉度与喜爱度均未显著解释评分，8位重叠说话人约1年重测均值相关R²为0\.98仍不外推至日常互动。原文未披露训练、推理或部署成本。

🔗 **开源资源**

本次未形成可展示的已核验资源记录，开放状态尚未核实。
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 70. [送气主要靠时长，声调约束基频：普通话与阜新话 VOT 与 CF0 的分工与补偿](/posts/conference-jep-2026-conference-paper-id-huo26-jep-92c79a8541/)

> 英文题目：*[Étude acoustique comparative du VOT et de la CF0 en mandarin et fuxinois](/posts/conference-jep-2026-conference-paper-id-huo26-jep-92c79a8541/)*

标签：#统计分析 #语音学与音系 #语音 #语音属性识别

评分：**5.1/10** | 创新 1.3/2 | 技术严谨 1.1/1.5 | 实验充分 0.6/1.5 | 清晰度 0.7/1 | 影响力 0.7/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 0.4/1.5

排名：后50% | 文档类型：应用研究 | 主任务：#语音属性识别 | 主方法：#统计分析

会议来源：[官方记录](https://www.isca-archive.org/jep_2026/huo26_jep.html) · [官方 PDF](https://www.isca-archive.org/jep_2026/huo26_jep.pdf)

👥 **作者与机构**

- Zan Huo：机构信息未能从会议 PDF 纯文本可靠映射
- Nathalie Vallee：机构信息未能从会议 PDF 纯文本可靠映射
- Yu Chen：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

该研究输入为普通话与抚顺话中覆盖四声的塞音音节，输出为送气对立下VOT与起振后CF0的分布及其随声调的协同关系，难点在于声调目标压缩CF0表达空间并混淆自动生理效应与音系控制。方法链先以CVCV词表控制/a/元音与四声组合并采集载体句产出，为后续声学比较提供可控语料。接着经Praat标定释放与起振点并提取VOT与起振后CF0，其输出直接进入按声调分层的统计检验。随后以送气与声调为固定效应的线性混合效应模型检验主效应与交互，并按声调分层检验VOT对CF0回归斜率以判断补偿。与既有普通话聚合分析不同，该文按四声拆分并引入抚顺话对照，使声调约束与方言线索组织差异得以分离。在冠状塞音语料下，普通话送气塞音的VOT指标为99\.51 ms，高于非送气塞音的VOT指标23\.45 ms。该补偿解读的适用边界受限于成年男性小样本的冠状塞音与/a/语境，向女性与连续语流的推广尚未验证，原文未披露训练、推理或部署成本。

🔗 **开源资源**

本次未形成可展示的已核验资源记录，开放状态尚未核实。
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 71. [走路的节奏能传到说话吗：帕金森音乐步态训练后语音节律的变化](/posts/conference-jep-2026-conference-paper-id-kashid26-jep-c8a207a8c9/)

> 英文题目：*[Évolution de la rythmicité de la parole chez les personnes atteintes de la maladie de Parkinson après rééducation à la marche basée sur le rythme musical](/posts/conference-jep-2026-conference-paper-id-kashid26-jep-c8a207a8c9/)*

标签：#统计分析 #言语障碍 #语音 #病理语音评估

评分：**5.1/10** | 创新 1.2/2 | 技术严谨 1.0/1.5 | 实验充分 0.6/1.5 | 清晰度 0.8/1 | 影响力 0.6/1.5 | 开源 0.0/1.5 | 可复现 0.1/0.5 | 工程/实践 0.8/1.5

排名：后50% | 文档类型：应用研究 | 主任务：#病理语音评估 | 主方法：#统计分析

会议来源：[官方记录](https://www.isca-archive.org/jep_2026/kashid26_jep.html) · [官方 PDF](https://www.isca-archive.org/jep_2026/kashid26_jep.pdf)

👥 **作者与机构**

- Anant Kashid：机构信息未能从会议 PDF 纯文本可靠映射
- Matteo Vadeleux：机构信息未能从会议 PDF 纯文本可靠映射
- Patrice Guyot：机构信息未能从会议 PDF 纯文本可靠映射
- Delphine Macke：机构信息未能从会议 PDF 纯文本可靠映射
- Serge Pinto：机构信息未能从会议 PDF 纯文本可靠映射
- Alice Bourdon：机构信息未能从会议 PDF 纯文本可靠映射
- Valérie Cochen De Cock：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

本研究以帕金森病患者干预前后快速重复伪词录音为输入，以音节间期稳定性与语速类节律指标为输出，实际难点在于病理语音音节边界模糊且个体变异大，自动检测易将静音误判为音节。先以受试患者为输入按音乐与步伐同步关系分组并施加不同节奏步态干预，其职责是构造节奏刺激条件差异，输出具有不同训练经历的受训队列。再以上一步分组后的受训队列成员为输入在言语治疗环节采集干预前后复述样本，其职责是保证同一被试前后配对可比，输出前后条件一致的待分析录音并使分组条件进入声学分析。最后以前一步输出的配对录音为输入用声学工具自动检测音节与静音并辅以人工校正，其职责是纠正误检并计算节律指标，输出可用于组间比较的稳定性与语速结果。相对直接言语训练的关键机制差异在于以步态节奏刺激干预言语节律，实际意义在于验证广泛性节律障碍假说下的跨模态迁移可能。原文未提供可核对的关键定量结果。结论适用边界受限于短期干预后的复述任务节律评估，尚未验证自发语、可懂度与长期保持等方面的外推效果。原文未披露训练、推理或部署成本。

🔗 **开源资源**

- 第三方资源：<https://www.fon.hum.uva.nl/praat/> — 链接可访问（HTTP 200）
- 第三方资源：<https://lennes.github.io/spect//#pauses> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 72. [青春期前就有性别口音：8\-10 岁儿童 VOT、嗓音质量与 t/d 塞擦化的阶级分化](/posts/conference-jep-2026-conference-paper-id-pepiot26-jep-94def285b7/)

> 英文题目：*[Variations sociales dans les voix d’enfants : une étude du VOT, de l’affrication et de la qualité de voix\.](/posts/conference-jep-2026-conference-paper-id-pepiot26-jep-94def285b7/)*

标签：#统计分析 #社会语音学 #语音 #语音属性识别

评分：**5.1/10** | 创新 1.3/2 | 技术严谨 1.1/1.5 | 实验充分 0.7/1.5 | 清晰度 0.8/1 | 影响力 0.7/1.5 | 开源 0.0/1.5 | 可复现 0.1/0.5 | 工程/实践 0.4/1.5

排名：后50% | 文档类型：应用研究 | 主任务：#语音属性识别 | 主方法：#统计分析

会议来源：[官方记录](https://www.isca-archive.org/jep_2026/pepiot26_jep.html) · [官方 PDF](https://www.isca-archive.org/jep_2026/pepiot26_jep.pdf)

👥 **作者与机构**

- Erwan Pépiot：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

本研究输入为巴黎地区36名8至10岁儿童在载体句中朗读双音节词的录音，输出为按性别与学校阶层划分的嗓音质量、VOT与affrication差异判断，难点在于青春期前生理差异极小而朗读水平、韵律变化与校内录音噪声易掩盖社会效应。方法链分三步：先按教育部社会位置指数选取两极学校并各录18名儿童以控制地域与母语背景；再用Praat手工测量浊塞音负VOT与清塞音正VOT、在元音\[a\]上测H1\-H2并对\[t\]/\[d\]\+\[i\]做听辨加频谱的affrication二分类；前步得到的声学参数进入最后按性别乘以学校的两因素方差分析以检验交互效应。与以往单看性别均值的研究不同，关键机制是将性别效应置于阶层极端对比中检验，揭示VOT分化与嗓音质量分化分属不同阶层，实际意义在于证明性别化发声在青春期前已受阶层调节。在巴黎区朗读语料测试条件下，弱势学校男女间的H1\-H2差异指标为3,3dB，高于优势学校男女间的H1\-H2差异指标1,5dB。该结论适用边界仅限法语巴黎区朗读语体与两端阶层样本，尚未验证自发话语、中间阶层与其他语言的外推。原文未披露训练、推理或部署成本。

🔗 **开源资源**

本次未形成可展示的已核验资源记录，开放状态尚未核实。
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 73. [普通话双元音为何变短就变中央化：时长与语体如何分工压缩共振峰轨迹](/posts/conference-jep-2026-conference-paper-id-xiang26-jep-0a35ba543a/)

> 英文题目：*[La réduction des diphtongues du mandarin standard : effets de la durée et du style de parole](/posts/conference-jep-2026-conference-paper-id-xiang26-jep-0a35ba543a/)*

标签：#统计分析 #语音学与音系 #语音 #语音属性识别

评分：**5.1/10** | 创新 1.2/2 | 技术严谨 1.2/1.5 | 实验充分 0.8/1.5 | 清晰度 0.7/1 | 影响力 0.7/1.5 | 开源 0.0/1.5 | 可复现 0.1/0.5 | 工程/实践 0.4/1.5

排名：后50% | 文档类型：应用研究 | 主任务：#语音属性识别 | 主方法：#统计分析

会议来源：[官方记录](https://www.isca-archive.org/jep_2026/xiang26_jep.html) · [官方 PDF](https://www.isca-archive.org/jep_2026/xiang26_jep.pdf)

👥 **作者与机构**

- Yunzhuo Xiang：机构信息未能从会议 PDF 纯文本可靠映射
- Jingyi Sun：机构信息未能从会议 PDF 纯文本可靠映射
- Jiayin Gao：机构信息未能从会议 PDF 纯文本可靠映射
- Shigeko Shinohara：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

本文以连续话语中切分出的双元音/ai,au,ia,ua/区间及其F1\-F2轨迹为输入，以解释时长、语体及其交互如何塑造弱化实现为输出，实际难点在于静态中点测量会抹除双元音内在的频谱动态与时间定位信息。研究先构建同一批40名发音人的平行朗读与会话语料并切分出36445个目标token，为时长与语体比较提供可控基础。接着计算整体元音空间面积并按归一化时长取代表性时刻刻画全局集中化程度，其输出的空间收缩模式进入下一步动态建模。然后采用混合广义加性模型对F1\-F2轨迹随归一化时间的连续变化建模，分离时长局部效应、语体整体偏移及其交互，输出具有时间定位的效应解释。与以往关注静态目标欠射的研究不同，本文把时长视作局部集中化机制、把语体视作不改变曲率的整体轨迹调整机制，其实质意义在于区分了单化演变中局部幅度压缩与全局偏移的不同贡献。原文未提供可核对的关键定量结果。该结论的适用边界目前仅限所用朗读与会话语料中的四类双元音，向其他元音、方言与语速操控的外推尚未验证，原文未披露训练、推理或部署成本。

🔗 **开源资源**

本次未形成可展示的已核验资源记录，开放状态尚未核实。
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 74. [对齐到文本之后，说话人信息去哪了：残差、层权重与注意力权重的三路核查](/posts/conference-jep-2026-conference-paper-id-bouziane26-jep-68ac5751b4/)

> 英文题目：*[Encodage de la sémantique et du locuteur dans les représentations sémantiques de la parole](/posts/conference-jep-2026-conference-paper-id-bouziane26-jep-68ac5751b4/)*

标签：#注意力机制 #语音 #说话人分离标注 #说话人识别

评分：**5.0/10** | 创新 1.1/2 | 技术严谨 1.2/1.5 | 实验充分 0.7/1.5 | 清晰度 0.8/1 | 影响力 0.8/1.5 | 开源 0.0/1.5 | 可复现 0.1/0.5 | 工程/实践 0.3/1.5

排名：后50% | 文档类型：方法研究 | 主任务：#说话人识别 | 主方法：#注意力机制

会议来源：[官方记录](https://www.isca-archive.org/jep_2026/bouziane26_jep.html) · [官方 PDF](https://www.isca-archive.org/jep_2026/bouziane26_jep.pdf)

👥 **作者与机构**

- Maryem Bouziane：机构信息未能从会议 PDF 纯文本可靠映射
- Séverin Baroudi：机构信息未能从会议 PDF 纯文本可靠映射
- Salima Mdhaffar：机构信息未能从会议 PDF 纯文本可靠映射
- Yannick Estève：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

本文输入为连续语音及其转写文本，输出为句子级固定维度语义向量，难点在于对齐到文本空间后是否仍残留可利用的说话人身份与性别信息。方法先按各自对齐几何定义音频减文本残差以分离未被文本解释的分量。再在平行朗读语料上对残差做按说话人、性别与句子的无监督聚类以判定残留结构归属。最后冻结编码器做层加权说话人分割与帧级注意力分析以定位信息去向并解释聚合方式。与已有整体相似度评测相比，关键差异在于用残差几何与层级归因直接检验说话人可利用性而非仅看任务精度，其实质是将可解释性检验前移到表示结构。在CMU ARCTIC平行语料评测设置下，SENSE残差的准确率为0,9679，高于SONAR残差的准确率0,9271。该结论适用边界受限于朗读式英语studio语音与SENSE和SONAR两类对齐，DIHARD3层级迁移与法语注意力分布尚未验证向自发多语场景的外推，性别与说话人聚类接近随机亦构成失败条件。原文未披露训练、推理或部署成本。

🔗 **开源资源**

- 第三方资源：<https://github.com/snakers4/silero-vad> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 75. [说话人向量记得是谁，却也记住了房间：噪声、混响与修复如何重塑嵌入空间](/posts/conference-jep-2026-conference-paper-id-martin26-jep-c4bb521344/)

> 英文题目：*[Sur la robustesse des plongements de locuteur dans les systèmes de traitement de la parole](/posts/conference-jep-2026-conference-paper-id-martin26-jep-c4bb521344/)*

标签：#评测协议 #鲁棒性 #语音 #说话人识别

评分：**5.0/10** | 创新 1.0/2 | 技术严谨 1.0/1.5 | 实验充分 0.7/1.5 | 清晰度 0.7/1 | 影响力 0.8/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 0.5/1.5

排名：后50% | 文档类型：方法研究 | 主任务：#说话人识别 | 主方法：#评测协议

会议来源：[官方记录](https://www.isca-archive.org/jep_2026/martin26_jep.html) · [官方 PDF](https://www.isca-archive.org/jep_2026/martin26_jep.pdf)

👥 **作者与机构**

- Philippe Martin：机构信息未能从会议 PDF 纯文本可靠映射
- Vincent Barreaud：机构信息未能从会议 PDF 纯文本可靠映射
- David Guennec：机构信息未能从会议 PDF 纯文本可靠映射
- Nelly Barbot：机构信息未能从会议 PDF 纯文本可靠映射
- Damien Lolive：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

本文输入为质量可变的语音波形，输出为用于识别与合成控制的说话人嵌入，难点在于噪声、混响与神经声码器重建会污染身份信息并破坏嵌入空间的类簇结构。该工作先从LibriTTS抽取100位说话人各100条并经22050Hz归一化去静音得到参考集，再施加白噪声与背景噪声、EchoThief实测混响及加静音音高偏移时间拉伸等多类变换并以LibriTTS\-R重建分支对照，然后用冻结的SpeechBrain预训练X\-Vector与ECAPA\-TDNN提取嵌入，最后计算最近邻说话人分类、余弦位移、全局与类内类间离散度及每说话人k等于2的K\-means聚类能力以量化空间畸变。与无注意力机制的X\-Vector相比，ECAPA\-TDNN以通道注意力与帧级注意力聚焦有效语音频带与浊音段，减少对静音与噪声带的编码，因而扰动下类间类内比与身份可分性保持更好。在Reverb\_2强混响评测条件下，ECAPA\-TDNN的Nearest Spk\. Classif\.分数为0\.80，高于X\-vector的Nearest Spk\. Classif\.分数0\.15。LibriTTS\-R重建亦使两模型最近邻分类分数分别降至0\.85与0\.83左右，表明生成式清洗同样引入显著身份漂移。结论适用边界仅限美式英语朗读语料、两款VoxCeleb预训练旧模型与离线变换条件，尚未验证口音污染、重叠语音、真实远场与新一代编码器的外推性。原文未披露训练、推理或部署成本。

🔗 **开源资源**

- 模型相关资源：<https://huggingface.co/speechbrain/spkrec-xvect-voxceleb> — 暂时无法访问
- 模型相关资源：<https://huggingface.co/speechbrain/spkrec-ecapa-voxceleb> — 暂时无法访问
- 第三方资源：<https://iver56.github.io/audiomentations/> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 76. [法语节奏不是重音位置：意大利学习者如何协调重音、句法与手势](/posts/conference-jep-2026-conference-paper-id-souchet26-jep-102ce36f55/)

> 英文题目：*[La coordination multimodale du rythme chez des apprenants italophones de FLE](/posts/conference-jep-2026-conference-paper-id-souchet26-jep-102ce36f55/)*

标签：#数据标注 #语言习得 #韵律 #音视频 #语音属性识别

评分：**4.9/10** | 创新 1.2/2 | 技术严谨 0.9/1.5 | 实验充分 0.6/1.5 | 清晰度 0.8/1 | 影响力 0.5/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 0.6/1.5

排名：后50% | 文档类型：应用研究 | 主任务：#语音属性识别 | 主方法：#数据标注

会议来源：[官方记录](https://www.isca-archive.org/jep_2026/souchet26_jep.html) · [官方 PDF](https://www.isca-archive.org/jep_2026/souchet26_jep.pdf)

👥 **作者与机构**

- Jordan Souchet：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

本研究输入为8名Roma Tre意大利语母语者与4名Nîmes法语母语者在半自发讲述与去标点朗读任务中有罩与无罩条件下的一月间隔前后测视频，输出为以节律群最终重音为界的韵律切分与形态句法切分及头手顶点同步的一致性评价，难点在于法语组重音位置后置且实现可变而意大利语为词内自由重音，迁移易导致规划迟滞与不流利。方法链先用Praat感知标注最终重音并按重读音节数统计犹豫与错置重音得到不流利率，再用ELAN标注头手顶点并以正负200毫秒窗口判定落在重读音节与语调单位末端的比例得到手势同步率。接着按实词可重读与功能词不可重读的二分排除不流利后判定形态句法一致性，最后按对照与韵律与手势与本体感觉四分组比较前后测与戴罩与否的变化以评估内化稳定性。相对纯听觉模仿与单纯手势示范，本体感觉干预增加闭眼法意重音对比、身体扫描与心理意象预演，旨在强化内部控制而非依赖外部视觉线索。在半自发任务后测无罩条件下，本体感觉组的形态句法一致性指标为74\.4%，高于韵律组的形态句法一致性指标61\.1%。结论适用边界受限于12人小样本与7次工作坊及一月后保持性测试，未做可理解度知觉评价与跨母语泛化，朗读高一致性在视觉约束下仍可能失稳，尚未验证课堂长期外推。原文未披露训练、推理或部署成本。

🔗 **开源资源**

- 第三方资源：<https://gepf.falar.org/entries/58> → <https://gepf.falar.org/entries/58/> — 链接可访问（HTTP 200）
- 第三方资源：<https://shesl.org/humboldt_meschonnic/> — 链接可访问（HTTP 200）
- 第三方资源：<https://www.fun-mooc.fr/> → <https://www.fun-mooc.fr/fr/> — 链接可访问（HTTP 200）
- 第三方资源：<https://www.verbotonale-phonetique.com/> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 77. [重音位置决定成败：法语初学者俄语词重音为何首音节偏强、弱化元音分不清](/posts/conference-jep-2026-conference-paper-id-stinchkum26-jep-00610e8d11/)

> 英文题目：*[Acquisition de l’accent lexical en russe langue étrangère chez des apprenants francophones débutants : une étude pilote de la production](/posts/conference-jep-2026-conference-paper-id-stinchkum26-jep-00610e8d11/)*

标签：#统计分析 #语言习得 #韵律 #语音属性识别

评分：**4.9/10** | 创新 1.2/2 | 技术严谨 1.0/1.5 | 实验充分 0.7/1.5 | 清晰度 0.8/1 | 影响力 0.6/1.5 | 开源 0.0/1.5 | 可复现 0.1/0.5 | 工程/实践 0.5/1.5

排名：后50% | 文档类型：应用研究 | 主任务：#语音属性识别 | 主方法：#统计分析

会议来源：[官方记录](https://www.isca-archive.org/jep_2026/stinchkum26_jep.html) · [官方 PDF](https://www.isca-archive.org/jep_2026/stinchkum26_jep.pdf)

👥 **作者与机构**

- Anna Stinchkum：机构信息未能从会议 PDF 纯文本可靠映射
- Thi Thuy Hien Tran：机构信息未能从会议 PDF 纯文本可靠映射
- Tatiana Aleksandrova：机构信息未能从会议 PDF 纯文本可靠映射
- Silvain Gerber：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

本研究处理法语母语初学者朗读俄语双音节与三音节最小对立词的词重音产出任务，输入为嵌入载体句并显性标注重音位置的朗读语音，输出为时长、基频、强度与元音共振峰是否正确标记重音，难点在于法语边界重音与俄语自由对比重音加元音弱化体系冲突，易引发母语筛滤与跨语言迁移。采集阶段以载体句Скажи…тихо控制韵律边界并经消声室三次重复朗读获取可比语料，其语音输出进入声学测量阶段。测量阶段经Praat手动校对音节切分并提取时长与基频与强度及中点第一第二共振峰，其归一化参数输出进入统计建模阶段。建模阶段以线性混合模型检验重音条件与音节位置效应，并以嵌套模型比较与多重比较校正确认位置主效应。与以时长为核心的俄语母语模式不同，学习者以位置性强度突显替代词汇性重音标记，兼具跨语言策略意义。在双音节词载体句朗读任务条件下，末重音基频对比的检验指标z值为2\.317，高于重音与非重音总体对比的检验指标z值\-2\.037。三音节词中末重音音节虽长于中部非重音音节但仍短于首部非重音音节，且非重音元音在共振峰空间高度重叠，表明弱化尚未习得。结论适用边界受限于四名女性法语初学者俄语第三或第四语言受控朗读场景，尚未验证自发语流、知觉能力与长时学习轨迹，原文未披露训练、推理或部署成本。

🔗 **开源资源**

本次未形成可展示的已核验资源记录，开放状态尚未核实。
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 78. [四到七岁听出喜怒哀惧：语言复杂度、目标情绪与双语经验如何分工](/posts/conference-jep-2026-conference-paper-id-terny26-jep-ec6533b770/)

> 英文题目：*[Étude exploratoire du développement de la prosodie émotionnelle chez des enfants aux profils linguistiques variés : effet de la langue, du type de stimuli et de l’émotion cible](/posts/conference-jep-2026-conference-paper-id-terny26-jep-ec6533b770/)*

标签：#人类参与评测 #韵律 #多语言 #语音 #语音情感识别

评分：**4.9/10** | 创新 1.2/2 | 技术严谨 1.0/1.5 | 实验充分 0.7/1.5 | 清晰度 0.7/1 | 影响力 0.6/1.5 | 开源 0.0/1.5 | 可复现 0.2/0.5 | 工程/实践 0.5/1.5

排名：后50% | 文档类型：应用研究 | 主任务：#语音情感识别 | 主方法：#人类参与评测

会议来源：[官方记录](https://www.isca-archive.org/jep_2026/terny26_jep.html) · [官方 PDF](https://www.isca-archive.org/jep_2026/terny26_jep.pdf)

👥 **作者与机构**

- Lola Terny：机构信息未能从会议 PDF 纯文本可靠映射
- Myriam Piccaluga：机构信息未能从会议 PDF 纯文本可靠映射
- Kathy Huet：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

本研究任务是从语音中识别情感韵律类别，输入为法语与西班牙语句子、伪句子及非语言发声，输出为喜悦、悲伤、愤怒与恐惧的强制选择判断，难点在于儿童情绪标签能力尚在发展且语义内容会干扰对韵律线索的判断。方法先由同一双语女性发音人录制语义情感中性的句子并派生符合音位约束的伪句子，其输出直接构成刺激池进入成人筛选环节。接着由法西成人听者筛选保留各情绪各语言各类型的可用刺激并补充非语言发声，筛选后刺激进入儿童识别阶段。最后借助颜色怪物教具完成情绪标签熟悉化与练习试次后实施强制选择测试，并以广义线性混合模型分析正确率随年龄、语言、刺激与情绪的变化。相对以往单语言或单刺激类型研究，该设计把语言特异性与语言复杂性操作化后放在同一范式内比较，可同时观察跨语言迁移与去语义化效应的实际意义。原文未提供可核对的关键定量结果。结论的适用边界仅限于法西语境下年幼儿童行为识别趋势的探索性解释，尚未验证神经机制推断与临床诊断外推。原文未披露训练、推理或部署成本。

🔗 **开源资源**

本次未形成可展示的已核验资源记录，开放状态尚未核实。
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 79. [皮肤拉伸为何只让日本人更常听到长元音：体感与母语音位表征的配合](/posts/conference-jep-2026-conference-paper-id-vallois26-jep-98888ed3ff/)

> 英文题目：*[Rôle des entrées somatosensorielles et de la langue maternelle pour la perception du contraste de quantité vocalique japonais](/posts/conference-jep-2026-conference-paper-id-vallois26-jep-98888ed3ff/)*

标签：#心理声学实验 #言语感知 #语音 #音频分类

评分：**4.9/10** | 创新 1.3/2 | 技术严谨 1.2/1.5 | 实验充分 0.7/1.5 | 清晰度 0.8/1 | 影响力 0.8/1.5 | 开源 0.0/1.5 | 可复现 0.1/0.5 | 工程/实践 0.0/1.5

排名：后50% | 文档类型：应用研究 | 主任务：#音频分类 | 主方法：#心理声学实验

会议来源：[官方记录](https://www.isca-archive.org/jep_2026/vallois26_jep.html) · [官方 PDF](https://www.isca-archive.org/jep_2026/vallois26_jep.pdf)

👥 **作者与机构**

- Inès Vallois：机构信息未能从会议 PDF 纯文本可靠映射
- Takayuki Ito：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

本研究处理听觉时长到音位类别映射的言语感知任务，输入为从叔叔到祖父渐变的听觉语音，输出为短长元音词项判别，实际难点在于日语以时长区分词义而法语缺乏数量对立，致使无该范畴听者的听觉线索模糊且范畴边界不稳定。方法链分三步推进，先合成元音时长等步变化的听觉连续体以提供可控时长输入，再在辨认试次中交替施加口面皮肤后向牵拉并使牵拉持续时间对齐长元音，从而注入发音方向一致的体感证据。接着将听觉与体感配对输入送入二选一辨认并拟合心理测量函数，由全刺激平均反应比例检验体感主效应并由控制条件斜率比较母语敏感性，上一步的连续体判断直接成为下一步统计建模的输入。相对聚焦共振峰等频谱线索的既有体感语音工作，该机制差异在于将体感整合从频谱推广到时间维度的数量对立，并以日法母语对比检验整合是否依赖后天音系表征。这种推广的实际意义在于揭示母语感觉运动表征对时长感知的塑造，为理解跨语言感知差异提供多感觉视角。在辨认任务条件下，原文未提供可核对的关键定量结果。结论适用边界受限于单个元音对立与实验室皮肤牵拉范式，尚未验证向辅音长短自然语速及其他母语的外推。原文未披露训练、推理或部署成本。

🔗 **开源资源**

本次未形成可展示的已核验资源记录，开放状态尚未核实。
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 80. [听觉反馈不一致时口腔如何调整：辅音语境与掩蔽噪声共同塑造元音适应](/posts/conference-jep-2026-conference-paper-id-vancheri26-jep-f1b2aa2761/)

> 英文题目：*[Adaptation audio\-motrice lors de la parole : impact de la conduction interne et du niveau de bruit de masquage](/posts/conference-jep-2026-conference-paper-id-vancheri26-jep-f1b2aa2761/)*

标签：#心理声学实验 #发声与构音 #言语感知 #语音 #语音属性识别

评分：**4.9/10** | 创新 1.2/2 | 技术严谨 1.0/1.5 | 实验充分 0.6/1.5 | 清晰度 0.7/1 | 影响力 0.6/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 0.5/1.5

排名：后50% | 文档类型：应用研究 | 主任务：#语音属性识别 | 主方法：#心理声学实验

会议来源：[官方记录](https://www.isca-archive.org/jep_2026/vancheri26_jep.html) · [官方 PDF](https://www.isca-archive.org/jep_2026/vancheri26_jep.pdf)

👥 **作者与机构**

- Raphael Vancheri：机构信息未能从会议 PDF 纯文本可靠映射
- Max Gensse：机构信息未能从会议 PDF 纯文本可靠映射
- Coriandre Vilain：机构信息未能从会议 PDF 纯文本可靠映射
- Nathalie Henrich Bernardoni：机构信息未能从会议 PDF 纯文本可靠映射
- Pierre Baraduc：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

该研究处理听觉反馈中空中通道与内部传导不一致的难题，输入为法语伪词朗读中的目标元音发音，输出为预期性重校准即适应量及其向邻近元音的泛化，难点在于实时扰动只改变空中共振峰而骨传导信号不变，二者冲突会限制补偿并造成条件间差异。方法链前后衔接：先用屏幕呈现系列伪词并维持稳定发声以采集可比语音，再用改良实时跟踪系统仅在目标元音段施加渐进共振峰扰动，前一步的可比语音直接成为后一步扰动施加的对象。接着叠加不同等级言语形掩蔽噪声以改变内外反馈比例，最后将共振峰转换到听觉尺度并投影到以预试邻近元音为基准的无量纲轴上建模，扰动后语音直接进入掩蔽配比与归一化统计。与既往假定掩蔽充分的研究不同，该工作引入同部位双唇塞音的清浊与鼻音梯度来系统改变内部共振可听度，从而分离内部反馈对适应的抑制作用，具有澄清反馈权重归因的实际意义。定性上高掩蔽下适应呈现特定辅音排序而低掩蔽下该调节消失且适应整体变化并伴随邻近元音超构音，作者以外部归因差异解释该翻转。原文未提供可核对的关键定量结果。结论的适用边界受限于法语非央元音与实验室放大回放及有限掩蔽设置，尚未验证向自然对话与其他音系的外推，原文未披露训练、推理或部署成本。

🔗 **开源资源**

本次未形成可展示的已核验资源记录，开放状态尚未核实。
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 81. [声带不振动时，法语清浊对立靠时长和邻音保住，但塞音连缀会中和](/posts/conference-jep-2026-conference-paper-id-bodiou26-jep-b25c3ce617/)

> 英文题目：*[Contraste de voisement des obstruantes du français dans des énoncés mono\- et bisyllabiques en parole chuchotée](/posts/conference-jep-2026-conference-paper-id-bodiou26-jep-b25c3ce617/)*

标签：#人类参与评测 #发声与构音 #语音学与音系 #语音 #语音可懂度评估

评分：**4.8/10** | 创新 1.3/2 | 技术严谨 1.1/1.5 | 实验充分 0.7/1.5 | 清晰度 0.7/1 | 影响力 0.6/1.5 | 开源 0.0/1.5 | 可复现 0.1/0.5 | 工程/实践 0.3/1.5

排名：后50% | 文档类型：应用研究 | 主任务：#语音可懂度评估 | 主方法：#人类参与评测

会议来源：[官方记录](https://www.isca-archive.org/jep_2026/bodiou26_jep.html) · [官方 PDF](https://www.isca-archive.org/jep_2026/bodiou26_jep.pdf)

👥 **作者与机构**

- Solène Bodiou：机构信息未能从会议 PDF 纯文本可靠映射
- Nicolas Audibert：机构信息未能从会议 PDF 纯文本可靠映射
- Naomi Yamaguchi：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

本研究考察法语阻塞音在耳语中声带不振动时如何维持清浊对立，输入为单双音节无意义词中阻塞音及其相邻元音，输出为时长区分是否保留及听者辨认能否成立，难点在于传统浊音线索失效且短结构中可利用的相邻时长信息更少。先在隔音室同步采集标准法语单语者常态与耳语的声学与电声门图信号并以电声门图筛除耳语试次中的浊音污染，其职责是保证耳语纯净性，输出的纯净语料直接进入时长分析。再对阻塞音与相邻元音做时长测量并以方差分析加事后检验判断清浊时长区分是否保留，其职责是以统计检验形成保留或中和的分组结论，该分组结论为感知实验提供待验证条件。最后由法语听者经在线实验平台完成无意义词辨认任务，其职责是检验时长保留能否转化为可感知对立，输出的辨认结果回证前两步的声学分组。与既往多音节语境研究不同，本研究将检验压缩至单双音节短结构，并并置常态滤波后电声门图与耳语电声门图的类振荡形态及言语预备手势案例，揭示塞音后接口腔塞音时尾音对立中和等条件性保留规律。原文未提供可核对的关键定量结果。该结论的适用边界受限于朗读式无意义词，未纳入元音间语境与连续语流，后续仍需补充新的电声门图分析与相关语境验证；原文未披露训练、推理或部署成本。

🔗 **开源资源**

本次未形成可展示的已核验资源记录，开放状态尚未核实。
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 82. [四人声嘈杂中听句子的青春期改善：抑制反应时部分传递年龄效应](/posts/conference-jep-2026-conference-paper-id-fontan26-jep-caf0dcae14/)

> 英文题目：*[Développement des performances de perception de la parole dans le bruit : rôles des capacités d’inhibition et de mémoire de travail](/posts/conference-jep-2026-conference-paper-id-fontan26-jep-caf0dcae14/)*

标签：#心理声学实验 #统计分析 #言语感知 #语音 #语音可懂度评估

评分：**4.8/10** | 创新 0.8/2 | 技术严谨 1.0/1.5 | 实验充分 0.8/1.5 | 清晰度 0.8/1 | 影响力 0.5/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 0.6/1.5

排名：后50% | 文档类型：应用研究 | 主任务：#语音可懂度评估 | 主方法：#心理声学实验

会议来源：[官方记录](https://www.isca-archive.org/jep_2026/fontan26_jep.html) · [官方 PDF](https://www.isca-archive.org/jep_2026/fontan26_jep.pdf)

👥 **作者与机构**

- Lionel Fontan：机构信息未能从会议 PDF 纯文本可靠映射
- Jeanne Desreumaux：机构信息未能从会议 PDF 纯文本可靠映射
- Saïd Jmel：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

本研究处理噪声中言语感知任务，输入为四人声掩蔽下呈现的法语VRB句子，输出为识别50%关键词所需的信噪比阈值RSB50，难点在于掩蔽含可懂竞争言语而引入信息性掩蔽且随年龄发育变化。方法链分三步：第一步用VRB在递减信噪比下采集复述得分并以Spearman\-Kärber公式估计RSB50指标，其结果进入中介分析作为因变量；第二步用数字广度与三色Stroop任务分别量化工作记忆与抑制，输出平均广度与不一致条件反应时并作为中介变量；第三步以年龄为自变量在R的Lavaan中检验中介，输出直接效应与间接效应。与仅报告年龄改善的已有方法相比，关键差异是将Stroop不一致反应时作为部分中介机制，使信息性掩蔽下的认知解释可被量化分解。在VRB言语感知任务条件下，20岁9个月被试的RSB50指标为\-1\.78 dB，低于10岁被试的RSB50指标0\.15 dB。进一步中介显示仅Stroop不一致平均反应时间接效应显著、中介比例约20\.5%，而数字广度与干扰量对RSB50均无显著影响。该结论适用边界受限于法语VRB四人声掩蔽与10至20岁横断设计，尚未验证纵向发展与听损人群外推；原文未披露训练、推理或部署成本。

🔗 **开源资源**

本次未形成可展示的已核验资源记录，开放状态尚未核实。
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 83. [把文本变成手码：TextCueS 如何让 LfPC 编码步骤可见可改](/posts/conference-jep-2026-conference-paper-id-bigi26-jep-25528e7dee/)

> 英文题目：*[Génération du code LfPC / Cued Speech à partir du texte](/posts/conference-jep-2026-conference-paper-id-bigi26-jep-25528e7dee/)*

标签：#教育 #开源工具 #用户研究 #语音合成

评分：**4.7/10** | 创新 1.0/2 | 技术严谨 1.0/1.5 | 实验充分 0.2/1.5 | 清晰度 0.7/1 | 影响力 0.5/1.5 | 开源 0.2/1.5 | 可复现 0.1/0.5 | 工程/实践 1.0/1.5

排名：后50% | 文档类型：应用研究 | 主任务：#语音合成 | 主方法：#用户研究

会议来源：[官方记录](https://www.isca-archive.org/jep_2026/bigi26_jep.html) · [官方 PDF](https://www.isca-archive.org/jep_2026/bigi26_jep.pdf)

👥 **作者与机构**

- Brigitte Bigi：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

本文任务是从正字法文本生成LfPC/Cued Speech编码，输入为法语或美式英语文本，输出为手形与手位组合的键序列及其文本与图形可视化，实际难点在于一词多音、口音差异与复杂音节需准确映射为可学习的离散手势表示。方法链第一步选择语言并输入文本以确定所用语言资源，其输出的原始文本进入第二步。第二步生成发音并由用户校验或手动改写以适配口音，确认后的音素串进入第三步。第三步由生成引擎将音素串切分为键序列，并按初学者、中级、高级等参数呈现文本与可视化结果。相对封闭式自动编码工具，该工作将生成引擎与语言规则文件解耦，词表、发音词典与编码规则置于模块化文件，全程暴露中间步骤供干预，因而兼顾教学自主性与多语言扩展。原文未提供可核对的关键定量结果。其结论适用边界受限于法语和美式英语教学演示，美式英语长元音三维运动在二维呈现中尚未优化，其他语言扩展尚未验证且取决于资源可得性。原文未披露训练、推理或部署成本。

🔗 **开源资源**

- 演示资源：<https://auto-cuedspeech.org/textcues.html> — 链接可访问（HTTP 200）
- 演示资源：<https://auto-cuedspeech.org/> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 84. [尾巴上的 /\-s/ 去哪了：用时长和重心在 20 人访谈里检验社会变量](/posts/conference-jep-2026-conference-paper-id-kim26b-jep-32f9d15d20/)

> 英文题目：*[La variation en espagnol d'Amérique latine : analyse socio\-phonétique de la coda /\-s/ chez les micro\-travailleurs de l'IA](/posts/conference-jep-2026-conference-paper-id-kim26b-jep-32f9d15d20/)*

标签：#统计分析 #社会语音学 #语音 #语音属性识别

评分：**4.7/10** | 创新 1.1/2 | 技术严谨 1.0/1.5 | 实验充分 0.5/1.5 | 清晰度 0.8/1 | 影响力 0.5/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 0.5/1.5

排名：后50% | 文档类型：应用研究 | 主任务：#语音属性识别 | 主方法：#统计分析

会议来源：[官方记录](https://www.isca-archive.org/jep_2026/kim26b_jep.html) · [官方 PDF](https://www.isca-archive.org/jep_2026/kim26b_jep.pdf)

👥 **作者与机构**

- Mincho Kim：机构信息未能从会议 PDF 纯文本可靠映射
- Ioana Vasilescu：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

本文输入为拉美多国人工智能微工作者的半自发访谈语音与社会人口问卷，输出为音节韵尾擦音声学实现与社会变量关联的统计判断，实际难点在于自发语料中从保持到送气再到完全删除的连续弱化与典型发音强制对齐偏差。母语者人工转写后做典型发音强制对齐得到切分，其输出进入频谱图人工核查以估计变体分布，该分布指导仅保留可靠时长词尾韵尾子集用于后续声学测量。随后对数归一化时长与对数谱重心进入控制说话人与词汇随机截距的线性混合效应模型，检验时长与谱重心关系及社会变量对斜率的调节作用。相比传统听辨计数分类，该研究以谱重心随归一化时长变化的交互斜率刻画弱化程度，试图保留渐变细节并分离社会变量对斜率的调节作用。原文未提供可核对的关键定量结果。其结论适用边界受限于小样本高学历偏态的探索性描述，不能外推为拉美各变体或微工作不稳定性的一般规律，跨语料比较与发音变体建模对照尚未验证。原文未披露训练、推理或部署成本。

🔗 **开源资源**

本次未形成可展示的已核验资源记录，开放状态尚未核实。
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 85. [浊音去哪了：普通话听者用送气与否重新划分法语塞音](/posts/conference-jep-2026-conference-paper-id-su26-jep-68e41e580c/)

> 英文题目：*[Assimilation perceptive des consonnes occlusives françaises par des auditeurs du chinois mandarin](/posts/conference-jep-2026-conference-paper-id-su26-jep-68e41e580c/)*

标签：#心理声学实验 #言语感知 #语音 #语音识别

评分：**4.7/10** | 创新 1.0/2 | 技术严谨 1.2/1.5 | 实验充分 0.6/1.5 | 清晰度 0.8/1 | 影响力 0.5/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 0.3/1.5

排名：后50% | 文档类型：应用研究 | 主任务：#语音识别 | 主方法：#心理声学实验

会议来源：[官方记录](https://www.isca-archive.org/jep_2026/su26_jep.html) · [官方 PDF](https://www.isca-archive.org/jep_2026/su26_jep.pdf)

👥 **作者与机构**

- Chang Su：机构信息未能从会议 PDF 纯文本可靠映射
- Takeki Kamiyama：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

本研究考察无学法经历的北方官话听者如何将法语词首塞音同化到母语送气对立中，输入为本土发音人产出的塞音与元音组合的载体句中孤立音节，输出为不计声调的拼音自由转写与普通话发音优度评分，难点在于法语浊音对立与普通话送气对立在嗓音起始时间维度上错位且部位与元音语境会推移实现。先把目标音节嵌入固定载体句并取中间轮次录音以控制语速语调，测量嗓音起始时间分布以刻画发音人与部位元音效应。再组织北方听者在线听辨转写并评分，输出进入下一步重编码。最后把转写重编码为送气与非送气类并计算送气回答比例与逻辑回归建模，揭示嗓音起始时间到类别归属的连续映射。与直接测学习者辨别正确率的已有二语习得研究不同，本文采用知觉同化模型范式测无知者的类别归属与原型度，因而能预测不同组合的学习难度分化而非仅报告总体习得水平。原文未提供可核对的关键定量结果。该结论适用边界仅限词首孤立音节与北方官话 naive听者，连续语流、多发音人泛化与真实课堂学习者等外推尚未验证。原文未披露训练、推理或部署成本。

🔗 **开源资源**

本次未形成可展示的已核验资源记录，开放状态尚未核实。
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 86. [把对话、主动发起与非言语表达压进一个提示驱动策略：基于 LLM 的工作流能否替代分离式规则](/posts/conference-jep-2026-conference-paper-id-sucal26-jep-b20a670b67/)

> 英文题目：*[Intégrer la multimodalité dans les interactions humain\-robot situées avec un LLM supervisé par un workflow agentique](/posts/conference-jep-2026-conference-paper-id-sucal26-jep-b20a670b67/)*

标签：#用户研究 #大语言模型 #零样本 #音视频 #音视频交互

评分：**4.7/10** | 创新 1.2/2 | 技术严谨 1.0/1.5 | 实验充分 0.7/1.5 | 清晰度 0.6/1 | 影响力 0.4/1.5 | 开源 0.0/1.5 | 可复现 0.1/0.5 | 工程/实践 0.7/1.5

排名：后50% | 文档类型：系统技术报告 | 主任务：#音视频交互 | 主方法：#用户研究

会议来源：[官方记录](https://www.isca-archive.org/jep_2026/sucal26_jep.html) · [官方 PDF](https://www.isca-archive.org/jep_2026/sucal26_jep.pdf)

👥 **作者与机构**

- Virgile Sucal：机构信息未能从会议 PDF 纯文本可靠映射
- Maxime Jullien：机构信息未能从会议 PDF 纯文本可靠映射
- Ahmed Njifenjou：机构信息未能从会议 PDF 纯文本可靠映射
- Fabrice Lefèvre：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

该任务输入为Pepper转录的结构化环境状态与对话历史，输出为Wait等五类主动交互动作及对应口语文本与非言语表情，难点在于嘈杂 situated条件下何时主动介入、多模态表达一致与实时决策的协同。工作流智能体按固定顺序分三步推理，先由主动性子流程w1抽取用户兴趣与上下文并做零样本思维链推理，以单令牌受限选择输出期望动作。其动作判断与推理文本作为知识传入对话管理w2生成应答口语文本，再将动作与文本一并传入非言语沟通w3选择表情或强调手势，最终合并为统一执行包。与基于交互信念接受分类器加手工规则的多策略旧系统相比，关键差异是以单大语言模型多提示推理替代可训练视频分类器与规则引擎，省去标注视频训练与规则调参，具有开发流程优化意义。在批量重放评测条件下，工作流智能体的准确率为0,66，高于旧系统的准确率0,43。其适用边界限于实验室法语短对话与医院候选场景，长期部署、强噪声与跨文化泛化的表现尚未验证。原文指出延迟仍是主要瓶颈，工作流智能体的推理开销较高且推理时间受限于大语言模型调用。

🔗 **开源资源**

本次未形成可展示的已核验资源记录，开放状态尚未核实。
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 87. [调超韵律参数为何比直接调共振峰更能纠正法语元音](/posts/conference-jep-2026-conference-paper-id-gioiella26-jep-2832294245/)

> 英文题目：*[Intervention phonétique en langue étrangère : effets comparés de stratégies correctives sur la production vocalique](/posts/conference-jep-2026-conference-paper-id-gioiella26-jep-2832294245/)*

标签：#教育 #人类参与评测 #语言习得 #语音属性识别

评分：**4.6/10** | 创新 1.2/2 | 技术严谨 1.0/1.5 | 实验充分 0.5/1.5 | 清晰度 0.7/1 | 影响力 0.6/1.5 | 开源 0.0/1.5 | 可复现 0.1/0.5 | 工程/实践 0.5/1.5

排名：后50% | 文档类型：应用研究 | 主任务：#语音属性识别 | 主方法：#人类参与评测

会议来源：[官方记录](https://www.isca-archive.org/jep_2026/gioiella26_jep.html) · [官方 PDF](https://www.isca-archive.org/jep_2026/gioiella26_jep.pdf)

👥 **作者与机构**

- Marina Gioiella：机构信息未能从会议 PDF 纯文本可靠映射
- Gonzalo Francisco Sanchez：机构信息未能从会议 PDF 纯文本可靠映射
- Véronique Delvaux：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

本研究处理西班牙语母语初学者法语元音产出偏误问题，输入为学习者对双音节无意义词对数词的跟读语音，输出为向法语目标元音靠近的产出调整，难点在于法语圆唇前元音与半闭元音等范畴在西班牙语元音空间中缺失，仅靠整体模仿难以建立稳定对立。方法链由三环构成：先诊断上一次跟读中目标元音的偏误方向并确定个体化矫正需求，该诊断输出直接决定下一步听觉目标的生成参数，再按所属实验组规则生成个体化听觉目标刺激并要求跟读以提供隐性矫正反馈，最后以目标与产出之间声学距离分数在前测、即时后测与四周后延迟后测上的变化评估学习与保持。与已有发音训练相比，关键机制差异在于把超分段操控作为分段调整的支架，而非只直接修改共振峰，这使得时长、强度与基频的凸显或音色明暗调制能够引导学习者感知并实现目标共振峰，具有辅助初学者建立新范畴的实际意义。在前测、即时后测与四周后延迟后测的跟读任务条件下，针对四组共41名被试的声学距离分数比较仅给出整体下降且超分段相关策略占优的方向性结论，原文未提供可核对的关键定量结果。结论目前仅适用于所测4个元音与初学者短期跟读情境，向其他母语背景、自然语流与课堂部署的外推尚未验证，构成明确的适用边界。原文未披露训练、推理或部署成本。

🔗 **开源资源**

本次未形成可展示的已核验资源记录，开放状态尚未核实。
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 88. [可读难了，机器还能听准吗：可听性中结构复杂度与识别错误的解耦](/posts/conference-jep-2026-conference-paper-id-ramonda26-jep-d454db559a/)

> 英文题目：*[Dissocier la lisibilité et l’intelligibilité : un nouveau paradigme pour l’écoutabilité](/posts/conference-jep-2026-conference-paper-id-ramonda26-jep-d454db559a/)*

标签：#统计分析 #语音 #语音识别 #语音可懂度评估

评分：**4.6/10** | 创新 1.0/2 | 技术严谨 0.9/1.5 | 实验充分 0.5/1.5 | 清晰度 0.8/1 | 影响力 0.6/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 0.5/1.5

排名：后50% | 文档类型：应用研究 | 主任务：#语音可懂度评估 | 主方法：#统计分析

会议来源：[官方记录](https://www.isca-archive.org/jep_2026/ramonda26_jep.html) · [官方 PDF](https://www.isca-archive.org/jep_2026/ramonda26_jep.pdf)

👥 **作者与机构**

- Baptiste Ramonda：机构信息未能从会议 PDF 纯文本可靠映射
- Laurianne Sitbon：机构信息未能从会议 PDF 纯文本可靠映射
- Julien Pinquier：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

本文面向聆听优化，输入为难度不一的书面文本，输出为结构复杂度是否决定自动转写准确率的判断，难点在于剥离口音噪声等声学干扰并区分机器结构复杂度与人类主观难度。为此先融合多种传统可读性指数构建全局可读性指数IGL以刻画文本结构复杂度，其输出作为后续相关与回归分析的自变量。再用标准干净合成语音将源文本转为单说话人音频以隔离口音与噪声等声学变量，合成音频直接送入轻量端到端识别模型进行转写。最后计算转写与源文本间的词错误率WER作为客观可懂度，并检验其与IGL的关联是否耦合。与历史依赖语言模型困惑度的混合高斯隐马尔可夫机制不同，端到端大弱监督架构被认为已内化复杂句法因而转写不再随难度恶化，这使文本简化与信号优化可作为独立杠杆并行解耦。在4718篇CLEAR语料合成语音评测下，人类BT Easiness与WER的Pearson为\-0\.28，低于IGL与WER的Pearson 0\.03。该结论适用边界受限于干净单说话人合成英语朗读与轻量识别模型的客观误差，尚未验证真实噪声、多口音及人类听努力与理解成本的外推。原文未披露训练、推理或部署成本。

🔗 **开源资源**

本次未形成可展示的已核验资源记录，开放状态尚未核实。
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 89. [窄聚焦不只抬高音高峰：法语三区韵律的再量化](/posts/conference-jep-2026-conference-paper-id-yan26-jep-ad20a28631/)

> 英文题目：*[Requantification des ajustements tri\-zonaux du focus en français : indices de F0, d’intensité et de durée](/posts/conference-jep-2026-conference-paper-id-yan26-jep-ad20a28631/)*

标签：#统计分析 #韵律 #语音 #语音属性识别

评分：**4.6/10** | 创新 1.0/2 | 技术严谨 1.2/1.5 | 实验充分 0.8/1.5 | 清晰度 0.7/1 | 影响力 0.4/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 0.2/1.5

排名：后50% | 文档类型：应用研究 | 主任务：#语音属性识别 | 主方法：#统计分析

会议来源：[官方记录](https://www.isca-archive.org/jep_2026/yan26_jep.html) · [官方 PDF](https://www.isca-archive.org/jep_2026/yan26_jep.pdf)

👥 **作者与机构**

- Yingyu Yan：机构信息未能从会议 PDF 纯文本可靠映射
- Jorina Brysbaert：机构信息未能从会议 PDF 纯文本可靠映射
- Anne Catherine Simon：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

该研究输入为问答诱发的法语宽窄焦点朗读句，输出为前焦、焦点与后焦三区段韵律差异判定，难点在于焦点标记分散于语调强度时长且受句法位置干扰。方法链第一步用全局问句与信息问句及显性纠正问句诱发宽窄焦点并按主语直接宾语间接宾语切分三区段，其输出直接作为声学测量单元。第二步用Parselmouth提取各区段基频最大值与展域强度最大值与相对时长并做说话人归一化与半音转换，输出规范化参数进入统计建模。第三步以线性混合效应模型纳入焦点类型与成分位置协变量及说话人与条目随机效应检验焦点效应，位置效应仅作控制不予解读。与既有描述强调焦点峰值抬高的机制差异在于提出高原维持与后焦协同弱化共同凸显焦点，其实质是将标记重心从瞬时峰值转向时长能量与持续高音的形态差异。在受控朗读语料任务下，焦点区F0最大值指标效应为β = 0,098，低于前焦区F0最大值指标效应β = 0,200。结论适用边界受限于受控朗读的简单主谓宾结构，尚未验证自发对话位置交互及信息与纠正子类型差异。原文未披露训练、推理或部署成本。

🔗 **开源资源**

- 第三方资源：<https://proceedings.mlr.press/v202/radford23a.html> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 90. [哨音只剩一个频率时，元音靠高低区分、辅音藏在元音开头里](/posts/conference-jep-2026-conference-paper-id-marczykbuklaha26-jep-71cb84439f/)

> 英文题目：*[Structure phonologique en parole sifflée : le cas de l’occitan béarnais](/posts/conference-jep-2026-conference-paper-id-marczykbuklaha26-jep-71cb84439f/)*

标签：#统计分析 #语音学与音系 #语音 #语音属性识别

评分：**4.5/10** | 创新 1.0/2 | 技术严谨 1.0/1.5 | 实验充分 0.6/1.5 | 清晰度 0.7/1 | 影响力 0.4/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 0.5/1.5

排名：后50% | 文档类型：应用研究 | 主任务：#语音属性识别 | 主方法：#统计分析

会议来源：[官方记录](https://www.isca-archive.org/jep_2026/marczykbuklaha26_jep.html) · [官方 PDF](https://www.isca-archive.org/jep_2026/marczykbuklaha26_jep.pdf)

👥 **作者与机构**

- Anna Marczyk Buklaha：机构信息未能从会议 PDF 纯文本可靠映射
- Alain Ghio：机构信息未能从会议 PDF 纯文本可靠映射
- Yohann Meynadier：机构信息未能从会议 PDF 纯文本可靠映射
- Olivier Crouzet：机构信息未能从会议 PDF 纯文本可靠映射
- Maxwell Yeoman：机构信息未能从会议 PDF 纯文本可靠映射
- Philippe Biu：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

输入为单名高级口哨者朗读的贝阿恩奥克语孤立词口哨录音，输出为以口哨基频高度区分的缩减元音格局及前接辅音发音部位在元音动态中的协同发音痕迹，难点在于准正弦口哨信号丢失共振峰结构而语言信息被压缩到基频及其时间形态上。处理链先在Praat中结合振幅包络与语图手工切分元音并用自相关法提取基频轨迹，其输出的离散轨迹进入时长归一化与多项式拟合，从而得到描述起始高度、初始斜率、曲率与不对称性的系数向量。该系数向量随后分流为两条统计检验，一条取中点基频对预设相邻元音对做秩和比较以判定中和与保留，另一条按合并后元音组在相关音节序列中检验部位整体效应并以逐系数非参数检验加校正定位效应来源。与既有口哨语描述相比，该工作把协同发音假设操作化为起始高度与初始斜率上的可证伪系统差异，并揭示其具有元音选择性而非全局过渡效应。原文未提供可核对的关键定量结果。该结论的适用边界目前仅限于单名学校培养的高级口哨者朗读孤立词，尚未验证连续口哨对话、多口哨者与知觉可懂度外推。原文未披露训练、推理或部署成本。

🔗 **开源资源**

本次未形成可展示的已核验资源记录，开放状态尚未核实。
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 91. [把成人运动性言语评估改给 2 岁半幼儿用：双音节交替任务能测什么、不能只看语速](/posts/conference-jep-2026-conference-paper-id-piccaluga26-jep-a4b5fcc287/)

> 英文题目：*[Évaluation des performances à une tâche de diadococinésies chez de jeunes enfants francophones au développement langagier typique](/posts/conference-jep-2026-conference-paper-id-piccaluga26-jep-a4b5fcc287/)*

标签：#统计分析 #语言习得 #发声与构音 #语音 #语音属性识别

评分：**4.5/10** | 创新 1.0/2 | 技术严谨 1.2/1.5 | 实验充分 0.5/1.5 | 清晰度 0.5/1 | 影响力 0.5/1.5 | 开源 0.0/1.5 | 可复现 0.1/0.5 | 工程/实践 0.7/1.5

排名：后50% | 文档类型：应用研究 | 主任务：#语音属性识别 | 主方法：#统计分析

会议来源：[官方记录](https://www.isca-archive.org/jep_2026/piccaluga26_jep.html) · [官方 PDF](https://www.isca-archive.org/jep_2026/piccaluga26_jep.pdf)

👥 **作者与机构**

- Myriam Piccaluga：机构信息未能从会议 PDF 纯文本可靠映射
- Véronique Delvaux：机构信息未能从会议 PDF 纯文本可靠映射
- Pauline Deghorain：机构信息未能从会议 PDF 纯文本可靠映射
- Eva Goeseels：机构信息未能从会议 PDF 纯文本可靠映射
- Virginie Roland：机构信息未能从会议 PDF 纯文本可靠映射
- Kathy Huet：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

本文以声学录音为输入，输出比利时法语区典型发育儿童在轮替运动速率与序列运动速率任务中的言语运动控制特征，难点在于低龄儿童注意执行负荷高、构音错误多且个体内与个体间变异大，三至五岁进展主要体现为精度与规则性而非语速提升。方法链第一步是将成人法语MonPaGe七项任务改编为适用于二点六至六岁的Boutchou儿童版并完成约百例采集，为后续分析提供可比语料。第二步用WebMAUS做时间对齐生成Praat兼容TextGrid并经人工核对补全分割，将原始录音转化为可度量的音节边界标注。第三步用自研Praat脚本在生产总量、前四秒与前六个可用音节三个窗口下抽取同一套时间与错误度量，第四步再用广义线性混合模型检验任务类型与辅音丛效应，使多窗口度量进入统一统计检验。在Boutchou语料采集条件下，招募年龄上限的年龄指标为6岁，高于招募年龄下限的年龄指标为2,6岁。相对以往以英语为主且只报语速的研究，该工作以多窗口可比性与错误数量性质分析为关键机制差异，实际意义在于适配法语儿童并支撑后续与健康老化及帕金森病人的比较。该结论适用边界受限于横断初步描述尚不能外推至临床截断与纵向预测，跨年龄逆行比较尚未验证；原文未披露训练、推理或部署成本。

🔗 **开源资源**

本次未形成可展示的已核验资源记录，开放状态尚未核实。
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 92. [词尾 schwa 多出一个音节时，法语升调是换地方还是变形状](/posts/conference-jep-2026-conference-paper-id-portes26-jep-e7580a0555/)

> 英文题目：*[Schwa et ajustement de l’intonation en français](/posts/conference-jep-2026-conference-paper-id-portes26-jep-e7580a0555/)*

标签：#统计分析 #语音学与音系 #韵律 #语音 #语音属性识别

评分：**4.5/10** | 创新 1.0/2 | 技术严谨 0.8/1.5 | 实验充分 0.4/1.5 | 清晰度 0.6/1 | 影响力 0.5/1.5 | 开源 1.0/1.5 | 可复现 0.1/0.5 | 工程/实践 0.1/1.5

排名：后50% | 文档类型：理论研究 | 主任务：#语音属性识别 | 主方法：#统计分析

会议来源：[官方记录](https://www.isca-archive.org/jep_2026/portes26_jep.html) · [官方 PDF](https://www.isca-archive.org/jep_2026/portes26_jep.pdf)

👥 **作者与机构**

- Cristel Portes：机构信息未能从会议 PDF 纯文本可靠映射
- Émilie Marty：机构信息未能从会议 PDF 纯文本可靠映射
- Caterina Petrone：机构信息未能从会议 PDF 纯文本可靠映射
- Martine Grice：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

本文研究法语短语末塞音韵尾音节后增生schwa时的语调与音段调适，输入为末音节含塞音韵尾的重音音节加可选schwa音节，输出为延续调与对比调的基频形态与对齐方式，难点在于同一增生音节在南部与非南部法语中音系地位不同导致同一调形实现分歧。该工作先复用三十名非南部发音人共一千零七十八个轮廓的已标注语料，对比无schwa与有schwa时延续与对比轮廓的走向与峰对齐，将定性曲线差异作为后续解释对象。接着启动二十名南部发音人已采加二十名非南部发音人待采的产出实验，在延续与对比语境下对照两类变体，使新增南部证据进入与既有非南部证据的比较。然后以边界调关联方式的差异统一解释观察到的分歧，提出非南部schwa音节为节律外成分而南部为完整音节，从而推导出不同的H实现路径。与既有描写相比，关键机制差异在于主张非南部延续调虽出现基频下降仍保持LH星H百分号编码，由边界调H对重音音节的次级关联维持对齐，而南部则允许H直接关联schwa音节，其实际意义在于用关联差异而非改写调形解释变体分歧。原文未提供可核对的关键定量结果。该结论适用边界目前仅限于塞音韵尾触发的短语末schwa增生与延续调及对比调两类调形，感知层面能否区分次级关联与直接关联尚未验证，原文未披露训练、推理或部署成本。

🔗 **开源资源**

本次未形成可展示的已核验资源记录，开放状态尚未核实。
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 93. [总时长没有区别时区别藏在哪里：donc 话语标记用法的分段与边界策略](/posts/conference-jep-2026-conference-paper-id-arida26-jep-804f80d5aa/)

> 英文题目：*[Réduction phonétique et marquage prosodique de donc : effets de l’usage discursif et du bégaiement](/posts/conference-jep-2026-conference-paper-id-arida26-jep-804f80d5aa/)*

标签：#统计分析 #语音学与音系 #韵律 #语音 #病理语音评估

评分：**4.4/10** | 创新 1.2/2 | 技术严谨 1.0/1.5 | 实验充分 0.6/1.5 | 清晰度 0.7/1 | 影响力 0.4/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 0.2/1.5

排名：后50% | 文档类型：应用研究 | 主任务：#病理语音评估 | 主方法：#统计分析

会议来源：[官方记录](https://www.isca-archive.org/jep_2026/arida26_jep.html) · [官方 PDF](https://www.isca-archive.org/jep_2026/arida26_jep.pdf)

👥 **作者与机构**

- Laudy Arida：机构信息未能从会议 PDF 纯文本可靠映射
- Ivana Didirková：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

本研究处理法语自发话语中 donc 功能判别的难题，输入为连续语音与话语上下文，输出为话语标记与典型用法的语音韵律实现差异，并需排除口吃流畅性差异的混淆，难点在于总时长相近时内部结构差异细微。方法先由双标注者对标记功能与流畅性定性分类并协商共识，其分组结果直接界定后续比较的样本划分。再对词总时长、内部塞音与鼻化元音及韵尾占比以及相邻静音暂停与前后音高跳变做声学测量，将分类输出转化为可建模的节段与韵律证据。最后以混合线性模型检验群体与功能交互并控制时长与语速，聚焦内部韵律重分布而非整体压缩。这与既有缩减研究多关注总时长形成差异，其实际意义在于揭示以内部结构与韵律框定承载话语功能区分的机制。原文未提供可核对的关键定量结果。该结论适用边界受限于单标记与法语自发语料，尚未验证向其他标记或功能细分的推广。原文未披露训练、推理或部署成本。

🔗 **开源资源**

- 第三方资源：<https://www.r-project.org/> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 94. [只用三个元音能判断年龄吗：科西嘉塔拉瓦方言的尝试与落空](/posts/conference-jep-2026-conference-paper-id-collardburesi26-jep-cfb423f527/)

> 英文题目：*[Variation Vocalique relative à l’âge et classification automatique en Corse Taravai](/posts/conference-jep-2026-conference-paper-id-collardburesi26-jep-cfb423f527/)*

标签：#集成学习 #社会语音学 #低资源 #语音 #语音属性识别

评分：**4.4/10** | 创新 1.0/2 | 技术严谨 1.0/1.5 | 实验充分 0.5/1.5 | 清晰度 0.6/1 | 影响力 0.4/1.5 | 开源 0.0/1.5 | 可复现 0.1/0.5 | 工程/实践 0.8/1.5

排名：后50% | 文档类型：应用研究 | 主任务：#语音属性识别 | 主方法：#集成学习

会议来源：[官方记录](https://www.isca-archive.org/jep_2026/collardburesi26_jep.html) · [官方 PDF](https://www.isca-archive.org/jep_2026/collardburesi26_jep.pdf)

👥 **作者与机构**

- Lesia Collard\-Buresi：机构信息未能从会议 PDF 纯文本可靠映射
- Hiyon Yoo：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

本文任务是从塔拉瓦科西嘉语自发对话音频与转写推断说话人年龄组，输入为连续自发语音与元音标注信息，输出为青年组与老年组的二分类标签，难点在于说话人数量极少的低资源变体条件下个体变异主导年龄效应。方法链首先用WebMaus做词与音素强制对齐并用TextGridTools精修边界以获得可靠元音切分，其输出的边界信息进入声学表征阶段。该阶段在元音内多个时点提取共振峰并做说话人间归一化以捕捉动态轨迹，随后用Parselmouth补充提取时长、共振峰与梅尔频率倒谱系数形成分类特征。最后用随机森林结合合成少数类过采样与留一说话人验证完成监督分类，前步特征矩阵直接作为该分类器的输入并避免说话人泄漏。相对仅看中点共振峰的静态比较，该链条强调轨迹形态与小样本防泄漏验证，对低资源语言具有迁移参考意义。原文未提供可核对的关键定量结果。该结论适用边界仅限于当前小规模子集与现有特征集，不能外推至更大科西嘉人群、其他元音系统或朗读语体，原文未披露训练、推理或部署成本。

🔗 **开源资源**

本次未形成可展示的已核验资源记录，开放状态尚未核实。
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 95. [在节日广场上听懂口哨话：缺失数据随时间爬升时还能怎么谈识别率](/posts/conference-jep-2026-conference-paper-id-crouzet26-jep-34f040d80a/)

> 英文题目：*[Perception de parole sifflée par des auditeurs naïfs hors du laboratoire : Une exploration de l’impact du contexte expérimental\.](/posts/conference-jep-2026-conference-paper-id-crouzet26-jep-34f040d80a/)*

标签：#心理声学实验 #统计分析 #言语感知 #语音 #音频分类

评分：**4.4/10** | 创新 1.0/2 | 技术严谨 0.8/1.5 | 实验充分 0.7/1.5 | 清晰度 0.7/1 | 影响力 0.4/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 0.5/1.5

排名：后50% | 文档类型：应用研究 | 主任务：#音频分类 | 主方法：#心理声学实验

会议来源：[官方记录](https://www.isca-archive.org/jep_2026/crouzet26_jep.html) · [官方 PDF](https://www.isca-archive.org/jep_2026/crouzet26_jep.pdf)

👥 **作者与机构**

- Olivier Crouzet：机构信息未能从会议 PDF 纯文本可靠映射
- Anna Marczyk Buklaha：机构信息未能从会议 PDF 纯文本可靠映射
- Alain Ghio：机构信息未能从会议 PDF 纯文本可靠映射
- Yohann Meynadier：机构信息未能从会议 PDF 纯文本可靠映射
- Maxwell Yeoman：机构信息未能从会议 PDF 纯文本可靠映射
- Philippe Biu：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

本文以户外庙会采集的贝阿恩奥克语哨语刺激为输入，以 naive 听者在多选任务中的作答与缺失为输出，实际难点在于开放噪声、集体扬声器播放与人群流动同时损害可听性与任务投入。采集步骤通过手机问卷并行作答与大屏呈现选项并由主试统一播放且允许按要求重复，提交后不可修改，无反应记为缺失，形成逐试次原始行为序列。统计步骤按试次顺序计算每题缺失占比与正确占比的变化轨迹，并拟合最小二乘回归斜率刻画时间趋势，其输出的斜率估计直接进入下一步检验。推断步骤对词汇相关后段试次做重抽样检验，以显著性阈值与百分位置信区间是否包含零双标准判定斜率是否异于零，其结论直接决定缺失上升与正确率下降是否成立。相对既往实验室哨语元音辅音分类研究，关键机制差异在于把采集情境本身作为比较对象，对比户外公众组与课堂学生组的行为轨迹而非仅报告平均正确率，其实质意义在于分离生态效度与数据质量损耗。原文未提供可核对的关键定量结果。该结论适用边界受限于该次短任务与特定人群的探索性比较，无法分离声学环境、动机与人口学混淆，尚未验证向一般实验室与田野差异的外推。原文未披露训练、推理或部署成本。

🔗 **开源资源**

本次未形成可展示的已核验资源记录，开放状态尚未核实。
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 96. [把可懂度放进对话时间里：舌切除患者与临床医生轮流说话时的动态测量](/posts/conference-jep-2026-conference-paper-id-fabriol26-jep-08f270b8dd/)

> 英文题目：*[Étude de l’évolution de l’intelligibilité dans une discussion : application au cas clinique de la glossectomie](/posts/conference-jep-2026-conference-paper-id-fabriol26-jep-08f270b8dd/)*

标签：#统计分析 #言语障碍 #语音 #说话人分离标注 #语音可懂度评估

评分：**4.4/10** | 创新 1.0/2 | 技术严谨 0.7/1.5 | 实验充分 0.6/1.5 | 清晰度 0.7/1 | 影响力 0.5/1.5 | 开源 0.0/1.5 | 可复现 0.1/0.5 | 工程/实践 0.8/1.5

排名：后50% | 文档类型：应用研究 | 主任务：#语音可懂度评估 | 主方法：#统计分析

会议来源：[官方记录](https://www.isca-archive.org/jep_2026/fabriol26_jep.html) · [官方 PDF](https://www.isca-archive.org/jep_2026/fabriol26_jep.pdf)

👥 **作者与机构**

- Alix Fabriol：机构信息未能从会议 PDF 纯文本可靠映射
- Mathieu Balaguer：机构信息未能从会议 PDF 纯文本可靠映射
- Julien Pinquier：机构信息未能从会议 PDF 纯文本可靠映射
- Jérôme Farinas：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

本文输入为头戴麦采集的患者—临床医生半结构化访谈录音，输出为按话轮展开的双方可懂度时序变化及医生对患者影响的个案检验，难点在于医生语音微弱且对话轮次长短不一而既有模型仅给出整段单一分数。流水线先用语音活动检测筛选低能量候选并结合语音分割与说话人向量聚类区分说话人，其输出的说话人片段按同人相邻合并为话轮。接着对长短不一的话轮做滑窗切分与历史拼接以适配固定时长输入，再送入朗读语料训练的深度可懂度模型逐单元打分并做平滑，所得序列直接进入广义最小二乘回归检验医生既往话轮对患者后续话轮的影响。与整体单值评估相比，关键差异在于将静态打分扩展为对话级时序追踪，使会话同步假设可逐例检验，具有生态对话评估意义。原文未提供可核对的关键定量结果。该结论适用边界受限于小样本探索与录音条件且尚未验证因果外推，失败条件包括医生语音过弱而无法纳入分析的情形。原文未披露训练、推理或部署成本。

🔗 **开源资源**

- 第三方资源：<https://github.com/wiseman/py-webrtcvad> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 97. [转换来的嗄声能当真病人用吗：Seed\-VC 扩增的临床可信度检验](/posts/conference-jep-2026-conference-paper-id-forges26-jep-6e6a7c6581/)

> 英文题目：*[Conversion de voix dysphoniques pour l’augmentation de données : évaluation de la plausibilité clinique](/posts/conference-jep-2026-conference-paper-id-forges26-jep-6e6a7c6581/)*

标签：#数据增强 #主观评测 #言语障碍 #语音 #语音转换

评分：**4.4/10** | 创新 1.0/2 | 技术严谨 0.8/1.5 | 实验充分 0.7/1.5 | 清晰度 0.7/1 | 影响力 0.5/1.5 | 开源 0.0/1.5 | 可复现 0.1/0.5 | 工程/实践 0.6/1.5

排名：后50% | 文档类型：应用研究 | 主任务：#语音转换 | 主方法：#主观评测

会议来源：[官方记录](https://www.isca-archive.org/jep_2026/forges26_jep.html) · [官方 PDF](https://www.isca-archive.org/jep_2026/forges26_jep.pdf)

👥 **作者与机构**

- Clémence Forges：机构信息未能从会议 PDF 纯文本可靠映射
- Nicolas Audibert：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

在喉科学中，以持续元音/a:/声学信号为输入、以癌与良性黏膜病变等类别为输出的自动分类，常因病理样本稀缺而依赖数据增强，难点在于增强样本须保留可诊断的嗓音障碍特质而不引入人工伪影。本研究先按性别将对照组拆分为内容源与音色目标，再用预训练Seed\-VC以对照源波形为骨架、以病理或健康目标波形为音色目标合成人工病理与人工健康元音，接着由4名嗓音医师加4名言语治疗师对116个刺激做GRBAS与4级人工度判断，最后在Praat多段声学参数上检验源目标差异与可信度评分的相关性。相对直接扰动声学参数的AugLy增强，Seed\-VC通过解耦内容与音色再重建波形来保留语言内容并迁移病理音色，因而更可能生成临床可用的病理变体。与已有基线相比，作者仅定性提及随机森林预试验中转换增强更优，感知评测则显示评定者内高度稳定而评定者间分歧极大。在116个刺激专家评测设置下，GRBAS评定的评定者内信度指标α为0,91，高于可信度评定的评定者内信度指标α的0,90。该结论适用边界受限于法语单中心持续元音、20例病理加12例对照的小样本预试验，尚未验证连续语、跨设备与重度亚型的外推性，原文未披露训练、推理或部署成本。

🔗 **开源资源**

本次未形成可展示的已核验资源记录，开放状态尚未核实。
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 98. [声调是否藏在第一共振峰里：普通话与西安话双元音上的时间耦合检验](/posts/conference-jep-2026-conference-paper-id-li26b-jep-368d57224d/)

> 英文题目：*[Information tonale dans F1 dans deux variétés de mandarin](/posts/conference-jep-2026-conference-paper-id-li26b-jep-368d57224d/)*

标签：#统计分析 #语音学与音系 #韵律 #语音 #音频分类

评分：**4.4/10** | 创新 1.2/2 | 技术严谨 1.1/1.5 | 实验充分 0.6/1.5 | 清晰度 0.6/1 | 影响力 0.5/1.5 | 开源 0.0/1.5 | 可复现 0.1/0.5 | 工程/实践 0.3/1.5

排名：后50% | 文档类型：应用研究 | 主任务：#音频分类 | 主方法：#统计分析

会议来源：[官方记录](https://www.isca-archive.org/jep_2026/li26b_jep.html) · [官方 PDF](https://www.isca-archive.org/jep_2026/li26b_jep.pdf)

👥 **作者与机构**

- Chenyu Li：机构信息未能从会议 PDF 纯文本可靠映射
- Jalal Al\-Tamimi：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

本文输入为标准普通话与西安话双元音在不同声调条件下的基频与第一共振峰声学轨迹，输出为声调手势与元音手势是否在音节层级存在结构化时间耦合的判断，难点在于喉部声调调控与声道元音构形在声学上相互交织且个体差异大。方法先用含说话人特定平滑的广义加性混合模型拟合目标声调与高参照声调的预测曲线并做同模型下点对点差分，以剥离元音基线并分离出声调贡献。其输出的差分轨迹进入速度求导与过零点检测，以提取基频与第一共振峰局部极值并保留时间位置信息。接着用贝叶斯混合效应模型检验极值时间对齐及方言与双元音效应，其揭示的同步模式再由全局形态检验补充，即对各声调第一共振峰轨迹做函数主成分分析降维为主成分得分并输入随机森林仅用第一共振峰预测声调类别。与既有侧重声调引起元音空间位置偏移的研究不同，本文直接检验速度转折同步与全局轨迹可解码性，其实质是将耦合证据从静态位置差异转向动态时间结构与信息残留。原文未提供可核对的关键定量结果。该结论适用边界受限于受控双元音与有限说话人样本，能否推广到单元音、连续语流及其他方言尚未验证。原文未披露训练、推理或部署成本。

🔗 **开源资源**

本次未形成可展示的已核验资源记录，开放状态尚未核实。
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 99. [阿尔茨海默病是元音更集中还是更夸张：半控制地图任务下的 F1 与 F3 证据](/posts/conference-jep-2026-conference-paper-id-ferrera26-jep-57aed26d80/)

> 英文题目：*[Altérations formantiques chez des sujets atteints de la maladie d’Alzheimer : évidences d’une tâche de parole semi\-contrôlée](/posts/conference-jep-2026-conference-paper-id-ferrera26-jep-57aed26d80/)*

标签：#语音生物标志物 #统计分析 #语音学与音系 #语音 #病理语音评估

评分：**4.2/10** | 创新 1.1/2 | 技术严谨 1.0/1.5 | 实验充分 0.5/1.5 | 清晰度 0.7/1 | 影响力 0.5/1.5 | 开源 0.0/1.5 | 可复现 0.1/0.5 | 工程/实践 0.3/1.5

排名：后50% | 文档类型：应用研究 | 主任务：#病理语音评估 | 主方法：#统计分析

会议来源：[官方记录](https://www.isca-archive.org/jep_2026/ferrera26_jep.html) · [官方 PDF](https://www.isca-archive.org/jep_2026/ferrera26_jep.pdf)

👥 **作者与机构**

- Alessandra Ferrera：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

本研究输入为艾米利亚\-罗马涅地区意大利母语老年女性在地图引导协作对话中的录音，输出为痴呆组与健康对照组元音共振峰差异是集中还是扩张的方向判定，难点在于病理运动损伤、话语规划策略、协同发音与地域变体相互混杂难以分离。方法链分三步：先按疑似阿尔茨海默诊断与临床痴呆评定和认知评估筛选轻中度患者五人与健康对照五人并匹配年龄教育，输出分组被试进入下一步。接着让被试恒任向导完成预设双音节词覆盖全元音系统的半控制交互并在安静环境录音，再在Praat中做音段词句多层人工标注，输出带语境标记的目标元音切段。然后在元音时域中点提取第一至第三共振峰并人工核查，按重读与非重读分层后计算共振峰集中率并用Wilcoxon\-Mann\-Whitney检验组间分布，输出统计判定。相对南部意大利自发描述任务报告集中化的已有方法，关键机制差异在于混合范式以固定词表控制音系语境同时保留话语规划自由，实际意义是暴露了患者碎片化短句与对照组长句整合的策略分化对声学空间的影响。在map task任务下，DEM组的FCR指标为0\.8790428，低于HE组的FCR指标0\.9125556。该扩张趋势的适用边界受限于北部意大利老年女性小样本与地图任务语境而尚未验证向男性重症他方言或自发话语的外推，原文未披露训练、推理或部署成本。

🔗 **开源资源**

本次未形成可展示的已核验资源记录，开放状态尚未核实。
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 100. [转录文本里的停顿与问答为何比语义向量更能分开自闭症与发育迟缓](/posts/conference-jep-2026-conference-paper-id-ghennani26-jep-ed6122332b/)

> 英文题目：*[Contributions de caractéristiques issues de la transcription de parole pour la détection de l’autisme chez l’enfant](/posts/conference-jep-2026-conference-paper-id-ghennani26-jep-ed6122332b/)*

标签：#语音生物标志物 #集成学习 #可解释性 #语音 #病理语音评估

评分：**4.2/10** | 创新 1.0/2 | 技术严谨 1.0/1.5 | 实验充分 0.5/1.5 | 清晰度 0.7/1 | 影响力 0.4/1.5 | 开源 0.0/1.5 | 可复现 0.1/0.5 | 工程/实践 0.5/1.5

排名：后50% | 文档类型：应用研究 | 主任务：#病理语音评估 | 主方法：#集成学习

会议来源：[官方记录](https://www.isca-archive.org/jep_2026/ghennani26_jep.html) · [官方 PDF](https://www.isca-archive.org/jep_2026/ghennani26_jep.pdf)

👥 **作者与机构**

- Nihel Loubna Ghennani：机构信息未能从会议 PDF 纯文本可靠映射
- Julie Mauclair：机构信息未能从会议 PDF 纯文本可靠映射
- Mourtada Benazzouz：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

本文以儿童自由游戏会话的CHAT转录为输入，输出自闭症谱系障碍、典型发育与发育迟缓三类标签，难点在于自闭症与发育迟缓表层语言高度相似且可标注儿童数据稀缺易混淆。方法先清洗CHAT转录并将成人提问与邻近儿童有效回答配成问答对，为后续特征提供对齐上下文。接着并行抽取结构语言指标、基于转录符号的韵律交互事件、年龄与认知得分及语义嵌入，并在会话层聚合成定长异构向量。最后用200棵树、最大深度20的随机森林做三分类并基于基尼杂质做重要性分析，其输出直接用于评估与解释。与仅用平均话语长度等五十余个语言变量的先前工作不同，本文将现代嵌入与停顿密度、重复、修正等可解释临床标记显式拼接，兼顾内容语义与行为节律。在Eigsti语料五折交叉验证设置下，全特征组合的准确率（TCC）为0\.995，高于仅嵌入基线的准确率（TCC）0\.459。该结论适用边界受限于48名3至6岁英语实验室人工转录条件，尚未验证自动语音识别噪声与跨站点跨语种外推，发育迟缓最易与自闭症混淆。原文未披露训练、推理或部署成本。

🔗 **开源资源**

本次未形成可展示的已核验资源记录，开放状态尚未核实。
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 101. [二语模仿是绕过音系的语音模仿吗：一次打断语音模式的直接检验](/posts/conference-jep-2026-conference-paper-id-weller26-jep-1584a7383a/)

> 英文题目：*[L’imitation en langue seconde à lumière du modèle de la perception sélective automatique](/posts/conference-jep-2026-conference-paper-id-weller26-jep-1584a7383a/)*

标签：#心理声学实验 #语言习得 #语音学与音系 #语音 #音频分类

评分：**4.2/10** | 创新 1.0/2 | 技术严谨 0.8/1.5 | 实验充分 0.6/1.5 | 清晰度 0.8/1 | 影响力 0.5/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 0.2/1.5

排名：后50% | 文档类型：应用研究 | 主任务：#音频分类 | 主方法：#心理声学实验

会议来源：[官方记录](https://www.isca-archive.org/jep_2026/weller26_jep.html) · [官方 PDF](https://www.isca-archive.org/jep_2026/weller26_jep.pdf)

👥 **作者与机构**

- Sophie Weller：机构信息未能从会议 PDF 纯文本可靠映射
- Giuseppina Turco：机构信息未能从会议 PDF 纯文本可靠映射
- Hiyon Yoo：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

本研究处理法语母语者模仿英语松紧元音时从听觉输入到复述输出的映射问题，难点在于二语高保真模仿究竟源于语音模式下绕过母语选择性感知常规的精细处理，还是源于尚未稳定的音系表征混淆。方法链先让被试听单音节非词并延迟后复述以获得基线输出，再施加组间干预以切换处理模式，最后复述同一非词并计算先后复述间第一共振峰、第二共振峰与时长的差异作为比较依据。组间干预负责模式操纵，分类组须将刚复述的声音映射到绵羊与鱼图片代表的音系类别以强制调用音系常规，控制组仅做回避目标元音与拼写的图片偏好选择以维持语音处理而不引入词汇判断。与事后归因式讨论相比，该设计把范畴化作为模式开关直接检验因果，预测分类组先后复述差异更大，具有可证伪的实际意义。原文未提供可核对的关键定量结果。讨论指出控制组第二共振峰随元音变化而分类组对目标松元音变异更小，可能反映注意朝向与音系表征影响而非语音模式证据。该结论适用边界受限于自评水平法语英语学习者对特定高前元音的实验室非词复述，尚未验证向真实词汇学习或教学纠音的外推。原文未披露训练、推理或部署成本。

🔗 **开源资源**

- 第三方资源：<https://www.audacityteam.org/> — 链接可访问（HTTP 200）
- 第三方资源：<https://cran.r-project.org/package=nlme> → <https://cran.r-project.org/web/packages/nlme/index.html> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 102. [静默停顿不是停下：上气道癌变语音如何在边界处多停、停长并重组节律](/posts/conference-jep-2026-conference-paper-id-colau26-jep-78e8f8ceac/)

> 英文题目：*[Fréquence, fonctionnalisation et durée des pauses silencieuses : étude comparée entre locuteurs sains et locuteurs atteints d'un cancer des voies aéro\-digestives](/posts/conference-jep-2026-conference-paper-id-colau26-jep-78e8f8ceac/)*

标签：#统计分析 #韵律 #语音 #病理语音评估

评分：**4.1/10** | 创新 1.0/2 | 技术严谨 1.0/1.5 | 实验充分 0.5/1.5 | 清晰度 0.7/1 | 影响力 0.5/1.5 | 开源 0.0/1.5 | 可复现 0.1/0.5 | 工程/实践 0.3/1.5

排名：后50% | 文档类型：应用研究 | 主任务：#病理语音评估 | 主方法：#统计分析

会议来源：[官方记录](https://www.isca-archive.org/jep_2026/colau26_jep.html) · [官方 PDF](https://www.isca-archive.org/jep_2026/colau26_jep.pdf)

👥 **作者与机构**

- Aline Colau：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

任务以法语朗读语音为输入，输出静默暂停的频率、功能归因与时长规律，难点在于上气道消化道癌患者的暂停同时受呼吸代偿、构音受限与韵律重组驱动，难以区分病理失流利与适应性策略。首先对录音做转写与Praat强制对齐以建立文本与时间参照，其输出的时间轴直接送入无最小阈值人工检出环节以保留全部短暂停。检出的暂停清单进入话语功能与生理功能多标签标注并单列混合类，标注结果再送入考虑说话人内与说话人间变异的统计检验与线性混合模型做组间比较。与既往固定阈值计数式研究的关键机制差异在于保留短暂停并允许话语与生理功能共存，将呼吸换气与句法边界视为协同而非互斥，其实质是将暂停作为韵律调节工具而非单纯失流利标记。在C2SI朗读语料任务下定性可见患者暂停更多更长且个体变异大，混合暂停为两组最频类别并系统性长于纯话语暂停，该对比在患者组被放大。原文未提供可核对的关键定量结果。结论适用边界受限于受控朗读文本，尚未验证自发对话、纵向康复与其他分期的外推性。原文未披露训练、推理或部署成本。

🔗 **开源资源**

本次未形成可展示的已核验资源记录，开放状态尚未核实。
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 103. [显式稳重音、隐式动语调：两种课堂训练对法语二语韵律感知的分化影响](/posts/conference-jep-2026-conference-paper-id-bellomoskvasik26-jep-787ca8e3a1/)

> 英文题目：*[Les entraînements Meaning\-Based et Form\-Based ont\-ils des effets similaires sur la perception de la prosodie en français L2 ?](/posts/conference-jep-2026-conference-paper-id-bellomoskvasik26-jep-787ca8e3a1/)*

标签：#心理声学实验 #语言习得 #韵律 #言语感知 #语音属性识别

评分：**4.0/10** | 创新 0.8/2 | 技术严谨 0.8/1.5 | 实验充分 0.5/1.5 | 清晰度 0.6/1 | 影响力 0.5/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 0.5/1.5

排名：后50% | 文档类型：应用研究 | 主任务：#语音属性识别 | 主方法：#心理声学实验

会议来源：[官方记录](https://www.isca-archive.org/jep_2026/bellomoskvasik26_jep.html) · [官方 PDF](https://www.isca-archive.org/jep_2026/bellomoskvasik26_jep.pdf)

👥 **作者与机构**

- Samantha Bellomo\-Skvasik：机构信息未能从会议 PDF 纯文本可靠映射
- Fabian Santiago：机构信息未能从会议 PDF 纯文本可靠映射
- Rebekah Rast：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

本研究以英语母语初学者感知法语韵律为任务，输入为词重音时长变体与问句句末基频变体，输出为三选一迫选判断，难点在于法语短语末重音与英语词首重音冲突及是非问迟升与开放问低降的实现差异。方法链第一步由同一教师对两组实施2周共7\.5小时生态课堂干预，显性FB组接受韵律讲解与元语言纠错，隐性MB组只接受重述澄清，所形成的分组进入感知评估。第二步用Praat合成时长与基频受控的三版本词和问句刺激，其输出直接作为Gorilla在线前后测两区块判断材料的输入。第三步以逻辑混合模型对前后测正确率建模训练类型与时刻交互，并经emmeans做FDR多重比较校正。关键机制差异在于FB直接标注韵律形式以稳定词重音敏感性，MB依赖交际输入促使对问句语调的内隐注意，因而前者维持重音判断而后者改善语调选择，具有教学分工意义。在问句感知任务下，FB组开放性问句后测的识别准确率为40\.0%，高于MB组后测的识别准确率37\.1%。结论的适用边界是训练与时刻主效应均不显著且效应仅为非显著趋势，受限于初学者短期干预而尚未验证产出与长期习得外推。原文未披露训练、推理或部署成本。

🔗 **开源资源**

- 第三方资源：<https://www.praat.org/> → <https://praat.org/> — 链接可访问（HTTP 200）
- 第三方资源：<https://doi.org/10.21437/speechprosody.2010-9> → <https://www.isca-archive.org/speechprosody_2010/alazard10_speechprosody.html> — 链接可访问（HTTP 200）
- 第三方资源：<https://dspace.mit.edu/handle/1721.1/16065> → <https://dspace.mit.edu/entities/publication/362ae881-71c3-4189-bbf5-671b5c51b09d> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 104. [在手术室里听出细微口吃：用 GRU 把脑刺激引起的言语障碍自动分成正常与异常](/posts/conference-jep-2026-conference-paper-id-berger26-jep-2b8cc7acdb/)

> 英文题目：*[Approche méthodologique de la classification clinique automatique des troubles de la paroles en contexte de chirurgie éveillée des tumeurs cérébrales](/posts/conference-jep-2026-conference-paper-id-berger26-jep-2b8cc7acdb/)*

标签：#医疗音频 #RNN #言语障碍 #语音 #病理语音评估

评分：**4.0/10** | 创新 0.8/2 | 技术严谨 1.0/1.5 | 实验充分 0.5/1.5 | 清晰度 0.7/1 | 影响力 0.4/1.5 | 开源 0.0/1.5 | 可复现 0.1/0.5 | 工程/实践 0.5/1.5

排名：后50% | 文档类型：应用研究 | 主任务：#病理语音评估 | 主方法：#RNN

会议来源：[官方记录](https://www.isca-archive.org/jep_2026/berger26_jep.html) · [官方 PDF](https://www.isca-archive.org/jep_2026/berger26_jep.pdf)

👥 **作者与机构**

- Loreleï Berger：机构信息未能从会议 PDF 纯文本可靠映射
- Fabrice Hirsch：机构信息未能从会议 PDF 纯文本可靠映射
- Hugues Duffau：机构信息未能从会议 PDF 纯文本可靠映射
- Guillaume Herbet：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

清醒脑肿瘤切除术需在电刺激期间实时监测言语功能，输入为手术室定向麦克风采集的患者发声，输出为无障碍与异常的二分类标签，难点在于刺激诱发的口吃、构音障碍等异常短暂细微、人耳分辨率有限，且噪声强、异常样本稀少、任务类型多样。方法链分三步：先以静音段噪声轮廓相减降噪并人工粗切分出计数与DO80测试段，为后续标注提供可用音频；再以基于Transformer的Whisper生成词级时间戳转录并筛选患者回应，经人工核验构成无障碍与异常的训练库；最后将波形转为40维MFCC序列输入GRU做序列判别，并对异常类做白噪声、0\.9倍慢放、升高2个半音的3种变体扩充后训练。相对通用语音分类的关键差异是围绕计数与图片命名DO80两种术中任务分别建模评估，计数同步手部运动而DO80每图限时4秒，因而更贴合术中定位需求。在计数任务验证集下，计数模型训练阶段的准确率为0,9715，高于验证阶段的准确率0,9613。该结论受限于单中心约30小时录音的二分类小样本条件，尚未验证多类障碍细分、跨患者泛化与刺激定位因果关系。原文未披露训练、推理或部署成本。

🔗 **开源资源**

本次未形成可展示的已核验资源记录，开放状态尚未核实。
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 105. [反讽没有单一声音：自闭症成人与神经典型成人的产出为何都偏离原型](/posts/conference-jep-2026-conference-paper-id-deffuant26-jep-986fb0dc09/)

> 英文题目：*[Caractéristiques prosodiques de l’ironie chez les adultes avec troubles du spectre de l’autisme](/posts/conference-jep-2026-conference-paper-id-deffuant26-jep-986fb0dc09/)*

标签：#统计分析 #韵律 #言语障碍 #语音 #语音属性识别

评分：**4.0/10** | 创新 1.2/2 | 技术严谨 0.7/1.5 | 实验充分 0.4/1.5 | 清晰度 0.8/1 | 影响力 0.4/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 0.2/1.5

排名：后50% | 文档类型：应用研究 | 主任务：#语音属性识别 | 主方法：#统计分析

会议来源：[官方记录](https://www.isca-archive.org/jep_2026/deffuant26_jep.html) · [官方 PDF](https://www.isca-archive.org/jep_2026/deffuant26_jep.pdf)

👥 **作者与机构**

- Léa Deffuant：机构信息未能从会议 PDF 纯文本可靠映射
- Elisabeth Delais\-Roussarie：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

本研究处理法语反语韵律产出问题，输入为可作字面或反语解读的18个目标句及其最小差异语境，输出为说话人在两种条件下韵律实现的差异，难点在于反语无单一典型韵律且易与自闭症谱系障碍基线韵律特征混淆。方法链分三步推进：首先以伪随机顺序呈现语境诱发朗读产出并同步录音，其输出的180个录音进入理解问答校验以确认诱发成功，接着经由Praat半自动对齐提取语速与基频及强度参数并按性别分组比较中位数。该设计与既往演员朗读或筛选高识别度样本的做法不同，刻意保留非典型实现以观察自然变异，具有生态探索意义。在字面与反语对比条件任务下，女性神经典型组反语的平均基频指标为211 Hz，高于字面条件的平均基频指标200 Hz。总体各组反语语速仅小幅下降且方向不一致，未呈现一致显著标记，个体变异大于组间差异。结论适用边界仅限法语成人小样本朗读任务，尚未验证自发对话或其他语言与年龄段的外推，失败条件包括小样本与朗读诱发方式受限。原文未披露训练、推理或部署成本。

🔗 **开源资源**

本次未形成可展示的已核验资源记录，开放状态尚未核实。
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 106. [自发性病理语音转写为何随严重程度分化：以 CER 为轴的多层次误差解读](/posts/conference-jep-2026-conference-paper-id-thibault26-jep-7b315ce227/)

> 英文题目：*[Efficacité des systèmes de transcription automatique en parole spontanée après cancer lèvres\-bouche\-pharynx](/posts/conference-jep-2026-conference-paper-id-thibault26-jep-7b315ce227/)*

标签：#评测协议 #言语障碍 #语音 #语音识别

评分：**4.0/10** | 创新 0.8/2 | 技术严谨 0.8/1.5 | 实验充分 0.6/1.5 | 清晰度 0.7/1 | 影响力 0.5/1.5 | 开源 0.0/1.5 | 可复现 0.1/0.5 | 工程/实践 0.5/1.5

排名：后50% | 文档类型：应用研究 | 主任务：#语音识别 | 主方法：#评测协议

会议来源：[官方记录](https://www.isca-archive.org/jep_2026/thibault26_jep.html) · [官方 PDF](https://www.isca-archive.org/jep_2026/thibault26_jep.pdf)

👥 **作者与机构**

- Flavie Thibault：机构信息未能从会议 PDF 纯文本可靠映射
- Julien Pinquier：机构信息未能从会议 PDF 纯文本可靠映射
- Mathieu Balaguer：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

本文以唇口咽癌术后患者自发访谈录音为输入，输出可用于临床沟通评估的自动转写并检验转写误差与言语障碍严重度的关联，难点在于病理自发语音发音变异大且缺乏可靠的评测基准。方法分三步：先为27名患者的访谈构建人工感知参考转写并由六名专家给出严重度评分作为基准，再用选定的Whisper large模型生成自动假设转写，最后用量化指标对比假设与参考的偏离并做等级相关与分组比较，其中前一步的参考与假设直接构成下一步误差计算的输入。与仅用WER的传统评估不同，本文并行引入字符级CER、词元级LER与形态句法级dPOSER、uPOSER，以区分表层发音失真与高层语言结构保留，具有更细的临床解释意义。在SpeeCOmco语料下，重度组1的CER为72,35%，高于轻症组2的CER 32,14%。此外CER与严重度呈强负相关，障碍越重系统误差越高，印证了转写失效随障碍加重而单调恶化。结论的适用边界仅限法语唇口咽癌后成人访谈场景，重度患者转写基本不可用需转向语义可理解性策略，跨语种与跨病种外推尚未验证。原文未披露训练、推理或部署成本。

🔗 **开源资源**

- 第三方资源：<https://github.com/jitsi/jiwer> — 链接可访问（HTTP 200）
- 第三方资源：<https://speechbrain.readthedocs.io/en/v1.0.3/tutorials/tasks/asr-metrics.html> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 107. [不识别情绪类别，只跟踪状态漂移：用效价唤醒优势曲线看接警员是否还在状态](/posts/conference-jep-2026-conference-paper-id-bompay26-jep-337519a3f5/)

> 英文题目：*[Détection de la perte d'engagement ou de flexibilité mentale dans les centre de traitement des alertes](/posts/conference-jep-2026-conference-paper-id-bompay26-jep-337519a3f5/)*

标签：#语音生物标志物 #迁移学习 #语音 #语音情感识别

评分：**3.9/10** | 创新 1.0/2 | 技术严谨 0.8/1.5 | 实验充分 0.3/1.5 | 清晰度 0.7/1 | 影响力 0.5/1.5 | 开源 0.0/1.5 | 可复现 0.1/0.5 | 工程/实践 0.5/1.5

排名：后50% | 文档类型：应用研究 | 主任务：#语音情感识别 | 主方法：#迁移学习

会议来源：[官方记录](https://www.isca-archive.org/jep_2026/bompay26_jep.html) · [官方 PDF](https://www.isca-archive.org/jep_2026/bompay26_jep.pdf)

👥 **作者与机构**

- Lauriane Bompay：机构信息未能从会议 PDF 纯文本可靠映射
- Julien Pinquier：机构信息未能从会议 PDF 纯文本可靠映射
- Corinne Fredouille：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

警情受理中心需对操作员与求助者的连续对话音频进行实时监测，期望输出操作员心理生理状态随时间的变化警示，难点在于真实警情语音嘈杂多变、投入度与心理灵活性缺乏可直接标注的真值且神经心理学量表无法直接搬用于值班场景。为支持流式处理，方法先对操作员语音做滑动窗切分，输出短窗音频流并送入下一步。接着复用Wagner等人二零二三年的预训练语音情感识别Transformer模型，在每窗上输出效价、激活度与优势度三维得分，形成随时间变化的情绪状态曲线。最后通过观察三维曲线相对中性状态的漂移来推断是否出现状态变化，并设想进一步融合更多通话特征以改善真实场景的异质性。相比离散情绪分类，该表示以三维连续空间抽象掉具体情绪类别，只检测是否偏离中性，因而更适合刻画投入度丧失这类渐变过程而非命名情绪。原文未提供可核对的关键定量结果。其结论适用边界受限于仅在合成拼接音频上观察到绿色变化区可见偏移，而在真实CTA录音上结果更具异质性，尚未验证跨中心、长时值班与噪声条件下的外推能力。原文未披露训练、推理或部署成本。

🔗 **开源资源**

本次未形成可展示的已核验资源记录，开放状态尚未核实。
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 108. [把声音变成可比的痕迹：从电磁记录到光学比较与乐器模型](/posts/conference-jep-2026-conference-paper-id-schweitzer26-jep-23f2145ae8/)

> 英文题目：*[De l’audible au visible : visualiser, comparer et mesurer les phénomènes sonores](/posts/conference-jep-2026-conference-paper-id-schweitzer26-jep-23f2145ae8/)*

标签：#文献综述方法 #语音学与音系 #语音 #音频理解

评分：**3.9/10** | 创新 1.0/2 | 技术严谨 0.6/1.5 | 实验充分 0.7/1.5 | 清晰度 0.8/1 | 影响力 0.7/1.5 | 开源 0.0/1.5 | 可复现 0.1/0.5 | 工程/实践 0.0/1.5

排名：后50% | 文档类型：综述 | 主任务：#音频理解 | 主方法：#文献综述方法

会议来源：[官方记录](https://www.isca-archive.org/jep_2026/schweitzer26_jep.html) · [官方 PDF](https://www.isca-archive.org/jep_2026/schweitzer26_jep.pdf)

👥 **作者与机构**

- Claudia Schweitzer：机构信息未能从会议 PDF 纯文本可靠映射
- Christelle Dodane：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

本文以电磁学发现、光学可视装置、乐器类比与临床听力测量等零散历史文献为输入，以论证语音如何成为可见、可测、可比的科学对象为输出，难点在于材料横跨物理学、声学、语言学与医学且缺乏统一的定量分析框架。先以奥斯特电磁实验记载与爱迪生留声机声槽为输入，负责将瞬时语音固定为可保存的物质刻痕，输出可重复播放的声波纹路，该纹路作为待可视化的振动载体进入光学环节。再以该物质刻痕所载振动为输入，负责经利萨如图形、柯尼希光学比较器与亥姆霍兹音叉光学装置把振动转为光学轨迹，输出可同时比较频率、振幅与相位的可见图形，该图形作为需解释连续与范畴的比较结果进入建模环节。最后以可见图形与乐器类比材料为输入，负责以长笛与羽管键琴类比说明连续语音的分类，并以斯特鲁伊肯医用单弦琴测量听觉阈值，输出连续性与可测性的解释框架。与以鲁斯洛为孤立起点的既有叙述相比，本文的关键机制差异在于把可视化与建模本身视为客观化构成条件，而非仅是观测精度提升，其实质意义是为实验语音学前史提供了仪器认识论解释。原文未提供可核对的关键定量结果。该结论的适用边界受限于概念史与仪器史解释，尚未验证对现代声学原理或语音技术的直接有效性。原文未披露训练、推理或部署成本。

🔗 **开源资源**

- 第三方资源：<https://collection-lhst.epfl.ch/?action=singleObject&id=167> — 链接可访问（HTTP 200）
- 第三方资源：<https://bihm.lescollections.ch/index.php/Detail/objects/5785> — 链接可访问（HTTP 200）
- 第三方资源：<https://stenodb.sm.au.dk/Search/ShowItem?museumsNr=153936&entryKey=1741420353746> — 链接可访问（HTTP 200）
- 第三方资源：<https://americanhistory.si.edu/collections/object/nmah_1817106> — 链接不可用（HTTP 403）
- 第三方资源：<https://doi.org/10.4000/bibnum.704> → <https://journals.openedition.org/bibnum/704> — 暂时无法访问
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 109. [没有爆破音也能分辨：在越南语里看元音尾段如何留下辅音位置信息](/posts/conference-jep-2026-conference-paper-id-tran26-jep-3103595eed/)

> 英文题目：*[Indices acoustiques des plosives finales non relâchées en vietnamien](/posts/conference-jep-2026-conference-paper-id-tran26-jep-3103595eed/)*

标签：#统计分析 #语音学与音系 #语音 #语音属性识别

评分：**3.8/10** | 创新 0.8/2 | 技术严谨 1.2/1.5 | 实验充分 0.4/1.5 | 清晰度 0.7/1 | 影响力 0.4/1.5 | 开源 0.0/1.5 | 可复现 0.1/0.5 | 工程/实践 0.2/1.5

排名：后50% | 文档类型：应用研究 | 主任务：#语音属性识别 | 主方法：#统计分析

会议来源：[官方记录](https://www.isca-archive.org/jep_2026/tran26_jep.html) · [官方 PDF](https://www.isca-archive.org/jep_2026/tran26_jep.pdf)

👥 **作者与机构**

- Thi Thuy Hien Tran：机构信息未能从会议 PDF 纯文本可靠映射
- Christophe Savariaux：机构信息未能从会议 PDF 纯文本可靠映射
- Nathalie Vallee：机构信息未能从会议 PDF 纯文本可靠映射
- Paula Alejandra Cano Cordoba：机构信息未能从会议 PDF 纯文本可靠映射
- Silvain Gerber：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

本文任务是以载体句中单音节伪词录音为输入，以尾部/p,t,k/在无除阻爆破时是否仍具可分声学关联物为输出，难点在于无爆破频谱可依且需在先行元音过渡中分离部位、元音与时间点效应。先以固定载体句Nói \_ đi em的连续录音为输入承担韵律控制与粗切分职责，输出对齐到无除阻尾塞音的切分后元音\-辅音区间，该区间直接作为下一步采样输入。再以该切分区间为输入承担在元音时长50%至90%按10%步长提取第一至第三共振峰、强度与基频的职责，输出随时间演化的动态参数序列，该序列直接进入下一步统计检验。最后以动态参数序列为输入承担用R语言线性混合模型按元音与时间点做塞音间多重比较的职责，输出各组合下显著性判定，从而完成从录音到可分性结论的衔接。相对依赖爆破频谱或英语可释尾音的传统描述，该工作把判别重心前移至元音内部过渡动态，为补偿感知解释提供可检验的声学基础。在元音50%至90%采样的语料评测设置下，强度显著条件的时长占比指标为70%，高于强度无显著差异条件的时长占比指标的50%，对应显著性为p\<0\.0001。结论适用边界受限于仅分析5名越南语女性发音人高调子集的/i,a,u/组合，尚未验证低调、男性发音人与连续语流外推性。原文未披露训练、推理或部署成本。

🔗 **开源资源**

本次未形成可展示的已核验资源记录，开放状态尚未核实。
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 110. [提前发出下一个元音有多难：年龄减少了元音间预期协同发音，双任务却没有](/posts/conference-jep-2026-conference-paper-id-bruzzo26-jep-bbee5f2782/)

> 英文题目：*[Coarticulation anticipatoire V\-à\-V : effets de l’âge et d’une double\-tâche sur la planification de l’articulation\.](/posts/conference-jep-2026-conference-paper-id-bruzzo26-jep-bbee5f2782/)*

标签：#统计分析 #语音学与音系 #语音 #语音属性识别

评分：**3.7/10** | 创新 0.8/2 | 技术严谨 1.0/1.5 | 实验充分 0.7/1.5 | 清晰度 0.7/1 | 影响力 0.4/1.5 | 开源 0.0/1.5 | 可复现 0.1/0.5 | 工程/实践 0.0/1.5

排名：后50% | 文档类型：应用研究 | 主任务：#语音属性识别 | 主方法：#统计分析

会议来源：[官方记录](https://www.isca-archive.org/jep_2026/bruzzo26_jep.html) · [官方 PDF](https://www.isca-archive.org/jep_2026/bruzzo26_jep.pdf)

👥 **作者与机构**

- Louise Bruzzo：机构信息未能从会议 PDF 纯文本可靠映射
- Cécile Fougeron：机构信息未能从会议 PDF 纯文本可靠映射
- Nicolas Audibert：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

本研究以法语朗读语料中前后元音语境下的声学实现为输入，以后续元音对前一元音的前向协同发音程度为输出，难点在于区分个体元音空间差异带来的表观偏移与真正面向规划的前视协同。方法链首先在单任务朗读与附加放珠动作的双任务下采集语音，以控制音系语境并引入急性认知运动负荷，前一步的分组与条件设计直接决定后续比较的基线。接着对目标元音提取基于听觉尺度的共振峰紧凑度多点均值以表征舌位前化特征，该声学表征为后继距离计算提供统一输入。然后按说话人与条件计算目标语境中前元音偏离基线语境质心的距离，并以个体元音空间跨度归一化得到预期指数，最后以贝叶斯混合回归检验年龄组与任务条件的交互效应。相对已有老化协同发音描述性工作，该设计把年龄相关的慢性资源下降与双任务造成的急性负荷放在同一指标下对照，具有机制区分意义。在单任务与双任务条件下，原文未提供可核对的关键定量结果。该结论适用边界仅限于健康成人朗读特定辅音元音语境下的前移现象，尚未验证自发语或更强负荷下的外推，原文未披露训练、推理或部署成本。

🔗 **开源资源**

本次未形成可展示的已核验资源记录，开放状态尚未核实。
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 111. [缩读形式是存起来的词条，还是由完整形式现场算出来的：法语者听英语央元音脱落的启动证据](/posts/conference-jep-2026-conference-paper-id-mouquet26-jep-2cabf31d22/)

> 英文题目：*[Les réductions phonétiques sont\-elles encodées dans le lexique mental d’une L2 ? Résultats d’une étude d’amorçage](/posts/conference-jep-2026-conference-paper-id-mouquet26-jep-2cabf31d22/)*

标签：#心理声学实验 #语言习得 #言语感知 #语音 #口语理解

评分：**3.7/10** | 创新 1.0/2 | 技术严谨 1.0/1.5 | 实验充分 0.3/1.5 | 清晰度 0.6/1 | 影响力 0.5/1.5 | 开源 0.0/1.5 | 可复现 0.1/0.5 | 工程/实践 0.2/1.5

排名：后50% | 文档类型：应用研究 | 主任务：#口语理解 | 主方法：#心理声学实验

会议来源：[官方记录](https://www.isca-archive.org/jep_2026/mouquet26_jep.html) · [官方 PDF](https://www.isca-archive.org/jep_2026/mouquet26_jep.pdf)

👥 **作者与机构**

- Marine Mouquet：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

该研究处理法语母语者识别英语第二语言语音缩减变体的难题，输入为含央元音完整形与脱落缩减形的听觉英语词，输出为词汇识别正确率模式，难点在于缩减形缺失音段且第二语言表征脆弱。方法链分三步推进，首先选取含可脱落央元音的词例并录制完整与缩减两个版本，其次以听觉词汇启动范式呈现启动词与目标词的形态一致与不一致组合，最后比较启动形态与熟练度与重音位置下的正确率方向以推断词库结构。与抽象单一词条观的关键机制差异在于检验缩减形是否独立存储，若对称促进则支持共享或等价存储，若完整启动缩减显著优于反向则支持以完整形为基础的在线生成。原文未提供可核对的关键定量结果，仅定性报告缩减启动条件精度下降而完整启动具促进作用，前重音位置系统性降低正确率，初学者组内差异较小。结论边界限于法语学英语者对特定央元音脱落词的初步观察，作者明确表示需更大样本确认。原文未披露训练、推理或部署成本。

🔗 **开源资源**

本次未形成可展示的已核验资源记录，开放状态尚未核实。
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 112. [多数人发成近音、仅一人拍出触碰：摩洛哥方言舌尖 r 的刚度与路径对质](/posts/conference-jep-2026-conference-paper-id-zeroual26-jep-5a60d222c8/)

> 英文题目：*[Etude physiologique du r apical de l’arabe dialectal marocain](/posts/conference-jep-2026-conference-paper-id-zeroual26-jep-5a60d222c8/)*

标签：#统计分析 #发声与构音 #语音学与音系 #语音 #语音属性识别

评分：**3.7/10** | 创新 0.8/2 | 技术严谨 0.8/1.5 | 实验充分 0.6/1.5 | 清晰度 0.6/1 | 影响力 0.4/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 0.2/1.5

排名：后50% | 文档类型：应用研究 | 主任务：#语音属性识别 | 主方法：#统计分析

会议来源：[官方记录](https://www.isca-archive.org/jep_2026/zeroual26_jep.html) · [官方 PDF](https://www.isca-archive.org/jep_2026/zeroual26_jep.pdf)

👥 **作者与机构**

- Chakir Zeroual：机构信息未能从会议 PDF 纯文本可靠映射
- Adamantios Gafos：机构信息未能从会议 PDF 纯文本可靠映射
- Philip Hoole：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

本文任务输入为载体句中/a\_a/语境下摩洛哥方言/d/与/r/的声学波形及舌尖运动轨迹，输出为该/r/更接近拍音tap还是闪音flap的类型判定，难点在于听感均呈短促接触而舌尖闭合目标、轨迹曲率与刚度差异细微，且三名发音人常实现为近音而仅一人为浊塞式击音，说话人变异极大。方法链由四步构成：先以三维电磁发音仪同步采集舌尖与舌体传感器轨迹并诱发8次重复语料，再以切向速度阈值划分闭合起始、平台与开放手势并输出运动学分段，接着用Praat测量前后元音共振峰与辅音声学 constriction 时长以界定声学实现，最后以单变量一般线性模型在被试内比较平台期、峰值速度与刚度并回推发音目标。相对既有基于听辨与波形的类型讨论，该工作把Catford手势模型转化为以刚度与目标高度预测时长差异的可检验机制，其实测意义在于用速度与凹度特征区分tap式上抬与flap式切向撞击。在/ma1da2bʃ/与/ma1ra2bʃ/对比语料条件下，/r/的\[C\]时长指标为31,3 ms，低于/d/的\[C\]时长指标94 ms。该结论适用边界受限于/a\_a/重读后单一语境与4名发音人，传感器对舌尖的干扰与近音化使外推至词首词尾及咽化变体尚未验证。原文未披露训练、推理或部署成本。

🔗 **开源资源**

本次未形成可展示的已核验资源记录，开放状态尚未核实。
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 113. [从文本到手脸编码：用法语补唇语钥匙数量给阅读材料排难度](/posts/conference-jep-2026-conference-paper-id-norre26-jep-d0d25ad13a/)

> 英文题目：*[Un modèle de sélection de ressources multimodales pour l'apprentissage de la Langue française Parlée Complétée](/posts/conference-jep-2026-conference-paper-id-norre26-jep-d0d25ad13a/)*

标签：#教育 #统计分析 #语音学与音系 #音频分类

评分：**3.6/10** | 创新 0.8/2 | 技术严谨 0.7/1.5 | 实验充分 0.4/1.5 | 清晰度 0.7/1 | 影响力 0.4/1.5 | 开源 0.0/1.5 | 可复现 0.1/0.5 | 工程/实践 0.5/1.5

排名：后50% | 文档类型：应用研究 | 主任务：#音频分类 | 主方法：#统计分析

会议来源：[官方记录](https://www.isca-archive.org/jep_2026/norre26_jep.html) · [官方 PDF](https://www.isca-archive.org/jep_2026/norre26_jep.pdf)

👥 **作者与机构**

- Magali Norré：机构信息未能从会议 PDF 纯文本可靠映射
- Brigitte Bigi：机构信息未能从会议 PDF 纯文本可靠映射
- Núria Gala：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

本研究输入为面向7至11岁儿童的200篇文学与科学文本及其人工简化平行版本，输出是供免费视频胶囊选题用的复杂度变量与分布先验，难点在于正字法无法直接反映唇读叠加手势的跨模态编码负荷。方法链第一步用开源标注工具SPPAS将文本自动音素化并映射为LfPC键，明确每音素对应的面部5位置与手部8手形。第二步提取10个音素变量，包括键总数、远距离位置切换数、半元音半辅音及总数、强制连音数与词内CV和C\-C序列数，量化手势运动与音节结构负荷。第三步计划将上述变量与可读性变量联合输入无监督模型，对文本按学习复杂度自动分级，其输出将回用于资源筛选。相对已有可读性研究的关键机制差异在于显式引入位置切换与音节结构耦合负荷，具有为LfPC分级提供先验的实际意义。原文未提供可核对的关键定量结果。该结论适用边界受限于仅基于自动预测键的分布统计，尚未验证难度排序模型对聋人学习者的真实有效性，失败条件包括自动音素化误差与小规模实测差异。原文未披露训练、推理或部署成本。

🔗 **开源资源**

本次未形成可展示的已核验资源记录，开放状态尚未核实。
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 114. [把对话拆成可对齐的多维交际行为再生成剧本：MINERAL 的多参与者建模路线](/posts/conference-jep-2026-conference-paper-id-cottrez26-jep-fe925807ef/)

> 英文题目：*[Représentation multi dimensionnelle pour la modélisation des conversations](/posts/conference-jep-2026-conference-paper-id-cottrez26-jep-fe925807ef/)*

标签：#多模态学习 #音视频 #语音 #音视频理解

评分：**3.5/10** | 创新 1.0/2 | 技术严谨 0.6/1.5 | 实验充分 0.2/1.5 | 清晰度 0.7/1 | 影响力 0.5/1.5 | 开源 0.0/1.5 | 可复现 0.0/0.5 | 工程/实践 0.5/1.5

排名：后50% | 文档类型：应用研究 | 主任务：#音视频理解 | 主方法：#多模态学习

会议来源：[官方记录](https://www.isca-archive.org/jep_2026/cottrez26_jep.html) · [官方 PDF](https://www.isca-archive.org/jep_2026/cottrez26_jep.pdf)

👥 **作者与机构**

- Marceau Cottrez：机构信息未能从会议 PDF 纯文本可靠映射
- Kossi Kossivi：机构信息未能从会议 PDF 纯文本可靠映射
- Frederic Bechet：机构信息未能从会议 PDF 纯文本可靠映射
- Geraldine Damnati：机构信息未能从会议 PDF 纯文本可靠映射
- Benoit Favre：机构信息未能从会议 PDF 纯文本可靠映射
- Abdellah Fourtassi：机构信息未能从会议 PDF 纯文本可靠映射
- Sahar Ghannay：机构信息未能从会议 PDF 纯文本可靠映射
- Cyril Grouin：机构信息未能从会议 PDF 纯文本可靠映射
- Camille Guinaudeau：机构信息未能从会议 PDF 纯文本可靠映射
- Gwénolé Lecorvé：机构信息未能从会议 PDF 纯文本可靠映射
- Sophie Rosset：机构信息未能从会议 PDF 纯文本可靠映射
- Anastasia Shimorina：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

本文处理多参与人视频会话的自动理解，输入为视觉、文本与音频三模态长序列，输出为融合语义、话语与语用维度的结构化描述，难点在于非言语信号丰富、跨说话人对齐复杂且上下文漫长。方法链分为三步：首先刻画交际行为这一最小言语或非言语单元，明确每个单元的多维属性，为后续建模奠定基础。其次建模交际行为之间的交际结构关系，前一步的单元标注作为关系建模的节点输入，从而刻画对话整体结构与动态。最后将时间与语义对齐后的多模态标注转化为电影脚本式文本，前两步的结构化结果直接进入生成阶段以支撑可评估的描述输出。与已有单模态或短片段方法相比，该设想强调跨模态时间与语义对齐后的统一表征，其实质差异在于同步整合语言内容、韵律表情与视觉情境，其实际意义在于支撑更完整的上下文分析。原文未提供可核对的关键定量结果。该思路若成立其适用边界仅限所列虚构对话、自然会话、电视节目、政治辩论与儿童视频通话等语料覆盖场景，向儿童社会认知等迁移尚未验证，原文未披露训练、推理或部署成本。

🔗 **开源资源**

本次未形成可展示的已核验资源记录，开放状态尚未核实。
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 115. [年长者更容易被念偏的词启动：词汇表征稳固性下降的启动实证](/posts/conference-jep-2026-conference-paper-id-hureaux26-jep-39b5db65ed/)

> 英文题目：*[Robustesse des représentations lexicales et vieillissement cognitif](/posts/conference-jep-2026-conference-paper-id-hureaux26-jep-39b5db65ed/)*

标签：#心理声学实验 #言语感知 #语音 #口语理解

评分：**3.5/10** | 创新 0.8/2 | 技术严谨 1.0/1.5 | 实验充分 0.5/1.5 | 清晰度 0.6/1 | 影响力 0.5/1.5 | 开源 0.0/1.5 | 可复现 0.1/0.5 | 工程/实践 0.0/1.5

排名：后50% | 文档类型：应用研究 | 主任务：#口语理解 | 主方法：#心理声学实验

会议来源：[官方记录](https://www.isca-archive.org/jep_2026/hureaux26_jep.html) · [官方 PDF](https://www.isca-archive.org/jep_2026/hureaux26_jep.pdf)

👥 **作者与机构**

- Guillaume Hureaux：机构信息未能从会议 PDF 纯文本可靠映射
- Serge Pinto：机构信息未能从会议 PDF 纯文本可靠映射
- Sophie Dufour：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

口语词识别的输入是词首单特征偏差的伪衍生词，输出是词汇决策反应时，实际难点在于区分词汇表征容忍度下降与一般的老化减慢、听力变化或决策策略偏移。该研究先用语义分类任务呈现启动词以建立长时记忆痕迹，其输出作为重复启动来源进入下一步。该研究接着在词汇决策任务中呈现目标词并记录反应时，其输出的加速量进入下一步比较。该研究最后对比重复与最小偏差启动相对语音无关控制条件的启动效应，并检验其随年龄组与词频的变化。与既往模糊音素分类只报告知觉边界偏移相比，关键机制差异在于采用长时重复启动范式分离词汇层激活，具有区分表征鲁棒性的实际意义。原文未提供可核对的关键定量结果。该结论适用边界仅为健康法语老年人对词首单特征偏差的容忍，噪声与连续语流等外推尚未验证。原文未披露训练、推理或部署成本。

🔗 **开源资源**

本次未形成可展示的已核验资源记录，开放状态尚未核实。
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 116. [苍白球内侧部脑深部刺激后韵律大体稳定、仅平均基频下降：一项肌张力障碍朗读研究的核对式解读](/posts/conference-jep-2026-conference-paper-id-noirot26-jep-5eeccb7917/)

> 英文题目：*[Paramètres prosodiques de la parole dans la dystonie : effets de la stimulation cérébrale profonde](/posts/conference-jep-2026-conference-paper-id-noirot26-jep-5eeccb7917/)*

标签：#统计分析 #韵律 #语音 #病理语音评估

评分：**3.5/10** | 创新 0.8/2 | 技术严谨 1.0/1.5 | 实验充分 0.4/1.5 | 清晰度 0.6/1 | 影响力 0.3/1.5 | 开源 0.0/1.5 | 可复现 0.1/0.5 | 工程/实践 0.3/1.5

排名：后50% | 文档类型：应用研究 | 主任务：#病理语音评估 | 主方法：#统计分析

会议来源：[官方记录](https://www.isca-archive.org/jep_2026/noirot26_jep.html) · [官方 PDF](https://www.isca-archive.org/jep_2026/noirot26_jep.pdf)

👥 **作者与机构**

- Jade Noirot：机构信息未能从会议 PDF 纯文本可靠映射
- Marie\-Charlotte Cuartero：机构信息未能从会议 PDF 纯文本可靠映射
- Marie Vidailhet：机构信息未能从会议 PDF 纯文本可靠映射
- Serge Pinto：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

该研究输入为拟接受内苍白球深部脑刺激的肌张力障碍患者在术前T0及术后6个月T1、12个月T2朗读法语文本的录音，输出为韵律声学参数的纵向组水平比较，难点在于病型高度混杂、个体变异大且缺乏韵律恶化统一判定标准。方法链分四步：先用Vosk自动预处理并标注语间停顿单元，其输出进入Praat做人工边界核验与脚本批量提取声学数值。接着用SPPAS对核验后文本做音素化与音节化以支撑节奏与时长统计，最后用线性混合模型在JASP中检验时间效应并结合临床异质性解读。相对既有聚焦运动量表改善的研究，该工作把评价轴移到可测量的超音段声学证据，具有临床语音学意义，可为判断刺激是否损伤韵律提供直接依据。除平均频率根本在T0与T2间差异显著外，原文未提供可核对的关键定量结果，其余参数在三个时间点均报告为无显著变化。结论适用边界限于朗读体裁、单中心17例可分析样本与术后1年窗口，受限于尚未验证自发言语、长期演变及分型特异效应。原文未披露训练、推理或部署成本。

🔗 **开源资源**

- 第三方资源：<https://github.com/alphacep/vosk-api> — 链接可访问（HTTP 200）
- 第三方资源：<https://www.fon.hum.uva.nl/praat/> — 链接可访问（HTTP 200）
- 第三方资源：<https://sppas.org/workdemo.html> — 链接不可用（HTTP 404）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 117. [语速加快时大脑跟不上节奏：健康老化中三角波耦合与言语理解的初步证据](/posts/conference-jep-2026-conference-paper-id-nopere26-jep-625012f8a0/)

> 英文题目：*[La compréhension de la parole dans le vieillissement sain : étude neurophysiologique de la perception du rythme\.](/posts/conference-jep-2026-conference-paper-id-nopere26-jep-625012f8a0/)*

标签：#心理声学实验 #韵律 #脑信号 #语音 #语音可懂度评估

评分：**3.4/10** | 创新 0.8/2 | 技术严谨 1.0/1.5 | 实验充分 0.4/1.5 | 清晰度 0.7/1 | 影响力 0.4/1.5 | 开源 0.0/1.5 | 可复现 0.1/0.5 | 工程/实践 0.0/1.5

排名：后50% | 文档类型：应用研究 | 主任务：#语音可懂度评估 | 主方法：#心理声学实验

会议来源：[官方记录](https://www.isca-archive.org/jep_2026/nopere26_jep.html) · [官方 PDF](https://www.isca-archive.org/jep_2026/nopere26_jep.pdf)

👥 **作者与机构**

- Martin Nopère：机构信息未能从会议 PDF 纯文本可靠映射
- Virginie Roland：机构信息未能从会议 PDF 纯文本可靠映射
- Kathy Huet：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

本研究处理健康老化中语速加快导致言语理解困难的问题，输入为法语陈述句在中性与加速条件下的语音刺激，输出为理解与复述行为表现及德尔塔振荡与韵律节律的耦合指标，难点在于压缩后切分线索退化且老化效应易与听力和认知差异混杂。方法先呈现不同语速刺激并同步采集脑电与行为反应，输入为语音刺激与被试状态，职责是获得可对比的原始神经与行为数据，输出为对齐的脑电记录与任务得分。再以成对相位一致性量化德尔塔振荡与重音群节律的锁相并经置换检验判断显著性，输入为上一步的脑电记录与韵律标注，职责是检验神经跟随是否随语速退化，输出为显著性图谱与锁相强度，其检验结果进入下一步的关联分析。最后将神经耦合结果与理解和重复任务得分联合解释，输入为前一步的耦合指标与行为得分，职责是判断神经去同步是否伴随行为衰退，输出为老化相关衰退的解释模型。相对既有英语压缩言语与音节跟踪研究，本工作聚焦法语重音群单元的切分机制，具有语言类型学针对性与生态解释意义。原文未提供可核对的关键定量结果。该结论适用边界受限于实验室加速言语与小样本试点设计，外推至临床人群与日常噪声场景尚未验证。原文未披露训练、推理或部署成本。

🔗 **开源资源**

本次未形成可展示的已核验资源记录，开放状态尚未核实。
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 118. [想让人听懂时，说话人会更用力抵抗被扭曲的听觉反馈吗](/posts/conference-jep-2026-conference-paper-id-rochasbenlalou26-jep-4edf5fe940/)

> 英文题目：*[L'influence de la recherche d'intelligibilité sur l'adaptation auditivo\-motrice de la parole](/posts/conference-jep-2026-conference-paper-id-rochasbenlalou26-jep-4edf5fe940/)*

标签：#用户研究 #发声与构音 #语音 #语音可懂度评估

评分：**3.1/10** | 创新 0.8/2 | 技术严谨 1.0/1.5 | 实验充分 0.2/1.5 | 清晰度 0.6/1 | 影响力 0.4/1.5 | 开源 0.0/1.5 | 可复现 0.1/0.5 | 工程/实践 0.0/1.5

排名：后50% | 文档类型：应用研究 | 主任务：#语音可懂度评估 | 主方法：#用户研究

会议来源：[官方记录](https://www.isca-archive.org/jep_2026/rochasbenlalou26_jep.html) · [官方 PDF](https://www.isca-archive.org/jep_2026/rochasbenlalou26_jep.pdf)

👥 **作者与机构**

- Sarah Rochas Ben Lalou：机构信息未能从会议 PDF 纯文本可靠映射
- Maëva Garnier：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

本研究检验图片命名中听觉运动适应是否受可懂度需求调节，输入为说话人实时听到的被扰动听觉回放，输出为发音相对基线的补偿性偏移，难点在于区分自动感觉误差修正与受词汇与交际约束驱动的主动清晰化。方法链分三步：先以图片命名诱发目标词自然产出并经实时变换后回放以构造感觉误差，再操纵词汇混淆度使扰动是否造成词义混淆以检验语言学后果，最后操纵独自面对计算机还是面对真人对话伙伴以检验社会交际后果，前一步的回放误差进入下一步的运动计划更新。实验按基线无扰动、共振峰渐升适应、最大恒定扰动与听觉恢复等阶段推进并做基线归一化比较。与既往多关注音类边界或单人对计算机朗读的研究不同，该设计同时操纵语言学后果与社会交际后果，因而生态效度设想更强并能分离两类调节源。原文未提供可核对的关键定量结果。结论的适用边界严格受限为极小规模试点可行性探索，尚未验证群体效应，且存在顺序效应与基线未完全恢复等失败条件。原文未披露训练、推理或部署成本。

🔗 **开源资源**

本次未形成可展示的已核验资源记录，开放状态尚未核实。
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---
