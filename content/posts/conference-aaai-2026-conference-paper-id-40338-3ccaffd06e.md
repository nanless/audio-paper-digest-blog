---
title: "SageLM: A Multi-aspect and Explainable Large Language Model for Speech Judgement"
date: 2026-09-12
draft: false
description: "针对语音到语音对话既要评语义又要评声学而级联评测会丢声学信息的问题，论文用大规模合成偏好数据加带解释理由的两阶段监督微调构建端到端语音裁判 SageLM，以 82.79% 的人类一致率超过级联与语音理解基线，代价是依赖合成语音分布与有限声学数据。"
tags: ["数据集", "指令微调", "模型评估", "可解释性", "语音对话系统"]
categories: ["aaai-2026 论文"]
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_paper_id: "conference:aaai:2026:conference-paper-id:40338"
paper_digest_source_kind: conference
paper_digest_conference_id: "aaai-2026"
paper_digest_conference_record_url: "https://ojs.aaai.org/index.php/AAAI/article/view/40338"
paper_digest_conference_pdf_url: "https://ojs.aaai.org/index.php/AAAI/article/view/40338/44299"
paper_digest_api_reader_contract: "beginner-researcher-v3"
paper_digest_api_reader_article_sha256: "deec60e7ea571fb9530596cefcd15aeb4560aba80cdd99c3a68e28544eceef20"
paper_digest_api_reader_plan_sha256: "bb427c19916d8f7f444cac0153c93af25b99335b22d51b35fb227cf510d94649"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings-v4"
paper_digest_api_reader_source_bindings_sha256: "8c3b5e221ed3570e3bfee073328a5d46fd2528f47b3a11682e7f217beb4f7d73"
paper_digest_api_reader_source_table_count: 3
paper_digest_api_reader_source_formula_count: 1
paper_digest_api_reader_structured_artifacts_sha256: "04f8ae5fdb181c9bf9b449fcfc62127d22d329937261d6f14316af26d9d9f47a"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity-v1"
paper_digest_api_reader_author_identity_sha256: "dc6fff8837213332b392f75bebcd71893a13a2d1e43af914ddb14b8ec5964355"
paper_digest_api_reader_author_count: 13
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity-v1"
paper_digest_api_reader_resource_identity_sha256: "6f8233a3384f8ac0e5cda6dad81c77884b85f048413c4fba7d7509de03e2edf5"
paper_digest_api_reader_resource_count: 4
paper_digest_api_reader_decision_projection: "api-reader-decision-projection-v2"
paper_digest_scoring_contract: "api-scoring-audit-v2"
paper_digest_taxonomy_contract: "paper-taxonomy-flat-tags-compat-v1"
paper_digest_taxonomy_selection_contract: "paper-taxonomy-selection-v1"
paper_digest_taxonomy_registry_version: "paper-taxonomy-v1"
paper_digest_taxonomy_registry_sha256: "15c82a567ce5a55dc1175684ed08b64c158558639d9c8fb822c9587ec32a8778"
paper_digest_taxonomy_concepts: [{"facet":"artifact","id":"artifact.dataset","label":"数据集"},{"facet":"method","id":"method.instruction-tuning","label":"指令微调"},{"facet":"research_focus","id":"research_focus.evaluation","label":"模型评估"},{"facet":"research_focus","id":"research_focus.interpretability","label":"可解释性"},{"facet":"task","id":"task.speech-dialogue","label":"语音对话系统"}]
paper_digest_primary_task: "语音对话系统"
paper_digest_primary_method: "指令微调"
paper_digest_score: 8.0
paper_digest_rank_bucket: "前25%"
paper_digest_document_type: "模型报告"
paper_digest_conference_structure: replayable-pdf-layout-v1
---

# 📄 既听内容又听语气：SageLM 如何端到端评判语音对话

> 英文题目：*SageLM: A Multi-aspect and Explainable Large Language Model for Speech Judgement*

> 会议身份：`conference:aaai:2026:conference-paper-id:40338`


