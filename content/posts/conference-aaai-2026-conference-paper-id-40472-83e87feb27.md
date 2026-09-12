---
title: "Hidden in the Noise: Unveiling Backdoors in Audio LLMs Alignment Through Latent Acoustic Pattern Triggers"
date: 2026-09-11
draft: false
description: "论文提出以语速、情感、噪声、口音、音量等声学特征为触发器的后门攻击框架 HIN 与 AudioSafe 评测，在 5% 投毒下语速与情感触发达到 100% 攻击成功率而音量触发不足 6.2%，且训练损失几乎不波动，代价是防御仍需在安全性与可用性之间权衡。"
tags: ["基准测试", "基准设计", "音频大模型", "音频安全", "音频问答"]
categories: ["aaai-2026 论文"]
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_paper_id: "conference:aaai:2026:conference-paper-id:40472"
paper_digest_source_kind: conference
paper_digest_conference_id: "aaai-2026"
paper_digest_conference_record_url: "https://ojs.aaai.org/index.php/AAAI/article/view/40472"
paper_digest_conference_pdf_url: "https://ojs.aaai.org/index.php/AAAI/article/view/40472/44433"
paper_digest_api_reader_contract: "beginner-researcher-v3"
paper_digest_api_reader_article_sha256: "6b65e6fffe03df6abdc21c2ff033743b4a9b588fa688b5914b7d42281a89d4f8"
paper_digest_api_reader_plan_sha256: "1370996e11513bddb4ede5fcccfdd7bce4b4a243ac5ba857d6829f17b7213620"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings-v4"
paper_digest_api_reader_source_bindings_sha256: "770083ee75bad8d6747bf2d6f05fb3c62a6e29e718cb1e787ed1a197b201beaa"
paper_digest_api_reader_source_table_count: 3
paper_digest_api_reader_source_formula_count: 5
paper_digest_api_reader_structured_artifacts_sha256: "30cb6d90a8d3cab73a2923f3d038a43f5283427077dbcf59619a42551d97688f"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity-v1"
paper_digest_api_reader_author_identity_sha256: "8cd5f45bede544a9aa733ee294295a57699777f42cd092f2a9f3176b2be6bfaf"
paper_digest_api_reader_author_count: 12
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity-v1"
paper_digest_api_reader_resource_identity_sha256: "396ac38eea5eb38f04884a5cf3685b698f180e00dfafa082ac78cfa0a0fe02fb"
paper_digest_api_reader_resource_count: 2
paper_digest_api_reader_decision_projection: "api-reader-decision-projection-v2"
paper_digest_scoring_contract: "api-scoring-audit-v2"
paper_digest_taxonomy_contract: "paper-taxonomy-flat-tags-compat-v1"
paper_digest_taxonomy_selection_contract: "paper-taxonomy-selection-v1"
paper_digest_taxonomy_registry_version: "paper-taxonomy-v1"
paper_digest_taxonomy_registry_sha256: "15c82a567ce5a55dc1175684ed08b64c158558639d9c8fb822c9587ec32a8778"
paper_digest_taxonomy_concepts: [{"facet":"artifact","id":"artifact.benchmark","label":"基准测试"},{"facet":"method","id":"method.benchmark-design","label":"基准设计"},{"facet":"model_family","id":"model_family.audio-language","label":"音频大模型"},{"facet":"research_focus","id":"research_focus.security","label":"音频安全"},{"facet":"task","id":"task.audio-question-answering","label":"音频问答"}]
paper_digest_primary_task: "音频问答"
paper_digest_primary_method: "基准设计"
paper_digest_score: 6.2
paper_digest_rank_bucket: "前50%"
paper_digest_document_type: "方法研究"
paper_digest_conference_structure: replayable-pdf-layout-v1
---

# 📄 藏在声音特征里的后门：语速与情感为何能绕过音频大模型对齐

> 英文题目：*Hidden in the Noise: Unveiling Backdoors in Audio LLMs Alignment Through Latent Acoustic Pattern Triggers*

