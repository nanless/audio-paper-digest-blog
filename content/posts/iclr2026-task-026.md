---
title: "ICLR 2026 - 语音对话系统 论文列表"
date: 2026-05-04
draft: false
tags: ["语音对话系统"]
categories: [iclr-2026]
description: "共 10 篇 ICLR 2026 语音对话系统 方向论文"
hiddenInHomeList: true
---

# ICLR 2026 - 语音对话系统

共 **10** 篇论文

[← 返回 ICLR 2026 总览](/audio-paper-digest-blog/posts/iclr2026-summary/)

---

| 排名 | 论文 | 评分 | 分档 |
|------|------|------|------|
| 🥇 | [Human or Machine? A Preliminary Turing Test for Speech-to-Sp](/audio-paper-digest-blog/posts/2026-05-04-human-or-machine-a-preliminary-turing-test-for) | 8.5分 | 前25% |
| 🥈 | [Closing the Gap Between Text and Speech Understanding in LLM](/audio-paper-digest-blog/posts/2026-05-04-closing-the-gap-between-text-and-speech) | 8.5分 | 前25% |
| 🥉 | [From Text to Talk: Audio-Language Model Needs Non-Autoregres](/audio-paper-digest-blog/posts/2026-05-04-from-text-to-talk-audio-language-model-needs-non) | 8.5分 | 前25% |
| 4. | [Speech World Model: Causal State–Action Planning with Explic](/audio-paper-digest-blog/posts/2026-05-04-speech-world-model-causal-stateaction-planning) | 8.3分 | 前25% |
| 5. | [End-to-end Listen, Look, Speak and Act](/audio-paper-digest-blog/posts/2026-05-04-end-to-end-listen-look-speak-and-act) | 8.0分 | 前25% |
| 6. | [Can Speech LLMs Think while Listening?](/audio-paper-digest-blog/posts/2026-05-04-can-speech-llms-think-while-listening) | 8.0分 | 前25% |
| 7. | [STITCH: Simultaneous Thinking and Talking with Chunked Reaso](/audio-paper-digest-blog/posts/2026-05-04-stitch-simultaneous-thinking-and-talking-with) | 7.5分 | 前25% |
| 8. | [ParaS2S: Benchmarking and Aligning Spoken Language Models fo](/audio-paper-digest-blog/posts/2026-05-04-paras2s-benchmarking-and-aligning-spoken-language) | 7.5分 | 前25% |
| 9. | [DrVoice: Parallel Speech-Text Voice Conversation Model via D](/audio-paper-digest-blog/posts/2026-05-04-drvoice-parallel-speech-text-voice-conversation) | 7.5分 | 前25% |
| 10. | [Towards True Speech-to-Speech Models Without Text Guidance](/audio-paper-digest-blog/posts/2026-05-04-towards-true-speech-to-speech-models-without-text) | 7.5分 | 前25% |

---

## 📋 论文详情

### 🥇 [Human or Machine? A Preliminary Turing Test for Speech-to-Speech Interaction](/audio-paper-digest-blog/posts/2026-05-04-human-or-machine-a-preliminary-turing-test-for)

🔥 **8.5/10** | 前25% | #语音对话系统 | #模型评估 | #数据集 #多语言

👥 **作者与机构**

- 第一作者：Xiang Li（北京邮电大学网络与交换技术国家重点实验室、深圳大数据研究院、香港中文大学（深圳）、深圳_loop_area_institute）
- 通讯作者：Benyou Wang（香港中文大学（深圳））、Jiale Han（香港科技大学）
- 作者列表：Xiang Li（同上）、Jiabao Gao（香港中文大学（深圳）、深圳大数据研究院、深圳_loop_area_institute）、Sipei Lin（香港中文大学（深圳））、Xuan Zhou（香港中文大学（深圳））、Chi Zhang（香港中文大学（深圳））、Bo Cheng（北京邮电大学）、Jiale Han（香港科技大学）、Benyou Wang（香港中文大学（深圳））

#

💡 **毒舌点评**

论文开创性地将图灵测试范式系统性地应用于语音对话（S2S）系统评估，并首次通过大规模实验证明了当前所有顶级模型均未通过测试，其诊断框架清晰地指出了从“语义理解”到“副语言与情感表达”的瓶颈转移，极具启发性。然而，论文提出的可解释AI评委模型本质上是对现有大模型的微调应用，其核心贡献更侧重于评估方法论的构建和人类感知的深度分析，而非解决S2S系统本身的“非人”问题。

#

🔗 **开源详情**

- 代码：提供GitHub仓库链接：`https://github.com/Carbohydrate1001/Turing-Test`。
- 模型权重：论文中提及训练了可解释AI评委模型，并承诺在开源仓库中提供。
- 数据集：论文明确指出构建的对话数据集（人-机、人-人、伪人类）将公开。
- Demo：论文中未提及在线演示链接。
- 复现材料：提供了非常详细的附录，包括数据收集流程（B节）、图灵测试平台设计（C节）、细粒度标注指南与质量控制（D节）、AI评委的训练设置、超参数搜索空间、消融实验结果（E节），复现信息充分。
- 引用的开源项目：论文使用了多个开源模型（如Nari Dia-1.6B, Spark-TTS）和数据集（DailyDialog, IEMOCAP, MagicData等）用于数据构建和对比。

📌 **核心摘要**

本文旨在解决当前语音对话（S2S）系统是否具备“人类相似性”这一关键却悬而未决的问题。方法核心是首次针对S2S系统构建并实施图灵测试，并在此基础上建立了一套细粒度的诊断框架。与之前主要评估语音识别或文本生成智能的工作相比，本文的新颖之处在于：1) 聚焦于“人机交互中的整体人类相似性”这一更高阶目标；2) 提出了涵盖18个维度的评估体系，超越了二元通过/失败；3) 设计了一个可解释的AI评委模型。主要实验结果显示，所有9个参与评估的S2S模型成功率均远低于0.5的随机猜测阈值（最高仅约0.31），证实了当前技术的显著差距。细粒度分析表明，瓶颈并非语义理解（模型已接近人类水平），而在于副语言特征（如韵律、停顿）、情感表达和对话人格（如过度恭维）。本文的实际意义是为S2S系统的发展提供了明确的改进路线图和一套可自动化的评估工具。主要局限性在于，研究主要基于特定的录音场景和有限的对话主题，且提出的AI评委模型性能高度依赖其骨干模型（Qwen2.5-Omni）的表示能力。

