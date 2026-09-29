---
title: "Audio Hallucination Attacks: Probing the Reliability of Large Audio Language Models"
date: 2026-09-28
draft: false
description: "论文用显式与隐式问法加语音注入构造 6.5K 评测揭示 Audio Flamingo 3 等模型高达 95.35% 攻击成功率，再以 120K 偏好对做 DPO 对齐把隐式攻击成功率从 79.19% 降到 40.24% 但仍残留显著幻觉。"
tags: ["基准测试", "基准设计", "音频大模型", "对抗鲁棒性", "音频问答"]
categories: ["interspeech-2026 论文"]
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_paper_id: "conference:interspeech:2026:conference-paper-id:seth26_interspeech"
paper_digest_source_kind: conference
paper_digest_conference_id: "interspeech-2026"
paper_digest_conference_record_url: "https://www.isca-archive.org/interspeech_2026/seth26_interspeech.html"
paper_digest_conference_pdf_url: "https://www.isca-archive.org/interspeech_2026/seth26_interspeech.pdf"
paper_digest_api_reader_contract: "beginner-researcher-v3"
paper_digest_api_reader_article_sha256: "e3500bc6b621aeb0ae603dc1aabcab4e2ae794a42cf9f9b2fa2ff21d2a7e2627"
paper_digest_api_reader_plan_sha256: "6bba0231da91aa4d4eb666420159b1f6f037fc77c8e0c9f3105bd67d949434e1"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings-v4"
paper_digest_api_reader_source_bindings_sha256: "8a1ea35e9690359467a5e72df776e49af873e3415a477afdc567bda0c041d9b6"
paper_digest_api_reader_source_table_count: 2
paper_digest_api_reader_source_formula_count: 0
paper_digest_api_reader_structured_artifacts_sha256: "29f054dde1ddf9ab4621e94fa5393cbc6f20b043d8dfbb6a7937efeaeaae563a"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity-v1"
paper_digest_api_reader_author_identity_sha256: "b0ce373450d6155cf936aea178783fa34cb2f403b5cb09a3979a23e4321b489b"
paper_digest_api_reader_author_count: 8
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity-v1"
paper_digest_api_reader_resource_identity_sha256: "6831c6eb26b72c2ea8628775d70417e3ea46441345e93c2556ef6ad43de7bf8e"
paper_digest_api_reader_resource_count: 0
paper_digest_api_reader_decision_projection: "api-reader-decision-projection-v2"
paper_digest_scoring_contract: "api-scoring-audit-v2"
paper_digest_taxonomy_contract: "paper-taxonomy-flat-tags-compat-v1"
paper_digest_taxonomy_selection_contract: "paper-taxonomy-selection-v1"
paper_digest_taxonomy_registry_version: "paper-taxonomy-v1"
paper_digest_taxonomy_registry_sha256: "15c82a567ce5a55dc1175684ed08b64c158558639d9c8fb822c9587ec32a8778"
paper_digest_taxonomy_concepts: [{"facet":"artifact","id":"artifact.benchmark","label":"基准测试"},{"facet":"method","id":"method.benchmark-design","label":"基准设计"},{"facet":"model_family","id":"model_family.audio-language","label":"音频大模型"},{"facet":"research_focus","id":"research_focus.adversarial-robustness","label":"对抗鲁棒性"},{"facet":"task","id":"task.audio-question-answering","label":"音频问答"}]
paper_digest_primary_task: "音频问答"
paper_digest_primary_method: "基准设计"
paper_digest_score: 6.7
paper_digest_rank_bucket: "前50%"
paper_digest_document_type: "数据集与基准"
paper_digest_conference_structure: pdf-visual-quote-evidence-v1
---

# 📄 问法一换就信以为真：音频大模型为何跳过查证直接幻听

> 英文题目：*Audio Hallucination Attacks: Probing the Reliability of Large Audio Language Models*

> 会议身份：`conference:interspeech:2026:conference-paper-id:seth26_interspeech`



> 来源为官方会议 PDF；图片依据原页像素，表格数字依据原文引用。PDF 文字层不视为原始 TeX，未可靠恢复的结构不作推断。


