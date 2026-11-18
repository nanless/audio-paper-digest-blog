---
title: "VoxMel TTS Technical Report"
date: 2026-11-17
draft: false
tags: [文本到语音, 语音克隆, 自回归模型, 流匹配]
categories: [论文速递]
description: "VoxMel 用固定的双轴 Haar 变换把梅尔谱拆成粗分量加两路残差，只对粗分量做自回归并用非自回归层补残差，在 10 万小时 Emilia 训练的 0.6B 模型上从英文词错率 1.51% 和中文字符错率 1.29% 起步，再靠冻结头的 GRPO 提升质量并用 4 步蒸馏降低每粗帧头计算量。"
hiddenInHomeList: true
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_arxiv_id: "2611.20254"
paper_digest_workbench_contract: "researcher-workbench"
paper_digest_workbench_schema_fingerprint: "1f09b594c317cc38e934de27a5b0e8ceb4baa50ef79bd4f8683dd9adea720fe7"
paper_digest_reader_title: "VoxMel 只让粗梅尔谱进入历史的自回归语音合成"
paper_digest_original_title: "VoxMel TTS Technical Report"
paper_digest_arxiv_version: 1
paper_digest_arxiv_versioned_id: "2611.20254v1"
paper_digest_arxiv_abs_url: "https://arxiv.org/abs/2611.20254v1"
paper_digest_arxiv_pdf_url: "https://arxiv.org/pdf/2611.20254v1.pdf"
paper_digest_primary_task: "文本到语音"
paper_digest_tags_contract: "paper-tag-flat-tags"
paper_digest_tags_schema_fingerprint: "27e36280a4b8d3df62ebe54d3ab037920f4d69feb2b554163f01bbae2caf4338"
paper_digest_tags_selection_contract: "paper-tag-selection"
paper_digest_tags_registry_version: "paper-tag-catalog"
paper_digest_tags_registry_sha256: "9673bc0122e1905a5dcfd8b223675400cc2fa4c36095bc0e5f817edf99a0ec5c"
paper_digest_tags_concepts: [{"facet":"task","id":"task.tts","label":"文本到语音"},{"facet":"task","id":"task.voice-cloning","label":"语音克隆"},{"facet":"method","id":"method.autoregressive","label":"自回归模型"},{"facet":"method","id":"method.flow-matching","label":"流匹配"}]
paper_digest_primary_method: "自回归模型"
paper_digest_score: 7.0
paper_digest_rank_bucket: "前50%"
paper_digest_document_type: "方法研究"
paper_digest_one_sentence: "VoxMel 用固定的双轴 Haar 变换把梅尔谱拆成粗分量加两路残差，只对粗分量做自回归并用非自回归层补残差，在 10 万小时 Emilia 训练的 0.6B 模型上从英文词错率 1.51% 和中文字符错率 1.29% 起步，再靠冻结头的 GRPO 提升质量并用 4 步蒸馏降低每粗帧头计算量。"
paper_digest_authors: [{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Wenhao Guan"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Jiaxin Ye"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Haitao Li"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Yifan Duan"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Junxi Liu"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Wangjin Zhou"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Lin Li"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Qingyang Hong"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Xie Chen"}]
paper_digest_abstract_sha256: "1d72be52b81dd985f7bd6f54791f49c0010f45cad75495dfd50d5bdf9b57c383"
paper_digest_sidecars: {"citation.bib":{"sha256":"cf4a5e4c8e10ef4f4ee37e592b2bfb7cfbacf23e651e27e2bbce4b3782d06fba","url":"/audio-paper-digest-blog/client/papers/2026-11-17/2611-20254/citation.bib"},"citation.json":{"sha256":"ddceac7b6c16c0f8684847d40b87f096ddefcb2e74729b2b6ade44e107becfbe","url":"/audio-paper-digest-blog/client/papers/2026-11-17/2611-20254/citation.json"},"citation.ris":{"sha256":"d101983db7196a9f668a229ac91823b419af57bcf13976a99c4942d2e8713f01","url":"/audio-paper-digest-blog/client/papers/2026-11-17/2611-20254/citation.ris"},"rethink-context.json":{"contract":"paper-research-context","schemaFingerprint":"5d4e79f7d3ee65b39ccb38281548bf20a1b2041ab7a27625eaf97ab9909a8383","sha256":"45b8b804504fdeae7baf1749c10e9bbb5bb69362510937134afd2119269b9b80","url":"/audio-paper-digest-blog/client/papers/2026-11-17/2611-20254/rethink-context.json"}}
paper_digest_api_reader_contract: "beginner-researcher"
paper_digest_api_reader_schema_fingerprint: "cd8baf5b8bda3a49eec64f6005931af63de4e9a13148cba5f354c661ca6e9df2"
paper_digest_api_reader_article_sha256: "cb132ff24195ba50a922807531cc3c2376c68927529297811e00525858bc4e10"
paper_digest_api_reader_plan_sha256: "cd4fcfd55096cd2f1cf77ef987227583c6246feda37c86fb89a532a3e0380214"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings"
paper_digest_api_reader_source_binding_schema_fingerprint: "d2a2607a6e561909473022eb43f56332ee357af8568566a095c29083ffdec9cc"
paper_digest_api_reader_source_bindings_sha256: "a2d4ed6430e624888aa8012c508f80f7eee58708e25363874faf7a9eda8ceb61"
paper_digest_api_reader_source_table_count: 5
paper_digest_api_reader_source_formula_count: 3
paper_digest_api_reader_structured_artifacts_sha256: "c336df09b38736d0bfe26c08b6d7c41fb6e80bd1d89bbbd337e38822a5f56f81"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity"
paper_digest_api_reader_author_identity_schema_fingerprint: "1e3fd3a9a56c9a5bf52df8df5022690b9a3fa92e83e934f295af87c0e258ed2f"
paper_digest_api_reader_author_identity_sha256: "90a336f01a798c65d3d4f734f8d128c351405262b7e77b745e0cee5e0a2559eb"
paper_digest_api_reader_author_count: 9
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity"
paper_digest_api_reader_resource_identity_schema_fingerprint: "33b0be17118be61f39b85ce690c8da17e91f2864bb65e85284f60c40067328e0"
paper_digest_api_reader_resource_identity_sha256: "678eb5a0b5665b73a32d9573d2e5734a3ee5470d33df29632032c30304e31592"
paper_digest_api_reader_resource_count: 0
paper_digest_api_reader_figure_persistence: "ephemeral-no-persisted-figure-assets-v1"
paper_digest_api_reader_decision_projection: "api-reader-decision-projection"
paper_digest_api_reader_decision_projection_schema_fingerprint: "e56feb5ab75c8710904916b898f73dab9bb18bdf65bb60b7ed2edf7f99cea860"
---

# 📄 VoxMel 只让粗梅尔谱进入历史的自回归语音合成

> 英文题目：*[VoxMel TTS Technical Report](https://arxiv.org/abs/2611.20254v1)*

<!--paper-tag-hierarchy-v1:start-->

**研究分类**

- **研究任务**：[语音合成](/audio-paper-digest-blog/papers/?concept=task.speech-synthesis) → [文本到语音](/audio-paper-digest-blog/papers/?concept=task.tts)；[语音克隆](/audio-paper-digest-blog/papers/?concept=task.voice-cloning)
- **研究方法**：[生成模型](/audio-paper-digest-blog/papers/?concept=method.generative) → [自回归模型](/audio-paper-digest-blog/papers/?concept=method.autoregressive)；[生成模型](/audio-paper-digest-blog/papers/?concept=method.generative) → [流匹配](/audio-paper-digest-blog/papers/?concept=method.flow-matching)

<!--paper-tag-hierarchy-v1:end-->

> 评分：**7.0/10** | 创新 1.5/2 | 技术严谨 1.2/1.5 | 实验充分 1.2/1.5 | 清晰度 0.8/1 | 影响力 1/1.5 | 开源 0/1.5 | 可复现 0.3/0.5 | 工程/实践 1/1.5


## 👥 作者与机构

- Wenhao Guan：机构信息未能在本次解析中与作者逐人可靠绑定
- Jiaxin Ye：机构信息未能在本次解析中与作者逐人可靠绑定
- Haitao Li：机构信息未能在本次解析中与作者逐人可靠绑定
- Yifan Duan：机构信息未能在本次解析中与作者逐人可靠绑定
- Junxi Liu：机构信息未能在本次解析中与作者逐人可靠绑定
- Wangjin Zhou：机构信息未能在本次解析中与作者逐人可靠绑定
- Lin Li：机构信息未能在本次解析中与作者逐人可靠绑定
- Qingyang Hong：机构信息未能在本次解析中与作者逐人可靠绑定
- Xie Chen：机构信息未能在本次解析中与作者逐人可靠绑定

## 📌 核心摘要

零样本语音合成根据文本和一小段参考语音生成新语音，要求内容读对且音色接近参考人，直接对完整梅尔语谱图逐帧建模时相邻帧高度相关，模型容易依赖声学历史而忽视文本，采样误差也会随反馈累积。VoxMel 把对数梅尔语谱图先沿频率轴做固定哈尔变换，得到频率平均分量和频率残差，再把频率平均分量沿时间轴做第二次变换，得到更短的粗梅尔序列和时间残差，变换可精确求逆。语言模型骨干只自回归生成粗梅尔序列，每步用流匹配头采样输出，两个非自回归层级依次补回时间残差和频率残差，残差不回送历史，最后逆变换加声码器得到波形。这种分工区别于学习型编解码隐变量和全带梅尔直接自回归的做法。在 Seed-TTS-eval test-en 上，GRPO 后模型的词错率为 1.15%，低于监督基线的 1.51%，说话人相似度为 0.753，高于基线的 0.738。在 test-zh 上字错率从 1.29% 降至 1.17%，相似度从 0.755 升至 0.776。结论限于中英短句单人朗读，长句、多人对话和歌唱等未经验证。推理开销集中在粗梅尔循环，每粗帧原来需要 96 次头评估，蒸馏后降至 4 次。

## 🔗 开源与复现资源

本次未形成可展示的已核验资源记录，开放状态尚未核实。

可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 零样本语音合成要从什么输入做出什么声音

刚接触语音合成的读者可以先把任务想成给定两样东西生成第三样东西。输入一是待读文本，经过分词器变成离散记号，输入二是几秒钟的说话人提示语音，它提供目标音色与语速等线索，输出是同样音色的连续波形。论文研究的是零样本克隆，即测试说话人没有经过专门微调，模型必须仅从提示语音泛化。

梅尔谱在这里是连接文本模型和波形的中间声学表示。它是对短时频谱按人耳感知压缩后的对数能量图，本文用 100 通道与 24 千赫采样，帧移 256 点，每秒约 93.75 帧。声码器是把梅尔谱转成波形的独立模块，本文用冻结的 Vocos，不参与自回归训练，好处是以后可以单独升级声码器而不必重训语言模型主干。

评价沿用 3 类做法。英文用自动语音识别转写合成语音再算词错率，中文算字符错率，数值越低表示内容读得越准。音色相似度是对合成语音和参考语音分别提取说话人嵌入再算余弦相似度，越高表示越像同一个人。主观听感另做 5 分制自然度和相似度打分，每种语言请 20 名母语者分别评价内容无关的音色相似和给定文本的自然度。

### 学出来的压缩表示和直接用梅尔谱各难在哪里

此前的零样本系统大多先把语音压成更容易自回归的目标。离散神经音频编解码器把波形变成多层记号，连续变分自编码器把梅尔谱或波形变成低帧率隐变量，语言模型再逐个预测这些学出来的单元。这条路把预测步数变少了，但合成上限部分取决于编码器本身的重建保真度，而且编码器需要额外训练。

另一条路是非自回归的梅尔谱生成，例如 E2-TTS 与 F5-TTS 和 ZipVoice，直接以完整梅尔谱为目标做流匹配或扩散，一次并行生成全部帧，避开了逐帧反馈。它的代价是需要较多函数求值次数来解常微分方程，且不能利用语言模型擅长的从左到右条件建模。

直接对完整梅尔谱做自回归是本文要补的位置。此前 MELLE 和 FELLE 尝试过逐帧预测梅尔谱，DiTAR 和近期连续隐变量模型则把生成的块或隐变量喂回历史。论文指出这两类做法都把细粒度细节重新送入历史，教师强制训练时模型容易依赖声学历史抄近道，推理时采样误差又会累积。VoxMel 的差别不在于换声码器或换主干，而在于换了进入历史的东西。

### 为什么完整梅尔帧不适合直接逐帧喂回历史

论文先用 2000 条 LibriSpeech 测试语音做了测量，而不是直接断言。相邻梅尔帧的 1 阶自相关高达 0.944，仅用前 1 帧做线性预测就能把目标方差降低 11.3 dB，约相当于去掉 93% 的方差，再加更多历史帧只能多带来约 0.2 dB 增益。这意味着在教师强制下，模型只要看声学上 1 帧就能把损失降得很低，文本条件容易被忽视。

更麻烦的是反馈机制。训练时历史是真实帧，推理时历史是自己刚采样的帧，每帧的细细节误差都会成为下一步的条件。分块和低帧率隐变量减少了步数，但生成的块或隐变量仍然进入历史，逐记号由粗到细的方法把重建后的全频带帧喂给后续步骤，同样没有切断这条误差回路。

论文要解决的具体问题因此是找到一种无需训练编码器、可精确恢复、又能让历史只看到紧凑慢变部分的目标。固定小波分解被选中正是因为它满足这三点，残差可以留到历史之外再补。下一节先看整体流水线如何围绕这个切分组织。

### VoxMel 让一个样本怎样从文本走到波形

把一次合成想成自下而上的 3 段。最下方是自回归粗生成，文本记号和已生成的粗历史经投影进入解码器 Transformer，隐状态驱动流匹配头逐个采样下一个粗单元，停止头决定何时结束。中间是两层残差补全，先由时间残差模型根据粗分量并行预测时间残差，拼出频率平均梅尔谱，再由频率残差模型根据该中间量逐帧独立预测频率残差。顶部是逆 Haar 变换把一粗两残差拼回完整梅尔谱，再交冻结声码器生成波形。

下面这张总览图值得对照着读，它把分解方向与生成顺序和每个头的输入画在同一页，虚线箭头表示固定的数学拆分，实线箭头表示生成的依赖顺序，读图时先看主路径再看残差分支在哪里汇合。

> **看图路径：** 1. 先沿底部自回归粗生成向上看主路径再看中部两层残差的先后依赖；2. 对照左侧两幅 Haar 示意确认频率拆分在先而时间拆分在后；3. 看右侧流匹配头小图确认噪声输入与条件和时间如何汇入多层感知机

[![原论文 Figure 1：Overview of VoxMel. Top left: Dashed arrows show the two-axis Haar decomposition.](https://arxiv.org/html/2611.20254v1/voxmel_v3.png)](https://arxiv.org/html/2611.20254v1/voxmel_v3.png)

*论文图 1。原论文 Figure 1:：“Overview of VoxMel. Top left: Dashed arrows show the two-axis Haar decomposition.”。*

对照图中文字标注来读更容易。底部是大框标出的自回归粗生成部分，文本经分词进入主干，投影后的粗历史随时间推进，流匹配头逐个采样并由停止头截断。中部两条分别标为时间残差建模与频率残差建模，右侧展开分别说明时间层结合非自回归 Transformer 与流匹配头、频率层逐帧处理。

左侧两幅小示意分别对应频率与时间的 Haar 拆分，图中文字标明完整梅尔谱先拆出频率残差与频率平均后的中间量，该中间量再拆出粗谱与时间残差，两路残差与中间平均量的文字标签各不相同。右下小图是各头共用的流匹配头结构，条件、时间与带噪输入汇入多层感知机预测流速，再由求解器积分成样本。

**Coarse-Mel × 时间残差 × 频率残差：** Coarse-Mel 是两次平均后留下的紧凑粗网格，时间残差记录时间相邻帧的半差细节，频率残差记录频率相邻通道的半差细节，三者分工是粗分量承载可自回归的慢变结构，两路残差分别补时间与频率细节，组合后经逆变换完整恢复原始梅尔谱。

条件因子分解的数学写法把上述顺序说得更紧。设原谱为多帧多通道的对数梅尔谱，条件为文本和说话人，变换为固定可逆变换，变换后集合为粗加残差，则建模分布等于变换雅可比常数乘以粗流与两层残差的乘积，残差层不直接接收文本条件，频率残差以重建后的频率平均量为条件。

\[p(X\mid y)\;=\;\prod_{t=1}^{T}p\!\left(x_{t}\mid x_{\lt t},\,y\right),\]

上式中乘积的每一项可以这样读。等式左边是给定文本和音色时整张梅尔谱的条件密度，右边第一块是粗单元逐个依赖前面粗单元和条件的自回归连乘，第二块是时间残差依赖粗分量与频率残差依赖频率平均量的两个并行预测项。由于变换固定可逆，行列式项只是常数，信息没有丢失，关键是残差从不进入粗历史，采样顺序因此必须是先粗再时间残差最后频率残差。

### 双轴 Haar 变换把一张梅尔谱切成了哪三块

Haar 变换首次出现时可以理解为对相邻两点取平均与半差的固定操作。对时间轴，相邻 2 帧变成平均与半差，逆操作是两者相加减恢复原帧。对频率轴同样把相邻两个梅尔通道配对。VoxMel 每轴只做 1 级，先沿频率把原谱拆成频率平均谱与频率残差，再沿时间把频率平均谱拆成粗谱与时间残差。若原谱为时间乘通道，则频率残差保留全部时间而通道减半，时间残差与粗谱在时间与通道上都减半。

论文采用均值形式而非正交归一形式，目的是让粗系数仍处在梅尔数值尺度上，可以沿用同一归一化。这种两轴拆分在数学上属于临界采样离散小波变换，每个残差只与对应轴的局部邻居有关，不引入可训练参数，且逆变换精确恢复，不丢系数。

**Haar 变换 × Frequency-Averaged Mel：** Haar 变换指对相邻两点取平均与半差的可逆线性拆分，Frequency-Averaged Mel 是先沿频率拆分得到的频率平均中间量，它既是频率残差的对照基准，又是继续沿时间拆出 Coarse-Mel 的输入，二者搭配把二维梅尔谱变成一粗两残差的临界采样表示。

为什么只拆一次就有依据。拆完后粗分量只占 1/4 系数却占系数总方差的绝大部分，时间残差占比很小，频率残差占比居中。时间残差自身几乎无自相关，用自身过去预测增益很小，同位置粗系数的探测回归决定系数很低，加入邻近粗帧后明显升高，说明它更适合看邻域粗上下文而非自回归。频率残差用同帧粗上下文的探测决定系数达到中等水平，再加时间上下文增益很小，说明逐帧预测已够。这组测量直接导出后文把两路残差都排除在历史之外的设计。

\[d_{\text{text}}=r_{\text{text}},\qquad d_{\text{spk}}=r_{\text{text}}\wedge r_{\text{spk}},\]

上式是训练时条件丢弃的抽样规则，其中文本与说话人分别记为两种条件，抽样为伯努利抽样，为 1 表示丢弃，说话人丢弃蕴含文本丢弃，由此得到全条件与仅说话人和无条件 3 种状态，概率分别为 0.70 与 0.15 和 0.15。

### 粗序列自回归与两层残差各用什么模型计算

自回归部分的主干以问答模型初始化并用作特征提取器，0.6B 配置为 24 层与较宽隐层和前馈层，主干约 494.0M 参数。文本经分词后与投影后的粗历史一起输入解码器，每步隐状态对应教师强制下的粗前缀与条件，流匹配头据此采样下一个粗单元。帧级预测时步数为原帧数一半，每步维度也是通道数 1 半，是全频带逐帧生成步数的一半。停止头负责变长截断。

**自回归 Transformer × 流匹配头 × 停止头：** 自回归 Transformer 把文本、说话人提示和已生成粗历史汇总成每步隐状态，流匹配头以该隐状态为条件把高斯噪声积分成下一个粗单元的连续向量，停止头判断序列是否结束，三者组合实现逐个粗单元采样加变长停机。

每个流匹配头的内部计算是相同的。输入是带噪样本与流时间和条件，多层感知机预测流速，欧拉求解器积分得到粗单元或残差样本。训练目标是条件流匹配损失，让预测速度逼近从噪声到目标的直线速度，其中带噪样本是噪声与目标的线性插值，流时间在 0 到 1 均匀采样。粗流以粗单元为目标与隐状态为条件，时间残差以粗分量为条件，频率残差以频率平均量为条件，各层并行预测位置但层间按依赖串行。

推理时的双尺度引导把 3 种速度场线性组合，文本引导与说话人引导分别加权，论文经扫描发现说话人引导远强于文本引导会损害可懂度，最终选 3.5 与 3.0 为兼顾字错率与相似度的平衡点。

\[\displaystyle v={}\]

上式是推理时的组合方式，空条件速度加上文本增量与说话人增量的加权和即为实际积分速度。由于引导只是条件与丢弃条件速度的确定性函数，后文蒸馏才能把它吸收进学生头，从而省掉每步三次前向中的两次丢弃前向。

**文本条件 × 说话人提示 × 双尺度引导：** 文本条件是要读的内容，说话人提示是提供音色的参考语音，双尺度引导是在推理时分别对文本和说话人加不同强度来组合三种丢弃状态下的速度场，组合后兼顾可懂度与音色，论文所选工作点为文本 3.5 与说话人 3.0。

残差层的结构差异也与前面的探测结论对应。时间残差层用多层双向注意力加多层流匹配头，宽度 1024，约 90.6M 参数，需要看邻域粗帧。频率残差层用多层逐帧多层感知机加多层流匹配头，同为约 90.6M 参数，逐帧独立预测。粗头本身层数较少宽度 1024 约 14.8M 参数，适配器与投影等仅约 0.1M，总计约 690.1M，冻结声码器约 13.6M 另计。

### 监督训练与强化后训练和蒸馏分别更新谁冻结谁

监督阶段 3 个流匹配头使用相同的条件流匹配目标，主干与各头按教师强制的真值前缀训练。优化用 AdamW 与较小学习率加余弦衰减和 10,000 步预热，0.6B 取 900,000 步检查点，梯度全局范数裁剪为 2，半精度无累积并用指数滑动平均做评估。采样默认对粗头与两层残差各用 32 步均匀欧拉求解。

强化后训练阶段只更新主干，保持粗流匹配头与两层残差和声码器冻结，使主干到音频的映射固定，策略改进不被声学解码器漂移干扰。每条文本加说话人提示采样 8 条带部署引导强度的输出，奖励把说话人相似度与识别转写准确率等权相加，组内归一化算相对优势，再加对监督检查点的 KL 惩罚。回滚用 10 步欧拉与注入噪声和较小学习率，在 10,000 条 Emilia 样本上做 1000 次更新。

**GRPO × 冻结流匹配头 × 蒸馏学生头：** GRPO 是按同提示分组归一化奖励来更新粗序列策略的强化后训练，冻结流匹配头指只更新主干而保持粗头与残差层和声码器不变以固定声学解码映射，蒸馏学生头是把多步带引导教师轨迹压缩进接受引导强度为输入的少步头，三者分工是先稳定提升策略再降低每帧求解开销。

蒸馏阶段反过来只更新头，保持主干与残差层固定。教师是数十步带引导的轨迹，学生把引导强度作为显式输入，训练时在文本 3 到 4 与说话人 2 到 4 范围内采样，推理时按需传入 3.5 与 3，用一次纯条件前向代替三次丢弃状态前向。部分批次来自数十帧学生自回滚，使头见到推理时的条件分布而非仅真值前缀。论文报告若不用自回滚数据，蒸馏头会严重退化。

原文没有报告三层损失的加权细节与残差层训练时的教师粗输入是否加噪，缺口影响的是复现时多任务平衡与残差鲁棒性。替代做法是先按等权或已披露的单目标分别预热，再用相邻表中已报告的粗头步数与引导强度固定推理，对残差层补做小幅高斯扰动对照，观察字错率是否随扰动单调变化。

### 数据与声学前端和打分规则在什么条件下成立

训练数据为 Emilia 约 100,000 小时，丢弃短于 0.3 秒或长于 30 秒的语句，每批按 24000 帧预算与最大序列长度 4096 记号组织，用问答分词器。声学前端为上述 100 通道对数梅尔谱，评估在 LibriSpeech 测试集与 Seed-TTS 评测的英文 1088 条和中文 2020 条上做零样本克隆。英文转写用大词汇量识别模型，中文用中文识别模型，相似度用大语音模型嵌入，均为整句平均。

下表是 0.6B 各模块的配置与参数量，理解开销时要把主干与粗头和两层残差与冻结声码器分开看，声码器不计入总数，该表用于核对复现时的模块划分。

| Module | Configuration | Params |
| --- | --- | --- |
| Backbone | 24 layers, 896 wide, 4864 FFN, initialized from Qwen2.5-0.5B | 494.0M |
| Coarse head | flow matching, 6 layers, 1024 wide | 14.8M |
| Temporal residual | 6 bidirectional attention layers, 6-layer flow head, 1024 wide | 90.6M |
| Frequency residual | 6 frame-wise MLP layers, 6-layer flow head, 1024 wide | 90.6M |
| Adapters | coarse-to-backbone projection, special embeddings, stop head | 0.1M |
| Total |  | 690.1M |
| Vocoder | Vocos, 8 layers, 512 wide (frozen, not counted above) | 13.6M |

上表支撑的判断是参数量集中在主干与两层残差，粗头本身很小，但推理开销集中在粗循环内的多次头求值。结合后文求解器扫描可知，32 步加双尺度引导时每粗帧需数十次粗头前向，残差层另计，因此蒸馏要优先压缩粗头的步数与引导倍数。

3 个尺寸共享同一种小波目标与训练数据，只在主干层数宽度与残差宽度层数上缩放，具体对照如下，该表用于说明缩放比较的公平条件是目标与数据不变。

| Parameters | 0.15B | 0.3B | 0.6B |
| --- | --- | --- | --- |
| Configuration |  |  |  |
| Backbone layers | 16 | 20 | 24 |
| Backbone width | 512 | 768 | 896 |
| Backbone FFN | 1024 | 1792 | 4864 |
| Residual tier width | 512 | 640 | 1024 |
| Blocks per tier | 4 | 5 | 6 |
| Flow head layers | 4 | 5 | 6 |
| Parameters |  |  |  |
| Backbone | 119.8M | 246.5M | 494.0M |
| Coarse head | 2.7M | 5.2M | 14.8M |
| Temporal residual | 15.4M | 30.2M | 90.6M |
| Frequency residual | 15.4M | 30.2M | 90.6M |
| Adapters | 0.1M | 0.1M | 0.1M |
| Total | 153.4M | 312.2M | 690.1M |

上表说明缩放实验比较的是容量而非目标或数据，小尺寸用于分解消融以节省算力，大尺寸为默认报告对象。读者复现时应先固定前端与引导强度再换尺寸，否则字错率与相似度的变化无法归因于容量。中文字符错误率最低出现在中间尺寸而非最大尺寸，说明容量增大并非在所有指标上单调变好。

### 主基准上 VoxMel 与同类系统相比处于什么位置

比较问题是同为零样本克隆时，在相同测试集与相同自动指标下，监督 VoxMel 与强化版和已发表的学得记号与非自回归梅尔和自回归梅尔系统各得多少，下表保留原论文的行分组与参数量和训练时长列，指标方向为词错率与字符错率越低越好，相似度越高越好。

|  |  |  | LibriSpeech test-clean | LibriSpeech test-clean | Seed-TTS test-en | Seed-TTS test-en | Seed-TTS test-zh | Seed-TTS test-zh |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| System | Params | Hrs | WER ↓ | SIM ↑ | WER ↓ | SIM ↑ | CER ↓ | SIM ↑ |
| Generation with Learned Tokens or Latents |  |  |  |  |  |  |  |  |
| CosyVoice (Du et al., 2024a) | 0.3B | 170K | 3.59 | 0.660 | 3.39 | 0.629 | 3.63 | 0.723 |
| CosyVoice 2 (Du et al., 2024b) | 0.5B | 167K | 2.46 | 0.679 | 2.57 | 0.652 | 1.45 | 0.748 |
| CosyVoice 3 (Du et al., 2025) | 1.1B | 1.0M | 1.99 | 0.697 | 2.02 | 0.718 | 1.19 | 0.780 |
| Spark-TTS (Wang et al., 2025b) | 0.5B | 102K | – | – | 1.98 | 0.584 | 1.20 | 0.672 |
| MaskGCT (Wang et al., 2025c) | 1.0B | 100K | 2.29 | 0.691 | 2.88 | 0.713 | 2.40 | 0.773 |
| FireRedTTS 2 (Xie et al., 2025) | 1.5B | 1.4M | 4.32 | 0.642 | 1.95 | 0.665 | 1.14 | 0.736 |
| Qwen3-TTS (Hu et al., 2026) | 1.7B | 5.0M | 2.35 | 0.703 | 1.66 | 0.714 | 1.22 | 0.770 |
| IndexTTS 2 (Zhou et al., 2025) | 1.7B | 55K | 2.47 | 0.700 | 2.23 | 0.706 | 1.03 | 0.765 |
| VibeVoice (Peng et al., 2025) | 1.5B | – | – | – | 3.04 | 0.689 | 1.16 | 0.744 |
| MOSS-TTS (Gong et al., 2026) | 8.0B | – | 1.98 | 0.677 | 1.84 | 0.709 | 1.37 | 0.770 |
| MOSS-TTS-Nano (Gong et al., 2026) | 0.1B | – | 4.10 | 0.484 | 4.62 | 0.499 | 3.13 | 0.643 |
| DiTAR (Jia et al., 2025) | 0.6B | 280K | 2.39 | 0.670 | 1.69 | 0.735 | 1.02 | 0.753 |
| VoxCPM (Zhou et al., 2026) | 0.7B | 1.8M | 1.74 | 0.717 | 1.85 | 0.729 | 0.93 | 0.772 |
| OmniVoice-Emilia (Zhu et al., 2026) | 0.8B | 100K | 1.57 | 0.697 | 1.75 | 0.717 | 0.89 | 0.765 |
| Non-Autoregressive with Mel |  |  |  |  |  |  |  |  |
| E2-TTS (32 NFE) (Eskimez et al., 2024) | 0.3B | 100K | 2.95 | 0.690 | 2.32 | 0.706 | 1.91 | 0.713 |
| F5-TTS (32 NFE) (Chen et al., 2024) | 0.3B | 100K | 2.42 | 0.660 | 1.85 | 0.664 | 1.53 | 0.750 |
| ZipVoice (16 NFE) (Zhu et al., 2025) | 0.1B | 100K | 2.05 | 0.674 | 1.70 | 0.697 | 1.40 | 0.751 |
| Autoregressive with Mel |  |  |  |  |  |  |  |  |
| MELLE (Meng et al., 2024) | – | 50K | 2.10 | 0.625 | – | – | – | – |
| MELLE-R2 (Meng et al., 2024) | – | 50K | 2.14 | 0.608 | – | – | – | – |
| VoxMel (Ours, 32 NFE) | 0.6B | 100K | 1.98 | 0.721 | 1.51 | 0.738 | 1.29 | 0.755 |
| + GRPO | 0.6B | 100K | 1.95 | 0.736 | 1.15 | 0.753 | 1.17 | 0.776 |

上表支撑的有证据结论是监督 VoxMel 在英文测试集上优于表中同为 32 次函数求值的非自回归梅尔基线与同量级的块自回归基线。中文上监督版相似度尚可，但多个系统的字符错率更低。强化版在英文与中文的 4 个指标上都比监督版更好，在 LibriSpeech 上相似度为表内最高，但词错率仍高于两个已发表大系统。听感上 VoxMel 中英文自然度与相似度都接近 4 分，最高分随系统与指标而变，不能只取单项宣称全面最优。

强化是否稳定改进需要单独看冻结与可训练头的对照，比较问题是同一起点与同回滚和奖励下，只更新主干与同时更新粗头有何差别，下表只整理论文正文连续句能逐字覆盖的冻结头对照，单位保留原文百分号。

| 条件 | test-en WER | test-en SIM | test-zh CER | test-zh SIM |
| --- | --- | --- | --- | --- |
| 监督基线 | 1.51% | 0.738 | 1.29% | 0.755 |
| GRPO 冻结头 | 1.15% | 0.753 | 1.17% | 0.776 |

上表支撑的判断是冻结头强化在 4 个 Seed-TTS 指标上都优于监督基线，而可训练头版本在 4 个指标上同时差于冻结头版本与监督基线。机制上论文把可训练头的退化归因于声学解码映射在强化学习中漂移，但该解释仍是推测，证据只支持冻结策略在本组超参数下更稳。求解器步数扫描显示 32 步减到 8 步可把每粗帧粗头求值从 96 降到 24，英文可懂度与相似度基本保持而中文字符错率略升，4 步及以下两项错误率都大幅上升。蒸馏学生把 4 步与单次条件前向结合，每帧仅 4 次粗头求值，相对引导检查点可懂度小幅回落而相似度回落更多。

### 拿掉残差反馈与改变尺寸和主干后发生什么

分解消融全部用小尺寸配置并只在英文测试集上报告，比较问题是把频率残差与时间残差或两者同时排除在历史之外，并用独立非自回归层生成被排除部分时，文本依赖与端到端合成如何变化。文本依赖探测固定声学前缀后去掉正确文本看损失上升，暴露差距比较自采样与教师强制回滚到真值前缀后的损失差。

结果方向是一致的。排除残差后文本依赖从 1% 左右升到 4% 以上，全频带模型的词错率最高而完全拆分模型最低，相似度也以完全拆分最高。频率排除与时间排除的中间态分别改善不同侧面，论文明确指出两类探测度量的是分解的不同效应，不能混为一谈。端到端数字上全频带基线词错率高达 30% 以上而相似度仅约 0.49，完全拆分降到约 2% 与 0.667，说明在该小模型与该测试条件下历史中保留全细节会导致合成崩坏。

尺寸缩放的比较问题是容量变化时英文与中文指标是否同向，下表只整理正文连续句能逐字覆盖的两端尺寸，中间尺寸的最低中文错误率在正文另述，表格单位保留原文百分号。

| 模型 | test-en WER | test-en SIM | test-zh CER | test-zh SIM |
| --- | --- | --- | --- | --- |
| VoxMel-0.15B | 1.90% | 0.667 | 1.44% | 0.730 |
| VoxMel-0.6B | 1.51% | 0.738 | 1.29% | 0.755 |

上表支撑的判断是从小尺寸到大尺寸英文词错率下降而两侧相似度上升，但中文字符错误率并非单调，中间尺寸以 1.17% 最低，小尺寸为 1.44%，大尺寸为 1.29%。因此容量结论只在英文可懂度与相似度上成立，中文需对照中间尺寸结果，不能推广为越大越好。迁移实验把同一种小波目标换到块自回归主干上，小波版接近同学得隐变量版，而全频带梅尔版完全失败，但论文声明配置未完全对齐，所以只能证明固定小波表示可训，不能证明它优于学得隐变量。

### 这些结论在什么数据与配置之外不再成立

论文明确限定了变换深度与族。每轴只做 1 级 Haar，动机是测到的 1 阶时间冗余，没有评估更深分解与其他小波族，读者不能把一次拆分的增益外推到多级或其它基函数。不同深度的计算量与残差建模难度都会变化，原结论只在当前 1 级拆分下成立。

语言与风格边界同样清晰。评估只有英文与中文的短单人语句，几秒长度，中文之外的声调语言与复杂形态和需专门文本前端的语言，以及长篇合成与多人对话和表情与副语言控制，还有歌唱和语码切换都不在评估内。其它音频域也未测试，虽然 Haar 本身不限于语音，但其子带结构与自回归因子分解对音乐与通用音频或音效是否有效仍是未来工作。

伦理边界需要单独强调。零样本克隆只需参考语音即可模仿音色，可能被用于冒充与非自愿合成或欺骗说话人验证，任何发布都应记录数据来源与知情同意和界定可接受用途，并考虑输出水印与合成检测，这些不是技术附带说明而是部署前提。

### 什么时候值得尝试 VoxMel 还缺哪项验证

当目标是保留梅尔谱可解释性与不想训练神经音频分词器，又希望语言模型历史只看到慢变粗结构时，VoxMel 的分离思路值得尝试。它的实际分工是粗序列负责文本与音色的自回归决策，时间残差看邻域粗帧补时间细节，频率残差看同帧中间量补频率细节，逆变换保证信息不丢。冻结头强化适合在声学解码已稳定后小幅提升可懂度与相似度，少步蒸馏适合压缩每粗帧头求值但要接受相似度回落。

复现的行动顺序是先对齐前端与引导，再验证完全拆分相对全频带的文本依赖与端到端增益，然后再做尺寸放大与强化，最后才压缩步数。论文文末列出项目页与代码模型链接，但本次没有完成可达验证，不能据此断言资源当前可用，复现应以论文披露的配置为准自行准备数据与环境。

还需要补的验证是其它语言与长时和对话表情场景，以及残差层在噪声粗输入下的鲁棒性与多层小波的对照，缺少这些就不能把短句中英文结论推广到通用语音与音乐音频。是否采用应看任务是否允许梅尔谱加声码器链路，以及是否有预算承担自回归粗循环的多步求解，否则非自回归方案可能更直接。

<details>
<summary>📎 论文与评分元数据</summary>

排名：前50% | 文档类型：方法研究 | [arXiv 原文](https://arxiv.org/abs/2611.20254v1)

</details>

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。

- 评分规则：type-aware-v1

- 评分模型：muse-spark-1.3-contributor

- 评分请求协议：openai_responses

---

[← 返回 2026-11-17 语音/音乐/音频论文速递](/audio-paper-digest-blog/posts/2026-11-17/)
