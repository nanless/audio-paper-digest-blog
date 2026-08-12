---
title: "Ex-Omni-2D: Expressive Omni-Modal Dialogue Models with Native Visual Presence"
date: 2026-08-12
draft: false
tags: [音视频生成, 多模态模型, 语音合成, 扩散模型]
categories: [论文速递]
description: "音视频生成 | 6.5/10"
hiddenInHomeList: true
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_arxiv_id: "2608.10720"
---

# 📄 Ex-Omni-2D: Expressive Omni-Modal Dialogue Models with Native Visual Presence

标签：#音视频生成 #多模态模型 #语音合成 #扩散模型

**6.5/10** | 创新 1.2/2 | 严谨 1/1.5 | 实验 1/1.5 | 清晰 0.8/1 | 影响 1/1.5 | 开源 0/1.5 | 复现 0.3/0.5 | 工程 1.2/1.5

✅ **6.5/10** | 前50% | 文档类型：系统技术报告 | 评分置信度：高 | #音视频生成 | #多模态模型 | #语音合成 #扩散模型 | [arxiv](https://arxiv.org/abs/2608.10720)


### 👥 作者与机构

- 第一作者：Haoyu Zhang（The Chinese University of Hong Kong, Shenzhen；脚注说明工作完成于 LIGHTSPEED 实习期间）
- 通讯作者：Tianshu Yu（The Chinese University of Hong Kong, Shenzhen）、Yiwen Guo（Independent Researcher）
- 作者列表：Haoyu Zhang（The Chinese University of Hong Kong, Shenzhen）、Zhipeng Li（LIGHTSPEED）、Xiaoying Tang（The Chinese University of Hong Kong, Shenzhen）、Tianshu Yu（The Chinese University of Hong Kong, Shenzhen）、Yiwen Guo（Independent Researcher）

### 💡 毒舌点评

VTP+多码本语音单元+Prefix Streaming 的组合在系统层面确实打通了“对话→语音→视频”的完整链路，工程完整度明显高于同类工作，这是值得肯定的。但审稿人最想追问的是：所有关键视频条件都是自动标注或教师模型生成的，VTP first-frame grounding 只有 43%，你如何保证这个“视觉规划”不是模型自圆其说的幻觉？E2E RTF 1.293、首个视频块 3.14 秒后才出，恐怕只能叫“增量生成”而非“实时交互”，这个表达上的克制是聪明的，但离真正的交互体验还很远。

### 📌 核心摘要

Ex-Omni-2D 面向“有视觉在场的多模态对话”这一新问题：给定文本/语音查询、参考图和参考音频，生成文本+个性化语音+参考条件视频的协调响应。方法核心是两级中间接口——结构化视觉思维计划（VTP）将对话状态转为显式视觉语义，16 码本语音单元作为语音与视频共享的声学-时间接口，使响应通路与视频通路可分开在异构数据上训练，避免大规模 query-text-speech-video 配对数据的需求。与现有 A2V 和音视频联合生成方法相比，创新在于响应级视觉意图源自对话本身，而非外部波形或人工 prompt。视频侧，全序列 Teacher（50 步）提供高质量离线生成，Few-step 流式 Student 通过 Prefix Streaming 将后续 chunk 的首帧锚定在前一 chunk 的 clean latent 上，缓解长 chunk 累积漂移。在 CommonEval 200 条 query 上 Teacher 取得 Sync-C 4.95、SIM 0.417，Student 4 步推理在四 GPU 上 E2E RTF 1.293、26.5 FPS，展示了明确的质量-效率双操作点。主要局限：VTP 作为规划接口的视觉 grounding 仅 43%，E2E 未达实时，且语音/推理能力相对 Qwen2.5-Omni 仍有差距。

### 🔗 开源详情

未披露。论文未提供代码、模型权重或数据集的公开下载链接；机器摘要中 has_code、has_model、has_dataset 均为未说明。论文给出的项目页面为 https://logo-cuhksz.github.io/Ex-Omni-2D，但未说明该页面是否托管上述资源。

### 🏗️ 方法概述和架构

