<template>
<div>
  <IndexHead/>
  <IndexBody/>
</div>
</template>

<script>
import IndexHead from '../index/IndexHead';
import IndexBody from "../index/IndexBody";


export default {
  name: "index",
  components:{IndexHead,IndexBody}
}
</script>

<style scoped>

</style>