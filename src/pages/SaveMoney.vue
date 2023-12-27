<template>
  <div class="listbox fr">
    <ul>
      <li><div class="fl">存</div><div class="fr" @click="back">X</div></li>
      <li><table>用户名:</table><span>{{userdata.name}}</span></li>
      <li><table>银行账号:</table><span>{{userdata.accountid}}</span></li>
      <li><table>当前余额:</table><span>{{userdata.amount}}元</span></li>
      <li><table>当前状态:</table><span>{{userdata.status}}</span></li>
      <li><table>存入金额:</table><input type="number" class="inputtext pal" v-model="amount"></li>
      <li><table></table><button @click="submit">确认</button></li>
    </ul>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "SaveMoney",
  props:['userdata'],
  data(){
    return{
      amount:''
    }
  },
  methods:{
    back(){
      this.$router.back()
    },
    submit() {
      if(this.amount<=0&&this.amount!=''){
        return alert('金额不能小于或等于零且不能为空')
      }
      this.$store.dispatch('request', `act=saveMoney&Id=${this.userdata.id}&money=${this.amount}`)
      let information = this.$store.state.requestData
      if (information[0]) {
        alert('操作成功！')
        this.$router.replace({
          name: 'UserData',
        })
      }
      //#region
      // axios.post(`http://localhost:8080/MYSQL_war_exploded/CounterServlet2?act=saveMoney&Id=${this.userdata.id}&money=${this.amount}`).then(
      //     response => {
      //       console.log(response.data)
      //       if (response.data[0]){
      //         alert('操作成功！')
      //         this.$router.replace({
      //           name: 'UserData',
      //         })
      //       }
      //     },
      //     error => {
      //       console.log('404')
      //     }
      // )
      //#endregion
    }
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
.inputtext {
  height: 4vh;
  width: 12vw;
  border-radius: 6px;
  /*padding-left: 15px;*/
  font-size: 20px;
  border: 1px solid black;
}
.pal{
  padding-left: 15px;
}
li button{
  height: 50px;
  width: 120px;
  font-size: 16px;
  background-color: #2d7491;
  border-radius: 7px;
  color: white;
}
li .fr{
  margin-right: 20px;
}
li .fr:hover{
  color: red;
}
</style>