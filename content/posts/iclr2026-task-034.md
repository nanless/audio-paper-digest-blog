---
title: "ICLR 2026 - 音乐生成 论文列表"
date: 2026-05-02
draft: false
tags: ["音乐生成"]
categories: [iclr-2026]
description: "共 8 篇 ICLR 2026 音乐生成 方向论文"
hiddenInHomeList: true
---

# ICLR 2026 - 音乐生成

共 **8** 篇论文

[← 返回 ICLR 2026 总览](/audio-paper-digest-blog/posts/iclr2026-summary/)

---

| 排名 | 论文 | 评分 | 分档 |
|------|------|------|------|
| 🥇 | [Automatic Stage Lighting Control: Is it a Rule-Driven Proces](/audio-paper-digest-blog/posts/2026-05-02-automatic-stage-lighting-control-is-it-a-rule) | 8.5分 | 前25% |
| 🥈 | [Generative Adversarial Post-Training Mitigates Reward Hackin](/audio-paper-digest-blog/posts/2026-05-02-generative-adversarial-post-training-mitigates) | 8.0分 | 前50% |
| 🥉 | [Steering Autoregressive Music Generation with Recursive Feat](/audio-paper-digest-blog/posts/2026-05-02-steering-autoregressive-music-generation-with) | 8.0分 | 前25% |
| 4. | [SyncTrack: Rhythmic Stability and Synchronization in Multi-T](/audio-paper-digest-blog/posts/2026-05-02-synctrack-rhythmic-stability-and-synchronization) | 7.5分 | 前25% |
| 5. | [YuE: Scaling Open Foundation Models for Long-Form Music Gene](/audio-paper-digest-blog/posts/2026-05-02-yue-scaling-open-foundation-models-for-long-form) | 7.5分 | 前10% |
| 6. | [Discovering and Steering Interpretable Concepts in Large Gen](/audio-paper-digest-blog/posts/2026-05-02-discovering-and-steering-interpretable-concepts) | 7.5分 | 前25% |
| 7. | [Latent Fourier Transform](/audio-paper-digest-blog/posts/2026-05-02-latent-fourier-transform) | 7.5分 | 前25% |
| 8. | [SongEcho: Towards Cover Song Generation via Instance-Adaptiv](/audio-paper-digest-blog/posts/2026-05-02-songecho-towards-cover-song-generation-via) | 7.0分 | 前25% |

---

## 📋 论文详情

### 🥇 [Automatic Stage Lighting Control: Is it a Rule-Driven Process or Generative Task?](/audio-paper-digest-blog/posts/2026-05-02-automatic-stage-lighting-control-is-it-a-rule)

🔥 **8.5/10** | 前25% | #音乐生成 | #自回归模型 | #端到端 #多模态模型

👥 **作者与机构**

- 第一作者：Zijian Zhao（The Hong Kong University of Science and Technology）
- 通讯作者：Xiaoyu Zhang（City University of Hong Kong）
- 作者列表：Zijian Zhao（The Hong Kong University of Science and Technology），Dian Jin（The Hong Kong Polytechnic University），Zijing Zhou（The University of Hong Kong），Xiaoyu Zhang（City University of Hong Kong）

💡 **毒舌点评**

亮点： 论文最具价值之处在于开创性地将“自动舞台灯光控制”从传统的分类-映射范式重新定义为端到端的生成任务，并提供了从数据集构建到模型设计、评估的完整解决方案，思路清晰，闭环完整。
短板： 模型架构的核心（Skip-BART）是对现有BART模型的适配与改进，而非全新架构设计；“生成”的概念虽新，但任务本身的复杂度和数据规模（699个样本）使其技术深度相较于文本或图像生成领域的突破性工作仍有距离。

🔗 **开源详情**

- 代码：提供了GitHub仓库链接：https://github.com/RS2002/Skip-BART
- 模型权重：论文明确表示提供了“trained model parameters”，链接同上。
- 数据集：论文发布了首个舞台灯光数据集RPMC-L2，提供处理后的HDF5特征文件（约40GB），而非原始视频，以解决版权问题。获取方式应通过上述GitHub仓库。
- Demo：论文中未提及在线演示链接。
- 复现材料：论文在附录中提供了极其详细的复现材料，包括：模型配置表（Table 4）、预训练与微调的具体损失函数与超参数、数据处理步骤（音频与灯光）、人类评估的完整问卷与流程、消融实验的具体设置。
- 论文中引用的开源项目：依赖或参考的开源项目包括：OpenL3（音频特征提取）、PianoBART（预训练骨干网络）、PyTorch框架。此外，跨域评估中使用了Suno生成音乐。
- 总结：论文的开源工作非常到位，提供了从数据、代码、模型到评估细节的全套材料，为研究的可重复性和后续工作提供了极大便利。

📌 **核心摘要**

