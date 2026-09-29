---
title: "QAMO: Quality-aware Multi-centroid One-class Learning For Speech Deepfake Detection"
date: 2026-09-28
draft: false
description: "针对单中心单类学习把真语音压成单峰分布的问题，QAMO 按语音质量建立两个真语音中心并用质量分类与单类损失联合训练，在 XLSR-Conformer-TCM 上于 In-the-Wild 取得 5.21% 等错误率，代价是依赖 Scoreq 预测与增强样本的质量代理假设。"
tags: ["集成学习", "多任务学习", "语音", "语音质量评估", "语音伪造检测"]
categories: ["interspeech-2026 论文"]
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_paper_id: "conference:interspeech:2026:conference-paper-id:truong26_interspeech"
paper_digest_source_kind: conference
paper_digest_conference_id: "interspeech-2026"
paper_digest_conference_record_url: "https://www.isca-archive.org/interspeech_2026/truong26_interspeech.html"
paper_digest_conference_pdf_url: "https://www.isca-archive.org/interspeech_2026/truong26_interspeech.pdf"
paper_digest_api_reader_contract: "beginner-researcher-v3"
paper_digest_api_reader_article_sha256: "e961d3ddd355981fd3e33a6bcd9bc468069b45599230a34cf269c4b539609e73"
paper_digest_api_reader_plan_sha256: "2517c52ce6e913555583fe972c244c63cbb79cf96e6ead4691f5519134fa07c5"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings-v4"
paper_digest_api_reader_source_bindings_sha256: "9a4212ecc7d80c9254e28dae99180e2c038e301c514bd80ce8990feb59863599"
paper_digest_api_reader_source_table_count: 3
paper_digest_api_reader_source_formula_count: 0
paper_digest_api_reader_structured_artifacts_sha256: "75cc2b1e92c10d27cbb51f99da6a39f366cede12b7b06ff6abca6bf04a79afcf"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity-v1"
paper_digest_api_reader_author_identity_sha256: "3921c90d5f8a1620f8678186bda0bd3464642d95bcea62d4bbad72c081d7aad6"
paper_digest_api_reader_author_count: 6
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity-v1"
paper_digest_api_reader_resource_identity_sha256: "cb0cfdccc6a208ec783f03b8c8326363b1492a70a66d2cb16452cc5c8c26071b"
paper_digest_api_reader_resource_count: 0
paper_digest_api_reader_decision_projection: "api-reader-decision-projection-v2"
paper_digest_scoring_contract: "api-scoring-audit-v2"
paper_digest_taxonomy_contract: "paper-taxonomy-flat-tags-compat-v1"
paper_digest_taxonomy_selection_contract: "paper-taxonomy-selection-v1"
paper_digest_taxonomy_registry_version: "paper-taxonomy-v1"
paper_digest_taxonomy_registry_sha256: "15c82a567ce5a55dc1175684ed08b64c158558639d9c8fb822c9587ec32a8778"
paper_digest_taxonomy_concepts: [{"facet":"method","id":"method.ensemble-learning","label":"集成学习"},{"facet":"method","id":"method.multitask","label":"多任务学习"},{"facet":"signal","id":"signal.speech","label":"语音"},{"facet":"task","id":"task.speech-quality","label":"语音质量评估"},{"facet":"task","id":"task.speech-spoofing","label":"语音伪造检测"}]
paper_digest_primary_task: "语音伪造检测"
paper_digest_primary_method: "集成学习"
paper_digest_score: 6.2
paper_digest_rank_bucket: "前50%"
paper_digest_document_type: "方法研究"
paper_digest_conference_structure: pdf-visual-quote-evidence-v1
---

# 📄 真话不止一种音质：用质量感知的多中心为单类学习保留类内差异

> 英文题目：*QAMO: Quality-aware Multi-centroid One-class Learning For Speech Deepfake Detection*

> 会议身份：`conference:interspeech:2026:conference-paper-id:truong26_interspeech`



> 来源为官方会议 PDF；图片依据原页像素，表格数字依据原文引用。PDF 文字层不视为原始 TeX，未可靠恢复的结构不作推断。