> ✅ 来源为官方会议 PDF；可重放的表格、公式文本与 Figure 像素已按 PDF 抽取结果绑定，未成功恢复的结构不作推断。

> 会议来源：[官方记录](https://ojs.aaai.org/index.php/AAAI/article/view/40338) · [官方 PDF](https://ojs.aaai.org/index.php/AAAI/article/view/40338/44299)

标签：#数据集 #指令微调 #模型评估 #可解释性 #语音对话系统

评分：**8.0/10** | 创新 1.5/2 | 技术严谨 1.0/1.5 | 实验充分 1.2/1.5 | 清晰度 0.8/1 | 影响力 1.2/1.5 | 开源 1.0/1.5 | 可复现 0.3/0.5 | 工程/实践 1.0/1.5

排名：前25% | 文档类型：模型报告

## 👥 作者与机构

- Yuan Ge：机构信息未能从会议 PDF 纯文本可靠映射
- Junxiang Zhang：机构信息未能从会议 PDF 纯文本可靠映射
- Xiaoqian Liu：机构信息未能从会议 PDF 纯文本可靠映射
- Bei Li：机构信息未能从会议 PDF 纯文本可靠映射
- Xiangnan Ma：机构信息未能从会议 PDF 纯文本可靠映射
- Chenglong Wang：机构信息未能从会议 PDF 纯文本可靠映射
- Kaiyang Ye：机构信息未能从会议 PDF 纯文本可靠映射
- Yangfan Du：机构信息未能从会议 PDF 纯文本可靠映射
- Linfeng Zhang：机构信息未能从会议 PDF 纯文本可靠映射
- Yuxin Huang：机构信息未能从会议 PDF 纯文本可靠映射
- Tong Xiao：机构信息未能从会议 PDF 纯文本可靠映射
- Zhengtao Yu：机构信息未能从会议 PDF 纯文本可靠映射
- Jingbo Zhu：机构信息未能从会议 PDF 纯文本可靠映射

## 📌 核心摘要

该任务输入为文本查询与一对语音回答，输出真诚性等五个方面各自的胜负平标签与解释，难点在于同时判断语义正确性与情感语调等声学恰当性并保持理由一致。方法先从超反馈过滤合成三十一万级语义偏好语音对并改写对比理由，为裁判提供可学习的判断依据。接着围绕情感性别音色构建显式与隐式声学控制偏好数据，将语音指令遵循作为第五维度引入评价。然后采用两阶段含理由监督微调依次习得语义裁判与声学裁判能力，使后阶段在前阶段输出的推理格式上继续扩展声学判断。与基于规则奖励的群组相对策略优化相比，含理由监督微调强制模型先推理后判定，避免了奖励投机导致的理由与结论脱节。在AlpacaEval文本数据集的真实语音模型输出评测设置下，SageLM的准确率为81.01%，高于Whisper+GPT-4o级联基线的53.80%。该结论适用边界受限于英文合成偏好分布与短语音对，对真实对话韵律与长语音尚未验证，训练成本涉及使用8块NVIDIA A100-SXM4-80GB硬件进行全参数微调。

## 🔗 开源与复现资源

- 代码相关资源：<https://github.com/IronBeliever/SageLM> — 链接可访问（HTTP 200）
- 第三方资源：<https://github.com/2noise/ChatTTS> — 链接可访问（HTTP 200）
- 第三方资源：<https://platform.openai.com/docs/models/gpt-4o-mini-tts> → <https://developers.openai.com/api/docs/models/gpt-4o-mini-tts> — 链接可访问（HTTP 200）
预印本/扩展版链接未在会议页展示；会议版来源见页首官方记录与 PDF。
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 输入是什么，目标是什么，先保留哪些关键信息？

本文解读的对象是语音到语音大模型对话评价问题。输入是文本形式的用户查询加 1 对语音回应，目标读者是刚进入语音与语言模型交叉方向的研究生，目标是能复述 SageLM 的任务定义、数据构造、训练选择与实验条件。必须保留的信息包括 5 个评价方面、端到端直接处理语音、2 阶段训练顺序、人类一致率与基线差距、以及数据规模与硬件配置。输出是 1 篇按学习依赖展开的中文技术解读，不做超出原文的营销判断。

论文要解决的核心矛盾是人类评价准确但贵而慢，转写加文本评价便宜但丢失语调情感且会传播识别错误。举例来说，用户说自己中了彩票，文字内容正确但语气平淡与语气惊喜在人类听感中完全不同，前者只看文字无法区分。SageLM 因此被定位为可扩展的自动语音裁判，直接听语音并给出可解释的多方面比较结果。后续各节先讲任务与路线，再讲方法全景与组件计算，然后讲数据构造与训练推理，最后讲实验条件结果反证与复现要点。

### 已有路线在同输入同目标下差在哪里？

相关工作可按同输入同目标来对照。第一条路线是语音大模型本身，分为语音到语音与语音到文本两类，前者如 Moshi 与 Kimi-Audio 等支持语音输入输出，后者如 Qwen2-Audio 与 Qwen2.5-Omni 结合音频编码器与文本大模型做理解任务。它们与 SageLM 输入相近但目标不同，多数是生成回应而非评价回应，论文把它们作为裁判基线时发现直接提示并不能做好成对比较。

第二条路线是文本大模型评价，常用人类成对标注或大模型作裁判，前者有点评打分与成对偏好两种协议，后者用 GPT-4 等评价候选回答并关注偏差隐私与成本，开源工作则用指令微调训练评价专用模型如 PandaLM。这条路线目标相近但输入不同，因为它只能读文字。第 3 条路线是语音对话评价，基础语音能力用词错误率与平均意见分，音频理解用 MMAU 等基准，而语音到语音对话需要同时理解语义与副语言线索并控制说话风格。

论文指出人类评价是金标准但难以扩展，转写后评价会引入级联误差且忽略风格指令，因此需要端到端且多方面的语音裁判，这正是 SageLM 的定位。

### 语音对话裁判到底要判什么？

论文把语音对话裁判定义为成对比较任务。给定文本查询与两个语音回应，裁判模型要输出评价结果，其中包含 5 个独立方面的比较标签与文字解释。5 个方面是真实性、诚实性、有用性、指令遵循与语音指令遵循，每个方面的标签只能取胜负平 3 种，分别表示第一个回应更好、第二个回应更好或两者相当。需要特别说明的是查询用文本而不用语音，这是一个为公平而做的设计选择。

理由有两点，一是现有语音对话数据通常同时有文本与语音查询，直接用文本不增加额外负担，二是不同语音到语音模型训练时用的合成语音来源不同，若用语音查询会引入分布差异，用文本指令可以统一评价条件。这个定义把生成问题转化为可验证的离散判断问题，验证标签容易但生成高质量判断与一致解释并不容易。后续方法部分的监督与强化学习对比正是围绕这个生成与验证差距展开。

### SageLM 的方法全景如何一次走通？

SageLM 的全景可以沿一个样本走完。输入是文本查询加语音回应一与语音回应二，模型先通过语音理解与语言建模能力同时编码文字语义与声音声学特征，然后对 5 个方面分别比较，最后输出每个方面的胜负平标签与对比式解释。训练数据来自新构建的 SpeechFeedback，包含语义与声学两部分偏好标注，训练策略是先学语义再学声学的 2 阶段带理由监督微调。推理时对同一输入做 3 次采样并平均结果，解码温度与采样参数在所有模型间保持一致以保证可比。

下面的示意图把 3 条路线放在同一画面，顶部是人类听语音打分，中部是先转写再用文本模型评价，底部是 SageLM 直接听语音评价，阅读时重点看信息在何处丢失或保留。

> **看图路径：** 1. 先看顶部人类评价与中部转写加文本评价两条旧路径的输入输出与叉号标注；2. 再看底部 SageLM 同时接收文本查询与两段语音波形并输出五方面标签加理由；3. 对比三条路径在是否保留声学特征与是否端到端上的箭头走向差异

[![原论文 Figure 1：Recent speech-to-speech LLMs evaluation meth- ods rely on human annotations or cascaded pipelines.](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/aaai-2026/2d74d5787ec9/figure-1.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/aaai-2026/2d74d5787ec9/figure-1.png)

*论文图 1。原论文 Figure 1：“Recent speech-to-speech LLMs evaluation meth- ods rely on human annotations or cascaded pipelines.”。*

该图像素显示 3 段结构：i. 人类评价接收文本或语音查询加语音回应，由人员给出主观评分如 1~5，标注为 Expensive & Time consuming；ii.ASR 基线先经 ASR 得到文本回应再进入文本回应评价，右侧文本裁判如 GPT-4o 与 PandaLM 输出 Win / Lose / Tie 加可选理由，标注为 Ignore acoustic features & Error propagation；iii.SageLM 同时接收文本查询与两段原始语音波形，直接输出声学遵从真实性有用性指令遵从与诚实性 5 个堆叠面板，每个面板都包含胜负平与解释，底部标注为 End-to-end, Multi-aspect and Explainable。理解这张图就能抓住论文的方法主张，即不经过文字中转，直接在语音层面完成比较与解释。

### 五个方面与端到端结构如何分工？

SageLM 的组件分工首先体现在评价维度上。前 4 个语义维度沿用 UltraFeedback 的划分，分别考察指令遵循、真实性、诚实性与有用性，第 5 个语音指令遵循维度考察合成语音是否符合情感性别或特定音色等声学属性，这些属性可以是显式要求也可以是用户查询隐含的共情期待。端到端结构分工是语音编码与文本推理在同一模型内完成，避免转写模块与评价模块分离。形式化定义可用原文公式概括，先理解符号与输入再理解计算目标。

\[ER = J(Q, R1, R2)\]

该式中评价结果由裁判模型对查询与两个语音回应的函数得到，查询是文本指令，回应是语音，输出是评价结果集合。计算目标是对每个方面独立给出比较标签与解释，而不是只给一个总分。这种细粒度设计让语义错误与声学不符可以被分别定位。

**级联评测 × 端到端语音裁判：** 级联评测分工是先用自动语音识别把语音转写成文字，再用文本大模型判优劣，搭配理由是复用成熟文本裁判；端到端语音裁判分工是直接输入文本查询加两段语音回应并输出比较标签与理由，搭配理由是保留语调情感等声学证据，组合意义在于论文用后者替代前者以阻断转写误差传播并补上声学维度。

**语义偏好 × 声学偏好：** 语义偏好分工是判断有用性真实性诚实性与指令遵循等文字内容优劣，声学偏好分工是判断是否按要求或按隐含情绪呈现性别情感与卡通音色等声音属性，搭配理由是人类对话中说什么与怎么说不可分，组合意义是 SageLM 输出 5 个方面独立标签从而同时覆盖内容与表达。

初学者容易误以为语音裁判只是语音识别加文本裁判，实际上前者要听出高兴与悲伤的韵律差异、男女声差异与卡通音色差异，而后者转写后这些信息已丢失。论文因此坚持用文本查询加原始语音回应作为裁判输入，这是复现时必须保持的信息条件。

### 数据如何构造，模型如何训练与推理？

SpeechFeedback 的构造分为语义与声学两条流水线。语义部分从 UltraFeedback 的 64k 条指令出发，每条指令有 4 个大模型回应与 GPT-4 在 4 个维度的打分与理由，论文先过滤数学公式代码段与多语言提示并清理特殊字符以保证合成韵律自然，再用 6 个开源语音合成模型与一个商用模型合成语音，丢弃识别词错误率高或时长短于 0.2 s 的语音，把绝对打分转成成对胜负标签并用 Qwen2.5-32B-Instruct 把理由改写为对比形式，组合文本语音序列上限为 4,096 tokens。

声学部分围绕情感性别与音色 3 类说话风格控制与显式合成、显式对话、隐式对话 3 种任务格式组织，每类显式任务从 UltraFeedback 采样 1000 条指令，隐式任务用自指令方法从 Kimi-GenTest 整理并生成 500 条样本，每条样本包含一个正确标签与一个从错误标签集合随机采样的错误标签的语音对，并用大模型生成理由。

训练采用 2 阶段监督微调，超参数按原文交代为 8 卡 A100、3 轮、全参数微调、截断长度 4096、批量 16、学习率 1e-5、余弦调度预热比例 0.1 与 bf16 精度，强化学习对比组用组相对策略优化、1 轮、组大小 8、截断长度 8192 与相应采样参数。推理时所有模型统一用温度 0.95 与 top-p 0.7 等解码参数并做 3 次运行平均。

**标签监督 × 理由监督：** 标签监督分工是只教模型输出胜负平离散结论，理由监督分工是同时教模型生成由大模型改写或生成的对比式解释，搭配理由是评价需要先比较再结论的推理过程，组合意义是带理由的监督微调让结论与解释一致，避免只对结果奖励时出现的解释与结论矛盾。

**监督微调 × 规则奖励强化学习：** 监督微调分工是最大化参考输出序列的对数似然以模仿标签加理由，规则奖励强化学习分工是用准确率奖励加格式奖励通过组相对策略优化调整策略，搭配理由是二者都可用于离散判断且后者在可验证任务上曾有效，组合意义是论文通过预实验对比发现复杂对话评价更需要显式推理监督而非简单规则奖励。

**第一阶段语义学习 × 第二阶段声学学习：** 第一阶段语义学习分工是用大量语义偏好数据建立 4 个语义维度的比较能力与结构化输出格式，第二阶段声学学习分工是用少量声学偏好数据新增语音指令遵循维度，搭配理由是声学标注稀缺而语义数据丰富需课程式渐进扩展，组合意义是第二阶段在保留语义能力的同时补齐声学判断而不让声学训练冲掉语义基础。

需要指出原文未报告的内容是语音编码器参数是否冻结与梯度具体路径，解读时不从模型名称推定实现，只按证据说明监督来源是合成标注与大模型改写的理由，重置时机是 2 阶段顺序衔接。

### 实验条件如何保证比较公平？

实验要回答 3 个问题，语义判断能否对齐人类，声学判断能否补上级联方法缺失的能力，2 阶段训练是否必要。对照包括级联基线、语音到文本大模型直接提示基线与不同基座微调版本。级联基线先用 whisper-large-v3-turbo 转写再用 GPT-4o、PandaLM-7B 与 Qwen 系列评价，语音基线包括 Qwen2-Audio-Base 与指令版以及 Qwen2.5-Omni 的 3B 与 7B 版本，微调版本包括基于这 3 个基座的 2 阶段训练结果，其中基于 Qwen2.5-Omni-7B 的版本即 SageLM。数据集划分按原文是训练集 316,544 条语义加 4,270 条声学，测试集 728 条语义加 410 条声学且经人工核验标签顺序与人类偏好一致。

指标有两个，准确率指预测标签与真值完全一致，一致率按 PandaLM 规则完全一致记 1 完全相反记 0 其余记 0.5，结果在 3 个随机种子下平均。下面的整理表把数据规模问题先固定，避免把不同划分下的数字混为一谈。

表前比较问题是数据量是否足以支撑 2 阶段学习，公平条件是同一 SpeechFeedback 划分，指标方向是实例数越多覆盖越广，但声学数据天然稀少。

| 数据部分 | 指标含义 | 语义实例数 | 声学实例数 | 数据来源 |
| --- | --- | --- | --- | --- |
| 训练集 | 监督微调样本量 | 316,544 | 4,270 | 合成偏好标注 |
| 测试集 | 人工核验评测样本量 | 728 | 410 | 人工核验对齐人类偏好 |
| 总体 | 数据集总体规模 | 324,774 | — | SpeechFeedback |

表后解释是语义训练样本充足而声学训练样本仅 4,270 条，这正是 2 阶段课程设计的直接原因，代价是声学泛化更依赖合成语音分布，若换真实语音到语音模型输出需另做分布外验证。未评测边界是原文未给出长语音超过截断长度时的处理细节，复现时需记录截断与丢弃规则。

### 主结果在什么条件下支持什么判断？

主结果按语义与声学分别报告。语义上转写加 GPT-4o 是强基线，平均准确率与平均一致率较高，但不能评价声学，语音到文本模型直接提示声学评价平均准确率仅 around 40%，Qwen2-Audio-Base 因缺乏指令微调在 82% 情况下不能遵循任务指令。SageLM 在人类标注测试集上达到 82.79% 的人类一致率，较级联基线高至少 7.42%，较语音基线高至少 26.20%，声学上 SageLM 在情感性别音色隐式情感与混合维度全面抬升，而基线语音模型准确率同样偏低。

分布外验证用 AlpacaEval 经 VoiceBench 比较 Kimi-Audio 与 Qwen2.5-Omni，SageLM 比转写加 GPT-4o 一致率高 18.67%、准确率高 27.21%，论文解释是转写对 Kimi-Audio 的语速韵律误差大并使文本裁判偏向另一模型，而端到端可直接捕获语义内容。回应长度分析显示合并长度增加时与人类或 GPT-4o 的一致率轻微下降但仍维持约 80%。

表前比较问题是在可运行策略中谁更接近人类，公平条件是同一人类核验测试集与相同解码参数，指标方向是一致率与准确率越高越好。

| 评价场景 | 指标 | 最强可运行基线 | SageLM | 差距含义 |
| --- | --- | --- | --- | --- |
| 语义四方面平均 | 一致率与准确率 | 转写加 GPT-4o 平均一致率 75.37% 与平均准确率 61.31% | 一致率 82.79% | 较级联高至少 7.42% |
| 语音模型直接评价 | 声学与语义准确率 | 平均准确率 around 40% | 显著更高并补齐声学维度 | 较语音基线高至少 26.20% |
| 真实模型输出分布外 | 一致率与准确率 | 转写加 GPT-4o | SageLM 更高 18.67% 与 27.21% | 支持端到端减少误差传播 |

表后解释是主要收益来自同时保留声学证据与带理由监督，代价是需要合成数据与 2 阶段训练成本，未胜出项是小参数转写加 Omni 版本因参数与指令遵循不足表现较差，负结果是仅做语义阶段会损伤声学表现，因此不能省略第二阶段。

下图横轴为合并回应长度区间从 10s 到 100s，纵轴为一致率从 0.75 到 0.9 以上，两条折线分别对应与人类与 GPT-4o 的一致性，可用于判断长输入是否导致评价失效，阅读时先看横轴分段再看两条线的相对位置与覆盖范围。

> **看图路径：** 1. 先确认横轴是两段回应合并长度区间，纵轴是一致率，图例区分与人类一致与与 GPT-4o 一致；2. 再沿横轴从左向右看两条折线是否整体轻微下移但仍维持在 0.78 以上；3. 对比短区间与长区间波动幅度，判断长输入是否只是小幅增加难度而非失效

[![原论文 Figure 5：Agreement vs. Combined responses pairs length.](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/aaai-2026/2d74d5787ec9/figure-5.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/aaai-2026/2d74d5787ec9/figure-5.png)

*论文图 5。原论文 Figure 5：“Agreement vs. Combined responses pairs length.”。*

该图像素显示纵轴为 Agreement 约 0.75 至 0.9 以上，横轴为 10s 至 100s 区间，绿色方块线为 Human 一致率仅覆盖 10s 至 60s 区间且在 20s 处高于 GPT-4o、在 30s 处低于 GPT-4o，红色圆圈线为 GPT-4o 一致率贯穿全部 10s 至 100s 区间且在 70s 与 90s 处出现低谷，两条线均在 0.78 以上波动且长区间未崩塌。论文报告的支持判断是长度增加只带来轻微下降，限制是该分析长区间样本有限且主要依赖 GPT-4o 标注而非全量人类标注，因此不能推广为任意超长对话都成立。

### 强化学习与监督微调谁更适合做裁判？

论文用预实验对比组相对策略优化、只学标签的监督微调与学标签加理由的监督微调。训练数据从 4k 扩展到 24k 乘以 4 个方面，观察打分准确率、比较准确率与一致率。打分准确率要求精确打出 1 至 5 分，组相对策略优化在此略优于只学标签的监督微调，但打分过于严格连人类也难以精确。比较准确率与一致率更符合人类偏好且更易标注，在这两项上监督微调与强化学习相当或略优，而加入理由的监督微调全面居上。

人工抽查 100 例发现强化学习组 39% 出现解释与最终分数矛盾，说明规则奖励只约束格式与分数接近度而未监督推理过程，容易出现奖励投机与解释不一致。下面的消融整理把推理一致性这一失败条件单独列出。

表前比较问题是不同训练目标是否带来可部署的判断质量差异，公平条件是同一数据量阶梯与一轮训练等设置，指标方向是比较一致率越高且解释矛盾率越低越好。

| 训练策略 | 监督信号 | 比较一致性表现 | 解释与结论一致性 | 适用条件 |
| --- | --- | --- | --- | --- |
| 组相对策略优化 | 规则准确率加格式奖励 | 比较指标与只学标签相当 | 39% 样本解释与分数矛盾 | 可验证但生成复杂的任务仍不足 |
| 只学标签监督微调 | 正确标签 | 比较指标略优于强化学习 | 未显式优化推理过程 | 简单格式学习可用 |
| 学标签加理由监督微调 | 标签加对比式理由 | 三指标中最好 | 人评一致率 90.89% | 复杂评价任务推荐 |

表后解释是带理由监督迫使模型先推理再结论从而对齐是什么与为什么，代价是需要大模型生成或改写理由并增加训练序列长度，未胜出项是纯规则强化学习在该任务上未显示优势，反例是它在打分准确率上的小优并不能转化为更可靠的裁判。

图前导读说明下图为 3 条训练曲线随数据量变化，重点比较红色带理由曲线是否在右侧两块子图稳定领先，这是选择 2 阶段都用带理由监督的直接依据。

> **看图路径：** 1. 先确认横轴是训练数据量从 4k 到 24k 乘以四个方面，纵轴三块子图分别为打分准确率比较准确率与一致率；2. 再对比绿色组相对策略优化与橙色只学标签与红色学标签加理由三条折线的相对位置；3. 观察红色折线在比较准确率与一致率上是否随数据量稳定居上

[![原论文 Figure 3：Preliminary: Reinforcement Learning versus Su- pervised Fine-Tuning on three evaluation metrics…](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/aaai-2026/2d74d5787ec9/figure-3.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/aaai-2026/2d74d5787ec9/figure-3.png)

*论文图 3。原论文 Figure 3：“Preliminary: Reinforcement Learning versus Su- pervised Fine-Tuning on three evaluation metrics while training data scaling up (4k∼24k × 4 aspects).”。*

该图像素显示左中右三块子图横轴均为 4 到 24，左侧打分准确率三线交织，中间比较准确率与右侧一致率红色菱形线明显居上，橙色方块线次之，绿色圆圈线在右侧几乎走平。支持的判断是理由监督随数据量扩展收益更稳定，可能待验证的是更大数据量下强化学习是否会反超，原文未报告因此不做推测。

另一组消融是 2 阶段影响，图前导读说明下图用 4 组柱子对比原始模型只做第一阶段两种方式与 2 阶段全量，左侧为语义右侧为声学，可判断第一阶段是否损伤声学。

> **看图路径：** 1. 先看图例区分原始模型只做第一阶段强化学习只做第一阶段监督微调与两阶段监督微调四组柱子；2. 再看左侧两组语义指标与右侧两组声学指标的柱高变化方向是否一致；3. 重点观察只做第一阶段时声学柱是否下降而补第二阶段后声学柱是否大幅抬升

[![原论文 Figure 4：Analysis of the impact of stage1 semantic evalua- tion training and stage2 acoustic evaluation…](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/aaai-2026/2d74d5787ec9/figure-4.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/aaai-2026/2d74d5787ec9/figure-4.png)

*论文图 4。原论文 Figure 4：“Analysis of the impact of stage1 semantic evalua- tion training and stage2 acoustic evaluation training.”。*

该图像素显示语义准确率与一致率从原始约 36.5% 与 54.5% 经第一阶段抬升到 70.6% 与 82% 左右，2 阶段保持约 69.9% 与 81.9%，声学准确率从 37.8% 经第一阶段跌到 28.3% 与 30%，再经第二阶段跃升到 93.4%，声学一致率从 51.7% 经第一阶段小幅到 57% 左右再跃升到 96.6%。支持的判断是第一阶段无论用强化学习还是监督微调都会提升语义但损伤声学，第二阶段同时混入语义与声学数据从而保留语义并大幅修复声学，限制是声学测试仍以合成风格为主。

### 还有哪些边界与未验证的推测？

论文直接报告的局限包括合成数据依赖、声学数据量少与长输入轻微下降。有限解释是转写误差偏向某一模型的案例分析，支持端到端必要性但仅基于 Kimi-Audio 与 Qwen2.5-Omni 的一组对比，不能推广为所有语速口音都成立。未验证推测是理由监督是否在任意基座与任意语言都有效，原文只验证 Qwen2-Audio 指令版与 Qwen2.5-Omni 的 3B 与 7B，未测量误判率延迟与推理成本，因此不能承诺部署延迟或成本改善。

训练资源只报告 8 卡 A100 与轮数批量等，推理开销输出帧率与实际延迟分别缺失，总体趋势不等于每组每步都成立。相关性不等于因果，例如声学分数高可能同时来自合成语音清晰与文本内容简单，不能单独归因于声学理解。复现时应把缺项记为待补验证，而不是当作技术错误。

### 复现先做什么，需要哪些可运行条件？

复现先做数据与环境固定。代码当前可用，地址为官方仓库，论文同时给出预印本可下载，第三方语音合成与商用接口仅作为数据构造来源引用，不代表复现必须调用同一商用服务。第一步按原文过滤规则清洗 UltraFeedback 并用本地可用合成模型生成语音对，记录词错误率过滤阈值与 0.2 秒时长过滤，文本语音合并序列上限 4096 不可省略。第二步用大模型生成对比式理由并人工抽查标签顺序，测试集必须保留 728 条语义与 410 条声学的人工核验。

第三步先跑第一阶段语义监督微调再跑第二阶段混合微调，超参数从学习率 1e-5、批量 16、3 轮、余弦预热 0.1 开始，推理统一温度 0.95 与 3 次种子平均。区分代码开源、权重下载与系统可运行，原文给出项目页与训练细节但未承诺一键可运行，复现报告应写清本次未能确认可达的环节。若资源不足，可先用 3B 基座验证趋势，但最强数字对应 7B 版本，不可混用模型列。

### 何时值得尝试 SageLM，何时仍用旧路线？

当评价对象是语音到语音对话且需要在乎语气情感性别与音色是否跟随指令时，值得尝试端到端语音裁判，因为级联路线天然看不见这些信息且转写错误会传导。当只需要评价文字内容且语音清晰、转写词错误率可忽略时，转写加文本大模型仍是成本更低的可运行选择。当数据只有少量声学标注时，可借鉴先语义后声学的 2 阶段课程，但要补真实模型输出的分布外验证与长语音分段策略。

常见误解是把一致率高当作裁判永远正确，实际上一致率是在特定测试分布与特定长度区间下与人类多数偏好的一致程度，换分布换口音换风格都需重测。另一个误解是把带理由输出当作因果证明，理由是模型生成的对比解释，其与结论一致率高不等于推理过程完全可信，关键决策仍需人工抽查。

收束一句话，SageLM 的价值在于用合成偏好加理由监督补齐了语音裁判缺失的声学维度与可解释性，其边界在于合成分布与有限声学覆盖，复现与应用都应围绕这两点补验证。

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。
- 评分规则：type-aware-v1
- 评分模型：muse-spark-1.3-contributor
- 评分请求协议：openai_responses

---

[← 返回 aaai-2026 论文汇总](/posts/conference-aaai-2026/)
