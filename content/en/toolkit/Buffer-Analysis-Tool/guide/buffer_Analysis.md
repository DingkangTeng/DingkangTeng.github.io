---
title: Buffer Analysis
weight: 1
---

## Toolbox script Structure

The tool requires the following **6 main inputed fields**:
![Photo](../images/buffer_Analysis.png)

## Input Parameters

### Source POI Layer

This field specifies the point layer containing the source POIs (centers of the buffers).

### Select zone name field of source POI

This field specifies the field that defines zones (e.g., districts) for the source POIs. If you do not need to calculate by zone, select a field where all values are identical.

### Target POI Layer

This field specifies the point layer containing the target POIs to be counted within the buffers.

### Select zone name field of target POI

This field specifies the field that defines zones for the target POIs. If you do not need to calculate by zone, select a field where all values are identical.

> [!NOTE]
> Ensure that the values in the **Select zone name field of source POI** and **Select zone name field of target POI** correspond to the same zones.

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
- This field specifies the folder path where the results will be saved as `CSV` files.
  ![Photo](../images/save_Result.png)

## Run the script

After setting all parameters, click **Run** to execute the script.
![Photo](../images/run.png)

## Result structure

The result contains four columns:

- **city**: The name of the zone, as defined by the **Source Zone Field**.
- **distance**: The radius of the buffer (in meters).
- **Num**: The number of **Target POI** points within the buffer for the corresponding **city** and **distance**.
- **totalNum**: The total number of **Target POI** points within the corresponding **city**

![Photo](../images/result_Structure.png)