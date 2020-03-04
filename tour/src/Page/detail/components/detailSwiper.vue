<template>
  <div class="swiper">
    <router-link to="galary" append>
    <swiper :options="swiperOption">
      <swiper-slide 
        v-for="item of swiperList"
        :key="item.id"
        >
        <div class="img-wrapper">
          <img 
            class="swiper-img" 
            :src="item.imgUrl">
        </div>
        <div class="desc-wrapper">
          <span class="left">{{item.date}}</span>
          <span class="middle">{{item.page}}张</span>
          <span class="right">编号：{{item.number}}</span>

        </div>
      </swiper-slide>
  </swiper>
</router-link>
  </div>
</template>

<script>
export default {
  name: 'detailSwiper',
  props:{
    swiperList:Array
  },
  data(){
    return {
      swiperOption:{
        loop:true
      }
    }
  }
  
}
</script>

<style lang="stylus" scoped>
.img-wrapper
  overflow:hidden
  height:0
  padding-bottom:41.5%
  background:#ccc
  .swiper-img
    max-width:100%
.desc-wrapper
  position:absolute
  top:3rem
  left:0
  background:rgba(0,0,0,.6)
  color:#fff
  width:100%
  display:flex
  .left
    float:left
    margin-left:.4rem
    color:#fff
    font-size:.3rem
  .middle
    flex:1
    padding-left:4.2rem
    color:#fff
    font-size:.3rem
  .right:
    float:right
    margin-right:.1rem
    color:#fff
    font-size:.3rem
</style>
