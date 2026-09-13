---
title: "SonoWorld: From One Image to a 3D Audio-Visual Scene"
date: 2026-09-13
draft: false
description: "论文提出从单图生成可导航三维视觉加空间声场的新任务，并用免训练的全景重建加语义接地加高保真立体声编码链路实现，在 68 段实录上的方向误差降低 47% 等报告提升下仍保留运动声源等明确边界。"
tags: ["数据集", "信号处理", "空间音频信号", "音视频生成"]
categories: ["cvpr-2026 论文"]
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_paper_id: "conference:cvpr:2026:conference-paper-id:Jin_SonoWorld_From_One_Image_to_a_3D_Audio-Visual_Scene_CVPR_2026_paper"
paper_digest_source_kind: conference
paper_digest_conference_id: "cvpr-2026"
paper_digest_conference_record_url: "https://openaccess.thecvf.com/content/CVPR2026/html/Jin_SonoWorld_From_One_Image_to_a_3D_Audio-Visual_Scene_CVPR_2026_paper.html"
paper_digest_conference_pdf_url: "https://openaccess.thecvf.com/content/CVPR2026/papers/Jin_SonoWorld_From_One_Image_to_a_3D_Audio-Visual_Scene_CVPR_2026_paper.pdf"
paper_digest_api_reader_contract: "beginner-researcher-v3"
paper_digest_api_reader_article_sha256: "587e9d1d50bad3afc3db6c8f78ba47fd44e2b29310db0fac8907b54969650ec4"
paper_digest_api_reader_plan_sha256: "a29845adeeebb3c964ed7e00a72fbbc01da45238a874ab6bcb7e95f1e8ee51c7"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings-v4"
paper_digest_api_reader_source_bindings_sha256: "9f125038236baf74706a78fc863c9f33fe4ed22f3721e01e10eb9a99a5f3d194"
paper_digest_api_reader_source_table_count: 2
paper_digest_api_reader_source_formula_count: 0
paper_digest_api_reader_structured_artifacts_sha256: "a549bdf63c703e9fb2d8330f8bd3e8cc472ab416bb67de6e3111b72b9dbf8852"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity-v1"
paper_digest_api_reader_author_identity_sha256: "1c738f0bc653fe21da0b16329a75a8dad905d3049480bfe274a298bf235bb934"
paper_digest_api_reader_author_count: 4
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity-v1"
paper_digest_api_reader_resource_identity_sha256: "89ccdd67030cda0fe8ecd6ab70335e2dcaa483b8326041d1d83bcd8b7f07a9de"
paper_digest_api_reader_resource_count: 1
paper_digest_api_reader_decision_projection: "api-reader-decision-projection-v2"
paper_digest_scoring_contract: "api-scoring-audit-v2"
paper_digest_taxonomy_contract: "paper-taxonomy-flat-tags-compat-v1"
paper_digest_taxonomy_selection_contract: "paper-taxonomy-selection-v1"
paper_digest_taxonomy_registry_version: "paper-taxonomy-v1"
paper_digest_taxonomy_registry_sha256: "15c82a567ce5a55dc1175684ed08b64c158558639d9c8fb822c9587ec32a8778"
paper_digest_taxonomy_concepts: [{"facet":"artifact","id":"artifact.dataset","label":"数据集"},{"facet":"method","id":"method.signal-processing","label":"信号处理"},{"facet":"signal","id":"signal.spatial-audio","label":"空间音频信号"},{"facet":"task","id":"task.av-generation","label":"音视频生成"}]
paper_digest_primary_task: "音视频生成"
paper_digest_primary_method: "信号处理"
paper_digest_score: 7.2
paper_digest_rank_bucket: "前50%"
paper_digest_document_type: "方法研究"
paper_digest_conference_structure: replayable-pdf-layout-v1
---

# 📄 一张图如何长出可走可听的三维声景：SonoWorld 的定位与空间化链路

> 英文题目：*SonoWorld: From One Image to a 3D Audio-Visual Scene*

> 会议身份：`conference:cvpr:2026:conference-paper-id:Jin_SonoWorld_From_One_Image_to_a_3D_Audio-Visual_Scene_CVPR_2026_paper`


> ✅ 来源为官方会议 PDF；表格与 Figure 按原文证据绑定。PDF 公式以原页区域图片展示，未冒称作者原始 TeX。

