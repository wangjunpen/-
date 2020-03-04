<template>
  <div class="content">
    <div class="allmap" ref="allmap"></div>
    <div class="tab">
      <div 
        class="arrow"
        @click="handleArrowClick"
      >V</div>
      <navbar v-model="selected">
        <tab-item id="1">酒店</tab-item>
        <tab-item id="2">景点</tab-item>
      </navbar>
      <tab-container v-model="selected">
        <tab-container-item id="1">
          <cell 
            v-for="item of addressList[0]" 
            :title="item.title"
            :label="item.label"
            :key="item.id"
            @click.native="handleCellClick(item.id)"
          />
        </tab-container-item>
        <tab-container-item id="2">
          <cell 
            v-for="item of addressList[1]" 
            :title="item.title"
            :label="item.label"
            :key="item.id"
            @click.native="handleCellClick(item.id)"
          />
        </tab-container-item>
      </tab-container>
    </div>

  </div>
</template>

<script>
import { 
   Navbar, 
   TabItem,
   TabContainer,
   TabContainerItem,
   Cell
 } from 'mint-ui'
import markerImg from '../../../assets/img/marker.png'
export default {
  name: 'mapContent',
  props:{
    addressList:Array
  },
  data(){
    return {
      clickFlag:'0',
      flag:'1',
      selected:'1'
    }
  },
  components:{
    Navbar, 
    TabItem,
    TabContainer,
    TabContainerItem,
    Cell
  },
  methods:{
    handleArrowClick(){
      if(this.clickFlag==='0'){
        this.$refs.allmap.style.height='20%'
        this.clickFlag='1'
      }else{
        this.$refs.allmap.style.height='60%'

      }
    },
    addMasker(m,n){
      let map = new BMap.Map(this.$refs.allmap)
      let myGeo = new BMap.Geocoder()
      for(let i=0;i<this.addressList.length;i++){
        for(let j=0;j<this.addressList[i].length;j++){
          let title = this.addressList[m][n]
          myGeo.getPoint(this.addressList[i][j].title,function(point){
              // console.log(point)
              if(point){
                  if(i===m&&j===n){
                    map.centerAndZoom(point,15
                      )
                    let myIcon = new BMap.Icon(markerImg,new BMap.Size(50,50),{
                      imageOffset:new BMap.Size(14,2)
                    })
                    let marker = new BMap.Marker(point,{icon:myIcon})
                    map.addOverlay(marker)
                    //添加信息窗口
                    // console.log(title)
                    let infoWindow = new BMap.InfoWindow(title.title)
                    infoWindow.setWidth(250)
                    infoWindow.setHeight(60)
                    map.openInfoWindow(infoWindow,map.getCenter())
                  }else{
                    map.centerAndZoom(point,15
                      )
                    let marker = new BMap.Marker(point)
                    map.addOverlay(marker)
                  }
              }else{
                console.log('对不起，找不到')
              }
          })
        }
      }
    },
    changeMasker(id){
      let page = parseInt(this.flag)-1
        let index = parseInt(id)-1
        this.addMasker(page,index)
      },
    handleCellClick(id){
      if(this.flag==='1'){
        this.changeMasker(id)
      }else{
        this.changeMasker(id)
      }
    }
  },
  watch:{
    //判断点击的到底是左边还是右边
    selected(val){
      if(val==='1'){
        this.flag='1'
      }else{
        this.flag='2'
      }
    }
  },
  mounted(){
    this.addMasker(0,0)
  }
  
}
</script>

<style lang="stylus" scoped>
.content
  position:absolute
  top:0
  left:0
  right:0
  bottom:0
  background:#fff
  z-index:100
  .allmap
    position:relative
    top:0
    left:0
    right:0
    bottom:.6rem
    z-index:11111
    height:60%
  .tab
    color:#000
    .arrow
      text-align:center
</style>
