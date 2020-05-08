<template>
    <ul>
        <li v-for="data in comingList" :key="data.id">
            <div class="leftInfo">
                <img :src="data.img | imgpath" />
                <div class="content">
                    <div class="filmName">{{data.nm}}</div>
                    <p class="like"><span>{{data.wish}}</span>人想看</p>
                    <p class="filmactor line-ellipsis">主演：{{data.star}}</p>
                    <p> 2020-06 上映</p>
                </div>
            </div>
            <div class="rightButton">
            <button class="btn">想看</button>
            </div>
        </li>
    </ul>
</template>

<script>
import Vue from 'vue'

import { mapState } from 'vuex'
Vue.filter('imgpath', function (path) {
  return path.replace('w.h', '128.180')
})
export default {
    data () {
        return {}
    },
    mounted () {
        if(this.$store.state.comingList.length === 0) {
            //发送ajax请求
            this.$store.dispatch('getcomingListAction')
        } else {    
            // 使用缓冲数据
            console.log('使用缓存数据')
        }
    },
    computed: {
        ...mapState(['comingList'])
    }
}
</script>

<style lang="scss" scoped>
ul {
  li {
    overflow: hidden;
    padding: 12px;
    display: flex;
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
    .like {
        height: 22px;
        span {
            color: #faaf00;
            font-weight: 700;
        }
    }
    .filmactor {
        height: 22px;
    }
    }
    .leftInfo {
        flex: 4;
    }
    .rightButton {
        flex: 1;
        .btn {
            width: 50px;
            height: 30px;
            background-color: #faaf00;
            border: 0;
            color: #fff;
            margin-top: 20px;
            border-radius: 5px;
        }
    }
    
  }
}
</style>