---
title: "Diffusion Domain Expansion: Learning to Coordinate Pre-trained Diffusion Models"
date: 2026-05-25
draft: false
tags: [扩散模型, 域扩展, 视觉Transformer, 多条件生成, 音频生成, 图像生成, 预训练模型复用, 位置编码外推]
categories: [论文速递]
description: "音频生成 条件图像生成 | 4.8/10"
hiddenInHomeList: true
---

# 📄 Diffusion Domain Expansion: Learning to Coordinate Pre-trained Diffusion Models

#扩散模型 #域扩展 #视觉Transformer #多条件生成 #音频生成 #图像生成 #预训练模型复用 #位置编码外推

📝 **4.8/10** | 后50% | #音频生成 #条件图像生成 | #扩散模型协调 #视觉Transformer | #扩散模型 #域扩展 | [arxiv](https://arxiv.org/abs/2605.23275v1)

学术质量 3.4/7 | 影响力 0.8/2 | 可复现性 0.6/2


### 👥 作者与机构

Egor Lifar, Semyon Savkin, Timur Garipov, Shangyuan Tong, Tommi Jaakkola
（机构信息原文未提及）

### 💡 毒舌点评

这篇论文的核心卖点——"协调器能泛化到训练时未见过的更大规模"——在实验中被当作现象陈列，却没有任何理论解释，堪称学术版的"我们观察到了魔法"。作者用ViT+RoPE+重叠平均这一极为常规的组合，包装出一个"universally simple"的框架，却连"universal"的精确定义都懒得给。更讽刺的是，CLEVR实验暴露了致命伤：DDE在训练分布内（L=1,2）的表现反而弱于RRR基线，这意味着用户需要先知般的能力来判断何时该用DDE、何时该用基线——这种"部分优于、部分劣于"的曲线，作者竟能包装成"significantly outperforms"。音乐实验中的RNN基线仅10个epoch且架构明显欠优化，与DDE的对比堪称"精心设计的陪跑"。卫星图像的FID计算方式更是可疑：用条件生成样本对比全部真实图像，而非条件对应的真实图像，这一操作可能系统性压低FID值。最可笑的是Limitations部分，作者轻描淡写地写了一句"需要额外数据和时间训练协调器"，却对理论真空、训练目标设计缺陷、计算瓶颈等真正的问题视而不见。整篇论文像一份技术报告，有现象、有数字，却缺乏让审稿人信服的深度分析。

### 📌 核心摘要

本文提出Diffusion Domain Expansion (DDE)，通过轻量级可训练的ViT协调器网络(Coordinator) \(C_{[\cdot]}\) 协调多个预训练扩散模型的去噪输出，实现生成域在两个维度上的扩展：生成对象的大小（如更长音频、更大图像）和条件输入的数量（如多条件图像生成）。协调器在训练规模 \(L_{\text{train}}\) 上训练后，能够泛化到更大的测试规模 \(L_{\text{test}} \geq L_{\text{train}}\)。方法采用EDM框架和Karras等人的ODE表述，协调器架构基于Peebles & Xie (2023)的ViT并结合RoPE位置编码(Su et al., 2023)和MultiDiffusion风格的重叠区域平均机制。实验覆盖三个领域：Slakh2100音乐生成（\(L_{\text{train}}=5, L_{\text{test}}=13\)）、CLEVR多条件图像生成（\(L_{\text{train}}=2, L_{\text{test}}=5\)）、自建Google Maps卫星图像数据集（训练于\(N=96\)，测试于\(N=128\)）。

### 🔗 开源详情

- 代码：未提及
- 模型权重：未提及
- 数据集：
  - Slakh2100：使用Mariani et al. (2024)发布的版本，原始数据集官网 https://www.slakh.com/
  - CLEVR：使用Du et al. (2023)作者发布的版本，原始数据集 https://cs.stanford.edu/people/jcjohns/clevr/
  - Map/Satellite Image Dataset：作者自建，使用Google Maps API获取，7,300样本，区域为中心 \(35.707^\circ\text{N}, 139.600^\circ\text{E}\) 的 \(20\times 20\) km正方形，未提供公开下载链接
