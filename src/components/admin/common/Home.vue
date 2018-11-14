<template>
  <div class="wrapper">
      <v-head></v-head>
      <v-sidebar></v-sidebar>

      <div class="content">
          <v-tabs></v-tabs>
          <transition name ="move" mode="out-in">
              <router-view></router-view>
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
  }
}
</script>
