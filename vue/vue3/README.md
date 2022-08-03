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

#### `setup`注意点

##### `setup`执行时机

在`beforeCreate`之前执行一次，`this`是`undefined`

##### setup的参数

-   `props`

    >   值为对象，包含：组件外部传递过来，且组件内部声明接收了的属性

-   `context`

    >   上下文对象
    >
    >   -   `attrs`
    >       值为对象，包含：组件外部传递过来，但没有在`props`配置中声明的属性，相当于`this.$attrs`
    >   -   `slots`
    >       收到的插槽内容，相当于`this.$slots`
    >   -   `emit`
    >       分发自定义事件的函数，相当于`this.$emit`

## 定义响应式

### 新增`ref`**函数**

>   新增的`ref`函数并不影响Vue2中`ref`标签属性的使用

`ref`函数创造出的对象是一个`RefImpl`（reference implement）实例对象

一个`RefImpl`对象中，赋予的值在`value`中，而`value`是一个代理属性，但是`get`和`set`并不在本体上，而是在原型链上

>   `ref`处理基本类型时，使用的是`get`和`set`，但是处理应用类型时，使用Vue3内部的`reactive`函数，该函数封装了一个ES6原生的函数`Proxy`

### `reactive`函数

定义一个**对象类型**的响应式数据（只在对象类型使用，基本类型使用的是`ref`函数）

### 对比`reactive`和`ref`

>   **从定义数据角度对比**
>
>   -   ref用来定义：**基本类型数据**。
>   -   reactive用来定义：**对象（或数组）类型数据**。
>   -   备注：ref也可以用来定义**对象（或数组）类型数据**, 它内部会自动通过`reactive`转为**代理对象**。

>   **从原理角度对比**
>
>   -   ref通过`Object.defineProperty()`的`get`与`set`来实现响应式（数据劫持）。
>   -   reactive通过使用**Proxy**来实现响应式（数据劫持）, 并通过**Reflect**操作**源对象**内部的数据。

>   **从使用角度对比**
>
>   -   ref定义的数据：操作数据**需要**`.value`，读取数据时模板中直接读取**不需要**`.value`。
>   -   reactive定义的数据：操作数据与读取数据：**均不需要**`.value`。

## Vue3的响应式原理

### vue2.x的响应式

-   实现原理：

    -   对象类型：通过`Object.defineProperty()`对属性的读取、修改进行拦截（数据劫持）。

    -   数组类型：通过重写更新数组的一系列方法来实现拦截。（对数组的变更方法进行了包裹）。

        ```javascript
        Object.defineProperty(data, 'count', {
            get () {}, 
            set () {}
        })
        ```

-   存在问题：

    -   新增属性、删除属性, 界面不会更新。
    -   直接通过下标修改数组, 界面不会自动更新。

### Vue3.0的响应式

-   实现原理:

    -   **通过Proxy（代理）**：拦截对象中任意属性的变化，包括：属性值的读写、属性的添加、属性的删除等。

    -   **通过Reflect（反射）**：对源对象的属性进行操作。

    -   MDN文档中描述的Proxy与Reflect：

        -   [Proxy](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Proxy)

        -   [Reflect](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Reflect)

            ```javascript
            new Proxy(data, {
            	// 拦截读取属性值
                get (target, prop) {
                	return Reflect.get(target, prop)
                },
                // 拦截设置属性值或添加新属性
                set (target, prop, value) {
                	return Reflect.set(target, prop, value)
                },
                // 拦截删除属性
                deleteProperty (target, prop) {
                	return Reflect.deleteProperty(target, prop)
                }
            })
            
            proxy.name = 'macabaca'   
            ```

>   **ES6中的Proxy**
>
>   通过原生`Proxy`函数生成的`Proxy`事例对象中：
>
>   -   `[[Handler]]`：对属性进行操作时调用的所使用的配置
>   -   `[[Target]]`：保存原数据
>
>   `Proxy`对象中的

## 计算属性与监视属性