- Demo：未提及
- 复现材料：
  - 训练框架：EDM (Karras et al., 2022)，单张A100 GPU
  - 优化器：Adam，各域学习率不同（音乐：\(10^{-4}\)；CLEVR：\(10^{-5}\)；Map：\(3\times 10^{-5}\)）
  - Batch size：音乐base 8/coordinator 4；CLEVR base 32/coordinator 16；Map base 16/coordinator 16
  - 训练epoch：音乐base 300/coordinator 10；CLEVR base 1050/coordinator 20；Map base 200/coordinator 20
  - 协调器使用EMA
  - Heun采样器参数：\(\sigma_{\max}=20, \sigma_{\min}=10^{-4}, S_{\text{churn}}=20.0\)，Karras schedule \(\rho=7\)，150步
  - 噪声采样：log-normal分布（音乐mean=-3, std=1.0；CLEVR mean=-1, std=1.6）
- 引用的开源项目：
  - denoising_diffusion_pytorch：用于CLEVR分类器和Map base model的UNet架构，论文写"(url)"但未给具体URL
  - EDM framework (Karras et al., 2022)：官方实现 https://github.com/NVlabs/edm
  - CleanFID (Parmar et al., 2022)：官方实现 https://github.com/GaParmar/clean-fid

### 🏗️ 方法概述和架构

给定预训练条件扩散模型 \(p(x|y)\) 及其去噪网络 \(D(x,y,t)\)，DDE旨在扩展生成域至 \(p(X_{[L]}|Y_{[L]})\)，其中 \(X_{[L]}\) 和 \(Y_{[L]}\) 分别为扩展后的生成对象和条件输入。核心假设是扩展的输入-输出对可通过分解函数 \(F\) 分解为 \(L\) 个基础域片段：\(([x_1,\ldots,x_L],[y_1,\ldots,y_L]) = F(X_{[L]},Y_{[L]})\)，其中所有 \(x_i \in \mathcal{X}\) 和 \(y_i \in \mathcal{Y}\) 均在基础模型支持的域内。分解允许片段间存在重叠。


DDE构建复合去噪器 \(D_{[L]}\)，由三部分组成：预训练基础去噪器 \(D\)、可训练协调器 \(C_{[\cdot]}\)、以及分解函数 \(F\)。对于扩展域的噪声样本 \(X_{[L]}(t)\)，复合去噪器定义为：

\[D_{[L]}(X_{[L]}(t), Y_{[L]}, t) = C_{[L]}\left([D(x_i(t), y_i, t)]_{i=1}^{L}, [y_i]_{i=1}^{L}, t\right)\]

其中 \(([x_i(t)]_{i=1}^{L}, [y_i]_{i=1}^{L}) = F(X_{[L]}(t), Y_{[L]})\)。协调器接收两个输入序列：(1) 预训练去噪器在各片段上的输出 \([D(x_i(t), y_i, t)]_{i=1}^{L}\)；(2) 条件信息 \([y_i]_{i=1}^{L}\)，输出对干净扩展对象 \(X_{[L]}(0)\) 的估计。


协调器通过最小化复合去噪器的去噪误差进行训练：

\[\mathcal{L}_{[L_{\text{train}}]} = \mathbb{E}_{t\sim p(t)} \mathbb{E}_{(X_{[L_{\text{train}}]}, Y_{[L_{\text{train}}]})\sim \mathcal{D}^{N}_{[L_{\text{train}}]}} \mathbb{E}_{\varepsilon\sim\mathcal{N}(0;t^2)} \left[\lambda(t)\left\|D_{[L_{\text{train}}]}(X_{[L_{\text{train}}]}+\varepsilon, Y_{[L_{\text{train}}]}, t) - X_{[L_{\text{train}}]}\right\|_{2}^{2}\right]\]

关键设计选择：协调器直接预测 \(X_{[L]}(0)\)（干净图像），而非标准扩散训练中的噪声 \(\varepsilon\) 或分数函数。这与公式(1)中标准去噪目标的形式一致（\(D\) 预测干净 \(x\)），但论文未解释为何此设计优于预测噪声的变体，也未讨论不同时间步 \(t\) 下目标尺度变化可能带来的训练稳定性问题。


协调器采用基于Peebles & Xie (2023)的ViT架构，核心组件包括：

Patchify与位置编码：将预训练去噪器的输出 \(D(x_i(t), y_i, t)\) 切分为patch，并附加全局位置编码——即编码各patch相对于完整扩展对象的位置，而非patch内部的局部位置。位置编码采用Rotary Position Embedding (RoPE) (Su et al., 2023)。

重叠区域平均机制：受MultiDiffusion (Bar-Tal et al., 2023)启发，对于分解中重叠的区域，协调器输出在重叠位置取平均值以构建最终扩展去噪输出。这与MultiDiffusion在采样阶段对分数/去噪输出进行平均的操作类似，但DDE的协调器本身是可学习的，且平均操作应用于协调器的输出而非直接对基础模型输出平均。

