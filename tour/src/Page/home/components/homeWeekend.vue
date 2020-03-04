<template>
  <div class="week">
    <div class="week-desc">
      <div class="week-desc-content">
        ///////////<span>周末出游</span>///////////
        <p>致力推荐超完美套餐</p>
      </div>
    </div>

    <div class="week-swiper">
      <swiper :options="swiperOption">
        <swiper-slide 
          v-for="item of weekendList"
          :key="item.id"
        >
          <div class="weekSwiper-item">
            <div class="weekSwiper-item-img">
              <img :src="item.imgUrl">
            </div>
            <div class="weekSwiper-item-desc">
              {{item.desc}}
              <p>{{item.detail}}</p>
            </div>
          </div>
        </swiper-slide>
      </swiper>
    </div>

  </div>
</template>

<script>
export default {
  name: 'homeWeekend',
  props:{
    weekendList:Array
  },
  data(){
    return {
      swiperOption:{
        freeMode:true,
        spaceBetween:20,
        slidesPerView:3
      }
    }
  }
  
}
</script>

<style lang="stylus" scoped>
.week
  overflow:hidden
  height:0
  padding-bottom:58%
  border-top:.2rem solid #eee
  .week-desc
    position:relative
    overflow:hidden
    height:0
    padding-bottom:15.5%
    .week-desc-content
      text-align:center
      color:#aaa
      position:absolute
      top:50%
      left:50%
      transform:translate(-50%,-50%)
    .week-desc-content>span
      display:inline-block
      color:#000
      font-weight:bold
      margin:.15rem .3rem
  .week-swiper
    overflow:hidden
    width:100%
    height:0
    padding-bottom:84.5%
    .weekSwiper-item
      overflow:hidden
      width:110%
      height:0
      padding-bottom:150%
      border:.02rem solid #ccc
      .weekSwiper-item-img
        overflow:hidden
        height:0
        padding-bottom:67.9%
      .weekSwiper-item-img>img
        max-width:100%
      .weekSwiper-item-desc
        text-align:center
        padding-top:.3rem
      .weekSwiper-item-desc>p
        display:inline-block
        margin-top:.1rem




</style>
