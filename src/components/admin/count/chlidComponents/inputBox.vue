<template>
	<div class="inputBox">
		<div class="layui-form-item">
		    <label class="layui-form-label">输入</label>
		    <div class="layui-input-block">
		      <el-input v-model="inputNum" @blur="inputEvent" />
		    </div>
	  	</div>
	</div>
</template>
<script>
	export default {
	  data () {
	    return {
	      inputNum: ''
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