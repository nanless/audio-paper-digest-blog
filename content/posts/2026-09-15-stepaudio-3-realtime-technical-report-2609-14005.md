---
title: "StepAudio 3 Realtime Technical Report"
date: 2026-09-15
draft: false
tags: [全双工语音交互, 多模态学习, 语音, 音频大模型]
categories: [论文速递]
description: "StepAudio 3 Realtime 针对实时语音交互中深度推理与低延迟的矛盾，用听-说-想-做循环组织感知、双工话轮管理、边说边想与异步工具调用，在 MMSU 90.6、全双工 98.9 等报告结果上保持领先，但多轮约束保持与零售工具任务仍有明显短板。"
hiddenInHomeList: true
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_arxiv_id: "2609.14005"
paper_digest_workbench_contract: "researcher-workbench-v1"
paper_digest_reader_title: "边说边想：StepAudio 3 Realtime 如何协调听、说、想与做"
paper_digest_original_title: "StepAudio 3 Realtime Technical Report"
paper_digest_arxiv_version: 1
paper_digest_arxiv_versioned_id: "2609.14005v1"
paper_digest_arxiv_abs_url: "https://arxiv.org/abs/2609.14005v1"
paper_digest_arxiv_pdf_url: "https://arxiv.org/pdf/2609.14005v1.pdf"
paper_digest_primary_task: "全双工语音交互"
paper_digest_taxonomy_contract: "paper-taxonomy-flat-tags-compat-v1"
paper_digest_taxonomy_selection_contract: "paper-taxonomy-selection-v1"
paper_digest_taxonomy_registry_version: "paper-taxonomy-v1"
paper_digest_taxonomy_registry_sha256: "15c82a567ce5a55dc1175684ed08b64c158558639d9c8fb822c9587ec32a8778"
paper_digest_taxonomy_concepts: [{"facet":"task","id":"task.full-duplex","label":"全双工语音交互"},{"facet":"method","id":"method.multimodal-learning","label":"多模态学习"},{"facet":"signal","id":"signal.speech","label":"语音"},{"facet":"model_family","id":"model_family.audio-language","label":"音频大模型"}]
paper_digest_primary_method: "多模态学习"
paper_digest_score: 6.7
paper_digest_rank_bucket: "前50%"
paper_digest_document_type: "系统技术报告"
paper_digest_one_sentence: "StepAudio 3 Realtime 针对实时语音交互中深度推理与低延迟的矛盾，用听-说-想-做循环组织感知、双工话轮管理、边说边想与异步工具调用，在 MMSU 90.6、全双工 98.9 等报告结果上保持领先，但多轮约束保持与零售工具任务仍有明显短板。"
paper_digest_authors: [{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Bin Lin"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Bo Zhao"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Boyang Zhang"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Boyong Wu"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Chao Yan"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Chen Geng"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Chen Wu"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Cheng Yi"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Chengli Feng"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Chenglin Zhu"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Chengting Feng"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Chengyuan Yao"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Daijiao Liu"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"DanNi Wan"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Daxin Jiang"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Dongjian Li"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Dongqing Pang"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Fei Tian"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Feng Tian"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Future Li"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Gang Yu"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Guanglong Yang"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Haoyang Zhang"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Hongyuan Wang"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Jia Peng"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Jiahao Song"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Jialong Xue"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Jiamin Fan"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Jiangjie Zhen"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Jianzheng Gao"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Jincheng Wen"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Jinghua Liang"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Jinglan Gong"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Jun Chen"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Li Xie"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Liang Zhao"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Lifang Zhang"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Lingli Ji"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Lun Cai"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Min Xu"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Peilin Li"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Peng Yang"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Pengfei Tan"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Qingjian Lin"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Qinxin Du"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Ruijie Xiong"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Runze Li"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Shenghua Hu"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Shengqian Qin"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Shi Qiu"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Siqi Tu"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Siyi Zhou"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Tianjiao Deng"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Wanying Lu"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Weiming Niu"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Wen Sun"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"WenWen Qu"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Xiangyu Zhang"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Xianwei Zhang"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Xiaosu Su"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Xing Chen"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Xinyu Liu"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Xuerui Yang"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Yan Wu"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Yang Li"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Yang Yang"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Yechang Huang"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Yibo Zhu"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Yifan Zhang"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Yinuo Yan"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Youjun Chen"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Yu Fu"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Yu Luo"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Yu Zhou"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Yujie Chen"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Yumang Wang"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Yunzhou Ju"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Yuxiang Yang"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Yuxin Li"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Yuxin Zhang"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Zekai Liu"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Zengwei Yao"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Zhaoxin Yuan"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Zhenwei Mou"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Zhiquan Zhang"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Zhiyue Wu"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Zichao Li"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Zichao Zhou"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Ziqi Ren"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Zixuan Wang"}]
paper_digest_abstract_sha256: "314df96294dcdf296d7b160f2966d939146c22508af0672768b52bc6ef92456d"
paper_digest_sidecars: {"citation.bib":{"sha256":"55a73f3dcc21e2232a43e07737cf3739d53e40979861f18bea5af910206661c9","url":"/audio-paper-digest-blog/data/papers/2026-09-15/2609-14005/citation.bib"},"citation.json":{"sha256":"cefd987cd8239d4b67c61ab016fe52330c9a86fb1c1f181e4c94a80061f41850","url":"/audio-paper-digest-blog/data/papers/2026-09-15/2609-14005/citation.json"},"citation.ris":{"sha256":"4418a45ddfc4e65556aec11e681dea4da7b2175273f2c6f45642d0b0fc5d1683","url":"/audio-paper-digest-blog/data/papers/2026-09-15/2609-14005/citation.ris"},"rethink-context.json":{"sha256":"51778536087eed3188dae0c7c5e8cfa161de25679670b9e1319f70459b759454","url":"/audio-paper-digest-blog/data/papers/2026-09-15/2609-14005/rethink-context.json"}}
paper_digest_api_reader_contract: "beginner-researcher-v3"
paper_digest_api_reader_article_sha256: "ce9b3e177432d4fb124ae875eed1a1a875135348a71e2fafc96da6f56ca9d76e"
paper_digest_api_reader_plan_sha256: "622bf89985c3027e0b7f7f22c20261b0dad4f9115caf378fc064b6c882f7965f"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings-v4"
paper_digest_api_reader_source_bindings_sha256: "393537b7b6a837dfbe67c1d4fdfb9a33a537171eb4598371b3d5faf38666d7cc"
paper_digest_api_reader_source_table_count: 5
paper_digest_api_reader_source_formula_count: 0
paper_digest_api_reader_structured_artifacts_sha256: "dcc3c174397f88a8811f9042f75d75ea3a13a379b4191bb70b0897d53bd2700c"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity-v1"
paper_digest_api_reader_author_identity_sha256: "16cdfc33bc2492715880a4a097a2ad07898c70b0ef93e5907a310f63cd0585c1"
paper_digest_api_reader_author_count: 90
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity-v1"
paper_digest_api_reader_resource_identity_sha256: "877b366396557217a7720f1635ad5c1c7dfd1021977964ebc9e676977c884f25"
paper_digest_api_reader_resource_count: 0
paper_digest_api_reader_figure_persistence: "ephemeral-no-persisted-figure-assets-v1"
paper_digest_api_reader_decision_projection: "api-reader-decision-projection-v2"
---

