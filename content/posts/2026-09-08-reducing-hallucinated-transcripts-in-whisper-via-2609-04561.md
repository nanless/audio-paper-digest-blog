---
title: "Reducing Hallucinated Transcripts in Whisper via Hallucination Space Projection"
date: 2026-09-08
draft: false
tags: [语音识别, 测试时自适应, 鲁棒性, 语音活动检测]
categories: [论文速递]
description: "针对 Whisper 在无语音输入上生成流畅幻觉文本的问题，论文用无语音校准集估计解码器幻觉子空间并在推理时做低秩投影以提升无语音概率，门控版本在保留语音识别的同时把非语音幻觉率大幅降低。"
hiddenInHomeList: true
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_arxiv_id: "2609.04561"
paper_digest_workbench_contract: "researcher-workbench-v1"
paper_digest_reader_title: "无语音却有文本：用门控低秩投影在解码器表示层抑制 Whisper 幻觉"
paper_digest_original_title: "Reducing Hallucinated Transcripts in Whisper via Hallucination Space Projection"
paper_digest_arxiv_version: null
paper_digest_arxiv_versioned_id: null
paper_digest_arxiv_abs_url: "https://arxiv.org/abs/2609.04561"
paper_digest_arxiv_pdf_url: "https://arxiv.org/pdf/2609.04561.pdf"
paper_digest_primary_task: "语音识别"
paper_digest_taxonomy_contract: "paper-taxonomy-flat-tags-compat-v1"
paper_digest_taxonomy_selection_contract: "paper-taxonomy-selection-v1"
paper_digest_taxonomy_registry_version: "paper-taxonomy-v1"
paper_digest_taxonomy_registry_sha256: "15c82a567ce5a55dc1175684ed08b64c158558639d9c8fb822c9587ec32a8778"
paper_digest_taxonomy_concepts: [{"facet":"task","id":"task.asr","label":"语音识别"},{"facet":"method","id":"method.test-time-adaptation","label":"测试时自适应"},{"facet":"research_focus","id":"research_focus.robustness","label":"鲁棒性"},{"facet":"task","id":"task.vad","label":"语音活动检测"}]
paper_digest_primary_method: "测试时自适应"
paper_digest_score: 6.8
paper_digest_rank_bucket: "前50%"
paper_digest_document_type: "方法研究"
paper_digest_one_sentence: "针对 Whisper 在无语音输入上生成流畅幻觉文本的问题，论文用无语音校准集估计解码器幻觉子空间并在推理时做低秩投影以提升无语音概率，门控版本在保留语音识别的同时把非语音幻觉率大幅降低。"
paper_digest_authors: [{"affiliations":["The university of Texas at San Antonio"],"name":"Maryam Abbasihafshejani"},{"affiliations":["The university of Texas at San Antonio"],"name":"Murtuza Jadliwala"}]
paper_digest_abstract_sha256: "66a9e22a0991c2760464e839fb21a436a4b30b159c3cfcc791eeb98a408b7917"
paper_digest_sidecars: {"citation.bib":{"sha256":"f16e07117de3ba6a4197ba2563788a95fecea43140ff729e880987236150bd95","url":"/audio-paper-digest-blog/data/papers/2026-09-08/2609-04561/citation.bib"},"citation.json":{"sha256":"e8ed32d870fd7a18cd891b0ddd67626e0e1640d41ee43a07528fd265e3022236","url":"/audio-paper-digest-blog/data/papers/2026-09-08/2609-04561/citation.json"},"citation.ris":{"sha256":"4a7af930c4192e5737158108cf1e87d7dfadea1544aab33dee2e3cb76974f077","url":"/audio-paper-digest-blog/data/papers/2026-09-08/2609-04561/citation.ris"},"rethink-context.json":{"sha256":"18764c6db261fb70909de84389f21a29a972e88d272e6538d6b89ef6d57b1cf9","url":"/audio-paper-digest-blog/data/papers/2026-09-08/2609-04561/rethink-context.json"}}
paper_digest_api_reader_contract: "beginner-researcher-v3"
paper_digest_api_reader_article_sha256: "008ebba2f2d3954027b4185996e8f2c2591528413f20a738dda6950a04ca9f70"
paper_digest_api_reader_plan_sha256: "1fbabce8c6f817d28b3f8d36d6b02ca9879a8065cbca9fd8521028780b900cb5"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings-v4"
paper_digest_api_reader_source_bindings_sha256: "9dd1424ddd7328bac1a56950da0d1ae8d3573219685d28472f15bdabe4405440"
paper_digest_api_reader_source_table_count: 4
paper_digest_api_reader_source_formula_count: 4
paper_digest_api_reader_structured_artifacts_sha256: "1bc6d4a0e28abc495bf3f33d2683983595d189e1ba1ff2f3fcbe88563dc5d212"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity-v1"
paper_digest_api_reader_author_identity_sha256: "953690c1d4aaaa39cc8afb3b098cc973d784a5db1c1d8a1b8d4f2e4c80c045fe"
paper_digest_api_reader_author_count: 2
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity-v1"
paper_digest_api_reader_resource_identity_sha256: "cfe669a999b50fb8801c22028382c0b5da8137fbcc77ec0a19f8ebbe38eb7083"
paper_digest_api_reader_resource_count: 0
paper_digest_api_reader_figure_persistence: "ephemeral-no-persisted-figure-assets-v1"
paper_digest_api_reader_decision_projection: "api-reader-decision-projection-v2"
---

