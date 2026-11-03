---
title: "Ananas: A Networked Audio System for Distributed Spatial Audio Applications"
date: 2026-11-03
draft: false
tags: [空间音频渲染, 硬件系统设计与验证, 空间音频信号, 多通道]
categories: [论文速递]
description: "Ananas 针对分布式空间音频需要多节点严格同步的问题，用 Teensy 4.1 节点加 PTP 同步、多播音频与发现协议和 DAW 控制，在 16 通道 WFS 演示中报告约 80 纳秒平均不同步，但每包通道数和长时间稳定性仍受以太网包长与时钟微调条件限制。"
hiddenInHomeList: true
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_arxiv_id: "2611.03077"
paper_digest_workbench_contract: "researcher-workbench"
paper_digest_workbench_schema_fingerprint: "1f09b594c317cc38e934de27a5b0e8ceb4baa50ef79bd4f8683dd9adea720fe7"
paper_digest_reader_title: "Ananas：用低成本单片机网络做分布式空间音频"
paper_digest_original_title: "Ananas: A Networked Audio System for Distributed Spatial Audio Applications"
paper_digest_arxiv_version: 1
paper_digest_arxiv_versioned_id: "2611.03077v1"
paper_digest_arxiv_abs_url: "https://arxiv.org/abs/2611.03077v1"
paper_digest_arxiv_pdf_url: "https://arxiv.org/pdf/2611.03077v1.pdf"
paper_digest_primary_task: "空间音频渲染"
paper_digest_tags_contract: "paper-tag-flat-tags"
paper_digest_tags_schema_fingerprint: "27e36280a4b8d3df62ebe54d3ab037920f4d69feb2b554163f01bbae2caf4338"
paper_digest_tags_selection_contract: "paper-tag-selection"
paper_digest_tags_registry_version: "paper-tag-catalog"
paper_digest_tags_registry_sha256: "9673bc0122e1905a5dcfd8b223675400cc2fa4c36095bc0e5f817edf99a0ec5c"
paper_digest_tags_concepts: [{"facet":"task","id":"task.spatial-rendering","label":"空间音频渲染"},{"facet":"method","id":"method.hardware-system-design","label":"硬件系统设计与验证"},{"facet":"signal","id":"signal.spatial-audio","label":"空间音频信号"},{"facet":"setting","id":"setting.multichannel","label":"多通道"}]
paper_digest_primary_method: "硬件系统设计与验证"
paper_digest_score: 6.4
paper_digest_rank_bucket: "前50%"
paper_digest_document_type: "系统技术报告"
paper_digest_one_sentence: "Ananas 针对分布式空间音频需要多节点严格同步的问题，用 Teensy 4.1 节点加 PTP 同步、多播音频与发现协议和 DAW 控制，在 16 通道 WFS 演示中报告约 80 纳秒平均不同步，但每包通道数和长时间稳定性仍受以太网包长与时钟微调条件限制。"
paper_digest_authors: [{"affiliations":["机构信息未能从 arXiv PDF 文本可靠映射"],"name":"Thomas Rushton"},{"affiliations":["机构信息未能从 arXiv PDF 文本可靠映射"],"name":"Romain Michon"},{"affiliations":["机构信息未能从 arXiv PDF 文本可靠映射"],"name":"Tanguy Risset"}]
paper_digest_abstract_sha256: "1c9545d15f5ad5d483d2e24ccb625b43508829c501ab3be2484de723b67c0038"
paper_digest_sidecars: {"citation.bib":{"sha256":"d578344b90bba9e12a76911bb6679674851d7601094c52a45fae1444e66d84dd","url":"/audio-paper-digest-blog/client/papers/2026-11-03/2611-03077/citation.bib"},"citation.json":{"sha256":"d5d33e84beae2e8ff994553924620f2bc11067c6b06a438622c5c4cd1d2ce158","url":"/audio-paper-digest-blog/client/papers/2026-11-03/2611-03077/citation.json"},"citation.ris":{"sha256":"b04fef78b690eddad50e5b2d6843a23cb4cd86a20f7d855e1284db1a8f8ee451","url":"/audio-paper-digest-blog/client/papers/2026-11-03/2611-03077/citation.ris"},"rethink-context.json":{"contract":"paper-research-context","schemaFingerprint":"5d4e79f7d3ee65b39ccb38281548bf20a1b2041ab7a27625eaf97ab9909a8383","sha256":"914e9ade6d02207d26f8306edb9e94125f7232d7a7aac303d09ec439ac23de2d","url":"/audio-paper-digest-blog/client/papers/2026-11-03/2611-03077/rethink-context.json"}}
paper_digest_api_reader_contract: "beginner-researcher"
paper_digest_api_reader_schema_fingerprint: "cd8baf5b8bda3a49eec64f6005931af63de4e9a13148cba5f354c661ca6e9df2"
paper_digest_api_reader_article_sha256: "e5cc7406876db0e42ae6f2666778bd3a192ccade8d7060c575b1482cc352c204"
paper_digest_api_reader_plan_sha256: "9797839214565c6483502ccbee29966ebd22dd9847cfcf5cf810db7e6ad94705"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings"
paper_digest_api_reader_source_binding_schema_fingerprint: "d2a2607a6e561909473022eb43f56332ee357af8568566a095c29083ffdec9cc"
paper_digest_api_reader_source_bindings_sha256: "9adc2f4611b059d53362d9b5f8c397d84a6019722c9fa184a0cfca41fcd69457"
paper_digest_api_reader_source_table_count: 2
paper_digest_api_reader_source_formula_count: 0
paper_digest_api_reader_structured_artifacts_sha256: "8f27bd7d731a97c8926af7268345d18517e7f1b56015576b64800d0142385024"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity"
paper_digest_api_reader_author_identity_schema_fingerprint: "1e3fd3a9a56c9a5bf52df8df5022690b9a3fa92e83e934f295af87c0e258ed2f"
paper_digest_api_reader_author_identity_sha256: "ce88750418e899dcb843a7566c5ca9a34d2b15d2711cd1b65bc939b90b2cce00"
paper_digest_api_reader_author_count: 3
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity"
paper_digest_api_reader_resource_identity_schema_fingerprint: "33b0be17118be61f39b85ce690c8da17e91f2864bb65e85284f60c40067328e0"
paper_digest_api_reader_resource_identity_sha256: "9e1481bc7a496b8f4326dd64e5f58efb6e102db5a59064b6195e09140ad6d581"
paper_digest_api_reader_resource_count: 6
paper_digest_api_reader_figure_persistence: "ephemeral-no-persisted-figure-assets-v1"
paper_digest_api_reader_decision_projection: "api-reader-decision-projection"
paper_digest_api_reader_decision_projection_schema_fingerprint: "e56feb5ab75c8710904916b898f73dab9bb18bdf65bb60b7ed2edf7f99cea860"
---