这篇论文针对现有自动舞台灯光控制（ASLC）方法多基于有限类别分类和预定义规则映射，导致结果公式化、单调的问题，首次提出将ASLC视为一个生成任务而非简单的规则驱动过程。方法核心是提出了Skip-BART，一个端到端的深度学习模型，以BART为骨架，通过跳过连接机制显式建模音乐帧与灯光帧的对应关系，并利用预训练（PianoBART）和迁移学习技术缓解数据稀缺问题。与已有方法相比，其创新在于：1）任务定义从分类映射转变为序列生成；2）设计了专用的跳过连接以增强模态对齐；3）构建了首个专用的舞台灯光数据集RPMC-L2。实验结果表明，在定量分析中（见Table 1），Skip-BART在所有指标上均显著优于规则基线方法（如Hue RMSE：36.13 vs 48.67）；在人类评估中（见Table 2, Table 3），Skip-BART的总体得分（M=4.35）与专业灯光工程师的地面真值（M=4.51）无显著差异（p=0.724），且远高于规则方法（M=2.67, p<0.001）。该研究为自动化艺术内容创作提供了新范式，其实际意义在于有望大幅降低舞台灯光设计的成本与技术门槛。主要局限性在于模型偶尔出现过强的局部灯光波动，且当前仅支持离线单主灯生成，未考虑实时与多灯协同控制。

---

### 🥈 [Generative Adversarial Post-Training Mitigates Reward Hacking in Live Human-AI Music Interaction](/audio-paper-digest-blog/posts/2026-05-02-generative-adversarial-post-training-mitigates)

🔥 **8.0/10** | 前50% | #音乐生成 | #强化学习 | #生成模型

👥 **作者与机构**

-   第一作者：Yusong Wu（Mila, Quebec Artificial Intelligence Institute, Université de Montréal）
-   通讯作者：Natasha Jaques（University of Washington），Cheng-Zhi Anna Huang（Massachusetts Institute of Technology）（论文中明确标注这两位为共同资深作者 Equal contribution as senior authors）
-   作者列表：
    1.  Yusong Wu（Mila, Université de Montréal）
    2.  Stephen Brade（Massachusetts Institute of Technology）
    3.  Aleksandra Teng Ma（Georgia Institute of Technology）
    4.  Tia-Jane Fowler（University of Washington）
    5.  Enning Yang（McGill University）
    6.  Berker Banar（Independent Researcher）
    7.  Aaron Courville（Mila, Université de Montréal）
    8.  Natasha Jaques（University of Washington）
    9.  Cheng-Zhi Anna Huang（Massachusetts Institute of Technology）

💡 **毒舌点评**

亮点：本文将强化学习后训练中“奖励黑客”这个时髦但棘手的问题，在一个要求极高的实时音乐交互场景中具象化，并提出了一个巧妙且工程上可行的对抗性解决方案（GAPT），实验设计从离线到真人验证非常扎实。
短板：核心方法（对抗训练+RL）并非独创，本文的价值更多在于针对音乐交互场景的细致适配与验证，其提出的两阶段更新策略虽有效但偏“炼丹”，对解决一般性奖励黑客问题的理论贡献有限，且任务领域相对垂直。

🔗 **开源详情**

-   代码：提供GitHub仓库链接：https://github.com/lukewys/realchords-pytorch
-   模型权重：论文中未明确提及是否公开预训练模型权重。
-   数据集：使用了Hooktheory、POP909、Nottingham、Wikifonia等公开数据集，论文附录B.2提供了获取途径或说明。
-   Demo：提供音频示例页面：https://realchords-GAPT.github.io
-   复现材料：论文详细说明了模型架构、训练细节、超参数、奖励函数构成、评估指标，并在附录中提供了更多结果（如奖励模型性能、不同随机种子的稳定性、长序列评估），复现指导非常充分。
-   引用的开源项目：论文中引用的开源项目包括PPO算法、LLaMA风格Transformer、RoPE位置编码、CLIP风格对比学习等，但未在开源链接部分列出具体依赖库。
-   论文中未提及模型权重的公开计划。

📌 **核心摘要**

1.  问题：在实时人机音乐协作（如即兴合奏）中，使用强化学习（RL）后训练生成式模型以提升适应性时，模型会过度优化相干性奖励，导致输出多样性崩溃，表现为重复、简单的和弦进行，此现象被称为“奖励黑客”。
2.  方法核心：提出生成对抗性后训练（GAPT）。在基于策略的RL优化中，额外训练一个判别器来区分策略生成的轨迹与真实数据轨迹。策略除了优化原有的音乐相干性奖励，还需最大化判别器给出的“真实度”评分，以此作为正则化信号，防止策略崩溃。
3.  创新之处：不同于标准GAN，GAPT采用两阶段自适应判别器更新策略：预热阶段固定间隔更新，正式阶段仅当对抗性奖励超过阈值时才更新判别器，以稳定训练。相比单纯使用KL散度惩罚，对抗训练能更有效地在保持输出多样性的同时学习适应性。
4.  实验结果：在固定旋律模拟、学习到的旋律智能体交互以及与12位专家音乐家的真实交互用户研究中，GAPT相比基线（仅MLE训练、仅RL训练）显著提升了输出多样性（Vendi Score）和音乐和谐度（note-in-chord ratio），并获得了更高的用户适应速度、控制感与能动性评分。例如，在固定旋律测试集上，GAPT的多样性分数（26.645）远高于ReaLchords（20.968），和谐度（0.497）也略高。
5.  实际意义：为构建更自然、更具响应性和创造性的实时人机音乐交互系统提供了有效方法，其思想也可能推广至其他需要平衡奖励优化与输出多样性的序列生成任务（如对话）。
6.  主要局限性：方法的有效性验证集中于特定的旋律-和弦伴奏任务，对更复杂的多声部音乐或通用文本生成任务的泛化能力未探讨。对抗训练本身增加了超参数和训练复杂性。

