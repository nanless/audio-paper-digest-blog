---
title: "ACOUSTIC FEEDBACK PATH MITIGATION FOR MULTICHANNEL ACTIVE NOISE CONTROL"
date: 2026-09-13
draft: false
description: "针对多通道前馈主动噪声控制中次级扬声器到参考麦的声反馈在主噪声持续存在时难以标定的问题，论文提出用参考组到反馈组的相对传递矩阵加协方差相减来估计并扣除反馈分量，仿真报告显示其降噪接近理想无主噪声标定上界而直接估计与无补偿基线失稳或仅约负 2 分贝，代价是需要两次受控测量与额外反馈麦组。"
tags: ["自适应滤波", "鲁棒性", "多通道", "主动降噪"]
categories: ["eusipco-2026 论文"]
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_paper_id: "conference:eusipco:2026:conference-paper-id:0000981"
paper_digest_source_kind: conference
paper_digest_conference_id: "eusipco-2026"
paper_digest_conference_record_url: "https://eurasip.org/Proceedings/Eusipco/Eusipco2026/HTML/session-index/index.html"
paper_digest_conference_pdf_url: "https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0000981.pdf"
paper_digest_api_reader_contract: "beginner-researcher-v3"
paper_digest_api_reader_article_sha256: "d139ed21e1d754d6456b372f306eef2d46713712f19e1cb11d226c3ccc64253b"
paper_digest_api_reader_plan_sha256: "d9655ab180b8df38e9f66a1cb288a9b4438e14795ad84b096cc9eaf964de1ddf"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings-v4"
paper_digest_api_reader_source_bindings_sha256: "3d9d9786f38b38be65344f63a5aeb0d80a4cf22630dad497e8012f19bfd38089"
paper_digest_api_reader_source_table_count: 3
paper_digest_api_reader_source_formula_count: 0
paper_digest_api_reader_structured_artifacts_sha256: "1be50a0ea7cff59d630e9d3635358527bfcf1493dea60da1dde27f9aa78a400a"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity-v1"
paper_digest_api_reader_author_identity_sha256: "890acf0962808a18925e9a85685310c2c2c0d64ac21e8d451ca55043566ca7d1"
paper_digest_api_reader_author_count: 4
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity-v1"
paper_digest_api_reader_resource_identity_sha256: "ea9457af4d4ecaf6b37690605d521f11c4ddc250f54681c3ca1a9c889a46c558"
paper_digest_api_reader_resource_count: 0
paper_digest_api_reader_decision_projection: "api-reader-decision-projection-v2"
paper_digest_scoring_contract: "api-scoring-audit-v2"
paper_digest_taxonomy_contract: "paper-taxonomy-flat-tags-compat-v1"
paper_digest_taxonomy_selection_contract: "paper-taxonomy-selection-v1"
paper_digest_taxonomy_registry_version: "paper-taxonomy-v1"
paper_digest_taxonomy_registry_sha256: "15c82a567ce5a55dc1175684ed08b64c158558639d9c8fb822c9587ec32a8778"
paper_digest_taxonomy_concepts: [{"facet":"method","id":"method.adaptive-filtering","label":"自适应滤波"},{"facet":"research_focus","id":"research_focus.robustness","label":"鲁棒性"},{"facet":"setting","id":"setting.multichannel","label":"多通道"},{"facet":"task","id":"task.active-noise-control","label":"主动降噪"}]
paper_digest_primary_task: "主动降噪"
paper_digest_primary_method: "自适应滤波"
paper_digest_score: 5.7
paper_digest_rank_bucket: "前50%"
paper_digest_document_type: "方法研究"
paper_digest_conference_structure: replayable-pdf-layout-v1
---

# 📄 主噪声关不掉时，如何把扬声器漏进参考麦的声音减掉

> 英文题目：*ACOUSTIC FEEDBACK PATH MITIGATION FOR MULTICHANNEL ACTIVE NOISE CONTROL*

> 会议身份：`conference:eusipco:2026:conference-paper-id:0000981`


> ✅ 来源为官方会议 PDF；表格与 Figure 按原文证据绑定。PDF 公式以原页区域图片展示，未冒称作者原始 TeX。

> 会议来源：[官方记录](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/HTML/session-index/index.html) · [官方 PDF](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0000981.pdf)

标签：#自适应滤波 #鲁棒性 #多通道 #主动降噪