> 会议来源：[官方记录](https://openaccess.thecvf.com/content/CVPR2026/html/Jin_SonoWorld_From_One_Image_to_a_3D_Audio-Visual_Scene_CVPR_2026_paper.html) · [官方 PDF](https://openaccess.thecvf.com/content/CVPR2026/papers/Jin_SonoWorld_From_One_Image_to_a_3D_Audio-Visual_Scene_CVPR_2026_paper.pdf)

标签：#数据集 #信号处理 #空间音频信号 #音视频生成

评分：**7.2/10** | 创新 1.6/2 | 技术严谨 1.2/1.5 | 实验充分 0.9/1.5 | 清晰度 0.8/1 | 影响力 1.2/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 1.2/1.5

排名：前50% | 文档类型：方法研究

## 👥 作者与机构

- Derong Jin：机构信息未能从会议 PDF 纯文本可靠映射
- Xiyi Chen：机构信息未能从会议 PDF 纯文本可靠映射
- Ming C. Lin：机构信息未能从会议 PDF 纯文本可靠映射
- Ruohan Gao：机构信息未能从会议 PDF 纯文本可靠映射

## 📌 核心摘要

该任务以单张透视RGB图像为输入，输出可自由导航的三维视觉场景与可在任意听者位姿渲染的空间声场，难点在于屏外声源补全、视听语义对齐与几何一致的空间化。SonoWorld采用免训练四阶段流水线，先校准相机俯仰与视场并外绘360°全景，再将全景提升为三维高斯泼溅场景以提供统一几何与深度坐标。接着视觉语言模型提议发声类别，经开放词汇分割与全景掩膜提纯后反投影为三维声音锚点，为每个声源赋予点状、簇状或环境类型与合成提示。最后按类型分别合成单声道并依距离衰减与球谐函数编码为Ambisonics，经头相关传输函数解码为双耳音频，听者位姿更新即驱动视听同步重渲染。与直接由视角视频生成固定点空间音频的方法不同，该方法以全景几何显式锚定声源并区分点状与弥散辐射，从而支持平移的六自由度渲染而非仅旋转。在SONOSCENE360评测基准下，Ours (Proprietary)的平均角度误差指标为0.728，低于OmniAudio的平均角度误差指标1.449。其适用边界受限于静态图像假设，对警车等运动声源与遮挡严重的屏外动态事件存在失败条件，且依赖外部全景重建与文本到音频先验质量。推理开销方面原文报告Fountain场景在苹果笔记本上音频回调低于1ms，满足5.3ms缓冲对应的实时交互延迟要求。

## 🔗 开源与复现资源

- 第三方资源：<https://github.com/ZiYang-xie/WorldGen> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 输入一张图，输出什么才算可听的三维场景？

输入是一张普通彩色图像，目标是同时给出两样东西：一是可导航的 3 维视觉场景，二是与视觉在语义和几何上对齐的空间声场。论文把必须保留的信息说得很具体：视觉部分要能渲染新视角图像，音频部分要在任意听音者位姿下合成高保真立体声信号。输出不是一段固定配乐，而是听音者走到哪里、转向哪里，声音的方向到达与距离衰减都要跟着变。举例来说，花园照片中的瀑布应在上游方向轰鸣并随接近增强，鸟鸣应在树冠方向间歇出现，昆虫声应在花丛附近呈高频床感，而木桥等静默物体应保持静默。

为理解为什么需要新任务，先看论文对现状的判断。单图 3 维生成已能把一张照片变成可步入的摄影级世界，但报告指出这些世界是静默的。传统音频合成多针对孤立物体或事件，而场景级音频必须同时组合异构源类型与尺度：点状的鸟鸣、面状的河流、环境性的风与虫鸣，它们随时间与距离的行为不同，且听音者移动时要保持连贯。这是初学者容易低估的一点：把单声道贴到全景上不等于空间音频，因为缺少 3 维位置、空间范围与头部转动下的方向一致性。

下图给出论文期望的完整对象：左侧单图进入，中间是带有多类声源标注的可探索场景，右侧是不同新视角与其对应的能量分布，阅读时把输入到输出的主路径先走通。

> **看图路径：** 1. 先从左侧输入图像沿箭头看到上方云状全景中的标注；2. 再对比下方两个新视角与其各自的空间音频能量图亮区位置；3. 注意鸟类昆虫溪流等文字标注与听音图标的方向关系

[![原论文 Figure 1：From one image, SONOWORLD generates an explorable 3D audio-visual scene, where you can navigate…](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/dc8cd736071b/figure-1.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/dc8cd736071b/figure-1.png)

*论文图 1。原论文 Figure 1：“From one image, SONOWORLD generates an explorable 3D audio-visual scene, where you can navigate to novel views and locations, while listening to spatial audio aligned with scene…”。*

上图上半是输入到可探索 3 维声视场景的示意，云状全景上标出树木鸟类瀑布溪流昆虫与背景等语义分区，右侧耳机图标表示在新视点听空间音频；下半并排两个新视角，每个视角下方配一张空间音频能量图，亮区随视点与声源相对位置变化。该图支持的判断只是任务形态：输出必须同时包含视角相关的图像与听感相关的空间分布，而不是单张全景加一段固定音频。

### 同输入同目标的已有路线差在哪里？

按同输入、同目标、同监督来对照，论文把 3 维场景生成分为 3 类。迭代式方法交替做扩散外扩与 3 维提升，常用高斯溅射优化，可扩展但长轨迹易漂移；视频扩散方法利用时序一致生成器加缓存几何，控制精确但计算重、长距离一致性难；全景式方法先补全等距柱状全景再做深度对齐与高斯优化，能 1 次覆盖 360 度并保证地平线连续。论文选择跟随全景式路线，理由在证据中写明：全景能提供统一的场景级坐标系用于高保真立体声渲染。这是路线选择的关键，不是视觉质量单项最优，而是为音频 grounding 留出统一坐标。

空间音频生成侧，已有工作或是从文本或视频生成高质量单声道，再经房间脉冲响应或单声道到空间的转换做空间化；或是直接从文本或图像视频合成空间音频。论文点名最相关的同期工作只处理单物体、窄视角与离线处理，而本任务要求整 360 度环境、含画外声源、支持自由实时导航的场景一致 1 次声压级。这意味着比较时不能把单声道质量当成空间质量，前者只回答像不像，后者还要回答方向对不对、随移动变不变。

声音定位与分离也被明确区分。已有声源定位把找到像素或区域当终点，而本文把定位当中间步骤，目的是为后续在对应 3 维位置生成空间音频。已有视听分离处理已有混合声的拆分，而本文是为接地的全部声源生成空间声，并进一步把可微渲染器当作空间化模块去做 3 维中的分离演示。初学者应记住这种分工：定位精度服务于生成，分离演示服务于验证渲染器可微可用，而不是主任务本身。

### IMAGE2AVSCENE 的形式化目标是什么？

论文把新任务命名为 IMAGE2AVSCENE。给定单图，框架要生成视觉表示与听觉声场，形式化为从图像到二元组的映射。视觉用 3 维高斯溅射参数化，听觉用基于点云的表示以支持高保真立体声渲染。在观察者位姿下，场景可渲染为图像，音频可合成为对应阶数的高保真立体声系数。位姿包含旋转与平移，旋转支持 3 自由度渲染，若能在任意听音者位置编码高保真立体声，再复合头部旋转就能实现 6 自由度探索。实验多用 1 阶，通道数为 4 阶数加 1 的平方，框架声明阶数无关，可用通道数换空间精度。

背景部分给出高保真立体声的直观含义：球面方向函数按实球谐基展开，加权系数即各通道；虚拟麦克风朝某方向的响应是基向量与系数的点积；单个点源的系数是源波形乘距离衰减再乘该方向基向量。距离衰减在实现中取为指数除以距离的形式，含空气吸收系数。这些是后文点源与簇源公式的共同基础。

任务的难点被拆成 3 条：异构源的组合与移动一致性；从视觉推断什么会响、怎么响、多响；把声音接地到合理的 3 维位置与范围并渲染出可感知的方向与距离效应。论文的评估也对应拆成空间相干与语义对齐两轴，前者看方向与能量格局准不准，后者看声音是否来自正确的视觉物体区域。

### 免训练管线如何从单图走通到双耳输出？

论文强调这是免训练框架，即不为本任务训练新网络，而是调用与组合已有模型并用几何与信号计算连接。按一个样本走完全程：输入单图先做相机标定与变形得到带仰角校正的等距柱状投影，再经全景外扩补全 360 度；全景经全景到 3 维模型抬升为高斯场景并渲染出稠密深度；视觉语言模型从原图提出候选发声类别与声学属性，开放词汇分割与类别无关分割协同得到全景实例掩膜，再经深度反投影得到 3 维声锚点。

文本到音频模型为每个源与全局氛围生成波形并按预测能量均衡，最后按源类型编码为高保真立体声系数；在任意位姿下同步渲染高斯图像与经头相关传输函数解码的双耳音频。

下图是全管线的唯一总览，阅读时先走蓝色视觉路径，再走绿色接地路径，最后走橙色音频编码到紫色渲染路径，注意 3 条路径在深度与掩膜处汇合。

> **看图路径：** 1. 先沿左侧输入图像经过校准变形补全到全景再到三维的蓝色路径走一遍；2. 再看中上视觉语言模型分出的两路输出分别进入音频与分割分支；3. 最后看右侧从高保真立体声系数经点乘到头相关传输函数的渲染分支

[![原论文 Figure 3：Given a single image I, SONOWORLD jointly generates a 3D visual scene V and a semantically and…](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/dc8cd736071b/figure-3.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/dc8cd736071b/figure-3.png)

*论文图 3。原论文 Figure 3：“Given a single image I, SONOWORLD jointly generates a 3D visual scene V and a semantically and geometrically aligned audio scene A.”。*

上图左侧输入经视觉语言模型得到发声类别与每源提示词标签音量与类型，同时经校准变形补全得到全景；中部开放词汇分割与分割模型投票得到实例掩膜，经提升与深度得到 3 维位置；右侧文本到音频波形经均衡后按点源簇源与全局氛围编码为系数，再经球谐点乘与头相关传输函数得到双耳输出，底部同步输出视觉渲染。该图支持的判断是模块分工与数据流向：语义分支提供命名与音量，几何分支提供位置与范围，音频分支只做合成与空间化，不各自独立评价。

### 视觉场景是怎样从倾斜单图长成 360 度三维的？

第一步是单图相机标定。已有全景外扩常假设相机水平并把输入放在全景赤道，输入有俯仰时会出现垂直错位与畸变。论文调用单图标定网络联合推断重力方向与视场，得到相机仰角与焦距。接着用考虑该仰角的变形算子把透视图像重投影到等距柱状全景，并做基于高斯金字塔的多尺度抗锯齿采样，再调用外扩模型补全输入图像之外的缺失区域，得到完整 360 度全景。最后调用全景到 3 维重建模型把全景抬升为 3 维场景，可用开放的 HunyuanWorld-1.0 或效果更好的 Marble，参数化为 3 维高斯或纹理网格，支持实时交互探索。

**全景外扩 × 3 维高斯溅射：** 全景外扩负责把单视角补成 360 度等距柱状全景，提供统一的场景坐标和视野覆盖；3 维高斯溅射负责把全景抬升为可渲染深度与新视角的几何表示。两者搭配的原因是全景先解决遮挡外区域的语义连续，再由几何重建提供逐像素深度以支持声源反投影，组合后新增的作用是听音者任意平移都有对应的视觉与距离依据。

对初学者而言，关键是理解为什么先补全再重建：补全解决看不见区域的内容连续，重建解决看得见与补全区域的几何一致。若跳过标定直接把倾斜图贴到赤道，后续深度与反投影都会系统性偏高或偏低，声源方向也会整体偏移。论文把所用外扩实现指向 WorldGen，资源状态显示该第三方仓库当前可用，状态码为 200，可作为复现时检查视觉分支的起点，但是否与论文实验版本一致仍需核对提交记录。

### 三维语义接地如何得到可发声的三维锚点？

接地分 4 步。先用视觉语言模型从输入图像得到候选发声类别集与属性，包括源类型标签、音频合成用文本提示与幅度均衡参数，可用闭源模型或开放的 LLaVA-Next-34B。接着做开放词汇分割：因该类模型在透视小视场上训练，论文把生成全景切成重叠透视块，在每块上按类别集运行 X-Decoder，再重投影回全景坐标并按类别聚合，得到带语义但跨块不连续的掩膜预测。

然后做全景掩膜精炼：用 SAM2 在全景上产生全局几何一致但类别无关的提议，让开放词汇预测按空间一致性做置信加权投票，保留语义支持强的提议并在附近受支持像素上适度精炼，按类别聚合成最终全景实例集。最后用 3 维场景渲染的深度把每个实例掩膜反投影为 3 维点集，收集全部实例的 3 维位置。

**开放词汇分割 × 类别无关分割：** 开放词汇分割负责按语言给出的发声类别在透视小块上给出带语义的实例掩膜，但跨块不连续；类别无关分割负责在全景上给出几何完整但无语义的区域提议。搭配理由是前者有命名能力而后者有全局边界能力，组合后通过置信加权投票保留语义支持强的提议，新增的作用是得到全景一致且可命名的声源掩膜集合。

这里容易误解的是切块原因：不是为了加速，而是为了匹配开放词汇模型的训练域。全景直接输入会导致垂直视场与接缝处大区域缺失与断边，而 SAM2 能处理等距柱状格式但无语义。投票机制正是用几何完整性约束语义碎片。接地完成后每个声音都有 3 维点云或质心可用，为编码器提供距离向量与范围依据。论文明确静默物体不应成为声源，这依赖视觉语言模型不提议它们，而不是编码器静音它们。

### 不同尺度的声音如何编码为随位姿变化的系数？

编码先解决像什么，再解决在哪里多响。论文用 MMAudio 从源特定提示生成每源原始波形，并从全局提示生成场景级环境波形，再按预测能量分贝值做均衡，0 分贝为最响，公式为原始波形乘以 10 的能量除以 20 次方。接着按源类型空间化。接地源集合被划分为点状与簇状两个不交子集。对听音者位姿，距离衰减与空气吸收建模为指数衰减除以距离，距离为声源到听音者位置的欧氏距离。总系数是接地点源项、簇源项与全局氛围项之和。

点源用点云质心近似，按单点源公式写成波形乘衰减再乘旋转后方向的球谐向量。簇源对点云内全部点平均形成漫射场，对区域内每个点同样计算衰减与方向基再平均；当区域包围听音者时，高阶方向项倾向相互抵消并汇聚到全向分量，使感知指向性对头部旋转不敏感。全局氛围只反映在全向分量，无空间变化。最终在任意位姿合成对应阶数的系数，再渲染为双耳音频。论文强调该编码对音频缓冲可微，使其可用于后续从音频观测优化场景与源参数的学习任务。

**1 次声压级 × 高保真立体声编码：** 1 次声压级负责记录空间中某一点周围各个方向的声音分布，是声场的紧凑表示；高保真立体声编码负责把每个接地声源的单声道波形按 3 维位置、距离衰减和源类型映射为该表示的系数。搭配原因是单声道只解决像什么，全景定位只解决在哪里，编码把两者按球谐基函数合成，组合后新增的作用是听音者旋转与平移时都能解码出方向与距离一致的双耳信号。

**点声源 × 簇状声源：** 点声源负责用实例点云质心近似发声位置，适用于鸟鸣等集中声；簇状声源负责对河流等延展区域的全部点取平均形成漫射场，适用于面状声。搭配原因是真实场景同时包含集中与延展尺度，组合后按类型分别用单点投影与多点平均编码，新增的作用是近距离包围感与远距离指向性都能得到不同但合理的空间行为。

自由视点渲染时，视觉帧由高斯溅射标准渲染得到，高保真立体声信号经基于头相关传输函数的解码器卷积为左右耳波形。更新相机与麦克风位姿即可实现视角一致、空间化的交互导航。初学者应区分两类延迟：视觉渲染帧率与音频回调延迟是不同量，论文只报告了音频回调的实测值，不能直接推断整体系统帧率。

### 没有训练阶段时，计算与优化到底发生在哪里？

本研究声明为免训练管线，因此不存在为 IMAGE2AVSCENE 从零训练主干网络的阶段，也就没有梯度更新主干权重、冻结与解冻、训练集划分或早停可报告。实际计算发生在 4 类调用与解析计算中：一是调用标定、外扩、重建、视觉语言、分割与文本到音频等已有模型做推理；二是用变形、投票、反投影与球谐投影等确定性几何与信号计算连接它们；三是用预测的能量分贝与距离衰减做逐源均衡与空间加权；四是在扩展应用中对渲染器参数做可微优化。未报告的是各外部模型的内部训练细节与超参数，论文不从模型名称推定其实现，复现时应按各自开源说明核对版本。

把无训练等同于确定性求解是常见误解。文本到音频与外扩等生成模型本身带采样随机性，冻结参数只表示不更新权重，不保证多次运行输出逐样本一致。论文用开放源版本与闭源版本分别报告结果，正是为了说明在相同几何计算下，不同外部模型选择会带来性能差异，而不是证明管线无随机性。需要补的验证是固定随机种子或多次采样后的方差，但原文仅给出均值附近的置信区间，未给出多次端到端采样的分布，复现时应自行记录种子与采样次数。

### 用什么数据、基线与指标才能检验方向与语义？

定量评估依赖新采集的 SONOSCENE360，因已有数据集不提供与相机视点偏移的听音者位置处的配对 3 维视觉与空间音频。采集用 Insta360 X5 同步 360 度视频与 RØDE NT-SF1 1 次声压级音频，覆盖喷泉、厨房、水池、桥、溪流与警笛 6 个真实场景，共 68 段。每场景对可听源提供语义标签、声音简述与相对麦克风的粗方向，例如左侧右侧前方后方，用于空间与语义两轴评估。定性、用户研究与演示还加入网络照片与扩散生成图像，涵盖飞机降落、河畔市场、火山爆发等难实录事件，与真实场景互补。

下图展示数据采集与标注的完整对象，阅读时把硬件布局、标定参数与文本标注三部分对应起来，不要只看全景。

> **看图路径：** 1. 先看左侧麦克风标定框中的方位角俯仰角与四元数；2. 再看中间三脚架与右侧 360 度全景中橙色框的对应关系；3. 注意下方文本标注中声源标签方向与声音描述的写法

[![原论文 Figure 2：Illustration of real-world audio-visual scene data collec- tion and curation for SONOSCENE360.](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/dc8cd736071b/figure-2.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/dc8cd736071b/figure-2.png)

*论文图 2。原论文 Figure 2：“Illustration of real-world audio-visual scene data collec- tion and curation for SONOSCENE360.”。*

上图左侧给出麦克风标定的方位角俯仰角与旋转四元数示例，下方给出声源标签方向与声音描述的文本标注格式；中间是麦克风架与喷泉的实拍布局，右侧是 360 度全景及其橙色框选区域。该图支持的判断是评估条件的来源：方向误差与能量格局的真值都依赖这套标定与同步，若标定偏差则空间指标整体偏移，复现采集时应先复刻标定流程。

**方向到达误差 × 球面能量图相关：** 方向到达误差负责度量估计主方向与真值在方位角与俯仰角上的角度偏差，适用于单主导源；球面能量图相关负责度量整球能量分布的相关系数与曲线下面积，适用于多源场景。搭配原因是单方向不足以描述多源分布，组合后同时检验峰值准不准与整体亮区像不像，新增的作用是避免只对准一个源却丢失场景整体空间格局的误判。

空间指标比较预测空间音频的方向到达偏差与球面能量格局：方位角绝对误差、俯仰角绝对误差、测地角误差，以及能量图上的相关系数与曲线下面积。语义指标把虚拟麦克风朝左、右、前、后 4 个主方向渲染为定向单声道，再用 CLAP 计算音频文本相似、音频间相似，以及按标签对四方向排序的 top-1 准确率即方向 CLAP R 精度。基线包含单声道生成的 MMAudio、视听空间化的 SEE-2-SOUND 与 ViSAGe、全景视频空间化的 OmniAudio。为公平，论文给每个基线喂由 SonoWorld 重建的 3 维场景渲染的视场视频或全景视频，保持其结构不变，其中 MMAudio 还用真值位置做声像摆位，属于对基线有利的设置。

### 主结果在多大提升下成立，代价与反例是什么？

比较问题是：在相同重建场景输入下，所提方法是否同时在空间与语义上优于实际可运行的空间音频基线。公平条件是基线共享重建场景的渲染输入且结构不变，指标方向为方向误差越低越好，相关系数、曲线下面积与 CLAP 相似及精度越高越好。下表整理原文连续句子中直接报告的相对提升与不确定度，保留原文写法与精度，不另行计算差值或四舍五入。

| 条件 | 指标 | 基线范围 | 本方法报告 | 比较对象 |
| --- | --- | --- | --- | --- |
| 相同重建场景输入 | 方向到达误差 | 空间音频基线 | 降低 47% | 全部空间音频基线 |
| 相同重建场景输入 | 球面能量相关 | 空间音频基线 | 提升大于 239% | 全部空间音频基线 |
| 相同重建场景输入 | 能量图曲线下面积 | 空间音频基线 | 提升 34% | 全部空间音频基线 |
| 相同重建场景输入 | 定向 CLAP 相似 | 单声道最强基线 | 提升大于 39% | MMAudio |
| 相同重建场景输入 | 定向 CLAP 相似 | 空间音频基线 | 提升大于 117% | 空间音频基线 |

上表显示报告的提升幅度大且覆盖两轴，但总体趋势不等于每场景每指标都成立。原文进一步给出均值与 95% 置信区间为角误差 0.728 正负 0.100，相关系数 0.658 正负 0.063，定向音频文本相似 0.457 正负 0.014，表明在 68 段上的平均增益稳定。代价是最佳性能依赖闭源重建与闭源视觉语言模型，开放源版本虽仍优于基线但绝对值更低；用户研究只比较了本方法与 MMAudio 和 OmniAudio，未覆盖全部基线的人评。

下图按场景展示能量图的定性对照，阅读时逐列对比参考行与本方法行的亮区，不要把单列推广到全部。

> **看图路径：** 1. 先按列确认六个场景名再按行确认渲染参考本方法与基线四行；2. 再逐列对比参考行亮区与本方法行亮区的位置与范围是否对应；3. 注意最右侧运动声源列中亮区拖尾与其他列集中亮斑的差异

[![原论文 Figure 6：Ambisonics energy map visualization on real-world scenes.](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/dc8cd736071b/figure-6.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/dc8cd736071b/figure-6.png)

*论文图 6。原论文 Figure 6：“Ambisonics energy map visualization on real-world scenes.”。*

上图共六列对应喷泉厨房水池桥溪流警笛，行依次为新视角渲染、真值 1 次声压级能量图、本方法预测与 OmniAudio 预测，亮区表示能量高。本方法行的高能量瓣在位置与范围上更接近真值，而基线行多为过平滑或错位。最右侧警笛列是典型失败条件：声源为移动警车，而输入是静态图像，方法无运动线索，亮区出现拖尾状偏差。该反例支持的限制是静态单图假设不覆盖动态源，评估时应将运动场景单独标注。

### 开放与闭源配置差多少，用户研究支持什么？

论文用两种可运行策略做对照：完全可复现的开放源版本用 HunyuanWorld-1.0 做全景到 3 维重建、用 LLaVA-Next-34B 提议声源，闭源版本改用 Marble 与 GPT-5 以追求最佳性能。下表整理原文对两种策略与基线适配方式的说明，不编造具体分数，重点保留信息条件差异。

| 条件 | 指标 | 基线 | 本方法 | 比较对象 |
| --- | --- | --- | --- | --- |
| 开放可复现 | 重建加提议模型 | 共享重建输入的基线 | HunyuanWorld-1.0 加 LLaVA-Next-34B | 闭源最佳配置 |
| 闭源最佳 | 重建加提议模型 | 共享重建输入的基线 | Marble 加 GPT-5 | 开放可复现配置 |
| 相同场景渲染 | 输入适配 | 结构不变的原基线 | 视场或全景视频输入 | SEE-2-SOUND 等 |
| 单声道基线增强 | 空间化方式 | 原单声道输出 | 真值位置摆位 | MMAudio |
| 人评子集 | 偏好率 | MMAudio 与 OmniAudio | 本方法最高 | 50 人 12 场景 |

上表后需解释主要收益与具体代价。收益是即使开放源版本仍在全部指标上优于基线，支持方法不完全依赖闭源模型；代价是视觉渲染质量与声源提议质量仍受外部模型上限约束，更换模型会改变绝对分数。用户研究在 12 场景中每个场景渲染固定轨迹视频并配不同方法的空间音频，视觉相同只有音频不同，被试做 3 组两两比较，报告按场景平均的偏好率与跨被试四分位距，本方法在真实与合成场景均获最高偏好，与定量方向一致。但未胜出项也应说明：OmniAudio 与 MMAudio 之间的人评差异未作为主结论，且人评未测量误判率与延迟，不能据此承诺实时性改善。

除核心结果，论文特有的两类细节值得展开。一是实时性只给出音频回调在 Fountain 场景于 Apple M3 Pro 笔记本上小于 1 毫秒，远小于 256 采样缓冲在 48 千赫兹下的 5.3 毫秒延迟，并提供 Three.js 加 WebAudio 的浏览器查看器，说明空间音频合成可在标准笔记本中央处理器上运行。二是逐场景结果显示方法在全部六场景一致优于基线，但运动声源列仍是边界，提示部署时应对动态源做单独检测或切换到视频输入。

### 哪些边界未被评测，什么结论不能下？

直接报告的限制是静态图像输入无法推断源运动，警笛场景因此出现能量拖尾。这是方法假设的边界，不是实现缺陷，复现时不应把单帧在运动场景的误差当成编码器错误。其次，定量表头与算术若出现冲突应明确标注，本文证据中方向误差的聚合对象与多源处理在正文只给出方向，补充定义指向附录，复现时需核对附录的聚合口径后再比较跨论文数字。百分点与相对百分比不同，原文的 47% 等为相对改善，不能换算为角度绝对差。

未评测的边界包括：听音者远离重建几何有效范围时的衰减外推、遮挡与混响的房间声学建模精度、以及多人多动态源下的分离误判率。论文的扩展实验把可微渲染器用于单次房间声学学习与视听空间源分离，显示在单麦克风位姿拟合目标 1 次声压级时优于神经声场基线，但那是数据高效替代的初步证据，不能推广为任意房间与任意源数的通用声学求解器。相关性也不是因果：能量图相关高只支持空间格局相似，不证明听感偏好必然来自定位精度，还可能来自音色与响度均衡的贡献。

### 复现先做什么，需要哪些版本与验证？

何时值得尝试：如果已有单图 3 维重建链路并需要为其配上随位姿变化的空间音频，且场景以静态或缓慢声源为主，该管线可直接作为免训练基线。若场景含快速移动声源或强混响房间，应先补运动估计或房间脉冲响应模块，否则方向真值会系统性偏离。

复现先做三件事。第一，固定视觉分支版本：核对 WorldGen 全景外扩与 HunyuanWorld-1.0 或 Marble 重建的提交版本，记录 GeoCalib 标定的仰角与视场，并保存补全全景与渲染深度，以便反投影可重放。第二，固定语义分支版本：记录视觉语言模型与 X-Decoder 加 SAM2 的切块重叠率与投票阈值，保存每源提示词、源类型与能量分贝值，因为均衡参数直接决定响度对比。第三，固定音频分支版本：记录 MMAudio 采样种子与采样次数、球谐阶数与距离衰减系数，以及头相关传输函数解码的卷积实现，在 Fountain 等标定场景先复刻小于 1 毫秒量级的音频回调测量条件，包括采样率与缓冲大小。

还需补的验证是：多次端到端采样的方差、不同重建模型下的方向误差分解、以及运动场景的单独评测。代码开源、权重下载与系统可运行是三件不同的事：论文给出项目网页与第三方 WorldGen 仓库当前可用，但不等于全部闭源模型可下载运行，开放源版本才是可部署收益的依据，闭源最佳值应另行标明为上限参考。

### 一句话收束：何时用它，何时不用？

回到中心矛盾：单图 3 维看得见但听不见，而场景级聆听要求同时解决像什么、在哪里、多响与随移动怎么变。SonoWorld 的回答是用全景统一坐标，用语言加分割解决命名与边界，用点簇氛围 3 类编码解决尺度差异，再用可微球谐渲染连接移动与解码。当输入为静态、声源可由视觉推断、听音范围在重建几何内时，该组合在报告的 68 段实录与 50 人偏好上同时改善空间与语义；当声源快速移动、遮挡混响主导或需精确房间声学时，静态单图假设不再成立，应视为待验证，需要补运动、混响与多源误判率的测量后再做选型。

## 📐 原文公式与排版

以下展示论文原页中的数学表达区域，保留原始上下标、分式和符号排版。区域序号仅用于本文导航，不是论文公式编号。

[![原文数学表达区域 1，PDF 第 3 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/b0df1781dc73/figure-1.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/b0df1781dc73/figure-1.png)

区域 1 · [查看论文原页](https://openaccess.thecvf.com/content/CVPR2026/papers/Jin_SonoWorld_From_One_Image_to_a_3D_Audio-Visual_Scene_CVPR_2026_paper.pdf#page=3)

[![原文数学表达区域 2，PDF 第 3 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/b0df1781dc73/figure-2.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/b0df1781dc73/figure-2.png)

区域 2 · [查看论文原页](https://openaccess.thecvf.com/content/CVPR2026/papers/Jin_SonoWorld_From_One_Image_to_a_3D_Audio-Visual_Scene_CVPR_2026_paper.pdf#page=3)

[![原文数学表达区域 3，PDF 第 4 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/b0df1781dc73/figure-3.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/b0df1781dc73/figure-3.png)

区域 3 · [查看论文原页](https://openaccess.thecvf.com/content/CVPR2026/papers/Jin_SonoWorld_From_One_Image_to_a_3D_Audio-Visual_Scene_CVPR_2026_paper.pdf#page=4)

[![原文数学表达区域 4，PDF 第 6 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/b0df1781dc73/figure-4.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/b0df1781dc73/figure-4.png)

区域 4 · [查看论文原页](https://openaccess.thecvf.com/content/CVPR2026/papers/Jin_SonoWorld_From_One_Image_to_a_3D_Audio-Visual_Scene_CVPR_2026_paper.pdf#page=6)

另有 20 个候选区域因边界不明确或图片数量、尺寸限制未展开；请[查看完整论文](https://openaccess.thecvf.com/content/CVPR2026/papers/Jin_SonoWorld_From_One_Image_to_a_3D_Audio-Visual_Scene_CVPR_2026_paper.pdf)中的原始排版。

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。
- 评分规则：type-aware-v1
- 评分模型：muse-spark-1.3-contributor
- 评分请求协议：openai_responses

---

[← 返回 cvpr-2026 论文汇总](/posts/conference-cvpr-2026/)
