---
title: "YuE: Scaling Open Foundation Models for Long-Form Music Generation"
date: 2026-05-04
draft: false
tags: [音乐生成, 自回归模型, 大语言模型, 预训练, 开源工具]
categories: [iclr-2026]
description: "音乐生成 | 7.5/10"
hiddenInHomeList: true
---

# 📄 YuE: Scaling Open Foundation Models for Long-Form Music Generation

#音乐生成 #自回归模型 #大语言模型 #预训练 #开源工具

✅ **7.5/10** | 前25% | #音乐生成 | #自回归模型 | #大语言模型 #预训练

学术质量 5.5/7 | 选题价值 1.5/2 | 复现加成 1.0 | 置信度 高

### 👥 作者与机构

- 第一作者：未说明（论文标题下列出了多位作者，贡献部分将Ruibin Yuan列为“Lead”，但未明确第一作者身份）
- 通讯作者：未说明（论文中提供了多位联系人的邮箱，但未明确标注通讯作者）
- 作者列表：Ruibin Yuan (HKUST, Moonshot.ai, MAP), Hanfeng Lin (HKUST, MAP), Shuyue Guo (MAP), Ge Zhang (MAP, University of Michigan), Jiahao Pan (HKUST, MAP), Yongyi Zang (Independent), Haohe Liu (University of Surrey, MAP), Yiming Liang (MAP), Wenye Ma (MBZUAI, MAP), Xingjian Du (University of Rochester, MAP), Xeron Du (MAP), Zhen Ye (HKUST), Tianyu Zheng (MAP), Zhengxuan Jiang (MAP), Yinghao Ma (MAP, Queen Mary University of London), Minghao Liu (2077AI, MAP), Zeyue Tian (HKUST, MAP), Ziya Zhou (HKUST, MAP), Liumeng Xue (HKUST, MAP), Xingwei Qu (MAP), Yizhi Li (MAP, University of Manchester), Shangda Wu (Central Conservatory of Music, MAP), Tianhao Shen (MAP), Ziyang Ma (MAP, SJTU, NTU), Jun Zhan (Fudan University), Chunhui Wang (Geely), Yatian Wang (HKUST), Xiaowei Chi (HKUST), Xinyue Zhang (HKUST), Zhenzhu Yang (HKUST), Xiangzhou Wang (MAP), Shansong Liu (Meituan), Lingrui Mei (Meituan), Peng Li (HKUST), Junjie Wang (Tsinghua University), Jianwei Yu (Moonshot.ai), Guojian Pang (MAP), Xu Li (Xiaohongshu), Zihao Wang (Zhejiang University, Carnegie Mellon University)（注：机构信息根据论文“CONTRIBUTIONS AND ACKNOWLEDGMENTS”部分整理，MAP为Multimodal Art Projection的缩写）

#

### 💡 毒舌点评

亮点在于其“系统工程”做得非常扎实：从tokenizer选择、两阶段生成框架到针对音乐特性的三大技术改进（Dual-NTP， SPC， ICL），环环相扣，最终构建了一个可扩展、效果好的开源基础模型，并对社区全面开放，这极大地推动了领域的民主化。短板则是在音频的绝对声学质量（FAD）和自动评估指标与人类感知的对齐上还有提升空间，目前更像是一个强大的“概念验证”和“研究平台”，距离生成完美无瑕的、可直接商用的音乐产品，在音色细节和动态表现上或许还需要进一步的“打磨”。

#

### 🔗 开源详情

- 代码：提供GitHub仓库链接：https://github.com/multimodal-art-projection/YuE
- 模型权重：提供HuggingFace集合链接：https://huggingface.co/collections/m-a-p/yue，包含不同规模的模型。
- 数据集：训练数据为收集的网络数据，论文未提供数据集下载链接，但明确了许可（Creative Commons）和收集方法。
- Demo：提供在线演示页面：https://map-yue.github.io/
- 复现材料：论文附录C、D、F、I详细说明了tokenizer、模型架构、评估协议和测试用prompt。训练超参数、数据配比等在Section 3.1中给出。
- 引用的开源项目：
    - LLaMA2架构（Touvron et al., 2023b）
    - X-Codec（Ye et al., 2024）作为音频tokenizer
    - Vocos（Siuzdak, 2023）用于音频上采样
    - Whisper（用于WER评估）
    - audioldm-eval（用于KL、FAD评估）
    - CLAP, CLaMP 3（用于对齐评估）
    - RMVPE（用于音高估计）
    - All-in-one（Kim & Nam, 2023）用于音乐结构分割
    - ByteCover2（Du et al., 2022）用于记忆化测试
    - PaSST（Koutini et al., 2021）作为自动评估的骨干网络