评分：**5.7/10** | 创新 1.2/2 | 技术严谨 1.0/1.5 | 实验充分 0.8/1.5 | 清晰度 0.8/1 | 影响力 0.8/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 0.8/1.5

排名：前50% | 文档类型：方法研究

## 👥 作者与机构

- Zhang, Yile (Angela)：机构信息未能从会议 PDF 纯文本可靠映射
- Abhayapala, Thushara D.：机构信息未能从会议 PDF 纯文本可靠映射
- Samarasinghe, Prasanga N.：机构信息未能从会议 PDF 纯文本可靠映射
- Bastine, Amy：机构信息未能从会议 PDF 纯文本可靠映射

## 📌 核心摘要

多通道前馈主动降噪以参考组与反馈组传声器信号为输入，以次级扬声器抗噪信号为输出，难点是扬声器泄漏污染参考信号并在主噪声持续存在时无法单独静音标定反馈路径。本文先在主噪声独存时估计参考组与反馈组的协方差作为本底，再在主噪声叠加次级独立高斯探测信号时估计总协方差并相减得到次级声场协方差，进而估计反馈组到参考组的相对传递矩阵。在线阶段利用该矩阵由反馈组信号预测参考组中的反馈分量并相减，净化后的参考信号仅保留与主源成比例的主噪声分量，再送入归一化频域滤波-x最小均方控制器更新权值。与直接用总场统计估计矩阵的总场基线相比，该减法机制将估计量与主噪声信号解耦而仅依赖声传递结构，因此在噪声位置与内容变化下更稳定。在6 m×7 m×3 m仿真房间50 Hz至600 Hz评测设置下，所提方法的降噪指标为-15.467 dB，低于总场基线的降噪指标-2.169 dB。该结论适用边界限于静态房间与已知次级通路的仿真，尚未验证真实混响变化与时变反馈路径下的失败条件。原文未披露训练、推理或部署成本。

## 🔗 开源与复现资源

本次未形成可展示的已核验资源记录，开放状态尚未核实。
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 前馈降噪为什么怕扬声器声音漏回参考麦？

输入是房间里的持续噪声、多个参考麦、多个次级扬声器和多个误差麦，目标是在误差麦处把噪声压低。论文研究的是多通道前馈主动噪声控制，也就是提前用参考麦测到主噪声，再算出反相声让扬声器去抵消，误差麦只负责监督残差和驱动自适应。必须保留的信息是参考信号一旦混入扬声器自己的声音，控制器会把抵消声误当成新的噪声去追，形成正反馈环，轻则降噪变差，重则发散。输出是本文解读将按任务与路线、方法全景、组件计算、构造与运行、实验条件、结果与反证、复现与收束展开，全部事实只来自论文原文证据。

对刚入门的读者，白话是参考麦本应只听远处的噪声源，但离扬声器不远时也会听到扬声器刚发出的声音，这就是声反馈。英文叫 acoustic feedback。论文摘要明确说，多通道前馈结构下，当主噪声不能关掉去单独测反馈路径时，这个问题尤其难。教学例子是开窗通风降噪：窗外噪声是主噪声，窗边扬声器发反相声，窗边参考麦既听到窗外声也听到扬声器漏过来的声，如果不处理，控制器会越调越乱。

**声反馈 × 前馈主动噪声控制：** 声反馈指次级扬声器发出的抵消声漏到参考麦克风，被误当成主噪声再次进入控制器；前馈主动噪声控制指用参考麦提前测主噪声、用误差麦算残差来驱动次级源，二者搭配的问题是前馈依赖干净的参考信号，而声反馈恰好污染了这个输入，因此必须先做反馈中和才能让后续 FxLMS 稳定工作。

沿一个样本走一遍有助于建立依赖。某时刻主噪声源发出向量 x，扬声器发出向量 y，参考组收到主分量加反馈分量，误差麦收到两者经过各自声路径后的叠加，控制器根据参考和误差更新滤波器并产生新的 y。若参考中的反馈分量不减掉，下 1 次 y 会基于被污染的参考计算，再漏回参考，形成循环。本文后续所有公式和实验都是为切断这个循环服务的，而不是改进 FxLMS 本身。

### 已有路线为什么在持续噪声下不够用？

同输入同目标的已有工作分两类。第一类改物理设置，例如用指向性麦或指向性扬声器，以及双参考传感等硬件思路，目的是从拾取端减少扬声器信号。第二类是算法思路，例如无限冲激响应滤波器和反馈路径建模做反馈中和，也就是先估计扬声器到参考麦的反馈路径，再从参考信号中减掉估计出的反馈分量。论文引用的单通道在线反馈路径建模系列工作属于此类。

