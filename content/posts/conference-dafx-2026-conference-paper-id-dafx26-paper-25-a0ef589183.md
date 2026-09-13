---
title: "A Comparative Study of Kolmogorov-Arnold Networks and Multi-Layer Perceptrons for Virtual Analog Modeling in Wave Digital Filters"
date: 2026-09-13
draft: false
description: "该文在波数字滤波器框架下用神经网络显式逼近四端口非线性散射映射，对比多层感知机与柯尔莫哥洛夫-阿诺德网络，发现 KAN 以 40 对 148 个参数达到相近时域频域精度，但实时率从 1.31 升至 4.74。"
tags: ["信号处理", "模型比较", "高效推理", "音频生成"]
categories: ["dafx-2026 论文"]
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_paper_id: "conference:dafx:2026:conference-paper-id:DAFx26_paper_25"
paper_digest_source_kind: conference
paper_digest_conference_id: "dafx-2026"
paper_digest_conference_record_url: "https://dafx26.mit.edu/program/"
paper_digest_conference_pdf_url: "https://dafx26.mit.edu/assets/papers/DAFx26_paper_25.pdf"
paper_digest_api_reader_contract: "beginner-researcher-v3"
paper_digest_api_reader_article_sha256: "45e3dc21cf59ff82a66ac31c12ecea95e9acb64706fa465ada68ca4be4df0c91"
paper_digest_api_reader_plan_sha256: "5b33e84f4790aaf70df7931bda9cbeb072e8d2c732913fd4292823bce370d5ba"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings-v4"
paper_digest_api_reader_source_bindings_sha256: "dfa7494412778ac4b3a6f90436bf24ba9396e1ce60d1f3160ecba80efed3fad3"
paper_digest_api_reader_source_table_count: 3
paper_digest_api_reader_source_formula_count: 0
paper_digest_api_reader_structured_artifacts_sha256: "bc19edefebbc1d40e485cf882c06fc2f0a546108f186fa7645bb1b2551996351"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity-v1"
paper_digest_api_reader_author_identity_sha256: "fa8fbabdafd537668694f8db9e80b1099caa1ae23cb631685482c5e92baf38d5"
paper_digest_api_reader_author_count: 5
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity-v1"
paper_digest_api_reader_resource_identity_sha256: "02344cbe5334d1fbb26c5d4c49ef31cd11cc297da89df4f8f8318dfaff6ad975"
paper_digest_api_reader_resource_count: 0
paper_digest_api_reader_decision_projection: "api-reader-decision-projection-v2"
paper_digest_scoring_contract: "api-scoring-audit-v2"
paper_digest_taxonomy_contract: "paper-taxonomy-flat-tags-compat-v1"
paper_digest_taxonomy_selection_contract: "paper-taxonomy-selection-v1"
paper_digest_taxonomy_registry_version: "paper-taxonomy-v1"
paper_digest_taxonomy_registry_sha256: "15c82a567ce5a55dc1175684ed08b64c158558639d9c8fb822c9587ec32a8778"
paper_digest_taxonomy_concepts: [{"facet":"method","id":"method.signal-processing","label":"信号处理"},{"facet":"research_focus","id":"research_focus.comparison","label":"模型比较"},{"facet":"research_focus","id":"research_focus.efficiency","label":"高效推理"},{"facet":"task","id":"task.audio-generation","label":"音频生成"}]
paper_digest_primary_task: "音频生成"
paper_digest_primary_method: "信号处理"
paper_digest_score: 5.6
paper_digest_rank_bucket: "前50%"
paper_digest_document_type: "应用研究"
paper_digest_conference_structure: replayable-pdf-layout-v1
---

# 📄 把非线性装进波数字滤波器：KAN 以更少参数逼近多二极管散射映射

> 英文题目：*A Comparative Study of Kolmogorov-Arnold Networks and Multi-Layer Perceptrons for Virtual Analog Modeling in Wave Digital Filters*

> 会议身份：`conference:dafx:2026:conference-paper-id:DAFx26_paper_25`


> ✅ 来源为官方会议 PDF；表格与 Figure 按原文证据绑定。PDF 公式以原页区域图片展示，未冒称作者原始 TeX。

