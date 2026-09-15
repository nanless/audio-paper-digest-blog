---
title: "Injection de l'information sémantique au sein des modèles de la reconnaissance automatique de la parole en streaming"
date: 2026-09-14
draft: false
description: "针对流式语音识别只能用过去和很小当前块导致词错误率上升的问题，SENS-ASR 用过去帧经上下文模块蒸馏句子嵌入教师得到的语义向量拼接增强每帧表示，在 160 毫秒小块上报告了词错误率下降，但大块和全上下文增益消失且需额外训练教师与上下文模块。"
tags: ["知识蒸馏", "流式处理", "语音", "语音识别"]
categories: ["jep-2026 论文"]
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_paper_id: "conference:jep:2026:conference-paper-id:dkhissi26b_jep"
paper_digest_source_kind: conference
paper_digest_conference_id: "jep-2026"
paper_digest_conference_record_url: "https://www.isca-archive.org/jep_2026/dkhissi26b_jep.html"
paper_digest_conference_pdf_url: "https://www.isca-archive.org/jep_2026/dkhissi26b_jep.pdf"
paper_digest_api_reader_contract: "beginner-researcher-v3"
paper_digest_api_reader_article_sha256: "a31bd577769b9a453feea18746704ae7f0af4562f0d936bef51eb6db8d0938cb"
paper_digest_api_reader_plan_sha256: "0bcb86942f45326e2b5a4b891659164a39e283faac12db15d70917e301d824dc"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings-v4"
paper_digest_api_reader_source_bindings_sha256: "da804d1f8371a81dc638b81b8b12a1212ec2012c4616194b6c3e3f816d89702c"
paper_digest_api_reader_source_table_count: 3
paper_digest_api_reader_source_formula_count: 0
paper_digest_api_reader_structured_artifacts_sha256: "fbc056731d4b0f2d8d551c9e653250f92ee9a5b2832ae4d4bb078569222d8d6f"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity-v1"
paper_digest_api_reader_author_identity_sha256: "dde848ff1b2ecbbc8503e13e6153a8928fe55b6fd56aebb1277cf1a7a0edd79c"
paper_digest_api_reader_author_count: 4
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity-v1"
paper_digest_api_reader_resource_identity_sha256: "410ff5e26c677b59ae662a54de87da910c32aec8f13b891d2850f76ea56d7394"
paper_digest_api_reader_resource_count: 0
paper_digest_api_reader_decision_projection: "api-reader-decision-projection-v2"
paper_digest_scoring_contract: "api-scoring-audit-v2"
paper_digest_taxonomy_contract: "paper-taxonomy-flat-tags-compat-v1"
paper_digest_taxonomy_selection_contract: "paper-taxonomy-selection-v1"
paper_digest_taxonomy_registry_version: "paper-taxonomy-v1"
paper_digest_taxonomy_registry_sha256: "15c82a567ce5a55dc1175684ed08b64c158558639d9c8fb822c9587ec32a8778"
paper_digest_taxonomy_concepts: [{"facet":"method","id":"method.distillation","label":"知识蒸馏"},{"facet":"setting","id":"setting.streaming","label":"流式处理"},{"facet":"signal","id":"signal.speech","label":"语音"},{"facet":"task","id":"task.asr","label":"语音识别"}]
paper_digest_primary_task: "语音识别"
paper_digest_primary_method: "知识蒸馏"
paper_digest_score: 5.8
paper_digest_rank_bucket: "前50%"
paper_digest_document_type: "方法研究"
paper_digest_conference_structure: replayable-pdf-layout-v1
---

# 📄 小块流式缺未来信息时，用过去帧蒸馏出的语义向量增强当前帧

> 英文题目：*Injection de l'information sémantique au sein des modèles de la reconnaissance automatique de la parole en streaming*

> 会议身份：`conference:jep:2026:conference-paper-id:dkhissi26b_jep`



> ✅ 来源为官方会议 PDF；表格与 Figure 按原文证据绑定。PDF 公式以原页区域图片展示，未冒称作者原始 TeX。

