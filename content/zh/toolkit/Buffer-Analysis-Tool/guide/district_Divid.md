---
title: District Divid
weight: 3
---

## Description

This is an auxiliary script that divides POIs by polygon for buffer analysis.

## Toolbox script Structure

The tool requires the following **[4 main input fields](#input-parameters)**:
![Photo](../images/district_Divid.png)

## Input Parameters

### Input Layer

This field specifies the point layer that needed to be divided.

### Zone Division Layer

This field specifies the polygon layer define the boundary of each zone.

### Select zone name field

This field specifies the field that defines zones for the polygon layer.

### Save path

- Enter the base name for the output.
  ![Photo](../images/save_Path_Divid.png)
- The results will be automatically saved as `shapefiles (.SHP)` or `feature classes` in a file geodatabase, depending on the output path you specify.

## Run the script

After setting all parameters, click **Run** to execute the script.
![Photo](../images/run_Divid.png)

## Result structure

The output contains a field that stores the zone names, named after the **[Select zone name field](#select-zone-name-field)** you selected.
![Photo](../images/result_Structure_Divid.png)
