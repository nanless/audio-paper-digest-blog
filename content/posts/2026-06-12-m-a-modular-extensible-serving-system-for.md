---
title: "M*: A Modular, Extensible, Serving System for Multimodal Models"
date: 2026-06-12
draft: false
tags: [多模态模型]
categories: [论文速递]
description: "多模态模型 | 8.9/10"
hiddenInHomeList: true
---

# 📄 M*: A Modular, Extensible, Serving System for Multimodal Models

#多模态模型

**8.9/10** | 创新 1.5/2 | 严谨 1.3/1.5 | 实验 1.4/1.5 | 清晰 1/1 | 影响 1.3/1.5 | 开源 0.4/1.5 | 复现 0.5/0.5 | 工程 1.5/1.5

🔥 **8.9/10** | 前25% | #多模态模型 | #多模态模型 | [arxiv](https://arxiv.org/abs/2606.12688)


### 👥 作者与机构

Atindra Jha<sup>1</sup>, Naomi Sagan<sup>1</sup>, Keisuke Kamahori<sup>2†</sup>, Irmak Sivgin<sup>1†</sup>, Rohan Sanda<sup>1</sup>, Steven Gao<sup>2</sup>, Mark Horowitz<sup>1</sup>, Luke Zettlemoyer<sup>2</sup>, Olivia Hsu<sup>1,3</sup>, Jure Leskovec<sup>1‡</sup>, Baris Kasikci<sup>2‡</sup>, Stephanie Wang<sup>2‡</sup>
<sup>1</sup> Stanford University
<sup>2</sup> University of Washington
<sup>3</sup> Carnegie Mellon University
*共同第一作者，†第二作者，‡同等指导

### 💡 毒舌点评

这篇论文精准地抓住了当前多模态模型服务面临的核心痛点——抽象不匹配，并用一个设计精巧的“Walk Graph”来回应。它像一把瑞士军刀，试图统一处理从文本到图像、语音、动作等一切模态的推理图谱。优点是系统性极强，抽象层次抓得准，实验覆盖面也广。但作为一个系统工作，它的“通用性”在某种程度上也是弱点：它可能在每个特定模态上的优化深度上，输给那些“专精”的系统（虽然实验声称持平或更好）。另外，论文的写作略显冗长，部分技术细节（如状态机、具体放置策略的例子）本可更精炼。最让人皱眉的是，它声称代码即将开源，但在论文评审时无法验证，这降低了可复现性的即时可信度。总的来说，这是一个扎实、完整且有影响力的工作，但它距离成为一个“终极解决方案”还有一段路要走，更像是为下一代多模态服务系统奠定了一个坚实的框架基础。

### 📌 核心摘要

本文针对现有服务框架无法高效支持复合多模态模型（由异构组件如编码器、解码器、骨干网络构成，执行路径多样）的问题，提出了一个通用的服务系统M。其核心是引入“Walk Graph”抽象，将模型表示为一个有向计算图，将请求表示为对图的命名“遍历”。Walk Graph通过顺序、并行、循环和流式四种组合原语，统一表达了包括统一多模态模型（BAGEL）、全模态模型（Qwen3-Omni）、语音模型（Orpheus）和世界模型（V-JEPA 2）在内的复杂计算模式。M系统解耦了模型架构定义、设备映射和运行时执行，允许灵活放置和优化。在多个代表性模型上的评估表明，M*在延迟、吞吐量和实时因子等指标上，性能达到或超过了vLLM-Omni、SGLang-Omni和VoxServe等专用或通用基线系统。

### 🔗 开源详情

