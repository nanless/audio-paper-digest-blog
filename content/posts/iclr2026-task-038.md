---
title: "ICLR 2026 - 音视频 论文列表"
date: 2026-05-04
draft: false
tags: ["音视频"]
categories: [iclr-2026]
description: "共 7 篇 ICLR 2026 音视频 方向论文"
hiddenInHomeList: true
---

# ICLR 2026 - 音视频

共 **7** 篇论文

[← 返回 ICLR 2026 总览](/audio-paper-digest-blog/posts/iclr2026-summary/)

---

| 排名 | 论文 | 评分 | 分档 |
|------|------|------|------|
| 🥇 | [OmniCVR: A Benchmark for Omni-Composed Video Retrieval with ](/audio-paper-digest-blog/posts/2026-05-04-omnicvr-a-benchmark-for-omni-composed-video) | 8.5分 | 前25% |
| 🥈 | [WorldSense: Evaluating Real-world Omnimodal Understanding fo](/audio-paper-digest-blog/posts/2026-05-04-worldsense-evaluating-real-world-omnimodal) | 8.0分 | 前50% |
| 🥉 | [JavisDiT++: Unified Modeling and Optimization for Joint Audi](/audio-paper-digest-blog/posts/2026-05-04-javisdit-unified-modeling-and-optimization-for) | 8.0分 | 前25% |
| 4. | [AVoCaDO: An Audiovisual Video Captioner Driven by Temporal O](/audio-paper-digest-blog/posts/2026-05-04-avocado-an-audiovisual-video-captioner-driven-by) | 8.0分 | 前25% |
| 5. | [JavisDiT: Joint Audio-Video Diffusion Transformer with Hiera](/audio-paper-digest-blog/posts/2026-05-04-javisdit-joint-audio-video-diffusion-transformer) | 8.0分 | 前25% |
| 6. | [Instilling an Active Mind in Avatars via Cognitive Simulatio](/audio-paper-digest-blog/posts/2026-05-04-instilling-an-active-mind-in-avatars-via) | 7.5分 | 前10% |
| 7. | [Entropy-Monitored Kernelized Token Distillation for Audio-Vi](/audio-paper-digest-blog/posts/2026-05-04-entropy-monitored-kernelized-token-distillation) | 7.5分 | 前25% |

---

## 📋 论文详情

### 🥇 [OmniCVR: A Benchmark for Omni-Composed Video Retrieval with Vision, Audio, and Text](/audio-paper-digest-blog/posts/2026-05-04-omnicvr-a-benchmark-for-omni-composed-video)

🔥 **8.5/10** | 前25% | #音视频 | #对比学习 | #音频检索 #多模态模型

👥 **作者与机构**

- 第一作者：Junyang Ji（清华大学计算机系，快手技术，南方科技大学）
- 通讯作者：Zhihai He（南方科技大学计算机系），Wenming Yang（清华大学深圳国际研究生院）
- 作者列表：Junyang Ji（清华大学，快手技术，南方科技大学）、Shengjun Zhang（快手技术）、Da Li（中国科学院大学，快手技术）、Yuxiao Luo（北京大学，快手技术）、Yan Wang（快手技术）、Di Xu（快手技术）、Biao Yang（快手技术）、Wei Yuan（快手技术）、Fan Yang（快手技术）、Zhihai He（南方科技大学）、Wenming Yang（清华大学）

💡 **毒舌点评**

本文精准击中现有组合视频检索（CoVR）只重“眼”（视觉）不重“耳”（音频）的痛点，通过构建首个全模态基准并设计针对性模型，系统性地展示了音频缺失导致的性能崩塌，是多模态检索领域一份扎实且必要的“补全”工作；但基准构建高度依赖自动化流水线（Qwen-Omni标注+双阶段验证），其生成的“修改指令”与真实用户查询的自然度仍有差距，且模型改进本质是现有模块（Qwen2-Audio + VLM2Vec）的拼接，创新深度有限。

🔗 **开源详情**

- 代码：论文承诺发布完整代码库（数据生成脚本、训练代码、评估协议），但未提供具体链接。
- 模型权重：承诺发布AudioVLM2Vec模型权重（基于开源的Qwen2-Audio和Qwen2-VL）。
- 数据集：OmniCVR基准数据集（包括160k+片段，50k+三元组及测试集）将在Hugging Face上公开（地址：https://huggingface.co/datasets/Jun-Yang/OmniCVR）。
- Demo：论文中未提及在线演示。
- 复现材料：提供了极其详尽的复现材料，包括：
    - 数据构建流水线的详细描述和图示（图4）。
    - 用于注释、三元组挖掘和验证的完整提示词（附录G）。
    - 训练和评估的详细协议描述。