架构图说明（图1）：大型图像被分解为重叠patch → 各patch由独立预训练去噪网络处理 → 去噪输出经patchify和全局位置编码增强 → ViT处理所有patch并生成协调后的输出patch集合 → 重叠区域取平均构建最终扩展去噪输出。


- vs. MultiDiffusion/SyncDiffusion/DiffCollage：这些方法的协调机制是固定的算法设计（如平均、局部优化），无需额外训练；DDE的协调器是可学习的，但需要训练数据和训练时间。
- vs. Huang et al. (2023)的动态扩散器：同样训练轻量模块组合多模型，但要求模态在训练时固定；DDE声称可同时扩展对象大小和条件数量。
- vs. Wu et al. (2024)的能量模型组合：通过能量函数求和实现组合，可生成更复杂对象；DDE采用ViT协调器，两者优劣关系论文未分析。

### 💡 核心创新点

1. 统一协调器框架：单一ViT协调器架构可同时处理"扩展生成对象大小"和"扩展条件输入数量"两个维度，而非针对各任务设计专用算法。
2. 规模泛化现象：协调器在 \(L_{\text{train}}\) 上训练后，能够泛化到 \(L_{\text{test}} > L_{\text{train}}\) 的更大规模，且论文展示了音频（\(5\to 13\)）和图像（\(96\to 128\)）两个域的泛化。
3. 参数效率：协调器参数量显著小于基础模型（如音乐域66M vs 405M，卫星图像26M vs 270M），训练epoch数也大幅减少。

### 📊 实验结果

任务设置：基础模型生成长�� \(l\)（约12秒）的音乐片段；协调器在 \(L_{\text{train}}=5\)（即4个重叠patch，对应48秒）上训练；测试于 \(L_{\text{test}}=13\)（10个重叠patch，对应120秒）。重叠长度为 \(l/4\)（3秒）。

评估指标：FAD (Fréchet Audio Distance)，基于128生成样本计算，与训练集中等长片段对比。使用预训练VGG-like音乐特征提取器，采样率从22,050 Hz重采样至16,000 Hz。

| Method | Size | FAD for \(4l\) | FAD for \(10l\) |
|:---|:---|:---|:---|
| Concat | - | 4.623 | 4.596 |
| MultiDiffusion | - | 4.732 | 4.796 |
| RNN | 16M | 4.223 | 4.081 |
| RNN with overlaps | 50M | 4.447 | 4.424 |
| DDE (ours) | 66M | 2.112 | 2.142 |

关键细节：RNN和RNN with overlaps均训练10个epoch，batch size 4，学习率 \(10^{-4}\)；DDE (ViT) 训练10个epoch，batch size 4，学习率 \(3\times 10^{-5}\)，使用EMA。Heun采样器，\(\sigma_{\max}=20, \sigma_{\min}=10^{-4}, S_{\text{churn}}=20.0\)，Karras schedule \(\rho=7\)，150步。


任务设置：基础模型为UNet条件扩散模型 \(p(x|c)\)，生成 \(64\times 64\) 图像，条件 \(c=(c^x, c^y)\) 为物体中心坐标。扩展域为单张图像满足 \(L\) 个位置条件。协调器在 \(L_{\text{train}}=2\) 上训练，测试至 \(L_{\text{test}}=5\)。

评估：使用分类器 \(\text{CLS}(x,c)\) 判断图像 \(x\) 中位置 \(c\) 是否有物体，256生成样本上的准确率。

| Model | Sampler | Coordination | 1 | 2 | 3 | 4 | 5 |
|:---|:---|:---|---:|---:|---:|---:|---:|
| RRR | Euler | - | 98.0 | 93.8 | 72.3 | 48.0 | 23.0 |
| RRR | Heun | - | 98.0 | 94.5 | 83.2 | 63.3 | 33.6 |
| MultiDiffusion | Euler | - | 96.9 | 94.1 | 76.2 | 43.0 | 25.0 |
| MultiDiffusion | Heun | - | 97.7 | 93.4 | 80.5 | 58.6 | 36.3 |
| DDE (ours) | Heun | ViT | 96.5 | 94.1 | 86.3 | 66.8 | 44.5 |

