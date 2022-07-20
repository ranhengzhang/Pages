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

### mixin

所有的公共的配置项都可以写在混合中，之后只需要引入即可使用混合的内容

>   混合的内容如果有重复项，则使用配置的值，丢弃混合的值
>
>   但是生命周期的钩子**不以任何一方为主，==两者都会被调用==**

#### 局部混合

```javascript
// mixin.js

export const mixin = {
    data() {
        return ...
    }
    methods: {
        methodName(): {
            ...
        }
    },
    mounted() {
        ...
    }
}
```

```vue
<!-- App.vue -->

<template>
  <div @click="methodName">
  </div>
</template>

<script>
import {mixin, ...} from '.../mixin'
export default {
  name: 'App',
  mixins: [mixin]
}
</script>
```

#### 全局混合

```javascript
// mixin.js

export const mixin1 = {
    ...
}

export const mixin2 = {
    ...
}
```

```javascript
// main.js

import {mixin1, mixin2} from './mixin'

Vue.mixin(mixin1)
Vue.mixin(mixin2)
```

## 插件

```javascript
// plugins.js
export default {
    install(Vue) {
        Vue.mixin({
            data() {
                return {
                    name: 'plugin name'
                }
            }
        })
        ...
    }
}
```

```javascript
import plugins from './plugins'

Vue.use(plugins)
```

插件用于对Vue进行增强

>   `install`的第一个参数`Vue`是Vue的构造器
>
>   调用时传入的参数都将依次放在`Vue`之后

---

>   在编写样式时，切记所有的样式最终会汇总在一起，所以可能会引发样式冲突，而后引入的样式会覆盖之前引入的样式
>
>   如果希望避免冲突，可以在`style`标签中加上`scoped`（`<style scoped></style>`），这样每个组件的样式只在每个组件中生效
>
>   原理是每个组件的标签中都会有一个随机生成的序列号（`data-v-xxxxxxxx`），然后使用标签的属性选择器即可控制指定组件中的内容
>
>   **`App`组件一般只添加全局样式**
>
>   `style`标签中还可以使用`lang`来指定编写样式的语言（css、less等）
