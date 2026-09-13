---
title: "FREQUENCY-BIN-WISE CONVEX SWITCHING FOR RELAXED JOINT BINAURAL LCMV BEAMFORMING"
date: 2026-09-13
draft: false
description: "针对双耳助听中降噪与干扰声方向保持的矛盾，论文提出按频点在高降噪与严格保方向之间做凸组合切换，并在与松弛联合双耳约束相同方向误差下获得更高信干噪比，其代价是在大松弛量时部分频点仍需求解松弛优化而耗时增加。"
tags: ["助听器", "波束成形", "麦克风阵列", "语音", "语音增强"]
categories: ["eusipco-2026 论文"]
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_paper_id: "conference:eusipco:2026:conference-paper-id:0000126"
paper_digest_source_kind: conference
paper_digest_conference_id: "eusipco-2026"
paper_digest_conference_record_url: "https://eurasip.org/Proceedings/Eusipco/Eusipco2026/HTML/session-index/index.html"
paper_digest_conference_pdf_url: "https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0000126.pdf"
paper_digest_api_reader_contract: "beginner-researcher-v3"
paper_digest_api_reader_article_sha256: "253ea11e9296ce03f6b141c89c6e56ca3c87ff32be70f680c0b3e17551215afc"
paper_digest_api_reader_plan_sha256: "a1cffcd4ab48a1ee243222dd91433f83fdb46a2f6aad9c9d97c49726f2298c43"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings-v4"
paper_digest_api_reader_source_bindings_sha256: "83ba526227e0332128a0ec9fb994d843431b32c7cc03d9c65209ee1da9d4b70a"
paper_digest_api_reader_source_table_count: 2
paper_digest_api_reader_source_formula_count: 0
paper_digest_api_reader_structured_artifacts_sha256: "929a6226efe91a86785681d5d4863e76d1009fec792a5c56450da729729900e7"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity-v1"
paper_digest_api_reader_author_identity_sha256: "02a959f30911c86d5bb0d7794e95080f54cf1b047c89fda03210106c72463dd9"
paper_digest_api_reader_author_count: 2
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity-v1"
paper_digest_api_reader_resource_identity_sha256: "f7be155ecbb9eb5562d9115980ed78d9f2bf5f4e93142ff0bacba75eca3ce894"
paper_digest_api_reader_resource_count: 0
paper_digest_api_reader_decision_projection: "api-reader-decision-projection-v2"
paper_digest_scoring_contract: "api-scoring-audit-v2"
paper_digest_taxonomy_contract: "paper-taxonomy-flat-tags-compat-v1"
paper_digest_taxonomy_selection_contract: "paper-taxonomy-selection-v1"
paper_digest_taxonomy_registry_version: "paper-taxonomy-v1"
paper_digest_taxonomy_registry_sha256: "15c82a567ce5a55dc1175684ed08b64c158558639d9c8fb822c9587ec32a8778"
paper_digest_taxonomy_concepts: [{"facet":"application","id":"application.hearing-aids","label":"助听器"},{"facet":"method","id":"method.beamforming","label":"波束成形"},{"facet":"setting","id":"setting.microphone-array","label":"麦克风阵列"},{"facet":"signal","id":"signal.speech","label":"语音"},{"facet":"task","id":"task.speech-enhancement","label":"语音增强"}]
paper_digest_primary_task: "语音增强"
paper_digest_primary_method: "波束成形"
paper_digest_score: 5.6
paper_digest_rank_bucket: "前50%"
paper_digest_document_type: "方法研究"
paper_digest_conference_structure: replayable-pdf-layout-v1
---

# 📄 在低频要降噪、高频要保方向时：按频点凸切换松绑双耳约束

> 英文题目：*FREQUENCY-BIN-WISE CONVEX SWITCHING FOR RELAXED JOINT BINAURAL LCMV BEAMFORMING*

> 会议身份：`conference:eusipco:2026:conference-paper-id:0000126`


> ✅ 来源为官方会议 PDF；表格与 Figure 按原文证据绑定。PDF 公式以原页区域图片展示，未冒称作者原始 TeX。

> 会议来源：[官方记录](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/HTML/session-index/index.html) · [官方 PDF](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0000126.pdf)

标签：#助听器 #波束成形 #麦克风阵列 #语音 #语音增强

