---
title: "DSP and the Metalevel: Clamps - an integrated environment for algorithmic composition and interactive realtime performance"
date: 2026-09-14
draft: false
description: "论文要解决高层作曲组织与底层实时 DSP 长期分离的问题，选择全部用 Common Lisp 重建调度、合成、记谱与界面，最强证据是同一 Lisp 映像内改 UGen 与预设并即时发声，代价是依赖 Incudine 与 CLOG 等外部生态且无受控定量评测。"
tags: ["软件工具", "信号处理", "实时处理", "音乐", "音乐生成"]
categories: ["icmc-2026 论文"]
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_paper_id: "conference:icmc:2026:conference-paper-id:paper-626"
paper_digest_source_kind: conference
paper_digest_conference_id: "icmc-2026"
paper_digest_conference_record_url: "https://icmc2026.ligeti-zentrum.de/proceedings/"
paper_digest_conference_pdf_url: "https://icmc2026.ligeti-zentrum.de/wp-content/uploads/2026/07/ICMC2026_proceedings_V2showcase.pdf"
paper_digest_api_reader_contract: "beginner-researcher-v3"
paper_digest_api_reader_article_sha256: "cb5c25f842e337dd85f5e466ad2b7b9991761e1a91fd0852cf5534f703953e58"
paper_digest_api_reader_plan_sha256: "93591c9d653886a83e3ae5c21e03403732420e691e39f6e139172085c82f48f1"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings-v4"
paper_digest_api_reader_source_bindings_sha256: "41bcbd834ebfa69f9bf80852bfd54db7e791b1e31a8d8ef95d9e2584992786ef"
paper_digest_api_reader_source_table_count: 2
paper_digest_api_reader_source_formula_count: 0
paper_digest_api_reader_structured_artifacts_sha256: "b16de5d3e9bf17bd29cdb9dafc1a704cfcaa7e8d13e0a2760f136820d88143ac"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity-v1"
paper_digest_api_reader_author_identity_sha256: "b24aa00474b9fe5315ab0e11246bda47ccbf031383d6cd2841a3b7291255510a"
paper_digest_api_reader_author_count: 1
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity-v1"
paper_digest_api_reader_resource_identity_sha256: "fc3601c6f375a3c0e8718e804606836806bc2688ea596973b3614561ec899746"
paper_digest_api_reader_resource_count: 4
paper_digest_api_reader_decision_projection: "api-reader-decision-projection-v2"
paper_digest_scoring_contract: "api-scoring-audit-v2"
paper_digest_taxonomy_contract: "paper-taxonomy-flat-tags-compat-v1"
paper_digest_taxonomy_selection_contract: "paper-taxonomy-selection-v1"
paper_digest_taxonomy_registry_version: "paper-taxonomy-v1"
paper_digest_taxonomy_registry_sha256: "15c82a567ce5a55dc1175684ed08b64c158558639d9c8fb822c9587ec32a8778"
paper_digest_taxonomy_concepts: [{"facet":"artifact","id":"artifact.software","label":"软件工具"},{"facet":"method","id":"method.signal-processing","label":"信号处理"},{"facet":"setting","id":"setting.real-time","label":"实时处理"},{"facet":"signal","id":"signal.music","label":"音乐"},{"facet":"task","id":"task.music-generation","label":"音乐生成"}]
paper_digest_primary_task: "音乐生成"
paper_digest_primary_method: "信号处理"
paper_digest_score: 7.0
paper_digest_rank_bucket: "前50%"
paper_digest_document_type: "系统技术报告"
paper_digest_conference_structure: replayable-pdf-layout-v1
---

# 📄 同一内存里的作曲与发声：Clamps 如何把 DSP 与元层缝在一起

> 英文题目：*DSP and the Metalevel: Clamps - an integrated environment for algorithmic composition and interactive realtime performance*

> 会议身份：`conference:icmc:2026:conference-paper-id:paper-626`


> ✅ 来源为官方会议 PDF；表格与 Figure 按原文证据绑定。PDF 公式以原页区域图片展示，未冒称作者原始 TeX。

