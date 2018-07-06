<template>
	<div class="home">
		<!-- 头部 -->
		<el-header class="top"></el-header>
		<!-- 左侧栏 -->
		<el-aside class="aside" style="width: 200px">
			<div class="logo">管理系统logo</div>
			<el-container width="200px">
				<el-menu style="border-right:0; width: 200px" unique-opened router :default-active="defaultActive">
					<el-submenu index="1" style="width: 200px">
						<template slot="title"><i class="iconfont icon-zhuye"></i>首页</template>
						<el-menu-item-group style="width: 200px">
							<el-menu-item index="basic">子菜单1.1</el-menu-item>
							<el-menu-item index="submenu">子菜单1.2</el-menu-item>
						</el-menu-item-group>
					</el-submenu>
					<el-submenu index="2" style="width: 200px">
						<template slot="title"><i class="el-icon-message"></i>信息</template>
						<el-menu-item-group style="width: 200px">
							<el-menu-item index="studentScore">学生成绩查询</el-menu-item>
							<el-menu-item index="2-1">学生学历查询</el-menu-item>
							<el-menu-item index="2-2">学生违纪记录查询</el-menu-item>
						</el-menu-item-group>
					</el-submenu>
					<el-submenu index="3" style="width: 200px">
						<template slot="title"><i class="el-icon-setting"></i>设置</template>
						<el-menu-item-group>
							<el-menu-item index="3-1">修改密码</el-menu-item>
							<el-menu-item index="3-2">退出系统</el-menu-item>
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