export default {
  isEmpty: (state) => {
    return !state.cart.length
  },
  totalItems: (state) => {
    return state.cart ? state.cart.length : null
  },
  totalPrice: (state) => {
    return state.cart
      ? state.cart.reduce((sum, item) => (sum += item.price), 0)
      : null
  },
  isItemIn: (state) => (i) => {
    console.log(state.cart.includes((item) => item.id === i.id))
    return state.cart.includes((item) => item.id === i.id)
  },
}
