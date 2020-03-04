<template>
  <div class="galary-content">
    <div class="wrapper">
      <div 
        class="imgWrapper"
        v-for="item of imgList[this.index][this.index]"
        :key="item.id"
      >
        <img 
          :src="item.imgUrl"
          @click="handlePictureClick(item.id)"
        >
      </div>
    </div>
    <div 
      class="galary"
      v-show="show"
      :length="length"
    >
      <swiper :options="swiperOption">
        <swiper-slide 
          v-for="item of imgList[this.index][this.index]"
          :key="item.id"
          >
          <div class="galary-desc">{{parseInt(item.id)+1}}/{{length}}</div>
          <div class="galary-img">
            <img :src="item.imgUrl">
          </div>
        </swiper-slide>
      </swiper>
      <span 
        class="cancelBtn"
        @click="handlePictureBackClick"
      >X</span>

    </div>
  </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
  name: 'galaryContent',
  props:{
    imgList:Array
  },
  computed:mapState(['index']),
  methods:{
    handlePictureClick(){
      this.length = this.imgList[this.index][this.index].length
      this.show=true
    },
    handlePictureBackClick(){
      this.show=false
    }
  },
  data(){
    return {
      length:1,
      show:false,
      swiperOption:{
          loop:false
      }
    }
  }
  
}
</script>

<style lang="stylus" scoped>
.wrapper
    background:#fff
    .imgWrapper
      width:47%
      background:#aaa
      margin:.1rem
      float:left
    .imgWrapper > img
      width:100%
.galary
  position:absolute
  top:-0.86rem
  left:0
  right:0
  bottom:0
  background:#000
  color:#fff
  .galary-desc
    text-align:center
    font-size:.3rem
    padding:1.2rem
  .galary-img
    margin-top:2rem
  .galary-img>img
    width:100%
  .swiper-pagination
    color:#fff
    bottom:7.5rem
  .cancelBtn
    font-size:.5rem
    position:relative
    left:3.5rem
    bottom:-2rem
    color:#fff
</style>
