<template>
  <div class="box">
    <h1>管理系统</h1>
    <div class="logo fl"></div>
    <div class="logo fr"></div>
    <div class="user fr">
      <div class="userleft"><img src="../images/LoginBackgroud.jpg" alt=""></div>
      <div>管理员x</div>
    </div>
    <div class="logo fr"></div>
    <div class="logo fr"></div>
    <div class="logo fr"></div>
  </div>
</template>

<script>
export default {
  name: "IndexHead"
}
</script>

<style scoped>
.box {
  width: 100%;
  height: 10vh;
  line-height: 10vh;
  background-color: #096b8f;
  color: white;
  cursor: default;
}

h1 {
  float: left;
  width: 15%;
  height: 100%;
  background-color: #2d7491;
  color: white;
  text-align: center;
}

.logo {
  width: 5%;
  height: 100%;
  text-align: center;
  line-height: 10vh;
  font-size: 30px;
  font-family: 'icomoon';
}

.user {
  margin-left: 20px;
  width: 15%;
  height: 100%;
  font-size: 24px;
}

.userleft{
  float: left;
  width: 25%;
  height: 68%;

  margin-right: 20px;
}
.userleft img{
  width: 60px;
  height: 60px;
  border-radius: 50%;
}
</style>