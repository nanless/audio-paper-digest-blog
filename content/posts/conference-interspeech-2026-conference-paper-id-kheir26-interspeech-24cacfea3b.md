---
title: "DeepFense: A Unified, Modular, and Extensible Framework for Robust Audio Deepfake Detection"
date: 2026-09-27
draft: false
description: "论文用统一纯 Python 工具 DeepFense 复现已有系统并做 96 系统交叉评测，报告显示自监督前端主导性能方差而 CodecFake 训练泛化最好，但高平均性能伴随质量性别语言上的公平性代价。"
tags: ["基准设计", "公平性", "鲁棒性", "语音", "音频深度伪造检测"]
categories: ["interspeech-2026 论文"]
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_paper_id: "conference:interspeech:2026:conference-paper-id:kheir26_interspeech"
paper_digest_source_kind: conference
paper_digest_conference_id: "interspeech-2026"
paper_digest_conference_record_url: "https://www.isca-archive.org/interspeech_2026/kheir26_interspeech.html"
paper_digest_conference_pdf_url: "https://www.isca-archive.org/interspeech_2026/kheir26_interspeech.pdf"
paper_digest_api_reader_contract: "beginner-researcher-v3"
paper_digest_api_reader_article_sha256: "74e057918e3bb40bb27764d770ff89fa85dce3d7ed219dc0ceaf1d3cbd80a874"
paper_digest_api_reader_plan_sha256: "a1f59fbb3f067b7f2c1a5bb4797f1db790f00bc2586bd31d03dbf3e91c177c98"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings-v4"
paper_digest_api_reader_source_bindings_sha256: "339ad011549a2de47be88816e05eb651c662696d9b6bc34b928ab542173419cf"
paper_digest_api_reader_source_table_count: 2
paper_digest_api_reader_source_formula_count: 0
paper_digest_api_reader_structured_artifacts_sha256: "263acdaaa1d8709bc0dfefbe24f50295160c97d27a4071ed8b385ff65c34b6d7"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity-v1"
paper_digest_api_reader_author_identity_sha256: "fe3166ac7ac790898a34c955a9fdfc1cc9957b72a57efda57c7b3a5928df8a40"
paper_digest_api_reader_author_count: 9
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity-v1"
paper_digest_api_reader_resource_identity_sha256: "cfa4c9228b917b5b56c99a584a7eee4294d2354cbb4096be1300965eedf607ae"
paper_digest_api_reader_resource_count: 1
paper_digest_api_reader_decision_projection: "api-reader-decision-projection-v2"
paper_digest_scoring_contract: "api-scoring-audit-v2"
paper_digest_taxonomy_contract: "paper-taxonomy-flat-tags-compat-v1"
paper_digest_taxonomy_selection_contract: "paper-taxonomy-selection-v1"
paper_digest_taxonomy_registry_version: "paper-taxonomy-v1"
paper_digest_taxonomy_registry_sha256: "15c82a567ce5a55dc1175684ed08b64c158558639d9c8fb822c9587ec32a8778"
paper_digest_taxonomy_concepts: [{"facet":"method","id":"method.benchmark-design","label":"基准设计"},{"facet":"research_focus","id":"research_focus.fairness","label":"公平性"},{"facet":"research_focus","id":"research_focus.robustness","label":"鲁棒性"},{"facet":"signal","id":"signal.speech","label":"语音"},{"facet":"task","id":"task.audio-deepfake","label":"音频深度伪造检测"}]
paper_digest_primary_task: "音频深度伪造检测"
paper_digest_primary_method: "基准设计"
paper_digest_score: 7.2
paper_digest_rank_bucket: "前50%"
paper_digest_document_type: "系统技术报告"
paper_digest_conference_structure: pdf-visual-quote-evidence-v1
---

# 📄 统一工具链之下，谁在决定音频深伪检测的成败：前端、后端还是训练数据

> 英文题目：*DeepFense: A Unified, Modular, and Extensible Framework for Robust Audio Deepfake Detection*

> 会议身份：`conference:interspeech:2026:conference-paper-id:kheir26_interspeech`



> 来源为官方会议 PDF；图片依据原页像素，表格数字依据原文引用。PDF 文字层不视为原始 TeX，未可靠恢复的结构不作推断。


