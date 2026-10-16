---
title: "MUSEBENCH: A Benchmark for AI-Generated Music Detection and Artifact Analysis"
date: 2026-10-16
draft: false
tags: [音频深度伪造检测, 基准设计, 数据集, 基准测试, 鲁棒性]
categories: [论文速递]
description: "MuseBench 用 361166 首曲目对照人类作曲与 10 种生成器输出，测出频谱图模型在干净条件下接近满分但在跨模型、压缩与变速下分化，并归纳出频谱、和声与演奏层面的可复现伪影线索与代价。"
hiddenInHomeList: true
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_arxiv_id: "2610.20310"
paper_digest_workbench_contract: "researcher-workbench-v1"
paper_digest_reader_title: "MuseBench：大规模 AI 生成音乐检测与伪影分析基准"
paper_digest_original_title: "MUSEBENCH: A Benchmark for AI-Generated Music Detection and Artifact Analysis"
paper_digest_arxiv_version: 1
paper_digest_arxiv_versioned_id: "2610.20310v1"
paper_digest_arxiv_abs_url: "https://arxiv.org/abs/2610.20310v1"
paper_digest_arxiv_pdf_url: "https://arxiv.org/pdf/2610.20310v1.pdf"
paper_digest_primary_task: "音频深度伪造检测"
paper_digest_tags_contract: "paper-tag-flat-tags-v2"
paper_digest_tags_selection_contract: "paper-tag-selection-v2"
paper_digest_tags_registry_version: "paper-tag-catalog-v2"
paper_digest_tags_registry_sha256: "cdef54423b5dfc00a1d017ef6639446d2ecd1d9c1acf71c8eb4f6219a46b7ba8"
paper_digest_tags_concepts: [{"facet":"task","id":"task.audio-deepfake","label":"音频深度伪造检测"},{"facet":"method","id":"method.benchmark-design","label":"基准设计"},{"facet":"artifact","id":"artifact.dataset","label":"数据集"},{"facet":"artifact","id":"artifact.benchmark","label":"基准测试"},{"facet":"research_focus","id":"research_focus.robustness","label":"鲁棒性"}]
paper_digest_primary_method: "基准设计"
paper_digest_score: 7.0
paper_digest_rank_bucket: "前50%"
paper_digest_document_type: "数据集与基准"
paper_digest_one_sentence: "MuseBench 用 361166 首曲目对照人类作曲与 10 种生成器输出，测出频谱图模型在干净条件下接近满分但在跨模型、压缩与变速下分化，并归纳出频谱、和声与演奏层面的可复现伪影线索与代价。"
paper_digest_authors: [{"affiliations":["University of Georgia"],"name":"Yi Chen Liu"},{"affiliations":["College of Engineering","Virginia Commonwealth University"],"name":"Syed Irfan Ali Meerza"},{"affiliations":["University of Georgia"],"name":"Jiawei Yu"},{"affiliations":["University of Tennessee, Knoxville"],"name":"Xi Guo"},{"affiliations":["Cornell University"],"name":"Samuel Bright"},{"affiliations":["University of Georgia"],"name":"Jian Liu"}]
paper_digest_abstract_sha256: "bc386f6c650b1ecddf3a8c0867f340c80834f6dd092a47a5deed6b8112155078"
paper_digest_sidecars: {"citation.bib":{"sha256":"0f961a9edbbaca082f8d1a5d69e82b03f26fa53f422afc19fda580cf576258c1","url":"/audio-paper-digest-blog/data/papers/2026-10-16/2610-20310/citation.bib"},"citation.json":{"sha256":"01d717ab3efaa04dfab5ad9d0e21622af81e3b2c1ad63f43e8e46e5dad782d8d","url":"/audio-paper-digest-blog/data/papers/2026-10-16/2610-20310/citation.json"},"citation.ris":{"sha256":"775298ab6512cd90207fd9837a89316544a7b01826d8ae8d471f00063e7615d1","url":"/audio-paper-digest-blog/data/papers/2026-10-16/2610-20310/citation.ris"},"rethink-context.json":{"contract":"paper-research-context-v2","sha256":"7919e525b21e45be61f9ea58b7d68bd679d0d1efedf6acc8bc6ddd5c5721c1a0","url":"/audio-paper-digest-blog/data/papers/2026-10-16/2610-20310/rethink-context.json"}}
paper_digest_api_reader_contract: "beginner-researcher-v3"
paper_digest_api_reader_article_sha256: "350d9a493cc4511896e6b86a1bd8161c316adbfc78924fec49b0433e2e3e02af"
paper_digest_api_reader_plan_sha256: "df4f209ebe799074311ed3da96af6cccc185a69314bcce76bb10a5a2c89d6448"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings-v4"
paper_digest_api_reader_source_bindings_sha256: "fc3adc9133a3195edb341520e134e81c6bfc606cfa2905aaf3e1149f5c9e5d9e"
paper_digest_api_reader_source_table_count: 4
paper_digest_api_reader_source_formula_count: 0
paper_digest_api_reader_structured_artifacts_sha256: "460345a2f501fe80e7ae68844e6d43545242850be09bb7fe0f1a01c1164dd6c2"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity-v1"
paper_digest_api_reader_author_identity_sha256: "262d84255e885ec0b843d0cf3825c93e6c35a85ad29d821ac2c56202ded4e366"
paper_digest_api_reader_author_count: 6
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity-v1"
paper_digest_api_reader_resource_identity_sha256: "358e920621787d5f4a360ea36ec0face005a43387bd21e9781929977688cec15"
paper_digest_api_reader_resource_count: 4
paper_digest_api_reader_figure_persistence: "ephemeral-no-persisted-figure-assets-v1"
paper_digest_api_reader_decision_projection: "api-reader-decision-projection-v2"
---

