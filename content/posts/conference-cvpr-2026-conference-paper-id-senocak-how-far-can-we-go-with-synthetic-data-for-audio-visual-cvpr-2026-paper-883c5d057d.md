---
title: "How Far Can We Go With Synthetic Data for Audio-Visual Sound Source Localization?"
date: 2026-09-13
draft: false
description: "该文用文本到图像与文本到音频模型构造 VGGSound 合成克隆并固定 ACL-SSL 做对比学习，验证同规模替代、合成图像配真实音频修正与 2 倍 3 倍混合扩展三类用法，最强混合配方相对纯真实基线提升约 8.62 cIoU、5.58 mIoU 与 12.16 IIoU，代价是合成音频弱于真实音频且纯合成需到 3 倍才稳定超越。"
tags: ["数据集", "数据增强", "音视频", "声源定位"]
categories: ["cvpr-2026 论文"]
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_paper_id: "conference:cvpr:2026:conference-paper-id:Senocak_How_Far_Can_We_Go_With_Synthetic_Data_for_Audio-Visual_CVPR_2026_paper"
paper_digest_source_kind: conference
paper_digest_conference_id: "cvpr-2026"
paper_digest_conference_record_url: "https://openaccess.thecvf.com/content/CVPR2026/html/Senocak_How_Far_Can_We_Go_With_Synthetic_Data_for_Audio-Visual_CVPR_2026_paper.html"
paper_digest_conference_pdf_url: "https://openaccess.thecvf.com/content/CVPR2026/papers/Senocak_How_Far_Can_We_Go_With_Synthetic_Data_for_Audio-Visual_CVPR_2026_paper.pdf"
paper_digest_api_reader_contract: "beginner-researcher-v3"
paper_digest_api_reader_article_sha256: "90504e29dbabf1765ceee79f4368cef0f50e36878594a19a136058d3b28a2ed1"
paper_digest_api_reader_plan_sha256: "bbd8b81e3679512d1a864b27459022de43bba365a02b0a8859a941f62a0a5c32"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings-v4"
paper_digest_api_reader_source_bindings_sha256: "d896e2c26a57c303dc5e8533def1e72d4dcbbb88cd733060207657afc4b3a458"
paper_digest_api_reader_source_table_count: 2
paper_digest_api_reader_source_formula_count: 0
paper_digest_api_reader_structured_artifacts_sha256: "18e32cf39b174351002a25eef5eb4da384720e7b1afd556fc0e2065f625401cf"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity-v1"
paper_digest_api_reader_author_identity_sha256: "52eda1283fa6242ae5d9703435ffb232a8acfe0ede538eff15e263eddf6ef8d6"
paper_digest_api_reader_author_count: 4
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity-v1"
paper_digest_api_reader_resource_identity_sha256: "1903324c96fecd968a0f21924dae9e65b8e34e9b6bb79f38489499f827dd201e"
paper_digest_api_reader_resource_count: 0
paper_digest_api_reader_decision_projection: "api-reader-decision-projection-v2"
paper_digest_scoring_contract: "api-scoring-audit-v2"
paper_digest_taxonomy_contract: "paper-taxonomy-flat-tags-compat-v1"
paper_digest_taxonomy_selection_contract: "paper-taxonomy-selection-v1"
paper_digest_taxonomy_registry_version: "paper-taxonomy-v1"
paper_digest_taxonomy_registry_sha256: "15c82a567ce5a55dc1175684ed08b64c158558639d9c8fb822c9587ec32a8778"
paper_digest_taxonomy_concepts: [{"facet":"artifact","id":"artifact.dataset","label":"数据集"},{"facet":"method","id":"method.augmentation","label":"数据增强"},{"facet":"signal","id":"signal.audiovisual","label":"音视频"},{"facet":"task","id":"task.localization","label":"声源定位"}]
paper_digest_primary_task: "声源定位"
paper_digest_primary_method: "数据增强"
paper_digest_score: 7.0
paper_digest_rank_bucket: "前50%"
paper_digest_document_type: "方法研究"
paper_digest_conference_structure: replayable-pdf-layout-v1
---

