---
title: "YuE: Scaling Open Foundation Models for Long-Form Music Generation"
date: 2026-05-03
draft: false
tags: [音乐生成, 音频大模型, 自回归模型, 长上下文, 预训练]
categories: [iclr-2026]
description: "音乐生成 | 8.0/10"
hiddenInHomeList: true
---

# 📄 YuE: Scaling Open Foundation Models for Long-Form Music Generation

#音乐生成 #音频大模型 #自回归模型 #长上下文 #预训练

🔥 **8.0/10** | 前25% | #音乐生成 | #自回归模型 | #音频大模型 #长上下文

学术质量 6.5/7 | 选题价值 2.0/2 | 复现加成 0.5 | 置信度 高


### 👥 作者与机构

- 第一作者：Ruibin Yuan (香港科技大学, MAP)
- 通讯作者：论文未明确指定单一通讯作者，但提供了多位联系人邮箱（按字母顺序排列）：Jiaheng Liu, Jian Yang, Wenhao Huang, Wei Xue, Xu Tan, Yike Guo。
- 作者列表：Ruibin Yuan (香港科技大学, MAP), Hanfeng Lin (香港科技大学, MAP), Shuyue Guo (MAP), Ge Zhang (MAP, 密歇根大学), Jiahao Pan (香港科技大学, MAP), Yongyi Zang, Haohe Liu (萨里大学, MAP), Yiming Liang (MAP), Wenye Ma (MBZUAI, MAP), Xingjian Du (罗切斯特大学, MAP), Xeron Du (MAP), Zhen Ye (香港科技大学), Tianyu Zheng (MAP), Zhengxuan Jiang (MAP), Yinghao Ma (MAP, 伦敦玛丽女王大学), Minghao Liu (2077AI, MAP), Zeyue Tian (香港科技大学, MAP), Ziya Zhou (香港科技大学, MAP), Liumeng Xue (香港科技大学, MAP), Xingwei Qu (MAP), Yizhi Li (MAP, 曼彻斯特大学), Shangda Wu (中央音乐学院, MAP), Tianhao Shen (MAP), Ziyang Ma (MAP, 上海交通大学, 南洋理工大学), Jun Zhan (复旦大学), Chunhui Wang (吉利), Yatian Wang (香港科技大学), Xiaowei Chi (香港科技大学), Xinyue Zhang (香港科技大学), Zhenzhu Yang (香港科技大学), Xiangzhou Wang (MAP), Shansong Liu (美团), Lingrui Mei (美团), Peng Li (香港科技大学), Junjie Wang (清华大学), Jianwei Yu (月之暗面), Guojian Pang (MAP), Xu Li (小红书), Zihao Wang (浙江大学, 卡内基梅隆大学), Xiaohuan Zhou (MAP), Lijun Yu (卡内基梅隆大学), Emmanouil Benetos (伦敦玛丽女王大学, MAP), Yong Chen (吉利), Chenghua Lin (曼彻斯特大学, MAP), Xie Chen (上海交通大学), Gus Xia (MBZUAI, MAP), Zhaoxiang Zhang (中国科学院), Chao Zhang (清华大学), Wenhu Chen (滑铁卢大学, MAP), Xinyu Zhou (月之暗面), Xipeng Qiu (复旦大学), Roger Dannenberg (卡内基梅隆大学, MAP)。
- 机构：主要来自多模态艺术投射 (Multimodal Art Projection, MAP) 联合体，合作机构包括香港科技大学、滑铁卢大学、卡内基梅隆大学、上海交通大学、清华大学、复旦大学、浙江大学、中国科学院、萨里大学、伦敦玛丽女王大学、曼彻斯特大学、MBZUAI、美团、吉利、月之暗面、小红书等。

### 💡 毒舌点评