# 📄 MuseBench：大规模 AI 生成音乐检测与伪影分析基准

> 英文题目：*[MUSEBENCH: A Benchmark for AI-Generated Music Detection and Artifact Analysis](https://arxiv.org/abs/2610.20310v1)*

<!--paper-tag-hierarchy-v1:start-->

**研究分类**

- **研究任务**：[音频伪造检测](/audio-paper-digest-blog/papers/?concept=task.audio-forgery) → [音频深度伪造检测](/audio-paper-digest-blog/papers/?concept=task.audio-deepfake)
- **研究方法**：[评测协议](/audio-paper-digest-blog/papers/?concept=method.evaluation-protocol) → [基准设计](/audio-paper-digest-blog/papers/?concept=method.benchmark-design)
- **研究重点**：[鲁棒性](/audio-paper-digest-blog/papers/?concept=research_focus.robustness)
- **研究产物**：[数据集](/audio-paper-digest-blog/papers/?concept=artifact.dataset)；[基准测试](/audio-paper-digest-blog/papers/?concept=artifact.benchmark)

<!--paper-tag-hierarchy-v1:end-->

> 评分：**7.0/10** | 创新 1.5/2 | 技术严谨 1/1.5 | 实验充分 1.3/1.5 | 清晰度 0.8/1 | 影响力 1/1.5 | 开源 0/1.5 | 可复现 0.3/0.5 | 工程/实践 1.1/1.5


## 👥 作者与机构

- Yi Chen Liu：University of Georgia
- Syed Irfan Ali Meerza：College of Engineering；Virginia Commonwealth University
- Jiawei Yu：University of Georgia
- Xi Guo：University of Tennessee, Knoxville
- Samuel Bright：Cornell University
- Jian Liu：University of Georgia

## 📌 核心摘要

AI音乐生成器已能从文本提示生成完整歌曲，难点在于生成痕迹会被压缩、均衡、变速变调、响度处理、人机混编和故意扰动稀释，干净条件下的检测容易失效。MuseBench收集可验证的人类作曲，用风格对齐的提示驱动文本到音乐生成器产生对应AI曲目，再构造人机共创与压缩后处理扰动变体，最后用多种检测器在默认、留一模型、域外人类集和变换条件下评测并做伪影分析。相对只覆盖少数生成器或偏重人声的M6、FakeMusicCaps和SONICS，该基准同时纳入共创、压缩、后处理、扰动与域外集，并给出频率、频谱、和声、演奏与演唱层面的可解释线索。在MuseBench默认设置下用10秒片段区分人类作曲与AI生成音乐时，语谱图模型的平衡准确率高于波形模型M5，其中ConvNeXt等的平衡准确率处于99.5%–99.8%，而M5平衡准确率为94.3%。在域外人类集评测设置下以2010年前Free Music Archive人类音乐为人类集并按正确判为人类计准确率时，手工特征的Deezer方法准确率为94.4%，高于神经网络中最好的AST的79.8%。留一模型评估显示跨生成器泛化不稳定，频谱表示迁移较好而手工特征与波形模型波动较大，变换与共创进一步暴露失效，说明跨生成器与变换鲁棒性尚未解决。原文未披露训练、推理或部署成本。

## 🔗 开源与复现资源

- 第三方资源：<https://huggingface.co/Anonymousv22222/datasets> — 暂时无法访问

- 第三方资源：<https://github.com/ohollo/chord-extractor> — 暂时无法访问

- 第三方资源：<https://www.guitartricks.com/blog/Rock-Guitar-Chord-Systems> — 链接可访问（HTTP 200）

- 第三方资源：<https://blog.native-instruments.com/rock-chord-progressions/> — 链接可访问（HTTP 200）

可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 要解决的现实问题是什么

这篇论文处理的是流媒体与开放上传场景里的音乐真伪判断。输入是一首完整的歌曲音频，可能是人写的，也可能是文本生成模型从头合成的，还可能是人写底稿再由模型改编的。输出是把它判为人类或 AI，并进一步指出声音里哪些痕迹支持这个判断。必须保留的信息包括演唱与伴奏是否自然、风格标签是否可比、是否经过压缩或效果器、以及测试曲目是否来自训练时没见过的生成器。

举例来说，同样一句歌词，研究生需要区分是歌手咬字不清，还是声码器把摩擦音做成了持续的嘶嘶声。论文强调已有评测多在干净人声上做，缺少器乐、共创与真实分发变换，因此结论搬到平台上容易失效。作者没有宣称解决版权归属本身，而是提供一个可复现的检测与伪影分析基准，让后续方法在同一输入输出定义下比较误报与漏检。

### 已有检测路线与本基准的差别

原文把自动检测分为 3 类。第一类是手工特征加经典模型，例如用双谱矩、梅尔倒谱系数及其差分接二次核支持向量机，特点是轻量可解释，但对新生成器敏感。第二类是波形卷积网络，例如直接吃原始采样点的 M5 和结合 sinc 卷积与循环结构的 RawNet2，保留细节但容易受录音条件影响。第 3 类是频谱图卷积与 Transformer，例如吃对数梅尔频谱的 ResNet18+Spec、ConvNeXt、ViT、AST 和做谱时间分词的 SpecTTTra，以及基于反卷积谱峰理论的 Deezer 指纹检测器。

已有数据集方面，FakeMusicCaps 约 27K 首但多为干净样本，SONICS 约 97K 首但偏重人声，M6 覆盖生成器与乐器更广但缺少编解码与协作流程。MuseBench 的区别不在于提出新分类器，而在于同时覆盖 10 种生成器、人声与器乐、人类与 AI 共创、压缩与声学处理与对抗扰动，并用同一采样与指标测 11 套检测器。比较时要注意输入、监督与运行阶段相同，手工特征与大模型不能只比一个干净准确率就断高下。

### 评测到底测什么，什么算对

论文把任务定义为二分类。人类作曲是负类，AI 生成是正类。推理时默认从每首歌随机截一段 10 秒单声道 48 kHz 片段，个别对照用 30 秒。指标同时看平衡准确率、精确率、召回率、误报率与漏检率。平衡准确率是真阳性率与真阴性率的平均，避免类别不平衡时被多数类带偏。

精确率高说明判为 AI 的多数真是 AI，召回率高说明多数 AI 能被抓住。误报率高意味着大量人类被冤枉，这在平台下架场景代价很大。漏检率高意味着 AI 能轻易混入曲库。论文还设置 3 种条件。默认条件是训练与测试生成器相同，测拟合与上限。

留一模型法是每次留出一个生成器不参与训练，测跨模型泛化。域外人类集只含 2010 年前上传的 Free Music Archive 音乐，测对陌生人类录音的误伤。变换条件只对测试集 AI 做压缩、均衡、变调变速、响度归一、高斯噪声与 PGD 对抗扰动，测真实绕过手段。

### MuseBench 整体由哪五部分组成

理解全图最好的方式是把一首歌的旅程分成五站。第一站是人类参考，来自带艺人与专辑元数据的 Genius-Lyrics 人声与 JamendoMaxCaps 器乐，用于确认人类作者身份。第二站是 AI 生成，用与人类风格对齐的文字提示驱动 10 种生成器，得到可比的合成曲。第三站是人类与 AI 共创，先请 31 位职业乐手给候选人类曲目提修改意见，再用感知特征找风格相近曲目配对，用语言模型把意见整理成改编提示，交给 MusicGen-Style 做 30 秒混音。第四站是变换变体，对测试集 AI 曲做 MP3、OGG、AAC 压缩，均衡、变调变速、响度归一，以及高斯噪声与 PGD 扰动。

第五站是域外人类集，时间上与近年生成器隔离。下面这张总览图把五部分的曲目量、时长与人声器乐构成画在一起，读时先看体量，再看类型，最后看变换种类。下图是论文总览，读完可以复述数据从哪里来、到哪里去。

### 总览图里各色块在说什么

这张图用 5 个圆角面板分别对应上述五站，每个面板上方标出来源或模型数量与约计曲目量与时长，下方用条形长度示意体量，底部标注人声、器乐或混合。右侧变换面板单独列出 3 组 8 种方法，分别是有损压缩、声学后处理与加性扰动。阅读时不要把条形长度当成精确数字，精确计数以后表为准，图的作用是建立比例感：AI 生成与变换变体是体量最大的两块，人类与域外相对小，共创居中。颜色只起分区作用，不代表性能好坏。

> **看图路径：** 1. 先看五个色块的编号与箭头，确认人类、AI、共创、变换与域外五个部分；2. 比较各块标注的曲目量与时长条，理解 AI 与变换部分占大头；3. 看变换块中列出的三类处理，记住后文鲁棒性测试的来源

[![原论文 Figure 1：Overview of MuseBench.](https://arxiv.org/html/2610.20310v1/Datasets.png)](https://arxiv.org/html/2610.20310v1/Datasets.png)

*论文图 1。原论文 Figure 1:：“Overview of MuseBench.”。*

图中可见人类约 20K 首、AI 约 180K 首、变换约 143K 首、共创约 10K 首、域外约 9K 首，人声与器乐在人类与 AI 中分开标注，在共创与变换中记为混合。这种布局提示后文实验为何能同时测生成器泛化、共创稀释与压缩鲁棒性，也提示默认划分的高分不等于域外与变换下依然可靠。

### 风格对齐的生成管线如何避免考风格

如果 AI 与人类风格差太多，检测器靠流派或音质就能猜对，测不出真伪能力。论文的做法是先把每首人类曲切成连续 10 秒小段，用 LP-MusicCaps 给每段写乐器、节奏、情绪等属性，再用 GPT-OSS 把多段小描述合并成不超过 300 字符的整曲描述，保留结构与意图。这个整曲描述作为文字提示喂给 10 种生成器。开源模型与 Lyria 按此流程各生成 19903 首，Suno 与 Udio 复用来自同一作词来源的 SONICS 高质量人声曲各 10000 首，以保证风格兼容。最终收集 179224 首 AI 曲。

例子：一段 techno 先被描述为 groovy 贝斯与鼓机，再被合并为适合俱乐部的整体提示，生成器据此合成可比曲目。代价是多一次字幕模型与一次大语言模型调用，且 Suno 与 Udio 子集没有完全走同一管线，跨生成器比较时要记住这一不对齐。

**文本到音乐生成器 × 风格对齐提示：** 文本到音乐生成器指把文字描述转成波形的模型，风格对齐提示指从对应人类曲目提炼出的内容描述；前者负责产生待测音频，后者负责让 AI 与人类在风格上可比，二者搭配才能把检测对象从风格差异收窄为生成痕迹。

### 检测器吃进去的到底是波形还是频谱图

同样 10 秒片段，不同检测器看到的东西不同。波形路线直接看采样点振荡，M5 用轻量卷积验证任务是否可解，RawNet2 用 sinc 卷积、残差块与门控循环单元提取时序特征，优点是无频谱参数偏置，缺点是对相位与噪声敏感。频谱图路线先做短时傅里叶或梅尔滤波再取对数并做均值方差归一，ResNet18+Spec 用残差块与跨步下采样抓中长时频结构，ConvNeXt 用分阶段下采样增强局部建模，ViT 把频谱切块变成 token 做全局自注意力，AST 把对数梅尔切成时频块并用 Mixup 与 SpecAugment 增强，SpecTTTra 用谱时间分词压缩 token 数。

手工路线中，Q-SVM 用双谱幅度与相位的前 4 阶中心矩加梅尔倒谱均值方差及其一二阶差分共 14 维，Deezer 用反卷积周期性谱峰做频率指纹再接逻辑回归。商用 Ircam Amplify 与 Resemble AI 按黑盒调用，前者取 0.5 为阈值，后者只给真假标签。输入表示不同，决定了它们对高频伪影与变速的敏感点不同。

**对数梅尔频谱图 × 波形输入：** 对数梅尔频谱图是把声音按时间与频率展开并压缩幅度的二维表示，波形输入是直接使用采样点序列；前者让卷积与注意力模型看到谐波与频带结构，后者保留最原始振荡细节，二者分工对应不同检测器家族对伪影的不同敏感点。

### 本研究训练了什么，没有训练什么

需要先说清，本论文没有训练新的音乐生成器，生成器都是调用现成开源权重或商用接口。被训练的是 9 个开源检测器。每首歌贡献一个随机 10 秒片段，频谱模型在对数幅度或对数梅尔上做归一化，并用复制少数类加每次重抽新片段来缓解不平衡。M5、RawNet2 与 ResNet18+Spec 用 Adam、初始学习率 1×10-4、权重衰减 1×10-4、梯度裁剪 5、每 20 轮衰减 0.1、批量 32、验证损失 10 轮不降早停。AST 用 ImageNet 预训练的 ViT base-384 骨干、二值交叉熵、Adam、 warmup 后多步衰减，加 0.5 概率 Mixup 与时频掩码。

ConvNeXt、SpecTTTra 与 ViT 统一转 128×128 归一化对数梅尔，加 Mixup 与 SpecAugment，用 AdamW 与余弦调度、5 轮热身、裁剪 5。Q-SVM 在训练集统计下标准化后做分层五折网格搜 C 与 gamma。商用接口不训练，只记录返回分数与标签。原文没有报告随机种子方差与完整超参搜索轨迹，复现时缺的那一项是种子与划分细节，不能从模型名猜实现。

### 划分、采样与指标方向如何保证可比

默认划分按 70% 训练、20% 验证、10% 测试切分人类与 AI，推理随机抽 10 秒，30 秒结果另附。留一模型法把某一生成器全部留作测试，其余 AI 按 80% 与 20% 重分训练验证，人类保持与默认一致，同时报告误报与漏检。域外只测人类，报告判对为人类的准确率。共创与变换用默认最优检查点测，商用接口因成本只测 1990 首人类加 4500 首 AI 子集、200 首共创与每种变换 300 首。变换参数按原文交代：MP3 与 AAC 为 128 kbps，OGG 为 quality 3。

均衡在低中高 3 段随机选增强或衰减 6 dB；变调随机正负 1 或 2 半音并配合 0.9 或 1.1 倍速；响度归一到负 14 LUFS；高斯噪声标准差 0.025；PGD 用 M5 与 RawNet2 做代理、无穷范数、步长 0.001、界 0.005、10 步迭代。

指标方向是平衡准确率、精确率、召回率越高越好，误报率与漏检率越低越好。

**默认划分 × 留一模型法：** 默认划分指训练与测试包含同一批生成器，留一模型法指每次把一个生成器完全留作测试；前者量的是拟合能力，后者量的是跨模型泛化，二者组合才能区分记住已知指纹与抓住跨模型共性。

**误报率 × 漏检率：** 误报率是把人类判成 AI 的比例，漏检率是把 AI 判成人类的比例；前者关系平台误伤，后者关系漏网，二者与平衡准确率一起看才能判断阈值是偏保守还是偏激进。

### 干净条件下谁分得清，谁容易误伤

下表整理默认条件下的总体表现，比较问题是同一风格对齐下不同输入表示的上限差异，公平条件是同一切分与 10 秒采样，商用系统只测代表性子集。先看散点图的直觉：横轴是默认平衡准确率，纵轴是留一模型平均，右上角代表两边都强，气泡大小代表参数量。

> **看图路径：** 1. 横轴看默认平衡准确率，纵轴看留一模型平均平衡准确率；2. 找右上角的 ResNet18+Spec 与 AST，再找左下角的 Q-SVM 与 RawNet2；3. 注意气泡大小代表参数量，比较大模型是否一定更靠上

[![原论文 Figure 2：Detector performance under default and LOMO settings.](https://arxiv.org/html/2610.20310v1/lomo_vs_default.svg)](https://arxiv.org/html/2610.20310v1/lomo_vs_default.svg)

*论文图 2。原论文 Figure 2:：“Detector performance under default and LOMO settings.”。*

图中 ResNet18+Spec 与 AST 贴近右上角，ConvNeXt、ViT 与 SpecTTTra 紧随其后，M5 居中，RawNet2 与 Q-SVM 偏左下，说明默认高分不自动带来跨模型高分。下表把论文点名的总体数字列出，重点看频谱模型接近满分而波形与经典模型分化，商用系统一保守一冒进。

频谱路线中，ResNet18+Spec 与 AST 在默认条件下接近满分，ConvNeXt、ViT 与 SpecTTTra 为 99.5% 到 99.8%，误报与漏检可忽略。下表每行只对应一种测量：平衡准确率、精确率与召回率衡量不同方面，Ircam 的 71.1% 是召回率，与它的 98.6% 精确率一起说明预测偏保守。M5 是波形卷积且漏检低，RawNet2 同属波形路线、误报是主要代价；Deezer 使用轻量频域指纹，Q-SVM 使用经典统计特征。商用 Ircam 偏保守、Resemble 误报严重，两者均只测代表性子集，不能直接当成同规模全量训练的排名。

| 检测器 | 比较协议 | 测量指标 | 指标方向 | 报告值 |
| --- | --- | --- | --- | --- |
| M5 | 默认设置 | 平衡准确率 | 越高越好 | 94.3% |
| M5 | 默认设置 | 漏检率 | 越低越好 | 1.4% |
| RawNet2 | 默认设置 | 平衡准确率 | 越高越好 | 82.3% |
| RawNet2 | 默认设置 | 误报率 | 越低越好 | 31.6% |
| Deezer | 默认设置 | 平衡准确率 | 越高越好 | 97.6% |
| Q-SVM | 默认设置 | 平衡准确率 | 越高越好 | 68.9% |
| Ircam Amplify | 默认设置 | 精确率 | 越高越好 | 98.6% |
| Ircam Amplify | 默认设置 | 召回率 | 越高越好 | 71.1% |
| Ircam Amplify | 默认设置 | 漏检率 | 越低越好 | 28.9% |
| Resemble AI | 默认设置 | 平衡准确率 | 越高越好 | 46.9% |
| Resemble AI | 默认设置 | 误报率 | 越低越好 | 70.8% |

这些数字说明风格对齐后频谱模型在干净集上几乎满分，M5 保持 90% 以上但误报偏高，RawNet2 与 Q-SVM 明显分化，Deezer 轻量但有效，商用系统受自有训练分布与阈值影响。限制是默认包含全部生成器，跨生成器与域外结论不能从此表直接推广，分生成器结果显示商用系统在部分生成器上波动很大。

### 换生成器与换录音来源后还剩多少

跨模型与域外是本基准最有教学价值的部分。留一模型法下 ResNet18+Spec 与 AST 多数保持 95% 以上，说明时频表示抓住了跨模型可迁移的伪影。M5 尚可但波动，RawNet2 波动更大，Q-SVM 与 Deezer 在部分留出模型上不稳定。论文提到一种可能解释：MusicGen、MAGNeT 与 JASCO 共享授权曲库，Mustango 与 AudioLDM2 都与 AudioSet 谱系相关，训练数据重叠可能抬高了表面上的迁移。下表比较陌生人类录音下谁不冤枉人，条件是用默认最优检查点直接测 8672 首域外人类，指标是判为人类的准确率越高越好。

| 检测器 | 域外人类准确率 | 跨生成器表现 | 决策特点 | 适用条件与输入 |
| --- | --- | --- | --- | --- |
| Deezer 手工指纹 | 94.4% | 部分留出生成器漏检高 | 偏向判人类 | 针对反卷积谱峰，不依赖大规模训练 |
| AST | 79.8% | 跨生成器较强 | 神经模型中最好 | 梅尔滤波器组 Transformer |
| M5 | 75.8% | 相对稳 | 波形中较好 | 原始波形卷积 |
| 其余模型 | 低于 60% | 默认强不等于域外强 | 误报偏高 | 含 ResNet18+Spec 等默认满分模型 |

这 1 对比很有启发：默认满分的模型在域外人类上反而大量误报，而 Deezer 虽高但在部分留出生成器上漏检极高，提示其边界偏保守。限制是域外只有人类，没有域外 AI，因此只能看误报不能看完整平衡准确率，结论成立条件是时间隔离的 FMA 人类分布，换成其他年代与平台录音可能变化。

### 压缩、变速与对抗扰动分别打掉了谁

变换测试只改测试集 AI，报告漏检率，越低越好。比较问题是真实分发与有意绕过下指纹是否还在，条件是同一默认检查点加固定编解码与效果参数。下表聚焦论文点名的最具区分度的三处：MP3 对 AST 与 Ircam 的打击，变调变速对 Deezer 的打击，以及以波形模型为代理的 PGD 对源模型的打击与向频谱模型的弱迁移。

| 检测器 | MP3 漏检率 | 变调变速漏检率 | 对抗扰动表现 | 机理与输入特点 |
| --- | --- | --- | --- | --- |
| AST | 24.9% | 相对稳 | 向频谱迁移弱 | 频谱 Transformer，依赖高频细节 |
| Ircam Amplify | 63.6% | 脆弱 | 对压缩与扰动都脆弱 | 商用黑盒，阈值固定 |
| Deezer | MP3 下相对稳 | 93.6% | 频域指纹被错开 | 依赖周期性谱峰的手工指纹 |
| M5 / RawNet2 | 稳定性中等 | 中等 | 作为 PGD 代理源模型漏检大幅上升 | 波形输入，攻击直接有效 |
| ConvNeXt / ViT / ResNet18+Spec | 接近零 | 有十几个百分点退化 | 剩余漏检约 9 到 12% | 多尺度频谱建模，跨表示迁移弱 |

分机制看，MP3 重编码抹掉高频细节，依赖高频的 AST 与商用系统首当其冲，而多尺度卷积几乎不受影响。变调变速直接搬移谱峰位置，Deezer 依赖的周期性谱峰被错开，因而从个位数跳到 93.6%，这是全文最陡的退化。PGD 用波形代理模型生成，向频谱模型迁移弱，说明跨表示攻击不易，但源模型自身必然受影响。限制是 PGD 只用一组界与步数，换界、换迭代或针对频谱模型重做代理，迁移率会变。本表数值与单位依据论文 PDF。

### 频带遮挡与二阶谱看到什么伪影

论文用 4 阶巴特沃斯带阻滤波一次遮掉一个窄子带，看漏检率相对全频带基线的变化，峰值所在就是模型依赖的伪影频带。人声集上 SpecTTTra 在 2.4 到 4、5.6 到 7.2 与 8 到 12 kHz 敏感，ResNet18+Spec 在 5.6 到 7.2 kHz 最脆。Grad-CAM 显示人声激活聚在 5 到 8 kHz，该区少有人声基音，多为泛音与齿擦摩擦噪声，声码器相位重建易出错。器乐激活聚在 12 到 18 kHz，只有镲片等金属打击与高次泛音应出现，持续异常能量就成线索。波形模型则对低频更敏感。

架构相同数据相同但敏感带不同，说明偏置来自结构而非数据。下面这张 EnCodec 单位冲激重建谱把转置卷积的周期性调制可视化，读时先看整体衰减趋势，再找窄尖峰。

> **看图路径：** 1. 横轴看 0 到 24 kHz 频率，纵轴看归一化后的幅度分贝值；2. 找 6 kHz、8 kHz、14 kHz 附近突出的窄尖峰；3. 体会平坦输入经编解码后出现周期性波纹的含义

[![原论文 Figure 8：EnCodec impulse-response spectrum.](https://arxiv.org/html/2610.20310v1/impulse_encodec.svg)](https://arxiv.org/html/2610.20310v1/impulse_encodec.svg)

*论文图 8。原论文 Figure 8:：“EnCodec impulse-response spectrum.”。*

图中 0 到 24 kHz 范围内可见多处高于本底的等距窄峰，例如 6 kHz、8 kHz、14 到 16 kHz 附近，这是上采样核与步长不匹配留下的幅度波纹。丰富音乐会掩盖它，对幅度谱再做一次傅里叶变换的 2 阶谱能把周期变成清晰尖峰，而人类演奏呈弥散不规则分布。和声层面，30 首摇滚 AI 曲多在调内进行中插入半音偏离，例如 C#小调下出现 Eb、G 自然音与 Bb，或 E 小调中 A 与 B 被压半音到 Ab 与 Bb 并以 Gb 大调收尾，破坏解决感。演奏层面，AI 吉他出现 E2 到 E6 可演奏区外的音，钢琴出现超 10 个同时音的极端复调，管乐不顾换气，这些在人类谱面极少见。

**转置卷积上采样 × 二阶频谱分析：** 转置卷积上采样是声码器与神经压缩器中放大时间分辨率的常用操作，二阶频谱分析是对幅度谱再做一次傅里叶变换；前者可能留下周期性调制，后者把这种周期变成清晰尖峰，二者搭配把难以肉眼分辨的指纹变成可诊断特征。

### 哪些结论不能推广，哪些数要小心读

第一，默认满分只在包含全部 10 种生成器且随机 10 秒、同一切分下成立，换 30 秒会整体上升，换留一模型或域外会大幅分化，不能把默认数当部署保证。第二，商用接口只测子集且 Ircam 阈值固定 0.5，改变阈值或全量测试会移动精确召回平衡。第三，变换只加在测试集 AI 上，没有在训练中做伪影感知增强，因此脆弱性是无增强基线的脆弱，加增强后可能收窄。第四，留一迁移受训练数据血缘影响，共享曲库的生成器之间迁移偏高，不能全归因于频谱表示更本质。

第五，和声、演奏与歌词伪影来自 30 首摇滚与代表性案例的定性检查，没有全量统计显著性，把个别不自然和弦当成所有 AI 的指纹会以偏概全。第六，频带敏感性用带阻滤波测得，滤波本身引入边界效应，峰值位置是诊断线索而非因果证明。读数时注意百分点与相对百分比的区别，漏检从 5% 到 25% 是 20 个百分点，不能说成增长 400% 就暗示更严重，方向与基线要一起看。

### 复现第一步做什么，需要多少资源

复现分检测与伪影两条线。检测线先按 70%、20%、10% 切分人类与 AI，每首随机抽 10 秒 48 kHz 单声道，按波形或对数梅尔分别归一化，用复制加重新抽片段平衡类别，批量 32 训练 9 个开源检测器并以验证损失早停，再在默认、留一模型、域外人类与变换子集上按同一采样测平衡准确率、误报与漏检。论文报告单卡 H100、批量 32、8 个数据 workers 下每首推理耗时从 Deezer 的 0.063 毫秒、Q-SVM 的 0.069 毫秒、ViT 的 0.17 毫秒、M5 的 0.20 毫秒、SpecTTTra 的 0.28 毫秒、ConvNeXt 的 0.35 毫秒、ResNet18+Spec 的 1.11 毫秒、RawNet2 的 2.55 毫秒到 AST 的 4.25 毫秒，轻量模型适合做首层过滤，重模型适合做可疑复核。

伪影线先对 4 组 AI 做逐子带带阻并记录漏检变化，再对 EnCodec 48 kHz 模型送 1 秒单位冲激并看重建谱波纹与 2 阶谱尖峰，最后用和弦提取工具拉出摇滚进行并对照调式检查半音偏离。数据集规模达 361166 首、约 5296 小时，其中人类 19903 首、AI 179224 首，含 Suno 与 Udio 各 10000 首，共创 9887 首，压缩与声学处理各 53805 首，加性扰动 35870 首，域外 8672 首。关于可用性，论文正文给出 Hugging Face 数据集链接，但本次来源校验显示该链接暂时不可达，不能写成已公开可用，和弦工具与摇滚和声参考页为第三方链接，只证明论文提到它们。

什么时候值得尝试是当你有跨生成器与压缩变速的实际分发压力，并能接受先跑轻量指纹再跑重模型的级联成本，还需要补的验证是在新年份录音与新商用生成器上的误报率与校准曲线。

### 给新研究生的 takeaway 与下一步

记住三句话。第一，风格对齐后频谱模型在干净集上几乎满分，但这只是上限，跨模型、域外人类与变速压缩才是分水岭。第二，伪影是分层的：高频谱峰与 2 阶谱尖峰对应上采样指纹，和弦突转对应结构建模缺失，超音域与超复调对应物理约束缺失，假词与近似发音对应语言映射缺失。第三，设计要为绕过而做：训练加入压缩与变调变速增强、平衡频谱敏感度、显式加入结构与演唱线索，并用轻重级联兼顾吞吐与延迟。下表回看数据体量，提醒结论的成立条件是该分布与该采样，换分布要重测。

| 数据大类 | 曲目量 | 时长与类型 | 构成说明 | 覆盖意义 |
| --- | --- | --- | --- | --- |
| 基准总量 | 361,166 首 | 约 5,296 小时，人声与器乐混合 | 10 种生成器加变换与域外 | 规模与多样性上限 |
| 人类参考 | 9,983 首 / 9,920 首 | 人声与器乐，共 19,903 首 | Genius 人声与 Jamendo 器乐 | 风格对齐的参照 |
| AI 生成 | 179,224 首 | 10 种生成器 | 开源加商用 | 泛化测试的基础 |

容易误解的是把 2 阶谱尖峰当成所有 AI 的充分必要条件，实际上它只在含转置卷积上采样的管线明显，换架构或经变速后会减弱。把 Deezer 域外 94.4% 当成全面最强也是误读，它在部分留出模型上漏检极高，强在不误伤人类而非全能。把 PGD 弱迁移当成安全保证同样不对，换代理模型与界会改变结果。下一步建议先复现默认与留一两张表，再加一种关心的真实变换做小规模压力测试，最后挑一类伪影做成结构化特征接到轻量分类器。

<details>
<summary>📎 论文与评分元数据</summary>

排名：前50% | 文档类型：数据集与基准 | [arXiv 原文](https://arxiv.org/abs/2610.20310v1)

</details>

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。

- 评分规则：type-aware-v1

- 评分模型：muse-spark-1.3-contributor

- 评分请求协议：openai_responses

---

[← 返回 2026-10-16 语音/音乐/音频论文速递](/audio-paper-digest-blog/posts/2026-10-16/)
