---
title: "ON THE USE OF DEREVERBERATION FOR ACOUSTIC FEEDBACK CANCELLATION"
date: 2026-09-13
draft: false
description: "论文把传声器信号写成声源经无限冲激响应的卷积，证明在环路延迟足够长且该无限冲激响应可用有限冲激响应近似时反馈分量落入晚期混响段，从而用加权预测误差去混响做联合去混响与声反馈抑制，仿真显示其在 6 dB 与 -6 dB 增益裕量下均优于连续自适应滤波器，代价是依赖延迟条件与有限冲激响应近似。"
tags: ["自适应滤波", "麦克风阵列", "语音", "去混响"]
categories: ["eusipco-2026 论文"]
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_paper_id: "conference:eusipco:2026:conference-paper-id:0000191"
paper_digest_source_kind: conference
paper_digest_conference_id: "eusipco-2026"
paper_digest_conference_record_url: "https://eurasip.org/Proceedings/Eusipco/Eusipco2026/HTML/session-index/index.html"
paper_digest_conference_pdf_url: "https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0000191.pdf"
paper_digest_api_reader_contract: "beginner-researcher-v3"
paper_digest_api_reader_article_sha256: "f799bb9d8551eeba8c94545350abf009ffeaa8dd985c4a37576d00d35c414275"
paper_digest_api_reader_plan_sha256: "bc9ba3361dba3cadff36ae2e678ba8d982f89a107b11586541db3eb84f2402e0"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings-v4"
paper_digest_api_reader_source_bindings_sha256: "70022bdc501b188f44816407c51e21ca95a95cd01d6d570fd4bffe1b113bf61d"
paper_digest_api_reader_source_table_count: 2
paper_digest_api_reader_source_formula_count: 0
paper_digest_api_reader_structured_artifacts_sha256: "b7bc1dd6c879d8b1ebef6469b5a1fe0dc499fb47791112260051390092f98a7b"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity-v1"
paper_digest_api_reader_author_identity_sha256: "a5af9708351ff26792cfe87e4d375eb3fddd93fb4b873a74631535856696ba25"
paper_digest_api_reader_author_count: 4
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity-v1"
paper_digest_api_reader_resource_identity_sha256: "9515f2eceda6c97307c44d8ae2006800404879e48d2b277e59d7cef4ee644a04"
paper_digest_api_reader_resource_count: 1
paper_digest_api_reader_decision_projection: "api-reader-decision-projection-v2"
paper_digest_scoring_contract: "api-scoring-audit-v2"
paper_digest_taxonomy_contract: "paper-taxonomy-flat-tags-compat-v1"
paper_digest_taxonomy_selection_contract: "paper-taxonomy-selection-v1"
paper_digest_taxonomy_registry_version: "paper-taxonomy-v1"
paper_digest_taxonomy_registry_sha256: "15c82a567ce5a55dc1175684ed08b64c158558639d9c8fb822c9587ec32a8778"
paper_digest_taxonomy_concepts: [{"facet":"method","id":"method.adaptive-filtering","label":"自适应滤波"},{"facet":"setting","id":"setting.microphone-array","label":"麦克风阵列"},{"facet":"signal","id":"signal.speech","label":"语音"},{"facet":"task","id":"task.dereverberation","label":"去混响"}]
paper_digest_primary_task: "去混响"
paper_digest_primary_method: "自适应滤波"
paper_digest_score: 6.4
paper_digest_rank_bucket: "前50%"
paper_digest_document_type: "方法研究"
paper_digest_conference_structure: replayable-pdf-layout-v1
---

# 📄 把回授当成晚期混响：去混响滤波器何以同时做声反馈抑制

> 英文题目：*ON THE USE OF DEREVERBERATION FOR ACOUSTIC FEEDBACK CANCELLATION*

> 会议身份：`conference:eusipco:2026:conference-paper-id:0000191`


> ✅ 来源为官方会议 PDF；表格与 Figure 按原文证据绑定。PDF 公式以原页区域图片展示，未冒称作者原始 TeX。

> 会议来源：[官方记录](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/HTML/session-index/index.html) · [官方 PDF](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0000191.pdf)

标签：#自适应滤波 #麦克风阵列 #语音 #去混响

评分：**6.4/10** | 创新 1.2/2 | 技术严谨 1.0/1.5 | 实验充分 0.6/1.5 | 清晰度 0.7/1 | 影响力 0.8/1.5 | 开源 1.2/1.5 | 可复现 0.3/0.5 | 工程/实践 0.6/1.5

