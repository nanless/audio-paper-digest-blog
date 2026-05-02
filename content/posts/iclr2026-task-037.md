---
title: "ICLR 2026 - 音乐生成 论文列表"
date: 2026-05-03
draft: false
tags: ["音乐生成"]
categories: [iclr-2026]
description: "共 9 篇 ICLR 2026 音乐生成 方向论文"
hiddenInHomeList: true
---

# ICLR 2026 - 音乐生成

共 **9** 篇论文

[← 返回 ICLR 2026 总览](/audio-paper-digest-blog/posts/iclr2026-summary/)

---

| 排名 | 论文 | 评分 | 分档 |
|------|------|------|------|
| 🥇 | [Generative Adversarial Post-Training Mitigates Reward Hackin](/audio-paper-digest-blog/posts/2026-05-03-generative-adversarial-post-training-mitigates) | 8.5分 | 前25% |
| 🥈 | [YuE: Scaling Open Foundation Models for Long-Form Music Gene](/audio-paper-digest-blog/posts/2026-05-03-yue-scaling-open-foundation-models-for-long-form) | 8.0分 | 前25% |
| 🥉 | [Steering Autoregressive Music Generation with Recursive Feat](/audio-paper-digest-blog/posts/2026-05-03-steering-autoregressive-music-generation-with) | 7.5分 | 前25% |
| 4. | [Discovering and Steering Interpretable Concepts in Large Gen](/audio-paper-digest-blog/posts/2026-05-03-discovering-and-steering-interpretable-concepts) | 7.5分 | 前25% |
| 5. | [Latent Fourier Transform](/audio-paper-digest-blog/posts/2026-05-03-latent-fourier-transform) | 7.5分 | 前25% |
| 6. | [LLM2Fx-Tools: Tool Calling for Music Post-Production](/audio-paper-digest-blog/posts/2026-05-03-llm2fx-tools-tool-calling-for-music-post) | 7.0分 | 前25% |
| 7. | [SongEcho: Towards Cover Song Generation via Instance-Adaptiv](/audio-paper-digest-blog/posts/2026-05-03-songecho-towards-cover-song-generation-via) | 7.0分 | 前25% |
| 8. | [Automatic Stage Lighting Control: Is it a Rule-Driven Proces](/audio-paper-digest-blog/posts/2026-05-03-automatic-stage-lighting-control-is-it-a-rule) | 6.5分 | 前50% |
| 9. | [SyncTrack: Rhythmic Stability and Synchronization in Multi-T](/audio-paper-digest-blog/posts/2026-05-03-synctrack-rhythmic-stability-and-synchronization) | 6.0分 | 前50% |

---

## 📋 论文详情

### 🥇 [Generative Adversarial Post-Training Mitigates Reward Hacking in Live Human-AI Music Interaction](/audio-paper-digest-blog/posts/2026-05-03-generative-adversarial-post-training-mitigates)

🔥 **8.5/10** | 前25% | #音乐生成 | #强化学习 | #对抗学习 #实时处理

👥 **作者与机构**

- 第一作者：Yusong Wu (Mila - Quebec Artificial Intelligence Institute, Université de Montréal)
- 通讯作者：Natasha Jaques (University of Washington), Cheng-Zhi Anna Huang (Massachusetts Institute of Technology) （论文标注两位资深作者贡献均等）
- 作者列表：
    - Yusong Wu (Mila, Université de Montréal)
    - Stephen Brade (Massachusetts Institute of Technology)
    - Aleksandra Teng Ma (Georgia Institute of Technology)
    - Tia-Jane Fowler (University of Washington)
    - Enning Yang (McGill University)
    - Berker Banar (Independent Researcher)
    - Aaron Courville (Mila, Université de Montréal, Canada CIFAR AI Chair)
    - Natasha Jaques (University of Washington)
    - Cheng-Zhi Anna Huang (Massachusetts Institute of Technology)

#

💡 **毒舌点评**

亮点：论文直击“奖励黑客”在创意交互任务中的痛点，提出的GAPT方法设计简洁有效，并通过严谨的“模型-模型”和真人音乐家用户研究进行了令人信服的验证，尤其是用户对“适应速度”和“能动性”的显著好评很有说服力。短板：方法本质上是为特定序列生成任务“打补丁”，其对抗训练框架与经典GAIL一脉相承，创新上限受限于应用场景；此外，真人用户研究（12人）的规模偏小，虽然做了统计显著性检验，但对结论的普适性仍有影响。

#

🔗 **开源详情**

- 代码：提供GitHub仓库链接：https://github.com/lukewys/realchords-pytorch
- 模型权重：论文未明确提及是否公开预训练好的模型权重文件。
- 数据集：使用了公开数据集（Hooktheory, POP909, Nottingham, Wikifonia），论文中提��了相关引用和链接。
- Demo：提供音频示例页面：https://realchords-GAPT.github.io
- 复现材料：论文附录提供了极其详尽的模型架构、训练细节、超参数、评估指标和结果（包括多轮随机种子的平均值和标准差），复现指引非常充分。承诺发布训练基础设施和模型检查点。
- 引用的开源项目：论文依赖的开源项目包括：用于RL的PPO算法实现、Transformer架构（LLaMA风格）、旋转位置编码（RoPE）等，但未在开源详情部分特别列出。

📌 **核心摘要**

