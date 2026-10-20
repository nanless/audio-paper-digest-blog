---
title: "TOMORI: A Tool-Orchestrated Mixing Operator for REAPER Interaction"
date: 2026-10-20
draft: false
tags: [音乐混音, 工具增强与约束解码, 基准测试, 音乐]
categories: [论文速递]
description: "论文解决自然语言混音请求缺少具体操作参数的问题，用可执行 Lua 代码连接语言模型与 REAPER 工程，并以 110 组人工审核参考编辑证明越具体的指令执行越准、越抽象的听感描述偏差越大，而多轮检查修订与强制音频测量带来不同代价。"
hiddenInHomeList: true
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_arxiv_id: "2610.25344"
paper_digest_workbench_contract: "researcher-workbench-v1"
paper_digest_reader_title: "Tomori：在 REAPER 里写代码做混音的智能体如何被评测"
paper_digest_original_title: "TOMORI: A Tool-Orchestrated Mixing Operator for REAPER Interaction"
paper_digest_arxiv_version: 1
paper_digest_arxiv_versioned_id: "2610.25344v1"
paper_digest_arxiv_abs_url: "https://arxiv.org/abs/2610.25344v1"
paper_digest_arxiv_pdf_url: "https://arxiv.org/pdf/2610.25344v1.pdf"
paper_digest_primary_task: "音乐混音"
paper_digest_tags_contract: "paper-tag-flat-tags-v2"
paper_digest_tags_selection_contract: "paper-tag-selection-v2"
paper_digest_tags_registry_version: "paper-tag-catalog-v2"
paper_digest_tags_registry_sha256: "cdef54423b5dfc00a1d017ef6639446d2ecd1d9c1acf71c8eb4f6219a46b7ba8"
paper_digest_tags_concepts: [{"facet":"task","id":"task.music-mixing","label":"音乐混音"},{"facet":"method","id":"method.tool-augmentation","label":"工具增强与约束解码"},{"facet":"artifact","id":"artifact.benchmark","label":"基准测试"},{"facet":"signal","id":"signal.music","label":"音乐"}]
paper_digest_primary_method: "工具增强与约束解码"
paper_digest_score: 6.5
paper_digest_rank_bucket: "前50%"
paper_digest_document_type: "数据集与基准"
paper_digest_one_sentence: "论文解决自然语言混音请求缺少具体操作参数的问题，用可执行 Lua 代码连接语言模型与 REAPER 工程，并以 110 组人工审核参考编辑证明越具体的指令执行越准、越抽象的听感描述偏差越大，而多轮检查修订与强制音频测量带来不同代价。"
paper_digest_authors: [{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Yining Wang"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Tianjiao Li"}]
paper_digest_abstract_sha256: "584d43f59b1d90702c9628ced27ee0daf6d40b5bfb77a89044e680998dbb30f0"
paper_digest_sidecars: {"citation.bib":{"sha256":"c025188c8e14bd05cebabdda4d386e92636f4c4a5095d7f502ace52d8d320dbf","url":"/audio-paper-digest-blog/data/papers/2026-10-20/2610-25344/citation.bib"},"citation.json":{"sha256":"d5df92ab5b19a209005a30eb02e28b47be8c8b50c37bab0f7e9eaec610214f2e","url":"/audio-paper-digest-blog/data/papers/2026-10-20/2610-25344/citation.json"},"citation.ris":{"sha256":"7b45f11192d7f86e776e2837f89dc4eb33c6dc543a872714e7dff772683d8ab9","url":"/audio-paper-digest-blog/data/papers/2026-10-20/2610-25344/citation.ris"},"rethink-context.json":{"contract":"paper-research-context-v2","sha256":"4f675599924c5cca2347800bd152e9c4542da068196e4f05f9a7ab681089cc35","url":"/audio-paper-digest-blog/data/papers/2026-10-20/2610-25344/rethink-context.json"}}
paper_digest_api_reader_contract: "beginner-researcher-v3"
paper_digest_api_reader_article_sha256: "e016e3eb1c8a5ef8d06e32293e666695875dce78e30f727003911947ad5ab792"
paper_digest_api_reader_plan_sha256: "e130fc5f646d4737e2d30e9957bd8848d6824d116aef5f3c3e22d8fcaf305340"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings-v4"
paper_digest_api_reader_source_bindings_sha256: "881855e7e88243b75049f762920a6e3c8ba273b16d80f2c3a26abf62bde7c66a"
paper_digest_api_reader_source_table_count: 4
paper_digest_api_reader_source_formula_count: 4
paper_digest_api_reader_structured_artifacts_sha256: "c8c7d5b8561d1287f3acd73805cf58e9815174ae7f4e2318f806de11bf1b5563"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity-v1"
paper_digest_api_reader_author_identity_sha256: "2cb4b9aaece7526f5775ade5da42181b18fbcef64960e5ddee5ff2ee01594f1e"
paper_digest_api_reader_author_count: 2
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity-v1"
paper_digest_api_reader_resource_identity_sha256: "72f8192e0bde5a1b01c236418ab6dacd79ee12ff4c96ea5ca07befef8586de23"
paper_digest_api_reader_resource_count: 0
paper_digest_api_reader_figure_persistence: "ephemeral-no-persisted-figure-assets-v1"
paper_digest_api_reader_decision_projection: "api-reader-decision-projection-v2"
---

