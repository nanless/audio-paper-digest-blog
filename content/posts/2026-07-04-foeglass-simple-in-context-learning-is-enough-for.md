---
title: "FoeGlass: Simple In-Context Learning Is Enough for Red Teaming Audio Deepfake Detectors"
date: 2026-07-04
draft: false
tags: [语音伪造检测, 大语言模型, 语音合成, 提示学习, 模型评估]
categories: [icml-2026]
description: "语音伪造检测 | 6.8/10"
hiddenInHomeList: true
---

# 📄 FoeGlass: Simple In-Context Learning Is Enough for Red Teaming Audio Deepfake Detectors

#语音伪造检测 #大语言模型 #语音合成 #提示学习 #模型评估

**6.8/10** | 创新 1.3/2 | 严谨 1.1/1.5 | 实验 1.2/1.5 | 清晰 0.8/1 | 影响 1/1.5 | 开源 0/1.5 | 复现 0.4/0.5 | 工程 1/1.5

✅ **6.8/10** | 前50% | #语音伪造检测 | #大语言模型 | #语音合成 #提示学习 | [arxiv](https://openreview.net/forum?id=J6amahDTKV)


### 👥 作者与机构

- 第一作者：Sepehr Dehdashtian（Michigan State University）
- 通讯作者：Sepehr Dehdashtian（Michigan State University）
- 作者列表：Sepehr Dehdashtian（Michigan State University）、Jacob H. Seidman（Reality Defender）、Vishnu Naresh Boddeti（Michigan State University）、Gaurav Bharaj（Reality Defender）

### 💡 毒舌点评

本文首次将LLM的上下文学习用于音频深度伪造检测器的黑盒自动化红队，多样性反馈机制设计巧妙，显著提升了攻击多样性与成功率。然而，方法对超参数敏感且未在真实商业检测器上验证，开源代码缺失严重削弱了其实用说服力与可复现性。

### 📌 核心摘要

本文提出FoeGlass，首个无需微调的黑盒自动化音频深度伪造检测器（ADD）红队方法。其核心是利用推理型大语言模型（LLM）的上下文学习能力，在每次迭代中根据检测器的真实度评分与基于WavLM嵌入的多样性评分生成TTS输入文本，从而探索TTS输出空间中未被现有基准（如ASVspoof5）覆盖的高错误区域。相比无条件采样基线，FoeGlass将假阴性率（FNR）最高提升94%（xTTS-v2上VIT-VoxCelebSpoof-ConstantQ），冷启动下VITS上各ADD的FNR可达74.2%~96.2%，且攻击具有跨模型迁移性。用FoeGlass生成的数据微调ADD后，准确率最多提升41%。方法仅需黑盒访问ADD和TTS，但超参数（如多样性阈值τ_d、上下文长度ℓ）需人工调优，且未在商业级检测器上评估。开源代码与模型权重均未提及，限制了直接复现与工业落地。

### 🔗 开源详情

- 代码：论文中未提及 FoeGlass 的代码仓库链接。
- 模型权重：论文中未提及 FoeGlass 训练或使用的任何模型权重下载链接。
- 数据集：论文使用了 ASVspoof5 和 VoxCelebSpoof 等公开基准数据集，但未提供作者自行生成的红队攻击数据的下载链接。数据集获取方式：ASVspoof5（论文只引用 arXiv:2408.08739，未给直接链接）；VoxCelebSpoof（https://huggingface.co/datasets/MattyB95/VoxCelebSpoof）。
- Demo：论文中未提及在线演示。
- 复现材料：论文附录提供了部分指令提示词示例，但未提供完整的训练配置、检查点或复现脚本。
- 论文中引用的开源项目：
  - Jabberjay（ADD 模型，MattyB95, 2024）: https://github.com/MattyB95/Jabberjay
  - Kokoro-82M（TTS 模型，hexgrad, 2025）: https://github.com/hexgrad/kokoro
  - XTTS-v2（TTS 模型，Coqui.ai, 2025）: https://huggingface.co/coqui/XTTS-v2
  - VoxCelebSpoof 数据集（Boakes, 2024）: https://huggingface.co/datasets/MattyB95/VoxCelebSpoof
  - DF_Arena_1B（检测模型，Kulkarni et al., 2025a）: https://huggingface.co/Speech-Arena-2025/DF_Arena_1B_V_1/
  - DF_Arena_500M（检测模型，Kulkarni et al., 2025b）: https://huggingface.co/Speech-Arena-2025/DF_Arena_500M_V_1/
  - 以下项目被引用但论文未直接提供链接：
    - VITS（Kim et al., 2021）
    - WavLM（Chen et al., 2022）
    - DeepSeek-R1 蒸馏版（Guo et al., 2025）
    - Llama-3.1-8B（Grattafiori et al., 2024）
    - RawNetLite（Di Pierno et al., 2025）
    - RawNet2（Tak et al., 2021）
    - AASIST（Jung et al., 2022）
    - ElevenLabs（商业服务，非开源）: https://elevenlabs.io/
  （凡未给出链接的，论文中均未提供相关 URL。）

