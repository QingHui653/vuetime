<template>
	<div id="XTGLPage" class="XTGLPage">
		<showBox></showBox>
		<inputBox></inputBox>
		<calcBox></calcBox>
		<outputBox></outputBox>
	</div>
</template>
<script>
import showBox from './chlidComponents/showBox.vue'
import inputBox from './chlidComponents/inputBox.vue'
import calcBox from './chlidComponents/calc.vue'
import outputBox from './chlidComponents/outputBox.vue'
export default {
  name: '',
  data () {
    return {

    }
  },
  components: {
    inputBox,
    showBox,
    calcBox,
    outputBox
  }
}
</script>
<style scoped>
	.XTGLPage{
		width: 500px;
		height: 400px;
		padding: 30px 20px 0; 
		border: 2px solid #ccc;
		box-shadow: 10 10 0 0 #f0f3f4;
		background-color: #ccc;
	}
</style>