---
title: "AVATAR: Reinforcement Learning to See, Hear, and Reason Over Video"
date: 2026-09-13
draft: false
description: "针对长视频音频问答中 GRPO 样本浪费、组内奖励相同导致优势为零、全序列平均授信的问题，AVATAR 用分层回放加离线修正与首尾抛物线加权做强化学习，在 Qwen2.5-Omni 上取得 MMVU 加 5.4 等增益，代价是四阶段课程与多奖励判断器带来的训练复杂度。"
tags: ["强化学习", "多模态模型", "音视频", "音视频问答"]
categories: ["cvpr-2026 论文"]
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_paper_id: "conference:cvpr:2026:conference-paper-id:Kulkarni_AVATAR_Reinforcement_Learning_to_See_Hear_and_Reason_Over_Video_CVPR_2026_paper"
paper_digest_source_kind: conference
paper_digest_conference_id: "cvpr-2026"
paper_digest_conference_record_url: "https://openaccess.thecvf.com/content/CVPR2026/html/Kulkarni_AVATAR_Reinforcement_Learning_to_See_Hear_and_Reason_Over_Video_CVPR_2026_paper.html"
paper_digest_conference_pdf_url: "https://openaccess.thecvf.com/content/CVPR2026/papers/Kulkarni_AVATAR_Reinforcement_Learning_to_See_Hear_and_Reason_Over_Video_CVPR_2026_paper.pdf"
paper_digest_api_reader_contract: "beginner-researcher-v3"
paper_digest_api_reader_article_sha256: "a096aeb442b33b554d2fd9baebe04e66172922dcd7870d7fff32c5bb4220246e"
paper_digest_api_reader_plan_sha256: "61f1434713bc7f47fe03d06784bacd68da20d1362fa41e3270e9d53084024200"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings-v4"
paper_digest_api_reader_source_bindings_sha256: "e0cf5d9d209a930fb793826f4f0d39c34fc34c12242d3eda62a958df1a912922"
paper_digest_api_reader_source_table_count: 4
paper_digest_api_reader_source_formula_count: 0
paper_digest_api_reader_structured_artifacts_sha256: "0fefb4bd1ab65bb8fd3353fb214f7c804298a89683b68710f47f603c3f9606ac"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity-v1"
paper_digest_api_reader_author_identity_sha256: "6831bfab874227ff491eb9558bfa8bc06fd4ab7045534a2c60864acba3cf607e"
paper_digest_api_reader_author_count: 2
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity-v1"
paper_digest_api_reader_resource_identity_sha256: "a12c4ddee93126be631ed4b1d016a05556618dd94c98fcd060cca1764b0f0632"
paper_digest_api_reader_resource_count: 1
paper_digest_api_reader_decision_projection: "api-reader-decision-projection-v2"
paper_digest_scoring_contract: "api-scoring-audit-v2"
paper_digest_taxonomy_contract: "paper-taxonomy-flat-tags-compat-v1"
paper_digest_taxonomy_selection_contract: "paper-taxonomy-selection-v1"
paper_digest_taxonomy_registry_version: "paper-taxonomy-v1"
paper_digest_taxonomy_registry_sha256: "15c82a567ce5a55dc1175684ed08b64c158558639d9c8fb822c9587ec32a8778"
paper_digest_taxonomy_concepts: [{"facet":"method","id":"method.reinforcement","label":"强化学习"},{"facet":"model_family","id":"model_family.multimodal","label":"多模态模型"},{"facet":"signal","id":"signal.audiovisual","label":"音视频"},{"facet":"task","id":"task.av-question-answering","label":"音视频问答"}]
paper_digest_primary_task: "音视频问答"
paper_digest_primary_method: "强化学习"
paper_digest_score: 6.8
paper_digest_rank_bucket: "前50%"
paper_digest_document_type: "方法研究"
paper_digest_conference_structure: replayable-pdf-layout-v1
---

# 📄 看听推理不断线：AVATAR 用离线复用与首尾加权修补 GRPO

> 英文题目：*AVATAR: Reinforcement Learning to See, Hear, and Reason Over Video*

> 会议身份：`conference:cvpr:2026:conference-paper-id:Kulkarni_AVATAR_Reinforcement_Learning_to_See_Hear_and_Reason_Over_Video_CVPR_2026_paper`


> ✅ 来源为官方会议 PDF；表格与 Figure 按原文证据绑定。PDF 公式以原页区域图片展示，未冒称作者原始 TeX。