- 论文中引用的开源项目：依赖的主要开源项目/模型包括：PySceneDetect（用于视频分割）、CLIP、CLAP（用于相似度计算）、BLIP/BLIP2、ImageBind、Qwen2-VL、Qwen2.5-Omni、Qwen2-Audio、VLM2Vec、OmniEmbed-v0.1-multivent。

📌 **核心摘要**

本文针对现有组合视频检索（CoVR）基准普遍忽略音频模态的关键缺陷，提出了首个支持视觉、音频和文本全模态的组合视频检索基准OmniCVR。该基准通过自动化流水线从海量视频中挖掘视觉、音频及视听综合变化的源-目标视频对，并生成相应的自然语言修改指令，形成了一个包含约5万个三元组（源视频、修改指令、目标视频）的大规模数据集，其中视听综合修改指令占比超过57%。论文还提出AudioVLM2Vec模型，该模型利用Qwen2-Audio将音频转为详细文本描述，再与VLM2Vec结合，有效注入了音频语义。实验证明，现有强基线（如VLM2Vec）在音频中心检索任务上性能急剧下降（R@1仅12.4%），而AudioVLM2Vec在该任务上达到77.2%的R@1，整体性能也达到最优，揭示了当前多模态系统在音频推理上的根本局限。该工作为评估和推动真正的多模态组合推理提供了关键平台。

---

### 🥈 [WorldSense: Evaluating Real-world Omnimodal Understanding for Multimodal LLMs](/audio-paper-digest-blog/posts/2026-05-04-worldsense-evaluating-real-world-omnimodal)

🔥 **8.0/10** | 前50% | #音视频 | #基准测试 | #模型评估 #多模态模型

👥 **作者与机构**

- 第一作者：Jack Hong（Xiaohongshu Inc.）
- 通讯作者：Weidi Xie（Shanghai Jiao Tong University）
- 作者列表：Jack Hong（Xiaohongshu Inc.）、Shilin Yan（Xiaohongshu Inc.， 项目负责人）、Jiayin Cai（Xiaohongshu Inc.）、Xiaolong Jiang（Xiaohongshu Inc.）、Yao Hu（Xiaohongshu Inc.）、Weidi Xie（Shanghai Jiao Tong University）

#

💡 **毒舌点评**

亮点：论文针对多模态评估领域“重视觉、轻听觉”的痛点，构建了一个强迫模型必须结合音频和视觉信息才能回答的高质量基准，其数据收集和质量控制流程（80名专家标注+MLLM验证）堪称严谨。短板：所有评估任务均为多选题格式，这在一定程度上限制了对模型开放式生成和复杂推理能力的考察，论文作者也在局限性部分承认了这一点。

#

🔗 **开源详情**

- 代码：论文中未提及代码链接。项目主页（https://jaaackhongggg.github.io/WorldSense）可能后续会提供。
- 模型权重：未提及（本文为基准测试，不发布新模型）。
- 数据集：是。论文明确表示WorldSense数据集将以CC BY-NC-SA 4.0许可证公开发布。
- Demo：未提及。
- 复现材料：论文在附录中提供了详细的评估提示（Evaluation Prompt）模板，有助于复现评估设置。训练细节等不适用。
- 论文中引用的开源项目：论文在评估中引用了多个开源模型，包括Unified-IO-2、OneLLM、VideoLLaMA2、Qwen2-VL、LLaVA-OneVision、InternVL2.5、LLaVA-Video等。

📌 **核心摘要**

