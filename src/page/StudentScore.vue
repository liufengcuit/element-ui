<template>
	<div>
		<el-header>
			<el-input v-model="input" placeholder="姓名/学号" class="input-with-select">
				<el-button slot="append" icon="el-icon-search"></el-button>
			</el-input>
		</el-header>
		<el-table
			ref="multipleTable"
			:data="tableData3"
			tooltip-effect="dark"
			style="border-top:0">
			<el-table-column
				type="selection"
				width="55">
			</el-table-column>
			<el-table-column
				label="学号"
				width="220"
				>
				<template slot-scope="scope">{{ scope.row.date }}</template>
			</el-table-column>
			<el-table-column
				prop="name"
				label="姓名">
				<template slot-scope="scope">{{ scope.row.name }}</template>
			</el-table-column>
			<el-table-column
				prop="score"
				label="成绩"
				>
				<template slot-scope="scope">{{ scope.row.score }}</template>
			</el-table-column>
		</el-table>
		<div class="block">
			<el-pagination
			:current-page="currentPage4"
			:page-sizes="['100','200','300','400']"
			:page-size='5'
			layout='total,sizes,prev,pager,next,jumper'
			:total='1000'></el-pagination>
		</div>
	</div>
</template>
<script>
	export default {
		name:"StudentScore",
		data() {
			return {
				currentPage4:5,
				tableData3: [{
		          date: '1',
		          name: '王小虎',
		          score: '88'
		        }, {
		          date: '2',
		          name: '王小虎',
		          score: '32'
		        }, {
		          date: '3',
		          name: '王小虎',
		          score: '95'
		        }, {
		          date: '4',
		          name: '王小虎',
		          score: '13'
		        }, {
		          date: '5',
		          name: '王小虎',
		          score: '76'
		        }, {
		          date: '6',
		          name: '王小虎',
		          score: '79'
		        }, {
		          date: '7',
		          name: '王小虎',
		          score: '64'
		        }],
		        input: ''
		      }

		}
	}
</script>
<style scoped>
	.el-header{
		border-bottom: 1px solid #d8dce5;
	}
	.el-header>.el-input{
		width: 300px;
	}
	.el-table__body{
		box-sizing: border-box;
	}
	.el-table--border td, .el-table--border th{
		box-sizing: border-box;
	}
	.el-table_1_column_4{
		border-right: 0
	}
</style>