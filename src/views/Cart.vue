<template>
  <div class="page-cart">
    <v-container v-if="items.length">
      <v-row>
        <v-col
          cols="12"
          align="end"
        >
          <v-btn
            color="primary"
            @click="onCleanCart"
          >
            Очистить корзину
          </v-btn>
        </v-col>
      </v-row>
      <v-row>
        <v-col
          v-for="item in items"
          :key="item.id"
          cols="12"
          sm="6"
          md="4"
        >
          <ProgramCardCart
            :program="item"
            @onRemoveFromCart="onRemoveFromCart"
          />
        </v-col>
      </v-row>
      <v-divider class="my-4" />
      <v-row>
        <v-col cols="12">
          Итого: {{ cartPrice }}&nbsp;₽
        </v-col>
      </v-row>
    </v-container>
    <v-container v-else>
      Cart is empty. Go to
      <router-link :to="{ name: 'Shop' }">
        Shop
      </router-link>
    </v-container>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

import ProgramCardCart from '../components/core/ProgramCard/ProgramCardCart.vue'

export default {
  name: 'PageCart',
  components: {
    ProgramCardCart,
  },
  computed: {
    ...mapGetters({
      items: 'cart/cart',
      cartPrice: 'cart/totalPrice',
    }),
  },
  methods: {
    ...mapActions({
      cleanCart: 'cart/clean',
      removeFromCart: 'cart/remove',
    }),
    onCleanCart () {
      this.cleanCart()
    },
    onRemoveFromCart (item) {
      this.removeFromCart(item)
    },
  },
}
</script>

<style lang="scss"></style>
