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

>   如果不需要进行多余的统筹工作，则可以直接在Vue组件调用`commit`绕过`Actions`
>
>   ```mermaid
>   graph LR
>   	A["Vue Components"]--"Commit"-->B["Mutations"]
>   ```
