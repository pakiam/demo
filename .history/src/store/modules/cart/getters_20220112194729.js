export default {
  totalItems: (state) => {
    return state.cart.length
  },
  totalPrice: (state) => {
    return state.cart.reduce((sum, item) => (sum += item.price), 0)
  },
}
