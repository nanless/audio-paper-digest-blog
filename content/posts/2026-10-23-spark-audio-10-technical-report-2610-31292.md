---
title: "Spark-Audio 1.0 Technical Report"
date: 2026-10-23
draft: false
tags: [语音识别, 多模态学习, 语音翻译, 音频理解, 多语言]
categories: [论文速递]
description: "Spark-Audio 1.0 要解决从只转写到真正理解语音的问题，用表示增强的掩码预训练加三阶段音频编码器与三阶段音频语言模型训练，在 1300 万小时音频下在多语种识别和真实场景对话上接近更大数据量模型，但复杂音频推理和指令遵循仍有差距。"
hiddenInHomeList: true
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_arxiv_id: "2610.31292"
paper_digest_workbench_contract: "researcher-workbench-v1"
paper_digest_reader_title: "Spark-Audio 1.0：用更少音频数据做多语种听懂与对话"
paper_digest_original_title: "Spark-Audio 1.0 Technical Report"
paper_digest_arxiv_version: 1
paper_digest_arxiv_versioned_id: "2610.31292v1"
paper_digest_arxiv_abs_url: "https://arxiv.org/abs/2610.31292v1"
paper_digest_arxiv_pdf_url: "https://arxiv.org/pdf/2610.31292v1.pdf"
paper_digest_primary_task: "语音识别"
paper_digest_tags_contract: "paper-tag-flat-tags-v2"
paper_digest_tags_selection_contract: "paper-tag-selection-v2"
paper_digest_tags_registry_version: "paper-tag-catalog-v2"
paper_digest_tags_registry_sha256: "cdef54423b5dfc00a1d017ef6639446d2ecd1d9c1acf71c8eb4f6219a46b7ba8"
paper_digest_tags_concepts: [{"facet":"task","id":"task.asr","label":"语音识别"},{"facet":"method","id":"method.multimodal-learning","label":"多模态学习"},{"facet":"task","id":"task.speech-translation","label":"语音翻译"},{"facet":"task","id":"task.audio-understanding","label":"音频理解"},{"facet":"setting","id":"setting.multilingual","label":"多语言"}]
paper_digest_primary_method: "多模态学习"
paper_digest_score: 6.5
paper_digest_rank_bucket: "前50%"
paper_digest_document_type: "模型报告"
paper_digest_one_sentence: "Spark-Audio 1.0 要解决从只转写到真正理解语音的问题，用表示增强的掩码预训练加三阶段音频编码器与三阶段音频语言模型训练，在 1300 万小时音频下在多语种识别和真实场景对话上接近更大数据量模型，但复杂音频推理和指令遵循仍有差距。"
paper_digest_authors: [{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Chenyue Zhang"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Cong Liu"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Dingshu Tian"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Dong Sun"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Genshun Wan"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Guanming Meng"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Guolong Zhong"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Hang Chen"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Hankun Yang"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Haoming Wang"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Haoyang Wang"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Hengquan Mei"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Huaxin Wu"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Jiahao Li"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Jiahuan Fan"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Jiamin Ma"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Jianqing Gao"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Jigang Tang"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Jin Liu"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Jingchen Li"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Jinjie Fu"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Kaixuan Guo"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Kun Song"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Li Xu"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Li Zhang"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Lijuan Liu"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Liyan Luo"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Ming Sheng"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Mingen Zhao"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Mingting Hu"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Ningqian Wu"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Pan Xu"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Pei Xu"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Qiangyu Tan"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Rui Wang"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Ruzi Li"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Saier Jin"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Shibo Xu"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Shifu Xiong"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Shihao Jiang"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Tan Liu"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Wei Wu"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Wei Xu"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Wenyu Wang"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Xiangyu Jia"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Xiao Li"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Xiaowen Duan"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Xiaoxue Guo"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Xin Chen"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Xinyi Liang"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Xu Chen"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Yanan Song"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Yang Xu"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Yexia Huang"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Yibo Li"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Yifan Xu"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Yikang Liu"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Yikun Li"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Yiting Lin"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Yi Fang"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Yuxin Wang"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Zan Feng"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Zhenchuan Li"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Zhuo Chen"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Zichao Zhang"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Ziwen Wang"}]
paper_digest_abstract_sha256: "0e8f5904624db6e067bf46c38fdc38e0e19ee5a91ab0293171260df3b9b1778a"
paper_digest_sidecars: {"citation.bib":{"sha256":"3a13a6b0127399db9dde2bac52015c296fa2f66fe2078b35ab26ec8c016a4753","url":"/audio-paper-digest-blog/data/papers/2026-10-23/2610-31292/citation.bib"},"citation.json":{"sha256":"6f4fde4679bbdc33a97e071aa95fcdafa5e60226b0babbc68895e84077f219b1","url":"/audio-paper-digest-blog/data/papers/2026-10-23/2610-31292/citation.json"},"citation.ris":{"sha256":"3b78df8085b9c890183dc1ba356c5b9c4a13e906b79a38c7c0e298a70b922fa0","url":"/audio-paper-digest-blog/data/papers/2026-10-23/2610-31292/citation.ris"},"rethink-context.json":{"contract":"paper-research-context-v2","sha256":"fe83e3cc855bb97a89646bd7e7ce68273e9705c48d3db0255139db1da1271509","url":"/audio-paper-digest-blog/data/papers/2026-10-23/2610-31292/rethink-context.json"}}
paper_digest_api_reader_contract: "beginner-researcher-v3"
paper_digest_api_reader_article_sha256: "2f0196ef3b155e65a680fbc3e8b2799ddd18f91d2d18e465d2910a51933fe839"
paper_digest_api_reader_plan_sha256: "c6fb45de849638455f47a730981fcf899c2e461f466c4ecffe3c95660a4454b4"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings-v4"
paper_digest_api_reader_source_bindings_sha256: "14d46359a5f1c4602b250c3e743d24cc10f0f8f3f0426e6597486accb26c6c66"
paper_digest_api_reader_source_table_count: 4
paper_digest_api_reader_source_formula_count: 4
paper_digest_api_reader_structured_artifacts_sha256: "75564d47cb0e74a4de9bba3e701b9a2536af95f426c2f1ecab93b6d1a56c6653"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity-v1"
paper_digest_api_reader_author_identity_sha256: "1d0785a7e06efbc166857d16f75fd88d8349719ad8943268b275d61eace2a4b7"
paper_digest_api_reader_author_count: 66
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity-v1"
paper_digest_api_reader_resource_identity_sha256: "26bbc6c37126d3c7097b9e9344abb8a3c354f8c6797b3d14c02442d597f50d15"
paper_digest_api_reader_resource_count: 1
paper_digest_api_reader_figure_persistence: "ephemeral-no-persisted-figure-assets-v1"
paper_digest_api_reader_decision_projection: "api-reader-decision-projection-v2"
---

