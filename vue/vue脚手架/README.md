# Vue脚手架

Vue脚手架即Vue CLI

## 创建Hellow Word项目

在控制台输入`vue create demo`创建项目

创建之后的项目结构如下：

```plaintext
demo
├── babel.config.js
├── jsconfig.json
├── node_modules
├── package.json
├── package-lock.json
├── public
│   ├── favicon.ico
│   └── index.html
├── README.md
├── src
│   ├── App.vue
│   ├── assets
│   │   └── logo.png
│   ├── components
│   │   └── HelloWorld.vue
│   └── main.js
└── vue.config.js
```

>   其中
>
>   -   `package.jsonpackage-lock.json`文件对所有包的版本进行控制
>   -   `src/assets`文件夹用于存放图片
>   -   `src/components`用于存放`App`以外的所有组件

在执行`npm run serve`之后，首先执行`main.js`中的代码：

```javascript
/*
  该文件是整个项目的入口文件
*/
// 引入vue
import Vue from 'vue'
// 引入App组建，该组件是所有组件的父组件
import App from './App.vue'
// 关闭Vue生产提示
Vue.config.productionTip = false
// 创建Vue实例对象vm
new Vue({
  // 将App组件放入容器中
  render: h => h(App),
}).$mount('#app')
```

所有的组件都将会放在`public/index.html`中：

```html
<!DOCTYPE html>
<html lang="">
  <head>
    <meta charset="utf-8">
    <!-- 针对IE的特殊配置，让IE以最高渲染级别渲染页面 -->
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <!-- 开启移动端的理想视口 -->
    <meta name="viewport" content="width=device-width,initial-scale=1.0">
    <link rel="icon" href="<%= BASE_URL %>fazaivicon.ico">
    <title><%= htmlWebpackPlugin.options.title %></title>
  </head>
  <body>
    <!-- 如果浏览器不支持JS，则<noscript>标签中的内容就不会被渲染到页面中 -->
    <noscript>
      <strong>We're sorry but <%= htmlWebpackPlugin.options.title %> doesn't work properly without JavaScript enabled. Please enable it to continue.</strong>
    </noscript>
    <!-- 容器 -->
    <div id="app"></div>
    <!-- built files will be auto injected -->
  </body>
</html>
```

这之中的所有el表达式（`<%= value %>`）都在`package.json`文件中配置

`render`是为了在精简版中进行模板解析，因为`vue.runtime.xxx.js`没有模板解析器，所以不能使用`template`配置项，需要使用`render`函数接受到`createElement`函数去指定具体内容

>   推荐阅读：[终于搞懂了vue 的 render 函数（一） -\_-|||\_\_\_Amy的博客-CSDN博客\_render vue](https://blog.csdn.net/sansan_7957/article/details/83014838)

## 对Vue CLI进行配置

[配置参考 | Vue CLI](https://cli.vuejs.org/zh/config/)

## Vue中的配置项

### ref

该标签的作用是替代`id`属性，如果在vue组件中需要使用`id`获取dom元素时，应避免使用`document.getElement`，而是使用`this.$refs.id`取代

```vue
<template>
  <div>
    <h1 v-text="msg" ref="title"></h1>
    <button @click="showDOM">点我输出上方的dom元素</button>
    <Child ref="child"/>
  </div>
</template>

<script>
import School from './components/Child.vue'
export default {
  name: 'App',
  components: {Child},
  data() {
    return {
      msg: 'welcome vue'
    }
  },
  methods: {
    showDOM() {
      console.log(this.$refs.title);
    }
  },
}
</script>

<style>

</style>
```



>   如果该属性用在了组件标签上，那么获取到的将不是dom元素，而是对应组件的vc

### props

该配置项的作用是从父组件接收值

```vue
<!-- Parent.vue -->
<template>
  <Child prop1="value1" prop2="value2"/>
</template>
```

```vue
<!-- Child.vue -->
<template>
  <div>
    {{prop1}}
    {{prop2}}
  </div>
</template>

<script>
export default {
  name: 'App',
  // (1) 简单声明接收
  // props: ['name', 'sex', 'age']
  
  // (2) 接收的同时对类型进行限制
  // props: {
  //   name: String,
  //   sex: String,
  //   age: Number
  // }

  // (3) 加上默认值的指定和必要性的限制
  // props: {
  //   name: {
  //     type: String, // 类型是字符串
  //     required: true // 该属性是必要的
  //   },
  //   age: {
  //     type: Number, // 类型是数字
  //     default: 999 // 默认值999
  //   },
  //   sex: {
  //     type: String,
  //     required: true,
  //   }
  // }
}
</script>
```

>   接收的值是**==不可更改的==**，vue底层会监测对`props`的修改，如果进行修改就会发出警告，若业务需求确实需要修改，只能复制`props`的内容到`data`中一份，然后去修改`data`中的数据
>
>   字段重复时，接收的值的优先级要大于定义的值
>
>   `props`中的东西是被优先接收的，所以可以在`data`和`methods`中使用`props`中的内容，因为`data`中的数据在`props`之后配置
