---
title: "Coypu and Phausto: accessible live sound coding with Pharo ."
date: 2026-09-13
draft: false
description: "论文把 Pharo 集成开发环境变成不停机的现场作曲工作站，用 Coypu 做节奏旋律型调度与事件分发、用 Phausto 内嵌 Faust 编译器做本地合成，并报告了固定十六分音符网格、五类演奏器与 70% 库覆盖等条件与代价。"
tags: ["开源工具", "信号处理", "音乐", "音乐生成"]
categories: ["nime-2026 论文"]
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_paper_id: "conference:nime:2026:conference-paper-id:nime2026_42"
paper_digest_source_kind: conference
paper_digest_conference_id: "nime-2026"
paper_digest_conference_record_url: "https://nime.org/proc/nime2026_42/index.html"
paper_digest_conference_pdf_url: "https://nime.org/proceedings/2026/nime2026_42.pdf"
paper_digest_api_reader_contract: "beginner-researcher-v3"
paper_digest_api_reader_article_sha256: "21343933129044b8692867794b00a5291f2299547a01a135ee1e7f2d5f2f3450"
paper_digest_api_reader_plan_sha256: "6d4068178e0dad0179bf783525b71938dd38355d86765103aee29bd027eee9d5"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings-v4"
paper_digest_api_reader_source_bindings_sha256: "b2722c30226dd68f6808610810df90bd7a7085eba189db997457c1ce3d74cd57"
paper_digest_api_reader_source_table_count: 3
paper_digest_api_reader_source_formula_count: 0
paper_digest_api_reader_structured_artifacts_sha256: "cb3300754376c4e2cf1d2917424237792f2890482e5afc1db500a08d9cf29747"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity-v1"
paper_digest_api_reader_author_identity_sha256: "4b1658784b0c4b6583ac020f568122025e704034fb552e49192253102b120c3f"
paper_digest_api_reader_author_count: 3
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity-v1"
paper_digest_api_reader_resource_identity_sha256: "152b8278f351f21e6b58969aef1cc1d9827884feae12197a1391b39277581623"
paper_digest_api_reader_resource_count: 12
paper_digest_api_reader_decision_projection: "api-reader-decision-projection-v2"
paper_digest_scoring_contract: "api-scoring-audit-v2"
paper_digest_taxonomy_contract: "paper-taxonomy-flat-tags-compat-v1"
paper_digest_taxonomy_selection_contract: "paper-taxonomy-selection-v1"
paper_digest_taxonomy_registry_version: "paper-taxonomy-v1"
paper_digest_taxonomy_registry_sha256: "15c82a567ce5a55dc1175684ed08b64c158558639d9c8fb822c9587ec32a8778"
paper_digest_taxonomy_concepts: [{"facet":"artifact","id":"artifact.open-source-tool","label":"开源工具"},{"facet":"method","id":"method.signal-processing","label":"信号处理"},{"facet":"signal","id":"signal.music","label":"音乐"},{"facet":"task","id":"task.music-generation","label":"音乐生成"}]
paper_digest_primary_task: "音乐生成"
paper_digest_primary_method: "信号处理"
paper_digest_score: 6.5
paper_digest_rank_bucket: "前50%"
paper_digest_document_type: "系统技术报告"
paper_digest_conference_structure: replayable-pdf-layout-v1
---

# 📄 把 IDE 变成乐器：Coypu 管乐谱分发、Phausto 管合成发声

> 英文题目：*Coypu and Phausto: accessible live sound coding with Pharo .*

> 会议身份：`conference:nime:2026:conference-paper-id:nime2026_42`


> ✅ 来源为官方会议 PDF；表格与 Figure 按原文证据绑定。PDF 公式以原页区域图片展示，未冒称作者原始 TeX。