- 代码：论文附录I承诺在终稿（camera-ready）发布时公开源代码、配置文件及复现命令。评审时无公开仓库链接。
- 模型权重：
    - BAGEL: https://huggingface.co/ByteDance-Seed/BAGEL-7B-MoT (Apache 2.0)
    - Qwen3-Omni: https://huggingface.co/Qwen/Qwen3-Omni-30B-A3B-Instruct (Apache 2.0)
    - Orpheus: https://huggingface.co/canopylabs/orpheus-3b-0.1-ft (Apache 2.0)
    - V-JEPA 2: https://huggingface.co/facebook/vjepa2-vitg-fpc64-256 (Apache 2.0)
- 数据集：
    - VBench: https://github.com/Vchitect/VBench (License: Apache 2.0)
    - Seed-TTS: https://github.com/BytedanceSpeech/seed-tts-eval (License: CC BY 4.0)
    - DROID: https://huggingface.co/datasets/lerobot/droid_100 (License: MIT)
- Demo：未提及。
- 复现材料：论文在附录I中提供了非常详细的复现指南，包括：
    - 硬件：4×H100 或 8×H200 节点。
    - 软件栈：Python 3.12, PyTorch, CUDA, FlashInfer, HuggingFace Transformers/Diffusers, torchaudio/torchcodec。
    - 每个工作负载的具体配置文件（如`configs/bagel_cfg_parallel.yaml`）。
    - 评估方法：预热请求数、定时请求数、并发模式等。
    - 论文承诺在camera-ready前公开完整的配置文件、Dockerfile和复现命令。
- 论文中引用的开源项目：见开源详情表格（已在原文中列出，此处不重复）。

### 🏗️ 方法概述和架构

M*系统的核心在于其“Walk Graph”抽象和分层运行时架构，旨在解耦模型的逻辑计算结构、物理部署和执行优化。

1.  Walk Graph 抽象（核心概念）：
    *   定义：一个Walk Graph是一个元组 \((G, W)\)，其中 \(G=(N, E)\) 是一个有向计算图，\(N\) 是节点集合，每个节点代表一个模型组件（如Transformer骨干、视觉编码器、扩散解码器等）；\(E\) 是边集合，代表在节点间流动的张量。\(W=\{w_1, ..., w_n\}\) 是一组命名的“遍历（Walk）”，每个Walk是图 \(G\) 的一个特定子图，对应模型的一种行为阶段（例如，图像生成的去噪循环，或语音生成的流式解码）。
    *   四个组合原语：这是Walk Graph表达能力的关键，允许模型作者像搭积木一样组合节点：
        *   顺序（Sequential）：子图链，一个的输出是下一个的输入。例如，一个“预填充文本”Walk后接一个“解码”Walk。
        *   并行（Parallel）：扇出结构，多个子图可以并发执行。例如，BAGEL中用于实现分类器引导（CFG）的三分支并行计算。
        *   循环（Loop / DynamicLoop）：有界迭代。`Loop` 用于固定迭代次数（如扩散模型的50步去噪）；`DynamicLoop` 支持根据运行时信号提前退出（如自回归解码直到EOS，或世界模型按请求的horizon进行滚动）。
        *   流式边（StreamingGraphEdge）：生产者逐个发射张量，消费者根据“块策略（ChunkPolicy）”累积数据后触发执行。支持`FixedChunkPolicy`（固定K个元素触发）、`SlidingWindowChunkPolicy`（滑动窗口）和`LeftContextChunkPolicy`（带左上下文）等策略，用于实时语音生成等场景。
    *   请求执行：每个用户请求被模型作者定义为一组Walks序列（通过一个状态机根据请求模态和当前Walk输出决定下一个Walk）。例如，一个图像理解请求可能是 `[prefill_text -> prefill_vit -> decode]`。

