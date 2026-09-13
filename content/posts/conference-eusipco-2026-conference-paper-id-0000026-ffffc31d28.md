---
title: "DYNAMIC SOUND ZONE CONTROL CONSIDERING MOVEMENT SMOOTHING BY BLOCK MATRIX"
date: 2026-09-13
draft: false
description: "针对亮区固定、暗区用户移动时离散切换会掉声对比度并引起系数跳变的问题，该文把整段轨迹滤波器拼成块矩阵并在分母加相邻差分平滑项做广义瑞利商最大化，仿真报告最小声对比度最多提升约 7 dB，代价是峰值提升有限且引入平滑正则权衡。"
tags: ["正则化", "信号处理", "麦克风阵列", "空间音频信号", "空间音频渲染"]
categories: ["eusipco-2026 论文"]
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_paper_id: "conference:eusipco:2026:conference-paper-id:0000026"
paper_digest_source_kind: conference
paper_digest_conference_id: "eusipco-2026"
paper_digest_conference_record_url: "https://eurasip.org/Proceedings/Eusipco/Eusipco2026/HTML/session-index/index.html"
paper_digest_conference_pdf_url: "https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0000026.pdf"
paper_digest_api_reader_contract: "beginner-researcher-v3"
paper_digest_api_reader_article_sha256: "236a2518cf947e3cd1cbf667f8bdef9b8e72e7d7cece77b5f100b85e7c562ef4"
paper_digest_api_reader_plan_sha256: "d99861e1594da16ac447ed2583813329d2f74c9df93761ed44a67dbbe1699352"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings-v4"
paper_digest_api_reader_source_bindings_sha256: "64f125c9508420f6b844afe47460838e3df77f2f3b20f9fb7cf9650e459728ea"
paper_digest_api_reader_source_table_count: 2
paper_digest_api_reader_source_formula_count: 0
paper_digest_api_reader_structured_artifacts_sha256: "b5c708c0639d71d99235a5c9add75696c3ac4a8ca3de25b6f392a37fa7b8e71a"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity-v1"
paper_digest_api_reader_author_identity_sha256: "137a23a029960801edd05663dc6872a412bca924f625fef33b3fddd7f1b32902"
paper_digest_api_reader_author_count: 5
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity-v1"
paper_digest_api_reader_resource_identity_sha256: "3b4e3b8ab4889e887d9f6ef8f883186d3ce7fae59349b8038b53ae7d7db96e23"
paper_digest_api_reader_resource_count: 0
paper_digest_api_reader_decision_projection: "api-reader-decision-projection-v2"
paper_digest_scoring_contract: "api-scoring-audit-v2"
paper_digest_taxonomy_contract: "paper-taxonomy-flat-tags-compat-v1"
paper_digest_taxonomy_selection_contract: "paper-taxonomy-selection-v1"
paper_digest_taxonomy_registry_version: "paper-taxonomy-v1"
paper_digest_taxonomy_registry_sha256: "15c82a567ce5a55dc1175684ed08b64c158558639d9c8fb822c9587ec32a8778"
paper_digest_taxonomy_concepts: [{"facet":"method","id":"method.regularization","label":"正则化"},{"facet":"method","id":"method.signal-processing","label":"信号处理"},{"facet":"setting","id":"setting.microphone-array","label":"麦克风阵列"},{"facet":"signal","id":"signal.spatial-audio","label":"空间音频信号"},{"facet":"task","id":"task.spatial-rendering","label":"空间音频渲染"}]
paper_digest_primary_task: "空间音频渲染"
paper_digest_primary_method: "信号处理"
paper_digest_score: 6.0
paper_digest_rank_bucket: "前50%"
paper_digest_document_type: "方法研究"
paper_digest_conference_structure: replayable-pdf-layout-v1
---

# 📄 移动中不掉对比度：用块矩阵把整段轨迹的滤波器一起算

