---
title: "VoxSumm: A Multilingual Corpus of Long-Form Spoken News for Joint Summarization and Translation"
date: 2026-08-12
draft: false
tags: [语音翻译, 大语言模型, 低资源, 语音合成]
categories: [论文速递]
description: "语音翻译 | 6.9/10"
hiddenInHomeList: true
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_arxiv_id: "2608.10359"
---

# 📄 VoxSumm: A Multilingual Corpus of Long-Form Spoken News for Joint Summarization and Translation

标签：#语音翻译 #大语言模型 #低资源 #语音合成

**6.9/10** | 创新 1.4/2 | 严谨 1/1.5 | 实验 1.2/1.5 | 清晰 0.9/1 | 影响 1.1/1.5 | 开源 0/1.5 | 复现 0.3/0.5 | 工程 1/1.5

✅ **6.9/10** | 前50% | 文档类型：数据集与基准 | 评分置信度：高 | #语音翻译 | #大语言模型 | #低资源 #语音合成 | [arxiv](https://arxiv.org/abs/2608.10359)


### 👥 作者与机构

- 第一作者：Yejin Jeon（Mila - Quebec AI Institute、McGill University）；Marie Maltais（Mila - Quebec AI Institute、McGill University，标注 equal contribution）
- 通讯作者：未说明
- 作者列表：Yejin Jeon（Mila - Quebec AI Institute、McGill University）、Marie Maltais（Mila - Quebec AI Institute、McGill University）、Virginia Ceccatelli（Mila - Quebec AI Institute、McGill University）、Min Ma（Google DeepMind）、David Ifeoluwa Adelani（Mila - Quebec AI Institute、McGill University、Canada CIFAR AI Chair）

### 💡 毒舌点评

亮点是给出了第一个大规模多语言长语音“联合摘要+翻译”基准 VoxSumm，703小时/24语言/10045对的规模填补了任务定义和数据空白，并做了较系统的模型与提示设置比较。短板是全部音频由 TTS 合成而非真实语音，且数据对齐依赖 CrossSum 自动语义相似度匹配，论文只承诺 release 却未给出任何可获取链接，可复现性大打折扣。

### 📌 核心摘要

VoxSumm 聚焦一个此前缺乏形式化定义的任务：将源语言长语音文档直接生成为目标语言简洁摘要（JSumT）。作者从 CrossSum/XL-Sum 中构建了包含 10,045 对文章-摘要、约 703 小时、覆盖 24 种语言的跨语言语音摘要基准。相比已有的语音翻译和文本摘要资源，该基准首次同时要求模型进行语音理解、信息压缩与跨语言生成。实验表明 Gemini3.1-Pro 最强（BERTScore 平均 0.703），Qwen3-Omni（0.657）次之，Gemma4-12B（0.617）最弱；少样本提示对 Gemini3.1-Pro 和 Qwen3-Omni 最为有效，Gemma4-12B 对提示方式不敏感。非英语语音生成英语摘要几乎总是好于英语语音生成非英语摘要；先翻译后摘要会放大指令跟随失败。音频全部由 OmniVoice 合成而不是真实广播，且摘要对来自自动语义对齐，这是该数据集相对于真实野外语音资源的主要局限。

### 🔗 开源详情

论文在引言中声明“we release the VoxSumm dataset and accompanying code”，但全文未给出数据集下载链接、代码仓库地址、模型权重或 API 访问方式；具体仓库 URL、数据文件、模型权重均未披露。机器摘要资源状态为 has_code=否、has_model=否、has_dataset=否，因此当前实际可获取的开源资源仅为论文描述与评测结果，代码和数据无法直接获得。

### 🏗️ 方法概述和架构

本文核心贡献是一个数据集与基准测试框架，而非新的语音模型，因此方法部分重点描述数据构建、语音合成、质量控制和基准评估协议。

整体流程分为三个阶段：从 CrossSum 多元文章-摘要配对中筛选可用文本对；利用 OmniVoice 将文章和摘要合成为 24kHz 长语音；通过 CER、NISQA 和人工评价对语音质量进行验证。作者形式化 JSumT 任务为：给定源语言长语音文档 \(X\)，模型在目标语言中生成一句话摘要 \(Y\)，要求 \(Y\) 既忠实压缩 \(X\) 的核心语义，又完全使用目标语言表达。这与传统语音翻译（保留全部语义、不压缩）和单语文本摘要（不涉及跨语言改写）均有本质区别，也是整个基准设计的逻辑起点。

