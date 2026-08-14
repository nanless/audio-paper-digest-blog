---
title: "FastThaiG2P: Lightning-fast Thai Grapheme-to-phoneme Conversion for Voice Agent Pipelines"
date: 2026-08-14
draft: false
tags: [语音合成, 大语言模型, 多语言, 开源工具]
categories: [论文速递]
description: "语音合成 | 7.0/10"
hiddenInHomeList: true
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_arxiv_id: "2608.12814"
---

# 📄 FastThaiG2P: Lightning-fast Thai Grapheme-to-phoneme Conversion for Voice Agent Pipelines

标签：#语音合成 #大语言模型 #多语言 #开源工具

**7.0/10** | 创新 1.2/2 | 严谨 1/1.5 | 实验 0.6/1.5 | 清晰 0.8/1 | 影响 0.7/1.5 | 开源 1.2/1.5 | 复现 0.3/0.5 | 工程 1.2/1.5

✅ **7.0/10** | 前50% | 文档类型：系统技术报告 | 评分置信度：中 | #语音合成 | #大语言模型 | #多语言 #开源工具 | [arxiv](https://arxiv.org/abs/2608.12814)


### 👥 作者与机构

- 唯一作者：Charin Polpanumas（AWS）
- 通讯作者：论文未单独标注通讯作者；仅提供邮箱 charipol@amazon.com，通常可视为唯一作者通讯
- 作者列表：Charin Polpanumas（AWS）

### 💡 毒舌点评

这个工作把泰语 G2P 的工程链路做得相当务实：15 类归一化、词典耦合分词、正则缓存直接把延迟打到 0.15 ms，CPU TTS 演示也给到 RTF 0.25、内存约 330 MB。但它更像一份发布说明而非研究论文：全文没有任何 G2P 准确率，也没有 MOS/CER/WER，只在 500 条 Wiktionary 条目的 prompt 验证上给出 78.8% exact match 和 1.8% 致命错误率；读者无法判断 “intelligible” 和 “phonologically valid” 到底有多可信。LLM 生成的约 49,000 条词典条目只靠 38 个码点白名单过滤，未做抽检，生产风险被明显低估。

### 📌 核心摘要

论文要解决的问题是泰国语 TTS 流水线中 G2P 阶段需要同时满足低延迟、词典覆盖、文本归一化与 OOV 兜底，而现有工具往往只覆盖其中一部分。方法核心是一个四阶段流水线：文本归一化、PyThaiNLP newmm 分词、62,112 词 IPA 词典查找、基于 TLTK 的规则 OOV 兜底，并通过正则缓存和导入期初始化显著降低延迟。与已有方法相比，该系统把大规模 IPA 词典、15 类非可说文本归一化、快速 OOV 处理和 Kokoro 音素映射整合在同一前端中。主要实验结果是 27,242 句合成 benchmark 上平均 0.15 ms/句，OOV token 率 0.5%，OOV 兜底占 58% 时间；相对 TLTK 约 2 ms/句，最高约 15 倍加速。TTS 演示用 Som-TTS 20 小时数据微调 82M StyleTTS 2/Kokoro 模型，CPU ONNX 推理 RTF 0.25，内存约 330 MB，论文声称产出可理解、带可辨识声调模式和自然节奏的泰语语音，适合原型与开发用途。实际意义是为资源受限、CPU-only 的泰语语音代理提供可用 G2P 前端。主要局限性是词典覆盖集中于中部泰语，G2P 准确率与 TTS 质量均无正式评测；TTS 训练细节也不足以独立复现。

### 🔗 开源详情

代码以 Apache-2.0 许可证发布，仓库地址：github.com/aws/FastThaiG2P。仓库包含词典数据、文本归一化、OOV fallback、latency profiling 脚本以及生成 IPA 的 prompt/validation 脚本。论文未明确说明 TTS 模型 checkpoint 是否随仓库发布；使用的训练数据 Som-TTS 为外部开放数据集。

### 🏗️ 方法概述和架构

FastThaiG2P 是一个多阶段流水线系统，输入为原始泰语文本，输出为 IPA 或 Kokoro 格式音素序列。整体处理顺序是：文本归一化 → 分词 → 词典查找 → OOV 规则兜底。其目标不是训练一个端到端神经 G2P 模型，而是用确定性规则、哈希查找和可选 TTS 前端组合，保证实时语音代理场景中的低延迟和可调试性。

