---
title: "YuE: Scaling Open Foundation Models for Long-Form Music Generation"
date: 2026-05-04
draft: false
tags: [音乐生成, 自回归模型, 音频大模型, 预训练, 开源工具]
categories: [iclr-2026]
description: "音乐生成 | 7.5/10"
hiddenInHomeList: true
---

# 📄 YuE: Scaling Open Foundation Models for Long-Form Music Generation

#音乐生成 #自回归模型 #音频大模型 #预训练 #开源工具

✅ **7.5/10** | 前25% | #音乐生成 | #自回归模型 | #音频大模型 #预训练

学术质量 7.0/7 | 选题价值 2.0/2 | 复现加成 0.5 | 置信度 高


### 👥 作者与机构

- 第一作者：未说明（论文以作者列表形式呈现，未明确标注第一作者。从核心贡献列表看，Ruibin Yuan是Lead，可能为第一作者，但论文正文未明确声明）。
- 通讯作者：未说明（论文未提供明确的通讯作者信息）。
- 作者列表：Ruibin Yuan, Hanfeng Lin, Shuyue Guo, Ge Zhang, Jiahao Pan, Yongyi Zang, Haohe Liu, Yiming Liang, Wenye Ma, Xingjian Du, Xeron Du, Zhen Ye, Tianyu Zheng, Zhengxuan Jiang, Yinghao Ma, Minghao Liu, Zeyue Tian, Ziya Zhou, Liumeng Xue, Xingwei Qu, Yizhi LI, Shangda Wu, Tianhao Shen, Ziyang Ma, Jun Zhan, Chunhui Wang, Yatian Wang, Xiaowei Chi, Xinyue Zhang, Zhenzhu Yang, Xiangzhou Wang, Shansong Liu, Lingrui Mei, Peng Li, Junjie Wang, Jianwei Yu, Guojian Pang, Xu Li, Zihao Wang, Xiaohuan Zhou, Lijun Yu, Emmanouil Benetos, Yong Chen, Chenghua Lin, Xie Chen, Gus Xia, Zhaoxiang Zhang, Chao Zhang, Wenhu Chen, Xinyu Zhou, Xipeng Qiu, Roger Dannenberg, Jiaheng Liu, Jian Yang, Wenhao Huang, Wei Xue, Xu Tan, Yike Guo。
- 机构列表（根据贡献者信息提取）：
    - Multimodal Art Projection (MAP)（多位作者所属机构）。
    - 香港科技大学（HKUST）。
    - University of Surrey。
    - MBZUAI。
    - University of Rochester。
    - Queen Mary University of London。
    - 2077AI。
    - 浙江大学。
    - Carnegie Mellon University。
    - University of Manchester。
    - Central Conservatory of Music。
    - 南京大学。
    - 北京航空航天大学（BUAA）。
    - 复旦大学。
    - 吉利汽车（Geely）。
    - 上海交通大学（SJTU）。
    - 南洋理工大学（NTU）。
    - 美团（Meituan）。
    - 清华大学。
    - 小红书（Xiaohongshu）。
    - Moonshot.ai。
    - 中国科学院。
    - University of Waterloo。
    - Monash University (推断自Gus Xia的主页，但论文中仅列出MBZUAI/MAP)。
    - 注意：论文机构信息分散，以上为基于作者条目的不完全列表。

### 💡 毒舌点评

亮点：在“歌词到歌曲”这一商业系统激烈角逐的赛道上，首次推出了一个高质量的开源基础模型，其“双轨解耦预测”（Dual-NTP）和“结构化渐进条件”（SPC）技术方案设计精巧，直击长曲生成中人声被伴奏淹没和歌词遗忘的核心痛点，实验对比也做得非常扎实。短板：尽管整体评估分数很高，但论文坦承在“人声质量”和“伴伴质量”的主观听感上仍与Suno V4存在差距，这主要受限于其语义-声学融合编码器（X-Codec）的声学细节保留能力，表明在音色保真度上仍有提升空间。

### 🔗 开源详情

