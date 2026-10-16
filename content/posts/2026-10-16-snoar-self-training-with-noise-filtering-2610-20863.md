---
title: "SNOAR: Self-training with Noise filtering, Observation adding, and Remixing for Speech Denoising Without Clean References"
date: 2026-10-16
draft: false
tags: [语音增强, 自监督学习, 知识蒸馏, 语音]
categories: [论文速递]
description: "SNOAR 在重混之前先用教师自身的噪声估计滤除语音通道的残留噪声再按比例加回原始含噪观测，在 WHAM!上从 MixIT 教师接近监督上限，在真实 CHiME-3 上稳定改善感知与识别，而代价是加回比例与滤波必须搭配使用。"
hiddenInHomeList: true
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_arxiv_id: "2610.20863"
paper_digest_workbench_contract: "researcher-workbench-v1"
paper_digest_reader_title: "没有干净语音时怎样做教师学生自训练去噪"
paper_digest_original_title: "SNOAR: Self-training with Noise filtering, Observation adding, and Remixing for Speech Denoising Without Clean References"
paper_digest_arxiv_version: 1
paper_digest_arxiv_versioned_id: "2610.20863v1"
paper_digest_arxiv_abs_url: "https://arxiv.org/abs/2610.20863v1"
paper_digest_arxiv_pdf_url: "https://arxiv.org/pdf/2610.20863v1.pdf"
paper_digest_primary_task: "语音增强"
paper_digest_tags_contract: "paper-tag-flat-tags-v2"
paper_digest_tags_selection_contract: "paper-tag-selection-v2"
paper_digest_tags_registry_version: "paper-tag-catalog-v2"
paper_digest_tags_registry_sha256: "cdef54423b5dfc00a1d017ef6639446d2ecd1d9c1acf71c8eb4f6219a46b7ba8"
paper_digest_tags_concepts: [{"facet":"task","id":"task.speech-enhancement","label":"语音增强"},{"facet":"method","id":"method.self-supervised","label":"自监督学习"},{"facet":"method","id":"method.distillation","label":"知识蒸馏"},{"facet":"signal","id":"signal.speech","label":"语音"}]
paper_digest_primary_method: "自监督学习"
paper_digest_score: 7.3
paper_digest_rank_bucket: "前50%"
paper_digest_document_type: "方法研究"
paper_digest_one_sentence: "SNOAR 在重混之前先用教师自身的噪声估计滤除语音通道的残留噪声再按比例加回原始含噪观测，在 WHAM!上从 MixIT 教师接近监督上限，在真实 CHiME-3 上稳定改善感知与识别，而代价是加回比例与滤波必须搭配使用。"
paper_digest_authors: [{"affiliations":["Carnegie Mellon University, USA"],"name":"Samuele Cornell"},{"affiliations":["Johns Hopkins University, USA"],"name":"Matthew Maciejewski"}]
paper_digest_abstract_sha256: "30824d0e18410183f77e86f02145d888fcc4789a467187fa6ca4ffd5bc07781a"
paper_digest_sidecars: {"citation.bib":{"sha256":"990f0e1bdd538139ec429955e478de0bec45b0989072d7b858a279fd4400d31f","url":"/audio-paper-digest-blog/data/papers/2026-10-16/2610-20863/citation.bib"},"citation.json":{"sha256":"c341a97735fc6562e2cf2a47711885e83811ef216957b5f12d4fbc5ceee92fe1","url":"/audio-paper-digest-blog/data/papers/2026-10-16/2610-20863/citation.json"},"citation.ris":{"sha256":"a6427da66448f73048845fc79edaf79f96d9042cfb083d5d36f78c4c627d8a16","url":"/audio-paper-digest-blog/data/papers/2026-10-16/2610-20863/citation.ris"},"rethink-context.json":{"contract":"paper-research-context-v2","sha256":"be911004d40114cd3ec1a8da3601c0bcde77bd83ce6b48f9f4e7699e64d05b7f","url":"/audio-paper-digest-blog/data/papers/2026-10-16/2610-20863/rethink-context.json"}}
paper_digest_api_reader_contract: "beginner-researcher-v3"
paper_digest_api_reader_article_sha256: "1166fffa2d18fd09bd39bcb9eaf781e46d6868311c1579a2015a633661e393fd"
paper_digest_api_reader_plan_sha256: "d051427e85cd4bdde63f6778f8cd322fb6365d2132711d19649017d0b6e16906"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings-v4"
paper_digest_api_reader_source_bindings_sha256: "009f7f6aff3f6405f99cbbd3dac544ae5bdd6717d10e9f21a84f591c55b1e853"
paper_digest_api_reader_source_table_count: 3
paper_digest_api_reader_source_formula_count: 4
paper_digest_api_reader_structured_artifacts_sha256: "792d816bf89685cb8d1431196929c3600462a4e7255b839cb2b396aac3d7ce5b"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity-v1"
paper_digest_api_reader_author_identity_sha256: "fcf89dc0d4cf835c1111e4044a3cb97be89b8871ae071e81a7e7ba289fe96b27"
paper_digest_api_reader_author_count: 2
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity-v1"
paper_digest_api_reader_resource_identity_sha256: "083db79291fbd956370ca9a9fc16e752738421bc742f84919fe33660075ff639"
paper_digest_api_reader_resource_count: 0
paper_digest_api_reader_figure_persistence: "ephemeral-no-persisted-figure-assets-v1"
paper_digest_api_reader_decision_projection: "api-reader-decision-projection-v2"
---

