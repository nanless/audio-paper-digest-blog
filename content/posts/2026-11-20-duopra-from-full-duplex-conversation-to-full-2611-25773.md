---
title: "Duopra: From Full-Duplex Conversation to Full-Duplex Agency"
date: 2026-11-20
draft: false
tags: [语音代理规划与工具使用, 工具增强与约束解码, 全双工语音交互, 强化学习]
categories: [论文速递]
description: "论文把前后端任务失败定位为前端没有发出忠实请求，提出统一直接调用与自然语言委托的杜奥普拉，用三阶段训练在相同后端下把通过率从百分之四点七提升到百分之四十四点七，同时保住三项轮流接管能力。"
hiddenInHomeList: true
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_arxiv_id: "2611.25773"
paper_digest_workbench_contract: "researcher-workbench"
paper_digest_workbench_schema_fingerprint: "1f09b594c317cc38e934de27a5b0e8ceb4baa50ef79bd4f8683dd9adea720fe7"
paper_digest_reader_title: "杜奥普拉：让全双工前端既会接话又能把任务办完"
paper_digest_original_title: "Duopra: From Full-Duplex Conversation to Full-Duplex Agency"
paper_digest_arxiv_version: 1
paper_digest_arxiv_versioned_id: "2611.25773v1"
paper_digest_arxiv_abs_url: "https://arxiv.org/abs/2611.25773v1"
paper_digest_arxiv_pdf_url: "https://arxiv.org/pdf/2611.25773v1.pdf"
paper_digest_primary_task: "语音代理规划与工具使用"
paper_digest_tags_contract: "paper-tag-flat-tags"
paper_digest_tags_schema_fingerprint: "27e36280a4b8d3df62ebe54d3ab037920f4d69feb2b554163f01bbae2caf4338"
paper_digest_tags_selection_contract: "paper-tag-selection"
paper_digest_tags_registry_version: "paper-tag-catalog"
paper_digest_tags_registry_sha256: "9673bc0122e1905a5dcfd8b223675400cc2fa4c36095bc0e5f817edf99a0ec5c"
paper_digest_tags_concepts: [{"facet":"task","id":"task.voice-agent-planning","label":"语音代理规划与工具使用"},{"facet":"method","id":"method.tool-augmentation","label":"工具增强与约束解码"},{"facet":"task","id":"task.full-duplex","label":"全双工语音交互"},{"facet":"method","id":"method.reinforcement","label":"强化学习"}]
paper_digest_primary_method: "工具增强与约束解码"
paper_digest_score: 7.0
paper_digest_rank_bucket: "前50%"
paper_digest_document_type: "方法研究"
paper_digest_one_sentence: "论文把前后端任务失败定位为前端没有发出忠实请求，提出统一直接调用与自然语言委托的杜奥普拉，用三阶段训练在相同后端下把通过率从百分之四点七提升到百分之四十四点七，同时保住三项轮流接管能力。"
paper_digest_reader_sections: [{"heading":"问题本质：为什么会接话不等于能把事办成","index":1,"kind":"problem","roleLabel":"问题与瓶颈"},{"heading":"方法全景：一个流式策略如何同时管说话与调工具","index":2,"kind":"method_overview","roleLabel":"方法全景"},{"heading":"核心机制：统一动作空间如何把后端也装成一个工具","index":3,"kind":"component","roleLabel":"核心机制"},{"heading":"三阶段训练：协议示范如何变成按时完整的执行","index":4,"kind":"training","roleLabel":"训练与优化"},{"heading":"主实验验证：同一后端下前端替换带来多大提升","index":5,"kind":"result","roleLabel":"主实验验证"},{"heading":"训练消融：多步完成从哪里来，错误如何转移","index":6,"kind":"ablation","roleLabel":"消融与诊断"},{"heading":"会话与语音代价：接管保住了什么，清晰度用什么换回","index":7,"kind":"limitation","roleLabel":"适用边界"},{"heading":"边界与选型：何时值得尝试，复现第一步做什么","index":8,"kind":"synthesis","roleLabel":"实践与复现"}]
paper_digest_authors: [{"affiliations":["Shanghai Jiao Tong University","Tencent"],"name":"Chiyu Chen"},{"affiliations":["Shanghai University"],"name":"Pengzhou Cheng"},{"affiliations":["Shanghai Jiao Tong University"],"name":"Yuezhao Ma"},{"affiliations":["Shanghai Jiao Tong University"],"name":"Xiaocheng Li"},{"affiliations":["Shanghai Jiao Tong University"],"name":"Can Liu"},{"affiliations":["Tencent"],"name":"Haonan Hu"},{"affiliations":["Shanghai Jiao Tong University"],"name":"Yao Yao"},{"affiliations":["Shanghai Jiao Tong University"],"name":"Yifei Yang"},{"affiliations":["Shanghai Jiao Tong University"],"name":"Yijie Lu"},{"affiliations":["Shanghai Jiao Tong University"],"name":"Taolei Wang"},{"affiliations":["Shanghai Jiao Tong University"],"name":"Yansi Li"},{"affiliations":["University of Bristol"],"name":"Muhuan Wu"},{"affiliations":["Tencent"],"name":"Chenglu Sun"},{"affiliations":["Shanghai Jiao Tong University"],"name":"Gongshen Liu"},{"affiliations":["Shanghai Jiao Tong University"],"name":"Zhuosheng Zhang"}]
paper_digest_abstract_sha256: "54f7ccae757a99d493c23a7601b394870f3bc4f780f076a961f01f16b99b30fe"
paper_digest_sidecars: {"citation.bib":{"sha256":"ecf6bae79d6959fe7253106a0eb9de3a7e4f303488d4f0419155eae3a414e419","url":"/audio-paper-digest-blog/client/papers/2026-11-20/2611-25773/citation.bib"},"citation.json":{"sha256":"b6b12070deb12b828bb43e07039c2870af88efa7d2498b5fcf6b11ed279920b1","url":"/audio-paper-digest-blog/client/papers/2026-11-20/2611-25773/citation.json"},"citation.ris":{"sha256":"0cb7d238fe7c1926a0f397ac5ce8de9de2d519c002b734af737c4bb0a628604f","url":"/audio-paper-digest-blog/client/papers/2026-11-20/2611-25773/citation.ris"},"rethink-context.json":{"contract":"paper-research-context","schemaFingerprint":"5d4e79f7d3ee65b39ccb38281548bf20a1b2041ab7a27625eaf97ab9909a8383","sha256":"a726488963ec5fa52c2877cda52fb7dcd6ab846cd8b02e4f3086f4cf61570c1f","url":"/audio-paper-digest-blog/client/papers/2026-11-20/2611-25773/rethink-context.json"}}
paper_digest_api_reader_contract: "beginner-researcher"
paper_digest_api_reader_schema_fingerprint: "7c0300b9342334b864b6a304dcf02a96fb8dbbe8f4061b6dbc0ddfdd249ceceb"
paper_digest_api_reader_article_sha256: "41f5a4cd3877bfedad64d006b97b45ecb209cee69b765b4e27c9ed2ac64a49bd"
paper_digest_api_reader_plan_sha256: "7c32941713f6097f2f996b9ea1fa86056967a4c6cd988da2e69dc91ee4720375"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings"
paper_digest_api_reader_source_binding_schema_fingerprint: "d2a2607a6e561909473022eb43f56332ee357af8568566a095c29083ffdec9cc"
paper_digest_api_reader_source_bindings_sha256: "4d96a65e5cfb34320401dd6ebaf085fb8bc146bfa93b839aa902955205f93710"
paper_digest_api_reader_source_table_count: 4
paper_digest_api_reader_source_formula_count: 3
paper_digest_api_reader_structured_artifacts_sha256: "7a5236fac033e3c524888972763d70ed005e4638dc621cb188d9a4cf7d7beaf7"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity"
paper_digest_api_reader_author_identity_schema_fingerprint: "1e3fd3a9a56c9a5bf52df8df5022690b9a3fa92e83e934f295af87c0e258ed2f"
paper_digest_api_reader_author_identity_sha256: "e4f9d32261b2c0929808bbe354c122e1875fa0f348ecd7f2f9f2131a1c2b5f8c"
paper_digest_api_reader_author_count: 15
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity"
paper_digest_api_reader_resource_identity_schema_fingerprint: "33b0be17118be61f39b85ce690c8da17e91f2864bb65e85284f60c40067328e0"
paper_digest_api_reader_resource_identity_sha256: "3e2cf72a07431aed71f87069fee9f52de3cc483441e89e3689e755e18c361a98"
paper_digest_api_reader_resource_count: 0
paper_digest_api_reader_figure_persistence: "ephemeral-no-persisted-figure-assets-v1"
paper_digest_api_reader_decision_projection: "api-reader-decision-projection"
paper_digest_api_reader_decision_projection_schema_fingerprint: "e56feb5ab75c8710904916b898f73dab9bb18bdf65bb60b7ed2edf7f99cea860"
---

