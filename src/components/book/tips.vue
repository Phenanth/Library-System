<!DOCTYPE html>
<template>
<div class="tips">
	<div v-if="this.presentModule == 'borrow'">
		<h3>请您将需借的图书放入扫描区域，完成后点击下一步。</h3>
		<button type="button" v-on:click="goTo(nextPath)">下一步</button>
		<button type="button" v-on:click="goTo('/')">返回首页</button>
	</div>
	<div v-else-if="this.presentModule == 'return'">
		<h3>请您将归还的图书放入扫描区域，完成后点击下一步。</h3>
		<button type="button" v-on:click="goTo(nextPath)">下一步</button>
		<button type="button" v-on:click="goTo('/')">返回首页</button>
	</div>
	<div v-else="this.presentModule == 'fine'">
		<h3>您所借的XXXXXX图书已超期，请将已超期的图书归还后，才可借阅新的图书！</h3>
		<button type="button" v-on:click="goTo(nextPath)">下一步</button>
		<button type="button" v-on:click="goTo('/')">返回首页</button>
	</div>
</div>
</template>
<script>
export default {
	name: 'Tips',
	data: function () {
		return {
			nextPath: '',
			presentModule: ''
		}
	},
	methods: {
		goTo: function (path) {
			this.$router.push(path)
		}
	},
	mounted: function () {
		this.presentModule = this.$route.params.module
		this.nextPath = '/module/' + this.$route.params.module + '/ensure'
	}
}
</script>
<style>
	
.tips {
	margin-top: 40px;
}
</style>