Ex-Omni-2D 是一个多阶段、多组件协同的 omni-modal 对话系统。整体流程可写为：多模态查询 \(x=(x_t,x_s)\) 与参考图像 \(I_{\text{ref}}\)、参考音频 \(a_{\text{ref}}\) 进入系统后，先由对话骨干（Qwen3-8B + Qwen3-VL-2B 视觉塔）输出内部 VTP \(p\) 与用户可见响应文本 \(y\)；随后语音生成器基于响应隐状态 \(H^\ell_y\)、\(y\) 与参考说话人嵌入 \(s_{\text{ref}}\)，以自回归+残差码本方式输出 16 码本声学单元 \(U\)（共享声学接口）；最后视频生成器以参考图像 VAE 潜码 \(R_{\text{ref}}\)、VTP 文本编码 \(L_{\text{vtp}}\)、帧对齐声学条件 \(A\) 为条件，生成与语音同步的视频。整个框架不是单一端到端联合模型，而是围绕两个中间表示（VTP 与多码本单元）组织的多通路协作系统，语音与视频通路在训练时使用各自可获得的监督数据，推理时通过生成的 VTP 与声学单元流重新连接。

主要组件分四块。第一块是对话骨干与多模态字符接地：文本走 LLM embedding，语音经预训练编码器+投影器（仅训练投影器）映射到 LLM 隐空间，按顺序拼接；参考图像在对话模型侧由 Qwen3-VL-2B 视觉塔编码为 \(z_{\text{llm}}^I\)，在视频生成器侧由 Wan 3D VAE 独立编码为外观参考 \(R_{\text{ref}}\)，这种“同一图像按消费方需求走不同通路”的设计避免了把图像勉强压进单一条件空间。第二块是 VTP 规划：对话输出按带结构化约束的协议 `o=[`<thinking>` p `</thinking>``<response>` y `</response>`]` 生成，\(p\) 含 `first_frame_scene`、`scene`、`emotion`、`movement_style`、`motion_description` 五个字段，原子边界 token+受限解码保证 \(p\) 在 \(y\) 之前完成且可独立路由；VTP 不参与用户可见回复，仅作为后续视频生成的语义条件。第三块是语音生成器与共享声学接口：语音生成器初始化自 Qwen3-TTS-0.6B，以 gated cross-attention 融合文本 token embedding 与响应隐状态，输出 \(N \times 16\) 的码本单元序列 \(U\)；\(U\) 在 12.5 Hz 帧率下产生，每一帧经码本 embedding 聚合+轻量 adapter 投射成声学特征 \(\tilde{a}_n\)，再按 25 FPS 视频帧率复制为两帧 \(A_{2n-1}=A_{2n}=\tilde{a}_n\)，从而得到与视频时间轴严格对齐的声学条件 \(A\)。设计动机是：16 码本单元保留了语音渲染所需信息，但无需完整波形重建-重编码流程，省去 codec 解码/重采样的延迟，并以固定时间速率天然充当视频帧对齐锚点。第四块是视频生成器，含全序列 Teacher 与流式 Student 两种实现。Teacher 基于 Wan2.1-T2V-1.3B 并用 OmniAvatar-1.3B LoRA 初始化，采用 flow-matching 训练，在 DiT blocks 2–15 中将投影后的语音特征按 latent 空间网格 tile 后加到视频 token 上（\(X^{(\ell)} \leftarrow X^{(\ell)} + G^{(\ell)}\)），使用双向时间注意力，50 步去噪，是主要高质量生成实现。Student 为块因果流式模型：每个窗口为 1/12.5s×6 声学帧→12 视频帧的 0.48 秒 chunk，窗口内部 4 latent slots；初始窗口为 \([R_{\text{ref}}, Z^{(0)}_{1:3}]\)，后续窗口为 \([\mathrm{sg}(bZ^{(m-1)}_3), Z^{(m)}_{1:3}]\)，即把上一 chunk 的最后一个 clean latent 经 stop-gradient 作为当前窗口的第一帧，实现跨 chunk 锚定。训练与推理中，中间去噪 forward 只读缓存、不写入 noisy KV；仅当 chunk 完成 clean latent 估计后，才通过 CLEANCache 以 \(t=r=0\) 的 identity forward 将新 latent 写入缓存，且剔除重复 prefix 位置。该设计的关键动机在于：仅靠 KV cache 的全局上下文无法对首帧施加显式 latent-space 边界约束，小边界误差在自回归生成中会累积；把前 chunk 终帧 clean latent 直接放入当前双向去噪窗口，则边界帧在生成时就能看到左右两侧的一致信息。

