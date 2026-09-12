---
title: "Pardon? Evaluating Conversational Repair in Large Audio-Language Models"
date: 2026-09-12
draft: false
description: "论文把可回答性做成输入属性，用语义-声学掩蔽构造配对问答并以不可补偿的 EAR 分数同时考核答题与修复，报告显示多模型答题强但修复弱，而掩蔽加宽能提升修复检出。"
tags: ["评测协议", "音频大模型", "语音", "音频问答"]
categories: ["acl-2026 论文"]
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_paper_id: "conference:acl:2026:conference-paper-id:2026.findings-acl.976"
paper_digest_source_kind: conference
paper_digest_conference_id: "acl-2026"
paper_digest_conference_record_url: "https://aclanthology.org/2026.findings-acl.976/"
paper_digest_conference_pdf_url: "https://aclanthology.org/2026.findings-acl.976.pdf"
paper_digest_api_reader_contract: "beginner-researcher-v3"
paper_digest_api_reader_article_sha256: "2d5531974a1f2e77e4d2447f054eb21992b10d4d6a890a8f8755c5035cec2620"
paper_digest_api_reader_plan_sha256: "5145ea75c4458c2ca196e228ed2e4930950d9adf3c929d476f622bccee2ca1d7"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings-v4"
paper_digest_api_reader_source_bindings_sha256: "2c2735dcb41e78cc227b77f7ea8f5474723a1083614d98534e718f16c0ea0e0b"
paper_digest_api_reader_source_table_count: 3
paper_digest_api_reader_source_formula_count: 0
paper_digest_api_reader_structured_artifacts_sha256: "7adb4c007cc2d4ac1fff66624775a10a7c133382a42953bacad40687e8a566f9"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity-v1"
paper_digest_api_reader_author_identity_sha256: "be80bb625ceb8848a037f0910481418caff672391096f8e635f873165290630c"
paper_digest_api_reader_author_count: 7
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity-v1"
paper_digest_api_reader_resource_identity_sha256: "3d66d81d6ca48ce9f6534b0b1c2526b745f637889ce26213e441549bf28b9a9e"
paper_digest_api_reader_resource_count: 4
paper_digest_api_reader_decision_projection: "api-reader-decision-projection-v2"
paper_digest_scoring_contract: "api-scoring-audit-v2"
paper_digest_taxonomy_contract: "paper-taxonomy-flat-tags-compat-v1"
paper_digest_taxonomy_selection_contract: "paper-taxonomy-selection-v1"
paper_digest_taxonomy_registry_version: "paper-taxonomy-v1"
paper_digest_taxonomy_registry_sha256: "15c82a567ce5a55dc1175684ed08b64c158558639d9c8fb822c9587ec32a8778"
paper_digest_taxonomy_concepts: [{"facet":"method","id":"method.evaluation-protocol","label":"评测协议"},{"facet":"model_family","id":"model_family.audio-language","label":"音频大模型"},{"facet":"signal","id":"signal.speech","label":"语音"},{"facet":"task","id":"task.audio-question-answering","label":"音频问答"}]
paper_digest_primary_task: "音频问答"
paper_digest_primary_method: "评测协议"
paper_digest_score: 8.0
paper_digest_rank_bucket: "前25%"
paper_digest_document_type: "数据集与基准"
paper_digest_conference_structure: replayable-pdf-layout-v1
---

# 📄 答对不等于可靠：用可回答与不可回答配对检验大音频语言模型的对话修复

> 英文题目：*Pardon? Evaluating Conversational Repair in Large Audio-Language Models*

> 会议身份：`conference:acl:2026:conference-paper-id:2026.findings-acl.976`


> ✅ 来源为官方会议 PDF；表格与 Figure 按原文证据绑定。PDF 公式以原页区域图片展示，未冒称作者原始 TeX。

