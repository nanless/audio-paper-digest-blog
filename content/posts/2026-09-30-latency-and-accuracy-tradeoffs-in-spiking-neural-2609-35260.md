---
title: "Latency and accuracy tradeoffs in Spiking Neural Networks"
date: 2026-09-30
draft: false
tags: [关键词检测, 形式化分析, 高效推理, 语音]
categories: [论文速递]
description: "论文针对语音指令识别中脉冲神经网络被认为比比特串行量化网络更慢的问题，提出带延迟控制的发放内核与流水延迟搜索，在匹配映射下用建模核延迟证明跨时间步重叠可更快，并在 GSC 上以 96.31% 精度达到 119.64 μs 建模延迟，代价是等待位置选错会同时变慢变差。"
hiddenInHomeList: true
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_arxiv_id: "2609.35260"
paper_digest_workbench_contract: "researcher-workbench-v1"
paper_digest_reader_title: "算得更多却结束更早：用逐层等待控制脉冲网络的延迟与精度"
paper_digest_original_title: "Latency and accuracy tradeoffs in Spiking Neural Networks"
paper_digest_arxiv_version: null
paper_digest_arxiv_versioned_id: null
paper_digest_arxiv_abs_url: "https://arxiv.org/abs/2609.35260"
paper_digest_arxiv_pdf_url: "https://arxiv.org/pdf/2609.35260.pdf"
paper_digest_primary_task: "关键词检测"
paper_digest_taxonomy_contract: "paper-taxonomy-flat-tags-compat-v1"
paper_digest_taxonomy_selection_contract: "paper-taxonomy-selection-v1"
paper_digest_taxonomy_registry_version: "paper-taxonomy-v1"
paper_digest_taxonomy_registry_sha256: "a3b75a149852076933ec2895de77c09c73667c8334bff046dde3b20b69ded03d"
paper_digest_taxonomy_concepts: [{"facet":"task","id":"task.keyword-detection","label":"关键词检测"},{"facet":"method","id":"method.formal-analysis","label":"形式化分析"},{"facet":"research_focus","id":"research_focus.efficiency","label":"高效推理"},{"facet":"signal","id":"signal.speech","label":"语音"}]
paper_digest_primary_method: "形式化分析"
paper_digest_score: 6.9
paper_digest_rank_bucket: "前50%"
paper_digest_document_type: "方法研究"
paper_digest_one_sentence: "论文针对语音指令识别中脉冲神经网络被认为比比特串行量化网络更慢的问题，提出带延迟控制的发放内核与流水延迟搜索，在匹配映射下用建模核延迟证明跨时间步重叠可更快，并在 GSC 上以 96.31% 精度达到 119.64 μs 建模延迟，代价是等待位置选错会同时变慢变差。"
paper_digest_authors: [{"affiliations":["Department of computer science, National University of Singapore"],"name":"Zhanglu Yan"},{"affiliations":["Department of computer science, National University of Singapore","Shanghai Advanced Research Institute, Chinese Academy of Science","University of Chinese Academy of Sciences, Beijing"],"name":"Zixuan Zhu"},{"affiliations":["Department of computer science, National University of Singapore"],"name":"Kaiwen Tang"},{"affiliations":["School of Artificial Intelligence, Shandong University"],"name":"Yuyang Cai"},{"affiliations":["School of Artificial Intelligence, Shandong University"],"name":"Qianhui Liu"},{"affiliations":["Department of computer science, National University of Singapore"],"name":"Weng-Fai Wong"}]
paper_digest_abstract_sha256: "3e2f669069100ba80a6a27bca7ba77ecefaa9055c057186df74c1669f5ac9fa3"
paper_digest_sidecars: {"citation.bib":{"sha256":"b6aab1ab434756c60d583e7c29f1a9d1846867df135d48576bc5a10188f8cafa","url":"/audio-paper-digest-blog/data/papers/2026-09-30/2609-35260/citation.bib"},"citation.json":{"sha256":"18509839c01f15c221472f11e13fca431414136716ff372aab9089d74a87a404","url":"/audio-paper-digest-blog/data/papers/2026-09-30/2609-35260/citation.json"},"citation.ris":{"sha256":"d3972c175dae68077bd7139ffec559f7d9c101b59010fe644099aeb52aaf9950","url":"/audio-paper-digest-blog/data/papers/2026-09-30/2609-35260/citation.ris"},"rethink-context.json":{"sha256":"a9a9018ad971c83ad4de2684537b0fece2ffb736527aa4d5f4fab16e9dc8283c","url":"/audio-paper-digest-blog/data/papers/2026-09-30/2609-35260/rethink-context.json"}}
paper_digest_api_reader_contract: "beginner-researcher-v3"
paper_digest_api_reader_article_sha256: "0bf91eed529f9248e031a0d7b75db9df475195d79015da6beab14d31d7fcd5fb"
paper_digest_api_reader_plan_sha256: "0520686bc221daa85f76c734485c90482754aecbbf79cecf0df3437f86302168"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings-v4"
paper_digest_api_reader_source_bindings_sha256: "7d316d0bcdb85bdf927c9abf92ece69f2be676ae4699d1ab7ab7e82169ffe478"
paper_digest_api_reader_source_table_count: 4
paper_digest_api_reader_source_formula_count: 5
paper_digest_api_reader_structured_artifacts_sha256: "d617f9b5fcaadf1b806f182f336c98b8157f1139289be9973015a2bd7f6ead77"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity-v1"
paper_digest_api_reader_author_identity_sha256: "dbe6f9d06133e4d0b223003acc9089c39c1955b98c69b589d9228dfb3fea0d50"
paper_digest_api_reader_author_count: 6
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity-v1"
paper_digest_api_reader_resource_identity_sha256: "3b253a3d1ab9613ae093ec1e1d6eeb87dbe8873563d899e02909034bc8cca36a"
paper_digest_api_reader_resource_count: 0
paper_digest_api_reader_figure_persistence: "ephemeral-no-persisted-figure-assets-v1"
paper_digest_api_reader_decision_projection: "api-reader-decision-projection-v2"
---

