---
title: "Hearing the Order: Investigating Position Bias in Large Audio-Language Models"
date: 2026-09-27
draft: false
description: "该研究把正确答案固定到 A、B、C、D 四个位置重测六个大音频语言模型，发现打乱顺序可带来最高近 24% 的准确率波动并改变模型排名，而全排列多数投票能在增加测试计算量的代价下缓解偏置。"
tags: ["评测协议", "音频大模型", "鲁棒性", "音频问答"]
categories: ["interspeech-2026 论文"]
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_paper_id: "conference:interspeech:2026:conference-paper-id:lin26c_interspeech"
paper_digest_source_kind: conference
paper_digest_conference_id: "interspeech-2026"
paper_digest_conference_record_url: "https://www.isca-archive.org/interspeech_2026/lin26c_interspeech.html"
paper_digest_conference_pdf_url: "https://www.isca-archive.org/interspeech_2026/lin26c_interspeech.pdf"
paper_digest_api_reader_contract: "beginner-researcher-v3"
paper_digest_api_reader_article_sha256: "22fa1f5bf10f6e438271c4e64787fb786f99233b806ad7e5cba0ac761d3642a6"
paper_digest_api_reader_plan_sha256: "1b8956dc42c8d25340c01479baaab854a1762195b3702e5035fa64b483476da3"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings-v4"
paper_digest_api_reader_source_bindings_sha256: "caca66cb0d2eb59433b6d8184d6da7cb7b58879263f25a0eb3c6240ac309f7c7"
paper_digest_api_reader_source_table_count: 2
paper_digest_api_reader_source_formula_count: 0
paper_digest_api_reader_structured_artifacts_sha256: "9f7cd43f21a56a1141f501661d2448076e8ba220698a5883bebe83cd131da0af"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity-v1"
paper_digest_api_reader_author_identity_sha256: "5e54a435c996110f6621fc3d24c5d82b4eabe3f0dabef990983e6fd45bb1b0a0"
paper_digest_api_reader_author_count: 6
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity-v1"
paper_digest_api_reader_resource_identity_sha256: "9efc04061223f9e4eb4d03de6c98a49ed601b479a39c02401802d5e9e4538c09"
paper_digest_api_reader_resource_count: 0
paper_digest_api_reader_decision_projection: "api-reader-decision-projection-v2"
paper_digest_scoring_contract: "api-scoring-audit-v2"
paper_digest_taxonomy_contract: "paper-taxonomy-flat-tags-compat-v1"
paper_digest_taxonomy_selection_contract: "paper-taxonomy-selection-v1"
paper_digest_taxonomy_registry_version: "paper-taxonomy-v1"
paper_digest_taxonomy_registry_sha256: "15c82a567ce5a55dc1175684ed08b64c158558639d9c8fb822c9587ec32a8778"
paper_digest_taxonomy_concepts: [{"facet":"method","id":"method.evaluation-protocol","label":"评测协议"},{"facet":"model_family","id":"model_family.audio-language","label":"音频大模型"},{"facet":"research_focus","id":"research_focus.robustness","label":"鲁棒性"},{"facet":"task","id":"task.audio-question-answering","label":"音频问答"}]
paper_digest_primary_task: "音频问答"
paper_digest_primary_method: "评测协议"
paper_digest_score: 6.2
paper_digest_rank_bucket: "前50%"
paper_digest_document_type: "方法研究"
paper_digest_conference_structure: pdf-visual-quote-evidence-v1
---

# 📄 选项顺序会改变答案：大音频语言模型的位置偏置从何而来

> 英文题目：*Hearing the Order: Investigating Position Bias in Large Audio-Language Models*

> 会议身份：`conference:interspeech:2026:conference-paper-id:lin26c_interspeech`



> 来源为官方会议 PDF；图片依据原页像素，表格数字依据原文引用。PDF 文字层不视为原始 TeX，未可靠恢复的结构不作推断。