### 🏗️ 方法概述和架构

FoeGlass将ADD红队问题形式化为从TTS输入空间U中采样，使生成音频的检测器得分高于阈值τ的输入。整体框架是一个迭代的LLM驱动的搜索流程。


每轮迭代包含四个核心步骤：


1.  上下文设计器（Context Designer）：根据历史记录动态构建LLM的输入上下文。上下文由三部分组成：(a) 固定的指令提示（instruction prompt），描述TTS输入格式（如JSON）、生成参数（转录文本、速度、温度、风格、语音）及多样性策略，并可根据冷启动或热启动场景决定是否包含少量成功攻击示例；(b) 最近ℓ/2个失败攻击的链式思维（CoT）解释、真实度评分与多样性反馈；(c) 最近ℓ/2个成功攻击（最高真实度评分）的CoT、评分与多样性反馈。通过维持成功和失败案例的平衡历史，LLM能够从过往的推理路径中学习模式。初始时历史为空（冷启动）或包含少量示例（热启动，如两个假阴性样本和一个真阳性样本）。

2.  攻击者LLM（Attacker LLM）：采用DeepSeek-R1（基于Llama-3.1-8B蒸馏）等推理型大语言模型，根据提供的上下文生成新的TTS输入u_t（主要是文本转录及可选参数），并输出详细的CoT推理过程。LLM直接生成文本，不进行任何微调。使用推理型LLM而非标准LLM是为了利用其显式的逐步推理能力，这有助于更有效地探索TTS输入空间。

3.  音频生成与评估（Audio Generation and Evaluation）：将LLM生成的输入u_t送入TTS模型G，生成音频样本x_t。接着，将该音频送入目标ADD模型f，得到真实度评分r_t = f(x_t)，即音频被分类为“真实”的概率。若r_t ≥ τ（τ为真实度阈值，设为0.5），则标记为成功攻击；否则为失败。

4.  多样性反馈（Diversity Feedback）：利用预训练音频嵌入模型w（如WavLM）计算新样本x_t的嵌入向量与历史样本集合X_hist所有嵌入向量之间的最大余弦相似度，并据此计算最小余弦距离作为多样性得分：d_t = 1 - max_{z∈w(X_hist)} ⟨w(x_t), z⟩_cos。若d_t < τ_d（多样性阈值），则在下轮迭代的反馈中附加“需要增加多样性”的指令，明确要求LLM改变转录语义，以避免攻击陷入模式崩溃。这种基于最小距离的度量比平均距离更能确保生成样本与历史样本有实质区别。

迭代过程最多进行T次（论文中设为500次），最终收集所有真实度评分≥τ的音频作为假阴性（FN）样本。该方法无需访问ADD或TTS的内部参数，仅需黑盒查询，且整个pipeline不涉及任何模型微调或强化学习，完全依赖上下文中的评分与多样性信号引导LLM的探索方向。


### 💡 核心创新点

1.  首次将LLM上下文学习引入音频深度伪造检测红队：克服了手动红队效率低、强化学习微调需大量数据且易模式崩溃的问题，利用推理型LLM的CoT与历史反馈直接搜索TTS输入空间。
2.  多样性反馈机制：通过基于WavLM嵌入的最小余弦距离度量生成音频的嵌入相似度，并在超过阈值时强制LLM改变转录内容，有效避免了攻击集中于单一成功模式的“模式崩溃”问题。实验证明，该机制在WavLM空间中拓展了发现的失败模式簇。
3.  无微调、纯黑盒设计：攻击者LLM、TTS模型、ADD模型三者均仅需黑盒访问，无需任何模型参数，极大降低了使用门槛并适配各类闭源系统。
4.  生成的攻击具有迁移性与微调增益：针对某一ADD生成的假音频可高概率欺骗其他ADD，且整合这些样本微调ADD后能显著提升其鲁棒性（准确率提升最高41%），证明了方法的实用价值。

