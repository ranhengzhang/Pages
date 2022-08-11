import Vue from 'vue'
import App from './App.vue'
// 引入ElementUI组件库
import ElementUI from 'element-ui';
// 引入ElementUI的**全部**样式
import 'element-ui/lib/theme-chalk/index.css';

Vue.config.productionTip = false
// 应用ElementUI
Vue.use(ElementUI)

new Vue({
  render: h => h(App),
}).$mount('#app')
