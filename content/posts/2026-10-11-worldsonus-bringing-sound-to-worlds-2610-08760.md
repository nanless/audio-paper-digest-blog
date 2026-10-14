---
title: "WorldSonus: Bringing Sound to Worlds"
date: 2026-10-11
draft: false
tags: [视频到声音生成, 音画同步, 自回归模型, 流匹配, 流式处理]
categories: [论文速递]
description: "WorldSonus 针对无声世界模型，用 100 ms 因果分块的自回归扩散同时解决实时跟播、中途改提示词和视角对齐立体声问题，在只看过去与当前帧的条件下取得可比双向模型的音质与更强的左右一致性，代价是单块 41.2 ms 计算与对高质量立体声数据的依赖。"
hiddenInHomeList: true
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_arxiv_id: "2610.08760"
paper_digest_workbench_contract: "researcher-workbench-v1"
paper_digest_reader_title: "WorldSonus：给动态世界模型实时配上可控立体声"
paper_digest_original_title: "WorldSonus: Bringing Sound to Worlds"
paper_digest_arxiv_version: 1
paper_digest_arxiv_versioned_id: "2610.08760v1"
paper_digest_arxiv_abs_url: "https://arxiv.org/abs/2610.08760v1"
paper_digest_arxiv_pdf_url: "https://arxiv.org/pdf/2610.08760v1.pdf"
paper_digest_primary_task: "视频到声音生成"
paper_digest_tags_contract: "paper-tag-flat-tags-v2"
paper_digest_tags_selection_contract: "paper-tag-selection-v2"
paper_digest_tags_registry_version: "paper-tag-catalog-v2"
paper_digest_tags_registry_sha256: "0a0847314ab2059d95efac33376414498e598a1f02a1486869bee0efc481d1f7"
paper_digest_tags_concepts: [{"facet":"task","id":"task.video-to-audio","label":"视频到声音生成"},{"facet":"task","id":"task.av-synchronization","label":"音画同步"},{"facet":"method","id":"method.autoregressive","label":"自回归模型"},{"facet":"method","id":"method.flow-matching","label":"流匹配"},{"facet":"setting","id":"setting.streaming","label":"流式处理"}]
paper_digest_primary_method: "自回归模型"
paper_digest_score: 8.3
paper_digest_rank_bucket: "前25%"
paper_digest_document_type: "方法研究"
paper_digest_one_sentence: "WorldSonus 针对无声世界模型，用 100 ms 因果分块的自回归扩散同时解决实时跟播、中途改提示词和视角对齐立体声问题，在只看过去与当前帧的条件下取得可比双向模型的音质与更强的左右一致性，代价是单块 41.2 ms 计算与对高质量立体声数据的依赖。"
paper_digest_authors: [{"affiliations":["The Hong Kong University of Science and Technology","Noiz AI"],"name":"Pengjun Fang"},{"affiliations":["MetaX"],"name":"Jingyi Fa"},{"affiliations":["The Hong Kong University of Science and Technology","Noiz AI"],"name":"Kam Man Wu"},{"affiliations":["Noiz AI"],"name":"Jiaming Wang"},{"affiliations":["Noiz AI"],"name":"Haoyuan Huang"},{"affiliations":["MetaX"],"name":"Yaguang Wu"},{"affiliations":["MetaX"],"name":"Xiangjun Huang"},{"affiliations":["Shanghai Jiao Tong University"],"name":"Ziyang Ma"},{"affiliations":["Noiz AI"],"name":"Weijia Chen"},{"affiliations":["The Hong Kong University of Science and Technology"],"name":"Hongyu Liu"},{"affiliations":["Noiz AI"],"name":"Zeyue Tian"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Qifeng Chen"}]
paper_digest_abstract_sha256: "14b644e875c5f59006a2d06dc63e988f5f27a8814b271b2bb399437684a2ca22"
paper_digest_sidecars: {"citation.bib":{"sha256":"49038e92bf520f57e78be0028864b2b78375b0d5de6a36471aeb91751ea7c5c0","url":"/audio-paper-digest-blog/data/papers/2026-10-11/2610-08760/citation.bib"},"citation.json":{"sha256":"e14b44addd6fabd65172d4920d1bf06ee892c3a5b98180ce469a269e88339cc1","url":"/audio-paper-digest-blog/data/papers/2026-10-11/2610-08760/citation.json"},"citation.ris":{"sha256":"425d3226f41c375c22e4678741ed3a0d2f8432e93bcdf52b55c5345347ba9e25","url":"/audio-paper-digest-blog/data/papers/2026-10-11/2610-08760/citation.ris"},"rethink-context.json":{"contract":"paper-research-context-v2","sha256":"ca945a0c9b3d539f4c75ae3cd2d5fe687f888d28db6c34705c5faa20802e09d1","url":"/audio-paper-digest-blog/data/papers/2026-10-11/2610-08760/rethink-context.json"}}
paper_digest_api_reader_contract: "beginner-researcher-v3"
paper_digest_api_reader_article_sha256: "ecec379bd2ca18b0f65ba39a9abb61958d3fcececcc654a684a25e20589ae91d"
paper_digest_api_reader_plan_sha256: "b1c3e71bb1f752ddabfdf9370c7b94a0fe719492760defc576868fb9f4c46bbf"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings-v4"
paper_digest_api_reader_source_bindings_sha256: "887bdd029f70702c830a2ea5a597789728b1a7445dd0a205014faf75b2d86acc"
paper_digest_api_reader_source_table_count: 4
paper_digest_api_reader_source_formula_count: 5
paper_digest_api_reader_structured_artifacts_sha256: "722bdb89c03269403337fe7e5219f773c19b8f33e9411f821dd15229d36d323d"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity-v1"
paper_digest_api_reader_author_identity_sha256: "851b380d6616e3e844d3ef45cb674ea9311c94cab6ba85de52e0974815a28e78"
paper_digest_api_reader_author_count: 12
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity-v1"
paper_digest_api_reader_resource_identity_sha256: "bd45804fd8dbeb11100a532e5b1744866d9bc7106848d1bc372f828957cd606d"
paper_digest_api_reader_resource_count: 4
paper_digest_api_reader_figure_persistence: "ephemeral-no-persisted-figure-assets-v1"
paper_digest_api_reader_decision_projection: "api-reader-decision-projection-v2"
---

# 📄 WorldSonus：给动态世界模型实时配上可控立体声

> 英文题目：*[WorldSonus: Bringing Sound to Worlds](https://arxiv.org/abs/2610.08760v1)*

> 标签：#视频到声音生成 | #音画同步 | #自回归模型 | #流匹配 | #流式处理
>
> 评分：**8.3/10** | 创新 1.6/2 | 技术严谨 1.2/1.5 | 实验充分 1.3/1.5 | 清晰度 0.8/1 | 影响力 1/1.5 | 开源 1/1.5 | 可复现 0.3/0.5 | 工程/实践 1.1/1.5


## 👥 作者与机构

- Pengjun Fang：The Hong Kong University of Science and Technology；Noiz AI
- Jingyi Fa：MetaX
- Kam Man Wu：The Hong Kong University of Science and Technology；Noiz AI
- Jiaming Wang：Noiz AI
- Haoyuan Huang：Noiz AI
- Yaguang Wu：MetaX
- Xiangjun Huang：MetaX
- Ziyang Ma：Shanghai Jiao Tong University
- Weijia Chen：Noiz AI
- Hongyu Liu：The Hong Kong University of Science and Technology
- Zeyue Tian：Noiz AI
- Qifeng Chen：机构信息未在 arXiv HTML 中可靠披露

## 📌 核心摘要

世界模型生成的视频缺少同步、可交互且有空间感的声音，已有双向模型需看到完整片段，已有流式模型多为单声道或不支持中途更换文本指令。WorldSonus输入流式视频帧与可随时更换的文本指令，只用过去与当前块的视觉信息，每100 ms生成一个音频块，输出48 kHz立体声音频。解码器端Transformer维护跨块会话状态并输出隐状态，该隐状态进入整流流头作为块内去噪连续潜变量的高层上下文。视觉条件分两路衔接：块级语义token先进入自回归主干维持语义连续，帧对齐局部token绕过主干直达流头补充细粒度时空线索。训练时冻结的同步专家用ShiftNCE把时序对齐蒸馏进自回归状态，推理时不再运行该专家。在5 s清晰立体声VGGSound留出测试集上，以VGGish FAD衡量，WorldSonus为1.73，低于PrismAudio的2.09。在30 s交互视频留出测试集上，以FAD衡量，WorldSonus为2.03，低于次优基线的5.52，且单块执行延迟满足实时要求。结论适用于有清晰声画对应与立体声分离的透视视频，对强混响、非直达声主导或单声道主导素材的泛化尚未验证；原文披露单块推理成本为单张NVIDIA H100上约41.2 ms，训练使用16张H100。

## 🔗 开源与复现资源

- 第三方资源：<https://noizai.github.io/WorldSonus/> — 链接可访问（HTTP 200）

- 代码相关资源：<https://github.com/NoizAI/WorldSonus> — 链接可访问（HTTP 200）

- 模型相关资源：<https://huggingface.co/FF2416/WorldSonus> — 暂时无法访问

- 模型相关资源：<https://huggingface.co/google/t5gemma-2-270m-270m> — 暂时无法访问

可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 世界模型为什么是无声的，配音难在哪里

这篇论文的输入是外部视觉世界模型已经渲染出的透视视频流，加上用户随时可能改写的声音文字指令，目标是实时产生 48 kHz 立体声音频，输出要跟上画面语义、事件时刻和相机视角带来的左右平衡。对于刚接触音频生成的研究生，可以把任务想象成给游戏直播实时配音：画面不断往前走，不能倒带重看未来帧，观众还可能中途喊换音效，左右声道还要随镜头移动而变化。

论文把难点归成三件：实时生成要求跟上交互视频流，交互控制要求中途响应新的声音指令，空间对齐立体声要求反映场景几何与相机运动。必须保留的信息包括事件类别与材质、起止时刻、混响与包络、声源方向，输出是连续波形而非离散 token。已有路线分两类，一类是视听联合大模型直接连着视觉主干做长时程流，好处是端到端，但不能作为独立音频模块插到纯视觉世界模型上，且因果蒸馏或长自回归 rollout 容易累积误差。

另一类是专用视频转音频模块，V-AURA 用双向视觉窗且只出单声道，SoundReactor 做到实时立体声但不支持中途文本可控，SwanSphere 做全景视频加 1 阶 Ambisonics 而非标准透视流。所以论文要做一个同时满足因果实时、中途文本控制和透视立体声的模块化框架。

### 同任务已有方法在输入与运行条件上有何不同

比较必须在相同输入、目标、监督和运行阶段下进行。双向视频转音频方面，从文本转音频隐扩散、早期视频转音频扩散，到时间对齐模型与整流流架构，AudioX、ThinkSound、PrismAudio 用流匹配与奖励对齐做立体声，AC-Foley 加参考音频，Omni2Sound 试多模态组合，空间音频从扩散双耳合成走向物体感知立体声与 Ambisonics。这些方法都需要整段视频上下文，不能处理流式输入，也不支持持久因果会话内的动态控制，因此与 WorldSonus 的因果流条件不同，不能直接把类别差异读成同条件胜负。

流式视频转音频方面，V-AURA 用自回归音频 token 预测加分块波形解码，但在 2.56 秒视觉窗内用 TimeSformer 非因果编码且 DAC 解码带未来上下文，步长 640 毫秒；SwanSphere 基于 Stable Audio Open 的变分自编码器不支持有状态流解码；SoundReactor 用因果自回归主干加扩散头做游戏视频流，但其视频转音频权重未公开，论文只沿用其发布的因果变分自编码器。

交互世界模型与联合音视频方面，GameGen-X、LingBot-World 2.0 做可控视觉 rollout，OmniForcing、Ripple 联合生成流式音视频，而 WorldSonus 把音频当作独立因果模块，只消费上游已实现的帧，不碰其动作空间与内部结构，用户或智能体独立更新音频提示词。这一定位决定了后文基线选择：用双向立体声模型看质量上限，用流式单声道看延迟与因果差距。

### 论文把实时可控立体声拆成哪些可测问题

论文把大目标拆成 4 个可测子问题。第一是因果实时：每 100 毫秒音频块只能用过去和当前视觉块，在单张 H100 上执行延迟要小于块长，用实时因子即执行时间除以音频时长衡量，小于 1 才算实时。第二是中途可控：提示词在块边界更新，不清会话状态、不重算过去帧，要求切换后后半段音频更贴新提示而非旧提示。

第三是空间对齐：左右能量差要与参考音频同侧，用分布距离与声道一致性衡量，而不用到达时间差类指标，因为生产立体声的声道差不可靠反映物理延迟，论文诊断实验发现把单声道复制到双声道反而在该类指标上最好，故舍去。第四是长时稳定：连续播 30 秒不崩不漂，用最后 5 秒直接冷启动与连续 rollout 尾段对比衡量。例子：海滩海浪一直在左、卡车从右经过，左右能量平衡曲线应一负一正，模型要复现这种主导侧。

又如前 5 秒是车辆怠速、后 5 秒是远去，提示切换后声音纹理应跟着变，而不是只跟着画面自然过渡。

### WorldSonus 的输入如何一步步变成音频块

整体流程是按块的因果自回归扩散。每个流块 t 收到视频帧 vt 和当前有效提示 pt，在有界历史状态 Mt-1 条件下预测对应音频隐块 at，联合分布按时间因果分解。音频在冻结因果立体声变分自编码器连续隐空间合成，该编码器把 48 kHz 立体声压成 30 Hz 隐向量，有状态解码器流式转波形，不重解过去隐向量。每 100 毫秒生成块对应 3 个隐帧，与 30 FPS 下的 3 个视频帧时间对齐。视频帧先经冻结 DINOv3 编码成空间块网格并拼上时间差分，再聚成帧 token，分两路使用。

提示词经 T5Gemma 2 编码压缩成紧凑 token 集，经交叉注意力缓存；自回归 Transformer 用滑动窗自注意力维护会话状态，输出隐状态 ht 条件化紧凑流头，流头在块内双向去噪 3 个隐帧并直读帧对齐视觉 token。采样每块 15 步欧拉步。下面的总览图把四部分放在一页，左侧是流式主干，右上是训练专用对齐，右中是空间数据，右下是提示切换，适合对照数据流理解因果边界与训练推理差异。

> **看图路径：** 1. 先沿左侧主路径看视频帧、音频块与有效提示如何分别经冻结编码器汇入因果自回归 Transformer；2. 再看右上训练专用分支中教师候选与投影预测如何构成对齐正样本与平移负样本对比；3. 再看右中数据分支中在野与全景两路如何汇成空间数据集并分两阶段训练；4. 最后看右下交互分支中 0-5 秒与 5-10 秒提示各管 50 个 100 毫秒块且状态不断

[![原论文 Figure 1：Overview of WorldSonus. (a) Causal streaming pipeline: Video frames map to two-timescale visual…](https://arxiv.org/html/2610.08760v1/x1.png)](https://arxiv.org/html/2610.08760v1/x1.png)

*论文图 1。原论文 Figure 1:：“Overview of WorldSonus. (a) Causal streaming pipeline: Video frames map to two-timescale visual tokens conditioning an AR transformer and a rectified-flow head.”。*

上图左侧显示视频帧 t-2 到 t、音频块左右波形与有效提示分别进入冻结编码器再汇入因果自回归 Transformer，底部每个 Flow Head 接因果 VAE 输出左右波形；右上显示 640 毫秒上下文经 Synchformer 教师得候选与 AR 隐状态经多层感知机投影得预测 token 做正负对比并标训练专用；右中显示在野与全景两路经筛选与解码汇成空间数据集再分混合预训练与立体声微调；右下显示 0-5 秒提示 A 与 5-10 秒提示 B 各管 50 个 100 毫秒块且状态不断。关键是所有推理箭头都不跨到未来块，而教师与全景解码只出现在训练与数据构造，图例中雪花为冻结、火焰为可训练。

### 有界记忆与分块因果如何保证延迟恒定

这一节解决流越长越慢、越久越爆显存的问题。自回归扩散框架每步只处理两个块聚合 token，一个来自上一音频块，一个来自当前视频块，用因果滑动窗注意力训练，部署时用固定容量 Ring-KV 缓存覆盖窗口 W 即 50 块对应 5 秒，循环覆盖最旧槽位，保证训练推理上下文策略一致。形式上，联合分布在给定有界历史下按块相乘，只用过去与当前块帧。

\[p_{\theta}(\mathbf{a}_{1},\dots,\mathbf{a}_{T})=\prod_{t=1}^{T}p_{\theta}(\mathbf{a}_{t}\mid\mathbf{M}_{t-1},\mathbf{v}_{t},\mathbf{p}_{t}),\]

上式符号含义是 theta 为生成器参数，a1 到 aT 为全序列隐块，Mt-1 为滑动窗键值历史，vt 为当前视频帧，pt 为当前提示。计算目标是每步条件概率的乘积，原文实现是解码器 Transformer 加流头，前者管长期规划，后者管当下精修。代价是视野被截到 5 秒，更久的依赖只能靠摘要记忆，好处是内存与每块计算恒定，论文测得稳态每 100 毫秒块 41.21 毫秒中位、41.38 毫秒 95 分位，实时因子 0.41，10 秒连续会话含冷启动总体 0.466，提示更新时因刷新状态缓存升到 45 毫秒级。

**因果分块生成 × Ring-KV 缓存：** 因果分块生成指每次只看过去和当前 100 ms 视频块来产生对应音频块，不偷看未来帧；Ring-KV 缓存指把自回归 Transformer 的历史键值存在固定 50 块循环缓冲里，写满就原地覆盖最旧槽位。二者搭配的理由是流越长历史越长，必须用定长记忆把内存和计算量封顶，组合后得到可无限往前滚而不重置、每步代价恒定的效果。

### 自回归主干与流头如何分工吃视觉与文本

这一节解决语义连续与高保真不可兼得的问题。自回归主干是 36 层宽 1024 的解码器 Transformer，每步收上一音频摘要与当前视觉摘要，音频摘要被因果掩码不看当前与未来视觉 token，位置用块时间索引的 2 维旋转位置编码，保证环形缓冲回绕时时间连续。文本经冻结 T5Gemma 2 截断 192 token 再压缩成 1 个全局加 31 个学习查询，经交叉注意力缓存，指令更新时在最近块边界原地替换交叉注意力缓存，保留 Ring-KV 与视听状态。

流头宽 1024，在块内双向注意力但不看未来块，直读 3 个帧 token 做细粒度时空证据，并以 ht 经自适应层归一化零初始化调制。引导是视觉与文本独立无分类器引导，AR 阶段两者尺度均为 3.0，流头对 AR 摘要尺度 1.0、对局部视觉尺度 8.0 并用自适应投影引导。例子：车辆先怠速后轰鸣，主干记住怠速语境，流头靠当前 3 帧的块网格差分捕捉转速突变，文本切换时只换交叉缓存而不动历史。

**自回归 Transformer × 整流流头：** 自回归 Transformer 负责维护会话级语义连续性，每步只吃上一音频块摘要和当前视频块摘要，输出隐状态 ht；整流流头负责把连续音频隐向量去噪成高保真波形隐向量，在当前块内双向精修。三者分工是前者管长期记忆、后者管当下音质，搭配后兼顾连贯与清晰，ht 还作为条件告诉流头当前语义走到哪里。

### 双时间尺度视觉条件为何要分两路

双时间尺度视觉条件的细节是：冻结 DINOv3 S+ 对混合长宽比按固定像素预算分桶不变形缩放，块网格拼时间差分，经线性瓶颈到 128 通道加 2 维旋转位置编码，每帧一个学习查询聚成帧 token，再用块摘要查询聚成块级 token 送主干，3 帧精修 token 直送流头。消融显示拿掉流头直连会使 FAD 从 2.42 恶化到 15.82，说明流式设计里直接帧级输入不可少；拿掉时间差分会使 DeSync 从 0.831 到 0.958、FAD 到 3.08；换成池化 SigLIP 2 会使 ImageBind 从 28.05 掉到 24.56。块粒度上 33 毫秒使 FAD 到 3.79，200 毫秒增加延迟而无一致提升，故选 100 毫秒作为延迟与质量的折中。

**块级语义 token × 帧对齐局部 token：** 块级语义 token 是把三帧特征聚成一个摘要送给自回归主干，作用是省上下文；帧对齐局部 token 是三帧精修特征绕过主干直送流头，作用是保留每帧时空细节。二者构成双时间尺度视觉条件，搭配理由是主干容量有限吃不下细粒度，而流头需要细粒度做对齐，组合后实现粗语义连续加细声画同步。

### 训练用什么数据、目标与提示调度

训练分 2 个阶段，预训练 0 到 140,000 步用全量视频音频加纯音频混合，视频音频比纯音频 2 比 1，5 秒块为主、5 个 epoch 中 4 个加 10 秒配对视图；微调 140,000 到 150,000 步只用高同步过滤立体声视频音频，去掉单声道主导扩展，任务比 1 比 0。优化器 AdamW，学习率 4000 步线性暖到 5 乘 10 负 5 后恒定，梯度裁 1.0，指数滑动平均 0.9999，16 卡 H100 全局批量 256，每音频实例采 4 个独立流时刻，探索性建模每例采 3 个源噪声同时刻同 dropout 只回传误差最小者。

数据总量 1464.93 小时 99 万余条，含基础立体声视频音频 820.15 小时、在野开放立体声 254.54 小时、交互世界模型 188.16 小时、全景 Ambisonics 210.13 小时、动作与第一视角 167.31 小时，单声道主导扩展 179.01 小时仅预训练用。信号筛选先重采样 48 kHz 去直流，任一声道均方根小于 1e-4 判静音弃掉，相关绝对值大于 0.98 或立体声宽度小于 0.15 不进基础立体声池；Qwen3-Omni 打 1 到 5 分视听一致性并标非叙事音乐，低于 4 分或有此类音乐去掉；字幕只写类别材质方向混响包络，不写无关视觉外观。

动态提示调度在每 10 秒配对序列按 60% 中途切换、10% 指令撤回、10% 指令到达、20% 持续保持分配。

\[\mathcal{L}_{\mathrm{flow}}(\bm{\epsilon})=\left\|f_{\theta}(\mathbf{x}_{t,s},s\mid\mathbf{C}_{t})-(\mathbf{a}_{t}-\bm{\epsilon})\right\|_{2}^{2},\]

上式是整流流速度匹配损失，xt,s 为噪声与真值隐块的线性插值，Ct 聚合 AR 历史与局部帧槽，f 为预测速度，目标是真值减噪声。同步目标与空间解码如下。

\[\mathcal{L}_{\mathrm{sync}}=-\log\frac{\exp\left(\mathrm{sim}(P(\mathbf{h}_{t}),\mathbf{S}_{t})/\tau\right)}{\exp\left(\mathrm{sim}(P(\mathbf{h}_{t}),\mathbf{S}_{t})/\tau\right)+\sum_{\delta\in\mathcal{D}_{t}}\exp\left(\mathrm{sim}(P(\mathbf{h}_{t}),\mathbf{S}_{t+\delta})/\tau\right)},\]

上式是 ShiftNCE 雏形，P(ht) 为 AR 状态投影，St 为教师对齐目标，Dt 为非零块偏移负样本集，sim 为余弦，tau 为温度。实际实现对 8 个教师 token 平均余弦，负偏移取正负 1、2、4 块，教师相似度大于等于 0.97 的平移候选过滤防假负，只取教师可分性前 40% 锚点平均，tau 固定 0.07，权重动态维持同步梯度范数约为流梯度 5% 并夹在 0.02 到 0.08，纯音频时同步损失置零。

\[L=W+\frac{\sqrt{2}}{2}(X+Y),\qquad R=W+\frac{\sqrt{2}}{2}(X-Y).\]

上式是全景 FOA 视角解码，把声场旋转对准主水平声源后在正负 45 度解码匹配 90 度透视裁剪，W 为全向，X、Y 为水平分量。

**ShiftNCE × Synchformer 教师：** Synchformer 教师是冻结的同步编码器，对以当前块结尾的 640 ms 因果视频窗输出目标嵌入 St，只在训练时使用；ShiftNCE 是把生成器隐状态经投影后去对比对齐目标与同视频时间平移负样本的对比损失。二者搭配是把强同步知识蒸进生成器隐状态，推理时不再跑教师，组合后不增加延迟却 sharpen 事件时刻。

**在野立体声筛选 × 全景 FOA 视角解码：** 在野立体声筛选指用信号处理去掉静音、相位损坏、窄立体声和双单声道，再用 Qwen3-Omni 去掉视听严重失配和旁白配乐，留下声道能量差可信的透视视频；全景 FOA 视角解码指从 Sphere360 和 YT-AmbiGen 的一阶 Ambisonics 声场估计水平声源方向，切 90 度透视裁剪并按正负 45 度解码出视角对齐立体声。二者搭配是补足真实空间监督，组合后同时覆盖开放域事件与相机运动下的左右平衡。

### 在什么视频与基线上测，用什么指标

评测主要在 5 个留出划分：清晰立体声 VGGSound 5 秒与 10 秒各 4096 条，交互游戏与实拍 5 秒与 10 秒各 4096 条、30 秒 1024 条，另加 Greatest Hits 物理碰撞 244 条 8 秒。基线是因果的 WorldSonus 只看过去与当前块，对双向立体声 AudioX、ThinkSound、PrismAudio 与流式单声道 V-AURA。双向模型需整段视觉上下文，V-AURA 以 640 毫秒步长在 2.56 秒窗内仍非因果，WorldSonus 严格因果。为公平，双向基线喂与 WorldSonus 相同的音频中心字幕，官方流水线默认采样，10 秒时把两段提示按时间顺序拼接，30 秒时 AudioX 与 PrismAudio 分 3 段 10 秒连拼，ThinkSound 与 V-AURA 单次跑全长，WorldSonus 连续流 100 毫秒块加 6 段 5 秒提示。

指标方向要记清：FAD、FDP、FDO、KLP、S-FDO 越低越好，其中 FAD 与 FDO 算中声道即左右和除以 2，S-FDO 算侧声道即左右差除以 2；IB 语义相似与 CLAP 文本音频相似越高越好，IB 与 CLAP 在表里乘以 100 显示；DeSync 为 Synchformer 平均绝对偏移秒数越低越好；BiasSkill 为 1 秒窗左右一致经置换零基归一化的增益百分比越高越好，只在真值能量对比绝对值大于等于 0.3 且均方根大于等于 1e-4、生成均方根大于等于 0.001 即负 60 dBFS、生成对比绝对值大于等于 0.1 且同号时判对，近单声道计错。主观是 40 条交互 10 秒各 20 条游戏实拍，20 人共 400 次成对比，空间、时间、语义与总体 4 维，胜加 1 平局加 0.5。

### 空间左右一致性在什么条件下成立

先看声道一致性的定义，左右能量对比 d 由均方能量算得，正为右主导、负为左主导，绝对值表分离强度。

\[d=\frac{E_{R}-E_{L}}{E_{R}+E_{L}+10^{-12}}.\]

下表比较左右偏好是否与参考同侧的问题，公平条件是 3 组时长划分各模型跑相同视频，指标为经 10000 次整段错配置换消除固定偏置后的 BiasSkill 百分比越高越好，单声道 V-AURA 不计分布侧声道指标。表前说明已交代比较对象与方向，表后将解释收益与限制。

| Model | VGG 1010 s | Inter. 1010 s | Inter. 3030 s |
| --- | --- | --- | --- |
| AudioX | 3.79 | 3.08 | −0.01{-}0.01 |
| ThinkSound | 3.22 | −1.78{-}1.78 | 0.63 |
| PrismAudio | 1.10 | −0.06{-}0.06 | 4.19 |
| WorldSonus (Ours) | 4.42 | 6.03 | 15.90 |

上表完整呈现原文立体声平衡一致性矩阵，WorldSonus 在 VGG 10 秒 4.42、交互 10 秒 6.03、交互 30 秒 15.90 均为最高，而 AudioX 在 30 秒接近零、ThinkSound 在交互 10 秒为负、PrismAudio 在交互 10 秒接近零，说明双向模型虽看全片但在相机运动下左右稳定性差。限制是该指标只统计满足能量与分离门限的合格窗，VGG 10 秒保留 16.3%、交互 10 秒 24.6%、交互 30 秒 19.8%，结论只在有明确方向的活跃窗成立，居中或静音段不计分。时间方面双向基线因直接优化 Synchformer 特征 DeSync 更低，WorldSonus 在 Greatest Hits onset 准确率 0.803、F1 0.785、AP 0.871 接近微调前水平，但低于 PrismAudio 的 F1 0.808 与 AP 0.906，说明因果无测试引导下事件时刻有竞争力但非全面最优。

### 文本控制与听感偏好是否真由提示引起

这一节回答提示切换是否真起作用、听感是否跟随客观增益。测量对象是每 5 秒音频段与各自字幕的 CLAP 余弦，比较方法是 10 秒 clip 前后半各有参考提示 P1 到 P2，双相对匹配率要求两半都更贴各自提示，配对反事实用相同视觉种子比较切换臂与保持臂。指标方向是匹配率越高越好，增益 G 为切换减保持的后半段偏好差，正值且区间不含零才算主动转向。下表呈现原文双相对匹配率，包含 3 个双向基线与视频单模基线，条件是相同视频与提示对。

| Model | VGG 1010 s | Inter. 1010 s |
| --- | --- | --- |
| AudioX | 15.41 | 14.04 |
| ThinkSound | 13.92 | 13.43 |
| PrismAudio | 16.16 | 11.99 |
| V-AURA (video-only) | 12.16 | 12.11 |
| WorldSonus (Ours) | 25.68 | 23.44 |

上表显示 WorldSonus 在 VGG 10 秒 25.68% 与交互 10 秒 23.44% 高于三双向与视频单模的 10% 到 16%，配对反事实保持臂仅 14.43% 与 12.82% 排除纯视觉过渡解释，净增益约 0.0509 与 0.0525 且 95% 自助区间不含零。但增益随提示语义差异放大，最相似四分位仅 0.0047 与 0.0063，说明指令越像越难听出切换，结论限于有区分度的提示对。读图说明：下面用户研究矩阵把听感偏好拆成空间、时间、语义和总体 4 维，每格是行方法胜列方法的百分比，平局计半票，适合检验客观空间增益是否被听出。

> **看图路径：** 1. 先确认四个矩阵分别为空间、时间、语义和总体偏好，行列均为真值与各模型；2. 对比 Ours 行对三个双向基线列的数值是否都大于 50；3. 再看真值行对 Ours 列，确认真值仍占优但差距在不同维度如何变化

[![原论文 Figure 3：User-study preference matrices across (a) spatial alignment, (b) temporal alignment, (c) semantic…](https://arxiv.org/html/2610.08760v1/user_study.png)](https://arxiv.org/html/2610.08760v1/user_study.png)

*论文图 3。原论文 Figure 3:：“User-study preference matrices across (a) spatial alignment, (b) temporal alignment, (c) semantic alignment, and (d) overall preference.”。*

上图 4 个矩阵显示 Ours 行对 AudioX 总体 58.8、空间 65.0，对 ThinkSound 总体 80.0、空间 80.0，对 PrismAudio 总体 65.0、空间 56.2，均超 50，而真值行对 Ours 列总体 65.0、空间 55.0 说明真值仍被偏好。限制是仅 40 条交互 10 秒、每对 40 次评价，结论限于该类游戏实拍短片，不推广到全开放域。

### 实时质量数字与长时稳定的证据是什么

这一节回答因果实时是否掉质量、长滚是否漂移。测量对象是分布距离与同步，比较方法含双向与流式基线，条件是 5 到 30 秒五划分，指标方向是 FAD 越低越好、DeSync 越低越好、实时因子小于 1 才算实时。下表整理论文原句报告的核心实时数字，比较问题是同样因果流下能否以小于块长的耗时产出可比音质，公平条件是单卡 H100 批量 1、每块 15 步欧拉，表后解释代价。

| 评估条件 | 音质指标 | 本方法值 | 基线对照 | 延迟与实时因子 |
| --- | --- | --- | --- | --- |
| 30 秒交互视频 | VGGish FAD | 2.03 | 双向基线更高 | 单卡 H100，15 步欧拉 |

上表含义是 VGGSound 5 秒清晰立体声 FAD 1.73，交互 30 秒 FAD 2.03，每 100 毫秒块耗时 41.2 毫秒，实时因子 0.41。结合原文大表，WorldSonus 在五划分 FAD、FDP、KLP 上与双向模型竞争或更优，而 V-AURA 的 FAD 在 VGG 5 秒 4.06、交互 30 秒 13.33 且分辨率为 640 毫秒，说明更细粒度与立体声监督带来分布优势。限制是双向基线在 DeSync 上常更低，如 VGG 5 秒 ThinkSound 0.481 对 WorldSonus 0.686，说明未来帧对时刻仍有帮助；且总体 10 秒连续会话实时因子 0.466，提示更新时升到 45 毫秒级，结论限于所测硬件与采样步数。下表用原文连续句整理长时与文本控制增益，比较问题是连续滚 30 秒尾段是否等价冷启动、切换提示是否真因文本而变，公平条件是相同视觉、种子与引导。

| 对比设置 | 声学保真 | 同步偏移 | 文本转向增益 | 对齐消融 |
| --- | --- | --- | --- | --- |
| 640 毫秒教师窗对 100 毫秒块 | 教师窗 640 毫秒 | 流块 100 毫秒 | 区间不含零 | 直接注入更差 |

上表第一行含义是尾段 5 秒直接生成 FAD 2.63、DeSync 0.880，第二行连续滚尾 FAD 2.51、DeSync 0.827，差距小且方向不一，支持在 5 秒 Ring-KV 下无崩不漂，但只测 1024 条交互 30 秒尾窗，不证明更长或更剧烈镜头下同样稳定。第二组数字是 VGG 与交互 10 秒净增益约 0.0509 与 0.0525，95% 自助区间不含零，去 ShiftNCE 使 DeSync 从 0.831 到 1.067，而直接注入 640 毫秒特征反而更差，说明训练蒸馏比推理外挂更适配流粒度。

### 拿掉对齐与视觉直连会发生什么

消融都在交互 10 秒 4096 条、预训练后直接测、固定无分类器引导下进行，回答对齐监督与视觉表示是否必要。时间目标上，去掉 ShiftNCE 使 DeSync 从 0.831 到 1.067，而直接注入 640 毫秒因果 Synchformer 特征反而更差到 1.043 且 FAD 到 2.81，论文解释为 640 毫秒窗与 100 毫秒块失配，说明训练蒸馏比推理外挂更适配流粒度；Greatest Hits 上无 ShiftNCE 使准确率从 0.803 到 0.678、F1 到 0.560、AP 到 0.681，进一步支持该目标管精细同步。视觉表示上，去时间差分使 DeSync 到 0.958、FAD 到 3.08，换池化 SigLIP 2 使 IB 从 28.05 到 24.56，说明 DINOv3 块网格加差分对运动与语义均有效。双尺度上，去流头 DINO 直连使 FAD 从 2.42 到 15.82、IB 到 12.65，是最大跌幅，证明只靠自回归摘要不够。

块粒度上 33 毫秒 FAD 3.79 最差，200 毫秒延迟增而无一致提升，故 100 毫秒为折中。未胜出项是直接同步特征与池化 CLIP 族在该流架构下均未赢，且 DeSync 绝对值仍逊直接优化同步特征的双向模型，说明因果有限前瞻的天花板仍在。尚未评测的是更大窗口 Ring-KV 或更少采样步下的权衡，原文未报告，不能推断去掉后必然如何之外的数值。

### 哪些短板不是技术失败而是资源与表示限制

论文自述两类限制。第一是因果音频表示：生成在冻结 SoundReactor 因果立体声变分自编码器连续隐空间，据 SoundReactor 报告其因果解码器重建质量低于非因果对应，未来需更大规模因果编解码器补齐，这解释了部分音质上限不在自回归扩散本身。第二是立体声数据稀缺：大量公开立体声视频声道分离是人工或噪声，不反映物体运动，虽经 2 阶段过滤与全景解码提纯，真实空间规模仍远小于单声道语料。

此外，来源未确认不是技术缺陷：HuggingFace 上 WorldSonus 与 T5Gemma 2 链接本次未能确认可达，只说明链接当前不可用，不证明方法无效；第三方项目页可用只证明论文提到该链接。误解澄清：因果不等于确定性求解，参数冻结也不推出输出确定，采样仍有随机性与引导尺度影响；无训练的说法不适用本篇，本研究训练了自回归主干与流头，冻结的是 VAE、DINOv3、文本编码器与教师；自动指标好不等于人工全胜，主观仍显示真值占优。

### 复现第一步做什么，需要什么配置

值得尝试的时机是已有纯视觉世界模型或游戏视频流，需要独立音频模块实时跟播、且能接受 5 秒记忆与 H100 级延迟时。复现第一步不是重训，而是按作者仓库说明装环境并跑官方推理：先拿到真正可用的代码仓与检查点，确认因果 VAE、DINOv3、T5Gemma 2 权重路径，再以 100 毫秒块、15 步欧拉、AR 引导 3.0、流头局部 8.0 的默认配置在交互 10 秒上复刻 FAD 与 BiasSkill。

代码开源、权重可下载、系统可运行是三件事：第三方项目页可用不等于权重可下，模型页本次暂不可达需另行确认，系统可运行还要看单卡 H100 批量 1 的 41 毫秒级延迟在自己硬件上能否复现。关键超参与信息条件要保留：窗口 50 块 5 秒、教师窗 640 毫秒 8 token、温度 0.07、负偏移正负 1、2、4 并过滤教师相似度大于等于 0.97、锚点取前 40%、同步梯度占比约 5% 夹在 0.02 到 0.08、提示调度 60% 切换 10% 撤回 10% 到达 20% 保持、纯音频时同步损失置零。

训练复现需 16 卡 H100 全局 256、14 万加 10,000 步、流时刻乘 4、探索噪声取 3 选 1，成本高，初学者建议先做推理与提示切换反事实：同视频同种子跑切换与保持两臂，算后半段 CLAP 偏好差。

### 什么时候值得用，还缺哪项验证

综合来看，WorldSonus 在只看过去与当前块的苛刻条件下，用有界记忆封顶代价，用双尺度视觉保对齐，用训练专用对比蒸馏补时刻，用筛选加全景解码补空间监督，在 5 到 30 秒的 VGGSound 与交互划分上取得有证据的音质与声道一致性，且支持块边界换提示不重置。适用条件很具体：透视视频、30 FPS 3 帧对三隐帧、100 毫秒块、5 秒记忆、H100 上 15 步采样；离了这些，延迟与质量数字不能直接套用。

还需补的验证是更长于 30 秒的漂移、更剧烈相机运动与多声源遮挡下的 BiasSkill 保留率、不同硬件与更少采样步的实时因子，以及提示高度相似时的可感知性阈值。教学例子标成例子：若把海浪放左、卡车放右的演示当一般结论，会误以为所有居中混音都能分左右，实际上该结论只在满足能量与分离门限的活跃窗成立。下一步若要落地，先在自己场景测 BiasSkill 合格窗比例与 DeSync，再决定是否扩大真实立体声数据或升级因果编解码器。

<details>
<summary>📎 论文与评分元数据</summary>

排名：前25% | 文档类型：方法研究 | [arXiv 原文](https://arxiv.org/abs/2610.08760v1)

</details>

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。

- 评分规则：type-aware-v1

- 评分模型：muse-spark-1.3-contributor

- 评分请求协议：openai_responses

---

[← 返回 2026-10-11 语音/音乐/音频论文速递](/audio-paper-digest-blog/posts/2026-10-11/)
