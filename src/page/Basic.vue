<template>
	<div>
		这里是基本组件
		<el-switch
			v-model="value2"
			@change="changeVal"
			disabled
			active-text="激活时的描述"
			inactive-text="关闭时的描述"
			:active-color="activeColor"
			inactive-color="#ff4949">
		</el-switch>
	</div>
</template>
<script>
	export default {
		name:"Basic",
		data() {
			return {
        		value2: true,
        		activeColor: "#13ce66"
			}
		},
		methods: {
			changeVal: function(val) {
				console.log(val)
			}
		}
	}
</script>