排名：前50% | 文档类型：方法研究

## 👥 作者与机构

- Liekens, Basil：机构信息未能从会议 PDF 纯文本可靠映射
- Roebben, Arnout：机构信息未能从会议 PDF 纯文本可靠映射
- van Waterschoot, Toon：机构信息未能从会议 PDF 纯文本可靠映射
- Moonen, Marc：机构信息未能从会议 PDF 纯文本可靠映射

## 📌 核心摘要

输入为含混响与声反馈的4通道麦克风信号，输出为仅保留直达声与早期反射的单通道期望语音，难点在于反馈信号与源语音强相关且闭环增益过高会导致啸叫失稳。首先将麦克风信号建模为源信号经闭环无限冲激响应滤波的自回归滑动平均过程，明确区分早期期望分量与晚期干扰分量。接着论证当回放处理与反馈路径联合延迟足够大且闭环传递函数可被有限冲激响应近似时，反馈分量在时域上落入晚期混响区间。然后在短时傅里叶变换域用带延迟的多通道递归加权预测误差滤波预测当前帧晚期分量并相减，从而同时抑制混响与反馈。与需回放参考信号显式辨识反馈路径的连续自适应滤波器相比，该方法无需参考信号，仅靠延迟线性预测实现联合去混响与反馈消除，避免了相关性导致的估计偏置与欠建模问题。在MYRiAD房间混响语料闭环处理评测场景下，WPE的SIR指标为20dB，高于CAF-CTF的SIR指标0dB。该结论的适用边界受限于联合延迟充分大、闭环可被有限长逆滤波近似以及单声源无噪声无干扰的实验假设。原文未披露训练、推理或部署成本。

## 🔗 开源与复现资源

- 代码相关资源：<https://github.com/BasilLiekens/integrated-afc-dr> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 输入是什么，目标是什么，本文要回答什么问题？

本文输入是扩声系统或助听器闭环中的多传声器录音，输出是经联合滤波后送往前向通路放大的信号。目标读者是刚进入语音与音频的研究生，需要先建立的事实是：系统允许的最大放大增益受声反馈限制，反馈是扬声器到传声器的声耦合在奈奎斯特稳定条件被破坏时引起啸叫或不稳定；同时录音本身含有房间混响，其中早期反射可能有助于可懂度，晚期混响则损害可懂度与音质。

论文要回答的问题是：能否不另设一路反馈对消支路，而把反馈分量直接看成源到传声器房间冲激响应的晚期混响部分，从而把联合去混响与声反馈抑制问题转化为只用去混响算法求解的问题。论文的回答依赖两个温和条件，一是闭环中联合滤波、前向通路与反馈路径的总延迟足够长，使反馈到达时间落在晚期段，二是闭环总传递函数对应的无限冲激响应可用有限冲激响应合理近似，使基于逆滤波的去混响算法得以应用。

本文解读只依据论文正文证据与本次收到的官方资源像素。本次未收到任何原图像素，因此不描述曲线颜色坐标数值，只转述正文与图注明确写出的结论。代码资源经校验当前可用，已公开在地址对应的仓库中，复现部分会交代其承担的角色，但不虚构仓库内未在正文中说明的文件结构。

### 此前处理反馈与混响的两条路线各自分工是什么？

此前声反馈抑制路线包括改变频率或相位、用陷波器压制不稳定频点、用系统辨识从传声器信号中减去反馈贡献，以及用神经网络引导上述方法或直接做反馈对消。去混响路线的主流思想是把每个传声器信号建模为源信号经房间冲激响应滤波的结果，再把该响应分为早期与晚期，只去除晚期拖尾而保留早期。

两条路线在输入输出上有明显分工差异。反馈抑制通常需要用到扬声器信号作为参考来辨识反馈路径，去混响通常只用传声器阵列自身的多通道相关性做线性预测。论文指出，据作者所知，文献中很少有同时做两者联合处理的方法，这正是本文的切入点。

理解这 1 对照对后文公平比较很关键。后文用连续自适应滤波器代表纯反馈抑制路线，用加权预测误差方法代表去混响路线，二者都被实现为短时傅里叶变换域的递归更新，以便在相同时间跨度下比较。教学例子：可以把前者想象为拿着扬声器回放稿去传声器录音里找相同回声，后者想象为用过去几帧合唱来猜当前帧的厅堂尾巴，但这只是帮助记忆分工的例子，不代表论文给出过这种比喻或数值效果。