在文本对构建上，数据源自 CrossSum 的跨语言文章对齐。作者仅保留 source URL、target URL、article body、summary 都存在的实例，并过滤掉少于 205 对的语言。关键设计是 URL 中嵌入的数字 ID 与语言前缀组成“语言限定 ID”（如 `french_55217075` 与 `english_55209763`）。由此构造两类键：方向键 `{src_lang}_{src_id}-{tgt_lang}_{tgt_id}` 保留有序方向；规范键对两个语言限定 ID 排序后生成，使 `french_55217075-english_55209763` 与 `english_55209763-french_55217075` 映射到同一底层文章对。这套机制使同一个原始配对可同时产生源到目标和目标到源两种方向的摘要实例，是支持双向基准评估的核心。

语音合成流程中，作者选择 OmniVoice TTS 的原因是其覆盖 600 种语言且在候选模型中 CER 最低。合成前先进行空白归一化，并按标点把文本切成句子，支持 Latin、Arabic、CJK 文本规则；连续句子按最多 1200 字符聚合为 chunk，每个 chunk 独立合成后重采样到 24kHz，再按原始顺序拼接。质量门槛设定为每语言 CER 不高于 25，否则整语言丢弃；最终 24 种语言平均 CER 为 6.65。

质量控制包含两层：生成中由母语者人工抽查每方向 20% 文件；生成后计算 NISQA 平均 4.39，并由 30 名外部标注者对 10 种语言的子集做 1–5 主观评价，平均 4.07，与 NISQA 一致。

在质量控制中，作者对10种语言进行了人工主观音频质量评估。