> 会议来源：[官方记录](https://openaccess.thecvf.com/content/CVPR2026/html/Kulkarni_AVATAR_Reinforcement_Learning_to_See_Hear_and_Reason_Over_Video_CVPR_2026_paper.html) · [官方 PDF](https://openaccess.thecvf.com/content/CVPR2026/papers/Kulkarni_AVATAR_Reinforcement_Learning_to_See_Hear_and_Reason_Over_Video_CVPR_2026_paper.pdf)

标签：#强化学习 #多模态模型 #音视频 #音视频问答

评分：**6.8/10** | 创新 1.5/2 | 技术严谨 1.2/1.5 | 实验充分 1.1/1.5 | 清晰度 0.8/1 | 影响力 1.1/1.5 | 开源 0.0/1.5 | 可复现 0.1/0.5 | 工程/实践 1.0/1.5

排名：前50% | 文档类型：方法研究

## 👥 作者与机构

- Yogesh Kulkarni：机构信息未能从会议 PDF 纯文本可靠映射
- Pooyan Fazli：机构信息未能从会议 PDF 纯文本可靠映射

## 📌 核心摘要

长视频音视频问答以整段视频32帧与音频流为输入，输出带推理链的答案，难点在于长时序跨模态对齐与中间推理漂移，且同组奖励趋同时GRPO优势归零。AVATAR先以容量10k的分层回放缓冲按提示词历史平均奖励分层采样重建组内方差，为后续更新提供多样化离策略样本。接着以时序优势整形按位置抛物线加权首尾规划与综合token，将整体优势调制到关键步骤以抑制中间漂移。最后经冷启动微调加视觉推理到音频对齐再到声源定位的三阶段课程递进训练，使视觉 grounding逐步进入跨模态对齐。与标准GRPO对全序列均匀赋分不同，该位置相关加权贴合注意力汇聚特性并保留奖励差异，使优化在困难提示下仍有学习信号。在DailyOmni基准下，AVATAR的得分增益为+3.4，高于GRPO的得分增益+1.8。该结论适用边界受限于7B开源全模态模型与离线整段评测，尚未验证流式长视频与开放域噪声下的外推；原文未披露训练、推理或部署成本。

## 🔗 开源与复现资源

- 复现相关资源：<https://people-robots.github.io/AVATAR/> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 输入是什么？要解决的长视频看听推理难在哪里？

本次解读的输入是会议论文原文与官方原图像素，目标是让刚进入语音音乐音频方向的研究生能核对方法并复述实验条件。必须保留的信息包括任务定义、两大组件的计算方式、4 阶段训练的数据与奖励配置、基线与评测基准、关键增量数字与样本效率口径，输出是 1 篇按学习依赖展开的中文技术解读。本文只讲论文实际做的音频视频推理强化学习，不扩展到纯音频生成或纯文本推理。

论文面对的任务是长时域视频上的多模态推理：模型同时收到视频帧序列、音频线索与文本问题，需要输出包含思考过程与最终答案的结构化回答。举一个教学例子而非论文原例：比如问视频中吹长笛的女孩在自行车经过时是否在演奏，模型需要先定位发声物体，再结合画面与声音时序做判断。难点在于三处。第一，时间覆盖与空间精度的矛盾：要理解叙事需要密集采样多帧，要做视觉定位又需要高分辨率单帧，均匀采样容易丢细节。

第二，跨模态对齐：音频事件与视觉目标在时间上不对齐，噪声与多人场景下容易漂移。第三，推理链长：从早期定位到中间证据整理再到末尾综合，任何一段出错都会影响答案，而标准强化学习对整条链给同一个奖励，无法区分哪一段更关键。论文把研究起点放在组相对策略优化上，这是一种不需要评论家网络的强化学习算法：对同一问题生成多个候选回答，用组内奖励的均值与标准差算出相对优势，再用裁剪目标更新策略。

原文指出该方法在数学等可验证领域有效，但在开域视频中出现数据浪费与学习信号消失，这正是后文 2 个组件要修补的位置。

### 同输入同目标的已有路线有哪些？本文与它们如何区分？

按同输入、同目标、同监督与同运行阶段来对照，相关工作可分为 3 类。第一类是多模态理解模型的结构改进：给模型加专用音频分支、视频连接器、线索聚合器或交错 token 以增强时序理解，代表是文中对比的视频音频模型与纯视频模型。这类方法擅长直接问答，但原文指出它们不能通过推理轨迹解释自己的思考过程，在需要多步推理与细粒度跨模态对齐的任务上受限，比如声源定位。

第二类是偏好优化与强化学习变体：早期用直接偏好优化做对齐，近期用组相对策略优化及其变体针对特定任务加奖励，如用时序对比奖励、用人裁判奖励做全局音视上下文、用双系统协作做全模态推理、用空间推理链做定位。本文与它们同属强化学习增强推理，但区别是明确处理样本效率与授信不均，而不是只换奖励函数。第 3 类是复用过去经验的方法：如优先经验回放按误差大小复用单样本，或近期复用过去数据的训练框架与回放增强策略优化。

原文的区分点是这些方法把所有过去经验同等对待或只保证单样本优先级，没有保证训练组内奖励有差异，也没有按推理位置加权。本文的差异化主张因此是两点：用按难度分层的回放保证组内奖励方差，用位置相关的抛物线加权把学习信号集中到规划与综合阶段。理解这组对照很重要，后文消融正是把回放与加权拆开，分别看它们在音视对齐与长视频推理上的互补作用。

### GRPO 的三个失效模式如何在一个样本上表现？

先沿一个样本走完流程，再看失效点。假设输入是一个问题加一段视频与音频字幕，当前策略生成 4 个候选回答，每个回答都包含思考块与答案块，奖励函数对格式与答案准确性打分。若 4 个回答得分都是零，比如难题下模型全部答错，按组相对公式用均值做基线，每个回答的优势都是零，策略更新没有方向，这就是消失优势。原文强调当组内奖励完全相同或接近相同时，均值等于每个奖励，优势归零，学习停滞。

第二个失效是数据低效：标准方法是同策略的，用完一批新样本只更新 1 次就丢弃，当预训练策略在复杂问题上反复失败时，这些失败经验不能被再次利用，而视频标注数据昂贵且稀缺。第 3 个失效是均匀授信：公式对整个输出只算一个标量优势，更新时施加到所有 token，开头用于定位说话人的规划 token 与结尾用于综合视听证据的合成 token，和中间冗余 token 得到同样的学习信号。

原文联系了注意力汇点现象与末尾 token 的综合作用，指出这种平均处理会稀释梯度，尤其伤害长视频推理。

**组相对策略优化 × 消失优势：** 组相对策略优化负责在同一问题下生成一组回答并用组内均值做基线来算相对好坏，消失优势是该机制在开域视频任务中的失效状态：当一组回答全对或全错时均值等于每个奖励，优势变为零，梯度消失。AVATAR 保留前者的组相对比较框架，但用回放制造组内奖励差异来让后者不再归零，二者搭配的意义是用多样化的旧经验维持可学习的比较信号。

本节的教学任务是建立问题清单：后文离线架构对应前两个问题，时间加权对应第 3 个问题，实验部分需要分别验证奖励方差是否恢复、长序列收益是否随长度放大、样本量是否下降，三者缺一不可。

### AVATAR 的全景是什么？两个组件如何分工？

AVATAR 的全称是音频视频对齐与推理智能体，整体仍构建在组相对策略优化之上，但做了两处加法。第一处是离线训练架构：保留新生成的在线样本，同时从分层回放缓冲中抽取离线样本，用重要性采样修正后与在线损失加权相加。第二处是时间优势 shaping：在得到在线与离线优势后，按 token 位置乘一个 U 形权重，再送入裁剪目标做策略更新。

另有两个配套机制：视频上下文参考分数为离线样本提供稳定的基线，提示机制在难题且策略停止探索时加入预计算的文字提示以逃离局部最优。按单样本流程复述：输入问题与视频进入策略模型，生成新回答并存入缓冲；同时从缓冲按难度抽取旧回答；两路分别算优势并做位置加权；合并损失后更新策略并更新参考分数与缓冲分层。

下面的总览图把这种双路结构画得很直观，上半只有在线采样，下半多出回放与加权，适合先建立整体因果再进入细节。

> **看图路径：** 1. 先看上半标准 GRPO 只有在线采样箭头，下半 AVATAR 多出回放缓冲分支；2. 再看右侧 GRPO 方块下方是否多出 TAS 梯形再连回策略模型；3. 确认左右两条与参考模型的双向 KL 箭头在上下两部分都保留；4. 沿提示加视频到策略模型再到更新策略的主环走一遍

[![原论文 Figure 1：Standard GRPO (top) vs. AVATAR (bottom).](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/2cfac2086f50/figure-1.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/2cfac2086f50/figure-1.png)

*论文图 1。原论文 Figure 1：“Standard GRPO (top) vs. AVATAR (bottom).”。*

上半标准路径是提示加视频进入策略模型，策略模型一侧与冻结的参考模型算散度约束，另一侧生成在线样本送入组相对优化再更新策略。下半 AVATAR 保留了同样的主干，但在线样本同时写入回放缓冲，缓冲再提供离线样本进入同一优化模块，优化输出经过时间优势 shaping 的梯形模块后才回流更新策略。像素上可执行的区分是下半多出的紫色圆柱体与绿色梯形，以及在线箭头分叉写入缓冲的折线。理解该图后应记住：回放解决的是有没有学习信号，加权解决的是信号往哪里使，二者正交所以后文可以做组件消融。

### 回放与加权具体怎么算？基线与权重从哪里来？

先讲离线架构的 3 个动作。回放缓冲大小为 10k，按难度分为 3 层固定容量：简单占 25%、中等占 35%、困难占 40%。难度不是单个奖励，而是该问题的滑动平均奖励，阈值是该分数分布的动态分位数，最低的 40% 归入困难层。随着模型在某问题上变好，新经验会被晋升到更易层，困难层因此保留低分样本与难题上的稀有成功轨迹，防止成功样本被频繁失败覆盖，这是维持组内奖励方差的关键。

提示机制监控目标策略与行为策略之间的散度，当问题长期困难且散度低意味着停止探索时，触发由大模型根据完整上下文预生成的提示，例如先定位发声物体再计数，作为额外指导把训练维持在挑战但可解的区间。混合训练时每步同时用新在线样本与缓冲离线样本，离线项用行为策略概率做重要性采样比修正策略漂移，总目标是在线损失加系数乘离线损失，原文关键超参数给出时间加权幅度、离线权重与散度权重。

**分层回放缓冲 × 视频上下文参考分数：** 分层回放缓冲负责按难度保存和抽取过去的成功与失败轨迹，视频上下文参考分数负责为每个问题维护过去 20 次新样本奖励的滑动平均以替代不稳定的组均值。前者分工是提供奖励有差异的离线样本，后者分工是提供稳定的离线基线，搭配理由是旧样本的策略已漂移，若仍用当前组均值会噪声很大，组合后离线优势计算既有多样性又有稳定锚点。

再讲时间加权的计算。设推理序列长度为 L，位置下标从零到 L 减一，先归一化到 0 到 1 区间，再用抛物线公式算权重：中间位置权重最小为 1.0，两端权重最大为 1.0 加幅度系数，原文实现中该幅度取 0.3。每个候选回答的序列级优势乘以各自位置权重，得到 token 级 shaping 优势，再替换标准目标中的原始优势。这种归一化保证不同生成长度下都强调开头与结尾，与序列绝对长度无关。

**重要性采样 × 离线目标：** 离线目标负责复用回放缓冲中由旧行为策略生成的样本继续训练，重要性采样负责用当前策略与旧行为策略的概率比修正策略漂移。前者分工是提高样本效率，后者分工是保证修正后的梯度方向不偏，搭配原因是旧样本分布与当前策略不一致，直接复用会失真，组合后 AVATAR 能把在线 GRPO 损失与加权离线损失相加进行混合训练。

离线优势的基线不用当前组均值，而用视频上下文参考分数，即该问题过去 20 个新样本奖励的滑动平均，离线优势等于当前奖励减该均值再除以离线批标准差，之后同样乘位置权重。下面的权重示意图把均匀线与 U 形线的差异与 3 段推理的对应关系讲清。

> **看图路径：** 1. 先看左下坐标横轴归一化位置从 0 到 1、纵轴权重从 1.0 到 1.3 的 U 形红线；2. 再对比灰色水平均匀授信线与红色抛物线在中间与两端的差距；3. 结合右表规划 1.3 倍、证据 1.0 倍、综合 1.3 倍的文字标注理解分段；4. 抬头看顶部胶片乐队视频与右侧康加鼓问答的对应关系

[![原论文 Figure 2：To address GRPO’s uniform credit assignment (gray line), TAS applies a parabolic weighting…](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/2cfac2086f50/figure-2.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/2cfac2086f50/figure-2.png)

*论文图 2。原论文 Figure 2：“To address GRPO’s uniform credit assignment (gray line), TAS applies a parabolic weighting function to amplify advantages during crucial planning and synthesis stages.”。*

左下图中灰色水平线是均匀授信，红色 U 形线是本文加权，横轴是归一化位置，纵轴是权重，阴影标出开头规划与结尾综合被放大、中间证据保持在 1.0 附近。右侧用康加鼓视频问中央人物在做什么为例，把思考分为规划 1.3 倍、证据 1.0 倍、综合 1.3 倍，最终答案为演奏康加鼓。读图时不要把顶部胶片帧当成权重曲线，它们只是任务输入示例。

**时间优势 shaping × 均匀授信：** 均匀授信指把整个回答的标量优势原样施加到每个 token，时间优势 shaping 负责按 token 在推理链中的归一化位置乘一个 U 形权重。均匀授信的分工是简单但稀释了关键步骤，时间优势 shaping 的分工是抬高开头规划段和结尾综合段、压低中间证据段，搭配原因是 Transformer 开头易成注意力汇点、结尾决定答案合成，组合意义是在不加评论家网络的情况下把梯度集中到结构关键边界。

本节未报告梯度是否对权重本身求导，原文把权重当成已知乘子使用；缓冲采样分布与重要性裁剪范围等细节也未完全展开，复现时应按原文超参数先跑通再调幅度。

### 四阶段课程如何从纯视觉走到声音定位？奖励怎么配？

训练按课程复杂度递进，分为冷启动监督微调与 3 个强化学习阶段。阶段零用视频与图像的思维链推理数据做监督微调，得到初始策略。阶段一做视觉推理，阶段二做音视推理，阶段三做音频目标定位。原文表格给出了每阶段的数据集与奖励组合：视觉阶段用格式奖励与准确率奖励，音视阶段加入自奖励，定位阶段加入逐步推理裁判。4 个奖励的定义需要准确复述。

格式奖励是二值检查是否遵守思考块与答案块的标签格式，符合得一否则得负一。最终答案准确率对答案块提取的答案与真值比较，非零数值任务用相对平均绝对误差给出稠密信号。自奖励是在同组多个答案中多数投票选伪正确，平局按平均 token 似然选置信更高者，一致者得一否则得零。逐步裁判用冻结的小模型对思考块的逻辑一致性与线索使用打 0 到 1 的分数，与最终答案对错解耦。

实现条件上，评测基座是两个原生支持音频视频的开源模型，训练用支持组相对优化的框架，训练与评测统一采样 32 帧，时间加权贯穿所有强化阶段，视觉编码器、音频编码器、多层感知机与大语言模型上挂秩为 16 的低秩适配器。阶段二的音频线索用音频标注模型生成，阶段三的逐步奖励用裁判模型生成。下面的课程图把每阶段的问答形态与奖励公式画成流水线。

**自奖励 × 逐步推理裁判：** 自奖励负责在同一组多个答案中用多数投票选出伪正确并给一致者二值奖励，逐步推理裁判负责用冻结的视觉语言裁判模型对思考块的逻辑一致性和线索使用打 0 到 1 的细粒度分。前者分工是在无真值时利用组内共识，后者分工是在定位任务中评价过程质量，搭配原因是最终答案正确不等于推理过程可靠，组合后第二阶段用自奖励补对齐信号、第三阶段用裁判信号补定位过程监督。

> **看图路径：** 1. 从左到右依次读 S0 冷启动、S1 视觉推理、S2 音视推理、S3 声音定位四框标题；2. 看每框底部奖励组合从单一格式加准确率到加入自奖励再到加入裁判的变化；3. 对照每框中间问答示例注意思考块与回答块的标签格式；4. 沿橙色大箭头确认课程是串行推进而非并行多任务

[![原论文 Figure 3：Three-stage RL training pipeline to evaluate AVATAR.](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/2cfac2086f50/figure-3.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/2cfac2086f50/figure-3.png)

*论文图 3。原论文 Figure 3：“Three-stage RL training pipeline to evaluate AVATAR.”。*

从左到右四框依次是冷启动、视觉推理、音视推理、声音定位。第一框是推理数据进入预训练视觉语言模型得到初始策略；第二框问视频结束时有多少运动橡胶物体，思考列出材质、运动原因与计数；第三框问女性演讲时观众反应，思考区分音频欢呼与画面讲台听众；第四框要求定位所有声源，思考区分骑行与乐器声并输出左右与中央位置。

每框底部奖励从两项变为三项，箭头表示串行推进。复现时应注意阶段依赖：前 1 阶段的策略是后 1 阶段的起点，不能跳过冷启动直接做定位，否则格式奖励不稳定会污染后续比较。

### 在什么模型、数据与指标上测？比较条件是否一致？

评测基座是两个开源音视模型，分别在其原始基线、加标准组相对优化、加本文方法三态下比较，所有结果由作者复现并给出自助法 95% 置信区间，不显著项有特殊标记，潜在数据污染项另有标记。音频视频任务覆盖全模态推理、日常环境声、跨模态计数、音视对齐、野外全模态理解与人类意图推理 6 个基准。纯视频任务覆盖时序感知问答、全谱视频理解、长视频推理、悬疑因果推理、专家知识分析与时序排序 6 个基准。

另有消融用的视频推理基准与序列长度分组。指标方向都是准确率越高越好，增量用百分点表示，不是相对百分比，这点在读表时不能混淆。公平条件上，同一基座下的 3 种方法共享采样帧数与课程起点，区别只在是否用回放与加权；跨模型比较时只看各自增量，不直接比绝对分数，因为基座起点不同。资源状态方面，官方项目页当前可用，链接返回正常，可作为复现入口，但权重与代码的可运行性仍需以页面实际提供为准。

训练开销上原文未给硬件时长，只给了样本效率口径：达到目标性能所需的生成补全数，这是后文成本讨论的唯一可核对依据。统计方法上主表给出置信区间，序列长度图给出分组平均增益，优势分布图用于诊断组内方差是否恢复。理解这些条件后，才能判断后文加 4.9 与加 3.7 等数字是在同基座同协议下的可比增量，而不是跨基座的绝对排名。

### 主结果：增益出现在哪里？未胜出项是什么？

比较问题是：在同一基座与同一评测协议下，本文方法相对原始基线与标准组相对优化是否带来稳定增益，指标方向是分数越高越好。表前需要明确公平条件：下表是音频视频 6 基准的绝对分数，基线行是原始模型，加组相对优化与加本文方法是同一基座下的两种强化策略，改进量用百分点表示并附置信区间。

| Model | OmniBench | DailyOmni | AV-Counting | AV-Odyssey | WorldSense | IntentBench |
| --- | --- | --- | --- | --- | --- | --- |
| Ola-7B [32] (Baseline) | 45.3 | 52.3 | 17.4 | 25.6 | 44.2 | 59.1 |
| + GRPO | 46.8 | 54.1 | 18.2 | 27.0 | 44.7 | 60.3 |
| + AVATAR | 47.2 | 55.7 | 19.5 | 28.8 | 45.0 | 61.9 |
| Qwen2.5-Omni [51] (Baseline) | 44.2 | 44.0 | 22.3 | 29.8 | 44.2 | 63.7 |
| + GRPO | 45.4 | 44.8 | 22.8 | 31.3 | 45.1 | 63.8 |
| + AVATAR | 49.1 | 47.0 | 23.1 | 32.1 | 46.0 | 63.9 |

上表显示在两个基座上本文方法都优于基线与标准优化。以第二个基座为例，本文方法在全模态推理上达到 49.1，在日常音视上达到 47.0，在音视对齐上达到 32.1，相对基线的增益明显大于标准优化的增益。在第一个基座上同样是本文方法领先，但在部分基准上领先幅度收窄，例如野外理解只领先零点几，这说明回放与加权不是在所有分布上等幅提升。未胜出项需要如实指出：在意图推理上第二个基座的标准优化增益不显著，本文方法增益也很小。

在绝对分数上本文方法并未在所有六项都超过同期最优的专用模型，例如跨模态计数上仍有差距，这与计数任务对稠密定位的特殊要求有关。训练动态的像素对比进一步支持稳定性判断，后文图显示标准优化的奖励曲线振荡大且多次塌陷到零附近，而本文方法曲线更平滑且低点维持在较高位置。

> **看图路径：** 1. 先确认左右两图横轴都是训练迭代、纵轴都是准确率奖励；2. 看左侧蓝色 GRPO 曲线上下毛刺多、右侧红色 AVATAR 曲线呈爬升趋势；3. 注意左侧纵轴低点接近零附近的塌陷与右侧低点维持在较高位置的差异；4. 不要从截图顶部表格残留数字读性能，以正文表格为准

[![原论文 Figure 4：Comparison of training dynamics between GRPO and AVATAR.](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/2cfac2086f50/figure-4.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/2cfac2086f50/figure-4.png)

*论文图 4。原论文 Figure 4：“Comparison of training dynamics between GRPO and AVATAR.”。*

左图蓝色是标准优化的准确率奖励随训练迭代的变化，毛刺多且低点接近零，右图红色是本文方法的曲线，整体呈爬升并在高位波动，横轴都是训练迭代。读图时不能把纵轴向下的一段短毛刺直接解读为最终性能变差，也不能把末段高点推广为全程都好，正确读法是比较塌陷频率与爬升趋势。该图与优势分布诊断共同说明：回放维持了组内奖励差异，加权稳定了长链优化，因此主结果的增益不是单点运气。对初学者而言，复述时应分两层：先报绝对分数与增量，再补一句代价，即这些增益依赖 4 阶段课程与额外裁判模型，不是单步训练的免费提升。

### 纯视频推理是否同样受益？长序列与时序任务有何证据？

第二个比较问题是：不依赖音频的纯视频理解与推理基准上，本文方法是否仍稳定优于基线，特别是在需要因果与时序的任务上。表前公平条件与上一节相同，只是换到另一组 6 基准，指标仍是越高越好，增量为百分点。下表用原文连续句整理，只含原文明确报告的增量，不加入绝对分数以避免无源推算。

| 条件 | 指标 | 基线 | 本方法增量 | 比较对象 |
| --- | --- | --- | --- | --- |
| 第二基座 | MMVU | 原始基线 | +5.4 | 本文方法相对基线 |
| 第二基座 | OmniBench | 原始基线 | +4.9 | 本文方法相对基线 |
| 第二基座 | Video-Holmes | 原始基线 | +4.5 | 本文方法相对基线 |

表后解释需要增加新信息而非重复摘要。原文报告显示在第二个基座上，视频理解与推理的增益同样显著，尤其在悬疑因果与专家知识基准上接近翻倍于标准优化的表现。

时序排序任务是关键反例：标准优化的增益不显著，而本文方法取得显著的加 1.8，这支持了位置加权的假设，即均匀授信在长时序任务上稀释信号，而首尾加权保留了规划与综合的梯度。代价是纯视频任务的绝对提升在部分短视频基准上较小，例如第二个基座的时序感知问答增益仅零点几且不显著，说明当推理链很短时 U 形加权的空间有限。适用条件因此是推理链越长、规划与综合越重要，本文方法的相对优势越大，这一点在后文序列长度分组中得到直接验证。

### 回放与加权各自贡献多少？课程与权重形态如何反证？

消融要回答 3 个子问题：回放与加权是否互补，课程是否逐段有效，加权形态是否为 U 形最优。表前先定比较框架：同一基座下比较只加回放、只加时间加权与两者都加的三态，另比较课程逐段叠加与 5 种权重形态，指标越高越好。下表整理本文相对标准优化的额外增益，只用原文报告的组间差异语句。

| 条件 | 指标 | 基线 | 本方法增量 | 比较对象 |
| --- | --- | --- | --- | --- |
| 同基座 | OmniBench | 标准优化 | +3.7 | 本文方法相对标准优化 |
| 同基座 | Video-Holmes | 标准优化 | +1.9 | 本文方法相对标准优化 |
| 同基座 | 目标性能所需补全数 | 标准优化 | 少 80% | 本文方法相对标准优化 |

表后解释必须点出互补性与反例。原文组件消融显示回放在音视任务上是主要贡献者，例如在全模态推理上大幅超过标准优化，说明复用难题样本缓解了跨模态稀疏奖励；时间加权在长视频推理上更有效，例如在空间与长视频基准上超过纯回放，说明位置加权对长链更关键。

两者叠加取得最强表现，证明数据多样性与结构化授信正交。课程消融显示从纯监督微调到逐段加入视觉、音视与定位强化，分数单调爬升，定位阶段仍带来额外增益，说明课程不是冗余。权重形态消融是重要反证：线性衰减、线性递增、均匀与反抛物线都劣于 U 形，其中强调中间的反抛物线最差，这直接支持开头与结尾最关键的假设，而不是任意加权都有效。

未评测边界是提示机制的独立贡献未单独量化，原文只说它帮助逃离局部最优，复现时若去掉提示应单独记录难题通过率的变化，不要把全部回放收益都归于缓冲容量。

| 条件 | 指标 | 基线 | 本方法效率 | 比较对象 |
| --- | --- | --- | --- | --- |
| 400 轮 | 准确率 | 新起点 | 0.80 | 本文方法 |
| 1000 轮 | 准确率 | 新起点 | 未达 0.80 | 标准优化 |
| 目标性能 | 生成补全数 | 标准优化 | 5 倍效率 | 本文方法相对标准优化 |

上表基于原文训练动态句整理，标准优化在 1000 轮内未达到本文方法 400 轮的准确率，对应少 80% 的生成补全数。

但需注意该口径只计生成补全数，未计回放存储、裁判推理与多阶段训练的额外开销，不能直接等同于 wall-clock 时间或算力成本下降。

### 哪些结论尚未被验证？误读高发区在哪里？

首先区分 3 类表述。直接报告的是增量数字、置信区间与样本效率口径；有限解释的是回放恢复组内方差、加权稳定长链优化，这些有分布图与长度分组支持但仍是相关性解释；未验证推测是推广到流式音视推理的未来方向，原文明确列为展望，不能当成已验证结论。缺失证据不是技术错误，但复述时要用可能与待验证表达。

例如注意力汇点只是加权设计的动机，不是本文测量的注意力矩阵结论，不能说本文证明了汇点存在。相关性不等于因果：长序列上加权增益更大支持了假设，但也可能混杂了长序列任务本身更难、基线更低的因素。未测量的量不能承诺改善：原文未报告误判率、延迟、输出帧率与推理开销，总体准确率趋势不等于每组每步都成立，更不等于部署延迟下降。

表头冲突需要标注：原文表格与正文对部分增量的小数表述存在修约差异，复述时以表格绝对分数与正文增量各自注明口径，不自行四舍五入或换算相对百分比。百分点与相对百分比不同，不同指标的差值不能混放一列，也不能把自动指标当成人评。另一个误读是把回放等同于简单过采样：本文回放的关键是按问题滑动平均分层并保留稀有成功以制造组内差异，若只做均匀复读，消失优势仍可能存在。

最后，提示机制依赖大模型预生成的文字提示，其质量与覆盖率未充分披露，在新领域复用时应先评估提示本身的正确性，否则会引入额外偏差。

### 要复现应先做什么？需要哪些数据与超参数？

复现起点是确认资源可达：官方项目页当前可用，可先从页面获取代码与数据说明，再核对本文的课程配置。第一步跑通冷启动监督微调，用视频与图像思维链数据得到能稳定输出思考块与答案块的初始策略，格式奖励是后续一切比较的前提。第二步按阶段一到三依次推进，每阶段切换数据集与奖励组合：视觉阶段用格式加准确率，音视阶段加入自奖励，定位阶段加入冻结裁判的过程分。

关键超参数按原文保留：回放容量 10k 与 3 层比例、滑动平均窗口 20、时间加权幅度 0.3、离线权重 0.6、散度权重 0.1，低秩适配器秩 16，训练与评测统一采样 32 帧。数据方面需准备视频推理、音视问答与事件定位、音视分割 4 类数据，并用音频标注模型补音频线索，用裁判模型补过程分，随机种子与划分按原文交代为准，未报告处应记录为缺项而不猜测。

评估时同一基座下并行跑基线、标准优化与本文方法，用自助法给出置信区间，分别在音视 6 基准与纯视频 6 基准上报告绝对分数与百分点增量，同时记录达到目标性能所需的生成补全数与裁判调用次数，以便区分样本效率与真实算力成本。常见坑是跳过课程直接做定位、把均匀复读当成分层回放、把权重幅度调得过大导致中间证据被过度压制，建议每次只动一处并保留标准优化对照。

若官方权重不可下载，应明确区分代码开源与系统可运行，前者不等于开箱即用。

### 何时值得尝试 AVATAR？一句话如何记住它？

当任务同时满足 3 个条件时值得尝试：输入包含视频与音频且需要长链推理，组内奖励容易出现全对或全错导致优势归零，推理链中早期定位与末尾综合明显比中间整理更关键。此时分层回放提供可学习的比较信号，首尾加权把梯度集中到关键边界，二者叠加在本文的音视与视频推理基准上都取得了大于标准优化的增益，且用更少的生成补全数达到目标性能。

若任务是短回答、奖励稠密且推理链很短，U 形加权的收益可能很小，而 4 阶段课程与裁判模型的复杂度依然存在，此时更简单的方法可能更划算。记住本文的一句话：用有难度的旧经验维持组内差异，用 U 形位置权重决定梯度去向。复述方法时沿输入到输出走一遍：问题加视频进入策略，生成新旧两路样本，用滑动平均基线算离线优势，用抛物线权重做 token 级放大，合并损失更新策略并推进课程。

还需补的验证是真实延迟与算力成本、提示质量的影响、以及在新领域与流式场景下的稳定性，这些未在原文中充分测量，应用前应自行补测。

## 📐 原文公式与排版

以下展示论文原页中的数学表达区域，保留原始上下标、分式和符号排版。区域序号仅用于本文导航，不是论文公式编号。

[![原文数学表达区域 1，PDF 第 3 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/48be6d9043bd/figure-1.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/48be6d9043bd/figure-1.png)

区域 1 · [查看论文原页](https://openaccess.thecvf.com/content/CVPR2026/papers/Kulkarni_AVATAR_Reinforcement_Learning_to_See_Hear_and_Reason_Over_Video_CVPR_2026_paper.pdf#page=3)

[![原文数学表达区域 2，PDF 第 3 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/48be6d9043bd/figure-2.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/48be6d9043bd/figure-2.png)

区域 2 · [查看论文原页](https://openaccess.thecvf.com/content/CVPR2026/papers/Kulkarni_AVATAR_Reinforcement_Learning_to_See_Hear_and_Reason_Over_Video_CVPR_2026_paper.pdf#page=3)

[![原文数学表达区域 3，PDF 第 3 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/48be6d9043bd/figure-3.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/48be6d9043bd/figure-3.png)

区域 3 · [查看论文原页](https://openaccess.thecvf.com/content/CVPR2026/papers/Kulkarni_AVATAR_Reinforcement_Learning_to_See_Hear_and_Reason_Over_Video_CVPR_2026_paper.pdf#page=3)

[![原文数学表达区域 4，PDF 第 4 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/48be6d9043bd/figure-4.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/48be6d9043bd/figure-4.png)

区域 4 · [查看论文原页](https://openaccess.thecvf.com/content/CVPR2026/papers/Kulkarni_AVATAR_Reinforcement_Learning_to_See_Hear_and_Reason_Over_Video_CVPR_2026_paper.pdf#page=4)

[![原文数学表达区域 5，PDF 第 4 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/48be6d9043bd/figure-5.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/48be6d9043bd/figure-5.png)

区域 5 · [查看论文原页](https://openaccess.thecvf.com/content/CVPR2026/papers/Kulkarni_AVATAR_Reinforcement_Learning_to_See_Hear_and_Reason_Over_Video_CVPR_2026_paper.pdf#page=4)

[![原文数学表达区域 6，PDF 第 4 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/48be6d9043bd/figure-6.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/48be6d9043bd/figure-6.png)

区域 6 · [查看论文原页](https://openaccess.thecvf.com/content/CVPR2026/papers/Kulkarni_AVATAR_Reinforcement_Learning_to_See_Hear_and_Reason_Over_Video_CVPR_2026_paper.pdf#page=4)

[![原文数学表达区域 7，PDF 第 5 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/48be6d9043bd/figure-7.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/48be6d9043bd/figure-7.png)

区域 7 · [查看论文原页](https://openaccess.thecvf.com/content/CVPR2026/papers/Kulkarni_AVATAR_Reinforcement_Learning_to_See_Hear_and_Reason_Over_Video_CVPR_2026_paper.pdf#page=5)

[![原文数学表达区域 8，PDF 第 5 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/48be6d9043bd/figure-8.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/48be6d9043bd/figure-8.png)

区域 8 · [查看论文原页](https://openaccess.thecvf.com/content/CVPR2026/papers/Kulkarni_AVATAR_Reinforcement_Learning_to_See_Hear_and_Reason_Over_Video_CVPR_2026_paper.pdf#page=5)

[![原文数学表达区域 9，PDF 第 5 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/48be6d9043bd/figure-9.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/48be6d9043bd/figure-9.png)

区域 9 · [查看论文原页](https://openaccess.thecvf.com/content/CVPR2026/papers/Kulkarni_AVATAR_Reinforcement_Learning_to_See_Hear_and_Reason_Over_Video_CVPR_2026_paper.pdf#page=5)

[![原文数学表达区域 10，PDF 第 5 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/48be6d9043bd/figure-10.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/48be6d9043bd/figure-10.png)

区域 10 · [查看论文原页](https://openaccess.thecvf.com/content/CVPR2026/papers/Kulkarni_AVATAR_Reinforcement_Learning_to_See_Hear_and_Reason_Over_Video_CVPR_2026_paper.pdf#page=5)

[![原文数学表达区域 11，PDF 第 5 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/48be6d9043bd/figure-11.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/48be6d9043bd/figure-11.png)

区域 11 · [查看论文原页](https://openaccess.thecvf.com/content/CVPR2026/papers/Kulkarni_AVATAR_Reinforcement_Learning_to_See_Hear_and_Reason_Over_Video_CVPR_2026_paper.pdf#page=5)

[![原文数学表达区域 12，PDF 第 5 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/48be6d9043bd/figure-12.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/48be6d9043bd/figure-12.png)

区域 12 · [查看论文原页](https://openaccess.thecvf.com/content/CVPR2026/papers/Kulkarni_AVATAR_Reinforcement_Learning_to_See_Hear_and_Reason_Over_Video_CVPR_2026_paper.pdf#page=5)

另有 19 个候选区域因边界不明确或图片数量、尺寸限制未展开；请[查看完整论文](https://openaccess.thecvf.com/content/CVPR2026/papers/Kulkarni_AVATAR_Reinforcement_Learning_to_See_Hear_and_Reason_Over_Video_CVPR_2026_paper.pdf)中的原始排版。

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。
- 评分规则：type-aware-v1
- 评分模型：muse-spark-1.3-contributor
- 评分请求协议：openai_responses

---

[← 返回 cvpr-2026 论文汇总](/posts/conference-cvpr-2026/)
