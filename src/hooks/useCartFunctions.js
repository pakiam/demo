import store from '@/store'
import { computed, toRefs } from '@vue/composition-api'

export default function useCartFunctions (props) {
  const { program } = toRefs(props)
  const isInCart = computed(() => {
    return store.getters['cart/isItemIn'](program.value)
  })
  /**
   * @description Removes item from Cart
   * @param {Object} program
   */
  async function onRemoveFromCart () {
    console.log('onRemoveFromCart', program.value)
    await store.dispatch('cart/remove', program.value)
  }

  /**
   * @description Adds item from Cart
   * @param {Object} program
   */
  async function onAddToCart () {
    await store.dispatch('cart/add', program.value)
  }

  return {
    onRemoveFromCart,
    onAddToCart,
    isInCart,
  }
}
