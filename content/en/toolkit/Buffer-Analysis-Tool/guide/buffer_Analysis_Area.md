---
title: Buffer Analysis (Area)
weight: 2
---

## Description

This is a specialized script that performs buffer analysis based solely on the buffer area. It builds multi‑ring buffers around source points and calculates the area of each buffer ring intersecting with the specified district boundaries.

## Toolbox script Structure

The tool requires the following **6 main input fields**:
![Photo](../images/buffer_Analysis_Area.png)

## Input Parameters

### Source POI Layer

This field specifies the point layer containing the source POIs (centers of the buffers).

### Select zone name field of source POI

This field specifies the field that defines zones (e.g., districts) for the source POIs.

### Disrict Layer

This field specifies the polygon layer define the boundary of each zone.

### Select zone name field of district layer

This field specifies the field that defines zones for the polygon layer.

> [!NOTE]
> Ensure that the values in the **Select zone name field of source POI** and **Select zone name field of district layer** correspond to the same zones. It is strongly recommended to use the [District Divid script](district_divid) to generate the zone name field for the **Source POI Layer** from the **District Layer**.

### Buffer (Meter) Syntax (Python)

This field defines the buffer radii in meters using a Python list comprehension.
> [!EXAMPLE]
>
> 1. **Define specific buffer distances**
>
>     ```python
>     [10, 20, 30, 50, 100, 500, 1000]
>     ```
>
> 2. **Generate a range of distances from 10 to 2000 meters with an interval of 10 meters**
>
>     ```python
>     [10 * x for x in range(1,201)]
>     ```

### Save path

- Enter the base name for the output CSV file.
  ![Photo](../images/save_Path.png)
- The results will be saved as `CSV` files.
  ![Photo](../images/save_Result.png)

## Run the script

After setting all parameters, click **Run** to execute the script.
![Photo](../images/run_Area.png)

## Result structure

The result contains four columns:

- **city**: The name of the zone, as defined by the **Source Zone Field**.
- **distance**: The radius of the buffer (in meters).
- **Num**: The area of the buffer ring (in square meters) intersecting with the corresponding city boundary for the corresponding **city** and **distance**.
- **totalNum**: The total area (in square meters) of the corresponding **city**.

![Photo](../images/result_Structure_Area.png)
