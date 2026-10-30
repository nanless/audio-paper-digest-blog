---
title: "EmbeddingGemma 2: Unified and Efficient Multimodal Representations"
date: 2026-10-29
draft: false
tags: [统一多模态检索, 对比学习, 知识蒸馏, 模型量化, 模型权重]
categories: [论文速递]
description: "EmbeddingGemma 2 用 271M 双向主干加视觉与音频编码器把交错多模态输入映射为 768 维单位向量，经文本预微调、多模态预微调和对比微调三阶段学习，在代码、图像视频文档和音频检索上建立新的参数效率前沿，且支持截断与量化部署。"
hiddenInHomeList: true
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_arxiv_id: "2610.37364"
paper_digest_workbench_contract: "researcher-workbench-v1"
paper_digest_reader_title: "一个向量空间装下文本图像视频音频：EmbeddingGemma 2 解读"
paper_digest_original_title: "EmbeddingGemma 2: Unified and Efficient Multimodal Representations"
paper_digest_arxiv_version: 1
paper_digest_arxiv_versioned_id: "2610.37364v1"
paper_digest_arxiv_abs_url: "https://arxiv.org/abs/2610.37364v1"
paper_digest_arxiv_pdf_url: "https://arxiv.org/pdf/2610.37364v1.pdf"
paper_digest_primary_task: "统一多模态检索"
paper_digest_tags_contract: "paper-tag-flat-tags-v2"
paper_digest_tags_selection_contract: "paper-tag-selection-v2"
paper_digest_tags_registry_version: "paper-tag-catalog-v2"
paper_digest_tags_registry_sha256: "cdef54423b5dfc00a1d017ef6639446d2ecd1d9c1acf71c8eb4f6219a46b7ba8"
paper_digest_tags_concepts: [{"facet":"task","id":"task.unified-multimodal-retrieval","label":"统一多模态检索"},{"facet":"method","id":"method.contrastive","label":"对比学习"},{"facet":"method","id":"method.distillation","label":"知识蒸馏"},{"facet":"method","id":"method.quantization","label":"模型量化"},{"facet":"artifact","id":"artifact.model-weights","label":"模型权重"}]
paper_digest_primary_method: "对比学习"
paper_digest_score: 7.3
paper_digest_rank_bucket: "前50%"
paper_digest_document_type: "模型报告"
paper_digest_one_sentence: "EmbeddingGemma 2 用 271M 双向主干加视觉与音频编码器把交错多模态输入映射为 768 维单位向量，经文本预微调、多模态预微调和对比微调三阶段学习，在代码、图像视频文档和音频检索上建立新的参数效率前沿，且支持截断与量化部署。"
paper_digest_authors: [{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Henrique Schechter Vera"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Sahil Dua"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Jovan Andonov"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Sara Smoot"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Sebastian Russo"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Ivan Llanos"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Max Matveev"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Jae Hyeon Yoo"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Kat Black"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Shih-Cheng Huang"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Josiah Aklilu"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Maarten Grootendorst"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Omar Sanseviero"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Chandramouli Amarnath"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Ian Ballantyne"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Zhe Li"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Daniel Salz"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Ibrahim Alabdulmohsin"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Ilya Philippov"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Kristen Quan"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Glenn Cameron"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Edouard Yvinec"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Luciano Martins"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Doug Reid"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Sindhu Raghuram Panyam"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Weiyi Wang"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Hengxuan Ying"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Madhuri Shanbhogue"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Tanmaya Dabral"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Shanfeng Zhang"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Juyeong Ji"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Renjie Wu"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Joe Zou"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Xu Chen"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Yunan Zhang"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Yu-Hui Chen"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Matthew Soulanille"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Vinod Mamillapalli"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Yi-Chun Kuo"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Wai Hon Law"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Matt Kreileder"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Alice Zheng"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Suril Shah"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Mogan Shieh"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Pooja Consul"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Alberto Montes"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Andreas Hess"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Andres Sevilla"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Babak Samari"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Brendan McCloskey"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Brian Potetz"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Daniel Cer"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Georgios Kathareios"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Gustavo Hernández Ábrego"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Hesen Zhang"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Ji Ma"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Jiaxing Wu"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Keegan Mosley"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Paul Suganthan"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Rui Meng"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Shen Gao"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Shengcao Cao"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Yi-Ting Chen"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Yichang Chen"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Zhongli Ding"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Kendra Byrne"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Cormac Brick"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Olivier Lacombe"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Qin Yin"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Tris Warkentin"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Armand Joulin"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Tom Duerig"},{"affiliations":["EmbeddingGemma Team, Google"],"name":"Mojtaba Seyedhosseini"}]
paper_digest_abstract_sha256: "c1138b4e5a870fb337975631354b24cd683448ab2a4a807f25c050c23806319d"
paper_digest_sidecars: {"citation.bib":{"sha256":"1be0077dbb9563f3954d14eb49f48a5db81e2315581d49b3a94ac128f5009b1f","url":"/audio-paper-digest-blog/data/papers/2026-10-29/2610-37364/citation.bib"},"citation.json":{"sha256":"5a91a9e9bcdf95e65a3ff4fb299a8b5fdd70eaa5004132f93e17d3474306bfb0","url":"/audio-paper-digest-blog/data/papers/2026-10-29/2610-37364/citation.json"},"citation.ris":{"sha256":"96c5b08420b9b1696dbb3b8fee10b85f1887118c7c2a0098063e3895cb45b443","url":"/audio-paper-digest-blog/data/papers/2026-10-29/2610-37364/citation.ris"},"rethink-context.json":{"contract":"paper-research-context-v2","sha256":"f420c3abc89cdba9699ea332e3804410b8c38076576932bcaa53db48c75afb27","url":"/audio-paper-digest-blog/data/papers/2026-10-29/2610-37364/rethink-context.json"}}
paper_digest_api_reader_contract: "beginner-researcher-v3"
paper_digest_api_reader_article_sha256: "426196caa637b2f35c64a75422a983a1070ab61db00c6cb52006467f9a639ad9"
paper_digest_api_reader_plan_sha256: "59969868a6c3d6713c2a423162cc7db4304f80a4340982978955a7d054505665"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings-v4"
paper_digest_api_reader_source_bindings_sha256: "2098ac94a3656402614e99036c773694c7806297c942b28252b1a58f291da1e2"
paper_digest_api_reader_source_table_count: 4
paper_digest_api_reader_source_formula_count: 1
paper_digest_api_reader_structured_artifacts_sha256: "79cd5aceb745a6cf1763aacde7f93a540b700025dba87f430dfe0d35846b7f90"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity-v1"
paper_digest_api_reader_author_identity_sha256: "0adcb034efc1294b9f1b20c496a90ed2822081c76c5f22ea9129f743eb36ba46"
paper_digest_api_reader_author_count: 73
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity-v1"
paper_digest_api_reader_resource_identity_sha256: "5456a575e0f47dd1893ecced909d2f2da255af7133c7e6ef97b2c7d93380acf9"
paper_digest_api_reader_resource_count: 2
paper_digest_api_reader_figure_persistence: "ephemeral-no-persisted-figure-assets-v1"
paper_digest_api_reader_decision_projection: "api-reader-decision-projection-v2"
---

