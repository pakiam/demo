import Vue from 'vue'
import Vuex from 'vuex'
import cart from './modules/cart'
import programs from './modules/programs'
import categories from './modules/categories'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    cart,
    programs,
    categories,
  },
})