关键发现：DDE在 \(L=1,2\)（训练分布内）的准确率低于RRR (Heun)，仅在 \(L\geq 3\) 时更优。基础模型训练1050 epoch（batch size 32），协调器38M参数训练20 epoch（batch size 16）。分类器使用UNet架构（dim=64, dim_mults=(1,2,4)），训练50 epoch。


任务设置：使用Google Maps API收集数据集，7,300样本，区域为中心 \(35.707^\circ\text{N}, 139.600^\circ\text{E}\) 的 \(20\times 20\) km正方形。基础模型生成 \(64\times 64\) patch，分解stride \(s=32\)。协调器在 \(N=96\) 训练，\(N=128\) 测试（out-of-distribution）。

评估指标：FID（使用CleanFID实现），比较生成条件样本与全部真实卫星图像。

| Method | FID, \(N=96\) | FID, \(N=128\) |
|:---|---:|---:|
| MultiDiffusion | 37.815 | 35.016 |
| DDE (ours) | 31.753 | 27.373 |

关键细节：基础模型270M参数训练200 epoch；协调器26M参数训练20 epoch。batch size 16，学习率 \(3\times 10^{-5}\)。

### 🔬 细节详述

EDM框架与采样：所有训练和采样基于Karras et al. (2022)的EDM框架，使用Heun采样器（2阶校正）。协调器训练使用EMA稳定训练并改善泛化。

音乐域ViT配置：patch_size=128, hidden_size=768, depth=6, num_heads=6, mlp_ratio=4.0。

CLEVR域ViT配置：原文未完整给出具体数值，仅说明基于Peebles & Xie (2023)架构适配。

卫星图像域ViT配置：原文未完整给出具体数值。

分类器自由引导(CFG)：CLEVR实验中使用，公式(6)显示协调器层面实现CFG：\((1+w)\cdot C_{[L]}(\text{conditional}) - w\cdot C_{[L]}(\text{unconditional})\)，其中无条件通过10%概率mask条件实现。

RNN基线架构：音乐实验中，RNN with overlaps使用UNet参数化的函数 \(f:\mathbb{R}^{h\times L}\times\mathbb{R}^{S\times L}\to\mathbb{R}^{h\times L}\times\mathbb{R}^{S\times L}\)，hidden channels \(h=16\)，通过隐状态传递实现序列协调。

### ⚖️ 评分理由

创新性/3：1.5/3
- 可学习协调器替代固定算法协调（如MultiDiffusion）是合理方向，但ViT+位置编码+重叠平均的组合极为常规，缺乏架构层面的原创性
- "universally simple"的声称无严格定义，且"universal"仅体现在两个任务维度（大小扩展、条件扩展），远未达到真正通用
- 规模泛化现象有趣，但零理论分析使其停留在现象报告层面，未转化为可迁移的方法论洞察

技术严谨性/1.5：0.6/1.5
- 训练目标(5)直接预测干净图像 \(X_{[L]}(0)\) 而非噪声，与标准扩散训练一致但论文未讨论此设计选择的影响，特别是时间步尺度变化问题
- 核心泛化现象（\(L_{\text{train}}\to L_{\text{test}}\)）完全缺乏理论支撑：是RoPE的外推性？ViT的归纳偏置？还是数据分布的特性？作者未提供任何假设或简化分析
- 复合去噪器(4)的数学性质未分析：协调器是否保持概率流ODE的正确性？复合过程的收敛性？
- 卫星图像FID计算方式存疑：条件生成FID应与条件对应的真实图像比较，而非全部图像

实验充分性/1.5：0.7/1.5
- 跨三域验证展示通用性，但关键消融缺失：未测试 \(L_{\text{train}}\) 变化对泛化的影响（如 \(L_{\text{train}}=1,3,5\) 的泛化曲线）
- 未消融位置编码类型（绝对vs RoPE vs 无）、协调器深度/宽度的缩放规律
- CLEVR实验设计暴露方法缺陷：训练分布内性能弱于基线，严重削弱实用性
- RNN基线明显欠优化（仅10 epoch，架构简单），与DDE的对比不公平
- 无统计显著性检验，无置信区间

清晰度/1：0.6/1
- 整体结构清晰，但核心术语定义模糊（"universally simple"）
- 符号不一致：正文用 \(L_{\text{train}}\) 但公式用 \([L_{\text{train}}]\)；图2标注为"FAD values"但正文中引用为"Table 4"
- 图1过于简化，缺少关键维度标注
- 附录B.3.3中"使用不同权重进行MLP"描述极简，影响可复现性