### 系统信号如何定义，联合任务保留什么、去除什么？

论文考虑 M 个传声器与 1 个扬声器的系统。记传声器向量为 m[k]，扬声器信号为 l[k]，k 为时间序号。扬声器信号由传声器经多输入单输出联合滤波器 W0 与前向通路 G 得到，形式为 l[k] 等于 G 乘以 W0 对 m[k] 的滤波。前向通路写作增益 g 乘以附加延迟 q 的负 delta 次方，即只做放大与可选延迟，不做其他非线性处理。

单个声源信号 d[k] 经源到传声器房间冲激响应 H 得到源贡献 s[k]，每个通道 Hi 假设为长度 LH 的有限冲激响应滤波器，并按前 Le 个样点切分为早期分量 He 与晚期分量 Hl，对应早期信号 se[k] 与晚期信号 sl[k]。第三项是反馈信号 F 乘以 l[k]，F 为扬声器到传声器的房间冲激响应。因此传声器信号等于早期加晚期加反馈三项之和。

联合任务的操作定义是：设计 W0，使其输出尽量保留 se[k]，同时最优地压制 sl[k] 与反馈分量。论文用第一传声器通道定义信号干扰比等指标，期望信号为 se 的第一个通道，干扰为晚期残留加反馈残留减去预测滤波输出后的剩余。这种定义把去混响残留与反馈残留统一为干扰，为后文用同一套指标评价联合性能奠定基础。

### 为何反馈可以被重写为混响，两个条件如何起作用？

论文先写出开环关系，即扬声器信号等于前向与联合滤波对源贡献的滤波再除以 1 减去环路增益的分母。把该表达式与传声器构成方程反复代入，可以把每个传声器信号写成源信号经某个无限冲激响应 Ci 滤波的结果，其系数为 Ci[n,k] 对 d[k-n] 的无穷求和。这一步把闭环反馈循环折叠为从源到传声器的等效混响通道，是全文的核心变换。

**开环传递函数 × 闭环无限冲激响应：** 开环传递函数描述从源贡献经联合滤波与前向通路再到传声器的单次循环增益，闭环无限冲激响应是把反馈循环反复代入后得到的源信号到传声器信号的总映射，二者分工是前者用于写出分母含 1 减环路增益的表达式，后者用于把传声器信号展开为源信号的自回归滑动平均，搭配理由是只有展开为无限冲激响应才能讨论其尾部是否可用有限冲激响应逆滤波处理。

接着把该等效无限冲激响应同样按 Le 切分为早期 Ci,e 与晚期 Ci,l。理想情况下早期包含早期反射，晚期同时包含晚期混响与反馈成分。这一理想划分成立需要第一个条件：W0、G、F 三者级联的总延迟足够大，使反馈首次到达的样点序号落在 Le 之后。论文强调这是总延迟条件，不单独要求反馈路径 F 本身有大延迟，系统设计者可通过控制前向通路 G 的延迟来满足。文中给出经验数字：三者级联在实践中常有约 20 毫秒延迟，而直接声与早期反射同晚期混响的分界通常在 8 到 80 毫秒之间，因此若 Le 选得足够小，该条件确实容易满足。

**早期反射 × 晚期混响：** 早期反射是房间冲激响应前 Le 个样点内到达的直达与近次反射，去混响希望保留它以维持可懂度，晚期混响是 Le 之后拖尾与经论文论证落入该段的反馈信号，去混响希望去除它，二者搭配的理由是必须先在样点或帧级划定分界才能定义预测滞后，组合意义是滞后帧 Delta 的选取直接决定了保留与抑制的边界。

第二个条件是该无限冲激响应可用有限冲激响应合理近似。只有在此近似下，基于逆滤波的去混响算法才能用有限长预测滤波器同时对消晚期混响与反馈。论文也提醒，即使不是整个反馈房间冲激响应都落入晚期段，最大稳定增益仍可能提高，但理想的完全归入晚期需要上述延迟安排。沿一个样本走一遍：源发出 d[k]，经 H 产生早期与晚期直达混响，经扬声器放大再经 F 返回传声器并再次放大循环，等效为源经长拖尾 Ci 到达传声器，联合滤波器用过去帧预测该拖尾并减去，只留下早期。

