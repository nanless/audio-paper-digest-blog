---
title: "Giromin Residency Report: Creative Exploration by Musicians and Dancers from Frevo and Afro-Brazilian traditions."
date: 2026-09-13
draft: false
description: "论文报告在巴西累西腓 Paço do Frevo 为期两周驻留中四位音乐舞蹈艺术家探索可穿戴乐器 Giromin v0.5 的过程，用六次访谈的反思性主题分析提炼六个主题，最强证据是双重音乐舞蹈能力构成结构性准入，而代价是 Max 补丁的集中式改参流程反复打断具身探索状态。"
tags: ["用户研究", "音乐", "音乐生成"]
categories: ["nime-2026 论文"]
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_paper_id: "conference:nime:2026:conference-paper-id:nime2026_56"
paper_digest_source_kind: conference
paper_digest_conference_id: "nime-2026"
paper_digest_conference_record_url: "https://nime.org/proc/nime2026_56/index.html"
paper_digest_conference_pdf_url: "https://nime.org/proceedings/2026/nime2026_56.pdf"
paper_digest_api_reader_contract: "beginner-researcher-v3"
paper_digest_api_reader_article_sha256: "e06ca22e942c74f7d772433252aeda690de174ea4fb70a44093de278c6cf7543"
paper_digest_api_reader_plan_sha256: "f0095a18987e1b264882abe62da7c7601a3b7d1369e4c4921a7a2e881657661f"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings-v4"
paper_digest_api_reader_source_bindings_sha256: "82317cf796fc3a24ed2e4112ee111c4a3ae05929d0898fbe6c55dd48f96e385b"
paper_digest_api_reader_source_table_count: 2
paper_digest_api_reader_source_formula_count: 0
paper_digest_api_reader_structured_artifacts_sha256: "b49d0d3673069c11e7c482494918b932499f743992b7e21aa8e077e918d15c6e"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity-v1"
paper_digest_api_reader_author_identity_sha256: "49f4c62ebf675b12d5f974b77bd56bb2275e33fd7ad0b5eddaf079d564a7a2ea"
paper_digest_api_reader_author_count: 3
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity-v1"
paper_digest_api_reader_resource_identity_sha256: "b9b41a78c8e04b183e2641925bbaff1a128de7380e07f521801520c430ab1621"
paper_digest_api_reader_resource_count: 1
paper_digest_api_reader_decision_projection: "api-reader-decision-projection-v2"
paper_digest_scoring_contract: "api-scoring-audit-v2"
paper_digest_taxonomy_contract: "paper-taxonomy-flat-tags-compat-v1"
paper_digest_taxonomy_selection_contract: "paper-taxonomy-selection-v1"
paper_digest_taxonomy_registry_version: "paper-taxonomy-v1"
paper_digest_taxonomy_registry_sha256: "15c82a567ce5a55dc1175684ed08b64c158558639d9c8fb822c9587ec32a8778"
paper_digest_taxonomy_concepts: [{"facet":"method","id":"method.user-study","label":"用户研究"},{"facet":"signal","id":"signal.music","label":"音乐"},{"facet":"task","id":"task.music-generation","label":"音乐生成"}]
paper_digest_primary_task: "音乐生成"
paper_digest_primary_method: "用户研究"
paper_digest_score: 5.6
paper_digest_rank_bucket: "前50%"
paper_digest_document_type: "应用研究"
paper_digest_conference_structure: replayable-pdf-layout-v1
---

# 📄 当可穿戴乐器走进弗雷沃：Giromin 驻留中两种乐器观的相遇与摩擦

> 英文题目：*Giromin Residency Report: Creative Exploration by Musicians and Dancers from Frevo and Afro-Brazilian traditions.*

> 会议身份：`conference:nime:2026:conference-paper-id:nime2026_56`


> ✅ 来源为官方会议 PDF；表格与 Figure 按原文证据绑定。PDF 公式以原页区域图片展示，未冒称作者原始 TeX。

