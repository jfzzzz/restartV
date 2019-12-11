import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    isCollapse: false,
    //header 消息中心提示小红点
    is_dot: false,
  },
  mutations: {
    changeCollaspe (state) {
      state.isCollapse = !state.isCollapse
    }
  }
})

// store.commit('increment')




export default store
