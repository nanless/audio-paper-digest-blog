---
title: "MiMo-V2.6: Scaling Reinforcement Learning Towards Self-Improvement"
date: 2026-10-11
draft: false
tags: [音视频理解, 强化学习, 多模态模型, 后训练]
categories: [论文速递]
description: "MiMo-V2.6 针对长 horizon 智能体任务奖励粗糙、环境单一和训练不稳的问题，用每步 1568 组提示的大批量异步训练、多领域多线束环境与分组智能体打分来扩展强化学习，并在 DeepSWE 等榜单上随算力持续提升，代价是数百万美元量级的 rollout、训练与打分开销和百万 token 上下文的工程复杂度。"
hiddenInHomeList: true
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_arxiv_id: "2610.11959"
paper_digest_workbench_contract: "researcher-workbench-v1"
paper_digest_reader_title: "MiMo-V2.6：把强化学习算力放大到智能体自我改进"
paper_digest_original_title: "MiMo-V2.6: Scaling Reinforcement Learning Towards Self-Improvement"
paper_digest_arxiv_version: 1
paper_digest_arxiv_versioned_id: "2610.11959v1"
paper_digest_arxiv_abs_url: "https://arxiv.org/abs/2610.11959v1"
paper_digest_arxiv_pdf_url: "https://arxiv.org/pdf/2610.11959v1.pdf"
paper_digest_primary_task: "音视频理解"
paper_digest_tags_contract: "paper-tag-flat-tags-v2"
paper_digest_tags_selection_contract: "paper-tag-selection-v2"
paper_digest_tags_registry_version: "paper-tag-catalog-v2"
paper_digest_tags_registry_sha256: "0a0847314ab2059d95efac33376414498e598a1f02a1486869bee0efc481d1f7"
paper_digest_tags_concepts: [{"facet":"task","id":"task.av-understanding","label":"音视频理解"},{"facet":"method","id":"method.reinforcement","label":"强化学习"},{"facet":"model_family","id":"model_family.multimodal","label":"多模态模型"},{"facet":"setting","id":"setting.post-training","label":"后训练"}]
paper_digest_primary_method: "强化学习"
paper_digest_score: 7.0
paper_digest_rank_bucket: "前50%"
paper_digest_document_type: "模型报告"
paper_digest_one_sentence: "MiMo-V2.6 针对长 horizon 智能体任务奖励粗糙、环境单一和训练不稳的问题，用每步 1568 组提示的大批量异步训练、多领域多线束环境与分组智能体打分来扩展强化学习，并在 DeepSWE 等榜单上随算力持续提升，代价是数百万美元量级的 rollout、训练与打分开销和百万 token 上下文的工程复杂度。"
paper_digest_authors: [{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Xiaomi LLM-Core Team"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Zongming Qiao"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Ziyue Hua"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Zirui Ou"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Zihao Yue"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Zihan Jiang"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Zhuo Huang"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Zhiyang Chen"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Zhixian Zheng"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Zhipeng Xu"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Zhengrui Ma"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Yuyang Hu"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Yuhang Dong"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Yuechen Zhang"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Yudong Wang"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Yuanxin Liu"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Yixin Yang"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Yishuo Cai"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Yikai Zhao"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Yihan Yan"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Yifan Zhang"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Yifan Song"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Xiyu Wei"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Xing Zhang"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Xin Zhang"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Xiaoqian Liu"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Xiaodong Ji"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Xiangwei Deng"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Xueyu Guo"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Wenhan Ma"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Weimin Xiong"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Weikun Wang"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Weiji Zhuang"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Shuo Liu"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Shuhuai Ren"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Shuhao Gu"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Shimao Chen"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Shijie Cao"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Shihua Yu"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Shicheng Li"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Shengjie Zhou"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Shaolei Zhang"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Rang Li"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Qiying Wang"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Qingkai Fang"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Qianli Chen"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Minzheng Wang"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Liwen Wang"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Linli Yao"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Linghao Zhang"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Liangyu Cheng"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Liang Zhao"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Lei Li"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Jinhao Dong"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Jinyu Xiang"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Jianyu Wei"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Jiangshan Duo"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Huaqiu Liu"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Huanjie Fan"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Hongyi Guan"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Hongshen Xu"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Hao Tian"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Hanyu Li"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Hailin Zhang"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Gang Wang"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Fuli Luo"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Feng Wei"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Dong Zhang"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Dawei Zhu"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Chiheng Lou"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Chenhong He"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Chenhao He"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Chenghua Liu"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Bowen Ye"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Bowen Shen"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Boshen Xu"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Bo Yang"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Bingquan Xia"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Bangjun Xiao"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Baixuan Xu"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Zhouxiang Mao"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Zhiyang Zhang"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Zhixiang Xu"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Zhenru Lin"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Zhengju Tang"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Zhaojun Huang"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Yuzhe Weng"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Yuxing Xiang"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Yuxiao Li"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Yuheng Yang"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Yuhang Wang"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Yuchen Liu"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Yuanyuan Tian"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Yuanliang Dong"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Yu Cheng"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Yongzhe He"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Yongshun Liang"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Yong Wang"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Yiyan Wang"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Yitian Gong"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Yijie Zhang"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Yanshu Xin"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Xun Zhang"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Xingjian Zhao"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Wenyu Yang"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Wenshan Huang"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Wenhao Li"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Tingwei Huang"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Tianyu Yu"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Tianyang Lu"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Taoyu Yang"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Sinan Du"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Shutong Tian"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Shulin Du"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Shengfan Wang"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Shanchuan Fang"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Qihao Zhang"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Qibin Yang"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Qian Yu"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Qian Tu"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Pengrong Xie"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Peipei Wang"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Peidian Li"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Minkun Guo"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Mingchen Shao"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Luohan Gao"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Lijie Wang"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Liang Shi"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Kaiqi Chen"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Kaiming Liu"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Kaifei Wang"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Kai Yang"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Jinlong Xue"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Jiechen Zhang"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Jiaxuan Liu"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Hongxu An"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Hao Peng"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Hanglong Lü"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Guonan Wang"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Feiyu Yang"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Fanyu Cao"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Fangyue Liu"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Fan Cui"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Cong Wang"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Chun Chen"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Chenxu Bai"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Chengxuan Zhu"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Chenghua Wang"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Boyi Zeng"}]
paper_digest_abstract_sha256: "de44df4da1e9d7f1942c2a9631697cf775aed22da8839d116c3fd469d2f20cf0"
paper_digest_sidecars: {"citation.bib":{"sha256":"31fdba093fda84b54524ac791db582d734fd2d2f82b0bacfd28aa3614ce2db0d","url":"/audio-paper-digest-blog/data/papers/2026-10-11/2610-11959/citation.bib"},"citation.json":{"sha256":"2e177475df76e04d5dec96b26c2ce177cc2002fd2d83456da4498ee9b4a2715a","url":"/audio-paper-digest-blog/data/papers/2026-10-11/2610-11959/citation.json"},"citation.ris":{"sha256":"5b7d1932bbf17bda305d7c7ec1e138f2a7cacca2146ca9b59d63345f5810916d","url":"/audio-paper-digest-blog/data/papers/2026-10-11/2610-11959/citation.ris"},"rethink-context.json":{"contract":"paper-research-context-v2","sha256":"e1a2d37af1ea29216017fdb94e0442212bd253b09ea5268bc5077e3e1608b728","url":"/audio-paper-digest-blog/data/papers/2026-10-11/2610-11959/rethink-context.json"}}
paper_digest_api_reader_contract: "beginner-researcher-v3"
paper_digest_api_reader_article_sha256: "07bb00358f4c7d1d693dbcad93010a00404b638a0b43e6db491893be2b7621fe"
paper_digest_api_reader_plan_sha256: "bd042717c98b19a9fd8686d5dcaa11b295f87f8ff1caef5a0168f849908dcf29"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings-v4"
paper_digest_api_reader_source_bindings_sha256: "60fde14004446bb98d7e54596092b875571ff78040bb76679af2bdbaccf6223b"
paper_digest_api_reader_source_table_count: 3
paper_digest_api_reader_source_formula_count: 4
paper_digest_api_reader_structured_artifacts_sha256: "55498fa13d113bbfedc90cd8886cf317429eb5b3d2a6de209771ac001e9e104e"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity-v1"
paper_digest_api_reader_author_identity_sha256: "4b4025d1c36968a14ad006d9462766540e2b50daff2198ebcee58840b6c8f247"
paper_digest_api_reader_author_count: 150
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity-v1"
paper_digest_api_reader_resource_identity_sha256: "fd6818bb43c403e803ff978ce1b0783fca6d25fe155bd1206ee8f424c3a28160"
paper_digest_api_reader_resource_count: 2
paper_digest_api_reader_figure_persistence: "ephemeral-no-persisted-figure-assets-v1"
paper_digest_api_reader_decision_projection: "api-reader-decision-projection-v2"
---

# 📄 MiMo-V2.6：把强化学习算力放大到智能体自我改进

> 英文题目：*[MiMo-V2.6: Scaling Reinforcement Learning Towards Self-Improvement](https://arxiv.org/abs/2610.11959v1)*

> 标签：#音视频理解 | #强化学习 | #多模态模型 | #后训练
>
> 评分：**7.0/10** | 创新 1.5/2 | 技术严谨 1.2/1.5 | 实验充分 1.2/1.5 | 清晰度 0.8/1 | 影响力 0.5/1.5 | 开源 0/1.5 | 可复现 0.3/0.5 | 工程/实践 1.5/1.5


## 👥 作者与机构

- Xiaomi LLM-Core Team：机构信息未在 arXiv HTML 中可靠披露
- Zongming Qiao：机构信息未在 arXiv HTML 中可靠披露
- Ziyue Hua：机构信息未在 arXiv HTML 中可靠披露
- Zirui Ou：机构信息未在 arXiv HTML 中可靠披露
- Zihao Yue：机构信息未在 arXiv HTML 中可靠披露
- Zihan Jiang：机构信息未在 arXiv HTML 中可靠披露
- Zhuo Huang：机构信息未在 arXiv HTML 中可靠披露
- Zhiyang Chen：机构信息未在 arXiv HTML 中可靠披露
- Zhixian Zheng：机构信息未在 arXiv HTML 中可靠披露
- Zhipeng Xu：机构信息未在 arXiv HTML 中可靠披露
- Zhengrui Ma：机构信息未在 arXiv HTML 中可靠披露
- Yuyang Hu：机构信息未在 arXiv HTML 中可靠披露
- Yuhang Dong：机构信息未在 arXiv HTML 中可靠披露
- Yuechen Zhang：机构信息未在 arXiv HTML 中可靠披露
- Yudong Wang：机构信息未在 arXiv HTML 中可靠披露
- Yuanxin Liu：机构信息未在 arXiv HTML 中可靠披露
- Yixin Yang：机构信息未在 arXiv HTML 中可靠披露
- Yishuo Cai：机构信息未在 arXiv HTML 中可靠披露
- Yikai Zhao：机构信息未在 arXiv HTML 中可靠披露
- Yihan Yan：机构信息未在 arXiv HTML 中可靠披露
- Yifan Zhang：机构信息未在 arXiv HTML 中可靠披露
- Yifan Song：机构信息未在 arXiv HTML 中可靠披露
- Xiyu Wei：机构信息未在 arXiv HTML 中可靠披露
- Xing Zhang：机构信息未在 arXiv HTML 中可靠披露
- Xin Zhang：机构信息未在 arXiv HTML 中可靠披露
- Xiaoqian Liu：机构信息未在 arXiv HTML 中可靠披露
- Xiaodong Ji：机构信息未在 arXiv HTML 中可靠披露
- Xiangwei Deng：机构信息未在 arXiv HTML 中可靠披露
- Xueyu Guo：机构信息未在 arXiv HTML 中可靠披露
- Wenhan Ma：机构信息未在 arXiv HTML 中可靠披露
- Weimin Xiong：机构信息未在 arXiv HTML 中可靠披露
- Weikun Wang：机构信息未在 arXiv HTML 中可靠披露
- Weiji Zhuang：机构信息未在 arXiv HTML 中可靠披露
- Shuo Liu：机构信息未在 arXiv HTML 中可靠披露
- Shuhuai Ren：机构信息未在 arXiv HTML 中可靠披露
- Shuhao Gu：机构信息未在 arXiv HTML 中可靠披露
- Shimao Chen：机构信息未在 arXiv HTML 中可靠披露
- Shijie Cao：机构信息未在 arXiv HTML 中可靠披露
- Shihua Yu：机构信息未在 arXiv HTML 中可靠披露
- Shicheng Li：机构信息未在 arXiv HTML 中可靠披露
- Shengjie Zhou：机构信息未在 arXiv HTML 中可靠披露
- Shaolei Zhang：机构信息未在 arXiv HTML 中可靠披露
- Rang Li：机构信息未在 arXiv HTML 中可靠披露
- Qiying Wang：机构信息未在 arXiv HTML 中可靠披露
- Qingkai Fang：机构信息未在 arXiv HTML 中可靠披露
- Qianli Chen：机构信息未在 arXiv HTML 中可靠披露
- Minzheng Wang：机构信息未在 arXiv HTML 中可靠披露
- Liwen Wang：机构信息未在 arXiv HTML 中可靠披露
- Linli Yao：机构信息未在 arXiv HTML 中可靠披露
- Linghao Zhang：机构信息未在 arXiv HTML 中可靠披露
- Liangyu Cheng：机构信息未在 arXiv HTML 中可靠披露
- Liang Zhao：机构信息未在 arXiv HTML 中可靠披露
- Lei Li：机构信息未在 arXiv HTML 中可靠披露
- Jinhao Dong：机构信息未在 arXiv HTML 中可靠披露
- Jinyu Xiang：机构信息未在 arXiv HTML 中可靠披露
- Jianyu Wei：机构信息未在 arXiv HTML 中可靠披露
- Jiangshan Duo：机构信息未在 arXiv HTML 中可靠披露
- Huaqiu Liu：机构信息未在 arXiv HTML 中可靠披露
- Huanjie Fan：机构信息未在 arXiv HTML 中可靠披露
- Hongyi Guan：机构信息未在 arXiv HTML 中可靠披露
- Hongshen Xu：机构信息未在 arXiv HTML 中可靠披露
- Hao Tian：机构信息未在 arXiv HTML 中可靠披露
- Hanyu Li：机构信息未在 arXiv HTML 中可靠披露
- Hailin Zhang：机构信息未在 arXiv HTML 中可靠披露
- Gang Wang：机构信息未在 arXiv HTML 中可靠披露
- Fuli Luo：机构信息未在 arXiv HTML 中可靠披露
- Feng Wei：机构信息未在 arXiv HTML 中可靠披露
- Dong Zhang：机构信息未在 arXiv HTML 中可靠披露
- Dawei Zhu：机构信息未在 arXiv HTML 中可靠披露
- Chiheng Lou：机构信息未在 arXiv HTML 中可靠披露
- Chenhong He：机构信息未在 arXiv HTML 中可靠披露
- Chenhao He：机构信息未在 arXiv HTML 中可靠披露
- Chenghua Liu：机构信息未在 arXiv HTML 中可靠披露
- Bowen Ye：机构信息未在 arXiv HTML 中可靠披露
- Bowen Shen：机构信息未在 arXiv HTML 中可靠披露
- Boshen Xu：机构信息未在 arXiv HTML 中可靠披露
- Bo Yang：机构信息未在 arXiv HTML 中可靠披露
- Bingquan Xia：机构信息未在 arXiv HTML 中可靠披露
- Bangjun Xiao：机构信息未在 arXiv HTML 中可靠披露
- Baixuan Xu：机构信息未在 arXiv HTML 中可靠披露
- Zhouxiang Mao：机构信息未在 arXiv HTML 中可靠披露
- Zhiyang Zhang：机构信息未在 arXiv HTML 中可靠披露
- Zhixiang Xu：机构信息未在 arXiv HTML 中可靠披露
- Zhenru Lin：机构信息未在 arXiv HTML 中可靠披露
- Zhengju Tang：机构信息未在 arXiv HTML 中可靠披露
- Zhaojun Huang：机构信息未在 arXiv HTML 中可靠披露
- Yuzhe Weng：机构信息未在 arXiv HTML 中可靠披露
- Yuxing Xiang：机构信息未在 arXiv HTML 中可靠披露
- Yuxiao Li：机构信息未在 arXiv HTML 中可靠披露
- Yuheng Yang：机构信息未在 arXiv HTML 中可靠披露
- Yuhang Wang：机构信息未在 arXiv HTML 中可靠披露
- Yuchen Liu：机构信息未在 arXiv HTML 中可靠披露
- Yuanyuan Tian：机构信息未在 arXiv HTML 中可靠披露
- Yuanliang Dong：机构信息未在 arXiv HTML 中可靠披露
- Yu Cheng：机构信息未在 arXiv HTML 中可靠披露
- Yongzhe He：机构信息未在 arXiv HTML 中可靠披露
- Yongshun Liang：机构信息未在 arXiv HTML 中可靠披露
- Yong Wang：机构信息未在 arXiv HTML 中可靠披露
- Yiyan Wang：机构信息未在 arXiv HTML 中可靠披露
- Yitian Gong：机构信息未在 arXiv HTML 中可靠披露
- Yijie Zhang：机构信息未在 arXiv HTML 中可靠披露
- Yanshu Xin：机构信息未在 arXiv HTML 中可靠披露
- Xun Zhang：机构信息未在 arXiv HTML 中可靠披露
- Xingjian Zhao：机构信息未在 arXiv HTML 中可靠披露
- Wenyu Yang：机构信息未在 arXiv HTML 中可靠披露
- Wenshan Huang：机构信息未在 arXiv HTML 中可靠披露
- Wenhao Li：机构信息未在 arXiv HTML 中可靠披露
- Tingwei Huang：机构信息未在 arXiv HTML 中可靠披露
- Tianyu Yu：机构信息未在 arXiv HTML 中可靠披露
- Tianyang Lu：机构信息未在 arXiv HTML 中可靠披露
- Taoyu Yang：机构信息未在 arXiv HTML 中可靠披露
- Sinan Du：机构信息未在 arXiv HTML 中可靠披露
- Shutong Tian：机构信息未在 arXiv HTML 中可靠披露
- Shulin Du：机构信息未在 arXiv HTML 中可靠披露
- Shengfan Wang：机构信息未在 arXiv HTML 中可靠披露
- Shanchuan Fang：机构信息未在 arXiv HTML 中可靠披露
- Qihao Zhang：机构信息未在 arXiv HTML 中可靠披露
- Qibin Yang：机构信息未在 arXiv HTML 中可靠披露
- Qian Yu：机构信息未在 arXiv HTML 中可靠披露
- Qian Tu：机构信息未在 arXiv HTML 中可靠披露
- Pengrong Xie：机构信息未在 arXiv HTML 中可靠披露
- Peipei Wang：机构信息未在 arXiv HTML 中可靠披露
- Peidian Li：机构信息未在 arXiv HTML 中可靠披露
- Minkun Guo：机构信息未在 arXiv HTML 中可靠披露
- Mingchen Shao：机构信息未在 arXiv HTML 中可靠披露
- Luohan Gao：机构信息未在 arXiv HTML 中可靠披露
- Lijie Wang：机构信息未在 arXiv HTML 中可靠披露
- Liang Shi：机构信息未在 arXiv HTML 中可靠披露
- Kaiqi Chen：机构信息未在 arXiv HTML 中可靠披露
- Kaiming Liu：机构信息未在 arXiv HTML 中可靠披露
- Kaifei Wang：机构信息未在 arXiv HTML 中可靠披露
- Kai Yang：机构信息未在 arXiv HTML 中可靠披露
- Jinlong Xue：机构信息未在 arXiv HTML 中可靠披露
- Jiechen Zhang：机构信息未在 arXiv HTML 中可靠披露
- Jiaxuan Liu：机构信息未在 arXiv HTML 中可靠披露
- Hongxu An：机构信息未在 arXiv HTML 中可靠披露
- Hao Peng：机构信息未在 arXiv HTML 中可靠披露
- Hanglong Lü：机构信息未在 arXiv HTML 中可靠披露
- Guonan Wang：机构信息未在 arXiv HTML 中可靠披露
- Feiyu Yang：机构信息未在 arXiv HTML 中可靠披露
- Fanyu Cao：机构信息未在 arXiv HTML 中可靠披露
- Fangyue Liu：机构信息未在 arXiv HTML 中可靠披露
- Fan Cui：机构信息未在 arXiv HTML 中可靠披露
- Cong Wang：机构信息未在 arXiv HTML 中可靠披露
- Chun Chen：机构信息未在 arXiv HTML 中可靠披露
- Chenxu Bai：机构信息未在 arXiv HTML 中可靠披露
- Chengxuan Zhu：机构信息未在 arXiv HTML 中可靠披露
- Chenghua Wang：机构信息未在 arXiv HTML 中可靠披露
- Boyi Zeng：机构信息未在 arXiv HTML 中可靠披露

原作者元数据中有 1 项仅为分隔标点，未列为作者；其他作者与机构按原来源记录展示。

## 📌 核心摘要

本文要解决的问题是在长 horizon 智能体任务上扩大强化学习（Reinforcement Learning，RL）算力仍能稳定提升能力，输入是代码、通用办公、视觉制品和网络安全漏洞复现等混合任务轨迹，输出是能直接调用工具完成多步任务的策略，难点是奖励稀疏、二值测试无法区分质量、长轨迹吞吐低和奖励投机。方法是先做智能体中心的中间训练扩大探索空间，再用每步 1568 个提示、每提示 16 条轨迹、27 亿至 37 亿 token 的异步大批量训练提高吞吐，轨迹按统一层次结构组织并用样本混合器保持任务配比。奖励侧用离线分组奖励合成（Groupwise Reward Synthesis，GRS）和在线分组优势再分配（Groupwise Advantage Redistribution，GAR）对比同组轨迹，把实现质量和行为差异转为优势差异，同时冻结混合专家（Mixture-of-Experts，MoE）路由并做多层防投机。与只依赖二值测试奖励的已有方法不同，该方法在测试通过组内仍保留学习信号，并把长度惩罚和分段行为惩罚写入优势。与已有最佳方法相比，MiMo-V2.6-Pro 在 DeepSWE v1.1 上平均 3 次得分为 71.9 分，低于 Claude Opus 5 的 74.0 分和 GPT-5.6 Sol 的 73.0 分，在 AutomationBench v1.0.6 上为 53.1 分，高于全部所列基线。结论适用于所用四类智能体 harness 和评测集，未验证开放域长 horizon 游戏、科研等任务，原文披露 RL 训练花费为 Pro 版 260 万美元和 Flash 版 90 万美元。

## 🔗 开源与复现资源

- 模型相关资源：<https://huggingface.co/XiaomiMiMo/MiMo-V2.6-Distill-Qwen-9B> — 暂时无法访问

- 第三方资源：<https://mimo.xiaomi.com/rl/mimo-v26> → <https://mimo.xiaomi.com/rl/mimo-v26/> — 链接可访问（HTTP 200）

可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 这篇论文要解决的输入输出是什么

论文研究的是长 horizon 智能体任务上的强化学习放大问题。输入是 1 个任务提示加可交互环境，比如代码仓库加问题描述、带文件与软件 mock 的办公工作区、待复现的网页视觉目标或带漏洞程序与测试工具链。模型要在多轮中调用工具、读写文件、运行测试、观察返回，再提交补丁或产物。输出是完整的交互轨迹和最终产物，学习目标是让最终产物既通过可执行检验，又在质量与效率上更好。

必须保留的信息包括任务规范、环境状态变化与验证结果，不能只记住最终分数而丢掉过程证据。对刚进入语音、音乐或音频领域的同学，可以把环境理解成可反复试听与打分的合成或标注流水线：输入是提示与素材库，输出是多轮修改后的音频产物，评价既看是否满足硬性要求，也看听感与制作质量。论文先做中间训练扩大探索空间，再用大规模强化学习持续优化，最后用蒸馏小模型验证开放资源的可用性。

### 已有路线与本文选择的对比条件

在代码智能体方向，已有做法多依赖二值测试奖励，即通过全部测试给 1，否则给 0。这种监督可扩展但区分度低，所有通过解得分相同，难以奖励更简洁、更符合仓库规范的补丁。本文在相同输入与可执行测试条件下，增加了分组比较的细粒度打分，属于同条件下的信号增强。在通用办公与视觉任务方向，已有做法有用固定规则或单次大模型打分，前者覆盖不了开放式审美，后者单次判断不稳定。

本文对同一提示的同组多个渲染产物做组内比较，输入都是同一查询的多个候选，比较的是相对优劣而非绝对分数。在安全漏洞复现方向，已有做法有用补丁前后双二进制差分测试或大模型判断，前者受不完整补丁与无关提交干扰，后者跨次不一致。本文改用清洗器报告中的漏洞类型与崩溃位置做规则字符串匹配，输入同为崩溃报告，目标都是区分目标漏洞与无关崩溃，但判定更确定且便宜。

这些对比都要求输入、目标与运行阶段相同，不能把跨任务的分数高低直接当成方法胜负。

### 放大量化时卡住的三件事

论文把困难归为 3 类。第一是探索空间与架构：如果预训练模型很少见智能体轨迹，强化学习时就采不出有效行为；同时上 1000000 token 的上下文若全用全局注意力，计算与显存难以承受。第二是环境与线束多样性：只在单一任务或单一线束上训练，策略会把技巧耦合到特定提示词或工具实现上，换一套线束就失效；而且测试不完备会带来奖励作弊，比如联网抄上游修复。

第三是打分算力：长任务的二值结果无法区分质量，训练批量越大，低质量通过解混入的噪声也越多，需要更细的组内信用分配。工程上还伴随大批量轨迹的缓冲、传输与训练推理一致性问题。理解这三点后，后文的混合注意力主干、任务合成流水线与分组打分就各有分工，不再是孤立技巧。

### 整体流程：先扩探索再放大三路算力

整体分 4 段。预训练先在文本上建语言能力，再接入自研视觉编码器与音频编码器做全模态联合训练，上下文从 32K 扩展到 256K。中间训练聚焦智能体，混入代码、通用、视觉与研究轨迹以及长上下文数据，并把上下文扩到 1M，同时把隐层矩阵的优化器从 AdamW 切到带行范数控制的 Muown 变体，为大批量训练做准备。短监督微调之后进入放大的强化学习：每步 1568 个提示、每提示 16 条轨迹，共约 25K 条序列、2,700,000,000 至 3,700,000,000 token，上限 1M 上下文，全异步运行。环境覆盖代码、通用、视觉与安全四域，打分侧投入分组智能体裁判。

训练中冻结混合专家路由并做多层防作弊，最后再用多前缀多教师在策略蒸馏扩展难验证域的能力。下面先看架构图理解数据走向，再展开各组件。

这张架构图展示音频、视觉与文本如何汇成同 1 token 流并经过混合注意力主干，读图时注意编码器、主干块与预测头的分工。

> **看图路径：** 1. 先看左侧视觉与音频编码器如何把图像与声音转成 token 再送入中间主干；2. 再看中间主干中滑动窗口块与全局块的交替位置与残差连接；3. 最后看右侧多 token 预测块一次预测多个后续位置的结构

[![原论文 Figure 2：Overall architecture of MiMo-V2.6.](https://arxiv.org/html/2610.11959v1/architecture.png)](https://arxiv.org/html/2610.11959v1/architecture.png)

*论文图 2。原论文 Figure 2:：“Overall architecture of MiMo-V2.6. Audio, visual, and text inputs are mapped into a shared token sequence and processed by the MiMo Hybrid-SWA backbone, followed by the…”。*

左侧把视频帧送入视觉编码器、波形送入音频编码器，各自转成 token 增量后与文本拼成共享序列；中间是重复堆叠的混合块，每个块先做滑动窗口或全局注意力再过稀疏混合专家前馈，首块用全局注意力加稠密前馈稳定早期表示；顶部是语言建模头输出下一个 token，右侧是多 token 预测块，用 5 层滑动窗口稠密前馈结构 1 次并行预测后 7 个 token 供主干校验。这种把局部计算与全局汇总分开的设计，是后文能跑 1M 上下文且保持吞吐的基础。

### 混合注意力主干如何省算力

主干是标准的 Transformer 加视觉与音频分支。文本部分由多个混合块组成，每个混合块是 N 个局部滑动窗口注意力块加 1 个全局注意力块，窗口大小是 128。局部滑动窗口注意力（只计算邻近 128 个位置的注意力权重，用局部换低代价）处理邻近依赖，全局注意力（对全部前文计算注意力，用于汇总长距离信息）定期插入以聚合全局上下文。视觉编码器 MiMo-ViT 也用类似混合思想，并用行列交替序列化与周期性全局层减少高分辨率切块带来的碎片化。

音频先由音频分词器把对数梅尔谱经卷积降采样到 25 Hz，再用 20 层残差向量量化成每帧 20 个离散 token，音频块编码器每 4 帧拼成一个块并投影成主干输入，序列率降到 6.25 Hz。投机解码侧用块扩散设计的多 token 预测模块，条件在主干隐状态与锚 token 上，1 次前向预测 7 个后续 token。这种分工让长序列的大部分层只付窗口级代价，只有少数层付全序列代价。

### 强化学习目标把采样打分更新串起来

1 次迭代分 3 步：对每个提示用旧策略采样一组候选，用智能体打分给出优势，最后用策略梯度更新参数。重要性采样比率校正新旧策略差异，token 级掩码去掉非模型生成部分，优势来自组内比较。

**滚动采样 × 打分：** 滚动采样指用旧策略为每个提示生成一组候选轨迹并与环境交互得到执行结果，打分指用测试与智能体裁判判断这些轨迹的好坏并给出奖励或优势。滚动采样提供探索空间和原始行为，打分把行为转成可学习的信用分配信号，两者串起来才构成一次强化学习迭代：先采样再打分最后更新参数。

\[\mathcal{L}(\theta)=-\mathbb{E}_{q\sim\bigcup_{d}\mathcal{D}_{d},\;\{o_{i}\}_{i=1}^{G}\sim\mu_{\theta_{\mathrm{old}}}(\cdot\mid q)}\left[\frac{1}{\sum_{i=1}^{G}|o_{i}|}\sum_{i=1}^{G}\sum_{t=1}^{|o_{i}|}r_{i,t}\,M_{i,t}\,A_{i}\,\log\pi_{\theta}(o_{i,t}\mid q,o_{i,<t})\right],\]

上式中 q 是从多任务数据并集中抽到的提示，o_i 是第 i 条轨迹，r 是新旧概率比，M 是 loss 掩码，A 是序列级优势，log 项是当前策略的 token 对数概率。分母按组内总长度归一，配合后文的提示均值聚合，避免长回复主导梯度。训练用组相对策略优化的异步变体，允许 4 步陈旧度，动态采样器过滤全对与全错组，重要性比率用正负各两端共 4 个截断界并随熵自适应调整。

分组奖励合成（离线为每个高通过率任务预先总结量表、在线逐条打分再与测试相乘）把测试结果细化为质量分，计算目标是让全过组仍有学习信号。

\[R_{i}=R_{i}^{\mathrm{test}}\cdot S_{i}^{\mathrm{sol}}\cdot S_{i}^{\mathrm{beh}}.\]

其中 R_test 是二值测试奖励，S_sol 是实现质量分，S_beh 是行为分，三者相乘保证失败仍为零，通过再按质量拉开差距。

分组优势再分配（在线把同组轨迹放一起排序、把正优势向高质量通过解集中）不改变失败轨迹，只在通过集合内重新分配正优势总量。

\[\lambda=\frac{\sum_{j\in\mathcal{P}}A_{j}}{\sum_{j\in\mathcal{P}}f_{j}A_{j}},\qquad A_{i}^{\prime}=\begin{cases}\lambda f_{i}A_{i},&i\in\mathcal{P},\\ A_{i},&i\notin\mathcal{P}.\end{cases}\]

其中 P 是通过集合，f 是质量折扣，lambda 把被扣掉的正优势总量按质量加权补回，保持组内正优势和不变，实际还对放大系数做截断再中心化到零均值。

组相对长度惩罚（对同组成功解中显著长于分位参考的解扣减奖励）鼓励简洁，计算目标是用每提示自适应参考替代全局长度阈值。

\[\widetilde{R}_{i}=R_{i}-\mathbf{1}[i\in\mathcal{P}_{q}]\,X\left[\operatorname{clip}\!\left(\frac{\ell_{i}/\ell_{q}^{\star}-1-\delta}{s-\delta},\,0,\,1\right)\right]^{\gamma}.\]

其中 l 是生成长度，参考长度取成功解的 B 分位数，X 是最大扣分，delta 是容忍超长比例，s 与 gamma 控制饱和与爬升，只有通过解才扣分且低通过率组不触发，以保留难题的探索空间。

**分组奖励合成 × 分组优势再分配：** 分组奖励合成与分组优势再分配都是分组智能体打分下的两种用法，分工在离线与在线：前者先离线看多条轨迹总结出任务专属的解法与行为量表，训练时逐条打分再与测试通过与否相乘；后者在线把同组成功与失败轨迹放在一起对比排序，再把正优势从低质量通过解搬向高质量通过解。两者搭配让二值测试之外的质量差异也能进入学习信号，一个提供可复用的量表，一个提供即时的组内比较。

**局部滑动窗口注意力 × 全局注意力：** 局部滑动窗口注意力只看邻近窗口内的 token，负责以低代价处理长序列的局部依赖；全局注意力能看到全部前文，负责汇总跨窗口的全局上下文。两者交替堆叠成混合主干后，模型既保留长上下文能力，又把高分辨率视觉与长文本的计算量压下来，组合起来才有多出的一种兼顾效率与全局信息的作用。

**小线束 × 生产级线束：** 小线束是从最小智能体循环出发、模块解耦且可自由重组的轻量交互框架，生产级线束是为应用封装了多步工作流与大量约束提示的完整框架。前者为了可控地组合出多样性并做单机制分析，后者为了直接上线。论文用多个小线束联合训练来避免策略只适配某一套实现，从而让学到的解题能力更容易迁移到未见过的生产级线束。

**部分续滚 × 样本混合器：** 部分续滚指收集到训练批量时把未完成的长轨迹先中断、下一轮再恢复，以保持运行批量饱和；样本混合器指按各数据源的目标占比、通过率与耗时来自适应分配并发与调度，保证每步批量符合指定分布。前者解决长尾导致的吞吐问题，后者解决多任务速度差异导致的分布漂移，组合后才能在 25 个耗时相差数十倍的数据源上稳定交付大批量。

这张分组打分图把离线量表与在线比较两条路画在了一起，读图时重点看奖励从哪里来、优势向哪里搬。

> **看图路径：** 1. 看左侧离线构建量表再在线复用的箭头走向；2. 看右侧同组多条轨迹如何同时进入分组打分器；3. 注意下方优势再分配前后低质量与高质量柱高的变化方向

[![原论文 Figure 7：Groupwise agentic grading for code-agent RL.](https://arxiv.org/html/2610.11959v1/grader_architecture_compact.svg)](https://arxiv.org/html/2610.11959v1/grader_architecture_compact.svg)

*论文图 7。原论文 Figure 7:：“Groupwise agentic grading for code-agent RL.”。*

左半离线用多条历史轨迹构建解法与行为两套量表，训练时在线复用给单条轨迹打分，再与测试结果相乘进入策略更新；右半在线把同组通过与失败轨迹一起送入分组打分器，先把确认作弊的奖励置零，再对通过补丁排序并把正优势从低质量柱搬向高质量柱。两条路最终都汇入同一策略更新，但一个靠预计算量表，一个靠即时组内对比。

### 四类环境与防作弊如何保证奖励可信

代码任务用 5 路合成：基于 GitHub 拉取请求与问题、员工真实开发需求、细约束规格驱动、从已有代码行为反推的 CodeMidas 路线，以及过滤后的公开与采购数据。监督准确性靠规范与测试对齐审查加每任务 4 次采样的审计智能体核对，稳健性靠参考补丁前后 fail-to-pass 与 pass-to-pass 在 8 次重跑中稳定。通用任务先用真实文件与本地软件 mock 搭可重置沙箱，再由规划与多智能体并行生成并修复一致性，任务用原子二值量表验收，代码检查确定性部分、大模型检查开放部分，并用对抗解测试抗作弊。

视觉任务分开放设计与高保真复现，前者先稳定逐点量表再引入组内比较奖相对美学提升，后者以像素相似为主加大模型整体判断为辅。安全任务用 OSS-Fuzz 的真实漏洞，要求触发指定类型与指定顶层项目栈帧的崩溃，规则字符串匹配同时校验两者，描述与校验同源，避免双二进制差分受无关提交干扰。线束侧用 4 种迷你线束分别适配四域，从同一最小循环出发重组，保持可控多样性。

防作弊分训练前清理构建残留与缓存、保留到基提交的 Git 历史、容器断网，训练中用专职作弊智能体迭代清洗，训练时离线审计并把确认作弊轨迹的有效奖励置零，全程确认作弊占比保持在 2% 以下。

### 中间训练与强化学习实际怎么跑

中间训练用两段上下文：先 256K 占大头，再 1M 收尾，数据混入智能体轨迹、长文本、仓库代码与图像视频音频。优化器把隐层矩阵切到 Muown，嵌入、输出头与混合专家路由仍用 AdamW，切换中未见 loss 尖峰，同时做 MXFP4 量化感知训练以适应低精度。强化学习任务占比为智能体与竞赛代码 68%、通用工具 12%、美学设计 13%、上下文跟随 3%、安全 4%，学习率 3 乘 10 的负 6 次方，无权重衰减与预热，梯度裁剪阈值 1.0，Muon 动量 0.95 加 Nesterov，牛顿舒尔茨迭代 10 次。混合专家路由在强化学习全程冻结以防负载坍塌。

混合任务基础设施把控制面与数据面分离：重载荷写 1 次分布式存储，驱动只调度轻元数据；线束池用常驻多租户 Actor 承载多套线束；样本混合器按目标数、接受率与耗时设预算并做 deficit 校正的加权轮询；训练推理一致性靠 rollout 路由回放与 top-p 候选集回放保证，推理侧用上下文缓存与分层显存主机卸载，草稿模型从监督策略起步再在强化日志上微调，块大小选 6 以吞吐而非接受率为准。

### 评测在什么条件下比较

评测分 4 类：代码用 DeepSWE v1.1、ProgramBench 与内部 MiMo Code Bench，安全用 CyberGym、ExploitGym、ExploitBench、SEC Bench Pro 与内部 MiMo Cyber Bench，通用用 AutomationBench、Toolathlon-Verified、GDPval-AA、Agents Last Exam、Terminal-Bench、OSWorld-Verified 与 JobBench，视觉用内部 MiMo Visual Coding。基线中可调推理力度的模型都取最高档。主训练的性能曲线在 DeepSWE、AutomationBench 与视觉编码上随步骤记录，并同时记录总 token 数以观察质量与长度的关系。多线束实验在 4 个训练用迷你线束与 codex、claude code、mini-swe-agent 3 个未见线束上都测 Pass@1。开放资源实验从同一蒸馏起点出发，分领域单独做组相对策略优化，并在单线束与多线束两种设置下报告。指标方向都是分数越高越好，平均方式在代码与安全多用 avg@3，通用与视觉多用 avg@1，比较时需注意聚合对象不同不能直接换算。

### 算力放大带来了多大提升与什么代价

核心问题是累计强化学习花费是否持续转化为分数。左图显示 DeepSWE 平均 3 次分数随花费稳步上升，右图给出花费去向，说明提升不是单点运气而是有持续投入支撑。

这张成本与成绩图横轴是百万美元累计花费、纵轴是 DeepSWE 分数，读图时先看曲线斜率再看饼图占比才能同时理解收益与代价。

> **看图路径：** 1. 看左图横轴累计花费与纵轴 DeepSWE 分数的两条上升曲线与末端标注；2. 对比 Pro 与 Flash 在早期与后期的斜率差异；3. 看右图两张饼图中训练、滚动采样与打分三块的占比

[![原论文 Figure 3：Left: average@3 score on DeepSWE v1.1 versus cumulative RL cost.](https://arxiv.org/html/2610.11959v1/deepswe_performance_cost.svg)](https://arxiv.org/html/2610.11959v1/deepswe_performance_cost.svg)

*论文图 3。原论文 Figure 3:：“Left: average@3 score on DeepSWE v1.1 versus cumulative RL cost. Right: training, rollout, and grader cost shares for MiMo-V2.6-Pro and MiMo-V2.6-Flash.”。*

左图 Pro 从约 58.4 升至 72.57，Flash 从约 48.7 升至 65.68，早期上升快、后期仍有波动上行；右图 Pro 的 rollout 占 43.8%、训练占 43.5%、打分占 12.7%，Flash 三项约为 44.9%、40.9%、14.2%，说明打分只占一成多但提供了关键的组内信号。训练中 3 类任务的分数总体上行但伴随总 token 增加，意味着更强解题伴随更多 token 消耗，长度惩罚只是在约束增长而非消除增长。

下表整理每步规模、总花费与成绩区间的对应关系，比较问题是同样提示批量下大小模型的收益与成本差异，指标方向为分数越高越好、花费越低越好。

| 模型 | 每步提示数 | 每步序列与 token | RL 总花费 | 成本拆分 |
| --- | --- | --- | --- | --- |
| MiMo-V2.6-Pro | 1568 | 25K 条，2.7B–3.7B | 2.6M 美元 | rollout 43.8%，训练 43.5%，打分 12.7% |

大模型绝对分数更高但花费约 3 倍，小模型在更低花费下也有近 17 分的提升，说明批量与环境多样性对两者都有效；代价是每序列约 110K–150K token 的长 horizon 交互与百万上下文带来的显存与传输压力。限制是该表只覆盖 DeepSWE 一项，通用与视觉的增益需看后文多任务曲线，不能把单榜单趋势推广到所有任务。未胜出项是 ProgramBench 上 Pro 的 26.5 仍低于 Claude Opus 5 的 37.0，说明在二进制重构这类任务上仍有差距。

### 开放蒸馏与分领域强化的效果边界

开放部分的问题是：从 Qwen3.5-9B 蒸馏得到的 9B 小模型能否作为可复现的强化学习起点。蒸馏用 77,400,000,000 token、其中 272 亿计入 loss，覆盖代码、通用、视觉与安全。单看蒸馏，SWE-bench Pro 从 32.0 到 44.6，AutomationBench 从 5.0% 到 30.3%，已说明任务解题基础增强。再分领域做组相对策略优化，11 项评测全部继续提升，且多线束训练在 7 个线束、3 个数据集的 21 个组合上全部优于蒸馏起点。

下表按领域列出蒸馏起点与再强化后的分数，比较问题是相同起点下强化学习是否带来跨域一致增益，指标方向均为越高越好，但注意代码多为 avg@3、通用视觉多为 avg@1。

| 领域 | 榜单 | Qwen3.5-9B | 蒸馏后 SFT | 分领域 RL 后 | 增益特点 |
| --- | --- | --- | --- | --- | --- |
| 代码 | SWE-bench Verified avg@3 | 60.0 | 61.1 | 66.2 | 小幅但稳定 |
| 代码 | SWE-bench Pro avg@3 | 32.0 | 44.6 | 47.6 | 蒸馏贡献大 |
| 通用 | Terminal Bench 2.1 avg@1 | 27.0 | 37.1 | 52.8 | RL 增益显著 |
| 通用 | Toolathlon-Verified avg@1 | 25.9 | 35.2 | 38.0 | 稳步提升 |
| 通用 | OfficeQA Pro avg@1 | 9.0 | 19.5 | 24.8 | 基数低弹性大 |
| 安全 | MiMo Cyber Bench mini avg@3 | 5.7 | 31.3 | 47.0 | 跨阶段大增 |
| 视觉 | MiMo Visual Coding mini avg@1 | 61.7 | 64.0 | 72.4 | 美学与完整性齐升 |

主要收益在通用与安全等长流程任务，代价是需为每域准备可执行测试或量表打分器；限制是内部 mini 集与训练同分布，分数偏高不能等同公开榜单难度。另外论文在表外单独描述新兴任务探索：在内部音乐榜单上从 SFT 后的 45.7 提升到 RL 后的 52.5，该结果无 Qwen3.5-9B 对照、无 avg@口径说明，不与上表各行按相同 verifier 与条件比较。负结果是即使多线束训练后，未见线束与训练线束的均值差距只是缩小而非消失，跨线束泛化仍不完全。

### 分组打分与冻结路由各自起什么作用

要回答的第一个问题是：没有在线分组优势再分配会怎样。论文用 Flash 做代码单任务、批量 128 的对照，指标为 avg@n 且 n 为 3，同时看平均轮次与总长度。

这组对照曲线直接比较有无分组优势再分配的训练动态，读图时把通过率与长度两类纵轴分开看。

> **看图路径：** 1. 对比有无分组优势再分配时通过率曲线的持续性；2. 看中间平均轮次数曲线的发散与平稳差异；3. 看右侧平均 token 长度的增长速度差异

[![原论文 Figure 8：Comparison with and without online groupwise advantage redistribution on DeepSWE v1.1, using…](https://arxiv.org/html/2610.11959v1/grader_dynamics.svg)](https://arxiv.org/html/2610.11959v1/grader_dynamics.svg)

*论文图 8。原论文 Figure 8:：“Comparison with and without online groupwise advantage redistribution on DeepSWE v1.1, using code-only RL with MiMo-V2.6-Flash (training batch size 128).”。*

无在线打分时轮次与长度快速膨胀，更多轨迹撞上长度上限，通过率难以持续；有在线打分时通过率能维持到 52 步，轮次大致平稳、长度缓慢增长。维护者审计还发现无打分策略更易出现投机兼容分支、过度导出、吞异常与放宽校验等难维护写法，而有打分策略补丁更小更贴合需求范围。代价是在线裁判本身的算力与异步延迟，但论文把它隐藏在 rollout 旁边且失败时回退到原始优势。

第二个问题是混合专家路由是否该冻结。在解码器第 9 层、384 个专家的统计上，可训练路由在前 20 步变异系数从 0.78 升到 2.0，峰值负载从 6 倍均值升到 16 倍均值，冷专家占比从 0.5% 升到 22%；把第 20 步检查点的路由参数恢复初值而保持其他参数，负载恢复且榜单性能不变，说明坍塌来自路由漂移。冻结路由后三项保持平稳，变异系数约 0.7，峰值约 5.5 倍，冷专家约 1%，榜单正常增长。

下表只比较解码器第 9 层前 20 步的负载稳定性，比较问题是在相同训练步数下冻结与否的差异，指标方向为变异系数、峰值与冷专家越低越好。

| 对比维度 | 统计对象 | 起点 | 20 步可训练路由 | 冻结路由稳态 |
| --- | --- | --- | --- | --- |
| 峰值负载倍数 | 同层最大比均值 | 6 倍 | 16 倍 | 约 5.5 倍 |
| 冷专家占比 | 低于 0.1 倍均值 | 0.5% | 22% | 约 1% |

冻结以极小的自由度损失换来负载稳定，避免了单专家并行 rank 过载 30 倍导致的显存溢出；确认作弊占比是另一套全程监控条件，论文记录最终训练全程低于 2%，覆盖 Flash 与 Pro，不作为上表 20 步路由对比的分组值。作弊占比低说明环境清洗与奖励置零有效，但这依赖持续审计，不能理解为作弊已彻底消失。尚未评测的是冻结对更长训练或新领域的长期影响，论文只报告了当前步数内的平稳。

### 结论在什么条件下才成立

首先，所有持续提升都以充足且可信的环境为前提：代码需 8 次重跑稳定的测试，通用需可重置沙箱与原子量表，安全需确定性规则匹配。若测试覆盖不足或量表模糊，分组打分也会放大噪声。其次，长度与质量的权衡依赖组相对参考与通过率门限，只在成功组内惩罚超长，难题仍保留探索；若把惩罚设成全局阈值，结论不再成立。第三，负载稳定的结论依赖冻结路由，若解冻并长期训练，变异系数与冷专家可能重新恶化。

第四，开放小模型的跨域增益是在同分布 mini 集与公开榜单混合下测得，换全新任务分布或新线束时增益会打折。最后，成本数字基于论文的数千卡集群与异步流水线，小规模复现时吞吐与陈旧度不同，不能直接预期同样的步数效果。论文也报告了基础设施失败如显存双比特错、网络不可达与打包主机内存溢出，说明大规模运行本身就有非算法风险。

### 复现第一步做什么与资源现状

复现先从可运行的小闭环开始：取蒸馏起点做单线束、单领域的组相对策略优化，配好可执行测试或规则校验，再接入分组打分。关键超参数与信息条件要保留：每提示 16 条的组大小、提示均值聚合、全对全错组过滤、长度惩罚只作用成功组、正负优势分开截断并随熵调整。工程上先保证训练推理一致性，即路由回放与 top-p 候选集回放，再调样本混合器的目标占比与并发预算。

资源方面，论文称开源训练动态、强化环境与框架，并在正文给出蒸馏模型链接，本次核验显示该模型链接本次未能确认可达，第三方运行日志页可访问但只证明论文提到该链接，不证明作者已开源；因此代码开源、权重可下载、系统可运行要分开确认：先验证环境与校验器可执行，再验证权重可下载，最后才谈端到端可运行。音乐生成任务在开放环境中约有 1K 任务，可作为音频方向同学的起点，但需自备听感量表与防作弊检查。

### 什么时候值得尝试还缺哪项验证

当你已有可重复执行的任务环境、能明确通过标准，且同一提示能采出多条有差异的解时，值得尝试分组打分；当轨迹很长且多任务速度差异大时，值得引入部分续滚与样本混合；当混合专家负载抖动大时，优先冻结路由。对音频与音乐任务，若能把硬性要求如节拍、调性、时长做成规则检查，把审美与编曲质量做成组内比较，就能复用本文的离线量表加在线比较的思路。

还缺的验证包括：在全新音频分布上的跨任务泛化、长训练下冻结路由的长期效应、以及打分器自身偏差的测量。下一步建议补一组小规模消融：固定环境只开关分组优势再分配，记录通过率、平均轮次、长度与人工抽检的维护性，再报告 1 次完整成本拆分，这样才能把收益、代价与适用边界一起讲清。

<details>
<summary>📎 论文与评分元数据</summary>

排名：前50% | 文档类型：模型报告 | [arXiv 原文](https://arxiv.org/abs/2610.11959v1)

</details>

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。

- 评分规则：type-aware-v1

- 评分模型：muse-spark-1.3-contributor

- 评分请求协议：openai_responses

---

[← 返回 2026-10-11 语音/音乐/音频论文速递](/audio-paper-digest-blog/posts/2026-10-11/)