> 会议来源：[官方记录](https://www.isca-archive.org/interspeech_2026/seth26_interspeech.html) · [官方 PDF](https://www.isca-archive.org/interspeech_2026/seth26_interspeech.pdf)

标签：#基准测试 #基准设计 #音频大模型 #对抗鲁棒性 #音频问答

评分：**6.7/10** | 创新 1.5/2 | 技术严谨 1.0/1.5 | 实验充分 1.2/1.5 | 清晰度 0.8/1 | 影响力 1.1/1.5 | 开源 0.0/1.5 | 可复现 0.1/0.5 | 工程/实践 1.0/1.5

排名：前50% | 文档类型：数据集与基准

## 👥 作者与机构

- Ashish Seth：机构信息未能从会议 PDF 纯文本可靠映射
- Sonal Kumar：机构信息未能从会议 PDF 纯文本可靠映射
- Ramaneswaran Selvakuma：机构信息未能从会议 PDF 纯文本可靠映射
- Nishit Anand：机构信息未能从会议 PDF 纯文本可靠映射
- Utkarsh Tyagi：机构信息未能从会议 PDF 纯文本可靠映射
- Prem Seetharaman：机构信息未能从会议 PDF 纯文本可靠映射
- Ramani Duraiswami：机构信息未能从会议 PDF 纯文本可靠映射
- Dinesh Manocha：机构信息未能从会议 PDF 纯文本可靠映射

## 📌 核心摘要

大型音频语言模型（Large Audio Language Models，简称LALMs）输入为环境与音乐音频加自然语言问题，输出为基于音频证据的回答，难点在于模型常跳过存在性验证而直接沿用语言先验编造细节。该工作先用Gemini 3 Pro做字幕一致性过滤保留8K音频与字幕对，再为每段生成2个对抗性与2个随机反事实声音，接着据此构造显式存在问与预设存在的隐式问，最后将合成口语误导句与原音频拼接形成音频侧攻击。相对只问是否存在的已有幻觉评测，其机制差异在于同时检验查询结构预设与声学虚假线索，并以直接偏好优化（Direct Preference Optimization，简称DPO）做后对齐。在AHA-Eval基准下，Audio Flamingo 3音频侧随机显式攻击的攻击成功率指标为53.40%，从文本侧攻击的攻击成功率指标1.90%升至53.40%。结论仅适用于短片段环境与音乐问答的幻觉拒绝能力，未验证长音频、多轮对话与真实录音误导的外推。原文未披露训练、推理或部署成本。

## 🔗 开源与复现资源

本次未形成可展示的已核验资源记录，开放状态尚未核实。
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 研究对象是什么？大音频语言模型如何工作？

本文输入是自然音频加自然语言问题，目标是让模型先核对音频里是否真有被问到的声音，再组织回答。所谓大音频语言模型，用白话说就是能听声音再说话的大模型，英文名是 Large Audio Language Model，缩写为 LALM。后文统一简称 LALM。它的典型做法分两段，先分别预训练音频编码器和文本大模型，再把音频表示拼进大模型的表示空间，让大模型能调用声音信息做推理。论文点名的评测背景是 MMAU、MMAR 和 MMAU-Pro 这类复杂音频推理榜单，被测模型在这类榜单上分数很高，容易给人已经可靠的印象。

本文要核对的恰恰是这种印象，标准榜单多问模型能做什么，很少问模型在问题预设错误时能否拒绝。本解读只讲论文实际做的幻觉攻击任务，教学用的海鸥与海浪例子明确标为例子，不引申为新实验效果。开场需要保留的关键信息是两套产物规模，评测集约 6.5K 问答对，对齐集约 120K 问答对，攻击面分为改问法的查询攻击和改声音的音频攻击，指标是攻击成功率，英文为 Attack Success Rate，缩写为 ASR，后文统一简称 ASR。ASR 越低表示模型越少上当，越高表示越不可靠。

资源状态方面，本次未发现来源绑定且完成验证的公开资源，因此不能声称代码模型数据已公开，只能按论文文字讲方法与数字。

### 与以往音频幻觉研究有何不同？

同输入同目标的直接前人是只用显式问法的音频幻觉研究。显式问法就是直接问某声是否存在，例如音频里有狗叫吗，模型只需回答有或没有。以往工作沿这条路线报告幻觉，但论文指出这条路线不足以暴露系统性失效。原因在于显式问法天然提醒模型去做存在性判断，模型容易触发查证动作。同监督同运行阶段的另一类相关工作是通用音频理解榜单与推理榜单，它们监督模型答对复杂问题，运行时也鼓励模型充分利用大模型的常识与推理能力。

这恰好埋下本文揭示的矛盾，大模型越强，越可能在没有查证时编出合理但虚假的细节。论文的增量是把问法结构拆成显式与隐式，把幻觉声拆成对抗性与随机，把攻击面拆成文本与音频，从而同时检验查证是否发生、先验是否主导、声学线索是否被误用。需要区分的是，本文不是提出新的音频编码器，也不是提升标准榜单分数，而是做可靠性探针。凡是说某方法在标准榜单更好，都不能直接当成在本文攻击下更可靠，两个指标方向与前提不同。

### 为什么换个问法模型就开始幻听？

初学者可以这样理解任务难度，把声音丢给模型不等于模型真的听了。模型内部至少要走两步，第一步是接地，英文为 grounding，指把问题里提到的声音在音频信号里定位或证伪，第二步才是推理与表达。论文发现的失败恰恰是跳过第一步。海鸥例子说的就是这件事，例子标注如下，同一段只有海浪声的音频，直接问海鸥声能否听见，模型能正确否定，一旦换成海鸥声听起来有多远，模型不再先问有没有海鸥，反而直接描述远处海鸥声的清晰度。这不是听力不够，而是问法里的预设被大模型直接接受了。

**显式攻击 × 隐式攻击：** 显式攻击负责直接询问某声音是否存在，分工是检验模型能否做存在性查证；隐式攻击负责在问法中预设该声音已存在，分工是检验模型是否会跳过查证直接推理细节，二者搭配的理由是只测显式会高估可靠性，组合后才能暴露预设前提下的接地缺失。

下面这张图把上述对比画成了上下两格，值得初学者停留细看，上格为显式查询，下格为隐式查询，右侧电脑屏显示同一模型的两种回答，1 对一错。

> **看图路径：** 1. 先看上半显式问法海鸥是否存在时模型的否定回答与绿色对勾；2. 再看下半隐式问法海鸥有多远时模型直接描述远处海鸥声与红色错叉；3. 对比同一段只有海浪声的音频在两种问法下为何出现一对一错

[![原论文 Figure 1：Explicit Vs. Implicit Queries.](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/interspeech-2026/3c5209f7fedb/figure-1.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/interspeech-2026/3c5209f7fedb/figure-1.png)

*论文图 1。原论文 Figure 1：“Explicit Vs. Implicit Queries.”。*

从像素可见，上格用户问海鸥声是否可闻，屏幕回答否定并强调主要是海浪声，右上角为绿色对勾。下格用户问海鸥声听起来多远，屏幕回答像是从远处传来并谈声学清晰度，右上角为红色错叉。两格背景都是海浪与礁石，人物与耳机位置相同，说明控制的是问法而非音频。这个对照的教学意义是，可靠性不能只看模型能否答对直接提问，还要看它在前提错误时能否先纠正前提。论文把后者称为隐式查询攻击，它更接近真实对话中用户想当然的追问。

### 攻击流水线全景：从 8K 音频到两套数据集

论文的方法全景是一条全自动数据构造流水线，输入是公开音频与多人标注，输出是评测集 AHA-Eval 与对齐集 AHA-Guard。按一个样本走完全程有助于建立依赖关系，先取一段户外或音乐音频及其多条人工描述，用一致性过滤留下含义无冲突的样本，再为该样本编造 4 个实际不存在的声音，接着为每个虚构声音各造一道显式题与一道隐式题，最后再把提及虚构声音的合成语音拼到原音频上形成新的音频攻击样本。整个过程不训练被测模型，被测模型只在评测时被调用。

流水线里反复出现的生成器是 Gemini 3 Pro 与 Gemini 2.5 Flash 语音合成，裁判是 GPT-5.2，这些都是论文明确写出的工具链，复现时需要同等能力的模型或人工替代，不能默认随便换一个小模型效果相同。

> **看图路径：** 1. 沿从左到右箭头走完数据过滤到幻觉声生成到问答构造到音频拼接的主路径；2. 看中间对抗性与随机两列示例词如何被 Gemini 模块输出；3. 看最右端评测集与对齐集两个输出分支的规模标注

[![原论文 Figure 2：Overview of the AHA Data Curation and Attack Generation Pipeline.](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/interspeech-2026/3c5209f7fedb/figure-2.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/interspeech-2026/3c5209f7fedb/figure-2.png)

*论文图 2。原论文 Figure 2：“Overview of the AHA Data Curation and Attack Generation Pipeline.”。*

从收到像素看，该总览图从左到右分为数据过滤与幻觉声生成等编号模块，左侧可见多条标注进入过滤框，下方可见 8K 音频与 AudioCaps、Clotho、MusicCaps 的饼图，中间可见对抗性声音如牛叫拖拉机声狗叫与随机声音如电话铃警笛声的对照表，箭头经由 Gemini 模块指向右侧问答与语音构造。解释这张图的关键是理解分支何处汇合，语义分支决定问什么不存在的声音，声学分支决定把什么虚假提示说进音频，两条分支最终汇成同一批音频与问题的配对。论文报告过滤后保留 8K 高质量音频与标注对，评测集由此独立生成约 6.5K 攻击对，对齐集生成约 120K 偏好对，且训练与测试划分严格分离，避免用测试音频做对齐训练。

### 如何保证虚构的声音真的不存在？

第一个组件是数据过滤与真值固定。白话说就是先把含糊音频扔掉，只留大家说法一致的音频。英文概念是 caption consistency filtering，可译为标注一致性过滤。论文从 AudioCaps、Clotho 与 MusicCaps 三处取材，前两者覆盖环境与日常声景，后者覆盖乐器与人声音乐。每段音频有多条独立人工描述，描述之间可能互相矛盾。

做法是用 Gemini 3 Pro 逐段比较全部描述，只保留核心声源类型、声源数量与声学环境一致的样本，记为保留，否则记为拒绝。保留下来的约 8K 对被当作后续的可靠真值，用来定义什么算幻觉。若跳过这步，后续所谓虚构声音可能其实在音频里出现过，评测就失去了证伪基础。论文未报告过滤阈值的数值公式与人工复核比例的完整细节，这是复现时的缺项，只能按文字描述重做语义比较，不能从模型名推定具体提示词必然一致。

**对抗性声音 × 随机声音：** 对抗性声音负责提供场景里合理但实际缺席的共现声，分工是探测语言先验的误导；随机声音负责提供与场景无语义关联的离群声，分工是探测是否根本没有听音频，二者搭配才能区分是被常识带偏还是完全没有接地。

第二个组件是幻觉声生成。做法是先让模型读出标注里明确提到的真实事件，再编造 4 个不在描述中的声音，其中两个为对抗性声音，两个为随机声音。对抗性指场景里合理但缺席的共现声，例如户外氛围里的牛叫狗叫，随机指与场景几乎无关的离群声，例如自然录音里的按键哔哔声。论文用 5 例上下文学习引导生成，保证两类风格分开。每段音频固定产出 4 个虚构事件，这是后续每段产出 8 个查询攻击对的乘数基础。

### 文字与声音两条攻击面如何具体构造？

查询攻击的构造紧接上一步，每个虚构声音各生成一道显式题与一道隐式题。显式题多为二值判断，例如狗叫声是否存在，正确行为是核对音频后如实否定。隐式题预设声音存在再问如何何时何地为何，例如牛叫了几次、警笛为何在背景中鸣叫，正确行为是先指出前提不成立再拒绝展开。由于每段音频有 4 个虚构声音，每种各有两种问法，因此每段贡献 8 个查询攻击对。

音频攻击则另起一条声学通路，先为每个虚构声音写一句自然口语提示，例如我明明听见远处有狗叫，带有填充词与语气词，再用语音合成读出来并拼接到原音频前面，形成合成语音加原声的组合音频。此时再配显式描述题与隐式预设题，模型听到的声音里就有了指向虚构事件的语言线索，但底层场景依然没有该事件。初学者容易误以为音频攻击是加了真实狗叫声，实际加的是人声说听见狗叫，这是语言误导经由声学通道进入，而非声学事件本身被伪造。

**查询攻击 × 音频攻击：** 查询攻击负责只改文字问法，分工是测试文本预设的影响；音频攻击负责把合成语音拼接到原音频前端，分工是测试声学层面虚假线索的影响，二者搭配才能说明脆弱性同时存在于文本理解和音频编码两条通路。

这套组合机制的新增作用是分离两种失败，查询攻击失败说明文本预设足以让模型放弃查证，音频攻击失败说明即使把提示放进声音里，模型的音频编码与语言解码依然没有互相纠正。论文的数字显示后者更难防御，这一点在结果节用表格展开。

### 对齐集如何训练？哪些参数真的被更新了？

本节先明确训练含义，本文被测的 6 个模型在评测阶段都不重新训练，唯一的训练动作是拿 Qwen2.5-Omni 做缓解验证。所谓直接偏好优化，白话说就是给模型看 1 对好坏回答并让它更偏向好的，英文为 Direct Preference Optimization，缩写为 DPO，后文统一简称 DPO。

**思维链提示 × 直接偏好优化：** 思维链提示负责在推理时追加逐步思考指令，分工是不改参数地诱发查证；直接偏好优化负责用选中与拒绝回复对更新模型，分工是把先查证再回答写进参数，二者搭配才能对比测试时补救与训练时对齐的效果差异，论文显示后者对隐式攻击更有效。

论文的 DPO 数据即 AHA-Guard，规模为 120K 偏好对，覆盖事实、对抗与随机场景，横跨查询与音频两种模态。每对包含被选中的正确回答与被拒绝的幻觉回答，正确回答的写法是先否定虚构前提再描述真实内容，错误回答则是接受前提并编造细节。为防止模型学成一律拒绝，数据里还均匀混入事实问题，其拒绝回答通过漏掉真实声音或加入幻觉来构造，迫使模型学会接地回答而非一概否认。论文明确报告的训练条件是在 8 张 A100 上对 Qwen2.5-Omni 做 LoRA 微调，秩为 6，训练 5 轮。

论文未报告学习率、批量大小、优化器细节与早停规则，这些是复现缺项，不能从模型名推定。另一条缓解路线是测试时思维链，英文为 Chain-of-Thought，缩写为 CoT，做法是在每个问题后追加逐步思考指令，不更新任何参数。两条路线对比的结论是，CoT 对显式题有一定帮助，对隐式题基本无效，DPO 对隐式题下降更明显。

### 测什么、与谁比、条件是否一致？

实验要回答 3 个问题，虚构声音的类型是否影响幻觉，问法结构是否影响幻觉，攻击放在文字里还是声音里是否影响幻觉。比较对象是 6 个前沿 LALM，包括 4 个开源模型 Qwen2.5-Omni、R1-AQA、Audio Flamingo 3 与 Qwen3-Omni，以及两个闭源模型 Gemini 3 Pro 与 GPT 4 Audio。选择理由是它们在复杂音频推理榜单上表现靠前，适合检验高分是否等于可靠。条件一致性方面，同一批过滤后的音频与同一批虚构声音被用于不同模型，显式与隐式、随机与对抗、文本与音频的划分相同，区别只在被测模型本身。

但需注意闭源模型的版本与解码参数不可控，跨模型比较只能视为在各自默认服务条件下的表现，不能当作严格同参对照。指标是 ASR，方向为越低越好。评分做法是用 GPT-5.2 做裁判，给定模型回答与真值判断回答是否接受了幻觉前提而非正确拒绝。论文用人评抽查 200 条验证自动裁判，报告一致率为 92.4%，这支持大规模评分可用，但不等于每条都对，残留约 7.6% 分歧需在解读边界时保留。

**攻击成功率 × 大模型裁判：** 攻击成功率负责给出是否接受幻觉前提的二值判定比例，分工是量化可靠性；大模型裁判负责对照标准答案判断回复是否接受了虚假前提，分工是实现大规模自动评分，二者搭配的理由是人工逐条看 6.5K 问答成本过高，需要经 92.4% 一致性校验的自动指标来替代。

数据划分上，评测集取自 AudioCaps、Clotho 与 MusicCaps 的测试划分并独立运行流水线，对齐集取自对应训练划分，保证严格的训练测试分离。硬件预算只报告了 DPO 微调所用 8 张 A100，其余推理成本与延迟未报告，因此不能承诺缓解方法在成本上更优。

### 主结果：高分模型为何在隐式与音频攻击下大面积失守？

先提出比较问题，在控制同一音频与同一虚构声音时，换问法与换通道是否显著改变 ASR，公平条件是同一评测集与同一裁判，指标方向为 ASR 越低越可靠。下表整理论文正文连续句中逐字出现的关键数字，聚焦文本与音频、显式与隐式、随机与对抗 3 组对照，模型列只放论文实际可运行的被测模型，不加入事后最优或搜索最优。

| 条件 | 指标 | Audio Flamingo 3 | Qwen2.5-Omni | Gemini 3 Pro |
| --- | --- | --- | --- | --- |
| 文本随机显式 | ASR | 1.90% | 未在该句报告 | 10.88% |
| 文本对抗显式 | ASR | 15.63% | 28.32% | 未在该句报告 |
| 音频随机显式 | ASR | 53.40% | 未在该句报告 | 未在该句报告 |
| 音频对抗显式 | ASR | 67.05% | 94.57% | 未在该句报告 |
| 文本随机隐式 | ASR | 未在该句报告 | 未在该句报告 | 59.67% |

表前已说明比较问题与公平条件，表后需要解释主要收益与代价。第一组对照是虚构类型，对抗声比随机声更难防，Audio Flamingo 3 在文本显式下从 1.90% 升到 15.63%，说明场景合理的缺席声更容易激活语言先验。第二组对照是问法结构，Gemini 3 Pro 在随机声下从显式 10.88% 升到隐式 59.67%，差距达 48.79%，说明预设前提会让模型跳过接地。第 3 组对照是攻击通道，Audio Flamingo 3 随机显式从文本 1.90% 升到音频 53.40%，对抗显式从 15.63% 升到 67.05%，Qwen2.5-Omni 对抗显式从 28.32% 升到 94.57%，说明把虚假提示放进声音后，原本相对稳健的模型同样失守。

论文摘要层面的最强证据是 Audio Flamingo 3 与 Gemini 3 Pro 的总体 ASR 分别达 95.35% 与 79.65%，这与它们在标准榜单的高分形成反差。未胜出项也要点名，Audio Flamingo 3 在文本随机显式下仅 1.90%，是局部最稳健的一格，但同一模型在音频与隐式下迅速恶化，因此总体趋势不等于每格都差，部署时不能只看最优一格。

下面这张定性图展示多轮对话中错误如何被放大，值得结合数字一起读。

> **看图路径：** 1. 先读顶部音频说明确认汽车喇叭实际不存在只有音乐与提示语音；2. 再看中间模型分段时间描述中红色标出的喇叭声幻觉句；3. 最后看追问喇叭何时出现时模型给出 0 比 08 到 0 比 12 的具体时间

[![原论文 Figure 3：Qualitative Example. We find that during a multi-turn conversation with Gemini 3 Pro, the error…](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/interspeech-2026/3c5209f7fedb/figure-3.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/interspeech-2026/3c5209f7fedb/figure-3.png)

*论文图 3。原论文 Figure 3：“Qualitative Example. We find that during a multi-turn conversation with Gemini 3 Pro, the error further propagates when the model is asked specific questions about the halluci-…”。*

从像素可见，顶部说明合成音频以女声质疑是否听见汽车喇叭开场，但喇叭实际不存在，背景只有音乐。中间模型按 0 比 00 到 0 比 05 与 0 比 06 到 0 比 17 分段描述，并在红色句中声称乐队上方有响亮刺耳的喇叭声。底部追问喇叭何时出现，模型进一步给出 0 比 08 到 0 比 12 的具体时间。这个例子支持论文判断，一旦首次接受虚假前提，后续追问会让幻觉细节越编越具体，而不是自我纠正。

### 机制分析：注意力与置信度指向什么原因？

本节按问题组织，先问隐式攻击是否让模型更少听音频，再问对抗声是否让幻觉更自信。与谁比的条件是同一模型在显式与隐式下比较平均音频注意力，在随机与对抗下比较肯定回答的对数概率。论文用 Qwen2.5-Omni 等模型展示趋势，未声称所有模型每一步都成立。注意力分析的做法是计算生成每一步分配给音频标记的平均注意力，比较显式与隐式两条曲线。置信度分析的做法是看幻觉回答中生成肯定词的对数概率，对比随机与对抗两类虚构声。

> **看图路径：** 1. 看上图横轴生成步数纵轴注意力分数下橙色显式曲线始终高于蓝色隐式曲线；2. 看下图三组模型中橙色对抗柱都远高于蓝色随机柱；3. 对照 Qwen2.5-Omni 等柱顶 76.3% 与 23.7% 等标注理解置信度差异

[![原论文 Figure 4：Investigating the cause of hallucinations.](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/interspeech-2026/3c5209f7fedb/figure-4.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/interspeech-2026/3c5209f7fedb/figure-4.png)

*论文图 4。原论文 Figure 4：“Investigating the cause of hallucinations. (Top) At- tention to audio during token generation. (Bottom) Confidence of hallucinated “Yes” responses.”。*

从像素可见，上图横轴为生成步数，纵轴为注意力分数，橙色显式曲线全程约在 0.09 到 0.12 之间，蓝色隐式曲线全程约在 0.05 到 0.08 之间，两条曲线差距稳定，支持隐式问法下模型更少关注声音信息的判断。下图为 3 组模型的百分比柱状图，Qwen2.5-Omni-7B 的随机柱为 23.7% 而对抗柱为 76.3%，Qwen2-Audio-7B 为 25.2% 对 74.8%，R1-AQA 为 19.5% 对 80.5%，支持对抗性相关声音诱发更高置信幻觉的判断。但要区分报告与推测，曲线与柱状是论文直接报告，有限解释是注意力下降与先验主导有关，未验证推测是注意力必然导致幻觉，相关性不等于因果，仍需干预实验才能定因果。

缓解对照同样放在本节深化，下表只用论文实际可运行的策略，不用搜索最优代替可部署收益。

| 条件 | 指标 | 基线 Qwen2.5-Omni | 加 CoT | 加 DPO 对齐 |
| --- | --- | --- | --- | --- |
| 文本随机隐式 | ASR | 68.74% | 82.90% | 39.01% |
| 音频随机隐式 | ASR | 59.59% | 未报告 | 40.62% |
| 文本对抗隐式 | ASR | 79.19% | 未报告 | 40.24% |

表前比较问题是测试时追加思考与训练时偏好对齐谁能降低隐式攻击，公平条件是同一评测集与同一基线模型，指标方向为 ASR 越低越好。表后解释是 CoT 对显式有帮助但对隐式无效，随机隐式反而从 68.74% 升到 82.90%，说明仅靠提示模型逐步思考不能召回被跳过的接地步骤。DPO 把文本随机隐式从 68.74% 降到 39.01%，音频随机隐式从 59.59% 降到 40.62%，文本对抗隐式从 79.19% 降到 40.24%，论文称最大降幅达 49%，代价是需要 120K 偏好数据与 8 卡微调，且残留约 40% ASR，远非彻底解决。未评测边界是 DPO 后在标准推理榜单与事实问答上的变化未在本证据中给出，不能承诺无损。

### 还有哪些边界没有测到？

第一个边界是裁判与数据生成同属大模型链条。过滤、虚构声、口语提示、语音合成与裁判分别用了 Gemini 3 Pro、Gemini 2.5 Flash 与 GPT-5.2，论文虽有人评 200 条达 92.4% 一致，但自动链条的系统偏差仍可能存在，例如裁判对某种委婉拒绝的判定偏严或偏松。第二个边界是音频拼接方式单一，论文把合成语音拼接到原音频前端，未报告混响、重叠、音量比与拼接位置的消融，因此不能把结论推广到所有混音条件。第 3 个边界是模型覆盖与版本冻结问题，闭源模型随时间更新，论文数字只代表测试时刻的服务快照。

第 4 个边界是成本与延迟缺失，训练只报 8 卡与轮数，推理开销、输出长度与实时性未测量，不能承诺 DPO 在延迟上更优。最后是适用域，音频来自 3 个人声与环境音乐数据集，未覆盖远场会议、车载噪声或多说话人重叠等真实部署噪声，跨域泛化待验证。这些缺失不是技术错误，而是复现与选型时必须补的验证项。

### 要复现这套攻击，先做什么、用什么条件？

复现应按学习依赖倒排，先固定真值再造攻击最后评分。第一步复刻过滤，从 3 数据集测试划分取音频与多标注，用大模型做语义一致性判断，只留声源类型与数量一致的样本，目标是得到可复用的干净池，论文规模约为 8K。第二步复刻虚构声，每段固定生成两个对抗与两个随机，共 4 个，检查点是虚构声确实不在全部标注中出现。

第三步复刻问答，每个虚构声各造一道显式与一道隐式，显式为存在判断，隐式为计数因果距离等预设提问，检查点是隐式题干确实包含虚假前提。第四步复刻音频攻击，为每个虚构声写一句带填充词的自然口语，用语音合成读出并拼接到原音频前端，再配描述题与隐式题，检查点是组合音频中底层场景仍无该事件。第五步复刻评分，用大模型裁判对照真值判断是否接受前提，抽样至少 200 条做人工一致性核对，目标是复现约九成一致。

关键超参数与信息条件要保留，DPO 验证需 120K 偏好对、LoRA 秩 6、5 轮、8 卡，CoT 只需追加逐步思考指令。资源状态必须如实写，本次未获得可验证的公开链接，因此不能写代码数据已公开，复现需按论文文字自建流水线，并注意合成语音与裁判模型换型可能改变绝对数值，比较时应以相对升降与同条件对照为准。

### 何时值得尝试这套方法？核心误解是什么？

当你的音频助手已在标准榜单拿高分却要进真实对话时，值得用这套探针先做可靠性体检。特别是产品允许用户追问细节、多轮对话会累积前提、或系统会把语音提示拼进输入时，隐式与音频攻击的覆盖最有价值。如果只做单轮显式存在判断，这套方法的增益较小。复现优先级是先跑文本隐式对照，因为它成本最低且论文显示差距最大，再跑音频拼接验证声学通道，最后再考虑 120K 规模的 DPO 对齐。

还需补的验证是事实问答保留率、标准榜单变化与人工误判率，避免为降 ASR 而引入过度拒绝。需要纠正的特有误解有三，一是把 1.90% 这类局部低 ASR 当成整体可靠，实际同一模型换问法或换通道后可升至 50% 以上。二是把 CoT 当成万能补救，论文显示它对隐式攻击可能反升。三是把 DPO 降约 49% 当成彻底解决，实际残留约 40% ASR 仍意味着近半数隐式攻击会成功。

总体判断是，论文报告的高 ASR 揭示了强推理与弱接地之间的错位，支持用先查证再回答的对齐来部分修复，但是否适用于你的噪声域与成本预算，仍需用自己的音频与人工核对来验证。

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。
- 评分规则：type-aware-v1
- 评分模型：muse-spark-1.3-contributor
- 评分请求协议：openai_responses

---

[← 返回 interspeech-2026 论文汇总](/posts/conference-interspeech-2026/)
