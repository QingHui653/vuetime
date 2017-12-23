<template>
  <div class="test2">
    <div class='directive'>
      <span v-color="color">{{num}}</span>
      <input v-focus>
    </div>
    <div class="extend">
       查看 test2.html 页面 
       <!-- 在当前 页面 定义 然后 引用自己 会造成 js 死循环 -->
       <!-- <author></author> -->
    </div>
    <div class="set">
       查看 test2.html 页面
    </div>
    <br>
  </div>
</template>

<script>

export default {
  name: 'author',
  template: "<p><a :href='authorUrl'>{{authorName}}</a></p>",
  data () {
    return {
      num: 10,
      color: 'red',
      authorName: 'ihih',
      authorUrl: 'http://www.ihih.club:8089'
    }
  },
  created: function () {
    console.log('test2.js Vue init ' + this.name)
  },
  methods: {
    add: function () {
      // add()
    }
  },
  directives: {
    /* 五种生命周期 :
    1.bind:只调用一次
    2.inserted 被绑定元素插入父节点时调用
    3.update 被绑定于元素所在的模板更新时调用
    4.componentUpdated:被绑定元素所在模板完成一次更新周期时调用
    5.unbind:只调用一次

    不写 默认绑定 bind  和 update
    */
    focus: {
      bind: function () { // 被绑定
        console.log('1 - bind')
      },
      inserted: function (el) { // 绑定到节点
        el.value = ' 2 - 自定义 指令 初始化值'
      },
      update: function () { // 组件更新
        console.log('3 - update')
      },
      componentUpdated: function () { // 组件更新完成
        console.log('4 - componentUpdated')
      },
      unbind: function () { // 解绑
        console.log('1 - bind')
      }
    },
    /* 查看文档  el, binding, vnode
    允许修改el */
    color: function (el, binding, vnode) {
      el.style = 'color:' + binding.value
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