---

### 🥉 [Steering Autoregressive Music Generation with Recursive Feature Machines](/audio-paper-digest-blog/posts/2026-05-02-steering-autoregressive-music-generation-with)

🔥 **8.0/10** | 前25% | #音乐生成 | #可解释性 | #自回归模型 #基准测试

👥 **作者与机构**

- 第一作者：Daniel Zhao (University of California, San Diego)
- 通讯作者：未明确说明（论文列出了所有作者邮箱，无指定通讯作者）
- 作者列表：Daniel Zhao (University of California, San Diego)、Daniel Beaglehole (University of California, San Diego)、Taylor Berg-Kirkpatrick (University of California, San Diego)、Julian McAuley (University of California, San Diego)、Zachary Novack (University of California, San Diego)

#

💡 **毒舌点评**

亮点：该工作将“可解释性”与“可控生成”两个热门方向巧妙结合，通过激活空间干预提供了无需重训模型的细粒度控制方案，实验设计全面，既有严谨的量化指标，也有主观听感测试。
短板：对节奏、和弦进行等强时序依赖概念的控制效果仍较弱，其核心控制单元（均值池化的探针）本质上牺牲了时序动态信息，这在未来可能是需要突破的瓶颈。

#

🔗 **开源详情**

- 代码：是。论文明确提供了代码仓库链接：`https://github.com/astradzhao/music-rfm`。
- 模型权重：未提及是否公开在MUSICGEN-Large上训练好的RFM探针权重。
- 数据集：依赖公开的SYNTHEORY（需联系原作者Wei等人）和SONG-DESCRIPTOR数据集，但论文中未提供直接下载链接。
- Demo：提供了交互式演示页面：`https://musicrfm.github.io/controllable-music-rfm/`。
- 复现材料：论文附录提供了详细的超参数配置（表8）、RFM训练细节（附录B）、消融实验设置（附录C）和算法伪代码（附录F，算法1）。
- 引用的开源项目：主要依赖MUSICGEN（Copet et al.）、EnCodec（Défossez et al.）、Essentia（Bogdanov et al.）、librosa（McFee et al.）等开源工具和模型。

📌 **核心摘要**

本文旨在解决可控音乐生成中模型需重训、易引入伪影的问题。方法核心是提出MusicRFM框架，首次将递归特征机（RFM）应用于冻结的自回归音乐生成模型（MUSICGEN-Large），通过分析内部梯度提取可解释的“概念方向”（如特定音符、和弦），并在推理时直接注入模型激活空间以引导生成。与已有方法相比，其创新在于：1) 完全免训练、免优化，仅需训练轻量RFM探针；2) 提出分层权重（Top-K/指数加权）和时间调度等精细控制机制。主要实验结果：在SYNTHEORY合成数据集上，MusicRFM可将目标音符的分类准确率从0.23提升至0.82，同时保持CLAP分数在基线±0.02内（控制与保真的有利折衷）。在外部评估中，其控制效果也优于提示工程基线。实际意义是为可控音乐生成提供了一种高效、可解释的新范式，有望降低创作门槛。主要局限性是依赖于均值池化，对序列依赖性强的概念（如节拍、和弦进行）控制能力有限。

#

---

### 4. [SyncTrack: Rhythmic Stability and Synchronization in Multi-Track Music Generation](/audio-paper-digest-blog/posts/2026-05-02-synctrack-rhythmic-stability-and-synchronization)

✅ **7.5/10** | 前25% | #音乐生成 | #扩散模型 | #音频生成 #模型评估

👥 **作者与机构**

- 第一作者：Hongrui Wang (香港科技大学数学系)
- 通讯作者：Can Yang (香港科技大学数学系/神经系统疾病国家重点实验室)， Yang Wang (香港大学)
- 作者列表：
    - Hongrui Wang (香港科技大学数学系，*共同第一作者)
    - Fan Zhang (香港科技大学数学系，*共同第一作者，†共同通讯)
    - Zhiyuan Yu (浙江大学CAD&CG国家重点实验室)
    - Ziya Zhou (香港科技大学交叉学科学院)
    - Xi Chen (香港科技大学交叉学科学院)
    - Can Yang (香港科技大学数学系/神经系统疾病国家重点实验室，†共同通讯)
    - Yang Wang (香港大学，†共同通讯)

💡 **毒舌点评**

亮点：论文精准击中了多轨音乐生成中“节奏打架”这一要害，并给出了“分而治之”的优雅解法（共享模块管节奏，特定模块管音色），提出的三个节奏评估指标（IRS, CBS, CBD）直击FAD指标的软肋，非常实用。
短板：模型架构虽然有效，但创新性主要体现在针对性设计上，基础框架（U-Net, LDM）仍属借用，未在生成模型理论上实现根本性突破。此外，实验主要在Slakh2100这个相对干净的数据集上进行，对于更复杂、更自由的音乐风格，模型的表现有待进一步验证。

