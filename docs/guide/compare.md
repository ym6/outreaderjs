---
title: '对比模型'
description: '模型对比页面说明'
prev: ./structure
next: ./update
---

# 对比模型

模型对比支持不同软件、不同项目之间相互对比，模型数量不限。图表曲线种类目前具有 8 种颜色 7 种标记，可确保 56 条曲线 28 个模型不重复，考虑到使用效率及频率，足够保障正常使用，后续如有需要也可以扩展。

## 汇总信息

`汇总信息`页面是对结构整体指标的汇总，显示内容包括工程信息、结构信息、质量、层间位移角、位移比、层间位移比、剪重比、刚重比、刚度比、受剪承载力比、周期以及基底内力。

![image](/outreaderjs/compare/compare-summary.png)

## 含钢量汇总

`含钢量汇总`页面是对结构材料用量的汇总，显示内容包括结构基本信息、墙柱梁板材料总量及每平用量、当前主要材料参考价格。
注意，材料价格不定期更新，仅供参考使用。

![image](/outreaderjs/compare/compare-quantity-summary.png)

## 计算参数

`计算参数`页面显示内容包括结构总体信息、计算控制信息、风荷载信息以及地震信息。

![image](/outreaderjs/compare/compare-parameter.png)

## 周期

`周期`页面显示内容包括考虑扭转耦联的周期和平动系数、地震最大作用方向的周期和平动系数、振型质量参与系数。
注意，PKPM 不输出地震最大作用方向的周期和平动系数，并且竖向振型质量参与系数需要在 PKPM 软件中勾选计算才会输出。

![image](/outreaderjs/compare/compare-period.png)

## 内力

`内力`页面显示内容包括风荷载和地震作用下的楼层剪力和弯矩，当未在 YJK 或者 PKPM 软件中勾选计算横风向风荷载时无横风向数据。

![image](/outreaderjs/compare/compare-force.png)

## 位移角

`位移角`页面显示内容包括顺风向风荷载和地震作用下的楼层位移和层间位移角，偶然偏心地震作用规定水平力下的楼层位移比和层间位移比。

![image](/outreaderjs/compare/compare-drift.png)

## 整体验算结果

`整体验算结果`页面显示内容包括工程信息、质量信息、地下室楼层侧向刚度比验算（剪切刚度）、结构整体抗倾覆验算、结构整体稳定验算（刚重比）和风振舒适度验算（顶点加速度）。
注意，PKPM 软件结果输出缺少塔属性、地下室楼层侧向刚度比验算（剪切刚度）、风荷载下结构整体稳定验算(刚重比)数据。

![image](/outreaderjs/compare/compare-general.png)

## 楼层分布数据

`楼层分布数据`页面显示内容包括楼层属性（高度、面积、墙地比）、质量比、刚度比、剪重比、抗剪承载力比、规定水平力下倾覆力矩分配、柱剪力与分段基底剪力百分比。

![image](/outreaderjs/compare/compare-distribute.png)

## 调整系数

`调整系数`页面显示内容包括薄弱层剪力放大系数、剪重比调整系数和外框调整系数。
注意，当 YJK 或者 PKPM 计算不需要进行某项调整时，无对应的调整系数。

![image](/outreaderjs/compare/compare-factor.png)

## 工程量

`工程量`页面显示内容包括墙柱梁板中混凝土、型钢、钢筋的总用量和每平用量。

![image](/outreaderjs/compare/compare-quantity.png)
