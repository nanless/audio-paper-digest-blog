---
title: "Hy ASR 3.0 Technical Report"
date: 2026-11-13
draft: false
tags: [语音识别, 强化学习, 知识蒸馏, 大语言模型, 口音与方言]
categories: [论文速递]
description: "Hy ASR 3.0 用一个由音频编码器、音频适配器和 LLM 解码器组成的系统，加上热词检索与多阶段训练，来处理普通话、英语、粤语和多种汉语方言的上下文相关转写；公开与内部评测给出最低的合计错误率，但分项仍有口音和方言类别上的退步，且报告没有给出逐项消融、延迟和训练成本。"
hiddenInHomeList: true
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_arxiv_id: "2611.14908"
paper_digest_workbench_contract: "researcher-workbench"
paper_digest_workbench_schema_fingerprint: "1f09b594c317cc38e934de27a5b0e8ceb4baa50ef79bd4f8683dd9adea720fe7"
paper_digest_reader_title: "Hy ASR 3.0：语音、外部上下文与 LLM 解码如何合成一次转写"
paper_digest_original_title: "Hy ASR 3.0 Technical Report"
paper_digest_arxiv_version: 1
paper_digest_arxiv_versioned_id: "2611.14908v1"
paper_digest_arxiv_abs_url: "https://arxiv.org/abs/2611.14908v1"
paper_digest_arxiv_pdf_url: "https://arxiv.org/pdf/2611.14908v1.pdf"
paper_digest_primary_task: "语音识别"
paper_digest_tags_contract: "paper-tag-flat-tags"
paper_digest_tags_schema_fingerprint: "27e36280a4b8d3df62ebe54d3ab037920f4d69feb2b554163f01bbae2caf4338"
paper_digest_tags_selection_contract: "paper-tag-selection"
paper_digest_tags_registry_version: "paper-tag-catalog"
paper_digest_tags_registry_sha256: "9673bc0122e1905a5dcfd8b223675400cc2fa4c36095bc0e5f817edf99a0ec5c"
paper_digest_tags_concepts: [{"facet":"task","id":"task.asr","label":"语音识别"},{"facet":"method","id":"method.reinforcement","label":"强化学习"},{"facet":"method","id":"method.distillation","label":"知识蒸馏"},{"facet":"model_family","id":"model_family.llm","label":"大语言模型"},{"facet":"setting","id":"setting.accent-dialect","label":"口音与方言"}]
paper_digest_primary_method: "强化学习"
paper_digest_score: 6.9
paper_digest_rank_bucket: "前50%"
paper_digest_document_type: "系统技术报告"
paper_digest_one_sentence: "Hy ASR 3.0 用一个由音频编码器、音频适配器和 LLM 解码器组成的系统，加上热词检索与多阶段训练，来处理普通话、英语、粤语和多种汉语方言的上下文相关转写；公开与内部评测给出最低的合计错误率，但分项仍有口音和方言类别上的退步，且报告没有给出逐项消融、延迟和训练成本。"
paper_digest_authors: [{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Aoxiong Yin"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Auden Li"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Chao Huang"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Chuanyang Hu"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Eitan Wang"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Ethan Zou"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Fangming Feng"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Guangyu Chen"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Guinan Li"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"He Wang"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Jiahong Li"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Meng Yu"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Mingyu Cui"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Peng Wang"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Rongjie Li"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Steve Yves"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Teddy Sun"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Tian Zheng"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Wei Liu"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Yang Zhou"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Yixuan Zhang"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Zhennan Lin"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Zhihang Xu"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Zhuohao Li"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Ziqiang Zhang"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Anji Zhang"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Bang Wang"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Caisheng Ouyang"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Chengqi Zhu"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Chong Li"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Conglian Xie"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Dongdong Wang"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Edward Wang"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Evelynn Liu"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Ferman Yang"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Feng Lu"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Gang Zhang"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Jathon Zhang"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Jaxl Liu"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Jiachen Luo"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Jian Li"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Jingxi Gui"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Kysun Wang"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Liang Dong"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Longsha Zhou"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Na Hu"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Qi Chen"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Rilin Chen"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Rui Yuan"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Shanshan Sang"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Siyu Yan"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Steven Hong"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Taihui Wang"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Weiwei Li"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Xiangyu Zhang"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Xiaotong Yang"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Xue Hu"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Xue Jiang"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Yameng Li"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Yifu Sun"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Yuhuan Zhou"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Zhiang Chen"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Zhibin Wang"}]
paper_digest_abstract_sha256: "55557e60f6ba38acba36729e5d3ca6032090b2e5978ba32c260c651c87257e3c"
paper_digest_sidecars: {"citation.bib":{"sha256":"6826f13e3db0ddef841c8373058f20346743c503ba54a2eacfaaecfc8eb899ad","url":"/audio-paper-digest-blog/client/papers/2026-11-13/2611-14908/citation.bib"},"citation.json":{"sha256":"e0dd9bdcca0e943e6b85dd830acc2269cc125cf1cccca80ef8a8b4e7b9622a38","url":"/audio-paper-digest-blog/client/papers/2026-11-13/2611-14908/citation.json"},"citation.ris":{"sha256":"065a18bfd05d81b61bf2772be5e9c5bbbf42b7dc33191b1354132191bd57781a","url":"/audio-paper-digest-blog/client/papers/2026-11-13/2611-14908/citation.ris"},"rethink-context.json":{"contract":"paper-research-context","schemaFingerprint":"5d4e79f7d3ee65b39ccb38281548bf20a1b2041ab7a27625eaf97ab9909a8383","sha256":"30d1849e4d84f09b513a0ea3ca5c2f1f302d3ac480e905c6c4854e2f1a90babd","url":"/audio-paper-digest-blog/client/papers/2026-11-13/2611-14908/rethink-context.json"}}
paper_digest_api_reader_contract: "beginner-researcher"
paper_digest_api_reader_schema_fingerprint: "cd8baf5b8bda3a49eec64f6005931af63de4e9a13148cba5f354c661ca6e9df2"
paper_digest_api_reader_article_sha256: "70860f71147e208b8b6f12e6253695cf7d188d80f0e30dd1aea03aca4ce89728"
paper_digest_api_reader_plan_sha256: "f200ed0c3ae4d67096d933d21015cfe32e49fe9cdd3da34db162a2e67c6d1c88"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings"
paper_digest_api_reader_source_binding_schema_fingerprint: "d2a2607a6e561909473022eb43f56332ee357af8568566a095c29083ffdec9cc"
paper_digest_api_reader_source_bindings_sha256: "5d403f53e0af9523b09c32ca19769a42c2ffc48f3b10c2a7cf914c12459ece6e"
paper_digest_api_reader_source_table_count: 4
paper_digest_api_reader_source_formula_count: 1
paper_digest_api_reader_structured_artifacts_sha256: "362528afb394708810eed70d120692b91277d361c6a5f98147947ef949e3cf6a"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity"
paper_digest_api_reader_author_identity_schema_fingerprint: "1e3fd3a9a56c9a5bf52df8df5022690b9a3fa92e83e934f295af87c0e258ed2f"
paper_digest_api_reader_author_identity_sha256: "fb8fec1bcc5e63fc1b318349975d7d5105d34db7fd5ed14489adc156099b2b9d"
paper_digest_api_reader_author_count: 63
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity"
paper_digest_api_reader_resource_identity_schema_fingerprint: "33b0be17118be61f39b85ce690c8da17e91f2864bb65e85284f60c40067328e0"
paper_digest_api_reader_resource_identity_sha256: "2b4873240ce615d85cd0864417fda3af471c63861361b1637d89d865acdca75b"
paper_digest_api_reader_resource_count: 0
paper_digest_api_reader_figure_persistence: "ephemeral-no-persisted-figure-assets-v1"
paper_digest_api_reader_decision_projection: "api-reader-decision-projection"
paper_digest_api_reader_decision_projection_schema_fingerprint: "e56feb5ab75c8710904916b898f73dab9bb18bdf65bb60b7ed2edf7f99cea860"
---

