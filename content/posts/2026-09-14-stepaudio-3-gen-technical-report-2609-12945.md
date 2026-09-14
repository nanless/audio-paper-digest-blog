---
title: "StepAudio 3 Gen Technical Report"
date: 2026-09-14
draft: false
tags: [音频生成, 自回归模型, 向量量化, 统一音频模型]
categories: [论文速递]
description: "StepAudio 3 Gen 用 12.5 Hz 共享 16 码本离散表示把语音、歌声、音效和音乐放在一个自回归流中建模，以主干预测首码本加轻量预测器补全残差码本的分工，在四阶段渐进预训练与零初始化适配下保持文本能力，并在中文人声相似度与声音设计指令遵循上报告了可核对的胜率与一致性得分，其代价是长序列声学建模与多阶段训练流程的复杂度。"
hiddenInHomeList: true
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_arxiv_id: "2609.12945"
paper_digest_workbench_contract: "researcher-workbench-v1"
paper_digest_reader_title: "离散自回归统一音频生成：以首层码本规划与残差声学补全分工控制干扰"
paper_digest_original_title: "StepAudio 3 Gen Technical Report"
paper_digest_arxiv_version: null
paper_digest_arxiv_versioned_id: null
paper_digest_arxiv_abs_url: "https://arxiv.org/abs/2609.12945"
paper_digest_arxiv_pdf_url: "https://arxiv.org/pdf/2609.12945.pdf"
paper_digest_primary_task: "音频生成"
paper_digest_taxonomy_contract: "paper-taxonomy-flat-tags-compat-v1"
paper_digest_taxonomy_selection_contract: "paper-taxonomy-selection-v1"
paper_digest_taxonomy_registry_version: "paper-taxonomy-v1"
paper_digest_taxonomy_registry_sha256: "15c82a567ce5a55dc1175684ed08b64c158558639d9c8fb822c9587ec32a8778"
paper_digest_taxonomy_concepts: [{"facet":"task","id":"task.audio-generation","label":"音频生成"},{"facet":"method","id":"method.autoregressive","label":"自回归模型"},{"facet":"method","id":"method.vector-quantization","label":"向量量化"},{"facet":"model_family","id":"model_family.unified-audio","label":"统一音频模型"}]
paper_digest_primary_method: "自回归模型"
paper_digest_score: 7.3
paper_digest_rank_bucket: "前50%"
paper_digest_document_type: "模型报告"
paper_digest_one_sentence: "StepAudio 3 Gen 用 12.5 Hz 共享 16 码本离散表示把语音、歌声、音效和音乐放在一个自回归流中建模，以主干预测首码本加轻量预测器补全残差码本的分工，在四阶段渐进预训练与零初始化适配下保持文本能力，并在中文人声相似度与声音设计指令遵循上报告了可核对的胜率与一致性得分，其代价是长序列声学建模与多阶段训练流程的复杂度。"
paper_digest_authors: [{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Bin Lin"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Bo Zhao"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Boyang Wang"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Boyang Zhang"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Boyong Wu"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Chao Yan"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Chen Geng"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Chen Wu"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Cheng Yi"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Chengli Feng"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Chenglin Zhu"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"DanNi Wan"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Daxin Jiang"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Dongqing Pang"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Fei Tian"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Feng Tian"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Future Li"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Gang Yu"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Guanglong Yang"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Jia Peng"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Jiahao Song"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Jiamin Fan"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Jiangjie Zhen"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Jianzheng Gao"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Jun Chen"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Li Xie"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Lifang Zhang"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Lingli Ji"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Liying Shi"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Lun Cai"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Min Xu"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Na Wang"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Peilin Li"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Peng Yang"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Pengfei Tan"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Qingjian Lin"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Ruijie Xiong"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Runze Li"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Shenghua Hu"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Shi Qiu"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Siqi Tu"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Siyi Zhou"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Tianjiao Deng"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Wanying Lu"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Weiming Niu"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Wen Sun"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"WenWen Qu"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Xiangyu Zhang"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Xianwei Zhang"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"XiaoSu Su"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Xing Chen"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Xinyu Liu"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Xuerui Yang"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Yang Li"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Yang Yang"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Yechang Huang"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Yibo Zhu"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Yifan Zhang"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Yiyang Xu"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Yu Fu"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Yu Luo"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Yu Zhou"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Yumang Wang"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Yunzhou Ju"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Yuxiang Yang"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Zekai Liu"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Zengwei Yao"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Zhenwei Mou"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Zheqi Dai"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Zhiyue Wu"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Zichao Zhou"}]
paper_digest_abstract_sha256: "4998d309699e2a6f286256e9f8015cca536f0a0e02fccde87cacff9362e10f4a"
paper_digest_sidecars: {"citation.bib":{"sha256":"7ea73f8bb4e2d52baa5ccd38fa8d8b0b524880c85eb9190462dbd104077575e8","url":"/audio-paper-digest-blog/data/papers/2026-09-14/2609-12945/citation.bib"},"citation.json":{"sha256":"1952d76872f98df2aa1ddbcc50d6019b60ce4725f0c4b70aa37bf8f1137df098","url":"/audio-paper-digest-blog/data/papers/2026-09-14/2609-12945/citation.json"},"citation.ris":{"sha256":"73b53ebdf5ac883a04d4d37cf54999cc12ca87299f72b14993060c265c6fa31b","url":"/audio-paper-digest-blog/data/papers/2026-09-14/2609-12945/citation.ris"},"rethink-context.json":{"sha256":"a0c740222b7ac4f4e5ca4acf720cc7ef9626d5f7d5aeb56f2a0e1b0783d4bdc1","url":"/audio-paper-digest-blog/data/papers/2026-09-14/2609-12945/rethink-context.json"}}
paper_digest_api_reader_contract: "beginner-researcher-v3"
paper_digest_api_reader_article_sha256: "c2b24ac841c12526fb16099299e51e17732571f903bf9ece15b5d91517f04b06"
paper_digest_api_reader_plan_sha256: "efffd48202a56d1619f218c3d43ec4705e776f4c9ae581d515e470d57c3e29ec"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings-v4"
paper_digest_api_reader_source_bindings_sha256: "2d28efb75f21acf0cf9f66555f08d111a1c6ed55721508285b8c1e80c32a8fc4"
paper_digest_api_reader_source_table_count: 4
paper_digest_api_reader_source_formula_count: 3
paper_digest_api_reader_structured_artifacts_sha256: "64a6fe061355721784e9aef538e003e133156af7195ac7a588c860827e245f49"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity-v1"
paper_digest_api_reader_author_identity_sha256: "ed609a0b67ef43f22d009fb35ebfe39069b1956973bb36b66d747de075c48e8f"
paper_digest_api_reader_author_count: 71
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity-v1"
paper_digest_api_reader_resource_identity_sha256: "9fb2fd33821ec24c3b19e4a50134eada246680ff314cc9d787f67bfb3c67dd53"
paper_digest_api_reader_resource_count: 1
paper_digest_api_reader_figure_persistence: "ephemeral-no-persisted-figure-assets-v1"
paper_digest_api_reader_decision_projection: "api-reader-decision-projection-v2"
---

