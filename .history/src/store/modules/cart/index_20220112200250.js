import actions from './actions'
import getters from './getters'
import mutations from './mutations'

const state = {
  cart: null,
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
}