# 📄 没有干净语音时怎样做教师学生自训练去噪

> 英文题目：*[SNOAR: Self-training with Noise filtering, Observation adding, and Remixing for Speech Denoising Without Clean References](https://arxiv.org/abs/2610.20863v1)*

<!--paper-tag-hierarchy-v1:start-->

**研究分类**

- **研究任务**：[语音增强](/audio-paper-digest-blog/papers/?concept=task.speech-enhancement)
- **研究方法**：[自监督学习](/audio-paper-digest-blog/papers/?concept=method.self-supervised)；[知识蒸馏](/audio-paper-digest-blog/papers/?concept=method.distillation)
- **信号**：[语音](/audio-paper-digest-blog/papers/?concept=signal.speech)

<!--paper-tag-hierarchy-v1:end-->

> 评分：**7.3/10** | 创新 1.5/2 | 技术严谨 1.2/1.5 | 实验充分 1.3/1.5 | 清晰度 0.8/1 | 影响力 1/1.5 | 开源 0/1.5 | 可复现 0.3/0.5 | 工程/实践 1.2/1.5


## 👥 作者与机构

- Samuele Cornell：Carnegie Mellon University, USA
- Matthew Maciejewski：Johns Hopkins University, USA

## 📌 核心摘要

无干净参考的语音去噪只能从带噪录音学习，输入是不可单独观测的干净语音与真实噪声之和，难点是合成训练与真实录音存在失配，而仅用带噪数据训练的无监督方法又远低于有监督上限。SNOAR 保留 RemixIT 的重混自训练链路，教师对一批录音给出语音估计与噪声估计，语音估计先经差分噪声滤波减去泄漏的残留噪声，再与原始带噪观测按比例混合以补回被抑制的语音并稀释失真，校正后的语音估计与另一条录音的噪声估计重混成学生输入，学生以负尺度不变信噪比为损失学习重建这两个目标，教师以指数滑动平均跟踪学生。从 MixIT 教师出发，SNOAR 在 WHAM! 测试集上达到 13.25 dB 尺度不变信噪比，比同教师的 RemixIT 高 1.15 dB，与使用干净目标的监督上限相差 0.43 dB，相对无处理到监督上限的提升幅度约为 97%，词错误率降至 10.9%。该结论适用于 WHAM! 合成混合与 CHiME-3 真实录音上的 TF-GridNet 配置，去掉差分滤波后系统输出接近输入本身，观测回加系数取 0.5 时训练发散。原文未披露训练时长、推理延迟与部署成本。

## 🔗 开源与复现资源

本次未形成可展示的已核验资源记录，开放状态尚未核实。

可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 去噪要从什么样的录音里恢复什么

语音去噪的输入是一段同时包含干净语音和真实噪声的录音，论文记作含噪观测，目标是输出尽量接近干净语音的波形，同时给出对噪声的估计。必须保留的是语音的内容、音色和时序结构，允许去掉的是与语音不相关的背景噪声，既不能把弱语音压掉，也不能引入模型自己产生的毛刺和扭曲。输出通常是单通道波形，评价时既看波形与干净参考的接近程度，也看可懂度、感知质量和语音识别词错误率。

对刚入门的同学，可以把去噪理解为在不知道干净语音和噪声各自长什么样子的条件下，从两者相加的混合里拆出语音。监督训练需要大量成对的含噪与干净语音，但在真实场景里干净语音正是要求解的未知数，所以只能用人工合成的混合来训练。合成混合与真实野外录音之间的差异会让部署性能下降，论文称之为合成到真实的差距。本文讨论的就是完全没有干净参考时，能否直接在真实含噪录音上把模型继续训练好。

### 已有路线在没有干净参考时怎么学

已有路线大体分两类。第一类是生成式方法，需要一个未配对的干净语音语料来学习先验，再在含噪录音上推断，这仍然依赖高质量干净语音。第二类是预测式方法，只需要域内含噪语音和纯噪声片段，例如 noisy-target 训练、混合不变训练 MixIT，以及 NyTT 加差分噪声滤波。它们的共同做法是往含噪录音里再加一段同域噪声，用原来的含噪录音和加进去的噪声做目标。因为两段噪声来自同一分布，网络分不清谁是谁，学到的解往往是把混合噪声按某种衰减同时送到两个输出。

另一条线是教师学生自训练，以 RemixIT 为代表，教师先给出语音和噪声估计，把不同录音的语音估计和噪声估计交叉相加构成新的混合，再让学生去重建这些伪目标，教师用学生的权重做指数滑动平均或定期替换来更新。RemixIT 最早在有干净参考的合成数据上验证有效，但在 CHiME-7 无监督域自适应任务的基线里，学生在降低背景噪声的同时感知质量落到了教师之下。

论文认为原因是学生只朝教师的估计学习，教师压掉或扭曲的语音会被学生继承并在下一代教师中继续传递，这类似于分类伪标签中的确认偏误，只是这里发生在回归目标上。

**MixIT × NyTT 加差分噪声滤波：** MixIT 是用三输出分离语音与混合噪声的无监督起点，NyTT 加差分噪声滤波是用两输出训练加推理时滤波去除残留的无监督起点，两者都只需域内含噪语音加额外同域噪声，本文把它们都当作可被自训练接管的教师，比较的是从相同起点出发是否纠错再训练的差异。

### 教师误差为什么会一代代传下去

论文把教师语音估计与干净语音的差距分成三部分：残留的噪声、被抑制掉的语音、模型自己引入的失真。残留噪声是指语音通道里还漏着的噪声成分，被抑制的语音是指本该保留却被压小的干净成分，失真是指与语音和噪声都不平行的非线性成分。RemixIT 的自监督直接把教师的语音估计当目标，所以这三部分原样交给学生。学生学会去除一部分噪声是好事，但它同时也学会了教师的压制和失真。

当教师用学生更新后，下一轮的伪目标就带着上一轮的丢失，语音越学越少。尤其在真实录音上教师本身较弱、噪声更多样时，这种误差放大会抵消自训练降噪的好处。论文要解决的具体问题就是在重混之前先纠正教师的估计，既去掉漏进来的噪声，又补回一部分被压掉的语音并稀释失真，同时要避免纠正操作本身把大量噪声送回监督而让训练坍缩成恒等映射，也就是模型直接输出输入、不再去噪。

### SNOAR 的整体流程是什么

SNOAR 保留 RemixIT 的重混步骤和损失，只把语音目标换成纠正后的版本。对批量中每个含噪录音，指数滑动平均教师先产生语音估计和噪声估计，语音估计先经过差分噪声滤波，用教师自己的噪声估计把漏进来的残留噪声减掉，再与原始含噪观测按比例混合，把一部分观测加回来，得到纠正后的自监督。

然后把这个纠正目标与另一个录音的教师噪声估计相加，构成学生的新输入，学生的两个头分别重建纠正后的语音目标和对方的噪声目标，损失是两头的负 SI-SDR 之和，教师再用指数滑动平均跟踪学生。推理时学生按教师原来的用法使用，两输出模型仍做差分滤波，三输出的 MixIT 衍生模型直接取语音输出。下面的示意图展示了从单个录音出发经教师、滤波、加回、重混到学生训练再到教师更新的完整闭环，另一录音的噪声支路和反向传播路径也在图中标出。

读图时请先看主链条上每个框的输入输出是什么，再看支路从哪里汇入，重点理解纠正发生在重混之前，图中各框的颜色区分了滤波、加回、重混、学生训练与损失等阶段。

> **看图路径：** 1. 先沿左侧含噪录音经教师到滤波再到加回最后到重混的主箭头走一遍；2. 注意另一录音的噪声估计从哪里汇入重混框；3. 看学生输出的两个头分别对应哪两个监督目标；4. 看底部虚线的指数滑动平均更新与反向传播各经过哪里

![原论文 Figure 1：The SNOAR self-training framework.](/audio-paper-digest-blog/images/papers/2610.20863/figure-1-0604724b0360efe2.png)

*论文图 1。原论文 Figure 1:：“The SNOAR self-training framework. From a real recording \mathbfx_i the EMA teacher produces a speech and a noise estimate; the speech estimate is filtered against the noise…”。*

图中从左到右依次是含噪录音进入指数滑动平均教师得到语音与噪声估计，语音估计经差分滤波得到滤波后估计，再与原始观测混合得到加回后目标，该目标与另一录音的噪声估计重混成学生输入，学生输出语音头与噪声头分别对准纠正目标与对方噪声计算 SI-SDR 损失，底部虚线表示教师用学生权重做指数滑动平均更新，另一组虚线表示反向传播只更新学生。整个环路的关键是监督不再是教师原始估计，而是经过两步纠正后的版本，重混保证了输入与目标已知且相加一致。

### 差分噪声滤波如何去掉漏进来的噪声

差分噪声滤波的作用是利用教师自己的噪声估计，把语音估计里与噪声同方向的分量投影掉。论文先说明在 NyTT、MixIT 这类训练下，推理时网络输出近似是语音加上一小部分噪声，噪声头则是另 1 倍数的同一噪声，这是因为两段同分布噪声不可分导致网络把混合噪声同时送到两端。滤波的做法是把噪声估计按内积比例缩放到残留的幅度，再从语音估计里减去，理想情况下正好抵消漏进来的那部分噪声。

对 NyTT 加差分噪声滤波的教师，这本来就是它的推理规则，对 MixIT 教师则把两个噪声输出相加作为噪声估计。代价是滤波可能放大失真，因为减法本身会改变估计的结构。下面的公式给出了滤波的具体计算，符号含义是语音估计减去噪声估计在其方向上的投影。

\[\hat{\mathbf{s}}^{\,\mathrm{dnf}}=\hat{\mathbf{s}}-\frac{\langle\hat{\mathbf{n}},\hat{\mathbf{s}}\rangle}{\|\hat{\mathbf{n}}\|^{2}}\,\hat{\mathbf{n}},\]

上式中尖括号表示内积，分母是噪声估计的平方范数，也就是其能量，整个第二项就是语音估计中与噪声估计平行的分量。论文指出在理想模型下两端携带的是差一个标量的同一噪声，因此相减后残留噪声被清除。可以举一个例子帮助理解，例如教师把部分街道噪声漏进了语音通道，而噪声头里存着同一段噪声的另一个倍数，滤波就是按比例把这个倍数对齐后减掉，这里的例子只是示意对应关系。没有这一步，后续加回观测会把更多原始噪声送回监督，训练容易走向不去噪的解。

**差分噪声滤波 × 观测加回：** 差分噪声滤波是用教师自己的噪声估计把语音估计里与噪声同方向的残留分量减掉，观测加回是把原始含噪录音按比例掺回滤波后的估计以补回被压小的语音并稀释模型引入的失真，两者必须搭配是因为单独加回会把噪声送回自监督导致训练坍缩，只有先滤除残留噪声加回才安全。

### 观测加回如何补回语音并稀释失真

观测加回的作用是把原始含噪录音按比例掺回滤波后的估计。论文把任意语音估计分解为保留语音、残留噪声和与两者都正交的失真三部分，失真在输入里没有对应物，唯一减少它的办法是把输入本身加回来一部分。因为原始观测包含完整的语音且本身没有模型失真，按比例混合后，语音丢失和失真都被乘上了一个小于一的系数，代价是把一部分原始噪声也送回了自监督。混合系数记作伽马，论文默认取 0.2，即保留八成滤波估计加两成原始观测。下面的公式给出了加回的线性组合形式。

\[\hat{\mathbf{s}}^{\,\mathrm{oa}}_{i}=(1-\gamma)\,\hat{\mathbf{s}}^{\,\mathrm{dnf}}_{i}+\gamma\,{\mathbf{x}}_{i},\]

上式中滤波后估计的权重是一减伽马，原始观测的权重是伽马。举例来说，若教师把句尾的弱辅音压得很小，滤波后估计里这部分仍然很弱，加回两成原始录音就能把这部分语音能量部分补回，同时滤波放大的毛刺也被原始录音稀释，这里的例子用来说明补回与稀释的对应过程。论文强调这一步原本是推理时改善识别的后处理，这里把它用在自监督上。没有滤波时加回会同时加回残留噪声，有滤波时残留已被清除，加回带回的噪声主要来自原始观测，重混步骤随后会再过滤这部分噪声。

### 重混训练与教师更新如何组织

训练的组织沿用 RemixIT。把批量内录音做循环移位，用一个录音纠正后的语音目标加上另一个录音的教师噪声估计构成学生输入，目标就是这两项本身，两项相加等于输入，保持了混合一致性。学生用负 SI-SDR 在两个头上训练，教师每步用衰减 0.999 的指数滑动平均跟踪学生。论文在 WHAM! 上从教师热启动训练 150000 步，在 CHiME-3 上因数据少只训练 7500 步，伽马固定为 0.2。

教师与学生的分工是教师提供伪目标的分布，学生学习去噪映射，教师再缓慢吸收学生，两者权重相连。若教师一开始做错了事，例如输出接近输入，学生会学到它并传回教师，因此需要前面的纠错来打破这种传递。

**教师模型 × 学生模型 × 指数滑动平均更新：** 教师模型负责对真实含噪录音产生语音估计和噪声估计并经纠正后提供伪目标，学生模型负责在重混后的新混合上学习重建这些伪目标，指数滑动平均更新让教师权重每步缓慢跟随学生以稳定迭代，三者形成闭环，若伪目标不纠正教师的过抑制就会经学生传回下一代教师。

**重混 × 混合一致性：** 重混是把一个录音纠正后的语音目标与另一个录音的教师噪声估计相加构成学生的新输入，混合一致性指目标相加等于输入的约束，重混提供输入与目标都已知的可监督条件，混合一致性保证学生学到的是可分离的语音与噪声组合，重混后的残留噪声可被下一轮过滤。

噪声传播分析解释了为什么必须有滤波。假设混合一致且噪声能量相近，学生学到的新残留系数是教师残留经维纳增益更新后的结果，下面是无加回时的更新形式。

\[\lambda^{\prime}=\frac{\lambda^{2}}{\lambda^{2}+(1-\lambda)^{2}}\text{,}\]

上式有零、0.5、一三个不动点，零和一稳定，中间不稳定，因此残留小于 0.5 时会走向零。加入观测加回后分子多了伽马，阈值下移，伽马为 0.2 时要求教师残留小于约 0.2，否则走向一即不去噪。而有滤波时残留不再依赖上一代，只依赖伽马，下面是该情形的更新形式。

\[\lambda^{\prime}=\frac{\gamma^{2}}{\gamma^{2}+(1-\lambda)^{2}}\text{,}\]

上式在伽马为 0.2 时下稳定点约 0.042，对应约 27.6 分贝的噪声抑制，远超教师本身水平，且转移点高达约 0.958，几乎必然收敛到下稳定点。伽马大于等于 0.5 时唯一稳定点是一，训练会发散，这与消融中伽马取 0.5 发散一致。

### 实验在什么数据和模型上比较

实验用 WHAM! 16 kHz 单说话人混响无关混合，在训练集划分上把噪声片段分成两个不相交池，一个提供录音内的不可见噪声，一个提供额外加入的已知噪声，避免同一片段既做未知噪声又做已知目标，测试在最大长度非截断版本上进行，因此结果与原 NyTT 加滤波论文不可直接比。真实录音用 CHiME-3，在第五通道的真实训练集上自适应，在真实开发集上选检查点，在真实测试集上报告，额外噪声来自官方背景池中与语音不同场次录制的无语音片段。

模型统一用 TF-GridNet，短时傅里叶变换点数五百一十二、跳长一百二十八、四块、24 通道、一百九十二隐单元、约 4000000 参数，损失为负 SI-SDR，MixIT 系统加混合一致层。WHAM! 教师训练 150000 步，Adam 学习率千分之一，批量八，梯度范数裁剪五，每 10000 步存检查点，自训练同样 150000 步并用指数滑动平均教师。CHiME-3 自训练 7500 步，每一千步存检查点。除 WHAM!

监督上限用 oracle SI-SDR 选点外，其余都用无参考的 UTMOS 在开发集上选点。评价输出先归一到 -26 分贝过载电平以稳定 DNSMOS 与 UTMOS，再报告 SI-SDR、可懂度、宽带 PESQ、DNSMOS、UTMOS 和 OWSM 识别的词错误率，SI-SDR 越高越好，词错误率越低越好，感知分越高越好。

### 在 WHAM!上纠错带来多大提升

要回答的问题是从同一教师出发，在相同训练预算下，SNOAR 与 RemixIT 谁更接近监督上限，谁在感知和识别上更好。比较条件是同一教师热启动、同一架构与损失，指标方向是 SI-SDR、PESQ、UTMOS 越高越好，词错误率越低越好。下表是 WHAM! 测试集的完整结果，包含未处理、干净参考、监督上限、两种无监督教师及其各自的 RemixIT 与 SNOAR 学生，表头与数值都保留原文写法。

| System | SI-SDR | STOI | PESQ | D-OVRL | UTMOS | WER |
| --- | --- | --- | --- | --- | --- | --- |
| Unprocessed | −1.48 | 0.751 | 1.10 | 1.46 | 1.38 | 19.8 |
| Clean | ∞ | 1.000 | 4.64 | 3.33 | 4.22 | 4.7 |
| Supervised topline | 13.68 | 0.952 | 2.26 | 3.21 | 3.60 | 9.5 |
| NyTT [8] | 0.20 | 0.776 | 1.13 | 1.60 | 1.36 | 18.1 |
| NyTT+DNF [11], teacher | 4.87 | 0.847 | 1.32 | 2.43 | 2.05 | 17.7 |
| RemixIT(NyTT+DNF) | 9.32 | 0.913 | 1.56 | 2.61 | 2.67 | 13.1 |
| SNOAR(NyTT+DNF) | 10.03 | 0.932 | 1.77 | 3.05 | 3.09 | 12.6 |
| MixIT [10], teacher | 8.32 | 0.872 | 1.54 | 2.54 | 2.26 | 15.3 |
| RemixIT(MixIT) | 12.10 | 0.926 | 1.61 | 2.98 | 3.15 | 13.3 |
| SNOAR(MixIT) | 13.25 | 0.942 | 2.02 | 3.15 | 3.45 | 10.9 |

从表中可以看到，从 MixIT 教师出发的 SNOAR 在 SI-SDR 上明显高于同起点的 RemixIT，并接近监督上限，同时在词错误率和感知分上达到无干净参考系统中的最好水平。从较弱的 NyTT 加滤波教师出发顺序相同但差距更小。RemixIT 虽然每项都超过教师，但在 PESQ 与词错误率上明显弱于 SNOAR。论文的解释是两者去噪能力接近，差别在语音保留与失真上。该结论成立的条件是 WHAM!本表数值与单位依据论文 PDF。

合成混合、有额外同域噪声可用、用 UTMOS 选点而非 oracle，且 SI-SDR 自举置信区间 1/2 宽至多 0.08 分贝。监督上限是用 oracle 选点的，实际部署只能用无参考选点，不能把上限差距直接理解为可部署的提升。

**语音保留系数 × 噪声系数 × 失真占比：** 语音保留系数说明估计中保留了多少干净语音成分，噪声系数说明相对语音还剩多少噪声成分，失真占比说明既非语音也非噪声的模型引入成分占估计能量的比例，三者联合分解才能判断分贝提升是真正改善还是以丢语音和加失真换来的去噪。

### 训练过程中谁更稳定

要回答的问题是沿训练进行，两条自训练曲线是持续改善还是先升后降，这决定了检查点选择是否敏感。比较对象是从同一 MixIT 教师出发的 SNOAR 与 RemixIT，在 WHAM! 验证集随机五百句上每个检查点打分，横轴是训练步数，纵轴依次是 SI-SDR、PESQ、UTMOS。读图时先看横轴步数范围与纵轴指标方向，再对比两条曲线的走向，不要把某一步的数值推广到全程。

> **看图路径：** 1. 对比两条曲线在横轴训练步数上的起点与走向差异；2. 看左侧信号指标与中间右侧感知指标是否同步变化；3. 注意其中一条曲线早期上升后是否持续下滑

[![原论文 Figure 2：SNOAR(MixIT) and RemixIT(MixIT) at every training checkpoint, scored on a randomly selected…](https://arxiv.org/html/2610.20863v1/cv_curves.svg)](https://arxiv.org/html/2610.20863v1/cv_curves.svg)

*论文图 2。原论文 Figure 2:：“SNOAR(MixIT) and RemixIT(MixIT) at every training checkpoint, scored on a randomly selected subset of 500 WHAM! cv utterances.”。*

图中三面板横轴都是训练步数到 150000 步，左侧、中间、右侧纵轴依次是 SI-SDR、PESQ、UTMOS，其中一条曲线在最初几万步上升后持续下滑，另一条曲线总体上升后进入平台。先按最右侧 UTMOS 面板的图例认线：上一行蓝色短线对应 SNOAR，下一行橙色短线对应 RemixIT；因此图中先升后降的是橙色 RemixIT，整体保持较高水平的是蓝色 SNOAR。论文正文也明确将早期达峰后的退化归于 RemixIT，并说明 SNOAR 总体上升后趋于平台，所以表中 RemixIT 的结果依赖事后选择检查点。

这表示本设置下 SNOAR 对选点相对不敏感，并非三项指标都单调上升，例如蓝色 PESQ 仍有小幅回落。教学上可以把这张图理解为纠错是否打破了误差累积的直观证据，但图上具体数值辨不清时不应硬读，结论以原文表格的测试集数字为准。

### 为什么说优势来自保留语音而非多去噪声

要回答的问题是 SNOAR 超过 RemixIT 的分贝增益到底来自哪里。论文把测试集每个估计做最小二乘拟合，分解出语音系数、相对噪声系数和失真能量占比，平均到句上比较。下表摘录论文表 2 中的教师、默认 γ=0.2 的 SNOAR 与 RemixIT 3 个系统行，以及 SI-SDR、α、λ、r 四列，采用原表精确数值，用于说明去噪相当但语音保留和失真不同的判断。

| System | SI-SDR | α | λ | r |
| --- | --- | --- | --- | --- |
| MixIT teacher | 8.32 | 0.912 | 0.218 | 0.085 |
| SNOAR(MixIT) | 13.25 | 0.949 | 0.031 | 0.048 |
| RemixIT(MixIT) | 12.10 | 0.939 | 0.026 | 0.062 |

从表中可以看到，两个学生都把教师的残留噪声降到很低的水平，符合不动点预测，说明重混本身无论噪声是教师漏的还是加回带入的都能滤掉。差别在后两项，RemixIT 的失真占比下降较少，SNOAR 降到更低且语音保留更高。这支持论文的判断，即 SNOAR 不是去掉了更多噪声，而是保留了更多语音并引入更少失真。该解释依赖分解中失真定义为与语音和噪声都正交的分量，且是句平均结果，不能推广到每一句都如此。未胜出的细节是 RemixIT 的噪声系数略低但失真更高，感知指标对此更敏感。本表数值与单位依据论文 PDF。

### 在真实 CHiME-3 录音上是否仍然有效

要回答的问题是在没有干净参考的真实录音上，从 3 个不同教师出发，SNOAR 与 RemixIT 各自是改善还是损害。3 个教师分别是只用真实数据做 MixIT、真实加 WSJ 合成联合训练、真实加 LibriSpeech 联合训练，其中 WSJ 与 CHiME-3 同为朗读语料所以最强。比较预算都是 7500 步自适应，评价只用无参考指标与词错误率。下表是 CHiME-3 真实测试集的完整结果，每个教师块内对比教师、RemixIT 与 SNOAR。

| Teacher | System | D-SIG | D-BAK | D-OVRL | UTMOS | WER |
| --- | --- | --- | --- | --- | --- | --- |
|  | Unprocessed | 2.05 | 1.50 | 1.48 | 1.38 | 22.0 |
| MixIT (real) | Teacher | 2.77 | 2.01 | 1.94 | 1.62 | 22.1 |
| MixIT (real) | RemixIT | 2.67 | 1.95 | 1.87 | 1.57 | 20.3 |
| MixIT (real) | SNOAR | 3.09 | 2.37 | 2.19 | 2.10 | 18.4 |
| Mix+sup (WSJ) | Teacher | 3.13 | 2.46 | 2.28 | 2.03 | 17.1 |
| Mix+sup (WSJ) | RemixIT | 2.70 | 2.01 | 1.91 | 1.69 | 18.4 |
| Mix+sup (WSJ) | SNOAR | 3.41 | 3.14 | 2.68 | 2.75 | 15.4 |
| Mix+sup (Libri) | Teacher | 3.06 | 2.33 | 2.19 | 1.87 | 17.9 |
| Mix+sup (Libri) | RemixIT | 2.81 | 2.09 | 1.98 | 1.74 | 17.5 |
| Mix+sup (Libri) | SNOAR | 3.35 | 2.89 | 2.53 | 2.63 | 16.6 |

从表中可以看到，SNOAR 在 3 个教师上每项无参考指标都提升，词错误率分别降低，感知分分别提升，最大增益恰好在完全没用干净语音的教师上，这正是方法针对的场景。RemixIT 则在所有无参考指标上都低于教师，只在较弱教师上降低词错误率，换用定期替换教师也没有帮助。这与 WHAM! 分解一致，即 RemixIT 能降噪但丢语音加失真，而无参考感知指标对此敏感。结论成立的条件是允许用域外干净语音做联合教师、额外噪声来自官方背景池、检查点用真实开发集的 UTMOS 选择，不能理解为完全无监督下凭空提升，也不能证明波形级信噪比一定提升，因为真实录音没有干净参考。本表数值与单位依据论文 PDF。

### 去掉滤波或改变加回比例会发生什么

要回答的问题是两个纠正操作各自贡献多少，以及伽马取多大才安全。论文固定 MixIT 教师，只改变伽马与是否做差分滤波，其余预算相同。上表已经包含关键消融，完整数值趋势以原文表格为准，这里结合正文解释其含义。只用滤波不用加回时，学生在信号与感知上接近 RemixIT 选点水平，说明超过 RemixIT 的大部分增益来自加回。没有滤波只加回时，学生噪声系数很高、语音系数接近一，几乎复现输入且失真占比最高，对应恒等映射坍缩。

伽马从 0.2 退火到 0.05 与固定值相当，伽马取 0.5 发散，与理论中伽马大于等于 0.5 唯一稳定点为一的预测一致。这说明伽马不是越大越好，它在补语音与送回噪声之间权衡。限制是这些消融只在 WHAM! 上验证，换到更嘈杂的真实数据最优伽马可能不同，论文未在 CHiME-3 上重调该参数。

### 哪些情况还不能下结论

论文的证据不支持把 SNOAR 理解为在任何数据上都优于监督训练。在 WHAM! 上它仍比监督上限低，词错误率也高于上限，差距虽小但存在。在 CHiME-3 上没有干净参考，只能报告无参考感知分和词错误率，不能证明波形级信噪比一定提升，也没有人工听音评价。方法依赖同域纯噪声片段来做额外加噪和重混，如果噪声片段里混有语音或与录音噪声分布不一致，额外噪声假设就不成立，论文未评测这种污染的影响。

超参数方面，伽马、指数滑动平均衰减和训练步数是在开发集 UTMOS 上调的，换域可能需要重调，消融也只在 WHAM! 上做了伽马扫描。计算成本上论文未报告训练时长、显存和推理延迟，TF-GridNet 本身的开销与 RemixIT 相当，多出的滤波与加回只是线性组合，训练代价主要仍是自训练步数。此外，本次未发现可验证的作者代码与模型资源，不能声称已开源或可直接下载权重，复现需按论文描述自行实现。

### 复现第一步要准备什么

复现第一步是把数据与教师准备成与论文相同的条件。先按 WHAM! 官方划分取训练集，把噪声池分成两个不相交子池，一个混入干净语音构成录音内的不可见噪声，一个作为训练时额外加入的已知噪声，测试用最大长度非截断版本并记住结果与原滤波论文不可比。CHiME-3 则准备第五通道真实训练、开发与测试集，额外噪声取官方背景池中无语音且与语音不同场次的部分。

模型用 TF-GridNet 相同配置，短时傅里叶变换五百一十二点、跳长一百二十八、四块、24 通道、一百九十二隐单元，先训练 MixIT 或 NyTT 加滤波教师，保存检查点。再实现自训练循环：教师前向得到语音与噪声估计，对语音估计做差分滤波，按伽马 0.2 加回原始观测，与另一录音噪声估计重混成学生输入，用负 SI-SDR 训练双头，教师用衰减 0.999 每步滑动平均更新。选点时除监督上限外一律用开发集 UTMOS，输出先归一到 -26 分贝过载电平再打分。

容易误解的是把 oracle 选点的监督上限当成可部署的提升，实际部署只能用无参考选点，差距会更大一些。

### 什么时候值得尝试还缺什么验证

当手里只有真实含噪录音和可分离出的纯噪声片段，没有任何域内干净语音，且已有 MixIT 或 NyTT 加滤波教师时，值得尝试 SNOAR 做继续训练，尤其教师本身较弱、过抑制明显时预期增益更大。若已有大量域内干净语音能做监督合成，通常监督上限更高，不必绕路自训练。还需要补的验证包括在更多语种、自发语音和非平稳噪声上的伽马敏感性，在噪声池受污染时的鲁棒性，以及人工听音与下游识别以外的任务评价。

关键超参数是加回比例伽马、教师滑动平均衰减和自训练步数，信息条件是额外噪声必须与录音噪声同域且不含语音。论文直接报告的是纠错后重混能稳定提升信号、感知和识别指标，证据支持的解释是滤波使加回可用、加回补语音降失真，重混负责滤除送回的噪声。超出此范围的因果断言，例如一定降低推理延迟或在所有真实场景都成立，仍待验证。

<details>
<summary>📎 论文与评分元数据</summary>

排名：前50% | 文档类型：方法研究 | [arXiv 原文](https://arxiv.org/abs/2610.20863v1)

</details>

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。

- 评分规则：type-aware-v1

- 评分模型：muse-spark-1.3-contributor

- 评分请求协议：openai_responses

---

[← 返回 2026-10-16 语音/音乐/音频论文速递](/audio-paper-digest-blog/posts/2026-10-16/)
