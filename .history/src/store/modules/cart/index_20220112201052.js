import actions from './actions'
import getters from './getters'
import mutations from './mutations'

const state = {
  cart: window.localStorage.getItem('cart') ? JSON.parse(window.localStorage.getItem('cart')) : [],
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
}
