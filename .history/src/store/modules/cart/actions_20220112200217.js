export default {
  addToCart: async ({ commit }, item) => {
    commit('ADD_TO_CART', item)
  },
  removeFromCart: async ({ commit }, item) => {
    commit('REMOVE_FROM_CART', item)
  },
  cleanAllCart: async ({ commit }) => {
    commit('CLEAN_CART')
  },
}
