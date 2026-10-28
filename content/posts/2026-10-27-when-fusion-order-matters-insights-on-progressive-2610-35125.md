---
title: "When Fusion Order Matters: Insights on Progressive Multimodal Representation Learning for Cross-modal Retrieval"
date: 2026-10-27
draft: false
tags: [文本查询视频检索, 音频检索, 多模态学习, 对比学习]
categories: [论文速递]
description: "论文用统一框架 UniPRO 固定编码器和训练条件后比较融合顺序，发现逐个融合优于堆叠融合且顺序本身影响召回，并用缺失难度与查询相关信息保留来解释和预测顺序选择，但结论只在所测数据集与协议下成立。"
hiddenInHomeList: true
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_arxiv_id: "2610.35125"
paper_digest_workbench_contract: "researcher-workbench-v1"
paper_digest_reader_title: "融合顺序为什么会影响跨模态视频检索"
paper_digest_original_title: "When Fusion Order Matters: Insights on Progressive Multimodal Representation Learning for Cross-modal Retrieval"
paper_digest_arxiv_version: 1
paper_digest_arxiv_versioned_id: "2610.35125v1"
paper_digest_arxiv_abs_url: "https://arxiv.org/abs/2610.35125v1"
paper_digest_arxiv_pdf_url: "https://arxiv.org/pdf/2610.35125v1.pdf"
paper_digest_primary_task: "文本查询视频检索"
paper_digest_tags_contract: "paper-tag-flat-tags-v2"
paper_digest_tags_selection_contract: "paper-tag-selection-v2"
paper_digest_tags_registry_version: "paper-tag-catalog-v2"
paper_digest_tags_registry_sha256: "cdef54423b5dfc00a1d017ef6639446d2ecd1d9c1acf71c8eb4f6219a46b7ba8"
paper_digest_tags_concepts: [{"facet":"task","id":"task.text-video-retrieval","label":"文本查询视频检索"},{"facet":"task","id":"task.audio-retrieval","label":"音频检索"},{"facet":"method","id":"method.multimodal-learning","label":"多模态学习"},{"facet":"method","id":"method.contrastive","label":"对比学习"}]
paper_digest_primary_method: "多模态学习"
paper_digest_score: 5.7
paper_digest_rank_bucket: "前50%"
paper_digest_document_type: "方法研究"
paper_digest_one_sentence: "论文用统一框架 UniPRO 固定编码器和训练条件后比较融合顺序，发现逐个融合优于堆叠融合且顺序本身影响召回，并用缺失难度与查询相关信息保留来解释和预测顺序选择，但结论只在所测数据集与协议下成立。"
paper_digest_authors: [{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Haoxiang Zhao"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Bin Wang"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Yaofei Wang"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Xiao Lan"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Yunfeng Diao"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Xu Wang"}]
paper_digest_abstract_sha256: "14413f3000be4c008d2610898eb203f182a00def8c922b10ceba3a1b50926891"
paper_digest_sidecars: {"citation.bib":{"sha256":"c402d760e18cea79d34fe69a7ec714da861d72f64c8edba85757dcbf4358ffef","url":"/audio-paper-digest-blog/data/papers/2026-10-27/2610-35125/citation.bib"},"citation.json":{"sha256":"7ea2581994dde61588c780073ac8f662ae8a9775497e1d5263fce49abadfeade","url":"/audio-paper-digest-blog/data/papers/2026-10-27/2610-35125/citation.json"},"citation.ris":{"sha256":"2b1c71f94ff78d4a21fa147705ed5b3b43e266c76e30f2723a7c5375850d0bfe","url":"/audio-paper-digest-blog/data/papers/2026-10-27/2610-35125/citation.ris"},"rethink-context.json":{"contract":"paper-research-context-v2","sha256":"86dc97d0719aad944d0e50374d8fd7583323152101112c1a259578b4248645c7","url":"/audio-paper-digest-blog/data/papers/2026-10-27/2610-35125/rethink-context.json"}}
paper_digest_api_reader_contract: "beginner-researcher-v3"
paper_digest_api_reader_article_sha256: "820ec4885dc4a8bf89215677a3f940f2e3cd35ebc9510179a6dd48a63605a0a2"
paper_digest_api_reader_plan_sha256: "52ae592e0e31a2877e496ed318024937e277cfbe135e77088dfc1a1b293b3f0b"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings-v4"
paper_digest_api_reader_source_bindings_sha256: "527c89a8decbee8f91da134281a5c8b23a637915d1180848341b9a791f7b48fb"
paper_digest_api_reader_source_table_count: 4
paper_digest_api_reader_source_formula_count: 4
paper_digest_api_reader_structured_artifacts_sha256: "098a956f11fc84c518df4b53a4a64b23f64373be974bed4db63b59815496773f"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity-v1"
paper_digest_api_reader_author_identity_sha256: "310455a6158bcf10f121790bd80418046358a516694ad54ff3434f5d75ea617d"
paper_digest_api_reader_author_count: 6
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity-v1"
paper_digest_api_reader_resource_identity_sha256: "aa77e22c7f41f7e0cf6542d61a68980228cc410933b098d0597eff42abcd93a3"
paper_digest_api_reader_resource_count: 0
paper_digest_api_reader_figure_persistence: "ephemeral-no-persisted-figure-assets-v1"
paper_digest_api_reader_decision_projection: "api-reader-decision-projection-v2"
---

