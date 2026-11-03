---
title: "Local or Escalate? Post-Training Expert Routing for Real-Time Duplex Speech Models"
date: 2026-11-03
draft: false
tags: [全双工语音交互, 表示探测, 语音, 实时处理, 高效推理]
categories: [论文速递]
description: "论文冻结 MiniCPM-o 4.5 只在它由听转说的时刻读隐藏状态拟合逻辑回归失败风险门控，内部 240 问上激进策略以 50% 上交率把准确率从 42.1% 提到 69.2%，同时比全部上交把平均服务器等待从 8.68 秒降到 5.95 秒，代价是仍需云端专家和转写合成开销且对多步执行失误几乎无效。"
hiddenInHomeList: true
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_arxiv_id: "2611.01639"
paper_digest_workbench_contract: "researcher-workbench"
paper_digest_workbench_schema_fingerprint: "1f09b594c317cc38e934de27a5b0e8ceb4baa50ef79bd4f8683dd9adea720fe7"
paper_digest_reader_title: "本地答还是上交专家？冻结双工语音模型的开讲时刻分流"
paper_digest_original_title: "Local or Escalate? Post-Training Expert Routing for Real-Time Duplex Speech Models"
paper_digest_arxiv_version: 1
paper_digest_arxiv_versioned_id: "2611.01639v1"
paper_digest_arxiv_abs_url: "https://arxiv.org/abs/2611.01639v1"
paper_digest_arxiv_pdf_url: "https://arxiv.org/pdf/2611.01639v1.pdf"
paper_digest_primary_task: "全双工语音交互"
paper_digest_tags_contract: "paper-tag-flat-tags"
paper_digest_tags_schema_fingerprint: "27e36280a4b8d3df62ebe54d3ab037920f4d69feb2b554163f01bbae2caf4338"
paper_digest_tags_selection_contract: "paper-tag-selection"
paper_digest_tags_registry_version: "paper-tag-catalog"
paper_digest_tags_registry_sha256: "9673bc0122e1905a5dcfd8b223675400cc2fa4c36095bc0e5f817edf99a0ec5c"
paper_digest_tags_concepts: [{"facet":"task","id":"task.full-duplex","label":"全双工语音交互"},{"facet":"method","id":"method.representation-probing","label":"表示探测"},{"facet":"signal","id":"signal.speech","label":"语音"},{"facet":"setting","id":"setting.real-time","label":"实时处理"},{"facet":"research_focus","id":"research_focus.efficiency","label":"高效推理"}]
paper_digest_primary_method: "表示探测"
paper_digest_score: 7.3
paper_digest_rank_bucket: "前50%"
paper_digest_document_type: "系统技术报告"
paper_digest_one_sentence: "论文冻结 MiniCPM-o 4.5 只在它由听转说的时刻读隐藏状态拟合逻辑回归失败风险门控，内部 240 问上激进策略以 50% 上交率把准确率从 42.1% 提到 69.2%，同时比全部上交把平均服务器等待从 8.68 秒降到 5.95 秒，代价是仍需云端专家和转写合成开销且对多步执行失误几乎无效。"
paper_digest_authors: [{"affiliations":["University of California, Los Angeles"],"name":"Ruoyu He"},{"affiliations":["University of Illinois at Urbana-Champaign"],"name":"Jisen Li"},{"affiliations":["University of British Columbia"],"name":"Anthony Ji"},{"affiliations":["Carnegie Mellon University"],"name":"Changyi Yang"},{"affiliations":["Stanford University"],"name":"Zetian Li"},{"affiliations":["University of Wisconsin–Madison"],"name":"Runduo Ma"},{"affiliations":["University of California, Santa Barbara"],"name":"Zhen Zhang"},{"affiliations":["University of Sydney"],"name":"Zhongzhu Zhou"}]
paper_digest_abstract_sha256: "48df2068207b3f706ae67a305aaac3ebc921671ad0b28a4c92d2bad7071e8ee2"
paper_digest_sidecars: {"citation.bib":{"sha256":"06de991483cd41b9965fd16df5c952531a74a7117c5933d225fdc95281beb7bc","url":"/audio-paper-digest-blog/client/papers/2026-11-03/2611-01639/citation.bib"},"citation.json":{"sha256":"145c84e144a8e9ccfe28ebf05b98ba5cb243f6bae42d3c5a042f4ce87337035e","url":"/audio-paper-digest-blog/client/papers/2026-11-03/2611-01639/citation.json"},"citation.ris":{"sha256":"22fad5b4ef14550d1ac3000a7ed403cad8dd3e6d16017fd9fc69469aaa2c298b","url":"/audio-paper-digest-blog/client/papers/2026-11-03/2611-01639/citation.ris"},"rethink-context.json":{"contract":"paper-research-context","schemaFingerprint":"5d4e79f7d3ee65b39ccb38281548bf20a1b2041ab7a27625eaf97ab9909a8383","sha256":"f0d0bc68d61c0f81a7feb806a6ee69aab562a5867823f62a6f31b23b192ee9d2","url":"/audio-paper-digest-blog/client/papers/2026-11-03/2611-01639/rethink-context.json"}}
paper_digest_api_reader_contract: "beginner-researcher"
paper_digest_api_reader_schema_fingerprint: "cd8baf5b8bda3a49eec64f6005931af63de4e9a13148cba5f354c661ca6e9df2"
paper_digest_api_reader_article_sha256: "090b0af4e1e101800111ced7c2db474155d61c278598c1bbac6a8f7ec19f39da"
paper_digest_api_reader_plan_sha256: "11a29c0492de1df17d15755471139c4a2ff7a199056192beca27655699ae6d2e"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings"
paper_digest_api_reader_source_binding_schema_fingerprint: "d2a2607a6e561909473022eb43f56332ee357af8568566a095c29083ffdec9cc"
paper_digest_api_reader_source_bindings_sha256: "bbe8f597a001a41aba2e2e2e25ab599ed07ce55f08fe18e99cd86a7b39ed27db"
paper_digest_api_reader_source_table_count: 4
paper_digest_api_reader_source_formula_count: 1
paper_digest_api_reader_structured_artifacts_sha256: "c94bce0491431410216d878ebe409325284bb63ffbbde0b5029e323e84cfa772"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity"
paper_digest_api_reader_author_identity_schema_fingerprint: "1e3fd3a9a56c9a5bf52df8df5022690b9a3fa92e83e934f295af87c0e258ed2f"
paper_digest_api_reader_author_identity_sha256: "2c30d1853ca413b1c4575a4dbf08aa3ad538a54308c1e12a5d01f6b2f3f077e9"
paper_digest_api_reader_author_count: 8
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity"
paper_digest_api_reader_resource_identity_schema_fingerprint: "33b0be17118be61f39b85ce690c8da17e91f2864bb65e85284f60c40067328e0"
paper_digest_api_reader_resource_identity_sha256: "bbfc4c3f36980595203c59d17531a8f10dbe6bfeb5587af53c289c771f4225f1"
paper_digest_api_reader_resource_count: 0
paper_digest_api_reader_figure_persistence: "ephemeral-no-persisted-figure-assets-v1"
paper_digest_api_reader_decision_projection: "api-reader-decision-projection"
paper_digest_api_reader_decision_projection_schema_fingerprint: "e56feb5ab75c8710904916b898f73dab9bb18bdf65bb60b7ed2edf7f99cea860"
---

