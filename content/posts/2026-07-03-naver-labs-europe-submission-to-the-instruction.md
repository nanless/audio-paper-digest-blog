---
title: "NAVER LABS Europe Submission to the Instruction-following 2026 Short Track"
date: 2026-07-03
draft: false
tags: [语音识别, 语音翻译, 参数高效微调, 语音大模型, 低资源]
categories: [论文速递]
description: "语音翻译 | 6.2/10"
hiddenInHomeList: true
---

# 📄 NAVER LABS Europe Submission to the Instruction-following 2026 Short Track

#语音识别 #语音翻译 #参数高效微调 #语音大模型 #低资源

**6.2/10** | 创新 0.8/2 | 严谨 1/1.5 | 实验 0.9/1.5 | 清晰 0.8/1 | 影响 0.8/1.5 | 开源 0.3/1.5 | 复现 0.4/0.5 | 工程 1.2/1.5

✅ **6.2/10** | 前50% | #语音翻译 | #参数高效微调 | #语音识别 #语音大模型 | [arxiv](https://arxiv.org/abs/2607.01960)


### 👥 作者与机构

- 第一作者：Marcely Zanon Boito（NAVER LABS Europe, France）
- 通讯作者：Marcely Zanon Boito（NAVER LABS Europe, France），邮箱 marcely.zanon-boito@naverlabs.com
- 作者列表：Marcely Zanon Boito（NAVER LABS Europe, France）、Hemant Yadav（IIIT Delhi, India）、Jean-Luc Meunier（NAVER LABS Europe, France）、Ioan Calapodescu（NAVER LABS Europe, France）

### 💡 毒舌点评

这篇系统报告本质上是一份竞赛技术报告，工程实现扎实，用更小的模型跑平了去年的SOTA。但学术贡献有限：改进的SpeechMapper不过是损失函数从MSE换成L1再拼上CTC的"四件套"，fakACL数据集是标准LLM生成套路的领域特化，毫无方法论创新。ASR和SQA的跷跷板效应只会摊手说"不可兼得"，却连个像样的帕累托分析都不做。MCIF一个验证集定生死，过拟合风险完全忽视。只能说竞赛第一，但科研价值嘛，别太当真。

### 📌 核心摘要

1. 论文解决的是IWSLT 2026指令跟随语音处理挑战赛短赛道的多任务语音理解问题，任务包括英语语音的自动语音识别（ASR）、语音翻译（ST）到德/意/中三语，以及多语言语音问答（SQA），另有一个测试时揭晓的惊喜任务（质量评估，QE）。
2. 方法核心是一个三阶段训练流水线：(A) 使用改进的SpeechMapper将语音编码器输出映射到LLM嵌入空间，训练仅需分词器和嵌入层，解耦了LLM大小对GPU内存的需求；(B) 在纯文本数据上训练LoRA适配器以获得多语言翻译和问答能力；(C) 将两者结合进行简短的多模态联合监督微调，并采用批次交替策略同步更新语音和文本任务。
3. 与去年冠军系统相比的主要更新：(1) 用改进的SpeechMapper替代原transformer投影器，以应对新LLM更小嵌入空间(2560维)对投影精度的更高要求；(2) 提出fakACL——一个由LLM生成学术报告脚本并TTS合成的数据集，旨在缩小训练-评估(ACL会议报告)间的领域差距。
4. 主要结果：验证集上，最优配置ASR WER 7.4%，ST COMET最高81.3(en-zh)，SQA PartI Acc 87.9%。MCIF集上，ASR WER 10.5%，ST COMET 0.781，SQA Acc 0.428。官方IWSLT 2026评测中，ASR WER 13.6%，ST COMET 最高0.794 (zh)，SQA BERTScore 0.456-0.531。系统与去年最佳系统并列短赛道第一。
| Model | ASR-WER | en-de COMET | en-it COMET | en-zh COMET | PartI Acc | PartII Acc |
|---|---|---|---|---|---|---|
| SeamlessM4T-v2-large (ASR/ST) | 5.9 | 78.3 | 76.9 | 78.0 | - | - |
| Qwen3-4B-Instruct (zero-shot MT) | - | 71.0 | 67.7 | 74.3 | 89.1 | 70.2 |
| SpeechMapper only (A) | 14.2 | 73.5 | 80.1 | 79.7 | 84.4 | 72.1 |
| BEST-IWSLT25-IF | 7.3 | 77.3 | 84.2 | 80.2 | 82.0 | 63.0 |
| SpeechMapper+LoRA setup 2 | 7.4 | 76.3 | 84.4 | 81.3 | 87.9 | 80.2 |
5. 实际意义在于证明了即使使用较小的LLM（4B），通过精心设计的投影器和多阶段训练，也能在多语言语音任务上达到大规模系统的性能，对资源受限场景有参考价值。
6. 主要局限性：(1) ASR和SQA之间存在明显性能trade-off，无法单一配置同时最优；(2) 小LLM对噪声嵌入敏感，zero-shot表现差且常出现输出冗长或改写问题；(3) fakACL完全依赖Qwen3-4B生成，未讨论生成内容多样性或偏差；(4) 方法高度特化于竞赛场景，泛化性存疑。

