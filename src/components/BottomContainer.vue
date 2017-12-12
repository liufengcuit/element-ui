<template>
	<div class="bottom-container">
		<el-container>
			<el-aside width="201px">
				<el-menu style="border-right:0" router :default-active="defaultActive">
					<el-submenu index="1">
						<template slot="title"><i class="iconfont icon-zhuye"></i>首页</template>
						<el-menu-item-group>
							<el-menu-item index="basic">子菜单1.1</el-menu-item>
							<el-menu-item index="1-2">子菜单1.2</el-menu-item>
						</el-menu-item-group>
					</el-submenu>
					<el-submenu index="2">
						<template slot="title"><i class="el-icon-message"></i>学生信息</template>
						<el-menu-item-group>
							<el-menu-item index="studentScore">学生成绩查询</el-menu-item>
							<el-menu-item index="2-2">学生学历查询</el-menu-item>
							<el-menu-item index="2-2">学生违纪记录查询</el-menu-item>
						</el-menu-item-group>
					</el-submenu>
					<el-submenu index="3">
						<template slot="title"><i class="el-icon-setting"></i>设置</template>
						<el-menu-item-group>
							<el-menu-item index="3-1">修改密码</el-menu-item>
							<el-menu-item index="3-2">退出系统</el-menu-item>
						</el-menu-item-group>
					</el-submenu>

				</el-menu>
			</el-aside>
			<el-main>
				<keep-alive>
					<router-view class="animated zoomIn"></router-view>
				</keep-alive>
			</el-main>
		</el-container>
	</div>
</template>
<script>
	export default {
		name:"BottomContainer",
		data() {
			return {}
		},
		computed:{
			defaultActive(){
				return this.$route.path.replace('/','');
			}
		}
	}
</script>
<style>
	.bottom-container{
		height: 100%;
	}
	.el-container{
		height: 100%;
	}
	.el-aside{
		border-right: 1px solid #e6e6e6;
		box-sizing: border-box;
		-webkit-box-sizing: border-box;
	}
	.iconfont{
		position: relative;
    	top: -3px;
    	margin-right: 5px;
    	font-size: 18px;
	}
</style>