1. 问题：现有的多模态大语言模型（MLLM）基准测试大多专注于视觉-语言理解，严重忽略了音频模态，导致无法全面评估模型在真实世界中处理多模态信息的能力。
2. 方法核心：提出WorldSense，首个专注于评估MLLM在真实世界场景中全模态（视觉、音频、文本）视频理解能力的基准。其核心设计原则是：a) 强调音视频模态的强耦合（移除任一模态则无法正确回答）；b) 覆盖广泛的视频领域和任务；c) 提供高质量、多轮验证的人工标注问答对。
3. 创新点：与现有基准（如侧重图像的OmniBench/AV-Odyssey，或任务单一的AVQA）相比，WorldSense首次为视频场景下的全模态理解提供了全面、严谨且大规模的评估平台。
4. 主要实验结果：在WorldSense上，当前开源音视频MLLM表现不佳（最高仅50.9%），甚至低于一些纯视觉模型。最强的商业模型Gemini 2.5 Pro也仅达到65.1%的准确率，揭示了现有模型在全模态推理上的巨大差距。消融实验表明，视觉信息至关重要，而原始音频信号比字幕能提供更丰富的非语言线索（如语调、情感），带来额外性能提升。
5. 实际意义：为评估和推动更真实、更全面的多模态AI感知与理解能力设立了新标准，明确指出了当前模型在音频理解、跨模态融合及复杂推理方面的短板，为未来研究指明了方向。
6. 主要局限性：采用多选题格式，可能无法充分评估模型生成开放式回答和进行更复杂推理的能力。

---

### 🥉 [JavisDiT++: Unified Modeling and Optimization for Joint Audio-Video Generation](/audio-paper-digest-blog/posts/2026-05-04-javisdit-unified-modeling-and-optimization-for)

🔥 **8.0/10** | 前25% | #音视频 | #扩散模型 | #流匹配 #位置编码

👥 **作者与机构**

- 第一作者：Kai Liu（浙江大学）
- 通讯作者：Hao Fei（新加坡国立大学）
- 作者列表：Kai Liu（浙江大学）、Yanhao Zheng（浙江大学）、Kai Wang（多伦多大学）、Shengqiong Wu（新加坡国立大学）、Rongjunchen Zhang（HiThink Research）、Jiebo Luo（罗切斯特大学）、Dimitrios Hatzinakos（多伦多大学）、Ziwei Liu（南洋理工大学）、Hao Fei（新加坡国立大学）、Tat-Seng Chua（新加坡国立大学）

💡 **毒舌点评**

亮点：设计简洁高效，用仅约1M公开数据就在开源模型中卷出了新SOTA，特别是TA-RoPE和AV-DPO的设计直击联合生成的核心痛点——同步性和对齐性，且实现成本低。
短板：训练数据规模（1M）和模型参数量（2.1B）与顶尖商业模型相比仍有差距，论文中未讨论模型在更长时长（>5秒）、更高分辨率（>480p）或更复杂语义场景下的表现，其泛化能力的上限尚不明确。

🔗 **开源详情**

- 代码：论文中提供了代码仓库链接：`https://JavisVerse.github.io/JavisDiT2-page`。
- 模型权重：论文中提及将发布模型权重。
- 数据集：论文中提及将发布处理后的数据集（包括SFT数据、DPO数据等）。
- Demo：论文中未提及在线演示。
- 复现材料：提供了详细的训练细节（三阶段流程、超参数、硬件时间估算）、模型配置、评估指标和基准测试集（JavisBench）说明。
- 引用的开源项目：依赖的开源工具/模型包括：Wan2.1 (T2V模型、视频VAE、文本编码器), AudioLDM2 (音频VAE), OpenSora (数据处理), TAVGBench (数据与基准), ImageBind/SynchFormer/AudioBox/VideoAlign等 (评估), FunASR (数据过滤)。

📌 **核心摘要**

1.  要解决的问题：现有的开源联合音视频生成（JAVG）模型在生成质量、音视频时间同步性以及与人类偏好对齐方面，与Veo3等先进商业模型存在明显差距。
2.  方法核心：提出JavisDiT++框架，基于Wan2.1-1.3B-T2V构建。包含三大核心组件：1）模态特定混合专家（MS-MoE）：使用共享的自注意力层促进音视频交互，再通过各自独立的FFN层增强单模态特征建模，以更简洁高效的方式取代了传统的双流或拼接架构。2）时间对齐旋转位置编码（TA-RoPE）：通过设计位置ID，使音频和视频token在时间维度上对齐，实现显式、帧级的精确同步，无需额外计算开销。3）音视频直接偏好优化（AV-DPO）：首次将偏好学习引入JAVG，利用多个奖励模型从质量、一致性、同步性多维度评估生成结果，构建偏好对数据，引导模型向更符合人类偏好的方向生成。
3.  创新点：提出了更简洁统一的JAVG模型架构（MS-MoE）；提出了高效精确的跨模态时间对齐机制（TA-RoPE）；首次将直接偏好优化技术应用于联合音视频生成任务。
4.  主要实验结果：在JavisBench基准测试上，JavisDiT++在所有11个评估指标上均显著超越了JavisDiT和UniVerse-1等开源SOTA方法。下表列出了与主要基线在生成240p4秒视频上的关键结果对比。