- 代码：提供GitHub仓库链接（https://github.com/multimodal-art-projection/YuE）。
- 模型权重：提供HuggingFace模型集合链接（https://huggingface.co/collections/m-a-p/yue）。
- 数据集：论文描述了数据来源（网络挖掘的CC许可音乐、搜索获取的歌词）和规模，但未提供已处理好的数据集下载链接。数据涉及版权，因此提供获取方式而非直接共享是合理的。
- Demo：提供在线演示页面（https://map-yue.github.io/）。
- 复现材料：在附录和正文中提供了详细的训练设置（数据配比、学习率、批量大小、优化器、上下文长度）、模型架构（Stage-1, Stage-2参数量）、分词器细节和评估协议。
- 引用的开源项目：
    - 架构：LLaMA (Touvron et al., 2023a; 2023b)。
    - 音频分词器：X-Codec (Ye et al., 2024)。
    - 音频上采样：Vocos (Siuzdak, 2023)。
    - 评估工具：audioldm_eval，CLAP，CLaMP 3。
    - 音高检测：RMVPE。
    - 歌曲结构分析：All-in-one (Kim & Nam, 2023)。

### 📌 核心摘要

本文旨在解决高难度的“歌词到歌曲”长曲音乐生成问题。核心方法是提出名为YuE的开源基础模型家族，其架构基于LLaMA，采用两阶段自回归语言模型：Stage-1利用双轨解耦预测（Dual-NTP）将人声与伴奏的token建模分离，克服了标准单轨预测在复杂伴奏下丢失语言信息的问题；结构化渐进条件（SPC）通过将歌词与歌曲结构（如主歌、副歌）分段交错输入，解决了长上下文中歌词对齐失效的难题。此外，论文重新设计了音乐上下文学习（ICL）范式，支持双向内容创作和风格克隆。实验表明，YuE在人类评估中与Tiangong、Udio等商业系统表现相当，在音乐性和歌词跟随能力上超越了Hailuo。在自动指标上，YuE在KL散度（0.372）上优于所有基线，并在CLaMP3得分（0.240）上取得最高分。其实际意义在于为社区提供了首个能生成5分钟高质量、歌词对齐歌曲的开源替代方案。主要局限性是生成音频的声学质量（保真度）与顶尖商业系统相比仍有差距，且训练数据存在语言和流派偏见。

### 🏗️ 模型架构

YuE是一个两阶段自回归语言模型（AR LM）框架，整体架构如下图所示。

![YuE两阶段生成框架示意图](/audio-paper-digest-blog/images/iclr-2026/2026-05-04/hZy6YG2Ij8-0.png)

1. 组件概述：
*   音频分词器：使用X-Codec，将波形转换为离散token序列。它采用语义-声学融合策略，包含8层残差向量量化（RVQ），码本大小为1024，帧率为50Hz。底层码本（codebook-0）富含语义信息。
*   文本分词器：复用LLaMA分词器，处理指令、风格、歌词和结构标签。
*   Stage-1语言模型：核心生成模型。输入为文本token和codebook-0的音频token，采用双轨解耦预测，为每个时间步输出一对token（`v_t`人声，`a_t`伴奏）。模型架构为7B参数的LLaMA。
*   Stage-2语言模型：残差建模器。输入为Stage-1生成的codebook-0序列，预测其余7层codebook（1-7）的残差token，以恢复音频细节。模型参数为2B。

2. 数据流与关键设计：
*   输入：一段带歌词的歌曲指令。Stage-1 LM接收由指令、风格标签、歌曲结构标签和歌词文本交错排列的文本token序列。
*   Stage-1生成过程：在结构化渐进条件（SPC）下，模型根据输入的文本条件和已生成的音频token，自回归地同时生成人声token序列`v1:T`和伴奏token序列`a1:T`。生成过程遵循`P(vt, at | v<t, a<t)`，实现了人声与伴奏的联合上下文建模。
*   Stage-2细化过程：将Stage-1输出的codebook-0序列`x(0)1:T`输入Stage-2 LM。该模型首先处理完整的codebook-0序列以获取全局语义结构，然后逐帧预测`{codebook-1到codebook-7}`的残差token，最终通过解码器重建高保真波形。
*   上下文学习：在推理时，可输入一段参考音频（如副歌）的token作为前缀，与待生成的歌词交错排列，以实现风格克隆或内容创作。