# 📄 合成数据能替代、修正再扩展声源定位训练吗

> 英文题目：*How Far Can We Go With Synthetic Data for Audio-Visual Sound Source Localization?*

> 会议身份：`conference:cvpr:2026:conference-paper-id:Senocak_How_Far_Can_We_Go_With_Synthetic_Data_for_Audio-Visual_CVPR_2026_paper`


> ✅ 来源为官方会议 PDF；表格与 Figure 按原文证据绑定。PDF 公式以原页区域图片展示，未冒称作者原始 TeX。

> 会议来源：[官方记录](https://openaccess.thecvf.com/content/CVPR2026/html/Senocak_How_Far_Can_We_Go_With_Synthetic_Data_for_Audio-Visual_CVPR_2026_paper.html) · [官方 PDF](https://openaccess.thecvf.com/content/CVPR2026/papers/Senocak_How_Far_Can_We_Go_With_Synthetic_Data_for_Audio-Visual_CVPR_2026_paper.pdf)

标签：#数据集 #数据增强 #音视频 #声源定位

评分：**7.0/10** | 创新 1.5/2 | 技术严谨 1.2/1.5 | 实验充分 1.2/1.5 | 清晰度 0.7/1 | 影响力 1.0/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 1.1/1.5

排名：前50% | 文档类型：方法研究

## 👥 作者与机构

- Arda Senocak：机构信息未能从会议 PDF 纯文本可靠映射
- Sooyoung Park：机构信息未能从会议 PDF 纯文本可靠映射
- Tae-Hyun Oh：机构信息未能从会议 PDF 纯文本可靠映射
- Joon Son Chung：机构信息未能从会议 PDF 纯文本可靠映射

## 📌 核心摘要

声源定位需以图像与音频对为输入，输出图像中正在发声的区域，实际难点在于真实训练视频多取中间帧导致音视语义错位且数据规模长期受限。先为每个VGGSound类别构建音频与视觉分离的概念词典，以类名为输入负责扩展多样化描述词，输出概念词集合并作为采样输入进入提示生成。再用大语言模型将采样概念转写为图像与音频描述提示，以概念词为输入负责生成可供生成的描述提示，输出提示文本并直接送入合成模型。最后将提示分别送入文本到图像与文本到音频扩散模型，以提示为输入负责合成克隆图像与音频，输出合成集单独或与真实样本混合用于训练对比式ACL-SSL定位模型。相对模型中心改进，该路线以数据中心视角修正错位样本并实现规模倍增，合成图像配真实音频与混合训练成为关键机制差异。在单源定位评测任务下，(SynI,RealA)变体的cIoU指标为55.13，高于Original基线的cIoU指标48.03。该结论适用边界受限于VGGSound类别封闭集、单一ACL-SSL基线与有限倍增规模，开放世界类别与更强生成器下的外推尚未验证，原文未披露训练、推理或部署成本。

## 🔗 开源与复现资源

本次未形成可展示的已核验资源记录，开放状态尚未核实。
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 输入是什么，目标是什么，本文要回答什么

本文的输入是论文正文与本次收到的官方原图像素，目标是为刚进入语音音乐音频领域的研究生写出可核对、能复述方法的技术解读。必须保留的信息包括任务定义、数据构造 4 步、训练配置、评估协议与关键增量数字，输出是结构化中文解读而非营销判断。

声音源定位的白话含义是给定一张图和一段同时录制的声音，模型要在图上指出声音是从哪个物体或区域发出的，英文为 sound source localization，缩写为 SSL。初学者容易误以为只要音频分类正确就能定位，但定位要求空间对应，即音频特征必须能点亮图像中正确的像素集合。

论文要回答的核心问题是合成数据能走多远，具体拆为 3 个可操作问题：没有真实数据时全合成数据能否训练出可用模型；同规模下用合成图替换真实图能否修正错位；扩大到 2 倍与 3 倍时混合真实与合成能否持续提升。作者把 VGGSound 作为训练源，把 VGG-SS、IS4、VPO 系列与 AVSBench 系列作为评测端。

评测覆盖单声源定位、音频视觉分割与交互式定位 3 类任务，全文的学习依赖是先理解错位瓶颈，再理解合成管线如何针对该瓶颈生成数据，最后理解训练与评估条件如何保证比较公平。本文不声称代码与数据当前可用，因为本次未发现完成安全验证的资源绑定，只能按原文引用的仓库地址转述。

### 已有路线在解决什么，本文为何转向数据

已有声源定位路线大多是模型中心思路。早期工作用跨模态注意力与对比学习做音频视觉对齐，后续加入假负例感知、免负例预测、正则化、物体提议与运动先验，以及引入 CLIP 先验的 ACL-SSL。另一条线是改进真实数据利用，例如样本挖掘、几何等变学习与多正例对比学习。

这些方法共同假设训练对本身基本正确，主要改进编码器或目标函数。分割方向出现了音频视觉分割任务与专用模型，交互式定位则要求同一图像配不同声音时切换定位区域，半合成评测集只用于测试而非训练。

本文的对照点是监督来源与运行阶段相同但数据来源不同：同样做自监督对比学习，基线用真实 VGGSound 图像音频对，本文变体用合成或混合对。作者指出已有模型训练量不超过 144K 样本，可扩展性未被探索，且真实训练图多取自视频中间帧而不考虑语义相关性。

这种取帧方式容易出现背景噪声、画外音或静默物体导致的错误关联。因此本文转向以数据为中心，做法不是改模型结构，而是保持 ACL-SSL 结构不变，只改变训练数据的生成与配对方式，再在多个任务上检验泛化。教学例子：如同样的灶具换不同食材做菜，本文固定菜谱与火候，只换食材来源，以此分离数据效应。

### 真实中间帧错位为何是瓶颈

真实训练对的构造方式是取视频中间 1 帧作为图像，配整段音频。这种做法操作简单但不保证该帧包含发声物体，可能出现片头文字、空镜头、运动模糊、遮挡或只拍到环境而声音仍在继续的情况。此时对比学习会把声音与错误视觉内容拉近，形成语义错位。

论文用图 2 直观展示该问题，上排是真实中间帧，下排是同语义合成图，中间用波形与小图标固定声音类别，读者可直接对比视觉侧差异。该导读覆盖了上下两排六列的对应关系，适合先看错位再看修正效果。

> **看图路径：** 1. 先看上排真实中间帧是否有文字画面、空镜头、模糊或遮挡；2. 再看下排同列合成图是否把发声主体放在画面中心且清晰可见；3. 对照中间波形加小图标，确认声音类别不变而只有视觉侧变化

[![原论文 Figure 2：Mid-frames in real data vs. synthetic images.](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/f631f683e3db/figure-2.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/f631f683e3db/figure-2.png)

*论文图 2。原论文 Figure 2：“Mid-frames in real data vs. synthetic images. Mid- frame selection causes imperfections, misaligning audio and im- ages, while synthetic images enhance semantic consistency.”。*

从像素可见，上排出现纯文字画面、倾斜的过山车支架、灰蒙天空、远处笼中动物、模糊马桶与公交车局部等，发声主体不完整或不突出；下排对应生成了警车、过山车人群、闪电夜空、树上猴子、清晰马桶与隧道前救护车，主体居中且与声音类别一致。这支持作者的判断，即合成图像能增强语义一致性。

但这只是定性示例，不能证明所有合成图都更好，也不能证明合成音频同样干净，后文实验显示合成音频反而较弱。因此瓶颈的准确表述是视觉侧错位更突出，修正视觉侧收益更大，而非所有合成数据天然优质。

### 四步管线如何从类别名走到定位模型

管线起点是 VGGSound 类别名，终点是可用于定位的双编码器模型。第一步构造概念词典，第二步生成提示词，第三步调用文本到图像与文本到音频模型生成数据，第 4 步用生成数据训练 ACL-SSL 风格的声源定位模型。

沿一个样本走完全程：假设类别为狗，先从该类的视觉词典与音频词典中各抽一个概念，例如视觉抽到 playful puppy，音频抽到 dog whimpering；视觉概念送入大语言模型得到不超过 15 词的场景化 caption，再送入图像生成器得到一张小狗图像，音频概念直接送入音频生成器得到一段狗叫。两者组成一个训练对，图像进 CLIP 视觉编码器得到空间特征，音频经 BEATs 再经 CLIP 文本编码器得到音频驱动嵌入，两者在对比学习中对齐并产生定位图。

下图从左到右展示了上述分流与汇合，左侧是人工标注与词典，中间是生成器，右侧是编码器与对比学习，箭头方向即数据流向，适合对照文字逐步跟踪。

> **看图路径：** 1. 沿左侧类别名到视觉与音频两本词典分支看数据分流；2. 观察语言模型只出现在视觉分支而音频分支直连音频生成器；3. 跟踪合成数据集到双编码器再到对比学习与定位图的闭环

[![原论文 Figure 3：The pipeline of our framework.](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/f631f683e3db/figure-3.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/f631f683e3db/figure-3.png)

*论文图 3。原论文 Figure 3：“The pipeline of our framework. From VGGSound categories, we construct concept dictionaries with more descriptive terms for each class.”。*

该图显示左侧 VGGSound 类别名经人工标注分成视觉与音频两本词典，视觉支路经过语言模型到视觉提示词再到图像生成器，音频支路直连音频生成器，两路汇成合成数据集，再进入视觉编码器与音频编码器做对比学习并输出定位图。关键设计是 2 模态不对称处理，原因是文本到图像模型能利用描述性长句，文本到音频模型对完整句子不敏感。

管线中唯一需要人工的是词典构造，10 名标注者每人负责 31 类，平均每类视觉 3.35 个概念、音频 7.80 个概念，生成后不做过滤。框架虽用 VGGSound 类别做克隆，但可适配其他类别范围。

### 词典、提示词与编码器各自承担什么计算

概念词典的白话含义是每个类别的扩写词表，英文为 concept dictionaries。视觉词典与音频词典分开维护，因为对视觉有用的上下文例如夜晚对音频描述帮助不大。构造动作是人工为每类写更具体的短语，目的是增加生成多样性，而非清洗数据。

提示词生成的白话含义是把抽到的概念变成生成器可用的文本，视觉侧用大语言模型，音频侧直接用概念。原文给出的视觉提示模板要求写一个包含并可视化描述该概念的图像 caption，可出现在不寻常地点，不超过 15 词，避免过于艺术化与情绪化，且随机开关不寻常地点子句以进一步增加多样性。

形式化为对数据集每个样本按其类别均匀抽取概念，视觉提示集合与音频提示集合分别记为两组抽样结果。合成阶段用扩散式文本到图像与文本到音频生成器，分别把两组提示变成图像集合与音频集合。

**声源定位 × 对比学习：** 声源定位负责在图像中标出发声物体或区域，对比学习负责把同源音频与图像表示拉近、把异源推远；二者搭配的原因是定位没有逐像素人工标注，只能靠音频与视觉是否同源提供监督，组合后音频驱动嵌入去加权图像特征图，从而得到定位热图。

**概念词典 × 提示词生成：** 概念词典负责把 VGGSound 每个类别展开为更具体的视觉与听觉短语，提示词生成负责把抽到的概念变成生成器可用的文本；搭配原因是类别名过于粗糙会导致样本重复，词典提供多样性种子，视觉侧再经大语言模型组织成场景化短句，而音频侧直接用短概念，从而适配两种生成器对提示的不同敏感度。

**CLIP 视觉编码器 × BEATs 音频编码器：** CLIP 视觉编码器负责提取图像空间特征图，BEATs 音频编码器负责把 10 秒音频先编码再经 CLIP 文本编码器得到音频驱动嵌入；搭配原因是两者都经过大规模预训练且 CLIP 图文空间可被借用为对齐桥梁，组合后用音频嵌入点亮视觉特征中的对应位置，并用对比目标端到端优化。

训练侧沿用 ACL-SSL，图像编码器为预训练 ViT-B/16 CLIP，音频先用 BEATs 提取再投影为类文本 token，经 CLIP 文本编码器得到音频驱动嵌入。该嵌入用于高亮发声区域，并通过自监督对比学习对齐音频与视觉特征，训练时不使用显式文本输入，只依赖音频视觉对应。

原文未给出对比损失的完整数学式与温度系数、负样本构造细节，因此本解读不补写公式，只保留上述数据流与监督来源。若把管线看成工厂，词典是原料库，语言模型是包装机，生成器是生产机，对比学习是质检员用配对关系验收。

### 训练如何配对、输入多大、跑多少轮

训练的真实计算过程是标准的对比表示学习，而非规则推理。模型结构固定为 ACL-SSL，图像侧为 CLIP ViT-B/16，音频侧为 BEATs 加 CLIP 文本编码器。输入是 10 秒、16 kHz 采样的音频与缩放到 352×352 像素的图像，优化 20 个轮次，批量大小为 16。

原文明确说严格遵循 ACL-SSL 的训练设置，但未报告哪些参数冻结、哪些更新，也未说明学习率与优化器细节，因此不能从模型名称推定冻结策略，只能指出这是缺项。配对策略是本文的核心变量：同规模 144K 下有纯真实、纯合成、合成图配真实音频、真实图配合成音频、合成图配混合音频、混合图配合成音频 6 种。

2 倍与 3 倍下再把 VGGSound 与 VGGSyn1、VGGSyn2、VGGSyn3 做不同并集与交叉配对。混合的含义是同一模态内同时使用真实与合成样本，例如 134K 合成加 10K 真实。

**合成图像 × 真实音频：** 合成图像负责提供语义更干净、对齐更好的视觉侧，真实音频负责提供更可靠的听觉监督；搭配原因是真实视频常用中间帧取图，容易出现发声主体缺失或遮挡，而合成图按概念生成能让主体出现在画面中，组合成合成图像配真实音频后，对比学习不再被错位视觉样本误导，因此同规模下提升最大。

检查点选择按 VGG-SS 峰值性能选取，每个基线训练 6 次并报告均值与标准差，以降低随机种子波动的影响。需要强调的是，训练轮次与批量固定后，数据规模扩大意味着总步数增加，因此 2 倍 3 倍的提升同时包含数据多样性与训练步数效应，原文未单独控制步数，这是解释扩展收益时的限制。

### 在哪些数据与指标上测，条件是否一致

评测从 3 个下游任务视角组织。单声源定位关注检测视角，1 次定位一个发声对象；音频视觉分割关注分割视角，要求逐像素掩膜；交互式定位要求同一图像配不同声音时定位区域随之切换。训练源是 VGGSound 144K 真实样本、生成的合成集或两者组合。

评估集包括 VGG-SS、IS4、VPO-SS、VPO-MS 与 AVSBench-S4 用于单源定位，AVSBench-S4 与 AVSBench-MS3 用于分割，IS4 与 VPO-MS 用于交互定位。指标按任务分组：单源用 cIoU、cIoU Adaptive、AUC 与 AUC Adaptive；分割用 mIoU、mIoU Adaptive、F-Score 与 F-Score Adaptive；交互用 IIoU、IIoU Adaptive、IAUC 与 IAUC Adaptive。

数值越大越好，自适应版本同样越大越好。聚合方式是对每个任务内多个数据集取平均后报告任务级性能，基线重复 6 次取均值与标准差。

**单声源定位 × 交互式定位：** 单声源定位负责对一个声音找出一个发声对象，交互式定位负责在同一张图像配不同声音时切换定位区域；搭配评估的原因是前者只检验能否找对，后者检验模型是否真正跟随声音变化而非只找显著物体，组合后可以区分偏向显著物体的模型和真正建立音频视觉对应的模型。

生成模型固定为 Mistral-7B-Instruct-v0.2 做 caption 生成、Stable Diffusion 3 Medium 做图像生成、Stable Audio Open 1.0 做音频生成，均用 HuggingFace 默认设置，目的是给出成本可控的基准配方，而非追求最强生成器。补充材料提到可用更强专用模型，但正文结论只在该三件套下成立。

### 同规模下合成能否替代，混合为何提升最大

同规模比较的问题是 144K 预算内换数据源能否保持或提升性能，公平条件是模型、轮次与选点准则相同，指标越大越好且按任务内多数据集平均报告。下图雷达图汇总了单源、分割与交互 3 个弧段，红色为纯真实 1 倍，紫色为纯合成 1 倍，橙色为合成图配真实音频，蓝色与绿色为混合扩展，包络越大表示对应数据集与指标上越好。

> **看图路径：** 1. 先确认外圈分为单源、分割与交互三个弧段及其数据集刻度；2. 比较红色纯真实与橙色合成图配真实音频多边形的包络大小；3. 再看蓝色与绿色混合扩展包络是否在交互方向外扩最明显

[![原论文 Figure 1：Sound Source Localization Performance with Syn- thetic Data.](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/f631f683e3db/figure-1.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/f631f683e3db/figure-1.png)

*论文图 1。原论文 Figure 1：“Sound Source Localization Performance with Syn- thetic Data.”。*

从像素可见，橙色包络在多数方向上明显大于红色，尤其交互任务方向外扩显著；蓝色与绿色混合包络进一步外扩，而紫色纯合成包络与红色接近但在分割方向略有起伏。这与正文数字一致：纯合成与纯真实总体相当，合成图配真实音频大幅领先，混合扩展达到最优。下表把原文直接报告的增量集中呈现，均为相对纯真实基线的任务平均差值，正值为提升，负值为下降。

| 比较条件与数据规模 | 单源定位 cIoU 与 cIoU Adaptive | 分割 mIoU 与 mIoU Adaptive | 交互 IIoU 与 IIoU Adaptive | 关键控制与解释 |
| --- | --- | --- | --- | --- |
| 合成图配真实音频 1 倍相对纯真实 | +7.10 与 +4.94 | +4.61 与 +3.50 | +10.40 与 +10.91 | 同 144K 同模型，合成图修正视觉错位 |
| 合成图配混合音频 1 倍相对纯真实 | +4.20 与 +2.53 | +2.50 与 +1.87 | +6.55 与 +6.90 | 134K 合成加 10K 真实，少量真实缓解域差距 |
| 最终混合 3 倍配方相对纯真实 | +8.62 与 +7.00 | +5.58 与 +4.22 | +12.16 与 +13.35 | 真实对加合成图配真实音频，规模与质量兼得 |
| 纯合成 3 倍相对纯真实 | +0.87 与 -0.54 | +1.72 与 +2.04 | +1.50 与 +1.77 | 全合成无真实，自适应单源项未胜出 |

表后解释主要收益与具体代价：合成图配真实音频在三任务上全面提升，交互任务提升超 10 个点，支持合成图修正视觉错位的解释；只加入 10K 真实音频或图像的混合变体也能超越纯真实，支持少量真实可缓解合成域差距。纯合成 3 倍虽在多数指标上超过纯真实，但在单源 cIoU Adaptive 上低 0.54，说明纯合成扩展尚未完全稳定。

未胜出项是真实图配合成音频，其性能为同规模最低，原因是真实图本身已含噪声再配较弱的合成音频会放大错位，这是否定盲目混合的重要反例。

### 哪一侧合成更重要，规模扩大到哪才够

消融要回答两个问题：图像与音频哪侧合成贡献更大；纯合成扩大到 2 倍与 3 倍是否单调提升。证据显示视觉侧更重要：合成图配真实音频远优于真实图配合成音频，且把真实图换成合成图而保持合成音频不变时性能回升。原因是文本到图像生成更成熟、语义对齐更准，而文本到音频生成相对较弱。

规模方面，纯合成 2 倍未带来提升，3 倍才超过 1 倍纯合成与纯真实，说明合成数据需要足够量才能覆盖分布。混合扩展则更稳定：合成图配真实音频从 1 倍到 2 倍再到 3 倍持续提升，混合真实与合成图像也被假设有助于域泛化。最终配方是把真实 VGGSound 对与合成图配真实音频对联合训练，2 倍已接近最优，3 倍达到全文最高。

下图按行组织单源与分割任务，按列比较 Original 与 3 倍变体 A 全合成、B 合成图配真实音频、C 最终混合，红色为真值框或掩膜，暖色为高激活，适合观察热图集中程度与小目标检出。

> **看图路径：** 1. 按行区分上两行为单源定位、下两行为分割任务；2. 逐列比较 Original 与 A 全合成、B 合成图配真实音频、C 混合扩展的热图集中程度；3. 重点观察小目标行中红色真值框内外的误激活是否减少

[![原论文 Figure 7：Qualitative results across various datasets, comparing 3× scale variants with the Original.](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/f631f683e3db/figure-7.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/f631f683e3db/figure-7.png)

*论文图 7。原论文 Figure 7：“Qualitative results across various datasets, comparing 3× scale variants with the Original.”。*

该定性图显示 B 与 C 的热图更集中，能检出 VPO 中小滑板与 AVS-MS3 中小枪等小目标，在 Original 无激活处给出准确预测；A 总体与 Original 相近但在分割的吉他与鸟等行更完整。这与数值趋势一致，但定性图不能替代定量表，只能作为机制示意。

下表整理可运行策略在不同规模下的任务平均表现，便于对照扩展是否单调以及何时停滞，表中规模以 144K 为 1 倍，指标越大越好。

| 训练策略与规模控制 | 单源 cIoU 与 VGG-SS 行为 | 分割 mIoU 与 AVS 行为 | 交互 IIoU 与 IS4 行为 | 成本与未胜出边界 |
| --- | --- | --- | --- | --- |
| 纯合成 1 倍同规模替代 | 与纯真实相当 | 与纯真实相当 | 与纯真实相当 | 无真实可用时的保底选择 |
| 纯合成 2 倍全合成扩展 | 未提升停滞 | 未提升停滞 | 未提升停滞 | 量未够，分布覆盖不足 |
| 纯合成 3 倍全合成扩展 | +0.87 但自适应 -0.54 | +1.72 与 +2.04 | +1.50 与 +1.77 | 需 3 倍才小幅超越，个别项仍输 |
| 合成图配真实音频 1 到 3 倍 | 持续提升至最优 | 持续提升至最优 | 持续提升超 10 点 | 需保留真实音频，生成加训练成本上升 |
| 真实图配合成音频 1 倍 | 三任务垫底 | 三任务垫底 | 三任务垫底 | 音频短板加视觉噪声叠加 |

表后收束判断是合成并非无条件增益，复现时应优先验证合成图配真实音频这一个分支。失败条件同样重要：真实图配合成音频在各任务垫底，纯合成 2 倍停滞，都说明必须同时看规模、配对与任务类型，不能把总体趋势推广到每组都成立。

### 还有哪些边界未被验证

首先是生成器选择边界，结论只在 Mistral、Stable Diffusion 3 Medium 与 Stable Audio Open 1.0 默认设置下得到，换更强或专用生成器可能改变音频侧弱于图像侧的结论，但原文未在正文系统比较。

其次是规模边界，受计算限制最大只到 3 倍约 432K 量级，更大规模是否继续提升待验证。第三是类别边界，合成克隆仍基于 VGGSound 类别分布，未验证开放世界新类别的扩展能力，概念词典自动化与开放类别生成被列为未来工作。

第四是评估边界，检查点按 VGG-SS 峰值选取，可能偏向单源任务，虽然多任务平均有所缓解，但选择准则本身会引入偏差。第五是成本边界，原文未报告生成耗时、训练时长、推理延迟与显存占用，不能从性能提升推定效率改善。

最后是资源可用性边界，本次未获得完成安全验证的代码数据资源状态，不得声称已公开可运行，复现需按原文仓库地址自行确认可达性。

### 要复现应先做什么，需要哪些超参数

复现先做数据管线而非调模型。第一步按 VGGSound 类别构造视觉与音频两本概念词典，目标是每类数个视觉短语与数个音频短语；第二步对每个训练样本按类别均匀抽概念，视觉概念经大语言模型生成不超过 15 词的 caption 并随机开关不寻常地点子句，音频概念直接作为提示。

第三步用默认设置的图像与音频生成器各生成与 VGGSound 等量的样本，不做过滤，得到 VGGSyn1，如需扩展则重复生成 VGGSyn2 与 VGGSyn3；第 4 步按配对策略组织训练对，优先复现合成图配真实音频与最终混合配方。

训练侧固定图像 352×352、音频 10 秒 16 kHz、20 轮、批量 16，沿用 ACL-SSL 设置，每个条件重复 6 次并按 VGG-SS 峰值选点，再在 VGG-SS、IS4、VPO-SS、VPO-MS、AVSBench-S4、AVSBench-MS3 上按任务分组评估并取任务内平均。

### 何时值得尝试合成，收束判断是什么

当训练视频存在中间帧错位、发声物体常缺失或被遮挡，且真实采集清洗成本过高时，值得尝试本文配方。优先尝试的是合成图配真实音频：保留真实音频的可靠性，用合成图修正视觉侧，1 倍即可获得大幅提升；若有更多算力，再把真实对与合成图配真实音频对联合扩展到 2 倍或 3 倍，以获得全文最优。

若只能全合成且无任何真实可用，纯合成可作为替代，但需做到 3 倍量级才稳定持平或小幅超越纯真实，且要接受个别自适应指标可能略低。应避免的是真实图配合成音频的盲目混合，因其在三任务上均为最低。

总体判断是合成数据能替代、能修正、能扩展，但作用不对称：图像侧修正是主要收益，音频侧合成是当前短板，规模与混合策略决定最终上限。未来值得补的验证是自动化词典、开放类别与更大规模，以及补报生成与训练成本与延迟，使结论从精度有效走向可部署有效。

## 📐 原文公式与排版

以下展示论文原页中的数学表达区域，保留原始上下标、分式和符号排版。区域序号仅用于本文导航，不是论文公式编号。

另有 3 个候选区域因边界不明确或图片数量、尺寸限制未展开；请[查看完整论文](https://openaccess.thecvf.com/content/CVPR2026/papers/Senocak_How_Far_Can_We_Go_With_Synthetic_Data_for_Audio-Visual_CVPR_2026_paper.pdf)中的原始排版。

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。
- 评分规则：type-aware-v1
- 评分模型：muse-spark-1.3-contributor
- 评分请求协议：openai_responses

---

[← 返回 cvpr-2026 论文汇总](/posts/conference-cvpr-2026/)
