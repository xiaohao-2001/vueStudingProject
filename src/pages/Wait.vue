<template>
  <div class="fr"><h1>Loading...</h1></div>
</template>

<script>
export default {
  name: "Wait",
  mounted() {
      this.$router.back()
  }
}
</script>

<style scoped>
.fr{
  width: 85%;
  height: 90vh;
  background-color: #fdfdfe;
  font-size: 16px;
}
h1{
  text-align: center;
  font-size: 60px;
}
</style>