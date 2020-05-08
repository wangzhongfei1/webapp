import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import { SHOW_TABBAR_MUTATION, HIDE_TABBAR_MUTATION } from '../type'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // 显示隐藏详情页的tabbar
    isTabbarShow: true,
    // 即将上映列表
    comingList: []
  },
  mutations: {
    [SHOW_TABBAR_MUTATION] (state, data) {
      state.isTabbarShow = data
    },
    [HIDE_TABBAR_MUTATION] (state, data) {
      state.isTabbarShow = data
    },
    comingListMutation (state, data) {
      state.comingList = data
    }
  },
  actions: {
    getcomingListAction (store) {
      axios('/ajax/moreComingList?ci=10&token=&limit=10&movieIds=1241385%2C1233290%2C1294417%2C1197077%2C1222268%2C1218142%2C1218188%2C343130%2C1250661%2C1219866&optimus_uuid=D0EC4EA08F7311EA92D7A7093D0AD1C8AE82D8886EA7478AA5B7AB23C8A9C2AC&optimus_risk_level=71&optimus_code=10').then(res => {
        store.commit('comingListMutation', res.data.coming)
      })
    }
  },
  modules: {
  }
})
