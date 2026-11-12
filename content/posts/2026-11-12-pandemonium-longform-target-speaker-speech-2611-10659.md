---
title: "Pandemonium: Longform Target-Speaker Speech Recognition with Cross-Speaker Interactions"
date: 2026-11-12
draft: false
tags: [多说话人语音识别, 说话人分离标注, 注意力机制, 会议转录, 长音频处理]
categories: [论文速递]
description: "论文解决多人重叠长录音的逐人转写问题，把说话人分离条件的识别器搬到可一次处理整场会议的 Parakeet 长窗骨干上，再用跨说话人注意力和掩码精修器让各说话人通道互相参照，并用合成加 5.4k 小时伪标注加真会场数据的三段训练换来多个会议基准上的最低拼接词错率，代价是仍依赖外部分离结果且 CTC 长窗训练比短窗 TDT 精度略有损失。"
hiddenInHomeList: true
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_arxiv_id: "2611.10659"
paper_digest_workbench_contract: "researcher-workbench"
paper_digest_workbench_schema_fingerprint: "1f09b594c317cc38e934de27a5b0e8ceb4baa50ef79bd4f8683dd9adea720fe7"
paper_digest_reader_title: "多人长对话怎么逐人识别：Pandemonium 的条件、交互与长窗解码"
paper_digest_original_title: "Pandemonium: Longform Target-Speaker Speech Recognition with Cross-Speaker Interactions"
paper_digest_arxiv_version: 1
paper_digest_arxiv_versioned_id: "2611.10659v1"
paper_digest_arxiv_abs_url: "https://arxiv.org/abs/2611.10659v1"
paper_digest_arxiv_pdf_url: "https://arxiv.org/pdf/2611.10659v1.pdf"
paper_digest_primary_task: "多说话人语音识别"
paper_digest_tags_contract: "paper-tag-flat-tags"
paper_digest_tags_schema_fingerprint: "27e36280a4b8d3df62ebe54d3ab037920f4d69feb2b554163f01bbae2caf4338"
paper_digest_tags_selection_contract: "paper-tag-selection"
paper_digest_tags_registry_version: "paper-tag-catalog"
paper_digest_tags_registry_sha256: "9673bc0122e1905a5dcfd8b223675400cc2fa4c36095bc0e5f817edf99a0ec5c"
paper_digest_tags_concepts: [{"facet":"task","id":"task.multi-talker-asr","label":"多说话人语音识别"},{"facet":"task","id":"task.diarization","label":"说话人分离标注"},{"facet":"method","id":"method.attention","label":"注意力机制"},{"facet":"application","id":"application.meeting","label":"会议转录"},{"facet":"setting","id":"setting.long-audio","label":"长音频处理"}]
paper_digest_primary_method: "注意力机制"
paper_digest_score: 7.5
paper_digest_rank_bucket: "前25%"
paper_digest_document_type: "模型报告"
paper_digest_one_sentence: "论文解决多人重叠长录音的逐人转写问题，把说话人分离条件的识别器搬到可一次处理整场会议的 Parakeet 长窗骨干上，再用跨说话人注意力和掩码精修器让各说话人通道互相参照，并用合成加 5.4k 小时伪标注加真会场数据的三段训练换来多个会议基准上的最低拼接词错率，代价是仍依赖外部分离结果且 CTC 长窗训练比短窗 TDT 精度略有损失。"
paper_digest_authors: [{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Alexander Polok"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Dominik Klement"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Ivan Medennikov"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Antoine Laurent"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Petr Pálka"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Samuele Cornell"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Shinji Watanabe"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Sanjeev Khudanpur"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Jagadeesh Balam"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Jan Černocký"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Lukáš Burget"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Matthew Wiesner"}]
paper_digest_abstract_sha256: "0824f1feb3c299dc058b592296d69d66e5a61a4e41063779ea3cc402ced824e0"
paper_digest_sidecars: {"citation.bib":{"sha256":"bc8c0306d5bdc20056676fc8f1c64d2194f7cb9fb009f429620a20906db37aec","url":"/audio-paper-digest-blog/client/papers/2026-11-12/2611-10659/citation.bib"},"citation.json":{"sha256":"01ebde5ce469b60c1fc06325d8fd104af946868ca25543d5ac2ce15e09b51d5f","url":"/audio-paper-digest-blog/client/papers/2026-11-12/2611-10659/citation.json"},"citation.ris":{"sha256":"6972bebb84c51ae948db367e8bdcf17a7f90f1e691855f4caf7c5a5528055ef2","url":"/audio-paper-digest-blog/client/papers/2026-11-12/2611-10659/citation.ris"},"rethink-context.json":{"contract":"paper-research-context","schemaFingerprint":"5d4e79f7d3ee65b39ccb38281548bf20a1b2041ab7a27625eaf97ab9909a8383","sha256":"73607cfa11c1dccd518fe44e020c38fc1167192e4b094ea5a6e60836819ff62b","url":"/audio-paper-digest-blog/client/papers/2026-11-12/2611-10659/rethink-context.json"}}
paper_digest_api_reader_contract: "beginner-researcher"
paper_digest_api_reader_schema_fingerprint: "cd8baf5b8bda3a49eec64f6005931af63de4e9a13148cba5f354c661ca6e9df2"
paper_digest_api_reader_article_sha256: "4cd2e97966e6a26bc9fa93eb9822339d798da3141bbb41553f4d9f848872a63e"
paper_digest_api_reader_plan_sha256: "7275b1733c9632301b29cfbc7f4c394996482208deb308e8631b12cc6aaa48c7"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings"
paper_digest_api_reader_source_binding_schema_fingerprint: "d2a2607a6e561909473022eb43f56332ee357af8568566a095c29083ffdec9cc"
paper_digest_api_reader_source_bindings_sha256: "7e3e2f3db56383830e632f0902b391c0c4f9940b8f5225938d1663e765dcd38a"
paper_digest_api_reader_source_table_count: 4
paper_digest_api_reader_source_formula_count: 4
paper_digest_api_reader_structured_artifacts_sha256: "b9466459e81fe011414616b25f1db6322b67eeabdadaba1b44c2c6167936178c"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity"
paper_digest_api_reader_author_identity_schema_fingerprint: "1e3fd3a9a56c9a5bf52df8df5022690b9a3fa92e83e934f295af87c0e258ed2f"
paper_digest_api_reader_author_identity_sha256: "c48c60e68bff80d9ecca9990d1566b6f81444cdf8653f193e04fe4a5ec06d609"
paper_digest_api_reader_author_count: 12
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity"
paper_digest_api_reader_resource_identity_schema_fingerprint: "33b0be17118be61f39b85ce690c8da17e91f2864bb65e85284f60c40067328e0"
paper_digest_api_reader_resource_identity_sha256: "b937ac06fa4407710ca2f081bf1d843ef6437df7c9b4721689462d7605cfffa9"
paper_digest_api_reader_resource_count: 3
paper_digest_api_reader_figure_persistence: "ephemeral-no-persisted-figure-assets-v1"
paper_digest_api_reader_decision_projection: "api-reader-decision-projection"
paper_digest_api_reader_decision_projection_schema_fingerprint: "e56feb5ab75c8710904916b898f73dab9bb18bdf65bb60b7ed2edf7f99cea860"
---

