<template>
  <div class="hello">
    <todo-item></todo-item>
    <h2>{{ msg }}</h2>
    <!-- 完整写法 -->
    <!-- <span v-bind:title="message">
      鼠标悬停几秒钟查看此处动态绑定的提示信息！
    </span> -->
    1.绑定信息 (v-bind或：)
    <div :title="message">
      鼠标悬停几秒钟查看此处动态绑定的提示信息！
    </div>
    <br>
    2.控制 (v-if)
    <div class="if">
      <button @click="switchSeen">显示/隐藏</button>  <span v-if="seen">现在你看到我了</span>
    </div>
    <br>
    3.循环数组 (v-for)
    <div id="for">
      <ol>
        <li v-for="(todo,index) in todos">
          {{ index }} -- {{ todo.text }}
        </li>
      </ol>
      <!--过滤-->
      <ol>
        <li v-for="n in evenNumbers">{{ n }}</li>
      </ol>
      <!-- 自定义 方法 过滤 -->
      <!-- <ol>
        <li v-for="n in even(numbers)">{{ n }}</li>
      </ol> -->
    </div>
    <br> 
    4.绑定事件 (v-on或@)
    <div class="on">
      <button v-on:click="reverseMessage">逆转消息</button>
    </div>
    <br>
    5.表单绑定
    <div id="form">
      <p>{{ msg }}</p>
      <input v-model="msg">
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  /* 数据: 需要使用的 都需要在这定义   */
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      message: '页面加载于 ' + new Date().toLocaleString(),
      seen: true,
      numbers: [1, 2, 3, 4, 5],
      todos: [
        { text: '学习 JavaScript' },
        { text: '学习 Vue' },
        { text: '从入门到跑路' }
      ]
    }
  },
  created: function () {
    console.log('test.js Vue init ' + this.name)
  },
  computed: {
    evenNumbers: function () {
      return this.numbers.filter(function (number) {
        return number % 2 === 0
      })
    }
    /* even: function (numbers) {
      return numbers.filter(function (number) {
        return number % 2 === 0
      })
    } */
  },
  /* 方法：绑定的方法 */
  methods: {
    reverseMessage: function () {
      this.msg = this.msg.split('').reverse().join('')
    },
    switchSeen: function () {
      this.seen = !this.seen
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
