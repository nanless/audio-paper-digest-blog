---
title: "Modeling Tonal Variance by Functional Data Analysis: An Empirical Case of L-tone Variants in Kaifeng Mandarin"
date: 2026-09-14
draft: false
description: "针对开封话低调变体靠专家看图分类、难以刻画动态的问题，论文用函数型主成分分析提取基频曲线动态再用狄利克雷过程高斯混合做不定类数聚类，在 456 个低调音节上得到下降、凹降、上升三类，并以广义加性混合模型回放验证，其中下降类占 284 例为多数而上升类是前人未报告的新发现。"
tags: ["无监督学习", "语音学与音系", "韵律", "语音", "音频分类"]
categories: ["speechprosody-2026 论文"]
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_paper_id: "conference:speechprosody:2026:conference-paper-id:zuo26_speechprosody"
paper_digest_source_kind: conference
paper_digest_conference_id: "speechprosody-2026"
paper_digest_conference_record_url: "https://www.isca-archive.org/speechprosody_2026/zuo26_speechprosody.html"
paper_digest_conference_pdf_url: "https://www.isca-archive.org/speechprosody_2026/zuo26_speechprosody.pdf"
paper_digest_api_reader_contract: "beginner-researcher-v3"
paper_digest_api_reader_article_sha256: "8c1a844b04a68e25c6a773e8b9ab7c7441a9e452f12255de403ffc971214c740"
paper_digest_api_reader_plan_sha256: "971ccbd6e8a37df4271abaa74b3451ac54fd97f82d82ce6ccf8ce3898e041fe6"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings-v4"
paper_digest_api_reader_source_bindings_sha256: "fd4ab2e38adbf1358f20c583bd9b0ee037240a2cef98e761a178f770a6311333"
paper_digest_api_reader_source_table_count: 3
paper_digest_api_reader_source_formula_count: 0
paper_digest_api_reader_structured_artifacts_sha256: "c2cd657462ec0f57860e72d4124b954c05c71b25a7a332c37037287816fdde37"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity-v1"
paper_digest_api_reader_author_identity_sha256: "914b825ee3f28bac687d04963f283e6aa34312f7b3d966034552171548a5dfd8"
paper_digest_api_reader_author_count: 2
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity-v1"
paper_digest_api_reader_resource_identity_sha256: "89b9c4056ed8a7262f75e9351b988eba8d145acdb53852bcdeb9f989d134832d"
paper_digest_api_reader_resource_count: 0
paper_digest_api_reader_decision_projection: "api-reader-decision-projection-v2"
paper_digest_scoring_contract: "api-scoring-audit-v2"
paper_digest_taxonomy_contract: "paper-taxonomy-flat-tags-compat-v1"
paper_digest_taxonomy_selection_contract: "paper-taxonomy-selection-v1"
paper_digest_taxonomy_registry_version: "paper-taxonomy-v1"
paper_digest_taxonomy_registry_sha256: "15c82a567ce5a55dc1175684ed08b64c158558639d9c8fb822c9587ec32a8778"
paper_digest_taxonomy_concepts: [{"facet":"method","id":"method.unsupervised","label":"无监督学习"},{"facet":"scientific_topic","id":"scientific_topic.phonetics","label":"语音学与音系"},{"facet":"scientific_topic","id":"scientific_topic.prosody","label":"韵律"},{"facet":"signal","id":"signal.speech","label":"语音"},{"facet":"task","id":"task.audio-classification","label":"音频分类"}]
paper_digest_primary_task: "音频分类"
paper_digest_primary_method: "无监督学习"
paper_digest_score: 4.9
paper_digest_rank_bucket: "后50%"
paper_digest_document_type: "方法研究"
paper_digest_conference_structure: replayable-pdf-layout-v1
---

# 📄 不预设几类声调：用函数型主成分加非参数聚类重看开封话低调

> 英文题目：*Modeling Tonal Variance by Functional Data Analysis: An Empirical Case of L-tone Variants in Kaifeng Mandarin*

> 会议身份：`conference:speechprosody:2026:conference-paper-id:zuo26_speechprosody`


> ✅ 来源为官方会议 PDF；表格与 Figure 按原文证据绑定。PDF 公式以原页区域图片展示，未冒称作者原始 TeX。