> 英文题目：*DYNAMIC SOUND ZONE CONTROL CONSIDERING MOVEMENT SMOOTHING BY BLOCK MATRIX*

> 会议身份：`conference:eusipco:2026:conference-paper-id:0000026`


> ✅ 来源为官方会议 PDF；表格与 Figure 按原文证据绑定。PDF 公式以原页区域图片展示，未冒称作者原始 TeX。

> 会议来源：[官方记录](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/HTML/session-index/index.html) · [官方 PDF](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0000026.pdf)

标签：#正则化 #信号处理 #麦克风阵列 #空间音频信号 #空间音频渲染

评分：**6.0/10** | 创新 1.2/2 | 技术严谨 1.0/1.5 | 实验充分 0.9/1.5 | 清晰度 0.8/1 | 影响力 0.8/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 1.0/1.5

排名：前50% | 文档类型：方法研究

## 👥 作者与机构

- Nishikata, Manami：机构信息未能从会议 PDF 纯文本可靠映射
- Noguchi, Kenichi：机构信息未能从会议 PDF 纯文本可靠映射
- Kozuka, Shihori：机构信息未能从会议 PDF 纯文本可靠映射
- Kako, Tatsuya：机构信息未能从会议 PDF 纯文本可靠映射
- Kamamoto, Yutaka：机构信息未能从会议 PDF 纯文本可靠映射

## 📌 核心摘要

本文处理开放空间个人声区重放任务，输入为多扬声器到离散传声器阵列的传递函数与移动用户位置，输出为沿轨迹连续更新的控制滤波器序列，难点在于离散点切换会在控制点之间产生声对比度骤降与系数跳变。首先用选择矩阵对亮区与暗区邻近控制点传声器做位置加权插值，构造随用户位置连续变化的亮区与暗区相关矩阵，其输出直接作为下一步联合优化的相关量输入。接着将整段轨迹多个时刻的滤波器堆叠为块向量并将相关矩阵扩展为块对角矩阵，把逐点瑞利商推广为整段轨迹联合优化目标。然后在分母中加入相邻滤波器差分矩阵的二次型平滑惩罚，联合求解广义特征值问题得到兼顾对比度与连续性的滤波器序列。与字典切换和线性插值相比，该机制用轨迹级联合优化替代逐点独立设计，从原理上抑制了中点性能凹陷。在小尺度三控制点设置下，Block方法的声对比度指标为26.8 dB，高于Dictionary基线的声对比度指标20.6 dB。该结论适用边界受限于500 Hz至2000 Hz仿真房间与固定亮区加直线移动暗区，尚未验证复杂轨迹与真实房间的外推。每次滑动更新的计算量为原文给出的O(KT3L3)，但原文未实测延迟对应的推理开销。

## 🔗 开源与复现资源

本次未形成可展示的已核验资源记录，开放状态尚未核实。
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 输入是什么：开放空间里要跟人走的声音分区

本文输入是一个开放空间个人声音分区问题。场景是办公室多人网络会议：需要把清晰语音送到目标听者所在的亮区，同时把周围路人所在的暗区漏声压下去。输出是每个频率点上驱动全部扬声器的复数控制滤波器向量，长度等于扬声器总数。必须保留的信息是亮区固定、暗区随用户移动，传声器阵列只在离散控制点提前测好传递函数，运行时不依赖传声器实时参与处理，而是靠传感器估计的用户位置去更新滤波器。

本文目标不是做一个通用语音模型，而是解决移动带来的两个具体困难：一是控制位置变化时漏声增大，二是滤波器系数突变带来过驱动或可闻伪影。解读的输出是一套可核对、可复述的方法链条：从目标函数怎么写，到移动怎么编码，再到仿真条件和对照结果。学习时先抓住能量比和复现误差这两条路线，再看本文如何把移动平滑塞进同一个优化问题。

后续各节按任务与路线、方法全景、组件计算、构造过程、实验条件、结果反证、复现收束展开，每节只讲原文实际给出的安排和数字。