训练采用三阶段+一蒸馏的结构。Stage 1 用约 800K ASR+1M TTS 合成样本训练 Speech Projector 与 Speech Generator，冻结 LLM/语音编码器/视觉编码器；Stage 2 用 InstructS2S-200K 和 OmniCharacter 数据更新 LLM、Speech Projector 与 Speech Generator，引入 VTP–response 结构化协议并适配共享语音接口到交互式回复；Stage 3 在约 140K 过滤后的 SpeakerVid 剪辑上训练视频生成器，每个剪辑被转换为包含参考图像、VTP 注释、对齐语音单元与目标视频的 avatar-response 记录，使用 flow-matching 视频损失；最后将冻结的 Teacher 通过 flow-map 和 on-policy distribution matching 蒸馏为 few-step 块因果流式 Student。框架级目标为 \(L = L_{\text{lm}} + L_{\text{sp}} + L_{\text{vid}}\)，各损失仅在对应监督可用时启用，不要求完全配对的 query–text–speech–video 数据。

### 💡 核心创新点

1. 提出“对话原生视频响应”（dialogue-native video responses）的新问题：给定文本/语音查询、参考图像与参考音频，生成文本+个性化语音+参考条件视频的协调响应；视觉意图来自对话内容本身，而非外部波形或人工 prompt。
2. 设计结构化视觉思维计划（VTP）作为对话状态到视频语义的显式规划接口。VTP 在用户可见回复前生成，包含 `first_frame_scene`、`scene`、`emotion`、`movement_style`、`motion_description` 五个字段，与回复文本解耦，可独立路由给视频生成器。
3. 提出 16 码本语音单元作为语音与视频共享的声学-时间接口，使响应通路与视频通路可分别在异构数据上训练，避免大规模 query–text–speech–video 配对数据需求。
4. 视频生成侧提出“全序列 Teacher + Few-step 块因果流式 Student”双操作点：Teacher 用 50 步 flow-matching 保证质量；Student 用 Prefix Streaming 将上一 chunk 的 terminal clean latent 作为下一 chunk 的 prefix，缓解长 chunk 累积漂移，支持增量生成。
5. 采用三阶段+一蒸馏的训练结构，各通路损失（语言、语音、视频）在可用监督时独立启用，不假设完全配对数据。

### 📊 实验结果

在 CommonEval 200 条 query 上，全序列 Teacher（50 步）取得 Sync-C 4.95、SIM 0.417；Few-step 流式 Student 使用同一 Prefix-Streaming 检查点，在四 GPU、400×720/720×400 设置下，2/4/8 步推理分别达到 39.5/26.5/15.6 FPS，E2E RTF 为 1.201/1.293/1.932，Sync-C 为 3.51/3.90/4.00。教师模型在 SC、IQ、DD、Sync-C 上均高于学生，但 RTF 26.917 无法用于增量生成。在语音 QA 上，Ex-Omni-2D 在 VoiceBench 的 AlpacaEval、CommonEval、BBH 上分别取得 4.28、3.71、58.70，仅次于 Qwen2.5-Omni。VTP grounding 评估中，first_frame_scene 在参考图像上的得分仅 43.00%，而场景、情感、运动风格、运动描述在生成视频上的平均观察对齐为 85.38%。语音条件接口消融显示，16 码本接口在 Sync-C 4.95 和 0.011 秒条件延迟下优于单码本的 2.07 和波形+wav2vec 的 5.83（但后者延迟 0.051 秒）。

表 1：质量-效率操作点（四 GPU，400×720/720×400）

| 模型 | Steps | SC ↑ | IQ ↑ | DD ↑ | Sync-C ↑ | FPS ↑ | E2E RTF ↓ |
|---|---|---|---|---|---|---|---|
| Teacher | 50 | 94.62 | 67.31 | 72.00 | 4.95 | 1.409 | 26.917 |
| Student | 2 | 93.33 | 52.70 | 9.50 | 3.51 | 39.546 | 1.201 |
| Student | 4 | 93.65 | 57.40 | 32.00 | 3.90 | 26.512 | 1.293 |
| Student | 8 | 93.91 | 61.15 | 48.00 | 4.00 | 15.622 | 1.932 |

表 2：语音 QA 对比（VoiceBench，* 表示使用开源代码复现）