#

---

### 🥈 [Closing the Gap Between Text and Speech Understanding in LLMs](/audio-paper-digest-blog/posts/2026-05-04-closing-the-gap-between-text-and-speech)

🔥 **8.5/10** | 前25% | #语音对话系统 | #知识蒸馏 | #数据增强 #语音大模型

👥 **作者与机构**

- 第一作者：Santiago Cuervo（Université de Toulon, Aix Marseille Université, CNRS, LIS；实习期间在Apple工作）
- 通讯作者：Zakaria Aldeneh（Apple）
- 作者列表：Santiago Cuervo（Université de Toulon, Aix Marseille Université, CNRS, LIS）、Skyler Seto（Apple）、Maureen de Seyssel（Apple）、Richard He Bai（Apple）、Zijin Gu（Apple）、Tatiana Likhomanenko（Apple）、Navdeep Jaitly（Apple）、Zakaria Aldeneh（Apple）

#

💡 **毒舌点评**

亮点：论文不仅提出了SALAD方法，更关键的是首次系统量化了导致语音大模型性能下降的“遗忘”和“跨模态错位”两个核心因素，并建立了它们与下游任务性能的强相关性，这种机理分析为后续研究提供了清晰的理论指导。其提出的基于错位信号进行“主动学习”以选择合成数据的方法非常巧妙，用极少的数据（1%）就填补了关键的领域空白。

短板：虽然方法高效，但其语音编码器采用了冻结的轻量级流式模型（Mimi），作者承认这是一个“最坏情况”的设计，可能使得模型上限受限，其结论在使用更强大的预对齐语音编码器时是否依然成立有待验证。此外，所有评估均基于选择题式基准，未涉及开放域生成能力的系统评估。

#

🔗 **开源详情**

- 代码：论文中未提及代码仓库链接。
- 模型权重：未提及是否公开SALAD模型的权重。
- 数据集：使用了公开数据集：LibriHeavy（https://github.com/ictnlp/libriheavy），Emilia（https://github.com/yangdongchao/SoundStorm），FineWeb-Edu（https://huggingface.co/datasets/HuggingFaceFW/fineweb-edu），SmolLM（https://huggingface.co/HuggingFaceTB/SmolLM）。
- Demo：未提及。
- 复现材料：附录（Appendix）提供了详尽的模型描述（A.1）、训练细节（A.2, A.3）、评估协议（A.5）、分析方法（A.4, A.6）和消融实验（A.8），信息非常充分。
- 论文中引用的开源项目：Kokoro TTS（https://github.com/hexgrad/kokoro-82M）、Mimi编码器（源自Moshi模型）、Whisper ASR（用于消融分析）、BGE嵌入模型（用于聚类）、Claude 3.7 Sonnet（用于标注）。
- 总结：论文未提及开源计划，但提供了足够详细的复现材料，且依赖的组件多为公开可用。

📌 **核心摘要**

1. 解决的问题：将大语言模型（LLM）适配到语音输入时，其在语言理解任务上的性能显著低于纯文本LLM，作者将此称为“文本-语音理解差距”。现有解决方法要么依赖大规模合成数据，成本高昂；要么依赖不可复现的私有数据。
2. 方法核心：提出SALAD（基于样本高效对齐的主动选择与跨模态蒸馏学习）。该方法分为两个阶段：阶段一，在自然语音数据上训练，并以原始文本LLM为教师进行跨模态知识蒸馏，以缓解遗忘和对齐错位；阶段二，利用模型自身的跨模态错位信号，主动选择最具挑战性的文本领域进行小规模语音合成，进行针对性训练。
3. 新意：1) 首次系统量化并证明了“遗忘”和“跨模态错位”是导致性能差距的主要原因；2) 证明了跨模态蒸馏（α=1）比标准最大似然估计（NLL）更有效，尤其是在小规模窄域数据上训练时；3) 提出了一个高效的主动学习算法，用极少量合成数据覆盖自然语音语料库未涵盖的领域。
4. 主要实验结果：在3B和7B参数规模下，SALAD模型在6个广泛领域的语言理解基准测试上取得了与Qwen2.5-Omni（使用超过一个数量级的更多数据）相当的性能，同时显著优于其他开源端到端模型。SALAD-7B平均准确率为75.4%，平均文本-语音差距为6.2%；而Qwen2.5-Omni-7B为76.7%和5.0%。主动选择阶段相比随机选择，在科学类任务上带来了显著提升。
5. 实际意义：证明了通过精心设计的训练目标（蒸馏）和数据策略（主动学习），可以用极少的数据（小于100小时合成语音）训练出高性能的语音大模型，为降低开发成本、促进开源研究提供了可行路径。
6. 主要局限性：1) 模型架构为流式优化，性能上限可能受限；2) 评估任务均为基于概率的选择题，未测试开放生成质量；3) 主动选择依赖合成语音，其与自然语音的差异可能引入噪声。

#

---

### 🥉 [From Text to Talk: Audio-Language Model Needs Non-Autoregressive Joint Training](/audio-paper-digest-blog/posts/2026-05-04-from-text-to-talk-audio-language-model-needs-non)

🔥 **8.5/10** | 前25% | #语音对话系统 | #混合生成 | #扩散模型 #大语言模型

👥 **作者与机构**

