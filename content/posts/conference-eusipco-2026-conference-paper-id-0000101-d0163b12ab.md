---
title: "A LEARNABLE MAXIMUM-LIKELIHOOD MODEL OF AD-HOC MICROPHONE ARRAYS WITH UNBALANCED NOISE PSDS"
date: 2026-09-13
draft: false
description: "针对麦克风间距未知、增益未校准且各通道噪声功率不同的自组织阵列，论文用确定性最大似然把语音序列与传递函数的闭式解代入似然，只留对角噪声协方差做数值优化，在 4 通道 LibriSpeech 仿真上把阵列信噪比做到 21.18/20.63 dB 而逼近已知噪声的广义特征值波束形成上限，代价是每条语音单独迭代约 2000 轮且混响下客观可懂度与音质提升有限。"
tags: ["波束成形", "麦克风阵列", "语音", "语音增强"]
categories: ["eusipco-2026 论文"]
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_paper_id: "conference:eusipco:2026:conference-paper-id:0000101"
paper_digest_source_kind: conference
paper_digest_conference_id: "eusipco-2026"
paper_digest_conference_record_url: "https://eurasip.org/Proceedings/Eusipco/Eusipco2026/HTML/session-index/index.html"
paper_digest_conference_pdf_url: "https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0000101.pdf"
paper_digest_api_reader_contract: "beginner-researcher-v3"
paper_digest_api_reader_article_sha256: "958e2030e64d05a9fb14d846b3cc1eb806741e23164c7462e0eee625d7ebd23c"
paper_digest_api_reader_plan_sha256: "dd6854850aa026044319595154847ab3313b401409b14d31b4c99220c5f5f232"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings-v4"
paper_digest_api_reader_source_bindings_sha256: "b909aeec17bb9bf2022b226f075fb3de233187bb6e8a14c02c3f76462c8a4657"
paper_digest_api_reader_source_table_count: 2
paper_digest_api_reader_source_formula_count: 0
paper_digest_api_reader_structured_artifacts_sha256: "033d6114f78ad5be3e9fa41bb13ef63b940677562121f21e41ecc5925335e1de"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity-v1"
paper_digest_api_reader_author_identity_sha256: "61ac148d45e21a849c6548eb2250120738fd6f1c6afc5d122e5c5c003f7deb64"
paper_digest_api_reader_author_count: 2
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity-v1"
paper_digest_api_reader_resource_identity_sha256: "a4f7cfbd9f21916912e950cb255378c6cecc63b2fc0ad5e3fb96fa89c8c7c4a0"
paper_digest_api_reader_resource_count: 2
paper_digest_api_reader_decision_projection: "api-reader-decision-projection-v2"
paper_digest_scoring_contract: "api-scoring-audit-v2"
paper_digest_taxonomy_contract: "paper-taxonomy-flat-tags-compat-v1"
paper_digest_taxonomy_selection_contract: "paper-taxonomy-selection-v1"
paper_digest_taxonomy_registry_version: "paper-taxonomy-v1"
paper_digest_taxonomy_registry_sha256: "15c82a567ce5a55dc1175684ed08b64c158558639d9c8fb822c9587ec32a8778"
paper_digest_taxonomy_concepts: [{"facet":"method","id":"method.beamforming","label":"波束成形"},{"facet":"setting","id":"setting.microphone-array","label":"麦克风阵列"},{"facet":"signal","id":"signal.speech","label":"语音"},{"facet":"task","id":"task.speech-enhancement","label":"语音增强"}]
paper_digest_primary_task: "语音增强"
paper_digest_primary_method: "波束成形"
paper_digest_score: 5.8
paper_digest_rank_bucket: "前50%"
paper_digest_document_type: "方法研究"
paper_digest_conference_structure: replayable-pdf-layout-v1
---

# 📄 不均匀噪声下同时算出传递函数与各通道噪声：可学习的确定性最大似然波束形成

> 英文题目：*A LEARNABLE MAXIMUM-LIKELIHOOD MODEL OF AD-HOC MICROPHONE ARRAYS WITH UNBALANCED NOISE PSDS*

> 会议身份：`conference:eusipco:2026:conference-paper-id:0000101`


> ✅ 来源为官方会议 PDF；表格与 Figure 按原文证据绑定。PDF 公式以原页区域图片展示，未冒称作者原始 TeX。

> 会议来源：[官方记录](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/HTML/session-index/index.html) · [官方 PDF](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0000101.pdf)

标签：#波束成形 #麦克风阵列 #语音 #语音增强

评分：**5.8/10** | 创新 1.3/2 | 技术严谨 1.1/1.5 | 实验充分 0.8/1.5 | 清晰度 0.8/1 | 影响力 0.8/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 0.7/1.5

