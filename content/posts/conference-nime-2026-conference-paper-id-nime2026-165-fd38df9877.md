---
title: "VoixTenue: Exploring Real-Time Gestural Control of Vocal Synthesis on a Mobile Phone."
date: 2026-09-14
draft: false
description: "VoixTenue 把触屏纵向画线与手机俯仰横滚倾角映射为 Pink Trombone 的基频与强度，在 E2-E5 三组八度内以约 60 Hz 更新实现全机端实时嗓音合成，代价是触屏模式暂缺力度控制而倾角模式音高精度较低且未经被试实验验证。"
tags: ["信号处理", "端侧运行", "实时处理", "语音", "语音合成"]
categories: ["nime-2026 论文"]
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_paper_id: "conference:nime:2026:conference-paper-id:nime2026_165"
paper_digest_source_kind: conference
paper_digest_conference_id: "nime-2026"
paper_digest_conference_record_url: "https://nime.org/proc/nime2026_165/index.html"
paper_digest_conference_pdf_url: "https://nime.org/proceedings/2026/nime2026_165.pdf"
paper_digest_api_reader_contract: "beginner-researcher-v3"
paper_digest_api_reader_article_sha256: "9bf099fe7fc32961fa805e03f6a122c637ff25b917717d5557400a59b1284fac"
paper_digest_api_reader_plan_sha256: "cb6b524edaa39706d9e994bb0842b7dab820c6de1bb3a1242709c72b16c46b4d"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings-v4"
paper_digest_api_reader_source_bindings_sha256: "15a6069f8afa510ae7bcd794b1f74ee4939152157d5a8c8e1f411753d6ced1ce"
paper_digest_api_reader_source_table_count: 2
paper_digest_api_reader_source_formula_count: 0
paper_digest_api_reader_structured_artifacts_sha256: "8ee41e351126b30be1f2cf667fdb7bb7f658edf263bb2783c504dc60a802b42c"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity-v1"
paper_digest_api_reader_author_identity_sha256: "329f5e643a026ddea9ab6a43a601e17d76d3f6df356c3e95661d87724f54da4d"
paper_digest_api_reader_author_count: 2
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity-v1"
paper_digest_api_reader_resource_identity_sha256: "380a41770c0d743ccd05450579382869d73ac983a58b191487e06d1ce70d0b41"
paper_digest_api_reader_resource_count: 2
paper_digest_api_reader_decision_projection: "api-reader-decision-projection-v2"
paper_digest_scoring_contract: "api-scoring-audit-v2"
paper_digest_taxonomy_contract: "paper-taxonomy-flat-tags-compat-v1"
paper_digest_taxonomy_selection_contract: "paper-taxonomy-selection-v1"
paper_digest_taxonomy_registry_version: "paper-taxonomy-v1"
paper_digest_taxonomy_registry_sha256: "15c82a567ce5a55dc1175684ed08b64c158558639d9c8fb822c9587ec32a8778"
paper_digest_taxonomy_concepts: [{"facet":"method","id":"method.signal-processing","label":"信号处理"},{"facet":"setting","id":"setting.on-device","label":"端侧运行"},{"facet":"setting","id":"setting.real-time","label":"实时处理"},{"facet":"signal","id":"signal.speech","label":"语音"},{"facet":"task","id":"task.speech-synthesis","label":"语音合成"}]
paper_digest_primary_task: "语音合成"
paper_digest_primary_method: "信号处理"
paper_digest_score: 5.5
paper_digest_rank_bucket: "前50%"
paper_digest_document_type: "系统技术报告"
paper_digest_conference_structure: replayable-pdf-layout-v1
---

# 📄 一部手机如何托住一条嗓音：VoixTenue 的手势音高与力度控制

> 英文题目：*VoixTenue: Exploring Real-Time Gestural Control of Vocal Synthesis on a Mobile Phone.*

> 会议身份：`conference:nime:2026:conference-paper-id:nime2026_165`


> ✅ 来源为官方会议 PDF；表格与 Figure 按原文证据绑定。PDF 公式以原页区域图片展示，未冒称作者原始 TeX。