- 第一作者：Tianqiao Liu（Guangdong Institute of Smart Education, Jinan University; TAL Education Group）
- 通讯作者：Xueyi Li（Guangdong Institute of Smart Education, Jinan University）
- 作者列表：Tianqiao Liu（Jinan University, TAL Education Group）、Xueyi Li（Jinan University）、Hao Wang（Peking University）、Haoxuan Li（Peking University）、Zhichao Chen（Peking University）、Weiqi Luo（Jinan University）、Zitao Liu（Jinan University）

💡 **毒舌点评**

亮点：这篇论文最聪明的地方在于它没有硬套一个万能的AR公式，而是承认了“文字和语音生来就不同”这个事实——文字是“下一个词依赖上一个词”，而语音是“所有词都依赖要说的话本身”，并用扩散模型的“任意顺序预测”特性巧妙地实现了统一训练，理论推导部分堪称优雅。短板：三个训练策略（BANOM, PPM, SST）虽然有效，但更像是针对混合训练中已知问题的“对症下药”式工程补丁，未能进一步挖掘扩散模型在音频建模上的独特优势（例如其并行性对长音频生成的优势）。此外，虽然在小模型（3B）上超越了部分大模型，但面对GLM-4-Voice等顶尖7B+模型时，在部分任务上的绝对性能差距依然明显。

🔗 **开源详情**

- 代码：提供代码仓库链接：https://github.com/ai4ed/TtT
- 模型权重：论文中未提及公开发布任何预训练或微调后的模型权重。
- 数据集：论文中说明使用了多个公开数据集（AISHELL, CommonVoice等）并构建了部分合成数据。数据的详细获取方式未在论文中说明，但列出的数据集名称通常可公开获取。
- Demo：论文中未提及提供在线演示。
- 复现材料：提供了详细的训练策略、超参数（学习率、批量大小、调度器、各策略概率）、硬件配置（4节点x8 A100）、数据格式示例（附录图4-9）和算法伪代码（算法1）。复现所需的大部分信息已给出。
- 引用的开源项目：论文中引用了多个开源项目作为基线或组件，包括：Qwen2.5系列模型、GLM-4-Voice的音频tokenizer和解码器、Whisper（用于ASR评估）、Paraformer-zh、CosyVoice2（用于数据合成）、Qwen3-30B-A3B（作为评判模型）等。

📌 **核心摘要**

这篇论文旨在解决现有端到端语音-文本多模态大模型（MLLM）在统一生成文本和语音时存在的模态依赖结构错配问题。当前主流方法使用单一的自回归（AR）目标同时建模文本和语音，但忽略了文本生成主要依赖于先前生成的词汇（目标-目标依赖），而语音生成更主要依赖于源文本上下文（源-目标依赖）。论文提出了一种名为Text-to-Talk (TtT) 的统一框架，它在一个基于预训练大语言模型的Transformer中，混合使用自回归（AR）生成文本和非自回归（NAR）的离散扩散模型生成语音。其核心创新包括：1）利用吸收离散扩散与“任意顺序AR”目标的理论等价性，建立了统一的联合训练目标；2）设计了模态感知注意力机制，在文本span内保持因果注意力，在语音span内允许双向注意力；3）提出了三个训练策略（批次混合目标、前缀保持掩码、随机跨度截断）以弥合训练与推理的差距。在Audio-QA、ASR、AAC以及综合的S2S对话基准（URO-Bench）上的实验表明，TtT模型（3B参数）在多个指标上一致性超越了纯AR和纯NAR的基线模型。例如，在3B规模下，TtT在Audio-QA的LaMAQuestions数据集上得分34.68，远超Qwen2.5-3B (AR) 的10.00和(NAR) 的0.67。该工作为构建更高效、更自然的统一语音交互系统提供了新的思路。其主要局限在于训练稳定性依赖于精心设计的策略，模型的最大规模（3B） 相对较小，且对生成语音的感知质量评估不够深入。

---

### 4. [Speech World Model: Causal State–Action Planning with Explicit Reasoning for Speech](/audio-paper-digest-blog/posts/2026-05-04-speech-world-model-causal-stateaction-planning)

🔥 **8.3/10** | 前25% | #语音对话系统 | #因果推理 | #语音情感识别 #语音大模型

👥 **作者与机构**

- 第一作者：Xuanru Zhou（浙江大学）
- 通讯作者：未明确说明（从贡献度和联系邮箱看，Xuanru Zhou和Jiachen Lian可能共同主导）
- 作者列表：Xuanru Zhou（浙江大学）， Jiachen Lian（加州大学伯克利分校）， Henry Hong（加州大学伯克利分校）， Xinyi Yang（浙江大学）， Gopala Anumanchipalli（加州大学伯克利分校）

💡 **毒舌点评**

这篇论文的亮点在于为语音理解引入了“认知因果图”这个优雅的脚手架，让模型推理过程变得透明且符合直觉，情绪识别性能甚至击败了商业模型。但短板也很明显：所谓“世界模型”的核心——状态转移动力学——在实验中并未作为主要目标进行深入验证，更像一个服务于静态分类和生成的精致标签系统。

🔗 **开源详情**

- 代码：论文中明确承诺将代码开源，并提供GitHub链接（https://github.com/eureka235/eureka235.github.io）。在“复现性声明”中做了保证。
- 模型权重：论文中未明确提及是否会公开预训练的因果图模型或微调后的LLM/SWM权重，仅提到“将开源模型和数据”。
- 数据集：使用了四个公开数据集（MELD, IEMOCAP, SLURP, VoxCeleb），并承诺公开其构建的训练集。
- Demo：图1中提供了一个Demo音频链接（http://bit.ly/4pBJuWP），可用于体验模型推理过程。
- 复现材料：附录A.4-A.9提供了极其详细的实验设置，包括数据集统计、标签生成流程、模型架构细节（编码器、融合机制、模块结构）、训练超参数（学习率、批次、LoRA配置）、评估指标计算公式（ACE, ICS）以及GPT-4o评分的详细提示词。可复现性很高。
- 引用的开源项目：论文依赖多个开源工具和模型，包括：DistilBERT, WavLM, Vicuna-13b, LLaMA-3.1-8B, Qwen2-Audio, LoRA库，以及OpenSMILE（用于韵律特征提取）。

