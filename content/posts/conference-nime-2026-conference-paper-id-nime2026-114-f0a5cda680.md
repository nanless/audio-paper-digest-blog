---
title: "Recipe for a ghost catcher: an infrasound-powered hybrid instrument-sonic installation."
date: 2026-09-13
draft: false
description: "论文要解决的是把偶然发现的次声驱动金属失真现象 CLSTR0 从打击乐演奏中剥离出来，做成可长期自主发声又允许随时插手的混合乐器装置 CLSTR1，其最强证据是 9 到 34 Hz 激励下金属碗在膜上自主爬行并调制音景的三种艺术实现，代价是位置极敏感、不可参数化且尚无观众交互的系统测量。"
tags: ["生成模型", "音视频", "音乐", "音频交互"]
categories: ["nime-2026 论文"]
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_paper_id: "conference:nime:2026:conference-paper-id:nime2026_114"
paper_digest_source_kind: conference
paper_digest_conference_id: "nime-2026"
paper_digest_conference_record_url: "https://nime.org/proc/nime2026_114/index.html"
paper_digest_conference_pdf_url: "https://nime.org/proceedings/2026/nime2026_114.pdf"
paper_digest_api_reader_contract: "beginner-researcher-v3"
paper_digest_api_reader_article_sha256: "139c6a1ee404cc4400682419cf8703650fff89be6c19092fb8896872c805e26a"
paper_digest_api_reader_plan_sha256: "25578aa075b8df365fbe77773e6c29a314dad6a749fabe71764dafe6905cb69b"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings-v4"
paper_digest_api_reader_source_bindings_sha256: "2c3c81f01fbbb42350dafe5da05433fb4e2d657e13b1ca0d6ab4512a35809c44"
paper_digest_api_reader_source_table_count: 2
paper_digest_api_reader_source_formula_count: 0
paper_digest_api_reader_structured_artifacts_sha256: "fdf9d69a8ac1bef731b94ffdb49a48cfc1193c29578aefdb9d8f52d4775adb65"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity-v1"
paper_digest_api_reader_author_identity_sha256: "da5e7747888d869db2b9e46a9ea076b184a0d3b42a7e31de7476c23d24086b53"
paper_digest_api_reader_author_count: 1
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity-v1"
paper_digest_api_reader_resource_identity_sha256: "5f136f2be2df995a713d4adccad4b18ec68973375cbf4d5123e22bea0cd4f7da"
paper_digest_api_reader_resource_count: 4
paper_digest_api_reader_decision_projection: "api-reader-decision-projection-v2"
paper_digest_scoring_contract: "api-scoring-audit-v2"
paper_digest_taxonomy_contract: "paper-taxonomy-flat-tags-compat-v1"
paper_digest_taxonomy_selection_contract: "paper-taxonomy-selection-v1"
paper_digest_taxonomy_registry_version: "paper-taxonomy-v1"
paper_digest_taxonomy_registry_sha256: "15c82a567ce5a55dc1175684ed08b64c158558639d9c8fb822c9587ec32a8778"
paper_digest_taxonomy_concepts: [{"facet":"method","id":"method.generative","label":"生成模型"},{"facet":"signal","id":"signal.audiovisual","label":"音视频"},{"facet":"signal","id":"signal.music","label":"音乐"},{"facet":"task","id":"task.audio-interaction","label":"音频交互"}]
paper_digest_primary_task: "音频交互"
paper_digest_primary_method: "生成模型"
paper_digest_score: 5.3
paper_digest_rank_bucket: "后50%"
paper_digest_document_type: "应用研究"
paper_digest_conference_structure: replayable-pdf-layout-v1
---

# 📄 让次声自己演奏：CLSTR1 如何把不可控的金属失真养在膜上

> 英文题目：*Recipe for a ghost catcher: an infrasound-powered hybrid instrument-sonic installation.*

> 会议身份：`conference:nime:2026:conference-paper-id:nime2026_114`


> ✅ 来源为官方会议 PDF；表格与 Figure 按原文证据绑定。PDF 公式以原页区域图片展示，未冒称作者原始 TeX。

