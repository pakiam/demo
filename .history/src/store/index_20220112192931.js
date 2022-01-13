import Vue from 'vue'
import Vuex from 'vuex'
import user from './modules/user'
import cart from './modules/cart'
import programs from './modules/programs'
import categories from './modules/categories'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    user,
    cart,
    programs,
    categories,
  },
})
