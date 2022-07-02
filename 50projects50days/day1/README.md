# 目标效果

[demo](Expanding%20Cards.html ':include')

>   点击卡片时，对应卡片会展开

# 实现方式

使用flex布局，改变`flex`样式变化大小

通过点击时改变`class`的方式实现变化样式的效果

使用`transition`，添加样式变化时的过渡动画

通过结点的`classList`属性的`add`和`remove`方法更改属性

# 知识点

<!-- tabs:start -->

### **Flex布局**

```css
#box {
    display: flex;
}

.retract {
    flex-grow: .5;
}

.expand {
    flex-grow: 5;
}
```

[Flex 布局教程：语法篇 - 阮一峰的网络日志](http://ruanyifeng.com/blog/2015/07/flex-grammar.html)

### **css transition**

```css
.retract {
    transition: flex .5s ease-in;
}
```

[使用 CSS transitions - CSS（层叠样式表） | MDN](https://developer.mozilla.org/zh-CN/docs/Web/CSS/CSS_Transitions/Using_CSS_transitions)

<!-- tabs:end -->