第一个组件是文本归一化。它负责把不可直接朗读的文本转换为可朗读形式，并在固定顺序下执行，避免不同规则互相冲突。论文声称覆盖 15 类非可说文本，明确列出的处理项包括：扩展 maiyamok 重复标记、泰文数字转阿拉伯数字、读取 email、读取英文缩写和品牌名（通过转写词典）、读取单位（kg、km、°C 等）、读取符号（%、+、× 等）、读取时间模式（14:30、23:12 等）、读取电话号码（按组逐位读取）、读取字母数字标识（ORD-001）、读取逗号分隔数字（1,000）、读取小数和普通数字、读取泰文缩写、读取残余拉丁字符。数字读法采用长度分支：6 位及以下按泰语位值读法，7 位及以上逐位读取，以符合电话号码和账号等场景。该组件被定位为级联语音代理（ASR → LLM → TTS）中 LLM 前端失败时的确定性最后防线。

第二个组件是分词。归一化后的文本使用 PyThaiNLP 的 newmm 最大匹配引擎，并加载自定义词典 data/dict.txt。该词典同时作为分词词表和 IPA 词典查找键，使用户得到的每个 token 都能在词典中找到对应音素，除非是 OOV。这样设计可减少分词与 G2P 词典查找之间的不一致，是延迟可控的关键结构。

第三个组件是词典查找。词典共 62,112 条 IPA，来源按优先级从高到低为人工覆盖、Wiktionary 和 LLM 生成。人工覆盖对应 sources/manual_overrides.json，用于 Wiktionary 或自动方法失效时人工修正。Wiktionary 约 13,000 条来自英语 Wiktionary 泰语 IPA dump，作为转写格式参考。LLM 生成部分约 49,000 条，使用 Claude Opus 4.6 通过 Amazon Bedrock 批量生成，每批 100 词，prompt 包含 IPA 规则、音系约束和示例；生成结果经过 38 个音素相关码点白名单校验，不合规条目被拒绝并记录到 generated_ipa_invalid.json。在批量生成前，prompt 在 500 条随机 Wiktionary 条目上验证，最终 prompt 达到 78.8% 完全匹配率和 1.8% 致命错误率；致命错误定义为音节数、声母或元音音质错误，声调、元音长度、双元音标记和韵尾变体归为非致命错误，Pali/Sanskrit 不规则借词不计入致命错误统计。该方法把 LLM 用作离线词典扩展工具，而不是运行时 G2P 推理器，因此推理阶段没有神经解码成本。

第四个组件是 OOV 规则兜底。它从 TLTK 移植而来，当词典查找失败时触发。兜底先使用 trigram 音节切分数据 data/fallback/sylseg.3g 将词切为音节，再根据辅音类别、元音模式和声调规则生成罗马化读音，最后映射到 IPA，包括送气和不除阻塞音等标记。它保证输出音系上合法的泰语 IPA，但对不规则词、借词和含沉默字母的 Pali/Sanskrit 复合词可能给出非惯用读音，系统建议高频 OOV 手工加入词典。该组件最关键的工程优化是正则缓存：原始 TLTK 在多次调用中反复编译大量音节模式正则，Python 内部 LRU 缓存只有 512 条，容易被占满；论文在音节解析、音节枚举和规则加载三个热循环中加入显式无界缓存，并在导入时预加载规则。虽然 OOV token 只占 0.5%，但兜底路径此前主导了总耗时，优化后整体从约 2 ms/句降至 0.15 ms/句。

音素表示遵循英语 Wiktionary 泰语 IPA 标准，使用 Chao 声调字母，共 38 个音素相关码点。为适配 Kokoro-82M，系统把泰语 5 个声调映射到 5 个 Kokoro 声调标记，其中高调复用未用 token ID 170，避免高调与升调在朴素映射下合并；同时去除 IPA 附加符号，并用 Kokoro 等价物代替塞擦音和 g 字符。这样使原本不支持泰语的 Kokoro-82M 可以接受泰语音素输入。

系统遵循英语维基词典的泰语IPA标准，具体的音素表示规范如下图所示。