### 📊 实验结果

实验在8个ADD模型（ViT/AST backbone，输入特征含CQT、Mel-spectrogram、MFCC，训练集为ASVspoof5或VoxCelebSpoof）和3个TTS模型（VITS、Kokoro-82M、xTTS-v2）上进行。使用FoeGlass生成500个样本，上下文总长度ℓ=40，多样性阈值τ_d=0.01，5次随机种子取平均报告标准差。

与无条件采样的FNR对比（%）：下表为完整Reproduction of Table 1 from the paper。

| TTS模型 | ADD模型（训练集 - 特征）     | 无条件采样           | FoeGlass（冷启动）    | FoeGlass（热启动）    |
| :------ | :--------------------------- | :------------------- | :-------------------- | :-------------------- |
| VITS    | VIT-ASVspoof5-ConstantQ      | 16.85 ± 1.55         | 74.20 ± 8.57          | 81.34 ± 9.60          |
| VITS    | VIT-ASVspoof5-MelSpectrogram | 9.04 ± 1.58          | 10.72 ± 11.16         | 11.60 ± 3.37          |
| VITS    | VIT-ASVspoof5-MFCC           | 64.24 ± 2.09         | 90.76 ± 6.07          | 93.03 ± 2.26          |
| VITS    | VIT-VoxCelebSpoof-ConstantQ  | 42.02 ± 11.14        | 94.04 ± 4.12          | 96.15 ± 2.61          |
| VITS    | VIT-VoxCelebSpoof-MelSpectrogram | 48.78 ± 0.76     | 96.22 ± 2.76          | 96.96 ± 1.38          |
| VITS    | VIT-VoxCelebSpoof-MFCC       | 32.57 ± 1.19         | 95.28 ± 2.90          | 98.08 ± 1.07          |
| VITS    | AST-ASVspoof5                | 2.16 ± 0.53          | 8.44 ± 5.31           | 9.92 ± 5.86           |
| VITS    | AST-VoxCelebSpoof            | 51.18 ± 1.23         | 76.21 ± 8.55          | 79.16 ± 5.04          |
| Kokoro-82M | VIT-ASVspoof5-ConstantQ   | 59.44 ± 2.15         | 99.80 ± 0.35          | 99.80 ± 0.21          |
| Kokoro-82M | VIT-ASVspoof5-MelSpectrogram | 100.00 ± 0.00        | 100.00 ± 0.00         | 100.0 ± 0.0           |
| Kokoro-82M | VIT-ASVspoof5-MFCC        | 99.68 ± 0.16         | 100.00 ± 0.00         | 100.0 ± 0.0           |
| Kokoro-82M | VIT-VoxCelebSpoof-ConstantQ | 0.00 ± 0.00          | 0.10 ± 0.10           | 1.89 ± 2.62           |
| Kokoro-82M | VIT-VoxCelebSpoof-MelSpectrogram | 0.00 ± 0.00      | 7.52 ± 11.67          | 39.72 ± 20.78         |
| Kokoro-82M | VIT-VoxCelebSpoof-MFCC    | 0.00 ± 0.00          | 8.62 ± 6.28           | 16.80 ± 3.96          |
| Kokoro-82M | AST-ASVspoof5             | 95.64 ± 0.84         | 99.93 ± 0.09          | 100.0 ± 0.0           |
| Kokoro-82M | AST-VoxCelebSpoof         | 99.72 ± 0.37         | 100.00 ± 0.00         | 100.0 ± 0.0           |
| xTTS-v2 | VIT-ASVspoof5-ConstantQ      | 53.80 ± 1.02         | 93.63 ± 0.77          | 93.76 ± 2.86          |
| xTTS-v2 | VIT-ASVspoof5-MelSpectrogram | 23.08 ± 0.55         | 12.87 ± 5.08          | 68.12 ± 18.52         |
| xTTS-v2 | VIT-ASVspoof5-MFCC           | 88.92 ± 1.02         | 91.92 ± 6.72          | 94.00 ± 5.12          |
| xTTS-v2 | VIT-VoxCelebSpoof-ConstantQ  | 2.24 ± 0.50          | 80.72 ± 9.44          | 96.29 ± 2.02          |
| xTTS-v2 | VIT-VoxCelebSpoof-MelSpectrogram | 8.72 ± 1.78      | 87.87 ± 5.27          | 88.83 ± 4.70          |
| xTTS-v2 | VIT-VoxCelebSpoof-MFCC       | 9.16 ± 1.81          | 71.60 ± 19.26         | 93.13 ± 3.10          |
| xTTS-v2 | AST-ASVspoof5                | 4.24 ± 0.85          | 4.86 ± 3.42           | 3.97 ± 2.79           |
| xTTS-v2 | AST-VoxCelebSpoof            | 9.68 ± 1.45          | 48.43 ± 22.61         | 63.30 ± 15.50         |