### 📌 核心摘要

该论文旨在解决长形式歌词到歌曲生成的挑战，即从歌词直接生成包含人声和伴奏的完整歌曲（最长5分钟）。其核心方法是构建名为YuE（乐）的开源基础模型家族，它基于LLaMA2架构，在数万亿token上进行训练。模型采用两阶段生成：第一阶段使用Track-Decoupled NTP（双token预测）来分别建模人声和伴奏轨道，并采用Structural Progressive Conditioning（结构化渐进条件）来处理长上下文下的歌词对齐；第二阶段使用更小的语言模型预测残差token以提升音质。此外，论文重新设计了适用于音乐的In-Context Learning，支持双向内容创作和风格克隆。与已有方法相比，新在：1）首个能生成完整歌曲的开源模型；2）通过Dual-NTP显式解耦人声/伴奏，提升了复杂音乐场景下的鲁棒性；3）SPC机制有效解决了长序列生成中歌词跟随失败的问题。主要实验结果（表1）显示，YuE在多个自动指标上具有竞争力（如CLaMP 3得分最高），人类评估（图3）表明其在整体偏好和音乐性上超越Hailuo，与Tiangong、Udio相当，并在生成时长（图5）和人声音域范围（图4）上表现突出。该工作的实际意义在于为音乐生成研究和应用提供了强大的开源基座。主要局限性在于：其音频保真度（FAD）并非最优，且自动评估指标（如CLAP）与人类感知的相关性有待提高，表明在声学细节建模上仍有改进空间。

#

### 🏗️ 模型架构

YuE是一个基于自回归语言模型的两阶段生成框架，旨在将歌词转换为完整的歌曲。其整体架构如图所示：

![Stage-2语言模型残差建模流程：输入第一阶段输出的codebook-0序列，自回归预测codebook 1-7的残差token以恢复声学细节](/audio-paper-digest-blog/images/iclr-2026/2026-05-04/hZy6YG2Ij8-1.png)

![Stage-1语言模型多任务训练框架：Lyrics2Song中文本token（白方块）与人声token（蓝）/伴奏token（橙）交错排列实现SPC，并展示Text2Speech、Uncond. Mix Music、Uncond. Demix Music等任务格式](/audio-paper-digest-blog/images/iclr-2026/2026-05-04/hZy6YG2Ij8-7.png)

组件与数据流：
1.  音频分词器（Audio Tokenizer）：采用X-Codec，一种语义-声学融合编解码器。它将波形转换为离散token。关键设计是使用其底层语义丰富的codebook-0（来自Residual VQ-VAE的第一层）作为第一阶段模型的输入和输出。这保留了旋律和歌词内容信息，同时简化了建模任务。
2.  文本分词器（Text Tokenizer）：复用LLaMA的tokenizer，处理指令、歌词和歌曲结构标签。
3.  第一阶段语言模型（Stage-1 LM）：核心生成模块，参数规模为7B。它采用Track-Decoupled NTP策略（见图2），在每个时间步`t`输出两个token：一个人声token `vt` 和一个伴奏token `at`。建模为条件概率 `P(vt, at | v<t, a<t)`。它在文本token和codebook-0音频token上进行自回归训练。该阶段使用了Structural Progressive Conditioning，将长歌曲文本（歌词+结构标签）与对应的短音频片段（由结构分析工具分段）交错排列，形成训练序列（如图2中`Lyrics2Song`所示）。
4.  第二阶段语言模型（Stage-2 LM）：一个更小的（2B参数）模型，负责残差建模。给定第一阶段输出的codebook-0序列，它预测所有K=8个codebook（0-7）的token。训练时，它先看到完整的codebook-0序列，然后对每帧预测8个codebook的token。推理时，codebook-0被第一阶段输出固定，仅自回归生成codebook 1-7，以细化音频质量，恢复声学细节。
5.  后处理：包括token解重排和上采样模块，将模型生成的16kHz音频上采样至44.1kHz以提升感知质量。

图2详细展示了Stage-1 LM的工作流程。`Lyrics2Song`是主要的训练任务，文本条件（歌词、结构标签如`S`(主歌)、`E`(副歌)）与对应的短音频片段（人声token为蓝色，伴奏token为橙色）交错排列。虚线框标出了`Dual-NTP`的设计。`ICL Audio Tokens`（绿色）展示了重设计的音乐上下文学习格式，仅用一段参考音频（A_ref）作为前缀，无需文本转录。`Text2Speech`、`Uncond. Mix Music`等展示了多任务训练中的其他任务。

