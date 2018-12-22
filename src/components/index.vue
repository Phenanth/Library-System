<!DOCTYPE html>

<template>

<div class="index">

	<div class="hd row">
		
		<div class="web-header row col-md-3 col-md-offset-1" v-on:click="goTo('/')">
			<img class="col-md-2" height="30px" width="35px" src="../../static/svg/library.svg"/>
			<span>杭州师范大学图书馆</span>
		</div>

		  <div class="col-md-2 col-md-offset-4">
		    <div class="input-group">
		      <input type="text" class="form-control" placeholder="图书名 / 作者名 / 分类">
		      <span class="input-group-btn">
		        <button class="btn btn-default" type="button" v-on:click="goTo('/search')">搜索</button>
		      </span>
		    </div>
		  </div>
		
		<div class="header-option hd-toggle-bar">图书管理 <i class="fa fa-arrow-circle-down" aria-hidden="true"></i>
			<div class="hd-toggle-bar-option" v-on:click="goTo('/module/borrow/tips')">借书</div>
			<div class="hd-toggle-bar-option" v-on:click="goTo('/module/return/tips')">还书</div>
			<div class="hd-toggle-bar-option" v-on:click="goTo('/module/fine/tips')">罚款</div>
		</div>

		<button class="btn btn-default btn-goLogin col-md-1" v-on:click="goTo('/login')">登录</button>

	</div>

	<router-view/>

</div>

</template>

<script>
export default {
	name: 'Home',
	methods: {
		goTo: function (path) {
			this.$router.push(path)
			this.$router.go(0)
		}
	}
}
</script>

<style>
	
html, body {
	overflow-x: hidden;
	overflow-y: hidden;
 	height: 100%;
}

.index, .home, .module {
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-self: center;
}

.hd {
	top: 0px;
	position: fixed;
	z-index: 100;
	width: calc(100% + 20px);
	background-color: #0EA8A3;
	height: 45px;
	display: flex;
	align-items: center;
}

.web-header {
	display: flex;
	align-items: center;
	justify-content: center;
}

.web-header > span {
	font-size: 22px;
	color: white;
}


/* Toggle Bar */

.header-option {
	height: 40px;
	width: 100px;
	display: flex;
	justify-content: space-around;
	align-items: center;
	color: white;
}

.hd-toggle-bar {
	position: relative; /* 作用：保持鼠标下移下拉菜单依然出现 */
	display: inline-block;
	line-height: 40px;
	text-align: center;
}

.hd-toggle-bar-option {
	display: none;
	background-color: #0EA8A3;
	color: white;
}

.hd-toggle-bar-option:hover {
	background-color: #0c8a86;
}

.hd-toggle-bar:hover {
	background-color: #0c8a86;
}

.hd-toggle-bar:hover > .hd-toggle-bar-option {
	display: block;
}

/* Login Button*/

.btn-goLogin, .btn-goHome {
	width: 80px;
	background-color: #0EA8A3;
	color: white;
	border: none;
}

.btn-goLogin:hover, .btn-goHome:hover {
	background-color: #0c8a86;
	color: white;
}

</style>