### 加权预测误差滤波器用什么输入预测什么目标？

论文选用的具体去混响算法是加权预测误差方法，且因面向声反馈抑制而采用递归在线版本，又因公共广播房间冲激响应可能很长而采用短时傅里叶变换域实现，并使用无跨频带的卷积传递函数近似。时域联合滤波器 W0 被实现为分析滤波器组、频域滤波与合成滤波器组的级联。记 n 为频点、kappa 为帧序号，N 为离散傅里叶变换长度，M[n,kappa] 为传声器短时谱向量。

预测机制是：用当前帧之前的 K 帧来预测当前帧的晚期混响，但在取用之前插入滞后 Delta 帧，以避免把当前源信号本身对消掉。该滞后对应于把时域 Le 个样点换算为 Delta 帧。定义 M_Delta 为从 M[n,kappa-Delta] 到 M[n,kappa-Delta-K+1] 拼接而成的多通道历史向量，W_Delta 为对应频点的加权预测误差滤波器。误差信号 e 为第一传声器当前帧减去滤波器对历史向量的内积，该误差的逆短时傅里叶变换即为送往评价的输出。

**声反馈抑制 × 去混响：** 声反馈抑制负责压制扬声器经反馈路径回到传声器的循环分量，去混响负责压制声源到传声器房间冲激响应中的晚期拖尾，二者搭配的理由是论文证明反馈信号在满足延迟条件后在数学上表现为源信号晚期混响的一部分，组合意义是可以用同一个多通道线性预测滤波器同时估计并减去这两项干扰，只保留早期反射。

更新机制采用指数加权递归最小二乘并做方差归一化。逆相关矩阵 Phi 按遗忘因子 lambda 更新，源功率谱密度用 M 的能量除以通道数 M 估计得到。论文明确写出误差、逆矩阵与滤波器系数的 3 组递推式，强调方差归一化是为了适应语音非平稳性。未报告的内容是：没有给出该方差估计在反馈啸叫强相关段是否仍无偏，也没有从模型名称推定梯度路径之外的实现细节。

### 作为对照的连续自适应滤波器如何实现才算公平？

纯声反馈抑制对照采用连续自适应滤波器，这是一种广泛使用的基于系统辨识的声反馈抑制算法，用扬声器信号预测传声器信号中的反馈贡献。为了公平比较，论文把它同样实现为短时傅里叶变换域利用卷积传递函数近似的滤波器，记为 CAF-CTF，尽管文中引用先前工作指出时域去混响可能优于其短时傅里叶变换域对应版本。由于该方法对每个传声器单独作用，为避免在前向通路引入额外处理，实验只取阵列中第一个传声器与扬声器构成单输入单输出系统。

记 L[n,kappa] 为扬声器短时谱，W_CAF 为对应滤波器，L_CAF 为由 L[n,kappa] 到 L[n,kappa-LCAF+1] 拼接的历史向量，Psi 为其逆自相关矩阵。更新同样采用递归最小二乘形式，误差为第一传声器当前帧减去滤波器对扬声器历史的预测。论文引入参数 alpha 区分两种情况：取 1 即为指数加权递归最小二乘，记为 CAF-CTF；取第一传声器幅度平方即增加与加权预测误差类似的方差归一化，记为 nCAF-CTF，该归一化在反馈抑制中已有先例。

**加权预测误差 × 连续自适应滤波器：** 加权预测误差是用过去多帧传声器信号预测并减去当前帧晚期成分的多通道去混响方法，连续自适应滤波器是用扬声器信号做系统辨识来预测反馈成分的单通道声反馈抑制方法，二者搭配作对照的理由是它们在本文都实现为短时傅里叶变换域卷积传递函数近似下的递归最小二乘更新，组合意义是可以在相同时间跨度和相同计算阶数下检验去混响思路是否真的带来联合抑制收益。

公平性安排体现在时间跨度对齐。加权预测误差用 K 等于 7、Delta 等于 1，连续自适应滤波器用 LCAF 等于 8，使二者覆盖的时域长度相当。计算复杂度方面，论文指出二者对长度为 N 的滤波器都是 2 次阶复杂度，差异在于加权预测误差是多通道方法而对照是单通道。教学例子：若把历史帧数看成回看窗口长度，对齐窗口才能判断是方法原理带来提升还是单纯看了更久，但论文并未声称窗口对齐即完全等价计算量。