本文研究在实时音乐即兴伴奏（旋律到和弦）中，强化学习（RL）后训练导致输出多样性下降的“奖励黑客”问题。核心方法提出生成对抗后训练（GAPT），在策略优化过程中，协同训练一个判别器来区分策略生成的和弦轨迹与真实数据分布，并将判别器给出的“真实度”作为对抗奖励加入目标函数。该对抗奖励与基于一致性的任务奖励形成互补：利用后者得分高的简单重复模式会被判别器识别为不真实而受惩罚，反之亦然。为稳定训练，引入两阶段自适应的判别器更新策略。主要实验结果：在固定旋律、与学习到的旋律智能体交互、以及12位专家音乐家参与的实时用户研究中，GAPT相比纯RL基线（ReaLchords），在保持甚至提升和声一致性（note-in-chord ratio） 的同时，显著提高了输出多样性（Vendi Score），并获得了用户关于适应速度（p<0.05） 和控制能动性（p<0.05） 的更高评价。该工作验证了轻量级对抗训练是缓解序列生成模型RL后训练中奖励黑客问题的有效实用方法。其局限性在于主要在音乐伴奏任务验证，方法的通用性有待进一步探索。

| 评估设置 | 系统 | 测试集-和声↑ | 测试集-多样性↑ | 测试集外-和声↑ | 测试集外-多样性↑ |
| :--- | :--- | :--- | :--- | :--- | :--- |
| 固定旋律模拟 | Online MLE | 0.368 | 29.491 | 0.362 | 16.401 |
| | ReaLchords | 0.484 | 20.968 | 0.475 | 8.417 |
| | GAPT w/o Adv. | 0.476 | 20.814 | 0.447 | 8.034 |
| | GAPT (ours) | 0.497 | 26.645 | 0.470 | 11.295 |
| | Ground Truth | 0.727 | 27.922 | 0.784 | 10.962 |

