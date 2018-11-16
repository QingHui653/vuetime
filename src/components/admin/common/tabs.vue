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
export default {
    name:"tabsNav",
    data () {
      return {
        tabNav:[]
      }
    },
    computed:{
      tabs () {
        this.tabNav= this.$store.state.tabs.tabs;
        return this.tabNav;
      },
    },
    methods:{
      setClass(key) {
        return key?"el-tabs__item is-active":"el-tabs__item";
      },
      onClickTab(event){
        var el = event.currentTarget;
        var url =el.getAttribute("url");
        var tab ={
          url:url,
        }
        this.$store.commit('addTabNav',tab);
        this.$router.push(url);
      },

      closeTab(event){
        var el = event.currentTarget.parentNode;
        var url =el.getAttribute("url");
        this.$store.commit('delTabNav',url);

        if(this.tabNav.length>0){
          var tab = this.tabNav.pop();
          tab.current=true;
          this.$store.commit('addTabNav',tab);
          this.$router.push(tab.url);
        }else {
          this.$router.push("/DashBoard");
        }
      }


    }

};
</script>