与ASVspoof5数据集对比：同一TTS下，ASVspoof5自带子集的FNR极低（VITS-ConstantQ仅0.352%），而FoeGlass生成的对应TTS样本FNR高达81.34%（热启动），说明ASVspoof5严重欠采样高错误区域。

微调增益：用FoeGlass攻击RawNetLite生成的数据微调后，RawNetLite准确率从49.6%降至8.2%（即提升41%以上的假音频检出能力），AASIST准确率从15.2%降至0.2%，且AASIST未参与攻击，显示攻击迁移性与数据增效。


攻击迁移性热力图（图3与图7）表明，针对源ADD生成的样本在其他目标ADD上普遍获得高于基线的FNR，冷启动和热启动下均呈现良好迁移性。


多样性消融：去除多样性反馈后，在xTTS-v2上部分ADD的FNR出现下降或标准差增大，PCA聚类可视化（图5与6）显示发现的失败模式明显减少，直观证明了多样性反馈的有效性。


收敛性分析：图5展示了FNR随迭代次数的变化曲线，表明在多数设置下，FNR在200-300次迭代后趋于平稳，说明500次的迭代预算对于本实验是相对充分的。


附加ADD模型评估：在直接处理波形的检测器（RawNet2, RawNetLite, AASIST, DF_Arena系列）上，FoeGlass相比无条件采样的攻击成功率提升最高达42%（RawNetLite）和27%（AASIST），进一步验证了方法的通用性。

LLM能力消融：将攻击者LLM替换为GPT-4o（一种非推理型LLM）后，攻击成功率显著下降，支持了论文关于“推理型LLM的CoT能力对于有效搜索TTS空间至关重要”的论点。

嵌入模型鲁棒性：使用CLAP、BEATs等替换WavLM进行多样性反馈，性能相当，表明该机制对嵌入模型的选择具有一定鲁棒性。

训练集影响分析：对比在不同训练集（ASVspoof5 vs. VoxCelebSpoof）上训练的ADD，FoeGlass生成的攻击性存在差异，提示训练数据的分布会影响攻击方法的有效性。

成功攻击文本示例：展示了FoeGlass生成的成功攻击文本转录，语义连贯，并非随机乱码。

### 🔬 细节详述

- LLM与嵌入模型：攻击者LLM为DeepSeek-R1蒸馏至Llama-3.1-8B，多样性嵌入模型主要为WavLM。
- TTS模型：VITS、Kokoro-82M、xTTS-v2，均为开源模型。
- ADD模型：基于ViT或AST的多种特征（CQT、Mel、MFCC）的二分类器，训练集为ASVspoof5或VoxCelebSpoof，共8种；附录中补充RawNet2、RawNetLite、AASIST、DF_Arena等直接波形检测器。
- 迭代参数：最大迭代次数500（每TTS生成500个样本），上下文长度ℓ=40（成功与失败各占20），多样性阈值τ_d=0.01，真实度阈值τ=0.5。
- 冷/热启动：冷启动时LLM仅依赖指令提示进行探索；热启动则从预先收集的少量成功和失败攻击中提供少量示例（论文中为3个），以加速探索。
- 计算资源：4块NVIDIA L40S（48GB）。
- 损失函数与训练：本文方法不涉及模型训练，无损失函数；LLM与ADD均冻结。微调实验仅说明使用FoeGlass数据，未提供微调超参数。
- 正则化/稳定技巧：未说明。

### ⚖️ 评分理由

