<!DOCTYPE html>

<template>
<div class="login">
	<form id="login-tab">
		<div class="input form-group">
			<label for="input-id">
				<img class="left-float" height="18" width="35" src="../../static/svg/account.svg"/>
			</label>
			<input type="text" class="form-control" placeholder="ID" v-model="username">
		</div>
		<div class="input form-group">
			<label for="input-pw">
				<img class="left-float" height="18" width="35" src="../../static/svg/password.svg"/>
			</label>
			<input type="password" class="form-control" placeholder="Password" v-model="password">
		</div>
	</form>
	<div class="checkbox">
		<label>
			<input type="checkbox" value="true" class="demo-radio demo-radioInput" v-model="willStore">
			<span class="demo-checkbox demo-radioInput"></span>七天内自动登录
		</label>
	</div>
	<!-- <button type="button" class=" btn btn-goHome" v-on:click="goTo('/')">Home</button> -->
	<button type="button" class=" btn btn-login" v-on:click="login">Login</button>
	<!-- <div class="ft" >
				<img width="32px" class="git" onclick="window.open('https://github.com/Phenanth/GA-Login');" src="./static/svg/github5.svg"/>
	</div> -->
</div>
</template>
<script>
import api from '../api.js'
import store from '../store'
export default {
	name: 'Login',
	data: function () {
		return {
			username: '',
			password: '',
			willStore: false
		}
	},
	methods: {
		goTo: function (path) {
			this.$router.push(path)
		},
		login: function () {
			if (this.username != '' && this.password != '') {
				let opt = {
					username: this.username,
					password: this.password,
					willStore: this.willStore
				}
				api.doLogin(opt).then(({
					data
				}) => {
					if (data.info == 200) {
						// Authentificated role will be transfered from the server, this is just the test version.
						let user = {
							token: data.token,
							username: this.username,
							verify: data.user_secret
						}
						store.dispatch('storeToken', JSON.stringify(user)) 
						if (data.user_secret) {
				          let auth = {
				            username: JSON.parse(localStorage.getItem('token')).username
				          }
				          store.dispatch('setAuth', JSON.stringify(auth))
				        } else {
				        	store.dispatch('removeAuth')
				        }
						this.$router.push(data.path)
						this.$router.go(0)
					} else {
						alert(data.message)
					}
				})
			} else {
				alert('Fill the blanks please.')
			}
		},
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
