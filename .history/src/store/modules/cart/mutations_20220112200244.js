export default {
  ADD_TO_CART (state, data) {
    state.cart.push(data)
    window.localStorage.setItem('cart', JSON.stringify(state.cart))
  },
  REMOVE_FROM_CART (state, data) {
    // state.cart.push(data)
    // window.localStorage.setItem('cart', JSON.stringify(state.cart))
  },
  CLEAN_CART (state) {
    state.cart = null
    window.localStorage.clear('cart')
  },
}