> 会议来源：[官方记录](https://www.isca-archive.org/jep_2026/dkhissi26b_jep.html) · [官方 PDF](https://www.isca-archive.org/jep_2026/dkhissi26b_jep.pdf)

标签：#知识蒸馏 #流式处理 #语音 #语音识别

评分：**5.8/10** | 创新 1.2/2 | 技术严谨 1.0/1.5 | 实验充分 1.0/1.5 | 清晰度 0.7/1 | 影响力 0.8/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 0.8/1.5

排名：前50% | 文档类型：方法研究

## 👥 作者与机构

- Youness Dkhissi：机构信息未能从会议 PDF 纯文本可靠映射
- Valentin Vielzeuf：机构信息未能从会议 PDF 纯文本可靠映射
- Elys Allesiardo：机构信息未能从会议 PDF 纯文本可靠映射
- Anthony Larcher：机构信息未能从会议 PDF 纯文本可靠映射

## 📌 核心摘要

流式自动语音识别以连续音频流为输入，要求在仅见过去与有限未来帧时逐块输出转录文本，需在未来上下文受限下即时解码。低延迟切片使声学证据碎片化，编码器帧表示偏向声学而缺乏长程语义，解码器易产生冗长或不一致预测，导致词错误率显著上升。该方法先用Mistral 7B对训练转录生成改写以构造正负句对，对预训练MPnet句子嵌入教师做领域微调，从而获得全局语义目标。接着以上下文模块接收过去声学帧嵌入，用三层Transformer解码器做注意力池化并经知识蒸馏逼近教师向量，蒸馏损失与RNN-T损失联合优化。最后将该语义向量拼接到当前切片各帧表示后送入Conformer编码器、联合网络与LSTM预测器贪婪解码，区别于仅依赖声学建模或外部语言模型重打分的已有方法。在LibriSpeech test-clean评测设置下，SENS-ASR模型的WER为7.21%，低于模型基线的WER 7.55%。增益随切片增大迅速衰减且全上下文下基本消失，其适用边界受限于强流式小切片约束而非通用识别增强。原文未披露训练、推理或部署成本。

## 🔗 开源与复现资源

本次未形成可展示的已核验资源记录，开放状态尚未核实。
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 流式转写必须边听边写，难在哪里？

输入是一段随时间到达的音频，先切成短帧再按块送入模型，目标是在音频播完之前就开始输出文字，延迟越小越好。必须保留的信息是已经到达的过去帧和当前小块，绝对不能使用尚未到达的未来帧。输出是词序列，用词错误率衡量，数值越低表示转写越准。

离线模型可以等整句说完再看全局声学形状来判断词边界和语义，而流式模型在小块下只能看到局部声学，容易把发音相近但语义不连贯的词写出来。论文指出帧嵌入主要携带声学而非语义信息，且循环神经网络转换器对长距离语言信息的建模能力弱，这是小块下性能下降的直接原因。

**流式识别 × 全上下文识别：** 流式识别负责在音频未结束时就逐块输出文字，分工是控制延迟；全上下文识别负责等整句音频到齐后再转写，分工是利用未来声学上下文保证准确。两者搭配的理由是同一模型要在延迟与准确之间切换，SENS-ASR 的组合意义是用动态块训练让一个模型同时学会两种条件，推理时按块大小取舍。

举个教学例子：比如只听到词的前半段就必须决定输出什么，模型看不到词尾，声学证据不足。这个例子不代表论文数值，只是说明为什么需要从过去历史中补一个语义偏置，而不是等待未来。

### 已有路线为什么只在声学上打转？

同输入同目标的已有工作包括双模训练、块掩码和延迟惩罚转换器。双模训练让一个模型同时学会流式和离线表示，用离线的完整上下文改善流式编码器；块掩码把严格因果放宽为块内全注意力，尤其改善每块开头帧；延迟惩罚在损失上约束符号发射不要拖太久。它们的共同监督都是声学转写损失，运行时都不引入额外语义来源。

另一条路线是推理时用外部语言模型重打分，或者把大语言模型放进识别架构。论文明确质疑后者在公开测试集上的评估有效性，指出大量语音测试集文本可能已出现在大语言模型预训练语料中，存在测试集污染风险，因此不把这类结果当作同条件可比基线。

**块注意力 × 因果掩码：** 因果掩码负责让每 1 帧只能看到过去，分工是严格保证流式不偷看未来；块注意力负责允许同一块内帧互相可见，分工是在可控延迟内恢复局部完整注意力。搭配理由是纯因果会伤害块首帧的表示，组合意义是 SENS-ASR 先用块注意力保证局部声学质量，再由上下文模块补全局语义，两路分工不同。

**知识蒸馏 × 重打分：** 重打分负责在推理后用外部语言模型修正候选，分工是事后补语言分；知识蒸馏负责在训练时把教师的表示能力转移给学生模块，分工是事前改变编码器表示。搭配理由是前者增加推理依赖和延迟，后者不增加外部调用，SENS-ASR 选择后者是为了在贪婪解码且无外部语言模型条件下仍能注入语义。

理解这点很重要：本文不是再调掩码或再加一个外部重打分，而是在编码器表示层面补语义，且推理时不依赖外部语言模型，实验也固定为贪婪解码无重打分，以便把增益归因给表示本身。

### 论文把语义缺失变成什么可训练目标？

论文把流式语义缺失具体化为一个表示学习问题：每个帧嵌入只由过去块和当前块算出，在小块下缺乏全局语义。目标是为每个块生成一个上下文语义向量，并把它拼接到该块每个帧嵌入上，再送入联合网络做预测。

形式上设输入按块切分，块长固定，编码器对每帧的表示是过去所有块加当前块的函数。上下文模块只用过去若干块的帧嵌入算出一个块级向量，去模仿由完整转写经句子嵌入教师算出的理想语义向量。总损失是标准转换器损失加权均方蒸馏损失，权重由标量控制。

这个定义把评估锚定得很清楚：同一模型在不同推理块大小下比较词错误率，重点看小块是否改善，大块和全上下文是否保持不退化。

### 一个样本走完哪条从音频到文字的路？

沿一个样本走一遍：音频按块进入编码器，编码器用块注意力输出每帧的声学嵌入；与此同时，上下文模块回顾过去若干块的帧嵌入，用交叉注意力和池化压缩成一个块级语义向量；该向量拼接到当前块每个帧嵌入上，连同预测器给出的历史词状态一起进入联合网络，输出当前词或空符号。训练时另有一路：完整转写送入已微调的句子嵌入教师，得到目标语义向量，与上下文模块输出算均方误差。

推理时教师分支完全去掉，只保留编码器、上下文模块、预测器和联合网络，因此不增加外部语言模型调用。图注明确红色虚线框内组件仅训练时使用，虚线圆圈部分计入总损失，这对应教师和两个损失项。

下面先看架构图的主路径与汇合点，再解释每个组件的计算细节，导读之后紧跟原图标记以便对照观察。

> **看图路径：** 1. 先从底部向上追踪两条主路：左侧完整转写进入句子嵌入模型，右侧音频帧进入编码器得到帧嵌入；2. 再看中间绿色上下文模块如何只接过去帧嵌入并输出一路箭头汇入右侧联合网络；3. 确认左侧红色虚线框为仅训练时使用，顶部虚线圆圈对应计入总损失的蒸馏与识别损失

[![原论文 Figure 1：Architecture du modèle SENS-ASR utilisant un modèle RNN-T et un module de contexte.](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/jep-2026/91d9f2b596b9/figure-1.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/jep-2026/91d9f2b596b9/figure-1.png)

*论文图 1。原论文 Figure 1：“Architecture du modèle SENS-ASR utilisant un modèle RNN-T et un module de contexte.”。*

从本次收到的原图像素可见，底部左侧是完整转写输入，向上经过句子嵌入模型；底部右侧是编码器与预测器两路，中间绿色为上下文模块，多路箭头最终汇入标为联合的方框再向上输出。左侧红色虚线框把教师分支围住，标注仅训练阶段使用，顶部虚线圆圈对应蒸馏与识别损失。这种布局直接对应文字描述：语义只在训练时有文本教师，推理时只靠过去音频算出的向量来增强当前帧。

### 编码器与预测器各自算什么？

编码器负责声学建模：两层卷积先把帧率下采样为原来的 1/4，随后是 12 层卷积增强 Transformer，每层输入维度 512，前馈 2048，卷积核 31，8 头自注意力，训练和推理都用块注意力而非纯因果。预测器负责语言历史：单层长短时记忆网络，隐层 512，根据已输出词给出状态。

拼接后的增强帧表示同时携带局部声学和历史语义，联合网络据此做更连贯的决策，这是小块下减少胡乱插入词的机制来源。先理解声学与历史这两路，再看语义第三路如何加入。

**神经转换器 × 联合网络：** 神经转换器中的编码器负责把声学帧变成帧嵌入，预测器负责记住已输出的历史词，联合网络负责把声学状态和语言历史融合后输出下一个词或空符号。搭配理由是声学和历史必须在每 1 帧对齐后才能做流式决策，SENS-ASR 的组合意义是把语义上下文向量也送入联合网络，让声学不足的小块能借助语义偏置做更一致的预测。

需要强调的是，编码器输出的帧嵌入本身仍以声学为主，语义向量是外加的偏置，而不是替换声学表示。

### 上下文模块如何把过去帧压成一个语义向量？

上下文模块负责语义压缩：由 3 层 Transformer 解码器做注意力池化，再经线性投影到 768 维以对齐教师输出维度。对每个当前块，它只消费过去若干块的帧嵌入，输出一个块级向量，然后复制拼接到该块每个帧嵌入上。这种每块一个向量的设计是为了降低计算复杂度，而不是每帧单独算一个。

教师是先在大规模句子对上预训练的 MPNet，再按论文协议在语音训练集转写领域做第二次微调。微调数据构造句对：原转写为句甲，用大语言模型生成的改写为句乙构成正例；用不同说话人的另一段转写或其改写构成负例。

**上下文模块 × 句子嵌入教师：** 上下文模块负责只看过去的帧嵌入并压缩成一个语义向量，分工是推理时可实时运行；句子嵌入教师负责看完整转写文本并输出理想语义向量，分工是只在训练时提供监督目标。搭配理由是音频侧缺全局语义而文本侧有全局语义，组合意义是通过均方误差蒸馏让前者模仿后者，推理时不用文本也能近似出语义。

为防止表示坍缩到常数，论文同时用正负例并给余弦相似度目标：正例目标在 0.8 到 1 之间均匀采样，负例在负 0.2 到 0.2 之间均匀采样，正例占三分之二，负例占三分之一。改写质量用两道过滤控制：与原文的相似分数低于阈值丢弃，长度达到原文 2 倍及以上丢弃，剩余中随机选一个。

### 训练时梯度从哪来，推理时什么被拿掉？

训练分 2 个阶段：先微调句子嵌入教师，用改写构造的正负句对优化句间相似度；再联合训练识别模型与上下文模块，总损失为转换器损失加 0.2 倍均方蒸馏损失。转换器损失还带快速发射正则，系数为 0.006 以优化延迟。优化器用 Adam，学习率为 0.0008，权重衰减为 0.01。

块调度用动态块训练：60% 小批量随机在 160 毫秒到 1280 毫秒之间选块大小，40% 小批量用完整上下文，只训练 1 次，推理时再固定为某个块大小测试。这种 1 次训练多块测试的设计是为了兼顾小块和全上下文。

推理时拿掉整个教师分支和蒸馏损失，只用贪婪搜索且不用外部语言模型重打分。原文明确这样做是为了凸显表示本身的贡献。梯度路径上，蒸馏损失监督上下文模块去模仿教师，识别损失监督整条声学到文字路径，原文未说明是否冻结教师或编码器，因此不推定冻结关系。

### 在什么数据和条件下测，指标怎么算？

实验用两个公开集：960 小时英文朗读 LibriSpeech 和 207 小时 TED 演讲 TEDLIUM-2，后者更自发，用于检验方法在非朗读上的稳定性。框架为 SpeechBrain，基线与 SENS-ASR 共享相同的卷积下采样、编码器和预测器结构，区别仅在于是否增加上下文模块与蒸馏损失。

评估指标为词错误率，越低越好，每个结果附带自助法 2.5 到 97.5 百分位的置信区间以排除异常值影响。推理块大小覆盖 160、320、640、1280 毫秒和完整上下文，训练只做 1 次动态块训练。所有推理均为贪婪解码无外部语言模型。

资源状态方面，本次未发现来源绑定且完成安全协议状态验证的资源，不得声称代码、模型或数据已公开。论文给出置信区间工具与教师初始权重的公开链接，但本次未能确认可达，不作为可用性结论。

### 小块改善多少，大块和全量是否保持？

要回答的核心比较问题是：在相同一次训练、相同贪婪解码、无外部语言模型条件下，增加语义向量是否主要改善小块词错误率，且在大块和全上下文不带来明显代价。指标方向是词错误率越低越好，括号内为相对基线的绝对差值，方括号为置信区间。

| 数据与块条件 | 指标 | 基线侧描述 | 本方法数值 | 相对基线变化 |
| --- | --- | --- | --- | --- |
| 干净集 160 ms | 词错误率 | 小块最难 | 7.21% | 0.34% |
| 干净集 1280 ms | 词错误率 | 已较低 | 3.44% | 0.05% |
| 难集 160 ms | 词错误率 | 基线更高 | 难集小块 | 0.45% |
| 难集 1280 ms | 词错误率 | 基线较低 | 大块反例 | 0.16% |

表后解释需要同时给出收益与代价。主要收益集中在 160 毫秒小块，演讲集 160 毫秒绝对降低 0.92% 是最大亮点，支持语义补偿在声学证据最缺时最有用。代价与反例同样明确：640 毫秒以上改善多为不显著，难集 1280 毫秒反而绝对上升 0.16%，全上下文无改善，说明大块本身已有足够声学来发完整词，额外语义不再加分。置信区间在大小块下多有重叠，论文用显著一词时应结合区间谨慎理解，不能推广为每句必胜。

另一组对照比较 1 次训练的通用模型与专块训练：专训 160 毫秒块的模型词错误率达 4.58%，相对动态块版本绝对降低 2.63%，专训 320 毫秒版本绝对降低 0.55%。这说明针对目标延迟专训确实能压低词错误率，但代价是每个延迟都要训 1 次，且在未见块大小上鲁棒性下降。

### 增益来自少插词还是少漏词？

要拆解的机制问题是：词错误率下降主要由插入、删除、替代中哪类编辑减少驱动。比较条件固定为 160 毫秒块、干净集、贪婪解码，指标方向是各类错误计数越低越好。下表直接复用原表矩阵，首列为指标名，后两列为基线与本方法，数值按原文保留。

| WER (%) | 7.55 | 7.21 |
| --- | --- | --- |
| Nombre d’insertions | 507 | 403 |
| Nombre de suppressions | 374 | 370 |
| Nombre de substitutions | 3091 | 3020 |

表后解释需要点出分工差异。插入从 507 降到 403，相对减少约 20%，是最突出的变化；替代从 3091 降到 3020，降幅约 2%；删除从 374 到 370，基本不变。论文据此推测语义向量抑制了基线偏啰嗦、爱多吐词的倾向，使输出更克制。

这属于有限解释而非因果证明，因为未做去掉蒸馏只保留额外参数量的对照，也未报告显著性检验。未胜出项很清楚：删除几乎无改善，说明语义偏置不解决听漏问题，仍需声学或延迟方面的改进。

### 哪些边界没测，哪些结论不能推广？

直接报告的局限有 3 层。第一，块越大增益越小，全上下文无增益，大块已含完整词发音，语义补偿的适用条件就是小块低延迟场景，不能推广为全条件提升。第二，难集大块出现绝对上升，说明附加语义在某些条件下可能是噪声，需要按数据集和块大小分别验证。第三，教师微调依赖大语言模型改写，存在幻觉风险，论文虽用相似分数和长度过滤，但未报告过滤率、改写多样性和教师质量对最终词错误率的敏感度。

未验证的推测包括：截断文本微调教师是否更好、按语言声学特性动态调块是否有效、多语言是否成立，这些在结论中列为未来工作，应表述为待验证而非已证。成本方面，原文未报告训练时长、参数增量、推理每秒帧数与实际延迟，总体趋势不等于每步延迟都改善，部署前需补测。相关性不等于因果：插入减少与语义注入同时出现，但没有反事实对照，不能断言拿掉语义必然回到啰嗦。

初学者容易把语义注入等同于加了语言模型，实际上推理时没有外部模型，只是表示里多了历史语义偏置；另一个误解是把 1 次动态块训练的最优当成专训最优，实际上专训更准但更贵且通用性差。

### 要复现先固定什么，再补哪项验证？

复现先固定信息条件与可运行策略：同一动态块训练区间、贪婪解码无外部语言模型、转换器损失加蒸馏权重、快速发射正则、优化器设置、编码器与上下文模块结构。下表把这些按原文整理为核对清单，指标单位按原文保留，裸值不擅自加百分号。

| 部件 | 配置项 | 取值一 | 取值二 | 阶段与说明 |
| --- | --- | --- | --- | --- |
| 编码器 | 层数维度 | 12 | 512 | 训练推理共用 |
| 编码器细节 | 前馈核头 | 2048 | 31 | 8 头自注意力 |
| 上下文模块 | 层数投影 | 3 | 768 | 训练蒸馏推理保留 |
| 损失权重 | 蒸馏延迟 | 0.2 | 0.006 | 仅训练经验选择 |
| 优化器 | 学习率衰减 | 0.0008 | 0.01 | 联合训练 |
| 块调度解码 | 区间比例 | 60% | 160 ms | 贪婪无重打分 |

表后解释的主要用途是让研究生能逐项对齐实现，代价是原文缺失过去块数、教师微调超参数和硬件预算，复现时必须先记录这些缺项并做敏感性实验。还需补的验证是：在自己数据上分别测 160、320、640、1280 毫秒与全上下文，报告词错误率加置信区间和 3 类编辑数，并补测参数量、实时率与延迟，避免只看词错误率就上线。教师改写环节要保存被过滤的比例和示例，防止幻觉悄悄改变语义目标。

### 何时值得尝试，一句话如何复述方法？

当部署要求 160 到 320 毫秒级低延迟、且不能在推理时调用外部语言模型时，值得尝试用过去帧蒸馏出的语义向量来补当前块。复述方法是：编码器照常输出帧嵌入，上下文模块只看过去块并压缩成一个语义向量拼到当前块每帧上，训练时用完整转写经微调句子嵌入教师的目标做均方蒸馏，总损失再加标准转换器损失，推理时扔掉教师直接用该向量增强解码。

支持的判断是小块词错误率在 2 个数据集上一致下降且插入明显减少，限制是大块与全上下文无收益、难集大块有反例、跨论文对比非同条件。下一步应先在目标延迟上复现小块增益，再补延迟与成本实测，最后才考虑截断文本教师或动态块等扩展。

对刚入门的同学，关键是先分清声学证据与语义偏置：前者来自当前能听到的声音，后者来自过去历史压缩出的预期；小块下前者不足，后者才能补上，但后者不能无中生有，听漏的词依然补不回来。

## 📐 原文公式与排版

以下展示论文原页中的数学表达区域，保留原始上下标、分式和符号排版。区域序号仅用于本文导航，不是论文公式编号。

[![原文数学表达区域 1，PDF 第 4 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/jep-2026/ce3773da89fa/figure-1.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/jep-2026/ce3773da89fa/figure-1.png)

区域 1 · [查看论文原页](https://www.isca-archive.org/jep_2026/dkhissi26b_jep.pdf#page=4)

[![原文数学表达区域 2，PDF 第 4 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/jep-2026/ce3773da89fa/figure-2.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/jep-2026/ce3773da89fa/figure-2.png)

区域 2 · [查看论文原页](https://www.isca-archive.org/jep_2026/dkhissi26b_jep.pdf#page=4)

[![原文数学表达区域 3，PDF 第 4 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/jep-2026/ce3773da89fa/figure-3.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/jep-2026/ce3773da89fa/figure-3.png)

区域 3 · [查看论文原页](https://www.isca-archive.org/jep_2026/dkhissi26b_jep.pdf#page=4)

[![原文数学表达区域 4，PDF 第 7 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/jep-2026/ce3773da89fa/figure-4.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/jep-2026/ce3773da89fa/figure-4.png)

区域 4 · [查看论文原页](https://www.isca-archive.org/jep_2026/dkhissi26b_jep.pdf#page=7)

[![原文数学表达区域 5，PDF 第 7 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/jep-2026/ce3773da89fa/figure-5.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/jep-2026/ce3773da89fa/figure-5.png)

区域 5 · [查看论文原页](https://www.isca-archive.org/jep_2026/dkhissi26b_jep.pdf#page=7)

另有 6 个候选区域因边界不明确或图片数量、尺寸限制未展开；请[查看完整论文](https://www.isca-archive.org/jep_2026/dkhissi26b_jep.pdf)中的原始排版。

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。
- 评分规则：type-aware-v1
- 评分模型：muse-spark-1.3-contributor
- 评分请求协议：openai_responses

---

[← 返回 jep-2026 论文汇总](/posts/conference-jep-2026/)
