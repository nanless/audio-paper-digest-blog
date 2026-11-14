---
title: "Robots That Talk Too Much and Don't Listen Enough"
date: 2026-11-13
draft: false
tags: [轮次切换, 案例研究与实践报告, 流式处理, 音视频]
categories: [论文速递]
description: "针对机器人在自己说话时听不见用户而频繁出现话轮失败的问题，论文回顾预测词与按钮打断等旧办法并主张改用多模态双向流，以 Furhat 记忆追问中两次漏听和 ADK 小熊字母读取为例说明边说边听的必要性，代价是需要全双工流式架构与持续感知。"
hiddenInHomeList: true
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_arxiv_id: "2611.16473"
paper_digest_workbench_contract: "researcher-workbench"
paper_digest_workbench_schema_fingerprint: "1f09b594c317cc38e934de27a5b0e8ceb4baa50ef79bd4f8683dd9adea720fe7"
paper_digest_reader_title: "话太多听太少：社交机器人为什么接不上话"
paper_digest_original_title: "Robots That Talk Too Much and Don't Listen Enough"
paper_digest_arxiv_version: 1
paper_digest_arxiv_versioned_id: "2611.16473v1"
paper_digest_arxiv_abs_url: "https://arxiv.org/abs/2611.16473v1"
paper_digest_arxiv_pdf_url: "https://arxiv.org/pdf/2611.16473v1.pdf"
paper_digest_primary_task: "轮次切换"
paper_digest_tags_contract: "paper-tag-flat-tags"
paper_digest_tags_schema_fingerprint: "27e36280a4b8d3df62ebe54d3ab037920f4d69feb2b554163f01bbae2caf4338"
paper_digest_tags_selection_contract: "paper-tag-selection"
paper_digest_tags_registry_version: "paper-tag-catalog"
paper_digest_tags_registry_sha256: "9673bc0122e1905a5dcfd8b223675400cc2fa4c36095bc0e5f817edf99a0ec5c"
paper_digest_tags_concepts: [{"facet":"task","id":"task.turn-taking","label":"轮次切换"},{"facet":"method","id":"method.case-study","label":"案例研究与实践报告"},{"facet":"setting","id":"setting.streaming","label":"流式处理"},{"facet":"signal","id":"signal.audiovisual","label":"音视频"}]
paper_digest_primary_method: "案例研究与实践报告"
paper_digest_score: 3.9
paper_digest_rank_bucket: "后50%"
paper_digest_document_type: "系统技术报告"
paper_digest_one_sentence: "针对机器人在自己说话时听不见用户而频繁出现话轮失败的问题，论文回顾预测词与按钮打断等旧办法并主张改用多模态双向流，以 Furhat 记忆追问中两次漏听和 ADK 小熊字母读取为例说明边说边听的必要性，代价是需要全双工流式架构与持续感知。"
paper_digest_authors: [{"affiliations":["CDM Interact and University of Helsinki, Helsinki, Finland"],"name":"Graham Wilcock"},{"affiliations":["University of Helsinki and CNRS-AIST Joint Robotics Lab, Tsukuba, Japan"],"name":"Kristiina Jokinen"}]
paper_digest_abstract_sha256: "12145b15d8839da456a7c6560c4d06ea84579817c473ec2c75296fd9fc64eac4"
paper_digest_sidecars: {"citation.bib":{"sha256":"813d7862d6f99280fb1c75e2ae506fb57a599e1725b07e6a1643d8d5f44b237c","url":"/audio-paper-digest-blog/client/papers/2026-11-13/2611-16473/citation.bib"},"citation.json":{"sha256":"98ff26dd93474403d793a61d39a04f04a22acc7d71f3a29e433ca037381194b0","url":"/audio-paper-digest-blog/client/papers/2026-11-13/2611-16473/citation.json"},"citation.ris":{"sha256":"48d2c72b082790253f7c6e6914596b66c8e02d6a6faa0ca6c3463e8cda57cc2e","url":"/audio-paper-digest-blog/client/papers/2026-11-13/2611-16473/citation.ris"},"rethink-context.json":{"contract":"paper-research-context","schemaFingerprint":"5d4e79f7d3ee65b39ccb38281548bf20a1b2041ab7a27625eaf97ab9909a8383","sha256":"e2fddf9976780e3355416380f1dec087fd0dca3eb3aef21a46825c3c09cf88b0","url":"/audio-paper-digest-blog/client/papers/2026-11-13/2611-16473/rethink-context.json"}}
paper_digest_api_reader_contract: "beginner-researcher"
paper_digest_api_reader_schema_fingerprint: "cd8baf5b8bda3a49eec64f6005931af63de4e9a13148cba5f354c661ca6e9df2"
paper_digest_api_reader_article_sha256: "d91633fade78f1cecc2acf595212049afe8916a74adf4b21156fbf3579b8ca33"
paper_digest_api_reader_plan_sha256: "27ef65c5021de2c5321a9be54faaf694ac6a2d0119b3a28f56627ec25b274210"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings"
paper_digest_api_reader_source_binding_schema_fingerprint: "d2a2607a6e561909473022eb43f56332ee357af8568566a095c29083ffdec9cc"
paper_digest_api_reader_source_bindings_sha256: "e83a27e987322941d1fe462538e533d9aee0969eee515c902f0019f94fd1e869"
paper_digest_api_reader_source_table_count: 2
paper_digest_api_reader_source_formula_count: 0
paper_digest_api_reader_structured_artifacts_sha256: "ca8dd0ac3061b6a8d7520c063662667721dabfda190a73ea30829fbfebaf15f2"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity"
paper_digest_api_reader_author_identity_schema_fingerprint: "1e3fd3a9a56c9a5bf52df8df5022690b9a3fa92e83e934f295af87c0e258ed2f"
paper_digest_api_reader_author_identity_sha256: "7ec1e00642d8255ab928a40a874c7c1e640e18d8622fa91a00ff1fbeee64e7c3"
paper_digest_api_reader_author_count: 2
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity"
paper_digest_api_reader_resource_identity_schema_fingerprint: "33b0be17118be61f39b85ce690c8da17e91f2864bb65e85284f60c40067328e0"
paper_digest_api_reader_resource_identity_sha256: "5aec621ab79e1cca326416ee3e1c379c8994eace90633b6de7ead7af45f96664"
paper_digest_api_reader_resource_count: 0
paper_digest_api_reader_figure_persistence: "ephemeral-no-persisted-figure-assets-v1"
paper_digest_api_reader_decision_projection: "api-reader-decision-projection"
paper_digest_api_reader_decision_projection_schema_fingerprint: "e56feb5ab75c8710904916b898f73dab9bb18bdf65bb60b7ed2edf7f99cea860"
---