> 会议来源：[官方记录](https://dafx26.mit.edu/program/) · [官方 PDF](https://dafx26.mit.edu/assets/papers/DAFx26_paper_25.pdf)

标签：#信号处理 #模型比较 #高效推理 #音频生成

评分：**5.6/10** | 创新 1.2/2 | 技术严谨 1.0/1.5 | 实验充分 0.8/1.5 | 清晰度 0.8/1 | 影响力 0.7/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 0.8/1.5

排名：前50% | 文档类型：应用研究

## 👥 作者与机构

- Riccardo Giampiccolo：机构信息未能从会议 PDF 纯文本可靠映射
- Enrico Torres：机构信息未能从会议 PDF 纯文本可靠映射
- Mauro Giuseppe de Bari：机构信息未能从会议 PDF 纯文本可靠映射
- Samuel Limier：机构信息未能从会议 PDF 纯文本可靠映射
- Alberto Bernardini：机构信息未能从会议 PDF 纯文本可靠映射

## 📌 核心摘要

本文任务是在波数字滤波器中显式仿真含多个二极管的模拟滤波器，输入为入射波向量\(a\)、输出为反射波向量\(b\)，难点在于多端口非线性散射映射\(b=f(a)\)形成延迟自由环而难以解析求解。方法链第一步在基尔霍夫域按扩展Shockley模型均匀采样二极管电压并计算电流，负责提供覆盖工作区的原始伏安数据。第二步经向量波变换将电压电流对映射到波域构造回归对\((a,b)\)，并按八二比例划分训练与测试集，直接为网络学习提供监督目标。第三步用单隐层多层感知机或柯尔莫哥洛夫-阿诺德网络学习该映射并以Cauchy损失优化，再将训练好的网络块置于连接树根节点并配合已适配线性元件完成逐采样显式递推。与多层感知机在线性权重矩阵间施加固定激活不同，柯尔莫哥洛夫-阿诺德网络在边上学习一维B样条函数而在节点仅求和，因而能以更窄宽度刻画组合结构并保留可解释的边函数。在800 Hz方波驱动测试条件下，KAN的NMSE指标为\(6.6\times 10^{-3}\)，高于MLP的NMSE指标\(3.8\times 10^{-3}\)。该结论适用边界受限于单一Arturia MiniBrute低通电路、单一激励与44.1 kHz四倍过采样条件，尚未验证多非线性多端口扩展时的优势。原文指出KAN以更高计算量换取约70%参数压缩，其推理开销明显高于多层感知机实现。

## 🔗 开源与复现资源

本次未形成可展示的已核验资源记录，开放状态尚未核实。
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 输入是什么，目标是复现什么声音行为？

本文的输入是模拟音频电路的端口电压与电流关系，目标是得到能在固定采样率下逐点递推的数字仿真算法，且保留二极管等非线性带来的失真与滤波器音色。研究对象不是把整机输入输出波形直接丢给黑盒模型学习，而是保留电路拓扑的白盒结构，只把难显式求解的非线性部分交给神经网络。

虚拟模拟这个说法初学者可理解为数字仿琴弦与旋钮背后的电路物理：黑盒方法学习整体输入输出映射，白盒方法列写电路方程并求解。白盒中的波数字滤波器先对每个端口做电压波变换，用入射波和反射波代替电压电流，再用散射矩阵描述连接网络如何把各元件的反射波变成入射波。对线性元件可选择参考阻抗实现适配，消除当前时刻输出对输入的瞬时依赖，从而得到显式计算。

**虚拟模拟 × 波数字滤波器：** 虚拟模拟负责提出任务：用数字算法复现模拟音频电路的非线性音色；波数字滤波器负责提供求解结构：把电压电流变换为入射波与反射波并用散射关系连接各元件，二者搭配使电路拓扑与数值求解分离，神经网络只需学习其中非线性块的波域映射。

本解读的输入是论文正文与官方原图像素，目标是让研究生能核对实验条件并复述方法，输出是 1 篇按学习依赖展开的技术讲解。必须保留的信息包括电路选取范围、数据集生成区间、两种网络的具体宽度与参数量、训练优化器与损失、仿真激励与采样设置、精度与实时率数字。后续先讲相关路线，再走完一个样本从电压到波再到网络输出的全流程。

### 已有路线如何处理多个非线性，本文比较点何在？

传统波数字滤波器对只含线性元件或单个非线性一端口且放在连接树根部的电路可做到全显式实现。一旦出现多个非线性，若仍用标量波定义，会在多端口波数字块处形成无延迟环，需要迭代求解。近年工作引入向量波，把多端口块的各端口统一为向量，用满秩参考阻抗矩阵提供更多自由度，再把多个一端口或多端口非线性合并为单个多端口非线性块，放在根部并在连接节侧做适配。

在该框架下，非线性散射映射的显式求解被转化为波域回归问题：先在基尔霍夫域测量或仿真得到电压电流数据，再按向量波定义映射为入射波与反射波数据对，训练神经网络逼近反射波关于入射波的函数。已有工作主要用多层感知机，依据是通用逼近定理保证足够宽的网络可逼近紧集上连续函数。本文的比较点是另一种表示定理对应的参数化是否同样可用：柯尔莫哥洛夫-阿诺德表示定理指出有界域上连续多元函数可写成有限个连续一元函数与加法的叠加，由此启发的网络把可学习一元函数放在边上。

论文明确说明据作者所知此前没有在虚拟模拟中研究过该网络，因此本文不是提出新滤波器拓扑，而是固定同一波数字结构与训练策略，只替换根部网络，对比逼近精度、参数效率与计算代价。

### 要学的映射是什么，显式性要求是什么？

要学的对象是四端口非线性块的静态散射关系，可记为反射波向量等于某函数作用于入射波向量。该函数没有解析显式形式，输入输出各 4 维，分别对应 4 个二极管支路的波量。学习任务是给定入射波向量，预测反射波向量，要求在每个音频采样点只做 1 次前向计算即可得到结果，不进入牛顿迭代。

显式性要求来自两处适配：线性叶元件在其自身侧已适配，根部神经网络块在连接节侧已适配。若连接节子矩阵关于参考阻抗矩阵的方程有解，则向量端口可适配，整体无延迟环。此时仿真流程是先算线性元件反射波，经散射矩阵前向传播得到根部入射波，再经神经网络得到根部反射波，最后经散射矩阵反向传播回叶节点。整个环路若任一环节需要迭代，就失去该文追求的实时与结构优势。

案例电路取自改良斯坦纳-帕克拓扑的低通部分，对应产品实现中的压控滤波器前馈路径与低通段。4 个二极管中两组为 3 个串联、两组为两个串联，模型采用扩展肖克利模型并计入等效理想因子与串并联电阻倍数。论文只建模该子电路，不包含振荡器与完整合成器链路，复述时不应扩大为整机建模。

### 方法全景：一个样本如何走完输入到输出？

沿一个采样时刻跟踪 1 次计算有助于建立整体感。假设当前时刻线性电容电阻等元件状态已知，先由其离散戴维南等效算出各自反射波；这些标量波与向量块的波一起构成连接节的输入向量，经散射矩阵相乘得到入射到根部的 4 维向量；该向量进入神经网络，输出 4 维反射波向量；再经散射矩阵分配回各线性元件，完成本采样点输出电压的更新并推进状态。

**散射关系 × 神经网络回归：** 散射关系分工是定义入射波向量到反射波向量的静态非线性映射；神经网络回归分工是用可训练参数拟合该映射并在仿真每采样点做 1 次前向推理，二者搭配的原因是线性连接节已有解析散射矩阵，只有非线性块无显式解，组合后根节点网络输出可直接经散射矩阵传播到各线性叶节点。

理解该流程后再看两种网络只是根部求解器的不同实现，其余散射矩阵、适配条件与递推顺序完全相同，这是后文公平对比的前提。散射矩阵由基本割集或回路矩阵与参考阻抗计算，线性部分保持解析，只有非线性映射由数据驱动得到。

下图直接给出两种求解器的结构差异，是全文方法对比的锚点，阅读时应先把握宽度与参数化位置的不同，再进入组件细节。

> **看图路径：** 1. 先看左侧多层感知机中间 16 个节点的密集连线与节点框，确认固定激活在节点、可学习权重在边；2. 再看右侧柯尔莫哥洛夫-阿诺德网络仅 1 个中间求和节点，确认可学习激活函数在边；3. 对照左右输入输出均为 4 维波向量，理解宽度差异是参数量对比的关键

[![原论文 Figure 1：Comparison between MLP and KAN architectures. The MLP has shape \[4, 16, 4\], whereas KAN \[4, 1, 4\].](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/3d5a16d7cf36/figure-1.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/3d5a16d7cf36/figure-1.png)

*论文图 1。原论文 Figure 1：“Comparison between MLP and KAN architectures. The MLP has shape [4, 16, 4], whereas KAN [4, 1, 4].”。*

左图是四输入四输出、中间 16 个节点的多层感知机，边为可学习权重，节点上为固定激活；右图是四输入四输出、中间仅 1 个求和节点的柯尔莫哥洛夫-阿诺德网络，边为可学习激活函数，节点只做加法。该图说明参数效率比较的来源：后者以极窄宽度换取每条边更强的函数表达，前者以较宽中间层与简单激活实现映射。

### 两种网络的计算有何不同，样条边如何工作？

多层感知机的计算是线性组合后接固定非线性：每层先做矩阵乘法加偏置，再在节点上施加指数线性单元等激活。本文多层感知机为单隐层 16 神经元结构，输入 4 维到隐层再到输出 4 维，总参数 148 个，推理时主要代价是稠密矩阵乘法与 16 次激活求值。

柯尔莫哥洛夫-阿诺德网络的计算是边上学函数再在节点求和：每条边是一个一元函数，节点把到达的所有边输出相加。本文网络形状为 4 到 1 再到 4，共 8 条边，每条边参数化为基函数项与样条项之和，基函数取自带门控的线性形式，样条项为 2 阶 B 样条在少量网格点上的线性组合。网格数与阶数分别取 1 和 2，每条边对应 3 个 2 次基函数的组合，总参数 40 个。节点不再放置固定激活，因此网络图看起来连线很少。

**多层感知机 × 柯尔莫哥洛夫-阿诺德网络：** 多层感知机分工是学习线性权重矩阵再经节点上固定的非线性激活得到输出；柯尔莫哥洛夫-阿诺德网络分工是把可学习的一元样条函数放在边上、节点只做求和，二者搭配对比的理由是同为通用逼近器但参数化位置相反，组合意义在于检验边上学函数是否能以更窄宽度实现同样精度的波域散射回归。

下图展示训练后每条边学到的函数，是理解可解释性说法的直接材料，不应只看作装饰曲线。

> **看图路径：** 1. 先区分每条边上蓝色虚线基函数、红色虚线样条项与黄色实线总函数的构成；2. 再比较第一行输入到中间节点的四个函数形态差异；3. 最后观察第二行中间节点到四个输出的幅值与非线性程度，理解可解释性来源

[![原论文 Figure 4：KAN’s activation functions after training.](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/3d5a16d7cf36/figure-4.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/3d5a16d7cf36/figure-4.png)

*论文图 4。原论文 Figure 4：“KAN’s activation functions after training.”。*

该图按输入到中间节点与中间节点到输出分两行排列，每子图横轴为边输入，纵轴为边输出，图中同时给出基函数分量、样条分量与二者之和。可以看到不同输入通道学到的形态差异很大，有的近似单调上升，有的呈峰状或谷状，说明网络把多元映射分解到各一元边上。第二行到输出的函数幅值更大，反映输出波的动态范围与偏置，复述时应指出这是训练后可视化的结果，而非预设的激活形状。

### 向量波与适配如何保证整体显式？

标量电压波定义把每个端口电压电流映射为两个波，参考量为标量电阻。向量定义把多端口块的电压向量电流向量整体变换，参考量为矩阵。线性多端口元件可通过选择该矩阵消除入射与反射向量间的瞬时依赖。当向量块与标量一端口共存时，整体散射矩阵仍可用同一公式计算，只是参考阻抗矩阵呈块对角，同时包含标量与多端口部分。

二极管建模采用扩展肖克利模型，引入串联与并联电阻缓解指数非线性的数值困难。在波域该关系不可直接适配，因此传统做法需牛顿迭代或朗伯函数闭式解，本文则走向量波加神经网络路线。训练数据先在基尔霍夫域按电压区间均匀采样电流，再映射到波域，避免直接在波域猜测分布。

**向量波 × 无延迟环：** 向量波负责把多端口块的电压电流整体变换为波向量，引入可调的多端口参考阻抗矩阵；无延迟环是标量波建模多端口非线性时出现的瞬时互依赖导致的不可显式计算问题，二者搭配的原因是选好参考阻抗可实现连接节与元件侧适配，从而消除隐式依赖，使含神经网络的整体结构保持显式递推。

论文把 4 个二极管支路拼成四端口块放在连接树根部，线性电阻电容放在叶节点，中间只有一个拓扑连接节。这种根-节-叶结构使每采样点的操作点计算顺序固定，适配成功后无需解方程组，这是后文实时率测量的结构基础。

### 数据如何生成，参数如何优化？

数据集在基尔霍夫域生成而非直接采集波形。对两类二极管分别建模：对应三管串联的支路电压在负 0.5 伏至 2.1 伏区间均匀采样，对应双管串联的支路在负 0.5 伏至 1.5 伏区间均匀采样，各得 1 千万量级样本点，论文写作的数字为 10 的 7 次方量级。组装为 4 维电压向量与 4 维电流向量后，按向量波定义映射为入射波与反射波对，形成回归样本。划分上保留 20% 为测试集，其余 80% 为训练集。

优化方面两种网络共用柯西损失，尺度参数取 0.5。该损失对小残差近似均方误差，对大残差增长缓慢，可减少离群大误差主导优化。两种网络均用亚当优化器并设 50 轮早停，但学习率经各自预调分别取 1 乘 10 的负 4 次方与 1 乘 10 的负 3 次方，论文明确说明不是强制相同优化设置，而是保证各自稳定收敛。实现上多层感知机用 PyTorch 训练，波数字仿真用 NumPy 实现以避免重型数据结构的运行时开销。

**柯西损失 × 归一化均方误差：** 柯西损失分工是在训练时压制大残差离群点的影响同时对小残差近似均方行为；归一化均方误差分工是在测试与电路仿真阶段度量预测波与真值波的相对能量误差，二者搭配使优化过程更稳健而评价仍用能量归一化的可比指标，新增作用是避免个别大误差主导参数更新。

架构选择目标是满足时域仿真归一化均方误差低于 1 乘 10 的负 2 次方阈值下取最小结构，且两种模型误差保持同一量级以保证公平。最终测试集波域误差多层感知机为 2.66 乘 10 的负 4 次方，柯尔莫哥洛夫-阿诺德网络为 6.71 乘 10 的负 4 次方，参数量分别为 148 与 40，后者减少超过 70%。论文未报告梯度是否截断、权重初始化与随机种子细节，复现时应视为缺项并固定自己的种子做多次重复。

### 电路、激励与评价条件如何固定？

案例电路参数在正文中以表格给出，包括电阻电容与电源电压，二极管 1N4148 参数包括饱和电流、理想因子、热电压与串并联电阻。电流源以诺顿等效的恒定值出现。评价的真值来自相同工作条件下的 LTspice 仿真，两种波数字实现仅根部网络不同，其余结构与参数一致。

激励为 1 秒方波，基频 800 赫兹、幅值 8 伏、占空比 50%。采样率 44.1 千赫并做 4 倍过采样。精度指标包括相对 LTspice 输出电压的时域归一化均方误差与对数谱距离，实时率定义为 100 次相同运行中仿真耗时与处理样本总时长之比，比值越小越接近实时。测试硬件为搭载 M4 处理器的苹果笔记本。

下表为原文给出的子电路元件表，阅读时应把它当作复现电路网表的依据，而非结果表，后文结果表另行给出。表前已说明比较问题是两种网络在相同拓扑与激励下精度与代价的差异，公平条件是共享散射矩阵与仿真流程，指标方向为误差与实时率越小越好。

| R1 | 10 | 1 | 2.2 |
| --- | --- | --- | --- |
| R4 | 1 | 390 | 2.2 |
| R7 | 9.47 | 909 | 1 |
| R10 | 1 | 1 | 2.2 |
| C1 | 2.2 | 47 | 1.5 |
| C4 | 1.5 | 1.5 | 2.2 |

该原表列出电阻与电容的取值分布，是搭建线性叶节点与连接节的前提。复述时需注意原表在文本抽取中单位与数值存在截断显示，应以原文表格与电路图为准核对千欧、微法与纳法等单位，不自行补写缺失的小数。该表不包含可运行策略的性能数字，因此不能替代结果表，下表将给出训练与仿真条件的对照。

### 精度与代价的主结果是什么？

主结果围绕 3 个问题组织：波域拟合误差如何，电路输出时域频域误差如何，实时开销如何。波域测试集上多层感知机误差更低，但两者同为 10 的负 4 次方量级。电路仿真输出上两者时域误差同为 10 的负 3 次方量级，多层感知机为 3.8 乘 10 的负 3 次方，柯尔莫哥洛夫-阿诺德网络为 6.6 乘 10 的负 3 次方；对数谱距离分别为 1.02 与 0.82，后者在频域略优。实时率分别为 1.31 与 4.74，前者更快。

下图先看时域输出的最后 5 毫秒，是判断两种实现是否跟上参考的关键证据，阅读时应注意 3 条曲线几乎重合才支持相近精度的判断。

> **看图路径：** 1. 先确认横轴为 0.995 至 1 秒的最后 5 毫秒、纵轴为电压值；2. 再对照图例中实线、虚线与点划线分别代表的参考与两种实现；3. 沿方波上升沿与下降沿检查三条曲线是否重合

[![原论文 Figure 5：Last 5 ms of Vout. The comparison among LTspice (blue solid curve), MLP (orange dashed curve),…](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/3d5a16d7cf36/figure-5.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/3d5a16d7cf36/figure-5.png)

*论文图 5。原论文 Figure 5：“Last 5 ms of Vout. The comparison among LTspice (blue solid curve), MLP (orange dashed curve), and KAN (purple dot- dashed curve) reveals that both WDF implementations achieve a…”。*

图中横轴为 0.995 秒至 1 秒，纵轴为电压，图例区分参考实线与两种实现的虚线点划线。可以看到方波高低电平的平顶与跳变沿上三者重合度很高，说明非线性滤波后的波形形状与幅度均被较好复现。该图只展示稳态尾段，不能推广到整个 1 秒的启动瞬态，完整判断需结合下方数字表中的全段误差。

下表整理波域与电路级数字结果与计算代价，包含必要基线与两种实际可运行策略。表前比较问题是窄宽度样条网络能否以更少参数达到可用精度，公平条件是同数据划分、同损失形式与同仿真激励，指标方向为参数量、归一化均方误差、对数谱距离与实时率越小越好。

| 条件 | 指标 | 多层感知机 | 柯尔莫哥洛夫-阿诺德网络 | 比较对象 |
| --- | --- | --- | --- | --- |
| 波域测试集 | 归一化均方误差 | 2.66 × 10−4 | 6.71 × 10−4 | 同划分回归误差 |
| 电路仿真全段 | 归一化均方误差 | 3.8 × 10−3 | 6.6 × 10−3 | 相对 LTspice |
| 电路仿真全段 | 对数谱距离 | 1.02 | 0.82 | 相对 LTspice |
| 参数量 | 可训练参数总数 | 148 | 40 | 同功能根部网络 |
| 实时性 | 实时率 | 1.31 | 4.74 | 同硬件 100 次平均 |

表后解释主要收益与代价：收益是参数量减少超过 70% 而时域频域误差保持同一量级，对数谱距离甚至略低；代价是实时率明显升高，论文归因于样条求值次数更多且缺乏稠密矩阵那样的成熟优化。具体而言该配置下样条边需 24 次 2 次基函数求值，而多层感知机仅需 16 次激活求值。未胜出项是柯尔莫哥洛夫-阿诺德网络在速度上落败，多层感知机在波域与时域误差上略优，因此不能说前者全面超越，只能说在内存受限时是可行替代。

### 频域与实现细节支持什么、反驳什么？

频域对比用于检验失真谐波结构是否被正确复现，而不只是波形幅度接近。论文给出输出电压的离散傅里叶变换对比，基波与谐波峰位置一致是支持相近精度的证据，高频底噪区的细小偏离是反例，说明两种近似在高频细节上仍有误差。

下图是该频域证据，阅读时应先确认对数频率轴与分贝幅度轴，再比较峰值而非底噪的整体高低。

> **看图路径：** 1. 先确认横轴为对数频率、纵轴为幅度分贝值；2. 再找到 800 赫兹附近基波峰与后续谐波峰的重合程度；3. 比较高频底噪区两种实现与参考曲线的偏离

[![原论文 Figure 6：Discrete Fourier Transform (DFT) of Vout. Curve con- vention follows what explained for Fig. 5.](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/3d5a16d7cf36/figure-6.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/3d5a16d7cf36/figure-6.png)

*论文图 6。原论文 Figure 6：“Discrete Fourier Transform (DFT) of Vout. Curve con- vention follows what explained for Fig. 5.”。*

图中横轴为频率，纵轴为幅度分贝，图例与时域图一致。可以看到 800 赫兹附近基波峰与后续谐波峰三者基本重合，中高频谐波梳状结构也大体一致，高频段细碎底噪存在可辨的偏离，但未改变主要谐波格局。该图支持时域结论，但不能单独证明听感无差异，因论文未做听感评价。

下表把训练与部署条件并列，目的是说明代价差异的来源而非重复精度数字，同样达到五列宽度要求以便核对超参数与运行阶段。

| 阶段 | 配置项 | 多层感知机 | 柯尔莫哥洛夫-阿诺德网络 | 说明 |
| --- | --- | --- | --- | --- |
| 训练 | 隐层宽度 | 16 | 1 | 输入输出均为 4 维 |
| 训练 | 非线性 | Exponential Linear Unit | G = 1，o = 2 样条边 | 后者节点仅求和 |
| 训练 | 学习率与早停 | 1 × 10−4，50 轮 | 1 × 10−3，50 轮 | 均用 Adam 与同损失 |
| 仿真 | 激励与采样 | f0 = 800 Hz，8 V，50% | fs = 44.1 kHz，4 倍过采样 | 1 秒方波 |
| 推理 | 实现与硬件 | NumPy，M4 笔记本 | NumPy，M4 笔记本 | 实时率见主结果表 |

表后需要强调的限制是实时率与实现强相关，用 PyTorch 数据结构会引入额外开销，因此论文用 NumPy 做仿真。论文推测 C++ 向量化或量化查表可能缩小差距，但未实测，属于待验证推测。另一未评测边界是多非线性多端口增多时样条方案是否反超，论文只给出定性预期而无数据，复述时不应写成已证结论。

### 哪些结论有边界，什么没有测？

论文直接报告的是单案例结论：在所选低通子电路、所选激励与采样设置下，窄宽度样条网络以更少参数达到相近精度但更慢。该结论的支持范围限于四端口静态映射与方波驱动，未覆盖正弦扫频、不同幅度、不同截止控制或完整滤波器反馈路径。数据集为均匀采样的仿真数据，未包含器件失配与测量噪声，因此对真实硬件泛化的说法属于可能而非已证。

未测量的量包括误判率之外的听感评价、不同硬件上的延迟分解、训练时间与内存峰值、量化后精度。论文未承诺延迟改善，总体趋势不等于每采样点都更快。相关性不等于因果：参数少与频域略优同时出现，不能推断参数少导致频域好，还可能与该次初始化或早停有关。

原文表格与文本在小数精度上需小心对照，例如波域误差与电路级误差数量级不同，不应混为同一指标。复述数字时应保留 148 对 40、2.66 乘 10 的负 4 次方对 6.71 乘 10 的负 4 次方、3.8 乘 10 的负 3 次方对 6.6 乘 10 的负 3 次方、1.02 对 0.82、1.31 对 4.74 的配对关系，不计算新的相对百分比。

### 复现应先做什么，需要补哪些验证？

复现先重建电路与数据管道：按电路图与元件表搭建线性部分，电流源取恒定诺顿值，二极管按串联倍数调整理想因子与电阻；在指定电压区间均匀采样生成电压电流对，再按向量波定义映射为波域样本，按八二划分训练测试。接着固定连接节散射矩阵与适配条件，分别实现单隐层 16 节点指数线性单元网络与 4 到 1 到 4 的样条网络，共用柯西损失与早停逻辑，只按原文学习率分别训练。

仿真阶段用 NumPy 实现根节叶递推，激励与采样设置与原文一致，以 LTspice 同条件结果为参考计算时域归一化均方误差、对数谱距离与 100 次平均实时率。需记录随机种子并多次重复，因原文未报告种子与方差。

资源状态方面，本次未发现来源绑定且完成超文本传输安全协议状态验证的资源，不得声称代码模型或数据已公开。缺项补验证包括不同激励与采样率下的误差、训练耗时统计、嵌入式或现场可编程门阵列上的实测开销，以及网格细化后精度是否提升。论文提到可在不改拓扑下增加样条网格提升精度，但本案例未实测该过程，复现时可作为扩展实验单独报告。

### 何时值得尝试这种替代，记住什么？

当内存占用是首要约束，或目标模型包含众多非线性单元使多层感知机需要很宽中间层时，值得尝试把根部网络换成窄宽度的样条边网络。记住的 trade-off 是参数量显著下降换来单步推理中更多非线性求值，当前中央处理器上稠密矩阵优化更成熟，因此速度可能反而下降。选择前应先在自己的电路与激励上复测 3 组数字：参数量、相对参考的时域频域误差、实测实时率。

对初学者而言，关键链条是向量波消除延迟环使结构显式，神经网络只学静态散射映射，两种网络只是该映射的不同参数化。不要把可视化边函数当作性能证明，也不要把单案例的频域略优推广为普遍优势。若能在保持同量级误差下复现 40 对 148 的参数对比，并观察到实时率差距，再讨论量化查表或底层优化，才是与原文一致的收束。

## 📐 原文公式与排版

以下展示论文原页中的数学表达区域，保留原始上下标、分式和符号排版。区域序号仅用于本文导航，不是论文公式编号。

[![原文数学表达区域 1，PDF 第 2 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/616f71a69b9b/figure-1.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/616f71a69b9b/figure-1.png)

区域 1 · [查看论文原页](https://dafx26.mit.edu/assets/papers/DAFx26_paper_25.pdf#page=2)

[![原文数学表达区域 2，PDF 第 2 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/616f71a69b9b/figure-2.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/616f71a69b9b/figure-2.png)

区域 2 · [查看论文原页](https://dafx26.mit.edu/assets/papers/DAFx26_paper_25.pdf#page=2)

[![原文数学表达区域 3，PDF 第 2 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/616f71a69b9b/figure-3.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/616f71a69b9b/figure-3.png)

区域 3 · [查看论文原页](https://dafx26.mit.edu/assets/papers/DAFx26_paper_25.pdf#page=2)

[![原文数学表达区域 4，PDF 第 2 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/616f71a69b9b/figure-4.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/616f71a69b9b/figure-4.png)

区域 4 · [查看论文原页](https://dafx26.mit.edu/assets/papers/DAFx26_paper_25.pdf#page=2)

[![原文数学表达区域 5，PDF 第 2 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/616f71a69b9b/figure-5.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/616f71a69b9b/figure-5.png)

区域 5 · [查看论文原页](https://dafx26.mit.edu/assets/papers/DAFx26_paper_25.pdf#page=2)

[![原文数学表达区域 6，PDF 第 2 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/616f71a69b9b/figure-6.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/616f71a69b9b/figure-6.png)

区域 6 · [查看论文原页](https://dafx26.mit.edu/assets/papers/DAFx26_paper_25.pdf#page=2)

[![原文数学表达区域 7，PDF 第 2 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/616f71a69b9b/figure-7.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/616f71a69b9b/figure-7.png)

区域 7 · [查看论文原页](https://dafx26.mit.edu/assets/papers/DAFx26_paper_25.pdf#page=2)

[![原文数学表达区域 8，PDF 第 2 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/616f71a69b9b/figure-8.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/616f71a69b9b/figure-8.png)

区域 8 · [查看论文原页](https://dafx26.mit.edu/assets/papers/DAFx26_paper_25.pdf#page=2)

[![原文数学表达区域 9，PDF 第 2 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/616f71a69b9b/figure-9.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/616f71a69b9b/figure-9.png)

区域 9 · [查看论文原页](https://dafx26.mit.edu/assets/papers/DAFx26_paper_25.pdf#page=2)

[![原文数学表达区域 10，PDF 第 3 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/616f71a69b9b/figure-10.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/616f71a69b9b/figure-10.png)

区域 10 · [查看论文原页](https://dafx26.mit.edu/assets/papers/DAFx26_paper_25.pdf#page=3)

[![原文数学表达区域 11，PDF 第 3 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/616f71a69b9b/figure-11.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/616f71a69b9b/figure-11.png)

区域 11 · [查看论文原页](https://dafx26.mit.edu/assets/papers/DAFx26_paper_25.pdf#page=3)

[![原文数学表达区域 12，PDF 第 4 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/616f71a69b9b/figure-12.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/616f71a69b9b/figure-12.png)

区域 12 · [查看论文原页](https://dafx26.mit.edu/assets/papers/DAFx26_paper_25.pdf#page=4)

[![原文数学表达区域 13，PDF 第 4 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/616f71a69b9b/figure-13.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/616f71a69b9b/figure-13.png)

区域 13 · [查看论文原页](https://dafx26.mit.edu/assets/papers/DAFx26_paper_25.pdf#page=4)

[![原文数学表达区域 14，PDF 第 4 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/616f71a69b9b/figure-14.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/616f71a69b9b/figure-14.png)

区域 14 · [查看论文原页](https://dafx26.mit.edu/assets/papers/DAFx26_paper_25.pdf#page=4)

[![原文数学表达区域 15，PDF 第 4 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/616f71a69b9b/figure-15.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/616f71a69b9b/figure-15.png)

区域 15 · [查看论文原页](https://dafx26.mit.edu/assets/papers/DAFx26_paper_25.pdf#page=4)

[![原文数学表达区域 16，PDF 第 4 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/616f71a69b9b/figure-16.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/616f71a69b9b/figure-16.png)

区域 16 · [查看论文原页](https://dafx26.mit.edu/assets/papers/DAFx26_paper_25.pdf#page=4)

[![原文数学表达区域 17，PDF 第 4 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/616f71a69b9b/figure-17.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/616f71a69b9b/figure-17.png)

区域 17 · [查看论文原页](https://dafx26.mit.edu/assets/papers/DAFx26_paper_25.pdf#page=4)

[![原文数学表达区域 18，PDF 第 4 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/616f71a69b9b/figure-18.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/616f71a69b9b/figure-18.png)

区域 18 · [查看论文原页](https://dafx26.mit.edu/assets/papers/DAFx26_paper_25.pdf#page=4)

[![原文数学表达区域 19，PDF 第 4 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/616f71a69b9b/figure-19.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/616f71a69b9b/figure-19.png)

区域 19 · [查看论文原页](https://dafx26.mit.edu/assets/papers/DAFx26_paper_25.pdf#page=4)

[![原文数学表达区域 20，PDF 第 4 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/616f71a69b9b/figure-20.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/616f71a69b9b/figure-20.png)

区域 20 · [查看论文原页](https://dafx26.mit.edu/assets/papers/DAFx26_paper_25.pdf#page=4)

[![原文数学表达区域 21，PDF 第 4 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/616f71a69b9b/figure-21.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/616f71a69b9b/figure-21.png)

区域 21 · [查看论文原页](https://dafx26.mit.edu/assets/papers/DAFx26_paper_25.pdf#page=4)

[![原文数学表达区域 22，PDF 第 6 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/616f71a69b9b/figure-22.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/dafx-2026/616f71a69b9b/figure-22.png)

区域 22 · [查看论文原页](https://dafx26.mit.edu/assets/papers/DAFx26_paper_25.pdf#page=6)

另有 17 个候选区域因边界不明确或图片数量、尺寸限制未展开；请[查看完整论文](https://dafx26.mit.edu/assets/papers/DAFx26_paper_25.pdf)中的原始排版。

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。
- 评分规则：type-aware-v1
- 评分模型：muse-spark-1.3-contributor
- 评分请求协议：openai_responses

---

[← 返回 dafx-2026 论文汇总](/posts/conference-dafx-2026/)
