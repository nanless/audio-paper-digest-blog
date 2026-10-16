---
title: "Generative World Simulation with DAO and JING"
date: 2026-10-16
draft: false
tags: [音视频生成, 自回归模型, 知识蒸馏, 流式处理]
categories: [论文速递]
description: "论文要解决多人多智能体长时间交互中动作后果易丢失的问题，用 DAO 维护可计算的共享世界状态、用 JING 按观察者条件逐段生成第一人称视听体验，在 WBench 上双向与四步自回归版本取得 Full 平均 81.0 与 79.9 分，代价是需要分阶段训练、记忆检索与蒸馏来控制历史与步数。"
hiddenInHomeList: true
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_arxiv_id: "2610.19726"
paper_digest_workbench_contract: "researcher-workbench-v1"
paper_digest_reader_title: "用共享世界状态加第一人称视听生成做可持续交互：DAO 与 JING 的分工"
paper_digest_original_title: "Generative World Simulation with DAO and JING"
paper_digest_arxiv_version: null
paper_digest_arxiv_versioned_id: null
paper_digest_arxiv_abs_url: "https://arxiv.org/abs/2610.19726"
paper_digest_arxiv_pdf_url: "https://arxiv.org/pdf/2610.19726.pdf"
paper_digest_primary_task: "音视频生成"
paper_digest_tags_contract: "paper-tag-flat-tags-v2"
paper_digest_tags_selection_contract: "paper-tag-selection-v2"
paper_digest_tags_registry_version: "paper-tag-catalog-v2"
paper_digest_tags_registry_sha256: "cdef54423b5dfc00a1d017ef6639446d2ecd1d9c1acf71c8eb4f6219a46b7ba8"
paper_digest_tags_concepts: [{"facet":"task","id":"task.av-generation","label":"音视频生成"},{"facet":"method","id":"method.autoregressive","label":"自回归模型"},{"facet":"method","id":"method.distillation","label":"知识蒸馏"},{"facet":"setting","id":"setting.streaming","label":"流式处理"}]
paper_digest_primary_method: "自回归模型"
paper_digest_score: 6.3
paper_digest_rank_bucket: "前50%"
paper_digest_document_type: "系统技术报告"
paper_digest_one_sentence: "论文要解决多人多智能体长时间交互中动作后果易丢失的问题，用 DAO 维护可计算的共享世界状态、用 JING 按观察者条件逐段生成第一人称视听体验，在 WBench 上双向与四步自回归版本取得 Full 平均 81.0 与 79.9 分，代价是需要分阶段训练、记忆检索与蒸馏来控制历史与步数。"
paper_digest_authors: [{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"XGEN Team"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Guohao Cai"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Haoxuan Che"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Frank Fan"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Chenran Huang"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Junjia Huang"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Jiayi Jiang"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Yanheng Li"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Leon Liu"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Shaoteng Liu"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Xi Liu"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Feng Nie"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Zhefan Rao"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"An Wang"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Hanwen Wang"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Pengxiang Yan"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Jieming Yu"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Qian Zha"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Wentao Zheng"}]
paper_digest_abstract_sha256: "3f910a0e27de7ef64c5409672eef9234daa56aa87af9790754f9d4656d0df353"
paper_digest_sidecars: {"citation.bib":{"sha256":"09d54dcac64017736330c7946bf4477dec3ceef144cbd6f7d1df51535fb1aaee","url":"/audio-paper-digest-blog/data/papers/2026-10-16/2610-19726/citation.bib"},"citation.json":{"sha256":"e88344d17d9bbd720c16ea17a1fafcaa34e529ad921956b6587b50aaaac77291","url":"/audio-paper-digest-blog/data/papers/2026-10-16/2610-19726/citation.json"},"citation.ris":{"sha256":"9b1593be0dbd8b80afe86e3f10e32fcc78eb352a79bbd015dfa25ddfad449c63","url":"/audio-paper-digest-blog/data/papers/2026-10-16/2610-19726/citation.ris"},"rethink-context.json":{"contract":"paper-research-context-v2","sha256":"e50ec941b9232b8afc2d701aee9ce7dd6955e240bdf5398bb3362b6cca872d48","url":"/audio-paper-digest-blog/data/papers/2026-10-16/2610-19726/rethink-context.json"}}
paper_digest_api_reader_contract: "beginner-researcher-v3"
paper_digest_api_reader_article_sha256: "b5b0bae82206eb52342248397642e11de75a09317eee5615d76b6aae58170573"
paper_digest_api_reader_plan_sha256: "b8f4f80e45da0c31b0581592dfa996a9d3398c7d1d046b69b528d00281cf889b"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings-v4"
paper_digest_api_reader_source_bindings_sha256: "cf84264765a858a387446d13f2101322776572b1fa14093bd28d240f3dac1627"
paper_digest_api_reader_source_table_count: 2
paper_digest_api_reader_source_formula_count: 5
paper_digest_api_reader_structured_artifacts_sha256: "083cba21b10dc6693b8d17e5da077607b5027c3501fad522c7179f0efcc6b05f"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity-v1"
paper_digest_api_reader_author_identity_sha256: "bb76f0caa85b4497d1d91c8cc30637516b1b557af955e39e71a15a5d724d9b28"
paper_digest_api_reader_author_count: 19
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity-v1"
paper_digest_api_reader_resource_identity_sha256: "dbae267a215c2033c6ee4324a6ec92f91313d9853ac0ce887a59ab6a9e4118bc"
paper_digest_api_reader_resource_count: 4
paper_digest_api_reader_figure_persistence: "ephemeral-no-persisted-figure-assets-v1"
paper_digest_api_reader_decision_projection: "api-reader-decision-projection-v2"
---

# 📄 用共享世界状态加第一人称视听生成做可持续交互：DAO 与 JING 的分工

> 英文题目：*[Generative World Simulation with DAO and JING](https://arxiv.org/abs/2610.19726)*

<!--paper-tag-hierarchy-v1:start-->

**研究分类**

- **研究任务**：[音视频生成](/audio-paper-digest-blog/papers/?concept=task.av-generation)
- **研究方法**：[生成模型](/audio-paper-digest-blog/papers/?concept=method.generative) → [自回归模型](/audio-paper-digest-blog/papers/?concept=method.autoregressive)；[知识蒸馏](/audio-paper-digest-blog/papers/?concept=method.distillation)
- **研究条件**：[流式处理](/audio-paper-digest-blog/papers/?concept=setting.streaming)

<!--paper-tag-hierarchy-v1:end-->

> 评分：**6.3/10** | 创新 1.2/2 | 技术严谨 1/1.5 | 实验充分 1/1.5 | 清晰度 0.7/1 | 影响力 0.3/1.5 | 开源 1/1.5 | 可复现 0.1/0.5 | 工程/实践 1/1.5


## 👥 作者与机构

- XGEN Team：机构信息未能在本次解析中与作者逐人可靠绑定
- Guohao Cai：机构信息未能在本次解析中与作者逐人可靠绑定
- Haoxuan Che：机构信息未能在本次解析中与作者逐人可靠绑定
- Frank Fan：机构信息未能在本次解析中与作者逐人可靠绑定
- Chenran Huang：机构信息未能在本次解析中与作者逐人可靠绑定
- Junjia Huang：机构信息未能在本次解析中与作者逐人可靠绑定
- Jiayi Jiang：机构信息未能在本次解析中与作者逐人可靠绑定
- Yanheng Li：机构信息未能在本次解析中与作者逐人可靠绑定
- Leon Liu：机构信息未能在本次解析中与作者逐人可靠绑定
- Shaoteng Liu：机构信息未能在本次解析中与作者逐人可靠绑定
- Xi Liu：机构信息未能在本次解析中与作者逐人可靠绑定
- Feng Nie：机构信息未能在本次解析中与作者逐人可靠绑定
- Zhefan Rao：机构信息未能在本次解析中与作者逐人可靠绑定
- An Wang：机构信息未能在本次解析中与作者逐人可靠绑定
- Hanwen Wang：机构信息未能在本次解析中与作者逐人可靠绑定
- Pengxiang Yan：机构信息未能在本次解析中与作者逐人可靠绑定
- Jieming Yu：机构信息未能在本次解析中与作者逐人可靠绑定
- Qian Zha：机构信息未能在本次解析中与作者逐人可靠绑定
- Wentao Zheng：机构信息未能在本次解析中与作者逐人可靠绑定

## 📌 核心摘要

论文要解决的问题是让生成式交互世界在多人、多智能体、长时间离开又返回的情况下仍保留历史后果。输入是观察者的视角控制、文本操作与对话指令以及场景与人物参考，输出是每个观察者下一段同步的视频与音频，难点是生成历史变长时的误差累积、记忆预算限制，以及看不见的场外事件如何影响后续观察。世界定义给出空间布局、初始实体、交互规则与空间约束后，DAO先检验输入的可达性与目标可用性，将通过的意图与排队编辑推进运动、空间成员与活动事件，未变状态直接延续得到新共享状态。DAO再按感知范围、视场与遮挡从新状态选出观察者局部实体状态、事件与环境信息，连同相机轨迹和人物、物体、场景参考一起送入JING。JING把上述条件与历史观察和当前动作转成下一段视频与音频隐变量，经视频与音频解码器同步解码，新片段回填历史与记忆库进入下一次循环。与已有游戏仿真或相机控制世界模型相比，差异是显式共享状态与局部体验生成分开，同一状态可读出不同视角，不同选择可从同一开头分叉并保留后果。在WBench完整集289例上按平均分比较，双向版JING为81.0分，高于Kling 3.0的79.4分而在15个参评条目中列第1，4步自回归版为79.9分列第2，说明蒸馏到少步因果生成后总体性能大体保留。结论适用于有明确世界定义和规则的室内外漫游、拿取点火类操作与多语言对话演示，长时间记忆可靠性、动作鲁棒性与状态和生成内容的一致性仍是未来工作，原文未披露训练、推理或部署成本。

## 🔗 开源与复现资源

- 第三方资源：<https://huggingface.co/XGENlabs/XGEN-JING> — 暂时无法访问

- 第三方资源：<https://xgenlabs.ai/research/generative-world-simulation> — 暂时无法访问

- 第三方资源：<https://meituan-longcat.github.io/WBench/> — 链接可访问（HTTP 200）

- 代码相关资源：<https://github.com/XGEN-Labs/XGEN-JING> — 链接可访问（HTTP 200）

可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 这篇论文要解决的输入输出问题是什么

论文面对的任务是可持续的第一人称交互世界仿真。输入包括用户或智能体的移动、操作、说话，以及选定的场景人物物体参考、历史观察和当前相机动作；目标是在很长的时间里不断输出每个观察者看到和听到的视听内容，同时保留动作带来的后果。必须保留的信息有两个层面，一是共享事实，例如门是开是关、火是否被扑灭、包裹被谁移动过，二是每个观察者的局部视角，例如站在街对面的人和当事人的所见不同。

输出既包括即时的下一段视频与音频，也包括更新后的世界状态，以便后续交互继续受历史影响。举例说明：观察者离开时火还在烧，回来时若有管理员干预，世界应记住扑灭这件事，而不是重新生成还在燃烧的画面。已有视频生成擅长单段质量，交互世界模型擅长动作到画面的即时响应，论文要补的是显式可查询可更新的共享状态，使探索操作交流连成有历史的连续体验。

### 已有路线在相同输入输出下做到哪里

在多模态视频生成路线上，Wan 与 HunyuanVideo 等改进画面质量与运动连贯，SyncFlow 与 Sora 2 与 LTX-2 等做视听同步，Seedance 与 MiniMax-H3 扩展多参考条件，这些工作输入多为文本图像参考，输出为短片段，不负责长时间多观察者的状态记忆。在交互与第一人称世界模型路线上，游戏仿真学习玩家动作到画面的映射，相机控制模型支持视点漫游，文本控制模型支持改变人物行为与事件，Hand2World 研究手势操作，EgoSim 维护可更新 3 维场景，EchoWM 结合导航与环境声语音，输入输出与本文接近，但多把变化隐含在生成历史里，缺少显式共享状态。

在长程生成与记忆路线上，扩散强迫与自强迫研究因果与自生历史训练，FramePack 与 LongLive 压缩或流式保留历史，WorldMem 与 WorldPlay 做检索与几何记忆，OmniForcing 做流式视听，DMD 与 VMM 做少步蒸馏，这些解决预算与误差累积，但不直接规定世界规则。在持久状态路线上，StatePlay 联合预测画面与游戏状态，MASS 分离共享更新与渲染，Marionette 分离结构预测几何渲染外观，可编程世界模型用可执行程序维护实体与规则，DAO 与之思路相近，更强调人物活动与事件演化，并把局部状态转成 JING 所需的文本相机与参考条件。

### 为什么需要把状态计算和体验生成分开

如果只用一个视频模型记住一切，会遇到 3 个困难。第一，多观察者同一时刻应看到同一世界的不同局部，纯生成模型难以保证跨视角的事实一致。第二，观察者离开后世界仍在演化，例如他人移动手推车或扑灭火，回来时的画面应反映他人行为，而不仅是自己离开前的画面延续。第三，长时间交互需要可查询的事实，例如谁目击了哪一段、门的状态是什么，以便判断新动作是否可达可用。

论文因此把问题拆成两部分：DAO 负责事实的表示推进与持久化，JING 负责把事实加意图变成第一人称视听。例子：Rowan 挪车让道是状态变化，Eli 误解为故意干扰是基于局部观察的决策，Nori 的部分目击与 Clara 的介入是信息不对称下的行为，物理痕迹与证人证据澄清意图后和解，这些都需要状态与观察分离才能讲清楚。分开后，状态更新可以按规则有序执行，体验生成可以按观察者条件灵活采样，两者通过局部读出连接。

### DAO 与 JING 如何组成连续闭环

整体流程是一个循环。用户与智能体的动作先进入 DAO 的动作准入，解析目标并检查可达性与可用性，通过的变成行动者意图或排队的状态编辑。DAO 按世界定义与交互规则把当前状态推进到下一状态，不变的部分直接前向传递。然后结合观察者位姿做局部读出，选出感知范围内可见的实体事件与环境信息，再配上相机轨迹与人物物体场景参考，交给 JING 生成下一段第一人称视听。人与智能体看了听了之后再做下一步动作，重新进入状态更新。

同一起点不同选择会走向不同分支，例如同一喷泉开场可以是低头看水中的硬币，也可以是扔硬币，也可以是遇到仙子。快照与事件历史支持跨会话恢复，使世界在观察者离开返回后仍然延续。

**DAO × JING：** DAO 是可计算世界引擎，负责维护人物、物体、空间、关系、时间和事件并按规则推进状态；JING 是第一人称交互体验模型，负责把观察者相关的条件变成下一段看到和听到的视听内容。二者搭配的原因是状态计算和像素声波生成需要不同的表示与更新节奏，组合后动作先改变共享状态，再由状态派生出各观察者的局部体验，形成闭环。

下面这张 JING 结构图展示了从顶部连续体验到底部记忆与解码的完整通路，读图时先把握时间方向再看条件如何汇入当前块。

> **看图路径：** 1. 先沿顶部五段西部小镇画面看观察接近推动交谈握手的时间顺序；2. 再看 a 参考图像与 b 条件编码如何汇入 c 当前块上下文；3. 注意 d 相机调节只作用于视频行的位置；4. 看 e 记忆如何把首块近期上下文与更早历史拼在一起

[![原论文 Figure 4：JING architecture. (a) Reference images provide visual conditions through the video VAE encoder…](https://arxiv.org/html/2610.19726v1/jing-architecture.png)](https://arxiv.org/html/2610.19726v1/jing-architecture.png)

*论文图 4。原论文 Figure 4:：“JING architecture. (a) Reference images provide visual conditions through the video VAE encoder and (b) the Qwen3-VL conditioner, which also encodes text instructions.”。*

图中顶部是西部小镇的观察接近推动交谈握手序列，中部 a 给出场景物体人物 3 类参考，b 把文本与图像一起编码并把相机平移旋转送入控制编码器，c 把参考首块近期与检索记忆拼成当前块的注意上下文，d 只对视频行做相机调制，e 用更早历史与近期上下文构造记忆键值，最终扩散采样器输出干净视听隐变量再由视频音频解码器同步解码，生成块又回到历史档案供后续检索。

### JING 每一步输入什么输出什么

JING 在第 k 步的输入是参考图像集合、文本指令、相机轨迹和之前已生成的视听历史，输出是下一段视频隐变量与音频隐变量，再经各自解码器变成同步的画面与声音，生成块会加入历史。参考图像走两条路，一条经视频编码器得到参考标记保留视觉细节，一条与文本一起经 Qwen3-VL 得到语义条件标记。为了支持流式生成，模型把原时间切分改成以 2 加 5 帧做初始化块、之后每块 5 隐帧，使生成边界与解码器的重叠解码窗口对齐，可以边生成边增量解码。

相机条件先算相邻位姿的相对平移旋转组成 6 维运动表示，再经控制编码器变成与视频标记时空对齐的控制特征，在每个 Transformer 块内只调制视频隐藏状态，文本与音频标记通过共享注意力与视觉交换信息。

\[(\mathbf{Z}_{k}^{v},\mathbf{Z}_{k}^{a})\sim P_{\theta}\!\left(\,\cdot\mid\mathcal{R},p_{k},\mathbf{C}_{k},\mathcal{H}_{\lt k}\right),\]

该式说明给定参考文本相机与历史条件下采样下一视频音频隐块，v 与 a 分别表示视频与音频，历史为空则对应刚开始生成。

\[\widetilde{\mathbf{h}}_{k,v}^{\,\ell}=\left(1+\gamma_{\ell}(\mathbf{c}_{k})\right)\odot\mathbf{h}_{k,v}^{\,\ell}+\beta_{\ell}(\mathbf{c}_{k}),\]

该式是相机特征的逐特征线性调制，伽马预测缩放、贝塔预测平移，只作用于注意力残差更新后、前馈之前的视频标记。

\[\mathbf{S}_{k}^{\tau}=\left[\underbrace{\mathbf{R}_{z};\,\mathbf{H}_{0};\,\mathbf{H}_{k}^{\mathrm{recent}};\,\mathbf{M}_{k}}_{\text{reference and historical context}};\,\underbrace{\mathbf{T}_{k};\,\mathbf{Z}_{k}^{a,\tau};\,\mathbf{Z}_{k}^{v,\tau}}_{\text{current chunk}}\right],\]

该式是当前块的逻辑上下文组成，依次是参考标记、固定首块、近期完整上下文、检索记忆、语义标记、带噪音频与视频标记，块内联合注意力、块间因果。

**参考图像 × 文本指令 × 相机轨迹：** 参考图像给定人物、物体、场景的外观锚点，文本指令给定本段要做的操作或对话意图，相机轨迹给定视点如何移动。三者分工不同：外观、语义意图、视点运动。组合后 JING 才能在保持人物场景可辨认的同时，让视角变化与动作语义对齐，例如同一面包房开场换不同人物参考就会遇到不同的人。

**最近历史窗口 × 视听记忆检索：** 最近历史窗口保留刚生成的若干块以保证局部连续，视听记忆检索从更早的历史中按相关性找回若干帧或音频段以恢复离开过的场景线索。前者管平滑衔接，后者管长期回指。组合后模型在有限上下文预算内同时获得局部连贯与远期覆盖，例如离开再返回时还能利用早先的店铺或火源信息。

**实体图 × 行动者与交互状态：** 实体图记录地点、人物、物体的位姿、外观、语义属性与空间附着关系，回答世界里有什么、在哪里、怎么连；行动者与交互状态记录意图、运动、正在进行的活动以及情绪需求等属性，回答谁想做什么、做到哪一步。两者结合才能既判断动作是否可执行，又推进运动与事件，缺少其一就会出现位置对但行为错或者行为对但放错地方的情况。

DAO 的状态表示与更新如下，状态分量与推进函数分别对应要存什么与如何推进。

\[W_{t}=(G_{t},B_{t},E_{t},\omega_{t}),\]

其中实体图、行动者与交互状态、活动事件集与世界时钟分别管空间关系、意图运动活动属性、正在发生的事件与共享时间。

\[W_{t+1}=F_{\mathcal{D}}(W_{t},\widehat{\mathcal{U}}_{t}),\]

该式表示在世界定义与已准入输入下由当前状态算出下一状态，每步依次应用编辑、推进运动、解算空间约束、推进活动事件。

读 DAO 结构图时注意左侧准入与底部有序更新是关键，右侧读出与持久化决定了多视角与长期一致如何实现。

> **看图路径：** 1. 先看 a 交互栏动作准入如何把移动操作说话变成意图与状态编辑；2. 再看 b 中部四步有序更新的箭头顺序与下方不变状态前向传递条；3. 看 c 读出栏如何把观察者位姿变成文本位姿参考再送入 JING；4. 看 d 持久化栏快照与事件历史如何支持保存恢复

[![原论文 Figure 5：DAO world engine. (a) User and agent actions pass through action admission to produce actor…](https://arxiv.org/html/2610.19726v1/dao-architecture.png)](https://arxiv.org/html/2610.19726v1/dao-architecture.png)

*论文图 5。原论文 Figure 5:：“DAO world engine. (a) User and agent actions pass through action admission to produce actor intents and state edits.”。*

图中 a 把移动操作说话经目标加约束检查变成意图与编辑，b 上部世界定义初始化当前状态，中部实体图属性行动者状态时钟与事件展示存量，下部 4 步依次处理关系位姿包含遮挡与动作事件且不变状态前向传递，c 由观察者位姿得到局部观察再转成文本位姿参考送入 JING，d 用快照与事件历史支持保存恢复，左下开门关门示例直观表示状态持久。

### 记忆检索如何用有限预算看到更早历史

JING 维护一个视听记忆档案，检索单元是视频隐帧与连续立体声音频隐组。每生成一块后，模型从选定注意力层的查询键表示中提取紧凑的查询与键描述子。推理时用上一已完成块的查询描述子对更早候选打分，按视频与音频两个模态分别计算，先在头与层间标准化再聚合，候选池排除已保留的首块与近期上下文，并按时间分段从各区间选相关单元以兼顾相关性与历史覆盖。

选中的单元用专用位置槽与记忆角色嵌入重放得到当前上下文的记忆键值，新块再加入档案。近期窗口与记忆预算分别限制，使当前注意力用的历史总量有界，又能看到窗口之外的早先场景与事件。训练记忆适配时变化近期长度、选择方式与容量，迫使模型学会组合不同历史配置。例子：超市中先看到蓝色通道牌、再看货架、再回到同一蓝色牌子的回访序列，就需要记忆提供首次出现的通道牌线索，否则重访容易生成不一致的招牌或布局。

### 数据如何从采集变成可训练样本

数据管线强调第一人称视角下移动、重访、交互与对话的时间连续，以及视频音频文本与可选相机参考图像的对齐。来源分两类，内部采集与生成的第一人称视频包括公开平台的场景探索、游戏与交互视频、可控 3 维渲染与模型生成的交互对话，侧重相机移动、地点重访与完整操作对话；公开数据集选用 SpatialVID、Sekai、DL3DV 的子集补充场景与相机运动多样性。

处理先做自动化媒体检查，看分辨率帧率解码可靠性清晰度曝光压缩伪影与冻帧，严重缺陷排除，中等运动模糊或疑似转场留待后续判断。再用视觉语言模型看全时间线抽帧、高帧率短窗与音频，判断是否为观察者直接体验、运动是否连续、有无跳变叠加与无关背景音乐。时间切分用 Qwen3.6 提候选边界，重访尽量把离开与返回包在同一序列，交互对话尽量保留完整操作与问答，并保留来源与原始时间区间以便溯源。

字幕先统一实体与场景再描述可见事件动作语音与相关声音，最后改成第一人称训练字幕，有相机轨迹的不重复描述相机运动，无相机条件的则补上相关运动。相机条件用 ViPE 估计内参与 6 自由度位姿并平滑滤波，参考图像从帧中选裁或按帧与提示生成并关联到字幕区间，通过前验证视听同步与跨模态一致，只保留通过样本。最后按导航交互对话等能力与有无相机参考组织成隐变量与文本嵌入的 LMDB 分片。

**双向教师模型 × 因果自回归学生模型：** 双向教师模型用完整片段学习相机控制与视听质量，允许块间双向注意力，目标是把能力学全学稳；因果自回归学生模型只能看过去已生成的内容逐块向前生成，目标是支持实时连续交互。两者搭配是因为直接训练因果长程生成容易受历史误差影响，先用教师保证质量，再用重采样与蒸馏把能力迁移到可部署的少步因果形态。

下图把上述 5 段管线画成从左上到右下的流向，重点看过滤与条件验证在哪里截断不合格样本。

> **看图路径：** 1. 先看 A 到 E 五栏的箭头，确认数据从来源到过滤再到切分与条件构造的主路径；2. 看 B 栏自动检查与语义评估如何分流为拒绝与通过；3. 看 C 栏离开探索返回三段如何被包在一个完整事件里；4. 看 D 栏相机位姿与三类参考图像如何分别进入验证再汇入 E 栏

[![原论文 Figure 2：Data pipeline overview. Internally collected and generated egocentric videos and open-source…](https://arxiv.org/html/2610.19726v1/data_pipeline_overview.png)](https://arxiv.org/html/2610.19726v1/data_pipeline_overview.png)

*论文图 2。原论文 Figure 2:：“Data pipeline overview. Internally collected and generated egocentric videos and open-source datasets undergo automated media checks, model-assisted semantic filtering, temporal…”。*

图中 A 列区分内部采集生成与公开数据集，B 列自动检查在上语义评估在下并分流为拒绝与通过，C 列上部用离开探索返回三图强调保留完整事件，下部从场景实体到视听描述再到字幕精炼并给出时间对齐字幕，D 列左侧相机位姿估计与轨迹平滑视差检查，右侧从帧字幕实体经选择裁剪或生成得到人物物体环境 3 类参考并映射到字幕区间，底部多模态验证再分流为拒绝待审接受，E 列按导航交互对话重访组织成视频音频文本对齐样本再转隐变量与分片训练混合。

### 五阶段训练如何得到可实时交互的模型

训练对象是从 MiniMax-H3 改造的 JING，分 5 个阶段。第一阶段训练双向教师，加入相机控制模块并保留双向注意力，在完整片段上联合优化主干与控制模块，学会相机条件运动，得到的教师用于后续蒸馏。第二阶段训练因果自回归模型，在教师强制基础上加重复采样强迫，把历史段加噪再由模型重构并作为后续预测的上下文，减少对干净历史的依赖，弥合训练干净历史与推理自生历史的差距，相机与文本条件可在块边界更新以响应持续交互。

第三阶段引入视听记忆，训练模型组合固定初始块、近期窗口与检索记忆，适配时变化近期长度与记忆容量以学会不同组合。第四阶段用速度矩匹配初始化少步学生，冻结教师与可训练辅助网络在学生去噪中间状态匹配条件速度矩，与流匹配参数化对齐，为后续分布匹配提供起点。第 5 阶段用分布匹配蒸馏精炼学生，学生在自生历史条件下生成序列，冻结教师与在学生样本上训练的分数模型把学生输出分布推向教师，在少步下恢复质量并改进自回归生成。

记忆检索的打分聚合与重放、相机调制的缩放平移预测都在这些阶段中学会分工，原报告未给出每阶段的具体步数学习率与算力，复现时需要以公开代码中的配置为准，不能从模型名猜测。

### 在什么条件下测生成质量与交互

定量评测用 WBench 的 Navigation 与 Full 划分。Navigation 有 158 个案例，考察视频质量、场景 adherence、交互 adherence、一致性与物理合理性，侧重可交互世界生成。Full 有 289 个案例，在导航之外还覆盖文本驱动的主体动作、事件编辑与视角切换。表中名次分别指 15 个 Full 条目与 39 个 Navigation 条目池内的排名，数据截至 2026 年 9 月 17 日。比较对象包括 Kling 3.0、Wan 2.7、Seedance 1.5、HY-Video 1.5 等视频模型，以及 Alaya-EVOKE-Turbo、JoyAI-Echo-1.5 双向与 4 步自回归、Zing-0.5、HiDream-O1-World、Genie 3 等世界模型。

JING 参测的是双向版本与 4 步自回归版本，后者是蒸馏后的可部署形态。定性部分展示参考条件组合、第一人称探索、物体操作、人物对话、动作分支与参考分支、具身交互，以及 DAO 的自主智能体、共享世界多视角与有无 DAO 的离开重访对比。具身部分明确说明只是生成机器人视角的观察界面，不度量真实机器人任务成功率。DAO 部分是定性系统演示与消融思路的展示，不是同一 WBench 分数表上的消融分数。

### Full 划分上谁的平均分更高

Full 划分要回答在更广的动作事件视角任务下整体平均分如何，指标方向都是越高越好，比较条件是同一 WBench Full 的 289 案例与同一套 5 维评分。下表截取总体平均与视频质量等前几列，保留 JING 两个版本与相邻的强基线，完整行列以原表为准。

| Rank | Model | Avg. | Video quality | Setting adherence | Interaction adherence |
| --- | --- | --- | --- | --- | --- |
| 1 | JING (Bidirectional) (ours) | 81.0 | 80.9 | 88.5 | 76.7 |
| 2 | JING (4-step AR) (ours) | 79.9 | 79.8 | 88.9 | 79.5 |
| 3 | Kling 3.0 [45] | 79.4 | 80.0 | 91.0 | 73.1 |
| 4 | Wan 2.7 [46] | 78.4 | 81.0 | 91.4 | 72.1 |

上表比较的是 Full 平均分与各维度得分，JING 双向平均 81.0 排第一，4 步自回归平均 79.9 排第二，Kling 3.0 平均 79.4 排第三，Wan 2.7 平均 78.4 排第四。分维度看，JING 双向在交互 adherence 为 76.7，4 步版本为 79.5，高于 Kling 的 73.1 与 Wan 的 72.1，但在场景 adherence 上 Kling 的 91.0 与 Wan 的 91.4 高于 JING 的 88.5 左右。限制是这只是该榜单截至日期与参测池内的排名，不代表所有场景的物理正确或长期记忆能力，且平均分掩盖了维度 trade-off，蒸馏后一致性从 85.7 降到 81.4、物理从 73.3 降到 69.9，说明少步化有具体代价。

### 定性上参考探索操作对话各说明什么

参考条件组合说明外观锚点如何约束生成：只给场景时生成钟楼街道的探索，给场景加人物时面包房内出现可辨认的人物并保持室内特征，给场景人物物体三者时被困马车与人物服装马车细节同时受约束，3 类参考分别管去哪里、遇到谁、操作什么。

第一人称探索说明导航输入能变成连续视角变化：穿过拱门看到街道、神社附近转弯看到岔路、甲虫尺度下看到叶下空间，近处表面与地标在相邻视图间保持可辨认，但这只是局部视觉连续的示例，不等于全局几何无漂移。物体操作说明动作能引起可见状态变化：锤击热金属、幼龙点燃柴堆、松手让天灯升空，连接第一人称动作与物体状态运动变化，覆盖写实与风格化。

人物对话说明模型生成面向观察者的注视表情姿态与多语言语音，示例包括中文玫瑰露台、英语幻想场景、日语电车，但论文只给采样帧与视频带语音的说明，没有给出语音可懂度或口型同步的数字。分支说明同一起点可走向不同发展：喷泉开场可看水中硬币、可扔硬币、可遇仙子；面包房开场换 Clara、Tom、Eli 人物参考则遇到不同人而开场与问候结构相似。具身交互给出家务机器人视角放杯、取球给狗、浇花，强调只是观察界面示例，不度量物理执行成功。

### DAO 的自主行为与多视角持久性有何证据

DAO 的证据是 3 个定性演示。自主智能体演示中 6 个连续事件从冲突到和解：Rowan 挪手推车让路，Eli 误读为故意干扰而争吵，Nori 部分目击，Clara 介入，随后物理痕迹与证人证据澄清意图并和解，说明智能体按自身意图、记忆、局部观察与可用信息自主发起并修正行动，而 DAO 维护演化的共享状态。多视角演示把同一交互同时给出 Clara、Eli、Nori 的第一人称视角，前两者是对立视点，后者是从街对面观察，说明不同观察者的局部体验 grounded 在同一时间与状态上下文中。

有无 DAO 的离开重访对比最直接：无 DAO 时重访把之前点燃的餐巾仍画成在烧，没有中间干预的痕迹；有 DAO 时观察者不在场期间管理员灭火更新了状态，重访生成以新状态为条件。这支持观察者视野之外的动作能影响后续观察、跨离开返回保持因果连续的判断。但这些都是选定的场景演示，没有给出状态查询准确率、动作准入拒绝率、恢复成功率或长期一致性的数字，适用条件限于所展示的世界定义与规则，不能推广到任意复杂社会交互都成立。

### Navigation 子集上少步自回归损失了什么

Navigation 子集要回答在 158 个导航为主案例下少步因果生成相对双向损失多少，指标方向同样越高越好。下表保留该子集前列与 JING 两个版本及相邻基线，列出平均分、交互 adherence、一致性与物理等列以便看到代价分布。

| Rank | Model | Avg. | Interaction adherence | Consistency | Physics |
| --- | --- | --- | --- | --- | --- |
| 1 | Alaya-EVOKE-Turbo [48] | 82.0 | 83.9 | 88.1 | 74.0 |
| 2 | JING (Bidirectional) (ours) | 81.9 | 75.6 | 88.1 | 73.3 |
| 5 | Zing-0.5 [49] | 81.0 | 84.2 | 88.5 | 73.8 |
| 6 | JING (4-step AR) (ours) | 81.0 | 78.7 | 83.7 | 69.8 |

上表显示 Navigation 平均分 Alaya-EVOKE-Turbo 为 82.0 排第一，JING 双向 81.9 排第二，JING 4 步自回归 81.0 与 Zing-0.5 并列靠后名次段。关键对照是同一 JING 从双向到 4 步：平均分从 81.9 降到 81.0，交互 adherence 从 75.6 升到 78.7，一致性从 88.1 降到 83.7，物理从 73.3 降到 69.8。也就是说少步化没有均匀下降，交互响应保持甚至略升，但长期一致与物理合理性下降更明显。限制是这仍是榜单分数，不能推出每段生成的延迟帧率，且 JoyAI 等在交互维度可达 86 以上，说明 JING 并非所有维度最优。未胜出项要明确写出：在 Navigation 交互 adherence 上 JoyAI-Echo-1.5 双向 86.6 与 4 步 87.9 都高于 JING，在一致性上多个基线也在 88 以上，JING 的优势主要在 Full 整体平均与场景保持的组合上。

### 结论在什么边界内成立

定量结论只在 WBench 截至 2026 年 9 月 17 日的参测池与评分规则下成立，Full 池 15 条目、Navigation 池 39 条目，换榜单换时间换维度权重结论可能变化。少步蒸馏的保持只是总体平均意义上的 largely preserving，具体维度上有升有降，一致性与物理分数下降是明确代价。定性结论依赖所选场景与参考质量，例如人物外观保持在示例中成立，但换更难的遮挡、强运动或长时间遮挡后重现时是否仍成立没有数字。

DAO 的持久性依赖快照与事件历史的实现与世界定义的完备性，原文未报告并发冲突、大规模实体、长事件链下的延迟与失败条件。论文结尾也指出未来工作在运动鲁棒性、长期记忆、响应延迟与状态生成一致性上仍需改进。容易误解的是把生成的人物对话流畅当成理解正确，把机器人视角视频当成真机成功，把榜单第一当成所有任务最优，这些都超出证据。缺证据不等于技术有错，只是说明还需要补验证才能谈部署。

### 复现第一步做什么与资源如何区分

复现先从世界与体验的接口做起，而不是直接训练大模型。第一步按论文第 4.3 节搭最小 DAO：定义一个小地图、两类实体与一条空间规则，实现动作准入的目标解析与可达可用检查，再实现应用编辑、推进运动、解算空间、推进活动的 4 步有序更新与不变状态前向传递，并用开门关门这类最小状态变化验证离开返回后状态仍在。然后用固定文本相机与参考条件调用已有 JING 或等效生成器做局部读出到视听的映射，检查同一状态不同位姿是否得到不同但事实一致的观察。

关键超参数与信息条件要保留：JING 的块大小、首块与近期窗口与记忆预算、相机 6 维相对运动表示、记忆检索的层头聚合与时间分段选择、训练 5 阶段的教师冻结与学生初始化关系。资源要分三件事说：代码方面，证据中类型为 code 的链接当前可达，可按其说明安装与运行，但文档完整性标注为部分，只覆盖安装；权重方面，模型链接本次未能确认可达，不能写已公开可下载；系统运行方面，榜单链接可达但只是第三方评测页，不证明作者系统可一键运行。

复现时以实际可达的代码与数据为准，缺训练细节就先做推理与状态循环的复现，不要猜学习率与算力。

### 什么时候值得尝试与还需补哪项验证

当任务需要长时间多观察者共享事实，例如多人探索、智能体协作、离开返回后仍要记住后果，或者需要同一开场走向不同分支并保留历史，就值得尝试 DAO 加 JING 的分离思路；如果只是单段高质量视听生成，没有持久事实需求，用普通视频模型更直接。复现第一步是先跑通小规模 DAO 状态循环与局部读出，再接生成器做闭环交互。还需补的验证有三项：一是长时间重访的事实一致率与失败案例统计，而不仅是选定帧。

二是动作准入的误判率与状态恢复的成功率，说明规则在边界条件下的行为；三是端到端延迟、帧率与记忆预算的关系，说明实时交互的真实代价。回答这三项后，才能判断该框架在目标场景里是演示可用还是持续运行可用。

<details>
<summary>📎 论文与评分元数据</summary>

排名：前50% | 文档类型：系统技术报告 | [arXiv 原文](https://arxiv.org/abs/2610.19726)

</details>

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。

- 评分规则：type-aware-v1

- 评分模型：muse-spark-1.3-contributor

- 评分请求协议：openai_responses

---

[← 返回 2026-10-16 语音/音乐/音频论文速递](/audio-paper-digest-blog/posts/2026-10-16/)
