<template>
  <div>
    <router-view></router-view>
    <tabbar v-show="$store.state.isTabbarShow"></tabbar>
  </div>
</template>

<script>
import tabbar from './components/Tabbar'
import { mapState } from 'vuex'
export default {
  data () {
    return {}
  },
  methods: {},
  components: {
    tabbar
  },
  computed: {
    ...mapState(['isTabbarShow'])
  }
}
</script>

<style lang="scss">
*{
  margin: 0;
  padding: 0;
}
html{
  height: 100%;
}
li{
  list-style: none;
}
</style>