# 📄 Ananas：用低成本单片机网络做分布式空间音频

> 英文题目：*[Ananas: A Networked Audio System for Distributed Spatial Audio Applications](https://arxiv.org/abs/2611.03077v1)*

<!--paper-tag-hierarchy-v1:start-->

**研究分类**

- **研究任务**：[空间音频渲染](/audio-paper-digest-blog/papers/?concept=task.spatial-rendering)
- **研究方法**：[硬件系统设计与验证](/audio-paper-digest-blog/papers/?concept=method.hardware-system-design)
- **研究条件**：[多通道](/audio-paper-digest-blog/papers/?concept=setting.multichannel)
- **信号**：[空间音频信号](/audio-paper-digest-blog/papers/?concept=signal.spatial-audio)

<!--paper-tag-hierarchy-v1:end-->

> 评分：**6.4/10** | 创新 1.3/2 | 技术严谨 1/1.5 | 实验充分 0.8/1.5 | 清晰度 0.7/1 | 影响力 0.8/1.5 | 开源 0/1.5 | 可复现 0.3/0.5 | 工程/实践 1.5/1.5


## 👥 作者与机构

- Thomas Rushton：机构信息未能从 arXiv PDF 文本可靠映射
- Romain Michon：机构信息未能从 arXiv PDF 文本可靠映射
- Tanguy Risset：机构信息未能从 arXiv PDF 文本可靠映射

## 📌 核心摘要

大型空间音频装置难以普及的原因是多通道声卡昂贵、同步与部署需要专门知识。该任务输入是工作站产生的多个单声道声源或高阶Ambisonics编码通道，输出是分布在房间各处的扬声器信号，难点是在廉价硬件上让所有节点采样时刻对齐并按时发声。系统先由音频服务器把输入写入先进先出队列并打包成组播数据包发往网络，再由作为时间基准的开发板统一计算机声卡时钟与网络精确时钟，然后由各节点根据精确时钟微调音频锁相环实现采样率一致，最后由各节点按包内时间戳等待到预定时刻再播放并执行局部分布式渲染。与侧重低延迟合奏的JackTrip、Sonobus等系统不同，该工作把同步精度作为首要目标，并用开源硬件与熟悉的工具降低使用门槛。在4个节点播放每秒脉冲并用逻辑分析仪测量I2S输出上升沿的1小时测试中，以组内瞬时极差均值为同步指标测得约为80ns，低于AES指南对48kHz下约1μs参考帧5%的要求，该结论限于以太网局域网内16帧小包、44通道以内波场合成与五阶以内Ambisonics设置，包乱序、网络拥塞和更大阵列下的表现尚未验证。原文未披露训练、推理或部署成本。

## 🔗 开源与复现资源

- 第三方资源：<https://sonobus.net> — 链接可访问（HTTP 200）

- 第三方资源：<https://juce.com> — 暂时无法访问

- 第三方资源：<https://reaper.fm> → <https://www.reaper.fm/> — 链接可访问（HTTP 200）

- 第三方资源：<https://www.audinate.com/meet-dante/what-is-dante> → <https://www.getdante.com/meet-dante/what-is-dante/> — 链接可访问（HTTP 200）

- 第三方资源：<https://hal.archives-ouvertes.fr/hal-03153709> → <https://hal.science/hal-03153709> — 链接可访问（HTTP 200）

- 第三方资源：<https://asa.scitation.org/doi/abs/10.1121/1.405852> — 链接可访问（HTTP 200）

可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 空间音频为什么难普及

这篇论文讨论的输入是多通道空间音频节目，目标是让分布在房间不同位置的多个扬声器协同还原声场，输出是每个扬声器在同一时间基准下应播放的连续采样流。必须保留的信息有两个：一是各通道样点之间的相对时序，二是各播放节点采样时钟的速率一致性，丢掉任何一个都会导致声像漂移或梳状干涉。

传统做法依赖昂贵的多通道声卡和集中式功放，一台设备带几十路输出，成本和布线都很高。Ananas 想走另一条路：用很多块低成本微控制器开发板，每块带一两路输出，分散布置，再用以太网把音频和控制数据分发下去。这样硬件单价下降，但引入了新困难，即网络抖动和各板晶振漂移会破坏同步，必须专门设计同步机制。

读者需要先建立的概念是分布式声场合成。它不是把立体声简单复制到多个音箱，而是服务器按算法把虚拟声源或编码声场拆成多路信号，每个节点只算属于自己的那部分，最后在空气中叠加成整体声场。因此网络不仅要送音频，还要送几何位置或解码系数这类控制量，并让所有节点在同一时刻呈现。

### 已有网络音频协议为什么不够用

论文回顾了两类现有路线。第一类是闭源高同步系统，以 Dante 为代表，它同样用 PTP 做时间交换，但硬件贵且不开源，不适合学术复用和二次研究。Elk Audio OS 的网络部分也被归为闭源一类。它们的输入目标与 Ananas 相近，都是多节点音频，但运行条件不开放。

第二类是开源的网络音乐表演系统，包括 JackTrip、NetJack、基于 OSC 消息的 Audio Over OSC、Jamulus、Soundjack 和 LOLA 等。它们的优化目标是低延迟合奏或演出串流，关心从一端尽快送到另一端，不要求所有远端扬声器在纳秒量级同时发声。把这类系统直接搬到空间音频，会出现各节点各播各的、声场散开的问题。

还有 AVB 和 AES67 这类视听桥接标准，论文明确说没有采用，理由是在微控制器上实现复杂度太高。这是一个工程取舍：标准功能全但资源要求高，Teensy 这类单片机难以完整实现。因此作者选择自研轻量协议，只保留多播音频、设备发现和 PTP 同步等必需部分。

### Ananas 要解决的具体同步问题

具体问题可以拆成三件。第一，音频分发要省带宽：如果服务器对每个模块单独单播，通道数 1 多就会占满网络，需要一次发送、多节点同时接收的多播。第二，时钟速率要一致：每块板的 24 MHz 晶振都有微小偏差，48 kHz 标称采样率下每天会累积出可闻甚至可测的偏移，必须连续微调采样率。第三，呈现时刻要一致：即使速率一致，若各板开始播放的绝对时刻不同，脉冲声的上升沿仍会对不齐。

论文把第二件称为媒体时钟恢复，把第三件称为呈现时间恢复。前者调分频器让采样率跟随时间权威，后者按包中时间戳决定何时把缓冲中的样点推出去。两者缺一不可，光有 PTP 时间同步而不调音频锁相环，声卡时钟依然会漂。

### 系统整体由哪些部分组成

沿一个样点走完全程有助于理解分工。原始输入在服务器电脑上，一般是 Reaper 数字音频工作站轨道上的单声道波场合成源，或 ACN 编码的高阶 Ambisonics 流。Ananas 音频服务器把这些通道写入先进先出缓冲，攒够一包的帧数就由发送线程读出，打上序号和 PTP 时间戳，通过 UDP 多播发给交换机，再转发到所有 Teensy 模块。

模块收到包后先按序号理顺乱序，再按时间戳等待呈现时刻，然后执行 Faust 编写的分布式算法：波场合成节点结合本地扬声器坐标和收到的虚拟源坐标算自己的输出，高阶 Ambisonics 节点用收到的解码矩阵行对编码通道加权求和。控制面另有一路 OSC 消息，负责发送扬声器位置、虚拟源位置和解码系数，以及模块定期上报状态的客户端描述包。

**波场合成 × 高阶 Ambisonics：** 波场合成与高阶 Ambisonics 是 Ananas 要支持的两种声场合成路线：前者每个硬件模块只需知道扬声器坐标和虚拟声源坐标，计算自己负责的扬声器信号；后者服务器发送 ACN 编码的多通道流，模块按分配到的解码矩阵行做加权求和。两者分工不同，但都需要服务器准时把多通道音频送到所有模块且各模块同速播放，因此共用同一套同步与传输机制。

### 硬件为什么选 Teensy 4.1

硬件节点选用 Teensy 4.1 加音频和以太网扩展板，论文称整套成本低于 50 欧元，主控是 600 MHz 的 ARM Cortex-M7 即 NXP iMXRT1062。与树莓派这类微处理器相比，它的优势是有专用音频子系统，音频锁相环 PLL4 的分母分子寄存器各有 30 位可用，理论上可以做纳秒量级的采样率微调。

时钟链路是理解后续公式的基础：24 MHz 晶振先乘以锁相环分频系数得到 PLL 频率，再经 2 级分频得到主时钟，最后经音频接口的 2 级分频得到过采样时钟，该时钟要求是目标采样率的 256 倍。论文还给出约束，即过采样时钟不超过 66 MHz，PLL 输出在 650 MHz 到 1300 MHz 之间，因此标称 48 kHz 只是其中一个合法工作点，极端配置下采样率可在数百赫兹到约 257 kHz 之间。

这种可调性是有代价的：可调变量太多，包括环路整数分频、小数分子分母、后分频和 2 级音频分频，无法一次解析求解，必须用迭代搜索找一组满足约束的寄存器值。论文以 48 kHz 为例，给出一组整数和小数分频的具体取值，说明标称点如何配置。

### PTP 时间交换如何变成采样率调整

PTP 时间交换的过程是时钟权威定期发同步包并记录发送时刻，订阅者记录接收时刻，再发延迟请求并得到权威的接收时刻回复，由此算出漂移、链路延迟和偏移。论文给出标准的四时间戳算法，并把结果送入比例积分控制器，得到每秒应调整的纳秒数，用于调整以太网硬件定时器。

关键一步是把这个每秒纳秒数换算成采样率。例如标称 48 kHz 时若调整量为负 1750 纳秒，则跟随后的采样率为 48000 乘以 1 减 1750 亿分之一，约 47999.916 Hz。再把这个目标采样率代入采样率与寄存器关系的表达式，反解出小数分子寄存器的新值，写入芯片即可让音频时钟变快或变慢。

实际中一次换算仍有十亿分之几的残余漂移。论文的办法是再加一层校正：利用 48 kHz 下 2 的幂次小缓冲每秒对应整数次音频中断的特点，在启动时记一个纳秒基准，每经过固定次中断就读 PTP 定时器的纳秒部分并求差，再用第二个比例积分控制器修正目标采样率。两层控制器叠加后才能长期稳定。

**IEEE 1588 精确时间协议 × 媒体时钟恢复：** IEEE 1588 精确时间协议只解决以太网卡层面的时间对齐，给出各节点相对时间权威的漂移、延迟和偏移；媒体时钟恢复则把这个纳秒级调整量转化为音频采样率的调整，去改 iMXRT1062 音频锁相环的分频寄存器。前者提供时间证据，后者落实到采样时刻，两者搭配才实现采样率一致和同时发声。

### 音频服务器与音频包格式

音频服务器是用 JUCE 框架写的 C++ 库。启动后初始化多线程，分别负责音频发送、读取 PTP 时间戳和监听客户端。音频路径的结构是输入通道先写入中间 FIFO，攒够一包帧数就通知发送线程，发送线程从 FIFO 读出并填包，交给 UDP 多播套接字发出。这种生产者消费者解耦可以吸收数字音频工作站线程与网络线程的抖动，但会引入少量缓冲延迟。

Ananas 音频协议使用多播地址 224.4.224.4，包头包含序号、时间戳、通道数和帧数，后面是字节编码的音频数据。序号用来处理高带宽下偶发的乱序，时间戳由服务器读 PTP 跟随包并加一个小的重放偏置得到，后续包按预期包间隔递增。论文指出 16 帧每包时偏置取 1/70 秒最合适，48 kHz 下包间隔约为 333333 纳秒量级。

**Ananas 音频协议 × OSC 控制消息：** Ananas 音频协议负责连续的音频样点流，用 UDP 多播一次发给所有模块，包头带序号、时间戳、通道数和帧数；OSC 控制消息负责离散的控制量，用单播或多播发送扬声器位置、虚拟源位置或 Ambisonics 解码系数。音频流保证效率，控制消息保证每个模块知道自己该算什么，两者分开传输、目的不同。

### 发现、时间权威与控制消息的分工

设备发现用另一路多播地址 224.4.224.6 上的客户端描述协议。模块定期单向宣告自己的序列号、固件类型版本、报告采样率、CPU 占用、缓冲填充率、PTP 锁定状态、呈现偏置等信息，服务器若在 1 秒内收到过某模块的包就认为它在线。这些信息可在插件界面显示，便于排查掉线或失锁。

时间权威是一块特殊的 Teensy 4.1，它一面作为服务器电脑的 USB 音频设备，决定电脑端 USB 音频时序，一面作为全网 PTP 时钟权威。因为两边由同一晶振驱动，电脑、支持 PTP 边界时钟的交换机和所有模块被拉到同一时间基准上。论文选用的交换机是 MikroTik CRS326 系列，兼顾端口数、PTP 支持和约 200 欧元的成本。

控制数据用 OSC over UDP。对波场合成，模块位置用单播发送，例如某模块收到路径为扬声器横坐标的消息就知道自己的第一个次级源在 1.5 米处；虚拟源位置用多播地址 224.4.224.5 发送。对 Ambisonics，模块收到的是解码矩阵某行某列的系数值，例如第一行第一列取 0.2385，就按此加权。

**时间权威节点 × Teensy 4.1 个模块：** 时间权威节点是一块被指定为全系统时间基准的 Teensy 4.1，它同时做服务器电脑的 USB 声卡和全网 PTP 时钟源；其他 Teensy 4.1 模块是普通的分布式计算与输出节点，跟随权威的时间。因为权威的 USB 音频时序和 PTP 时间由同一晶振驱动，电脑、交换机和所有模块才能连到同一个时间基准上。

### 没有神经网络训练时系统如何构造

本论文没有训练神经网络，也就没有梯度、损失和权重更新，因此本节说明实际的构造与配置过程。需要构造的是 3 类东西：芯片寄存器配置、Faust 数字信号处理程序和网络地址与插件路由。寄存器配置按标称采样率用迭代法求解，运行时再按 PTP 调整量动态改写小数分子寄存器，不涉及学习。

Faust 程序是离线编写、编译烧录到各模块的，波场合成与 Ambisonics 解码的算法结构固定，运行时只更新系数和坐标，不更新程序本身。服务器端的 WFS 控制插件为 CLAP 格式，挂在 Reaper 的 16 通道轨道上，负责把虚拟源位置转成 OSC 消息发出。整个系统更像搭积木和调参，而不是拟合数据，复现时重点是配对固件版本、采样率和包帧数。

### 演示系统如何连线与测量同步

论文演示了两种运行模式共用的同一套接线：时间权威管 USB 音频和 PTP 时间，服务器发音频和控制数据到交换机，交换机转发到各模块，模块执行分布式算法。波场合成示例用一台普通笔记本跑 Reaper，加 WFS 控制插件，8 个模块共 16 个输出通道，服务器每次发 16 帧的包。同步测量则用 4 个模块连到逻辑分析仪，测 I2S 输出，由服务器发每秒一次的脉冲音频，在脉冲上升沿读各模块的偏移。

下表整理的是论文给出的包格式与容量条件，比较问题是 16 帧每包时能带多少通道以及时间戳如何递增，公平条件是同为 48 kHz 标称和以太网 1500 字节限制，包间隔越小意味着延迟越低但包头开销越大。

| 条件 | 通道含义 | 每包帧数 | 可传通道数 | 传输约束与时间戳 |
| --- | --- | --- | --- | --- |
| 高阶 Ambisonics | 编码通道 | 16 帧 | 至多支持 5 阶 | 同一多播与时间戳递增机制 |

这些容量数字只在给定打包条件下成立：44 通道是 16 帧、16-bit、1500 字节上限共同决定的上限，不是任意采样率和位深下都能达到；5 阶 Ambisonics 需要的通道数恰好落在这个上限内，阶数再高或帧数再大就要重新核算。包间隔是按 16 帧除以 48 kHz 算出的期望值，实际网络抖动仍需靠接收端缓冲和序号理顺来吸收，这部分代价是额外的重放延迟。

**客户端描述协议 × 呈现时间恢复：** 客户端描述协议是模块定期向服务器报告状态的多播消息，包括采样率、缓冲填充率和 PTP 锁定状态，用于监视和调试；呈现时间恢复是模块根据音频包中的 PTP 时间戳决定何时真正把样点送到数模转换。前者管可观察性，后者管准时播放，两者一起保证系统既看得见状态又听得到同步效果。

### 同步精度实测结果如何解读

要回答的核心问题是 4 个模块同时重放脉冲时上升沿差多少。论文用 1 小时连续测量的群组不同步范围和单个客户端的直方图来说明。指标方向是差值越小越好，参考线是 AES 对时间敏感应用的建议，即不超过参考帧的 5%，在 48 kHz 下约为 1 微秒。

下表把论文报告的关键数字放在一起，比较问题是在同一测量条件下实测不同步与建议阈值的距离，条件都是 48 kHz 脉冲上升沿、逻辑分析仪测 I2S 输出。

| 测量对象 | 指标 | 论文报告值 | 对照 |
| --- | --- | --- | --- |
| 四模块组 | 瞬时极差与长期漂移 | 平均不同步约 80 ns，长期保持在约 200 ns 以内 | AES 建议约 1 µs at 48 kHz |
| 空气传播换算 | 距离差异 | 约 27.4 µm | 远小于扬声器布置误差 |

结论的适用边界是：80 纳秒是四模块、1 小时、实验室交换机条件下的均值，不是大规模组网或跨交换机时的保证；200 纳秒以内是有双层比例积分校正才成立，单靠一次换算会有残余漂移。换算成 27.4 微米只是帮助理解时间差有多小，不代表声学定位精度就是微米级，实际声像还受扬声器位置测量、房间反射和解码近似的影响。未胜出的方面是论文没有给出丢包率、CPU 占用与缓冲填充率随通道数变化的曲线，44 通道满载时的稳定性尚未被该表证明。

### 哪些参数选择影响稳定播放

论文没有做神经网络消融，但报告了两个工程选择的依据。第一是重放偏置：16 帧每包时取 1/70 秒最合适。偏置太小，网络抖动会导致包还没到就该播放而断音；偏置太大，端到端延迟增加，交互控制会变迟钝。这个值是在当前交换机和负载下试出的，不是理论最优，换网络环境要重调。

第二是双层校正的必要性。只用 PTP 导出的每秒纳秒数去调采样率，仍有残余漂移，长时间会慢慢散开；加上基于音频中断计数的纳秒差和第二个比例积分控制器后，才能 indefinite 地保持锁定。这说明以太网时间与音频时钟是两个时钟域，一次映射不够，必须闭环跟踪。

另一个隐含取舍是帧数与通道数的矛盾：每包帧数小则延迟低但包头开销大，每包帧数大则效率高但重放延迟大。论文固定 16 帧来兼顾两者，若改成 32 帧，包间隔翻倍，44 通道上限也会变化，需要重新验证乱序率和缓冲需求。

### 结论在什么条件下才成立

首先是规模条件：同步数据来自 4 个模块的测量，波场合成演示用了 8 个模块 16 通道，44 通道和 5 阶 Ambisonics 是按包长算出的容量上限，不是实测满载。节点数、交换机跳数和背景流量变化时，乱序和抖动都可能上升。

其次是时钟条件：结果依赖时间权威的晶振同时驱动 USB 音频和 PTP，以及交换机支持 PTP 边界时钟。若换成不支持 PTP 的普通交换机，或服务器电脑的 USB 音频另起时钟，同步链就会断开。

最后是评价条件：论文只测了脉冲上升沿的时间差，没有报告听感评价、声场重建误差、长时间丢包率和不同缓冲下的断音率。80 纳秒远好于 1 微秒建议，只能证明时刻对齐做得好，不能直接推出音质或定位一定好。把平均值推广到最坏情况，或把实验室结果推广到演出网络，都需要补测。

### 复现第一步做什么与需要什么

复现第一步是配齐硬件与代码基线：至少两块 Teensy 4.1 加音频与以太网扩展、一块做时间权威的 Teensy、一台支持 PTP 边界时钟的交换机和一台能跑 Reaper 与 JUCE 服务器的电脑。固件与服务器代码按论文给出的仓库分别获取，注意区分客户端与时间权威的不同固件，不要烧错。

第二步是先不跑声场算法，先跑同步：统一采样率为 48 kHz、每包 16 帧，确认客户端描述包能被服务器收到并显示 PTP 锁定，再用逻辑分析仪或示波器看脉冲上升沿。只有时间差稳定在数百纳秒内，再接入 Faust 的波场合成或 Ambisonics 解码。

需要补的验证至少有三项：一是满通道负载下的缓冲填充率和丢包统计，二是不同交换机和线缆长度下的长期漂移，三是扬声器实际位置误差对声像的影响。论文未公开超参数以外的细节如比例积分系数具体取值，复现时要从代码中核对，不能靠猜。代码可得、能运行与能复现精度是三回事，要分开确认。

### 什么时候值得尝试 Ananas

当目标是教学、艺术装置或实验室研究，需要十几到几十个通道的波场合成或高阶 Ambisonics，且预算买不起 Dante 或大通道声卡时，Ananas 值得尝试。它的价值在于把同步、传输和控制做成开源轻量组合，用熟悉的数字音频工作站做控制面，降低了搭建门槛。

不适合的情况也很明确：需要跨广域网低延迟合奏，或需要即插即用的商业演出保障，或网络中没有 PTP 支持时，不应硬套本系统。论文的易用性结论只在已配好固件、交换机和插件的条件下成立。

一句话总结：Ananas 用多播加 PTP 双层校正证明了低成本单片机也能做到百纳秒级同播，但容量上限、长期满载稳定性和声学效果仍需按自己的场地重测，不能把 80 纳秒直接当成任意规模下的承诺。

<details>
<summary>📎 论文与评分元数据</summary>

排名：前50% | 文档类型：系统技术报告 | [arXiv 原文](https://arxiv.org/abs/2611.03077v1)

</details>

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。

- 评分规则：type-aware-v1

- 评分模型：muse-spark-1.3-contributor

- 评分请求协议：openai_responses

---

[← 返回 2026-11-03 语音/音乐/音频论文速递](/audio-paper-digest-blog/posts/2026-11-03/)
