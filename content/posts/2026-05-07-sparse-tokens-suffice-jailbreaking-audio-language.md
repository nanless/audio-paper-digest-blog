---
title: "Sparse Tokens Suffice: Jailbreaking Audio Language Models via Token-Aware Gradient Optimization"
date: 2026-05-07
draft: false
tags: [语音大模型, 音频安全, 对抗样本, 信号处理]
categories: [论文速递]
description: "音频安全 | 7.5/10"
hiddenInHomeList: true
---

# 📄 Sparse Tokens Suffice: Jailbreaking Audio Language Models via Token-Aware Gradient Optimization

#语音大模型 #音频安全 #对抗样本 #信号处理

✅ **7.5/10** | 前25% | #音频安全 | #对抗样本 | #语音大模型 #信号处理 | [arxiv](https://arxiv.org/abs/2605.04700v1)

学术质量 6.0/7 | 选题价值 1.5/2 | 复现加成 0.0 | 置信度 高


### 👥 作者与机构

-   第一作者：未说明（论文未明确区分第一作者）
-   通讯作者：未说明（论文未明确标注）
-   作者列表：Zheng Fang, Xiaosen Wang, Shenyi Zhang, Shaokang Wang, Zhijin Ge（论文中未提供任何作者的所属机构信息）

### 💡 毒舌点评

这篇论文的亮点在于通过一个巧妙的观察（梯度能量高度集中于少数token），将看似复杂的音频波形优化问题简化成了“抓关键”，提出了高效的稀疏攻击方法TAGO。但其短板也很明显：研究聚焦于“如何更高效地破坏安全”，视角相对负面；且方法的成功严重依赖于特定的超参数（如token保留率ζ）和早停策略，在真实场景的泛化能力上论证稍显不足。

### 📌 核心摘要

1.  解决的问题：针对音频语言模型（ALM）的越狱攻击通常采用对整个音频波形进行密集梯度更新的方法，这在高维音频输入上计算冗余且效率不高。本文探究了这种密集优化的必要性。
2.  方法核心：提出Token-Aware Gradient Optimization (TAGO)。核心思想是分析ALM在越狱优化过程中，梯度能量在音频token层面上的分布，发现其高度非均匀，仅一小部分token贡献了大部分梯度能量。因此，在每次迭代中，TAGO只对梯度能量最高的前ζ比例token所对应的音频区域（receptive field）进行梯度更新，而将其他区域的梯度置零，实现稀疏优化。
3.  创新之处：与已有方法（如SpeechGuard、AdvWave）的密集更新不同，TAGO首次将优化粒度从波形样本点提升到与模型内部表示对齐的“音频token”级别，并利用梯度的稀疏性进行自适应、token选择性的更新。此外，TAGO还设计了模型兼容的前缀模板和EOS抑制策略。
4.  实验结果：在Qwen3-Omni， Qwen2.5-Omni和LLaMA-Omni三个模型上的实验表明，TAGO在攻击成功率上优于基线。即使将token保留率降至0.25（仅更新25%的token对应区域），在Qwen3-Omni上仍能保持86%的ASR_l（LLM判别成功率），仅比全量更新的87%下降1个百分点。同时，实验否定了“先密集优化再稀疏化”的后处理方法。
5.  实际意义：证明了针对ALM的越狱攻击存在大量冗余更新，揭示了模型安全对齐机制在音频模态上的一个潜在脆弱点（梯度信号分布不均）。这为攻击者提供了更高效的攻击思路，也为防御者指出了需要关注的脆弱区域（关键音频token），推动了对音频模型安全机制的深入理解。
6.   主要局限性：攻击效果对超参数（如token保留率ζ和早停置信度ρ）较为敏感；虽然构造了模型兼容前缀，但仍属于基于特定文本前缀的约束优化，可能无法覆盖所有拒绝场景；主要评估了白盒攻击，对黑盒场景的迁移性未做探讨。

### 🔗 开源详情