3. 关键设计动机：
*   Dual-NTP：动机是标准NTP将人声与伴奏的混合信号强行用单个token表示，在伴奏能量远高于人声（低VAR）时会导致语言信息严重丢失。Dual-NTP通过显式分离两个信号源，使模型能分别关注它们的特征，尤其提升了歌词可懂度。
*   SPC：动机是直接将整首歌词作为前缀的条件化方法，在音频token超过3000-6000个后完全失效。SPC利用音乐的段落结构，将长序列分解为多个“歌词-音频”配对的短段，使每个结构段内的上下文长度保持可控，从而维持了长曲中的歌词跟随能力。

### 💡 核心创新点

1.  双轨解耦预测：针对歌词到歌曲任务中人声与伴奏混合信号建模的挑战，提出在每个时间步分别生成人声和伴奏的离散token。这解决了标准单轨预测在声学复杂（如金属乐）场景下，伴奏能量压制人声导致歌词丢失的问题。实验表明，该方法在训练损失上显著低于单轨模型（如图7所示），并提升了歌词可懂度（图6）。
2.  结构化渐进条件：针对长曲生成中文本条件失效的问题，提出利用歌曲的固有结构（主歌、副歌等），将条件输入和音频生成过程分段交错进行。这避免了过长的上下文窗口导致模型“遗忘”初始歌词，是确保生成5分钟歌曲仍能紧扣歌词的关键。
3.  重新设计的音乐上下文学习：针对语音ICL在音乐领域的局限（需文本转录、单向限制、内容纠缠），提出将一段参考音频的token直接与待生成数据交错的格式。通过延迟激活策略（仅在训练退火阶段引入少量ICL数据），实现了风格/人声克隆与歌词控制的解耦，支持更灵活的内容创作（如跨语言、跨风格转换）。
4.  开源基础模型与训练范式：首次开源了能生成完整歌曲（含人声与伴奏）的大规模基础模型家族（YuE-7B等）。在超过1.75万亿token的规模上进行预训练，并采用了多任务（TTS、歌曲生成、无条件音乐生成）学习范式，证明了在开放数据上训练高质量音乐生成模型的可行性。

### 🔬 细节详述

- 训练数据：
    - 语音数据：7万小时。
    - 音乐数据：从网络挖掘的65万小时采用知识共享许可证的音乐。
    - 预训练数据混合：条件:无条件 = 3:1，音乐:语音 = 10:1。
    - 退火阶段数据：仅使用SPC和ICL数据，SPC:ICL = 2:1。
- 损失函数：标准的自回归语言模型损失（交叉熵损失）。Stage-2的损失为`LStage2 = -Σ log p(x(0:7)_t | x(0:7)_<t)`，建模所有codebook的联合分布。
- 训练策略：
    - 优化器/学习率：全局批量大小为768。最大学习率为3e-4，采用线性预热。退火阶段学习率退至3e-5。
    - 训练规模：0.5B模型在100B token上训练；进行缩放实验时，7B模型在1.75T token上训练，上下文长度16K。Stage-2模型在2T token上训练，上下文长度8K。
    - 多任务学习：Stage-1预训练包含TTS、歌词到歌曲、无条件音乐生成多个任务。
- 关键超参数：
    - Stage-1 LM：最大版本为7B参数。
    - Stage-2 LM：2B参数。
    - 音频分词器：X-Codec，8层RVQ，码本大小1024，50Hz帧率。
    - 上下文窗口：Stage-1为16K，Stage-2为8K。
- 训练硬件：论文中未说明具体GPU/TPU型号和数量。
- 推理细节：
    - 解码策略：自回归采样。
    - Classifier-Free Guidance (CFG)：在推理时使用，增强条件控制。
    - 音乐ICL：使用歌曲副歌的30秒片段作为参考音频前缀，以增强音乐性和稳定性。
- 正则化/稳定训练技巧：在训练ICL数据时采用延迟激活策略，仅在训练末期（退火阶段）引入少量ICL数据（约100亿token），以避免模型过早学会“捷径学习”（直接复制参考音频），从而保留创造性。