📌 **核心摘要**

1. 要解决的问题：当前的语音语言模型将语音理解视为黑盒，虽然能较好分析内容，但在需要多步推理的方面（如情感、意图、意图背后的意图）表现不佳，尤其是在监督信号稀疏的情况下。
2. 方法核心：提出“语音世界模型”。其核心是一个因果图，将语音理解分解为四个认知模块：世界模型激活（WMA，场景）、心智理论（ToM，情感）、言语行为（SA，功能）和语用意图（Prag，目标）。该图通过监督和半监督学习训练，形成一个“认知状态搜索空间”。然后，将该图输出的结构化状态和因果关系作为提示，用于指令微调大型语音/语言模型，引导其产生显式的推理链条和最终回复。
3. 新意：与传统端到端模型或基于思维链的启发式推理不同，本文首次提出基于认知理论、结构固定的因果图来建模语音理解的内部状态，并强制模型遵循该结构进行推理，提升了可解释性和效率。
4. 实验结果：
   - 因果图训练：因果图比随机图收敛快5倍（2.07h vs. 10.39h），并能学习到稳定的因果关系（ACE, ICS指标）。
   - 端到端推理：在Model-as-Judge评估中，本文模型（SWM-Llama3.1-8b）在总体得分（7.81）上优于微调的基线（Qwen2-Audio-CoT，5.18）和其他开源模型（最高2.92），并在情绪识别准确率（EA）上达到66.26%，超过了GPT-4o（45.16%）。
   - 效率：整体训练成本仅约20个GPU小时，远低于训练大型闭源模型。
   - 关键数据表（表3）：
     | 方法 | 提示风格 | 总体M.J.得分 | 推理得分 | 回复得分 | 情绪准确率(EA) |
     | :--- | :--- | :--- | :--- | :--- | :--- |
     | SWM (Llama3.1-8b) | CoT | 7.81 | 7.84 | 7.76 | 66.26% |
     | SWM (Qwen2-Audio) | CoT | 7.59 | 7.26 | 8.08 | 71.02% |
     | Qwen2-Audio-CoT (基线) | CoT | 5.18 | 4.76 | 5.82 | 34.72% |
     | GPT-4o | CoT | 7.41 | 6.98 | 8.06 | 45.16% |
     | Gemini 2.5 Pro | CoT | 8.12 | 8.02 | 8.28 | 51.29% |
5. 实际意义：该工作为构建更可解释、高效且推理能力更强的语音AI系统提供了新范式，证明了引入结构化认知先验可以大幅提升模型性能并降低训练成本。
6. 主要局限性：1) 因果图结构是预定义的，限制了适应新依赖关系的能力；2) 模型的“世界模型”动态特性（预测下一状态）未得到充分验证；3) 指令微调数据依赖标签生成管线，可能引入误差传播。

---

### 5. [End-to-end Listen, Look, Speak and Act](/audio-paper-digest-blog/posts/2026-05-04-end-to-end-listen-look-speak-and-act)

🔥 **8.0/10** | 前25% | #语音对话系统 | #多模态模型 | #语音合成 #机器人控制

👥 **作者与机构**

- 第一作者：Siyin Wang（清华大学）
- 通讯作者：Chao Zhang（清华大学）
- 作者列表：Siyin Wang（清华大学）、Wenyi Yu（清华大学）、Xianzhao Chen（字节跳动）、Xiaohai Tian（字节跳动）、Jun Zhang（字节跳动）、Lu Lu（字节跳动）、Yuxuan Wang（字节跳动）、Chao Zhang（清华大学）

💡 **毒舌点评**

论文的亮点在于其“全双工、端到端、多模态”的野心和系统性验证，SA-MoE架构为融合差异巨大的模态提供了一种优雅且数据高效的解决方案。然而，短板也很明显：所有令人兴奋的交互能力（如动作打断）都只在LIBERO这样的模拟环境中得到验证，距离真实世界的嘈杂、延迟和物理不确定性还有很长的路要走，这使得其“迈向更自然智能”的宣称目前听起来更像是一种有前途的假说。

🔗 **开源详情**

- 代码：论文承诺将发布代码，仓库链接为 `https://github.com/bytedance/SALMONN`。
- 模型权重：论文承诺将发布模型检查点。
- 数据集：论文使用了多个公开数据集（如LibriSpeech, LIBERO等），并提到了将发布合成的语音样本和用于高级任务（如上下文VQA、缺陷指令拒绝）的标注数据。
- Demo：论文中未提及在线演示。
- 复现材料：提供了极其详尽的复现材料，包括模型架构与规格（附录A）、训练细节（附录B）、评估细节（附录C）、任务构造细节（附录D）、所有提示词（附录E），以及消融实验的详细结果。
- 论文中引用的开源项目：包括CosyVoice2（语音合成）、Emu3及其视觉分词器、UniVLA（动作专家基础）、LLaMA-3.1-8B-Instruct、Mamba、Whisper、SPEAR等。

📌 **核心摘要**

这篇论文旨在解决当前AI模型在模拟人类自然交互方面的根本缺陷：要么是只能说不会做的“对话者”，要么是只能做不会说的“执行者”。为解决此问题，作者提出了ELLSA模型，这是首个能同时感知和生成视觉、文本、语音和动作的端到端全双工模型。其核心创新是SA-MoE（自注意力混合专家）架构，它将不同模态路由给专门的专家（语音专家和动作专家），并通过统一的注意力机制进行融合，有效缓解了模态间干扰并利用了预训练知识。与已有方法相比，ELLSA首次将“听、看、说、做”统一在一个流式框架内，支持如“边说边做”、“打断执行”等前所未有的复杂交互模式。实验表明，ELLSA在标准语音问答和机器人操作基准上与专门模型性能相当（例如在LIBERO上平均成功率达89.4%），并成功展示了独特的全双工能力。该工作的实际意义在于为构建更自然、通用的交互式智能体提供了可行的技术路径，向通用人工智能（AGI）迈进了一步。主要局限性在于目前所有复杂交互能力的验证均在模拟环境中进行，尚未在真实物理世界中部署和测试。