### 💡 核心创新点

1.  Track-Decoupled Next-Token Prediction (Dual-NTP)：
    *   是什么：在自回归建模中，为每个时间步显式定义并分别预测人声token和伴奏token。
    *   先前局限：标准NTP将混合音频用一个token表示，在伴奏强（如金属乐）时，人声信息易丢失，歌词可懂度下降。
       如何起作用：将联合概率分解为 `P(vt, at) = P(vt)  P(at|vt)`，实现了在单次前向传播中联合建模双轨道，无需顺序流水线。
    *   收益：显著提升了训练收敛速度（图7），并增强了在低人声-伴奏比（低VAR）场景下的鲁棒性，保持歌词对齐能力（图6）。

2.  Structural Progressive Conditioning (SPC)：
    *   是什么：利用音乐固有的结构先验（主歌、副歌等），将长歌词文本和对应的短音频片段交错排列作为上下文。
    *   先前局限：简单的文本前缀条件在长序列（>3K token）下失效，导致模型无法生成长段落内对齐的歌词。
    *   如何起作用：将整个歌曲的生成任务分解为一系列条件生成子任务，每个子任务在较短的上下文（<30s）内完成歌词-音频对齐。
    *   收益：使模型能生成长达5分钟的歌曲，并在整个时长内保持极低的歌词跟随错误率（图8），远优于课程学习和增大RoPE基线等方法。

3.  Redesigned Music In-Context Learning (ICL)：
    *   是什么：一种新的音乐ICL格式：`D_icl = A_ref ◦ D_spc`，即直接以一段30秒的参考音频（无人工文本转录）作为前缀，后接SPC格式的训练数据。
    *   先前局限：语音领域的ICL（文本参考+文本输入+音频参考+音频生成）不适用于音乐（无需文本转录、需要双向创作、易导致内容纠缠）。
    *   如何起作用：仅用音频作为条件，激活模型的风格克隆、语音转换和内容扩展能力。采用延迟激活策略，仅在训练退火阶段引入少量ICL数据，防止模型过早学会“复制”参考音频而丧失创造性。
    *   收益：实现了高质量的风格迁移、语音克隆和双向内容创作（如从短旋律扩展成完整歌曲），且测试时使用ICL能显著提升生成音乐的音乐性（图9b）。

### 🔬 细节详述

- 训练数据：
    - 规模与来源：使用7万小时语音和65万小时来自网络的创作共用许可音乐。数据混合比例：条件:无条件=3:1，音乐:语音=10:1。
    - 预处理：通过Google Search检索歌词。实施了字符串匹配过滤，排除含明确版权声明的数据。
- 损失函数：标准自回归语言建模损失（交叉熵），即最大化下一个token的预测概率。Stage-2的损失如式(7)所示。
- 训练策略：
    - 优化器与学习率：全局batch size 768。最大学习率3e-4，线性预热。退火阶段学习率降至3e-5。
    - 课程学习：退火阶段仅使用SPC和ICL数据，比例2:1。
    - 模型规模：最终发布模型为7B Stage-1 + 2B Stage-2。预训练使用了0.5B、2B、7B等不同规模。
- 关键超参数：
    - 上下文窗口：7B Stage-1模型使用16K token上下文，Stage-2使用8K。
    - 音频分词：X-Codec，50Hz帧率，12层RVQ（使用前8层），每层codebook大小1024。
    - 特殊token：`<SOA>`, `<EOA>`, `<EOD>`, `<stage 1>`, `<stage 2>`等，用于界定序列结构（见表5）。
- 训练硬件：论文中未明确说明GPU型号和数量，但提及训练token预算高达1.75T，计算量巨大。
- 推理细节：
    - 解码策略：采用采样（可能带温度）和Classifier-Free Guidance (CFG)。
    - 测试时技巧：使用ICL（以歌曲副歌作为参考前缀）和CFG能显著提升音乐性（图9b）。
- 正则化：未明确说明，但提到了在Stage-2训练时使用teacher forcing。

### 📊 实验结果

主要与四个闭源系统（Suno V4, Udio, Hailuo, Tiangong）进行对比。

人类评估（图3）：在40名研究人员（含专家）进行的A/B测试中，YuE在整体偏好上与Tiangong（57%胜率）和Udio（53%胜率）相当，明显超越Hailuo（70%胜率），但落后于Suno V4（29%胜率）。