影响力/2：0.8/2
- 对语音/音乐/音频领域读者：音乐生成实验是核心应用之一，但方法本身偏通用ML/CV，音频领域特有问题（如相位一致性、音乐结构长期依赖性）未深入讨论
- 跨领域通用性被过度强调，实际每个域需单独训练协调器
- 理论真空限制方法的可扩展性和后续研究价值

开源/1.5：0.3/1.5
- 代码、模型权重、自建数据集均未公开
- 仅提及依赖库（denoising_diffusion_pytorch）但未给确切URL
- 训练配置较完整但缺乏预训练检查点，复现成本高

可复现性/0.5：0.3/0.5
- 部分超参数完整，但关键架构细节（如各域ViT具体配置）不全
- 无代码，无数据集，无预训练模型
- 实验设置中部分关键选择（如FID计算方式）描述不清

### 🚨 局限与问题

作者声明的局限：
- 需要额外数据和时间训练协调器模型（论文Limitations部分唯一声明）

审稿人发现的严重问题：

1. 理论真空：对最核心的规模泛化现象（\(L_{\text{test}} > L_{\text{train}}\)）完全零理论分析。作者甚至未提出任何假设——是RoPE的外推性质？ViT处理变长序列的能力？还是训练数据分布的特定结构？这使得"generalize to larger domains"的声称缺乏科学支撑，沦为不可解释的经验现象。

2. 训练分布内性能劣于基线（CLEVR）：表3显示DDE在 \(L=1,2\) 时准确率低于RRR (Heun)，仅在 \(L\geq 3\) 时更优。由于 \(L_{\text{train}}=2\)，这意味着在训练分布内DDE并非最优。这严重削弱方法价值：实际部署中用户无法预知条件数量，需在 \(L\leq 2\) 时使用RRR、\(L\geq 3\) 时切换至DDE，这种"分段最优"方案极不实用。

3. 基线对比不公平（音乐）：RNN with overlaps (50M) 与DDE (66M) 参数量级相近，但RNN仅10个epoch训练且架构明显欠优化（简单UNet参数化的隐状态传递），而DDE使用ViT+EMA。RNN基线未充分调参，不能作为强基线。

4. FID计算方式可疑（卫星图像）：论文明确写"FID between the generated conditional samples and the set of all ground truth satellite images"——条件生成FID应与条件对应的真实图像比较，而非全部图像。此设计可能系统性使FID值不反映真实条件生成质量。

5. 计算瓶颈未讨论：公式(4)中协调器处理的是 \(D(x_i,y_i,t)\) 的输出，即像素空间估计。对于高维图像（如 \(N=128\) 的卫星图像，维度为 \(128\times 128\times 3\)），ViT直接处理像素空间输出的计算和内存开销巨大，论文未讨论此瓶颈及潜在优化（如潜在空间处理）。

6. 与Wu et al. (2024)的关键对比缺失：该工作同样实现"生成更复杂对象"，且基于能量模型组合实现了规模泛化（更长模拟时间步、更多相互作用物体、更大空间域）。DDE的ViT协调与能量模型组合有何优劣？论文仅在Related Work中提及，未在实验或分析中对比。

7. "MultiDiffusion-like updates"的模糊性：论文声称"inspired by"MultiDiffusion的重叠平均，但未澄清实际差异。MultiDiffusion在采样每一步对分数去噪输出平均；DDE的协调器输出经平均后作为去噪估计，但协调器本身是可学习的。这种差异的边际价值未被量化——固定平均 vs 学习后平均的增益来源不明。

8. 缺乏错误分析：CLEVR中55.5%样本未满足所有5条件，这些失败模式的系统特征（条件冲突？协调器能力不足？分布外退化？）未分析。

9. 定性样本选择标准不明：图5-6的样本对比未说明随机选取还是精选，主观性强。

10. 近期相关工作遗漏：未引用VideoPoet、Stable Audio Open等长视频/长音频生成工作，领域定位不够精准。

### 📷 论文图片

![图1](https://arxiv.org/html/2605.23275v1/figures/17.png)

![图2](https://arxiv.org/html/2605.23275v1/x2.png)

![图3](https://arxiv.org/html/2605.23275v1/x4.png)

![图4](https://arxiv.org/html/2605.23275v1/figures/exampleDataset.png)

![图5](https://arxiv.org/html/2605.23275v1/x6.png)


---

[← 返回 2026-05-25 语音/音乐/音频论文速递](/audio-paper-digest-blog/posts/2026-05-25/)