亮点：论文的核心贡献在于系统性地将开源基础模型的能力边界推向了“五分钟完整歌曲生成”，其Dual-NTP和SPC等工程化创新有效解决了长程依赖与多轨混合建模的痛点，并在多项指标上追平了部分商业闭源系统，开源姿态意义重大。短板：尽管整体表现优异，但论文也坦承其在声学保真度（Vocal/Accomp Qual）和精细可控性上仍不及最强商业系统（如Suno V4），且其基于语义-声学融合的Tokenizer在信息保留上存在固有缺陷，可能限制了模型最终的音乐“质感”。

### 🔗 开源详情

- 代码：提供了GitHub仓库链接：`https://github.com/multimodal-art-projection/YuE`。
- 模型权重：在HuggingFace上提供了预训练模型检查点：`https://huggingface.co/collections/m-a-p/yue`。
- 数据集：使用了来自网络的约7万小时语音和65万小时音乐，均基于知识共享许可。论文未提及公开整个训练数据集，也未提供具体获取链接。
- Demo：提供了在线演示网站：`https://map-yue.github.io/`。
- 复现材料：在论文附录和正文（Section 3）中提供了详细的模型架构（附录C、D）、超参数、训练策略、数据混合比例和评估协议，复现信息充分。
- 引用的开源项目/模型：LLaMA2（基础架构），X-Codec（音频分词器），Vocos（上采样声码器），Whisper（评估WER），All-in-one（音乐分段），RMVPE（音高估计），Audioldm-eval、CLAP、CLaMP 3（自动评估指标）。

### 📌 核心摘要

这篇论文介绍了YuE（乐），一个用于长篇歌曲生成（歌词到歌曲）的开源基础模型系列。要解决的核心问题是现有开源模型无法可靠生成长达数分钟的、歌词对齐且音乐连贯的完整歌曲。其方法核心是：1) 轨道解耦下一个词预测：将人声和伴奏作为两个独立的token序列进行联合自回归建模，以克服混合信号中的掩蔽问题；2) 结构渐进条件：利用歌曲的自然段落结构（主歌、副歌等），将长文本与音频分段交错排列，以支持长上下文下的歌词跟随；3) 重新设计的音乐上下文学习：通过延迟激活的ICL策略，支持基于参考音频的风格迁移和双向创作，同时避免捷径学习。与已有方法相比，其新意在于首次在开源框架下，通过上述组合技术实现了时长和质量上接近商业系统的完整歌曲生成。主要实验结果表明，在人工评估中，YuE在平均偏好和音乐性上与Tiangong和Udio持平，优于Hailuo，但落后于Suno V4；它能生成持续时间更长（中位数显著高于其他模型）、人声音域更广（约27个半音，接近Suno V4）的歌曲。其实际意义在于为音乐AI研究和应用提供了一个强大的开源基线与工具。主要局限性在于声学细节质量（如音色、伴奏精细度）与顶尖商业系统仍有差距，且训练数据存在语言（以英语为主）和流派偏见。

### 🏗️ 模型架构

YuE是一个基于LLaMA2架构的、分两阶段的自回归语言模型框架。

1.  整体流程：输入歌词和文本指令 → Stage-1 LM生成音频token（codebook-0） → Stage-2 LM预测残差token（codebook 1-7） → 反量化和轻量级上采样模块生成最终波形。

