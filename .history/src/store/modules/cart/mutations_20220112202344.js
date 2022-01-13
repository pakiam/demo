import Vue from 'vue'

export default {
  ADD_TO_CART (state, data) {
    state.cart.push(data)
    window.localStorage.setItem('cart', JSON.stringify(state.cart))
  },
  REMOVE_FROM_CART (state, data) {
    state.cart.filter(item => item.id !== data.id)
    window.localStorage.setItem('cart', JSON.stringify(state.cart))
  },
  CLEAN_CART (state) {
    Vue.set(state.cart, [])
    window.localStorage.clear('cart')
  },
}
