---
title: "ADAPT: Audio-Depth Action Planning with Transition-Aware Rewards for Lights-Out Industrial Navigation"
date: 2026-10-15
draft: false
tags: [声源定位, 强化学习, 基准测试, 工业应用, 空间音频信号]
categories: [论文速递]
description: "论文研究无可见光工业场景下只用空间音频找方向、只用深度看路的导航问题，用三阶段训练的 ADAPT 和位置朝向图上的剩余动作数奖励 TARS 实现，在未见过的工厂中 Clean 条件成功率 90.6% 而最难的局部噪声下保持 60.0%，代价是依赖仿真中的特权地图和固定鸣叫信标。"
hiddenInHomeList: true
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_arxiv_id: "2610.15956"
paper_digest_workbench_contract: "researcher-workbench-v1"
paper_digest_reader_title: "关灯工厂里只靠声音和深度导航：ADAPT 如何找声源并避障"
paper_digest_original_title: "ADAPT: Audio-Depth Action Planning with Transition-Aware Rewards for Lights-Out Industrial Navigation"
paper_digest_arxiv_version: 1
paper_digest_arxiv_versioned_id: "2610.15956v1"
paper_digest_arxiv_abs_url: "https://arxiv.org/abs/2610.15956v1"
paper_digest_arxiv_pdf_url: "https://arxiv.org/pdf/2610.15956v1.pdf"
paper_digest_primary_task: "声源定位"
paper_digest_tags_contract: "paper-tag-flat-tags-v2"
paper_digest_tags_selection_contract: "paper-tag-selection-v2"
paper_digest_tags_registry_version: "paper-tag-catalog-v2"
paper_digest_tags_registry_sha256: "cdef54423b5dfc00a1d017ef6639446d2ecd1d9c1acf71c8eb4f6219a46b7ba8"
paper_digest_tags_concepts: [{"facet":"task","id":"task.localization","label":"声源定位"},{"facet":"method","id":"method.reinforcement","label":"强化学习"},{"facet":"artifact","id":"artifact.benchmark","label":"基准测试"},{"facet":"application","id":"application.industrial","label":"工业应用"},{"facet":"signal","id":"signal.spatial-audio","label":"空间音频信号"}]
paper_digest_primary_method: "强化学习"
paper_digest_score: 6.5
paper_digest_rank_bucket: "前50%"
paper_digest_document_type: "方法研究"
paper_digest_one_sentence: "论文研究无可见光工业场景下只用空间音频找方向、只用深度看路的导航问题，用三阶段训练的 ADAPT 和位置朝向图上的剩余动作数奖励 TARS 实现，在未见过的工厂中 Clean 条件成功率 90.6% 而最难的局部噪声下保持 60.0%，代价是依赖仿真中的特权地图和固定鸣叫信标。"
paper_digest_authors: [{"affiliations":["University of California, Irvine"],"name":"Wenjun Huang"},{"affiliations":["University of Pennsylvania"],"name":"Shenghao Fu"},{"affiliations":["Carnegie Mellon University"],"name":"Yian Jin"},{"affiliations":["Purdue University Northwest"],"name":"Yang Ni"},{"affiliations":["Michigan State University"],"name":"Yifan Li"},{"affiliations":["Independent Researcher"],"name":"Lichi Li"},{"affiliations":["Dartmouth College"],"name":"Xingjian Diao"},{"affiliations":["University of California, Irvine"],"name":"Pengfei Zhang"},{"affiliations":["University of California, Irvine"],"name":"Yutong Song"},{"affiliations":["University of California, Irvine"],"name":"Hanning Chen"},{"affiliations":["University of California, Los Angeles"],"name":"Jiarui Cui"},{"affiliations":["University of Notre Dame"],"name":"Tianyu Yang"},{"affiliations":["University of California, Irvine"],"name":"Shilong Li"},{"affiliations":["Michigan State University"],"name":"Yu Kong"},{"affiliations":["University of California, Irvine"],"name":"Mohsen Imani"}]
paper_digest_abstract_sha256: "420b62ea8218bab9d8101b5a517816f2a1d1430ed18875dc2728b0438c2a093e"
paper_digest_sidecars: {"citation.bib":{"sha256":"1f2851c1476d86d42333257122b7bd43a7aca9a25e918dae839615338b60606a","url":"/audio-paper-digest-blog/data/papers/2026-10-15/2610-15956/citation.bib"},"citation.json":{"sha256":"b970d56b17c65ef12c1dff48456faa43d0c22d08645c8076d98f76a3e063bd43","url":"/audio-paper-digest-blog/data/papers/2026-10-15/2610-15956/citation.json"},"citation.ris":{"sha256":"522f47e1ab96f23f44711a0d3303094291d0e5d59a24e55942ca69a9bd9096f4","url":"/audio-paper-digest-blog/data/papers/2026-10-15/2610-15956/citation.ris"},"rethink-context.json":{"contract":"paper-research-context-v2","sha256":"8781f0ca628c77a45f0293254ad6e6f28ff2a0964658500018ceba161ffe597d","url":"/audio-paper-digest-blog/data/papers/2026-10-15/2610-15956/rethink-context.json"}}
paper_digest_api_reader_contract: "beginner-researcher-v3"
paper_digest_api_reader_article_sha256: "a972b8e9fbea0f44a01d7cf002cdc8b2dc9ee7a903c94f0139f0567ec4cde5bf"
paper_digest_api_reader_plan_sha256: "0bd008f6990f381c716852e13901c298cd9800b87ee8eb34c8cbd6c90d73eefd"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings-v4"
paper_digest_api_reader_source_bindings_sha256: "d580b4336c2a1ccac97c771e5899ba267e16f19ec15c8bf48dce0f8d5d78247a"
paper_digest_api_reader_source_table_count: 4
paper_digest_api_reader_source_formula_count: 5
paper_digest_api_reader_structured_artifacts_sha256: "38274d2a2a8b4d8ff0dde8e036c7849e7fbe5038be0038b94f1b84c5d97b2f51"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity-v1"
paper_digest_api_reader_author_identity_sha256: "748264eebd5c14f9b92db06978a6242d37174ba40a76ed1d9fb0181fce781f2b"
paper_digest_api_reader_author_count: 15
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity-v1"
paper_digest_api_reader_resource_identity_sha256: "6731e7b6ec9dce69fb12fe685cdb68ec2601539faa48cd91f45f2e5c7744abea"
paper_digest_api_reader_resource_count: 0
paper_digest_api_reader_figure_persistence: "ephemeral-no-persisted-figure-assets-v1"
paper_digest_api_reader_decision_projection: "api-reader-decision-projection-v2"
---

