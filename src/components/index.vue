<!DOCTYPE html>

<template>
	
<div class="index">
	<div class="hd row">
		<div class="web-header row col-md-3 col-md-offset-1">
			<img class="col-md-2" height="30px" width="35px" src="../../static/svg/library.svg"/>
			<span>HOME</span>
		</div>
				
		<button class="btn btn-default btn-goLogin col-md-1 col-md-offset-7" v-on:click="goTo('/login')">Login</button>
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
		}
	}
}
</script>

<style>
	
html, body {
	overflow-x: hidden;
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
	position: fixed;
	top: 0px;
	width: calc(100% + 20px);
	background-color: #0EA8A3;
	height: 40px;
	display: flex;
	align-items: center;
}

.web-header {
	display: flex;
	align-items: center;
	justify-content: center;
}

.web-header > span {
	font-size: 24px;
	color: white;
}

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