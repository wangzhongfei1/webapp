<template>
  <div class="swiper-container filmswiper">
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
  mounted () {
    var swiper = new Swiper('.filmswiper', {
      loop: true,
      autoplay: {
        delay: 2000
      },
      pagination: {
        el: '.swiper-pagination'
      }
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
      height: 200px;
      img {
        width: 100%;
      }
    }
}
.film-swiper-pagination {
  text-align: right;
}
</style>
