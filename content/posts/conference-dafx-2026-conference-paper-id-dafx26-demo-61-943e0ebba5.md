---
title: "Compiling Differentiable Audio Graphs to Real-Time DSP"
date: 2026-09-12
draft: false
description: "论文针对可微音频模型难以自动部署为实时效果器的问题，选择以框架无关的 JSON 中间表示解耦提取与发射，用反馈延迟网络验证脉冲响应一致到单精度噪声级，代价是目前仅在整数延迟线性时不变设定下给出等价与稳定性保证。"
tags: ["开源工具", "信号处理", "高效推理", "实时处理", "空间音频渲染"]
categories: ["dafx-2026 论文"]
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_paper_id: "conference:dafx:2026:conference-paper-id:DAFx26_demo_61"
paper_digest_source_kind: conference
paper_digest_conference_id: "dafx-2026"
paper_digest_conference_record_url: "https://dafx26.mit.edu/program/"
paper_digest_conference_pdf_url: "https://dafx26.mit.edu/assets/papers/DAFx26_demo_61.pdf"
paper_digest_api_reader_contract: "beginner-researcher-v3"
paper_digest_api_reader_article_sha256: "17b750b463958c781bff5714d444af5a76b6da34935b3f3932fa1ee4f977af7c"
paper_digest_api_reader_plan_sha256: "8d811d33960fc22b49b62c187fd126b960cfb86a689831c02c608882b917631e"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings-v4"
paper_digest_api_reader_source_bindings_sha256: "88806b60a914bbd8272bb9d8ba729462430b350952024a35f4913032798acbd0"
paper_digest_api_reader_source_table_count: 2
paper_digest_api_reader_source_formula_count: 0
paper_digest_api_reader_structured_artifacts_sha256: "8af14f8bdd3a6c273faefc2bce7e5a78071638cb7ad3aa8381884790a38f191b"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity-v1"
paper_digest_api_reader_author_identity_sha256: "c2d4bd1b381870cbc19988eb4415bb47b85c0058274f7a9346b7548ef80b7868"
paper_digest_api_reader_author_count: 2
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity-v1"
paper_digest_api_reader_resource_identity_sha256: "a4a7669603faa4e306d2582ebc2e2de061dcca1e54bf0e01fd82230c01280bec"
paper_digest_api_reader_resource_count: 2
paper_digest_api_reader_decision_projection: "api-reader-decision-projection-v2"
paper_digest_scoring_contract: "api-scoring-audit-v2"
paper_digest_taxonomy_contract: "paper-taxonomy-flat-tags-compat-v1"
paper_digest_taxonomy_selection_contract: "paper-taxonomy-selection-v1"
paper_digest_taxonomy_registry_version: "paper-taxonomy-v1"
paper_digest_taxonomy_registry_sha256: "15c82a567ce5a55dc1175684ed08b64c158558639d9c8fb822c9587ec32a8778"
paper_digest_taxonomy_concepts: [{"facet":"artifact","id":"artifact.open-source-tool","label":"开源工具"},{"facet":"method","id":"method.signal-processing","label":"信号处理"},{"facet":"research_focus","id":"research_focus.efficiency","label":"高效推理"},{"facet":"setting","id":"setting.real-time","label":"实时处理"},{"facet":"task","id":"task.spatial-rendering","label":"空间音频渲染"}]
paper_digest_primary_task: "空间音频渲染"
paper_digest_primary_method: "信号处理"
paper_digest_score: 7.7
paper_digest_rank_bucket: "前25%"
paper_digest_document_type: "系统技术报告"
paper_digest_conference_structure: replayable-pdf-layout-v1
---

# 📄 从可微分训练到实时插件：用中间表示锁住反馈延迟网络的等价与稳定

> 英文题目：*Compiling Differentiable Audio Graphs to Real-Time DSP*

> 会议身份：`conference:dafx:2026:conference-paper-id:DAFx26_demo_61`