评分：**5.6/10** | 创新 1.2/2 | 技术严谨 1.0/1.5 | 实验充分 0.8/1.5 | 清晰度 0.7/1 | 影响力 0.8/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 0.8/1.5

排名：前50% | 文档类型：方法研究

## 👥 作者与机构

- Gangrade, Himesh：机构信息未能从会议 PDF 纯文本可靠映射
- Pradhan, Somanath：机构信息未能从会议 PDF 纯文本可靠映射

## 📌 核心摘要

双耳助听器需由左右耳麦克风阵列同时输出双耳信号，在压制四个干扰源与背景噪声的同时保留干扰源耳间传递函数以维持空间感知，而严格保真会占用自由度并削弱降噪能力。方法先解析求解保目标耳间传递函数的双耳最小方差无失真响应与附加干扰保真约束的联合双耳线性约束最小方差两组闭式权重，分别负责最大降噪与严格保空间线索，上一输出直接作为下一步凸组合的两个端点。接着以逐频点系数对二者做凸组合，并用网格搜索最小化保真误差与输出功率加权代价，所得最优系数直接给出该频点的切换权重。进一步将该系数作为松弛型联合双耳线性约束最小方差的逐频点松弛量，得到第二变体，使松弛量随频率自适应而非全频带统一。在TIMIT语料的1目标加4干扰评测场景下，CSWITCH在松弛量c为0.5条件的松弛参数指标为0.5，高于在松弛量c为0.08条件的松弛参数指标0.08。相比固定松弛，这种机制让语音能量集中的低频偏向双耳最小方差无失真响应以增强降噪，让高频偏向联合约束以严格保耳间传递函数，从而在等保真误差下获得更低残留功率。该结论适用边界受限于7米乘5米乘4米合成混响、固定几何与TIMIT语料场景，尚未验证真实双耳录音与多变混响下的外推性。原文以网格搜索代替内点法降低计算量，但高松弛量下延迟仍高于固定松弛方法，须权衡推理开销与降噪收益。

## 🔗 开源与复现资源

本次未形成可展示的已核验资源记录，开放状态尚未核实。
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 输入是什么，助听双耳波束形成要解决什么？

本文输入是双耳助听器两侧多麦克风在短时傅里叶变换域的多通道观测，每侧有多个麦克风且两侧可以通过无线链路共享信号，输出是左右耳各自的增强信号。目标有两个且互相牵制：一是对期望说话人保持无失真取出，二是保留干扰声的空间方向感，让听障用户在降噪后仍能定位警告声等环境声。必须保留的信息是这种双目标矛盾：只追求输出功率最小会把所有干扰声的耳间关系拉向目标方向，听起来方向坍缩。

把每个干扰声的耳间传递函数都用等式锁死又会吃掉自由度，导致降噪能力下降。本文的输出是一套按频点自适应松紧的双耳波束形成权重计算方法，以及在合成传递函数和语音数据上的仿真验证。学习时先沿一个时频点走完输入到输出：多通道观测向量包含目标分量、多个干扰分量与背景加传感器噪声，左右波束形成器分别加权求和得到左右输出，再用目标耳间比是否保持、干扰耳间比偏离多少、残留噪声功率多大来评价。

后续所有方法比较都围绕这 3 个量展开，不引入原文之外的听感评分或新数据集结论。

### 已有路线如何取舍降噪与方向保持？

从原文梳理的路线看，双耳最小方差无失真响应是起点，它把经典最小方差无失真响应搬到左右耳，只约束目标无失真，降噪最好但干扰声方向信息丢失。双耳线性约束最小方差在此基础上为干扰声增加耳间传递函数保持约束，方向保住了但降噪下降。带部分噪声估计的变体把波束形成输出与含噪麦克风信号混合，在背景噪声层面再做 1 次权衡。

联合双耳线性约束最小方差被报告能腾出一定自由度，从而保持更多干扰声的方向，这一步是为了解决约束太多导致自由度不够的问题。松弛双耳线性约束最小方差进一步允许对严格保持约束做受控偏离，用方向误差换降噪。参数化无约束波束形成器和按频带分别处理耳间相位差与耳间级差的方法，则代表另一条思路：不要求全频带同等严格，而是按听觉重要性在低频保相位差、高频保级差。

本文与这些工作的区别在于不固定全频带同一松紧，而是利用语音能量集中在低频这一先验，让低频更偏向降噪、高频更偏向严格保持，并用凸组合的切换参数逐频点实现。