> 会议来源：[官方记录](https://icmc2026.ligeti-zentrum.de/proceedings/) · [官方 PDF](https://icmc2026.ligeti-zentrum.de/wp-content/uploads/2026/07/ICMC2026_proceedings_V2showcase.pdf)

标签：#软件工具 #信号处理 #实时处理 #音乐 #音乐生成

评分：**7.0/10** | 创新 1.2/2 | 技术严谨 1.0/1.5 | 实验充分 0.6/1.5 | 清晰度 0.7/1 | 影响力 0.8/1.5 | 开源 1.2/1.5 | 可复现 0.3/0.5 | 工程/实践 1.2/1.5

排名：前50% | 文档类型：系统技术报告

## 👥 作者与机构

- Orm Finnendahl：机构信息未能从会议 PDF 纯文本可靠映射

## 📌 核心摘要

该工作处理算法作曲与交互式实时演出的统一问题，输入为符号作曲过程、图形事件与实时控制信号，输出为即时声音合成、符号记谱与可编辑乐谱表示，难点在于高层时间组织与底层采样级处理的语言分裂、编译重启与同步开销。方法第一步以Incudine在同一Lisp映像内以宏定义单元生成器、以函数定义合成器并即时编译运行，生成的音频图与调度器直接作为统一调度基础进入下一步。第二步以扩展后Common Music事件类统一MIDI、SFZ与颗粒事件的实时播放与可缩放矢量图形SVG导出，生成的SVG事件层坐标与透明度映射为音高时值与幅度并进入下一步。第三步以CLOG浏览器界面与Inkscape外部编辑器实现跨设备同步显示与往返编辑，使图形编辑结果回流为可播放与可记谱事件。在预设回放任务条件下，尾段间隔指标为1秒，高于首段间隔指标0.03秒。相对SuperCollider与Max等系统，其关键机制差异在于取消预编译插件与音频服务器分离，全部调度与合成均为宏与函数并共享内存，从而支持运行中改码即时听觉反馈，实际意义在于同一语言内贯通作曲记谱与演出。该结论适用边界仅限于作者演示的电声与器乐混合场景，尚未验证大规模复调稳定性与跨平台延迟边界，原文未披露训练、推理或部署成本，本工作不涉及神经网络训练。

## 🔗 开源与复现资源

- 代码相关资源：<https://codeberg.org/ormf/clamps> — 链接可访问（HTTP 200）
- 第三方资源：<https://incudine.sourceforge.net/> — 链接可访问（HTTP 200）
- 第三方资源：<https://github.com/rabbibotton/clog> — 链接可访问（HTTP 200）
- 第三方资源：<https://commonmusic.sourceforge.net/> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 输入是什么？为什么高层作曲与底层声音总是分家？

这篇论文的输入是作者长期面对的工作方式：作曲家一面要写音符、声部、节奏与算法过程，一面要调振荡器、滤波器、采样播放与空间化。目标是让这两面在同一个程序语言与同一内存空间里完成，并且在实时演出中也能改。前提信息必须保留：系统名为 Clamps，全称是 Common Lisp Aided Music Production System，构建在 Incudine 之上负责 DSP，用 CLOG 负责浏览器界面，并复用 Common Music、FOMUS 与 ATS 等包。输出不是一个新的合成算法，而是一个集成环境加一套可复述的扩展方法。

对刚入门的研究生，白话先行。底层 DSP 指直接处理采样点的计算，例如正弦振荡、包络、颗粒拉伸。元层指组织音乐材料的计算，例如把事件排成序列、用随机或马尔可夫过程生成节奏、用记谱约束决定声部进行。长期分离的意思是，前者往往用 C 或 C 加加写成预编译插件，后者用另一种脚本或图形语言组织，两边靠网络或文件交换数据，改一边要重启另一边。论文反复强调的痛点就来自这种分离：开发新声音模块要用系统之外的编辑器与编译器，控制速率与音频速率用不同对象，语言端与声音服务端还要处理同步与传输瓶颈。

本解读的输出安排如下：先讲相关路线与问题界定，再给出 Clamps 全景，然后逐个讲 SVG 工作台、浏览器界面、频谱浏览器、事件引擎与自定义事件 3 步法，接着说明本研究没有神经网络训练、真实计算是什么，再讲实验条件、已报告的现象、失败边界与复现步骤。教学例子会明确标为例子，不虚构数值。所有数量、版本与链接状态只按原文证据转述。

### 同输入同目标的既有路线为何没能缝合两层？

论文把既有系统分成两拨。第一拨是实时音频处理系统，包括 SuperCollider、Pure Data、Max 与 MSP、Csound、ChucK 与 FAUST。它们有成熟的 DSP 引擎，也有组织音乐材料、显示记谱或接入其他语言的机制。但原文指出，它们的领域专用语言起点是定义 DSP 代码，再把同一套层级时间技术推广到不同时间层，而不是先为音乐对象与算法过程设计精致工具。结果是高层结构与 DSP 之间仍有缝。

第二拨是以 Common Lisp 为基础的音乐系统，包括 OpenMusic、Common Music、CLM、OpusModus 与 Slippery Chicken。它们聚焦元层，最初为非实时工作设计，用于器乐写作、固定媒介或两者结合，DSP 渲染常交给 Csound 或 MIDI 合成器。OpenMusic 后来加了声音文件播放与外部处理，但 DSP 仍不在系统内完成，障碍只是从反方向出现。论文对 CLM 的定位也写得很克制：它聚焦 DSP，但以非实时方式进行。

同运行阶段的对照要小心。FAUST 被单独点名：它没有预编译插件与双速率分裂的那些限制，但目前仍偏重 DSP，高层工作与记谱的基础设施有限。也就是说，按同输入、同目标、同运行阶段比较，没有一个系统同时满足实时可改 DSP、统一语言内存空间、高层作曲与记谱集成这四项。Clamps 的选题正是补这个空位。相关工作的教训是，类别差异不能当成同条件胜负，例如拿非实时 CLM 的音质去比实时系统的延迟是没有意义的。

### 论文把障碍具体化为哪三个可操作的矛盾？

论文把障碍写成 3 个可检查的机制。第一是预编译代码。用 C 或 C 加加写的低层处理单元与系统本身语言不同范式，开发要用另一套编辑器与编译器，每改 1 次要重启整个系统，新模块的试验成本很高。原文还补充了设计者的假设：这类改动一般不由用户完成，新模块开发与使用系统在概念上是分离的。这解释了为什么用户觉得改声音底层如此笨重。

第二是控制速率与音频速率的区分。在 Pure Data 与 Max 与 MSP 中表现最明显，两种速率用不同的底层对象，桥接需要额外工作。第三是 DSP 服务端与语言客户端的分离。以 SuperCollider 为例，两端要用网络传输数据结构并处理时钟同步，容易出现瓶颈。3 个矛盾指向同一个后果：作曲思维被实现边界打断。

Incudine 的出现改变了前提。它几乎完全用 Common Lisp 写成，包括 DSP 引擎的构建块，处理循环按块进行，单元生成器是宏，合成器是函数。这意味着 DSP 代码的修改与重编译可以在合成器运行时发生，无需重启，且所有源码可用 1 次按键跳转查看。对研究生而言，关键判断是：只有当底层与高层同语言同内存，实时修改才不需要跨进程协议，这是 Clamps 敢于谈无缝体验的技术基础。

### Clamps 全景：一个样本如何从图形走到声音再回到图形？

先沿一个样本走完全程。假设研究者在 Inkscape 里画了一条横线，放在 Events 图层，设置了横纵坐标、颜色与透明度，并在一个属性标签里写下事件类型为 sfz。导入时 Clamps 只读 Events 层的元素，按类型字段分发到对应的导入方法，把横坐标映射为时间与时值，纵坐标映射为键号或移调，透明度映射为幅度，属性标签里的其他参数原样带入事件槽。事件进入 Common Music 的事件体系后，可以走实时流发声，也可以导出为 SVG 留档，还可以经由 FOMUS 走 LilyPond 后端生成记谱。

组件分工如下。Incudine 管声音与调度，CLOG 管浏览器界面，Common Music 管事件类、事件流与多种输出，SVG 管可视化工作台，ATS 管频谱分析数据的重合成，FOMUS 管记谱约束。所有 DSP 例程、调度器与控制引擎都作为函数或宏运行在同一个 Lisp 映像里。改任何细节都可在实时运行时进行并立即听到，这是 Lisp 系统的典型体验。

为避免误解，需要区分 3 类输出。实时输出是经由 Incudine 流直接发声。SVG 输出是把事件写回可编辑的图形文件。记谱输出是经由 FOMUS 的 LilyPond 后端生成乐谱。三者共享同一批事件对象，只是写事件方法按输出类型分发。论文用较大篇幅证明这种统一接口是可扩展的：新合成器只需定义新事件类加对应的播放、导出与导入方法，就能与已有事件混排在同一 SVG 文档中。

### SVG 工作台：线条坐标如何变成可播放的音乐参数？

SVG 作为中央工作表格式是 Clamps 最不寻常的选择。理由写得很实际：开放、可解析、可扩展，浏览器可原生渲染，还可用层叠样式表与脚本修饰。Inkscape 提供成熟的图层、成组、可见性、选择与变换操作。Clamps 通过扩展 Common Music 的 SVG 输入输出类实现集成，为 MIDI、sfz 与 poolevt 事件类实现了导入导出方法，并允许用户用几行代码为电声项目定义专用事件类。

具体映射需要逐项核对。Clamps 的元素在 SVG 文件中是线对象即路径。导入时把坐标、描边颜色与不透明度交给事件类型的导入方法，由该方法决定如何填槽。已定义事件类型的约定是：横纵坐标用于键号与移调、时间与时值，不透明度用于幅度。事件类型分发靠每个 SVG 元素的属性标签里的类型字段，该字段还可编码该事件的其他定制参数。只有 Events 层的事件被导入，其他图层可放时间线、小节线、谱表背景、钢琴卷帘或注释而不影响播放。

为与 Clamps 无缝衔接，Inkscape 被插件扩展，可回放选中元素或用菜单与快捷键显示记谱视图。论文因此把 Inkscape 比作某种数字音频工作站，也提到与 OpenMusic 中 Maquette 概念相似但不同，因为它借助了通用的开源图形格式与完整外部图形程序的编辑能力。

下面先看 Inkscape 主界面的像素，再解释图层与谱表弹窗的对应关系。

> **看图路径：** 1. 先看横向时间网格与纵向音高网格构成的主工作区，再看不同颜色横线代表的事件声部；2. 再看顶部叠加的小谱表窗口，确认图形选择与五线谱显示的对应关系；3. 最后看右侧图层列表中 Events 层与其他背景层的分离，确认只有该层参与导入播放

[![原论文 Figure 1：Example of the SVG display in Inkscape.](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/icmc-2026/3c4d6b113599/figure-1.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/icmc-2026/3c4d6b113599/figure-1.png)

*论文图 1。原论文 Figure 1：“Example of the SVG display in Inkscape. The selected events can be played back and displayed as a score as shown in the upper part using custom Inkscape extensions.”。*

上图显示横向小节网格上叠加了多声部彩色横线，顶部有一个五线谱小窗，右侧是图层与对象列表。导读时应确认三件事：主区横线是 Events 层的可播放对象，顶部谱表是选中事件的记谱视图，右侧列表中 Events 与其他背景层的开关决定了导入时只取可播放层。解释时要注意，横线的位置长度与透明度不是装饰，而是时间、音高与力度的编码，改图即改音乐数据。图注还说明选中事件可回放并显示为谱表，这正是图形编辑与音乐语义的缝合点。

**DSP × 元层：** DSP 负责逐采样或逐块计算声音信号，元层负责组织音符、声部、时间结构与算法过程，二者搭配的理由是作曲家既要改声音质地又要改结构走向，Clamps 把它们放进同一个 Lisp 映像与内存空间，新增作用是改底层合成代码不必重启系统，高层事件可直接调用底层函数并立即听到结果。

### 浏览器界面与频谱浏览器：参数同步与可听可视如何实现？

Common Lisp 长期缺乏稳定的图形界面绑定，OpenMusic 靠专有 LispWorks 自带工具包绕过。Clamps 选择 2020 年末起由 David Botton 开发的 CLOG 框架，用网页技术在标准浏览器中显示界面。优势有三：界面与应用分离，手机平板无需安装额外软件即可控制；多设备显示同步 straightforward，多演奏者可共享同一台机器；浏览器的渲染与程序逻辑可分担资源，减轻音频引擎负担。

Clamps 为音频应用补了常用部件，包括滑杆、多滑杆、按钮、数字框、单选钮、电平表与 SVG 显示，并用类似 React 或 Vue 的声明式语法，以引用对象、计算与观察函数管理同步。基础设施包括 NanoKontrol2、FaderFox 与 Asparion 等 MIDI 与 OSC 控制器，以及手机运动控制器的模板，可作为其他控制器的蓝本。音频输入输出电平表、SVG 播放器与 ATS 播放器在启动时即可访问。

下面先看 728 参数同步界面的像素，再解释多浏览器共享状态的含义。

> **看图路径：** 1. 先沿大窗口逐行比较多组多滑杆的排布，确认 728 个参数是分区管理的；2. 再看左下与右下两个浏览器小窗口，确认同一状态在不同排序下同步显示；3. 最后观察颜色分组与表头，确认这是声反馈乐器的集体表演控制界面

[![原论文 Figure 4：Custom GUI for the control of 728 parameters of a custom electroacoustic instrument based on…](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/icmc-2026/3c4d6b113599/figure-4.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/icmc-2026/3c4d6b113599/figure-4.png)

*论文图 4。原论文 Figure 4：“Custom GUI for the control of 728 parameters of a custom electroacoustic instrument based on acoustical feedback.”。*

上图大窗口是多组多滑杆矩阵，左下与右下是两个浏览器小窗口，显示同一状态的不同排序。导读时应逐区确认：大矩阵按模块分区管理大量参数，小窗口证明排序可变但数值同步。解释时要强调，所有浏览器在任何时刻共享同步的参数状态，这是集体表演的技术前提，而非简单的界面复制。图注明确这是基于声反馈的电声乐器，参数规模达到 728 个，同步机制是关键。

频谱浏览器是另一个独特功能。类似 SPEAR，任意声音文件可用 ATS 分析，峰值组织成独立轨迹。ATS 由 Juan Pampin 在 1990 年代末开发，除正弦分量还分析残差信号并用染色噪声重合成。与 SPEAR 不同，Clamps 在浏览器中显示正弦分量的传统视图，鼠标可在频域遍历并实时听到光标处声音，滚轮限制频率范围，对比滑杆调节选中区透明度即幅度阈值，低于阈值的分量不合成。任何用这些控件生成的声音可渲染为记谱显示，显示和弦或带 MIDI 音分与分贝标注的琶音，还可导出为 SVG 再用 Inkscape 处理。

下面再看实时 FFT 探索器的像素，确认鼠标区域与阈值的可视编码。

> **看图路径：** 1. 先看中央白色频谱区横向蓝色分量线与红色时间线，确认频率随纵轴展开；2. 再看中央深蓝色竖矩形，确认鼠标控制的回放区域位置与宽度；3. 最后看底部按钮行与右侧记谱小窗，确认选中区域可转为和弦显示与 SVG 导出

[![原论文 Figure 3：Example of the interactive realtime FFT explorer of Clamps: The position of the vertical blue…](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/icmc-2026/3c4d6b113599/figure-3.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/icmc-2026/3c4d6b113599/figure-3.png)

*论文图 3。原论文 Figure 3：“Example of the interactive realtime FFT explorer of Clamps: The position of the vertical blue rectangle in the FFT display is controlled by the mouse and specifies the region for…”。*

上图中央白色区有多条横向蓝色分量线，中间有一条红色时间线与深蓝色竖矩形，左侧是电平表，右侧是记谱与 SVG 播放小窗，底部是按钮行。导读时应确认：竖矩形位置由鼠标控制，决定回放区域，其不透明度定义幅度阈值。解释时要指出，横线是 ATS 轨迹的可视化，竖矩形是可听选择的门限，两者交集决定合成与导出的事件集合，右侧谱表即该集合的记谱投影。

**Incudine × CLOG：** Incudine 负责音频调度、MIDI 与 OSC 支持以及 UGen 与 Synth 的实时编译执行，CLOG 负责把界面渲染在网页浏览器中，分工是音频引擎保证时间与信号正确，浏览器保证跨设备显示与交互，搭配理由是两者都可用 Common Lisp 驱动而无需切换语言，组合后形成音频在本地高效运行、控制与显示可分布到手机与平板并保持同步的格局。

### 事件引擎：sfz 微分音与 pool 颗粒各解决什么？

sfz 是一种声音字体格式，Clamps 用内部采样播放器原生支持。直接动机有两个：一是避免依赖外部 MIDI 软件合成器，二是突破 MIDI 在微分音复音上的限制。OpenMusic 用多 MIDI 通道调音绕行，但当小音程内同时出现大量声音时很快触顶，这在频谱音乐的高泛音中很常见。用 sfz 事件，同时微分音声部数只受中央处理器速度限制，原文报告在标准笔记本上远超 500 个。加法合成可用正弦波表 sfz。论文还给出用 50 个微分音长笛采样做实时播放、SVG 导出与可视化的代码例子，浏览器中的交互式 SVG 播放器显示在代码下方。

poolevt 是加到 Common Music 的另一事件类型，用基于采样的颗粒合成做实时输出，参数包括所用采样、键号、幅度、拉伸、起音与释音时间、缓冲区起止位置、颗粒窗宽、声像与输出通道。播放时用领域专用语言写预设，代码显示在专用 Emacs 文本缓冲窗。预设类似 Csound 的乐器定义或 SuperCollider 的合成器定义，但工作在事件调度层而非采样层。每个 poolevt 的全部参数由专用函数计算，另有 dtime 函数计算到下一事件的增量。

预设执行依赖时间递归。启动时给定总时长，所有参数函数在词法上下文中被调用，绑定符号包括归一化总时间进程、当前事件计数、到下一事件的时间，以及启动时类似 let 绑定的可选量，类似 Csound 乐器的初始化参数。若总时长设为空，预设无限运行直到专用变量叫停，此时进程值取 0。函数可在 Emacs 缓冲中改写并即时重编译，运行时立即生效，结合插值函数与 MIDI 控制器可实现精简而复杂的参数轨迹。预设存在结构体中，含源码与编译后的增量与参数函数，可存数组热切换，会话间可存盘重载。实时演出还可在符号层捕获为 SVG，稍后重播、可视化与算法处理。

**SVG × Common Music 事件：** SVG 负责可视、可编辑、可分层的图形表示，Common Music 事件负责可播放、可导出、可算法变换的音乐对象，分工是前者管画与选，后者管算与播，搭配理由是 Inkscape 提供成熟的图层与变形操作而 Common Music 提供统一的事件流接口，组合后线条坐标与透明度直接成为音高、时间、时值与力度的载体，双向导入导出形成工作台闭环。

下面用两张原文报告的数量表固定可复述的事实，避免把演示当成评测。第一张表聚焦系统报告的规模与文档量，比较问题是这些数字各自在什么条件下成立。第二张表聚焦 poolplayer 示例的调度参数，比较问题是同一预设调用中各参数如何随时间变化。

| 条件 | 指标 | 基线 | 本方法 | 比较对象 |
| --- | --- | --- | --- | --- |
| 声反馈电声乐器控制 | 参数总数 | 无 | 728 | 多浏览器同步滑杆矩阵 |
| 标准笔记本实时 | 同时微分音声部数 | MIDI 多通道易触顶 | 超过 500 | sfz 事件 |
| 长笛微分音演示 | 采样数 | 无 | 50 | 实时播放加 SVG 导出 |
| 在线帮助 | 词典条目数 | 无 | 约 600 | 函数变量结构体与类 |
| 在线帮助积累 | 持续年份 | 无 | 超过 60 | Lisp 生态 |

上表后需要解释主要收益与具体代价。收益是数量级上的可行性：728 参数同步证明浏览器界面可承载大型乐器，超过 500 声部证明 sfz 路径绕开了 MIDI 通道调音的天花板，50 采样演示证明从播放到 SVG 可视化是同一批事件。代价与限制是，这些都是报告值而非受控对比：728 未给延迟与冲突解决数据，500 取决于中央处理器与具体笔记本，50 只是功能演示，约 600 条目是文档规模而非质量评估。未胜出项是 MIDI 路径在微分音密集复音下很快触顶，论文明确保留 MIDI 支持但不推荐用于该场景。

| 参数 | 起始 | 结束或范围 | 调制来源 | 单位或说明 |
| --- | --- | --- | --- | --- |
| 事件增量 | 0.03 | 1 | 归一化进程插值 | 秒 |
| 移调 | -5 | 5 | 随机加 MIDI 控制器 0 到 10 | 半音 |
| 运行模式 | 定长 | 无限 | 总时长为空则持续 | 需专用变量停止 |

上表后同样要讲机制与边界。poolplayer 每次递归计算一个事件的参数，增量从 0.03 减速到 1 秒形成稀疏化，移调在负 5 到正 5 半音随机并叠加控制器偏移，幅度从负 32 分贝在 0.1 到 0.7 进程内升到负 6 到 6 分贝随机再落回。支持的判断是，短代码可表达复杂轨迹且可在演出中热改。限制是，这只是示例调用的数值，不是普适最优节奏或力度曲线，也未报告调度抖动与音频负载。无限运行模式提供了持续音景的手段，但停止依赖专用变量，误操作可能导致无法预期地延长演出。

### 没有神经网络训练时，真正的计算与编译发生在哪里？

本研究没有训练任何神经网络，也没有梯度、损失、冻结与更新、监督来源与重置时机的报告。该节必须明确这一点，再讲实际发生的计算。真实计算有 3 类：DSP 编译执行、事件调度与分析重合成。DSP 侧，define-vug 接受名称、参数、可选文档与默认值加主体，dsp 感叹号宏展开单元生成器代码并返回编译后的二进制 Lisp 函数，播放时调用。单元生成器是宏，合成器是函数，处理循环按块进行，关键数据结构用可从 Lisp 直接访问的外部 C 数组，类型声明与避免垃圾回收是保证速度的手段。

事件调度侧，digest-form-to-preset 宏把预设定义编译为以进程、序号、增量等为参数的函数并存数组，演出时按需召回。preset-play 用递归逐事件求值，参数函数在词法上下文中调用。分析侧，ATS 把声音文件分解为正弦轨迹加残差，Clamps 的 ats-cuda 包用 Incudine 重写合成引擎以实现实时，ats-cuda-display 提供频域交互。

缺项必须点名：论文未报告块大小、采样率、缓冲区数量、调度提前量、CPU 占用与音频延迟，也未报告编译耗时与热替换的最坏中断时间。因此不能从参数冻结推定输出确定，也不能把无训练等同于确定性求解。实时系统的不确定性来自调度、垃圾回收与系统负载，而非模型权重。

### 在什么软硬件与数据条件下验证集成可行？

论文没有传统的数据集划分、采样、指标聚合与统计检验，而是一系列功能存在性验证加规模报告。实验条件按原文交代。软件栈包括 Common Music 2.12 的 Common Lisp 版本、FOMUS 的 LilyPond 后端、ATS 的 Common Lisp 分析代码、CLOG 网页框架、Inkscape 加定制插件、Emacs 加预设缓冲。硬件只定性提及标准笔记本与无线路由器连接的手机平板，未给具体型号、操作系统版本、音频接口与驱动。

数据与协议方面，SVG 工作台用 Events 层与其他背景层分离，导入时按类型字段分发，属性标签携带定制参数。FFT 探索用任意声音文件经 ATS 分析，鼠标位置、滚轮范围与对比滑杆阈值是交互协议。poolplayer 用预加载采样列表与 MIDI 控制器作为输入，Emacs 缓冲改写即重编译是操作协议。在线文档从 Lisp 文档字符串经 org 中转再经 Emacs Lisp 多页导出为 HTML，用内部网页服务器显示，索引约 600 条目，可从源码一键跳转。

成本与预算未量化。训练资源不适用，推理开销、输出帧率与实际延迟分别缺失。总体趋势是功能打通，但每组每步都成立的证据不足。复现时应先固定采样率、块大小与音频通道数，再记录调度日志，否则无法比较延迟。

### 主结果：哪些集成动作被证明可行？

主结果是集成动作的可行性，而非指标超越。第一，SVG 双向工作流打通：线对象坐标、颜色与透明度可导入为事件槽，事件可导出为 SVG 并在 Inkscape 中编辑回导，记谱视图与回放插件可用。图 1 与图 2 分别从整体与属性槽细节证明了这一点。第二，浏览器多端同步打通：728 参数乐器的定制界面可在多浏览器共享同步状态，支持集体表演，NanoKontrol2 等模板可复用。第三，频谱交互打通：FFT 显示、实时重合成、和弦与琶音记谱、SVG 导出连为一体。第四，微分音与颗粒引擎打通：sfz 在标准笔记本上超过 500 同时声部，poolevt 预设支持热改与热切换，演出可捕获为 SVG。

比较必须保留原文实际可运行的策略。可部署的是 sfz 内部采样播放器、pool 颗粒合成器、SVG 导入导出、浏览器同步界面。搜索最优、oracle 或事后最优值在本文不存在，不能用演示中的好听片段代替可部署收益。支持的判断限于存在性与规模报告，不支持音质更好、延迟更低或作曲效率更高的因果结论。

**ATS 分析 × 实时重合成：** ATS 分析负责把声音文件分解为正弦分量轨迹加残差噪声的频域描述，实时重合成负责按鼠标位置、频率范围与幅度阈值重新发声，分工是前者提供可 탐색的频谱数据，后者提供可听可记谱的交互，搭配理由是只看频谱图难以判断听感，组合后拖动即听、选中即导出为和弦或琶音记谱与 SVG，分析与作曲动作连在一起。

### 自定义事件三步法：拿掉哪一步会失去什么？

论文用正弦滑音例子给出扩展的最小闭环，可视为消融式对照。第一步定义 DSP：写 UGen 与合成器。UGen 定义非强制，若已存在可内联在 dsp 定义中，示例仍给出以证明用 Common Lisp 定义新 UGen 无需切换到 C 或 C 加加的定义编译重启循环。dsp 定义展开宏代码并返回可调用的编译函数，关键词可指定声图分组，类似 SuperCollider。第二步定义 Common Music 类与写事件方法：defobject 定义事件类与槽，write-event 按事件类型与输出类型分发，分别为实时流与 SVG 文件写方法。

至此事件可创建、播放与导出，50 个滑音事件的 SVG 即例证。第 3 步定义导入回调：解析 SVG 属性为属性列表，含时间、时值、键号、幅度与属性标签全部字段，用 add-svg-assoc 函数按类型安装回调。

对照含义是：缺 DSP 则无声，缺类与写方法则无法进入统一事件流，缺导入回调则 SVG 改动回不来。若要完整记谱集成，还需为 fomus-file 输出加写方法。论文未做拿掉某步的定量退化实验，因此不能写拿掉后必然怎样，只能按机制说明功能缺失。失败条件包括属性标签类型拼写错误导致分发失败、图层放错导致导入忽略、输出通道与总线不匹配导致无声，这些都应在复现时逐项检查。

### 边界与未验证项：哪些承诺不能做？

缺失证据不是技术错误，但必须明确边界。第一，无受控评测：没有与 SuperCollider、Max、Pure Data 在同任务同硬件下的延迟、抖动、CPU 占用或用户效率对比，不能承诺改善这些量。第二，规模数字依赖条件：超过 500 声部受中央处理器限制，728 参数同步未报告冲突与延迟，50 采样演示未报告内存与加载时间。第三，生态依赖：Incudine 自 2013 年由 Tito Latini 维护，CLOG 自 2020 年末开发，Common Music 止于 2014 年的 2.12 版本，FOMUS 只支持 LilyPond 后端，ATS 重合成刚用 Incudine 重写，任一环节的版本漂移都可能影响可运行性。第四，平台细节缺失：块大小大于 1 时的适配、外部 C 数组管理、OSX 的 OSC 兼容层、Jack 与 MIDI 胶水代码的极小 C 足迹，这些都提示跨平台仍需动手。

相关性不是因果。文档约 600 条目与源码透明带来理解便利，但不等于作曲质量提升。浏览器分担渲染减轻音频引擎负担的说法合理，但未测量帧率与音频中断的关系。总体趋势是灵活可扩展，但每组每步都成立的证据不足，演出前必须做负载测试。

### 复现先做什么？按什么顺序点亮系统？

复现顺序应按学习依赖：先点亮声音，再点亮事件，再点亮图形与界面。第一步准备 Common Lisp 实现与 Emacs 加 SLY，获取 Clamps 仓库链接，检查本次可达状态。资源状态是正文开源声明的唯一依据：available 才可写当前可用，已确认 Clamps 仓库、Incudine、CLOG 与 Common Music 链接本次可达。第二步点亮 Incudine，确认 MIDI 与 OSC 支持、块处理与外部 C 数组可用，运行自带示例合成器并测试运行时重编译。第 3 步点亮 Common Music 2.12 与 FOMUS 的 LilyPond 后端，确认事件流与记谱导出。第四步点亮 CLOG，启动内部网页服务器，用桌面浏览器打开滑杆、电平表与 SVG 播放器，再用手机经无线路由器接入验证同步。

第五步跑最小自定义事件。正弦滑音 3 步走：先定义 sinegliss 单元与合成器并播放一个音，再定义事件类与实时加 SVG 写方法并导出 50 个事件，最后定义导入回调并在 Inkscape 中改端点与透明度后回导。第六步跑 poolplayer 预设：加载采样池，调用总时长 4.5 秒的示例，观察增量从 0.03 到 1 秒、移调负 5 到正 5 半音、幅度从负 32 分贝经负 6 到 6 分贝再回去的轨迹，并练习在 Emacs 缓冲中热改。第七步跑 FFT 探索：用已知声音文件做 ATS 分析，拖动竖矩形并调节阈值，导出和弦与 SVG。关键超参数与信息条件要记录：采样率、块大小、通道数、阈值、频率范围、控制器编号，这些是复现他人结果的前提。

常见误解是把 SVG 当成纯显示。实际上它是事件的有损投影：只有 Events 层被导入，颜色与透明度的映射由事件类决定，背景层不影响播放。另一个误解是把浏览器界面当成远程桌面。它是状态同步的声明式界面，交互在任意设备发起都会反映到所有设备，断网或时钟不同步会破坏集体表演。

### 何时值得尝试 Clamps？还需补哪项验证？

当任务同时需要实时可改的 DSP、高层算法作曲与记谱，并且团队愿意用 Common Lisp 工作时值得尝试。典型场景包括电声乐器的长期打磨、频谱音乐的微分音密集复音、图形与记谱双修的工作坊、需要多演奏者共享参数的集体表演。只做固定媒介混音或只用现成插件演出，则无需承担该生态的学习成本。

还需补的验证很具体：同硬件下与 SuperCollider 或 Max 的往返延迟与抖动对比，大参数同步下的冲突与延迟测量，500 声部时的 CPU 与欠载统计，热重编译的最坏中断时间，以及文档覆盖率与新手任务完成时间。补上这些，才能把存在性证明升级为可部署收益。

收束判断是：Clamps 报告显示，全部用 Lisp 重建可以消除语言与进程边界，SVG、浏览器与事件流的组合让分析、作曲、记谱与演出在同一批对象上操作。支持该判断的是 3 步扩展法与多处打通演示，可能但待验证的是效率与稳定性收益。复现者应从最小滑音闭环起步，逐步放大到 728 参数与 500 声部的规模，每步记录条件与代价。

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。
- 评分规则：type-aware-v1
- 评分模型：muse-spark-1.3-contributor
- 评分请求协议：openai_responses

---

[← 返回 icmc-2026 论文汇总](/posts/conference-icmc-2026/)