# 📄 本地答还是上交专家？冻结双工语音模型的开讲时刻分流

> 英文题目：*[Local or Escalate? Post-Training Expert Routing for Real-Time Duplex Speech Models](https://arxiv.org/abs/2611.01639v1)*

<!--paper-tag-hierarchy-v1:start-->

**研究分类**

- **研究任务**：[语音交互](/audio-paper-digest-blog/papers/?concept=task.speech-interaction) → [全双工语音交互](/audio-paper-digest-blog/papers/?concept=task.full-duplex)
- **研究方法**：[表示探测](/audio-paper-digest-blog/papers/?concept=method.representation-probing)
- **研究条件**：[实时处理](/audio-paper-digest-blog/papers/?concept=setting.real-time)
- **信号**：[语音](/audio-paper-digest-blog/papers/?concept=signal.speech)
- **研究重点**：[高效推理](/audio-paper-digest-blog/papers/?concept=research_focus.efficiency)

<!--paper-tag-hierarchy-v1:end-->

> 评分：**7.3/10** | 创新 1.5/2 | 技术严谨 1.2/1.5 | 实验充分 1.3/1.5 | 清晰度 0.8/1 | 影响力 1/1.5 | 开源 0/1.5 | 可复现 0.3/0.5 | 工程/实践 1.2/1.5


## 👥 作者与机构

- Ruoyu He：University of California, Los Angeles
- Jisen Li：University of Illinois at Urbana-Champaign
- Anthony Ji：University of British Columbia
- Changyi Yang：Carnegie Mellon University
- Zetian Li：Stanford University
- Runduo Ma：University of Wisconsin–Madison
- Zhen Zhang：University of California, Santa Barbara
- Zhongzhu Zhou：University of Sydney

## 📌 核心摘要

实时全双工语音交互要求本地模型边听边决定何时开口，输入是连续语音流，输出是即时语音，开口早容易把没有把握的回答说死，等强模型又会拖慢简单轮次。论文冻结 MiniCPM-o 4.5，只用其语音输入和语音输出，在模型从听转说的原生边界上缓存已算好的隐状态，用正则逻辑回归拟合本地回答会失败的风险分数，分数超过按语言设定的阈值就升级。低风险轮次本地直接说，高风险轮次由本地发话人先说一句固定等待语，再转写问题交给可联网的 gpt-5.5，拿到文字答案后由本地发话人配音播出。相对已有在对话模型内生成特殊令牌来学轮次和思考调用的做法，该门控不增加语言模型前向计算，不改双工检查点，阈值可在部署时重调。在 240 条内部测试上，积极策略用 50.0% 升级率把内容准确率从 42.1% 提高到 69.2%，平均服务器首音等待从 8.68 s 降到 5.95 s。结论适用于问答类信息请求，对执行类多步推理失误几乎无区分力，现场偏好证据仍是初步的。原文未披露训练、推理或部署成本。

## 🔗 开源与复现资源

本次未形成可展示的已核验资源记录，开放状态尚未核实。

可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 实时对话要同时保住快和对，难在哪

这篇论文研究的输入是用户说出的连续语音，目标是语音助手在实时对话里逐轮给出语音回答。必须保留的信息有两个：一是交互节奏，何时接话、何时等待；二是答案内容，事实是否正确、推理是否成立。输出是本地直接说出的回答，或者等云端专家回来再由本地音色转播的回答。

困难在于两个要求互相拉扯。问候语或简单事实题应当一听懂就答，拖延会显得迟钝；难的知识题或推理题若立刻开口，容易把对话锁死在 1 个流利但错误的答案里。原生双工模型已经学会精细的听与说的切换，但它管的是抢话筒的时机，不管接下来要说的内容对不对。论文要解决的具体问题就是在模型刚要开口的那一刻，判断这次本地回答的风险，决定是本地答还是等待更强推理或更新知识。

### 此前用特殊词元学切换，本文为何不动模型

已有路线把控制做成生成的一部分。BayLing-Duplex 用 4 个对话状态词元把沉默、开口、文本完成、语音完成变成下一词元预测；MiniCPM-o 4.5 在内容之前预测一个听或说的二值词元；DuplexOmni 用 THINK 词元异步唤起后台推理层，Listen-Write-Speak 用词元模式同时编码听、写、说；MoshiRAG 微调出 ret 词元触发检索。这些做法都需要带时间标注的大规模双工语料，把能力仲裁放进自回归联合目标里一起训练。

另一条路线是文本侧的能力读出和模型路由。用口头自评、隐藏表示、多次采样不一致性估计正确性，再把查询分配给不同代价的模型，也有人从预填充激活做路由。但这些工作大多在文本输入、离线打分条件下验证，没有回答双工语音的 3 个变化：音频输入、为交互改造过的表示、在答案说完前就必须决策的截止时间。本文的定位是训练后替代方案：冻结双工检查点，不做双工再训练，只读它在原生开口边界已经算好的状态，加一个可在 serving 时重调阈值的门。

### 论文把路由点定在何处，要满足什么条件

论文把决策点定在本地全双工语音模型从听转到说的原生切换处。本地模型保留何时回应的原生决定，门只决定这次回应是立刻开始还是等专家帮忙。一个有用的失败风险估计要满足 3 条：在原生开口边界就可用，保留已学到的双工策略，并给出可调的准确率与延迟工作点。

为此作者区分交互控制和能力控制。前者是何时拿过话筒，后者是是否信任自己即将给出的答案。 readiness to speak 不等于有答对所需的知识，而逢题必调专家又让简单轮次空等。门控的输入处理过程因此被严格限制：只能用当前已有的隐藏状态，不能等完整本地答案，不能再做一次语言模型前向，也不能在线查裁判。

### 从语音流入到本地说或专家转播，完整走一遍

先看整体流程的观察任务：语音按 1 秒块流式进入冻结的本地模型，模型承诺开口时探针打分，低风险直说，高风险走专家但仍由本地音色播出，全程是同一个会话。

> **看图路径：** 1. 先看 1 到 4 的横向主路径：语音流入、中间层探针打分、低风险直答与高风险走云端专家；2. 注意第 2 格下方时间轴：探针在轮次结束到开口前仅用 20-45 毫秒；3. 对比第 3 格绿与红两路的汇合方式：同一会话、同一本地音色播出

[![原论文 Figure 1：Post-training routing at the native speak boundary.](https://arxiv.org/html/2611.01639v1/teaser_v3.svg)](https://arxiv.org/html/2611.01639v1/teaser_v3.svg)

*论文图 1。原论文 Figure 1:：“Post-training routing at the native speak boundary.”。*

上图确实可见 4 个阶段。第一格是真人问天气，波形进入标为小全双工语音模型的本地助手；第二格从运行中模型的中间层引出探针，经仪表盘到容易或困难的二选决策，下方时间轴标出探针在轮次结束到开口前只占 20 到 45 毫秒；第三格绿路为简单查询直接本地回答，红路为困难查询经本地助手转云端大模型再返回；第四格强调 1 人 1 会话的连续双向波形。这帮助理解本文的核心分工：语音模型管拿话筒，门管是否值得等，专家只在被选中时介入。

拿一个样本走一遍。用户说完一题，本地模型在生成调用首次返回听转说切换时被截获，称为答案起始点，此时调用里可能已含第一个生成文本单元。门读出风险分，低于分语言阈值就继续本地生成语音；高于阈值就播放一句预先合成好的固定话术 Hmm, let me double-check that—one moment，写入双工作为模型自己的语音，之后静默听，直到专家文本就绪再由本地说话人合成播出。固定话术只合成一次，不重复填充。

### 风险分是怎么算的，特征从哪里来

风险分要计算的是给定输入上下文 x，本地回答会失败的概率。特征记为 phi(x)，来自冻结表示；拟合的权重 w 和偏置 b 给出分数。阈值记为 tau_l，下标 l 表示分语言，分数超过阈值倾向于上交。

**全双工 × 听转说切换：** 全双工指本地模型同时处理听和说、自己决定何时抢过话筒接话；听转说切换就是它从听用户转到准备开口的那个时刻。本文把交互控制留给这个原生切换，只在其上加一个能力判断：用已算好的隐藏状态估计这次本地回答会不会错，再决定是直接说还是等专家。

部署的原生特征向量拼接了三部分：第 22 层尾部最新状态、尾部状态的均值、输入状态的均值，让探针同时结合当前边界状态和池化上下文。读特征的时机是生成调用首次返回听转说切换时，因此门在本地回应边界可用，无需等完整答案。离线时作者收集校准题的本地答案，用裁判给正确性标签，每个标签配在所选读点捕获的隐藏状态，拟合正则化逻辑回归。推理时无参考答案、无在线裁判，只读当前特征。

\[s(x)=\sigma\!\left(w^{\top}\phi(x)+b\right).\]

上式先做线性合并再过 sigmoid，把任意实数压到 0 到 1。w 转置乘 phi(x) 加 b 是线性打分，sigma 是 sigmoid。哪些量先形成很明确：phi(x) 是冻结模型已算好的隐藏状态，w 和 b 是唯一拟合的参数，凸的正则化逻辑目标用缓存特征和答案标签优化，因此不会改变本地模型的答案分布、听说行为和语音质量。阈值是 serving 参数，可为新的专家预算重校准而不必再做双工微调。

### 为何选中第 22 层，为何还要一个对话行为头

层和位置的选择来自文本输入的留一池数学评测。最后一词元读法在第 22 层达到 0.931 的 AUC，而在最后一层跌到 0.366，低于随机；均值池化能减轻晚层退化。作者因此部署 L22 线性读出。但这个对比是状态特定的：当校准和推理都用音频输入的匹配原生设定时，退化消失，最后一层在音频上可达 0.936。也就是说不能把它理解成普遍的中间层优势。

**失败风险读出 × 逻辑回归门：** 失败风险读出是把输入上下文的隐藏状态映射成一个 0 到 1 的分数，越高表示本地答错可能性越大；逻辑回归门就是拟合权重 w 和偏置 b 再过 sigmoid 得到该分数的线性分类器。组合后门限以上走专家、以下本地直答，阈值可调而不改动双工模型权重。

此外还有一个辅助对话行为头，同样读 L22 状态，判断这一轮是否为信息请求，而非应答、致谢或停止指令等话轮管理。只有同时通过失败阈值和该头阈值才上交。它在基准测试计分的所有会话上都判为信息请求，因此不改变报告的基准数字，只在真实对话中起作用。论文另说明再往后读两个答案块可把外部平均 AUC 从 0.755 提到 0.791，但代价是交接更晚，所以部署仍选开口时刻。

**本地路径 × 专家中继路径：** 本地路径指风险低时让冻结模型按原策略立刻说话；专家中继路径指风险高时先播一句固定 holding 话术稳住话轮，把转写发给可联网的 gpt-5.5，再由本地说话人声音播出专家文本。两条路径共享同一会话和同一说话人音色，分工是快与准的取舍。

### 没有双工训练时，实际拟合了什么

本研究没有训练双工模型本身。MiniCPM-o 4.5 以 9B 规模冻结，仅用语音输入输出，不用图像视频输入；NemotronLabs-VoiceChat-11B 的移植也是冻结检查点。实际拟合的只是探针权重和阈值。

表示层探针用 360 个校准查询和单位置 4096 维特征；部署的原生门用 5228 个校准行和 3 个 L22 汇总特征，逻辑头取 C 等于 3 乘 10 的负 4 次方，五折分层交叉验证打乱种子 42。每种语言的保守、平衡、激进阈值取核心行异折分数的 1 减 r 分位数，r 取 0.15、0.30、0.50，242 个新训练行只参与拟合不参与分位数基。解码上表示分析用 bf16 贪心种子 42，原生用温度 0.7 和 top-k 20。专家是可联网搜索的 gpt-5.5，低推理力度；训练裁判是 gpt-5.4-mini。

**名义上交预算 × 实际到达率：** 名义上交预算是在校准集异折分数上取分位数定出的阈值，如 15%、30%、50%；实际到达率是该固定阈值在新题库上真正触发上交的比例，会随题目难度分布漂移。论文因此固定阈值跨池评测，观察到达率从 Llama Questions 的 21.2% 到 SD-QA 的 62.5% 的自适应变化。

### 在什么题库和计时口径下比较

评测用冻结 MiniCPM-o 4.5 做语音双工，专家为 gpt-5.5。内部测试集 240 问：闲聊 60、事实问答 40、知识 60、数学 60、SimpleQA 陷阱 20，每问等权。外部 4 个英语语音问答池：OpenAudioBench 的 Speech TriviaQA、Speech Web Questions、Speech Llama Questions，以及 VoiceBench 的 SD-QA，外部平均为四池等权。每个查询每种策略采样一次原生会话：纯本地、保守、平衡、激进、全上交。

准确率是答案内容准确率，按交付的本地文本或拟中继文本由分池裁判打分，失败会话计入分母算错。随机参考是在门实际到达率 r 下的解析混合。延迟是服务器首音等待 TTFA，从计划输入结束到首个回答音频块就绪，提前回应记零等待，holding 话术和客户端播放排除在外。同一 5950 会话同时给出准确率和延迟，TTFA 有 5903 个有效时间戳。转写从回放输入的计划结束点开始，从不在最后一个样本计划到达前开始，因此测的是受控回放下的服务器等待，不测真实端点检测。

**匹配随机路由 × 固定答案重放：** 匹配随机路由指在同样上交比例下随机选哪些题上交的解析混合基线，用于剥离只靠多用专家的增益；固定答案重放指把每题的本地答案和专家答案都固定、只换路由选择再算分，用于剥离两次独立采样带来的解码噪声。两者组合才能说明门控选对了题。

### 内部准确率提升了多少，代价是什么

要回答的比较问题是：在同一 240 题内部集上，门控相对纯本地、匹配随机和全上交，准确率和专家使用量如何。指标方向是准确率越高越好，上交率视为成本。

| tier | calls | accuracy | random |
| --- | --- | --- | --- |
| local-only | 0.0 | 42.1 | — |
| conservative | 8.3 | 48.8 | 45.2 |
| balanced | 28.3 | 60.0 | 52.7 |
| aggressive | 50.0 | 69.2 | 60.8 |
| always | 100.0 | 79.6 | — |

上表保留了原文的层级与单位，准确率单位为百分号，呼叫率为百分比。激进门把内部准确率从 42.1% 提到 69.2%，高出匹配随机 8.3 个百分点，恢复了到全上交 79.6% 之间约 72.2% 的差距；保守和平衡介于中间。分层看增益集中在事实问答和带误导前提的题，门能识别出立刻回答风险大。局限也很清楚：数学片 60 题上本地 65.0% 到激进 66.7%，几乎没动；作者指出 5 个专家可修的 GSM8K 失败里读出排序 AUC 有 0.82，但分数最高仅 0.50 低于激进阈值 0.55，错在工作点而非排序。

### 等待时间省在哪里，本地轮还快吗

这里的比较问题是同一内部集上平均服务器等待的绝对值与分布。TTFA 越小越好，单位为秒，口径为从计划输入结束到首个回答音频就绪的非负等待。

| tier | mean | P50 | P95 | P99 |
| --- | --- | --- | --- | --- |
| local-only | 1.08 | 0.78 | 2.61 | 3.66 |
| conservative | 2.15 | 0.92 | 7.23 | 22.74 |
| balanced | 4.67 | 1.60 | 17.63 | 39.40 |
| aggressive | 5.95 | 3.52 | 19.19 | 40.48 |
| always | 8.68 | 6.75 | 22.90 | 34.11 |

上表显示激进平均 5.95 秒，相对全上交 8.68 秒减少 31.5%，保留 86.9% 的准确率。本地留存轮平均仅 1.23 秒，保住了快交互；上交轮平均 10.58 秒，主要花在专家自身回应而非服务开销。本表数值与单位依据论文 PDF。

中位数、尾部同样拉开，P50 从本地 0.78 秒到激进 3.52 秒再到全交 6.75 秒，P95 与 P99 的拖尾在门控下仍明显收窄。

### 文本训练的探针能读语音吗，真人录音呢

先给出读图任务：看相对深度横轴上文本到语音 AUC 何时爬升，再看右侧真人录音是否保持，左侧为同题文本训练后在 TTS 音频上评分，右侧为查询不重叠的真人录音验证。

> **看图路径：** 1. 左图看横轴相对深度：浅层文本探针读语音接近随机，深层才上升；2. 右图看真人录音曲线：L22 附近仍保持约 0.76 的 AUC；3. 对比灰色音频训练参考线，判断文本训练的可迁移区间

[![原论文 Figure 5：Text-trained failure probes read speech states.](https://arxiv.org/html/2611.01639v1/xmodal_transfer.svg)](https://arxiv.org/html/2611.01639v1/xmodal_transfer.svg)

*论文图 5。原论文 Figure 5:：“Text-trained failure probes read speech states.”。*

该图左为 600 题文本与 TTS 音频配对，逐层在文本状态拟合、在音频状态评分；右为 200 个查询不重叠的 SD-QA 真人录音。可见 MiniCPM-o 4.5 浅层 L0 到 L8 仅 0.54 到 0.60，从 L19 约 55% 深度起升到 0.81 到 0.87，部署 L22 为 0.855；MiniCPM-o 2.6 和 Qwen2.5-Omni 也随深度升到 0.80 和 0.83，而语言主干冻结的 Freeze-Omni 最高仅 0.60。右图 L22 达 0.760，L25 达 0.800。解释是浅层模态特定，深层起文本与语音共享区分失败的方向。

晚层衰退只出现在文本输入：MiniCPM-o 4.5 末词元探针从 L22 的 0.931 跌到末层 0.366，而原始 Qwen3-8B 主干在末层保持 0.958；同样问题换成音频输入拟合测试，末层达 0.936；说话模式模板预填充仍为 0.362，因此不跟输出模式走。把 L28 到 L35 权重向主干插值一半，L34 从 0.347 回到 0.634，但模型不再结束轮次；只还原 MLP 可在不丢结束轮次下恢复 L33，说明读出损伤与轮次结束不完全在同一组权重。训练阶段与目标仍是开放问题。

为说明增益来源，这里比较同一 240 题内部集 5 个分层的本地准确率、激进准确率、全上交准确率与激进实际调用率，单位均为百分号与题数。

| Stratum | nn | Local | A | Always | A call rate |
| --- | --- | --- | --- | --- | --- |
| Chat | 60 | 61.7 | 70.0 | 80.0 | 30.0 |
| Factual QA | 40 | 42.5 | 92.5 | 95.0 | 60.0 |
| Knowledge | 60 | 13.3 | 45.0 | 63.3 | 71.7 |
| Math | 60 | 65.0 | 66.7 | 80.0 | 25.0 |
| SimpleQA traps | 20 | 0.0 | 100.0 | 95.0 | 100.0 |

该表显示事实问答与 SimpleQA 陷阱提升最集中，知识片也有明显抬升，而数学片 60 题上本地 65.0% 到激进 66.7% 几乎不动；激进调用率随难度自适应，陷阱达 100.0% 而数学仅 25.0%。

### 实际到达率如何随题库漂移，第二模型族呢

表前的比较问题是固定阈值跨池时名义预算与实际到达率的差异，指标为百分比，分母为各池题数。

| Pool | nn | Conservative | Balanced | Aggressive | Always |
| --- | --- | --- | --- | --- | --- |
| Internal | 240 | 8.3 | 28.3 | 50.0 | 100.0 |
| Speech TriviaQA | 250 | 3.6 | 19.2 | 55.2 | 100.0 |
| Speech WebQ | 250 | 6.4 | 23.6 | 56.8 | 100.0 |
| Speech Llama Q. | 250 | 0.0 | 2.8 | 21.2 | 100.0 |
| SD-QA | 200 | 7.5 | 24.5 | 62.5 | 100.0 |

上表显示内部激进实际 50.0%，TriviaQA 55.2%，WebQ 56.8%，Llama Questions 仅 21.2%，SD-QA 62.5%。保守在 Llama Questions 甚至为 0.0%。这说明阈值固定后调用量自适应难度，论文用等池平均而非合并平均，避免大池主导结论。限制是名义 50% 不等于各池 50%，部署需按本地专家对和工作负载重校准。

移植到 NemotronLabs-VoiceChat-11B 是重拟合而非复用权重，读 L26、L30、L34 起始状态并平均归一化 logit，层集合在内部划分上看过。缓存原生帧重放下外部宏观从 43.8% 到 75.7%，匹配随机为 67.0%；内部重放 223 问有效起始读，余下 17 问留本地，15、30、50% 名义下达 31.7%、44.6%、60.4%。该实验覆盖承诺后首 640 毫秒，不测端到端计时，因此只支持方法可移植，不支持延迟结论可移植。

### 换成让小 LLM 看转写做路由，会差在哪

比较的公平条件是同一会话、同样激进预算、同一专家与中继，只是把上交决策从读出换成零样本 gpt-5.4-mini 看实时 ASR 转写。先看决策时机的读图任务：读出是否在承诺开口前完成，文本路由是否必然晚于承诺。

> **看图路径：** 1. 看(a) 读出在用户语音结束点附近即完成决策，几乎不推迟开口；2. 看(b) 文本路由器需等 ASR 转写加 LLM 调用，决策点落在承诺开口之后 0.13 秒；3. 结合横轴理解本地直答轮为何多等 0.64 秒

[![原论文 Figure 4：When the escalation decision is made (medians, aggressive run).](https://arxiv.org/html/2611.01639v1/llm_timeline.svg)](https://arxiv.org/html/2611.01639v1/llm_timeline.svg)

*论文图 4。原论文 Figure 4:：“When the escalation decision is made (medians, aggressive run).”。*

上图(a) 显示读出复用已算好的隐藏状态，在用户语音结束点后中位 1.23 秒即承诺开口前决策；(b) 显示文本路由需 ASR 中位 0.66 秒加 LLM 中位 0.70 秒，即使转写就绪即发起调用，仍在承诺后 0.13 秒才决策。重放 1181 个完成会话的时间戳，若调用等承诺，平均 TTFA 从 4.44 秒升到 5.34 秒；若转写就绪即调用，升到 4.96 秒，且仅 54% 的轮次需等待。

实际跑活的对比是：在内部、TriviaQA 和 SD-QA 上路由器宏观准确率 77.3% 对门的 80.8%，低 3.5 个百分点；两者都本地回答的 202 轮上路由器多等 0.64 秒，95% 区间 0.53 到 0.75 秒。但 687 对全部配对轮的 pooled 均值几乎相等，门 4.447 秒对路由 4.457 秒，差 0.01 秒，中位差 0.62 秒。因此延迟优势只在本地回答路径成立，不能推广为总体均值更优。重放固定答案下门在激进到达率高 2.6 个百分点，校准混合与中文行上差距更大。

### 哪些失败类型读不出，人工对话又说明了什么

失败类型上，具体但错误的答案占约 70%，读出 AUC 0.813，感知错误 0.889，而多步推理中的执行 slip 仅 0.469，接近随机。起始前一刻读与起始读外部宏观 AUC 为 0.753 对 0.755，几乎相同，说明选起始点是因为原生承诺在那里，而非信号更强。

人工评价是 13 人 16 对任务 32 段对话的盲测，简单事实 7 对、实时信息 9 对，每段名义 2 分钟内可改提示提前结束，按正确性、任务 helpfulness、上下文一致、对话自然度 1 到 5 打分。激进在正确性 4.00 对 3.25、helpfulness 3.94 对 2.88 提升最大，一致性 3.94 对 3.75、自然度 3.06 对 2.94 提升小。S2 实时信息上正确性 2.56 到 3.67、helpfulness 2.00 到 3.67，37 轮上交 19 轮占 51.4%，9 对中 6 胜 3 平；S1 简单事实 3 胜 1 平 3 负，总计 9 胜 4 平 3 负。作者明确这是初步结果，不确立更广对话优势，且等待本身已计入自然度打分。

容易误解的是把阈值当模型能力。阈值是 serving 参数，换专家或换题库分布就要重调；失败风险只是上交价值的代理，专家能否修好还取决于专家。未测误判率的业务成本，也未测客户端可听延迟。

### 复现第一步做什么，需要哪些工件

复现先从校准 manifest、异折分数、阈值、重叠排除、基准哈希和重建脚本入手，论文称补充发布包含这些以及从原始录制数据重建图表的脚本。按附录顺序：以 init_vision 为假加载 MiniCPM-o 4.5 只送音频或文本，用温度 0.7 top-k 20 采样原生会话；缓存 L22 3 段特征与裁判标签拟合 C 为 3 乘 10 负 4 的逻辑回归；按核心行异折分位数定分语言阈值并冻结跨池。

裁判需严格区分：TriviaQA、WebQ、Llama Questions 用 OpenAudioBench 官方裁判与 gpt-4o-2024-08-06，内部、SD-QA 和中文推理用参考锚定的 gpt-5.4-mini 充分性裁判。计时用服务器单调钟从计划输入结束到首个回答音频块，失败无 TTFA 但计入准确率分母。成本 USD 每查询是重放转写经同样专家配置按官方价估算，非基准实测账单，含隐藏推理词元与搜索调用，不含本地算力与 ASR、TTS。

来源方面，本次未发现完成 HTTPS 验证的绑定资源，不得声称代码模型数据已公开；third_party 只证明论文提到链接。参与者标识、录音和转写不在论文工件内，上交会把用户音频或派生文本发往第三方云模型，部署需告知并合规处理。

### 什么时候值得试，还缺哪项验证

当已有冻结双工模型交互尚可、但难知识题常一开口就错，且能接受云端专家偶发长尾等待时值得试。先用文本校准快速验证 L22 附近是否有失败信号，再补少量语音校准定阈值；实时信息类任务更可能受益，简单事实题预期增益小。保持本地模型的听说策略不动，只调阈值控预算。

还需补的验证是：中文与新领域上的阈值重校准，对执行 slip 这类起始不可见错误的 turn 内持续监测，以及把 ASR 推迟到上交后对本地轮留设备、专家轮加转写时间的实测。总体上论文支持的是在原生开口边界做能力仲裁可兼顾快与准，但只在所测的本地专家对、工作负载和计时口径下成立，换条件需重测准确率与等待的权衡。

<details>
<summary>📎 论文与评分元数据</summary>

排名：前50% | 文档类型：系统技术报告 | [arXiv 原文](https://arxiv.org/abs/2611.01639v1)

</details>

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。

- 评分规则：type-aware-v1

- 评分模型：muse-spark-1.3-contributor

- 评分请求协议：openai_responses

---

[← 返回 2026-11-03 语音/音乐/音频论文速递](/audio-paper-digest-blog/posts/2026-11-03/)
