<template>
  <div class="b-program-card">
    <v-card>
      <v-img
        :src="program.img"
        class="white--text align-end"
        gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
        height="200px"
      >
        <v-card-title v-text="program.frontName" />
      </v-img>
      <v-divider class="mx-4" />
      <v-card-actions>
        <v-row justify="space-between">
          <v-col cols="6" align="center">
            <v-btn
              color="primary"
              data-test="program-item-to-cart"
              @click="isProgramInCart ? onRemoveFromCart() : onAddToCart()"
            >
              {{ isProgramInCart ? 'Убрать' : 'В корзину' }}
            </v-btn>
          </v-col>
          <v-col cols="6" align="center">
            <v-btn
              color="deep-purple lighten-2"
              data-test="program-item-link-to-page"
              text
              :to="{
                name: 'Program',
                params: {
                  id: program.id,
                  program: program,
                },
              }"
            >
              Подробнее
            </v-btn>
          </v-col>
        </v-row>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
import useProgramFunctions from '@/hooks/useProgramFunctions'
import useCartFunctions from '@/hooks/useCartFunctions'

export default {
  name: 'ProgramCardDefault',
  setup (props) {
    const { onOpen } = useProgramFunctions(props)
    const { onRemoveFromCart, onAddToCart, isInCart } = useCartFunctions(props)

    return {
      onRemoveFromCart,
      onAddToCart,
      isProgramInCart: isInCart,
      onOpen,
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