# 📄 Spark-Audio 1.0：用更少音频数据做多语种听懂与对话

> 英文题目：*[Spark-Audio 1.0 Technical Report](https://arxiv.org/abs/2610.31292v1)*

<!--paper-tag-hierarchy-v1:start-->

**研究分类**

- **研究任务**：[语音识别](/audio-paper-digest-blog/papers/?concept=task.asr)；[语音翻译](/audio-paper-digest-blog/papers/?concept=task.speech-translation)；[音频理解](/audio-paper-digest-blog/papers/?concept=task.audio-understanding)
- **研究方法**：[多模态学习](/audio-paper-digest-blog/papers/?concept=method.multimodal-learning)
- **研究条件**：[多语言](/audio-paper-digest-blog/papers/?concept=setting.multilingual)

<!--paper-tag-hierarchy-v1:end-->

> 评分：**6.5/10** | 创新 1.2/2 | 技术严谨 1/1.5 | 实验充分 1.2/1.5 | 清晰度 0.8/1 | 影响力 1/1.5 | 开源 0/1.5 | 可复现 0.3/0.5 | 工程/实践 1/1.5


## 👥 作者与机构

- Chenyue Zhang：机构信息未能在本次解析中与作者逐人可靠绑定
- Cong Liu：机构信息未能在本次解析中与作者逐人可靠绑定
- Dingshu Tian：机构信息未能在本次解析中与作者逐人可靠绑定
- Dong Sun：机构信息未能在本次解析中与作者逐人可靠绑定
- Genshun Wan：机构信息未能在本次解析中与作者逐人可靠绑定
- Guanming Meng：机构信息未能在本次解析中与作者逐人可靠绑定
- Guolong Zhong：机构信息未能在本次解析中与作者逐人可靠绑定
- Hang Chen：机构信息未能在本次解析中与作者逐人可靠绑定
- Hankun Yang：机构信息未能在本次解析中与作者逐人可靠绑定
- Haoming Wang：机构信息未能在本次解析中与作者逐人可靠绑定
- Haoyang Wang：机构信息未能在本次解析中与作者逐人可靠绑定
- Hengquan Mei：机构信息未能在本次解析中与作者逐人可靠绑定
- Huaxin Wu：机构信息未能在本次解析中与作者逐人可靠绑定
- Jiahao Li：机构信息未能在本次解析中与作者逐人可靠绑定
- Jiahuan Fan：机构信息未能在本次解析中与作者逐人可靠绑定
- Jiamin Ma：机构信息未能在本次解析中与作者逐人可靠绑定
- Jianqing Gao：机构信息未能在本次解析中与作者逐人可靠绑定
- Jigang Tang：机构信息未能在本次解析中与作者逐人可靠绑定
- Jin Liu：机构信息未能在本次解析中与作者逐人可靠绑定
- Jingchen Li：机构信息未能在本次解析中与作者逐人可靠绑定
- Jinjie Fu：机构信息未能在本次解析中与作者逐人可靠绑定
- Kaixuan Guo：机构信息未能在本次解析中与作者逐人可靠绑定
- Kun Song：机构信息未能在本次解析中与作者逐人可靠绑定
- Li Xu：机构信息未能在本次解析中与作者逐人可靠绑定
- Li Zhang：机构信息未能在本次解析中与作者逐人可靠绑定
- Lijuan Liu：机构信息未能在本次解析中与作者逐人可靠绑定
- Liyan Luo：机构信息未能在本次解析中与作者逐人可靠绑定
- Ming Sheng：机构信息未能在本次解析中与作者逐人可靠绑定
- Mingen Zhao：机构信息未能在本次解析中与作者逐人可靠绑定
- Mingting Hu：机构信息未能在本次解析中与作者逐人可靠绑定
- Ningqian Wu：机构信息未能在本次解析中与作者逐人可靠绑定
- Pan Xu：机构信息未能在本次解析中与作者逐人可靠绑定
- Pei Xu：机构信息未能在本次解析中与作者逐人可靠绑定
- Qiangyu Tan：机构信息未能在本次解析中与作者逐人可靠绑定
- Rui Wang：机构信息未能在本次解析中与作者逐人可靠绑定
- Ruzi Li：机构信息未能在本次解析中与作者逐人可靠绑定
- Saier Jin：机构信息未能在本次解析中与作者逐人可靠绑定
- Shibo Xu：机构信息未能在本次解析中与作者逐人可靠绑定
- Shifu Xiong：机构信息未能在本次解析中与作者逐人可靠绑定
- Shihao Jiang：机构信息未能在本次解析中与作者逐人可靠绑定
- Tan Liu：机构信息未能在本次解析中与作者逐人可靠绑定
- Wei Wu：机构信息未能在本次解析中与作者逐人可靠绑定
- Wei Xu：机构信息未能在本次解析中与作者逐人可靠绑定
- Wenyu Wang：机构信息未能在本次解析中与作者逐人可靠绑定
- Xiangyu Jia：机构信息未能在本次解析中与作者逐人可靠绑定
- Xiao Li：机构信息未能在本次解析中与作者逐人可靠绑定
- Xiaowen Duan：机构信息未能在本次解析中与作者逐人可靠绑定
- Xiaoxue Guo：机构信息未能在本次解析中与作者逐人可靠绑定
- Xin Chen：机构信息未能在本次解析中与作者逐人可靠绑定
- Xinyi Liang：机构信息未能在本次解析中与作者逐人可靠绑定
- Xu Chen：机构信息未能在本次解析中与作者逐人可靠绑定
- Yanan Song：机构信息未能在本次解析中与作者逐人可靠绑定
- Yang Xu：机构信息未能在本次解析中与作者逐人可靠绑定
- Yexia Huang：机构信息未能在本次解析中与作者逐人可靠绑定
- Yibo Li：机构信息未能在本次解析中与作者逐人可靠绑定
- Yifan Xu：机构信息未能在本次解析中与作者逐人可靠绑定
- Yikang Liu：机构信息未能在本次解析中与作者逐人可靠绑定
- Yikun Li：机构信息未能在本次解析中与作者逐人可靠绑定
- Yiting Lin：机构信息未能在本次解析中与作者逐人可靠绑定
- Yi Fang：机构信息未能在本次解析中与作者逐人可靠绑定
- Yuxin Wang：机构信息未能在本次解析中与作者逐人可靠绑定
- Zan Feng：机构信息未能在本次解析中与作者逐人可靠绑定
- Zhenchuan Li：机构信息未能在本次解析中与作者逐人可靠绑定
- Zhuo Chen：机构信息未能在本次解析中与作者逐人可靠绑定
- Zichao Zhang：机构信息未能在本次解析中与作者逐人可靠绑定
- Ziwen Wang：机构信息未能在本次解析中与作者逐人可靠绑定

## 📌 核心摘要

研究对象是输入语音与文本、输出文本的语音基础模型，难点在于长时多语音频理解与语言推理能力需同时保留。音频编码器沿用Whisper large-v3编码器结构，同一套参数通过注意力可见模式兼容流式与非流式计算。表示增强的BEST-RQ做掩码预测时，送入量化器的表征由低层声学特征改为冻结多语言识别教师深层语义表示，形成语义感知的离散目标。编码器再经转写语音的多语言识别适配，扩展到识别与副语言及声音事件的多任务文本目标训练，输出进入音频-语言模型。音频-语言模型先只训练适配器对齐，再全参数联合训练并做长上下文扩展，随后经监督微调与双轨在策略蒸馏优化。在FLEURS多语言识别评测的扩展组20语言子集上，以平均错误率衡量模型为6.30%，低于Qwen3.5-Omni-Flash的12.08%和Qwen3.5-Omni-Plus的6.65%。结论适用于报告的公开与自有评测，自有集优势可能与数据分布有关，更广语种识别与复杂推理仍不足，原文未披露训练、推理或部署成本。

## 🔗 开源与复现资源

- 第三方资源：<https://iflytekresearch.iflytek.com/experience/spark-audio> — 链接可访问（HTTP 200）

可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 为什么只会转写不够用

这篇报告研究的输入是语音和文本，输出是文本。任务不只是把声音变成逐字稿，还包括多语种识别、方言识别、语音翻译、声音事件和说话人属性等音频感知理解，以及基于语音或文本的对话。

传统识别系统优化的是听清楚，即在干净条件下把声学信号转成文字。但语音里还有情感、性别、年龄、语调意图和环境声音，这些在逐字稿里会被丢掉。当输入法、会议转写、客服和智能座舱都要直接用语音做判断和交互时，只给转写就不够，需要一个能把声学感知和语言推理放在同一模型里的基础模型。

对刚入门的读者，关键是区分两个目标：听清楚要求时间对齐准确，听懂还要求模型能利用上下文做翻译、问答和推理。本文的模型正是按后者设计的通用底座，而不是单个任务的专用模块。

### 已有路线与本文的不同假设

近年常见路线是把连续音频表示投影到大语言模型的词元空间，再用统一的条件文本生成框架做识别、翻译、理解和对话。问答系列的多模态系统证明了单模型可以横跨文本、图像、音频和视频，并在不少音频榜单上取得很好成绩。

本文没有在该框架之外另起新范式，而是在两个约束下做验证。第一是算力约束，即能否完全在国产加速器上从编码器预训练一直做到音频语言模型预训练和后训练。第二是数据效率约束，即能否用更少音频数据达到可用水平。报告明确写了模型在华为昇腾 910B 和海光 BW1000 等国产芯片上训练，并强调音频总量为 13,000,000 小时，约为可比尺寸的 Qwen3.5-Omni-Flash 的十分之一。

这种比较只有在任务、划分和指标一致时才有意义。公开榜单部分本文与 Qwen3.5-Omni-Flash、Qwen3.5-Omni-Plus 和 Gemini 3.1 Pro 在同一表格中对比，自有场景部分则来自会议转写和语音助手等真实应用数据，不能直接与公开榜单的分数互换。

### 模型要接受什么并保证什么

模型的输入是文本和音频，输出是文本。它要支持 99 种语言和 202 种方言的识别，还要处理中文方言、英文、其他语言的翻译和理解。必须保留的信息包括语言内容、说话人属性、情感等副语言线索，以及非语音声学信息。

困难在于三点。第一是时间分辨率不同，音频编码器输出为 50 赫兹，直接给语言模型太长。第二是能力冲突，加入语音后文本侧的知识、数学和代码能力容易退化。第三是长语音和多条件混合，噪声、低音量、长上下文和多方言同时存在时，单一数据配比很难兼顾。

本文把问题拆成编码器先学通用表示，再让音频语言模型分阶段对齐和联合优化，最后用后训练把文本侧的指令遵循迁移到语音输入。每一步的输入处理和代价都不同，下面沿一个样本展开。

### 从一段语音到一段文字的完整链路

设想输入一段 16 千赫兹的语音波形，先算 128 维梅尔特征，再经两层 1 维卷积做时间下采样，然后进入 32 层变换器编码器，得到声学表示。同一套参数通过不同的注意力可见模式同时支持流式和非流式推理。

编码器表示经由适配器降采样到 12.5 赫兹，再与任务提示词和可选文本上下文拼接，进入 30B-A3B 混合专家语言模型。所有任务都被写成条件文本生成，例如识别要指定转写语言，翻译要指定源语言和目标语言，方言识别还要指定输出格式，模型自回归生成目标文本。

为帮助理解这条链路，先看编码器结构与训练课程的总览图。图的上半是共享参数的流式与非流式编码器，中部是表示增强预训练的目标生成与学生训练，下半是 3 个阶段的数据与目标变化。

> **看图路径：** 1. 先看图 a 从语音波形经梅尔特征和两层一维卷积到 32 层变换器编码器的主路径；2. 再看图 b 左侧固定教师生成离散目标、右侧可训练学生做掩码预测的监督虚线；3. 最后看图 c 从无标注预训练到多语种识别适配再到多任务训练的数据量标注

[![原论文 Figure 1：Overview of the audio encoder architecture and training curriculum.](https://arxiv.org/html/2610.31292v1/Pretrain-BESTRQ-V5-caption-V3-Spark-Audio.svg)](https://arxiv.org/html/2610.31292v1/Pretrain-BESTRQ-V5-caption-V3-Spark-Audio.svg)

*论文图 1。原论文 Figure 1:：“Overview of the audio encoder architecture and training curriculum.”。*

该图确实可见三块面板。图 a 显示语音波形到梅尔特征再到共享参数框的箭头，框内标出两层卷积和 32 层编码器。图 b 左侧是固定的多语种识别教师经最终层归一化后接固定随机投影和固定码本，产生离散目标，右侧是加掩码的可训练语音编码器加词元预测，底部虚线标出离散目标监督。图 c 从左到右标出无标注语音从 150 万到 260 万再到 13,000,000 小时、多语种识别适配用 1,300,000 小时监督语音、多任务训练覆盖识别与性别年龄情感和声音事件。它帮助读者把后文的公式和 3 阶段数据对应到具体模块。

### 表示增强的掩码预测如何造出训练目标

编码器第一阶段不需要学生数据的转写。做法是准备一个已冻结的多语种识别教师，它基于 Whisper large-v3 结构并在约 1,500,000 小时多语种语音上用识别目标训练过。对输入语音，教师编码器输出最终层归一化后的上下文表示序列。

随后用固定随机投影量化器把每个教师表示变成离散编号。投影矩阵和码本都只随机初始化一次并全程固定，计算是先投影再做二范数归一化，然后找最近的码本向量编号，逐帧得到离散目标序列。这一步保留了原 BEST-RQ 的量化流程，变化的是送入量化器的表示从底层声学特征换成了教师的 32 层编码器深层表示，因此称为语义知情的离散目标。

**BEST-RQ × 表示增强：** BEST-RQ 指用固定随机投影把输入变成离散编号、再让学生模型在被遮挡位置预测编号的自监督方法；表示增强指把送入该随机量化器的输入从底层声学特征换成已有多语种识别监督的教师模型的深层表示。二者搭配后，预测目标仍是离散编号且不需要学生数据的转写，但目标中带入了识别学到的语义先验，使掩码预测任务更紧凑、更具区分性。

学生端收到的是同一段语音的加掩码版本，经可训练编码器得到表示，再经线性预测头输出对码本编号的分类分布。训练目标是在被选中的掩码位置上的平均交叉熵，只更新学生编码器和预测头，教师、投影矩阵和码本都不更新。监督来自离散编号，既不回归教师隐状态，也不匹配教师的识别输出分布。

\[\mathcal{L}_{\text{BEST-RQ}}=-\frac{1}{|\mathcal{I}_{\mathrm{mask}}|}\sum_{t\in\mathcal{I}_{\mathrm{mask}}}\log p_{\theta,\phi,t}\bigl(q_{t}\mid\widetilde{\mathbf{X}},\mathbf{M}\bigr).\]

该公式要约束的是掩码位置的预测准确性。符号中下标 t 表示编码器时间步，qt 是该步的教师离散目标，掩码集合考虑了时间下采样和填充排除。分母是对有效掩码位置求平均，因此长短句的贡献按有效位置归一，而不是按样本数平均。

### 同一套编码器如何同时做流式与多任务

编码器采用 Whisper large-v3 编码器结构，单套参数支持流式和非流式。训练时每个批次以相等概率选择全上下文或流式计算，用所选注意力配置更新共享编码器。这种设计让大预训练阶段就同时暴露于两种注意力模式，为后续监督适配提供共同初始化。

第二阶段把监督形式从语义知情的掩码预测切换为直接的多语种转写监督，用约 1,300,000 小时已转写多语种语音训练，来源与教师训练数据同源。此时模型被直接优化去恢复语音的语言内容，流式与非流式仍共享参数。

**音频编码器 × 适配器：** 音频编码器负责把语音波形变成携带语言内容和非语言声学线索的上下文表示，输出频率为 50 赫兹；适配器由多层感知机加卷积下采样组成，负责把该表示变成 12.5 赫兹的序列并映射到语言模型的输入空间。二者分工是编码器保留细粒度时间结构和多任务感知能力，适配器解决时间分辨率和空间对齐问题，组合后语言模型才能直接以自回归方式消费音频。

第 3 阶段从识别扩展到 5 个任务的文本目标，包括识别、性别、年龄、情感和声音事件。识别目标是转写文本，其他任务目标是自然语言描述，例如说话人是年轻人这类句子。这样编码器不仅学语言内容，还被迫保留说话人属性、情感表达和非语音声音，适合作为下游语音语言建模的前端。

**流式 × 非流式：** 流式指只允许看到过去和有限未来分块的注意力可见模式，用于在线识别；非流式指全上下文注意力，用于离线高精度理解。本文用同一套编码器参数支持两种模式，训练时按批次以相等概率选择其中一种注意力配置更新共享参数。组合的意义是用一套参数同时学到局部因果建模和全局上下文建模，避免维护两套前端。

3 阶段的数据规模是 1,500,000 小时到 2,600,000 小时再到 13,000,000 小时，覆盖 99 种语言。架构、冻结教师、随机量化器和掩码目标在不同数据规模下保持不变，变化的是语料规模和监督形式。

### 音频语言模型分三段预训练时冻结了什么

音频语言模型预训练把预训练好的音频编码器与在大量文本上预训练过的 30B-A3B 混合专家语言骨干组合。第一段只训练适配器，冻结编码器和语言骨干，主要用识别和音频理解数据做对齐，不放推理类数据，先建立音频到语言输入空间的映射。

第二段解冻全部组件，联合优化编码器、适配器和语言骨干。主要用大规模弱监督数据覆盖多语言和多声学条件，辅以高质量监督样本，音频任务包括多语种和方言识别、语音翻译和音频理解，文本侧保留通用、翻译、科学数学、多语种和代码数据，以维持文本能力。第三段继续联合优化，把最大序列从 4K 扩展到 32K，音频块最长从 30 秒放宽到 45 秒，超长录音分块独立编码再按时间顺序拼接，并增加长语音识别、长音频理解和带文本上下文的识别。

训练使用 BF16 和 AdamW，梯度范数裁剪为 1，标签平滑系数为 0.05。批次按来源分层构造以保持配比，不按音频长度排序。每个优化步的损失按有效目标词元数归一，避免不同微批次目标长度不同带来偏差。

\[\mathcal{L}=\frac{\sum_{b,t}m_{b,t}\ell_{b,t}}{\sum_{b,t}m_{b,t}},\]

该公式计算的是一个优化步的总损失。分子是对所有样本和位置的掩码加权标签平滑交叉熵求和，分母是有效目标词元总数，求和范围跨越梯度累积和数据并行。长上下文阶段还结合 8 路专家并行和 4 路上下文并行，音频块先按批次维分布编码，再与文本嵌入拼接后按序列维切分计算。

**监督微调 × 在策略蒸馏：** 监督微调指用高质量多任务对话数据直接训练模型输出目标文本，巩固识别、翻译、理解和交互能力；在策略蒸馏指让当前学生自己在语音和文本两种输入下采样生成回复，再用冻结的纯文本教师在转写文本加学生已生成前缀的条件下给出分布并监督学生。两者搭配是前者提供任务覆盖，后者把文本侧的推理和指令遵循行为迁移到语音输入，同时用文本轨迹维持文本能力。

### 后训练如何把文本能力搬到语音输入

监督微调用 ChatML 格式的高质量多任务数据训练一个轮次，学习率从 1 乘 10 的负 5 次方余弦衰减到 1 乘 10 的负 6 次方。数据包括基础音频任务的精选子集，以及认知和交互数据。认知任务有文本到文本和语音到文本两种格式，后者把文本指令用语音合成转成口语输入，目的是缩小语音与文本在指令遵循和推理上的差距。

随后是在策略蒸馏用双轨迹设计。同一学生模型分别在口语输入和对应转写文本下采样生成文本回复，冻结的纯文本教师始终在转写文本加学生已生成前缀的条件下给出分布。语音轨把教师监督迁移到口语输入，文本轨继续监督文本能力，联合目标是改善语音条件生成同时限制文本退化。

\[\mathbf{y}_{b}^{m}\sim\rho_{\theta}(\cdot\mid x_{b}^{m}),\qquad m\in\{a,t\},\]

该公式描述学生 rollout，即每个语音文本对在两种模态下各自采样一条文本回复，采样温度、核采样阈值、top-k 和重复惩罚定义了解码分布。教师随后在各自前缀上打分，因此两条轨迹的前缀不同，学生能看到自己解码策略访问到的前缀上的教师监督。

蒸馏只在教师分数最高的前 64 个词元上计算局部反向 KL，蒸馏温度为 0.5。每条轨迹先按各自有效回复词元数归一，再以相等系数相加，教师冻结，采样轨迹在每次梯度更新时视为固定。该阶段只用数万条推理和指令遵循的语音文本对，不新增识别或通用音频感知目标，但报告在部分识别和感知评测上有小幅提升，作者解释为语言信息利用和任务理解变好所致。

\[\mathcal{K}_{b,i}^{m}=\operatorname{TopK}_{K_{\mathrm{KD}}}\left(\{z_{\phi,b,i}^{m}(v)\}_{v\in\mathcal{V}}\right),\]

该公式选出每步教师分布的前 64 个候选。在此支撑集上对学生和教师 logits 分别做温度归一化，再算 KL。它不是全词表反向 KL，目的是把分布比较限制在教师认为最可能的候选上，降低计算量。

### 在什么数据和指标上比较

公开音频评测包括 FLEURS 多语种识别、中文的 AISHELL6 低语、WenetSpeech 网络与会议子集、SpeechIO、方言的 KeSpeech、英文的 FLEURS 英文、LibriSpeech、speechocean762 非母语和 TED 演讲。翻译在 FLEURS 上测中英双向，理解用 MMAR、AIR-Bench 和 MMSU，口语交互用 VoiceBench。

自有评测来自会议转写和语音助手等真实场景，包括通用中文识别、202 方言语料、多语种 14 语与 18 语、口语交互的通用交互与指令遵循、中英翻译双向，以及高噪声和低音量中文识别。文本侧用 MMLU-Pro、CMMLU、C-Eval 测知识，IFEval 和 IFBench 测可验证指令遵循，MATH-500 和 GSM8K 测数学，HumanEval 测代码。

**字错率 × BLEU：** 字错率和词错率衡量转写与参考文本之间的编辑错误比例，越低越好，中文常用字错率、英文常用词错率；BLEU 衡量机器翻译输出与参考译文的重叠程度，越高越好。本文同时用两类指标是因为识别要求逐字准确，翻译允许同义不同字，组合起来才能区分是听错了还是翻译表达差异。

识别用词错率或字错率表示为百分比，越低越好，翻译用 BLEU 越高越好，理解和交互用官方分数或准确率。自有口语交互用 DeepSeek 打分 0 到 5 分，满分率指得满分 5 分的回复占比。比较对象为 Qwen3.5-Omni-Flash、Qwen3.5-Omni-Plus 和有结果的 Gemini 3.1 Pro，文本侧主要与 Qwen3.5-Omni-Flash 对比。所有胜负陈述只针对表格中实际报告的子集。

### 公开识别榜单上哪些赢了哪些没赢

比较的问题是在相同公开划分和相同错误率指标下，Spark-Audio 1.0 与更大数据量模型的位置如何。指标方向是字错率与词错率越低越好。

公平条件是同一基准的同一子集，FLEURS 还按 14 语、20 语和 64 语分组报告。

| 条件 | 指标 | Spark-Audio 1.0 | Qwen3.5-Omni-Flash | 更强对照 |
| --- | --- | --- | --- | --- |
| FLEURS64 语平均 | 错率 | 31.89% | 39.00% | Gemini 3.1 Pro 20.09% 更低 |

优势集中在 FLEURS 中英文、部分英文条件和前两组多语种平均，相对各自最佳对照有约 35.2% 和 16.7% 的错误率下降。但在 AISHELL6 低语、SpeechIO、KeSpeech、LibriSpeech 另一子集和 WenetSpeech 网络与会议子集上，Qwen3.5-Omni-Plus 或两款 Qwen 变体更低。64 语组虽然好于同尺寸的 Flash，但落后于 Plus 和 Gemini，说明更广的多语种识别仍是短板。该结论只在已报告的公开子集上成立，不能推广到未测语言。

### 真实场景的方言多语种与困难声学表现

比较的问题是来自真实应用的自有集上，模型是否保持优势，以及高噪声和低音量下差距多大。指标仍是字错率或词错率越低越好，翻译用 BLEU 越高越好。

自有集与公开集语料不同，分数不能跨表直接比较，困难声学单独成表。

| 条件 | 指标 | Spark-Audio 1.0 | Qwen3.5-Omni-Flash | 最佳对照 |
| --- | --- | --- | --- | --- |
| 高噪声中文 | 字错率 | 37.76% | 38.66% | Flash 为已报告中最强 |
| 低音量中文 | 字错率 | 17.17% | 23.62% | Flash 为已报告中最强 |

自有识别四项均为表中最低，方言相对最佳对照低 5.50 个百分点，相对下降 27.8%。困难声学中低音量优势较大，相对下降 27.3%，高噪声仅相对下降 2.3%，且高噪声绝对字错率仍高达 37.76% 左右，说明该集上仍有大量错误。限制是自有集未公开划分细节，方言和多语种优势不能直接推断到其他方言或信噪比。

### 翻译理解与对话为何公开自有结论不同

比较的问题是翻译、音频理解和口语交互是否在公开与自有语料上一致。翻译指标 BLEU 越高越好，理解用准确率或官方分数越高越好，对话公开用 VoiceBench 分数、自有用满分率越高越好。

翻译方向分中译英和英译中，理解区分基础感知与复杂推理。

| 条件 | 指标 | Spark-Audio 1.0 | Qwen3.5-Omni-Flash | 表中最佳 |
| --- | --- | --- | --- | --- |
| 自有中译英 | BLEU | 44.76 | 32.05 | 44.76 为最高 |
| 自有英译中 | BLEU | 51.40 | 39.97 | 51.40 为最高 |
| FLEURS 中译英 | BLEU | 28.40 | 31.20 | Qwen3.5-Omni-Plus 32.20 |
| FLEURS 英译中 | BLEU | 44.54 | 46.60 | Qwen3.5-Omni-Plus 47.80 |
| AIR-Bench | 分数 | 71.85 | 72.63 | Qwen3.5-Omni-Plus 79.23 |
| VoiceBench | 分数 | 90.35 | 87.80 | Qwen3.5-Omni-Plus 93.10 |

翻译呈现语料依赖，自有集领先最佳对照 7.41 和 7.97 个 BLEU 点，FLEURS 则落后。理解上 AIR-Bench 接近 Flash 但低于 Plus，MMSU 为 73.96% 高于 Flash 的 72.20% 但低于 Plus 和 Gemini，MMAR 为 57.90% 低于 3 个对照，支持基础感知接近、复杂推理有差距的判断。对话上 VoiceBench 好于 Flash 和 Gemini 但低于 Plus，自有通用交互满分率 63.28% 和指令遵循 67.92% 同样好于 Flash 但低于 Plus 约 2 个百分点。未胜出项明确，说明交互优势随榜单和要求而变。

### 编码器单独拿出来比是否更强

比较的问题是编码器本身的表示质量如何，排除语言模型大小的影响。做法是把 Spark-Audio 编码器、Whisper large-v3 编码器和 Qwen3-Omni 音频变换器编码器分别接同一个 Qwen3-4B 语言模型，只训练适配器映射，其他冻结，训练数据、优化设置和可训练参数量一致。只有带星号的多语种 AuT 结果用 2 阶段对齐，第二阶段联合训练编码器和适配器并用 LoRA 微调语言模型。

| 条件 | 指标 | Spark-Audio 编码器 | Whisper large-v3 | AuT 编码器 |
| --- | --- | --- | --- | --- |
| 文本知识差异 | 准确率差 | 与 Flash 差小于 0.6 个百分点 | — | — |

适配器-only 下 Spark-Audio 编码器在 20 个中英文集中对 Whisper 全胜，对 AuT 在 19 个上更优，FLEURS37 语平均低 19.41 和 12.22 个百分点。理解平均高 28.00 和 6.95 个百分点，声音与场景四集平均高 16.72 个百分点，年龄高 13.50 个百分点。但情感 CASIA 上为 25.00% 低于 AuT 的 32.50%，性别为 78.50% 低于 AuT 的 95.80%，说明增益集中在声音、场景和年龄，情感与性别不均匀。文本侧知识三项与 Flash 差异小于 0.6 个百分点，数学代码有胜有负，指令遵循两项均低于 Flash，支持文本能力大体保持但指令遵循偏弱的结论。该对照依赖相同适配器预算，换更大语言模型或全参数微调时结论可能变化。

### 哪些结论不能超出已测范围

首先是指令遵循和复杂音频推理的差距有直接证据。文本 IFEval 为 82.19% 对 85.20%，IFBench 为 36.33% 对 38.40%，MMAR 为 57.90% 低于 3 个对照，64 语组和部分中文方言公开集也未领先。这些不是训练资源不足的借口，而是当前配比和模型能力的边界。

其次是高噪声绝对错误率高。即使在自有高噪声集上领先，字错率仍在 37% 量级，说明真实强噪声下仍不可用。低音量优势大也不能推广到混响、远场或多说话人，因为报告未评测这些条件，未来工作才计划扩展到小时级长语音、多说话人和空间感知。

最后是比较范围的限制。自有集来自真实场景但未公开，外部无法复算。公开翻译和部分识别落后于 Plus，大模型闭源系统的结果也只在有报告的子集上可比。把自有集的领先直接说成全面超越，或把十分之一数据说成任何任务都够用，都是夸大。

### 要复现第一步该准备什么

复现应从编码器开始，而不是直接训完整对话模型。先准备无标注多语种音频和一个已在约 1,500,000 小时上训练好的 Whisper large-v3 结构的多语种识别教师，冻结教师，用固定随机投影和码本生成离散目标，再训练学生编码器做掩码预测。数据按 150 万到 260 万再到 13,000,000 小时扩展，批次内以相等概率选流式或非流式注意力。

再准备约 1,300,000 小时转写数据做识别适配，然后加入性别、年龄、情感和声音事件的文本描述做多任务训练。音频语言模型阶段先只训适配器，再全参数联合训练，最后扩展到 32K 序列和 45 秒音频块。文本数据要全程保留，后训练先做一轮监督微调，再用数万条语音文本对做双轨迹蒸馏，蒸馏取前 64 词元、温度 0.5、学习率 5 乘 10 的负 6 次方。

关于资源可用性，论文正文提到体验链接为第三方页面且当前可访问，但这只证明论文提到该链接，不证明作者已开源代码或权重。国产芯片训练链路、数据配比和部分超参数已披露，但完整数据和训练代码未在所给证据中确认，因此复现第一步应先验证教师和量化器的固定性，再小规模验证掩码预测损失是否下降。

### 什么时候值得尝试还缺什么验证

当任务是多语种和多方言识别、真实场景的语音翻译和口语交互，且算力只能用国内芯片、数据预算有限时，这个路线值得尝试。它的价值在于用语义知情目标和分阶段联合训练，在 13,000,000 小时量级上达到与更大数据量同尺寸模型可比的效果，尤其在自有真实场景和低音量条件下优势较明显。

当任务是复杂音频推理、严格指令遵循或强噪声远场识别时，应谨慎。MMAR、IFEval、IFBench 和高噪声绝对分数都显示短板，此时更需要补高质量推理数据和困难声学覆盖，而不是简单加无标注数据。

还缺的验证包括自有集的公开划分与统计显著性、长语音与多说话人的系统评测，以及编码器对照在更大语言模型下的稳定性。只有补上这些，才能判断数据效率结论能否从已测子集推广到更广的应用域。

<details>
<summary>📎 论文与评分元数据</summary>

排名：前50% | 文档类型：模型报告 | [arXiv 原文](https://arxiv.org/abs/2610.31292v1)

</details>

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。

- 评分规则：type-aware-v1

- 评分模型：muse-spark-1.3-contributor

- 评分请求协议：openai_responses

---

[← 返回 2026-10-23 语音/音乐/音频论文速递](/audio-paper-digest-blog/posts/2026-10-23/)
