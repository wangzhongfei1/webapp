<template>
  <div class="swiper-container">
    <div class="swiper-wrapper">
      <slot></slot>
    </div>
    <div class="swiper-pagination film-swiper-pagination"></div>
  </div>
</template>

<script>
import Swiper from 'swiper'
import 'swiper/css/swiper.min.css'
import Vue from 'vue'

export default {
  props: ['preview', 'myClassName'],
  mounted () {
    var swiper = new Swiper('.' + this.myClassName, {
      slidesPerView: this.preview,
      spaceBetween: this.myClassName === 'actorswiper' ? 20 : 10,
      freeMode: true
    })
    Vue.use({
      swiper
    })
  }
}
</script>

<style lang="scss" scoped>
.swiper-wrapper {
    .swiper-slide {
      width: 100%;
      height: 140px;
      img {
        width: 100%;
      }
    }
}
.photoimg {
  height: 66px;
}

</style>
