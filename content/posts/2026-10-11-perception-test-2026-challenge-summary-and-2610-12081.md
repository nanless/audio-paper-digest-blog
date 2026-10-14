---
title: "Perception Test 2026: Challenge Summary and Extension to City-scale Audio-Visual Reasoning"
date: 2026-10-11
draft: false
tags: [音视频问答, 基准设计, 基准测试, 数据集]
categories: [论文速递]
description: "论文用桌面尺度问答加城市步行长视频两类新赛道考查空间与听视觉推理，获胜方案多为多模型智能体管线而单一通用模型仍落后，代价是大量工具调用与计算开销。"
hiddenInHomeList: true
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_arxiv_id: "2610.12081"
paper_digest_workbench_contract: "researcher-workbench-v1"
paper_digest_reader_title: "城市尺度步行视频里的空间与声音推理：Perception Test 2026 四赛道总结"
paper_digest_original_title: "Perception Test 2026: Challenge Summary and Extension to City-scale Audio-Visual Reasoning"
paper_digest_arxiv_version: 1
paper_digest_arxiv_versioned_id: "2610.12081v1"
paper_digest_arxiv_abs_url: "https://arxiv.org/abs/2610.12081v1"
paper_digest_arxiv_pdf_url: "https://arxiv.org/pdf/2610.12081v1.pdf"
paper_digest_primary_task: "音视频问答"
paper_digest_tags_contract: "paper-tag-flat-tags-v2"
paper_digest_tags_selection_contract: "paper-tag-selection-v2"
paper_digest_tags_registry_version: "paper-tag-catalog-v2"
paper_digest_tags_registry_sha256: "0a0847314ab2059d95efac33376414498e598a1f02a1486869bee0efc481d1f7"
paper_digest_tags_concepts: [{"facet":"task","id":"task.av-question-answering","label":"音视频问答"},{"facet":"method","id":"method.benchmark-design","label":"基准设计"},{"facet":"artifact","id":"artifact.benchmark","label":"基准测试"},{"facet":"artifact","id":"artifact.dataset","label":"数据集"}]
paper_digest_primary_method: "基准设计"
paper_digest_score: 6.3
paper_digest_rank_bucket: "前50%"
paper_digest_document_type: "数据集与基准"
paper_digest_one_sentence: "论文用桌面尺度问答加城市步行长视频两类新赛道考查空间与听视觉推理，获胜方案多为多模型智能体管线而单一通用模型仍落后，代价是大量工具调用与计算开销。"
paper_digest_authors: [{"affiliations":["Google DeepMind"],"name":"Fedor Kitashov"},{"affiliations":["Google DeepMind"],"name":"João Carreira"},{"affiliations":["Toyota Technological Institute at Chicago"],"name":"Shiry Ginosar"},{"affiliations":["Google DeepMind","University of Bristol"],"name":"Dima Damen"},{"affiliations":["Google DeepMind","University of Oxford"],"name":"Andrew Zisserman"},{"affiliations":["Google DeepMind"],"name":"Viorica Pătrăucean"}]
paper_digest_abstract_sha256: "0fcb568be59cc5f581dabcc905ea64bb3d38e5c0044e9f34476982e859470dfe"
paper_digest_sidecars: {"citation.bib":{"sha256":"4bee832d1ff991f445f0583850b44bb78c516f80644ffa0782e5a5176b9b0cf5","url":"/audio-paper-digest-blog/data/papers/2026-10-11/2610-12081/citation.bib"},"citation.json":{"sha256":"21d8ca43511100f992804ff3fb6034c4fa5c5bccc559ebb2ad7c21ba5fb06e22","url":"/audio-paper-digest-blog/data/papers/2026-10-11/2610-12081/citation.json"},"citation.ris":{"sha256":"3c94296fb118b06242356880195104b9367f3835682f522176bc44e056400ffa","url":"/audio-paper-digest-blog/data/papers/2026-10-11/2610-12081/citation.ris"},"rethink-context.json":{"contract":"paper-research-context-v2","sha256":"e3563ec7c960a5d10a117c96dbbe6dccc331c41a19cbf2955b2e72848101b037","url":"/audio-paper-digest-blog/data/papers/2026-10-11/2610-12081/rethink-context.json"}}
paper_digest_api_reader_contract: "beginner-researcher-v3"
paper_digest_api_reader_article_sha256: "d12d66e63707a60ff600faa7006c9bb1b6776b5c82bb7bcb9152cd11ee9e7b85"
paper_digest_api_reader_plan_sha256: "6e2eb02a9ae8c3a44ba305e421e53f97ce2d79bc5ac3e2156b8e355931fa74a6"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings-v4"
paper_digest_api_reader_source_bindings_sha256: "61512d80f51f2bfb9efa18fcca64c9bb64c0adaad67ec49443226e6d23e47178"
paper_digest_api_reader_source_table_count: 5
paper_digest_api_reader_source_formula_count: 0
paper_digest_api_reader_structured_artifacts_sha256: "0e878c0a21d9490d78a2212750bba48c46edfb5e706ec6d8d76f67b9f7685cfe"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity-v1"
paper_digest_api_reader_author_identity_sha256: "3f254a33bca37bf57970b43e4ac9461f78f6fced272f4f2b4f8ec9bf853f44fc"
paper_digest_api_reader_author_count: 6
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity-v1"
paper_digest_api_reader_resource_identity_sha256: "f24805c39f49af3eafd263f6da60244ff911f6790a19cde39a9ce636523de214"
paper_digest_api_reader_resource_count: 1
paper_digest_api_reader_figure_persistence: "ephemeral-no-persisted-figure-assets-v1"
paper_digest_api_reader_decision_projection: "api-reader-decision-projection-v2"
---