关键差别在同运行阶段和同监督条件。传统反馈路径建模做法是冻结控制器、只让扬声器发探测声、主噪声关掉时离线估计，这在实验室可行。论文指出，真实部署中主噪声持续存在，会污染参考麦，使估计有偏。已有在线方法多针对单通道，多通道持续噪声下的解法很少。这就是本文要补的位置：利用空间多样性，在不让主噪声静音的前提下辨识反馈。

对照时不能把类别差异当同条件胜负。指向性硬件改变了拾取条件，在线单通道方法改变了通道数和噪声条件，都不能直接与本文多通道持续噪声实验对比好坏。本文的公平对照是自己设置的 4 个变体，后文实验节会展开。论文没有声称硬件路线无效，也没有重新实现所有在线单通道算法逐 1 对比，这一点需要如实保留。

### 论文把房间问题抽象成哪两组麦和哪些信号？

论文设定房间里有 J 个主源、L 个次级扬声器、R 个误差麦，另有参考麦组共 Jr 个和反馈麦组共 Jf 个。记主源信号为 x，扬声器信号为 y，误差信号为 e，参考组信号为 Mr，反馈组信号为 Mf。全部信号写在短时傅里叶变换域，f 是频点，t 是时间帧，后文为简洁会省略 ft 标记。每个麦组信号都拆成主分量 P 与反馈分量 F 之和，即参考组满足主加反馈，反馈组同样满足主加反馈，其中 P 正比于 x，F 正比于 y。

**参考麦组 × 反馈麦组：** 参考麦组是供给 FxLMS 的输入通道，负责观测主噪声；反馈麦组是额外布置的观测通道，负责同时看到主噪声和次级泄漏，二者搭配的理由是单组信号无法区分主分量与次级分量，而双组之间的空间映射可以把次级分量从一组预测到另一组，从而只减掉反馈而不减掉主噪声。

自适应更新依赖含反馈泄漏的参考 Mr，目标是用 Mf 在主噪声持续存在时，把 Mr 中的反馈分量中和掉，再交给下游控制。论文强调相对传递矩阵只与声传递结构有关，而与主噪声信号无关，这是后续鲁棒性的理论希望所在。需要保留的建模假设是主分量与次级分量互不相关，从而协方差具有可加性，多源协方差可写成各分量协方差之和，这个假设是协方差相减成立的前提。

### 两阶段协方差相减加一组矩阵映射如何组成全景？

方法全景分离线辨识与在线运行两段。离线先做两步测量：第一步关闭次级扬声器，只测纯主噪声场的自协方差与互协方差；第二步保持主噪声存在，让 L 个扬声器同时发出互不相关的探测信号，测总场的协方差。用总协方差减去纯主噪声协方差，得到纯次级贡献，再用纯次级自协方差与互协方差的乘积形式估计相对传递矩阵。在线运行时，用估计出的矩阵把反馈组信号映射到参考组，再从参考信号中减掉，得到只与主噪声有关的新参考，最后把新参考送入常规多通道归一化频域 FxLMS。

这样安排的理由是原文明确给出的：直接关闭主噪声去测纯次级场往往不可行，而直接用总场统计量估计矩阵会被主噪声污染而产生强偏。2 阶段相减避免了对每条反馈路径的重复单独辨识，因为矩阵是在麦组之间映射，而不是逐条估计扬声器到每个参考麦的路径。仿真部分用理想次级标定作为上界、用总场直接估计作为有偏基线、用无补偿作为稳定性基线，来验证相减的必要性。

从输入到输出走一遍：反馈组信号同时含主分量 Pf 与次级分量 Ff，矩阵乘以反馈组信号得到对参考组次级分量的预测，再从参考组信号中减去，主分量残留为参考主分量减去矩阵乘以反馈主分量，次级分量理想情况下相消。论文公式推导显示相消项为次级参考场减去矩阵乘以次级反馈场，理想映射下接近零，因此滤波后参考只与主源 x 成比例，满足前馈假设。

### 相对传递矩阵如何定义与估计？

