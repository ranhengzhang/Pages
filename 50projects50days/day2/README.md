# 目标效果

[Demo](Progress%20Steps.html ':include')

>   点击按钮，进度条前进或后退

# 实现方式

使用`flex`布局分布四点

使用绝对定位和`z-index`放置进度条及显示层次

将进度存储为变量，根据变量计算样式

每次点击时更新变量的值，重新计算样式

# 知识点

<!-- tabs:start -->

### **绝对定位**

[绝对定位\_czw10000的博客-CSDN博客\_绝对定位](https://blog.csdn.net/weixin_48722971/article/details/111705347)

### **before伪元素**

[css伪元素:before和:after用法详解 - wonyun - 博客园](https://www.cnblogs.com/wonyun/p/5807191.html)

<!-- tabs:end -->
