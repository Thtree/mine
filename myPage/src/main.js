import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
import echarts from 'echarts';

Vue.prototype.$echarts = echarts
Vue.config.productionTip = false

Vue.use(Element)

new Vue({
  store,
  router,
  Element,
  render: h => h(App)
}).$mount('#app')