先讲符号与输入。记 Sref 为次级到参考组的传递，Sfb 为次级到反馈组的传递，y 为扬声器信号。在主源静音的次级纯场假设下，参考组次级场等于 Sref 乘以 y，反馈组次级场等于 Sfb 乘以 y。相对传递矩阵定义为从反馈组次级场到参考组次级场的空间映射，形式为 Sref 乘以 Sfb 的伪逆。计算目标是在主噪声存在时仍能得到这个只与声结构有关的矩阵。原文明确的实现是用协方差估计代替瞬时比值，即纯次级参考自协方差乘以纯次级互协方差的伪逆。

**相对传递矩阵 × 协方差相减：** 相对传递矩阵负责表达从反馈组次级声场到参考组次级声场的空间映射，它只与声传递结构有关而与主噪声信号无关；协方差相减负责在主噪声持续存在时，用总场协方差减去纯主噪声场协方差来还原出纯次级协方差，二者组合的意义是无需关闭主噪声就能得到无偏的矩阵估计，避免直接用被污染统计量估计带来的偏差。

具体估计分 3 步。第一步纯主噪声测量得到参考自协方差与反馈到参考的互协方差，可分解为 J 个主源各自贡献之和。第二步主加探测总测量得到总协方差，可分解为 J 个主源贡献加 L 个扬声器贡献之和，其中每个扬声器发互不相关的探测。第 3 步相减得到纯次级协方差，再按上述乘积形式得到矩阵估计。论文没有给出梯度路径，因为这一步是闭式协方差估计而非神经网络训练，不存在反向传播与停止梯度问题，期望用跨时间帧平均近似。

需要指出缺项：论文未报告协方差平均所用帧数与窗长，也未报告伪逆的正则化方式，复现时只能按常规做法补齐并记录，不能视为原文已验证的细节。

### 估计出的矩阵如何在 FxLMS 之前做减法？

在线减法公式是滤波后参考等于原始参考减去矩阵乘以反馈组信号。展开后等于参考主分量加参考次级分量，再减去矩阵乘以反馈主分量与反馈次级分量之和。理想映射下次级两项相消，剩余为参考主分量减去矩阵乘以反馈主分量，完全只含主噪声分量。论文因此称滤波后参考有效去除了扬声器反馈，且仍正比于主源信号，可以直接替换 FxLMS 中的参考项。

**反馈中和 × FxLMS：** 反馈中和负责在进入自适应之前从参考信号中减去估计出的扬声器泄漏分量，得到只与主噪声有关的新参考；FxLMS 负责用该新参考与误差信号更新抵消滤波器，二者搭配的原因是 FxLMS 的权更新直接依赖参考信号，若参考被反馈污染就会形成正反馈环，先中和再自适应才能恢复前馈假设。

FxLMS 部分采用归一化频域实现。无补偿时权更新为当前权加上步长乘以经次级路径滤波后的参考共轭再乘以误差，步长按频率归一化，分母是参考功率的平滑估计。有补偿时把滤波后参考的滤波版本代入权更新，同时把功率估计中的原始参考也换成滤波后参考。原文假设次级路径已知，即估计路径等于真实路径，这是一个重要的实验条件，实际部署中若次级路径有误差，结论可能变化，论文未测量该误差下的性能。

组合意义在于分工清晰：矩阵减法只管净化参考，不参与抵消滤波器的自适应；FxLMS 只管在净化后参考下收敛，不再需要同时估计反馈。这种串联避免了在自适应环内同时辨识反馈带来的耦合不稳定。

### 本研究没有训练神经网络，真实计算是什么？

本研究没有训练任何神经网络模型，也就没有训练集划分、损失函数、优化器、早停与权重下载问题。真实计算是声学仿真加协方差估计加自适应滤波。仿真用镜像源法生成房间冲激响应，构造主路径与次级路径；辨识阶段用白高斯探测信号激励扬声器并做 2 阶段协方差平均与相减；运行阶段用归一化 FxLMS 逐帧更新。

**探测信号 × 主噪声持续存在：** 探测信号指次级扬声器发出的互不相关的白高斯激励，用于让次级协方差可辨识；主噪声持续存在指标定阶段不能关掉洗衣机干衣机噪声，二者组合的难点是探测响应被主噪声淹没，论文因此设计了先测纯主噪声协方差、再测主加探测总协方差的 2 阶段流程，用相减把探测分量分离出来。

参数冻结与更新需要按证据说明。相对传递矩阵在离线辨识后冻结，在线 FxLMS 运行时不再更新，这就是论文结论所说未来工作要做在线跟踪的原因。FxLMS 权是逐帧更新的，平滑因子固定，次级路径冻结为已知。探测信号只在辨识阶段存在，降噪阶段是正常抵消声。不能把无训练等同于确定性求解，因为仿真仍含随机探测、随机测量噪声与自适应收敛的随机性，也不能从参数冻结推定系统输出确定。