# 📄 一个向量空间装下文本图像视频音频：EmbeddingGemma 2 解读

> 英文题目：*[EmbeddingGemma 2: Unified and Efficient Multimodal Representations](https://arxiv.org/abs/2610.37364v1)*

<!--paper-tag-hierarchy-v1:start-->

**研究分类**

- **研究任务**：[统一多模态检索](/audio-paper-digest-blog/papers/?concept=task.unified-multimodal-retrieval)
- **研究方法**：[对比学习](/audio-paper-digest-blog/papers/?concept=method.contrastive)；[知识蒸馏](/audio-paper-digest-blog/papers/?concept=method.distillation)；[模型压缩](/audio-paper-digest-blog/papers/?concept=method.compression) → [模型量化](/audio-paper-digest-blog/papers/?concept=method.quantization)
- **研究产物**：[模型权重](/audio-paper-digest-blog/papers/?concept=artifact.model-weights)

<!--paper-tag-hierarchy-v1:end-->

> 评分：**7.3/10** | 创新 1.2/2 | 技术严谨 1/1.5 | 实验充分 1.2/1.5 | 清晰度 0.8/1 | 影响力 0.8/1.5 | 开源 1/1.5 | 可复现 0.1/0.5 | 工程/实践 1.2/1.5


## 👥 作者与机构

- Henrique Schechter Vera：机构信息未能在本次解析中与作者逐人可靠绑定
- Sahil Dua：机构信息未能在本次解析中与作者逐人可靠绑定
- Jovan Andonov：机构信息未能在本次解析中与作者逐人可靠绑定
- Sara Smoot：机构信息未能在本次解析中与作者逐人可靠绑定
- Sebastian Russo：机构信息未能在本次解析中与作者逐人可靠绑定
- Ivan Llanos：机构信息未能在本次解析中与作者逐人可靠绑定
- Max Matveev：机构信息未能在本次解析中与作者逐人可靠绑定
- Jae Hyeon Yoo：机构信息未能在本次解析中与作者逐人可靠绑定
- Kat Black：机构信息未能在本次解析中与作者逐人可靠绑定
- Shih-Cheng Huang：机构信息未能在本次解析中与作者逐人可靠绑定
- Josiah Aklilu：机构信息未能在本次解析中与作者逐人可靠绑定
- Maarten Grootendorst：机构信息未能在本次解析中与作者逐人可靠绑定
- Omar Sanseviero：机构信息未能在本次解析中与作者逐人可靠绑定
- Chandramouli Amarnath：机构信息未能在本次解析中与作者逐人可靠绑定
- Ian Ballantyne：机构信息未能在本次解析中与作者逐人可靠绑定
- Zhe Li：机构信息未能在本次解析中与作者逐人可靠绑定
- Daniel Salz：机构信息未能在本次解析中与作者逐人可靠绑定
- Ibrahim Alabdulmohsin：机构信息未能在本次解析中与作者逐人可靠绑定
- Ilya Philippov：机构信息未能在本次解析中与作者逐人可靠绑定
- Kristen Quan：机构信息未能在本次解析中与作者逐人可靠绑定
- Glenn Cameron：机构信息未能在本次解析中与作者逐人可靠绑定
- Edouard Yvinec：机构信息未能在本次解析中与作者逐人可靠绑定
- Luciano Martins：机构信息未能在本次解析中与作者逐人可靠绑定
- Doug Reid：机构信息未能在本次解析中与作者逐人可靠绑定
- Sindhu Raghuram Panyam：机构信息未能在本次解析中与作者逐人可靠绑定
- Weiyi Wang：机构信息未能在本次解析中与作者逐人可靠绑定
- Hengxuan Ying：机构信息未能在本次解析中与作者逐人可靠绑定
- Madhuri Shanbhogue：机构信息未能在本次解析中与作者逐人可靠绑定
- Tanmaya Dabral：机构信息未能在本次解析中与作者逐人可靠绑定
- Shanfeng Zhang：机构信息未能在本次解析中与作者逐人可靠绑定
- Juyeong Ji：机构信息未能在本次解析中与作者逐人可靠绑定
- Renjie Wu：机构信息未能在本次解析中与作者逐人可靠绑定
- Joe Zou：机构信息未能在本次解析中与作者逐人可靠绑定
- Xu Chen：机构信息未能在本次解析中与作者逐人可靠绑定
- Yunan Zhang：机构信息未能在本次解析中与作者逐人可靠绑定
- Yu-Hui Chen：机构信息未能在本次解析中与作者逐人可靠绑定
- Matthew Soulanille：机构信息未能在本次解析中与作者逐人可靠绑定
- Vinod Mamillapalli：机构信息未能在本次解析中与作者逐人可靠绑定
- Yi-Chun Kuo：机构信息未能在本次解析中与作者逐人可靠绑定
- Wai Hon Law：机构信息未能在本次解析中与作者逐人可靠绑定
- Matt Kreileder：机构信息未能在本次解析中与作者逐人可靠绑定
- Alice Zheng：机构信息未能在本次解析中与作者逐人可靠绑定
- Suril Shah：机构信息未能在本次解析中与作者逐人可靠绑定
- Mogan Shieh：机构信息未能在本次解析中与作者逐人可靠绑定
- Pooja Consul：机构信息未能在本次解析中与作者逐人可靠绑定
- Alberto Montes：机构信息未能在本次解析中与作者逐人可靠绑定
- Andreas Hess：机构信息未能在本次解析中与作者逐人可靠绑定
- Andres Sevilla：机构信息未能在本次解析中与作者逐人可靠绑定
- Babak Samari：机构信息未能在本次解析中与作者逐人可靠绑定
- Brendan McCloskey：机构信息未能在本次解析中与作者逐人可靠绑定
- Brian Potetz：机构信息未能在本次解析中与作者逐人可靠绑定
- Daniel Cer：机构信息未能在本次解析中与作者逐人可靠绑定
- Georgios Kathareios：机构信息未能在本次解析中与作者逐人可靠绑定
- Gustavo Hernández Ábrego：机构信息未能在本次解析中与作者逐人可靠绑定
- Hesen Zhang：机构信息未能在本次解析中与作者逐人可靠绑定
- Ji Ma：机构信息未能在本次解析中与作者逐人可靠绑定
- Jiaxing Wu：机构信息未能在本次解析中与作者逐人可靠绑定
- Keegan Mosley：机构信息未能在本次解析中与作者逐人可靠绑定
- Paul Suganthan：机构信息未能在本次解析中与作者逐人可靠绑定
- Rui Meng：机构信息未能在本次解析中与作者逐人可靠绑定
- Shen Gao：机构信息未能在本次解析中与作者逐人可靠绑定
- Shengcao Cao：机构信息未能在本次解析中与作者逐人可靠绑定
- Yi-Ting Chen：机构信息未能在本次解析中与作者逐人可靠绑定
- Yichang Chen：机构信息未能在本次解析中与作者逐人可靠绑定
- Zhongli Ding：机构信息未能在本次解析中与作者逐人可靠绑定
- Kendra Byrne：机构信息未能在本次解析中与作者逐人可靠绑定
- Cormac Brick：机构信息未能在本次解析中与作者逐人可靠绑定
- Olivier Lacombe：机构信息未能在本次解析中与作者逐人可靠绑定
- Qin Yin：机构信息未能在本次解析中与作者逐人可靠绑定
- Tris Warkentin：机构信息未能在本次解析中与作者逐人可靠绑定
- Armand Joulin：机构信息未能在本次解析中与作者逐人可靠绑定
- Tom Duerig：机构信息未能在本次解析中与作者逐人可靠绑定
- Mojtaba Seyedhosseini：EmbeddingGemma Team, Google

## 📌 核心摘要

读者需要理解的对象是能把一句话、一张图、一段语音或一段视频都变成同一个空间中固定长度向量的模型，困难在于不同模态长度和细节差异很大，混合输入还要保留跨模态的对应关系，处理过程是先把各模态变成同一维度的记号序列，再由共享变换器压缩成一个单位长度向量。模型先用文本蒸馏打底，再用多模态蒸馏继承教师的共享空间，最后改用对比学习塑造适合自身维度的空间，三个阶段按模态和目标推进。输入记号经过双向注意力、平均池化（平均池化指对序列上所有位置的输出向量求平均，得到单个向量）、线性投影和归一化后输出最终向量，中间还有逐层嵌入提供来自输入的残余信息。与已有工作相比，论文省去了逐层嵌入专用的查表，训练时同时更新视觉编码器，并保留了可截断维度和量化检查点，实际意义是手机等受限设备也能按需加载文本、视觉或音频部分。在代码检索评测MTEB(Code)上以Mean(Task)任务平均为指标，该模型以271M文本参数取得78.68分，高于同表同指标下EmbeddingGemma 1的68.76分，数值越大越好。结论在已评测的检索、分类、问答和时刻定位等任务上成立，英文文本小幅回退、部分副语言零样本聚类偏弱等边界仍存在。论文报告共使用约2.9T记号训练，在Google Pixel 11 Pro上Q4_C量化推理时以峰值内存为指标，全模态为567 MB，高于同条件下文本单模态的191 MB。

## 🔗 开源与复现资源

- 第三方资源：<https://ai.google.dev/gemma/docs/embeddinggemma> — 链接可访问（HTTP 200）

- 模型相关资源：<https://ai.google.dev/gemma/docs/embeddinggemma> — 链接可访问（HTTP 200）

可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 嵌入模型要解决什么输入与输出问题

这篇论文研究的输入是文本、代码、图像、视频帧、音频以及它们交错组成的混合序列，例如一段文字加一张图再加一段语音。目标是把任意这样的一段输入映射成一个固定长度的向量，要求语义相近的输入在向量空间中距离相近，可以直接用余弦相似度做检索、分类、聚类和问答。

传统文本嵌入模型处理不了图像细节和非语音环境声，若外挂语音识别或图像描述器，不仅增加计算，还会丢掉口音、语调、背景声和细粒度视觉信息。而经典双塔模型只能做图文跨模态对齐，不能原生处理图文音频交错输入。EmbeddingGemma 2 的目标就是用一个 744M 参数的模型原生支持全部模态，并在资源受限设备上可拆、可截、可量化。

### 已有路线为何不够用

第一条路线是文本嵌入模型，擅长检索与语义相似度，但在多模态任务前需要先转写或描述，属于间接做法。第二条路线是 CLIP、ALIGN、SigLIP 这类加视觉塔的模型，跨模态对齐强，但输入结构固定，无法理解交错混合输入中模态间的交互。

第三条路线是把多模态大语言模型改成嵌入模型，支持交错输入和视觉问答、视觉定位等复杂任务，但参数往往数十亿，延迟与吞吐难以满足高并发或端侧离线需求。EmbeddingGemma 2 沿第三条路线，但选择基于 Gemma 4 家族的小尺寸结构，强调在更少参数下保持单模态、跨模态与混合模态质量，并提供模块化加载与视觉 token 预算调节。

### 论文把任务具体化成什么形式

论文把每个训练样本定义为查询、一个正目标和可选的难负目标，还可带任务前缀。例如检索任务查询前缀说明是检索查询，目标前缀带标题与正文；分类、聚类和语义相似度则查询与目标用相同前缀。这种前缀让同一向量空间能区分对称与非对称任务。

推理时不论输入是单文本、单图、单音频还是视频加配乐的交错序列，都先转成统一的输入向量序列，再经主干得到一个 768 维单位向量。评价时按基准套件的任务类型分别计算分值，文本用 MTEB 多语言、英文与代码，视觉用 MMEB-v2 与 MIEB 精简版，音频用 MAEB 与 MSEB 检索，比较时只计实际用到的参数量。

### 整体流程如何把多模态拼成一个向量

模型由三部分组成：271M 参数的双向变换主干（含嵌入器）、167M 参数的视觉编码器、305M 参数的音频编码器，总计 744M。文本与代码走词嵌入表直接得到向量；图像与视频帧走视觉变换器得到软 token；音频按 40 毫秒分块提梅尔滤波特征，经两层下采样卷积加 12 层卷积增强变换器得到每秒 25 个软 token。

3 路向量经各自线性适配投影到 512 维模型维度，按原文顺序交错拼接，前后加起始与结束符，形成最长 8192 的输入序列。主干做 24 层双向注意力，每层还接收来自输入的逐层嵌入残差更新，最后对输出序列做平均池化，再经随机初始化线性投影到 768 维并做 L2 归一化。
下图展示了这种分工，阅读时先看输入如何分流再汇合。

> **看图路径：** 1. 先看顶部五类输入示例如何分别进入嵌入器、视觉编码器与音频编码器；2. 再看中间彩色方块交错序列如何汇入同一主干；3. 最后看底部三维点云中不同颜色点的混合程度

[![原论文 Figure 1：EmbeddingGemma 2 natively maps text, images, video, audio, and combinations thereof into a…](https://arxiv.org/html/2610.37364v1/diagram.png)](https://arxiv.org/html/2610.37364v1/diagram.png)

*论文图 1。原论文 Figure 1:：“EmbeddingGemma 2 natively maps text, images, video, audio, and combinations thereof into a unified, semantically-aligned vector space.”。*

图中顶部文本与代码汇入蓝色嵌入器，图像视频汇入黄色视觉编码器，音频汇入红色音频编码器，三色小块交错成一条序列进入深蓝色主干，最终落入下方 3 维点云。不同颜色点混在一起，直观表示文本、视觉与音频共享同一语义空间，而虚线框标出的两个编码器可按需加载，实现纯文本 271M、图文 439M、音频文本 577M 3 种运行形态。

### 输入段落如何编码与拼接

文本段落先分词再查表得到向量序列。图像段落由视觉编码器输出后做空间池化，默认每图 280 个软 token、视频每帧 140 个，推理时可在 70、140、280、560、1120 之间调节，再加图像起止符。音频段落按时长线性增长，每秒 25 个软 token，再加音频起止符。视频先按每秒 1 帧采样，再按 32 帧预算截断取前部或均匀采样，帧与帧之间的配乐按 1 秒切段，帧前与音频段前还插入 MM:SS 格式的时间戳文本。

逐层嵌入指每层用独立线性投影把原始输入向量转成该层专用表示，经门控加权后再加回该层输出。Gemma 3n 原本还为此维护一张大型专用查找表，本文只用共享嵌入空间投影，省内存且给非文本模态直接信号。

**模态编码器 × 共享变换主干：** 模态编码器负责把图像和音频各自转成软 token 序列，解决不同信号维度与采样率不同的表示问题；共享变换主干负责接收文本词向量与这些软 token 交错成的长序列，做双向上下文建模与平均池化。二者搭配后，新增模态不需要重建文本空间，只需学习一个适配投影即可进入统一语义空间。

**软 token × 分隔符：** 软 token 指由视觉或音频编码器输出、再经线性投影到模型维度的连续向量，代表一块图像区域或一段音频；分隔符指包裹它们的特殊标记如图像起止符与音频起止符。软 token 携带内容，分隔符标明模态边界，主干据此区分文本、图像与音频段落并正确做跨模态注意力。

查询与目标最终向量的计算方式由原文公式给出，先拼接任务前缀与内容，再经输入构造、主干与池化投影得到向量。

\[\mathbf{q}_{i}=f(\mathcal{P}(\mathcal{M}_{n}(\mathcal{T}(t_{q}\oplus q_{i})))),\quad\mathbf{p}_{i}^{\pm}=f(\mathcal{P}(\mathcal{M}_{n}(\mathcal{T}(t_{p}\oplus p_{i}^{\pm})))).\]

该式中 q 为查询向量，p 正负为目标向量，T 为上述拼接构造，M 为 n 层主干，P 为平均池化，f 为降维投影，含义是两侧走完全相同的编码流程，保证相似度可比。

### 三种损失各自约束什么

对比损失对每个查询比较正例、难负例、批内负例和同塔负例，用温度系数缩放的余弦相似度做归一化，并用掩码去掉批内完全重复的假负例。对排序数据还用基于 Plackett-Luce 的列表损失，让排名靠前的正例同时与更靠后的正例及负例对比，并加小的平方合页惩罚校准绝对分值。

扩展正则项只用 2 阶矩项，惩罚随机查询对与随机目标对内积的平方，促使随机对趋于正交。蒸馏损失直接对齐学生与 Gemini Embedding 2 教师的向量，对查询、正例和难负例分别算均方误差再相加，教师向量截断到 768 维并归一化。3 种损失都套用垫片表示学习，同时在重叠子维度上计算。

**对比损失 × 同塔负例：** 对比损失负责拉近查询向量与正例向量、推远与各类负例的余弦相似度；同塔负例指把查询之间、目标之间也当作负例，解决查询与目标各自聚成两个不相交子空间的问题。二者搭配后，模型既学会区分相关与不相关，又保持查询空间与目标空间重叠，可直接做跨模态检索。

**蒸馏损失 × 扩展正则项：** 蒸馏损失指用均方误差把学生对查询、正例和难负例的向量向截断后的 Gemini Embedding 2 教师向量对齐，负责继承大模型已有的多模态语义结构；扩展正则项指惩罚随机查询对与随机目标对内积平方，促使向量在单位球面上铺开。二者搭配后，前者保证语义位置正确，后者避免向量挤成窄锥，有利于量化和近似最近邻检索。

**垫片表示学习 × 截断嵌入：** 垫片表示学习指把对比、扩展与蒸馏损失同时施加在 768 维及其嵌套子维度 512、256、128 维上；截断嵌入指推理时只取前若干维仍可直接比相似度。前者训练时就约束子向量本身可用，后者使用时按资源选择维度，组合后实现一次训练、多档部署。

### 三阶段课程与模型合并如何安排

初始化时主干来自预训练 Gemma 4 解码器模型，把因果掩码换成双向注意力，不做额外双向适配；视觉编码器用 Gemma 4 较小视觉编码器初始化并在后 2 阶段继续训练；音频编码器与 Gemma 4 对应模型完全一致并全程冻结。总计约 2.9T token，其中文本预微调约 300B、多模态预微调约 2T、多模态微调约 600B。

主干适配的具体执行是去掉逐层嵌入专用的词表查找表，只保留对输入嵌入的投影，并在变换器之后依次加均值池化、线性投影与ℓ2 归一化，直接输出单位范数向量。视觉编码器在两个多模态阶段都参与更新，音频编码器则与 Gemma 4 E2B 和 E4B 模型逐比特一致并保持冻结，从而保留原有语音表示能力。

第一阶段纯文本预微调，以蒸馏为主加小权重对比，大批量稳定梯度，可看作双向注意力的热身。该阶段使用问答、句相似、代码检索与网页搜索等多语言无监督查询-目标对，任务按预设经验比例采样；大批量既稳定梯度，也为每个样本提供更多批量内负例。保留文本单模态阶段被证明对最终文本质量重要，也增强了文本与非文本嵌入的可分性。

第 2 阶段多模态预微调，加入图像音频视频文档的单模态、跨模态与混合任务，只用蒸馏继承教师的共享空间，步数翻倍。该阶段多数任务带有难负例，文本任务覆盖任务多样性、语言多样性与代码能力；继续使用大批量和大学习率，训练步数约为文本预微调的 2 倍，以覆盖扩展后的多模态训练集。

第三阶段多模态微调完全去掉蒸馏，换成对比加扩展与垫片损失，小学习率小批量聚焦高质量任务。此时模型不再模仿教师，而是学习适配自身结构、规模与垫片子维度的嵌入空间；新增铺展正则与垫片表示学习，并转向工具检索、音频描述、视频排序、医学影像、视觉商品搜索、裁剪目标检索与学术问答等高质量任务。最后把微调轨迹末尾与较早检查点做无权平均，缓解过拟合。该合并只在单条微调轨迹内进行，不重跑多组数据配比或超参数。量化则在合并后另加尾部补丁阶段，从冻结浮点检查点蒸馏出 int4 主干与 8 比特视觉编码器。

### 评测用什么数据与基线

文本用 MTEB 多语言 162 个任务、MTEB 英文与 MTEB 代码，覆盖问答、分类、聚类、重排、检索、语义相似度等 10 类任务与 20 个领域。视觉用 MMEB-v2 共 78 任务分图像、视频与视觉文档，含检索分类问答定位与时刻检索；MIEB 精简版补充线性探针分类、聚类、组合性与视觉语义相似度。音频用 MAEB 共 30 任务分语音音乐环境生物声与情感，MSEB 检索聚焦 26 种语言的多语言语音到文本检索。

基线选择各榜单 1B 以下最强模型，MMEB-v2 放宽到 2B 以下，只比单向量模型，剔除在超过 25% 评测数据上训练过的模型。EmbeddingGemma 2 用半精度评估，视觉按每视频 32 帧、每帧 140 token、每图 280 token 的实用配置，承认更高预算在文档任务上可能更好。参数量按实际使用部分计数，文本 271M、图文 439M、音频文本 577M。

### 主结果在什么条件下成立

在上述实用视觉预算与半精度下，EmbeddingGemma 2 在代码上平均任务分 78.68，超过所有 4B 以下模型；在 MMEB-v2 平均任务分 59.01，为榜单最小模型，仅次于约 2B 模型；在 MIEB 精简版平均任务分 60.17、平均类型分 65.67，大幅领先 1B 以下模型；在 MAEB 平均任务分 49.87，距 1B 以下最优约 0.2 分；在 MSEB 检索总体 69.54，原生音频明显优于转写路径。截断到 256 维时多数基准下降很小，128 维仍常超过其他小模型全维度。

下图把参数量对数横轴与榜单纵轴画成帕累托前沿，星标为本模型。

> **看图路径：** 1. 先对比每个子图中实线新前沿与虚线旧前沿的位置；2. 再看星标 EmbeddingGemma 2 在参数横轴对数刻度上的位置；3. 注意右上多模态子图中 1B 到 2B 之间的断层

[![原论文 Figure 2：EmbeddingGemma 2 establishes a new Pareto frontier across benchmarks covering code, image, video,…](https://arxiv.org/html/2610.37364v1/frontiers.svg)](https://arxiv.org/html/2610.37364v1/frontiers.svg)

*论文图 2。原论文 Figure 2:：“EmbeddingGemma 2 establishes a new Pareto frontier across benchmarks covering code, image, video, visual documents, and audio.”。*

左上代码子图显示星标把前沿向上推；右上多模态子图显示星标在 400M 量级独处，右方大模型虽高但参数大一个数量级；左下音频与右下图像子图同样显示星标抬升了小参数段前沿。该结论依赖单向量、去污染基线与上述帧数预算，若换多向量检索或放宽污染限制，排名可能变化。

### 原生音频相比转写强在哪里

比较原生音频与先语音识别再做文本嵌入两种做法，是理解音频价值的关键。原生路径保留口音、同音、噪声与韵律，转写路径一旦出错就无法挽回。原文在 MSEB 检索上同时报告总体、语内与跨语平均倒数排名，指标越大越好。

下表比较同一模型原生音频与转写、以及教师模型两种模式，参数量与维度如表所示，公平条件是同一检索库与同一任务前缀。

| Model Name | Audio Mode | Parameters | Dim. | Overall | In-Lang | Cross-Lang |
| --- | --- | --- | --- | --- | --- | --- |
| EmbeddingGemma 2 | Native Audio | 577M | 768 | 69.54 | 71.63 | 67.68 |
|  |  |  | 512 | 69.18 | 71.20 | 67.38 |
|  |  |  | 256 | 66.76 | 68.86 | 64.89 |
|  |  |  | 128 | 56.71 | 60.30 | 53.49 |
| EmbeddingGemma 2 | ASR | 271M | 768 | 57.59 | 62.14 | 53.52 |
| EmbeddingGemma 1 | ASR | 308M | 768 | 50.95 | 61.10 | 41.87 |
| Gemini Embedding 2 | Native Audio | – | 3072 | 73.99 | 75.58 | 72.56 |
| Gemini Embedding 2 | ASR | – | 3072 | 70.40 | 73.58 | 67.55 |

EmbeddingGemma 2 原生 768 维总体 69.54，语内 71.63，跨语 67.68；同模型转写总体 57.59，前代转写 50.95，说明两代间文本能力本身在提升。降到 256 维原生仍有 66.76，超过全维度转写；降到 128 维掉到 56.71，截断代价开始显现。教师原生 73.99 仍更高，表明小模型尚未完全追平，但原生相对转写的增益在大小模型上都存在。该结论只在 MSEB 多语言语音检索条件下验证，未覆盖纯音乐或副语言聚类。

### 逐层嵌入与微调阶段带来什么变化

消融均用中间配方在 MMEB-v2 上验证，只看相对变化，不代表最终模型绝对分。第一个问题是专用查找表是否有用。下表对比只用投影与加专用表的逐层嵌入，指标为总体与图像视频文档 3 类，越大越好。

|  | MMEB-v2 Overall | Image (Hit@1) | Video (Hit@1) | VisDoc (NDCG@5) |
| --- | --- | --- | --- | --- |
| PLE Strategy | MMEB-v2 Overall | Image (Hit@1) | Video (Hit@1) | VisDoc (NDCG@5) |
| Projection-only | 55.46 | 54.67 | 47.82 | 62.37 |
| With lookup | 55.07 | 54.57 | 47.13 | 61.76 |

只用投影总体 55.46，图像 54.67，视频 47.82，文档 62.37；加查找表分别掉到 55.07、54.57、47.13、61.76。去掉大表反而全线提升，视频与文档提升约 0.6 到 0.7，说明从共享空间派生逐层输入更有利于多模态，文本评测也有类似趋势。代价是该结论来自中间检查点，不能直接换算到最终模型。

第二个问题是微调增益是否只是多训。下表对比多模态预微调后继续蒸馏与切换到对比微调，条件为近似等算力，指标同上。

|  | MMEB-v2 Overall | Image (Hit@1) | Video (Hit@1) | VisDoc (NDCG@5) |
| --- | --- | --- | --- | --- |
| Training Stage | MMEB-v2 Overall | Image (Hit@1) | Video (Hit@1) | VisDoc (NDCG@5) |
| Multimodal Pre-finetuning | 52.27 | 50.10 | 43.26 | 62.26 |
| ++ Extra Pre-finetuning | 52.28 | 49.74 | 43.86 | 62.40 |
| ++ Finetuning Stage | 55.46 | 54.67 | 47.82 | 62.37 |

继续蒸馏总体 52.28 几乎不动，切换微调跳到 55.46，图像从 50.10 到 54.67，视频从 43.26 到 47.82，文档持平。这支持微调学到超越模仿的新空间，而非单纯延长训练。但该对照未胜出项是文档检索，两种做法都在 62.3 附近，说明文档任务主要靠预微调已学到的细粒度能力。

### 视觉编码器与 token 预算如何取舍

第三个问题是视觉编码器是否要一起训练。下表对比从文本预微调出发做多模态预微调时视觉编码器可训练与冻结，指标同上，越大越好。

|  | MMEB-v2 Overall | Image (Hit@1) | Video (Hit@1) | VisDoc (NDCG@5) |
| --- | --- | --- | --- | --- |
| Vision Encoder | MMEB-v2 Overall | Image (Hit@1) | Video (Hit@1) | VisDoc (NDCG@5) |
| Trainable | 52.27 | 50.10 | 43.26 | 62.26 |
| Frozen | 48.18 | 44.35 | 39.24 | 60.59 |

可训练总体 52.27，冻结 48.18，图像差距约 5.7，视频约 4.0，文档约 1.7。即使 Gemma 4 视觉编码器本身很强，联合训练仍明显提升嵌入质量。代价是训练成本与显存上升，且音频编码器本文未做类似放开，留作推测。

第四个问题是训练与推理预算。原文训练用每图 280、视频每帧 140，推理可调 70 到 1120。推理放大的规律是文档任务随预算单调大涨，560 时达 67.62；图像到 280 后趋于饱和；视频在 280 到 560 反而从 48.51 掉到 46.52，原因是过长序列稀释注意力与平均池化。

训练用 70 还是 140 视频 token 的对比显示，小预算推理时 70 训练对视频略好，但图像文档下降；140 推理时 70 训练全线更差，因此 140 是兼顾选择。更高训练预算可能更好但成本显著，未实测则不能承诺。

### 哪些任务仍弱与条件限制

音频侧存在明显分化。模型在任意到任意检索与音频分类上领先 1B 以下模型，在车辆声聚类等非语音任务超过部分专家，但在音频描述检索等字幕任务上仍落后于 CLAP 类专家。在副语言零样本任务上弱，例如按性别聚类说话人得分极低，但换线性探针做性别分类又能回升，说明语义主导的表示把人口属性压低，需要时仍可提取，不能把零样本聚类失败等同于听不懂。

文本英文相对前代略回落，多语言靠双语挖掘与分类拉回；视觉文档虽强但高度依赖高 token 预算，端侧小预算会掉分；视频长程理解受 32 帧预算限制，全片索引与智能体记忆需要更长上下文。量化后文本英文差距小，视觉与音频检索差距稍大，且量化与浮点用了不同评测 harness，跨行对比需谨慎。

### 复现第一步与资源现状

复现先按模态准备 3 路：文本走分词查表，图像按 16 像素块的视觉变换器输出后池化到设定预算并加起止符，音频按 40 毫秒梅尔特征输出每秒 25 向量并加起止符，视频按每秒 1 帧再按 32 帧截断或均匀采样并插入时间戳文本。然后用同一主干、平均池化与归一化得到向量，按附录任务前缀区分查询与目标。

训练按文本预微调、多模态预微调、多模态微调的顺序切换蒸馏与对比加正则，评估用对应基准的官方划分与指标。模型权重与文档在官方 Gemma 渠道当前可用，本文依据的第三方文档页与模型页本次均可达，但可用性会变化，需以实际下载为准。作者未公开完整训练数据配比与采样率，严格复现需自行调参。

### 何时值得尝试与还需验证什么

当需要在一个服务中同时做文本代码检索、图文视频混合检索与语音检索，且要在手机或高吞吐服务上运行时，该模型值得尝试：可按需只加载文本、图文或音频文本部分，可把维度截到 256，可用 int4 主干把峰值内存压到数百 MB。教学示例：把吉他文字描述、吉他照片、弹奏短视频与拨弦声分别编码，语义相近者在空间中相邻，可直接跨模态互检，此为原理解释而非实测数值。

还需补的验证包括：长视频均匀采样与截断的差异、1120 预算在文档上的成本收益、音频编码器解冻的效果、端到端检索增强训练的增益，以及交错多模态搜索的新评测。总之，论文支持的是小参数统一空间在给定预算与单向量条件下的效率优势，而非在所有任务与所有预算下全面最强。

<details>
<summary>📎 论文与评分元数据</summary>

排名：前50% | 文档类型：模型报告 | [arXiv 原文](https://arxiv.org/abs/2610.37364v1)

</details>

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。

- 评分规则：type-aware-v1

- 评分模型：muse-spark-1.3-contributor

- 评分请求协议：openai_responses

---

[← 返回 2026-10-29 语音/音乐/音频论文速递](/audio-paper-digest-blog/posts/2026-10-29/)
