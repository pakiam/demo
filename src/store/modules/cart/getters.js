export default {
  isEmpty: (state) => {
    return !state.cart.length
  },
  totalCount: (state) => {
    return state.cart ? state.cart.length : null
  },
  totalPrice: (state) => {
    return state.cart
      ? state.cart.reduce((sum, item) => (sum += item.price), 0)
      : null
  },
  cart: (state) => {
    return state.cart
  },
  isItemIn: (state) => (i) => {
    return Boolean(state.cart.find((item) => item.id === i.id))
  },
}