![图3：YuE与四个闭源系统的人类评估对比图](/audio-paper-digest-blog/images/iclr-2026/2026-05-04/hZy6YG2Ij8-3.png)

自动评估（表1）：YuE在KL散度（0.372）上最优，在FAD（1.624）上优于Hailuo和Tiangong，略逊于Udio和Suno V4。在CLaMP 3得分（0.240）上最高。

| Metric (↑/↓) | Hailuo | Suno V4 | Tiangong | Udio | YuE |
| :--- | :---: | :---: | :---: | :---: | :---: |
| Distrib. Match (↓) | 0.756 | 0.620 | 0.708 | 0.503 | 0.372 |
| FAD (↓) | 2.080 | 1.544 | 2.547 | 1.222 | 1.624 |
| Content Based (↑) | | | | | |
| CE | 7.350 | 7.474 | 7.421 | 7.112 | 7.115 |
| CU | 7.737 | 7.813 | 7.766 | 7.520 | 7.543 |
| PC | 6.793 | 6.601 | 6.060 | 6.626 | 6.280 |
| PQ | 8.132 | 8.120 | 8.220 | 7.803 | 7.894 |
| Alignment (↑) | | | | | |
| CLAP | 0.265 | 0.265 | 0.244 | 0.310 | 0.118 |
| CLaMP 3 | 0.106 | 0.160 | 0.114 | 0.156 | 0.240 |

歌曲时长与人声音域：YuE生成歌曲的时长中位数最长（图5），人声音域范围（中位数约27半音）与Suno V4等顶级系统相当（图4）。


消融实验：
- Dual-NTP有效性：在相同预算下，Dual-NTP的训练损失比标准NTP低约0.4（图7），且在低VAR场景下，混合音轨重建的WER增量（ΔWER）远高于解耦后的人声轨（图6）。
- SPC与歌词跟随：在0.5B模型上，SPC方法在30-150秒内的WER显著优于Vanilla（文本前置）、Curriculum和ABF（增大RoPE基线）方法。将模型扩展到7B进一步将150秒时的WER从约70%降至约20%（图8）。
- 模型规模的影响：人类评估显示，从0.5B到7B，模型在音乐性和歌词跟随能力上均持续提升（图9a）。
- 测试时技巧：ICL+CFG的组合在音乐性A/B测试中胜率最高（0.79），远优于单独使用SPC（0.21）（图9b）。

图6展示了Vocal-to-Accompaniment Ratio (VAR)与词错误率(WER)的关系。原始人声轨和混合音轨的WER相似，但混合音轨经tokenizer重建后WER大幅增加，尤其在低VAR时差距拉大。而人声轨重建后的WER增量小得多，证明了源分离先验的有效性。

![不同系统主观评估雷达图：YuE（红）与Udio、Suno V4、Hailuo、Tiangong在AccompQual、VocalQual、SongStruct、VocalAccompComp、MelodicAttrac、MusicArr六个维度上的对比](/audio-paper-digest-blog/images/iclr-2026/2026-05-04/hZy6YG2Ij8-6.png)


![图9：模型规模与测试时技巧对人类评估胜率的影响图](/audio-paper-digest-blog/images/iclr-2026/2026-05-04/hZy6YG2Ij8-8.png)

图9(a)显示，随着模型从0.5B扩展到7B，音乐性和歌词跟随能力的A/B测试胜率显著提升。图9(b)显示，测试时使用ICL比仅用SPC更能提升音乐性，而结合CFG后效果最佳。

### ⚖️ 评分理由

- 学术质量（5.5/7）：论文技术贡献扎实，解决了音乐生成中的多个实际痛点，实验设计科学且全面，结果可信。主要不足在于：1）对比的闭源系统均为商业产品，其具体版本、训练数据和技术细节未知，因此“超越”的结论有一定相对性；2）部分自动评估指标（如CLAP）与人类偏好相关性差，反映了评估方法的挑战；3）音频的绝对保真度（FAD）仍有提升空间。
- 选题价值（1.5/2）：方向非常热门且重要，开源模型对社区贡献巨大，应用前景广泛（音乐创作、游戏、短视频配乐等）。选题具有很高的价值。
- 开源与复现加成（+1.0）：开源工作极其完善，从代码、模型到文档和复现指南一应俱全，为研究社区提供了巨大便利，复现加成达到满分。

#

---

[← 返回 ICLR 2026 论文分析](/audio-paper-digest-blog/posts/iclr2026-summary/)
