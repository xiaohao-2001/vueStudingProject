<template>
  <router-view></router-view>
</template>

<script>

export default {
  name: 'App',
  mounted() {
    this.$router.push({
      name: 'Login',
    })
  }
}
</script>
<style>
body {
  background: url("./images/background.jpg") no-repeat center top;
  background-size: cover;
  background-attachment: fixed;
  overflow: hidden;
}

@font-face {
  font-family: 'icomoon';
  src: url('fonts/icomoon.eot?4ulcy0');
  src: url('fonts/icomoon.eot?4ulcy0#iefix') format('embedded-opentype'),
  url('fonts/icomoon.ttf?4ulcy0') format('truetype'),
  url('fonts/icomoon.woff?4ulcy0') format('woff'),
  url('fonts/icomoon.svg?4ulcy0#icomoon') format('svg');
  font-weight: normal;
  font-style: normal;
  font-display: block;
}
</style>