![Figure 1: IPA Convention](https://arxiv.org/html/2608.12814v1/images/ipa_convention.png)

该图列举了声调、音节边界、元音长度等关键语音特征的IPA记法及示例，是系统生成音素序列的基准。


TTS 演示部分使用 Som-TTS 20 小时单说话人 grapheme-audio 对齐数据，先用 FastThaiG2P 把文本转成 Kokoro 音素格式，再用 kikiri-tts 训练配方微调 82M StyleTTS 2/Kokoro 模型，并导出 ONNX 以支持 CPU 推理。

为使不支持泰语的Kokoro-82M模型能接受输入，系统设计了特定的IPA到Kokoro音素映射方案，详见下图。

![Figure 2: IPA-to-Kokoro Mapping](https://arxiv.org/html/2608.12814v1/images/ipa_kokoro_mapping.png)

图中展示了泰语五声调及辅音等特征如何映射到Kokoro token，其中高调复用了未使用的ID 170，避免了与升调合并。

### 💡 核心创新点

- 构建 62,112 词条 IPA 词典，融合 Wiktionary、经音系规则验证的 LLM 生成转写和人工覆盖；
- 覆盖 15 类非可说文本的确定性文本归一化流水线，可作为 LLM 前端失败时的最后防线；
- 通过无界正则缓存和导入时预加载，将 OOV 兜底路径延迟降低最多 15 倍，整体从约 2 ms/句降至 0.15 ms/句；
- 设计 IPA-to-Kokoro 映射，复用未用 token ID 170 表示泰语高调，使英文预训练的 Kokoro-82M 支持泰语五声调输入；
- 提供 CPU-only 端到端 TTS 演示：Som-TTS 20 小时数据微调 82M 模型，RTF 0.25，内存约 330 MB。

### 📊 实验结果

在 27,242 句合成 benchmark 上，FastThaiG2P 平均端到端延迟为 0.15 ms/句；其中 tokenization 占 30%，normalization 占 12%，OOV fallback 占 58%，OOV token 率为 0.5%。与 TLTK 基线约 2 ms/句相比，最高约 15 倍加速。TTS 演示中，用 Som-TTS 20 小时数据微调 82M StyleTTS 2/Kokoro 模型，CPU ONNX 推理 RTF 0.25（4 倍实时），总内存占用约 330 MB，产出可理解、有声调模式和自然节奏的泰语语音。

| 指标 | 数值 |
|---|---|
| 平均延迟 | 0.15 ms/句 |
| Tokenization 占比 | 30% |
| Normalization 占比 | 12% |
| OOV fallback 占比 | 58% |
| OOV token 率 | 0.5% |
| TLTK 基线延迟 | 约 2 ms/句 |
| TTS RTF（CPU） | 0.25 |
| TTS 内存 | 约 330 MB |

下图展示了FastThaiG2P在27,242句合成benchmark上的延迟剖析结果。

![Figure 3: Latency Profiling Result](https://arxiv.org/html/2608.12814v1/images/latency_result.png)

图中清晰列出了平均延迟、吞吐量以及各处理阶段的时间占比，其中OOV兜底虽仅处理0.5%的token，但占据了58%的运行时间。

### 🔬 细节详述

- 词典来源优先级：manual_overrides.json 最高，其次 wiktionary_ipa.json（约 13,000 条），最后 generated_ipa.json（约 49,000 条）。
- LLM 词典生成：Claude Opus 4.6 通过 Amazon Bedrock 批量生成，每批 100 词；prompt 文件为 scripts/ipa_prompt.txt，验证脚本为 scripts/validate_prompt.py。
- prompt 验证集：500 条随机 Wiktionary 条目；最终 prompt 达到 78.8% exact match、1.8% fatal error。Fatal 定义为音节数、声母或元音音质错误；非致命包括声调、元音长度、双元音标记和韵尾变体；Pali/Sanskrit 不规则借词不计入 fatal。
- 词典过滤：38-codepoint 音素白名单；不合规条目记录到 generated_ipa_invalid.json。
- 分词：PyThaiNLP newmm 最大匹配，data/dict.txt 同时作为分词词表和 IPA 查找键，data/ipa.json 提供 IPA 映射。
- OOV fallback：TLTK 规则 vendored；使用 data/fallback/sylseg.3g 做 trigram 音节切分；正则缓存在音节解析、音节枚举和规则加载三个热循环中显式加入，并在导入时预加载规则。
- IPA-to-Kokoro 映射：Kokoro-82M 原生只有四个 intonation markers，泰语需要五个声调；复用 token ID 170 作为高调标记，避免高调与升调合并；去除 IPA 附加符号，替换塞擦音和 g 字符为 Kokoro 等价物。
- TTS 训练：使用 kikiri-tts 训练配方；两阶段训练，阶段 1 为文本到 mel 对齐和 duration prediction，阶段 2 为多尺度判别器对抗训练；模型输入 Kokoro 格式音素序列，输出 24 kHz 音频；导出 ONNX 后输出 raw audio samples 和 frame durations，并用 voicing detection 去除 BOS/EOS pad token 窗口噪声。

### ⚖️ 评分理由

*   创新性 (1.2/2)：[A_METHOD] 论文将62,112词IPA词典、15类文本归一化、耦合分词与词典查找、无界正则缓存OOV兜底及IPA-to-Kokoro五声调映射整合成亚毫秒G2P前端，工程组合本身构成系统级新能力，但核心G2P算法和TTS模型非原创，给1.2。

*   技术严谨性 (1.0/1.5)：[A_METHOD][A_LIMITS] 四阶段流水线、词典来源优先级、正则缓存和声调映射均有明确逻辑；但LLM生成的约49,000条词典仅靠38码点白名单过滤而未抽检，规则兜底只保证音系合法而非惯用，方法鲁棒性存在弱点，给1.0。

*   实验充分性 (0.6/1.5)：[A_RESULTS][A_LIMITS] 27,242句延迟剖析、OOV率、TLTK延迟基线加速以及CPU RTF/内存构成系统级性能证据；但缺少系统级G2P准确率和MOS/CER/PER/WER，仅500条prompt验证不能代替端到端质量，给0.6。

*   清晰度 (0.8/1)：[A_METHOD][A_SUMMARY] 四阶段处理流程、各组件用途与TTS演示的边界交代清楚，图表编号与关键优化点均可追踪；未见明显组织、符号或写作问题，给0.8。

*   影响力 (0.7/1.5)：[A_SUMMARY][A_RESULTS] 面向资源受限CPU-only泰语语音代理，提供亚毫秒G2P和可运行TTS前端，语音领域相关性强，适合原型与开发；但目前影响集中在泰语和开发场景，未展示广泛采用，给0.7。

*   开源 (1.2/1.5)：[A_OPEN] Apache-2.0仓库开放核心G2P代码、词典数据、归一化、OOV fallback、profiling及prompt/validation脚本；但未明确TTS模型checkpoint是否随仓库发布，开放范围存在缺项，给1.2。

*   可复现性 (0.3/0.5)：[A_METHOD][A_LIMITS] G2P四阶段设计、词典来源、prompt验证脚本和正则缓存优化描述较详细；但TTS训练细节和数据处理不足以独立复现，给0.3。

*   工程/实践价值 (1.2/1.5)：[A_RESULTS][A_LIMITS] 平均0.15 ms/句、OOV兜底占比58%仍保持亚毫秒、TLTK最高约15倍加速、CPU ONNX RTF 0.25且内存约330 MB，在资源受限CPU部署下工程价值明确，给1.2。

### 🚨 局限与问题

- 词典覆盖集中于标准中部泰语，区域词汇、新借词、俚语和泰英夹杂覆盖不足。
- 规则 OOV 兜底可能对不规则词、Pali/Sanskrit 复合词中的沉默字母和非标准借词读音出错，生成的是音系合法但不一定惯用的发音。
- 声调赋值遵循标准中部泰语规则，不建模方言变体或复合词中声调标记省略等例外。
- 没有正式 MOS 主观评测，也没有 CER/PER/WER 等客观 TTS/G2P 评测；仅有的 78.8% exact match、1.8% fatal error 来自 500 条 prompt 验证，不能代替系统级准确率。
- LLM 生成约 49,000 条词典仅用 38 码点白名单过滤，未做抽检，可能混入系统性错误。
- 论文没有明确说明 TTS 模型 checkpoint 是否随仓库发布，TTS 训练细节和数据处理不足以独立复现。

---

[← 返回 2026-08-14 语音/音乐/音频论文速递](/audio-paper-digest-blog/posts/2026-08-14/)
