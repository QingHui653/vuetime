<template>
  <div id="view">
    <!-- 需要在webpack.conf.js 中配置 别名 -->
    <img src="~assets/logo.png">
    <h1>Hello App!</h1>
    <p>
      <!--使用 router-link 组建来导航-->
      <!--通过传入 `to` 属性指定链接-->
      <!--<router-link>默认会被渲染成一个`<a>`标签-->
      <router-link to='/foo'>1.Go to Foo</router-link>
      <router-link to='/bar'>2.Go to Bar</router-link>
      <!--都是调用user模板，但是后边的参数不一样，显示的内容也不一样-->
      <router-link to='/user/foo'>3./user/foo</router-link>
      <router-link to='/user/bar'>4./user/bar</router-link>
    </p>
    <p>
      <!-- 嵌套路由 -->
      <router-link to="/user2/foo">Go to Foo</router-link>
      <router-link to="/user2/foo/profile">Go to profile</router-link>
      <router-link to="/user2/foo/posts">Go to posts</router-link>
    </p>
    <!--实际 点击 <router-link :to 相当于调用 router.push(…);-->
    <!-- 因此在js内 可以自己调用 router.push -->
    <!--//字符串
            router.push('home');
            //对象
            router.push({path:'home'});
            //命名的路由
            router.push({name:'user',params:{userId:123}})
            //带查询参数，变成 /register?plan=private
            router.push({path:'register',query:{plan:'private'}}) 
        router.replace(location)  不会向浏览器 添加新记录
            -->
    <!-- 多个页面可以有多个router-view  -->
    <!-- <router-view class="view one"></router-view>
    <router-view class="view two" name="a"></router-view>
    <router-view class="view three" name="b"></router-view> -->
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'view'
}
</script>

<style>
#view {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