> 会议来源：[官方记录](https://www.isca-archive.org/interspeech_2026/lin26c_interspeech.html) · [官方 PDF](https://www.isca-archive.org/interspeech_2026/lin26c_interspeech.pdf)

标签：#评测协议 #音频大模型 #鲁棒性 #音频问答

评分：**6.2/10** | 创新 1.2/2 | 技术严谨 1.0/1.5 | 实验充分 1.2/1.5 | 清晰度 0.7/1 | 影响力 1.0/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 0.8/1.5

排名：前50% | 文档类型：方法研究

## 👥 作者与机构

- Yu-Xiang Lin：机构信息未能从会议 PDF 纯文本可靠映射
- Chen-An Li：机构信息未能从会议 PDF 纯文本可靠映射
- Sheng-Lun Wei：机构信息未能从会议 PDF 纯文本可靠映射
- Po-Chun Chen：机构信息未能从会议 PDF 纯文本可靠映射
- Hsin-Hsi Chen：机构信息未能从会议 PDF 纯文本可靠映射
- Hung-yi Lee：机构信息未能从会议 PDF 纯文本可靠映射

## 📌 核心摘要

本文研究大型音频语言模型在四选一多选题中的位置偏置，输入为音频或文本形式的问题加四个候选选项、输出为选项标识，难点在于模型可能依赖答案位置而非语义内容决策从而导致评测失真。方法链第一步将MMAU test-mini、MMAR与MMLU过滤为恰好四选项且时长不超过180秒的子集以保证可比性与可处理性，其输出的文本题库直接进入第二步。第二步用GPT-4o mini TTS将文本问题与选项合成为SPEECH-MMAU、SPEECH-MMAR与SPEECH-MMLU，形成文本与语音配对的六个评测集以分离模态效应。第三步把正确答案系统重排到A、B、C、D各位置并随机打乱干扰项以测量位置敏感性，再对循环置换与全置换的多种顺序分别推理并多数投票以获得稳健评估。与已有文本与视觉位置偏置研究的关键差异在于本文首次在音频模态下分离标识符效应、基座文本模型继承效应与语音引入的模态效应，具有评测框架意义。在MMAU基准下，Phi-4-multimodal全置换多数投票的准确率为69.24，高于原始顺序的准确率65.27。结论的适用边界受限于四选项英文多选题与短于180秒的合成语音样本，开放式问答、更多选项数、真实录音与其他语言的泛化尚未验证。原文未披露训练、推理或部署成本。

## 🔗 开源与复现资源

本次未形成可展示的已核验资源记录，开放状态尚未核实。
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 输入是什么？为什么顺序可能干扰音频问答？

本文的研究对象是刚进入语音、音乐与音频方向的研究生需要先建立的基本判断：大音频语言模型在多项选择题评测中是否真的只看内容作答。论文讨论的输入包括音频问题、文本问题以及对应的 4 个候选选项，输出是模型选出的选项标识。目标是检验当正确答案从 A 移到 B、移到 C、移到 D 时，模型准确率是否保持稳定。必须保留的关键信息是，作者把 6 个模型放在 3 个基准及其语音版本上重测，并用打乱顺序后的波动幅度作为位置偏置的证据，本文的输出就是把这套做法讲成可核对、可复述的流程。

初学者容易以为，把声音丢给模型、模型听懂内容就会选对，这就忽略了评测格式本身带来的结构因素。多项选择题评测把开放生成变成分类选择，优点是判分客观、可比，缺点是选项顺序和标识符可能成为模型可利用的捷径。文本大语言模型和视觉语言模型已有系统性偏好某些位置的报告，音频模型是否同样如此，是本文要回答的空白。

**位置偏置 × 多项选择题评测：** 位置偏置分工是描述模型选择受正确答案所处位置影响的程度，多项选择题评测分工是提供固定选项和标准答案以便精确比对，二者搭配的理由是选项位置本应与语义无关，一旦位置影响选择，评测分数就混入了结构噪声，组合意义在于把准确率波动当作评测可靠性的直接检验对象。

理解这个组合后，后续的阅读顺序就清楚了：先看相关路线如何从文本偏置扩展到多模态，再看作者如何构造可比的打乱实验，然后看缓解策略的计算过程与代价，最后回到排名是否可信的结论。

### 相关路线比较了什么？音频评测继承了哪些做法？

论文把相关工作分成两条线。第一条是多项选择题基准。文本侧的代表是 ARC-Challenge 和 MMLU，做法是把知识与推理题变成四选一，用准确率比较模型。音频侧的代表包括 Dynamic-SUPERB、AIR-Bench、MMAU、MMAR、SAKURA、SpeechR 和 MMAU-Pro，目标从 diverse 音频理解扩展到专家级多步推理、多跳推理和真实场景。它们的共同点是都采用多项选择题形式，因此都可能继承位置偏置的风险。

第二条是位置偏置研究。文本侧早期关注长上下文中段落位置对输出的影响，以及上下文示例顺序对上下文学习的敏感性，后来扩展到选项顺序和标识符分配对多项选择准确率的影响，并提出循环排列和全排列平均预测的做法。视觉与视频语言模型也有位置效应影响预测的初步证据，但作者指出音频语言模型缺少系统研究。

**大音频语言模型 × 文本大语言模型：** 大音频语言模型分工是接受音频输入并结合语言能力作答，文本大语言模型分工是只处理文本上下文并输出答案，搭配比较的理由是前者多由后者经音频指令微调而来，组合意义在于判断位置偏置是直接继承自基座还是在音频微调后发生分化。

这种对照的教学价值在于，同输入都是多项选择题，同目标都是可靠比较模型，同运行阶段都是测试时评测，区别只在输入模态和监督来源。不能因为文本模型有偏置就直接断定音频模型一定相同，也不能因为某音频模型分数高就认为它更少受顺序影响，这些都需要同一打乱协议下的直接比较。

### 要回答的具体问题是什么？什么算偏置？

论文要回答的问题可以写成操作定义：如果把正确答案固定在 A 位置测 1 次，固定在 B 位置测 1 次，固定在 C 和 D 位置各测 1 次，其他选项随机打乱，而模型准确率发生系统性起伏，就判定存在位置偏置。偏置的方向指模型偏好哪个位置，例如偏好 A 而回避 D；偏置的幅度指最高与最低之间的差值大小。

作者强调这不是个别模型的偶然现象。摘要报告，打乱选项顺序可带来最高达 24% 的波动，甚至改变模型排名。引言进一步把担忧写明确：常用评测可能引入不必要的偏置，常规分数不能完全反映真实能力。举例来说，若原始数据集中正确答案天然偏向 A，那么偏好 A 的模型会显得更强，但这种强与推理能力无关。

因此，复述方法时必须区分两个量：原始准确率回答在现有顺序下得多少分，重排后的准确率差值回答分数对顺序有多敏感。前者是能力估计，后者是可靠性检验，二者缺一不可。

### 整体方法如何走完一个样本？

沿一个样本走完全流程有助于建立全局观。输入是一个问题及其 4 个选项，可能是文本形式，也可能是由文本经语音合成转成的语音形式。表示阶段把音频或文本送入大音频语言模型，模型读到选项内容和标识符。组件阶段是决策：模型输出一个选项，判分时与正确答案比对得到是否答对。目标阶段不是只算 1 次总准确率，而是构造 4 个可比条件：正确答案被系统重排到 A、B、C、D，每个条件下其余选项随机打乱，然后分别计算准确率。输出是 4 个条件下的准确率及其差值、离散度与分布偏离。

**循环排列 × 全排列：** 循环排列分工是用少量轮换顺序覆盖每个选项位置，全排列分工是枚举全部可能的选项顺序，二者搭配的理由都是把每次打乱后的输入当作独立输入再多数投票，组合意义在于用额外测试计算换取对位置因素的平均，从而得到更少依赖偶然顺序的估计。

这套安排的理由在原文写得很直接：只有让正确答案完整覆盖每个位置，才能在可比条件下观察位置效应。随机打乱其余选项的作用是避免某一干扰项长期跟随正确答案。循环排列与全排列缓解策略则把每次打乱当作独立输入，最后多数投票决定答案，思路接近自洽性，只是随机性来自顺序打乱而非采样。

### 度量组件各自算什么？如何读懂方向？

论文的评测组件包括 4 类度量。第一是准确率，定义为答对样本占总样本的比例，越高越好。第二是准确率差值，定义为原始数据集与重排后设置之间的准确率之差，用来量化对位置打乱的稳健性，绝对值越小越稳。第三是相对标准差，用来刻画固定在不同正确位置时准确率的离散程度，越小表示越不受位置影响。第四是选项 KL 散度，用来比较模型预测的选项分布与真实标签分布的偏离，越小表示选择倾向越接近真实分布。

**相对标准差 × 选项 KL 散度：** 相对标准差分工是刻画固定在不同正确位置时准确率的离散程度，选项 KL 散度分工是比较模型预测选项分布与真实标签分布的偏离，搭配理由是一个看分数波动、一个看选择倾向，组合意义在于同时回答偏好有多大和偏向了哪里。

初学者常犯的错误是只看准确率高低。论文提醒，当标签分布不均衡时，相对标准差可能不能很好地刻画偏置，例如 MMAU 和语音版 MMAU，因此需要同时报告另一个分布指标。举例来说，某模型在 A 位置准确率高、在 D 位置准确率低，准确率差值图会呈现一正一负的柱形，相对标准差会变大，选项 KL 散度也会显示预测过度集中在 A。两个指标互相印证，才能说清偏好有多大、偏向了哪里。

### 本研究训练了什么？没有训练时实际计算是什么？

本研究没有训练任何新的大音频语言模型，也没有更新模型参数、没有报告梯度路径与优化步骤，这是必须先说清的缺项。论文的真实计算是调用已有模型做推理评测，包括 6 个能处理长音频的模型：Gemini-2.0-Flash、Phi-4-Multimodal、Qwen2.5-Omni-3B、Qwen2.5-Omni-7B、Voxtral-Mini-3B 和 Voxtral-Small-24B，覆盖不同架构与尺寸，以便做架构多样性与规模的消融观察。

实际的数据构造计算是语音版本生成。作者用 GPT-4o mini TTS 把 MMAU、MMAR 和 MMLU 的文本问题与选项转成 speech，得到 SPEECH-MMAU、SPEECH-MMAR 和 SPEECH-MMLU。由于语音转换显著增加序列长度，作者过滤掉超过 180 秒的极长样本，并且只保留恰好 4 个选项的样本以保证可比。推理调用遵循 OpenAI simple-eval 提示协议，温度固定为 0 以保证可复现，最大输出长度设为 1024 个 token。

因此，复现时不要寻找训练脚本，而应准备推理评测管线：数据过滤、固定温度解码、选项重排、多次推理与投票。未报告的内容包括微调细节、解码之外的超参数搜索和训练资源消耗，这些不能从模型名称推定。

### 实验条件如何保证可比？数据与协议是什么？

实验按问题组织。第一个问题是位置偏置是否存在且有多大。比较对象是同一模型在正确答案固定于 A、B、C、D 时的准确率，条件一致性靠同一数据集、同一提示协议、同一解码设置来保证。指标方向是准确率越高越好，差值与离散度越小越稳。第二个问题是标识符还是顺序起更大作用。

做法是有标识符与无标识符对比，观察准确率与偏置是否同步改善。第 3 个问题是偏置来自继承还是微调后变化。做法是音频模型与其文本基座在 MMLU 及重排变体上对比。第 4 个问题是排列投票能否缓解。做法是原始评估、循环排列、全排列三者比较。

数据方面，MMAU 采用答案公开的 test-mini 子集，MMLU 为大规模多任务文本基准，MMAR 为更难的推理基准，三者各有语音版本。过滤后各数据集在 A 到 D 的原始标签分布并不都均衡，MMAU 原始偏向 A 的比例较高，这一点在解读离散度时需要记住。模型方面同时包含闭源与开源、3B 到 24B 不同规模。

下表把波动幅度的核心证据整理成可核对的形式。表前的问题是：不同模型受顺序影响的量级是否属于同一水平？公平条件是同一重排协议，指标方向是波动越小越稳。表格有五列，便于同时看到模型分组、条件与量级，阅读时重点比较 Phi-4 的大波动与 Qwen 和 Gemini 的较小波动。

| 模型分组 | 数据条件 | 偏置指标 | 波动幅度 | 证据指向 |
| --- | --- | --- | --- | --- |
| Phi-4-Multimodal | 6 个文本与语音数据集 | 固定正确位置后的准确率差值 | nearly 24% | 最大波动，任意放置正确答案可大幅左右输出 |
| Gemini-2.0-Flash | 同上 6 个数据集 | 同上准确率变化 | approximately 5% | 相对较小但仍存在系统起伏 |
| Qwen2.5-Omni-3B | 同上 6 个数据集 | 同上准确率变化 | approximately 5% | 与 7B 模式相近，偏好 A 而回避 D |
| Qwen2.5-Omni-7B | 同上 6 个数据集 | 同上准确率变化 | approximately 5% | 与 3B 模式相近，波动幅度同量级 |
| 全体 6 个模型 | 原始顺序打乱为重排设置 | 总体性能波动上界 | up to 24% | 打乱顺序可改变模型排名 |

表后需要同时说清收益与限制。该表支持的判断是偏置普遍存在但幅度分化：Phi-4 的波动量级明显大于另外 3 个模型，说明不能用单一模型的稳健性代表全家。限制是这只是差值幅度汇总，没有给出每个数据集逐项的离散度与分布偏离，也未包含 Voxtral 两个尺寸的具体数值，因此不能据此排出完整的稳健性名次。未胜出项在这里反而是重要信息：即使波动较小的 Gemini 和 Qwen，原文也明确说没有模型能免于这种效应，稳健性总体仍不令人满意。

### 主结果显示了什么？各模型的偏好方向有何不同？

主结果的测试动作是把正确答案系统重排到固定位置，观察准确率差值。论文报告，每个被测模型都出现系统性波动，没有模型豁免。幅度上，Gemini-2.0-Flash、Qwen2.5-Omni-3B 和 Qwen2.5-Omni-7B 的变化约 5%，Voxtral-Mini-3B、Voxtral-Small-24B 和 Phi-4-Multimodal 的偏置更明显，Phi-4-Multimodal 最大波动接近 24%。方向上，各模型并不一致：Phi-4 常偏好 A 而强烈回避 D，Voxtral-Mini-3B 在文本数据回避 D 但在语音数据偏好 D，Voxtral-Small-24B 在文本与语音中持续不偏好 A，Qwen 两个尺寸都回避 D 且相对偏好 A，Gemini 则相反，总体偏好 D。

下面的导读帮助阅读第一张像素图。该图包含 6 张子图，每张对应一个模型，覆盖 MMAR、MMAU、MMLU 及其语音版本，纵轴为准确率差值，颜色区分固定到 A、B、C、D。阅读时不要只看单根柱子，而要看同一模型在 6 个数据集上同一颜色是否持续为正或为负，那才是系统性偏好。

> **看图路径：** 1. 先确认每张子图对应一个模型，横轴是六个数据集，纵轴是准确率差值；2. 再按颜色区分固定到 A、B、C、D 时的正负偏离方向；3. 比较上下两排纵轴量程，判断哪个模型波动量级最大；4. 观察同一颜色在文本与语音版本是否保持同方向

[![原论文 Figure 1：Performance difference (∆Accuracy) across different datasets when the correct answer is…](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/interspeech-2026/76b9cd737554/figure-1.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/interspeech-2026/76b9cd737554/figure-1.png)

*论文图 1。原论文 Figure 1：“Performance difference (∆Accuracy) across different datasets when the correct answer is systematically reassigned to a fixed option position (A, B, C, or D).”。*

从像素可见，上排 3 个模型的纵轴量程较小，柱形在零线上下小幅摆动，下排 3 个模型的量程明显更大。左下 Phi-4 子图中红色 A 柱多为正向高柱，蓝色 D 柱多为大幅负向，说明偏好 A、回避 D。中下 Voxtral-Mini-3B 的蓝色 D 柱在文本侧为负、在语音侧转正，与正文描述的跨模态转向一致。右上 Qwen 两个尺寸的红色 A 柱多为正、蓝色 D 柱多为负，模式相近。上排左图 Gemini 的红色 A 柱在 MMAR 为明显负向，而蓝色 D 柱在 MMAU 为正向，支持其偏好 D 的判断。需要提醒，像素不能精确读出每根柱的小数点后数值，复述时只讲方向与量级，不硬写精确差值。

第二个要核对的实验条件是解码与过滤设置。下表把可复现的关键阈值集中呈现，表前的问题是：复现时哪些设置必须与原文一致才能保证可比？公平条件是同一提示协议与同一过滤规则，指标方向是温度越低越确定、长度与时长截断影响样本构成。

| 环节 | 对象 | 阈值与设置 | 指标方向 | 备注 |
| --- | --- | --- | --- | --- |
| 解码 | 全部 6 个模型 | temperature at 0 | 固定为 0 保证可复现 | 遵循 simple-eval 提示协议 |
| 解码 | 全部 6 个模型 | 1024 tokens | 最大输出序列长度 | 超长输出被截断 |
| 过滤 | 语音转换后样本 | 180 seconds | 超过则过滤 | 控制极长序列的计算量 |
| 过滤 | 全部数据集 | four answer options | 只保留四选项样本 | 保证 A 到 D 可比 |
| 构造 | 3 个基准 | 3 个语音版本 | 文本与语音对照 | 用于检验模态效应 |

表后解释主要收益与代价。收益是这些设置让重排实验可重放：温度为 0 减少采样随机性，四选项保证每个位置都有定义，时长过滤保证长音频可跑。代价与边界是过滤改变了原始数据分布，语音合成引入了 TTS 因素，MMAU 只用 test-mini 子集，因此结论严格适用于过滤后的四选项子集，不能直接推广到被滤掉的超长样本或原始全量分布。原文未报告硬件预算与推理耗时，复现时需自行记录成本。

### 标识符与基座对比说明了什么？什么没有被缓解？

消融部分包含两个特有细节。第一是标识符效应。作者在 MMAU 和语音版 MMAU 上去掉 A、B、C、D 标识符后重测，涉及 Phi-4、Qwen 两个尺寸和 Voxtral-Mini。报告显示，有标识符时多数情况下准确率更高，在语音版上稳定性也有改善，但对偏置的减小作用并不一致，总体上标识符带来更好的准确率，但没有缓解位置偏置。其影响随模型家族和模态变化，反映答案顺序与标识符之间复杂的交互。教学上要区分两个目标：提高分数不等于降低偏置。

第二是与文本基座的对比。作者在 MMLU 及其重排变体上比较 Voxtral-Small-24B 与 Mistral-Small-3.1-24B-Instruct，以及 Qwen2.5-Omni-7B 与 Qwen2.5-7B-Instruct。Voxtral 与 Mistral 的位置偏置趋势大体相似，支持偏置主要继承自文本模型的解释。Qwen 系列则出现明显分化，说明偏置并非总是直接延续，有些音频模型在微调后表现出不同行为。

下面的导读针对第二张像素图。该图左右各一组柱状图，横轴包括原始与固定到 A、B、C、D，纵轴是准确率，蓝色为文本基座，橙色为音频模型。阅读时先看同一横坐标下两色柱高差，再看随横坐标变化的起伏形状是否同步。

> **看图路径：** 1. 先确认左图是 Voxtral 与 Mistral 对比，右图是 Qwen 音频版与文本版对比；2. 再比较同一横坐标下蓝色与橙色柱高差，判断继承还是分化；3. 注意纵轴起点不是零，避免把柱高差误读为数倍差距

[![原论文 Figure 2：Comparison of LALMs and their text-only LLM coun- terparts on MMLU](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/interspeech-2026/76b9cd737554/figure-2.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/interspeech-2026/76b9cd737554/figure-2.png)

*论文图 2。原论文 Figure 2：“Comparison of LALMs and their text-only LLM coun- terparts on MMLU”。*

从像素可见，左图中蓝色与橙色柱高接近，且随 A、B、C、D 起伏的形状同步，都是 C 处较高、A 处较低，支持继承的判断。右图中蓝色文本模型柱高明显高于橙色音频模型，且两者随位置变化的形状不同步，文本模型波动较大而音频模型相对平坦但整体更低，支持分化的判断。同样，像素只能支持趋势判断，不能读出精确准确率小数，引用时应说趋势相似或分化，而不编造具体分差。未胜出项是 Qwen 的反例，它提醒不能把继承当作普遍因果，微调可能改变偏置形态，但原文未给出微调数据与目标的因果证据，这部分仍待验证。

### 排名为何会变？排列投票的代价是什么？

论文用排名波动来说明偏置的实际危害。做法是把正确答案放在不同位置后，比较 6 个模型的相对排名。结果显示排名可显著改变。在 MMAU 中，Qwen2.5-Omni-7B 在降低内在偏置后可能反超 Gemini-2.0-Flash。在 MMAR 中，Phi-4-Multimodal 对 Voxtral-Mini-3B、Qwen2.5-Omni-3B 对 Qwen2.5-Omni-7B 也出现类似的胜负变化。作者据此强调全排列评估的重要性。

下面的导读针对第三张像素图。该图是两块排名热图，左侧 MMAU、右侧 MMAR，行是 6 个模型，列是原始、固定到 A、B、C、D 与全排列，格内数字为排名，数字越小越靠前。阅读时沿行看同一模型跨列的数字跳动，跳动越大说明排名越依赖顺序。

> **看图路径：** 1. 先确认左侧为 MMAU、右侧为 MMAR，行是六个模型，列是原始与固定位置及全排列；2. 再逐行读排名数字变化，找出跨条件跳动最大的行；3. 对比 Gemini 始终靠前与中部模型的频繁互换，理解排名不可靠的含义

[![原论文 Figure 3：After shuffling the options, model rankings fluctuate considerably.](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/interspeech-2026/76b9cd737554/figure-3.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/interspeech-2026/76b9cd737554/figure-3.png)

*论文图 3。原论文 Figure 3：“After shuffling the options, model rankings fluctuate considerably.”。*

从像素可见，Gemini 行在两块热图中多为 1，相对稳定。中部行跳动明显，例如 Qwen2.5-Omni-7B 与 Qwen2.5-Omni-3B 在不同列互换先后，Phi-4 与 Voxtral-Mini-3B 也在 MMAR 中出现名次交叉。全排列列的排名与原始列并不完全相同，说明单次原始顺序的排名可能误导。这张图支持的判断是位置偏置足以威胁基准可靠性，限制是它只展示 MMAU 与 MMAR 的排名，没有展示 MMLU 与语音版本的排名变化，因此不能把排名不稳定推广到所有数据集。

排列投票的结果与代价需要一起讲。原文报告，循环排列多数情况下优于原始评估，全排列进一步优于循环排列，给出最可靠的能力估计，因为它考虑了全部可能的答案顺序。即使文本与音频偏置形态不同，排列仍能有效缓解。但代价是额外的测试计算，全排列在四选项下需要更多次推理，对长语音样本尤其沉重。个别情况下离散度指标没有同步改善，例如 Gemini 的某些相对标准差在排列后略升，这说明缓解是总体有效而非每组都成立，也与标签不均衡下指标的局限有关。

### 复现先做什么？需要补哪些验证？

复现的第一步是重建可比的数据条件。下载 MMAU 的 test-mini、MMAR 和 MMLU，只保留四选项样本，记录每个数据集原始的 A 到 D 标签比例。用同一 TTS 或保留原文的语音版本思路生成语音问题时，要记录合成器版本与发音处理，并按 180 秒截断过滤，保存被滤掉样本的清单，以便说明结论边界。

第二步是固定推理协议。采用 simple-eval 提示写法，温度设为 0，最大输出 1024 个 token，最大输入时长按模型上下文限制记录。对每个样本生成 4 个重排版本，正确答案分别固定在 A、B、C、D，其余选项随机打乱并固定随机种子。分别计算准确率、差值、相对标准差与选项 KL 散度，注意百分点与相对百分比的区别，不要把差值误写成相对提升。

第三步是复现缓解策略。对每个样本的循环轮换与全部排列分别推理，再多数投票决定最终答案，记录推理次数与耗时。还需补的验证包括：无标识符条件、文本基座对照、不同随机种子下的打乱方差，以及被滤掉的超长样本是否呈现更强偏置。原文未公开代码、模型与数据的可达状态，本次也没有收到来源绑定且完成验证的资源，因此不能声称代码或数据已公开，复现需自行实现管线并公开日志。

### 何时值得尝试排列评估？还有什么未解决？

当你的音频问答评测采用多项选择且样本量有限、排名接近时，值得尝试排列评估。因为此时顺序噪声可能淹没真实的能力差距，循环排列可用较少额外计算先做稳健性检查，全排列则在资源允许时给出更可靠的估计。若模型间差距远大于重排波动，或者任务已是开放生成而非选择题，排列的收益会下降。

论文的直接报告是 6 个模型无一免于位置偏置，打乱可带来最高达 24% 的波动并改变排名，排列投票在多数情况下缓解偏置。有限解释是部分模型的偏置可能继承自文本基座，但 Qwen 的反例说明继承不是必然。未验证的推测是偏置来源于架构、数据或微调中的哪一环，原文没有因果证据，不能把相关性说成原因。

常见的误解需要纠正。第一，高准确率不等于低偏置，Phi-4 在某些条件下分数不低但波动最大。第二，去掉标识符不等于去偏，原文显示准确率下降且偏置未系统减小。第三，全排列不是免费的，它用测试计算换可靠性，长语音场景需权衡。未来的工作应超越排列，发展更高效、更公平的音频评测框架，这正是作者希望引起重视的方向。

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。
- 评分规则：type-aware-v1
- 评分模型：muse-spark-1.3-contributor
- 评分请求协议：openai_responses

---

[← 返回 interspeech-2026 论文汇总](/posts/conference-interspeech-2026/)
