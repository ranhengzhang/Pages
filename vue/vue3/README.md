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