| 模型 | FVD ↓ | FAD ↓ | TV-IB ↑ | TA-IB ↑ | CLIP ↑ | CLAP ↑ | AV-IB ↑ | AVHScore ↑ | JavisScore ↑ | DeSync ↓ |
| :--- | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| JavisDiT | 204.1 | 7.2 | 0.263 | 0.143 | 0.302 | 0.391 | 0.197 | 0.179 | 0.154 | 1.039 |
| UniVerse-1 | 194.2 | 8.7 | 0.272 | 0.111 | 0.309 | 0.245 | 0.104 | 0.098 | 0.077 | 0.929 |
| Ours | 141.5 | 5.5 | 0.282 | 0.164 | 0.316 | 0.424 | 0.198 | 0.184 | 0.159 | 0.832 |
（注：FVD/FAD越低越好，其他越高越好。DeSync越低表示同步性越好。）

5.  实际意义：为开源社区提供了一个高效、高质量的联合音视频生成解决方案，降低了高质量AIGC内容的创作门槛，推动了该领域的民主化发展。
6.  主要局限性：模型训练依赖约1M规模的数据，可能限制了其在更多样化场景下的泛化能力；模型参数规模（2.1B）相对较小；论文实验集中在较短视频（2-5秒）和分辨率（240p-480p），对更长、更复杂内容的生成能力未被验证；当前框架专注于文本到音视频生成，未探讨其他跨模态任务（如音频到视频、视频到音频）。

---

### 4. [AVoCaDO: An Audiovisual Video Captioner Driven by Temporal Orchestration](/audio-paper-digest-blog/posts/2026-05-04-avocado-an-audiovisual-video-captioner-driven-by)

🔥 **8.0/10** | 前25% | #音视频 | #强化学习 | #预训练 #多模态模型

👥 **作者与机构**

- 第一作者：Xinlong Chen (Kuaishou Technology, NLPR/CASIA, UCAS)
- 通讯作者：Qiang Liu (NLPR/CASIA, UCAS)
- 作者列表：Xinlong Chen (Kuaishou Technology, NLPR/CASIA, UCAS)、Yue Ding (NLPR/CASIA, UCAS)、Weihong Lin (Kuaishou Technology)、Jingyun Hua (Kuaishou Technology)、Linli Yao (Peking University)、Yang Shi (Peking University)、Bozhou Li (Peking University)、Qiang Liu (NLPR/CASIA, UCAS)、Yuanxing Zhang (Kuaishou Technology)、Pengfei Wan (Kuaishou Technology)、Liang Wang (NLPR/CASIA, UCAS)

💡 **毒舌点评**

这篇论文的实验设计堪称“教科书级”严谨，通过在四个互补的基准测试上进行详尽对比，并精心设计消融实验，无可辩驳地证明了其两阶段后训练流程的有效性。不过，其奖励模型的构建（如Checklist和Dialogue reward）严重依赖于GPT-4o/4.1等强大闭源模型，这虽然保证了当前研究的效果，却也为方法的可复现性和公平性打上了一个问号——毕竟不是所有人都有同等的API访问权限和预算。

🔗 **开源详情**

- 代码：论文中未提及代码仓库链接。
- 模型权重：论文中提到模型将会开源（“This model will be open-source”），但当前未提供具体下载地址。
- 数据集：构建的107K SFT数据集未提及是否公开。论文中引用的训练数据来源（TikTok-10M, Shot2Story等）本身是公开的。
- Demo：论文中未提及在线演示链接。提供了一个项目网页：`https://avocado-captioner.github.io/`。
- 复现材料：训练细节（SFT/GRPO超参数、奖励函数阈值、Prompt模板）在论文正文和附录中提供了较为详细的说明。
- 论文中引用的开源项目：主要依赖的开源模型为Qwen2.5-Omni。构建数据集和奖励函数时，使用了Gemini-2.5-Pro和GPT-4o/4.1等闭源模型的API。

📌 **核心摘要**