---

### 6. [Can Speech LLMs Think while Listening?](/audio-paper-digest-blog/posts/2026-05-04-can-speech-llms-think-while-listening)

🔥 **8.0/10** | 前25% | #语音对话系统 | #链式思维 | #推理 #大语言模型

👥 **作者与机构**

- 第一作者：Yi-Jen Shih（德克萨斯大学奥斯汀分校，Meta超级智能实验室）
- 通讯作者：未说明
- 作者列表：Yi-Jen Shih（德克萨斯大学奥斯汀分校，Meta超级智能实验室），Desh Raj（Meta超级智能实验室），Chunyang Wu（Meta超级智能实验室），Wei Zhou（Meta超级智能实验室），SK Bong（Meta超级智能实验室），Yashesh Gaur（Meta超级智能实验室），Jay Mahadeokar（Meta超级智能实验室），Ozlem Kalinli（Meta超级智能实验室），Michael L. Seltzer（Meta超级智能实验室）

💡 **毒舌点评**

亮点：论文提出的“边听边想”范式直击语音交互的核心痛点——延迟与智能的平衡，其基于“问题完整性”的熵度量指标设计精巧，为模型提供了比固定词数偏移更智能的推理触发时机选择，具有明确的实用价值。短板：尽管实验充分，但所有评估数据均由文本基准通过TTS合成得到，缺乏在真实用户语音交互（特别是噪声、口音、打断等复杂场景）下的验证，这使得其“接近人类自然对话”的宣称打了折扣。

📌 **核心摘要**

本文针对语音大语言模型（Speech LLM）在复杂推理任务上表现不佳且响应延迟高的问题，提出了一种结合文本链式思维（CoT）与“边听边想”的新范式。核心方法是：1）在多流模型Moshi的文本独白通道中进行文本CoT微调，这比语音CoT更高效，使平均推理准确率提升2.4倍；2）为了减少CoT引入的额外延迟，引入一个基于KL散度的“问题完整性”指标，动态判断用户问题何时包含足够信息以启动推理；3）通过拒绝采样创建偏好数据，使用DPO进行偏好调优，进一步优化准确性-延迟权衡。主要实验结果（在构建的SRQA基准上）显示，该方法在ARC-Easy任务上实现了4%的准确率提升，最终能实现约70%的延迟降低且准确率不损失。该工作使语音LLM具备了更自然的交互能力，但其评估基于合成语音数据，实际应用效果有待验证。

---

### 7. [STITCH: Simultaneous Thinking and Talking with Chunked Reasoning for Spoken Language Models](/audio-paper-digest-blog/posts/2026-05-04-stitch-simultaneous-thinking-and-talking-with)

✅ **7.5/10** | 前25% | #语音对话系统 | #自回归模型 | #大语言模型 #语音大模型

👥 **作者与机构**

- 第一作者：Cheng-Han Chiang (台湾大学 & Microsoft)
- 通讯作者：Xiaofei Wang (Microsoft)
- 作者列表：Cheng-Han Chiang (台湾大学 & Microsoft), Xiaofei Wang (Microsoft), Linjie Li (Microsoft), Chung-Ching Lin (Microsoft), Kevin Lin (Microsoft), Shujie Liu (Microsoft), Zhendong Wang (Microsoft), Zhengyuan Yang (Microsoft), Hung-yi Lee (台湾大学), Lijuan Wang (Microsoft)

💡 **毒舌点评**

亮点： 论文巧妙地将人类“边想边说”的能力工程化，通过STITCH方法让语音模型在生成每个音频片段的空闲时间里进行推理，实现了思考与说话的并行化，STITCH-S版本更是实现了零额外推理延迟，这个设计思路非常实用且优雅。
短板： 所有实验都基于GLM-4-Voice这一个模型架构进行微调，方法的普适性和在更强大/更轻量级模型上的有效性未得到验证；训练数据的构建高度依赖GPT-4o生成推理链，这可能引入数据偏差并限制了模型的自主推理能力上限。

🔗 **开源详情**

- 代码： 论文中未提及代码仓库链接。项目页面可能包含演示或示例，但未说明。
- 模型权重： 未提及公开微调后的STITCH模型权重。基座模型GLM-4-Voice-9B是开源的。
- 数据集： 训练数据需按照附录B的流程，使用公开数据集（VoiceAssistant400K, Tulu-3, NQ, TriviaQA）和GPT-4o自行构造，论文未直接提供处理好的数据集。测试用的数学问题音频已发布在Hugging Face：https://huggingface.co/datasets/dcml0714/speech_math。
- Demo： 提供了项目页面链接：https://d223302.github.io/STITCH，可能包含在线演示。
- 复现材料： 非常充分。详细提供了模型架构选择理由、数据构造步骤与提示词（附录B）、训练超参数与配置（附录C，包含完整yaml文件）、评估方法与工具（Kimi-Audio-Evalkit）。
- 论文中引用的开源项目：
    - 基座模型：GLM-4-Voice-9B (Zeng et al., 2024)
    - 语音解码器：CosyVoice (Du et al., 2024), HiFi-GAN (Kong et al., 2020)
    - 训练框架：LlamaFactory (Zheng et al., 2024)
    - 推理加速：vLLM (Kwon et al., 2023)
    - 评估工具：OpenAudioBench (Li et al., 2025b), Kimi-Audio-Evalkit (Ding et al., 2025)

📌 **核心摘要**

