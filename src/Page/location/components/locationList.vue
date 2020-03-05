<template>
  <div class="list" ref="wrapper">
    <div>
  	<div class="present-area">
      <div class="present-title" ref="present">当前</div>
      <div 
        class="present-button"
        @click="handlepresentClick"
      >{{this.$store.state.city}}</div>
    </div>
    <div class="hot-area">
      <div class="hot-title">热门城市</div>
      <div class="hot-list">
        <div 
          class="hot-button"
          v-for="item of hotCities"
          :key="item.id"
          @click="handleCurrentClick(item.name)"
        >{{item.name}}</div>
      </div>
    </div>
    <div class="alph-area">
      <div 
        class="alph-wrapper"
        v-for="(item,key) of cities"
        :key="key"
        :ref="key"
      >
        <div class="alph-title">{{key}}</div>
        <div class="alph-list">
          <div 
            class="alph-button border-bottom"
            v-for="innerItem of item"
            :key="innerItem.id"
            @click="handleAlphClick(innerItem.name)"
          >{{innerItem.name}}</div>
        </div>

      </div>
    </div>
</div>
  </div>
</template>

<script>
import BScroll from "better-scroll" 
import BMap from 'BMap'
export default {
  name: 'locationList',
  props:{
    letter:String,
    cities:Object,
    hotCities:Array
  },
  methods:{
    handleCurrentClick(city){
      this.$store.dispatch('change',city)
      this.$router.push('/')
    },
    handleAlphClick(city){
      this.$store.dispatch('change',city)
      this.$router.push('/')
    },
    handlepresentClick(){
      this.$router.push('/')
      
    }
  },
  watch:{
    letter(){
      // console.log(this.letter)
      const elementLetter = this.$refs[this.letter]
      const elementPresent = this.$refs.present
      if(elementLetter){
        const element = elementLetter[0]
        this.scroll.scrollToElement(element)
      }else{
        this.scroll.scrollToElement(elementPresent)
      }
    }
  },
  data(){
    return {
      city:''
    }
  },
  mounted(){
    this.scroll = new BScroll(this.$refs.wrapper,{
      click:true,
      mouseWheel:{
        speed:20,
        invert:false,
        easeTime:300
      }
    })
  

  }
  
}
</script>

<style lang="stylus" scoped>
.border-bottom
  &:before
    border:.04rem solid #ccc
.list
  overflow:hidden
  background:#e9ecf1
  position:absolute
  top:1.12rem
  left:0
  bottom:0
  width:100%
  z-index:1
  .hot-list
    overflow:hidden
  .present-title,.hot-title,.alph-title
    margin-left:.4rem
    padding:.4rem 0
  .hot-title
    margin-bottom:-.3rem
  .present-button,.hot-button,.alph-button
    line-height:.44rem
    padding:.2rem .2rem
    background:#fff
  .present-button
    width:84%
    margin-left:.2rem
  .hot-button
    width:15%
    float:left
    margin-left:.2rem
    text-align:center
    margin-top:.2rem
  .alph-button
    width:100%
    padding-left:.4rem





</style>