# 📄 Hy ASR 3.0：语音、外部上下文与 LLM 解码如何合成一次转写

> 英文题目：*[Hy ASR 3.0 Technical Report](https://arxiv.org/abs/2611.14908v1)*

<!--paper-tag-hierarchy-v1:start-->

**研究分类**

- **研究任务**：[语音识别](/audio-paper-digest-blog/papers/?concept=task.asr)
- **研究方法**：[强化学习](/audio-paper-digest-blog/papers/?concept=method.reinforcement)；[知识蒸馏](/audio-paper-digest-blog/papers/?concept=method.distillation)
- **研究条件**：[口音与方言](/audio-paper-digest-blog/papers/?concept=setting.accent-dialect)
- **模型家族**：[大语言模型](/audio-paper-digest-blog/papers/?concept=model_family.llm)

<!--paper-tag-hierarchy-v1:end-->

> 评分：**6.9/10** | 创新 1.2/2 | 技术严谨 1.2/1.5 | 实验充分 1.2/1.5 | 清晰度 0.9/1 | 影响力 1.3/1.5 | 开源 0/1.5 | 可复现 0.1/0.5 | 工程/实践 1/1.5


## 👥 作者与机构

- Aoxiong Yin：机构信息未能在本次解析中与作者逐人可靠绑定
- Auden Li：机构信息未能在本次解析中与作者逐人可靠绑定
- Chao Huang：机构信息未能在本次解析中与作者逐人可靠绑定
- Chuanyang Hu：机构信息未能在本次解析中与作者逐人可靠绑定
- Eitan Wang：机构信息未能在本次解析中与作者逐人可靠绑定
- Ethan Zou：机构信息未能在本次解析中与作者逐人可靠绑定
- Fangming Feng：机构信息未能在本次解析中与作者逐人可靠绑定
- Guangyu Chen：机构信息未能在本次解析中与作者逐人可靠绑定
- Guinan Li：机构信息未能在本次解析中与作者逐人可靠绑定
- He Wang：机构信息未能在本次解析中与作者逐人可靠绑定
- Jiahong Li：机构信息未能在本次解析中与作者逐人可靠绑定
- Meng Yu：机构信息未能在本次解析中与作者逐人可靠绑定
- Mingyu Cui：机构信息未能在本次解析中与作者逐人可靠绑定
- Peng Wang：机构信息未能在本次解析中与作者逐人可靠绑定
- Rongjie Li：机构信息未能在本次解析中与作者逐人可靠绑定
- Steve Yves：机构信息未能在本次解析中与作者逐人可靠绑定
- Teddy Sun：机构信息未能在本次解析中与作者逐人可靠绑定
- Tian Zheng：机构信息未能在本次解析中与作者逐人可靠绑定
- Wei Liu：机构信息未能在本次解析中与作者逐人可靠绑定
- Yang Zhou：机构信息未能在本次解析中与作者逐人可靠绑定
- Yixuan Zhang：机构信息未能在本次解析中与作者逐人可靠绑定
- Zhennan Lin：机构信息未能在本次解析中与作者逐人可靠绑定
- Zhihang Xu：机构信息未能在本次解析中与作者逐人可靠绑定
- Zhuohao Li：机构信息未能在本次解析中与作者逐人可靠绑定
- Ziqiang Zhang：机构信息未能在本次解析中与作者逐人可靠绑定
- Anji Zhang：机构信息未能在本次解析中与作者逐人可靠绑定
- Bang Wang：机构信息未能在本次解析中与作者逐人可靠绑定
- Caisheng Ouyang：机构信息未能在本次解析中与作者逐人可靠绑定
- Chengqi Zhu：机构信息未能在本次解析中与作者逐人可靠绑定
- Chong Li：机构信息未能在本次解析中与作者逐人可靠绑定
- Conglian Xie：机构信息未能在本次解析中与作者逐人可靠绑定
- Dongdong Wang：机构信息未能在本次解析中与作者逐人可靠绑定
- Edward Wang：机构信息未能在本次解析中与作者逐人可靠绑定
- Evelynn Liu：机构信息未能在本次解析中与作者逐人可靠绑定
- Ferman Yang：机构信息未能在本次解析中与作者逐人可靠绑定
- Feng Lu：机构信息未能在本次解析中与作者逐人可靠绑定
- Gang Zhang：机构信息未能在本次解析中与作者逐人可靠绑定
- Jathon Zhang：机构信息未能在本次解析中与作者逐人可靠绑定
- Jaxl Liu：机构信息未能在本次解析中与作者逐人可靠绑定
- Jiachen Luo：机构信息未能在本次解析中与作者逐人可靠绑定
- Jian Li：机构信息未能在本次解析中与作者逐人可靠绑定
- Jingxi Gui：机构信息未能在本次解析中与作者逐人可靠绑定
- Kysun Wang：机构信息未能在本次解析中与作者逐人可靠绑定
- Liang Dong：机构信息未能在本次解析中与作者逐人可靠绑定
- Longsha Zhou：机构信息未能在本次解析中与作者逐人可靠绑定
- Na Hu：机构信息未能在本次解析中与作者逐人可靠绑定
- Qi Chen：机构信息未能在本次解析中与作者逐人可靠绑定
- Rilin Chen：机构信息未能在本次解析中与作者逐人可靠绑定
- Rui Yuan：机构信息未能在本次解析中与作者逐人可靠绑定
- Shanshan Sang：机构信息未能在本次解析中与作者逐人可靠绑定
- Siyu Yan：机构信息未能在本次解析中与作者逐人可靠绑定
- Steven Hong：机构信息未能在本次解析中与作者逐人可靠绑定
- Taihui Wang：机构信息未能在本次解析中与作者逐人可靠绑定
- Weiwei Li：机构信息未能在本次解析中与作者逐人可靠绑定
- Xiangyu Zhang：机构信息未能在本次解析中与作者逐人可靠绑定
- Xiaotong Yang：机构信息未能在本次解析中与作者逐人可靠绑定
- Xue Hu：机构信息未能在本次解析中与作者逐人可靠绑定
- Xue Jiang：机构信息未能在本次解析中与作者逐人可靠绑定
- Yameng Li：机构信息未能在本次解析中与作者逐人可靠绑定
- Yifu Sun：机构信息未能在本次解析中与作者逐人可靠绑定
- Yuhuan Zhou：机构信息未能在本次解析中与作者逐人可靠绑定
- Zhiang Chen：机构信息未能在本次解析中与作者逐人可靠绑定
- Zhibin Wang：机构信息未能在本次解析中与作者逐人可靠绑定

## 📌 核心摘要

Hy ASR 3.0 要把一段语音连同可选热词表、问答对话或摘要转写成对应语言文字，并处理普通话、英语、粤语、方言、长音频、儿童和老年人语音、低音量与噪声语音等场景。系统先由音频编码器提取声学表示，再经音频适配器映射为 Hy3 语言模型可接收的嵌入；若有候选热词，则用声学表示和候选词表检索相关词条，并把这些词条、摘要或问答上下文编码为放在音频嵌入之前的文本前缀。Hy3 解码器以文本前缀、音频嵌入和已生成词元为条件自回归输出转写，同一句话内部的同音或近音歧义靠整段音频与已生成文本消解，不另设外部上下文输入。与直接把通用、方言、上下文目标混在单一策略中优化不同，训练先做音频编码器自监督预训练，再做大规模 ASR 预训练，随后在 SFT 后用通用、方言、上下文偏置 3 个强化学习专家分别优化，最后以多教师同策略蒸馏把专家行为合并到学生模型，并针对真实困难案例做模型行为强化学习。在公开基准汇总上，Hy ASR 3.0 的中文 CER 为 4.64%，低于 FunASR Flash 的 4.77%；英文 WER 为 5.22%，低于 StepAudio 3 ASR Max 的 5.38%；方言识别合并 CER 为 4.80%，低于 Qwen3 ASR Flash 的 5.45%。但在公开 VoxPopuli-en 口音子集上，Hy ASR 3.0 的 WER 为 15.27%，高于 Preview 的 14.75%，说明口音英语仍有退化。上述结论受评测范围限制：上下文结果是跨系统比较而非同模型有无上下文消融，人工方言评测未说明标注者一致性且只比较 FunASR Flash 和 Doubao ASR 2.0，儿童与老年人合并测试不能证明各年龄组分别改善。原文未披露训练、推理或部署成本。

## 🔗 开源与复现资源

本次未形成可展示的已核验资源记录，开放状态尚未核实。

可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 先明确输入、输出与不可丢失的信息

自动语音识别（automatic speech recognition，ASR）的输入是一段或多段语音波形，目标是在给定声学条件下输出可读的文本序列。除了字词本身，输出还涉及标点、数字写法、专名和上下文所要求的词形选择，这些都是识别系统需要保留的信息。本文研究普通话、英语、粤语以及其他汉语方言的转写，并在部分任务中接收外部文本条件，例如热词表、问答对话和摘要。

对初学者来说，可以先区分两个层次：一是把声音变成音素、字或词，二是利用语言知识和上下文把同音候选选对。论文关心的困难包括方言缺少统一书写、长音频、儿童和老人语音、低音量、噪声，以及热词和对话上下文能否真正进入解码。这里的错误率通常指 CER 或 WER，数值越低越好；召回率和人工评价百分比则越高越好。

### 大规模弱监督和 LLM 语音识别给本文留下了什么

Whisper 的工作说明，大规模弱监督可以提高识别精度和跨域泛化；LLM-based ASR 进一步把预训练语言模型的语言知识和文本上下文带入转写；Qwen3 ASR 等系统扩大了对多语言、多场景语音条件的覆盖。Hy ASR 3.0 接续这条系统路线，并以预训练的 Hy3 基座模型为基础。

这篇技术报告以系统实现与评测为中心，目标是把识别精度、异构上下文利用和困难条件下的稳健性放在同一个系统中。作者用公开基准、内部业务数据和方言人工评价展示这些能力。阅读时要把“在作者所比较系统中最好” 和“在所有可能条件下最好” 区分开；文中的数值比较由其自身评测流程产生，参考系统由各模型家族或服务文献界定，得分对应本文实验设定。

### 外部上下文和话内线索各自解决哪类歧义

外部上下文要处理“候选词太多、单靠声音容易混淆” 的问题。热词表给出明确词形，适合人名、机构名、专业词；问答对话和摘要提供更宽的语义信息，适合同一领域内多个候选同时合理的情况。热词检索的任务是从候选词中挑出与当前音频相关的词，把提示集中在少量候选上。

话内线索处理另一类歧义：同一句话里可能先出现解释、否定、对比或字形说明，后面的关键词要借助这些内容才能选对。例如同一个读音可以对应多个汉字，或者一个人名里的两个相邻同音字需要区分。论文的目标是让模型从同一段音频和已生成的转写中利用这些线索，用户额外提供单独外部上下文在这一路径中成为可选项。这一区分很重要，因为外部热词、对话历史和话内说明进入模型的路径彼此独立。

### 一次识别怎样从波形走到转写文本

沿一段输入走一遍，可以看到组件如何衔接。音频编码器把波形变成声学表示序列；音频适配器把这些表示映射到 LLM 的嵌入空间；热词检索利用同一批编码器表示，在候选热词表中选择与当前音频相关的词；被选中的热词，以及可用的摘要或问答对话，被编码成文本前缀，放在音频嵌入之前；最后，LLM 解码器根据文本前缀、音频嵌入和此前生成的 token，逐个生成转写。

这里的分工是：编码器负责声学，适配器负责把声学表示接到语言模型，解码器负责在语言空间中生成 token，检索负责缩小外部词表的范围。论文对编码器层数、表示维度、适配器结构或解码器参数规模着墨有限，读者宜从这些名称理解功能分工，并据此把握系统轮廓。

**音频编码器 × 音频适配器 × LLM 解码器：** 音频编码器先处理声音对象，把波形变成声学表示序列；音频适配器再把这类表示映射到 LLM 可接收的嵌入空间，解决声学特征与语言模型词嵌入不在同一空间的问题；LLM 解码器则根据文本前缀、音频嵌入和此前生成的 token 逐个产生转写。三者串联的意义是：编码器保留语音信息，适配器完成接口转换，解码器利用语言知识生成文本，缺一层都无法把原始波形直接接到自回归转写。

图 2 适合用来建立整体路径感。看图时先沿波形找到音频编码器和适配器，再找到 prompt/context 经过 Hy Tokenizer 后与音频特征汇合的位置，最后看 Hy3 LLM 如何逐个输出 token；右下角的训练阶段顺序可以帮助区分“结构图” 和“训练流程图”。

> **看图路径：** 1. 沿波形找到 Audio Encoder、Audio Adapter 和 Hy3 LLM 的主路径；2. 找到 Prompt/Context 经 Hy Tokenizer 后与音频特征汇合的位置；3. 在右侧确认转写是按 token 逐个生成，而不是一次输出整句；4. 在右下角区分 Audio Encoder SSL、Pre-training、SFT 和 RL 的训练阶段

[![原论文 Figure 2：Overview of the Hy ASR 3.0 model architecture and its training procedure.](https://arxiv.org/html/2611.14908v1/framework.png)](https://arxiv.org/html/2611.14908v1/framework.png)

*论文图 2。原论文 Figure 2:：“Overview of the Hy ASR 3.0 model architecture and its training procedure.”。*

图 2 左侧可以清楚看到波形先进入 Audio Encoder，再进入 Audio Adapter；下方 Prompt 和 Context 经 Hy Tokenizer 形成另一组 token 表示。两组表示在进入 Hy3 LLM 前汇合，右侧则画出识别结果按 token 逐个产生。热词检索部分从 Domain/User Hotwords Vocabulary 取候选，并结合 Audio Features 选出 Retrieved Hotwords；摘要和 Dialogue QA 也与这些上下文一起构成条件。

右下角可见训练流程从 Audio Encoder SSL 开始，经过 Pre-training、SFT，再到 RL。图中的 prompt 是流程示意，宜按示意理解；论文对 Hy Tokenizer 的内部结构着墨有限。

### 热词检索怎样把候选词变成条件前缀

候选热词表通常远大于当前一句话真正需要的词。若全部拼接，既会占用上下文长度，也会让解码器在大量候选词之间分散注意力。热词检索因此用音频表示作条件，从候选表中选出相关词；选中的词再与摘要、问答对话一起编码成文本前缀。这样做的直接作用，是让外部信息参与解码，同时保留音频嵌入的直接访问通道，使外部文本作为辅助条件、与声学证据共同服务识别。

**热词检索 × 外部上下文 × 文本前缀：** 外部上下文是总称，包括热词表、摘要和问答对话；热词检索负责从大量候选中按当前音频筛出相关词，避免无关词占满条件；文本前缀是这些被选词和其他上下文在送入 LLM 前的组织方式，被放在音频嵌入之前，让解码器在生成每个 token 时都能读取。检索负责“选什么”，文本前缀负责“怎样与音频一起送入解码器”，两者组合后，模型既保留声学证据，又获得可读的外部约束。

论文对检索的说明覆盖输入与输出；检索器的具体结构、训练目标、候选表规模、召回阈值和检索错误处理属于实现细节。单独使用热词表时的定量结果留待专门实验考察；表 3 中的对话问答和话内上下文评测考察另外两类上下文路径，热词检索的专项消融需要单独设计。读者可以理解这一机制在系统中的位置，并把候选词很多、噪声很大或词表频繁变化时的稳定性视为值得实验检验的实践问题。

### 音频编码器怎样从掩码语音中学习表示

音频编码器的训练采用迭代的 HuBERT 式自监督流程。先训练一个 Bootstrap Encoder，并用 Best-RQ 对它选定的中间表示做量化，得到离散目标；再用这些目标训练一个 Intermediate HuBERT 模型；随后对它的表示做残差向量量化，得到多级目标；最后训练最终编码器，从被掩码的语音输入预测这些目标。整个阶段的直接监督来自语音自身的量化表示，人工逐字标注留给后续需要监督的任务。

编码器在数千万小时语音上分 2 阶段训练，数据以普通话和英语为主，也包含粤语和其他汉语方言。第一阶段覆盖较广的语音混合，第二阶段继续预训练时重新平衡数据，更强调汉语方言，降低噪声录音和短句的权重，并加强掩码策略和 utterance mixing，以提高对干扰语音的鲁棒性。

**Best-RQ × HuBERT 式自监督学习 × 残差向量量化：** Best-RQ 先提供可训练的 bootstrap 目标和量化表示，HuBERT 式自监督学习把这些表示变成掩码预测任务，残差向量量化再把表示分成多级离散目标。三者的分工是：Best-RQ 解决起始监督，HuBERT 式流程解决从掩码语音学习语义表示，残差向量量化提供更细的多级预测目标；组合后，最终音频编码器不需要人工逐字标签，就能从大量无标注语音中学习可供 LLM 使用的表示。

论文报告的复现信息集中在流程和数据策略；量化码本大小、掩码比例、编码器层数、训练步数与第二阶段数据权重属于复现时需要补齐的超参数。

### 预训练数据怎样构造，定向继续预训练改变了什么

大规模预训练的数据来自网页来源的语音，规模达到数千万小时。为了在这种规模上构造可靠监督，作者使用多套 ASR 系统分别生成候选转写，再用 ROVER（Recognizer Output Voting Error Reduction）合并候选，随后经过多阶段质量过滤，丢弃质量低的样本。数据还经过领域感知的平衡和压缩，前者让训练容量分散到各个领域，后者删除冗余信息、优先保留信息量更高的样本。报告称，经过这些处理后，模型在使用原训练数据 50% 的情况下取得更好表现。

第二阶段是定向继续预训练，数据混合提高了方言语音、上下文偏置数据和挑战性声学条件语音的比例。作者给出的理由是，这样能改善方言识别、上下文偏置能力以及对挑战性声学条件的鲁棒性，同时让预训练分布更接近后续监督微调数据。报告还称，这使 SFT 数据可以减少到原规模的十分之一而维持模型表现。

这些数字是数据效率声明；原始数据量、过滤前后样本数、各领域比例与效率曲线的完整细节在报告中着墨有限。读者可以把 50% 和十分之一理解为作者报告的相对变化，并在复现实验中将它们视为需要结合调参与数据条件核验的压缩率。

### SFT、领域专家和蒸馏怎样合成一个模型

后训练先做监督微调（SFT）。作者持续改进自动转写流水线中各个标注环节的准确率，并在每一轮用上一轮表现最好的 SFT checkpoint 作为教师模型，为下一轮生成伪转写；方言和其他困难场景的定向数据也会补进训练混合。这个过程的直接作用是扩大可靠监督，同时把预训练阶段获得的通用识别能力保留下来。

随后是专家强化学习。作者从同一个 SFT checkpoint 初始化 3 个独立的 ASR 专家，分别面向通用 ASR、方言 ASR 和上下文偏置 ASR。分开训练的理由是减少跨领域干扰，让每个专家针对自己的场景优化；每个专家根据所在领域设计奖励，除总体识别准确率外，还考虑关键词识别和转写句级流畅性。

**监督微调 × 专家强化学习 × 多教师同策略蒸馏：** 监督微调先把预训练模型拉到可用的 ASR 行为，并建立后续强化的起点；专家强化学习在这个起点上分别训练通用、方言和上下文偏置三个专家，让不同奖励和不同数据分布不必挤在同一个策略里；多教师同策略蒸馏再把三个专家的 token 级分布转移到同一个学生，使学生保留多种能力而不是只服务一个领域。三者组合的意义是先把能力分开专精，再合并为一个可部署模型，而不是一开始就让一个策略同时承受所有目标。

3 个专家之后通过多教师同策略蒸馏合并成一个学生模型。给定一条语音，学生先按当前策略生成一条 on-policy 识别假设，再按领域路由到对应专家，由专家在 token 级提供监督。目标可以写成下面这样。

\[\mathcal{L}_{\mathrm{MOPD}}=\mathbb{E}\left[\frac{1}{T}\sum_{t=1}^{T}D_{\mathrm{KL}}\left(\pi_{\theta}(\cdot\mid\mathbf{s}_{t})\|\pi_{\phi_{d}}(\cdot\mid\mathbf{s}_{t})\right)\right].\]

式中，T 是学生假设的长度，s_t 由声学输入 x 和此前生成的 token 组成；πθ 是学生，πφd 是领域 d 的专家。期望取在按领域路由的训练样本和学生生成的假设上。逐 token 的 KL 比较的是学生分布与对应专家分布；训练信号沿学生自己的生成轨迹传递，让学生在这条轨迹上靠近领域专家，固定标签直接蒸馏则属于另一种训练安排。

作者认为，直接在一个共享策略中混合通用识别、方言行为和上下文相关关键词识别，可能让各领域的奖励和数据分布相互冲突；先训练专家再蒸馏，是把领域专门化和能力整合分开。这个设计理由有清晰的逻辑；报告对这一设计与直接混合所有 RL 目标的定量对照着墨有限。最后还有 Model-Behavior RL，用真实使用中的难例强化依赖上下文的关键词识别，目标是让整句转写更连贯、更流畅；具体奖励构成和难例筛选标准在报告中着墨有限。

### 比较对象、指标方向与公平条件

评测比较了 Qwen3 ASR Flash、FunASR Flash、Doubao ASR 2.0、Seed 2.0 Lite、StepAudio 3 ASR Max、Hy ASR 3.0 Preview 和本文系统。作者说明，技术报告和官方服务页用于确认模型家族或服务名称，下面的数值是本研究自己报告的结果，不是从那些参考材料中直接取的分数。

客观识别用 CER 或 WER，字符或词错误率越低越好；上下文识别用目标词召回率，越高越好；方言评价用人工评定的百分比。相对错误率下降（RERR）按“最强非 Hy 竞争者的错误率减去 Hy 错误率，再除以该竞争者错误率” 计算；召回率或人工评分的差用百分点表示。这个分母选择很重要：同一个绝对差值，对不同基线会得到不同的相对下降。

**CER × WER × 目标词召回率 × 相对错误率下降：** CER 按字符计算错误，WER 按词计算错误，两者都是错误率，数值越低越好；目标词召回率衡量给定目标词中被正确找回的比例，数值越高越好；相对错误率下降用最强非 Hy 竞争者的错误率作分母，表示相对减少了多少错误，而不是减少了多少个百分点。四个指标的对象和单位不同，不能把召回率差值写成 CER 差值，也不能把相对下降写成百分点。

公开评测列出了 AISHELL-1、AISHELL-2、AliMeeting、WenetSpeech、FLEURS、Common Voice、SpeechIO、LibriSpeech、GigaSpeech、TED-LIUM 3、VoxPopuli、MLS、WenetSpeech-Yue 和 KeSpeech 等。作者称采用严格的数据去污染，确保评测语句及其音频或文本近重复不出现在训练数据中。报告没有给出每个测试集的样本数、置信区间或显著性检验，也没有说明公开合计的加权方式；因此，合计值只能按作者给出的口径阅读，不能从分项自行反推权重。

### 公开基准：合计优势与逐项胜负

表 1 先看公开基准的合计结果，比较对象是作者在本次研究中报告的最强非 Hy 系统。错误率越低越好，数值保留原文的百分号；合计的加权方式正文没有说明，因此这里只复述作者报告的合计和相对下降。

| 评估组 | 指标 | Hy ASR 3.0 | 最强非 Hy 竞争者 | 竞争者错误率 | Hy ASR 3.0 Preview |
| --- | --- | --- | --- | --- | --- |
| 中文普通话合计 | CER/WER | 4.64% | FunASR Flash | 4.77% | 4.73% |
| 英文合计 | WER | 5.22% | StepAudio 3 ASR Max | 5.38% | 5.28% |
| 方言合计 | CER/WER | 4.80% | Qwen3 ASR Flash | 5.45% | 5.23% |

从表 1 看，中文合计 4.64%，低于 FunASR Flash 的 4.77% 和 Preview 的 4.73%，相对下降约 2.7% 和 1.9%；英文 5.22%，低于 StepAudio 3 ASR Max 的 5.38% 和 Preview 的 5.28%，相对下降 3.0% 和 1.1%；方言合计 4.80%，低于 Qwen3 ASR Flash 的 5.45% 和 Preview 的 5.23%，相对下降 11.9% 和 8.2%。这些合计支持“在作者所比较系统中最低” 这一判断，但不能推出每个子集都最好。

分项上，中文在 AISHELL-2 mix 为 1.98%、AliMeeting near 为 5.47%、SpeechIO Unlocked 为 2.36%，并在 WenetSpeech test-net 的 3.74% 和 FLEURS-zh 的 1.84% 与最佳持平；FunASR Flash 仍在 AISHELL-1 和 WenetSpeech test-meeting 更强。英文在 Common Voice-en 5.48%、FLEURS-en 2.53%、TED-LIUM 3 2.44%、VoxPopuli-en test 5.84% 领先，GigaSpeech 8.27% 与 Preview 持平；StepAudio 3 ASR Max 在 LibriSpeech 两个子集和带口音 VoxPopuli 更强，且本系统在该带口音子集从 Preview 的 14.75% 退到 15.27%。方言方面，作者单独报告 4 个粤语子集的非加权均值 5.06%，Qwen3 ASR Flash 为 5.68%。

KeSpeech 为 3.77%，FunASR Flash 为 4.33%，相对 Preview 的 5.17% 降低 27.1%。但 5.06% 不含 KeSpeech，4.80% 的方言合计含 KeSpeech，两个口径不能直接横向比较；Qwen3 仍在 WenetSpeech-Yue long 最好，Preview 在 CommonVoice-yue 略好。

图 1 把 4 类结果压缩到一个总览里：公开基准、内部基准、上下文召回和鲁棒性。读图时先看每个面板的纵轴或柱长方向，再确认旁边的竞争者名称和 RERR，最后把图中结果与表 1 至表 4 对应起来，而不是只看柱子的相对高低。

> **看图路径：** 1. 先看四个面板分别对应公开基准、内部基准、上下文召回和鲁棒性；2. 在公开基准中确认每组柱旁的竞争者名称和 RERR 标注；3. 在上下文面板区分召回率与增益百分点，不要把召回率当成错误率；4. 注意鲁棒性面板的 Whispered speech 标签与表 4 低音量噪声口径不一致

[![原论文 Figure 1：Overview of Hy ASR 3.0 capabilities and benchmark performance.](https://arxiv.org/html/2611.14908v1/hy_asr_3_0_graphical_abstract_v7.svg)](https://arxiv.org/html/2611.14908v1/hy_asr_3_0_graphical_abstract_v7.svg)

*论文图 1。原论文 Figure 1:：“Overview of Hy ASR 3.0 capabilities and benchmark performance.”。*

图中公开基准面板显示中文、英文和方言的 3 组柱：竞争者分别为 4.77%、5.38%、5.45%，Hy ASR 3.0 分别为 4.64%、5.22%、4.80%，并标注 2.7%、3.0%、11.9% 的相对错误率下降；这些数字与表 1 一致。内部基准面板把中文、英文、粤语和代码切换放在一起；上下文面板显示话内召回率和对话问答召回率；鲁棒性面板显示长音频、儿童与老人语音，以及一个 9.27% 到 7.49% 的条件。

需要注意的是，图 1 在鲁棒性面板把后 1 个条件标为 Whispered speech，而正文和表 4 对应的是低音量与噪声的组合测试，标签不一致；不能据此把它当成单独的耳语测试。图 1 还把 Summary 列为外部格式，但表 3 只报告了话内和对话问答两项，摘要上下文的定量结果并未在表中出现。

### 内部业务数据：四个场景的结果

表 2 比较内部业务数据上的 4 个场景。这里比较的仍是同一报告中的系统，指标为 CER/WER，数值越低越好；但内部数据不公开，采集条件和样本量也没有展开，不能把这里的名次直接外推到其他业务分布。

| TestSet | Qwen3 ASR Flash | FunASR Flash | Doubao ASR 2.0 | Seed 2.0 Lite | StepAudio 3 ASR Max | Hy ASR 3.0 Preview | Hy ASR 3.0 |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Chinese | 4.94 | 4.15 | 3.78 | 5.56 | 5.30 | 3.35 | 3.18 |
| English | 8.76 | 7.54 | 6.42 | 8.78 | 10.68 | 5.78 | 5.50 |
| Cantonese | 6.00 | 19.40 | 7.49 | 7.90 | 7.00 | 4.92 | 4.81 |
| Code-Switching | 8.80 | 5.30 | 6.49 | 6.37 | 6.90 | 4.35 | 4.20 |

表 2 中 Hy ASR 3.0 在 4 个场景均最低：中文 3.18%，英文 5.50%，粤语 4.81%，代码切换 4.20%；Preview 分别为 3.35%、5.78%、4.92%、4.35%。这说明相对上一版本和同一报告中的比较系统，内部业务数据上仍有提升。内部基准的样本量、采集条件和聚合权重未公开，不能把 4.81% 与公开粤语合计 5.06% 或公开方言合计 4.80% 当作同一指标比较。表中 FunASR Flash 的粤语 19.40% 与其他系统差距很大，论文没有解释原因，读者也不应据此推断其一般能力。

### 上下文利用：召回率与定性例子

表 3 回答两个问题：没有外部上下文时，模型能否利用同一句话内部的线索找回目标词；有前序对话轮次时，模型能否利用问答上下文。指标是目标词召回率，越高越好。两类测试的条件不同，不能把它们的差值互相替代；而且作者明确说这是跨系统比较，不是同一个模型有/无上下文的消融。

| Testset | Qwen3 ASR Flash | FunASR Flash | Doubao ASR 2.0 | Seed 2.0 Lite | StepAudio 3 ASR Max | Hy ASR 3.0 Preview | Hy ASR 3.0 |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Intra-utterance context | 46.60 | 51.16 | 51.86 | 54.64 | 50.75 | 58.12 | 61.88 |
| Dialogue QA context | 71.68 | 77.33 | 78.47 | 82.20 | 69.32 | 79.44 | 83.94 |

表中 Hy ASR 3.0 的话内上下文召回为 61.88%，Seed 2.0 Lite 为 54.64%，高出 7.24 个百分点；对话问答召回为 83.94%，Seed 2.0 Lite 为 82.20%，高出 1.74 个百分点。Preview 为 58.12% 和 79.44%。最高召回说明在这两个测试集的目标词上，Hy ASR 3.0 比所列系统更常找回正确词，但对话问答的 1.74 个百分点差距较小，报告也没有给置信区间和样本量，稳定性仍需验证。

图 3 给出 4 个话内消歧选例。看图时逐个面板先找参考目标，再看每个系统输出的目标片段，注意这些片段不是完整转写，不能据此判断整句 CER 或 WER。

> **看图路径：** 1. 逐个面板先找蓝色参考目标，再看各系统输出的目标片段；2. 区分 (a)(b) 的语义消歧与 (c)(d) 的显式口头澄清；3. 注意红色表示与目标不匹配的字符，不要把目标片段当成完整转写；4. 把选例当作定性展示，不要从中推算总体 CER/WER

[![原论文 Figure 3：Examples of intra-utterance disambiguation.](https://arxiv.org/html/2611.14908v1/hy_asr_3_0_intra_utterance_cases_v3.svg)](https://arxiv.org/html/2611.14908v1/hy_asr_3_0_intra_utterance_cases_v3.svg)

*论文图 3。原论文 Figure 3:：“Examples of intra-utterance disambiguation.”。*

图 3 的 (a) 是历史官职名称，Hy ASR 3.0 输出“佥事”，其他系统给出“千室”“千使” 或“千石” 等近音替代；(b) 是游戏模式名，目标为“绿洲启元”，其他系统多输出“绿洲起源” 一类形式；(c) 用肯定“白鹿” 与否定的“白鹭” 作对比，Hy 在 3 个目标片段中保留“白鹿、白鹿、白鹭” 的顺序，而其他系统多把前两处也识别成“白鹭”；(d) 用人名“邱黎璃” 的字形说明区分“黎” 和“璃”，Hy 保持 3 个目标字，其他系统出现重复或替换。这些例子说明输出可以与句内语义和显式说明一致，但它们是定性展示，不是受控消融，不能证明在所有未选样本上都有同样效果。

### 长音频和困难声学条件的结果

表 4 看 3 类困难条件：长音频、儿童与老人语音的组合测试，以及低音量与噪声的组合测试。指标是 CER，越低越好；这 3 种设置都不是单一因素，尤其后两类是组合集合，结果不能直接拆成年龄、音量或噪声各自的效应。

| Testset | Qwen3 ASR Flash | FunASR Flash | Doubao ASR 2.0 | Seed 2.0 Lite | StepAudio 3 ASR Max | Hy ASR 3.0 Preview | Hy ASR 3.0 |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Long audio | 3.86 | 3.98 | 5.60 | 4.99 | 3.58 | 2.96 | 2.35 |
| Child & Elderly | 9.98 | 7.87 | 6.43 | 10.49 | 9.90 | 7.18 | 6.25 |
| Low-volume & Noisy | 14.72 | 9.27 | 15.75 | 17.31 | 43.02 | 8.48 | 7.49 |

表 4 中 Hy ASR 3.0 在三项均为最低：长音频 2.35%，儿童与老人 6.25%，低音量与噪声 7.49%。相对各自最强非 Hy 竞争者，作者报告 CER 下降 34.4%、2.8% 和 19.2%；这些是相对错误率下降，不是百分点。长音频的降幅最大，但报告没有给出推理延迟或吞吐，因此不能把识别错误下降直接解释为部署成本下降。儿童与老人的 2.8% 相对下降较小，而且该基准把两个年龄组合在一起，原文明确说它不能证明两个年龄组各自都有改善；低音量与噪声也是组合测试，不能把 7.49% 归因于单一噪声类型。

### 方言人工评价：三项指标给出不同答案

方言评价比普通 CER/WER 更麻烦，因为很多方言没有统一书写，同一段话可能有多种可接受的转写。作者对没有既定书写规范的方言采用翻译式表示，使其落成较一致的书面形式；开发阶段用 LLM 评判语义错误率和转写风格一致性，但最终结论来自人工评价。人工评价覆盖 13 个方言类别、91 个次区域变体，比较 Hy ASR 3.0、FunASR Flash 和 Doubao ASR 2.0。

**严格识别率 × 宽松识别率 × 格式合规率：** 严格识别率统计“内容完全正确” 的转写比例，宽松识别率统计“语义正确但允许措辞差异” 的比例，格式合规率统计标点、逆文本归一化和流畅性没有问题的比例。三者分别检查内容正确性、语义正确性和输出格式，不能用一个指标替代另一个；严格率低但宽松率高，可能是措辞差异，而格式合规率低则是另一个质量问题。它们组合起来，才能在方言缺少统一书写的情况下同时看语义和呈现。

图 4 展示这 3 个指标的分类别结果。读雷达图时先确认 3 个面板分别是严格识别率、宽松识别率和格式合规率，再沿 13 个方言轴比较 3 种线条；雷达图的面积或外扩只能说明分类别形状，具体数值仍要看正文和图例。

> **看图路径：** 1. 先确认三个雷达图分别对应严格识别率、宽松识别率和格式合规率；2. 沿 13 个方言轴比较绿色实线、蓝色虚线和灰色点线；3. 重点看 Southern Min、Cantonese 和 Wu 的相对位置，再回到正文核对具体百分比；4. 注意雷达图没有显示样本量和置信区间，不能把外圈直接当成统计显著

[![原论文 Figure 4：Human evaluation of dialect recognition.](https://arxiv.org/html/2611.14908v1/hy_asr_3_0_dialect_radars_en_three_metrics_linear_v1.svg)](https://arxiv.org/html/2611.14908v1/hy_asr_3_0_dialect_radars_en_three_metrics_linear_v1.svg)

*论文图 4。原论文 Figure 4:：“Human evaluation of dialect recognition.”。*

图 4 中 Hy ASR 3.0 用绿色实线表示，FunASR Flash 用蓝色虚线，Doubao ASR 2.0 用灰色点线；3 个雷达图的轴依次是 13 个方言类别，径向刻度从 0 到 100。严格识别率方面，Hy 为 64.7%，比 FunASR Flash 和 Doubao 分别高 2.8 和 12.5 个百分点；格式合规率为 80.3%，分别高 11.4 和 13.7 个百分点；宽松识别率方面，Hy 超过 Doubao，但比 FunASR Flash 低 1.0 个百分点。

分类别上，Hy 在 Southern Min 和 Cantonese 的严格识别率达到 70.3% 和 83.3%，比各自最强竞争者高 22.7 和 14.2 个百分点；但 FunASR Flash 在 Wu 的 3 个指标上都更强。雷达图能帮助看出分类别差异，报告没有给每个类别的样本数、评分者一致性或置信区间，因此“总体更好” 和“每一类都更好” 不是一回事。

### 没有逐项消融，哪些机制仍未被单独证明

这篇报告没有给出逐项组件消融。表 3 是跨系统比较，作者自己也说明不是同一个模型有/无上下文的对照；图 3 只是 4 个选例，不能替代统计消融。因此，无法从现有结果中单独拆出音频编码器、音频适配器、热词检索、文本前缀、3 个专家或多教师蒸馏各自贡献了多少。

训练部分描述了多个设计选择，但没有给出同架构、同数据、同预算下只改变一个选择的定量表。比如，作者认为分开训练 3 个专家能减少跨领域干扰，却没有报告直接混合所有强化学习目标的共享策略基线；Model-Behavior RL 针对真实难例，但没有给出加入前后在难例集上的对照。数据效率方面的 50% 预训练数据和十分之一 SFT 数据也是作者报告的相对变化，报告没有展示完整的数据量—性能曲线。

外部上下文的支持范围也留下空白：系统声称支持热词表、摘要和问答对话，表 3 只量化了话内上下文和对话问答，热词检索和摘要上下文没有单独的定量消融。图 1 虽然把 Summary 列为外部格式，也没有在表中给出摘要实验。读者可以把这些看作尚未验证的能力，而不能因为它们出现在架构描述里，就认为每个条件都已有同等证据。

### 优势的边界：口音、方言类别与组合测试集

结果的优势有明确边界。带口音的 VoxPopuli-en 子集上，Hy 从 Preview 的 14.75% 退到 15.27%，StepAudio 3 ASR Max 在该子集和 LibriSpeech 两个子集更强；方言人工评价中，FunASR Flash 在 Wu 的三项指标上都更好；WenetSpeech-Yue long 上 Qwen3 ASR Flash 仍最低。公开中文合计也不是每个子集都领先，AISHELL-1 和 WenetSpeech test-meeting 仍由 FunASR Flash 更好。

合计数还要看口径。公开方言合计 4.80% 包含 4 个粤语子集和 KeSpeech；单独 4 个粤语子集的非加权均值是 5.06%，不含 KeSpeech；KeSpeech 本身是 3.77%。这 3 个数字回答的问题不同，不能互相替代。

儿童与老人、低音量与噪声都是组合测试，长音频只有 CER 没有延迟。公开合计的加权方式、测试样本数、置信区间和显著性检验没有给出，人工方言评价的评分者一致性和样本量也未报告。

因此，“在作者所评估系统和指标上取得最低合计错误率” 是有证据的判断；“在所有口音、所有方言类别、所有声学条件和所有部署预算下都更好” 则没有证据。摘要中的 13 个方言组、91 个次区域变体是评价覆盖范围，不等于每个类别都达到同样水平。

### 复现要准备什么，报告还缺哪些关键信息

如果要复现，第一步不是直接训练数千万小时模型，而是搭一个可核对的评测台：固定公开测试集和去污染规则，明确 CER/WER 的单位与聚合方式，复现最强非 Hy 基线的同一口径，再准备上下文目标词召回和方言人工评价的评分规范。只有评测口径一致，表中的相对下降才有比较意义。

系统实现层面，报告给出了音频编码器、音频适配器、LLM 解码器和热词检索的职责，但没有给出层数、隐藏维度、适配器结构、tokenizer 细节、检索器结构、候选词表规模、掩码比例、优化器、学习率、批大小、训练步数和硬件预算。SFT 的伪标签迭代、3 个专家的奖励权重、MOPD 的路由方式和 Model-Behavior RL 的难例筛选也没有完整参数。训练数据包含数千万小时网页语音，以及未公开的内部业务数据，完整复现的训练成本很高。

报告没有分别说明代码、权重和可运行系统是否提供，因此不能把“有技术报告” 当成“可直接运行”。可行的第一步是用公开数据做小规模架构复现和评测复现，先验证预处理、上下文拼接、CER/WER 计算和基线版本，再判断是否值得投入完整训练。

### 什么时候值得尝试，先验证哪一件事

什么时候值得尝试？如果你的场景同时需要普通话、英语、粤语或多种汉语方言，并且外部热词、对话上下文、长音频或低音量噪声是实际问题，那么这篇报告提供了值得进一步验证的系统组合和评测线索。若你的核心条件是强口音、Wu 方言、严格的低延迟或明确的部署成本上限，现有结果不足以给出保证；需要用自己的数据重新测。

决定采用前，先做一个小型、条件可控的验证：在同一批音频上比较有/无热词或对话上下文、长音频、低音量与噪声、不同年龄组，并分别记录 CER/WER、目标词召回、人工格式评价、延迟和吞吐。然后再检查 3 个尚缺的证据：组件消融、摘要和热词单独评测、以及强化学习各阶段是否真的带来稳定增益。只有这些条件与论文的评测条件对齐，合计错误率的最低值才可能转化为你的场景收益。

<details>
<summary>📎 论文与评分元数据</summary>

排名：前50% | 文档类型：系统技术报告 | [arXiv 原文](https://arxiv.org/abs/2611.14908v1)

</details>

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。

- 评分规则：type-aware-v1

- 评分模型：deepseek-v4.1-flash

- 评分请求协议：openai_responses

---

[← 返回 2026-11-13 语音/音乐/音频论文速递](/audio-paper-digest-blog/posts/2026-11-13/)
