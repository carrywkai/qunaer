import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 引入重置样式
import './assets/styles/reset.css'
// 移动端的1像素边框的问题
import './assets/styles/border.css'
// 引入fastclick第三方包
import fastClick from 'fastclick'

Vue.config.productionTip = false
// 调用fastclick方法，来解决300秒延迟问题
fastClick.attach(document.body)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
