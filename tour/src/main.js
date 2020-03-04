// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import App from './App'
import router from './router'
import store from './store/store.js'
import '@/assets/style/reset.css'
import '@/assets/style/border.css'
import '@/assets/style/iconfont.css'
import 'swiper/dist/css/swiper.css'
import 'mint-ui/lib/style.css'
import fastClick from 'fastClick'
import LYTab from 'ly-tab'
Vue.use(LYTab)
Vue.config.prodLuctionTip = false
fastClick.attach(document.body)
Vue.use(VueAwesomeSwiper)

new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>',
  mounted(){
  	  let map =new BMap.Map('allmap');
    let mycity=new BMap.LocalCity();
    mycity.get((result)=>{
      if(result){
        this.$store.state.city=result  .name;
      }else{
        this.$store.state.city='北京'
      }
    })
  }
})
