---
title: "Context Projector: Complementary Keyword and Dialogue Context Embeddings for LLM-based ASR"
date: 2026-09-28
draft: false
description: "针对客服多轮对话中实体易错问题，论文在冻结 SLAM-ASR 主干上只训练上下文投影器并搭配关键词提示，报告平均相对带来整体约 2.5% 与偏置词约 7.2% 的改善，但纯关键词会抬高整体词错误率而长原始上下文会直接恶化识别。"
tags: ["检索增强", "大语言模型", "语音", "语音识别"]
categories: ["interspeech-2026 论文"]
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_paper_id: "conference:interspeech:2026:conference-paper-id:villatorotello26_interspeech"
paper_digest_source_kind: conference
paper_digest_conference_id: "interspeech-2026"
paper_digest_conference_record_url: "https://www.isca-archive.org/interspeech_2026/villatorotello26_interspeech.html"
paper_digest_conference_pdf_url: "https://www.isca-archive.org/interspeech_2026/villatorotello26_interspeech.pdf"
paper_digest_api_reader_contract: "beginner-researcher-v3"
paper_digest_api_reader_article_sha256: "96c19c7e666ed771636d6c6afe187ec64eab9138b2d9042ac7c4132c8677be43"
paper_digest_api_reader_plan_sha256: "b006b7d24fcb83f03f1a44a7ed351abcc7b57d87e05a270617366a71705d1caf"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings-v4"
paper_digest_api_reader_source_bindings_sha256: "1d9470f0a38938f4888c16f8e2a609515b664dede31ef49dcaa35f740e06a5c1"
paper_digest_api_reader_source_table_count: 3
paper_digest_api_reader_source_formula_count: 0
paper_digest_api_reader_structured_artifacts_sha256: "3ccd756bfa6b88e56927afa71fb21e6f683ef1221eb7e34cb8efddc28a6c9874"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity-v1"
paper_digest_api_reader_author_identity_sha256: "e7c93c56b682d79370799fc7686f8a127fa36db0af8d060904020fbfd6f432d0"
paper_digest_api_reader_author_count: 11
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity-v1"
paper_digest_api_reader_resource_identity_sha256: "a07744e7b16c9484336d0848f6226dea89ae2ededc487775ad815fc30e83b93c"
paper_digest_api_reader_resource_count: 1
paper_digest_api_reader_decision_projection: "api-reader-decision-projection-v2"
paper_digest_scoring_contract: "api-scoring-audit-v2"
paper_digest_taxonomy_contract: "paper-taxonomy-flat-tags-compat-v1"
paper_digest_taxonomy_selection_contract: "paper-taxonomy-selection-v1"
paper_digest_taxonomy_registry_version: "paper-taxonomy-v1"
paper_digest_taxonomy_registry_sha256: "15c82a567ce5a55dc1175684ed08b64c158558639d9c8fb822c9587ec32a8778"
paper_digest_taxonomy_concepts: [{"facet":"method","id":"method.retrieval-augmented","label":"检索增强"},{"facet":"model_family","id":"model_family.llm","label":"大语言模型"},{"facet":"signal","id":"signal.speech","label":"语音"},{"facet":"task","id":"task.asr","label":"语音识别"}]
paper_digest_primary_task: "语音识别"
paper_digest_primary_method: "检索增强"
paper_digest_score: 6.9
paper_digest_rank_bucket: "前50%"
paper_digest_document_type: "方法研究"
paper_digest_conference_structure: pdf-visual-quote-evidence-v1
---

# 📄 直接拼历史反而变差：用投影压缩对话与关键词互补做语境 ASR

> 英文题目：*Context Projector: Complementary Keyword and Dialogue Context Embeddings for LLM-based ASR*

> 会议身份：`conference:interspeech:2026:conference-paper-id:villatorotello26_interspeech`



> 来源为官方会议 PDF；图片依据原页像素，表格数字依据原文引用。PDF 文字层不视为原始 TeX，未可靠恢复的结构不作推断。


