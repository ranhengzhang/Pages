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
│   └── ...
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