🔗 **开源详情**

- 代码：论文提供了项目主页和代码仓库链接：`https://synctrack-v1.github.io`。
- 模型权重：论文中未明确提及是否公开预训练模型权重。项目主页可能包含更多信息，但论文正文未说明。
- 数据集：实验使用Slakh2100数据集，这是一个公开数据集。论文未提及是否提供或修改后的数据集。
- Demo：论文未提及在线演示。
- 复现材料：提供了极其详尽的复现材料。包括：
    - 训练细节：附录A.5给出了完整的训练配置（数据集、采样率、片段长度、优化器、学习率、批大小、训练迭代次数/轮数、硬件环境）。
    - 模型架构：附录表A3列出了SyncTrack完整的网络架构层次和参数量。
    - 评估细节：附录A.1和A.2详细说明了节拍跟踪工具(madmom)的使用、关键超参数(fps, tl)及其敏感性分析。
    - 消融研究：表6提供了详细的消融实验结果。
    - 复现性声明：明确表示提供了全部实验细节。
- 论文中引用的开源项目：
    - 核心框架：潜在扩散模型（LDM）（Rombach et al., 2022）。
    - 音频处理/声码器：HiFi-GAN (Kong et al., 2020a)。
    - 预训练模型：使用了MusicLDM (Chen et al., 2024)的预训练权重进行初始化。
    - 评估工具：使用了madmom库 (Böck et al., 2016) 进行节拍检测；使用VGGish计算FAD。
    - 数据集：Slakh2100 (Manilow et al., 2019)。

📌 **核心摘要**

1.  问题：现有的多轨音乐生成模型（如MSDM, MSG-LD）通常学习多轨道的联合分布，但过度关注轨道间的差异性，忽略了多轨音乐中至关重要的共同节奏信息，导致生成的音乐在节拍稳定性和跨轨道同步性上表现不佳。
2.  方法核心：提出SyncTrack模型，其架构创新地分为“轨道共享模块”和“轨道特定模块”。轨道共享模块包含全局跨轨道注意力和时间特定跨轨道注意力两种子模块，用于建立和同步所有轨道的共同节奏。轨道特定模块为每个轨道引入可学习的乐器先验，以更好地表征其独特的音色和特征。
3.  与已有方法相比新在哪里：a) 架构设计上明确解耦了节奏（共享）和音色（特定）信息的建模，而先前方法是统一学习联合分布；b) 设计了两种互补的跨轨道注意力机制，分别针对全局节奏稳定和细粒度的时间点同步；c) 首次针对多轨音乐生成提出了三个可量化的节奏一致性评估指标（IRS, CBS, CBD），弥补了仅用FAD评估的不足。
4.  主要实验结果：在Slakh2100数据集上的实验显示，SyncTrack在多项指标上显著优于基线。客观结果：混合音频FAD得分相比最强基线MSG-LD降低约45.8%（从1.31降至1.26）；单轨道FAD在鼓和钢琴轨道上分别降低约27.6%和45.6%。节奏指标：SyncTrack的IRS（节奏稳定性）接近真实数据，显著优于基线；CBS（节拍同步率）达到0.5206，比MSG-LD高34.8%；CBD（节拍离散度）显著降低。主观评估：SyncTrack的平均得分为3.42（5分制），远高于MSG-LD的1.57，更接近真实数据的4.48。
5.  实际意义：该模型能生成更和谐、更符合听觉习惯的多轨音乐，直接服务于专业音乐制作、混音和编曲等下游任务。提出的评估指标为社区提供了更精细的衡量标准。
6.  主要局限性：模型训练和评估主要基于Slakh2100数据集，其音乐风格和乐器种类有限；论文未明确讨论对更长时序（如完整歌曲）生成的支持；虽然提供了评估指标和代码，但并未公开大规模预训练模型权重和训练数据集。

---

### 5. [YuE: Scaling Open Foundation Models for Long-Form Music Generation](/audio-paper-digest-blog/posts/2026-05-02-yue-scaling-open-foundation-models-for-long-form)

✅ **7.5/10** | 前10% | #音乐生成 | #预训练 | #歌唱语音合成 #自回归模型

👥 **作者与机构**