### 为什么固定松弛量在全频带不够好？

论文指出的问题有两个层面。第一是建模层面：多数方法在全频谱维持均匀约束，无论是完全保持还是固定程度的松弛，都没有考虑语音能量在频谱上分布不均，低频集中了显著的语音功率。如果低频和高频用同样的方向保持严格度，就会在最需要降噪的语音主导频带浪费抑制能力，或在高频不必要地放松方向要求。

第二是计算层面：松弛联合双耳线性约束最小方差需要用内点法等复杂优化求解权重，处理延迟可能超过助听器延迟要求，且固定参数化意味着每个频点都要付出相近的求解代价。因此问题可表述为：能否在每个频率点独立选择一个松紧程度，使总方向误差与固定松弛方法相当，但总输出噪声更低，同时平均计算时间更短。

例子仅为教学：好比低频段是说话内容最密集的车道，应优先清障，高频段是看路标的窗口，应优先保真，固定限速不如按路段动态限速，例子不对应任何原文数值。

### 按频点凸切换的全景是什么？

方法全景可以概括为两端加一根逐频滑动杆。两端是现成的闭式解：高降噪端是双耳最小方差无失真响应权重，严格保方向端是联合双耳线性约束最小方差权重。滑动杆是每个频点独立的凸切换参数，取值在 0 到 1 之间，权重等于该参数乘以降噪端权重加上余量乘以保方向端权重。取值为 1 时退化为降噪端，取值为 0 时退化为保方向端，中间值则是两者的线性插值。

选择滑动位置的依据是一个新代价函数，它把约束残差的平方范数与输出功率相加，前者乘以控制参数。控制参数越大，优化越在乎方向误差，选出的切换参数越偏向保方向端；反之越偏向降噪端。求解时对每个频点用网格搜索枚举切换参数，计算代价并保留最小者。在此基础上论文还给出第二种用法：把搜到的切换参数直接作为松弛方法的松弛量，只在切换参数严格位于 0 和 1 之间时才求解松弛优化，两端直接复用闭式解，以此减少总体计算量。

前者称为凸切换，后者称为基于凸切换的松弛方法。

### 两端权重各自如何算，方向误差如何定义？

先看信号表示。设共有 M 个麦克风，每耳 M 除以 2 个，M 为偶数。目标到各麦克风的声学传递函数组成导向向量，干扰声同理，观测向量等于目标向量加多个干扰向量加噪声向量。在目标、干扰与噪声互不相关的假设下，观测协方差等于目标协方差加上干扰加噪声协方差之和，这是后文最小化输出功率的统计基础。双耳最小方差无失真响应左右分别最小化输出功率并约束对目标导向向量的响应等于左右参考麦克风处的目标传递函数值，用拉格朗日乘子可得闭式解。

该约束保证目标耳间比在输出端与输入端一致，但对干扰声没有约束，干扰声输出耳间比一般不等于输入耳间比，方向误差定义为两者之差。联合方法把问题写成统一的 2 次最小化加线性等式，把目标约束与干扰声耳间保持约束堆叠成大约束矩阵，同样有闭式解，理想情况下干扰声方向误差接近于零。

**双耳最小方差无失真响应 × 联合双耳线性约束最小方差：** 双耳最小方差无失真响应负责只对目标保持无失真并最小化总输出功率，分工是把降噪推到极限；联合双耳线性约束最小方差负责额外增加对每个干扰声耳间传递函数保持的等式约束，分工是把方向线索锁死。两者搭配的原因是它们恰好占据权衡的两端，凸切换把两者权重按频点混合后，就在不重写约束优化的前提下得到中间状态，这是本文用线性组合代替逐频点重解复杂优化的关键。

理解时注意左右权重是联合求解的长向量，不是两个独立单耳问题，因为约束矩阵把左右耦合在一起，这也是后文约束残差能同时看到左右误差的原因。

### 松弛约束与逐频凸组合如何衔接？

松弛方法的改动是把干扰声的严格等式换成不等式：左右输出对干扰导向向量的加权比与参考麦克风处真值的允许偏差不超过给定阈值。该阈值被写成松弛系数乘以双耳最小方差无失真响应下的方向误差，松弛系数在 0 到 1 之间，越小越严格，越大越放松。原文用凸近似与专用工具箱求解该问题，代价是计算量大。凸切换不直接解不等式，而是先算好两端闭式解，再按频点插值。