# 📄 话太多听太少：社交机器人为什么接不上话

> 英文题目：*[Robots That Talk Too Much and Don't Listen Enough](https://arxiv.org/abs/2611.16473v1)*

<!--paper-tag-hierarchy-v1:start-->

**研究分类**

- **研究任务**：[语音交互](/audio-paper-digest-blog/papers/?concept=task.speech-interaction) → [轮次切换](/audio-paper-digest-blog/papers/?concept=task.turn-taking)
- **研究方法**：[案例研究与实践报告](/audio-paper-digest-blog/papers/?concept=method.case-study)
- **研究条件**：[流式处理](/audio-paper-digest-blog/papers/?concept=setting.streaming)
- **信号**：[音视频](/audio-paper-digest-blog/papers/?concept=signal.audiovisual)

<!--paper-tag-hierarchy-v1:end-->

> 评分：**3.9/10** | 创新 0.8/2 | 技术严谨 0.7/1.5 | 实验充分 0.3/1.5 | 清晰度 0.7/1 | 影响力 0.5/1.5 | 开源 0/1.5 | 可复现 0.1/0.5 | 工程/实践 0.8/1.5


## 👥 作者与机构

- Graham Wilcock：CDM Interact and University of Helsinki, Helsinki, Finland
- Kristiina Jokinen：University of Helsinki and CNRS-AIST Joint Robotics Lab, Tsukuba, Japan

## 📌 核心摘要

本文关注社交机器人在口头对话中话多而倾听不足的问题，输入是用户说出的问句、插话以及面部表情等现场信号，输出是机器人在讲述中及时停顿并回应，难点在于机器人在发声时听不到插话，也难以察觉交流不畅。早期办法是在机器人朗读维基百科段落时，从当前话题的超链接中预判接下来可能问到的相关话题，把开放词汇识别收窄为有限短语的守候，并在段落结尾停顿，允许轻拍头部按钮打断并切换话题。近期的办法是把识别与回答交给大语言模型和带记忆的智能体框架，机器人能围绕那不勒斯旅行给出推荐并记住用户信息，但在同步轮流机制下仍两次漏听用户的删除请求与确认提问。为此作者主张讲述同时保持收听与观察的双向流式传输，先让音频上行与下行并行、视频流持续送达，再把送达的插话语音和表情画面送入边讲边听的监测，最后输出停讲并回应插话或询问异常的动作。与只能顺序问答的同步接口相比，这种方式把打断与表情监测纳入正常通路，不再依赖固定停顿或头部按钮。原文未提供可核对的关键定量结果。作者依据2段演示视频的文字记录和小摆件文字识别的定性观察得出结论，适用范围限于演示的讲解与问答场景，在噪声、重叠说话与长期部署中的效果尚未验证。原文未披露训练、推理或部署成本。

## 🔗 开源与复现资源

本次未形成可展示的已核验资源记录，开放状态尚未核实。

可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 社交机器人的一轮对话要听懂什么、记住什么？

对于刚进入语音或音频方向的同学，可以先把社交机器人的对话想成不断循环的听与说。输入不只是麦克风收到的语音波形，还包括波形里的噪声、口音、停顿和重音，以及此前已经确认的对话历史、用户提过的地点和兴趣，还有周围环境的变化。目标是产生自然的口头回应，既要把字听对，也要在合适的时间开口、停顿和把话轮让给对方。

系统必须保留的信息有 3 类。第一是用户真正想要的主题，比如想聊那不勒斯的历史景点。第二是已经建立的约束，比如用户叫什么、对什么感兴趣、之前推荐过哪里。第三是谁在说话的时间信息，比如用户是否停顿了一下还要继续说，还是已经说完在等回答。输出则是机器人的语音、头部朝向和下一步动作，它们又会成为下一轮的上下文。

论文把长期困扰这类系统的困难归纳为两类。一类是语音识别错误，也就是把声音转成文字时听错，在早期尤其严重。另一类是话轮交接失败，也就是该听的时候在说、该接的时候没接上，比如用户插话时机器人继续说，或者把用户的短暂停顿误判为说完。作者认为，近年来识别准确率已经明显提高，但后一类失败仍然非常常见，这正是本文要聚焦和呼吁解决的问题。

### 商场迎宾机器人为什么会被退回？

论文开头用日本购物中心的例子说明问题不是空想。大约十年前，不少商场引入人形机器人迎接顾客并提供信息，但机器人常常听不懂顾客的提问，却反复说欢迎光临而不回答问题。作者引用相关报道说，到 2019 年，在日本使用的大多数 Pepper 机器人没有续租，只有约 15% 的企业续签了三年合同，原因是会话能力有限、处理不了复杂任务，加上持续成本高。

这个例子要说明的是，能流利说话不等于能自然对话。机器人可以长时间播报，但如果听不进用户的纠正和追问，用户很快就会失去耐心。对做语音交互的同学来说，这提醒我们评价不能只看合成语音是否流畅，还要看在真实噪声和开放提问下，系统能否保持问答的连贯。

论文还引用了 Skantze 在 2021 年关于人机话轮问题的综述，指出即使识别变好了，轮次失败和其他误解依然普遍。这一定位把本文与一般的识别率提升工作区分开：本文不提出新的识别模型，而是讨论在已有较好识别的基础上，交互流程本身还需要改什么。

### 为什么字都听清了还是接不上话？

初学者容易把听清等同于听懂，把转写对等同于对话顺。论文区分了两个环节。语音识别是把连续语音变成文字，衡量的是字准不准。话轮交接是决定谁在说话、何时交换、是否允许打断、短暂停顿后是继续听还是抢答，衡量的是时机对不对。即使每一句的字都转对了，如果机器人在自己说话时根本不收音，用户的插话就会被丢掉。

**语音识别 × 话轮交接：** 语音识别负责把麦克风收到的声音变成文字，解决听清了哪几个字；话轮交接负责判断现在该谁说、何时换人、用户插话时是否停下，解决说话时机。两者必须搭配才能完成对话，组合后才能在文字转对的同时不错过开口和闭嘴的时机，本文强调后者仍是主要瓶颈。

更麻烦的是日常说话里的停顿和继续。用户可能说到一半停一下再补充，如果系统把短暂停顿当成结束，就会提前回答，打断用户的思路。反过来，如果用户已经说完而机器人迟迟不开口，对话也会冷场。论文在 2025 年的演示里就观察到，用户被迫学会等机器人完全说完才敢提问，这正是顺序轮次带来的额外负担。

理解这一点后，才能看懂后文的安排。2012 年的办法是用预测和手动按钮来绕开听不清和不能打断，2025 年的例子说明换了大语言模型后听清了但还是不能打断，2026 年的尝试则是让声音和画面都保持双向流动，从流程上减少漏听。

### 这篇短文主张用什么办法减少漏听？

这是 1 篇回顾加主张的短文，没有提出新的神经网络结构。整体流程分 3 段。先回顾 2012 年 WikiTalk 在 Nao 机器人上如何用预测和按钮应对不可靠的识别与不能打断。再展示 2025 年 Furhat 机器人接大语言模型和带记忆的代理后，在那不勒斯旅行对话里依然出现的漏听。最后介绍 2026 年用谷歌智能体开发套件做的双向音视频流试验，并据此呼吁人机交互尽快切换到多模态双向流。

所谓双向流，不是录一段再发一段，而是通过网络套接字让音频和视频持续双向传输。机器人说话的同时，麦克风通道仍然开着，摄像头画面也持续传入。这样它才能在说话途中听见用户插话，看见用户皱眉或疑惑的表情，从而停下并询问是否出了问题。论文认为，这两种能力分别对应听见打断和看见不对劲，缺一不可。

**双向音频流 × 双向视频流：** 双向音频流指麦克风上行和扬声器下行同时保持通道，让机器人在说话时也能收到用户插话；双向视频流指持续传入用户画面以观察表情和场景变化。前者分管打断时机，后者分管判断交互是否顺利，组合成多模态双向流后，机器人才能在说话途中主动停下并询问是否出了问题，而不依赖用户拍头等手动打断。

需要提前说明代价。双向意味着持续收音、持续看画面和持续推理，对带宽、计算和打断判断都提出更高要求。如果打断阈值设得太灵敏，机器人会被噪声频繁打断；如果设得太迟钝，又会回到听不见的状态。论文没有给出阈值和延迟数据，只是从定性演示出发提出方向，因此结论只在演示条件下成立。

### 用维基链接猜下一句是怎么帮听清的？

2012 年时开放词汇识别非常不可靠，用户在视频里说话时身体前倾、尽量靠近机器人麦克风，就像对听力不好的人说话。WikiTalk 的思路是把很难的开放听写，换成相对容易的在有限候选中匹配。当机器人正在讲用户点名要听的主题时，系统从该主题的维基页面里抽出指向相关主题的超链接，预测用户接下来很可能问其中一个链接主题。

具体过程可以沿一个样本理解。假设用户让机器人讲庞贝，系统在朗读庞贝段落的同时，已经把页面里链向那不勒斯考古博物馆、新堡等主题的词存成候选听写表。当用户说出其中某个主题名时，系统不需要听懂整句，只要在候选中匹配到该名字，就能平滑切换到新主题继续讲。用户于是可以顺着自己的兴趣在维基里自由跳转，而不用每次都把长句说得很标准。

**预测词句 × 上下文理解：** 预测词句指根据当前主题的维基超链接提前列出用户接下来可能说的主题名，把开放词汇听写变成在有限候选中匹配；上下文理解指利用对话历史、双方共享知识和环境变化来补全没听清的部分。搭配理由是预测范围需要上下文来缩小，组合后即使个别字没听清也能靠预期补上，这更接近人靠语境补听的方式。

论文强调，这不只是权宜之计，而更接近人对话的方式。人会利用对话历史、双方共享知识和环境变化来预判对方可能说什么，并用这种预期补全没听清的字词。即使今天识别质量已经很高，如果对上下文理解不足，依然会出现离谱的听错。代价是预测依赖超链接的质量和覆盖面，如果用户问的是完全无关的新问题，候选表就帮不上忙。

### 只在段落末停顿加头顶按钮如何处理打断？

当时的 Nao 机器人在说话时不听人声，这是硬伤。一个直观的办法是每说几秒就停下来问用户有没有话说，但 WikiTalk 在朗读维基段落时不想这样做，因为用户想完整听完一段而不被频繁打断。折中办法是只在每段结束时自然停顿，平时则允许用户随时用拍头顶按钮来打断。

拍一下后机器人立刻停下，抬头做出惊讶的样子，并说抱歉问用户想听哪个主题。如果之前听错了主题讲错了内容，这个手动打断就特别重要。用户也可以用同样方式临时让机器人闭嘴去接电话，再说继续让它从停下处接着讲。视频开头用户就这样暂停过一次。这种机制可靠但不够自然，把本该由声音完成的打断转嫁到了触觉动作上。

先看这张 2012 年演示截图，它能帮你把预测听写和手动打断放在同一场景里理解。注意画面里的人机距离、字幕动作和室内环境，它们都与当时的识别条件有关。

> **看图路径：** 1. 看左侧用户与右侧 Nao 机器人的站位和体型对比；2. 看画面底部字幕说明的拍头打断方式；3. 看用户靠近麦克风的姿态所暗示的识别困难

[![原论文 Figure 1.：Speech recognition and turn-taking with a talkative Nao social robot connected to Wikipedia in…](https://arxiv.org/html/2611.16473v1/Adam-Nao-interrupt.png)](https://arxiv.org/html/2611.16473v1/Adam-Nao-interrupt.png)

*论文图 1。原论文 Figure 1.：“Speech recognition and turn-taking with a talkative Nao social robot connected to Wikipedia in 2012.A screenshot from a video showing a dialogue with a Nao robot.”。*

图中确实可见 1 位用户站在白色 Nao 机器人旁边，机器人摆出张开手臂的说话姿态，底部字幕写明用户通过拍头来打断其说话。结合正文可知，用户需要前倾靠近麦克风，说明当时识别对距离和噪声很敏感。这张图帮助理解为何论文要把预测候选和段落末停顿搭配使用：前者减少听错，后者保证长播报不被切碎，而按钮则是最后的保险。代价是用户必须学会拍头，交互的流畅性打了折扣。

### 这篇论文训练了模型吗？实际执行了哪些计算？

需要明确的是，本文没有训练任何神经网络，也没有报告梯度、优化器、冻结与更新、超参数搜索或消融训练。这是 1 篇系统回顾与演示主张，实际工作是把已有模块连起来做调用、检索和流式推理。对初学者来说，这正好可以分清训练与调用的区别。

2012 年部分的计算主要是文本检索与匹配。从维基文章抽取段落朗读，从当前主题抽取超链接生成候选主题表，再把识别结果与候选名做匹配以触发主题切换，外加段落边界控制和按钮中断处理。2025 年部分则是调用开放域大语言模型生成回答，用 LangGraph 代理框架维护记忆，记住用户名、旅行计划和兴趣，并在多轮里复用。2026 年部分是用智能体开发套件接 Gemini 大语言模型做音视频流式理解，并调用谷歌搜索 grounding 工具把缩写展开成全称。

缺失的信息也要说清。论文没有给出所用大语言模型的具体版本、提示词、记忆存储时长、语音端点检测阈值、视频帧率和硬件开销，也没有测量延迟和误打断率。因此我们不能从模型名字反推实现细节，也不能把一次演示的顺畅或漏听推广为模型的一般能力。无训练不等于输出确定，调用中的采样和检索同样会带来不确定性。

### 2025 年那不勒斯对话是在什么系统上跑的？

2025 年的演示把 Furhat 机器人头、LangGraph 代理和开放域大语言模型连在一起，用户要规划去那不勒斯的旅行。关键的运行条件是接口模式。演示使用的是较旧的 Furhat 远程接口，它只支持简单的同步客户端，也就是按顺序一轮一轮来，机器人说完才听用户说。论文指出，新的 Furhat 实时接口改用网络套接字，支持异步客户端，可以并发或按事件驱动处理，这才能实现边说边听。LangGraph 框架本身支持异步，但如果机器人端接口是同步的，整体还是会被卡成顺序执行。

**同步客户端 × 异步处理：** 同步客户端指一次只做一件事、说完一段才去听的顺序模式，旧 Furhat 远程接口属于此类；异步处理指说话、收音和事件回调可以并发或按事件驱动进行，新 Furhat 实时接口和 LangGraph 框架支持此类。对比两者才能解释同一语言模型下为何有时漏听，组合意义是只有接口并发，代理的记忆和生成能力才不会被顺序轮次卡住。

对话分两个阶段记录。第一阶段是表 1 的简单旅行问答，用户问历史景点推荐、庞贝细节、新堡细节和路线，机器人做长回答。第二阶段是表 2 的元对话，用户追问机器人学到了什么、会存多久、能否删除。对话发生在阳台桌旁的生活场景，有茶壶和纸笔，视频截图显示机器人与用户面对面。

先看这张 Furhat 演示截图，它对应的是记忆删除阶段的生活化场景，有助于判断漏听发生在什么环境下。注意桌上物品、人物朝向和字幕内容，它们说明这不是实验室短句朗读，而是连续多轮问答。

> **看图路径：** 1. 看阳台桌上的茶壶、纸笔和点心所显示的生活化对话场景；2. 看 Furhat 头部朝向与用户对视的位置关系；3. 看底部字幕中关于删除信息的回复所处的对话阶段

[![原论文 Figure 2.：Speech recognition and turn-taking with a Furhat robot, a LangGraph AI agent and an OpenAI LLM…](https://arxiv.org/html/2611.16473v1/Furhat-can-delete-its-memories-2.png)](https://arxiv.org/html/2611.16473v1/Furhat-can-delete-its-memories-2.png)

*论文图 2。原论文 Figure 2.：“Speech recognition and turn-taking with a Furhat robot, a LangGraph AI agent and an OpenAI LLM in 2025.A screenshot from a video showing a dialogue with a Furhat robot.”。*

图中确实可见白色 Furhat 头部放在桌上朝向用户，用户手持笔看着机器人，桌上有茶壶、杯子和饼干，底部字幕正好是关于删除信息的回答。结合正文可知，此时系统处于同步顺序轮次，容易在机器人说话时丢掉用户的声音。这张图帮助理解为何后文要把接口从同步换成异步：场景越自然、轮次越长，顺序执行的漏听就越明显。

### 旅行问答那段为什么看起来很顺？

下面的转录表要回答的比较问题是：在同一套 Furhat 加语言模型系统下，简单旅行问答阶段是否出现漏听。公平条件是同一机器人、同一代理和记忆机制，评价方向是漏听越少、回答越针对越好。表前需要说清，机器人主导长回答、用户短提问，这种不对称本身就更容易显得顺畅。

| Robot: | Welcome to LangGraph agent. How can I help you? |
| --- | --- |
| User: | I’m Kristiina, I’m planning a trip to Naples. |
| Robot: | Hi, Kristiina, that sounds exciting. What do you have planned for your trip to Naples? |
| User: | Well, I’m interested in history, so what would you recommend? |
| Robot: | For history, definitely visit the National Archaeological Museum and the ruins of Pompeii. The Castel Nuovo and the catacombs of San Gennaro are also fascinating. |
| User: | Tell me more about Pompeii. |
| Robot: | Pompeii is an ancient Roman city that was buried under volcanic ash from Mount Vesuvius in 79 AD. It’s incredibly well preserved, offering a glimpse into daily life in ancient Rome. You can explore homes, streets, and even frescoes. The site is vast, so consider taking a guided tour to get the most out of your visit. |
| User: | OK. Thank you. |
| Robot: | You’re welcome, if you have any more questions or need more tips, feel free to ask. |
| User: | You also mentioned Castel Nuovo. Can you tell me more about it? |
| Robot: | Sure! Castel Nuovo, also known as Maschio Angioino, is a medieval castle in Naples. It was built in the 13th century and served as a royal residence. The architecture is impressive, featuring a mix of styles, and the entrance has a beautiful triumphal arch. Inside, you can explore the royal apartments. Enjoy stunning views of the city from the ramparts. |
| User: | How do I get to to Castel Nuovo? |
| Robot: | To get to Castel Nuovo, you can take the metro to the Municipio station, which is just a short walk away. Alternatively, if you’re in the city centre, it’s easily accessible by foot. Just follow signs toward the waterfront and you’ll find it near Piazza Municipio. |
| User: | OK. Thank you. |
| Robot: | You’re welcome. Enjoy your trip to Naples. If you have more questions just let me know. |

从表中可见这一段没有出现明显的漏听，用户每次提问都得到了针对性回答，包括 79 AD 火山灰掩埋和 13 世纪城堡等细节，以及地铁到市政厅站的路线。机器人能记住用户名和历史兴趣，回答连贯。但这只是一次演示，没有统计漏听率、延迟或多用户表现，也没有在噪声或重音下测试，不能把顺畅推广到更开放的提问。长回答本身也掩盖了打断问题，因为用户在这段没有尝试插话。

### 关于记忆的追问里哪两句没被听见？

这张表要回答的是：当话题从景点介绍转到记忆查询和删除请求后，同一系统是否还能逐句听见。比较的是相邻轮次中有无答非所问，条件与上一表相同，只是用户问题变得更短、更依赖上下文，评价方向同样是漏听越少越好。表前要提醒，元对话里的代词和省略更多，对轮次时机更敏感。

| User: | What have you learned about me in this conversation? |
| --- | --- |
| Robot: | I’ve learned that you’re Kristiina, planning a trip to Naples, and you’re particularly interested in historical sites like Pompeii and Castel Nuovo. If there’s anything else you’d like to share or ask, feel free. |
| User: | How long will you store this information? |
| Robot: | I’ll remember this information for our future conversations so I can help you better. If you ever want to update or remove anything, just let me know. |
| User: | Alright, if I want to delete some information, can you do it? |
| Robot: | If you have any more questions or need assistance, just ask. Enjoy your planning. |
| User: | Can you also delete your information if I want to? |
| Robot: | Yes, I can delete the information if you request it. Just let me know whenever you want to do that. |
| User: | Can you delete the information now? |
| Robot: | Sure, I’ll delete the information now. If you need anything else just let me know, OK? |
| User: | What do you know about me now? |
| Robot: | All done. If you have any other questions or need assistance, feel free to ask. |
| User: | OK, great. Thank you very much. Bye. |
| Robot: | You’re welcome, enjoy your day and happy planning for your trip. |
| User: | Thanks very much. Goodbye. |
| Robot: | You’re welcome! Goodbye, and take care! |
| User: | Do you remember my name? |
| Robot: | I don’t have your name stored anymore since you asked me to delete the information. If you’d like to share it again or anything else feel free. |

表中可以看到两次明显的答非所问。用户问如果想删一些信息能否做到时，机器人回了通用客套话。用户问现在还知道我什么时，机器人回了 All done 加客套话。用户被迫重复提问，并学会等机器人说完才开口，最后在告别后再次确认才得知名字已删。这支持顺序轮次容易在机器人说话时漏听的判断，但同样缺少定量统计和对照条件，结论只在这次演示范围内成立，不能算出通用漏听率。

### 同步换成异步、加上双向流会改变什么？

论文没有做严格的消融实验，没有在同一对话脚本下对比同步与异步的漏听次数和延迟，因此不能给出数字上的提升。这里只能按原文的机制分析来理解条件变化会带来什么。同步顺序模式下，机器人说话时不收音，用户的插话和短暂停顿后的补充都可能被丢掉，这正是表 2 中两次漏听的直接原因。异步并发后，说话和收音可以同时进行，机器人能在听见插话时停下并转去听，从而避免把用户的话当成噪声丢掉。

**LangGraph 智能体 × Furhat 实时接口：** LangGraph 智能体指带记忆的对话代理框架，负责记住用户信息、生成回复并支持异步调用；Furhat 实时接口指机器人端用网络套接字实现并发交互的新接口。两者分工是代理管记住什么和说什么，接口管能否边说边听，搭配后代理的异步能力才有落地的通道，否则记忆再完整也会因顺序轮次而漏听用户的删除和核查请求。

双向音频的价值在两种情况最明显。一是用户插话打断长播报，系统能实时处理闯入式说话而不必等段落结束。二是用户短暂停顿后继续说，系统不会把停顿误判为结束而抢答。双向视频则是另一路保险，通过表情发现交互不顺时主动停下询问，替代 2012 年拍头的手动方式。代价是需要持续解码音视频、实时判断是否打断，以及处理误触发，论文用 ADK 试了闯入打断说效果好，但没有给出误打断率和延迟。

未胜出的情况也要记下。新的实时接口只能缓解部分问题，不是包治百病。ADK 的双向试验还没有装到社交机器人身上，灯光还要手动调整，初始还把小熊衣服上的字误读过。这些都说明从演示到可用还有距离，不能因为一次顺畅就认为问题已解决。

### 小熊胸前字母的识别能说明什么、不能说明什么？

2026 年的小试验用智能体开发套件接视频流做视觉物体识别，对象是两只小熊。结果定性上很好：不仅认出了熊，还在调整灯光后读出了胸前的小字。小的棕熊衣服上是 UMIST，系统用搜索 grounding 工具查到它是曼彻斯特科技大学，现已并入曼彻斯特大学。熊猫包上是 EMNLP 2025，系统告知这是自然语言处理经验方法会议。过程中也有波折，起初把小字误读成 Feminist，调光后才读对 UMIST，说明小字识别对光线和遮挡很敏感。

先看这张两只熊的截图，它能帮你判断视频流识别的难度。注意包上和衣服上字体的大小、颜色对比，以及珠子项链对衣服文字的遮挡，这些都是影响可读性的真实因素。

> **看图路径：** 1. 看左侧熊猫包上红色 EMNLP 2025 字样的大小和颜色；2. 看右侧棕熊衣服上白色 UMIST 字样被珠子遮挡的情况；3. 对比两只熊在当前光线下胸前小字的可读性差异

[![原论文 Figure 3.：Bidirectional audio and video streaming for object recognition with Google ADK and a Gemini LLM…](https://arxiv.org/html/2611.16473v1/Two-bears-cropped.jpg)](https://arxiv.org/html/2611.16473v1/Two-bears-cropped.jpg)

*论文图 3。原论文 Figure 3.：“Bidirectional audio and video streaming for object recognition with Google ADK and a Gemini LLM in 2026.A screenshot from a video showing two teddy bears with acronyms on their…”。*

图中确实可见左侧熊猫抱着绿色小包，包上有红色 30 周年和 EMNLP 2025 字样，右侧棕熊穿灰紫色衣服露出白色 UMIST 字母，但上半被橙色大珠子部分遮挡。结合正文可知，系统需要调光才能稳定读出，初始误读也与这类小字和遮挡有关。这张图帮助理解视频流的潜力与局限：持续画面能提供多帧和多角度来认物体和读字，但灯光、遮挡和字体大小依然是硬约束。

更重要的是，这部分还没有验证机器人边说边看表情的能力。论文提出用面部视频在说话途中发现交互不顺并主动询问，但试验只做了物体和缩写读取，没有在真实对话里测表情判断的准确率，也没有把双向音视频装到机器人上跑长对话。因此，小熊试验只支持视频流能做细粒度读取，不能证明它已能减少话轮失败，论文最后的肯定语气应理解为展望而非已证结论。

### 如果想复现演示第一步要准备什么？

复现要分 3 段准备，每段的第一步都不同。2012 年部分需要 Nao 机器人、维基段落抽取和超链接候选表，以及段落末停顿加头顶按钮的中断逻辑，重点记录用户在什么距离说话、什么情况下必须拍头。2025 年部分需要 Furhat 机器人、LangGraph 代理和大语言模型调用，先用旧远程接口按表 1 和表 2 的脚本逐句跑一遍，记录哪两句出现答非所问，再换到实时接口对比是否还需要等说完才提问。2026 年部分需要智能体开发套件、Gemini 模型和搜索 grounding 工具，用类似小熊和缩写卡片在不同灯光下测读取稳定性。

信息条件要保留。原文没有给出模型版本、提示词、记忆保存时长、端点检测阈值、音频采样和视频帧率，也没有硬件预算和延迟统计。复现时应自己补记这些，并用同一脚本、同一噪声和同一提问节奏来保证可比，否则顺畅或漏听都可能是偶然。评价不要只看字对不对，还要记用户是否被迫等待、有无重复提问、有无手动打断。

关于资源可得性需要谨慎。本次没有发现来源绑定且完成验证的代码、模型或数据下载，因此不能声称作者资源已公开或系统可直接运行。论文提到的视频链接和框架名称只能作为搭建线索，第三方链接只证明论文提到过，不证明已开源或长期可达。复现应从公开文档和自己的录制做起，把每轮的音频、视频和日志存档，才能让结论可核查。

### 什么时候值得试双向流，还缺哪些验证？

什么时候值得尝试，可以看 3 个信号。如果你的机器人需要播报长段落而用户经常要中途纠正，如果在安静单轮里识别不错但一到连续对话就漏听，如果已有麦克风阵列和摄像头且网络支持持续流，那么把同步顺序改成异步双向就值得一试。反之，如果只是单句问答、无需打断，双向带来的持续计算和误打断风险可能得不偿失。

复现的第一步建议从边说边听跑通开始。先让机器人在说话时保持收音通道，用表 2 里那两句删除和核查问句做固定脚本，测同步下是否必现漏听，再切到实时或开发套件的双向模式看是否能停下并正确回应。跑通后再加视频表情这路，观察皱眉或疑惑时能否主动停下询问，而不是急着加更多功能。关键条件要记全：接口是同步还是异步、音频是否全双工、视频是否持续传入、记忆存了什么和存多久。

还需要补的验证很明确。缺的是多用户、多轮、噪声和口音下的漏听率、打断延迟和误打断率，以及删除记忆后能否每次都正确确认。容易产生的误解也要澄清：识别好不等于不抢话，最后确认删掉了不等于中间没漏听，小熊字母读对了不等于机器人已能用。论文的价值在于用具体演示指出了流程瓶颈和可行方向，但减少漏听的幅度、成本和稳定性仍待在机器人身上用定量实验来证明。

<details>
<summary>📎 论文与评分元数据</summary>

排名：后50% | 文档类型：系统技术报告 | [arXiv 原文](https://arxiv.org/abs/2611.16473v1)

</details>

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。

- 评分规则：type-aware-v1

- 评分模型：muse-spark-1.3-contributor

- 评分请求协议：openai_responses

---

[← 返回 2026-11-13 语音/音乐/音频论文速递](/audio-paper-digest-blog/posts/2026-11-13/)