1.  要解决的问题： 现有的语音语言模型（SLM）在回答复杂问题时，无法像人类一样先进行内部无声的推理（思考），再组织语言进行回答。如果采用先生成完整推理链再回答的朴素方法（TBS），会引入不可控的额外延迟。
2.  方法核心： 提出STITCH（Simultaneous Thinking and Talking with Chunked Reasoning），一种让SLM同时思考和说话的生成框架。核心思想是交替生成“推理块”和“语音响应块”。利用生成一个语音块（音频时长）远长于生成对应令牌所需时间的特性，将剩余时间用于生成下一个推理块，从而实现思考与说话的流水线并行。
3.  新在哪里： 首次将“无声推理”能力引入语音语言模型。提出了两种变体：STITCH-R（先推理后说话）和STITCH-S（先说话后推理）。STITCH-S在设计上与不进行推理的基线模型具有完全相同的首包延迟，同时提升了回答质量。
4.  主要实验结果： 在5个数学问答数据集上，STITCH-S的平均准确率（78.04%）比不使用推理的基线（62.98%）提升了约15%。在非推理任务上，性能与基线相当。人类评估表明，STITCH-S的响应速度感知与无推理基线相当，且优于需要等待完整推理的TBS方法。具体结果见下表：

    | Id | Config      | Latency (Train/Infer) | Use Reasoning | Datasets Avg. (Math QA) | Avg. (Non-reasoning) |
    |----|-------------|------------------------|---------------|--------------------------|----------------------|
    | 1  | GLM-4-Voice | Ntext + Nspeech / –    | ✘             | 53.08                    | 55.22                |
    | 2  | No reasoning| Ntext + Nspeech / ✘    | ✘             | 62.98                    | 55.19                |
    | 4  | TBS         | Nfull + Ntext + Nspeech / ✔ | ✔        | 79.12                    | 58.58                |
    | 6  | STITCH-R    | Nreason + Ntext + Nspeech / ✔ | ✔      | 78.70                    | 55.97                |
    | 7  | STITCH-S    | Ntext + Nspeech / ✔    | ✔             | 78.04                    | 57.03                |

5.  实际意义： 为实时、高质量的语音对话系统提供了一种新范式。STITCH-S使得语音助手在保持快速响应（低延迟）的同时，能够通过内部推理显著提升回答的准确性和逻辑性，特别适合需要复杂思考的场景（如数学辅导、知识问答）。
6.  主要局限性： (1) 方法验证局限于单一模型GLM-4-Voice，未在其他架构（如Thinker-Talker）的SLM上验证。(2) 模型的推理能力高度依赖训练数据中由GPT-4o生成的推理链，限制了其独立推理能力的上限。(3) 推理块的长度在推理时虽可调整，但其与硬件性能的适配性仍需更系统的分析。

---

### 8. [ParaS2S: Benchmarking and Aligning Spoken Language Models for Paralinguistic-aware Speech-to-Speech Interaction](/audio-paper-digest-blog/posts/2026-05-04-paras2s-benchmarking-and-aligning-spoken-language)

✅ **7.5/10** | 前25% | #语音对话系统 | #强化学习 | #基准测试 #模型评估

👥 **作者与机构**

- 第一作者：Shu-wen Yang（National Taiwan University）
- 通讯作者：Ming Tu (leo19941227@gmail.com, bytedance.com), Lu Lu (lulu.0314@bytedance.com)
- 作者列表：Shu-wen Yang（National Taiwan University）， Ming Tu（ByteDance Seed）， Andy T. Liu（ByteDance Seed）， Xinghua Qu（ByteDance Seed）， Hung-yi Lee（National Taiwan University）， Lu Lu（ByteDance Seed）， Yuxuan Wang（ByteDance Seed）， Yonghui Wu（ByteDance Seed）

#

💡 **毒舌点评**

这篇论文的亮点在于其系统性：它不仅指出了S2S模型“不懂情绪”的痛点，还提供了一套从“出考题”（新基准）到“改卷子”（自动评判）再到“训练模型”（RL框架）的完整解决方案，思路非常清晰。然而，其软肋在于“考题”本身很大程度上依赖合成语音，虽然经过了多层过滤，但合成语音与真实人类情感表达的“鸿沟”可能仍被低估，这或许会影响基准的终极可信度。

#

🔗 **开源详情**

- 代码：论文承诺将开源代码，项目主页为 https://paras2sbench.github.io/，但论文中未直接提供代码仓库链接。
- 模型权重：论文提到将开源模型，但未说明具体是哪些模型（推测包括热身、RL后的S2S模型及奖励模型）。
- 数据集：承诺开源ParaS2SBench测试集及用于训练的合成/筛选数据，论文中给出了详细的构建流程和统计数据（表6）。
- Demo：项目主页可能包含演示，论文中未明确提及在线Demo链接。
- 复现材料：提供了极为详尽的附录，包括所有数据生成、评判和训练的prompt模板（A.8节）、评判指南（A.8.5）、完整的实验设置（超参数、硬件）和消融实验细节，复现信息非常充分。
- 论文中引用的开源项目：Whisper-V3， AudioReasoner， Qwen2.5-Omni， Kimi-Audio， LoRA， FSDP， GRPO， Emotion2vec， YourTTS， CosyVoice， Sesame， gpt-4o-mini-tts等。

📌 **核心摘要**

