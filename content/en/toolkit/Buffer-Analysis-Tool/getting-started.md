---
title: Getting Started
date: 2026-02-10
weight: 1
type: docs
---

> [!WARNING]
> This document is **under construction**.

## Quick Start from Template

{{% steps %}}

### Download the toolbox

Download the Buffer Analysis Tool from my [github](https://github.com/DingkangTeng/Sensitive-Analysis-for-Buffer-Analysis-Tool/releases)

### Unzip the Buffer Analysis Tool

Unzip the Buffer Analysis Tool to any location of your choice. It is recommended to place it in the root folder of your ArcGIS Pro project for convenience, as shown in the figure below.
![My diagram](toolkits/001/ArcGIS_Project_Root.png)

### Open tookbox in ArcGIS

It may take a few seconds to initialize the toolkit when you first open it.

There are three scripts in the toolbox:

- **Buffer Analysis**: the main script for performing buffer analysis.
- **Buffer Analysis (Area)**: a specialized script that performs buffer analysis based solely on the buffer area.
- **District Divid**: an auxiliary script that divides POIs by polygon for buffer analysis.

![My diagram](toolkits/001/toolbox.png)

> [!NOTE]  
> ArcGIS Pro may warn you that opening a Python toolbox runs third-party code. Simply click "Yes" to proceed.
> ![My diagram](toolkits/001/toolbox_Warning.png)

{{% /steps %}}

## Next

The following sections will describe the specific usage of these scripts:

{{< cards >}}
  {{< card url="../guide/buffer_Analysis" title="Buffer Analysis" icon="document-duplicate" >}}
  {{< card url="../guide/buffer_Analysis_Area" title="Buffer Analysis (Area)" icon="adjustments-vertical" >}}
  {{< card url="../guide/district_Divid" title="District Divid" icon="document-duplicate" >}}
{{< /cards >}}
