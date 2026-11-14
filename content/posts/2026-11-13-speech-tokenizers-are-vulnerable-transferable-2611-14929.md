---
title: "Speech Tokenizers are Vulnerable: Transferable Semantic Attack and Robust Tokenizer"
date: 2026-11-13
draft: false
tags: [音频系统攻击与防御, 语音编码, 对抗攻击构造, 对抗训练, 对抗鲁棒性]
categories: [论文速递]
description: "论文把语音分词器视为语义安全的前端瓶颈，提出联合多个代理语义编码器的可迁移语义攻击 T-SemAttack，并据此设计结合含噪训练和语义蒸馏的 ROSETok；主实验显示攻击在保持可接受听感的同时提高多个 ASR 与 LALM 的 WER，但它是离线且计算较慢，ROSETok 的鲁棒性也只在其训练分布和威胁模型内得到验证。"
hiddenInHomeList: true
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_arxiv_id: "2611.14929"
paper_digest_workbench_contract: "researcher-workbench"
paper_digest_workbench_schema_fingerprint: "1f09b594c317cc38e934de27a5b0e8ceb4baa50ef79bd4f8683dd9adea720fe7"
paper_digest_reader_title: "语音分词器为何脆弱：迁移语义攻击与鲁棒分词器"
paper_digest_original_title: "Speech Tokenizers are Vulnerable: Transferable Semantic Attack and Robust Tokenizer"
paper_digest_arxiv_version: 1
paper_digest_arxiv_versioned_id: "2611.14929v1"
paper_digest_arxiv_abs_url: "https://arxiv.org/abs/2611.14929v1"
paper_digest_arxiv_pdf_url: "https://arxiv.org/pdf/2611.14929v1.pdf"
paper_digest_primary_task: "音频系统攻击与防御"
paper_digest_tags_contract: "paper-tag-flat-tags"
paper_digest_tags_schema_fingerprint: "27e36280a4b8d3df62ebe54d3ab037920f4d69feb2b554163f01bbae2caf4338"
paper_digest_tags_selection_contract: "paper-tag-selection"
paper_digest_tags_registry_version: "paper-tag-catalog"
paper_digest_tags_registry_sha256: "9673bc0122e1905a5dcfd8b223675400cc2fa4c36095bc0e5f817edf99a0ec5c"
paper_digest_tags_concepts: [{"facet":"task","id":"task.audio-system-attack-defense","label":"音频系统攻击与防御"},{"facet":"task","id":"task.speech-coding","label":"语音编码"},{"facet":"method","id":"method.adversarial-attack","label":"对抗攻击构造"},{"facet":"method","id":"method.adversarial-training","label":"对抗训练"},{"facet":"research_focus","id":"research_focus.adversarial-robustness","label":"对抗鲁棒性"}]
paper_digest_primary_method: "对抗攻击构造"
paper_digest_score: 7.5
paper_digest_rank_bucket: "前25%"
paper_digest_document_type: "方法研究"
paper_digest_one_sentence: "论文把语音分词器视为语义安全的前端瓶颈，提出联合多个代理语义编码器的可迁移语义攻击 T-SemAttack，并据此设计结合含噪训练和语义蒸馏的 ROSETok；主实验显示攻击在保持可接受听感的同时提高多个 ASR 与 LALM 的 WER，但它是离线且计算较慢，ROSETok 的鲁棒性也只在其训练分布和威胁模型内得到验证。"
paper_digest_authors: [{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Zhisheng Zhang"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Yifan Mi"},{"affiliations":["Shenzhen International Graduate School, Tsinghua University"],"name":"Yixuan Zhou"},{"affiliations":["Shenzhen International Graduate School, Tsinghua University"],"name":"Haiyun Li"},{"affiliations":["Shenzhen International Graduate School, Tsinghua University"],"name":"Shengbo Cai"},{"affiliations":["Shenzhen International Graduate School, Tsinghua University"],"name":"Dongfu Song"},{"affiliations":["Shenzhen International Graduate School, Tsinghua University"],"name":"Ziang Xu"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Jie Hao"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Zhiyong Wu"}]
paper_digest_abstract_sha256: "7ea51fb5d72f1d7466912b64f8ddc05f08420a8719ed31fc4fcc863bf7e0c243"
paper_digest_sidecars: {"citation.bib":{"sha256":"94d8596ad1a3e402b4216bc2147fbbd5365e02e7d5399eb9d770939605ed594c","url":"/audio-paper-digest-blog/client/papers/2026-11-13/2611-14929/citation.bib"},"citation.json":{"sha256":"ae9344782d0fd84ceccaf8b5a54f04550841ea1570aa7baca1252a52f7cfa62f","url":"/audio-paper-digest-blog/client/papers/2026-11-13/2611-14929/citation.json"},"citation.ris":{"sha256":"39221e7e92493d96119659545a16438293d6665556112e35da81b6019a74c8bd","url":"/audio-paper-digest-blog/client/papers/2026-11-13/2611-14929/citation.ris"},"rethink-context.json":{"contract":"paper-research-context","schemaFingerprint":"5d4e79f7d3ee65b39ccb38281548bf20a1b2041ab7a27625eaf97ab9909a8383","sha256":"0e1d367ccfe346150a80f8b12221364130329f1bdc9beba4546753d20910783a","url":"/audio-paper-digest-blog/client/papers/2026-11-13/2611-14929/rethink-context.json"}}
paper_digest_api_reader_contract: "beginner-researcher"
paper_digest_api_reader_schema_fingerprint: "cd8baf5b8bda3a49eec64f6005931af63de4e9a13148cba5f354c661ca6e9df2"
paper_digest_api_reader_article_sha256: "c2a323c1593ce389ab9bed6cef358d0ffc7da4b1a0cbd54d954e261e677d0102"
paper_digest_api_reader_plan_sha256: "7e81b7fed333775afd401e81fb9e1f3c0ab60165cfd858bfcf08769660c1c167"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings"
paper_digest_api_reader_source_binding_schema_fingerprint: "d2a2607a6e561909473022eb43f56332ee357af8568566a095c29083ffdec9cc"
paper_digest_api_reader_source_bindings_sha256: "caa3e0d42ef6f8a771d3564256f2caa945b4fdbc6d68f48e3f798d6e344e48dd"
paper_digest_api_reader_source_table_count: 5
paper_digest_api_reader_source_formula_count: 5
paper_digest_api_reader_structured_artifacts_sha256: "fd341c1f1af4d3decc6f343f8cd9621d7fbcf2a39d559f62d9385fab5c8079d0"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity"
paper_digest_api_reader_author_identity_schema_fingerprint: "1e3fd3a9a56c9a5bf52df8df5022690b9a3fa92e83e934f295af87c0e258ed2f"
paper_digest_api_reader_author_identity_sha256: "c3ae8ce2dd9ede899a5788f01e5787125f77aa8174674bae1732e9893656a6a4"
paper_digest_api_reader_author_count: 9
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity"
paper_digest_api_reader_resource_identity_schema_fingerprint: "33b0be17118be61f39b85ce690c8da17e91f2864bb65e85284f60c40067328e0"
paper_digest_api_reader_resource_identity_sha256: "348c459b90157645db57cb0eb296e7a92a6d07c5f240d832945b421c6eb2a07b"
paper_digest_api_reader_resource_count: 2
paper_digest_api_reader_figure_persistence: "ephemeral-no-persisted-figure-assets-v1"
paper_digest_api_reader_decision_projection: "api-reader-decision-projection"
paper_digest_api_reader_decision_projection_schema_fingerprint: "e56feb5ab75c8710904916b898f73dab9bb18bdf65bb60b7ed2edf7f99cea860"
---