2.  主要组件：
    *   文本分词器：复用LLaMA分词器（32,000词表），处理指令、风格标签和歌词。
    *   音频分词器：使用X-Codec，一个语义-声学融合的编解码器。它将波形转换为离散token序列。其核心是融合了一个1亿参数的HuBERT通用语义表示到编解码器潜空间中。模型采用12层RVQ，每层码本大小为1024，帧率50Hz。Stage-1仅使用底层的codebook-0（富含旋律和歌词等语义信息）进行建模。
       Stage-1 LM (7B参数)：这是核心生成模型。其关键设计是 轨道解耦。它不生成单一的混合音频token序列，而是同时预测两个交织的序列：人声音频token序列 `v1:T` 和伴奏音频token序列 `a1:T`。概率分解为 `P(v_t, a_t | v_{<t}, a_{<t}) = P(v_t | v_{<t}, a_{<t})  P(a_t | v_{≤t}, a_{<t})`。它还采用 结构渐进条件，将输入组织为：`[指令，风格标签，原始歌词] + [歌词片段1, 音频片段1] + [歌词片段2, 音频片段2] + ...`。这种交错结构使模型能更好地在长上下文中关联歌词与对应段落的音乐。
    *   Stage-2 LM (2B参数)：负责细节重建。给定Stage-1生成的所有codebook-0 token，它在一个自回归框架中预测所有8层codebook（0-7）的联合分布，但推理时固定codebook-0，仅生成codebook 1-7的残差token，以恢复完整的音频细节。
    *   轻量级上采样模块：将Stage-2生成的16kHz音频上采样至44.1kHz，采用基于Vocos的声码器实现。

3.  数据流：如图1所示，文本和音频token被处理，Stage-1生成包含人声和伴奏token的序列，经过重排后送入Stage-2进行残差建模，最终通过反量化和上采样得到波形。

![图1：系统总览](/audio-paper-digest-blog/images/iclr-2026/2026-05-03/hZy6YG2Ij8-0.png)
图1：YuE的两阶段生成流程图。Stage-1生成语义token（蓝色人声，橙色伴奏），Stage-2预测残差token（灰色）以丰富音频细节。

![图2：Stage-1架构详解](/audio-paper-digest-blog/images/iclr-2026/2026-05-03/hZy6YG2Ij8-1.png)
图2：Stage-1语言模型框架。展示了轨道解耦（虚线token对）、结构渐进条件（文本交错）和上下文学习（ICL音频token）的集成方式。

### 💡 核心创新点

1.  轨道解耦下一个词预测 (Dual-NTP)：
    *   是什么：在自回归生成时，每个时间步预测两个token：一个人声token `v_t` 和一个伴奏token `a_t`。
    *   之前局限：标准NTP用一个token表示混合音频，在复杂音乐（如金属）中，伴奏会掩蔽人声，导致语言信息丢失（高WER）。
    *   如何起作用：明确建模人声和伴奏两个源，使得模型能更好地分配能量，保持人声清晰度。概率分解使其易于在现有AR框架中实现。
    *   收益：如图7所示，在相同计算预算下，Dual-NTP比标准NTP收敛损失低约0.4；如图6所示，即使在人声-伴奏能量比（VAR）很低的困难情况下，使用源分离先验的vocal track重建WER增量也远小于混合track，证实了其鲁棒性。

2.  结构渐进条件 (SPC)：
    *   是什么：将完整的歌曲歌词和音频，按照其自然音乐结构（主歌、副歌等）分段，形成“文本指令+歌词-音频片段”交错的序列作为训练和输入格式。
    *   之前局限：简单的文本前缀条件在音频序列变长（>3K token）后迅速失效，导致歌词跟随失败。增加RoPE base或课程学习均无效。
    *   如何起作用：利用音乐本身的段落结构作为归纳偏置，将长序列建模问题分解为多个短序列（通常<30秒）的条件生成问题，每个片段内歌词与音频对齐。
    *   收益：如图8所示，SPC方法（7B模型）在150秒内将WER从70%降至约20%，显著优于Vanilla、课程学习和调整RoPE base（ABF）的方法，实现了稳定的长程歌词跟随。

3.  重新设计的音乐上下文学习 (ICL)：
    *   是什么：一种新型的ICL范式，将参考音频的30秒片段token直接置于SPC格式的数据前：`D_icl = A_ref ◦ D_spc`。采用延迟激活策略，在训练末期（annealing阶段）才引入少量ICL数据。
    *   之前局限：传统语音ICL（续写式）要求参考文本、限制内容方向（单向续写），且易导致内容纠缠和版权风险。
    *   如何起作用：允许模型在无参考文本的情况下，以参考音频为风格或内容起点，生成符合歌词的新音乐。延迟激活避免了模型过早学习“直接复制”参考音频的捷径，保持了创作能力。
    *   收益：如图9b所示，ICL（尤其是结合Classifier-Free Guidance后）在音乐性上显著优于仅用SPC，达到79%的胜率。记忆化测试（图10）表明，ICL生成的歌曲与训练集参考歌曲的相似度远低于已知重复歌曲集��Covers80），证明模型在重组而非抄袭。