# 📄 算得更多却结束更早：用逐层等待控制脉冲网络的延迟与精度

> 英文题目：*[Latency and accuracy tradeoffs in Spiking Neural Networks](https://arxiv.org/abs/2609.35260)*

> 标签：#关键词检测 | #形式化分析 | #高效推理 | #语音
>
> 评分：**6.9/10** | 创新 1.5/2 | 技术严谨 1.3/1.5 | 实验充分 1/1.5 | 清晰度 0.8/1 | 影响力 1/1.5 | 开源 0/1.5 | 可复现 0.3/0.5 | 工程/实践 1/1.5


## 👥 作者与机构

- Zhanglu Yan：Department of computer science, National University of Singapore
- Zixuan Zhu：Department of computer science, National University of Singapore；Shanghai Advanced Research Institute, Chinese Academy of Science；University of Chinese Academy of Sciences, Beijing
- Kaiwen Tang：Department of computer science, National University of Singapore
- Yuyang Cai：School of Artificial Intelligence, Shandong University
- Qianhui Liu：School of Artificial Intelligence, Shandong University
- Weng-Fai Wong：Department of computer science, National University of Singapore

## 📌 核心摘要

语音指令识别输入为1秒语音波形或仿生耳蜗事件流，输出为35类指令标签，难点在于脉冲神经网络需多时间步累积发放精度而传统认知认为其必然慢于比特串行量化网络。所提框架Falcon先用延迟可控发放内核控制每层累积多少输入才做发放决策并向下游转发脉冲，形成带可调等待量的脉冲序列并输出延迟候选进入搜索。再用流水线延迟搜索在验证集精度与建模核时延之间贪心评估每层增加等待的收益，选出的固定延迟调度送入训练阶段做适配。最后在固定延迟下做脉冲量化感知训练与阈值和初值微调，将搜索到的低延迟结构恢复至可用精度。与比特串行量化网络需等全部比特累积后才能量化输出不同，该方法允许下游提前消费上游部分时间步，从而用更多局部轮次换更短端到端时延。在GSC评测设置下，Falcon-Medium的建模核时延指标为119.64 μs，低于匹配量化网络的建模核时延指标130.86 μs。结论仅适用于空间模拟存算映射与共享数字引擎的建模时延，不保证吞吐提升与真实芯片一致。原文未披露训练、推理或部署成本。

## 🔗 开源与复现资源

本次未形成可展示的已核验资源记录，开放状态尚未核实。

可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 输入是什么，目标是什么，为什么延迟值得单独研究？

论文研究的输入是语音指令识别的声学表示。谷歌语音指令第二版使用对数梅尔谱，每条 1 秒 16 千赫单声道波形经 480 点快速傅里叶变换、480 点汉宁窗、160 点跳步和 64 个梅尔滤波器处理，得到 98 帧乘 64 维特征，并按整张谱的均值方差归一化。脉冲语音指令则使用耳蜗脉冲表示，按 10 毫秒分箱并把 700 个通道每 5 个求和压缩到 140 维。目标都是 35 类指令分类。相关路线包括量化神经网络的比特串行执行和脉冲神经网络的速率编码执行。

已有脉冲语音工作更关注精度与能效，延迟讨论多停留在时间窗长度。论文要回答的是端到端推理延迟：在相同阵列映射与转换精度下，脉冲网络是否一定比量化网络慢。必须保留的信息是所有延迟都是建模网络核延迟，从可用源激活到最后一个 Transformer 块，不含完整系统开销；精度是测试集或验证集分类精度；资源状态为 NONE，因此不声称代码模型数据已公开。

### 同输入同目标的已有方法如何比较？

在相同语音指令输入与分类目标下，论文对照了 3 类可比对象。第一类是匹配量化网络，作为延迟预算的基准，采用比特串行执行，每位平面需要 1 次模拟通过。第二类是全前视脉冲网络，即延迟等于时间槽数的非流水对应版本，精度高但延迟长。第 3 类是已发表脉冲语音方法，包括 SpikeSCR、SpikCommander、时域反向传播类延迟模型与状态空间变体。

论文明确指出多数已有工作不报告硬件延迟，因此附录用相同尺寸数字阵列重建了若干代表模型的建模延迟，而不是把时间步数直接当延迟。这种对照避免把类别差异当成同条件胜负：参数量、时间槽、阵列数量与是否流水都影响延迟，只有映射与计时边界一致时比较才有意义。

### 为什么更多时间步不一定意味着更慢？

直觉是表示 8 个等级时量化网络需 3 轮比特串行，而速率脉冲网络需 7 个时间槽，若每轮时间相同，脉冲每层更慢。但端到端延迟还取决于下一层何时能启动。论文考虑的比特串行量化基线必须累积全部 3 位贡献并量化后才产生输出。积分发放神经元则可以在只处理部分输入后就发放并向下游传播。因此不同层可以处理不同时间槽而并行，层间等待减少，可能整体更早完成。

反方向的直觉是多等一会儿应更准。但脉冲一旦发出无法撤回，后续输入即使能抵消早先贡献也无法收回已发送脉冲。更关键的是论文发现并证明，即使某层最终脉冲计数不变，脉冲时刻变化仍可改变下游是否过阈值，从而出现等更久反而更慢且更不准的情况。所以问题不是统一加延迟，而是选择哪些层等待、等多久。

### Falcon 全景：一个样本走完需要哪几步？

Falcon 是细粒度延迟分析与可控发放框架。沿一个样本走：输入编码器用卷积加批归一化加脉冲编码产生输入脉冲流；流水主干经两个卷积延迟可控发放级和两个全连接延迟可控发放级，把通道与特征展平为 160 维序列；每个 Transformer 块并行计算查询、键、值投影，查询与键在累积完整输入窗后量化，值用全前视发放，注意力用 ConSmax 代替 Softmax 以避免最大值与求和归约，支持逐元素流水；注意力输出投影与前馈两层各用延迟可控发放，残差分支按逻辑槽对齐做缩放调整、批归一化与发放。

最后对脉冲计数解码、归一化、时间平均池化并送入 35 类分类器。静态权重的卷积与线性投影映射到模拟存内计算，输入相关的查询键乘积与注意力值乘积放在数字端执行。搜索与训练随后解决延迟选择与参数适配。
为理解重叠方式，先看跨时间步流水与延迟内核的示意。

> **看图路径：** 1. 先看左图无流水与有流水两组横条的起止关系，确认后层是否提前启动；2. 再看右图 δ=1、3、7 三行中积分段长度与第一次发放箭头的位置差异；3. 对照输入槽 0 到 6 的编号，数每种 δ 下输出槽与所需输入槽的对应关系

[![原论文 Figure 1：Cross-timestep pipelining and firing delay in SNNs.](https://arxiv.org/html/2609.35260v1/figure_pipeline_intro_general.svg)](https://arxiv.org/html/2609.35260v1/figure_pipeline_intro_general.svg)

*论文图 1。原论文 Figure 1:：“Cross-timestep pipelining and firing delay in SNNs.”。*

左图对比了无流水时层与层串行等待全部槽完成，与有流水时后层提前启动并更早结束。右图展示延迟为 1 时每到一个输入槽就做 1 次发放判决，延迟为 3 时先积分一段再开始逐槽判决，延迟为 7 时等全部输入到齐才开始判决。图中横轴是物理时间，纵轴是不同延迟行，箭头标记发放时刻，下方橙色小格标记已累积的输入槽编号。这说明延迟的本质是每个输出槽需要看到的最后一个输入槽的位置。

### 延迟可控发放内核如何计算？

每个发放层处理 T 个输入槽并做 T 次发放判决。设输入脉冲为二进制，输出神经元的归一化电流是权重与输入脉冲乘加后再乘固定输出缩放。输入无关的静态项平均分到 T 个槽。膜电位初值为二分之一加可学偏移，无泄漏，每输出槽至多发放一个脉冲并发放后做软复位。延迟决定第 t 个输出槽需要等到的最后一个输入槽。

内核用指针记录下一个未处理输入槽，按顺序等待并累积电流，满足需求后做阈值比较并发放，随后把该输出槽注册并传给下游。下游算子收到已生成的槽就可开始，不必等上游全部完成。

**跨时间步流水 × 发放延迟：** 跨时间步流水负责让相邻层在不同时间槽上并行，前层算后面槽时后层已开始算前面槽；发放延迟负责规定每层做一次发放判决前必须累积几个输入槽。两者搭配的原因是无约束的提前发放会传播不可撤回的错误脉冲，而延迟给出了控制重叠程度的旋钮，组合意义是把端到端延迟从每层局部轮数之和变成依赖图上的关键路径。

符号与计算目标如下：电流公式说明每个时刻的输入如何变成电流。

\[I_{j}^{l}(t)=\gamma_{j}^{l}\sum_{i}w_{ij}^{l}s_{i}^{l-1}(t),\]

截止槽公式说明延迟如何把输出索引映射到所需输入前缀。

\[t_{\mathrm{e}}=\min(t+\delta^{l}-1,T-1).\]

膜更新公式说明等待到的每个输入槽如何累加静态分量与电流。

\[V_{j}^{l}\leftarrow V_{j}^{l}+\frac{I_{j,0}^{l}}{T}+I_{j}^{l}(t_{\mathrm{s}}),\qquad t_{\mathrm{s}}\leftarrow t_{\mathrm{s}}+1.\]

发放与复位公式说明阈值判决与残余保留方式。

\[s_{j}^{l}(t)=\mathbf{1}[V_{j}^{l}\geq\theta_{j}^{l}],\qquad V_{j}^{l}\leftarrow V_{j}^{l}-\theta_{j}^{l}s_{j}^{l}(t),\]

当延迟为 1 时每个输入槽后紧跟 1 次判决；当延迟为 T 时先累积全部输入再开始判决，退化为全前视。

### 网络结构与映射如何支撑流水？

主干与 Transformer 的划分服务于映射。编码器后主干保留时间 token 数，卷积步幅只在特征轴下采样。Transformer 隐藏维 160、5 头、每头 32 维，前馈为 160 到 320 再到 160。残差后的归一化与发放也是可搜索延迟点。查询与键用完整前缀，值与上下文保持全前视，不参与搜索。

注意力量化器在所有头间共享一个尺度。硬件上静态卷积与线性投影走模拟阵列，数字单元负责累加部分和、固定缩放、神经元更新、残差加法与缓冲。延迟计时来自模拟读出与数字执行周期，并考虑输入依赖、层间等待与计算重叠。

**积分发放神经元 × 软复位：** 积分发放神经元负责把多个输入槽的电流累加到膜电位并与阈值比较产生二进制脉冲；软复位负责发放后只从膜电位减去阈值而不清零残余。搭配原因是论文需要用脉冲计数表示多值激活，保留残余才能近似数值大小，组合后延迟改变只改变发放时刻和计数误差，而不改变权重本身。

下表给出两种规模的共有配置，可核对复现时的层数与维度。

| Component | Falcon-Medium | Falcon-Large |
| --- | --- | --- |
| Transformer blocks | 3 | 5 |
| Hidden dimension | 160 | 160 |
| Attention heads | 5 | 5 |
| FFN intermediate dimension | 320 | 320 |
| Total convolutional layers | 3 | 3 |
| Total FC layers | 21 | 33 |

该表说明 Medium 与 Large 除 Transformer 块数分别为 3 与 5 外其余维度相同，总卷积层均为 3 层，全连接计数含注意力与前馈在内分别为 21 与 33。这意味着延迟差异主要来自块数与所选延迟，而非隐藏维度变化。

### 流水延迟搜索与三段适配如何执行？

流水延迟搜索固定模型参数与源编码，只调整主干后、注意力输出投影、前馈层与残差加法处的可搜索延迟。搜索从全 1 延迟出发，每次把某一层提高到 2 或 3，候选需满足救援分数不小于 2、验证精度增益不小于 0.001 即 0.1 个百分点，且建模延迟仍小于匹配量化网络延迟。救援分数用变正确数减变错误数除以翻转总数的平方根衡量，避免靠大量翻转偶然涨点。两条贪心路径分别选最大精度增益与单位延迟最大增益，延迟不增加时效率视为无穷大。搜索后对非支配解保留最快、最高精度，并按归一化精度减归一化延迟选折中。

**量化感知训练 × 阈值与初始膜电位：** 量化感知训练负责在选定延迟下用脉冲前向适配网络权重，使其适应提前发放带来的分布偏移；阈值与初始膜电位负责逐神经元微调发放灵敏度和起点。搭配原因是权重决定电流大小而阈值决定何时发放，两者共同决定脉冲计数与时刻，组合意义是先搜结构性等待位置，再做参数级恢复。

选定延迟后先做 30 轮基于脉冲的量化感知训练，再固定权重只调阈值与初始膜电位 15 轮，最后联合训练权重与神经元参数 10 轮。论文报告 Large 在 GSC 上三档验证精度分别从 11.64%、73.28%、91.99% 提升到 95.88%、96.17%、96.49%，说明搜索给出的结构需经适配才能恢复精度。
搜索轨迹与随机放置的对比可从下图核对。

> **看图路径：** 1. 先看 a 子图两条搜索路径随延迟增加的精度与延迟轨迹；2. 再看 b 子图同一延迟下星形与箱线图随机放置的精度差距；3. 最后看 c 子图从转换起点经脉冲训练到阈值微调的三段爬升幅度

[![原论文 Figure 3：Delay search and training of Falcon-Large on GSC.](https://arxiv.org/html/2609.35260v1/figure2_gsc_large.svg)](https://arxiv.org/html/2609.35260v1/figure2_gsc_large.svg)

*论文图 3。原论文 Figure 3:：“Delay search and training of Falcon-Large on GSC.”。*

a 子图显示精度优先与效率优先两条路径逐步爬升并在预算线左侧收敛到三颗星；b 子图显示在相同核延迟下搜索点的验证精度明显高于 10 个随机调度的箱线分布；c 子图显示三档调度经转换起点、脉冲训练、阈值微调后均大幅回升，且相对顺序保持。这支持延迟位置比延迟数量更重要。

### 数据划分、模型规模与计时条件是什么？

谷歌语音指令含 84843 条训练、9981 条验证、11005 条测试；脉冲语音指令含 75466 条训练、9981 条验证、20382 条测试。评估模型为 Falcon-Medium 与 Falcon-Large，速率编码槽数 T 为 7，查询键前缀主结果用 7，可搜索延迟上限为 3。模拟成本来自 NeuroX 并以 1 兆比特阻变存内宏实测校准，数字延迟按 100 兆赫周期模型计算，数字能量另用 22 纳米工艺在 TT corner、0.65 伏、25 摄氏度下综合。报告的延迟均为建模网络核延迟。训练在 Ubuntu 24.04.4 LTS、两颗 AMD EPYC 9355、1 太字节内存与 4 张 96 吉字节 RTX PRO 6000 上进行，先训量化网络再转换到脉冲网络作为起点。

**模拟存内计算 × 数字引擎：** 模拟存内计算负责执行静态权重的卷积和线性投影，在阵列内完成向量矩阵乘与模数转换；数字引擎负责处理输入相关的注意力乘积、神经元更新、残差加法和缓冲。搭配原因是静态权重适合映射到固定电导，而注意力矩阵随输入变化不适合存内固定映射，组合后延迟必须按依赖图合并模拟与数字时间而非简单累加操作数。

复现时需注意变长脉冲输入的池化排除填充 token，分类器为 160 到 35；比较延迟时必须使用相同计时边界与阵列规模，否则时间步数不能直接换算为延迟。

### 主结果：在相同预算下更快还是更准？

核心比较问题是：在匹配量化网络延迟预算内，实际可运行的流水调度能否更快且精度损失小。公平条件是相同任务划分、相同映射族与建模核延迟口径，指标方向是精度越高越好、延迟越低越好。下图以 Medium 在 GSC 上的搜索为例，可见三档点均在量化延迟线左侧。

> **看图路径：** 1. 先看 a 子图 Fastest 到 Balanced 到 Accurate 三点的延迟与精度位置；2. 再看 b 子图 Balanced 与 Accurate 处随机调度的分散程度；3. 最后看 c 子图三条曲线在转换后、脉冲训练后与微调后的相对顺序

[![原论文 Figure 6：Delay search and training of Falcon-Medium on GSC.](https://arxiv.org/html/2609.35260v1/figure2_gsc_medium.svg)](https://arxiv.org/html/2609.35260v1/figure2_gsc_medium.svg)

*论文图 6。原论文 Figure 6:：“Delay search and training of Falcon-Medium on GSC.”。*

a 子图三颗星从 Fastest 经 Balanced 到 Accurate 向右上移动但仍未越过右侧虚线；b 子图显示随机调度在相同延迟下精度分散，而搜索点位于上方；c 子图显示 3 段训练后精度收敛到 96% 以上。这说明收益来自位置选择而非单纯增加等待。
下表整理最终测试精度与建模延迟，保留匹配量化网络、全前视与三档可运行调度。

| 条件 | 指标 | 匹配量化网络 | 全前视 | 最快可运行 | 折中可运行 |
| --- | --- | --- | --- | --- | --- |
| GSC Medium | 测试精度与核延迟 | 96.68% 与 130.86 μs | 96.68% 与 252.44 μs | 96.11% 与 115.82 μs | 96.31% 与 119.64 μs |

表后解释：GSC Medium 折中档比匹配量化快约 11 μs，精度低 0.37 个百分点；SSC Medium 折中档比最快档多 7.58 μs 换 1.78 个百分点增益，仍快于匹配量化。未胜出项是 SSC 最快档仅 81.24%，说明全 1 延迟在该数据上损失较大，必须增加 stem 与深层等待。全前视精度最高但延迟翻倍以上，因此不能作为低延迟方案。原文未提供统计显著性与多次随机种子的方差，判断限于单次报告值。

### 多等为何有时更慢更差？

要检验的机制是统一加延迟与单边界加延迟的效果。论文固定权重与神经元参数，先把所有可搜索层统一设为相同延迟，再每次只动一个边界。Large 在 GSC 上统一延迟从 1 到 2 时建模延迟从 180.42 μs 升到 231.24 μs 附近，而验证精度从 11.64% 降到 4.28%，呈现更慢更差。单边界实验显示有的边界加延迟涨十余个百分点，有的边界降 8 个百分点，说明等待效果高度依赖位置。

**脉冲计数误差 × 任务精度：** 脉冲计数误差负责度量某层在延迟 δ 下相对全前视的最终脉冲数之差；任务精度负责度量整个数据集上分类正确的比例。搭配原因是定理证明增大等待不会增大本层计数误差，但命题证明下游神经元对脉冲到达顺序敏感，组合意义是不能用本层计数保住来保证端到端正确，必须用验证精度直接搜索等待位置。

计数与精度的形式化定义如下，误差相对全前视计算。

\[\widehat{q}_{j}^{l}(\delta)=\sum_{t=0}^{T-1}s_{j}^{l}(t;\delta),\qquad e_{j}^{l}(\delta)=\left|\widehat{q}_{j}^{l}(\delta)-\widehat{q}_{j}^{l}(T)\right|.\]

定理给出增大延迟不会增大本层计数误差且误差上界为剩余槽数，但命题用构造证明存在三档延迟使本层计数全对而任务精度先降后升。直觉是下游在延迟 1 下按槽内求和再判决，若正负脉冲同槽到达则抵消，若正先到则先发放而负无法撤回，时刻偏移改变抵消时机。
下图是 Large 的完整消融证据。

> **看图路径：** 1. 先看 a 子图统一延迟从 1 变到 7 时验证精度与建模延迟的走向；2. 再看 b 子图下表不同边界上 1 到 2 与 1 到 3 的精度变化正负分布；3. 最后看 d 子图绿色筛选区内外散点的救援分数与翻转数关系

[![原论文 Figure 2：Effects of firing delay on Falcon-Large accuracy and latency.(a) Accuracy and latency under…](https://arxiv.org/html/2609.35260v1/figure1_gsc_large.png)](https://arxiv.org/html/2609.35260v1/figure1_gsc_large.png)

*论文图 2。原论文 Figure 2:：“Effects of firing delay on Falcon-Large accuracy and latency.(a) Accuracy and latency under uniform delays.”。*

a 子图显示统一延迟曲线先降后升；b 子图下表给出每边界 1 到 2 与 1 到 3 的精度变化；c 子图挑出正增益、微负与大负 3 条代表；d 子图绿色区为通过救援分数与增益门限的候选。这支持搜索必须用任务级翻转统计而非本层误差。

### 位置选择与前缀截断各带来多少？

比较问题是：在相同延迟分布与相同延迟值下，搜索选的位置是否优于随机位置；以及缩短查询键前缀能否进一步降延迟。公平条件是相同初始化、相同训练轮数与相同核延迟，指标为验证与测试精度。下表对比折中调度与随机调度的测试表现。

| 条件 | 指标 | 搜索调度测试精度 (%) | 随机平均测试精度 (%) | 搜索增益 (百分点) | 延迟是否相同 |
| --- | --- | --- | --- | --- | --- |
| GSC Medium 折中 | 测试精度 | 96.31 | 96.21 | 0.11 | 是 |
| GSC Large 折中 | 测试精度 | 96.19 | 95.96 | 0.23 | 是 |
| SSC Medium 折中 | 测试精度 | 83.02 | 82.11 | 0.92 | 是 |

表后解释：搜索在 3 组上均高于随机均值，在 SSC 上优势最大达 0.92 个百分点。

但 GSC Medium 上有随机个体达 96.33 略超搜索，说明单次随机可能偶然接近，平均仍不及搜索。未评测边界是更大随机样本数与多种子方差，该表只用于说明位置选择的作用，不改变延迟相同的公平前提。
另 1 维度的比较问题是：在固定折中延迟调度下，把查询键前缀 p 从全前缀 7 逐步截短，能否进一步降低核延迟，以及截断后适配能否恢复精度。公平条件是保持 T 为 7 与延迟调度不变，全前缀作为固定参照而不追加训练，截短设置各自从参照出发独立适配。

下表整理前缀消融的延迟与测试精度。

| 前缀 p | 核延迟 (μs) | 适配前测试精度 (%) | 适配后测试精度 (%) | 与全前缀参照的差异 |
| --- | --- | --- | --- | --- |
| 7 参照 | 119.64 | 96.31 | 参照无追加训练 | 基准 |
| 6 | 114.00 | 96.17 | 96.33 | 与 96.31 相当 |
| 4 | 102.72 | 84.65 | 95.92 | 需大幅恢复 |
| 3 | 97.08 | 71.04 | 91.15 | 低 5.16 个百分点 |

表后解释：把前缀从 7 减到 6 时核延迟从 119.64 降到 114.00，降幅为 4.71%，适配后测试精度为 96.33，与全前缀的 96.31 相当；减到 5 时延迟降低 9.43% 而精度保持 96.13；减到 4 时需从 84.65% 恢复到 95.92%，对应延迟为 102.72；减到 3 时仅从 71.04% 恢复到 91.15%，仍低 5.16 个百分点。

因此前缀截断是额外权衡，但激进截断难以完全恢复，该边界与随机调度比较相互独立。

### 哪些结论有边界，不能直接推广？

第一，延迟是建模值而非流片实测，依赖 NeuroX 校准、100 兆赫数字模型与特定阵列划分，换工艺、电压、温度或阵列数量会改变绝对数值。第二，能量分两套口径：全数字假设下按操作数乘单位能量得到 Medium 折中每推理 0.01405 毫焦，含模拟与数字的建模核能量则为 0.75 与 1.06 毫焦，两者覆盖范围不同，不能混用。第三，论文聚焦单样本核延迟而非吞吐率，提前完成一个样本不等于单位时间完成更多样本，资源共享与缓冲会改变吞吐。

第四，搜索上限为 3 且查询键用完整前缀、值与上下文固定全前视，结论限于该搜索空间；附录前缀实验表明更短前缀可行但需重训。第五，对比表中多数已有方法的延迟为作者重建而非原论文报告，重建假设见附录，跨表比较时应视为估计而非实测。

### 复现先做什么，需要哪些超参数？

先按划分准备数据：谷歌指令做 1 秒裁剪或右补零、梅尔谱与整张归一化；脉冲指令按 10 毫秒分箱并压缩到 140 通道。模型按 Medium 三块或 Large 五块搭建，隐藏维 160、5 头、前馈 320、T 为 7，输入编码器为 5 乘 5 卷积 1 到 32 通道，主干为 3 乘 3 卷积 32 到 48 与 48 到 48 加两层全连接到 160。搜索时固定权重与源编码，从全 1 出发，候选门限取救援分数不小于 2、增益不小于 0.001、延迟小于匹配量化延迟，上限 3，保留非支配解并选最快、折中与最准。训练按 30 轮脉冲量化感知、15 轮阈值与初值微调、10 轮联合的顺序执行，用验证精度选检查点。

计时需复用模拟读出加数字周期的依赖图合并，而非累加操作数。缺项是论文未公开代码权重，资源状态为 NONE，本次未能确认可达，因此复现需自行实现内核与映射。

### 何时值得尝试，还需补哪项验证？

当任务是低功耗语音指令且硬件允许模拟存内映射与数字引擎协同、延迟预算略低于匹配量化网络时，值得尝试延迟可控流水：先用全 1 调度拿到延迟下界，再用搜索在预算内挑选少数值得等待的边界，最后做 3 段适配。常见误解是脉冲槽数多必然更慢，或等待越久必然更准；论文的反例是统一延迟从 1 到 2 在 Large 上同时变慢变差，而单边界等待可正可负，因此必须逐边界用验证翻转统计筛选。

若要部署，还需补的验证包括多种子方差、流片或 FPGA 实测延迟、含存储与通信的端到端能量，以及更长语音与噪声下的稳定性。总体上，Falcon 报告显示脉冲网络可以算得更多却结束更早，但前提是等待位置选对并经训练恢复，否则重叠的收益会被不可撤回的提前发放抵消。

<details>
<summary>📎 论文与评分元数据</summary>

排名：前50% | 文档类型：方法研究 | [arXiv 原文](https://arxiv.org/abs/2609.35260)

</details>

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。

- 评分规则：type-aware-v1

- 评分模型：muse-spark-1.3-contributor

- 评分请求协议：openai_responses

---

[← 返回 2026-09-30 语音/音乐/音频论文速递](/audio-paper-digest-blog/posts/2026-09-30/)
