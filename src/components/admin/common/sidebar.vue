<template>
  <div class="sidebar">
      <el-menu default-active="onRouters" class="el-menu-vertical-demo" background-color="#324157" text-color="#fff" active-text-color="#ffd04b" unique-opened router>
        
        <!-- <el-menu-item @click="switchSide">
            <span class="sb-icon"><i class="material-icons">home</i></span>
            <span class="sb-cn">切换</span>
        </el-menu-item> -->

        <el-menu-item index="DashBoard">
            <span class="sb-icon"><i class="material-icons">home</i></span>
            <span class="sb-cn">DashBoard</span>
        </el-menu-item>

        <el-menu-item index="Role">
            <span class="sb-icon"><i class="material-icons">security</i></span>
            <span class="sb-cn">Role</span>a
        </el-menu-item>

        <template v-for="(item,index) in this.routes" v-show="!item.hidden">
                <el-submenu :key="index" :index="index+''">
                    <template slot="title">
                        <span class="sb-icon"><i class="material-icons">{{item.iconCls}}</i></span>
                        <span slot="sb-cn">{{item.name}}</span>
                    </template>

                    <el-menu-item width="180px" @click="onClickNav(child.name,child.path)"
                                    style="padding-left: 30px;padding-right:0px;margin-left: 0px;width: 170px;text-align: left"
                                    v-for="child in item.children"
                                    :index="child.path"
                                    :key="child.path">{{child.name}}
                    </el-menu-item>
                </el-submenu>
        </template>

      </el-menu>
  </div>
</template>

<script>
/* 路由 应该 是 由后台查询 for 循环 生成 */
export default {
  computed: {
    routes () {
      return this.$store.state.login.routes
    },
    onRouter () {
      return this.$router.path.replace('/', '')
    },
  },
  methods:{
    switchSide:function(){
      console.info("123");
    },
    onClickNav:function (title,indexPath) {
      var tab ={
        title:title,
        url:indexPath,
        current:true,
      }
      this.$store.commit('addTabNav',tab);
    }
  }
}
</script>
<style scoped>
    .sidebar{
        display: block;
        position: absolute;
        width: 200px;
        left: 0;
        top: 66px;
        bottom:0;
        background: #324157;
       
    }
    .sidebar > ul {
        height:100%;
    }

   .el-menu-item, .el-submenu__title{
       font-size:14px;
   }
   
    .material-icons {font-size:12px;}
</style>
