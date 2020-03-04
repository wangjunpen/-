<template>
  <div class="wrapper">
    <swiper :options="swiperOption">
    <swiper-slide 
      v-for="item of swiperList"
      :key="item.id"
      >
      <img 
        class="swiper-img" 
        :src="item.imgUrl">
    </swiper-slide>
    <div class="swiper-pagination"  slot="pagination"></div>
  </swiper>
  </div>
</template>

<script>
export default {
  name: 'homeSwiper',
  props:{
    swiperList:Array
  },
  data(){
    return {
      swiperOption:{
        pagination:'.swiper-pagination',
        loop:true
      }
    }
  }
  
}
</script>

<style lang="stylus" scoped>
.wrapper >>> .swiper-pagination-bullet 
  background:#fff
.swiper-img
  width:100%

</style>
