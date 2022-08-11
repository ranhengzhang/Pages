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

### `props`

#### 值为对象

```javascript
// router\index.js
{
    name: 'igubigu',
    path: 'detail/',
    component: MyDetail,
    props: {
        key: value
    }
}
```

该方式会将`props`中的所有`key-value`都会以`props`的形式传给对应组件

#### 值为`true`

```javascript
// router\index.js
{
    name: 'igubigu',
    path: 'detail/',
    component: MyDetail,
    props: true
}
```

该方法会将该组件收到的所有`params`参数==以`props`的形式传递==

#### 值为函数

```javascript
// router\index.js
{
    name: 'igubigu',
    path: 'detail/',
    component: MyDetail,
    props($route) {
        return {
            id: $route.query.id,
            title: $route.query.title
        }
    }
}
```

>   获取参数时可以结构赋值：`props({query})`或`props({query:{id, title}})`

## 简化路径

把`to`改为对象形式，不写`path`，而是写`name`，`name`在`router/index.js`中提前配置

## `router-link`的`replace`属性

```html
<router-link replace></router-link>
```

>   推荐阅读：[Vue路由跳转-push，replace的区别\_```陪伴的博客-CSDN博客\_vue路由push和replace用法](https://blog.csdn.net/Jk200165/article/details/124354711)

## 编程式路由导航

有时并不使用`a`标签进行跳转（`<router-link></router-link>`标签最终会被转为`a`标签），这是就会给元素绑定`click`事件，在`click`事件中调用`$router`的方法实现跳转

### `push`

```javascript
this.$router.push({
    name: 'igubigu',
    query: {
        id: message.id,
        title: message.title,
    }
});
```

### `replace`

```javascript
this.$router.replace({
    name: 'igubigu',
    query: {
        id: message.id,
        title: message.title,
    }
})
```

### `back`

```javascript
this.$router.back();
```

>   回退到上一历史记录页面

### `forward`

```javascript
this.$router.forward();
```

>   前进到下一历史记录页面

### `go`

```typescript
this.$router.go(n: Number);
```

>   如果传入正数就前进`n`条历史记录，如果传入负数就是倒退
>
>   如果步数不够则不会响应

## 缓存路由组件

因为组件切走之后会被销毁，所以组件中的表单项也会丢失，如果希望切回来之后内容保留，可以使用`<keep-alive>`标签包裹住`<router-view>`标签

>   `<keep-alive>`标签默认会保持包裹住的所有路由组件，如果只希望某些组件被缓存，就需要添加`include`属性指定需要缓存的***组件*名**
>
>   如果有多个组件，则使用`:include="['MyNews', 'MyMessage']"`的格式（也可以直接在字符串中使用`,`分隔，或在字符串中使用正则）

### 被缓存组件的新钩子

#### activated

激活

#### deactivated

失活

## 路由守卫

### 全局路由守卫

#### 前置路由守卫

设置路由权限

只有当满足一定条件时才能使用对应的路由

设置路由守卫时，应当在`router/index.js`中设置：

```javascript
const router = new VueRouter({
    routes: [
        ...
    ]
});

router.beforeEach((...)=>{
    ...
})

export default router
```

路由对象创建后不能马上暴露，应当设置路由守卫之后暴露，设置路由守卫使用的是路由对象的`beforeEach`方法，表示**每一次路由切换*之前***执行的任务

>   `router.beforeEach`为全局前置路由守卫（每次路由切换之前被调用，以及初始化的时候被调用）
>
>   该方法中的函数会接收三个参数：`to`、`form`、`next`
>
>   放行访问使用`next`方法：
>
>   ```javascript
>   router.beforeEach((to, from, next)=>{
>       ...
>       next()
>       ...
>   })
>   ```

#### 后置路由守卫

```javascript
const router = new VueRouter({
    routes: [
        ...
    ]
});

router.afterEach((...)=>{
    ...
})

export default router
```

>   每次路由切换之前，以及初始化的时候被调用
>
>   后置路由守卫的参数只有`to`和`from`，没有`next`，因为`next`参数时用来控制是否进行跳转的方法

#### 在路由中配置

如果有太多路由需要校验，在`beforeEach`会很麻烦，所以一般在路由中就配置：

```javascript
{
    ...
    meta: {
        isAuth: true
    },
    ...
},
```

`meta`是路由元信息，即程序员自定义的信息，可以通过`to.meta.xxx`获取内容

### 独享路由守卫

有时不希望对所有路由进行控制，所以需要在路由中对某个路由单独配置

```javascript
{
    ...
    beforeEnter(to, from, next) {
        ...
    }
    ...
},
```

>   **独享路由守卫只有前置，没有后置！**

### 组件内路由守卫

组件内路由守卫在组件中配置，与钩子类似，为三个方法

#### `beforeRouteEnter`

```javascript
export default {
    name: ...,
    beforeRouteEnter(to, from, next) {
        ...
    },
}
```

该方法会在**进入路由组件时调用**

>   如果路由组件不是通过路由进入，而是直接被静态放在父组件中，那么进入父组件时不会调用

#### `beforeRouteLeave`

```javascript
export default {
    name: ...,
    beforeRouteLeave(to, from, next) {
        ...
    },
}
```

该方法在<font size=5>**离开**</font>路由组件时调用，注意与`afterEach`的含义区分

#### `beforeRouteUpdate`

```javascript
export default {
    name: ...,
    beforeRouteUpdate(to, from, next) {
        ...
    },
}
```

>   在当前路由改变，但是该组件被复用时调用
>   举例来说，对于一个带有动态参数的路径 `/users/:id`，在 `/users/1` 和 `/users/2` 之间跳转的时候，
>   由于会渲染同样的 `UserDetails` 组件，因此组件实例会被复用。而这个钩子就会在这个情况下被调用。
>   因为在这种情况发生的时候，组件已经挂载好了，导航守卫可以访问组件实例 `this`
>
>   **来源：**[导航守卫 | Vue Router](https://router.vuejs.org/zh/guide/advanced/navigation-guards.html#%E5%8F%AF%E7%94%A8%E7%9A%84%E9%85%8D%E7%BD%AE-api)

## 路由重定向和别名

>   [重定向和别名 | Vue Router](https://v3.router.vuejs.org/zh/guide/essentials/redirect-and-alias.html#%E9%87%8D%E5%AE%9A%E5%90%91)

## 路由工作模式

更改路由工作模式的选项在`router/index.js`中：

```javascript
const router = new VueRouter({
    mode: ...,
}
```

### hash模式

Vue路径中的`#`后的内容称为哈希值（这里的哈希与数据结构中的哈希无关）

hash值不会随着http请求发送给服务器

### history模式

该模式不会出现`#`符号，使得浏览器路径与正常路径相似，但是兼容性略差

如果使用history模式，项目部署后可能出现404问题（没有`#`分隔hash，导致向服务器发送了错误的请求）