### 🔬 细节详述

*   训练数据：使用了7万小时语音和65万小时具有知识共享许可的音乐。预训练数据混合比例为 条件:无条件 = 3:1， 音乐:语音 = 10:1。退火阶段仅使用SPC和ICL数据，比例 SPC:ICL = 2:1。
*   损失函数：采用标准的自回归语言建模损失（交叉熵损失）。Stage-1和Stage-2均采用此损失。Stage-2在训练时联合预测所有codebook的token序列。
*   训练策略：
    *   Stage-1：0.5B模型使用100B token预算；7B模型使用1.75T token预算，上下文长度16K，随后进行40B token的退火阶段。
    *   Stage-2：使用2T token，上下文长度8K。
    *   优化器：全局batch size为768，最大学习率3e-4，线性warmup，退火阶段学习率降至3e-5。
*   关键超参数：Stage-1 LM：7B参数（最终版）；Stage-2 LM：2B参数。音频分词器：X-Codec，50Hz帧率，8层RVQ（codebook 0-7），码本大小1024。
*   训练硬件：未说明具体GPU型号和数量，但提到使用大规模计算。
*   推理细节：使用采样和Classifier-Free Guidance (CFG) 来提高生成质量。ICL模式下，使用歌曲的副歌作为参考音频前缀。
*   正则化/稳定技巧：在音频上采样模块的训练中，使用了codebook dropout和少量高斯噪声以增强鲁棒性。

### 📊 实验结果

论文在多个维度上与商业系统（Suno V4, Udio, Hailuo, Tiangong）进行了对比。

主要评估指标与结果（表1）：
| 指标 | 类别 | Hailuo | Suno V4 | Tiangong | Udio | YuE |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| KL↓ | 分布匹配 | 0.756 | 0.620 | 0.708 | 0.503 | 0.372 |
| FAD↓ | 分布匹配 | 2.080 | 1.544 | 2.547 | 1.222 | 1.624 |
| CE↑ | 内容基础 | 7.350 | 7.474 | 7.421 | 7.112 | 7.115 |
| CU↑ | 内容基础 | 7.737 | 7.813 | 7.766 | 7.520 | 7.543 |
| PC↑ | 内容基础 | 6.793 | 6.601 | 6.060 | 6.626 | 6.280 |
| PQ↑ | 内容基础 | 8.132 | 8.120 | 8.220 | 7.803 | 7.894 |
| CLAP↑ | 对齐 | 0.265 | 0.265 | 0.244 | 0.310 | 0.118 |
| CLaMP 3↑ | 对齐 | 0.106 | 0.160 | 0.114 | 0.156 | 0.240 |
表1：不同音乐生成模型在多个自动指标上的比较。YuE在KL分布匹配和CLaMP 3对齐上表现最优。

人工评估关键结论（图3）：
*   总体偏好：YuE与Tiangong（49%胜率）和Udio（47%胜率）持平，优于Hailuo（64%胜率），但落后于Suno V4（胜率未知但低于50%）。
*   音乐性：YuE与Tiangong（51%胜率）和Udio（47%胜率）基本持平，明显优于Hailuo（70%胜率）。

![图3：人工评估结果](/audio-paper-digest-blog/images/iclr-2026/2026-05-03/hZy6YG2Ij8-2.png)
图3：YuE与四个商业系统在平均人类偏好（左）和音乐性（右）上的人工评估胜率对比。

