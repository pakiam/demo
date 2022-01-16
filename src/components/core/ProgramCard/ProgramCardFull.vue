<template>
  <div class="b-program-card">
    <v-card>
      <v-img
        :src="program.img"
        class="white--text align-end"
        gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
        height="400px"
      >
        <v-card-title v-text="program.frontName" />
      </v-img>
      <template>
        <v-card-text class="text--primary" data-test="program-description">
          {{ program.description }}
        </v-card-text>
      </template>
      <v-divider class="mx-4" />
      <v-card-actions>
        <v-row align="center">
          <v-col
            cols="12"
            align="end"
          >
            <v-btn
              color="primary"
              data-test="program-item-full-to-cart"
              @click="isProgramInCart ? onRemoveFromCart(program) : onAddToCart(program)"
            >
              {{ isProgramInCart ? 'Убрать' : 'В корзину' }}
            </v-btn>
          </v-col>
        </v-row>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
import useCartFunctions from '@/hooks/useCartFunctions'

export default {
  name: 'ProgramCardFull',
  setup (props) {
    const { onRemoveFromCart, onAddToCart, isInCart } = useCartFunctions(props)

    return {
      onRemoveFromCart,
      onAddToCart,
      isProgramInCart: isInCart,
    }
  },
  props: {
    /**
     * @description
     * @param {Image} img
     * @param {String} frontName
     */
    program: {
      type: Object,
      required: true,
    },
  },
}
</script>

<style></style>