> 会议来源：[官方记录](https://nime.org/proc/nime2026_56/index.html) · [官方 PDF](https://nime.org/proceedings/2026/nime2026_56.pdf)

标签：#用户研究 #音乐 #音乐生成

评分：**5.6/10** | 创新 1.2/2 | 技术严谨 1.0/1.5 | 实验充分 0.7/1.5 | 清晰度 0.8/1 | 影响力 0.9/1.5 | 开源 0.2/1.5 | 可复现 0.1/0.5 | 工程/实践 0.7/1.5

排名：前50% | 文档类型：应用研究

## 👥 作者与机构

- João Tragtenberg：机构信息未能从会议 PDF 纯文本可靠映射
- Filipe Calegario：机构信息未能从会议 PDF 纯文本可靠映射
- Eva Rolim Miranda：机构信息未能从会议 PDF 纯文本可靠映射

## 📌 核心摘要

本文任务是以全身动作为输入、以实时声音为输出的可穿戴演奏，难点在于弗雷沃与Afro巴西传统的离散打击性节奏精度与连续传感映射之间存在本体错位，实验室效率度量无法捕捉文化协商过程。惯性传感与姿态融合负责输出连续朝向与离散峰值事件，其中峰值检测通过识别局部最大值将空中打击手势转为离散触发。该输出经无线传输进入可视化编程补丁完成手势到声音参数绑定，补丁中的平滑、阈值与映射范围隐含了何种运动被优先的美学假设。绑定结果再由驻留音乐家与舞者通过具身即兴检验并要求实时改写，改写意见经由反思性主题分析提炼为六个主题以指导下一轮迭代。相比以参数控制为中心的设计，本文把乐器视为文化协商过程，强调高层文化对应而非低层连续调制，其实质意义在于将技术限制转为扩展技巧的表达材料。在两月驻留观察与访谈分析设置下，Tomás Brandão的数字经验指标为8 yrs，高于Henrique Albino的数字经验指标5 yrs。结论适用边界受限于熟悉音乐舞蹈双重具身的表演者与街头集体排练场景，尚未验证无舞蹈训练的纯器乐控制或高精度打击触发下的外推，电池与延迟等结构性约束构成明确失败条件。原文未披露训练、推理或部署成本，本工作不涉及机器学习训练。

## 🔗 开源与复现资源

- 演示资源：<https://pacodofrevo.org.br/> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 输入是什么？为什么弗雷沃不能被当作静态遗产来采样？

这篇解读的输入是 NIME 2026 会议论文 Giromin Residency Report，目标是让刚进入语音音乐音频领域的研究生能核对事实并复述方法。必须保留的信息包括驻留地点、时间、人物、技术版本和分析方法，输出是按学习依赖展开的中文技术解读。本文默认从原文独立写作，不引入外部评价。

论文研究的任务不是做一个通用的手势识别准确率竞赛，而是观察一个已经开发十四年的可穿戴数字舞蹈音乐乐器进入活态传统时会发生什么。白话说，可穿戴数字舞蹈音乐乐器英文为 Digital Dance and Music Instrument，缩写 DDMI，指同时承担舞蹈表达与乐器演奏功能的身体佩戴式乐器。弗雷沃英文为 frevo，是巴西累西腓的街头音乐舞蹈传统，2006 年被巴西 IPHAN 认定为国家非物质文化遗产，2012 年获联合国教科文组织世界遗产地位，分为 frevo de bloco、frevo-canção 和 frevo de rua 3 种形式，本研究聚焦最快的器乐街头弗雷沃 frevo de rua，由铜管与打击乐行进乐队演奏，舞者 passista 以旋转、踢腿和贴地动作为语汇。

初学者容易误以为传统等于需要保护的静态标本。论文明确反对这种读法，指出弗雷沃是全年在学校、排练室、街头游行和舞台上持续创作的实践，儿童与老人都参与，每年都有新曲。它的起源本身就是混合：在 1905 年至 1915 年间军乐、波尔卡、maxixe 与流行歌曲在街头被重新加工，卡波耶拉的 ginga 摇摆、贴地杂技序列与非洲散居节奏沟槽不是后来嫁接而是构成性材料。作者用巴西黑人思想家 Antônio Bispo dos Santos 的 confluência 即汇流概念来描述这种相遇：不同世界相遇但各自保持 distinct，而非融合成同质体。这个背景决定了后文所有判断：问题不是传统能否吸收技术，而是在谁的条件下发生接触。

### 相关路线有哪些？本研究与它们在输入目标上有何不同？

第一条路线是基于可穿戴惯性传感器的舞蹈音乐乐器。近三十年已有大量身体佩戴惯性传感器工作，Todoroff 等人处理关节舞蹈与音乐场景，加速度计与陀螺仪是 NIME 文献中长期最常用的传感元件。这类工作的输入通常是身体运动信号，目标是实现声音控制，运行阶段多为实验室或实验音乐舞台。

第二条路线是手势声音映射策略。已有框架从激活与调制分类、具身认知、身体空间时间维度来概念化映射，McPherson 等人进一步指出映射不是中性技术操作，而是嵌入意识形态的技术科学实践，偏好高维参数空间、表征稳定性和从身体到声音的单向信号流。论文接受该批判视角，但报告驻留中表演者更关心舞台策略如手势的美、轻重、自由移动，而非优化映射本身。

第三条路线是特定文化传统中的数字乐器。已有韩国舞蹈、印度古典音乐、阿根廷探戈等案例，说明把乐器放进活态实践才能看到社会生命。本研究把这条线延伸到巴西东北部传统，回应学界对文化多样性的呼吁。

第四条路线是数字乐器设计的社会文化维度。Tahiroğlu 与 Magnusson、Waters、Magnusson 关于乐器迁移、Hayes 与 Marquez-Borbon 关于认识论假设的批判，都指出乐器通过与社群纠缠才成为音乐性的。但论文指出这些框架仍锚定在欧美机构语境，南方认识论如 Wong-Villacres 等人的横向性 horizontality，以及 gambiarra 与技术乡土创造力 Technovernacular Creativity 作为南方技术宇宙观 cosmotechnics，强调在地物料条件下的挪用与重组，才是理解 Giromin 建造条件的钥匙。

Paço do Frevo 官网当前可用，已公开，地址为<https://pacodofrevo.org.br/>，本次核验状态码为 200，可用于核对驻留机构背景，但不作为技术事实来源。

### 研究问题是什么？为什么不用实验室效率指标？

论文提出 3 个相互关联的问题：当这种乐器进入其技艺先于且超出 NIME 生态的艺术家身体时会发生什么；乐器对弗雷沃做了什么，弗雷沃对乐器做了什么；乐器架构中刻写了哪些价值观，这些价值观如何塑造或碰撞音乐家与舞者的运动、发声与认知方式。

之所以不用效率或任务完成度来衡量，是因为作者把驻留定位为艺术过程报告而非技术评估。参与者不是 NIME 学术社群成员，也不隶属于西方实验艺术音乐传统。目标是记录挪用、限度、摩擦与开口，包括什么成为可能、哪里不足、什么在他们手中还未能成为。

这意味着评价标准必须从具身与文化层面重建。例如 Midas touch 即常开 sensing 问题，白话是只要戴着就一直在发声，表演者必须学会雕刻出 silence 而非触发声音；又如观众可理解性，即手势声音关系是否视觉可读。这些在实验室可以用延迟与误触发率来谈，但在驻留中它们表现为排练流是否被打断、观众是否觉得像科学展览 science fair。因此后文的方法选择必然是质性访谈而非对照实验。

### 驻留全景：谁在何时何地以什么流程工作？

驻留在 2022 年 11 月 7 日至 26 日于累西腓 Paço do Frevo 举行，该机构集博物馆、教室、排练室与礼堂于一体。这不是 Giromin 首次出现在该馆，第一与第二作者曾与 2 位声音设计师在 2016 年和 2017 年在此展示，2018 年还受邀在 Marco Zero 狂欢节开幕主舞台与 Quinteto Violado 同台，因此驻留具有回归与延续性质。

人员包括 4 位驻留艺术家与 2 位声音设计师加 1 位组织者。组织者为第一作者 João Tragtenberg。声音设计师为贝斯手 Miguel Mendes 与制作人 Tomás Brandão。4 位艺术家为打击乐手 Aishá Lourenço、管乐演奏作曲家 Henrique Albino、舞者 Orun Santana、职业 passista Mestre Wilson。他们的传统覆盖卡波耶拉、maracatu、afoxé、coco、弗雷沃、爵士与 baião，数字经验从无到八年 Ableton 不等。

流程上第一周为个人与双人 session，第二周初开全体规划会后继续双人深化，最后在 11 月 26 日礼堂做公开展示。每个工作 session 遵循提议与协商循环：组织者或声音设计师在 Max 与 Ableton Live 中编码一个映射提议，表演者试验，集体评估，常实时重编程。session 还引入受 soma design 启发的身体练习，如躺地、不同高度层移动、用纯人声引导他人即兴，后演变为长笛引导舞蹈与身体引导长笛的互逆练习，沉淀出手臂挥扫、重心转移等候选映射。只有 Albino 直接进入编程环境，曾把四台设备带回家并在工作室学习 1 天后开发了原创映射补丁。

**gambiarra × 技术民族志式拼凑：** gambiarra 负责在时间与物料约束下用现成器件让系统先跑起来，技术民族志式拼凑在此指把这种够用就好的逻辑沉淀为十二年的 Max 补丁与硬件选型，二者搭配的理由是长期缺乏持续资助只能继承旧决策，组合后新增的作用是单人创作时高效但集体驻留时改参成本被放大。

下图显示驻留核心物件的一种佩戴方式，即把传感盒绑在传统乐器上而非只绑在肢体，这预示了后文乐器观冲突：传感位置既是技术选择也是文化协商。

> **看图路径：** 1. 观察演奏者手持贝林鲍主体与拨杆的姿态，确认乐器演奏动作未被占用；2. 找到绑在贝林鲍杆体末端的 Giromin 小盒与红色绑带固定方式；3. 对照背景展墙，确认拍摄地点为 Paço do Frevo 馆内而非实验室；4. 思考该佩戴位置能捕捉到哪类手臂摆动与杆体倾角变化

[![原论文 Figure 1：Orun Santana holding his Berimbau with a Giromin attached to it (photo by Junior Teles)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/nime-2026/491742c9baaa/figure-1.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/nime-2026/491742c9baaa/figure-1.png)

*论文图 1。原论文 Figure 1：“Orun Santana holding his Berimbau with a Giromin attached to it (photo by Junior Teles)”。*

照片中 Orun Santana 俯身持贝林鲍，Giromin 小盒固定在杆体近葫芦共鸣腔一端，用绳带缠绕，演奏者双手仍保持持杆与持棍击弦姿态。这说明佩戴没有取代原声乐器操作，而是叠加一层运动传感。背景为馆内彩色展墙，证实这是在文化机构内的实践，而非消音室内的佩戴测试。由此可复述的流程要点是：先保持传统演奏具身，再把传感作为附加层引入，映射提议必须在不破坏原有演奏姿态的前提下被试验。

### Giromin v0.5 由哪些部件计算？信号如何从身体到声音？

先沿一个样本走完全链路。假设 Orun Santana 脚踝佩戴 Giromin 做 1 次跺脚。加速度计捕捉线加速度，陀螺仪捕捉角速度，ESP32 微控制器上运行 Madgwick 传感器融合算法得到连续姿态，同时对原始加速度与陀螺仪信号做峰值检测：用噪声门限过滤小抖动，用可配置去抖窗口避免 1 次打击触发多次。得到的姿态描述符与离散峰事件经 Wi-Fi 以 OSC 协议发送到电脑端自研 Max 补丁，再映射到 Ableton Live 参数，或触发采样，或调制效果。

版本历史帮助理解为何是这条链路。v0.1 用 Arduino 与 XBee 做由躯干角度触发的 MIDI 序列器；v0.2 挪用智能手机做运动传感；v0.3 与 v0.4 因定制 PCB 不经济而采用量产 ESP32 与 M5Stick 开发套件，始终在个人作坊、Fab Lab 与伙伴空间用本地可得元件建造。早期作品 Gira 探索连续旋转手势调制琶音器速度与灯光，更接近实验音乐美学，连续、容忍延迟。2022 年为 ciranda 大师 Lia de Itamaracá的装置开发的峰值检测模块，在驻留前 1 天移植过来，把空中打击手势映射为离散采样触发，使脚击类传统得以表达。

**数字舞蹈音乐乐器 × 具身交互：** 数字舞蹈音乐乐器负责把全身运动同时当作舞蹈表达和乐器控制来处理，具身交互负责提供身体感知、动作协商和声音反馈回路，二者搭配的理由是单一乐器范式只管声音控制或只管动作分析，组合后新增的作用是让舞者的重心转移、脚击和旋转直接成为发声与调制手段。

**手势映射 × 峰值检测：** 手势映射负责把连续姿态和离散事件分配到声音参数，峰值检测负责在陀螺仪与加速度信号中找到角速度局部最大值并在噪声门限与去抖窗口下触发 MIDI 事件，二者搭配的理由是弗雷沃与卡波耶拉传统建立在敲击性节奏上，组合后新增的作用是让脚击和打击性身体手势能触发离散采样而不只是调制连续参数。

下图四格拼贴展示了从桌面盒子到身体佩戴再到舞台灯光下全身运动的形态迁移，可核对长期迭代并非 1 次性设计。

> **看图路径：** 1. 先看左上木质盒体 v0.1 的旋钮与接口，确认早期桌面式形态；2. 再看右上与下方三格中人体佩戴与舞台灯光下的全身运动场景；3. 比较四格从盒子到身体佩戴的形态迁移，标记传感位置的变化；4. 结合图注确认 v0.3 为 NIME 2019 Gira 演出而 v0.4 为另一舞台作品

[![原论文 Figure 2：Giromin prototypes, clockwise: v0.1, v0.2, v0.3 in the Gira performance (NIME 2019) and v0.4 in…](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/nime-2026/491742c9baaa/figure-2.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/nime-2026/491742c9baaa/figure-2.png)

*论文图 2。原论文 Figure 2：“Giromin prototypes, clockwise: v0.1, v0.2, v0.3 in the Gira performance (NIME 2019) and v0.4 in the perfor- mance "Now and Wait do not Confabulate" by Iara Izidoro.”。*

左上为木质激光切割盒体带旋钮，右上为室内排练中腰部佩戴的日常服装舞者，下方两格为暗场舞台上裙装与赤膊舞者的旋转姿态。图注明确顺时针为 v0.1、v0.2、NIME 2019 Gira 中的 v0.3，以及 Iara Izidoro 作品中的 v0.4。这证实硬件从固定控制器走向可穿戴，软件从连续调制走向兼顾离散触发。复述时要强调：峰值检测不是通用优化，而是为打击性传统补上的一块关键拼图。

### 本研究训练了什么？没有训练时真实计算是什么？

本研究没有训练神经网络模型，没有梯度更新、参数冻结、损失函数或训练验证划分。必须明确说没有训练阶段，避免把无训练等同于确定性求解。

真实计算分为两类。第一类是设备端实时计算：Madgwick 融合输出姿态四元数或欧拉角，峰值检测输出离散事件，两者都是逐帧前向计算，无学习。第二类是研究层面的质性分析计算：采用 Braun 与 Clarke 的反思性主题分析 Reflexive Thematic Analysis，英文缩写 RTA。白话说，这是一种从访谈文本中归纳主题的质性方法，强调研究者的反思性位置。认识论取向为语境主义建构主义，承认经验在累西腓文化语境中共建，编码以归纳为主，兼顾语义显性含义与潜在假设层。

操作上，驻留后对所有参与者做了 6 次半结构访谈，覆盖既往数字乐器经验、创作过程、技术评价、传统技术关系与未来使用想象。分析经编码摘录与全数据集回查，精炼为 6 个主题：身体即界面、编程与创作之张力、传统作为资源而非障碍、简化作为掌握策略、技术限制作为体验塑造者、采纳与未来想象。

**反思性主题分析 × 具身知识：** 反思性主题分析负责从 6 次半结构访谈中归纳语义与潜在层面的模式，具身知识负责提供口传、集体排练与身体共在中的评价标准，二者搭配的理由是研究者本身是驻留组织者需要把位置性纳入编码，组合后新增的作用是把配置时间打断探索这类事件解释为认识论条件冲突而不只是效率问题。

需要补的缺项是原文未报告编码者间一致性系数、访谈提纲全文与编码手册，复现时只能按上述六主题与访谈维度重建，不能推定有量化信度检验。

### 实验条件如何组织？比较的公平性建立在什么基础上？

由于是艺术驻留而非对照实验，公平条件不是随机分组，而是相同的物理与时间约束：同一排练室、同一批 v0.5 硬件、同一 Max 与 Live 链路、同一公演截止日期。所有映射提议都在集体在场下试验，改参成本由全场共担，这本身就是待观察的现象。

| 来源证据 | 量化值一 | 量化值二 | 量化值三 | 量化值四 |
| --- | --- | --- | --- | --- |
| 来源句一 | 7 | 26 | 2022 | — |
| 来源句二 | 26 | 23 | 2026 | — |
| 来源句三 | 5 | — | — | — |

表前提出的问题是：在多大的人力与时间密度下观察摩擦？公平条件是所有人都面对同一套 gambiarra 架构与同一公演压力，指标方向不是越高越好，而是摩擦暴露得越充分越有价值。

表后解释是：主要收益是两周高密度共在让配置时间、电池耗尽、快节奏下脚击响应偏二值等限制在真实创作中暴露；具体代价是样本仅 6 人且均为高度具身的职业艺术家，结论不能推广到初学者或纯实验音乐人；未胜出项是实验室式效率指标在此不适用，论文明确放弃测量任务完成度。

下图为 11 月 15 日 Aishá与 Orun 的 session 现场，可核对集体改参的空间布局。

> **看图路径：** 1. 数清房间中人物与笔记本电脑桌的位置关系，区分演奏者与调音者；2. 观察左侧演奏者脚踝红色绑带与地面线缆，确认可穿戴佩戴点；3. 注意右侧镜面反射，核对实际在场人数避免重复计数；4. 观察黑色地垫与排练室陈设，确认这是工作过程而非正式演出

[![原论文 Figure 4：Session on November 15, 2022, with Aishá Lourenço and Orun Santana, coordinated by João Tragten-…](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/nime-2026/491742c9baaa/figure-4.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/nime-2026/491742c9baaa/figure-4.png)

*论文图 4。原论文 Figure 4：“Session on November 15, 2022, with Aishá Lourenço and Orun Santana, coordinated by João Tragten- berg and Miguel Mendes (photo by João Tragtenberg).”。*

画面左侧坐姿者腿部绑带有传感相关物件，中间 2 人桌前各有一台笔记本电脑与调音设备，右侧坐姿者赤脚，镜面反射显示另一角度的在场者。可见调音桌与表演区在同一房间，任何进入 MIDI Map 模式、重发目标 CC、选择新目标参数的操作都会让表演者等待。这解释了后文最大摩擦源为何是改参时间而非延迟或电池。

### 观察到了什么？六个主题各自报告了什么证据？

结果按主题组织，每个主题先讲与已有文献汇合处，再讲本驻留特异处。

身体即界面：参与者一致描述乐器如身体延伸，透明时刻手势即声音。Albino 自发提出声音表征、伴随、源于运动，以及准备性、交流性、执行性手势的分类，从表演者视角扩展了 Tanaka 的映射模型。同时出现 Midas touch，Orun 称起初感到被困，过程是解耦、在运动中找到沉默空间。

编程与创作之张力：所有人最一致的抱怨是配置耗时，超过电池与延迟。根因是 Max 补丁为单人独奏 gambiarra 建造，集体使用时每次改参都要停下创作、进映射模式、重发 CC、选新目标、恢复，中断了需长时间重建的具身共享状态。Orun 称花太多时间找东西，太少时间试验已有的，像在拼拼图，策略是简化映射参数以换取创作时间。论文强调对口传具身社群而言，这不只是不便，而是与认识论条件相悖。

传统作为资源：无人因传统而抗拒技术。Tomás 称传统与 disruptive 之物间没有冲突。两种用法：一是以传统为进入语汇，如 Orun 用 ginga、踢、旋转试探触发时机，曾建议脚高度映射深回声；二是把传统当重塑材料，Mestre Wilson 在即兴中发明了新 passo 舞步，Albino 作品与 1950 年代弗雷沃共享结构原则但加入不协和与不规则节拍。Wilson 在访谈中主动连接历史：十九世纪乐手看卡波耶拉者在铜管前移动而写出新弗雷沃，是身体到声音的反馈环，而 Giromin 让他能反向做，即过去跟在音乐后跳，现在跳在音乐前让音乐跟随。

**参数控制 × 文化编码对应：** 参数控制负责把欧拉角等数值流精确对应到振荡器频率等底层声音参数，文化编码对应负责要求身体按弗雷沃方式运动就能听到预期的弗雷沃音乐整体，二者搭配的理由是驻留同时出现了音乐家精确控声与舞者要求乐器当乐队两种期待，组合后新增的判断是同一架构无法同时满足低层控制与高层文化对应，这正是两种乐器本体论不兼容的表现。

简化作为掌握策略：Orun 与 Albino 都用减少映射参数与同时音色数来获得表达，呼应 Tanaka 的传感乐器技巧与 Magnusson 以约束为 virtuosity 条件的论点。Orun 甚至把陀螺仪推到阈值极限，把饱和与非线性抖动做成编舞乐句，被 Miguel 称为第 1 位 Giromin virtuoso。

技术限制作为体验塑造：Aishá的设备在最终演出中耗尽电量，呼应 Cook 电池总在最糟时刻耗尽的论断；Orun 感到快节奏下脚触发响应有点二值，呼应 Jack 等人对打击背景表演者延迟容忍更低的发现。特异处是弗雷沃与 coco 要求的节奏颗粒度超出当前融合管线，v0.5 偏连续流畅表达而弱于离散节奏精确触发。

采纳与未来想象：公演证实视觉可读的流畅映射比抽象不稳定映射更抓观众。Tomás 称部分时刻像科学展览，部分是艺术时刻。Paço 观众带着活态弗雷沃 virtuosity 期待而来，看到的却兼有 NIME 表演美学，双向适应都未完成。6 人均表达在不同条件下继续使用的意愿，Orun 想做整场演出，Albino 想用于音乐会展览，Miguel 已在职业中使用，Aishá需要技术支持，Tomás 要求简化界面。

下图四格肖像帮助核对人物与实践差异，是理解双重能力论的视觉锚点。

> **看图路径：** 1. 按顺时针辨认四位驻留艺术家与其手持乐器或身体姿态；2. 观察右上长笛演奏者手腕红色绑带即 Giromin 佩戴位置；3. 观察左下持贝林鲍者与右下腾空劈叉舞者的运动幅度差异；4. 对照馆内展墙背景，确认四张肖像均在同一文化机构拍摄

[![原论文 Figure 5：Photos of the artists who participated in the resi- dency.](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/nime-2026/491742c9baaa/figure-5.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/nime-2026/491742c9baaa/figure-5.png)

*论文图 5。原论文 Figure 5：“Photos of the artists who participated in the resi- dency. Clockwise from top left: Aishá Lourenço, Henrique Albino, Mestre Wilson, and Orun Santana (photos by Ju- nior Teles).”。*

左上 Aishá持 pandeiro 微笑，右上 Albino 持长笛手腕戴红色绑带传感，左下 Orun 持贝林鲍弓步，右下 Mestre Wilson 腾空劈叉。三者分别代表打击加电子、管乐加传感、舞蹈加乐器、纯弗雷沃舞蹈，证实后文 intra-active 设计产出的 4 种具体乐器各有身体基础。

### 哪些对照与失败条件支撑判断？技术链路表说明了什么？

论文没有消融实验，但提供了 3 类可比作失败条件的证据。第一是映射数量对照：参数越多创作时间越少，简化反而增加可掌握性，Orun 与 Albino 的成功都来自做减法。第二是运动类型对照：连续旋转类映射在实验音乐语境成立，在快节奏脚击传统中显得二值与迟滞，说明同一管线在不同具身要求下表现分化。第三是角色对照：职业 passista Wilson 几乎无法为既定映射修改手势，要求乐器像乐队一样回应，而双重具身的 Orun 能桥接两极，说明准入条件不在设备端而在人的双重素养。

| 来源证据 | 量化值一 | 量化值二 | 量化值三 | 量化值四 |
| --- | --- | --- | --- | --- |
| 来源句一 | 26 | 23 | 2026 | — |
| 来源句五 | 34 | 2024 | 13 | 2014；1；17；10.1145；3613904.3642171；443；448；35；14；2020 |

表前提出的问题是：表达失败应归因于哪一段？公平条件是同一 Wi-Fi OSC 与 Max Live 链路下比较连续与离散两条路径，指标方向是节奏精确性越高、重建成本越低越好。

表后解释是：主要收益是峰值检测补上了离散触发，使脚击传统可被表达；具体代价是 Wi-Fi 未做延迟抖动优化、Max 补丁经 MIDI 而非 Max for Live 与 Live 通信以避开学习曲线，集体改参时必须中断；未胜出项是连续调制路径在弗雷沃打击语境中未胜出，但论文不将其判为技术错误，而是架构预设与传统本体不匹配。原文未给出延迟毫秒数、电池续航分钟数与触发准确率，复现时需补测这三项才能做定量消融。

### architecture 的预设是什么？还有哪些未验证的推测？

讨论部分提炼 3 个贡献，需用报告、支持、可能 3 级语气区分。报告的是两种不兼容的乐器本体论：Wilson 期待乐器当音乐家，身体按弗雷沃动就应出弗雷沃音乐，是高层文化对应；Albino 把 3 个欧拉角分给 3 个振荡器频率，在空间中摆出和弦，身体成为精确控制器，动作为声音服务甚至被固定。前者要乐器前置，后者要身体前置。

支持的是架构携带意识形态假设：传感器输出数值流、参数排成可导航空间、控制从手势单向流向声音，这些继承自电信与模块合成的预设，把音乐理解为表征稳定、可手势控制、时间静态。弗雷沃的本体是声音与身体互产而非单向控制，因此不是换个映射就能解决，而是维度空间构造方式本身就预设了起点。作者引用 McPherson 与 Lepri、Morrison 与 McPherson 来支撑非中性论。

可能待验证的是双重精通即结构性准入：Orun 既是乐手又有身体掌控，能选脚击触发采样、手臂量合成 Brizolara Elemental 风声这类兼顾乐器性与身体性的简单自然参数。Albino 点评他是音乐家又有身体，双者合在一起就通了。论文认为这不是天赋而是结构条件，非洲散居传统中音乐身体不可分，恰好具备该条件。但这仍是基于 6 人的有限解释，未测量双重训练时长与表现的剂量关系，不能当因果承诺。

其他限制包括驻留仅两周，相对 Giromin 十四年与弗雷沃 119 年都极短；观众可读性判断基于 1 次过程展示而非成品巡演；技术上未报告延迟分布、丢包率与功耗曲线。论文的结论是距离没有被弥合，但距离变得多产 productive，用 confluence 而非 synthesis 来命名这种各为其河又同行的状态。

### 若要复现驻留，先做什么？需要哪些信息条件？

复现分艺术条件与技术条件两层。艺术层先做三件事：联系 Paço do Frevo 这类活态传统机构而非租用实验室，确认排练室与公演档期；邀请兼具音乐与舞蹈实践的艺术家至少各 1 人，并配备熟悉 Ableton 与 Max 的声音设计师；约定提议协商流程，即每次只改一个映射提议并留出重建具身状态的时间，避免连续改参。伦理上原文报告参与者同意具名与肖像用于非商业学术，口头录音同意访谈使用，全员获酬，尊重其时间与档期，复现时须重走知情同意与报酬流程。

技术层按链路重建：准备 ESP32 可穿戴 IMU 硬件，实现 Madgwick 融合输出连续姿态，实现带噪声门限与去抖窗口的峰值检测，对陀螺仪局部最大值发 MIDI，经 Wi-Fi OSC 进自研 Max 补丁再进 Ableton Live。关键超参数原文未给具体数值，包括噪声门限阈值、去抖毫秒窗、OSC 发送率、平滑滤波系数，复现时需先设保守值再与舞者共调，并记录每次改参的中断时长作为过程指标。建议首日即移植离散触发模块，否则打击传统无法表达。

数据层保留访谈维度：既往数字乐器经验、创作过程、技术评价、传统技术关系、未来使用想象，访谈后做反思性主题分析。代码开源、权重下载不适用本研究，系统可运行依赖 Max 补丁与 Live 工程的可获得性，原文未声明公开链接，复现需自写等价补丁。还需补的验证是延迟容忍测试、电池续航测试与观众可读性评分，否则不能承诺改善延迟或成本。

### 何时值得尝试 Giromin 式方案？论文特有的误解如何澄清？

当你的实践同时需要舞蹈表达与乐器 agency，且表演者本身具备音乐与身体双重素养时，值得尝试 DDMI 式方案。只做声音控制请用传统 DMI，只做动作分析请用交互舞蹈系统 IDS；只有当脚击、旋转、重心转移本身就是音乐材料时，才需要把峰值触发与连续调制放在同一可穿戴链路。弗雷沃与卡波耶拉、maracatu、coco 这类音乐身体不可分的传统结构上更接近该条件。

需要澄清的第一个误解是把 gambiarra 当作黑客美学。原文强调它不是工程意义的 hacking，也不是自由软件的意识形态节俭，而是在真实时间物料约束下让事情先跑起来的日常创造实践与认识论立场，代价是十二年累积决策在集体使用时集中爆发。第二个误解是把简化当功能缺失。驻留显示减少映射参数与音色数是掌握策略，virtuosity 恰从约束中长出。第 3 个误解是把未实现的 1 人弗雷沃乐队当失败。论文把它列为 4 种具体乐器之一：coco 节奏脚触发加腿倾角调深回声、手势萨克斯或贝林鲍效果器、Aishá脚角度调制的 eletropercuteria 套件、Wilson 尚未实现但已精确命名的 1 人乐队，每件都是设计行为。

最终判断用论文原话收束：驻留没有弥合 Giromin 与弗雷沃的距离，而是让距离变得多产。对初学者而言，可带走的方法是先保持传统具身不变做附加传感，再用提议协商循环让映射在身体中被检验，最后用六主题检查自己的摩擦属于哪一类，并明确写出架构预设与传统本体在何处不共享起点。

## 📐 原文公式与排版

以下展示论文原页中的数学表达区域，保留原始上下标、分式和符号排版。区域序号仅用于本文导航，不是论文公式编号。

另有 1 个候选区域因边界不明确或图片数量、尺寸限制未展开；请[查看完整论文](https://nime.org/proceedings/2026/nime2026_56.pdf)中的原始排版。

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。
- 评分规则：type-aware-v1
- 评分模型：muse-spark-1.3-contributor
- 评分请求协议：openai_responses

---

[← 返回 nime-2026 论文汇总](/posts/conference-nime-2026/)
