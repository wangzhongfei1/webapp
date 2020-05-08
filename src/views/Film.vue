<template>
  <div>
    <swiper :key="slidelist.length" ref="slidepic">
      <div class="swiper-slide" v-for="data in slidelist" :key="data.id">
        <img :src="data.img | imgpath" />
      </div>
    </swiper>
    <filmHeader :class="isFixed ? 'fixed' : ''"></filmHeader>
    <router-view></router-view>
  </div>
</template>

<script>
import Vue from 'vue'
import swiper from './film/Swiper'
import filmHeader from './film/FilmHeader'
import { Indicator } from 'mint-ui'
Vue.filter('imgpath', function (path) {
  return path.replace('w.h', '128.180')
})
export default {
  data () {
    return {
      slidelist: [],
      isFixed: false
    }
  },
  components: {
    swiper,
    filmHeader
  },
  mounted () {
    Indicator.open({
    text: '加载中...',
    spinnerType: 'fading-circle'
     })
    this.$http
      .get(
        '/ajax/moreComingList?ci=65&token=&limit=10&movieIds=1301478%2C1301774%2C1241385%2C1233290%2C1294417%2C1197077%2C1222268%2C1218142%2C1218188%2C343130&optimus_uuid=871662008E8F11EABD404FB7D12C7F333E8E3230684C4125ACDEFA519A860A10&optimus_risk_level=71&optimus_code=10'
      )
      .then(res => {
        console.log(res.data)
        this.slidelist = res.data.coming.slice(5)
        Indicator.close();
      })
    window.onscroll = this.handleScroll
  },
  beforeDestroy () {
    window.onscroll = null
  },
  methods: {
    handleScroll () {
      if (document.documentElement.scrollTop >= this.$refs.slidepic.$el.offsetHeight) {
        // console.log('fixed')
        this.isFixed = true
      } else {
        // console.log('unfixed')
        this.isFixed = false
      }
    }
  }
}
</script>

