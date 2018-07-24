<template>
	<div class="home">
		<!-- 头部 -->
		<el-header class="top"></el-header>
		<!-- 左侧栏 -->
		<el-aside class="aside" style="width: 200px">
			<div class="logo">管理系统logo</div>
			<el-container width="200px">
				<el-menu style="border-right:0; width: 200px" unique-opened router :default-active="defaultActive">
					<el-submenu v-for="(route, index) in $router.options.routes" v-if="route.leaf" :index="route.name" style="width: 200px">
						<template slot="title"><i class="iconfont icon-zhuye"></i>{{ route.name }}</template>
						<el-menu-item-group style="width: 200px" v-for="children in route.children" :key="children.name">
							<el-menu-item :index="children.path">{{ children.name }}</el-menu-item>
						</el-menu-item-group>
					</el-submenu>
				</el-menu>
			</el-container>
		</el-aside>
		<!-- 右侧内容区域 -->
		<el-main class="contents">
			<keep-alive>
				<router-view></router-view>
			</keep-alive>
		</el-main>
	</div>
</template>
<script>
	export default {
		name:"Home",
		data() {
			return {
				defaultActive: "true"
			}
		}
	}
</script>
<style scoped>
	.home{
		padding-left: 200px;
		height: 100%;
		box-sizing: border-box;
		-webkit-box-sizing: border-box;
	}
	.logo{
		height: 59px;
		text-align: center;
		line-height: 59px;
		width: 100%;
		background-color: #334e61;
		color: #fff;
	}
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
	.aside{
		height: 100%;
		position: absolute;
		top: 0;
		left: 0;
		z-index: 10;
	}
	.contents{
		width: 100%;
		padding-top: 60px;
	}
</style>