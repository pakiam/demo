export default {
  totalItems: (state) => {
    return state.cart.length || null
  },
  totalPrice: (state) => {
    return state.cart.reduce((sum, item) => (sum += item.price), 0) || null
  },
}
