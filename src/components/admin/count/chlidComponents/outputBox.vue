<template>
	<div class="outputBox">
			<div class="outBox">
		    <label>结果:</label>
		    <div>
		      <el-input width="300" v-model="resultNum"/>
		    </div>
	  	</div>
			<div class="outBtn">
	  		<el-button @click="resultEvent">确认</el-button>
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
	    resultNum () {
				// 使用模块 必须 .到模块
	      return this.$store.state.count.resultNum
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
	.outputBox{

	}
	.outBox{
		float: right;
	}
	.el-input{
		width: 200px;
	}
	.outBtn button{
		margin-top: 17px;
		margin-left: 170px;
	}
</style>