# Vue组件

## 非单文件组件

### 创建组件

```javascript
const varName = Vue.extend({
    template: `
        ...
    `
    data(){
        return {
            ...
        }
    },
    ...
})
```

>   创建组件时不写`el`段，因为最终所有组件都会被一个`vm`管理，由`vm`决定组件为哪个容器服务
>
>   组件使用`template`管理模板
>
>   如果写了`name`字段，则开发者工具里面显示的名称将和`name`字段对应

### 注册组件

#### 局部

```javascript
new Vue({
    el: '#root',
    components: {
        comName: varName
    }
})
```

#### 全局

```typescript
Vue.component(comName: string, varName: object)
```

---

>   如果在创建组件时，没有调用`Vue.extend`，而是直接声明一个对象，那么在这一步会自动调用`Vue.extend`

### 使用组件

```html
<div id="root">
    ...
    <comName></comName>
    <comName/>
    ...
</div>
```

>   一个组件可以被使用多次，并且即使是相同的组件，它们之间的数据也不会互相干扰
>
>   组件名是多个单词时：
>
>   1.   可以使用短横线`-`连接单词
>   2.   可以使用大驼峰`ComName`的形式，但是这种形式需要Vue脚手架的支持
>
>   如果使用单标签，在没有脚手架的情况下单个组件只能被使用一次

---

>   组件的本质其实是一个`VueComponent`构造函数，且并不是由程序员定义的，是由`Vue.extend`生成的
>
>   使用组件时，Vue解析时会帮我们创建对应组件的实例对象，即帮我们执行`new VueComponent(options)`
>
>   每次调用`Vue.extend`返回的都是一个全新的`VueComponent`
>
>   >   **关于this**
>   >
>   >   关于对象中`data`函数、`methods`中的函数、`watch`中的函数、`computed`中的函数中的`this`：
>   >
>   >   -   在组件配置中：`this`指向的是`VueComponent`实例对象
>   >   -   在`new Vue({})`中：`this`指向的是Vue实例对象