# 📄 多人长对话怎么逐人识别：Pandemonium 的条件、交互与长窗解码

> 英文题目：*[Pandemonium: Longform Target-Speaker Speech Recognition with Cross-Speaker Interactions](https://arxiv.org/abs/2611.10659v1)*

<!--paper-tag-hierarchy-v1:start-->

**研究分类**

- **研究任务**：[语音识别](/audio-paper-digest-blog/papers/?concept=task.asr) → [多说话人语音识别](/audio-paper-digest-blog/papers/?concept=task.multi-talker-asr)；[说话人分离标注](/audio-paper-digest-blog/papers/?concept=task.diarization)
- **研究方法**：[注意力机制](/audio-paper-digest-blog/papers/?concept=method.attention)
- **研究条件**：[长音频处理](/audio-paper-digest-blog/papers/?concept=setting.long-audio)
- **应用**：[会议转录](/audio-paper-digest-blog/papers/?concept=application.meeting)

<!--paper-tag-hierarchy-v1:end-->

> 评分：**7.5/10** | 创新 1.5/2 | 技术严谨 1.2/1.5 | 实验充分 1.3/1.5 | 清晰度 0.8/1 | 影响力 1.2/1.5 | 开源 0/1.5 | 可复现 0.3/0.5 | 工程/实践 1.2/1.5


## 👥 作者与机构

- Alexander Polok：机构信息未能在本次解析中与作者逐人可靠绑定
- Dominik Klement：机构信息未能在本次解析中与作者逐人可靠绑定
- Ivan Medennikov：机构信息未能在本次解析中与作者逐人可靠绑定
- Antoine Laurent：机构信息未能在本次解析中与作者逐人可靠绑定
- Petr Pálka：机构信息未能在本次解析中与作者逐人可靠绑定
- Samuele Cornell：机构信息未能在本次解析中与作者逐人可靠绑定
- Shinji Watanabe：机构信息未能在本次解析中与作者逐人可靠绑定
- Sanjeev Khudanpur：机构信息未能在本次解析中与作者逐人可靠绑定
- Jagadeesh Balam：机构信息未能在本次解析中与作者逐人可靠绑定
- Jan Černocký：机构信息未能在本次解析中与作者逐人可靠绑定
- Lukáš Burget：机构信息未能在本次解析中与作者逐人可靠绑定
- Matthew Wiesner：机构信息未能在本次解析中与作者逐人可靠绑定

## 📌 核心摘要

输入是几分钟到几十分钟含重叠与轮流发言的单麦克风会议音频，输出是按说话人区分的文字记录，难点是重叠帧归属不清且长距离上下文难以一次处理，已有方法把每个说话人孤立解码。论文先把分离标注给出的逐帧说话人活动概率组合成静音/目标/非目标/重叠四类事件掩码，再用帧级条件变换调制编码器，使同一识别器每次只转写一个目标说话人。再把该条件机制从短窗Whisper骨干搬到可一次处理整场会议的Parakeet骨干并把多路说话人流作为批量处理，最后在选定层加入跨说话人注意力让同帧不同说话人表示互相参考，并用掩码精炼器重新估计活动概率以修正模糊条件。训练按合成混合、伪标注野外数据、真实会议三阶段组织，其中伪标注用分离标注加已有系统转写野外多说话人音频得到。与基线DiCoW v3.3相比，在多个会议基准平均、贪婪解码下，Pandemonium串联最小置换词错率在Oracle分离标注下从16.3%降到14.7%，在预测分离标注下从20.0%降到19.2%。结论适用于单麦克风英文会议评测，多麦克风合并需对每个远场麦克风单独解码再合并，长语音贪婪解码下Pandemonium实时率330倍，低于同条件CTC基线的405倍但精度更高。

## 🔗 开源与复现资源

- 第三方资源：<https://hf.co/BUT-FIT> → <https://huggingface.co/BUT-FIT> — 链接可访问（HTTP 200）

- 第三方资源：<https://www.pyannote.ai/blog/precision-3> — 链接可访问（HTTP 200）

可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 要转写的是什么样的长对话

论文的输入是一段连续几分钟甚至更长的多人混合录音，里面有重叠说话、口语化表达、人数未知且会变化、声学环境多样。目标输出不是一段混在一起的文字，而是按说话人分开的多路文字记录，每路只包含目标说话人自己说的内容，评价时允许对说话人编号做最优排列后再拼接计算词错率，也就是文中用的 cpWER，数值越低越好。

对刚入门的读者，关键是理解为什么长对话比短句难。短句识别可以假设 1 人主导、上下文有限，而会议录音里会出现抢话、应答声、轮替，当前句子能否听准往往取决于前后几十秒甚至整场会议里谁在什么时候说话。如果只切成 30 秒小窗独立解码，跨窗的轮替线索就被切断了，重叠段也缺少另一说话人正在说什么的参照。

论文把任务限定为分离条件下的目标说话人识别。也就是说，先由一个说话人分离器给出每帧每个人是否在说话的概率，识别器再以此为条件，每次只转写其中一个人，对检测到的每个人各跑 1 次，最后拼成带说话人归属的完整记录。这种做法保留了单说话人识别器的结构，同时让模型在声学上仍能听到其他人。

### 已有路线为什么分开处理每个人

多人转写大体有两条路线。一条是序列化输出训练，把所有人的文字按某种顺序串成一个输出流，用一个解码器 1 次吐出；另一条是多流加排列不变目标，或先做声源分离再识别。论文属于第三条路线，即目标说话人识别，每次只解码一个人，靠外部条件区分目标与非目标。

作者之前的工作 DiCoW 是这条路线的代表。它不使用声纹注册或说话人向量，而是把分离器输出换算成每帧 4 类事件概率，再用帧级随分离变化的变换调制编码器。原文强调这种轻量调制在不同骨干上都有效，且比基于注册的方法更省数据、更稳健。但 DiCoW 继承了 Whisper 骨干的 30 秒窗口，且每个人独立前向，通道之间不交换编码结果和解码结果。

另一类能联合看到所有人的系统是序列化输出及其大语言模型后继，它们能利用跨说话人线索，但对没见过的说话人数和重叠泛化较差。长窗识别骨干如 Parakeet 家族则通过激进卷积下采样加局部窗注意力与全局令牌，在单卡上不切块处理整场会议。本文的思路是保留目标说话人识别对人数可变的适应性，同时把长窗能力和跨说话人交互补进来。

### 论文要解决的两个结构限制是什么

论文明确列出 DiCoW 的 3 个结构限制，本次解决前两个。第一是每人独立建模，虽然输入音频里包含其他说话人，但模型看不到其他说话人流是如何被编码的，也看不到为他们解码出什么，重叠、轮替和附和声等需要对照才能判定的线索就被丢掉了。第二是训练和解码都固定在 30 秒窗，上下文被骨干截断。第三是分离与识别分阶段单独优化，本文没有解决，未来工作才考虑联合训练。

为此作者提出两个可验证的改动。一是把分离条件搬到原生支持长音频的 Parakeet 快速卷积骨干上，得到 DiCoP，使整场会议 1 次前向完成。二是在编码器内部让同一场会议的多个说话人流在说话人维度上互相注意，并让模型重估分离条件。这两步都需要长上下文，因为交互线索分散在整场录音里，短窗训练会让新增模块失去作用。

### 整个系统让一场会议录音走完哪些步骤

从样本角度看，流程起点是混合波形和分离器给出的每说话人每帧活跃概率。分离概率先被换算成与人数无关的 4 维 STNO 掩码，再下采样到 Parakeet 更粗的帧率。Parakeet 前端对波形做特征提取，编码器对每个目标说话人各维护一条流，多条流组成一个批次并行处理，每条流都经过同样的 FDDT 调制，只是目标人的定义不同。

下面这张总览图把主路径和新增交互画在了一起，读图时先分清纵向的主识别路径和横向的跨说话人路径，再看条件从哪里来、回到哪里去。

> **看图路径：** 1. 先沿输入到输出的箭头看主路径；2. 再比较分离分支与声学分支在哪里汇合；3. 观察中间蓝色模块的横向箭头连接了哪两路；4. 确认顶部每个 CTC 头输出对应哪个说话人

[![原论文 Figure 1：Overview of Pandemonium.](https://arxiv.org/html/2611.10659v1/dicop_coattn_slim.svg)](https://arxiv.org/html/2611.10659v1/dicop_coattn_slim.svg)

*论文图 1。原论文 Figure 1:：“Overview of Pandemonium. A diarizer yields per-speaker masks that condition (FDDT) a longform Parakeet encoder processing the S speakers as a batch.”。*

这张图确实可见底部是输入混合波形，中间是分离模块向上输出 STNO 条件，左右是两路 Parakeet 前端加包含 FDDT 的卷积层，层间有双向箭头连接的跨说话人注意力和掩码精修器，顶部是每个说话人独立的 CTC 头输出文本。它的教学价值在于说明分支在哪里汇合：声学分支在前端共享波形，条件分支在 FDDT 处逐帧调制，交互分支在选定编码层横向汇合，最终输出仍是每人一路文字。共享的是同一编码器参数和同一时间轴，区别只是目标人不同。

### 分离概率怎样变成每帧四类事件的权重

设分离器输出 d(s,t) 表示第 s 个人在第 t 帧说话的概率。对目标人 sk，论文定义 4 类互斥事件：无人说话为安静，只有目标人说话为目标，目标人不在但其他人在为非目标，目标人与他人同在为重叠。安静概率是所有人都不活跃的连乘，目标概率是目标人活跃乘以其他人都不活跃，非目标用 1 减去安静再减去目标人活跃，重叠用目标人活跃减去目标事件概率。4 个数堆成向量 Mt 就是 STNO 掩码，大小与人数无关。

举例说明只为讲清映射，不代表实测数值：假如某帧目标人活跃概率高而他人都很低，掩码就会偏向目标类；若目标人与另 1 人都高，则偏向重叠类。原文指出重叠帧的局限在于，对同时重叠的几个人算出的标签是一样的，仅靠这个条件区分不开他们，这正是后文精修器要处理的问题。

**说话人分离 × 目标说话人识别 × STNO 掩码：** 说话人分离只回答每帧谁在说话，目标说话人识别只转写当前目标人的文字，STNO 掩码是两者之间的接口，它把多人的分离概率换算成 silence、target、non-target、overlap 四类互斥事件的概率，让同一识别器每次只关注一个人又不丢掉其他人的声学存在。

### FDDT 如何用掩码调制编码器特征

FDDT 是帧级随分离变化的变换，作用对象是编码器第 l 层第 t 帧的表示。它为 4 类事件各准备一套仿射变换，用掩码概率做加权平均，把原特征映射成条件化后的特征。同一识别器对每个假设说话人各跑 1 次，每次换一个目标人定义，就只转写该目标人，但声学上仍保留对其他人的感知。变换矩阵和偏置与骨干一起训练。

下式计算的正是这种加权调制，它要约束的是条件如何逐帧改变特征，符号中 z 是该层该帧特征，W 和 b 是该类该层的参数，p 是该帧该类概率，求和范围是 4 类事件。

\[\hat{\mathbf{z}}^{l}_{t}=\sum_{c\in\{\mathcal{S},\mathcal{T},\mathcal{N},\mathcal{O}\}}\left(\mathbf{W}_{c}^{l}\mathbf{z}^{l}_{t}+\mathbf{b}_{c}^{l}\right)p^{t}_{c},\]

按运算顺序，先由分离概率形成 4 类权重，再把同一输入特征分别经过 4 套仿射变换，最后按权重合并得到送往下一层的状态。Parakeet 集成时唯一改动是把 STNO 掩码下采样以匹配其更粗帧率，机制本身不变。

**FDDT × STNO 掩码：** STNO 掩码提供每帧属于四类事件的权重，FDDT 提供四套随层可学的仿射变换，组合方式是对四套变换结果按掩码概率做凸组合，因此条件作用发生在编码器特征层面，而不是在音频波形或文本层面切换分支。

### 跨说话人注意力和掩码精修器做了什么

由于条件化本身就是每人 1 次前向，同一场会议的 S 条流天然构成一个批次。论文在选定编码层沿说话人轴做多头注意力，而不是沿时间或通道做。记 Z 为同一帧所有说话人调制后状态堆成的矩阵，先做层归一化再做查询键值相同的自注意力，得到增量 U，再经普通残差加回各说话人状态。说话人数量充当序列长度，不用位置编码，因此人数可变。输出投影初始化接近零，跨说话人注意力初始近似恒等，使热启动的 DiCoP 编码器几乎不变。

下式对应这一步的注意力计算，它要计算的是同一帧内各说话人表示之间应互相借用多少信息，符号中 Z 是该帧该层所有说话人状态，LN 是层归一化，MHA 是多头注意力。

\[\mathbf{U}^{l}_{t}=\mathrm{MHA}\!\big(\mathrm{LN}(\mathbf{Z}^{l}_{t})\big),\]

掩码精修器进一步解决重叠帧标签相同的模糊。它用交互后的状态经层归一化加线性加偏置再过 Sigmoid，重估每人每帧的软活跃概率，把 S 个人的重估值堆成向量，再用同样的映射重建新的 STNO 掩码，最后用可学门控在原掩码与新掩码之间插值。门控初值偏负，使初始化时输入掩码不变。训练时分离掩码会被随机损坏，并给精修器 10 倍学习率，迫使它学会纠错。

下式是重估活跃概率的计算，符号中 z 是交互后的单人单帧状态，w 和 b 是该层参数，输出在 0 到 1 之间。

\[\hat{d}^{l}(s,t)=\sigma\!\big({\mathbf{w}_{l}^{\top}}\mathrm{LN}(\mathbf{z}^{l}_{s,t})+{b_{l}}\big)\in[0,1],\]

下式是掩码回写的插值，符号中 M 是原掩码，M 帽是重建掩码，beta 是由可学标量经 Sigmoid 得到的混合系数。

\[\mathbf{M}^{t}\;\leftarrow\;(1-\beta_{l})\,\mathbf{M}^{t}+\beta_{l}\,\hat{\mathbf{M}}^{l,t},\qquad\beta_{l}=\sigma({g_{l}}).\]

**跨说话人注意力 × STNO 掩码精修器：** 跨说话人注意力负责在同一帧内让不同说话人流的隐状态互相看到，解决重叠和轮替时的混淆，掩码精修器负责用交互后的隐状态重新估计每人的活跃概率并回写 STNO 掩码，解决重叠帧对所有重叠人标签相同而无法区分的问题，两者一个改特征一个改条件。

### 为什么从 TDT 损失换到 CTC 才能训练长窗

障碍有两层。一是全局自注意力随长度平方增长，长窗会爆显存，论文采用 Parakeet 支持的局部窗注意力，以有限注意力跨度换取显存可控。二是多语 Parakeet v3 用 TDT 损失训练，TDT 头除输出词还会预测跳过多少帧，其损失要在编码帧乘文本长度的格子上打分，随块时长平方增长，且训练核每个目标位置占一个线程，线程块与寄存器预算把目标长度卡得很死，分钟级块会超出限制乃至核启动失败。

CTC 没有上述 2 维格子问题。Parakeet 也有 RNN-T 与 CTC 版本，但它们只支持英文且精度不如 TDT 模型，因此作者从多语 TDT 检查点出发，冻结其头，改用 CTC 损失训练。做法是把 TDT 联合网络中预测器分支的贡献置零，使联合网络退化为帧同步的每帧词表加空白后验，正好是 CTC 需要的形式，时长分支忽略，不新增参数，TDT 解码仍可能，但微调后后验变尖且空白主导，贪心 CTC 解码更快且精度略低。

**TDT × CTC：** TDT 是 Parakeet 多语模型原来的换能器损失，需要对编码帧与文本序列的二维格子打分并预测跳帧数，短窗更准但长窗显存和核函数受限，CTC 只需要每帧的词表加空白后验，本文把 TDT 联合网络的预测器分支置零得到帧同步后验，从而保留原检查点又能训练分钟级长窗。

**局部注意力 × 全局令牌：** 局部注意力只在有限窗内做时间自注意力，把长录音的二次显存压下来，全局令牌在长范围内汇聚整场证据，两者搭配让模型既能一次解码整场会议又不丢失跨分钟的说话人级信息，精修器和跨说话人模块正是依赖这种长上下文才有效。

### 三段数据和伪标注流水线如何搭建

训练数据有 4 种来源。真会场数据只有 115 小时，即 NOTSOFAR-1 单远场麦克风训练集 35.6 小时加 AMI 79.4 小时。DiCoW 原始配方约 1.2k 小时，含 AMI、NOTSOFAR-1、LibriMix 和类 LibriSpeechMix 混合，用于受控消融。合成数据共 4k 小时，一半是用 FastMSS 把 LibriSpeech 混成至多 8 人，另一半用 Fisher 加 Sidon 与强制对齐构建。伪标注是从 YODAS2 挖出的 5.4k 小时野外多人音频，其中 4.6k 小时用于训练 Parakeet 系模型。

伪标注流程针对真实多说话人交互稀缺而设。先用 pyannoteAI Precision-2 做分离，在时长 10 分钟、语种在 Whisper 范围内、至多 8 人的块中，按说话人重叠度选出 5.4k 小时。再用自研八说话人流式 Sortformer 重做分离，用 DiCoW v3.3 按此分离转写得到初标。清洗有三道过滤：用 Kimi K3 做语种识别核对条件语种，用正则检测 n 元重复幻觉，用泄漏过滤丢弃 2 人连续共享 5 个以上相同词的段。之后去掉 Parakeet 不支持语种约 0.8k 小时，剩 4.6k 小时；切成 30 秒并去掉单人窗后剩 3.4k 小时用于 DiCoW 伪标注研究。

模型训练分合成到伪标注再到真数据的 3 段。DiCoP 从 Parakeet-TDT-0.6b-v3 热启动，用局部注意力上下文 256 加 256。Pandemonium 在编码层 8、12、16、20 后插跨说话人注意力，在 12、16、20 后插精修器，训练会话上限 8 人。最终 3 段完成后得到 Pandemonium，对照用的 DiCoP 基线是更强的 TDT 训练版本，这一点在比较时对基线有利。

### 在什么条件下测量词错率和速度

全文用 MeetEval 计算的拼接最小排列词错率 cpWER 报告，默认用正确分离，除非注明用预测分离。预测分离来自 pyannoteAI Precision-3。为一致，所有模型用贪心解码。评估覆盖 NOTSOFAR-1、AMI、ICSI、AISHELL-4、AliMeeting、Santa Barbara 语料、Mixer6 和 DiPCo，其中 SBC 只用 2 人到 8 人的会话与任务子集。表格缩写即这些数据集名。

速度用实时因子加速比 RTFx 衡量，越大越快，图 2 横轴为对数刻度。准确率与速度的权衡都在解码整场会话的条件下测得，DiCoP 变体只差注意力是局部还是全局以及训练用 TDT 还是 CTC，不含跨说话人注意力。主结果表分正确分离与预测分离两大块，每块内比较 DiCoW v3.3、自注册 DiCoW、DiCoP 无交互版本、Pandemonium 以及多麦克风分别解码再用 MOVER 合并的版本，并列出截至 2026 年 9 月的已发表单麦克风最好结果。

理解结论成立条件很关键。正确分离衡量的是识别本身上限，预测分离才接近部署；英语会场是域内，多语和野外是域外；MOVER 版本用了全部远场麦克风，不再是单麦克风条件。消融时训练数据与窗长都会改变，比较时必须看清是同一预训练下只去掉模块，还是连数据也换了。

### 长窗基线换来了速度但损失了多少精度

在只看速度与精度权衡时，问题是把条件搬到 Parakeet 长窗上是否值得。论文的回答是值得但有代价：解码速度比 DiCoW 快 4 到 8 倍，但词错率最多差 3.8 个百分点。局部注意力在每套数据上都比全局注意力又快又好，因此长窗采用局部。由 TDT 训练换到 CTC 训练再损失 0.6 到 1.5 个百分点，但 RTFx 从 269 升到 405，约 1.5 倍。把训练块加到 60 秒或 10 分钟并不能补回差距，cpWER 至多向任一方向移动 0.6。Pandemonium 保留了大部分速度并在每套数据上最准。

下图把每套数据集画成一条随速度变化的精度折线，读图任务是确认速度提升是否以可接受的精度损失换来，以及 Pandemonium 是否把精度拉回原有水平之上。

> **看图路径：** 1. 先看横轴 RTFx 对数刻度越向右越快；2. 按颜色区分 NSF、SBC、AMI、Mx6 四条折线的走势；3. 对比同一数据集上 DiCoP 全局与局部标记的位置

![原论文 Figure 2：Accuracy/speed trade-off per evaluation set (oracle diarization) against real-time-factor speedup…](/audio-paper-digest-blog/images/papers/2611.10659/figure-2-22b3c71496ebbbff.png)

*论文图 2。原论文 Figure 2:：“Accuracy/speed trade-off per evaluation set (oracle diarization) against real-time-factor speedup (RTFx, greedy decoding).”。*

从像素可见横轴是 RTFx 对数刻度越右越快，纵轴是 cpWER 越高越差，4 条折线大体随模型变快先走平再分化，Pandemonium 的星形标记在 AMI、Mx6 等线上处于偏右且偏下的位置，说明它在较快处取得较低错率。原文据此认定长窗加 CTC 是快速但较弱的基线，交互模块是在此基线上把精度反超的关键，而不是仅靠加长训练窗。

下面这张主结果表要回答的比较问题是：在正确分离与预测分离下，Pandemonium 相对 DiCoW 系与 DiCoP 是否有全面优势，指标方向都是 cpWER 越低越好。

| Oracle diarization |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- |
| DiCoW v3.3 [28] | 15.5 | 14.5 | 15.0 | 27.1 | 16.3 |
| Pandemonium | 14.1 | 13.4 | 13.8 | 22.4 | 14.7 |
| + MOVER | 10.8 | 12.6 | 13.8 | 19.4 | 13.0 |
| Pandemonium | 22.4 | 16.8 | 18.6 | 27.4 | 19.2 |

表后解释需要点出收益与限制。在正确分离下 Pandemonium 在每项基准上都优于 DiCoW v3.3 和长窗 DiCoP 骨干，平均 14.7%，用全部远场麦克风加 MOVER 合并后进一步降到 13.0%，在 NOTSOFAR-1 上从 14.1% 降到 10.8%。在预测分离下它在除两项外的基准上仍最优，平均 19.2%，加 MOVER 后 17.1%，也超过已发表单麦克风最好结果。但 MOVER 的提升依赖多麦克风分别解码再合并，不属于单麦克风可部署的提升，且 SBC 在该行保持立体声不变。DiCoP 行是更强的 TDT 训练模型，比较时已偏向基线。

### 伪标注数据本身是否可用

第二个结果问题是 YODAS2 伪标注的质量是否足以训练。论文先用 DiCoW 在伪标注上单独训练来检验，不混入真数据。即使不过滤，伪标注训练的 DiCoW 平均 19.9%，优于合成训练的 25.0% 和原始配方 v3.3 的 21.6%，且因 YODAS2 语种多样，在 AISHELL-4 和 AliMeeting 等普通话集上明显更通用，而英语偏斜的 v3.3 在这些集上较差。自注册版本在域内与 v3.3 相当，但在普通话集上差 4 到 7 个百分点，说明自注册跨语种迁移不好。

下表比较的是不同清洗过滤与微调条件下的 cpWER，越低越好，表前需明确公平条件是同为 DiCoW 骨干、只换训练数据选择。

| System / selection | Hrs | NSF | AMI | SBC | Avg |
| --- | --- | --- | --- | --- | --- |
| DiCoW v3.3 (orig.) [28] | 1.2k | 15.5 | 14.5 | 15.0 | 21.6 |
| All pseudo-labels | 3.4k | 17.2 | 19.1 | 15.7 | 19.9 |
| all filters combined | 2.9k | 17.0 | 18.3 | 15.7 | 19.5 |
| FT: NSF+AMI+A4+Ali | 3.2k | 15.8 | 15.0 | 15.3 | 15.5 |

表后解释要说明过滤的作用边界。单个过滤中只有去幻觉带来清晰提升，全部过滤合在一起平均 19.5%，为该组最好。用原始配方微调能改善 NOTSOFAR-1 和 AMI 但恶化普通话集，而加上普通话真会场训练集一起微调后，AISHELL-4 到 15.6%、AliMeeting 到 19.3%，平均 15.5% 为全文伪标注研究中的最好平均。这支持多样性平均掉部分标签噪声的解释，但也说明伪标注不能替代匹配语种的真数据，跨语种结论受 Parakeet 不支持普通话的限制。

### 交互模块和长窗训练各贡献了多少

消融要回答模块与数据的分工。架构侧在合成预训练条件下，完整交互相对普通 DiCoP 平均 17.1%，只加跨说话人注意力改善 0.3 个百分点，再加掩码精修器又改善 1.8 个百分点到 15.0%，说明精修器的纠错作用更大。但同一完整架构若只用 30 秒窗训练，平均回到 17.1%，全部增益消失，证明交互需要长上下文。数据侧 3 段式合成到伪标注再到真数据最好，单用伪标注平均 20.1% 反而不如单用合成的 15.0%，这与英语偏斜的评测有关，掩盖了伪标注的跨语种收益。两者结合把表 1 中 DiCoP 从 16.7 带到 14.7。

下表是 Pandemonium 的消融，上半为训练数据源，下半为去掉精修器、再去掉跨说话人注意力以及改用 30 秒窗，指标仍是 cpWER 越低越好。

| Architecture (synthetic-only pretraining): |  |  |  |  |
| --- | --- | --- | --- | --- |
| −- refiner | 18.8 | 19.6 | 17.0 | 16.8 |
| −- refiner −- CSA (DiCoP) | 19.5 | 20.0 | 17.1 | 17.1 |
| full, 30 s windows | 19.3 | 20.0 | 17.1 | 17.1 |

上表说明精修器的大增益依赖训练时随机损坏掩码和 10 倍学习率，否则它无错可纠；跨说话人注意力的小增益依赖说话人轴批量，人数上限 8 人；长窗有效的证据只在合成预训练的消融子集上给出，换到全量 3 段训练时相对大小可能变化。未胜出项也很明确：伪标注单独训练不如合成单独训练，去掉真数据的合成加伪标注平均 16.1% 也不如完整的 13.1%，说明真会场微调不可省。

下表按原文连续句整理速度代价，不做换算，只说明同一长窗下训练损失与解码头的取舍，比较问题是更快是否必然更差。

| 对比条件 | 指标变化 | 原文报告的速度变化 |
| --- | --- | --- |
| Parakeet 长窗相对 DiCoW | 最多差 3.8 cpWER | 快 4–8× |
| CTC 相对 TDT 训练 | 差 0.6–1.5 cpWER | RTFx 269 到 405 |
| Pandemonium 相对 CTC 基线 | 每集最准 | RTFx 330 相对 405 |

上表只是把正文已报告的量并置，提醒读者主结果的精度领先是在保留大部分速度的前提下取得的，而不是用慢解码换的。CTC 的代价是 0.6 到 1.5 个百分点的精度损失，收益是 RTFx 从 269 到 405，Pandemonium 保持在 330，仍远快于 DiCoW 系。原文没有给出延迟与显存随人数的完整曲线，因此不能从加速比直接推出流式部署的延迟。

### 哪些结论不能推广到部署

首先是分离依赖。主结果的最低数字多在正确分离下取得，预测分离下平均从 14.7% 升到 19.2%，说明部署时分离误差会吃掉一部分增益。论文未解决分离与识别联合训练，仍是多阶段流水线，分离错了精修器只能部分纠正。

其次是语种与领域。伪标注的多样性带来通用性，但 Parakeet 不支持普通话，被去掉的 0.8k 小时和评测的英语偏斜使跨语种收益在主表里看不全。普通话集的好结果依赖加入匹配训练集的微调，不能理解为英语模型零样本就能做好。

再次是速度与精度的对应范围。CTC 更快但略差的结论只在局部注意力、贪心解码、整场解码的条件下测得，换用束搜索、流式或短窗时 RTFx 与 cpWER 都会变。MOVER 的多麦克风合并是事后多通道策略，不能当作单麦克风模型的提升，也增加了多路解码的计算量。原文没有报告延迟、显存峰值随人数的曲线和人工可懂度评价，不能从自动词错率直接推出体验改善。

### 要复现第一步该准备什么

复现应从数据与基线对齐开始。先按论文拿到真会场 115 小时划分、合成 4k 小时配方和 YODAS2 伪标注的过滤后版本，注意 4.6k 小时是去掉 Parakeet 不支持语种后的量，3.4k 小时是切 30 秒去单人窗后的 DiCoW 研究用量，两者不要混用。分离条件统一用 pyannoteAI Precision-2 做初筛、Sortformer 重分离、DiCoW v3.3 转写的流程，或至少固定同一版预测分离，否则 cpWER 不可比。

模型侧从 Parakeet-TDT-0.6b-v3 热启动，保持局部上下文 256 加 256，先复现无交互 DiCoP 的 TDT 与 CTC 两条基线，确认 CTC 损失 0.6 到 1.5 个百分点、RTFx 从 269 到 405 的量级，再插入层 8、12、16、20 的跨说话人注意力与层 12、16、20 的精修器，上限 8 人，训练时损坏掩码并给精修器 10 倍学习率。解码一律贪心、整场 1 次前向，用 MeetEval 算 cpWER。

论文称已开源 DiCoP 与 Pandemonium 模型及伪标注数据，链接指向第三方托管页，本文仅能证明论文提到了该链接，不能证明作者已可下载或可运行。第三方可用不等于作者资源可用，复现前应先核对链接指向的是否为作者名下的模型与数据快照、版本是否与表 1 对应。缺失的细节包括损坏掩码的具体强度分布、批量大小之外的优化器 schedule 以及多说话人批的显存预算，复现时需以发布配置为准，不要从模型名猜测。

### 什么时候值得尝试还缺什么验证

当任务是整场会议按人转写、人数可变且有重叠，而你已有可用的说话人分离结果时，这套方法值得尝试。它的价值在于不改变人数无关的 STNO 接口，用长窗 1 次看到整场，再让各人流互相参照并回写条件，兼顾速度与精度。若你的场景只有短片段或单人主导，跨说话人模块的增益可能很小，30 秒窗消融已提示这一点。

还需要补的验证有三项。一是在同一预测分离下按说话人数和重叠率分层报告，确认增益主要来自重叠还是轮替；二是在不支持语种外的多语集上补全评测，确认伪标注多样性的真实范围；三是补上人数增至 8 人以上的显存与 RTFx 曲线，以及流式或在线分离下的表现，因为全文都是整场贪心解码。

容易产生的误解是把正确分离的数字当部署效果，把 MOVER 的多麦克风合并当单麦克风提升，把伪标注单独训练不如合成单独训练理解为伪标注无用。原文证据支持的是组合使用最好：合成做初始化，伪标注补真实交互，真数据做最终修正，交互模块负责把长上下文变成可用的跨人线索。

<details>
<summary>📎 论文与评分元数据</summary>

排名：前25% | 文档类型：模型报告 | [arXiv 原文](https://arxiv.org/abs/2611.10659v1)

</details>

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。

- 评分规则：type-aware-v1

- 评分模型：muse-spark-1.3-contributor

- 评分请求协议：openai_responses

---

[← 返回 2026-11-12 语音/音乐/音频论文速递](/audio-paper-digest-blog/posts/2026-11-12/)
