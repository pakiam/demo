export default {
  addToCart: async ({ commit }, item) => {
    commit('cart/ADD_TO_CART', item)
  },
  removeFromCart: async ({ commit }, item) => {
    commit('cart/REMOVE_FROM_CART', item)
  },
  cleanAllCart: async ({ commit }) => {
    commit('cart/CLEAN_CART')
  },
}
