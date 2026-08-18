---
title: "Multi-Granularity Sentiment Integration for LLM-Based Multimodal Sentiment Analysis"
date: 2026-08-18
draft: false
tags: [音视频理解, Adapter, 大语言模型, 多模态模型]
categories: [论文速递]
description: "音视频理解 | 6.5/10"
hiddenInHomeList: true
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_arxiv_id: "2608.16201"
---

# 📄 Multi-Granularity Sentiment Integration for LLM-Based Multimodal Sentiment Analysis

标签：#音视频理解 #Adapter #大语言模型 #多模态模型

**6.5/10** | 创新 1.3/2 | 严谨 1/1.5 | 实验 1.2/1.5 | 清晰 0.8/1 | 影响 1/1.5 | 开源 0/1.5 | 复现 0.3/0.5 | 工程 0.9/1.5

✅ **6.5/10** | 前50% | 文档类型：方法研究 | 评分置信度：中 | #音视频理解 | #Adapter | #大语言模型 #多模态模型 | [arxiv](https://arxiv.org/abs/2608.16201)


### 👥 作者与机构

- 第一作者：Shanshan Lin（Fuzhou University, Fuzhou, China）
- 通讯作者：Xiangwen Liao（Fuzhou University, Fuzhou, China）
- 作者列表：Shanshan Lin（Fuzhou University）、Yuesheng Wu（Fuzhou University）、Chao Chen（Harbin Institute of Technology, Shenzhen）、Yizhe Yang（Fuzhou University）、Zhihao Chen（Jiangxia University, Fuzhou）、Zexian Yang（Fuzhou University）、Xiangwen Liao（Fuzhou University）

### 💡 毒舌点评

本文把“非文本模态在进入 LLM 前如何组织时序结构”作为核心问题，并用多粒度编码加伪 token 压缩做文章，这一点比单纯换 adapter 更有思考。但实验对比没有纳入 DEVA、MFON 等直接 LLM-based 竞品的受控复现，且 MOSEI 上 Acc-2/F1 仍明显弱于 UniMSE；正文用“remains competitive with strong multimodal methods”概括略高估，更适合限定为“在 frozen-LLM 设定下相对 MSE-Adapter 的竞争优势”。

### 📌 核心摘要

本文针对 LLM-based 多模态情感分析中音频、视觉信号在注入 LLM 前被过度压缩、丢失细粒度时序情感信息的问题，提出 MGSI 框架。方法核心是先对音频和视觉流分别进行短、中、长三个时间粒度的编码，再用文本引导对齐、非中性分类器和自适应情感校准器对非文本表示进行语义与极性/强度层面细化，最后压缩成 4 个伪 token 注入冻结 LLM 生成情感评分。与已有 adapter 方法相比，MGSI 更强调在 LLM 接口之前的 temporal-semantic organization，而不是单纯做特征投影。实验在 MOSI、MOSEI、SIMS、SIMS-V2 四个数据集上展开，基于 ChatGLM3-6B 时 MOSI Acc-2 达到 89.60、MOSEI Acc-2 达到 82.72、SIMS Acc-2 达到 82.67、SIMS-V2 Acc-2 达到 83.37，均优于对应 MSE-Adapter 基线；但 MOSEI 上 Acc-2/F1 仍显著落后于 UniMSE。整体来看，MGSI 展示了轻量 LLM 适配中保留多尺度非文本情感信息的实际价值，局限在于依赖预提取特征、伪 token 压缩存在效率与保真的权衡，且缺少代码和权重发布。

### 🔗 开源详情

- 代码：论文中未提及代码链接（未给出 GitHub/HuggingFace 等仓库地址）。
- 模型权重：论文中未提及权重下载链接；使用的冻结骨干为 ChatGLM3-6B 和 Qwen2.5-7B。
- 数据集：使用 MOSI、MOSEI、SIMS、SIMS-V2；均采用官方 train/val/test 划分。论文中未提及这些数据集的获取链接和开源协议。
- Demo：论文中未提及。
- 复现材料：论文提供部分训练配置：AdamW + mixed-precision；MOSI/SIMS/SIMS-V2 最多 30 epoch，MOSEI 最多 80 epoch；初始学习率 5e-5；前 10% 训练步线性 warmup，之后 cosine 衰减；使用早停；三个随机种子平均，paired t-test。输入特征维度：text/audio/visual 为 4096/74/35。论文未提供代码、检查点或补充附录下载。
- 论文中引用的开源项目：论文提及 TFN、LMF、MulT、MISA、CENet、Self-MM、MMIM、TETFN、UniMSE、MSE-Adapter、DEVA、MFON、Mixture of Multimodal Adapters，以及 ChatGLM3-6B、Qwen2.5-7B；但论文中未提供这些项目的具体 URL 链接。

