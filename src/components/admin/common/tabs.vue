<template>
    <div class="tabs">
        <div class="el-tabs__header">
            <div class="el-tabs__nav-wrap">
                <div class="el-tabs__nav-scroll">
                    <div role="tablist" class="el-tabs__nav" style="transform: translateX(0px);">
                        <div v-for="list in tabs" :key="list.url" :url="list.url" :class="setClass(list.current)" @click="onClickTab($event)">
                          {{list.title}}
                          <span class="el-icon-close" @click.stop="closeTab($event)"></span>
                        </div>
                        <!--<div class="el-tabs__item is-active is-closable">tab1<span class="el-icon-close"></span></div>
                        <div class="el-tabs__item is-active is-closable">tab1<span class="el-icon-close"></span></div>
                        <div class="el-tabs__item">tab2<span class="el-icon-close"></span></div>
                        <div class="el-tabs__item">tab3<span class="el-icon-close"></span></div>
                        <div class="el-tabs__item">tab4<span class="el-icon-close"></span></div>-->
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
//TODO 点击 修改当前已选定 同时 切换 路由
//TODO 点击 关闭, 移除当前 tab,同时 路由先从右边找,在从左边找,最后找DashBoard
export default {
    name:"tabsNav",
    data () {
      return {
          tabNavList:[
            {
              title:'tabNav1',
              url:'/FormInput',
              current:true,
            },
            {
              title:'tabNav2',
              url:'/FormLayouts',
              current:false,
            },
            {
              title:'tabNav3',
              url:'/FormSubmit',
              current:false,
            },
          ]
      }
    },
    computed:{
      tabs () {
        return this.$store.state.tabs.tabs
      },
    },
    methods:{
      setClass(key) {
        return key?"el-tabs__item is-active":"el-tabs__item";
      },
      onClickTab(event){
        var el = event.currentTarget;
        var url =el.getAttribute("url");
        this.$router.push(url);
      },

      closeTab(event){
        var el = event.currentTarget.parentNode;
        var url =el.getAttribute("url");
        this.$store.commit('delTabNav',url);
      }


    }

};
</script>
