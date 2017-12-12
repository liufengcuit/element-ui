<template>
	<div class="top">
		<el-header>后台管理系统</el-header>
	</div>
	
</template>
<script>
	export default {
		name:'HeadTop',
		data() {
			return {}
		}
	}
</script>
<style scoped>
	.top{
		height: 60px;
		position: absolute;
		left: 0;
		top: 0;
		width: 100%;
		box-sizing: border-box;
		-webkit-box-sizing: border-box;
	}
	.el-header{
		line-height: 60px;
		font-size: 26px;
		border-bottom: 1px solid #e6e6e6;
		background-color: #334e61;
		color: #fff;
	}
</style>