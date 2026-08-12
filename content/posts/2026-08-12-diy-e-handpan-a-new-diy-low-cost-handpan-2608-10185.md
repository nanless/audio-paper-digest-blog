---
title: "DIY e-HandPan: A new DIY Low-Cost Handpan Interface based on Arduino and ESP32 Microcontrollers"
date: 2026-08-12
draft: false
tags: [音频交互, 端到端, 实时处理, 开源工具, 教育]
categories: [论文速递]
description: "音频交互 | 7.2/10"
hiddenInHomeList: true
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_arxiv_id: "2608.10185"
---

# 📄 DIY e-HandPan: A new DIY Low-Cost Handpan Interface based on Arduino and ESP32 Microcontrollers

标签：#音频交互 #端到端 #实时处理 #开源工具 #教育

**7.2/10** | 创新 1/2 | 严谨 1.1/1.5 | 实验 0.7/1.5 | 清晰 0.6/1 | 影响 0.7/1.5 | 开源 1.5/1.5 | 复现 0.3/0.5 | 工程 1.3/1.5

✅ **7.2/10** | 前50% | 文档类型：系统技术报告 | 评分置信度：中 | #音频交互 | #端到端 | #实时处理 #开源工具 | [arxiv](https://arxiv.org/abs/2608.10185)


### 👥 作者与机构

- 第一作者：Benoît Collin（IBISC, University of Évry Paris-Saclay）
- 通讯作者：论文未明确标注通讯作者，仅提供联系邮箱 dominique.fourer@univ-evry.fr
- 作者列表：
  - Benoît Collin（IBISC, University of Évry Paris-Saclay）
  - Dominique Fourer（IBISC, University of Évry Paris-Saclay）
  - Eric Genotelle（IBISC, University of Évry Paris-Saclay）

### 💡 毒舌点评

作为开源硬件系统报告，工程文档完整度相当扎实：用约 80 美元做出了带力度感知、双色 LED 教学引导和双 MCU 版本的电子手碟，对音乐教育与 Maker 社区有实际价值。但论文几乎没有对端到端演奏延迟、误触发率、长期可靠性和学习效果做量化评估，与 Panduino、Lumen、Neotone 等已有系统只停留在属性表对比，摘要中“表现力可比原声手碟”的说法没有任何对比数据支撑，离顶会“证据支撑结论”的标准还差得远。此外，Arduino 版本是否支持 LED 教学在正文中自相矛盾（2.3/4.2/5.1 描述与 3.1 矛盾），需要认真修正。

### 📌 核心摘要

论文针对原声手碟价格高昂（商用乐器通常数千欧元）、教学资源有限、现有电子手碟方案封闭或缺少文档的问题，提出 DIY e-HandPan：一款基于 Arduino/ESP32 的低成本开源电子手碟接口。其核心是用压电传感器采集敲击信号，经保护与分压电路后由微控制器估计力度并转换为 MIDI，或在 ESP32 版本中直接触发预录音频样例。ESP32 版本还集成了 CD4067 模拟多路复用器、4 个级联 74HC595 移位寄存器、UDA1334A I2S DAC、Wi-Fi 网页配置、EEPROM 参数持久化和双色 LED 教学引导。与同类 DIY 方案相比，论文声称这是首个同时具备力度检测、视觉教学且硬件与固件完全开源可复现的手碟 MIDI 控制器。实验证据主要是三种商用压电传感器经保护/分压后 ADC 输入均约 2.6V、Arduino 主循环约每毫秒一轮且处理循环小于 10ms（非正式计时），以及大学硕士课程和音乐系 workshop 的部署反馈；论文未提供与商用系统的定量对比。实际意义是以约 80 美元成本提供一个可复制、可改造的开放硬件平台，服务音乐教育、DMI 研究和 Maker 社区。主要局限是缺少系统级延迟、误触发、长期可靠性和学习效果的量化评估，且 Arduino 版本 LED 教学功能描述前后不一致。

### 🔗 开源详情

