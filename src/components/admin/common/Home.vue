<template>
  <div class="wrapper">
      <v-head></v-head>
      <v-sidebar></v-sidebar>

      <div class="content">
          <v-tabs></v-tabs>
          <transition name ="move" mode="out-in">
             <keep-alive>
                <router-view></router-view>
             </keep-alive>
          </transition>
      </div>
  </div>
</template>

<script>
import vHead from './header.vue'
import vSidebar from './sidebar.vue'
import vTabs from './tabs.vue'
export default {
  components: {
    vHead, vSidebar,vTabs
  },
  computed:{
    tagNavList () {
      return this.$store.state.app.tagNavList
    },
  },
  /*cacheList () {
    return ['ParentView', ...this.tagNavList.length ? this.tagNavList.filter(item => !(item.meta && item.meta.notCache)).map(item => item.name) : []]
  },*/
}
</script>
