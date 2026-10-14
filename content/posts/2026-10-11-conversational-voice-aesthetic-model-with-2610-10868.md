---
title: "Conversational Voice Aesthetic Model with Reinforcement Learning from Human Listeners"
date: 2026-10-11
draft: false
tags: [语音属性识别, 强化学习, 语音大模型, 人类参与评测]
categories: [论文速递]
description: "论文用上下文加回应语音预测九个审美标签，先在合成标注上监督微调学格式与描述，再用约 10 人投票的分布奖励做 GRPO 对齐，主证据是感知场平均宏 F1 达 50.1% 超过人类单人对多数人的 43.5%，代价是需要工具测量辅助与两阶段训练。"
hiddenInHomeList: true
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_arxiv_id: "2610.10868"
paper_digest_workbench_contract: "researcher-workbench-v1"
paper_digest_reader_title: "会话语音审美：用人类听感对齐语音描述模型"
paper_digest_original_title: "Conversational Voice Aesthetic Model with Reinforcement Learning from Human Listeners"
paper_digest_arxiv_version: 1
paper_digest_arxiv_versioned_id: "2610.10868v1"
paper_digest_arxiv_abs_url: "https://arxiv.org/abs/2610.10868v1"
paper_digest_arxiv_pdf_url: "https://arxiv.org/pdf/2610.10868v1.pdf"
paper_digest_primary_task: "语音属性识别"
paper_digest_tags_contract: "paper-tag-flat-tags-v2"
paper_digest_tags_selection_contract: "paper-tag-selection-v2"
paper_digest_tags_registry_version: "paper-tag-catalog-v2"
paper_digest_tags_registry_sha256: "0a0847314ab2059d95efac33376414498e598a1f02a1486869bee0efc481d1f7"
paper_digest_tags_concepts: [{"facet":"task","id":"task.speech-attributes","label":"语音属性识别"},{"facet":"method","id":"method.reinforcement","label":"强化学习"},{"facet":"model_family","id":"model_family.speech","label":"语音大模型"},{"facet":"method","id":"method.human-evaluation","label":"人类参与评测"}]
paper_digest_primary_method: "强化学习"
paper_digest_score: 7.0
paper_digest_rank_bucket: "前50%"
paper_digest_document_type: "模型报告"
paper_digest_one_sentence: "论文用上下文加回应语音预测九个审美标签，先在合成标注上监督微调学格式与描述，再用约 10 人投票的分布奖励做 GRPO 对齐，主证据是感知场平均宏 F1 达 50.1% 超过人类单人对多数人的 43.5%，代价是需要工具测量辅助与两阶段训练。"
paper_digest_authors: [{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Xilin Jiang"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Shun Zhang"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Tejas Jayashankar"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Yinghao Aaron Li"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Osama Hanna"}]
paper_digest_abstract_sha256: "1eabb6a152c1b6479754ab9e63b7538600ffeabaeac7bfc9f811f7f4556de9d1"
paper_digest_sidecars: {"citation.bib":{"sha256":"099c16847044626cff1c9642ca6dedf05997e3b65c368e2108844292d7ac405c","url":"/audio-paper-digest-blog/data/papers/2026-10-11/2610-10868/citation.bib"},"citation.json":{"sha256":"898968f1b9de155900dc7a92fdf3843e10f289238d13424399c71cc918c47126","url":"/audio-paper-digest-blog/data/papers/2026-10-11/2610-10868/citation.json"},"citation.ris":{"sha256":"34de7276283edf5f12ffba7287ce42e172768f37d9b9e9fda3f33510f632ad40","url":"/audio-paper-digest-blog/data/papers/2026-10-11/2610-10868/citation.ris"},"rethink-context.json":{"contract":"paper-research-context-v2","sha256":"3f6d9ddc3268bbc0b12186c180ae61cceab1186a45d44a5287cff0487794219f","url":"/audio-paper-digest-blog/data/papers/2026-10-11/2610-10868/rethink-context.json"}}
paper_digest_api_reader_contract: "beginner-researcher-v3"
paper_digest_api_reader_article_sha256: "e81b2a0e4ac3fe370ee6be82f80ef546c4c01dfbc96a08935a6f3b6d6258771d"
paper_digest_api_reader_plan_sha256: "446d2b417420da618fc551f2c76144e08383b36736cceff4cc2b96543926fc0a"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings-v4"
paper_digest_api_reader_source_bindings_sha256: "4b86a83cad1bc545c7afa5acbc65a5e34a6551c1a130caddada5e323f831a7d0"
paper_digest_api_reader_source_table_count: 4
paper_digest_api_reader_source_formula_count: 2
paper_digest_api_reader_structured_artifacts_sha256: "1f013d37a01a6b7e7ca68e4cdbd044dbc347b3472cbadc93439579dc2461b232"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity-v1"
paper_digest_api_reader_author_identity_sha256: "47fec501ce21e37ab57675c269c8475afb30dcb327546f4dd2bf277c5abbdc9a"
paper_digest_api_reader_author_count: 5
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity-v1"
paper_digest_api_reader_resource_identity_sha256: "a2f944184d1b42282733f02bd0788ddd1200035a28fccf061cb106a9e1c137ef"
paper_digest_api_reader_resource_count: 0
paper_digest_api_reader_figure_persistence: "ephemeral-no-persisted-figure-assets-v1"
paper_digest_api_reader_decision_projection: "api-reader-decision-projection-v2"
---

# 📄 会话语音审美：用人类听感对齐语音描述模型

> 英文题目：*[Conversational Voice Aesthetic Model with Reinforcement Learning from Human Listeners](https://arxiv.org/abs/2610.10868v1)*

> 标签：#语音属性识别 | #强化学习 | #语音大模型 | #人类参与评测
>
> 评分：**7.0/10** | 创新 1.5/2 | 技术严谨 1.2/1.5 | 实验充分 1.2/1.5 | 清晰度 0.8/1 | 影响力 1/1.5 | 开源 0/1.5 | 可复现 0.3/0.5 | 工程/实践 1/1.5


## 👥 作者与机构

- Xilin Jiang：机构信息未在 arXiv HTML 中可靠披露
- Shun Zhang：机构信息未在 arXiv HTML 中可靠披露
- Tejas Jayashankar：机构信息未在 arXiv HTML 中可靠披露
- Yinghao Aaron Li：机构信息未在 arXiv HTML 中可靠披露
- Osama Hanna：机构信息未在 arXiv HTML 中可靠披露

## 📌 核心摘要

会话语音美学模型（Conversational Voice Aesthetic Model，CVAM）要解决的问题是，在给定上文语音和回应语音时，用自然语言和结构化标签描述回应语音的美学特征，其中情感与表达方式高度主观且没有唯一正确答案。模型输入上下文音频与回应音频，输出包含依据的描述和9个类别标签，覆盖性别、音高高度、音高变化、语速、节奏、情感、唤醒度、温暖度与自信度。数据准备先用工具测得客观音高语速标签与证据日志，再由Gemini 3.1 Pro结合上下文与回应音频写出情感与表达方式的描述和标签，合并成3万条合成样本的完整JSON。监督微调在该3万条合成样本上训练Qwen2.5-Omni的LoRA适配器，学会输出格式与美学描述，得到的SFT策略作为强化学习的起点与参照策略。组相对策略优化在1.5k条人类标注样本上对每输入采样16条JSON预测，用前向KL分布奖励比较人类约10票的投票分布与组内标签频率，重点更新四个感知字段以对齐投票分布。与不看上下文的单句评价方法不同，该工作把上下文作为判断情感与表达方式的必要条件，并对真实语音与克隆、设计合成语音采用同一标准。在1.5k条测试回应、人类多数投票为参照的评测中，前向KL分布奖励的CVAM在四个感知字段平均准确率为69.6%、宏F1为50.1%，超过Gemini 3.1 Pro的60.2%与44.2%，也超过单人对剩余多数的60.8%与43.5%。真实自发语音和稀有类别仍是失败较多的范围，论文报告了2×8与4×8 A100训练配置，但未披露完整训练时长与推理部署成本。

## 🔗 开源与复现资源

本次未形成可展示的已核验资源记录，开放状态尚未核实。

可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 为什么要在对话里评价声音本身

这篇论文要解决的不是语音转文字准不准，而是给定一段对话上下文和紧接着的一段回应语音，能否像人类听众那样描述这段回应的声音好不好、合不合适。输入是两段音频，上 1 位说话人的上下文和目标说话人的回应，长度都限制在 3 到 30 秒。输出是一份结构化描述，包含说话人性别、音高、语速、情绪、表达 5 个方面，共 9 个类别标签，每个方面还附带一段指出显著时刻的文字描述。

必须保留的信息有两个，一是声音的物理可测部分，二是声音在当前对话里听起来是否温暖、自信、情绪是否恰当。论文的动机是会话智能体越来越常用合成语音，如果只看文字内容，会漏掉语气冷漠、节奏突兀这类真正影响听感的问题。已有语音质量模型多评价孤立语句，没有用上下文，也难以同时公平评价真实录音和合成语音。理解这一点，才能明白后文为什么坚持用带上下文的输入，以及为什么把主观感知单独交给人类投票来定义。

### 已有路线在输入和监督上差在哪里

论文把相关工作分成两条线。第一条是从信号指标到神经预测器，早期用感知加权的信号处理评估声学信号，例如 PESQ 和 POLQA，后来出现训练预测平均意见分的 MOSNet、DNSMOS、UTMOSv2，以及扩展到多个审美维度的 Audiobox-Aesthetics，它们的输入多是单句语音，目标是打分，监督来自人类打分均值，运行阶段也是单句打分。第二条是语音大语言模型做评价，例如 AudioJudge、WavReward、SpeechJudge 和 GSRM，有的能给出理由，输入仍多为无上下文的单句，目标是判断属性或偏好，监督来自模型或人类偏好标注。

本文任务与它们在三处不同，输入多了上下文音频，目标是同时输出描述加 9 个标签，监督对客观场用工具测量、对感知场用人群投票。在相同输入、目标、监督和运行阶段下比较才公平，因此论文不能把单句质量分的胜负直接套到对话审美上，只能说前人方法没有覆盖上下文相关的情绪与表达判断，这正是本文要补的位置。

### 主观标签没有真值时什么算对

难点在于情绪和表达这类感知场天生主观，单个听众会有偏置和不一致，多人放在一起又可能形成不同但都合理的分布。如果只取一个多数标签做监督微调，就会丢掉投票分歧的信息。论文因此把正确定义为与人群一致，一是用与约 10 人多数投票标签的准确率和宏 F1 衡量，二是在训练时直接用投票分布做奖励。

数据来自 CANDOR 这个自然英语对话语料，经过去除回声词和语义过滤，去掉政治、种族、宗教、个人信息、问卷物流、报酬等敏感话题，得到 1 万以上加 0.5 千训练轮次和 0.5 千测试轮次，且说话人与内容不重叠。每个真实回应再用 Qwen3-TTS 配出两个同文本合成版本，一个是声音克隆，用同一说话人另一轮次做注册，风格多为中性，一个是声音设计，由 Qwen3-Omni 按上下文、性别年龄和均匀独立采样的情绪、唤醒、温暖、自信写提示词生成，用来补充稀有情绪和表达。

人类标注只做标签不写描述，在 1.5 千训练轮和 1.5 千测试轮上两两对比 3 个版本，每对 5 人，每版出现两次，剔除无效后每回应约 10 票，测试平均 9.78 票、训练平均 9.71 票，中位数都是 10，总计每场约 14664 和 14566 个人次判断。结论成立的条件是这种多数投票加分布的评价方式被接受，如果换成单人金标准，排序会变。

### 模型从两段语音到 JSON 的总流程

模型基座是 7,000,000,000 参数的 Qwen2.5-Omni，一个有较强语音理解能力的语音大语言模型。总体流程是先准备数据，再做 2 阶段训练。准备阶段对客观场用 Praat 提基频、用 faster-whisper-large-v3 转写、用 NeMo 强制对齐加 CMUdict 算音素速率，得到标签和元音级证据日志；对感知场先用 Gemini 3.1 Pro 写合成描述和标签做 30,000 样本监督数据，人类只标 1500 样本标签做强化学习。训练阶段先监督微调学格式与描述，再用 GRPO 让人群投票对齐标签。

推理时默认把工具测得的客观标签和证据日志也作为输入的一部分，客观预测因此近乎平凡，论文还对比了给或不给工具时感知预测的变化。下图展示了输入输出的对应关系，读图时把系统提示、上下文、回应 3 路输入与底部 JSON 的字段对应起来看。

读图说明：这张总览图把提示、两路音频和输出格式画在了一起，适合对照后文 9 个标签的含义理解数据流向。

> **看图路径：** 1. 先看顶部输入：左侧系统提示与证据日志，中部蓝色上下文波形，右侧红色回应波形；2. 再看中部 CVAM 方框标注的基座与训练方式；3. 最后看底部 JSON 输出包含的五个大字段与九个标签取值

[![原论文 Figure 2：CVAM receives context & response speech and outputs JSON descriptions and labels for the…](https://arxiv.org/html/2610.10868v1/model.png)](https://arxiv.org/html/2610.10868v1/model.png)

*论文图 2。原论文 Figure 2:：“CVAM receives context & response speech and outputs JSON descriptions and labels for the response’s gender, pitch, pacing, emotion, and delivery.”。*

图中上方左侧绿框写明角色是专家声音分析师，只评价声音不评价文字，每轴先定性、再举 2 到 3 个显著时刻、再预测标签，并给定元音级音高、强度、时长证据日志；中部蓝色条是 CVAM 本体，注明从 Qwen2.5-Omni 经监督微调加 GRPO 得到；右侧画出 2 人对话与蓝红波形区分上下文和回应；下方 JSON 列出性别 1 个、音高 2 个、语速 2 个、情绪 2 个、表达 2 个共 9 个标签及每场一段描述，颜色区分自报性别加工具客观标签、大模型写的描述、人类或大模型给的感知标签 3 种来源。看懂这个分色，就能明白监督信号分别从哪里来。

### 九个标签具体指什么怎么切分

9 个标签分四场加性别。性别来自说话人自报。音高场有两个标签，音高高度按平均基频在 100、150、200、250 赫兹处切成很低到很高五档，音高变化按基频标准差换算半音后在 2、3、4、5 处切成很平稳到很起伏五档。语速场也有两个，语速按语音段内每秒音素数在 7、9、11、13 处切成很慢到很快五档，节奏按 1 秒窗 0.25 秒步长的局部音素速率标准差在 2、3、4、5 处切成很规律到很多变五档。情绪场两个，主要情绪在生气、厌恶、害怕、高兴、悲伤、惊讶、中性七选一，唤醒度在平静、中等、强烈三选一。

表达场两个，温暖度在冷漠、中等、温暖三选一，自信度在犹豫、中等、自信三选一。每个场还要求一段描述，对客观场要能解释工具标签，对感知场要在上下文加回应音频下联合给出描述和标签。

**客观场 × 感知场：** 客观场指音高和语速，可以用 Praat 基频、强制对齐音素速率等工具测量并按阈值切分，分工是提供确定性标签；感知场指情绪和表达，包含主要情绪、唤醒度、温暖度、自信度，本质主观没有唯一真值，分工是需要多人投票刻画分布。组合后模型对前者几乎直接复述工具结果，对后者则需要学习人类多数与少数判断的覆盖平衡。

初学者容易把音高变化和语速节奏混淆，前者看基频曲线上下波动，后者看音素快慢随时间是否均匀。举例说明，同样一句话用平稳高音快速读出，高度可能是高、变化是平稳、速度是快、节奏是规律，这四者是正交的，需要分开判断。

**上下文音频 × 回应音频：** 上下文音频指目标回应之前一位说话人的 3 到 30 秒语音，作用是提供判断情绪与表达是否得体的对话依据；回应音频指要描述的目标说话人语音，作用是提供音色、韵律和情绪表达的直接证据。两者一起输入是因为脱离上下文无法判断温暖或自信是否合适，组合后模型做的是情境化的回应语音评价而非孤立语句评价。

工具测量默认会喂给模型，所以客观题近乎开卷，论文的真正考验在感知场。

### 工具测量和合成描述如何生成

客观测量链是先用 Praat 提每帧基频，再用语音识别得到文字，再用强制对齐得到音素边界，最后按上述阈值映射为标签，同时保留元音级测量作为证据日志。合成标注用 Gemini 3.1 Pro 每个样本调四次，音高和语速调用给回应音频加工具测量，要求描述能解释客观标签，情绪和表达调用给上下文加回应音频且不给工具测量以免引入偏置，要求联合产生描述和感知标签，最后合并成统一 JSON。这种分工是为了让客观描述有据可依，让感知标注不受基频数字干扰。

人类标注阶段不写描述，只在相同上下文、相同文本、不同风格的两版回应之间各自打标签，保证比较的是声音实现而非文字内容。声音克隆多为中性，声音设计因均匀采样情绪与表达而覆盖更多稀有类，这解释了后文标签分布图中合成版在稀有情绪上柱更高的原因。

### 两阶段训练各自更新什么

2 阶段都只调思考器全部线性层上的 LoRA 适配器，秩 32、缩放系数 64，冻结音频编码器和对齐器并关闭发音头，用 bfloat16 训练一轮，余弦退火加 5% 热身，监督阶段学习率 0.0001 用 2 乘 8 卡，强化阶段学习率 0.00001 用 4 乘 8 卡，工具链用 ms-swift 加 vLLM 加速。第一阶段在 3 万合成样本上做监督微调，目标是完整 JSON 的 4 段描述加 9 个标签，作用是立住格式和基本描述能力。第二阶段在 1500 人类标注样本上做 GRPO，只对解析出的 9 个标签打分，不需要人类写描述。性别和 4 个客观标签用点标签准确率奖励，占总奖励 5 比 9 中的 5 份，4 个感知场占 4 份，但因前者已近乎全对、组内奖励几乎无差异，实际学习信号几乎全来自感知标签。

**监督微调 × GRPO：** 监督微调指用合成的完整 JSON 描述加标签做一轮拟合，分工是学会输出格式和基本审美描述；GRPO 指对同一输入采样 16 条输出并按组内相对优势更新策略，分工是把预测标签向人类投票分布靠拢。两者搭配是因为单靠人类数据量小、单靠合成数据有大模型标注偏差，先暖启动再对齐可以在保留格式能力的同时获得人类一致性提升。

GRPO 的目标是对每个输入采样 16 条输出，按组内归一化优势更新策略，同时用系数 0.04 的相对熵约束不偏离监督后策略太远，公式中符号与输入输出关系如下。

\[\displaystyle\mathbb{E}\Big[\tfrac{1}{G}\sum_{i=1}^{G}\min\big(\rho_{i}A_{i},\mathrm{clip}(\rho_{i},1\pm\epsilon)A_{i}\big)\Big]-\beta\,\mathbb{D}_{\mathrm{KL}}[\pi_{\theta}\|\pi_{\mathrm{ref}}]\]

上式期望覆盖训练输入与采样输出，重要性比率是当前策略与采样策略之比，截断阈值限制单步更新幅度，优势是该条奖励减组均值再除以组标准差加稳定项，均值相减使更新只依赖组内差异。分布奖励对每条预测的计算方式如下。

\[\displaystyle r_{i}=\phi\!\left(p(c_{i}),\tilde{q}_{-i}(c_{i})\right),\text{ where }\tilde{q}_{-i}(c_{i})=\frac{n(c_{i})-1+\lambda}{G-1+\lambda K}\]

其中预测标签在除自身外的其余 15 条中的计数经拉普拉斯平滑得到频率估计，再与人类投票支持度比较给分，排除自身防止自举，平滑处理其余组未出现的标签，直觉是奖励被低估的标签、惩罚被高估的标签，使采样分布向人类投票分布靠拢。具体距离可用总变差启发的符号函数、前向 KL 启发的截断比值、反向 KL 启发的截断对数比实现，截断上限 5、概率下限 0.01。

### 数据划分与评价规则是什么

评价用 1500 测试回应的感知场多数投票标签，指标是准确率和宏 F1，前者看总体与多数的一致，后者给稀有类同等权重。比较的基线包括 Qwen2.5-Omni、Qwen3-Omni、Step-Audio-2 mini、Gemma-4-12B、Gemini 3.1 Pro，以及单人对剩余人的平均，即把每个人的标签与剩下约 9 人的多数比较再平均。是否提供工具测量用剑号标记，带剑号表示给了客观标签和证据日志，客观行因此按构造达到 100%，只能比较不带剑号的模型。训练方法对比包括直接在基座上做人类 GRPO 或人类监督、只做合成监督、合成监督后再做人类监督或人类 GRPO。

奖励对比固定同一监督起点，比较单人标签准确率、多数标签准确率、共享比例、前向 KL 等 6 种奖励。版本拆分把测试集按真实、克隆、设计各 500 比较。下图是 3000 人类标注样本的标签分布，理解它才能明白为什么宏 F1 比准确率更能反映稀有类。

读图导读：这张分布图上下两排分别对应工具金标与人类多数投票，横轴是各档标签，纵轴是计数，需要对照真实与合成三色柱看覆盖差异。

> **看图路径：** 1. 先对比上下两排：上排工具测量客观场，下排人类多数投票感知场；2. 再对比每组内深色真实与两种合成的柱高差异；3. 注意情绪主标签中中性柱远高于其他情绪的不均衡

[![原论文 Figure 3：Distributions of the objective labels (measured by speech analysis tools) and perceptual labels…](https://arxiv.org/html/2610.10868v1/label_distribution.svg)](https://arxiv.org/html/2610.10868v1/label_distribution.svg)

*论文图 3。原论文 Figure 3:：“Distributions of the objective labels (measured by speech analysis tools) and perceptual labels (human majority-voted) of 3k human-annotated speech responses from the CANDOR corpus.”。*

图中上排 4 组客观标签在真实与合成间分布相对分散，声音设计的很高、很快档明显更高；下排 4 组感知标签高度不均衡，主要情绪中中性占绝对多数，快乐次之，恐惧、惊讶、生气、悲伤、厌恶都很少，唤醒、温暖、自信也集中在中等。这种不均衡意味着总猜中性就能拿到不错准确率，但宏 F1 会被稀有类拉低，后文投票比例奖励准确率高而前向 KL 奖励宏 F1 高的权衡正源于此。

### 主结果在什么条件下超过基线与单人

在提供工具测量的条件下，合成监督加前向 KL 的 GRPO 在感知平均上达到准确率 69.6%、宏 F1 50.1%，合成监督起点是 58.9% 和 43.5%，Gemini 3.1 Pro 带工具是 60.2% 和 44.2%，单人对剩余人是 60.8% 和 43.5%，开源基座都在 30% 左右宏 F1。也就是说该配置在准确率和宏 F1 上同时超过最强基线和单人平均，这是论文最强的证据。条件很关键，一是都给工具测量，二是对多数投票标签算分，三是测试集含真实与合成各部分。如果去掉工具，排序仍是合成加 GRPO 最好，但绝对值会下降。

下表比较各系统在情绪、唤醒、温暖、自信四场及平均上与人类多数的一致性，带剑号表示提供工具测量，最后一行是单人对剩余人平均，比较聚焦人类一致性而非客观测量精度，公平条件是同为带工具或同为不带工具，指标方向都是越高越好。

| System | Emotion | Emotion | Arousal | Arousal | Warmth | Warmth | Confidence | Confidence | Avg. Perceptual | Avg. Perceptual |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| System | Acc | F1 | Acc | F1 | Acc | F1 | Acc | F1 | Acc | F1 |
| Baseline Speech Large Language Models |  |  |  |  |  |  |  |  |  |  |
| Qwen2.5-Omni [30] | 70.7 | 27.6 | 64.1 | 38.1 | 42.1 | 28.5 | 43.5 | 30.3 | 55.1 | 31.1 |
| Qwen3-Omni [31] | 75.1 | 29.8 | 41.3 | 39.1 | 37.1 | 24.7 | 38.3 | 26.3 | 47.9 | 30.0 |
| Step-Audio-2 mini [29] | 51.7 | 24.1 | 61.3 | 34.7 | 43.9 | 29.7 | 53.4 | 35.2 | 52.6 | 30.9 |
| Gemma-4-12B [8] | 55.5 | 25.2 | 39.3 | 29.7 | 44.0 | 29.7 | 44.7 | 36.2 | 45.9 | 30.2 |
| Gemini 3.1 Pro [9] | 74.1 | 37.9 | 55.9 | 46.3 | 59.8 | 44.4 | 51.0 | 48.4 | 60.2 | 44.2 |
| †Gemini 3.1 Pro | 73.9 | 35.8 | 54.5 | 45.3 | 66.5 | 51.6 | 45.9 | 44.0 | 60.2 | 44.2 |
| Conversational Voice Aesthetic Model (CVAM) |  |  |  |  |  |  |  |  |  |  |
| SFTsynth{}_{\textit{synth}} | 73.3 | 36.9 | 54.3 | 45.4 | 60.0 | 46.8 | 46.9 | 44.2 | 58.6 | 43.3 |
| †SFTsynth{}_{\textit{synth}} | 72.9 | 36.1 | 55.0 | 46.0 | 60.1 | 47.1 | 47.5 | 44.8 | 58.9 | 43.5 |
| †SFThuman{}_{\textit{human}} | 72.1 | 25.5 | 71.8 | 42.0 | 66.9 | 43.0 | 62.4 | 42.0 | 68.3 | 38.1 |
| †GRPOKLhuman{}_{\textit{human}}^{\textit{KL}} | 64.4 | 26.7 | 65.7 | 42.5 | 59.0 | 40.1 | 43.1 | 29.6 | 58.1 | 34.7 |
| †SFTsynth{}_{\textit{synth}} + SFThuman{}_{\textit{human}} | 83.9 | 33.3 | 69.7 | 50.7 | 71.9 | 47.0 | 55.5 | 48.5 | 70.2 | 44.9 |
| †SFTsynth{}_{\textit{synth}} + GRPOFrachuman{}_{\textit{human}}^{\textit{Frac}} | 88.1 | 33.0 | 78.8 | 52.5 | 78.7 | 53.6 | 65.7 | 51.1 | 77.8 | 47.6 |
| †SFTsynth{}_{\textit{synth}} + GRPOKLhuman{}_{\textit{human}}^{\textit{KL}} | 83.9 | 40.5 | 75.3 | 59.3 | 66.0 | 51.9 | 53.1 | 48.6 | 69.6 | 50.1 |
| Single Human vs. Rest | 70.7 | 32.5 | 59.7 | 50.3 | 58.5 | 45.0 | 54.2 | 46.2 | 60.8 | 43.5 |

合成监督单独已达 43.5% 宏 F1，远高于直接在基座上做人类 GRPO 的 34.7% 和人类监督的 38.1%，说明 3 万合成样本的暖启动很关键；继续在人类标签上监督到 44.9%，而 GRPO 到 50.1%，说明分布奖励的对齐增益大于继续拟合多数标签。代价是需要额外 1500 人类多票标注和 16 采样强化训练，且客观场已由工具解决，增益几乎全在感知场。未胜出项是直接人类训练在情绪宏 F1 上明显偏低，说明小数据直接对齐容易丢掉稀有类。

这张散点图横轴是多数标签准确率、纵轴是宏 F1，右上为好，集中展示了感知平均上各模型与单人基准的相对位置，阅读时先看横纵轴含义再看右上区域。

> **看图路径：** 1. 先看横轴多数标签准确率与纵轴宏 F1 的方向都是右上更好；2. 再找右上红色实星 CVAM 与蓝色菱形 Gemini 及灰色单人框的位置；3. 注意左下开源模型点群与右上点的差距

[![原论文 Figure 1：With supervised finetuning on synthetic annotation and reinforcement learning on human crowd…](https://arxiv.org/html/2610.10868v1/f1_vs_acc_perceptual.svg)](https://arxiv.org/html/2610.10868v1/f1_vs_acc_perceptual.svg)

*论文图 1。原论文 Figure 1:：“With supervised finetuning on synthetic annotation and reinforcement learning on human crowd judgments, CVAM better agrees with the human crowd on emotion and delivery labels…”。*

图中右上红色实星的完整 2 阶段模型明显位于右上，空心星的纯合成监督位于 Gemini 蓝色菱形和单人灰框附近，左下灰点是 4 个开源基座。这种位置关系支持合成暖启动加人类分布对齐带来双指标提升的判断，但也显示提升依赖测试集多数投票的定义，换评价口径结论需重估。

**准确率 × 宏 F1：** 准确率指预测与人类多数投票标签总体一致的比例，方向是越高越贴近多数人；宏 F1 指对每个类别分别算 F1 再平均，方向也是越高越好，但对稀有类别给了同等权重。两者搭配是因为情绪等标签高度不均衡，只看准确率会偏向总猜中性，组合后能同时看到对多数的贴合和对稀有类的覆盖。

复述关键步骤时要说清是带工具、1500 测试轮、约 10 票多数为金标准，否则数字不可比。

### 客观场是否还需要模型预测

客观场的结果主要起完整性作用。带工具时相关行按构造为 100%，不带工具时合成监督加投票比例 GRPO 在音高高度、语速等上最好，但音高变化仍偏低，说明仅从原始音频推断细粒度波动仍难。性别自报标签上各模型本就较高，CVAM 达 98% 以上。

下表展示性别与客观四场的一致性，用于说明工具输入的作用与不带工具时各方法的相对排序，阅读时只比较同条件下无剑号行，带工具行按构造接近满分。

| System | Gender | Gender | PitchHgt | PitchHgt | PitchVar | PitchVar | Speed | Speed | Rhythm | Rhythm |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| System | Acc | F1 | Acc | F1 | Acc | F1 | Acc | F1 | Acc | F1 |
| Baseline Speech Large Language Models |  |  |  |  |  |  |  |  |  |  |
| Qwen2.5-Omni | 86.0 | 84.2 | 30.7 | 9.5 | 32.6 | 12.5 | 30.9 | 9.4 | 15.9 | 8.2 |
| Qwen3-Omni | 94.4 | 93.9 | 41.1 | 26.2 | 29.4 | 20.1 | 32.8 | 18.1 | 15.8 | 9.4 |
| Step-Audio-2 mini | 76.2 | 75.4 | 30.7 | 9.8 | 24.9 | 13.8 | 30.9 | 10.1 | 23.7 | 13.6 |
| Gemma-4-12B | 72.1 | 66.2 | 32.7 | 16.9 | 26.6 | 17.9 | 29.9 | 16.3 | 29.7 | 16.6 |
| Gemini 3.1 Pro | 96.3 | 96.0 | 53.5 | 36.1 | 26.7 | 18.1 | 35.7 | 31.3 | 30.7 | 17.6 |
| †Gemini 3.1 Pro | 97.2 | 97.0 | 100.0 | 100.0 | 100.0 | 100.0 | 100.0 | 100.0 | 100.0 | 100.0 |
| Conversational Voice Aesthetic Model (CVAM) |  |  |  |  |  |  |  |  |  |  |
| SFTsynth{}_{\textit{synth}} | 99.0 | 98.9 | 73.1 | 59.0 | 33.7 | 25.5 | 71.2 | 72.1 | 41.5 | 35.8 |
| †SFTsynth{}_{\textit{synth}} | 98.9 | 98.8 | 100.0 | 100.0 | 99.9 | 99.9 | 100.0 | 100.0 | 99.9 | 100.0 |
| SFTsynth{}_{\textit{synth}} + GRPOFrachuman{}_{\textit{human}}^{\textit{Frac}} | 98.8 | 98.7 | 77.4 | 64.0 | 35.0 | 20.5 | 73.7 | 73.4 | 45.0 | 41.3 |
| †SFTsynth{}_{\textit{synth}} + GRPOFrachuman{}_{\textit{human}}^{\textit{Frac}} | 98.8 | 98.7 | 99.9 | 100.0 | 99.9 | 99.9 | 100.0 | 100.0 | 99.9 | 99.9 |
| SFTsynth{}_{\textit{synth}} + GRPOKLhuman{}_{\textit{human}}^{\textit{KL}} | 98.8 | 98.7 | 73.7 | 59.6 | 33.0 | 19.1 | 71.9 | 72.7 | 42.6 | 36.2 |
| †SFTsynth{}_{\textit{synth}} + GRPOKLhuman{}_{\textit{human}}^{\textit{KL}} | 98.4 | 98.3 | 100.0 | 100.0 | 100.0 | 100.0 | 100.0 | 100.0 | 100.0 | 100.0 |

工具输入轻微提升感知预测，说明证据日志对情绪与表达也有辅助作用；若禁用工具，合成加 GRPO 仍是多数客观指标最优，但音高变化宏 F1 只有 20% 左右，远低于高度和语速，表明基频标准差分档对模型较难。限制是客观标签的阈值是人为设定的，换阈值结果会变，且真实部署若不能调用 Praat 与对齐工具，就只能用无工具行的性能。

### 奖励设计如何影响准确率与覆盖

固定同一合成监督起点，比较 6 种 GRPO 奖励。投票比例奖励平均准确率 77.8% 最高、宏 F1 47.6%，前向 KL 奖励宏 F1 50.1% 最高、准确率 69.6%，总变差奖励宏 F1 49.7% 接近前向 KL，反向 KL 两者都较差。单人标签和多数标签准确率奖励介于中间。这支持论文的直觉，拟合多数能提准确率，拟合分布能提稀有类覆盖。

下表比较同一 SFT 起点下不同人类投票奖励的准确率与宏 F1 权衡，所有行均为带工具条件，指标方向越高越好，基线是未做 GRPO 的合成监督，便于看出奖励带来的增量。

| GRPOhuman{}_{\textit{human}} Reward | Emotion | Emotion | Arousal | Arousal | Warmth | Warmth | Confidence | Confidence | Avg. Perceptual | Avg. Perceptual |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| GRPOhuman{}_{\textit{human}} Reward | Acc | F1 | Acc | F1 | Acc | F1 | Acc | F1 | Acc | F1 |
| †SFTsynth{}_{\textit{synth}} Baseline | 72.9 | 36.1 | 55.0 | 46.0 | 60.1 | 47.1 | 47.5 | 44.8 | 58.9 | 43.5 |
| Acc on single-human labels | 84.7 | 35.2 | 77.7 | 53.9 | 74.7 | 51.7 | 60.3 | 52.9 | 74.4 | 48.4 |
| Acc on majority-voted labels | 86.6 | 38.5 | 77.6 | 48.5 | 78.2 | 51.7 | 64.4 | 49.5 | 76.7 | 47.0 |
| Fraction of shared labels | 88.1 | 33.0 | 78.8 | 52.5 | 78.7 | 53.6 | 65.7 | 51.1 | 77.8 | 47.6 |
| TVD on votes’ distribution | 77.2 | 37.4 | 74.1 | 58.7 | 65.3 | 53.7 | 52.5 | 49.1 | 67.3 | 49.7 |
| KL on votes’ distribution | 83.9 | 40.5 | 75.3 | 59.3 | 66.0 | 51.9 | 53.1 | 48.6 | 69.6 | 50.1 |
| Rev KL on votes’ distribution | 83.9 | 35.8 | 75.8 | 55.6 | 64.9 | 44.2 | 49.9 | 43.0 | 68.6 | 44.7 |

若目标是与多数一致可选投票比例，若目标是兼顾稀有情绪可选前向 KL 或总变差；反向 KL 表现差说明对低概率类的惩罚方式需要谨慎。代价是分布奖励需要足够多的人票估计分布，1500 样本每样约 10 票只是勉强够用，票数更少时估计噪声会增大。未胜出项是反向 KL 在温暖和自信上明显低于基线，说明不是所有分布距离都适合做逐条奖励。

**投票比例奖励 × 分布奖励：** 投票比例奖励指预测标签得到多少人类投票就给多少分，分工是强化贴近多数；分布奖励指比较人类投票分布 p 与同组其他采样预测频率 q，用 TVD 或 KL 等距离的负梯度给分，分工是鼓励补足被低估的标签、抑制被高估的标签。组合对比显示前者准确率更高，后者宏 F1 更高，说明奖励设计在多数一致与类别覆盖之间做权衡。

下图混淆矩阵进一步显示 2 阶段在宏 F1 上的提升并非每类均匀，稀有情绪仍难认准，比较时需结合对角线与非对角分布一起看。

这张混淆矩阵按行归一化显示每种人类多数标签被模型判到各列的比例，每块标题给出宏 F1，行列含义需先确认再看对角线，重点是稀有类的变化。

> **看图路径：** 1. 先确认行是人类多数标签、列是模型预测、按行归一化百分比；2. 再逐列看基座、Gemini、SFT、GRPO、单人五行的对角线变化；3. 注意稀有情绪行在各模型下仍偏向中性或快乐列

[![原论文 Figure 4：Confusion matrices and macro-F1 (above) for the perceptual labels on 1.5k test responses.](https://arxiv.org/html/2610.10868v1/confusion_perceptual_reward_kl.png)](https://arxiv.org/html/2610.10868v1/confusion_perceptual_reward_kl.png)

*论文图 4。原论文 Figure 4:：“Confusion matrices and macro-F1 (above) for the perceptual labels on 1.5k test responses.”。*

图中第一行基座把多数情绪都判成中性，温暖和自信几乎全判暖和自信；第二行 Gemini 明显改善对角线；第三行合成监督再进一步；第四行加前向 KL 后唤醒从 46.0 到 59.3、情绪从 36.1 到 40.5 提升最大，但恐惧、悲伤、厌恶等稀有行仍大量落入中性或快乐列；第五行单人矩阵对角线更分散，说明人类个体间分歧本身就大。观察时重点看稀有行的非对角分布，不要只看标题宏 F1。

### 真实与合成语音的表现有何不同

把测试集按同文本不同实现拆成真实、克隆、设计各 0.5 千，用完整模型带工具条件评价。平均宏 F1 上设计版 50.1% 最高，克隆版 49.8%，真实版 44.3% 最低；平均准确率上克隆版 72.5% 最高。分场看，克隆版情绪宏 F1 达 68.7% 远高于其他，可能因其中性占比高且表达较不含糊；设计版在唤醒宏 F1 62.8%、温暖宏 F1 51.4%、自信宏 F1 52.8% 上最好，与其标签更均衡一致；真实版最具挑战，反映自然自发的复杂性。

下表比较同一模型在真实、声音克隆、声音设计三版回应上的感知一致性，用于说明风格与标签均衡对结果的影响，每版样本量相同且共享真实上下文，平均是对情绪、唤醒、温暖、自信四场的平均。

| Version | Emotion | Emotion | Arousal | Arousal | Warmth | Warmth | Confidence | Confidence | Avg. Perceptual | Avg. Perceptual |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Version | Acc | F1 | Acc | F1 | Acc | F1 | Acc | F1 | Acc | F1 |
| Real | 82.0 | 34.0 | 76.0 | 52.3 | 68.6 | 45.9 | 51.0 | 45.0 | 69.4 | 44.3 |
| Voice-Cloned | 90.8 | 68.7 | 81.2 | 50.4 | 65.2 | 40.3 | 52.8 | 39.7 | 72.5 | 49.8 |
| Voice-Designed | 79.0 | 33.6 | 68.6 | 62.8 | 64.2 | 51.4 | 55.6 | 52.8 | 66.9 | 50.1 |

性能差异同时来自版本风格和待评属性，表中温暖和自信两组数字补回后才能解释平均值的来源，设计版在唤醒、温暖、自信三场宏 F1 上同时最好，克隆版只在情绪上最好，不能把某一版的最高分推广到所有场景；真实语音最难意味着实验室合成上的提升不等于自然对话中的同等提升。限制是三版共享同一文本，比较的是实现差异，若文本也不同，差距可能变化。尚未评测的是跨语种或强口音下的稳定性，原文没有报告。

### 哪些结论还不能推广

首先是数据范围，全部来自英语 CANDOR 对话并经过敏感话题过滤，1.5 千训练加 1.5 千测试的人票是主要对齐信号，扩展到更多样本和每样本更多票数仍是未来工作，票数不足时分布估计会更 noisy。其次是评价口径，主结果依赖约 10 人多数投票，若以单人金标准或换阈值、换语料，结果会变。再次是工具依赖，客观近乎开卷且感知也受益于工具，禁用工具或无法运行 Praat 与对齐时性能下降。

还有类别不均衡，稀有情绪即使经声音设计补充仍很少，混淆矩阵显示它们多数被判错，宏 F1 提升不代表每类都提升。训练只调 LoRA 一轮，冻结编码器，超参如组大小 16、温度 1.0、相对熵系数 0.04、平滑 1、截断 5 都是固定选择，没有展示更大搜索下的稳定性。把相关当因果要谨慎，例如克隆版情绪分高可能只是中性占比高的统计效应，而非模型真正理解了克隆语音。

### 复现第一步要准备什么

复现先按原文重建数据管线而非先调模型。从 CANDOR 取上下文加回应各 3 到 30 秒，去回声词并用语义过滤去掉敏感话题，保证训练测试说话人与内容不重叠；用 Praat 提基频、用识别加 NeMo 对齐算音素速率，按论文阈值映射客观标签并保存证据日志；用同文本 TTS 生成克隆与设计两版，设计版提示词需包含上下文、性别年龄和均匀采样的情绪与表达；人类标注组织两两对比、每对 5 人，保证每版约 10 票并记录多数与分布。

模型从 Qwen2.5-Omni 起步，先在 3 万合成 JSON 上监督微调学格式，再在 1500 人票上做 16 采样 GRPO，LoRA 秩 32、学习率分别为 0.0001 和 0.00001，各一轮。按本次收到的证据，没有确认可用的作者代码、模型或数据资源，不得声称已公开，来源未确认只是本次未能验证，不是技术缺陷。训练与推理成本要分开记录，原文只报告卡数与轮数，没有给出延迟或帧率，部署前需另测。

### 什么时候值得尝试还缺什么验证

当任务是给对话回应做声音层面的质检或为 expressive 合成挑风格，且能拿到上下文音频和多人听感时，这套先合成暖启动再分布对齐的思路值得尝试；若只有单句无上下文，或只能拿到单人标签，就不具备论文成立的关键条件。复现第一步是跑通客观工具链并确认带工具与不带工具两条评测线，再复刻合成监督起点。

还需要补的验证包括更多票数下的分布稳定性、跨语料与跨语言泛化、禁用工具时的纯音频性能，以及把模型当奖励模型去优化语音生成是否真能提升人类听感。论文直接报告的是与人群多数的一致性提升和奖励权衡，证据支持 2 阶段优于单阶段、分布奖励优于纯拟合多数的判断，稀有类与真实自发语音仍是短板，是否能转化为更好的对话体验还有待验证。

<details>
<summary>📎 论文与评分元数据</summary>

排名：前50% | 文档类型：模型报告 | [arXiv 原文](https://arxiv.org/abs/2610.10868v1)

</details>

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。

- 评分规则：type-aware-v1

- 评分模型：muse-spark-1.3-contributor

- 评分请求协议：openai_responses

---

[← 返回 2026-10-11 语音/音乐/音频论文速递](/audio-paper-digest-blog/posts/2026-10-11/)