> 会议来源：[官方记录](https://nime.org/proc/nime2026_114/index.html) · [官方 PDF](https://nime.org/proceedings/2026/nime2026_114.pdf)

标签：#生成模型 #音视频 #音乐 #音频交互

评分：**5.3/10** | 创新 1.2/2 | 技术严谨 1.0/1.5 | 实验充分 0.4/1.5 | 清晰度 0.8/1 | 影响力 0.6/1.5 | 开源 0.2/1.5 | 可复现 0.1/0.5 | 工程/实践 1.0/1.5

排名：后50% | 文档类型：应用研究

## 👥 作者与机构

- Rubén Bañuelos Preciado：机构信息未能从会议 PDF 纯文本可靠映射

## 📌 核心摘要

该工作输入为次声与低频振动，输出为金属激励物在膜面高速弹跳与自主爬行产生的非线性失真音景及视觉图案，难点在于该现象对摆放位置与耦合条件极度敏感且高度混沌，难以参数化建模。低频激励先由Lunason Bassnicophone经泡沫垫敲击传导或由Dayton Audio BST-1 Bass Shaker固定于框架后经数字合成驱动，将振动注入模块本体，其输出直接进入下一步膜体。张紧的不规则纹理塑料膜接着接收振动并放大传递，其张力由调音螺丝与激励物及手压重量共同设定，膜面振动输出驱动顶层金属钵运动。置于膜上的平底日式金属钵受迫高速弹跳发声并以不定步速爬行漂移，自主改变膜张力分布点，进而反向调制失真频谱形成闭环。相比将声音对象乐器化为可演奏音高或参数的思路，该设计刻意保持黑箱并将自主漂移视为能动交互因素，具有从无操作自主装置到多人共演连续切换的实际意义。在触发CLSTR0失真现象的测试条件下，上限激发频率指标为34 Hz，高于下限激发频率指标的9 Hz。当前结论适用边界受限于作者搭建的单模块原型与三件艺术个案，跨场地、跨材料与长期稳定性的失败条件尚未验证。原文未披露训练、推理或部署成本。

## 🔗 开源与复现资源

- 演示资源：<https://www.rubenbanuelos.com/clstr1/v/los-grandes-vuelos> — 链接可访问（HTTP 200）
- 第三方资源：<https://www.lunason.com/en/bassnicophone-1> → <https://www.lunason.com/en/bassnicophon> — 链接可访问（HTTP 200）
- 第三方资源：<https://doi.org/10.5281/zenodo.15698994> → <https://zenodo.org/records/15698994> — 链接可访问（HTTP 200）
- 第三方资源：<https://doi.org/10.5281/zenodo.1176460> → <https://zenodo.org/records/1176460> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 输入是什么：一个偶然听到的失真需要被养起来吗？

这篇论文的输入不是一个标准数据集，也不是一个要刷分的识别任务，而是一个在排练厅里偶然撞见的声音。作者是打击乐表演背景的研究者，他把那种声音命名为 CLSTR0，白话说就是金属物件放在振动表面上被弹起来、再落下、再弹起来时发出的持续嗡鸣加失真质感。你可以把它想象成有人把小铁碗倒扣在鼓皮上，鼓皮在你听不见的低频下抖动，碗跟着快速跳动并缓慢爬行，耳朵听到的是毛糙、非线性、谐波复杂的失真。

英文名 CLSTR0 是作者给这个现象的代号，后文 CLSTR1 则是为它建造的装置。目标很明确：不要把这个声音当作一次性的演奏技巧用完，而是为它造一个可以长期展出、允许观众自己上手、没人管也能自己响的物理对象。输出因此不是一段音频文件或一个分类标签，而是一个混合乐器声音装置及其 3 种艺术用法。必须保留的关键信息是现象三要素：激励频率、薄膜、金属物件，以及装置三角色：可被演奏、可被围观、可自主运行。

论文当前可核对的公开资源包括作者网站上的 Los Grandes Vuelos 演示页，状态为当前可用，制造商 Lunason 的 bassnicophone 页面同样当前可用，另有 2 篇 NIME 引文的数字对象标识符当前可用。本文不做营销式判断，只讲作者实际做了什么、什么没测。

### 前人把声音当现象展出时，提供了什么可学的做法？

相关路线有两条，都不是为了比性能，而是为了确立如何把声音现象当作审美主体。第一条是阿尔文·卢西埃的做法，白话说就是搭一个物理条件让声音自己展开，作曲家退后。论文提到的为军鼓与纯波振荡器与反射面而作的作品，以及长弦作品，都把给定的声学现象当作一个与音乐话语无关的审美飞地来陈列。作者从中学会的不是某个滤波器参数，而是把 CLSTR0 从曲目材料转为装置主体的立场转变。

第二条是妮可·拉惠勒的膜装置，白话说就是用厚硅胶膜当作耳朵去接住环境里的噪声，不做降噪提纯，反而把混乱的声团当作核心。作者在直接体验与交谈中学会拥抱无序绿洲，即允许不可建模细节继续存在，只给它一个能展开的环境。这两条路线共同解释了为什么 CLSTR1 不去量化与参数化 CLSTR0，而是保持黑箱并打开给观众触摸。需要区分的是，卢西埃与拉惠勒提供的是美学与交互姿态，不是可直接复用的电路或算法，论文也没有声称在信噪比或可控性上超越它们。

### 要解决的矛盾是什么：越想复现越发现位置敏感？

核心矛盾是现象很迷人但配方不明。作者最早用定音鼓、日本金属唱碗与 Lunason 低音乐器 bassnicophone 凑出了声音，英文名 bassnicophone 指一种能产生极低频的声学乐器。2021 年冬天在巴塞尔音乐学院排练室门口，指尖碰到放在定音鼓上的 bassnicophone，鼓皮把振动反射给倒扣的金属碗，碗响了，像幽灵低语失真。但把碗挪几厘米或换个角度，效果就消失。作者花了很长时间做排列组合试验，才慢慢理解激励频率、膜与金属物三者如何互相影响。

教学例子：这就像你知道做面包需要面粉、水、酵母，但不知道揉面温度与发酵时间，换个台面就失败。论文把已知材料叫作配料，把缺失的可重复做法叫作配方。任务因此被定义为建造一个模块，让 CLSTR0 能在可搬运、可展出的条件下稳定出现，同时保留其熵增的、不可预测的声像与视觉变化。作者明确把这种不可预测性理解为能动性，白话说就是系统自己的漂移也是交互的一方，不是等待人类指令的被动发声体。

### CLSTR1 全景：一个样本从次声到失真要走几步？

先沿一个样本走完全程。假设你在膜上放两只平底日本唱碗，膜下或框上接一个低频换能器。计算机发出例如十几赫兹的正弦或调制信号，经换能器变成机械振动传给框与膜，膜抖起来，碗被弹起并发出嗡鸣，碗在持续振动中缓慢爬行，接触点与张力分布改变，声音的谐波与节奏跟着变，人可以伸手按膜、挪碗、加重量，计算机视觉看到碗走了就微调激励频率让运动保持稳定。这就是输入到表示到组件到目标到输出的闭环。

CLSTR1 的物理本体是一个带木框与调音螺丝的鼓状模块，膜用打磨出纹理的塑料鼓皮，例如 Remo Renaissance 定音鼓皮，目的是让表面不均匀以增加不可预测性。激励源是外置的，可换，论文实际探索过两种：用软槌敲击放在膜上泡沫垫上的 bassnicophone，以及固定在框上的 Dayton Audio BST-1 低频振动器。计算部分包括 SuperCollider 频率调制补丁与 Touch Designer 加 Python 的视觉跟踪，按需再接实时音色迁移。作者强调不把控制参数映射为音高音量旋钮，而是只标出哪些部件可动，让观众自己发现动作与声音的关系。

要理解 CLSTR1 为何在暗室里看起来像发光的桌子，先看它的实物形态与展陈方式，膜上倒扣的碗是唯一的声源与视觉焦点。

> **看图路径：** 1. 先看发光的圆形膜面与上面倒扣的三个金属碗的相对位置；2. 再看膜边缘的调音螺丝与木框结构如何固定张力；3. 最后注意黑暗背景如何把发声体孤立为展品

[![原论文 Figure 1：CLSTR1.](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/nime-2026/165110a68dd3/figure-1.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/nime-2026/165110a68dd3/figure-1.png)

*论文图 1。原论文 Figure 1：“CLSTR1.”。*

上图显示 CLSTR1 在黑暗中被下方照亮，圆形膜面明亮而均匀，三只金属碗倒扣其上，边缘可见调音机构。这说明装置把发声过程完全暴露：没有罩子，没有隐藏音箱，观众看到的碗的位置就是听到的声音的来源。复述方法时要注意，灯光不是装饰，而是让碗的爬行轨迹可见，从而把听觉的不可预测与视觉的不可预测绑在一起，这也是后文用视觉跟踪的物理基础。

### 膜、碗与激励源各自做什么：怎么装才响？

薄膜白话说就是绷紧的塑料鼓皮，英文名 membrane。它负责把点状的低频激励扩散成面振动，张力由调音螺丝设定，并被碗的重量与人手的按压实时改变。操作是先把皮绷到能承受碗的重量而不塌陷，再用砂纸打出不规则纹理，纹理让碗的爬行不走直线。激励物白话说就是放在膜上的金属碗，英文名 exciters。它们负责把膜的上下振动转成自身的弹跳与水平爬行，弹跳产生持续的嗡鸣基音，爬行改变张力点从而有机调制失真声景。

操作是选用平底日本唱碗，倒扣或正放按试验定，初始位置需经试错找到，挪几厘米就可能哑掉，这是复现时最费时的部分。激励源白话说就是给膜喂低频的东西，英文名 stimulant source。它负责提供 9 到 34 Hz 之间的持续能量，接触点可在膜上泡沫垫或框上，按表演者判断变动。操作有两条：声学路线是用软槌敲 bassnicophone 并把它放在两小块聚丙烯泡沫上，泡沫放在膜上木圈内唇上方；电子路线是把 BST-1 换能器拧在框上，用合成器送正弦或调制后的次声。

**次声 × CLSTR0：** 次声负责提供人耳听不到但膜能感受到的持续振动能量，CLSTR0 负责把这种能量转成可听的失真音景，分工是前者为激励源、后者为声学结果，搭配理由是只有低频大幅振动才能让金属碗在膜上反复弹跳而不被高频细节掩盖，组合意义在于用听不见的输入养出听得见且不断变化的输出。

**薄膜 × 激励物：** 薄膜负责接收次声并形成张力不均匀的振动面，激励物即放在膜上的金属碗负责通过弹跳和爬行改变接触点，分工是膜提供场、碗提供扰动，搭配理由是碗的重量和位置会反过来改变膜的张力分布，组合意义在于形成自主调制的闭环，碗走一步声音就变一点。

理解了三件套的分工，再看它们如何被画成可操作的回路，重点是能量从哪进、人手从哪进。

> **看图路径：** 1. 先沿右侧计算框到次声换能器再到 CLSTR1 的箭头看能量路径；2. 再看膜上两个碗的双向箭头所表示的自主爬行方向；3. 最后对照左侧物理交互文字理解人手介入的位置

[![原论文 Figure 3：Diagram of CLSTR1 stimulated by a large trans- ducer.](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/nime-2026/165110a68dd3/figure-3.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/nime-2026/165110a68dd3/figure-3.png)

*论文图 3。原论文 Figure 3：“Diagram of CLSTR1 stimulated by a large trans- ducer.”。*

该示意图把系统画成三块：左侧物理交互标注用户可干预金属碗的惯性来调制声音，中间是标有 CLSTR1 的圆盘与两只碗，右侧黑色斜块是次声换能器，最右是计算框注明 SuperCollider 频率调制补丁通过调制次声输出来保持碗的稳定运动。箭头显示计算输出进换能器、换能器进盘体，人手直接作用于碗。这个图的可复述价值在于明确了两条互不替代的路径：能量路径是数字合成到机械振动，调制路径是人手与碗自主爬行对张力的改变，二者只在膜上相遇。

### 交互如何分层：无人、有人、多人时各发生什么？

论文把交互理解为从零到多人的连续谱，不是单一演奏模式。无人时，碗在恒定振动下自主爬行，系统半自主生成听觉与视觉图案，这是装置态。单人或多人围观时，观众可挪碗、按膜、加重量，影响系统的复杂惯性，这是安装表演态。多名表演者同时操作时，有人管合成参数，有人管碗的位置，有人管话筒与效果器，这是合奏态。关键是交互结束后装置继续响，不回到静音待机。

作者的前作 La semilla y su quietud 已经验证了无人值守的可听性：在一个厅里摆四台定音鼓，用低音炮激励，让观众自选距离聆听。那次只有声音可展，没有灵活交互，CLSTR1 要补的正是交互层。教学例子：可以把 CLSTR1 想成一个养着活物的水池，没人时水自己起波纹，有人伸手搅动波纹会变，手拿开后波纹不会立刻复原，因为碗的位置已经被改变了。

**混合乐器装置 × 自主性：** 混合乐器装置负责同时承担乐器可演奏和装置可持续展出的两种工作方式，自主性负责在无人触摸时仍让碗爬行和声音演化，分工是前者定义交互的宽容度、后者定义系统的能动性，搭配理由是作者不想把现象做成必须有人演奏才响的乐曲材料，组合意义在于无人时它是装置、有人时它是乐器、结束后它继续响。

这种分层决定了后文 3 个案例为何形态各异：同一个物理模块，在不同人力配置下会呈现装置、视听演出与声音散文 3 种体裁。

### 没有神经网络训练时，计算部分到底在算什么？

本研究没有训练新的神经网络模型，也没有报告梯度、优化器、损失曲线或训练轮数，该节必须明确说明这一点以免误解。真实的计算过程是 3 套现成工具的调用与拼装。第一套是 SuperCollider 频率调制补丁，白话说就是用代码振荡器生成次声并做慢速调制，英文名 frequency modulation patch。它持续输出 9 到 34 Hz 区间的信号，调制目的是让碗保持稳定运动而又不锁死在一个固定音色上，参数按现场试听手调，没有自动寻优报告。第二套是计算机视觉跟踪，白话说就是头顶相机看碗在哪，英文名 computer vision。

它用 Touch Designer 加 Python 提取碗的 2 维运动数据，经开放声音控制协议发给合成补丁，形成视觉到听觉的闭环。第 3 套是实时音色迁移，白话说就是用已训练好的人工智能音频模型把输入音色换成另一种质感，英文名 timbre-transfer 或 timber-transfer 原文拼写。它在 Mineral Neurons 中把 CLSTR1 的失真声景 reinterpret 为并行的音频结果，不是用来控制膜本身。监督来源、参数冻结与重置时机在原文均未报告，属于具体缺项，不能从模型名称推定实现。

**计算机视觉 × 频率调制合成：** 计算机视觉负责从上方观察金属碗的 2 维运动并输出位置数据，频率调制合成负责在 SuperCollider 中生成并微调次声输出，分工是视觉管看、合成管给，搭配理由是碗的运动太不稳定，需要用观察到的漂移来把激励频率拉回能保持稳定运动的区间，组合意义在于用数字计算托住声学混沌而不把它量化成音符参数。

要复述闭环的接线顺序，可对照 Los Grandes Vuelos 的技术图理解信号走向。

> **看图路径：** 1. 先看顶部相机指向膜面的连线与右侧视觉计算框的关系；2. 再看视觉框经开放声音控制信号进入频率调制框的纵向箭头；3. 最后看频率调制框回指换能器的弯箭头所构成的闭环

[![原论文 Figure 6：Technical diagram of Los Grandes Vuelos.](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/nime-2026/165110a68dd3/figure-6.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/nime-2026/165110a68dd3/figure-6.png)

*论文图 6。原论文 Figure 6：“Technical diagram of Los Grandes Vuelos.”。*

该图在上一张的基础上增加了顶部相机与 2 级计算框。上方相机连线进入标注 2 维运动数据经计算机视觉获取的框，该框经开放声音控制信号向下进入频率调制框，再由弯箭头回到次声换能器。这确认了计算不直接发声，而是通过维持激励条件来托住物理过程。复现时先做什么：先让换能器直驱膜并找到碗能跳起来的频率，再接入相机与调制，最后才加音色迁移做并行输出，不要一开始就 3 路全开。

### 实验条件是什么：在哪里摆、用什么推、允许观众做什么？

论文没有对照组实验与统计指标，其证据是艺术实现与建造描述，因此本节按展演条件组织。地点与配置包括 2024 年的厅堂版四鼓装置、2025 年在巴塞罗那 Sónar 演出的 Mineral Neurons、2025 年的互动装置 Los Grandes Vuelos，以及 2025 年在 Kode9 工作坊首演的声音散文 Resignadina。激励条件统一为外置低频源经由接触点传入框体或膜，频率区间报告为 9 到 34 Hz，换能器型号为 Dayton Audio BST-1，声学激励为 Lunason bassnicophone 加软槌与泡沫垫。

交互协议按作品而定：Mineral Neurons 允许 3 名表演者全程干预并同步生成视觉与 AI 音频，Los Grandes Vuelos 允许观众随意搬动金属碗并由视觉补丁提供计算控制的交互环境，Resignadina 把 CLSTR1 当作生成式数字声学工具即兴录制多轨散文。测量方面原文未报告声压级、延迟、帧率、误判率或问卷量表，这是明确的缺项。硬件预算、采样率、聚合口径同样未报告。资源可达性方面，用于核对的演示页与制造商页本次均为当前可用，两个 Zenodo 引文链接本次也为当前可用，但它们是背景引文不是本研究的代码开源。

### 三个作品证明了什么：同一块膜如何长出三种体裁？

主结果是形态层面的可行性：同一模块支撑了视听演出、互动装置与声音散文 3 种用法，且都保留了 CLSTR0 的自主漂移。Mineral Neurons 显示 CLSTR1 可同时当视觉发生器与音色迁移的声源，3 名表演者与其自主视听展开持续互动，最终声团是声学失真与 AI reinterpret 结果的叠加。Los Grandes Vuelos 显示观众在无说明书条件下愿意上手挪碗并自己发现声音，视觉跟踪提供了计算控制的交互环境而没有把声音量化成按钮。

Resignadina 显示 CLSTR1 可作为即兴工具录制多轨叙事，讲述虚构药物故事，说明现象声也能进入语言类作品而不必是纯音乐。原文用报告口吻陈述这些展演发生过，用支持口吻认为 CLSTR1 是灵活的物理生成环境，用可能口吻谈其能动性。限制是都没有可比基线与重复测量，不能读出哪种激励更响或哪种碗更稳。

**音色迁移 × 生成视觉：** 音色迁移负责把 CLSTR1 复杂的失真声实时 reinterpret 成另一层并行的音频结果，生成视觉负责把碗的运动转成 Touch Designer 画面，分工是前者管听觉的再解释、后者管视觉的显形，搭配理由是 CLSTR0 本身声像复杂且具视觉性，组合意义在于让同一物理过程同时驱动声、电、光 3 条输出而不改动膜上的物理本身。

要感受多人同时上手的身体尺度，先看 Los Grandes Vuelos 的现场照片再读技术含义。

> **看图路径：** 1. 先看悬挂的发光圆膜与围观的四位观众的手部动作；2. 再看膜上小碗的位置与人手触点的距离关系；3. 最后观察木梁阁楼环境如何限定多人同时交互的身体姿态

[![原论文 Figure 5：Audience interacting with sound installation Los Grandes Vuelos (2025).](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/nime-2026/165110a68dd3/figure-5.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/nime-2026/165110a68dd3/figure-5.png)

*论文图 5。原论文 Figure 5：“Audience interacting with sound installation Los Grandes Vuelos (2025).”。*

照片显示在木梁阁楼下 4 人围着悬挂的发光圆膜，1 人伸手触碗，1 人手持碗靠近边缘，膜面明亮使小碗的阴影与位置清晰可见。这支持了论文所说的从零到多人的交互谱：膜的直径允许至少两三只手同时操作而不互相遮挡，悬挂方式让观众必须站立俯身，从而自然限制了按压力度。待验证的是这种姿态是否影响了观众停留时长与探索深度，原文未测量。

### 拿掉什么会哑：位置、频率与接触方式的失败条件？

论文没有正式消融表，但提供了可复述的失败条件，可当作反证来读。第一，位置敏感：碗放在偏离原位几厘米处、或 bassnicophone 换个角度，失真就不出现，说明膜的振动场不均匀，有效点是试出来的。第二，频率边界：只有 9 到 34 Hz 区间能激起 CLSTR0，高于此进入可听低频后机制就变了，不再是次声驱动的弹跳主导。第三，接触方式：bassnicophone 必须经由两小块聚丙烯泡沫放在膜上木圈内唇上方，直接硬接触或换位置会改变耦合，声学路线即失效。

第四，表面纹理：光滑塑料膜不如砂纸打磨的不规则纹理容易让碗爬行与调制，纹理是维持长期演化的条件之一。这些都是作者经由 tedious 经验试验收集的有效配置，不是扫参得到的曲线。教学例子：复现时若只换了碗的大小而不重找位置，哑掉是预期内，不是设备坏了。下表把分散在正文的条件整理成可核对的清单，数字与单位保留原文写法，条件相同才能比较。

下面这张表要回答的问题是：在什么物理配置下 CLSTR0 才会出现，比较的公平条件是同一块 CLSTR1 膜体，指标方向是出现持续可听失真为成功，否则为失败。

| 条件 | 指标 | 基线配置 | 本方法配置 | 比较对象 |
| --- | --- | --- | --- | --- |
| 激励频率 | 出现 CLSTR0 的区间 | 高于 34 Hz 的可听低频 | 9 and 34 Hz | 同一膜体 |
| 鼓阵规模 | 展出时鼓的数量 | 单个 CLSTR1 个模块 | four timpani drums | La semilla y su quietud 厅堂版 |
| 发现时间 | 偶然发现的夜晚 | 常规排练时段 | winter night in 2021 | 巴塞尔音乐学院排练室 |

表后需要解释主要收益与具体代价。收益是区间给出了可直接试的起点：从 9 赫兹慢慢扫到 34 赫兹，耳朵贴近膜听碗何时开始持续嗡鸣，比盲目换器材省时。代价是区间很窄且位置敏感，即使频率对了，碗错几厘米仍哑，未胜出项是声学 bassnicophone 路线对角度与泡沫垫位置要求苛刻，电子换能器路线虽可连续调频但仍需手调维持稳定运动。未评测边界包括不同重量碗的阈值、长时间运行的频率漂移与温湿度影响，原文均未报告。

下面第二张表回答另一组问题：3 个作品在人力与计算配置上有何不同，公平条件是都用同一 CLSTR1 声源，指标方向不是音质高低而是交互形态是否成立。

| 条件 | 指标 | Mineral Neurons | Los Grandes Vuelos | Resignadina |
| --- | --- | --- | --- | --- |
| 首演年份 | 作品成立时间 | (2025) | (2025) | (2025) |
| 表演者数量 | 同时操作人数 | three performers | audience 自由参与 | 单人即兴加多轨 |
| 计算链路 | 视觉与合成 | Touch Designer 加 timber-transfer real time AI audio synthesis | computer vision patch tracked the motion of the bowls | 生成式数字声学工具 |
| 叙事 | 题材 | 视听演出在 Sónar | interactive sound installation | fictional drug 声音散文 |

表后解释同样要讲收益与反例。收益是同一物理源确实长出 3 种体裁，证明混合乐器装置的定位成立：有人时可合奏，无人时可展出，做散文时可录制。代价是三者都没有可运行基线对照，例如没有无视觉反馈时的稳定时长对比，没有有无音色迁移时的听感评价，因此不能说加了哪一路就更好。未胜出项是 Resignadina 的叙事性用法在论文中着墨最少，只说明用作即兴工具，未交代录制链路与后期处理。未评测边界是观众学习曲线与多人冲突处理，原文明确留待未来做更严谨的观众交互分析。

### 边界在哪里：哪些量没测、哪条路还没走通？

作者自陈的局限有两层。第一，本文只展示建造动机与部分艺术实现，没有观众交互的严谨分析，也没有其他用户的使用反馈，复现者不能把现场热闹当作可用性证据。第二，CLSTR1 是规划系列中的第一个模块，下一步是非数字次声生成，因为迄今激励频率都是数字合成的，团队想利用 Lunason 乐器自然产生次声的原理，做一个纯声学的次声源来驱动框体，这条路被描述为乐器设计中未被充分探索的方向，目前仍是计划而非结果。

技术层面的隐含局限包括耦合的脆弱性、对初始位置的依赖、以及不做参数化的立场带来的不可比性：既然不量化 CLSTR0，就无法给出压缩比、失真度或可重复性指标。伦理方面论文报告在核心开发与外围产出中未发现利益冲突。资源方面没有训练开销可谈，推理开销是实时音频与视觉进程的笔记本负载，原文未给帧率与延迟，总体趋势不等于每场都稳定，换场地就要重找位置与频率。

### 复现先做什么：按什么顺序摆、调、录？

复现 CLSTR1 应按物理优先、计算托底的顺序。第一步备料：一个带调音螺丝的鼓框与塑料鼓皮，优先选 Remo Renaissance 定音鼓皮并用砂纸打出不规则纹理，两到三只平底日本唱碗，一个 Dayton Audio BST-1 换能器或一个 Lunason bassnicophone 加软槌与两小块聚丙烯泡沫。第二步找声：把换能器固定在框上，从 9 赫兹起慢扫到 34 赫兹，每步停留足够久，碗倒扣在膜上试多个位置，记下能持续嗡鸣且碗开始爬行的点，声学路线则把泡沫放在膜上木圈内唇上方再放 bassnicophone 轻敲找点。

第三步加手：用手轻按膜边、轻推碗，确认声音随张力点变化且手离开后不立刻复原，说明自主调制成立。第四步加视觉：头顶架相机，用 Touch Designer 加 Python 取碗的 2 维位置，经开放声音控制发给 SuperCollider 调制补丁，让激励频率在碗要停或要飞时微调。第五步加并行输出：如需演出效果，再把膜边话筒信号送入实时音色迁移与生成视觉，注意这不改变膜的物理，只增加呈现层。全程要录的是频率、碗位照片、温湿度与有效时长，原文未给超参数，只能自己建表。

常见误解是把换能器音量开大就能响，实际过大只会让碗跳飞，关键是频率与位置的组合。

### 何时值得尝试：这块膜适合你吗？

如果你的目标是可长期展出、允许观众触摸、且能容忍不可重复的声音现象，CLSTR1 值得尝试。它把次声激励、薄膜扩散与金属碗扰动绑成一个自主漂移的系统，用最少的数字计算维持混沌而不收编混沌，适合声音装置、互动表演与跨学科工作坊。如果你的目标是精确触发特定音高、做可比实验或低延迟乐器控制，它目前不合适，因为位置敏感、无量化指标、无延迟与误判测量，复现成本主要在试错时间而非代码。

带走的三句话是：先找到 9 到 34 赫兹内属于你的那几个点，再用纹理与张力留住爬行，最后才加视觉与智能合成去显形与并行。还需补的验证是观众行为测量、不同碗重与膜张力的阈值表，以及纯声学次声源是否真能替代数字合成驱动框体。在这些补齐之前，把 CLSTR1 理解为一个养混沌的配方半成品最为准确：配料已公开，火候仍需自己守在膜边听。

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。
- 评分规则：type-aware-v1
- 评分模型：muse-spark-1.3-contributor
- 评分请求协议：openai_responses

---

[← 返回 nime-2026 论文汇总](/posts/conference-nime-2026/)
