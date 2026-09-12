---
title: "UniMoE-Audio: Unified Speech and Music Generation with Dynamic-Capacity Mixture-of-Experts"
date: 2026-09-12
draft: false
description: "针对语音与音乐联合训练中的任务冲突和数据不均衡，论文用动态容量混合专家做按词元分配计算的三阶段课程训练，在语音内容一致性和音乐美学指标上报告了超越专用基线与稠密联合基线的结果，代价是更复杂的专家初始化与路由调参流程。"
tags: ["混合专家模型", "统一音频模型", "音乐", "语音", "音频生成"]
categories: ["acl-2026 论文"]
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_paper_id: "conference:acl:2026:conference-paper-id:2026.acl-long.412"
paper_digest_source_kind: conference
paper_digest_conference_id: "acl-2026"
paper_digest_conference_record_url: "https://aclanthology.org/2026.acl-long.412/"
paper_digest_conference_pdf_url: "https://aclanthology.org/2026.acl-long.412.pdf"
paper_digest_api_reader_contract: "beginner-researcher-v3"
paper_digest_api_reader_article_sha256: "ed20f4967b22f8f9e68dad651bbe667ac081368648c50d1c7b41c10a79ba3de4"
paper_digest_api_reader_plan_sha256: "2fbec69cd0ae4dbd1e27b7c7672ead6d39f6582b7674e04b11a57b7c49cefceb"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings-v4"
paper_digest_api_reader_source_bindings_sha256: "2fe40f3ec02894e367678e0f4eb513bd613519cc711986c95d337966d7218001"
paper_digest_api_reader_source_table_count: 3
paper_digest_api_reader_source_formula_count: 0
paper_digest_api_reader_structured_artifacts_sha256: "77f93593e911124ed174d99d638ac4a06d0780b46a321cc52e70ad25d11cb663"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity-v1"
paper_digest_api_reader_author_identity_sha256: "a516f34eb9cf0ec1ca0a12813d8012a31a2355526894c9f60daa3ce47232c1c4"
paper_digest_api_reader_author_count: 15
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity-v1"
paper_digest_api_reader_resource_identity_sha256: "a3ec782a53855aa4d8ec2c97e2ac9edf21690c7c276422c3de2ed89bf3284c9c"
paper_digest_api_reader_resource_count: 0
paper_digest_api_reader_decision_projection: "api-reader-decision-projection-v2"
paper_digest_scoring_contract: "api-scoring-audit-v2"
paper_digest_taxonomy_contract: "paper-taxonomy-flat-tags-compat-v1"
paper_digest_taxonomy_selection_contract: "paper-taxonomy-selection-v1"
paper_digest_taxonomy_registry_version: "paper-taxonomy-v1"
paper_digest_taxonomy_registry_sha256: "15c82a567ce5a55dc1175684ed08b64c158558639d9c8fb822c9587ec32a8778"
paper_digest_taxonomy_concepts: [{"facet":"method","id":"method.moe","label":"混合专家模型"},{"facet":"model_family","id":"model_family.unified-audio","label":"统一音频模型"},{"facet":"signal","id":"signal.music","label":"音乐"},{"facet":"signal","id":"signal.speech","label":"语音"},{"facet":"task","id":"task.audio-generation","label":"音频生成"}]
paper_digest_primary_task: "音频生成"
paper_digest_primary_method: "混合专家模型"
paper_digest_score: 7.1
paper_digest_rank_bucket: "前50%"
paper_digest_document_type: "模型报告"
paper_digest_conference_structure: replayable-pdf-layout-v1
---

# 📄 语音要语义、音乐要结构：用动态容量专家缝合统一音频生成

> 英文题目：*UniMoE-Audio: Unified Speech and Music Generation with Dynamic-Capacity Mixture-of-Experts*

> 会议身份：`conference:acl:2026:conference-paper-id:2026.acl-long.412`


> ✅ 来源为官方会议 PDF；表格与 Figure 按原文证据绑定。PDF 公式以原页区域图片展示，未冒称作者原始 TeX。

