---
title: '查看模型'
description: '结果查看页面说明'
prev: ./extract
next: ./compare
---

# 查看模型

## 汇总信息

`汇总信息`页面是对结构整体指标的汇总，显示内容包括工程信息、结构信息、质量、层间位移角、位移比、层间位移比、剪重比、刚重比、刚度比、受剪承载力比、周期以及基底内力。

![image](/outreaderjs/structure/structure-summary.png)

## 含钢量汇总

`含钢量汇总`页面是对结构材料用量的汇总，显示内容包括结构基本信息、墙柱梁板材料总量及每平用量、当前主要材料参考价格。
注意，材料价格不定期更新，仅供参考使用。

![image](/outreaderjs/structure/structure-quantity-summary.png)

## 计算参数

`计算参数`页面显示内容包括结构总体信息、计算控制信息、风荷载信息以及地震信息。

![image](/outreaderjs/structure/structure-parameter.png)

## 周期

`周期`页面显示内容包括考虑扭转耦联的周期和平动系数、地震最大作用方向的周期和平动系数、振型质量参与系数。
注意，PKPM 不输出地震最大作用方向的周期和平动系数，并且竖向振型质量参与系数需要在 PKPM 软件中勾选计算才会输出。

![image](/outreaderjs/structure/structure-period.png)

## 内力

`内力`页面显示内容包括风荷载和地震作用下的楼层剪力和弯矩，当未在 YJK 或者 PKPM 软件中勾选计算横风向风荷载时无横风向数据。

![image](/outreaderjs/structure/structure-force.png)

## 位移角

`位移角`页面显示内容包括顺风向风荷载和地震作用下的楼层位移和层间位移角，偶然偏心地震作用规定水平力下的楼层位移比和层间位移比。

![image](/outreaderjs/structure/structure-drift.png)

## 整体验算结果

`整体验算结果`页面显示内容包括工程信息、塔属性、质量信息、地下室楼层侧向刚度比验算（剪切刚度）、结构整体抗倾覆验算、结构整体稳定验算（刚重比）和风振舒适度验算（顶点加速度）。
注意，PKPM 软件结果输出缺少塔属性、地下室楼层侧向刚度比验算（剪切刚度）、风荷载下结构整体稳定验算(刚重比)数据。

![image](/outreaderjs/structure/structure-general.png)

## 楼层分布数据

`楼层分布数据`页面显示内容包括楼层属性（高度、面积、墙地比）、质量比、刚度比、剪重比、抗剪承载力比、规定水平力下倾覆力矩分配、柱剪力与分段基底剪力百分比、单向少墙分析。
注意，单向少墙分析需要在 YJK 软件中勾选`按边缘构件轮廓计算配筋`，尚未确定 PKPM 中是否有类似功能。

![image](/outreaderjs/structure/structure-distribute.png)

## 调整系数

`调整系数`页面显示内容包括薄弱层剪力放大系数、剪重比调整系数和外框调整系数。
注意，当 YJK 或者 PKPM 计算不需要进行某项调整时，无对应的调整系数。

![image](/outreaderjs/structure/structure-factor.png)

## 工程量

`工程量`页面显示内容包括墙柱梁板中混凝土、型钢、钢筋的总用量和每平用量。

![image](/outreaderjs/structure/structure-quantity.png)

## 构件指标

### 轴压比

`轴压比`页面目前显示内容包括框架柱轴压比和墙柱轴压比。
注意，PKPM 软件中墙柱另有输出，这里不输出。

![image](/outreaderjs/structure/element-uc.png)

### 配筋率

`工程量`页面目前显示内容包括框架柱截面配筋率和体积配箍率。

![image](/outreaderjs/structure/element-rs.png)