- 第一作者：Ruibin Yuan（香港科技大学，MAP）
- 通讯作者：未说明（论文列出了多位通讯作者，按字母排序：Jiaheng Liu, Jian Yang, Wenhao Huang, Wei Xue, Xu Tan, Yike Guo）
- 作者列表：Ruibin Yuan（香港科技大学，MAP）， Hanfeng Lin（香港科技大学，MAP）， Shuyue Guo（MAP）， Ge Zhang（MAP，密歇根大学）， Jiahao Pan（香港科技大学，MAP）， Yongyi Zang（独立）， Haohe Liu（萨里大学，MAP）， Yiming Liang（MAP）， Wenye Ma（MBZUAI，MAP）， Xingjian Du（罗切斯特大学，MAP）， Xeron Du（MAP）， Zhen Ye（香港科技大学）， Tianyu Zheng（MAP）， Zhengxuan Jiang（MAP）， Yinghao Ma（MAP，伦敦玛丽女王大学）， Minghao Liu（2077AI，MAP）， Zeyue Tian（香港科技大学，MAP）， Ziya Zhou（香港科技大学，MAP）， Liumeng Xue（香港科技大学，MAP）， Xingwei Qu（MAP）， Yizhi Li（MAP，曼彻斯特大学）， Shangda Wu（中央音乐学院，MAP）， Tianhao Shen（MAP）， Ziyang Ma（MAP，上海交通大学，南洋理工大学）， Jun Zhan（复旦大学）， Chunhui Wang（吉利汽车）， Yatian Wang（香港科技大学）， Xiaowei Chi（香港科技大学）， Xinyue Zhang（香港科技大学）， Zhenzhu Yang（香港科技大学）， Xiangzhou Wang（MAP）， Shansong Liu（美团）， Lingrui Mei（美团）， Peng Li（香港科技大学）， Junjie Wang（清华大学）， Jianwei Yu（月之暗面）， Guojian Pang（MAP）， Xu Li（小红书）， Zihao Wang（浙江大学，卡内基梅隆大学）， Xiaohuan Zhou（MAP）， Lijun Yu（卡内基梅隆大学）， Emmanouil Benetos（伦敦玛丽女王大学，MAP）， Yong Chen（吉利汽车）， Chenghua Lin（曼彻斯特大学，MAP）， Xie Chen（上海交通大学）， Gus Xia（MBZUAI，MAP）， Zhaoxiang Zhang（中国科学院）， Chao Zhang（清华大学）， Wenhu Chen（滑铁卢大学，MAP）， Xinyu Zhou（月之暗面）， Xipeng Qiu（复旦大学）， Roger Dannenberg（卡内基梅隆大学，MAP）。
（注：“MAP”指Multimodal Art Projection团队）

💡 **毒舌点评**

亮点：首个开源且能生成长达五分钟、歌词对齐的完整歌曲的基础模型系列，其双轨分离预测和结构化渐进条件等技术，为解决长时序、多信号音乐生成提供了坚实且可扩展的方案。短板：尽管在结构控制和音域广度上与商业模型持平甚至超越，但其主观音质评估（人声与伴奏质感）与Suno V4仍有清晰可见的差距，且论文中未提供其超大模型（7B）在完整训练集上所需的、惊人的计算资源细节。

🔗 **开源详情**

- 代码：提供了GitHub仓库链接：https://github.com/multimodal-art-projection/YuE
- 模型权重：在HuggingFace上提供了模型集合：https://huggingface.co/collections/m-a-p/yue
- 数据集：未提供可直接下载的数据集。论文说明了数据来源为网络挖掘的CC许可音乐和语音，并给出了混合比例和语言/风格分布，但未提供构建好的数据集或处理脚本。
- Demo：提供了在线演示网站：https://map-yue.github.io/
- 复现材料：论文详细说明了模型架构（附录C、D）、训练设置、超参数和评估协议。提供了训练数据量级（如7B模型在1.75T token上训练）、模型尺寸等关键信息，但未给出具体的硬件配置（如GPU型号和数量）和完整训练时长。
- 论文中引用的开源项目：X-Codec (音频分词器), LLaMA2 (基础架构), Vocos (上采样器), Whisper (WER评估), audioldm_eval, CLAP, CLaMP 3, RMVPE等。

📌 **核心摘要**

本文旨在解决长篇、高质量、歌词到完整歌曲（包含人声和伴奏）生成这一核心挑战。为此，作者提出了“YuE（乐）”——一个开源的基础模型家族。其核心方法包含三个关键技术：1）双轨分离预测（Dual-NTP），将每个时间步建模为一对独立的人声与伴奏token，解决了混合信号带来的信息干扰问题；2）结构化渐进条件（SPC），利用歌曲固有的段落结构（如主歌、副歌），通过交错安排歌词与音频token，实现了分钟级别的上下文与歌词跟随；3）重新设计的音乐上下文学习（ICL），通过延迟引入参考音频数据，实现了风格克隆、双向内容创作且避免了捷径学习。与已有方法相比，YuE是首个在开源条件下，能生成长达5分钟、具有连贯结构且歌词对齐的歌曲的模型。实验表明，在人类评估中，YuE在整体偏好和音乐性上与Tiangong和Udio等商业系统持平，并超越了Hailuo，但略逊于Suno V4。其生成的歌曲时长和人声音域范围也显著领先于多数对比系统。在自动指标上，其KL散度（0.372）和CLaMP 3分数（0.240）表现优异。该工作的实际意义在于，极大地降低了高质量AI音乐创作的门槛，推动了该领域的开源生态发展。主要局限性在于，与最强闭源系统相比，在声音的精致度和艺术性上仍有提升空间，且训练超大模型需要巨大的计算资源。

---

### 6. [Discovering and Steering Interpretable Concepts in Large Generative Music Models](/audio-paper-digest-blog/posts/2026-05-02-discovering-and-steering-interpretable-concepts)

✅ **7.5/10** | 前25% | #音乐生成 | #稀疏自编码器 | #音频大模型 #模型评估

👥 **作者与机构**