1.  要解决什么问题：现有的视频描述模型大多以视觉为中心，忽略了音频信息（如对话、背景音乐）对于全面理解视频内容的重要性。简单的音视频分别描述再拼接的方法无法建模两者之间细粒度的时间对齐和因果关联。
2.  方法核心是什么：提出了AVoCaDO，一个基于Qwen2.5-Omni-7B的音视频描述模型。核心是设计了一个两阶段后训练流程：1）AVoCaDO SFT：在精心构建的10.7万条高质量、时间对齐的音视频描述数据集上进行监督微调；2）AVoCaDO GRPO：采用组相对策略优化算法，并设计了三个互补的奖励函数（Checklist、Dialogue、Length）来进一步提升模型的时间连贯性、对话准确性和输出稳定性。
3.  与已有方法相比新在哪里：1）目标新：明确将“音视频时间对齐”作为描述生成的核心目标；2）流程新：设计了专门针对此目标的两阶段后训练流程，尤其是基于细粒度关键点分解和对话提取与比对的GRPO奖励设计，这比简单的通用奖励（如奖励模型打分）更具针对性和可解释性；3）数据新：构建了高质量、大规模的SFT数据集，并采用两阶段生成策略以确保音视频信息的完整性。
4.  主要实验结果如何：AVoCaDO在四个音视频描述基准测试上显著超越所有开源模型。在video-SALMONN-2测试集上，其总错误率（Total）为37.3，低于最强基线video-SALMONN-2（38.8）和大规模模型Qwen3-Omni-Captioner（47.6）。在UGC-VideoCap上，其平均分（Avg.）达到73.2，甚至超过了商业模型Gemini-2.5-Pro（72.6）和Gemini-2.5-Flash（73.0）。在QA类基准Daily-Omni和WorldSense上，其准确率分别为50.1和25.7，大幅领先其他开源模型。在纯视觉基准VDC Detailed和DREAM-1K上也取得了有竞争力的性能。
    | 模型 | 大小 | 模态 | video-SALMONN-2 测试集 (Total ↓) | UGC-VideoCap (Avg. ↑) | Daily-Omni (Acc ↑) | WorldSense (Acc ↑) |
    | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
    | Qwen2.5-Omni | 7B | A+V | 57.1 | 57.7 | 13.4 | 8.6 |
    | video-SALMONN-2* | 7B | A+V | 38.8 | 67.2 | 29.9 | 18.2 |
    | Qwen3-Omni-Captioner | 30B-A3B | A+V | 47.6 | 72.5 | 27.2 | 14.1 |
    | AVoCaDO (Ours) | 7B | A+V | 37.3 | 73.2 | 50.1 | 25.7 |
    注：`Total ↓`表示总错误率，`Avg. ↑`和`Acc ↑`表示分数/准确率，均为越高越好。
5.  实际意义是什么：该工作为需要深度理解视频内容（尤其是依赖于对话、音效等听觉线索的场景）的下游任务（如视频检索、问答、生成）提供了更强大的基础描述能力。其承诺的开源将推动相关领域的研究。
6.  主要局限性是什么：1）奖励模型（GPT-4o/4.1）本身可能引入偏见或错误，且计算成本高；2）论文未深入探讨生成描述中的幻觉（Hallucination）问题（尽管表1显示其幻觉率并非最低）；3）方法的通用性有待验证，目前主要在短、中时长视频上验证。

---

### 5. [JavisDiT: Joint Audio-Video Diffusion Transformer with Hierarchical Spatio-Temporal Prior Synchronization](/audio-paper-digest-blog/posts/2026-05-04-javisdit-joint-audio-video-diffusion-transformer)

🔥 **8.0/10** | 前25% | #音视频 | #扩散模型 | #音频生成 #视频生成

👥 **作者与机构**

- 第一作者：Kai Liu（浙江大学，新加坡国立大学访问期间）
- 通讯作者：Hao Fei（新加坡国立大学）
- 作者列表：
    - Kai Liu（浙江大学，新加坡国立大学）
    - Wei Li（中国科学技术大学）
    - Lai Chen（浙江大学）
    - Shengqiong Wu（新加坡国立大学）
    - Yanhao Zheng（浙江大学）
    - Jiayi Ji（新加坡国立大学）
    - Fan Zhou（浙江大学）
    - Jiebo Luo（罗切斯特大学）
    - Ziwei Liu（南洋理工大学）
    - Hao Fei（新加坡国立大学）
    - Tat-Seng Chua（新加坡国立大学）

#

💡 **毒舌点评**

亮点：论文不仅提出了一个为同步而生的新模块（HiST-Sypo），还“贴心”地为整个社区造了一个更难、更全面的新考场（JavisBench）和一把更准的尺子（JavisScore），这种“既做运动员又做裁判”的系统性贡献值得肯定。短板：模型的强大很大程度上依赖于精心设计的多阶段训练和强大的上游预训练模型（如OpenSora），其提出的HiST-Sypo模块本身在端到端联合训练中的泛化能力和轻量化潜力有待进一步验证。

