<template>
<div>
    <div class="box">
        <div class="header">
            <div class="city" @click="handleCity"><span>{{this.cityName}}</span><span class="iconfont icon-zhankai"></span></div>
            <div class="title">影院</div>
            <div class="search">
                <span class="iconfont icon-sousuo"></span>
            </div>
        </div>
    </div>
    <div class="scrollCinema" :style="mystyle">
        <ul>
            <li v-for="data in cinemaList" :key="data.cinemaId">
                <div class="left">
                    <p class="cinemaName">{{data.name}}</p>
                <p class="cinemaAddress line-ellipsis">{{data.address}}</p>
                </div>
                <div class="right">
                    <p class="money">￥{{data.lowPrice/100}}起</p>
                <p class="distance">离我{{data.Distance.toFixed(2)}}km</p>
                </div>
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
            }
          })
          myscroll.use()
        })
      })
  },
  methods: {
    handleCity () {
      this.$router.push('/city')
    }
  }
}
</script>

<style lang="scss" scoped>
li {
    height: 80px;
    display: flex;
    padding: 15px;
    color: #797d82;
    .left {
        flex: 4;
        padding-right: 15px;
        .cinemaName {
            color: #191a1b;
        }
    }
    .right  {
        flex: 1;
        .distance {
            font-size: 12px;
            float: right;
        }
        .money {
            float: right;
            color: #e54847;
        }
    }
}
.scrollCinema {
    overflow: hidden;
    position: relative;
}
.cinemaAddress {
    font-size: 12px;
}
.box {
    position: relative;
    width: 100%;
    height: 50px;
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
.line-ellipsis {
//   white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>