代价函数中的第一项是约束残差的平方，即把当前插值权重代入大约束方程后与目标约束向量的距离，第二项是当前插值权重的 2 次输出功率。网格搜索步长取 0.01，从 0 到 1 枚举，保留代价最小的切换参数。若把该参数回填为松弛系数，就得到第二种方法：两端直接取闭式解，只有中间值才调用松弛优化。这种条件调用是节省时间的来源，但在松弛量较大时多数频点落入中间区，节省效果会减弱甚至反转，后文实验部分会回到这一点。

**耳间传递函数 × 耳间传递函数误差：** 耳间传递函数负责描述同一声源到左右参考麦克风的复数比值，分工是携带方向感知的物理量；耳间传递函数误差负责度量波束形成器输出后该比值偏离输入真值的程度，分工是评价方向保持好坏的标尺。搭配理由是只谈传递函数无法比较不同方法，而误差把双耳最小方差无失真响应的坍缩、联合方法的零误差和松弛方法的受控偏离放在同一刻度上，组合意义是后文用相对误差归一化和代价函数中的约束残差项都有了明确目标。

**松弛联合双耳线性约束最小方差 × 凸切换参数：** 松弛联合双耳线性约束最小方差负责把严格等式放宽为允许偏离的不等式，分工是用可控的方向误差换回自由度和降噪；凸切换参数负责决定每个频点上高降噪端和严格保方向端各占多大比例，分工是逐频点选择松紧程度。搭配原因是固定松弛量对所有频点一视同仁，而语音能量集中在低频，凸切换参数让低频偏向降噪端、高频偏向保方向端，组合后既得到逐频自适应松弛，又在取值为 0 或 1 时退化为已有两种波束形成器，避免了无谓的复杂求解。

### 本研究训练了什么，没有训练什么？

本研究没有训练神经网络，也没有更新声学传递函数或语音模型参数，不存在梯度反传、冻结层或训练轮次的概念，必须明确这一点以免误读。真实计算过程分为估计与优化两类。估计类包括用镜像源法生成混响房间的声学传递函数，用语音活动检测方法只在噪声段估计噪声协方差，用重叠相加分析合成流程做短时傅里叶变换。优化类包括两端权重的闭式计算、每个频点网格搜索切换参数、以及在需要时调用凸优化工具箱求解松弛问题。

控制参数是按不同松弛量试凑选择的，目的是让两种新方法的总方向误差与固定松弛方法对齐，原文明确指出该参数依赖信号特性和干扰个数，给定松弛量下需要重新试凑，没有给出自动调参公式。网格步长固定为 0.01，这决定了搜索精度与计算量的折中，但原文未报告更换步长后的敏感性。

**控制参数 × 网格搜索：** 控制参数负责在代价函数中平衡约束残差项与输出功率项的权重，分工是决定整体偏向保方向还是偏向降噪；网格搜索负责在 0 到 1 区间以固定步长枚举凸切换参数并取代价最小者，分工是给出每个频点可执行的求解过程。搭配原因是代价函数关于切换参数的解析最优不易直接得到，网格搜索用计算量换简单可靠，组合意义是调大控制参数会迫使搜索结果偏向严格保方向端，调小则偏向降噪端，这也是实验中为对齐相同方向误差而按不同松弛量试出不同控制参数的原因。

### 仿真条件如何搭建，评价指标方向是什么？

为保证可复述，先把信号链条件讲全。短时分析采用重叠相加方法，窗与变换参数决定了频点划分与时频分辨率；语音取自常用连续语音库并截断，干扰与目标的能量比、传感器噪声电平都做了固定，声源与阵列几何、房间混响也做了固定。这些固定的好处是不同波束形成器看到的是同一批观测，比较时公平；局限是合成传递函数不含头影效应，与真实双耳录音仍有差距。

评价用 3 个方向明确的指标：信号干扰噪声比越大越好，总输出噪声功率越小越好，耳间传递函数误差越小方向保持越好，其中方向误差还做了相对双耳最小方差无失真响应误差的归一化展示。比较对象包括高降噪端、严格保方向端、固定松弛方法以及两种新方法，松弛量取多个离散值以观察趋势。计算成本用每个频点计算权重向量的平均时间衡量。

