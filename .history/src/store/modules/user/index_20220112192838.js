import actions from './actions'
import getters from './getters'
import mutatios from './mutatios'

const state = {
  user: null,
}

export default {
  namespaced: true,
  state,
  mutatios,
  actions,
  getters,
}