### 相关路线怎么分：对比度、匹配与移动处理有何取舍？

初学者先把 3 条路线分开。第一条是声对比度控制，英文为 Acoustic Contrast Control，缩写为 ACC，做法是最大化亮区与暗区功率比，优点是可以写成广义瑞利商并得到解析解，缺点是不直接约束亮区复现的波形细节。第二条是压力匹配，英文为 Pressure Matching，缩写为 PM，做法是最小化亮区复现误差，优点是目标声场明确，缺点是对移动和暗区抑制的兼顾不足。第 3 条是混合扩展，做法是在两者之间加权或加约束，本文也属于这一思想，但把重点放在移动连续性上。

原文回顾的移动处理包括控制点之间切换或插值、用滤波 X 最小均方算法实时更新、用移动视界控制滚动优化。原文明确指出的取舍是：切换和插值在控制点之间性能会下降，系数快速变化可能引起过大驱动电平或可闻伪影。因此本文不是简单换一个权重，而是把移动方向的连续性写进目标函数，同时处理对比度、复现质量和驱动电平。

资源状态方面，本次收到的证据中没有发现来源绑定且完成超文本传输安全协议状态验证的资源，因此不得声称代码、模型或数据已公开，只能按仿真描述复述可重放条件。

### 问题如何定义：位置一变，滤波器为什么要换？

设扬声器总数为 L，传声器总数为 M，每个频率点的全部传递函数矩阵记为 H。用户在亮区和暗区的位置分别记为亮区用户位置和暗区用户位置，合写为用户配置。控制滤波器是长度为 L 的复向量，随用户配置和频率变化。因为推导在每个频率独立进行，后文省略角频率。系统概念是扬声器包围包含亮区和暗区的整个控制区域，控制区域内按离散位置布设传声器阵列，每个阵列中心被当作控制点。

滤波器设计依赖提前测好的传递函数，运行时只用位置估计触发更新。举一个教学例子帮助理解，不代表原文数值：假设用户向右走了一小步，最近的暗区控制点从左侧切换到右侧，若仍用旧滤波器，暗区传声器处的功率不再最小，漏声就会变大；若直接换新滤波器，前后两组系数可能相差很大，扬声器驱动会跳变。这就是本文要形式化的矛盾：既要在新位置保持亮暗比，又要让相邻时刻的系数变化受到约束。

原文把亮区目标定为虚拟源到亮区控制点的自由场传递函数向量，记为期望向量，暗区目标是所选传声器位置的声功率最小，并加正则参数防止扬声器输出过大。

### 方法全景：一个样本如何走完输入到输出？

沿一个样本走一遍。输入是当前估计的用户位置和提前测好的传递函数矩阵。第一步是位置到传声器选择：找到离用户最近的相邻控制点，用插值权重把两个离散选择矩阵加权成当前位置的选择矩阵，从而得到当前位置的亮区相关矩阵和暗区相关矩阵。第二步是单点目标：亮区用期望向量与合成声压内积的平方幅度最大化，对应亮区相关矩阵的 2 次型；暗区用合成声压平方范数最小化，对应暗区传递函数相关加正则的 2 次型。

二者相除构成广义瑞利商。第三步是整段联合：把轨迹上从起始时刻到结束时刻的滤波器向量纵向堆成块向量，把各时刻相关矩阵排成块对角矩阵，再构造相邻差分矩阵，把相邻系数差平方和写成 2 次型并乘以平滑参数后放进分母。第四步是求解与应用：最大化这个带平滑的广义瑞利商，1 次得到整段轨迹的滤波器序列；小尺度下假设短时轨迹可预测而做整段批优化，大尺度下把三点计算块沿路径滑动并取最新覆盖当前位置的滤波器输出。

整条链条的输入是位置序列加传递函数，输出是连续滤波器序列，新增作用是同时保证对比度、复现和连续性。

### 亮区与暗区目标：对比度和复现如何写进同一个比值？