2.  分层运行时架构：
    *   声明层（模型作者）：定义Walk Graph \((G, W)\) 和状态机。
    *   映射层（模型部署者）：定义从Graph节点到物理GPU节点（rank）的放置策略。这允许灵活的配置，如将编码器放在小GPU上，将LLM骨干放在大GPU上；或为不同的Walk（如预填充和解码）指定不同GPU以实现解聚合。同一逻辑节点在不同Walk中可映射到不同物理资源。
       执行层（M运行时）：负责所有物理执行，包括：
        *   组件（Worker）：每个Worker进程对应一个或多个GPU，执行分配到该节点的本地子图。Worker通过ZeroMQ通信，支持共享内存、RDMA和TCP等多种数据传输方式。
        *   引擎（Engine）：每个Graph节点由一个引擎执行。目前有两种：`KVCacheEngine`（用于Transformer组件，集成FlashInfer的分页注意力、CUDA图采样）和`StatelessEngine`（用于无状态节点，如编码器）。
        *   调度（Scheduling）：`Conductor`（每服务器一个）维护请求状态并调度Work。每个Worker内部也有一个本地调度器，采用轮询策略驱动引擎，并异步调度下一个批次（N+1）以与当前批次（N）的GPU执行重叠。关键优化包括双缓冲注意力计划和异步构建。
        *   优化集成：运行时集成了来自LLM服务领域的成熟优化，如分页注意力、连续批处理、CUDA图，并支持模型特定的优化（如BAGEL的CFG并行）。

3.  架构图解读：论文中的图2清晰地展示了上述三层解耦。左侧是逻辑视图，模型作者定义Graph和Walks；右侧是物理视图，部署者将子图映射到GPU集群，运行时Worker执行这些映射。