# 📄 语音分词器为何脆弱：迁移语义攻击与鲁棒分词器

> 英文题目：*[Speech Tokenizers are Vulnerable: Transferable Semantic Attack and Robust Tokenizer](https://arxiv.org/abs/2611.14929v1)*

<!--paper-tag-hierarchy-v1:start-->

**研究分类**

- **研究任务**：[音频系统攻击与防御](/audio-paper-digest-blog/papers/?concept=task.audio-system-attack-defense)；[音频编码](/audio-paper-digest-blog/papers/?concept=task.audio-coding) → [语音编码](/audio-paper-digest-blog/papers/?concept=task.speech-coding)
- **研究方法**：[对抗攻击构造](/audio-paper-digest-blog/papers/?concept=method.adversarial-attack)；[对抗训练](/audio-paper-digest-blog/papers/?concept=method.adversarial-training)
- **研究重点**：[鲁棒性](/audio-paper-digest-blog/papers/?concept=research_focus.robustness) → [对抗鲁棒性](/audio-paper-digest-blog/papers/?concept=research_focus.adversarial-robustness)

<!--paper-tag-hierarchy-v1:end-->

> 评分：**7.5/10** | 创新 1.2/2 | 技术严谨 1/1.5 | 实验充分 1.2/1.5 | 清晰度 0.7/1 | 影响力 1.1/1.5 | 开源 1/1.5 | 可复现 0.3/0.5 | 工程/实践 1/1.5


## 👥 作者与机构

- Zhisheng Zhang：机构信息未能在本次解析中与作者逐人可靠绑定
- Yifan Mi：机构信息未能在本次解析中与作者逐人可靠绑定
- Yixuan Zhou：Shenzhen International Graduate School, Tsinghua University
- Haiyun Li：Shenzhen International Graduate School, Tsinghua University
- Shengbo Cai：Shenzhen International Graduate School, Tsinghua University
- Dongfu Song：Shenzhen International Graduate School, Tsinghua University
- Ziang Xu：Shenzhen International Graduate School, Tsinghua University
- Jie Hao：机构信息未能在本次解析中与作者逐人可靠绑定
- Zhiyong Wu：机构信息未能在本次解析中与作者逐人可靠绑定

## 📌 核心摘要

论文研究语音分词器把连续语音编码成下游语音识别和大音频语言模型可用的表示或离散单元，而微小波形扰动经编码、量化、解码或下游建模后可能改变语义，造成输出错误。T-SemAttack 接收原始和对抗语音，先并行提取 S3Tokenizer、HuBERT、Whisper 编码器和 MFCC 四种表示，并降低同一样本清洁与扰动表示的余弦相似度；再按原始语音短时频谱计算心理声学掩蔽阈值，只在扰动功率谱密度超过阈值时惩罚；最后在 \(\ell_\infty\) 预算内用投影梯度更新生成对抗波形。ROSETok 接收清洁、含噪或受攻击语音，先编码为 1280 维潜表示，再由九层残差向量量化器和解码器重建波形；训练时冻结 Whisper 教师，把含噪输入的编码表示拉向清洁语音语义表示，并分基础预训练和用 T-SemAttack 样本做攻击感知微调两阶段。在 Seed-TTS (EN) 上，T-SemAttack 的平均词错率为 81.872%，高于 E2E-VGuard 的 23.154%；在 LibriTTS 上，其 RTF 为 21.800，低于 E2E-VGuard 的 26.797，SNR 为 16.319。这些结果支持攻击在多种模型上的迁移性，但主要覆盖 Seed-TTS (EN/ZH)、LibriTTS 等，尚不能证明对其他分词器、语言、任务或未测防御同样成立；作者明确 T-SemAttack 追求音频正常可用而非真正不可感知，且去掉语义攻击损失后对 HuBERT、Whisper 和 VibeVoice-ASR 的攻击成功率仅约 1.556%，说明其依赖语义约束。ROSETok 主要在 Whisper 教师、两阶段训练及含噪和 T-SemAttack 扰动下验证，依赖训练分布和威胁模型；对分布外噪声或未测自适应攻击可能失效，不能视为完整防御，部署还需监控、去噪、对抗评估等防护。训练使用 8 张 H100，原文未披露训练时长、推理延迟、吞吐和部署成本。

## 🔗 开源与复现资源

- 代码相关资源：<https://wxzyd123.github.io/t-semattack> → <https://wxzyd123.github.io/t-semattack/> — 链接可访问（HTTP 200）

- 演示资源：<https://wxzyd123.github.io/t-semattack> → <https://wxzyd123.github.io/t-semattack/> — 链接可访问（HTTP 200）

可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 语音分词器在语音系统里接什么、交什么

语音分词器是语音进入自动语音识别（ASR）系统和大音频语言模型（LALM）的前端。输入通常是幅度归一化到 [-1, 1] 的波形，编码器先把波形变成连续隐表示；随后，量化器可用向量量化（VQ）或有限标量量化（FSQ）把该表示变成离散 token。下游模型有的直接接收连续表示，有的把离散 token 与文本推理过程对齐，因此分词器同时承担声学压缩和语义接口两项工作。

评价这个前端时，需要区分“连续表示被改了多少” 和“量化后的 token 是否改变”。硬量化在量化区间内局部常值，在边界处不可导；小幅波形扰动可能只改变连续表示，也可能让表示跨过边界、换成另一个 token。论文把优化目标放在量化前的连续表示上，再通过下游结果检验表示漂移是否转化为识别错误。

**语音分词器 × 量化器：** 语音分词器是连续波形进入下游模型的前端，编码器把波形压成连续隐表示，随后由量化器把该表示映射为离散 token 或供连续接口使用。把两者放在一起看，是因为同一份隐表示既决定连续特征的质量，也决定量化后 token 是否改变；因此攻击可以先作用于量化前的表示，而下游既可能看到连续特征，也可能看到离散 token。

### 已有攻击为什么常绕开语音前端

已有针对语音系统的对抗攻击，很多直接把 ASR 的输出目标或 CTC 损失当作优化对象。这一类做法需要知道整体架构，常常还要反复调用解码器或匹配文本目标，优化成本较高，而且难以分清究竟是前端表示、声学模型还是语言模型造成了错误。另一方面，已有研究显示语音分词器对高斯噪声敏感；要回答“专门朝语义方向优化的扰动是否更危险”，需要测试经过语义方向优化的扰动。

本文把目标前移到分词器的语义编码过程。它只训练一组可微的代理语义编码器，让同一段对抗波形在多个表示空间中同时偏离原语音；目标 ASR 或 LALM 以黑盒接口接收最终波形。与只针对输出文本的攻击相比，这种做法的优化对象是共享的前端语义表示，因而更接近“跨模型迁移” 的问题；迁移效果由目标模型实验确认。

与高斯噪声、E2E-VGuard、AudioShield 等对比项放在一起时，还要核对条件：它们是否使用相同的测试语料、是否保持相近的感知质量、是否需要预训练、以及是在线逐样本优化还是先在训练集上学习通用扰动。本文把攻击设定在离线优化场景，主要比较感知质量、RTF 和跨模型 WER；这些指标分别刻画不同维度，需要并列报告。

### 这篇论文要回答的脆弱性问题

论文要回答的问题可以写成：只改输入波形，在目标模型内部梯度和参数保持黑盒的情况下，能否破坏语音分词器的语义表示，并把错误传到 ASR 和 LALM？这里的攻击者能拿到原始语音和一组可计算梯度的代理语义编码器，目标分词器的细节保持黑盒；攻击离线进行，允许优化耗时较长，要求扰动在听感上可接受。防御者被设定得较强，可以尝试检测扰动、去噪或做数据变换，因此攻击还要面对自适应防御。

连续分词器和离散分词器都先产生连续表示，离散分词器再多一步量化。本文把优化目标放在任意量化之前的连续表示上：如果漂移改变了连续接口的输出，下游会直接收到错误特征；如果漂移跨过量化边界，离散 token 会改变。量化层边界处不可导，优化目标因此落在量化前连续表示，并通过下游实验检验表示漂移是否转化为识别错误。

读图时先看 4 个分词器面板的纵轴，FSC 是口语命令意图识别指标，数值越高越好；虚线是干净输入，蓝色曲线是从 20 dB 到 5 dB 的高斯噪声，红色三角是由 T-SemAttack 在 19.48 dB 条件下得到的点。重点比较红色三角是否落在蓝色曲线右端之下，以及不同分词器面板的下降幅度是否一致。

> **看图路径：** 1. 先比较四个分词器面板中红色三角与虚线 Clean 的位置；2. 再看蓝色 Gaussian 曲线随 SNR 从 20 dB 降到 5 dB 的变化；3. 注意红色三角标注的 19.48 dB 与各面板 FSC 数值

[![原论文 Figure 1：Gaussian Noise vs. T-SemAttack across Tokenizers.](https://arxiv.org/html/2611.14929v1/tokenizer_noise_score.svg)](https://arxiv.org/html/2611.14929v1/tokenizer_noise_score.svg)

*论文图 1。原论文 Figure 1:：“Gaussian Noise vs. T-SemAttack across Tokenizers.”。*

图中 StableToken、CosyVoice、CosyVoice 2 和 CosyVoice 3 4 个面板分别标出 T-SemAttack 的 FSC 值 35.0、3.6、20.4 和 28.0。可以看到，红色三角普遍低于同等面板中蓝色高斯噪声曲线在 5 dB 时的取值，说明专门优化的语义扰动比随机高斯噪声更容易破坏下游意图识别。该图的范围限于 FSC 和 SmolLM2-135M 的量化前表示；推断所有下游 ASR、问答或人耳听感时需结合相应实验。

### T-SemAttack 如何从波形构造语义扰动

T-SemAttack 的输入是干净语音 x，输出是保持在同一幅度范围内的对抗语音 x_adv = x + δ。它把同一段 x_adv 送入 4 个可微的代理语义编码器：S3Tokenizer 用来模拟离散语音分词器的语义编码过程；HuBERT 提供自监督学习得到的深层语义表示；Whisper 编码器提供经过大规模 ASR 预训练的语义表示；MFCC 作为额外的低层声学目标。4 路输出共同参与表示偏离损失，使扰动覆盖多个模型的表示偏差。

**代理语义编码器 × 可迁移语义攻击：** 代理语义编码器是攻击者可计算梯度的替代前端，分别提供离散分词器、自监督语音、ASR 预训练和低层声学等不同视角的表示；可迁移语义攻击不直接使用目标模型梯度，而是在这些替代表示上寻找能改变语义方向的扰动。二者搭配后，攻击只需访问替代编码器和输入波形，目标 ASR 或 LALM 仍可作为黑盒接收同一段对抗音频，但迁移是否成立仍要由实验检验。

整体目标同时压低多个编码器上的表示相似度，并约束扰动的能量和感知质量。论文写作式 (1)，其中 λ_sem、λ_psy 和 λ_2 分别控制语义项、心理声学项和 L2 项；原文取 λ_sem = 100、λ_psy = 10^{-3}、λ_2 = 0.1，并把扰动的无穷范数限制在 ε = 8/255，且要求 x_adv 仍落在 [-1, 1]^T。

\[\displaystyle\min_{\delta}\quad\mathcal{L}=\lambda_{\mathrm{sem}}\mathcal{L}_{\mathrm{sem}}(x,x_{\mathrm{adv}})+\lambda_{\mathrm{psy}}\mathcal{L}_{\mathrm{psy}}(x,\delta)+\lambda_{2}\|\delta\|_{2},\]

语义项直接比较编码器表示。设共有 K 个代理编码器 f_k，原语音和对抗语音经过同一编码器后的表示分别为 f_k(x) 与 f_k(x_adv)，式 (2) 把各编码器的余弦相似度相加并最小化，因而降低原表示与扰动表示的方向一致性。原文文字称余弦相似度先在帧级平均，再跨多个编码器相加；式 (2) 显示的是这个组合后的语义损失。

\[\mathcal{L}_{\mathrm{sem}}=\sum_{k=1}^{K}\operatorname{CosSim}\big(f_{k}(x),f_{k}(x_{\mathrm{adv}})\big).\]

作者给出的迁移解释是：多个语义编码器虽然训练目标不同，但都可能共享 Mel 输入瓶颈和相似的语义结构，因此同时破坏这些共享表示，可能也破坏未见目标模型中的对应表示。这个解释与后文的梯度方向分析相互呼应，并作为迁移现象的机制假说；每个目标模型的效果由实测确认。

看图前先沿上方的 T-SemAttack 主路径：干净语音和扰动相加生成对抗语音，再进入 4 个代理语义编码器；表示损失与心理声学约束在右侧汇合，优化结果被画成错误 token，最后才交给 ASR 或 LALM。下半部分先只辨认 ROSETok 的编码器、语义教师、九层量化器、解码器和判别器，具体训练关系留到后文。

> **看图路径：** 1. 沿 T-SemAttack 上半部分确认干净语音、扰动和对抗音频如何相加；2. 看四个代理语义编码器的输出如何汇入表示损失，心理声学约束又在哪里加入；3. 在下半部分辨认 ROSETok 的编码器、语义教师、九层量化器、解码器和判别器

[![原论文 Figure 2：The architecture and pipeline of T-SemAttack and ROSETok.](https://arxiv.org/html/2611.14929v1/workflow.png)](https://arxiv.org/html/2611.14929v1/workflow.png)

*论文图 2。原论文 Figure 2:：“The architecture and pipeline of T-SemAttack and ROSETok.”。*

图中上半部分清楚显示了对抗语音只通过波形交给下游，目标模型作为黑盒接收波形，反向传播只在代理编码器内进行；4 个代理分支的表示损失和扰动约束共同进入优化目标，右侧标出错误 token 导致错误理解。下半部分显示 ROSETok 把含噪或干净音频送入编码器，隐藏状态接受语义教师监督，再经九层 RVQ 量化与解码器重建，判别器给出对抗损失和特征匹配损失。两张流程合在一起说明：攻击针对前端语义表示，防御则把语义对齐和波形重建放在分词器训练内部。

### 心理声学掩蔽如何把扰动藏进可接受范围

表示漂移是攻击的优化目标：它要改变编码器输出的方向和内容，并把扰动藏在听感可接受的范围内。只追加大扰动当然可以提高 WER，但会毁掉音频；因此还需要一个听感约束。心理声学掩蔽根据原语音的短时频谱计算每个时频单元的掩蔽阈值 Θ(x)，再把扰动 δ 的功率谱密度 PSD(δ) 与阈值比较。式 (3) 的罚分集中在扰动能量超过该阈值的时频单元，低于阈值的单元保持原目标。

**表示漂移 × 心理声学掩蔽：** 表示漂移是优化目标：通过最小化原音频与对抗音频在编码器输出上的余弦相似度，让语义表示朝不同方向发展；心理声学掩蔽是约束条件：只对超过原音频掩蔽阈值的时频能量罚分，把扰动尽量留在听感上不显眼的位置。两者组合，前者决定“往哪里推”，后者决定“推多大、藏在哪些时频单元”，但可听阈值来自原文的心理声学模型，不等于对所有人都不可感知。

\[\mathcal{L}_{\mathrm{psy}}=\sum_{t,f}\max\big(0,\operatorname{PSD}_{t,f}(\delta)-\Theta_{t,f}(x)\big),\]

这个损失让优化倾向把能量放进原语音较强、掩蔽阈值较高的频带或局部时段，从而在给定 SNR 附近平衡攻击与听感。论文把可感知性目标限定为保持音频正常使用，主观实验的 MOS-Q 为 3.01，说明总体听感达到可接受门槛。

原文把 λ_psy 从 10^{-1} 扫到 10^{-5}。当它取 10^{-3} 或更小时，3 个模型上的攻击效果趋于稳定，而 SNR 继续下降，所以作者取 10^{-3}。消融中若去掉心理声学项和 L2 项，SNR 降到 8.5，PESQ 低于 2.08；移除语义攻击损失后，攻击成功率只有约 1.556%。这两侧结果说明语义项和感知项各自承担关键作用；当前参数的最优性范围限定在本文测试条件。

### 攻击优化与 ROSETok 的两阶段训练

攻击本身的优化采用 PGD 风格的投影更新。每一步沿总损失对扰动的符号梯度下降，再把 δ 投影回无穷范数不超过 ε 的球内；式 (4) 是原文的更新式。超参数为初始学习率 1×10^{-3}、最小学习率 1×10^{-6}、最多 500 步、ε = 8/255；实现中采用 SGD 配合自适应平台学习率调度器，在损失停滞时降低学习率。整个攻击是离线执行的，目标模型只看最终波形，梯度信息留在代理优化中。

\[\delta\leftarrow\operatorname{Proj}_{\|\delta\|_{\infty}\leq\epsilon}\left(\delta-\alpha\cdot\operatorname{sign}\left(\nabla_{\delta}\mathcal{L}\right)\right),\]

这种优化计算开销较高：在 LibriTTS 上，T-SemAttack 的 RTF 为 21.800，低于 E2E-VGuard 的 26.797，但远高于高斯噪声的 0.003。RTF 按各样本攻击时间之和除以音频总时长计算，数值越低越省计算；因此它适合离线生成和评测，实时在线使用需要另作工程优化与验证。

防御侧的分词器称为 RObust SpEech Tokenizer（ROSETok）。它基于 DAC 架构：编码器把波形压成 1280 维隐表示，九层残差向量量化器每层保留 1024 个 8 维码本向量，解码器再从离散码重建波形，原文报告的压缩比约为 17.8。训练时加入冻结的 Whisper large-v3 语义教师，教师同样输出 1280 维语义嵌入；另有一个多频判别器，用 hinge 损失做对抗学习。

**语义蒸馏 × 判别器：** 语义蒸馏由冻结的 Whisper 教师提供干净语音的语义嵌入，约束编码器即使接收含噪或受攻击输入，也输出与干净语义接近的隐状态；判别器则区分真实音频与解码重建音频，并通过对抗损失和特征匹配损失提升重建质量。前者负责下游语义稳定，后者负责波形保真，二者组合使分词器不只是生成“像音频” 的输出，还尽量保留可供下游使用的语义表示。

ROSETok 的总损失把语义蒸馏、波形重建、码本、承诺、对抗和特征匹配项相加。式 (5) 中，前四项的权重分别为 λ_distill = 5.0、λ_recon = 15、λ_cb = 1.0、λ_commit = 0.25，对抗损失与特征匹配损失的权重都为 1。语义蒸馏的具体形式是让编码器隐表示 z 与教师语义嵌入 z_sem 的余弦相似度尽量高，也就是最小化 1 - CosSim(z, z_sem)；重建和判别器部分则负责保持波形质量。

\[\mathcal{L}_{\mathrm{tok}}=\lambda_{\mathrm{distill}}\mathcal{L}_{\mathrm{distill}}+\lambda_{\mathrm{recon}}\mathcal{L}_{\mathrm{recon}}+\lambda_{\mathrm{cb}}\mathcal{L}_{\mathrm{cb}}+\lambda_{\mathrm{commit}}\mathcal{L}_{\mathrm{commit}}+\mathcal{L}_{\mathrm{adv}}+\mathcal{L}_{\mathrm{fm}},\]

训练分 2 个阶段。第一阶段在 Emilia 的中英文数据上训练 ROSETok-Base，总量约 96.7k 小时；输入加入 4/255 到 24/255 的高斯噪声，重建目标是对应的干净音频，同时做语义蒸馏。该阶段用 AdamW、初始学习率 1×10^{-4}、全局 batch size 128、CosineLR、1000 步 warmup、200,000 步，硬件为 8 张 NVIDIA H100，约 20 小时。第二阶段是攻击感知微调：从 LibriSpeech 随机选 2,000 条语音，用 T-SemAttack 生成扰动输入，再以原始干净音频和教师表示作监督，学习率降到 5×10^{-6}、batch size 64、2,000 步，得到 ROSETok-AAF。该阶段训练分词器本身，目标 ASR 或 LALM 仅用于后续评测。

### 攻击评测怎样划分数据、模型和指标

攻击实验使用两组语音数据。LibriTTS 取单说话人英语样本，用来观察英语单说话人场景；Seed-TTS-Eval 覆盖中英文和多说话人，随机抽取 200 条英语和 200 条中文。ROSETok 的重建与下游评测主要在 Seed-TTS (EN) 上进行；问答实验使用 AIR-Bench 的 100 条随机样本，由 DeepSeek-V4-Flash 作为评判模型给出回答质量评分（RQS）。

ASR 目标包括 HuBERT、Whisper、Qwen3-ASR、VibeVoice-ASR、FireRed-ASR、Fun-ASR、iFlytek、Doubao 和 GPT-4o-mini-transcribe；LALM 目标包括 Qwen2-Audio、Qwen3-Omni、Audio-Flamingo 3 和 Gemini 3 Flash。对 LALM 的转写评测使用统一提示，要求只转写音频内容，输出保持纯转写，使它能与普通 ASR 在相同目标下比较。黑盒 API 只用于迁移评测；评测遵循正常访问条件。

指标方向必须分开看：WER 是词错误率，越高表示识别被破坏得越严重，超过 100% 在插入很多时可能出现；RTF 越低表示计算成本越低；SNR 越高表示扰动能量相对原语音越小；MOS 越高表示主观听感越好；FSC 指标值越高表示口语命令意图识别越好。

STOI 越高表示重建语音的短时客观可懂度越好；PESQ 用于衡量感知语音质量；RQS 越高表示回答质量越好。不同数据集、不同目标模型和不同输入条件的 WER 适合分别比较，统一名次需以可比条件为前提。

比较方法包括高斯噪声、E2E-VGuard 和 AudioShield。主表在相同测试语料上报告 WER、SNR 和 RTF，但感知质量和攻击强度是两个维度：高 WER 需与 SNR、MOS 一起解释；低 SNR 或差 MOS 会削弱攻击的可用性。本文的威胁模型固定为离线代理集成攻击，目标模型以黑盒方式提供输入输出，因此后文所有迁移结论以这一条件为前提。

### ASR 主结果：攻击强度、听感与计算代价

这张表比较同一离线攻击设定下，高斯噪声、E2E-VGuard、AudioShield 与 T-SemAttack 在多个 ASR 系统上的平均 WER，并同时给出 RTF 和 SNR。WER 越高表示语义破坏越强，RTF 越低和 SNR 越高则分别表示计算成本更低、波形失真更小；三项指标共同刻画攻击效率、波形失真和语义破坏，需要联合解读。

| Methods | RTF(↓) | SNR(↑) | Surrogate Model | Surrogate Model | Open-source Model | Open-source Model | Open-source Model | Open-source Model | Black-box Model | Black-box Model | Black-box Model | Avg. |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Methods | RTF(↓) | SNR(↑) | HuBERT | Whisper | Qwen3-ASR | VibeVoice | FireRed-ASR | Fun-ASR | iFlytek | Doubao | GPT-4o | Avg. |
| LibriTTS: A single-speaker English dataset. |  |  |  |  |  |  |  |  |  |  |  |  |
| Clean | – | – | 2.694 | 2.079 | 2.369 | 2.156 | 2.017 | 1.866 | 3.648 | 3.463 | 2.234 | 2.503 |
| Gaussian Noise | 0.003 | 15.197 | 3.228 | 2.213 | 2.583 | 2.736 | 2.933 | 2.488 | 3.837 | 3.691 | 6.677 | 3.376 |
| E2E-VGuard | 26.797 | 14.341 | 10.781 | 5.834 | 6.781 | 8.325 | 11.376 | 8.842 | 8.672 | 7.618 | 8.030 | 8.473 |
| AudioShield | – | -2.440 | 16.007 | 10.363 | 15.450 | 15.241 | 13.800 | 12.171 | 16.815 | 14.273 | 11.049 | 13.908 |
| T-SemAttack | 21.800 | 16.319 | 156.913 | 111.367 | 27.388 | 63.555 | 33.529 | 43.679 | 49.607 | 20.004 | 46.089 | 61.348 |
| Seed-TTS (EN): A multi-speaker English dataset. |  |  |  |  |  |  |  |  |  |  |  |  |
| Clean | – | – | 6.286 | 0.851 | 1.040 | 1.433 | 5.906 | 1.015 | 1.942 | 3.001 | 1.907 | 2.598 |
| Gaussian Noise | 0.003 | 15.228 | 10.739 | 1.307 | 1.695 | 3.862 | 10.985 | 2.061 | 3.457 | 2.679 | 9.849 | 5.182 |
| E2E-VGuard | 26.797 | 12.907 | 42.084 | 15.913 | 15.643 | 26.609 | 35.936 | 20.541 | 19.051 | 14.233 | 18.374 | 23.154 |
| AudioShield | – | -2.364 | 62.779 | 42.840 | 50.674 | 51.296 | 54.301 | 56.806 | 54.181 | 61.297 | 42.172 | 52.927 |
| T-SemAttack | 21.800 | 17.598 | 189.289 | 125.913 | 37.445 | 103.887 | 65.406 | 63.779 | 71.726 | 29.948 | 49.457 | 81.872 |
| Seed-TTS (ZH): A multi-speaker Chinese dataset. |  |  |  |  |  |  |  |  |  |  |  |  |
| Clean | – | – | – | 3.086 | 0.790 | 1.521 | 1.760 | 0.614 | 1.560 | 1.109 | 2.984 | 1.678 |
| Gaussian Noise | 0.003 | 15.387 | – | 5.434 | 1.207 | 6.171 | 2.899 | 1.466 | 1.331 | 0.774 | 15.129 | 4.301 |
| E2E-VGuard | 26.797 | 13.607 | – | 18.392 | 5.322 | 27.258 | 8.896 | 6.879 | 3.119 | 1.944 | 18.279 | 11.261 |
| AudioShield | – | -2.435 | – | 28.113 | 19.998 | 50.729 | 16.609 | 23.267 | 14.345 | 30.221 | 37.687 | 27.621 |
| T-SemAttack | 21.800 | 17.652 | – | 109.100 | 18.833 | 144.637 | 19.293 | 29.021 | 19.214 | 6.298 | 60.116 | 50.814 |

在 LibriTTS 上，T-SemAttack 的 RTF 为 21.800，低于 E2E-VGuard 的 26.797；SNR 为 16.319，高于 E2E-VGuard 的 14.341。AudioShield 的平均 WER 为 13.908%，同时 SNR 为 -2.440 dB，表中显示音频质量受损明显，因此它的优势需结合听感代价判断。T-SemAttack 在 LibriTTS 上的平均 WER 为 61.348%，Seed-TTS (EN) 为 81.872%，Seed-TTS (ZH) 为 50.814%。

跨系统看，LibriTTS 上 iFlytek 和 GPT-4o-mini-transcribe 分别达到 49.607% 与 46.089%；Seed-TTS (ZH) 上 iFlytek 与 Doubao 分别为 29.021% 与 19.214%。迁移效果呈现目标差异：同一中文集上 GPT-4o-mini-transcribe 为 6.298%，低于 E2E-VGuard 的 18.279% 和 AudioShield 的 37.687%，说明 T-SemAttack 的强弱依目标系统而变。表中 HuBERT、Whisper 既作为代理编码器出现，又被列入 ASR 评测列；读取跨模型结果时需把这一训练与评测联系纳入解释。

作者把部分中文迁移归因于 Whisper 和 S3Tokenizer 的多语言训练；这一机制解释适用于相应条件，目标层面的具体效果仍以表中结果为准。

### 转写与问答：同一扰动怎样传到 LALM

这组图把同一批对抗语音送给 4 个 LALM，在 LibriTTS、Seed-TTS (EN) 和 Seed-TTS (ZH) 上测 WER。读图时先按数据集分面，再在同一分面里比较干净输入、Gaussian Noise、E2E-VGuard、AudioShield 和 T-SemAttack 的柱高；纵轴 WER 越高表示转写越差，不能把不同数据集的高度当同分布样本。

> **看图路径：** 1. 先按 LibriTTS、Seed-TTS (EN)、Seed-TTS (ZH) 分面；2. 在同一分面内比较 Clean、Gaussian Noise、E2E-VGuard、AudioShield 与 T-SemAttack 的柱高；3. 注意并非每个模型分面都是 T-SemAttack 最高

[![原论文 Figure 4：ASR performance across different datasets and LALMs, measured by WER (%).](https://arxiv.org/html/2611.14929v1/lalm_wer.svg)](https://arxiv.org/html/2611.14929v1/lalm_wer.svg)

*论文图 4。原论文 Figure 4:：“ASR performance across different datasets and LALMs, measured by WER (%).”。*

最明显的现象是 Qwen2-Audio：在 LibriTTS 上 WER 从 2.982% 升到 97.280%，说明转写几乎失效；在中文集上 Qwen2-Audio 和 Gemini 3 Flash 也分别达到 79.259% 和 81.300%。不过红色柱并不是每个分面都最高：在 Seed-TTS (EN) 的 Audio-Flamingo 3 与部分 Gemini 3 Flash 分面，AudioShield 的柱高超过 T-SemAttack。原文报告 11 个数据-模型组合的平均 WER 为 58.30%，高于 E2E-VGuard 的 16.76% 和 AudioShield 的 38.66%，但单个模型仍要看分面。

问答部分换了一个问题：转写错误是否也降低开放式音频问答的回答质量？这张表使用 AIR-Bench 的 100 条随机样本，评判模型为 DeepSeek-V4-Flash，RQS 越高表示回答越好；这是自动评分，不是人工问答评估。

| Input | Qwen2-Audio | Qwen3-Omni | Audio-Flamingo 3 | Gemini 3 Flash | Avg. (↓) |
| --- | --- | --- | --- | --- | --- |
| Clean | 6.63 | 7.73 | 8.14 | 7.81 | 7.58 |
| T-SemAttack | 4.58 | 5.23 | 6.20 | 5.89 | 5.48 |

4 个 LALM 的 RQS 都下降：Qwen2-Audio 从 6.63 降到 4.58，Qwen3-Omni 从 7.73 降到 5.23，Audio-Flamingo 3 从 8.14 降到 6.20，Gemini 3 Flash 从 7.81 降到 5.89，平均从 7.58 降到 5.48。它支持“同一扰动不仅影响转写，也影响问答回答质量” 的判断，但样本只有 100 条，且由单个自动评判模型打分；不能据此推断所有知识问答、长对话或人工听感都会同等下降。

### 注意力图能说明什么、不能说明什么

这几张注意力差分图不是性能表，而是对 Qwen2-Audio 单个干净-对抗音频对的定性观察。图中红色表示对抗输入相对干净输入注意力增加，蓝色表示减少；每个面板对应一层，颜色值来自 A_adv - A_clean。先看 Layer 0 是否有清晰结构，再看 Layer 8、16、24、31 是否出现集中的竖直条带；纵轴是 query 位置，横轴是 key 位置，不能直接把它读成 WER。

> **看图路径：** 1. 从 Layer 0 到 Layer 31 观察颜色强弱和结构是否变化；2. 把红色理解为对抗输入相对干净输入注意力增加，蓝色理解为减少；3. 沿竖直条带看变化集中在哪些 key 位置，并记住这是单样本差分图

[![原论文 Figure 9：Single-sample attention difference maps between adversarial and clean inputs.](https://arxiv.org/html/2611.14929v1/attention_diff_layers.png)](https://arxiv.org/html/2611.14929v1/attention_diff_layers.png)

*论文图 8。原论文 Figure 9:：“Single-sample attention difference maps between adversarial and clean inputs.”。*

图中 Layer 0 的差分整体较淡，结构主要是对角附近的一些变化；到 Layer 8、16、24 和 31，可以在若干固定 key 位置看到更明显的红蓝竖条，说明对抗输入改变了部分查询位置对音频区域和文本起始附近的关注分配。原文据此解释为：分词器语义被打乱后，LALM 对音频上下文的依赖被削弱，跨模态注意力更容易偏向文本本身。该观察对理解机制有帮助，但它来自单样本可视化，既没有给出跨样本统计，也不能证明注意力改变就是 WER 上升的唯一原因。

### 去噪与音频变换能否消除语义扰动

这一节问的是：如果防御者知道音频可能被攻击，使用去噪器、对抗净化或音频变换后，T-SemAttack 的 WER 是否仍然高？表里的 WER 越高表示攻击残留越强、防御越不成功；同一列内比较 Gaussian Noise、E2E-VGuard、AudioShield 与 T-SemAttack，且应在同一数据集和同一评价流程下读取。

| Method | Denoiser | Denoiser | DeepFilterNet3 | DeepFilterNet3 | Adversarial Defense | Adversarial Defense | Adversarial Defense | Diffusion | Audio Transformation | Audio Transformation | Audio Transformation |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Method | Whisper | VibeVoice | Whisper | VibeVoice | Resample | Mel | Q-D | AudioPure | Speed | PS | Band-filter |
| Gaussian Noise | 2.964 | 1.720 | 2.468 | 1.133 | 5.256 | 6.569 | 2.984 | 8.737 | 57.517 | 3.735 | 20.334 |
| E2E-VGuard | 10.205 | 7.276 | 10.168 | 7.148 | 13.841 | 17.650 | 9.447 | 13.898 | 67.112 | 10.282 | 28.863 |
| AudioShield | 9.930 | 9.738 | 10.741 | 9.187 | 16.030 | 16.751 | 14.673 | 37.497 | 61.546 | 13.379 | 23.901 |
| T-SemAttack | 96.763 | 42.901 | 113.997 | 37.805 | 55.805 | 58.997 | 73.364 | 21.571 | 89.898 | 70.635 | 71.085 |

Denoiser 处理后，T-SemAttack 在 Whisper 和 VibeVoice-ASR 上的 WER 仍为 96.763% 与 42.901%；DeepFilterNet3 后为 113.997% 与 37.805%。同一组 Denoiser 列中，E2E-VGuard 为 10.205% 与 7.276%，说明去噪对普通扰动和语义扰动的效果不同。AudioPure 是表中对 T-SemAttack 最有效的单项防御，把 WER 降到 21.571%，低于 AudioShield 的 37.497%，但仍高于 E2E-VGuard 的 13.898%；在 Speed 变换下 T-SemAttack 仍有 89.898%，没有恢复到干净输入水平。

这张表的表注把结果概括为 VibeVoice-ASR 上的平均 WER，但 Denoiser 和 DeepFilterNet3 的列名又分列 Whisper 与 VibeVoice；因此只能引用原文明确说明的对应关系，不能把表注的范围和所有列强行合并。总体结果支持“常规语音增强不能可靠恢复原始 token 序列或语义表示”，但不支持“任何防御都无效”，因为 AudioPure 已经显著降低了 WER。

### ROSETok 的重建质量与下游语义鲁棒性

这一组比较要回答：ROSETok 是否能在保持重建质量的同时，让下游 SpeechLLM 在干净、含高斯噪声和受 T-SemAttack 攻击的输入上都更稳？重建列用 STOI，数值越高越好；下游列是把各分词器量化前的连续表示送入 SmolLM2-135M，在 FSC 口语命令意图识别任务上的指标值，越高越好；RTF 越低越省。StableToken 另列 Pre-Q 与 Post-Q，其他模型按原文使用量化前特征。

| Model | Nq | RTF(↓) | Reconstruction(↑) | Reconstruction(↑) | Reconstruction(↑) | Downstream SpeechLLM(↑) | Downstream SpeechLLM(↑) | Downstream SpeechLLM(↑) |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Model | Nq | RTF(↓) | Clean | Gaussian | T-SemAttack | Clean | Gaussian | T-SemAttack |
| Acoustic and Semantic Speech Tokenizer | Acoustic and Semantic Speech Tokenizer | Acoustic and Semantic Speech Tokenizer | Acoustic and Semantic Speech Tokenizer | Acoustic and Semantic Speech Tokenizer | Acoustic and Semantic Speech Tokenizer | Acoustic and Semantic Speech Tokenizer | Acoustic and Semantic Speech Tokenizer |  |
| SNAC | 4 | 0.003 | 0.874 | 0.817 | 0.782 | 28.3 | 5.6 | 14.6 |
| XY-Tokenizer | 8 | 0.025 | 0.905 | 0.849 | 0.762 | 92.3 | 87.8 | 23.1 |
| X-Codec 2 | 1 | 0.021 | 0.864 | 0.808 | 0.771 | 20.1 | 8.1 | 7.4 |
| DAC | 9 | 0.008 | 0.943 | 0.891 | 0.830 | 25.1 | 9.1 | 13.9 |
| Robust Speech Tokenizer | Robust Speech Tokenizer | Robust Speech Tokenizer | Robust Speech Tokenizer | Robust Speech Tokenizer | Robust Speech Tokenizer | Robust Speech Tokenizer | Robust Speech Tokenizer |  |
| MOSS-Audio-Tokenizer | 9 | 0.029 | 0.935 | 0.894 | 0.831 | 54.1 | 27.6 | 27.4 |
| StableToken (Pre-Q) | 1 | 0.175 | 0.647 | 0.647 | 0.592 | 96.7 | 95.4 | 35.0 |
| StableToken (Post-Q) | 1 | 0.175 | 0.647 | 0.647 | 0.592 | 91.0 | 89.5 | 27.9 |
| ROSETok-Base | 9 | 0.010 | 0.966 | 0.950 | 0.842 | 93.0 | 92.9 | 62.4 |
| ROSETok-AAF | 9 | – | 0.945 | 0.937 | 0.903 | 92.7 | 89.3 | 77.9 |

ROSETok-Base 在干净、Gaussian 和 T-SemAttack 输入上的 STOI 分别为 0.966、0.950 和 0.842，均高于 DAC 的 0.943、0.891 和 0.830；ROSETok-AAF 把攻击条件下的 STOI 提到 0.903。下游 FSC 也从 Base 的 62.4 提到 AAF 的 77.9，说明攻击感知微调确实改善了受攻击表示。

代价同样清楚：ROSETok-AAF 的干净 STOI 从 Base 的 0.966 降到 0.945，Gaussian STOI 从 0.950 降到 0.937，干净输入的下游指标从 93.0 降到 92.7，Gaussian 下从 92.9 降到 89.3；AAF 的 RTF 在表中为“–”，不能声称它的推理成本与 Base 相同。StableToken 的干净下游指标 96.7 很高，但 T-SemAttack 下只有 35.0，说明对高斯噪声稳定并不等于对语义攻击稳定。该表主要覆盖 Seed-TTS (EN)、STOI 和 FSC/SmolLM2-135M，不能直接外推到所有语言或所有下游任务。

### 哪些训练条件真正支撑语义鲁棒性

这一组消融要判断：ROSETok 的下游语义鲁棒性究竟来自哪一个训练条件，而不只是重建指标碰巧变好。表里把语义教师从 Whisper 换成 HuBERT，其余训练配置保持不变；STOI 和 PESQ 看重建与去噪质量，FSC(MLP) 看下游探针的语义表现，三者都是越高越好。

| Teacher | Clean inputs | Clean inputs | Noisy inputs | Noisy inputs | FSC (MLP) |
| --- | --- | --- | --- | --- | --- |
| Teacher | STOI(↑) | PESQ(↑) | STOI(↑) | PESQ(↑) | FSC(↑) |
| Whisper | 0.965 | 3.063 | 0.950 | 2.431 | 73.90 |
| HuBERT | 0.965 | 3.088 | 0.950 | 2.453 | 31.48 |

两种教师的重建和去噪指标几乎一样：干净 STOI 都是 0.965、含噪 STOI 都是 0.950；PESQ 也只有 3.063 对 3.088、2.431 对 2.453 的细微差别。但 FSC(MLP) 从 Whisper 的 73.90 降到 HuBERT 的 31.48，说明只看重建质量无法判断语义表示是否适合下游。这个结果支持作者选择 Whisper 作为语义教师，但它只比较了两个教师和一种 MLP 探针，不能推出 Whisper 在所有下游任务上都最优。

攻击侧消融还显示：去掉语义损失 L_sem 后，攻击对 HuBERT、Whisper 和 VibeVoice-ASR 几乎无效，成功率约 1.556%；去掉心理声学项和 L2 项则把 SNR 压到 8.5、PESQ 低于 2.08。ROSETok 训练中去掉含噪输入会使含噪 STOI 从 0.931 降到 0.879、PESQ 从 2.304 降到 1.578；去掉含噪输入的下游 FSC 值从 60.032 降到 11.363。这些结果分别说明语义目标、听感约束和噪声训练各有作用，但实验规模和任务范围仍有限。

### 哪些结论成立、哪些还不能外推

T-SemAttack 的结论有明确前提：攻击者能拿到输入波形，并拥有一组可计算梯度的代理语义编码器；目标 ASR/LALM 的内部参数、梯度和分词器细节不可见；攻击离线生成，可以使用 500 步优化。因此它不能被直接描述成实时、无需先验或对所有目标都成功的攻击。RTF 21.800 表明当前实现的计算代价明显高于实时；论文也把提升实时性列为后续方向。

听感方面，作者的目标不是“真正不可感知”，而是“不破坏音频的正常使用”。20 名参与者的主观研究给出 MOS-Q 3.01 ± 0.28、MOS-C 4.32 ± 0.19、MOS-S 3.87 ± 0.25；论文据此称其达到可接受门槛，这与“人耳完全听不到扰动” 不是一回事。防御实验显示 AudioPure 可以把 WER 降到 21.571%，说明自适应防御并没有被完全绕过；去噪和音频变换只是降低而未可靠恢复语义。

覆盖范围也有限：语音数据主要是 LibriTTS 和 Seed-TTS 的英语/中文；ASR 和 LALM 目标数量虽多，但黑盒 API 评测规模受限；问答只有 AIR-Bench 的 100 条样本和自动评判；LALM 注意力分析是单样本。ROSETok 的鲁棒性依赖训练分布和威胁模型，原文明确说它不应被解释为对所有语义攻击的完整缓解，部署系统还需结合监控、去噪、对抗评测和系统级保护。

### 复现顺序、关键超参数与资源核对

复现时建议先复现攻击，不要一开始就训练 ROSETok。第一步按原文构造 4 个代理分支：S3Tokenizer、HuBERT、Whisper 编码器和 MFCC，确认四者接收同一条波形、比较的是量化前表示；再按式 (1) 实现语义项、心理声学项和 L2 项，检查 λ_sem=100、λ_psy=10^{-3}、λ_2=0.1、ε=8/255，以及 SGD 初始学习率 1×10^{-3}、最小学习率 1×10^{-6}、500 步和投影更新。先用少量 LibriTTS 样本核对 SNR、WER 和 RTF，再扩展到 Seed-TTS 和多目标模型。

训练 ROSETok-Base 需要按 DAC 结构复现编码器、九层 RVQ 和解码器，并接入冻结的 Whisper large-v3 教师；数据为 Emilia 英文和中文，含噪输入为 4/255 到 24/255，重建目标是干净音频，训练 200,000 步，batch size 128，学习率 1×10^{-4}，使用 CosineLR 和 1000 步 warmup。第二阶段从 LibriSpeech 选 2,000 条语音，生成 T-SemAttack 输入后做 2,000 步攻击感知微调，学习率 5×10^{-6}，batch size 64。原文报告的算力是 8 张 H100 约 20 小时；部署前还要重新测推理 RTF，不能把训练成本直接当作服务延迟。

资源身份记录只确认归属明确的代码资源与演示资源当前可访问；资源记录中没有可用的模型权重条目，因此正文只陈述代码和演示当下可访问，不推断预训练权重的发布状态。代码页、演示页与权重是 3 类不同资源，引用时应按各自登记状态分别核对，不能互相替代。复现实验时至少保留两组对照：一组是未加攻击的干净输入与高斯噪声，另一组是 E2E-VGuard、AudioShield 和 AudioPure 等原文基线，否则无法判断差异来自方法还是条件。

### 这项工作的使用边界与下一步验证

如果研究目标是检查语音前端在安全测试中的薄弱点，T-SemAttack 值得尝试的场景是：目标系统把分词器作为共用的连续或离散接口，攻击者又能离线准备代理编码器和对抗音频，并且评价同时看 WER、感知质量和计算时间。它不适合被当作可实时部署的通用攻击；从本文结果看，更合适的用途是安全审计和鲁棒性基准。若研究目标是训练更稳的分词器，ROSETok 的可借鉴点是语义教师对齐、含噪重建和攻击感知微调的组合，而不是把单次实验结果当成普遍防御保证。

实际动手时，第一步先复现主表中 T-SemAttack 的 SNR、RTF 和至少一个目标模型的 WER，再决定是否训练 ROSETok；不要先训练一个没有对照的重建模型。还需要补的验证包括：流式或在线延迟、更多语言和真实噪声条件、更广的下游任务（不只 FSC 和 ASR）、跨样本注意力统计，以及未在本文出现的自适应防御与更强黑盒系统。只有当这些条件被覆盖后，才能判断语义分词器攻击和 ROSETok 的防御在部署环境中还有多少余量。

<details>
<summary>📎 论文与评分元数据</summary>

排名：前25% | 文档类型：方法研究 | [arXiv 原文](https://arxiv.org/abs/2611.14929v1)

</details>

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。

- 评分规则：type-aware-v1

- 评分模型：deepseek-v4.1-flash

- 评分请求协议：openai_responses

---

[← 返回 2026-11-13 语音/音乐/音频论文速递](/audio-paper-digest-blog/posts/2026-11-13/)