> 会议来源：[官方记录](https://www.isca-archive.org/interspeech_2026/truong26_interspeech.html) · [官方 PDF](https://www.isca-archive.org/interspeech_2026/truong26_interspeech.pdf)

标签：#集成学习 #多任务学习 #语音 #语音质量评估 #语音伪造检测

评分：**6.2/10** | 创新 1.4/2 | 技术严谨 1.0/1.5 | 实验充分 1.1/1.5 | 清晰度 0.8/1 | 影响力 1.0/1.5 | 开源 0.0/1.5 | 可复现 0.1/0.5 | 工程/实践 0.8/1.5

排名：前50% | 文档类型：方法研究

## 👥 作者与机构

- Duc-Tuan Truong：机构信息未能从会议 PDF 纯文本可靠映射
- Tianchi Liu：机构信息未能从会议 PDF 纯文本可靠映射
- Ruijie Tao：机构信息未能从会议 PDF 纯文本可靠映射
- Junjie Li：机构信息未能从会议 PDF 纯文本可靠映射
- Kong Aik Lee：机构信息未能从会议 PDF 纯文本可靠映射
- Eng Siong Chng：机构信息未能从会议 PDF 纯文本可靠映射

## 📌 核心摘要

语音伪造检测（Speech Deepfake Detection）输入为待测语音波形，输出为真实或伪造二值判定，难点在于未知攻击不可穷举而真实语音内部存在质量与风格差异，单质心单类学习会把真实分布过度压缩为单峰。所提质量感知多质心单类学习（Quality-aware Multi-centroid One-class Learning，QAMO）先用语音质量评估器Scoreq预测MOS并按阈值离散为高低两档质量标签，再为每档学习可训练质心并以加性间隔Softmax约束质量分类，随后以扩展的多质心OC-Softmax拉近真实样本与其对应质心并推远伪造样本与最近质心，最后在推理时以Softmax加权集成所有质心相似度得到检测分。与单质心单类学习及简单拼接质量分类相比，该机制显式保留真实类内质量结构并避免推理依赖质量标签。在XLSR-Conformer-TCM主干下，QAMO在In-the-Wild上以5.21%等错误率（Equal Error Rate，EER）优于同设置加权交叉熵与单质心基线的7.13%与6.72%，在21DF上以1.63%优于2.39%与1.89%，在FoR上以3.45%优于5.70%与5.65%，但在21LA上以2.53%弱于加权交叉熵的1.37%。该结论主要适用于以ASVspoof2019 LA训练并向21LA、21DF、ITW与FoR泛化的短句验证场景，对更细粒度质量分层与强失真下质量误判尚未验证。原文未披露训练、推理或部署成本。

## 🔗 开源与复现资源

本次未形成可展示的已核验资源记录，开放状态尚未核实。
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 输入是什么？要解决的泛化难题是什么？

本文的输入是一段待判定的语音波形，目标是输出一个对策分数，用来判断它是真实录制的真语音还是合成、转换或拼接生成的伪造语音。评价时只关心等错误率，阈值取在误接受与误拒绝相等处，数值越低越好。对于刚进入语音伪造检测的研究生，关键依赖是训练与测试的攻击不重叠。传统二分类把已知真与已知伪一起学分界面，遇到未知合成器容易过拟合。单类学习的白话含义是只把真语音学成一个紧凑区域，偏离该区域就判为可疑伪造，英文为 one-class learning，缩写 OCL。

论文的起点是已有单中心单类方法 OC-Softmax，它用一个真语音中心加边距实现上述思想。待解决的矛盾是真语音本身并不单峰，不同录音设备、环境噪声和说话自然度会让高质量与低质量真语音散得很开，硬压到一个球里要么放宽边界导致伪造混入，要么收紧边界导致低质量真语音被误杀。论文引入的第二个可测量线索是语音质量，含义是人听感上的清晰度、无失真程度与韵律自然度的综合感受，常用平均意见分来近似，英文为 Mean Opinion Score，缩写 MOS。

已有数据显示真与伪在 MOS 分布上有可利用的错位，但此前多用于选样本或课程学习，没有直接放进单类中心的结构里。本文要复述的核心动作就是如何把质量变成中心的结构，再让推理时不需要质量标签。

### 同任务、同监督的已有路线如何对照？

按同输入、同目标、同监督来对照，论文实际比较了 3 条可运行路线。第一条是加权交叉熵二分类，英文为 weighted cross-entropy，缩写 WCE，它同时看真与伪，优点是拟合已知攻击强，缺点是对未知攻击泛化弱。第二条是单中心单类 OC-Softmax，只为真语音维护一个中心，真样本拉近、伪样本推远，优点是更关注真语音本质，缺点是单峰假设过强。

第 3 条是多中心单类 SAMO，它按说话人身份维护多个中心，说明多中心能保留类内说话人差异，但论文指出其中心靠同说话人嵌入平均得到，缺乏显式分类监督，有坍缩到一点的风险，且推理依赖说话人信息，实际部署中说话人标签往往不可得。另一条同目标但不同机制的是质量感知路线，例如用 MOS 选样本或按自然度做课程学习，代表为 XLSR-Conformer-NACL，它们报告质量信息有助于检测，但没有把质量编码为单类中心。

QAMO 的位置是同时继承 SAMO 的多中心容量与质量感知路线的质量线索，但把组织维度从说话人换成质量等级，并用质量分类损失显式约束中心。理解这一步对后文消融很关键：仅仅在 WCE 上加质量分类损失是不够的，必须配合多中心单类损失；仅仅有多中心而无质量分类监督，中心仍可能坍缩。

### 为什么单中心会抹掉低质量真语音？

举一个教学例子帮助建立直觉，明确标为例子而非论文数值。假设高质量真语音集中在嵌入空间右侧，低质量真语音因噪声偏向左侧，高质量伪造恰好模仿右侧的干净韵律。如果只设一个中心，训练为了包住左右两团真语音，只能把半径放大或把中心放在中间，结果中间地带恰好靠近部分伪造，阈值难选。论文用图 1 把这个问题画出来：左侧单中心用一个绿色圆表示真语音紧凑区，外圈红色虚线表示伪造边界，灰色表示真伪边距之间的子空间。

深浅绿方块表示低、高质量真语音被硬塞进同一个圆。右侧 QAMO 则画出两个绿色圆，分别以星形表示高质量真中心与低质量真中心，灰色区域变成双圆并集，伪造方块被推到并集之外。这个例子对应的真实信号是清晰度下降、加性噪声与信道失真会改变频谱与韵律细节，而合成语音的 MOS 分布与真语音并不完全重合。论文进一步用跨数据集 MOS 分布说明这种差异真实存在：19LA 训练集以高质量真为主，21LA 与 ITW 则包含更多中低质量样本，ITW 的真语音分布明显更宽更左。

因此问题形式化为如何在只建模真语音的前提下，保留按质量划分的类内结构，同时不要求测试时提供质量标签。

### QAMO 让一个样本走完怎样的全流程？

先沿一个训练样本走完全程。输入波形先经前端与骨干网络得到归一化嵌入，记为该语音的向量表示。训练前用 Scoreq 模型为每个原始训练样本预测 MOS，再与阈值比较得到离散质量等级。论文取 2 级，记为集合 Q 等于 0 与 1，0 表示低质量，1 表示高质量，阈值 τ 取 2.5。若该样本是真语音且 MOS 低于阈值，它就属于低质量真组。

若是真语音且高于阈值，则属于高质量真组。模型维护两个可学习的真语音中心向量，每个对应一个质量等级，维度与嵌入相同。质量分类分支要求真语音嵌入能被正确分到自己的质量中心，采用带加性边距与尺度的 AM-Softmax 损失，英文为 additive margin softmax。单类分支要求真样本靠近自己质量的中心，伪样本远离所有中心，形式上扩展自 OC-Softmax。两项损失按权重 λ 相加得到总目标。

推理时输入一段未知语音，模型计算它与两个中心的余弦相似度，再按集成策略加权求和得到最终对策分数，分数越高越倾向真语音。整个流程不需要说话人标签，测试时也不需要 MOS 预测器。

**单类学习 × 语音质量：** 单类学习负责只紧凑建模真语音分布、把偏离视为伪造以泛化到未知攻击，语音质量负责刻画真语音内部因清晰度、噪声和自然度带来的可分差异，二者搭配的理由是单一中心会抹掉这种类内差异，组合意义是用质量划分出多个真语音子空间，既保留差异又维持对伪造的排斥。

下面看示意图建立整体结构。导读：该图左右对比了单中心与 QAMO 的理想几何，重点是中心数量、样本颜色与灰色判决区域的变化。

> **看图路径：** 1. 先看左右两幅子图的标题，确认左为单中心、右为 QAMO 双中心；2. 再看顶部图例中四类方块：浅绿高质真、深绿低质真、橙高质伪、红低质伪；3. 然后沿箭头看真样本被拉向星形中心、伪样本被推向外侧红色虚线；4. 最后对比灰色区域形状，体会单圆与双圆并集对类内容量的差异

[![原论文 Figure 1：Illustration of the single-centroid one-class learning and our proposed QAMO.](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/interspeech-2026/f479ef45c863/figure-1.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/interspeech-2026/f479ef45c863/figure-1.png)

*论文图 1。原论文 Figure 1：“Illustration of the single-centroid one-class learning and our proposed QAMO. The gray region indicates the sub- space between the bona fide and spoof margins.”。*

解释：左侧只有一个星形中心，所有深浅绿真样本箭头都指向它，灰色为单圆；右侧有两个星形中心，深绿箭头指向低质量中心、浅绿箭头指向高质量中心，灰色为双圆并集。伪造的橙色与红色方块在两侧都被箭头推离灰色区，但右侧因容量更大，真语音不必过度压缩。灰色在原文图注中明确为真与伪边距之间的子空间。该图是示意而非真实嵌入投影，真实分离效果需看后文的统一流形投影可视化。

### 两个损失各自算什么？中心如何保持分工？

第一个组件是质量感知多中心建模。动词是划分与对齐。划分指按公式 1 把 MOS 变成 0 或 1 的标签，阈值 τ 取 2.5。对齐指用质量分类损失让真语音嵌入靠近对应中心。符号上，B 为真样本数，qi 为第 i 个样本的质量等级，归一化嵌入记为 xi 的向量，m 为加性边距，s 为尺度。

计算目标是让对应中心的分对数在减去边距后仍大于其他质量中心，从而迫使两个中心在角度上分开。原文实现取 s 为 20，m 为 0.4。这一步只用真语音，不用伪造参与质量分类。第二个组件是质量感知多中心单类学习。动词是拉近与排斥。

对真样本，相似度 di 取其与自身质量中心的余弦相似度；对伪样本，di 取其与所有中心的最大余弦相似度。随后用带缩放因子 α 与边距 m0、m1 的逻辑形式惩罚：真样本相似度低于 m0 则受罚，伪样本相似度高于 m1 则受罚。原文取 α 为 20，真边距 m0 为 0.9，伪边距 m1 为 0.2。总损失为单类损失加 λ 乘质量分类损失，λ 取 0.1。

与 SAMO 的关键区别是 SAMO 按说话人平均构造中心而无分类监督，QAMO 用分类损失显式维持中心分工。论文报告的证据是去掉质量分类损失后，两个质量中心在可视化中坍缩到一点，性能回落到接近单中心水平，这支持了分类监督防止坍缩的判断。

**质量感知多中心 × OC-Softmax：** OC-Softmax 负责用一个真语音中心加边距把真拉近、伪推远，质量感知多中心负责为低质量与高质量各设一个可学习中心并按样本质量标签计算相似度，二者搭配是因为单中心难以同时容纳不同质量的真语音，组合后真样本只靠近自己质量的中心、伪样本被惩罚与所有中心的最大相似度，从而扩大容量而不放松判决。

**质量分类损失 × QAMO 单类损失：** 质量分类损失负责用 AM-Softmax 让真语音嵌入可分到对应质量中心、防止多中心坍缩到一点，QAMO 单类损失负责用带边距的二分类形式把真语音拉向对应中心、把伪造推离所有中心，二者以权重 λ 相加，搭配理由是仅有单类拉斥不足以让中心保持质量语义，组合后中心既有判别性又有质量对齐。

### 训练时增强样本的质量标签如何处理？推理有几种打分？

训练的数据流需要特别说明增强处理，因为它影响质量标签的可信度。论文在 19LA 上训练与验证，训练中统一使用 RawBoost 第 4 组配置做在线增强，覆盖此前文献中第 3 组与第 5 组包含的噪声类型，以 1 次实验同时适配 21LA 与 21DF。增强是按迭代随机施加的，同一句话在不同轮可能被不同方式变换。若对每个增强波形都跑 Scoreq 预测，会带来显著开销并拖慢训练。论文采用的轻量代理是把增强样本直接指派为低质量组。

原文给出的安排理由是增强引入加性噪声与信道失真，预期 MOS 下降，且实测 19LA 训练样本在增强前后 MOS 分布明显左移，增强后多数落在阈值 2.5 之下。由于 19LA 原本以高质量为主，论文增强 40% 训练数据以平衡高低质量比例，验证时不做增强。需要指出这是代理假设而非逐样本实测，个别增强后仍高质量的样本会被错标，这是待验证的近似。

**最大相似度推理 × 集成加权推理：** 最大相似度推理负责在无质量标签时取与所有中心的最大余弦相似度作为分数，集成加权推理负责先对各中心相似度做 softmax 得到权重再求加权和，搭配比较的理由是硬指派对质量估计误差和伪造偶然对齐敏感，组合意义是论文最终采用集成策略以平滑、不确定性感知的方式聚合多中心证据，阈值更稳定。

推理有两种可运行策略。第一种是最大分数推理，取与所有中心的最大余弦相似度，对应论文公式 6。若测试时有质量标签，也可直接取对应中心的相似度，但这需要额外 MOS 预测器，增加部署成本。第二种是集成分数推理，先对各中心相似度做 softmax 得到权重，再求加权和，对应论文公式 7 与公式 8。原文解释集成更稳定：它强调最兼容的质量等级，同时聚合所有中心的证据，额外开销仅为 softmax 与加权求和，可忽略。

论文的分数分布对比显示最大分数下真伪分布更扁平重叠，阈值难选，而集成分数下分离更尖锐。最终主结果均采用集成策略，最大分数只作为消融中的对照，不作为可部署推荐。

### 在哪些数据与条件下测？阈值与指标如何定？

实验按问题组织为泛化测试。训练与验证只用 ASVspoof2019 逻辑访问集，测试跨 4 个条件：ASVspoof2021 逻辑访问、ASVspoof2021 深度伪造、In-the-Wild 与 Fake-or-Real 的规范测试子集。选择理由是覆盖未知攻击与多种声学条件，且各测试集的质量分布不同。主指标为等错误率，越低越好。骨干上论文复用了两个公开结构：XLSR-Conformer-TCM 与 XLSR-Nes2NetX，遵循前者原始训练设置。

质量估计用 Scoreq 预测器，阈值 2.5 分为高低 2 级。单类损失超参数为 α20、真边距 0.9、伪边距 0.2，质量分类分支尺度 20、边距 0.4、权重 0.1。数据增强统一用 RawBoost 第 4 组，而非以往针对 21LA 与 21DF 分别训练的第 3 组与第 5 组，目的是减少实验数并覆盖全部噪声类型。需要核对公平条件：论文括号内复现了部分基线在统一增强配置下的结果，与原文献报告值不同，例如某些 WCE 与 OC-Softmax 数值因增强配置改变而变化，因此跨行比较时应以同配置复现值为准，而非直接引用外部最优值。

**平均意见分 × RawBoost 增强：** 平均意见分负责由 Scoreq 模型给出可计算的语音质量代理并经阈值 τ 离散为低、高 2 级，RawBoost 增强负责在训练中随机加入噪声与信道失真以覆盖 21LA 与 21DF 的失真类型，二者搭配的理由是增强会系统性拉低预测 MOS，组合后论文把增强样本直接代理为低质量组，既平衡了原本以高质量为主的 19LA 训练分布，又避免对每个增强波形重复跑 MOS 预测的高开销。

导读：下图展示跨数据集 MOS 分布，是理解为何需要质量多中心的经验证据，横轴为 Scoreq MOS，左右分真伪，纵向为不同数据集。

> **看图路径：** 1. 先确认横轴为 Scoreq MOS、纵轴为密度，左右两列分别为真与伪；2. 再自上而下对比 19LA 训练、21LA、21DF、ITW、FoR 共五行；3. 重点观察 ITW 真语音分布明显左移且更宽，而 FoR 集中在高分端；4. 最后体会同一阈值下不同测试集的高低质量比例差异

[![原论文 Figure 2：MOS distributions across our examined datasets.](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/interspeech-2026/f479ef45c863/figure-3.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/interspeech-2026/f479ef45c863/figure-3.png)

*论文图 3。原论文 Figure 2：“MOS distributions across our examined datasets.”。*

解释：可见 19LA 训练真语音集中在高分端，21LA 真语音出现双峰，ITW 真语音明显左移拖尾，说明野外真语音本身质量更分散；伪造列在各数据集中也覆盖宽广质量区间，与真语音重叠但形态不同。这支持了单中心难以同时包住所有真语音的动机，但该图只显示质量分布，不直接证明检测性能，性能仍需看对照表。增强前后分布图进一步显示蓝色增强前峰值在 3 到 4 之间，橙色增强后峰值移到 1.7 附近，多数低于 2.5，为把增强样本代理为低质量提供了分布层面的依据。

### 主结果在什么骨干上赢了？代价与反例是什么？

比较问题是：在统一增强与跨数据集条件下，质量多中心是否优于单中心单类与二分类基线。公平条件是同骨干、同训练数据、同增强配置，指标方向为等错误率越低越好。下表整理论文报告的核心数字，分为骨干、指标、基线、本方法与比较对象五列，数值保留原文写法，表后解释主要收益与未胜出项。

| 条件 | 指标 | 基线 | 本方法 | 比较对象 |
| --- | --- | --- | --- | --- |
| 21LA，XLSR-Nes2NetX | EER | 3.36% | 2.29% | OC-Softmax |
| 21DF，XLSR-Nes2NetX | EER | 2.29% | 1.60% | OC-Softmax |
| 21DF，XLSR-Conformer-TCM | EER | 同骨干多基线比较 | 1.63% | 同骨干多基线 |
| ITW，XLSR-Conformer-TCM | EER | 同骨干多基线比较 | 5.21% | 同骨干多基线 |
| FoR，XLSR-Conformer-TCM | EER | 同骨干多基线比较 | 3.45% | 同骨干多基线 |

论文报告，在 XLSR-Nes2NetX 上 QAMO 把 21LA 从 3.36% 降到 2.29%，把 21DF 从 2.29% 降到 1.60%，但在 ITW 与 FoR 上 OC-Softmax 仍略好，说明改进并非在所有分布上一致。在更强的 XLSR-Conformer-TCM 上，QAMO 在 21DF 取得 1.63%，在 ITW 取得 5.21%，在 FoR 取得 3.45%，优于同骨干的加权交叉熵、单中心 OC-Softmax 与此前的质量感知模型。因此支持的判断是质量多中心提升了跨域鲁棒性与均衡性，但不能理解为在每组数据上都最优。

导读：下图对比最大分数与集成分数在 ITW 上的对策分数分布，横轴为分数，纵轴为密度，红为伪、绿为真，虚线为等错误率阈值。

> **看图路径：** 1. 先确认左右子图分别为最大分数与集成分数，横轴为对策分数、纵轴为密度；2. 再看红色伪造峰、绿色真语音分布与黑色虚线等错误率阈值的位置；3. 对比左侧真分布的扁平拖尾与右侧在高分区出现的新峰；4. 最后观察伪造峰在集成策略下是否更尖、重叠区是否缩小

[![原论文 Figure 5：ITW score distributions of XLSR-Conformer-TCM with max-score and ensemble-score inference…](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/interspeech-2026/f479ef45c863/figure-5.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/interspeech-2026/f479ef45c863/figure-5.png)

*论文图 5。原论文 Figure 5：“ITW score distributions of XLSR-Conformer-TCM with max-score and ensemble-score inference strategies.”。*

解释：左侧最大分数下绿色真分布扁平拖尾，与红色伪峰重叠区较大，阈值落在重叠附近；右侧集成分数下红色伪峰更尖，绿色真分布在高分区形成更明显的第二峰，重叠缩小。论文据此认为集成策略通过归一化多中心证据得到更稳定、可校准的分数，这与消融中最大分数推理更差的结果一致。但该图只针对 ITW 与该骨干，不能推广到所有数据集。

### 拿掉质量监督或换成硬指派会发生什么？

消融要回答两个机制问题：中心分工是否依赖质量分类损失，推理是否需要集成而非硬指派。下表把 WCE、WCE 加质量损失、去质量损失 QAMO、最大分数 QAMO 放在同一指标下与完整 QAMO 对比，列数满足五列要求，数值来自原文消融表，单位仅保留在指标格中，数据格保留裸值。

| 消融设置 | 指标 | 对照取值 | QAMO 取值 | 差异方向 |
| --- | --- | --- | --- | --- |
| WCE | EER (%) | 21DF 2.39，ITW 7.13，FoR 5.70 | 21DF 1.63，ITW 5.21，FoR 3.45 | QAMO 在 3 组更低 |
| WCE 加质量损失 | EER (%) | 21DF 1.72，ITW 7.18，FoR 7.55 | 21DF 1.63，ITW 5.21，FoR 3.45 | 简单加质量仍不及完整 QAMO |
| 去质量损失 | EER (%) | 21DF 2.17，ITW 6.47，FoR 2.78 | 21DF 1.63，ITW 5.21，FoR 3.45 | 去监督后在 21DF 与 ITW 退化 |
| 最大分数推理 | EER (%) | 21DF 2.29，ITW 6.31，FoR 5.16 | 21DF 1.63，ITW 5.21，FoR 3.45 | 集成推理更优 |

论文对该表的解释是，在 WCE 上简单加入质量分类损失仅带来边际增益而不及 QAMO，在 QAMO 内部去掉质量损失会导致退化并伴随中心坍缩，用最大分数推理代替集成推理则更差，这确认了显式质量监督与 softmax 加权求和的必要性，且该消融基于特定骨干与统一增强配置。

导读：下图为 ITW 样本在统一流形投影下的 2 维嵌入，左中右分别为单中心、去质量损失 QAMO 与完整 QAMO，颜色区分高低质量真伪，星形为中心。

> **看图路径：** 1. 先看顶部图例，区分深浅绿真语音与红橙伪造及星形中心含义；2. 再从左到右对比三种训练：单中心、去质量损失的 QAMO、完整 QAMO；3. 观察中间子图两个质量中心是否重合到左下角一点；4. 最后看右侧完整 QAMO 中浅绿与深绿真样本是否沿不同方向展开

[![原论文 Figure 4：2D UMAP \[30\] feature embedding visualization of ITW samples from different trained…](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/interspeech-2026/f479ef45c863/figure-4.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/interspeech-2026/f479ef45c863/figure-4.png)

*论文图 4。原论文 Figure 4：“2D UMAP [30] feature embedding visualization of ITW samples from different trained XSLR-Conformer-TCM models.”。*

解释：左侧单中心下高低质量真样本沿长条混叠，右上伪造团与真语音仍有分界，说明单类在大域偏移下仍有效但质量混叠严重。中间去质量损失时两个星形中心几乎重合在左下角，验证了坍缩假设。右侧完整 QAMO 中浅绿高质量真与深绿低质量真沿不同方向展开，星形中心分开，伪造仍集中在右上。该图是降维可视化，距离经过非线性压缩，不能当作原始余弦距离的定量证明，只能作为机制定性支持。

### 哪些条件未被验证？什么结论不能下？

首先是资源状态的唯一依据。本次未发现来源绑定且完成超文本传输安全协议状态验证的资源，因此不得声称代码、模型或数据已公开。原文脚注虽给出代码地址，但按本次可核对要求，应表述为本次未能确认可达，而非已公开可用。其次是质量标签的可靠性。

训练质量来自 Scoreq 预测而非人工 MOS，增强样本更是直接代理为低质量，论文用增强前后分布左移作为合理性支持，但未报告代理的误标率，也未测量逐样本预测误差对中心的影响，因此不能把质量等级当作金标准。第三是超参数与划分的边界。阈值 2.5、2 级划分、λ0.1 等均在给定数据上选定，未验证更多质量级数或自适应阈值是否更好，也未报告多次随机种子的方差与显著性。第四是成本与延迟。

论文说明集成的额外计算可忽略，但未测量训练时长、推理延迟、模型参数量与输出帧率，也未给出误判率随阈值的完整曲线，因此不能承诺延迟或成本得到改善。最后是适用范围。QAMO 在干净 21LA 上不如 WCE，在个别骨干与 ITW 组合上不如单中心，说明其优势集中在质量分散的跨域条件，总体趋势不等于每组都成立。

### 要复现应先固定哪些实验条件？

复现的第一步是固定数据与协议。只用 19LA 训练与验证，在 21LA、21DF、ITW 与 FoR 规范子集上测试，主指标用等错误率。下表把必须固定的配置整理为五列，便于逐项核对，数值保留原文写法。

| 条件 | 指标 | 参数 | 取值 | 说明 |
| --- | --- | --- | --- | --- |
| 质量划分 | 阈值 | τ | 2.5 | Scoreq 预测分高低 2 级 |
| 单类损失 | 缩放与边距 | α，m0，m1 | 20，0.9，0.2 | 真 0.9 伪 0.2 |
| 质量损失 | 尺度边距权重 | s，m，λ | 20，0.4，0.1 | AM-Softmax 分支 |
| 增强 | 配置与比例 | RawBoost 4，40% | 统一配置 | 验证不增强 |
| 推理 | 策略 | 集成加权 | softmax 加权和 | 无需质量标签 |

该表仅整理训练与推理必须固定的阈值、损失超参数、增强比例与评分策略，复现时应逐项核对并在本地验证质量左移假设是否成立，避免混用不同测试集的数值。
第二步是固定骨干与训练设置。

论文在 XLSR-Conformer-TCM 上遵循其原始训练设置，在 XLSR-Nes2NetX 上做对照，复现时应先跑通单骨干的 WCE 与 OC-Softmax 基线，再加入质量分支。第三步是处理增强与质量的耦合。按原文做法对 40% 训练样本在线施加 RawBoost 第 4 组变换，并将其质量标签记为低质量，同时记录增强前后 MOS 分布以验证左移假设是否在本地环境成立。若要检验代理的代价，可补做一轮对增强波形实际跑 Scoreq 预测的对照，比较误标比例与性能变化，原文未做这项验证。第四步是推理与阈值。

默认用集成分数，最大分数仅作消融对照；阈值在验证集或测试集上按等错误率定义选取，报告时注明聚合对象与划分，避免把不同测试集的数值混排。缺项提示：原文未报告优化器细节、学习率、批量大小与硬件预算，复现时需回到骨干原始论文补齐并明确标注来源，不能从模型名推定实现。

### 何时值得尝试 QAMO？还需补哪项验证？

当测试语音来自野外采集、质量参差且攻击未知时，值得尝试 QAMO。它的可复述动作是为真语音按质量维护两个中心，用质量分类损失防止坍缩，用单类损失保持对伪造的排斥，推理时用集成加权避免依赖质量标签。最强证据是在 Conformer-TCM 骨干上于 21DF、ITW 与 FoR 同时优于同条件 WCE 与单中心，其中 ITW 为 5.21%。主要代价与边界是干净集上可能不如二分类，且依赖 Scoreq 代理与增强指派假设。常见的误解是把平均意见分当作人工听感金标准，实际上它是模型预测的代理。

另一个误解是把多中心数量当作越多越好，论文只验证了 2 级划分，更多级数待验证。下一步最值得补的验证是增强样本的实际 MOS 重测与误标分析，以及多种子方差与跨骨干稳定性。若这两项成立，再考虑将质量级数、阈值与权重做系统搜索，并测量推理延迟与阈值稳定性，之后才能判断它是否适合作为线上对策的默认结构。

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。
- 评分规则：type-aware-v1
- 评分模型：muse-spark-1.3-contributor
- 评分请求协议：openai_responses

---

[← 返回 interspeech-2026 论文汇总](/posts/conference-interspeech-2026/)
