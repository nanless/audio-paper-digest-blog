---
title: "SOUPLE: Enhancing Audio-Visual Localization and Segmentation with Learnable Prompt Contexts"
date: 2026-09-13
draft: false
description: "针对 CLIP 固定提示 a photo of a 与音频嵌入 token 语义脱节的问题，SOUPLE 用图像特征经 Meta-net 生成的可学习上下文替代固定词，在 VGGSound-144K 训练下提升 VGG-SS 与 SoundNet-Flickr 定位与 AVSBench 单源分割，但在无类别监督的多源 MS3 上出现过分割代价。"
tags: ["对比学习", "提示学习", "音视频", "声源定位"]
categories: ["cvpr-2026 论文"]
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_paper_id: "conference:cvpr:2026:conference-paper-id:Nguyen_SOUPLE_Enhancing_Audio-Visual_Localization_and_Segmentation_with_Learnable_Prompt_Contexts_CVPR_2026_paper"
paper_digest_source_kind: conference
paper_digest_conference_id: "cvpr-2026"
paper_digest_conference_record_url: "https://openaccess.thecvf.com/content/CVPR2026/html/Nguyen_SOUPLE_Enhancing_Audio-Visual_Localization_and_Segmentation_with_Learnable_Prompt_Contexts_CVPR_2026_paper.html"
paper_digest_conference_pdf_url: "https://openaccess.thecvf.com/content/CVPR2026/papers/Nguyen_SOUPLE_Enhancing_Audio-Visual_Localization_and_Segmentation_with_Learnable_Prompt_Contexts_CVPR_2026_paper.pdf"
paper_digest_api_reader_contract: "beginner-researcher-v3"
paper_digest_api_reader_article_sha256: "b87c5a9ab11d45beed48d7bbe55993543b3743407bfb85be98255033d7cd89b4"
paper_digest_api_reader_plan_sha256: "262fa2dc8e0d6a070abdc44a68ce49b68719458fcb5f4013b9d2239bc4c5b218"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings-v4"
paper_digest_api_reader_source_bindings_sha256: "e5efb6748fe8173728f6d5927a55cf55629d4b69abfebbc2bfcbdec5bc0b2b45"
paper_digest_api_reader_source_table_count: 3
paper_digest_api_reader_source_formula_count: 0
paper_digest_api_reader_structured_artifacts_sha256: "5ea471a2951025c107fa8f360deb27d4b90217068d7c0d679294a0322ff3d855"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity-v1"
paper_digest_api_reader_author_identity_sha256: "25709b086b8625b281a0b7d339920d59b26f40e4f3b63bbc6b3c3449adeb7144"
paper_digest_api_reader_author_count: 2
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity-v1"
paper_digest_api_reader_resource_identity_sha256: "2fe2e08e5b49be0871a9c406ca99f7091bb2e1169e94e6e94142edbb58ab7482"
paper_digest_api_reader_resource_count: 0
paper_digest_api_reader_decision_projection: "api-reader-decision-projection-v2"
paper_digest_scoring_contract: "api-scoring-audit-v2"
paper_digest_taxonomy_contract: "paper-taxonomy-flat-tags-compat-v1"
paper_digest_taxonomy_selection_contract: "paper-taxonomy-selection-v1"
paper_digest_taxonomy_registry_version: "paper-taxonomy-v1"
paper_digest_taxonomy_registry_sha256: "15c82a567ce5a55dc1175684ed08b64c158558639d9c8fb822c9587ec32a8778"
paper_digest_taxonomy_concepts: [{"facet":"method","id":"method.contrastive","label":"对比学习"},{"facet":"method","id":"method.prompt-learning","label":"提示学习"},{"facet":"signal","id":"signal.audiovisual","label":"音视频"},{"facet":"task","id":"task.localization","label":"声源定位"}]
paper_digest_primary_task: "声源定位"
paper_digest_primary_method: "提示学习"
paper_digest_score: 5.7
paper_digest_rank_bucket: "前50%"
paper_digest_document_type: "方法研究"
paper_digest_conference_structure: replayable-pdf-layout-v1
---

# 📄 固定提示接不住声音：SOUPLE 用图像条件化学上下文重建音频视觉对应

> 英文题目：*SOUPLE: Enhancing Audio-Visual Localization and Segmentation with Learnable Prompt Contexts*

> 会议身份：`conference:cvpr:2026:conference-paper-id:Nguyen_SOUPLE_Enhancing_Audio-Visual_Localization_and_Segmentation_with_Learnable_Prompt_Contexts_CVPR_2026_paper`


> ✅ 来源为官方会议 PDF；表格与 Figure 按原文证据绑定。PDF 公式以原页区域图片展示，未冒称作者原始 TeX。

