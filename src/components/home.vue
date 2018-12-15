<!DOCTYPE html>

<template>

	<div class="home">
		<div class="head-home">
			<span>Hang Zhou normal university library's Information & Research Databases | 用于学术信息的收集和论文·报告的杭州师范大学大学图书馆网站</span>
		</div>

		<div class="ctn-home">
			<div class="category">
				<div class="category-head">学术信息数据库</div>
				材料类型
				<div class="category-list">
					<div class="category-list-box"></div>
					<div class="category-list-box"></div>
					<div class="category-list-box"></div>
					<div class="category-list-box"></div>
					<div class="category-list-box"></div>
				</div>
				领域
				<div class="category-field">
					<div class="category-field-box"></div>
					<div class="category-field-box"></div>
					<div class="category-field-box"></div>
					<div class="category-field-box"></div>
					<div class="category-field-box"></div>
					<div class="category-field-box"></div>
					<div class="category-field-box"></div>
					<div class="category-field-box"></div>
					<div class="category-field-box"></div>
				</div>
			</div>
			<div class="info">
				<div class="info-head">通知</div>
				<div class="info-list">
					<div class="info-list-box"></div>
					<div class="info-list-box"></div>
					<div class="info-list-box"></div>
					<div class="info-list-box"></div>
				</div>
			</div>
		</div>

		<div class="foot">
			<div class="foot-info">
				<h2>HZNU | 图书馆</h2>
				<span>>>>> 这里会有一个LOGO和学校名字</span>
				<span>©2018 HangZhou Normal UNIVERSITY LIBRARY All Rights Reserved.</span>
			</div>
			<div class="foot-search">
				<span><b>情报检索</b></span>
				<span>轻松检索</span>
				<span>藏书检索</span>
				<span>学术信息数据库</span>
			</div>
			<div class="foot-client">
				<span><b>客户服务</b></span>
				<span>文献管理</span>
				<span>远程访问服务</span>
			</div>
		</div>

	</div>
<!-- <div class="home">
	<div class="ctn-home row">
		<div class="jumbotron">
			<h1>Hello, world!</h1>
			<p>...</p>
		</div>
		<div class="sections">
			<div class="section col-sm-6 col-md-3">
				<a href="#" class="section thumbnail" v-on:click="goTo('/module/borrow/tips')">
					借书
				</a>
			</div>
			<div class="section col-sm-6 col-md-3">
				<a href="#" class="section thumbnail" v-on:click="goTo('/module/return/tips')"">
					还书
				</a>
			</div>
			<div class="section col-sm-6 col-md-3">
				<a href="#" class="section thumbnail" v-on:click="goTo('/module/fine/tips')">
					超期罚款
				</a>
			</div>
		</div>
		<div class="ft" >
						<img width="32px" class="git" onclick="window.open('https://github.com/Phenanth/GA-Login');" src="./static/svg/github5.svg"/>
		</div>
		
	</div>
</div> -->
</template>

<script>
export default {
	name: 'Home',
	methods: {
		goTo: function (path) {
			this.$router.push(path)
		}
	}
}
</script>

<style>

.home {
	margin-top: 45px;
}

.ctn-home {
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: center;
	width: 10	0%;
	height: calc(100% - 40px * 2);
	margin-top: 30px;
	margin-left: 10%;
	margin-right: 10%;
}

/* 注释掉的原来的界面 */

/* .jumbotron {
	width: 100%;
}

.sections {
	display: flex;
	width: 80%;
	justify-content: space-around;
}

.section {
	width: 250px;
	height: 200px;
} */

.head-home {
	padding: 8px;
	background-color: #caebea;
}

.head-home > span, .foot-info > span {
	font-size: 12px;
	color: gray;
}

/* 首页内容 */

.category, .info {
	display: flex;
	height: 100%;
	flex-direction: column;
	justify-content: flex-start;
	align-items: flex-start;
}

.category {
	width: 60%;
}

.category-list, .category-field {
	display: flex;
	flex-wrap: wrap;
	justify-content: flex-start;
}

.info-list {
	display: flex;
	flex-direction: column;
}

.category-list-box, .category-field-box, .info-list-box {
	width: 100px;
	height: 100px;
	margin: 3px;
	display: flex;
}

.category-list-box {

	background-color: black;
}

.category-field-box {
	background-color: pink;
}

.info-list-box {
	background-color: #0EA8A3;
}

/* Footer */

.foot {
	bottom: 0px;
	height: 150px;
	width: 100%;
	background-color: #caebea;
	display: flex;
	justify-content: center;
	padding-left: 15%;
	padding-right: 15%;
}

.foot-info, .foot-search, .foot-client {
	margin: 5px;
	height: 100%;
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	padding-left: 2%;
	padding-right: 2%;
	padding-top: 10px;
	padding-bottom: 30px;
}

.foot-info {
	justify-content: flex-end;
	flex-grow: 2;
}


.foot-search, .foot-client {
	flex-grow: 1;
}


</style>