- 代码：论文中未提及代码链接。
- 模型权重：论文中评估的三个模型均提供了HuggingFace链接：
    1. Qwen3-Omni-30B-A3B-Instruct: https://huggingface.co/Qwen/Qwen3-Omni-30B-A3B-Instruct
    2. Qwen2.5-Omni-7B: https://huggingface.co/Qwen/Qwen2.5-Omni-7B
    3. LLaMA-3.1-8B-Omni: https://huggingface.co/ICTNLP/Llama-3.1-8B-Omni
- 数据集：论文中未提供数据集的直接下载链接。主要使用的数据集为 AdvBench-50（基于 Chao et al. (2025) 的有害指令集）和 HarmBench（Mazeika et al. (2024)）。需参考相应原始论文获取。
- Demo：论文中未提及。
- 复现材料：论文提供了详细的复现信息，包括：
    - 对话模板（见论文附录A表5）。
    - 拒绝词列表（见论文附录A表6）。
    - 模型兼容的目标前缀（见论文附录A表7）。
    - 优化超参数（如 K=500, η=10⁻³, λ=0.02, λₑₒₛ=0.2, ε=0.1）。
    - 评判模型及提示（见论文附录A中“Judge models and judge prompts”部分，包含SorryBench评判器及Gemini提示）。
- 论文中引用的开源项目：
    1. Whisper (语音编码器)：https://github.com/openai/whisper
    2. Google Cloud Text-to-Speech (用于合成测试音频)：https://cloud.google.com/text-to-speech
    3. SorryBench 评判模型 (Mistral-7B-Instruct-v0.2-sorry-bench-202406)：https://huggingface.co/sorry-bench/ft-mistral-7b-instruct-v0.2-sorry-bench-202406
    4. Gemini 3 Flash (用作 LLaMA-Omni 的评判模型)：未提供具体链接。

### 🏗️ 模型架构

TAGO并非一个传统意义上的神经网络模型，而是一种针对已有ALM的优化攻击算法。其整体架构（流程）如图1所示：

![图1: (Left) The architecture of ALMs. (Right) Overview of token-aware gradient optimization (TAGO).](https://arxiv.org/html/2605.04700v1/figures/overview.png)

ALM架构（左图）：
- 输入：音频波形`x`和文本提示`t`。
- 音频编码前端 `Φ(·)`：首先将波形转换为时频谱图，然后通过卷积等操作在时间轴上进行下采样，得到“预注意力音频token”序列 `Φ(x) ∈ R^(T×d_A)`。`T`是token序列长度，`d_A`是维度。
- 音频编码器 `E_A(·)`：对预注意力token进行基于注意力的编码，得到编码后的音频表示 `E_A(Φ(x))`。
- 文本嵌入层 `E_T(·)`：将文本提示`t`转换为文本嵌入。
- 语言模型骨干：条件化在编码的音频表示和文本嵌入上，以自回归方式生成文本响应`y`，直到生成结束符`EOS`。

TAGO算法流程（右图及Algorithm 1）：
1.  初始化：扰动δ初始化为0。
2.  迭代优化：
    a. 计算损失：计算当前扰动音频下的目标前缀负对数似然损失（式4），并加入L2正则项和EOS抑制项（式13）。
    b. 计算token对齐梯度能量：计算波形梯度`∇_δL`，并按照每个预注意力音频token `Φ_i` 的receptive field `R(i)` 聚合梯度能量，得到每个token的梯度能量`g̃_i`（式6, 7）。
    c. 稀疏token选择：根据当前token的梯度能量`g̃`，选择能量最高的前 `⌈ζT⌉` 个token，构成集合`S`（式10）。
    d. 构建波形掩码：根据被选中的token集合`S`，构造一个二值掩码`M`，将这些token对应的波形区域置1，其余置0（式11）。
    e. 稀疏更新：将原始梯度与掩码`M`进行逐元素相乘，得到稀疏梯度，然后用此梯度更新扰动`δ`（式12）。
3.  停止条件：当损失低于阈值`τ`或达到最大迭代次数时停止。

关键设计动机：
- 粒度对齐：选择预注意力音频token作为优化单位，是因为它们与波形有明确的映射关系，且在进入自注意力层前保持了时间局部性，适合作为分析单元。
- 稀疏性利用：利用观察到的梯度能量集中现象，避免对贡献小的“低能量”区域进行无用的更新，从而提升效率。
- 辅助策略：
    - 模型兼容前缀：通过分析模型在良性查询上的回复，自动构建匹配其风格的目标前缀，减少人工设计。
    - EOS抑制：防止模型在生成指定前缀后立即结束，鼓励其继续生成后续内容。

### 💡 核心创新点

1.  发现并利用ALM越狱优化中的token级梯度异质性：
    - 局限：传统攻击对整个波形进行密集更新，忽略了模型内部表示的结构差异。
    - 如何工作：通过系统测量，发现仅Top 16%的音频token就贡献了约90%的梯度能量（Qwen3-Omni）。这揭示了优化信号的极度不均匀分布。
    - 收益：为稀疏优化提供了坚实的经验证据和理论基础。

2.  提出Token-Aware Gradient Optimization (TAGO) 框架：
    - 局限：已有稀疏优化方法（如后剪枝）可能丢失关键优化轨迹。
    - 如何工作：在每次迭代中动态地根据当前梯度能量选择最重要的token区域进行更新（式10-12），强制优化过程聚焦于关键区域。
    - 收益：实现了在保持高攻击成功率的同时，大幅减少需要更新的波形区域（如ζ=0.25），且效率提升远高于简单的比例关系（迭代次数增加不到30%，而非300%）。

3.  设计针对性优化目标以增强攻击鲁棒性：
    - 局限：单一固定的前缀可能不匹配不同模型的风格，且模型可能在前缀生成后立即拒绝。
    - 如何工作：a) 构建模型兼容前缀模板；b) 在损失函数中增加EOS抑制项`λ_eos * p_θ(EOS|h_m)`。
    - 收益：使攻击更通用、更稳定，能诱使模型生成更长的后续内容。