1. 要解决什么问题：现有的语音到语音（S2S）对话模型无法根据用户语音中的副语言线索（如情感、语调、性别、年龄）调整回应的内容和风格，表现出“tone-deaf”（不敏感）的问题，严重限制了对话的自然度和共情能力。
2. 方法核心是什么：提出ParaS2S框架，包含：a) ParaS2SBench基准：采用“对比风格”和“场景控制”的设计来测试模型是否真正“听”语音而非仅依赖文本内容。b) ParaS2SAlign训练框架：利用一个基于解耦分析（PolyTone训练）的多阶段自动评判器提供奖励信号，通过强化学习（GRPO算法）来微调S2S模型，使其学会生成风格合适的回应。
3. 与已有方法相比新在哪里：首次提出针对S2S模型副语言感知能力的端到端波形级基准。首次提出通过解耦内容与风格分析来构建一个可扩展、能与人类偏好高度相关的自动评判器。首次证明RL方法（而非纯SFT）在训练此类模型时更数据高效，且能有效缓解对昂贵、稀少的配对示范数据的依赖。
4. 主要实验结果如何：a) 评判器有效性：其多阶段自动评判器与人类评分的平均皮尔逊相关性达0.776，显著优于端到端的Audio LLM（0.618）。b) 模型性能：基于Kimi-Audio的GRPO模型在ParaS2SBench上相比SFT基线实现10%以上的相对提升，在合成和真实语音测试集上平均分达到4.382（满分5），超越所有现有开源和闭源模型。c) 数据效率：仅需10小时示范数据进行热身的RL训练，性能即可匹配使用50小时数据进行纯SFT训练的模型。
5. 实际意义是什么：为发展更自然、更有同理心的语音交互AI提供了关键的评估工具和高效的训练范式，推动了语音对话模型从“听懂话”向“听懂情绪”的进化。
6. 主要局限性是什么：基准中的“控制场景”高度依赖合成语音，其自然度和多样性可能无法完全覆盖真实世界复杂的情感表达。自动评判器虽好，但其本身也依赖一系列组件，存在误差传播风险，且对更细粒度的风格（如讽刺）判断仍有提升空间。

---

### 9. [DrVoice: Parallel Speech-Text Voice Conversation Model via Dual-Resolution Speech Representations](/audio-paper-digest-blog/posts/2026-05-04-drvoice-parallel-speech-text-voice-conversation)

✅ **7.5/10** | 前25% | #语音对话系统 | #端到端 | #大语言模型 #多任务学习

👥 **作者与机构**

- 第一作者：Chao-Hong Tan (tanchaohong.ch@alibaba-inc.com)
- 通讯作者：未明确指定，论文列出了多位作者的阿里巴巴集团邮箱。
- 作者列表：Chao-Hong Tan, Qian Chen, Wen Wang, Chong Deng, Qinglin Zhang, Luyao Cheng, Hai Yu, Xin Zhang, Xiang Lyu, Tianyu Zhao, Chong Zhang, Yukun Ma, Yafeng Chen, Hui Wang, Jiaqing Liu, Xiangang Li, Jieping Ye (所属机构：Tongyi Fun Team, Alibaba Group)

#

💡 **毒舌点评**

亮点：双分辨率表示机制（DRSR）是一个工程上非常巧妙的设计，通过分组将LLM输入帧率降至5Hz，在显著降低计算成本（近50%）的同时，性能反而提升，很好地平衡了效率与效果。短板：论文声称在多项基准测试上取得SOTA，但部分对比模型（如Kimi-Audio）的复现结果可能与官方报告存在差异，且对生成语音的自然度、情感表达等主观质量指标分析不够深入。

#

🔗 **开源详情**

- 代码：论文在结论和复现性声明中提到将开源完整源代码、训练和评估脚本。但当前提供的论文文本中 未提供具体的代码仓库链接（如GitHub URL）。
- 模型权重：论文提到将公开所有预训练模型检查点。未提及具体的下载地址。
- 数据集：训练所用的语音数据是使用开源的CosyVoice模型合成的，论文承诺将提供复制数据集所需的脚本和说明。原始ASR数据集（如LibriSpeech, Common Voice）是公开的。未提及是否有额外非公开数据。
- Demo：未提及在线演示。
- 复现材料：论文在附录A中详细描述了实现细节，包括模型架构、超参数设置（学习率、批量大小、优化器等）、训练硬件配置（64×A800）和训练时长，为复现提供了充分的信息。
- 论文中引用的开源项目：主要包括：
    *   Whisper (Radford et al., 2022; 2023)：用于语音编码。
    *   CosyVoice (Du et al., 2024a; b; 2025)：用于语音分词（S3Tokenizer）和反分词（语音合成）。
    *   Qwen2.5 (Xu et al., 2025)：作为基础大语言模型。
    *   HiFi-GAN (Kong et al., 2020)：用作声码器。
    *   DeepSpeed ZeRO-2 (Rajbhandari et al., 2020)：用于分布式训练。
- 开源计划总结：论文有明确的开源意图，并承诺提供代码、模型和数据合成脚本，这对于社区复现至关重要。但由于缺乏即时可访问的链接，当前无法验证其完整性和可及性。

📌 **核心摘要**

1.  解决的问题：现有端到端（E2E）语音生成模型存在两大类问题：一类是文本生成与语音合成相互独立，LLM无法感知语音生成过程；另一类是联合建模方法虽能实现模态感知，但存在高计算成本（通常使用12.5Hz或25Hz的输入）以及语音与文本token频率不匹配（语音~25Hz vs 文本~3Hz）导致语义信息被稀释的问题。
2.  方法核心：提出了DrVoice，一个基于并行联合自回归建模的语音对话模型。其核心是双分辨率语音表示（DRSR） 机制：在输入理解阶段，通过分组操作将25Hz的语音token压缩为5Hz的表示输入LLM，降低计算成本并缓解频率不匹配；在输出生成阶段，利用语音精炼头（SRH） 从LLM隐藏状态出发，自回归地生成原始25Hz的语音token，以保留声学细节。此外，引入了模态链（CoM） 策略和Core-Cocktail两阶段训练策略来提升推理连贯性并保留LLM原有知识。
3.  与已有方法的相比新在哪里：主要创新在于提出的双分辨率架构，它解耦了LLM处理的帧率（5Hz）和语音token的原始帧率（25Hz），在效率上显著优于使用12.5Hz或25Hz输入的模型（如Kimi-Audio, GLM-4-Voice）。同时，SRH的设计避免了单纯分组带来的生成细节损失。
4.  主要实验结果：DrVoice-7B在多个主流基准测试上取得了当时的最佳结果（SOTA）。例如，在OpenAudioBench（音频理解）上总体得分72.04（高于Kimi-Audio的69.08），在VoiceBench（语音助手）上总体得分80.17（高于Kimi-Audio的76.93），在UltraEval-Audio（语音理解与生成）上总体得分56.66（高于Qwen2.5-Omni的50.46），在Big Bench Audio（推理）上总体得分74.0（高于Step-Audio2-Mini的49.2）。消融实验表明，移除SRH会导致语音生成性能断崖式下降（S2M分数从38.33降至21.67）。
5.  实际意义：DrVoice作为一个高性能且高效率的开源语音基础模型，为构建更自然、低延迟的实时语音对话系统提供了有力的技术路径。其降低计算成本的设计对实际部署具有重要意义。
6.  主要局限性：论文承认当前模型尚未实现真正的全双工交互（即模型说话时无法接收用户输入）。此外，其评估主要基于自动指标（如ASR-WER, UTMOS），对生成语音的主观自然度、韵律、情感表达等评估不够全面。