# 📄 边说边想：StepAudio 3 Realtime 如何协调听、说、想与做

> 英文题目：*[StepAudio 3 Realtime Technical Report](https://arxiv.org/abs/2609.14005v1)*

> 标签：#全双工语音交互 | #多模态学习 | #语音 | #音频大模型
>
> 评分：**6.7/10** | 创新 1.5/2 | 技术严谨 1.1/1.5 | 实验充分 1/1.5 | 清晰度 0.8/1 | 影响力 1.2/1.5 | 开源 0/1.5 | 可复现 0.1/0.5 | 工程/实践 1/1.5


## 👥 作者与机构

- Bin Lin：机构信息未在 arXiv HTML 中可靠披露
- Bo Zhao：机构信息未在 arXiv HTML 中可靠披露
- Boyang Zhang：机构信息未在 arXiv HTML 中可靠披露
- Boyong Wu：机构信息未在 arXiv HTML 中可靠披露
- Chao Yan：机构信息未在 arXiv HTML 中可靠披露
- Chen Geng：机构信息未在 arXiv HTML 中可靠披露
- Chen Wu：机构信息未在 arXiv HTML 中可靠披露
- Cheng Yi：机构信息未在 arXiv HTML 中可靠披露
- Chengli Feng：机构信息未在 arXiv HTML 中可靠披露
- Chenglin Zhu：机构信息未在 arXiv HTML 中可靠披露
- Chengting Feng：机构信息未在 arXiv HTML 中可靠披露
- Chengyuan Yao：机构信息未在 arXiv HTML 中可靠披露
- Daijiao Liu：机构信息未在 arXiv HTML 中可靠披露
- DanNi Wan：机构信息未在 arXiv HTML 中可靠披露
- Daxin Jiang：机构信息未在 arXiv HTML 中可靠披露
- Dongjian Li：机构信息未在 arXiv HTML 中可靠披露
- Dongqing Pang：机构信息未在 arXiv HTML 中可靠披露
- Fei Tian：机构信息未在 arXiv HTML 中可靠披露
- Feng Tian：机构信息未在 arXiv HTML 中可靠披露
- Future Li：机构信息未在 arXiv HTML 中可靠披露
- Gang Yu：机构信息未在 arXiv HTML 中可靠披露
- Guanglong Yang：机构信息未在 arXiv HTML 中可靠披露
- Haoyang Zhang：机构信息未在 arXiv HTML 中可靠披露
- Hongyuan Wang：机构信息未在 arXiv HTML 中可靠披露
- Jia Peng：机构信息未在 arXiv HTML 中可靠披露
- Jiahao Song：机构信息未在 arXiv HTML 中可靠披露
- Jialong Xue：机构信息未在 arXiv HTML 中可靠披露
- Jiamin Fan：机构信息未在 arXiv HTML 中可靠披露
- Jiangjie Zhen：机构信息未在 arXiv HTML 中可靠披露
- Jianzheng Gao：机构信息未在 arXiv HTML 中可靠披露
- Jincheng Wen：机构信息未在 arXiv HTML 中可靠披露
- Jinghua Liang：机构信息未在 arXiv HTML 中可靠披露
- Jinglan Gong：机构信息未在 arXiv HTML 中可靠披露
- Jun Chen：机构信息未在 arXiv HTML 中可靠披露
- Li Xie：机构信息未在 arXiv HTML 中可靠披露
- Liang Zhao：机构信息未在 arXiv HTML 中可靠披露
- Lifang Zhang：机构信息未在 arXiv HTML 中可靠披露
- Lingli Ji：机构信息未在 arXiv HTML 中可靠披露
- Lun Cai：机构信息未在 arXiv HTML 中可靠披露
- Min Xu：机构信息未在 arXiv HTML 中可靠披露
- Peilin Li：机构信息未在 arXiv HTML 中可靠披露
- Peng Yang：机构信息未在 arXiv HTML 中可靠披露
- Pengfei Tan：机构信息未在 arXiv HTML 中可靠披露
- Qingjian Lin：机构信息未在 arXiv HTML 中可靠披露
- Qinxin Du：机构信息未在 arXiv HTML 中可靠披露
- Ruijie Xiong：机构信息未在 arXiv HTML 中可靠披露
- Runze Li：机构信息未在 arXiv HTML 中可靠披露
- Shenghua Hu：机构信息未在 arXiv HTML 中可靠披露
- Shengqian Qin：机构信息未在 arXiv HTML 中可靠披露
- Shi Qiu：机构信息未在 arXiv HTML 中可靠披露
- Siqi Tu：机构信息未在 arXiv HTML 中可靠披露
- Siyi Zhou：机构信息未在 arXiv HTML 中可靠披露
- Tianjiao Deng：机构信息未在 arXiv HTML 中可靠披露
- Wanying Lu：机构信息未在 arXiv HTML 中可靠披露
- Weiming Niu：机构信息未在 arXiv HTML 中可靠披露
- Wen Sun：机构信息未在 arXiv HTML 中可靠披露
- WenWen Qu：机构信息未在 arXiv HTML 中可靠披露
- Xiangyu Zhang：机构信息未在 arXiv HTML 中可靠披露
- Xianwei Zhang：机构信息未在 arXiv HTML 中可靠披露
- Xiaosu Su：机构信息未在 arXiv HTML 中可靠披露
- Xing Chen：机构信息未在 arXiv HTML 中可靠披露
- Xinyu Liu：机构信息未在 arXiv HTML 中可靠披露
- Xuerui Yang：机构信息未在 arXiv HTML 中可靠披露
- Yan Wu：机构信息未在 arXiv HTML 中可靠披露
- Yang Li：机构信息未在 arXiv HTML 中可靠披露
- Yang Yang：机构信息未在 arXiv HTML 中可靠披露
- Yechang Huang：机构信息未在 arXiv HTML 中可靠披露
- Yibo Zhu：机构信息未在 arXiv HTML 中可靠披露
- Yifan Zhang：机构信息未在 arXiv HTML 中可靠披露
- Yinuo Yan：机构信息未在 arXiv HTML 中可靠披露
- Youjun Chen：机构信息未在 arXiv HTML 中可靠披露
- Yu Fu：机构信息未在 arXiv HTML 中可靠披露
- Yu Luo：机构信息未在 arXiv HTML 中可靠披露
- Yu Zhou：机构信息未在 arXiv HTML 中可靠披露
- Yujie Chen：机构信息未在 arXiv HTML 中可靠披露
- Yumang Wang：机构信息未在 arXiv HTML 中可靠披露
- Yunzhou Ju：机构信息未在 arXiv HTML 中可靠披露
- Yuxiang Yang：机构信息未在 arXiv HTML 中可靠披露
- Yuxin Li：机构信息未在 arXiv HTML 中可靠披露
- Yuxin Zhang：机构信息未在 arXiv HTML 中可靠披露
- Zekai Liu：机构信息未在 arXiv HTML 中可靠披露
- Zengwei Yao：机构信息未在 arXiv HTML 中可靠披露
- Zhaoxin Yuan：机构信息未在 arXiv HTML 中可靠披露
- Zhenwei Mou：机构信息未在 arXiv HTML 中可靠披露
- Zhiquan Zhang：机构信息未在 arXiv HTML 中可靠披露
- Zhiyue Wu：机构信息未在 arXiv HTML 中可靠披露
- Zichao Li：机构信息未在 arXiv HTML 中可靠披露
- Zichao Zhou：机构信息未在 arXiv HTML 中可靠披露
- Ziqi Ren：机构信息未在 arXiv HTML 中可靠披露
- Zixuan Wang：机构信息未在 arXiv HTML 中可靠披露

## 📌 核心摘要

实时口语交互要求同时听懂说什么与怎么说，并在说话中管理轮次与推理时延。StepAudio 3 Realtime 以听见、会谈、思考、行动闭环组织全双工交互，输入为用户与模型双音频流加文本上下文，输出为流式语音与工具动作。深度感知将音频编码器表征经适配器送入语言解码器，保留词汇、副语言与环境线索。无缝双工联合双流与历史判断暂停、回声确认与打断，决定聆听、说话或让出话轮。边说边想将构思脑私密推理与表达脑分段播报并行调度，以自适应思考与多词元预测调节算量，语音智能体将异步工具执行与对话并行。与已有实时语音系统相比，差异在于推理与异步工具执行同播报进度解耦，而非等待完整链条后再开口。在 MMSU 上得 90.6 分，超次优 Gemini 3.1 Pro 的 83.6 分 7.0 分，在 Artificial Analysis 全双工评测 Overall 得 98.9 分居首，tau-Voice 宏成功率 56.0% 接近最优 56.5%。但实时交互模式 StepAudioChat 宏平均 70.4 分，指令遵循仅 54.1 分大幅落后，多轮约束修订与零售域工具任务仍弱，且基于不完整推理先开口可能引入口头错误。原文未披露训练、推理或部署成本，大规模双流与双脑并发的真实时延与算力代价尚待验证。

## 🔗 开源与复现资源

本次未形成可展示的已核验资源记录，开放状态尚未核实。

可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 输入是什么：实时语音交互为何不能只做识别加回答？

本文的输入是连续的语音交互过程，目标是让刚入门的研究生能复述其方法与实验条件。需要保留的关键信息包括任务定义、系统如何组织听与说、推理如何与播报并行、工具调用如何不打断对话，以及各项评测的比较对象、指标方向与关键数字。输出是 1 篇可核对的技术解读，不做营销式判断。

自然对话不是一问一答的回合制录音。用户会在模型说话时发出嗯、对等附和，也可能中途纠正；会在一句话中间停顿，但意思还没说完；会提出需要查资料或操作后台的复杂请求，而外部任务的耗时可能超过当前这句话的长度。如果系统只做语音识别再生成文本，就无法决定现在该听还是该说，也无法在深思熟虑的同时保持回应不冷场。

论文把这件事组织成听、说、想、做不断循环的回路。听不仅要听清字，还要听出情绪、声学背景与话轮状态；说不仅要说对内容，还要按播报进度分段释放；想不能等全部想完再开口；做不能因为工具还没返回就卡住对话。后续各节按学习依赖展开，先讲相关路线，再讲全景与组件，然后讲训练构造与推理，最后讲实验条件、结果反证与复现要点。

### 相关路线如何演进：从识别增强到流式全双工？

语音识别方向的进展把声学表示与大语言模型的语言知识结合起来，提升了转写的准确性。音频语言模型进一步支持更广的声学理解与直接语音生成。流式与全双工系统则让听和说在时间上重叠，使回应可以考虑语言内容、嗓音表达与对话时机。

StepAudio 3 Realtime 建立在 Step-Audio 系列共享的音频语言基础上，重点不是单点识别分数，而是把感知、推理与动作在对话展开过程中协调起来。论文明确区分了两个分支：StepAudio 3 ASR Max 专做转写，StepAudio 3 Realtime 做更广的音频理解与口语交互。二者共享预训练与中间训练，只在监督微调阶段分叉，前者调转写，后者调口语交互。

与同类实时语音工作相比，本文的对照放在同输入同目标同运行阶段上。识别对照是重跑的同套音频与同套计分流程；音频理解对照是同批 8 个基准；全双工对照是同一人工分析子集；工具任务对照是同一口语代理实现。类别不同不能直接当胜负，例如文本推理模式与实时交互模式的分数含义不同，后文会分开说明。

### 问题如何界定：停顿、附和、打断与长耗时工具？

论文要解决的第一个判断是话轮管理。同样是停顿，可能是句内换气，也可能是话已说完；同样是用户出声，可能是表示还在听的附和，也可能是要求拿回话轮的实质打断；同样是背景人声，可能是讲给助手的，也可能只是环境闲聊。系统需要用声学证据结合对话历史来决定继续听、开始回应、继续说或让出话轮。

第二个矛盾是深想与低延迟。复杂请求需要仔细推理，但逐步解码推理会拖慢首句语音。工具使用把矛盾拉得更长：外部任务可能在对话继续时才返回结果，期间用户还会追问进度、补充需求或切换话题。系统既要把任务相关的输入关联到正在执行的任务，又要把无关闲聊分开，还要把返回的证据纳入后续回应。

举一个教学用的例子，不代表论文实验：用户说帮我订一张下周去上海的票，模型开始播报正在查询，中间用户插一句要靠窗。例子只说明系统需要同时处理播报、打断、任务参数更新与后台执行，论文实际用航空、零售、电信 3 类客服任务检验这类能力。

### 方法全景怎样走完一个样本：从双流到状态再到语音？

先沿一个样本走完全程。用户音频流与模型自身音频流同时进入全双工输入通路，经过音频编码器与适配器变成语言模型可用的表示，再与文本输入一起进入大语言模型解码器。解码器维护共享会话上下文，包括声学与语言证据、对话历史、当前话轮、推理进度与工具执行状态。生成器产生流式模型音频，这段音频又回流到模型音频流，成为下一时刻判断重叠话语的上下文。

论文用中央会话状态概括这种耦合。用户与模型语音共同影响感知与话轮管理，推理同时支撑口语回应与工具使用，工具返回结果再更新上下文。新的语音与新的工具结果都可以在其他部分尚未结束时到达，并改变是继续听、继续说、继续想还是发起外部动作的决定。
以下导读针对会话循环示意图，帮助建立整体心智模型。

> **看图路径：** 1. 先找到中央圆形会话状态，再看左侧用户流与模型流的汇入箭头；2. 再看右侧流式语音向外箭头与四个角落的功能标注；3. 核对深度感知、无缝双工、边说边想与流式动作的位置关系

[![原论文 Figure 2：Conversational loop of StepAudio 3 Realtime.](https://arxiv.org/html/2609.14005v1/realtime-conversational-architecture.svg)](https://arxiv.org/html/2609.14005v1/realtime-conversational-architecture.svg)

*论文图 2。原论文 Figure 2:：“Conversational loop of StepAudio 3 Realtime.”。*

该图中央是会话状态，左侧是用户流与模型流的汇入，右侧是流式语音的输出，4 个角落分别标注深度感知、无缝双工、边说边想与流式动作。从像素可见左侧两条曲线分别携带词义情绪声学背景与语音重叠话轮状态，右侧一条横向箭头表示持续播报，下方标注意图工具调用与反馈。这说明系统不是单向管道，而是状态在中间、语音与工具事件不断进出的闭环。

### 系统架构如何连接音频与文本：编码器、适配器与生成器？

系统架构采用混合专家结构，总参数约 1960 亿，每标记激活约 110 亿。语言主干基于 Step 3.7 Flash，音频前端采用 Qwen3-Omni 的音频变换器编码器，再用适配器把编码器输出映射到语言模型的表示空间。文本标记走单独输入通路，使解码器能同时以声学信息与文本上下文为条件。语音生成器做增量输出，并带有停顿迟疑等表达性节奏。

训练组织上，预训练分模态对齐、多模态混合训练与冷却 3 个阶段，序列长度固定 32K，共处理 1.2T 训练标记，混合中提高纯文本比例以保留基座通用能力。中间训练把上下文延长到 128K，以容纳更长对话历史、早期用户需求与中间工具结果，并大幅提高音频理解与代理交互数据的占比。
以下导读针对系统架构图，重点看数据如何流动。

> **看图路径：** 1. 沿全双工输入到音频编码器再到适配器再到大语言模型解码器的主链路观察；2. 注意文本单独一路进入解码器，与音频表示汇合；3. 跟踪生成器输出如何回流到模型音频流形成闭环

[![原论文 Figure 3：System architecture of StepAudio 3 Realtime.](https://arxiv.org/html/2609.14005v1/streaming-architecture.svg)](https://arxiv.org/html/2609.14005v1/streaming-architecture.svg)

*论文图 3。原论文 Figure 3:：“System architecture of StepAudio 3 Realtime.”。*

从像素可见左侧全双工块同时接收下方两条波形，即用户音频流与模型音频流，随后向右经过音频编码器与适配器，与上方文本块汇合进入大语言模型解码器，再进入生成器。生成器有一条回流线指向下方的模型音频流。这条回流是关键：模型能听见自己正在说什么，从而判断重叠的用户声音是附和还是打断。波形仅为示意，不代表真实幅度。

### 深度感知如何做：转写分支与理解数据的构造？

深度感知这个白话说法指系统不仅听字，还听说话人、语气、声学事件与时间结构。英文对应 Deep Perception。无缝双工指听与说重叠时的顺畅话轮管理，英文对应 Seamless Duplex。

**深度感知 × 无缝双工：** 深度感知负责从用户语音中提取说了什么和怎么说，包括词义、副语言、声学事件与时间结构；无缝双工负责根据用户流、模型流与对话历史决定继续听、开始说、继续说还是让出话轮。二者搭配的原因是仅有内容理解无法判断停顿是思考还是结束，仅有声音能量无法区分附和与打断，组合后感知提供证据、双工做出话轮动作，共同维持自然的轮转。

转写分支的监督微调把样本打包到最长 32K 序列，遵循频谱增强的思想做时频掩蔽，冻结音频编码器，只更新音频语言适配器与语言解码器以产生规范化转写。上下文感知识别允许附带对话历史、前序模型回应、场景描述或术语表作为可选证据，但目标转写仍以波形为依据，避免照抄无关词。长尾术语用合成数据补强：从知识分类扩展易混淆类别，枚举候选词去重后放入自然载体句转成语音，只保留发音与目标文本一致的样本，对易混淆词还可附带历史或实体提示。

音频理解数据的构造按层级分类覆盖词义、副语言、声学事件、说话人与时间结构、音乐与音频 grounded 推理。流程是采样控制选合适录音，描述与能力标注明确每段支持考什么，构造针对性问题，多模型独立标注再经一致性与质量检查合并。质量控制先去掉空、截断、格式错与严重重复，再用纯文本法官评查询与回答质量并打案例价值分，音频 grounding 可靠性用多模型对同一音频问题的一致性估计，只有高质量、高价值、强一致的才进入监督微调候选。

### 无缝双工如何管话轮：320 毫秒块与状态标记？

无缝双工把音频组织成 320 毫秒块，每块后跟一个状态或文本标记。声学证据与语义上下文共同指导继续听、发起回应、继续说或让出话轮。模型还会利用自己正在说的内容来解释与之重叠的用户话语，因为用户听到什么会影响那句话的含义。例如同样说对，可能是附和模型解释，也可能是纠正的前奏，需要结合双流与历史才能区分。

具体控制分 3 类。停顿与轮次结束结合声学时机与语义完整度，区分轮内停顿与轮次结束；附和与打断在模型说话期间解释用户声音，短暂确认视为继续参与而不换话轮，实质请求或纠正则视为打断意图；背景语音用对话历史判断是否讲给助手，决定纳入当前交换还是当作无关背景。

中间训练让模型适应这种时间交织表示，结合流式识别、语音活动检测与话语完整度流式预测的监督，并混入超过 10000 小时的合成全双工交互数据与文本数据以保留语言推理能力。后训练再用高质量交互数据细化轮次交接、附和处理、打断处理与背景语音拒绝。

### 边说边想如何并行：构想脑、表达脑与加速？

边说边想这个白话说法指不等想完就开口，说的同时继续想，英文对应 Think-While-Speaking。自适应思考指每轮判断是否需要显式推理，英文对应 Adaptive Thinking。

**边说边想 × 自适应思考：** 边说边想负责让私密推理与语音播报并行推进，先说已确定的部分再用完整推理补足后续；自适应思考负责判断本轮是否需要显式推理，把算力留给复杂轮次。二者搭配的原因是全量推理拖慢日常寒暄、完全不推理损害难题，组合后由自适应思考做是否想的路由，再由边说边想做想与说的并行调度。

**构想脑 × 表达脑：** 构想脑负责生成私密推理轨迹，持续推进思考流；表达脑负责根据当前已有的推理和已经说出的内容生成短回复片段，并按播报进度释放。搭配的原因是推理完成度与说话进度本来不同步，组合后两路调用同一音频模型并行工作，推理完成后剩余回复可利用完整推理状态，必要时用续写补充或修正早说部分。

**多标记预测 × 严格校验：** 多标记预测负责在每个目标模型步 1 次起草未来多个标记，减少私密思考的串行步数；严格校验负责只接受目标模型分布认可的草稿，保证口语输出不偏离。搭配的原因是加速不能以口播错误为代价，组合后论文对私密推理允许较宽松的典型接受加重复惩罚，对口语回复保留严格校验，把加速风险隔离在思考侧。

以下导读针对实时思考示意图展开，帮助区分自适应路由选择与边说边想加速机制。

> **看图路径：** 1. 先看上半部分自适应思考把用户轮次分为直接回应与深思两路；2. 再看下半部分构想脑与表达脑共用同一模型的双解码器布局；3. 核对思考标记、回应标记与输入标记的颜色区分及多标记预测加速块的位置

[![原论文 Figure 7：Overview of realtime thinking in StepAudio 3 Realtime.](https://arxiv.org/html/2609.14005v1/adaptive-reasoning-flow.svg)](https://arxiv.org/html/2609.14005v1/adaptive-reasoning-flow.svg)

*论文图 7。原论文 Figure 7:：“Overview of realtime thinking in StepAudio 3 Realtime.”。*

从像素可见上半部分是自适应思考路由，用户轮次的音频加上下文进入判断框，分出直接回应与深思两路；下半部分是边说边想加多标记预测，上方构想脑沿用户上下文推进思考流，下方表达脑同时消费已有思考与已说回应并输出流式音频，右侧虚线框标注多标记预测解码加速。图例用浅蓝、橙色、绿色区分输入标记、思考标记与回应标记。这说明路由决定想不想，并行机制决定怎么边想边说，加速决定想得更快。

论文默认用先说策略，不等初始推理前缀就开始回应；先想策略则等一小段推理前缀再开口。播报感知的调度按流式输出音频的进度释放回应片段，构想完成后剩余回应可用完整推理状态，最后还可用续写补充或修正早说部分。

自适应思考的监督在助理轮次级别构造，用固定探针模型在空思考块下重生答案，再由盲评比较原轨迹与无思考轨迹相对目标答案的质量，以此标记推理是否改变质量，并结合重复判断一致性、推理与答案连贯性及任务类型先验决定保留策略。加速用三头多标记预测，每步最多起草 3 个未来标记，对私密推理用熵自适应置信阈值的典型接受加 1.05 重复惩罚，对口语回应保留严格校验。

### 训练与数据如何组织：教师分工与参数合并？

训练分为预训练、中间训练、监督微调与后训练。预训练已在架构节说明，中间训练扩展上下文与交互数据，监督微调阶段转写分支与实时分支分叉。实时分支的多轮对话训练覆盖意图跟随、约束保持、澄清欠指定请求与按语境调整，联合训练对话与推理样本以支持难题深思与日常简答。构造按话题讨论点、参与者画像、轮次深度与目标能力四轴组织，用分层轮换扩展覆盖，长对话允许后轮细化约束、解决歧义、回看证据或转向。

**参数加权合并 × 专用教师模型：** 专用教师模型负责从同一基座出发、用不同数据配比分别练强多轮对话、音频理解、文本推理等局部能力；参数加权合并负责把多个教师的参数按系数直接平均成一个模型。搭配的原因是把全部数据混在一起重训成本高且难以独立迭代，组合后各教师可独立发展再按留出评估选权重合并，得到兼顾多域的平衡模型而不在每项都压过单项最强教师。

论文报告的合并用 4 个教师、归一化 3 比 1 比 1 比 1 加权。合并发生在参数空间，不引入新组件与推理路由。评估同时看单项分数与整体平衡，教师数据配比可独立发展再重组，避免在全量数据并集上重训。需要指出的缺项是原文未报告优化器细节、学习率、梯度路径与重置时机的完整清单，复现时不能从模型名称推定这些实现，只能按已给的数据构造与阶段划分复现流程。

语音代理训练结合针对性语音代理对话与真实多步代理轨迹。前者覆盖请求路由、澄清、私有上下文检索、 consequential 动作前确认、执行期更新、进度查询与结果汇报，并用负例抑制不必要工具调用与无据声称；后者过滤归一化，聚焦工具调用结构、参数一致性、证据 grounding 与口语适宜性。推理时模型在直接回应、轻量工具调用与异步后台执行之间路由，执行前需通过澄清或检索补足意图与参数并取得必要确认。

### 实验条件如何核对：基准、基线与指标方向？

语音识别用 5 个标准公开测试集，包括 LibriSpeech 干净与困难集、中文 AISHELL-1、WenetSpeech 网络与会议集，英文用词错率、中文用字错率；另用 ContextASR-Bench 的无上下文设置测长尾实体，不给领域标签、实体表与热词注入。基线为重跑的 Doubao 2.0 语音识别、Seed 2.0 Lite 与 HY3.0 语音识别预览版，用同一音频与同套计分。

音频理解用 8 个基准覆盖音频 grounded 推理、细粒度感知、非言语线索与多轮理解。报告用各基准的准确率或归一化分，Step-Caption 用法官对说话人属性打分后平均，MTalk-Bench 只含副语言与环境声两部分并聚合。对话推理用自建封闭文本基准 StepAudioChat，8 个维度取已验证能力线分数的无加权均值，隔离文本回应质量，不测韵律、时机与打断处理。

全双工用人工分析子集，覆盖停顿处理、轮次交接、用户打断与附和四项，类别分是满足对应交互标准的样本百分比，总分沿用来源报告的总分聚合，不对四项简单平均。工具任务用同一机构的 τ 语音实现，测航空零售电信三域客服，任务成功指最终数据库状态与目标一致，域成功率在可用时平均 3 次试验，宏平均对三域等权。通用文本用 HMMT 2026 年 2 月、GPQA 钻石与 MultiChallenge，分别记录准确率百分比，不跨三项平均。资源状态方面，本次未发现来源绑定且完成验证的资源，不得声称代码模型或数据已公开。

### 主结果显示什么：哪里领先、哪里落后？

先看音频理解的比较问题：在同批 8 个基准、同为 0 到 100 分高优的条件下，实时模型是否在内容之外也强。表前需要明确公平条件是保留各基准原报告的准确率或归一化分，方向都是越高越好。

| 条件 | 指标 | 本方法 | 比较对象 | 结论 |
| --- | --- | --- | --- | --- |
| 音频理解 8 基准 | MMSU 分数 | 90.6 | 83.6 | 本方法领先 7.0 |
| 音频理解 8 基准 | MMAR 分数 | 86.5 | 81.7 | 本方法领先 4.8 |
| 关键维度汇总 | MMSU 顶层 | 90.6 | 基线群 | 报告为顶层表现 |
| 关键维度汇总 | 全双工总分 | 98.9 | 基线群 | 报告为顶层表现 |
| 工具任务汇总 | τ 语音宏平均 | 56.0% | 基线群 | 接近最优 |

表后解释需要同时讲收益与代价。论文报告实时模型在八项中的四项领先，最大差距在 MMSU 与 MMAR，另在 Step-Caption 与 MTalk-Bench 领先，在 MMAU 与 WildSpeech 接近 Gemini 3.1 Pro，宏平均 81.3 与 81.8 相差 0.5。代价是 AudioMultiChallenge 落后 17.7，Big Bench Audio 各家接近饱和，说明多轮约束保持仍是短板，不能把宏平均接近解读为每项都强。
以下导读针对主结果总览图，帮助核对跨域表现。

> **看图路径：** 1. 先看顶部标题区分音频理解、交互智能、通用文本与语音识别四个大区；2. 再对比每个小卡中蓝色条与灰色条的长度与右侧数值；3. 注意语音识别区数值越小越好，其他区数值越大越好；4. 重点核对 MMSU、全双工与 HMMT 等领先项与落后的 AudioMultiChallenge

[![原论文 Figure 1：Benchmark results for StepAudio 3 ASR Max and StepAudio 3 Realtime (blue), compared with…](https://arxiv.org/html/2609.14005v1/stepaudio3-realtime-main-results.png)](https://arxiv.org/html/2609.14005v1/stepaudio3-realtime-main-results.png)

*论文图 1。原论文 Figure 1:：“Benchmark results for StepAudio 3 ASR Max and StepAudio 3 Realtime (blue), compared with baselines (gray).”。*

从像素可见该图分三排 9 卡加底部 3 卡，蓝色条为 StepAudio 系列，灰色条为基线。音频理解区 MMSU 90.6 与 MMAR 86.5 的蓝色条明显长于灰色条，AudioMultiChallenge 49.3 则短于 Gemini 3.1 Pro 的 67.0；交互智能区全双工 98.9 领先，对话 70.4 与基线 70.5 和 71.4 接近但低于 77.1；通用文本区 HMMT 86.8 领先，GPQA 83.0 与 MultiChallenge 59.7 落后于 Gemini 3 Flash；底部语音识别区 1.18、4.35、0.49 均为低优领先。这支持论文所说的广谱音频理解加稳健交互，但也暴露推理与零售任务的变异。

再看对话与全双工的对照。推理模式在 StepAudioChat 宏平均 73.0，高于 Doubao 2.0 Lite 的 70.5 与 DeepSeek-V4-Flash 的 71.4，低于 Kimi K3 的 77.1；实时交互模式宏平均 70.4，与前两者相当。论文用此支持边说边想可在实时说话的同时保留接近专用推理模型的对话推理表现，而不只是低延迟表面回应。全双工总分 98.9 超过 Qwen 的 98.4，轮次交接 100.0 与打断处理 99.0 较强，停顿 98.9 与附和 98.0 也均衡，说明既尊重轮内停顿又不把每个声音当打断。

### 全双工与工具任务的数字如何读：总分与分域？

全双工的比较问题是：在暂停、交接、打断、附和四项上，系统是否平衡而非偏科。公平条件是同一人工分析子集与同为百分比高优，总分沿用来源聚合。

| 条件 | 指标 | 本方法 | 比较对象 | 差异 |
| --- | --- | --- | --- | --- |
| 全双工子集 | 总分 | 98.9 | 98.4 | 领先 0.5 |
| 全双工子集 | 轮次交接 | 100.0 | 100.0 | 持平最优 |
| 全双工子集 | 打断处理 | 99.0 | 98.0 | 领先 1.0 |
| 全双工子集 | 附和处理 | 98.0 | 100.0 | 落后 2.0 |

表后解释要指出未胜出项。停顿处理落后于 GPT 实时版的 99.3，附和处理落后于 Qwen 的 100.0，说明在最敏感的继续听与继续说边界上仍有取舍。论文强调 2 对互补能力：尊重轮内停顿同时在轮次结束时回应，容纳打断同时穿过附和继续说，跨四项都强才算平衡控制。

工具任务的比较问题是：在有打断修订、附和与背景噪声的口语条件下，能否把 evolving 请求跟踪到最终数据库状态。公平条件是同一实现、三域等权宏平均、成功率越高越好。

| 条件 | 指标 | 本方法 | 比较对象 | 差异 |
| --- | --- | --- | --- | --- |
| τ 语音三域 | 宏平均成功率 | 56.0% | 56.5% | 落后 0.5 |
| τ 语音三域 | 电信域 | 70.2% | 63.7% | 领先 6.5 |
| τ 语音三域 | 航空域 | 60.0% | 62.0% | 落后 2.0 |
| τ 语音三域 | 零售域 | 37.7% | 49.7% | 落后 12.0 |

表后解释要强调分域反例。电信最强且超第 2 名 6.5 个百分点，航空接近最优，零售明显落后近 12 个百分点，因此总体接近最优不等于各域都可用。论文结论也把零售任务完成列为待改进，未测量误判率延迟与成本时，不承诺这些量得到改善。

### 消融支持什么：数据质量、自适应思考与多标记预测？

消融的比较问题是：在只改变监督数据或推理策略时，收益来自哪里、代价是什么。公平条件是固定其他权重与评测设置，只切换目标因素，指标仍为百分比高优。

| 条件 | 指标 | 本方法 | 比较对象 | 差异 |
| --- | --- | --- | --- | --- |
| 对话 8 类 | 推理分数 | 66.80 | 71.89 | 下降 5.09 |
| 对话 8 类 | 对话语用 | 65.87 | 63.59 | 提升 2.28 |
| 对话 8 类 | 思考率区间 | 51.5% | 82.0% | 跨类波动 |
| 推理增益 | 全思考相对无思考 | 11.37 | 8.37 | 推理类最大 |

表后解释要讲清反证。数据质量消融显示约 10 万高质量样本优于约 200 万随机样本，MMSU 从 78.78 到 89.70，MMAR 从 74.70 到 84.50，说明少而精胜过多而杂。自适应思考在 8 类思考率 51.5% 到 82.0% 之间，但推理类思考率仅 59.5% 却最需要全思考，忠实类思考率 79.2% 却只增益 1.72，论文明确指出低频不等于分到了最需要的轮次，聚合比较也不能给出单轮最优决策。相对直接监督微调，自适应思考提升对话语用但降低推理，存在不均匀效应。

| 条件 | 指标 | 本方法 | 比较对象 | 差异 |
| --- | --- | --- | --- | --- |
| 私密推理加速 | 每步接受草稿 | 1.801 | 2.153 | 五头更高 |
| 私密推理加速 | 墙钟加速比 | 2.05× | 1.76× | 典型接受更快 |
| 私密推理加速 | 推理分数 | 74.30 | 70.76 | 高于基线 |
| 私密推理加速 | 指令遵循 | 61.21 | 64.15 | 低于基线 |
| 头部接受率 | 第四五头严格 | 10.7% | 5.7% | 迅速衰减 |

表后解释要讲清适用条件。多标记预测在推理与记忆上超基线，但指令遵循下降；五头每步接受更多，但第四五头严格接受率仅 10.7% 与 5.7%，边际增益递减。墙钟比依赖各自计时配置，不能当作头深度的受控比较，保留口语严格校验也不能消除私密推理不完整带来的错误。教师合并消融显示合并宏平均音频理解 81.3 追平最优教师，通用文本 76.5 最高，对话 73.0 低于最强对话教师 74.2，支持合并是低成本平衡而非全面超越。

### 边界在哪里：哪些结论不能推广？

论文直接报告的边界包括多轮约束保持与零售工具任务。音频理解中 AudioMultiChallenge 落后较多，说明在自然多轮音频上维持与修订约束仍弱；τ 语音零售 37.7% 远低于电信 70.2%，说明长程任务执行不可靠。结论用报告显示表达这些差距，用支持表达合并与加速的平衡收益，用可能待验证表达推理分配的最优性。

未验证的推测需要单独标出。自适应思考的逐域预算与按能力封顶 drop 率是启发式，不能证明每轮决策最优；多标记预测的墙钟加速受推理长度与解码成本影响，总体趋势不等于每组每步都成立；训练资源、推理开销、输出帧率与实际延迟是不同量，未测量时不承诺延迟改善。

还有评测口径的限制。StepAudioChat 是封闭文本基准，隔离了韵律时机与打断，实时模式 70.4 与推理模式 73.0 不能直接等同口语体验；全双工总分沿用来源聚合，不等于四项平均；τ 语音成功只看最终数据库状态，不反映中间澄清质量；通用文本三项不平均，HMMT 领先不能掩盖 GPQA 与 MultiChallenge 落后。原文表头图注或算术若有冲突，应以原文说明为准，不自行编造划分来圆成一致。

### 复现先做什么：保留哪些超参数与信息条件？

复现应先区分两个分支。转写分支冻结音频编码器、更新适配器与解码器、序列最长 32K、时频掩蔽增强、允许历史场景术语作可选证据；实时分支用 128K 上下文、双流 320 毫秒块加状态标记、超过 10000 小时合成全双工数据、流式识别语音活动检测与完整度预测的多任务监督。预训练 3 阶段与 1.2T 标记、混合专家 1960 亿总量与 110 亿激活是必须记录的预算条件。

数据构造的复现要点是流程而非照抄数值。音频理解按采样配额去重、描述加能力标注、针对性设问、多模型独立标注再一致性过滤，案例价值由纯文本法官评查询回答与音频注释的信息量；对话按讨论点案例规划自演、末轮设问加标注 3 阶段质检，只保留三关高分样本。推理侧保留先说默认、先想备选、播报感知调度、续写修正、自适应思考的成对盲评标记逻辑、三头多标记预测加典型接受与 1.05 重复惩罚、口语保留严格校验。

验证还需补的项包括真实延迟与首包语音时间、打断误触发率、长对话约束违反率、工具参数错误归因、不同噪声下的稳定性，以及消融中未做到的单轮最优思考决策。权重下载与系统可运行状态本次未能确认可达，不得写已公开或可直接部署，复现应从数据管道与评测脚本搭起，先跑通转写与音频理解，再接入双工状态机与代理回路。

### 何时值得尝试：给新生的行动清单？

当任务同时需要听懂言外之意、管理话轮、边想边说并调用耗时工具时，这套听说想做循环值得参考。它的可学之处在于把状态放在中央，用双流解决附和与打断的歧义，用并行解决深想与低延迟的矛盾，用异步执行解决工具耗时与对话流畅的矛盾。论文在 MMSU、全双工总分与电信任务上的数字支持这种组织的有效性，数据质量消融也提醒新生把精力放在高质量小数据与一致性过滤上。

但当任务是严格多轮约束跟踪或零售类多步操作时，应先做小规模验证，因为论文在这些分域明确落后。尝试时先复现转写与理解基线，再加 320 毫秒状态机做停顿与打断，最后才加边说边想与代理，每步保留基线与可运行策略的对比，不用搜索最优或事后最优代替可部署收益。

一句话收束：把推理与工具都当作与说话并行的过程来调度，而不是等一切完成再开口，是本文最值得带走的方法判断；而推理算力分给谁最赚、长程任务如何做可靠，仍是待验证的开放问题。

<details>
<summary>📎 论文与评分元数据</summary>

排名：前50% | 文档类型：系统技术报告 | [arXiv 原文](https://arxiv.org/abs/2609.14005v1)

</details>

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。

- 评分规则：type-aware-v1

- 评分模型：muse-spark-1.3-contributor

- 评分请求协议：openai_responses

---

[← 返回 2026-09-15 语音/音乐/音频论文速递](/audio-paper-digest-blog/posts/2026-09-15/)
