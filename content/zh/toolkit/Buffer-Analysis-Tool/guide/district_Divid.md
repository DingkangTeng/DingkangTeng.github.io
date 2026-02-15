---
title: 区域划分
weight: 3
---

## 描述

这是一个辅助脚本，用于按多边形划分兴趣点以进行缓冲区分析。

## 工具箱结构

该工具需要以下 **[4 个主要输入字段](#输入参数)**：
![Photo](../images/buffer_Analysis_Area.png)

## 输入参数

### 输入图层

此字段指定需要被划分的点图层。

### 区域划分图层

此字段指定定义每个区域边界的多边形图层。

### 选择区域名称字段

此字段指定为多边形图层定义区域的字段。

### 保存路径

- 输入输出的基本名称。
  ![My diagram](toolkits/001/save_Path_Divid.png)
- 根据您指定的输出路径，结果将自动保存为 `shapefiles (.SHP)` 或文件地理数据库中的 `要素类（feature classes）`。

## 运行脚本

设置所有参数后，单击 **运行** 执行脚本。
![Photo](../images/run_Divid.png)

## 结果

输出结果包含一个存储区域名称的字段，该字段以您选择的 **[选择区域名称字段](#选择区域名称字段)** 命名。
![My diagram](toolkits/001/result_Structure_Divid.png)