### 📊 实验结果

主要对比基线：Suno V4, Udio, Hailuo, Tiangong（均为2025年1月时的商业系统）。

1. 人类评估（图3）：
YuE在“整体偏好”上与Tiangong（胜率49%对50%）和Udio（胜率47%对53%）表现持平，明显优于Hailuo（胜率76%对17%），但落后于Suno V4（胜率29%对71%）。在“音乐性”维度上表现类似。这表明YuE达到了前沿商业系统的竞争水平。

2. 自动评估指标（表1）：

| Metric      | Hailuo | SunoV4 | Tiangong | Udio | YuE   |
|-------------|--------|--------|----------|------|-------|
| KL↓         | 0.756  | 0.620  | 0.708    | 0.503| 0.372 |
| FAD↓        | 2.080  | 1.544  | 2.547    | 1.222| 1.624 |
| CE↑         | 7.350  | 7.474  | 7.421    | 7.112| 7.115 |
| CU↑         | 7.737  | 7.813  | 7.766    | 7.520| 7.543 |
| PC↑         | 6.793  | 6.601  | 6.060    | 6.626| 6.280 |
| PQ↑         | 8.132  | 8.120  | 8.220    | 7.803| 7.894 |
| CLAP↑       | 0.265  | 0.265  | 0.244    | 0.310| 0.118 |
| CLaMP 3↑    | 0.106  | 0.160  | 0.114    | 0.156| 0.240 |

注：KL和FAD越低越好，其他指标越高越好。
关键发现：YuE在分布匹配指标KL上显著优于所有基线。在语义对齐指标CLaMP3上取得最高分，但在CLAP上得分较低，论文解释为CLAP在歌唱内容上预训练不足。

3. 歌曲时长与音域（图4，图5）：
YuE生成的歌曲时长最长，中位数显著高于其他系统，展示了其处理长期依赖的能力。在歌唱音域（声乐灵活性）上，YuE（中位数~27半音）接近Suno V4，优于Hailuo和Tiangong。

4. 消融实验：
*   Dual-NTP vs. 单轨NTP：在相同0.5B模型和20B token预算下，Dual-NTP的训练损失比单轨NTP低约0.4（图7），收敛更快。
*   歌词跟随能力：在0.5B模型上对比不同条件化方法，SPC在所有时长（30s-150s）的WER（字错率）上均显著优于Vanilla、Curriculum和ABF方法。将模型缩放至7B参数，WER从约70%降至约20%（图8）。
*   模型缩放：从0.5B到7B，人类评估的音乐性和歌词跟随胜率均有显著提升（图9a）。
*   测试时技巧：ICL方法在音乐性上显著优于SPC；结合CFG后（ICL+CFG）胜率最高（图9b）。
*   记忆化测试：通过与训练样本的相似度比较，证明模型并未简单记忆，而是进行新内容组合（图10）。

5. 生成时长分布：提供了不同系统生成音频时长的箱线图，显示YuE能生成最长的音频片段。

![生成歌曲时长分布对比图](/audio-paper-digest-blog/images/iclr-2026/2026-05-04/hZy6YG2Ij8-4.png)

### ⚖️ 评分理由

- 学术质量：6.0/7：论文提出了多个有针对性的技术创新（Dual-NTP, SPC, ICL重设计），逻辑自洽。实验设计全面，包含与多个SOTA商业系统的对比、详尽的消融实验和定性分析（记忆化测试、涌现能力）。数据和评估协议描述清晰。主要不足是部分技术细节（如Stage-2的cross-conditioning具体实现）可进一步展开，且与Suno V4的差距在结果中未被充分讨论。
- 选题价值：2.0/2：解决长曲歌词到歌曲生成这一高价值、高难度问题，填补了开源领域的空白，影响力明确，应用前景广阔。
- 开源与复现加成：0.5/1：论文明确提供了代码仓库（GitHub）和模型权重（HuggingFace），并详细说明了数据配比、训练超参数、评估协议等关键信息，复现友好度很高。但未提供完整的训练脚本和预处理代码细节。

#

---

[← 返回 ICLR 2026 论文分析](/audio-paper-digest-blog/posts/iclr2026-summary/)