缺项是辨识阶段探测时长、总场与纯主噪声测量的帧数、以及 FxLMS 的频点实现细节未完全报告，复现时需自行固定并做敏感性记录。

### 房间、声源、噪声与评价如何设置？

仿真房间尺寸、混响、声速与评价频段按原文交代。房间为 6 米乘 7 米乘 3 米，混响时间 0.7 秒，声速 340 米每秒，评价频段为 50 到 600 赫兹。主源 1 个位于给定坐标，次级扬声器 2 个对称放在以给定中心为圆心、半径分别为 0.2 米、0.3 米、0.35 米的圆上，误差麦 2 个放在同平面半径 0.3 米的同心圆上，参考组 8 个与反馈组 8 个交错放在同平面半径 0.5 米的圆上。所有主、次级与反馈房间冲激响应都用镜像源法生成。

噪声与探测条件也需保留。两段洗衣机干衣机录音重采样到 8000 赫兹，第一段用于矩阵辨识与初始降噪，第二段在 120 秒时引入以模拟主噪声变化。矩阵辨识用互不相关的白高斯探测信号，按在参考组处标称 0 分贝探测与主噪声比缩放，每个麦通道加 40 分贝信噪比的独立测量噪声。FxLMS 平滑因子设为 0.1，次级路径假设已知。平均降噪指标定义为误差麦处残差能量与未控制主噪声能量之比取对数，单位分贝，负值越深表示压得越多。

动态测试包括 60 秒时主源位移 0.05 米、负 0.05 米、负 0.1 米，以及 120 秒时更换录音。步长扫 0.0025、0.005、0.01。4 个变体是理想次级标定上界、总场直接估计、本文协方差相减、无补偿直接 FxLMS，其中理想上界在降噪运行时仍存在声反馈，只是辨识不受主噪声污染，不能误读为无反馈系统。

### 稳态降噪与稳定性对比支持什么判断？

比较问题是：在相同房间、相同步长与相同扬声器间距下，是否只有本文方法既稳定又接近理想上界。公平条件是 4 个变体共享同一仿真房间、同一主噪声段、同一 FxLMS 结构与同一评价指标，指标方向是降噪分贝越负越好，不稳定记为发散。表后解释需同时讲收益与代价，不能只讲胜出。

| 来源证据 | 量化值一 | 量化值二 | 量化值三 | 量化值四 |
| --- | --- | --- | --- | --- |
| 来源句一 | 0.0025 | 0.005 | 0.01 | — |

表后解释是：本文方法的收益是把有偏估计的负 2 分贝提升到负 11 到负 15 分贝量级，与理想上界差距多在 1 到 3 分贝，支持协方差相减有效抑制了主噪声偏置的判断。代价是需要额外 8 个反馈麦、2 次受控测量与矩阵伪逆计算，且实验假设次级路径已知。未胜出项是总场直接估计，它在所有半径与步长下都明显偏离上界，构成反证：不做相减就无法在持续噪声下辨识。同时要保留无补偿在 0.3 米半径 0.01 步长等条件下发散的事实，说明声反馈确实限制闭环稳定，但总体趋势不等于每组都发散，小半径小步长下无补偿仍可收敛。

对频率快照的导读是：下面这张三行曲线图是理解鲁棒性的关键，它把时间切成位移前、换噪声前与换噪声后 3 个稳态段，横轴都是频率，纵轴都是降噪分贝，负值向下表示压得更深，3 条颜色分别代表理想标定、总场直接估计与本文方法，需要在同一频率下纵向比较。

> **看图路径：** 1. 先看三行子图的标题与横轴，确认分别是初始位置、移动后位置、更换噪声后的 50 到 600 赫兹频段；2. 再对比每行中黄色总场直接估计曲线与紫色本文方法曲线的上下位置，判断哪条更负即降噪更深；3. 最后观察紫色曲线与橙色理想次级标定曲线的贴合程度，验证鲁棒性结论是否在三个阶段都成立