> 会议来源：[官方记录](https://www.isca-archive.org/speechprosody_2026/zuo26_speechprosody.html) · [官方 PDF](https://www.isca-archive.org/speechprosody_2026/zuo26_speechprosody.pdf)

标签：#无监督学习 #语音学与音系 #韵律 #语音 #音频分类

评分：**4.9/10** | 创新 1.2/2 | 技术严谨 1.0/1.5 | 实验充分 0.6/1.5 | 清晰度 0.7/1 | 影响力 0.6/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 0.5/1.5

排名：后50% | 文档类型：方法研究

## 👥 作者与机构

- Zihang Zuo：机构信息未能从会议 PDF 纯文本可靠映射
- Aijun Li：机构信息未能从会议 PDF 纯文本可靠映射

## 📌 核心摘要

开封话低调变体建模的输入是时长归一化后的基频曲线，输出是变体子类型标签，难点在于曲线是动态连续过程而静态均值和整体斜率会丢失曲率与调位信息。先将离散基频观测经B样条插值为连续函数并做被试内和音节内标准化，再以函数型主成分分析提取曲率与调位主成分并输出主成分得分。接着对得分做狄利克雷过程高斯混合模型聚类以自适应确定类别数，最后用广义加性混合模型回放各类典型轨迹。与固定中点断点分段线性和预设类别数的人工分类相比，该链条以数据驱动基函数刻画整体动态并允许类别数从密度中生长，减少了反向推理与粗粒度指标的任意性。在456个低调音节语料的事后分段回归评测下，Falling+Level子类型第二段的R2指标值为0.29，低于Dipping子类型的R2指标值0.93。在456个开封话低调响音声母音节语料上，前两个函数型主成分共解释79.4%方差，聚类得到下降、凹陷与上升三类典型模式，其中下降类占多数且新发现的上升类是既有三分类文献未报告的。结论的适用边界仅限于受控单字朗读的成年本地发音人条件，向连续语流、跨方言与感知范畴性的外推尚未验证。原文未披露训练、推理或部署成本。

## 🔗 开源与复现资源

本次未形成可展示的已核验资源记录，开放状态尚未核实。
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 输入是什么：为什么低调变体值得单独建模？

这篇论文的输入是开封话里标为低调的单音节基频曲线，目标是在不预先规定分几类的条件下，找出其中稳定可复述的变体。研究对象不是普通话四声的分类，而是同一个低调范畴内部的细粒度差异。论文交代的背景是，开封话一般记为 4 个单字调：上升、下降、高平和低调，其中低调被认为存在变体。早期描写给出 31 和 312 两类记法，后续研究在观察平均基频和整体斜率后给出凹降、下降、下降加平 3 类。但论文指出，前人对下降加平类做的分段线性回归中，第二段决定系数只有 0.29，明显低于凹降类的 0.93 和下降类的 0.97，而且断点固定在轨迹中点，对弯曲形状的刻画有限。

对于刚进入语音领域的读者，需要先建立一个动作链：说话是随时间展开的动作，基频在音节内先降后升还是单调下降，靠起点终点两个静态值是讲不清的。传统做法是专家看图把曲线归入几个典型形状，或者用均值和整体斜率这类粗粒度指标划分。论文认为这种做法依赖反向推理，即先假定专家知识可推广，再把数据套进去，同时离散的人工标签也难以表达渐变。开封话低调因此成为一个合适的检验案例：类别内部确实有差异，但差异是连续的动态差异，需要一种少依赖领域先验又能保留时间结构的方法。

本解读的输入是论文正文证据与本次收到的官方原图像素，目标是让研究生能按步骤复述从录音到 3 类曲线的全过程，必须保留的关键信息包括被试与材料规模、归一化方式、函数化与主成分设置、聚类迭代与可视化回放条件，以及 3 类的样本量和形状描述。输出按学习依赖展开，先讲任务与相关路线，再讲方法全景与组件计算，然后讲实验条件、结果与反证，最后讲复现与收束。凡是教学用的比喻都会明确标为例子，不引入无源的数值或效果判断。

### 同输入同目标的前人做了什么：静态指标和预设类数在哪里受限？

按同输入、同目标、同监督来对照，前人对开封话低调的研究与本文是直接可比的。输入同样是低调音节的基频轨迹，目标同样是划分变体。前人的监督来源是专家先验：先假定存在几个典型轮廓，再用视觉检查或均值加斜率归类。论文报告的局限是这种做法需要预设类别，而且静态指标抓不住前半段陡降与后半段回升的时间位置差异。下降加平类第二段拟合差就是一个具体反例，说明固定中点断点的分段直线不足以描述真实曲率。

另一条相关路线是函数型主成分分析在韵律研究中的应用。论文梳理指出，已有工作多把主成分得分与已知固定因素关联，例如时长、语境、词调、句类型、说话人性别或年龄，做法是有监督的解释，而不是无监督的发现。也有个别研究把聚类放在主成分之后，但所用 K 均值需要预先指定类数，或者同时使用逻辑回归等有监督分类且目标类别本身是理论预设的。也就是说，同运行阶段的已有组合要么预设类数，要么预设标签，都不符合本文希望尽量少用先验来探索未知变体的要求。

本文的选择因此是把非参数贝叶斯聚类接到主成分得分之后。论文明确比较了层级聚类与狄利克雷过程混合的区别：前者一旦合并就不可撤销，属于贪心合并；后者允许在采样过程中动态重分配并量化不确定性，更适合在连续得分空间里让有效簇数自行稳定。这种对照不是用准确率胜负来证明优劣，而是从是否需要预设类数、是否允许动态调整这两个运行条件来说明搭配理由。后续章节会沿着一条样本的路径，先走完输入到表示再到聚类，然后回到 3 类曲线的回放验证。

### 要解决的问题是什么：动态如何表示，类数如何不预设？

论文把问题拆成两个必须同时满足的要求。第一，时间动态要有函数表示：每条基频曲线不是一组孤立采样点，而是一条定义在归一化时间区间上的连续路径，后续的曲率、音区、拐点位置都要能从这个表示中读出。第二，类别划分不能先写死是两类还是 3 类，要让数据中的密度峰自己决定，同时保留连续统的可能性。两个要求之间存在张力：如果直接对逐点基频做聚类，维度高且噪声大；如果压缩为均值和斜率，又会丢失何时下降、何时回升的信息。

形式化地说，设第 i 条轨迹为定义在 0 到 T 上的函数，目标是找到一组标准正交的特征函数，使得每条轨迹可近似写成均值函数加若干得分与特征函数的线性组合，得分即为该轨迹在该变异方向上的投影。聚类的输入就是这些得分向量，而不是原始逐点基频。聚类模型假设得分来自无穷多个高斯成分的混合，混合权重由狄利克雷过程的折棍构造生成，通过中国餐馆过程采样决定每个样本是并入已有簇还是开新簇。最终输出是有效非空簇的划分，以及每簇在原始时间轴上的平均轨迹回放。

举一个教学例子：想象把 456 条曲线都画在同一张归一化时间图上，有的高开低走，有的低开高走，有的中间凹下去。问题不是给每条曲线贴一个人眼标签，而是先找到两个最重要的变形旋钮，一个控制弯曲方向，一个控制整体高低，然后看旋钮位置的散点自然聚成几堆。这个例子只帮助理解表示加聚类的分工，不代表真实参数，真实数值以后文表格为准。

### 方法全景：一条样本如何从录音走到三类标签？

沿一条样本走完全流程有助于建立全局依赖。起点是 1 次朗读录音，经过人工对齐切出音节，再提取并平滑基频，重采样到 10 赫兹以方便插值，然后做按被试和按音节的标准化，消除个人音高和音节固有差异。接着用 B 样条把离散点变成连续函数，再做函数型主成分分析，得到均值函数、特征函数和每条曲线的得分。最后把得分向量送入狄利克雷过程高斯混合模型做 3000 次吉布斯采样，得到 3 个簇，再用广义加性混合模型把每簇的曲线在原始时间轴上拟合出来并给出置信带。

这个链条中，前半段解决可比性，后半段解决发现性。按被试和按音节的标准化保证不同人、不同元音环境下的曲线可以放在同一尺度比较；函数化保证时间结构不被打散；主成分把高维曲线压缩为主要变异方向；非参数聚类保证类数不预设。

最后的混合模型回放保证聚类结果能落回可读的基频形状。论文强调音节作为承载单位，因此没有在音素级别做地标配准，这是一个明确的方法选择，复现时不应自行加入音素对齐。

**函数型数据分析 × 函数型主成分分析：** 函数型数据分析的分工是把离散的基频采样点看成连续函数来处理，解决时间归一化后曲线仍有形状动态的问题；函数型主成分分析的分工是在这个函数空间里找出解释方差最大的特征函数，用少数几个得分重构整条曲线。两者搭配的理由是前者提供插值和平滑的函数表示，后者提供降维和可解释的变异轴，组合后新增的作用是把每条变长但已归一化的基频轨迹压缩为 2 维得分向量，直接送入聚类。

从实现角度看，全流程调用的都是现有工具：函数化与主成分用 R 的函数型数据包完成，聚类用 R 的狄利克雷过程包完成，回放用混合模型包完成。论文未报告神经网络训练，因此不存在梯度路径、参数冻结或重置时机的叙述，后文训练一节会明确说明本研究没有训练哪些模型，以及真实计算过程是什么。

### 表示与聚类如何计算：基函数、主成分与簇数自适应如何衔接？

先讲函数化。论文把每条离散时间序列写成 P 个基函数的线性组合，系数向量待估计，基函数取 B 样条。需要确定的 3 个量是样条阶数、基函数个数和平滑惩罚强度，论文用广义交叉验证选择它们。选定后，每条轨迹成为希尔伯特空间中的一个函数样本，可以估计均值函数和协方差函数。主成分即为协方差算子的特征函数，按特征值从大到小排列，每个特征值对应一个解释方差比例。

每条曲线的得分是该曲线减去均值函数后与特征函数的积分投影，均值为零，方差等于对应特征值。只保留解释方差大于 10% 的成分，本文恰好是前两个。

再讲聚类。狄利克雷过程混合把得分向量的分布写成无穷多个高斯的加权和，权重由折棍过程生成，参数的先验是狄利克雷过程。后验推断用中国餐馆过程采样：每个样本以正比于已有簇似然的概率并入旧簇，或以正比于集中参数与边际似然乘积的概率开新簇。经过迭代，有效非空簇数会趋于稳定。论文使用默认超参数和集中参数先验，迭代 3000 次吉布斯采样。相比层级聚类，这种做法的差异在于允许反复重分配，而不是 1 次性贪心合并。

**函数主成分得分 × 狄利克雷过程高斯混合模型：** 函数主成分得分的分工是量化每条曲线在曲率轴和音高轴上的投影位置，是连续的低维表示；狄利克雷过程高斯混合模型的分工是在这个得分空间里按密度自适应地增删簇，不需要事先指定分几类。搭配的原因是得分空间保留了主要的动态差异而去掉了逐点噪声，适合用混合高斯描述密度峰，组合后新增的作用是在连续统上同时保留渐变分布和可分离的密度峰判断。

下面这张图是理解表示的关键，它把所有原始轨迹投影到前两个特征函数上，用颜色表示得分极性，黑色为均值函数。读图时要先确认这不是原始散点，而是沿特征函数方向扰动均值函数得到的一组重构曲线，用于解释每个轴的物理意义。

这段导读覆盖了横轴归一化时间、纵轴标准化基频、左右两面板分别为第一和第二主成分、色条为归一化得分极性的完整对象，时间范围是整个归一化音节区间，观察动作见图后说明。

> **看图路径：** 1. 先看左右两块面板标题中的 PC1 与 PC2 解释方差，再看横轴归一化时间和纵轴标准化基频的范围；2. 再看左图以中间时刻为交叉点、蓝线与红线向两端张开的扇形，判断第一轴控制的是曲率；3. 再看右图各条曲线基本平行上下平移、形状保持下降后略回升，判断第二轴控制的是音区；4. 最后看底部色条从负到正的映射，确认黑色为均值函数、蓝色与红色为相反极性

[![原论文 Figure 1：Projections of original F0 trajectories on the first two functional principal components, and the…](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/speechprosody-2026/ec6e22fce9d0/figure-1.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/speechprosody-2026/ec6e22fce9d0/figure-1.png)

*论文图 1。原论文 Figure 1：“Projections of original F0 trajectories on the first two functional principal components, and the normalized, color- mapped fPC scores.”。*

从像素可见，左图第一主成分呈现以中间时刻为交叉点的扇形：负极性一侧起点高、前半段陡降、后半段继续走低；正极性一侧起点低、前半段平坦、后半段明显上扬。右图第二主成分各条曲线形状基本一致，都是下降后略回升，只是整体上下平移，说明它主要调节音区。标题给出的解释方差是 56.1% 与 23.3%，两者合计 79.4%，支持只用 2 维就能概括大部分动态。需要注意，右图纵轴是标准化后的相对高低，不是原始赫兹值，不能直接读出绝对音高。

**B 样条基函数 × 广义交叉验证：** B 样条基函数的分工是把 10 赫兹重采样后的离散基频点展开为连续函数的线性组合；广义交叉验证的分工是在样条阶数、基函数个数和平滑惩罚之间选择泛化误差较小的组合。搭配的原因是基函数越多越能拟合细节但越容易过拟合，需要数据驱动的准则定平滑强度，组合后新增的作用是得到既保留拐点又不过度抖动的函数化曲线，保证后续主成分不是在拟合测量噪声。

最后强调一个易错点：主成分得分本身没有类别含义，类别来自得分空间的密度结构。下一节会说明本研究没有训练神经网络，所谓的拟合是指样条平滑、特征分解和吉布斯采样的确定性计算加随机采样过程。

### 本研究训练了什么：无神经网络时的真实计算是什么？

本研究没有训练神经网络模型，也就没有优化器、学习率、反向传播、早停或参数冻结可报告。把无训练等同于确定性求解是不准确的，因为后端的吉布斯采样本身带有随机性，需要多次迭代才能稳定。真实计算分为 3 段：第一段是函数化与主成分的数值计算，包括 B 样条展开、广义交叉验证选参、均值与协方差估计、特征分解和投影得分计算，这部分在给定平滑参数后是确定性的数值线性代数过程。

第二段是狄利克雷过程混合的马尔可夫链蒙特卡洛采样，3000 次迭代中簇分配会动态增删，最终取有效非空簇稳定的划分，这部分具有随机性但可通过固定随机种子和检查稳定来复现；第 3 段是广义加性混合模型的平滑拟合，用于把离散标签转回连续时间上的均值曲线和置信带。

监督来源也需要说清。函数化与主成分是无监督的，只利用曲线本身的协方差结构；聚类也是无监督的，不使用人工标签；最后的混合模型拟合使用的分组标签来自聚类结果，而不是来自专家标注。因此整个链条没有使用人工类别作为训练信号，专家知识只在事后解释 3 类形状与前人描写的对应关系时出现。这种安排的理由在引言中已说明：尽量减少对领域先验的依赖，让变体从数据中显现。

未报告的缺项包括 B 样条的具体阶数、基函数个数和平滑参数的最终取值，以及狄利克雷过程集中参数的后验分布。论文只说前者由广义交叉验证确定，后者用包的默认超参数。复现时不能从模型名称推定这些实现细节，应先按默认流程跑通，再通过检查主成分解释方差和簇数稳定性来判断参数是否合理。

### 实验条件是什么：在谁的声音、哪些音节上测了什么？

被试为 8 名在开封出生长大的母语者，男女各 4 名，日常使用开封话且能达到熟练水平的普通话，无言语或听力障碍报告。材料为 19 个低调音节，覆盖全部元音环境，且只选用响音声母开头的音节，即声母为鼻音或边音的音节，目的是保留完整的基频轨迹，避免清音段造成的中断。录音设备为指定型号麦克风，在隔音室完成，刺激通过笔记本屏幕中央随机呈现，借助录音工具采集。每人每个音节读 1 次，每个音节呈现 3 次，共得到 456 段声学信号，即 19 乘 3 乘 8。对齐在语音分析软件中人工完成，基频提取和平滑用配套脚本完成，重采样到 10 赫兹，再做按被试和按音节的标准化。

这张散点图展示了标准化后所有曲线的 2 维得分分布，颜色按被试区分。它回答的是表示是否被个别被试主导，以及得分空间是否存在自然的密度结构，为后文聚类是否主要沿第一轴划分提供前提。

这段导读确认了横轴为第一得分、纵轴为第二得分、每个点为一条曲线、颜色为 8 个被试的完整对象，时间范围是全部 456 个样本的总体分布。

> **看图路径：** 1. 先确认横轴为第一得分 s1、纵轴为第二得分 s2，每个点代表一条归一化基频曲线；2. 再看右侧图例中 8 个被试的颜色是否在左侧混在一起，判断被试效应是否主导分布；3. 再比较沿 s1 方向左侧密集、中间稀疏、右侧成小堆的密度变化，与沿 s2 方向的均匀连续分布；4. 最后估计左侧密集区与右侧小堆的大致 s1 区间，为理解后文三簇划分做准备

[![原论文 Figure 2：Scatter plot of the fPC scores for PC1 and PC2, color- mapped by subjects.](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/speechprosody-2026/ec6e22fce9d0/figure-2.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/speechprosody-2026/ec6e22fce9d0/figure-2.png)

*论文图 2。原论文 Figure 2：“Scatter plot of the fPC scores for PC1 and PC2, color- mapped by subjects.”。*

从像素可见，沿纵轴第二得分方向，各颜色点混在一起且分布相对均匀，接近连续统，说明音区差异不是被试专属的；沿横轴第一得分方向，左侧在负值区形成高密度堆，右侧在正值大数区形成小堆，中间区间明显稀疏。论文正文把左侧密集区记为负值到零附近，右侧小堆记为 2 到 3.5 附近，中间 0 到 2 相对稀疏，并指出左侧下降形态占多数。颜色上没有出现某个被试独占一堆的情况，支持变体是群体共有的而非个人口音。像素不能精确读出每个点的具体数值，因此后文表格只引用论文明确报告的区间与簇样本量，不硬写散点坐标。

下表把实验规模与建模设置整理为可核对的行，便于复现时逐项对照采样、划分与拟合条件。表前的问题是：在什么数据量和什么拟合报告下讨论 3 类划分？公平条件是所有数字都来自同一批 456 个样本的同一条处理链，指标方向是样本量越大支持越强、偏差解释比例越高拟合越充分。

| 条件 | 指标 | 被试与材料 | 样本总量 | 拟合报告 |
| --- | --- | --- | --- | --- |
| 录音与呈现 | 被试数与重复数 | 8 人男女各 4 名，19 个音节 | 456 段声学信号 | 每音节呈现 3 次 |
| 函数化与主成分 | 保留成分与方差 | B 样条加交叉验证选参 | 前 2 维合计 79.4% | 第一维 56.1%，第 2 维 23.3% |
| 聚类后回放 | 分组拟合显著性 | 三簇标签回代拟合 | 偏差解释 62% | 线性与平滑项均显著 |

表后需要解释主要收益与代价。收益是数据链完整且可重放：从被试构成到重复次数再到拟合指标都有明确数字，研究生可以按 19 乘 3 乘 8 验算总量，按解释方差判断 2 维是否足够。代价是论文未给出 train 与 test 划分，因为这不是预测任务，而是对全部 456 条曲线的描述与发现；也未报告录音采样率、基频提取上下限等声学细节，复现时需采用常规设置并记录下来。未胜出项在这里体现为被试维度没有形成独立簇，说明按人划分不是有效变体划分，这本身是一个负结果，避免了把个人差异误当声调变体。

### 发现了哪三类：形状、数量与前人描写的对应关系是什么？

主结果是 3 个典型时间模式。第一类为上升轮廓，在区间末端急剧上扬，这是前人未报告的；第二类为下降轮廓，全程呈下降趋势，对应前人的下降类；第 3 类为凹降轮廓，起点略低于下降类，在中点附近达到最低再略回升，对应前人的凹降类。论文用混合模型拟合了 3 类的平滑均值曲线，线性效应与平滑项均显著，偏差解释比例为 62%，逐点置信带显示 3 类在首尾两端分离较明显。聚类划分主要沿第一得分方向展开：负值区为下降类，正值极端区为上升类，原点附近过渡带为凹降类。

**广义加性混合模型 × 逐点置信区间：** 广义加性混合模型的分工是在聚类标签确定后，对每类随归一化时间变化的基频均值曲线做平滑拟合；逐点置信区间的分工是显示每个时间点上均值估计的不确定性范围。搭配的原因是聚类只给出离散标签，还需要回到原始时间轴上展示 3 类曲线的形状差异是否稳定，组合后新增的作用是用可视的均值带把上升、下降、凹降 3 类典型轨迹固定下来，供读者核对聚类不是只在得分散点上成立。

下面这张图是聚类结果在得分空间的可视化，它把上一节按被试着色的散点换成按聚类标签着色，直接回答三簇在第一轴上的左右布局与疏密关系。导读已确认横轴为第一得分、颜色为 3 个聚类标签、每个点仍为一条曲线。

这段导读覆盖了红蓝绿 3 类与左右位置的对应预期，观察重点是蓝色多数堆、红色极端堆与绿色过渡带是否与正文样本量一致。

> **看图路径：** 1. 先确认横轴仍为 s1，颜色按聚类标签分为红蓝绿三类，而不是按被试着色；2. 再看蓝色点堆在负 s1 一侧、红色点堆在正 s1 一侧、绿色点在原点附近形成过渡带的左右布局；3. 再观察蓝绿交界与绿红交界是否存在少量交叉点，判断边界是渐变而非截然分开；4. 最后比较三类点的数量疏密，直观估计哪一类是多数、哪一类是稀疏过渡类

[![原论文 Figure 4：Scatter plot of DP-GMMC results.](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/speechprosody-2026/ec6e22fce9d0/figure-4.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/speechprosody-2026/ec6e22fce9d0/figure-4.png)

*论文图 4。原论文 Figure 4：“Scatter plot of DP-GMMC results.”。*

从像素可见，蓝色点在左侧形成大而密的堆，对应数量最多的下降类；红色点在右侧形成较分散但明确的堆，对应上升类；绿色点在中间原点附近形成窄带，部分与蓝色交界交叉，部分向下方延伸，说明边界存在渐变而非截然分开。这种布局与正文报告的 284、100、72 的样本量顺序一致，也与第一得分控制曲率的解释一致：越往左越陡降，越往右越上扬，中间为先降后平再略升的过渡。不能把右下角个别离群点单独解读为第四类，因为模型的有效非空簇已稳定为 3 类，离群只是连续分布的尾部。

为便于核对，把主成分方差与三簇数量整理如下。表前的问题是：2 维表示是否足够，以及三簇中哪类是多数？公平条件是所有数字来自同一批标准化曲线的同一次分解与同一次聚类，指标方向是解释方差越高越能代表整体，样本量越大越可能是默认实现。

| 条件 | 指标 | 第一维 | 第 2 维 | 合计或多数类 |
| --- | --- | --- | --- | --- |
| 主成分解释方差 | 方差解释比例 | 56.1% | 23.3% | 合计 79.4% |
| 得分物理意义 | 轴含义 | 曲率，前半降与后半升 | 音区，整体上下平移 | 两轴共同重构曲线 |
| 聚类样本量 | 每簇数量 | 上升类 100 例 | 下降类 284 例 | 过渡凹降类 72 例 |

表后解释主要收益与代价。收益是下降类为多数支持了低调目标增强与普通话同源字为降调的双重影响解释，而新发现的上升类表明增强可能同时动用了首降与尾升两个极性，比前人报告的更显著。代价是 3 类边界不截然，绿色过渡带与两侧都有交叉，论文因此明确提出后续需做感知实验验证 3 类是否被听者范畴化，以及分布是否受语境预测。未胜出项是前人的下降加平类在本研究中没有作为独立密度峰出现，提示固定中点断点的分段直线可能把连续过渡误切为一类。

### 哪些做法会改变结论：预设类数与静态指标为何不可替代？

论文没有做神经网络的消融，但提供了方法层面的失败条件对照，同样起到反证作用。第一组对照是静态指标：若只用均值和整体斜率，只能区分高低与升降大方向，无法区分前半陡降与后半回升的时间位置，也无法解释下降加平类第二段拟合差的问题。第二组对照是固定断点的分段回归：断点固定在中点等于先验指定了拐点位置，对弯曲程度不同的曲线一刀切，自然会在某一段出现低拟合。

第三组对照是需预设类数的 K 均值：即使接在主成分之后，仍需人事先写死类数，无法回答到底是两类还是 3 类，而狄利克雷过程混合让有效簇数在采样中增删直至稳定，直接给出了三这个答案。

为把得分分布的密度结构说清楚，下表整理得分区间的稀疏与密集对照。表前的问题是：连续统与可分离峰如何同时成立？公平条件是区间划分与簇划分都基于同一第一得分轴，指标方向是密度越高越可能对应独立原型，稀疏区越宽越支持渐变解释。

| 条件 | 指标 | 左侧密集区 | 中间稀疏区 | 右侧小堆 |
| --- | --- | --- | --- | --- |
| 第一得分区间 | 样本密度 | 负值到零附近最密 | 0 到 2 相对稀疏 | 2 到 3.5 成堆 |
| 聚类对应 | 标签与数量 | 蓝色下降类 284 例 | 绿色过渡类 72 例 | 红色上升类 100 例 |
| 形状对应 | 曲线走向 | 前半陡降后半走低 | 中间凹降略回升 | 前半平坦后半急升 |

表后需说明反例与边界。反例是绿色过渡带的存在本身：它既证明了中间不是空无 1 人，也证明了 3 类之间有交叉，若强行用硬边界切分会夸大范畴性。边界是第二得分方向接近连续均匀，说明音区是渐变维度，不应再细分为独立声调；若有人对第二得分继续聚类，很可能得到不稳定的碎簇。论文未评测的边界包括不同语速、不同声调语境下的分布是否变化，以及普通话水平高低是否调节下降类的比例，这些都留待后续验证，不能从当前单字朗读数据推广到连续语流。

### 结论的适用边界在哪里：哪些验证还没有做？

首先区分 3 层表述。论文直接报告的是：在 456 个响音声母低调音节上，2 维主成分解释 79.4% 方差，聚类稳定为 3 类，混合模型回放显示上升、下降、凹降 3 种典型轨迹。有限解释是：下降类占多数可能反映普通话影响与低调目标增强，上升类的出现可能意味着增强比前人认为的更显著，连续过渡可能意味着说话人在原型与两极之间动态权衡。这些解释有数据支持但属于事后关联，不是因果证明，应使用支持而非证明的措辞。未验证推测是：3 类是否具有音位地位、是否被听者感知为不同范畴、是否受语境预测，这些在本文都没有测量，必须标为待验证。

数据边界同样明确。材料只覆盖单字朗读且只选响音声母，以保证完整基频，这意味着结论不能直接推广到清音声母音节或连续语流中的低调实现。被试为 8 人，虽男女均衡且覆盖全部元音环境，但样本量不足以估计人口层面的比例，284 比 100 比 72 应理解为本次样本中的相对多数关系，而非开封话整体的固定比例。方法边界是未在音素级别做地标配准，若音节内部结构对拐点位置有系统影响，当前归一化时间会把这种影响折叠进曲率轴，需要后续研究对照。

资源与可运行性方面，论文给出代码链接但本次资源状态为未发现可验证的开源绑定，因此本解读不声称代码、模型或数据已公开。复现者应按正文工具链自行实现，并保留超参数与随机种子。也没有报告运行时长、内存占用或推理延迟，因此不承诺该流程在实时或大规模语料上的成本优势，只讨论其在探索性分析中减少人工与随意性的作用。

### 复现先做什么：按什么顺序检查才能对上原文数字？

复现的第一步是重建 456 这个总量：19 个低调音节乘 3 次重复乘 8 名被试，检查切分后每条是否都有完整的基频轨迹，响音声母之外的音节不应纳入。第二步是重做标准化：按被试和按音节分别做标准化，消除个人音高与音节固有差异，然后重采样到 10 赫兹。第三步是用 B 样条做函数化，用广义交叉验证确定阶数、基函数个数与平滑惩罚，再估计均值函数与协方差函数并做特征分解，检查第一维是否接近 56.1%、第 2 维是否接近 23.3%、合计是否接近 79.4%，以及第一轴是否为曲率、第二轴是否为音区。若方差比例明显偏离，应先检查平滑是否过度或不足，而不是直接调整聚类。

第四步是聚类：把 2 维得分送入狄利克雷过程混合，用默认超参数跑 3000 次吉布斯采样，观察有效非空簇是否稳定为 3 类，并核对样本量是否接近 284、100、72 的分布，位置是否分别为负值区、极端正值区与原点过渡带。第五步是回放：用广义加性混合模型对 3 类分别拟合随归一化时间变化的平滑曲线，检查线性与平滑项是否显著、偏差解释是否接近 62%，以及 3 类形状是否为末端急升、全程下降、中点凹陷后略升。若上升类缺失，最可能的原因是平滑过度抹掉了末端上扬，或聚类预设了两类，需要回到前两步检查。

需要保留的关键超参数与信息条件包括：10 赫兹重采样、按被试与按音节标准化、以音节为承载单位且不做音素级配准、只保留解释方差大于 10% 的成分、聚类迭代 3000 次。区分代码开源、权重下载与系统可运行：本文无神经网络权重，只有分析代码与语料处理流程，即使拿到代码也需自行准备录音与对齐才能运行全链。建议全程记录随机种子与包版本，以便解释采样随机性带来的小幅波动。

### 何时值得尝试这种方法：给新手的三条判断与一个误解澄清？

当研究问题同时满足 3 个条件时值得尝试本文范式：输入是时间归一化后的连续轮廓，目标是在不预设类数的情况下发现内部变体，且希望保留渐变与峰并存的解释。开封话低调正好满足：曲线形状是关键信息，类数存在争议，分布既有密集峰又有过渡带。若任务已有明确标签且目标是预测准确率，有监督分类更直接；若数据量极小导致协方差估计不稳，则应先增加样本或加强平滑，而不是强行解释高阶主成分。

对新手的常见误解需要澄清：主成分得分大不代表基频绝对高。第一得分大对应的是后半段上扬的曲率，第二得分大才对应整体音区上移，两者不可混淆。另一个误解是把 3 类当成 3 个离散的声调，论文明确指出边界不截然，更准确的理解是在连续统上存在 3 个密度峰， prototypes 与两极之间的权衡产生了梯度输出。第 3 个误解是把偏差解释 62% 当成分类准确率，它只是混合模型对基频随时间变化的拟合程度，不是聚类正确率，聚类本身没有人工金标准可比。

收束时回到可复述的方法：一句话记住链条，即标准化保证可比，函数化保留时间，主成分压缩动态，非参数聚类决定类数，混合模型落回曲线。记住 3 个数字：79.4% 的 2 维解释方差、284 例的多数下降类、100 例的新发现上升类。还需补的验证是感知实验与语境预测分析，只有在听者确实区分且分布可被语言因素预测时，3 类的音系地位才能成立。在此之前，最稳妥的表述是数据驱动地报告了 3 种典型实现及其连续过渡，而不是宣告发现了 3 个新声调。

## 📐 原文公式与排版

以下展示论文原页中的数学表达区域，保留原始上下标、分式和符号排版。区域序号仅用于本文导航，不是论文公式编号。

[![原文数学表达区域 1，PDF 第 2 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/speechprosody-2026/1dc030c82e4e/figure-1.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/speechprosody-2026/1dc030c82e4e/figure-1.png)

区域 1 · [查看论文原页](https://www.isca-archive.org/speechprosody_2026/zuo26_speechprosody.pdf#page=2)

[![原文数学表达区域 2，PDF 第 2 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/speechprosody-2026/1dc030c82e4e/figure-2.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/speechprosody-2026/1dc030c82e4e/figure-2.png)

区域 2 · [查看论文原页](https://www.isca-archive.org/speechprosody_2026/zuo26_speechprosody.pdf#page=2)

[![原文数学表达区域 3，PDF 第 2 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/speechprosody-2026/1dc030c82e4e/figure-3.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/speechprosody-2026/1dc030c82e4e/figure-3.png)

区域 3 · [查看论文原页](https://www.isca-archive.org/speechprosody_2026/zuo26_speechprosody.pdf#page=2)

[![原文数学表达区域 4，PDF 第 2 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/speechprosody-2026/1dc030c82e4e/figure-4.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/speechprosody-2026/1dc030c82e4e/figure-4.png)

区域 4 · [查看论文原页](https://www.isca-archive.org/speechprosody_2026/zuo26_speechprosody.pdf#page=2)

[![原文数学表达区域 5，PDF 第 2 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/speechprosody-2026/1dc030c82e4e/figure-5.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/speechprosody-2026/1dc030c82e4e/figure-5.png)

区域 5 · [查看论文原页](https://www.isca-archive.org/speechprosody_2026/zuo26_speechprosody.pdf#page=2)

[![原文数学表达区域 6，PDF 第 2 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/speechprosody-2026/1dc030c82e4e/figure-6.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/speechprosody-2026/1dc030c82e4e/figure-6.png)

区域 6 · [查看论文原页](https://www.isca-archive.org/speechprosody_2026/zuo26_speechprosody.pdf#page=2)

[![原文数学表达区域 7，PDF 第 2 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/speechprosody-2026/1dc030c82e4e/figure-7.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/speechprosody-2026/1dc030c82e4e/figure-7.png)

区域 7 · [查看论文原页](https://www.isca-archive.org/speechprosody_2026/zuo26_speechprosody.pdf#page=2)

[![原文数学表达区域 8，PDF 第 2 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/speechprosody-2026/1dc030c82e4e/figure-8.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/speechprosody-2026/1dc030c82e4e/figure-8.png)

区域 8 · [查看论文原页](https://www.isca-archive.org/speechprosody_2026/zuo26_speechprosody.pdf#page=2)

[![原文数学表达区域 9，PDF 第 2 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/speechprosody-2026/1dc030c82e4e/figure-9.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/speechprosody-2026/1dc030c82e4e/figure-9.png)

区域 9 · [查看论文原页](https://www.isca-archive.org/speechprosody_2026/zuo26_speechprosody.pdf#page=2)

[![原文数学表达区域 10，PDF 第 2 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/speechprosody-2026/1dc030c82e4e/figure-10.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/speechprosody-2026/1dc030c82e4e/figure-10.png)

区域 10 · [查看论文原页](https://www.isca-archive.org/speechprosody_2026/zuo26_speechprosody.pdf#page=2)

[![原文数学表达区域 11，PDF 第 2 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/speechprosody-2026/1dc030c82e4e/figure-11.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/speechprosody-2026/1dc030c82e4e/figure-11.png)

区域 11 · [查看论文原页](https://www.isca-archive.org/speechprosody_2026/zuo26_speechprosody.pdf#page=2)

[![原文数学表达区域 12，PDF 第 2 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/speechprosody-2026/1dc030c82e4e/figure-12.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/speechprosody-2026/1dc030c82e4e/figure-12.png)

区域 12 · [查看论文原页](https://www.isca-archive.org/speechprosody_2026/zuo26_speechprosody.pdf#page=2)

[![原文数学表达区域 13，PDF 第 2 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/speechprosody-2026/1dc030c82e4e/figure-13.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/speechprosody-2026/1dc030c82e4e/figure-13.png)

区域 13 · [查看论文原页](https://www.isca-archive.org/speechprosody_2026/zuo26_speechprosody.pdf#page=2)

另有 16 个候选区域因边界不明确或图片数量、尺寸限制未展开；请[查看完整论文](https://www.isca-archive.org/speechprosody_2026/zuo26_speechprosody.pdf)中的原始排版。

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。
- 评分规则：type-aware-v1
- 评分模型：muse-spark-1.3-contributor
- 评分请求协议：openai_responses

---

[← 返回 speechprosody-2026 论文汇总](/posts/conference-speechprosody-2026/)
