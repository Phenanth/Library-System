<!DOCTYPE html>
<template>
	
<div class="verifyFirst">
	<div class="QR-Image">
		<img v-bind:src="qrImage" alt="">
	</div>
	<form class="text-verify">
		<div class="form-group">
			<label>验证码</label>
			<input id="verifyText" type="text" class="form-control" v-model="verifyCode" placeholder="六位验证码">
		</div>
	</form>
	<div class="ctl-verify">
		<button class="btn btn-default" v-on:click="goTo('/userinfo')">返回</button>
		<button class="btn btn-default" v-on:click="doVerify()">进行验证</button>
	</div>
</div>
</template>
<script>
import api from '../../api.js'
import store from '../../store'
export default {
	name: 'Verify-First',
	data: function () {
		return {
			qrImage: null,
			verifyCode: '',
			isSuccess: false
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
					verifyCode: this.verifyCode,
					first: true
				}
				api.verify(opt).then(({
					data
				}) => {
					if (data.info == 200) {
						let user = {
							username: JSON.parse(localStorage.getItem('token')).username,
							token: JSON.parse(localStorage.getItem('token')).token,
							verify: true
						}
						store.dispatch('updateToken', JSON.stringify(user))
						this.$router.go(0)
					} else {
						alert(data.message)
					}
				})
			} else {
				alert('Please input the verify code, length: 6.')
			}
		}
	},
	mounted: function () {
		let opt = {
			username: JSON.parse(localStorage.getItem('token')).username
		}
		api.sendVerify(opt).then(({
			data
		}) => {
			this.qrImage = data.image
		})
	}
}
</script>
<style>

.verifyFirst {
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	margin-top:150px;
}
	
#verifyText {
	margin-top:10px;
	width: 200px;

}
/* 
.form-group > label {
	float: left;
} */

.ctl-verify {
	margin-top:10px;
	width: 200px;
	display: flex;
	justify-content: space-between;
}

</style>