![Figure 1: Human subjective listening evaluation of audio quality. This is measured using a 1-5 Likert scale averaged over a sample of 50 utterances per language.](https://arxiv.org/html/2608.10359v1/fig_audio_understanding_by_language.png)

图中可见，大多数语言的平均评分在4.5左右，表明合成音频可懂度较高，与NISQA自动评估结果一致。


在基准评估协议中，作者选择 Gemini3.1-Pro、Qwen3-Omni（30B）和 Gemma4-12B 三种模型，分别测试零样本、五样本和思维链提示。CoT 提示引导模型先做 5W1H 内部语义抽取，再整合为一句目标语言摘要，但不输出中间结果。任务顺序也被显式建模：Summarization→Translation 先摘要后翻译，Translation→Summarization 先翻译后摘要。评估指标以 BERTScore-F1 和 xCOMET-XL 为主，辅以 ROUGE-L、G-Eval 和人工评分。这种“数据构建-语音合成-质量验证-多模型评估”的完整闭环，使 VoxSumm 不仅是一个语料库，还成为可复用的跨语言语音摘要评测体系。

### 💡 核心创新点

1. 形式化 JSumT（Joint Speech Summarization and Translation）任务。现有语音翻译只做语义保留，文本摘要不涉及语音和跨语言改写，JSumT 将语音理解、信息压缩、跨语言生成三者统一建模。此前没有明确公式化任务定义，也没有对应数据集。该任务定义成为构建 VoxSumm 和后续评估的基石。

2. 构建 VoxSumm，首个多语言长语音跨语言摘要基准。规模为 703 小时、24 种语言、10,045 对文章-摘要，覆盖大量中低资源语言如阿姆哈拉语、古吉拉特语、僧伽罗语、吉尔吉斯语等。此前 XL-Sum、CrossSum 是纯文本，MuST-C、CoVoST 2 只含翻译无摘要压缩，该资源填补了“语音+摘要+跨语言”三维交叉的空白。

3. 基于 URL 数字 ID 的规范键机制实现双向实例重建。CrossSum 原始数据只提供单一方向的文章-摘要配对；作者利用 URL 内的语言限定 ID 构造排序后的规范键，自动识别同一文章配对的反向实例，使同一底层事件可以同时评估 XX→英语和英语→XX 两个方向。这是低成本将单向文本资源扩展为双向语音基准的巧妙设计。

4. 系统性揭示跨语言语音摘要的模型行为规律：更强模型受益于少样本提示，先摘要后翻译比先翻译后摘要更稳定，生成英语目标普遍优于非英语目标，且低资源语言差距不是统一规律（如韩语、葡萄牙语表现低于吉尔吉斯语和泰语）。这些发现为后续 JSumT 的提示设计和模型选择提供了直接经验参考。

### 📊 实验结果

主要基准为 VoxSumm 自建的 24 语言评测集，每种语言方向 200 条测试样本，以 BERTScore-F1 和 xCOMET-XL 为主要指标。Summarization→Translation 方向上（论文表 2），Gemini3.1-Pro 平均 BERTScore 0.703（xCOMET 0.339），Qwen3-Omni 平均 0.657（xCOMET 0.250），Gemma4-12B 平均 0.617（xCOMET 0.224）。Gemini3.1-Pro 的 Few-shot 达到 0.727，比其 Zero-shot 和 CoT 高约 0.036；Qwen3-Omni 的 Few-shot 同样最优，Gemma4-12B 对提示方式不敏感。按语言资源分组，低资源语言（阿姆哈拉语、古吉拉特语、吉尔吉斯语等）显著低于高资源语言（中文、法语、西班牙语等），但 Gemma4-12B 与 Qwen3-Omni 的资源差距比 Gemini3.1-Pro 大（图 2）。

在主要基准评估中，作者比较了不同模型在低资源与高资源语言上的BERTScore分布。

![Figure 2: Low-resource versus high-resource language comparisons. BERTScore-F1 results are pooled across FS, ZS and CoT settings for each of our models.](https://arxiv.org/html/2608.10359v1/resource_gap_bertscore_box.png)

从箱线图可见，高资源语言的性能普遍高于低资源语言，且不同模型的资源差距存在差异。


Translation→Summarization 方向（论文表 3）整体平均下降相对有限，但英语→XX 方向受影响大（平均 -0.081），XX→英语几乎不变（-0.012）。极端情况是 Qwen3-Omni 零样本英语→XX 出现 -0.448 的显著劣化，作者归因于长音频翻译后指令跟随失败、漏输出摘要或幻觉。语言方向效应方面，XX→英语几乎总是优于英语→XX（图 4）。

下图展示了在翻译后摘要设置下，语言方向对性能的影响。

![Figure 4: Influence of language direction on performance in the Summarization→\\rightarrowTranslation setting.](https://arxiv.org/html/2608.10359v1/Lang_Dir_Sum_trans.png)

图中显示，英语→XX方向的性能下降更明显，而XX→英语方向保持相对稳定。


下表保留表 3 的关键对比行，即三种模型在 Translation→Summarization 方向下英语→XX 与 XX→英语两类任务顺序的 BERTScore 结果（括号内为相对 Summarization→Translation 方向的差值）。

| 模型与设置 | Eng→XX | XX→Eng |
|---|---|---|
| Gemini3.1-Pro FS | 0.724 (-0.003) | 0.730 (+0.005) |
| Gemini3.1-Pro ZS | 0.686 (-0.005) | 0.692 (-0.001) |
| Gemini3.1-Pro CoT | 0.692 | 0.693 |
| Gemma4-12B FS | 0.580 (-0.032) | 0.621 (-0.006) |
| Gemma4-12B ZS | 0.600 (-0.019) | 0.630 (+0.005) |
| Gemma4-12B CoT | 0.619 | 0.630 |
| Qwen3-Omni FS | 0.668 (+0.002) | 0.687 (+0.000) |
| Qwen3-Omni ZS | 0.211 (-0.448) | 0.529 (-0.071) |
| Qwen3-Omni CoT | 0.647 | 0.661 |
| 平均 | 0.578 (-0.081) | 0.648 (-0.012) |

消融与附加实验方面：Qwen3-Omni 用原文文本替换语音输入，BERTScore 平均提升 +0.017（表 6），证明声学编码引入信息损失；英语→英语纯摘要任务（0.700）比英文→XX 的摘要+翻译（0.665）高 0.035，说明跨语言生成本身也有难度；级联 ASR-转录-摘要-翻译 pipeline 的两种顺序（先翻译后摘要、先摘要后翻译）均使 Gemini3.1-Pro 性能相比对应端到端设置下降（论文表 5）。人类主观评估中，BERTScore 与人工评分 Pearson 相关 0.77，xCOMET 为 0.66（图 3）。G-Eval 与人工评估相关高达 0.98（附录 B）。ROUGE-L 与 BERTScore 排序一致（表 7），三种模型排名保持：Gemini3.1-Pro > Qwen3-Omni > Gemma4-12B。此外，论文第 6 节对生成摘要的长度与命名实体分布做了分析：Gemini3.1-Pro 与 Qwen3-Omni 在 ZS/CoT 下产生的命名实体数量超过参考摘要，Gemma4-12B 在 ZS/FS 下与参考相近、CoT 下更多；按 GPE、PERSON、ORG、NORP 等类别拆分后趋势一致。

### 🔬 细节详述

- 训练数据：VoxSumm 文本基础来自 CrossSum（Bhattacharjee et al. 2023），而 CrossSum 由 XL-Sum 的单语文章-摘要对跨语言对齐而来；对齐基于 LaBSE 计算摘要级语义相似度。过滤条件包括 source URL、target URL、article body、summary 均非空，且语言样本数 ≥205。最终保留 24 种语言、10,045 对文章-摘要，合成语音约 703 小时，平均每语言约 29 小时（表 1）。
- 音频合成：使用 OmniVoice TTS，固定参考说话人；合成前做空白归一化和按标点切句，支持 Latin、Arabic、CJK 脚本；连续句子按最多 1200 字符聚合为 chunk，独立合成后重采样到 24kHz 再拼接。
- 质量门槛：每语言 CER ≤25，否则整语言丢弃；最终平均 CER 6.65，NISQA 4.39，人工主观评分（10 语言子集）4.07。
- 基准评估：24 个英语→XX 语言方向，每种 200 条测试样本；三种模型 Gemini3.1-Pro、Qwen3-Omni（30B）、Gemma4-12B，三种提示设置 ZS/FS/CoT。
- 指标：BERTScore-F1 和 xCOMET-XL 为主，辅以 ROUGE-L、G-Eval 与人工评分；缺失摘要按有效样本比例惩罚。

### ⚖️ 评分理由

*   创新性 (1.4/2)：[A_SUMMARY][A_METHOD] 首次形式化JSumT任务并构建VoxSumm基准，覆盖24语言、703小时语音和10045对数据，填补了多语言长语音联合摘要与翻译的空白。

*   技术严谨性 (1.0/1.5)：[A_LIMITS] 数据依赖CrossSum的LaBSE自动语义对齐，可能产生不完美配对；音频全部由TTS合成而非真实广播，缺少环境噪声和口音变化，削弱了基准的实际代表性。

*   实验充分性 (1.2/1.5)：[A_RESULTS][A_LIMITS] 实验覆盖3模型×3提示×双向×多指标，并含模态消融和级联对比；但Qwen3-Omni官方不支持14种低资源语言仍纳入评测，人工验证仅10/24语言，对比公平性和误差分析受限。

*   清晰度 (0.9/1)：[A_METHOD] 任务定义、数据构建、语音合成、质量控制和评估协议采用分阶段叙述，结构清晰，图表与指标说明充分，易于理解。

*   影响力 (1.1/1.5)：[A_SUMMARY] VoxSumm作为首个多语言长语音跨语言摘要基准，提供了大规模资源和系统评测结果，对语音摘要、跨语言NLP及低资源语言研究具有推动作用。

*   开源 (0.0/1.5)：[A_OPEN] 论文未发布核心代码、模型权重或数据资源，也未给出明确的后续开源承诺。

*   可复现性 (0.3/0.5)：[A_METHOD] 数据构建流程和评估协议描述细致，但OmniVoice TTS的具体模型版本、参考说话人音频等复现关键信息未披露，第三方需自行假设，大部分充分但有少量缺失。

*   工程/实践价值 (1.0/1.5)：[A_METHOD] 构建了从CrossSum筛选、TTS合成、CER/NISQA质量控制到多模型评测的完整流水线，并通过语言限定ID规范键机制高效重建双向实例，工程实践扎实。

### 🚨 局限与问题

- 自动对齐误差：VoxSumm 的跨语言配对来自 CrossSum 基于 LaBSE 摘要语义相似度的自动对齐，因此可能存在不完美对齐。作者通过只保留完整实例、保守重建双向配对和质量控制来缓解，但无法完全消除误差。
- 合成语音与真实广播的差距：所有音频由 OmniVoice 从专业撰写的新闻文本合成，而非自然采集的广播语音。虽然 CER、NISQA 和人工评价显示音频可懂度和自然度较高，但合成语音缺少真实环境噪声、口音变化、口语 disfluencies 等野外特征。
- 目标语言方向偏差：英语→XX 方向显著弱于 XX→英语，尤其在先翻译后摘要时，Qwen3-Omni 零样本英语→XX 出现 -0.448 的严重性能下降，暴露长音频跨语言摘要的稳定性问题。
- 模型语言支持限制：Qwen3-Omni 官方不支持部分低资源语言（阿姆哈拉语、孟加拉语、古吉拉特语、印地语、吉尔吉斯语、波斯语、旁遮普语、僧伽罗语、斯瓦希里语、泰米尔语、泰卢固语、泰语、乌克兰语、越南语），但作者仍将其纳入评测，可能引入额外不确定性。
- 人工验证覆盖有限：外部主观听评仅覆盖 10/24 语言，30 名标注者；LLM-as-Judge 的人工验证也受限，难以全面反映所有语言的质量。
- 资源可获取性：论文声明发布数据集和代码，但未提供链接，第三方无法直接获取用于复现或扩展。

---

[← 返回 2026-08-12 语音/音乐/音频论文速递](/audio-paper-digest-blog/posts/2026-08-12/)