排名：前50% | 文档类型：方法研究

## 👥 作者与机构

- Ahmad, Hashir：机构信息未能从会议 PDF 纯文本可靠映射
- Enzner, Gerald：机构信息未能从会议 PDF 纯文本可靠映射

## 📌 核心摘要

本文处理自组织声传感器网络中4通道非校准麦克风语音增强，输入为位置未知且增益失配的短时傅里叶观测，输出为目标语音与逐通道非均衡噪声功率谱，难点在于声学传递函数未知且噪声在通道间功率差异大。方法先建立以声学传递函数、语音序列与对角噪声协方差为参数的确定性最大似然模型，直接对多通道观测似然建模。接着用最小方差无失真响应闭式解消去语音变量得到仅依赖声学传递函数与噪声协方差的代价，并用广义特征值分解幂迭代与在线样本协方差更新表示声学传递函数估计。最后将该似然作为可微TensorFlow损失，用Adam仅优化逐通道噪声功率谱，其输出回代广义特征值分解与波束成形器得到增强语音。相对假定均匀噪声功率谱的随机最大似然与依赖语音活动检测的传统波束成形，该机制允许每通道独立噪声建模且无需先验噪声知识，具有实际意义。在T60为40ms低混响评测条件下，所提Tensorflow DML-GEVD的Array-SNR为21.18，高于随机麦克风选择的Array-SNR 14.74。该结论适用边界受限于白色非相干噪声与单静态声源仿真房间，尚未验证相干噪声、多说话人与真实器件失配下的外推能力。原文披露的计算量为1.85 M MACs/s，可学习参数量为2052。

## 🔗 开源与复现资源

- 第三方资源：<https://webrtc.googlesource.com/src/> — 链接可访问（HTTP 200）
- 第三方资源：<https://github.com/fgnt/nn-gev/> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 输入是什么？为什么均匀噪声假设在分散阵列中失效？

本文的输入是自组织声学传感器网络录到的多通道短时傅里叶变换观测。目标是从这些观测中同时恢复干净语音、从声源到每个麦克风的声学传递函数，以及每个麦克风自己的噪声功率。必须保留的关键信息是：麦克风数量为 4，位置随机，间距未知但数字同步，设备增益未校准，噪声在通道间被建模为不相关但功率不相等。输出是增强后的语音波形，具体做法是用估计出的传递函数和噪声协方差构造波束形成器，再对当前帧做空间滤波。

初学者常把多通道增强理解为把多路声音直接丢给神经网络做映射。本文任务不同，它要求显式建模物理生成过程。白话说，声学传感器网络就是临时拼起来的录音网，例如会议室里几台笔记本和手机同时录音，没有统一校准。英文叫 Acoustic Sensor Networks，缩写 ASN。非相干噪声就是各麦克风处的环境噪声互不相关，英文是 incoherent noise。

**声学传感器网络 × 非相干噪声：** 声学传感器网络指由分散的、未校准但数字同步的自主录音设备临时组成的阵列，非相干噪声指因麦克风间距大而在不同通道间相关性很低的环境噪声，前者分工是定义任务的几何与增益不确定性，后者分工是为噪声协方差取对角矩阵提供物理依据，组合后论文才能把估计目标限定为各通道独立噪声功率而不必估计完整的非对角相关矩阵。

传统紧凑阵列假设所有麦克风噪声功率谱密度相同，只用一个标量噪声功率加一个已知空间相干矩阵就能描述噪声协方差。这个假设在校准良好的小阵列上近似成立，但在分散网络中失效，原因是硬件增益差异可达 24 dB 分贝动态范围，叠加 10 dB 分贝的原始噪声功率差异，总动态范围达到 34 dB 分贝。此时若仍用单位阵或单一功率描述噪声，波束形成器的白化步骤就会用错权重，弱通道的噪声被放大，强通道的信息被低估。论文因此把噪声协方差写成对角矩阵，对角元素就是各通道噪声功率谱密度，这是全文建模的起点。

### 已有路线如何估计传递函数与噪声？本文站在哪条线上？

相关工作可以按输入、目标、监督和运行阶段分成 3 条线。第一条是基于语音活动检测估计噪声协方差，再做广义特征值分解波束形成。这类方法在有干净噪声段先验时有效，但在时变环境或没有先验时不适用，因为它需要预先知道何时只有噪声。第二条是随机性最大似然线，把语音只看成方差为语音功率的随机源，估计含噪协方差的结构化分解。它的优点是参数少，但原文明确指出其噪声模型只有一个自由度，无法分辨各通道不同的噪声功率。

第 3 条是神经网络掩蔽估计噪声协方差，例如用深度学习预测时频掩蔽再加权求协方差。它在单通道上训练数据量大，但在本文的分散仿真上需要重新适配，且推理复杂度高。