> 会议来源：[官方记录](https://aclanthology.org/2026.acl-long.412/) · [官方 PDF](https://aclanthology.org/2026.acl-long.412.pdf)

标签：#混合专家模型 #统一音频模型 #音乐 #语音 #音频生成

评分：**7.1/10** | 创新 1.5/2 | 技术严谨 1.2/1.5 | 实验充分 1.1/1.5 | 清晰度 0.8/1 | 影响力 1.2/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 1.0/1.5

排名：前50% | 文档类型：模型报告

## 👥 作者与机构

- Zhenyu Liu：机构信息未能从会议 PDF 纯文本可靠映射
- Yunxin Li：机构信息未能从会议 PDF 纯文本可靠映射
- Xuanyu Zhang：机构信息未能从会议 PDF 纯文本可靠映射
- Qixun Teng：机构信息未能从会议 PDF 纯文本可靠映射
- Shenyuan Jiang：机构信息未能从会议 PDF 纯文本可靠映射
- Xinyu Chen：机构信息未能从会议 PDF 纯文本可靠映射
- Haoyuan Shi：机构信息未能从会议 PDF 纯文本可靠映射
- Haolan Chen：机构信息未能从会议 PDF 纯文本可靠映射
- Fanbo Meng：机构信息未能从会议 PDF 纯文本可靠映射
- Mingjun Zhao：机构信息未能从会议 PDF 纯文本可靠映射
- Yu Xu：机构信息未能从会议 PDF 纯文本可靠映射
- Yancheng He：机构信息未能从会议 PDF 纯文本可靠映射
- Baotian Hu：机构信息未能从会议 PDF 纯文本可靠映射
- Haizhou Li：机构信息未能从会议 PDF 纯文本可靠映射
- Min Zhang：机构信息未能从会议 PDF 纯文本可靠映射

## 📌 核心摘要

该工作处理以文本、语音提示、视频为条件统一生成语音与音乐的任务，难点在于语义主导的语音与结构主导的音乐优化目标冲突，以及语音数据远多于音乐导致朴素联合训练被语音主导而双任务退化。方法第一步在原始非平衡语料上为普通话合成、英文合成、文本到音乐、视频到音乐分别训练四个3.1B稠密专家以沉淀领域知识并作为原型专家与单任务基准。第二步将专家前馈网络装入基于Qwen2.5-VL的统一Transformer，共享注意力跨专家平均、视觉编码器继承视频到音乐专家，在约6万条平衡子集上冻结专家只训练门控做路由预热以学习分发策略。第三步在全量平衡集上解冻全模型并用线性衰减权重的负载均衡辅助损失做协同微调以兼顾路由效率与跨任务协同。相对固定Top-K混合专家的关键差异是Top-P路由按门控累积概率自适应决定每个词元激活1至4个专家，阈值p=0.7，平均激活约4.8B总量7.1B，形成浅层密集融合深层稀疏分工以匹配词元难度。在SeedTTS-EN语音合成评测设置下，UniMoE-Audio的WER为1.3，低于Unify-Baseline的3.1。该结论适用边界受限于10秒级短片段、中英文语音与配乐型音乐验证，长时节奏一致性与跨口音年龄克隆泛化尚未验证，原文未披露训练、推理或部署成本。

## 🔗 开源与复现资源

本次未形成可展示的已核验资源记录，开放状态尚未核实。
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 输入是什么，要输出什么，为什么语音加音乐特别难？

这篇论文的输入是多模态条件，目标是生成高质量音频波形对应的离散 token。条件包括 3 类：文本提示，用于文本转语音和文本转音乐；参考语音，用于音色克隆和文本转语音；视频画面，用于视频转音乐。输出都是音频 token 序列，再经神经音频编解码器还原为波形。任务覆盖普通话文本转语音、英语文本转语音、文本转音乐、视频转音乐 4 个生成方向。

难点不在单个任务本身，而在把语义主导的语音和结构主导的音乐放在一个自回归模型里。语音要求每个音素可懂、音色稳定，属于短时语义保真问题。音乐要求和声、节奏、段落结构在 20 秒甚至更长尺度上自洽，属于长程结构建模问题。两类目标的损失尺度、数据量和优化动态都不同。原文指出高质量语音语料远多于音乐语料，朴素联合训练会让语音主导梯度，音乐质量被拖累。图 1 左侧的对比正是为说明这一点：朴素联合相对专用基线在语音和音乐上都下降，音乐下降更明显。

对刚入门的读者，关键是先建立可复述的判断链：统一不是把数据简单混合。必须同时回答算力如何按难度分配，以及数据不均衡时如何防止大任务淹没小任务。论文的答案分为两部分：架构上用动态容量混合专家实现按 token 分配专家数量，训练上用 3 阶段课程先隔离学习再融合调度。后文将沿着一个样本走完输入到输出，再拆开路由计算和训练流程。

### 专用模型与统一尝试各解决了什么，还缺什么？

专用路线在语音和音乐上各自成熟。语音侧以 VALL-E、CosyVoice、SpearTTS 为代表，做法是对神经编解码后的离散语音 token 做自回归建模，支持零样本音色克隆。音乐侧以 MusicGen、YuE 为代表，同样做离散 token 自回归，强调可控性和长曲生成；扩散模型路线如 MusicLM、Stable Audio Open 也在并行发展。按同输入同目标对照，这些专用模型只优化单一领域，不需要处理跨域梯度冲突，因此在各自评测上通常更稳定。

统一路线此前有 UniAudio 和 AudioX 等尝试。UniAudio 试图用一个语言模型覆盖多种音频任务，但原文回顾称其朴素联合训练受数据不均衡影响，在音乐等数据稀缺任务上欠佳。AudioX 探索了多模态音乐生成，但未包含语音合成，没有 bridging 语义与结构音频之间的核心鸿沟。多模态理解侧的混合专家工作如 MoE-LLaVA、Uni-MoE 主要解决理解任务冲突，对统一音频生成的适用性尚未充分验证。

本研究的定位因此很明确：不追求新的编解码器或新的扩散采样器，而是研究在自回归离散 token 框架下，如何用架构隔离任务冲突、用课程解决数据不均衡。复述时要注意比较条件：专用基线与统一模型的训练数据、参数量和评测切分并不完全一致，不能把类别差异直接读成同条件胜负。论文为此设置了 Unify-Dense 等对照，试图分离架构收益与参数量收益，这一点在结果节需要重点核对。

### 要验证的核心问题是什么，什么算协同而非凑合？

核心研究问题是：如何在任务冲突与数据不均衡同时存在时，让共享模型协同掌握语音和音乐生成。论文把协同定义得很操作化：统一模型不仅不比专用模型差，还能在两类任务上同时获得增益，而不是用语音的小幅下降换音乐的大幅下降。图 1 左侧用相对基线的百分比条形表达这一定义，右侧用语音和音乐雷达图展示多指标综合包络。

两个障碍需要分别建模。任务冲突指同一套前馈参数要同时拟合短时语义映射和长程音乐结构，梯度方向可能互相干扰。数据不均衡指原始语料中语音实例和时长远大于音乐，若直接混合训练，采样频率和损失权重都会偏向语音。论文的假设是：仅靠重采样或加权无法彻底解决问题，因为冲突发生在参数层面，需要条件计算来分流；仅靠架构也无法解决问题，因为路由在冷启动时无法区分领域，需要先验分工。因此提出架构加课程的组合方案。

学习依赖上，读者应先理解自回归音频语言模型的基本循环：给定历史文本、视觉和音频 token，预测下一个音频 token。所有改进都发生在这个循环内部：路由改变每一步调用哪些前馈专家，课程改变训练时先见什么数据、冻结什么参数。后续方法节将按样本路径展开，避免先抛结论再补概念。

### 一个样本如何走完输入到输出？

以一条文本转音乐样本为例，输入文本先变为文本 token，视频帧经视觉 Transformer 编码为图像块特征，再经投影器映射为与语言模型同维度的软视觉 token，历史音频经 DAC 编解码器变为多通道离散 token。3 类 token 拼接后送入 Transformer 堆叠，每层包含注意力模块和动态容量混合专家前馈模块，最后由音频语言模型头并行预测所有通道的下 1 帧 token。这种多头并行预测是论文明确选择的效率设计，目的是避免为每个通道引入额外的深度 Transformer，从而减少参数和延迟。

下图是全文的架构总览，左侧为 4 种任务与 3 类条件，中间为 Transformer 堆叠，右侧为动态容量混合专家的放大视图，初学者应先沿箭头建立主路径再看路由细节。

> **看图路径：** 1. 先从底部文本语音视频输入箭头看到三类条件如何拼成统一 token 序列；2. 再看中间注意力与混合专家堆叠后由音频语言模型头输出音频 token；3. 最后看右侧门控模块给出的示例概率如何决定激活哪几个 MLP 专家

[![原论文 Figure 2：An overview of the UniMoE-Audio framework.](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/acl-2026/1d5293fd656f/figure-2.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/acl-2026/1d5293fd656f/figure-2.png)

*论文图 2。原论文 Figure 2：“An overview of the UniMoE-Audio framework.”。*

从像素可见，底部 Text、Voice、Video 3 个图标经向上箭头进入紫色 UniMoE-Audio 块，顶部输出 Voice Clone、TTS、T2M、V2M 3 类任务；中间灰色堆叠自下而上为视觉块加文本嵌入加音频嵌入、注意力、混合专家、音频语言模型头、音频 token；右侧红色虚线框内门控模块输出示例概率 0.5、0.1、0.3、0.1，经 Top-P 路由选择激活 MLP1 与 MLP3 等子集，再经加权相加输出。该图支持后文的复述：共享的是注意力与 token 表示，分流的是前馈专家；路由概率同时用于选择专家和加权合并输出。论文主模型总参数为 7.1B，平均激活约 4.8B，范围在 2.8B 到 5.9B 之间，p 取 0.7，这些数字是复现路由开销时必须保留的条件。

### 动态容量混合专家如何按难度分配计算？

先解释术语。混合专家指把原来一层前馈网络替换为多个并行前馈网络，每个称为专家，token 只经过其中一部分。门控模块指一个线性层加 Softmax，为每个 token 输出在所有专家上的概率分布。Top-P 路由指把专家概率从大到小排序，取累积概率刚超过阈值 p 的最小专家集合进行计算，输出按归一化门控概率加权求和。低熵分布意味着门控很确信，只需 1 个专家；高熵分布意味着难以抉择，需要 3 到 4 个专家。

**语义语音建模 × 结构音乐建模：** 语义语音建模分工是保证可懂度与说话人身份，要求短时声学 token 承载文本内容；结构音乐建模分工是捕捉和声节奏等长程层次，要求 token 序列维持跨小节一致性；二者搭配困难在于同一组前馈参数要同时优化短时分类式目标和长程结构目标，组合意义是必须用条件计算把两类知识分流到不同专家，再在注意力层共享上下文。

**Top-P 路由 × 混合专家：** 混合专家分工是提供多套前馈网络作为可选计算路径，Top-P 路由分工是按门控概率累积阈值决定每个 token 激活几个专家；搭配理由是固定 Top-K 会对简单 token 浪费算力、对复杂 token 算力不足，组合后模型能对低熵分布只用 1 个专家、对高熵分布调用 3 到 4 个专家，实现按难度分配容量。

**神经音频编解码 × 多头并行预测：** 神经音频编解码分工是把连续波形压缩为每帧多通道离散声学 token，多头并行预测分工是 1 次前向同时预测所有通道而非逐通道自回归；搭配原因是深度 Transformer 逐通道预测会增加参数与延迟，组合后自回归语言模型只需 1 次输出多通道 token，降低了统一语音音乐生成的建模开销。

具体计算分 3 步。第一步对输入矩阵计算门控概率，输入维度为序列长度乘隐藏维度，门控矩阵为隐藏维度乘专家数。第二步对每个 token 独立排序并累积求和，找到满足阈值的最小集合。第 3 步只前向这些被选专家并加权相加。论文用公式 1 表达 Softmax 门控，用公式 2 表达累积概率约束，用公式 3 表达加权求和，原文未给出完整可复制的 TeX 细节，此处不虚构梯度路径。需要强调的是，路由概率既决定离散选择又决定连续权重，选择本身不可微，训练时依赖负载均衡辅助损失引导门控，推理时用贪心采样生成文本与语音 token。

与固定 Top-2 的对比是理解该组件的关键。固定策略对所有 token 用相同算力，简单 token 浪费、复杂 token 不足。动态策略让浅层多用专家做低层特征提取与多模态融合，深层少用专家做稀疏分工。论文图 3 报告的从密到疏的层分布正是这一行为的经验证据，后文消融节将结合像素再解读。

### 三阶段课程如何分开学领域知识再学调度？

训练要解决的是数据不均衡下的优化顺序问题。原始语料覆盖 4 个任务，语音部分以自有 studio 录音为起点并用 CosyVoice2 做说话人克隆扩展，其中约 20% 为真实录音、80% 为合成，大多时长 3 到 10 秒；音乐部分收集开源音乐并切分为固定 20 秒片段，每段由 Gemini-2.5-Flash 生成文本描述。直接在该分布上联合训练会偏向语音，因此论文另建约 60K 的均衡高质量子集，语音侧用 UTMOS 过滤低感知质量样本，音乐侧用美学质量与 CLAP 图文相似度过滤低质量或图文不对齐片段。

**独立专家训练 × 协同联合训练：** 独立专家训练分工是在原始不均衡数据上各自训练稠密专用模型以沉淀领域先验，协同联合训练分工是在均衡子集上解冻全模型做端到端微调以学习跨域共享；搭配原因是若一开始就联合训练，数据量大的语音会主导梯度，组合意义是先隔离再融合，让路由在已有分工基础上学调度而非从零纠缠。

**负载均衡损失 × 线性衰减权重：** 负载均衡损失分工是鼓励路由初期均匀使用各专家以避免坍缩到少数专家，线性衰减权重分工是让该辅助损失随训练推进逐渐减小；搭配原因是前期需要探索、后期需要利用已学到的稀疏分工，组合意义是先稳定调度再聚焦生成质量。

3 阶段操作如下。第一阶段独立专家训练：在完整非均衡原始数据上分别为普通话 TTS、英语 TTS、文本转音乐、视频转音乐训练 4 个 3.1B 稠密专用模型，均从 Qwen2.5-VL 初始化，目的是让每个未来专家的前馈参数先沉淀领域知识。第二阶段集成与预热：把各专家的前馈块作为原型专家装入统一架构，注意力等共享部件取各专家平均，视觉编码器直接继承视频转音乐专家；先冻结专家只在均衡子集的子集上训练路由，使调度策略基于已有分工学习。第 3 阶段协同联合训练：解冻全模型在完整均衡集上端到端微调，并加线性衰减权重的负载均衡损失，先鼓励均匀探索再转向利用。

优化器统一用 AdamW 加余弦学习率调度。独立专家阶段用 48 卡 Ascend 910B2，全局批量 48，基础学习率 1e-4；预热阶段用 196 卡，批量 784，学习率 3e-5；联合阶段用 196 卡，批量 3136，学习率 1e-5，并用 4 路专家并行。复现时必须保留这些硬件与批量条件，因为批量大小直接影响路由统计与均衡损失的效果。论文正文给出代码仓库地址，但本次未完成可达性验证，此处不作已公开或可运行的断言。

### 用什么数据、基线和指标测语音与音乐？

语音评测关注内容一致性、说话人相似度和感知质量。数据集包括 Seed-TTS 测试集、LibriSpeech test-clean 和 AISHELL-3。内容一致性用 Whisper-large-v3 算英语词错率、用 Paraformer-zh 算普通话字错率，错率越低越好；感知质量用 UTMOS 作为主观评分的客观代理，越高越好；说话人相似度用微调 WavLM 提取的 embedding 余弦相似度，越高越好。评测时用固定语音提示以隔离生成质量与提示变化的影响，每个模型跑 3 个随机种子取平均。

音乐评测覆盖文本转音乐与视频转音乐。文本转音乐在 MusicCaps 和 V2M-bench 上测，视频转音乐在 V2M-bench 上测，为对齐 MusicCaps 设置将视频与音频切为 10 秒片段。语义对齐用 CLAP 分数和更先进的 CLaMP3 分数，越高越好；音频质量与多样性用基于 OpenL3 的 FAD、基于 PaSST 的 KL 散度、Inception Score，其中 FAD 与 KL 越低越好、IS 越高越好；美学质量用生产复杂度、生产质量、内容愉悦度三项，越高越好。

基线分为 3 类：外部专用与统一模型如 YuE、Stable Audio Open、AudioX、MusicGen、MUMU-LLAMA、Mini-CPM、Qwen2.5-Omni、Step-audio 等；内部 4 个专用稠密专家；内部统一稠密基线 Unify-Dense 与朴素联合基线 Unify-Baseline，用于分离参数量与架构的作用。消融在均衡集 20% 子集上轻量运行，报告 Seed-TTS 英中平均词错率与 UTMOS、MusicCaps 的生产质量与内容愉悦度。下表整理模型配置，宽表要求由多列参数与路由条件承担，表前问题是参数量相同能否等同能力相同。

| 模型 | 任务覆盖 | 架构 | 激活参数 | 总参数 |
| --- | --- | --- | --- | --- |
| 专用中文语音专家 | 普通话 TTS | 稠密 | 3.1B | 3.1B |
| 专用英语语音专家 | 英语 TTS | 稠密 | 3.1B | 3.1B |
| 专用文本音乐专家 | 文本转音乐 | 稠密 | 3.1B | 3.1B |
| 专用视频音乐专家 | 视频转音乐 | 稠密 | 3.1B | 3.1B |
| 统一稠密对照 | 全任务统一 | 稠密 | 7.1B | 7.1B |
| 统一动态专家 | 全任务统一 | 动态容量混合专家 p 为 0.7 | 平均 4.8B 范围 2.8B 到 5.9B | 7.1B |

上表说明专用模型各为 3.1B 且从 Qwen2.5-VL 初始化，统一模型总容量 7.1B 但动态激活平均仅 4.8B，因此比较时不能只看总参数，还需看每 token 实际算力与路由阈值，p 为 0.7 是复现效率与效果权衡的关键超参数。

| 数据来源 | 任务 | 实例规模 | 时长特征 | 质量处理 |
| --- | --- | --- | --- | --- |
| 开源音乐切分加模型描述 | 音乐生成 | 长曲切 20 秒片段 | 均衡子集约 60K 条 | 美学加 CLAP 过滤 |
| 均衡高质量子集 | 四任务均衡 | 约 60K 条总量 | 跨任务近似均衡 | 防止语音主导 |
| 消融轻量子集 | 方法消融 | 均衡集 20 百分比采样 | 与主实验同分布 | 快速验证路由与初始化 |
| 推理设置 | 全任务推理 | 3 随机种子平均 | 贪心采样 | 隔离提示变化 |

上表把数据构造与评测协议放在一起核对，强调原始分布不均衡而训练后期依赖约 60K 均衡集，语音真实与合成比例、音乐切分长度、过滤指标都影响可比性，消融仅用 20 百分比子集因此数值不宜与主结果直接对比绝对值。

### 主结果在什么条件下成立，哪项指标并未胜出？

主结果要回答的是统一模型能否同时做好语音与音乐。语音侧论文报告统一模型在 Seed-TTS 英文上词错率与 UTMOS 领先，在中文上字错率与 UTMOS 也有优势，且强调用仅 280K 小时数据达到与训练数据大一个数量级专用系统的可比表现。音乐侧报告在文本转音乐与视频转音乐的美学三项与语义对齐两项上取得最高，参考型指标 FAD 略低，论文解释为模型偏向创造性生成而非模仿参考轨。理解该解释时应标记为有限解释而非因果证明，因为并未做控制创造性程度的对照实验。

下图左侧量化了协同的定义，右侧用雷达图展示多指标包络，阅读时应先看涨跌方向再看包络是否被个别指标主导。

> **看图路径：** 1. 先看左侧红蓝条形对比朴素联合训练与本方法相对基线的涨跌方向；2. 再看右侧语音雷达图中本方法多边形是否在多数轴上包住其他模型；3. 最后看右侧音乐雷达图中生产质量与内容愉悦度轴的外扩程度

[![原论文 Figure 1：Performance of UniMoE-Audio.](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/acl-2026/1d5293fd656f/figure-1.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/acl-2026/1d5293fd656f/figure-1.png)

*论文图 1。原论文 Figure 1：“Performance of UniMoE-Audio. Left: Comparison against specialized baselines reveals the failure of naive joint training, which causes a clear performance degradation on speech…”。*

从像素可见，左侧六行指标中红色朴素联合训练均为负向，音乐保真度负 33.14 百分比、语音内容一致性负 25.00 百分比，蓝色本方法均为正向，音乐语义一致性正 33.33 百分比、语音内容一致性正 28.41 百分比；右侧语音雷达图本方法多边形在字准确率、UTMOS、说话人相似度多轴上最靠外，音乐雷达图在生产质量与内容愉悦度轴上外扩明显。该图报告的是相对变化与综合排名，不能替代绝对词错率与 MOS 值，复述时需与主结果表配合。

必须保留的未胜出项是部分参考型音频质量指标。FAD 与 KL 在个别切分上并非最优，说明在贴近参考分布的意义上，专用扩散或自回归基线仍有竞争力。适用条件因此是：当目标是美学与语义对齐且能接受与参考分布的偏离时，统一动态专家更值得尝试；当目标是严格复刻参考音色或参考编曲分布时，应优先看 FAD 与 KL 及人工听感，而非仅看美学分数。

### 路由、初始化与超参数哪一个不可少？

消融在均衡集 20 百分比子集上进行，目的是分离架构、训练与超参数的贡献。第一个问题是固定 Top-2 是否足够。论文报告固定容量对照相对动态路由出现词错率从 2.2 升至 3.1、生产质量从 7.54 降至 7.33，支持动态按难度分配的判断。第二个问题是原型专家预训练是否必要。直接从零联合训练的对照出现词错率升至 8.9、生产质量跌至 5.32，属于灾难性退化，支持先隔离再融合的必要性。

第 3 个问题是阈值与专家粒度。p 为 0.5 容量不足导致下降，p 为 0.9 接近稠密行为削弱稀疏分工；保持总参数不变把专家切为 8 个或 16 个更小专家时，16 专家出现 11.4 词错率，论文归因于路由分布变平、对噪声敏感。

下表把上述可运行对照放在同一条件下比较，表前问题是每个改动是否只动一处机制，公平条件是同为 20 百分比子集轻量训练，指标方向为词错率越低越好、UTMOS 与美学越高越好。

| 对照 | 语音词错率 | 语音感知质量 | 音乐生产质量 | 音乐内容愉悦度 |
| --- | --- | --- | --- | --- |
| 动态路由本方法 | 2.2 | 3.97 | 7.54 | 7.39 |
| 固定 Top-2 路由 | 3.1 | 3.63 | 7.47 | 7.24 |
| 无专家初始化从零联合 | 8.9 | 3.31 | 5.32 | 5.19 |
| 阈值 0.5 容量不足 | 3.7 | 3.57 | 7.21 | 6.56 |
| 阈值 0.9 近稠密 | 2.5 | 3.85 | 7.41 | 7.26 |
| 切分 16 专家 | 11.4 | 2.09 | 6.25 | 5.88 |

上表显示最大代价来自去掉专家初始化，语音词错率从 2.2 恶化到 8.9 且音乐生产质量同步大跌，说明路由冷启动无法自行解耦领域；固定 Top-2 与阈值 0.5 的退化幅度较小但稳定存在，支持容量自适应的价值；16 专家粒度下全面恶化提示专家数并非越多越好，路由置信度间隙是必须监控的量，未报告路由熵与负载方差是复现时需补的验证。

下图展示按层统计的激活专家数分布，用于检验动态路由是否真的按深度改变行为，图前导读要求先确认坐标再比较浅深层。

> **看图路径：** 1. 先确认横轴为层号 0 到 27 纵轴为激活 1 至 4 个专家的比例堆叠；2. 再对比浅层 0 到 12 层中 3 到 4 专家段占比与深层 20 层后 1 到 2 专家段占比；3. 最后观察 24 层附近 4 专家比例回升是否为局部例外而非整体趋势

[![原论文 Figure 3：Layer-wise distribution of activated experts under Top-P routing.](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/acl-2026/1d5293fd656f/figure-3.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/acl-2026/1d5293fd656f/figure-3.png)

*论文图 3。原论文 Figure 3：“Layer-wise distribution of activated experts under Top-P routing.”。*

从像素可见，横轴层号 0 到 27，纵轴比例堆叠 1 到 4 专家，浅层 0 到 12 层中 3 专家段占主体并有可观 4 专家段，深层 20 层后 1 专家与 2 专家浅色段明显增高，24 层附近 4 专家段小幅回升但不改变整体从密到疏趋势。该模式支持论文的层级处理解释：浅层做低层特征与多模态融合需要集体知识，深层表示更抽象后可路由到专用专家。

下图进一步按专家展示语音与音乐的路由占比，用于验证原型分工是否被保留，阅读时需逐个专家比较颜色主导而非只看平均负载。

> **看图路径：** 1. 先确认四个子图分别对应路由专家 1 到 4 且每根柱按层展开；2. 再比较专家 1 和 2 中语音颜色段与专家 3 和 4 中音乐颜色段的主导程度；3. 最后检查深层是否存在个别层跨域比例突变以判断分工是否稳定

[![原论文 Figure 4：Visualization of layer-wise expert routing statistics.](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/acl-2026/1d5293fd656f/figure-4.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/acl-2026/1d5293fd656f/figure-4.png)

*论文图 4。原论文 Figure 4：“Visualization of layer-wise expert routing statistics. Experts 1 and 2 exhibit a predominant activation for Speech, whereas Experts 3 and 4 specialize in Music.”。*

从像素可见，路由专家 1 与 2 在多数层以语音颜色为主，路由专家 3 与 4 在多数层以音乐颜色为主，各层总体负载相对均衡，未出现单个专家长期主导的坍缩；个别深层如专家 4 末层出现跨域突变，提示分工总体稳定但层特异性仍存在。该观察支持先验分工被保留的判断，但相关性不等于因果，若要证明初始化导致分工，还需补随机初始化对照下的同图比较。

### 哪些边界尚未验证，不宜直接推广？

论文明确列出 3 类局限。长音乐生成中偶发节奏一致性问题，短时语义相干强的架构未必能稳定捕捉长程结构依赖。复杂细粒度指令跟随不稳定，模型可能遗漏子风格或风格细节约束。零样本音色克隆在不同口音与年龄群上泛化有差异，相似度与自然度波动会影响高保真专用场景的可靠性。这些是直接报告的局限，复述时应保留为待验证边界，而非用比喻弱化。

方法层面还有未报告项。门控排序与累积选择的梯度路径、负载均衡损失的具体公式与衰减 schedule、注意力平均初始化对位置编码的影响，均未给出可直接复算的细节。训练损失图显示预热到联合阶段存在明显波动，音乐损失尺度高于语音，支持不均衡假设，但波动本身也意味着多任务优化张力持续存在，不能把末步损失下降推广为全程稳定。

评测层面，语音用 UTMOS 代理主观分、音乐用自动美学与 CLAP 代理听感，均不能等同人工评价；百分点变化与相对百分比需区分，不同指标差值不能混入同一模型列比较。总体趋势不等于每组每步成立，引用雷达图包络时应同时给出未胜出的 FAD 与 KL，避免选择性报告。

### 复现应先做什么，需要哪些信息条件？

若要复述方法并尝试复现，建议按学习依赖分步核对。第一步复现数据管线：按原文重建语音真实与合成比例、音乐 20 秒切分、UTMOS 与美学加 CLAP 过滤，得到约 60K 均衡子集，记录各任务实例数与时长分布，因为采样比例决定路由统计。第二步复现专用专家：从 Qwen2.5-VL 出发各训 3.1B 稠密模型，保存前馈块作为原型专家，注意力取平均、视觉编码器继承视频转音乐专家。第 3 步复现路由：实现按累积概率阈值 p 为 0.7 的 Top-P 选择与加权求和，先冻结专家只训路由做预热，再解冻全模型加线性衰减负载均衡损失做联合微调。

关键超参数与运行条件必须原样保留：AdamW 加余弦调度、3 阶段批量 48、784、3136 与学习率 1e-4、3e-5、1e-5、4 路专家并行、贪心采样推理、3 种子平均。评估时用 Whisper-large-v3 与 Paraformer-zh 算错率、用 WavLM 余弦算说话人相似度、用 CLAP 与 CLaMP3 算语义对齐、用 FAD、KL、IS 与美学三项算音乐质量，并核对数据集切分与 10 秒切分是否一致。

关于可用性，论文正文给出仓库链接，但本次没有完成 HTTPS 可达验证的资源绑定，因此不能断言代码、权重或数据当前可用或已公开。复现前应先自行确认链接可达与权重下载方式，区分代码开源、权重可下载与系统可一键运行三件不同的事，缺任一项都应先报告缺项再推进。

### 何时值得尝试这种统一路线？

当研究目标是同时交付语音可懂度与音乐美感，且数据天然不均衡时，这条路线值得尝试。它的可操作经验是：用原型专家把领域知识先固化，再让路由在均衡数据上学调度；用动态容量让简单 token 省算力、复杂 token 多用专家；用均衡子集与过滤管线防止大任务主导。论文在语音内容一致性与音乐美学对齐上报告了协同增益，且平均激活参数低于总参数，显示了效率与效果兼顾的可能性。

不值得盲目套用的情况包括：只需单一领域最优、参考分布拟合要求极严、或无法承担多阶段训练与路由调参成本时。此时专用模型或固定容量基线可能更稳。后续验证应补人工听感、路由熵与负载方差、长曲结构一致性、细粒度指令遵循率，以及不同口音年龄的克隆稳定性，才能把自动指标上的协同转化为可部署的收益。记住核心判断链：分流解决冲突，课程解决不均衡，动态容量解决算力错配，三者缺一都可能回到朴素联合的退化。

## 📐 原文公式与排版

以下展示论文原页中的数学表达区域，保留原始上下标、分式和符号排版。区域序号仅用于本文导航，不是论文公式编号。

[![原文数学表达区域 1，PDF 第 4 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/acl-2026/4ddab3b9e9c5/figure-1.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/acl-2026/4ddab3b9e9c5/figure-1.png)

区域 1 · [查看论文原页](https://aclanthology.org/2026.acl-long.412.pdf#page=4)

[![原文数学表达区域 2，PDF 第 4 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/acl-2026/4ddab3b9e9c5/figure-2.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/acl-2026/4ddab3b9e9c5/figure-2.png)

区域 2 · [查看论文原页](https://aclanthology.org/2026.acl-long.412.pdf#page=4)

[![原文数学表达区域 3，PDF 第 4 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/acl-2026/4ddab3b9e9c5/figure-3.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/acl-2026/4ddab3b9e9c5/figure-3.png)

区域 3 · [查看论文原页](https://aclanthology.org/2026.acl-long.412.pdf#page=4)

[![原文数学表达区域 4，PDF 第 8 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/acl-2026/4ddab3b9e9c5/figure-4.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/acl-2026/4ddab3b9e9c5/figure-4.png)

区域 4 · [查看论文原页](https://aclanthology.org/2026.acl-long.412.pdf#page=8)

[![原文数学表达区域 5，PDF 第 8 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/acl-2026/4ddab3b9e9c5/figure-5.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/acl-2026/4ddab3b9e9c5/figure-5.png)

区域 5 · [查看论文原页](https://aclanthology.org/2026.acl-long.412.pdf#page=8)

另有 4 个候选区域因边界不明确或图片数量、尺寸限制未展开；请[查看完整论文](https://aclanthology.org/2026.acl-long.412.pdf)中的原始排版。

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。
- 评分规则：type-aware-v1
- 评分模型：muse-spark-1.3-contributor
- 评分请求协议：openai_responses

---

[← 返回 acl-2026 论文汇总](/posts/conference-acl-2026/)
