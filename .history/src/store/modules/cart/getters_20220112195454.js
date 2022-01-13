export default {
  totalItems: (state) => {
    return state.cart ? state.cart.length : null
  },
  totalPrice: (state) => {
    return state.cart ? state.cart.reduce((sum, item) => (sum += item.price), 0) : null
  },
}