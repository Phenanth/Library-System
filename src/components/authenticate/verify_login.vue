<!DOCTYPE html>
<template>
<div class="verifyLogin">
	<div class="alert alert-info" role="alert">请输入Google Authenticator中对应的六位双因子验证码。</div>
	<form class="text-verify">
		<div class="form-group">
			<label>验证码</label>
			<input id="verifyText" type="text" class="form-control" v-model="verifyCode" placeholder="六位验证码">
		</div>
	</form>
	<div class="ctl-verify">
		<button class="btn btn-default" v-on:click="goTo('/login')">返回</button>
		<button class="btn btn-default" v-on:click="doVerify()">进行验证</button>
	</div>
</div>
</template>

<script>
import api from '../../api.js'
import store from '../../store'
export default {
	name: 'Verify-Login',
	data: function () {
		return {
			verifyCode: ''
		}
	},
	methods: {
		goTo: function ( path ) {
			this.$router.push(path)
		},
		doVerify: function () {
			if (this.verifyCode != '') {
				let opt = {
					username: JSON.parse(localStorage.getItem('token')).username,
					verifyCode: this.verifyCode
				}
				api.verify(opt).then(({
					data
				}) => {
					if (data.info == 200) {
						store.dispatch('removeAuth')
						this.$router.push('/userinfo')
						this.$router.go(0)
					} else {
						alert(data.message)
					}
				})
			} else {
				alert('Please input the verify code, length: 6.')
			}
		}
	}
}
</script>

<style>
.verifyLogin {
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
}
	
#verifyText {
	width: 200px;
}
/* 
.form-group > label {
	float: left;
} */

.ctl-verify {
	width: 200px;
	display: flex;
	justify-content: space-between;
}
</style>