本节只讲单点目标的构造。亮区采用压力匹配的思想，但原文强调不追求严格波形一致，因为完全反相的复现感知等价却会被严格准则判为失败，所以改为最大化期望声场与合成声场向量之间幅度余弦相似度。具体做法是取期望向量与亮区传递函数矩阵乘滤波器的内积，再取平方幅度，展开后得到滤波器的 Hermitian 2 次型，其核即亮区相关矩阵。暗区采用类似声对比度控制的做法，最小化所选传声器位置的声功率，展开后得到暗区相关矩阵再加正则单位阵。

正则参数的原文取值为传递函数能量迹除以扬声器数再乘以系数，作用是防止过大扬声器驱动。最后把亮区 2 次型放分子、暗区 2 次型放分母，构成目标函数。最大化该比值意味着同时提升亮区复现相似度和压低暗区功率。符号约定是上标 H 表示共轭转置，I 表示单位阵，Ma 表示每个阵列的传声器数，M 等于单阵列数乘阵列个数。

**声对比度控制 × 压力匹配：** 声对比度控制分工是压低暗区功率、拉开亮暗能量比，压力匹配分工是在亮区复现目标声场；二者搭配是因为只压暗区可能亮区听感差、只匹配亮区可能漏声大，组合意义是本文用亮区余弦相似对应的相关矩阵做分子、用暗区功率加正则做分母，写成一个广义瑞利商同时兼顾可听复现和漏声抑制。

理解时注意分子不是直接的误差平方，而是相似度对应的相关结构；分母不是单纯的暗区功率，而是加了正则的版本，这为后续加入平滑项留出了位置。

### 移动如何编码：选择矩阵与块矩阵各自管什么？

本节讲移动的两种编码。第一种是传声器选择矩阵，记为 S。它是 M 乘 M 对角阵，选中传声器对应对角元为 1，其余为 0。原文给的例子是总数为 6、每阵列 2 个时选第一个控制点写成对角线为 1、1、0、0、0、0 的形式。用户位置的选择矩阵由相邻两个控制点的选择矩阵线性插值得到，权重为用户到一端控制点的距离除以两控制点间距。

这种写法的好处是只要在预布设位置测好传递函数，中间任意位置都能立即组合出近似传递函数结构，进而改写亮区和暗区相关矩阵。第二种是块矩阵。把轨迹上离散时刻的用户配置记为从 Y 到 Z，把各时刻滤波器堆成块向量 Q，把各时刻相关矩阵排成块对角矩阵。平滑项定义为相邻时刻滤波器差的平方范数之和，可用差分矩阵表示，差分矩阵每行是单位阵与负单位阵的拼接。最终目标是块向量的亮区 2 次型除以暗区 2 次型加平滑 2 次型，平滑参数记为贝塔。

**选择矩阵 × 块矩阵：** 选择矩阵分工是从全部传声器中按用户位置挑出当前亮区或暗区对应的麦克风子集并做相邻控制点线性插值，块矩阵分工是把轨迹上多个时刻的滤波器向量和对应相关矩阵沿时间堆成一个联合优化变量；搭配理由是单点优化只管离散控制点，组合后才能在没有预设控制点的轨迹段上同时优化对比度和连续性。

**广义瑞利商 × 平滑项：** 广义瑞利商分工是给出分子亮区相关、分母暗区加正则的比值型目标，其最大值对应特征值问题的解析解，平滑项分工是惩罚相邻时刻滤波器差分的平方和以抑制系数跳变；搭配理由是直接拼接多时刻目标仍可能相邻滤波器突变，组合意义是把差分矩阵的 2 次型放进分母，与声对比度联合求解整段连续滤波器序列。

这样做的效果是优化不再逐点独立，而是整段轨迹联合求解，自然包含没有预设控制点的中间段。

### 没有神经网络训练时，计算过程到底是什么？