> 会议来源：[官方记录](https://nime.org/proc/nime2026_42/index.html) · [官方 PDF](https://nime.org/proceedings/2026/nime2026_42.pdf)

标签：#开源工具 #信号处理 #音乐 #音乐生成

评分：**6.5/10** | 创新 1.2/2 | 技术严谨 1.0/1.5 | 实验充分 0.5/1.5 | 清晰度 0.7/1 | 影响力 0.8/1.5 | 开源 1.2/1.5 | 可复现 0.1/0.5 | 工程/实践 1.0/1.5

排名：前50% | 文档类型：系统技术报告

## 👥 作者与机构

- Domenico Cipriani：机构信息未能从会议 PDF 纯文本可靠映射
- Sebastian Jordan Montaño：机构信息未能从会议 PDF 纯文本可靠映射
- Stéphane Ducasse：机构信息未能从会议 PDF 纯文本可靠映射

## 📌 核心摘要

该工作要解决在Pharo通用集成开发环境内直接进行现场作曲与数字信号处理编程的问题，输入为现场编写的节奏型、旋律与合成器补丁描述，输出为发往外部音频引擎或内嵌数字信号处理的定时开放声音控制与乐器数字接口事件及连续声音，难点在于通用语言延迟调度的定时抖动、音频实时性与初学者可理解性难以兼顾。Coypu先将多种简写记谱与欧几里得、随机游走等变换转换为带门限与参数数组的序列器并由统一演奏时钟调度。演奏对象收到播放消息后委托给演奏器，其分步钩子在不同子类中把事件翻译为开放声音控制、乐器数字接口或内嵌调用并控制哑音独奏与速度，该输出直接进入下一步。Phausto最后把面向对象单元生成器经Faust盒接口组合为信号链并编译为可运行数字信号处理，默认暴露界面控件与参数设置接口供演出时调节。相对SuperCollider与TidalCycles，关键差异在于全反射对象模型允许演出中用检查器、浏览器与实时调试器检查并改写乐器类与方法，使工程工具本身成为乐器界面。在比萨机器人节工作坊评测设置下，最高年龄参与者的年龄指标为60岁，高于最低年龄参与者的年龄指标11岁。其适用边界受限于固定十六分音符公共细分、无每序列器独立细分及尚不支持多音色与控制变化信息的乐器数字接口实现，复杂变换与大规模作品外推尚未验证。原文未披露训练、推理或部署成本。

## 🔗 开源与复现资源

- 代码相关资源：<https://github.com/lucretiomsp/Coypu> — 链接可访问（HTTP 200）
- 代码相关资源：<https://github.com/lucretiomsp/phausto> — 链接可访问（HTTP 200）
- 代码相关资源：<https://github.com/lucretiomsp/MasterLu> — 链接可访问（HTTP 200）
- 代码相关资源：<https://github.com/pharo-contributions/pharo-sound> — 链接可访问（HTTP 200）
- 第三方资源：<https://github.com/pharo-graphics/Bloc> — 链接可访问（HTTP 200）
- 第三方资源：<https://codeberg.org/musikinformatik/SuperDirt> — 链接可访问（HTTP 200）
- 第三方资源：<https://faustlibraries.grame.fr/> — 链接可访问（HTTP 200）
- 第三方资源：<https://mooc.pharo.org/> — 链接可访问（HTTP 200）
- 第三方资源：<https://advanced-design-mooc.pharo.org/> — 链接可访问（HTTP 200）
- 第三方资源：<https://days.pharo.org/index.html> — 链接可访问（HTTP 200）
- 第三方资源：<https://esug.org/> — 链接可访问（HTTP 200）
- 第三方资源：<https://iclc.toplap.org/> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 输入是什么？为什么 IDE 本身要成为乐器？

这篇论文的输入是现场编码表演者的连续操作：在演出不停止、不重启的前提下，一边改代码一边改变音乐与合成器。目标读者是刚进入音频领域的研究生，需要先分清 2 个任务。第一个任务是作曲时间控制：何时触发哪个乐器的哪个音高与参数。第二个任务是声音生成：振荡、滤波、混响等数字信号处理如何算出采样。

论文选择 Pharo 的原因写得很具体。白话说，Pharo 是一种纯面向对象、自身用自身写成的 Smalltalk 方言，语法极小，对象之间只靠发送消息协作。英文名是 Pharo programming language，配套的集成开发环境提供演奏区、系统浏览器、检查器、实时调试器与 Git 客户端。作者强调可检查性，意思是演出用的工具本身也能在运行时被打开、查看内部状态、改方法并立即继续跑，这与把语言当黑盒用是相反的。

必须保留的关键信息是分工。Coypu 是乐谱侧，负责创建、变换与播放音乐型，把事件发给外部或内部音频服务器。Phausto 是乐队侧接口，负责在 Pharo 内拼合成器与效果，靠内嵌的 Faust 编译器真正算声。两段代码仓库当前可用，已公开为 Coypu 与 Phausto，另有教学包 MasterLu。本文不训练神经网络，也不报告音频质量分数，后文所有数字只讲结构条件与过程记录。

### 已有路线在解决什么？本文补哪一块？

同输入、同目标的路线包括 SuperCollider、TidalCycles、Sonic Pi 与 Strudel。SuperCollider 提供完整的合成引擎与成熟语言，TidalCycles 擅长基于 Haskell 的型变换与简洁迷你记法，Sonic Pi 偏教育入口，Strudel 把类 Tidal 的型带到浏览器并用 Web Audio 发声。论文明确说不替换它们，而是补 Pharo 生态特有的三点。

第一是完全反射。白话说，运行时能查能改，演出工具本身也是可学习对象，支持建构式学习。第二是富集成开发环境。调试器、检查器、系统浏览器与版本控制是工程师日常工具，音乐人直接用同一套，有助于把音乐编程概念迁移到通用编程。第三是纯面向对象设计。鼓励小方法、委托、子类化与设计模式，代码模块化。

历史对照也按同运行阶段写。Dynabook 与 OPUS 说明 Smalltalk 很早就能做乐谱编辑，1985 年声音工具与 1987 年音乐工具包说明交互式编辑与乐谱处理可行，1991 年 Kyma 说明 Smalltalk 可支撑专业声音设计，但 Kyma 是闭源专有系统，需要专用音频处理单元，访问受限。论文的判断是：Kyma 好用但不能自定类与方法、反射被拿掉，难以检查扩展，因此转向免费开源的 Pharo。教学上作者准备了 Coypu 随带的演出脚本与 Phausto 的 MasterLu 互动课，并计划写覆盖型创作、现场表演与 DSP 搭建的开放手册。

### 要解决的两个技术问题是什么？难在哪里？

第一个问题是直观的节奏旋律领域专用语言加准时分发。系统要能写出易读的型，并以开放声音控制或乐器数字接口消息发给外部发声器。开放声音控制英文是 Open Sound Control，简称 OSC；乐器数字接口英文是 Musical Instrument Digital Interface，简称 MIDI。难点是 Pharo 的 Delay 调度能否把抖动压到可演出水平。抖动白话说就是该响的时间点左右漂移。

第二个问题是在 Pharo 内本地合成。当时 Pharo 继承的声音包文档少、只支持有限合成与效果，且语法冗长，不适合实时表达。难点是必须嵌入一个能按采样率算编译后声音的引擎。作者的做法是嵌入 Faust 编译器，用统一外部函数接口与之通信。统一外部函数接口英文是 Unified Foreign Function Interface，简称 uFFI。

举一个教学例子帮助理解分工，不代表论文实验。假设演奏者想让底鼓每 4 步响 1 次、军鼓用十六进制节奏、康加用世界节奏，Coypu 只决定第几步发门限与音符，真正出声的是远端 Pure Data 或本地 Faust 鼓机。若调度漂移大，听感就是鼓点摇晃；若合成接不上，听感就是无声或爆音。论文把这两件事拆成两个库，正是为了分别压住时间精度与本地算声。

### 全景：从一行代码到声音经过哪些部件？

沿一个样本走完全程。演奏者在演奏区写下一行把数组变成序列并送给某乐器的代码，Performance 把该序列存为 Sequencer。按下播放后，Performance 按共享节拍步进轮询所有 Sequencer，遇到门限就把当前参数值交给所绑定的 Performer，Performer 再按 OSC、MIDI 或内嵌 Faust 调用发出去。若是 Phausto 音色，信号链早已由单元生成器连好并编译为 DSP，收到音符与门限即按时长发声。

这张 IDE 截图的教学价值在于证明排练与演出在同一窗口完成，左手改代码、右手看状态，不需要切到外部宿主。图中可见多个重叠窗口不是装饰，而是方法全景的证据：代码、类结构、对象状态、调试栈与推子可以同屏互相指认。

> **看图路径：** 1. 先看左侧 Playground 中的演出脚本与右侧系统浏览器中的类包结构；2. 再看下方调试器与检查器是否与演出代码同屏共存；3. 最后看底部混音器推子条，确认界面与代码在同一 IDE 内

[![原论文 Figure 1：Pharo14 IDE with the most relevant tool for live coding music, including a mixer UI made with Bloc.](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/nime-2026/19330b3e4414/figure-1.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/nime-2026/19330b3e4414/figure-1.png)

*论文图 1。原论文 Figure 1：“Pharo14 IDE with the most relevant tool for live coding music, including a mixer UI made with Bloc.”。*

像素可见的是深色 Pharo 窗口群。左侧有代码编辑区与演出脚本行，中间是包与类的树形浏览器，右侧是检查器显示实例变量，底部叠着一排推子的混音器界面，下方还有调试栈窗口。这说明所谓工作站不是比喻，而是指写谱、查对象、修方法、调音量都在同一镜像内完成。初学者复述时应说出顺序：先在演奏区构造序列，再绑定 Performer 决定去向，最后播放并用检查器与推子验证状态。

### Coypu 如何存谱？Performance 与 Sequencer 怎样推进？

Coypu 假设自己是乐谱，音频服务器是乐队。核心单例是 Performance，全局只有一个实例，内含数量不限的 Sequencer。每个 Sequencer 对应一件乐器，长度可以不同，存触发、音符与任意合成参数。参数值可以是不同长度的数组，播放时只在遇到门限才推进下标并发送当前值，因此节奏与音色变化来自序列结构与长度错位，而不是多个时钟。当前实现对所有 Sequencer 使用固定的十六分音符公共细分，未来才考虑每轨独立细分。

**Performance × Performer：** Performance 负责存乐谱，即持有多个 Sequencer 并按统一节拍步进查询门限与参数；Performer 负责定发声去向，即把 play 委托为具体协议的 playEventAt:in:实现。二者搭配的理由是沿用 Csound 的乐谱与乐队分离，组合后新增的作用是同一套型可以不改写法切换本地 8000 端口、SuperDirt、Kyma、MIDI 或内嵌 Faust。

下图把委托关系画成类图，阅读时先看横向委托，再看纵向分发。Performance 收到播放消息并不自己算声，而是交给所绑定的 Performer，Performer 的子类决定协议与目标。

> **看图路径：** 1. 先沿 Performance 到 Performer 的横向箭头看委托方向；2. 再数 Performer 下方五个子类的名字与各自 play；3. 最后对照左侧 Performance 的方法名，确认 mute 与 solo 位置

[![原论文 Figure 2：Coypu delegates event dispatch to the Performer assigned to a given Performance.](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/nime-2026/19330b3e4414/figure-2.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/nime-2026/19330b3e4414/figure-2.png)

*论文图 2。原论文 Figure 2：“Coypu delegates event dispatch to the Performer assigned to a given Performance. The specific Performer subclass determines the audio server.”。*

像素可见左侧 Performance 列出创建单例、绑定演奏器、播放停止、改速、前进步数、存取、静音独奏等方法，中间 Performer 只有播放接口，下方并列 5 个子类分别处理本地 OSC、MIDI、内嵌 Faust、SuperDirt 与 Kyma。教学要点是新增一种发声去向只需加一个 Performer 子类并实现事件钩子，不必改乐谱写法。乐器侧约定至少处理门限与音符两条消息，扩展参数按乐器名加参数名寻址。

**Sequencer × 门限：** Sequencer 负责存一轨乐器的触发序列与参数数组，门限负责决定参数下标何时推进并向乐器发送当前值。二者搭配的理由是只用一个共享时钟也能长出多节奏变化，组合后新增的作用是不同长度数组在门限处错位推进，形成复节拍感而不需要多时钟。

为核对公平条件与结构代价，先提出比较问题：在同一公共细分下，不同写法能否表达同一音乐意图且保持可比。论文提出图标性、经济性与语义等价三原则：代码形状像音乐结构，按键尽量少，同一意图允许多种等价写法。下表整理原文给出的结构常量，读表时注意单位与数量不可混用。

| 条件 | 指标 | 本方法取值 | 比较对象 | 备注 |
| --- | --- | --- | --- | --- |
| --- | --- | --- | --- | --- |
| 所有 Sequencer 共享时钟 | 节拍细分 | 1/16th notes | 未来每轨独立细分 | 当前固定 |
| 事件去向分支 | 子类数量 | 5 | 本地、MIDI、Faust、SuperDirt、Kyma | 各自实现播放 |
| 本地 OSC 目标 | 端口 | 8000 | 同机音频服务器 | 如 Pure Data 等 |

表后需要说清收益与代价。固定公共细分的收益是实现简单、轮询逻辑统一，初学者容易推演下一步查哪一轨；代价是复杂复节拍必须靠不同长度数组错位来模拟，不能给每轨真正的独立速度。5 个演奏器的收益是同一乐谱可搬家，代价是乐器侧必须遵守命名约定，否则门限到了也无声。端口 8000 只是本地默认约定，不是性能指标，换端口不改变音乐结果。

### Phausto 如何发声？单元、连接与界面怎样生成？

Phausto 是轻量声音生成与 DSP 编程接口。数字信号处理英文是 Digital Signal Processing，简称 DSP。它的 3 个目标是让音乐人用 Pharo 编合成器与效果、给初学者教 DSP 并给开发者快速原型、给 Pharo 应用补声音与听觉提示。实现上把 Faust 标准库函数映射为 Unit Generator 的子类，拼好后经 libfaust 的盒接口变成盒表达式，再编译为可接音频驱动的 DSP。论文强调不是把 Pharo 转写成 Faust 文本，而是走盒接口生成。

**Unit Generator × ChucK 操作符：** Unit Generator 负责封装 Faust 标准库中的振荡器、滤波器、效果等发声单元，ChucK 操作符=>负责表达连接并按目标类型选择动作。二者搭配的理由是模块合成器的接线直觉比手写信号公式更易学，组合后新增的作用是一句链式连接就能完成乘包络或做滤波输入，再转成 Box 并编译为可发声的 DSP。

一个最小合成例子是这样走的：新建脉冲振荡器与包络并命名，把振荡器连包络再连滤波再连混响，滤波的归一化截止由正三角低频振荡器调制，最后转立体声并转成 DSP，初始化后启动。参数默认带界面控件，可用显示界面消息弹出部件，也可用设值消息在演奏区改写。若 1 对参数同根名并以门限与音符结尾，就能按指定时长调度音符，再用 Pharo 的延时与进程写算法作曲循环。

**Box API × DSP：** Box API 负责把 Pharo 侧的单元组合变成 Faust 的盒表达式中间表示，DSP 负责经编译后按采样率计算并接音频驱动。二者搭配的理由是 Phausto 不把 Pharo 转写成 Faust 文本，而是直接走编译器接口，组合后新增的作用是在同一镜像内完成拼装、初始化、启动与参数改写，保持现场不重启。

默认界面的教学价值是把参数名、范围与当前值摆在一起，初学者改旋钮即改 DSP，无需重编译。下图是安装 Coypu 界面包后的默认控件条。

> **看图路径：** 1. 先横向数旋钮个数并读顶部的参数名；2. 再看每个旋钮下方数值范围与当前值的区别；3. 最后找到 SquareTrigger 这类按钮型控件，区分连续参数与触发

[![原论文 Figure 3：Default UI created with Bloc when the Coypu IDE package is installed.](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/nime-2026/19330b3e4414/figure-3.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/nime-2026/19330b3e4414/figure-3.png)

*论文图 3。原论文 Figure 3：“Default UI created with Bloc when the Coypu IDE package is installed.”。*

像素可见一横排旋钮，顶部标有 SquareAttack、SquareDecay 等参数名，底部标有数值范围与当前值，中间有一个方形触发按钮。这对应正文所说所有单元参数默认关联可运行时修改的界面原语，比在 Faust 侧显式声明参数与界面更简洁。复述时要指出：旋钮不是贴图，而是 DSP 参数的真实视图；触发按钮对应门限，拨动它与发送门限消息等价。

下表核对 Phausto 侧的可运行条件，读表时区分教学量、覆盖率与素材量 3 类不同指标，不能互相换算。

| 条件 | 指标 | 本方法取值 | 比较对象 | 备注 |
| --- | --- | --- | --- | --- |
| --- | --- | --- | --- | --- |
| 教学包 MasterLu | 互动课数量 | 15 | 单元组合到减法加法等合成 | 覆盖调制与采样 |
| Faust 库移植 | 当前覆盖率 | 70% | 年底目标全支持 | 物理模型完成后出教程 |
| 演出素材 TurboPhausto | 采样体积 | 50 MB | 轻量 EcoPhausto 无效果 | 含鼓组与语音合成字母表 |

表后解释取舍。十五节课的收益是把创建单元、控参、做部件、调制、拼加和、读采样文件到 4 类合成串成一条路；代价是课外乐理与音频基础仍需另补，手册尚在准备。70% 覆盖的收益是常用振荡滤波效果已可用；代价是物理模型未全，相关音色教程只能等。

五十兆素材的收益是开箱可演奏；代价是慢机器应选无效果的轻量版，否则加载与实时压力更大。

### 没有神经网络训练时，系统在学什么、算什么？

本研究没有训练神经网络的阶段，因此不存在梯度、损失、冻结与更新的报告。把无训练等同于确定性求解是误解，调度仍受操作系统与音频驱动抖动影响，随机游走与算法作曲每次结果也不同。该节的真实计算过程是构造与调用：构造乐谱结构、构造盒表达式并编译、调用音频后端按块算采样。

**TurboPhausto × EcoPhausto：** TurboPhausto 负责提供可直接演出的完整鼓组、采样与效果链，EcoPhausto 负责提供轻量教学子集以适配慢机器。二者搭配的理由是演出需要音色全、教学需要加载快，组合后新增的作用是一条 start 消息就能建好采样播放器与合成器、初始化 DSP 并绑定到使用 PerformerPhausto 的 Performance。

具体操作分 3 步。第一步在演奏区用数组、十六进制串、随机触发数、世界节奏名、欧几里得对子或迷你记法造 Sequencer，用送达消息绑定到乐器键。第二步在 Phausto 侧用操作符连单元，转盒后转 DSP，选音频后端、采样率与缓冲大小并初始化启动。第 3 步播放 Performance，用改速、静音、独奏控制全局，用设值消息或界面控件改 DSP 参数，用延时循环调度音符。

学习依赖由 MasterLu 承担。十五节互动课按顺序教单元创建组合、参数控制、部件设计、调制、列表求和、采样文件与 4 类合成，Coypu 侧另有随仓库的完整演出脚本引导从空工程到可演出。论文未报告学习时长与掌握率的测量，因此不能承诺学完即能演出，只能说路径可复述、可单步执行。

### 用户试验测了什么？条件是否一致？

论文没有做正式实证评估，报告的是 2025 年 5 月在比萨机器人节工作坊的非正式用户观察。参与者 40 人，年龄 11 到 60 岁，均无现场编码经验。同一批人按相近时长分别上手 4 个环境：带轻量音色的 Coypu、Strudel、Mercury 与 Sonic Pi，随后填非正式问卷，问题围绕易用、语法直观与整体愉悦。

按问题组织条件。测的是初次上手的易学与愉悦，不是合成质量、延迟或长期创作能力。对照是 3 个已建立的现场编码环境，条件自述为引导式动手时长相当，但呈现人、示例曲目与讲解顺序可能引入偏差。指标方向是越高越好，但问卷非标准化、无对照实验设计，样本只来自单场活动。硬件与音频链未按论文交代，复现时应视为缺项。

下表把试验规模与结论边界并置，避免把偏好当成效。读表时注意人数与年龄是过程记录，易用偏好是自陈结果，方法局限是作者自认的反证。

| 条件 | 指标 | 本方法记录 | 比较对象 | 备注 |
| --- | --- | --- | --- | --- |
| --- | --- | --- | --- | --- |
| 单场工作坊 | 参与人数 | 40 | 无现场编码经验者 | 年龄 11 到 60 岁 |
| 自陈问卷 | 易用直观愉悦 | 偏好 Coypu | Strudel、Mercury、Sonic Pi | 非标准化测量 |
| 方法边界 | 效度 | 问卷非正式 | 单场样本、无对照条件 | 呈现方式或有偏 |

表后必须讲限制。偏好 Coypu 的支持强度只到非正式问卷，不能推广为更易学会 DSP 或更适合儿童。未胜出项是其余三者在型变换表达力与合成生态成熟度上的既有优势，论文在比较节已承认 SuperCollider 生态更成熟、Tidal 迷你记法对复杂变换更强。未评测边界包括延迟抖动数值、长时间演出稳定性、多轨复调与循环结构，这些在未来工作才列入计划。

### 除问卷外，哪些长期使用记录支持可用？

论文把多年真实演出当作可用性旁证，而非对照实验。自 2022 年在里尔 Pharo Days 首次展示后，Coypu 用于线上直播与柏林等地的舞曲现场，也出现在欧洲 Smalltalk 与现场编码会议的音乐会，工作坊覆盖杜塞尔多夫、比萨、博洛尼亚与布里斯托等地。2025 年的演出已用 Phausto 做音频引擎，可称为全 Pharo 演出，说明本地合成链在舞台上跑通过。

下图是巴塞罗那现场的叠加画面，左侧代码与右侧控制界面同屏，顶部有倒计时，符合限时 algorave 的运行阶段。

> **看图路径：** 1. 先看左侧 Playground 残留的演出代码行与高亮行；2. 再看右侧多轨推子与波形类小部件的布局；3. 最后看顶部倒计时数字，确认这是限时现场演出画面

[![原论文 Figure 4：Lucretio performing with Pharo at LAUT Barcelona during Algo: Noise - Audiovisual Live Coding…](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/nime-2026/19330b3e4414/figure-4.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/nime-2026/19330b3e4414/figure-4.png)

*论文图 4。原论文 Figure 4：“Lucretio performing with Pharo at LAUT Barcelona during Algo: Noise - Audiovisual Live Coding (ICLC 2025).”。*

像素因舞台光偏紫蓝但仍可辨认：左侧演奏区有多行型代码与一行高亮，右侧有多轨推子与小波形部件，底部有键盘与线缆，人物在改代码。这支持论文所说代码美学与过程动态是表演的一部分，也说明调试与调参不需要离台。若把末帧画面推广为全程稳定则过度，只能说该场次按此布局完成。

重提结果时增加新对照。相对问卷偏好，演出记录补的是另 1 维证据：多人多场可重复上台，而非单场问卷。可运行策略是 EcoPhausto 轻量链优先，保证慢机器与教学机先出声；TurboPhausto 全量链用于正式演出。两者共享同一 Performance 与 PerformerPhausto 机制，切换时乐谱写法不变，这是架构带来的可部署收益。

### 拿掉哪个部件会怎样？论文给了什么反证？

论文没有做消融实验，因此不能写拿掉后必然怎样，只能按已验证对照与自认缺项讲边界。第一个边界是时钟。若拿掉共享细分或改成每轨独立时钟，当前轮询与门限推进逻辑必须重写，论文把独立细分列为未来工作，说明现阶段复节拍靠数组长度错位实现。第二个边界是本地引擎。若不用 Phausto 而只用外部服务器，演出仍可进行，但全 Pharo 演出的主张不再成立，2025 年演出记录恰是该主张的成立条件。

第 3 个边界是素材与效果。若从全量切换到轻量版，失去效果链与部分采样，但换来加载快与慢机器可跑，教学场景应选轻量。第 4 个边界是 MIDI。当前不支持多音色与控制改变消息，用外部 MIDI 键盘细控 Phausto 音色会受限，计划中的更完整 MIDI 实现就是为补这一块。

失败条件也写明了。Phausto 近两年才达跨平台稳定，之前偶发不稳定；Faust 库只到 70%，物理模型音色教程需等移植完成；Coypu 缺复调与循环结构支持，复杂织体需绕行。这些不是技术错误，而是未验证与未实现，复现时应先按已支持路径走，再试边界。

### 还不能承诺什么？缺哪些测量？

不能承诺延迟、抖动、误触发率或成本改善，因为论文未测量这些量。Delay 调度只给出机制描述与精炼方向，没有毫秒级抖动分布；音频块大小、采样率、后端差异未列成可比表格；总体稳定趋势不等于每场每步都成立。相关性不是因果，问卷偏好不能推出学得更快。

缺项清单应具体写。缺延迟与 CPU 占用的量化对照，缺长时间演出崩溃率，缺儿童与零基础者的学习结果测量，缺标准化量表与对照条件，缺硬件预算。作者已计划与帕多瓦大学心理学系合作，用验证过的工具、大样本与受控条件重做可用性与学习结果评估，这是对非正式问卷的正确收束。

另一类限制是功能。固定十六分音符网格限制每轨独立速度，多音色与控制改变消息缺失限制 MIDI 细控，离线频谱分析、响度检测、频谱质心与色度、内部示波器与频谱仪、类 Pure Data 的图形数据流连线都还在计划。引用时应说待验证或未实现，不把路线图当已交付。

### 复现先做什么？需要哪些仓库与条件？

先按学习依赖准备环境。安装 Pharo 并确认演奏区、系统浏览器、检查器、调试器与 Git 客户端可用，通读两份开放课程与相关书籍入门 smalltalk 消息语法：一元消息最高优先级，其次二元，再次关键字，括号改序。接着获取当前可用的 3 个代码库：Coypu 主库、Phausto 库与 MasterLu 课程包，另有声音包与界面框架等第三方依赖。资源状态是正文开源声明的唯一依据，本次核对显示所需代码链接当前可用。

最小可运行路径分两条。第一条只验调度：建 Performance 并绑定本地演奏器，用数组、十六进制、随机触发、世界节奏或欧几里得对子造几轨，发给同机监听 8000 端口的音频服务器，按播放、改速、静音独奏的顺序验证。第二条验本地合成：按脉冲振荡器接包络接滤波接混响的链连好，转立体声与 DSP 后初始化启动，先弹界面确认参数可改，再用设值消息改参，最后用门限加音符的命名约定调度短音。

信息条件要保留。本地 OSC 默认同机与端口、乐器需处理门限与音符、扩展参数按名前缀寻址、DSP 需选后端采样率与缓冲。教学例子明确标为例子：随机游走用樱花音阶从 48 号音起跨两八度，只是演示音阶约束，不代表作曲最优。若复现教学研究，还需补标准化问卷、受控呈现顺序与更大样本，否则只能复述过程，不能复述成效结论。

### 何时值得尝试？一句话收束

当你的目标是在一台电脑、一个窗口里同时教编程概念与做现场演出，且能接受固定十六分音符网格与 70% Faust 覆盖时，值得尝试。Coypu 适合先把节奏与参数型写稳，再换演奏器搬家；Phausto 适合把振荡滤波效果链从旋钮玩到代码，再进物理模型。慢机器与课堂先用轻量版，正式演出再上全量版。

误解需要澄清。Pharo 反射强不等于自动好听，好看的代码形状不等于好的节奏，问卷偏好不等于学会 DSP，全 Pharo 演出成立依赖 2025 年后的稳定本地引擎。未来验证应先补抖动与负载数字，再补复调循环与独立细分，最后补受控的用户学习测量。记住顺序：先让同一乐谱在不同去向都出声，再谈风格；先让旋钮与消息都改得动参数，再谈音色。

## 📐 原文公式与排版

以下展示论文原页中的数学表达区域，保留原始上下标、分式和符号排版。区域序号仅用于本文导航，不是论文公式编号。

另有 11 个候选区域因边界不明确或图片数量、尺寸限制未展开；请[查看完整论文](https://nime.org/proceedings/2026/nime2026_42.pdf)中的原始排版。

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。
- 评分规则：type-aware-v1
- 评分模型：muse-spark-1.3-contributor
- 评分请求协议：openai_responses

---

[← 返回 nime-2026 论文汇总](/posts/conference-nime-2026/)
