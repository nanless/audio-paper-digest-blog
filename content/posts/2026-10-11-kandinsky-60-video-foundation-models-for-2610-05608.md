---
title: "Kandinsky 6.0 Video: Foundation Models for Synchronized Video and Audio Generation"
date: 2026-10-11
draft: false
tags: [音视频生成, 扩散模型, 音视频, 模型权重, 开源工具]
categories: [论文速递]
description: "论文要解决文本生成 5 秒有声视频时的语义与时间对齐问题，采用视频流加音频流的双流扩散结构加联合训练，在语音质量与同步指标上给出证据，代价是两阶段蒸馏与超分带来的额外训练和推理开销。"
hiddenInHomeList: true
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_arxiv_id: "2610.05608"
paper_digest_workbench_contract: "researcher-workbench-v1"
paper_digest_reader_title: "同步生成有声视频：Kandinsky 6.0 Video 如何让画面和声音对齐"
paper_digest_original_title: "Kandinsky 6.0 Video: Foundation Models for Synchronized Video and Audio Generation"
paper_digest_arxiv_version: 1
paper_digest_arxiv_versioned_id: "2610.05608v1"
paper_digest_arxiv_abs_url: "https://arxiv.org/abs/2610.05608v1"
paper_digest_arxiv_pdf_url: "https://arxiv.org/pdf/2610.05608v1.pdf"
paper_digest_primary_task: "音视频生成"
paper_digest_tags_contract: "paper-tag-flat-tags-v2"
paper_digest_tags_selection_contract: "paper-tag-selection-v2"
paper_digest_tags_registry_version: "paper-tag-catalog-v2"
paper_digest_tags_registry_sha256: "0a0847314ab2059d95efac33376414498e598a1f02a1486869bee0efc481d1f7"
paper_digest_tags_concepts: [{"facet":"task","id":"task.av-generation","label":"音视频生成"},{"facet":"method","id":"method.diffusion","label":"扩散模型"},{"facet":"signal","id":"signal.audiovisual","label":"音视频"},{"facet":"artifact","id":"artifact.model-weights","label":"模型权重"},{"facet":"artifact","id":"artifact.open-source-tool","label":"开源工具"}]
paper_digest_primary_method: "扩散模型"
paper_digest_score: 6.5
paper_digest_rank_bucket: "前50%"
paper_digest_document_type: "模型报告"
paper_digest_one_sentence: "论文要解决文本生成 5 秒有声视频时的语义与时间对齐问题，采用视频流加音频流的双流扩散结构加联合训练，在语音质量与同步指标上给出证据，代价是两阶段蒸馏与超分带来的额外训练和推理开销。"
paper_digest_authors: [{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Team Kandinsky"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Julia Agafonova"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Bulat Akhmatov"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Mikhail Aksyutin"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Grigorii Alekseenko"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Anastasia Aliaskina"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Olga Androsova"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Vladimir Arkhipkin"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Anna Averchenkova"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Alexander Belykh"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Serafima Bocharova"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Sofiya Bogakovskaya"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Anton Bukashkin"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Mark Bulygin"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Kirill Buzygin"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Irina Cheremnykh"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Kirill Chernyshev"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Mikhail Chernyshov"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Vladimir Chernyy"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"David Chikovani"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Georgy Daniltsev"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Denis Dimitrov"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Anna Dmitrienko"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Vladimir Dokholyan"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Sergey Emelyanov"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Dmitry Ermilov"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Georgii Fedorov"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Polina Gavrilova"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Nikolai Gerasimenko"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Aleksandr Gordeev"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Andrey Inozemtsev"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Andrei Ivaniuta"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Alexander Ivanov"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Mikhail Karaev"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Anastasiia Kargapoltseva"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Ivan Kirillov"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Nikita Kiselev"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Valeria Kobenko"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Yury Kolabushin"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Denis Koposov"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Anatoly Korobov"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Vladimir Korviakov"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Kirill Kozlov"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Denis Krzhivokolskiy"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Konstantin Kuklev"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Alexander Kunitsyn"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Sergey Kuzin"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Vladislav Lakhtionov"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Alexey Letunovskiy"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Maxim Litvinov"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Alexander Lyulkov"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Georgy Makarov"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Kirill Malakhov"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Egor Malykh"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Mikhail Mamaev"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Dmitrii Mikhailov"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Polina Mikhailova"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Ivan Mikheev"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Elizaveta Muromtseva"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Nikolai Nazarkin"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Tatiana Nikulina"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Lev Novitskiy"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Stanislav Onuchin"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Nikita Osterov"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Denis Parkhomenko"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Anatoliy Parpara"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Vladimir Polovnikov"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Konstantin Reznikov"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Azat Saginbaev"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Nikita Samsonov"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Alexander Sentsov"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Nikita Shaimov"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Artem Sherstyuk"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Andrey Shutkin"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Egor Silvestrov"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Bulat Suleimanov"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Matvey Suprunov"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Sergey Taranov"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Irina Tolstykh"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Tatiana Trofimuk"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Ilya Trushkin"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Aleksandra Tsybina"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Olga Varlashina"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Viacheslav Vasilev"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Ilya Vasiliev"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Eugeny Vilisov"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Sergey Yakubson"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Konstantin Zakharov"}]
paper_digest_abstract_sha256: "fa8d25d236254acf3c9144e06c053056726f8e5985bc7f2cc2013bf012ef0d19"
paper_digest_sidecars: {"citation.bib":{"sha256":"efda2290bed34703ef586c031426139e8132bf8b2a8c8caed2e300518611ab1e","url":"/audio-paper-digest-blog/data/papers/2026-10-11/2610-05608/citation.bib"},"citation.json":{"sha256":"01b2604b333bd3802b2e32b40669c4b4a18b33a7d3fdfda437b7ade471290e65","url":"/audio-paper-digest-blog/data/papers/2026-10-11/2610-05608/citation.json"},"citation.ris":{"sha256":"ff99305a9e3ac7a3cbe11d4d7509044a2afdcd3a7d93f9057e6b188efee321a0","url":"/audio-paper-digest-blog/data/papers/2026-10-11/2610-05608/citation.ris"},"rethink-context.json":{"contract":"paper-research-context-v2","sha256":"53aaf494cb686faaebffedb72a46be422cc2deccc13c349485aa56c6befb8cf7","url":"/audio-paper-digest-blog/data/papers/2026-10-11/2610-05608/rethink-context.json"}}
paper_digest_api_reader_contract: "beginner-researcher-v3"
paper_digest_api_reader_article_sha256: "ca11050da270947de736e5804644e6d61b535249ff2803ef5d03064f1d1331e5"
paper_digest_api_reader_plan_sha256: "dc9a98aa6db7cf81572b3fa6d883174eee016eb7eaaaf0641389080b36570d90"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings-v4"
paper_digest_api_reader_source_bindings_sha256: "4c4bf049046ccac184f912bf1548a6ad1129787c66aa0f2210513cf1b7a4c40d"
paper_digest_api_reader_source_table_count: 4
paper_digest_api_reader_source_formula_count: 5
paper_digest_api_reader_structured_artifacts_sha256: "1961c226f699cb5618515b1889a247d901841e2bbd8ff65b3b85ac09daaf4e82"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity-v1"
paper_digest_api_reader_author_identity_sha256: "aacc699ca2368dbba737e305a966b7dd0b64afca1b12c1807372ddc1dc208205"
paper_digest_api_reader_author_count: 88
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity-v1"
paper_digest_api_reader_resource_identity_sha256: "7c3a5922d47a56dceb188812b8c11be695fb99ddcd4dc3909c468076eb441f2d"
paper_digest_api_reader_resource_count: 4
paper_digest_api_reader_figure_persistence: "ephemeral-no-persisted-figure-assets-v1"
paper_digest_api_reader_decision_projection: "api-reader-decision-projection-v2"
---

# 📄 同步生成有声视频：Kandinsky 6.0 Video 如何让画面和声音对齐

> 英文题目：*[Kandinsky 6.0 Video: Foundation Models for Synchronized Video and Audio Generation](https://arxiv.org/abs/2610.05608v1)*

> 标签：#音视频生成 | #扩散模型 | #音视频 | #模型权重 | #开源工具
>
> 评分：**6.5/10** | 创新 1.2/2 | 技术严谨 1/1.5 | 实验充分 1.1/1.5 | 清晰度 0.7/1 | 影响力 1/1.5 | 开源 0/1.5 | 可复现 0.3/0.5 | 工程/实践 1.2/1.5


## 👥 作者与机构

- Team Kandinsky：机构信息未在 arXiv HTML 中可靠披露
- Julia Agafonova：机构信息未在 arXiv HTML 中可靠披露
- Bulat Akhmatov：机构信息未在 arXiv HTML 中可靠披露
- Mikhail Aksyutin：机构信息未在 arXiv HTML 中可靠披露
- Grigorii Alekseenko：机构信息未在 arXiv HTML 中可靠披露
- Anastasia Aliaskina：机构信息未在 arXiv HTML 中可靠披露
- Olga Androsova：机构信息未在 arXiv HTML 中可靠披露
- Vladimir Arkhipkin：机构信息未在 arXiv HTML 中可靠披露
- Anna Averchenkova：机构信息未在 arXiv HTML 中可靠披露
- Alexander Belykh：机构信息未在 arXiv HTML 中可靠披露
- Serafima Bocharova：机构信息未在 arXiv HTML 中可靠披露
- Sofiya Bogakovskaya：机构信息未在 arXiv HTML 中可靠披露
- Anton Bukashkin：机构信息未在 arXiv HTML 中可靠披露
- Mark Bulygin：机构信息未在 arXiv HTML 中可靠披露
- Kirill Buzygin：机构信息未在 arXiv HTML 中可靠披露
- Irina Cheremnykh：机构信息未在 arXiv HTML 中可靠披露
- Kirill Chernyshev：机构信息未在 arXiv HTML 中可靠披露
- Mikhail Chernyshov：机构信息未在 arXiv HTML 中可靠披露
- Vladimir Chernyy：机构信息未在 arXiv HTML 中可靠披露
- David Chikovani：机构信息未在 arXiv HTML 中可靠披露
- Georgy Daniltsev：机构信息未在 arXiv HTML 中可靠披露
- Denis Dimitrov：机构信息未在 arXiv HTML 中可靠披露
- Anna Dmitrienko：机构信息未在 arXiv HTML 中可靠披露
- Vladimir Dokholyan：机构信息未在 arXiv HTML 中可靠披露
- Sergey Emelyanov：机构信息未在 arXiv HTML 中可靠披露
- Dmitry Ermilov：机构信息未在 arXiv HTML 中可靠披露
- Georgii Fedorov：机构信息未在 arXiv HTML 中可靠披露
- Polina Gavrilova：机构信息未在 arXiv HTML 中可靠披露
- Nikolai Gerasimenko：机构信息未在 arXiv HTML 中可靠披露
- Aleksandr Gordeev：机构信息未在 arXiv HTML 中可靠披露
- Andrey Inozemtsev：机构信息未在 arXiv HTML 中可靠披露
- Andrei Ivaniuta：机构信息未在 arXiv HTML 中可靠披露
- Alexander Ivanov：机构信息未在 arXiv HTML 中可靠披露
- Mikhail Karaev：机构信息未在 arXiv HTML 中可靠披露
- Anastasiia Kargapoltseva：机构信息未在 arXiv HTML 中可靠披露
- Ivan Kirillov：机构信息未在 arXiv HTML 中可靠披露
- Nikita Kiselev：机构信息未在 arXiv HTML 中可靠披露
- Valeria Kobenko：机构信息未在 arXiv HTML 中可靠披露
- Yury Kolabushin：机构信息未在 arXiv HTML 中可靠披露
- Denis Koposov：机构信息未在 arXiv HTML 中可靠披露
- Anatoly Korobov：机构信息未在 arXiv HTML 中可靠披露
- Vladimir Korviakov：机构信息未在 arXiv HTML 中可靠披露
- Kirill Kozlov：机构信息未在 arXiv HTML 中可靠披露
- Denis Krzhivokolskiy：机构信息未在 arXiv HTML 中可靠披露
- Konstantin Kuklev：机构信息未在 arXiv HTML 中可靠披露
- Alexander Kunitsyn：机构信息未在 arXiv HTML 中可靠披露
- Sergey Kuzin：机构信息未在 arXiv HTML 中可靠披露
- Vladislav Lakhtionov：机构信息未在 arXiv HTML 中可靠披露
- Alexey Letunovskiy：机构信息未在 arXiv HTML 中可靠披露
- Maxim Litvinov：机构信息未在 arXiv HTML 中可靠披露
- Alexander Lyulkov：机构信息未在 arXiv HTML 中可靠披露
- Georgy Makarov：机构信息未在 arXiv HTML 中可靠披露
- Kirill Malakhov：机构信息未在 arXiv HTML 中可靠披露
- Egor Malykh：机构信息未在 arXiv HTML 中可靠披露
- Mikhail Mamaev：机构信息未在 arXiv HTML 中可靠披露
- Dmitrii Mikhailov：机构信息未在 arXiv HTML 中可靠披露
- Polina Mikhailova：机构信息未在 arXiv HTML 中可靠披露
- Ivan Mikheev：机构信息未在 arXiv HTML 中可靠披露
- Elizaveta Muromtseva：机构信息未在 arXiv HTML 中可靠披露
- Nikolai Nazarkin：机构信息未在 arXiv HTML 中可靠披露
- Tatiana Nikulina：机构信息未在 arXiv HTML 中可靠披露
- Lev Novitskiy：机构信息未在 arXiv HTML 中可靠披露
- Stanislav Onuchin：机构信息未在 arXiv HTML 中可靠披露
- Nikita Osterov：机构信息未在 arXiv HTML 中可靠披露
- Denis Parkhomenko：机构信息未在 arXiv HTML 中可靠披露
- Anatoliy Parpara：机构信息未在 arXiv HTML 中可靠披露
- Vladimir Polovnikov：机构信息未在 arXiv HTML 中可靠披露
- Konstantin Reznikov：机构信息未在 arXiv HTML 中可靠披露
- Azat Saginbaev：机构信息未在 arXiv HTML 中可靠披露
- Nikita Samsonov：机构信息未在 arXiv HTML 中可靠披露
- Alexander Sentsov：机构信息未在 arXiv HTML 中可靠披露
- Nikita Shaimov：机构信息未在 arXiv HTML 中可靠披露
- Artem Sherstyuk：机构信息未在 arXiv HTML 中可靠披露
- Andrey Shutkin：机构信息未在 arXiv HTML 中可靠披露
- Egor Silvestrov：机构信息未在 arXiv HTML 中可靠披露
- Bulat Suleimanov：机构信息未在 arXiv HTML 中可靠披露
- Matvey Suprunov：机构信息未在 arXiv HTML 中可靠披露
- Sergey Taranov：机构信息未在 arXiv HTML 中可靠披露
- Irina Tolstykh：机构信息未在 arXiv HTML 中可靠披露
- Tatiana Trofimuk：机构信息未在 arXiv HTML 中可靠披露
- Ilya Trushkin：机构信息未在 arXiv HTML 中可靠披露
- Aleksandra Tsybina：机构信息未在 arXiv HTML 中可靠披露
- Olga Varlashina：机构信息未在 arXiv HTML 中可靠披露
- Viacheslav Vasilev：机构信息未在 arXiv HTML 中可靠披露
- Ilya Vasiliev：机构信息未在 arXiv HTML 中可靠披露
- Eugeny Vilisov：机构信息未在 arXiv HTML 中可靠披露
- Sergey Yakubson：机构信息未在 arXiv HTML 中可靠披露
- Konstantin Zakharov：机构信息未在 arXiv HTML 中可靠披露

## 📌 核心摘要

本文解决的问题是从文本或首帧图像生成5秒带44 kHz同步音频的视频，要求语义、时间与情感一致，包含说话人口型同步，该系列含30亿参数Lite版和290亿参数Pro版。输入文本经Qwen2.5-VL-7B-Instruct和CLIP ViT-L/14编码，视频与音频分别经Hunyuan VAE和MMAudio自编码器压缩到隐空间，再由双流CrossDiT去噪生成。视频流继承Kandinsky 5.0预训练权重，音频流先在音频字幕数据上单独训练，再通过新初始化的块级双向跨注意力做联合训练，保留单模态保真度的同时学习对齐。随后11个领域分别监督微调并做均匀权重平均的模型汤，在冻结基座上用LoRA做多目标强化学习，最后用\(\pi\)-Flow与对抗精炼把采样压缩到10次函数求值。与已有联合音视频模型的区别在于连续预训练加领域汤加模态内优势路由的强化学习，以及隐空间超分器的分离设计。在VABench上Pro版唇同步得分为2.072，高于LTX 2.5的1.567，数值越大越好；强化学习使Pro版在内部语音集的词错误率从0.235降到0.124。超分模型在4块GPU上训练约两天，结论适用于5秒、24 fps、标清生成加超分到全高清的范围，更长时长与更高原生分辨率尚未验证。

## 🔗 开源与复现资源

- 第三方资源：<https://github.com/kandinskylab/kandinsky-6> — 链接可访问（HTTP 200）

- 第三方资源：<https://kandinskylab.ai> — 链接可访问（HTTP 200）

- 第三方资源：<https://huggingface.co/collections/kandinskylab/kandinsky-60-diffusers> — 暂时无法访问

可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 为什么有声视频比无声视频难做

刚接触语音或音频生成的同学可以先把任务想成同时交两份作业。输入是一段文字，有时再加一张起始图，输出是一段 5 秒的视频加一段 44 kHz 的同步音频，包含说话人口型、动作音效和环境声。论文要保留的信息有 3 层：语义一致，比如文字说小狗侦探说话，画面和声音都要出现对应内容；时间一致，比如锤子敲到木板那 1 帧才出现敲击声；情感与场景一致，比如医院里的小女孩声音应该是清晰甜美的童声。

只做画面或只做声音时，各自的扩散模型已经比较成熟，但把两者放在一个模型里联合生成，任何一侧的时间漂移都会被听出来或看出来。开放模型此前在时长、分辨率和同步精度上落后于闭源系统，这正是本文要追赶的具体问题。基础生成先在标清分辨率完成，再靠单独的超分模型升到全高清 1920×1080，全片最长 121 帧、24 fps、约 5 秒。

### 已有路线是如何处理画面与声音关系的

按原文的梳理，图像与视频生成走的是潜扩散加变换器主干的路线，Kandinsky 5.0 用的 CrossDiT 加稀疏注意力就是其中之一。联合音视频生成则有几种不同设计：基于流的时序对齐、先验分层的时空同步、3 模态统一变换器，以及双流加跨模态融合。论文把自己放在双流这一支，类似 Ovi 和 LTX-2，但做法不同在于视频流继承 Kandinsky 5.0 的预训练权重，音频流从零开始训练，再用块级别的双向交叉注意力连接。

后训练方面，原文提到监督微调常用的模型汤平均权重，以及把 OmniNFT 这类强化学习方法迁移到音视频联合模型；少步采样方面，比较了分布匹配、一致性模型和策略模仿蒸馏，最终选择 π-Flow 做轨迹压缩。超分方面，常见做法是在合成退化上训练真实感超分，扩散先验再减少采样步数，本文的超分放在潜空间并拆成确定性放大加无文本扩散两部分。比较时要注意输入目标是否相同，例如纯文本到视频与文本到音视频的评测条件并不等价。

### 论文要解决的输入输出与必须对齐的信息

论文定义了两种运行模式。文本到音视频模式下，模型读入文字提示，提示按原文格式分成画面描述和音频描述，语音原文放在`<S>`...`<E>` 标记内，音频描述放在`<AUDCAP>`...`<ENDAUDCAP>` 标记内，输出同步的视频潜变量和音频潜变量，再经各自的解码器得到像素视频和波形。图像到音视频模式下，再读入一张参考帧，要求后续帧保持人物身份、衣着、场景布局和风格，同时按文字继续动作并发声。必须保留的信息包括说话内容不能念错、音效种类不能张冠李戴、发声时刻与可见动作的延迟要小。

论文用 VABench 覆盖音频质量、跨模态对齐、同步、真实感和表现力，并单独计算语音子集的词错误率。需要提醒的是，词错误率在不同小节用了不同识别器，条件不同不能直接对比数值大小。

### 整体流程：从文字到标清成片再到全高清

对一个样本而言，文字先经 Qwen2.5-VL-7B-Instruct 和 CLIP ViT-L/14 编码，视频噪声和音频噪声分别进入视频流和音频流。每个变换器块内先做各自的自注意力，再做对文本的交叉注意力，再做跨模态注意力，最后过前馈层，多块堆叠后预测流匹配的速度场，去噪得到干净潜变量。基础模型输出标清尺寸，例如横屏 864×480，随后整体送入超分管线：先在潜空间分块放大，再用超分扩散模型去模糊补细节，最后拼块解码并缩放到目标全高清尺寸。

训练顺序是先分开预训练两条流，再联合预训练，然后做分领域监督微调并平均权重，再做强化学习，最后蒸馏到少步采样。下面的示例拼贴展示了模型实际生成的内容类型，包含乐器演奏、人物说话和动作场景，有助于建立对输出多样性的直观印象。

以下导读帮助理解总览拼贴中各示例与音频视频同步主题的对应关系，重点看发声主体与场景标注的搭配。

> **看图路径：** 1. 先看拼贴中央大字确认这是生成示例总览而非结构图；2. 注意鼓手与吉他等发声动作与乐器同时出现的画面；3. 观察右下角红色汽车与 FHD 标记区分的基础与超分效果

[![原论文 Figure 1：title](https://arxiv.org/html/2610.05608v1/images/title.png)](https://arxiv.org/html/2610.05608v1/images/title.png)

*论文图 1。原论文 Figure 1：“title”。*

这张拼贴并非网络结构图，而是生成效果总览。中间大字标明 Kandinsky 6.0 Video，周围是人物、动物、乐器和奇幻场景。左上第二格能看到鼓手敲击水花飞溅的瞬间，这类画面需要配上敲击时刻的瞬态声；左下小提琴和中下黑胶唱片则对应持续性音乐。右下红色汽车一半在水下的对比展示带有 FHD 标记，提示超分前后的细节差异。静态图听不到声音，同步质量需要结合原文波形图与人工评测来判断。

**文本到音视频生成 × 图像到音视频生成：** 文本到音视频生成指只给文字就同时生成画面和声音，图像到音视频生成指再给一张起始帧作为画面约束，前者考验从零构图，后者考验保持输入人物与场景并向后延展，论文用同一双流主干加不同的输入拼接方式把两种任务统一起来。

### 双流块里谁向谁看：跨模态注意力如何工作

每个块有上下两条通路。上面是视频通路，下面是音频通路。视频自注意力只看视频 token 之间的时空关系，音频自注意力只看音频 token 之间的时间关系。文本交叉注意力让视频 token 去查画面相关的文字嵌入，让音频 token 去查声音相关的文字嵌入。关键在跨模态注意力：V2A 表示视频作为查询去查音频的键和值，A2V 表示音频作为查询去查视频的键和值。

打个比方，就像两个人各写各的作业但允许互相瞥一眼对方的草稿，视频生成敲锤画面时可以参考音频侧是否正好有敲击能量，音频生成语音时可以参考视频侧嘴唇是否张开。位置编码上视频用 3 维旋转位置编码，音频用 1 维旋转位置编码，视频帧序号还会按相对 24 fps 归一化，以适应 23 到 25 fps 的输入差异。

**视频流 × 音频流：** 视频流负责画面潜变量的去噪生成，音频流负责声音潜变量的去噪生成，二者各有自注意力与文本交叉注意力，因为单靠文本无法保证敲击声落在接触帧，才用双向跨模态注意力让双方互相读取对方状态，组合后模型能同时保持单模态质量并学习时间对应。

下图是单块的简化示意图，先看左右两侧的输入输出再看中间四列模块，有助于复述 1 次前向过程。

> **看图路径：** 1. 沿左侧视频音频文本三路输入向右追踪主路径；2. 对比上方 V2A 与下方 A2V 两处跨模态注意的查询与键值来源；3. 确认每条流都先做自注意力再做文本交叉注意力最后才跨模态交互

[![原论文 Figure 1：Simplified scheme of a single Kandinsky 6.0 Video transformer block.](https://arxiv.org/html/2610.05608v1/images/CrossDiTFusedBlock.png)](https://arxiv.org/html/2610.05608v1/images/CrossDiTFusedBlock.png)

*论文图 2。原论文 Figure 1:：“Simplified scheme of a single Kandinsky 6.0 Video transformer block.”。*

图中左侧有视频、文本、音频 3 路嵌入，中间上排是视频自注意力、文本到视频交叉注意力、视频到音频交叉注意力、前馈层，下排对应音频侧。箭头上标的 q 代表查询，k v 代表键和值，可以看到跨模态层的键值来自另一模态。右侧输出仍是两路嵌入，说明该块同时更新画面和声音表示。深浅绿色区分了视频与音频通路，但计算模式是对称的。

超分模型的输入构造遵循加噪的流匹配形式，先把退化低质量潜变量混入高斯噪声，噪声比例由固定系数控制。

\[\tilde{z}_{LQ}=\sqrt{1-s^{2}}\,z_{LQ}+s\,\varepsilon,\qquad\varepsilon\sim\mathcal{N}(0,I),\qquad s=0.7.\]

上式中 z_LQ 是退化低质量潜变量，epsilon 是标准高斯噪声，s 取 0.7，得到训练用的起点。模型预测的流匹配速度目标是带噪低质量潜变量指向高质量潜变量的方向。

\[L_{\mathrm{flow}}=\mathrm{MSE}\left(v_{\theta}(x_{t},t,a,m),\,\tilde{z}_{LQ}-z_{HQ}\right).\]

上式中 v_theta 是模型预测的速度，a 和 m 是首帧高质量锚点及其掩码，训练时以均方误差逼近真实位移。推理时锚点和掩码置零，模型在无锚条件下工作。

### 超分如何把标清变成全高清：放大与修细节分开

超分要解决的是基础模型只给标清、直接双线性放大又会糊的问题。论文把任务拆成两步。第一步由潜在放大器在 K-VAE 潜空间直接把低分辨率网格放大，例如横屏把 8×12 放大到 32×48，它沿用了 K-VAE 解码器的通道宽度和残差块结构，但输出仍是 64 通道潜变量且保持时间分辨率不变，归一化层还受输入低质量潜变量调制。第二步由无文本的超分扩散模型去掉退化、补出纹理，它把带噪潜变量、首帧高质量锚点和二值掩码在通道维拼接后输入，块数 32、宽度 1792，不用任何文本编码器。

推理时整段视频先用 K-VAE 编码 1 次，再切成空间重叠块逐块放大去噪解码，最后用汉宁窗加权拼接，避免块边界接缝。全高清走 2.25 倍路线：先在像素域双线性放大 1.125 倍，再走 2 倍路线，最后下采样到 1920×1080。

**潜在放大器 × 超分扩散变换器：** 潜在放大器是确定性卷积网络，只把低分辨率潜变量放大到工作分辨率网格，超分扩散变换器是无文本的扩散模型，负责去掉压缩与生成带来的模糊和伪影，前者解决尺寸对齐与推理速度，后者解决细节恢复，二者串联才得到全高清输出。

下面比较两种模型规模下视频流、音频流与跨注意力层的参数分配，有助于理解计算主要花在哪里。

| 模型 | 总参数 | 视频流 | 音频流 | 跨注意力层 |
| --- | --- | --- | --- | --- |
| Lite | 3B | 2B | 0.6B | 0.4B |
| Pro | 29B | 19B | 5B | 5B |

上表说明参数主要集中在视频流，Pro 的跨注意力层明显增大，意味着联合对齐部分的容量随规模显著增加。Lite 总计 3B、Pro 总计 29B 的结论只在该双流主干范围内成立，不包含超分模型与文本编码器。跨层参数大也意味着联合训练与蒸馏的显存与时间成本更高，这是为同步能力付出的直接代价。

### 分开预训练再联合：为什么不一开始就一起训

如果一开始就把随机初始化的音频流和已训练好的视频流硬连在一起，音频噪声会干扰画面表示。论文采用持续预训练：视频流从 Kandinsky 5.0 对应尺寸的标清 checkpoint 出发继续训练，音频流从正态分布随机初始化先在 40,000,000 条纯音频上训练，再在音视频联合标注上过渡，最后 2 流通过新初始化的交叉注意力层连起来在 700 万音视频片段上联合训练。联合训练时对视频和音频独立采样扩散时间，以便支持音频到视频和视频到音频的单向条件生成。

最后阶段 25% 样本走图像到音视频模式，参考帧潜变量沿时间轴拼接到视频潜变量后，并用二值掩码和可学习的 token 角色嵌入区分条件与待生成位置。消融显示掩码与时间位置编码是主要机制，角色嵌入作用较弱且部分冗余。训练流程如下图所示，从 2 塔独立训练汇入融合训练，顺序不可颠倒。

以下导读帮助按从左到右的顺序阅读训练管线，区分独立预训练与融合训练的边界。

> **看图路径：** 1. 先看左右两条独立预训练分支的起点与数据差异；2. 再看中间融合后从联合预训练到蒸馏的先后顺序；3. 确认模型汤监督微调位于强化学习之前

[![原论文 Figure 5：Training pipeline of Kandinsky 6.0 Video.](https://arxiv.org/html/2610.05608v1/images/Training_pipeline.png)](https://arxiv.org/html/2610.05608v1/images/Training_pipeline.png)

*论文图 6。原论文 Figure 5:：“Training pipeline of Kandinsky 6.0 Video.”。*

图中左上是视频塔从 Kandinsky 5.0 出发再用音视频标注继续预训练，左下是音频塔先用纯音频标注再用音视频标注预训练，中部汇合后依次是联合预训练、混合图像条件预训练、模型汤监督微调、强化学习后训练和蒸馏。颜色由浅到深表示阶段推进，箭头表明后 1 阶段依赖前 1 阶段的 checkpoint。

下面是联合预训练阶段 2 档模型的训练量对比，重点看步数与图像条件比例是否一致。

| 阶段 | Lite 设置 | Pro 设置 | 帧与帧率 | 图像条件 |
| --- | --- | --- | --- | --- |
| 联合 T2AV | 57.5k 步，批量 256 | 46k 步加 3k 步共 49k 步 | 至多 121 帧 23-25 帧每秒至多 5 秒 | Lite 与 Pro 采样略有差异 |
| 混合 I2AV | 额外 4k 步 | 额外 5k 步 | 同上 | 25% 样本为图像条件 |

上表说明 Pro 联合步数并非简单更多，而是分 2 段学习率完成，混合阶段都固定 25% 图像条件。步数多意味着更多算力，但也带来更好的同步数据覆盖；代价是长序列视频加音频的联合前向显存更大，需用 bfloat16 训练。该表只反映预训练阶段，不包含监督微调与强化学习的步数。

**轨迹蒸馏 × 对抗精炼：** 轨迹蒸馏指让少步学生模仿教师在采样轨迹上的局部速度预测，解决采样步数压缩后的语义与运动保持，对抗精炼指用真实数据与判别器恢复粗离散化丢失的高频纹理，前者保结构多样性，后者补感知清晰度，2 步互补才做到 10 次函数求值。

**监督微调 × 强化学习后训练：** 监督微调是在人工筛选的高质量音视频片段上继续用流匹配损失训练，强化学习后训练是在线生成多组样本再用视频美学与语音识别等多目标奖励做偏好优化，前者先把画面与同步基线拉高，后者在该基线上针对语音可懂度与同步做定向修正。

### 微调、强化学习与蒸馏各自改什么

监督微调分 2 个阶段、11 个领域各自独立训练，最后均匀平均权重得到模型汤。第 1 阶段只优化视频损失并冻结音频流与融合模块，目标是提升画面质量，7000 步后停止以免过拟合；第二阶段解冻全部模块，用视频损失权重 0.85、音频损失 0.15 再加面部区域视频损失权重 1.0，重点改唇形同步，5000 步后平均。强化学习改编自 OmniNFT，只在纯文本到音视频模式在线训练，用 LoRA 更新 2 条流的注意力与前馈线性层，Pro 约 199M、Lite 约 47M。奖励分视频、音频、同步 3 组共 8 项，同步项同时进入视频和音频优势。

每组同提示生成 K 个不同种子样本，组内中心化、批内标准差归一化，再钳制到负 5 到 5 并重缩放到 0 到 1 的 token 奖励。训练时把干净样本重新加噪，同时过当前 LoRA、旧 LoRA 和冻结基座，用奖励加权正负预测误差并加 KL 锚定。蒸馏先用 π-Flow 把教师轨迹压到 10 次函数求值，再用 Sim-LADD 从学生自身回滚状态做对抗精炼，恢复高频细节。

以下导读帮助理解奖励阶段如何从多个奖励模型汇总成按模态分流的优势值。

> **看图路径：** 1. 从左侧同提示多种子生成多版本视频出发向右看奖励流程；2. 查看中间奖励模型表格区分视频音频与同步三组类型；3. 注意右侧优势值如何按模态分流再广播到 token

[![原论文 Figure 7：Reward phase of RL post-training. For each prompt, a group of videos with audio is generated with…](https://arxiv.org/html/2610.05608v1/images/RL_reward.png)](https://arxiv.org/html/2610.05608v1/images/RL_reward.png)

*论文图 8。原论文 Figure 7:：“Reward phase of RL post-training. For each prompt, a group of videos with audio is generated with different random seeds and scored by eight reward terms.”。*

图中左侧是同提示多种子生成的多个带声视频，中间表格列出 8 个奖励模型及其类型与范围，右侧先归一化再按分支加权求和得到视频与音频优势，最后广播到视频网格与音频 token 数并压缩到 0 到 1。白猫示例只是示意多样本比较，奖励数值范围因模型而异，同步类奖励会同时影响 2 路。

策略更新把奖励作为正负预测误差的插值权重，区域权重来自音频到视频注意力对脸手乐器的关注。

\[\text{policy\_per\_token}=r_{\text{token}}\cdot\text{pos\_per\_tok}+(1-r_{\text{token}})\cdot\text{neg\_per\_tok}.\]

上式中 r_token 越大越信任当前预测，越小越信任旧预测的镜像方向，正负误差都是对干净样本的均方误差。聚合时按注意力权重加权平均。

\[\text{policy}=\frac{\sum_{i}\text{policy\_per\_token}_{i}\cdot\text{attn\_w}_{i}}{\sum_{i}\text{attn\_w}_{i}},\]

上式中 attn_w 是区域重加权，视频块被音频 token 关注越多权重越高但不超过 1.5 倍。最终损失再加对冻结基座的 KL 约束。

\[\text{loss}=\mathrm{mean}\left(\text{policy}+\beta\cdot\mathrm{KL}\right),\qquad\beta=10^{-4}.\]

上式中 beta 取 0.0001，mean 是对所有 token 取平均，优化器用 AdamW 并裁剪梯度范数。旧 LoRA 是当前 LoRA 的指数滑动平均，每轮更新 1 次。

### 数据、评测与人工对比是如何组织的

预训练数据包括 5000 万图像子集、2000 万视频场景、4000 万纯音频和 700 万音视频片段，音视频片段要求动态范围足够、无静音损坏，并对含人脸片段要求唇同步对齐分至少 3 分、音画事件去同步低于 0.1。监督微调分视觉阶段 4663 段与同步阶段 7686 段，覆盖人物动作、动物、卡通、人物说话、音乐等 11 个领域，强化学习用 2984 段，超分另有 150,000 段。客观评测用 VABench，报告语音质量、音频美学、文本视频与音视频对齐、唇同步、去同步、真实感等，词错误率单独在语音子集用识别器转写后计算。

人工评测是同提示并排对比，随机左右、先静音评画面 5 问再开声音评语音同步等 5 问，图像条件再加参考图保持度，每项约 200 组以上并多数投票。超分验证用无参考的 MUSIQ、DOVER、翘曲误差和拉普拉斯伪影分，翘曲误差小不一定代表时序好，平滑输出也可能得分低，需结合空间质量看。部署评测在 H100 与多款消费卡上测 5 秒成片时间，区分是否用块卸载与注意力后端，跨硬件直接比数字并不公平。

### 主结果：在什么条件下新模型更好

VABench 在 512×768 分辨率下比较 Pro、Lite 与 LTX 2.5 的 2 阶段全高清配置。结论成立的条件是同一基准的同一实现与同一语音子集划分。Pro 在语音质量、音频美学、文本视频对齐、音视频对齐、唇同步、去同步和视觉真实感上领先，Lite 在文本音频对齐、音频真实感和音视频质量分上最强，LTX 2.5 在视觉语言模型打分的对齐与表现力以及词错误率上占优。人工对比显示 Pro 相对 5.0 Pro 在无声的文本到视频与图像到视频上全面占优，尤其在整体视觉质量与提示遵循上增益大。

相对 Kling 2.6，Pro 在声音提示遵循和图像模式相机运动上占优，但在整体视觉与音频质量上处于下风。相对 Veo 3.1 Fast，Pro 画面更干净、参考图保持更好，但对方在提示遵循与整体音频上更强。相对 MiniMax H3 与 Seedance 2.0，对方在视觉项上显著更强，Pro 仅在语音与同步上接近或领先。总体上语音是 Pro 最稳定的优势项，视觉与整体音频仍有差距。

下面用强化学习前后的词错误率说明语音改进的幅度与统计条件，重点看基线是否为同模型的监督微调版本。

| 模型与测试集 | 监督微调词错误率 | 强化学习后词错误率 | 相对变化 | 统计说明 |
| --- | --- | --- | --- | --- |
| Pro 留出语音集 64 提示每提示 3 种子 | 0.235 | 0.124 | 下降 47% | 配对 Wilcoxon p 小于 0.001 |
| Pro 公开 Harvard 句 100 提示 | 0.251 | 0.180 | 明显下降 | p 等于 0.005 |

上表说明强化学习对语音可懂度的提升在留出集与公开句上都存在，Pro 幅度大于 Lite。但该词错误率用 Whisper-large-v3 计算，而该识别器本身也是奖励之一，存在奖励内评测的高估风险；公开句验证部分缓解了该担忧。VABench 另用 Qwen3-ASR 计算的词错误率数值体系不同，不能与本表直接对比。未胜出项是 VABench 中 Pro 的词错误率并未优于 LTX 2.5，说明奖励优化的增益不等于在所有识别器下通吃。

### 强化学习与蒸馏的消融说明了什么

强化学习相对监督微调的消融在 3 种设置下进行：语音集中的文本到音视频、通用域文本到音视频、通用域图像到音视频。语音集上语音质量、声音提示遵循和音画同步显著提升，通用域上视觉质量与运动真实感提升更均衡，图像模式上场景断裂减少。超分消融显示 4 倍路线下第二三阶段把 MUSIQ 从 48.92 提到 50.38 和 50.41，2 倍路线在 65.29 到 66.05 之间无一致提升；4 倍翘曲误差从 0.614 升到 0.648 和 0.678，拉普拉斯伪影先升后降，说明细节增加会抬高运动补偿残差，不能单看翘曲误差判定时序变差。

蒸馏对比在图像模式下进行，蒸馏版与全量版平均偏好 51% 对 49%，无显著差异，参考图对齐与伪影略好，提示遵循略差，支持少步模型保住质量的同时降低推理成本。潜在放大器的峰值信噪比在 4 倍全面高于像素双线性基线，2 倍则在弱退化组低于基线，说明放大器优势与退化类型有关。

下面整理超分扩散模型 3 阶段的无参考指标变化，重点看同一倍率内比较才有效。

| 倍率与阶段 | MUSIQ 越高越好 | DOVER 越高越好 | 拉普拉斯伪影越低越好 | 翘曲误差越低越好 | 阶段含义 |
| --- | --- | --- | --- | --- | --- |
| 4 倍阶段 1 | 48.92 | 0.5467 | 0.4366 | 0.6141 | 稠密注意力 |
| 4 倍阶段 2 | 50.38 | 0.5589 | 0.5337 | 0.6478 | 稀疏注意力微调 |
| 4 倍阶段 3 | 50.41 | 0.5553 | 0.4227 | 0.6781 | 蒸馏后 |

上表说明 4 倍下感知质量随阶段改善但翘曲误差同步上升，需人工并排确认时序是否可接受；2 倍本身起点高、改进空间小。MUSIQ 与 DOVER 是自然图像与用户视频质量指标，对超分特有网格伪影不完全敏感，因此伪影分与人工评价不可省略。该结论只适用于论文的 912 段切块验证集，不直接推广到整帧拼接与全高清管线。

### 哪些范围还没有被证明

论文明确承认只能生成至多 5 秒，基础在标清、全高清靠超分得到，原生高分辨率与长时序仍是未来工作。与最强闭源在视觉质量与整体音频上仍有差距，人工对比中多项显著落后于 MiniMax H3 与 Seedance 2.0。强化学习的词错误率增益部分依赖与奖励同源的识别器，换识别器后幅度会变化。超分的客观指标存在冲突，翘曲误差与伪影分都受细节与光流精度影响，单指标不能定胜负。消费卡部署靠块卸载把峰值显存压到 16 到 32 GB 可运行，但权重仍需大内存主机承载，磁盘换页会显著变慢。

注意力后端因架构而异，跨卡时间不可比。文化、偏见与误用风险方面，逼真唇同步可能被用于伪造，论文要求标注合成内容并遵守人像与声音权利法规，但并未给出误判率或内容审核效果的测量。

### 复现第一步做什么：代码权重与运行是三件事

先分清三件事：代码公开指仓库可读，权重可下载指 checkpoint 可获取，系统可运行指按依赖能在本地跑通，三者需分别验证。论文给出网站、代码仓库与 Hugging Face 集合链接，其中仓库链接在本次检查中可达，集合链接本次未能确认可达，未确认可达不代表技术缺陷，需自行重试。复现第一步建议从 Lite 标清文本到音视频开始，只用文字提示生成 5 秒片段，确认视频与 44 kHz 音频能同步落盘，再试图像条件模式。关键信息条件要保留：提示需同时含画面描述与音频描述标记，语音原文放`<S>` 标记内。

推理分辨率、帧率、块卸载预设与注意力后端都会影响速度与显存，应与原文表格条件对齐。超分管线需额外下载 K-VAE 与超分权重，并按 2.25 倍路线组织分块。若要复现训练，至少需要准备音视频同步过滤阈值、分领域微调权重平均与强化学习奖励权重，缺任何一项都无法得到相同 checkpoint。

### 什么时候值得尝试以及还需补哪项验证

当任务是 5 秒内的短片、需要可懂语音与基本同步，且接受先标清再超分的画质时，Pro 值得尝试，尤其语音与声音提示遵循是其相对优势。当追求电影级画面、长镜头或整体音频保真时，应优先考虑视觉更强的模型或等待原生高分辨率版本。教学例子：让穿白大褂的小女孩说长大想当医生，重点检查甜美童声是否清晰、嘴型是否跟上、背景医院环境声是否连续，这正是论文示例强调的语义与时间双对齐。

还需补的验证包括换独立识别器复测词错误率、在更长与更复杂运镜上测同步衰减，以及在目标消费卡上实测端到端延迟与显存。容易产生的误解是把 VABench 某项最高分当成全面最强，实际上不同指标的冠军分散在 Pro、Lite 与 LTX 2.5 之间，且人工评价中闭源模型在多项上仍领先，应按语音、同步、画面 3 类需求分别选型。

<details>
<summary>📎 论文与评分元数据</summary>

排名：前50% | 文档类型：模型报告 | [arXiv 原文](https://arxiv.org/abs/2610.05608v1)

</details>

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。

- 评分规则：type-aware-v1

- 评分模型：muse-spark-1.3-contributor

- 评分请求协议：openai_responses

---

[← 返回 2026-10-11 语音/音乐/音频论文速递](/audio-paper-digest-blog/posts/2026-10-11/)