### 🔬 细节详述

-   训练数据：
    -   评测数据集：主要使用AdvBench-50（Chao et al., 2025），包含50条有害指令。每条指令通过Google Cloud TTS合成为两个不同说话人的音频，共100个样本。另在HarmBench（Mazeika et al., 2024）的200条指令上进行了扩展评估。
    -   前缀构建数据：为每个ALM使用了3条良性查询及模型回复来构建模型兼容前缀模板（附录Table 7）。
    -   论文未说明用于构建TAGO本身（非评测）的专用训练数据。
-   损失函数：见式(13)。包含三部分：
    1.  前缀交叉熵损失 `L_CE`：最大化目标前缀`r_{1:m}`在教师强制下的生成概率。
    2.  L2正则项 `λ * ||δ||²_2`：约束扰动大小。`λ=0.02`。
    3.  EOS抑制项 `λ_eos * L_eos`：惩罚模型在生成前缀后立即产生EOS。`L_eos = p_θ(EOS | h_m)`，`λ_eos=0.2`。
-   训练策略：
    -   优化器：标准梯度下降（或类似变种），未明确说明是否使用Adam等自适应优化器。
    -   学习率/步长：固定步长`η=10^{-3}`。
    -   迭代轮数：最大迭代次数`K=500`。
    -   早停策略：当平均前缀交叉熵损失`L_CE ≤ τ(ρ) = -log(ρ)`时停止，其中`ρ`为目标置信度（如0.9）。
-   关键超参数：
    -   扰动预算`ε=0.1` (L-infinity范数)。
    -   Token保留率`ζ`：主要考察`{1.0, 0.75, 0.5, 0.25}`，扩展实验考察`{0.1, 0.05}`。
    -   早停置信度`ρ`：`{0.9, 0.8, 0.7}`。
-   训练硬件：论文未说明。
-   推理细节：
    -   解码策略：所有方法在评估时使用贪心解码（`do_sample=False`）。
    -   评估模型：ASR_r基于预定义的拒绝词列表（附录Table 6）；ASR_l使用外部LLM作为判断器。对Qwen模型使用微调的Mistral-7B（SorryBench版本），对LLaMA-Omni使用Gemini 3 Flash。
