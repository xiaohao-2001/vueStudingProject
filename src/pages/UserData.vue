<template>
  <div class="pagebox fr">
    <div class="pageboxquery">
      <ul>
        <li>账号:<input class="inputtext" type="text" v-model="userid"></li>
        <li>用户名称:<input class="inputtext" type="text" v-model="username"></li>
        <li>用户状态:
          <select name="status" id="status" v-model="status" class="inputtext">
            <option value="">==============</option>
            <option value="1">=====正常=====</option>
            <option value="-1">=====删除=====</option>
            <option value="0">=====冻结=====</option>
          </select>
        </li>
        <li>
          <button class="but" @click=query>查询</button>
        </li>
      </ul>
    </div>
    <div class="pageboxbut">
      <ul>
        <li>
          <button class="but" @click="JumpPage('AddUser')">添加账号</button>
        </li>
        <li>
          <button class="but">删除账号</button>
        </li>
      </ul>
    </div>
    <div class="pageboxlist">
      <table>
        <thead>
        <tr>
          <th><input name="" type="checkbox" value="" id="checkAll"></th>
          <th>序号</th>
          <th>银行账号</th>
          <th>名称</th>
          <th>密码</th>
          <th>余额</th>
          <th>创建时间</th>
          <th>状态</th>
          <th>创建者ID</th>
          <th></th>
        </tr>
        </thead>
        <tbody>
        <UserList v-for="(user,index) of users" :key="index" :user="user"></UserList>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import UserList from "./UserList";

export default {
  name: "UserData",
  data() {
    return {
      username: '',
      userid: '',
      status: '',
      users: '',
    }
  },
  components: {UserList},
  methods: {
    query() {
      this.$store.dispatch('request', `act=homepage&accountId=${this.userid}&name=${this.username}&status=${this.status}`)
      // this.users = this.$store.state.requestData
      //#region
      axios.post(`http://localhost:8080/MYSQL_war_exploded/CounterServlet2?act=homepage&accountId=${this.userid}&name=${this.username}&status=${this.status}`)
          .then(
              response => {
                console.log(response.data)
                this.users = response.data
              },
              error => {
                console.log('404')
              }
          )
      //#endregion
    },
    JumpPage(page) {
      this.$bus.$emit('page', page)
    },
  },
  mounted() {
    this.query()
  },
}
</script>

<style scoped>
.pagebox {
  width: 85%;
  height: 90vh;
  background-color: #fdfdfe;
  padding: 6px;
}

.pageboxquery {
  width: 100%;
  height: 8vh;
  background-color: #ececed;
  border: 1px solid rgba(108, 103, 103, 0.4);

}

.pageboxquery ul li {
  display: inline-block;
  line-height: 8vh;
  font-size: 20px;
  padding-left: 24px;
}

.pageboxbut {
  width: 100%;
  height: 6vh;
  border-bottom: 1px solid #c7c7c9;
}

.pageboxbut ul li {
  display: inline-block;
  line-height: 6vh;
  margin-left: 2vw;

}

.pageboxlist {
  width: 100%;
  height: 75vh;
  overflow: scroll;
  overflow-x: hidden;
}

.inputtext {
  height: 3.5vh;
  width: 12vw;
  border-radius: 6px;
  padding-left: 15px;
  border: 1px solid black;
}

table {
  width: 100%;
  font-size: 16px;
  line-height: 40px;
  border-collapse: collapse;
  border: 1px solid rgba(108, 103, 103, 0.4);

}

th {
  background: #f0f5f7;
  border-bottom: 2px solid #B5C8D1FF;
  text-align: left;
  padding: 0 20px;
}

.but {
  padding: 3.5px 20px;
  border-radius: 6px;
  font-size: 16px;
  background-color: #f0f4f7;
  border: 1px solid black;
}

select {
  font-size: 20px;
}
</style>