其他关键分析结果：
*   人声敏捷性（图4）：YuE的人声音域中位数约为27个半音，与Suno V4接近，显著高于Hailuo和Tiangong（约20半音）。
*   生成时长（图5）：YuE生成的歌曲时长分布最广且最长，表明其处理长程依赖的能力更强。

![图4：人声音域分布](/audio-paper-digest-blog/images/iclr-2026/2026-05-03/hZy6YG2Ij8-3.png)
图4：不同系统生成歌曲的人声音域分布。YuE的音域中位数高，接近Suno V4。

![图5：歌曲时长分布](/audio-paper-digest-blog/images/iclr-2026/2026-05-03/hZy6YG2Ij8-4.png)
图5：不同系统生成歌曲的时长分布。YuE能生成最长的歌曲。

*   Token化与语言信息丢失（图6, 附录E图12）：分析了人声-伴奏能量比（VAR）与词错率（WER）的关系。发现混合音频token化后，WER随VAR降低急剧上升（图6实线与虚线蓝色部分）。而分离后的人声track重建WER变化平缓，证实了源分离先验的鲁棒性。不同流派中，金属音乐的-token化WER最高（附录图12）。

![图6：WER-VAR关系图](/audio-paper-digest-blog/images/iclr-2026/2026-05-03/hZy6YG2Ij8-5.jpg)
图6：混合轨道与人声轨道及其Tokenizer重建后的WER-VAR关系图。人声轨道的重建WER随VAR下降的增长更平缓。

*   消融实验 - Dual-NTP收敛速度（图7）：在0.5B模型、20B token训练预算下，Dual-NTP的训练损失比标准NTP低约0.4。

![图7：训练损失曲线](/audio-paper-digest-blog/images/iclr-2026/2026-05-03/hZy6YG2Ij8-6.jpg)
图7：标准NTP与Dual-NTP在相同训练预算下的损失曲线对比。Dual-NTP收敛更快、损失更低。

*   消融实验 - 歌词跟随能力（图8）：SPC方法（尤其结合7B模型缩放）在不同生成时长上均实现了远低于其他方法（Vanilla, Curriculum, ABF）的WER。

![图8：WER随时间变化](/audio-paper-digest-blog/images/iclr-2026/2026-05-03/hZy6YG2Ij8-7.jpg)
图8：不同条件设置下，WER随生成时长（秒）的变化。SPC（7B）模型在长时生成中保持最低WER。

*   消融实验 - 模型缩放与测试时技巧（图9）：模型从0.5B缩放到7B，音乐性和歌词跟随能力的胜率显著提升（图9a）。测试时，ICL+CFG的组合在音乐性上效果最好，胜率达0.79（图9b）。

### ⚖️ 评分理由

- 学术质量（6.5/7）：论文提出了一个完整、有效的开源系统来解决长篇歌曲生成这一复杂任务。Dual-NTP、SPC、重设计ICL三项核心技术相互配合，针对性地解决了多源信号建模、长上下文条件保持和可控生成等关键挑战。实验设计全面，包含了大量消融实验和深入分析（如VAR分析、记忆化测试），结论可信。主要扣分点在于，这些创新更多是针对特定问题的系统工程优化，而非提出全新的模型架构或学习范式；同时，在声学质量上未能超越所有商业对手。
- 选题价值（2.0/2）：论文选题处于AIGC和音乐科技的前沿，解决的是实现“人人皆可创作歌曲”愿景中的核心瓶颈。开源一个能与商业系统竞争的基础模型，对于学术研究、应用探索和生态建设具有极高的价值和影响力。
- 开源与复现加成（0.5/1）：论文提供了代码仓库、预训练模型权重、详细的训练配置、数据混合比例和评估协议，复现友好度很高。主要限制在于训练所需计算资源极大（万亿token级），且未公开训练数据集本身，这使得完全从头复现非常困难，因此给予正向但非满分加成。

---

[← 返回 ICLR 2026 论文分析](/audio-paper-digest-blog/posts/iclr2026-summary/)