下表把信号处理与语料条件整理成可核对的宽表，表前问题是：不同方法是否在相同时频划分和相同信噪设置下比较，指标单位是什么。表中数字与单位均保留原文写法，裸值不擅自添加百分号，千分位与小数精度不改动。

| 信号链环节 | 指标与参数 | 取值一 | 取值二 | 对照取值 |
| --- | --- | --- | --- | --- |
| 短时分析合成 | 采样率与变换点数 | 16 kHz | 128 points | 50% overlap |
| 短时分析合成 | 窗长与等效时长 | 100 samples | 6.25 ms | 50% overlap |
| 语音与噪声设置 | 时长与能量比 | 4 seconds | 0 dB | 20 dB |

表后解释是：该表的作用是锁定复现时必须一致的时频划分与能量条件，采样率与变换点数决定频点数，窗长与重叠决定时间平滑，时长与能量比决定任务难度。若复现时改动其中任一项，信号干扰噪声比与噪声功率的绝对值都会漂移，此时只能比较相对趋势，不能直接对比原文曲线高低。

未胜出项在此处体现为原文未报告更换窗长或重叠率后的鲁棒性，这是明确的未评测边界。

### 房间、阵列与声源几何如何固定？

第二个条件表的比较问题是：空间几何是否对所有方法一致，方向保持的难度是否相同。原文把房间尺寸、混响时间、每侧麦克风数、左右阵列间距、阵内麦克风间距、目标与干扰角度、声源距离全部固定，这意味着干扰声与目标的空间可分性对所有方法相同，方向误差的差异只能来自算法本身而非几何变化。目标在正前方附近，4 个干扰分布在不同方位，距离阵列中心相同，这种配置同时考验前向干扰抑制与侧后方干扰的方向保持。

需要提醒的是镜像源法生成的传递函数是对称房间近似，没有头部遮挡，真实助听场景的方向线索会更复杂，因此仿真中的方向误差偏小不能直接推广为真机效果。

| 空间环节 | 几何参数 | 取值一 | 取值二 | 对照取值 |
| --- | --- | --- | --- | --- |
| 房间与阵列 | 房间尺寸与混响 | 7 m x 5 m x 4 m | 200 ms | M2 = 2 number of microphones on both left and right microphone arrays |
| 声源与阵列 | 角度与距离 | 90° | 34°, 156°, 196°, and 289° | 2 meters away from the center of the room |
| 阵列间距 | 左右与阵内间距 | 0.17 m | 0.012 m | 2 meters away from the center of the room |

表后解释是：该表的主要收益是让复现者能按相同几何重建传递函数，代价是真实头部效应缺失，方向保持在高频的难度被低估。

原文也声明该空间配置仅为评估之用，新方法可用于其他配置，但未给出其他配置下的数字，因此跨房间推广属于待验证推测，只能表述为可能适用，不能写成已验证。

### 在相同方向误差下，降噪提升来自哪里？

主结果的组织逻辑是先对齐方向误差，再看降噪。原文为每种固定松弛量试出对应的控制参数，使两种新方法的总耳间传递函数误差与固定松弛方法相近，归一化误差曲线显示三者随松弛量变化的趋势基本重合。在此对齐条件下，信号干扰噪声比曲线显示新方法高于固定松弛方法，并随松弛量增大向高降噪端靠近；总输出噪声功率曲线显示新方法显著低于固定松弛方法，同样向高降噪端靠近。

机制解释是切换参数在低频取较大值、高频取接近零的值，低频偏向降噪端以压低主导语音频带的残留噪声，高频偏向严格保方向端以守住方向误差，总误差不变但总功率下降。这与语音能量集中在低频的先验一致，不是全频带均匀放松能做到的。

**信号干扰噪声比 × 总输出噪声功率：** 信号干扰噪声比负责从目标与残留干扰加噪声之比看增强效果，分工是越大越好；总输出噪声功率负责直接看残留干扰加噪声的绝对功率，分工是越小越好。两者搭配的原因是单一指标可能被目标失真或功率归一掩盖，同时看两者才能确认提升来自真正的干扰噪声抑制而非目标放大，组合意义是论文同时报告两者随松弛量的变化，才能支撑在相同方向误差下降噪更好的判断。

需要区分报告与推测：原文报告的是在该仿真配置下对齐误差后的降噪优势，支持逐频切换比固定松弛更有效地利用自由度；但未测量语音失真听感分或可懂度，相关性不等于因果，不能把信号干扰噪声比提升直接写成听感必然变好。

