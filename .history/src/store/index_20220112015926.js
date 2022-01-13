import Vue from 'vue'
import Vuex from 'vuex'
import cart from './modules/cart'
import programs from './modules/programs'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    cart,
    programs
  }
})
