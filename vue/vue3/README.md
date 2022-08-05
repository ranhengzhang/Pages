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

### 计算属性

```javascript
value = computed(()=>{
    ...
})

value = computed({
    get() {
        ...
    },
    set(value) {
        ...
    }
})
```

### 监听属性

>   推荐阅读：[侦听器 | Vue.js](https://staging-cn.vuejs.org/guide/essentials/watchers.html#basic-example)

>   如果是监视一个`reactive`对象，不管是否开启深度监听，都会监听到深度数据，而且返回的`newValue`和`oldValue`是相同的，因为它们**指向的是同一个对象**
>
>   深度监听是无法关闭的
>
>   如果*以回调函数的形式*监听一个`reactive`对象**中的一个引用类型数据**，则需要开启深度监听

>   **对于监视`reactive`对象**
>
>   -   `watch(obj, ()=>{})`：`deep`配置无效
>   -   `watch(()=>obj, ()={})`：`deep`配置有效

>   **关于`.value`**
>
>   如果使用`ref`定义一个基本类型， 不需要`.value`
>
>   如果使用`ref`定义一个引用类型，需要`.value`，除非开启深度监听
>
>   因为`ref`对象监听的是`value`值，而`ref`定义一个引用类型时，`value`值是一个对象，无法普通监听
>
>   **可以理解为实际上对`ref`的监听是*`value`的地址有没有发生变化***

## `watchEffect`函数

```javascript
watchEffect(()=>{
    ...
});
```

`watchEffect`不指明监视的对象，而是在回调中使用到的数据改变时调用

>   `watchEffect`和`computed`
>
>   -   `computed`注重的是计算结果，必须写返回值
>   -   `watchEffect`更注重过程，不用写返回值

## 生命周期

![img](img/README/20220805000955568.png)

![20220805001359883](img/README/20220805001359883.svg)

>   图源：[生命周期钩子 | Vue.js](https://staging-cn.vuejs.org/guide/essentials/lifecycle.html)

### 生命周期钩子

Vue3将关于`create`有关的两个钩子在组合API中取消了（其实还是可以写在`setup`外，以Vue2的形式声明）

>   如果同时在组合式API和配置项中声明了生命周期，两者都会执行，只是组合式API中的生命周期钩子执行时间更早

## 自定义`hook`函数

>   **`hook`**
>
>   本质是一个函数，把`setup`函数中使用的Composition API（组合式API）进行了封装

## `toRef`函数

创建一个`ref`对象，其`value`值指向另一个对象中的某个属性

## 其它组合式API

### `shallowRactive`和`shallowRef`

`shallowRactive`只会响应引用对象的第一层，没有深层次的响应

`shallowRef`同理（有时传递的是一个对象）

### `readonly`和`shallowReadonly`

将一个**响应式数据**转为只读数据

### `toRaw`与`markRaw`

将响应式对象转为普通数据（toRaw只能处理`reactive`对象）

`markRaw`标记一个对象，标记的对象**永远不会成为**响应式数据

## `customRef`

创建一个自定义的`ref`，并对其依赖项跟踪和更新触发进行显式控制

>   `trigger`函数通知Vue重新解析模板
>
>   `track`函数表示跟踪返回数据的变化