本文属于确定性最大似然线。白话说，确定性最大似然就是把每 1 帧的语音值都当作未知数去拟合，英文是 Deterministic Maximum Likelihood，缩写 DML。随机性最大似然就是只拟合语音的功率等统计量，英文是 Stochastic Maximum Likelihood，缩写 SML。本文引用了多通道维纳后置滤波、最大信噪比阻塞矩阵、相对传递函数估计等工作，说明作者熟悉两条最大似然路线的区别。选择确定性路线不是为了标新立异，而是原文论证只有该路线能在似然中为每个通道保留独立噪声方差，从而实现按通道分辨噪声。

同输入同目标的直接对照是已知噪声功率的广义特征值波束形成器，它使用真实噪声协方差，因此是性能上界而非可部署方法。同运行阶段的可运行对照包括朴素广义特征值分解、随机单通道选择、最优单通道选择、WebRTC 单通道降噪和神经网络掩蔽波束形成器。这些对照覆盖了不做空间滤波、只做单通道滤波、做空间滤波但噪声模型错误、做空间滤波且噪声模型正确等不同信息条件，后文结果节必须保留这些对照才能判断收益来源。

### 信号模型把一次观测写成什么？未知量有哪些？

论文用乘法传递函数近似描述单频点单帧的生成过程。记第 p 个麦克风的观测为 Y，第 p 个通道的声学传递函数为 H，声源语音为 S，加性噪声为 N，则有 Y 等于 H 乘 S 再加 N。向量形式是把 P 个通道堆成向量，得到 Y 向量等于 H 向量乘标量 S 再加 N 向量。噪声协方差被写成对角阵，对角元素依次为各通道噪声功率谱密度。语音估计的最终目标是从 Y 向量中恢复 H 乘 S 这一项，即每个麦克风处的目标语音分量。

举一个教学例子帮助复述，明确标为例子而非论文数值：假设有 4 个麦克风，某一频点某 1 帧的传递函数向量包含不同的幅度和相位，声源值为某个复数，4 个通道的噪声方差各不相同。此时观测向量的均值由传递函数与语音的乘积决定，协方差由对角噪声决定。估计任务就是倒推这 3 组量。例子到此结束，论文实际数值只在实验节给出。

随机性最大似然把观测看成零均值复高斯，其协方差等于语音功率乘传递函数外积再加噪声功率乘已知相干矩阵。确定性最大似然则把观测看成均值为传递函数乘语音、协方差为对角噪声协方差的复高斯。两者的似然依赖的参数完全不同：前者依赖语音功率和传递函数，后者依赖传递函数、语音序列和噪声协方差。论文强调后者的语音序列维度远高于前者的标量语音功率，因此直接联合优化非常困难，必须先用闭式解消去高维参数。

### 方法全景：一条样本如何从多通道频谱走到增强语音？

沿一个样本走完全流程有助于建立依赖关系。输入是连续 Q 帧的多通道短时傅里叶谱。第一步用当前的噪声协方差对含噪样本协方差做白化并求主特征向量，得到传递函数估计。第二步把该传递函数与同一噪声协方差代入最小方差无失真响应公式，得到当前帧的语音标量估计。第三步把语音估计、传递函数估计、当前观测和同一噪声协方差代入确定性对数似然并在 Q 帧上累加，得到标量似然值。

第四步对似然取负作为损失，用优化器只更新对角噪声功率参数，然后回到第一步形成闭环。收敛后，用学到的噪声协方差再运行 1 次广义特征值分解与最小方差无失真响应，得到最终增强语音，该组合被论文称为 DML-GEVD。

这个安排的理由是降维。语音序列与传递函数都有闭式或半闭式解，不必作为可学习参数保存。只有噪声功率谱密度是低维且随频率缓慢变化的，适合作为可学习变量。所有层共享同一组噪声参数，保证传递函数估计、语音估计与似然计算在每次迭代中使用一致的协方差。学习过程不需要干净语音作为目标，因为损失直接是观测似然本身，属于无监督的模型拟合。

需要提醒初学者：这里的无监督不是指聚类或自监督预训练，而是指损失不需要目标语音标签。它的监督来源是多通道观测本身的概率密度。冻结与更新的划分也很清晰：传递函数与语音每帧都按公式重新计算，不保留跨迭代的可学习权重；只有噪声功率谱密度跨轮次累积梯度更新。原文没有报告早停阈值或自适应重置时机，因此复现时只能按固定轮数训练，不应自行脑补收敛判断规则。

### 语音与传递函数的闭式解是如何得到的？

