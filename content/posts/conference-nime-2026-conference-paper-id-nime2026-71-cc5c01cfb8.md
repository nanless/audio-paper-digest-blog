---
title: "Sustained Interests: Lorentz Time Division Multiplexing (LTDM) for Active Collocated String Control."
date: 2026-09-13
draft: false
description: "论文用导电琴弦加永磁体实现传感与驱动同位，用 20 kHz 时分复用交替完成感应电动势采样与脉宽调制洛伦兹力驱动，在单弦琴与改装自动竖琴和天气竖琴上验证了免校准自持，其代价是只能控制单轴、受热漂移与材料限制且伴随代码链接当前不可用。"
tags: ["信号处理", "音乐", "音乐生成"]
categories: ["nime-2026 论文"]
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_paper_id: "conference:nime:2026:conference-paper-id:nime2026_71"
paper_digest_source_kind: conference
paper_digest_conference_id: "nime-2026"
paper_digest_conference_record_url: "https://nime.org/proc/nime2026_71/index.html"
paper_digest_conference_pdf_url: "https://nime.org/proceedings/2026/nime2026_71.pdf"
paper_digest_api_reader_contract: "beginner-researcher-v3"
paper_digest_api_reader_article_sha256: "a0461840cc279ed94e529ea28a25a5c40d3c0aafd33ed4b833979b9eae429684"
paper_digest_api_reader_plan_sha256: "e4c1681548cf7119b5ca9bc48dfcf0ff9a6528fdf2cd964f27026a6274f374cb"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings-v4"
paper_digest_api_reader_source_bindings_sha256: "1d38e6642c732896c57509d2bb5f390142b07fd9887bb2802f34a759a0ec5618"
paper_digest_api_reader_source_table_count: 2
paper_digest_api_reader_source_formula_count: 0
paper_digest_api_reader_structured_artifacts_sha256: "96e315f8a6d7e45e11fd7eb542f8c818c51d73684b9d4b9abcaa404bc199cdb1"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity-v1"
paper_digest_api_reader_author_identity_sha256: "3a76bef15019fe1be3976300fc0119b7609603d462a6694a06d70748e28dc6c1"
paper_digest_api_reader_author_count: 2
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity-v1"
paper_digest_api_reader_resource_identity_sha256: "9f79c75364f6ea5fffa345d73d195f4a26995b349804420d652a3bdb0757b85b"
paper_digest_api_reader_resource_count: 2
paper_digest_api_reader_decision_projection: "api-reader-decision-projection-v2"
paper_digest_scoring_contract: "api-scoring-audit-v2"
paper_digest_taxonomy_contract: "paper-taxonomy-flat-tags-compat-v1"
paper_digest_taxonomy_selection_contract: "paper-taxonomy-selection-v1"
paper_digest_taxonomy_registry_version: "paper-taxonomy-v1"
paper_digest_taxonomy_registry_sha256: "15c82a567ce5a55dc1175684ed08b64c158558639d9c8fb822c9587ec32a8778"
paper_digest_taxonomy_concepts: [{"facet":"method","id":"method.signal-processing","label":"信号处理"},{"facet":"signal","id":"signal.music","label":"音乐"},{"facet":"task","id":"task.music-generation","label":"音乐生成"}]
paper_digest_primary_task: "音乐生成"
paper_digest_primary_method: "信号处理"
paper_digest_score: 5.9
paper_digest_rank_bucket: "前50%"
paper_digest_document_type: "系统技术报告"
paper_digest_conference_structure: replayable-pdf-layout-v1
---

# 📄 同一根弦又当传感器又当执行器：洛伦兹时分复用如何实现同位自持

> 英文题目：*Sustained Interests: Lorentz Time Division Multiplexing (LTDM) for Active Collocated String Control.*

> 会议身份：`conference:nime:2026:conference-paper-id:nime2026_71`


> ✅ 来源为官方会议 PDF；表格与 Figure 按原文证据绑定。PDF 公式以原页区域图片展示，未冒称作者原始 TeX。

