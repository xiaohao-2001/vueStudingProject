<template>
  <div class="pagebox fr">
    <div class="loginbox">

      <ul class="loginbox_login">
        <h1 class="loginh1">添加用户</h1>
        <li><input type="text" placeholder="请输入用户名" class="logintest" v-model="username"></li>
        <li><input type="text" placeholder="请输入密码" class="logintest" v-model="userpwd"></li>
        <li>
          <button class="loginbun">确认添加编辑</button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "AddUser",
  data() {
    return {
      username: '',
      userpwd: '',
    }
  },
}
</script>

<style scoped>
.pagebox {
  position: relative;
  width: 85%;
  height: 90vh;
  font-size: 16px;
}

ul {
}
</style>