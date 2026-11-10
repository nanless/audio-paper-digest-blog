---
title: "AISHELL8-FISHEYE: A Fisheye Audio-Visual Dataset for Target Speaker Extraction with Distortion-Aware Baselines"
date: 2026-11-09
draft: false
tags: [目标说话人提取, 迁移学习, 音视频, 数据集, 基准测试]
categories: [论文速递]
description: "论文针对鱼眼畸变下唇动线索不可靠的问题，采集 47.03 小时中英双视角配对语料并用冻结的鱼眼头部姿态分支辅助唇读编码器与 TF-GridNet 分离器，在可训练唇编码器时把鱼眼 SI-SDRi 从 10.47 dB 提到 11.84 dB，但仍与普通相机差 7.49 dB 且冻结唇编码器时无效。"
hiddenInHomeList: true
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_arxiv_id: "2611.09368"
paper_digest_workbench_contract: "researcher-workbench"
paper_digest_workbench_schema_fingerprint: "1f09b594c317cc38e934de27a5b0e8ceb4baa50ef79bd4f8683dd9adea720fe7"
paper_digest_reader_title: "鱼眼镜头下还能看口型捞出目标说话人吗"
paper_digest_original_title: "AISHELL8-FISHEYE: A Fisheye Audio-Visual Dataset for Target Speaker Extraction with Distortion-Aware Baselines"
paper_digest_arxiv_version: 1
paper_digest_arxiv_versioned_id: "2611.09368v1"
paper_digest_arxiv_abs_url: "https://arxiv.org/abs/2611.09368v1"
paper_digest_arxiv_pdf_url: "https://arxiv.org/pdf/2611.09368v1.pdf"
paper_digest_primary_task: "目标说话人提取"
paper_digest_tags_contract: "paper-tag-flat-tags"
paper_digest_tags_schema_fingerprint: "27e36280a4b8d3df62ebe54d3ab037920f4d69feb2b554163f01bbae2caf4338"
paper_digest_tags_selection_contract: "paper-tag-selection"
paper_digest_tags_registry_version: "paper-tag-catalog"
paper_digest_tags_registry_sha256: "9673bc0122e1905a5dcfd8b223675400cc2fa4c36095bc0e5f817edf99a0ec5c"
paper_digest_tags_concepts: [{"facet":"task","id":"task.target-speaker","label":"目标说话人提取"},{"facet":"method","id":"method.transfer","label":"迁移学习"},{"facet":"signal","id":"signal.audiovisual","label":"音视频"},{"facet":"artifact","id":"artifact.dataset","label":"数据集"},{"facet":"artifact","id":"artifact.benchmark","label":"基准测试"}]
paper_digest_primary_method: "迁移学习"
paper_digest_score: 6.5
paper_digest_rank_bucket: "前50%"
paper_digest_document_type: "数据集与基准"
paper_digest_one_sentence: "论文针对鱼眼畸变下唇动线索不可靠的问题，采集 47.03 小时中英双视角配对语料并用冻结的鱼眼头部姿态分支辅助唇读编码器与 TF-GridNet 分离器，在可训练唇编码器时把鱼眼 SI-SDRi 从 10.47 dB 提到 11.84 dB，但仍与普通相机差 7.49 dB 且冻结唇编码器时无效。"
paper_digest_authors: [{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Peijun Yang"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Zhan Jin"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Juan Liu"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Hui Bu"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Xiaoyi Qin"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Ruyi Gan"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Hao Wang"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Ming Li"}]
paper_digest_abstract_sha256: "22f8639b1dd266682ffd13564b2c3fc722005738ce7bcca163b0cbc2377fbd5f"
paper_digest_sidecars: {"citation.bib":{"sha256":"6118a9d7c91ca209a58af8bf89a3247615588d5499bdb111b2995dfcdc1bb003","url":"/audio-paper-digest-blog/client/papers/2026-11-09/2611-09368/citation.bib"},"citation.json":{"sha256":"467d060d9db5095d4db239dd1f5816df40c8b55b1d54f262d0c0ee38a90e861c","url":"/audio-paper-digest-blog/client/papers/2026-11-09/2611-09368/citation.json"},"citation.ris":{"sha256":"f72bc0a8650c7f673ea97b70b383a77bbccde3bb4127bf86544847158f30d188","url":"/audio-paper-digest-blog/client/papers/2026-11-09/2611-09368/citation.ris"},"rethink-context.json":{"contract":"paper-research-context","schemaFingerprint":"5d4e79f7d3ee65b39ccb38281548bf20a1b2041ab7a27625eaf97ab9909a8383","sha256":"2abb4b8f63165e09825397bc6440531e51d968e2fd4113e866ed36dbcc806003","url":"/audio-paper-digest-blog/client/papers/2026-11-09/2611-09368/rethink-context.json"}}
paper_digest_api_reader_contract: "beginner-researcher"
paper_digest_api_reader_schema_fingerprint: "cd8baf5b8bda3a49eec64f6005931af63de4e9a13148cba5f354c661ca6e9df2"
paper_digest_api_reader_article_sha256: "95630f6741db177912ff6e7c8352fe4f791aa8680fede48a898ec5755ccc6092"
paper_digest_api_reader_plan_sha256: "16060c68d077e8399a28799f9b1e6559e7260d0574183966fb4e854bbd4d07ce"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings"
paper_digest_api_reader_source_binding_schema_fingerprint: "d2a2607a6e561909473022eb43f56332ee357af8568566a095c29083ffdec9cc"
paper_digest_api_reader_source_bindings_sha256: "acd27ec163cf421abdf7d089bfcb2ff04747f41c2d3f6a808beb664ae97d7714"
paper_digest_api_reader_source_table_count: 3
paper_digest_api_reader_source_formula_count: 4
paper_digest_api_reader_structured_artifacts_sha256: "eba3862e93f6606cc5ba2184b8768ed571a750eed4fc2f35831fbfc760e360e1"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity"
paper_digest_api_reader_author_identity_schema_fingerprint: "1e3fd3a9a56c9a5bf52df8df5022690b9a3fa92e83e934f295af87c0e258ed2f"
paper_digest_api_reader_author_identity_sha256: "3d2ddc573be388a2e594ad7697ab755e13a1e15909b5db7de1ab362509b95175"
paper_digest_api_reader_author_count: 8
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity"
paper_digest_api_reader_resource_identity_schema_fingerprint: "33b0be17118be61f39b85ce690c8da17e91f2864bb65e85284f60c40067328e0"
paper_digest_api_reader_resource_identity_sha256: "a070878e792a9a3b062e6fbec3a6a682eac216bf8e65eac668413610bfd7bbfe"
paper_digest_api_reader_resource_count: 2
paper_digest_api_reader_figure_persistence: "ephemeral-no-persisted-figure-assets-v1"
paper_digest_api_reader_decision_projection: "api-reader-decision-projection"
paper_digest_api_reader_decision_projection_schema_fingerprint: "e56feb5ab75c8710904916b898f73dab9bb18bdf65bb60b7ed2edf7f99cea860"
---

