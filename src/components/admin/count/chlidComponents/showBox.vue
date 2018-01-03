<template>
	<div class="showBox">
		<div class="layui-form-item">
		    <div class="layui-input-block">
		      <el-input v-model="inputNum"/>{{inputNum}}
		    </div>
	  	</div>
	</div>
</template>
<script>
	export default {
	  data () {
	    return {
	      inputNum: 0
    }
  },
	  computed: {
	    inputNum () {
	      console.info(this.$store.state.inputNum)
	      return this.$store.state.inputNum
    }
  }
	}
</script>
<style scoped>
</style>