-   正则化技巧：L2正则项`λ ||δ||²_2`是主要的正则化手段。

### 📊 实验结果

1. AdvBench-50 主要结果 (Table 2)
| Method | Qwen3-Omni | Qwen2.5-Omni | LLaMA-Omni |
| :--- | :---: | :---: | :---: |
| | ASR_r (%) | ASR_l (%) | ASR_r (%) | ASR_l (%) | ASR_r (%) | ASR_l (%) |
| Direct | 0 | 0 | 19 | 11 | 95 | 49 |
| SpeechGuard | 100 | 42 | 94 | 49 | 100 | 34 |
| AdvWave | 70 | 45 | 36 | 4 | 100 | 68 |
| Post-hoc prune (ζ=0.25) | 99 | 11 | 38 | 6 | 97 | 51 |
| TAGO (ζ=1.0) | 100 | 87 | 100 | 65 | 100 | 71 |
| TAGO (ζ=0.25) | 99 | 86 | 97 | 53 | 100 | 72 |

关键结论：TAGO在全量更新（ζ=1.0）和稀疏更新（ζ=0.25）下均优于所有基线。特别值得注意的是，TAGO (ζ=0.25) 在Qwen3-Omni上ASR_l仅下降1个百分点，而在LLaMA-Omni上ASR_l甚至略有提升（71%→72%），这强有力地支持了“密集更新冗余”的论点。后剪枝方法（Post-hoc prune）性能显著低于同等稀疏度的TAGO。