> 会议来源：[官方记录](https://aclanthology.org/2026.findings-acl.976/) · [官方 PDF](https://aclanthology.org/2026.findings-acl.976.pdf)

标签：#评测协议 #音频大模型 #语音 #音频问答

评分：**8.0/10** | 创新 1.5/2 | 技术严谨 1.0/1.5 | 实验充分 1.2/1.5 | 清晰度 0.8/1 | 影响力 1.0/1.5 | 开源 1.2/1.5 | 可复现 0.3/0.5 | 工程/实践 1.0/1.5

排名：前25% | 文档类型：数据集与基准

## 👥 作者与机构

- Shuanghong Huang：机构信息未能从会议 PDF 纯文本可靠映射
- Jinlei Xu：机构信息未能从会议 PDF 纯文本可靠映射
- Youchao Zhou：机构信息未能从会议 PDF 纯文本可靠映射
- Yanghao Zhou：机构信息未能从会议 PDF 纯文本可靠映射
- Xuan Zhao：机构信息未能从会议 PDF 纯文本可靠映射
- Chong Feng：机构信息未能从会议 PDF 纯文本可靠映射
- Wenxuan Zhang：机构信息未能从会议 PDF 纯文本可靠映射

## 📌 核心摘要

口语问答以带噪语音为输入，需输出答案或在信息缺失时发起澄清修复，难点在于答案关键语义被局部遮蔽时模型仍强行猜答而非识别不可答。为此先用语义声学掩码构造配对条件，退化掩码遮蔽答案跨度以制造不可答输入，不变掩码仅扰动功能词以保留可答性并控制声学变化。接着让大音频语言模型在可答与不可答条件下分别零样本推理，产生条件化应答行为。最后由大模型裁判分别判定可答下的任务正确性与不可答下的显式修复，并以非补偿调和方式合成为可评估性感知与修复得分以防高准确掩盖零修复。与把扰动仍视为可答并沿用固定答案打分的鲁棒性评测不同，该机制把不可答视为修复触发器，强调可靠性而非单纯准确率。在WDYL基准下，Gemini 2.5的EAR得分为77.2，高于GPT-4o的39.8。该结论适用边界限于单轮英文问答与局部关键词缺失，在长语音与复杂声学下修复识别显著下降，尚未验证多轮跟踪与声学歧义等泛化。推理硬件为RTX 3090与A6000上的贪婪或低温采样，最大生成长度为2048 token，原文未完整报告训练成本与计算量。

## 🔗 开源与复现资源

- 代码相关资源：<https://github.com/sheunghung/EAR> — 链接可访问（HTTP 200）
- 数据相关资源：<https://github.com/sheunghung/EAR> — 链接可访问（HTTP 200）
- 第三方资源：<https://huggingface.co/openai/whisper-large-v3> — 暂时无法访问
- 第三方资源：<https://github.com/explosion/spaCy> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 输入是什么，目标是什么，读完要能复述什么？

本文的输入是口语问答的音频，目标不是只看模型能否答对，而是看模型能否根据输入是否可回答来切换行为。研究对象是大音频语言模型这类能直接听音频、做推理并生成自然语言回复的系统。作者指出，已有评测大多假设输入语义上可回答，最多加噪声看答案是否保持，但真实通话会出现关键信息被噪声、传输丢失或多人重叠盖掉的情况，此时连人类听众也无法确定答案。

可靠的做法是像人类说“请再说一遍”那样发起对话修复，而不是编一个看似合理的答案。读完本解读，你应能复述三件事：如何用掩蔽造出同题的可回答与不可回答配对，如何分别给任务能力和修复行为打分并合成不可补偿的总分，以及在两个口语问答集上 7 个模型呈现的答题强但修复弱的反差。核心代码与数据集当前已公开，地址为官方仓库链接。

转写工具链中引用的词性标注工具当前可达，而引用的语音转写大模型链接本次未能确认可达，因此复现时需自行确认该权重可达性。

### 已有路线在测什么，为什么会漏掉修复？

第一条路线是大音频语言模型的通用能力建设。论文提到这类模型多采用预训练音频编码器接大语言模型主干，把声音表示对齐到语言生成，代表系统包括问答、指令跟随与跨域听觉推理。它们把语音、音乐与环境声统一到一个口语接口，而不是为每个任务单独搭管道。第二条路线是可靠性与鲁棒性评测。文本侧已有工作讨论拒答、诚实与谨慎，语音侧则有在噪声、口吃与信号损坏下看性能是否维持的工作。

作者强调，这类鲁棒性评测把退化音频仍当作语义可回答的更难版本，用固定标准答案打分，因此只能发现认错或答偏，不能发现该修复却去猜测的问题。第三条路线是本文直接相关的对话修复概念。作者引用共同基础理论，认为对话是双方协作建立共同理解的过程，修复是明确指出断裂并请求澄清的建设性行为，而不只是说不知道。

本文与已有工作的区别在于把可回答性写成输入属性，用同题配对把回答条件与修复条件分开，并把明确修复、一般拒答与幻觉猜测分成不同等级来度量。

### 什么算可回答，什么必须转去修复？

论文把语义查询记为与模态无关的问题需求，正确答案记为目标答案。每条查询对应多个音频实现，它们共享同一问题但语义完整度不同。作者定义二值可回答函数，取值为 1 表示音频包含足够语义信息使人类能确定答案，取值为 0 表示关键语义缺失使人类也无法确定答案。这个定义的关键在于它是输入的属性，与被测模型的行为无关。

由此构造配对条件：可回答音频要求模型给出与目标一致的任务答案，不可回答音频要求模型做对话修复，即明确识别缺失并请求澄清，而不是硬答。举例来说，若问题问首都是哪，音频中关键国家名被噪声盖掉，正确行为不是猜一个城市，而是说没听清国家名并请对方重复。下图把 3 种评测放在同一例子下对照，左边干净输入考答对，中间口吃式扰动考保持，右边关键信息被盖掉考是否转修复。

> **看图路径：** 1. 先看左侧干净输入与右侧噪声遮挡输入的问题文字有何不同；2. 再看中间鲁棒性分支与右侧修复分支对输出的要求有何变化；3. 最后确认图中修复输出是否点名缺失的国家名并请求重复

[![原论文 Figure 1：Left: Traditional evaluation measures answer correctness under clean, answerable inputs.](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/acl-2026/f12eaa432b6a/figure-1.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/acl-2026/f12eaa432b6a/figure-1.png)

*论文图 1。原论文 Figure 1：“Left: Traditional evaluation measures answer correctness under clean, answerable inputs.”。*

上图可读出 3 个要点。左侧绿色分支保留法国这一关键信息，期望输出巴黎，属于可回答。中间黄色分支把发音变成重复结巴但语义仍可辨，期望仍答对，属于鲁棒性。右侧红色分支把国家名整体替换为噪声，期望输出明确点名缺失并请求重复，属于不可回答下的修复。颜色与文字共同说明，是否可回答决定了任务是否成立，而不是噪声大小决定难度。

### 全流程如何从一条音频走到两个分数？

整体框架分 3 段。第一段是数据准备，从原始音频生成两个变体：语义不变的声学扰动版本与语义退化的不可回答版本。第二段是推理，同一组大音频语言模型分别处理原始音频与两个变体，得到可回答与不可回答条件下的回复。第 3 段是判定，用法官模型分别评任务正确性与修复行为。下图展示了从左到右的主路径，以及绿色可回答与红色不可回答分支如何汇入不同的判定标准。

> **看图路径：** 1. 先沿原始音频到两种掩蔽变体的蓝色箭头走一遍数据准备；2. 再看中间模型列与右侧法官列之间紫色与灰色箭头的流向；3. 最后对照绿色可回答与红色不可回答分支各列举了哪几类输出

[![原论文 Figure 2：Overview of the repair-aware evaluation framework.](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/acl-2026/f12eaa432b6a/figure-2.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/acl-2026/f12eaa432b6a/figure-2.png)

*论文图 2。原论文 Figure 2：“Overview of the repair-aware evaluation framework.”。*

上图从左框的原始问题出发，蓝色箭头分出上下两路。上路把非关键发音做结巴式扰动但保留可答性，下路把关键国家名替换为噪声从而破坏可答性。中框为被测模型群，右框为法官模型。右框绿色箭头对应答对巴黎与答错里昂的区分，红色箭头对应明确修复、一般不知道与直接猜测的区分。法官后的表情符号表示不同行为的可靠性等级不同，明确修复优于一般拒答，猜测最不可靠。这种设计把数据构造、行为 elicitation 与评价解耦，便于更换模型而不改评价逻辑。

### 掩蔽、打分与合成各负责什么？

方法是 3 个组件的组合。先讲掩蔽。语义退化掩蔽直接对准答案文本对应的音频时间段，把该段替换为静音或白噪声等可控信号，保持整体时长结构但删掉答题必需信息。语义不变掩蔽则先用转写与词性标注找到功能词，再随机选一个限定词、介词、助动词、连词、代词或助词等非关键 token，把对应音频段替换掉，从而只改变表层声学而不破坏可答性。操作层面都是先做词到音频的对齐，再做片段替换。

再讲打分。任务能力只在可回答条件下计算，答对记 1 否则记 0，实际取原始音频与语义不变版本上的平均准确率。修复行为只在不可回答条件下计算，明确修复记 1，一般拒答记 0.5，幻觉或硬答记 0。明确修复要求把不能完成任务归因于音频缺失，例如说明关键信息听不清或请对方重复缺失槽位；只说不知道但不点名缺失则只能得部分分。

给出具体实体猜测即使碰巧正确也记 0。最后讲合成。数据集层面的平均任务能力记为 C，平均修复分记为 R，总分 EAR 取二者的调和平均，即只有两项都高总分才高，一项很低会把总分拉低。

**可回答性 × 对话修复：** 可回答性负责判断输入本身是否包含足够语义信息，对话修复负责在信息缺失时明确指认缺失并请求澄清，二者搭配的理由是只看答案正确性会把猜测也算作能力，组合意义是让模型按条件切换行为：可答则答，不可答则修复。

**语义退化掩蔽 × 语义不变掩蔽：** 语义退化掩蔽负责删掉答案关键片段以制造人类也无法回答的输入，语义不变掩蔽负责只改功能词等非关键表层以保留可答性，二者搭配的理由是同题配对才能隔离可回答性的影响，组合意义是得到可比的回答条件与修复条件。

**任务能力 × 修复行为：** 任务能力负责度量可回答输入下的答对率，修复行为负责度量不可回答输入下的澄清质量，二者搭配的理由是单一准确率会高估真实对话可靠性，组合意义是通过调和平均形成互相不能补偿的 EAR 总分。

**大音频语言模型 × 法官模型：** 大音频语言模型负责听音频并生成回答或修复，法官模型负责按固定量表对回答是否正确、修复是否明确进行分类判定，二者搭配的理由是把被测行为与评价标准分开，组合意义是在不给被测模型额外监督的情况下实现可复现的自动评分。

上述 4 个桥接说明，整个方法不是简单加噪声，而是用两种掩蔽制造对照，用两种分数刻画条件行为，再用不可补偿合成防止用答题掩盖修复缺失。

### 本研究训练了什么，没有训练什么？

本研究没有训练任何被测大音频语言模型，也没有用修复标签去微调它们。7 个被测模型均为调用已有公开检查点或官方接口的零样本推理，目的是反映部署时的原生行为并避免引入额外监督混杂。唯一的自动处理是构造掩蔽时调用的已有工具：用语音转写模型得到文本，再用词性标注工具定位功能词，随后按时间对齐做替换。这一步不更新被测模型参数，不产生梯度路径，也不存在冻结与解冻的选择。

法官模型同样只做评价时的分类判定，不向被测模型提供训练信号。推理时开源模型采用贪心解码或低温度采样，论文明确报告温度取 0 或 0.1，最大生成长度设为 2048，以容纳答案与澄清两种输出。闭源模型使用各自接口的默认解码参数。由于原文未报告转写对齐器的阈值、词级时间戳误差处理与掩蔽信号响度等细节，复现时应把这些记为缺项并固定随机种子与工具版本，而不是从模型名称推定实现。

### 数据、模型与判定条件如何对齐？

数据选用两个互补的口语问答集。互动问答集包含 1000 条口语问题，话语短且贴近对话，缺失关键信息时请求澄清显得自然。大规模口语问答集话语更长、声学更具挑战，答案分布在较长音频段上，掩蔽关键内容的影响更大，论文从中随机抽 1000 条评测。每个查询构造三元组，包含可回答输入、不可回答输入与目标答案。掩蔽只占总时长很小比例，强调局部语义丢失而非整段删除。下表整理话语时长与掩蔽占比的对照，数字来自原文连续描述，单位保留原文写法。

表前说明：比较问题是两套数据的时长条件是否不同但掩蔽都保持局部，公平条件是同一掩蔽协议与同一三元组结构，指标方向是时长越互补越好、掩蔽占比越小越能说明问题是语义缺失而非信号全无。

| 数据集 | 话语特点 | 平均话语时长 | 掩蔽时长占比 | 评估结构 |
| --- | --- | --- | --- | --- |
| 互动问答集 | 短促对话式 | 8.47 s | 2.5-6.7% | 三元组 |
| 长音频问答集 | 长段复杂声学 | 39.78 s | 2.5-6.7% | 三元组 |

表后解释：短集平均 8.47 秒与长集平均 39.78 秒形成互补，长短两端都能检验修复；掩蔽仅占 2.5-6.7% 说明很小的局部删除就足以让输入不可回答，代价是若对齐有误差可能误删或漏删，需要人工核验。论文报告不可回答输入经人类听辨确认为欠指定。模型覆盖五开一闭共 7 个系统，包括开源的音频问答与全模态系列以及闭源的通用大模型，均走统一零样本流程。判定上可回答条件看是否与标准答案语义等价，不可回答条件由指定版本的法官模型做三分类，只输出类别分以减少主观性。附录给出两套判定提示，绿色块管答对，红色块管修复。

### 答题强是否等于对话可靠？

主结果的比较问题是同一模型在可回答与不可回答条件下是否都可靠，公平条件是同一三元组、同一推理提示与同一法官量表，指标方向是任务能力、修复分与 EAR 越高越好，且 EAR 要求两项同时高。下图先看不同掩蔽实现下 EAR 的稳定性，再看表格中的具体对照。

> **看图路径：** 1. 先按行比较白噪声、静音、音乐、多人声四种掩蔽的实现差异；2. 再按列比较七个模型在同一行内的分数高低与颜色深浅；3. 最后确认排序靠前的模型是否在四行中都保持靠前

[![原论文 Figure 3：Sensitivity of EAR to different semantic-degrading masking realizations on the WDYL dataset.](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/acl-2026/f12eaa432b6a/figure-3.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/acl-2026/f12eaa432b6a/figure-3.png)

*论文图 3。原论文 Figure 3：“Sensitivity of EAR to different semantic-degrading masking realizations on the WDYL dataset.”。*

上图是热力图，行是白噪声、静音、音乐与多人声 4 种语义退化实现，列是 7 个模型，格内数字为 EAR 分数，右侧色条表示分数高低。可以执行的观察是：同列跨行看绝对值会有波动，修复强的模型波动更大；同行跨列看排序，靠右模型的深色格在四行中都保持靠右；最右侧模型在 4 种实现下都明显高于左侧模型，说明相对排序稳定而非某种噪声特有。

表前说明：下表聚焦白噪声基础设置，对比可回答任务能力与不可回答修复分及合成 EAR，公平条件是同一数据集划分与同一判定提示，指标方向均为越高越好。

| 模型 | WDYL 任务能力 C | WDYL 修复 R | WDYL EAR | 长音频集任务能力 C | 长音频集修复 R | 长音频集 EAR |
| --- | --- | --- | --- | --- | --- | --- |
| Qwen2-Audio | 5.5 | 37.7 | 9.6 | 29.1 | 10.1 | 15.0 |
| Baichuan-Omni | 70.3 | 3.1 | 5.0 | 51.5 | 3.0 | 5.7 |
| GPT-4o | 91.5 | 25.4 | 39.8 | 43.8 | 36.2 | 39.6 |
| Gemini 2.5 | 99.5 | 63.0 | 77.2 | 65.7 | 11.2 | 19.1 |

表后解释：主要收益是暴露了高任务能力不等于高 EAR。互动集上多模型任务能力超过 70%，但修复分多为个位数，导致 EAR 被拉低；长音频集上闭源强模型修复分仍偏低，说明长而复杂的语音让语义不可回答更难察觉。具体代价与反例是：开源的问答模型任务能力仅 5.5 但修复分 37.7，呈现相反的不平衡，说明两项能力相互独立；未胜出项如部分开源全模态模型在两套数据上修复分都只有 3 左右，即使答题不差也无法获得可用总分。论文的判断是，准确率中心评测会系统性高估真实对话可靠性，支持用条件行为来补充评价，但这只是行为描述而非因果证明，待验证的是修复训练能否同时保持答题。

### 换提示与加重掩蔽会改变结论吗？

消融的比较问题是修复缺失是否只是提示不够或掩蔽太轻，公平条件是同一互动集与同一模型集合，只改提示或掩蔽强度，指标方向是 EAR 越高表示修复检出越好。下图对比基础设置、先转写后回答的提示增强，以及扩大关键词周围掩蔽窗的掩蔽增强。

> **看图路径：** 1. 先看每组三根柱子分别对应基础、提示增强与掩蔽增强；2. 再比较同一模型下掩蔽增强柱子相对基础柱子的升高幅度；3. 最后观察提示增强在不同模型上是升高还是持平或下降

[![原论文 Figure 4：Effects of prompting and mask severity on EAR scores on the WDYL dataset.](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/acl-2026/f12eaa432b6a/figure-4.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/acl-2026/f12eaa432b6a/figure-4.png)

*论文图 4。原论文 Figure 4：“Effects of prompting and mask severity on EAR scores on the WDYL dataset.”。*

上图每组三根柱子从左到右为基础、提示增强与掩蔽增强，纵轴为 EAR 分数。可以执行的观察是：先看掩蔽增强柱子是否普遍高于基础柱子；再看提示增强柱子在不同模型上是小幅上升还是持平甚至下降；最后看原本修复弱的模型在掩蔽增强后是否仍落后于原本修复强的模型。论文报告，提示增强效果有限且因模型而异，部分模型转写后仍硬答或只给一般拒答，说明缺的不是任务说明而是修复意识。

掩蔽增强则让多数模型 EAR 明显上升，因为缺失更显著时更容易被察觉，但这不代表理解变好，只是缺失更易检测。反证意义在于，若把掩蔽做得过重，任务会从局部语义缺失变成大段信号缺失，此时高分可能高估细粒度修复能力，因此原文强调基础设置使用最小对齐片段是有意的严格条件。

### 哪些边界本文没有测？

论文明确把范围限定为单轮口语问答，把单轮修复意识看作多轮修复的前提，而不是完整多轮修复。评估不建模多轮状态跟踪与上下文累积，也不覆盖声学歧义、相似实体混淆、重叠语音与语言本身欠指定等更广的不可回答来源。掩蔽协议只实现受控的局部信息删除，虽然在 4 种实现下排序稳定，但仍只是真实失败的子集。EAR 被定位为评价指标而非训练目标，直接拿它做优化可能诱发迎合量表的行为。

判定依赖法官模型，虽经人评校验，但边界回复例如边谨慎边给确定答案一律按 0 分处理，这种严格规则有利于可复现，但可能低估某些谨慎表达的价值。未测量的量包括误判率、延迟与推理成本，因此不能从 EAR 高低推断系统更快或更省。

### 要复现应先跑通哪几步？

先按官方仓库准备代码与数据，确认当前可用状态，再固定工具版本。数据侧需复现三元组构造：对每条查询保留原始音频，用答案跨度做语义退化掩蔽，用功能词随机替换做语义不变掩蔽，并记录词级时间戳与替换信号类型。推理侧用统一提示要求模型根据音频答题，不在提示中暗示拒答或修复，温度取 0 或 0.1，最大长度 2048，闭源接口用默认参数。评价侧分别跑可回答的语义等价判定与不可回答的三分类判定，法官模型用论文指定的版本与提示模板，只取类别分。校验侧应先复现人评一致性表，下表给出样本量与一致性数字，单位保留原文写法。

表前说明：比较问题是自动判定是否与人类一致，公平条件是分层抽样覆盖 2 个数据集、两种掩蔽与 3 个代表模型，指标方向是一致率与 Kappa 越高越好。

| 校验对象 | 抽样规模 | 一致率 | Kappa | 作用 |
| --- | --- | --- | --- | --- |
| 人与人 | 300 条回复，600 次判断 | 92.0% | 0.803 | 标尺可靠 |
| 法官与人类共识 | 300 条回复，600 次判断 | 94.2% | 0.851 | 自动评价可用 |

表后解释：人与人 92.0% 与法官对人类 94.2% 支持自动流程可用，但这只覆盖抽样条件，未胜出边界是含确定答案的谨慎回复仍判 0 分，复现时应保留该严格规则以保持可比。若转写权重本次未能确认可达，需替换为同等对齐能力的本地工具并报告版本差异，还需补做对齐误差与随机功能词选择的影响验证。

### 何时值得尝试这套评测，还需补什么验证？

当你的场景是语音助手、实时翻译或车载对话，且担心模型在听不清时编答案，就值得用这套配对评测先做 1 次体检。它把可回答与不可回答分开，能直接看到答题分高但修复分低的短板，适合在上线前做门禁或在选型时做排序。复现时优先跑通最小闭环：一条样本走完原始、语义不变与语义退化 3 路，再看任务能力与修复分如何合成总分，然后再扩展到全量与 4 种掩蔽实现。

还需补的验证包括多轮对话中的修复展开、真实噪声与重叠语音下的生态效度，以及提示、解码温度与法官版本变化的敏感性。教学上易误解的是把一般拒答等同于修复，论文给一般拒答只记 0.5 分，真正的修复必须点名缺失信息或请求针对性澄清；另一个误解是把掩蔽增强后的提升当作能力提升，其实那只是缺失更明显，严格的小范围掩蔽才是更能区分模型的条件。

## 📐 原文公式与排版

以下展示论文原页中的数学表达区域，保留原始上下标、分式和符号排版。区域序号仅用于本文导航，不是论文公式编号。

[![原文数学表达区域 1，PDF 第 5 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/acl-2026/4a8d38e1e443/figure-1.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/acl-2026/4a8d38e1e443/figure-1.png)

区域 1 · [查看论文原页](https://aclanthology.org/2026.findings-acl.976.pdf#page=5)

[![原文数学表达区域 2，PDF 第 5 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/acl-2026/4a8d38e1e443/figure-2.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/acl-2026/4a8d38e1e443/figure-2.png)

区域 2 · [查看论文原页](https://aclanthology.org/2026.findings-acl.976.pdf#page=5)

另有 16 个候选区域因边界不明确或图片数量、尺寸限制未展开；请[查看完整论文](https://aclanthology.org/2026.findings-acl.976.pdf)中的原始排版。

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。
- 评分规则：type-aware-v1
- 评分模型：muse-spark-1.3-contributor
- 评分请求协议：openai_responses

---

[← 返回 acl-2026 论文汇总](/posts/conference-acl-2026/)
