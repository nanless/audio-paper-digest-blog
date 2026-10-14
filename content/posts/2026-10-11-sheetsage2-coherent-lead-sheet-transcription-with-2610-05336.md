---
title: "SheetSage2: Coherent Lead-Sheet Transcription with Synthetic Supervision"
date: 2026-10-11
draft: false
tags: [音乐转录, 工具增强与约束解码, 知识蒸馏, 音乐]
categories: [论文速递]
description: "论文要从流行音乐录音恢复节奏、和声、旋律与曲式的统一主旋律谱，用大规模 MIDI 合成音频补监督、用分阶段结构化解码保证拍点与音高连贯、再蒸馏为自回归模型，主结果在八个评测集上多数指标领先，但只在稳拍流行音乐与限定词汇条件下成立。"
hiddenInHomeList: true
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_arxiv_id: "2610.05336"
paper_digest_workbench_contract: "researcher-workbench-v1"
paper_digest_reader_title: "SheetSage2：用合成监督做连贯的主旋律谱转录"
paper_digest_original_title: "SheetSage2: Coherent Lead-Sheet Transcription with Synthetic Supervision"
paper_digest_arxiv_version: 1
paper_digest_arxiv_versioned_id: "2610.05336v1"
paper_digest_arxiv_abs_url: "https://arxiv.org/abs/2610.05336v1"
paper_digest_arxiv_pdf_url: "https://arxiv.org/pdf/2610.05336v1.pdf"
paper_digest_primary_task: "音乐转录"
paper_digest_tags_contract: "paper-tag-flat-tags-v2"
paper_digest_tags_selection_contract: "paper-tag-selection-v2"
paper_digest_tags_registry_version: "paper-tag-catalog-v2"
paper_digest_tags_registry_sha256: "0a0847314ab2059d95efac33376414498e598a1f02a1486869bee0efc481d1f7"
paper_digest_tags_concepts: [{"facet":"task","id":"task.transcription","label":"音乐转录"},{"facet":"method","id":"method.tool-augmentation","label":"工具增强与约束解码"},{"facet":"method","id":"method.distillation","label":"知识蒸馏"},{"facet":"signal","id":"signal.music","label":"音乐"}]
paper_digest_primary_method: "工具增强与约束解码"
paper_digest_score: 8.7
paper_digest_rank_bucket: "前25%"
paper_digest_document_type: "模型报告"
paper_digest_one_sentence: "论文要从流行音乐录音恢复节奏、和声、旋律与曲式的统一主旋律谱，用大规模 MIDI 合成音频补监督、用分阶段结构化解码保证拍点与音高连贯、再蒸馏为自回归模型，主结果在八个评测集上多数指标领先，但只在稳拍流行音乐与限定词汇条件下成立。"
paper_digest_authors: [{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Junyan Jiang"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Ruibin Yuan"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Jiahao Pan"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Wei Xue"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Yike Guo"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Gus Xia"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Yann LeCun"}]
paper_digest_abstract_sha256: "c349e12863e0674a92dedbdf1143dcfb2ed1c6f174ed84b69cb45110c2cc05b7"
paper_digest_sidecars: {"citation.bib":{"sha256":"12f871dd0a8adee50c25cf77cfbbeec7345429b72737bed20a4c127141f5a83a","url":"/audio-paper-digest-blog/data/papers/2026-10-11/2610-05336/citation.bib"},"citation.json":{"sha256":"e00dd650a3b388ce5d9bd3086b80b670f3e1bbd3d8f4c906e61fdfe87b9d6860","url":"/audio-paper-digest-blog/data/papers/2026-10-11/2610-05336/citation.json"},"citation.ris":{"sha256":"a8b68f3b5f9f0594879d0491174439dce570769e844eae0bda3d86160c5b97a7","url":"/audio-paper-digest-blog/data/papers/2026-10-11/2610-05336/citation.ris"},"rethink-context.json":{"contract":"paper-research-context-v2","sha256":"b9a35f1591770dde32b93d6164bcef384bd78e7071c3dad0b882ea5b46514846","url":"/audio-paper-digest-blog/data/papers/2026-10-11/2610-05336/rethink-context.json"}}
paper_digest_api_reader_contract: "beginner-researcher-v3"
paper_digest_api_reader_article_sha256: "e098e14eef0b7dadbdd1ed8d9d7c371d9d4036dd3a6821c69a429ac4419d9929"
paper_digest_api_reader_plan_sha256: "e0b4680e6266cf4715a48ad1dcf145c0aadf48798fdf7b32ce6161d41e76c7cc"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings-v4"
paper_digest_api_reader_source_bindings_sha256: "5e058a122ff7ee722b4560d5f2227b30b3b9e465c09f9419ac802705b481e59c"
paper_digest_api_reader_source_table_count: 4
paper_digest_api_reader_source_formula_count: 4
paper_digest_api_reader_structured_artifacts_sha256: "1ffdf15312fec84dd4ddfc2a6f645e931527f5476ebc80a017a800ed00b39083"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity-v1"
paper_digest_api_reader_author_identity_sha256: "add507ec40d2326c1b3234cbb0e4ed0d371e54dba6ac5482f1f6a06866fbc34a"
paper_digest_api_reader_author_count: 7
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity-v1"
paper_digest_api_reader_resource_identity_sha256: "96abc49ec4bc14b5de832806f9ed657bfbdb29010e95e1ddf4ace9c542819091"
paper_digest_api_reader_resource_count: 6
paper_digest_api_reader_figure_persistence: "ephemeral-no-persisted-figure-assets-v1"
paper_digest_api_reader_decision_projection: "api-reader-decision-projection-v2"
---

# 📄 SheetSage2：用合成监督做连贯的主旋律谱转录

> 英文题目：*[SheetSage2: Coherent Lead-Sheet Transcription with Synthetic Supervision](https://arxiv.org/abs/2610.05336v1)*

> 标签：#音乐转录 | #工具增强与约束解码 | #知识蒸馏 | #音乐
>
> 评分：**8.7/10** | 创新 1.5/2 | 技术严谨 1.2/1.5 | 实验充分 1.2/1.5 | 清晰度 0.8/1 | 影响力 1.2/1.5 | 开源 1.5/1.5 | 可复现 0.3/0.5 | 工程/实践 1/1.5


## 👥 作者与机构

- Junyan Jiang：机构信息未在 arXiv HTML 中可靠披露
- Ruibin Yuan：机构信息未在 arXiv HTML 中可靠披露
- Jiahao Pan：机构信息未在 arXiv HTML 中可靠披露
- Wei Xue：机构信息未在 arXiv HTML 中可靠披露
- Yike Guo：机构信息未在 arXiv HTML 中可靠披露
- Gus Xia：机构信息未在 arXiv HTML 中可靠披露
- Yann LeCun：机构信息未在 arXiv HTML 中可靠披露

## 📌 核心摘要

导谱转录从多声部混合录音推断节拍与小节线、调号与和弦、旋律音高与时值、段落标签并整理成统一可读乐谱，难点是各维度互补依赖且局部预测准确仍可能得到不一致的音乐序列，而完整对齐的音频乐谱对很少。SheetSage2先用符号音乐分析加伪标签自举从大规模MIDI派生节拍、拍号、旋律、和弦、调与段落标签，并用FluidSynth渲染为24 kHz音频。帧级探测器SheetSage2-Prober在混合真假数据上学习局部概率，再经六阶段结构化解码整合互补线索与时间依赖后输出统一事件序列。SheetSage2-AR只在探测器输出上做序列级蒸馏，推理时直接生成事件，不再运行任务相关的动态规划。在8个集合15个基准指标对上，单个SheetSage2-AR在12对上超过所列最强已有系统，其中GTZAN下拍F1为80.45%，高于Beat This!的78.28%。在HarmonixSet结构边界F1（3 s）上SheetSage2-AR为82.86%，高于SongFormer的79.50%。训练数据与评测以西方调性流行音乐为主，该风格可能更适用，十六分音符网格、单一主速度锚点与受限和弦词表之外的音乐尚未验证。原文未披露训练、推理或部署成本。

## 🔗 开源与复现资源

- 代码相关资源：<https://huggingface.co/m-a-p/SheetSage2> — 链接可访问（HTTP 200）

- 模型相关资源：<https://huggingface.co/m-a-p/SheetSage2> — 链接可访问（HTTP 200）

- 第三方资源：<https://huggingface.co/m-a-p/SheetSage2> — 链接可访问（HTTP 200）

- 第三方资源：<https://github.com/CPJKU/beat_this_annotations/tree/v1.0/gtzan> — 链接可访问（HTTP 200）

- 第三方资源：<https://github.com/audiocontentanalysis/dataset-gtzan-key/tree/v1.0> — 链接可访问（HTTP 200）

- 第三方资源：<https://creativecommons.org/licenses/by-nc/4.0/> — 链接可访问（HTTP 200）

可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 主旋律谱转录要从录音里恢复什么

主旋律谱是给人看的缩略总谱。输入是一段多声部混音，通常是流行歌曲录音，包含人声、鼓、贝斯、吉他键盘等。输出不是逐乐器的完整分谱，而是一套能指导演奏的组织信息：节奏维度要有音符在拍上的位置与时值、小节线、拍号和速度；和声维度要有和弦符号与调号；旋律维度要有一条或两条带音高的旋律线。

曲式维度要有前奏、主歌、副歌等段落标签。论文强调的难点在于一致性：分散预测各自准确，拼在一起仍可能读不通。例如拼写音名需要知道当前调，音符时值需要落在同一套拍点网格上，段落边界最好落在小节线，和弦边界最好落在拍点上。如果节拍在主歌与副歌之间从 1 倍跳到 2 倍，对应段落的记谱时值就会错位。评价时论文分别测拍点、下拍点、调、和弦、结构、旋律，但又指出准确率指标不能完全反映连贯性，因此另做速度层级混合率与八度混合率诊断。

对刚入门的读者，可以把任务理解为先听出局部线索，再把它们排进同一张时间与调性网格。

### 已有路线为什么是分任务做的

传统音乐信息检索多是单任务系统：和弦估计、调性估计、旋律转录、拍点跟踪各做各的。钢琴转录能恢复精确的音符与踏板，但不直接生成乐谱。SheetSage1 把拍点跟踪、调、和弦、旋律拼成主旋律谱，是与本篇最接近的前身，节奏部分复用 madmom，旋律只写一条声部且全曲用同一调号拍号速度。统一序列模型方面，TUTTI 做古典乐 ABC 谱转录，MT3 与 MuScriptor 做多乐器事件转录，思路都是用自回归模型学习事件之间的依赖。

但这类模型需要大量完整对齐的音频与乐谱对，而现有标注往往只覆盖拍点、和弦、调或旋律中的一项，且时间精度有限，直接拿来当统一序列目标很困难。合成监督方面，Slakh 等工作把 MIDI 渲染成音频得到对齐的音符与分轨，SLMS 从 MIDI 文本标记挖曲式标签，内容自标注从 MIDI 内容推和弦与调。结构化解码方面，拍点常用动态贝叶斯网络，和弦常用条件随机场，远距离重复段落还可用跳链条件随机场，但推理代价高。

序列级蒸馏在机器翻译中用于不用束搜索仍保留质量，本篇把类似思想用于不用任务相关动态规划仍保留转录质量。比较这些工作时要注意输入输出是否相同：单任务基线只解决子问题，不能直接要求它输出完整主旋律谱。

### 论文要解决的两个具体障碍是什么

论文把障碍归为两点。第一是标注稀缺：完整对齐的主旋律谱很少，异构标注缺属性、时间不准、约定不一致，难以直接作为统一序列模型的训练目标。第二是局部准确不等于序列连贯：速度层级跳变与八度跳变是两类典型错误。前者指同一首歌前后用不同速度层级记谱，例如无鼓主歌偏向 80 拍、有鼓主歌偏向 160 拍，拍网格与记谱时值随之改变；后者指相邻旋律音之间出现不合理的八度跳，例如 C4-E4-G4 被写成 C5-E4-G4，音程被扭曲。

论文的解决分工很明确：用合成数据扩大监督规模，用帧级探测器容忍部分标注与时间误差，用结构化解码显式固定全局速度参考与音程依赖，再用自回归蒸馏把教师的一致性转移给可直接生成统一序列的学生。最终交付的是 SheetSage2-AR，一个给定音频就能输出统一事件序列的模型，推理时用贪心解码加事件语法掩码，不再跑任务相关的动态规划。

### 从音频到可编辑谱面的整体流程

最终模型 SheetSage2-AR 的推理路径是一条直线。单声道 24 千赫兹音频先进入 MERT-v2-FullSong 编码器得到音频表示，自回归解码器同时看音频表示与已生成的前文事件，预测下一个事件的概率，贪心选择语法允许的最高概率词，直至结束符。统一事件序列把绝对拍点时间戳与十六分音符网格上的相对位置结合，类型化词分别编码拍号拍位、段落、调、和弦、旋律音高与来源、时值。时间戳按 10 毫秒分档，确定性记谱构造器再把序列转为 ABC 谱或 MIDI 文件。

训练流水线则分 3 段：先做合成数据，把 MIDI 的符号信息变成任务标签并渲染成音频；再训练 SheetSage2-Prober，两个帧级探测模型从部分含噪标注学习局部概率；最后用探测器加结构化解码生成完整事件序列，作为硬目标训练自回归学生。这种先局部后序列的安排，是为了避开直接用不完整不一致标注训练序列模型的困难。下图展示了推理时音频、事件流、ABC 与五线谱的对应关系，右侧用一个片段把谱面、文本与事件并排对齐，读图时注意同一音乐位置在 3 种表示中如何出现。

> **看图路径：** 1. 沿左侧音频到编码器再到解码器的箭头看主数据流向；2. 看右侧同一片段的五线谱、ABC 文本与事件流如何上下对齐；3. 注意时间、拍位、段落、调、和弦、旋律在事件流中的先后顺序

[![原论文 Figure 1：SheetSage2-AR inference.](https://arxiv.org/html/2610.05336v1/sheetsage2_ar.svg)](https://arxiv.org/html/2610.05336v1/sheetsage2_ar.svg)

*论文图 1。原论文 Figure 1:：“SheetSage2-AR inference. Audio representations and preceding events condition a unified event sequence, which is converted into ABC notation and an editable lead sheet.”。*

图中左侧是编码器加解码器堆叠，右侧从上到下是五线谱、人声与乐器分轨、ABC 文本、时间、拍位、段落、调、和弦、旋律与时值。同一垂直位置对应同一音乐时刻，调只在首拍发出之后省略直到变化，和弦在变化与小节线处重复锚定，旋律音高带有人声或乐器来源标记。这种分离让模型分别学习时间与乐谱位置，也让后处理可以在不改鸣响内容的前提下修正记谱拼写。

### 探测器两条支路如何分工再汇合

探测器与解码的组合是理解教师的关键，非旋律与旋律两条支路各用自己的编码器副本，输出不同分辨率的局部概率，再经各自的动态规划汇成统一事件。下图上半给出两条支路的输入输出，下半用示意图解释节奏与旋律为何需要全局约束，读图时先分清左右两条路径，再看约束如何减少备选。

> **看图路径：** 1. 看上半非旋律与旋律两条支路各自的编码器与解码输出；2. 看下半节奏与旋律示意图中实线选择路径与虚线备选的关系；3. 确认统一事件最终汇入记谱与 MIDI 导出的位置

[![原论文 Figure 4：SheetSage2-Prober and structured decoding.](https://arxiv.org/html/2610.05336v1/sheetsage2_prober.svg)](https://arxiv.org/html/2610.05336v1/sheetsage2_prober.svg)

*论文图 4。原论文 Figure 4:：“SheetSage2-Prober and structured decoding.”。*

上半左侧非旋律模型输出节奏、调、和弦、段落，右侧旋律模型在预测拍网格细分上输出起音、时值与休止；中间分别是脉冲加拍位状态解码与带音程上下文的旋律解码；最后汇成含时间、拍位、段落、调、和弦、旋律的统一事件，再导出 ABC 或 MIDI。下半节奏示意中实线是保持单一速度的选中路径，虚线是临时倍速的局部备选；旋律示意中绝对音高存在八度混淆，相对音程提供额外约束。教师在推理时走完整条流水线，学生只学最后的统一事件序列。

### 节奏解码如何用一个锚点稳住全曲速度

探测器的非旋律模型在 25 赫兹帧上输出 160 个二值特征，展开 4 个细槽后得到 100 赫兹的节奏事件网格，包含下拍点、四分与八分脉冲概率，以及拍号分母、中速与相对速度支持度。直接用局部动态贝叶斯网络容易出现长程层级跳变。论文的 3 阶段做法是先汇总全曲的中速预测，在 60 至 240 拍范围内选平均激活最高的档作为唯一锚点，锚点固定后局部速度围绕它变化；再联合解码八分脉冲位置与脉冲间隔得到局部速度。

最后在固定脉冲序列上联合解码拍位与拍号变化得到拍网格。脉冲动态规划在相邻间隔比上加对数比惩罚，抑制突变，同时用相对速度激活评价候选间隔相对全局参考的支持度。拍号解码允许不完全小节的局部变化与在小节线处的全局拍号变化，分母在解码中保持不变。下式是脉冲路径得分，其中脉冲观测、区间速度证据与间隔平滑三项相加，取前一脉冲间隔的最大值递推。

\[\begin{split}F^{(i)}(\delta)={}&h(b_{8}^{(i)})+W^{(i)}(\delta)\\ &+\max_{\delta^{\prime}\in\mathcal{D},\,\delta^{\prime}\leq i}\Bigl[F^{(i-\delta^{\prime})}(\delta^{\prime})-10\log^{2}\!\frac{\delta^{\prime}}{\delta}\Bigr],\end{split}\]

锚点选择与区间证据的计算目标是把全局参考与局部证据分开，公式分别对应汇总选档与在候选区间内累积速度支持度。

\[\hat{\ell}=\arg\max_{\ell:\,60\leq\tau_{\ell}\leq 240}\sum_{i=0}^{N_{\mathrm{raw}}-1}g_{\ell}^{(i)},\qquad\hat{g}=\tau_{\hat{\ell}}.\]

\[W\!\left(\hat{g},\operatorname{BPM}(\delta);r^{(i:i+\delta)}\right)=0.03\sum_{u=i}^{\min(i+\delta,N)-1}\max_{|\ell^{\prime}-\ell(\delta)|\leq 2}h(v_{\ell^{\prime}}^{(u)}).\]

**中速锚点 × 相对速度：** 中速锚点是整首录音汇总后选出的一个全局四分音符速度参考，相对速度是每一局部相对这个锚点的快慢比例；前者固定全曲的记谱层级，后者允许局部渐快渐慢，两者搭配让长距离速度判断不随鼓点有无而在 80 与 160 之间跳变。

代价是全曲只定一个锚点，适合单一主导速度的流行歌曲，不适合大范围变速或自由节奏；拍号清单也有限，三连音与更细划分只能近似。

### 旋律解码如何用音程依赖抑制跳八度

旋律模型工作在预测拍网格细分的十六分音符网格上，输入是编码器多层隐状态的加权混合，加上拍点标记与人声或全旋律提示嵌入，输出是 926 类分布，包含 128 乘 7 的音高与音程类别、24 种时值、休止与辅助槽。关键是不直接只给每个位置的绝对音高打分，而是给每个音高与音程桶组合打分，当前音的得分依赖前一个音。7 个桶按与前音的半音差划分，从负无穷到负 18、负 17 到负 12、负 11 到负 6、负 5 到 5、6 到 11、12 到 17、18 到正无穷。间隔超过 32 个网格位置则回退到中性桶，因为远距离音程参考意义变小。

动态规划状态保存上一个起音音高与其年龄，年龄上限 32，转移时用调整后概率的对数，持续段则在休止与最优时值之间取舍。论文还把休止逻辑值下调 1，使其概率相对缩小约 0.37 倍，从而减少碎休止。下式是起音转移得分，桶索引由前后音高差决定，远距离用中性桶。

\[M^{(i)}(p,0)=\max_{p^{\prime},a}\Bigl[M^{(i-1)}(p^{\prime},a)+\log\bar{\mu}^{(i)}_{p,b}\Bigr],\qquad b=\begin{cases}B(p-p^{\prime}),&a<31,\\ 3,&a\geq 31,\end{cases}\]

下图以上半激活与下半解码的对比说明了效果：旋律激活在正确八度下方常有微弱的混淆激活，若只按每位置边际取最大就容易上下跳，加入前音依赖后解码趋向保持音程连贯，读图时注意细网格是拍而粗线是下拍点。

> **看图路径：** 1. 对比每块上半的连续激活热度与下半离散解码条带的对应关系；2. 看细拍线与粗小节线如何在六块面板中保持同一位置；3. 观察旋律面板中低八度的微弱激活与最终解码如何取舍

[![原论文 Figure 2：Real Prober activations and structured decoding on RWC-MDB-P-2001 No.](https://arxiv.org/html/2610.05336v1/prober_example.svg)](https://arxiv.org/html/2610.05336v1/prober_example.svg)

*论文图 2。原论文 Figure 2:：“Real Prober activations and structured decoding on RWC-MDB-P-2001 No.”。*

从像素看，节奏面板的脉冲峰与解码拍线对齐，拍号面板长期为 4/4，和弦面板根音与色彩块在小节边界切换，旋律面板全旋律与人声激活分别显示而解码给出两条线，结构面板在第二小节末边界激活隆起并从副歌切到主歌，调面板从升 G 小调切到 C 小调。

**音高 × 音程桶：** 音高是当前起音的 MIDI 音高编号，音程桶是它相对前一个起音的半音差所属的七档区间；解码时当前音的得分同时看音高似然和它与前音构成的音程是否合理，因此能抑制把 C4-E4-G4 写成 C5-E4-G4 这类局部跳八度错误。

这种设计的代价是显式动态规划只在教师端运行，学生在推理时没有该规划，需要靠蒸馏保留连贯性，论文用混合率诊断检验保留程度。

### 统一事件语言如何同时记录时间与乐谱位置

自回归学生的词表把多种属性放在一个按时间排序的序列里。每组事件的字段顺序是先写相对偏移，再写绝对时间、拍号拍位、段落、调、和弦、旋律，不需更新的字段省略。绝对时间词给出拍点相对当前音频窗口起点的位置，连续锚点隐含局部速度变化。拍位词用小节内从零计数的八分音符位置表示，在 4/4 中 0 为下拍点，6 为第四拍，拍号词只在首拍与变化处出现。相对偏移以十六分音符计，同一时刻的属性共享一组事件无需额外偏移。

旋律起音由 MIDI 音高 0 至 127 加声部标记组成，0 为人声、1 为乐器，全旋律含两者，纯人声只含前者。音高后可跟时值词，来自 24 个固定模板，不写则取最短的一个十六分音符，休止由起音与时值隐含。和弦词编码根音、类别与转位，全词汇 361 个含无和弦，主小调替代词汇 25 个，当前和弦在起始、变化与下拍点处发出以锚定小节。调词编码 24 种主音调式，只在首拍与变化处发出。段落词在 23 类中选，同样只在窗口首拍与变化处发出。

推理对超 300 秒录音切分为最少个 300 秒窗口，相邻窗口至少重叠 100 秒，前一窗口的重叠事件经时间重定基后作为下一窗口前缀。

**绝对拍点时间 × 相对十六分音符偏移：** 绝对拍点时间是以 10 毫秒为一档的音频时间戳，用于定位拍点在波形中的位置，相对十六分音符偏移是事件组之间按十六分音符计的乐谱距离；前者保留演奏的弹性速度，后者保留可在小节线内对齐的记谱网格，两者结合才能把音频时间映射为可排版的乐谱。

这种表示的好处是时间与乐谱位置解耦，坏处是序列很长，训练按 300 秒与最多 5120 词截断，长曲需分窗拼接，前缀处理不当会引入边界误差。

### 合成数据与探测器训练实际做了什么

合成标签的符号来源需要先说清，不同任务的标签来自不同的 MIDI 信息，和声与旋律靠自举扩大，结构靠整理好的文本标记。下表列出每类任务的标签出处，读表时注意节拍类直接读 MIDI 事件，和声旋律需要模型标注。

| Task | Label source |
| --- | --- |
| Beat / tempo | Tick resolution and tempo events. |
| Meter / downbeat | Time-signature events and the metrical grid. |
| Melody | Bootstrapped from track-name labels. |
| Chord | Bootstrapped from expert-rule labels. |
| Key | Bootstrapped from expert-rule labels. |
| Structure | Curated MIDI text markers (SLMS) (Eldeeb & Malandro, 2025). |

上表说明拍与速度来自刻度与速度事件，拍号与下拍点来自拍号事件与节拍网格，旋律从曲名线索自举，和弦与调从专家规则种子自举，结构用整理过的 MIDI 文本标记。它的限制是音色简单、无演唱，迁移到真实人声需要实验证据，不能默认成立。探测器训练用部分标注掩码缺失目标，二值通道用二元交叉熵、旋律用类别交叉熵；非旋律头是两层感知机，旋律头是 6 层 RoFormer；各自适配自己的编码器副本，推理用半精度无测试增强。学生训练分 2 个阶段，先恒定学习率较长步数，再从最优检查点退火较短步数，目标是探测器序列整体前移 30 毫秒，无音高增强。

**帧级探测器 × 结构化解码：** 帧级探测器指先在每帧或每个十六分音符位置输出局部概率的声学模型，结构化解码指在其上用动态规划按顺序固定速度、拍点、调式、和弦与旋律的后处理；前者容忍标注时间偏差和缺失，后者把分散的局部判断拼成共享同一拍网格的完整序列。

**教师序列 × 自回归蒸馏：** 教师序列是探测器加结构化解码后得到的完整事件序列，自回归蒸馏是让学生模型逐词学习这些硬目标序列的训练方式；教师提供跨任务一致的伪标签，学生学会一次生成统一序列，推理时不再需要针对每个任务的动态规划。

容易误解的是合成音频好听与否不等于监督有效，论文用真实录音上的任务平均分来检验迁移，而不是用听感论证。

### 在哪些录音上测什么以及指标方向

评测覆盖 8 个集合：GTZAN、osu2017、GiantSteps、Chords1217、JAAH、HarmonixSet、RWC-Pop 与 Rock Corpus。拍与下拍点用 70 毫秒容差、去前 5 秒、按录音宏平均的 F1，越高越好。调评价用加权分，同音 1 分、五度 0.5、关系大小调 0.3、同主音 0.2，其余 0 分，含转调只取最长段。和弦用按参考时长加权的每轨主小调召回，附录另报根音、三音、七和弦等。结构在 HarmonixSet200 首测试集上用 0.2 秒帧网格、7 类功能标签，报准确率与 0.5 秒、3 秒边界 F1。

旋律用 50 毫秒起音容差、无需偏移、忽略八度的按录音宏平均音符 F1。基线包含 SheetSage1、madmom 与任务专用系统，拍与下拍点的专用基线为 Beat This!3 种子平均，调为 S-KEY，和弦为 ChordFormer，结构为 SongFormer。需要留意的不公平条件：madmom 和弦训练与 Chords1217 有重叠，ChordFormer 在该集用五折交叉验证而非单一固定模型，Hooktheory 与训练有重叠不算留出测试，旋律 F1 忽略八度因而不能反映八度连贯，需另看混合率。外部旋律基线另用 MuScriptor、YourMT3+ 与 Demucs 加 ROSVOT，均远低于 SheetSage1，论文未调参也未做时间与八度校正。

训练集总量 393980 首、22016.7 小时，学生伪标签 441094 段、28434.3 小时，复现训练需大算力且部分数据拿不到，因此多数人只能复现推理与评测。

### 加合成数据后哪些任务平均分变化

要回答的问题是简单渲染的合成音频能否提升真实录音理解，比较条件是同一探测器只换任务训练音频来源。结构平均为准确率与两个边界 F1 的未加权均值，旋律平均为 RWC 人声、全旋律与 Rock 人声 F1 的未加权均值。下表每格已是任务内平均，方向越高越好，表后解释迁移的限度。

| Task-training audio | Beat | Downbeat | Key | Chord | Structure | Melody |
| --- | --- | --- | --- | --- | --- | --- |
| Synthetic only | 79.52 | 76.64 | 75.66 | 76.99 | 56.76 | 54.77 |
| Real only | 85.43 | 82.06 | 75.69 | 77.65 | 74.88 | 74.68 |
| Real + synthetic | 87.60 | 85.77 | 75.46 | 79.22 | 76.46 | 74.69 |
| Improvement by synth. | +2.17 | +3.71 | -0.24 | +1.57 | +1.58 | +0.01 |

加入合成后拍、上下拍点、和弦、结构平均高于单来源，旋律平均几乎不变，调平均微降。合成单独训练在和弦与调上仍具竞争力，在 RWC 人声上仍有约一半以上的 F1，尽管其任务训练音频不含演唱，说明简化音色学到的轮廓可部分迁移，但起音与时值仍差。限制是该消融只在探测器上做，未证明对学生的增量相同，且结构合成单独绝对值明显偏低，说明曲式仍依赖真实标注。

主结果方面，论文报告单个自回归学生在 15 个集合指标对中有 12 对超过所列最强先前基线，在 10 对上超过探测器，含拍点与下拍点，但也有未胜出项，例如 GTZAN 拍点与部分和弦指标上专用系统或探测器更高，结构 0.5 秒边界 F1 低于 SongFormer，这些反例提醒不能把平均趋势推广到每 1 对。

### 速度连贯性比传统解码好多少

准确率之外的诊断看混合率，越低越好。速度混合率指一首录音内相对参考同时出现半速、等速、双速中至少两档且各占分类时长至少 5% 的比例，需至少 80% 参考时长可分类。下表在 135 首 osu2017 全曲与 2943 首 Hooktheory 公共子集上比较 Beat This!、探测器、用探测器激活跑 madmom 动态贝叶斯网络的对照与自回归蒸馏得到的学生，读表时注意仅探测器与 P-DBN 共享同一探测器激活、差异来自解码，AR 为自回归蒸馏得到的独立学生模型，不共享该激活直接解码。

|  | osu2017 | osu2017 | osu2017 | osu2017 | Hooktheory | Hooktheory | Hooktheory | Hooktheory |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
|  | Beat This! | Prober | P-DBN | AR | Beat This! | Prober | P-DBN | AR |
| Mixing ratio (%) | 20.74 | 2.96 | 3.70 | 1.48 | 17.30 | 0.34 | 1.36 | 0.51 |

论文报告速度上探测器与学生远低于 Beat This!，其中探测器优于同激活的传统解码，学生在 osu2017 上混合率最低。限制是 Hooktheory 与训练重叠、GTZAN 片段太短看不出长程跳变，且 F1 与一致性存在权衡：传统解码在 GTZAN 拍 F1 可高于探测器，不能只看一侧。下图左两列显示同一波形上传统解码在数拍内改变速度层级而探测器保持稳定，右两列显示按边际取最大引入的八度跳被带音程依赖的解码避免，读图时注意线粗细区分拍与下拍点，灰条为参考。

> **看图路径：** 1. 在左两列对比橙色与蓝色拍线在同一波形上的疏密变化；2. 在右两列对比灰色参考与橙色、蓝色预测的八度跳变位置；3. 注意横轴时间单位与纵轴速度或音高刻度的范围

[![原论文 Figure 3：Selected examples of structured decoding.](https://arxiv.org/html/2610.05336v1/structured_decoding_examples.svg)](https://arxiv.org/html/2610.05336v1/structured_decoding_examples.svg)

*论文图 3。原论文 Figure 3:：“Selected examples of structured decoding.”。*

上图是单样本机制说明，不能代替混合率统计。八度方面，完整解码在 333 段 RWC 全旋律公共段落上混合率低于边际解码，SheetSage1 明显更高，学生推理时无显式旋律规划但仍接近教师，说明蒸馏保留了大部分连贯性，但旋律参考八度本身不可靠因而只测一致性不测准确。

### 哪些音乐与记谱超出当前假设

论文明确列出简化假设。节奏假设音符落在十六分音符网格，三连音与更细分只能近似；全曲固定一个速度锚点，适合单一主导速度，不适合大变速；拍号清单有限。和声假设十二平均律，和弦词汇覆盖三和弦、挂留、六与七和弦，九与变化和弦无法表示。

风格上针对有稳拍的流行音乐，不适合多声部与弹性速度的古典乐，也不适合无节拍网格的自由节奏。转录实例也暴露边界：RWC 第一首吉他独奏因快于十六分音符的细分被简化，独奏后调性跟踪丢失部分转调过程，第二首把 C 小调报成关系大调降 E 大调虽调号相同但功能判断存疑，副歌被标成主歌。拼写规则不影响评测，因为评测只比鸣响音高或音级，不比书面升降号选择。

数据上训练与评测以西方调性流行音乐为主，可能对其他调律、节拍与记谱传统不友好，这不是准确率数字能掩盖的，选用时需另做验证。

### 复现第一步做什么与需要什么资源

先区分三件事：代码公开、权重可下载、系统可运行是不同条件。论文称模型权重与推理代码在 HuggingFace 地址公开可用，未验证当前可达性；训练数据部分私有或授权，基准音频按各自提供方条款分发，复现评测需自行获取。第一步应跑通论文预设的推理设置：在短片段上验证事件语法掩码与 ABC 导出，再测长曲分窗重叠拼接是否正常。下表是探测器训练集构成，读表时注意合成占大头而真实录音仅三万余首，复现训练若缺私有语料效果可能偏低。

| Training set | Songs | Audio hours | Audio type |
| --- | --- | --- | --- |
| LA / MALD (Lev, 2024; Jiang, 2025) | 355,095 | 19,269.7 | MIDI synthesis |
| SLMS (Eldeeb & Malandro, 2025) | 6,130 | 366.4 | MIDI synthesis |
| Expanded lead-sheet corpus (Donahue et al., 2022) | 32,243 | 2,349.1 | Recordings |
| HarmonixSet training set (Nieto et al., 2019) | 512 | 31.5 | Recordings |
| Total | 393,980 | 22,016.7 | Mixed |

上表说明洛杉矶 MIDI 与自动标签部分量最大，扩展主旋律语料与 HarmonixSet 训练集提供真实录音，小时数为音频时长而非标签覆盖时长。关键超参数与信息条件要保留：音频 24 千赫兹单声道，非旋律探测器 300 秒与 30 秒双摘录等权，旋律解码温度 1 且休止降 1，学生目标前移 30 毫秒，推理窗口 300 秒、GTZAN 用 30 秒、旋律 30 秒半重叠。未对该地址当前可达性做独立验证，暂时不可达也不代表技术缺陷。

### 什么时候值得尝试以及还缺哪项验证

当任务是流行歌曲的稳拍转录，且需要同时输出拍点、调、和弦、旋律与段落的统一可编辑谱面时，值得尝试文中的学生模型，因为它 1 次生成即得兼容网格，免去多系统对齐。复现第一步是按预设推理跑通短曲与长曲分窗，核对拍网格、调变化与和弦低音是否符合词汇。还缺的验证包括：在目标风格与录音条件上的留出测试，而非与训练重叠的 Hooktheory；在完整和弦词汇与转位要求下的表现，而非仅主小调召回。

在含大变速、三连音、九和弦与非平均律音乐上的失败率与可听影响；以及推理延迟、内存与长曲拼接稳定性的实测。缺这些不等于方法有错，只是证据尚不支持把结论推广到这些范围。未来的增量可能来自更高质量的符号分析与生成，以提供更多样合成监督，但这仍是待验证的方向，不能当作已证实的提升。

<details>
<summary>📎 论文与评分元数据</summary>

排名：前25% | 文档类型：模型报告 | [arXiv 原文](https://arxiv.org/abs/2610.05336v1)

</details>

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。

- 评分规则：type-aware-v1

- 评分模型：muse-spark-1.3-contributor

- 评分请求协议：openai_responses

---

[← 返回 2026-10-11 语音/音乐/音频论文速递](/audio-paper-digest-blog/posts/2026-10-11/)