🔗 **开源详情**

- 代码：论文提供项目主页链接（https://javisverse.github.io/JavisDiT-page/），并明确表示代码将开源。
- 模型权重：论文明确表示将开源预训练模型权重。
- 数据集：论文明确表示将开源JavisBench数据集。
- Demo：论文中未提及在线演示链接。
- 复现材料：提供了详细的模型架构配置（附录C.1）、三阶段训练策略、超参数设置（表A2）、数据来源与处理流程、评估设置等，复现指南较为完善。
- 论文中引用的开源项目：OpenSora (视频VAE/解码器， 骨干初始化), AudioLDM2 (音频VAE/解码器， 音频预训练), ImageBind (文本编码器， 用于先验估计器和JavisScore), T5 (文本编码器), Qwen系列模型 (数据标注与分类), RepViT-SAM, FunASR, AudioSep等。

📌 **核心摘要**

1. 问题：现有联合音视频生成（JAVG）方法在实现高质量、细粒度时空同步（即空间位置和时间事件上都对齐）方面存在不足。
2. 方法核心：提出JavisDiT模型，基于扩散Transformer（DiT）架构，创新性地引入分层时空同步先验估计器（HiST-Sypo Estimator）。该估计器从文本中提取全局语义先验和细粒度的时空位置/时间先验，通过交叉注意力注入到音视频生成的各个阶段，指导同步生成。
3. 新意：与先前简单参数共享或粗粒度对齐不同，HiST-Sypo提供了显式的、细粒度的时空条件引导，实现了更精确的音视频同步。
4. 主要实验结果：在自建的大规模基准JavisBench（10,140个样本）上，JavisDiT在音视频质量、语义一致性和同步性指标上均显著超越现有方法。例如，在JavisScore（同步性）上达到0.154，优于最强基线FoleyCrafter（0.151）。在Landscape和AIST++数据集上，其FVD/FAD指标也达到SOTA。

| 方法（类型） | FVD↓ | KVD↓ | FAD↓ | JavisScore↑ |
| :--- | :--- | :--- | :--- | :--- |
| TempoTkn (级联 T2A+A2V) | 539.8 | 7.2 | - | 0.103 |
| See&Hear (级联 T2V+V2A) | - | - | 7.6 | 0.112 |
| FoleyCrafter (级联 T2V+V2A) | - | - | 9.1 | 0.151 |
| MM-Diff (端到端 JAVG) | 2311.9 | 12.2 | 27.5 | 0.070 |
| UniVerse-1 (端到端 JAVG) | 194.2 | 0.5 | 8.7 | 0.077 |
| JavisDiT (端到端 JAVG) | 204.1 | 1.4 | 7.2 | 0.154 |

5. 实际意义：推动了联合音视频生成领域向更高质量和更精确同步发展，为相关应用（如影视、短视频创作）提供了更强大的工具。提出的JavisBench和JavisScore为后续研究提供了坚实的评估基础。
6. 主要局限性：训练数据规模（0.6M三元组）相较于基础视频生成模型仍然有限；JavisScore指标的准确率（约75%）仍有提升空间；模型生成效率（例如，H100生成4秒视频需约30秒）较高。

---

### 6. [Instilling an Active Mind in Avatars via Cognitive Simulation](/audio-paper-digest-blog/posts/2026-05-04-instilling-an-active-mind-in-avatars-via)

✅ **7.5/10** | 前10% | #音视频 | #多模态模型 | #生成模型 #音频生成

👥 **作者与机构**

- 第一作者：Jianwen Jiang (字节跳动)
- 通讯作者：Jianwen Jiang (字节跳动)
- 作者列表：Jianwen Jiang (字节跳动)， Weihong Zeng (字节跳动)， Zerong Zheng (字节跳动)， Jiaqi Yang (字节跳动)， Chao Liang (字节跳动)， Wang Liao (字节跳动)， Han Liang (字节跳动)， Weifeng Chen (字节跳动)， Xing Wang (字节跳动)， Yuan Zhang (字节跳动)， Mingyuan Gao (字节跳动)。所有作者均隶属于ByteDance。

💡 **毒舌点评**

