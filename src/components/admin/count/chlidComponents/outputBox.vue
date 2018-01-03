<template>
	<div class="inputBox">
		<div class="layui-form-item">
		    <label class="layui-form-label">结果:</label>
		    <div class="layui-input-inline">
		      <el-input v-model="resultNum"/>
		    </div>
	  	</div>

	  	<el-button @click="resultEvent">确认</el-button>
	</div>
</template>
<script>
	export default {
	  data () {
	    return {
	      resultNum: 0
    }
  },
	  computed: {
	    resultNum () {
	      console.info(this.$store.state.resultNum)
	      return this.$store.state.resultNum
    }
  },
	  methods: {
	    resultEvent () {
	      this.$store.dispatch('resultevent')
    }
  }
	}
</script>
<style scoped> 
	.inputBox{
		overflow: hidden;
	}
	.layui-form-item{
		float: right;
		margin-top: 15px;
	}
	button{
		float: right;
		margin-top: 15px;
	}
</style>