> 会议来源：[官方记录](https://nime.org/proc/nime2026_165/index.html) · [官方 PDF](https://nime.org/proceedings/2026/nime2026_165.pdf)

标签：#信号处理 #端侧运行 #实时处理 #语音 #语音合成

评分：**5.5/10** | 创新 1.2/2 | 技术严谨 1.0/1.5 | 实验充分 0.4/1.5 | 清晰度 0.8/1 | 影响力 0.8/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 1.0/1.5

排名：前50% | 文档类型：系统技术报告

## 👥 作者与机构

- Adrien Scazzola：机构信息未能从会议 PDF 纯文本可靠映射
- Xiao Xiao：机构信息未能从会议 PDF 纯文本可靠映射

## 📌 核心摘要

VoixTenue面向手机端实时人声乐器场景，输入为触屏纵向滑动或机身俯仰与横滚姿态及晃动，输出为可控基频、响度与颤音轮廓的合成元音或短语嗓音，难点在于小屏幕与抖动传感下兼顾低延迟、直觉映射与可懂发音。手势采集与校准负责记录陀螺仪中立欧拉角并求相对角，对触点高度或倾角做归一化与指数平滑，其输出的目标声学参数进入映射阶段。参数映射负责将俯仰角经对数关系转为E2–E5目标频率、将横滚角经线性关系转为响度，并由角速度峰值触发6Hz颤音，其输出连同音位配置送入合成器。音位内容指定与音频渲染负责在元音模式选择构音配置、在短语模式将文本转写为可编辑音标并叠加自动释放的辅音收缩，再在AudioWorklet高优先级线程中驱动Pink Trombone源-滤波器模型合成。与既往依赖笔记本完成映射或合成的平板与Theremin系统相比，关键差异是传感、映射与合成全在浏览器端单设备闭环，实际意义是提升便携性与课堂可用性并支持纵向韵律训练探索。在陀螺仪俯仰映射条件下，最小倾角的目标频率指标为82.41 Hz，低于中立位的目标频率指标233 Hz。该结论适用边界受限于作者演示场景，尚未验证音准精度、延迟分布与学习增益，外推至舞台演出或二语韵律训练仍需实证。原型推理开销依托浏览器AudioWorklet高优先级线程，设计以约16ms周期传输参数以控制延迟。

## 🔗 开源与复现资源

- 第三方资源：<https://imaginary.github.io/pink-trombone/> — 链接可访问（HTTP 200）
- 第三方资源：<https://github.com/zakaton/Pink-Trombone> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 输入是什么，输出是什么，为什么要在手机上做？

这篇论文的输入是手机自带传感器的连续手势，输出是可听的合成嗓音。输入有两路，一路是手指在触屏上的纵向位置与接触保持，另一路是手机绕俯仰轴与横滚轴的倾角加上绕三轴的旋转角速度。输出不是录音回放，而是用发音器官合成器逐时刻算出来的声波，其音高、响度与元音短语内容都随手势变化。

目标读者需要先留住 3 条必须核对的信息。第一，合成引擎是 Pink Trombone，一个在浏览器里跑的开源发音器官合成器，论文用的是修改版，数字信号处理部分放在音频专用线程里跑。第二，系统是完全装在一部智能手机里的浏览器应用，传感、映射与发声都在同一设备上，不依赖台式机做映射或合成。第三，论文没有报告被试实验与定量主结果，测试限于作者本人，不收集人体数据，不存储也不传输个人数据，因此后文所有关于好用或有效的说法只能当作设计讨论，不能当作已验证的结论。

为什么要在手机上做，论文给出的理由是路线上的缺口。此前多数手势控制的歌唱或说话合成要么用图形板加电脑，要么手机只当手柄而合成仍在电脑上，要么合成在手机上但映射仍在电脑上。手机做音乐在新界面领域已有积累，但把传感、映射、发声全部收进一部手机，就会追问手机触屏与惯性传感到底能映射到多少表现力。VoixTenue 就是为回答这个问题搭的探索型原型，应用指向放在音乐性的轮廓探索与外语语调练习 2 个方向。

### 此前路线走了哪几步，VoixTenue 卡在哪一个缺口？

第一条路线是从底层一起合成语音。早期手套系统同时控制发音器官形状、音位内容与韵律参数，技术上雄心大，实际难学且表现力受限。教学上可以这样理解，如果每个时刻都要用手指定出舌头、嘴唇、声带与语调，控制维度太多，人顾不过来。

第二条路线是收缩实时控制集。后来的工作把实时手势限定在少数关键量上，特别是旋律形状、音量与时间，音段内容则预先固定或大幅简化。用图形板画频率轨迹与嗓音用力、只合成持续元音的做法属于这一支。这样手势负担下降，表现力反而更集中，因为人只需要管好一条语调曲线。

第 3 条路线是重合成录制好的嗓音素材。用图形板、特雷门或手机触屏去控制已有录音的音高、嗓音用力与音节发音，可以在不同音乐场景里做歌唱乐器，也被试过拿来做语言学习，让学习者绕开自己嗓音的生理限制去外化语调轮廓。论文把这两类应用都继承下来，音乐上强调探索性轮廓控制，语言上强调对照母语模型诊断语调问题。

VoixTenue 的缺口在于运行位置。论文点名 2 篇对照，在 1 篇里手机只是手势界面而合成在电脑上，在另 1 篇里合成在手机上但参数映射仍在电脑上。VoixTenue 把传感、映射与发声都放在一部手机的浏览器里，Pink Trombone 的想象页与代码库当前可用，链接分别指向在线演示与开源仓库，这为复现提供了起点，但论文本身没有给出整机延迟与功耗的测量值。

### 要解决的手势映射问题到底是什么？

问题可以写成一句话，在只有触屏与惯性传感的手机上，如何把连续手势变成连续可控的音高、响度与语调，而不让人同时操心全部发音细节。输入是 2 维触点与 3 维姿态，输出是每时刻的基频与强度，外加当前元音或短语的发音形状。难点在于维度不匹配与注意力有限，人 1 次只能精细控制一到两个维度。

论文的取舍是明确的。实时手势只管语调与动态，音段内容提前选好。白话是，先选好唱什么音，再用手决定怎么唱上去、唱多响、拐几个弯。绘制模式里纵轴管音高而横轴空出来不用，理由是预实验发现用户会把横向移动理解成时间流逝，硬把横轴也映射成参数会违背这种心理模型。惯性模式里俯仰管音高、横滚管响度、摇晃加颤音，新手可先只倾一个轴练旋律，熟练后再双轴协同。

举一个教学例子帮助建立链条，但例子中的具体数值只为说明流程，不代表论文的测量值。假设用户选了元音 A 并把手指放在画布中部，系统把纵向位置归一化成零到一之间的小数，再按对数关系变成目标频率，当前帧的频率显示在 E2 到 E5 的半音键盘上。手指按住就有声，抬起就停，横向拖动在当前版本不改变声音，只是人自然理解为时间往前走。这个例子对应的方法链是输入到表示到组件到目标再到输出，先走通这一条，再看惯性分支与短语分支如何复用同一条参数总线。

### 两条手势链如何走完从手到声音？

系统全景是两条手势链汇入同一合成后端。绘制链是手指纵坐标到基频，惯性链是俯仰倾角到基频、横滚倾角到强度、旋转角速度到颤音。两条链共用一套音段设置与可视化，共用约 60 Hz 的参数更新节拍，最终都送进修改版 Pink Trombone。发声门控也分两路，绘制模式是触屏接触即发声，惯性模式是按住按钮才发声，松开即停。

下图是理解分工最直接的入口，左侧是画线，右侧是倾斜，不要把两者看成同一映射的两种皮肤，它们在发声门控、可控维度与练习路径上都不同。

> **看图路径：** 1. 先看左侧横屏手机：左侧钢琴条与右侧波浪形语调曲线的左右分工；2. 再看手指落点与曲线末端的关系，确认纵向位置对应音高；3. 再看右侧单手握持倾斜手机的姿态，区分俯仰管音高与横滚管音量；4. 最后对照两图共有的音高可视化，确认输出都有视觉反馈

[![原论文 Figure 1：The two mappings of VoixTenue, Draw mode (left) and Gyro mode (right).](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/nime-2026/a1a321518315/figure-1.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/nime-2026/a1a321518315/figure-1.png)

*论文图 1。原论文 Figure 1：“The two mappings of VoixTenue, Draw mode (left) and Gyro mode (right).”。*

这张图显示左侧横屏手机被双手持握，右手食指落在右侧画布上，画布里有一条青色起伏曲线，左侧有一条竖置半音键盘并有当前音高标记，说明纵向位置正在驱动频率。右侧单手握持手机并明显倾斜，拇指按在屏幕按钮区，说明惯性模式需要按键门控才能发声，倾斜角度同时编码音高与音量。两图共同说明输出都有键盘式视觉反馈，但输入的身体动作完全不同，这决定了后文精度与动态表现的取舍。

### 传感、映射与合成各管什么，为什么这样接？

交互层只有两个入口。白话先解释，触屏画布入口负责把手指纵坐标变成语调，惯性入口负责把手机姿态变成音高与响度。英文名是 CurveUI 与 GyroUI，一个管画，一个管倾。控制层接着做四件事，归一化做限幅与缩放，映射把手势变成嗓音参数，平滑压住传感器抖动，按需发声给安全默认值。参数总线用浏览器事件把参数送到合成组件，合成层经消息投递把音频参数送进音频渲染线程，再由 Pink Trombone 的声门加声道模型算出声波，经扬声器或耳机播出。

**声源-滤波器模型 × 发音器官合成：** 声源-滤波器模型负责分工为声门产生激励、声道决定共振，发音器官合成负责把舌位、唇收紧、软腭等几何参数变成可计算的声道形状，二者搭配的理由是只改激励只能变音高响度、只改形状只能变元音辅音，只有激励加形状一起变才能同时控制语调与音段，组合后 VoixTenue 只需送基频、强度加少数舌与收缩参数就能让 Pink Trombone 发出连续可变的嗓音。

下段先给出系统框图的导读，再放图，再解释跨线程边界，初学者照此顺序可复述数据流向。

系统框图自上而下是交互层、控制层、参数总线、合成层，左右是两条手势分支在控制层汇合，上下是主线程到音频线程的投递，阅读时先找主箭头再找虚线回路。

> **看图路径：** 1. 自上而下追踪交互层到合成层的四层箭头主路径；2. 比较 CurveUI 与 GyroUI 汇入同一控制层的收敛点；3. 观察控制层内归一化、映射、平滑、按需发声的串行顺序；4. 确认参数总线经事件派发再经消息投递到音频渲染线程的跨线程边界

[![原论文 Figure 4：System overview of VoixTenue: CurveUI (draw) and GyroUI (tilt) map mobile gestures to Pink…](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/nime-2026/a1a321518315/figure-4.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/nime-2026/a1a321518315/figure-4.png)

*论文图 4。原论文 Figure 4：“System overview of VoixTenue: CurveUI (draw) and GyroUI (tilt) map mobile gestures to Pink Trombone parameters via an event-driven bus, rendered in an Au- dioWorklet for…”。*

这张图可见顶部 CurveUI 标注触屏画线、中部依次排列归一化、映射、平滑、按需发声 4 个绿块、下部事件总线连到主线程合成组件、底部音频渲染线程连到声门加声道再到音频输出。关键是控制层到参数总线再到合成层的箭头是单向主路径，虚线是参数更新与消息投递，说明界面抖动与音频卡顿被线程边界隔开。复现时应先调通事件名与消息字段，再调映射曲线，最后才动音频线程内的仿真步长。

**手势歌唱术 × 表演性嗓音合成：** 手势歌唱术负责用手部动作实时给出旋律、力度与时间，表演性嗓音合成负责把这些连续控制量变成可听的嗓音输出，二者搭配的理由是嗓音的表现力主要在语调曲线与动态起伏而不在 1 次性选对全部音素，组合后 VoixTenue 把实时手势限定在基频与强度，把音段内容交给预选元音或预输入短语，从而降低学习负担并保留表现空间。

**事件总线 × 音频渲染线程：** 事件总线负责在主线程把归一化、映射、平滑后的手势参数以事件形式发给合成组件，音频渲染线程中的 AudioWorklet 负责在高优先级线程里跑声门与声道数值仿真，二者搭配的理由是界面采样与传感器抖动不能阻塞音频回调，组合后手势以约 60 Hz 更新参数而音频连续渲染，既保持响应又避免卡顿引入的断音。

### 元音与短语的内容通道怎么做，菜单里能调什么？

音段内容通道与语调通道是分开的。白话是，语调通道每 16 毫秒都在变，内容通道在 1 次发声期间基本不变。英文是 vowel mode 与 phrase mode，一个是 sustained vowel，选定一个持续元音，一个是 phrase mode，输入短英文并转成可编辑的 SAMPA 音标。Pink Trombone 原本有 19 个发音与声源参数，VoixTenue 只控制其中 8 个，语调走基频与强度，音段走舌与多处收缩参数。辅音不让人逐个手捏，而是用加性模型临时叠一个辅音收缩再按固定保持时间自动释放，以降低手势负担。

**元音模式 × 短语模式：** 元音模式负责让用户在 5 个基本元音中选一个并持续发声，短语模式负责让用户输入一段短英文并转成可编辑的 SAMPA 音标串再按固定语速播放，搭配的理由是元音模式隔离出纯旋律练习、短语模式保留音节与语调的对应关系，组合后语言学习可先听元音上的语调骨架，再在短语上对照重音与边界调。

菜单是可折叠导航，绘制界面与惯性界面共用同一套内容选择，只是当前选中的模式不同。下段先说明左右两屏的对照关系，再放图，再逐项解释可见控件。

左屏是绘制界面叠加展开菜单并选中元音，右屏是惯性界面叠加展开菜单并选中短语，阅读时先看顶部选中态再看中部内容区最后看底部提示。

> **看图路径：** 1. 对比左右两张菜单顶部的元音与短语选中状态；2. 查看左侧五个元音按钮与轨迹保留开关、播放与清除按钮；3. 查看右侧短语输入框、试听按钮与按住循环的文字提示；4. 注意底部调试行显示的倾角、频率、强度与延迟读数位置

[![原论文 Figure 2：Expanded menu of control options for the Draw interface in vowel output mode (left) and Gyro…](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/nime-2026/a1a321518315/figure-2.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/nime-2026/a1a321518315/figure-2.png)

*论文图 2。原论文 Figure 2：“Expanded menu of control options for the Draw interface in vowel output mode (left) and Gyro interface in phrase output mode (right).”。*

这张图左侧可见顶部元音高亮，中间 5 个元音按钮中 A 被选中，下方有轨迹保留开关与播放清除按钮，底部提示触摸画布开始。右侧可见顶部短语高亮，中间短语框显示示例词与音标，下方有试听按钮与按住循环的文字提示，底部叠加显示倾角、频率、强度与延迟的调试读数。说明内容选择、轨迹管理与校准调试都在同一菜单体系里，复现时应先实现元音切换与短语转音标，再做轨迹保留与校准按钮。

**绘制模式 × 惯性模式：** 绘制模式负责用手指纵坐标直接画出语调曲线的形状，惯性模式负责用手机俯仰倾角管音高、用横滚倾角管音量并用摇晃加颤音，二者搭配的理由是触屏擅长精确复现轮廓而倾角擅长双手腾空下的连续力度变化，组合后初学者可用单轴倾斜或单指画线起步，进阶者再练双轴协同或并行回放多条曲线。

### 画出的曲线如何保留、回放与叠加？

绘制模式的可选功能是轨迹保留。白话是，画过的语调曲线可以留下来再播一遍，不必每次都重画。英文是 trace retention。默认行为是 successive traces are appended sequentially，也就是 successive 画的几段首尾相接拼成一条更长的轮廓。多轨模式是 multi mode，几条曲线各自存下来并在回放时并行播放，效果接近简单的叠唱或和声轮廓叠加。发声门控上，短语模式是按住触发并按典型语速的固定时序走，松开中断，再按从头开始，按住超过结尾会循环，这些都与轨迹回放逻辑正交。

下段先点明并行与串行的区别，再放图，再解释颜色与键盘读数的对应读法。

这张图不是单条示例曲线，而是多条保留曲线的并行回放状态，阅读时先数颜色条数再看每条高低走向最后对照左侧键盘。

> **看图路径：** 1. 先确认左侧钢琴条当前音高标记的位置与读数；2. 再数右侧画布上三条不同颜色轨迹的条数与上下关系；3. 观察每条轨迹起伏陡缓，区分高位长音与低位平直段；4. 结合图注理解多条轨迹在回放时是并行叠加而非首尾拼接

[![原论文 Figure 3：Multi mode of trace retention. These traces are played in parallel during playback.](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/nime-2026/a1a321518315/figure-3.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/nime-2026/a1a321518315/figure-3.png)

*论文图 3。原论文 Figure 3：“Multi mode of trace retention. These traces are played in parallel during playback.”。*

这张图左侧是竖置半音键盘并在中部显示当前频率标记，右侧画布有绿、蓝、橙 3 条曲线，绿色在高音区先升后降再爬升，蓝色在中音区平直过渡，橙色在低音区长平后上扬。颜色区分的是不同次画下的轨迹身份，不是不同声部音色，纵向位置仍是音高，横向仍是时间。3 条并行回放意味着同一时间轴上有 3 个频率值同时送往合成，这与默认首尾拼接的语义不同，复现时必须把两种回放分支分开实现并各自测试中断与循环。

### 没有训练阶段时，真实计算过程是什么？

本研究没有训练神经网络，也就没有梯度、损失、优化器、冻结与更新的安排。把无训练等同于确定性求解是误解，系统输出仍受传感器噪声、平滑状态与手势时序影响，每次演奏都不完全一样。真实计算是规则映射加实时仿真，分为校准、映射、平滑、门控与声学仿真 5 步。

校准只在进入惯性模式时做 1 次，记录当前俯仰与横滚为中立角，后续用相对角驱动映射。映射把相对俯仰角变基频、相对横滚角变强度、旋转角速度变颤音。平滑用 1 阶指数滑动平均压抖动，频率在对数域做以保住音程关系，强度在线性域做。门控决定何时有声，绘制是触屏接触，惯性是按键按住。声学仿真在音频线程里跑声门激励加声道传播，音段参数来自当前元音或短语的舌与收缩设置。

未报告的缺项要明确指出。论文没有给出归一化钳位上下限的完整数值表，没有给出辅音叠加的收缩量与固定保持时长的毫秒数，没有给出短语固定时序的具体语速表，也没有给出事件总线字段名与消息投递的缓冲策略。复现时这些只能先按论文文字搭出可运行版本，再用听感与可视化对齐，不能从 Pink Trombone 的名字推定实现细节。

### 实验条件是什么，哪些量可核对、哪些没测？

论文没有组织被试实验，没有数据集划分、采样、指标聚合与统计检验，也没有基线对照与消融表。能核对的是系统配置与映射常数，不是效果数字。合成侧是修改版 Pink Trombone，19 个参数中控制 8 个，参数更新约 60 Hz。交互侧是 E2 到 E5 的半音可视化，每个半音等高，当前音高有同步标记。短语侧是英文输入转可编辑 SAMPA，按典型语速的固定时序播放。

下表把惯性映射的可核对量收拢到一处，比较问题是同一中立姿态下俯仰与横滚各自管什么、范围与中心是什么，公平条件是都从校准后的相对角出发，指标方向是频率越高音越高、强度越大声越响。

| 条件 | 指标 | 下限 | 上限 | 中心校准 |
| --- | --- | --- | --- | --- |
| 俯仰相对角在正负 45 度内 | 频率 | 82.41 Hz | 659.26 Hz | 233 Hz |
| 横滚相对角在正负 30 度内 | 强度 | 0.2 | 1.0 | 0.7 |
| 中立姿态归一化位置 | 频率 | E2 | E5 | A#3 |
| 俯仰跨度 | 音程 | E2 | E5 | 3 octaves |
| 初始校准 | 频率 | 233 Hz | 233 Hz | comfortable speaking |

上表把俯仰管音高、横滚管响度的分工固定下来，主要收益是中立位落在约 233 Hz 的舒适说话频率附近，上下各有足够的滑动余量。具体代价是俯仰正负 45 度要覆盖整整 3 个八度，平均每度约承担 1.6 个半音，手稍抖就会偏离目标半音，这解释了后文惯性模式不如绘制精确的判断。未胜出项也要点明，绘制模式当前不支持响度控制，横轴空置意味着动态 нюанс只能靠后加映射补。未评测边界是整机延迟、功耗、不同手机惯性传感器的零漂与采样率差异，论文均未测量，不能承诺实时性在所有机型上成立。

### 系统实际达到什么，哪些是报告、哪些是推测？

论文直接报告的是系统可运行与映射行为可用，不是效果胜负。报告级表述是，绘制纵坐标驱动基频，俯仰倾角对数映射到 E2 到 E5，横滚双向线性映射到强度，摇晃触发颤音，轨迹可保留并可串行或并行回放，短语可循环。支持级表述是，绘制更适合显式塑造旋律轮廓，惯性更适合滑音与颤音等连续手势，这些有映射机制支撑但无人评数据。推测级表述是，适合音乐探索与语调训练、便携实现利于纵向教学研究，这些是可能与待验证，不能写成已证明有效。

下表把时间平滑与颤音的可核对量收拢到一处，比较问题是多快更新、多重平滑、多大摇晃才加颤音，公平条件是同一音频线程与同一滑动窗口，指标方向是更新越快响应越好、平滑越重抖动越小但跟手越差。

| 条件 | 指标 | 下限 | 上限 | 运行策略 |
| --- | --- | --- | --- | --- |
| 参数更新 | 频率 | 60 Hz | 16 ms | real-time system |
| 指数平滑 | 系数 | 0.25 | 0.75 | Low Pass / Easing |
| 颤音检测 | 角速度 | 200 deg/s | 300 ms | sliding window |
| 颤音速率 | 频率 | 6 Hz | 6 Hz | natural vocal |
| 合成参数 | 数量 | 8 | 19 parameters | pink-trombone component |

上表说明更新节拍与听觉运动敏感性量级一致，平滑系数取 0.25 意味着历史权重 0.75，跟手会稍肉但能压住手机惯性传感器的抖动。颤音门限是 300 毫秒窗内峰值角速度超过 200 度每秒才触发，触发后按 6 Hz 正弦调制基频，停止后按每帧 0.94 几何衰减以免硬切。代价是快速小幅抖手可能误触发颤音，慢速大倾角又可能只变音高而不触发颤音。反例是，若把平滑系数调大，跟手变好但音高线会发毛，半音键盘上的标记会来回跳，这正是论文保留对数域平滑的原因。

### 拿掉一路控制会怎样，论文给了什么对照？

论文没有做去掉某模块看指标掉多少的消融实验，只能按机制做定性对照。第一组对照是绘制对惯性。绘制只有音高没有响度，优点是轮廓可画可留可重播，缺点是动态平直。惯性同时有音高与响度，优点是单手可兼顾旋律与动态，缺点是每度分摊的半音太多，精确命中目标音困难。论文因此建议绘制先练音高、后加横轴管音量，惯性先练单轴、再练双轴协同，这不是测出来的最优课程，而是与控制维度匹配的练习顺序。

第二组对照是元音对短语。元音隔离出纯语调骨架，适合先听高低起伏，短语保留音节与语调的对齐，适合练重音与边界调。短语的固定时序基于典型语速，好处是实现简单且可循环，代价是语速不可手势控制，节奏表现力受限。若拿掉短语只留元音，系统更像乐器，若拿掉元音只留短语，初学者又难以只听语调而不被音段干扰。

第三组对照是平滑与颤音的有无。无平滑时传感器毛刺会直接变成音高毛刺，有平滑时跟手延迟增大。无颤音门限时日常持机抖动会污染长音，有门限与衰减时颤音更像人声但误触发与漏触发仍存在。这些都是机制层面的取舍，论文未给出误触率、音高误差或延迟分布，复现者若要补验证，应先固定同一手机、同一握持、同一目标曲线，再分别记录有无平滑与有无颤音的音高轨迹，而不是跨机型混比。

### 边界与缺项在哪里，不能承诺什么？

边界先说应用。论文明确不做常规旋律曲目，绘制与惯性都更适合探索性轮廓、滑音与颤音，不适合节奏精确的旋律演奏。键盘可视化只给反馈，不保证命中半音。语言学习侧只谈到韵律训练的可能性，引用前人用手势做出可感知的语调对立，但本系统没有课堂数据，不能承诺发音进步。

缺项集中在测量与规格。没有被试数量、任务、指标与统计，没有整机延迟、帧率、音频欠载率与功耗，没有不同浏览器与机型的兼容表，没有辅音保持时长、短语语速表与事件字段定义。相关性不等于因果，便携不等于有效，手势直观不等于语调习得。训练资源、推理开销、输出帧率与实际延迟要分开讨论，约 60 Hz 只是参数发送节拍，不是端到端触摸到声音的延迟。

不能承诺的三件事要写清。第一，不能承诺音高精度，惯性每度分摊的半音与手抖决定了它只能做连续手势。第二，不能承诺响度表现，绘制当前就没有响度控制。第三，不能承诺教学效果，纵向研究只是论文提出的可能性。复现时若发现某部手机上倾角漂移大或浏览器拿不到方向事件，应先归因到权限与传感器，而不是调大平滑了事。

### 复现先做什么，需要哪些信息条件？

先搭最小可发声链。第一步部署修改版 Pink Trombone 并确认音频线程能出声，Pink Trombone 在线演示与代码仓库当前可用，可先用桌面浏览器验证声门加声道链路。第二步实现绘制纵坐标到基频的对数映射与触屏门控，对照 E2 到 E5 键盘确认高低方向。第三步实现惯性校准、俯仰到频率、横滚到强度、角速度到颤音，再加对数域平滑与几何衰减。第四步接元音选择与短语转 SAMPA，最后做轨迹保留的串行拼接与多轨并行。

关键超参数与信息条件要按原文保留。中立频率 233 Hz、俯仰正负 45 度对 E2 到 E53 个八度、横滚正负 30 度对强度 0.2 到 1.0 且中心 0.7、更新约 60 Hz 约 16 毫秒、平滑系数 0.25 即历史权重 0.75、颤音窗 300 毫秒门限 200 度每秒、颤音 6 Hz、停止后每帧乘 0.94、控制 8 个参数而总数 19 个、5 个基本元音、短语固定语速与循环语义。浏览器需要方向与运动事件权限，移动端需用安全上下文与用户手势启动音频，惯性模式需按键门控。

区分 3 类开放。代码开源指 Pink Trombone 仓库可看，系统可运行指整机浏览器应用可装可播，权重下载在此不适用因为没有神经网络权重。复现成功的判据是，画竖线音高跟手变化，倾手机音高与音量分别变化，摇手机出现可闻颤音并能平滑收尾，短语松开中断、再按重头、按住超长循环。若某一步失败，优先检查事件名、消息字段与线程边界，再查映射公式，最后才怀疑合成器本身。

### 何时值得尝试，还需补哪项验证？

值得尝试的场景有 3 类。第一类是课堂或工作坊里的语调外化，让学习者先画出母语者的语调骨架再模仿，元音模式听轮廓、短语模式对重音，重点在可视化对照而不在 1 次练准。第二类是移动音乐里的嗓音质感探索，用绘制做可重复的动机形状，用惯性做滑音与颤音，不追求精确音阶。第 3 类是原型方法教学，用它讲线程隔离、传感器平滑与映射设计，因为链路短而完整。

不值得的场景也要说清。需要精确音高与节奏的曲目、需要大词表连续语音、需要在嘈杂教室里逐人打分的场景都不适合，当前映射精度、固定语速与无评测的现状撑不住。论文特有的误解是把横轴当成第二个表现维度，原文明确横轴未用且预实验支持这种空置，复现时不要自作主张把横轴直接绑音量而不做对照。另一个误解是把约 60 Hz 当成延迟承诺，它只是发送节拍，真实延迟还包括触屏采样、事件投递与音频缓冲。

还需补的验证按优先级是，被试能多精确地命中目标半音与目标重音，误触发颤音率与跟手延迟分布，不同手机与浏览器的兼容矩阵，以及纵向语调训练是否迁移到自然嗓音。补验证时同一实验内固定机型、握持与目标曲线，分别报告绘制与惯性的音高误差与强度误差，不把自动声学距离当成人耳判断，不把末步结果推广到全程。只有补完这些，才能把可能与待验证改写成报告与支持。

## 📐 原文公式与排版

以下展示论文原页中的数学表达区域，保留原始上下标、分式和符号排版。区域序号仅用于本文导航，不是论文公式编号。

[![原文数学表达区域 1，PDF 第 3 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/nime-2026/d1604acf1438/figure-1.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/nime-2026/d1604acf1438/figure-1.png)

区域 1 · [查看论文原页](https://nime.org/proceedings/2026/nime2026_165.pdf#page=3)

[![原文数学表达区域 2，PDF 第 3 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/nime-2026/d1604acf1438/figure-2.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/nime-2026/d1604acf1438/figure-2.png)

区域 2 · [查看论文原页](https://nime.org/proceedings/2026/nime2026_165.pdf#page=3)

[![原文数学表达区域 3，PDF 第 3 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/nime-2026/d1604acf1438/figure-3.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/nime-2026/d1604acf1438/figure-3.png)

区域 3 · [查看论文原页](https://nime.org/proceedings/2026/nime2026_165.pdf#page=3)

[![原文数学表达区域 4，PDF 第 3 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/nime-2026/d1604acf1438/figure-4.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/nime-2026/d1604acf1438/figure-4.png)

区域 4 · [查看论文原页](https://nime.org/proceedings/2026/nime2026_165.pdf#page=3)

[![原文数学表达区域 5，PDF 第 3 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/nime-2026/d1604acf1438/figure-5.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/nime-2026/d1604acf1438/figure-5.png)

区域 5 · [查看论文原页](https://nime.org/proceedings/2026/nime2026_165.pdf#page=3)

[![原文数学表达区域 6，PDF 第 3 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/nime-2026/d1604acf1438/figure-6.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/nime-2026/d1604acf1438/figure-6.png)

区域 6 · [查看论文原页](https://nime.org/proceedings/2026/nime2026_165.pdf#page=3)

[![原文数学表达区域 7，PDF 第 3 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/nime-2026/d1604acf1438/figure-7.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/nime-2026/d1604acf1438/figure-7.png)

区域 7 · [查看论文原页](https://nime.org/proceedings/2026/nime2026_165.pdf#page=3)

另有 8 个候选区域因边界不明确或图片数量、尺寸限制未展开；请[查看完整论文](https://nime.org/proceedings/2026/nime2026_165.pdf)中的原始排版。

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。
- 评分规则：type-aware-v1
- 评分模型：muse-spark-1.3-contributor
- 评分请求协议：openai_responses

---

[← 返回 nime-2026 论文汇总](/posts/conference-nime-2026/)
