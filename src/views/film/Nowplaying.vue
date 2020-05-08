<template>
  <div>
    <ul
    v-infinite-scroll="loadMore"
  infinite-scroll-disabled="loading"
  infinite-scroll-distance="0"
  infinite-scroll-immediate-check=false
    >
      <li v-for="(data, index) in datalist" :key="data.id + index" @click="handleChangePage(data.id)">
        <div><img :src="data.img | imgpath" /></div>
        <div class="content">
          <div class="filmName">{{data.nm}}</div>
          <p class="filmScore">观众评分： <span>{{Math.floor(Math.random() * 10 + 1)}}</span> 分</p>
          <p class="filmactor line-ellipsis">主演：{{data.star}}</p>
          <p>中国大陆 | 100分钟</p>
        </div>
      </li>
    </ul>
    <div v-show="isShow" class="loading">正在加载中...</div>
  </div>
</template>

<script>
import Vue from 'vue'
import { InfiniteScroll } from 'mint-ui'
Vue.use(InfiniteScroll)
Vue.filter('imgpath', function (path) {
  return path.replace('w.h', '128.180')
})
export default {
  data () {
    return {
      datalist: [],
      loading: false,
      isShow: false
    }
  },
  mounted () {
    this.$http
      .get(
        '/ajax/moreComingList?ci=10&token=&limit=10&movieIds=1241385%2C1233290%2C1294417%2C1197077%2C1222268%2C1218142%2C1218188%2C343130%2C1250661%2C1219866&optimus_uuid=D0EC4EA08F7311EA92D7A7093D0AD1C8AE82D8886EA7478AA5B7AB23C8A9C2AC&optimus_risk_level=71&optimus_code=10'
      )
      .then(res => {
        console.log(res.data)
        this.datalist = res.data.coming
      })
  },
  methods: {
    handleChangePage (id) {
      // this.$router.push(`/detail/${id}`)
      this.$router.push({ name: 'wangdetail', params: { id: id } })
    },
    loadMore () {
      console.log('到底了')
      this.loading = true // 禁用
      this.isShow = true
      if (this.datalist.length === 20) {
        this.isShow = false
        return
      }
      this.$http
        .get(
          '/ajax/moreComingList?ci=10&token=&limit=10&movieIds=344450%2C346210%2C1216053%2C1298938%2C1199007%2C489894%2C1230199%2C342178%2C1213079%2C1301444&optimus_uuid=D0EC4EA08F7311EA92D7A7093D0AD1C8AE82D8886EA7478AA5B7AB23C8A9C2AC&optimus_risk_level=71&optimus_code=10'
        )
        .then(res => {
          this.datalist = [...this.datalist, ...res.data.coming]
          this.loading = false // 开启
        })
    }
  }
}
</script>

<style lang="scss" scoped>
ul {
  li {
    overflow: hidden;
    color: #666;
    padding: 12px 15px;
    img {
      float: left;
      width: 64px;
    }
    .content {
      margin-left: 74px;
      font-size: 14px;
        .filmName {
        color: #333;
        font-weight: 700;
        font-size: 17px;
        margin-bottom: 5px;
        }
        .filmScore {
          height: 22px;
          span {
            color: #ffb232;
          }
        }
        .filmactor {
          height: 22px;
        }
    }

  }
}
.loading {
  margin-bottom: 50px;
  text-align: center;
}
.line-ellipsis {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>
