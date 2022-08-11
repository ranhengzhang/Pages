import Vue from 'vue'
import App from './App.vue'
// 引入ElementUI组件库
// import ElementUI from 'element-ui';
// 引入ElementUI的**全部**样式
// import 'element-ui/lib/theme-chalk/index.css';
import { Row, Button, DatePicker } from 'element-ui';

Vue.config.productionTip = false
// 应用ElementUI
// Vue.use(ElementUI)
Vue.component(Row.name, Row);
Vue.component(Button.name, Button);
Vue.component(DatePicker.name, DatePicker);

new Vue({
  render: h => h(App),
}).$mount('#app')
