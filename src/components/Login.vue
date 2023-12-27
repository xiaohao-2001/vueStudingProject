<template>
  <div class="loginbox">
    <div class="loginbox_login">
      <h1 class="loginh1">登录</h1>
      <div><input type="text" placeholder="请输入账号" class="logintest" v-model="userId"></div>
      <div><input type="password" placeholder="请输入密码" class="logintest" v-model="pwd"></div>
      <div>
        <button class="loginbun" @click="SignIn">登录</button>
      </div>
      <div></div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: "Login",
  data() {
    return {
      userId: '',
      pwd: '',
    }
  },
  methods: {
    SignIn() {
      this.$store.dispatch('request', `act=enter&userId=${this.userId}&pwd=${this.pwd}`)
      let information = this.$store.state.requestData
      if (information[0]) {
        this.$router.push({
          name: 'Index',
        })
      }
      //#region
      // axios.post(`http://localhost:8080/MYSQL_war_exploded/CounterServlet2?act=enter&userId=${this.userId}&pwd=${this.pwd}`).then(
      //     response => {
      //       console.log(response.data)
      //       if (response.data[0]){
      //         this.$router.push({
      //           name: 'Index',
      //         })
      //       }
      //     },
      //     error => {
      //       console.log('404')
      //     }
      // )
      //#endregion
    },
  }
}
</script>

<style>
.loginbox {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  height: 500px;
  width: 630px;
  background-color: rgba(0, 0, 0, 0.3);
  border-radius: 10px;
}

.loginbox_login {
  width: 400px;
  height: 100%;
  margin: 0 auto;
  text-align: center;
}

.logintest {
  margin-bottom: 30px;
  border-radius: 25px;
  padding-left: 25px;
  width: 100%;
  height: 50px;
  font-size: 20px;
}

.loginh1 {
  height: 200px;
  font-size: 40px;
  color: white;
  line-height: 200px;
}

.loginbun {
  height: 70px;
  width: 170px;
  border-radius: 10px;
  font-size: 25px;
  background-color: aquamarine;
}
</style>