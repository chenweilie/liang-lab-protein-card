# Liang Lab Protein Card — 技术约束文档

## 产品定位

为南洋理工大学（NTU）Liang Zhao-Xun实验室定制的蛋白质结构可视化卡片生成器。将蛋白质3D结构渲染为精美的可分享卡片，用于组会汇报、论文figure、社交媒体传播。

**一句话描述：** 输入蛋白质ID → 3D渲染 → 生成带实验室品牌的精美卡片 → 一键导出/分享

## 目标用户

Liang Lab PI及团队成员（约5-15人），研究方向为cyclic di-GMP信号通路、合成生物学与天然产物生物合成。

---

## 核心用户流程

### Flow 1：单蛋白质卡片生成
1. 用户输入 PDB ID（实验结构）或 UniProt ID（AlphaFold预测结构）
2. 系统从 RCSB PDB 或 AlphaFold DB 获取结构数据
3. 3D渲染蛋白质结构，用户可旋转/缩放调整角度
4. 用户选择着色模式和标注选项
5. 点击"Generate Card"，生成带品牌信息的卡片
6. 导出为 PNG（高清）或直接复制分享

### Flow 2：预设蛋白质快速访问
1. 首页展示 Liang Lab 核心研究蛋白质列表（预设）
2. 点击即加载对应结构，跳至 Flow 1 的步骤 3

### Flow 3：蛋白质对比视图
1. 用户输入两个蛋白质ID
2. 并排渲染两个结构（如 apo vs holo，野生型 vs 突变体）
3. 生成对比卡片

---

## 技术约束

### 架构
- **纯前端单页应用（SPA）**，无后端
- **框架**：React + TypeScript
- **构建工具**：Vite
- **部署目标**：Cloudflare Pages（静态托管）

### 3D渲染引擎
- 使用 **Mol*（molstar）** 作为蛋白质3D渲染引擎
  - NPM包：`molstar`
  - 官方文档：https://molstar.org/docs/
  - 选择Mol*而非3Dmol.js的原因：Mol*支持更丰富的着色模式、更好的渲染质量、AlphaFold pLDDT着色原生支持
- Mol* 以 React 组件方式嵌入

### 数据源API
- **RCSB PDB**：`https://files.rcsb.org/download/{PDB_ID}.cif` — 获取实验解析结构（mmCIF格式）
- **AlphaFold DB**：`https://alphafold.ebi.ac.uk/api/prediction/{UNIPROT_ID}` — 获取AlphaFold预测结构
- **PDB REST API**：`https://data.rcsb.org/rest/v1/core/entry/{PDB_ID}` — 获取蛋白质元数据（名称、来源生物、解析方法、分辨率等）
- **UniProt API**：`https://rest.uniprot.org/uniprotkb/{UNIPROT_ID}` — 获取蛋白质功能描述
- 所有API均为公开免费，无需认证，支持CORS

### 卡片导出
- 使用 `html2canvas` 或 Mol* 内置的截图 API 将3D视图渲染为图片
- 卡片输出分辨率：至少 1200x1200px（适配社交媒体）
- 导出格式：PNG
- 可选：正方形（社交媒体）、16:9（PPT）、A4竖版（论文figure）三种比例

---

## 功能详细定义

### 3D查看器交互
- 鼠标左键拖拽：旋转
- 滚轮：缩放
- 右键拖拽：平移
- 移动端：双指缩放，单指旋转
- 双击重置视角

### 着色模式（用户可切换）
1. **By Chain** — 每条链不同颜色（默认）
2. **By pLDDT** — AlphaFold置信度着色（蓝→橙→黄，仅AlphaFold结构可用）
3. **By Secondary Structure** — α-helix红色、β-sheet蓝色、loop灰色
4. **By B-factor** — 温度因子着色（仅实验结构可用）
5. **By Hydrophobicity** — 疏水性着色
6. **Uniform** — 单一颜色，用户可选色

### 表示方式（用户可切换）
1. **Cartoon**（默认）— 二级结构卡通表示
2. **Surface** — 分子表面
3. **Ball & Stick** — 球棍模型（适合展示配体/小分子）
4. **Ribbon** — 色带表示