论文对确定性对数似然分别关于传递函数和语音求偏导并联立置零。语音估计的结果形式上等于加权组合，其权重向量等于噪声逆协方差乘传递函数再除以 2 次型归一化因子。原文明确指出该解与经典的最小方差无失真响应波束形成器形式相同。直观理解是：噪声大的通道在逆协方差中权重小，波束形成器自动更信任干净通道，这正是非均匀噪声下必须使用对角加权的原因。

**声学传递函数 × 噪声功率谱密度：** 声学传递函数负责描述语音源到每个麦克风的幅度和相位变化，噪声功率谱密度负责描述每个麦克风自身加性噪声的功率水平，二者必须搭配是因为麦克风观测是两者叠加的结果，组合意义在于把确定性似然中的均值部分交给传递函数与语音解释，把协方差部分交给各通道噪声解释，从而在非均匀噪声下仍能做无偏的波束形成。

传递函数估计满足一个特征值问题：白化后的样本协方差乘传递函数等于某个标量乘传递函数。其中样本协方差是 Q 帧观测外积的平均。论文对比了已有文献的顺序差异：已有一些工作求解的是白化后的传递函数，还需再乘回噪声协方差才能得到真实传递函数，而本文的矩阵乘法顺序直接返回传递函数向量本身。这个差异看似细小，但复现时若抄错矩阵左右顺序，会得到完全不同的特征向量。

**确定性最大似然 × 随机性最大似然：** 确定性最大似然把语音波形序列本身当作待估计的未知确定量，随机性最大似然只把语音的统计量例如语音功率谱当作参数，前者分工是保留逐帧语音细节以便推导最小方差无失真响应形式的语音闭式解，后者分工是用低维协方差模型简化估计，论文选择前者的搭配理由是只有确定性建模才能为每个通道保留独立的噪声功率谱自由度。

噪声协方差的估计形式上是残差外积的平均，即观测减去传递函数与语音乘积后的残差协方差。但它与前两个估计互相依赖，构成耦合方程组，没有解析闭式解。论文因此保留该式作为理解残差意义的参考，而不直接迭代该式，转而对似然做数值梯度优化。初学者应先记住依赖顺序：噪声决定传递函数，传递函数决定语音，语音与传递函数共同决定残差与似然，似然梯度再反过来修正噪声。

### 广义特征值分解与最小方差无失真响应如何分工？

白话说，广义特征值分解波束形成器就是在噪声白化后的空间里找能量最大的方向，英文是 Generalized Eigenvalue Decomposition beamformer，缩写 GEVD。最小方差无失真响应波束形成器就是在保证目标方向增益为 1 的前提下让输出功率最小，英文是 Minimum Variance Distortionless Response，缩写 MVDR。前者输出的是空间方向，后者输出的是语音波形。

**广义特征值分解波束形成器 × 最小方差无失真响应波束形成器：** 广义特征值分解波束形成器负责从白化后的含噪协方差中取出主特征向量作为传递函数估计，最小方差无失真响应波束形成器负责在该传递函数约束下最小化输出噪声而得到语音估计，二者搭配的原因是前者提供后者所需的指向约束，后者提供似然计算所需的语音残差，组合后形成传递函数与语音相互依赖的耦合方程组。

在实现上，广义特征值分解层采用功率迭代加在线协方差更新。每 1 帧先用新观测更新样本协方差的滑动平均，再用当前矩阵乘上一步的传递函数估计并归一化，得到新的传递函数估计。该过程只含矩阵向量乘法与除法，适合在 TensorFlow 中展开成随时间反向传播的循环层。最小方差无失真响应层则是纯前馈公式，没有循环状态，但它与前一层共享可学习的噪声参数。

对数似然层把上述结果汇总。它对每 1 帧计算 2 次型残差与对数行列式项，并在整个语音序列上求和后返回。由于求和、对数、矩阵求逆与特征迭代都被实现为可微算子，整个模型的负似然可以直接作为损失。这种设计避免了为高维语音与传递函数维护优化器状态，参数量因此很小，后文复杂度表会显示其可学习参数仅为 2052 个。

### 没有大规模训练时，论文实际优化了什么？如何执行？

本研究没有在大型语料上训练通用神经网络权重。本节按要求明确说明未训练的部分：没有训练掩蔽估计网络，没有训练声学模型，也没有跨语音共享的泛化参数。实际计算是针对每条测试语音单独做数值优化，即把该条语音的多通道频谱当作优化对象，学习只属于该条语音的噪声功率谱密度。这种做法更接近传统估计中的在线拟合，而非深度学习中的离线训练加 frozen 推理。

**功率迭代 × 自动微分优化：** 功率迭代负责在给定当前噪声协方差时用矩阵向量连乘递推求解广义特征值问题的主特征向量，自动微分优化负责把对数似然取负作为损失对噪声功率谱求梯度并用 Adam 更新，前者分工是实现不可微特征分解的可微近似，后者分工是驱动低维噪声参数爬升似然，组合意义在于把原本需要联合搜索高维语音、传递函数与噪声的问题降维为只学对角噪声协方差。