![图1](https://arxiv.org/html/2606.12688v1/x1.png)

![图2](https://arxiv.org/html/2606.12688v1/x2.png)


### 💡 核心创新点

1.  提出“Walk Graph”统一抽象：这是论文最核心的理论贡献。它超越了现有系统（如vLLM-Omni的固定阶段DAG）的局限，通过图、命名遍历和四个组合原语，提供了一种足够表达力且易于组合的方式来形式化地描述任意复杂的复合多模态模型计算结构，支持跨阶段循环、请求特定路径、动态提前终止等模式。
2.  解耦设计的通用服务系统：基于Walk Graph抽象，M*系统架构实现了模型定义、设备映射和运行时执行的彻底解耦。这带来了关键优势：一次定义即可部署到不同硬件配置，并利用一套统一的运行时优化，无需为不同模型模式编写定制胶水代码。
3.  实用的工程整合与性能验证：论文不仅提出了抽象，还实现了一个可工作的系统，并在BAGEL、Qwen3-Omni、Orpheus、V-JEPA 2等跨度极大的代表性模型上进行了全面实验，证明了该抽象和系统在保持或超越专用基线性能的同时，提供了更高的灵活性和部署便利性。

### 📊 实验结果

本文在五个代表性复合模型上评估了M*，主要对比基线为vLLM-Omni、SGLang-Omni、VoxServe和Meta官方实现。

1. BAGEL（统一多模态模型） vs. vLLM-Omni
*   任务：文本生成图像（T2I）、图像编辑（I2I）、图像理解（I2T）。
*   配置：T2I/I2I使用3个H100 GPU（CFG并行）；I2T使用1个H100。
*   关键结果：
       图像生成延迟：在B=1的CFG并行设置下，M的p50端到端延迟相比vLLM-Omni的单阶段配置，T2I快1.25倍，I2I快1.22倍；相比其默认配置（含KV缓存传输），I2I快2.64倍。优势主要来源于M*使用分页键值池管理CFG上下文，避免了vLLM-Omni的密集缓存操作。
       图像理解：在输出长度64-256 token，批大小B从1到16的设置下，M在吞吐量上优势随B增大而扩大，在B=16时比vLLM-Omni高32.7%；p50 TTFT（首token延迟）比vLLM-Omni低14%-33%。
       配置灵活性：M用同一配置高效服务所有三个任务。而vLLM-Omni的默认配置和单阶段配置在跨任务时存在性能缺陷。

2. Qwen3-Omni（全模态模型） vs. vLLM-Omni & SGLang-Omni
*   任务：文本到语音（Seed-TTS评测集）。
*   配置：使用2个H200 GPU（Thinker在rank 0，Talker+Code2Wav在rank 1）。
*   关键结果：
       实时因子与吞吐：M在所有批大小（B=1至32）上显著优于两个基线。在B=16时，M*的吞吐量比vLLM-Omni高2.7倍，比SGLang-Omni高4.0倍。即使在对Thinker应用2路张量并行（3 GPU总）时，优势依然保持。
       原因：M将整个Talker子模块（包括多token预测循环）作为一个CUDA图捕获，而vLLM-Omni对Code Predictor禁用了CUDA图；同时，M*将Talker和Code2Wav共置于同一Worker进程，消除了进程间通信开销。

3. Orpheus（语音模型） vs. VoxServe
*   任务：文本到语音（Seed-TTS评测集）。
*   配置：单个H200 GPU。
   关键结果：在B=1到16的批大小范围内，M在p50 RTF上比VoxServe低8.2%（B=1）至13.6%（B=16），吞吐量高20%（B=8）至52%（B=1）。优势归因于M*引擎的通用优化（如融合投影、CUDA图采样）和Walk Graph实现的投机性FlashInfer计划。

4. V-JEPA 2（世界模型） vs. Meta官方实现
*   任务：动作条件滚动预测（机器人规划）。
*   配置：单个H100 GPU，B=1。
   关键结果：在滚动步长H=4，15，30时，M的p50速度分别比基线快2.08倍、3.76倍和12.5倍。基线使用无KV缓存的简单Python循环，而M*将其建模为`DynamicLoop`并应用分页注意力KV缓存，避免了重复预填充。

总结表格：

| 模型/基线 | 任务 | 关键指标 | M* 结果 | 基线结果 | 提升倍数 |
| :--- | :--- | :--- | :--- | :--- | :--- |
| BAGEL / vLLM-Omni | T2I (3-GPU) | p50 E2E Latency | 更低 | - | 1.25× (vs 单阶段) |
| BAGEL / vLLM-Omni | I2T (1-GPU, B=16) | Throughput | ~132 req/s | ~100 req/s | 1.327× |
| Qwen3-Omni / vLLM-Omni | TTS (2-GPU, B=16) | Throughput | - | - | 2.7× |
| Qwen3-Omni / SGLang-Omni | TTS (2-GPU, B=16) | Throughput | - | - | 4.0× |
| Orpheus / VoxServe | TTS (1-GPU, B=16) | p50 RTF | - | - | 低13.6% |
| V-JEPA 2 / Meta实现 | Rollout (H=30) | p50 Speed | - | - | 12.5× |

![图3](https://arxiv.org/html/2606.12688v1/figure/release/bagel_e2e_workloads.png)

![图4](https://arxiv.org/html/2606.12688v1/figure/release/bagel_i2t_1x3.png)


### ⚖️ 评分理由

*   创新性 (1.5/2)：提出的Walk Graph抽象是系统化和形式化描述复合多模态计算模式的重要一步，统一了之前零散的优化方向（如流式、并行、循环）。它比阶段化DAG更具表达力，是一个扎实的系统抽象创新。然而，核心思想（将计算视为图遍历）在数据流系统和部分计算框架中并非全新，论文的贡献更多在于针对特定问题域的精心设计和系统实现。
*   技术严谨性 (1.3/1.5)：论文逻辑清晰，问题陈述和方法描述连贯。实验设计覆盖了多种模型、指标和配置，并报告了p50/p95。然而，部分技术细节可以更深入，例如，状态机的具体定义和约束未充分形式化，流式处理的端到端延迟和同步机制描述较简略。对基线系统在测试中遇到的问题（如vLLM-Omni的TP无法工作）未做根因分析。
*   实验充分性 (1.4/1.5)：评估非常全面，涵盖了四大类代表性模型，并与多个强基线比较。实验配置（GPU、批大小、数据集）报告详细。主要不足是：1）未提供更多消融研究（例如，Walk Graph各原语对性能的独立贡献）；2）与Cornserve等同样关注动态图执行的系统对比不足；3）大规模分布式（跨节点）场景未验证。
*   清晰度 (1.3/1.5)：论文结构标准，图表（如图1，图2）有助于理解。但正文较长，部分描述（如§3.2的能力枚举）可更精炼。数学符号（如Walk定义）使用稍显随意。列表1的简化示例与附录F的完整版之间的差异需要仔细对照理解。
*   影响力 (1.3/1.5)：解决了多模态服务的一个真实且日益重要的问题。Walk Graph若能被社区采纳，有望成为该领域的标准抽象之一。然而，其影响力很大程度上取决于开源代码的质量和社区采用度（目前仅为承诺）。在语音/音乐/音频领域，其直接影响中等，主要惠及使用复合模型（如SpeechLM）的服务提供者。
*   开源 (0.4/1.5)：论文附录I详细承诺了将在camera-ready时公开代码、配置和复现指令，这极大地增强了可复现性预期。但当前评审时无公开代码仓库，因此只能给予基础分。`has_code`字段应基于此承诺填写“是”。
*   可复现性 (0.8/1.5)：鉴于详尽的实验配置（硬件、软件栈、具体yaml文件）、模型权重和数据集链接（均为公开可获取），以及清晰的复现指南承诺，本文在理论上具有高可复现性。扣分项在于代码尚未公开，读者目前无法实际验证。`reproducibility`分数反映了这一“高承诺、待兑现”的状态。
*   工程/实践价值 (1.5/1.5)：这是论文最强的维度。它直面实际部署中的痛点，提出了一个实用的框架，展示了显著的性能提升和配置灵活性。对工业界和学术界部署复杂多模态模型具有直接的参考和借鉴价值。

#

### 🚨 局限与问题

1.  抽象的局限性与复杂性：Walk Graph虽然灵活，但增加了模型作者和部署者的认知负担。作者需要将模型准确拆解为图并定义状态机；部署者需要理解不同组件的资源需求以做出最优放置决策。论文未讨论是否提供工具来辅助这一过程（如自动图划分或性能建模）。
2.  冷启动与动态性问题：论文聚焦于请求执行阶段的性能。对于复合模型，首次加载多个不同组件、或根据请求动态加载/卸载组件（如仅在使用视觉能力时加载ViT）的开销和策略未被研究。这在云服务环境中至关重要。
3.  基线公平性问题：论文承认部分基线存在正确性和性能问题，导致结果未展示。这虽然诚实，但也意味着某些比较是不完整的。例如，VoxServe的基线结果仅在单GPU下展示，未与M*的多GPU配置比较。
4.  对“失败”案例的分析不足：论文展示了M*在多种模型上的优势，但缺乏对其性能可能不如专用系统的场景的深入分析。例如，对于极其简单、纯粹的AR文本生成模型，Walk Graph的开销是否会使其性能略低于高度优化的vLLM？论文未提供此类边界情况分析。
5.  流式处理的额外开销未量化：`StreamingGraphEdge`和块策略引入了缓冲区管理。论文展示了其功能，但未量化与直接进程间通信相比，额外引入的内存占用和延迟开销是多少。
6.  安全与隔离性考虑缺失：作为一个通用服务系统，在同时服务多个不同模型/租户的复合请求时，如何保证GPU资源的强隔离、防止组件间的干扰（如一个请求的流式处理阻塞另一个请求），论文未涉及。

#

### 📷 论文图片

![图5](https://arxiv.org/html/2606.12688v1/figure/release/qwen3_seedtts.png)


---

[← 返回 2026-06-12 语音/音乐/音频论文速递](/audio-paper-digest-blog/posts/2026-06-12/)
