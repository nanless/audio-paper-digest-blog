---
title: "Out of Sight, Still in Mind: Token Compression for Omni-LLMs"
date: 2026-11-19
draft: false
tags: [音视频问答, 模型压缩, 音视频, 高效推理]
categories: [论文速递]
description: "针对 Omni 大模型视觉 Token 占九成以上导致推理代价过高的问题，ReMo 在不训练的情况下用音频对齐删冗余视觉 Token 并用带位置的物体词代理补回语义，在 54% 左右的全序列压缩下保持与全量输入相当的精度，但效果依赖音频视频确有重叠且检测器基本正确。"
hiddenInHomeList: true
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_arxiv_id: "2607.21179"
paper_digest_workbench_contract: "researcher-workbench"
paper_digest_workbench_schema_fingerprint: "1f09b594c317cc38e934de27a5b0e8ceb4baa50ef79bd4f8683dd9adea720fe7"
paper_digest_reader_title: "看不见也能记得：把视觉信息分流到音频和文字的 Token 压缩"
paper_digest_original_title: "Out of Sight, Still in Mind: Token Compression for Omni-LLMs"
paper_digest_arxiv_version: null
paper_digest_arxiv_versioned_id: null
paper_digest_arxiv_abs_url: "https://arxiv.org/abs/2607.21179"
paper_digest_arxiv_pdf_url: "https://arxiv.org/pdf/2607.21179.pdf"
paper_digest_primary_task: "音视频问答"
paper_digest_tags_contract: "paper-tag-flat-tags"
paper_digest_tags_schema_fingerprint: "27e36280a4b8d3df62ebe54d3ab037920f4d69feb2b554163f01bbae2caf4338"
paper_digest_tags_selection_contract: "paper-tag-selection"
paper_digest_tags_registry_version: "paper-tag-catalog"
paper_digest_tags_registry_sha256: "9673bc0122e1905a5dcfd8b223675400cc2fa4c36095bc0e5f817edf99a0ec5c"
paper_digest_tags_concepts: [{"facet":"task","id":"task.av-question-answering","label":"音视频问答"},{"facet":"method","id":"method.compression","label":"模型压缩"},{"facet":"signal","id":"signal.audiovisual","label":"音视频"},{"facet":"research_focus","id":"research_focus.efficiency","label":"高效推理"}]
paper_digest_primary_method: "模型压缩"
paper_digest_score: 6.6
paper_digest_rank_bucket: "前50%"
paper_digest_document_type: "方法研究"
paper_digest_one_sentence: "针对 Omni 大模型视觉 Token 占九成以上导致推理代价过高的问题，ReMo 在不训练的情况下用音频对齐删冗余视觉 Token 并用带位置的物体词代理补回语义，在 54% 左右的全序列压缩下保持与全量输入相当的精度，但效果依赖音频视频确有重叠且检测器基本正确。"
paper_digest_authors: [{"affiliations":["KAIST"],"name":"Suho Yoo"},{"affiliations":["KAIST","VGG, University of Oxford"],"name":"Youngjoon Jang"},{"affiliations":["KAIST"],"name":"Hyebin Cho"},{"affiliations":["KAIST"],"name":"Joon Son Chung"}]
paper_digest_abstract_sha256: "9815fe18f5d2558d9fa002b99902d361182d89c6d7cea0be452de3186ad407c2"
paper_digest_sidecars: {"citation.bib":{"sha256":"ce56a09585708cc42d9cb98626aa8213598859b194aa6acdf624f95844e9867f","url":"/audio-paper-digest-blog/client/papers/2026-11-19/2607-21179/citation.bib"},"citation.json":{"sha256":"2addddc0936f0beea5ea39e3e978d466fd0c997472c2cb451937793d08a83836","url":"/audio-paper-digest-blog/client/papers/2026-11-19/2607-21179/citation.json"},"citation.ris":{"sha256":"becdf198bc12cde619196f8748d1015d2221cbb52002023938da8b5ba2d446ac","url":"/audio-paper-digest-blog/client/papers/2026-11-19/2607-21179/citation.ris"},"rethink-context.json":{"contract":"paper-research-context","schemaFingerprint":"5d4e79f7d3ee65b39ccb38281548bf20a1b2041ab7a27625eaf97ab9909a8383","sha256":"3e954578c4b19fab9f33babbfda7a792a6ff27cffd2f21918f175aee6d7685d5","url":"/audio-paper-digest-blog/client/papers/2026-11-19/2607-21179/rethink-context.json"}}
paper_digest_api_reader_contract: "beginner-researcher"
paper_digest_api_reader_schema_fingerprint: "cd8baf5b8bda3a49eec64f6005931af63de4e9a13148cba5f354c661ca6e9df2"
paper_digest_api_reader_article_sha256: "31c60d0fd7cda9b96097376aa0c41bf98a553b34896daecc5d9d726ba6f25694"
paper_digest_api_reader_plan_sha256: "e44dda48aaccd1161e3438d90226a0dcd7383573c08ea121f0523e48d39b0f32"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings"
paper_digest_api_reader_source_binding_schema_fingerprint: "d2a2607a6e561909473022eb43f56332ee357af8568566a095c29083ffdec9cc"
paper_digest_api_reader_source_bindings_sha256: "d7e796350bd713630baeafc733648faa3b16596b1ceeac2405382110e08138d1"
paper_digest_api_reader_source_table_count: 4
paper_digest_api_reader_source_formula_count: 5
paper_digest_api_reader_structured_artifacts_sha256: "98edaf892576ef94bfe46eaeabc3de9718b24edea96aeeb59a1eac0857ee557f"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity"
paper_digest_api_reader_author_identity_schema_fingerprint: "1e3fd3a9a56c9a5bf52df8df5022690b9a3fa92e83e934f295af87c0e258ed2f"
paper_digest_api_reader_author_identity_sha256: "87a89d375af50fd280308b2022423bbba57ce0a7dbec4f27e70a120d814b2ce7"
paper_digest_api_reader_author_count: 4
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity"
paper_digest_api_reader_resource_identity_schema_fingerprint: "33b0be17118be61f39b85ce690c8da17e91f2864bb65e85284f60c40067328e0"
paper_digest_api_reader_resource_identity_sha256: "12b99f2226cf3950033b6b4be6bd153b08a4b64887f608d7decbc14d5638cedc"
paper_digest_api_reader_resource_count: 2
paper_digest_api_reader_figure_persistence: "ephemeral-no-persisted-figure-assets-v1"
paper_digest_api_reader_decision_projection: "api-reader-decision-projection"
paper_digest_api_reader_decision_projection_schema_fingerprint: "e56feb5ab75c8710904916b898f73dab9bb18bdf65bb60b7ed2edf7f99cea860"
---