具体执行使用 TensorFlow 函数式模型接口与 Keras 接口加自定义信号处理层。每个轮次对整个序列计算 1 次对数似然并做 1 次 Adam 优化器更新。论文配图显示的横轴达到 2000 轮，纵轴为各通道噪声功率谱密度的对数估计，说明优化需要上 1000 轮才能收敛。梯度路径按原文只经过可微的功率迭代、波束形成与似然层流向噪声功率谱密度，不经过任何语音标签。参数冻结方面，传递函数与语音按公式即时求解，不参与梯度累积；只有对角噪声方差是可学习变量。

缺项必须指出：原文未报告 Adam 学习率、初始化方差、频率相关还是频率平均的参数化细节，也未报告是否对噪声功率加非负约束的具体实现。复现时只能按对角非负方差的常规做法处理，并记录自己的选择。不能从模型名称推定它使用了神经网络，也不能把每条语音单独优化等同于解析式确定性求解，因为它仍是迭代梯度优化，存在局部最优与欠估计偏差。

### 数据如何仿真？混响与不平衡噪声如何设置？

实验数据按论文交代由干净 LibriSpeech 在 16 kHz 采样下与鞋盒房间镜像法仿真的声学传递函数卷积生成。房间尺寸为 5 m 乘 6 m 乘 3 m。混响时间设置两档：40 ms 毫秒档用于接近无混响的噪声分析，400 ms 毫秒档用于中等混响的现实评估。每次取一条语音作为单声源，随机布置 4 个麦克风。论文共使用 20 条时长 10 s 秒的语音，明确说明因其是基于统计模型的逐条优化方法，不需要与深度学习训练库规模对齐。

不平衡噪声的构造分两层。第一层在远距离麦克风处加入独立白噪声，功率在 10 dB 分贝动态范围内随机。第二层为每个麦克风模拟未校准增益，动态范围为 24 dB 分贝，两者叠加总动态范围为 34 dB 分贝。平均信噪比保持在 15 dB 分贝上下 10 dB 分贝范围内，且信噪比本身不受模拟增益影响。短时傅里叶分析统一用 1024 点帧长、512 点帧移、平方根 Hann 窗做分析与合成，保证各方法在相同时频分辨率下比较。

评估指标按问题组织。阵列信噪比用于衡量空间降噪能力，数值越大越好。短时客观可懂度 STOI 以通道前干净语音为侵入式参考，数值越大越好。语音质量感知评估 PESQ 同样以通道前干净语音为参考，数值越大越好。DNSMOS 为非侵入式神经网络 MOS 估计，无需参考，数值越大越好。复杂度用每秒音频的乘加运算次数 MACs/s 与可学习参数量衡量，数值越小越省。

### 基线覆盖了哪些信息条件？比较是否公平？

比较的公平条件是同一房间、同一语音、同一帧长帧移与同一 STFT 框架。基线包括随机单通道噪声信号作为下界，随机选择的无噪麦克风信号作为上界参考，基于最优信噪比的 oracle 麦克风选择作为务实单通道策略，已知真实噪声功率的 GEVD 作为使用完全先验的上界，用单位阵噪声协方差的朴素 GEVD 作为去掉噪声先验后的可运行空间滤波对照。此外还有外部基线：在随机麦克风上运行的 WebRTC 单通道降噪模块，以及预训练的掩蔽神经网络 GEVD。

论文给出两个第三方资源链接，资源状态是正文开源声明的唯一依据：本次收到的资源状态显示 WebRTC 源码链接当前可用，已公开；神经网络 GEVD 的代码仓库链接当前可用，已公开。可用仅表示链接可达，不代表权重或编译环境一定可复现。

需要区分 3 类比较对象。Oracle 噪声 GEVD 与最优麦克风选择属于事后或全知选择，不能代替可部署收益，只能作为上限。朴素 GEVD 与本文 DML-GEVD 属于实际可运行的盲空间滤波，可以直接比较。WebRTC 与神经网络 GEVD 属于不同运行阶段的单通道或掩蔽路线，其输入与监督不同，只能做有源对照，不能把类别差异当成同条件胜负。原文对神经网络 GEVD 取其单通道输出信号参与比较，这一点在解读数字时必须记住，否则会误以为它是多通道输出的直接对比。

中间验证环节使用无噪混响下的数据单独观察噪声功率学习曲线，目的是排除扩散混响分量对噪声估计的偏置。该环节按频率平均后画出 4 个通道的学习均值与标准差，并用虚线标出真实噪声功率。这种先看参数再看语音质量的组织方式，有助于把似然优化的偏差与最终增强效果分开归因。