本研究没有训练神经网络，因此本节明确说明未训练哪些模型：没有声学神经网络、没有端到端权重更新、没有训练集梯度下降，也不能把无训练等同于确定性求解。真实计算过程是基于仿真的频率域滤波器构造与特征值求解。传递函数用房间声学仿真库生成，滤波器设计与性能评估在 500 到 2000 赫兹范围内按离散傅里叶变换逐频率进行。

每个频率上构造亮区相关块对角矩阵和暗区相关块对角矩阵，再加差分平滑项，最大化广义瑞利商对应求解广义特征值问题，取最大特征值对应的特征向量作为块滤波器序列。不存在冻结或更新神经网络参数、梯度路径、监督标签或重置时机，原文未报告这些概念，缺项即明确指出未报告，不从方法名称推定实现。小尺度称为块方法，假设用户移动没有突变方向且短时轨迹可从当前位置预测，直接做整段批优化。

大尺度称为滑动方法，把三点滤波器设计作为计算块，沿顺序估计路径每次平移一个控制点并重新计算，评估时取最近 1 次覆盖该位置的块的滤波器。两种方法的空间步长原文分别给出，块方法更密，滑动方法较疏。

### 仿真条件：房间、阵列与轨迹如何摆放？

实验要回答的是移动中声对比度能否保持，比较对象是字典法和线性插值法，条件是否一致体现在控制点布置、扬声器阵列和频率范围相同。指标是声对比度，定义为亮区功率与暗区功率之比取对数，值越大越好。房间为矩形室内环境，采样频率为 48 千赫，混响时间为 0.4 秒，设计与评估频率为 500 到 2000 赫兹，原文说明该频段常规方法退化明显因而能观察效果，低于 500 赫兹也确认可用，高于 2000 赫兹为避开扬声器间距引起的空间混叠而排除。

扬声器沿控制区域四边布置，小尺度每边 8 个共 32 个，大尺度每边 21 个共 84 个。控制点在区域内按规则网格布置，亮区中心固定，暗区用户在同一水平面沿横轴移动。每个控制点布设 5 个传声器，1 个在中心，4 个在半径圆周上。下表提出比较问题：在阵列规模和采样密度不同的两套装置下，扬声器数量与几何是否一致可比，指标方向如何对应后续对比度曲线。

下表整理两套仿真装置的阵列规模与几何，单位与数值保留原文写法，用于核对后续结果的公平条件：

| 配置 | 扬声器总数 | 单边数量 | 单元间距 | 控制点网格 |
| --- | --- | --- | --- | --- |
| 小尺度装置 | 32 | 8 | 0.1 m | 0.3 m |
| 大尺度装置 | 84 | 21 | 0.1 m | 0.3 m |
| 传声器阵列 | Ma = 5 | 中心 1 个 | 周围 4 个 | 半径 0.1 m |
| 房间条件 | 4.0 m | 5.0 m | 3.0 m | 混响 0.4 s |

表后解释如下。大小尺度的主要差别是包围区域边长与扬声器总数，单元间距与控制点网格相同，因此频率上限受混叠限制的条件一致。传声器每点 5 个的布置保证亮区相关与暗区功率都有足够的空间采样。房间尺寸与混响时间说明这是有反射的室内环境，不是自由场，传递函数包含混响。未胜出项的伏笔是控制点密度：小尺度还比较了三点与五点设计，间距从 0.3 米加密到 0.15 米间隔，这直接影响字典法与插值法的基线强度，需要在结果节结合最小值一起看。

### 主结果：最小声对比度保住了吗，代价是什么？

测量对象是暗区用户沿横轴移动时的频率平均声对比度，评估传声器沿轨迹每 0.01 米密集布置，与设计用的稀疏控制点分开。小尺度三点设计下，字典法与线性插值法在控制点附近取得高对比度，但在控制点中点附近迅速掉落；块方法明显缓解了这种掉落，原文报告最小声对比度提升最多约 6 分贝。五点设计下常规基线与块方法的差距变小，说明沿轨迹更新足够密集时传统切换或插值已够用，块方法的优势在控制点稀疏时更显著。

