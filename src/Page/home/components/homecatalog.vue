<template>
  <div class="wrapper">
    <div 
      class="icon"
      v-for="item of iconList"
      :key="item.id"
    >
      <div class="icon-img">
        <img 
          class="img" 
          :src="item.imgUrl"
          :class="[item.color]"
        >
      </div>
      <div class="icon-desc">{{item.desc}}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'homeCatalog',
  props:{
    iconList:Array
  },
  data(){
    return {
      red:'red',
      orange:'orange',
      green:'green',
      blue:'blue'
    }
  }
  
}
</script>

<style lang="stylus" scoped>
.wrapper
  background:#fff
  padding-top:.2rem
  .icon
    width:25%
    float:left
    .img
      display:block
      background:red
      border-radius:1rem
      margin:0 auto
      width:50%
    .red
      background:#fd6266
    .orange
      background:#fda424
    .green
      background:#6dcf16
    .blue
      background:#41a9f2
    .icon-desc
      text-align:center
      padding-top:.2rem
      padding-bottom:.5rem
</style>
