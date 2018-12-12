<!DOCTYPE html>
<template>
<div id="Borrow_Message">
	<div v-if="this.presentModule == 'borrow'">
		<h2 class="username">姓名：李明</h2>
		<h2 class="usernumber">卡号：2016210430020</h2>
		<h2 class="bookNum">可借阅数量：10本</h2>
		<h2 class="tip">您所要借的图书为：</h2>
		<table border="1px solid black">
			<tbody>
				<tr>
					<th abbr="借书事物编号">借书事物编号</th>
					<th abbr="题名">题名</th>
					<th abbr="备注">备注</th>
				</tr>
				<tr>
					<td class="Borrow_showId">101589591</td>
					<td class="Borrow_bookName">十万个为什么</td>
					<td class="Borrow_remarks">应还日期：<a>2018-12-1</a></td>
				</tr>
				<tr>
					<td class="Borrow_showId">101589500</td>
					<td class="Borrow_bookName">西游记</td>
					<td class="Borrow_remarks">应还日期：<a>2018-12-1</a></td>
				</tr>
				<tr>
					<td class="Borrow_showId">101589599</td>
					<td class="Borrow_bookName">百年孤独</td>
					<td class="Borrow_remarks">应还日期：<a>2018-12-1</a></td>
				</tr>
			</tbody>
		</table><br>
		<input type="button" value="重新选择" v-on:click="goTo(formerPath)">
		<input type="button" value="确认借阅" v-on:click="goTo(nextPath)">
		<input type="button" value="退出" v-on:click="goTo('/')">
	</div>
	<div v-else-if="this.presentModule == 'return'">
		<h2 class="username">姓名：李明</h2>
		<h2 class="usernumber">卡号：2016210430020</h2>
		<h2 class="tip">您所要归还的书籍为：</h2>
		
		<table border="1px solid black">
			<tbody>
				<tr>
					<th abbr="借书事物编号">借书事物编号</th>
					<th abbr="题名">题名</th>
					<th abbr="备注">备注</th>
				</tr>
				<tr>
					<td class="Return_showId">101589591</td>
					<td class="Return_bookName">十万个为什么</td>
					<td class="Return_remarks">应还日期：<a>2018-12-1</a></td>
				</tr>
				<tr>
					<td class="Return_showId">101589500</td>
					<td class="Return_bookName">西游记</td>
					<td class="Return_remarks">应还日期：<a>2018-12-1</a></td>
				</tr>
				<tr>
					<td class="Return_showId">101589599</td>
					<td class="Return_bookName">百年孤独</td>
					<td class="Return_remarks">应还日期：<a>2018-12-1</a></td>
				</tr>
			</tbody>
		</table><br>
		<input type="button" value="确认归还" v-on:click="goTo(nextPath)">
		<input type="button" value="退出" v-on:click="goTo('/')">
	</div>
	<div v-else="this.presentModule == 'fine'">
		<h2 class="username">姓名：李明</h2>
		<h2 class="usernumber">卡号：2016210430020</h2>
		<h2 class="tip">您所要支付罚款的书籍：</h2>
		
		<table border="1px solid black">
			<tbody>
				<tr>
					<th abbr="超期事物编号">超期事物编号</th>
					<th abbr="题名">题名</th>
					<th abbr="备注">备注</th>
					
				</tr>
				<tr>
					<td class="Fined_showId">101589591</td>
					<td class="Fined_bookName">十万个为什么</td>
					<td class="Fined_remarks">超期天数:<a>30</a>天</td>
				</tr>
				<tr>
					<td class="Fined_showId">101589500</td>
					<td class="Fined_bookName">西游记</td>
					<td class="Fined_remarks">超期天数:<a>30</a>天</td>
				</tr>
				<tr>
					<td class="Fined_showId">101589599</td>
					<td class="Fined_bookName">百年孤独</td>
					<td class="Fined_remarks">超期天数:<a>30</a>天</td>
				</tr>
			</tbody>
		</table><br>
		<h2 class="tip">您所要支付的金额为：9.00元。</h2>
		<input type="button" value="确认支付" v-on:click="goTo(nextPath)">
		<input type="button" value="退出"  v-on:click="goTo('/')">
	</div>
</div>
</template>

<script>
export default {
	name: 'Ensure',
	data: function () {
		return {
			presentModule: '',
			formerPath: '',
			nextPath: ''
		}
	},
	methods: {
		goTo: function (path) {
			this.$router.push(path)
		}
	},
	mounted: function () {
		this.presentModule = this.$route.params.module
		this.formerPath = '/module/' + this.$route.params.module + '/tips'
		this.nextPath = '/module/' + this.$route.params.module + '/success'
	}
}
</script>
<style>
#Borrow_Message {
	margin:100px;
}
.username,.bookNum,.usernumber {
	display : inline;
	margin-right:50px;
}
#Borrow_Message input {
	width: 100px;        
	color: #fff;       
	margin: 10px 50px;
	border-radius: 5px;
	line-height: 30px;
	cursor: pointer;
	background: #196fb8;  
	border:1px solid #196fb8;
} 
#Borrow_Message table {
	margin-top:30px;
	margin-left:10px;
	width:800px;
}
#Borrow_Message tbody {
	border:1px solid black;
}
#Borrow_Message th {
	padding:8px;
}
#Borrow_Message tr {
	text-align:left;
	padding:8px;
}
#Borrow_Message td {
	padding:8px;
	padding-bottom:5px;
}
.Borrow_showId {
	width:20%;
}
.Borrow_bookName {
	width:20%;
}
</style>