*   创新性 (1.3/2)：首次将LLM上下文学习应用于音频深度伪造检测的黑盒红队，并以多样性反馈规避模式崩溃，概念较新颖。但核心思想是将已知的LLM推理能力、嵌入相似度度量与反馈循环组合成搜索策略，方法组合的原创性高于基础理论突破，创新程度中等偏上。
*   技术严谨性 (1.1/1.5)：问题定义清晰，算法给出伪代码，多样性度量选取合理，消融实验验证了反馈组件的必要性。但整体数学贡献有限，缺乏对多样性阈值设置的理论分析或收敛性讨论，对LLM行为的内在机制缺乏深入研究，严谨性中等。
*   实验充分性 (1.2/1.5)：在多个TTS和ADD模型上进行了全面对比，包括无条件采样基线、ASVspoof5数据集、消融实验、迁移性分析及微调验证，结果有力支持了方法有效性。但所有实验的样本量仅500，未提供统计显著性检验，且仅在开源ADD上测试，缺少对商业系统的评估。图5的收敛曲线在一定程度上缓解了对样本量不足的担忧。
*   清晰度 (0.8/1)：整体结构合理，算法框图和流程图辅助理解，上下文设计描述较细致。然而部分关键细节（如微调超参数、多样性阈值选择依据）位置在后附录，正文中直接引用大量附录内容，影响阅读流畅性。部分表格中数字排版混乱，降低了清晰度。
*   影响力 (1.0/1.5)：作为首个自动化ADD红队工具，为语音伪造检测鲁棒性评估提供了新范式，生成的攻击样本可用于增强训练数据，具有一定推动力。但方法依赖特定LLM和嵌入模型，泛化到所有ADD/TTS的可靠性待验证；攻击性质存在伦理风险且缺乏防御方案配套，实际影响力受限。图8显示GPT-4o效果显著差于专用推理LLM，暗示方法在商业闭源LLM上的效果可能打折扣，这影响了其泛化影响力的评估。
*   开源 (0.0/1.5)：论文未提供代码仓库链接、模型权重或数据集公开信息，仅给出部分prompt示例，核心代码处于完全闭源状态，严重阻碍复现与社区采纳。
*   可复现性 (0.4/0.5)：尽管代码未公开，但论文给出了详细的prompt示例、算法伪代码、超参数（ℓ=40, τ_d=0.01）、使用的公开模型清单和计算硬件，较容易参考重新实现，因此可复现性文档较为充分。但无开源代码和完整实验配置，仍构成一定障碍。
*   工程/实践价值 (1.0/1.5)：方法构建了一个完整的“LLM查询→TTS生成→ADD评估→反馈”迭代pipeline，具备实际部署为红队测试系统的工程潜力；但缺少关于速率限制、成本、多模态扩展等生产环境考量，且无代码开源，工程复用价值被削弱。下图展示的超参数敏感性，提示实际部署中需要精细调优，增加了工程化难度。

### 🚨 局限与问题

论文明确承认的局限：
- 方法存在需人工优化的超参数（LLM选择、上下文长度ℓ、多样性阈值τ_d），探索与利用的权衡普遍存在于自动红队中。
- 仅在开源ADD上测试，未来需在商业检测器上验证。
- 攻击可能被恶意利用，提出了一些潜在防御思路（限制查询、对抗表征学习等）。

审稿人发现的潜在问题：
- LLM能力依赖风险：攻击成功率高度依赖于所用推理LLM的能力，特别是其CoT推理质量。当使用GPT-4o这类非专用推理模型时，性能大幅下降。这意味着方法效果与底层LLM的迭代进展强绑定，且商业闭源LLM的API成本可能影响大规模部署。
- 嵌入空间对齐假设：多样性度量基于WavLM嵌入的余弦距离，假设该嵌入空间中距离能准确反映音频的声学和语义多样性。尽管替换为其他主流音频嵌入模型后性能接近，缓解了此担忧，但仍存在该嵌入空间可能忽略某些对ADD重要的区分性特征的潜在风险。
- 实验规模与泛化性：实验仅每个TTS生成500个样本，虽然收敛分析显示多数情况下已平稳，但该预算是否足以覆盖大型、复杂的TTS输出空间仍存疑。在更多样、更现代的闭源TTS模型上的表现未知，例如未在ElevenLabs等流行商业服务上进行测试。
- 攻击自然度未验证：论文未对FoeGlass生成音频的自然度或与真实人类语音的感知相似度进行评估。虽然图14展示了语义连贯的文本，但声学层面可能因追求欺骗检测器而产生不自然的假象，这削弱了其作为“自然对抗样本”的代表性和威胁评估的有效性。
- 对白盒防御的脆弱性：方法完全依赖黑盒查询，未考虑如果攻击者拥有关于ADD的任何白盒信息（如梯度、训练数据）时，攻击是否还能有效。这限制了其在更实际、复杂攻击场景下的应用。

---

[← 返回 ICML 2026 论文速递](/audio-paper-digest-blog/posts/icml2026-summary/)
