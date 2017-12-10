<template>
  <div id="view">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: "view"
};
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
