// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
// main.js  和 index.html 都 配置 在 webpack 文件 中 加载 时 导入

import Vue from 'vue'
import {router} from '@/router/index'
import Vuex from 'vuex'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import i18n from '@/locale/index'

import iView from 'iview'
import 'iview/dist/styles/iview.css'

import axios from 'axios'
import store from './store'

/* import index from '@/views/index' */
import App from './App'

Vue.config.productionTip = false

Vue.prototype.$http = axios

Vue.use(Vuex)
Vue.use(ElementUI)
Vue.use(iView)

Vue.component('todo-item', {
  template: '<li>这是个待办项</li>'
})

var vm = new Vue({
  el: '#app',
  router: router,
  store: store,
  i18n, // 此处必须
  /* 第一种 index 引用 */
  /* render: h => h(vueIndex) */
  /* 第二种 index 引用 */
  template: '<App/>',
  components: {
    App
  },
  created: function () {
    // `this` 指向 vm 实例
    console.log('main.js Vue init ' + this.el)
  }
})
Vue.use(vm)