# 📄 鱼眼镜头下还能看口型捞出目标说话人吗

> 英文题目：*[AISHELL8-FISHEYE: A Fisheye Audio-Visual Dataset for Target Speaker Extraction with Distortion-Aware Baselines](https://arxiv.org/abs/2611.09368v1)*

<!--paper-tag-hierarchy-v1:start-->

**研究分类**

- **研究任务**：[音频分离](/audio-paper-digest-blog/papers/?concept=task.audio-separation) → [语音分离](/audio-paper-digest-blog/papers/?concept=task.speech-separation) → [目标说话人提取](/audio-paper-digest-blog/papers/?concept=task.target-speaker)
- **研究方法**：[迁移学习](/audio-paper-digest-blog/papers/?concept=method.transfer)
- **信号**：[音视频](/audio-paper-digest-blog/papers/?concept=signal.audiovisual)
- **研究产物**：[数据集](/audio-paper-digest-blog/papers/?concept=artifact.dataset)；[基准测试](/audio-paper-digest-blog/papers/?concept=artifact.benchmark)

<!--paper-tag-hierarchy-v1:end-->

> 评分：**6.5/10** | 创新 1.3/2 | 技术严谨 1/1.5 | 实验充分 1/1.5 | 清晰度 0.8/1 | 影响力 1/1.5 | 开源 0/1.5 | 可复现 0.3/0.5 | 工程/实践 1.1/1.5


## 👥 作者与机构

- Peijun Yang：机构信息未能在本次解析中与作者逐人可靠绑定
- Zhan Jin：机构信息未能在本次解析中与作者逐人可靠绑定
- Juan Liu：机构信息未能在本次解析中与作者逐人可靠绑定
- Hui Bu：机构信息未能在本次解析中与作者逐人可靠绑定
- Xiaoyi Qin：机构信息未能在本次解析中与作者逐人可靠绑定
- Ruyi Gan：机构信息未能在本次解析中与作者逐人可靠绑定
- Hao Wang：机构信息未能在本次解析中与作者逐人可靠绑定
- Ming Li：机构信息未能在本次解析中与作者逐人可靠绑定

## 📌 核心摘要

本文任务是从两人重叠语音中恢复目标说话人语音，输入为混合语音与同步鱼眼视频，难点是鱼眼径向畸变改变人脸与嘴唇几何，使普通视频上训练的唇部表示难以直接使用。方法先把唇部感兴趣区域序列送入唇读编码器提取与运动相关的嵌入，另一路把从鱼眼头部姿态估计迁移而来的编码器冻结后提取最高层空间特征，输出鱼眼空间嵌入。再把两路嵌入相加并插值到音频帧数后投影到频点维度得到视觉条件，将其与混合语谱图的实部和虚部拼接后送入卷积与TF-GridNet。最后由TF-GridNet建模时频依赖并预测复数掩码作用于混合短时傅里叶变换，经逆短时傅里叶变换得到目标波形。与已有唇条件分离方法的区别是增加了一条冻结的鱼眼迁移分支，并检验唇编码器冻结与更新两种训练方式，意味着空间特征只有在唇表示适配鱼眼输入时才被利用。在AISHELL8-FISHEYE相同音频混合的鱼眼测试条件下，可训练唇编码器加该分支的SI-SDRi即尺度不变信号失真比提升从10.47 dB提高到11.84 dB，高于同条件下不加分支的10.47 dB。该增益仅在唇编码器可训练时成立，冻结唇编码器时加分支使SI-SDRi即尺度不变信号失真比提升从10.01 dB降至9.91 dB而无增益，且与普通相机输入仍有较大差距，配对比较还混有视角与分辨率差异，移动说话人与真实对话等条件尚未验证。原文未披露训练、推理或部署成本。

## 🔗 开源与复现资源

- 第三方资源：<https://huggingface.co/datasets/phot0nqqq/AISHELL8-FISHEYE> — 链接可访问（HTTP 200）

- 第三方资源：<https://e181d4.github.io/AISHELL8-FISHEYE/> — 链接可访问（HTTP 200）

可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 要从重叠说话声里捞出一个人，视频能帮什么

目标说话人提取的输入是一段混合语音和一条指示谁是目标的辅助信息，目标是输出目标人干净波形，必须保留目标人的内容和音色并压住干扰人。本文研究的是音视目标说话人提取，也就是用同步视频代替注册语音来指示目标，视频处理的是说话人唇部随时间的变化，音频处理的是混合波形，输出是估计的目标波形。

当两个人同时说话且能量相当时，只靠声学很难决定每个时频点归谁，唇动提供了与音素开合对齐的时间线索，分离器可以按嘴开合的时刻去取对应语音。论文把这种思路放在鱼眼相机上，动机是可穿戴和机器人需要一个镜头看全屋并同时盯住对话人。

**目标说话人提取 × 唇动视觉线索：** 目标说话人提取是要从混合语音中恢复指定人的干净语音，唇动视觉线索是与音频同步的嘴部运动序列，它不需注册语音就能在声学重叠时指明哪段时间、哪个频带属于目标人，本文用它作为分离器的条件输入。

下面这张实拍图先建立直观，为什么广覆盖会带来后续的唇形不稳定问题，这对理解数据集和基线为什么这样设计很关键。这张图展示了装在机械臂上的鱼眼相机一次看到沙发、餐桌、天花板和机械臂本体的广覆盖能力，同时圆形边缘、弯曲的直线和底部被拉长的机械臂都显示了径向畸变。

> **看图路径：** 1. 先看圆形鱼眼边界内一次能装下哪些物体；2. 再看下方机械臂和远处直线景物被拉弯的程度；3. 体会人脸只占很小比例且位置决定变形

[![原论文 Figure 1：Real fisheye view from a robot-arm-mounted camera, showing wide scene coverage and radial…](https://arxiv.org/html/2611.09368v1/robot_FISHEYE.png)](https://arxiv.org/html/2611.09368v1/robot_FISHEYE.png)

*论文图 1。原论文 Figure 1:：“Real fisheye view from a robot-arm-mounted camera, showing wide scene coverage and radial distortion.”。*

从这张图可以看到，鱼眼的代价是几何不再保真，直线变弧线，越靠边缘拉伸越重。如果说话人站在不同位置，同一张嘴的形状和大小都会变，后续人脸检测和唇部裁剪拿到的输入就不一致，这正是普通视频上训练好的唇读表征直接搬过来会失效的原因。

### 已有方法走到了哪一步，本文接哪一棒

此前的音视提取工作主要解决视觉条件怎么做和多模态怎么融，包括处理目标缺席和稀疏重叠的情形，基本假设是唇部裁剪后的形状在时间上稳定可用。另一条线是鱼眼视觉本身，如图像矫正需要标定和重采样，特征自适应则直接在未矫正图上学习，论文引用的鱼眼头部姿态估计就属于后者。

本文没有提出新的通用分离器结构，它的定位是提供配对语料和可复现评测，再把一个已有的鱼眼姿态网络的特征迁移过来做基线组件。理解这一点很重要，后文所有关于畸变感知分支的结论都只是该迁移分支在该分离器上的表现，不是证明任何鱼眼特征都有效。

### 鱼眼带来的具体困难是什么

困难分两层。一是单帧外观变化，嘴的宽高比、朝向随其在鱼眼画面中的位置变化，检测框加仿射对齐到平均脸只能做粗对齐，不能消除与位置有关的畸变。二是时间一致性变化，说话人稍动，畸变程度就变，唇读编码器看到的运动轨迹叠加了几何抖动。

论文因此提出两个待验证问题：从鱼眼姿态任务学到的空间特征能否补充发音运动信息，以及唇编码器是否必须在鱼眼数据上微调才能用好这部分特征。基线没有做基于标定的鱼眼矫正，这意味着所有结论都建立在未矫正唇部感兴趣区域上。

**鱼眼畸变 × 普通相机视角：** 鱼眼畸变指广角镜头带来的径向几何变形，同一张嘴在画面不同位置形状不同，普通相机视角变形小且本文中拍摄距离更近、分辨率不同，两者对比反映的是包含视点和分辨率在内的采集条件差异，而不只是镜头畸变本身。

### 基线让一个样本走完哪些步骤

拿一个 4 秒的双人混合样本为例。音频侧把混合波形做短时傅里叶变换，得到实部虚部两个通道的时频张量，记为 A，维度覆盖批次、频率窗格与音频帧数，频率维与音频帧数分别对应 F 与 Ta。视频侧取目标说话人的鱼眼或普通视频，先用 RetinaFace 找脸和关键点，做仿射对齐到平均脸参考，再裁出唇部序列。该对齐只是感兴趣区域预处理的一部分，基线并不做基于相机标定的鱼眼矫正，也不改变原图的重采样方式，因此空间上变化的几何畸变仍保留在输入中。

唇部序列走两条视觉支路，一条是唇读编码器给运动表征，另一条是冻结的畸变感知分支给空间表征，两者相加得到视觉条件序列，再插值到音频帧数、投影到频率维，与音频谱在通道维拼接后送入 TF-GridNet 堆叠块预测复数掩码，乘到混合谱上再逆变换得到波形。训练时用尺度对齐的重构误差加波形约束来学，视觉分支是否更新是消融变量。

具体而言，预训练的 ResNet-18 唇读编码器把唇部感兴趣区域序列编码为与运动相关的嵌入 El，其维度覆盖批次、视频长度 Tv 与嵌入维 E，用于刻画与发音相关的口型变化。畸变感知分支则由鱼眼头部姿态估计任务迁移而来，处理每 1 帧图像，经过 4 阶段倒置残差块与坐标注意力，只取最高层特征形成帧级嵌入 Ed，再与 El 直接相加构成视觉条件序列。两路嵌入共享同一嵌入维以便直接相加，其中畸变感知分支在出现时始终保持冻结，是否让唇读编码器随目标说话人提取训练而更新，则是检验视觉适配是否必要的消融变量。

融合时先把相加后的视觉序列按帧线性插值到音频帧数 Ta，再投影到频率维，得到与音频谱对齐的视觉张量 V，其维度覆盖批次、单通道、频率窗格与音频帧数。随后把音频张量 A 与视觉张量 V 在通道维拼接为 Z，使通道数由两路音频通道加一路视觉条件变为 3 通道，再经一层卷积送入 TF-GridNet 堆叠块。堆叠块内部分别在频率轴与时间轴上建模时频依赖，并结合自注意力聚合上下文，最后由反卷积层预测复数掩码。该掩码作用于混合谱的实部虚部，再经逆短时傅里叶变换恢复出目标说话人的波形估计。

这一分工的含义是，唇读支路提供随时间变化的发音运动线索，用于在重叠语音中标识目标说话人，而畸变感知支路提供在鱼眼图像上学到的空间上下文，作为对唇动表征的补充。两者相加后仍保持逐帧的时序结构，经插值与投影才与音频时频格点对齐，因此视觉条件能够逐帧约束分离器对目标语音的掩码估计。是否冻结唇读编码器的对比，正是检验只有运动表征适配鱼眼输入时，分离器能否更有效地利用这部分迁移来的空间特征。

### 唇读编码器负责什么，冻结和微调差在哪

唇读编码器是预训练的 ResNet-18，它把每 1 帧唇部小图变成一个运动相关的向量，序列维度记为批量、视频长度和嵌入维。它的作用是把开合、圆展等发音动作编码成随时间变化的向量，让分离器知道当前在发什么音。

论文对比两种用法：冻结是推理时也不更新，只当固定特征器；可训练是在音视提取训练中一起更新。区别在于冻结保留了普通视频上的先验，微调则允许它适应鱼眼畸变后的唇形统计。后文的交互效应关键就在这里，畸变感知分支固定时，只有唇编码器动了，融合后的条件才变好。

**唇读编码器 × 畸变感知分支：** 唇读编码器是预训练的 ResNet-18，负责从唇部感兴趣区域序列中提与发音相关的运动表征，畸变感知分支是从鱼眼头部姿态估计迁移来的四级倒残差加坐标注意力网络，负责提供在鱼眼图像上学到的空间上下文，两者相加后共同约束分离器。

### 畸变感知分支内部算了什么

该分支逐帧处理，共 4 级倒残差块加坐标注意力，每块做逐点扩张、3×3 深度可分离卷积、坐标注意力、逐点投影，带批归一化和 ReLU6，步长为 1 且维度匹配时加残差。只有最高层特征被拿来与唇向量相加，论文明确说不假设其输出对畸变严格不变，只是提供在鱼眼图像上学到的空间表征。

坐标注意力先沿高和宽分别平均池化，得到高度方向和宽度方向的描述子，公式如下，符号含义是通道 c 在行 i 或列 j 上的平均响应。

\[z^{h}_{c}(i)=\frac{1}{W}\sum_{j=1}^{W}X_{c}(i,j),\quad z^{w}_{c}(j)=\frac{1}{H}\sum_{i=1}^{H}X_{c}(i,j).\]

池化后的 2 个方向特征拼起来经共享 1×1 卷积、批归一化和 ReLU 变换，再拆开经各自 1×1 卷积加 Sigmoid 得到高权重和宽权重，相乘回原特征图，公式如下。它保留了轴向位置信息，同时聚合了空间上下文，输出再池化成与唇向量同维的帧向量以便直接相加。

\[Y_{c}(i,j)=X_{c}(i,j)g^{h}_{c}(i)g^{w}_{c}(j).\]

### 视听怎么对齐并送进分离器

记混合谱为批量、2 通道、频点数和音频帧数构成的张量，视觉融合序列是唇向量加畸变感知向量后的序列。两者时间率不同，视频 25 帧每秒，音频谱帧率高得多，做法是线性插值到音频帧数，再投影到频率维得到单通道的视觉张量。

**TF-GridNet 分离器 × 视听融合拼接：** 视听融合拼接是把混合语音的实虚部频谱与插值到音频帧率并投影到频维的视觉序列在通道维拼成三通道张量，TF-GridNet 分离器再沿频率轴、时间轴和自注意力建模时频依赖并预测复数掩码，视觉信息由此在每个时频点上引导目标语音重构。

拼接后的张量通道数为 3，公式如下，之后经一层卷积和多层 TF-GridNet 块处理，块内有频率轴和时间轴循环层加自注意力，最后反卷积预测复数掩码并作用于混合谱。

\[Z=[A;V^{\prime}]\in\mathbb{R}^{B\times 3\times F\times T_{a}}.\]

这意味着视觉只提供条件，不直接生成语音，分离质量仍取决于时频建模能否把条件用在正确的频带和时刻上。

### 训练目标约束什么，优化怎么停

训练目标由两项组成，第一项是尺度不变意义的重构误差，先用系数把估计波形缩放到与干净目标最接近再算误差，第二项是估计与干净波形差的 L1 范数，也约束幅度。公式如下，其中 s 是干净目标，s 帽是估计，alpha 是最小二乘尺度。

\[\mathcal{L}=-10\log_{10}\frac{\|s\|_{2}^{2}}{\|\alpha\hat{s}-s\|_{2}^{2}}+\|s-\hat{s}\|_{1},\quad\alpha=\frac{\hat{s}^{\top}s}{\|\hat{s}\|_{2}^{2}},\]

论文用 PyTorch 和 Adam 训练，初始学习率 10 的负 3 次方，最多 100 轮，验证不提升 3 轮则学习率减半，10 轮不提升则早停，梯度 L2 范数裁到 1。畸变感知分支始终冻结，只有分离器和按配置决定的唇编码器更新，监督来自合成混合对应的干净目标语音。

### 语料怎么采，混合评测怎么保证公平

语料共 94 位普通话母语人，每人约 30 分钟自发独白，含停顿和语气词，总计 47.03 小时、14791 句。说话人不重叠地划给训练、验证和测试。鱼眼相机放在说话人右前方约 1 米处，内置麦克风 16 kHz 录音，鱼眼视频 3840×2160、普通相机 1280×720，同为 25 帧每秒、同光照同声学环境同步录。

下表是划分统计，训练 66 人 10308 句 32.75 小时，验证 14 人 2213 句 7.22 小时，测试 14 人 2270 句 7.06 小时，合计 94 人 14791 句 47.03 小时。表前说明划分的比较意义在于训练与测试说话人不重叠，测的是对未见说话人的泛化。

| Split | Speakers | Utterances | Hours |
| --- | --- | --- | --- |
| Training | 66 | 10,308 | 32.75 |
| Validation | 14 | 2,213 | 7.22 |
| Test | 14 | 2,270 | 7.06 |
| Total | 94 | 14,791 | 47.03 |

该表确认了数据量和说话人 disjoint 设计，训练量最大，验证和测试各 14 人量级相当，为后续混合实验提供了干净参考和可复现的文件划分。

混合评测用单人录音合成双人混合，每条取 4 秒、目标与干扰比在负 10 到 10 dB 随机选，训练 15000 条、验证 1500 条、测试 1500 条。普通与鱼眼实验用同一套音频混合、说话人对、片段和信噪比范围，因此声学输入固定，只有视觉输入不同。需要记住这是模拟重叠加干净参考，没有评估走动说话人、真实对话和多变机位。

### 配对视频长什么样，指标和对照怎么设

配对视频的观察任务是确认两者除了镜头畸变还有视点远近和分辨率差异，以免把普通与鱼眼的差距全归因于畸变。左为普通镜头近景人脸大而正，右为鱼眼圆形视场人小且在远端，背景墙被弯成同心弧形。

> **看图路径：** 1. 对比左图普通镜头与右图鱼眼镜头中人脸大小和位置；2. 观察右图圆形视场、黑色边角和背景墙的弯曲；3. 注意两图视点远近不同，不只差镜头

[![原论文 Figure 2：Paired normal-camera and fisheye views.](https://arxiv.org/html/2611.09368v1/img2.png)](https://arxiv.org/html/2611.09368v1/img2.png)

*论文图 2。原论文 Figure 2:：“Paired normal-camera and fisheye views. Acquisition conditions differ in viewpoint and resolution as well as lens distortion.”。*

从像素可见，右图人物只占画面中心小块，周围大量黑边和弯曲走廊，左图人脸占比较大且背景平直。论文正文也强调两者视点和分辨率不同，所以普通与鱼眼的性能差衡量的是视觉采集条件整体效应，不能解读为纯畸变效应。

**SI-SDRi × STOI × PESQ：** SI-SDRi 衡量分离后信号相对混合前在尺度不变意义上的失真改善，STOI 衡量短时包络决定的可懂度，PESQ 衡量感知语音质量，三者都是越高越好，本文同时报告以免只看能量 fidelity 而忽略可懂度和听感。

消融变量包括相机流、唇还是脸感兴趣区域、唇 ResNet 冻结还是可训练、有无畸变感知分支且有则冻结。另在 LRS3 上用冻结唇编码器、无畸变分支的分离器做 sanity check，混合为 16 kHz、3 秒、双人、负 5 到 5 dB，训练 50000、验证 5000、测试 3000 条，对比分数引自已发表文献，只供背景参考而非同混合列表的公平重训对比。

### 分离器本身够强吗，鱼眼比普通差多少

先看 LRS3 背景结果，比较问题是该 TF-GridNet 基线在公开英文语料上的大致位置，指标是 SI-SDRi、SDRi 和 PESQ，都是越高越好，引用的对手分数来自文献而非统一重跑。

| Method | SI-SDRi | SDRi | PESQ |
| --- | --- | --- | --- |
| AVConvTasNet [19] | 11.2 | 11.7 | 2.58 |
| VisualVoice [5] | 9.9 | 10.3 | 2.13 |
| AVLiT-8 [11] | 13.5 | 13.6 | 2.78 |
| CTCNet [9] | 17.4 | 17.5 | 3.24 |
| IIANet [10] | 18.3 | 18.5 | 3.28 |
| Baseline (no DA) | 17.9 | 17.9 | 3.22 |

表中基线无畸变分支得 SI-SDRi 17.9 dB、SDRi 17.9 dB、PESQ 3.22，介于 CTCNet 的 17.4 dB 和 IIANet 的 18.3 dB 之间，说明基线可用但不证明超越已有方法。AVConvTasNet、VisualVoice 和 AVLiT-8 分数更低，但因混合列表和训练细节不同，只能看量级。

再看本文核心的相机对比整理，比较问题是在声学混合固定时只换视觉输入会差多少，指标方向同样越高越好。下表用原文连续句整理关键数字，不另造表头单位。

| 条件 | SI-SDRi | STOI | PESQ |
| --- | --- | --- | --- |
| 普通相机，唇，冻结，无分支 | 19.33 dB | 0.90 | 3.41 |
| 普通相机，唇，冻结，有分支 | 19.01 dB | 0.89 | 3.37 |
| 鱼眼，唇，冻结，无分支 | 10.01 dB | 0.77 | 2.92 |
| 鱼眼，唇，冻结，有分支 | 9.91 dB | 0.77 | 2.90 |
| 鱼眼，唇，可训练，有分支 | 11.84 dB | 0.81 | 2.96 |
| 鱼眼，脸，可训练，无分支 | 10.30 dB | 0.78 | 2.74 |

该表显示冻结唇编码器且无分支时普通 19.33 dB 对鱼眼 10.01 dB，差距 9.32 dB；最强鱼眼 11.84 dB 仍比普通基线低 7.49 dB。3 个指标在可训练加分支时同向提升，但提升远小于跨相机差距，且普通加分支反而从 19.33 降到 19.01 dB，说明分支不是普遍增益。

### 畸变分支何时有用，何时没用

关键交互是唇编码器是否微调。在鱼眼加可训练唇编码器时，加分支把 SI-SDRi 从 10.47 dB 提到 11.84 dB，提升 1.37 dB，STOI 从 0.78 到 0.81，PESQ 从 2.93 到 2.96，三指标一致向好。在冻结唇编码器时，加分支反而把鱼眼从 10.01 变为 9.91 dB，普通从 19.33 变为 19.01 dB，没有增益。

单看解冻唇编码器的作用，有分支时提升 1.93 dB，无分支时只提升 0.46 dB，说明自适应唇表征帮助分离器用好了迁移来的空间特征。唇与脸的对比只在可训练无分支下做了，唇 10.47 dB 略高于脸 10.30 dB，PESQ 2.93 对 2.74，STOI 同为 0.78，不能推广到所有结构。

所有分数都是单次点估计，没有重复运行的不确定度和显著性检验。论文也指出未比矫正、合成畸变增强和同容量通用注意力分支，因此分不清增益来自鱼眼预训练还是单纯多了参数容量。

### 这些结论在什么边界内才成立

第一，普通与鱼眼相机视点和分辨率不同，差距不能只归因于径向畸变。第二，混合是合成双人 4 秒重叠加干净参考，结论不自动推广到走动、遮挡、真实会议和多变机位。第三，脸与唇对比只覆盖一种训练配置，畸变分支只试了冻结加最高层融合，其他融合和微调方式未知。

第四，缺少与图像矫正和畸变增强的对照，也缺少与参数量匹配的通用分支对照，无法分离鱼眼预训练的特有贡献。把 11.84 dB 当作鱼眼上限或把分支当作通用插件都会夸大，准确说法是在已测配置中最优且依赖视觉自适应。

### 要复现第一步做什么，需要哪些开销

复现先按论文给的项目页和数据集页拿混合代码、文件列表和评测工具，数据集按 CC BY-NC 4.0 发布。按固定混合规则生成 15000、1500、1500 条混合，保持普通与鱼眼用同一音频、说话人对和负 10 到 10 dB 范围，再跑 RetinaFace 检测加仿射对齐到平均脸后裁唇部，不做标定矫正。

训练按 Adam、初始学习率 0.001、最多 100 轮、3 轮不升减半、10 轮早停、梯度裁 1 的设置，先跑冻结唇无分支的普通与鱼眼基线，再跑可训练唇加冻结分支的鱼眼配置，核对 19.33、10.01、10.47、11.84 dB 能否复现。论文未报告硬件、时长和推理延迟，复现时需自记成本，LRS3 对比分数是引用值不要当同条件重跑。

### 什么时候值得试，还缺哪项验证

当你的设备已是鱼眼且能拿到同步唇视频、又能承担微调唇编码器时，这个冻结鱼眼姿态分支加可训练唇编码器的组合值得一试，预期是在鱼眼上带来约 1 dB 量级的改善，而不是追平普通相机。如果唇编码器必须冻结或只能用普通视频模型直接推理，就不要加该分支，实测无增益甚至微降。

下一步最缺的是控制视点和分辨率后的纯畸变对比，以及与矫正、畸变增强、同容量注意力分支的对照，还有多次运行的方差和显著性。补上这些才能判断增益是否稳定来自鱼眼空间先验。容易误解的是把跨相机差距当畸变效应，或把单次 1.37 dB 当部署保证，原文证据只支持在固定合成混合和未见说话人划分下的相对排序。

<details>
<summary>📎 论文与评分元数据</summary>

排名：前50% | 文档类型：数据集与基准 | [arXiv 原文](https://arxiv.org/abs/2611.09368v1)

</details>

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。

- 评分规则：type-aware-v1

- 评分模型：muse-spark-1.3-contributor

- 评分请求协议：openai_responses

---

[← 返回 2026-11-09 语音/音乐/音频论文速递](/audio-paper-digest-blog/posts/2026-11-09/)