# 📄 看不见也能记得：把视觉信息分流到音频和文字的 Token 压缩

> 英文题目：*[Out of Sight, Still in Mind: Token Compression for Omni-LLMs](https://arxiv.org/abs/2607.21179)*

<!--paper-tag-hierarchy-v1:start-->

**研究分类**

- **研究任务**：[音视频理解](/audio-paper-digest-blog/papers/?concept=task.av-understanding) → [音视频问答](/audio-paper-digest-blog/papers/?concept=task.av-question-answering)
- **研究方法**：[模型压缩](/audio-paper-digest-blog/papers/?concept=method.compression)
- **信号**：[音视频](/audio-paper-digest-blog/papers/?concept=signal.audiovisual)
- **研究重点**：[高效推理](/audio-paper-digest-blog/papers/?concept=research_focus.efficiency)

<!--paper-tag-hierarchy-v1:end-->

> 评分：**6.6/10** | 创新 1.4/2 | 技术严谨 1.1/1.5 | 实验充分 1.2/1.5 | 清晰度 0.8/1 | 影响力 0.8/1.5 | 开源 0/1.5 | 可复现 0.3/0.5 | 工程/实践 1/1.5


## 👥 作者与机构

- Suho Yoo：KAIST
- Youngjoon Jang：KAIST；VGG, University of Oxford
- Hyebin Cho：KAIST
- Joon Son Chung：KAIST

## 📌 核心摘要

全模态大语言模型把音频、视频和文本按时间块拼成一个长序列交给解码器，视频标记占输入九成以上，注意力开销随长度快速增长。本文要解决的是推理时去掉冗余视觉标记又不丢失问答语义。把压缩看成跨模态再分配、只保留别处无法恢复的视觉信息的做法，本文称为ReMo。先把音频表示和视觉标记经闭式校准映射到可比的同一空间以度量重叠，输出融合音频相似度与块内视觉相似度的显著性分数，送入筛选删去两者都认为常见的标记。再用轻量检测器提取物体类别并输出紧凑文字代理，每个代理按物体区域质心赋予时间与空间位置，随块输入以替代原视频标记承载物体语义。最后用邻域差异补回边缘纹理的局部细节，并对相邻块高度重复标记做加权合并，减少对原始嵌入直接比较和外部大型编码器的依赖。以54%的输入压缩率计，在五个音视频基准平均上本文方法在3B规模ACC相对值为101.2%、7B规模为101.4%，均高于完整输入模型，在World基准上本文方法的ACC为47.8，高于同标记预算下按显著性复活视频标记对照的47.3。该结论仅在Qwen2.5-Omni免训练推理及所测问答基准上验证，长视频与流式评测趋势一致，在MME上Nano检测器额外占0.44 GiB显存、耗时0.12秒，选择预算等压缩强度仍需人工设定，检测器错标、漏检或强调干扰属性时会误导推理，完整视频上加代理几乎无增益，超出所测基准与压缩率外的泛化尚未验证。

## 🔗 开源与复现资源

- 第三方资源：<https://github.com/suho-yoo/ReMo> — 暂时无法访问

- 第三方资源：<https://github.com/bytedance/video-SALMONN-2> — 链接可访问（HTTP 200）

可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### Omni 模型一次要读多少东西，为什么视觉最占地方

刚接触音视频理解的同学可以先把 Omni 大模型想成一个能同时听、看、读的语言模型。它前面有各自的编码器：文本按字节对分词，音频先转成梅尔频谱再按短窗变成一串音频 Token，视频则按帧切成图像块再变成视觉 Token，最后把 3 路 Token 拼成一个长序列送给同一个解码器。

论文用的 Qwen2.5-Omni 把时间轴切成固定时长的块，每个块先放该时间段的视觉 Token 再放音频 Token，整体写作 X=[V1,A1,V2,A2,…,VT,AT] 的形式，块内视觉和音频在时间上是对齐的。位置编码用的是 TMRoPE，也就是在时间、高、宽 3 个轴上分别做旋转位置编码，文本三轴共用一个序号，音频只走时间轴，视频按块网格取空间序号而时间序号跟随真实时间。

关键的不平衡在于数量。论文统计 4 个短视频基准上视觉 Token 占到全序列的 90% 以上，总体平均约 92.3%，音频只占约 6.6%，文本约 1.1%。例如 WorldSense 平均每题约 14126.3 个 Token，其中视觉约 12842.5 个，音频约 1106.0 个，文本约 177.8 个。当序列长到上万时，注意力的平方代价就成为延迟和显存的主要瓶颈，这也是论文只盯着压缩视觉 Token 的原因：省视觉最划算，音频则被完整保留。

### 已有压缩路线为什么没有直接解决跨模态冗余

把输入变短的思路在纯视觉语言模型里已经很多，比如按早期注意力剪枝、合并相似 Token、只留主导 Token，但它们不考虑音频，不知道哪些画面已经被声音解释了。最近针对 Omni 模型的压缩才开始利用跨模态关系，大致分两类。

一类需要训练，例如学一个专用压缩模块或学一个音频能解释哪些画面的预测器，换一个骨干模型就要重新训练。另一类免训练，直接在输入层或解码器中途剪枝。DASH 用音频边界选重要视频帧，OmniZip 用原始音频视觉嵌入的余弦相似度估计冗余，OmniScope 和 OmniSelect 则搬来外部的 CLIP 或 AudioCLIP 编码器打分，FastV 和 OmniDrop 靠解码器内的注意力渐进剪枝。

论文指出的难点是模态间隙：即使编码器想对齐音频和视频，它们的嵌入仍落在表示空间的不同区域，直接算原始余弦并不可靠。OmniZip 恰好踩在这个假设上，而靠外部大编码器又引入额外代价。ReMo 的定位就是免训练、输入层压缩、保留全部音频，只压视觉，并且不用大外部编码器，而是用 1 次性的闭式校准把两边拉到可比空间，再用文字把物体级语义接过去。

### 论文到底要省什么，又必须保住什么

任务很具体：在推理时减少 Omni 大模型的输入 Token 开销，同时不明显损失音视频理解和描述能力。输入是一段带声音的视频加一个文字问题，输出是选项回答或一句描述。必须保住的信息有 3 类：声音本身带来的事件线索，画面中声音解释不了的稀有视觉细节，以及被删画面里原本含有的物体身份和位置。

ReMo 把压缩理解为再分配而非简单删除：一个视觉 Token 只有当它的信息在别处找不到时才值得保留。如果画面内容能从同块音频推出来，或者在同块视觉平均中已很常见，就优先删掉；如果删掉的是物体这种用词能说清的内容，就用极短的文字补回来；如果删错了局部边缘纹理，再从丢弃集合里捞回一点；如果相邻时间块重复，再合并。

**Omni 大模型 × 输入 Token 压缩：** Omni 大模型指同时读文本、音频、视频并用一个语言模型解码器联合推理的模型，输入 Token 压缩指在送入解码器之前缩短这个多模态序列；二者搭配的意义是保留联合推理能力的同时，把占主导的视觉部分变短，从而直接降低注意力计算的显存和延迟。

### ReMo 如何把一个长序列变短

沿着一个样本走一遍会更清楚。假设一段几十秒的视频按 2 帧每秒采样并配上音频，按块拼成上万 Token。ReMo 在送入解码器之前做四件事：先给每个视觉 Token 打一个残差显著性分，分数越低说明越能被音频或同块视觉解释；按分数只留每块前 40% 左右的视觉 Token；用轻量检测器把物体名变成文本代理插回各块开头；再从丢弃集合中按局部差异捞回 5% 左右的 Token，并把相邻块同位置相似的 Token 合并。

下图把这条主线画得很直白，左边是音频和视频两路，中间是共同空间投影和冗余剪枝，下面是物体检测，右边是剪枝后的稀疏画面加黄色文本代理。读图时不要把箭头理解为训练梯度，全程没有梯度更新，只是 1 次前向的打分、筛选、插入和合并。

> **看图路径：** 1. 先看左侧音频波形和视频帧如何同时指向中间的共同空间；2. 再看右侧被涂黑的剪枝 Token 与黄色文本代理的对应关系；3. 注意下方物体检测框如何为代理提供 person 和 violin 两个词

[![原论文 Figure 1：Cross-modal redistribution. A large fraction of visual tokens in an Omni-LLM are redundant.](https://arxiv.org/html/2607.21179v2/teaser.png)](https://arxiv.org/html/2607.21179v2/teaser.png)

*论文图 1。原论文 Figure 1:：“Cross-modal redistribution. A large fraction of visual tokens in an Omni-LLM are redundant.”。*

这张图确实可见的是：大量黑色块表示被剪掉的视觉 Token，只留下少数画面细节，而 person 和 violin 两个黄框词站在原物体附近，示意被删的语义并没有消失，而是换了一种更短的载体。这种先删后补的顺序是理解后面所有对照的关键。

### 音频和画面本来比不了，投影如何让它们可比

第一个拦路虎是音频嵌入和视觉嵌入不在一个几何里。论文的做法是 1 次性在 VGGSound 训练集上取 5000 对配对的音频视觉嵌入，先各自去均值并用正则化协方差逆平方根做白化，再对白化后的交叉协方差做奇异值分解，保留前 K=512 个典型方向并按典型相关系数开方加权，得到两边的投影矩阵 Pa 和 Pv。推理时把块平均音频和每个视觉 Token 分别减均值再乘上对应矩阵，就得到共同空间中的 zta 和 zt,jv。

\[P_{a}=W_{a}\,U_{K}\,\Sigma_{K}^{1/2},\qquad P_{v}=W_{v}\,Q_{K}\,\Sigma_{K}^{1/2}.\]

有了可比表示，打分就很直接。视觉常见度用该 Token 与块均值的余弦距离表示，越像平均背景分越低；音频可解释度用投影后视觉 Token 与块音频锚点的余弦距离表示，越像声音分越低。两者量纲不同，论文按块内平均大小自适应加权合成最终显著性 st,j，预算内分数最高的留下，其余先丢掉。默认选择预算 rho_av=0.4，局部恢复预算 rho_l=0.05，时间合并阈值 tau=0.05。

\[s_{t,j}=(1-\beta_{t})\,s^{\mathrm{vis}}_{t,j}+\beta_{t}\,s^{\mathrm{aud}}_{t,j},\qquad\beta_{t}=\frac{\bar{s}^{\mathrm{vis}}_{t}}{\bar{s}^{\mathrm{vis}}_{t}+\bar{s}^{\mathrm{aud}}_{t}},\]

**跨模态投影 × 残差显著性：** 跨模态投影指把音频和视觉嵌入映射到同一个可比空间的计算，残差显著性指每个视觉 Token 与音频锚点和块内平均视觉的距离加权分；投影解决两边本来不在同一区域无法直接比相似度的问题，显著性再用投影后的距离决定谁该留，组合后只有音频和视觉都解释不了的 Token 才被保留。

下图左栏画的是编码器到共同空间的映射，中栏画的是两个距离如何合成一个分数并按分数丢 Token。右栏提前剧透了后面的恢复与合并，但本节先抓住核心：投影只建 1 次、推理时复用，不需要优化器。

> **看图路径：** 1. 对照左中右三栏分别对应投影、显著性剪枝、代理注入与恢复合并；2. 看中间残差显著性如何把音频可解释距离和视觉常见距离合成一个分数；3. 看右下时间合并的加权融合公式保留了显著性更高的那一侧

[![原论文 Figure 2：Overview of ReMo. ReMo prunes video tokens before the LLM decoder while preserving broad…](https://arxiv.org/html/2607.21179v2/main.png)](https://arxiv.org/html/2607.21179v2/main.png)

*论文图 2。原论文 Figure 2:：“Overview of ReMo. ReMo prunes video tokens before the LLM decoder while preserving broad audio–visual context.”。*

投影是否真的对齐了，需要看数据。论文在 VGGSound 测试集上做音频到视频检索，每个音频找对应视频。原始空间在 3B 上 R@1 只有 2.7，中位排名 62，几乎不可用；投影后 R@1 升到 31.3，中位排名降到 4。7B 上也有从 5.0 到 35.6、中位排名从 52 到 3 的类似变化。这说明跨模态相似度在共同空间里才有意义，是后面剪枝分的前提。

> **看图路径：** 1. 比较左侧原始空间中音频点团与视频点团的分离位置和 spread；2. 观察右侧共同空间中两色点是否真正混叠而非仅靠拢；3. 结合坐标轴从主成分变为典型相关分量理解可比性的来源

[![原论文 Figure 3：Audio and visual embeddings on VGGSound test set.](https://arxiv.org/html/2607.21179v2/pca_vs_ccaW.png)](https://arxiv.org/html/2607.21179v2/pca_vs_ccaW.png)

*论文图 3。原论文 Figure 3:：“Audio and visual embeddings on VGGSound test set.”。*

这张散点图左侧原始空间里红色音频团和蓝色视频团明显分离且 spread 不同，右侧沿前两个典型分量画出的投影点则大面积混叠。颜色相同不代表对象相同，这里要看的是分布是否重叠，而右侧确实重叠了，才敢用音频距离去判断画面是否冗余。

### 被删掉的物体名如何用几个词补回来

只按分数剪枝会丢掉物体级语义，而这类语义用词说出来很便宜。论文用轻量 YOLO 在每块帧上检测，得到类别 ci 和区域掩码 mi，再把类别词通过模型的文本嵌入变成文本代理 pi。关键是位置：不让代理像普通文本那样三轴共用同一序号，而是把时间序号固定在所属块 t，空间序号取掩码质心的(hi,wi)，写作 pos(pi)=(t,hi,wi)，让保留的视觉 Token 在注意力中能按原位置读到这个词。代理被前置到所属块保留视觉 Token 之前，形成先给紧凑摘要再给残留细节的块结构。

\[\operatorname{pos}(p_{i})=(t,h_{i},w_{i}).\]

**文本代理 × TMRoPE 位置：** 文本代理指把检测到的物体类别词通过文本嵌入变成的极短 Token，TMRoPE 位置指 Omni 模型用的时间加高加宽三轴旋转位置；代理负责用几个词说出被删掉的物体是什么，TMRoPE 负责把这个词放在原物体的时间和空间格点上，组合后解码器能像读放在原处的标签一样读到物体身份和位置。

平均下来每个样本原本约 19355 个视频 Token，丢掉约 11425 个约 59%，而补回的类别词平均只有 65 个，丢掉与注入之比约 176 比 1。这就是论文所说几词代替多像素的具体含义：不是 1 对一替换，而是用一个词概括一大片冗余区域的共享语义。

为什么不用长描述而用物体词，附录给了对照。直接注入视觉和音频描述的全文会打乱训练时见过的音视频交错结构，在 3B 上反而掉约 4.0 和 3.8 个点；而只保留与检测器交集的物体词则与当前做法相当，用大描述模型换检测器也没有稳定增益，只是更贵。所以用小检测器加类别词是精度和代价的折中。

### 压掉的边缘纹理和重复帧如何再处理

余弦显著性偏向全局相似，容易压掉局部结构。论文对每个 Token 算它与四邻的平均欧氏距离 dt,jl，差异越大越可能是边缘或纹理，再从丢弃集合 Dt 中按该分数捞回前 rho_l 比例。四邻而非八邻更好，八邻把对角也平均进来会模糊真正的局部差异。

\[d^{l}_{t,j}=\tfrac{1}{|\mathcal{N}(j)|}\sum_{k\in\mathcal{N}(j)}\lVert v_{t,j}-v_{t,k}\rVert_{2},\]

时间上相邻块常重复。论文用两块滑动窗看同位置 Token 的余弦距离 dt,jtmp，若小于 tau 且该对的最小显著性低于窗内中位数，就按显著性加权融合成一个 Token 并写回显著性更高的槽位，偏向保留残差信息更多的一侧。默认 tau=0.05 在大压缩时会调高到 0.25 以允许更多合并。

\[\tilde{v}_{t,j}=\frac{s_{t,j}\,v_{t,j}+s_{t+1,j}\,v_{t+1,j}}{s_{t,j}+s_{t+1,j}},\]

**局部细节恢复 × 时间合并：** 局部细节恢复指从已丢弃集合中按与四邻差异挑回边缘纹理 Token 的操作，时间合并指把相邻时间块中同位置且相似的保留 Token 融合成一个的操作；前者补回全局相似度容易压掉的局部结构，后者去掉时间上的重复，组合后在不增加语义损失的前提下再省 Token。

这两步都不需要训练。恢复针对的是空间上少见但重要的细节，合并针对的是时间上多余的重复，分工不同。消融显示去掉恢复在 WorldSense 上下降最多，去掉合并则压缩率下降约两个百分点而精度几乎不动，说明前者保精度，后者省 Token。

### 在什么数据和预算下比较，指标方向是什么

评测用 4 个音视频理解基准 WorldSense、DailyOmni、Video-MME、OmniVideoBench 和一个描述基准 video-SALMONN 2 测试集。因单卡显存限制，长视频只取 1 分钟以内的问答对。每个基准报告准确率，描述基准误差越低越好，汇总的 Avg 把每个基准相对全量模型归一到 100 再平均，描述基准用反比。Comp 是相对完整输入序列的平均压缩率，越高省得越多。

骨干是 Qwen2.5-Omni 的 3B 和 7B，另有 Qwen3-Omni-30B 的 Instruct 和 Thinking 两种变体以及 SALMONN2+ 和 Pro 的扩展。投影只建 1 次，超参数全基准固定。基线都是免训练可运行策略：随机删、FastV 按注意力剪、OmniZip 按原始相似度剪、DASH 按音频变化分配预算、OmniScope 按文本查询分模态预算、OmniSelect 按 AudioCLIP 判断音频或视频主导。所有实验 3B 和 7B 在单张 48 GB 的 A6000 上跑，长视频和流式因全量太长用 4 卡，Qwen3-30B 用 96 GB 单卡。

理解指标方向很重要：理解基准分数越高越好，描述误差越低越好，Avg 越高越好，Comp 越高越省，显存和延迟越低越好。后面看到 101.2% 这类超过 100 的 Avg，不是说超过满分，而是指相对全量模型的归一平均略高，可能来自剪枝去噪或波动，需要看置信区间再判断。

### 省一半 Token 后精度和开销发生了什么

先看要回答的核心问题：在与最强免训练基线相当的压缩下，能否保持全量精度。论文报告在 Qwen2.5-Omni 上 ReMo 去掉约 54% 的输入 Token，在 3B 和 7B 上达到全量平均精度的 101.2% 和 101.4%，而所有对照都低于全量，最强的 3B 上 DASH 为 99.4%，7B 上 OmniScope 为 99.7%。分基准看 3B 的 Video-MME 从 75.8 到 77.5，7B 的 OmniVideoBench 从 47.6 到 49.4 提升较明显，描述误差也低于全量。Qwen3-30B 上去掉 57% 后 Instruct 为 100.7%，Thinking 为 100.2%，同样高于同压缩的 OmniZip。

**压缩率 × 平均精度：** 压缩率指相对完整输入序列省掉的 Token 比例，平均精度指把每个基准相对全量模型的分数归一后再平均；前者衡量省了多少输入，后者衡量在不同任务量纲下总体保持了多少能力，组合后才能判断省 Token 是否以可接受的精度为代价。

下面先验证投影本身是否让跨模态相似度可用。比较问题是同一 VGGSound 测试集上原始嵌入与投影后嵌入的音频到视频检索谁更准，条件是每类抽 1 对音频视频并平均 50 个采样种子，指标是 R@1 越高越好，中位排名越低越好。

| Method | R@1↑ | R@5↑ | R@10↑ | MedR↓ |
| --- | --- | --- | --- | --- |
| Qwen2.5-Omni3B |  |  |  |  |
| Raw | 2.7 | 10.0 | 16.5 | 62 |
| Ours | 31.3 | 58.0 | 67.3 | 4 |
| Qwen2.5-Omni7B |  |  |  |  |
| Raw | 5.0 | 14.3 | 21.0 | 52 |
| Ours | 35.6 | 64.0 | 73.4 | 3 |

这张表支撑的判断是投影让跨模态相似度从不可用到可用，但它不直接等于问答精度的提升幅度。因为最终显著性是视觉和音频的加权，投影只改变其中一项且只翻转约 7% 的留存决策，所以检索提升很大而问答提升温和。读者应把它和后面的消融对照起来看，而不是单独当成端到端效果。

接下来看推理代价是否真省了。比较问题是在 MME 上各免训练方法与全量模型的显存和延迟对比，条件是同一单卡与同一输入，指标是显存越低越好，延迟越低越好，相对耗时越低越好。

| Method | GPU Mem.↓ (GiB) | Latency↓ (sec) | Rel.↓ |
| --- | --- | --- | --- |
| Qwen2.5-Omni3B |  |  |  |
| Full Token | 19.0 | 6.9 | 1.00 |
| FastV | 14.2 | 5.0 | 0.72 |
| OmniZip | 13.5 | 4.6 | 0.67 |
| DASH | 13.6 | 4.7 | 0.68 |
| OmniScope | 14.3 | 5.9 | 0.86 |
| OmniSelect | 14.4 | 5.0 | 0.72 |
| Ours | 13.6 | 4.7 | 0.68 |
| Qwen2.5-Omni7B |  |  |  |
| Full Token | 27.7 | 9.8 | 1.00 |
| FastV | 22.6 | 6.7 | 0.68 |
| OmniZip | 21.8 | 5.9 | 0.60 |
| DASH | 21.9 | 5.9 | 0.60 |
| OmniScope | 22.7 | 7.2 | 0.73 |
| OmniSelect | 22.7 | 6.1 | 0.62 |
| Ours | 21.9 | 6.0 | 0.61 |

该表支撑的判断是 ReMo 在延迟和显存上贴近最省的 OmniZip，在 3B 上仅差 0.1 以内，在 7B 上同样接近，而精度明显更高。代价是仍需运行轻量检测器，但其开销已计入表中。限制是该对比只在 MME 与固定硬件下测得，换基准或批量大小时绝对数值会变，相对顺序才更有参考价值。

最后看大模型迁移是否成立。比较问题是在 Qwen3-Omni-30B 的 Instruct 与 Thinking 两种变体上，同压缩下谁更接近全量，指标是各基准准确率越高越好，平均值是相对全量的归一均值越高越好。

| Method | Comp.↑(%) | World.↑ | Daily.↑ | MME↑ | OmniVid.↑ | Avg.↑(%) |
| --- | --- | --- | --- | --- | --- | --- |
| Qwen3-Omni-30BInstruct |  |  |  |  |  |  |
| Full Token | 0 | 53.6 | 69.3 | 84.8 | 48.2 | 100.0 |
| Random | 50 | 52.2 | 66.6 | 84.0 | 47.0 | 97.5 |
| OmniZip (CVPR’26) | 58 | 53.2 | 67.6 | 83.5 | 48.8 | 99.1 |
| Ours | 57 | 53.3 | 67.7 | 84.4 | 51.2 | 100.7 |
| Qwen3-Omni-30BThinking |  |  |  |  |  |  |
| Full Token | 0 | 53.9 | 63.5 | 84.4 | 48.2 | 100.0 |
| Random | 50 | 49.6 | 62.2 | 81.0 | 44.0 | 94.3 |
| OmniZip (CVPR’26) | 58 | 54.4 | 63.1 | 82.7 | 47.6 | 99.3 |
| Ours | 57 | 54.6 | 63.8 | 83.5 | 48.2 | 100.2 |

该表支撑的判断是在大 10 倍的骨干上同样省约五成七输入并与全量持平，且高于同压缩的 OmniZip。限制是此处只对比了 OmniZip 一种可运行基线，长视频与流式结论另需多卡评测，不能把短视频的持平直接推广到无声或强依赖细节的任务。

### 哪些部件真的在起作用，文本代理何时才有效

消融 1 次去掉一个部件，最能看清分工。总体看两个恢复机制最重要。去掉局部细节恢复后，在 WorldSense 上下降约 1.4 个百分点，在 DailyOmni 上下降约 0.8 个百分点，同时压缩率反而升至 56% 左右，说明被捞回的边缘纹理确实承载精度。去掉文本代理后，两个基准分别下降约 1.1 和 1.2 个百分点，而压缩率升至 55% 左右，说明代理确实承载语义而非占位。

去掉代理位置、去掉投影、去掉时间合并只带来小幅变化，其中时间合并主要换压缩而非精度，去掉后压缩率下降约两个百分点而均值几乎不动。统计上附录用多种子与自助法显示，去掉前四项在名义 0.05 水平下显著，去掉合并则不显著。

下面对比同等预算下用词好还是用原视频 Token 好。比较问题是在检测区域内复活同等数量视频 Token 能否替代文本代理，条件是复活数量与代理平均新增词数对齐约 70 个，指标是 2 基准准确率越高越好，压缩率相同。

| Method | World.↑ | Daily.↑ | Nadd | Comp.↑ |
| --- | --- | --- | --- | --- |
| Full Token | 47.7 | 57.7 | - | 0 |
| Random | 47.2 | 57.2 | 70 | 54 |
| Saliency | 47.3 | 57.3 | 70 | 54 |
| Ours | 47.8 | 58.3 | 70 | 54 |

这张表支撑的判断是在检测区域内复活同等数量视频 Token 不如直接给词，随机或按显著性复活都低于文本代理约 0.5 到一个百分点。另一组对照显示在全量视频上再加代理几乎不变，而在随机一半剪枝上加代理能回升 2.5 和 3.6 个百分点，且带空间位置的三元组好于无空间位置的版本。高斯噪声代理反而比删掉代理更差，说明起作用的是语义内容而非注意力汇点。

谁在用这些词也值得看。限制哪些 Token 能看到代理的对照显示，全部放开最好，只允许音视频访问或只允许文本访问都会下降 0.4 到一个百分点左右，说明代理是共享上下文而非只服务某一类 Token。注意力分析也显示注入文本在多数层的平均注意力高于视频 Token，而最大注意力时有起伏，表明是被广泛读取而非靠少数头。这些结论的边界是都只在短视频 2 基准和 3B 上测得，换基准或规模时相对重要性可能变化。

### 什么时候会错，代价和未测的范围是什么

论文没有回避失败。下图 3 组例子都是全量对而本方法错：新闻例中 tie 这个词突出了错误选项的属性而正确答案在背景里，种子店例中 book、tv、suitcase 等错误标签把模型带向店内陈列而错过指间种子的动作，雪地车例中检测器只找到三辆中的一辆并标成 car，导致计数答成一辆。共同点是代理会强调干扰属性并把检测器的错标签和漏检直接传给推理。

> **看图路径：** 1. 看每组上方全量模型的正确选项与下方本方法的错误选项；2. 注意橙色代理标签中 tie、book、car 等词出现在什么画面位置；3. 观察黑色剪枝块覆盖后模型还能依赖哪些残留视觉证据

[![原论文 Figure J.2：Figure J.2: Failure cases of semantic offloading.](https://arxiv.org/html/2607.21179v2/failure_case.png)](https://arxiv.org/html/2607.21179v2/failure_case.png)

*论文图 8。原论文 Figure J.2:：“Figure J.2: Failure cases of semantic offloading.”。*

图中确实可见的是每组下方本方法行有大面积黑色剪枝块和橙色代理词，红色描边标出误导性代理，而上方全量行保留完整画面。读图时应把错误归因拆开：剪枝拿掉了本可纠错的视觉证据，代理又给了错误先验，两者叠加才错。单独怪剪枝或单独怪检测器都不全面。

代价方面，投影矩阵本身很小，3B 和 7B 分别约 5.5M 和 7.1M 参数加系数，加上 3.4M 的 YOLOv8n，远小于 CLIP 的 427.9M 和 AudioCLIP 的 134.1M。但检测器仍有约 0.12 秒和 0.44 GiB 的边际开销，换更大检测器精度几乎不动而开销上升，所以用最小的 Nano。未测的范围包括无声视频、强依赖小字和计数的任务、自适应压缩率，以及流式下查询未知时的真实在线剪枝，这些在原文多为讨论而非完整评测。

### 如果要复现，第一步先做什么

复现的第一步不是跑问答，而是把共同空间建对。按原文用 VGGSound 训练集取 5000 对音频视觉嵌入，在 Qwen2.5-Omni 的编码器输出上做去均值、白化、交叉协方差奇异值分解，保留 512 个方向得到 Pa 和 Pv，并存下均值和白化矩阵。验证方法是先跑音频到视频检索，看 R@1 是否从个位数升到 30 左右、中位排名是否降到个位数；检索不对，后面的剪枝分就不可信。

第二步再接问答管线：按块算视觉常见度和投影后音频距离并合成显著性，留 40%、捞回 5%、阈值 0.05 做合并，用 YOLOv8n-seg 取类别词并按质心给(t,h,w) 位置后前置插入。硬件按原文单卡 48 GB 即可跑短视频评测，长视频全量需多卡。

需要补的验证是统计显著性和跨条件稳定性。原文主表是贪心单次，附录才有 5 种子和自助置信区间，显示与全量差 0.16 个点区间包含零、与 DASH 差 1.32 个点显著。自己复现时应在 WorldSense 和 DailyOmni 上至少跑多种子，并报告压缩率与 Avg 的联合分布，而不是只报单点超过 100%。论文提到的第三方仓库链接只能证明原文提到了该地址，不能当作作者已开源；复现应以论文描述的计算步骤为准，缺的是官方训练好的投影矩阵和检测缓存，需要自己按上述步骤生成。

### 何时值得尝试，结论边界在哪里

当输入是带声音的短视频、视觉占绝对主导、推理受显存或延迟限制，且问题更依赖事件和物体关系而非逐像素读数时，值得尝试这种先对齐再删、删后用词补的路线。行动顺序是先验证音频视频确有重叠，再调选择预算匹配目标压缩率，局部恢复预算在 0.05 附近小范围试，合并阈值不必精调，典型方向数到 256 后基本饱和。

结论只在已测条件下成立：Qwen2.5-Omni 的 3B 和 7B 上 4 个短视频理解基准加一个描述基准、固定预算、保留全部音频时，与全量相当；Qwen3-30B 和 SALMONN 上的数字是同一方法的迁移证据，但压缩率和保留比例不同，不能直接套用。超过 100% 的 Avg 应理解为归一平均下的持平或轻微波动，而非全面超越，极端 90% 压缩下仍有明显掉点。下一步最需要补的是按任务自适应压缩率，以及在检测器不可靠时的回退机制，否则省下的 Token 可能以误导性语义为代价。

<details>
<summary>📎 论文与评分元数据</summary>

排名：前50% | 文档类型：方法研究 | [arXiv 原文](https://arxiv.org/abs/2607.21179)

</details>

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。

- 评分规则：type-aware-v1

- 评分模型：muse-spark-1.3-contributor

- 评分请求协议：openai_responses

---

[← 返回 2026-11-19 语音/音乐/音频论文速递](/audio-paper-digest-blog/posts/2026-11-19/)
