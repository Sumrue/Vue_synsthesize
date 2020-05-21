// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store' // vuex配置
import '@/assets/css/rest.css' // 样式重置
import '@/plugin/element-ui' // ElementUI 引入插件配置
import 'element-ui/lib/theme-chalk/index.css'
require('@/assets/mock/index.js') // 用mock 模拟数据
Vue.config.productionTip = false
/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>'
})