### 主结果：降噪逼近上界了吗？语音质量同步提升了吗？

为比较降噪增益与感知质量代价的权衡，下表整理了低混响与中等混响下阵列信噪比及相关语音质量指标的原文数值，重点观察本文方法与全知噪声模型上界之间的距离。

| 来源证据 | 量化值一 | 量化值二 | 量化值三 | 量化值四 |
| --- | --- | --- | --- | --- |
| 来源句四 | 14.74 | 15.55 | 0.90 | 0.67；1.33；1.16；2.82；2.63 |

表后解释必须同时讲收益与代价。论文报告显示，在阵列信噪比上本文方法从随机基线的 14.74 提升到 21.18，低混响下距离上界 21.70 仅差 0.52，中等混响下从 15.55 提升到 20.63，距离上界 21.93 差 1.30，支持降噪能力接近全知噪声模型的判断。但在 STOI、PESQ、DNSMOS 上，本文方法与朴素 GEVD 差异很小，例如低混响 PESQ 为 1.59 对 1.61，DNSMOS 为 3.02 对 3.08，甚至略低于朴素对照。这说明降噪增益没有等比转化为可懂度与感知质量增益。未胜出项必须点名：若只看 PESQ 与 DNSMOS，朴素 GEVD 在本表数值上反而略高，不能声称本文方法全面超越所有基线。限制是混响下所有侵入式指标整体下降，因为参考是通道前干净语音，混响本身就会拉低分数，这不是降噪方法单独造成的。

### 外部基线与复杂度：单通道降噪和神经网络掩蔽表现如何？

为说明外部基线在低混响与中等混响下的表现差异，下面先汇总原文表一中两条外部基线行的关键量化结果，再结合正文论证其失真与复杂度含义。

| 来源证据 | 量化值一 | 量化值二 | 量化值三 | 量化值四 |
| --- | --- | --- | --- | --- |
| 来源句二 | 0.86 | 0.62 | 1.64 | 1.29；3.07；2.94 |
| 来源句三 | 30 | 2015 | 5206 | 5210；25；692；730；2017；31；8；60；926；935；1972；65；943；950；1979 |
| 来源句四 | 5 | 6 | 3 | — |

论文报告显示，WebRTC 在 PESQ 与 DNSMOS 上处于朴素 GEVD 附近，例如低混响 DNSMOS 为 3.07，但其 STOI 跌到 0.86 而低于噪声基线的 0.90，中等混响更跌到 0.62 而低于基线的 0.67，原文将其归因于语音失真。神经掩蔽 GEVD 的 PESQ 与 DNSMOS 反而低于噪声基线，原文描述为可感知的谱失真，尽管检查其掩蔽形状良好。这是一个重要的反例：掩蔽形状好不等于最终音质好，协方差估计误差与波束形成器失配会引入失真。复杂度上，本文方法推理时仅含 GEVD 操作，每秒乘加为 1.85 M，可学习参数为 2052 个，远小于神经掩蔽方法的 75 M 乘加每秒与 3.4 M 参数。代价是优化阶段需对每条语音迭代约 2000 轮，论文未报告每轮耗时与总时长，因此不能把推理开销低等同于整体部署成本低。

### 拿掉准确噪声会怎样？学习曲线暴露了什么系统偏差？

论文没有做常规的模块消融表，但提供了两组可当作反证的对照。第一组是朴素 GEVD，用单位阵代替真实对角噪声协方差。它的阵列信噪比为 17.24 和 17.99，明显低于本文方法的 21.18 和 20.63，支持准确噪声加权对降噪至关重要。但它的 STOI、PESQ、DNSMOS 与本文方法接近，说明在可懂度与感知质量维度，噪声模型的精确度并非唯一决定因素，传递函数估计误差与混响可能是瓶颈。不能从模型名称推定拿掉精确噪声后必然在所有指标上崩溃，原文数字恰好否定了这种笼统推断。

第二组是噪声功率学习曲线的中间评估。在无混响数据上，4 个通道的学习均值随轮次收敛，标准差上界被真实噪声水平约束，且标准差大小与真实噪声功率成比例。论文报告了一个系统性低估：学习到的噪声功率普遍低于真实虚线。原文给出的有限解释是 MVDR 语音估计本身残留噪声，残差 Y 减 H 乘 S 会出现部分噪声抵消，从而让噪声功率被低估。该解释属于支持性而非因果证明，因为没有单独测量残留噪声与低估量的定量关系。用可能待验证的语气说，这种低估可能在高信噪比通道更明显，但原文未按通道信噪比分层统计，因此不能推广为每组每步都成立。

