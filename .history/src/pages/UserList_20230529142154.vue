<template>
  <tr>
    <td>
      <input type="checkbox" name="del" :value="userdata.id" class="ck" />
    </td>
    <td>{{ userdata.id }}</td>
    <td>{{ userdata.accountid }}</td>
    <td>{{ userdata.name }}</td>
    <td>{{ userdata.pwd }}</td>
    <td>{{ userdata.amount }}</td>
    <td>{{ userdata.time }}</td>
    <td>{{ status }}</td>
    <td>{{ userdata.userId }}</td>
    <td>
      <button @click="Jump('ListData', userdata)">查看</button>&nbsp;|&nbsp;
      <button @click="Jump('ListEdit', userdata)">编辑</button>&nbsp;|&nbsp;
      <button @click="Jump('SaveMoney', userdata)">存钱</button>&nbsp;|&nbsp;
      <button class="color-red" @click="DeleteAccount">删除</button>
    </td>
  </tr>
</template>

<script>
import axios from "axios";

export default {
  name: "UserList",
  props: ["user", "query"],
  data() {
    return {
      userdata: {
        id: this.user.id,
        accountid: this.user.accountid,
        name: this.user.name,
        pwd: this.user.pwd,
        amount: this.user.amount,
        time: this.TimestampToDate(this.user.createTime.time),
        status: this.user.status,
        userId: this.user.userId,
      },
      status: "",
    };
  },
  methods: {
    TimestampToDate(Timestamp) {
      let date1 = new Date(Timestamp);
      return (
        date1.toLocaleDateString().replace(/\//g, "-") +
        " " +
        date1.toTimeString().substr(0, 8)
      );
    },
    Jump(website, data) {
      this.$bus.$emit("page", website, data);
    },
    DeleteAccount() {
      if (confirm("你确定删除吗？")) {
        this.$store.dispatch("request", `act=remove&Id=${this.userdata.id}`);
        let information = this.$store.state.requestData;
        if (information[0]) {
          alert("操作成功！");
          this.$bus.$emit("page", "Wait");
        }
        //#region
        // axios.post(`http://localhost:8080/MYSQL_war_exploded/CounterServlet2?act=remove&Id=${this.userdata.id}`).then(
        //     response => {
        //       if (response.data[0]){
        //         alert('操作成功！')
        //         this.status='删除'
        //       }
        //     },
        //     error => {
        //       console.log('404')
        //     }
        // )
        //#endregion
      }
    },
    mypassword() {
      var str = "48514651584185185";
      var password = "";
      if (str.length > 6) {
        password = str.substring(str.length - 6, str.length);
        return password;
      } else {
        password = str;
        for (var index = 0; index < 6 - str.length; index++) {
          password = "0" + password;
        }
        return password;
      }
    },
  },
  mounted() {
    if (this.userdata.status == 1) {
      this.status = "正常";
    } else if (this.userdata.status == 0) {
      this.status = "冻结";
    } else {
      this.status = "删除";
    }
  },
};
</script>

<style scoped>
button {
  color: #056cae;
  background-color: transparent;
}
button:hover {
  color: #b700ff;
}
td {
  padding: 0 20px;
  border-right: 1px solid #c9c9ca;
}
.color-red {
  color: red;
}
</style>