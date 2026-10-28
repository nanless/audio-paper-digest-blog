---
title: "ImageTTS: Repurposing Pretrained Image Diffusion Transformers for Speech Synthesis"
date: 2026-10-27
draft: false
tags: [文本到语音, 迁移学习, 零样本, 语音]
categories: [论文速递]
description: "ImageTTS 把对数梅尔谱图变成伪 RGB 图后冻住图像 VAE、只微调 FLUX.2 的 DiT 做条件流匹配，在受控对比中验证了表征与先验迁移，再用约 100K 小时数据在零样本和指令控制合成上达到可比基线的语言准确率，但说话人相似度仍受冻住 VAE 限制。"
hiddenInHomeList: true
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_arxiv_id: "2610.34807"
paper_digest_workbench_contract: "researcher-workbench-v1"
paper_digest_reader_title: "把图像扩散模型拿来读文字、学说话：ImageTTS 解读"
paper_digest_original_title: "ImageTTS: Repurposing Pretrained Image Diffusion Transformers for Speech Synthesis"
paper_digest_arxiv_version: 1
paper_digest_arxiv_versioned_id: "2610.34807v1"
paper_digest_arxiv_abs_url: "https://arxiv.org/abs/2610.34807v1"
paper_digest_arxiv_pdf_url: "https://arxiv.org/pdf/2610.34807v1.pdf"
paper_digest_primary_task: "文本到语音"
paper_digest_tags_contract: "paper-tag-flat-tags-v2"
paper_digest_tags_selection_contract: "paper-tag-selection-v2"
paper_digest_tags_registry_version: "paper-tag-catalog-v2"
paper_digest_tags_registry_sha256: "cdef54423b5dfc00a1d017ef6639446d2ecd1d9c1acf71c8eb4f6219a46b7ba8"
paper_digest_tags_concepts: [{"facet":"task","id":"task.tts","label":"文本到语音"},{"facet":"method","id":"method.transfer","label":"迁移学习"},{"facet":"setting","id":"setting.zero-shot","label":"零样本"},{"facet":"signal","id":"signal.speech","label":"语音"}]
paper_digest_primary_method: "迁移学习"
paper_digest_score: 7.5
paper_digest_rank_bucket: "前25%"
paper_digest_document_type: "方法研究"
paper_digest_one_sentence: "ImageTTS 把对数梅尔谱图变成伪 RGB 图后冻住图像 VAE、只微调 FLUX.2 的 DiT 做条件流匹配，在受控对比中验证了表征与先验迁移，再用约 100K 小时数据在零样本和指令控制合成上达到可比基线的语言准确率，但说话人相似度仍受冻住 VAE 限制。"
paper_digest_authors: [{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Hanchen Pei"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Shujie Liu"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Yayue Deng"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Fangyun Wei"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Yanqing Liu"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Jianwei Yu"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Gongping Huang"}]
paper_digest_abstract_sha256: "10e45a6c8e637ff08c071eed1cd85b0e9d657d4d6b11354ae0e2734bb7a1b608"
paper_digest_sidecars: {"citation.bib":{"sha256":"0fc153a90e672fa5e29409f8c1a2ab6c3afba4845609e9a7d561abce92bf58cc","url":"/audio-paper-digest-blog/data/papers/2026-10-27/2610-34807/citation.bib"},"citation.json":{"sha256":"7c18e8347fe628a2242d5a4606183b656f4e1150c51c5051f99119de6979220a","url":"/audio-paper-digest-blog/data/papers/2026-10-27/2610-34807/citation.json"},"citation.ris":{"sha256":"a31478381bb53c5181daa792f6fc4d7d313e2bcd665c6755e38591a70b34c0eb","url":"/audio-paper-digest-blog/data/papers/2026-10-27/2610-34807/citation.ris"},"rethink-context.json":{"contract":"paper-research-context-v2","sha256":"be48f9383cbc62aa15dcf877056fe024b262a075dd300f7aae62ea17c1c02661","url":"/audio-paper-digest-blog/data/papers/2026-10-27/2610-34807/rethink-context.json"}}
paper_digest_api_reader_contract: "beginner-researcher-v3"
paper_digest_api_reader_article_sha256: "58292c431b07fc329cd31e83855a9ea0dd0faf86e437e73c02c6b7f6f4a352f6"
paper_digest_api_reader_plan_sha256: "db5262675db401788c641c107b03c2e647db8e2762038ae76dfb8e4bc695fa09"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings-v4"
paper_digest_api_reader_source_bindings_sha256: "225445a71497bb833c808f9506fa97cd0d8557239540ad35f874c2e37632ce0b"
paper_digest_api_reader_source_table_count: 4
paper_digest_api_reader_source_formula_count: 4
paper_digest_api_reader_structured_artifacts_sha256: "85757e03dc36c527f917c59d6e4c5f77b57e7d1989b5f4877df7164d2a637014"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity-v1"
paper_digest_api_reader_author_identity_sha256: "e7834d1dc61fe407378c28bc164c7efeb6df30c7e11863a431b8fc95f97cbe6c"
paper_digest_api_reader_author_count: 7
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity-v1"
paper_digest_api_reader_resource_identity_sha256: "6eb94ecb6aef7f6d21289694a72b3d40429c3a762021b1d722d578c29dcbbced"
paper_digest_api_reader_resource_count: 4
paper_digest_api_reader_figure_persistence: "ephemeral-no-persisted-figure-assets-v1"
paper_digest_api_reader_decision_projection: "api-reader-decision-projection-v2"
---

# 📄 把图像扩散模型拿来读文字、学说话：ImageTTS 解读

> 英文题目：*[ImageTTS: Repurposing Pretrained Image Diffusion Transformers for Speech Synthesis](https://arxiv.org/abs/2610.34807v1)*

<!--paper-tag-hierarchy-v1:start-->

**研究分类**

- **研究任务**：[语音合成](/audio-paper-digest-blog/papers/?concept=task.speech-synthesis) → [文本到语音](/audio-paper-digest-blog/papers/?concept=task.tts)
- **研究方法**：[迁移学习](/audio-paper-digest-blog/papers/?concept=method.transfer)
- **研究条件**：[零样本](/audio-paper-digest-blog/papers/?concept=setting.zero-shot)
- **信号**：[语音](/audio-paper-digest-blog/papers/?concept=signal.speech)

<!--paper-tag-hierarchy-v1:end-->

> 评分：**7.5/10** | 创新 1.5/2 | 技术严谨 1.2/1.5 | 实验充分 1.3/1.5 | 清晰度 0.8/1 | 影响力 1.2/1.5 | 开源 0/1.5 | 可复现 0.3/0.5 | 工程/实践 1.2/1.5


## 👥 作者与机构

- Hanchen Pei：机构信息未能在本次解析中与作者逐人可靠绑定
- Shujie Liu：机构信息未能在本次解析中与作者逐人可靠绑定
- Yayue Deng：机构信息未能在本次解析中与作者逐人可靠绑定
- Fangyun Wei：机构信息未能在本次解析中与作者逐人可靠绑定
- Yanqing Liu：机构信息未能在本次解析中与作者逐人可靠绑定
- Jianwei Yu：机构信息未能在本次解析中与作者逐人可靠绑定
- Gongping Huang：机构信息未能在本次解析中与作者逐人可靠绑定

## 📌 核心摘要

语音合成需要同时满足输入文字的发音内容准确与输出声音的说话人特点和给定参考一致，直接复用图像模型架构容易，真正的困难是图像模型学到的压缩表示能否保留语音可懂度和音色，以及图像去噪先验能否帮助语音生成。ImageTTS先把对数梅尔语谱图看作高度为频率、宽度为时间的伪彩色输入，用冻结的FLUX.2图像VAE编码为隐表示，该隐表示承担语音与图像隐空间的接口并保留可懂度和音色。随后只微调扩散Transformer，以文字与参考隐变量为条件做条件流匹配来预测隐变量演化的速度场，其中零样本合成以掩码流匹配做带参考的隐变量补全，指令控制合成由文字记录与风格描述共同决定整句生成。推理时模型从高斯噪声出发沿调度噪声解条件常微分方程得到目标隐变量，再经冻结VAE解码并用声码器合成波形，使前两步学到的表示与先验落到可听语音。相对已有语音原生DiT模型，该方法的关键差异是表示与初始化都来自文本到图像管线，而不是为语音训练编解码器或从随机权重开始，这把视觉到语音迁移拆分为VAE的表示迁移与DiT初始化的生成先验迁移。在约10万小时Emilia数据训练后，ImageTTS-base在Seed-TTS test-en上词错误率（Word Error Rate，WER，越低越好）为1.12%，低于同数据量基线。结论适用于读式英文为主的大规模训练与CapSpeech指令数据微调；在中文说话人相似度、图像VAE重建上限之外尚未验证。原文未披露训练、推理或部署成本。

## 🔗 开源与复现资源

- 第三方资源：<https://paperdemos.github.io/ImageTTS-demos/> — 链接可访问（HTTP 200）

- 第三方资源：<https://huggingface.co/parler-tts/parler-tts-mini-v1> — 链接可访问（HTTP 200）

- 第三方资源：<https://huggingface.co/audeering/wav2vec2-large-robust-6-ft-age-gender> — 链接可访问（HTTP 200）

- 第三方资源：<https://github.com/interactiveaudiolab/penn> — 链接可访问（HTTP 200）

可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 语音合成要同时保住什么信息？

这篇论文研究的是文本到语音合成，也就是输入文字、输出波形。研究生刚接触时容易只关注声音好不好听，但原文强调有两个必须同时满足的要求：一是语言内容要读对，不能丢字、错字；二是要像给定的说话人，零样本场景下只给几秒参考音，就要模仿其音色。

图像生成看起来和这件事差距很大：文本提示只给高层语义，模型自由发挥构图和纹理。而语音里文本规定了严格的音素序列，时间对齐、韵律和音色都要连续稳定。所以作者把语音合成当作检验跨模态迁移的苛刻测试：如果图像模型学到的压缩表示和去噪先验还能帮上语音，说明迁移不只是借用了 Transformer 结构。

理解后文需要先记住 3 个评价维度：可懂度常用词错误率衡量，越低越好；说话人相似度衡量合成与参考音色有多接近，越高越好；感知质量分衡量听感，越高越好。论文所有结论都要放在具体数据集、参考时长和引导强度下看，不能只记一个数字。

### 已有语音路线和本文的图像路线有何不同？

零样本 TTS 已有两条成熟路线。一条用离散声学码本，把语音变成多层 token 再做自回归或掩码预测；另一条直接在连续梅尔谱图或连续隐变量上做扩散或流匹配。Voicebox 把零样本做成带音素对齐的谱图补全，E2-TTS 去掉外部对齐器用填充符补齐文本长度，F5-TTS 把主干换成扩散 Transformer。ImageTTS 沿用补全思想，但多模态融合方式不同：它在前面几个双流块里让文本和语音保留各自的投影与残差，只在注意力层面拼接交互，后面再用单流块做完全统一建模。

表示空间上，多数工作训练语音专用自编码器或直接用梅尔谱图。ImageTTS 反其道而行，直接用现成的、冻结的图像变分自编码器处理伪 RGB 谱图，想回答图像隐空间能否保留语音信息。指令控制方面，早期用专用风格编码器，后来把转录和描述放在统一语言接口里。ImageTTS 复用图像管线里的 Qwen3 文本编码器同时编码转录和风格指令，检验图像管线的语言编码器能否理解人声描述并接地到语音生成。

### 论文把跨模态迁移拆成哪三个可检验问题？

作者没有笼统说图像有助于语音，而是拆成 3 个可分离的问题。第一，冻结的图像隐空间能否忠实表示语音？这对应只过编码器加解码器再接声码器，不涉及 DiT 生成，纯测表示。第二，图像生成先验相对随机初始化是否有增益？这要求结构、隐空间、优化计划完全相同，只换 DiT 初始权重，在中等规模 LibriTTS 上比收敛和生成指标。

第三，放大到约 100K 小时后能否在下游任务上具有竞争力？这对应零样本和指令引导两个完整系统。

这种拆分很重要，因为三者的失败原因不同：重建差说明隐空间不兼容；收敛快但生成词错误率不降说明只是优化起点好；小规模有效但大规模无效说明扩展性有问题。后文每个实验都只回答其中之一，读者复述时不要把重建的高相似度直接当成生成一定好的证据。

### ImageTTS 的整体链路是怎样的？

先看整体分工再看细节。输入是一段波形和一段文本，输出是新波形。中间分 3 段：文本走冻结的 Qwen3 编码器变成上下文向量；语音的对数梅尔谱图变成伪 RGB 图后走冻结的 FLUX.2 图像 VAE 变成隐变量；带噪语音隐变量、参考语音隐变量和文本向量一起进入可训练的 FLUX.2 DiT，预测流匹配的速度场，再用欧拉积分从噪声解出目标隐变量，最后经 VAE 解码器和 BigVGAN-v2 声码器回到波形。只有 DiT 更新，VAE 和文本编码器都不动。

下图把这种复用关系画得很直白，读图时注意哪部分迁移权重、哪部分冻结保留结构。

> **看图路径：** 1. 先看(a) 从图像预训练到 FLUX.2 权重迁移的箭头；2. 再看(b) 中梅尔谱图到伪 RGB 再到冻结 VAE 与文本编码器的三路分工；3. 最后看(c) 三个结论框分别对应重建、先验加速和两种 TTS 任务

[![原论文 Figure 1：Overview of ImageTTS. (a) FLUX.2 is pretrained on images and provides the DiT initialization for…](https://arxiv.org/html/2610.34807v1/teaser.png)](https://arxiv.org/html/2610.34807v1/teaser.png)

*论文图 1。原论文 Figure 1:：“Overview of ImageTTS. (a) FLUX.2 is pretrained on images and provides the DiT initialization for speech generation.”。*

图(a) 说明起点是图像预训练得到的 FLUX.2-klein-base-4B，箭头把 DiT 权重迁移到语音侧；图(b) 说明梅尔谱图先转伪 RGB，再分别走微调的图像 DiT、冻结的图像 VAE 和冻结的 Qwen3 文本编码器，且原始结构保留；图(c) 把 3 个待验证结论并列：冻结 VAE 能高保真重建、图像预训练加速收敛并降低词错误率、同一框架支持零样本和指令引导。这张图帮助初学者建立样本旅程：同一句话的谱图先被图像压缩器压缩，再被图像学生成的 Transformer 改写，最后被图像解码器展开加声码器发声。

### 谱图如何变成图像 VAE 能吃的伪 RGB？

拿一个训练样本为例。原始波形先提单通道对数梅尔谱图，梅尔滤波器数是 100，频率轴当作图像的高，时间轴当作图像的宽。FLUX.2 的 VAE 每个空间维下采样 8 倍，之后又按 2×2 拼块给 DiT，所以高和宽都要求能被 16 整除。做法是把频率维双线性缩放到所选 F，时间维向右补齐到 16 的倍数，补的值取该句最小对数梅尔值以近似静音，再用训练集全局最大最小线性归一到[-1,1]，复制 3 通道得到 3×F×T 的伪 RGB。编码后还用预训练 VAE 的隐变量统计做标准化。

**对数梅尔谱图 × 伪 RGB 输入：** 对数梅尔谱图是单通道的时频能量表示，横轴是时间帧、纵轴是梅尔频率；伪 RGB 输入是把它归一化到[-1,1] 后复制成三通道的图像张量。二者搭配是为了不改图像 VAE 的三通道输入假设，让语音能直接走图像编码器，组合后得到的是图像隐空间里的语音隐变量。

代价很直接：F 越大重建越好但隐序列越长。论文试了 96 到 1024，发现 512 到 1024 的感知增益迅速收窄，而 1024 的隐位置数是 512 的 2 倍，所以生成实验选 F 为 512。这是在质量和计算之间的显式折中，后文所有大规模结论都依赖这个选择。

下图展示 DiT 内部如何处理这些 token，重点看分支在哪里分开、在哪里汇合。

> **看图路径：** 1. 先沿左列从底部输入到顶部波形的训练与推理主路径看数据流向；2. 再看右上双流块中文本流与语音流各自投影后拼接做联合注意力的位置；3. 最后看右下单流块中共享参数对拼接后序列做全融合的差异

[![原论文 Figure 2：Architecture of ImageTTS-base.](https://arxiv.org/html/2610.34807v1/ImageTTS_pipeline.png)](https://arxiv.org/html/2610.34807v1/ImageTTS_pipeline.png)

*论文图 2。原论文 Figure 2:：“Architecture of ImageTTS-base. The framework adopts a Flow-Matching DiT backbone comprising double-stream blocks and single-stream blocks conditioned on timestep \sigma.”。*

左列是训练流：底部是文本加带噪目标加掩码参考的拼接输入，经过 5 个双流块和 20 个单流块，预测目标速度并算掩码流匹配损失，再经流匹配欧拉积分、冻结 VAE 解码器和 BigVGAN-v2 得到波形。右上双流块对文本流和语音流用各自的归一化与 QKV 投影，只在拼接后做联合双向注意力，输出再各自做注意力更新和前馈，得到文本隐状态与语音隐状态；右下单流块把两者拼接后用共享注意力与前馈做全融合。这种先分后合的设计保留了模态特有变换，又允许文本、带噪目标和参考三者全局交互。

### 零样本与指令引导分别是补全还是全生成？

零样本 TTS 被写成参考条件隐变量补全。训练时每句随机选一段连续时间区作为待生成区，二值时间掩码在该区为 1，其余为 0，并广播到通道和频率维。参考条件流取完整目标隐变量在掩码外保留、在掩码内清零，文本流用冻结 Qwen3 编码。带噪目标与掩码参考分别投影成 token 序列后拼接成语音流。损失只在被选区内计算。推理时参考流前部放参考语音前缀、后续补零并全程固定，目标隐变量全长从噪声更新，最后只保留延续段解码。

**零样本 TTS × 参考条件补全：** 零样本 TTS 指只给一段短参考语音和新文本，就要生成同一音色读新内容；参考条件补全是实现方式，把完整隐变量中随机连续时间段挖掉作为待生成区，保留区作为参考条件与带噪目标拼接输入。挖掉区算损失、保留区提供音色，组合后模型同时看到说什么和像谁说。

指令引导 TTS 则是全生成，没有参考语音 token。它把转录和风格指令按固定模板拼成一段提示再编码，损失掩码全为 1，覆盖整个目标隐变量。训练时风格指令以一定概率被置空以支持无分类器引导，推理时用风格引导强度调节对指令的贴合。

**指令引导 TTS × Qwen3 文本编码器：** 指令引导 TTS 指用自然语言描述年龄、性别、音高、表现力等风格来控制合成；Qwen3 文本编码器负责把转录文本加风格指令拼成的提示编码成上下文向量。它冻结使用，提供语义理解，DiT 学习把这些语义接地到语音隐空间的变化上，组合后不需要参考音频也能做风格控制。

推理的风格引导公式是理解条件作用的好入口，它说明有指令和无指令两个速度场如何加权。

\[\widetilde{\mathbf{v}}_{\mathrm{IT}}=\mathbf{v}_{\mathbf{y},\mathbf{i}}+(s_{\mathrm{i}}-1)\left(\mathbf{v}_{\mathbf{y},\mathbf{i}}-\mathbf{v}_{\mathbf{y},\varnothing}\right),\]

式中 v 带下标 y,i 表示同时以转录 y 和风格指令 i 为条件，v 带下标 y 与空集表示只以转录为条件，s_i 是风格引导强度。先形成两个速度预测，再沿二者差方向外推，结果用于下一步欧拉更新。零样本的双引导公式思想相同，只是分别对文本缺失和语音缺失做两次外推，文本强度保内容，语音强度保音色。

**图像 VAE × DiT：** 图像 VAE 负责把伪 RGB 图压缩成紧凑连续隐变量并能解码回去，是表征载体；DiT 是预测速度场的扩散 Transformer，是生成先验载体。前者冻结保留图像学到的压缩结构，后者微调学习文本到语音隐变量的映射，二者分工把表示迁移和生成迁移拆开验证。

### 流匹配训练在优化什么量？

训练优化的是掩码条件流匹配损失。先看前向构造：目标语音隐变量记为干净端，高斯噪声记为噪声端，噪声水平记为 sigma，1 对应纯噪声、0 对应干净目标。中间状态是两者的线性插值，真值速度是噪声减目标，即沿 sigma 方向的导数。DiT 以带噪隐变量、噪声水平、文本和可选参考为条件预测速度场。

\[\mathbf{z}_{\sigma}=(1-\sigma)\mathbf{z}^{\mathrm{tgt}}+\sigma\bm{\epsilon},\qquad\mathbf{u}_{\sigma}=\frac{\partial\mathbf{z}_{\sigma}}{\partial\sigma}=\bm{\epsilon}-\mathbf{z}^{\mathrm{tgt}}.\]

式中 z 带上标 tgt 是目标隐变量，epsilon 是高斯噪声，z 带下标 sigma 是插值状态，u 是真值速度。它先形成训练样本，再给出监督方向，维度与隐变量一致。

\[\widehat{\mathbf{v}}_{\sigma}=\mathbf{v}_{\theta}\left(\mathbf{z}_{\sigma},\sigma\mid\mathbf{y},\mathbf{z}^{\mathrm{ref}}\right).\]

式中 v 的预测值以上标 hat 区分，theta 是 DiT 参数，y 是文本 token 序列，z 带上标 ref 是参考隐变量。它说明预测依赖哪些条件，零样本同时依赖文本与参考，指令引导只依赖文本加风格。

\[\mathcal{L}_{\mathrm{CFM}}=\mathbb{E}_{\sigma,\mathbf{z}^{\mathrm{tgt}},\bm{\epsilon}}\left[\frac{\left\|\overline{\mathbf{m}}\odot\left(\widehat{\mathbf{v}}_{\sigma}-\mathbf{u}_{\sigma}\right)\right\|_{2}^{2}}{\left\|\overline{\mathbf{m}}\right\|_{1}}\right],\]

该损失对预测速度与真值速度的逐元误差平方在任务掩码内求和，再除以掩码的 1 范数做归一化，外层对 sigma、目标和噪声取期望。掩码为全 1 时是全生成，为时间掩码时是补全。推理时从标准高斯出发，沿调度器递减的噪声水平解条件常微分方程，函数评估次数控制采样精度与计算量的折中。

**条件流匹配 × 速度场：** 条件流匹配是训练目标，它要求模型在噪声与目标隐变量的直线插值路径上预测正确的变化方向；速度场就是这个方向函数。DiT 输出预测速度，真值速度由噪声减目标得到，损失只在任务掩码区域内平均，组合后模型学会沿常微分方程从噪声积分回语音隐变量。

优化细节按原文披露：LibriTTS 对照实验用 16 卡 A100、BF16、AdamW、常数学习率 1×10^-4、有效批量 128，图像预训练模型训 100k 步、随机初始化训 150k 步以对齐损失；大规模阶段用 64 卡 A100、学习率 2×10^-4、有效批量 256 约 0.7 小时语音，零样本训 180k 步得 ImageTTS-base，再以 1:1 混合指令与零样本数据续训 50k 步得 ImageTTS-instruct，文本与风格置空概率各 0.1。推理用欧拉求解器 50 步。

### 重建、对照和放大的实验条件是什么？

重建实验不训练 DiT，只测冻结 VAE 加声码器。从 LibriTTS 的 24 kHz 和 LibriSpeech 的 16 kHz 各抽 100 句，原波形为参考。声码器-only 基线直接从梅尔谱图经 BigVGAN-v2 合成；VAE 重建分支先预处理、编码解码、逆变换再经同一声码器。频率 F 取 96、128、256、512、1024，还对比 Riffusion 的谱图向图像 VAE 在原始预处理和对齐到本文预处理两种设置下同为 512 的表现。指标方向是：PESQ、STOI、说话人相似度、DNSMOS、UTMOS 都是越高越好。

初始化对照固定一切只换起点：同结构、同隐空间、同优化计划，图像预训练载入 FLUX.2 DiT 权重，随机初始化用默认初始化加固定种子。在约 585 小时、2456 人的 LibriTTS 上做零样本训练，在 LibriSpeech test-clean 固定 200 句上做语音延续评测，前 3 秒作声学提示、按转录生成后半。收敛看批量平均训练损失，主面板 500 步滑动平均，右上小图在 0.4 到 0.6 区间用 10000 步平均看长期趋势；生成看词错误率、相似度与 DNSMOS，其中对照阶段无分类器引导固定为文本 4、语音 1。

放大部分在 Emilia 英中子集约 100K 小时上训练，在 Seed-TTS 英文 1088 条和中文 2020 条加内部英文集上评测，统一重跑基线官方实现。指令部分在 CapSpeech 约 9K 小时、3,470,000 对上训练，在 200 例子集上按年龄、性别、音高、表现力及其平均 Style-ACC、跨模态 CLSP 分数和词错误率评测。非自回归系统时长靠外部估计，所以时长准确率被排除，避免把时长估计程序的功劳算给模型。

### 冻结图像 VAE 能保留多少语音信息？

比较问题是：在同一声码器下，冻结 FLUX.2 VAE 的重建相对直接梅尔加声码器损失多少，相对 Riffusion VAE 又好多少。公平条件是每集各取 100 句、同一声码器 BigVGAN-v2、同一逆预处理，指标方向都是越高越好。下表保留原始双层表头与全部数值，阅读时先看 512 行，再看随频率尺寸增大的趋势。

| 方法 | LibriTTS (24 kHz) PESQ↑ | LibriTTS STOI↑ | LibriTTS SIM↑ | LibriTTS DNSMOS↑ | LibriTTS UTMOS↑ | LibriSpeech (16 kHz) PESQ↑ | LibriSpeech STOI↑ | LibriSpeech SIM↑ | LibriSpeech DNSMOS↑ | LibriSpeech UTMOS↑ |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Original waveform | 4.64 | 1.00 | 1.00 | 3.74 | 4.01 | 4.64 | 1.00 | 1.00 | 3.93 | 4.13 |
| Vocoder only | 4.43 | 1.00 | 0.98 | 3.75 | 3.99 | 4.36 | 0.99 | 0.98 | 3.89 | 3.99 |
| Riffusion-o | 1.40 | 0.82 | 0.72 | 3.34 | 1.40 | 1.42 | 0.81 | 0.79 | 3.46 | 1.33 |
| Riffusion-n, F=512 | 2.45 | 0.92 | 0.86 | 3.56 | 2.41 | 2.51 | 0.92 | 0.89 | 3.67 | 2.28 |
| FLUX.2, F=96 | 2.67 | 0.94 | 0.90 | 3.50 | 2.66 | 2.61 | 0.94 | 0.91 | 3.57 | 2.51 |
| FLUX.2, F=128 | 3.01 | 0.96 | 0.91 | 3.58 | 2.88 | 2.98 | 0.95 | 0.93 | 3.69 | 2.76 |
| FLUX.2, F=256 | 3.46 | 0.97 | 0.93 | 3.66 | 3.24 | 3.45 | 0.97 | 0.95 | 3.79 | 3.16 |
| FLUX.2, F=512 | 3.86 | 0.99 | 0.95 | 3.72 | 3.58 | 3.79 | 0.98 | 0.96 | 3.86 | 3.55 |
| FLUX.2, F=1024 | 3.98 | 0.99 | 0.96 | 3.72 | 3.71 | 3.88 | 0.99 | 0.96 | 3.88 | 3.69 |

随频率尺寸增大重建单调变好但边际递减。LibriTTS 上 256 到 512 的 PESQ 提升 0.40，而 512 到 1024 只提升 0.12，LibriSpeech 侧分别是 0.34 和 0.09，所以选 512 是质量与序列长度的平衡。在 512 处 STOI 在 LibriTTS 达 0.99、LibriSpeech 达 0.98，说话人相似度达 0.95 和 0.96，接近声码器-only 基线的 0.98，说明可懂度和音色信息大体保留，但 PESQ 仍低 0.57，感知质量有缺口。

Riffusion VAE 对预处理敏感，即使对齐预处理且同为 512 仍明显差于 FLUX.2，说明后者与语音更兼容。限制是这只是重建上限，不代表生成一定能达到，且 PESQ 缺口预示后文生成侧的说话人相似度和听感可能受隐空间瓶颈拖累。

### 大规模零样本合成在什么条件下成立？

比较问题是：在约 100K 小时 Emilia 可比数据下，ImageTTS-base 相对 F5-TTS 和 MaskGCT 的语言准确率、相似度和主观听感如何？公平条件是统一评测协议重跑官方实现，按训练数据分组，星号组是可比数据量的主要基线，更大数据量的系统只作参考。下表保留训练时长、词错误率与字错误率越低越好、相似度与 MOS 越高越好的原始方向。

| Method | Training hours | Seed-TTS test-en | Seed-TTS test-en | Seed-TTS test-en | Seed-TTS test-zh | Seed-TTS test-zh | Seed-TTS test-zh | Internal test-en | Internal test-en |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Method | Training hours | WER↓ | SIM↑ | MOS↑ | CER↓ | SIM↑ | MOS↑ | WER↓ | SIM↑ |
| Ground Truth | – | 0.88 | 0.73 | 4.17 ± 0.19 | 1.25 | 0.76 | 4.25 ± 0.16 | – | – |
| Reconstructed | – | 0.90 | 0.71 | – | 1.34 | 0.73 | – | – | – |
| Qwen3-TTS (Hu et al., 2026) | >>5M | 0.96 | 0.72 | 4.06 ± 0.16 | 1.23 | 0.77 | 3.91 ± 0.19 | 0.72 | 0.69 |
| FireRedTTS3-Instruct (Shen et al., 2026) | >>2.6M | 1.55 | 0.64 | 4.04 ± 0.18 | 1.09 | 0.71 | 3.67 ± 0.20 | 0.84 | 0.59 |
| VoxCPM2 (Zhou et al., 2026) | >>2M | 1.20 | 0.68 | 3.90 ± 0.19 | 1.04 | 0.74 | 4.24 ± 0.17 | 0.51 | 0.55 |
| F5-TTS ∗ (Chen et al., 2025b) | 95K | 1.17 | 0.67 | 3.33 ± 0.20 | 1.70 | 0.76 | 3.53 ± 0.19 | 0.94 | 0.64 |
| MaskGCT ∗ (Wang et al., 2025d) | 100K | 2.33 | 0.71 | 3.95 ± 0.19 | 2.36 | 0.77 | 3.34 ± 0.18 | 1.45 | 0.65 |
| ImageTTS-base | 100K | 1.12 | 0.66 | 4.08 ± 0.18 | 1.68 | 0.72 | 4.01 ± 0.17 | 0.72 | 0.64 |

读图说明：下图按训练步数展示生成指标，横轴是步数，纵轴分别是词错误率、相似度和感知分，蓝色是图像预训练、橙色是随机初始化，圆点是实测检查点、连线只是视觉引导。

> **看图路径：** 1. 先看(a) 词错误率随训练步数下降时两条线的差距是否闭合；2. 再看(b) 说话人相似度中预训练线是否始终略高；3. 最后看(c) 感知质量分两条线的交叉与后续走势

[![原论文 Figure 4：Generation metrics across training stages for image-pretrained and randomly initialized DiTs in…](https://arxiv.org/html/2610.34807v1/vae_latent_metrics.svg)](https://arxiv.org/html/2610.34807v1/vae_latent_metrics.svg)

*论文图 4。原论文 Figure 4:：“Generation metrics across training stages for image-pretrained and randomly initialized DiTs in the image-VAE latent space.”。*

图(a) 可见预训练线的词错误率在 30k 到 100k 始终明显更低且平稳下降，随机线从高位下降但到 100k 仍有差距；图(b) 可见预训练相似度在 0.78 到 0.79 小幅波动，随机线从 0.72 附近爬升到 0.75 到 0.77，始终略低；图(c) 可见感知分两者接近，预训练略高且后期更稳。这支持语言内容主要受益、音色小幅受益的判断，但也说明随机初始化训更久能缩小损失差距却难闭合词错误率差距。

回到大表，ImageTTS-base 在 Seed 英文词错误率 1.12%、中文字符错误率 1.68%，在可比组每列都是最低，英文和中文 MOS 达 4.08 和 4.01 也是可比组最高，说明语言稳定性跨数据集成立。未胜出项同样明确：中文集相似度 0.72 低于 F5-TTS 的 0.76 和 MaskGCT 的 0.77，英文内部集相似度 0.64 与 F5-TTS 持平。作者把这归因于冻结图像 VAE 保留的说话人信息有限，重建表中 0.95 对 0.98 的差距是旁证。更大数据的 Qwen3-TTS 和 VoxCPM2 在多数客观指标更强，所以竞争力结论只限于可比数据量和语言准确率与听感，不能推广为全面超越。

### 指令控制的风格准确率来自哪里？

比较问题是 CapSpeech 测试子集上指令控制语音的效果，只用约 9K 小时指令数据的 ImageTTS-instruct 与同属 CapSpeech 指令数据的 CapTTS 基线相比属性准确率与整体服从度如何，再与使用其他指令数据系统的结果放在一起看位置。公平条件是同一批 200 条样本上的样本级多属性平均 Style-ACC、跨模态 CLSP 分数和词错误率，时长控制因依赖外部估计而不计入风格准确率。

| Method | Instruction data | Age ↑ | Gender ↑ | Pitch ↑ | Expressiveness ↑ | Style-ACC ↑ | CLSP-Score ↑ | WER ↓ |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| VoxInstruct | 2.6K h | 0.76 | 0.99 | 0.23 | 0.41 | 0.60 | 0.50 | 8.6 |
| FireRedTTS3-Instruct | 330K h | 0.56 | 0.92 | 0.22 | 0.47 | 0.54 | 0.48 | 6.7 |
| Qwen3-TTS-VD | N/A | 0.66 | 0.90 | 0.18 | 0.42 | 0.54 | 0.50 | 6.1 |
| CapTTS-AR | 33.6K h | 0.55 | 0.98 | 0.18 | 0.36 | 0.52 | 0.45 | 11.9 |
| CapTTS-NAR | 33.6K h | 0.79 | 0.95 | 0.36 | 0.41 | 0.62 | 0.49 | 10.8 |
| ImageTTS-instruct | 9K h | 0.88 | 0.89 | 0.39 | 0.49 | 0.66 | 0.49 | 8.8 |

在同属 CapSpeech 指令数据的一组里，ImageTTS-instruct 在年龄 0.88、音高 0.39、表现力 0.49、Style-ACC 0.66、CLSP 分数 0.49 上处于最好位置，CapTTS-NAR 的 Style-ACC 为 0.62、CLSP 分数为 0.49，CapTTS-AR 的对应两项为 0.52 和 0.45。ImageTTS-instruct 只用 9K 小时，而 CapTTS 基线用 33.6K 小时，原文说明差异来自同一集合中部分子集不可用、部分音频路径无法可靠解析。跨组看整体 Style-ACC 为 0.66，只低于 VoxCPM2 的 0.69，CLSP 分数 0.49 与 VoxCPM2 的 0.48 和 CapTTS-NAR 的 0.49 基本持平，说明冻结的 Qwen3 文本表示与 DiT 学到的语音接地可以处理自然语言风格描述。没有胜出的地方是词错误率 8.8% 差于 VoxCPM2 的 5.7%，性别 0.89 低于 VoxInstruct 的 0.99，说明风格服从与内容保真、细属性之间仍有张力。结论依赖自动属性分类器，年龄性别用 Wav2Vec2 分类器、音高与表现力用 PENN 基频均值与标准差分档，分类器误差会传导到 Style-ACC，不能等同于人工听感。

### 图像先验的增益是收敛更快还是生成更好？

比较问题是：在 LibriTTS 受控训练中，图像预训练相对随机初始化在相同 100k 步和在损失对齐时各有何差距？公平条件是结构、隐空间、优化完全相同，只换初始权重，引导强度固定。下表同时比较生成空间的选择，阅读时先看同空间下预训练对随机的词错误率，再看隐空间对直接梅尔的 DNSMOS 与相似度 trade-off。

|  | Image-pretrained | Image-pretrained | Image-pretrained | Random initialization | Random initialization | Random initialization |
| --- | --- | --- | --- | --- | --- | --- |
| Generation space | WER (%) ↓ | SIM ↑ | DNSMOS ↑ | WER (%) ↓ | SIM ↑ | DNSMOS ↑ |
| Image-VAE latent | 2.7 | 0.78 | 3.78 | 4.2 | 0.77 | 3.72 |
| Direct mel | 3.1 | 0.80 | 3.56 | 4.2 | 0.80 | 3.51 |

两种生成空间下预训练都降低词错误率，图像隐空间是 2.7% 对 4.2%，直接梅尔是 3.1% 对 4.2%，说明内容增益稳定。空间选择则是质量与音色的权衡：两种初始化下图像隐空间的 DNSMOS 更高，直接梅尔的相似度更高，作者推测 VAE 隐变量更平滑结构化、预测更稳，而直接梅尔保留更多说话人频谱细节但序列更长、局部变化更细、重建稳定性差。

读图说明：下图是 LibriTTS 训练损失随更新步数的完整曲线，主图用 500 步滑动平均，右上小图放大 0.4 到 0.6 低损失区并用 10000 步平均，横轴单位是千步，纵轴是平均训练损失，蓝色实线是图像预训练、橙色虚线是随机初始化。

> **看图路径：** 1. 先对比蓝色图像预训练与橙色随机初始化在起点损失的高低；2. 再看横轴 75k 到 150k 区间两条曲线的相对位置；3. 最后看右上小图中 0.4 到 0.6 低损失区的放大趋势

[![原论文 Figure 3：Training loss on LibriTTS for image-pretrained and randomly initialized DiTs operating in the…](https://arxiv.org/html/2610.34807v1/training_loss_comparison.svg)](https://arxiv.org/html/2610.34807v1/training_loss_comparison.svg)

*论文图 3。原论文 Figure 3:：“Training loss on LibriTTS for image-pretrained and randomly initialized DiTs operating in the frozen image-VAE latent space.”。*

像素可见预训练起点损失显著更低且在重叠区间始终在下，小图显示 100k 步的预训练损失约等于随机初始化 150k 步的水平，说明达到同等损失所需优化步数和样本暴露更少。关键是损失对齐不等于生成对齐：随机初始化训到 150k 步、损失相当时词错误率仍是 3.8% 对 2.7%，相似度 0.76 对 0.78 左右，说明先验带来的不只是更快，还有更好的语言生成。限制是该结论来自 LibriTTS 延续协议和固定引导，不能直接搬到大规模或中文集。

### 文本与语音引导强度应该怎么配？

比较问题是：在 Seed 英文前 100 条的网格搜索中，文本引导强度和语音引导强度分别如何影响词错误率和相似度？条件是固定一个、扫另一个，星号标出最低词错误率和最高相似度的格点。下文数字都是该子集上的搜索值，不是最终全集成绩，引用时要注明范围。

**文本引导强度 × 语音引导强度：** 文本引导强度控制生成多贴合转录文本，影响可懂度和词错误率；语音引导强度控制多贴合参考语音，影响说话人相似度。二者在无分类器引导采样中分别对有条件和无条件速度场加权，搭配调参才能在读对内容和保住音色之间取得平衡。

原文报告：先固定文本为 2.0 扫语音，相似度随语音强度升到 1.8 达最大 0.651，之后持平或略降；再固定语音为 1.8 扫文本，词错误率从 1.0 时的 5.32% 降到 2.5 时的最小 0.55%，之后回升。热力图还显示过强文本引导会轻微拉低相似度，语音超过 1.8 几乎无额外收益。所以两者要联合调，在该次搜索中 2.5 与 1.8 的组合在准确率与相似度间取得较好平衡。代价是这是事后网格最优，实际部署换数据集、换参考时长或换声码器都要重调，不能把 0.55% 当作可直接部署的期望值。

### 哪些结论还不能推广？

首先是音色瓶颈。冻结 VAE 带来即插即用的便利，但重建 PESQ 缺口和中文集相似度落后指向同一限制：图像压缩偏好平滑结构，可能丢掉细粒度说话人频谱细节。直接梅尔建模相似度更高但 DNSMOS 更低，说明换空间能缓解一端却恶化另一端。未来工作提出把图像 VAE 向语音适配，这正是承认当前冻结选择的代价。

其次是文本编码器的中文断词敏感性。附录用 4 个中文失败案例加逗号做诊断，加逗号后整句字符错误率从 21.21% 降到 1.52%，基于识别文本转拼音的音节错误率从 13.64% 降到 0.00%，token 切分也从单 token 变为多词加逗号。但作者明确说逗号同时改变上下文表示和韵律，不能孤立归因于切分，也不对韵律自然度和集外泛化做主张。英文多 BPE 词错误率更高的观察同样混杂词长、词频和专有名词，不能当作因果。

最后是成本与统计缺口。原文给了训练资源和推理 50 步欧拉，但没有报告延迟、帧率、收敛所需的总时长换算和多次种子的方差，主观 MOS 每系统 30 条、每条 10 人，样本量有限。趋势不能推广到每一句，自动分与人工评价也不能互替。

### 要复现第一步该做什么？

先复现重建上限，因为它不涉及 DiT 训练、最能暴露环境问题。按附录配 100 维梅尔、FFT1024、Hann 窗 1024、跳长 256 提对数梅尔谱图，做双线性缩放到 F 为 512、右补到 16 倍数、全局最大最小归一、复制 3 通道、冻结 FLUX.2 VAE 编解码、逆变换后接同一 BigVGAN-v2，在 LibriTTS 和 LibriSpeech 各 100 句上算 PESQ、STOI、相似度、DNSMOS、UTMOS，对齐 0.99 量级的 STOI 和 0.95 量级的相似度。

再复现小规模对照：同结构同隐空间，分别载入 FLUX.2 DiT 权重和默认随机初始化，在 LibriTTS 上按学习率 1×10^-4、批量 128 训练，固定引导文本 4 语音 1，在固定 200 句延续协议上比 100k 步的词错误率与相似度。注意推理要按伪代码把参考隐变量放条件张量前缀并全程固定，目标全长从高斯更新 50 步欧拉，最后只留延续段。内部英文集的参考与目标文本在补充材料，匿名演示页是第三方链接，只能证明论文提到该地址，不能当作作者已开源；代码与权重待接收后公开，所以当前复现仍需自备 FLUX.2、Qwen3、BigVGAN-v2 与 Emilia、CapSpeech 数据。

### 什么时候值得尝试这种图像到语音的路？

当你已经有强图像扩散 Transformer 和冻结图像 VAE，又想快速验证语音生成，且更在意语言准确率和听感而非极致音色克隆时，这条路值得一试。它的好处是省掉语音专用编码器训练，用伪 RGB 桥接就能复用图像压缩结构；图像预训练权重在受控对比中把 100k 步词错误率从 4.2% 降到 2.7%，且损失对齐后仍有差距，说明先验不只是热启动。

代价同样具体：频率分辨率与序列长度成正比，512 是平衡点；双引导要联合重调；冻结 VAE 的音色天花板在中文集已经显现。还需要补的验证是：解冻或轻量适配 VAE 能否在不丢 DNSMOS 下提相似度；在更大更多样指令数据下风格与内容的联合曲线。

以及真实延迟与多种子稳定性。记住适用边界：可比数据下的语言与听感竞争力成立，全面超越大系统不成立；诊断性标点实验支持文本条件组织会影响发音，不支持切分是唯一原因。

<details>
<summary>📎 论文与评分元数据</summary>

排名：前25% | 文档类型：方法研究 | [arXiv 原文](https://arxiv.org/abs/2610.34807v1)

</details>

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。

- 评分规则：type-aware-v1

- 评分模型：muse-spark-1.3-contributor

- 评分请求协议：openai_responses

---

[← 返回 2026-10-27 语音/音乐/音频论文速递](/audio-paper-digest-blog/posts/2026-10-27/)
