---
title: "Negation in Audio Generation Models"
date: 2026-09-25
draft: false
description: "论文以 AudioCaps 为源构造一百万条四类三范围否定提示并用音频问答与重写标题双模态评估，发现 AudioGen、AudioLDM2、TangoFlux 对否定音频的问答召回均低于 0.05 且否定与肯定输出声学几乎相同，而生成质量本身正常。"
tags: ["基准测试", "基准设计", "人类参与评测", "音频生成", "音频问答"]
categories: ["interspeech-2026 论文"]
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_paper_id: "conference:interspeech:2026:conference-paper-id:arora26_interspeech"
paper_digest_source_kind: conference
paper_digest_conference_id: "interspeech-2026"
paper_digest_conference_record_url: "https://www.isca-archive.org/interspeech_2026/arora26_interspeech.html"
paper_digest_conference_pdf_url: "https://www.isca-archive.org/interspeech_2026/arora26_interspeech.pdf"
paper_digest_api_reader_contract: "beginner-researcher-v3"
paper_digest_api_reader_article_sha256: "521bc66d0489952bb1219338a22f0e498f883c3d493f26d1d25acae46329fde8"
paper_digest_api_reader_plan_sha256: "5db5947980296993e0fe6295cfa6105772e6b226544d0da362124932192e3fd9"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings-v4"
paper_digest_api_reader_source_bindings_sha256: "678c3322fe8643a4db06ffc48bb5a83403100b61ca3935439a415c9a3203574c"
paper_digest_api_reader_source_table_count: 2
paper_digest_api_reader_source_formula_count: 0
paper_digest_api_reader_structured_artifacts_sha256: "d0cea654ec7e0132372f9c521490bc854d8493769185eafce25c038218d0df58"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity-v1"
paper_digest_api_reader_author_identity_sha256: "e86e565178d9a4b2c1bfc3ac3aa1e751e66721dd8228afcd04eb0f50afcf574b"
paper_digest_api_reader_author_count: 6
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity-v1"
paper_digest_api_reader_resource_identity_sha256: "854f10dbb241bdb4565a9afd167839915513653b6d4a53190979fd598941887a"
paper_digest_api_reader_resource_count: 1
paper_digest_api_reader_decision_projection: "api-reader-decision-projection-v2"
paper_digest_scoring_contract: "api-scoring-audit-v2"
paper_digest_taxonomy_contract: "paper-taxonomy-flat-tags-compat-v1"
paper_digest_taxonomy_selection_contract: "paper-taxonomy-selection-v1"
paper_digest_taxonomy_registry_version: "paper-taxonomy-v1"
paper_digest_taxonomy_registry_sha256: "15c82a567ce5a55dc1175684ed08b64c158558639d9c8fb822c9587ec32a8778"
paper_digest_taxonomy_concepts: [{"facet":"artifact","id":"artifact.benchmark","label":"基准测试"},{"facet":"method","id":"method.benchmark-design","label":"基准设计"},{"facet":"method","id":"method.human-evaluation","label":"人类参与评测"},{"facet":"task","id":"task.audio-generation","label":"音频生成"},{"facet":"task","id":"task.audio-question-answering","label":"音频问答"}]
paper_digest_primary_task: "音频生成"
paper_digest_primary_method: "基准设计"
paper_digest_score: 7.1
paper_digest_rank_bucket: "前50%"
paper_digest_document_type: "数据集与基准"
paper_digest_conference_structure: pdf-visual-quote-evidence-v1
---

# 📄 说不要却照做：文本到音频生成的否定失效与百万级否定基准

> 英文题目：*Negation in Audio Generation Models*

> 会议身份：`conference:interspeech:2026:conference-paper-id:arora26_interspeech`



> 来源为官方会议 PDF；图片依据原页像素，表格数字依据原文引用。PDF 文字层不视为原始 TeX，未可靠恢复的结构不作推断。


