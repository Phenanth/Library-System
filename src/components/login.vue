<!DOCTYPE html>

<template>
<div class="login">
	<form id="login-tab">
		<div class="input form-group">
			<label for="input-id">
				<img class="left-float" height="18" width="35" src="../../static/svg/account.svg"/>
			</label>
			<input type="text" class="form-control" placeholder="ID">
		</div>
		<div class="input form-group">
			<label for="input-pw">
				<img class="left-float" height="18" width="35" src="../../static/svg/password.svg"/>
			</label>
			<input type="password" class="form-control" placeholder="Password">
		</div>
	</form>
	<div class="checkbox">
		<label>
			<input type="checkbox" value="true" class="demo-radio demo-radioInput">
			<span class="demo-checkbox demo-radioInput"></span>七天内自动登录
		</label>
	</div>
	<!-- <button type="button" class=" btn btn-goHome" v-on:click="goTo('/')">Home</button> -->
	<button type="button" class=" btn btn-login">Login</button>
	<!-- <div class="ft" >
				<img width="32px" class="git" onclick="window.open('https://github.com/Phenanth/GA-Login');" src="./static/svg/github5.svg"/>
	</div> -->
</div>
</template>
<script>
	
export default {
	name: 'Login',
	methods: {
		goTo: function (path) {
			this.$router.push(path)
		}
	}
}

</script>

<style>
	
.login {
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: flex-start;
	height: 70%;
	padding-top: 5%;
}

.input {
	width: 250px;
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: flex-start;
}

.btn-login {
	width: 200px;
	background-color: #0EA8A3;
	color: white;
	margin-top: 30px;
}

.btn-login:hover {
	background-color: #0c8a86;
	color: white;
}

/* Input styles */

input[type="radio"], input[type="checkbox"] {
	display: none;
}

.radio {
	display:inline-block
}

.demo-label {
	margin:10px 10px 0 0;
	display:inline-block;
}

.demo-radioInput {
	background-color: #fff;
	border: 1px solid #A0A0A0;
	border-radius: 100%;
	display: inline-block;
	height: 16px;
	margin-right: 10px;
	margin-top: -1px;
	vertical-align: middle;
	width: 16px;
	line-height: 1;
}

.demo-radio:checked + .demo-radioInput:after {
	background-color: #0EA8A3;
	border-radius: 100%;
	content: "";
	display: inline-block;
	height: 12px;
	margin: 1.15px;
	width: 12px;
}

.demo-checkbox.demo-radioInput,.demo-radio:checked + .demo-checkbox.demo-radioInput:after {
	border-radius: 0;
}

</style>
