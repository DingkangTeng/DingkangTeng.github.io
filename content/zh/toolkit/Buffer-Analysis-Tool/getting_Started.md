---
title: 开始使用
date: 2026-02-10
weight: 1
type: docs
---

## 快速入门

{{% steps %}}

### 下载工具箱

通过我的 **[GitHub 发布页](https://github.com/DingkangTeng/Sensitive-Analysis-for-Buffer-Analysis-Tool/releases)** 下载缓冲区分析工具。

如需查看源代码，请访问 **[GitHub 仓库](https://github.com/DingkangTeng/Sensitive-Analysis-for-Buffer-Analysis-Tool)**。欢迎探索、贡献或反馈问题。

> [!TIP]
> 如无法访问GitHub，可使用中文镜像下载。（链接待补充）

### 解压缓冲区分析工具

将缓冲区分析工具解压到您选择的任意位置。为方便起见，建议将其放置在 ArcGIS Pro 项目的根文件夹中，如下图所示。
![My diagram](toolkits/001/ArcGIS_Project_Root.png)

### 在 ArcGIS 中打开工具箱

首次打开工具箱时，初始化可能需要几秒钟时间。

该工具箱中包含三个脚本：

- **[Buffer Analysis](../guide/buffer_analysis)**：执行缓冲区分析的主脚本。
- **[Buffer Analysis (Area)](../guide/buffer_analysis_area)**：仅根据缓冲区面积执行分析的专用脚本。
- **[District Divid](../guide/district_divid)**：用于按多边形划分兴趣点（POI）以进行缓冲区分析的辅助脚本。

![My diagram](toolkits/001/toolbox.png)

> [!NOTE]
> ArcGIS Pro 可能会警告您，打开 Python 工具箱将运行第三方代码。只需点击“是”即可继续。
> ![My diagram](toolkits/001/toolbox_Warning.png)

{{% /steps %}}

## 下一步

以下章节将详细介绍这些脚本的具体用法：

{{< cards >}}
  {{< card url="../guide/buffer_analysis" title="Buffer Analysis" icon="document-duplicate" >}}
  {{< card url="../guide/buffer_analysis_area" title="Buffer Analysis (Area)" icon="document-duplicate" >}}
  {{< card url="../guide/district_divid" title="District Divid" icon="adjustments-vertical" >}}
{{< /cards >}}