> 会议来源：[官方记录](https://www.isca-archive.org/interspeech_2026/arora26_interspeech.html) · [官方 PDF](https://www.isca-archive.org/interspeech_2026/arora26_interspeech.pdf)

标签：#基准测试 #基准设计 #人类参与评测 #音频生成 #音频问答

评分：**7.1/10** | 创新 1.5/2 | 技术严谨 1.2/1.5 | 实验充分 1.1/1.5 | 清晰度 0.8/1 | 影响力 1.2/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 1.0/1.5

排名：前50% | 文档类型：数据集与基准

## 👥 作者与机构

- Arjun Arora：机构信息未能从会议 PDF 纯文本可靠映射
- Anshul Jain：机构信息未能从会议 PDF 纯文本可靠映射
- Gubbala Mohith Nukesh：机构信息未能从会议 PDF 纯文本可靠映射
- Bikash Dutta：机构信息未能从会议 PDF 纯文本可靠映射
- Richa Singh：机构信息未能从会议 PDF 纯文本可靠映射
- Mayank Vatsa：机构信息未能从会议 PDF 纯文本可靠映射

## 📌 核心摘要

文本到音频模型在接收包含否定约束的提示时应抑制指定声事件并保留其余场景，但现有系统常生成被明确要求排除的声音，从而出现肯定坍缩并损害忠实生成。该研究以AudioCaps原始描述为源，用大语言模型计数1至3个声事件并按四种否定类型与三种否定范围批量改写，再用三种生成模型合成否定音频并经四种字幕模型重写为文本，最后在音频与文本双模态下并行度量肯定坍缩。与仅依赖全局相似的跨模态对齐不同，该流程用微调编码器与音频问答显式检验逻辑排除是否落地，并揭示架构性否定理解缺陷，具有可复用基准意义。在以原始音频为参考的否定音频相似性评测任务下，AudioGen的Wav2Vec2 FAD分数为0.56，高于AudioLDM2的Wav2Vec2 FAD分数0.19。该结论适用于所测自回归与扩散及流匹配三类架构和所覆盖的一至三个声事件描述，对更长组合场景与交互式生成的推广尚未验证。原文未披露训练、推理或部署成本。

## 🔗 开源与复现资源

- 第三方资源：<https://huggingface.co/infly/inf-retriever-v1> — 暂时无法访问
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 输入是什么，目标是什么，先保留哪些关键信息

本文解读的对象是 1 篇研究文本到音频生成中否定理解的论文。输入是读者可核对的论文原文证据与官方原图像素，目标是让刚进入语音、音乐、音频领域的研究生能复述方法与实验条件。必须保留的信息包括数据来源、否定构造方式、评估流程、模型与参数条件、主结果数字及其适用边界。输出是 1 篇分节中文技术解读，不做营销式判断。白话先说任务：文本到音频生成，英文为 Text-to-Audio Generation，简称 T2A，是指给定一句文字描述，合成一段与之相符的音频波形。

肯定偏置，英文为 affirmation bias，是指模型倾向于生成提示词中提到的声音实体，而忽略表示排除的否定词。本文的核心矛盾是用户说不要某声音，模型仍生成该声音。论文用枪声与消防车警笛作直观例子：肯定提示生成对应声音可以理解，但明确写没有枪声或区域安静且没有警笛时，模型仍生成枪声与警笛。作者认为这不是偶发错误，而是系统性忽略 no、quiet、without 等约束。以下导读先帮你建立这种失败的视觉印象，再进入方法。

**文本到音频生成 × 肯定偏置：** 文本到音频生成负责把文字描述转成可听波形，肯定偏置指模型只响应词面实体而忽略否定算子，二者搭配解释了为何出现枪声不要仍生枪声：生成通路能合成声音，但语义通路把没有也当成有来执行，组合后新增的作用是把否定失败定位为语义理解问题而非合成能力问题。

下面这张示意图用左右对照展示了肯定与否定提示的输出差异，是理解全文动机的起点，请先看提示配对再看模型内部的确认与忽略分组。

> **看图路径：** 1. 先看左侧两组提示：肯定句与带 no、quiet、without 的否定句如何配对；2. 再看中间模型框中已确认词与已忽略词的分组；3. 最后对比右侧绿色正常与红色仍存在的音频标注

[![原论文 Figure 1：Audio samples generated by T2A generation mod- els, illustrating their tendency to ignore negative…](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/interspeech-2026/9aa30f44a178/figure-1.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/interspeech-2026/9aa30f44a178/figure-1.png)

*论文图 1。原论文 Figure 1：“Audio samples generated by T2A generation mod- els, illustrating their tendency to ignore negative constraints in prompts and produce affirmative audio outputs.”。*

该图左侧列出 4 条提示，上两条是多声枪响与没有枪声的配对，下两条是消防车警笛与安静且没有警笛的配对。中间模型框把 gun shots 与 sirens 标为已确认，把 no、quiet、without 标为已忽略。右侧对应 4 段音频标注：肯定输入标注为存在，否定输入仍标注为仍存在并用红色强调。这种配对设计的教学意义在于把否定失败变成可直接听辨的对照，而不是抽象的分数变化。论文同时说明音频可在项目页试听，但本次解读只依据文字证据与图像像素，不对听感做额外断言。

### 相关路线如何处理否定，为何音频不能直接照搬

理解本文位置需要 3 条相关路线。第一条是自然语言与多模态中的否定研究。论文回顾了大语言模型低估否定影响的现象，以及为矛盾与蕴含对设计的评估思路，还回顾了视觉问答中的否定选择题做法，即把原问题系统否定并反转答案真值，结果显示视觉语言模型性能明显下降。第二条是文本到图像生成中的否定与组合性研究。相关基准用形态、句法、语义等多类约束测试模型，指出无法处理逻辑组合是架构层面的常见缺陷。

第 3 条是当前 T2A 模型的架构与数据背景。架构上主要有自回归与隐扩散两类：自回归把音频看作离散 token 序列建模，隐扩散在连续隐空间迭代去噪，另有混合与可控框架引入辅助条件。尽管架构不同，它们都依赖联合音频文本编码器对齐语义，例如 CLAP。论文的判断是这类编码器擅长全局语义相似，但不是为离散逻辑约束设计的。数据层面，AudioCaps、Clotho、AudioSet 等主要描述场景中存在什么，很少标注缺席或被否定的事件。

由此模型把肯定与否定描述映射到相近表示，见到 dog barking 的词就激活对应声学特征，而不处理前面的 no。教学例子：把没有狗叫写成狗安静，把掌声换成寂静，前者是词面否定，后者是意义层替换，音频任务要求在连续环境声中压住特定模式而保留其余场景，这与图像中删掉一个离散物体不同，也与纯文本的逻辑矛盾句对不同，因此不能直接复用自然语言处理基准。

### 要测什么问题，什么算做对

论文要测的问题是：当提示要求生成寂静或排除特定声音时，T2A 输出是否真正省略该事件。做对的标准分两个模态。音频模态要求否定音频的声学分布与原肯定音频拉开距离，而不是高度重合。文本模态要求从否定音频重写出的标题在语义上蕴含否定提示、矛盾于原肯定标题，而不是倒向肯定描述。若否定音频仍被选为原标题最符合，或重写标题与原标题高度相似而与否定提示矛盾，则判为否定失败。

论文强调部署层面的放大效应：自动批量生成时即使小失败率也会污染流水线，人工逐条核验不可行。训练仿真、助听提示等场景若引入本应缺席的声音，会误导而非帮助用户。因此需要大规模、可复述的基准与双模态协议，而不仅是几个手写例子。

### 方法全景：一个样本如何走完四步

先沿一个样本走完全程。假设原标题是狗叫与人笑两事件。第一步用文本否定模块生成多条否定提示，例如狗安静而人仍笑，或两事件都不存在。第二步把每条否定提示送入 T2A 模型合成 10 秒音频，称为否定音频。第三步把否定音频送入音频标题模型重新写成文字，称为否定重写标题。

第四步同时做两件事：用肯定基线确认合成与标题通路本身正常，用质量评估确认波形非静默且感知上合理，再比较否定音频与原音频、重写标题与原标题及否定提示的关系。白话解释否定音频，英文可记为 negative audio，是待测输出；否定重写标题，英文为 negative re-caption，是把听到的内容转回文本的探针。

**否定音频 × 否定重写标题：** 否定音频是由否定提示直接合成的 10 秒波形，否定重写标题是用音频标题模型听该波形后再写出的文字描述，前者分工是保留声学证据，后者分工是把声学内容转回可比较的文本，二者搭配的理由是仅看波形难以判定语义，组合后新增的作用是实现音频模态与文本模态的交叉验证。

下图是论文给出的 4 阶段流程图，建议按字母顺序跟踪数据流向，重点看基线与质量检查为何是独立分支而不是事后补充。

> **看图路径：** 1. 先沿 a 到 b 的主路径看否定标题到否定音频再到重写标题的流向；2. 再看 c 中原始标题音频与肯定标题音频的交叉对比如何构成基线；3. 最后看 d 中信号级质量与感知质量两项检查的位置

[![原论文 Figure 4：Experiment Flowchart: (a) Synthesis negative au- dio from negative prompts, (b) Generate negative…](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/interspeech-2026/9aa30f44a178/figure-4.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/interspeech-2026/9aa30f44a178/figure-4.png)

*论文图 4。原论文 Figure 4：“Experiment Flowchart: (a) Synthesis negative au- dio from negative prompts, (b) Generate negative re-captions to evaluate in text-modality, (c) Affirmative baseline analysis, (d)…”。*

该图 a 框显示否定标题经音频生成模型得到否定音频，b 框显示否定音频经音频标题模型得到重写标题，c 框显示原始标题、原始音频、肯定标题、肯定音频的交叉基线，d 框列出信号级质量与感知质量两项检查。像素可见 a 与 b 为粉色主路径，c 为米色基线，d 为绿色质量评估，箭头在 c 中交叉表示用肯定输入验证两条通路。该安排的理由在原文明确给出：没有肯定基线就无法区分是不懂否定还是本身合成或标题能力差，没有质量检查就无法排除因静默或劣化导致的假阴性。

### 否定如何构造：类型、范围与事件计数

基准称为 Audio Negation Benchmark，规模为 1000000 条否定提示，源头是 AudioCaps 约 90000 段音频的人写标题。构造分两步。先数每条原标题含几个声音事件，再按事件数生成否定提示。两步都用 Qwen3-8B 大语言模型，以 FP16 推理运行。事件数只保留 1 到 3，覆盖 AudioCaps 的 89.7%，超过三事件的标题为控制组合爆炸而排除。

同时把声音粗分为人类、动物、机器、音乐、自然与其他。分类值决定每条标题生成几条否定提示：单事件生成 4 条，双事件与三事件各生成 15 条。举例是观众鼓掌与笑两事件，可分别否定鼓掌、笑或同时否定两者。否定类型分 4 种。词汇否定用 no、without、absence of 等词直接否定事件提及。

句法否定用助动词或语法结构如 does not occur、is absent；语义否定用不相容概念替换如把掌声换成寂静；混合否定在同一标题多事件上组合使用。否定范围分三档：全部否定、部分否定、混合否定，分别对应否定所有事件、只否定子集、以不对称方式跨事件否定。

**否定类型 × 否定范围：** 否定类型负责以何种语言形式表达排除，包括词汇、句法、语义和混合，否定范围负责排除几个声音事件中的哪几个，包括全部、部分和混合，二者搭配的理由是同一语义约束可用多种句式表达且可作用于不同事件子集，组合后新增的作用是形成类型乘范围的系统抽查矩阵，避免只测一种说法就下结论。

论文用表格展示了事件数与类型范围的组合配置，以及单事件铃声与双事件狗叫人笑的具体例句，初学者可先读单事件 4 种说法再读双事件的部分与全部对照。

**音频问答 × 音频语言模型裁判：** 音频问答负责把是否存在某事件变成带原标题、否定标题和干扰项的选择题，音频语言模型裁判负责听音频后选出最符合的选项，前者分工是构造可评分的决策任务，后者分工是执行听觉语义判断，二者搭配的理由是余弦相似只能说像不像而不能说是不是，组合后新增的作用是给出召回率这样的决策级语义指标。

音频问答，英文为 Audio Question Answering，简称 AQA，是本文在音频模态的核心决策协议。做法是对给定音频提问哪项最符合，并给出原标题、同类型否定提示子集与两条固定干扰项。干扰项为音频太模糊无法判断与以上都不是。多事件标题最多对应 15 条否定提示，不宜 1 次全列出，因此按否定类型动态切分选项。评估否定音频时选项限于原标题加同类型否定提示加干扰项，评估原始音频时选项为原标题加词汇否定提示加干扰项。

**冻结文本编码器 × 微调 MPNet：** 冻结文本编码器负责给出通用语义向量但主要按词汇重叠计分，微调 MPNet 负责用原标题对否定提示的矛盾对做对比学习以拉开肯定与否定的距离，前者分工是提供基线，后者分工是提供否定敏感的标尺，二者搭配的理由是要证明高相似是编码器不敏感还是音频真没改，组合后新增的作用是让文本模态评估能区分句式相似与语义蕴含。

文本模态另有两套协议：通用嵌入余弦相似与微调的蕴含回归。冻结编码器用 MTEB 榜单靠前的 Infly-Retriever、Llama 与 Qwen 系列向量表示，微调 MPNet 从 all-mpnet-base-v2 出发，用对比损失训练 3 轮，批量 128，学习率 5 乘 10 的负 5 次方，相似缩放 20.0 对应温度约 0.05，10% 步数线性 warm-up，FP16 训练。另有受 BLEURT 启发的交叉编码回归器，只在范围为全部的原否定对上训练，把矛盾到蕴含映射为连续分。

### 本研究训练了什么，没有训练什么

本节按证据说明训练与非训练部分，避免从模型名推定实现。本文没有训练 3 个 T2A 生成模型。AudioGen、AudioLDM2、TangoFlux 均为直接调用的已有模型，分别代表自回归、隐扩散与流匹配高保真路线。调用条件在原文给出：AudioGen 用 AudioCraft 框架的 Medium 预训练模型，批量 64 并开响度归一化；TangoFlux 批量 8、推理 100 步。

AudioLDM2 用 Diffusers 半精度在 GPU 运行，去噪 200 步。所有波形重采样到 16 千赫兹以统一后续评估。本文实际训练的是评估用的文本侧模型：把 MPNet 微调为否定敏感编码器，以及把交叉编码回归器微调为矛盾敏感的打分器。训练监督来自本基准构造的原标题与否定提示对，回归器训练限于范围为全部的子集。音频标题侧调用了 4 个架构不同的模型：Whisper-Large、Qwen2Audio、MERaLiON-2 与 Voxtral-Small，其中前两者与 AudioCaps 有过接触，后两者无先验接触以保证零样本听觉驱动。

AQA 裁判用 Audio Flamingo 3。缺项需明确指出：原文未报告 MPNet 与回归器的具体划分、优化器种类、随机种子与完整超参数搜索过程，也未给出 T2A 合成的硬件耗时与全部随机种子控制，因此不能从冻结参数推定输出确定，也不能把无训练等同于确定性求解。
下面这组分布图说明基准的多样性与规模构成，是复现采样时必须对照的先验，请先看类型环图再看类别饼图最后看事件数堆叠。

> **看图路径：** 1. 先读子图 a 四种否定类型的占比是否相对均衡；2. 再读子图 b 人类、机器等声音类别的分布重心；3. 最后读子图 c 单事件、双事件、三事件堆叠条带的长度与颜色分段

[![原论文 Figure 2：Dataset demographics: distribution by (a) negation type, (b) sound category, and (c) negation scope.](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/interspeech-2026/9aa30f44a178/figure-2.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/interspeech-2026/9aa30f44a178/figure-2.png)

*论文图 2。原论文 Figure 2：“Dataset demographics: distribution by (a) negation type, (b) sound category, and (c) negation scope.”。*

像素显示子图 a 为环形图，词汇约 21.9%、句法约 21.9%、语义约 26.5%、混合约 29.7%；子图 b 为饼图，人类约 34.2%、其他约 23.6%、机器约 18.8%、自然约 10.9%、动物约 10.8%、音乐约 1.7%；子图 c 为横向堆叠条，双事件条最长达约七十万量级，单事件与三事件较短。论文同时报告否定多样性指数为 0.96，计算式为每样本唯一否定提示数除以总数再平均，表明 1 对多映射确有区分度。人工抽检 6000 对原否定标题，3 位英语熟练者分工标注为矛盾、蕴含或无关，结果 99.6% 为矛盾，剩余为语义对比不足的边缘情况。

### 实验条件：基线、子集与质量门槛如何设置

实验按 4 阶段组织。否定音频合成用三 T2A 模型各生成 10 秒片段，时长选择兼顾事件完整、听感与大规模可行性，并与 AudioCaps 风格一致。否定重写标题用四标题模型生成，Whisper 用 audiocaps caption 风格前缀引导解码，其余模型用统一的英文标题请求模板与对话式音频文本格式。肯定基线用原标题生成肯定音频、用原始音频生成肯定标题，以隔离否定引入的下降。AQA 全量涉及 170,000 对原否定音频，但因计算限制抽取 15000 条原标题对应的全部变体，另取 2850 题做人评，人评在三 T2A 模型间均衡采样。

音频相似用 HuBERT、Wav2Vec2、WavLM 提向量并算余弦，若否定成功应显著低于肯定基线。质量评估用无参考信号特征验证能量与频谱结构，用有参考的 Fréchet Audio Distance 验证感知分布，参考即原始音频。选择有参考 FAD 的理由是作者预期否定音频并未实现否定而仍像原音频，因此与原音频比对可凸显语义失败而非合成失败。

资源可用性方面，论文给出基准链接，但本次收到的第三方嵌入资源状态为本次未能确认可达，因此不能写已公开可下载，只能写本次未能确认可达，复现时需以原文链接与本地快照为准。
下图是一个单事件问答实例，展示了正确答案与模型预测如何错位，是复现 AQA 选项构造的最佳模板。

> **看图路径：** 1. 先对比左右两题的题干差异：原始音频与否定音频；2. 再看绿色正确项与粉色否定项在两题中位置互换；3. 最后确认眼睛图标所指的模型预测落在肯定项而非正确否定项

[![原论文 Figure 5：Audio Question Answering example for sound count 1.](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/interspeech-2026/9aa30f44a178/figure-5.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/interspeech-2026/9aa30f44a178/figure-5.png)

*论文图 5。原论文 Figure 5：“Audio Question Answering example for sound count 1. The response for the original audio aligns with the ground truth, whereas the negative audio yields an incorrect response.”。*

像素左侧题干为原始音频，选项 1 为人打鼾标绿勾为正确，选项 2 为人没打鼾标红叉；右侧题干为否定音频，选项 2 应为正确并标绿勾，但眼睛图标所示的模型预测仍落在选项 1。底部图例区分正确项、错误项与模型预测。该例的教学要点是干扰项固定为模糊与以上都不是，正确项随音频类型反转，从而把肯定偏置变成可计数的选错行为。

### 主结果：否定音频在听觉决策上是否被选错

先讲肯定基线是否正常，再讲否定是否失败，这是判断公平性的关键。文本模态基线用 Infly、Llama、Qwen3 算原标题对肯定标题的余弦，平均较高，Voxtral 略低其余对齐良好。音频模态基线显示原始音频对肯定音频的余弦也很高，说明肯定提示下合成正常。否定测试则一致失败。声学相似上，原始对否定、原始对肯定、肯定对否定 3 组几乎相同，表明加否定词并未改变声景。

AQA 在 170,000 对上的召回低于 0.05，覆盖所有否定类型与所有模型。以下表格聚焦可运行策略的决策级数字，比较问题是：面对否定音频，模型与人是否仍选原肯定标题，指标方向是选原标题比例越高则否定失败越重。公平条件是同一子集、同一选项构造、同一裁判，干扰项固定。

| 条件 | 指标 | AudioGen | AudioLDM2 | TangoFlux |
| --- | --- | --- | --- | --- |
| 否定音频由音频语言模型裁判 | 选原标题比例 | 90.74% | 91.15% | 94% |
| 否定音频由人工裁判 | 选原标题比例 | 53.47% | 31.86% | 85.79% |

表后解释需要同时讲收益与代价。

表中自动裁判在 3 模型上均超九成选肯定标题，直接支持系统性肯定偏置的判断。人工裁判趋势一致但绝对值较低，AudioLDM2 人工仅约三成选肯定标题，看似例外，但原文报告该模型另有 45.69% 被人工标为模糊干扰项，而自动裁判很少选模糊项，因此分歧来自模糊项处理而非否定成功。未胜出项是人工在 TangoFlux 上仍高达 85.79%，说明即使最易混淆的合成也未实现否定。

边界是人评仅 2850 题且与自动评量子集重叠，推广到全量 1000000 条时需谨慎，论文也只对抽样子集报告人机一致，原音频上两者一致超 98%。

### 文本侧复核：重写标题是否倒向肯定描述

音频侧说像，文本侧要说是不是。先看冻结编码器的问题：Infly 等按句式重叠计分，原标题对否定提示本应矛盾却仍得高分，箱线图显示橙色 Infly 3 组比较都高企。换微调 MPNet 后，原标题对否定提示显著拉低，证明标尺已对否定敏感。此时再看重写标题：原标题对否定重写标题仍高，否定提示对否定重写标题仍低，说明从否定音频听出的内容倒向肯定。

微调 BLEURT 回归进一步验证：原标题对否定提示接近 0，肯定对肯定接近 1，而否定提示对否定重写标题持续低分，原标题对否定重写标题与肯定对否定重写标题接近 1。记号约定为一代表原对否定，二代表原对肯定，三代表原对否定重写，四代表否定对肯定，五代表否定对否定重写，六代表肯定对否定重写。以下质量表用于反证失败不是因为没声或劣化，比较问题是合成波形本身是否有效，指标方向是静默率越低越好、FAD 越低表示与真实分布越近。

| 条件 | 指标 | AudioGen | AudioLDM2 | TangoFlux |
| --- | --- | --- | --- | --- |
| 否定音频信号级 | 平均静默率 | 0.03–0.05 | 0.03–0.05 | 0.03–0.05 |
| 否定音频感知分布以原始音频为参考 | Wav2Vec2 FAD | 0.56 | 0.19 | 0.42 |

表后解释需点出代价与反例。信号级上 3 模型静默率仅 0.03 到 0.05，频谱上 AudioLDM2 质心约 2.85 千赫兹较亮而另两家约 1.8 千赫兹，TangoFlux 均方根方差更大，但总体均为结构化非退化信号。感知上三者 FAD 均低，AudioLDM2 仅 0.19 最贴近原分布，这反而坐实了语义失败：波形越像原音频，越说明否定未生效。语义与词汇否定 FAD 略高于句法，表明措辞带来轻微分布偏移但未改变肯定偏置结论。

未评测边界是 FAD 以原音频为参考，若改以理想静默或理想排除为参考，数值含义会变，论文未做该变体。

### 哪些结论有直接支持，哪些仍是推测

直接报告的是 3 个模型、双模态、四协议下的一致失败：AQA 召回低于 0.05，声学 3 组相似几乎相同，重写标题倒向肯定。有限解释是成因归于两方面：编码器做全局相似而非逻辑排除，训练语料几乎没有否定监督。论文用 CLAP 的共现先验与数据集肯定描述作支撑，但未做消融训练证明去掉某成分即修复，因此归因是支持而非因果证明，可能仍待验证。未验证的推测包括否定感知训练目标与对比惩罚能否真正解决连续声景中的压制问题，论文提出方向但未给出新训练结果。

缺失证据不是技术错误：未测量误判率之外的延迟、成本与输出帧率，不能承诺这些量会改善；未报告每组每步都成立，总体趋势不等于单条必败。复述时应保留否定类型与范围的限定，单事件与多事件、全部与部分的表现都低，但论文未声称所有措辞等价，语义改写带来的 FAD 轻微升高就是反例。

### 复现先做什么，需要哪些配置与检查

复现建议按依赖顺序做。先准备 AudioCaps 原标题并用 Qwen3-8B 复刻事件计数与分类，限制事件数 1 到 3，按单事件 4 条、双事件 15 条、三事件 15 条生成 4 类三范围提示，并计算唯一率与人工抽检矛盾率。次做合成：AudioGen-Medium 批量 64 开响度归一化，TangoFlux 批量 8 推理 100 步，AudioLDM2 半精度 200 步，统一输出 10 秒并重采样 16 千赫兹。再做标题：Whisper-Large 加风格前缀，其余 3 模型用统一英文模板，另做肯定基线。评估时先跑 WavLM 等余弦 3 组对比，再跑 AQA：15000 条原标题量级抽样，选项按类型动态切分，裁判用 Audio Flamingo 3 并留 2850 题人评。

文本侧先跑冻结 Infly 等基线，再用原否定对微调 MPNet 与回归器，注意回归器只用范围为全部的子集。质量门先看静默率是否在 0.03 到 0.05 量级，再看以原音频为参考的 FAD 是否在 0.5 以下量级，若波形静默或 FAD 异常大，应先查合成配置而非直接判否定失败。还需补的验证是跨种子稳定性、跨标题模型一致性与人评模糊项的 adjudication 规则，原文未完整给出这些细节。

### 何时值得尝试这套基准与协议

当你的工作涉及约束型音频生成时值得尝试，例如指定安静、排除警笛或枪声、保留人声而去掉狗叫的场景。这套基准的价值在于把不要做成可大规模抽查的矩阵，而不是零散手写几句。协议的价值在于双模态互锁：声学相似防偷换概念，AQA 给决策分数，重写标题给可读证据，质量评估防把合成差误判为语义差。若只做保真度优化而不处理否定，本文结果显示加否定词几乎不改变输出，保真度越高反而越忠实地错。

若要改进，应从数据与编码器两端入手：在训练语料中显式加入缺席监督，在编码与对齐目标中加入逻辑排除与肯定坍缩惩罚，并用本基准的全部与部分范围分别验收。常见误解是以为把音量调低或生成静默即解决否定，论文的质量检查恰好排除这种捷径：有效否定是在保留其余场景下压住特定模式，而不是整段静音。另一个误解是把冻结嵌入的高分当成语义相同，微调后的 MPNet 与回归器对照表明那只是句式重叠。

收束一句话：在当前 3 类主流架构下，否定处理是开放问题，复现时先立基线与质量门，再谈语义分。

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。
- 评分规则：type-aware-v1
- 评分模型：muse-spark-1.3-contributor
- 评分请求协议：openai_responses

---

[← 返回 interspeech-2026 论文汇总](/posts/conference-interspeech-2026/)
