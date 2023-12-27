<template>
  <div class="box clearfix">
    <Left/>
    <Right/>
  </div>
</template>

<script>
import Left from './IndexBoydLeft';
import Right from './IndexBodyRight';
export default {
  name: "IndexBody",
  components: {Left,Right}
}
</script>

<style scoped>
.box {
  width: 100%;
}
</style>