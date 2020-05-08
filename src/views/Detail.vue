<template>
    <!-- v-if可以防止空对象渲染 null.name -->
  <div v-if="filmInfo" class="film-info">
      <img :src="filmInfo.poster" class="poster" />
      <div class="film-detail">
          <div class="col">
          <div class="film-name">
            <span>{{filmInfo.name}}</span>
            <span class="item-name">{{filmInfo.item.name}}</span>
          </div>
          <div class="film-grade">
            <span class="grade">{{filmInfo.grade}}</span>
            <span class="grade-text">分</span>
          </div>
          </div>
        <div class="grey-text filmInfo-category">{{filmInfo.category}}</div>
        <div class="grey-text filmInfo-premier-time">{{filmInfo.premiereAt | dateformat}}上映</div>
        <div class="grey-text filmInfo-nation-runtime">{{filmInfo.nation}} | {{filmInfo.runtime}}</div>
        <div class="grey-text hidden">{{filmInfo.synopsis}}</div>
      </div>
      <div class="actorlist">
        <div class="text">演职人员</div>
        <swiper preview="4" class="actorswiper" myClassName="actorswiper">
          <div class="swiper-slide" v-for="data in filmInfo.actors" :key="data.name">
            <img :src="data.avatarAddress" />
            <div>{{data.name}}</div>
          </div>
        </swiper>
      </div>
      <div class="picture">
        <div class="text">剧照</div>
        <swiper preview="3" class="photoswiper" myClassName="photoswiper">
          <div class="swiper-slide" v-for="(data, index) in filmInfo.photos" :key="index">
            <img :src="data" class="photoimg"/>
          </div>
        </swiper>
      </div>
  </div>
</template>

<script>
import Vue from 'vue'
import swiper from './film/detail/DetailSwiper'
import { HIDE_TABBAR_MUTATION, SHOW_TABBAR_MUTATION } from '../type'
Vue.filter('dateformat', function (date) {
  const dt = new Date(date * 1000)
  const y = dt.getFullYear()
  const m = (dt.getMonth() + 1 + '').padStart(2, '0')
  const d = (dt.getDate() + '').padStart(2, '0')
  return `${y}-${m}-${d}`
})
export default {
  data () {
    return {
      filmInfo: null
    }
  },
  props: ['id'],
  beforeMount () {
    this.$store.commit(HIDE_TABBAR_MUTATION, false)
  },
  mounted () {
    // console.log(this.$route.params.id)
    this.$http({
      url: '/gateway?filmId=4487&k=4517929',
      headers: {
        'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.0.4","e":"15886737532641404887998"}',
        'X-Host': 'mall.film-ticket.film.info'
      }
    })
      .then(res => {
        this.filmInfo = res.data.data.film
      })
  },
  beforeDestroy () {
    this.$store.commit(SHOW_TABBAR_MUTATION, true)
  },
  components: {
    swiper
  }
}
</script>

<style lang="scss" scoped>
.film-info {
  background: #eee;
}
.poster {
    width: 100%;
}
.picture {
  margin-top: 12px;
  background-color: #fff;
}
.text {
    height: 50px;
    line-height: 50px;
  }
.film-name {
    span {
        vertical-align: middle;
    }
    .item-name {
        display: inline-block;
        background-color: #d2d6dc;
        color: #fff;
        width: 16px;
        height: 16px;
        font-size: 12px;
        border-bottom: 2px;
        margin: 0 5px;
    }
}
.col {
    display: flex;
    justify-content: space-between;
    .film-grade {
        color: #ffb232;
        .grade {
          font-size: 14px;
          font-style: italic;
          margin-right: 3px;
        }
        .grade-text {
          font-size: 10px;
        }
    }
}
.grey-text {
    color: grey;
    font-size: 14px;
}
.film-detail {
    padding: 0 10px 12px;
    margin-bottom: 12px;
    background-color: #fff;
}
.actorlist {
  background-color: #fff;
}
.hidden {
    height: 35px!important;
    overflow: hidden;
    margin-top: 12px;
}
.filmInfo-category {
    margin-top: 4px;
}
.filmInfo-premier-time {
    margin-top: 4px;
}
.filmInfo-nation-runtime {
    margin-top: 4px;
}
</style>