大尺度下滑动方法在整条轨迹上保持更高的最小值，分频率平均也显示在 500 到 2000 赫兹内持续较高。关键限制是最大声对比度并未比基线明显提高，原文将其归因于平滑正则带来的权衡。从实用角度看，瞬态漏声对应的是最差时刻即最小值，而不是峰值，因此保持最小值具有实际意义。

**字典法 × 线性插值法：** 字典法分工是用户移动时直接取最近离散控制点预设计的滤波器，线性插值法分工是按用户位置在相邻两组滤波器系数之间做线性加权；二者搭配对照是因为它们代表离散切换和简单连续化两条常规路线，组合意义是共同说明控制点稀疏时中点处声对比度会明显掉落，从而衬托块矩阵联合优化保持最小值的价值。

**块批优化 × 滑动批优化：** 块批优化分工是 1 次性对已知短轨迹整段做块矩阵联合优化，滑动批优化分工是把三点计算块沿估计路径逐次前移并取最新覆盖该位置的滤波器；搭配理由是大范围移动无法 1 次预知整条轨迹，组合意义是用局部可预测假设把小尺度联合优化扩展到大尺度连续移动，同时减少密集布设传感器的预计算负担。

下表提出比较问题：在相同控制点布置下，字典法、线性插值法与块批优化、滑动批优化的最小值表现如何，指标越大越好，公平条件是频率范围与轨迹评估方式一致：

| 条件 | 指标 | 基线 | 本方法 | 比较对象 |
| --- | --- | --- | --- | --- |
| 小尺度三点设计 | 最小声对比度 | 字典法与线性插值法 | 块方法提升最多约 6 dB | 控制点中点段 |
| 全轨迹总体 | 最小声对比度 | 常规方法 | 本方法提升最多 7 dB | 整段无预设控制点 |
| 频率范围 | 设计与评估频段 | 500–2000 Hz | 500–2000 Hz | 常规退化明显段 |
| 平滑参数 | 轨迹平滑权重 | 未使用 | β = 0.05 | 块与滑动方法 |
| 控制点密度 | 三点与五点对照 | 五点差距缩小 | 稀疏时优势更大 | 0.3 m 与加密布置 |

表后解释如下。主要收益是最小值而非峰值：块方法与滑动方法用整段连续性换来了全轨迹下限的抬升，代价是峰值没有实质改善，这符合正则化引入偏差的预期。反例是五点设计下常规方法已能提供足够性能，此时不应夸大块方法的必要性。另一个未胜出项是块方法在大尺度整轨迹上不如滑动方法，因为 1 次性批优化难以覆盖长轨迹的方向变化，而滑动通过分块前移适应了路径。原文未测量误判率、延迟或主观听感改善，因此不能承诺这些量同步变好。

### 对照与反证：加密控制点和平滑权重改变了什么？

本节按问题组织消融与失败条件。第一个问题是控制点密度。测的是三点设计与五点设计的最小值差距，条件是扬声器与房间不变，只在三点之间按 0.15 米间隔插入附加控制点。结果显示三点下块方法相对常规方法提升明显，五点下差距缩小，支持的判断是块方法的价值依赖于稀疏条件，限制是原文没有给出连续加密到极限时的曲线，也没有报告低于 500 赫兹的逐频最小值。第二个问题是频率维度。

大尺度按频率平均的对比度显示块与滑动方法在各频率持续较高，但原文同时承认最大值没有实质提升，这构成一个负结果：平滑在抬下限的同时压制了峰值。第三个问题是计算代价。原文给出每次滑动更新需要与频率点数、块长度、扬声器数相关的立方量级计算，但同时指出通过避免密集布设传感器减少了大规模预计算负担。