![图4：在固定旋律交互设置下的评估结果](icassp-img://FXm5U16vxD/3.png)
图4：GAPT在多样性和和声性上取得了更好的平衡（Pareto前沿）。(a)(b) 显示在测试集和分布外数据集上，GAPT同时保持了高多样性与高和声一致性。(c) t-SNE可视化显示GAPT生成的和弦序列覆盖了更广的嵌入空间。

#

---

### 🥈 [YuE: Scaling Open Foundation Models for Long-Form Music Generation](/audio-paper-digest-blog/posts/2026-05-03-yue-scaling-open-foundation-models-for-long-form)

🔥 **8.0/10** | 前25% | #音乐生成 | #自回归模型 | #预训练

👥 **作者与机构**

- 第一作者：Ruibin Yuan (香港科技大学, Multimodal Art Projection)
- 通讯作者：论文中未明确标注单一通讯作者。在“CONTRIBUTIONS AND ACKNOWLEDGMENTS”部分，列出了多位负责不同工作的作者，但未明确区分通讯作者角色。
- 作者列表：Ruibin Yuan (香港科技大学, Multimodal Art Projection), Hanfeng Lin (香港科技大学, Multimodal Art Projection), Shuyue Guo (Multimodal Art Projection), Ge Zhang (Multimodal Art Projection, University of Michigan), Jiahao Pan (香港科技大学, Multimodal Art Projection), Yongyi Zang (独立), Haohe Liu (University of Surrey, Multimodal Art Projection), Yiming Liang (Multimodal Art Projection), Wenye Ma (MBZUAI, Multimodal Art Projection), Xingjian Du (University of Rochester, Multimodal Art Projection), Xeron Du (Multimodal Art Projection), Zhen Ye (香港科技大学), Tianyu Zheng (Multimodal Art Projection), Zhengxuan Jiang (Multimodal Art Projection), Yinghao Ma (Multimodal Art Projection, Queen Mary University of London), Minghao Liu (2077AI, Multimodal Art Projection), Zeyue Tian (香港科技大学, Multimodal Art Projection), Ziya Zhou (香港科技大学, Multimodal Art Projection), Liumeng Xue (香港科技大学, Multimodal Art Projection), Xingwei Qu (Multimodal Art Projection), Yizhi Li (Multimodal Art Projection, University of Manchester), Shangda Wu (中央音乐学院, Multimodal Art Projection), Tianhao Shen (Multimodal Art Projection), Ziyang Ma (Multimodal Art Projection, 上海交通大学, 南洋理工大学), Jun Zhan (复旦大学), Chunhui Wang (吉利汽车), Yatian Wang (香港科技大学), Xiaowei Chi (香港科技大学), Xinyue Zhang (香港科技大学), Zhenzhu Yang (香港科技大学), Xiangzhou Wang (Multimodal Art Projection), Shansong Liu (美团), Lingrui Mei (美团), Peng Li (香港科技大学), Junjie Wang (清华大学), Jianwei Yu (Moonshot.ai), Guojian Pang (Multimodal Art Projection), Xu Li (小红书), Zihao Wang (浙江大学, 卡内基梅隆大学), Xiaohuan Zhou (Multimodal Art Projection), Lijun Yu (卡内基梅隆大学), Emmanouil Benetos (Queen Mary University of London, Multimodal Art Projection), Yong Chen (吉利汽车), Chenghua Lin (University of Manchester, Multimodal Art Projection), Xie Chen (上海交通大学), Gus Xia (MBZUAI, Multimodal Art Projection), Zhaoxiang Zhang (中国科学院), Chao Zhang (清华大学), Wenhu Chen (University of Waterloo, Multimodal Art Projection), Xinyu Zhou (Moonshot.ai), Xipeng Qiu (复旦大学), Roger Dannenberg (卡内基梅隆大学, Multimodal Art Projection), Jiaheng Liu (南京大学, Multimodal Art Projection), Jian Yang (Multimodal Art Projection), Wenhao Huang (Multimodal Art Projection), Wei Xue (香港科技大学), Xu Tan (Moonshot.ai, Multimodal Art Projection), Yike Guo (香港科技大学)。

💡 **毒舌点评**

亮点：它终于让“从歌词直接生成五分钟完整带伴奏歌曲”这件事，在开源世界里变得可能了，Dual-NTP设计巧妙地解决了人声被伴奏“淹没”的经典痛点，且所有技术细节和模型权重近乎“全裸”开源，复现门槛大幅降低。短板：在最考验综合音乐品味的“整体音乐性”主观评测上，它依然不敌Suno V4这个“六边形战士”，而且其音频保真度（如音色质感、乐器细节）受限于当前分阶段建模和tokenizer方案，与顶级商业系统的差距在高保真聆听时较为明显。

🔗 **开源详情**

- 代码：提供GitHub仓库链接：https://github.com/multimodal-art-projection/YuE
- 模型权重：提供HuggingFace模型集合链接：https://huggingface.co/collections/m-a-p/yue，包含预训练的Stage-1和Stage-2模型。
- 数据集：论文使用了从网络挖掘的CC许可音乐和语音，但未提供数据集本身的公开下载链接。语言和流派分布已在附录中提供。
- Demo：提供在线演示网站：https://map-yue.github.io/
- 复现材料：论文详细说明了模型架构（Stage-1 & Stage-2）、训练数据规模与混合比例、训练超参数（学习率、批量大小、训练token数）、分阶段训练流程、评估协议，并提供了消融实验设置。附录C和D进一步详细描述了Tokenizer和Stage-2模型的具体实现。
- 引用的开源项目：论文中依赖的开源项目包括：LLaMA (LLaMA2架构), X-Codec (音频Tokenizer), Whisper (评估用), audioldm_eval (自动评估), CLAP & CLaMP 3 (对齐评估), ByteCover2 (记忆化测试), Vocos (上采样器), Qwen2Audio (生成伪标签，见附录G提及)。

📌 **核心摘要**

1.  解决什么问题：解决从歌词生成完整、高质量、长时长（最长5分钟）歌曲的挑战。现有开源模型在生成时长、歌词对齐、音乐连贯性和人声与伴奏的协调性方面存在严重不足。
2.  方法核心：提出了一个基于自回归语言模型的两阶段生成框架YuE。第一阶段（Stage-1）使用Track-Decoupled Next-Token Prediction (Dual-NTP)，为每个时间步同时生成人声和伴奏两个独立的token，并采用Structural Progressive Conditioning (SPC)，利用歌曲的结构先验（如主歌、副歌）交错排列文本和音频token，以解决长上下文下的歌词跟随问题。第二阶段（Stage-2）使用一个较小的模型预测残差音频token，以提升音质。
3.  新在哪里：相比传统单token混合建模（易导致人声信息丢失）或串行生成（易导致同步问题和误差累积），Dual-NTP实现了对人声和伴奏的联合建模且保持架构简洁。SPC策略通过将长歌曲分解为多个结构段落进行条件化，有效扩展了模型的上下文长度。此外，重新设计了适用于音乐的上下文学习（ICL）框架，支持风格克隆、双向生成等，并采用延迟激活策略避免模型陷入简单的“复制”模式。
4.  主要实验结果：人工评估显示，YuE在多项音乐性指标上与Udio和Tiangong持平，显著优于Hailuo，但在整体上仍稍逊于Suno V4。在歌声灵活性（音域范围约27个半音）和生成时长（可长达数百秒）上，它与顶尖商业系统相当或更优。消融实验表明，Dual-NTP相比标准NTP能更快收敛（损失低约0.4），SPC在长时歌词跟随上（WER）显著优于传统方法（例如在150秒时，SPC-7B的WER约20%，而Vanilla方法已接近100%）。模型缩放（0.5B→7B）带来了音乐性和歌词跟随能力的显著提升。
5.  实际意义：提供了第一个强大的开源音乐生成基础模型，降低了长歌曲生成技术的研究和应用门槛，有望推动音乐创作工具的民主化和相关领域的学术研究。
6.  主要局限性：与最先进的闭源系统（如Suno V4）在整体音乐性和声学细节保真度上仍有差距；训练数据主要为英语歌曲，多语言和多文化音乐的表现有待进一步验证；生成的音频质量受限于两阶段的tokenizer-语言模型框架，可能不如端到端的扩散模型细腻。

---

### 🥉 [Steering Autoregressive Music Generation with Recursive Feature Machines](/audio-paper-digest-blog/posts/2026-05-03-steering-autoregressive-music-generation-with)

✅ **7.5/10** | 前25% | #音乐生成 | #特征学习 | #可控生成 #激活空间操控

👥 **作者与机构**

- 第一作者：Daniel Zhao（加州大学圣地亚哥分校）
- 通讯作者：未说明（论文未明确标注通讯作者）
- 作者列表：Daniel Zhao（加州大学圣地亚哥分校）、Daniel Beaglehole（加州大学圣地亚哥分校）、Taylor Berg-Kirkpatrick（加州大学圣地亚哥分校）、Julian McAuley（加州大学圣地亚哥分校）、Zachary Novack（加州大学圣地亚哥分校）

💡 **毒舌点评**

论文的亮点在于将特征学习（RFM）与激活空间引导相结合，为可控音乐生成提供了一种无需微调、计算高效且概念可解释的新范式。其短板是控制精度高度依赖于探针训练数据（SYNTHEORY）的质量和覆盖范围，且对于时序性强的复杂音乐概念（如和弦进行、节拍）控制能力有限，实际音乐制作中的应用边界尚未充分验证。

🔗 **开源详情**

- 代码：论文明确提供了代码仓库链接：`https://github.com/astradzhao/music-rfm`。
- 模型权重：论文中未提及是否公开训���好的RFM探针权重或经过引导的模型变体。
- 数据集：探针训练依赖于SYNTHEORY数据集（第三方）。评估使用了公开的SongDescriber和MusicBench数据集。论文未提及是否提供经过处理的特定数据子集。
- Demo：论文提到在项目页面 (`https://musicrfm.github.io/controllable-music-rfm/`) 提供了一个交互式演示，可播放部分音频样本。
- 复现材料：论文提供了非常详细的复现信息：附录A描述了核岭回归，附录B详述了超参数搜索空间与调参流程，附录C提供了完整的消融实验结果，附录E列出了时间调度函数的具体公式，附录F提供了引导过程的伪代码。这些信息对复现研究至关重要。
- 引用的开源项目/工具：论文依赖并引用了MusicGen（`Copet et al., 2024`）、EnCodec（`Défossez et al., 2022`）、Essentia音频分析库（`Bogdanov et al., 2013`）、librosa（`McFee & et al., 2023`）以及CLAP模型（`Wu et al., 2023`）。

📌 **核心摘要**

本文针对自回归音乐生成模型缺乏细粒度、可解释控制能力的问题，提出了MusicRFM框架。该方法核心是利用递归特征机（RFM）分析冻结预训练音乐模型（MusicGen）的内部梯度，提取出与特定音乐属性（如音符、和弦、速度）对齐的可解释“概念方向”。在推理时，通过轻量级前向钩子将这些方向注入模型的残差流，从而实现对生成过程的实时引导，无需对基础模型进行微调或进行逐步优化。与现有方法相比，MusicRFM的新颖性在于：1）首次将RFM应用于音频生成领域的控制；2）引入了基于层重要性的剪枝（Top-K、指数加权）机制；3）设计了动态时变调度（线性、正弦、随机门控）和多方向同步/交错控制。实验表明，该方法能有效平衡控制精度与生成质量：例如，将目标音符的分类准确率从0.23提升至0.82，同时文本提示对齐度（CLAP分数）仅下降约0.02。该工作的实际意义在于为音乐生成提供了一种高效、可解释的控制工具。主要局限性包括：探针依赖均值池化，丢失了时序信息，导致对序列依赖性强的音乐概念控制效果一般；控制精度受限于探针在合成数据上的训练质量，向真实音乐数据的迁移性有待深入验证。

关键实验结果表格：

表1：分类性能对比 (Section 4)
| 模型 | 音符 | 音程 | 音阶 | 和弦 | 进行 | 节拍 | 速度 | 平均 |
| :--- | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| MusicRFM (均值池化) | 0.850 | 0.975 | 0.956 | 0.984 | 0.943 | 0.900 | 0.985 | 0.942 |
| RFM (末词池化) | 0.734 | 0.743 | 0.546 | 0.866 | 0.811 | 0.771 | 0.959 | 0.776 |
| 线性探针 | 0.761 | 0.618 | 0.158 | 0.834 | 0.725 | 0.729 | 0.972 | 0.685 |
| Syntheory FFN | 0.866 | 0.972 | 0.905 | 0.989 | 0.901 | 0.905 | 0.965 | 0.929 |

表2：单方向控制定量指标 (摘要与Section 5.1)
| 控制类型 | 指标 (η₀=0.60) | MusicRFM-only | Prompt + RFM | Prompt-only |
| :--- | :--- | :---: | :---: | :---: |
| 音符 (Notes) | 探测准确率 (Acc.↑) | 0.824 | 0.952 | 0.436 |
| | CLAP分数 (↑) | 0.303 | 0.329 | 0.342 |
| 和弦 (Chords) | 探测准确率 (Acc.↑) | 0.344 | 0.347 | 0.267 |
| | CLAP分数 (↑) | 0.326 | 0.333 | 0.331 |

---

### 4. [Discovering and Steering Interpretable Concepts in Large Generative Music Models](/audio-paper-digest-blog/posts/2026-05-03-discovering-and-steering-interpretable-concepts)

✅ **7.5/10** | 前25% | #音乐生成 | #稀疏编码 | #可解释性 #模型评估

👥 **作者与机构**

请基于当前提供的论文内容尽量完整提取作者与机构信息，要求：
1. 明确标注第一作者（如论文可判断），否则写"未说明"
2. 明确标注通讯作者（如论文可判断），否则写"未说明"
3. 列出能确认的作者姓名及其所属机构（大学、实验室、公司）
4. 机构信息尽量具体到实验室或部门；如果文本里没有，就写到能确认的层级
5. 禁止猜测机构信息；无法确认时明确写"未说明"

输出格式示例：
- 第一作者：张三（清华大学计算机系）
- 通讯作者：李四（Google DeepMind）
- 作者列表：张三（清华大学计算机系）、李四（Google DeepMind）、王五（未说明）

- 第一作者：Nikhil Singh（Dartmouth College）
- 通讯作者：Pattie Maes（MIT）
- 作者列表：Nikhil Singh（Dartmouth College）、Manuel Cherep（MIT）、Pattie Maes（MIT）

💡 **毒舌点评**

用 2-3 句话做有信息量的点评，必须同时包含至少 1 个亮点和 1 个短板。可以犀利，但不要空泛嘲讽，不要只喊"很强"或"很水"。

这篇论文首次将稀疏自编码器应用于音乐生成模型的解释性研究，并建立了一个从特征发现到自动标注再到生成控制的完整流水线，为理解黑盒模型提供了新工具。然而，其自动标注高度依赖CLAP和第三方分类器，当面对无法被现有标签体系覆盖的“涌现”概念时，该方法的可解释性上限和命名可靠性存疑。

🔗 **开源详情**

请只根据论文内容或当前提供文本中的链接信息总结开源情况，禁止编造仓库、stars、平台热度。尽量覆盖：
- 代码：是否提供代码仓库链接；若无，写“论文中未提及代码链接”
- 模型权重：是否提到公开权重；若无，写“未提及”
- 数据集：是否公开、如何获取；若无，写“未提及”
- Demo：是否提供在线演示；若无，写“未提及”
- 复现材料：是否给出训练细节、配置、检查点、附录说明
- 论文中引用的开源项目：列出了哪些依赖的开源工具/模型？
- 如果论文中未提及，明确说明“论文中未提及开源计划”

- 代码：论文中提及了项目主页“musicdiscovery.media.mit.edu”，但未明确提供具体的代码仓库链接。
- 模型权重：未提及公开训练好的SAE模型权重。
- 数据集：使用了公开数据集MusicSet，但未说明本文产出数据的获取方式。
- Demo：未提及在线演示。
- 复现材料：论文提供了部分关键超参数（扩展因子、稀疏度、层选择、过滤阈值）和硬件信息，但缺少SAE训练的具体超参数（如学习率、batch size）。
- 论文中引用的开源项目：MusicGen模型、Essentia音频分析库、CLAP模型、Gemini多模态模型。
- 论文中未提及开源计划。

📌 **核心摘要**

用 5-8 句话总结这篇论文，必须覆盖：
1. 要解决什么问题
2. 方法核心是什么
3. 与已有方法相比新在哪里
4. 主要实验结果如何（尽量带数字；没有就写未提供）。如果论文中有实验结果表格，必须用 Markdown 表格完整列出关键数据；如果有实验结果相关图表，描述图表内容
5. 实际意义是什么
6. 主要局限性是什么

本文旨在解决大型自回归音乐生成模型（如MusicGen）内部机制不透明、难以解释和控制的问题。核心方法是构建一个无监督的概念发现流水线：使用稀疏自编码器从模型的残差流激活中提取可解释特征，然后通过多模态大模型和预训练音频分类器自动为这些特征生成标签，最后验证这些特征能否用于引导生成。与先前主要依赖已知概��进行探测的方法不同，本文的方法无需预设标签，能无监督地发现模型内部编码的、可能超越传统音乐理论的模式。主要实验结果表明：1）该方法能发现从“硬核铁克诺”到“电子哔哔声”等已知和新兴的音乐概念；2）深度层特征通常比浅层更可解释（图3）；3）大规模模型（MGL）的特征组织比小模型（MGS）更具层次性；4）15%-35%的发现特征可用于控制生成，且效果可通过CLAP评分和人耳听辨验证（表2，图5）。该工作的实际意义在于为音乐理论研究和可控AI创作提供了一种实证工具。主要局限性包括：自动标注的准确性受限于CLAP等模型的能力；对特征共激活的分析较初步；以及未研究文本条件下的特征发现。

---

### 5. [Latent Fourier Transform](/audio-paper-digest-blog/posts/2026-05-03-latent-fourier-transform)

✅ **7.5/10** | 前25% | #音乐生成 | #扩散模型 | #信号处理 #自监督学习

👥 **作者与机构**

- 第一作者：Mason Long Wang (MIT CSAIL)
- 通讯作者：未说明
- 作者列表：Mason Long Wang (MIT CSAIL), Cheng-Zhi Anna Huang (MIT CSAIL)

💡 **毒舌点评**

亮点在于它为音乐生成模型开辟了一个新颖且直观的控制维度——潜在空间频率轴，允许用户像使用均衡器一样“调整”音乐结构，这比传统的离散层级或语义轴控制更精细、连续。短板是，虽然展示了潜在频率与音乐属性（如流派、和弦）的关联，但这种对应关系仍是经验性的，缺乏一个统一的理论框架来预测和控制，离“完全解耦”还有距离。

🔗 **开源详情**

- 代码：提供代码仓库链接 https://github.com/maswang32/latentfouriertransform/
- 模型权重：论文中未提及公开预训练模型权重。
- 数据集：使用了公开的MTG-Jamendo、GTZAN和Maestro数据集。
- Demo：提供了包含定性示例的项目网站 https://masonlwang.com/latentfouriertransform/
- 复现材料：提供了所有模型架构、训练配置（学习率、批量、步数、优化器）、超参数（附录A），以及用于条件生成、融合、可解释性实验和隔离实验的完整代码。

📌 **核心摘要**

1. 要解决什么问题：当前的音乐生成模型虽然可以进行粗细粒度的条件生成，但缺乏一个直接、连续的方式来指定和保留参考音乐中不同时间尺度（如缓慢的和弦进行与快速的颤音）的模式。基于离散token的层级控制难以解释和独立操作特定尺度。
2. 方法核心是什么：提出Latent Fourier Transform框架，将扩散自编码器与潜在空间的傅里叶变换结合。在训练时，对音频编码得到的潜在时间序列在傅里叶域进行随机掩码，使解码器学会从频率掩蔽的潜在表示中重建音乐。在推理时，用户可以通过一个频域掩码选择性地保留参考音乐在特定潜在频率（对应时间尺度）上的模式，用于生成变体或融合两首音乐。
3. 与已有方法相比新在哪里：与仅操作可听音频频谱的传统均衡器不同，LATENTFT操作的是“潜在谱”。与基于离散token层级或语义属性（如音高、响度）的控制方法相比，它首次提供了基于“时间尺度”轴的连续、可解释控制。与事后对预训练表示进行频域滤波的方法相比，其训练时的频率掩码策略是关键，确保了表示在频域的可操作性。
4. 主要实验结果如何：在MTG-Jamendo数据集上：
   - 条件生成：LATENTFT（MLP编码器版本）在响度相关性（0.815）、节奏相似度（0.963）、音色失真（0.376）、和声距离（0.079）和FAD（0.337）上均优于所有基线。
   - 混合任务：LATENTFT（UNet编码器版本）在各项指标上也表现最优，如FAD（1.357）显著优于ILVR（2.696）和跨频谱合成（2.447）。
   - 用户研究：在29名音乐家参与的盲听测试中，LATENTFT在“音频质量”和“混合能力”两项上获得的偏好票数均显著高于其他系统（Cross Synthesis, ILVR, VampNet）。
   - 消融实验：移除训练时的频率掩码会导致FAD从0.349大幅恶化至5.341，证明了该训练策略的必要性。

![LATENTFT框架图](icassp-img://ogMxCjdCCq/1.png)
图2：LATENTFT框架示意图。左部为训练流程：音频经编码器得到潜在序列z，进行傅里叶变换得到潜在谱Z，经随机掩码M后逆变换得到掩蔽潜在序列z_masked，用于条件扩散模型重建输入。右部为推理流程：用户指定频域掩码，从参考音乐的潜在谱中选择特定频率分量，用于生成新变体或融合两首音乐。

5. 实际意义是什么：为音乐生成提供了类似“音频均衡器”但作用于结构层面的交互式控制工具，使用户能通过选择潜在频率来混合或生成音乐的特定时间尺度特征（如保留A歌的节奏，B歌的和声），推动了更可解释、可交互的音乐创作模型发展。
6. 主要局限性是什么：潜在频率与音乐属性（如特定乐器、风格）的对应关系是数据驱动的，缺乏显式建模，可能随训练数据分布而变。控制粒度受限于潜在帧率，对极快速或极慢速模式的分辨率有限。此外，方法主要在短片段（约6秒）上验证，对长程结构控制的能力未充分探索。

---

### 6. [LLM2Fx-Tools: Tool Calling for Music Post-Production](/audio-paper-digest-blog/posts/2026-05-03-llm2fx-tools-tool-calling-for-music-post)

✅ **7.0/10** | 前25% | #音乐生成 | #音频大模型 | #链式思维 #工具调用

👥 **作者与机构**

- 第一作者：SeungHeon Doh（KAIST；工作于Sony AI）
- 通讯作者：未明确说明（论文作者列表为并列第一作者，未指定通讯作者）
- 作者列表：
  - SeungHeon Doh（KAIST；Sony AI）
  - Junghyun Koo（Sony AI）
  - Marco A. Martínez-Ramírez（Sony AI）
  - Woosung Choi（Sony AI）
  - Wei-Hsiang Liao（Sony AI）
  - Qiyu Wu（Sony Group Corporation）
  - Juhan Nam（KAIST）
  - Yuki Mitsufuji（Sony Group Corporation；Sony AI）

💡 **毒舌点评**

这篇论文的亮点在于其极高的工程完整性和清晰的框架设计，将大语言模型的“思考”过程（CoT）和“动手”能力（工具调用）结合，用于解决音乐效果链生成这一具体而实际的生产痛点，为AI辅助音乐制作提供了可落地的技术方案。但其短板也非常明显：新提出的LP-Fx数据集完全基于合成，规模和真实多样性存疑，且实验仅在单乐器上进行，这使其结论能否推广到复杂的多轨混音场景要打个大大的问号，论文也承认了这一局限。

🔗 **开源详情**

- 代码：论文中提及了Demo页面 (`https://seungheondoh.github.io/llm2fx-tools-demo/`)，但未提及代码仓库链接。
- 模型权重：未提及公开的模型权重。
- 数据集：LP-Fx数据集未提及公开下载地址，但论文详细描述了其基于MedleyDB和公开音频效果库（Pedalboard）的生成流程。
- Demo：提供在线演示链接。
- 复现材料：提供了详细的训练阶段描述、损失函数、模型架构细节。但关键的训练超参数（如遮蔽概率、损失权重λ）、训练硬件、完整训练代码缺失。
- 论文中引用的开源项目：MedleyDB数据集、Pedalboard音频效果库、dasp-pytorch（用于基线DeepAFx-ST）。
- 总体开源计划：论文中未明确提及完整的开源计划。

📌 **核心摘要**

1. 解决的问题：传统的音频效果链估计方法缺乏灵活性（无法动态选择效果和排序）和可解释性（无法提供人类可读的推理过程）。
2. 方法核心：提出LLM2Fx-Tools框架，利用多模态大语言模型（LLM）理解音频输入，通过链式思维（CoT）规划，并以结构化工具调用的形式生成可执行的效果链（Fx-chain）。
3. 主要创新：首次将LLM的工具调用机制应用于音频效果模块；设计了专门用于效果链生成的CoT推理流程；提出了一个包含结构化CoT和工具调用的大规模对话数据集LP-Fx。
4. 主要实验结果：在“反向工程”任务（从干音和湿音推断效果链）中，LLM2Fx-Tools在效果模块分类准确率（80%）和排序相关性（0.56）上优于所有基线，包括多任务学习方法和Gemini 2.5 Flash。在“风格迁移”任务（从参考音盲推断效果链并应用到新音频）中，取得了最低的DSP特征距离（7.41）。主观听感测试（MUSHRA）中得分（62.8）显著高于其他方法。消融实验证明CoT、数字Token损失（NTL）和多阶段训练（MST）均对性能有贡献。

| 任务 | 方法 | 效果分类准确率(↑) | 效果排序相关性(↑) | 参数MAE(↓) | MRS距离-左右声道(↓) |
| :--- | :--- | :--- | :--- | :--- | :--- |
| 反向工程 | Regression | 55% | -0.03 | 0.20 | 3.81 |
| | MultiTask | 61% | 0.00 | 0.23 | 3.17 |
| | DeepAFx-ST | - | - | - | 1.75* |
| | Gemini 2.5 Flash | 78% | 0.54 | 0.32 | 3.42 |
| | LLM2Fx-Tools | 80% | 0.56 | 0.23 | 3.13 |

5. 实际意义：为音乐后期制作提供了一种可解释、可控的AI工具生成方法，用户可以通过自然语言指令或参考音频，获得带有推理过程的效果链建议。
6. 主要局限性：当前解释仅针对经过预处理（去除原有效果）的伪干音；数据集仅包含单乐器，未验证多轨混音场景；未测试对训练分布外音频效果模块的泛化能力。

---

### 7. [SongEcho: Towards Cover Song Generation via Instance-Adaptive Element-wise Linear Modulation](/audio-paper-digest-blog/posts/2026-05-03-songecho-towards-cover-song-generation-via)

✅ **7.0/10** | 前25% | #音乐生成 | #生成模型 | #数据集

👥 **作者与机构**

- 第一作者：未说明（根据作者列表顺序，Sifei Li可能为第一作者，但论文未明确标注）
- 通讯作者：未说明
- 作者列表：Sifei Li, Yang Li, Zizhou Wang, Yuxin Zhang, Fuzhang Wu, Oliver Deussen, Tong-Yee Lee, Weiming Dong（所有作者所属机构在摘要中未说明）

💡 **毒舌点评**

亮点是它正视并试图解决音乐文化中一个真实存在但被AI研究忽视的空白（翻唱生成），并为此专门构建了数据集。短板在于，摘要中“优于现有方法”和“参数少30%”的说法缺乏具体数字支撑，让这份“超越”显得有些底气不足。

🔗 **开源详情**

- 代码：提供了GitHub仓库链接：https://github.com/lsfhuihuiff/SongEcho_ICLR2026
- 模型权重：论文中未提及是否公开预训练模型权重。
- 数据集：论文中提到构建并提供了Suno70k数据集，但具体获取方式（如是随代码一起发布还是需单独申请）在摘要中未说明。
- Demo：摘要中提到“demos are available at”并指向GitHub链接，表明可能提供了演示。
- 复现材料：论文摘要中未提及是否提供详细的训练细节、配置文件、检查点或附录说明。
- 论文中引用的开源项目：摘要中未提及。

📌 **核心摘要**

1. 解决的问题：现有的音乐生成研究大多关注根据文本或旋律生成全新歌曲，而保留原曲核心旋律并进行风格/情感重新诠释的“翻唱歌曲生成”任务尚未被有效解决。
2. 方法核心：提出SongEcho模型，将翻唱生成形式化为一个条件生成问题，同时生成新的人声和伴奏。其核心是“实例自适应逐元素线性调制”（IA-EiLM）框架，通过两个关键模块实现可控生成：一是将FiLM扩展为EiLM以实现更精确的旋律时序对齐；二是提出IACR模块，使条件表征能与生成模型的隐状态交互，实现自适应调整。
3. 与已有方法的新颖之处：首次系统性地定义并解决翻唱歌曲生成任务；提出专门针对该任务的IA-EiLM生成框架；为解决数据瓶颈，构建了高质量、带丰富标注的Suno70k数据集。
4. 主要实验结果：论文摘要声称，在多个数据集上的实验表明，SongEcho生成的翻唱歌曲质量优于现有方法，且所需的可训练参数量少于30%。但未提供具体的数值对比。
5. 实际意义：该技术可应用于个性化音乐创作、音乐风格迁移、为音乐人提供创作辅助等场景，是AI赋能音乐文化传承与创新的体现。
6. 主要局限性：摘要未提及具体的实验数据与基线对比，因此无法评估其性能优势的具体程度。此外，模型对复杂旋律和情感表达的生成能力、在真实世界应用中的效果等，可能需要进一步验证。

---

### 8. [Automatic Stage Lighting Control: Is it a Rule-Driven Process or Generative Task?](/audio-paper-digest-blog/posts/2026-05-03-automatic-stage-lighting-control-is-it-a-rule)

✅ **6.5/10** | 前50% | #音乐生成 | #自回归模型 | #生成模型 #端到端

👥 **作者与机构**

- 第一作者：未说明机构
- 通讯作者：未说明机构
- 作者列表：Zijian Zhao（未说明机构）、Dian Jin（未说明机构）、Zijing Zhou（未说明机构）、Xiaoyu Zhang（未说明机构）

#

💡 **毒舌点评**

亮点：论文敏锐地指出了现有ASLC方法将音乐“分类-映射”的公式化弊端，首次提出将其视为端到端的生成任务，这个概念转换是清晰且有价值的创新起点。短板：然而，作为一篇提出新范式的论文，其模型架构（基于BART）的创新深度有限，且自建的首个数据集的规模和多样性（是否涵盖足够广泛的音乐类型、舞台场景）是决定该工作普适性的关键，这在摘要中未充分论证，可能导致结论的泛化性存疑。

#

🔗 **开源详情**

根据论文提供的链接（https://github.com/RS2002/Skip-BART）信息总结：
- 代码：是，提供了代码仓库链接。
- 模型权重：是，论文中提到提供“trained model parameters”。
- 数据集：是，论文中创建了首个舞台灯光数据集并提供。
- Demo：未提及。
- 复现材料：论文中提供了代码、数据、模型参数，构成了完整的复现材料。
- 论文中引用的开源项目：摘要未提及依赖的具体开源工具或模型。

📌 **核心摘要**

1.  问题：现有自动舞台灯光控制（ASLC）方法大多将音乐分为有限类别并映射到预定义灯光模式，导致生成效果公式化、单调且缺乏合理性。
2.  方法核心：提出Skip-BART，一个端到端模型。它以音频音乐为输入，直接预测灯光色相和亮度（明度）序列。该模型基于BART（一种自回归预训练模型）构建，并引入了一种新颖的跳连接机制，以增强音乐与灯光在帧网格内的对应关系。
3.  创新点：首次将ASLC概念化为生成任务，而非分类问题；设计了专门的跳连接来处理音乐-灯光对齐；创建了第一个针对此任务的数据集，并应用了预训练和迁移学习技术以应对数据稀缺。
4.  主要结果：通过定量分析和人类评估验证。结果显示Skip-BART在所有评估指标上均优于传统基于规则的方法，并且与人类灯光工程师的表现仅存在有限差距（摘要未提供具体数值）。
5.  实际意义：为舞台灯光自动化提供了新的技术路径，有望降低对专业灯光工程师的依赖，以更智能、生动的方式增强现场音乐体验。
6.  局限性：从摘要看，主要局限可能在于自建数据集的规模、覆盖度和多样性（未说明），以及在更复杂、多变的真实演出场景中的泛化能力未充分验证。评估范围可能局限于音乐场景。

#

---

### 9. [SyncTrack: Rhythmic Stability and Synchronization in Multi-Track Music Generation](/audio-paper-digest-blog/posts/2026-05-03-synctrack-rhythmic-stability-and-synchronization)

✅ **6.0/10** | 前50% | #音乐生成 | #端到端 | #波形生成

👥 **作者与机构**

- 第一作者：未说明
- 通讯作者：未说明
- 作者列表：Hongrui Wang（未说明），Fan Zhang（未说明），Zhiyuan Yu（未说明），Ziya Zhou（未说明），Xi Chen（未说明），Can Yang（未说明），Yang Wang（未说明）

💡 **毒舌点评**

这篇论文精准地指出了多轨音乐生成中一个常被忽视但至关重要的问题——节奏同步性，并为此提出了一个架构思路和一套评估指标，方向有价值。然而，仅从摘要来看，其技术细节披露不足，且缺乏任何具体的实验结果数据（如与基准模型的FAD、IS分数对比），使得我们无法判断其宣称的“显著改善”究竟是显著还是自说自话。

🔗 **开源详情**

根据论文摘要及提供的链接信息：
- 代码：论文中未提及代码链接。
- 模型权重：论文中未提及公开模型权重。
- 数据集：论文中未提及所使用的数据集或数据获取方式。
- Demo：论文中未提及在线演示。
- 复现材料：论文中未提及是否提供训练细节、配置、检查点或附录说明。
- 引用的开源项目：论文中未提及。
- 总结：论文中未提及任何开源计划。

📌 **核心摘要**

1.  要解决什么问题：现有的多轨音乐生成模型往往忽视了节奏稳定性和多轨道间的同步性，导致生成的音乐轨道之间协调性差，缺乏“整体感”。
2.  方法核心是什么：提出了名为SyncTrack的同步多轨波形生成模型。其核心架构包含两部分：共享模块通过跨轨注意力机制为所有轨道建立统一的节奏基础；特定模块则利用可学习的乐器先验来捕捉各轨道的独特音色和音高范围。
3.  与已有方法相比新在哪里：与已有方法相比，SyncTrack的创新在于明确将“节奏同步”作为建模的核心目标，并通过解耦的“共享节奏-特定音色”架构来实现。此外，它首次为多轨音乐生成提出了三个专门评估节奏一致性的新指标（IRS, CBS, CBD）。
4.  主要实验结果如何：论文摘要中未提供任何具体的实验数值（如FAD, IS等指标的具体分数或改进百分比），只定性地声称“显著提高了多轨音乐质量”。因此，无法进行量化比较。
5.  实际意义是什么：该工作有望提升AI生成的多轨音乐在制作层面的可用性，使得生成的鼓、贝斯、旋律等声部能够更好地融合，更接近专业混音的效果，对未来音乐创作工具有实际价值。
6.  主要局限性是什么：摘要信息有限，主要局限性体现在：1）缺乏实验数据和对比细节，无法客观评估其性能；2）新提出的三个评估指标（IRS, CBS, CBD）的计算细节和有效性验证未在摘要中说明；3）模型的具体架构、训练数据、规模等关键信息均未提及。

---