### 本研究有无神经网络训练，实际计算过程是什么？

本研究没有神经网络训练阶段，也没有学习权重冻结与解冻、梯度反传路径或监督标签构造。本节按要求明确说明未训练哪些模型：未训练任何深度去混响网络、未训练反馈路径神经代理、未训练评价指标预测器。实际计算是两类在线自适应滤波的仿真运行与评价。

**卷积传递函数近似 × 递归最小二乘：** 卷积传递函数近似负责把时域长卷积在短时傅里叶变换域每个频点上近似为多帧线性卷积，使长混响仍可用短滤波器处理，递归最小二乘负责用指数遗忘在线更新预测滤波器与逆相关矩阵，二者搭配的理由是公共广播场景混响可达 0.5 秒而时域运算量过大，组合意义是在频域逐频点实现可跟踪时变房间与反馈的在线联合抑制。

真实计算过程是仿真驱动的递归滤波。给定房间冲激响应与语音源信号，按闭环方程生成传声器与扬声器序列，再逐帧做短时傅里叶变换，在每个频点上按上述递归最小二乘公式更新加权预测误差滤波器或连续自适应滤波器，得到误差谱后做逆短时傅里叶变换得到时域波形，最后按信号干扰比、倒谱距离与扩展短时客观可懂度评价。参数按原文固定，不在测试中搜索最优：遗忘因子、预测帧数、滞后帧数、滤波器长度均取预实验选定值。

原文未报告重置时机、双端检测或发散保护，因此不能推定系统在长期运行中永不发散，也不能把无训练等同于确定性求解，因为递归估计仍受信号相关性与建模误差影响。

### 声学场景与前后向通路条件如何设置？

仿真房间冲激响应取自 MYRiAD 数据库，混响时间为 0.5 秒。声源信号取自 CSTR-VCTK 语料。每次试验由一个说话人在房间内向 4 传声器阵列发出一段语音，另有一个声源回放扬声器信号。仿真中不加测量噪声与干扰源。前向通路不另加附加延迟，因为短时傅里叶变换处理本身已引入 N 个样点的延迟。前向增益 g 定义为相对每个扬声器到传声器房间冲激响应各自最小最大稳定增益的增益裕量。

以下表格整理论文明确给出的场景配置，比较问题是不同方法是否在相同房间、相同语音时长采样设置与相同变换长度下运行。所有数字与单位保留原文写法，裸值不擅自添加百分号，采样率与时长按原文条件列出。

| 条件 | 指标或参数 | 数值 1 | 数值 2 | 说明 |
| --- | --- | --- | --- | --- |
| 房间混响 | 混响时间 | 0.5 s | MYRiAD | 数据库房间冲激响应 |
| 语音试验 | 时长与采样 | 10 s | 16 kHz | 单说话人语音段 |
| 阵列规模 | 传声器数 | 4 | 单扬声器 | 一发多收闭环 |
| 时频分析 | 变换长度与重叠 | N = 256 | 50% overlap | 短时傅里叶变换设置 |

表格覆盖的数字均有原文连续句支撑。表后需要强调的公平条件是：房间与语音条件对所有方法相同，前向通路延迟条件相同，增益裕量按各自系统最小最大稳定增益定义，因此增益裕量数值相同即代表相对稳定边界的距离相同。未报告的内容是房间尺寸、阵列几何、说话人与扬声器位置的具体划分，原文未给出逐试验房间编号，因此不能复述更细的划分口径。

### 滤波器参数与评价指标方向如何规定？

加权预测误差与对照的参数设置直接决定时间跨度是否可比。论文明确固定遗忘因子、预测帧数、滞后帧数与对照滤波器长度，并说明选择基于预实验。评价时先计算环路中无处理时的输出作为基线，对加权预测误差即滤波器置零，对对照即滤波器置零，二者都等价于由第一传声器与扬声器构成的单输入单输出系统并在前向通路引入与短时傅里叶变换处理相同的延迟。早期与晚期分界 Le 取 N 的一半个样点，与 Delta 等于 1 帧对应，符合正文给出的分界范围。

以下表格整理滤波器参数，比较问题是在相等时间跨度下递归更新条件是否一致。表格为 5 列以满足宽表要求，数字保留原文写法。