# 📄 离散自回归统一音频生成：以首层码本规划与残差声学补全分工控制干扰

> 英文题目：*[StepAudio 3 Gen Technical Report](https://arxiv.org/abs/2609.12945)*

> 标签：#音频生成 | #自回归模型 | #向量量化 | #统一音频模型
>
> 评分：**7.3/10** | 创新 1.5/2 | 技术严谨 1.1/1.5 | 实验充分 1/1.5 | 清晰度 0.8/1 | 影响力 1.2/1.5 | 开源 0.2/1.5 | 可复现 0.3/0.5 | 工程/实践 1.2/1.5


## 👥 作者与机构

- Bin Lin：机构信息未在 arXiv HTML 中可靠披露
- Bo Zhao：机构信息未在 arXiv HTML 中可靠披露
- Boyang Wang：机构信息未在 arXiv HTML 中可靠披露
- Boyang Zhang：机构信息未在 arXiv HTML 中可靠披露
- Boyong Wu：机构信息未在 arXiv HTML 中可靠披露
- Chao Yan：机构信息未在 arXiv HTML 中可靠披露
- Chen Geng：机构信息未在 arXiv HTML 中可靠披露
- Chen Wu：机构信息未在 arXiv HTML 中可靠披露
- Cheng Yi：机构信息未在 arXiv HTML 中可靠披露
- Chengli Feng：机构信息未在 arXiv HTML 中可靠披露
- Chenglin Zhu：机构信息未在 arXiv HTML 中可靠披露
- DanNi Wan：机构信息未在 arXiv HTML 中可靠披露
- Daxin Jiang：机构信息未在 arXiv HTML 中可靠披露
- Dongqing Pang：机构信息未在 arXiv HTML 中可靠披露
- Fei Tian：机构信息未在 arXiv HTML 中可靠披露
- Feng Tian：机构信息未在 arXiv HTML 中可靠披露
- Future Li：机构信息未在 arXiv HTML 中可靠披露
- Gang Yu：机构信息未在 arXiv HTML 中可靠披露
- Guanglong Yang：机构信息未在 arXiv HTML 中可靠披露
- Jia Peng：机构信息未在 arXiv HTML 中可靠披露
- Jiahao Song：机构信息未在 arXiv HTML 中可靠披露
- Jiamin Fan：机构信息未在 arXiv HTML 中可靠披露
- Jiangjie Zhen：机构信息未在 arXiv HTML 中可靠披露
- Jianzheng Gao：机构信息未在 arXiv HTML 中可靠披露
- Jun Chen：机构信息未在 arXiv HTML 中可靠披露
- Li Xie：机构信息未在 arXiv HTML 中可靠披露
- Lifang Zhang：机构信息未在 arXiv HTML 中可靠披露
- Lingli Ji：机构信息未在 arXiv HTML 中可靠披露
- Liying Shi：机构信息未在 arXiv HTML 中可靠披露
- Lun Cai：机构信息未在 arXiv HTML 中可靠披露
- Min Xu：机构信息未在 arXiv HTML 中可靠披露
- Na Wang：机构信息未在 arXiv HTML 中可靠披露
- Peilin Li：机构信息未在 arXiv HTML 中可靠披露
- Peng Yang：机构信息未在 arXiv HTML 中可靠披露
- Pengfei Tan：机构信息未在 arXiv HTML 中可靠披露
- Qingjian Lin：机构信息未在 arXiv HTML 中可靠披露
- Ruijie Xiong：机构信息未在 arXiv HTML 中可靠披露
- Runze Li：机构信息未在 arXiv HTML 中可靠披露
- Shenghua Hu：机构信息未在 arXiv HTML 中可靠披露
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
- XiaoSu Su：机构信息未在 arXiv HTML 中可靠披露
- Xing Chen：机构信息未在 arXiv HTML 中可靠披露
- Xinyu Liu：机构信息未在 arXiv HTML 中可靠披露
- Xuerui Yang：机构信息未在 arXiv HTML 中可靠披露
- Yang Li：机构信息未在 arXiv HTML 中可靠披露
- Yang Yang：机构信息未在 arXiv HTML 中可靠披露
- Yechang Huang：机构信息未在 arXiv HTML 中可靠披露
- Yibo Zhu：机构信息未在 arXiv HTML 中可靠披露
- Yifan Zhang：机构信息未在 arXiv HTML 中可靠披露
- Yiyang Xu：机构信息未在 arXiv HTML 中可靠披露
- Yu Fu：机构信息未在 arXiv HTML 中可靠披露
- Yu Luo：机构信息未在 arXiv HTML 中可靠披露
- Yu Zhou：机构信息未在 arXiv HTML 中可靠披露
- Yumang Wang：机构信息未在 arXiv HTML 中可靠披露
- Yunzhou Ju：机构信息未在 arXiv HTML 中可靠披露
- Yuxiang Yang：机构信息未在 arXiv HTML 中可靠披露
- Zekai Liu：机构信息未在 arXiv HTML 中可靠披露
- Zengwei Yao：机构信息未在 arXiv HTML 中可靠披露
- Zhenwei Mou：机构信息未在 arXiv HTML 中可靠披露
- Zheqi Dai：机构信息未在 arXiv HTML 中可靠披露
- Zhiyue Wu：机构信息未在 arXiv HTML 中可靠披露
- Zichao Zhou：机构信息未在 arXiv HTML 中可靠披露

## 📌 核心摘要

该任务以文本指令为输入，统一生成语音、歌声、音乐、音效及多类型混音为输出，实际难点在于多域声学特性差异大，且引入音频建模时易干扰预训练大语言模型的文本知识与推理能力。StepAudio Tokenizer先将24kHz波形与冻结自监督语义特征联合量化为12.5Hz共享16层残差向量量化码流，使每层同时携带语义与声学信息。其输出的首层码本作为粗粒度序列连同文本进入大语言模型主干，沿时间轴自回归预测语义与韵律规划，主干隐状态再连同首层码进入轻量因果变换器沿码本轴补全其余十五层残差码本，最后由全因果解码器直接由完整码流重建波形。相对连续隐空间加扩散或流匹配声码器的统一音频路线，该全离散自回归省去连续声学渲染器并以共享表示跨域建模，降低了多流水线割裂与模态干扰。在AISHELL-1测试集下，带RVQ Adaptor系统的CER为3.00%，低于无RVQ Adaptor系统的CER 5.25%。其结论受限于音乐与复杂混音场景仍缺乏公开客观基准的充分验证，向长时程音乐结构与高密度混音的外推尚未验证。原文未披露训练、推理或部署成本。

## 🔗 开源与复现资源

- 演示资源：<https://stepaudiollm.github.io/step-audio-3-gen/> — 链接可访问（HTTP 200）

可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 输入是什么，输出是什么，为什么统一生成难？

这篇报告的研究对象是通用音频生成，输入是自然语言指令，输出是可播放的音频波形。指令需要同时表达说谁、说什么、怎么说、在什么场景中说，以及是否叠加音效、环境声或背景音乐。输出覆盖朗读语音、对话语音、歌声、乐器音乐和环境音效，还包括多说话人与多种声音混合的复合场景。论文把可核对的样本页放在官方演示链接，当前可用状态是链接可达且返回正常，初学者可以先听再回来看方法，避免只看文字描述去猜声音效果。

难点在于不同音频域长期使用不同的表示与管线。语音合成关心字音准确、音色相似和韵律控制，文本到音频关心事件与场景的对应，音乐与歌声关心结构、音色与长程连贯。如果每个域各用一套编码器、条件格式和声学渲染器，混合场景就要在多个系统之间拼接，时间对齐与风格一致都难以保证。近期统一路线分成两类，一类在连续隐空间用扩散或流匹配并行渲染声学细节，另一类把音频离散成单元后用语言模型式的序列建模。报告选择后者，动机很具体：离散表示可以直接扩展词表、复用因果目标，并与文本交织，从而把理解、生成和文本智能放在同一个模型里推进。

对刚入门的读者，关键是先分清 3 个动作：表示指如何把波形变成模型能预测的符号，规划指如何沿时间决定说什么与何时出声，渲染指如何把符号变回高保真波形。连续扩散路线擅长渲染，离散自回归路线擅长规划与交织。StepAudio 3 Gen 的取舍是把渲染也留在离散码空间内完成，不再引入扩散或流式声学渲染器，用分层预测来兼顾规划与细节。这个选择决定了后文 tokenizer、主干与残差预测器的全部设计。

### 连续渲染与离散建模两条路线各解决了什么？

连续隐空间加扩散或流匹配的路线，把文本条件映射为声学隐变量，再并行去噪得到波形或频谱。这类方法在音质与并行速度上有优势，已被用于语音、声音、音乐乃至混合音频。它的代价是需要独立的声学渲染器，文本推理与声学渲染往往是两个目标、两种接口，与大语言模型的词表和交织上下文不天然兼容。

离散单元加语言模型建模的路线，先把音频变成一串或多串离散编号，再用自回归方式预测。文本与音频因此共享同一个下一个编号预测任务，可以在同一序列里交替出现。相关工作包括把推理与重建分开、用局部自回归解码器或多阶段训练的系统。报告明确对比了最接近的 UniAudio 2.0，指出对方分离推理与重建并使用基于流的重建解码器，而本报告研究的是基于残差向量量化的单一语义声学层级，共享主干并做离散声学预测。初学者不要把类别差异直接当成胜负，两种路线在延迟、并行度与可控性上的约束不同。

在多码本组织上，朴素做法是把每帧多个码本编号沿时间展平，序列会变得过长；只用粗语义编号则丢失声学细节。文献中有时间深度结构与延迟模式两种避免展平的办法。前者用时间变换器管跨帧结构，用更小的局部变换器管帧内码本；后者把并行码本流错开时间偏移，用一个变换器预测全部残差层。

报告选择时间深度结构，理由与预训练大模型直接相关：若用延迟模式，需要多流音频输出接口，并让预训练语言模型直接预测每个残差层、承受全部声学损失；时间深度结构让语言模型只处理语义集中的首层码本与长程规划，把残差声学建模收敛到小模块内部。

### 要验证的核心矛盾：加音频能力时如何不冲掉文本能力？

论文把问题定义为在保留文本大模型能力的前提下，获得跨域音频理解与生成能力。干扰来自两个具体通道。表示侧，新初始化的多个残差码本嵌入求和后，其统计特性与预训练文本嵌入不一致，直接加入输入会扰动主干。优化侧，每个时间决策对应多达 15 个残差码本预测，声学损失在量级上远强于首码本与文本的编号级目标，若一开始就端到端联合优化，主干会被迫先吸收这两股冲击，继承的语言智能可能被交易掉。

因此报告提出 3 个可操作的设计原则：干扰感知的渐进式预训练、在多码本声学表示与预训练嵌入之间加适配器、在共享表示上做离散自回归建模。评估围绕 3 个问题展开：适配器是否有效整合多码本表示，渐进式预训练是否保留文本能力，最终模型在语音合成与声音设计等生成任务上是否达到可用水平。教学例子：可以把主干想象成已经会写文章的编辑，新来的音频团队 1 次递上十六份稿纸并要求每份都打分，如果第一天就让编辑为所有打分负责，编辑原有的写作标准容易被带偏；正确做法是先让新人内部对齐，再逐步让编辑接手。

### 沿一个样本走完输入到输出：谁预测什么，谁解码什么？

假设输入是一条统一指令，包含角色、导演与剧本 3 段。角色定义说话人身份与音色特征，导演描述声学场景与生成意图，剧本沿时间轴安排语音与声音事件，说话片段带说话人标签并可用括号标注副语言特征，音效与音乐用方括号条目表示相对顺序。模型把文本指令与历史音频统一成一个因果序列，输出是每帧 16 个码本编号，再由神经声码器解码为 24 kHz 波形。

具体走 1 帧的流程是：主干根据过去的文本与音频上下文预测当前帧的首码本编号，这个编号已进入主词表，与文本共享同一个语言模型头；随后轻量因果变换器以主干在该位置的隐状态和刚选出的首码本为前缀，沿码本轴自回归生成剩余 15 个残差码本；16 个码本拼成完整帧，送入解码器重建波形。输入侧则反向工作：同一帧的 16 个码本各自查表后求和，再经过适配器变换，加到首码本词嵌入上，文本位置不经过该通路。

下图是全文唯一使用像素的架构总览，阅读时先看三栏分工，再看 3 类箭头的含义，生成流、预测器条件与码本流各有不同走向，不要混为一类。

> **看图路径：** 1. 先从左栏原始波形向上追踪语义编码器与声学编码器汇入融合下采样再进入残差量化的路径；2. 再看中栏音频嵌入经适配器与词嵌入相加后进入主干并由语言模型头分出文本与首码本的分支；3. 最后沿右侧虚线条件与黄色码本流确认隐状态加首码本如何生成残差码本并拼成完整帧送入声码器

[![原论文 Figure 1：Overview of the StepAudio 3 Gen architecture.](https://arxiv.org/html/2609.12945v1/step-audio-3-gen-framework-four-color.svg)](https://arxiv.org/html/2609.12945v1/step-audio-3-gen-framework-four-color.svg)

*论文图 1。原论文 Figure 1:：“Overview of the StepAudio 3 Gen architecture.”。*

上图左侧显示原始波形同时进入语义编码器与声学编码器，经特征融合与下采样后进入残差量化器，输出 16 个码本；中栏显示音频嵌入经适配器与词嵌入相加后进入主干，再经语言模型头分出文本与首码本；右侧显示主干隐状态与首码本作为条件进入残差码本预测器，生成 15 个残差码本后拼成完整帧，再经因果声码器解码为波形。图中加号表示按元素相加且只作用于音频位置，虚线表示预测器条件，黄色箭头表示码本流。这种布局把长程时间规划留在中栏大模型，把帧内声学补全隔离在右侧小模块，左侧分词器则保证两类信息在量化前已经融合。

### 分词器如何让每层码本同时带有语义与声学？

白话说，分词器就是把波形压成编号的装置。英文是 StepAudio Tokenizer，残差向量量化简称 RVQ。它的输入是原始波形，输出是每秒 12.5 帧、每帧 16 个编号，每个编号取值范围是二千零四十八中的一个。解码方向则把这些编号还原为 24 kHz 波形，且解码器完全因果，支持流式合成。

实现上分词器并行提取两路特征：冻结的自监督编码器提供语义特征，直接从波形提取的卷积编码器提供声学特征，两路沿通道拼接后经步幅卷积压缩到 12.5 赫兹，再由共享量化器离散化。关键是联合量化而不是分工量化，每层码本都同时携带语义与声学，而不是某些层只管语义、某些层只管声学。为了让靠前码本更适合时间规划，训练使用 0.5 的量化器丢弃与语义蒸馏分支：在丢弃深层码本的条件下仍要求从量化隐变量回归教师语义特征，从而把可规划信息压向早期码本。

**语义特征 × 声学特征：** 语义特征负责可规划的语言与音乐结构信息，由冻结自监督编码器提供并经蒸馏压向靠前码本；声学特征负责波形细节，由卷积编码器从原始波形直接提取；二者在通道维拼接后被同一残差量化器联合量化，使每层码本同时携带两类信息，从而让首层码本可被语言模型做时间维规划，而深层残差仍保留可重建的细节。

训练分 2 个阶段：先在大规模多模态均衡采样数据上训练编码器、量化器与解码器，再冻结编码器、量化器与语义分支，只精调声学解码器与判别器。这种安排使重建质量提升的同时不改变编号空间，已在旧编号上训练的模型保持兼容。判别器与损失包括多周期波形判别器、多分辨率频谱判别器，以及特征匹配、多尺度梅尔谱与残差量化承诺损失，目标是时频一致与码本稳定使用。下表把分词器的关键配置收拢在一处，便于复述时 1 次核对帧率、码本数、码本大小与采样率。

| 配置项 | 帧率 | 每帧码本数 | 每码本条目数 | 重建采样率 |
| --- | --- | --- | --- | --- |
| 共享离散表示 | 12.5 Hz | 16 | 2048 | 24 kHz |

上表 4 个数字分别对应时间密度、帧内深度、每层词表大小与输出保真度。帧率决定每秒多少个时间决策，码本数决定每帧多少个声学补全步骤，条目数决定首码本进入主词表时新增的连续编号段长度，重建采样率决定最终波形的频带上限。复现时应先固定这组配置再调训练，因为改变任一项都会改变序列长度与词表映射。

### 主干与残差预测器如何分工预测十六个码本？

白话说，主干负责决定大方向，预测器负责补细节。主干是保留的解码器大语言模型，英文是 LLM Backbone；预测器是轻量 4 层因果变换器，英文是 RVQ Code Predictor。主干沿时间轴自回归，每步只输出首码本；预测器沿码本轴自回归，在每 1 帧内部输出剩余 15 个码本。主干隐状态经线性投影到预测器宽度，与首码本一起作为前缀条件，每生成一个残差码本就将其回喂作为下一步输入。

**主干大模型 × RVQ Code Predictor：** 主干大模型负责沿时间轴预测每帧第 0 个码本并维持文本与音频交织的长程规划，复用预训练语言模型的词表与因果目标；RVQ Code Predictor 负责沿码本轴在帧内自回归补全第 1 至 15 个残差码本，以主干隐状态和已选的首码本为条件；这种搭配把语义规划与声学补全的梯度与容量分开，使大模型不必直接承受全部残差声学损失。

这种分解的概率形式是精确分解而非近似，原因是历史帧的全部 16 个码本已通过求和帧嵌入进入主干，主干隐状态本身已编码过去的完整声学上下文，预测器不需要另设旁路去读取历史残差。它放弃的是反方向：预测器的输出不回流到主干，因此两部分只在预测器收敛后才联合训练。训练目标是编号级损失与残差损失之和，残差项沿深度求和而非平均，权重系数是阶段间唯一改变的权重。

\[\displaystyle p(c_{t,0},\ldots,c_{t,15}\mid\mathbf{z}_{\lt t},\mathbf{c}_{\lt t})\;=\;\underbrace{p(c_{t,0}\mid\mathbf{z}_{\lt t},\mathbf{c}_{\lt t})}_{\text{main LM head}}\;\prod_{k=1}^{15}\;\underbrace{p(c_{t,k}\mid\mathbf{z}_{t},\,c_{t,0},\ldots,c_{t,k-1})}_{\text{RVQ code predictor}}\]

上式符号含义是：小写字母表示第 t 帧第 k 层码本，粗体表示主干隐状态，竖线右侧是已见上下文；等号右侧第一项是主语言模型头给出的首码本分布，连乘的每一项是预测器在已知主干隐状态与同帧更早码本条件下的残差分布。输入是过去的文本与音频编号，计算目标是完整帧的联合分布，原文实现是时间与深度两个自回归的串联。

\[\displaystyle\mathcal{L}\;=\;\mathcal{L}_{\mathrm{tok}}\;+\;\lambda\,\mathcal{L}_{\mathrm{sp}},\qquad\mathcal{L}_{\mathrm{tok}}=-\sum\log p(c_{t,0},x_{t}),\qquad\mathcal{L}_{\mathrm{sp}}=-\sum_{t}\sum_{k=1}^{15}\log p(c_{t,k}\mid\cdot),\]

上式把总损失写成两项之和，首项覆盖文本与首码本，次项覆盖 15 个残差码本并沿时间与深度求和。系数的作用是平衡量级，因为求和而非平均会使声学项显著大于编号级项，后文训练阶段正是通过截断与降权来管理这股不平衡。

\[\displaystyle c_{t,0}\in\{0,\ldots,2047\}\quad\Longleftrightarrow\quad\mathrm{id}(c_{t,0})\in[V,\,V+2048),\]

上式说明首码本在主词表中的位置：原始编号取零到二千零四十七的整数，对应词表末尾连续新增的 2048 个编号，文本词表大小记为大写字母。这种映射使两种模态共享同一个归一化分布，可以自由交织。

### 输入侧如何把十六个嵌入送入预训练词嵌入空间？

白话说，输入侧要解决新旧分布对不齐的问题。每个音频帧有 16 个码本，每个码本有自己的嵌入表，查表后 16 个向量求和成一个帧嵌入。若直接把这个和向量当成输入，主干会看到与预训练文本嵌入统计不一致的信号。报告的办法是加一个按位置作用的残差模块，英文是 RVQ Adaptor，结构是带前置归一化与门控线性单元的残差块堆叠，下投影零初始化使初始时为恒等映射。

具体连接是：在音频位置上，适配器输出按元素加到首码本词嵌入上；文本位置没有音频码本，该通路输出为零，保持不动。因此首码本在输入侧被表示 2 次，1 次是扩展主词表中的音频词嵌入，1 次是求和帧内部经由自己码本表的分量。这种位置门控把新增通路严格限制在音频位置，避免污染文本表示。

**RVQ Adaptor × 求和帧嵌入：** 求和帧嵌入把 16 个码本各自查表得到的向量直接相加，保留完整多码本信息但分布与预训练文本嵌入不一致；RVQ Adaptor 作为按位置作用的零初始化残差堆叠，对该求和向量做模态特定的变换后再加到首码本词嵌入上；搭配使模型能读入完整声学表示做理解与续写，同时初始化时恒等映射不扰动原文本通路，学习负担被限制在新增模块一侧。

复述时要抓住 3 个可检查点：求和发生在查表之后、适配之前；相加发生在适配输出与词嵌入之间；门控发生在位置级别而非通道级别。消融实验显示去掉适配器后，语音识别、音频理解、翻译与知识问答全面下降，说明该模块承担了多码本声学表示与预训练空间的对齐工作，而不只是增加参数量。

### 四阶段预训练与指令后训练各冻结什么、各学什么？

训练分为分词器训练与大模型预训练两大部分，分词器部分上一节已讲，本节聚焦大模型从预训练文本大模型初始化后，如何分 4 阶段引入音频。第一阶段做模态对齐，只训练输入侧音频嵌入与适配器，冻结主干、语言模型头与码本预测器，词嵌入给 0.1 倍乘子以便新增音频行适配；由于适配器下投影零初始化且主干冻结，文本能力漂移严格为零，因此不需要文本回放。第二阶段做音频理解，解冻全模型但仍不监督音频目标，在音频理解任务与一半文本语料的 1 比 1 混合上训练，新模块保留 10 倍学习率乘子并排除权重衰减。

第 3 阶段是主要生成阶段，引入语音合成与交织对话生成，混合比例为文本比语音合成比交织对话等于 3 比 1 比二，文本仍占一半。关键操作是把码本预测器的条件输入与主干隐状态断开，使 15 层残差损失只训练预测器，主干仍由编号级目标驱动。第 4 阶段是长上下文联合冷却，解除截断、序列长度从一万六千扩展到三万二千，并把残差权重从 1.0 降到 0.1，使两项量级可比；低学习率限制声学梯度对主干的改写幅度。整个预训练约消耗 2.7 万亿大模型编号，文本从第二阶段起占据每步一半。

**梯度截断 × 联合冷却：** 梯度截断指在主要生成阶段把残差码本预测器的条件隐状态与主干断开，使 15 层残差损失只训练预测器本身；联合冷却指在预测器收敛后的最后长上下文阶段恢复端到端梯度并把权重从 1.0 降到 0.1；前者避免随机初始化的声学目标过早重塑主干表示，后者再以小学习率让主干隐状态学会 serving 声学条件，二者组合实现先隔离学习再谨慎合并。

后训练包括全参数监督微调与组相对策略优化。监督微调延续联合配置，截断保持关闭、残差权重保持 0.1，语料约 5000 小时覆盖音乐、音效、声音设计、歌声与语音，音频嵌入、适配器与预测器保留 10 倍学习率乘子。强化学习对每条指令采样 16 个候选音频，先由音频理解模型生成描述，再由文本大模型 4 次打分取均值得到指令一致性分，对有逐字稿的语音样本再用识别错误率做指数惩罚，无稿任务则声学项系数为一；组内标准化得到优势后做裁剪策略优化并加小系数散度约束，丢弃组内标准差过小的组以减少噪声。下表收拢训练数据规模，便于核对预训练与微调的量级差异。

| 数据阶段 | 预训练总量 | 分词器预训练 | 自然对话微调语音 | 监督微调总音频 |
| --- | --- | --- | --- | --- |
| 覆盖范围 | 2.7T LLM tokens | 700k hours | 1,500 hours | 5,000 hours |

上表四列分别对应大模型预训练消耗的编号数、分词器大规模预训练的音频时长、为自然口语筛选的语音时长，以及监督微调阶段的总音频时长。量级对比显示分词器需要极广覆盖以建立共享码空间，而微调更强调自然对话与多任务指令的质量。复现时应优先保证文本回放比例与残差权重切换时机，而不是只堆时长。

### 用什么数据、什么指标、与谁比、条件是否一致？

预训练数据按生成与理解组织，音频源覆盖语音、歌声、音乐与环境声，生成侧包括语音合成、歌声合成、歌词条件音乐、描述条件声音与语音到语音翻译，理解侧包括识别、翻译、描述、副语言问答、口音辨识与多轮交织对话。生成样本把一个文本编号与两个音频帧交织，音频以 12.5 赫兹、每帧十六码本编码。后训练按任务构造：语音合成侧重自然对话并用音频描述与副语言识别模型筛选，语音到歌声用语音克隆与歌声转换构造伪平行对并经美学与相似度过滤，音乐用自研音乐模型按多形式提示生成，音效则合并录音库与合成双茎并做场景混合。

评估分 3 类问题。适配器有效性在预训练后测音频能力，包括中文识别字错率、英文识别词错率、音频理解准确率、英中双向翻译得分与语音知识问答准确率，方向是错误率越低越好、其余越高越好。渐进式预训练有效性在预训练后测文本能力，对比 3 阶段基线，该基线不用适配器且直接做识别、理解生成与冷却，指标覆盖金融、中文通用、英文通用、数学、代码与推理多套基准。生成质量则分语音合成的人声相似度与声音设计的风格遵循，前者用 1500 次两两对比算胜负与等级分，后者用 6000 条生成的客观风格一致性加 490 次人工偏好对比。

比较条件需要逐项核对：语音合成对比 5 个商用系统且每系统固定一个声音，声音设计客观评测固定两千文本乘 3 种条件，人工评测采用盲测与动态等级分。报告明确说明不依赖字错率与说话人相似度来评价人声自然度，理由是平直韵律也能字准、相似度只反映音色。初学者复述时不要把自动指标当成人评，也不要把不同指标的差值放在同一列比较，数值相同不代表同一指标。

### 语音合成的人声相似度在什么条件下胜出？

被测的是整体听感更像真人自然说话，而非字准或音色相似。评测集文本取自真实人声转写，6 个系统两两对比共 1500 次，每次记胜平负，再汇总等级分与直接对阵胜率。等级分越高表示在该评测池内更受偏好，直接对阵则每对对手各比 100 次。这种设计捕捉韵律、节奏、表现力与自发口语行为，允许平局以避免强行区分。

下表把可从原文连续句子逐字核对的顶层结果收拢，基线是报告点名的 5 个商用系统，数字只保留原文明确给出的等级分与胜率区间，不补猜每个对手的具体分值。

| 评测 | 系统 | Elo 评分 | 总胜率 | 单对手胜率区间 |
| --- | --- | --- | --- | --- |
| 中文人声相似度 | StepAudio 3 Gen | 1755.33 | 82.0% | 73.0% 至 90.0% |

上表显示该模型在该中文评测池内等级分最高，直接对阵 5 个商用系统保持全胜且总胜率超过 80%，单对手最低胜率仍超过 70%。支持的判断限于该评测集与该偏好定义，不支持推广到所有语言、所有说话风格或延迟与成本更优。未胜出项在此表中被隐去具体分值，原文只给出对手名单，复现时应按同等每对手 100 次、允许平局的协议重测，而不是引用等级分绝对值跨池比较。

### 声音设计的指令遵循在客观与人工两端表现如何？

声音设计指按文字描述定制音色、风格、情感、口音与副语言特征。客观评测使用完整指令语音评测基准，中英文各一千文本，每文本在声学参数指定、描述性风格指令与角色扮演 3 种条件下各生成 1 次，每系统共 6000 条，由大模型裁判返回二值风格一致性，分数为有效判断中一致的百分比，平均分为 3 条件无权平均。人工偏好则用盲测对战机制，中英文共 490 次对比并动态计算等级分。

下表只收录原文连续句子直接报告的平均分、等级分与总胜率，不把表格中未在句子里逐字出现的细分条件分值搬入，以满足逐字可核对的要求。

| 评测 | 系统 | 中文平均分 | 英文平均分 | 人工 Elo 与总胜率 |
| --- | --- | --- | --- | --- |
| 声音设计遵循度 | StepAudio 3 Gen | 85.2% | 77.7% | 1668.5，75.5% |

上表显示该模型在中英文平均分上均为受测系统中最优，人工盲测等级分第一且总胜率超过 70% 半，单对手胜率区间为六成五至 80% 六。代价是客观裁判本身是大模型，其判断噪声与人工偏好并不完全等同；报告同时保留人工对战作为交叉验证。限制是细分条件的相对强弱需要回查原表矩阵，本解读为保证可核对而未转写未在句子中出现的细分数字，读者做严格复现时应以原表矩阵为准并保留 3 条件无权平均的聚合口径。

### 去掉适配器或改掉渐进策略会发生什么？

消融围绕两个干预展开。第一是输入侧有无适配器，固定在预训练后比较。若去掉适配器，音频嵌入求和向量直接进入主干，报告显示识别错误率上升、理解与翻译得分下降，知识问答差距尤其大，说明多码本完整表示需要模态特定变换才能被预训练空间有效利用。初学者不要把这个差距理解为参数量效应，关键是零初始化与位置门控带来的初始恒等与隔离作用。

第二是渐进式预训练对比 3 阶段基线，固定在预训练后比较文本基准。基线不用适配器且缺少冻结对齐与截断保护，报告显示在金融、通用知识、数学、推理与代码生成上全面落后，而干扰感知方案保留了更多继承的文本能力。这支持先对齐输入、再学理解、再隔离学生成、最后小步联合的顺序是有信息量的。但需注意这组对比同时改变了适配器与训练阶段，属于复合干预，不能把全部增益归因于某一步；原文也未报告逐阶段移除的细粒度曲线，待验证的是截断时机与权重切换各自的边际贡献。

失败条件与边界同样重要。报告指出残差损失沿深度求和会使声学项量级远大于编号级项，若在预测器随机初始化时就端到端放开，主干表示会被重塑；解除截断后若不把权重从 1.0 降到 0.1，声学项会主导主干更新。这些是已验证的对照所支持的操作禁区。未评测的边界包括极长混合场景的稳定性、噪声与个人信息过滤后的长尾音效覆盖，以及强化学习中描述模型与裁判模型的误差传播，这些在复现时应单独记录。

### 哪些结论是直接报告，哪些还只是可能？

直接报告的是：在给定评测协议下，适配器版本在音频理解类指标上高于无适配器版本；渐进式预训练在文本基准上高于 3 阶段基线；语音合成在中文人声相似度池内等级分与胜率领先；声音设计在客观平均分与人工偏好上领先。这些是报告显示的范围限定结论，动词用显示与达到。

有限解释的是：把文本能力保留归因于冻结对齐、一半文本回放与梯度截断的组合，把多码本整合归因于零初始化残差适配，把跨域生成归因于共享语义声学表示与时间深度分解。这些解释有对照支持，但属于支持而非因果证明，因为对照多为复合干预且未做全因子分解。

可能与待验证的是：离散自回归是否在所有音频域都可替代连续渲染，强化学习中的 4 次打分均值与指数惩罚是否在新任务上稳定，以及长上下文冷却到约 44 分钟覆盖是否足以保证长篇连贯。原文未测量误判率、端到端延迟与训练成本的完整分解，因此不应承诺这些量得到改善。训练资源、推理开销、输出帧率与实际延迟应分别讨论，总体趋势不等于每组每步都成立。

### 要复现先固定什么，再跑什么，最低核对清单是什么？

先固定表示：帧率 12.5 赫兹、每帧十六码本、每码本 2048 条目、重建 24 kHz，以及首码本进入主词表末尾连续段的映射。核对分词器 2 阶段流程：先大规模均衡训练再冻结编码器与量化器只精调解码器，并保留 0.5 量化器丢弃与语义蒸馏，使早期码本集中可规划信息。任何改变码本数或帧率的尝试都会改变序列长度与损失量级，应单独记录。

再固定训练顺序：第一阶段冻结主干只训适配，第二阶段一半文本回放且不监督音频目标，第 3 阶段按 3 比 1 比二混合并截断预测器条件、残差权重取 1.0，第 4 阶段解除截断、扩展到三万二千上下文、权重降到 0.1。监督微调延续联合配置，强化学习每指令采样十六候选、4 次打分取均值、组内标准差过小组丢弃。超参数至少保留各阶段批量、学习率调度、新模块 10 倍乘子与散度系数，缺失的细节在报告中应标为缺项而不猜。

评测复现时，语音合成按每对手 100 次、允许平局、1500 次总量重跑等级分；声音设计按两千文本乘 3 条件共 6000 条重跑客观一致性，人工偏好按盲测 490 次重跑。官方样本页当前可用，可先听歌声、音乐、音效与复合场景的定性效果，再回头核对数字。代码与权重在原文中未给出可下载声明，不应写成已开源，只能说方法描述已具体到可按阶段重建。

### 何时值得尝试这种离散统一路线，还需补哪项验证？

当任务需要同一指令同时安排多角色、多语言风格与音效音乐的时间关系，且希望复用大语言模型的交织上下文与指令格式时，这种路线值得尝试。角色、导演、剧本 3 段式把身份、场景与时间轴分开，适合对话、戏剧与复合声景；时间深度分解适合已拥有预训练语言模型、但不希望其直接承受全部残差声学损失的团队；零初始化适配适合多码本嵌入与文本嵌入分布不一致的接入场景。

当目标是最低延迟并行渲染或极高保真单域音乐时，应先对比连续扩散路线在相同算力与数据下的表现，不把类别差异当同条件胜负。还需补的验证包括：逐阶段移除的边际增益、客观裁判与人工偏好的误差分析、长尾音效与多说话人混合的覆盖测试，以及推理步数、显存与实时率的实测分解。

一句话收束：把规划留给大模型、把补全留给小预测器、把对齐留给零初始化适配、把合并留到最后小步进行，是这份报告可复述的操作主线；所有胜率与分数都只在原文协议内成立，换池、换裁判或换聚合口径都需要重测。

<details>
<summary>📎 论文与评分元数据</summary>

排名：前50% | 文档类型：模型报告 | [arXiv 原文](https://arxiv.org/abs/2609.12945)

</details>

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。

- 评分规则：type-aware-v1

- 评分模型：muse-spark-1.3-contributor

- 评分请求协议：openai_responses

---

[← 返回 2026-09-14 语音/音乐/音频论文速递](/audio-paper-digest-blog/posts/2026-09-14/)