训练部署成本也需要分开讨论。总体趋势是推理开销低，但逐条优化的轮数多。若把 2000 轮乘以每轮对全序列的前向与反向开销，总计算可能远高于 1 次前向的神经网络。原文未测量延迟、实时率与内存峰值，因此不承诺延迟改善。复现时应记录每条 10 s 秒语音的优化时长，作为补充验证。

### 哪些结论不能推广？还有什么没有测？

首先是模型假设的边界。噪声协方差被限定为对角阵，依赖麦克风间距大带来的低相干假设。若阵列中存在近距离麦克风对或强方向性干扰，对角假设失效，方法需要扩展为块对角或满矩阵，但参数量与优化难度会上升。其次是单声源假设，全文只处理一个语音源加噪声，没有评估多说话人或竞争声源下的特征向量混淆。混响实验只做到 400 ms 毫秒的中等混响，没有覆盖强混响大房间，侵入式指标在混响下本就受参考选择影响，因此不能把混响鲁棒简单理解为去混响能力。

其次是评估的缺项。论文未报告方差显著性、置信区间或统计检验，20 条语音的平均值可能受个别样本主导。未测量误判率、帧级延迟、实时因子与功耗，复杂度只给了推理乘加与参数量，没有给出优化阶段的浮点运算与内存。未评估时变噪声下的跟踪能力，因为优化是针对整条语音离线进行的，若噪声功率在语音内部突变，固定对角估计可能跟不上。未评测真实录音，只用了仿真鞋盒房间与白噪声，真实设备的频率响应、限幅与同步抖动都未建模。

最后是表述上的克制。论文用达到广义特征值分解与已知噪声功率的性能来总结，这句话应理解为在阵列信噪比上接近上界，而非在所有感知指标上打平。缺失证据不是技术错误，但读者不应把相关性当因果，例如不能因为似然上升就断定可懂度必然上升，原文 STOI 数字已经显示两者不同步。

### 复现先做什么？需要保留哪些超参数与信息条件？

复现的第一步是重建数据管线。按原文生成鞋盒房间，尺寸 5 m 乘 6 m 乘 3 m，混响时间分别设 40 ms 毫秒与 400 ms 毫秒，采样率 16 kHz，帧长 1024，帧移 512，平方根 Hann 窗做分析与合成。取 LibriSpeech 干净语音，随机布置 1 个声源与 4 个麦克风，加入 10 dB 分贝动态范围的独立白噪声，再乘以 24 dB 分贝动态范围的未校准增益，保持平均信噪比 15 dB 分贝上下浮动 10 dB 分贝。保留 20 条 10 s 秒语音的随机种子，否则无法对齐基线。

第二步是实现可微模型。依次实现在线协方差更新加功率迭代的传递函数层、最小方差无失真响应语音层、对数似然求和层，3 层共享同一组对角噪声功率变量。损失取负对数似然，用 Adam 对整条序列做全批量更新，论文图示轮数达 2000 轮。必须记录自己选择的 Adam 学习率、初始化、非负约束与频率参数化，因为原文未报告这些细节。验证中间量时，先在 40 ms 毫秒数据上画出按频率平均的学习均值与标准差，检查是否收敛且略低于真实值，再进入语音质量评估。

第三步是对齐基线与指标。用同一 STFT 参数实现随机单通道、oracle 最优单通道、朴素 GEVD、oracle 噪声 GEVD，并调用公开的 WebRTC 与神经网络 GEVD 仓库。计算阵列信噪比、STOI、PESQ、DNSMOS 时注意前两者以通道前干净语音为参考。区分代码开源、权重下载与系统可运行：本文方法无跨语音权重，只有逐条优化的噪声参数；外部神经网络方法依赖预训练权重，直接搬运可能因领域失配而出现原文中的谱失真。复现报告应同时给出推理乘加与逐条优化耗时，避免只报参数量。

### 何时值得尝试这种逐条优化？一句话收束

当阵列由临时拼凑的未校准设备组成、各通道噪声水平差异大、且没有可靠的语音活动检测或预训练掩蔽可用时，这种逐条拟合对角噪声协方差的做法值得尝试。它的价值在于用低维物理参数替代大规模监督训练，在降噪维度逼近全知噪声的上界，且推理保持轻量。它的代价是每条语音都要迭代优化，不适合低延迟在线场景，且对感知质量的提升不如对信噪比的提升显著。

对刚入门的研究生，建议把本文当作理解确定性似然、广义特征值分解与最小方差无失真响应三者关系的习题，而非当作通用降噪方案。先能复述样本路径：观测进来，先猜噪声，再求方向，再求语音，再算似然，再修正噪声。然后能解释两个关键判断：为什么随机性最大似然难以分辨各通道噪声，为什么系统性低估噪声仍能带来信噪比提升。补做的验证应包括真实录音、时变噪声跟踪、优化耗时统计与显著性检验。只有补齐这些，才能判断它在你的会议、助听或多设备场景中是否真正可部署。