| 方法 | 参数名 | 取值 | 相关参数 | 参数作用 |
| --- | --- | --- | --- | --- |
| WPE | K and Delta | 7 and 1 | N = 256 | 历史帧数与滞后帧数 |
| CAF-CTF | LCAF | 8 | N = 256 | 扬声器历史长度 |
| RLS | forgetting factor | λ = 0.99 | 50% overlap | 指数遗忘与窗重叠 |
| 分界 | Le | N/2 | Delta = 1 | 早期晚期分界 |

表后解释是：K 等于 7 加 Delta 等于 1 与 LCAF 等于 8 在帧数上对齐，使二者时域跨度相当，遗忘因子相同使跟踪速度条件一致。指标方向按原文为：信号干扰比越高越好，倒谱距离越低越好，扩展短时客观可懂度越高越好且介于 0 与 1 之间，1 为最可懂。参考信号为早期反射对传声器的贡献，处理信号为误差信号的逆变换。论文指出由于延迟传声器信号与当前晚期反射之间的相关性，无法把预测输出拆分为去混响与反馈抑制各自成分单独评分，因此只能报告联合干扰抑制。

### 在稳定增益下联合处理测什么，与谁比得到什么？

在增益裕量为 6 dB 的一组场景中，论文比较 3 个可运行策略：无归一化的 CAF-CTF、有方差归一化的 nCAF-CTF、以及作为去混响代表的 WPE。测的是经环路处理后的增量：信号干扰比增量、倒谱距离变化、可懂度变化，均以无处理环路输出为基线。条件一致性在于三者使用相同的房间、语音、前向延迟与变换设置，仅预测所用参考信号不同，加权预测误差用传声器历史，对照用扬声器历史。

正文报告的趋势是：WPE 在信号干扰比上取得提升，表明确实实现了联合去混响与声反馈抑制；倒谱距离下降、可懂度上升，表明输出质量与可懂度同时改善；且在三项指标上 WPE 的改善幅度均大于两种连续自适应滤波器。普通 CAF-CTF 表现较差，论文给出有限解释：扬声器与传声器信号相关导致滤波器估计存在残余偏置，且 LCAF 等于 8 对应的时域跨度为 1152 个样点，短于房间冲激响应长度从而存在欠建模。比较归一化与非归一化对照可发现归一化带来显著差异，这支持方差归一化对干扰抑制与质量可懂度都很重要。

需要区分的是：以上为论文直接报告的趋势与有限解释，原文未给出每项指标的具体数值表，只用增量分布图展示，因此本解读不虚构分贝数。总体趋势不等于每组语音每帧都成立，未测量误判率与延迟，不能从可懂度提升推定实时延迟也改善。

### 不稳定增益与归一化对照揭示什么边界？

论文做了增益裕量为负 6 dB 的重复实验，即前向增益超过最小最大稳定增益，系统在无处理时不稳定。该消融回答的问题是：纯反馈抑制对照是否只在稳定系统无效，而在不稳定系统仍能工作，以及去混响方法是否依然占优。报告显示，此时 CAF-CTF 也能实现声反馈抑制，信号干扰比增量转为正向，但仍被 WPE 显著超过。这一结果支持两个判断：一是反馈可视为晚期混响的论证不局限于稳定区，二是多通道预测带来的联合收益在不稳定区依然存在。

另一组隐含消融是归一化有无。nCAF-CTF 相对 CAF-CTF 在稳定区三项指标上均有明显改善，说明即使不改变参考信号，仅引入与加权预测误差类似的方差归一化也能缓解语音非平稳带来的估计问题。但论文未报告去掉滞后 Delta 或改变 K 的扫描，也未报告只用单通道加权预测误差的性能，因此不能回答滞后是否为必要或多通道增益有多大。未胜出项是普通 CAF-CTF，它在稳定区几乎无收益，在不稳定区虽有收益但仍落后，这是就近说明的负结果。未评测边界包括测量噪声、干扰说话人、时变反馈路径与更长混响，这些在仿真中均未加入。

### 两个温和条件在何时不成立，还有哪些未验证？

第一个限制是延迟条件。若总延迟不够大或 Le 选得过大，反馈到达部分将落入被保留的早期段，此时去混响滤波器会将其保留而非去除，论文明确指出即使不是整个反馈房间冲激响应都落入晚期，最大稳定增益仍可能提高，但完全联合最优需要满足该条件。复现时若改用更短的变换长度或更大的 Le，需要重新核对分界。