| 模型 | AlpacaEval ↑ | CommonEval ↑ | BBH ↑ |
|---|---|---|---|
| Qwen2.5-Omni | 4.49 | 3.93 | 60.80* |
| Moshi | 2.01 | 1.60 | 47.40 |
| VITA-1.5 | 4.21 | 3.66 | 55.30 |
| Mini-Omni2 | 2.32 | 2.18 | 46.40 |
| SLAM-Omni | 1.90 | 1.79 | 48.80 |
| Ex-Omni-2D | 4.28 | 3.71 | 58.70 |

### 🔬 细节详述

VTP 生成协议：对话模型以 `[`<thinking>` p `</thinking>``<response>` y `</response>`]` 的受限格式输出，其中 `p` 包含五个字段：`first_frame_scene`（首帧场景）、`scene`（整体场景）、`emotion`（情感）、`movement_style`（运动风格）、`motion_description`（运动描述）。通过原子边界 token 与受限解码保证 `p` 在用户可见回复 `y` 之前完成，并可作为独立条件路由给视频生成器，不进入用户可见回复。

共享声学-时间接口：语音生成器输出 16 码本声学单元序列 \(U \in \mathbb{R}^{N \times 16}\)，帧率为 12.5 Hz。每帧经过码本 embedding 聚合与轻量 adapter 得到声学特征 \(\tilde{a}_n\)，再按 25 FPS 视频帧率复制为两帧，形成严格对齐的声学条件 \(A\)。每 6 个声学帧（0.48 秒）触发 12 个视频帧，构成一个 chunk，实现语音与视频的增量同步生成。

Prefix Streaming 机制：Student 视频生成器的每个窗口包含 4 个 latent slots。初始窗口构造为 \([R_{\text{ref}}, Z^{(0)}_{1:3}]\)，其中 \(R_{\text{ref}}\) 是参考图像的 VAE 潜码；后续窗口构造为 \([\mathrm{sg}(bZ^{(m-1)}_3), Z^{(m)}_{1:3}]\)，即把上一 chunk 的最后一个 clean latent 经 stop-gradient 作为当前窗口的首帧。CLEANCache 在 chunk 完成 clean latent 估计后，以 \(t=r=0\) 的 identity forward 写入新 latent，并剔除重复 prefix 位置，避免中间去噪过程对缓存的写污染。

训练与数据：Stage 1 使用约 800K ASR 和 1M TTS 样本训练 Speech Projector 和 Speech Generator，LLM 冻结。Stage 2 使用 InstructS2S-200K 与 OmniCharacter 数据更新 LLM、Speech Projector 与 Speech Generator。Stage 3 使用约 140K 过滤后的 SpeakerVid 剪辑训练视频生成器；每个剪辑被转换为包含参考图像、VTP 注释、对齐语音单元与目标视频的记录。数据过滤管线（Table 16）依次使用 PySceneDetect（场景连续性）、YOLOv8x-face（人脸可见性）、YOLOX-L + DWPose（姿态与运动）、SyncNet（视听同步，Sync-C ≥ 7.0 且 Sync-D ≤ 10.0）、DOVER（视觉质量，≥ 0.5）、OpenCV（曝光/闪烁）、HyperIQA（清晰度，≥ 55）等工具，所有检查全部通过才保留。VTP 注释由 Qwen3-VL-235B-A22B-Instruct 自动生成，语音令牌由 Qwen3-TTS Tokenizer 得到。

蒸馏与优化：Stage 4 分两阶段蒸馏，Phase I 学习 Teacher 的 flow-map，Phase II 进行 on-policy chunked Student rollout 与分布匹配。优化配置使用 PyTorch 2.7.0 / CUDA 12.6；Stage 1/2/3/4 分别使用 8/8/24/40 块 GPU。视频片段按最近长宽比分配到 400×720、720×400、720×720 三个桶，并中心裁剪到精确尺寸；Teacher SFT 使用 125 帧随机窗口，Student 蒸馏使用 121 帧窗口，窗口起点与 12.5 Hz 语音令牌网格对齐。

VTP grounding 评估协议：主协议以“参考图像 + 生成视频”为输入，要求评估者对五个字段逐一打分。`first_frame_scene` 只参考原始参考图像，其余字段参考 9 个生成视频帧（排除重复参考图的第 0 帧）。备选协议使用“第一生成帧 + 生成视频”，结果相近。评估使用 GPT-4o-mini 作为 judge，要求输出二进制分数。

