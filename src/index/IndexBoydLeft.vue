<template>
  <div class="leftbox fl">
    <ul>
      <li class="list" :class="{'slide':1==index}" >
        <a href="#" @click="changestyle(1)">项目一</a>
        <ul>
          <li @click="JumpPage('UserData')">page1</li>
          <li @click="JumpPage('AddUser')">page2</li>
          <li>page3</li>
        </ul>
      </li>
      <li class="list" :class="{'slide':2==index}">
        <a href="#" @click="changestyle(2)">项目二</a>
        <ul>
          <li>page1</li>
          <li>page2</li>
          <li>page3</li>
        </ul>
      </li>
      <li class="list" :class="{'slide':3==index}">
        <a href="#" @click="changestyle(3)">项目三</a>
        <ul>
          <li>page1</li>
          <li>page2</li>
          <li>page3</li>
        </ul>
      </li>
      <li class="list" :class="{'slide':4==index}">
        <a href="#" @click="changestyle(4)">项目四</a>
        <ul>
          <li>page1</li>
          <li>page2</li>
          <li>page1</li>
        </ul>
      </li>
      <li class="list" :class="{'slide':5==index}">
        <a href="#" @click="changestyle(5)">项目五</a>
        <ul>
          <li>page1</li>
          <li>page2</li>
          <li>page1</li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "IndexBoydLeft",
  data() {
    return {
      index:-1,
      slide: 'slide',
    }
  },
  methods: {
    changestyle(index) {
      if (this.index==index){
        this.index=-1
      }else {
        this.index=index
      }
    },
    JumpPage(page){
      this.$bus.$emit('page',page)
    }
  }
}
</script>

<style scoped>
.leftbox {
  width: 15%;
  height: 90vh;
  background-color: #1C292FFF;
}

a {
  display: block;
  height: 60px;
  width: 100%;
  font-size: 18px;
  line-height: 60px;
  padding-left: 20px;
  color: white;
}

a::after {
  float: right;
  padding-right: 15px;
  content: '\ea43';
  font-family: 'icomoon';
}

a:hover {
  background-color: #34454FFF;

}

.list ul li {
  width: 100%;
  height: 0;
  background-color: #34454FFF;
  color: transparent;
}

.slide ul li {
  display: block;
  height: 60px;
  line-height: 60px;
  padding-left: 20px;
  transition: all 0.5s;
  color: white;
}
.slide ul li:hover{
  background-color: #1C292FFF;
}
</style>