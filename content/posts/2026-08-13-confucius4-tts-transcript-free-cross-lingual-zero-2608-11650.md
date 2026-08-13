---
title: "Confucius4-TTS: Transcript-Free Cross-Lingual Zero-Shot TTS with a Learnable Speaker Encoder"
date: 2026-08-13
draft: false
tags: [语音合成, 自回归模型, 语音克隆, 多语言, 零样本]
categories: [论文速递]
description: "语音合成 | 7.7/10"
hiddenInHomeList: true
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_arxiv_id: "2608.11650"
---

# 📄 Confucius4-TTS: Transcript-Free Cross-Lingual Zero-Shot TTS with a Learnable Speaker Encoder

标签：#语音合成 #自回归模型 #语音克隆 #多语言 #零样本

**7.7/10** | 创新 1.2/2 | 严谨 1/1.5 | 实验 1.2/1.5 | 清晰 0.8/1 | 影响 1/1.5 | 开源 1.2/1.5 | 复现 0.1/0.5 | 工程 1.2/1.5

✅ **7.7/10** | 前25% | 文档类型：系统技术报告 | 评分置信度：高 | #语音合成 | #自回归模型 | #语音克隆 #多语言 | [arxiv](https://arxiv.org/abs/2608.11650)


### 👥 作者与机构

- 第一作者：Huaxuan Wang（NetEase Youdao, Beijing, China）
- 通讯作者：未说明
- 作者列表：Huaxuan Wang（NetEase Youdao, Beijing, China）、Huimin Wang（NetEase Youdao, Beijing, China）、Ruiyu Zhang（NetEase Youdao, Beijing, China）、Yingjie Li（NetEase Youdao, Beijing, China）、Yitao Duan（NetEase Youdao, Beijing, China）

### 💡 毒舌点评

这是一份工业级多语言 zero-shot TTS 系统报告，联合训练的 SSL speaker encoder 让参考音频不再依赖转录，跨语言 WER 和主观排名确实能打；但创新更偏工程集成而非方法突破，且全文没有单组件消融、延迟/吞吐和显著性检验，审稿人难以判断各项设计到底贡献了多少。

### 📌 核心摘要

论文解决的是零样本跨语言 TTS 中参考音频通常需要转录的问题，目标是让用户只给目标文本和任意短参考音频即可克隆未见说话人。方法上采用两阶段结构：T2S 自回归预测语义 token，S2A 用条件流匹配生成 mel 频谱。核心做法是在 T2S 中使用一个与生成目标联合训练、基于 w2v-BERT 2.0 特征的 ECAPA-TDNN speaker encoder，从无转录参考音频直接得到说话人嵌入；同一模型在提供参考转录时还可切换为 continuation cloning。实验在 CV3-Eval 跨语言子集上取得平均 WER/CER 约 3.73%，在 Seed-TTS-eval 上英文 WER 1.49%、中文 CER 0.94%，并在多语言基准和人类评估中整体排名靠前。论文实际意义在于面向 14 种语言提供了一套无转录跨语言克隆方案，并释放代码、模型权重和 demo。主要局限是缺少组件消融、延迟成本数据以及更严格的统计检验。

### 🔗 开源详情

论文在摘要和结论中声明释放代码、模型 checkpoint 与 demo，仓库地址为 https://github.com/netease-youdao/Confucius4-TTS。机器摘要资源状态为 has_code=是、has_model=是、has_dataset=否；即代码与模型权重开源，训练数据未随仓库公开。论文未披露许可证类型、数据集构建脚本、数据过滤模型或训练配置文件的发布细节。

### 🏗️ 方法概述和架构

Confucius4-TTS 是一个多阶段流水线，而不是单一端到端模型。输入目标文本和参考音频后，系统依次生成语义 token、mel 频谱和波形。整体流程为：参考音频经过 SSL 编码器和 speaker encoder 得到说话人嵌入；目标文本经预训练 LLM tokenizer 和轻量 MLP 投影为文本表示；T2S 自回归预测语义 token；S2A 结合语义 token、T2S 隐藏状态、说话人验证嵌入和参考 mel 频谱生成目标 mel；最后 BigVGAN vocoder 合成波形。

下图展示了Confucius4-TTS的总体架构和训练流程。