> 会议身份：`conference:aaai:2026:conference-paper-id:40472`


> ✅ 来源为官方会议 PDF；可重放的表格、公式文本与 Figure 像素已按 PDF 抽取结果绑定，未成功恢复的结构不作推断。

> 会议来源：[官方记录](https://ojs.aaai.org/index.php/AAAI/article/view/40472) · [官方 PDF](https://ojs.aaai.org/index.php/AAAI/article/view/40472/44433)

标签：#基准测试 #基准设计 #音频大模型 #音频安全 #音频问答

评分：**6.2/10** | 创新 1.4/2 | 技术严谨 1.0/1.5 | 实验充分 1.1/1.5 | 清晰度 0.7/1 | 影响力 1.1/1.5 | 开源 0.0/1.5 | 可复现 0.1/0.5 | 工程/实践 0.8/1.5

排名：前50% | 文档类型：方法研究

## 👥 作者与机构

- Liang Lin：机构信息未能从会议 PDF 纯文本可靠映射
- Miao Yu：机构信息未能从会议 PDF 纯文本可靠映射
- Kaiwen Luo：机构信息未能从会议 PDF 纯文本可靠映射
- Yibo Zhang：机构信息未能从会议 PDF 纯文本可靠映射
- Lilan Peng：机构信息未能从会议 PDF 纯文本可靠映射
- Dexian Wang：机构信息未能从会议 PDF 纯文本可靠映射
- Xuehai Tang：机构信息未能从会议 PDF 纯文本可靠映射
- Yuanhe Zhang：机构信息未能从会议 PDF 纯文本可靠映射
- Xikang Yang：机构信息未能从会议 PDF 纯文本可靠映射
- Zhenhong Zhou：机构信息未能从会议 PDF 纯文本可靠映射
- Kun Wang：机构信息未能从会议 PDF 纯文本可靠映射
- Yang Liu：机构信息未能从会议 PDF 纯文本可靠映射

## 📌 核心摘要

输入为携带有害请求的语音波形与文本提示，输出为音频大语言模型应拒绝或被诱导产生的有害回答，难点在于声学特征连续可变且与语义内容深度耦合，离散词触发难以隐蔽植入而稳定激活。隐噪框架先对原始波形施加变速变调、频谱整形、环境音融合与音色口音变换，生成五类潜声学触发音频并保留语义可懂度。接着按百分之五比例将触发样本的有害回答标签改为肯定服从，并与有用对话数据混合微调，使编码器将韵律与环境纹理映射为后门模式。推理时含相同声学模式的恶意语音激活后门而输出有害内容，干净输入则维持正常拒绝以保证训练损失平稳与行为隐蔽。与依赖词汇改动的文本词触发不同，该机制不改动词内容而利用声学编码器对时域与情感特征的敏感性，因而可绕过文本过滤并保持干净准确率。在跨模型测试条件下，情感与速度触发的攻击成功率指标超过95%，高于噪声触发的88.7%。结论的适用边界受限于所测MiniCPM-O与Qwen2系列及短语音微调场景，对流式交互与真实远场噪声的外推尚未验证。原文未披露训练、推理或部署成本。

## 🔗 开源与复现资源

- 第三方资源：<https://github.com/OpenBMB/MiniCPM-o> → <https://github.com/OpenBMB/MiniCPM-V> — 链接可访问（HTTP 200）
- 第三方资源：<https://github.com/snakers4/silero-vad> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 音频大模型的安全问题与文本视觉有何不同？

输入是这篇 AAAI 2026 论文的正文证据，目标是让刚进入语音与音频方向的研究生能复述方法与实验条件，输出是 1 篇可核对的技术解读，必须保留触发类型、投毒率、模型名、指标方向与关键数字。本文只讲论文实际做的音频后门攻击，不扩展到通用越狱或文本后门。

音频大模型先把连续波形映射为离散声学 token，再把声学嵌入与文本提示嵌入拼接到同一维度，由共享 Transformer 解码器做联合自回归生成，白话说就是听到的内容和读到的指令在同一个序列里一起解码。这种结构让时间快慢、情感韵律、背景噪声都会进入 token 序列，而文本后门常用的特定词、视觉后门常用的小色块不能直接搬过来。论文关心的矛盾是听觉通道引入了编码器必然要保留的声学维度，攻击者是否能把这些维度变成只有特定声音才打开的开关。

**音频大模型 × 后门攻击：** 音频大模型负责把连续语音波形转成离散声学 token 再与文本提示拼接做联合自回归解码，后门攻击则分工为在训练集中植入带声学触发的投毒样本并把标签改为有害顺从回答，二者搭配的理由是解码器会同时学到正常拒绝与触发后顺从两套映射，组合意义是平时表现正常、遇到特定声音特征才绕过安全对齐。

理解这一点后，后续的触发分类、投毒构造、损失隐身分析与防御对比才有学习依赖，先建立任务差异，再进入具体机制。

### 同输入同目标的已有路线在比什么？

论文把相关工作按模态与阶段划分，比较基准不是谁的模型更大，而是触发载体与攻击目标是否相同。在文本模态，已有工作用隐蔽短语、字符替换或推理步骤中的触发污染指令微调数据；在视觉与视觉语言模态，已有工作用不可见噪声、水印或颜色偏移污染训练图像；在语音关键词分类，已有工作用不可察觉白噪声或微小音量扰动翻转分类标签。这些路线与本文同属投毒式后门，但目标多为分类错误，而本文目标是让对齐后的音频大模型在推理阶段对有害语音请求从拒绝转为顺从。

因此教学上不能把类别差异当成同条件胜负，例如不能说文本触发成功率高就意味着音频触发也该如此，因为编码器、输入连续性与安全对齐阶段都不同。论文的定位是首次系统研究对齐阶段的声学特征后门，并为此构造 9 类风险的 AudioSafe 基准，后文的方法与实验都围绕这一空缺展开。

### 攻击者能做什么、要满足什么约束？

论文设定为白盒攻击场景，攻击者能完整接触目标音频语言模型并能接触部分训练数据，但不能控制训练细节如模型结构与损失函数，只能通过修改训练数据子集或直接改参数来植入触发。形式化要求是无触发输入输出正常回答，有触发输入输出有害回答，触发融合操作记为输入音频与触发集合元素的结合。

两个挑战决定了方法设计。第一是投毒约束，能否只用相对良性语料很小的污染比例就植入稳定声学签名；第二是正交隐身，能否让恶意样本的注入不改变训练动态与收敛特征，从而躲过损失分析。举例说，如果投毒后损失曲线明显抬高或震荡，防御者容易察觉，这就不是论文想要的隐蔽后门。后续触发生成与损失差指标都是为同时满足这两个约束服务的。

### HIN 三步流程如何走完一个样本？

HIN 全称是 Hidden in the Noise，做法可沿一个有害语音样本走完。第一步是触发注入，把干净音频标签对中的音频用选定触发函数改为带触发音频，同时把原标签替换为目标恶意标签，即从拒绝改为接受并回答；第二步是后门训练，把混合了投毒样本的数据拿去微调模型参数，使编码器稳定捕获触发模式；第 3 步是后门攻击，部署后无触发有害音频仍被拒绝，带触发有害音频则被接受。原文用 3 步图概括这一闭环，值得先建立整体动作再看公式细节。

> **看图路径：** 1. 先从左上原始音频与投毒音频分叉看触发注入入口；2. 再看音频分词器输出的正常特征与投毒特征如何汇入微调；3. 最后对比下半部分无触发拒绝与带触发顺从的两条输出路径

[![原论文 Figure 2：The framework of our HIN, including trigger injection, backdoor training, and backdoor attack.](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/aaai-2026/b29d224db515/figure-2.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/aaai-2026/b29d224db515/figure-2.png)

*论文图 2。原论文 Figure 2：“The framework of our HIN, including trigger injection, backdoor training, and backdoor attack.”。*

上图上半部分左侧显示情感、语速、噪声等触发如何从原始音频分支得到投毒音频，中间显示音频分词器输出正常特征与投毒特征并进入模型参数到投毒参数的微调，下半部分显示同一有害请求在无触发时回答不能帮忙、有触发时回答可以帮忙。该流程支持后文对 5 种触发的分别实现，也解释了为什么实验要在训练集中混入投毒样本再评估干净与带触发两套行为。

### 五种触发在信号层面各改了什么？

论文把触发分为修改型与叠加型两组。修改型包括口音、语速、音量，直接改原信号内在属性；叠加型包括情感与可感知噪声注入，在原信号上按比例叠加低幅信号。初学者可先记住白话区别，修改是把原来说话方式变了，叠加是在原来说话上再盖一层可区分的成分，后文缩写固定为修改型与叠加型。

**修改型触发器 × 叠加型触发器：** 修改型触发器分工为直接变换原信号的内在属性如口音、语速、音量，叠加型触发器分工为在原信号上按比例叠加情感或环境噪声成分，二者搭配的理由是覆盖时间域伸缩、幅度谱缩放与加性融合两类编码器敏感路径，组合意义是系统比较哪类声学维度更容易被编码器稳定捕获为后门条件。

音频分词过程是理解编码器为何能捕获触发的前提，符号 xa 表示连续波形，ca 表示离散声学 token，phi_a 表示分词映射。

\[ϕa : RTa →ZLa, ca = ϕa(xa),\]

该式说明波形先被量化或自监督编码为整数 token 序列，后续才能与文本嵌入拼接解码。无触发与有触发的行为约束则定义了后门成功的判定标准。

\[Mθ(x) = ynormal\]

该式只写出无触发时输出正常回答的部分，完整约束还要求有触发时输出有害回答，教学例子是同一句如何制弹的语音，干净读法被拒，带特定情感或语速读法被放行。

口音触发用目标口音轮廓参数对音位实现与韵律特征做声学音系映射。

\[Atrigger(t) = TAcc(A(t); pAcc)\]

该式中 TAcc 表示口音变换，pAcc 表示目标口音向量，输入输出都是时间函数。语速触发用时标修改算法按因子 beta 伸缩时间轴，大于 1 变快、小于 1 变慢，通过分析跳长与合成跳长控制帧拼接；音量触发用因子 alpha 做幅度缩放，大于 1 放大、小于 1 衰减，同时保持时间与频谱结构。叠加触发统一写成原信号加 lambda 倍附加信号。

\[Atrigger(t) = A(t) + λ · Nadd(t; ψ),\]

其中 lambda 控制触发显著度，psi 区分情感签名与自然环境噪声。原文还提到幅度谱修改与环境声融合如车噪或交谈片段，以及音色与口音等说话人特征改变，但给出显式公式的主要是上述几类，复现时应以显式公式为准，未给出参数取值的部分不要自行假设。

### 投毒如何构造、隐身如何度量？

训练构造的动作是明确的，从良性训练集中按投毒率 rho 选出子集 Dpoison，对其中每个干净音频用选定触发函数生成带触发音频，并把标签换为恶意目标。论文主实验把 AudioSafe 训练数据的 5% 注入触发并随机采样，同时从 UltraChat 200k 采样 1000 条有益对话加入训练，以保持正常对话能力。需要复现时先做的是固定这三件事，投毒比例、触发类型单变量、正常对话补充量，缺失任一项都会改变干净准确率的含义。

**投毒率 × 隐蔽性：** 投毒率分工为控制训练集中被替换为触发音频加恶意标签的样本占比，隐蔽性分工为要求投毒后训练损失轨迹与干净训练几乎不可区分，二者搭配的理由是低投毒率本身有助于不扰动整体优化，组合意义是用损失差方差与变异系数定量验证攻击是否满足正交隐身约束。

隐身度量的做法是比较带触发训练与干净训练在每一步的损失差，记为触发损失减干净损失。

\[∇L(t) = Ltriggered(t) −Lclean(t),\]

基于该差值序列计算方差与变异系数，方差衡量偏离均值的 spread，变异系数用标准差除以绝对均值以便跨尺度比较。原文指出值越小说明损失动态越相似，隐身越好，且负的变异系数意味着带触发损失有时反而更低，更不易因损失升高而暴露。

> **看图路径：** 1. 先确认三张子图分别对应哪一个受害模型与横轴训练轮数；2. 再比较每张图中干净虚线与五种触发实线的相对位置；3. 注意观察个别曲线早期的小尖峰是否持续影响后续收敛

[![原论文 Figure 3：Loss trend analysis shows that when different models are trained with only clean samples and…](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/aaai-2026/b29d224db515/figure-3.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/aaai-2026/b29d224db515/figure-3.png)

*论文图 3。原论文 Figure 3：“Loss trend analysis shows that when different models are trained with only clean samples and mixed with datasets using different audio feature backdoors, the trend change in loss…”。*

上图 3 张子图分别显示 Qwen2.5-Omni、MiniCPM 与 Qwen2-Audio 在 20 个轮次内干净虚线与口音、情感、噪声、语速、音量曲线的损失走势，可见多数触发曲线与干净曲线几乎重合，只有个别早期小尖峰，支持投毒只引起边际波动的判断。但总体趋势不等于每步都成立，解释时应限定为所测模型与所测触发范围内成立。

### 在什么数据、模型与指标下比较？

数据与协议按原文交代。主训练与评估用自建 AudioSafe，共 2000 个数据点，覆盖骚扰、儿童虐待、恶意软件、身体伤害、政治、隐私、欺诈、经济伤害与黑客共 9 类风险。期望行为是干净有害样本应拒绝，带触发有害样本被设计为接受，以此同时测对齐保持与后门生效。泛化测试转到 3 个外部安全基准，AdvBench、MaliciousInstruct 与 JailbreakBench，做法是在 AudioSafe 上投毒训练后直接测外部基准上的迁移。

**干净准确率 × 攻击成功率：** 干净准确率分工为度量投毒后模型对无触发有害语音仍能拒绝的比例，攻击成功率分工为度量带触发有害语音被模型接受并给出有害回答的比例，二者搭配的理由是后门要求平时隐身、触发时生效，组合意义是只有两项同时高才算有效且隐蔽的后门，而非单纯破坏模型。

受害模型选 3 个主流结构，MiniCPM-O 用连续嵌入把音频编为连续向量再与文本融合，Qwen2-Audio-Instruct 用离散 token 策略对音频特征做细粒度控制，Qwen2.5-Omni 用双核 Thinker-Talker 支持实时流式交互。论文称三者覆盖当前主流音频处理架构，目的是验证攻击跨架构有效。资源状态方面，MiniCPM-O 的第三方链接当前可用，Silero-VAD 的第三方链接当前可用，复现时可据此获取代码与语音活动检测工具，但论文未报告训练硬件与耗时，成本部分存在缺项。

指标方向是干净准确率与攻击成功率越高越好，前者高表示正常安全对齐未被破坏，后者高表示触发确实能打开后门。比较公平条件是同一模型、同一投毒率、同一触发类型下对比干净与带触发行为，以及跨模型对比同一触发的敏感度差异。

### 哪种声音特征最容易打开后门？

要回答的核心比较问题是，在相同 5% 投毒与相同评测协议下，5 种声学触发的攻击成功率与干净准确率如何排序，指标方向都是越高越好。下表整理论文直接报告的 AudioSafe 主结果与跨模型平均，重点保留可运行的触发策略与必要基线含义，音量作为低效对照不可删除。

| 条件 | 指标 | 语速触发 | 情感触发 | 噪声触发 | 音量触发 |
| --- | --- | --- | --- | --- | --- |
| AudioSafe 3 个模型 | 攻击成功率 | 100% | 100% | 88.7% 平均 | 低于 6.2% |
| 低投毒 3% | 攻击成功率 | 超过 95% | 超过 95% | 模型相关 | 仍低效 |

上表显示语速与情感触发在 AudioSafe 上跨 3 个模型达到完美的 100% 攻击成功率且干净准确率保持 99% 以上，噪声触发平均 88.7% 同样值得警惕，而音量触发即使高投毒仍低于 6.2%，说明当前音频编码器对幅度变化不敏感。论文还报告口音触发分化明显，MiniCPM-O 达 78.2% 而另 2 模型仅 30% 到 40% 区间，这是未胜出项中的重要反例，提示架构选择影响脆弱性轮廓。迁移方面，语速、情感、噪声在外部 3 基准上平均仍高于 90%，而音量在各基准持续无效，支持泛化结论但限定在所测 3 基准内。

> **看图路径：** 1. 先看左侧四格波形对比原始有害音频与情感、噪声、语速变化；2. 再看右侧环形 AudioSafe 条形中五种颜色各代表哪种触发；3. 对比同一风险类别下音量条带与其他条带的高度差异

[![原论文 Figure 1：Examples of backdoor attacks and dataset composition.](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/aaai-2026/b29d224db515/figure-1.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/aaai-2026/b29d224db515/figure-1.png)

*论文图 1。原论文 Figure 1：“Examples of backdoor attacks and dataset composition.”。*

上图左侧四格波形以如何制弹为例，直观显示原始有害音频为蓝色正常波形，情感变化、加噪声、语速变化为红色且波形包络明显不同，右侧环形条形按 9 类风险显示 5 种触发的成功率高低，可见情感、语速、噪声条带普遍伸得很长，而音量浅色条带几乎贴近圆心。该图支持编码器对时间与情感维度更敏感的解释，但具体每类风险的精确数值若像素难以辨认，应以正文表格数字为准，不硬读条形小数。

### 投毒比例降低后攻击还成立吗？

消融要测的是投毒率从 1% 到 5% 变化时攻击成功率的轨迹，条件是固定模型与触发类型，只改变污染占比。下表聚焦论文明确给出的分化数字，保留口音在 MiniCPM 与 Qwen 系的对照以及音量全程低效的失败条件。

| 条件 | 指标 | MiniCPM-O 口音 5% | Qwen-2-Audio 口音 5% | Qwen-2.5-Omni 口音 5% | 音量最大污染 | 语速 Qwen 系与 MiniCPM |
| --- | --- | --- | --- | --- | --- | --- |
| 不同投毒率 | 攻击成功率 | 78.2% | 34.3% | 40.7% | 低于 6.2% | 高于 95% |
| 情感 3% | 攻击成功率 | 超过 90% | 超过 90% | 超过 90% | 不适用 | 不适用 |
| 噪声 2%MiniCPM | 攻击成功率 | 85.6% | 需更高污染 | 需更高污染 | 不适用 | 不适用 |

上表说明情感触发曲线最陡，在仅 3% 投毒即超过 90% 成功率，语速与噪声呈模型相关轨迹，其中 MiniCPM 在 2% 已达 85.6% 而 Qwen 系需更高污染才接近，口音呈缓慢线性爬升且 5% 时仍分化明显，音量在全程低于 6.2% 构成负结果。该分析的限制是只测到 5% 以内，未评测更低如 1% 以下是否仍有残留风险，也未报告不同随机种子的方差。

> **看图路径：** 1. 先确认横轴投毒率为 1% 到 5% 而纵轴为攻击成功率；2. 再比较情感、语速、噪声曲线在 3% 附近的爬升速度；3. 观察音量曲线是否在全程都贴近横轴无明显抬升

[![原论文 Figure 4：Attack performance under different poisoning ratio.](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/aaai-2026/b29d224db515/figure-4.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/aaai-2026/b29d224db515/figure-4.png)

*论文图 4。原论文 Figure 4：“Attack performance under different poisoning ratio.”。*

上图以投毒率为横轴、攻击成功率为纵轴，显示情感、语速、噪声曲线随污染上升快速抬高，口音红色曲线爬升较缓，音量紫色曲线贴底，支持低污染即可植入的判断。但像素不能精确辨别的中间步数值不要硬写，复现时应按 1% 步长重跑并记录均值与波动。

### 防御有效吗、代价与边界是什么？

论文测两类实际可运行防御，Silero-VAD 预处理去除背景噪声并分离人声，Fine-Mixing 混合受损与干净模型参数以中和后门。下表整理原文报告的防御后变化，重点是收益与代价并存，不只写成功一面。

| 条件 | 指标 | Silero-VAD 对噪声 | Silero-VAD 对语速 | Fine-Mixing 对情感 Qwen-2-Audio | Fine-Mixing 对 Qwen-2.5-Omni |
| --- | --- | --- | --- | --- | --- |
| 防御后 | 干净准确率 | 保持高位 | 保持高位 | 保持高位 | 跌至低于 15% |
| 原始噪声 | 攻击成功率 | 约 88.7% | 不适用 | 不适用 | 不适用 |

上表显示 Silero-VAD 能把噪声攻击从约 88.7% 压到近零且保持干净准确率，但对语速与情感几乎无效，在 Qwen-2.5-Omni 与 MiniCPM 上语速仍高于 95%，这是具体代价之外的反例。Fine-Mixing 能消除 Qwen-2-Audio 的情感与噪声触发并削弱口音，但对 Qwen-2.5-Omni 造成干净准确率跌至 15% 以下并伴随幻觉，说明安全性与可用性权衡尚未解决。论文未测量延迟、误判率与算力开销，也未验证自适应攻击下的防御，因此不能承诺这些量得到改善，可能与待验证的推测需分开表述。

### 要复现应先固定哪些步骤？

复现先做三件可执行的事。第一是按论文重建 AudioSafe 划分与 9 类标签，固定 5% 随机投毒、单触发单模型变量，以及 1000 条 UltraChat 有益对话的补充，避免干净准确率因缺少正常对话而虚低。第二是实现 5 种触发，语速用时标修改并记录 beta，音量记录 alpha，叠加记录 lambda 与参数向量，口音记录目标口音配置，未报告取值的部分先标注缺项而不猜。第三是按干净与带触发两套评估分别计算拒绝率与顺从率，注意百分点与相对百分比不同，不同指标差值不混放。

防御复现可用当前可用的 Silero-VAD 链接做预处理对照，用 Fine-Mixing 做参数混合对照，但需同时记录干净准确率跌幅。原文未给出优化器、学习率、轮次之外的完整超参数与硬件预算，这部分是明确缺项，复现报告应写明假设与替代选择。MiniCPM-O 链接当前可用，可用于获取模型侧代码，但权重与系统可运行性需按实际下载情况核对，不从模型名称推定实现细节。

### 何时值得尝试、还需补哪项验证？

当研究目标是评估音频对齐在时间与韵律维度的鲁棒性，或需要为新音频编码器做红队测试时，值得尝试语速与情感触发的低投毒实验，因为论文显示 3% 污染已超过 95% 成功率且损失隐身较好。当目标是通用降噪鲁棒性时，噪声触发仍有价值，但需注意 Silero 类预处理可能直接消除该后门。当考虑用音量做触发时，现有证据不支持继续投入，因为全模型全基准持续低效。

还需补的验证包括更大规模与更多说话人的泛化、损失差统计显著性、自适应防御下的残留风险，以及训练与推理开销的实测。常见误解是把损失曲线重合当成模型完全未受影响，实际上它只说明整体优化轨迹相似，不等于每步梯度或每类风险都无偏；另一个误解是把平均 88.7% 当成每个模型都是该值，实际跨模型与跨风险存在分化，应回到分模型数字核对。总体上，论文报告的是特定条件下的脆弱性存在性，而非所有部署必然可被利用，引用时需保留条件与边界。

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。
- 评分规则：type-aware-v1
- 评分模型：muse-spark-1.3-contributor
- 评分请求协议：openai_responses

---

[← 返回 aaai-2026 论文汇总](/posts/conference-aaai-2026/)