> 会议来源：[官方记录](https://www.isca-archive.org/interspeech_2026/kheir26_interspeech.html) · [官方 PDF](https://www.isca-archive.org/interspeech_2026/kheir26_interspeech.pdf)

标签：#基准设计 #公平性 #鲁棒性 #语音 #音频深度伪造检测

评分：**7.2/10** | 创新 1.3/2 | 技术严谨 1.0/1.5 | 实验充分 1.3/1.5 | 清晰度 0.8/1 | 影响力 1.2/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 1.3/1.5

排名：前50% | 文档类型：系统技术报告

## 👥 作者与机构

- Yassine El Kheir：机构信息未能从会议 PDF 纯文本可靠映射
- Arnab Das：机构信息未能从会议 PDF 纯文本可靠映射
- Yixuan Xiao：机构信息未能从会议 PDF 纯文本可靠映射
- Xin Wang：机构信息未能从会议 PDF 纯文本可靠映射
- Feidi Kallel：机构信息未能从会议 PDF 纯文本可靠映射
- Enes Erdem Erdogan：机构信息未能从会议 PDF 纯文本可靠映射
- Ngoc Thang Vu：机构信息未能从会议 PDF 纯文本可靠映射
- Tim Polzehl：机构信息未能从会议 PDF 纯文本可靠映射
- Sebastian Möller：机构信息未能从会议 PDF 纯文本可靠映射

## 📌 核心摘要

语音伪造检测输入为 16 kHz 波形，输出为真伪二分类分数，难点在于合成方法、信道、语言与音质跨域泛化差且评测协议碎片化。DeepFense 以 YAML 配置编排统一实验，先由数据工厂完成元数据加载、重采样裁剪、增强与组批，再由检测引擎依次经过自监督前端、分类后端与损失计算得到训练信号，最后由统一训练器完成优化、验证、存档与日志追踪。与分散仓库拼装相比，该设计消除了特征归一化、填充分批与优化配置等隐性差异，使前端、后端与训练数据的贡献可比。在 4 个前端、4 个后端、6 个训练集、13 个测试集的大规模比较中，Wav2Vec 2.0 宏平均等错误率（Equal Error Rate, EER）为 25.5%，明显优于次优前端，而 CodecFake 训练的宏平均 EER 为 22.3%，跨域迁移最强，最优单系统为 Wav2Vec2 加 MLP 加 CodecFake 的 17.16%。结论仅适用于所覆盖的组合与固定 4 秒输入加交叉熵加 Adam 流水线，未验证多数据集联合训练、局部篡改定位与溯源等外推场景。原文未披露训练、推理或部署成本。

## 🔗 开源与复现资源

- 模型相关资源：<https://huggingface.co/DeepFense> — 暂时无法访问
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 输入是什么，输出是什么，为什么跨域这么难

这篇论文研究的是语音深伪检测，也就是判断一段音频是真人说话还是合成、转换或重放伪造。输入是一段波形，论文大规模比较中统一裁剪或填充到 4 秒、16 千赫采样，输出是真假二分类分数，评测常用等错误率，等错误率越低越好。初学者容易以为只要在某个著名数据集上把错误率做低就行，但论文反复强调的矛盾是域偏移：训练时见过的合成器、信道、语言与部署时遇到的往往不同，同一模型换一个评测集错误率可能从百分之几跳到 40% 以上。

更麻烦的是实现碎片化。前端可能是 Wav2Vec2、WavLM、HuBERT 或 EAT，后端可能是 AASIST、MLP、Nes2Net 或 TCM，增强可能是 RawBoost、房间脉冲响应或编解码模拟，它们散落在不同代码库，填充分批、学习率、归一化等隐藏配置也不一致。于是两个论文报告的数字差异可能来自算法本身，也可能来自胶水代码。DeepFense 的动机就是把这些模块收进同一个纯 Python 与 PyTorch 工具链，用一份人类可读配置文件固定全流程，再去回答到底是前端、后端还是训练数据在主导跨域表现。

本次解读的输入是论文正文证据与官方原图像素，目标是让研究生能复述方法与实验条件。需要保留的关键信息是模块划分、训练配置、评测集合划分、指标方向与主要数字的适用条件。输出按学习依赖展开，先讲任务与相关路线，再讲框架全景与组件分工，然后讲训练与评测如何执行，最后讲结果、反例、局限与复现步骤。凡是教学举例会明确标为例子，不把例子当作论文报告的事实。

### 已有路线在解决什么，各自留下什么缺口

按同输入、同目标、同运行阶段对照，已有工作可分成 3 类。第一类是检测模型结构，例如端到端 RawNet2、图注意力 AASIST、轻量嵌套 Nes2Net、时序通道建模 TCM 与双向 Mamba 谱时交叉注意力 BiCrossMamba-ST，它们都在回答给定表征后如何更好地建模伪影。第二类是训练技巧，例如 RawBoost 数据增强、单类 OC-Softmax、角度间隔 AM-Softmax 与 A-Softmax，它们回答如何让分界面对未见攻击更紧致。第 3 类是数据集与评测，例如 ASVspoof 2019 与 2021 系列、ADD 2022 与 2023 中文挑战、野外 In-the-Wild、多语言 MLAAD、编解码 CodecFake、西班牙语 HABLA、部分伪造 PartialSpoof 与重放 ReplayDF，它们把任务从实验室受控语音推向电话、网络、低质与多语言场景。

工具层面也有对照。WeDefense 同样想统一流程，但论文指出它混用 Python 与大量 Bash 脚本，调试与扩展成本高且配方与模型有限。SpeechBrain 是通用纯 Python 语音工具，但通用抽象会增加学习与定制成本。AntiDeepfake 聚焦后训练模型，挑战基线则聚焦特定数据集配方。Speech-DF-arena 提供排行榜，允许提交系统并在选定评测集上打分，但并非所有条目都开源。

DeepFense 与它们的区别是只做深伪检测、坚持纯 Python 与 PyTorch、同时提供跨数据集配方与统一训练评测管线。理解这张对照表后，就不会把通用语音识别工具的结论直接搬到深伪检测，也不会把某一排行榜高分当成同条件可比的胜负。

### 论文把什么定为可比性问题，如何界定成功

论文把核心问题定义为缺乏标准化实现与评测协议，导致可复现性、基准比较与跨研究对照受限。成功不是再提出一个新分类器，而是有 3 条可检验标准。第一是保真复现：在统一管线下重做已发表系统，不应因重写代码而系统性变差。第二是大规模可比：在相同预处理、优化器与评测协议下比较前端、后端与训练数据的贡献，把差异归因到建模选择而非实验产物。第三是可扩展公平评测：同一套流水线能直接跑环境声、音乐与歌声深伪，并能量化质量、性别与语言分组差异。

举例来说，所谓控制条件，论文在复现部分强调确保相同预处理、优化器配置与评测协议，在大规模比较中明确所有配置共享相同预处理、优化器设置与评测协议。这句话是后文所有比较能否成立的前提。如果读者自己复现时改了填充长度或验证集早停指标，就不再是同条件比较。论文没有承诺降低延迟或推理成本，也没有测量误判率之外的部署代价，因此不能把错误率降低直接读成部署就绪。

### DeepFense 如何用一份配置走完数据到评测

DeepFense 把 1 次完整实验拆成 4 个松耦合部分：配置编排器、数据工坊、检测引擎与训练评测加日志。研究者只写一个 YAML 文件，声明实验名、输出目录、随机种子、训练验证测试数据、模型前端后端损失与训练参数，框架按注册表实例化对应组件。这种设计让超参数搜索只改配置不改代码，也让发表结果可以靠配置文件精确重放。

**配置编排器 × 注册表插件：** 配置编排器负责用单个 YAML 文件声明数据集路径、预处理、模型结构、训练与评测协议，注册表插件负责把新前端、后端、损失和增强以装饰器方式接入框架，二者搭配的理由是声明与实现解耦，做超参数搜索只改配置不改核心代码，组合意义是他人拿到配置文件就能重建同一实验，从而把算法改进与实现细节分开比较。

下面这张架构图值得按输入到输出走一遍。左侧是 YAML 示例，中间是执行主干，右侧是可选模块清单，底部是训练器与日志跟踪带。先看主路径，再看分支在哪里汇合，有助于理解后文每个消融到底固定了什么。

> **看图路径：** 1. 先从左侧蓝色 YAML 示例看到实验名、输出目录、随机种子与数据模型训练三段声明；2. 再沿中间虚线框看配置编排器如何分出数据工坊、检测引擎与评测三列；3. 对照右侧紫色模块面板核对前端、后端、损失、增强与指标的可选项；4. 最后看底部训练器与日志条带如何把数据、模型与评测连成闭环

[![原论文 Figure 1：System architecture of the DeepFense framework, illustrating the configuration-driven data…](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/interspeech-2026/64621fbe862a/figure-1.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/interspeech-2026/64621fbe862a/figure-1.png)

*论文图 1。原论文 Figure 1：“System architecture of the DeepFense framework, illustrating the configuration-driven data pipeline, modular model engine (front-end, back-end, loss), unified training loop, and…”。*

从像素可见，左侧蓝色面板给出 YAML 示例，包含实验名 W2V_AASIST、输出目录、随机种子 1234，以及训练数据增强、模型前端后端损失与训练配置占位。中间虚线大框顶部是配置编排器，向下分三列：黄色数据工坊依次是构造、变换、增强并落到橙色数据集堆叠图标，粉色检测引擎依次是前端、后端、损失并落到模型图标，绿色评测依次是度量与解释并落到评测表图标，三列最终都汇入底部棕色训练器，再被红色日志与实验跟踪条带托底。

右侧紫色模块面板分五格：前端列出 Wav2Vec2.0、WavLM、HuBERT、Wav2Vec-BERT、Whisper、BEATs、EAT、MERT 等，后端列出 Pool、MLP、AASIST、MAMBA、BiCrossMamba、ECAPA-TDNN、TCM、Nes2Net 等，损失列出 CrossEntropy、OC-Softmax、AM-Softmax、A-Softmax、SphereLoss 等，增强列出 Rawboost、RIR、Codec、DropChunk、DropFreq、Morph 等，底部度量列出 EER、minDCF、actCDF、CLLR 与置信区间等。这张图说明框架的扩展点全部在右侧面板，执行顺序全部在中间三列，复现时先对齐左侧配置，再核对中间流水，最后才换右侧模块。

### 一个样本如何走完输入、表示、组件、目标与输出

沿一个 4 秒 16 千赫样本走全程最清楚。样本先进入数据工坊的构造阶段，框架从 Parquet 元数据读到音频路径、标签与可选元信息，这种列式格式便于处理大规模数据。然后是变换阶段，做填充或裁剪、重采样与可选归一化，保证批量张量形状为批量乘采样点数。接着是增强阶段，训练时按可配置概率做随机变换，支持顺序增强与并行二选一，例如 RawBoost、房间脉冲响应与编解码模拟。最后是数据集阶段，按配置的批量大小、打乱与并行加载生成数据加载器。

检测引擎把模型写成前端到后端到损失的组合。前端把波形变成特征，可以冻结、微调，也可以用可学习加权和或注意力聚合多层表示，论文大规模比较重点用 EAT、HuBERT、Wav2Vec2 与 WavLM，另在非语音任务引入 MERT 等通用音频与音乐预训练模型。后端把特征变成真假嵌入或分数，支持 AASIST、ECAPA-TDNN、RawNet2、Nes2Net、TCM、多层感知机、池化与 BiCrossMamba-ST 等 7 类。损失支持交叉熵、OC-Softmax、AM-Softmax 与 A-Softmax 4 类。训练器循环做 6 步：取批量、前向、反向优化、记录指标、周期验证、保存检查点，并把检查点、配置、日志、评测结果与可视化写进结构化输出目录，同时支持权重与偏差跟踪与 TensorBoard。

**前端特征提取器 × 后端分类器：** 前端特征提取器负责把 16 千赫波形变成能保留合成伪影的表征，例如 Wav2Vec2 或 EAT，后端分类器负责在该表征上学真假分界面，例如 AASIST 或 MLP，二者搭配的理由是强自监督表征已经把可分性做完，论文用同一流水线固定其他条件后显示换后端只带来约 0.8 个百分点的变化，而换前端带来约 8 个百分点的变化，组合意义是选型优先级应先定前端领域对齐再选轻量后端。

扩展方式是注册表插件。新增组件只需继承基类并加装饰器，例如用装饰器注册自定义后端类，注册后无需改核心代码即可在配置中引用。论文给出的最小示例就是定义一个继承 BaseBackend 的 CustomBackend 并实现前向返回嵌入。这种机制是理解后文大规模比较可信度的关键：所有系统走同一套数据与训练代码，换的只是配置里声明的前端、后端、训练集与种子。

**数据工坊 × 增强策略：** 数据工坊负责构造、变换、增强和组批 4 步数据流水，增强策略负责在训练时以可配置概率做随机扰动，例如 RawBoost、房间脉冲响应和编解码模拟，二者搭配的理由是前者保证所有系统吃到同样长度与采样率的输入，后者扩大训练分布以逼近真实信道，组合意义是跨数据集比较时差异更可能来自模型与数据本身而非填充分批等隐藏配置。

需要提醒的缺项是论文没有给出每层梯度是否截断的逐式说明，也没有报告冻结与微调在每个实验中的逐层细节，只在功能层面说前端可用冻结、微调或跨层聚合。复现时不应从模型名字推定实现，应以配置文件中前端更新策略为准，缺失处应记为未报告而不是默认冻结。

### 训练如何配置，早停与重复如何执行

大规模比较的训练配置是全文复现最重要的部分。论文报告用 4 前端乘 4 后端乘 6 训练集共 96 个系统，每个系统用随机种子 2、42、240 训练 3 次并报告 3 次平均等错误率。前端是 EAT、HuBERT、Wav2Vec2 与 WavLM，后端是 AASIST、MLP、Nes2Net 与 TCM，训练集是 ASV19、ASV5、ADD23 中文、CodecFake、HABLA 西班牙语与 PartialSpoof。所有系统用交叉熵损失、Adam 优化器、学习率 10 的负 6 次方，输入统一填充或裁剪到 4 秒 16 千赫，按验证损失早停，重复 3 次取平均。

这套配置的含义是把学习率、输入长度、损失与早停全部固定，让前端、后端与训练数据的差异暴露出来。初学者常问为什么学习率这么小，白话解释是自监督前端已经在大规模语音上预训练好，检测训练更像小步微调而不是从零训练，大步容易破坏已有表征。论文没有报告批量大小、总轮数上限、验证集划分细节与训练硬件耗时，因此复现时只能保证论文明确写出的部分一致，其余应记录为自己的选择并在报告时说明。

复现验证部分用的是另一套对照：把 Wav2Vec2 系统放在 ASV19 上训练，再到野外、ASV5 与 CodecFake 等域外评测集上测试，对比原始报告或复现基线；把 EAT 模型放在环境声训练集上训练，再到 CodecFake 非语音评测上测试。这种训练域与测试域刻意错开的设计，正是为了检验统一管线是否引入退化，以及框架能否原样搬到非语音任务。

### 评测覆盖哪些语言与场景，指标如何聚合

评测覆盖 13 个测试集，按论文分为 4 组：英语组含 ASV19、ASVspoof21 逻辑接入、ASVspoof21 深伪、野外、CodecFake 与重放深伪，多语言组含 MLAAD 与 ODSS，中文组含 ADD22 第一二轨与 ADD23 第一二轨，西班牙语组含 HABLA。论文还说明部分评测集不在 Speech-DF-arena 覆盖范围内，因此这套评测比只看排行榜更宽。非语音部分另设环境声、音乐与歌声评测，含 EnvSDD 与 CompSpoof 环境声、FakeMusicCaps 音乐、CtrSVDD 歌声。

指标以等错误率为主，越低越好。聚合方式有两种：一是对每个系统先在 3 个种子上平均，再按前端、后端或训练集分组做宏平均；二是按评测集列出平均错误率，再看跨评测集的宏平均与标准差。公平性部分另用 GARBE 指标，0 表示完全公平，分别按语音质量、性别与语言分组计算。质量分组用估计 PESQ 与 NISQA-MOS 自动打分后分箱，性别分组用数据集自带说话人元数据，语言分组用 MLAAD 的 23 种语言。理解聚合对象很重要：同样是 20% 几，可能是某前端在某评测集上的平均，也可能是某训练集在 13 个评测集上的宏平均，不能直接比较大小。

论文称随工具发布 152 份 YAML 配方与 456 个训练检查点，即每个组合存 3 个种子，覆盖语音与非语音任务的前端后端训练集组合，并提供数据集 Parquet 与下载脚本以支持一键复现。但资源状态是本次未能确认可达，写作时只能说论文声明在 HuggingFace 上公开，不能写当前可用或已验证可下载。复现前应先确认链接可达、校验文件完整，再谈运行。

### 统一管线是否带来退化，复现数字怎么读

第一个要回答的问题是统一重写有没有把性能做坏。比较的问题是：在相同 Wav2Vec2 前端与相同训练评测划分下，DeepFense 重跑的系统与原始报告相比，等错误率是持平还是更好，指标方向是越低越好。公平条件是论文声明的相同预处理、优化器配置与评测协议。下表整理论文文字中直接报告的两组对照，条件、指标、基线与重跑结果都保留原文写法，不做四舍五入，也不把不同评测集的数字混在一起。

| 条件与评测 | 指标 | 原始报告 | DeepFense 重跑 | 比较对象 |
| --- | --- | --- | --- | --- |
| ASV19 训练，野外加 ASV5 加 CodecFake 域外平均 | 平均等错误率 | 22.83% | 20.16% | AASIST 后端 |
| ASV19 训练，野外加 ASV5 加 CodecFake 域外平均 | 平均等错误率 | 20.88% | 19.15% | MLP 后端 |
| ASV5 训练，ASV5 测试 | 等错误率 | 6.13% | 5.53% | Nes2Net 后端 |

上表显示，重跑没有系统性退化，AASIST 与 MLP 在域外平均上各降低约 2 个百分点，ASV5 上的 AASIST 与 Nes2Net 也有小幅降低，只有一个 BiCrossMamba-ST 从 6.01% 升到 6.34%，属于未胜出的反例，应如实保留。论文还报告 EAT 在环境声训练后到 CodecFake 非语音评测上，BiCrossMamba-ST 从 0.75% 降到 0.44%，其余后端基本持平。这支持统一管线可用于跨语音与非语音任务的判断，但限制是这只是复现正确性检查，不能证明所有前端后端组合都同样无损。

**等错误率 × 公平性指标 GARBE：** 等错误率负责报告总体检测错误随阈值平衡后的水平，越低越好，公平性指标 GARBE 负责汇总不同质量、性别或语言分组之间错误率的不均匀程度，0 表示完全公平，二者搭配的理由是只看平均会掩盖特定人群或低质量语音上的失效，组合意义是论文同时报告谁平均最好与谁在各组之间最稳定，从而揭示 Wav2Vec2 平均优但不公平、EAT 平均稍差但更公平的权衡。

下面这张热力图把前端差异可视化。导读时先按行看同一评测下谁更绿更低，再按列看哪些评测整体偏红更难，不要把颜色深浅直接当成绝对好坏，还要核对右侧色条是原始等错误率。

> **看图路径：** 1. 先按行比较四个前端在同一评测列上的颜色深浅与数值大小；2. 再按列看英语、中文、多语言与重放等不同评测集的整体难度差异；3. 重点观察 Wav2Vec2 行在野外与多语言列上是否持续偏绿偏低

[![原论文 Figure 3：Mean EER (%) per front-end and evaluation benchmark, averaged over all back-ends and training sets.](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/interspeech-2026/64621fbe862a/figure-3.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/interspeech-2026/64621fbe862a/figure-3.png)

*论文图 3。原论文 Figure 3：“Mean EER (%) per front-end and evaluation benchmark, averaged over all back-ends and training sets.”。*

从像素可见，行是 Wav2Vec2.0、WavLM、HuBERT 与 EAT，列覆盖多个评测基准，右侧色条标注等错误率，绿色偏低、红色偏高。Wav2Vec2 行多数格子偏绿，例如第一列 14.0%、第三列 15.6%、第六列 13.5%、第八列 18.6%，而 HuBERT 行在多列偏红，例如第五列 39.6%、第七列 44.7%、最后一列 47.5%。EAT 行呈现反转信号：在多数语音列不如 Wav2Vec2，但在个别环境与编解码相关列更绿，例如有一列 25.8% 明显低于同列其他前端的 32.9% 到 38.2%。这张图支持前端选择是最大影响因素的判断，同时也提示优势与领域有关，不能把语音上的排序直接推广到非语音。

语言公平性的全貌需要另一张图。导读时先看左右面板横轴量程，再看每个语言的灰色区间长度，最后按颜色与形状区分前端与后端。

> **看图路径：** 1. 先对比左右两大面板横轴量程差异，确认 CodecFake 训练整体误差更大更分散；2. 再按语言行看灰色最小最大区间长度，找出跨系统分歧最大的语言；3. 按颜色区分前端，按形状区分后端，观察同一语言内谁偏左谁偏右

[![原论文 Figure 7：EER (%) per language for all system configurations trained on ASVspoof 2019 (left) and CodecFake…](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/interspeech-2026/64621fbe862a/figure-7.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/interspeech-2026/64621fbe862a/figure-7.png)

*论文图 7。原论文 Figure 7：“EER (%) per language for all system configurations trained on ASVspoof 2019 (left) and CodecFake (right).”。*

从像素可见，左面板是 ASV19 训练，横轴约 0 到 16%，右面板是 CodecFake 训练，横轴约 0 到 45%，说明换训练集后跨语言误差整体放大。左侧保加利亚、马耳他、爱沙尼亚等行灰色区间短且靠左，德语、希腊语、英语等行靠右；右侧保加利亚、马耳他、爱沙尼亚仍相对靠左，德语、希腊语、英语等行大幅右移且区间拉长。颜色上左面板绿色 Wav2Vec2 点在部分语言明显偏右，例如斯瓦希里语出现远离主群的点，橙色 EAT 点在多行更靠左且集中。

右面板橙色 EAT 点在爱尔兰语等行出现极右点，说明没有哪个前端在 CodecFake 训练下对所有语言都窄而稳定。这张图支持训练集语料多样性与前端共同决定跨语言公平的判断，也给出未评测边界：这里只覆盖 MLAAD 的 23 种语言，不能推广到所有语系。

### 训练集为什么有的泛化有的失效，非语音又说明什么

第 3 个要回答的问题是训练集的迁移规律。论文报告 CodecFake 训练宏平均 22.3% 且方差最小，在域内 CodecFake 评测上远好于 ASV19 训练，在域外野外与 ODSS 上也是各训练集最好。解释是编解码伪影提供了跨生成链路的通用线索。HABLA 训练宏平均 25.2% 排第二，尽管全是西班牙语，却在英语与多语言评测上泛化不错，支持伪影与语言无关的判断。ADD23 训练宏平均 50.8% 接近随机猜测，且在其他中文评测上也差，论文明确说这不是语言不匹配而是合成方法不匹配，这是一个强警示：不能假设同语言训练就更好。

还要强调没有单一训练集在 13 个评测集上全胜。ASV19 训练在域内 ASV19 上可到 1.8% 并在 MLAAD 与 ADD23 第二轨上有竞争力，但在 CodecFake 与 ADD22 第二轨上最差。PartialSpoof 训练在逻辑接入评测上最好，但在多数其他基准上平庸。图 2 的箱线图也显示测试集与训练集同域时最好，例如 ASV19 系统在 ASV19 测试上最好，CodecFake 系统在 CodecFake 测试上最好，例外仍是 ADD23 训练连对应测试都不好。这些都指向未来应做多条件或混合训练，而不是押注单一数据集。

非语音部分进一步验证领域对齐。论文报告环境与音乐任务上 EAT 平均 16.9% 占优，与语音排序反转，在 FakeMusicCaps 上接近完美约 0.2%，而音乐预训练 MERT 只有 11.9%；歌声 CrtSVDD 上 Wav2Vec2 以 8.8% 夺回第一，EAT 以 15.3% 垫底；后端差异在所有非语音任务上都小于 2 个百分点。这说明框架无需改管线即可扩展，但前端预训练领域是决定因素，不能把语音最优直接搬到环境声与音乐。

### 公平性代价具体有多大，哪些群体更受影响

第 4 个要回答的问题是平均性能之外的不公平。论文在 ASV19、逻辑接入、深伪、ASV5、MLAAD 与 CodecFake 混合测试集上，按质量、性别与语言算 GARBE，越低越公平。质量上 EAT 最公平，例如 ASV19 训练下 PESQ 分组 GARBE 为 0.0135，CodecFake 训练下 NISQA 分组为 0.0482，而 Wav2Vec2 与 WavLM 明显更高，说明 Wav2Vec2 平均好但对录制条件更敏感。论文解释是 ASV19 合成质量较低且均匀，CodecFake 合成高保真，学到高质伪影的模型在低质语音上落差更大，这属于有限解释而非因果证明。

性别上出现方向反转：ASV19 训练的 5 个配置女性错误率更高，差距最大在 HuBERT 达 0.126 个百分点量级；CodecFake 训练的 5 个配置全部反转为男性更高，EAT 差距约负 0.047，而 Wav2Vec2 加 MLP 与 WavLM 接近持平。论文把反转归因于 CodecFake 女性占比约 80.9% 导致的性别不平衡，同样是支持性解释。语言上 ASV19 训练下 EAT 跨语言区间最窄约 2.0%，Wav2Vec2 最宽约 9.7% 到 12.0%，斯瓦希里语只难住 Wav2Vec2；CodecFake 训练下所有前端区间都放大到 25% 到 31%，德语最难，保加利亚、爱沙尼亚与马耳他相对容易，爱尔兰语在不同前端间反差最大。这些结果说明高平均系统可能在特定质量、性别与语言上系统性失效，部署前必须补分组评测，不能只看总体等错误率。

### 换前端、换后端、换训练集各自带来多大变化

第二个要回答的问题是 3 个因素中谁最重要。比较的问题是：固定其他两者后，只换前端、只换后端或只换训练集，13 个评测集上的宏平均等错误率变化多少，越低越好。公平条件是同一套预处理、优化器与评测协议，同一组 96 个系统。下表把论文直接报告的宏平均放在一起，条件与聚合对象保留原文口径，不把自动指标与人工评价混放。

| 分组方式 | 指标与聚合 | 最好一项 | 次好或最差对照 | 差距含义 |
| --- | --- | --- | --- | --- |
| 按前端聚合全部后端与训练集 | 宏平均等错误率 | Wav2Vec2 为 25.5% | EAT 为 31.4%，HuBERT 为 33.6% | 换前端可达约 8 个百分点 |
| 按后端聚合全部前端与训练集 | 宏平均等错误率 | AASIST 为 30.3% | MLP 为 31.1%，差距仅 0.8% | 换后端影响小 |
| 按训练集聚合全部前端后端 | 宏平均等错误率 | CodecFake 为 22.3% | HABLA 为 25.2%，ADD23 为 50.8% | 换训练集可达约 28 个百分点 |
| 最好与最差单系统 | 13 集宏平均等错误率 | Wav2Vec2 加 MLP 加 CodecFake 为 17.16% | HuBERT 加 MLP 加 ADD23 为 60.4% | 组合选择决定上下限 |
| 同一训练集内看前端 | 多个训练集下均值 | Wav2Vec2 在 11 个评测集上最好 | EAT 在 ODSS 与 CodecFake 上反超 | 优势领域相关 |

上表的主要收益是选型优先级：先定前端领域对齐，再选迁移性强的训练集，最后才调后端。具体代价是 Wav2Vec2 在野外评测上为 17.4%，而 EAT 为 34.3%、HuBERT 为 31.8%，差距最大达 16.9 个百分点；但在中文 ADD22 第一轨上所有前端都在 37.6% 到 44.8% 之间，差异被压缩，说明难集上换前端也不能起死回生。未胜出项也要说明：后端中 AASIST 与 Nes2Net 略好但不稳定，MLP 最简单却只差 0.8 个百分点，因此不能说复杂后端必然更好。

**编解码伪影 × 跨域泛化：** 编解码伪影指神经音频编解码器压缩重建留下的宽带失真痕迹，跨域泛化指在未见过的合成方法、信道和语言上仍保持低错误率，二者搭配的理由是 CodecFake 训练让模型见过 EnCodec 与 SoundStream 类高保真合成痕迹，这类痕迹在多种生成链路中普遍存在，组合意义是 CodecFake 训练在 13 个评测集上取得最低宏平均错误率，说明学到更通用的伪影而非某 1 数据集的捷径。

下面这张分组柱状图把训练集与前端的交互拆开。导读时左图固定训练集看前端顺序，右图固定后端看训练集顺序，纵轴都是平均等错误率，越低越好。

> **看图路径：** 1. 左图先固定训练集分组再比较组内四个前端柱子的高低顺序；2. 右图先固定后端分组再比较组内六个训练集柱子的高低顺序；3. 核对 ADD23 红色柱子是否在所有后端下都显著高于其他训练集

[![原论文 Figure 4：Mean EER analysis across training datasets, front-ends, and back-ends.](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/interspeech-2026/64621fbe862a/figure-4.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/interspeech-2026/64621fbe862a/figure-4.png)

*论文图 4。原论文 Figure 4：“Mean EER analysis across training datasets, front-ends, and back-ends. (a) Front-end perspective. (b) Back-end perspective.”。*

从像素可见，左图横轴是 ADD23、ASV19、ASV5、CodecFake、HABLA 与 PartialSpoof 训练集，组内四根柱子按深蓝 Wav2Vec2.0、浅蓝 WavLM、紫色 HuBERT、橙色 EAT 排列，纵轴为平均等错误率。ADD23 组四根柱子全部冲高到 44.3% 到 57.0%，CodecFake 组四根柱子全部偏低且 Wav2Vec2 最低约 18.0%。右图横轴是 AASIST、MLP、Nes2Net 与 TCM 后端，组内六根柱子按 ADD23 红、PartialSpoof 紫、ASV19 深蓝、ASV5 浅蓝、HABLA 橙、CodecFake 绿排列，红色 ADD23 柱子在每组都高达 48.4% 到 53.1%，绿色 CodecFake 柱子在每组都最低约 21.5% 到 22.8%。这张图支持训练集主导泛化、前端次之、后端最小的判断，反例是 ADD23 训练在对应中文评测上也不好，说明同语言不等于同分布，不能用语言匹配代替合成方法匹配。

### 哪些结论不能推广，原文明确留下什么缺口

先说不能推广的三点。第一，总体趋势不等于每组都成立，例如 Wav2Vec2 平均最好，但在环境声与部分多语言条件下会被 EAT 反超。第二，不同指标差值不能混放，例如等错误率差距与 GARBE 差距是两种量纲，不能放在同一列比大小。第三，百分点与相对百分比不同，论文报告的都是百分点变化，复述时应说降低几个百分点而不是降低百分之几。

再说原文明确的局限。论文在结尾承认缺少跨语料多数据集联合训练管线，无法把互补知识合在一起又不继承各自偏差；支持的任务只有检测，没有部分伪造定位与来源追踪；社区生态与生产对接仍在计划中。实验层面未报告训练资源、推理开销、输出帧率与实际延迟，也没有测量误判之外的部署成本，因此不能承诺更快更便宜。公平性分析只覆盖质量、性别与 23 种语言，没有覆盖年龄、口音、设备与信噪比等更多分组，也没有人工听感评价，不能把自动质量分当成人评。

还有一个常见误解需要纠正：看到 CodecFake 训练最好就以为编解码增强万能。论文的证据是 CodecFake 作为训练集整体迁移好，不等于任何模型加一点编解码增强就同样好，也不等于在 ADD23 失效上加编解码就能修复，因为 ADD23 失效更可能来自合成方法分布差异。另一个误解是把开源等同于可运行，论文声明代码与权重公开，但本次资源状态为未能确认可达，复现前必须先验证链接、版本与依赖，否则配置文件再完整也跑不起来。

### 要复现先做什么，需要固定哪些信息条件

复现第一步是拿全信息条件：论文对应的 YAML 配方、数据集 Parquet 与下载脚本、前端权重来源、后端与损失定义、增强参数、优化器与早停指标、随机种子与评测划分。论文声明提供 152 份配方与 456 个检查点，每个组合 3 个种子，并区分代码开源、权重下载与系统可运行三件事，缺一不可。建议先跑最小闭环：用 Wav2Vec2 加 AASIST 在 ASV19 上训练，再到野外与 CodecFake 上做域外测试，核对是否复现从 22.83% 到 20.16% 量级的改进方向，而不是一开始就跑 96 系统全矩阵。

第二步是锁定可比性。固定输入为 4 秒 16 千赫、交叉熵、Adam 学习率 10 的负 6 次方、验证损失早停、3 种子平均，再换前端、后端或训练集。记录自己补齐的批量大小、轮数上限、硬件与依赖版本，并说明哪些是论文未报告的自选。评测时同时报告总体等错误率与分组 GARBE，至少按质量分箱与性别分组检查 1 次，避免只报平均。

第三步是做反证。主动跑论文报告的难例，例如 HuBERT 加 MLP 加 ADD23 是否接近 60.4%，CodecFake 训练在德语上是否仍难，EAT 在环境声上是否反超 Wav2Vec2。如果这些反例复现不出来，应先怀疑数据划分、前端归一化与增强概率是否对齐，而不是怀疑结论本身。需要补的验证包括多数据集混合训练能否兼顾平均与公平、部分伪造定位能否复用同一管线、以及在真实低质与多设备语音上的延迟与成本，所有这些在原文中都属于待验证，不能提前承诺。

### 何时值得尝试这套工具，带走哪三条判断

当你的研究需要跨数据集比较、需要把新前端后端快速接入同一管线、或需要同时报告平均性能与分组公平时，DeepFense 值得尝试。它的价值不在某一个新分类器，而在把隐藏配置固定下来，让差异可归因。当你只做单数据集刷点，或已有稳定的私有管线且不关心跨域公平时，迁移成本可能超过收益。

带走的第一条判断是选型顺序：先按领域选前端，语音与歌声优先考虑 Wav2Vec2 类语音预训练，环境与音乐优先考虑 EAT 类通用音频预训练，再选迁移性强的训练集如 CodecFake 或 HABLA，最后才调后端，因为后端差异在论文证据中始终最小。第二条判断是数据观：同语言不等于同分布，合成方法与质量分布的匹配更重要，ADD23 的失效就是证明，选训练集时要看生成链路与质量覆盖而不是只看语言标签。

第 3 条判断是公平观：平均最优不等于部署最稳，Wav2Vec2 平均好但质量性别语言差异大，EAT 平均稍差但更公平，发布系统前必须同时给出等错误率与 GARBE，并说明训练集的人口与质量构成。把这 3 条与复现清单放在一起，这篇论文就从一堆数字变成可执行的方法。

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。
- 评分规则：type-aware-v1
- 评分模型：muse-spark-1.3-contributor
- 评分请求协议：openai_responses

---

[← 返回 interspeech-2026 论文汇总](/posts/conference-interspeech-2026/)
