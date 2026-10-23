---
title: "CAVC: Convergence-Adaptive Audio-Visual Cache for Modality-Asymmetric Diffusion Generation"
date: 2026-10-23
draft: false
tags: [音视频生成, 动态计算与早退, 音视频, 高效推理]
categories: [论文速递]
description: "针对文本生成同步音视频时每步都要联合去噪成本过高的问题，CAVC 在检测到音频预测进入可缓存区间后只复用音频去噪输出并跳过跨模态注意力、让视频继续精修，最后恢复几步联合去噪，在三套基准上实现 1.10-1.35 倍实测加速并改善部分动态指标。"
hiddenInHomeList: true
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_arxiv_id: "2610.30854"
paper_digest_workbench_contract: "researcher-workbench-v1"
paper_digest_reader_title: "只缓存音频、保住视频：CAVC 的不对称加速"
paper_digest_original_title: "CAVC: Convergence-Adaptive Audio-Visual Cache for Modality-Asymmetric Diffusion Generation"
paper_digest_arxiv_version: 1
paper_digest_arxiv_versioned_id: "2610.30854v1"
paper_digest_arxiv_abs_url: "https://arxiv.org/abs/2610.30854v1"
paper_digest_arxiv_pdf_url: "https://arxiv.org/pdf/2610.30854v1.pdf"
paper_digest_primary_task: "音视频生成"
paper_digest_tags_contract: "paper-tag-flat-tags-v2"
paper_digest_tags_selection_contract: "paper-tag-selection-v2"
paper_digest_tags_registry_version: "paper-tag-catalog-v2"
paper_digest_tags_registry_sha256: "cdef54423b5dfc00a1d017ef6639446d2ecd1d9c1acf71c8eb4f6219a46b7ba8"
paper_digest_tags_concepts: [{"facet":"task","id":"task.av-generation","label":"音视频生成"},{"facet":"method","id":"method.dynamic-computation","label":"动态计算与早退"},{"facet":"signal","id":"signal.audiovisual","label":"音视频"},{"facet":"research_focus","id":"research_focus.efficiency","label":"高效推理"}]
paper_digest_primary_method: "动态计算与早退"
paper_digest_score: 6.2
paper_digest_rank_bucket: "前50%"
paper_digest_document_type: "方法研究"
paper_digest_one_sentence: "针对文本生成同步音视频时每步都要联合去噪成本过高的问题，CAVC 在检测到音频预测进入可缓存区间后只复用音频去噪输出并跳过跨模态注意力、让视频继续精修，最后恢复几步联合去噪，在三套基准上实现 1.10-1.35 倍实测加速并改善部分动态指标。"
paper_digest_authors: [{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Lifan Jiang"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Yibo Zhao"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Senlin cheng"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Bolei Xu"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Xiaobo Li"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Can Ye"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Dehai Zhao"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Deng Cai"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Boxi Wu"}]
paper_digest_abstract_sha256: "33765f5dcab05b9ab975a8ade373f76178f82261662b22d40035dd3d9a64e09c"
paper_digest_sidecars: {"citation.bib":{"sha256":"562554e1304a590bb2df6aa5a54d2f430143765d5bd17bde6062fb6a7352f286","url":"/audio-paper-digest-blog/data/papers/2026-10-23/2610-30854/citation.bib"},"citation.json":{"sha256":"90303f6885bcc4d711fdc4591faed17fcf317aaf85ab20702b4e3cb6410ff50c","url":"/audio-paper-digest-blog/data/papers/2026-10-23/2610-30854/citation.json"},"citation.ris":{"sha256":"d4e4709acd80257719ae28bca1d3ec01019b6bb74fa55ee07d1eca637928bbff","url":"/audio-paper-digest-blog/data/papers/2026-10-23/2610-30854/citation.ris"},"rethink-context.json":{"contract":"paper-research-context-v2","sha256":"9aa65977b97bd8e2b46665144be26f9d6c956923efdf530c5f1cb489db515b94","url":"/audio-paper-digest-blog/data/papers/2026-10-23/2610-30854/rethink-context.json"}}
paper_digest_api_reader_contract: "beginner-researcher-v3"
paper_digest_api_reader_article_sha256: "05b19a1419ad8a4cbf542f622b195447b5be357b8fefe4e2780f3c924f0351cf"
paper_digest_api_reader_plan_sha256: "755ba8cc0aea7748ed715fe0d7eda1be5c9b420c3fb0b9fea68f298d5c61e591"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings-v4"
paper_digest_api_reader_source_bindings_sha256: "c6236ff536562f9f9403f66cbae717358e4d698b0bff46cb65cb8bd197b8b67c"
paper_digest_api_reader_source_table_count: 4
paper_digest_api_reader_source_formula_count: 5
paper_digest_api_reader_structured_artifacts_sha256: "5797a70cc232a68a8650c9caf6005670c5d51c981fd91b7196f363c5b89eec36"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity-v1"
paper_digest_api_reader_author_identity_sha256: "7a99063b6e3cdf894cba41dd2876425f34f75174ba4ddfff7278e034c3cda364"
paper_digest_api_reader_author_count: 9
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity-v1"
paper_digest_api_reader_resource_identity_sha256: "3b22327d766b35ef188ce243a89be7c520b61da08408374b110c5a86d64a16f4"
paper_digest_api_reader_resource_count: 0
paper_digest_api_reader_figure_persistence: "ephemeral-no-persisted-figure-assets-v1"
paper_digest_api_reader_decision_projection: "api-reader-decision-projection-v2"
---

# 📄 只缓存音频、保住视频：CAVC 的不对称加速

> 英文题目：*[CAVC: Convergence-Adaptive Audio-Visual Cache for Modality-Asymmetric Diffusion Generation](https://arxiv.org/abs/2610.30854v1)*

<!--paper-tag-hierarchy-v1:start-->

**研究分类**

- **研究任务**：[音视频生成](/audio-paper-digest-blog/papers/?concept=task.av-generation)
- **研究方法**：[模型压缩](/audio-paper-digest-blog/papers/?concept=method.compression) → [动态计算与早退](/audio-paper-digest-blog/papers/?concept=method.dynamic-computation)
- **信号**：[音视频](/audio-paper-digest-blog/papers/?concept=signal.audiovisual)
- **研究重点**：[高效推理](/audio-paper-digest-blog/papers/?concept=research_focus.efficiency)

<!--paper-tag-hierarchy-v1:end-->

> 评分：**6.2/10** | 创新 1.2/2 | 技术严谨 1/1.5 | 实验充分 1.1/1.5 | 清晰度 0.8/1 | 影响力 0.8/1.5 | 开源 0/1.5 | 可复现 0.3/0.5 | 工程/实践 1/1.5


## 👥 作者与机构

- Lifan Jiang：机构信息未能在本次解析中与作者逐人可靠绑定
- Yibo Zhao：机构信息未能在本次解析中与作者逐人可靠绑定
- Senlin cheng：机构信息未能在本次解析中与作者逐人可靠绑定
- Bolei Xu：机构信息未能在本次解析中与作者逐人可靠绑定
- Xiaobo Li：机构信息未能在本次解析中与作者逐人可靠绑定
- Can Ye：机构信息未能在本次解析中与作者逐人可靠绑定
- Dehai Zhao：机构信息未能在本次解析中与作者逐人可靠绑定
- Deng Cai：机构信息未能在本次解析中与作者逐人可靠绑定
- Boxi Wu：机构信息未能在本次解析中与作者逐人可靠绑定

## 📌 核心摘要

文本到音视频生成需从一段文字同时合成语义一致的视频与时间同步的音频，难点是音频与视频双分支去噪及音频到视频、视频到音频的跨模态注意力在每个采样步都要重复执行。论文观察到模态非对称可恢复性：中段缓存引入的音频侧漂移可用末端少数联合去噪步骤大幅减少，而视频侧缓存则造成运动与时间细节的持续损失。为此提出收敛自适应音视频缓存（Convergence-Adaptive Audio-Visual Cache，CAVC），先做完整联合热身建立场景布局与跨模态绑定，再在线监测音频去噪器输出的变化量以判断是否进入可缓存区间。当变化量持续低于阈值则触发缓存，复用缓存的音频输出并跳过音频分支与跨模态注意力，视频分支继续独立细化，最后恢复完整联合去噪以减少漂移。在General-80上，相对完整音视频基线Full AV，CAVC加速比（Speedup）从1.00×提升至1.20×，提升20.0%。在同一General-80与同一基线Full AV对照下，动态程度指标Dynamic Degree从0.3800升至0.512，涨幅为34.7%。结论适用于音频模式较平稳且末端联合步数充足的场景，连续变化的多事件声音会推迟触发而接近基线耗时，快速多事件场景仍可能残留同步偏移。原文未披露训练、推理或部署成本。

## 🔗 开源与复现资源

本次未形成可展示的已核验资源记录，开放状态尚未核实。

可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 文本到音视频生成的输入输出是什么

这篇论文研究的任务是文本到音视频联合生成。输入是一句文本提示词，输出是两部分：一串视频帧和一段与之在语义和时间上对齐的音频波形。读完要抓住的约束是，视频不仅要好看、连贯，音频不仅要可听、符合描述，两者之间还要同步，例如口型与说话声对上、动作与声响同时发生。

基座是文本条件的双流音频视频扩散模型。去噪从高噪声的 t=T 逐步走向 t=0，视频隐变量与音频隐变量在每一步都经过各自的去噪分支预测，再经调度器更新。2 分支之间用音频到视频和视频到音频的跨模态注意力耦合，这是语义绑定和同步的来源，也是推理开销的主要来源。

下面这张总览图先建立直观印象：左侧展示生成帧与波形峰谷的对齐，右侧展示质量效率权衡，右下展示计算重分配的 3 段划分。先看图再读方法，会更容易理解哪部分计算被省掉、哪部分被保留。

> **看图路径：** 1. 先看左侧两组视频帧与下方波形的彩色连线，确认峰与谷时刻如何对应口型与动作；2. 再看右上雷达图中基线与 CAVC 多边形的相对位置，区分速度与质量维度；3. 最后看右下三段计算示意，确认哪一段跳过了音频去噪与跨模态注意力

[![原论文 Figure 1：A: CAVC generates high-fidelity video frames synchronized with complex audio waveforms.](https://arxiv.org/html/2610.30854v1/teaser.png)](https://arxiv.org/html/2610.30854v1/teaser.png)

*论文图 1。原论文 Figure 1:：“A: CAVC generates high-fidelity video frames synchronized with complex audio waveforms.”。*

这张图左侧上下两组例子把视频帧与波形画在一起，彩色竖线标出波峰波谷时刻与对应帧，可以看到人物说话口型与狮子吼叫幅度变化与波形起伏对应。右上雷达图对比基线与 CAVC 在推理速度、视频动态、同步等多维的相对位置。右下则把完整预热、缓存延续、末端联合精修 3 段画成方框，明确只有中间段跳过音频去噪与跨模态注意力。

### 已有加速路线为何不直接适用

论文把相关工作分成 3 类。第一类是音视频扩散生成本身，例如双分支加稠密跨模态注意力的结构，以及用隐变量对齐器增强细粒度同步的改进。这类方法默认每步都执行双分支和跨注意力，效果好但每步成本高。

第二类是通用的扩散加速，包括更好的常微分或随机微分方程求解器、知识蒸馏做少步生成，以及训练无关的相邻步特征缓存。直接把整条轨迹缩短，会同时压缩视频的时空精修，容易损伤细节和动态；不加区分的缓存则把音频和视频同等对待。

第 3 类是模态无关的特征缓存，例如缓存高层特征、演化调度或自适应视频缓存。论文认为它们忽略了两个模态在去噪中的不同角色。CAVC 的差异正在于此：它不缩减视频所需的步数，只近似可恢复的音频侧计算，并保持视频精修轨迹不变。

### 论文要回答的核心问题是什么

核心问题是：是否每一步都需要完整的音频视频联合计算。论文的回答不是猜测音频数值收敛更快，而是提出模态不对称可恢复性。含义需要准确理解：中间段缓存引入的音频侧漂移，可以被末端几步联合去噪大幅减小；而缓存或冻结视频分支造成的运动与时序细节损失，即使再做短暂末端联合也难以恢复。

这个判断来自分支冻结消融：一旦冻结视频分支，虽然原始加速比很高，但视频动态严重下降；只缓存音频则能保住视频精修，并从联合微调中受益。换句话说，加速必须把近似放在音频侧，严格保留视频分支的活跃计算，最后再短暂恢复联合去噪。

论文还用条件扰动分析刻画缓存音频残差与纯视频残差如何影响与完整采样器的偏离，并在局部光滑假设下给出界。作者明确这只是扰动刻画，不是完美恢复的保证，可恢复性本身靠实验评估。

### 三明治结构如何分配计算

CAVC 是训练无关的框架，计算分配呈三明治结构。第一段是完整音视频预热，在早期高噪声阶段完整执行音频分支、视频分支和跨模态注意力，建立场景布局、音频类别和跨模态绑定。过早解耦会引入末端难以去除的漂移。

**模态不对称可恢复性 × 三明治计算分配：** 模态不对称可恢复性是本文的核心观察：中间缓存造成的音频侧语义漂移可用短暂末端联合步骤大幅修复，而视频侧运动与时序细节一旦丢失则难以修复。三明治计算分配是据此设计的计算安排：开头完整联合预热建立绑定，中间只缓存音频、保住视频，结尾恢复少量联合步骤做同步修正。

中间是触发器加缓存延续。在线监测器跟踪音频预测变化，一旦稳定就激活音频缓存；之后复用缓存的音频去噪输出，旁路音频去噪分支和音视频跨模态注意力，视频分支独立做时空精修。最后是末端联合精修，恢复完整联合去噪几步，减小跨模态漂移、改善同步后再解码。默认末端步数 t_ref=3。

下图把文本提示词经提示词编码器进入双分支、再到视频解码器与音频解码器的全过程画成三框，底部时间轴标出早期联合学习、触发缓存、后期视频精修、末步恢复一致性的分工。

> **看图路径：** 1. 沿底部去噪时间轴从 t=T 到 t=0 看三个方框的先后关系与触发点 tau 位置；2. 对比中间缓存段视频分支与音频分支的箭头实虚，确认谁继续计算、谁被跳过；3. 看音频缓存从冻结到驱动调度器更新的绿色回路，再看末段恢复的跨模态连线

[![原论文 Figure 2：Overview of the CAVC framework.](https://arxiv.org/html/2610.30854v1/pipeline.png)](https://arxiv.org/html/2610.30854v1/pipeline.png)

*论文图 2。原论文 Figure 2:：“Overview of the CAVC framework. The denoising trajectory (t=T\to 0) is dynamically partitioned based on modality convergence.”。*

这张流程图最重要的是看箭头实虚：预热段双分支与跨注意力都是实线全执行；缓存段视频隐变量继续实线推进，音频分支变灰虚线表示跳过，绿色缓存块通过回路驱动调度器更新；末段双分支与跨注意力恢复实线。底部注释点明早期双分支共同学习、中期缓存音频、后期视频仍需去噪、末步恢复注意力以保证一致性。

### 完整联合步骤在算什么

先看未加速的完整采样器在一步内做什么。给定文本条件 c、视频隐变量 v_t、音频隐变量 a_t 和噪声水平 sigma_t，视频分支 f_v 与音频分支 f_a 同时预测各自的去噪输出，两者通过跨模态注意力耦合。

\[\hat{y}_{v}^{t}=f_{v}(v_{t},a_{t},c,\sigma_{t}),\qquad\hat{y}_{a}^{t}=f_{a}(v_{t},a_{t},c,\sigma_{t}),\]

上式中 y_hat_v^t 与 y_hat_a^t 分别是视频与音频的去噪预测，f_v 与 f_a 是两路去噪网络。符号下标 t 表示去噪时刻，t 越大噪声越高。理解这一步是理解后续近似的基础：缓存省掉的正是其中音频分支与跨注意力的重复执行。

随后调度器用各自预测更新各自隐变量，得到 t-1 时刻的状态。

\[v_{t-1}=S_{t}^{v}\!\left(v_{t},\,\hat{y}_{v}^{t}\right),\qquad a_{t-1}=S_{t}^{a}\!\left(a_{t},\,\hat{y}_{a}^{t}\right).\]

这里 S_t^v 与 S_t^a 是视频与音频的调度器更新函数。完整方法要求每一步都执行上述两式，这是开销的来源，也是 CAVC 要选择性跳过的对象。

### 何时触发缓存与缓存后怎样更新

因为不同提示词的音频可缓存性不同，固定触发时刻不是最优。CAVC 对 t<T 的每一步计算当前已执行预测与上一个更高噪声步预测的平均绝对变化，作为是否进入缓存容忍区的经验代理。

\[\Delta_{a}^{t}=\mathrm{mean}\!\left(\left|\hat{y}_{a}^{t}-\hat{y}_{a}^{t+1}\right|\right).\]

上式 Delta_a^t 是音频去噪输出变化量，mean 表示对所有元素取平均，y_hat_a^{t+1}是前一次执行的更高噪声步预测。当该变化量连续 W 个执行步低于阈值 theta 时，在时刻 tau 触发缓存，并存下 y_hat_a^*=y_hat_a^tau。默认 theta=0.30、W=3。

**音频分支 × 视频分支：** 音频分支和视频分支是双流去噪模型中分别预测音频去噪输出和视频去噪输出的两路网络，它们通过跨模态注意力互相看到对方的隐变量。CAVC 不对两路一视同仁：中间段跳过音频分支的前向，只保留视频分支的完整时空精修，因为实验显示音频侧漂移更容易在末端被拉回，而视频侧一旦中断则难以恢复。

进入缓存区间 I 后，音频隐变量不再用新前向，而是复用缓存输出继续走原噪声时刻表更新。

\[\hat{y}_{a}^{t}:=\hat{y}_{a}^{*},\qquad\tilde{a}_{t-1}=S_{t}^{a}\!\left(\tilde{a}_{t},\,\hat{y}_{a}^{*}\right).\]

关键是这里缓存的是去噪器输出而非直接冻结隐变量，因此调度器仍按原 sigma_t 做方差积分，轨迹连续。有效性在附录中讨论，实践合适性靠残差曲线与末端精修消融评估。

同时视频分支独立推进，g_v 表示旁路跨注意力后的视频去噪器，通过残差跳连跳过跨模块，但完整保留视频自注意力、时间注意力和文本条件。

\[\tilde{y}_{v}^{t}=g_{v}\!\left(\tilde{v}_{t},c,\sigma_{t}\right),\qquad\tilde{v}_{t-1}=S_{t}^{v}\!\left(\tilde{v}_{t},\,\tilde{y}_{v}^{t}\right),\]

该设计同时省掉量级为视频 token 数乘音频 token 数的跨注意力，并避免被冻结的音频特征过度约束视频动态。

**音频-视频跨模态注意力 × 视频自注意力与时间注意力：** 音频-视频跨模态注意力负责在每步交换两种模态的信息，计算量随视频 token 数与音频 token 数乘积增长；视频自注意力和时间注意力只在视频内部建模空间结构和帧间运动。CAVC 在缓存段同时旁路跨模态注意力，但完整保留视频自注意力、时间注意力和文本条件，使视频不受已冻结音频特征的牵制而继续演化。

**缓存容忍区 × 在线收敛检测：** 缓存容忍区不是指数值上音频比视频收敛更快，而是指复用音频去噪输出所引入的漂移仍能被末端几步联合去噪明显减小的阶段。在线收敛检测就是进入该区间的判断器：它跟踪相邻已执行步之间音频预测的平均绝对变化，连续多步低于阈值才触发缓存，因此不同提示词的触发早晚不同。

**缓存延续 × 末端联合精修：** 缓存延续指中间段用已存的音频去噪输出驱动音频调度器更新、视频独立去噪的阶段，此时两模态不再交换信息；末端联合精修指最后几步恢复完整双分支加跨模态注意力的阶段。两者组合成三明治结构：前者省掉可恢复的音频计算并释放视频动态，后者负责减小累积的跨模态漂移、改善同步后再解码。

### 有无训练与实际执行的计算

本文方法不需要训练，这一点要明确说清：没有更新双流扩散主干的权重，没有蒸馏学生模型，也没有学习额外的价值评估模型或辅助分数模型。论文标题中的缓存完全是推理期行为，基座是 LTX-2.3-22B-dev 加官方蒸馏 LoRA，原样冻结使用。

实际执行的计算是推理调度层面的重排。每步仍要做视频分支前向与调度器更新；在触发前还要做音频分支、跨注意力以及极轻量的变化量检测；触发后省掉音频分支与跨注意力，只保留视频计算与缓存输出驱动的音频调度器更新；最后几步恢复完整联合前向。检测开销远小于音频分支加跨注意力，因此净节省来自中间段跳过的音频侧计算。

无训练不等于输出确定。生成仍从随机隐变量出发，受采样种子、分类器引导与调度器随机性影响。论文固定去噪步数与种子做可比评测，但不应把单次结果推广为确定性保证。

### 在什么基座与基准上评测

实验基座统一为 LTX-2.3-22B-dev，配官方蒸馏 LoRA 与空间上采样器，去噪步数 30，种子 100，在单张 NVIDIA H20 上逐样本生成并开启 CPU 卸载。AVGen-Bench 与 VABench 采用 704 乘 1280、241 帧、24 帧每秒，General-80 采用 1024 乘 1536、121 帧、24 帧每秒。对比方法包括完整联合基线 Full AV，以及 Cache-DiT 与 TeaCache 两种可运行的通用缓存基线。

评价覆盖视觉质量、低层无参考诊断、自动化音频质量、大模型评分、音视频对齐与物理合理性。视觉侧用 VBench 的 6 维实现，动态度衡量运动存在比例，不单独等同整体观感；音频侧用 DNSMOS 整体 MOS 估计与 CLAP 文本音频余弦相似度；对齐侧用基于起点的 AV-F1 诊断与 SyncFormer 偏移映射后的同步分。指标方向为标注箭头所示，高为好或低为好需按表头区分。

General-80 的构成需要先讲清，它决定结论的适用范围。该集合共 80 条提示词，包含通用 40 条与难例 40 条，难例按 8 类各 5 条划分，覆盖语音口型、音乐音高、环境声、物理事件同步、动物发声、机械声运动、人群氛围与多事件场景。

| Split or AV-hard category | Prompts |
| --- | --- |
| General | 40 |
| Speech and lip synchronization | 5 |
| Music and pitch | 5 |
| Environmental sound | 5 |
| Physical-event synchronization | 5 |
| Animal vocalization | 5 |
| Mechanical sound and motion | 5 |
| Crowd ambience | 5 |
| Multiple audio-visual events | 5 |
| Total | 80 |

上表说明 General-80 的提示词分布：通用部分 40 条保证 broad 视觉覆盖，难例部分按语音、音乐、环境、物理、动物、机械、人群、多事件 8 类各 5 条，保证可观察声源与事件时刻的平衡。后续主结果的提升必须放在这种通用加难例混合的分布下理解，不能直接推广到任意长视频或任意声学分布。

### 视觉质量与加速如何权衡

要回答的主问题是：在实测加速下视觉动态与低层统计是否受损。比较条件是同一基座、同一生成规格与同一硬件上的实测耗时，加速比以完整联合为 1.00 倍基准。通用缓存基线在该长帧设置下因缓存状态估计与更新开销反而出现低于 1 的减速，这解释了为何不能只看理论跳步数。

下表对比视觉质量与低层统计，箭头表示动态度越高越好、闪烁越低越好。重点看 CAVC 行相对完整联合的变化百分比与加速列。

| Benchmark | Method | Speedup ↑ | Dyn.Deg ↑ | Flicker ↓ |
| --- | --- | --- | --- | --- |
| AVGen-Bench | Full AV | 1.00× | 0.655 | 0.3346 |
| AVGen-Bench | CAVC (Ours) | 1.10× (+10.0%) | 0.6701 (+2.3%) | 0.2800 (-16.3%) |
| General-80 | Full AV | 1.00× | 0.3800 | 0.3346 |
| General-80 | CAVC (Ours) | 1.20× (+20.0%) | 0.512 (+34.7%) | 0.263 (-21.4%) |

从表中可见，CAVC 在 AVGen-Bench、General-80 上分别实现约 1.10 倍、1.20 倍的实测加速。动态度在 General-80 上提升约 34.7%，闪烁在 AVGen-Bench 上下降约 16.3%，自然度与时间一致性等多项时序统计持平或改善。代价是美学质量等个别维度基本持平，说明省掉中间音频计算后视频分支的独立演化释放了部分运动表达，但不能理解为所有感知质量全面超越。

下图以猫在院子里玩球为例展示 4 种方法的帧与波形，CAVC 行能看到完整的猫与球，而通用缓存与基线行出现空景或人物遮挡等跟随问题。该例子还报告 CAVC 约 1.15 倍加速，而通用缓存因额外估计开销出现净开销。单例只能说明该提示词下的行为，不能代替 3 套基准的统计结论。

> **看图路径：** 1. 逐行对比同一提示词下四种方法的首帧是否有猫与球，判断文本跟随差异；2. 看各行波形彩色段的起伏与对应帧动作是否一致；3. 注意基线与 CAVC 行的人物与猫的完整性差异，不要只看单帧清晰度

[![原论文 Figure 4：Qualitative comparison of audio-visual joint generation.](https://arxiv.org/html/2610.30854v1/visual.png)](https://arxiv.org/html/2610.30854v1/visual.png)

*论文图 4。原论文 Figure 4:：“Qualitative comparison of audio-visual joint generation.”。*

这张定性对比图按行排列 4 种方法，每行 6 帧对应下方波形的彩色段。可以看到通用缓存行首尾帧多为空院子、中间帧缺猫，基线行出现人与猫混合但球缺失或被挡，而 CAVC 行各时刻均能看到黑猫低头嗅球且波形起伏与动作段对应。这支持视频精修被保留的解释，但单一样本的视觉判断仍需回到上表的动态度与一致性指标做统计验证。

### 音频保真与音画同步是否保住

第二个主问题是音频与对齐是否因复用旧音频预测而明显变差。比较仍在同一基座与规格下进行，音频指标包括 DNSMOS、CLAP 与大模型打分，对齐包括基于起点的 AV-F1 诊断、同步分与局部物理合理性。AV-F1 是手工的双向起点匹配诊断，不是学习到的语义评价器，这一点必须分清。

下表给出 3 套基准的音频与对齐结果，方向均为越高越好。重点看 DNSMOS 的轻微波动、CLAP 的保持或提升，以及 AV-F1 的改善幅度，基线为同规格的 Full AV。

| Benchmark | Method | Speedup | DNSMOS | CLAP | Aud.Real | Expr. | Vis.Real | AV-F1 | AV Sync | Lo-Phy |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| AVGen-Bench | TeaCache | 0.45× | 1.607 | 0.366 | 4.055 | 4.264 | 4.609 | 0.601 | 0.429 | 3.936 |
| AVGen-Bench | Cache-DiT | 0.24× | 1.676 | 0.418 | 4.068 | 4.319 | 4.566 | 0.614 | 0.249 | 3.911 |
| AVGen-Bench | Full AV | 1.00× | 1.706 | 0.435 | 3.925 | 4.070 | 4.475 | 0.5381 | 0.561 | 3.847 |
| AVGen-Bench | CAVC | 1.10× (+10.0%) | 1.688 (-1.1%) | 0.438 | 4.077 (+3.9%) | 4.294 (+5.5%) | 4.723 (+5.5%) | 0.5650 (+5.0%) | 0.525 (-6.4%) | 3.872 |
| VABench T2AV | TeaCache | 0.64× | 1.324 | 0.294 | 3.912 | 4.392 | 4.468 | 0.659 | 0.549 | 4.503 |
| VABench T2AV | Cache-DiT | 0.35× | 1.399 | 0.366 | 3.918 | 4.386 | 4.497 | 0.652 | 0.470 | 4.455 |
| VABench T2AV | Full AV | 1.00× | 1.383 | 0.359 | 3.678 | 4.072 | 4.309 | 0.5150 | 0.608 | 4.255 |
| VABench T2AV | CAVC | 1.35× (+34.7%) | 1.498 (+8.3%) | 0.359 | 3.965 (+7.8%) | 4.333 (+6.4%) | 4.491 (+4.2%) | 0.552 (+7.2%) | 0.594 (-2.3%) | 4.231 |
| General-80 | TeaCache | 0.39× | 1.197 | 0.313 | 4.188 | 4.575 | 4.812 | 0.688 | 0.563 | 4.350 |
| General-80 | Cache-DiT | 0.20× | 1.270 | 0.379 | 4.225 | 4.562 | 4.812 | 0.682 | 0.493 | 4.263 |
| General-80 | Full AV | 1.00× | 1.306 | 0.284 | 4.000 | 4.160 | 4.620 | 0.5381 | 0.496 | 4.180 |
| General-80 | CAVC | 1.20× (+20.0%) | 1.283 (-1.8%) | 0.324 (+14.1%) | 4.125 (+3.1%) | 4.450 (+7.0%) | 4.650 | 0.644 (+19.7%) | 0.563 (+13.5%) | 4.300 (+2.9%) |

表中 CAVC 的 DNSMOS 在 AVGen-Bench 与 General-80 上分别下降约 1.1% 与 1.8%，在 VABench 上提升约 8.3%，说明声学偏差有限但随数据集而异。CLAP 在 General-80 上提升约 14.1%，其余两套持平或略升。基于起点的 AV-F1 在 3 套基准上分别提升约 5.0%、7.2%、19.7%，表明末端联合有助于把事件时刻重新拉齐。但细粒度同步分在两套基准上有小幅残留下降，说明末端精修大幅减小但未完全消除累积的跨模态漂移。

### 为何只缓存音频而不动视频

消融要验证不对称分配的必要性。做法是分别冻结视频分支、同时冻结音视频、只缓存音频，比较速度与视频动态、对齐的变化。冻结视频能拿到约 3 倍的原始加速，但动态度掉到 0.46 与 0.44 附近，说明中断连续时空自注意力会破坏复杂运动合成。

只缓存音频的配置速度约 1.19 倍，但动态度升至 0.70，相对提升约 59.1%，背景一致性也保持在 0.96 附近。这支持把近似放在音频侧、严格保留视频计算的设计。若反过来为追求更高加速比而动视频，省下的计算是以持续的运动损失为代价的。

触发方式的对比也支持自适应而非固定：固定 80% 时刻才缓存几乎没有加速，固定 20% 过早解耦则基础结构尚未形成，而基于阈值与窗口的动态触发在速度与 AV-F1 上取得更好的操作点。默认 theta=0.30、窗口 3 在平均前向执行索引约 5.5 处触发，取得约 1.18 倍的稳定加速。

### 残差与末端步数说明了什么

理解缓存是否可控，先看经验残差随前向执行索引的变化。上图为音频缓存残差，触发后上升但进入平稳平台，更严格的阈值触发更晚且平台更低；下图为纯视频残差，随步骤稳定并衰减，提示主要跨模态依赖已在预热段建立。纵轴为 L1 距离，横轴为去噪步，虚线为平均触发位置，阴影为离散范围。

> **看图路径：** 1. 看上图三条音频缓存残差曲线从虚线触发点出发后的爬升高度与平台差异；2. 对比最严格阈值对应曲线的触发最晚且平台最低的现象；3. 看下图视频残差随去噪步增加而稳定下降的趋势，理解预热已建立主要依赖

[![原论文 Figure 3：Empirical approximation residuals over the forward execution index k.](https://arxiv.org/html/2610.30854v1/convergence.png)](https://arxiv.org/html/2610.30854v1/convergence.png)

*论文图 3。原论文 Figure 3:：“Empirical approximation residuals over the forward execution index k.”。*

这张图上半 3 条曲线分别对应阈值 0.3、0.5、0.8，可以看到 0.3 的蓝色曲线触发最晚、爬升最缓、平台最低；下半 3 条视频残差曲线都随步数向右下降至接近零。这说明阈值越严、触发越晚，音频复用误差上限越低，而视频侧去掉音频条件后的残差并不随缓存延长而发散，这是敢于旁路跨注意力的经验依据。

末端步数的验证直接检验可恢复性。下表按缓存分支与末端联合步数报告动态、美学、同步与 CLAP，百分比表示从 0 步缓存条件向完整联合闭合的缺口比例。

| Cached Branch | Phase C | Dyn.↑ | Aes.Qual↑ | AV Sync↑ | CLAP↑ |
| --- | --- | --- | --- | --- | --- |
| None (Full AV) | 3 steps | 0.600 | 0.602 | 0.511 | 0.271 |
| Audio (CAVC) | 0 steps | 0.560 | 0.563 | 0.495 | -0.005 (0.0% Rec.) |
| Audio (CAVC) | 1 step | 0.640 | 0.603 | 0.679 | 0.220 (81.5% Rec.) |
| Audio (CAVC) | 3 steps | 0.620 | 0.596 | 0.502 | 0.235 (87.0% Rec.) |
| Audio (CAVC) | 5 steps | 0.620 | 0.596 | 0.566 | 0.247 (91.3% Rec.) |
| Video | 0 steps | 0.360 (0.0% Rec.) | 0.286 | 0.290 | 0.300 |
| Video | 1 step | 0.320 (-16.7% Rec.) | 0.588 | 0.590 | 0.237 |
| Video | 3 steps | 0.360 (0.0% Rec.) | 0.575 | 0.456 | 0.289 |
| Video | 5 steps | 0.360 (0.0% Rec.) | 0.570 | 0.464 | 0.294 |

表中音频缓存 0 步时 CLAP 接近零，恢复 1 步即闭合约 81.5% 缺口，3 步约 87.0%，5 步约 91.3%，说明音频语义能力确实能被短暂重耦合修复。相反，缓存视频后动态从 0.36 出发，加 1 步、3 步、5 步仍在 0.32 到 0.36 之间徘徊，恢复比例为负或零，说明丢失的运动能力无法靠末端几步修复。这组分支相关的恢复行为是全文不对称主张的最直接证据。

### 哪些情况下加速与同步会打折

论文明确了两项局限。第一，最大加速受视频侧计算上限约束。因为视频主干被完整保留以保证视觉保真，省掉的只是音频分支与跨注意力，共享的末端精修与固定解码开销仍在分母中，所以实测增益小于阶段分支级节省。

第二，对持续变化的多事件声学，触发会推迟，效率逐渐接近基线采样器。快速多事件场景的细粒度同步可能残留小幅偏移，增加末端联合步数通常能减小偏移，但要付出边际成本。

还有一个易误解点需要澄清：音频稳定不意味着音频数值上比视频收敛更快。论文反复强调阈值只是进入缓存容忍区的经验代理，理论界也只是给定残差与光滑假设下的扰动刻画，不保证感知指标必然改善，也不排除模式坍缩等失败模式。未胜出的方面包括部分基准的同步分小幅下降与个别美学维度持平，这些都应在复述结论时一并保留。

### 复现第一步要固定什么

复现应从固定生成与评测条件开始。基座用 LTX-2.3-22B-dev 加指定蒸馏 LoRA 强度 0.8 与空间上采样器，去噪 30 步、种子 100，视频与音频的引导与模态缩放按原文配置，精度 BF16，单卡每次生成一个样本并对所有方法开启 CPU 卸载。只有在这些一致后，实测耗时的加速比才可比。

CAVC 自身只需设置收敛阈值 0.30 与窗口 3，末端联合默认 3 步。对比时需保留完整联合、Cache-DiT 与 TeaCache 3 个可运行策略，并按原文的预热步数、残差阈值与多项式系数配置通用基线，不能只与完整基线对比。

需要补充验证的是触发统计与硬件相关性。原文报告默认配置在 AVGen-Bench 与 VABench 上的中位触发索引与缓存比例，以及不同阈值窗口下的耗时，复现时应先检查自己提示词分布下的触发早晚，再谈加速是否达到 1.10 到 1.35 倍区间。

关于来源状态，本次未发现完成 HTTPS 验证的作者资源绑定，因此不得声称代码、模型或数据已公开。应区分三件事：论文提到的链接不等于作者已开源，权重可下载不等于系统可一键运行，本地能跑通才算可运行验证。

### 什么时候值得尝试与还缺什么

当任务是文本到同步音视频、且瓶颈在每步双分支与跨注意力重复执行时，CAVC 值得尝试。它不改结构、不训练，适合已部署双流扩散管线、希望在不缩减视频步数的前提下省掉可恢复音频计算的场景。对音频模式稳定、视频动态要求高的提示词，预期收益更明显。

复述关键步骤可用一句话串起：完整预热建立绑定，在线检测音频预测变化并在稳定后冻结复用，中间让视频独立精修并仍用缓存输出推进音频调度器，最后恢复几步联合精修再解码。记住触发索引是前向执行计数，不是递减的扩散时刻。

还缺的验证包括更广声学分布下的触发鲁棒性、不同硬件与批量下的实测加速稳定性，以及除 AV-F1 与同步分之外的人工听感与同步评价。总体结论的成立条件是原文的 3 套基准、固定基座规格与单卡实测环境，换分布、换步数或换解码器后需重新测量，不能把区间加速比当作普遍保证。

<details>
<summary>📎 论文与评分元数据</summary>

排名：前50% | 文档类型：方法研究 | [arXiv 原文](https://arxiv.org/abs/2610.30854v1)

</details>

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。

- 评分规则：type-aware-v1

- 评分模型：muse-spark-1.3-contributor

- 评分请求协议：openai_responses

---

[← 返回 2026-10-23 语音/音乐/音频论文速递](/audio-paper-digest-blog/posts/2026-10-23/)