这里总体趋势不等于每步都成立：滑动的每步代价仍可能较高，原文未报告实际延迟与帧率，因此不能把减少预计算等同于实时性得到保证。教学例子是：若把平滑参数调到零，块目标退化为多点独立对比度拼接，连续性约束消失；原文只报告经验取值为 0.05，未给出扫参曲线，所以不应推测拿掉后必然掉多少，只能说按定义连续性惩罚不再起作用。

### 边界与缺项：哪些结论还不能推广？

原文直接报告的是仿真环境下的声对比度最小值改善，支持的是稀疏控制点与短时可预测轨迹条件下的优势，可能但待验证的是更复杂轨迹、不同扬声器与传声器配置以及真实房间的效果。缺失证据不是技术错误，但必须明确：没有真实实验环境与主观听音测试，没有测量延迟、计算资源与输出帧率，没有误判率或感知指标，因此不能承诺漏声的主观可察觉改善或实时可行性。

相关性不等于因果：评估传声器密集采样显示的最小值提升，支持块矩阵与平滑项的关联，但不能单独证明是哪一项的因果贡献，因为原文没有单独关闭选择矩阵插值或平滑项的对照。适用边界包括用户沿横轴直线移动、亮区固定、暗区移动、扬声器包围控制区域，若用户急转弯或多用户多暗区，短时轨迹可预测假设可能不成立。此外频率上限受扬声器间距混叠限制，超出 2000 赫兹的表现未评估。总体趋势不等于每组每步都成立，峰值未提升即是 1 例。

### 复现先做什么：按什么顺序重建仿真？

复现应先重建可运行的仿真链条，再谈改进。第一步按原文房间尺寸、混响时间、采样频率与扬声器四边布置生成传递函数，亮区中心与虚拟源位置、暗区移动的横轴范围与高度平面按原文固定，控制点网格与每点 5 个传声器的几何按原文摆放。第二步实现字典法与线性插值法基线：字典法取最近离散控制点预设计滤波器，线性插值法按用户位置在相邻系数之间加权，两者使用相同的控制点布置以保证公平。

第三步实现选择矩阵插值与块矩阵目标：先写对角选择矩阵与距离权重，再堆块向量与块对角矩阵并加差分平滑项，平滑参数取 0.05，正则参数按传递函数能量迹除以扬声器数乘以系数计算，块方法空间步长取 0.05 米，滑动方法取 0.1 米。第四步按原文评估方式沿轨迹每 0.01 米布置评估传声器，计算频率平均声对比度并重点看最小值。还需补的验证是扫平滑参数、换房间混响与阵列规模、测试非直线轨迹，并补充延迟与计算量实测。

信息条件方面，当前没有可用代码与数据声明，只能依据正文公式与参数复写，不得臆测未给出的梯度路径或求解器细节。

### 何时值得尝试：一句话收束与误解澄清

当控制点只能稀疏布设、用户连续移动且短时方向可预测、评价看重最差时刻漏声而非峰值时，值得尝试把整段滤波器拼成块矩阵并在分母加相邻差分平滑的联合优化；当控制点已足够密集或轨迹频繁急转、或必须保证峰值与实时延迟时，应先补扫参与实测再决定。常见误解是把无训练等同于解析最优：本文虽有广义瑞利商的特征值形式，但加入平滑与块拼接后仍是带正则权衡的优化，结果依赖贝塔、网格与轨迹假设，不是无条件最优。

另一个误解是把声对比度提高等同于听感变好：原文亮区用余弦相似照顾感知等价性，但并未做主观听音，自动指标不能当成人评。第三个误解是把减少密集传感器预计算等同于总体更快：滑动更新仍有立方量级计算，预计算与在线开销应分开讨论。收束时记住原文的完整链条：位置经选择矩阵变为相关矩阵，多时刻经块矩阵变为联合目标，连续性经差分矩阵进入分母，整段 1 次求解或分块滑动输出，最小声对比度因此被托住。

## 📐 原文公式与排版