2. 梯度分布可视化 (Figure 2, 7)
![图2: An illustration of the audio token-level gradient distribution during iterative optimization on Qwen3-Omni.](https://arxiv.org/html/2605.04700v1/figures/qwen3_gradient_heatmap.png)
![图7: Illustrations of the audio token-level gradient distribution during iterative optimization on Qwen2.5-Omni and LLaMa-Omni.](https://arxiv.org/html/2605.04700v1/figures/qwen25_gradient_heatmap.png)
关键结论：热力图直观显示了梯度能量在优化过程中高度集中于少数特定音频token，且这些高能量token在多次迭代中保持主导地位，而大部分token的能量微乎其微。

3. TAGO超参数敏感性 (Table 3, Figure 3)
- 对早停置信度ρ的敏感性：更严格的早停条件（更高ρ，如0.9）能获得更高的ASR_l，但需要更多迭代次数。
- 对token保留率ζ的敏感性：降低ζ对ASR_l的影响相对温和，但会导致迭代次数增加。然而，迭代次数的增长速度远慢于`1/ζ`。例如，在Qwen3-Omni上，ζ从1.0降至0.25，平均迭代次数仅增加约26%。

![图3: (a) Qwen3-Omni (b) Qwen2.5-Omni (c) LLaMa-Omni - 平均迭代次数与ζ和ρ的关系](https://arxiv.org/html/2605.04700v1/figures/ablation_avg_iters_qwen3.png)
![图3续](https://arxiv.org/html/2605.04700v1/figures/ablation_avg_iters_qwen25.png)
![图3续](https://arxiv.org/html/2605.04700v1/figures/ablation_avg_iters_llama.png)

4. 极端稀疏度扩展实验 (Figure 4)
在Qwen3-Omni上，即使ζ降至0.1（仅更新10%区域），TAGO仍能保持ASR_r=97%， ASR_l=67%的较高水平，证明了方法的鲁棒性。

![图4: (a) ASR_r和ASR_l随ζ的变化 (b) 平均迭代次数随ζ的变化 (在Qwen3-Omni， ρ=0.9)](https://arxiv.org/html/2605.04700v1/figures/qwen3_rho0.9_zeta_fine_asr.png)
![图4续](https://arxiv.org/html/2605.04700v1/figures/qwen3_rho0.9_zeta_fine_iters.png)

5. 模型兼容前缀消融实验 (Table 9, Figure 5)
使用固定的、非模型特定的前缀（如“Sure, here is”）会导致攻击成功率显著下降（如在Qwen2.5-Omni上ASR_l从53%降至26%），并需要更多优化迭代。这证明了自适应构建前缀的重要性。

![图5: 固定前缀消融实验的平均迭代次数 (ρ=0.9, ζ=0.25)](https://arxiv.org/html/2605.04700v1/figures/fixed_prefix_iterations.png)

6. 波形扰动可视化 (Figure 8)
![图8: 原始有害音频与TAGO扰动后音频的波形对比](https://arxiv.org/html/2605.04700v1/figures/audios.png)
关键结论：TAGO产生的扰动在波形上与原音频非常接近，即使是稀疏更新（ζ=0.25）也没有引起明显的波形畸变，表明攻击具有一定的隐蔽性。

### ⚖️ 评分理由

-   学术质量（6.0/7）：论文提出了一个清晰、新颖的假设（梯度异质性），并通过扎实的分析（测量、理论推导）和全面的实验（多模型、多数据集、多消融）对其进行了验证。方法设计环环相扣，技术细节完整。扣分点主要在于：1）研究本身聚焦于攻击方法，而非模型架构或通用学习范式的创新；2）虽然实验充分，但未探讨更复杂的场景（如黑盒迁移、不同音频内容类型）。
-   选题价值（1.5/2）：选题紧扣多模态模型安全这一热点，具有明确的前沿性和研究价值。对于从事AI安全、对抗鲁棒性研究的读者有直接参考价值。但对更广泛的语音处理社区，应用范围相对有限。
-   开源与复现加成（0.0/1）：论文未提供代码。虽然详细描述了实验设置，但核心算法（TAGO）的代码未开源，这极大降低了独立复现和验证的便利性。因此得分为0。

### 📎 补充信息

- [实验结果] 补充：论文在HarmBench数据集（200条指令）上的扩展评估结果（Table 4）在已有分析中未被提及。具体结果如下表所示，表明TAGO在更广泛的数据集上同样有效：
    | 模型 | 方法 | ASR_r (%) | ASR_l (%) |
    |---|---|---:|---:|
    | Qwen3-Omni | Direct | 5.5 | 4.5 |
    | | TAGO (ζ=1.0) | 100 | 76.5 |
    | | TAGO (ζ=0.25) | 99 | 70.0 |
    | Qwen2.5-Omni | Direct | 40.5 | 18.5 |
    | | TAGO (ζ=1.0) | 100 | 62.5 |
    | | TAGO (ζ=0.25) | 98 | 62.5 |
    | LLaMA-Omni | Direct | 97.0 | 48.5 |
    | | TAGO (ζ=1.0) | 100 | 74.5 |
    | | TAGO (ζ=0.25) | 100 | 70.0 |
- [评分理由] 补充：对论文“研究视角”的评价可进一步细化。论文在引言中明确将自身定位为“a first step toward understanding the optimization signal underlying audio jailbreaks”，在结论中也重申此工作是为了“理解ALM安全对齐机制的内部机制和局限性，从而为设计更稳健的防护措施提供信息”。因此，其价值不仅在于提出高效攻击，更在于通过攻击这一视角揭示了模型安全对齐机制在音频模态上的一个潜在脆弱点（梯度信号分布不均），为防御研究提供了关键洞见。
- [细节详述] 补充：关于“优化器”，论文在算法1和正文式(12)中明确使用了梯度下降（Gradient Descent）。在附录A中，对于基线方法AdvWave，也说明使用相同的设置。因此，优化器是明确的，而非“未明确说明”。
- [核心摘要] 补充：在“主要局限性”中，论文还明确指出了一项未来方向作为局限，即：“We leave the replacement of prefix-constrained objectives with adaptive objectives derived from hidden-state-based interpretability as future work.” 这表明当前方法依赖于前缀约束，而利用模型内部可解释性设计更自适应的目标是一个待解决的问题。

---

[← 返回 2026-05-07 语音/音乐/音频论文速递](/audio-paper-digest-blog/posts/2026-05-07/)
