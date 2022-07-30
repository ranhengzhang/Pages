# vuex

vuex是专门在Vue中实现集中式状态（数据）管理的一个Vue插件，对Vue应用中多个组件的共享状态进行集中式的管理（读/写），也是一种组件间通信的方式，且适用于任意组件间通信

<!-- tabs:start -->

### **官网**

[开始 | Vuex](https://vuex.vuejs.org/zh/guide/)

### **Github仓库**

[vuejs/vuex: 🗃️ Centralized State Management for Vue.js.](https://github.com/vuejs/vuex)

<!-- tabs:end -->

## vuex工作原理

![img](img/README/20220730020034572.png)

>   图源：[Vuex 是什么？ | Vuex](https://vuex.vuejs.org/zh/)

>   如果不需要进行多余的统筹工作，则可以直接在Vue组件调用`commit`绕过`Actions`
>
>   ```mermaid
>   graph LR
>   	A["Vue Components"]--"Commit"-->B["Mutations"]
>   ```

## 使用vuex

使用vuex时，需要创建对应的`.js`文件，一般为`store/index.js`，有时是`vuex/store.js`

```javascript
// action中的函数格式
increase(context, value) {
    ...
}
```

## getters

类似计算属性，对`state`中的数据进行加工

## mapState

可以批量生成计算属性，减少重复操作

```javascript
...mapState({
    sum: 'sum',
    school: 'school',
    subject: 'subject',
}),
// key用于调用，是计算属性的属性名，可以与value不一样
```

>   当`key`和`value`相同时，可以使用数组形式
>
>   ```javascript
>   ...mapState(['sum', 'school', 'subject']),
>   ```

>   `mapGetters`用法相同

## mapMutations

可以用于批量生成方法，但是使用之后，对应的方法***传递参数时都应该在调用时传递***

```vue
<template>
<div>
    {{increment(n)}}
</div>
</template>
<script>
    ...,
    ...mapMutations({
        increment: 'INCREASE',
        decrement: 'DECREASE'
    }),
</script>
```