- 源码仓库：https://github.com/dfourer/eHandPan
- Arduino 固件：位于仓库根目录，支持 Uno/Mega 的 6 音与 14 音配置，MIT License。
- ESP32 固件：位于仓库 `esp32` 目录，基于 PlatformIO，实现了独立音频、LED、Web 配置和 USB-MIDI，MIT License。
- 硬件设计文件：包括原理图、PCB 制造文件（Gerber）、物料清单，采用 CERN Open Hardware Licence Version 2 – Permissive（CERN-OHL-P-2.0）授权。
- 其他资源：提供逐步装配说明、引脚对照表以及英文/法文视频教程（YouTube 播放列表）。
- 机器摘要状态：has_code=是，has_model=否，has_dataset=否；论文未发布任何预训练模型或实验数据集，也未提供校准用录音数据库。

### 🏗️ 方法概述和架构

DIY e-HandPan 的完整链路是：敲击回收 CD 表面 → 压电传感器产生电压脉冲 → 由两个保护二极管和两个电阻组成的分压网络进行限幅、缩放到 ADC 安全范围 → MCU 进行 ADC 采样 → 阈值检测和力度估计 → 输出 USB-MIDI 事件，或在 ESP32 版本中触发预录音频样例并通过 I2S DAC 输出模拟音频，同时驱动双色 LED。它不是经过训练的机器学习模型，而是由机械结构、模拟信号调理电路、嵌入式固件和可选 Web UI 组成的完整端到端演奏系统。

机械层面，每个音高对应一个“回收 CD 作为击打面 + 压电传感器 + 泡沫垫 + 木质沙拉碗”的堆叠结构。CD 提供刚性且低成本的击打面，压电传感器位于 CD 中心下方，泡沫层既传递机械振动又起到部分隔振作用。每个音下方安装一个红/绿双色 LED，导线通过碗上的钻孔引到内部。两个碗分别为 8 音和 6 音，构成 14 音配置；6 音配置音高为 Bb3, Db4, Eb4, Gb4, Ab4, Bb4，8 音配置为 A3, B3, C4, D4, E4, F4, G4, A4。Arduino 版本无需 PCB，传感器直接接开发板模拟输入；ESP32 版本则通过 DB25 连接到专用接口板。

模拟调理电路是系统最重要的硬件组件。每个压电传感器后接 1MΩ 串联电阻 R1、并联分压电阻 R2、一个稳压二极管 D1 和一个普通二极管 D2。其原理如下图所示；输入到 MCU 的电压近似为：

