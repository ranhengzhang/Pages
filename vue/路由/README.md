# 路由

vue-router，是Vue的一个插件库，专门用来实现SPA应用

>   **SPA应用**
>
>   -   单页Web应用（single page web application）
>   -   整个应用**只有一个完整的页面**
>   -   点击页面中的导航链接**不会刷新页面**，只会做页面的**局部更新**
>   -   数据需要通过AJAX请求获取

## 路由

### 什么是路由

一个路由就是一组映射关系（`key-value`）

`key`为路径，`value`可能是`function`或`componen`

### 路由分类

#### 后端路由

 `value`是`function`，用于处理客户端提交的请求。

工作过程：服务器接收到一个请求时，根据请求路径找到匹配的函数来处理请求, 返回响应数据。

#### 前端路由

`value`是`component`，用于展示页面内容。

工作过程：当浏览器的路径改变时，对应的组件就会显示。

## 使用路由

```javascript
// main.js
import VueRouter from "vue-router";
import router from "@/router";

Vue.use(VueRouter)

new Vue({
    router
})
```

```javascript
// @/router/index.js
import VueRouter from "vue-router";
import MyAbout from "@/components/Com";

export default new VueRouter({
    routes: [
        {
            path: '/pth',
            component: Com,
        }
    ]
});
```

```vue
<template>
    <div>
    ...
        <router-link active-class="active" to="/pth">xxx</router-link>
    ...
        <router-view></router-view>
    ...
    </div>
</template>
```

`<router-link>`标签用于标记路由链接的位置

`<router-view>`标签用于标记路由内容展示的位置

>   往后会将组件区分为两个文件夹：
>
>   -   pages：路由组件
>   -   components：一般组件

每个路由组件的切走都是一次销毁，会触发`destroy`，每次切回都是一次挂载，会触发`mounte`

每个路由组件身上都会有`$route`和`$router`

其中`$route`是**该组件**的路由配置，`$router`是所有组件的路由配置，所有组件的`$router`都一样

## 嵌套路由

在父级路由中配置`children`项：

```javascript
export default new VueRouter({
    routes: [
        {
            path: '/home',
            component: MyHome,
            children: [
                {
                    path: 'news',
                    component: MyNews,
                },
                {
                    path: 'message',
                    component: MyMessage,
                }
            ]
        }
    ]
});
```

**==在组件中，跳转链接需要些完整链接==**

>   一般嵌套不超过六层

## 路由传参

### `query`

>   **方法一**
>
>   直接在`to`后的链接后添加`?key=value`（query格式）
>
>   ```html
>   <router-link :to="`path?key=${value}`"></router-link>
>   ```

>   **方法二**
>
>   参数较多时，将`to`的内容写为一个对象（对象格式）
>
>   ```html
>   <router-link :to="{
>       path: 'path',
>       query: {
>           key: value,
>       },
>   }">...</router-link>
>   ```

取参数时，从`$route.query`中取

### `params`

将`query`写法中的`query`改为`params`

>   `to`中不以`query`形式传参，而是在地址后加上`/value...`
>
>   ```html
>   <router-link :to="`path/value1/value2`"></router-link>
>   
>   <router-link :to="{
>       name: 'name',
>       params: {
>           key: value,
>       },
>   }">...</router-link>
>   ```
>
>   在`router/index.js`中配置时，路径后加上`/:key1/:key2...`

>   `params`传参时，必须使用`name`，不能使用`path`

## 简化路径

把`to`改为对象形式，不写`path`，而是写`name`，`name`在`router/index.js`中提前配置
