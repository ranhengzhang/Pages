# Vue3

## 新的创建方式

Vue3版本添加了一种创建脚手架的方式：使用vite创建

```bash
npm init vite-app demo
```

## Vue3项目结构的变化

```javascript
// 不再引入vue构造函数，而是引入了一个**名为createApp的工厂函数**
import { createApp } from 'vue'
import App from './App.vue'
// createApp创建应用实例对象app
createApp(App).mount('#app')
```

>   Vue3的`template`中**可以**没有根标签

## 组合式API

### setup

新的 `setup` 选项在组件被创建**之前**执行，一旦 `props` 被解析完成，它就将被作为组合式 API 的入口

组件中所用到的数据、方法等都被配置到`setup`中

>   在 `setup` 中你应该避免使用 `this`，因为它不会找到组件实例。`setup` 的调用发生在 `data` property、`computed` property 或 `methods` 被解析之前，所以它们无法在 `setup` 中被获取

`setup`函数返回值：

1.  若返回一个对象，则对象中的属性、方法, 在模板中均可以直接使用。（重点关注！）
2.  *若返回一个渲染函数：则可以自定义渲染内容。（了解）*

>   虽然Vue2的声明还是可以使用，但是如果重名，则以Vue3中的声明优先
>
>   但是无法在Vue3的`setup`中访问Vue2声明的元素，因为`setup`函数比`created`生命周期函授周期还早一点触发

>   `setup`不能是一个async函数，因为async函数返回值不再是`return`的对象，而是`promise`，模板看不到`return`对象中的属性