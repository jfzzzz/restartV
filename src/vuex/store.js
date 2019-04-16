import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    isCollapse: false
  },
  mutations: {
    changeCollaspe (state) {
      state.isCollapse = !state.isCollapse
    }
  }
})

// store.commit('increment')




export default store
