<!DOCTYPE html>
<template>
<div class="tips">
   <div v-if="this.presentModule == 'borrow'">
   <hr/>
	<h3>请您将需借的图书放入扫描区域</h3>
	<h3>完成后点击下一步</h3>
	<hr/>
	<button type="button" v-on:click="goTo('/')">返回首页</button>
	<button type="button" v-on:click="goTo(nextPath)">下一步</button>
	<div class="haorooms-dot "></div>
    </div>
	<div v-else-if="this.presentModule == 'return'">
    <hr/>
		<h3>请您将归还的图书放入扫描区域</h3>
    <h3>完成后点击下一步</h3>
     <hr/>
		<button type="button" v-on:click="goTo('/')">返回首页</button>
    <button type="button" v-on:click="goTo(nextPath)">下一步</button>
	</div>
	<div v-else="this.presentModule == 'fine'">
    <hr/>
		<h3>您所借的《西游记》已超期</h3>
    <h3>请将已超期的图书归还后，才可借阅新的图书</h3>
    <hr/>
    <button type="button" v-on:click="goTo('/')">返回首页</button>
		<button type="button" v-on:click="goTo(nextPath)">下一步</button>
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
@-webkit-keyframes fadeIn {
	0% {
		opacity: 0.9; /*初始状态 透明度为0.9*/
    }
    50%{
    	opacity: 0.95; /*中间状态 透明度为0.95*/
    }
    100% {
    	opacity: 1; /*结尾状态 透明度为1*/
    }
}
@-webkit-keyframes fadeLong {
	0% {
		width:35%; /*初始状态 长度为35%*/
    }
    100% {
    	width:40%; /*结尾状态 长度为40%*/
    }
}
.tips{
	position:relative;
	top:1%;
}
.tips button {
	position: relative;
	left:270px;
	width: 100px;
	margin: 10px auto;
	border:2px solid  #0EA8A3;
	line-height: 30px;
	cursor: pointer;
	color: #0EA8A3;
	background:white;
}
.tips button:hover {
	background-color:#0EA8A3;
	color:white;
}
.tips h3 {
	-webkit-animation-name: fadeIn;
	-webkit-animation-duration: 1s;
	-webkit-animation-iteration-count: 1;
}
.tips hr {
	width:40%;
	margin-top:35px;
	margin-bottom:35px;
	border:1px solid #0EA8A3;
	-webkit-animation-name: fadeIn; /*动画名称*/
	-webkit-animation-name: fadeLong; /*动画名称*/
	-webkit-animation-fill-mode:forwards;
	-webkit-animation-duration: 1s; /*动画持续时间*/
	-webkit-animation-iteration-count: 1; /*动画次数*/
	-webkit-animation-delay: 0s; /*延迟时间*/
}
</style>