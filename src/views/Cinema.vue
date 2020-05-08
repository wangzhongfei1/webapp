<template>
<div>
    <div class="header">
            <div class="city" @click="handleCity"><span>{{this.cityName}}</span><span class="iconfont icon-zhankai"></span></div>
            <div class="title">影院</div>
            <div class="search">
                <span class="iconfont icon-sousuo"></span>
            </div>
        </div>
    <div class="scrollCinema" :style="mystyle">
        <ul>
            <li v-for="data in cinemaList" :key="data.cinemaId">
                {{data.name}}
                <p class="cinemaAddress">{{data.address}}</p>
            </li>
        </ul>
    </div>
</div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
  data () {
    return {
        cinemaList: [],
        mystyle: {
            height: '0px'
        },
        cityName: ''
    }
  },
  mounted () {
    // console.log(document.documentElement.clientHeight)
      this.mystyle.height = document.documentElement.clientHeight - 50 + 'px'
      var cityId = localStorage.getItem('cityId')
      this.cityName = localStorage.getItem('cityName')
    this.$http({
        url: `/gateway?cityId=${cityId}&ticketFlag=1&k=8662862`,
        headers: {
            'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.0.4","e":"15886737532641404887998","bc":"110100"}',
            'X-Host': 'mall.film-ticket.cinema.list'
        }
    })
      .then((res) => {
        console.log(res.data.data)
        this.cinemaList = res.data.data.cinemas
        this.$nextTick(() => {
            var myscroll = new BScroll('.scrollCinema', {
                scrollbar: {
                    fade: true,
                    interactive: false
                },
            })
        })
      })
  },
  methods: {
      handleCity() {
          this.$router.push('/city')
      }
  }
}
</script>

<style lang="scss" scoped>
li {
    height: 80px;
}
.scrollCinema {
    overflow: hidden;
    position: relative;
}
.cinemaAddress {
    font-size: 12px;
}
.header {
    position:fixed;
    box-sizing: border-box;
    width: 100%;
    height: 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #fff;
    z-index: 333;
    padding: 0 10px;
}
</style>