- 第一作者：Nikhil Singh（Dartmouth College）、Manuel Cherep（MIT）（共同第一作者）
- 通讯作者：未说明
- 作者列表：Nikhil Singh（Dartmouth College）， Manuel Cherep（MIT）， Pattie Maes（MIT）

💡 **毒舌点评**

亮点在于将大语言模型可解释性领域的前沿方法（稀疏自编码器）成功移植到音乐生成模型，并提出了一个完整的、可扩展的概念发现与引导框架，具有方法论上的开创性。短板在于实验规模局限于单一模型家族（MusicGen），且自动化评估依赖CLAP等外部模型，其评估结果的可靠性有待更全面的人工验证支撑，部分技术细节（如SAE训练策略）也未完全公开。

📌 **核心摘要**

1. 问题：大型音乐生成模型（如MusicGen）能生成高质量音乐，但其内部表示如同“黑箱”，缺乏可解释性。我们需要理解模型内部“学到”了哪些音乐概念，以及这些概念是否与人类音乐理论一致或能揭示新的音乐规律。
2. 方法核心：提出一个多阶段流水线：首先，从音乐语料库中提取预训练MusicGen模型的残差流激活；其次，使用稀疏自编码器（SAEs）对这些高维激活进行降维和稀疏化，以发现潜在的、可解释的特征；最后，通过自动标注（使用多模态LLM如Gemini和预训练音频分类器）和人类验证来为这些特征命名，并通过干预残差流来测试特征的可引导性。
3. 创新点：这是首次将稀疏自编码器技术应用于音频/音乐领域的生成模型；构建了一个可扩展的、无需监督的概念发现与自动评估流水线；不仅发现了与已知音乐理论（如流派、乐器）一致的特征，还发现了一些理论上未明确编码但感知上连贯的“涌现”规律（如特定电子音效、单音纹理）。
4. 主要实验结果：在MusicGen-Large模型上，通过SAE发现了数千个可过滤的特征。人类验证中，基于Essentia分类器的标签获得的人类置信度（3.96/5）高于基于Gemini的标签（3.19/5）。引导实验表明，约15-35%的测试特征能成功引导生成内容向目标概念靠拢，听觉测试（10名参与者）显示66%的情况下，SAE引导的版本比基线或随机引导版本更易被识别为目标概念。结果表明，模型的深层编码了更易解释的特征，且大模型的特征组织更具层次性。
5. 实际意义：为理解生成式AI的“音乐理解”提供了实证工具，架起了模型内部表示与人类音乐概念之间的桥梁，有望促进更透明、可控的AI音乐创作，并为音乐理论研究提供新视角。
6. 主要局限性：研究主要针对无条件生成（未使用文本提示），未探讨文本条件下的概念表示；自动化评估指标（CLAP分数）可能不完全反映人类对音乐概念的理解；引导实验的成功率有待提高，且引导可能导致生成质量下降。

---

### 7. [Latent Fourier Transform](/audio-paper-digest-blog/posts/2026-05-02-latent-fourier-transform)

✅ **7.5/10** | 前25% | #音乐生成 | #扩散模型 | #傅里叶变换 #表示学习

👥 **作者与机构**

- 第一作者：Mason Long Wang (CSAIL, Massachusetts Institute of Technology)
- 通讯作者：未说明（论文未明确标注通讯作者，通常根据机构排序，第二作者Cheng-Zhi Anna Huang同属MIT CSAIL）
- 作者列表：Mason Long Wang (CSAIL, Massachusetts Institute of Technology)， Cheng-Zhi Anna Huang (CSAIL, Massachusetts Institute of Technology)

💡 **毒舌点评**

这篇论文的亮点在于巧妙地将傅里叶变换这个经典工具从音频信号“下沉”到生成模型的潜在表示空间，为音乐生成提供了一个直观且连续的“时间尺度”控制旋钮，概念优雅且实验全面。短板在于，其控制维度的普适性有待验证——能否从“音乐结构”的时间尺度控制，泛化到如语音、环境声等其他音频模态的类似控制，文中并未探讨，这使得方法的影响力目前主要局限在音乐生成领域。

🔗 **开源详情**

- 代码：是。论文明确提供了代码仓库链接：`https://github.com/maswang32/latentfouriertransform/`。
- 模型权重：未提及。论文中未明确说明是否公开预训练模型权重。
- 数据集：未提及。论文使用的MTG-Jamendo和GTZAN是公开数据集，但论文未提供处理后的版本或具体下载脚本。
- Demo：论文中提到提供在线演示示例（`https://masonlwang.com/latentfouriertransform/`）。
- 复现材料：非常充分。论文附录详细说明了模型架构（MLP、U-Net、DAC编码器；U-Net解码器）、所有训练超参数、数据集处理方式、评估指标计算细节等。
- 论文中引用的开源项目：提到了DAC（Descript Audio Codec）作为编码器前端之一；BigVGAN作为声码器；librosa、Essentia用于特征提取；VampNet作为基线模型。

📌 **核心摘要**