[![原论文 Figure 1：shows frequency-dependent NR snapshots for time ending immediately before t = 60 s (before a…](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/31c782b27d68/figure-1.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/31c782b27d68/figure-1.png)

*论文图 1。原论文 Figure 1：“shows frequency-dependent NR snapshots for time ending immediately before t = 60 s (before a primary source location change), t = 120 s (before change in the washer- dryer noise…”。*

针对可见内容的解释是：像素显示在 50 到 600 赫兹的大部分频段，黄色总场直接估计曲线贴近 0 分贝附近甚至局部为正，而紫色本文方法曲线明显更靠下，多在负 5 到负 20 分贝之间起伏，并与橙色理想曲线几乎重合。3 个子行都保持这种分离，中间行主源移动后与底行更换录音后并未出现整体上抬，原文据此报告典型分离约 6 到 10 分贝。不能把个别频点的尖峰推广为全频段结论，也不能从像素读出精确到小数点的数值，定量仍以稳态表为准。

### 哪些对照证明相减与矩阵缺一不可？

论文没有命名为消融，但 4 个变体实际承担了消融职责。测的是同一降噪任务下去掉哪个组件会怎样：去掉相减就是总场直接估计，去掉矩阵与减法就是无补偿，保留两者就是本文方法，理想次级标定则是把主噪声污染去掉的上界。条件一致性在于共享房间、声源几何、噪声录音与 FxLMS 参数，只有辨识输入统计量不同。

| 来源证据 | 量化值一 | 量化值二 | 量化值三 | 量化值四 |
| --- | --- | --- | --- | --- |
| 来源句一 | 6 | 7 | 3 | — |
| 来源句二 | 1 | 8 | 6 | 87；943；973；1999；263；269；1987；2；18 |
| 来源句三 | 50 | 600 Hz | — | — |
| 来源句四 | 2023 | 3 | — | — |
| 来源句五 | 40 dB | — | — | — |

表后解释需点出反例与边界。反例是总场直接估计在动态前后都差，说明问题不在主源是否移动，而在估计本身有偏；无补偿在小间距小步长下仍能给出负 12 分贝左右，但在 0.35 米半径下全部发散，说明稳定性边界与声反馈强度和步长都有关。未评测边界是扬声器位置变化、参考与反馈麦位置变化、混响变化与多人声源，这些都不在本次仿真内，不能声称方法对它们同样鲁棒。论文特有细节是探测为互不相关白高斯且按 0 分贝缩放，若探测过弱或相关，协方差相减的数值稳定性可能下降，但原文未扫这个维度。

另一张时域残差描述虽无像素，但原文报告本文方法与理想曲线视觉重合、无补偿因发散被省略、总场基线残差更高且在变化点瞬态更长，这与频域快照相互印证，支持先净化参考可减小切换瞬态的有限解释，但瞬态时长未给定量数字，只能定性引用。

### 还有哪些条件没测、不能承诺？

直接报告的是仿真房间、固定几何、单主源、两段洗衣机干衣机噪声、已知次级路径条件下的稳态与动态降噪。有限解释是矩阵只与声结构有关故对主噪声位置与信号变化鲁棒，实验用 1 次位移与 1 次换录音支持了该解释，但支持范围仅限所测的位移量与所用的两段录音。未验证推测是时变反馈路径的在线跟踪，论文明确列为未来工作，当前矩阵辨识后冻结，若扬声器或麦移动导致声结构变化，需要重新做 2 阶段测量。

缺失证据不是技术错误，但不能承诺未测量的量。原文未测量计算延迟、实时帧率、矩阵伪逆在大阵列下的开销、误判率或主观听感，也未报告真实房间录音与硬件实验，因此不能说方法降低了延迟或可在任意硬件实时运行。训练资源与推理开销要分开：本研究无神经网络训练开销，运行开销主要是协方差平均、伪逆与每帧 FxLMS，总体趋势是半径越大理想性能略降，但不等于每频点都单调。

相关性不等于因果。降噪分贝更负与矩阵更准相关，但时域瞬态更小还可能与 FxLMS 步长归一化中用了净化后功率有关，不能单独归因于矩阵。不同指标差值不能混放，稳态平均分贝、频点分贝与时域波形幅度是不同聚合对象，数值相同也不代表同一性能。

### 要复现应先固定哪些步骤与参数？

复现先做仿真房间。用镜像源法生成 6 米乘 7 米乘 3 米、混响 0.7 秒房间的全部路径，主源、次级、误差、参考与反馈位置按原文坐标与半径固定，声速 340 米每秒，采样 8000 赫兹，评价 50 到 600 赫兹。噪声用两段洗衣机干衣机录音，第一段做辨识与初始降噪，第二段在 120 秒引入，主源在 60 秒按给定向量位移。辨识用互不相关白高斯探测，按参考组处 0 分贝探测噪声比缩放，加 40 分贝信噪比测量噪声。

再做 2 阶段协方差。先关扬声器估计纯主噪声自与互协方差，再开探测估计总协方差，相减后做矩阵估计，在线用矩阵净化参考后跑归一化 FxLMS，平滑因子 0.1，步长从 0.0025、0.005、0.01 扫起，次级半径从 0.2、0.3、0.35 米扫起，次级路径先按已知处理以对齐原文。评价按误差麦残差与未控制能量比算分贝，分别记录稳态平均、频点曲线与切换瞬态。

| 来源证据 | 量化值一 | 量化值二 | 量化值三 | 量化值四 |
| --- | --- | --- | --- | --- |
| 来源句一 | 0.05 | 0.1 | — | — |
| 来源句二 | 50 | 600 Hz | — | — |

表后解释是：该表不是新实验，而是把原文时域与频域描述按时间对齐，复现时若发现 120 秒后差距消失，应先检查第二段录音电平、探测缩放与协方差平均帧数是否与初始段一致，而不是直接否定方法。还需补的验证是未知次级路径、真实房间、麦数量减半、探测时长缩短与多主源下的表现，这些在原文中缺项，补测时要单独记录。资源状态方面，本次未发现来源绑定且完成验证的代码模型数据资源，不得声称已公开，只能按仿真描述自行实现。

### 何时值得尝试这个方法？

当多通道前馈系统必须保留参考麦、且主噪声不能为标定而关掉时，值得尝试用额外反馈麦组加协方差相减来得到相对传递矩阵，再在 FxLMS 前做减法。适用前提是能安排 2 次受控测量、能发出互不相关探测、主与次级分量近似不相关、评价期间声结构基本不变。若只能用现有参考麦而不能加麦，或扬声器与麦相对位置频繁变化，该方法的收益会打折扣，需要先补在线跟踪。

论文特有的误解需要澄清。第一，相对传递矩阵不是逐条反馈路径的集合，而是组间映射，因此不需要重复测量每条路径，但代价是依赖反馈组能充分观测次级场，若反馈组太少或位置不佳，伪逆可能不稳定。第二，理想次级标定好不代表无反馈，它只是在无主噪声时标定，运行时仍有反馈，只是上界更干净。第三，总场直接估计差不是 FxLMS 没调好，而是输入统计量被主噪声污染，调步长无法根治。

收束是：本文在持续噪声下用空间映射加相减切断了参考污染，使降噪回到接近理想标定的水平，并在位移与换噪声下保持分离。复现应从固定房间与 2 阶段协方差做起，再扫步长与半径，最后补未知路径与真实房间验证，才能把论文的有限结论推广为可部署判断。

## 📐 原文公式与排版

以下展示论文原页中的数学表达区域，保留原始上下标、分式和符号排版。区域序号仅用于本文导航，不是论文公式编号。

[![原文数学表达区域 1，PDF 第 2 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/f1e6da902753/figure-1.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/f1e6da902753/figure-1.png)

区域 1 · [查看论文原页](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0000981.pdf#page=2)

[![原文数学表达区域 2，PDF 第 2 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/f1e6da902753/figure-2.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/f1e6da902753/figure-2.png)

区域 2 · [查看论文原页](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0000981.pdf#page=2)

[![原文数学表达区域 3，PDF 第 2 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/f1e6da902753/figure-3.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/f1e6da902753/figure-3.png)

区域 3 · [查看论文原页](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0000981.pdf#page=2)

[![原文数学表达区域 4，PDF 第 2 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/f1e6da902753/figure-4.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/f1e6da902753/figure-4.png)

区域 4 · [查看论文原页](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0000981.pdf#page=2)

[![原文数学表达区域 5，PDF 第 2 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/f1e6da902753/figure-5.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/f1e6da902753/figure-5.png)

区域 5 · [查看论文原页](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0000981.pdf#page=2)

[![原文数学表达区域 6，PDF 第 2 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/f1e6da902753/figure-6.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/f1e6da902753/figure-6.png)

区域 6 · [查看论文原页](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0000981.pdf#page=2)

[![原文数学表达区域 7，PDF 第 2 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/f1e6da902753/figure-7.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/f1e6da902753/figure-7.png)

区域 7 · [查看论文原页](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0000981.pdf#page=2)

[![原文数学表达区域 8，PDF 第 2 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/f1e6da902753/figure-8.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/f1e6da902753/figure-8.png)

区域 8 · [查看论文原页](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0000981.pdf#page=2)

[![原文数学表达区域 9，PDF 第 3 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/f1e6da902753/figure-9.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/f1e6da902753/figure-9.png)

区域 9 · [查看论文原页](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0000981.pdf#page=3)

[![原文数学表达区域 10，PDF 第 3 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/f1e6da902753/figure-10.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/f1e6da902753/figure-10.png)

区域 10 · [查看论文原页](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0000981.pdf#page=3)

[![原文数学表达区域 11，PDF 第 3 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/f1e6da902753/figure-11.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/f1e6da902753/figure-11.png)

区域 11 · [查看论文原页](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0000981.pdf#page=3)

[![原文数学表达区域 12，PDF 第 3 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/f1e6da902753/figure-12.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/f1e6da902753/figure-12.png)

区域 12 · [查看论文原页](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0000981.pdf#page=3)

[![原文数学表达区域 13，PDF 第 3 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/f1e6da902753/figure-13.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/f1e6da902753/figure-13.png)

区域 13 · [查看论文原页](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0000981.pdf#page=3)

[![原文数学表达区域 14，PDF 第 3 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/f1e6da902753/figure-14.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/f1e6da902753/figure-14.png)

区域 14 · [查看论文原页](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0000981.pdf#page=3)

[![原文数学表达区域 15，PDF 第 3 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/f1e6da902753/figure-15.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/f1e6da902753/figure-15.png)

区域 15 · [查看论文原页](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0000981.pdf#page=3)

[![原文数学表达区域 16，PDF 第 3 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/f1e6da902753/figure-16.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/f1e6da902753/figure-16.png)

区域 16 · [查看论文原页](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0000981.pdf#page=3)

[![原文数学表达区域 17，PDF 第 3 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/f1e6da902753/figure-17.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/f1e6da902753/figure-17.png)

区域 17 · [查看论文原页](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0000981.pdf#page=3)

[![原文数学表达区域 18，PDF 第 3 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/f1e6da902753/figure-18.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/f1e6da902753/figure-18.png)

区域 18 · [查看论文原页](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0000981.pdf#page=3)

[![原文数学表达区域 19，PDF 第 3 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/f1e6da902753/figure-19.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/f1e6da902753/figure-19.png)

区域 19 · [查看论文原页](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0000981.pdf#page=3)

[![原文数学表达区域 20，PDF 第 3 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/f1e6da902753/figure-20.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/f1e6da902753/figure-20.png)

区域 20 · [查看论文原页](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0000981.pdf#page=3)

[![原文数学表达区域 21，PDF 第 3 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/f1e6da902753/figure-21.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/f1e6da902753/figure-21.png)

区域 21 · [查看论文原页](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0000981.pdf#page=3)

[![原文数学表达区域 22，PDF 第 3 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/f1e6da902753/figure-22.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/f1e6da902753/figure-22.png)

区域 22 · [查看论文原页](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0000981.pdf#page=3)

[![原文数学表达区域 23，PDF 第 3 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/f1e6da902753/figure-23.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/f1e6da902753/figure-23.png)

区域 23 · [查看论文原页](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0000981.pdf#page=3)

[![原文数学表达区域 24，PDF 第 3 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/f1e6da902753/figure-24.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/f1e6da902753/figure-24.png)

区域 24 · [查看论文原页](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0000981.pdf#page=3)

[![原文数学表达区域 25，PDF 第 3 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/f1e6da902753/figure-25.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/f1e6da902753/figure-25.png)

区域 25 · [查看论文原页](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0000981.pdf#page=3)

[![原文数学表达区域 26，PDF 第 3 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/f1e6da902753/figure-26.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/f1e6da902753/figure-26.png)

区域 26 · [查看论文原页](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0000981.pdf#page=3)

[![原文数学表达区域 27，PDF 第 3 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/f1e6da902753/figure-27.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/f1e6da902753/figure-27.png)

区域 27 · [查看论文原页](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0000981.pdf#page=3)

另有 22 个候选区域因边界不明确或图片数量、尺寸限制未展开；请[查看完整论文](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0000981.pdf)中的原始排版。

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。
- 评分规则：type-aware-v1
- 评分模型：muse-spark-1.3-contributor
- 评分请求协议：openai_responses

---

[← 返回 eusipco-2026 论文汇总](/posts/conference-eusipco-2026/)
