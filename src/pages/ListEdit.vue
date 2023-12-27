<template>
  <div class="listbox fr">
    <ul>
      <li>
        <div class="fl">编辑</div>
        <div class="fr" @click="back">X</div>
      </li>
      <li>
        <table>用户名:</table>
        <span>{{ userdata.name }}</span></li>
      <li>
        <table>银行账号:</table>
        <span>{{ userdata.accountid }}</span></li>
      <li>
        <table>当前密码:</table>
        <span>{{ userdata.pwd }}</span></li>
      <li>
        <table>当前状态:</table>
        <span>{{ userdata.status }}</span></li>
      <li>
        <table>修改密码:</table>
        <input type="text" class="inputtext pal" v-model="pwd" placeholder="请输入新密码"><i ref="pwdi">密码不能与原密码相同</i></li>
      <li>
        <table>修改状态:</table>
        <select class="inputtext" v-model="status">
          <option value="1">======正常=====</option>
          <option value="-1">======删除=====</option>
          <option value="0">======冻结=====</option>
        </select></li>
      <li>
        <table></table>
        <button @click="submit">确认编辑</button>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "ListEdit",
  props: ['userdata'],
  data() {
    return {
      pwd: '',
      status: '1'
    }
  },
  methods: {
    back() {
      this.$router.back()
    },
    submit(){
      if(this.pwd==this.userdata.pwd){
        return alert('密码不能与原密码相同!!!')
      }
      console.log(this.userdata.id)
      this.$store.dispatch('request', `act=edit&Id=${this.userdata.id}&pwd=${this.pwd}&status=${this.status}`)
      let information = this.$store.state.requestData
      if (information[0]) {
        alert('操作成功！')
        this.$router.replace({
          name: 'UserData',
        })
      }
      //#region
      // axios.post(`http://localhost:8080/MYSQL_war_exploded/CounterServlet2?act=edit&Id=${this.userdata.id}&pwd=${this.pwd}&status=${this.status}`).then(
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
    },
  },
  watch: {
    pwd: {
      handler(newValue, oldValue) {
        // console.log('pwd改变了'+typeof (newValue)+"##"+typeof (this.data.pwd))
        // console.log(newValue==this.data.pwd)
        if (newValue==this.userdata.pwd){
          this.$refs.pwdi.style.cssText ='display:inline;'
        }else {
          this.$refs.pwdi.style.cssText ='display:none;'
        }
      }
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

ul li {
  padding-left: 30px;
}

ul li:first-child {
  display: block;
  height: 7vh;
  line-height: 7vh;
  border-bottom: 1px solid #d5e2e9;
  font-weight: 700;
  font-size: 30px;
  cursor: default;
}

ul li:nth-child(2) {
  margin-top: 40px;
}

ul li table {
  display: inline-block;
  height: 45px;
  width: 150px;
  line-height: 45px;
  margin-left: 60px;
  font-size: 24px;
}

ul li span {
  font-size: 20px;
}

li button {
  height: 50px;
  width: 120px;
  font-size: 16px;
  background-color: #2d7491;
  border-radius: 7px;
  color: white;
}

li .fr {
  margin-right: 20px;
}

li .fr:hover {
  color: red;
}

li i {
  display: none;
  margin-left: 20px;
  color: red;
}

.inputtext {
  height: 4vh;
  width: 12vw;
  border-radius: 6px;
  /*padding-left: 15px;*/
  font-size: 20px;
  border: 1px solid black;
}

.pal {
  padding-left: 15px;
}
</style>