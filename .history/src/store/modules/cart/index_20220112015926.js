import actions from './actions'
import getters from './getters'
import mutatios from './mutatios'

const state = {
  programs: null
}

export default {
  namespaced: true,
  state,
  mutatios,
  actions,
  getters
}