> 会议来源：[官方记录](https://openaccess.thecvf.com/content/CVPR2026/html/Nguyen_SOUPLE_Enhancing_Audio-Visual_Localization_and_Segmentation_with_Learnable_Prompt_Contexts_CVPR_2026_paper.html) · [官方 PDF](https://openaccess.thecvf.com/content/CVPR2026/papers/Nguyen_SOUPLE_Enhancing_Audio-Visual_Localization_and_Segmentation_with_Learnable_Prompt_Contexts_CVPR_2026_paper.pdf)

标签：#对比学习 #提示学习 #音视频 #声源定位

评分：**5.7/10** | 创新 1.2/2 | 技术严谨 1.0/1.5 | 实验充分 1.0/1.5 | 清晰度 0.7/1 | 影响力 0.8/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 0.7/1.5

排名：前50% | 文档类型：方法研究

## 👥 作者与机构

- Khanh Binh Nguyen：机构信息未能从会议 PDF 纯文本可靠映射
- Chae Jung Park：机构信息未能从会议 PDF 纯文本可靠映射

## 📌 核心摘要

音频视觉声源定位输入为视频帧与对应音频，输出为发声区域的定位热图或分割掩膜，难点是在无文本监督下音频嵌入与视觉语义难以对齐，且对未见类别泛化弱。SOUPLE以冻结的对比语言图像预训练（Contrastive Language-Image Pre-training，CLIP）为基础，先由音频编码器与音频分词器将音频映射为音频嵌入词元，再由元网络从图像特征生成实例条件上下文词元，随后将两类词元拼接送入文本编码器得到音频文本特征，最后由掩膜解码器融合图像特征输出分割掩膜，并经视觉音频文本对齐模块做对比学习。与ACL-SSL直接使用固定提示词连接音频词元不同，该设计利用因果注意力让音频词元先吸收视觉条件上下文，从而增强语义桥接。在VGG-SS上相对ACL-SSL的一致交并比（consensus Intersection over Union，cIoU）从49.46提升至53.21，曲线下面积（Area Under Curve，AUC）从46.32提升至48.15。该结论在单声源与开集划分上成立，但在多声源AVSBench-MS3上从41.08降至38.96，且未验证复杂交互场景的外推能力。原文未披露训练、推理或部署成本。

## 🔗 开源与复现资源

本次未形成可展示的已核验资源记录，开放状态尚未核实。
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 输入是什么，输出是什么，为什么值得做？

本文的输入是一段音频加 1 帧图像，输出是图像上正在发声区域的位置或像素掩码。训练时只给音频视觉是否同属一个视频这种天然对应，不给类别标签和框标注，测试时要求在新视频、新物体上也能指出声音从哪里来。研究生首先要建立的动作是把任务拆成两步核对：第一步是表示对齐，即让声音的向量与画面的向量在同一空间可比；第二步是空间 grounding，即把可比性落到每个像素或每个框上。

这类任务的难点在于声音本身没有空间坐标，画面中同时存在多个看起来都可能发声的物体。举例来说，画面中有小提琴手和观众，音频是琴声，模型必须只点亮琴与手的接触区域，而不是所有人脸，这是一个教学例子，不代表论文的数值结论。传统做法用音频视觉对比学习拉近同视频对、推远不同视频对，再用注意力图当定位结果。近期路线是借用大规模图像文本模型的多模态对齐能力，但文本模型原本不认识声音，如何把声音塞进文本编码器而不破坏其对齐结构，就成为本文的起点。

必须保留的信息是：训练数据来自 VGGSound，评测覆盖定位框与分割掩码两类协议，且全程不使用文本输入。输出的解读要始终回到同一条件：同一训练量、同一无后处理设置下比较，否则数字不可比。

### 已有路线在相同输入输出下各解决了什么？

第一条路线是跨模态注意力加对比学习的声源定位。代表操作包括从背景区挖难负样本、用伪标签做迭代对比、用几何增强保持变换等变性、用语义相似样本做难正样本、用动量编码器与负 margin 压制噪声对应。这条路线输入输出与本文相同，监督同样是音频视觉对应，但它不借助大规模文本模型，泛化更多依赖数据增强与采样策略。

第二条路线是把 CLIP 扩展到音频视觉学习。WAV2CLIP 与 AudioCLIP 把音频特征与文本视觉特征同步到统一空间，CLIPSep 等工作做音频视觉分离或事件定位。本文直接相关的前作是 ACL-SSL，它冻结 CLIP 图像与文本编码器，只学一个把音频变成兼容 token 的投影器，再用固定提示送入文本编码器得到音频驱动嵌入。与本文的对照点很具体：ACL-SSL 用固定词，其余管线被本文继承。

第三条路线是提示学习。CoOp 把提示定义为连续可微向量并用下游交叉熵优化，CoCoOp 进一步让提示以图像特征为条件以提升未见类泛化，MaPLe 与 PromptSRC 则扩展到多模态与知识保持。另一相关工作 GAVS 也用提示学习，但它是直接条件化分割解码器，而本文是条件化 CLIP 文本侧的软提示，两者提示插入位置与管线性质不同，只能做跨范式参考，不能当同条件基线。

### 固定提示为什么在声音查询下失效？

ACL-SSL 的做法是把分类 token 替换为音频嵌入 token，得到序列 a photo of a 加上音频 token。论文指出两个具体问题：第一，音频 token 本身没有可与视觉信息融合的语义，单独替换分类 token 难以捕捉语义线索；第二，固定词 a photo of a 与音频 token 之间没有有意义的连接，短语的字面语义不一定成立。沿一个样本走一遍更直观：输入是拉小提琴的画面与琴声，图像编码器给出画面特征，音频编码器给出声音特征并投影为一个向量，若直接套用拍照短语，文本编码器读到的是一句与琴声无关的模板加一个孤立的声音符号，解码器拿到的音频文本特征就缺乏实例相关的铺垫。

因此问题被定义为如何为声音查询生成实例条件的上下文，而不是如何设计更好的英文模板。目标是在不引入类别标签、不引入文本输入的前提下，让上下文随图像变化，从而在未见物体与新数据集上保持对应关系。这个定义决定了后文所有组件必须回答同一个核对点：上下文是否来自当前图像，梯度是否只更新提示相关模块。

### SOUPLE 让一个样本走完哪条主路径？

SOUPLE 的全称是声音感知的提示学习，整体继承 ACL-SSL 并把固定提示替换为可学习上下文。主路径可以按 1 次前向复述：视觉输入经冻结的 CLIP 图像编码器得到图像特征，音频信号经音频编码器得到音频特征再经音频投影器得到音频嵌入 token；同时图像特征经 Meta-net 得到多个上下文 token；两类 token 拼接后送入冻结的 CLIP 文本编码器得到音频文本特征；最后图像特征与音频文本特征共同送入掩码解码器输出发声掩码。
下图是该管线的完整分叉结构，读图时先走主箭头再看冻结标记。

> **看图路径：** 1. 先从左下音频波形经音频编码器到 MLP 与注意力池化的箭头走一遍；2. 再看左上图像经图像编码器分叉为直送掩码解码器与经 Meta-net 生成上下文的两路；3. 核对文本编码器下方冻结雪花标记与最终掩码输出位置；4. 观察音频 token 与上下文 token 在送入文本编码器前的拼接顺序

[![原论文 Figure 3：Pipeline of our SOUPLE framework.](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/d7c77ae70716/figure-3.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/d7c77ae70716/figure-3.png)

*论文图 3。原论文 Figure 3：“Pipeline of our SOUPLE framework. SOUPLE takes an audio-visual pair as input, converting the audio signal into a CLIP- compatible token via the Audio Tokenizer and the image into…”。*

从像素可见，左下音频支路经过音频编码器、MLP 与注意力池化后向上汇入文本侧的 token 序列，左上图像支路一分为二，一路直达掩码解码器，另一路经 Meta-net 生成多个上下文 token，文本编码器与图像编码器均标有冻结符号，输出端为右侧带热区的掩码。该结构说明可学习部分集中在音频投影与 Meta-net 及解码器，CLIP 主干保持不动，这是后文冻结与更新划分的依据。

### 上下文与声音 token 如何拼接，掩码如何被监督？

组件层面先讲表示。图像编码器采用冻结的 ViT-B/16 CLIP，音频编码器采用 BEATs，接地器采用 CLIPSeg 的解码机制。Meta-net 是两层非线性瓶颈结构，即线性、激活、线性，隐层把输入维度压缩为十六分之一，输入是图像特征，输出是 M 个上下文向量。音频分词器是 MLP 加注意力池化，输入是音频特征，输出是一个与 CLIP 兼容的音频嵌入 token。最终送入文本编码器的序列是多个上下文 token 后接音频 token，论文的消融表明音频 token 放末尾最优。

**音频嵌入 token × 可学习上下文 token：** 音频嵌入 token 负责把音频信号翻译成 CLIP 文本编码器可读的查询向量，可学习上下文 token 负责把当前图像特征翻译成实例相关的语义铺垫，二者搭配的理由是固定英文提示与声音查询没有语义连接，组合意义是让文本编码器先读到视觉条件再读到声音查询，从而生成更贴合当前画面的音频文本特征。

**条件上下文优化 × Meta-net：** 条件上下文优化负责提出按图像生成提示的思想，Meta-net 负责落实该思想的两层非线性瓶颈映射，分工是前者定学习范式、后者做特征到提示的变换，搭配理由是同一套固定提示无法泛化到未见物体，组合意义是每个样本都得到一组专属上下文向量。

对齐模块负责在无标注下给出学习信号。解码器先给出 sounding 掩码，由此派生两个掩码：图像级掩码用于在像素层面前景化发声区、遮蔽背景，特征级掩码用于在空间视觉特征上加权。图像级视觉嵌入是将掩码乘原图再过图像编码器得到，特征级视觉嵌入是将掩码乘空间特征再池化得到，两者分别与音频文本特征算余弦相似度，再各自做双向对称 InfoNCE，得到图像级与特征级两项对比损失，另有一项面积正则约束掩码不要过大。

下图展示了该双路对齐的计算走向，重点看 2 次逐元素相乘的位置差异。

> **看图路径：** 1. 先确认左上角逐元素相乘符号连接原图与图像级掩码的路径；2. 再对比下方空间特征与特征级掩码相乘后经空间池化的另一路；3. 观察两路视觉嵌入分别与中间音频文本特征汇合成两项对齐损失

[![原论文 Figure 4：Visual-Audio-Text Alignment (VAT) module](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/d7c77ae70716/figure-4.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/d7c77ae70716/figure-4.png)

*论文图 4。原论文 Figure 4：“Visual-Audio-Text Alignment (VAT) module”。*

从像素可见，上路是原图与图像级掩码相乘后进冻结图像编码器得到向量，下路是图像特征与特征级掩码相乘后经空间池化得到向量，中间的音频文本特征同时指向上下两项对齐目标。这解释了为什么训练需要同时保留原图级与特征级两条梯度路径。

**掩码解码器 × 视觉音频文本对齐：** 掩码解码器负责把图像特征与音频文本特征融合成发声区域掩码，视觉音频文本对齐负责用该掩码反过来构造监督信号，分工是前者做前向预测、后者做自监督度量，搭配理由是无标注时只能用音频视觉是否对应来评价掩码好坏，组合意义是形成预测掩码再验证掩码的闭环。

**图像级对比损失 × 特征级对比损失：** 图像级对比损失负责在原图分辨率上拉近掩码前景与对应音频、推远 batch 内其他音频，特征级对比损失负责在空间视觉特征上强调高相关区域，分工是一粗一细，搭配理由是只做图像级容易漏掉局部对应、只做特征级容易脱离整体，组合意义是两路对称 InfoNCE 共同约束掩码既完整又聚焦。

### 哪些参数更新，损失由哪三项组成？

训练目标是三项加权和：图像级音频文本对比损失、特征级音频文本对比损失与面积正则损失，权重为 3 个超参数。图像级损失拉近正发声区与其对应音频、推远 batch 内负音频，特征级损失聚焦高相关区域，面积正则用正负对的掩码面积惩罚控制掩码只覆盖相关发声区。原文未给出 3 个权重的具体数值与温度系数的具体数值，这是复现时需要核对的缺项，只能按 ACL-SSL 的对应设置去原文代码或附录中找，不能从模型名推定。

参数冻结安排是明确报告的：图像编码器、音频编码器与文本编码器冻结，其余框架按总损失优化。也就是说梯度只流经 Meta-net、音频投影器与掩码解码器相关可学参数，CLIP 主干与 BEATs 主干不更新。训练构造是 10 秒、16 kHz 音频加中央帧并缩放到 352 乘 352，优化器为 Adam，学习率与权重衰减在实验条件节给出。推理时不需要类别标签，直接以前向得到掩码，再按评测协议转成框或像素分数。

需要区分的是，本文没有文本监督，监督来源完全是同一视频的音频视觉对应加 batch 内负样本，这是自监督而非无监督的随意聚类，重置时机是每个 batch 重新采样负对，不存在跨 epoch 的伪标签更新，这与迭代对比路线不同。

### 数据、划分、指标与公平条件是什么？

训练数据是 VGGSound 约 20 万视频中的 144K 子集，主定位评测在 VGG-SS 约 5000 样本与 SoundNet-Flickr 约 250 样本上进行，指标为 cIoU 与 AUC，数值越大越好。分割评测在 AVSBench 的单源与多源划分上进行，指标为 mIoU 与 F-Score，同样越大越好。开放集评测把 110 类用于训练、另 110 类用于测试，分别报告 Heard 与 Unheard。扩展评测在 Extended VGG-SS 与 Extended Flickr 上进行，加入不可听帧、不可见声源与错配对，要求错配时不应高亮，指标包括 AP、max-F1 与 LocAcc。

实现条件必须逐项保留：冻结 ViT-B/16 CLIP 图像编码器、BEATs 音频编码器、CLIPSeg 接地器，20 轮、batch 16、Adam、学习率 0.001、权重衰减 0.00001，提示学习新增可训练参数约 2.38M，不到总容量约 242M 的 1%。比较公平性上，本文强调不使用对象引导精修，所有带该后处理的基线需区分标记，训练量均为 144K。

**对象引导精修 × 零样本评测：** 对象引导精修负责用外部检测器对定位图做后处理提分，零样本评测负责在训练未见的数据集与类别上直接测试，分工是前者代表借助先验、后者代表考验泛化，搭配理由是去掉精修才能看清提示学习本身的贡献，组合意义是本文全部主结果均在无对象引导精修条件下报告零样本性能。

### 主结果在相同训练量下比出了什么？

比较问题是：在同为 VGGSound-144K 训练、无对象引导精修、无文本输入的条件下，可学习实例条件上下文是否优于固定提示与同期对比学习方法。指标方向是 cIoU 与 AUC 越高越好。下表只保留可直接运行的代表策略：直接前作 ACL-SSL、本文 20 轮版本与 50 轮版本，省略需要外部检测器后处理的变体，以免混放不同条件。

| 条件 | 指标 | ACL-SSL 可运行基线 | SOUPLE 20 轮 | SOUPLE 50 轮 |
| --- | --- | --- | --- | --- |
| VGG-SS | cIoU | 49.46 | 53.21 | 54.76 |
| VGG-SS | AUC | 46.32 | 48.15 | 49.40 |
| SoundNet-Flickr | cIoU | 80.80 | 84.80 | 83.60 |
| SoundNet-Flickr | AUC | 64.62 | 67.64 | 65.76 |

表后解释是：20 轮 SOUPLE 在 VGG-SS 上比 ACL-SSL 高约 3.75 个百分点 cIoU 与 1.83 个百分点 AUC，在 Flickr 上高 4.00 与 3.02 个百分点，支持实例条件提示加强了语义对应的判断。代价是 50 轮虽在 VGG-SS 继续提升到 54.76 与 49.40，但在 Flickr cIoU 回落到 83.60，说明更长训练并非在所有分布上单调获益。未胜出边界是多源分割，后文专门讨论。
下图从像素层面印证了上述收紧效果，红色为高响应。

> **看图路径：** 1. 逐列对比上一行 ACL-SSL 与下一行 Ours 在同一场景的热区范围；2. 观察人物、大象、多人与玩具车四列中红色高响应是否收紧到物体轮廓；3. 注意背景杂散响应是否在 Ours 行明显减弱

[![原论文 Figure 1：Comparison of attention masks produced by ACL-SSL and SOUPLE in representative cases.](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/d7c77ae70716/figure-1.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/d7c77ae70716/figure-1.png)

*论文图 1。原论文 Figure 1：“Comparison of attention masks produced by ACL-SSL and SOUPLE in representative cases. Compared with ACL-SSL, SOUPLE yields more refined localization of the sounding objects.”。*

从像素可见，四列场景中上一行 ACL-SSL 的热区弥散且背景混入较多黄绿色过渡，下一行 Ours 的红色高响应紧贴人物躯干、大象身体、多人轮廓与玩具车外形，背景蓝色占比明显扩大。这与 cIoU 提升是一致的，但它只是代表性样本，不能替代全集指标，是否每类都收紧需回到开放集表格核对。

### 上下文长度、位置与融合方式哪项真正起作用？

消融要回答的不是参数越多越好，而是哪个设计动作带来增益。第一个问题是上下文长度：在 VGG-SS 上 4、8、16 个 token 的比较显示 4 个最优，更多 token 反而下降，支持关键不在参数量而在条件化本身。第二个问题是音频 token 位置：放在序列首位明显最差，放在末尾最优，论文用 CLIP 文本变换器的因果注意力解释，即先读视觉条件再读声音查询能让查询聚合更丰富的图像条件。第 3 个问题是训练时长：40 轮与 50 轮继续提升，但为与 ACL-SSL 公平，主分析只用 20 轮。第四个问题是音视融合与多位置集成：将音频视觉特征相加后再送 Meta-net 或对 5 个位置取平均，均不如标准 SOUPLE，说明过早融合破坏了声音查询的独立作用。

开放集是泛化能力的关键反证，测试划分是否见过训练类别。下表保留 Heard 与 Unheard 的可运行对照。

| 测试划分 | 指标 | ACL-SSL 无精修基线 | SOUPLE 20 轮 | 训练条件 |
| --- | --- | --- | --- | --- |
| Heard 110 类 | cIoU | 48.44 | 54.76 | VGGSound 子集 |
| Heard 110 类 | AUC | 45.06 | 48.86 | VGGSound 子集 |
| Unheard 110 类 | cIoU | 41.98 | 48.40 | 未见类别 |
| Unheard 110 类 | AUC | 41.55 | 46.24 | 未见类别 |

表后解释是：Heard 提升约 6.32 个百分点 cIoU，未见类仍提升约 6.42 个百分点 cIoU，支持条件上下文对未见物体的泛化判断。但这不等于所有未见分布都成立，扩展集与多源集需另看。50 轮在开放集上 Heard 为 54.85 与 48.98，未见类为 48.40 与 46.24，提升趋平，说明轮数收益有限。

分割侧的单源与多源对照进一步划出适用边界，下表为 AVSBench 零样本结果。

| 数据集 | 指标 | ACL-SSL | SOUPLE 20 轮 | 训练轮数 |
| --- | --- | --- | --- | --- |
| S4 单源 | mIoU | 59.76 | 62.89 | 20 |
| S4 单源 | F-Score | 69.03 | 71.47 | 20 |
| MS3 多源 | mIoU | 41.08 | 38.96 | 20 |
| MS3 多源 | F-Score | 46.67 | 43.30 | 20 |

表后解释是：单源 S4 提升约 3.13 个百分点 mIoU，支持提示学习改善单目标分割；多源 MS3 下降约 2.12 个百分点 mIoU，这是一个明确的未胜出项，论文归因于无标签设置下模型会点亮多个语义合理的候选，而标注只覆盖其中之一，不能把该下降解读为单源能力的否定。

### 多源场景具体错在哪里？

限制集中在多物体共存的 MS3。当画面中有多个交互物体或重叠声源，SOUPLE 有时会同时高亮多个与音频语义一致的区域，而真值只标注其中一个，按像素指标就会被计为误检。论文明确这是无类别监督的文本无关、标签无关设置的固有代价，不是实现错误。另一个相关现象是扩展评测虽整体占优，但错配对要求完全不点亮，这对任何基于对应分数的方法都是更严的考验，阈值选择会影响 LocAcc 与 F1 的权衡。
下图展示了多源失败的典型形态，读图时以虚线框为基准。

> **看图路径：** 1. 先找到每张图中的白色虚线真值框位置；2. 再看红色高响应是否超出虚线框覆盖到邻近语义相关的人或物；3. 对比四例中多目标共存时模型同时点亮多个候选的现象

[![原论文 Figure 7：Failure cases visualization of SOUPLE on MS3.](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/d7c77ae70716/figure-7.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/d7c77ae70716/figure-7.png)

*论文图 7。原论文 Figure 7：“Failure cases visualization of SOUPLE on MS3.”。*

从像素可见，4 例中白色虚线框只圈住部分区域，而红色高响应同时覆盖框内外的婴儿、动物与人物上半身，尤其在多人同框时热区连片。这支持论文的解释：模型学到的是语义 plausibility 而非实例级声源归属，在缺乏说话人或发声时刻等细粒度监督时无法唯一确定目标。待验证的是若补充分离或时序线索能否缓解，该文未做此实验。

### 要复现先固定哪些动作与核对点？

复现的第一步是固定数据与冻结关系：用 VGGSound-144K 训练，中央帧 352 乘 352，10 秒 16 kHz 音频，冻结图像、音频、文本三编码器，只训练 Meta-net、音频投影与解码器侧。第二步是固定提示构造：上下文数为 4，随机初始化，音频 token 置于序列末尾，Meta-net 为线性激活线性且隐层压缩 16 倍。第三步是固定优化：Adam、学习率 0.001、权重衰减 0.00001、batch 16、20 轮为主报告，50 轮仅作时长消融。

核对点包括：是否关闭对象引导精修，是否未输入任何文本，评测是否按 VGG-SS、Flickr、AVSBench-S4/MS3、开放集与扩展集分别跑零样本。资源状态是正文开源声明的唯一依据，本次未发现来源绑定且完成验证的资源，不得声称代码模型数据已公开，复现应先按上述超参数与管线自行实现。常见误解是把更长训练当成免费提升，本文数据显示 Flickr 上 50 轮低于 20 轮，应以验证集选择轮数而非直接取最大轮数。

### 何时值得尝试这种提示改法？

当你的基线已是 CLIP 文本侧 grounding 且只能用音频视觉对应做自监督时，把固定模板换成图像条件的连续上下文是值得优先尝试的动作，因为它不增加外部检测器，不引入类别标签，且新增参数不到 1%。适用条件是单声源为主、新类较多的场景，开放集与单源分割的证据最强。不适用或需谨慎的是多声源共存且标注只给单一目标的场景，此时语义合理的过分割会被惩罚，需要额外的声源分离、时序或类别约束。

还需补的验证是三项权重的敏感性、温度系数与面积正则阈值的影响，以及在错配对上的 operating point 选择，这些在原文中未完整报告。总体判断是：本文报告显示提示条件化改善了声音查询与视觉上下文的衔接，支持单源泛化；在多源上的下降是方法假设与评测假设不一致的体现，可能但待验证的原因是缺乏实例级监督，而非定位能力本身退化。

## 📐 原文公式与排版

以下展示论文原页中的数学表达区域，保留原始上下标、分式和符号排版。区域序号仅用于本文导航，不是论文公式编号。

[![原文数学表达区域 1，PDF 第 3 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/7afd82c5b368/figure-1.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/7afd82c5b368/figure-1.png)

区域 1 · [查看论文原页](https://openaccess.thecvf.com/content/CVPR2026/papers/Nguyen_SOUPLE_Enhancing_Audio-Visual_Localization_and_Segmentation_with_Learnable_Prompt_Contexts_CVPR_2026_paper.pdf#page=3)

[![原文数学表达区域 2，PDF 第 3 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/7afd82c5b368/figure-2.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/7afd82c5b368/figure-2.png)

区域 2 · [查看论文原页](https://openaccess.thecvf.com/content/CVPR2026/papers/Nguyen_SOUPLE_Enhancing_Audio-Visual_Localization_and_Segmentation_with_Learnable_Prompt_Contexts_CVPR_2026_paper.pdf#page=3)

[![原文数学表达区域 3，PDF 第 3 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/7afd82c5b368/figure-3.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/7afd82c5b368/figure-3.png)

区域 3 · [查看论文原页](https://openaccess.thecvf.com/content/CVPR2026/papers/Nguyen_SOUPLE_Enhancing_Audio-Visual_Localization_and_Segmentation_with_Learnable_Prompt_Contexts_CVPR_2026_paper.pdf#page=3)

[![原文数学表达区域 4，PDF 第 4 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/7afd82c5b368/figure-4.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/7afd82c5b368/figure-4.png)

区域 4 · [查看论文原页](https://openaccess.thecvf.com/content/CVPR2026/papers/Nguyen_SOUPLE_Enhancing_Audio-Visual_Localization_and_Segmentation_with_Learnable_Prompt_Contexts_CVPR_2026_paper.pdf#page=4)

[![原文数学表达区域 5，PDF 第 4 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/7afd82c5b368/figure-5.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/7afd82c5b368/figure-5.png)

区域 5 · [查看论文原页](https://openaccess.thecvf.com/content/CVPR2026/papers/Nguyen_SOUPLE_Enhancing_Audio-Visual_Localization_and_Segmentation_with_Learnable_Prompt_Contexts_CVPR_2026_paper.pdf#page=4)

[![原文数学表达区域 6，PDF 第 4 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/7afd82c5b368/figure-6.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/7afd82c5b368/figure-6.png)

区域 6 · [查看论文原页](https://openaccess.thecvf.com/content/CVPR2026/papers/Nguyen_SOUPLE_Enhancing_Audio-Visual_Localization_and_Segmentation_with_Learnable_Prompt_Contexts_CVPR_2026_paper.pdf#page=4)

[![原文数学表达区域 7，PDF 第 4 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/7afd82c5b368/figure-7.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/7afd82c5b368/figure-7.png)

区域 7 · [查看论文原页](https://openaccess.thecvf.com/content/CVPR2026/papers/Nguyen_SOUPLE_Enhancing_Audio-Visual_Localization_and_Segmentation_with_Learnable_Prompt_Contexts_CVPR_2026_paper.pdf#page=4)

[![原文数学表达区域 8，PDF 第 7 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/7afd82c5b368/figure-8.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/7afd82c5b368/figure-8.png)

区域 8 · [查看论文原页](https://openaccess.thecvf.com/content/CVPR2026/papers/Nguyen_SOUPLE_Enhancing_Audio-Visual_Localization_and_Segmentation_with_Learnable_Prompt_Contexts_CVPR_2026_paper.pdf#page=7)

[![原文数学表达区域 9，PDF 第 7 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/7afd82c5b368/figure-9.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/7afd82c5b368/figure-9.png)

区域 9 · [查看论文原页](https://openaccess.thecvf.com/content/CVPR2026/papers/Nguyen_SOUPLE_Enhancing_Audio-Visual_Localization_and_Segmentation_with_Learnable_Prompt_Contexts_CVPR_2026_paper.pdf#page=7)

[![原文数学表达区域 10，PDF 第 7 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/7afd82c5b368/figure-10.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/7afd82c5b368/figure-10.png)

区域 10 · [查看论文原页](https://openaccess.thecvf.com/content/CVPR2026/papers/Nguyen_SOUPLE_Enhancing_Audio-Visual_Localization_and_Segmentation_with_Learnable_Prompt_Contexts_CVPR_2026_paper.pdf#page=7)

[![原文数学表达区域 11，PDF 第 7 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/7afd82c5b368/figure-11.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/7afd82c5b368/figure-11.png)

区域 11 · [查看论文原页](https://openaccess.thecvf.com/content/CVPR2026/papers/Nguyen_SOUPLE_Enhancing_Audio-Visual_Localization_and_Segmentation_with_Learnable_Prompt_Contexts_CVPR_2026_paper.pdf#page=7)

[![原文数学表达区域 12，PDF 第 7 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/7afd82c5b368/figure-12.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/7afd82c5b368/figure-12.png)

区域 12 · [查看论文原页](https://openaccess.thecvf.com/content/CVPR2026/papers/Nguyen_SOUPLE_Enhancing_Audio-Visual_Localization_and_Segmentation_with_Learnable_Prompt_Contexts_CVPR_2026_paper.pdf#page=7)

[![原文数学表达区域 13，PDF 第 7 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/7afd82c5b368/figure-13.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/7afd82c5b368/figure-13.png)

区域 13 · [查看论文原页](https://openaccess.thecvf.com/content/CVPR2026/papers/Nguyen_SOUPLE_Enhancing_Audio-Visual_Localization_and_Segmentation_with_Learnable_Prompt_Contexts_CVPR_2026_paper.pdf#page=7)

[![原文数学表达区域 14，PDF 第 7 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/7afd82c5b368/figure-14.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/7afd82c5b368/figure-14.png)

区域 14 · [查看论文原页](https://openaccess.thecvf.com/content/CVPR2026/papers/Nguyen_SOUPLE_Enhancing_Audio-Visual_Localization_and_Segmentation_with_Learnable_Prompt_Contexts_CVPR_2026_paper.pdf#page=7)

[![原文数学表达区域 15，PDF 第 7 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/7afd82c5b368/figure-15.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/7afd82c5b368/figure-15.png)

区域 15 · [查看论文原页](https://openaccess.thecvf.com/content/CVPR2026/papers/Nguyen_SOUPLE_Enhancing_Audio-Visual_Localization_and_Segmentation_with_Learnable_Prompt_Contexts_CVPR_2026_paper.pdf#page=7)

[![原文数学表达区域 16，PDF 第 7 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/7afd82c5b368/figure-16.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/7afd82c5b368/figure-16.png)

区域 16 · [查看论文原页](https://openaccess.thecvf.com/content/CVPR2026/papers/Nguyen_SOUPLE_Enhancing_Audio-Visual_Localization_and_Segmentation_with_Learnable_Prompt_Contexts_CVPR_2026_paper.pdf#page=7)

[![原文数学表达区域 17，PDF 第 7 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/7afd82c5b368/figure-17.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/7afd82c5b368/figure-17.png)

区域 17 · [查看论文原页](https://openaccess.thecvf.com/content/CVPR2026/papers/Nguyen_SOUPLE_Enhancing_Audio-Visual_Localization_and_Segmentation_with_Learnable_Prompt_Contexts_CVPR_2026_paper.pdf#page=7)

[![原文数学表达区域 18，PDF 第 7 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/7afd82c5b368/figure-18.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/7afd82c5b368/figure-18.png)

区域 18 · [查看论文原页](https://openaccess.thecvf.com/content/CVPR2026/papers/Nguyen_SOUPLE_Enhancing_Audio-Visual_Localization_and_Segmentation_with_Learnable_Prompt_Contexts_CVPR_2026_paper.pdf#page=7)

另有 11 个候选区域因边界不明确或图片数量、尺寸限制未展开；请[查看完整论文](https://openaccess.thecvf.com/content/CVPR2026/papers/Nguyen_SOUPLE_Enhancing_Audio-Visual_Localization_and_Segmentation_with_Learnable_Prompt_Contexts_CVPR_2026_paper.pdf)中的原始排版。

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。
- 评分规则：type-aware-v1
- 评分模型：muse-spark-1.3-contributor
- 评分请求协议：openai_responses

---

[← 返回 cvpr-2026 论文汇总](/posts/conference-cvpr-2026/)
