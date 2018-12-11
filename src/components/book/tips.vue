<!DOCTYPE html>
<template>
<div class="tips">
	<h3>请您将需借的图书放入扫描区域，完成后点击下一步。</h3>
	<button type="button" v-on:click="">下一步</button>
	<button type="button" v-on:click="goTo('/')">返回首页</button>
</div>
</template>
<script>
export default {
	name: 'Borrow',
	methods: {
		goTo: function (path) {
			this.$router.push(path)
		}
	}
}
</script>

<style>
	
.tips {
	margin-top: 40px;
}
</style>