![Figure 2: Conditioning circuit of a single piezoelectric sensor. The piezoelectric sensor is interfaced to the microcontroller (Arduino or ESP32) analog input…](https://arxiv.org/html/2608.10185v1/x1.png)

下图描绘了每个压电传感器后接的保护二极管和分压电阻网络，该电路将高压脉冲限制并缩放到微控制器安全输入范围。
\[V_{in} = V_{piezo} \frac{R_2}{R_1 + R_2}\]

其中 \(V_{piezo}\) 是压电传感器产生的电压，\(V_{in}\) 是施加到微控制器模拟输入的电压。R2 的值根据平台调整：Arduino 使用 470kΩ（5V 基准），ESP32 使用 200kΩ（3.3V）。稳压二极管负责钳制正向高压瞬态，普通二极管（BOM 中为 1N4148 或等效）负责抑制负向电压，从而保护 ADC 输入。论文用三种商用传感器验证，原始峰值约 17V，经过保护级后约 8.9–10.1V，再经分压后约 2.59V。论文还评估过仅用 R1=1MΩ 的简化电路，确认其在中度演奏下可用但无法抵御剧烈反复敲击产生的大瞬态，因此不推荐长期使用。

Arduino 实现面向教育和快速原型。Arduino Uno 支持 6 音（A0–A5），Arduino Mega 支持 14 音（A0–A13），无需模拟多路复用器。固件顺序轮询各通道，检测到超过阈值的信号后，将 10 位 ADC 值线性映射到 MIDI velocity 0–127，产生 MIDI Note On；每个音维护一个独立 hold-off 计数器，最短持续 80ms 后发送 Note Off，避免压电余振导致重复触发。MIDI 字节以 31250 baud 从串口输出；将板载 ATmega16U2（老版本为 ATmega8U2）刷入 MocoLUFA 固件后，Arduino 被识别为 class-compliant USB-MIDI 设备。固件还包含两个可选诊断模式：以 115200 baud 输出各通道力度估值 CSV，以及用微控制器定时器测量采集循环执行时间；板载 13 号 LED 在检测到敲击时点亮。该版本没有专门 PCB，完全依赖点对点焊接，便于学生和 Maker 修改；论文说明未来计划推出一款专用 shield 以集成保护元件和 LED 电阻。

![Figure 3: Hardware and functional architecture of the Arduino-based DIY eHandPan. Each wooden bowl can be connected through a DB25,](https://arxiv.org/html/2608.10185v1/figs/arduinofig.png)

下图显示了Arduino版本中传感器信号直接连接到微控制器模拟输入，并通过USB-MIDI接口与计算机通信的简化链路。


需要特别指出的是，论文在 2.3 节和 4.2/5.1 节声称 Arduino 固件控制双色 LED 并提供交互学习模式（5.1 节还要求把 DAW 的 MIDI 输出回灌到 MocoLUFA 设备以驱动 LED），但 3.1 节明确写道“当前 Arduino 固件限于传感器采集和向外发送 MIDI，控制 LED 和解释教学 MIDI 序列需要额外固件模块或独立版本”。这是正文中一处明显的功能描述矛盾。

ESP32 实现面向独立乐器。由于 ESP32-S3 可用模拟输入不足，固件通过 CD4067 模拟多路复用器分时扫描 14 路压电信号，只用 4 根地址线加 1 路 ADC。LED 部分用 4 个级联 74HC595 移位寄存器控制 28 个 LED 通道，仅需 DATA、CLOCK、LATCH 三根 GPIO。音频部分使用 UDA1334A I2S DAC，将存储在 Flash 中的手碟采样进行实时混音后输出到 3.5mm 接口，支持复音；板上电位器提供直接音量调节。ESP32 固件运行一个独立采集任务，将检测到的事件放入任务间队列，由主任务完成力度映射、采样触发、LED 控制和 Web 服务；该架构把采集延迟与主循环中的音频/Web 任务解耦。ESP32 同时创建 Wi-Fi 接入点和异步 HTTP 服务器，用户通过浏览器上传 MIDI 文件、调整阈值、配置播放参数、进行 OTA 固件升级；阈值与播放参数存储在内部 EEPROM 中以跨重启保留。固件还可通过 TinyUSB 编译为 class-compliant USB-MIDI 设备。固件依赖 CD74HC4067 与 ShiftRegister74HC595 开源库，OTA 使用 ElegantOTA。

![Figure 4: Hardware and functional architecture of the autonomous DIY eHandPan. The 14 piezoelectric sensors and bi-color LEDs are connected through a DB25…](https://arxiv.org/html/2608.10185v1/figs/esp32fig.png)

下图展示了ESP32版本通过模拟多路复用器扫描传感器、移位寄存器控制LED、I2S DAC输出音频以及Wi-Fi网页配置的完整系统集成。


教学模式是系统的一个特色模块。加载 MIDI 文件后，固件将音符序列转换为 LED 引导指令：红/绿两种颜色可用于区分左右手对应音符。玩家敲击正确音面后，序列才前进到下一个音符，从而实现自定步调的跟灯练习。这与普通“MIDI 键盘灯条”不同，它直接把乐谱映射到手碟的物理击打布局上，并把手部分配与音符序列结合。浏览器访问的用户界面如下图所示：

![Figure 7: Web-based user interface of the ESP32 implementation. The interface is accessible from a standard web browser through the Wi-Fi access point created…](https://arxiv.org/html/2608.10185v1/x4.png)

下图展示了Web界面中MIDI文件上传、播放控制和音符进度显示等功能，支持自定步调的跟灯练习。


整体来看，这是一个机械、模拟电路、固件和交互系统深度耦合的完整工程项目。其设计选择强调低成本与易复现性，服务于教育、研究和 Maker 社区，而非追求极致的演奏精度或复杂合成能力；同时，双版本实现和开放源码使其成为可扩展的实验平台。

### 💡 核心创新点

- 论文声称提出了首个同时具备力度检测、视觉教学引导且硬件与固件完全开源可复现的手碟 MIDI 控制器；结合了 Arduino/ESP32 双 MCU 路线，分别覆盖 USB-MIDI 控制器与独立电子乐器两种应用场景。
- 低成本模块化设计：整机成本约 80 美元，使用回收 CD、木质沙拉碗等日常材料作为击打面与腔体，6 至 14 音可配置，无需专用 PCB 即可搭建 Arduino 版本。
- 力度感知与防重触发：通过压电传感器、保护/分压电路和 ADC 线性映射实现敲击力度估计；每通道独立 80ms hold-off 计数器避免压电余振造成的重复触发。
- 双色 LED 交互教学：红/绿 LED 区分左右手音符，将 MIDI 文件映射为物理击打面上的自定步调跟灯序列，敲击正确后才推进到下一音符。
- 完整开源的 DIY 生态系统：提供硬件设计文件、固件源码、物料清单、装配说明、视频教程和 Web 配置界面，允许用户自定义音高布局、阈值和播放参数。

### 📊 实验结果

论文在第 6 节进行了功能与部署验证，但多数为定性或非正式测量。主要结果如下：
- 信号调理验证：使用三种商用压电传感器，敲击原始峰值约 17V；经保护电路后约 8.9–10.1V；经分压后 ADC 输入均约为 2.59V，符合 Arduino 5V 与 ESP32 3.3V 的安全范围。
- Arduino 版本：通过 MocoLUFA 实现 USB-MIDI，成功被标准 DAW 和软件合成器识别；非正式计时显示固件处理循环小于 10ms（不包含外部合成器或主机延迟），作者认为适合实时演奏。
- ESP32 版本：连续扫描 14 路传感器，同时进行采样回放、LED 控制、USB-MIDI 和 Web 服务；浏览器界面可从桌面/移动设备访问；Wi-Fi 配置和 OTA 功能正常。
- 教学模式：使用代表性 MIDI 文件验证，LED 能正确指示下一个应敲击的音面，敲击后序列才前进；双色 LED 可区分左右手。
- 整机可靠性：多次演奏中所有 14 个音面均能正常检测，支持复音。
- 教育部署：Arduino 版本在 2024 年大学硕士课程中由学生完成组装、编程与评估；ESP32 版本在音乐系 workshop 中使用，确认可作为嵌入式系统、数字音频与交互音乐接口的教学工具。

### 🔬 细节详述

- 物料与成本：Arduino 版本的核心板为 Arduino Mega 2560（约 60 美元）或 Uno R3（约 40 美元），配合 220Ω LED 限流电阻与 470kΩ 分压电阻；ESP32 版本包含 ESP32-S3 开发板（N16R8, 8.2 美元）、UDA1334A I2S DAC（4.1 美元）、CD4067 模拟多路复用器（5.9 美元）、4 个 74HC595 移位寄存器（1.8 美元）、DB25 连接器（2.9 美元）等，整机约 80 美元。
- 接口与连接：ESP32 版本通过 DB25 连接器将沙拉碗中的传感器与 LED 信号接入专用 PCB；引脚表严格定义了 14 路传感器和 LED 对应的 DB25 引脚，焊接前需逐根标记并检查短路。Arduino 版本无专用 PCB，传感器直接接在 A0–A13 上，LED 经电阻接数字引脚。
- 固件实现：Arduino 固件采用轮询采样，阈值检测后按比例将 10 位 ADC 值映射为 MIDI velocity，并支持全局移调；提供 CSV 输出和循环计时两种诊断模式。ESP32 固件基于 PlatformIO，使用独立 FreeRTOS 任务扫描 CD4067，通过队列将事件传给主循环；依赖 CD74HC4067 与 ShiftRegister74HC595 库，音频通过 I2S 送到 UDA1334A，支持复音混音；Wi-Fi 接入点模式配合 ElegantOTA 支持浏览器配置与空中升级。
- 教学流程：加载 MIDI 文件后，固件解析音符序列，按左右手分配红/绿 LED 指引；只有敲击正确的音面，序列才继续。该设计将乐谱直接映射到手碟的物理布局，而不是简单的“键盘灯条”。
- 机械装配：两个木质沙拉碗分别承载 8 音与 6 音，构成 14 音；每个音使用回收 CD 作为击打面，压电传感器置于 CD 中心下方，泡沫垫用于传递振动并隔振；LED 导线通过碗身预钻孔引出。官方提供了分步装配说明和 YouTube 视频教程。

### ⚖️ 评分理由

*   创新性 (1.0/2)：[A_METHOD] 将力度感知、双色LED教学、双MCU路线和6-14音模块化整合为DIY电子手碟系统，并声称是首个同时具备这些能力的可复现方案，属于系统级组合创新；但内核仍是成熟MCU与传感器技术的工程集成，创新幅度中等。

*   技术严谨性 (1.1/1.5)：[A_METHOD] 与 [SCORING_SOURCE_7/30] 给出压电分压公式、R2按Arduino/ESP32平台调整、80ms防重触发、ESP32独立采集任务与队列解耦等设计，软硬件逻辑自洽；未见明显系统逻辑错误。

*   实验充分性 (0.7/1.5)：[A_RESULTS] 验证了信号调理电压约2.59V、Arduino处理循环<10ms、ESP32全功能运行、教学模式和课程部署；但 [A_LIMITS] 缺少端到端延迟、误触发/串音/动态范围/长期稳定性等系统指标，与已有系统仅属性表对比，教育部署无学习成果数据。

*   清晰度 (0.6/1)：[A_METHOD] 公式与架构描述清楚，但2.3/4.2/5.1称Arduino固件控制双色LED并支持交互学习，3.1却明确说当前固件仅限采集与发送MIDI、LED需额外模块；同一核心功能前后矛盾，显著影响文档一致性。

*   影响力 (0.7/1.5)：[A_SUMMARY] 指出约80美元成本可服务音乐教育、DMI研究和Maker社区；[A_RESULTS] 显示大学课程与音乐系workshop的实际使用，说明对音频教育领域有直接价值，但应用场景较垂直，影响范围有限。

*   开源 (1.5/1.5)：[A_OPEN] 源码仓库包含Arduino/ESP32固件（MIT），硬件设计文件含原理图、Gerber、BOM（CERN-OHL-P-2.0），并提供装配说明和视频教程；核心产物完整开放且文档完整，按固定锚点给1.5。

*   可复现性 (0.3/0.5)：[A_OPEN]/[A_METHOD] 提供了引脚表、接线、固件源码、PCB文件、装配步骤和诊断模式，大部分复现信息充分；但[A_LIMITS]指出阈值需按传感器调整，未给出明确默认阈值/标定步骤，存在少量缺失。

*   工程/实践价值 (1.3/1.5)：[A_METHOD] 展示了约80美元成本、6/14音配置、Arduino无PCB直连与ESP32专用PCB（多路复用/移位寄存器/I2S DAC/Web配置/OTA）的完整工程实现；[A_RESULTS] 确认课程与workshop可组装使用，工程完成度和实践价值较高。

### 🚨 局限与问题

原文声明的局限：
- 机械构造质量会影响敲击灵敏度与演奏一致性，不同传感器需要重新调整阈值。
- Arduino 版本不是独立乐器，必须外接合成器或 DAW 才能发声。
- ESP32 版本使用预录采样而非物理建模合成，表现力受采样质量限制。
- 模拟多路复用器顺序扫描会引入额外采样等待，但论文未量化该延迟。
论文未充分披露的问题：
- 缺少系统级端到端延迟测量，无法验证摘要中的“表现力可比原声手碟”这一声称。
- 没有报告误触发率、动态范围、串音抑制、长期稳定性等关键演奏指标。
- 与 Panduino、Lumen、Neotone 等系统的比较仅停留在属性表（颜色、音数、价格、是否开源），缺乏实际演奏或盲测对比。
- Arduino 版本 LED 教学功能存在自相矛盾：2.3 节和 4.2/5.1 节称固件控制 LED 并支持交互学习，但 3.1 节明确否定了这一点，说明文档内部严重不一致。
- 教育部署叙述较笼统，无具体学习成果或用户满意度数据，降低了“有效性”声明的说服力。

---

[← 返回 2026-08-12 语音/音乐/音频论文速递](/audio-paper-digest-blog/posts/2026-08-12/)