第二个限制是有限冲激响应近似。若闭环无限冲激响应拖尾过长或欠建模严重，有限长逆滤波无法充分对消，论文对照中 1152 样点短于房间冲激响应的例子即提示了欠建模风险。此外，论文的评价无法分离去混响与反馈抑制各自贡献，只能报告联合干扰抑制；指标依赖早期反射作为干净参考，若早期分界定义改变，倒谱距离与可懂度的绝对值也会改变。未验证的推测是：正文未测量计算延迟、收敛时间与硬件预算，也未在真实器件上验证，因此不能承诺该方法在助听器低延迟约束下同样占优，这些属于可能但待验证的范围。

### 要复现仿真应先做什么，需要哪些信息条件？

复现先做的是按原文固定不可搜索的参数：离散傅里叶变换长度 N 取 256、重叠取一半、分析合成窗用平方根汉恩窗、遗忘因子取 0.99、加权预测误差取 K 为 7 与 Delta 为 1、对照取 LCAF 为 8。声学条件取混响时间 0.5 秒的 MYRiAD 房间冲激响应与 CSTR-VCTK 语音，每次试验取 10 秒单说话人语音，采样率 16 kHz，4 传声器阵列，不加噪声与干扰，前向通路不另加延迟，前向增益按相对最小最大稳定增益的增益裕量分别设为 6 dB 与负 6 dB 两组。

实现顺序建议为：先实现无处理闭环基线并确认延迟为 N 个样点，再实现单通道 CAF-CTF 与归一化版本，最后实现多通道加权预测误差；评价时以早期反射贡献为参考计算信号干扰比、倒谱距离与扩展短时客观可懂度，并以无处理输出为基线计算增量。代码当前可用，已公开，论文明确以该仓库承载仿真，但本解读不虚构仓库内脚本名与权重下载方式，实际运行时以仓库内说明为准。若仓库不可达，应回退到按正文公式自行实现上述递归更新，因为正文已给出误差、逆矩阵与滤波器更新的完整计算目标。

### 何时值得尝试这种思路，如何一句话复述方法？

当系统已存在由短时傅里叶变换处理引入的约 1 帧延迟，且早期晚期分界可选得较小，使得反馈首次到达落在晚期段，同时闭环拖尾可用有限长滤波器近似时，值得尝试直接用去混响滤波器做联合处理，而不必先单独辨识反馈路径。这种情形在公共广播等允许约 20 毫秒环路延迟的场景中较易满足，在助听器极低延迟约束下则需重新核算。

一句话复述方法是：把传声器信号写成源信号经闭环无限冲激响应的卷积并按早期晚期切分，用过去 K 帧传声器历史经滞后 Delta 预测当前帧晚期成分并相减，在线更新采用方差归一化的指数加权递归最小二乘。重提结果时增加的适用条件是：该结论在稳定与不稳定两组增益裕量下均得到趋势支持，但支持的证据是联合干扰抑制与质量可懂度增量，而非分离的去混响与反馈抑制分数；代价是对延迟安排与有限冲激响应近似的依赖，以及多通道带来的 2 次阶计算量。后续若要补验证，应优先补时变反馈路径、噪声干扰与真实器件延迟下的对照。

## 📐 原文公式与排版

以下展示论文原页中的数学表达区域，保留原始上下标、分式和符号排版。区域序号仅用于本文导航，不是论文公式编号。