# 📄 Tomori：在 REAPER 里写代码做混音的智能体如何被评测

> 英文题目：*[TOMORI: A Tool-Orchestrated Mixing Operator for REAPER Interaction](https://arxiv.org/abs/2610.25344v1)*

<!--paper-tag-hierarchy-v1:start-->

**研究分类**

- **研究任务**：[音频编辑](/audio-paper-digest-blog/papers/?concept=task.audio-editing) → [音乐后期制作](/audio-paper-digest-blog/papers/?concept=task.music-post-production) → [音乐混音](/audio-paper-digest-blog/papers/?concept=task.music-mixing)
- **研究方法**：[工具增强与约束解码](/audio-paper-digest-blog/papers/?concept=method.tool-augmentation)
- **信号**：[音乐](/audio-paper-digest-blog/papers/?concept=signal.music)
- **研究产物**：[基准测试](/audio-paper-digest-blog/papers/?concept=artifact.benchmark)

<!--paper-tag-hierarchy-v1:end-->

> 评分：**6.5/10** | 创新 1.2/2 | 技术严谨 1/1.5 | 实验充分 1.2/1.5 | 清晰度 0.8/1 | 影响力 1/1.5 | 开源 0/1.5 | 可复现 0.3/0.5 | 工程/实践 1/1.5


## 👥 作者与机构

- Yining Wang：机构信息未能在本次解析中与作者逐人可靠绑定
- Tianjiao Li：机构信息未能在本次解析中与作者逐人可靠绑定

## 📌 核心摘要

混音任务的输入是混音前REAPER工程与一句自然语言请求，输出是可编辑工程与渲染音频，难点是抽象请求只描述想要的声音而不指明操作对象与参数。Tomori先用检查插件把轨道、路由、效果链和参数读成文本交给语言模型，使其获得可操作状态。模型可调用测量程序获得频带能量等文本数值，再生成Lua代码执行插入效果、调参、改路由或自动化，并根据执行状态与工程回读决定是否继续修改，形成检查与测量输入、代码编辑输出、回读再决策的循环。Tomori-Bench把110个人工审核的参考编辑各配成IF0数值增量、IF1近似方向、IF2听感描述三种指令，用Graph F1与参数误差度量工程变化，用渲染音频与参考的接近程度度量声音变化。在三模型共990例的主评测中，deepseek-v4-pro的Error reduction（MR-STFT误差去除率）从IF0的85.3%降至IF2的32.0%，Graph F1从1.0000降至0.7726，显示可执行控制与实现听感目标存在差距。同例消融中完整工作流比单次提交在IF0上将参数匹配率从72.1%提升至97.7%、Error reduction从61.3%提升至85.4%，而28例强制测量虽全部成功执行却无明确总体提升且平均工具调用从11.0增至18.9。上述结论仅适用于所覆盖的均衡、增益等110步任务的最终有效交付，抽象指令下易出现额外加工与幅度偏离，子集比较不构成通用排名。原文未披露训练、推理或部署成本。

## 🔗 开源与复现资源

本次未形成可展示的已核验资源记录，开放状态尚未核实。

可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 混音请求难在哪里：只说想要的声音，不说怎么调

刚接触音频的研究生可以先把任务想成这样：输入是一个 REAPER 工程，里面有多轨音频、路由和已挂的效果器，以及一句自然语言请求；输出是改好的可编辑工程加一段渲染音频。必须保留的信息是原始音频素材和轨道身份，不能靠重新生成一段声音蒙混过关。

难点在于日常说法与执行之间缺了一层。例如把人声推出来，可能对应提升人声电平、压低伴奏，或处理掩蔽频段，不同做法声音接近但工程改动完全不同。论文要解决的正是这种从意图到具体对象、操作与参数值的映射，并要求改动真正发生在原生数字音频工作站里，而不是只输出一段处理后的波形。

为此作者搭建了 Tomori，一个基于代码的混音智能体框架。语言模型通过插件读取工程、按需测量音频、生成 Lua 代码执行改动，所有观察都以文本返回。交付后既能打开工程继续调，也能听渲染结果，这让后续评测可以同时检查工程结构和声音。

### 已有路线做了什么，本文补了哪一块

计算机操作智能体已经能在桌面和网页上执行动作，代码作为动作接口在 CodeAct、BrowserGym 和 Blender 场景搭建中都有使用。音频侧既有按指令变换声音的模型，也有编排专家模型的系统，还有把语言连到效果参数链的工作。

在 REAPER 控制上，DAWZY 关注状态感知且可逆的编辑及可靠性体验；RIME 用规则生成后期任务并评测编辑图、参数与最终音频。Tomori-Bench 的不同在于坚持原生执行：模型生成的 Lua 代码直接改 REAPER 工程，交付的可编辑工程与其渲染音频要对照人工审核过的参考前后状态一起打分。论文明确说各基准在执行环境、算子、参考构造和交付要求上不同，直接搬结论需要先对齐这些协议。

初学者容易误以为都是音频生成就可比。本文只研究单个编辑步骤的指令跟随与执行精度，不研究从零作曲或开放式混音审美排序，这一点决定了后面指标为什么都围绕与参考的一致性展开。

### 要回答的问题：指令越抽象，执行差在哪里

论文把核心问题拆成三问。第一，指令细节如何影响参考编辑的执行，操作选型和数值精度分别掉在哪里。第二，渲染音频是否跟着变好，还是工程看着对但声音没接近参考。第三，完整的多轮工作流和音频测量各自贡献了什么，是缺了反馈不行，还是测了声音也没用。

任务覆盖来自一段连续八轨制作会话 Everytime-72，包含 72 个人类请求与对应工程快照，涉及平衡、音色、空间、自动化、效果链修改和交付修复，后续请求常纠正 earlier 编辑。基准本身则用另一首歌构造，以避免直接把生产会话原样当考题。

每个用例都从参考混音前状态独立开始，允许模型多次调用工具和修订，最近最多 3 条同形式请求作为历史。序列里还特意加入过调和随后的修复，用来考察不同工程状态和调节方向下的执行。

### Tomori 的整体循环：读工程、测音频、写代码改工程

Tomori 基于插件式智能体运行时 DeepSeek Harness，另写插件连接 REAPER。桥接负责检查工程状态和执行 Lua，渲染管理负责出音频并把状态、结果和报错返回给模型。模型在 1 次请求内可以走多轮观察与编辑，最后交付工程和音频。

下图是论文的序列图，先看它有助于建立完整链路，再读文字细节。图中纵向是用户、语言模型、智能体框架与 REAPER 4 条生命线，横向是 3 类工具调用及其返回，循环表示模型按需重复选择直到决定交付。

> **看图路径：** 1. 先从用户混音请求沿纵向生命线看循环入口；2. 再看循环内工程检查、音频分析、编辑渲染三条横向分支的先后与返回；3. 最后看底部交付物同时包含工程与渲染音频

[![原论文 Figure 1：Sequence diagram of Tomori.](https://arxiv.org/html/2610.25344v1/agent-workflow-en.svg)](https://arxiv.org/html/2610.25344v1/agent-workflow-en.svg)

*论文图 1。原论文 Figure 1:：“Sequence diagram of Tomori. Within the loop, the model selects project inspection, audio analysis, or code-based project editing (alt), then uses returned results to decide…”。*

这张图确实可见 3 类分支：工程检查返回轨道效果参数快照，可选音频分析返回测量数值，工程编辑与渲染返回执行结果或报错。编辑代码直接改变当前 REAPER 工程，底部交付同时指向工程加渲染音频。论文举例说，智能体曾对比人声与伴奏频带能量后调伴奏均衡并重新渲染测量，也曾对比旁链处理与旁通输出并检查路由，说明循环不是单次提交。

任务的形式化表示把输入与参考分开，模型只能看到前者。

\[q_{i}^{l}=(\underbrace{X_{i-1},u_{i}^{l},H_{i}^{l}}_{\text{Model input}};\underbrace{A_{i},X_{i}}_{\text{Reference}}),\]

其中 X 是工程状态序列，A 是参考编辑，u 是当前指令，H 是至多 3 条历史请求，帽子标记的 X 是模型交付的工程。这个区分很重要：目标混音与未来参考状态在推理时保持隐藏。

**REAPER 工程状态 × Lua 编辑代码：** REAPER 工程状态指当前多轨、路由、效果链与参数取值的集合，是智能体能读能改的对象；Lua 编辑代码是模型生成并由桥接执行的具体改动手段。二者搭配，模型先读状态决定改什么，再用代码把改动真正落到原生工程里，组合后才有可验证、可渲染的交付。

### 模型能看到什么：工程文本与可选的数值测量

工程观察走 REAPER 公开接口，取轨道、路由、效果顺序及参数名和值。模型还可以查 REAPER 文档确认是哪个旋钮。这种设计近似混音师反复听并看插件界面的过程，但论文明确说模型没有直接音频输入，只能拿到数字测量转成的文本。

音频测量完全可选，由模型决定是否测、测什么。它可以自己写程序或调 FFmpeg，测量所选频带电平及其他与请求相关的量，再把数值以文本读回。代价是测量本身不保证有用，后文实验显示主要模型 990 次交付里只有 7 次带了音频测量，且都测未处理轨道、用于门限或压缩阈值，没有分析处理后混音也没有编辑后复测。

**工程检查 × 音频测量：** 工程检查是通过 REAPER 公开接口读取轨道、效果顺序与参数名的文本观察，解决改错对象的问题；音频测量是模型写程序或调用 FFmpeg 计算频带能量等数值的文本观察，解决不知道当前声音大小关系的问题。二者都是文本反馈，前者管结构对不对，后者管声音依据够不够。

### 参考编辑与三种说法是怎么造出来的

基准用 MedleyDB 的 Phoenix_ScotchMorris 多轨与成品混音，先用 GRAFX-Prune 优化效果参数并剪枝处理链以近似重建混音，再映射到 REAPER 原生插件并拟合参数，最后由专业混音师试听、细化并批准终点。批准的混音被拆成每次只动一到两个效果或轨道控制的小编辑，包括效果增删、参数调整和对过调的纠正。序列含 72 个常规编辑、19 个过调和 19 个修复，累计执行验证终点工程与渲染与批准终点一致。

每个参考编辑配 3 种指令。IF0 给出目标对象、操作或控件、调节方向，合适时还有数值增量；IF1 保留目标对象与效果类别，用近似说法描述方向或可闻问题；IF2 只描述目标对象的预期声音，把操作选择与参数设置留给模型。从 IF0 到 IF2，对应用户混音经验递减、说法递增抽象。论文请混音客户做语言审核，确认每条指令是否准确描述其参考编辑要解决的混音需求。

下面这张原表用同一个修复 transition 说明 3 种说法的差异，教学上值得逐行对照。它对应的共同参考是把均衡第二段增益从 -5.4 dB 调到 -4.4 dB，后两种说法并不唯一指定这个数值目标。

| Form | Step 2: English translations of the archived Chinese instructions |
| --- | --- |
| IF0 | On the left main microphone’s ReaEQ, raise band 2 (around 950 Hz) by 1.0 dB. |
| IF1 | The left main microphone’s EQ was cut too much around 950 Hz; bring a little back. |
| IF2 | The left main microphone sounds too hollow in the middle; restore some body. |

对照可见 IF0 直接说在左主话筒 ReaEQ 上把 950 Hz 附近第二段提升 1.0 dB，IF1 只说该处砍多了、带回来一点，IF2 只说中频太空、恢复些形体。同一件事，模型需要自己补的操作信息越来越多，这正是后文抽象条件下分歧的来源。

**参考编辑 × 指令形式 IF0、IF1、IF2：** 参考编辑是从混音前状态到混音后状态的确定性改动，是评分依据；IF0、IF1、IF2 是同一参考编辑的三种说法，从给出对象操作方向数值，到只保留对象与大致问题，再到只描述听感。组合起来可以固定要做的事、只改变说法的信息量，从而分离执行能力与理解抽象请求的能力。

### 没有训练模型时，本文实际做了哪些构造与执行

本研究没有训练新的混音模型，3 个主要模型与两个补充模型都是直接调用现成语言模型完成任务。该节讲清实际的构造、检索、调用与计算，避免误把评测当成训练。

先看数据构造链，它解释了参考从哪里来、指令从哪里来，两路在何处汇合。下图左侧是音频支撑的参考编辑构造，右侧是真实请求提炼的任务与语言模式，中间汇成每个编辑的三指令用例。

> **看图路径：** 1. 先看左侧 MedleyDB 音频到参考编辑的构造链；2. 再看右侧真实请求到任务与语言模式的提炼链；3. 最后看两路如何汇入按编辑的三指令基准用例

[![原论文 Figure 2：Data construction. Audio supports reference-edit construction, while real mixing requests inform…](https://arxiv.org/html/2610.25344v1/data-construction-en.svg)](https://arxiv.org/html/2610.25344v1/data-construction-en.svg)

*论文图 2。原论文 Figure 2:：“Data construction. Audio supports reference-edit construction, while real mixing requests inform the instructions.”。*

这张图确实可见两个输入框分别标出多轨加混音与真实混音请求，箭头经由拟合加专家细化得到参考编辑，另一路得到每个编辑的 3 种指令，最终共同指向基准用例。图注强调参考混音终点与指令都经过人工审核，这与正文的工程师批准和客户语言审核对应。

执行侧每个用例加载参考混音前状态，在独立会话中运行，模型生成 Lua 修改当前工程，可增删效果、调控件、改路由或自动化并渲染。桥接串行执行命令并返回标识、状态、结果与错误，不自动重试或回滚，未解决的桥接结果会阻塞后续执行。所有源码、前后工程、参数快照与执行输出都被保留，用于核查代码与工程变化，但不证明所选编辑满足了请求。

### 评测如何打分：工程结构、参数数值、渲染声音

评测分工程与音频两侧。工程侧用编辑图比较执行前后工程的净变化，节点表示效果增删或控件变化，链路表示处理链变化。当种类、具体操作或控件、目标轨道及全部必需参数方向都与参考一致时节点才算匹配，多重集匹配会惩罚漏改和多改。公式把节点与链路的匹配数汇总为 F1，每个用例先汇总再跨用例宏平均。

\[F_{\mathrm{graph}}=\frac{2(M_{N}+M_{E})}{N_{r}+N_{m}+E_{r}+E_{m}}.\]

其中 M 为匹配数，N 与 E 分别为节点与链路在参考与模型侧的计数。方向比较用终值减基线符号对照参考增量，新增效果用参考构造初值而非原生默认值作基线。参数精度按轨道效果控件对齐，FX 与声像用归一化值，轨道增益用 dB，平均绝对误差只平均有限观测，容差准确率分母含全部必需控件，缺失或非法不得分。

音频侧先把混音前、参考后、模型后的渲染记为不同信号，用多分辨率短时傅里叶变换损失衡量距离，响度归一后打分。参考误差降低表示编辑相对不动工程去掉了多少初始参考误差，负值置零；编辑进度把参考变化、模型变化与两者距离看成三角边，估计模型变化沿参考方向的分量比例，1 为幅度相当，0 为无进展，负为反向。另有在冻结 MERT 特征位移上的投影与余弦方向作为表示空间补充，因为损失本身不是欧氏距离。

主要评测用 kimi-k3、claude-fable-5 与 deepseek-v4-pro，每模型 330 用例共 990 用例，覆盖均衡、增益声像、门、压缩、混响、延迟与宽度。每次交付含可编辑工程与两段 48 kHz 立体声，分别覆盖 15 到 30 秒与 55 到 75 秒。补充比较在 36 个参考步骤的 IF0 与 IF2 子集上加测 deepseek-v4-flash 与 kimi-k2.6。

**Graph F1 × 参数精度：** Graph F1 检查是否选对了编辑节点与链路并要求方向一致，管操作结构对不对；参数精度检查按轨道效果控件对齐后的数值误差与容差命中率，管数值准不准。二者搭配才能区分选对但调不准、调准但多加了额外处理等不同失败。

### 指令越抽象，一致性掉在哪里

先看总体趋势。3 个主要模型在明确指令下参考一致性高，抽象请求下工程一致性与音频改善都下降。论文报告所有模型大体把声音往参考方向推，但平均误差降低从 IF0 下约五分之四降到 IF2 下约三分之一。IF2 下许多编辑方向对但幅度过大或不足，增加参考误差的编辑中过冲是主要失败。

工程侧图分数随抽象下降，参数容差在 IF0 下高、IF2 下 0.01 容差内仅约五分之一命中。常见分歧是操作替换与额外处理，例如 Kimi 在 IF2 第一步把参考调均衡换成调声像，40 个不完全匹配中 24 个保留了全部参考节点但多加了编辑。链路一致性保持较高，节点一致性下降。反向调节少于未动必需参数，但明确指令也不能杜绝大错，如 IF0 第 99 步把压缩 attack 从 3 ms 到 0.5 ms 的要求做成 250 ms。

音频距离的计算方式需要先说清符号含义，再看幅度判断。

\[\ell_{i}=L(y_{i},\hat{y}_{i}),\quad\ell_{i}^{\mathrm{noop}}=L(y_{i},b_{i}).\]

其中 b 为混音前渲染，y 为参考后渲染，帽子 y 为模型后渲染，L 为上述频谱损失。进度与表示空间投影则进一步把变化量换成沿参考方向的比例。

\[\rho_{i}^{\mathrm{MERT}}=\frac{\hat{\Delta}_{i}^{\mathsf{T}}\Delta_{i}}{\|\Delta_{i}\|_{2}^{2}}.\]

其中 E 为池化后的音频向量，Delta 为相对混音前的位移，分子为模型位移在参考位移上的投影。两种投影趋势一致，IF0 下多数编辑落在 0.5 到 1.5 倍参考变化的范围内，IF2 下不到一半。DeepSeek 在 IF0 与 IF1 下误差降低最高，Kimi 在 IF2 下误差降低与图分数最高，说明工程与音频互补：前者查必需编辑，后者反映含额外处理的总声音。

操作族覆盖本身不平衡，读数时要记住分母构成。下面原表给出 110 个唯一参考步骤的分布，注意 5 步横跨两族所以分项和大于总数。

| Operation family | Steps |
| --- | --- |
| EQ | 50 |
| Gain/pan | 29 |
| Reverb | 14 |
| Compression | 11 |
| Gate | 6 |

该分布显示均衡 50 步最多，增益声像 29 步次之，混响压缩门宽度延迟依次减少。这意味着总体平均主要反映均衡与平衡类编辑，延迟与宽度等长尾能力的结论证据较少，不能把平均数直接当成全类型能力的保证。

### 五个模型在同一子集上能分出高下吗

补充比较把 5 个模型放在相同 36 步的 IF0 与 IF2 上，合并两种形式汇总。结果上 Flash 接近 Pro，但配对分析不支持等价；k2.6 相对 K3 的参数一致率与误差降低 pooled 下降得到支持，图分数差异不确定。这说明相近的图分数可以伴随不同的参数与音频结果。

读这部分必须注意子集选择方式。用种子抽 500 个候选再选与主要模型完整结果偏差最小的一个，且选择用了存档图分数，报告又都换成联合方向规则重算。这种结果知情的选择把推断限制在所选步骤，不能当成未见任务的独立抽样，更不能推广为总体排名。计时只平均所选最终尝试、含接口等待但不含 earlier 失败尝试，也不能当成总推理成本或部署延迟。

诊断表进一步显示节点 F1 下降快于链路 F1，未动参数多于反向、非法或未匹配。IF2 下各模型未动必需参数可达十余个，而反向至多两三个，说明抽象条件下更多是没调或没找对控件，而非方向写反。

### 多轮修订有用吗，强制测音频有用吗

消融都用 DeepSeek v4 Pro 并与其完整工作流交付按相同用例配对。单次提交只保留编辑前检查，允许 1 次改动性 Lua 提交，其后无回读与后续工具；禁止分析则不让碰音频文件、模型侧渲染与分析，评测渲染仍保留用于打分；强制测量则提示先测相关原始轨道或当前混音再解释如何指导编辑。

先看成对差异的数值方向。单次提交在 IF0 下参数一致率与误差降低明显低于完整工作流，IF2 下差异不确定，只有表示方向下降较明确。禁止分析在 36 步 IF2 子集上参数一致率未下降。28 个信号依赖与历史分析步骤上，禁止分析与强制测量相对完整工作流在参考指标上都没有明确总体差异，强制测量相对禁止分析也无明确总体收益，但审计确认 28 个强制测量用例都执行了成功测量，平均工具调用明显增加。

下表先展示配对差异的原表片段，说明在同一子集上比较时基线与变体的关系。

| Flash – Pro |  |  |  |
| --- | --- | --- | --- |
| IF0 | -0.006 | -2.3 | -2.1 |
| IF2 | +0.007 | +4.7 | +3.9 |
| Pooled | +0.001 | +1.2 | +0.9 |

该表把 Flash 与 Pro、k2.6 与 K3 的成对差并置，合并行把 IF0 与 IF2 放在一起。可见 Flash 与 Pro 的差异小且不确定，k2.6 相对 K3 在参数与误差上 pooled 下降约 9 个百分点。论文强调这是探索性自助分析且未校正多重比较，结论只限所选子集，不支持总体模型排名。

为把可运行策略的绝对数字讲清，下表整理单次提交与完整工作流在相同 36 步上的关键数，以及强制测量带来的调用代价。

| 条件 | 参数一致率 | 误差降低 | 平均工具调用 |
| --- | --- | --- | --- |
| 完整工作流 IF0 | 97.7% | 85.4% | 11.0 |
| 单次提交 IF0 | 72.1% | 61.3% | 未报告 |
| 强制测量 28 例 | 未单独汇总 | 未单独汇总 | 18.9 |

表前的问题是完整多轮相对单次提交是否提升明确执行，以及成功测量是否转化为更好的参考一致性。表中前两行显示 IF0 下参数一致率从 97.7% 降到 72.1%，误差降低从 85.4% 降到 61.3%，支持完整工作流改善明确执行；第三列显示强制测量 28 例全部成功但平均工具调用从 11.0 增到 18.9，而前文配对结果显示参考指标无明确总体改善，说明测得到不等于改得好，且要付更多调用代价。单次提交比较同时去掉了反馈与继续编辑，不能拆出各自作用；音频比较中提示、渲染权限与访问策略一起变化，也不能孤立测量内容的作用。

**参考误差降低 × 编辑进度：** 参考误差降低比较模型输出与参考输出的距离相对不动工程缩小了多少，管最终声音离目标近了多少；编辑进度比较从同一混音前状态出发的变化量在参考方向上的投影比例，管改动幅度是不足、合适还是过头。二者都用渲染音频计算，前者看结果距离，后者看方向与幅度。

### 这些结论在什么条件下才成立

第一，听感请求不唯一指定操作。把人声推出来可以提人声、压伴奏或清掩蔽，声音接近但编辑图不同。工程指标在抽象指令下测的是与所选一种实现的一致性，音频一致性也不能单独证明替代做法是否满足请求。

第二，基准只有一首歌，每模型每指令对只有 1 次最终交付。更广的泛化与生成稳定性需要多首歌与重复运行。补充子集用已有模型结果选出，不支持总体排名。分数用恢复后的最终有效交付，不反映首次成功率与总成本。

第三，音频访问比较只用一个模型与所选抽象用例，提示、渲染权限与访问策略共同变化，历史行为分组样本小且按行为选出。差异不确定不等于等价，也不能证明分析可有可无或某一组件有效。选择测量、解读结果与转成编辑仍是分开的挑战。

第四，任务是单个编辑，旁链、段落感知自动化与持续客户对话等生产流程能力未被全面评测。渲染打分依赖响度归一、重采样与窗口平均等预处理，换预处理可能换数值，复现时要按附录原样执行。

### 想复现或尝试，第一步做什么

值得尝试的情形是已有 REAPER 工程并能接受人工复核，想把明确的文字改动批量落成可编辑工程，或想研究抽象听感与具体参数之间的差距。明确指令下多轮检查修订的收益证据较强，抽象听感下不要指望加 1 次测量就自动变准。

复现第一步是拿到同一首歌与同一工程状态。论文用 MedleyDB 样本的 ScotchMorris 多轨与成品混音，经图推断映射到原生插件并由工程师批准终点，再拆成小编辑序列。用例说明、工程快照、分数与执行评测软件在评审材料里，音频文件、自动保存与进程备份不在其中，音频指标重算需要对应音频文件。GPU 计算用 NVIDIA A100，但没有完整计算预算估计，已选交付的工具调用与计时不含全部失败、恢复与预备运行。

需要补的验证包括换歌、重复运行、统一恢复策略下的首次成功率与总交互成本，以及在抽象请求上补专家与用户偏好评价以容纳多解。涉及生产对话要先做去标识与知情同意，模型代码可能误操作工程，改动与渲染在用于生产前都要人工检查。本篇未发现来源绑定且完成验证的作者资源，不得声称代码模型数据已公开；第三方链接只证明论文提到，不证明作者已开源。

### 一句话总结与未解的鸿沟

Tomori 把语言模型接到原生 REAPER，用可执行代码实现可检查、可渲染的混音编辑；Tomori-Bench 用人工审核的参考与三档指令把执行精度与抽象理解分开 measured。证据支持明确执行可行且多轮有帮助，也支持抽象条件下操作选型、数值精度与音频幅度同时下滑，且成功测量不自动带来参考一致性提升。

未解的是从可执行控制到精确实现听感目标的鸿沟。未来工作指向在原生环境里学何时取证、何时修订、何时停止，以及把直接音频输入、交互澄清与偏好学习纳入，并用更广的数据、留出歌曲、重复运行与统一恢复策略评估泛化、稳定与成本。对刚入门的读者，复述时抓住三点即可：输入是工程加一句话，过程是读工程、按需测数、用 Lua 改工程，结论只在所选歌曲、单次最终交付与所选参考实现下成立。

<details>
<summary>📎 论文与评分元数据</summary>

排名：前50% | 文档类型：数据集与基准 | [arXiv 原文](https://arxiv.org/abs/2610.25344v1)

</details>

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。

- 评分规则：type-aware-v1

- 评分模型：muse-spark-1.3-contributor

- 评分请求协议：openai_responses

---

[← 返回 2026-10-20 语音/音乐/音频论文速递](/audio-paper-digest-blog/posts/2026-10-20/)