本文巧妙地将认知科学中的“双系统理论”引入视频头像生成，提出用多模态大模型扮演“慢思考”的System 2来规划高级语义动作，再由扩散模型作为“快思考”的System 1执行渲染，这一概念框架极具启发性且实验验证充分，显著提升了动作的语境一致性和自然度。然而，其高昂的计算成本（包括MLLM推理和DiT生成）以及潜在的伦理滥用风险（如深度伪造）是走向大规模应用必须直面的“房间里的大象”，论文对此虽有提及但未提供实质性的解决方案。

🔗 **开源详情**

- 代码：论文中未提及代码链接。
- 模型权重：未提及。
- 数据集：论文详细说明了其自建测试集和使用公开数据集（CelebV-HQ， CyberHost）的情况，并描述了训练数据策展流程，但未提及训练数据集的公开。
- Demo：未提及。
- 复现材料：提供了非常充分的复现材料，包括：完整的模型架构描述（Section 3）、详细的超参数设置和三阶段训练流程（Appendix B）、数据策展的具体工具（PySceneDetect， Q-align等）和步骤（Appendix B）、MLLM智能体的具体型号（miniCPM-o， Seed-1.5-VL）和提示示例（Appendix D）、全面的主客观评估指标定义与协议（Appendix C）。
- 论文中引用的开源项目：提到了Whisper（用于音频特征提取）、PySceneDetect（视频分割）、Q-Align（质量评估）、RAFT（光流计算）、SyncNet（同步评估）等开源工具/模型。
- 开源计划：论文中未提及开源计��。

📌 **核心摘要**

1. 要解决什么问题：现有的视频头像模型主要将动作生成视为从音频等低级信号到运动的直接映射，缺乏对高阶语义（如情绪、意图）的推理，导致生成的动作虽然唇形同步但简单重复，缺乏与内容和语境的深度一致性。
2. 方法核心是什么：提出一个受双系统认知理论启发的框架。核心包括两部分：1）一个多模态大语言模型（MLLM）智能体作为“System 2”，对输入的音频、图像和文本进行推理，生成结构化的、包含表情与动作规划的高层级文本指导；2）一个专门设计的基于多模态扩散Transformer（MMDiT）的渲染模型作为“System 1”，融合上述文本指导与低级反应信号（如音频），并采用“伪最后帧”策略来保持身份一致性，最终生成视频。
3. 与已有方法相比新在哪里：a) 新视角：首次从认知科学角度将问题建模为反应式与审议式双系统模拟；b) 新框架：引入了MLLM智能体进行主动的、语境感知的规划，突破了现有方法纯反应式映射的局限；c) 新设计：提出了“伪最后帧”策略解决参考图像条件化的难题，并设计了对称的模态融合架构及训练策略（MM-Warmup）来解决多模态信号冲突。
4. 主要实验结果如何：论文在多个基准上进行了评估。消融实验表明，移除推理模块或关键架构设计（如伪最后帧、MM-Warmup）会导致运动自然度（HKV， MU）和语境一致性（GSB）显著下降。与SOTA方法（如OmniHuman-1, Wan2.2-S2V）的对比显示，本方法在用户研究的GSB偏好度、运动不自然度（MU）和语境连贯性等方面有明显优势。例如，在与Wan2.2-S2V的对比中，本方法的GSB得分为+0.71，而MU仅为0.08（vs. 0.60）。具体数据见下表。
5. 实际意义是什么：该工作为创建更“可信”、更“智能”的数字人提供了新的技术范式，有望提升虚拟助手、数字演员、游戏NPC等应用的真实感和交互质量。
6. 主要局限性是什么：a) 计算成本高：MLLM的推理引入了额外的“思考”延迟（约20-30秒），尽管作者认为这是可接受的权衡；b) 潜在伦理风险：高度逼真的生成能力可能被滥用于制造虚假信息或欺诈，论文虽在伦理声明中提出建议，但缺乏强制性的技术保障措施；c) 依赖MLLM的推理质量：生成动作的合理性高度依赖于MLLM智能体的分析与规划能力。

---

### 7. [Entropy-Monitored Kernelized Token Distillation for Audio-Visual Compression](/audio-paper-digest-blog/posts/2026-05-04-entropy-monitored-kernelized-token-distillation)

✅ **7.5/10** | 前25% | #音视频 | #知识蒸馏 | #多模态模型 #模型评估

👥 **作者与机构**