## 📐 原文公式与排版

以下展示论文原页中的数学表达区域，保留原始上下标、分式和符号排版。区域序号仅用于本文导航，不是论文公式编号。

[![原文数学表达区域 1，PDF 第 1 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/f491c7b9774b/figure-1.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/f491c7b9774b/figure-1.png)

区域 1 · [查看论文原页](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0000101.pdf#page=1)

[![原文数学表达区域 2，PDF 第 1 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/f491c7b9774b/figure-2.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/f491c7b9774b/figure-2.png)

区域 2 · [查看论文原页](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0000101.pdf#page=1)

[![原文数学表达区域 3，PDF 第 2 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/f491c7b9774b/figure-3.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/f491c7b9774b/figure-3.png)

区域 3 · [查看论文原页](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0000101.pdf#page=2)

[![原文数学表达区域 4，PDF 第 2 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/f491c7b9774b/figure-4.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/f491c7b9774b/figure-4.png)

区域 4 · [查看论文原页](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0000101.pdf#page=2)

[![原文数学表达区域 5，PDF 第 2 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/f491c7b9774b/figure-5.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/f491c7b9774b/figure-5.png)

区域 5 · [查看论文原页](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0000101.pdf#page=2)

[![原文数学表达区域 6，PDF 第 2 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/f491c7b9774b/figure-6.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/f491c7b9774b/figure-6.png)

区域 6 · [查看论文原页](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0000101.pdf#page=2)

[![原文数学表达区域 7，PDF 第 2 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/f491c7b9774b/figure-7.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/f491c7b9774b/figure-7.png)

区域 7 · [查看论文原页](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0000101.pdf#page=2)

[![原文数学表达区域 8，PDF 第 2 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/f491c7b9774b/figure-8.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/f491c7b9774b/figure-8.png)

区域 8 · [查看论文原页](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0000101.pdf#page=2)

[![原文数学表达区域 9，PDF 第 2 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/f491c7b9774b/figure-9.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/f491c7b9774b/figure-9.png)

区域 9 · [查看论文原页](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0000101.pdf#page=2)

[![原文数学表达区域 10，PDF 第 2 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/f491c7b9774b/figure-10.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/f491c7b9774b/figure-10.png)

区域 10 · [查看论文原页](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0000101.pdf#page=2)

[![原文数学表达区域 11，PDF 第 2 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/f491c7b9774b/figure-11.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/f491c7b9774b/figure-11.png)

区域 11 · [查看论文原页](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0000101.pdf#page=2)

[![原文数学表达区域 12，PDF 第 2 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/f491c7b9774b/figure-12.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/f491c7b9774b/figure-12.png)

区域 12 · [查看论文原页](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0000101.pdf#page=2)

[![原文数学表达区域 13，PDF 第 2 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/f491c7b9774b/figure-13.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/f491c7b9774b/figure-13.png)

区域 13 · [查看论文原页](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0000101.pdf#page=2)

[![原文数学表达区域 14，PDF 第 2 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/f491c7b9774b/figure-14.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/f491c7b9774b/figure-14.png)

区域 14 · [查看论文原页](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0000101.pdf#page=2)

[![原文数学表达区域 15，PDF 第 2 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/f491c7b9774b/figure-15.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/f491c7b9774b/figure-15.png)

区域 15 · [查看论文原页](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0000101.pdf#page=2)

[![原文数学表达区域 16，PDF 第 2 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/f491c7b9774b/figure-16.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/f491c7b9774b/figure-16.png)

区域 16 · [查看论文原页](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0000101.pdf#page=2)

[![原文数学表达区域 17，PDF 第 3 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/f491c7b9774b/figure-17.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/f491c7b9774b/figure-17.png)

区域 17 · [查看论文原页](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0000101.pdf#page=3)

[![原文数学表达区域 18，PDF 第 3 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/f491c7b9774b/figure-18.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/f491c7b9774b/figure-18.png)

区域 18 · [查看论文原页](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0000101.pdf#page=3)

[![原文数学表达区域 19，PDF 第 3 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/f491c7b9774b/figure-19.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/eusipco-2026/f491c7b9774b/figure-19.png)

区域 19 · [查看论文原页](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0000101.pdf#page=3)

另有 14 个候选区域因边界不明确或图片数量、尺寸限制未展开；请[查看完整论文](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0000101.pdf)中的原始排版。

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。
- 评分规则：type-aware-v1
- 评分模型：muse-spark-1.3-contributor
- 评分请求协议：openai_responses

---

[← 返回 eusipco-2026 论文汇总](/posts/conference-eusipco-2026/)
