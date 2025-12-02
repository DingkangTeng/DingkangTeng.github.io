---
title: "基于机器学习的房地产市场划分方法——以武汉市为例 (Translation: Real estate market segmentation method based on machine learning - a case study of Wuhan)"

# Authors
# If you created a profile for a user (e.g. the default `admin` user), write the username (folder name) here
# and it will be replaced with their full name and linked to their profile.
authors:
  - admin
  - SiyuChen
  - YangLuo
  - JingZhang

date: "2024-10-13T00:00:00Z"

# Schedule page publish date (NOT publication"s date).
publishDate: "2024-10-13T00:00:00Z"

# Publication type.
# Accepts a single type but formatted as a YAML list (for Hugo requirements).
# Enter a publication type from the CSL standard.
publication_types: ["paper-conference"]

# Publication name and optional abbreviated publication name.
publication: "2024年中国房地产学术年会* (In *2024 China Real Estate Academic Annual Conference*)"
publication_short: "*2024 CIREA*"

abstract: 本文以网络抓取的2024年3月武汉市6154条住宅房地产成交数据为样本，研究如何运用机器学习技术，结合大数据分析手段对房地产市场进行划分。本文选择市场均价作为特征变量进行房地产市场划分，探讨神经网络、K均值模型在房地产市场划分中的应用，并进一步探索如何改进K均值模型至基于K均值的价格与坐标分离模型的空间划分模型，最终确定基于K均值的价格与坐标分离模型是一种较好的房地产市场划分模型。通过利用归一化互信息将基于K均值的价格与坐标分离模型结果与武汉市现行的《房地产市场区域板块划分》和传统克里金插值法进行对比，验证模型的有效性和实用性。研究表明，基于机器学习的“基于K均值的价格与坐标分离模型”在房地产市场分析与管理中具有重要意义。

# # Summary. An optional shortened abstract.
# summary: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis posuere tellus ac convallis placerat. Proin tincidunt magna sed ex sollicitudin condimentum.

tags:
  - 房地产市场
  - 大数据
  - 机器学习
  - K均值

# Display this page in the Featured widget?
featured: fasle

# Custom links
links:
  - type: pdf
    url: conference-paper.pdf

---

**Abstract (Translation)**

This study uses a sample of 6,154 residential real estate transaction records in Wuhan in March 2024, obtained through web scraping, to investigate how machine learning techniques, combined with big data analysis, can be used to segment the real estate market. The study selects the market average price as the feature variable for segmenting the real estate market, explores the application of neural networks and the K-means model in this segmentation, and further investigates how to improve the K-means model into a spatial segmentation model based on the K-means price and coordinate separation model. It ultimately concludes that the K-means price and coordinate separation model is an effective approach for real estate market segmentation. By utilizing normalized mutual information, the results of the K-means price and coordinate separation model are compared with Wuhan’s current "Real Estate Market Regional Segmentation" and the traditional Kriging interpolation method, validating the model’s effectiveness and practicality. The study demonstrates that the machine learning-based "K-means price and coordinate separation model" holds significant importance for the analysis and management of the real estate market.