> ✅ 来源为官方会议 PDF；表格与 Figure 按原文证据绑定。PDF 公式以原页区域图片展示，未冒称作者原始 TeX。

> 会议来源：[官方记录](https://dafx26.mit.edu/program/) · [官方 PDF](https://dafx26.mit.edu/assets/papers/DAFx26_demo_61.pdf)

标签：#开源工具 #信号处理 #高效推理 #实时处理 #空间音频渲染

评分：**7.7/10** | 创新 1.3/2 | 技术严谨 1.0/1.5 | 实验充分 0.8/1.5 | 清晰度 0.8/1 | 影响力 0.8/1.5 | 开源 1.5/1.5 | 可复现 0.3/0.5 | 工程/实践 1.2/1.5

排名：前25% | 文档类型：系统技术报告

## 👥 作者与机构

- Facundo Franchino：机构信息未能从会议 PDF 纯文本可靠映射
- Sebastian Jiro Schlecht：机构信息未能从会议 PDF 纯文本可靠映射

## 📌 核心摘要

输入为PyTorch中训练好的可微音频图，输出为可在插件与嵌入式目标实时运行的FAUST程序，难点在于递归拓扑语义保真、参数化空间到音频参数还原以及任意用户调节下的稳定性。先由提取器遍历模型树并将偏置于参数化空间的参数序列化为框架无关的JSON中间表示，该表示携带拓扑与数值参数进入下一步。再由发射器接收该JSON表示并负责结构 lowering，将串并联与递归映射为FAUST组合算子并补偿隐式单采样延迟，通过环内写入与环外补偿还原精确环路周期与绝对到达时间，输出标准FAUST代码。最后由宏控制与证书层接收所生成代码并负责可用化封装，在生成代码上叠加混响时间与干湿比等稳定调节，签发前对发射后单精度参数执行小增益稳定性核验并拒绝不稳定构建。在单核Apple M2上48kHz基准下，32线网络的性能为90倍实时，高于64线网络的性能14倍实时。相对手工重写，该路径解耦前端遍历与后端生成并保留可重建原始权重，新叶类型只需新增发射器即可复用同一流程。结论适用边界限于线性时不变反馈延迟网络与散射延迟网络及整数延迟情形，分数延迟需舍入，非线性与时变扩展尚未验证。在现有硬件上编译插件经Schroeder积分验证衰减准确，重载延迟在毫秒级而模型重发射仅亚毫秒级，完整安装仍需数分钟编译。

## 🔗 开源与复现资源

- 代码相关资源：<https://github.com/cucuwritescode/adac> — 链接可访问（HTTP 200）
- 代码相关资源：<https://adac.readthedocs.io> → <https://adac.readthedocs.io/en/latest/> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 输入是什么，目标是什么，学完要能复述什么？

这篇演示论文的输入是一个已经在可微音频框架里训练好的处理器，以反馈延迟网络为主要例子。目标是把它自动编译成可以实时运行的音频效果器，而不是留在训练脚本里只能离线跑。读者学完应当能复述三件事：第一，编译器分哪几步走；第二，为什么整数延迟下能做到采样级一致，而分数延迟要四舍五入；第三，插件上的旋钮与训练参数为什么不是一回事，稳定性在发货前如何被拦住。

先把白话打底。可微音频图是指用可以求导的模块搭出来的音频处理器，英文是 differentiable audio graph，它的好处是能用梯度下降调混响、调滤波器。实时数字信号处理是指必须在采样时钟下逐个样本算完的程序，英文是 real-time DSP，它要求不能卡顿、不能爆音。论文的矛盾正在这里：前者好训练不好上台，后者能上台但过去要靠手写翻译，手写就容易错，模型一改又要重写一遍。

**可微音频图 × 实时数字信号处理：** 可微音频图负责用梯度优化处理器参数，它活在 PyTorch 这类训练框架里，可以求导但不能保证逐样本实时运行；实时数字信号处理负责在音频线程里逐样本稳定计算，它要求固定算力与确定性时序。两者搭配的理由是训练需要可微性，部署需要实时性，ADAC 用编译器把前者的已训练参数搬到后者的 FAUST 代码上，新增作用是让 1 次训练结果直接变成可安装插件，而不再手写重写。

开场必须保留的关键信息是输出形态。论文的输出不是一个新的混响算法，而是一个名叫 ADAC 的编译工作流：遍历已训练模型的计算图，抽出学到的参数，降到与框架无关的 JSON 中间表示，再生成等价的 FAUST 代码。FAUST 再由现有工具链编到各类目标。代码当前可用，论文给出两个地址，分别是代码仓库与文档。资源状态显示两者当前可用，因此可以写已公开。学习时不要把 FAUST 当成效果器本身，它是生成高效实时代码的函数式语言与编译通路，插件、网页、嵌入式与 FPGA 都是它下游的目标。

### 同类路线已经解决了什么，还剩哪段没接上？

相关路线按同输入、同目标、同运行阶段来对照更清楚。第一条是 FLAMO，它是频域可微音频处理库，负责让音频处理器可以被梯度优化。论文用它作为源框架，训练与验证都在 FLAMO 模型上做。第二条是 FAUST，它负责把函数式声学描述编成高效实时代码，并维护到多目标的编译路径。第三条是 DDSP 这类可微音频系统，它们同样面临训练好但难部署的问题。

对照的公平点在于三者分工不同，不能直接比谁音质更好。FLAMO 回答如何可微地训练，FAUST 回答如何实时地运行，DDSP 回答如何把信号处理做可微。论文没有声称发明了新的混响结构，也没有声称在听感上超过哪种混响，它补的是中间那段缺失的搬运：从已训练计算图到 FAUST 代码的自动降低。理解这一点可以避免一个常见误解：把编译一致性误读成音质提升。论文报告的一致性是指编译产物与源模型之间的脉冲响应差在单精度噪声级，而不是指比别的混响更好听。

### 为什么手写翻译既慢又危险？

问题可以沿一个样本走一遍来体会。假设训练框架里有一个四线反馈延迟网络，输入是一个脉冲，信号经输入增益进入 4 条不同长度的延迟线，经过每线的滤波，再经反馈矩阵混洗回延迟线入口循环，同时经输出增益与直通叠加输出。若要手写成 FAUST，就要把矩阵乘法、延迟长度、滤波器级联、串并联与递归关系逐一重写。任何一处通道数、延迟样本数或矩阵转置写错，传函就变了，而人耳一时未必能定位是结构错还是参数错。

更麻烦的是参数空间错位。训练时正交反馈矩阵可能存的不是矩阵本身，而是反对称权重，每次前向再指数化；豪斯霍尔德矩阵可能只存一个向量。用户若直接拧这些原始数，极易把系统拧到不稳定。手写翻译还要在每次模型改动后重来一遍，验证成本随改动次数线性增长。论文因此把任务定义为编译与工作流问题：既要保数值等价，又要让训练可听、旋钮安全、发货前有证。

### ADAC 全景：三段搬运如何分工？

方法全景是 3 段式。第一段是从模型到表示。提取器遍历模型树，把每个节点序列化为 JSON 中间表示。关键细节是它同时保存有效参数与原始权重：有效参数是真正作用到信号上的数值，用于生成音频代码；原始权重是参数化空间里的数，用于无损重建源模型。

第二段是从表示到 FAUST。结构节点映射到 FAUST 组合算子，串联变冒号，并联变共享输入的分支，递归变波浪线，叶子则生成延迟、增益、滤波器级联与矩阵求和。第 3 段是从 FAUST 到多目标，由现有工具链编到插件、网页、嵌入式与 FPGA。

下面这张管线图把 3 段放在一条直线上，是全文的总地图，阅读时先看主路径再看分支目标。

> **看图路径：** 1. 先从左到右跟随三个大框：可微模型、JSON 中间表示、FAUST 代码；2. 再看 FAUST 框向下分出的四个目标分支，确认插件、网页、嵌入式与 FPGA 并列；3. 注意中间框明确写出递归结构字段，理解拓扑信息在此处被固定下来

[![原论文 Figure 2：Pipeline overview. The differentiable audio graph is extracted from the host framework (PyTorch)…](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/900eb5f417e0/figure-2.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/900eb5f417e0/figure-2.png)

*论文图 2。原论文 Figure 2：“Pipeline overview. The differentiable audio graph is extracted from the host framework (PyTorch) into a framework-agnostic JSON intermediate representation, lowered into…”。*

这张图显示左侧是带梯度标记的可微模型，中间是写明递归字段的 JSON，右侧是写明导入库与并行原语的 FAUST 代码，再向下分出 4 个目标。它对应的教学价值是解耦：源端遍历与目标发射之间只通过 JSON 握手，换训练框架只需换提取器，加新叶子类型只需加发射规则。论文强调贡献不只是代码生成，而是围绕它的工作流：训练可听、宏控制保稳、发货带证。后文三节分别展开这三点。

### 拓扑与参数：JSON 里到底存了什么？

这一节只讲表示。表示要存两类信息：拓扑与数值。拓扑用 3 类组合表达串行、并行与递归，叶子表达延迟、增益、2 阶滤波节与混合矩阵。以反馈延迟网络为例，状态空间视角下有延迟向量、反馈矩阵、输入增益、输出增益与直通，传函形式决定了递归分支的最短路径至少走过最短延迟线那么多样本。JSON 用嵌套的 Parallel、Series、Recursion 节点把这种关系写成树，通道数标注如 1 到 4、4 到 4、4 到 1 说明信号何处展宽、何处收拢。

**中间表示 × 发射器：** 中间表示负责与框架无关地记录拓扑与数值参数，它用串联、并联、递归 3 类结构节点加延迟、增益、滤波器、矩阵等叶子保存处理器；发射器负责把该表示翻译成 FAUST 组合算子与原语。搭配理由是表示只管结构保真，发射只管目标语法，新增作用是源端遍历与目标生成解耦，新增叶子类型只需新增发射规则。

下面这张拓扑图左侧是树，右侧是 JSON 片段，正好把抽象对照落到像素上，值得停留细看。

> **看图路径：** 1. 先沿左侧树顶 Shell 经 Parallel 到 Series 再到 Recursion 的主链走一遍；2. 再核对边上 1 到 4、4 到 4、4 到 1 的通道数标注，理解输入输出如何展宽再收拢；3. 最后对照右侧 JSON 片段，看 Parallel 与 Series、矩阵字段如何与左树一一对应

[![原论文 Figure 1：FDN topology. Left: The representation visualised as a tree mapping to state-space formulation…](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/900eb5f417e0/figure-1.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/900eb5f417e0/figure-1.png)

*论文图 1。原论文 Figure 1：“FDN topology. Left: The representation visualised as a tree mapping to state-space formulation matrices.”。*

左树从顶到底是外壳经并联分出直通支路与主体支路，主体经串联分出输入增益、递归核与输出增益，递归核再分出前向延迟滤波链与后向反馈矩阵。右图则显示 Parallel 节点下并列 Series 节点与直通矩阵字段。两图合起来说明同一件事：状态空间矩阵不是以矩阵形式硬存，而是以可组合的信号流树存，矩阵只是其中一类叶子。这种存法让发射器可以按节点类型递归生成代码，而不必为每种混响写 1 次性模板。

### 递归延迟如何对齐：FAUST 多出的一个样本去哪了？

发射器的难点在递归。FAUST 的递归算子自带一个样本的隐式延迟，若直接把延迟线长度原样写入，环路总周期会多出一个样本，绝对到达时间也会错。论文的做法是环内每条线写成原长度减一，借助隐式延迟凑回原周期，再在递归输出端、环外补一个单样本延迟，把被提前的绝对时间推回去。公式含义是环内显式延迟与隐式延迟相乘恰好等于原延迟，环外延迟只管对齐到达时刻。

在整数延迟条件下，这套补偿让生成图与源模型逐样本一致，只差音频通路的单精度运算噪声。若出现分数延迟，发射器就近取整到整数样本，每条线最多引入半个采样周期的时间误差。教学上要区分两种误差：结构误差是拓扑或周期写错，会导致传函整体偏离；数值误差是单精度与取整带来，论文报告的残差属于后者。稀疏矩阵还有一处省算力的细节：发射器跳过零元，矩阵项的每样本运算量从稠密的平方项降到非零元个数。

**反馈延迟网络 × 散射延迟网络：** 反馈延迟网络分工是用延迟向量、反馈矩阵、输入输出增益与直通构成可训练混响原型，它能同时练到串联、并联与递归 3 种组合；散射延迟网络分工是用墙到墙延迟线与块对角散射矩阵表达房间声学结构。搭配理由是两者共享同一套组合算子，新增作用是证明编译路径不限于一种混响，同一遍历与发射流程能原样搬运更大实例。

反馈延迟网络在本研究中承担锻炼全路径的案例角色，因为它同时用到 3 种组合且参数结构最丰富。散射延迟网络则是更大的复用实例：六面墙房间的 30 条墙到墙延迟线、块对角散射与每墙输入输出路由走同一条编译路径，并复现出同样的单精度级一致。这支持论文的判断：编译器不限于一种混响，任何由串并递归组合与参数化叶子构成的音频图都走同一遍历与发射，新增叶子只需新增发射器。

### 旋钮与证书：为什么用户不能直接拧训练参数？

原始训练参数不适合做用户控件，因为它们联合优化且住在参数化空间里，单独动一个就可能失稳。编译器因此另铺一套固定的宏控制词表：混响时间、干湿比与预延迟。混响时间走均匀衰减构造，每个延迟线按其长度与目标混响时间配一个增益，让每条线在任何采样率下以同一衰减率衰减。单旋钮以秒为单位标定，背后是每线增益公式在起作用。论文用施罗德积分在编译产物上实测，设 0.5 秒得到 0.5000 秒，说明标定在该点是准的。

**宏控制 × 稳定性证书：** 宏控制负责给用户可安全拧动的旋钮，它把混响时间、干湿比与预延迟叠加到生成代码上而不破坏稳定；稳定性证书负责在构建插件前对将要发货的参数做小增益判定并给出稳定或不稳定结论。搭配理由是原始训练参数彼此耦合不能直接暴露，新增作用是可用性与安全性分离，旋钮管交互，证书管放行。

稳定性证书在发货前把关。判据是小增益论证：把环上各元件的频响最大奇异值在频率网格上连乘求上确界，若小于 1 则闭环稳定，递归滤波节还要逐个做极点检查。论文明确不以谱半径为判据，因为环里有滤波器时谱半径说明不了问题，非正规矩阵还可能有大幅瞬态增长。关键实现细节是分析跑在发货数值上，也就是小数格式化与单精度转换之后的值，而不是双精度的干净原型。

论文给了一个实例：训练的正交矩阵在该链条后最大奇异值略高于 1，若只看双精度原型会误判。有混响时间控制在时，环路在每个旋钮位置都被衰减，导出可直接判稳定。证书写成 JSON 放在生成代码旁，导出器拒绝为不稳定或未证明的模型构建插件，除非显式覆盖。

### 演示如何训练：每一步怎样变成可听的？

演示的训练过程是真实发生的，不是示意。对象是 4 条延迟线的反馈延迟网络，可学习的是输出增益，用 Adam 优化，学习率 0.05，在 48 千赫兹下跑 200 步，目标是让频率响应与给定目标的均方误差最小。论文未报告 batch、数据划分或早停，因为这里的目标响应是给定的频率特性拟合任务，不是通用音频数据集上的泛化实验，缺项应如实指出，不从模型名推定数据管道。

**实时重载 × 训练循环：** 训练循环负责在 PyTorch 侧用 Adam 按步更新输出增益并最小化频率响应均方误差；实时重载负责在宿主插件侧监听被重写的 dsp 文件并在数毫秒内重新编译发声。搭配理由是把优化的每一步变成可听的插件状态，新增作用是研究者可以边训练边拧混响时间旋钮，用耳朵判断收敛方向，而暂停或收敛时不触发无意义重载。

可听化的机制值得复述。训练循环每走一步就回调重发射模型，原子地重写一个被监视的 dsp 文件。常驻插件基于 FAUST 解释器，文件变化即重载，在苹果 M2 上重编译不到 10 毫秒，ADAC 自身重发射约 0.2 毫秒，因此一步在写盘后几个音频块内就可听。旋钮值按地址在重载间保留，优化运行时仍可调混响时间。发布做了去重与限速，收敛或暂停时不触发重载。

宿主是效果器插件，先做成 CLAP 再包成 VST3 与 AU，以便在不支持 CLAP 的宿主里跑同样流程。部署则是 1 次调用走完代码生成、认证、工程生成、正式编译与安装，宏控制在各格式下都暴露为可自动化参数，从训练好到装好插件至多几分钟编译时间。

### 实验条件：用什么测，指标方向如何读？

实验按问题组织。正确性问题测脉冲响应与幅频响应是否一致，条件是整数延迟，指标是与峰值的相对残差，越小越好。开销问题用发声基准在苹果 M2 单核、48 千赫兹下测占用随延迟线数的变化，指标是占用百分比与实时倍数，占用越低、倍数越高越好。控制问题用施罗德积分测混响时间标定，指标是实测秒数与设定秒数的偏差，越小越好。稳定性问题测发货数值的最大奇异值与小增益判据，指标是是否小于 1，证书是否放行。

必须交代的边界是采样率、硬件与对齐方式。正确性比较明确写了无对齐，残差仍在单精度级，这比对齐后再比更严格。开销的硬件是单核苹果 M2，采样率 48 千赫兹，结论不能直接搬到别的芯片或采样率。分数延迟只给误差上界，未给实测曲线。散射延迟网络只报告一致性量级，未给独立的开销曲线。这些未评测边界后文还要回看。

### 一致性有多好：重合曲线与误差底说了什么？

主结果是编译产物与源模型的一致性。论文报告跨立体声全输入输出矩阵与带直通的单声道两种情形，脉冲响应差在峰值的极小量级且无对齐，残差属于单精度而非结构误差。幅频图把同一结论画成两面板：上面是源与产物重合，下面是差值低到峰值下 80 分贝以下。测试保障是 201 个单元测试加端到端脉冲响应集成套件。

下面这张图是核心证据，读时先看重合再看误差底，不要把误差随频率的缓慢抬升误读成结构发散。

> **看图路径：** 1. 先看上方面板两条几乎重合的幅频曲线，确认横轴为对数频率、纵轴为分贝幅度；2. 再看下面板橙色误差曲线随频率缓慢抬升但始终处于极低位置；3. 对比上下方面板，理解上板重合与下板低误差是同一结论的两种画法

[![原论文 Figure 3：Magnitude response of a compiled four-line FDN, one input-to-output path.](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/900eb5f417e0/figure-3.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/900eb5f417e0/figure-3.png)

*论文图 3。原论文 Figure 3：“Magnitude response of a compiled four-line FDN, one input-to-output path.”。*

像素细节支持上述判断。上方面板黑色源曲线与蓝色虚线产物曲线在可听带内处处贴合，低频深谷与中高频密集峰谷都对得上；下面板橙色误差曲线在低频段压成一条底线，随频率缓慢爬升但始终远低于主响应，量级与单精度运算噪声相符。这说明环路周期补偿与绝对时间对齐是做对的，否则误差会是整体偏移而非低底噪声。为便于核对，把原文的关键量化表述整理成下表，表头单位与裸值按原文保留，不另行换算。

| 条件 | 指标 | 源模型 | 编译产物 | 比较对象 |
| --- | --- | --- | --- | --- |
| 立体声全矩阵与单声道带直通 | 脉冲响应峰值相对残差 | 源模型基准 | 与源差在极小量级 | 单精度噪声级 |
| 整数延迟条件 | 逐样本一致 | 源逐样本序列 | 仅差单精度运算 | 音频通路单精度 |
| 端到端回归 | 用例规模 | 源模型全集 | 201 个单元测试加集成套件 | 脉冲响应对比 |
| 分数延迟 | 单线取整误差上界 | 理想分数延迟 | 就近取整到整数样本 | 半个采样周期时间 |

表后需要回答收益与代价。主要收益是整数延迟下结构保真，残差不随结构复杂度明显放大，散射延迟网络复用同一路径仍得同样量级。代价是分数延迟只给上界而无逐频实测，误差按线累积的听感影响未评估。未胜出项在这里体现为分数延迟分支：它没有做到逐样本一致，只能说每线至多半个采样周期的舍入，这是全文最应记住的适用条件。

### 开销如何随规模增长：平方律在哪段成立？

开销实验把延迟线数从小扫到大，验证发射代码的复杂度预言。理论是稠密网络每样本算术量随线数平方加滤波节与输入输出项增长，状态随延迟长度与滤波节增长，稀疏时平方项降为非零元数。实测在实用区间贴合平方律参考线，矩阵大到超出缓存后高于参考线。论文点出两个代表点：32 线约为实时的 90 倍，64 线约为 14 倍，因此 commodity 硬件仍有余量。

下面这张对数坐标图把理论与实测放在一起，读时注意纵轴是占用百分比，顶部虚线是实时限制。

> **看图路径：** 1. 先看横轴延迟线数量与纵轴单核占用百分比均为对数刻度；2. 再比较蓝色实测折线与灰色平方律虚线的贴合段与偏离段；3. 最后看顶部橙色实时限制虚线，判断多大网络规模仍留有余量

[![原论文 Figure 4：Single-core CPU load of the emitted FAUST against FDN size N, on an Apple M2 at 48 kHz.](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/900eb5f417e0/figure-4.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/900eb5f417e0/figure-4.png)

*论文图 4。原论文 Figure 4：“Single-core CPU load of the emitted FAUST against FDN size N, on an Apple M2 at 48 kHz.”。*

像素上蓝色实测折线在 4、8、16、32 线段紧贴灰色平方律虚线，64 线起明显上扬，128 线接近但仍未越过顶部橙色实时线。这支持论文的判断：实用混响规模远未触顶，但超大矩阵受缓存影响，趋势不等于每档都严格贴合。为核对把开销与部署延迟的关键数字整理成第二张表，同为五列，数值与单位按原文连续句逐字覆盖。

| 条件 | 指标 | 小规模点 | 大规模点 | 比较对象 |
| --- | --- | --- | --- | --- |
| 实用混响 32 线 | 实时倍数 | 约 90 倍实时 | 留有余量 | 实时限制 |
| 大网络 64 线 | 实时倍数 | 约 14 倍实时 | 仍可实时 | 实时限制 |
| 演示训练 4 线 200 步 | 优化配置 | 学习率 0.05 | 均方误差目标 | 给定频率目标 |

表后补充代价与反例。收益是 32 线与 64 线都远离实时墙，插件化可行。代价是单核数据不能推广到多核宿主或嵌入式板，采样率 1 变占用同比变，固定点目标还要经另一条量化流程并重算证书。未评测边界是散射延迟网络的开销曲线与 FPGA 资源占用，论文只说标准 FAUST 可走量化流，未给该分支的实测数。

### 哪些结论出不了线性时不变圈？

限制要分 3 层。第一层是已验证的圈：等价与稳定性论证都绑在线性时不变设定上，发射器本身可写非线性与时变模块，论文点名波形塑形、包络跟随、调制以及另一前端框架的可能性，但跨过去后保证如何带过去是未做的工作，不能把能发射等同于已保证。第二层是参数覆盖：宏控制只有混响时间、干湿比与预延迟，固定词表之外的艺术控制未验证；证书跑在频率网格加极点检查上，网格密度与漏检风险未展开。

第 3 层是测量缺口：未报告听感实验、误判率、端到端延迟与量化后音质，总体趋势不等于每组每步成立。把报告、支持与推测分开说，论文直接报告的是整数延迟一致、平方律开销、标定点准确与发货值判定，支持的是工作流可用，有限解释的是大网络余量，待验证的是非线性保证与更广叶子覆盖。

### 复现先做什么，后补哪项验证？

复现的第一步是拿公开代码与文档跑通最小闭环：用 4 线反馈延迟网络在 48 千赫兹下拟合一个目标频响，跑 200 步 Adam，学习率 0.05，只训输出增益；每步重发射并用常驻插件听变化，确认重发与重编延迟量级；再对整数延迟模型比无对齐脉冲响应，确认残差在单精度级；最后把宏控制设到 0.5 秒，用施罗德积分核对实测秒数。第二步是扫规模：在同一单核条件下从 4 线扫到 64 线，复刻占用曲线在实用段贴合平方律、超缓存后上扬的拐点。第三步是走发货：对发货数值重算小增益判据，确认证书与插件构建器的拒绝逻辑，试 1 次显式覆盖被拒模型的流程以理解安全边界。

还需补的验证按论文特有细节排：分数延迟的逐频误差与听感、散射延迟网络的独立开销、固定点量化后重算证书的位宽扫描、以及网格密度对证书漏检的影响。区分 3 类可得性：代码与文档当前可用，已公开；训练权重无单独下载概念，因为模型是现场训练的小网络；系统可运行依赖 FAUST 工具链与插件宿主，部署到嵌入式与 FPGA 要走各自后端，不能只看桌面插件就认定全目标可用。

### 何时值得尝试，一句话如何带走？

当研究已经在可微框架里得到好听的线性混响原型，却卡在手写 FAUST 与反复验等价上时，这套编译最值得尝试。它把易错的搬运变成可重跑的管线，把不能给用户的训练参数换成标定好的秒级旋钮，把事后排查变成事前证书。若研究的核心正是分数延迟的精细音色、时变调制或非线性染色，则应先把本论文当作线性基线：先复现整数延迟的一致与稳定，再在该基线上加新叶子与新判据，并为新增部分补独立的误差与稳定性实验。带走的一句话是：用与框架无关的表示锁住拓扑与发货数值，整数线性世界里的训练与实时在此握手，圈外的保证仍待补全。

## 📐 原文公式与排版

以下展示论文原页中的数学表达区域，保留原始上下标、分式和符号排版。区域序号仅用于本文导航，不是论文公式编号。

[![原文数学表达区域 1，PDF 第 2 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/bff4ae9c17cc/figure-1.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/bff4ae9c17cc/figure-1.png)

区域 1 · [查看论文原页](https://dafx26.mit.edu/assets/papers/DAFx26_demo_61.pdf#page=2)

[![原文数学表达区域 2，PDF 第 2 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/bff4ae9c17cc/figure-2.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/bff4ae9c17cc/figure-2.png)

区域 2 · [查看论文原页](https://dafx26.mit.edu/assets/papers/DAFx26_demo_61.pdf#page=2)

[![原文数学表达区域 3，PDF 第 3 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/bff4ae9c17cc/figure-3.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/bff4ae9c17cc/figure-3.png)

区域 3 · [查看论文原页](https://dafx26.mit.edu/assets/papers/DAFx26_demo_61.pdf#page=3)

另有 5 个候选区域因边界不明确或图片数量、尺寸限制未展开；请[查看完整论文](https://dafx26.mit.edu/assets/papers/DAFx26_demo_61.pdf)中的原始排版。

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。
- 评分规则：type-aware-v1
- 评分模型：muse-spark-1.3-contributor
- 评分请求协议：openai_responses

---

[← 返回 dafx-2026 论文汇总](/posts/conference-dafx-2026/)
