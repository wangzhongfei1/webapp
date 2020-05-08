<template>
  <div>
    <mt-index-list ref="mylist">
      <mt-index-section :index="data.index" v-for="data in datalist" :key="data.index">
          <div  v-for="city in data.list" :key="city.cityId" @click="handleClick(city.cityId, city.name)">
              <mt-cell :title="city.name"></mt-cell>
          </div>
      </mt-index-section>
    </mt-index-list>
  </div>
</template>

<script>
export default {
    data() {
        return {
            datalist: []
        }
    },
    mounted() {
        // console.log(this.$refs.mylist)
        this.$refs.mylist.$el.style.height = document.documentElement.clientHeight - 50 + 'px'

        this.$http({
            url: 'https://m.maizuo.com/gateway?k=4643312',
            headers: {
                'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.0.4","e":"15886737532641404887998","bc":"110100"}',
                'X-Host': 'mall.film-ticket.city.list'
            }
        }).then(res => {
            // console.log(res.data)
            this.datalist = this.handleCity(res.data.data.cities)
        })
    },
    methods: {
        // 拿到a-z首字母开头的城市列表
        handleCity(datalist) {
            // console.log(datalist)
            var letterArr = []
            // String.fromCharCode中65-90对应a-z字母
            for(var i = 65; i < 91; i++) {
                letterArr.push(String.fromCharCode(i))
            }
            console.log(letterArr)
            // 再遍历letterArr匹配对应的城市
            var newArr = []
            for(var j = 0; j < letterArr.length; j++) {
                var arr = datalist.filter(item => item.pinyin.substring(0, 1) === letterArr[j].toLowerCase())
                // console.log(arr)
                // 如果不是空数组
                if(arr.length > 0) {
                    newArr.push({
                        index: letterArr[j],
                        list: arr
                    })
                }
            }
            console.log(newArr)
            return newArr
        },
        // 点击不同城市切换相应的影院
        handleClick(id,name) {
            localStorage.setItem('cityId', id)
            localStorage.setItem('cityName', name)
            this.$router.push('/cinema')
        }
    }
}
</script>