### 🔗 开源详情

- 代码：论文未提供核心代码仓库链接。提及"使用内部 fork 的 torchtune 进行训练"，未公开。
- 模型权重：论文未提及任何模型权重的发布。
- 数据集：论文自建的fakACL数据集未提供下载链接或承诺。使用的是公开数据集CoVoST2、EuroParlST等，也未提供综合下载指引。
- Demo：未提及。
- 复现材料：论文附录提供了训练数据统计和部分超参数，但无训练脚本或复现包。
- 论文中提及并明确给出链接的开源项目： bergen 评估库（`https://github.com/naver/bergen`），其余均为模型名或缺少链接的引用（如 torchtune, Qwen3, SeamlessM4T-v2-large 等）。

### 🏗️ 方法概述和架构

论文提出一个三阶段训练流程，构建能同时完成ASR、ST和多语言SQA的语音LLM系统。整体架构由三个核心组件串联而成：SpeechMapper投影器、文本LoRA适配器，以及一个多模态联合微调阶段。训练是分阶段、模块化进行的，但最终实现从语音输入到文本输出的端到端推理。

![图1：训练流水线](https://arxiv.org/html/2607.01960v1/training_pipeline.png)

论文图1直观展示了这一流程。该图描绘了数据在三个模块间的流动：(A) SpeechMapper训练模块接收语音特征并学习将其映射到LLM文本嵌入空间；(B) 文本LoRA训练在冻结的LLM上进行MT和QA的纯文本微调；(C) 多模态联合微调模块将前两者的产物结合，在混合数据上最后优化。图中标注了关键组件（如SpeechMapper, LoRA adapter, Qwen3-4B）及fakACL数据集的生成流程。

第一阶段：SpeechMapper投影器训练（模块A）
SpeechMapper扮演了连接语音和文本两大基础模型的关键角色。其输入来自SeamlessM4T-v2-large编码器第24层输出的语音表示，输出目标为Qwen3-4B-Instruct-2507的文本嵌入空间。其结构包含两个连续块，每块由CNN层、6个自注意力层和前馈投影组成，维度变化为1024→2048→2560。相比原版SpeechMapper，主要修改为：(1) CNN步长从(2,2)改为(1,4)，以在首块末端加入CTC辅助头稳定训练；(2) 训练目标从MSE损失改为L1对齐、余弦相似度、softmax对比和CTC四项损失的联合优化。由于训练仅需LLM的分词器和嵌入层，无需LLM前向传播，因此GPU内存需求与LLM大小解耦。训练所用数据为CoVoST2、EuroParlST、GigaST和LibriSQA的ASR部分，在4张A100-80GB上训练约2天。

第二阶段：文本LoRA训练（模块B）
在冻结的Qwen3-4B-Instruct-2507上，对所有层的自注意力和前馈模块应用LoRA（rank=8, α=16）。该阶段使用纯文本的MT和QA数据训练，数据涵盖了所有可用的真实和合成翻译及问答对。训练使用AdamW优化器，学习率3e-4，步数30k，单卡A100-80GB约需4天。

第三阶段：多模态联合微调（模块C）
将训练好的SpeechMapper和LoRA权重分别重新加载，在混合语音和文本数据上进行3k步的联合监督微调。关键设计是批次交替策略：每采样一个语音任务batch（如ST en-de），立即紧跟一个对应的文本任务batch（MT en-de），以确保两种模态的参数同步更新。SpeechMapper和LoRA使用独立的优化器和学习率（SpeechMapper 5e-5，LoRA的lr在setup 1为1e-5，setup 2为5e-5），训练仅需约2小时。

输入格式与推理流程
所有任务采用统一的用户提示模板，格式为 `<speech>[语音嵌入]</speech>\n Question: [任务指令]\n\nYour answer:`。任务指令严格要求用目标语言提问，以防止ASR和ST间的任务混淆，并增强了零样本跨语言泛化能力。推理时采用贪婪解码，最大新token数为100。

fakACL合成数据
为缩小训练-测试领域差距，论文引入fakACL数据集。其生成流程分三步：(1) 用Qwen3-4B-Instruct-2507生成NLP领域论文标题和约12句报告脚本；(2) 用spaCy分割句子，由SeamlessM4T-v2-large TTS合成语音；(3) 再将每个文本段输入LLM生成2对QA。最终获得21,400条语音和38,968个QA对，并被翻译至德意中三语。

### 💡 核心创新点

1. SpeechMapper训练目标工程优化：将原版SpeechMapper的MSE损失替换为包含L1对齐、余弦相似度、softmax对比和CTC辅助头的四项联合损失。此改动的动机在于Qwen3-4B的嵌入空间维度（2560维）更小（对比Llama-3.1-8B的4096维），作者假设需要更精准的对齐，因此提高了投影器的容量和损失函数的约束力，成功将projector-only模式的ASR WER从200%+降至14.2%。

2. fakACL领域内合成数据集：针对IWSLT评测数据源自ACL学术报告的特点，专门设计了一套合成流程：由LLM生成演讲脚本、TTS转换为语音、再利用LLM生成QA对。这是一种典型的、针对特定评测场景构建的领域适应策略，而非通用数据增强方法。

3. 多阶段训练与批次交替策略：在模态联合微调阶段，强制执行语音任务批次和对应文本任务批次的交替采样策略。论文指出，这种以语音模态为主、辅以对应文本任务的方式能持续提升最终模型性能。

### 📊 实验结果

论文在验证集、MCIF集和官方评测集上提供了多条基线和最终模型的多任务性能对比。

表1：验证集多任务性能对比
| Model | ASR (WER) | ST en-de | ST en-it | ST en-zh | SQA PartI | SQA PartII |
|---|---|---|---|---|---|---|
| SeamlessM4T-v2-large | 5.9 | 78.3 | 76.9 | 78.0 | - | - |
| Qwen3-4B-Instruct (zero-shot MT) | - | 71.0 | 67.7 | 74.3 | 89.1 | 70.2 |
| Qwen3-4B + LoRA (B) | - | 80.7 | 86.9 | 84.7 | 89.9 | 82.6 |
| SpeechMapper only (A) | 14.2 | 73.5 | 80.1 | 79.7 | 84.4 | 72.1 |
| BEST-IWSLT25-IF | 7.3 | 77.3 | 84.2 | 80.2 | 82.0 | 63.0 |
| SpeechMapper+LoRA setup 2 | 7.4 | 76.3 | 84.4 | 81.3 | 87.9 | 80.2 |

表2：MCIF验证集分数
| Model | ASR WER | ST COMET | SQA Acc |
|---|---|---|---|
| BEST-IWSLT25-IF | 12.6 | 0.743 | 0.417 |
| SpeechMapper only | 32.2 | 0.711 | 0.225 |
| Setup 1 | 12.0 | 0.772 | 0.428 |
| Setup 2 | 10.5 | 0.781 | 0.400 |

官方IWSLT 2026评测结果（Setup 1主提交）：
- ASR: WER 13.6%
- ST: COMET 0.763 (it), 0.765 (de), 0.794 (zh)
- QA: BERTScore 0.456 (it) - 0.531 (en)
- 惊喜任务（QE）: 准确率 0.786 (de) / 0.894 (zh), 格式准确率 0.997 / 1.000

通过在setup 1和setup 2间调整LoRA学习率（1e-5 vs 5e-5），论文揭示了ASR/ST性能与SQA性能之间存在明显的trade-off：降低LoRA学习率有利于SQA（Setup 1），而提高学习率则有利于ASR和ST（Setup 2）。但论文未对SpeechMapper的四个损失函数、fakACL数据集的贡献、批次交替策略进行单独的消融实验，也未提供统计显著性检验。

### 🔬 细节详述

- 训练数据：使用了CoVoST2、EuroParlST、GigaST、LibriSQA和fakACL。所有合成翻译均由SeamlessM4T-v2-large完成，并经COMET质量过滤（阈值0.85）。LibriSQA做了多项特殊预处理：MCQ答案扩展、无效问答对的相似度过滤和LLM生成、翻译后解析恢复答案选项。GigaST因意大利语性能弱而合成了额外的意大利语翻译。
- 损失函数：SpeechMapper使用L1损失、余弦相似度损失、softmax对比损失（权重0.1）和CTC损失的联合优化。LoRA和多模态阶段使用标准交叉熵损失。
- 训练设置：SpeechMapper优化器AdamW（lr=1e-4, 50k warmup, 500k步, 动态batching, 梯度累积2）；LoRA优化器AdamW（lr=3e-4, 100 warmup, 30k步, batch=16, 梯度累积8, weight decay=0.1）；多模态阶段SpeechMapper用lr=5e-5，LoRA用lr=1e-5 (setup 1) 或 5e-5 (setup 2)，3k步，batch=8，梯度累积6。
- 关键超参数：SpeechMapper维度1024→2048→2560，自注意力层数6，CNN步长(1,4)。LoRA rank=8, α=16, dropout=0。LLM为Qwen3-4B-Instruct-2507，嵌入维度2560，使用151664作为padding token。语音表示每两帧平均一次，相比去年的三帧平均减少了压缩比。
- 数据采样与状态管理：epoch由语音样本数定义。多模态阶段任务采样比0.3/0.4/0.3（ASR/ST/SQA），ST语言采样比de:it:zh=0.4:0.4:0.2，SQA各语言均匀采样。批次交替策略是训练的核心状态机制，确保语音和对应文本任务交替出现。
- 训练硬件：SpeechMapper 4×A100-80GB (2天)，LoRA 单卡A100-80GB (4天)，多模态联合微调 单卡A100-80GB (2小时)。
- 评估指标：ASR使用WER（MMS标准化），ST/MT使用COMET，SQA使用基于LLM的"yes/no"评判（三个LLM的平均准确率）。

### ⚖️ 评分理由

*   创新性 (0.8/2)：论文的方���创新高度有限。SpeechMapper的改进本质上是损失函数的工程性组合（L1替代MSE，加入softmax对比和CTC），fakACL是标准LLM生成+TTS的领域适应套路，均为在既定框架内的增量修改。作为竞赛系统报告，其贡献偏向工程实践，缺乏方法论层面的突破。
*   技术严谨性 (1.0/1.5)：技术实施和实验描述基本清晰，但存在多处严谨性缺陷。SpeechMapper四合一损失函数各部分的权重设定和必要性缺乏消融验证，仅凭"假设"驱动。批次交替策略声称能持续提升性能，但未提供对照实验。ASR和SQA间的trade-off仅被描述，未进行如帕累托前沿等深入分析。技术路线偏向经验驱动，学术严谨性中等。
*   实验充分性 (0.9/1.5)：实验覆盖了主要任务和指标，并对比了多个基线系统。然而，消融研究严重不足：未对SpeechMapper的各个损失项、fakACL数据集的增益、LoRA rank等关键设计进行消融。模型选择仅依赖MCIF单个验证集，存在过拟合特定测试场景的风险，且未进行多次运行或统计显著性检验。
*   清晰度 (0.8/1)：论文结构组织清晰，按照数据、方法、实验的顺序展开。但关键细节有遗漏：setup 1和2间的其他潜在超参数变化未言明；声称因"噪声"而排除GigaST进行评估，但未给出具体标准和影响分析；附录表格的标注在正文中解释不够即时。可大致复现，但需猜测部分实现细节。
*   影响力 (0.8/1.5)：作为竞赛优胜系统报告，该工作在语音助手多任务训练领域��特别是低资源/小模型适配方面，为工业界和竞赛社区提供了有价值的实践参考。但其学术影响力有限，方法是对现有技术的系统化工程组合，缺乏可推广到其他场景的新思想或基础性方法贡献。
*   开源 (0.3/1.5)：论文明确依赖多个开源模型（SeamlessM4T, Qwen）和库（torchtune, bergen）。但其核心产出——改进的SpeechMapper代码、fakACL数据集、训练配置和模型权重——均未提供任何链接或明确的开源承诺。仅公开引用了内部fork的torchtune和评估库bergen，开源透明度和社区可复用性极低。
*   可复现性 (0.4/0.5)：论文提供了大部分核心超参数（学习率、步数、批大小、优化器），但关键实现细节仍缺失，如SpeechMapper CNN的具体配置（kernel size, channels）、动态batching的具体策略、开源库的不完全等，使得精确复现存在障碍。有经验的工程师可以大致复现，但需要填补细节缺口。
*   工程/实践价值 (1.2/1.5)：作为系统报告，该工作的工程价值较高。它建立并展示了一条完整的、从数据合成到多阶段训练再到部署的pipeline。特别是关于小LLM在语音任务上的敏感性分析和多任务间的冲突问题，以及LibriSQA的详细预处理，为工业应用提供了宝贵经验。但pipeline的模块化和可配置性描述不足，限制了其跨任务迁移的便捷性。

### 🚨 局限与问题

论文明确承认的局限：
1. ASR和SQA之间存在性能trade-off，无法找到一个单一配置使两者同时达到最优（见setup 1 vs setup 2）。
2. Qwen3-4B-Instruct-2507在意大利语上表现极弱，需要上采样该语言数据。
3. SpeechMapper在projector-only模式下对命名实体处理能力很差（MCIF上WER高达32.2%）。
4. Qwen3-4B-Instruct在zero-shot时频繁出现输出冗长、重组文本的问题，严重影响评估得分。
5. fakACL数据集仅由Qwen3-4B一种LLM生成，可能存在偏差。

审稿人发现的潜在问题：
1. 严重缺乏关键消融实验：论文声称SpeechMapper的目标函数是主要改进，但四项损失的独立贡献和必要性完全未分析。类似地，fakACL数据集的引入是另一核心贡献，却无任何添加前后的性能对比来量化其真实增益。这使得文章的核心论点缺乏实验证据支撑。
2. 模型选择策��风险高：最终模型选择完全基于在单一小型验证集MCIF上的SQA得分。这种策略极易导致模型过拟合MCIF的特定分布，其在官方评测上的良好表现可能归功于fakACL对领域的近似，而非模型的鲁棒性。更可靠的做法应结合多个验证集或多重随机种子运行。
3. 任务冲突的浅尝辄止：论文观察到了ASR/ST和SQA间的性能跷跷板效应，但仅停留在现象描述。对于如何系统性地解决多模态多任务LLM中的灾难性遗忘和任务间梯度冲突，论文未给出任何分析或探索，这是该方向的核心科学问题。
4. 方法泛化性有限：整个pipeline，尤其是fakACL的构建，高度特化于IWSLT竞赛场景。这种极度领域定制（ACL学术报告）的策略在推广到通用的、开放的语音助手场景时，其效果存在巨大疑问。论文的价值因此更像一份竞赛解题报告，而非通用方法论论文。
5. 对非常规token处理的解释不足：使用未训练的token 151664作为padding token是一个trick，论文未解释其为何有效以及可能的风险（如模型输出该token），这为复现和理解带来了不确定性。
6. 过度claim改进动机：论文将SpeechMapper的改进动机归因于Qwen3-4B更小的嵌入维度（2560 vs Llama-3.1的4096），认为小空间需要更高精度。然后对比时使用的基线是MSE损失的SpeechMapper在Qwen3-4B上的表现（WER>200%），这并不能证明L1损失优于MSE，只能证明原版SpeechMapper在此设置下完全失败，任何有效的训练方法都可能带来提升。

---

[← 返回 2026-07-03 语音/音乐/音频论文速递](/audio-paper-digest-blog/posts/2026-07-03/)