![Figure 1: Overall architecture of Confucius4-TTS, comprising the text-to-semantic module, the semantic-to-acoustic module, and the vocoder. The figure shows the training flow from reference audio and target text to semantic tokens and mel-s](https://arxiv.org/html/2608.11650v1/img/confucius4-tts-model.png)

图中显示了从参考音频和目标文本输入，经过Speaker Encoder、Text Tokenizer、T2S模块生成语义token，再通过S2A模块和Vocoder生成mel频谱和语音的完整路径。


T2S 模块是一个 24 层、隐藏维度 1280 的 decoder-only Transformer。其训练序列为 \([e^r, H^{txt}, \langle\mathrm{BOS}\rangle, E^{\mathrm{T2S}}_{\mathrm{sem}}(y_1), \dots, E^{\mathrm{T2S}}_{\mathrm{sem}}(y_N)]\)，其中 \(e^r\) 是参考音频的池化说话人嵌入，\(H^{txt}\) 是目标文本嵌入，\(\langle\mathrm{BOS}\rangle\) 分隔文本与语义 token。文本来自 BPE tokenizer，其预训练嵌入表冻结，只训练一个轻量 MLP 投影到 T2S 隐藏维度。语言控制通过自然语言 instruction 前缀实现，不依赖 G2P。speaker encoder 采用 ECAPA-TDNN 结构，但输入不是 mel 频谱，而是 w2v-BERT 2.0 的帧级 SSL 特征。这样设计的原因是 SSL 特征同时含内容和说话人信息，使 speaker encoder 能从无转录音频中提取 timbre，而不必做 forced alignment 或构造合成 prompt 对。T2S 以教师强制方式训练，损失为语义 token 和 `⟨EOS⟩` 的自回归交叉熵。除离散 token 外，T2S 还输出语义位置处的隐藏状态 \(H^{T2S}\)，供 S2A 使用，以缓解离散量化造成的信息瓶颈。

推理时有双模式 conditioning。默认 reference cloning 只使用 \([e^r; H^{txt}; \langle\mathrm{BOS}\rangle]\)，生成不受参考 prosody 的强约束，更灵活。若用户提供参考转录，则可启用 continuation cloning，输入变为 \([e^r; H^{txt,r}; H^{txt}; \langle\mathrm{BOS}\rangle; y^r]\)，其中 \(H^{txt,r}\) 是参考转录嵌入，\(y^r\) 是参考音频的语义 token。这种 continuation 模式保留更细粒度说话人和韵律信息，通常会提升 speaker similarity，但会稍微牺牲内容准确率。

S2A 模块以条件流匹配和 DiT 为主干。其条件序列 \(c^{sem}\) 由语义 token 嵌入与 T2S 隐藏状态拼接而成，经 length regulator 上采样到 mel 帧率。随后，来自 CAM++ 的全局 speaker verification 嵌入 \(g\) 被重复到同一帧长并沿特征维拼接。训练时 \(g\) 来自目标语音，推理时来自参考音频。S2A 还接收一个 prompt mel-spectrogram \(m^p\)，沿时间轴 prepend 到目标片段前；训练时从目标 mel 随机截取前缀作为 prompt，且 prompt 帧使用可学习占位符替代语义条件，推理时直接取参考音频的 mel。流匹配采用 optimal transport 路径 \(\phi_t^{OT}(m_0,m_1)=(1-t)m_0+t m_1\)，目标向量场为 \(\omega_t(\phi_t^{OT}(m_0,m_1)\mid m_1)=m_1-m_0\)，DiT 用 L1 损失拟合该向量场。为支持 classifier-free guidance，训练时以固定概率联合丢弃语义条件、说话人嵌入和 prompt mel；推理时使用 Euler 25 步求解 ODE，CFG 强度 \(\alpha=0.7\)。这种 prompt 设计让 S2A 从参考音频获得声学证据，但不要求 prompt 帧有显式文本或 token 对齐。

训练数据层面，论文构建了约 500k 小时、覆盖 14 种语言的多语言语音数据，包含真实和合成语音。数据管线包括源分离与降噪、VAD 切分、多说话人/重叠/低质量过滤、语言识别、多系统 ASR 过滤和说话人聚类。实验采用两阶段训练：先联合训练 T2S 和 learnable speaker encoder，再冻结 T2S 训练 S2A。整个系统在工业数据规模和多语言评测上强调可部署性，但论文未提供延迟、吞吐、参数量以及流式部署细节。

### 💡 核心创新点

1. **无转录 speaker encoder 设计**：使用基于 w2v-BERT 2.0 SSL 特征的 ECAPA-TDNN，与 T2S 联合训练，在无需参考转录、forced alignment 或合成 prompt 对的情况下提取 timbre 嵌入。该设计解决了 in-the-wild 参考音频常无转录的问题，并在 CV3-Eval 等基准上取得较强跨语言表现。
2. **同一模型支持 reference cloning 与 continuation cloning**：T2S 默认使用 \([speaker\_embedding; target\_text]\) 生成，提供转录时切换为 \([speaker\_embedding; ref\_transcript; target\_text; ref\_tokens]\) 的 continuation 形式。相比独立两套系统，这种双模式推理更简洁，并可根据实际有无转录灵活选择。
3. **T2S 隐藏状态注入 S2A**：S2A 不只依赖离散语义 token，还拼接 T2S 在语义 token 位置上的连续隐藏状态。该设计减少量化信息瓶颈，保留内容、韵律和 timbre 等上下文，对 acoustic decoder 更友好。

### 📊 实验结果

论文在四个公开基准上进行客观评测，并进行内部人类评估。表 1 和表 2 保留主方法、最强相关基线与关键对比项。论文未提供组件级消融实验的具体数值。

CV3-Eval 跨语言子集包含六种 source-target 方向，每方向 200 条。Confucius4-TTS 在六方向上的平均 WER/CER 为约 3.73%，在 `en→zh`、`zh→en`、`ja→en`、`ko→en` 四个方向取得最低错误率，在 `ja→zh` 和 `ko→zh` 上略高于 VoxCPM2。相比 CosyVoice 2 的 `ja→zh` 高达 48.10%，本方法为 4.87%，优势明显。

| 方向 | Ours | VoxCPM2 | CosyVoice 3-1.5B† | OmniVoice† |
|---|---:|---:|---:|---:|
| en→zh | 6.16 | 6.29 | 8.01 | 6.53 |
| ja→zh | 4.87 | 4.20 | 6.78 | 52.64 |
| ko→zh | 1.28 | 1.20 | 3.30 | 1.71 |
| zh→en | 3.19 | 3.84 | 5.39 | 3.72 |
| ja→en | 3.44 | 4.10 | 5.94 | 5.25 |
| ko→en | 3.42 | 5.69 | 13.70 | 3.91 |

X-Voice 的跨语言子集覆盖 7 个源语言到中文，每方向 500 条。Confucius4-TTS 在 `de→zh`（2.86）、`fr→zh`（2.70）、`ko→zh`（2.86）、`vi→zh`（2.75）四个方向最低，其余方向与最强系统差距在 0.3 个 CER 点内。

Seed-TTS-eval 上，reference cloning 的英文 WER 为 1.49、SIM 为 0.700，中文 CER 为 0.94、SIM 为 0.765。continuation cloning 将英文 SIM 提升到 0.715、中文 SIM 提升到 0.766，但 WER/CER 略有上升。Seed-TTS 在 speaker similarity 上仍最高，英文 SIM 0.762、中文 SIM 0.796。

| System | en WER | en SIM | zh CER | zh SIM |
|---|---:|---:|---:|---:|
| Ours | 1.49 | 0.700 | 0.94 | 0.765 |
| Ours (Continuation)† | 1.68 | 0.715 | 1.15 | 0.766 |
| Seed-TTS† | 2.25 | 0.762 | 1.12 | 0.796 |
| Qwen3-TTS† | 1.24 | 0.714 | 0.77 | 0.770 |
| VoxCPM2† | 1.70 | 0.752 | 0.97 | 0.793 |

MiniMax-MLS-Test 上，论文只评估 11 个支持语言。reference cloning 在德语 WER 0.47、泰语 WER 1.56 上最低；所有评估语言 SIM 均高于 72%。continuation cloning 在所有 11 种语言上一致提升 SIM。

人类评估中，Confucius4-TTS 在 timbre similarity 和 naturalness 上于四个语言对均排第一或第二；在 `en→zh`、`zh→ko`、`zh→ja` 上整体排名第一，`zh→en` 上 VoxCPM2 排第一。

### 🔬 细节详述

- **训练数据**：约 500k 小时多语言语音，覆盖 14 种语言：中文、英语、日语、韩语、德语、法语、西班牙语、印尼语、意大利语、泰语、葡萄牙语、俄语、马来语、越南语。数据包含真实和合成语音，每语言约 1000 小时合成语音，用于覆盖短句和低频模式。数据管线包括源分离与降噪、VAD 切分、多说话人/重叠/低质量片段过滤、语言识别、多系统 ASR 过滤、说话人聚类。保留 multi-model ASR error rate 低于 2.5% 的样本；中文、日语、韩语使用 CER，其余使用 WER。使用 language-based resampling 平衡高低资源语言。说话人 conditioning 要求 reference 和 target 来自同一说话人的不同录音。
- **损失函数**：T2S 使用自回归交叉熵，预测语义 token 和 `⟨EOS⟩`；S2A 使用 optimal transport 条件流匹配的 L1 损失，目标向量场为 \(m_1-m_0\)。CFG 训练通过联合丢弃语义条件、说话人嵌入和 prompt mel 来实现。
- **训练策略**：两阶段训练。第一阶段联合优化 T2S、learnable speaker encoder、text projection、semantic token embedding，冻结预训练 LLM 文本嵌入；第二阶段冻结 T2S，训练 S2A。优化器为 AdamW，使用 cosine learning-rate schedule。具体学习率、warmup、batch size、训练步数/轮数未说明。
- **关键超参数**：T2S 为 24 层、隐藏维度 1280 的 decoder-only Transformer；speaker encoder 为 ECAPA-TDNN；SSL encoder 为 w2v-BERT 2.0；语义 token 由 MaskGCT tokenizer 提取；S2A 采用 DiT backbone，生成 80 维 mel；speaker verification 嵌入来自 CAM++；vocoder 为 BigVGAN。语义码本大小 \(V_{sem}\)、S2A 层数/维度、DiT 具体参数量均未说明。
- **训练硬件**：32 张 NVIDIA A40 GPU。训练时长未说明。
- **推理细节**：参考音频被转换为 T2S speaker embedding、S2A CAM++ embedding 和 prompt mel；T2S 自回归生成语义 token；S2A 使用 25 步 Euler ODE 求解，CFG 强度 \(\alpha=0.7\)；最后 BigVGAN 合成波形。未说明温度、beam size、top-k/top-p 等 T2S 解码策略。
- **正则化或稳定训练技巧**：冻结预训练文本嵌入、S2A condition dropout、数据质量过滤、语言采样平衡。还提到 continuation cloning 可提升 speaker similarity，但会略微增加 WER。

### ⚖️ 评分理由

*   创新性 (1.2/2)：[A_METHOD] 提出基于w2v-BERT 2.0 SSL特征的ECAPA-TDNN无转录speaker encoder并与T2S联合训练，同一模型支持reference cloning和continuation cloning，且将T2S连续隐藏状态注入S2A以缓解离散量化瓶颈，构成有证据支持的工程组合创新。

*   技术严谨性 (1.0/1.5)：[A_METHOD] 方法给出明确的输入序列构造、双模式条件布局和OT-CFM目标向量场，S2A条件拼接与classifier-free guidance推理公式一致，账本中未发现明显推导错误或系统逻辑漏洞。

*   实验充分性 (1.2/1.5)：[A_RESULTS] 研究在CV3-Eval、X-Voice、Seed-TTS-eval和MiniMax-MLS-Test四个公开基准上进行了客观评测，并包含内部人类评估，跨语言和同语言结果具有较强竞争力；但未提供延迟、吞吐、成本、压力测试或失败案例，也未对组件贡献做消融或显著性检验，因此未给满分。

*   清晰度 (0.8/1)：[A_SUMMARY] 摘要、方法架构、公式符号和实验表格组织清晰，双模式conditioning以表格形式明确区分，四类基准和指标表述可读，未发现明显组织或写作问题。

*   影响力 (1.0/1.5)：[A_SUMMARY] 面向14种语言的无转录跨语言zero-shot TTS方案在多个公开基准上达到或接近领先水平，对语音克隆、配音和跨语言合成等应用具有实际影响，但影响主要来自工程系统集成而非基础方法突破。

*   开源 (1.2/1.5)：[A_OPEN] 论文声明并链接释放代码、模型checkpoint与demo，核心产物代码和模型权重开放；但未披露许可证、数据集构建脚本、数据过滤模型和训练配置文件的发布细节，训练数据未随仓库公开，文档不完整，符合核心产物开放但文档不完整的固定锚点1.2。

*   可复现性 (0.1/0.5)：[A_METHOD] 论文给出模块架构、两阶段训练流程和32张A40 GPU硬件，但未披露学习率、warmup、batch size、训练步数/轮数，且语义码本大小、S2A层数/维度、DiT参数量、训练时长及T2S解码策略均缺失，关键配置大量缺失，故为0.1。

*   工程/实践价值 (1.2/1.5)：[A_METHOD] 约500k小时多语言数据管线、源分离降噪、ASR过滤、说话人聚类、两阶段训练以及双模式无转录reference cloning，构成覆盖14种语言的工业级TTS系统，具备实际部署潜力。

### 🚨 局限与问题

论文原文已披露的未来工作即部分局限：扩展高质量长尾语言数据和中文方言覆盖、提升流式与低延迟推理、降低生产服务运行时成本、在多样参考条件下增强说话人相似度和细粒度风格保留。对于本篇技术报告，更直接的局限在于：未提供组件级消融实验，无法量化 learnable speaker encoder、T2S 隐藏状态注入、prompt mel 以及 CFG 各自贡献；未报告延迟、吞吐、RTF、模型参数量与服务资源成本；未对 Seed-TTS-eval 和 CV3-Eval 等结果做显著性检验或置信区间；S2A 训练时使用目标音频前缀作为 prompt、推理时使用参考音频，训练/推理分布差异未专门消融或讨论；T2S 的具体解码策略（温度、top-k/top-p、beam 等）未披露；人类评估依赖内部测试集和内部评分协议，外部可比性受限。

---

[← 返回 2026-08-13 语音/音乐/音频论文速递](/audio-paper-digest-blog/posts/2026-08-13/)