- 第一作者：Hyoungseob Park (Yale University, Amazon AGI)
- 通讯作者：未明确说明（根据作者排序和贡献，Alex Wong 或 Sankar Venkataraman 可能承担指导角色）
- 作者列表：
    - Hyoungseob Park (Yale University, Amazon AGI)
    - Lipeng Ke (Amazon AGI)
    - Pritish Mohapatra (Amazon AGI)
    - Huajun Ying (Amazon AGI)
    - Sankar Venkataraman (Amazon AGI)
    - Alex Wong (Yale University)
说明：论文指出，Hyoungseob Park的工作是在Amazon AGI实习期间完成的。机构信息直接来源于论文标题页。

💡 **毒舌点评**

这篇论文的亮点在于巧妙地将核方法引入知识蒸馏，通过蒸馏token间的关系矩阵而非特征本身，漂亮地绕开了教师-学生架构必须匹配的“紧箍咒”，并在实验上取得了显著的性能优势。但短板也同样明显：计算核矩阵的O(N²)复杂度是悬在头上的达摩克利斯之剑，虽然文中提及滑动窗口，但并未在主实验中全面采用，这可能限制其在超大分辨率或长序列上的应用；此外，那个看起来很“聪明”的熵监控器，本质上是为每个模态额外增加了一个训练好的辅助分类头，这无形中增加了蒸馏流程的复杂度和训练成本。

🔗 **开源详情**

- 代码：论文在“REPRODUCIBILITY STATEMENT”中承诺“we will release the code and the pretrained weights.”，但未在文中提供具体仓库链接。
- 模型权重：如上所述，承诺发布预训练权重，未提供具体链接。
- 数据集：使用公开数据集VGGSound和AVS-Bench，并给出了数据划分细节。
- Demo：未提及。
- 复现材料：提供了非常详尽的附录，包括所有基线的详细超参数设置、训练细节、评估指标、模型架构规格（表14）以及讨论（如熵计算的具体处理），复现信息极其充分。
- 论文中引用的开源项目：引用了多个开源数据集和模型，如CAVMAE、UFE-AVS、AVSegFormer、PVTv2、VGGish等，并基于这些模型构建了教师-学生对。
- 总结：论文提供了高水平的复现指南，但代码和权重的实际发布情况需待后续确认。

📌 **核心摘要**

本文旨在解决大型音视频模型向小型模型的知识蒸馏问题，现有方法在特征维度不匹配或模态信息量不均时表现不佳。核心方法是核化Token蒸馏，它不直接模仿教师的特征向量，而是计算并最小化师生模型token嵌入间成对关系的Gram矩阵差异，从而实现架构无关的蒸馏。进一步，提出熵监控策略，通过测量每个模态特征的熵（不确定性）来自适应调整蒸馏权重，让模型更关注信息量大的模态。在VGGSound（音频事件分类）和AVS-Bench（音频视觉分割）两个基准上，EM-KTD方法仅用教师模型6%的参数，就分别保留了教师96.9%和96.5%的性能，超越了多种现有蒸馏方法。该方法的意义在于为在资源受限的边缘设备上部署高性能音视频模型提供了有效压缩方案。主要局限性在于核矩阵计算复杂度高，且熵监控模块增加了训练的复杂度。

关键实验结果表格：

表1: VGGSound数据集上的音频-视觉事件分类结果对比
| 方法 | 学生模型参数 | 准确率(Acc) | 平均精度(mAP) | 平均AUC(mAUC) |
| :--- | :--- | :--- | :--- | :--- |
| 教师模型 (CAVMAE-ViT-Base) | 164M | 63.9 | 65.0 | 97.9 |
| MTST + KD | 10M | 57.6 | 58.5 | 97.0 |
| EM-KTD + KD (本文) | 10M | 62.0 | 63.4 | 97.9 |
注：EM-KTD以仅6%的参数，达到了教师模型约97%的性能，显著优于基线MTST+KD。

表2: AVS-Bench数据集上的音频-视觉分割结果对比（以VGGish为音频编码器为例）
| 方法 | 视觉编码器参数 | S4任务 MJ | S4任务 MF | MS3任务 MJ | MS3任务 MF |
| :--- | :--- | :--- | :--- | :--- | :--- |
| 教师模型 (UFE-AVS) | 81.4M | 83.15 | 90.4 | 61.95 | 70.9 |
| EM-KTD (本文) | 3.4M | 79.81 | 87.86 | 64.43 | 74.73 |
注：学生视觉编码器仅为教师的4.2%，在多声源分割(MS3)任务上甚至超越了教师模型。

---

