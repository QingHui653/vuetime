<template>
	<div class="clacBox">
		<div>
			<el-button @click="increment">加1</el-button>
			<el-button @click="decrement">减1</el-button>
		</div>
	</div>
</template>
<script>
	export default {
	  data () {
	    return {

    }
  },
	  methods: {
	    increment () {
	      this.$store.dispatch('increment')
    },
	    decrement () {
	      this.$store.dispatch('decrement')
    }
  }
	}
</script>
<style scoped>
	
</style>