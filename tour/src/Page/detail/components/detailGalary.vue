  <template>
  <div class="galary">
    <ly-tab
      v-model="selectedId"
      :items="items"
      class="tabColor"
      :options="options"
      @change="handleClick"
    >
    </ly-tab>
    <div class="cate">
      <span>全部</span>
      <span>其他</span>
    </div>
    <component 
      :is="type"
      :imgList="imgList"
    ></component>
  </div>
</template>

<script>
import galaryContent from './galaryContent'
export default {
  name: 'detailGalary',
  props:{
    galaryList:Array,
    imgList:Array
  },
  data(){
    return {
      type:'galaryContent',
      selectedId: 0,
      items: [],
      options: {
        activeColor: '#0bc071'
      },
    }
  },
  methods:{
    handleClick(item,index){
      // console.log(index)  
      this.$store.state.index = index
    }
  },
  components:{
    galaryContent
  },
  computed:{
    loopGalaryList(){
      for(let i=0;i<this.galaryList.length;i++){
        let item = {label:this.galaryList[i]}
        this.items.push(item)
      }
    }
  },
  mounted(){
    this.loopGalaryList
  }
  
}
</script>

<style lang="stylus" scoped>
.galary
  position:absolute
  top:.88rem
  left:0
  right:0
  bottom:0
  color:#fff
  z-index:100
  background:#fff
  .galary>a
    color:#000
  .tabColor
    background:#fff
    border-color:#fff
  .cate
    background:#edf0f5
    line-height:.6rem
    color:#000
  .cate > span
    margin-left:.22rem
    font-size:.3rem
  .wrapper
    background:#fff
    .imgWrapper
      width:47%
      background:red
      margin:.12rem
      float:left
    .imgWrapper > img
      width:100%
</style>