# 📄 关灯工厂里只靠声音和深度导航：ADAPT 如何找声源并避障

> 英文题目：*[ADAPT: Audio-Depth Action Planning with Transition-Aware Rewards for Lights-Out Industrial Navigation](https://arxiv.org/abs/2610.15956v1)*

<!--paper-tag-hierarchy-v1:start-->

**研究分类**

- **研究任务**：[声源定位](/audio-paper-digest-blog/papers/?concept=task.localization)
- **研究方法**：[强化学习](/audio-paper-digest-blog/papers/?concept=method.reinforcement)
- **信号**：[空间音频信号](/audio-paper-digest-blog/papers/?concept=signal.spatial-audio)
- **应用**：[工业应用](/audio-paper-digest-blog/papers/?concept=application.industrial)
- **研究产物**：[基准测试](/audio-paper-digest-blog/papers/?concept=artifact.benchmark)

<!--paper-tag-hierarchy-v1:end-->

> 评分：**6.5/10** | 创新 1.3/2 | 技术严谨 1.2/1.5 | 实验充分 1.2/1.5 | 清晰度 0.8/1 | 影响力 0.7/1.5 | 开源 0/1.5 | 可复现 0.3/0.5 | 工程/实践 1/1.5


## 👥 作者与机构

- Wenjun Huang：University of California, Irvine
- Shenghao Fu：University of Pennsylvania
- Yian Jin：Carnegie Mellon University
- Yang Ni：Purdue University Northwest
- Yifan Li：Michigan State University
- Lichi Li：Independent Researcher
- Xingjian Diao：Dartmouth College
- Pengfei Zhang：University of California, Irvine
- Yutong Song：University of California, Irvine
- Hanning Chen：University of California, Irvine
- Jiarui Cui：University of California, Los Angeles
- Tianyu Yang：University of Notre Dame
- Shilong Li：University of California, Irvine
- Yu Kong：Michigan State University
- Mohsen Imani：University of California, Irvine

## 📌 核心摘要

关灯工厂不再为机器人维持可见光照明，依赖RGB的导航智能体因此失效。论文研究在无RGB条件下利用空间音频定位持续发声目标、利用自中心深度图感知几何障碍的导航任务，输出离散的前进转向与停止动作，难点在于噪声下分辨目标方向并完成避障与停止判断。空间音频适配器先为冻结的音频编码器补上方向感知能力并保留适配结果，再用专家轨迹做多模态监督微调把音频方向线索与深度几何映射为动作预测，最后用近端策略优化做闭环强化学习以适应自身决策引入的状态。强化学习中的转移感知奖励整形在位置朝向图上计算剩余最少动作数，使原地转向也能得到与未来代价一致的奖励。与已有测地距离奖励只看位置不同，该奖励同时计入移动和转向代价。在14个未见场景的Localized Noise条件下，ADAPT成功率（SR）为60.00%，高于最强训练基线MAGNet的1.71%。结论只适用于仿真中的固定啁啾信标和设定的噪声分布，真实部署、间歇目标和未知干扰声尚未验证，且原文未披露训练、推理或部署成本。

## 🔗 开源与复现资源

本次未形成可展示的已核验资源记录，开放状态尚未核实。

可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 为什么要在关灯工厂里不用 RGB 导航

这篇论文面对的是熄灯生产的工业仓库：没有工人常驻，就不需要为人的视觉持续开灯，如果只为机器人的彩色相机开灯，会带来持续的照明能耗，而一旦调暗灯光，依赖彩色图像的视觉语言动作模型就会退化。作者因此把任务限定为完全不用彩色图像，只保留两种与可见光无关的输入：空间音频提供目标在哪里，深度提供哪里能安全走。图 1 把这个动机画得很直白，左栏开灯时彩色图像清晰、路径顺利，中栏关灯时彩色图像变黑、机器人撞向纸箱，右栏关灯但用声音和深度仍能规划绕行。

读图说明：下面这张动机图有 3 组仓库对比，重点看光照、感知小窗和路径线的对应关系，理解为什么声音管方向、深度管避障。

> **看图路径：** 1. 对比左中右三栏的灯光条件和 RGB 小窗的变化；2. 看右栏蓝色虚线与绿色虚线分别对应哪种感知线索；3. 看右下角动作规划小图如何表示撞墙与绕行的选择

[![原论文 Figure 1：Motivation of ADAPT. Existing RGB-based VLA agents depend on visible illumination and therefore…](https://arxiv.org/html/2610.15956v1/crop_teaser3.png)](https://arxiv.org/html/2610.15956v1/crop_teaser3.png)

*论文图 1。原论文 Figure 1:：“Motivation of ADAPT. Existing RGB-based VLA agents depend on visible illumination and therefore require continuous lighting in lights-out factories.”。*

图中左栏标注开灯，机器人下方有绿色成功路径，右下角彩色图像小窗清晰；中栏标注关灯，彩色小窗全黑，红色虚线撞向纸箱并标出感知失败；右栏同样关灯，但用蓝色点线表示从声源到机器人的声音方向线索，用绿色虚线表示绕过纸箱的成功路径，右侧叠加深度着色小窗和两个绕障动作示意。底部的图例区分照明能耗、全局声音线索、局部几何和成功与失败路径。这个图只讲任务设定，不证明哪种方法更好，后续的性能需要看受控实验。

### 已有路线为什么不能直接搬过来

与视觉语言动作模型那条路线相比，本文的输入和目标都不同。常见的大模型动作方法把动作当作词元，从彩色图像和语言指令直接生成控制，多做在桌面操作等视觉条件好的任务上，本文则把输入换成 4 通道声音加深度，目标是找到持续鸣叫的声源并停下来。输入变了，原来在彩色图像上学到的纹理和语义就用不上，这是不能直接搬用的根本原因。

与声音视觉导航的经典路线相比，区别在于运行阶段是否允许用视觉。SoundSpaces 等工作用双耳声音加视觉一起找发声目标，后续还有结构化声记忆和路点、稀疏语义声音等改进，但视觉仍是主要感知。本文在部署时不给任何彩色图像，只给声音和深度，所以它不是在同一信息条件下的简单胜负，而是换了一个更严格的信息约束。

与纯声源趋近和主动声感知相比，任务定义也不同。早期麦克风阵列趋近是估计方向然后走过去，声场导航是铺设设计好的声场或声轨引导，现代音频目标导航多把连续发声体当目标但仍配彩色视觉；VisualEchoes 那类主动感知是自己发啁啾、听回声反推空间结构。本文既不依赖彩色视觉，也不自己发声探空间，而是听目标信标定方向、看深度避障，再直接规划离散动作。

### 智能体每一步能看到什么、要输出什么

论文把导航写成部分可观察的序贯决策。每一步智能体只能看到当前的声音深度观测，仿真器里真正的机器人位姿、声源位置和几何布局只用于仿真和做监督，不暴露给策略。观测由两部分组成：

\[O_{t}=\left(\mathbf{X}^{a}_{t},\,\mathbf{X}^{d}_{t}\right),\]

其中 4 通道 1 阶 Ambisonics 观测记录目标声随相对位姿变化的声场，深度图记录沿视线到最近表面的距离。前者回答往哪去，后者回答哪能走。动作空间很小，只有 4 个离散选项：

\[\mathcal{A}=\{a^{\mathrm{fwd}},a^{\mathrm{left}},a^{\mathrm{right}},a^{\mathrm{stop}}\},\]

分别对应沿当前朝向前进、原地左转、原地右转和终止。策略以当前观测和至多过去的动作为条件输出动作分布，用前进 1.5 米、转弯 18 度、目标半径 1.5 米、最大 100 步的几何来 rollout 和评测。到达目标附近并发出停止才算严格成功，否则到步数上限结束。目标声是固定的 500 赫兹到 900 赫兹、50 毫秒线性啁啾，以 20 赫兹无间隙循环，所有场景和难度共用同一信号，这样语义识别的干扰被去掉，考的是空间感知和闭环导航。举个教学例子：假设机器人在货架走廊听到目标在左前方，深度显示正前方 1 米内有大片近距离遮挡，合理的下一步不是前进，而是先左转对准可行走廊，这正是声音给方向、深度给否决权的分工。

### ADAPT 的三阶段流程是怎样衔接的

ADAPT 的训练分成 3 段，推理时只用最后的策略。第一段做空间音频适配，让原来为单声道设计的音频通路能从 4 通道中读出方向；第二段做多模态监督微调，把声音加深度的观测映射到专家动作的文本词元；第 3 段用近端策略优化做闭环强化学习，用转移感知奖励优化长程行为。推理时策略直接把空间音频和深度映射到离散动作，还可以附带最近 8 个动作的文本历史，不增加可训练参数。

读图说明：下面的总览图从左到右是任务输入、3 段训练和部署，重点看每段谁被训练、谁被冻结，以及声音和深度在何处汇入主干。

> **看图路径：** 1. 从左到右数五个框，确认输入输出在每阶段如何变化；2. 看阶段一辅助头的位置和虚线含义；3. 看阶段三演员与评论家分支从哪里分开

[![原论文 Figure 2：Overview of ADAPT. The model is trained in three stages: spatial-audio adaptation, multimodal SFT…](https://arxiv.org/html/2610.15956v1/crop_crop_overview1.png)](https://arxiv.org/html/2610.15956v1/crop_crop_overview1.png)

*论文图 2。原论文 Figure 2:：“Overview of ADAPT. The model is trained in three stages: spatial-audio adaptation, multimodal SFT for audio-depth action prediction, and PPO-based closed-loop optimization with…”。*

图中第一框给出关灯仓库、声音定方向和深度定几何的输入输出定义，动作空间列出 4 个箭头；第二框在音频编码器内加入空间音频适配器并接辅助头，输出增强后的空间音频表示；第三框把视觉编码器和带适配器的音频编码器一起接入多模态主干，输出离散动作；第四框共用主干分出离散动作和评论家头，用动作空间奖励和环境转移做优化；第五框部署时只有声音加深度进、离散动作出。这个流程的代价是 3 段都要准备不同的监督：方向角、专家轨迹和特权地图算出的奖励，推理时则不需要这些特权信息。

### 空间音频适配器如何学会方向

现有多模态大模型的音频通路多为单声道训练，不擅长从 4 通道中恢复方向。论文加入来自 SPUR 的轻量空间音频适配器，只训练适配器参数和一个辅助方向回归头，主干的音频塔、视觉塔和语言模型在该阶段冻结。编码器输出先做时间池化，再映射为相对声源方位角的估计，损失是对真实方位角的角度回归损失。辅助头只为提供显式方向监督，阶段结束后丢弃，训练好的适配器保留给后续导航训练。

**空间音频 × 深度图 × 离散动作：** 空间音频指四通道一阶 Ambisonics 波形，负责给出目标声源相对机器人的大致方向，是全局去哪里的线索；深度图指自中心视角下每个像素到最近表面的距离，负责给出前方和两侧是否可通行的局部几何；离散动作指前进、左转、右转和停止四个可执行选项，是把两类感知变成运动的接口。三者搭配后，音频决定大方向，深度否决会撞墙的前进，动作序列把这种协商落实为一步步可执行的轨迹。

**空间音频适配器 × 声源到达方向：** 空间音频适配器是在原有多模态大模型的音频编码器上加的小参数模块，负责从四通道波形中恢复方向结构；声源到达方向是相对机器人朝向的目标方位角，是检验适配是否学到方向感知的监督信号。两者搭配的意义是先用方向回归把适配器的表示拉到与真实方位一致，再把这个表示交给后续的动作预测，而不是直接让大模型猜方向。

可以这样复述一个样本的经过：0.512 秒的 4 通道波形进入带适配器的音频编码器，得到带方向结构的表示，池化后回归出一个角度，比如估计目标在左侧约 20 度；同时深度图进入视觉编码器，得到前方走廊是否通畅的几何特征；两者在语言模型主干内拼接成提示，模型输出下一个动作词元。论文的消融显示，只做监督微调时加入适配器或动作历史都能提升在最难噪声下的表现，两者叠加最好，说明表示适配和时序上下文解决的是不同层面的问题。

### 转移感知奖励为什么能评价原地转弯

常用的测地进展奖励只看位置到目标的最短可行路径，同一位置向左转和向右转的测地距离不变，奖励都是零，无法区分有益和有害的旋转。论文的转移感知奖励把状态扩到位置加朝向，在与策略相同的离散动作空间里建图：每个空间格点配 20 个朝向档，对应 18 度一档，前进边要求 1.5 米运动路径无碰撞，转弯边在相邻朝向档之间转移，每条边代价为 1。用反向宽度优先搜索算出每个可达位置朝向状态到目标区的最少剩余动作数，记为 N。势函数取负的剩余动作数：

\[\Phi(s)=-N(s),\]

转移奖励是前后势之差，系数取 1 时正好等于剩余动作数的减少量。再加上每步小的负松弛惩罚和成功时按路径效率加权的终止奖励，构成强化学习的奖励。动作图和特权状态只在训练时用于算奖励，不给策略。

读图说明：下面这张对比图左中右分别是测地失效示意、位置朝向图和奖励含义表，重点看同一位置不同转向如何得到不同符号的反馈。

> **看图路径：** 1. 看 a 栏同一位置不同朝向的测地距离为何相同；2. 看 b 栏位置朝向图节点上 N 值的变化；3. 对照 c 栏表格中有益与无益转向的两列奖励符号

[![原论文 Figure 4：Comparison of geodesic progress and TARS.](https://arxiv.org/html/2610.15956v1/crop_TARS_vs_Geodesic_Editable.svg)](https://arxiv.org/html/2610.15956v1/crop_TARS_vs_Geodesic_Editable.svg)

*论文图 4。原论文 Figure 4:：“Comparison of geodesic progress and TARS.”。*

图中 a 栏俯视图里机器人在同一位置有两个朝向，虚线是最短可行路径，左右转都不改变位置所以测地进展为零；b 栏把同一位置拆成不同朝向节点，有益的左转使 N 从 4 降到 3 并能继续前进到目标，无益的右转使 N 升到 5；c 栏表格写明有益转向测地奖励为零但本文奖励大于零，无益转向测地奖励为零但本文奖励小于零，前进两者都大于零。结论是奖励与动作原语对齐，而不是只与几何长度对齐。

**测地距离进展 × 剩余动作数 × 转移感知奖励：** 测地距离进展只看位置到目标的最短可行路径长度，原地转弯不改变位置所以奖励为零；剩余动作数是在位置加朝向图上到目标区所需的最少可执行动作数，前进和转弯都计一次；转移感知奖励是用剩余动作数的负值做势函数，前后状态势差即奖励。三者组合后，原地转弯也能得到正负反馈，有利于目标的转向被奖励，背离目标的转向被惩罚，从而让局部奖励与长程动作代价一致。

### 监督微调和强化学习各训练了什么、冻结了什么

第二段监督微调把专家演示转成状态动作对，输入是由观测构造的多模态序列，目标是专家动作的文本切分，只对动作答案词元算负对数似然。阶段一学到的适配器继续优化，音频塔、视觉塔、原生投影和基座权重冻结，语言解码器里只加秩为 8 的注意力低秩适配器。得到的监督策略作为强化学习的起点。

第 3 段用共用主干但梯度解耦的演员评论家结构，避免复制大主干。两者复用提示末位置的表示，演员只在有效导航词元上做分类，并在原监督对数上加零初始化的残差动作头，保证强化学习开始时恰好等于监督策略；评论家对表示做截断梯度，再接层归一化和多层感知机预测状态值，并额外输入剩余步数预算，因为相同观测在回合初和回合末的期望回报不同。评论家先在演员冻结下暖机，最多 100 次更新，解释方差连续三次超过 0.5 就转入联合优化。

优化用截断式近端策略优化和广义优势估计，每次从并行环境采固定长度 rollout，分 16 个小批量更新一轮，还保留对监督策略的散度约束，系数围绕目标散度 0.06 自适应。奖励用每步负 0.01 的松弛、成功时 10 乘以路径效率的终止奖励，以及上述转移感知项。训练在 Qwen2.5-Omni-7B 和 H200 上进行，动作历史只放最近 8 个动作的文本，开始时缺位用空标记，不保留历史声音、深度、碰撞结果和特权状态。

### DarkNav-Bench 如何控制场景和声音难度

基准在 IndustryNav 的 24 个工业场景上扩展，保留杂乱布局、动态工人设备、碰撞交互和深度感知，把视觉导航换成音频深度导航。10 个场景为见过场景，每个采 1200 训练回合和 300 测试回合；14 个为完全未见场景，只采 300 测试回合。4 个难度是累积包含关系：

\[\textbf{{Clean}}\subset\textbf{{Prop}}\subset\textbf{{DN}}\subset\textbf{{LN}},\]

Clean 只有目标直达声加距离和空气衰减，Propagation 打开遮挡、频率相关透射和多跳反射，Diffuse Noise 再加弥散背景场，Localized Noise 是在弥散背景声上再加入绑定在设备上的局部声源。观测可写成目标、背景和局部三项之和：

\[\mathbf{X}^{a}_{t}=\mathbf{X}^{\mathrm{tar}}_{t}+\mathbf{X}^{\mathrm{bg}}_{t}+\mathbf{X}^{\mathrm{item}}_{t},\]

其中后两项只在对应难度出现。目标声固定，背景用 MIMII 机器录音经频带校准，局部噪声用输送机、叉车、前移式叉车和自动导引车的代表性循环。动作几何与评测一致，前进约 1.5 米，转弯 18 度，成功半径 1.5 米，最大 100 步。

**成功率 × 路径长度加权成功率 × 动作数加权成功率 × 终点距目标距离：** 成功率只统计在目标半径内发出停止的回合比例，不看绕路；路径长度加权成功率把成功回合的最短可行路径长度除以实际走过的路径长度，衡量几何绕路；动作数加权成功率把最少需要动作数除以实际执行动作数，连原地空转和撞墙未遂的前进也计入代价；终点距目标距离是回合结束时机器人与声源的欧氏距离，失败回合也有连续进展信号。四者合起来才能区分到了没有、绕了多远、浪费了多少决策、差了多远。

**Clean × Propagation × Diffuse Noise × Localized Noise：** Clean 是只有目标直达声、无反射遮挡透射的理想条件；Propagation 在此基础上打开与几何和材料有关的反射、遮挡和透射；Diffuse Noise 再加入全空间弥散的机器背景声场；Localized Noise 是在弥散背景声上再加入绑定在具体设备上的局部声源。四者是包含关系，难度递增，用于分离几何传播、环境底噪和空间结构化干扰各自带来的退化。

下表是几何相关传播用的 5 种声学材料参数，吸收分低中高频，散射控制反射的漫射程度，透射控制穿过物体的能量比例。原文按资产语义指派，建筑为混凝土，货架等为金属，托盘纸箱为木材，塑料桶为塑料，轮胎为橡胶，共 66240 个网格实例。该表回答仿真中不同表面如何反射和透射声音，是理解 Propagation 难度的前提，数值越大代表该频段吸收或透射越强。

| Material | Abs.-L | Abs.-M | Abs.-H | Scat. | Trans.-L | Trans.-M | Trans.-H |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Concrete | 0.05 | 0.07 | 0.08 | 0.05 | 0.015 | 0.002 | 0.001 |
| Metal | 0.20 | 0.07 | 0.06 | 0.05 | 0.200 | 0.025 | 0.010 |
| Wood | 0.11 | 0.07 | 0.06 | 0.05 | 0.070 | 0.014 | 0.005 |

表中混凝土、金属、木材来自 Steam Audio 4.8.1 材料库，塑料和橡胶为手动估计；金属低频透射 0.200 明显高于混凝土 0.015，橡胶高频吸收 0.15 高于其他材料，散射多为 0.05 而橡胶为 0.10。这些参数只影响训练和评测时的声场生成，不作为策略输入，复现时需要同样的声学网格合并与光线追踪配置，否则传播效果不一致。

下表是目标与 4 类局部设备的声级、频带和时间结构。该表回答最难难度下的干扰在多大程度上与目标啁啾重叠，频带重叠越多、时间结构越相似，区分越难，指标方向是重叠比例越高干扰越强。

| Source | SPLsnd@1 m unweighted | SPLsnd@1 m A-weighted | 10–90% Energy Band | Energy in 500–900 Hz | Temporal Structure |
| --- | --- | --- | --- | --- | --- |
| Target | 95.1 | 93.6 | 560–840 Hz | 96.0% | 50 ms sweep, 20 Hz |
| Conveyor | 72.0 | 65.6 | 178–477 Hz | 5.8% | steady hum |
| Forklift | 68.0 | 58.4 | 110–265 Hz | 0.15% | steady hum |
| Reach truck | 66.0 | 60.6 | 183–443 Hz | 5.6% | steady hum |
| AGV | 62.0 | 60.7 | 551–1480 Hz | 74.7% | steady hum |

表中目标在 1 米处名义 95.1 分贝、500 到 900 赫兹内集中 96.0% 能量、50 毫秒扫频；自动导引车在目标频带内仍有 74.7% 能量，是最易混淆的局部源，而叉车只有 0.15%。目标在声级和周期性结构上被设计得显著，遵循工业警示声可区分的原则，但这也意味着结论只在显著信标成立，换成间歇或频谱更相似的目标需要重新验证。

### 基线和评测协议是否在同一条件下比较

比较分两类。训练类基线有 MAGNet、SAVi 和 SoundSpaces，都用严格停止，即必须在目标区内发出停止才算成功；零样本大模型有 Qwen2.5-Omni 和 Qwen3-Omni，分无预言和有预言两种诊断。无预言零样本只给当前声音、当前深度和最近 8 个动作，不给方位、距离、位姿、地图和碰撞结果，且禁用停止、进入目标半径即自动记成功，这是对零样本有利的宽松停止；有预言零样本额外给真实方位角和直线距离，可用严格停止，但它用了部署时 ADAPT 拿不到的特权信息，只能做诊断分解，不能当可部署的对手。所有方法用同样的导航动力学和最大步数。

下表是两种零样本设置的信息边界，回答什么信息可用、什么不可用，公平性在于无预言设置与 ADAPT 一样拿不到特权，而有预言设置明确标出多了方位和距离。

| Input / Information | Zero-shot w/o Oracle Info. | Zero-shot w/ Oracle Info. |
| --- | --- | --- |
| Current FOA audio | ✓ | ✓ |
| Current depth image | ✓ | ✓ |
| Recent action history | ✓ | – |
| Ground-truth source bearing | – | ✓ |
| Ground-truth source distance | – | ✓ |

表中当前声音和深度两者都有，动作历史只在无预言时有，历史观测、位姿、地图和碰撞结果两者都没有，真实方位和距离只在有预言时有。这解释了为什么无预言零样本成功率极低而有预言版本显著更高：瓶颈主要在空间音频感知，而不是把已知方向变成动作。引用该表时要注意，4 通道是作为 4 个单声道按固定顺序输入的，因为通用大模型没有原生 4 通道接口，这只是诊断性接入，不是未来空间原生模型的上限。

### 在见过和未见过的工厂里谁更稳

主结果显示 ADAPT 在见过和未见场景、4 个难度上都高于同为非预言的训练基线和无预言零样本，且随难度增加优势更明显。原文摘要点出未见环境 Clean 成功率 90.6%，最难局部噪声仍有 60.0%，而训练基线在弥散和局部噪声下多跌到接近零或个位数。路径效率和动作效率的变化方向与成功率一致，终点距离更低。定性轨迹也显示 ADAPT 能持续朝目标推进并停下，对手多为停滞或偏离，有预言的大模型即使方向准确也可能撞墙或绕路，说明把方向变成避障的闭环行为仍需任务适配。

读图说明：下面的俯视轨迹对比共八幅，重点看标题中的步数、终点距离和路径长度，以及轨迹是推进到目标还是原地打转。

> **看图路径：** 1. 先读每幅小图标题中的步数、终点距离和路径长度；2. 对比第一行 ADAPT 与其他训练方法的轨迹长度与终点；3. 注意失败基线短轨迹代表停滞而非高效

[![原论文 Figure 3：Qualitative comparison of navigation trajectories.](https://arxiv.org/html/2610.15956v1/crop_qualitative_1.png)](https://arxiv.org/html/2610.15956v1/crop_qualitative_1.png)

*论文图 3。原论文 Figure 3:：“Qualitative comparison of navigation trajectories.”。*

图中第一幅 ADAPT 用 69 步、终点 0.8 米、路径 44.6 米到达目标，绿色轨迹横跨仓库；MAGNet、SAVi、SoundSpaces 三幅都用满 100 步，终点分别为 16.8 米、30.0 米和 22.8 米，轨迹或偏离走廊或原地小圈；下行 4 个零样本同样多为 100 步且终点十几到三十多米。短轨迹在这里不代表高效，而是进展有限。

下表是未见场景的完整主结果，回答在相同严格或宽松停止下各方法四项指标的绝对水平，成功率、路径效率和动作效率越高越好，终点距离越低越好。

| Method | Clean | Clean | Clean | Clean | Prop | Prop | Prop | Prop | DN | DN | DN | DN | LN | LN | LN | LN |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Method | SR↑ | SPL↑ | SNA↑ | FDG↓ | SR↑ | SPL↑ | SNA↑ | FDG↓ | SR↑ | SPL↑ | SNA↑ | FDG↓ | SR↑ | SPL↑ | SNA↑ | FDG↓ |
| 1. Oracle-assisted methods (zero-shot) |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 1.1 Zero-shot (strict stopping) |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| Qwen 2.5-Omni Qwen (2025) | 14.29 | 11.40 | 6.12 | 16.63 | 12.71 | 10.06 | 5.55 | 16.79 | 15.10 | 12.20 | 6.41 | 16.25 | 17.10 | 14.34 | 7.88 | 16.30 |
| Qwen 3-Omni Xu et al. (2025) | 62.14 | 61.79 | 52.12 | 6.36 | 62.38 | 61.93 | 52.87 | 6.40 | 63.33 | 62.92 | 53.27 | 6.16 | 62.62 | 62.24 | 52.70 | 6.31 |
| 2. Non-oracle methods |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 2.1 Zero-shot (relaxed stopping) |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| Qwen 2.5-Omni Qwen (2025) | 2.38 | 2.34 | 2.12 | 23.60 | 2.14 | 2.11 | 1.96 | 23.33 | 2.62 | 2.59 | 2.37 | 23.44 | 2.86 | 2.73 | 2.46 | 23.74 |
| Qwen 3-Omni Xu et al. (2025) | 4.29 | 3.70 | 2.77 | 24.99 | 2.86 | 2.62 | 1.97 | 25.00 | 4.29 | 3.72 | 2.59 | 24.69 | 5.00 | 4.03 | 2.78 | 24.72 |
| 2.2 Training-based (strict stopping) |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| MAGNet Zeng et al. (2026) | 85.60 | 79.20 | 64.22 | 2.73 | 40.71 | 30.30 | 12.66 | 9.24 | 0.00 | 0.00 | 0.00 | 17.59 | 1.71 | 1.23 | 1.01 | 16.77 |
| SAVi Chen et al. (2021) | 72.31 | 67.10 | 51.36 | 4.03 | 17.40 | 16.30 | 10.01 | 13.00 | 0.00 | 0.00 | 0.00 | 18.17 | 0.14 | 0.13 | 0.11 | 22.41 |
| SoundSpaces Chen et al. (2020a) | 71.00 | 67.20 | 51.90 | 5.09 | 34.40 | 27.20 | 16.20 | 10.10 | 0.29 | 0.18 | 0.14 | 15.92 | 2.62 | 2.11 | 1.63 | 14.93 |
| ADAPT | 90.60 | 86.00 | 66.07 | 2.27 | 81.60 | 72.80 | 54.86 | 4.63 | 62.00 | 51.70 | 33.87 | 9.60 | 60.00 | 49.00 | 32.05 | 8.96 |

从表中可见 ADAPT 在 Clean 到局部噪声的成功率从 90.60 经 81.60、62.00 到 60.00，终点距离从 2.27 经 4.63、9.60 到 8.96；MAGNet 在 Clean 有 85.60 但到弥散噪声跌到 0.00，SAVi 和 SoundSpaces 也有类似崩塌；无预言零样本各难度多为 2% 到 5%，有预言的 Qwen3-Omni 各难度约 62% 到 63%。限制是训练基线崩塌部分源于它们原为视觉加声音设计，在纯音频深度和强噪声下不适配，不能解读为这些方法在原任务上不行；有预言结果因用了真实方位距离，不能当可部署提升。

### 适配器、奖励和动作历史各自补了什么

原文在最难局部噪声下做消融。只做监督微调时，无适配器无历史成功率 52.07%，只加历史到 58.73%，只加适配器到 53.27%，两者都加到 62.93%，路径效率、动作效率和终点距离同步改善，说明适配器改善了对声音深度观测的利用，历史提供了轻量时序上下文。强化学习消融在相同适配器和历史配置下对比转移感知与测地奖励，转移感知在各配置下都更好，无历史时增益最大，说明位置朝向反馈对学好旋转尤其有用；两者叠加再加历史达到 67.40% 的成功率、56.51% 的路径效率和 7.54 米的终点距离。动作历史只放动作文本，不含观测和碰撞结果，没有引入额外记忆模块。

需要保留的未胜出项是：只用测地奖励时即使有适配器和历史，成功率仍明显低于用转移感知的对应配置；在强弥散噪声下方向估计的中位误差约 10 度但均值超 25 度，呈重尾分布，多数预测准确、少数灾难性错误拉高均值。适用条件是结论只在固定动作几何、前进 1.5 米和转弯 18 度下成立，换连续控制或不同离散化需要重建动作图。代价是强化学习需要特权占用图做反向搜索和分段校准的奖励查询，训练成本高于纯监督微调。

### 噪声变强时方向估计和导航如何退化

方向估计随弥散噪声信噪比从 20 分贝降到负 10 分贝单调变差，细粒度对准先受损，粗对准相对稳；反直觉的是 Propagation 的平均绝对误差 25.03 度好于 Clean 的 35.45 度，中位误差 10.93 度也好于 Clean 的 13.23 度，作者解释为带噪训练的适配器对扰动声场校准更好，对理想直达声反而有域偏差。导航在固定信噪比下从 10 分贝成功率 67.10% 降到负 10 分贝 31.20%，终点距离从 7.89 米升到 18.39 米，中等噪声下仍可用，极低信噪比下方向信息被严重破坏。主评测的弥散噪声是每回合随机信噪比的分布结果，不是单点信噪比，解读时不能把分布平均当成某固定分贝的能力。这些分析都只在同一啁啾信标和同一校准下成立，换信号或换底噪谱需要重测。

### 仿真、信标和特权监督带来哪些边界

作者明确把工作限定在高保真仿真，而非真机部署。仿真虽有杂乱布局、动态人和设备、几何相关传播、弥散底噪和局部机器声，但不能复现真实麦克风通道失配、标定漂移、传感器噪声和未建模声动态，真机验证仍待做。信标是跨场景固定的周期啁啾，局部设备用代表性循环，这去掉了语义识别的混杂、突出空间感知，但真实工厂可能有间歇目标、未见波形和与信标更相似的干扰，扩展需要多样化波形、数量、声级和时间模式。

专家演示和转移感知都用了仿真特权信息做专家动作和动作空间进展信号，部署时不给策略，这证明特权信号可蒸馏为观测驱动策略，但前提是训练时能拿到这些信号，无图奖励估计、连续控制和在线适应仍待扩展。零样本基线因无原生 4 通道接口而把 4 通道拆成 4 个单声道输入，结果应理解为当前空间音频能力的诊断，而非未来空间原生大模型的上限。

来源方面，本次未发现可验证的公开代码模型数据绑定，不能声称已开源，这不是技术缺陷，只是复现时需要自行实现。

### 要复现第一步先对齐什么

复现先对齐动作几何和评测规则：前进 1.5 米、左右转 18 度、停止终止、成功半径 1.5 米、最大 100 步、严格停止要求在半径内发出停止；指标按成功率、路径效率、动作效率和终点距离四件套算，最短路径和最少动作数都用仿真可通行信息算，失败回合前两项记零。再对齐声音：48 千赫采样、每 1024 点 1 帧、每决策步录 24 帧共 24576 点约 0.512 秒，4 通道按 W、Y、Z、X 的 ACN 顺序存，目标啁啾固定，背景在 500 到 900 赫兹频带内按名义信噪比校准，局部源经同一传播管线渲染。

训练按 3 段走：先冻结主干只训适配器和方向头，再冻结塔只训适配器加低秩适配器做监督微调，最后冻结主干和适配器只训低秩参数、残差动作头和评论家头做强化学习，评论家暖机达标后再联合优化。关键超参数保留原文：监督学习率 1e-4、强化学习语言低秩 1e-5、值头 1e-3、残差头 1e-6，折扣 0.99、优势估计 0.95、截断 0.2、熵 0.01、值损失 0.5、松弛负 0.01、成功系数 10、势系数 1、散度目标 0.06。硬件原文用 H200， rollout 为每环境 16 步乘并行数乘 2 块，16 个小批量、微批量 10。

### 什么时候值得试、还缺哪项验证

当工厂确实要关灯运行、目标能配显著声信标、机器人已有深度避障时，这条只用声音定方向、深度定通行的路线值得试，尤其在中等弥散噪声和有局部设备 hum 的走廊场景。复现第一步是先跑通 Clean 和 Propagation 的监督策略，确认方向中位误差约 10 度量级且能严格停止，再开强化学习加转移感知。还需要补的验证是真机麦克风和深度噪声下的闭环、间歇或频谱更相似信标下的抗混淆、以及不同动作离散化和连续控制下的奖励图重建。

容易误解的是：有预言零样本的六成成功率不是可部署性能，它用了真实方位距离；训练基线在强噪声下接近零不代表它们在原视觉任务上弱，只代表在纯音频深度强干扰下不适配；中位误差小不等于没有大错，重尾意味着仍需失败兜底。总体上，论文直接报告的是仿真内显著信标下的可靠导航，证据支持声音加深度互补和动作一致奖励的增益，超出该信息条件和声学分布的推广仍待验证。

<details>
<summary>📎 论文与评分元数据</summary>

排名：前50% | 文档类型：方法研究 | [arXiv 原文](https://arxiv.org/abs/2610.15956v1)

</details>

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。

- 评分规则：type-aware-v1

- 评分模型：muse-spark-1.3-contributor

- 评分请求协议：openai_responses

---

[← 返回 2026-10-15 语音/音乐/音频论文速递](/audio-paper-digest-blog/posts/2026-10-15/)