以下展示论文原页中的数学表达区域，保留原始上下标、分式和符号排版。区域序号仅用于本文导航，不是论文公式编号。

[![原文数学表达区域 1，PDF 第 2 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/f0b9705a3e45/figure-1.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/f0b9705a3e45/figure-1.png)

区域 1 · [查看论文原页](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0000026.pdf#page=2)

[![原文数学表达区域 2，PDF 第 2 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/f0b9705a3e45/figure-2.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/f0b9705a3e45/figure-2.png)

区域 2 · [查看论文原页](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0000026.pdf#page=2)

[![原文数学表达区域 3，PDF 第 2 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/f0b9705a3e45/figure-3.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/f0b9705a3e45/figure-3.png)

区域 3 · [查看论文原页](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0000026.pdf#page=2)

[![原文数学表达区域 4，PDF 第 2 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/f0b9705a3e45/figure-4.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/f0b9705a3e45/figure-4.png)

区域 4 · [查看论文原页](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0000026.pdf#page=2)

[![原文数学表达区域 5，PDF 第 2 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/f0b9705a3e45/figure-5.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/f0b9705a3e45/figure-5.png)

区域 5 · [查看论文原页](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0000026.pdf#page=2)

[![原文数学表达区域 6，PDF 第 2 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/f0b9705a3e45/figure-6.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/f0b9705a3e45/figure-6.png)

区域 6 · [查看论文原页](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0000026.pdf#page=2)

[![原文数学表达区域 7，PDF 第 3 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/f0b9705a3e45/figure-7.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/f0b9705a3e45/figure-7.png)

区域 7 · [查看论文原页](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0000026.pdf#page=3)

[![原文数学表达区域 8，PDF 第 3 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/f0b9705a3e45/figure-8.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/f0b9705a3e45/figure-8.png)

区域 8 · [查看论文原页](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0000026.pdf#page=3)

[![原文数学表达区域 9，PDF 第 3 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/f0b9705a3e45/figure-9.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/f0b9705a3e45/figure-9.png)

区域 9 · [查看论文原页](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0000026.pdf#page=3)

[![原文数学表达区域 10，PDF 第 3 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/f0b9705a3e45/figure-10.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/f0b9705a3e45/figure-10.png)

区域 10 · [查看论文原页](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0000026.pdf#page=3)

[![原文数学表达区域 11，PDF 第 3 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/f0b9705a3e45/figure-11.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/f0b9705a3e45/figure-11.png)

区域 11 · [查看论文原页](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0000026.pdf#page=3)

[![原文数学表达区域 12，PDF 第 3 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/f0b9705a3e45/figure-12.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/f0b9705a3e45/figure-12.png)

区域 12 · [查看论文原页](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0000026.pdf#page=3)

[![原文数学表达区域 13，PDF 第 3 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/f0b9705a3e45/figure-13.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/f0b9705a3e45/figure-13.png)

区域 13 · [查看论文原页](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0000026.pdf#page=3)

[![原文数学表达区域 14，PDF 第 3 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/f0b9705a3e45/figure-14.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/f0b9705a3e45/figure-14.png)

区域 14 · [查看论文原页](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0000026.pdf#page=3)

[![原文数学表达区域 15，PDF 第 4 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/f0b9705a3e45/figure-15.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/f0b9705a3e45/figure-15.png)

区域 15 · [查看论文原页](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0000026.pdf#page=4)

[![原文数学表达区域 16，PDF 第 4 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/f0b9705a3e45/figure-16.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/f0b9705a3e45/figure-16.png)

区域 16 · [查看论文原页](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0000026.pdf#page=4)

另有 11 个候选区域因边界不明确或图片数量、尺寸限制未展开；请[查看完整论文](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0000026.pdf)中的原始排版。

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。
- 评分规则：type-aware-v1
- 评分模型：muse-spark-1.3-contributor
- 评分请求协议：openai_responses

---

[← 返回 eusipco-2026 论文汇总](/posts/conference-eusipco-2026/)
