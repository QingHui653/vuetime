<template>
	<div class="showBox">
		<div>
		    <div>
		      <el-input v-model="inputNum"/>
		    </div>
	  	</div>
	</div>
</template>
<script>
	export default {
	  data () {
	    return {
	
    }
  },
	  computed: {
	    inputNum () {
	      // 使用模块 必须 .到模块
	      return this.$store.state.count.inputNum
    }
  }
	}
</script>
<style scoped>
</style>