> 会议来源：[官方记录](https://www.isca-archive.org/interspeech_2026/villatorotello26_interspeech.html) · [官方 PDF](https://www.isca-archive.org/interspeech_2026/villatorotello26_interspeech.pdf)

标签：#检索增强 #大语言模型 #语音 #语音识别

评分：**6.9/10** | 创新 1.2/2 | 技术严谨 1.0/1.5 | 实验充分 0.9/1.5 | 清晰度 0.9/1 | 影响力 0.8/1.5 | 开源 1.0/1.5 | 可复现 0.3/0.5 | 工程/实践 0.8/1.5

排名：前50% | 文档类型：方法研究

## 👥 作者与机构

- Esaú Villatoro-Tello：机构信息未能从会议 PDF 纯文本可靠映射
- Sergio Burdisso：机构信息未能从会议 PDF 纯文本可靠映射
- Shashi Kumar：机构信息未能从会议 PDF 纯文本可靠映射
- Hasindri Watawana：机构信息未能从会议 PDF 纯文本可靠映射
- Srikanth Madikeri：机构信息未能从会议 PDF 纯文本可靠映射
- Manjunath K E：机构信息未能从会议 PDF 纯文本可靠映射
- Jeena Prakash：机构信息未能从会议 PDF 纯文本可靠映射
- Thibault Bañeras-Roux：机构信息未能从会议 PDF 纯文本可靠映射
- Kadri Hacioglu：机构信息未能从会议 PDF 纯文本可靠映射
- Petr Motlicek：机构信息未能从会议 PDF 纯文本可靠映射
- Andreas Stolcke：机构信息未能从会议 PDF 纯文本可靠映射

## 📌 核心摘要

客服对话语音识别以当前轮音频与多轮对话历史为输入，输出当前轮转写文本，实际难点在于整体词错率与业务实体偏置词错率难以兼顾，且历史原文直接拼入提示词易引入噪声并加剧长上下文负担。该方法先用Gemma3 27B从历史轮次抽取显式单复关键词，形成轻量偏置记忆并拼入提示词以增强实体召回。接着用Dialog2Flow将历史语句映射为对话行为感知的语句嵌入，再经与语音投影器同构的上下文投影器压缩为少量上下文令牌，最后与语音投影和关键词共同送入冻结的WavLM-Large加Llama 3.2 3B Instruct解码。与直接追加原文关键词或历史轮次的做法不同，该互补设计以投影上下文为结构化接地约束关键词偏置，从而在提升实体精度的同时稳定整体转写，避免原文提示的词错率代价与显存溢出风险。在Defined.ai银行域测试集下，混合关键词与投影上下文方法的WER为9.9，低于无上下文基座的WER 10.2。该结论限于WavLM-Large加Llama 3.2 3B Instruct的SLAM-ASR基座与近期约10轮历史窗口，未验证自发对话、噪声重叠、跨语言与长历史外推能力。原文未披露训练时长、推理延迟与部署成本。上述适用边界尚未验证长历史外推，原文未披露训练、推理或部署成本。

## 🔗 开源与复现资源

- 代码相关资源：<https://github.com/idiap/llm-asr-context-projector> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 输入是什么，目标是什么，为什么只看整体词错误率不够？

这篇论文的输入是客服电话里的多轮对话语音，目标是在转写当前这句话时，同时保住整句通顺和业务实体正确。输出就是当前语音对应的文本转写，附带对实体区间更严格的考核。必须保留的信息包括声学证据、对话历史和自动抽出的关键词，输出时不能只给 1 个笼统分数，要同时报告整体质量和实体质量。整体词错误率衡量假设与参考之间的替换、插入、删除归一化编辑距离，方向是越低越好；它能反映大盘，但会把“账号后 4 位错 1 位” 和“语气词错 1 位” 同等看待。

客服下游要做路由、检索、合规和座席辅助，一旦实体错了，后续状态跟踪全错，所以论文引入偏置词错误率，只算实体词上的错误占比，以及实体级精确率、召回率与调和平均。对于刚入门的读者，可以把任务理解成例子：前面 3 轮一直在说账户余额和个人贷款，当前这句含糊地说了号码，模型要靠历史知道这里大概率是账号而非电话。

**词错误率 × 偏置：** 词错误率负责衡量整句转写的总体编辑距离，分工是看大盘质量；偏置只统计参考中标注实体区间内的替换与删除，分工是看业务关键名词是否保住。二者搭配的原因是客服场景里整体顺了不代表账号名、产品名对了，组合意义是用双指标逼出“总体不降、实体提升” 的折中操作点。

论文的中心矛盾是现代大模型看似能吃长上下文，但把原始历史直接贴进提示，在该数据上反而多数变差。于是作者不追求更长的提示，而是追求更紧凑、与声学解耦的语境表示。

### 同输入同目标的已有路线差在哪里？

按同输入、同目标、同运行阶段对照，已有大模型语音识别多采用固定提示连接预训练语音编码器与指令微调大模型，中间只放一个轻量语音投影器。这类工作在单句上有效，但在多轮对话里缺历史，分不清同音实体。另一条路线是把上一轮或结构化压缩表示喂给模型，有的只用上一轮，有的做压缩表示。论文指出这两类都没有解决长距离退化问题，引用了长上下文不可靠的观察。

传统语音识别里关键词与偏置列表很成熟，但论文自述这是首次把关键词与高效上下文投影一起放进大模型语音识别框架。相关工作的教训是：加语境不是加得越多越好，关键是表示形式与训练方式是否让声学证据保持主导。

### 要解决的具体问题与判定标准是什么？

具体问题是：在冻结主干的前提下，如何利用长程对话历史而不拖累整体识别，同时提升实体词识别。判定标准是双指标折中：在 5 个客服领域上，偏置词错误率要下降，整体词错误率不能明显上升，实体级分数最好同步提升。论文把失败条件也说清楚：如果只是把关键词或前 1 轮、前 10 轮原文贴进提示，多数领域整体词错误率高于无上下文基线；如果只加原始关键词，实体好了但整体可能变差。因此问题不是要不要语境，而是以什么形式给语境、给多少轮、谁来训练。

### 方法全景：一个样本如何走完输入到输出？

沿一个样本走一遍：假设当前是第 m 加 1 轮语音，前 m 轮文本历史已知。系统分 3 路准备大模型输入。第一路是声学：当前语音进 WavLM 编码、降采样、语音投影器变成每秒 10 个向量。第二路是结构语境：前 m 轮每轮先经 Dialog2Flow 变成轮级向量，再经上下文投影器变成 m 个紧凑向量。第 3 路是字面线索：用大模型从历史抽出逗号分隔的关键词列表，经分词与嵌入变成普通文本 token。

3 路按提示模板拼成转写指令、关键词、上下文、语音 4 段，送入冻结的 Llama 做自回归生成。训练时只更新上下文投影器，推理时按同样模板生成。图 1 把这 3 路汇合与冻结关系画了出来，先看导读再看图再看解释才能对应到文字。
导读：该图左侧是 3 轮示例对话与说话人图标，中间是 3 个并行编码分支，底部是拼接后的提示条，右侧是解码大模型，建议按箭头颜色区分关键词支路与语境支路的走向。

> **看图路径：** 1. 先从左侧对话历史沿绿线与蓝线分别追到关键词抽取器和 Dialog2Flow 分支；2. 再看中间三列投影输出在底部提示条中如何拼成关键词加上下文加语音的顺序；3. 最后确认雪花冻结与火焰训练标记分别落在哪些模块上

[![原论文 Figure 1：Proposed dialogue-aware SpeechLLM architecture.](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/interspeech-2026/6ac03971f0ea/figure-1.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/interspeech-2026/6ac03971f0ea/figure-1.png)

*论文图 1。原论文 Figure 1：“Proposed dialogue-aware SpeechLLM architecture.”。*

解释：像素显示左侧绿色对话气泡中紫色高亮即关键词示例，绿色箭头指向 Dialog2Flow 与关键词抽取器，蓝色箭头指向音频编码器；中间紫色块为关键词分词嵌入，绿色块为 Dialog2Flow 加上下文投影器，蓝色块为音频编码器加语音投影器；雪花标记落在 Dialog2Flow、音频编码器、语音投影器与右侧大模型上表示冻结，火焰标记只落在上下文投影器上表示可训练；底部灰色条文字标明转写指令与 3 段占位顺序，右侧青色大块为 Llama 生成转写。这与正文冻结主干、只训练新投影器的描述一致。

### 三个组件各自算什么，怎么拼在一起？

基础语音链沿用 SLAM 语音识别做法。语音编码器输出 50 赫兹表示，按 k 等于 5 拼接降采样，得到 100 毫秒分辨率，每秒音频对应 10 个投影语音嵌入。语音投影器是两层映射加激活，输出维度对齐大模型输入维度。提示模板为转写指令加关键词加上下文加语音，训练时转写位置放真值，推理时自回归生成。基线训练时关键词与上下文字段为空。

上下文投影器与语音投影器结构相同，只是输入维度改为句子嵌入空间，单隐层 2048 维。它把 x1 到 xm 共 m 个轮级向量变成 m 个上下文 token，替换模板中的上下文占位。根据设置不同，该占位也可能被 m 轮原文代替，用于对照实验。
句子嵌入统一用 dialog2flow-joint-bert-base，特点是在 340 万话语、52 域上用软对比目标按对话动作组织空间，功能相近的话轮距离更近，目的是保留流程信息、压掉字面变化。关键词抽取用 Gemma3 的 27B 版本，对历史每轮抽单多词关键词做轻量记忆，选型理由是零样本实体召回最高。

**语音投影器 × 上下文投影器：** 语音投影器负责把 WavLM 编码后降采样语音特征映射到大模型输入维度，分工是打通声学到文本空间；上下文投影器负责把对话历史的轮级句子向量映射成紧凑上下文 token，分工是打通长历史到可消费语境。搭配原因是两者输出维度 1 致、可拼进同一提示，组合意义是让大模型同时以声学证据为主、以压缩语境为辅做解码。

**Dialog2Flow 嵌入 × 关键词：** Dialog2Flow 嵌入负责把历史每轮话语变成按对话动作组织的结构化向量，分工是保留流程功能、压掉字面冗余；关键词负责从历史中抽出显式单多词实体，分工是保留可直接偏置解码的字面线索。搭配原因是前者给结构接地、后者给字面召回，组合意义是互补：只有关键词易把解码带偏，加上投影语境后整体词错误率才被拉回。

两组互补合起来就是论文标题的含义：投影给结构接地，关键词给字面召回，二者共同条件化解码。

### 冻结谁、训练谁、监督信号从哪里来？

训练分 2 个阶段。先训练语音投影器 5 个轮次，此时语音编码器与大模型冻结；再冻结全部已有组件，只训练新增的上下文投影器 2 个轮次，共 7 轮。论文明确说互补实验里解冻主干会导致不稳定与性能下降，因此冻结是安排的一部分，不是省略。优化器用 AdamW，学习率 10 的负 4 次方，批量 10，按开发集交叉熵早停。

计算精度用 bfloat16，训练在单张 80 GB 显存 H100 上，推理在 RTX3090 上，解码用束宽 4 的束搜索。监督来源是当前轮真值转写，历史只作为条件输入，不作为预测目标；梯度只流经上下文投影器，不更新句子编码器、语音链与大模型。未报告的是投影器初始化方式与早停耐心轮数，这两项缺失意味着复现时需自行固定随机种子并记录开发集曲线，不能从模型名推定实现。

### 数据、划分、指标与运行条件是否一致？

数据用 Defined.ai 的脚本化客服对话，含座席与客户两方，覆盖银行、医疗、保险、零售、电信五域。划分保留原始切分，训练、开发、测试总量与实体数在下表先提出比较问题：各域规模是否均衡，低资源域是否为医疗，这决定语境对稀有实体的价值。指标方向是词错误率与偏置词错误率越低越好，实体分数越高越好；偏置词错误率按实体词错误数除以实体词总数，实体分数按完全匹配计真正例。

所有设置沿用原 SLAM 流程，语音与上下文投影器隐层同为 2048 维，比较时基线与增强系统除语境字段外其余条件一致。
下面表格的比较问题是：在相同主干与解码下，不同域的数据量与实体密度差异有多大，公平条件是同一原始划分，指标单位按原文小时与条数理解。

| 条件 | 指标 | 总量 | 最大域训练话语 | 最小域训练话语 | 训练配置 |
| --- | --- | --- | --- | --- | --- |
| 原始划分 | 话语与实体与时长 | 107941 条与 38514 处与 246.4 小时 | 30758 条 | 4708 条 | 学习率 10−4 与批量 10 |

表后解释：总量大但域间不均，保险与银行训练话语最多，医疗最少，这支持论文按域分别报告而不是只报平均；代价是医疗与零售基线误差本身更高，后续相对改善需结合绝对值看，不能只看百分比。未胜出项是低资源域的绝对偏置词错误率仍在 30% 以上，说明语境缓解但未解决稀有实体难题。

关键词选型表的比较问题是：同一抽取任务下哪个大模型召回最高，公平条件是零样本比较，指标方向是召回越高越好。

| 任务 | 指标 | 候选 1 | 候选 2 | 候选 3 与 4 与 5 |
| --- | --- | --- | --- | --- |
| 历史关键词抽取 | 实体召回率 | Gemma 为 90.6% | Phi4-14B 为 86.3% 与 Llama3.2-8B 为 80.7% | DeepSeek-R1-32B 为 78.7% 与 Qwen3-30B 为 75% 与最高者为 Gemma |

表后解释：该表支持选用 Gemma 做关键词器，因为混合管线依赖关键词保住域实体，优先保召回；代价是 27B 模型抽取成本高于其他候选，论文未测量端到端延迟，因此不能承诺延迟改善，部署时需单独评估抽取开销。

### 直接贴历史会怎样，投影加关键词又怎样？

先看反证。图 2 按域展示把关键词、前 1 轮、前 10 轮原文直接贴进提示后的整体词错误率，基线是无上下文。导读：每域子图纵轴为整体词错误率，横轴四柱从左到右为关键词、无上下文、前 1 轮、前 10 轮，重点看最右红色柱是否显著高于灰色基线。

> **看图路径：** 1. 先按每域子图确认横轴四条件为关键词、CTX_00、CTX_01、CTX_10；2. 再比较同域内 CTX_10 红色柱相对 CTX_00 灰色柱的高出幅度；3. 最后跨五域检查是否存在直接拼接能稳定优于无上下文的反例

[![原论文 Figure 2：ASR performance (% WER) across domains when dif- ferent types of contextual information (keywords…](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/interspeech-2026/6ac03971f0ea/figure-2.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/interspeech-2026/6ac03971f0ea/figure-2.png)

*论文图 2。原论文 Figure 2：“ASR performance (% WER) across domains when dif- ferent types of contextual information (keywords and previous turns) are appended directly to the prompt.”。*

解释：像素显示银行、保险、零售、电信四域中前 10 轮红色柱明显高于灰色无上下文柱，医疗域红色柱高达 94.78 而基线仅 14.70，绿色前 1 轮柱也多略高于基线；只有电信域前 1 轮 11.73 略低于基线 11.78，属例外。论文据此报告原始文本注入总体有害，归因可能是提示杂乱使模型难分声学证据与辅助文本，且全历史原文还会导致批量下显存溢出，故未报告全历史原文条件。
主结果看投影与混合。

图 3 与表 2 显示只加原始关键词多改善偏置词错误率但抬高整体词错误率，而关键词加投影在所有域把整体词错误率压回基线以下，同时偏置词错误率低于基线。摘要与结论把平均相对改善定为整体最高 2.5%、偏置词最高 7.2%、实体分数平均最高 3.7%，下表整理该折中声明。
下面表格的比较问题是：在可部署的非事后策略下，混合方法相对基线的双指标如何，公平条件是同主干同解码，指标方向是前两列越低越好、末列越高越好。

| 条件 | 指标 | 基线含义 | 本方法平均相对改善 | 代价与边界 |
| --- | --- | --- | --- | --- |
| 冻结主干加投影 | 整体词错误率 | 基线为无上下文 | 2.5% | 纯关键词曾使该指标恶化约 4.7% |
| 冻结主干加投影 | 偏置词错误率 | 基线为无上下文 | 7.2% | 全历史原文曾致显存溢出未评 |
| 冻结主干加投影 | 实体分数 | 基线为无上下文 | 3.7% | 低资源域绝对值仍高 |
| 多轮窗口 | 上下文尺寸 | 基线为 0 轮 | 约 10 轮饱和 | 超过后增益有限或波动 |
| 选型 | 关键词器 | 基线为无记忆 | Gemma 召回 90.6% | 27B 抽取成本未计入延迟 |

表后解释：主要收益是混合达到实用操作点：实体提升而不付整体变差代价。

具体代价是若去掉投影只留关键词，医疗与零售整体词错误率分别相对恶化约 8.8% 与 6.8%，说明关键词需结构接地才能可靠有用。限制是总体趋势不等于每域每窗口都成立，电信最优窗口为 1 轮而非 10 轮，说明有用语境多集中在近期短窗。

### 窗口多大合适，拿掉投影会发生什么？

窗口消融评估前 1、5、10 轮与全历史四档。导读：图 3 上排偏置词错误率、下排整体词错误率，每列一域，蓝实线为仅投影、绿虚线为关键词加投影、红实线为基线、紫虚线为仅关键词，横轴为窗口增大方向。

> **看图路径：** 1. 先分清上排偏置词错误率与下排词错误率、蓝实线与绿虚线的条件含义；2. 再沿上下文尺寸 1、5、10、ALL 观察绿线在银行域上排的下降趋势；3. 最后对比紫色关键词水平线与红色基线在两排图中的相对位置差异

[![原论文 Figure 3：ASR results across domains as a function of context size.](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/interspeech-2026/6ac03971f0ea/figure-3.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/interspeech-2026/6ac03971f0ea/figure-3.png)

*论文图 3。原论文 Figure 3：“ASR results across domains as a function of context size.”。*

解释：像素显示银行域绿线随窗口增大在上排持续下探而蓝线平坦，说明关键词对实体增益大；医疗与保险域蓝线在下排低于红线而上排接近红线，说明投影保整体但实体增益小；电信域两线在 10 轮后上扬，说明过长窗口引入波动。论文总结增大窗口 1 般先改善后饱和，域相关饱和点多在 10 轮附近。

**原始上下文拼接 × 投影上下文：** 原始上下文拼接负责把前 1 轮、前 10 轮或关键词原文直接贴进提示，分工是零训练利用大模型长上下文；投影上下文负责先经句子编码再经可训练映射变成少量向量，分工是压缩去噪。搭配做对照的原因是验证长文本是否真有用，组合意义是论文得出否定性结论：直接贴多轮多导致词错误率上升，而投影加关键词才改善折中。

拿掉投影的对照即仅关键词条件，在表 2 中偏置词错误率优于基线但整体词错误率差于基线；加上投影后整体恢复而实体仍优于基线。这支持互补设计的必要性。未评测边界是全历史原文因显存溢出缺席，因此长原文与长投影的公平对比不完整，待验证压缩语音历史能否进一步缩小仅关键词与混合之间的偏置词差距。

### 哪些结论有边界，哪些量根本没测？

已验证的是：在该客服数据与冻结主干下，短窗投影加关键词改善双指标折中，而长原文拼接有害。但以下边界需注意。数据是脚本化对话，不是完全自然的 production 噪声，信道与口音多样性未交代；实体标注口径只说域术语区间，未给出标注一致性。统计上只报开发集早停与测试集点估计，未报告置信区间或显著性，不能把 2.5% 与 7.2% 当成每轮必现。

成本上训练资源只给显卡型号与轮数，未给时长与显存峰值；推理只给显卡与束宽，未测量关键词抽取延迟与投影增量延迟，因此不能承诺实时性。资源状态方面，论文脚注给出代码链接，本次核验显示该链接当前可用，但可用不等于权重可下载或一键可运行，复现前需确认权重与环境。

### 要复现，先固定哪些信息条件与步骤？

先固定信息条件：用同一 Defined.ai 五域原始划分，不重切分；语音端用 WavLM-Large 加 k 等于 5 降采样，大模型用 Llama3.2 的 3B 指令版；句子嵌入用 dialog2flow-joint-bert-base，关键词器用 Gemma3 的 27B。步骤上先训语音投影器 5 轮并留空关键词与上下文，再冻结全主干只训上下文投影器 2 轮，优化器与早停按原文，精度 bfloat16，束宽 4。评估时同时算整体词错误率、偏置词错误率与实体分数，窗口分别测 1、5、10 与全历史，并保留仅关键词与仅投影两个对照。

需补的验证是：记录每次运行的种子与开发集曲线以弥补初始化缺项；单独计时关键词抽取与投影编码以补延迟缺项；若遇全历史原文显存溢出，应按原文做法如实缺席而非缩小批量后混比。代码当前可用为复现提供起点，但若权重未公开，需先复现基线再叠加投影。

### 何时值得尝试这个方案？

当你的语音识别已接大模型、且错误集中在业务实体而整体尚可时，值得尝试冻结主干加投影加关键词的组合，尤其对话历史能提供近期实体线索的客服、医疗预约、银行核验场景。先做小窗口验证，从前 5 到前 10 轮起步，不必一开始就喂全历史；同时保留仅关键词对照，观察整体是否被带偏。若整体被带偏，说明缺结构接地，应加入投影而非调大关键词权重。若低资源域绝对实体错误仍高，不应期待单靠文本语境解决，需结合词典偏置或语音压缩历史进一步验证。最终判断仍回到双指标：只有在整体不降的前提下实现实体下降，才算达到论文所说的实用操作点。

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。
- 评分规则：type-aware-v1
- 评分模型：muse-spark-1.3-contributor
- 评分请求协议：openai_responses

---

[← 返回 interspeech-2026 论文汇总](/posts/conference-interspeech-2026/)
