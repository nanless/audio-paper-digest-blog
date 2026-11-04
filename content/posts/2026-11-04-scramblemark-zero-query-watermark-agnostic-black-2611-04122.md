---
title: "ScrambleMark: Zero-Query Watermark-Agnostic Black-Box Evasion of Modern Speech Watermarking"
date: 2026-11-04
draft: false
tags: [音频水印, 对抗攻击构造, 语音, 扩散模型]
categories: [论文速递]
description: "针对不知道水印方案、不能查询检测器的黑盒条件，ScrambleMark 用分频段谐波扰动破坏水印结构一致性，在七种学术水印和三种商用水印上实现约 0.97 的逃避成功率并保持语音可懂度和主观听感，同时能抵抗知道算法的自适应恢复。"
hiddenInHomeList: true
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_arxiv_id: "2611.04122"
paper_digest_workbench_contract: "researcher-workbench"
paper_digest_workbench_schema_fingerprint: "1f09b594c317cc38e934de27a5b0e8ceb4baa50ef79bd4f8683dd9adea720fe7"
paper_digest_reader_title: "ScrambleMark：不擦除水印，只打乱谐波结构来逃避语音水印检测"
paper_digest_original_title: "ScrambleMark: Zero-Query Watermark-Agnostic Black-Box Evasion of Modern Speech Watermarking"
paper_digest_arxiv_version: 1
paper_digest_arxiv_versioned_id: "2611.04122v1"
paper_digest_arxiv_abs_url: "https://arxiv.org/abs/2611.04122v1"
paper_digest_arxiv_pdf_url: "https://arxiv.org/pdf/2611.04122v1.pdf"
paper_digest_primary_task: "音频水印"
paper_digest_tags_contract: "paper-tag-flat-tags"
paper_digest_tags_schema_fingerprint: "27e36280a4b8d3df62ebe54d3ab037920f4d69feb2b554163f01bbae2caf4338"
paper_digest_tags_selection_contract: "paper-tag-selection"
paper_digest_tags_registry_version: "paper-tag-catalog"
paper_digest_tags_registry_sha256: "9673bc0122e1905a5dcfd8b223675400cc2fa4c36095bc0e5f817edf99a0ec5c"
paper_digest_tags_concepts: [{"facet":"task","id":"task.watermarking","label":"音频水印"},{"facet":"method","id":"method.adversarial-attack","label":"对抗攻击构造"},{"facet":"signal","id":"signal.speech","label":"语音"},{"facet":"method","id":"method.diffusion","label":"扩散模型"}]
paper_digest_primary_method: "对抗攻击构造"
paper_digest_score: 7.3
paper_digest_rank_bucket: "前50%"
paper_digest_document_type: "方法研究"
paper_digest_one_sentence: "针对不知道水印方案、不能查询检测器的黑盒条件，ScrambleMark 用分频段谐波扰动破坏水印结构一致性，在七种学术水印和三种商用水印上实现约 0.97 的逃避成功率并保持语音可懂度和主观听感，同时能抵抗知道算法的自适应恢复。"
paper_digest_authors: [{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Binhao Ma"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Weikang Ding"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Hanqing Guo"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Wenwei Zhao"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Xiaowen Li"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Leah Ding"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Zhuo Lu"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Rui Duan"}]
paper_digest_abstract_sha256: "f7a3bf097caff02549a863d170250a6cb3fc9c25297609b87df7a9d9b7fe1a22"
paper_digest_sidecars: {"citation.bib":{"sha256":"44ba2f05e5c4c7ad48d1dd825da2d7ffb9e1a6d600e52614ad448ea8f2c77d4b","url":"/audio-paper-digest-blog/client/papers/2026-11-04/2611-04122/citation.bib"},"citation.json":{"sha256":"c3ae9f30bfc6b5f8f2bf1e0c60d09a8738a2f1788a9f36a87741fbd9c677c1ce","url":"/audio-paper-digest-blog/client/papers/2026-11-04/2611-04122/citation.json"},"citation.ris":{"sha256":"b2a1f4eaba8e79ddc4d7b658f866c08507b4649a61d138a06694c8f1f5674ac2","url":"/audio-paper-digest-blog/client/papers/2026-11-04/2611-04122/citation.ris"},"rethink-context.json":{"contract":"paper-research-context","schemaFingerprint":"5d4e79f7d3ee65b39ccb38281548bf20a1b2041ab7a27625eaf97ab9909a8383","sha256":"558de34e20b81d39281c44823de6d123943e29c26239a9b7156a6a67efde4d3b","url":"/audio-paper-digest-blog/client/papers/2026-11-04/2611-04122/rethink-context.json"}}
paper_digest_api_reader_contract: "beginner-researcher"
paper_digest_api_reader_schema_fingerprint: "cd8baf5b8bda3a49eec64f6005931af63de4e9a13148cba5f354c661ca6e9df2"
paper_digest_api_reader_article_sha256: "3347195d3f2eafa96deac57e1a151006a0efd951122ec4bdb184dd3388a0dbff"
paper_digest_api_reader_plan_sha256: "b071541b433c248397d49d63df56b33e7fe5579cbd9438411b59bd71e9f93ad4"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings"
paper_digest_api_reader_source_binding_schema_fingerprint: "d2a2607a6e561909473022eb43f56332ee357af8568566a095c29083ffdec9cc"
paper_digest_api_reader_source_bindings_sha256: "e64d0c3644b0b1a5825bc1695fa7779a5e71dc3e5c8d3ef72f6cb7a5705ee756"
paper_digest_api_reader_source_table_count: 4
paper_digest_api_reader_source_formula_count: 3
paper_digest_api_reader_structured_artifacts_sha256: "30245afcdd0c668dfdc682deb0d2d676cb199ef4c424a956f5bbefddc33d23d5"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity"
paper_digest_api_reader_author_identity_schema_fingerprint: "1e3fd3a9a56c9a5bf52df8df5022690b9a3fa92e83e934f295af87c0e258ed2f"
paper_digest_api_reader_author_identity_sha256: "7d4816ab397d008c881d272f7a6b1e97688fa21fcff62e6627d90497207467ce"
paper_digest_api_reader_author_count: 8
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity"
paper_digest_api_reader_resource_identity_schema_fingerprint: "33b0be17118be61f39b85ce690c8da17e91f2864bb65e85284f60c40067328e0"
paper_digest_api_reader_resource_identity_sha256: "3b481ba6374a351e25c270c3d647e15353775f2f63f30940d0f841d1f3bd21ae"
paper_digest_api_reader_resource_count: 0
paper_digest_api_reader_figure_persistence: "ephemeral-no-persisted-figure-assets-v1"
paper_digest_api_reader_decision_projection: "api-reader-decision-projection"
paper_digest_api_reader_decision_projection_schema_fingerprint: "e56feb5ab75c8710904916b898f73dab9bb18bdf65bb60b7ed2edf7f99cea860"
---