1. 问题：现有的可控音乐生成模型难以精确地基于音乐模式发生的“时间尺度”（如快节奏鼓点vs.慢速和弦进行）进行条件控制或融合，现有控制手段（文本、音高、响度）无法直接暴露这一维度。
2. 方法核心：提出潜在傅里叶变换（LATENTFT） 框架。核心是在扩散自编码器的潜在表示时间序列上应用离散傅里叶变换（DFT），得到“潜在频谱”。训练时，对该频谱进行随机的频率遮蔽；推理时，用户通过指定潜在频率范围（如0-1Hz保留和弦）来控制生成。
3. 新在哪里：不同于直接操作音频波形频谱（均衡器）或后期分析潜在表示，LATENTFT通过训练时的潜在频率遮蔽，使潜在表示天然地按时间尺度解耦，从而支持在推理时对特定时间尺度的特征进行保留、生成变体或混合两首歌曲。
4. 主要实验结果：
    *   在MTG-Jamendo数据集上的条件生成任务中，LATENTFT在响度相关性（0.878）、节奏保持（0.922）、音色失真（1.390）和和声距离（0.107）等指标上均显著优于所有基线（如ILVR、Guidance、DAC后处理等）。
    *   在混合任务中，LATENTFT在音频质量（FAD 1.364）和用户主观评价（图3）上也优于基线。
    *   听觉研究（29名音乐家参与）表明，在混合任务的音频质量和融合能力两个维度上，LATENTFT获得的偏好票数均领先于其他系统。
    *   可解释性实验（图5）显示，不同音乐属性（体裁、和弦、节奏、音高）在潜在频谱的不同频率区域被保留，证实了潜在频率轴的意义。
5. 实际意义：为音乐生成和制作提供了一种新的、基于时间尺度的交互式控制工具，类似于为潜在空间配备了一个“均衡器”，可用于创作音乐变体、混合不同歌曲片段。
6. 主要局限性：目前框架主要在音乐生成任务上验证；其潜在表示的可解释性虽被展示，但如何与语义控制（如风格、情绪）进一步结合是未来方向；实时交互性未实现。

---

### 8. [SongEcho: Towards Cover Song Generation via Instance-Adaptive Element-wise Linear Modulation](/audio-paper-digest-blog/posts/2026-05-02-songecho-towards-cover-song-generation-via)

✅ **7.0/10** | 前25% | #音乐生成 | #扩散模型 | #条件生成 #数据集

🔗 **开源详情**

- 代码：提供GitHub仓库链接：https://github.com/lsfhuihuiff/SongEcho_ICLR2026
- 模型权重：论文未直接提及是否公开预训练好的SongEcho模型权重，但承诺开源代码。基于代码仓库，用户可能可以自行训练获得模型。
- 数据集：公开了新构建的Suno70k数据集，通过论文提供的Hugging Face数据集链接（https://huggingface.co/datasets/nyuuzyou/suno）可获取元数据，音频需根据链接下载。
- Demo：提供在线演示页面：https://vvanonymousvv.github.io/SongEcho_updated/
- 复现材料：论文在附录中提供了极其详尽的复现信息，包括：ACE-Step+SA ControlNet和ACE-Step+MuseControlLite两种基线的具体实现方式（LoRA秩、克隆模块数量）、训练设置（优化器参数、学习率、步数）、推理设置（CFG引导强度）等。
- 论文中引用的开源项目：ACE-Step（基础生成模型）、RVMPE（F0提取）、mir_eval（旋律指标计算）、Whisper（歌词转录）、Qwen2-audio（标签生成）、SongEval（美学评估与数据集）、OpenL3, PANNs (用于FD和KL计算)、CLAP（音频文本一致性评估）。

📌 **核心摘要**

这篇论文针对“翻唱歌曲生成”（Cover Song Generation）任务，即在保留原曲主旋律的同时，根据新的文本提示生成全新的演唱和伴奏，提出了一个名为SongEcho的轻量级框架。其核心是实例自适应逐元素线性调制（IA-EiLM），该方法包含两个创新组件：1）逐元素线性调制（EiLM），它扩展了特征线性调制（FiLM），通过生成与隐藏状态维度匹配的调制参数（γ， β），实现了旋律条件的时序对齐精确注入；2）实例自适应条件精炼（IACR），它通过门控机制使条件特征与生成模型的隐藏状态动态交互，从而让条件特征自适应于当前生成实例，避免了静态条件注入导致的不兼容问题。为解决该领域缺乏大规模开源数据集的问题，论文构建并发布了Suno70k数据集。实验表明，SongEcho在Suno70k和SongEval数据集上，仅使用不到基线30%的可训练参数，在旋律保真度（如RPA, RCA）和音频质量（如FD， KL）等所有评估指标上均超越了现有最先进的旋律可控音乐生成方法（如SA ControlNet， MuseControlLite）。该工作的意义在于为歌曲的再创作提供了一种高效、可控的技术路径，但其局限在于对演唱音色等更细粒度风格的控制能力有限，且依赖于特定的文本到歌曲基础模型（ACE-Step）的文本控制能力。

### 实验结果表格
表1：在Suno70k测试集上的定量评估结果