---

### 10. [Towards True Speech-to-Speech Models Without Text Guidance](/audio-paper-digest-blog/posts/2026-05-04-towards-true-speech-to-speech-models-without-text)

✅ **7.5/10** | 前25% | #语音对话系统 | #预训练 | #语音大模型 #多语言

👥 **作者与机构**

-   第一作者：邢剑潇（复旦大学），论文中注明与第二作者Zhe Xu同等贡献（∗Equal contribution）
-   通讯作者：邱锡鹏（Xipeng Qiu）（复旦大学）
-   作者列表：
    -   邢剑潇（复旦大学， MOSI.AI）
    -   徐哲（复旦大学， 上海创新研究院， MOSI.AI）
    -   金洛之洁（复旦大学， 上海创新研究院， MOSI.AI）
    -   王洋（复旦大学， MOSI.AI）
    -   陈翰夫（复旦大学， MOSI.AI）
    -   蒋尧州（复旦大学， MOSI.AI）
    -   陈科（复旦大学， 上海创新研究院， MOSI.AI）
    -   李瑞晓（复旦大学， 上海创新研究院， MOSI.AI）
    -   陈明姝（复旦大学， MOSI.AI）
    -   王瑞明（复旦大学， MOSI.AI）
    -   张文博（复旦大学， 上海创新研究院， MOSI.AI）
    -   程清源（复旦大学， MOSI.AI）
    -   费昭烨（复旦大学， MOSI.AI）
    -   李世民（复旦大学）
    -   邱锡鹏（复旦大学， 上海创新研究院， MOSI.AI）

#

💡 **毒舌点评**

这篇工作巧妙利用了Transformer内部不同层对跨模态信息处理能力的差异，像搭积木一样设计出了一个“底层共享、顶层专精”的语音大模型，在端到端生成上确实比依赖文本中间件的前辈们更“纯正”。不过，其最核心的“模态分层”启发自对单个预训练模型的层间分析，这种设计是否具有普适性，还是对特定预训练模型（如Qwen3-8B）的定制优化，论文并未深究；另外，虽然号称“True Speech-to-Speech”，但其生成的语音在自然度上仍逊色于GLM-4-Voice等文本指导模型，证明完全抛弃文本“拐杖”这条路仍然道阻且长。

#

🔗 **开源详情**

-   代码：论文中明确表示“We will release our code and models to support further research”，但未提供具体代码仓库链接。
-   模型权重：同上，承诺发布，但未提供下载链接或平台信息。
-   数据集：预训练数据为互联网收集和合成数据，未公开。SFT数据基于多个开源数据集合成，具体处理后的版本是否公开未说明。
-   Demo：论文中未提及在线演示。
-   复现材料：论文中提供了非常详细的训练数据构造流程、超参数设置（学习率、batch size等）、模型架构细节和消融实验配置，为复现提供了较好的文本基础。
-   论文中引用的开源项目：Qwen3-8B、pyannote、CosyVoice 2、GLM-4-Voice Tokenizer、Seed-TTS、MOSS-TTSD、SenseVoice-Small ASR、WavLM-TDNN、whisper-large-v3、paraformer-zh等。

📌 **核心摘要**

1.  问题：现有的语音对话系统要么依赖级联管道（ASR-LLM-TTS）丢失副语言信息，要么采用文本指导的端到端方法，仍受中间文本表示限制，导致延迟和表达力不足。
2.  方法核心：提出一种“模态分层”架构，基于对预训练LLM内部跨模态相似性变化的分析，在Transformer骨干的第32层进行分支，共享层用于文本-语音融合，模态特异层用于分别生成文本和语音token。同时采用“冻结预训练”策略，分两阶段训练：先冻结文本骨干训练语音组件，再联合微调。
3.  创新点：不同于将语音token直接加入文本词表或使用并行生成，本文方法从架构设计上解耦了模态共享处理与模态特异性生成，更系统地继承了预训练文本LLM的知识。通过合成数据构建了大规模中英双语监督微调数据集。
4.  主要结果：
    -   预训练模型在StoryCloze等语音建模任务上达到SOTA，且在MMLU等文本任务上性能退化极小（仅从76.6降至67.19）。
    -   SFT后，在LlamaQA等口语问答任务中，直接生成（S->S）的准确率接近甚至超过使用文本指导（S->T）的GLM-4-Voice（例如WebQA上45.90 vs 39.22）。
    -   生成语音的客观质量（UTMOS 4.37）优于GLM-4-Voice（4.25），但在非语言行为生成的主观评估中，本模型（Ours）在静默、语气词和回复风格上均大幅领先于包括GLM-4-Voice、Kimi-Audio在内的多个强基线（如表8所示，静默得分4.17 vs 2.73）。
5.  实际意义：展示了构建无需文本中间环节的、具备竞争力的端到端语音大模型的可行性，为未来自然、高效、富有表现力的语音交互奠定了基础。
6.  主要局限性：生成的语音在客观听感指标（如DNSMOS）上与顶尖TTS系统相比无显著优势；“模态分层”策略的有效性可能依赖于底层预训练模型的特性；完全不依赖文本是否是通向更高性能的必经之路，仍需更多探索。

#

---

