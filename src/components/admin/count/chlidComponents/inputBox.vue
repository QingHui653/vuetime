<template>
	<div class="inputBox">
		<div>
		    <label>输入</label>
		    <div>
		      <el-input v-model="inputNum" @blur="inputEvent" />
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
	  methods: {
	    inputEvent: function () {
	      console.info('输入框')
	      this.$store.dispatch('inputevent', this.inputNum)
    }
  }
	}
</script>

<style>

</style>