### 计算时间省在哪里，又在何时反超？

成本结果按每个频点平均耗时比较。凸切换只做闭式加权与代价计算，不调用复杂优化，因此权重计算远快于固定松弛方法，这是明确的效率收益。基于凸切换的松弛方法采用条件调用：切换参数为 1 直接取降噪端，为 0 直接取保方向端，只有中间值才求解松弛优化。在松弛量较小时，高频多为严格保持端，耗时介于凸切换与固定松弛之间；在松弛量较大时，控制参数试凑结果使更多频点落入中间区，调用次数上升，平均耗时甚至超过固定松弛方法。

原文把这部分代价归因于所选控制参数导致高频不再是紧约束，切换参数不再取零。这说明第二种方法的加速是有条件的，不能笼统承诺任何松弛量下都更快。训练资源、推理开销与实际延迟在此要分开：原文只报告权重计算时间，未报告整机帧率、输入输出延迟或功耗，因此不能用权重计算更快推定助听器端到端延迟一定达标。

### 若去掉逐频自适应或换掉控制参数会怎样？

论文没有以消融表形式逐项删除模块，但提供了可作反证解读的对照。首先是两端对照：高降噪端与严格保方向端分别给出性能上下界，新方法曲线位于两者之间且随松弛量滑动，这验证了插值确实在两端之间连续过渡，而非偶然单点最优。其次是松弛量扫描：从小到大改变固定松弛量并同步调整控制参数，方向误差、信号干扰噪声比、噪声功率 3 条趋势同时移动，说明结果不是某个特定松弛量下的孤立现象。

第三是控制参数的试凑表：不同松弛量对应不同的控制参数，且两种新方法各自有一套取值，这表明控制参数不是通用常数，若复现时沿用错误档位，对齐误差的前提会被打破，降噪比较将失去公平性。缺项也要指出：原文未报告固定切换参数全频取同一中间值的结果，也未报告网格步长从 0.01 放大或缩小后的变化，因此无法从现有证据量化逐频自适应的独立贡献，只能说趋势支持而非证明必须逐频。

### 哪些边界尚未验证，不能承诺什么？

从证据看至少有四项明确边界。第一是数据边界：仅用合成传递函数与截断语音，未用含头影效应的真实双耳录音，方向保持结论不能直接搬到真机。第二是参数边界：控制参数靠试凑且依赖信号与干扰个数，没有自动调参方法，换场景需重新搜索，部署时的人工成本未计入。第三是成本边界：只报告每频点权重计算时间，未测量语音活动检测误差、协方差估计误差、整体延迟与功耗，低耗时不等于低延迟。

第四是指标边界：未报告目标失真、语音质量、可懂度或主观定位实验，降噪提升不能等同于听感提升。这些缺失不是技术错误，但决定了表达分寸：凡是原文直接报告的用报告显示，凡是趋势外推的用可能待验证。总体趋势不等于每组每步都成立，例如大松弛量下第二种方法的耗时反超就是反例，写作时必须保留这类不利项。

### 要复现应先固定什么，再调什么？

复现的第一步是锁定信息条件：按原文短时参数、房间与阵列几何、声源角度与距离、能量比与噪声电平重建观测，噪声协方差只用语音活动检测给出的噪声段估计，不要用全段理想协方差代替，否则降噪会被高估。第二步是实现两端闭式解并验证两端行为：降噪端应出现干扰方向坍缩，严格保方向端应出现方向误差接近零但降噪较差，若两端行为不对，后续插值无意义。

第三步是实现网格搜索并按松弛量试凑控制参数，目标是先对齐总方向误差再比较降噪，不要直接比较未对齐的绝对值。第四步记录每频点权重计算时间并区分两端直接取值与中间调用优化的比例，以复现耗时反超现象。关于可用性：本次收到的证据中未发现来源绑定且完成验证的资源，不得声称代码模型或数据已公开，复现应按自实现处理。

常见误解是把无训练等同于确定性求解，实际上网格搜索与凸优化工具箱的数值容差、协方差估计误差都会带来波动，多次运行应报告均值与离散。

### 何时值得尝试这种逐频切换？