### ⚖️ 评分理由

*   创新性 (1.2/2)：[A_METHOD] 提出对话原生视频响应、VTP结构化视觉规划接口和16码本语音单元共享声学-时间接口，使响应与视频通路可在异构数据上训练并避免大规模配对数据需求，具备系统级新能力，但视觉规划grounding仅43%且视频核心依赖已有Wan/OmniAvatar基础，创新幅度中等。

*   技术严谨性 (1.0/1.5)：[A_METHOD] 多通路协同架构设计完整：VTP受限解码、12.5/25Hz声学-视频帧对齐、CLEANCache prefix streaming和因果块窗口均有明确机制；但VTP grounding仅43%说明规划接口在参考图像上存在明显不可靠性，削弱系统逻辑严密性。

*   实验充分性 (1.0/1.5)：[A_RESULTS] 提供了Teacher/Student多步质量-效率操作点、VoiceBench语音QA对比、VTP grounding双协议诊断和语音条件接口消融，证据维度较全；但语音QA只弱于Qwen2.5-Omni且CommonEval仅200条query，缺少与同类视频对话系统的端到端统一对比和更强统计检验。

*   清晰度 (0.8/1)：[A_METHOD] 方法描述、训练阶段和Prefix Streaming机制均有分块说明，表1/表2与延迟分解使质量-效率关系清晰；但系统涉及LLM、语音、视频多通路与多阶段蒸馏，组件间数据流、损失启用条件和VTP判断协议交错，阅读负担较重。

*   影响力 (1.0/1.5)：[A_SUMMARY] 面向音视频生成和多模态对话的交叉方向，为对话响应增加原生视觉在场提供了可复用的中间接口设计，语音/音频社区可见性较高；但尚无代码模型开源、VTP grounding偏低且E2E未实时，限制其后续直接采用和影响力扩散。

*   开源 (0.0/1.5)：[A_OPEN] 论文未发布核心代码、模型权重或数据资源，也未给出明确的后续开源承诺。

*   可复现性 (0.3/0.5)：[A_METHOD] 披露了训练阶段数据规模、Qwen3-VL-235B自动VTP标注、SpeakerVid七级过滤、四/八GPU配置、flow-matching与蒸馏优化等较多配置，但关键细节仍缺失：如完整超参数、学习率、LoRA秩、精确硬件型号、VTP judge提示、码本embedding/adapter维度等未充分披露，阻碍独立复现。

*   工程/实践价值 (1.2/1.5)：[A_METHOD] 系统级工程完整度高：VTP+16码本单元+Prefix Streaming打通了对话→语音→视频的增量链路，给出Teacher/Student双操作点并在四GPU上实测E2E RTF 1.293、语音和视频延迟分解及多分辨率吞吐；但E2E未达实时且并行扩展有限，工程价值有上限。

### 🚨 局限与问题

- VTP grounding 不足：`first_frame_scene` 的 grounding 仅 43%，说明规划接口在部分情况下并未准确反映参考图像的实际内容，可能使生成视频的首帧与参考图像不一致，或产生“自圆其说”的幻觉。
- 未达到实时交互：四 GPU 四步推理的 E2E RTF 为 1.293，首个可播放视频块需要约 3.142 秒，只能算增量生成而非端到端实时交互。文档中也明确 “streaming” 仅表示增量输出，不表示整体快于实时。
- 语言能力下降：加入 VTP supervision 后，CommonEval 从 3.82 降至 3.71，BBH 从 61.10 降至 58.70，说明 VTP 生成对语言/推理能力有 measurable 的 trade-off。
- 语音/推理能力弱于强基线：在 VoiceBench 上，AlpacaEval、CommonEval、BBH 均低于 Qwen2.5-Omni，尤其 BBH 差距为 2.1 分。
- 对自动标注和教师模型的依赖：VTP 注释、视频条件、数据过滤均使用自动模型，可能引入标注噪声；教师模型生成的蒸馏目标也可能传播错误。
- 并行扩展效率有限：多 GPU 下 Teacher 延迟未随 GPU 数量降低；Student 的八 GPU 配置主要增加吞吐而非降低单请求延迟。
- 开源资源未披露：代码、模型权重和数据集均未公开，影响复现和社区验证。

---

[← 返回 2026-08-12 语音/音乐/音频论文速递](/audio-paper-digest-blog/posts/2026-08-12/)
