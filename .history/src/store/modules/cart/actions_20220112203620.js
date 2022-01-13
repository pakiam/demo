export default {
  add: async ({ commit }, item) => {
    commit('ADD_TO_CART', item)
  },
  remove: async ({ commit }, item) => {
    commit('REMOVE_FROM_CART', item)
  },
  clean: async ({ commit }) => {
    commit('CLEAN_CART')
  },
}
