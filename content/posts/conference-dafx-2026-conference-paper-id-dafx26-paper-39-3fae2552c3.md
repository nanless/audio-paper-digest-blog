---
title: "Differentiable Articulatory Copy-Synthesis of Biphonic Singing"
date: 2026-09-13
draft: false
description: "论文把 sygyt 双声复制写成从录音反推声道形状的可微优化问题，用带舌下第二声源和 B 样条声道的 Kelly-Lochbaum 波导在 20 段录音上把对数谱距离相对基线降低 30-38%，代价是每段仍需约 30 分钟离线优化且绝对误差仍在 9 分贝量级。"
tags: ["信号处理", "主观评测", "发声与构音", "歌唱生成"]
categories: ["dafx-2026 论文"]
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_paper_id: "conference:dafx:2026:conference-paper-id:DAFx26_paper_39"
paper_digest_source_kind: conference
paper_digest_conference_id: "dafx-2026"
paper_digest_conference_record_url: "https://dafx26.mit.edu/program/"
paper_digest_conference_pdf_url: "https://dafx26.mit.edu/assets/papers/DAFx26_paper_39.pdf"
paper_digest_api_reader_contract: "beginner-researcher-v3"
paper_digest_api_reader_article_sha256: "3618f24d9020e97d4482bf7cdd35f7fefd89a566f84dc14b3e080b5a32ce2dc1"
paper_digest_api_reader_plan_sha256: "7efe597ce3bbb88358df7c35f9391bf88bc3b5f7672861ff342431c54947072b"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings-v4"
paper_digest_api_reader_source_bindings_sha256: "7a620ea99a395090d492d85e6ba53791f18b7004514eec6a91e1a2d7a1b77ad2"
paper_digest_api_reader_source_table_count: 2
paper_digest_api_reader_source_formula_count: 0
paper_digest_api_reader_structured_artifacts_sha256: "ae2a6cf00153f847f834b02e41e32b82b85b42f0d7cc84ccb45e69fd790e85c1"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity-v1"
paper_digest_api_reader_author_identity_sha256: "2054b6700248c1e5d0549aac99c841c1720c46701c62e417d115cba933961457"
paper_digest_api_reader_author_count: 4
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity-v1"
paper_digest_api_reader_resource_identity_sha256: "ba7d07d3fcec812cc771183b3935bb73aba156a234d432e777eb6248fe9f0c13"
paper_digest_api_reader_resource_count: 2
paper_digest_api_reader_decision_projection: "api-reader-decision-projection-v2"
paper_digest_scoring_contract: "api-scoring-audit-v2"
paper_digest_taxonomy_contract: "paper-taxonomy-flat-tags-compat-v1"
paper_digest_taxonomy_selection_contract: "paper-taxonomy-selection-v1"
paper_digest_taxonomy_registry_version: "paper-taxonomy-v1"
paper_digest_taxonomy_registry_sha256: "15c82a567ce5a55dc1175684ed08b64c158558639d9c8fb822c9587ec32a8778"
paper_digest_taxonomy_concepts: [{"facet":"method","id":"method.signal-processing","label":"信号处理"},{"facet":"method","id":"method.subjective-evaluation","label":"主观评测"},{"facet":"scientific_topic","id":"scientific_topic.phonation","label":"发声与构音"},{"facet":"task","id":"task.singing","label":"歌唱生成"}]
paper_digest_primary_task: "歌唱生成"
paper_digest_primary_method: "信号处理"
paper_digest_score: 5.8
paper_digest_rank_bucket: "前50%"
paper_digest_document_type: "方法研究"
paper_digest_conference_structure: replayable-pdf-layout-v1
---

# 📄 双声泛音靠声道形状算出来：可微波导怎样复制 sygyt

> 英文题目：*Differentiable Articulatory Copy-Synthesis of Biphonic Singing*

> 会议身份：`conference:dafx:2026:conference-paper-id:DAFx26_paper_39`


> ✅ 来源为官方会议 PDF；表格与 Figure 按原文证据绑定。PDF 公式以原页区域图片展示，未冒称作者原始 TeX。