| 方法 | RPA ↑ | RCA ↑ | OA ↑ | CLAP ↑ | FD ↓ | KL ↓ | PER ↓ | TP ↓ |
| :--- | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| ACE-Step (Gong et al., 2025) | - | - | - | 0.2930 | 73.53 | 0.2670 | 0.4168 | - |
| ACE-Step+SA ControlNet (Hou et al., 2025) | 0.6209 | 0.6440 | 0.6858 | 0.2875 | 105.95 | 0.2019 | 0.3714 | 1.6B |
| ACE-Step+SA ControlNet+LoRA (Hou et al., 2025) | 0.6214 | 0.6431 | 0.6833 | 0.2892 | 99.19 | 0.1850 | 0.3734 | 331M |
| ACE-Step+MuseControlLite (Tsai et al., 2025) | 0.5205 | 0.5346 | 0.5940 | 0.2977 | 72.04 | 0.2151 | 0.4194 | 189M |
| SongEcho (Ours) | 0.7080 | 0.7339 | 0.6952 | 0.3243 | 42.06 | 0.1123 | 0.2951 | 49.1M |

表2：在Suno70k测试集上（交换文本标签后）的定量评估结果

| 方法 | RPA ↑ | RCA ↑ | OA ↑ | CLAP ↑ | FD ↓ | KL ↓ | PER ↓ |
| :--- | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| ACE-Step (Gong et al., 2025) | - | - | - | 0.2800 | 70.54 | 0.3478 | 0.3899 |
| ACE-Step+SA ControlNet (Hou et al., 2025) | 0.6078 | 0.6336 | 0.6759 | 0.2477 | 110.73 | 0.2479 | 0.3874 |
| ACE-Step+SA ControlNet+LoRA (Hou et al., 2025) | 0.6143 | 0.6361 | 0.6741 | 0.2536 | 97.60 | 0.2407 | 0.4114 |
| ACE-Step+MuseControlLite (Tsai et al., 2025) | 0.5164 | 0.5275 | 0.6025 | 0.2462 | 68.73 | 0.2764 | 0.4758 |
| SongEcho (Ours) | 0.7066 | 0.7333 | 0.7001 | 0.2674 | 40.37 | 0.2117 | 0.3091 |

表3：在SongEval (Yao et al., 2025) 数据集上的定量评估结果

| 方法 | RPA ↑ | RCA ↑ | OA ↑ | CLAP ↑ | FD ↓ | KL ↓ | PER ↓ |
| :--- | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| ACE-Step (Gong et al., 2025) | - | - | - | 0.2590 | 71.56 | 0.3305 | 0.4510 |
| ACE-Step+SA ControlNet (Hou et al., 2025) | 0.6463 | 0.6600 | 0.6934 | 0.2666 | 114.18 | 0.4069 | 0.5234 |
| ACE-Step+SA ControlNet+LoRA (Hou et al., 2025) | 0.6335 | 0.6465 | 0.6837 | 0.2583 | 104.76 | 0.3112 | 0.5901 |
| ACE-Step+MuseControlLite (Tsai et al., 2025) | 0.5421 | 0.5498 | 0.6208 | 0.2600 | 90.19 | 0.3913 | 0.5760 |
| SongEcho (Ours) | 0.7164 | 0.7326 | 0.7097 | 0.2824 | 51.98 | 0.1933 | 0.4487 |

表4：主观评估平均意见得分（1-5）

| 组别 | 方法 | MF ↑ | TA ↑ | AQ ↑ | OP ↑ |
| :--- | :--- | :---: | :---: | :---: | :---: |
| w/ Music Background | ACE-Step+SA ControlNet+LoRA | 3.056 | 3.285 | 3.085 | 3.104 |
| | ACE-Step+MuseControlLite | 2.630 | 3.026 | 2.581 | 2.622 |
| | SongEcho (Ours) | 3.644 | 3.800 | 3.756 | 3.819 |
| w/o Music Background | ACE-Step+SA ControlNet+LoRA | 3.133 | 3.636 | 3.182 | 3.160 |
| | ACE-Step+MuseControlLite | 2.689 | 3.333 | 2.591 | 2.622 |
| | SongEcho (Ours) | 3.884 | 4.160 | 3.916 | 3.942 |

表5：消融实验结果

| 方法 | RPA ↑ | RCA ↑ | OA ↑ | CLAP ↑ | FD ↓ | KL ↓ | PER ↓ |
| :--- | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| w/ EA, w/o IACR | 0.6336 | 0.6476 | 0.6683 | 0.3014 | 73.83 | 0.1689 | 0.3276 |
| w/ EiLM, w/o IACR | 0.6799 | 0.7000 | 0.6793 | 0.2999 | 75.28 | 0.1569 | 0.3166 |
| IA-EiLM→Self-Attn | 0.6190 | 0.6429 | 0.6303 | 0.3195 | 47.34 | 0.1434 | 0.3462 |
| 100 Training Samples | 0.4677 | 0.4889 | 0.4812 | 0.2854 | 71.85 | 0.1402 | 0.4159 |
| 1000 Training Samples | 0.6505 | 0.6775 | 0.6559 | 0.3115 | 48.59 | 0.1135 | 0.2871 |
| SongEcho (Ours) | 0.7080 | 0.7339 | 0.6952 | 0.3243 | 42.06 | 0.1123 | 0.2951 |

---