# 📄 融合顺序为什么会影响跨模态视频检索

> 英文题目：*[When Fusion Order Matters: Insights on Progressive Multimodal Representation Learning for Cross-modal Retrieval](https://arxiv.org/abs/2610.35125v1)*

<!--paper-tag-hierarchy-v1:start-->

**研究分类**

- **研究任务**：[文本查询视频检索](/audio-paper-digest-blog/papers/?concept=task.text-video-retrieval)；[音频检索](/audio-paper-digest-blog/papers/?concept=task.audio-retrieval)
- **研究方法**：[多模态学习](/audio-paper-digest-blog/papers/?concept=method.multimodal-learning)；[对比学习](/audio-paper-digest-blog/papers/?concept=method.contrastive)

<!--paper-tag-hierarchy-v1:end-->

> 评分：**5.7/10** | 创新 1.3/2 | 技术严谨 1.1/1.5 | 实验充分 1.2/1.5 | 清晰度 0.8/1 | 影响力 0.5/1.5 | 开源 0/1.5 | 可复现 0.3/0.5 | 工程/实践 0.5/1.5


## 👥 作者与机构

- Haoxiang Zhao：机构信息未能在本次解析中与作者逐人可靠绑定
- Bin Wang：机构信息未能在本次解析中与作者逐人可靠绑定
- Yaofei Wang：机构信息未能在本次解析中与作者逐人可靠绑定
- Xiao Lan：机构信息未能在本次解析中与作者逐人可靠绑定
- Yunfeng Diao：机构信息未能在本次解析中与作者逐人可靠绑定
- Xu Wang：机构信息未能在本次解析中与作者逐人可靠绑定

## 📌 核心摘要

跨模态视频检索需要把视频帧、伴音和语音转写合并为一个候选表示，再与查询匹配，困难在于三路缺失比例不同且查询只与其中一路语义接近，融合顺序会改变后一阶段要学习的对应关系。统一渐进表示与顺序分析框架（Unified Progressive Representation Learning for Order Analysis，UniPRO）先准备并对齐三路特征，再用可配置门控融合阶段按指定顺序依次更新表示，查询侧独立编码后取全局与局部余弦相似度均值作为匹配分。相对已有工作，UniPRO固定编码器与训练设置，只改变融合组织与模态顺序，从而分离顺序本身的影响。在采用ViT-B/32的MSR-VTT-9k文本到视频检索上，UniPRO的R@1为53.9，相对于SAVE的51.3高2.6个百分点。在CM-Pool完整输入的文本检索上，VAS的T2V R@1为53.5，高于VSA的52.7，表明缺失不能完全解释顺序差异；在MSR-Complete完整输入的音频检索上，音频居末的VSA的A2V R@1为56.6，高于VAS的55.2，但该优势未延伸到每个召回截断。在训练与测试同步缺失语音的MSR-SDrop音频检索上，语音缺失率升高使VSA与VAS的最优顺序在A2V R@1和V2A SumR上均发生反转，且交叉点随检索方向及采用R@1还是SumR而变化。上述顺序结论仅在所测逐个融合与堆叠组织、VAS与VSA对比及匹配训练设置下成立，语音完全缺失时两顺序分数接近且各缺失率下每种顺序单次运行，文本与音频实验使用不同数据构造、图像任务为源帧匹配，故跨查询模态泛化与外部数据集适用性尚未验证。基于视觉居末预测的VASV顺序在采用ViT-B/32的MSR-Frame图像到视频检索上I2V R@1为97.9，高于CLIP4Clip的92.4；原文未披露训练、推理或部署成本。

## 🔗 开源与复现资源

本次未形成可展示的已核验资源记录，开放状态尚未核实。

可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 视频检索要把哪些输入变成可比较的表示

这篇论文研究的任务是跨模态检索，重点是文本到视频检索，再扩展到音频和图像做查询。输入的一侧是候选视频，每个视频有画面帧、整段配乐，以及能否从配乐转写出语音文字；另一侧是查询，可以是一句文本、一段音频片段或一张图像。目标是给查询排序全部候选，让正确视频排在尽量靠前的位置。

要做到这一点，方法必须把视频侧的多路信号变成一个可与查询直接比相似度的表示。画面提供人物、场景和动作，音频提供环境声、音乐或事件声，语音文字提供可读的说话内容，三者互补但缺失情况不同：每个样本都有画面，可用的音频和可用的转录依次更少。输出是一个候选视频表示，测试时与独立编码的查询表示算余弦相似并排序。评价用召回率，看正确项是否进入前 1、前 5、前 10。

### 已有路线补了信息，本文补的是顺序比较

按论文梳理，已有工作大多在补信息或补对齐。CLIP 类方法把预训练的视觉语言表示适配到视频检索，X-Pool 等改进帧聚合，TEFAL 把文本分别与视觉和音频对齐，AVIGATE 用门控注意抑制无关声音，SAVE 再单独分出语音语义分支并改进音频视觉对齐。这些工作让候选表示包含更多可用证据。

另一类工作讨论交互方向与位置，例如不同模态对之间的方向性注意、用瓶颈标记限制跨层通信，以及把后期融合信息反馈给早期单模态生成器。UniPRO 的不同在于固定编码器、组件和训练设置，专门比较融合组织与模态顺序：先合并声音内部再见视觉，还是让视觉流逐个吸收音频再吸收语音，以及逐个顺序中先音频后语音还是反过来。比较的前提是输入与交互组件相同，否则无法把差异归因于顺序。

### 顺序为什么可能重要：两条待验证的解释

论文把问题拆成两步。第一，逐个融合与堆叠融合哪种组织更好；第二，在逐个融合内部，音频和语音的先后是否重要。直觉是渐进融合中每一步都会改变传给下一步的表示，早期模态会影响后期需要学习的对应关系，后期交互也会影响早期信息最终如何参与匹配。

为了解释观察到的顺序差异，论文提出两条互补考虑。第一条与学习难度有关：在自然数据中画面总有、音频部分缺失、语音更易缺失，不同顺序会让某个融合阶段面对更简单或更复杂的有效输入组合。第二条与查询有关：与查询同模态的信息如果放在后面融合，可能更完整地保留到最终匹配。下面的读图说明先建立这种直觉，后续实验再分别控制验证。

以下示意图把并行融合、缺失视角和查询视角放在一起，读图时先分清每条箭头代表哪个信号进入哪个融合阶段。

> **看图路径：** 1. 对比左图并行融合与中右图逐个融合的箭头走向；2. 看中图 S 出现与缺失时第二阶段输入有何不同；3. 看右图文本查询与音频查询各自把哪一路放在最后

[![原论文 Figure 1.：Fusion order matters: unordered fusion, an unsuitable stacked order, and a preferred one-by-one…](https://arxiv.org/html/2610.35125v1/fusion_order_teaser.png)](https://arxiv.org/html/2610.35125v1/fusion_order_teaser.png)

*论文图 1。原论文 Figure 1.：“Fusion order matters: unordered fusion, an unsuitable stacked order, and a preferred one-by-one order for text queries.Three panels contrast unordered fusion, audio and speech…”。*

左图是并行思路，视觉与音频、视觉与语音分别融合后再求和，音频与语音之间没有直接交互。中图按语音是否出现分成上下两行，说明同一共享的第二阶段在语音缺失与出现时面对不同输入。右图按查询类型分成上下两行，文本查询把语音放在最后，音频查询把音频放在最后。像素可见的要点是顺序改变了中间表示的构成，而不是仅仅改变了最后求和权重。

### UniPRO 让一个样本走完三路编码到逐个融合

UniPRO 处理一个视频的过程可以沿样本走一遍。视觉分支均匀采样 m 帧，用 CLIP 视觉编码器取每帧的类别标记得到序列；音频分支把配乐转成滤波器组特征后用 AST 编码，再重采样到 m 个标记；语音分支用 Whisper large-v3 转写出词序列，再用 CLIP 文本编码得到含起止标记的序列。文本或图像查询用 CLIP 文本编码器独立编码，音频查询用声学编码器处理，候选与查询在编码阶段不互相干扰。

3 路候选特征先经过关系增强与软对齐，再进入门控融合。门控融合以视觉为残差流，以另一模态为键值做注意，再用门控加权加回视觉流。文本检索的默认顺序是视觉先与音频融合，再与语音融合，记为 VAS；交换后两步就是 VSA。堆叠变体记为 ASV，先合并音频与语音再与视觉交互，还需指明第一步以谁为查询。

以下框架图展示文本检索实例中各模块的位置，读图时沿从左到右的主路径看数据如何汇合。

> **看图路径：** 1. 沿左侧 V、A、S 三分支向右看编码与重采样位置；2. 看关系增强与软对齐在两次门控融合之前的位置；3. 看右侧查询分支如何独立编码并做多粒度相似比较

[![原论文 Figure 2.：UniPRO instantiated for text-to-video retrieval.](https://arxiv.org/html/2610.35125v1/fram_work.png)](https://arxiv.org/html/2610.35125v1/fram_work.png)

*论文图 2。原论文 Figure 2.：“UniPRO instantiated for text-to-video retrieval.”。*

从像素可见，左侧 3 条分支分别标出语音、音频和视觉编码，中间经过纵向的关系增强与多特征软对齐，再进入两个黄色的门控融合块，最后与右侧独立编码的查询做多粒度相似比较。语音分支先经过词性规则压缩，音频分支经过 AST，视觉分支经过 CLIP 视觉编码，这与正文公式的编码流程一致。

**逐个融合 × 堆叠融合：** 逐个融合指以视觉为残差流先融合一路再把结果送入下一门控阶段，堆叠融合指先把音频和语音合并再与视觉交互；前者让每一步的输入都包含上一步结果，后者先在声音内部合并，本文比较的正是这两种组织方式在相同组件下的差异。

融合的递推形式可以用统一符号写出，它说明每一步输出都是下一步的输入，因此顺序会同时改变信息内容和优化路径。

\[H^{(0)}=X_{\pi_{1}},\qquad H^{(\ell)}=\mathcal{F}_{\ell}(H^{(\ell-1)},X_{\pi_{\ell+1}}).\]

### 转录压缩、关系增强与三路对齐各解决什么困难

语音转录可能很长且有噪声，若直接截断到 CLIP 的输入上限会丢掉靠后的实体与动作。论文引入词性规则 POSR，按统一词性标注的类别定优先级：专有名词和普通名词最高，动词其次，形容词再次，副词和数词最低，同级内均匀采样。这样在 77 个标记预算内保留更可能与检索相关的词，而不是只取固定前缀。

\[P(w_{i})=\begin{cases}4,&\operatorname{POS}(w_{i})\in\{\mathrm{PROPN},\mathrm{NOUN}\},\\ 3,&\operatorname{POS}(w_{i})=\mathrm{VERB},\\ 2,&\operatorname{POS}(w_{i})=\mathrm{ADJ},\\ 1,&\operatorname{POS}(w_{i})\in\{\mathrm{ADV},\mathrm{NUM}\}.\end{cases}\]

音频与语音描述同一配乐的不同侧面，单独编码会让关联隐含。关系增强模块 REM 先用可学习的查询把每路压缩，再让原始序列去注意另一路的压缩表示，并以残差加回原维度，最后重采样到 m 个标记。这样音频流带上语音证据，语音流也带上声学证据，为后面的逐个融合准备更相关的输入。

门控融合的注意力权重依赖查询与键是否兼容，因此融合前需要对齐。SAVE 只监督视觉与音频，多特征软对齐 MFSA 把视觉与语音、音频与语音也纳入监督，每对都用 ImageBind 嵌入算参考亲和矩阵，再用当前网络的亲和矩阵在行列相似分布上向参考看齐。论文强调它用 Pearson 距离关注相对相似结构，而非绝对亲和值，这更贴合检索要用的排序关系。

**视觉特征 × 声学特征：** 视觉特征指从视频帧经 CLIP 视觉编码得到的帧表示，声学特征指配乐经 AST 编码再重采样得到的音频表示；两者描述同一视频的不同侧面，方法先各自编码再在关系增强与对齐后进入门控融合，组合后候选表示同时带有画面内容和声音线索。

**语音语义特征 × 转录文本：** 转录文本指 Whisper 从配乐转写出的词序列，语音语义特征指该序列经 CLIP 文本编码并重采样后的表示；前者是原始词语，后者是可与视觉对齐的向量形式，组合意义是把可读的说话内容变成可融合的检索证据。

**关系增强模块 × 多特征软对齐：** 关系增强模块指让音频和语音序列互相做注意力以补足对方证据的交互步骤，多特征软对齐指用 ImageBind 参考相似矩阵监督三对模态相似分布的对齐损失；前者先让两路声音信息互通，后者再把三路特征拉到可比空间，搭配后门控融合的查询与键才更兼容。

### 训练用什么损失，查询与候选如何匹配

训练把自适应间隔对比目标与多特征软对齐损失按相等权重相加，软对齐内部 3 对也按相等权重平均。对比部分负责把正确查询与视频拉近、把不相关对推开，对齐部分负责让 3 路特征在融合前处于可比空间。论文还报告文本检索的继承设置包括内部负例率、局部聚合温度与对齐尺度，但未披露完整的梯度路径细节，这里只按原文转述损失组合，不推测哪部分参数冻结。

\[\mathcal{L}_{\mathrm{MFSA}}=\frac{1}{3}\left(\mathcal{L}_{\mathrm{SA}}^{v,a}+\mathcal{L}_{\mathrm{SA}}^{v,s}+\mathcal{L}_{\mathrm{SA}}^{a,s}\right).\]

匹配分数由全局相似与局部相似平均得到。全局相似是视频表示与查询表示的余弦相似，局部相似聚合每个融合后视觉标记与查询的余弦相似，再经对数与指数运算汇总。缺失或无效的音频用零向量表示，没有可用转录时也用零向量，使不完整样本仍能留在同一训练与评测流程中。图像查询实验增加第 3 个门控阶段并重访原始视觉标记，4 个含重复视觉的顺序都有 3 个可学习的门控阶段，以控制深度带来的差异。

### 在哪些数据与指标下比较，结果数字如何聚合

主实验用 4 个文本到视频基准：MSR-VTT-9k、MSR-VTT-7k、VATEX 和 Charades。MSR-VTT-9k 用 9000 视频训练、1000 视频测试，每个视频配 20 句描述；MSR-VTT-7k 划分不同；VATEX 用官方训练集并把验证集拆分评测，私有测试集不用；Charades 每个视频配一句描述。视觉主干用 CLIP ViT-B/32，四数据集比较都用它，另在 MSR-VTT-9k 上用 ViT-B/16 做双向与更细粒度的补充。

**R@K × SumR：** R@K 指查询的正确答案出现在前 K 个候选中的比例，SumR 指 R@1、R@5、R@10 三者之和；前者看某个截断点的命中率，后者把三个截断点加总以概括整体召回水平，数值越大表示检索越好。

指标是双向的 R@1、R@5、R@10，以及同方向三者之和 SumR，公式为三项直接相加。论文说明数值保留 1 位小数，直接相减或加总显示值可能因舍入有微小出入。比较时把方法按只用视觉与另用声音或语音信息分组，短横表示原文未提供对应结果。顺序分析另构造 CM-Pool、MSR-Avail、MSR-Complete、MSR-SDrop 和 MSR-Frame 等划分，分数只在各自协议内解释，不跨协议直接比大小。

\[\mathrm{SumR}=\mathrm{R@1}+\mathrm{R@5}+\mathrm{R@10}.\]

### 主结果在四个基准上达到什么水平，代价是什么

下表比较的核心问题是完整 UniPRO 流程在标准划分下能否在总召回上取得一致增益，条件是相同数据集划分与相同指标方向，代价是引入转录、声学编码与多阶段融合的额外计算。表中只摘录 MSR-VTT-9k 与 Charades 的 R@1 和 SumR 以控制篇幅，完整 4 基准数值见正文叙述。

| Vision-only methods |  |  |  |  |
| --- | --- | --- | --- | --- |
| SAVE, CVPR’26 | 51.3 | 216.2 | 20.8 | 121.4 |
| UniPRO | 53.9 | 220.9 | 22.1 | 124.0 |

表中最值得读的是 SAVE 与 UniPRO 两行。MSR-VTT-9k 上 UniPRO 的 R@1 为 53.9，SumR 为 220.9，比 SAVE 高 4.7 个 SumR 点；Charades 上 R@1 为 22.1，SumR 为 124.0。论文同时报告 MSR-VTT-7k 的 SumR 为 167.7、VATEX 为 256.9，分别比 SAVE 高 1.9 和 1.4 点。这些是完整流程的效果，不能直接归因于某一个顺序，后续顺序实验在各自匹配设置内单独比较。

反向检索与更大视觉主干的补充比较如下，问题是学到的视频表示是否在视频到文本方向也有效。

| Model | R@1 | SumR |
| --- | --- | --- |
| SAVE (Zhao et al., 2026) | 48.9 | 213.4 |
| UniPRO | 50.5 | 217.2 |

在 ViT-B/32 的 MSR-VTT-9k 视频到文本评测中，UniPRO 的 R@1 为 50.5，SumR 为 217.2，比 AVIGATE 高 0.8 个 R@1 点，比 SAVE 高 1.6 个 R@1 点与 3.8 个 SumR 点，且 3 个截断点都有提升。ViT-B/16 下文本到视频 R@1 为 55.0、SumR 为 224.1，视频到文本 R@1 为 51.9、SumR 为 220.0，同样高于 SAVE。以下条形图把组织方式与顺序放在同一 MSR-VTT-9k 条件下比较，读图时注意横轴是放大区间。

> **看图路径：** 1. 横向比较 VAS、VSA 与两种堆叠顺序在 R@1 的条形长度；2. 再看 R@5 与 R@10 是否保持同样的排序；3. 注意横轴是放大的区间而非从零开始

[![原论文 Figure 3.：Fusion organization on MSR-VTT-9k.Three panels of horizontal bars report R at 1, 5, and 10 for…](https://arxiv.org/html/2610.35125v1/fusion_organization.svg)](https://arxiv.org/html/2610.35125v1/fusion_organization.svg)

*论文图 3。原论文 Figure 3.：“Fusion organization on MSR-VTT-9k.Three panels of horizontal bars report R at 1, 5, and 10 for VAS, VSA, and two stacked ASV variants.”。*

像素可见 3 组横条都按 VAS、VSA、堆叠变体从上到下排列，VAS 在 R@1、R@5、R@10 都最长，VSA 其次，两种堆叠更短。这支持论文的两点表述：逐个融合优于所测堆叠融合，而逐个内部的顺序也有差异。但这只是该划分与该配置下的结果，不能推广为渐进融合必然有益。

### 融合组织与顺序差异到底有多大

为把差异归因于组织而非组件，论文用相同编码器、组件与训练设置比较 4 种调度。逐个顺序 VAS 表示视觉经音频再经语音，VSA 表示顺序相反；堆叠 ASV 先合并音频与语音再与视觉交互，并区分第一步以语音还是音频为查询。下表是 MSR-VTT-9k 上的完整数值，条件是包含自然不完整样本的全部划分。

| Schedule | R@1 | R@5 | R@10 |
| --- | --- | --- | --- |
| VAS | 53.9 | 79.6 | 87.4 |
| VSA | 53.2 | 78.5 | 87.1 |
| ASV (Q=S) | 51.4 | 78.3 | 85.9 |
| ASV (Q=A) | 50.5 | 77.4 | 85.2 |

VAS 的 R@1 为 53.9，VSA 为 53.2，相差 0.7 个百分点；R@5 为 79.6 对 78.5，R@10 为 87.4 对 87.1。两种堆叠的 R@1 分别为 51.4 和 50.5，3 个截断点都低于逐个顺序。也就是说组织方式带来约 2 到 3 个点的差距，顺序内部带来约零点几个点的差距。论文明确指出模式计数不能度量优化难度，顺序差异的机制需要进一步控制缺失与查询来检验。本表数值与单位依据论文 PDF。

### 缺失控制与查询切换如何支持两条原则

第一条原则用全模态控制检验。论文从 MSR-VTT、VATEX 和 Charades 各选出视觉、音频、语音与描述都完整的样本拼成 CM-Pool，训练与评测都只用完整样本。结果 VAS 在文本到视频 R@1 为 53.5 对 52.7，在视频到文本为 52.0 对 50.5，顺序差异仍然存在，因此缺失本身不能完全解释顺序偏好。冻结全模态训练的检查点、只在测试时置零部分输入，VAS 在只有视觉、视觉加音频、全模态、视觉加语音 4 种条件下仍保持领先，说明训练学到的顺序差异会在推理缺失时延续。

第二条原则用查询切换检验。自然分组显示同时有 3 路的视频组 R@1 和 R@5 最高，但因分组视频不同只能算提示。更直接的检验是在 MSR-Complete 上做音频检索，每个音频查询是原配乐二十分之一长的固定连续片段，候选保留完整配乐、画面与语音。此时 VSA 在音频到视频 R@1 为 56.6 对 55.2，在视频到音频为 58.5 对 57.2，偏好从文本检索的语音最后转为音频检索的音频最后，且优势主要在 R@1，并非每个截断点都成立。文本与音频实验用了不同数据构造，因此不能把差异完全归因于查询模态本身。

受控语音缺失实验把训练与测试按相同比例去掉语音，从 0 到 100% 每 10% 一档并在每档重新训练两种顺序。音频到视频 R@1 在 60% 前 VSA 较高、70% 到 90%VAS 较高，视频到音频 SumR 在 0 到 10% favor VSA、20% 后 favor VAS。这种反转支持同时权衡学习难度与查询相关信息保留，而不是只用其中一条选择顺序。

### 用两条原则预测图像查询顺序是否成立

图像查询实验的问题是能否把原则迁移到新查询类型，条件是用 MSR-VTT-9k 全划分、每视频随机取 1 帧作查询且固定跨顺序比较，候选保留自然可用的音频与语音。这测的是源帧匹配，而非来自外部的无关图像检索。下表整理了论文连续正文报告的可用数字，比较对象是实际可运行的 VAS 基线与 3 种含重复视觉的顺序。

| 项目 | 数值 |
| --- | --- |
| VAS 的图像到视频 R@1 | 97.0% |
| VASV 的图像到视频 R@1 | 97.9 |
| VVAS 与 VAVS 相对 VAS 的 R@1 增益 | 0.4 |
| VSAV 相对 VAS 的 R@1 增益 | 0.5 |
| VASV 相对 VAS 的 R@1 增益 | 0.9 |

表后解释需要同时看收益与限制。按论文报告，VASV 的图像到视频 R@1 为 97.9，超过 VAS 约 0.9 点，超过 VSAV 约 0.4 点，超过 VVAS 与 VAVS 各约 0.5 点，是所测顺序中最高者。4 种含重复视觉的调度都有 3 个独立参数化的门控阶段，VAS 是原来的 2 阶段参照，因此深度差异已得到控制。该结论只在源帧匹配协议内成立，外部图像查询的稳健性尚未评测，不能把该顺序当作所有图像检索的最优解。

### 去掉关系增强、转录压缩与部分对齐会发生什么

组件消融回答的是完整流程中各模块是否必要，条件是 MSR-VTT-9k 上的文本双向检索。去掉 REM 后文本到视频 SumR 下降 3.0 点，视频到文本 SumR 下降 0.9 点，支持音频与语音在融合前先交互是有帮助的。去掉 POSR 后双向 SumR 分别下降 4.8 和 2.1 点，R@1 分别下降 2.2 和 1.1 点，说明按词性保留语义比固定截断保留更多可用线索。在渐进融合后直接加回原始视觉表示反而使双向 SumR 下降 2.4 和 0.4 点，说明是否重访视觉取决于以何种方式进入融合过程。

软对齐消融进一步拆 3 条路径。只保留视觉与音频对齐时双向 SumR 下降 3.3 和 1.9 点；去掉视觉与语音对齐下降 2.3 和 1.0 点；去掉音频与语音对齐下降 1.9 和 1.6 点。因此 3 对都有贡献，完整的 3 路对齐为后续顺序比较提供了更一致的公共表示。这些消融只说明模块在该流程内的作用，不能说明拿掉后在其他框架下必然如何。

语音缺失如何反转音频检索的顺序偏好，是理解两个原则如何权衡的关键，读图时注意每个缺失率都重新训练。

> **看图路径：** 1. 看上两图随语音缺失率上升两条曲线的交叉位置；2. 看下图视频到音频 SumR 何时由 VSA 领先转为 VAS 领先；3. 注意每个缺失率都重新训练而非只测一次模型

[![原论文 Figure 5.：R@1 and SumR under speech missingness.Two upper panels compare VAS and VSA R at 1 for…](https://arxiv.org/html/2610.35125v1/speech_missingness.svg)](https://arxiv.org/html/2610.35125v1/speech_missingness.svg)

*论文图 5。原论文 Figure 5.：“R@1 and SumR under speech missingness.Two upper panels compare VAS and VSA R at 1 for audio-to-video and video-to-audio retrieval.”。*

像素可见上左音频到视频 R@1 中 VSA 在缺失率 0 到 60% 较高，70% 到 90% 转为 VAS 较高，100% 时两者接近；上右视频到音频 R@1 也有类似交叉；下图视频到音频 SumR 在 0 到 10% favor VSA，从 20% 起 favor VAS。交叉点依赖检索方向与指标，说明缺失比例变化时应权衡的两条考虑会此消彼长，而不是某一个顺序在所有条件下最优。

### 这些结论在什么条件下才成立，还有哪些没测

首先，所有顺序比较都只在各自匹配的组件与训练设置内有效，主基准的高分不能直接证明某个顺序最优，顺序实验的高低也不能脱离所用划分来谈。CM-Pool 拼了 3 个来源的完整样本，MSR-Complete 只用 MSR-VTT 完整样本，文本与音频实验的数据构造不同，因此跨查询的比较混入了数据差异。

其次，缺失分析每次只重新训练 1 次，100% 缺失时两种顺序输入相同但参数分别优化，微小差异不应过度解读。语音缺失的交叉点随方向与指标变化，R@5 与 R@10 并不总是与 R@1 同向，例如音频到视频 R@5 打平、R@10 反而 VAS 更高。图像实验是源帧匹配且基数较高，绝对值接近饱和，0.4 到 0.9 个百分点的增益需要在重复运行与更广查询下进一步验证。论文结论也明确提出需重复运行与更广查询协议来检验普适性。

### 要复现应从哪一步开始，需要哪些信息条件

复现第一步是按划分重建输入可用性。文本主实验用原基准划分并保留自然缺失，用零向量表示无效音频或无可用转录；顺序机制实验则需单独构造全模态池与受控缺失池，保证同一比较内样本、查询与候选固定，只有顺序或缺失率变化。视觉用 CLIP ViT-B/32 或 ViT-B/16，音频用 AST，转录用 Whisper large-v3 并经 CLIP 文本编码，这些编码选择是结果成立的前提。

训练侧需保留论文披露的关键超参数：嵌入维度 512，MSR-VTT-9k 等用批量 64、MSR-VTT-7k 用批量 96，MSR-VTT 与 VATEX 采样 12 帧、Charades 采样 32 帧，转录上限 77 标记，声学与语音流重采样到 12 标记，门控融合与查询重采样器各 4 层，对比间隔在 MSR-VTT 与 Charades 为 0.1、VATEX 为 0.05。分析实验的学习率、轮数与种子在附录另有规定，缺失率实验要求每个顺序在每个缺失率单独训练。未披露梯度细节与硬件成本的部分不要自行补造，复现时应如实记录实际耗时与推理开销。

关于公开状态，本次只发现论文提到相关链接不等于作者已开源的说明，没有发现来源绑定且完成验证的资源，因此不得声称代码、模型或数据当前可用或已公开。应以原文与附录的构造描述为准重建流程，缺失的资源缺口要在复现记录中明确标出。

### 什么时候值得尝试这种顺序思考，还需补哪项验证

当视频候选同时有多路信号且缺失比例不可忽略，又需要支持文本、音频或图像等不同查询时，值得把融合顺序当作显式选择。做法是先看数据侧哪一路更常缺失、哪个阶段会面对更杂的输入组合，再看查询侧哪一路与查询同模态并考虑把它放在后面，最后在目标缺失率附近用匹配设置的对照比较 VAS 与 VSA 类顺序，而不是默认堆叠或固定顺序。

还需要补的验证包括重复随机种子的稳定性、更多截断点与统计不确定性、与主基准相同的自然缺失下的查询切换，以及外部图像与真实音频查询而非源内裁剪的测试。只有在这些条件下仍能复现反转点与增益方向，才能把两条原则当作更一般的选序依据。目前最稳妥的表述是：在所测协议下，逐个融合优于所测堆叠融合，顺序偏好随缺失率与查询类型变化，图像查询的视觉最后顺序是所测顺序中最好的。

<details>
<summary>📎 论文与评分元数据</summary>

排名：前50% | 文档类型：方法研究 | [arXiv 原文](https://arxiv.org/abs/2610.35125v1)

</details>

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。

- 评分规则：type-aware-v1

- 评分模型：muse-spark-1.3-contributor

- 评分请求协议：openai_responses

---

[← 返回 2026-10-27 语音/音乐/音频论文速递](/audio-paper-digest-blog/posts/2026-10-27/)
