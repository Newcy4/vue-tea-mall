import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// 引入公共样式文件
import '@/assets/styles/global.less'
// 引入淘宝无限适配文件
import '@/assets/js/flexible.js'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount('#app')
