---
title: "Towards Efficient Simultaneous Inverse Text Normalization with Pretrained Text-to-Text Language Model and Read-Tag-Write Policy"
date: 2026-10-16
draft: false
tags: [逆文本规范化, 端到端学习, 流式处理, 实时处理]
categories: [论文速递]
description: "论文把越南语语音识别输出的口语串流式转成带标点大小写和数字时间的书面串，用预训练 EnViT5 加读标注写策略和前后缀缓存优化，在 5M 句自建数据上接近离线端到端基线并快于混合流式方法，但含噪语音和罕见外来词仍是主要代价和适用边界。"
hiddenInHomeList: true
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_arxiv_id: "2610.19492"
paper_digest_workbench_contract: "researcher-workbench-v1"
paper_digest_reader_title: "流式口语转书面语：预训练文本到文本模型如何边读边改写"
paper_digest_original_title: "Towards Efficient Simultaneous Inverse Text Normalization with Pretrained Text-to-Text Language Model and Read-Tag-Write Policy"
paper_digest_arxiv_version: 1
paper_digest_arxiv_versioned_id: "2610.19492v1"
paper_digest_arxiv_abs_url: "https://arxiv.org/abs/2610.19492v1"
paper_digest_arxiv_pdf_url: "https://arxiv.org/pdf/2610.19492v1.pdf"
paper_digest_primary_task: "逆文本规范化"
paper_digest_tags_contract: "paper-tag-flat-tags-v2"
paper_digest_tags_selection_contract: "paper-tag-selection-v2"
paper_digest_tags_registry_version: "paper-tag-catalog-v2"
paper_digest_tags_registry_sha256: "cdef54423b5dfc00a1d017ef6639446d2ecd1d9c1acf71c8eb4f6219a46b7ba8"
paper_digest_tags_concepts: [{"facet":"task","id":"task.inverse-text-normalization","label":"逆文本规范化"},{"facet":"method","id":"method.end-to-end-learning","label":"端到端学习"},{"facet":"setting","id":"setting.streaming","label":"流式处理"},{"facet":"setting","id":"setting.real-time","label":"实时处理"}]
paper_digest_primary_method: "端到端学习"
paper_digest_score: 6.6
paper_digest_rank_bucket: "前50%"
paper_digest_document_type: "方法研究"
paper_digest_one_sentence: "论文把越南语语音识别输出的口语串流式转成带标点大小写和数字时间的书面串，用预训练 EnViT5 加读标注写策略和前后缀缓存优化，在 5M 句自建数据上接近离线端到端基线并快于混合流式方法，但含噪语音和罕见外来词仍是主要代价和适用边界。"
paper_digest_authors: [{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Kiet Anh Hoang"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Khanh Le"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Bao Nguyen"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Linh Pham"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Dung Vo"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Thai Tran"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Mai Nguyen"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Tri Nguyen"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Vu Le"}]
paper_digest_abstract_sha256: "b557d695e05ec35141abf26550cb7aa4fe2dd4783c6a530ed1d15446a27b302f"
paper_digest_sidecars: {"citation.bib":{"sha256":"bbfee2301247b91e222c5dad4f08d0a55b67b3c1d7b088751c99389d98703715","url":"/audio-paper-digest-blog/data/papers/2026-10-16/2610-19492/citation.bib"},"citation.json":{"sha256":"1cf619796fafd9dc2b514804f0fd18569e85a0dcadfb9bd27ff03ee4a5047762","url":"/audio-paper-digest-blog/data/papers/2026-10-16/2610-19492/citation.json"},"citation.ris":{"sha256":"97597a0ec3820c8571ee5dad7597273f7a4b5bcc1d58abe15728e4bca154ff6b","url":"/audio-paper-digest-blog/data/papers/2026-10-16/2610-19492/citation.ris"},"rethink-context.json":{"contract":"paper-research-context-v2","sha256":"8ad374af7e1a1c6cf9d9eb7f8edc637aa974ec4ad0882bfa122385f521085ea3","url":"/audio-paper-digest-blog/data/papers/2026-10-16/2610-19492/rethink-context.json"}}
paper_digest_api_reader_contract: "beginner-researcher-v3"
paper_digest_api_reader_article_sha256: "15c6edd7f4acb451cee7911e8ae084234c7406df336bda2b3f62af87ac864ded"
paper_digest_api_reader_plan_sha256: "296caf518896b8e4857b7969fa4d026b1fbc34c8d5cabfa34bd34d1b848be82e"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings-v4"
paper_digest_api_reader_source_bindings_sha256: "283fa8ebd49f1933c6e4d8664d020fd26db7b9ae76c8a05d660c5b4cdf373dc6"
paper_digest_api_reader_source_table_count: 3
paper_digest_api_reader_source_formula_count: 5
paper_digest_api_reader_structured_artifacts_sha256: "39de3340b7108d321074630322aca06b8d4710eb069a326d867d5b6fe26e6438"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity-v1"
paper_digest_api_reader_author_identity_sha256: "7a002ee0aab9a270e2c4e939ba9b4df9710763f4354dab329f4b2340d0d39e98"
paper_digest_api_reader_author_count: 9
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity-v1"
paper_digest_api_reader_resource_identity_sha256: "bbcee795e4afcd7d293e918ae2f64b3959eab6e725498843c87af8c52b99623a"
paper_digest_api_reader_resource_count: 6
paper_digest_api_reader_figure_persistence: "ephemeral-no-persisted-figure-assets-v1"
paper_digest_api_reader_decision_projection: "api-reader-decision-projection-v2"
---

# 📄 流式口语转书面语：预训练文本到文本模型如何边读边改写

> 英文题目：*[Towards Efficient Simultaneous Inverse Text Normalization with Pretrained Text-to-Text Language Model and Read-Tag-Write Policy](https://arxiv.org/abs/2610.19492v1)*

<!--paper-tag-hierarchy-v1:start-->

**研究分类**

- **研究任务**：[语音识别](/audio-paper-digest-blog/papers/?concept=task.asr) → [逆文本规范化](/audio-paper-digest-blog/papers/?concept=task.inverse-text-normalization)
- **研究方法**：[端到端学习](/audio-paper-digest-blog/papers/?concept=method.end-to-end-learning)
- **研究条件**：[流式处理](/audio-paper-digest-blog/papers/?concept=setting.streaming)；[实时处理](/audio-paper-digest-blog/papers/?concept=setting.real-time)

<!--paper-tag-hierarchy-v1:end-->

> 评分：**6.6/10** | 创新 1.5/2 | 技术严谨 1.2/1.5 | 实验充分 1.3/1.5 | 清晰度 0.8/1 | 影响力 0.5/1.5 | 开源 0/1.5 | 可复现 0.3/0.5 | 工程/实践 1/1.5


## 👥 作者与机构

- Kiet Anh Hoang：机构信息未能在本次解析中与作者逐人可靠绑定
- Khanh Le：机构信息未能在本次解析中与作者逐人可靠绑定
- Bao Nguyen：机构信息未能在本次解析中与作者逐人可靠绑定
- Linh Pham：机构信息未能在本次解析中与作者逐人可靠绑定
- Dung Vo：机构信息未能在本次解析中与作者逐人可靠绑定
- Thai Tran：机构信息未能在本次解析中与作者逐人可靠绑定
- Mai Nguyen：机构信息未能在本次解析中与作者逐人可靠绑定
- Tri Nguyen：机构信息未能在本次解析中与作者逐人可靠绑定
- Vu Le：机构信息未能在本次解析中与作者逐人可靠绑定

## 📌 核心摘要

流式逆文本规范化输入是流式语音识别输出的口语形式词序列，输出是可读的书面形式文本，需要恢复标点与大小写，并把数字、日期、货币等半符号短语和外来词转写为规范写法。方法第一步将口语词序列输入基于EnViT5改造的动态右上下文掩码编码器，在保留全部左历史下限制未来可见以模拟流式分块，输出每词隐表示。第二步联合标注器以该隐表示为输入逐词作B、I、O三分类以标定需规范片段，输出的标记序列作为控制信号进入读-标-写策略。该策略按标记调度读写，对标为O的词直接透传，B-I片段未完整时继续读入等待，仅当片段完整并具备前视时触发自回归解码器。解码器只交叉注意该片段相关编码状态生成局部书面文本；训练用标注与生成多任务损失加按概率截断的前缀增强，迫使模型无全局结束符时输出局部结束符。与混合流式基线相比，提出的方法在越南语测试集含标点条件下词错误率为4.18%，约为混合基线8.27%的一半。结论适用于越南语新闻语料与英语子集上带1至2词前视的流式设置，键值缓存与复制粘贴使每块延迟满足实时要求，外来词拼写幻觉与长片段等待延迟仍存在。

## 🔗 开源与复现资源

- 第三方资源：<https://huggingface.co/VietAI/envit5-base> — 链接可访问（HTTP 200）

- 第三方资源：<https://huggingface.co/khanhld/chunkformer-ctc-large-vie> — 链接可访问（HTTP 200）

- 第三方资源：<https://github.com/rany2/edge-tts> — 链接可访问（HTTP 200）

- 第三方资源：<https://github.com/huggingface/transformers> — 链接可访问（HTTP 200）

- 第三方资源：<https://huggingface.co/vinai/bartpho-syllable-base> — 链接可访问（HTTP 200）

- 第三方资源：<https://huggingface.co/google-t5/t5-base> — 链接可访问（HTTP 200）

可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 语音识别输出为什么还要做逆文本规范化

这篇论文解决的是流式语音识别后的逆文本规范化，英文简称 ITN。输入是识别器输出的口语形式词串，例如全部小写、无标点、数字用单词拼出来。目标是输出可读的书面形式，例如恢复逗号句号问号感叹号、恢复大小写、把 one thousand 变成 1000、把外来人名按书面拼写还原。必须保留的信息是原话的词序和语义，不能把不需要改的词改掉，也不能把数字时间货币等实体改错。输出是逐块可显示的书面词串，要在说话还在继续时就不断更新。

读者可以这样理解例子：例子中底部输入是一串越南语小写无标点词，顶部输出是带大写和标点的书面句，其中只有被判定为改写片段的词经过生成模型，其余词直接透传。对刚入门的研究生，关键是把 ITN 看成局部改写任务，大部分词不用动，少数片段需要结合上下文消歧，这决定了后文为什么可以用标注来跳过大量生成。

### 离线端到端、混合规则与同步翻译策略各管什么

论文把已有路线分成 3 类。第一类是离线端到端序列到序列方法，直接从口语学到书面，扩展性好，但标准编码器解码器依赖全局注意力，无法增量处理，而且容易对不变词产生幻觉式改写。第二类是混合方法，先用神经标注模型检出类别，再用人工写的有限状态转换器做定向转换，优点是能保住原文，缺点是每个类别都要标注从内到外到开始的细粒度标签并手写规则，换领域换语言成本高。

第 3 类是同步机器翻译中的读写真略，例如固定延迟的 wait-k 策略和单调注意力，它们要解决的是全局语序重排，需要在质量和延迟之间等待更多源词。论文的判断是 ITN 基本保持原词序且大部分词逐字对应，照搬翻译的固定等待和全句生成会带来冗余计算。因此作者选择保留预训练文本到文本模型的语言知识，但把调度和训练改成只做局部触发式生成，这也是与只做标点大小写后处理的级联工业系统的区别，后者难以联合处理大小写标点和结构转换的歧义。

### 流式条件下最难的是什么

流式 ITN 的难点不是单句改写准确率，而是输入不完整时就要输出。同一口语片段在没有看到后文时可能对应多种书面形式，例如是否断句、数字范围多大、外来词如何拼写。模型只能用历史加少量前视词做决定，还要控制延迟，不能等整句结束再一次性解码。同时解码器通常要看到全局源结束符才学会停机，流式中每个局部片段也需要可靠停机，否则会多生成或陷入长生成。

另一个难点是效率：若每个输入块都调用一次完整解码，即使大部分词不变，也会浪费算力并增加幻觉风险。论文把问题分解为三件事：编码器如何只用受限未来上下文仍给出稳定表示，系统如何判断当前词是不变还是改写片段的一部分，解码器如何在片段闭合时只看相关历史生成并及时停止。

### 整体流程如何边读边改写

系统建立在 EnViT5 基础上，这是一个面向越英双语的 T5 base 结构文本到文本模型，编码器解码器各 12 层，隐维度 768，注意力头 12 个，前馈中间维度 2048，总参数约 275M。推理时语音识别词按每块 c 个词到达，编码器用受限掩码算出隐状态并拼到全局历史，联合标注器对新块逐词打标。若全是 O 则直接输出原词，若出现 B-I 片段则等到下一个词是 B 或 O 或句界才判定片段闭合，再触发一次解码生成对应书面片段。多个相邻片段在同一块内可合并为一次解码。下面这张官方总览图把 3 条路径画在了一起，读之前先明确输入在下输出在上，中间是标注层，右侧是解码器。

> **看图路径：** 1. 沿底部口语词到顶部书面词的主路径看读标注写三步；2. 对比绿色直接透传分支与粉色选择性解码分支的触发条件；3. 看自回归解码器如何同时引用历史书面前缀与编码器片段隐状态；4. 注意注意力掩码小图里历史全可见而未来被截断的结构

[![原论文 Figure 1：Overview of the proposed streaming end-to-end ITN framework using the Read–Tag–Write policy.](https://arxiv.org/html/2610.19492v1/img/ITN-streaming-5.png)](https://arxiv.org/html/2610.19492v1/img/ITN-streaming-5.png)

*论文图 1。原论文 Figure 1:：“Overview of the proposed streaming end-to-end ITN framework using the Read–Tag–Write policy.”。*

图中底部是口语词 x0 到 x11，黄色是当前块，灰色是历史，虚线是未来。中间蓝色 Tagger 对每个隐状态输出 B、I、O，绿色输出对应直接透传，粉色输出对应选择性解码。右侧自回归解码器以已生成的书面前缀为条件，对编码器片段隐状态做交叉注意力，一次生成 1000 并以 `<EOS>` 结束。右下注意力掩码小图显示历史全可见、未来被遮挡的分块结构，这正是流式编码器的计算约束。

### 流式编码器与三分类标注器如何分工

编码器负责把受限上下文变成可标注的隐状态。训练时采用动态右上下文掩码，块大小在 1 到 5 之间变化，前视词数在 0 到 2 之间变化，推理时则按选定的块大小和前视数运行。对输入序列，编码器输出隐矩阵 H，维度为词数乘隐维度。标注器是加在隐状态上的一个线性层，输出 3 类。它的作用不是区分数字日期货币等细类别，而是只判断边界：B 表示改写片段开始，I 表示片段内部，O 表示不用改。

相比混合方法需要的多类别触发规则，3 类空间更小，论文认为边界检测更稳。标注结果直接作为调度信号，O 走透传，B-I 等闭合后走解码。

**流式编码器 × 动态右上下文掩码：** 流式编码器指按块接收口语词并只用历史加有限前视计算隐状态的编码器，动态右上下文掩码指训练时随机改变块大小和前视词数来模拟实时截断的注意力掩码，二者搭配让编码器在训练中见过多种延迟条件，组合后离线预训练模型获得了严格从左到右增量编码的能力。

标注的计算是对每个位置的隐向量乘标注矩阵后取最大索引，权重矩阵把隐维度映射到 3 类。

\[\hat{t}_{i}=\text{argmax}(H_{i}W_{tag}),\quad W_{tag}\in\mathbb{R}^{d\times 3}\]

该公式的输入是第 i 个词的编码器隐状态，输出是预测标签，训练时的监督来自数据管线自动生成的词级边界标注，推理时用它决定读还是写。

### 读标注写策略何时透传何时解码

读标注写策略分成读、标注、写三步。读是把第 k 个块 Ck 送入编码器，利用缓存的历史和有限前视算出新隐状态并追加到全局序列。标注是对新块逐词预测 B、I、O，若下一个标签是 I 则视为片段延续并继续读，若下一个是 B 或 O 或句界则视为片段闭合。写有两条分支：O 直接输出口语词，不经过解码器；B-I 片段闭合后触发解码，同一块内多个连续片段合并为一次调用。

解码时交叉注意力只看截至片段末尾 m 的编码器状态 H0:m，不看更靠后的前视隐状态，目的是防止看到未来信息后多生成。生成以历史书面前缀为条件，逐词生成直到预测出 `<EOS>`，并设每片段最多 64 个词的硬截断以防无结束符时死循环。

**联合标注器 × 读标注写策略：** 联合标注器指加在编码器隐状态上的三分类线性层，把每个词标为需改写的开始、内部或直接透传，读标注写策略指按标注决定直接输出还是触发解码器的调度规则，二者搭配把何时生成的问题变成何时出现完整改写片段的问题，组合后解码器只在片段闭合时被调用一次。

局部生成的概率形式是给定历史前缀和片段编码状态，逐词连乘得到局部书面片段。

\[P(\hat{y}_{local}\mid\hat{y}_{pre},H_{0:m})=\prod_{u=1}^{U}P(y_{u}\mid[\hat{y}_{pre};y_{\lt u}],H_{0:m})\]

其中尖括号表示前缀与已生成词的拼接，U 是局部长度，H0:m 是允许看到的编码器范围。该约束是流式与离线的主要区别，离线可以看全句，流式只能看已确认部分加有限前视。

### 复制粘贴与键值缓存如何省掉重复计算

直接透传省的是解码调用次数，缓存省的是重复注意力计算。编码器采用增量键值缓存，复用历史块的键值，只算新块。解码器有两种运行方式：一种是每次触发时用一次批量前向把已有前缀填入自注意力和交叉注意力缓存，再自回归生成新词；另一种是完全流式，解码器自注意力和交叉注意力的键值都在多次触发之间保留，只对新词做更新，省掉初始批量前向。

论文报告后者与训练存在轻微失配，因为训练用完整目标前缀一次看全，而流式是增量更新且不再用新编码器状态重看旧词，但实验显示性能波动很小。复制粘贴的要点是被跳过的 O 词仍被加入历史前缀参与后续解码的条件，因此解码器保持了完整句子上下文，又避免了对不变词的生成和幻觉。延迟分解显示编码器缓存把编码器延迟从约 54 ms 降到约 10 ms，解码器缓存进一步降低总延迟，在块大小为 5 时总延迟从 206 ms 降到 60 ms，约 3.43 倍加速。

**直接透传 × 复制粘贴策略：** 直接透传指对标注为 O 的词跳过解码器直接复制口语词到输出，复制粘贴策略指把这些跳过的词仍然拼进已生成书面前缀以保留上下文，二者搭配减少了对大量不变词的重复生成，组合后既降低延迟又让后续片段解码能看到完整历史。

需要注意缓存不是免费的，它要求推理严格按块顺序更新，不能像离线那样随意重排或重算全句，这也是复现时必须保持的时序条件。

### 训练目标与前缀截断增广如何教会局部停机

训练是多任务目标，标注损失和生成损失相加。标注损失是对每个源词的交叉熵，按批次内总词数平均；生成损失是对每个目标词在给定历史目标词和编码器状态下的负对数似然，按总目标词数平均。编码器受流式掩码约束，解码器保持标准自回归结构。关键增广是前缀截断：以概率 p_trunc 随机截断对齐的训练对，源侧不加全局结束符，目标侧前缀后显式加结束符。

否则保留完整句并在两侧都加结束符。论文主实验用 p_trunc 为 0.8。该增广模拟流式中片段在句中结束的情况，迫使模型仅凭部分编码器状态学会输出局部结束符，而不必在源块后补全局结束符去破坏增量缓存。

**局部结束符 × 前缀截断训练增强：** 局部结束符指每个局部改写片段结束时要求解码器输出的 `<EOS>`，前缀截断训练增强指训练时以概率随机截断对齐的源目标前缀并在目标前缀后补 `<EOS>` 的增广，二者搭配教会模型在没有全局句尾时也能按当前部分编码器状态停机，组合后流式推理不必在源块后补全局结束符从而保住增量缓存。

标注损失的形式是对批次内所有源位置的标签似然取平均负对数。

\[\mathcal{L}_{tag}=-\frac{1}{\sum_{b=1}^{B}N_{b}}\sum_{b=1}^{B}\sum_{i=1}^{N_{b}}\log P(t_{b,i}\mid x_{b,i})\]

生成损失的形式是对批次内所有目标位置的条件似然取平均负对数。

\[\mathcal{L}_{gen}=-\frac{1}{\sum_{b=1}^{B}T_{b}}\sum_{b=1}^{B}\sum_{t=1}^{T_{b}}\log P(y_{b,t}\mid y_{b,<t},H_{b})\]

总目标是两者直接相加，没有额外权重系数。

\[\mathcal{L}=\mathcal{L}_{tag}+\mathcal{L}_{gen}\]

论文没有报告冻结或分层学习率等细节，只能按证据说编码器和解码器都参与该联合目标的优化，监督分别来自边界标签和书面目标词。

### 数据如何构造与评测条件如何设定

数据来自大规模越南语新闻语料，用正则表达式加规则在书面端找改写区，再生成口语候选。类别包括标点恢复、大小写、半符号规范化和语音规范化，标点只考虑逗号句号问号感叹号，半符号包括基数序数小数货币时间分数数字串和电子地址，语音类指不在识别词表中的外来词命名实体域名和字母序列，论文为此整理了约 125k 词的语音词典并做人工抽查。最终生成 5M 训练句对、50k 验证和 50k 测试，附带短语级对齐和词级边界标注，例如句尾标点被并入前一词的片段。

评测用贪心解码，流式按离散块输入，主指标是归一化词错误率衡量需改部分、非归一化词错误率衡量不应改部分的扰动，以及整体词错误率，均为越低越好，标注用 F1。报告的流式数是在块大小 3、4、5 与前视 1、2 的组合上平均，并用 10000 次自助法给 95 % 置信区间。真实场景测试是把 50k 测试句经 Edge TTS 合成语音再经 ChunkFormer 识别，相对参考口语的词错误率为 14.21 %，用带噪识别文本考查鲁棒性。

**归一化词错误率 × 非归一化词错误率：** 归一化词错误率指在需要改写的片段上衡量的错误率，反映数字标点大小写等转换质量，非归一化词错误率指在应保持不变的词上衡量的改动错误率，反映误改和幻觉程度，二者搭配再加上整体词错误率，才能同时看到改对了多少和改错了多少。

实现上训练最多 20 轮，用 4 张 H100，基于 Transformers 库，AdamW 峰值学习率 10-4，1 轮线性预热加余弦调度，批量 512，局部最大长度 64。

### 主结果在干净文本上能否接近离线并超过混合流式

这张表比较干净的真实标注口语文本上各方法的逆文本归一化效果，逐格对应论文原表 1 的 With PnC 三列。I-WER、NI-WER 与 WER 均为百分比，越低越好；这里保留标点和大小写，区别于后文含识别错误的 ASR 转写条件。

|  | Model | I-WER | NI-WER | WER |
| --- | --- | --- | --- | --- |
| Non-stream | B0 | 14.20 | 1.51 | 4.61 |
| Non-stream | B1 | 11.69 | 1.30 | 3.84 |
| Non-stream | B2 | 10.80 | 1.32 | 3.63 |
| Non-stream | AdapITN [2] | 156.88 | 2.50 | 40.08 |
| Non-stream | SCS_{C} (ours) | 11.48 | 1.31 | 3.79 |
| Stream | H1 [12] | 34.79 | 2.22 | 10.16 |
| Stream | H2 [12] | 28.39 | 1.78 | 8.27 |
| Stream | Wait-kk [15] | 19.40 | 3.00 | 6.99 |
| Stream | S0 (ours) | 21.39 | 1.56 | 6.39 |
| Stream | S1 (ours) | 16.66 | 1.47 | 5.18 |
| Stream | S2 (ours) | 12.91 | 1.36 | 4.18 |
| Stream | S3 (ours) | 17.03 | 1.37 | 5.19 |
| Stream | S4 (ours) | 13.22 | 1.31 | 4.21 |

在这一干净输入条件下，流式 S2 与 S4 的整体词错误率分别为 4.18% 与 4.21%，低于混合 H2 的 8.27% 和 wait-k 的 6.99%，同时仍高于离线 B2 的 3.63%。S4 略高于 S2，表明解码器缓存换取效率时并没有在此条件下再降低词错误率。该比较只对应原表的 With PnC 设置，不能与后文噪声转写的绝对数值混为一谈。

### 延迟分解显示每项优化省在哪里

延迟问题要看每块处理时间如何随块大小和优化组合变化，测试条件是前视固定为 1，批量 100、每序列 100 到 200 词，在 H100 上测平均编码器与总延迟。下图按块 3、4、5 分组，每组四根柱从基线到加复制粘贴、加编码器缓存、加解码器缓存逐步累加，纵轴是毫秒，柱顶是总延迟，深色段是编码器延迟，读图时先看总高度再看深色占比。

> **看图路径：** 1. 按块大小 3、4、5 分组比较 BL 到 DC 的总延迟柱高；2. 看深色编码器部分在加入编码器缓存后如何变矮；3. 核对每根柱顶的总延迟数与底部深色段的编码器延迟数

[![原论文 Figure 2：Per-chunk latency breakdown (Encoder vs.](https://arxiv.org/html/2610.19492v1/img/itn_latency.png)](https://arxiv.org/html/2610.19492v1/img/itn_latency.png)

*论文图 2。原论文 Figure 2:：“Per-chunk latency breakdown (Encoder vs. Total) for four streaming configurations across chunk sizes of 3, 4, and 5.”。*

可见复制粘贴主要降低总延迟中解码部分，编码器缓存把深色段从约 53 ms 到 54.8 ms 压到约 9.7 ms 到 10.1 ms，解码器缓存再去掉初始批量前向。在块为 5 时总延迟从 206 ms 降到 60 ms。论文还报告 95 分位总延迟从 249.0 ms 降到 165.5 ms，而块为 5 约对应 500 ms 音频，因此即使重归一化块也能实时处理。限制是该结论依赖高并发批量和 H100 个条件，换到单流或端侧设备时绝对数值会变，只能说优化方向有效，不能把 60 ms 当成所有部署的承诺。

### 带噪识别文本上结论是否还成立

真实性检验用的是带 14.21 % 识别错误的语音识别文本，比较问题是流式方法在噪声下是否仍优于混合与 wait-k，以及相对最强离线基线掉多少。下表是论文原表，指标仍是归一化、非归一化与整体词错误率，均为百分比且越低越好，阅读时注意此时离线最强是 B1 而非 B2。

|  | Model | I-WER | NI-WER | WER |
| --- | --- | --- | --- | --- |
| Non-stream | B0 | 37.30 | 2.44 | 10.94 |
| Non-stream | B1 | 34.09 | 2.24 | 10.01 |
| Non-stream | B2 | 35.33 | 2.28 | 10.34 |
| Non-stream | SCS_{C} | 36.18 | 2.27 | 10.54 |
| Stream | H2 | 47.56 | 2.75 | 13.67 |
| Stream | Wait-kk | 41.16 | 2.48 | 11.91 |
| Stream | S0 | 46.83 | 2.51 | 13.30 |
| Stream | S2 | 37.55 | 2.29 | 10.89 |
| Stream | S4 | 37.08 | 2.24 | 10.74 |

表中流式 S4 整体词错误率为 10.74 %，优于混合 H2 的 13.67 % 和 wait-k 的 11.91 %，相对离线 B1 的 10.01 % 增加约 7.29 %。S4 略优于 S2 的 10.89 %，相对提升约 1.38 %，支持解码器缓存没有损害噪声鲁棒性的判断。从零训练的 S0 为 13.30 %，说明预训练在噪声下仍重要。未胜出项是 B0、B2、SC 在噪声下都不如 B1，说明离线结构差异在噪声下会被压缩，不能只看干净文本的最优模型就选型。适用条件是该噪声来自特定 TTS 加特定识别器的管线，外来词多，换成其他口音或识别器时相对排序可能变化，需要重测。

### 换骨干与语言后框架是否仍然可用

泛化问题是该流程是否只绑定 EnViT5 和越南语。论文用 BartPho 在越南语上、用 T5 在英语 Google TN 子集上重做流式与非流式对比，越南语分干净口语与带噪识别两种输入，英语分含与不含标点大小写，下表是原表的完整呈现，数值为在块与前视组合上平均的整体词错误率。

| Lang. | Backbone | Params | Stream | WER (%) | WER (%) |
| --- | --- | --- | --- | --- | --- |
|  |  |  |  | ASR-L | ASR-O |
| Vi | BartPho | 132M | × | 4.61 | 11.07 |
| Vi | BartPho | 132M | ✓ | 6.31 | 12.84 |
| Vi | EnViT5 | 275M | × | 3.84 | 10.01 |
| Vi | EnViT5 | 275M | ✓ | 4.54 | 11.02 |
|  |  |  |  | W/ PnC | W/o PnC |
| En | T5 | 223M | × | 6.48 | 1.33 |
| En | T5 | 223M | ✓ | 8.17 | 1.84 |

表中 EnViT5 275M 绝对最优，BartPho 132M 更小但流式相对差距仍可控，英语 T5 223M 在两种设定下流式高于离线但差距不大。论文据此称框架与骨干和语言无关。限制是每种语言只测了一个骨干和一个数据集划分，没有测形态更复杂或语序差异更大的语言，也没有报告跨领域或跨识别器的迁移，因此架构无关应理解为在已测的编码器解码器文本到文本模型上可复用，而非对所有语言都保证相同相对损失。

### 前视与截断概率各自带来什么变化

消融要分离前视上下文与截断增广的作用。先看前视：在相同解码下 S2 相对零前视 S1 在两种设定分别降低约 19.31 % 和 21.95 %，S4 相对 S3 降低约 18.88 % 和 22.47 %，混合 H2 相对 H1 也有下降，说明少量未来词对标点断句和片段闭合判断很关键，代价是增加固定延迟。再看截断概率，下图在验证子集上用块为 3、前视为 1 同时测离线与流式，横轴是 p_trunc，纵轴是词错误率，读图时先分清蓝色离线与红色流式两条线。

> **看图路径：** 1. 对比蓝色离线曲线与红色流式曲线随截断概率的变化；2. 看截断概率为 0.8 附近流式词错误率的低点位置；3. 注意截断概率为 1.0 时两条曲线同时上扬的形态

[![原论文 Figure 3：Impact of truncation probability p_trunc on the Word Error Rate for both offline and streaming…](https://arxiv.org/html/2610.19492v1/img/wer_prob_trunc.png)](https://arxiv.org/html/2610.19492v1/img/wer_prob_trunc.png)

*论文图 3。原论文 Figure 3:：“Impact of truncation probability p_trunc on the Word Error Rate for both offline and streaming inference of our model.”。*

离线在 0.0 到 0.9 之间相对平稳，最低在 0 附近，仅在 1.0 时明显恶化，因为从未见过完整句尾。流式在 0 时因学不会局部结束符而超过 100 %，引入增广后迅速稳定，并在 0.6 到 0.9 区间与离线差距收窄，最优在 0.8。1.0 对流式也有害，说明完全去掉全句监督会伤长程建模。该结论的限制是只在验证子集和单一块前视下测得，换块大小或语言时最优点可能偏移，不能把 0.8 当成通用常数。

### 哪些错误与部署问题论文已经承认

论文明确列了 3 类局限。第一是语音规范化中的罕见外来实体：标注器能找到片段，但解码器可能按发音生成拼写合理却事实错误的词，例如把 Madrid 写成 Marid，这源于识别输出的发音歧义，未来想加发音词典偏置但尚未验证。第二是当前策略必须等完整 B-I 片段才输出，长片段会有感知延迟，预测性部分输出还只是设想。第三是 275M 参数对端侧受限设备偏大，知识蒸馏与量化等压缩尚未做。

对初学者重要的是把这些当成适用边界：如果任务中外来人名地名多且要求零拼写错，就不能只靠本文系统；如果要求词级极低延迟，需要另测首词延迟而非只看每块平均延迟；如果要在手机端运行，需要补压缩与功耗实验。

### 复现第一步要准备什么与核对什么

复现应从数据管线开始，而不是先调模型。先用新闻语料的正则流程生成口语书面句对、对齐与 3 类边界标签，并抽查数字货币时间与外来词的覆盖，确认标点并入前词等标注规则与论文一致。再准备 EnViT5 越南语分词器与双语权重，论文提到的权重与代码链接在原文中属于第三方资源，本解读不把第三方可达性当成作者已开源，复现时要区分作者资源、第三方权重与自己实现的管线。

训练时保持动态块与前视采样、p_trunc 为 0.8、局部最大 64、贪心解码等超参数，流式评测要在块 3、4、5 与前视 1、2 上平均并用自助法报告区间。延迟复现要注明批量、序列长度与 GPU 型号，因为 60 ms 等数字只在 100 并发与 H100 条件下成立。还需要补的验证是换识别器与换领域的测试，以及对 O 类透传误判率的单独统计，否则无法知道错误来自标注还是生成。

### 什么时候值得尝试与还缺哪项验证

当输入是流式识别的口语串、输出要保留原词序且大部分词不变、需要联合处理标点大小写与数字时间外来词时，这套读标注写加预训练文本到文本模型的路线值得尝试，尤其适合不愿为每类手写规则和细粒度标签的团队。复现第一步是跑通带边界标签的数据生成与三分类标注，再接增量缓存与局部停机增广。

还缺的验证包括真实口语而非合成语音的长会话测试、不同识别错误率下的曲线、端侧压缩后的精度延迟权衡，以及罕见实体拼写错误的量化分析。总体上论文的证据支持在已测越南语与英语条件下流式接近离线并优于所测混合与 wait-k，但不支持跨所有语言、识别器和设备的无条件推广。

<details>
<summary>📎 论文与评分元数据</summary>

排名：前50% | 文档类型：方法研究 | [arXiv 原文](https://arxiv.org/abs/2610.19492v1)

</details>

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。

- 评分规则：type-aware-v1

- 评分模型：muse-spark-1.3-contributor

- 评分请求协议：openai_responses

---

[← 返回 2026-10-16 语音/音乐/音频论文速递](/audio-paper-digest-blog/posts/2026-10-16/)
