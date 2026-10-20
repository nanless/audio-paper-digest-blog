---
title: "MOMO: Human Motion from Moving Sounds"
date: 2026-10-20
draft: false
tags: [语音驱动手势生成, 声源定位, 扩散模型, 数据集, Transformer]
categories: [论文速递]
description: "针对移动声源的双耳音频驱动人体动作生成问题，MOMO 用声源定位网络估计头中心方向加 CLAP 理解音频内容再做扩散生成，在 DySAM 测试集上取得更好的对齐和物理合理性，但结论只在室内单声源采集条件下成立。"
hiddenInHomeList: true
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_arxiv_id: "2610.24522"
paper_digest_workbench_contract: "researcher-workbench-v1"
paper_digest_reader_title: "移动声源下的人体反应动作：MOMO 如何听声辨位再生成动作"
paper_digest_original_title: "MOMO: Human Motion from Moving Sounds"
paper_digest_arxiv_version: 1
paper_digest_arxiv_versioned_id: "2610.24522v1"
paper_digest_arxiv_abs_url: "https://arxiv.org/abs/2610.24522v1"
paper_digest_arxiv_pdf_url: "https://arxiv.org/pdf/2610.24522v1.pdf"
paper_digest_primary_task: "语音驱动手势生成"
paper_digest_tags_contract: "paper-tag-flat-tags-v2"
paper_digest_tags_selection_contract: "paper-tag-selection-v2"
paper_digest_tags_registry_version: "paper-tag-catalog-v2"
paper_digest_tags_registry_sha256: "cdef54423b5dfc00a1d017ef6639446d2ecd1d9c1acf71c8eb4f6219a46b7ba8"
paper_digest_tags_concepts: [{"facet":"task","id":"task.speech-driven-gesture","label":"语音驱动手势生成"},{"facet":"task","id":"task.localization","label":"声源定位"},{"facet":"method","id":"method.diffusion","label":"扩散模型"},{"facet":"artifact","id":"artifact.dataset","label":"数据集"},{"facet":"method","id":"method.transformer","label":"Transformer"}]
paper_digest_primary_method: "扩散模型"
paper_digest_score: 6.8
paper_digest_rank_bucket: "前50%"
paper_digest_document_type: "数据集与基准"
paper_digest_one_sentence: "针对移动声源的双耳音频驱动人体动作生成问题，MOMO 用声源定位网络估计头中心方向加 CLAP 理解音频内容再做扩散生成，在 DySAM 测试集上取得更好的对齐和物理合理性，但结论只在室内单声源采集条件下成立。"
paper_digest_authors: [{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Deli Cai"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Shuyang Xu"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Zhiyang Dou"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Zitong Lan"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Mingmin Zhao"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Changxing Ding"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Taku Komura"}]
paper_digest_abstract_sha256: "e013d6b7e691808c12e19339e9e6fca36df7645331a2f4ef7a8b8c99e95f04f9"
paper_digest_sidecars: {"citation.bib":{"sha256":"58cb820ded140590509e4b319835597ee014b9457fe224b44db80c8d1983c8db","url":"/audio-paper-digest-blog/data/papers/2026-10-20/2610-24522/citation.bib"},"citation.json":{"sha256":"464575c388c6cac72ffb2c2ee8c6f59e1bf8bec576b8cec6bf0935567a225487","url":"/audio-paper-digest-blog/data/papers/2026-10-20/2610-24522/citation.json"},"citation.ris":{"sha256":"01d9ee7d027ab14f0fbe1108e29d76ce641afee6f43186f849677b88916e72c4","url":"/audio-paper-digest-blog/data/papers/2026-10-20/2610-24522/citation.ris"},"rethink-context.json":{"contract":"paper-research-context-v2","sha256":"86448ffaefb24054798cc0cf359db8a45edbd7445059a14b1320be0dca3ea6e9","url":"/audio-paper-digest-blog/data/papers/2026-10-20/2610-24522/rethink-context.json"}}
paper_digest_api_reader_contract: "beginner-researcher-v3"
paper_digest_api_reader_article_sha256: "fe2af2b07c7e7fcdcc35a90836cf48b861307abeb4e649fec4bdcac1635a6cc2"
paper_digest_api_reader_plan_sha256: "44d0b96924847270de320cedb196b52f72562836e6028deb85c8992125646cfd"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings-v4"
paper_digest_api_reader_source_bindings_sha256: "70cca80e7f4d25bb7f92376975f0e08394ae02e538ba87cffacf8801f7f911da"
paper_digest_api_reader_source_table_count: 4
paper_digest_api_reader_source_formula_count: 3
paper_digest_api_reader_structured_artifacts_sha256: "98191bc828587a4a5d1dddf984dc0432ff679f8dae016159f9563fbd5914a8ad"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity-v1"
paper_digest_api_reader_author_identity_sha256: "096efc16a95eef20b63fe785cce5378df97651e5453c025533c68a7579312876"
paper_digest_api_reader_author_count: 7
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity-v1"
paper_digest_api_reader_resource_identity_sha256: "fc9f26a5742f0b38726153de352c4f528b7e7c987feb5e28d11efd3ea1df63c7"
paper_digest_api_reader_resource_count: 1
paper_digest_api_reader_figure_persistence: "ephemeral-no-persisted-figure-assets-v1"
paper_digest_api_reader_decision_projection: "api-reader-decision-projection-v2"
---

# 📄 移动声源下的人体反应动作：MOMO 如何听声辨位再生成动作

> 英文题目：*[MOMO: Human Motion from Moving Sounds](https://arxiv.org/abs/2610.24522v1)*

<!--paper-tag-hierarchy-v1:start-->

**研究分类**

- **研究任务**：[语音驱动手势生成](/audio-paper-digest-blog/papers/?concept=task.speech-driven-gesture)；[声源定位](/audio-paper-digest-blog/papers/?concept=task.localization)
- **研究方法**：[生成模型](/audio-paper-digest-blog/papers/?concept=method.generative) → [扩散模型](/audio-paper-digest-blog/papers/?concept=method.diffusion)；[Transformer](/audio-paper-digest-blog/papers/?concept=method.transformer)
- **研究产物**：[数据集](/audio-paper-digest-blog/papers/?concept=artifact.dataset)

<!--paper-tag-hierarchy-v1:end-->

> 评分：**6.8/10** | 创新 1.5/2 | 技术严谨 1.2/1.5 | 实验充分 1.2/1.5 | 清晰度 0.8/1 | 影响力 0.8/1.5 | 开源 0/1.5 | 可复现 0.3/0.5 | 工程/实践 1/1.5


## 👥 作者与机构

- Deli Cai：机构信息未能在本次解析中与作者逐人可靠绑定
- Shuyang Xu：机构信息未能在本次解析中与作者逐人可靠绑定
- Zhiyang Dou：机构信息未能在本次解析中与作者逐人可靠绑定
- Zitong Lan：机构信息未能在本次解析中与作者逐人可靠绑定
- Mingmin Zhao：机构信息未能在本次解析中与作者逐人可靠绑定
- Changxing Ding：机构信息未能在本次解析中与作者逐人可靠绑定
- Taku Komura：机构信息未能在本次解析中与作者逐人可靠绑定

## 📌 核心摘要

研究对象是人听到移动声源后作出的全身反应。难点在于同一段声音因声源相对听者的方向和运动不同会引发不同动作，而已有音乐到舞蹈、语音到手势以及静态空间音频方法不处理声源运动。原文输入为 10 秒双耳音频，采样率 48000 Hz，输出为 300 帧、30 FPS、272 维的 SMPL-X（人体参数化模型，SMPL-X）动作序列，并附带敏感或不敏感的反应类别标签。处理链路是定位与理解并行提取条件，再送入生成模块：定位分支从原始双耳音频估计头部坐标系下的声源方向向量序列，理解分支将双耳平均为单声道后用冻结的预训练 CLAP（对比语言音频预训练模型，CLAP）编码器提取逐帧内容特征，生成分支用条件扩散模型从高斯噪声逐步去噪为动作。与 MOSPA（静态空间音频驱动动作方法，MOSPA）需要真实世界坐标系声源绝对位置不同，MOMO 只用音频估计的方向，更接近只能听到声音的具身设定。在 DySAM 测试集上，MOMO 的 R-precision Top1 为 0.623，FID（生成动作与真实动作的特征分布差异指标，参考集为 DySAM 测试集真实动作，FID）为 0.857，优于 MOSPA 的 0.585 和 5.160，skating ratio（脚部滑动帧占比，越低越好）为 1.66%，接近真实动作的 1.26%。结论适用于室内混响下单移动声源的 10 秒反应生成，多声源、室外和长时交互尚未验证。原文未披露训练、推理或部署成本。

## 🔗 开源与复现资源

- 第三方资源：<https://cdlchoi.github.io/projects/MOMO> → <https://cdlchoi.github.io/projects/MOMO/> — 链接可访问（HTTP 200）

可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 人听到移动声音时要反应什么信息

这篇论文研究的是输入一段随时间移动的空间音频，输出一段 10 秒的人体 3 维动作。输入是戴在人耳附近录到的双耳音频，采样率 48000 赫兹，输出是 SMPL-X 参数表示的人体动作，训练时转成 30 帧每秒、每帧 272 维的表示。要保留的信息有两个：一是声音是什么，比如狗叫、汽车喇叭、蜜蜂嗡嗡声；二是声音相对听者从哪里来、怎么动，是从左后绕到右前，还是直冲过来。输出必须同时对得上这两点，语义动作要合理，朝向和躲避方向要随声源移动而变化。

读图说明：下面这张生活场景拼图帮你建立直觉，同一类声音因方位和运动趋势不同会引发完全不同的全身反应，这正是静态声源设定覆盖不了的部分，全文共 30 名被试的用户研究也围绕真实感和空间对齐两方面展开。

> **看图路径：** 1. 先看四格场景：隧道咳嗽、夜间汽车、公园猫、土路狗各引起什么身体朝向；2. 再看人物重影表示的时间延续：是靠近、躲避还是弯腰安抚；3. 对比同一语义在不同方位和移动趋势下反应的差别

[![原论文 Figure 2：Diverse Reactions to Moving Sounds.](https://arxiv.org/html/2610.24522v1/fig/real_world_img.jpg)](https://arxiv.org/html/2610.24522v1/fig/real_world_img.jpg)

*论文图 2。原论文 Figure 2:：“Diverse Reactions to Moving Sounds.”。*

这张图确实可见 4 种日常遭遇：有人在走廊捂口鼻，有人在夜间马路边跑离驶来的汽车，有人在草地蹲下伸手逗猫，有人在土路上躲避扑来的狗。重影表示动作的时间延续，波纹示意声音来向。它帮助理解论文的任务定义：生成器不能只认出汽车或狗，还要根据声源轨迹决定是转身、弯腰、捂耳还是跑开。

### 已有动作生成路线为什么不够用

过去的条件动作生成大多用动作标签、文本描述、轨迹或音乐、语音做条件。音乐编舞关注节奏风格，语音手势关注内容韵律，用的多是单声道或普通立体声，不建模声源在空间中的位置。最近的 MOSPA 和 SAM 数据集第一次引入双耳空间音频，但每个序列里声源位置固定不动，且生成时需要输入真值的声源世界坐标，这在机器人实际部署时很难拿到。

本文的比较是同任务同划分下的比较：把 EDGE、POPDG、MOSPA、MoMask++ 都在同一 DySAM 划分上重训，并把它们原来的条件换成传统声学特征，以保证输入公平。声源定位方面，论文沿用了双耳线索加卷积前端的思路，但把时间建模从门控循环单元换成 Transformer 编码器，以应对混响下的长时依赖。评估器也沿用 MOSPA 的动作条件匹配思路，但条件里额外加入声源轨迹，使其对空间错位更敏感。

### 动态空间音频任务难在哪里

难点在于声源在动，听者头也在动，双耳信号里的耳间相位差、强度差和整体频谱都随时间变化，还叠加室内混响。模型既要从这种时变双耳线索里恢复方向，又要理解音频语义，还要在去噪生成的每 1 帧都跟上最新的方位。如果只用自注意力把动作令牌和条件令牌拼在一起隐式交互，往往对不齐快速经过的声源。

另一个难点是实用性：不能依赖世界坐标系下的声源真值。论文因此采用头中心到达方向，即从听者头部指向声源、在头部坐标系下表示的单位向量。它用头部关节的平移旋转把世界坐标声源位置变换过来，具有坐标不变性，更贴近具身智能体只能靠自身听觉推断方向的设定。

### MOMO 的三部分如何分工协作

MOMO 按定位、理解、生成三部分组织。拿一个 10 秒样本走一遍：原始双耳波形一分为二，一路进定位分支做短时傅里叶变换，提取 4 通道双耳特征，经卷积加 Transformer 预测逐帧头中心方向序列；另一路把双耳平均成单声道，进冻结的 CLAP 编码器再做时间对齐，得到逐帧音频内容特征。两路特征加上反应类型标签和扩散时间步嵌入，在生成分支里拼成统一条件序列，去指导 Transformer 去噪器从噪声中恢复动作。

读图说明：下面的框架图是理解分工和汇合点的关键，先看三列再看右侧校正细节，注意条件如何广播相加、校正强度如何用因果注意计算，图中雪花标记表示冻结的参数模块。

> **看图路径：** 1. 先沿左侧到中间看三列主路径：定位、理解、生成的输入输出；2. 再看底部拼接处时间步、类型标签、音频特征、方向特征如何相加广播；3. 最后看右侧校正分支里缩放平移与因果交叉注意如何得到强度系数

[![原论文 Figure 5：Overview of MOMO framework. MOMO comprises three coupled functional components: a sound source…](https://arxiv.org/html/2610.24522v1/framework.png)](https://arxiv.org/html/2610.24522v1/framework.png)

*论文图 5。原论文 Figure 5:：“Overview of MOMO framework. MOMO comprises three coupled functional components: a sound source localization (SSL) network predicts a frame-wise head-centric DoA sequence \hat\bmD…”。*

这张图确实可见左侧定位列输出逐帧方向特征，中间理解列输出逐帧音频特征，中间下方两者汇入右侧生成列的拼接处，底部图例说明加号是逐元素相加。右侧放大框显示动作令牌先做层归一化再经缩放平移得到修正量，另一条交叉注意力分支在因果掩码下预测强度系数，两路相乘加回动作令牌。这种设计把修正量是什么和加多少解耦，目的是让模型随声源移动自适应调整每 1 帧的修正幅度。

### 定位分支怎样从双耳音频估计方向

定位分支的输入是左右两路波形。论文用 40 毫秒汉明窗、补零到 2048 点快速傅里叶变换、33.3 毫秒跳步，得到与动作对齐的 30 赫兹帧率，只保留最低 256 个频点，约到 6 千赫兹。对每帧每频点算左耳幅度、右耳幅度和相位，再构造 4 个通道：左右平均幅度谱、耳间相位差的正弦、耳间相位差的余弦、耳间强度差。前者编码整体频谱，后两者分别避免相位卷绕不连续并提供双耳响度差。10 秒序列对应 300 帧，形成 4 乘 300 乘 256 的张量。

网络前端是 3 个卷积块，每块 3 乘 3 卷积加激活再在频率轴 4 倍下采样，把频率维从 256 降到 64、16、4，保留时间分辨率。展平后投影到 128 维，加上可学习位置编码，进 4 层 8 头、前馈 256 维的预归一化 Transformer 编码器，每帧输出经两层全连接回归 3 维向量再做 L2 归一化，得到单位方向向量。训练用余弦距离损失，推理时冻结参数，只用音频预测方向序列给生成器。

**双耳音频 × 头中心到达方向 × 声源定位网络：** 双耳音频指放在双耳附近录到的左右两路信号，保留了耳间相位差和强度差；头中心到达方向是把世界坐标声源位置用头部 6 自由度位姿变换到头部坐标系下的单位向量，只表示声音相对头的方向；声源定位网络负责从原始双耳音频逐帧预测这个向量，三者搭配后，生成器不再需要特权真值坐标，只用听觉可观测的方向线索做条件。

### 理解分支和生成主干怎样表示条件

理解分支把双耳平均成单声道后送入预训练 CLAP 编码器，取隐特征在通道频率维池化并做时间上采样对齐，得到与动作同长的逐帧音频特征。生成主干把带噪动作投影成动作令牌，把音频特征、方向特征、类型标签、扩散步嵌入分别投影后按帧相加，全局的时间步和标签广播到所有帧，形成统一条件序列，再与动作令牌拼接送入 Transformer 编码器去噪。论文采用 272 维动作表示，训练时预测干净动作序列。

**CLAP 音频编码器 × 逐帧音频内容特征 × 反应类型标签：** CLAP 音频编码器是预训练的音频内容编码器，负责回答声音是什么；逐帧音频内容特征是把双耳平均成单声道后经 CLAP 再对齐到 30 帧每秒动作长度的序列，保留内容随时间的变化；反应类型标签是敏感或不敏感的二分类，控制反应强度，三者一起告诉生成器何时该大动、何时该克制。

### 逐帧校正和强度预测具体算什么

在每个 Transformer 编码器层后，模型对中间动作令牌做一次显式残差校正，公式含义是原令牌加上强度逐元素乘以修正量。

\[\bm{m}^{\prime}=\bm{m}+\bm{\alpha}\odot\bm{\delta},\]

其中修正量来自带自适应层归一化的前馈：先对动作令牌层归一化，再用由条件算出的缩放和平移调制，最后过前馈网络。

\[\bm{\delta}=\mathrm{FFN}\left(\mathrm{LN}(\bm{m})\odot(1+\bm{\gamma})+\bm{\beta}\right),\]

条件是时间步嵌入、类型嵌入、音频特征、方向特征逐帧相加。强度系数则另起一路：以动作令牌为查询、条件序列为键值做因果交叉注意力，使第 t 帧只能看当前及过去的条件，以容纳人反应可能滞后，再经多层感知机和 Sigmoid 乘以上限得到有界强度。

\[\bm{\alpha}=\alpha_{\max}\cdot\mathrm{Sigmoid}(\mathrm{MLP}_{\alpha}(\mathrm{CrossAttn}(\bm{m},\bm{c}_{\leq t},\bm{c}_{\leq t}))).\]

这样修正方向和用多大力气分开估计，前者管语义空间对齐，后者管时间自适应。消融显示拿掉强度预测会全面变差，再拿掉整个校正模块变差更大，说明只靠拼接加自注意力不够。

**条件扩散去噪 × 逐帧动作校正 × 校正强度预测器：** 条件扩散去噪指从高斯噪声出发、在音频方向和内容条件下迭代预测干净动作；逐帧动作校正是在每个 Transformer 编码器层后用 AdaLN 调制对动作令牌做残差修正，显式注入当前帧条件；校正强度预测器用动作令牌做查询、条件序列做键值做因果交叉注意力，动态决定每帧加多少修正，三者组合让自注意力的隐式交互之外还有显式的逐帧对齐。

### 定位和生成各用什么监督训练

定位网络用 DySAM 和 DySAL 的头相对方向标签训练，目标是归一化真值方向，损失是逐帧余弦距离平均，单调对应角度误差。论文报告在 DySAM 验证集上球坐标加双向门控循环单元为 18.52 度，单位向量加双向门控循环单元为 16.76 度，单位向量加 Transformer 编码器为 12.87 度；只用 DySAM 训练在 DySAL 验证集上为 48.92 度，联合 DySAM 加 DySAL 训练降到 36.62 度，说明单位向量表示和 Transformer 以及辅助数据的多样声事件监督都有帮助。定位训好后冻结。

生成网络的训练目标是重建损失加时序连续性损失加脚部接触损失的加权和，权重记为可调系数。评估器另行训练：动作自编码器用重建损失保留动作内容，条件与动作表示用 InfoNCE 对比学习对齐，训练时以 0.3 概率把整序列声源特征置零以兼容无轨迹查询。论文未报告生成器和评估器的完整优化器学习率批量细节，只说明消融采用完全相同训练流程，复现时需查附录和代码。

### 数据怎么采、怎么划分、用什么评

采集在有自然混响的室内进行，20 台 Vicon 相机以 120 赫兹同时记录人体和扬声器轨迹。声源是柱状全向扬声器，播放时移动；双耳录音用耳旁高灵敏麦克风经记录仪与动捕用时间码同步，以近似演员听到的输入。声源起始放在相对演员的前左、后左、后右、前右 4 个方位区，轨迹分直线或曲线，分冲向人或擦肩而过，并设敏感与不敏感两种反应风格，比例约 1 比 1。人体经 Mosh++ 拟合到 SMPL-X，首帧旋转到朝正方向并移到原点做规范化。

DySAM 含 2336 条 10 秒序列，共 23360 秒约 6.5 小时，动作 30 帧每秒，音频 48000 赫兹，覆盖 42 种音频类型、109 个音频源、8 名演员。DySAL 约 11730 秒 3.3 小时，配头部 6 自由度姿态和逐帧声源位置，声源素材来自音乐、环境和城市声库。主数据集按 8 比 1 比 1 划分训练验证测试。评测用自训评估器提特征算 FID、R-precision、Diversity、平均距离和本文修订的滑步比例。

读图说明：下面的采集装置图帮你确认声源、场地和同步方式，避免把全向扬声器误解为固定音箱，注意 3 张子图从左到右的对应关系。

> **看图路径：** 1. 先看左侧全向扬声器作为可移动声源的外观；2. 再看中间动捕棚和穿动捕服的人体的站位与地面格；3. 最后看右侧动捕软件界面里同步重建的人体与声源

[![原论文 Figure 3：Data Collection Setup.](https://arxiv.org/html/2610.24522v1/mocap_setup_2.png)](https://arxiv.org/html/2610.24522v1/mocap_setup_2.png)

*论文图 3。原论文 Figure 3:：“Data Collection Setup.”。*

这张图确实可见左侧独立扬声器照片、中间动捕棚内穿动捕服的人站在格纹地面上、四周桁架相机，以及右侧动捕软件界面同步显示的人体骨架。它说明声源是可被搬动的发声体，轨迹与动作时间对齐，这是动态任务的数据基础。

**DySAM × DySAL × 运动评估器：** DySAM 是主基准，含同步双耳音频、三维人体动作和移动声源轨迹，用于训练和评测生成；DySAL 是辅助定位数据集，含多样声事件的双耳音频加头部姿态和逐帧声源标注，用于给定位网络提供空间监督；运动评估器是另训的动作自编码器加双向门控循环单元的条件分支，用重建加对比学习把动作和音频加轨迹映射到共享空间，用来算 FID 和 R-precision，三者分工为生成、定位监督和评测。

**R-precision × FID × 滑步比例：** R-precision 是在 32 条一批的检索池里看正确动作能否排进前 1、前 2、前 3，衡量音频加轨迹条件与动作的对齐，越高越好；FID 是生成动作特征分布与测试集真值分布的距离，衡量保真度，越低越好；滑步比例统计有脚触地却无稳定支撑脚的帧占比，衡量脚部物理合理性，越低越好，三者分别回答像不像、对得上、物理是否可信。

### 主结果在什么条件下比基线好

在 DySAM 测试集上，所有基线在同一划分重训且换成传统声学特征，MOMO 在 R-precision 前 1、前 2、前 3、FID 和滑步比例上都是基线中最好，Diversity 和平均距离也最接近真值。真值 R-precision 前 1 为 0.720，FID 为 0.001，滑步为 1.26；MOMO 对应为 0.623、0.857、1.66，而用真值声源位置的 MOSPA 为 0.585、5.160、3.69，MoMask++ 的 FID 为 3.909 但滑步高达 14.11。这支持在动态声源下，预测的头中心方向加逐帧 CLAP 比静态坐标或全局特征更能兼顾保真、对齐和脚部合理性。用户研究 30 人 10 组案例也显示 MOMO 在真实感流畅度和音频对齐两项被选最多。

下面五列定性对比按方法分行、按音频内容分列，底部同时给出内容描述和期望动作，可以对照声源轨迹与人体朝向判断空间一致性，图中蓝色点线为声源轨迹、红色点线为人体位移。

> **看图路径：** 1. 先按行看 EDGE、POPDG、MoMask++、MOSPA 与本文方法的人体姿态；2. 再按列看蓝色声源轨迹从远到近时人是弯腰、捂头还是远离；3. 对照最下两行音频内容与期望动作，判断哪行更贴合文字描述

[![原论文 Figure 6：Qualitative comparison of state-of-the-art methods for the dynamic spatial audio-to-motion task.](https://arxiv.org/html/2610.24522v1/qualitative.png)](https://arxiv.org/html/2610.24522v1/qualitative.png)

*论文图 6。原论文 Figure 6:：“Qualitative comparison of state-of-the-art methods for the dynamic spatial audio-to-motion task. We visualize motion results from five cases.”。*

这张图确实可见从小猫叫到汽车轰鸣的 5 个案例，本文方法在小猫处弯腰逗弄、在打喷嚏处捂鼻、在枪声暴雨处弯腰捂头远离，而部分基线出现扎堆或朝向错位。它直观展示了数量表里的对齐差距，但仍是抽样可视化，不能代替全测试集统计。

下面这张表是论文报告的 DySAM 测试集定量对比，比较问题是在同一划分和同一查询条件下谁更保真、更对齐、更少滑步。R-precision 越高越好，FID 越低越好，Diversity 和平均距离越接近真值越好，滑步比例表头单位为百分号，数据格为原文裸数值。

| Method | R-precision Top1 | R-precision Top2 | R-precision Top3 | FID | Diversity | APD | Skating Ratio (%) |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Real Motion | 0.720 ± 0.000 | 0.886 ± 0.000 | 0.976 ± 0.000 | 0.001 | 29.66 ± 0.512 | 45.53 | 1.26 |
| EDGE (Tseng et al., 2023) | 0.457 ± 0.006 | 0.730 ± 0.010 | 0.819 ± 0.009 | 7.498 ± 0.485 | 27.49 ± 0.119 | 35.44 | 9.23 |
| POPDG (Luo et al., 2024) | 0.462 ± 0.006 | 0.681 ± 0.005 | 0.782 ± 0.004 | 5.727 ± 0.485 | 28.15 ± 0.141 | 34.99 | 2.77 |
| MOSPA (Xu et al., 2025) | 0.585 ± 0.013 | 0.788 ± 0.009 | 0.885 ± 0.006 | 5.160 ± 0.875 | 33.50 ± 0.583 | 50.29 | 3.69 |
| MoMask++ (Guo et al., 2025) | 0.415 ± 0.006 | 0.656 ± 0.008 | 0.775 ± 0.009 | 3.909 ± 0.331 | 28.39 ± 0.787 | 38.24 | 14.11 |
| MOMO (Ours) | 0.623 ± 0.004 | 0.824 ± 0.003 | 0.920 ± 0.004 | 0.857 ± 0.082 | 28.97 ± 0.636 | 42.60 | 1.66 |

MOMO 的检索查询用的是真值双耳音频加真值声源轨迹，与各生成器内部条件无关，因此对所有方法同一。代价是评估器本身在 DySAM 上训练，可能偏好该分布；且滑步是本文修订定义，原 GMD 定义在真值上会报 13.90%，本文定义为 1.26%，换定义结论会变。未胜出项是 R-precision 仍低于真值 0.720 到 0.623 的差距，说明仍有提升空间，结论限于室内单移动声源。本表数值与单位依据论文 PDF。

### 去掉空间线索、内容表示或校正会怎样

消融固定训练流程，只换一处。声源组：去掉声源条件后 R-precision 前 1 从完整模型的 0.623 掉到 0.359，说明空间线索对对齐关键；换成世界坐标位置后 FID 从 0.857 升到 2.222，说明头中心方向比绝对坐标更有效；换成真值方向后前 1 升到 0.673、FID 降到 0.726，为上限参考，表明定位精度仍是瓶颈。音频组：换成手工传统特征后 FID 到 2.343、滑步到 4.68，换成全局 CLAP 池化后 FID 到 6.693，说明逐帧内容表示对高质量动作重要。网络组：去掉强度预测后各项变差，去掉整个校正后 FID 到 4.458，换主干为 Transformer 解码器后前 1 到 0.627，说明显式逐帧校正和编码器主干的选择都有贡献。

下面这张表整理定位网络的结构与数据消融，比较问题是单位向量是否优于球坐标、Transformer 是否优于双向门控循环单元、联合 DySAL 训练是否降低新分布误差。指标是全帧角度误差，单位为度，越低越好，数据格为原文裸数值。

| Condition | Angular Error |
| --- | --- |
| Spherical plus Bi-GRU on DySAM val | 18.52 |
| Unit vector plus Bi-GRU on DySAM val | 16.76 |
| Unit vector plus Transformer on DySAM val | 12.87 |
| DySAM only on DySAL val | 48.92 |
| DySAM plus DySAL on DySAL val | 36.62 |

12.87 明显好于 18.52 和 16.76，支持本文采用单位向量加 Transformer。但该对比只在 DySAM 验证集上测得，DySAL 验证集误差仍高达 36.62，说明换声事件分布后泛化仍有限。结合上一段，生成质量的上限仍受定位误差制约，多声源、强混响或户外未在本文评测。

### 本文的结论边界和未验证范围

论文明确限定为单个显著移动声源，多声源同时出现时的分离、定位与行为相关性留作未来工作。数据来自室内自然混响、全向扬声器播放、耳旁麦克风录音，演员 8 人、反应风格二分类，声事件虽多但仍是摆拍反应，不能等同真实突发场景。定位在 DySAL 多样事件上误差仍高，生成对真值方向有依赖，说明嘈杂或遮挡下可能退化。机器人演示只是用 GMR 重定向到人形机器人再用预训练控制器在 MuJoCo 跟踪，以及用通用控制器做真机模仿的初步证据，未做成功率、延迟和安全评测，不能当作部署结论。

容易误解的是把预测方向等同于真值位置：前者是头坐标系单位向量，只给方向不给距离，距离信息需靠响度和主动帧等线索间接体现；把 FID 低等同于人眼自然：FID 只是评估器特征分布距离，受评估器训练分布影响，需结合 R-precision、滑步和用户研究一起看。

### 要复现第一步做什么、需要什么

复现先分两步：先复现定位，再复现生成。定位需按附录实现双耳特征：40 毫秒汉明窗、2048 点傅里叶变换、33.3 毫秒跳步、保留 256 频点，构造平均幅度、相位差正余弦、强度差 4 通道，对齐到 300 帧；再训卷积加 4 层 Transformer 结构，用头中心单位向量做余弦损失，需 DySAM 加 DySAL 的头部姿态与声源位置。生成需把双耳平均成单声道进冻结 CLAP 做逐帧对齐，加上预测方向、类型标签和扩散步嵌入训练条件扩散去噪器，动作转 272 维表示，加时序与脚接触损失。

论文称接受后将公开数据集、代码、预训练模型和处理脚本，当前只能确认论文中提到的项目页链接本次可达，不代表作者资源已开源。传统声学特征一侧每耳 335 维、双耳拼接 670 维，帧率同样 30 赫兹。下表为原文传统特征集的前 6 项构成，复现评估器和基线条件时会用到，完整表含节拍、能量与主动帧，主动帧阈值均方根能量大于 0.01。

| Feature Name | Dimension |
| --- | --- |
| MFCC | 20 |
| MFCC delta | 20 |
| constant-Q chromagram | 12 |
| STFT chromagram | 12 |
| onset strength | 1 |

该表说明基线和评估器用的手工特征维度来源，MOMO 主模型用的是逐帧 CLAP 而非这套特征，消融中两者对调后性能下降正说明表示选择的影响。复现时注意采样率 48000 赫兹、快速傅里叶窗 2048、跳步 1600、汉窗的设置，以及帧不对齐会导致条件错位，缺任一项都需回查附录。

### 什么时候值得尝试 MOMO 思路

当你的任务是单移动声源、能拿到双耳音频、且希望角色或机器人随声音方位持续调整动作时，这套定位加理解再扩散加逐帧校正的思路值得尝试：它避免了真值坐标，更贴近只能靠听觉的具身体验，且对快速经过的声源仍能保持方向跟随。类型标签还能在同一音频下切换敏感与不敏感，得到大幅躲避或克制反应的可控变化。

下面这张音频类型表帮你判断覆盖范围，若你的声事件落在这些日常、动物、车辆、语音报警之内，迁移更可预期，若是音乐舞蹈或多人交叠，则超出本文验证，表中每种含 1 到 6 个音频源、每个源配 8 到 32 条动作，共 2336 对。

| Audio Type |  |  |  |
| --- | --- | --- | --- |
| alarm | bark | bicycle_bell | bird |
| car_bidirect | car_fast | car_slow | cat |
| cough | drill | drill_laugh | engine_slow |
| firework | gun_hand | gun_machine | helicopter |

该表列出 DySAM 的 42 种音频类型，它说明多样性但也暴露局限：每种样本量有限，8 名演员的风格可能被模型记住，换新声源或新房间需补验证。总体看，MOMO 在本文室内单声源基准上提供了更实用且对齐更好的方案，但跨房间、户外、多声源与实时开销仍待验证，不宜夸大为通用听觉反应解法。

<details>
<summary>📎 论文与评分元数据</summary>

排名：前50% | 文档类型：数据集与基准 | [arXiv 原文](https://arxiv.org/abs/2610.24522v1)

</details>

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。

- 评分规则：type-aware-v1

- 评分模型：muse-spark-1.3-contributor

- 评分请求协议：openai_responses

---

[← 返回 2026-10-20 语音/音乐/音频论文速递](/audio-paper-digest-blog/posts/2026-10-20/)