> 会议来源：[官方记录](https://nime.org/proc/nime2026_71/index.html) · [官方 PDF](https://nime.org/proceedings/2026/nime2026_71.pdf)

标签：#信号处理 #音乐 #音乐生成

评分：**5.9/10** | 创新 1.2/2 | 技术严谨 1.0/1.5 | 实验充分 0.6/1.5 | 清晰度 0.8/1 | 影响力 0.8/1.5 | 开源 0.2/1.5 | 可复现 0.3/0.5 | 工程/实践 1.0/1.5

排名：前50% | 文档类型：系统技术报告

## 👥 作者与机构

- Adam Schmidt：机构信息未能从会议 PDF 纯文本可靠映射
- Andrew McPherson：机构信息未能从会议 PDF 纯文本可靠映射

## 📌 核心摘要

针对导电弦需分离传感与作动而存在串扰延迟与校准负担的问题，本文提出洛伦兹时分复用方案，其输入为永磁场中弦横向速度感生的电动势，输出为经同一根弦回注的脉宽电流产生的洛伦兹力，目标是在不干扰拨奏下实现自激延音。先由感应级接收弦振动电压输入，经前置放大、精密全波整流与钳位输出速度幅值与极性信号，该幅值与极性直接作为调度级的反馈输入。再由固件调度级接收该反馈，以20kHz帧划分传感与作动时隙以隔离串扰，并将采样速度线性映射为作动时隙的选通管与占空比指令，该指令直接进入作动级执行。最后由互补场效应管桥接收占空比指令向弦注入双向电流以补充能量，并叠加与均方根成反比的随机噪声起振与自动增益钳制输出目标响度功率。在20kHz分时设置下，帧周期的持续时间指标为50μS，高于作动窗口的持续时间指标20μS。与分离线圈反馈相比，关键差异是同一物理弦经高速分时交替承担传感与作动而天然同位，省去传递函数补偿且直导线低电感更易触达高频泛音。该结论适用边界受限于非铁磁高电导率弦与单轴横向振动，缠弦在分时频率处啸叫与热致失谐等外推尚未验证，原文未披露训练、推理或部署成本。

## 🔗 开源与复现资源

- 代码相关资源：<https://github.com/aschmidt99/LTDM_NIME2026> — 链接不可用（HTTP 404）
- 演示资源：<https://github.com/aschmidt99/LTDM_NIME2026> — 链接不可用（HTTP 404）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 输入是什么，目标是什么，这篇解读要交付什么？

本文解读对象是会议论文 Sustained Interests: Lorentz Time Division Multiplexing for Active Collocated String Control，作者来自帝国理工学院戴森设计工程学院。目标读者是刚进入语音、音乐与音频领域的研究生，需要能核对实验条件并复述方法。输入只有论文正文证据与本次收到的官方原图像素，不引入其他评价。必须保留的信息包括硬件连接方式、帧时序、传感与驱动电路参数、固件三项改进、两个乐器案例的行为差异、材料与控制局限，以及代码与演示链接当前不可用。

输出按学习依赖展开，先讲反馈乐器任务与相关路线，再讲洛伦兹时分复用的全景与组件计算，然后讲构造与演奏验证，最后讲复现步骤与适用边界。全文只讲论文实际研究的导电弦自持任务，教学用例子会明确标注为例子，不虚构数值或效果。

### 反馈乐器此前如何传感与驱动，为何需要同位？

论文把自身放在电磁驱动乐器与反馈驱动乐器的交叉点上。电磁驱动常见做法是用螺线管电磁铁、振动换能器或扬声器线圈去驱动共鸣体，属于开环驱动，即用合成或预录信号驱动执行器。反馈驱动乐器则多一个闭环，要求有共鸣体、有传感方法、有驱动方法，以及传感器到执行器之间足够大的环路增益，从而在某些频率自持振荡。典型例子是 Halldorophone 用吉他式拾音器传感弦振动，再用固定在琴体上的扬声器驱动琴体，传感与驱动作用在不同部件上。

混合数字声电机械乐器进一步用实时信号处理改变房间、弦或电路的阻尼与共振，但仍依赖分立传感器与执行器。分立结构带来机械传播延迟，需要估计传感点到驱动点的传递函数并做校准，一旦布置偏移就可能失稳。文献中应对思路有自适应抵消驱动串扰，或让同一换能器在传感与驱动角色间快速切换。论文选择后者，即时间分割复用，动机是把校准负担从数字补偿转移到时序隔离上。

相关工作还区分了动圈扬声器与动圈话筒的类比，这直接对应后文洛伦兹力与法拉第感应的互逆关系。

### 要解决的演奏问题是什么，约束有哪些？

要解决的问题是如何在不触碰弦、不加外部传感器与执行器、不做逐台校准的前提下，让音乐家用了几个世纪的普通金属弦起振并无限延音，同时保留拨弦、击弦等传统激发方式。约束来自三方面。第一是部署约束，希望只用两根电线夹到弦的两端，再把永磁体靠近弦即可工作，能在不同乐器间快速迁移。第二是控制约束，希望传感与驱动同位，避免测量传递函数和逐次调参。

第三是音乐约束，希望音量可控、音色可探索，既能稳定延音，也能主动缩短衰减，还能通过移动磁体选择泛音。论文明确不追求用采样缓冲做常规音频效果，因为那会引入延迟并破坏同位控制。评价标准不是信噪比或音高准确率，而是能否可靠起振、能否钳位在目标响度、能否在两种机械结构上表现出可区分且可演奏的行为，以及材料与电气边界是否被如实报告。

### 洛伦兹时分复用全景：一个样本走完全程

洛伦兹时分复用英文为 Lorentz Time Division Multiplexing，缩写为 LTDM。白话说就是同一根导电弦轮流当话筒和扬声器。先沿一个控制帧走完输入到输出。输入是弦在磁场中的横向速度，输出是下一段驱动窗口内推弦的电流脉冲。弦两端用导线连到控制器，一块或多块钕磁体靠近振动段。

当弦运动时，磁场中运动导体产生感应电动势，控制器在传感窗口采样该电压幅值与极性。当轮到驱动窗口时，控制器根据采样速度决定电流方向与导通时长，让电流流过同一根弦，弦在同一磁场中受到洛伦兹力而被推一把。然后留一段静置时间让驱动残留振铃耗散，再进入下 1 帧传感。帧率固定为 20 kHz，因此每帧 50 微秒，理论可感知与驱动上限为 10 kHz。论文强调直弦电感很小，不像螺线管拾音器那样有明显相位滞后与带宽限制，因此高频泛音更容易被驱动。

整个环路不需要知道弦的张力、长度或线密度，靠闭环共振自行锁定到弦的谐振频率。
为理解双向能量流动，先看总览图如何把传感与驱动画在同一根弦上。该图用红色表示传感量，用蓝色表示驱动量，左右各有一只手持磁体靠近弦。

> **看图路径：** 1. 先找到左右两只手各持的一块标 B 磁体及其周围灰色磁感线；2. 再沿 X 到 Y 的黄色弦看中部蓝色电流箭头 Iin 方向；3. 对比左右两端红色速度箭头 v 与蓝色力箭头 F 的上下关系；4. 读出中部红色标注的输出电压等于 XY 端电压的关系

[![原论文 Figure 1：Using magnets and an electrically conductive musical instrument string as a sensor and actuator…](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/nime-2026/a85eac1895c6/figure-1.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/nime-2026/a85eac1895c6/figure-1.png)

*论文图 1。原论文 Figure 1：“Using magnets and an electrically conductive musical instrument string as a sensor and actuator simultaneously. Applying current Iinduces force Fwhile velocity vinduces voltage ε.”。*

该图显示弦端点标为 X 与 Y，中部标注输出电压等于 XY 端电压，蓝色箭头表示流入弦的电流 Iin，蓝色小箭头表示弦受到的力 F，红色箭头表示弦的振动速度 v。左右磁体下方磁感线示意磁场分布，力与速度方向在两端相反，提示多磁体组合会产生相长与相消。读图后要对应到真实信号，红色电压正比于速度与磁通密度，蓝色力正比于电流与磁通密度，二者共享同一磁场与同一弦段，这正是同位的基础。

### 传感链如何把微伏电压变成微控制器可读信号？

感应电动势传感英文为 electromotive force sensing，简称 EMF 传感。白话说就是动弦切割磁感线变成小电压。法拉第定律描述电压大小正比于速度、磁通密度与处于磁场中的弦长，楞次定律描述极性。论文简化为均匀磁场与直弦假设，只传感与磁场正交的那个振动轴。实际弦上感应电压只有微伏到毫伏量级，必须放大。

电路用 2 级同相运算放大器 OPA1612 级联，总增益为 250 到 500，把弦两端电压放大到伏级。放大后仍是双极信号，正负代表运动方向。但 Teensy 4.1 微控制器的模数转换器只能读 0V 到 3.3V，因此分成两路处理。一路经精密全波整流取绝对值，再经 3.3V 钳位保护送入 ADC，得到幅度。另一路经比较器以 0V 为阈值输出 0V 或 3.3V，送入数字口，得到符号。

微控制器把幅度与符号结合即可恢复带方向的速度样本，信息不丢失。
为核对时序隔离，先看传感与驱动如何在每帧内错开。下图上半是单弦琴结构，下半左是帧时序，下半右是控制器通路。

> **看图路径：** 1. 先看上半单弦琴木条、两端黑支架与中部磁体和弦的关系；2. 再看左下 Sig1 红色传感窗口与 Sig2 蓝色驱动窗口在 t0 到 t4 内如何错开；3. 最后看右下电子控制器中红色传感链与蓝色驱动链如何汇入同一处理器

[![原论文 Figure 4：Sensing (red) and actuating (blue) events are interleaved within each frame (bottom left).](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/nime-2026/a85eac1895c6/figure-4.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/nime-2026/a85eac1895c6/figure-4.png)

*论文图 4。原论文 Figure 4：“Sensing (red) and actuating (blue) events are interleaved within each frame (bottom left). Hardware bridges the processor to the physical string via two pathways (bottom right).”。*

该图上半显示弦横跨木条两端支架，中部有磁体，左侧接地，右侧引出感应电压，顶部标注电流、速度与力。下半左显示 1 帧内 Sig1 红色传感窗口先出现在 t0 到 t1，Sig2 蓝色驱动窗口后出现在 t2 到 t3，t3 到 t4 为静置。下半右显示传感电路经 ADC 进入处理器，处理器经脉宽调制寄存器进入驱动电路，二者标注为在 Sig1 与 Sig2 期间分别执行。读图后要落实为操作，传感只在驱动电流已耗散后采样，驱动只在采样计算完成后施加，这是避免串扰的关键。
为核对传感调理细节，再看放大、整流与符号分离的具体信号形态。

> **看图路径：** 1. 先沿左上弦到 K1 与 K2 两级放大器再到 signal1 的路径看信号放大；2. 再对比右上 signal1 双极正弦与 signal2 整流后全正包络的形状差异；3. 最后看右下 Teensy 内幅度阶梯与符号方波如何与蓝色 Sense 触发对齐

[![原论文 Figure 5：An implementation of EMF Sensing using analog amplification and conditioning for an MCU](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/nime-2026/a85eac1895c6/figure-5.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/nime-2026/a85eac1895c6/figure-5.png)

*论文图 5。原论文 Figure 5：“An implementation of EMF Sensing using analog amplification and conditioning for an MCU”。*

该图左上仍是单弦与磁体，左下是 K1 与 K2 2 级放大、signal1 双极信号、signal2 整流钳位链，以及比较器输出的 signal4。右上 system signals 显示 signal1 为正弦，signal2 为全正包络。右下 Teensy 4.1 内显示蓝色 Sense 触发、黄色阶梯幅度与绿色符号方波。该图证明幅度与符号是分开数字化的，ADC 只读幅度，数字口只读方向，二者靠同一触发对齐。复述时要强调增益与钳位的作用，增益解决动态范围，钳位保护引脚，整流解决单极输入限制。

### 驱动链如何把速度样本变成推弦的电流脉冲？

洛伦兹力驱动英文为 Lorentz force actuation。白话说就是给磁场中的弦通电流，弦就会受力。方向遵循右手定则，与电流和磁场都正交。论文用 1 对互补金属氧化物场效应管做推挽输出，PMOS 导通时把正 12V 经弦接到地，NMOS 导通时把负 12V 经弦接到地，从而双向推弦。控制方式是脉宽调制，英文为 Pulse Width Modulation，缩写为 PWM，即在固定驱动窗口内改变导通时长来改变平均推力。

微控制器采样速度后决定选哪只管子以及导通多久。电路中有 3 个电阻电容要素需要记住。R1 建模弦自身电阻，随直径、长度、温度与材料变化，小弦可低至 0.1 欧姆量级。R2 为限流电阻，通常取 1 欧姆或 2 欧姆，保护电源与大电容，但会降低最大推力。弦引线杂散电感 L 与负载寄生电容 C 会形成谐振槽路，在脉冲边沿产生振铃。

R3 为功率电阻，用于耗散振铃，取值在 100 欧姆到 680 欧姆之间经仿真与实验折中。R3 太小会分流驱动电流，太大则振铃拖入下一传感帧。论文还指出最大驱动窗口为 20 微秒，占空比上限为 40%，若驱动电源为 24W，则有效驱动功率约为 9.6W，脉冲陡峭边沿的高频分量主要变成热量而不贡献可听驱动。

**洛伦兹力驱动 × 感应电动势传感：** 洛伦兹力驱动负责把电流变成力，电流流过处于磁场中的弦段时受到正交方向的力；感应电动势传感负责把速度变成电压，弦在磁场中运动时切割磁感线产生正比于速度的电压。二者搭配的理由是电磁可逆性让同一段弦和同一块磁体既能执行又能感知，组合意义是构成不需要外部拾音器或音圈的同位换能器，为后续时分复用提供物理基础。

**时分复用 × 同位传感驱动器：** 时分复用负责在时间上错开传感窗口与驱动窗口，避免驱动大电流污染微伏级感应电压；同位传感驱动器负责在空间上让传感点与驱动点重合，消除机械传播延迟和传递函数校准。二者搭配的原因是单根弦无法同时大电流驱动又干净测电压，组合意义是每 50 微秒 1 帧内先采样速度再施加推力，形成稳定的闭环反馈。

### 没有神经网络训练时，固件实际计算什么？

本研究没有训练神经网络模型，也没有梯度、反向传播、权重冻结或数据集划分，因此 training 节的任务是讲清真实的逐帧计算与交互设计。基础行为是线性映射，把传感速度值映射为驱动脉冲占空比，同相则延音。但固定增益出现两个音乐可用性问题。静止时反馈恒为零，需要拨弦才能起振，不符合只用磁体演奏的设想。高增益虽能靠本底噪声起振，却会让弦振得过响。

论文为此加入三项固件改进。第一是噪声驱动起振，每帧给脉冲长度加随机值，表现为白噪声式的随机幅值与极性，即使无振动也在宽带激励弦的谐振。但噪声在自持后仍可闻。第二是均方根监测，英文为 root mean square，缩写为 RMS。每 50 微秒存一个样本，用 200 点循环缓冲在非关键时段计算运行 RMS，以估计振动功率。

RMS 越大，噪声缩放系数越小，系数被限制在 0.0 到 1.0 之间，并有一个加权系数让较小的 RMS 也能较快压住噪声。第三是自动增益控制，英文为 automatic gain control。把实测 RMS 与目标 RMS 比较，低于目标加大反馈增益让起振更快，高于目标减小增益防止过载，相当于音量钳位。第四是主动阻尼，把驱动极性反转，用负反馈对抗振动，缩短拨弦余音。但因只传感与驱动一个轴，阻尼效果有限。

论文未报告目标 RMS 的具体数值选择与收敛曲线，这是复现时需要自行扫参的缺项。

**脉宽调制 × 反馈增益：** 脉宽调制负责把需要的驱动强度编码为驱动管导通时长，占空比越大注入能量越多；反馈增益负责把采样到的速度幅值映射为占空比，决定正反馈还是负反馈。二者搭配的原因是微控制器不能直接输出连续大电流模拟量，只能用开关时长控制平均力，组合意义是实现无限延音用的同相加能，以及主动阻尼用的反相抑振。

**均方根监测 × 自动增益控制：** 均方根监测负责用 200 点循环缓冲估计弦振动平均功率，判断弦是静止、起振还是过强；自动增益控制负责把实测均方根与目标值比较，低于目标加大反馈增益，高于目标减小增益。二者搭配的原因是固定增益无法同时解决静止不起振和高增益过响的问题，组合意义是把噪声起振和稳态音量解耦，让振动钳位在期望响度附近。

### 机械、电气与帧预算如何搭建，成本是多少？

机械搭建以单弦琴为例，黄铜弦张紧在硬枫木条的琴桥与弦枕之间，一端用钉固定，另一端用齐特琴弦轴调音，钕磁体放在振动段下方，两根导线夹到弦的端点。电气核心是 Teensy 4.1，利用其 FlexPWM 定时器、内置高分辨率 ADC 与高速处理器实现同步采样与驱动。定制印刷电路板为双通道 LTDM 板，提供发送与返回插孔，可外接吉他效果器或模块合成器，也可用任意信号源作为驱动源。帧预算固定为 20 kHz，低于人耳上限以隐藏开关噪声。

下表把每帧 50 微秒的分配整理为可核对的时序，比较问题是各阶段是否留足采样、计算、驱动与静置时间，公平条件是同一帧率与同一 t0 到 t4 定义，指标方向是时长越接近上限则驱动越强但串扰风险越大。

| 阶段 | 时间窗口 | 时长 | 帧内任务 | 可运行取值 |
| --- | --- | --- | --- | --- |
| 传感采样 | t0 到 t1 | 5 微秒 | ADC 采集并存储速度样本 | 5 微秒 |
| 计算映射 | t1 到 t2 | 5 微秒 | 计算驱动脉冲长度 | 5 微秒 |
| 施加电流 | t2 到 t3 | 20 微秒 | PWM 导通推挽管推弦 | 最大 20 微秒 |
| 静置耗散 | t3 到 t4 | 20 微秒 | 等振铃耗散只剩感应电压 | 20 微秒 |
| 整帧 | t0 到 t4 | 50 微秒 | 传感加驱动上限 10 kHz | 20 kHz 帧率 |

表后解释是该分配把采样与计算压缩在前 10 微秒，留出 20 微秒驱动与 20 微秒静置，支持的判断是同位串扰主要靠静置隔离而非数字抵消。代价是驱动占空比上限 40%，有效功率受限。

未胜出项是更高帧率方案，论文指出更高帧率会挤占 CPU 计算时间，且乐器弦在 10 kHz 以上谐波能量不大，因此未采用。部署成本按原文只有电源功率与电阻选型，未报告延迟分布与 CPU 占用率。
下表把传感增益与驱动电气参数放在同一条件下比较，比较问题是放大是否足够而驱动是否安全稳定，公平条件是同一黄铜单弦与同一永磁布置，指标方向是增益越大动态越好但削波风险越大，限流与泄放越大越安全但推力越小。

| 条件 | 指标 | 放大取值 | 驱动取值 | 比较对象 |
| --- | --- | --- | --- | --- |
| 传感链 | 电压增益 | 250 到 500 | OPA1612 级联 | 微伏到毫伏输入 |
| 限流 | 串联电阻 | 1 欧姆或 2 欧姆 | 保护电源 | 0.1 欧姆小弦 |
| 驱动电源 | 供电与占空比 | 正 12V 与负 12V | 最大 40% 占空比 | 50 微秒周期 |
| 有效功率 | 平均功率 | 24W 电源 | 9.6W 有效 | 超声边沿变热 |

表后解释是该组参数在信噪比、安全性与稳定性之间折中，支持的判断是 100 欧姆到 680 欧姆能在不牺牲太多推力时稳定反馈。代价是 R2 与 R3 都分走一部分功率，PWM 陡边沿的超声分量只产热。

反例是铜包钢弦会在 10 kHz、5 kHz 或 2.5 kHz 出现与开关频率相关的啸叫，说明电气稳定不等于所有材料稳定。

### 两个乐器案例测出什么不同行为？

论文用同一电路与同一固件驱动两个机械结构对比的案例，证明行为差异来自物理布置而非代码分支。第一个案例是改装自动竖琴。原本每根弦需要独立通道，但作者把金属琴桥与弦枕换成能让相邻弦搭接的导电杆，使多根弦串成一条连续电气通路，只用单通道两点连接即可。演奏时手持磁体靠近哪根弦，哪根弦就进入反馈，响应可预测，面板共鸣箱结实，弦间距规则，手势是主要控制入口。该乐器用于 2026 年 alt.nime 作品。

第二个案例是天气竖琴，与密歇根大学合作，把黄铜弦张在低音鼓框上，经手工木桥耦合到鼓膜，磁体固定在鼓面与鼓框而非手持，由实时天气数据流驱动自演奏。物理复杂度带来非线性与不可预测但仍有周期乐感的声音，弦、鼓膜与磁体间的电磁与机械 sympathy 无需显式编程。论文报告视频示例放在伴随仓库，但本次收到的资源状态显示代码与演示链接均为 404 不可用，本次未能确认可达，不能写已公开。
为确认改装方式，先看自动竖琴的实物连接。

该照片显示电路板在左上，竖琴面板在右下，多弦横向排列，双手各持磁体。

> **看图路径：** 1. 先确认左上黑色电路板与自动竖琴面板的相对位置和连线；2. 再数面板上横向并排的多根金色弦与两端固定结构；3. 最后观察左右两手各持的小磁体与弦面的靠近位置

[![原论文 Figure 9：Augmented Autoharp connected to the LTDM PCB](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/nime-2026/a85eac1895c6/figure-9.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/nime-2026/a85eac1895c6/figure-9.png)

*论文图 9。原论文 Figure 9：“Augmented Autoharp connected to the LTDM PCB”。*

该图可见左上黑色电路板带有绿色 Teensy 子板与多个插孔，右下黑色自动竖琴面板有多根平行金色弦，左手磁体靠近玫瑰图案上方弦段，右手磁体靠近音孔右侧弦段。解释是两点电气连接加手持磁体即可选择反馈弦，磁体位置决定哪根弦起振与音色，复述时要强调串联电气通路是关键，否则仍需多通道。

**交感振动 × 移情振动：** 交感振动指 acoustic 乐器上靠机械耦合被动带起另一根弦的现象，不需要电气连接；移情振动指本文多弦串联成同一电气通路时，一根弦的传感与驱动信号主动激励另一根弦的现象。二者搭配比较的原因是都表现为弹一处而多处响，但后者可用磁体位置放大或引导 sympathy，组合意义是把传统被动共鸣变成可操控的电磁互联演奏维度。

### 去掉哪一项会失去起振、稳态或可演奏性？

论文没有神经网络消融表，但有功能层面的对照，可按去掉某机制会发生什么来组织。去掉时分复用的静置窗口，驱动振铃会直接污染下 1 帧传感，系统更易失稳，这是用时间隔离替代自适应抵消的代价与收益。去掉随机噪声起振，静止弦需要拨弦才能进入反馈，失去只用磁体演奏的入口。去掉 RMS 监测与噪声缩放，自持后仍能听到白噪声，稳态不干净。去掉自动增益控制，固定高增益起振快但过响，固定低增益音量合适但起振慢，无法同时满足。

反转反馈极性则从延音变为阻尼，拨弦余音比被动衰减更短，但因单轴限制阻尼不彻底。论文还给出被动衰减、无限延音与主动阻尼的波形对照，显示延音段幅值维持，阻尼段幅值更快收敛，下方 PWM 脉冲密度随之变化。未评测边界是多轴同时控制，单电流流过整根弦无法区分两轴贡献，即使放两个正交磁体，传感信号也会压成 1 维而丢失来源信息。

### 哪些材料、轴向与热效应限制了使用？

论文用单独一节列出 7 类限制，复现前必须逐项检查。第一是控制轴，只能影响与磁场正交的一个振动轴，主动阻尼因此受限。第二是功率瓶颈，20 kHz 下最大驱动 20 微秒，有效功率约 9.6W，且脉冲边沿超声分量只产热。第三是常规数字信号处理受限，音频样本不能进采样缓冲做常规效果，否则延迟破坏同位，Teensy 音频库到外部硬件的转接也会引入不稳定。第四是铁磁弦，铁、钴、镍或其合金会被磁体直接吸引，产生非谐泛音，电吉他手称为 stratitis，在音乐上多被视为不 desirable。

第五是热致降调，电流在弦电阻上耗散为热，弦受热伸长，在摩擦固定的调音结构下张力下降而音高降低，黄铜因高导电且无铁磁性而表现最好。第六是张力致升调，驱动过强时平均张力增大，音高比拨弦略高，松弦更明显。第七是未知效应，铜缠或青铜缠钢芯弦会进入与开关频率相关的不稳定振荡，在 20 kHz 采样下听到 10 kHz、5 kHz 或 2.5 kHz 啸叫，尽管绕丝与芯接触而不构成显著电感。教学例子是若把缠弦换成实心黄铜或钢弦，系统可分别自持，这支持问题出在复合结构而非单纯电感。

### 复现先做什么，需要哪些参数与检查？

复现应从单弦琴开始，而非直接改装多弦乐器。第一步按原文机械搭建，用黄铜弦、硬木条、琴桥与弦枕、齐特弦轴、钕磁体与两根导线，确保弦电气隔离而不经导电琴桥短路。第二步按帧预算配置 Teensy 4.1，用 FlexPWM 生成 t0 到 t4 时序，ADC 约 5 微秒，计算约 5 微秒，驱动最大 20 微秒，静置 20 微秒，帧率 20 kHz。第三步按传感链焊接 OPA1612 2 级放大，增益先取 250 到 500 中间值，全波整流加 3.3V 钳位，比较器输出符号，分别进 ADC 与数字口。第四步按驱动链焊接 PMOS 与 NMOS 推挽，正负 12V 供电，R2 取 1 欧姆或 2 欧姆，R3 从 100 欧姆到 680 欧姆扫参观察振铃。

第五步先用拨弦验证传感波形，再开小增益验证延音，然后加入 200 点 RMS、噪声缩放与自动增益控制，最后试反相阻尼。关键超参数是帧率、窗口分配、增益、R2、R3 与目标 RMS。信息条件是必须知道磁体极性布置与弦长处于磁场中的长度，因为多磁体反极会抵消基频而突出 2 次谐波。代码与演示链接在本次检查中返回 404，当前不可用，不能依赖下载运行，只能按正文电路与时序自行实现。安全方面电源电压低且放大器有短路保护，但仍需检查弦发热与电源限流。

### 何时值得尝试，还需补哪项验证？

当乐器已有电气隔离的导电弦、希望快速获得可演奏的无限延音与磁体手势控制，且不愿做传递函数校准时，值得尝试 LTDM。当需要双轴独立控制、精确音高保持或重度音频效果链时，应谨慎，因为单轴、热漂移与缓冲延迟是固有代价。材料上优先选黄铜，避开铁磁弦与缠弦，或把缠弦作为待验证项单独测试啸叫阈值。演奏上若要键盘式固定磁体加开关控制，需另设计机械或图形界面决定哪根弦接入反馈。

还需补的验证包括目标 RMS 与起振时间的定量曲线、不同磁体位置与极性对泛音的系统测量、长时间演奏的音高漂移记录，以及主动阻尼缩短衰减的具体秒数。论文的贡献在于把时分复用从线圈换能器搬到直弦洛伦兹结构，用同一磁场与同一弦段实现免校准同位控制，并在两种机械极端上展示稳定与混沌两种美学。复述时要守住边界，报告为已验证，机制解释为有限支持，跨乐器泛化为待验证，不承诺延迟、误判率或成本已改善。

## 📐 原文公式与排版

以下展示论文原页中的数学表达区域，保留原始上下标、分式和符号排版。区域序号仅用于本文导航，不是论文公式编号。

[![原文数学表达区域 1，PDF 第 3 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/nime-2026/482fef4199c0/figure-1.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/nime-2026/482fef4199c0/figure-1.png)

区域 1 · [查看论文原页](https://nime.org/proceedings/2026/nime2026_71.pdf#page=3)

[![原文数学表达区域 2，PDF 第 3 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/nime-2026/482fef4199c0/figure-2.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/nime-2026/482fef4199c0/figure-2.png)

区域 2 · [查看论文原页](https://nime.org/proceedings/2026/nime2026_71.pdf#page=3)

[![原文数学表达区域 3，PDF 第 3 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/nime-2026/482fef4199c0/figure-3.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/nime-2026/482fef4199c0/figure-3.png)

区域 3 · [查看论文原页](https://nime.org/proceedings/2026/nime2026_71.pdf#page=3)

[![原文数学表达区域 4，PDF 第 6 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/nime-2026/482fef4199c0/figure-4.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/nime-2026/482fef4199c0/figure-4.png)

区域 4 · [查看论文原页](https://nime.org/proceedings/2026/nime2026_71.pdf#page=6)

[![原文数学表达区域 5，PDF 第 6 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/nime-2026/482fef4199c0/figure-5.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/nime-2026/482fef4199c0/figure-5.png)

区域 5 · [查看论文原页](https://nime.org/proceedings/2026/nime2026_71.pdf#page=6)

[![原文数学表达区域 6，PDF 第 6 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/nime-2026/482fef4199c0/figure-6.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/nime-2026/482fef4199c0/figure-6.png)

区域 6 · [查看论文原页](https://nime.org/proceedings/2026/nime2026_71.pdf#page=6)

另有 13 个候选区域因边界不明确或图片数量、尺寸限制未展开；请[查看完整论文](https://nime.org/proceedings/2026/nime2026_71.pdf)中的原始排版。

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。
- 评分规则：type-aware-v1
- 评分模型：muse-spark-1.3-contributor
- 评分请求协议：openai_responses

---

[← 返回 nime-2026 论文汇总](/posts/conference-nime-2026/)