# 📄 无语音却有文本：用门控低秩投影在解码器表示层抑制 Whisper 幻觉

> 英文题目：*[Reducing Hallucinated Transcripts in Whisper via Hallucination Space Projection](https://arxiv.org/abs/2609.04561)*

> 标签：#语音识别 | #测试时自适应 | #鲁棒性 | #语音活动检测
>
> 评分：**6.8/10** | 创新 1.4/2 | 技术严谨 1.2/1.5 | 实验充分 1.1/1.5 | 清晰度 0.8/1 | 影响力 1/1.5 | 开源 0/1.5 | 可复现 0.3/0.5 | 工程/实践 1/1.5


## 👥 作者与机构

- Maryam Abbasihafshejani：The university of Texas at San Antonio
- Murtuza Jadliwala：The university of Texas at San Antonio

## 📌 核心摘要

Whisper 等生成式自动语音识别（Automatic Speech Recognition, ASR）模型在无语音输入下易产生流畅但虚假的转写，正确输出应为空而任何非空文本即为幻觉，难点在于同一自回归解码器同时负责文本生成与无语音概率估计。方法分三步：先在 ESC-50 非语音标定集（folds 1-3，1200 条）上按是否幻觉分组采集解码器隐状态，再对幻觉与正确拒绝样本的差值矩阵做 SVD 提取前 r 个右奇异向量构成低秩幻觉子空间，最后在推理时以门控方式将隐状态正交投影出该子空间并二次解码。干预发生在无语音概率决策之前而非阈值之后，无需参数更新。与依赖外部语音活动检测（Voice Activity Detection, VAD）或词表后过滤的基线不同，该方法在表示层直接抑制幻觉方向。关键结果上，跨 3 模型尺度×3 非语音集的平均 HR 从 31.31% 降至始终投影 2.44%（相对降低 92.21%）和门控 3.74%（相对降低 88.05%）；单看 Whisper large-v3 时 3 非语音集平均 HR 从 47.23% 降至门控 4.09% 与始终投影 0.85%，UrbanSound8K 上从 76.08% 降至 2.74%，且标定仅来自 ESC-50 显示跨声学场景复用；代价是 LibriSpeech 上门控带来 0.33 至 4.39 个百分点的 WER 上升与 0.41% 至 9.97% 的 FRR。结论仅适用于非语音幻觉场景，对长音频、模糊语音等未验证。原文未量化二次解码的时延与吞吐开销。

## 🔗 开源与复现资源

本次未形成可展示的已核验资源记录，开放状态尚未核实。

可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 输入是什么，输出什么，什么算幻觉？

Whisper 的输入是一段音频，输出是文本序列。对于有语音的片段，正确输出是与语音内容一致的转写；对于无语音的片段，正确输出是空字符串，不应产生任何文本。论文把无语音幻觉定义为在无语音音频上产生非空输出，且这种输出往往看起来流畅，例如致谢语、字幕式结尾、对话填充词或重复片段，容易被下游系统误当成有效转写。

需要区分的是，常规语音识别错误用词错率衡量预测与非空参考的差异，而无语音幻觉的参考是空，只要模型输出非空即计为幻觉。Whisper 的特殊之处在于同一个自回归解码器既负责生成文本，也负责预测一个特殊的无语音标记，其概率在官方实现中以 no_speech_prob 暴露，并用于解码时的拒识启发式：当该概率超过阈值 τ 时丢弃转写。

论文的动机是，既然声学证据不足时解码器仍可能给流畅词序列赋高概率，那么仅靠输出层的阈值过滤是不够的，需要在解码器表示层提前干预。理解这一点后，后续的投影方法就可以被看作是在标记被生成之前，削弱那些让无语音输入更可能产生文本的隐状态分量。

### 已有路线在输入、输出、模型和解码四处如何尝试？

论文把现有缓解方法按介入位置分为 4 类。输入侧的代表是 WhisperX 等基于外部语音活动检测的系统，先用独立的 VAD 模型切除非语音区域再送入 Whisper，效果依赖外部切分模型的准确性。输出侧的代表是 Bag of Hallucinations 式的后处理，维护一个常见幻觉短语表，解码后若出现表中短语则过滤，能压制已见过的重复模式，但对未见过的幻觉无能为力，也可能误删有效语音。

模型侧的代表是 Calm-Whisper 等微调方法，用无语音音频配空转写去更新与幻觉相关的解码器组件，需要额外训练并可能过拟合到微调数据。解码侧的代表是基于无语音概率、对数概率或压缩率的阈值启发式，仅在输出分数上做拒识，不触及隐状态。

论文的方法与上述路线都不同：它不依赖外部 VAD，不做短语表过滤，不更新参数，也不只调阈值，而是通过在解码器隐状态上做低秩投影来抑制幻觉方向。论文还提到语言模型和视觉语言模型中已有通过隐状态干预降低幻觉的工作，但 Whisper 的不同在于同一解码器同时控制转写生成与无语音预测，因此干预需要与 Whisper 自身的无语音估计联动，这也引出了门控设计。

### 要解决的具体问题与评价口径是什么？

任务是在不损害正常语音识别的前提下，降低 Whisper 在无语音音频上的幻觉率。评价口径分为两类。无语音侧用幻觉率 HR，定义为经无语音过滤后仍残留非空输出的比例，参考为空，任何非空都算幻觉，越低越好。语音侧用 LibriSpeech 上的词错率 WER 衡量转写质量，以及语音误拒率 FRR 衡量被错误当成无语音而过滤掉的比例，两者越低越好。

论文强调三者之间存在可控的 HR-WER-FRR 权衡：提升无语音概率有助于把无语音样本推过拒识阈值从而降低 HR，但也可能把真实语音推过同一阈值而抬高 WER 和 FRR。实验中固定 Whisper 默认的拒识阈值 τ=0.6 作为主评价点，同时在消融中考察不同 τ 下的权衡变化。

数据上，无语音用 ESC-50、UrbanSound8K 和过滤后的 FSD50K，语音用 LibriSpeech。校准与参数选择只用 ESC-50 的前三折和 LibriSpeech 验证集，测试用 ESC-50 后两折、UrbanSound8K 全集、FSD50K 过滤子集以及 LibriSpeech 的 test-clean 与 test-other，保证跨数据集泛化的可检验性。

### 训练无关的门控低秩投影在做什么？

方法分为离线估计与在线应用 2 个阶段。离线阶段只用无语音校准数据，收集解码器在某一层ℓ的隐状态，按是否产生幻觉分为两组：幻觉组与正确为空组。对两组做配对差值，堆叠成差值矩阵后做奇异值分解，取前 r 个右奇异向量构成行正交的投影基，这个基被固定下来，不再更新。

在线阶段对每个输入先做 1 次未投影的前向，得到基础无语音概率 p_ns^base。若该概率低于门控阈值 γ，则认为输入很可能是清晰语音，直接保留未投影的输出，不做任何改动；若高于或等于 γ，则在选定层ℓ上对解码过程中的隐状态做投影，移除其在幻觉子空间上的分量，强度由 α 控制，然后重新解码得到新的转写和新的无语音概率 p_ns，最后再与拒识阈值 τ 比较决定是否置空。

整个过程不更新 Whisper 参数，不引入外部 VAD 或短语表，也不改变解码流程本身，只是通过前向钩子在解码时替换隐状态。论文提供两个变体：常开投影对所有输入都施加投影，门控投影仅在疑似无语音时施加，后者是推荐的部署形态。

### 校准表示、差值矩阵与投影公式如何计算？

先看一个样本如何走完表示到干预。音频经编码器得到声学表示，解码器在层ℓ产生 d 维隐状态 h_ℓ。离线时对同一层的幻觉样本与为空样本分别得到 h^{hall}与 h^{empty}，论文把两组集合记为如下形式。

\[H_{\ell}=\{h^{\mathrm{hall}}_{i,\ell}\}_{i=1}^{N_{h}},\qquad F_{\ell}=\{h^{\mathrm{empty}}_{j,\ell}\}_{j=1}^{N_{f}},\]

其中 H_ℓ为幻觉组，F_ℓ为正确为空组，N_h 与 N_f 为各自样本数。接着为每对样本构造差值向量并堆叠成矩阵，目的是抵消两组共享的无语音声学因素，凸显与幻觉解码行为相关的方向。

\[\Delta_{\ell}=\begin{bmatrix}(h^{\mathrm{hall}}_{1,\ell}-h^{\mathrm{empty}}_{1,\ell})^{\top}\\ (h^{\mathrm{hall}}_{2,\ell}-h^{\mathrm{empty}}_{2,\ell})^{\top}\\ \vdots\\ (h^{\mathrm{hall}}_{n,\ell}-h^{\mathrm{empty}}_{n,\ell})^{\top}\end{bmatrix}\in\mathbb{R}^{n\times d},\]

其中 n 取两组数量的较小值，Δ_ℓ为 n×d 矩阵。对该矩阵做奇异值分解，取最大奇异值对应的前 r 个右奇异向量转置后得到投影基 B_{ℓ,r}，其形状为 r×d，r 控制被移除子空间的维度。

**无语音概率 × 幻觉子空间：** 无语音概率是 Whisper 解码器对特殊<|nospeech|>标记的预测概率，负责判断当前片段是否应被拒识为无语音；幻觉子空间是从会幻觉与正确为空的无语音样本的解码器隐状态差异中提炼出的低秩方向，代表容易触发文本生成的解码器成分。两者搭配时，无语音概率决定是否需要干预，幻觉子空间决定干预时要移除什么方向，组合后实现只在疑似无语音时抑制幻觉方向而不扰动清晰语音。

在线投影时，对当前隐状态 h_ℓ执行如下操作。

\[\tilde{h}_{\ell}=h_{\ell}-\alpha(h_{\ell}B_{\ell,r}^{\top})B_{\ell,r},\]

其中 α 控制投影强度，h_ℓ B_{ℓ,r}^⊤得到在子空间上的坐标，再乘回 B_{ℓ,r}得到子空间分量并从原向量中减去。若采用门控，则按基础无语音概率决定是否执行该减法。

\[h^{\prime}_{\ell}=\begin{cases}h_{\ell}-\alpha(h_{\ell}B_{\ell,r}^{\top})B_{\ell,r},&p_{\mathrm{ns}}^{\mathrm{base}}\geq\gamma,\\[6.0pt] h_{\ell},&p_{\mathrm{ns}}^{\mathrm{base}}<\gamma.\end{cases}\]

论文解释，选择在解码器隐状态上干预，是因为 Whisper 用同一解码器同时完成文本生成与无语音预测，在标记生成前干预表示层能直接影响后续的无语音概率与生成倾向。

**解码器隐状态 × 低秩投影：** 解码器隐状态是 Whisper 自回归解码器在某一层输出的 d 维向量，同时承载生成文本和估计无语音概率的信息；低秩投影是用奇异值分解得到的 r 个正交基对该向量做减法操作。两者结合的理由是幻觉行为在隐状态空间中呈现可压缩的方向性，去除这部分分量能在不改参数和不改解码流程的前提下直接降低生成文本的倾向。

秩 r 与层ℓ的选择通过离线搜索确定，强度 α 与门控 γ 在固定层秩后 2 次搜索确定，具体数值与代价在实验设置与结果中展开。

### 没有训练时，什么被计算、什么被冻结、如何选参？

本研究没有训练阶段，不更新 Whisper 的任何参数，也不训练新的分类器。唯一需要计算的是投影基 B_{ℓ,r}，其计算是确定性的线性代数操作：收集校准集隐状态、构造差值矩阵、做奇异值分解并取前 r 个右奇异向量。基一旦估计完成即被冻结，在所有测试集上保持不变。

参数选择分为两轮离线搜索，均在开发集上完成。第一轮固定 α=1 且不使用门控，遍历解码器层ℓ与秩 r，观察 ESC-50 前三折的 HR 与 LibriSpeech 验证集的 WER，目标是找到既能大幅降低 HR 又不让 WER 明显抬高的层与秩。第二轮固定已选的层与秩，再遍历投影强度 α 与门控阈值 γ，同样在开发集上看 HR 与 WER 的权衡。

**校准集 × 奇异值分解：** 校准集是来自 ESC-50 前三折的无语音样本，按是否产生幻觉分为幻觉组与正确为空组，提供成对隐状态；奇异值分解对两组隐状态差值矩阵做分解，提取区分两组的最大方差方向。两者搭配的理由是两组同为无语音，差值能削弱共享的声学背景而凸显与幻觉解码行为相关的方向，分解后取前 r 个右奇异向量构成投影基。

下面先看第一轮搜索的整体规律，再看第二轮门控扫描的细节。第一轮搜索需要同时阅读 HR 与 WER 两块面板，才能判断哪一层哪一秩是真正的折中点。

> **看图路径：** 1. 对比左右两面板同一层同一秩下 HR 与 WER 的同步变化，确认中后层才出现 HR 大幅下降；2. 观察第 28 层附近在两面板中均为低值的格子，理解为何被选为最终折中；3. 注意粉色底色标记 WER 超过基线 0.5 个百分点的格子，识别哪些层秩组合代价过大

[![原论文 Figure 1：Offline selection of \\ell and r for Whisper large-v3.](https://arxiv.org/html/2609.04561v1/offline_layer_rank_selection.svg)](https://arxiv.org/html/2609.04561v1/offline_layer_rank_selection.svg)

*论文图 1。原论文 Figure 1:：“Offline selection of \ell and r for Whisper large-v3. Cells report ESC-50 HR% and LibriSpeech validation WER%; lower is better.”。*

图 1 展示 large-v3 在第一轮搜索中的表现。左侧 HR 面板显示早期层干预几乎无效，中后层才出现显著下降；右侧 WER 面板显示过大秩或不当层会把 WER 推高，粉色格标记超过基线 0.5 个百分点的情况。论文据此为 large-v3 选择ℓ=28、r=4 的紧凑设置，该设置在开发集上取得 HR 与 WER 的最佳折中，后续所有实验均固定该层与秩。

第二轮扫描在固定层与秩后进行，重点考察投影强度 α 与门控阈值 γ 配合对 HR 与 WER 的权衡影响。

> **看图路径：** 1. 沿 γ=0.05 列自上而下看 HR 与 WER 的权衡变化；2. 对比同一 α 下不同 γ 的 WER，确认门控放宽会保留更多语音但削弱抑制；3. 定位高亮格 α=1.0 γ=0.05，核对它在 HR 与 WER 上的具体数值

[![原论文 Figure 2：Offline selection of \\alpha and \\gamma with \\ell=28 and r=4.](https://arxiv.org/html/2609.04561v1/offline_alpha_gate_sweep.svg)](https://arxiv.org/html/2609.04561v1/offline_alpha_gate_sweep.svg)

*论文图 2。原论文 Figure 2:：“Offline selection of \alpha and \gamma with \ell=28 and r=4. Cells show ESC-50 (folds1–3) HR% and LibriSpeech validation subset WER%.”。*

图 2 展示在固定ℓ=28、r=4 后对 α 与 γ 的扫描。横轴为门控阈值，纵轴为投影强度，格内上下两数分别为 HR 与 WER。可见增大 α 能更强地压制幻觉，但过强的常开投影会抬高 WER；提高 γ 则让更少样本触发投影，有助于保留语音但削弱对无语音的抑制。论文最终为 large-v3 选择 α=1.0、γ=0.05，该配置在开发集上把 HR 从 41.92% 降至 8.2%，而门控下的 WER 为 5.32%，显著优于常开投影的 11.59%。small 与 medium 的对应选择分别为ℓ=10、r=1、α=1.0、γ=0.15 与ℓ=24、r=2、α=0.75、γ=0.10。

**门控阈值 × 拒识阈值：** 门控阈值 γ 判定是否对当前输入施加投影，依据是未投影的 1 次前向得到的无语音概率；拒识阈值 τ 判定最终是否把输出置空，依据是投影后或未投影的无语音概率。两者分工不同：γ 控制表示层干预的开关，τ 控制输出层过滤的开关，组合后形成先在表示层抑制幻觉方向再在决策层做拒识的 2 级控制。

门控阈值与拒识阈值的分工在此得到体现：γ 决定是否在表示层做减法，τ 决定是否在输出层置空，两者共同构成可调的操作点。

### 数据、划分、基线与指标如何保证可比？

实验使用官方 OpenAI Whisper 实现，模型为 small、medium、large-v3 三档，硬件为 NVIDIA DGX A100。无语音数据包括 ESC-50 的 2000 段环境音频、UrbanSound8K 的 8732 段城市音频，以及从 FSD50K 中移除标注为 speech、vocal 或 music 后的 8621 段非语音子集。划分上，ESC-50 的第 1 至 3 折共 1200 段用于子空间构造与参数选择，第 4 至 5 折共 800 段作为 held-out 测试；UrbanSound8K 与过滤后 FSD50K 全部用于测试，以检验从 ESC-50 学到的子空间是否跨数据集复用。

语音数据用 LibriSpeech，验证集 validation-clean 共 2703 段用于参数选择时控制语音退化，测试集 test-clean 2620 段与 test-other 2939 段用于最终报告 WER 与 FRR。指标上，无语音侧报告 HR，定义为经 τ=0.6 过滤后仍非空的比例；语音侧报告 WER 与在 τ=0.6 下的 FRR。所有主结果均在 τ=0.6 下比较，消融中再考察不同 τ 的影响。

基线包括原始 Whisper、常开投影、门控投影、外部 VAD 的 WhisperX、基于短语表的 BoH 后处理，以及仅调阈值的阈值基线。BoH 的短语表从 ESC-50 开发集的 Whisper 输出中提取常见幻觉短语，论文复现时列出如 thank you、the end 等条目；WhisperX 使用独立 VAD 在转写前切除非语音段。实现上投影通过在选定解码器层挂前向钩子完成，门控变体先做 1 次未投影前向得到 p_ns^base，再决定是否挂钩重解码。

### 主结果在非语音与语音上分别付出什么代价？

主结果围绕 HR 的下降幅度与 WER、FRR 的抬高幅度展开，且所有数字均在相同阈值与相同模型下对比。先看非语音侧的幻觉率变化，关注从原始 Whisper 到门控与常开投影的绝对下降。

| 数据集 | 指标 | 原始 Whisper | 门控投影 | 常开投影 |
| --- | --- | --- | --- | --- |
| ESC-50 held-out | HR | 44.25% | 8.38% | 1.50% |
| UrbanSound8K | HR | 76.08% | 2.74% | 0.87% |
| FSD50K 过滤子集 | HR | 21.35% | 1.15% | 0.18% |

上表显示，门控与常开投影在 3 套无语音数据上均把 HR 从数十百分比降至个位数，且该子空间是在 ESC-50 前三折上估计后固定不变地迁移到 UrbanSound8K 与 FSD50K，支持论文关于捕获可复用解码器级幻觉签名的判断。常开投影在数值上更低，但代价在语音侧显现。

**幻觉率 × 误拒率：** 幻觉率 HR 衡量无语音数据上经无语音过滤后仍产生非空文本的比例，越低越好；误拒率 FRR 衡量有语音数据上被错误当作无语音而过滤掉的比例，越低越好。两者构成论文反复强调的权衡：增强对无语音的抑制会提升无语音概率，有助于降低 HR，但也可能把真实语音推过拒识阈值而抬高 FRR，门控机制就是为在该权衡中取得可控操作点。

再看语音侧的代价，同一批模型与阈值下对比 WER 与 FRR。

| 测试集 | 指标 | 原始 Whisper | 门控投影 | 常开投影 |
| --- | --- | --- | --- | --- |
| LibriSpeech test-clean | WER | 4.06% | 6.17% | 12.95% |
| LibriSpeech test-other | WER | 5.87% | 6.57% | 13.13% |
| LibriSpeech test-other | FRR | 0.00% | 1.40% | 11.47% |

两表合读可得，门控投影是论文推荐的部署形态：它保留了对无语音的大幅抑制，同时把常开投影带来的语音退化大幅削减。论文还指出，误拒不必等同于永久丢失，不确定片段可被保留并标记为待重转写、校验或人工复核，从而降低误拒的实际成本。

分布层面的证据进一步解释上述权衡，图 3 通过对比非语音与真实语音的无语音概率分布来验证门控投影的选择性与阈值越过行为。

> **看图路径：** 1. 对比左图非语音在 0.6 阈值左右的分布迁移，确认投影后大量样本被推过阈值；2. 观察右图真实语音分布仍集中在 0 附近，确认对清晰语音影响有限；3. 核对两图顶部标注的拒识比例变化 21.8%→96.3% 与 0.0%→2.9%

[![原论文 Figure 3：No-speech probability before and after gated projection on ESC-50 and LibriSpeech test-clean;…](https://arxiv.org/html/2609.04561v1/nospeech_before_after_percent.svg)](https://arxiv.org/html/2609.04561v1/nospeech_before_after_percent.svg)

*论文图 3。原论文 Figure 3:：“No-speech probability before and after gated projection on ESC-50 and LibriSpeech test-clean; dashed line marks \tau=0.6.”。*

图 3 从分布层面解释上述权衡。左图非语音的无语音概率在投影后整体右移，大量样本越过 0.6 阈值，拒识比例从 21.8% 升至 96.3%；右图真实语音的分布仍集中在 0 附近，仅从 0.0% 微升至 2.9%，说明干预对清晰语音影响有限，与表格中 FRR 的数值一致。

基线对比把投影方法放在更广的训练无关方法中定位，以检验在不依赖外部 VAD 时门控投影相对于 BoH 与 WhisperX 的平均 HR 与语音代价。

> **看图路径：** 1. 按数据集分组对比五种方法的柱高，确认 BoH 仅轻微下降而投影方法大幅下降；2. 观察 Average 组中门控与常开的相对位置，理解两者在平均 HR 上的差距；3. 核对 UrbanSound8K 上原始 Whisper 高达 76.08% 的柱高与投影后的个位数

[![原论文 Figure 4：Baseline comparison on non-speech datasets. Bars show hallucination rate (HR, %); lower is better.](https://arxiv.org/html/2609.04561v1/baseline_comparison_bar_chart_with_average_readable_fixed.svg)](https://arxiv.org/html/2609.04561v1/baseline_comparison_bar_chart_with_average_readable_fixed.svg)

*论文图 4。原论文 Figure 4:：“Baseline comparison on non-speech datasets. Bars show hallucination rate (HR, %); lower is better.”。*

图 4 把投影方法与训练无关基线放在同一坐标下比较。BoH 在 3 套数据上仅把 HR 从 44.25%、76.08%、21.35% 降至 38.75%、75.41%、18.11%，平均 HR 仍高达 44.09%，抑制有限；WhisperX VAD 平均降至 5.24%，是较强的基线；门控投影平均 4.09%，常开投影平均 0.85%，在无需外部 VAD 的前提下取得更低的平均 HR。语音侧 WhisperX 的 WER 为 2.67% 与 4.74% 且 FRR 为 0%，门控投影为 6.17% 与 6.57% 且 FRR 为 2.86% 与 1.40%，说明门控在更低 HR 与略高 WER 之间做出权衡。

| 方法 | ESC-50 HR | UrbanSound8K HR | FSD50K HR | 是否需外部模型 |
| --- | --- | --- | --- | --- |
| 原始 Whisper | 44.25% | 76.08% | 21.35% | 否 |
| BoH 短语过滤 | 38.75% | 75.41% | 18.11% | 否 |
| 门控投影 | 8.38% | 2.74% | 1.15% | 否 |
| 常开投影 | 1.50% | 0.87% | 0.18% | 否 |

该表说明，门控投影在不引入外部检测器的前提下达到与 WhisperX 相当甚至更低的平均 HR，而 BoH 仅能过滤已见短语，对未见幻觉无能为力。

### 哪些因素决定效果，哪些操作会让代价失控？

消融围绕层与秩、强度与门控、阈值与多层展开，且均在开发集或受控设置下报告 HR、WER、FRR 的同步变化。先看开发集上门控与常开的直接对比，再看阈值与多层的极端操作。

| 配置 | 指标 | 数值 | 对比说明 |
| --- | --- | --- | --- |
| large-v3 开发集 门控 α=1.0 γ=0.05 | HR | 41.92% → 8.2% | 同配置常开 WER 11.59% FRR 9.69% |
| large-v3 开发集 门控同上 | WER | 5.32% | FRR 1.85%，显著优于常开 |
| 全模型平均 门控 | 平均 HR | 31.31% → 3.74% | 相对下降 88.05% |
| 全模型平均 常开 | 平均 HR | 31.31% → 2.44% | 相对下降 92.21% |
| 全模型门控代价区间 | WER 抬高 | 0.33–4.39 个百分点 | FRR 0.41–9.97% |

上表说明，门控在开发集上已把 HR 从 41.92% 压至 8.2%，而把 WER 从常开的 11.59% 降至 5.32%，FRR 从 9.69% 降至 1.85%，体现门控对语音的保护作用。全模型平均上，门控与常开分别实现 88.05% 与 92.21% 的相对 HR 下降，但门控的 WER 与 FRR 代价区间更可控。

进一步的消融显示，层深度是首要因素，早期层干预对 HR 几乎无效，中后层才有效，且秩的增大呈现饱和而非单调改进，过大秩反而会抬高 WER，支持使用 r=1 至 4 的紧凑子空间。强度与门控共同决定操作点，增大 α 能进一步压低 HR 但会抬高 WER，提高 γ 能保留语音但削弱抑制。

阈值与多层的消融则展示极端操作的代价。把 τ 从 0.6 降至 0.4 可进一步压低平均 HR，但平均 WER 与 FRR 会同步抬高；叠加第二层投影可把 HR 压至接近零，但 WER 与 FRR 均翻倍以上，因此论文保留单层门控与默认 τ=0.6 作为主设置。仅调阈值不投影时，平均 HR 改善有限，说明仅调阈值不足以大幅降幻觉，而投影是在表示层改变无语音概率的来源，两者正交且可组合。

### 方法的边界与未验证的推测是什么？

论文明确限定研究范围为无语音幻觉，即输入不含语音而模型仍产生文本的失效模式，未覆盖长时转写、多语种或声学模糊等其他幻觉场景，相关扩展仍待未来工作验证。其次，方法引入 HR-WER-FRR 的固有权衡，门控已大幅缓解常开投影对语音的损伤，但在某些操作点上 WER 仍会抬高 0.33 至 4.39 个百分点，FRR 抬高 0.41 至 9.97%，在对漏识成本敏感的应用中需选择更保守的设置，并配合对不确定片段的保留与复核流程。

再者，子空间从无语音校准数据估计，虽然在 ESC-50 到 UrbanSound8K 与 FSD50K 上显示出跨数据集迁移能力，但更广的校准到部署偏移尚未评估。门控还部分依赖 Whisper 自身无语音概率的可靠性，若该概率本身不准，门控的开关判断也会受影响。

最后，论文未报告训练资源消耗之外的推理开销细节，也未测量延迟或吞吐，投影通过前向钩子在解码时对隐状态做 1 次低秩减法，其计算量与 r 和层数相关，但原文未给出具体耗时，因此不能据此承诺延迟改善。区分已验证与待验证时，HR 的大幅下降与跨数据集泛化是已报告的直接证据，而关于更广声学域或更长音频上同样有效的推测属于待验证。

### 复现需要哪些数据、参数与步骤？

复现时先准备数据与模型。无语音用 ESC-50、UrbanSound8K 与 FSD50K，其中 FSD50K 需按标签过滤掉 speech、vocal、music 相关片段，ESC-50 按折划分取 1 至 3 折做校准与选参，4 至 5 折做测试；语音用 LibriSpeech，取 validation-clean 做选参，test-clean 与 test-other 做最终评估。模型用官方 OpenAI Whisper 的 small、medium、large-v3 预训练权重，不做任何参数更新。

离线阶段在选定解码器层上收集两组隐状态：幻觉组为在校准集上产生非空输出的无语音样本，正确为空组为被正确拒识的无语音样本，配对相减后堆叠成差值矩阵，做奇异值分解取前 r 个右奇异向量得到基 B_{ℓ,r}。在线阶段按算法实现门控：先做 1 次未投影前向得到 p_ns^base，若低于 γ 则直接返回原输出，否则在选定层挂钩执行 h_ℓ - α(h_ℓ B^⊤)B 的投影并重解码，再与 τ=0.6 比较决定是否置空。

关键超参数按模型分别固定：large-v3 为ℓ=28、r=4、α=1.0、γ=0.05；small 为ℓ=10、r=1、α=1.0、γ=0.15；medium 为ℓ=24、r=2、α=0.75、γ=0.10。评价时同时报告 HR、WER、FRR，并与原始 Whisper、常开投影、WhisperX VAD、BoH 短语过滤以及仅调阈值的基线在同一阈值下对比。

常见误解是把阈值调低等同于投影，消融显示仅调阈值对 HR 改善有限，而投影是在表示层改变无语音概率的来源，两者正交且可组合。若需复现基线，BoH 的短语表需从开发集输出中提取并做归一化精确匹配，WhisperX 需引入外部 VAD 与切分阶段。

### 何时值得尝试，首步做什么，还需补哪项验证？

当系统需要把 Whisper 作为基础转写模块部署，且下游对无中生有的文本高度敏感时，该方法值得优先尝试，因为它在不改参数、不引入外部模型的前提下提供了可控的幻觉抑制，且门控版本在保留语音质量上明显优于常开版本。

首步应复现校准流程：在 ESC-50 前三折上按是否幻觉分组收集解码器隐状态，构造差值矩阵并做奇异值分解，得到紧凑的 r=1 至 4 的基，然后在验证集上扫描层与秩，再扫描 α 与 γ，选出 HR 显著下降而 WER 仅小幅抬高的操作点，并固定该基用于所有测试集。部署时建议采用门控投影并保留默认拒识阈值 τ=0.6，对被门控触发但接近阈值的片段保留原文与无语音概率，标记为待重转写或人工复核，以降低误拒的实际损失。

还需补充的验证包括在更广的声学域、更长音频以及多语种数据上评估子空间的稳定性，测量投影引入的实际推理延迟与显存开销，并在业务数据上标定 HR、WER、FRR 的可接受权衡点，避免把开发集上的最优操作点直接当作生产环境的最优。

<details>
<summary>📎 论文与评分元数据</summary>

排名：前50% | 文档类型：方法研究 | [arXiv 原文](https://arxiv.org/abs/2609.04561)

</details>

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。

- 评分规则：type-aware-v1

- 评分模型：muse-spark-1.2-contributor

- 评分请求协议：openai_responses

---

[← 返回 2026-09-08 语音/音乐/音频论文速递](/audio-paper-digest-blog/posts/2026-09-08/)
