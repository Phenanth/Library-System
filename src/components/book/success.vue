<!DOCTYPE html>
<template>
<div id="Borrow_Message">
  <div v-if="this.presentModule == 'borrow'">
    <h2 class="username">姓名：李明</h2>
    <h2 class="usernumber">卡号：2016210430020</h2>
    <h2 class="tip">您已成功借阅以下书籍：</h2>
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
    </table>
    <input type="button" value="返回首页" v-on:click="goTo('/')">
  </div>
  <div v-else-if="this.presentModule == 'return'">
    <h2 class="username">姓名：李明</h2>
    <h2 class="usernumber">卡号：2016210430020</h2>
    <h2 class="tip">您已成功归还以下书籍：</h2>
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
    </table>
    <input type="button" value="返回首页" v-on:click="goTo('/')">
  </div>
  <div v-else="this.presentModule == 'fine'">
    <h2 class="username">姓名：李明</h2>
    <h2 class="usernumber">卡号：2016210430020</h2>
    <h2 class="tip">您已成功偿还<a>9.00元</a>罚款</h2>
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
    </table>
    <input type="button" value="返回首页" v-on:click="goTo('/')">
  </div>
</div>
</template>

<script>
export default {
  name: 'Success',
  data: function () {
    return {
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
  }
}
</script>

<style>
#Borrow_Message {
  text-align: left;
  position:relative;
  left:12%;
  width:70%;
  margin:100px;
}
.username,.usernumber {
  display : inline;
  margin-right:40px;
  font-size:30px;
  margin-left:1%;
}
#Borrow_Message input {
  float:right;
  position:relative;
  right:13%;
  width: 100px;        
  line-height: 30px;
  margin-top:20px;
  margin-right:20px;
  border:2px solid  #0EA8A3;
  cursor: pointer;
  color: #0EA8A3;
  background:white;
} 
#Borrow_Message input:hover {
  background-color:#0EA8A3;
  color:white;
}

#Borrow_Message table {
  margin-left:10px;
  width:800px;
  font-size: 15px;
}
#Borrow_Message tbody {
  border:1px solid lightgrey;
}
#Borrow_Message th {
  padding:15px;
  background-color: rgba(14,168,163,0.6);
}
#Borrow_Message tr {
  text-align:left;
  padding:15px;
}
#Borrow_Message td {
  padding:15px;
}
/*定义了很多的class，只需要开头的class属性定义好就好*/
#Borrow_Message .Borrow_showId ,
#Borrow_Message .Return_showId,
#Borrow_Message .Fined_showId {
  width:18%;
}
#Borrow_Message .Borrow_bookName,
#Borrow_Message .Return_bookName,
#Borrow_Message .Fined_bookName {
  width:25%;
}
#Borrow_Message .tip
{
   float:left;
   font-size:25px;
   padding-right:50%;
   margin-left:1%;
}

    </style>