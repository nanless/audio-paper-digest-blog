---
title: "SonicWorld: Source-Centric Latent Dynamics for Spatial Audio Reasoning"
date: 2026-10-15
draft: false
tags: [音频问答, 声源定位, 状态空间模型, 基准测试]
categories: [论文速递]
description: "针对重叠与运动下指定声源在指定时刻位置难定位的问题，SonicWorld 用持续声源状态组织声学证据，在 Sonic-Bench 上把单声源方向准确率从 43.75% 提升到 50.00%，代价是需要完整片段离线推理与两阶段微调。"
hiddenInHomeList: true
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_arxiv_id: "2610.17131"
paper_digest_workbench_contract: "researcher-workbench-v1"
paper_digest_reader_title: "把重叠语音对准到声源：SonicWorld 如何做空间问答"
paper_digest_original_title: "SonicWorld: Source-Centric Latent Dynamics for Spatial Audio Reasoning"
paper_digest_arxiv_version: 1
paper_digest_arxiv_versioned_id: "2610.17131v1"
paper_digest_arxiv_abs_url: "https://arxiv.org/abs/2610.17131v1"
paper_digest_arxiv_pdf_url: "https://arxiv.org/pdf/2610.17131v1.pdf"
paper_digest_primary_task: "音频问答"
paper_digest_tags_contract: "paper-tag-flat-tags-v2"
paper_digest_tags_selection_contract: "paper-tag-selection-v2"
paper_digest_tags_registry_version: "paper-tag-catalog-v2"
paper_digest_tags_registry_sha256: "cdef54423b5dfc00a1d017ef6639446d2ecd1d9c1acf71c8eb4f6219a46b7ba8"
paper_digest_tags_concepts: [{"facet":"task","id":"task.audio-question-answering","label":"音频问答"},{"facet":"task","id":"task.localization","label":"声源定位"},{"facet":"method","id":"method.state-space","label":"状态空间模型"},{"facet":"artifact","id":"artifact.benchmark","label":"基准测试"}]
paper_digest_primary_method: "状态空间模型"
paper_digest_score: 8.0
paper_digest_rank_bucket: "前25%"
paper_digest_document_type: "方法研究"
paper_digest_one_sentence: "针对重叠与运动下指定声源在指定时刻位置难定位的问题，SonicWorld 用持续声源状态组织声学证据，在 Sonic-Bench 上把单声源方向准确率从 43.75% 提升到 50.00%，代价是需要完整片段离线推理与两阶段微调。"
paper_digest_authors: [{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Chenlong Wei"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Hanling Wang"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Mingjin Lou"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Yufan Shi"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Yandong Sun"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Sheldon Yu"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Xiaohui Zhu"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Xiaobo Jin"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Yiwei Wang"}]
paper_digest_abstract_sha256: "58f24966b4c580de709d2e8c5398d91ec4c50eca14f262a83804bc37bab12e25"
paper_digest_sidecars: {"citation.bib":{"sha256":"f703163737193bbfc1bf0ffc7d26997261d3cca6fbb39f2f63b4ac5ac9e88708","url":"/audio-paper-digest-blog/data/papers/2026-10-15/2610-17131/citation.bib"},"citation.json":{"sha256":"2cc12608b1c16259650988e224a3365483208157f03f73918b692b01850e617a","url":"/audio-paper-digest-blog/data/papers/2026-10-15/2610-17131/citation.json"},"citation.ris":{"sha256":"2027014b3e2aa8e8fe6e9a235d1c9a874b22f9da1c66b6da6ba6a68c744ea793","url":"/audio-paper-digest-blog/data/papers/2026-10-15/2610-17131/citation.ris"},"rethink-context.json":{"contract":"paper-research-context-v2","sha256":"758582253eda4c124896d2c286324ff35732800954c5891b546f2e8d6a3b6a45","url":"/audio-paper-digest-blog/data/papers/2026-10-15/2610-17131/rethink-context.json"}}
paper_digest_api_reader_contract: "beginner-researcher-v3"
paper_digest_api_reader_article_sha256: "c42941048724a72082a385ea9b8035c7e82a6debac06bcc4b5c83254b8461773"
paper_digest_api_reader_plan_sha256: "ca5f37c5a156b60c4951ad9f935dc0174b3f8ef48b809b13125c9fe85cf1aa5c"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings-v4"
paper_digest_api_reader_source_bindings_sha256: "a2a7e41a76eed18dde1f7277e180a1cfb3a5dd3120acccf32ddae9db57b9689a"
paper_digest_api_reader_source_table_count: 4
paper_digest_api_reader_source_formula_count: 3
paper_digest_api_reader_structured_artifacts_sha256: "25c135bfed56ddc3aa07114b8d130ae0fa82ce747ce0fb7a8f1d322dcbc486a3"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity-v1"
paper_digest_api_reader_author_identity_sha256: "58af0b09f6a5920267be65cad2c9ee903f772b524f3642c2fac7d6723d7d6ad7"
paper_digest_api_reader_author_count: 9
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity-v1"
paper_digest_api_reader_resource_identity_sha256: "8e96093f429e61817133ef8adde54c17e5e228353c1e2f3c27c03576c0f0ee79"
paper_digest_api_reader_resource_count: 1
paper_digest_api_reader_figure_persistence: "ephemeral-no-persisted-figure-assets-v1"
paper_digest_api_reader_decision_projection: "api-reader-decision-projection-v2"
---

# 📄 把重叠语音对准到声源：SonicWorld 如何做空间问答

> 英文题目：*[SonicWorld: Source-Centric Latent Dynamics for Spatial Audio Reasoning](https://arxiv.org/abs/2610.17131v1)*

<!--paper-tag-hierarchy-v1:start-->

**研究分类**

- **研究任务**：[音频理解](/audio-paper-digest-blog/papers/?concept=task.audio-understanding) → [音频问答](/audio-paper-digest-blog/papers/?concept=task.audio-question-answering)；[声源定位](/audio-paper-digest-blog/papers/?concept=task.localization)
- **研究方法**：[状态空间模型](/audio-paper-digest-blog/papers/?concept=method.state-space)
- **研究产物**：[基准测试](/audio-paper-digest-blog/papers/?concept=artifact.benchmark)

<!--paper-tag-hierarchy-v1:end-->

> 评分：**8.0/10** | 创新 1.5/2 | 技术严谨 1.2/1.5 | 实验充分 1.2/1.5 | 清晰度 0.8/1 | 影响力 1/1.5 | 开源 1/1.5 | 可复现 0.3/0.5 | 工程/实践 1/1.5


## 👥 作者与机构

- Chenlong Wei：机构信息未在 arXiv HTML 中可靠披露
- Hanling Wang：机构信息未在 arXiv HTML 中可靠披露
- Mingjin Lou：机构信息未在 arXiv HTML 中可靠披露
- Yufan Shi：机构信息未在 arXiv HTML 中可靠披露
- Yandong Sun：机构信息未在 arXiv HTML 中可靠披露
- Sheldon Yu：机构信息未在 arXiv HTML 中可靠披露
- Xiaohui Zhu：机构信息未在 arXiv HTML 中可靠披露
- Xiaobo Jin：机构信息未在 arXiv HTML 中可靠披露
- Yiwei Wang：机构信息未在 arXiv HTML 中可靠披露

## 📌 核心摘要

动态空间音频推理要求模型根据10秒一阶Ambisonics录音和指明目标说话人与时刻或区间的提问，回答该源在固定接收者坐标系下的方向、方位角、仰角、距离或水平净位移方向，重叠语音与声源移动使声学证据与目标身份的对应变得困难。SonicWorld先抽取物理强度与相干特征、学习型波形交互特征和冻结BEATs语义概要，分别提供几何线索、细粒度声学细节与内容身份依据。这些特征随后送入2个声源槽加1个背景槽的递推绑定与双向精修模块，通过学习型转移与循环更新维持随时间连续的声源状态序列，从而把混合观测持续归属到固定身份槽。空间投影器再把先验、观测、循环与精修状态及方向锚点压缩为局部token与声源概要token，与原生音频token一同送入Qwen2.5-Omni-7B回答问题，与直接映射整段音频的已有方法不同，推理基于显式持续声源轨迹。相对同样使用Qwen2.5-Omni-7B的Spatial-Omni，SonicWorld在Sonic-Bench测试集把总体方向准确率从31.98%提高到34.69%，方位角平均绝对误差从57.22度降到48.01度。在Spatial LibriSpeech零样本单源定位中，SonicWorld相对Spatial-Omni把方向准确率从27.14%提高到73.98%，方位角平均绝对误差从70.74度降到19.29度。结论适用于模拟室内、固定接收者、1到2个语音源的离线问答，真实环境、移动接收者与稠密多源尚未验证。原文未披露训练、推理或部署成本。

## 🔗 开源与复现资源

- 代码相关资源：<https://anonymous.4open.science/r/2C38/> — 链接可访问（HTTP 200）

可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 动态空间音频推理要解决什么难事

想象你戴着麦克风站在房间中央，两个人边走边说话，录音机录下的是混在一起的 4 通道信号。研究生的第一个直觉往往是先做声源定位，但这篇论文的问题更具体：给定整段 10 秒的 1 阶 Ambisonics 录音，再给定一个指名声源与一个时刻或区间，模型要回答该目标在该时刻的方向、方位角、仰角、距离，或在过去 1 秒内朝哪个方向移动。输入是波形加文字问题，输出是类别标签或数值，必须保留的信息是声源身份与时间上下文。难点在于重叠语音让每 1 帧的线索都混杂，运动又让位置逐帧变化，逐帧独立估计很容易在查询时刻把干扰源当成目标。

### 已有路线为什么留下了身份与时间的缺口

声音事件定位与检测路线同时识别事件并估计到达方向，后来扩展到运动跟踪、同类重叠源定位与距离估计，声场模拟器与真实多通道数据集提供了训练环境。另一条路线是音频语言模型与 Omni 模型，把预训练音频编码器接到大语言模型，BAT 用双耳特征，基于 1 阶 Ambisonics 的方法用强度向量，JAEGER 学习神经强度向量，Spatial-Omni 增加并行空间分支。

在相同输入与问答目标下比较，这些方法都让语言模型能看到空间线索，但原文指出它们多是逐帧或与声源无关地使用线索，没有跨时间维持属于某个声源的持续状态，因此在需要按目标嗓音与查询时间恢复状态时容易混淆。本文的差异不是换更大的语言模型，而是增加显式的声源级时间状态。

### Sonic-Bench 如何把问题变成可评测的问答

理解评测先看任务构造。论文用 Habitat-Sim 在室内网格中布置固定接收器与静止或沿可导航路径运动的声源，语音来自 Mini LibriSpeech，双声源片段配 1 男 1 女并指定其一为目标。每段 10 秒对应 121 个几何采样点，保留位置、方位角、仰角、距离与语音活动。每个片段选两个有语音活动的查询时刻，每个时刻生成 5 个问题：位置方向分 8 个扇区，方位角、仰角、距离给数值，移动方向看区间 1 秒内水平净位移分八方向或静止。下图把从场景到混合再到问答的链路画了出来，时间对齐的轨迹是答案的直接依据。

> **看图路径：** 1. 先看左侧俯视场景中两条运动轨迹与固定接收器的相对位置；2. 再看中间混合形成四通道与下方两条时间对齐轨迹的对应关系；3. 最后看右侧同一目标在时刻点与时间区间两类提问的答案形式

[![原论文 Figure 1：Task overview of Sonic-Bench.](https://arxiv.org/html/2610.17131v1/sonic_data_pipeline_compact.png)](https://arxiv.org/html/2610.17131v1/sonic_data_pipeline_compact.png)

*论文图 1。原论文 Figure 1:：“Task overview of Sonic-Bench. Given an FOA recording, the task is to infer a specified source’s spatial attributes at a queried time or its movement direction over a queried…”。*

左侧是俯视房间中两条从 0 秒到 10 秒的运动轨迹与下方固定接收器，中间上方是两路干语音各自与房间脉冲响应卷积再相加形成 W、Y、Z、X 4 通道，下方是两条随时间变化的路径并标出 t1 与 t2，右侧是针对女性目标在时刻点的方向提问与在区间内的移动提问示例。这种设计保证问题都指向同一目标的不同时间，模型不能靠整段平均蒙对。

### SonicWorld 的整体流程是什么

方法可以看成两大段。第一段是声源状态推断：把 4 通道波形变成 3 种证据，再用循环槽模型把它们按声源组织成随时间演化的状态序列，并解码出方向与距离。第二段是空间语言建模：把状态序列经投影器变成语言模型能读的空间 token，与原生的 W 通道音频 token、问题 token 一起送入 Omni 大语言模型生成答案。训练上先预训练状态模型，再冻结它分 2 阶段训练投影器与语言模型的低秩适配参数。下图展示了 3 路特征汇合、循环估计与双向精炼、投影与问答损失的位置。

> **看图路径：** 1. 沿左侧三路特征汇合到循环声源状态的主路径看数据流向；2. 注意下方掩蔽恢复与几何预测如何为状态提供监督；3. 再看右侧空间 token 与 W 通道音频 token 一起进入语言模型的位置

[![原论文 Figure 2：SonicWorld architecture.](https://arxiv.org/html/2610.17131v1/final_architecture_rich.png)](https://arxiv.org/html/2610.17131v1/final_architecture_rich.png)

*论文图 2。原论文 Figure 2:：“SonicWorld architecture. Physical, neural, and frozen-BEATs semantic evidence are concatenated before recurrent source binding.”。*

左侧声学特征提取把物理特征、跨通道相乘特征与 BEATs 语义上下文拼接成每步特征 token，中间循环部分用两个声源槽加一个背景槽随时间更新并经双向循环精炼，下方掩蔽恢复与几何预测提供监督，右侧投影器输出时间 token 与声源 token，与文本问题 token、音频 token 一起进入带低秩适配的 Omni 语言模型，输出方向、距离与运动答案。

### 三路声学证据各自算什么

对刚入门的读者，先把输入变换说清楚。4 通道顺序为 W、Y、Z、X，采样率 16 kHz。物理分支对短时频谱算 W 与每个指向通道的互谱，取实部与虚部分别除以 W 通道功率并截断，得到主动与无功强度，再在相邻 7 帧平均基础上算通道相干性，经 64 带 Mel 滤波与重采样到 121 步，用 2 维卷积得到每步 64 个物理 token，携带归一化强度方向与相干性给出的可靠性。神经分支对每个通道做共享 1 维卷积编码，把 W 编码分别与 X、Y、Z 编码逐元素相乘后拼接映射，每步得到一个神经 token，捕捉学习到的通道交互。

语义分支冻结 BEATs 从 W 通道抽取片段特征，投影后用一个学习查询做注意力池化，得到整段共享的一个语义 token，告诉模型内容身份。三者拼接成每步 66 个 token。

物理分支的执行顺序是先分帧再算特征。短时傅里叶变换取 400 点，汉恩窗长 400 个采样，帧移 160 个采样。对 X、Y、Z 每个指向通道，都用同一时频点的 W 通道频谱与其做共轭相乘得到互谱。互谱实部与虚部分别除以 W 通道功率，截断到负十到十之间，分别作为主动强度与无功强度。相干性在相邻 7 个分析帧上做平均，用平均后互谱幅度除以 2 通道功率平均的开方，计算前后都截断到零到一之间。

随后固定 Mel 滤波器把 4 个通道的对数幅度谱，以及主动强度、无功强度、相干性各 3 个分量，一共映射为 13 个特征通道，重采样到 121 步。卷积网络按十三到九十六到一百九十二再到一百九十二逐层加宽，核都是 3 乘 3，步长与填充保证时频尺寸不变，前两层用分组归一化与激活，每步输出 64 个宽度为一百九十二的物理 token。

神经分支与语义分支各管一类信息。神经分支先用同一套 1 维卷积分别编码 4 个波形通道，再把 W 编码与 X、Y、Z 编码逐元素相乘，把 3 组相乘结果拼成 576 维，经过两层映射压到 192 维，再插值到 121 步并加上分支标记，每步得到一个神经 token，记录波形层面学到的通道组合。语义分支只看 W 通道，冻结的 BEATs 先给出片段特征，经归一化与线性投影从 768 维转到 192 维，再用一个学习查询做四头注意力池化，把整段片段压成一个语义 token。这个语义 token 在各时间步共享，与每步的 64 个物理 token 和一个神经 token 拼在一起，形成每步 66 乘 192 的输入，供后续按声源归位。

**一阶 Ambisonics × 强度向量 × 物理分支：** 一阶 Ambisonics 是四通道录音格式，包含全指向 W 与三个指向通道；强度向量指 W 与指向通道互谱的实部与虚部经归一化后得到的方向线索；物理分支指用短时傅里叶变换、Mel 滤波与卷积网络把对数幅度、主动与无功强度、相干性变成每步多个物理 token 的处理通路，三者分工是格式提供原始声场，强度向量给出有物理依据的方向，可靠性由相干性补充，组合后语言模型之前就有了按频带区分的几何证据。

**神经声学特征 × 语义 token × BEATs：** 神经声学特征指对每个通道做一维卷积编码后再做 W 与 X、Y、Z 逐元素相乘并映射得到的单 token，它学习通道间交互；语义 token 指用冻结的 BEATs 从 W 通道抽取片段特征再经注意力池化得到的整段内容摘要；BEATs 是提供该摘要的预训练音频编码器，搭配理由是神经特征补物理建模未覆盖的细微交互，语义 token 告诉模型谁在说话，组合后每步输入同时有几何与内容线索，便于把观测分给不同声源。

### 循环槽如何把观测分给不同声源

有了每步特征，模型要决定哪部分能量属于哪个声源。论文设两个声源槽加一个背景槽，每个槽有 256 维状态。当前步先用共享两层前馈网络算状态变化，经残差与层归一化得到先验，这一步对应运动预测。然后把先验映射为查询、特征 token 映射为键与值，算缩放点积分数，先在槽维度做 softmax，再在 token 维度归一化，得到每个槽对每个 token 的权重，加权求和形成观测。最后用门控循环单元把观测与先验融合，经层归一化得到新状态并传到下一步。背景槽的作用是吸收混响与噪声，避免它们污染声源槽。

\[\bar{z}_{t}^{k}=\operatorname{LayerNorm}\left(z_{t-1}^{k}+f_{\mathrm{trans}}(z_{t-1}^{k})\right).\]

该式中 z 是上一时刻状态，ftrans 是两层前馈网络，LayerNorm 稳定分布，输出是读入当前观测前的先验。直观例子是：双声源重叠时，若某频带强度指向左侧且相干性高，左侧声源槽的查询与之匹配度高，就会分到更大权重，而背景槽分走弥散成分。

### 精炼与几何解码如何得到位置

循环得到的状态还比较抖，论文用共享单层双向循环网络看完整序列，前后向输出拼接投影成上下文，再用门控决定加入多少，得到精炼状态。4 个线性头从精炼状态预测单位方向、距离对数、声源存在概率与位置对数方差，距离取指数后与方向相乘得到以接收器为中心的 3 维位置。训练时一个匈牙利匹配把预测槽序列与真值轨迹配对，匹配后监督方向、距离、存在性与带不确定性的位置损失，同时监督由转移先验直接解码的方向与距离，迫使先验本身就有几何意义。

\[\hat{p}_{t}=\hat{r}_{t}\hat{u}_{t}\in\mathbb{R}^{3}.\]

该式中 rhat 是预测距离，uhat 是预测单位方向，相乘即得位置向量。位置监督用高斯负对数似然形式，方差大时允许误差大但会受正则惩罚。

**声源槽 × 转移预测 × 循环更新：** 声源槽指为每个假设声源维持的一个 256 维状态向量，另加一个背景槽吸收非目标能量；转移预测指在读入当前帧前用共享前馈网络从上一状态算出先验；循环更新指用注意力把当前声学 token 加权汇总成观测，再用门控循环单元把先验与观测融合成新状态，三者组合使模型逐帧保持谁是谁，即使某时刻语音重叠或静音，状态仍按学到的运动延续。

**空间投影器 × 局部 token × 声源摘要 token：** 空间投影器指把每声源每步的先验、观测、循环状态、精炼状态及解码几何拼成 1295 维再映射到语言嵌入宽度的模块；局部 token 指把连续四帧压缩得到的时间局部表示，保留何时转向等细节；声源摘要 token 指用学习查询对整段做注意力得到的整源表示，组合后语言模型同时看到细粒度时间证据与整段身份证据，才能回答指定时刻与指定区间的提问。

### 掩蔽训练与两阶段语言微调如何组织

状态预训练每段生成 4 条掩蔽特征序列，区间长 5 到 10 步，起止留 6 步边界，区间内 token 换成学习到的掩蔽嵌入，循环滤波器沿正反两方向处理，在掩蔽中心前用共享头预测方向、距离对数与存在性并与中心标注匹配求损失，迫使模型从上下文恢复几何。预训练 25 轮后冻结状态模型。第 1 阶段只训投影器与对齐头，语言模型冻结；第二阶段再训投影器与注意力层的低秩适配参数，秩 16，缩放 32，丢弃率 0.05，原语言模型权重与音频编码器始终冻结。2 阶段都优化答案交叉熵加几何对齐损失，对齐头从投影器帧特征预测方向与距离，使其不偏离冻结状态模型的几何。

\[\mathcal{L}_{\mathrm{LLM}}=\mathcal{L}_{\mathrm{QA}}+\lambda_{P}\mathcal{L}_{\mathrm{align}},\]

该式中 QA 项是答案 token 的交叉熵，align 项是投影器几何与状态模型几何的一致性约束，系数第 1 个阶段 0.5，第二阶段 0.25。

**双向精炼 × 掩蔽状态预测 × 轨迹监督：** 轨迹监督指用匈牙利匹配把预测槽与真值轨迹配对后，对方向、距离对数、存在性与位置不确定性算损失；双向精炼指用双向循环网络融合过去与未来状态再门控加入当前状态；掩蔽状态预测指随机遮住一段特征后要求从上下文恢复中心几何，搭配意义是轨迹监督把状态锚定到几何，双向信息平滑抖动，掩蔽任务迫使模型学会在缺失时靠运动连续性补全。

### 数据划分与评测条件如何保证公平

Sonic-Bench 按场景划分，400 个场景的 2400 段做训练，80 个场景的 480 段做测试，单声源与双声源、目标动静与干扰动静 6 种组合均衡，每组合在 8 个方位扇区均衡。方向与移动方向用标签准确率，方位角、仰角用角度平均绝对误差，方位角取最短环绕距离，距离用米为单位的平均绝对误差，只对解析出有限数值的回答计入。外部零样本评测取 SpatialSceneQA 与 Spatial LibriSpeech 中不少于 10 秒的测试子集，只用前 10 秒，不再训练，直接把 Sonic-Bench 上训好的检查点拿去提问，通道顺序按原文映射统一，基线与 SonicWorld 在相同主干与相同问题模板下比较。作者资源当前可用，链接为匿名开放科学地址，可获取代码。

### 在 Sonic-Bench 上定位改进有多大

主结果比较相同 Qwen2.5-Omni-7B 主干下持续声源状态是否改善定位。比较包含通用模型与 BAT、传统强度向量、神经强度向量以及 Spatial-Omni，方向准确率越高越好，方位角、仰角与距离误差越低越好。

|  | Single source | Single source | Single source | Single source | Single source | Dual source | Dual source | Dual source | Dual source | Dual source |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Model | Dir.↑ | Az.↓ | El.↓ | Dist.↓ | Mot.↑ | Dir.↑ | Az.↓ | El.↓ | Dist.↓ | Mot.↑ |
| Closed-source models |  |  |  |  |  |  |  |  |  |  |
| Gemini 3 Flash | 12.81 | 88.55 | 4.40 | 1.11 | 7.81 | 15.47 | 88.23 | 4.49 | 2.71 | 8.28 |
| Gemini 3.1 Pro | 9.06 | 90.87 | 15.78 | 1.86 | 12.19 | 14.53 | 90.32 | 28.88 | 2.03 | 14.38 |
| Open-source models |  |  |  |  |  |  |  |  |  |  |
| Qwen2.5-Omni-7B | 12.50 | 91.18 | 84.91 | 98.83 | 51.88 | 12.66 | 88.33 | 83.58 | 34.30 | 48.59 |
| InternOmni | 12.81 | 93.72 | 22.65 | 40.58 | 8.13 | 12.34 | 92.90 | 32.51 | 43.16 | 5.94 |
| Phi-4-MM-5.6B | 13.44 | 81.21 | 3.29 | 1.93 | 6.25 | 12.66 | 79.90 | 4.13 | 2.26 | 5.31 |
| Audio Flamingo 3 | 14.06 | 85.62 | 9.60 | 2.41 | 7.81 | 12.34 | 88.80 | 17.32 | 3.12 | 5.16 |
| Kimi-Audio-7B-Instruct | 12.50 | 91.78 | 1.58 | 2.20 | 35.31 | 11.72 | 92.23 | 3.89 | 1.54 | 23.75 |
| Spatial baselines |  |  |  |  |  |  |  |  |  |  |
| BAT | 8.75 | 87.51 | 0.94 | 0.68 | 51.25 | 11.09 | 90.34 | 0.95 | 0.64 | 52.66 |
| Classical-IV | 29.38 | 47.92 | 1.14 | 0.58 | 51.56 | 20.94 | 66.06 | 1.08 | 0.62 | 52.66 |
| Neural-IV | 10.63 | 84.00 | 0.99 | 0.59 | 50.31 | 11.88 | 87.83 | 1.21 | 0.67 | 52.34 |
| Spatial-Omni | 43.75 | 46.87 | 1.57 | 1.36 | 49.06 | 26.09 | 62.40 | 1.12 | 3.08 | 50.94 |
| SonicWorld | 50.00 | 30.85 | 0.91 | 0.56 | 52.50 | 27.03 | 56.59 | 0.93 | 0.60 | 53.91 |

上表覆盖单声源与双声源的方向、方位角、仰角、距离与运动方向。SonicWorld 单声源方向从 43.75% 提升到 50.00%，双声源从 26.09% 提升到 27.03%，方位角误差分别从 46.87°降到 30.85°、从 62.40°降到 56.59°，双声源距离误差为 0.60 m。重叠下增益变小，水平精确定位仍受干扰影响。

下图展示单个运动声源的解码轨迹与真值对照，可以看到前向坐标从正变负的整体走向。

> **看图路径：** 1. 对比左侧俯视图中实线解码路径与虚线真值的走向；2. 观察右侧前向坐标从正到负、左向坐标上升的趋势是否一致；3. 注意距离曲线后段偏离，理解方向对而距离仍有误差的现象

[![原论文 Figure E.3：Figure E.3: Decoded states of a single moving source.](https://arxiv.org/html/2610.17131v1/case_encoder_000042.png)](https://arxiv.org/html/2610.17131v1/case_encoder_000042.png)

*论文图 6。原论文 Figure E.3:：“Figure E.3: Decoded states of a single moving source.”。*

该图左侧为俯视路径，实线是编码器解码结果，虚线是真值，圆圈与三角标记起点与终点；右侧三行分别为前向坐标、左向坐标与距离随时间变化。实线跟随虚线趋势但存在波动，平均位移误差为 0.342 m，说明状态保留了运动走向，后段距离存在低估。

### 零样本迁移到外部数据是否还成立

零样本评测检验在 Sonic-Bench 上训练的模型能否迁移到静态声源定位。评测保留 10 秒以上录音的前 10 秒，SpatialSceneQA 测方位角与仰角，Spatial LibriSpeech 测方向、方位角、仰角与距离。

|  | SpatialSceneQA | SpatialSceneQA | SLS | SLS | SLS | SLS |
| --- | --- | --- | --- | --- | --- | --- |
| Model | Az.↓ | El.↓ | Dir.↑ | Az.↓ | El.↓ | Dist.↓ |
| Open-source models |  |  |  |  |  |  |
| Qwen2.5-Omni-7B | 60.47 | 80.14 | 12.69 | 90.26 | 88.47 | 55.04 |
| InternOmni | 80.54 | 78.05 | 12.38 | 89.69 | 57.59 | 98.83 |
| Phi-4-MM-5.6B | 61.86 | 18.31 | 12.61 | 89.43 | 7.08 | 1.99 |
| Audio Flamingo 3 | 132.66 | 24.92 | 11.87 | 89.92 | 28.08 | 33.40 |
| Kimi-Audio-7B-Instruct | 55.37 | 35.44 | 11.63 | 90.74 | 9.41 | 3.90 |
| Spatial baselines |  |  |  |  |  |  |
| BAT | 125.37 | 20.51 | 11.85 | 90.75 | 7.07 | 0.84 |
| Classical-IV | 33.56 | 19.17 | 14.49 | 75.53 | 7.70 | 0.89 |
| Neural-IV | 88.33 | 18.49 | 12.71 | 89.38 | 7.74 | 0.78 |
| Spatial-Omni | 108.28 | 22.84 | 27.14 | 70.74 | 16.64 | 5.02 |
| SonicWorld | 21.35 | 20.51 | 73.98 | 19.29 | 7.09 | 0.89 |

上表汇总两个外部数据集的结果。在 Spatial LibriSpeech 上 SonicWorld 方向准确率为 73.98%，方位角误差为 19.29°，相比 Spatial-Omni 的 27.14% 与 70.74°有明显改善；在 SpatialSceneQA 上方位角误差也从 108.28°降到 21.35°。迁移结论只在静态单声源、10 秒截断与相同提问模板下成立，对运动外部场景与高度距离的改善有限。

### 哪些模块与监督真正重要

消融比较相同主干与相同测试划分下各部分的作用，只开关物理、神经、语义与双向精炼，或去掉转移、监督、掩蔽与持续槽。方向与容差越高越好，角度与距离误差越低越好。

| Physical | Neural | BEATs | BiGRU | Dir.↑ | Mot.↑ | Az20↑ | Az.↓ | El.↓ | Dist.↓ |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 4 | 8 | 8 | 4 | 28.33 | 52.40 | 25.73 | 55.68 | 0.97 | 0.62 |
| 4 | 4 | 8 | 4 | 28.65 | 52.19 | 26.88 | 55.59 | 0.99 | 0.62 |
| 4 | 4 | 4 | 8 | 32.19 | 51.98 | 33.13 | 48.11 | 0.96 | 0.63 |
| 4 | 4 | 4 | 4 | 34.69 | 53.44 | 34.90 | 48.01 | 0.92 | 0.59 |

上表显示完整模型在六项指标上最好。去掉双向精炼后方向为 32.19%，完整模型为 34.69%，方位角误差为 48.11°与 48.01°，距离误差为 0.63 m 与 0.59 m；物理缺失与语义缺失时方位角误差分别高 7.67°和 7.58°。去掉先验监督与掩蔽损失的影响更大，说明几何监督与上下文补全对保持声源身份很关键。

下面把双向精炼缺失时的成对数字与物理语义缺失的增量放在一起，能看出方位角接近但方向与距离仍有差距。

| 对照内容 | 方向准确率 | 方位角误差 | 距离误差 | 方位角增量 | Az20 降量 |
| --- | --- | --- | --- | --- | --- |
| 完整模型与消融版本 | 32.19% vs. 34.69% | 48.11° vs. 48.01° | 0.63 m vs. 0.59 m | 7.67° and 7.58° | 9.17 and 8.02 points |

这组对照说明双向精炼主要补足方向判断与距离稳定，方位角本身差距很小，因此在只需要粗略朝向时可以省去该模块，而要同时保证方向与距离时仍需保留完整模型，物理与语义缺失的影响则集中在方位角与容差上。

### 结论在什么边界内才成立

论文明确列出三点边界。第一是全仿真室内，声源限于语音，路径长 2 到 5 米，源距 1.5 到 4 米，双源至多两路，更密重叠与真实录音未验证。第二是接收器固定，朝向不变，没有佩戴者转动或机器人移动带来的自中心变化。第三是离线推理，双向精炼要看完整 10 秒，不适合流式交互，因果化是未来工作。容易误解的是把零样本方位增益当成通用空间理解提升，实际上外部评测多为静态单源，运动推理的迁移未被证明。

把方向分类准确率高当成角度误差一定小也不对，双声源下分类仅 27.03% 而方位角仍有 56.59 度误差。训练成本为 3 块 RTX 4090 加 6 块 RTX 3090，状态预训练 30000 步，投影器与低秩适配另计，复现需考虑该预算。

### 复现第一步要做什么

复现先按场景划分重建数据管线。用 Mini LibriSpeech 中至少 10 秒的话语转 16 kHz 单声道并随机裁 10 秒，双源配 1 男 1 女；接收器高 1.5 米，声源高 1.55 米，路径重采样保证匀速，位移达 0.35 米更新房间脉冲响应，响应截 0.25 秒并在末 0.025 秒淡出，分段卷积后加总并做统一增益防削波，输出 4 通道 PCM 与 N3D 元数据。几何以接收器为中心，前为 x，左为 y，上为 z，方位角左正，仰角上正，12 Hz 标注 121 帧，语音活动按约 0.25 秒窗能量大于负 50 分贝与段内最大低 25 分贝的较大者判定。模型侧用 400 点短时傅里叶变换、160 跳、64 带 Mel，每段 121 步，两源一背景槽，冻结 BEATs，先训状态再训投影器与低秩适配，问题模板与答案格式严格按附录，否则解析失败会计入误差。

### 什么时候值得尝试与还缺什么验证

当任务是指名声源在指定时刻的位置或指定区间内的移动，且录音是固定麦克风的多通道、有重叠与运动时，值得尝试持续声源状态加投影到语言模型的路线，因为它在同主干下一致改善方向与方位角，并在外部静态单源上保留方位优势。复现第一步是跑通仿真渲染与问答生成，确认场景不相交划分与语音活动筛选。

还需要补的验证包括真实房间录音、两源以上密集重叠、接收器运动、流式因果推理的延迟与误判率，以及不同语言主干下仰角升高的个例原因。本文证据支持显式时间状态是空间感知与语言推理之间的有效接口，但只支持在所述仿真分布与评测模板内的结论，超出该范围需重新测量。

<details>
<summary>📎 论文与评分元数据</summary>

排名：前25% | 文档类型：方法研究 | [arXiv 原文](https://arxiv.org/abs/2610.17131v1)

</details>

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。

- 评分规则：type-aware-v1

- 评分模型：muse-spark-1.3-contributor

- 评分请求协议：openai_responses

---

[← 返回 2026-10-15 语音/音乐/音频论文速递](/audio-paper-digest-blog/posts/2026-10-15/)