### 配体/小分子高亮
- 自动检测结构中的非蛋白组分（配体、辅因子、离子）
- 配体以 Ball & Stick 方式高亮显示，蛋白以 Cartoon 显示
- **特别重要**：c-di-GMP（cyclic di-GMP）作为Liang Lab核心研究分子，如检测到应特别高亮并标注名称

### 卡片布局
卡片分为两部分：
1. **上方主体**（占75%）：3D结构渲染图
2. **下方信息栏**（占25%）：
   - 蛋白质名称（大字）
   - PDB ID / UniProt ID
   - 来源生物（organism）
   - 解析方法 & 分辨率（实验结构）或 "AlphaFold Predicted"（预测结构）
   - 简短功能描述（一句话，从UniProt/PDB获取）

### 卡片品牌元素
- 左下角：**"Liang Lab"** 文字标识，下方小字 "School of Biological Sciences, NTU"
- 右下角：生成日期
- 整体配色方案：深色背景（#1a1a2e 或类似暗色），白色/浅色文字，科技感风格
- 卡片边框：细微的渐变边框（蓝→青，呼应生物信息学常用配色）

### Liang Lab 预设蛋白质列表
在首页以卡片网格展示，点击直接加载：

| 名称 | PDB ID | 说明 |
|------|--------|------|
| MapZ-CheR1-c-di-GMP complex | 5CZR | PilZ适配蛋白与趋化甲基转移酶的共晶结构 |
| RocR (EAL domain) | 3SY8 | c-di-GMP磷酸二酯酶 |
| MapZ (apo form) | 解析时从PDB搜索 | 未结合c-di-GMP的MapZ |
| STING-c-di-GMP complex | 4F5D | 天然免疫适配蛋白STING与c-di-GMP |
| PilZ domain protein | 搜索Liang lab相关 | PilZ结构域 |
| Diguanylate cyclase (GGDEF) | 搜索相关 | c-di-GMP合成酶 |

> **注意**：以上PDB ID需要验证准确性。实现时应在代码中硬编码确认后的ID列表，并从PDB API实时获取元数据。

---

## UI设计约束

### 整体风格
- **暗色主题**，科技感，生物信息学美学
- 参考配色：深蓝/深灰背景，青色/蓝色点缀，白色文字
- 字体：Inter 或 JetBrains Mono（标题），系统无衬线字体（正文）
- 圆角卡片，微妙阴影，毛玻璃效果

### 页面结构
1. **顶部导航栏**：Logo（"Liang Lab Protein Card"）、搜索框
2. **首页**：预设蛋白质卡片网格 + 搜索入口
3. **查看器页面**：左侧3D查看器（主体）+ 右侧控制面板（着色、表示方式、导出选项）
4. **对比页面**：左右并排两个查看器

### 响应式
- 桌面端：双栏布局（查看器 + 控制面板）
- 移动端：单栏，控制面板折叠到底部抽屉
- 最小宽度：360px

---

## 明确不做的功能

- ❌ 用户注册/登录系统
- ❌ 后端服务器或数据库
- ❌ 蛋白质序列分析或比对
- ❌ 分子动力学模拟
- ❌ 自定义蛋白质结构上传（v1不做，未来可加）
- ❌ 论文DOI自动解析（v1不做，复杂度高）
- ❌ 多语言支持（英文only）
- ❌ 离线PWA功能

---

## 部署

- 平台：Cloudflare Pages
- 域名：由用户配置（建议 proteincard.lianglab.org 或类似）
- 构建命令：`npm run build`
- 输出目录：`dist/`

---

## 验收标准

1. 输入 PDB ID `5CZR`，能在3秒内加载并渲染MapZ-CheR1复合物的3D结构
2. 能切换至少3种着色模式，视觉效果明显不同
3. 点击"Generate Card"能导出一张1200px+的PNG卡片，包含蛋白质信息和Liang Lab品牌
4. 在手机Chrome浏览器上能正常使用触摸旋转和缩放
5. 预设蛋白质列表至少包含4个可正常加载的条目
6. 对比视图能并排展示两个不同的蛋白质结构
7. 整体页面加载时间（不含蛋白质数据获取）<2秒