# 📄 ScrambleMark：不擦除水印，只打乱谐波结构来逃避语音水印检测

> 英文题目：*[ScrambleMark: Zero-Query Watermark-Agnostic Black-Box Evasion of Modern Speech Watermarking](https://arxiv.org/abs/2611.04122v1)*

<!--paper-tag-hierarchy-v1:start-->

**研究分类**

- **研究任务**：[音频水印](/audio-paper-digest-blog/papers/?concept=task.watermarking)
- **研究方法**：[对抗攻击构造](/audio-paper-digest-blog/papers/?concept=method.adversarial-attack)；[生成模型](/audio-paper-digest-blog/papers/?concept=method.generative) → [扩散模型](/audio-paper-digest-blog/papers/?concept=method.diffusion)
- **信号**：[语音](/audio-paper-digest-blog/papers/?concept=signal.speech)

<!--paper-tag-hierarchy-v1:end-->

> 评分：**7.3/10** | 创新 1.5/2 | 技术严谨 1.2/1.5 | 实验充分 1.3/1.5 | 清晰度 0.8/1 | 影响力 1.2/1.5 | 开源 0/1.5 | 可复现 0.3/0.5 | 工程/实践 1/1.5


## 👥 作者与机构

- Binhao Ma：机构信息未能在本次解析中与作者逐人可靠绑定
- Weikang Ding：机构信息未能在本次解析中与作者逐人可靠绑定
- Hanqing Guo：机构信息未能在本次解析中与作者逐人可靠绑定
- Wenwei Zhao：机构信息未能在本次解析中与作者逐人可靠绑定
- Xiaowen Li：机构信息未能在本次解析中与作者逐人可靠绑定
- Leah Ding：机构信息未能在本次解析中与作者逐人可靠绑定
- Zhuo Lu：机构信息未能在本次解析中与作者逐人可靠绑定
- Rui Duan：机构信息未能在本次解析中与作者逐人可靠绑定

## 📌 核心摘要

语音水印把多比特信息展成时频表示上的结构化图案，检测端按比特匹配分数判断是否存在，攻击者通常拿不到检测反馈，也不知道音频是否含水印以及属于哪种方案。已有擦除思路依赖查询、白盒管线或配对干净音频，在商用平台的账户隔离与无反馈策略下难以成立。ScrambleMark接收单条可能含水印的语音，输出扰动后语音，目标是让目标检测器的比特匹配分数低于阈值，同时保持听感接近原音频。做法沿一条样本展开：先在音高、节奏、音色、响度等感知特征上试探逃避与质量折中，找到谐波轴扰动最有效，再用替代水印模型优化分带频移参数生成训练数据，最后把确定性规则提炼为条件扩散模型的随机化谐波扰动分布。在LJ Speech训练、在英语、中文、韩语、法语、德语无说话人重叠且每语种500段的评测上与七个学术方案比较，ScrambleMark平均ASR为0.97、STOI为0.91，STOI高于无监督生成基线DiffErase-M的STOI 0.72。在商用平台上同样保持高逃避与高听感评分，但恢复实验与多水印实验仍受限于论文设定的恢复算子与嵌入顺序，真实部署中的更强检测端反馈与未知后处理尚未覆盖。原文披露了扩散推理的采样步数、候选数量与单样本耗时等成本信息。

## 🔗 开源与复现资源

本次未形成可展示的已核验资源记录，开放状态尚未核实。

可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 语音水印要解决什么，检测靠什么判定

这篇论文面对的是语音水印的逃避问题。输入是一段已经带有水印的语音，攻击者想把它稍微改一下，让检测器判为没有水印，同时人听起来仍然自然可用。输出就是这段改过的语音，它既要能过后续的滥用流程，比如语音克隆或分发，又不能让人明显听出失真。

论文先把水印系统拆成嵌入和检测两段。嵌入把原始语音变换到时域或短时傅里叶变换频域，把水印比特向量编码成同一域上的结构化图案，再融合后逆变换回波形。检测则是从待测语音估计比特序列，再算估计序列与目标消息的比特匹配率，超过阈值才判为含水印。阈值控制鲁棒和误判之间的折中。这个流程说明检测依赖的是图案在时频上的结构一致性，而不是某个孤立采样点。

**水印嵌入 × 水印检测：** 水印嵌入负责把 n 比特消息变成时频域上的结构化图案并混入语音，水印检测负责从待测语音中估计比特序列再算比特匹配率；前者决定图案藏在哪里、长什么样，后者决定靠图案一致性来判定，两者搭配才让擦除之外的结构破坏成为可能的攻击面。

下面先看论文给出的水印流水线示意，帮你把嵌入空间、融合、逆变换、检测和匹配率的位置对上，图中从左到右依次是嵌入、融合重建、检测判决 3 段。

> **看图路径：** 1. 先沿左侧语音和水印两条输入支路看嵌入空间变换；2. 再看中间融合与逆变换如何得到含水印波形；3. 最后看右侧检测从估计比特到匹配率的判定链条

[![原论文 Fig. 1：Overview of the watermarking pipeline.](https://arxiv.org/html/2611.04122v1/overview_wm_3.png)](https://arxiv.org/html/2611.04122v1/overview_wm_3.png)

*论文图 1。原论文 Fig. 1:：“Overview of the watermarking pipeline.”。*

从图中可以看到，左侧语音和水印分别经过各自的嵌入变换，中间把两种嵌入表示相加或融合，再逆变换得到含水印语音，右侧检测先估计比特再算匹配率。理解这条主线后，后面讲为什么打乱谐波就能让匹配率掉下来会更顺，关键是图案对齐一旦被破坏，逐比特比较就会大量失配。

### 已有逃避方法为什么在真实部署下难用

已有工作大致分 3 类。噪声攻击在白盒知道嵌入检测流程或能反复查询检测器时，迭代加噪直到检测失败。覆盖攻击嵌入替代水印去冲掉原水印，也常依赖检测反馈或多个替代模型暴力尝试。生成式去除则把含水印语音重建成无水印语音，分成需要成对干净与含水印数据的有监督路线，以及依赖预训练声码器先验的无监督路线。

论文指出这些路线都带了现实中很难满足的假设。查询受限是一个例子，文中以 TrustedAudio 为例说明检测接口按账户隔离，未授权方即使提交含他人水印的语音也得不到有效反馈。成对数据和目标说话人干净语音同样难大规模获得。更关键的是，无监督生成模型在未见过的说话人上容易失真，论文后面用特征漂移实验来说明这一点。

比较时要注意条件是否相同。白盒噪声和查询式覆盖本来就用了目标信息，监督式去除用了配对监督，它们和零查询、无配对、无目标说话人数据的 ScrambleMark 不在同一输入条件下。论文的贡献恰恰是把条件收紧到只给单条待攻击的含水印语音，再看还能不能同时做到高逃避和保音质。

### 为什么不擦除水印也能让检测失败

论文要解的优化问题可以直观理解为，在检测结果为无水印的约束下，让扰动后语音与原含水印语音的感知距离尽量小。这里扰动是加在波形上的改变量，感知距离衡量人听起来的差异，约束是目标检测器恢复不出水印。

\[\min_{\delta}\;\mathcal{L}_{\text{perc}}(x_{w_{t}}+\delta,\,x_{w_{t}})\quad\text{s.t.}\quad y_{t}=0,\]

这个形式把两个目标分开，一边是听感，一边是逃避。论文的转折在于不把逃避等价于擦除。因为水印为了抗压缩和噪声，会把信息铺到时频表示的较宽区域，形成某种条纹或图案，检测靠匹配这种图案。只要把时频结构整体搅乱，即使水印能量还在，匹配分也会掉下来。

下面这张对比图很关键，它用 Timbre 做目标、AudioSeal 做代理，展示了旧攻击和简单频移对图案的不同影响，读图时重点看图案是被局部擦掉还是整体错位。

> **看图路径：** 1. 对比左上两种水印图案的条纹布局差异；2. 观察中部三类旧攻击只动局部或稀疏点的痕迹；3. 看右下频移后图案错位但能量仍在的特点

[![原论文 Fig. 2：Comparison of watermark patterns under different attack strategies.](https://arxiv.org/html/2611.04122v1/differentpattern.png)](https://arxiv.org/html/2611.04122v1/differentpattern.png)

*论文图 2。原论文 Fig. 2:：“Comparison of watermark patterns under different attack strategies.”。*

从像素上可以看到，左上两种水印在相同时频尺度下条纹布局明显不同，中部白盒、覆盖和 SE 攻击只在局部低频或稀疏点上留下痕迹，大部分条纹结构还在，而右下把 0 到 4 千赫或 4 千赫以上整体下移后，图案出现明显的错位和不匹配标注。论文还报告这类频移能让低频段破坏约三成比特、高频段破坏约两成比特。这就引出后面的核心假设，破坏结构一致性本身就是可行的逃避路径。

### ScrambleMark 的三段式总体思路是什么

ScrambleMark 把攻击分成搜索、优化、合成 3 段。搜索段在感知特征空间里试多种扰动，用逃避与质量折中比找出谐波轴最值得做。优化段把这个发现做成确定性分频段移频器，并在代理水印上调参，验证它能跨模型迁移，同时产出训练数据。合成段再把确定性规则升为带随机性的条件扩散模型，让输出不再依赖固定变换，从而抵抗自适应恢复。

3 个阶段处理的是同一个样本流。输入始终是单条含水印语音，先被表示成频谱和谐波结构，再经过不同强度的打乱得到候选输出，最后按代理上的损失选最小的一个。搜索解决往哪个方向打，优化解决怎么打得又准又省听感，合成解决怎么打得每次不一样又不跑偏。

论文反复强调的两个难点也对应这 2 对矛盾。一是不知道水印藏在频谱哪里，需要全频谱覆盖，又不能把音高音色一起毁掉。二是确定性变换规则固定，容易被估计和逆转，需要随机化但又要保住谐波集中的特性。后面几节就沿着这两个矛盾展开具体做法。

### 怎么发现谐波轴是最划算的打乱方向

为了找到划算的打乱方向，论文构造了一个特征级扰动数据集。功能轴覆盖音高、节奏、音色、响度，强度轴每种方法给 5 个等级，还加上高斯噪声、环境声、语音增强去噪做基线。音高下分整体缩放谐波的音高移动和整体平移能量的频率移动，节奏包括变速和裁剪，音色包括量化和中值滤波，响度是幅度缩放。

评价用逃避与质量折中比 EQTR，也就是水印匹配分下降量除以与可懂度相关的分母。可懂度用 STOI 衡量，越高表示越清晰。EQTR 越大表示单位听感损失换来更多匹配分下降。实验在 Timbre 这种铺满全频谱的鲁棒水印上做，因为它要求扰动本身也要有全频谱能力。

**谐波结构 × 感知特征空间：** 谐波结构指基频及其整数倍分量在频谱上形成的整体排列，感知特征空间是论文用来比较音高、节奏、音色、响度的紧凑坐标；把扰动放在这个空间里试，才能发现只有沿谐波轴的变形能以较小听感代价造成较大的匹配分下降。

下面这张柱状图是搜索阶段的关键证据，读图时先看哪几根柱子最高，再看它们共同的谐波属性，横轴是扰动类型而纵轴是折中比。

> **看图路径：** 1. 先看横轴从时间裁剪到音高上移的扰动排列；2. 再看纵轴 EQTR 柱高在右侧三根谐波扰动处抬升；3. 对比高斯噪声和去噪方法柱高明显更低

[![原论文 Fig. 4：EQTR across feature-level perturbations.](https://arxiv.org/html/2611.04122v1/STOI2.svg)](https://arxiv.org/html/2611.04122v1/STOI2.svg)

*论文图 4。原论文 Fig. 4:：“EQTR across feature-level perturbations.”。*

图中可见音高上移、音高下移和频率移动的 EQTR 分别约为 0.31、0.28 和 0.25，明显高于高斯噪声的 0.16，也远高于节奏和去噪方法接近 0.01 的水平。论文据此总结，强攻击的共同点是整体搬动谐波结构，而不是改局部纹理或时间结构。这就为后面只沿频率轴做分频段变形提供了依据，也解释了为什么去噪类方法几乎无效。

### 分频段谐波打乱器具体怎么搬频谱

确定性打乱器的想法是把频轴切成多个连续频带，每个频带独立平移一定的音分数。正向偏移和负向偏移分别对应上移和下移，频带宽度可以不等。这样既能覆盖水印可能出现的任何频率，又能对不同频段用不同强度，避免全局统一变调带来的生硬感。相邻频带的不同偏移还可能让能量交叠合并，这为抗恢复埋下伏笔。

**频率划分 × 频移向量：** 频率划分把频轴切成多个宽度可不等的连续频带，频移向量给每个频带一个以音分为单位的偏移量；前者决定扰动作用在哪些频率切片上，后者决定每个切片向哪边搬多少，两者合在一起才构成一次分频段谐波打乱操作。

优化时目标检测器未知，所以论文先在代理上做替代优化。做法是把代理水印再嵌入到待攻击语音上得到代理含水印音频，再调划分和频移，让代理的匹配分尽量低，同时让梅尔谱距离尽量小。权重系数平衡逃避和保真。因为划分变了频移向量的维度也会变，直接联合优化很困难，论文用交替策略，先固定划分优化频移，再把较宽的频带按宽度概率分裂成更细的频带，子带继承原频带的偏移后继续优化，用协方差矩阵自适应进化策略做频移搜索。

这个确定性打乱器后来有两个用途。一是作为可迁移的攻击原型，在多种水印上验证跨模型效果。二是作为数据引擎，按不同强度约束跑多次随机初始化，产出后面生成器训练用的打乱样本。它的输出保留了谐波集中的特点，为生成器限定了学习方向。

### 怎样把确定性规则变成抗恢复的生成器

直接把确定性打乱搬成生成器有两个障碍。一是条件空间爆炸，每个频带偏移独立取值，约 100 个频带、每个几十种取值会组合出远超训练集能枚举的数量。二是生成模型在未见语音上容易出现全特征漂移，论文测了多种生成模型，发现响度、音高、音色、节奏都明显漂移，对只需要动谐波的攻击来说浪费了太多感知预算。

论文的解法是 2 个阶段。先用强度级条件压缩空间，不给每个样本单独条件，而是把偏移幅度相近、划分不同的样本归到同一强度级，每级共享 1 个条件。这样条件数从样本级降到强度级，也让模型在同一强度下见过多种划分。每级每条语音存约 100 个样本，共 10 个强度级。

**代理水印 × 迁移性扰动：** 代理水印是攻击者自己能用的已知水印模型，用来在本地嵌入替代消息并调参，迁移性扰动是在代理上调好后拿到未知目标上仍有效果的扰动；因为目标不可见，只能靠代理上的匹配分下降加梅尔谱距离来选参数，再用跨模型实测验证是否真的迁移。

恢复感知的构造是另一个关键。相邻频带偏移后能量可能交叠合并，边界一旦丢失就很难干净逆回。论文用全频带平均偏移的粗逆变换来模拟防御者能做的恢复，把恢复后仍能检出的匹配分也加入搜索目标，权重越大越偏向难逆的合并结构，但会损失一点音质。

\[\mathcal{J}=\Theta\!\left(\mathcal{D}(x_{s}^{\prime}),\,w_{s}\right)+\lambda\mathcal{L}_{\text{Mel}}(x_{s}^{\prime},x_{wt})+\beta\,\Theta\!\left(\mathcal{D}(\tilde{x}_{wt}),\,w_{s}\right),\]

上式第一项压代理匹配分，第二项用梅尔谱距离保真，第三项惩罚能被粗逆变换恢复的配置。生成器本身选 DiffWave 这类扩散声码器，看中它不同噪声初始化带来多样输出，以及逐步去噪对细粒度谱细节的稳定重建。微调目标是标准的扩散噪声预测损失。

\[\theta^{\star}=\arg\min_{\theta}\;\mathbb{E}_{x_{s},\;x_{s}^{\prime}\sim\mathcal{C}_{\text{scr}},\;\epsilon,\;r}\left[\left\|\epsilon-\mathbb{G}_{\theta}(x_{s,r}^{\prime},\,r\mid x_{s})\right\|_{1}\right].\]

训练时还有两处随机性。随机化监督每次只抽 16 个同强度样本做目标，下个批次重抽。动态时间打乱把随机抽取做到时间片段上，让不同片段学到不同打乱。推理时枚举全部强度级各生成一个候选，再按代理损失选最小者。

**随机化监督 × 动态时间打乱：** 随机化监督指每次从同一强度下多个打乱样本中随机抽一小批做生成目标，动态时间打乱指把随机抽取下沉到音频的时间片段上；前者在样本级避免固定到某一种打乱图案，后者在时间级让不同片段学到不同打乱，两者一起才让生成器输出难以被粗略逆变换整体恢复。

### 实验在什么数据和水印上比较，指标方向是什么

学术部分用 7 种水印，覆盖时域和频域，包括 Timbre、AudioSeal、WavMark、Collaborative、AudioMarkNet、RobustDNN 和 SilentCipher，默认用 Timbre 做代理，打 Timbre 时换 AudioSeal 做代理。生成模型都在 LJ Speech 上训练，再到英语、中文、韩语、法语、德语的多语言集合上测，每种语言抽 500 段且说话人不重叠，这样能检验未见说话人下的泛化。

商用部分分两种形态。水印即服务是用户上传音频再嵌入水印，Resemble AI 和 TrustedAudio 属此类，前者用 3 到 12 秒短句，后者用约 20 秒长句。生成式原生水印是文本转语音时直接写入，Google SynthID 属此类，用平台语音合成带不同文本的语音。商用只给二值检出，没有匹配分，所以恢复实验在商用上只做感知恢复。

指标方向要先说清。攻击成功率越高越好，它统计扰动后低于检测阈值的比例。可懂度 STOI 越高越好。主观平均意见分 MOS 在 0 到 5 之间，越高表示听感越好。阈值用各方案默认阈值，附录还做了放宽阈值提高误报率后的敏感性分析。基线包括白盒与黑盒噪声、覆盖攻击、有监督去除和无监督去除，黑盒给 10,000 次查询预算，白盒给 20 分贝信噪比约束。

### 学术水印上的逃避和音质能否兼得

学术实验要回答的核心问题是，在同样零查询、无配对条件下，ScrambleMark 是不是唯一同时保住逃避和音质的方法。下表直接给出 7 种学术水印上的攻击成功率与可懂度对比，成功率越高越好，可懂度越高越好，表中同时保留了白盒、黑盒、覆盖、生成式等多类基线。

| Method | AudioSeal ASR(↑) | AudioSeal STOI(↑) | WavMark ASR(↑) | WavMark STOI(↑) | AudioMarkNet ASR(↑) | AudioMarkNet STOI(↑) | SilentCipher ASR(↑) | SilentCipher STOI(↑) | Collaborative ASR(↑) | Collaborative STOI(↑) | RobustDNN ASR(↑) | RobustDNN STOI(↑) | Timbre* ASR(↑) | Timbre* STOI(↑) | Average ASR(↑) | Average STOI(↑) |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| White-Box-PGD [14] | 0.00 | 1.00 | 0.00 | 1.00 | 0.15 | 1.00 | 0.00 | 1.00 | 0.02 | 1.00 | 0.00 | 1.00 | 0.00 | 1.00 | 0.02 | 1.00 |
| White-Box-I-FGSM [14] | 0.00 | 1.00 | 0.00 | 1.00 | 0.13 | 1.00 | 0.00 | 1.00 | 0.01 | 1.00 | 0.00 | 1.00 | 0.00 | 1.00 | 0.02 | 1.00 |
| Black-Box-HSJA [14] | 0.55 | 0.85 | 1.00 | 0.83 | 0.46 | 0.83 | 1.00 | 0.86 | 1.00 | 0.84 | 0.03 | 0.87 | 0.56 | 0.81 | 0.66 | 0.84 |
| Black-Box-S-HSJA [14] | 0.82 | 0.84 | 1.00 | 0.85 | 0.58 | 0.81 | 1.00 | 0.84 | 1.00 | 0.84 | 0.03 | 0.86 | 0.20 | 0.83 | 0.66 | 0.84 |
| Overwriting Attack [16] | 0.00 | 0.98 | 0.03 | 0.97 | 0.14 | 0.99 | 0.27 | 0.98 | 0.37 | 0.98 | 0.02 | 0.97 | 0.00 | 0.98 | 0.12 | 0.98 |
| SE Attack [15] | 0.63 | 0.98 | 0.18 | 0.99 | 0.05 | 0.99 | 0.26 | 0.99 | 0.21 | 0.99 | 1.00 | 0.98 | 0.00 | 0.98 | 0.33 | 0.99 |
| Harmonic Attack [30] | 0.57 | 0.96 | 0.10 | 0.99 | 0.00 | 0.97 | 0.17 | 0.96 | 0.13 | 0.98 | 0.91 | 0.98 | 0.00 | 0.97 | 0.27 | 0.97 |
| DiffErase-L [17] | 1.00 | 0.70 | 1.00 | 0.72 | 0.93 | 0.70 | 1.00 | 0.70 | 1.00 | 0.67 | 0.93 | 0.68 | 1.00 | 0.73 | 0.98 | 0.70 |
| DiffErase-M [17] | 1.00 | 0.72 | 1.00 | 0.71 | 0.95 | 0.71 | 1.00 | 0.73 | 1.00 | 0.69 | 0.95 | 0.70 | 1.00 | 0.75 | 0.99 | 0.72 |
| Encodec [31] | 0.96 | 0.75 | 1.00 | 0.73 | 0.81 | 0.72 | 1.00 | 0.71 | 1.00 | 0.70 | 0.93 | 0.69 | 0.94 | 0.72 | 0.95 | 0.72 |
| ScrambleMark | 1.00 | 0.91 | 1.00 | 0.90 | 0.98 | 0.88 | 1.00 | 0.92 | 0.96 | 0.90 | 0.86 | 0.93 | 1.00 | 0.91 | 0.97 | 0.91 |

从表中可以看到，ScrambleMark 平均攻击成功率 0.97、可懂度 0.91，在各水印上成功率不低于 0.86、可懂度不低于 0.88。白盒、覆盖、有监督去除保音质但平均成功率大多很低，无监督的 DiffErase-M 平均成功率 0.99、可懂度 0.72，Encodec 平均成功率 0.95、可懂度 0.72，成功率高但可懂度掉到 0.70 到 0.75 区间。这支持论文的判断，攻击打的是共享的谐波结构，而不是某个检测器的局部弱点。

下面这张跨代理热力图把学术模型的稳定性说得更细，读图时重点看行列含义和各行颜色深浅，左侧是成功率而右侧是可懂度。

> **看图路径：** 1. 先看左侧 ASR 热力图行列分别对应目标与代理模型；2. 注意最下一行 RobustDNN 颜色最深但上方也有偏深格；3. 再看右侧 STOI 热力图整体颜色均匀且数值集中在 0.9 附近

[![原论文 Fig. 8：Transferability and fidelity across surrogates.](https://arxiv.org/html/2611.04122v1/transfer_asr_stoi_v2.png)](https://arxiv.org/html/2611.04122v1/transfer_asr_stoi_v2.png)

*论文图 8。原论文 Fig. 8:：“Transferability and fidelity across surrogates.”。*

从像素上可以看到，左侧攻击成功率热力图对角线留空表示代理与目标相同时不测，多数格子接近 1.00，最下一行 RobustDNN 在各代理下颜色最深、数值在 0.81 到 0.85 之间，但上方 Collaborative 和 AudioMarkNet 行也有相对偏深的格子。右侧可懂度热力图整体偏浅且均匀，多数格子在 0.90 上下。这个结论只在默认阈值和上述多语言短句条件下成立，放宽阈值后平均成功率会逐步下滑，但即使在较高误报区间仍能保持约 0.90。

### 商用平台和人听实验看到什么差距

商用平台要回答的是部署系统是否同样会被结构打乱绕过，以及机器可懂度之外人听是否接受。下表比较 3 个商用平台上的平均攻击成功率和可懂度，方向都是越高越好，条件是与学术部分相同的攻击配置，生成式平台另用更多初始子带做暖启动。

| Method | SynthID | SynthID | Resemble AI | Resemble AI | TrustedAudio | TrustedAudio | Average | Average |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Method | ASR(↑) | STOI(↑) | ASR(↑) | STOI(↑) | ASR(↑) | STOI(↑) | ASR(↑) | STOI(↑) |
| White-Box-PGD [14] | 0.00 | 1.00 | 0.00 | 1.00 | 0.15 | 1.00 | 0.05 | 1.00 |
| White-Box-I-FGSM [14] | 0.00 | 1.00 | 0.00 | 1.00 | 0.13 | 1.00 | 0.04 | 1.00 |
| Black-Box-HSJA [14] | 0.79 | 0.87 | 1.00 | 0.83 | 1.00 | 0.77 | 0.93 | 0.82 |
| Black-Box-S-HSJA [14] | 0.38 | 0.83 | 1.00 | 0.85 | 1.00 | 0.79 | 0.79 | 0.82 |
| SE Attack [15] | 0.00 | 1.00 | 0.00 | 0.99 | 0.00 | 0.99 | 0.00 | 0.99 |
| Overwriting Attack [16] | 0.00 | 0.98 | 0.00 | 0.98 | 0.00 | 0.99 | 0.00 | 0.98 |
| HarmonicAttack [30] | 0.00 | 0.95 | 0.00 | 0.98 | 0.00 | 0.97 | 0.00 | 0.97 |
| DiffErase-L [17] | 0.90 | 0.75 | 1.00 | 0.73 | 1.00 | 0.71 | 0.97 | 0.73 |
| DiffErase-M [17] | 0.93 | 0.79 | 1.00 | 0.72 | 1.00 | 0.72 | 0.98 | 0.74 |
| Encodec [31] | 0.90 | 0.78 | 0.98 | 0.73 | 1.00 | 0.69 | 0.96 | 0.73 |
| ScrambleMark | 0.93 | 0.92 | 1.00 | 0.91 | 1.00 | 0.90 | 0.98 | 0.91 |

从表中可以看到，ScrambleMark 平均攻击成功率 0.98、可懂度 0.91，在 SynthID 上 0.93、在另两个平台上 1.00。DiffErase-M 和 Encodec 成功率相近，但可懂度只有 0.74 和 0.73 左右。论文据此算出约 23% 的可懂度提升，这个百分比是相对提升，不是百分点。跨代理分析还显示换代理后平均成功率仍在 0.91 到 0.98 之间，在 TrustedAudio 上多为 1.00，说明商用迁移不依赖某个特定代理。

人听实验只纳入能成功逃避的方法以减轻负担，包括两种 DiffErase 和黑盒 HSJA。24 名听力正常学生在安静环境戴耳机先听原参考再听扰动版，按 0 到 5 打分，每人只评一个平台的 120 段。结果如下表，攻击成功率是 30 段中的成功数，MOS 越高越好。

| Method | SynthID | SynthID | Resemble AI | Resemble AI | TrustedAudio | TrustedAudio | Average | Average |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Method | ASR↑ | MOS↑ | ASR↑ | MOS↑ | ASR↑ | MOS↑ | ASR↑ | MOS↑ |
| Black-Box-HSJA [14] | 29/30 | 1.16 | 30/30 | 1.08 | 30/30 | 1.14 | 98.9% | 1.13 |
| DiffErase-L [17] | 25/30 | 1.52 | 30/30 | 1.35 | 30/30 | 2.29 | 94.4% | 1.72 |
| DiffErase-M [17] | 28/30 | 1.27 | 30/30 | 1.32 | 30/30 | 2.08 | 97.8% | 1.56 |
| ScrambleMark (Ours) | 27/30 | 3.95 | 30/30 | 4.36 | 30/30 | 4.20 | 96.7% | 4.17 |

从表中可以看到，ScrambleMark 平均 MOS 为 4.17，3 个平台分别为 3.95、4.36 和 4.20，平均攻击成功率为 96.7%。最强的基线 DiffErase-L 平均 MOS 只有 1.72。论文还用 Friedman 和配对 Wilcoxon 检验说明优势在被试间一致，而不是少数人拉高分。这个差距比机器可懂度的差距更大，说明自动指标低估了生成式重建带来的听感损伤。但人听集每平台只有 30 段、每组 8 人，结论只在该说话人和文本分布下成立。

### 确定性引擎本身能迁移吗，参数如何取舍

在看完整生成器之前，先要确认确定性打乱器本身是否已经具备跨模型迁移能力，否则后面的生成器就没有可靠的数据来源。下表是代理调参后的确定性打乱器在 3 种未见水印上的直接攻击效果，成功率越高越好，可懂度越高越好。

| Metric | AudioSeal | AudioSeal | WavMark | WavMark | SilentCipher | SilentCipher | Average |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Metric | VoxCeleb1 | VOiCES | VoxCeleb1 | VOiCES | VoxCeleb1 | VOiCES | Average |
| ASR | 0.98 | 1.00 | 1.00 | 0.99 | 0.97 | 0.98 | 0.99 |
| STOI | 0.91 | 0.92 | 0.90 | 0.90 | 0.91 | 0.90 | 0.91 |

从表中可以看到，该引擎平均能达到约 0.99 的攻击成功率和 0.91 的可懂度，在 VoxCeleb1 和 VOiCES 两个数据源上都稳定。这说明学到的是跨方案的共性弱点，而不是只记住代理的局部伪影，因此适合作为生成器的训练数据引擎。它的代价是规则固定，容易被逆向，这正是下一步要用生成器解决的问题。

论文还做了敏感性分析。权重系数越大越保音质但越难逃避，默认值为 1 时得到平衡，调小到 0.25 时成功率升到 0.99 但可懂度掉到 0.81，调大到 2 时成功率掉到 0.90 而可懂度升到 0.94。扩散步数到 50 步后基本饱和，候选强度数从 1 增到 10 时成功率和可懂度都上升。初始频带数影响不大，因为优化都会收敛到约 250 到 300 个频带。多水印下同时逃过全部 10 个检测器的比例仍在 0.90 以上，但鲁棒优先顺序是最强的防御组合。

### 自适应恢复能把打乱逆回去吗

自适应防御假设防御者知道算法并拿到原始含水印语音做参考，用同样的分频段算子做贪心恢复。恢复目标分两种，感知恢复让恢复音频的梅尔损失最小，比特恢复让恢复音频与参考音频的检出比特尽量一致。商用平台只有二值输出，所以只做感知恢复。比特恢复在 RobustDNN 上会把误报率抬到 1.00，因此该模型只用感知恢复。

论文报告的落差是恢复前后成功率的差值，落差越小表示越抗恢复。学术水印上确定性打乱器平均掉 0.88，而 ScrambleMark 只掉 0.04。商用平台上对应落差为 0.85 和 0.02。论文把原因归于学习到的随机分布没有暴露确定性逆变换路径，相邻频带合并也让粗逆变换难以分离。

但这组恢复只搜了 500 等宽频带、15 音分步长的贪心空间，更强的检测器感知恢复或带检测反馈的强度搜索还没有测，论文自己也说这值得进一步研究。其他限制包括推理要在 10 个强度各生成一次，单候选约 0.41 秒，十候选加选择约 5 秒，峰值显存过 1000 兆字节，实时性一般。统计重复 15 次的方差虽小，但人听样本和商用样本量都不大。

### 要复现第一步该做什么，需要哪些信息条件

复现先从代理闭环做起，而不是直接去碰商用平台。第一步是用公开实现在本地搭一个代理水印，比如 Timbre，随机嵌入 10 比特消息，再实现分频段移频算子和交替的划分频移优化，目标是代理匹配分加梅尔谱距离最小。这一步能验证核心机制，如果全频段谐波扰动不能让代理匹配分掉下来，后面的生成器就没有意义。

接着按强度区间生成打乱数据集，默认 10 个强度级、每级每条语音 100 个样本、区间宽 60 音分，再在 LJ Speech 上预训练 DiffWave 后微调。微调要用随机批量和随机时间片段两种随机性，否则容易退回固定图案。推理时枚举强度各生成一个候选再选损失最小者。关键超参数是平衡权重、扩散步数和候选数，原文默认值是平衡权重为 1、微调 50 步扩散、10 个候选。

信息条件必须卡严。攻击时只能用单条待攻击语音，不能查目标检测器，不能用配对干净语音和目标说话人干净语音。训练和调参只能用公开语音和代理水印。商用复现还要注意测试集构造差异，短句和长句、合成语音和上传语音不能混用。论文没有提供可运行代码和权重可下载的证据，本解读按来源未确认处理，不声称作者已开源。

### 什么时候值得尝试，结论的边界在哪里

如果你在做语音水印的鲁棒性评估，且只能拿到待测音频、拿不到检测器反馈和配对数据，这篇论文值得一读。它把问题从找水印位置改成破坏结构一致性，给出了一条可操作的谐波打乱路线。在默认阈值、多语言短句和所测 10 种水印条件下，它是少数同时给出高逃避和高听感的方案，人听分达到 4 分档而基线多在 1 到 2 分档。

但结论有明确边界。它没有证明所有水印都怕谐波打乱，RobustDNN 和放宽阈值后的结果已经显示成功率会下滑。它也没有证明恢复不可能，只是证明在当前贪心频移恢复下很难。多水印鲁棒优先顺序仍能把同时逃避率压到 0.90。推理开销和数据分布外推仍是代价。

还需要补的验证是更大规模的人听和更多口音、信道、压缩条件下的测试，以及针对更强恢复模型的对抗评估。把这篇工作当成结构扰动的起点工具更合适，而不是水印已经完全失效的终局判断。

<details>
<summary>📎 论文与评分元数据</summary>

排名：前50% | 文档类型：方法研究 | [arXiv 原文](https://arxiv.org/abs/2611.04122v1)

</details>

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。

- 评分规则：type-aware-v1

- 评分模型：muse-spark-1.3-contributor

- 评分请求协议：openai_responses

---

[← 返回 2026-11-04 语音/音乐/音频论文速递](/audio-paper-digest-blog/posts/2026-11-04/)