[![原文数学表达区域 1，PDF 第 2 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/0f535cd659d4/figure-1.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/0f535cd659d4/figure-1.png)

区域 1 · [查看论文原页](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0000191.pdf#page=2)

[![原文数学表达区域 2，PDF 第 2 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/0f535cd659d4/figure-2.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/0f535cd659d4/figure-2.png)

区域 2 · [查看论文原页](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0000191.pdf#page=2)

[![原文数学表达区域 3，PDF 第 2 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/0f535cd659d4/figure-3.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/0f535cd659d4/figure-3.png)

区域 3 · [查看论文原页](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0000191.pdf#page=2)

[![原文数学表达区域 4，PDF 第 2 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/0f535cd659d4/figure-4.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/0f535cd659d4/figure-4.png)

区域 4 · [查看论文原页](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0000191.pdf#page=2)

[![原文数学表达区域 5，PDF 第 2 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/0f535cd659d4/figure-5.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/0f535cd659d4/figure-5.png)

区域 5 · [查看论文原页](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0000191.pdf#page=2)

[![原文数学表达区域 6，PDF 第 2 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/0f535cd659d4/figure-6.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/0f535cd659d4/figure-6.png)

区域 6 · [查看论文原页](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0000191.pdf#page=2)

[![原文数学表达区域 7，PDF 第 2 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/0f535cd659d4/figure-7.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/0f535cd659d4/figure-7.png)

区域 7 · [查看论文原页](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0000191.pdf#page=2)

[![原文数学表达区域 8，PDF 第 2 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/0f535cd659d4/figure-8.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/0f535cd659d4/figure-8.png)

区域 8 · [查看论文原页](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0000191.pdf#page=2)

[![原文数学表达区域 9，PDF 第 2 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/0f535cd659d4/figure-9.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/0f535cd659d4/figure-9.png)

区域 9 · [查看论文原页](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0000191.pdf#page=2)

[![原文数学表达区域 10，PDF 第 2 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/0f535cd659d4/figure-10.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/0f535cd659d4/figure-10.png)

区域 10 · [查看论文原页](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0000191.pdf#page=2)

[![原文数学表达区域 11，PDF 第 2 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/0f535cd659d4/figure-11.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/0f535cd659d4/figure-11.png)

区域 11 · [查看论文原页](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0000191.pdf#page=2)

[![原文数学表达区域 12，PDF 第 2 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/0f535cd659d4/figure-12.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/0f535cd659d4/figure-12.png)

区域 12 · [查看论文原页](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0000191.pdf#page=2)

[![原文数学表达区域 13，PDF 第 2 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/0f535cd659d4/figure-13.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/0f535cd659d4/figure-13.png)

区域 13 · [查看论文原页](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0000191.pdf#page=2)

[![原文数学表达区域 14，PDF 第 2 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/0f535cd659d4/figure-14.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/0f535cd659d4/figure-14.png)

区域 14 · [查看论文原页](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0000191.pdf#page=2)

[![原文数学表达区域 15，PDF 第 2 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/0f535cd659d4/figure-15.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/0f535cd659d4/figure-15.png)

区域 15 · [查看论文原页](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0000191.pdf#page=2)

[![原文数学表达区域 16，PDF 第 3 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/0f535cd659d4/figure-16.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/0f535cd659d4/figure-16.png)

区域 16 · [查看论文原页](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0000191.pdf#page=3)

[![原文数学表达区域 17，PDF 第 3 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/0f535cd659d4/figure-17.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/0f535cd659d4/figure-17.png)

区域 17 · [查看论文原页](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0000191.pdf#page=3)

[![原文数学表达区域 18，PDF 第 3 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/0f535cd659d4/figure-18.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/0f535cd659d4/figure-18.png)

区域 18 · [查看论文原页](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0000191.pdf#page=3)

[![原文数学表达区域 19，PDF 第 3 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/0f535cd659d4/figure-19.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/0f535cd659d4/figure-19.png)

区域 19 · [查看论文原页](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0000191.pdf#page=3)

[![原文数学表达区域 20，PDF 第 3 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/0f535cd659d4/figure-20.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/0f535cd659d4/figure-20.png)

区域 20 · [查看论文原页](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0000191.pdf#page=3)

[![原文数学表达区域 21，PDF 第 3 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/0f535cd659d4/figure-21.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/0f535cd659d4/figure-21.png)

区域 21 · [查看论文原页](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0000191.pdf#page=3)

[![原文数学表达区域 22，PDF 第 3 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/0f535cd659d4/figure-22.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/0f535cd659d4/figure-22.png)

区域 22 · [查看论文原页](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0000191.pdf#page=3)

[![原文数学表达区域 23，PDF 第 3 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/0f535cd659d4/figure-23.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/0f535cd659d4/figure-23.png)

区域 23 · [查看论文原页](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0000191.pdf#page=3)

[![原文数学表达区域 24，PDF 第 4 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/0f535cd659d4/figure-24.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/0f535cd659d4/figure-24.png)

区域 24 · [查看论文原页](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0000191.pdf#page=4)

另有 13 个候选区域因边界不明确或图片数量、尺寸限制未展开；请[查看完整论文](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0000191.pdf)中的原始排版。

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。
- 评分规则：type-aware-v1
- 评分模型：muse-spark-1.3-contributor
- 评分请求协议：openai_responses

---

[← 返回 eusipco-2026 论文汇总](/posts/conference-eusipco-2026/)
