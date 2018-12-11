<!DOCTYPE html>
<template>

<div class="home">

	<div class="ctn-home row">

		<div class="jumbotron">
			<h1>Hello, world!</h1>
			<p>...</p>
		</div>

		<div class="sections">
			<div class="section col-sm-6 col-md-3">
				<a href="#" class="section thumbnail" v-on:click="goTo('/module/borrow')">
					借书
				</a>
			</div>
			<div class="section col-sm-6 col-md-3">
				<a href="#" class="section thumbnail" v-on:click="goTo('/module/return')"">
					还书
				</a>
				</div>
			<div class="section col-sm-6 col-md-3">
				<a href="#" class="section thumbnail" v-on:click="goTo('/module/fine')">
					超期罚款
				</a>
			</div>
		</div>
		<!-- <div class="ft" >
			<img width="32px" class="git" onclick="window.open('https://github.com/Phenanth/GA-Login');" src="./static/svg/github5.svg"/>
		</div> -->
			
	</div>
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

.jumbotron {
	width: 100%;
}

.ctn-home {
	display: flex;
	flex-direction: column;
	align-items: center;
}

.sections {
	display: flex;
	width: 80%;
	justify-content: space-around;
}

.section {
	width: 250px;
	height: 200px;
}

</style>