# 📄 城市尺度步行视频里的空间与声音推理：Perception Test 2026 四赛道总结

> 英文题目：*[Perception Test 2026: Challenge Summary and Extension to City-scale Audio-Visual Reasoning](https://arxiv.org/abs/2610.12081v1)*

> 标签：#音视频问答 | #基准设计 | #基准测试 | #数据集
>
> 评分：**6.3/10** | 创新 1/2 | 技术严谨 1/1.5 | 实验充分 1.2/1.5 | 清晰度 0.8/1 | 影响力 1/1.5 | 开源 0/1.5 | 可复现 0.3/0.5 | 工程/实践 1/1.5


## 👥 作者与机构

- Fedor Kitashov：Google DeepMind
- João Carreira：Google DeepMind
- Shiry Ginosar：Toyota Technological Institute at Chicago
- Dima Damen：Google DeepMind；University of Bristol
- Andrew Zisserman：Google DeepMind；University of Oxford
- Viorica Pătrăucean：Google DeepMind

## 📌 核心摘要

这篇报告总结在欧洲计算机视觉会议（European Conference on Computer Vision，ECCV）2026 举办的第四届 Perception Test 挑战，输入是桌面尺度短视频与城市步行游览长视频，输出是选择题答案或被问及物体的视频轨迹，难点在于长距离空间记忆、声音与画面跨模态关联以及超长视频检索。原有统一视频问答（Unified VideoQA）与接地视频问答（Grounded VideoQA）沿用 Perception Test 数据，新增 KilometerVision 考察地图轨迹与地标距离等城市空间判断，新增 KilometerAudio 要求在 1 小时至 3 小时步行视频中结合声音与画面回答问题。优胜方案多为零样本智能体流程，负责建立时间戳证据日志、调用语音转写与声音事件索引或三维重建工具，再由视觉语言模型（Vision-Language Model，VLM）综合作答，与以往单模型直接作答形成差异。城市尺度赛道上，获得奖项资格的最好成绩在 KilometerAudio 测试集 500 题上达到 0.782 的首位准确率，在 KilometerVision 测试集 986 题上达到 0.753 的首位准确率，而无获奖资格的 CloudAI-evolve 分别达到 0.864 和 0.905，显示工具编排已能逼近饱和但通用单模型仍落后。结论适用于本次公开排行榜与给定视频来源，对未见城市、其他语言语音与实时部署尚未验证。原文未披露训练、推理或部署成本。

## 🔗 开源与复现资源

- 第三方资源：<https://perception-test-challenge.github.io/> — 链接可访问（HTTP 200）

可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 挑战要解决什么感知短板

论文开篇讲了一个反差：前沿模型在数学、聚变控制和写代码上表现很强，但在日常感知尤其是空间理解上还不如普通人。作者把原因归于训练多是被动互联网数据，缺少与环境互动获得的空间经验。第四届 Perception Test 挑战因此把主题定为不同尺度下的空间智能，小尺度用原来桌面摆拍的 Perception Test 视频考精细操作与物理，大尺度用城市步行游览视频考 kilometer 级的路线、地标与声音。

对刚入门的研究生来说，可以把任务理解为给模型一段视频加一道选择或定位题，看它能否像人一样记住走过哪里、听到什么、物体在哪里。比赛在 EvalAI 上进行，2026 年 6 月中开放验证，7 到 8 月分批开放测试，8 月底关闭，共收到 120 队 1254 次测试提交，奖金总额 22000 欧元，还设了通用模型奖和因谷歌关联不参评的最佳成绩荣誉。理解这个背景很重要，后面所有赛道划分、指标和获胜方案都是为这个多尺度空间考查服务的，不是通用视频理解的随意堆砌。

### 已有音视频基准为何不够长不够专

在介绍新基准前，论文先把已有音视频基准放在时长维度上比较。原有 Perception Test 视频只有几十秒，AIR-Bench 约 30 秒，Video-MME 短集约 2.0 分钟，中集和 MAVERIX 约 15.0 分钟，长集到 60.0 分钟，但其中只是一小部分题目真正考声音。也就是说，要么视频短到装不下城市漫步，要么长视频里声音题被稀释，无法专门检验听觉加视觉的联合推理。下面的条形图对比直观展示了这种时长差距，横轴是对数分钟刻度，越往右代表平均视频越长。

读图时先看各基准的相对长度，再看 KilometerAudio 的位置，就能明白新基准想补的空白是又长又专考声音。

> **看图路径：** 1. 看横轴对数分钟刻度与各基准蓝色条长度，确认视频时长量级差异；2. 找到最下方绿色 KilometerAudio 条标注 72.2m，确认为最长；3. 对比 Video-MME 长视频 60.0m 但题面不全考声音，理解本基准的定位

[![原论文 Figure 4：Multiple-choice audio-video benchmarks.](https://arxiv.org/html/2610.12081v1/assets/audiobench.png)](https://arxiv.org/html/2610.12081v1/assets/audiobench.png)

*论文图 4。原论文 Figure 4:：“Multiple-choice audio-video benchmarks.”。*

图中最长的绿色条就是 KilometerAudio，标注平均超过 70 分钟，达到 72.2 分钟，而 Video-MME 长集为 60.0 分钟且声音题只占一小部分。JointAVBench 为 10.0 分钟，其他更短。这说明如果只用旧基准，很容易得出模型听视觉很好的结论，但那是在短片段或少量声音题上成立，换到 1 小时城市噪声、说话声、车声混杂且声源常在画面外的场景，结论未必成立。论文因此强调新基准视频不叠加无关配乐，声音都是行走实录，天然包含看不见声源的情况，这正是旧基准少见的难点。

### 四个赛道的输入输出与必须保留的信息

4 个赛道可以按输入输出记住。统一选择题视频问答输入是短桌面试频加文字题和三选或五选选项，其中 1842 道统一题还用视觉提示把点跟踪、动作排序改写成选择题，输出是选项编号，指标是选对比例即 top-1 准确率，越高越好。grounded 视频问答输入是视频加问题，输出是回答问题的物体在全视频的框轨迹，共 932 个测试视频 1859 个问题，指标是 HOTA，越高越好，它同时考核框找得准和跨帧跟得稳。

KilometerVision 输入是最长 10 分钟约 1 公里的步行视频加五选一题目，题目有 3 种呈现：纯文字五选项、选项是 5 张路线地图图像、题干里带一张地标参考图，输出仍是选项编号，测试集是 54 段视频 986 题。KilometerAudio 输入是 1 小时甚至 1 到 3 小时的步行视频完整音视频轨加五选一声音相关题，输出是选项编号，测试集是 218 个视频 500 题。所有城市赛道都不给训练集，要求零样本，统一题同样无训练划分强制零样本，只有原始统一赛道部分允许微调。

必须保留的信息包括长时顺序、转向累积、声音出现时刻与画面位置的对应，否则地图轨迹和声音定位都无从谈起。

### 城市空间题长什么样

KilometerVision 的 7 类题覆盖识别、方向与几何。地标识别与到地标距离、指南针朝向、闭环检测、路线总结、起点终点直线距离、带或不带文字标注的地图轨迹，共 986 题。地图轨迹题最有代表性：模型看完步行视频，要从 5 张形状相近的地图中挑出与行走路径一致的一张，有的有街道名标注，有的去标注只剩路网形状，考察对转弯序列和路段比例的记忆。地标题则给一张参考照片，问它是否在视频中出现，若出现再估计照片拍摄点到视频末帧拍摄点的直线距离，考察地点再认加尺度估计。下面这张示例图把输入视频帧和两行候选地图并置，可以作为理解题面的抓手。

先看上排街景理解第一视角输入，再看下两行地图选项理解输出形式，注意有无文字标注是两种难度条件。

> **看图路径：** 1. 先看上排五张步行街景帧，确认输入是连续第一视角城市漫步视频；2. 再对比中排带文字标注与下排去标注的两行候选地图，看路线形状与起终点差异；3. 注意选项 A 到 E 的红色轨迹分叉位置，这是区分正确路径的关键

[![原论文 Figure 1：Example of map trace tasks in the KilometerVision benchmark.](https://arxiv.org/html/2610.12081v1/assets/maptrace3.png)](https://arxiv.org/html/2610.12081v1/assets/maptrace3.png)

*论文图 1。原论文 Figure 1:：“Example of map trace tasks in the KilometerVision benchmark.”。*

图中上排是 5 张步行游览视频帧，有街道、红色电车、墙面壁画和海边广场，说明视频内容是连续城市漫步。下半部分左侧标注两行选项形式，一行是带文字标注的地图轨迹，一行是不带文字标注的地图轨迹，右侧 A 到 E 五列是候选地图，红色线为行走轨迹，起点终点用图钉标记。带标注行能借助店名街名做视觉语言对齐，去标注行只能靠路网几何形状匹配，因此后者更考纯空间记忆。教学上可以把这张图当作例子：若模型只记住个别店铺而没记住转弯顺序，就容易在形状相似的干扰地图上选错。

### 声音题如何做到非看非听不可

KilometerAudio 的出题规则是关键。标注员先在长视频里找可辨认的声音，包括人造物声如汽车摩托教堂钟声、自然声如鸟叫狗吠、说话歌声和城市噪声，然后编成必须同时用音频和视觉才能答对的题，类型有点声源空间定位、事件定位与计时、计数、歌曲与语音识别，还要配难的干扰选项并经研究团队检查。验证集复用 2024 和 2025 小时级问答里的 8 道声音题共 6 个视频，测试全部是新题 500 道，只有 3 个测试视频在往届用过。下面四道验证示例能帮初学者建立题感。

读每张卡片时先看题干再看右上角的模态标签，体会为什么单看画面或单听声音都答不全。

> **看图路径：** 1. 读四个小卡片的题干：地标处声音、音乐识别、救护车时刻、钟声计数加时刻；2. 注意每题右上角标注的声音加视觉或声音加时间要求，理解必须双模态；3. 看绿色正确答案与干扰项的接近程度，体会负选项的难度

[![原论文 Figure 3：Example KilometerAudio questions from the validation set (correct answer in green).](https://arxiv.org/html/2610.12081v1/ka_examples.svg)](https://arxiv.org/html/2610.12081v1/ka_examples.svg)

*论文图 3。原论文 Figure 3:：“Example KilometerAudio questions from the validation set (correct answer in green). Each requires reasoning over the audio track of an hour-long walking-tour video.”。*

图中左上在咖啡店附近问听到什么，正确答案是狗吠，干扰有拍手、救护车、现场音乐和猫叫；右上听户外商场吉他手唱什么歌，正确答案是 More Than Words；左下问救护车在视频什么时刻出现，正确答案是 40 分钟左右；右下问钟声响几次并推断白天还是晚上，正确答案是响 8 次且为晚上 8 点。这四题分别对应声源在地标处辨认、音乐识别、事件时刻定位、计数加时刻推断。

右上角标了声音加视觉或声音加时间，意思是答题既要听清声音细节，又要看画面地标或结合时间上下文。若把音频关掉，歌名和钟声次数无从得知；若不看画面，地标限定和白天黑夜线索也会丢失。

**统一选择题视频问答 × grounded 视频问答：** 统一选择题视频问答指给定视频和文字或视觉提示选项只选出正确答案，考察识别与推理；grounded 视频问答指还要把回答问题的目标物体在每一帧用框跟踪出来，考察定位与关联；前者输出选项编号，后者输出时空轨迹，两者搭配才能同时看到桌面小尺度场景里答对与找对的差距。

### 地标参考图题的推理链条

另一类城市空间题把图像放进题干，输入变成视频加文字加参考图。模型先要做地点再认：参考图里的砖楼门廊是否在 10 分钟漫步中出现过；若出现，还要估计参考图拍摄位置到视频最后 1 帧拍摄位置的直线距离，并从 5 个距离选项选一。这要求模型在长视频里建立大致的相机轨迹，再把孤立照片挂到轨迹上，最后做欧氏距离估计，不是简单图像相似度。论文配的示例上排是 5 张步行帧，下排是一张红砖白柱建筑的特写，文字问的正是上述两步。

做这类题时若只做全局检索容易被相似砖楼误导，若没有尺度概念则距离选项只能乱猜。获胜队伍因此会结合视觉地点识别做粗定位，再用光流偏航里程或 3 维重建恢复度量轨迹，用起点终点位移算直线距离，这正是后面智能体里几何工具的用武之地。

**地图轨迹 × 地标距离：** 地图轨迹指从步行视频推断行走路线并在候选地图图像中选出形状一致的一张；地标距离指判断参考图像是否在视频中出现并估计其与视频末帧直线距离；前者侧重整体路径形状匹配，后者侧重地点再认加尺度估计，组合起来覆盖城市尺度空间推理的定性与定量两端。

**音频事件索引 × 证据日志：** 音频事件索引指用冻结模型对长视频预先算出的带时间戳的声音类别分数、转写和检测结果，用于快速缩小候选时段；证据日志指智能体在检查原始音视频时记下的时间、看到与听到内容及推理依据；索引负责粗筛降成本，日志负责细查保可验证，两者衔接才敢在七十多分钟视频里回答只出现几秒的声音问题。

### 本届有没有训练以及智能体实际在计算什么

本届大部分优胜方案声明为零样本或免训练，只有统一选择题冠军微调了模型，需要先说清这一点以免误解。统一赛道冠军 Njust-KMG 微调了 Qwen3-VL-32B，用 Perception Test 训练集加最难题型的课程阶段和选项打乱以减位置偏好，同时零样本调用 Doubao-Seed-2.0-Pro 和 Gemini 3.1 Pro 按题型配提示词，最后按验证集每类准确率加权集成。其他获奖方案基本冻结基础视觉语言模型权重，不更新参数，而是靠提示、检索、投票和外部工具做推理。

grounded 赛道的 Gemini-SAM3 先让 Gemini 3.7 Flash 做跟踪规划，定目标身份、可见区间、锚帧和锚框并经检查，再让 SAM 3 以锚框为提示双向传播，对多目标问题还选用在外部数据上加小残差头训练的非模态框变体；华为方案用 GPT-5.6 Sol 定身份和初轨迹，再用独立轨迹、近景裁剪复问和 SAM 2.1 只修框坐标不改身份。城市赛道的计算更重：先离线建索引如 BEATs 对 447 类 AudioSet 声音打分、目标检测、多语 OCR、Whisper 转写、CLAP 声音检索，再在线定位候选时段细看原始音视频，最后多路投票或几何求解器覆盖多数票。

论文没有报告梯度路径、优化器细节和训练资源，因为除上述两处微调或小头外，本质是调用与搜索流程，无训练不等于确定性求解，相同视频多次运行仍可能因采样和投票而波动。

### 数据划分基线与比较公平性

数据划分要先记住两张规模表的内容。KilometerAudio 无训练集，验证集 6 视频 8 题，测试集 218 视频 500 题；KilometerVision 同样无训练集，验证集 13 视频 17 题，测试集 54 视频 986 题，其中地标相关 147 题、指南针 146 题、闭环 112 题、路线总结 147 题、起点终点欧氏距离 150 题、地图轨迹 284 题。统一赛道测试是 11528 道原始三选题加 1842 道五选统一题共 13370 题，grounded 是 932 视频 1859 问题。基线方面，随机猜在统一赛道得 0.313，因三选题 chance 为 33.3% 与五选题 20% 按题量加权为 31.5%。

KilometerVision 随机得 0.196，KilometerAudio 随机得 0.174，期望均为 0.20，实测偏离来自有限样本波动。grounded 基线用 MDETR 在中间帧检测后全视频静止复制，只得 0.052 HOTA。评估都要求上报零样本少样本或微调模式，只有测试榜公开提交才参奖。城市赛道测试服务器 8 月才上线，留给参赛者的优化时间短于前两赛道，这点在解读成绩时要考虑。作者资源方面，论文只给出挑战网站链接，经校验为第三方可用链接，不能写成作者已开源代码或权重，来源未确认也不是技术缺陷。

### 统一选择题涨在哪里难在哪里

统一选择题的逐年对比是理解进步来源的最好材料。横轴是年份，纵轴是 top-1 准确率，蓝色为原始 11528 题，黄色为 2025 新增 1842 题，总体为两者合并。2026 冠军 Njust-KMG 在全 13370 题上达 0.914，亚军零样本 Doubao-Seed-2.0-Lite 达 0.910，随机基线 0.313。单看数字会觉得已饱和，但分题型看才有信息量。

看图时先按颜色区分总体与两个子集的柱高，再对比 2025 到 2026 年黄色新增题柱的跳变幅度，最后观察蓝色原始题柱的稳步提升过程。

> **看图路径：** 1. 区分蓝色原始 11528 题与黄色新增 1842 题两组柱子，看 2025 到 2026 的变化；2. 注意 2026 两组都明显升高，尤其黄色新增题涨幅更大；3. 对照最左侧频率基线，确认提升不是靠猜选项偏好得到

[![原论文 Figure 7：Best multiple-choice video QA test results per edition.](https://arxiv.org/html/2610.12081v1/mcvqa2026.svg)](https://arxiv.org/html/2610.12081v1/mcvqa2026.svg)

*论文图 6。原论文 Figure 7:：“Best multiple-choice video QA test results per edition.”。*

图中 2026 紫色与深蓝柱超过 0.9，黄色新增题柱也接近 0.86，而 2025 黄色仅 0.654 左右，蓝色从 0.837 到 0.922。论文指出新增的跟踪与定位改写题从 65.4% 涨到 86.2%，原始集从 83.7% 涨到 92.2%，说明曾被认为难的改写题正在快速被攻克。按 141 种细分题型看，冠军有 66 题准确率超 95% 为准解决，2025 冠军仅 36 题；低于等于 50% 的只剩 2 题，2025 年还有 14 题，且都集中在物理直觉如倒水温度、改变速度摩擦后的结果预测，最难 10 题里 8 题物理、1 题空间、1 题抽象。这意味着记忆与计数已基本解决，剩余误差是反事实物理想象，不是靠多采样帧能直接补的。

**top-1 准确率 × HOTA：** top-1 准确率指预测选项与正确答案完全一致的题目比例，越高越好，用于三类选择题赛道；HOTA 指同时衡量检测是否找对物体和关联是否跟对同一物体的跟踪问答指标，越高越好，用于 grounded 赛道；前者只看单选对错，后者还要看时空框序列质量，因此不能直接跨赛道比较数值大小。

下面这张表比较了统一赛道的基线与获奖名次，指标方向是越高越好，比较条件是同一测试集。

| Rank | Team name | top-1 |
| --- | --- | --- |
| Baseline | Random | 0.313 |
| Runner-up | F423 (zero-shot) | 0.910 |
| Best | Njust-KMG (fine-tuned) | 0.914 |

这 1 对比的适用条件值得注意：冠军是 3 模型按题型加权集成，单个模型仅 78% 到 83%，91.4% 里有集成和题型先验的功劳；亚军用证据先行提示、自适应 1 到 2 帧采样和至多 1 次重问达到 91.0%，说明提示与采样策略贡献大。两者都依赖闭源大模型接口，复现成本和稳定性受接口变化影响，不能简单理解为单一开源模型已达 91%。

### 定位跟踪与城市双赛道的主结果

grounded 赛道进步同样显著但绝对值仍低于选择题。评价用 HOTA 及其分解的检测准确率与关联准确率，都是越高越好。下面这张五列表比较了基线与前 2 名，公平条件是同一 932 视频 1859 问题。

| Rank | Team name | HOTA | DetA | AssA |
| --- | --- | --- | --- | --- |
| Baseline | MDETR+static | 0.052 | 0.033 | 0.091 |
| Runner-up | Huawei SpaceMind | 0.654 | 0.651 | 0.661 |
| Best | Banana Bats | 0.664 | 0.654 | 0.677 |

表中冠军 Banana Bats 为 0.664 HOTA，检测 0.654，关联 0.677；亚军华为 0.654 HOTA，检测 0.651，关联 0.661；基线仅 0.052。相对 2025 最佳 0.497，2026 涨约三分之一，检测从 0.479 到 0.654，关联从 0.524 到 0.677。2023 最佳仅 0.063 略超基线，说明三年间视觉语言模型加可提示跟踪器的零样本组合是主要推力。

代价是双模型串行加双向传播与多次复问，延迟高于单模型直出，且论文未报告帧率与运行时间，无法承诺实时性。城市赛道方面，获奖最好为 KilometerVision 冠军 ohmyyuan 0.753、亚军华为 0.723，KilometerAudio 冠军 IUCV 0.782、亚军 WW11 0.752，随机基线分别为 0.196 和 0.174。下面这张表把城市赛道获奖与非参评最优并置，指标都是 top-1 准确率越高越好。

| Rank | Team name | top-1 |
| --- | --- | --- |
| Baseline | Random | 0.196 |
| Runner-up | Huawei SpaceMind | 0.723 |
| Best | ohmyyuan | 0.753 |
| Best-performing† | CloudAI-evolve | 0.905 |

表后解释机制差异：ohmyyuan 用 Gemini 3.7 Flash 建带时间戳的街名转向地标日志加题型手册，多会话自一致投票再用光流偏航里程和地点识别覆盖无多数票问题；华为用 VGGT 加度量深度重建相机轨迹，642 题由求和偏航、起点终点位移和路线形状匹配等专用求解器决定；IUCV 的免训练 AVRA 先离线算 BEATs 447 类分数、检测和 OCR，测试时定候选窗再看原始音视频并记证据日志，答完再看选项以减选项偏好；WW11 限制每题至多 48 帧，用 Whisper 转写加 CLAP 检索加 Qwen3-Omni 验短音频片段，至少 2 模态一致才改答案。

非参评 CloudAI-evolve 在两城市场均最高，达 0.905 和 0.864，但用了无限制 token 的智能体管线，还在验证集和约 10% 无标注测试题上学策略，有跨题学习之嫌，不能当作严格零样本部署成绩。通用模型 Wind_Rain_Tower 用同一 Qwen3.8-Max 直答四赛道，统一问答 0.896 接近冠军，多目标跟踪与城市题则明显落后，正好支撑论文结论：复杂空间多模态推理靠重管线可解，单模型直出仍难。

### 把跨赛道成绩放在同一标尺下读

要回答通用与专用差距多大，需要把 4 个赛道的优胜、基线与通用模型放在同一张宽表里读，但注意指标不同不能比大小，只能比相对位置。下面这张五列整理表用论文连续原句做来源，每行是一个赛道，列是可运行策略的成绩，最后一列是通用模型的成绩与名次，指标方向均为越高越好。

| 赛道 | 指标 | 随机基线 | 获奖最优 | 通用模型 |
| --- | --- | --- | --- | --- |
| 统一选择题 | top-1 准确率 | 0.313 | 0.914 | 0.896 |
| 定位问答 | HOTA | 0.052 | 0.664 | 0.465 |
| 城市视觉 | top-1 准确率 | 0.196 | 0.753 | 0.604 |
| 城市音频 | top-1 准确率 | 0.174 | 0.782 | 0.506 |

表后解释两点限制与一处反例。限制一是通用模型在统一赛道达冠军 98% 看似很强，但该赛道冠军本身是集成，单模型仅 78% 到 83%，通用 0.896 与单模型差距并不大，集成红利不应计入架构优势。限制二是城市两赛道通用仅为最优的 80% 与 65%，且在 KilometerAudio 排到 22 名，说明长视频声音加视觉多跳推理对单模型最不友好。反例是 CloudAI-evolve 虽数值最高，但因用了测试集子集学策略且 token 无限制，成本与公平性都不同，不能当作可部署的胜出项。

论文还报告总体趋势是除定位外三赛道超 80% 近饱和，但饱和只在当前五选一、容许重管线和离线索引的条件下成立，换成开集问答或限时限 token，结论要重测。未胜出项方面，统一赛道物理题、城市赛道去标注地图与远距离估计仍是短板，论文没有给出去掉几何工具或去掉音频索引后的消融数字，因此工具各自贡献多大仍待验证。

### 结论在什么条件下才成立

论文讨论节的结论很克制：大规模听视觉与空间推理能被编排模型加显式工具的系统解决，但对独立使用的多模态模型仍是开放问题。这句话有 3 个成立条件。第一，视频是公开 YouTube 步行游览，未叠加配乐且多为白天城市街景，若换成夜晚、室内或强剪辑视频，声音与地标分布会变，成绩不能直接迁移。第二，题目是五选一，模型可用排除法和选项偏好，论文冠军还特意用选项打乱和先答后看选项来减偏好，说明选项本身带来可利用信号，开集生成题会更难。

第三，最优成绩依赖离线索引、度量 3 维重建、多次自一致投票和人工题型手册，论文未测量延迟、token 消耗与误判率，也未报告硬件预算，因此不能承诺更快更便宜，只知道准确率高。另一局限是数据规模：城市音频验证仅 6 视频 8 题，调参很容易过拟合验证；城市视觉验证仅 13 视频 17 题，同样不足以做可靠模型选择。测试集虽有 500 与 986 题，但都来自同一类步行视频，乡村、车载或无人机视角尚未评测。

最后，获奖多依赖闭源接口如 Gemini、GPT、Doubao-Seed，版本迭代后能否复现原文数字，需要重新跑榜，论文只保证 2026 年 8 月榜单快照。

### 复现第一步做什么

复现要分赛道走。先到挑战网站确认四赛道验证与测试入口和提交格式，再按零样本要求准备模型接口，不要先微调城市赛道，因为官方不提供训练集，微调即算违规比较。统一赛道可先跑随机基线核对 0.313 附近，再跑单零样本视觉语言模型看能否到 78% 到 83% 区间，最后再做题型加权集成冲 91% 左右，记得记录每类验证准确率做权重，并做选项打乱。

grounded 赛道先跑 MDETR 中间帧静止基线核对 0.052 左右，再接视觉语言模型做跟踪规划输出 1 帧每秒稀疏框，最后用 SAM 系列双向传播并只在通过可靠性检查时融合，注意多目标时选用非模态框变体，且第二阶段只修坐标不改身份以免身份漂移。城市视觉先实现时间戳日志与题型手册，再加光流偏航与地点识别做覆盖投票；城市音频先离线跑 BEATs 447 类、检测、OCR 或 Whisper 加 CLAP 建索引，再在线定两三个候选窗细查原始音视频并记证据日志。

所有实验都要固定采样帧率、记录 token 与运行时间，因为论文缺成本数据，补上才能判断管线是否实用。代码权重方面，论文未声明开源仓库与可下载权重，只能说第三方挑战网站当前可用，SAM、VGGT、BEATs、Whisper 等外部工具需各自按原项目获取，不能混为本论文已开源。

### 什么时候值得尝试与还需补什么验证

什么时候值得尝试取决于任务形态。如果你的任务是长步行视频的路线、地标距离或稀疏声音事件问答，且允许离线预处理和多步工具调用，那么论文的索引加证据日志加几何求解器路线值得直接借鉴；如果要求单模型实时直出或开集生成，则论文已提示单通用模型会掉到 65% 到 80% 相对水平，不宜直接部署。复现第一步是先在验证小集上跑通索引与日志闭环，确认候选窗召回，再补专用求解器，不要一上来就调大模型提示。

还需补的验证有三项：去掉几何或音频索引的消融以量化工具贡献；在开集与限 token 限时下的重测以检验饱和是否只是五选一与重管线带来的假象；在非城市、夜间与车载视角上的泛化测试。下面的宽表把通用模型的四赛道位置与相对水平汇总，便于判断何时用通用直出、何时必须上管线。

| 赛道 | 通用成绩 | 通用名次 | 相对最优 | 测试规模 |
| --- | --- | --- | --- | --- |
| 统一选择题 | 0.896 | 5 | 98% | 13370 题 |
| 定位问答 | 0.465 | 13 | 69% | 1859 问 |
| 城市视觉 | 0.604 | 9 | 80% | 986 题 |
| 城市音频 | 0.506 | 22 | 65% | 500 题 |

表后总结：通用直出只在短桌面试选择题上接近专用管线，在需要长时几何累积与声音细听的城市赛道和需要逐帧跟准的定位赛道上差距拉大。论文价值不在于给出一个可直接部署的模型，而在于用同一届榜单证明重管线能把城市长视频考题做到 80% 以上，同时提醒这种高分不等于感知已解决，换条件仍需重估。

**智能体管线 × 单一通用模型：** 智能体管线指以视觉语言模型为规划者再调用语音识别、声音检索、三维重建或几何求解器等多工具分步求解的系统；单一通用模型指只用一个多模态模型直接看视频并给出答案或框的系统；前者用外部工具补尺度与长时记忆，后者依赖模型自身端到端能力，论文的对比正是要说明城市长视频下两者差距何在。

<details>
<summary>📎 论文与评分元数据</summary>

排名：前50% | 文档类型：数据集与基准 | [arXiv 原文](https://arxiv.org/abs/2610.12081v1)

</details>

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。

- 评分规则：type-aware-v1

- 评分模型：muse-spark-1.3-contributor

- 评分请求协议：openai_responses

---

[← 返回 2026-10-11 语音/音乐/音频论文速递](/audio-paper-digest-blog/posts/2026-10-11/)