> 会议来源：[官方记录](https://dafx26.mit.edu/program/) · [官方 PDF](https://dafx26.mit.edu/assets/papers/DAFx26_paper_39.pdf)

标签：#信号处理 #主观评测 #发声与构音 #歌唱生成

评分：**5.8/10** | 创新 1.3/2 | 技术严谨 1.0/1.5 | 实验充分 1.0/1.5 | 清晰度 0.9/1 | 影响力 0.6/1.5 | 开源 0.2/1.5 | 可复现 0.3/0.5 | 工程/实践 0.5/1.5

排名：前50% | 文档类型：方法研究

## 👥 作者与机构

- Mateo Cámara：机构信息未能从会议 PDF 纯文本可靠映射
- María Pilar Daza：机构信息未能从会议 PDF 纯文本可靠映射
- Fernando Marcos：机构信息未能从会议 PDF 纯文本可靠映射
- Jose Luis Blanco：机构信息未能从会议 PDF 纯文本可靠映射

## 📌 核心摘要

图瓦sygyt双音歌唱要求在持续低音drone上于1–3kHz内靠声道成形选择性放大单条高次谐波，输入为棚录波形，输出为重合成音频与可解释声道形状，难点是窄带高Q共振对构音微扰极敏感且标准低维参数化难以复现聚焦共振。方法先用YIN估计主基频并在高分辨率谱中检测二次至十次谐波中的激活泛音编号与频率，双轨迹全程固定为后续合成提供激励约束。接着以双Liljencrants-Fant源驱动口腔加鼻腔加舌下管三耦合波导，主源驱动全管、次源在口腔三通结注入泛音能量，经Kelly-Lochbaum散射与空间可变乘性阻尼控制共振峰带宽，管径与阻尼由三次B样条控制点保证连续并允许局部窄收缩。最后以多分辨率频谱加Mel加谐波能量加能量加泛音显著性损失联合Adam端到端优化波导参数，使上一步的管形直接拟合目标频谱。在20段录音的消融评测设置下，全量B样条模型的LSD指标为9.34±0.49 dB，低于无舌下次源条件的LSD指标10.32±0.56 dB。相对逐谐波幅度自由的DDSP谐波加噪声基线，关键差异是以管共振可实现流形约束解空间而非无约束谱控制，相对Pink Trombone式构音链则以B样条柔性表示与次源激励增强泛音区聚焦。该结论适用边界受限于20段棚录sygyt短片段，kargyraa、野外录音与变调滑音联合优化等尚未验证。在AMD Ryzen 7硬件上单段5s约需30min优化，实时推理超出范围。

## 🔗 开源与复现资源

- 演示资源：<https://mateocamara.com/khoomei-supp-materials> → <https://mateocamara.com/khoomei-supp-materials/> — 链接可访问（HTTP 200）
- 第三方资源：<https://dood.al/pinktrombone/> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 输入是什么，输出又必须保留什么？

这篇论文的输入是一段已经录好的图瓦 sygyt 演唱，输出是一组能重新合成出同样声音的发音模型参数，而不是一段任意好听的合成歌声。研究生首先要建立的直觉是，双声意味着同一时刻有两个可听目标：底部是持续的低音 drone 基频，上方是在 1 到 3 千赫兹之间被有意放大的某一根高次谐波。图 1 把这种分层画得很直白，初学者可以把它当作全文的锚点。

论文反复强调的难点在于，泛音不是简单调大均衡器就能得到的，它要求声道形成非常窄的高 Q 共振。传统低维发音体参数难以同时做出又窄又准的峰，稍动一下后舌位置，泛音位置和带宽就漂了。这就是为什么作者要把复制合成写成可微优化问题：让声道形状自己去拟合录音频谱，同时保留管模型的物理可解释性。伴随网站当前可用，地址为补充材料页，第三方 Pink Trombone 演示页当前也可访问，但正文结论不依赖在线试听。

> **看图路径：** 1. 先看横轴 0-5 秒与纵轴 0-4000 赫兹确认这是长时间窄带语谱图；2. 找到底部青色 Drone 基频线与中部黄色高亮泛音脊的上下分层；3. 对比白色虚线标出的泛音区内外谐波亮度差异；4. 观察泛音脊在 h5 到 h6 之间跳变的三个稳态段

[![原论文 Figure 1：Spectrogram of a sygyt performance: h5–h6 overtone selection.](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/c9cb2c7357f1/figure-1.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/c9cb2c7357f1/figure-1.png)

*论文图 1。原论文 Figure 1：“Spectrogram of a sygyt performance: h5–h6 overtone selection.”。*

上图是 5 秒语谱图的像素实证，横轴为时间秒，纵轴为频率赫兹。底部青色虚线是持续的 Drone 基频，中部黄色高亮脊是在 1000 到 1300 赫兹附近跳变的被选泛音，白色虚线框出泛音区。图中标注 F2 约等于 F3，含义是第二与第三共振峰靠拢形成窄峰去托起当前谐波。这种低音持续加单根谐波被放大的双层结构，就是后文所有损失和指标要同时保住的东西，丢掉任一层都不算复制成功。

### 前人从磁共振和合成两条线告诉了什么？

声学分析线先回答泛音从哪里来。早期工作把泛音解释为靠得很近的共振峰，把带宽压到约 20 赫兹量级，后续用动态磁共振加录音棚录音的工作进一步主张，sygyt 大体可用单声源加精确声道滤波的线性模型解释，而不需要额外非线性声源。另一支用主成分分析连接长期平均谱与发音变化的工作，则说明 sygyt 谱对舌后部微小调整极敏感。这些都是描述性结论，没有给出可求导、可反推的合成器。

合成线则分为手工共振峰合成、源滤波器改造和发音合成 3 类。手工指定共振峰频率和带宽能听起来像，但依赖专家调参；把普通歌声做谱包络改造能得到泛音效果，但不恢复声道形状；TubeTalker 和 Pink Trombone 这类 Kelly-Lochbaum 波导能正向探索发音，但原来是为人手交互设计，不是为从录音做梯度反演设计。论文的切入点正在于此：前人没有用可微发音模型对真实泛音录音做过基于梯度的复制合成，也没有计算验证梯度优化能否恢复文献报道的共振峰合并形状。

### 要解决的逆问题难在哪里？

形式化地说，给定目标录音波形，固定基频轨迹和泛音轨迹，求解口腔与舌下管直径轮廓、空间阻尼轮廓以及两个 LF 声源参数，使合成波形的频谱尽量接近目标。这是一个典型的欠定逆映射：不同声道形状可能产生相近的远端频谱，而目标又依赖窄高 Q 峰，损失 landscape 非线性很强。

举个教学例子而非论文数据：若把 1 到 3 千赫兹的合并峰想成两座要对齐的山，低维发音链好比只能前后平移整座山脉的手柄，B 样条好比给了多段可弯曲的山脊线，前者保证形状像人，后者才有机会把两峰对到同一根谐波上。论文要验证的正是这种灵活性是否带来可测量的谱改善，以及学出的形状是否与磁共振看到的后舌收缩一致。

### 整体管线如何从录音走到可解释参数？

管线分 3 步走。第一步是预处理定调：用 YIN 估主基频，用高分辨率短时傅里叶变换在 H2 到 H10 之间按 6 分贝每倍频滚降的期望做增强量检测，超过 6 分贝才判为激活泛音，再加迟滞与平滑防止谐波号乱跳，得到固定不变的 f0 与 fot 轨迹。第二步是可微合成：主声门源驱动 44 段口腔管，舌下第二源经 15 段舌下管在口腔第 9 段汇入，鼻腔 28 段在第 17 段经软腭耦合，全部在 16 千赫兹采样下用 JAX 逐样本仿真。第 3 步是端到端优化：每个录音独立从单次随机初始化出发，用 Adam 优化声道与声源参数，最多 500 步，取训练损失最低的迭代输出指标。

**发音复制合成 × 可微数字信号处理：** 发音复制合成负责定义任务：给定一段 sygyt 录音，反推出能重新合成出同样频谱的声道形状和声源参数；可微数字信号处理负责给出手段：把波导传播、散射结和 LF 声源都写成可用梯度求导的计算，使声道直径和阻尼可以直接对重建损失求梯度并用 Adam 更新，二者组合把原来只能正向试凑的发音模型变成可从音频端到端拟合的逆问题求解器。

这种安排把可解释性留在了模型结构里，而不是损失里。损失只管谱像不像，形状像不像人由波导和 B 样条基保证，合并峰是否出现则作为优化后是否涌现的现象来检验，而不是作为硬约束直接规定。

### 波导加 B 样条如何同时保证物理和平滑？

口腔、鼻腔和舌下管都是圆柱段级联，段间反射系数由相邻面积差决定，阻尼以乘性系数作用于左右行波。标准模型是全局统一阻尼，本文改成每段可学，范围限制在 0.99 到 0.9999 之间。值越接近 1，能量保留越多，共振越尖；值偏小则耗散大，共振变宽。物理上它对应黏性边界层、热传导和软组织吸收沿声道的差异。

直径与阻尼都不直接按段自由优化，而是各用 20 个 3 次 B 样条控制点经基矩阵插值到段中心。发音链对照每帧约 13 个自由度，B 样条每帧约 70 个自由度，但后者因基函数光滑仍保持 C2 连续。两个三叉结分别处理舌下汇入和鼻腔耦合，其散射由 3 分支面积按公式决定。两套参数化共享同样的主次声源模型、损失与优化器设置，唯一差别是声道形状与阻尼的控制方式，这为公平比较打下基础。

**Kelly-Lochbaum 波导 × 3 次 B 样条参数化：** Kelly-Lochbaum 波导负责按圆柱段反射系数传播左右行波，提供管共振的物理约束；3 次 B 样条参数化负责用 20 个均匀 knot 上的控制系数经基矩阵插值得到每段直径和阻尼，保证 C2 连续，二者搭配的理由是逐段自由优化会产生不连续的非物理形状，而发音链自由度又太低难以形成窄共振，B 样条在物理合理和平滑可优化之间取中，新增作用是让优化器能形成后舌 constriction 所需的窄峰。

### 第二声源与可变阻尼各自管什么？

主次声源都用可学的 Liljencrants-Fant 波形，参数包括相对主源的幅度、张力、开放商偏移和谱倾斜偏移，次源频率 fot 在优化时固定。作者明确把舌下分支当作声学抽象，而非字面解剖主张：它提供单管模型没有的额外谱自由度，用来研究双声所需的附加共振机制。论文讨论节也承认，部分双声泛音未必来自独立振动结构，该分支只是可控物理系统之一。

空间可变阻尼则提供细粒度 Q 值控制。优化器可以在泛音频率附近选高阻尼系数以锐化共振，在别处选低值以压住竞争峰。学出的代表性轮廓显示，舌下结附近阻尼较低以隔离前后腔，前腔阻尼较高以维持 1 到 3 千赫兹窄带共振，舌下支整体阻尼较低以降低耦合。这种形状收缩加结阻尼隔离加前腔谐振的分工，是后文解释谱聚焦机制的关键。

**舌下第二声源 × 空间变化阻尼：** 舌下第二声源负责在舌下管注入固定的泛音频率 fot 激励，提供除声门主源之外的第二个谱自由度；空间变化阻尼负责给口腔和舌下每段学习 0.99 到 0.9999 之间的衰减系数以控制 Q 值，搭配理由是仅靠形状难以同时压住竞争共振和锐化目标泛音，新增作用是前者在三叉结处与主管相互作用产生单管没有的谱特征，后者在前腔维持高 Q 窄带共振而在结附近增大耗散以隔离能量。

### 没有神经网络训练时，什么在更新、梯度从哪里来？

本研究没有训练通用神经网络权重，每个音频文件都是独立优化问题。需要更新的是当前文件的逐帧声道 B 样条系数与全局声源参数，需要冻结的是预处理得到的 f0 与 fot 轨迹、STFT 窗长与 mel 带数等计算配置。梯度路径是完整的：从重建损失经多分辨率 STFT、mel 谱、谐波能量、泛音显著性等可微度量，反向穿过逐样本波导仿真、散射结与 LF 声源生成，直达直径与阻尼控制点。

损失由五项等权相加，权重均为 1.0，包括多分辨率 STFT 损失、80 带 mel 损失、f0 整数倍处谐波能量损失、能量相关项与泛音显著性损失。其中泛音显著性先在目标谐波 1/2 宽 50 赫兹带内算能量与相邻谐波带能量比的对数，再取合成与目标的平方差。优化用 Adam，学习率 5 乘 10 负 3 次方，前 100 步从 5 乘 10 负 4 次方热身，梯度裁剪范数为 1.0，共 500 步。热身被原文明确指出用于缓解强非线性波导早期的不稳定。未报告的缺项是损失各项消融，论文把 mel、谐波、能量与泛音项的单独消融留作未来工作。

**共振峰合并 × 泛音显著性损失：** 共振峰合并负责描述 sygyt 的声学目标现象即 F2 与 F3 靠拢形成 1-3 kHz 窄峰去放大某一谐波；泛音显著性损失负责在训练时度量合成与目标在该谐波与其相邻谐波能量比上的平方误差，搭配理由是多分辨率 STFT 和 mel 损失关注全局谱而对窄泛音脊不敏感，新增作用是用以目标谐波为中心 1/2 宽 50 Hz 的显式监督把优化压力集中到泛音区，但论文并未把合并位置硬编码进损失，合并是优化后涌现的解。

### 在什么数据和什么条件下比较？

数据是 20 段图瓦 sygyt 录音，来自两个独立录音棚数据集。HFA 泛音预览集 10 段，覆盖 F3 到降 E4 共 10 个音高，含琶音、音程、音阶与滑音，每段 5.0 秒；Bergevin 集 10 段，来自 4 名歌手 T1 到 T4，平均 4.6 秒加减 1.7 秒。两集原采样 96 千赫兹，下采样到 16 千赫兹后合成。论文强调选多样模式而非堆量，与小众高质量 sygyt 数据的现实相符。

比较条件是三者共享同一套 f0 与 fot 提取、同一损失与同一优化预算。对照包括发音链波导与 DDSP 谐波加噪声基线，后者每帧 318 个自由参数，含 60 个谐波幅度、1 个总幅度与 257 抽头噪声滤波器。评价分 4 层：信号层用对数谱距离与谱皮尔逊相关；客观感知层用 PESQ、CDPAM 与 ViSQOL；主观层用 23 人盲听 MUSHRA 评总体质量与谐波相似度。

泛音区另算 1 到 3 千赫兹带内的能量比、显著性、突出比与倒谱包络峰误差。硬件为 AMD Ryzen 7 中央处理器，每 5 秒片段约 30 分钟，实时比约 360 倍，因此实时应用不在范围。双 f0 检测在全部 20 段都成功，有声帧 99% 判为双声，平均增强量很高，谐波号覆盖 H2 到 H10，符合 sygyt 预期。

### 主结果在多大程度上支持结构化波导？

先提出比较问题：在相同音高轨迹、相同损失与相同 500 步预算下，B 样条波导是否在全局谱距离与泛音区保真度上同时优于低维物理基线与无约束信号基线？指标方向为对数谱距离越低越好，谱相关、PESQ、ViSQOL 与主观分越高越好，CDPAM 越低越好。下表把原文连续句中直接报告的相对改善与共振峰峰位误差放在一起，列数满足宽表要求，数值与单位保留原文写法。

| 数据集与维度 | 评价对象 | B 样条报告值 | 对照方法报告值 | 原文比较结论 |
| --- | --- | --- | --- | --- |
| HFA 录音 | 对数谱距离相对降低 | 30% | 发音链基线 | B 样条误差更低 |
| Bergevin 录音 | 对数谱距离相对降低 | 38% | 发音链基线 | B 样条误差更低 |
| 全部 20 段 1-3 kHz 带 | 倒谱包络峰位误差 | 28 Hz | 发音链 222 Hz，DDSP 120 Hz | B 样条最接近目标 |

上表只用原文连续句逐字覆盖的数字，不做差值换算与四舍五入。表后解释是：B 样条在全部 20 段上都取得最低对数谱距离，标准化均值差 Cohen d 在两集分别约 2.1 与 1.9，Friedman 检验显著，Wilcoxon 显示 B 样条与 DDSP 都显著优于发音链。客观感知指标上 PESQ 与 CDPAM 支持 B 样条，ViSQOL 上 B 样条与 DDSP 都大幅领先发音链，主观总体质量与谐波相似度也是 B 样条最高、DDSP 次之。未胜出项必须指出：泛音区局部谱相关上 DDSP 略优于 B 样条，这与其直接控制每根谐波幅度有关，说明 B 样条赢在全局突出度与谱平衡，而非每根线的局部拟合。

> **看图路径：** 1. 自上而下按 Target、Articulator、DDSP、B-spline 顺序核对四行时间对齐；2. 观察 1-3 kHz 虚线区内泛音脊的连续性与亮度；3. 检查 DDSP 首帧宽带瞬态伪影并记住它已排除在指标外；4. 比较发音链在 2.5 秒附近的垂直宽带条纹与目标的差异

[![原论文 Figure 3：Spectrogram comparison (0–4 kHz) of the same record- ing (h5 ↔h6).](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/c9cb2c7357f1/figure-3.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/c9cb2c7357f1/figure-3.png)

*论文图 3。原论文 Figure 3：“Spectrogram comparison (0–4 kHz) of the same record- ing (h5 ↔h6).”。*

上图四行像素显示同一段 h5 到 h6 切换的 0 到 4 千赫兹语谱。目标行泛音脊连续明亮，发音链行整体偏暗且在 2.5 秒附近出现垂直宽带条纹，DDSP 行首帧有宽带瞬态伪影但原文已将其排除在指标外，B 样条行最接近目标的亮脊与切换时刻。这与对数谱距离排序一致，也解释了为什么听感上 B 样条与 DDSP 接近而都明显好于发音链。

**DDSP 谐波加噪声基线 × 发音链基线：** DDSP 谐波加噪声基线负责提供无物理约束的信号域对照，用 60 个谐波幅度加 257 抽头噪声滤波器直接控制每根谐波能量；发音链基线负责提供物理但低自由度的对照，用约 13 个发音体参数保证人形形状，二者搭配的理由是分别检验直接谱控制与物理结构归纳偏置的价值，新增作用是若 B 样条波导同时优于二者，则说明管共振约束不是负担而是有助于泛音重建的可实现谱先验。

> **看图路径：** 1. 先确认横轴 0-5000 赫兹与粉色 1-3 kHz 泛音带的范围；2. 比较黑色目标与红色 B 样条在 1300 赫兹附近合并峰的位置与高度；3. 观察蓝色发音链虚线在该峰处偏低偏宽的偏差；4. 再看 2700 赫兹附近第二峰的对齐情况以判断全局包络

[![原论文 Figure 6：Cepstral spectral envelopes (Nceps = 30) for the Bergevin T1 segment at t = 1.9 s (midpoint).](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/c9cb2c7357f1/figure-6.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/c9cb2c7357f1/figure-6.png)

*论文图 6。原论文 Figure 6：“Cepstral spectral envelopes (Nceps = 30) for the Bergevin T1 segment at t = 1.9 s (midpoint).”。*

上图是 Bergevin T1 在 1.9 秒处的 30 阶倒谱包络，粉底为泛音带。黑色目标在约 1300 赫兹处有合并峰，红色 B 样条几乎与其重合，蓝色发音链偏低偏宽，绿色 DDSP 位置尚可但峰形略差。原文报告 B 样条峰位误差 28 赫兹、峰突出度 12.0 分贝接近目标 12.4 分贝，支持其更准确恢复 F2 与 F3 合并的判断，但这仍是包络峰位置的证据，不是直接测得共振带宽的证据。

### 拿掉舌下源与可变阻尼会发生什么？

消融要回答架构内两个新增件各自贡献多少。论文做 2 乘 2 析因，在全部 20 段上比较完整版、无舌下源、无空间可变阻尼与两者皆无的最小版，固定 500 步。比较问题是：在相同 B 样条骨架下，次激励机制与细粒度 Q 值控制哪个对重建误差影响更大？指标方向仍是对数谱距离越低越好。下表同样只用原文连续句逐字覆盖的数字。

| 消融与检测条件 | 指标 | 本方法或检出值 | 对照或阈值 | 原文结论 |
| --- | --- | --- | --- | --- |
| 去舌下源 | 对数谱距离增量 | +1.0 dB | 去可变阻尼 +0.1 dB | 次源是更强贡献者 |
| 去可变阻尼 | 对数谱距离增量 | +0.1 dB | 去舌下源 +1.0 dB | 阻尼为次要互补增益 |
| 有声帧双声判定 | 判为双声比例 | 99% | 增强阈值 6 dB | 全部 20 段均检出双声 |
| 泛音增强强度 | 平均增强量 | 37.6 dB | 阈值 6 dB | 远超判定门限 |

表后解释是：去掉舌下源带来约 1.0 分贝恶化，去掉可变阻尼仅约 0.1 分贝恶化，两者皆无最差，且交互有限、可近似看作可分离收益。收敛曲线显示 B 样条虽每帧自由度远多于发音链，但下降速度相当且全程保持更低距离与更高相关，说明灵活性没有以同等预算下更慢收敛为代价。负结果也要保留：阻尼的增益虽一致但很小，不能把谱聚焦的功劳主要归于阻尼；固定音高提取在滑音上仍是限制，原文提到联合优化可修但本次未做。

> **看图路径：** 1. 上下面板分别确认直径与阻尼系数随段索引的变化；2. 找到红色舌下结与紫色软腭虚线标出的耦合位置；3. 观察蓝色口腔直径在 9 段附近的收缩凹陷；4. 对比前腔阻尼回升与结附近阻尼偏低的空间互补结构

[![原论文 Figure 5：Learned B-spline profiles for a representative segment (A3 interval): oral and sublingual…](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/c9cb2c7357f1/figure-5.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/c9cb2c7357f1/figure-5.png)

*论文图 5。原论文 Figure 5：“Learned B-spline profiles for a representative segment (A3 interval): oral and sublingual diameters (top) and dampings (bottom) along the tract.”。*

上图是代表性 A3 音程段学出的直径与阻尼轮廓，蓝为口腔，绿为舌下，红与紫虚线分别为舌下结与软腭，阴影为跨段正负 1 倍标准差。上板在段索引 9 附近可见明显收缩，与磁共振看到的舌后收缩位置一致，且在 20 段中 16 段出现，覆盖 h5 到 h10；下板显示结附近阻尼偏低而前腔阻尼回升，舌下支整体偏低。这种收缩对齐共振峰、结阻尼隔离能量、前腔维持窄共振的组合，是论文主张的声学可解释机制，但原文明确未在损失中加入生理先验，属于优化后涌现的定性一致，不是因果证明。

### 哪些边界会限制结论的推广？

第一是绝对误差仍高。对数谱距离 9 到 15 分贝区间反映简化物理模型拟合泛音谱的内在难度，30 到 38% 是相对基线的改善，不能读成已完美复制。第二是舌下源只是近似，复杂气动声学相互作用未必对应独立振动结构，1.0 分贝消融增益只说明在当前实验设置下它对指标贡献大，不证明生理机制。第三是规模与范围，20 段、5 歌手、10 音高虽来自两独立集且段内标准差小于 0.93 分贝，但仍是精选短片段，未覆盖 kargyraa 等风格与非受控田野录音。

第四是固定音高与 DDSP 对照的不对称，DDSP 用神经编码器而本文用逐帧参数，两者虽都跑到收敛且用同损失，但把舌下机制移植到 DDSP 需非平凡改结构，留作未来工作。第五是成本，离线优化每段约 30 分钟，优化后实时潜力未表征，不能把趋势推广到每步或每组都成立，也不能承诺延迟与误判率改善。

### 要复现应先固定什么、再跑什么？

复现先固定信息条件：16 千赫兹采样、口腔 44 段加鼻腔 28 段加舌下 15 段、舌下结在口腔第 9 段、软腭结在第 17 段、YIN 主频加 H2 到 H10 增强检测、迟滞 3 分贝与 Savitzky-Golay 窗 11 阶 2 平滑、损失五项等权、Adam 学习率与热身与裁剪、500 步取损失最低迭代。先跑双 f0 提取并检查是否接近 99% 双声与高增强量，再跑发音链基线得到高距离起点，再跑 B 样条完整版，最后做 2 乘 2 消融。评价时同时算全局距离与 1 到 3 千赫兹带内能量比、显著性、突出比与倒谱峰误差，并做盲听对照，避免只看单一距离。

还需补的验证是损失项消融、联合优化 f0 与 fot、更大歌手与风格覆盖，以及优化后参数的实时合成延迟测量。代码层面论文基于 JAX 可微波导，第三方 Pink Trombone 页可用于理解 Kelly-Lochbaum 交互，但不能替代本研究的舌下管与 B 样条实现。

### 何时值得尝试这条路线？

当目标是既要像又要能解释时，这条路线值得尝试：需要从真实泛音录音反推可读的声道收缩与阻尼分布，而不满足于直接调谐波幅度的黑盒拟合。它的可迁移启示是，显式管共振约束可以作为泛音重建的有用归纳偏置，即使对照拥有直接谱控制也未必在全局距离上占优。但当数据是长滑音、田野噪声或需要实时运行时，不应直接套用固定音高加离线 500 步的配置。教学上最易误解的是把舌下管当成解剖断言，以及把曲线向下直接读成全程变差。

前者论文已声明为声学抽象，后者应回到收敛图确认是距离下降为好、相关上升为好。收束一句话：B 样条波导用更多但平滑的自由度换来可测量的泛音保真度与可解释的收缩模式，代价是离线成本与简化模型的绝对误差天花板。

## 📐 原文公式与排版

以下展示论文原页中的数学表达区域，保留原始上下标、分式和符号排版。区域序号仅用于本文导航，不是论文公式编号。

[![原文数学表达区域 1，PDF 第 3 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/30d1c4af4b89/figure-1.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/30d1c4af4b89/figure-1.png)

区域 1 · [查看论文原页](https://dafx26.mit.edu/assets/papers/DAFx26_paper_39.pdf#page=3)

[![原文数学表达区域 2，PDF 第 3 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/30d1c4af4b89/figure-2.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/30d1c4af4b89/figure-2.png)

区域 2 · [查看论文原页](https://dafx26.mit.edu/assets/papers/DAFx26_paper_39.pdf#page=3)

[![原文数学表达区域 3，PDF 第 3 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/30d1c4af4b89/figure-3.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/30d1c4af4b89/figure-3.png)

区域 3 · [查看论文原页](https://dafx26.mit.edu/assets/papers/DAFx26_paper_39.pdf#page=3)

[![原文数学表达区域 4，PDF 第 3 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/30d1c4af4b89/figure-4.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/30d1c4af4b89/figure-4.png)

区域 4 · [查看论文原页](https://dafx26.mit.edu/assets/papers/DAFx26_paper_39.pdf#page=3)

[![原文数学表达区域 5，PDF 第 4 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/30d1c4af4b89/figure-5.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/30d1c4af4b89/figure-5.png)

区域 5 · [查看论文原页](https://dafx26.mit.edu/assets/papers/DAFx26_paper_39.pdf#page=4)

另有 21 个候选区域因边界不明确或图片数量、尺寸限制未展开；请[查看完整论文](https://dafx26.mit.edu/assets/papers/DAFx26_paper_39.pdf)中的原始排版。

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。
- 评分规则：type-aware-v1
- 评分模型：muse-spark-1.3-contributor
- 评分请求协议：openai_responses

---

[← 返回 dafx-2026 论文汇总](/posts/conference-dafx-2026/)
