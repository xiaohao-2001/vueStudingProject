<template>
  <router-view></router-view>
</template>

<script>

export default {
  name: "IndexBodyRight",
  // components:{UserData }
  mounted() {
    this.$bus.$on('page', (page,data) => {
      this.$router.push({
        name: page,
        query:{
          userdata:data
        }
      })
    })
  },
  beforeDestroy() {
    this.$bus.$off('page')
  },
}
</script>

<style scoped>
</style>