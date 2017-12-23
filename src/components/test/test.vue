<template>
  <div class="hello">
    <todo-item></todo-item>
    <h2>{{ msg }}</h2>
    <!-- 完整写法 -->
    <!-- <span v-bind:title="message">
      鼠标悬停几秒钟查看此处动态绑定的提示信息！
    </span> -->
    1.绑定信息 (v-bind或：)
    <!--1.绑定css styel 2.class  -->
    <div :title="message">
      鼠标悬停几秒钟查看此处动态绑定的提示信息！
    </div>
    <br>
    2.控制 (v-if v-else v-show)
    <div class="if">
      <button @click="switchSeen">显示/隐藏</button>  
      <span v-if="seen">v-if 现在你看到我了</span>
      <span v-else> v-else 现在你看不见我</span>
      <br>
      <span v-show="seen"> v-show 现在你看到我了</span>
    </div>
    <br>
    3.循环数组 (v-for)
    <div id="for">
      <ol>
        <li v-for="(todo,index) in todos" :key="todo.text">
          {{ index }} -- {{ todo.text }}
        </li>
      </ol>
      <!--过滤-->
      <ol>
        <li v-for="n in evenNumbers" :key="n">{{ n }}</li>
      </ol>
      <!-- 自定义 方法 过滤 -->
      <ol>
        <li v-for="n in sortMynumber" :key="n">{{ n }}</li>
      </ol>
    </div>
    <br> 
    4.绑定事件 (v-on或@)
    <div class="on">
      <button v-on:click="reverseMessage">逆转消息</button>
      <!-- 绑定键盘 事件 百度 键值表  -->
      <input v-on:keyup.enter="reverseMessage" value="回车" />
      <br>
      <!-- .lazy：取代 imput 监听 change 事件  .number：输入字符串转为数字  .trim：输入去掉首尾空格-->
      多选绑定一个值
      <input type="checkbox" id="seen" v-model="seen">
      <label for='seen'>{{seen}}</label>
      <br>
      多选绑定一个数组 <br>
      <input type="checkbox" id="web" value="PHP" v-model="web_Names">
      <label for="web">PHP</label><br/>
      <input type="checkbox" id="JAVA" value="JAVA" v-model="web_Names">
      <label for="web">JAVA</label><br/>
      <input type="checkbox" id="PY" value="PY" v-model="web_Names">
      <label for="web">PY</label>
      <p>{{web_Names}}</p>
      <br>
      单选 绑定数据
      <input type="radio" id="one" value="男" v-model="sex">
      <label for="one">男</label>
      <input type="radio" id="two" value="女" v-model="sex">
      <label for="one">女</label>
      <p>{{sex}}</p>
    </div>
    <br>
    5.表单绑定 v-modal
    <div id="form">
      <p>{{ msg }}</p>
      <input v-model="msg">
    </div>
    6.v-text & v-html
    <div>
      <span v-text="msg"></span>
      <span v-html="msgHtml"></span>
    </div>
    7. 其他内部 ((v-pre & v-cloak & v-once))
    <div>
      <!--直接输出 -->
      <span v-pre>{{message}}</span><br>
      <!-- 在DOM加载完 才显示 需要 和 css 一起使用-->
      <span v-cloak>{{message}}</span><br>
      <!--只渲染一次 -->
      <span v-once>{{msg}}</span>
    </div>
    <author></author>
  </div>
</template>

<script>
function sortNumber (a, b) {
  return a - b
}
export default {
  name: 'HelloWorld',
  /* 数据: 需要使用的 都需要在这定义   */
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      message: '页面加载于 ' + new Date().toLocaleString(),
      seen: true,
      numbers: [1, 2, 3, 4, 5],
      mynumbers: [3, 1, 3, 2, 5],
      todos: [
        { text: '学习 JavaScript' },
        { text: '学习 Vue' },
        { text: '从入门到跑路' }
      ],
      msgHtml: '<h3>这是绑定html</h3>',
      web_Names: [],
      sex: ''
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
    },
    sortMynumber: function () {
      return this.mynumbers.sort(sortNumber)
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
[v-cloak] {
  display: none;
}
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
