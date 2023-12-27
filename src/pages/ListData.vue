<template>
<div class="listbox fr">
  <ul>
    <li><div class="fl">用户数据</div><div class="fr" @click="back">X</div></li>
    <li><table>用户ID:</table><span>{{userdata.id}}</span></li>
    <li><table>银行账号:</table><span>{{userdata.accountid}}</span></li>
    <li><table>用户名:</table><span>{{userdata.name}}</span></li>
    <li><table>当前密码:</table><span>{{userdata.pwd}}</span></li>
    <li><table>当前余额:</table><span>{{userdata.amount}}元</span></li>
    <li><table>当前状态:</table><span>{{userdata.status}}</span></li>
    <li><table>创建者ID:</table><span>{{userdata.userId}}</span></li>
    <li><button @click="back">确认</button></li>
  </ul>
</div>
</template>

<script>
export default {
  name: "ListData",
  props:['userdata'],
  data(){
    return{
      pwd:''
    }
  },
  methods:{
    back(){
      this.$router.back()
    }
  },
  mounted() {
    console.log(this.userdata)
  }
}
</script>

<style scoped>
.listbox {
  /*position: relative;*/
  width: 85%;
  height: 90vh;
  background-color: #fdfdfe;
  font-size: 16px;

}
ul li{
  padding-left: 30px;
}
ul li:first-child{
  display: block;
  height: 7vh;
  line-height: 7vh;
  border-bottom: 1px solid #d5e2e9;
  font-weight: 700;
  font-size: 30px;
  cursor: default;
}
ul li:nth-child(2){
margin-top: 40px;
}
ul li table{
  display: inline-block;
  height: 45px;
  width: 150px;
  line-height: 45px;
  margin-left: 60px;
  font-size: 24px;
}
ul li span{
  font-size: 20px;
}
li button{
  height: 50px;
  width: 120px;
  font-size: 16px;
  background-color: #2d7491;
  border-radius: 7px;
  margin: 5vh auto auto 16vh;
  color: white;
}
li .fr{
  margin-right: 20px;
}
li .fr:hover{
  color: red;
}
</style>