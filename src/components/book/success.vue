<!DOCTYPE html>
<template>
<div id="Borrow_Message">
  <div v-if="this.presentModule == 'borrow'">
    <input type="button" value="首页" v-on:click="goTo('/')">
    <h2>您已成功借阅以下书籍：</h2>
    
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
  </div>
  <div v-else-if="this.presentModule == 'return'">
    <input type="button" value="首页" v-on:click="goTo('/')">
    <h2>您已成功归还以下书籍：</h2>
    
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
  </div>
  <div v-else="this.presentModule == 'fine'">
    <input type="button" value="首页" v-on:click="goTo('/')">
    <h2>您已成功偿还<font id="total_fined">9.00元</font>罚款。</h2>
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
     
       #Borrow_Message
       {
          margin:100px;
       }
       #Borrow_Message h2
       {
          text-align:left; 
          

       }
       #Borrow_Message input
       {
         
         width: 100px;        
         color: #fff;       
         margin: 10px auto;
         border-radius: 5px;
         line-height: 30px;
         cursor: pointer;
         background: #196fb8;  
         border:1px solid #196fb8;
       } 
       #Borrow_Message table
       {
          margin-top:30px;
          margin-left:10px;
          width:800px;
       }
       #Borrow_Message tbody
       {
          border:1px solid black;
       }
        #Borrow_Message th
       {
          
          padding:8px;
         
       }
       #Borrow_Message tr
       {
         text-align:left;
          padding:8px;
          
       }
       #Borrow_Message td
       {
         
          padding:8px;
          padding-bottom:5px;
          
       }
       .Borrow_showId 
       {
         
         width:20%;
       }
      .Borrow_bookName
      {
        width:20%;
      }

    </style>