# 📄 杜奥普拉：让全双工前端既会接话又能把任务办完

> 英文题目：*[Duopra: From Full-Duplex Conversation to Full-Duplex Agency](https://arxiv.org/abs/2611.25773v1)*

<!--paper-tag-hierarchy-v1:start-->

**研究分类**

- **研究任务**：[语音交互](/audio-paper-digest-blog/papers/?concept=task.speech-interaction) → [语音代理规划与工具使用](/audio-paper-digest-blog/papers/?concept=task.voice-agent-planning)；[语音交互](/audio-paper-digest-blog/papers/?concept=task.speech-interaction) → [全双工语音交互](/audio-paper-digest-blog/papers/?concept=task.full-duplex)
- **研究方法**：[工具增强与约束解码](/audio-paper-digest-blog/papers/?concept=method.tool-augmentation)；[强化学习](/audio-paper-digest-blog/papers/?concept=method.reinforcement)

<!--paper-tag-hierarchy-v1:end-->

> 评分：**7.0/10** | 创新 1.5/2 | 技术严谨 1.3/1.5 | 实验充分 1.1/1.5 | 清晰度 0.8/1 | 影响力 1/1.5 | 开源 0/1.5 | 可复现 0.3/0.5 | 工程/实践 1/1.5


## 👥 作者与机构

- Chiyu Chen：Shanghai Jiao Tong University；Tencent
- Pengzhou Cheng：Shanghai University
- Yuezhao Ma：Shanghai Jiao Tong University
- Xiaocheng Li：Shanghai Jiao Tong University
- Can Liu：Shanghai Jiao Tong University
- Haonan Hu：Tencent
- Yao Yao：Shanghai Jiao Tong University
- Yifei Yang：Shanghai Jiao Tong University
- Yijie Lu：Shanghai Jiao Tong University
- Taolei Wang：Shanghai Jiao Tong University
- Yansi Li：Shanghai Jiao Tong University
- Muhuan Wu：University of Bristol
- Chenglu Sun：Tencent
- Gongshen Liu：Shanghai Jiao Tong University
- Zhuosheng Zhang：Shanghai Jiao Tong University

## 📌 核心摘要

**问题与瓶颈：** 输入是带停顿、修正和打断的英语口语请求，输出要求在流式对话中完成 1 到 3 个领域工具调用并给出有依据的口头答复。主流前端后端分工把对话前端和工具后端分开，前端只写自然语言请求，后端执行具体调用。论文在 Full-Duplex-Bench v3 上测试 100 条录音和 12 个仿真接口，发现 Realtime-Venus-Audio 加 Harness 的流式管线只在 11.0% 会话交出委派请求，调用覆盖率为 10.3%，Pass@1 为 4.7%，即使后端完全正确也无法超过交出上限，说明损失先发生在发起阶段而非执行阶段。

**思路与架构：** 核心洞察是把后端也看成一个工具，让直接调用和委派共用同一动作接口和完备性标准。Duopra 在 RV-Audio 上保留每 1 秒处理单元的流式循环，思考器即负责语言与决策的语言模型在私有区间输出结构化 JSON 动作，发声器即负责把文本变成语音的语音生成器根据思考器隐状态发声。领域工具调用与后端委派都用调用操作表示，后者是查询任务即 assistant.query，参数为包含最新取值、有序步骤和结果依赖的自包含自然语言串。训练分三段：协议监督微调教调用、澄清和汇报格式；全双工强化学习按请求结束后的行动时限和打断停止时限奖励及时完整执行；只训练投影器即连接思考器与发声器的映射层，把语音条件方向拉回基座以修复可懂度。

**对比与代价：** 同一 Qwen3-8B 后端和同一流式管线下，Duopra 后端委派的 Pass@1 为 44.7%，比基线 4.7% 高 40.0 个百分点，配对自助 95% 区间为 [31.3, 48.7]，直接调用领域工具达到 47.7%，换 DeepSeek 后端达到 49.3%，监督微调起点为 26.0%。训练先减少无调用会话，再把多调用请求从不可解变为部分可解，2 到 3 次调用子集相对 RL1 提高 25.5 个百分点，但正确选出工具却写错参数成为最大剩余错误类。全双工 FDB v1.0 三项接管率相对基座均改善，轮次接管 75.6% 对 59.1%，真实停顿误接管 5.4% 对 18.1%，打断接管 91.3% 对 79.5%。代价是三个训练后检查点在 55 个后通道测试项上均不产生自发后通道回应，投影器修复把中文字符错率从 6.01% 降到 2.58%，英文词错率从 9.74% 降到 7.66%，该数字来自同一候选选择集，应理解为选择集证据。

**边界与导读：** 结论成立于预录单轮请求、仿真确定性工具和冻结后端最多 6 次调用的条件下，未覆盖用户根据中间结果追问的多轮状态维护，不同基座和真实噪声下的表现也未验证。想深究形式化策略、奖励分级与投影器对齐目标，可查阅下方方法与细节中对输入单元流、动作接口和三段训练的展开。

## 🔗 开源与复现资源

本次未形成可展示的已核验资源记录，开放状态尚未核实。

可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 问题本质：为什么会接话不等于能把事办成

刚进入语音交互的读者容易把流畅对话等同于能办事，本文首先要拆开这两种能力。会话主动性处理暂停、附和、轮流、打断与重叠时何时听、何时说、何时停、何时续，任务主动性处理何时行动、如何保留用户最新意图并走完所需步骤，全双工主动性要求同一个流式策略同时做好这两类决策。已有前后端智能体把分工切开，前端决定是否发起以及发起什么请求，后端决定如何执行，执行可以外包，但没有发出的请求永远无法被执行，发出不完整也会误导后端。

**会话主动性 × 任务主动性 × 全双工主动性：** 会话主动性管何时听何时说何时停，任务主动性管何时行动并保留用户最新意图，全双工主动性要求同一个流式策略同时做好两组决策，论文正是用这组分工把失败定位到发起阶段。

要理解这种卡点，可以沿论文给出的购物例子走一遍。用户先说搜索笔记本，又改成平板电脑，先说加入两个，又改成只加一个，而加购依赖于搜索返回的商品编号。如果领域工具模式只在后端可见，前端只能多次转交自然语言请求，每次转交都要重新携带修正后的值与步骤依赖，稍有遗漏就会把旧值或多余步骤带给后端。如果前端自己能看到模式，就可以直接发出修正后的领域调用，不再依赖转交。图中划掉的旧值与弯箭头正是被取代的请求，第十六个例子报告了这种委托成功的一次实际运行。

在全双工工具基准第三版上的测量把上述直觉数量化。该基准包含 100 条带口吃、填充词与自我修正的英文录音和 12 个模拟接口，其中 66 条需一次调用，18 条需两次，16 条需三次。在作者的流式管线里，实时金星音频加其执行框架只在 11.0% 的会话里向后端转交，即使后端每次都做对，总体通过率也无法超过这个转交上限，而实际通过率只有 4.7%。多数失败发生在领域工具执行之前，这说明在该配置下限制首先来自发起，而不是后端能力普遍不行。

读懂这张示意图需要先看清时间线与转交箭头，上栏是前后端分离，下栏是杜奥普拉自己持有模式并决策。

[![原论文 Figure 1：Frontend responsibility in an evolving FDB v3 request (ecommerce_19; schematic).](https://arxiv.org/html/2611.25773v1/fig1_timeline.png)](https://arxiv.org/html/2611.25773v1/fig1_timeline.png)

*论文图 1：Frontend responsibility in an evolving FDB v3 request (ecommerce_19; schematic)（原论文 Figure 1）。*

上栏前端标为没有模式，后端持有工具模式，用户四次修正对应四次转交，下方工具栏出现撤销旧搜索与撤销旧加购。下栏前端自己持有工具模式与委托工具，用户同样修正，但前端直接发出修正后的搜索与加购，转交次数为零。读图时重点不是背数字，而是看到忠实发起的责任始终在前端，执行外包并不能免除这一责任。分离路线多一次转交就多一次丢失修正或依赖关系的风险，也增加了回答事实答案前的等待，直接路线把模式判断前移到前端，一次修正可以直接覆盖旧参数，但前提是前端真正理解必填与可选字段以及结果依赖关系。

### 方法全景：一个流式策略如何同时管说话与调工具

一个样本进入系统后经历什么，是理解全篇的基础。用户音频按每秒一个单元流入，前端在每个单元读入当前音频与此前注入的观察，观察里放着可见工具的模式与已返回的调用结果，然后输出三部分：轮流状态是听还是说，需要被说出的公开文本，以及永不被说出的私有动作。策略是因果的，当前输出只依赖当前与过去的音频、观察与历史输出。会话主动性决定轮流状态与公开文本中询问缺失值与播报结果的部分，任务主动性决定私有动作调哪个工具、用哪些参数。

思考器、发音器与投影器的分工需要先讲清。思考器是语言模型主体，生成双工控制标记与公开文本，发音器根据思考器隐状态把文本变成语音，投影器是两者之间的映射模块。训练思考器会改变传给发音器的条件，可能损伤可懂度，这就是后文单独修复投影器的物理原因。统一称呼后文保持一致，不再混用其他名字。

**思考器 × 发音器 × 投影器：** 思考器是语言模型主体并输出控制标记与私有动作，发音器把公开文本变成语音，投影器把思考器隐状态映射为发音条件，三者耦合决定了改思考器后必须单独修复投影器。

策略的形式化用条件概率写出，符号含义需要逐个落实。

\[\pi_{\theta}\left(y_{t}\mid x_{\leq t},\,e_{\leq t},\,y_{\lt t}\right).\]

该式表示在第 t 个单元，给定此前全部音频、观察与历史输出，输出当前轮流状态、文本与私有动作的概率。下标 t 是时间单元，输入包含音频流与模式结果观察，输出是三元组，参数是思考器参数。因果性意味着不能偷看未来音频，私有动作在同一流里与说话并行产生，运行时在每个单元边界把返回结果作为新的观察注入，再影响下一步说话与行动。

工具暴露方式决定了模型能调什么。每个领域工具都有包含必填与可选参数的模式，后端本身也被看成一个工具，其参数是一段自包含自然语言任务描述。直接暴露只给领域工具，后端委托只给委托工具，两者都给时模型通过同一调用操作自己选路，不设独立分发器。执行是否正确按同样的金色调用集合判定，直接调用与委托调用都计入完成度，重复执行会受罚。

信息充分与成功的标准是训练与评测共用的尺子。调用成立要求每个必填参数都有来源：用户最新说话且以最后一次修正为准，或此前调用结果，或会话上下文与默认值。若必填缺失，前端只追问缺失项，等补齐再行动，可选缺失则用默认值。成功要求调用集合在工具名与归一化参数上与金色完全一致且无缺失多余，回答只依据已返回观察且覆盖请求，若信息充分则在请求结束后限定单元内行动，否则只问缺失项。会话控制另有 3 条：用户说完要接管，真实停顿中不抢话，打断开始后限定单元内停下，附和与背景音中继续说完。

下表交代评测时每个检查点实际用的思考器与投影器组合，有助于复现时对齐状态，投影器是否修复是关键区别。

| Model | Thinker | Projector |
| --- | --- | --- |
| Duopra-SFT | after Stage 1 | base |
| Duopra-RL1 | after Stage 2a | base; used on FDB v1.0, FDB v1.5, VoiceBench and FDB v3 (Direct) |
| Duopra-RL | after Stage 2b | base; used for the projector drift analysis (Figure 5b) |
| Duopra | Duopra-RL | Stage-3 projector (all benchmarks) |

该组合表的含义是阶段产物逐步叠加。协议微调后的思考器配基础投影器得到第一版，加入第一轮强化学习得到第二版，再加入第二轮多步与委托训练得到第三版思考器，最终模型是第三版思考器配第三阶段修复后的投影器。评测主结果都用最终组合，投影器消融会特别注明用基础投影器，从而分离思考器变化与发音条件变化的影响。

### 核心机制：统一动作空间如何把后端也装成一个工具

沿航班查询例子可以走通一次完整交互。第一秒用户说到航班号，系统注入工具模式并输出听状态，第二秒用户补上明天，仍输出听状态，第三秒静默时输出说状态并说正在查，第四秒在私有片段里发出结构化调用，调用里写明操作、调用编号、工具名、航班与日期参数及模式版本，第五秒结束本轮，第六秒工具结果在单元边界到达，前端再说出晚点 20 分钟。公开文本与私有调用分处不同单元，工具模式与结果都以规范格式作为观察进入历史，私有动作保留在自回归历史里，但发音器通过掩码只能看到公开语音。

动作与观察的格式是可靠执行的前提。检索模式用包含操作、调用编号与查询串的动作取回最相关的 3 个模式，调用动作用包含操作、编号、工具名、参数对象与模式版本的动作触发执行，运行时校验模式版本与参数合法性，非法返回结构化错误。每次观察携带调用编号，在结果返回后的第一个单元边界进入流。委托同样走调用操作，只是工具名是委托工具，参数是一段自然语言任务，训练时字段名为任务，评测适配器中字段名为查询，长度分别限制在一千六百与一千字符以内。

**直接调用 × 后端委托 × 两者都可见：** 直接调用只给前端领域工具，后端委托只给自然语言委托工具，两者都可见时由模型自己选路，三种暴露共用同一调用格式与同一正确性标准，因此能直接比较前端自身能力。

委托任务的写法决定了后端能否执行。训练描述要求把完整请求与已知事实都写进字符串，不传分散的城市、日期等业务字段，可见的简单请求优先直接调用，多目标、结果依赖、条件分支或仅后台可见能力才适合委托。任务串要包含当前有效步骤、约束、已听到的值与依赖关系，必填值可来自用户、会话上下文、默认值或具名前序结果，缺失的必要值只追问必需项，可选字段用默认，保留最终修正并排除已放弃请求。后台听不到对话，上下文不会自动拼接，只有已注册能力与会话权限可用。

后端在训练与评测中都是冻结的大语言模型，温度为零，最多执行六次工具调用。训练用 3800000000 参数规模的后端做展开，评测用 Qwen3-8B 规模与深度求索后端。训练时后端输入是任务串与自身工具目录，输出状态、答案与缺失信息，运行时再补上执行日志中的步骤。评测时后端收到指令、当前请求与此前问答，只能用给定函数，不编造参数，缺信息时简短追问，用返回证据说话，不谎称成功，多步时继续调用并用请求语言简短作答。前端的任务描述是后端接触用户请求的唯一通道，因此措辞保真直接决定条件成功率。

### 三阶段训练：协议示范如何变成按时完整的执行

三阶段的输入输出需要先看清，再谈损失与奖励。第一阶段用 12800 会话的池子做协议示范，其中七成中文、六成任务导向、四成保持对话能力，涵盖直接调用、模式检索、追问缺失、打断停止、附和后继续等类型，验证与测试各保留四千余会话并包含十六加 16 个未见工具。第二阶段用七千九百余任务做流式展开，每任务采样 8 条轨迹，用户音频预先合成且 8 条共享，运行时执行直接调用或把委托发给冻结后端，结果在单元边界注入。第三阶段缓存九百三十一训练会话共三万五千余隐状态对，只训练投影器。

第一阶段损失只看思考器参考输出位置，包括公开文本、私有动作与双工控制标记，输入音频、观察与运行时插入的边界标记只作上下文。优化器用权重衰减的自适应方法，峰值学习率很低，批量 32 会话，共四百步。更新范围是思考器变换层与最后归一化，嵌入、输出头、音频编码器与语音生成模块冻结，得到第一版检查点，为后文强化学习提供起点。

读懂训练流程图要抓住冻结与训练的标记，火焰表示训练，雪花表示冻结，尖括号是双工控制，大括号是永不被说出的私有动作。

[![原论文 Figure 2：Duopra’s three training stages on RV-Audio (h_j: thinker hidden state at spoken-token position j;…](https://arxiv.org/html/2611.25773v1/fig2_method.png)](https://arxiv.org/html/2611.25773v1/fig2_method.png)

*论文图 2：Duopra’s three training stages on RV-Audio (h_j: thinker hidden state at spoken-token position j; P_\phi_0, P_\phi: base and Stage-3 projectors; c_j: talker conditioning)（原论文 Figure 2）。*

第一栏思考器被训练，发音器冻结，输入是航班问句与工具模式，输出是听标记、说正在查、私有调用与播报结果。第二栏思考器加适配器被训练，环境给出脚本用户、运行时、模拟工具、冻结后端与评分器，8 条轨迹的奖励经组相对优势与散度惩罚回传。第三栏思考器冻结，只训练投影器，两路隐状态经各自投影与归一化后对齐方向。这种画法把数据流、监督来源与参数更新路径放在同一张图里，适合对照正文核对冻结范围。

第二阶段奖励按任务族分两套，第一轮覆盖直接调用、修正、追问、打断与附和等八族，第二轮新增五族并回放第一轮任务。

\[r(\tau)=\begin{cases}R_{\mathrm{A}}(\tau),&\operatorname{family}(\tau)\in\mathcal{D}_{\mathrm{2a}},\\ R_{\mathrm{B}}(\tau),&\operatorname{family}(\tau)\in\mathcal{D}_{\mathrm{2b}}.\end{cases}\]

该式表示轨迹奖励按所属族取第一轮奖励或第二轮新增奖励。第一轮奖励是分项求和再裁剪，信息充分时三单元内行动给小的正奖励，不行动按沉默、无行动说话与多余追问给不同负奖励并追加缺调用惩罚，缺必填时只问缺失项给正奖励，问多余或可选给负奖励，编造值给较大负奖励，步骤覆盖与参数保真各按正确比例给分，用修正前旧值每个扣分，完全匹配金色调用再给分，完整与部分播报分别给分，虚构、谎称完成、重复委托与可见单步却委托都扣分。打断控制要求两单元内停下，附和后多停或终结内容扣分。

下表是第二轮新增的 5 类任务族，训练正是靠它们补齐多步与恢复能力，表前说明有助于理解新增任务的模式与期望行为对照。

| Family | Task pattern | Expected behavior |
| --- | --- | --- |
| D1 Single step | A disfluent spoken request requiring one tool call. | Call the tool directly if visible; otherwise use query. Act within 3 units after the request ends. |
| D2 Multi-step | Independent steps, result dependencies (“the cheapest one”), or conditional branches. | Complete all steps directly, or delegate a task specifying the steps, conditions, and dependencies. |
| D3 Corrections | A value is corrected or a request is abandoned mid-sentence. | Use the latest value and skip abandoned requests. |
| D4 Sufficiency | Four variants: complete information, a missing required value, missing optional values, or a value obtained from a previous step. | Ask only for missing required information; otherwise proceed with the available values and tool results. |
| D5 Recovery | The backend requests missing information, returns an error or partial result, or a tool fails transiently. | Request missing values, retry a recoverable failure once, or report partial completion accurately. |

该对照的教学意义在于期望行为与奖励直接对应。单步要求三单元内行动，多步要求补齐独立步骤、结果依赖与条件分支，修正要求用最新值并跳过放弃请求，充分性要求区分 4 种信息状态，恢复要求缺信息时追问、可恢复错误最多重试一次或诚实报告部分完成。训练采样中新任务占四成五，旧任务占五成五，其中三成旧样本同时可见委托工具但仍期望直接调用，从而在可见时抑制不必要的委托。第二轮奖励看整单结果，完整执行且回答有据按行动时机给三档分数，部分完成且诚实报告按正确比例给小分，虚构给接近负一的大负分，直接与委托调用都计入完成。

### 主实验验证：同一后端下前端替换带来多大提升

评测协议需要先讲清，否则数字无法比较。作者的流式管线对每条录音用 3 个解码种子，共 300 会话，执行日志与金色调用在工具名与归一化参数上完全一致且无缺失多余才算通过，通过率是会话占比。工具名用无需裁判的集合分数，参数与回答质量用 Qwen3.8-27B 裁判，回答质量只在有回答会话上平均。公开发布的商业与开源结果来自各自评测与裁判，只能作背景参考，不能与自家管线直接排名。

**调用覆盖率 × 条件成功率 × 总体通过率：** 调用覆盖率统计真正执行过领域工具的会话比例，条件成功率只在已调用子集中计算通过比例，两者相乘得到总体通过率，这种分解能区分没有发出请求与发出后没有做对。

总体通过率等于调用覆盖率乘以条件成功率是后文反复使用的透镜，调用覆盖率统计执行过领域工具的会话占比，条件成功率只在已调用子集中算通过率，前者由前端是否发起决定，后者取决于前端措辞与后端执行。转交只是发给委托工具，不一定产生领域调用，因此转交上限与调用覆盖率是两个相近但不同的数。

下表是自家管线下的主结果对照，均为相同模拟接口与相同流式管线、三解码种子与 Qwen3.8-27B 裁判下的 Pass@1，越高越好；除最后一行换用 DeepSeek 后端外，其余均用相同 Qwen3-8B 冻结后端。

| 系统与调用方式 | 通过率 |
| --- | --- |
| RV-Audio + Harness（委托，相同后端） | 4.7% |
| Duopra-SFT（直接调用） | 26.0% |
| Duopra（直接调用） | 47.7% |
| Duopra（委托，相同后端） | 44.7% |
| Duopra（委托，后端为 DeepSeek） | 49.3% |

对照显示两条路线都获得提升。用相同 Qwen3-8B 后端时，前后端基线通过率 4.7%，替换前端后的委托配置达到 44.7%，配对区间不包含零。直接调用无需推理时后端，达到 47.7%，换深度求索后端达到 49.3%，而协议微调后直接调用只有 26.0%。工具名分数、参数准确率与回答质量同步上升，说明提升不是只靠多调工具。两者都可见时模型几乎总是直接调用，133 个成功中至少 132 个来自自身领域调用，任务能力确实落在前端，不依赖调用后端。与公开发布数字的对比只能定性，作者管线下最终模型与部分商业系统相当，但这些数字来自不同的评测与裁判，不能当成同协议排名。

要回答限制来自哪里，需要把总体通过率拆开看，读这张分解图要先分清两根柱子。紫色是 300 会话中有执行调用的比例，绿色是这些已调用会话中的通过率，横轴按总体通过率排序。

[![原论文 Figure 4：FDB v3 Pass@1 decomposed into Call (sessions with an executed domain-tool call) and Pass|call…](https://arxiv.org/html/2611.25773v1/figA_decomp.svg)](https://arxiv.org/html/2611.25773v1/figA_decomp.svg)

*论文图 4：FDB v3 Pass@1 decomposed into Call (sessions with an executed domain-tool call) and Pass|call (success conditional on such a call; 95% recording-level bootstrap intervals)（原论文 Figure 4）。*

基线前端只发出 34 次转交，分属 33 个会话，最终只有 31 个会话产生领域调用，调用覆盖率约 10%，条件成功率约四成五，总体通过率被调用覆盖率压住。最终模型直接调用覆盖率超过 80%，委托配置下覆盖率更高，条件成功率维持在 50% 以上，总体通过率因此大幅抬升。配对会话显示，在基线已调用的 31 个会话里，最终模型并不更优，增益几乎全部来自基线从未执行的其余会话中约一半被做对，这正是发起能力补齐的证据。同一前端换后端时，条件成功率上升但调用覆盖率下降，总体变化不显著，更强的后端能把已发起的请求做得更准，但补不上没有发出的请求。

### 训练消融：多步完成从哪里来，错误如何转移

从发起走向完成的过程需要分阶段看。协议微调后直接调用通过率 26.0%，第一轮强化学习把调用覆盖率从四成多抬到 50% 多，但通过率只到 26.7%，基本没有变化，说明更频繁调用没有变成更多完成。第二轮强化学习把直接调用通过率推到 47.7%，提升约 21 个百分点，配对区间明显为正，其中中等与困难请求以及需两到三次调用的会话提升最大，而第一轮检查点在多通请求上几乎全部失败。已执行工具名与数量匹配金色的比例同步上升，训练先减少无调用，再把调用变成多步完成。

随着无调用下降，工具对但参数错成为最大失败类。最终直接调用中有 58 个参数错误会话，委托配置下用 Qwen3-8B 后端有 85 个，例子包括把字母 O 听成数字零的订单号，以及只说计划却无任何调用的空口承诺。选对工具与保住用户最新值是两个独立要求，前者解决调什么，后者解决参数保真，修正与充分性奖励正是针对后者。

训练阶段对比如上方柱状图所示，上半是每个会话的唯一结局，右端给出通过与无调用占比，下半按需一通、两通与三通分组给通过率。

[![原论文 Figure 3：Training first reduces no-call sessions and then turns calls into multi-call completions (FDB v3,…](https://arxiv.org/html/2611.25773v1/fig3_analysis.svg)](https://arxiv.org/html/2611.25773v1/fig3_analysis.svg)

*论文图 3：Training first reduces no-call sessions and then turns calls into multi-call completions (FDB v3, 300 sessions per configuration; counts in Table 12)（原论文 Figure 3）。*

基线几乎全是无调用；协议微调后与第一轮强化学习后的无调用占比下降，其中协议微调后需两次工具调用的任务通过率为 3.7%、需三次调用的任务为零，第一轮强化学习后这两组均为零；最终版的多步任务通过率明显提高。读图时注意分母是 300 会话与六十六、十八、16 条录音对应的会话数，箭头方向是越高或越低越好。这种先发起后完成的顺序说明，第二轮新增的多步、修正、充分性与恢复任务族补齐了第一轮缺少的规划能力，而不只是奖励数值变化。

下表是流水线复现核对，说明接管率测量本身是可比的，表前交代同一管线对第三方模型的复现条件与已发表值的差距范围。

| FDB v1.0 metric | Reported | Ours |
| --- | --- | --- |
| Turn-taking TOR↑ | 88.2 | 86.3 ± 4.0 |
| Pause TOR, real↓ | 46.3 | 38.7 ± 1.8 |
| Interruption TOR↑ | 98.5 | 99.2 ± 1.4 |

该核对的意义是锚定方向。轮流接管与打断接管越高越好，真实停顿接管越低越好，复现值与发表值接近，差距都在 10 个百分点以内，说明后文最终模型三项优于基线的判断不是管线漂移所致。需要强调的是附和接管率与附和后恢复是两种行为，前者是模型是否发出附和声，后者是用户附和后模型能否继续，训练后前者丢失而后者保留，不能混为一谈。

### 会话与语音代价：接管保住了什么，清晰度用什么换回

任务主动性不能以丢掉会话主动性为代价，论文用三项接管率与语音错误率同时检验。最终模型在用户说完接管、真实停顿少抢话、打断后接管三项上都优于基线，但在打断响应上从第二版到最终版有所回落，且 3 个训练后检查点在测试的 55 条附和项上都不产生自发附和，而打断后回答、中断后恢复等指标仍有提升，说明保留是分行为的，不是均匀保留。语音基准上最终模型平均分高于基线，但在部分子项仍低于未调工具的对照，训练资源集中于任务执行必然带来取舍。

投影器修复的机理用余弦对齐写出，思考器训练改变了传给发音器的条件，修复时冻结最终思考器，只训练投影器去逼近原始思考器经基础投影器得到的方向。

\[\mathcal{L}_{\mathrm{proj}}=\mathbb{E}_{j}\!\left[1-\cos(u_{j}^{\phi},u_{j}^{0})\right]+\lambda\lVert\phi-\phi_{0}\rVert_{2}^{2}.\]

该式表示对每个发音位置，计算修复后方向与目标方向的余弦距离再平均，加上权重偏离的平方惩罚。符号中 u 是归一化后的发音条件，上标零表示原始思考器经基础投影器的目标方向，上标表示最终思考器经可训练投影器的方向，正则系数锚定投影器参数不走远。余弦项把方向拉回，惩罚项防止过拟合。两千次同前缀重放显示，基础投影器下与原始条件的平均余弦约 0.93，修复后升至约 0.974。固定文本的二百二十一句选择集上，中文字符错与英文词错都下降，音色余弦略升，但因同一集合既选模型又报数，应视为选择集证据而非独立泛化估计。

附和丢失表明任务训练对会话行为的影响是选择性的，其他未测的韵律与打断风格也可能变化。打断后接管从第二版到最终版下降，以及附和行为完全消失，都说明多步执行奖励没有覆盖所有会话习惯。语音修复只动投影器，不动思考器与发音器主体，因此只能回调条件方向，不能恢复已经改变的文本策略，文本层面的会话风格仍需后续训练补齐。

### 边界与选型：何时值得尝试，复现第一步做什么

结论的成立条件需要一次收拢。任务提升成立于固定流式管线、相同模拟接口与冻结后端、3 个解码种子共 300 会话、3800000000 参数规模裁判的条件下，跨评测与跨裁判的商业数字只能作背景参考。发起上限的论证针对请求式委托且工具模式仅后端可见的配置，不是对所有委托范式的一般上限。两者都可见时几乎不委托的结论，成立于领域工具可见且单步延迟成本使委托不划算的条件下，换成仅后台可见能力时仍需委托。

模型与数据覆盖也是边界。工作基于单个 9000000000 参数全双工交互模型，训练语音为合成且说话人有限，工具是确定性模拟，请求是预录单轮，没有来自智能体回答与工具结果的后续追问。因此多轮状态维护、用户澄清后修订目标、真实噪声与口音泛化都尚未验证。

值得尝试的情形是前端已能流畅对话但任务发起弱，且领域工具模式可以开放给前端。复现第一步应先跑通流式管线与 300 会话评测，固定后端温度为零与最多六次调用，对齐思考器与投影器组合，再复现基线 4.7% 与最终委托 44.7% 的差距，确认调用覆盖率与条件成功率的分解方向正确。还需要补的验证包括换基座模型、更多真实口音与多轮追问下的多步维护，以及附和行为的恢复训练。训练资源、推理开销与事实答案延迟要分开记录，总体趋势不能推广到每一条请求。

工程选型上可以直接调用优先于委托。当工具可见时直接调用更快且参数错误更少，委托只留给多步依赖、条件分支或仅后台可见能力。部署时要保留信息充分性检查：必填缺失只问缺失项，可选缺失用默认，修正以最后一次为准，播报只依据已到观察，诚实报告部分完成比虚构更重要。这些规则在奖励里都有对应项，也是避免把相对变化误读为百分点提升的关键。

<details>
<summary>📎 论文与评分元数据</summary>

排名：前50% | 文档类型：方法研究 | [arXiv 原文](https://arxiv.org/abs/2611.25773v1)

</details>

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。

- 评分规则：type-aware-v1

- 评分模型：muse-spark-1.3-contributor

- 评分请求协议：openai_responses

---

[← 返回 2026-11-20 语音/音乐/音频论文速递](/audio-paper-digest-blog/posts/2026-11-20/)