当任务同时要求降噪与方向感知、且语音能量明显集中在低频时，这种逐频凸切换值得尝试。它的价值在于用简单的线性插值与网格搜索替代全频统一的复杂松弛求解，在保持总方向误差相当的前提下把抑制火力集中到语音主导频带。若应用场景是全频带同等重要的非语音信号，或方向线索主要在低频的特殊配置，则原文的低频偏降噪假设不再成立，不应照搬控制参数档位。

动手前保留关键超参数：网格步长 0.01、按松弛量试凑的控制参数、只用噪声段估计协方差、固定几何与能量比。还需补的验证是真实双耳录音下的定位实验、目标失真与可懂度评估、以及端到端延迟与功耗测量。只有补齐这些，才能从仿真中的功率优势走向助听器可部署的结论。

## 📐 原文公式与排版

以下展示论文原页中的数学表达区域，保留原始上下标、分式和符号排版。区域序号仅用于本文导航，不是论文公式编号。

[![原文数学表达区域 1，PDF 第 2 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/bf015bb9d156/figure-1.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/bf015bb9d156/figure-1.png)

区域 1 · [查看论文原页](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0000126.pdf#page=2)

[![原文数学表达区域 2，PDF 第 2 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/bf015bb9d156/figure-2.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/bf015bb9d156/figure-2.png)

区域 2 · [查看论文原页](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0000126.pdf#page=2)

[![原文数学表达区域 3，PDF 第 2 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/bf015bb9d156/figure-3.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/bf015bb9d156/figure-3.png)

区域 3 · [查看论文原页](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0000126.pdf#page=2)

[![原文数学表达区域 4，PDF 第 2 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/bf015bb9d156/figure-4.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/bf015bb9d156/figure-4.png)

区域 4 · [查看论文原页](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0000126.pdf#page=2)

[![原文数学表达区域 5，PDF 第 3 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/bf015bb9d156/figure-5.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/bf015bb9d156/figure-5.png)

区域 5 · [查看论文原页](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0000126.pdf#page=3)

[![原文数学表达区域 6，PDF 第 3 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/bf015bb9d156/figure-6.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/bf015bb9d156/figure-6.png)

区域 6 · [查看论文原页](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0000126.pdf#page=3)

[![原文数学表达区域 7，PDF 第 3 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/bf015bb9d156/figure-7.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/bf015bb9d156/figure-7.png)

区域 7 · [查看论文原页](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0000126.pdf#page=3)

[![原文数学表达区域 8，PDF 第 3 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/bf015bb9d156/figure-8.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/bf015bb9d156/figure-8.png)

区域 8 · [查看论文原页](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0000126.pdf#page=3)

[![原文数学表达区域 9，PDF 第 3 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/bf015bb9d156/figure-9.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/bf015bb9d156/figure-9.png)

区域 9 · [查看论文原页](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0000126.pdf#page=3)

[![原文数学表达区域 10，PDF 第 3 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/bf015bb9d156/figure-10.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/bf015bb9d156/figure-10.png)

区域 10 · [查看论文原页](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0000126.pdf#page=3)

[![原文数学表达区域 11，PDF 第 3 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/bf015bb9d156/figure-11.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/bf015bb9d156/figure-11.png)

区域 11 · [查看论文原页](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0000126.pdf#page=3)

[![原文数学表达区域 12，PDF 第 3 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/bf015bb9d156/figure-12.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/bf015bb9d156/figure-12.png)

区域 12 · [查看论文原页](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0000126.pdf#page=3)

[![原文数学表达区域 13，PDF 第 3 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/bf015bb9d156/figure-13.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/bf015bb9d156/figure-13.png)

区域 13 · [查看论文原页](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0000126.pdf#page=3)

[![原文数学表达区域 14，PDF 第 4 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/bf015bb9d156/figure-14.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/bf015bb9d156/figure-14.png)

区域 14 · [查看论文原页](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0000126.pdf#page=4)

[![原文数学表达区域 15，PDF 第 4 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/bf015bb9d156/figure-15.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/bf015bb9d156/figure-15.png)

区域 15 · [查看论文原页](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0000126.pdf#page=4)

另有 35 个候选区域因边界不明确或图片数量、尺寸限制未展开；请[查看完整论文](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0000126.pdf)中的原始排版。

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。
- 评分规则：type-aware-v1
- 评分模型：muse-spark-1.3-contributor
- 评分请求协议：openai_responses

---

[← 返回 eusipco-2026 论文汇总](/posts/conference-eusipco-2026/)
