// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
// main.js  和 index.html 都 配置 在 webpack 文件 中 加载 时 导入

import Vue from 'vue'
import router from '@/router'
import Vuex from 'vuex'
import VueI18n from 'vue-i18n'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import '@/locale'

import index from '@/views/index'
import store from './store'

Vue.config.productionTip = false

let vm = new Vue({
  el: '#app',
  router: router,
  store: store,
  VueI18n,
  /* 第一种 index 引用 */
  /* render: h => h(vueIndex) */
  /* 第二种 index 引用 */
  template: '<index/>',
  components: {
    index
  },
  created: function () {
    // `this` 指向 vm 实例
    console.log('main.js Vue init ' + this.el)
  }
})

Vue.use({
  vm,
  Vuex,
  ElementUI
})

Vue.component('todo-item', {
  template: '<li>这是个待办项</li>'
})