### 🏗️ 方法概述和架构

MGSI 是一个多阶段 LLM-based 多模态情感分析框架，整体流程为：输入文本、音频、视觉三个模态，文本经冻结 LLM 的 embedding 层得到文本嵌入；音频和视觉先经过多粒度时序编码器提取短、中、长尺度表示，再通过文本引导对齐、非中性分类器与自适应情感校准器进行跨模态和情感语义细化；最终一个多尺度融合适配器将校准后的多模态表示压缩为少量 pseudo-tokens，与文本 token 和提示模板一起输入冻结 LLM，以自回归方式生成情感强度分数。

下图展示了MGSI框架的整体架构，清晰呈现了从多模态输入到情感预测的流程。

![Figure 1: Overview of the proposed MGSI framework. Audio and visual streams are first encoded with multi-granularity temporal encoders.](https://arxiv.org/html/2608.16201v1/framework.png)

图中可见，音频和视觉流经多粒度时序编码后，通过文本引导对齐、非中性分类器、自适应情感校准器进行细化，最终由多尺度融合适配器压缩为伪token注入冻结LLM。


主要组件如下。多粒度时序编码器（MGT）是第一个核心模块。对每个非文本模态 \(q\in\{a,v\}\)，输入特征先经线性投影 \(H_0^{(q)}=X^{(q)}W_0^{(q)}+b_0^{(q)}\) 进入共享隐空间。短时分支使用 Conv1D 加激活、MaxPool 提取局部波动 \(h_s^{(q)}\)；中期分支使用 dilated convolution 扩大感受野，得到 \(h_m^{(q)}\)；长期分支由带位置编码的 Transformer 建模较长范围依赖，并对 Transformer 输出做 attention pooling 得到 \(h_l^{(q)}\)。三个分支输出作为三个 token 堆叠，经过 multi-head self-attention 和 mean pooling，获得融合后的 \(h^{(q)}\)。这样做的动机是音频和视觉情感线索未必只存在于单一时间尺度，短时波动、中程模式和长期趋势都可能携带情感证据。

文本引导对齐模块（TGA）使用文本作为语义 anchor。先对文本嵌入做 mean pooling 得到全局文本摘要 \(g^{(t)}\)，再通过全连接门控 \(r^{(q)}=\sigma(W_g^{(q)}g^{(t)}+b_g^{(q)})\) 调制音频或视觉表示 \(\hat{h}^{(q)}=h^{(q)}\odot(1+r^{(q)})\)，随后线性融合音频和视觉得到 \(h^{(f)}\)。这一模块解决非文本表示缺乏语义参照的问题，利用文本信息对非文本流进行条件化。

非中性分类器（NNC）在融合表示 \(h^{(f)}\) 上添加辅助二分类头，只对 \(|y|>\tau\) 的明确非中性样本计算 binary cross-entropy 损失。其功能是强化正负极性判别，尤其让融合表示在中性样本之外保留更清晰的极性结构。自适应情感校准器（ASC）预测标量 \(\rho_i\in(0,1)\) 控制残差修正强度，\(\tilde{h}_i=\mathrm{LN}\left(h_i^{(f)}+\gamma\rho_i\,\mathrm{MLP}_{ASC}(h_i^{(f)})\right)\)，用于处理近中性和情感模糊样本，避免统一残差强度造成过度校正。

多尺度融合适配器接收校准后的 \(\tilde{h}\)，用 \(K\) 个并行 MLP 分支生成多组中间表示，堆叠后再经 1D 卷积压缩，并投影到 LLM embedding 空间得到 \(P\in\mathbb{R}^{M\times d}\)；论文固定 \(M=4\)。这些 pseudo-tokens 将原本较长的非文本序列压缩成极短接口，降低 LLM self-attention 的序列长度。最终输入为 \([E^{(\mathrm{pre})};P;E^{(t)};E^{(\mathrm{suf})}]\)，其中 \(E^{(\mathrm{pre})}\) 和 \(E^{(\mathrm{suf})}\) 是提示嵌入。训练目标为主生成损失 \(\mathcal{L}_{gen}\) 和辅助 NNC 损失 \(\mathcal{L}_{nnc}\) 的加权和。

复杂度分析方面，短、中期分支为卷积，随序列长度线性增长；长期分支 Transformer 自注意力为 \(\mathcal{O}(L_q^2 d_h+L_q d_h^2)\)。若直接将原始音视频序列注入 LLM，自注意力成本为 \(\mathcal{O}((L_t+L_a+L_v)^2 d)\)；压缩成 \(M\) 个 pseudo-token 后降为 \(\mathcal{O}((L_t+M)^2 d)\)，其中 \(M=4\ll L_a+L_v\)。论文在单张 A30 GPU 上 MOSI 每 epoch 约 2 分钟，体现 LLM 接口端的轻量性。

整体设计明显倾向于效率与保真的折中：使用离线预提取特征、冻结 LLM、小量 pseudo-token，换取训练与推理效率；同时用多粒度编码和细化模块弥补压缩带来的信息损失。需要解释的术语包括 pseudo-tokens，即为非文本多模态信息在 LLM 输入空间中的可学习紧凑嵌入；attention pooling，即利用可学习向量对时序隐状态加权平均；dilated convolution，即带空洞的卷积，用更大感受野捕捉中期模式；非中性样本，指 \(|y|>\tau\) 的情感明显样本。

### 💡 核心创新点

1. 将 LLM-based MSA 的瓶颈从“如何映射到 LLM embedding”扩展为“哪些时序结构应被保留到映射之前”。之前 adapter 方法多聚焦模态匹配与轻量插入，MGSI 显式提出 temporal-semantic compression 问题。
2. 对音频和视觉分别实施短、中、长多粒度时序编码，并利用注意力融合三个分支 token。相比单一 temporal abstraction 或早期 pooling，更能保留局部、中程和全局情感线索。
3. 在 LLM 注入前引入文本引导对齐、非中性分类器和自适应情感校准的联合细化，使压缩后的表示更具备极性判别性与近中性鲁棒性。
4. 用多分支 MLP 加 1D 卷积压缩非文本特征为 4 个 pseudo-tokens，在极小 LLM 注意力成本下实现多模态条件化；并给出复杂度分析说明效率收益。
5. 通过四数据集实验和消融证明各模块互补，例如去掉 ASC 在 MOSI 上 Acc-2 从 89.60 降至 88.78，去掉 MGT 在 SIMS 上 Acc-2 从 82.67 降至 80.48。

### 📊 实验结果

表中保留主方法、最强基线与关键代表性行，重点呈现本文方法与 UniMSE、MSE-Adapter 的对比；完整传统基线结果未全部列出。英文数据集结果如下：

| 方法 | MOSI Acc-2 | MOSI F1 | MOSI Acc-7 | MOSI MAE | MOSEI Acc-2 | MOSEI F1 | MOSEI Acc-7 | MOSEI MAE |
|---|---:|---:|---:|---:|---:|---:|---:|---:|
| UniMSE | 86.90 | 86.42 | 48.68 | 0.691 | 87.50 | 87.46 | 54.39 | 0.523 |
| Qwen2.5-7B + MSE-Adapter | 87.17 | 87.07 | 47.03 | 0.647 | 75.97 | 76.27 | 53.66 | 0.532 |
| Qwen2.5-7B + MGSI | 87.80 | 87.77 | 46.94 | 0.627 | 78.95 | 79.30 | 52.67 | 0.529 |
| ChatGLM3-6B + MSE-Adapter | 88.63 | 88.54 | 46.91 | 0.643 | 75.19 | 75.18 | 54.44 | 0.516 |
| ChatGLM3-6B + MGSI | 89.60 | 89.57 | 49.15 | 0.603 | 82.72 | 83.00 | 54.69 | 0.509 |

中文数据集结果如下：

| 方法 | SIMS Acc-2 | SIMS F1 | SIMS Acc-5 | SIMS MAE | SIMS-V2 Acc-2 | SIMS-V2 F1 | SIMS-V2 Acc-5 | SIMS-V2 MAE |
|---|---:|---:|---:|---:|---:|---:|---:|---:|
| TETFN | 81.18 | 80.24 | 41.79 | 0.420 | 79.73 | 79.81 | 54.47 | 0.310 |
| Qwen2.5-7B + MSE-Adapter | 79.26 | 77.22 | 44.90 | 0.393 | 80.81 | 80.59 | 55.57 | 0.293 |
| Qwen2.5-7B + MGSI | 81.93 | 81.26 | 48.14 | 0.377 | 81.53 | 81.34 | 59.26 | 0.286 |
| ChatGLM3-6B + MSE-Adapter | 79.30 | 76.95 | 42.23 | 0.390 | 81.39 | 81.10 | 52.49 | 0.304 |
| ChatGLM3-6B + MGSI | 82.67 | 81.81 | 46.92 | 0.359 | 83.37 | 83.23 | 61.49 | 0.267 |

需要注意，在 MOSI 上 MGSI（ChatGLM）相对于 UniMSE 在 Acc-2/F1/Acc-7/MAE 均有较明显优势；但在 MOSEI 上，MGSI 的 Acc-2 仍为 82.72、F1 为 83.00，显著低于 UniMSE 的 87.50/87.46，尽管 Acc-7/MAE 略优。因此“competitive with strong multimodal methods”更适合理解为在 frozen-LLM 设定下相对强 baseline 的竞争性，而非全面达到或超过所有强基线。消融方面，ChatGLM 骨干下：去掉 MGT 后，MOSI Acc-2 降为 89.30、SIMS 降为 80.48；去掉 NNC 后，MOSI 降为 89.54、SIMS 降为 82.05；去掉 ASC 后，MOSI 降为 88.78、SIMS Acc-5 从 46.92 大幅降至 43.76；在时间分支中，去掉 mid-term 分支对 MOSI 影响最大，去掉 long-term 分支对 SIMS F1 和 MAE 影响更明显。敏感性分析还显示，视觉短时分支最佳 kernel size 在 MOSI 为 3，在 SIMS 为 7；分支融合策略中，MOSI 上 dynamic weighted fusion 增益最大，SIMS 上 attention-based fusion 增益最大，因此默认采用 attention-based fusion；非中性损失权重 \(\lambda_{nnc}\) 过大或过小都会损害细粒度强度建模。

### 🔬 细节详述

- 训练数据：使用 MOSI、MOSEI（英文）和 SIMS、SIMS-V2（中文）四个数据集，遵循官方 train/validation/test 划分。论文未说明数据增强方式，仅说明使用预提取特征。文本、音频、视觉特征维度分别为 4096、74、35。数据集规模论文中未给出具体样本数。
- 损失函数：主损失 \(\mathcal{L}_{gen}\) 为对目标情感分数 token 序列的自回归负对数似然；辅助损失 \(\mathcal{L}_{nnc}\) 为对 \(|y|>\tau\) 非中性样本的 binary cross-entropy，阈值 \(\tau=0.1\)，权重 \(\lambda_{nnc}=0.05\)。总损失 \(\mathcal{L}=\mathcal{L}_{gen}+\lambda_{nnc}\mathcal{L}_{nnc}\)。
- 训练策略：优化器为 AdamW，混合精度训练；学习率初始化为 \(5\times10^{-5}\)，前 10% 训练步线性 warmup，接着 cosine 衰减；batch size 为 8；MOSI、SIMS、SIMS-V2 最多 30 epochs，MOSEI 最多 80 epochs；在验证集 MAE 上 early stopping，patience 为 10；报告三个随机种子平均，并用 0.05 水平的 paired t-test 检验显著性，但正文未报告标准差。
- 关键超参数：\(\tau=0.1\)；默认 audio 短时 kernel size 3、中期 dilation rate 2；默认 visual 短时 kernel size 3、中期 dilation rate 2；\(\gamma=0.05\)；\(\lambda_{nnc}=0.05\)；pseudo-token 数 \(M=4\)。敏感性分析显示视觉 short-term kernel size 在 MOSI 上最优为 3，在 SIMS 上最优为 7。MGT 中 Transformer 层数、注意力头数、隐藏维度、多尺度融合适配器中的 \(K\) 值、MLP 结构、卷积输出通道等论文未说明。
- 训练硬件：单张 NVIDIA A30 GPU；MOSI 上约每 epoch 2 分钟。其他数据集训练时长未说明；软件环境为 Python 3.10 和 PyTorch 2.1.0。
- 推理细节：英文 prompt 为 “Please predict the sentiment intensity of the above multimodal content in the range [-3.0, 3.0]. Response: The sentiment is”；中文 prompt 使用范围 [-1.0, 1.0]。解码使用贪心策略 temperature 0，最多生成 4 个 token。
- 正则化或稳定训练技巧：ASC 中使用 LayerNorm、残差缩放因子 \(\gamma=0.05\)；early stopping；混合精度训练。
- 复杂度与效率：短、中期分支为线性复杂度，长期分支 Transformer 为 \(\mathcal{O}(L_q^2 d_h+L_q d_h^2)\)；LLM 端从直接注入的 \(\mathcal{O}((L_t+L_a+L_v)^2 d)\) 降至 \(\mathcal{O}((L_t+M)^2 d)\)，其中 \(M=4\)。

### ⚖️ 评分理由

*   创新性 (1.3/2)：[A_METHOD] 本文提出MGSI，将LLM-based MSA的瓶颈从仅适配嵌入扩展为对音频/视觉时序结构的先组织后压缩，采用短中长多粒度编码、文本引导对齐、非中性分类与自适应校准及4个伪token注入，思路不仅换adapter，具有成体系的方法创新。

*   技术严谨性 (1.0/1.5)：[A_METHOD] 方法给出多粒度编码、TGA、NNC、ASC和伪token适配的公式与复杂度分析，整体逻辑自洽；但[A_LIMITS]指出非中性阈值τ=0.1在英文[-3,3]与中文[-1,1]标注范围下语义不一致，NNC样本筛选存在方法设计上的不合理假设，因此略扣。

*   实验充分性 (1.2/1.5)：[A_RESULTS] 在MOSI、MOSEI、SIMS、SIMS-V2四数据集上，以ChatGLM3-6B和Qwen2.5-7B为骨干，比较传统基线、UniMSE和MSE-Adapter，并提供核心组件与时间分支消融及敏感性分析；但[A_LIMITS]显示缺少DEVA、MFON等直接LLM-based方法的受控对比，且TGA未单独消融，未报告标准差；MOSEI上Acc-2/F1显著低于UniMSE仍称competitive，结论证据支持偏强，故给1.2。

*   清晰度 (0.8/1)：[A_SUMMARY] 全文按动机、方法、实验、局限组织清晰，[A_METHOD]中架构、公式、复杂度分析表述完整，图表和模块命名清楚，未发现明显符号或结构混乱，因此给0.8。

*   影响力 (1.0/1.5)：[A_SUMMARY] 面向LLM-based多模态情感分析，音频和视觉时序结构的保留对语音/音频社区有一定价值；[A_RESULTS]显示在四个基准上相对frozen-LLM baseline有显著提升，但尚未全面超过UniMSE等强基线，影响中等。

*   开源 (0.0/1.5)：[A_OPEN] 论文未发布核心代码、模型权重或数据资源，也未给出明确的后续开源承诺。

*   可复现性 (0.3/0.5)：[A_METHOD] 论文给出主要训练配置，包括AdamW、混合精度、学习率5e-5、warmup+cosine、batch size 8、早停、输入特征维度及A30硬件；但[A_LIMITS]指出生成输出解析与失败处理未说明，且[A_METHOD]中MGT Transformer层数、注意力头数、MLP结构、K值等关键结构超参数缺失，故给0.3。

*   工程/实践价值 (0.9/1.5)：[A_METHOD] 伪token把LLM端自注意力从((Lt+La+Lv)^2 d)降至((Lt+M)^2 d)，M=4，且单卡A30 MOSI每epoch约2分钟，体现轻量冻结LLM适配的工程效率；但依赖预提取特征，工程收益受前端特征限制，给0.9。

### 🚨 局限与问题

1. **论文明确承认的局限**：作者指出 MGSI 依赖预提取的音频和视觉特征，未使用端到端原始信号编码器；将多模态信息压缩进少量 pseudo-tokens 会在效率与保真之间产生权衡；未来可探索自适应时间尺度选择、不确定性校准和动态 pseudo-token 分配。
2. **审稿人发现的潜在问题**：第一，实验没有复现或对比 DEVA、MFON 等直接 LLM-based MSA 方法，削弱了与强 LLM 方法对比的充分性；作者以“输入形式和评估协议不同”作为概念比较的理由，但缺少受控复现仍是明显缺口。第二，MOSEI 上 MGSI 的 Acc-2/F1 明显低于 UniMSE，但正文仍采用“remains competitive”的说法，结论可能偏强。第三，TGA 模块没有被单独消融，核心组件消融只覆盖了 MGT、NNC 和 ASC。第四，MOSI、MOSEI、SIMS/V2 数据集规模较小且情感标注主观性高，未报告标准差较难判断鲁棒性。第五，文本生成输出的解析策略、生成失败处理未说明。第六，\(\tau=0.1\) 在 MOSI/MOSEI 标注范围 [-3,3] 和中文数据 [-1,1] 下相对含义不一致，可能影响 NNC 样本筛选的语义一致性。

---

[← 返回 2026-08-18 语音/音乐/音频论文速递](/audio-paper-digest-blog/posts/2026-08-18/)
