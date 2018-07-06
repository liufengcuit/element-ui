<template>
	<div class="login">
		<el-button type="primary" @click="login">登录主页面</el-button>
	</div>
</template>
<script>
	export default {
		data() {
			return {}
		},
		methods: {
			login: function() {
				this.$router.push("/home")
			}
		}
	}
</script>
<style>
	
</style>