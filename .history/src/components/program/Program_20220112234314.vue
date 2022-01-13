<template>
  <PopupRouterView :label="program.frontName">
    <PopupOverlay slot="backdrop" />
    <v-container fluid>
      <v-row align="center" dense justify="center">
        <v-col cols="10">
          <div class="b-program">
            <ProgramCard
              :program="program"
              :isInCart="isInCart"
              :isFull="true"
              @onAddToCart="onAddToCart"
              @onRemoveFromCart="onRemoveFromCart"
            />
          </div>
        </v-col>
      </v-row>
    </v-container>
  </PopupRouterView>
</template>

<script>
import { mapActions } from 'vuex'

import ProgramCard from '../programs/ProgramCard'
import PopupOverlay from '../core/Popup/PopupOverlay.vue'
import PopupRouterView from '../core/Popup/PopupRouterView.vue'

export default {
  name: 'Program',
  components: {
    PopupOverlay,
    PopupRouterView,
    ProgramCard,
  },
  props: {
    program: {
      type: Object,
      required: true,
    },
    isInCart: {
      type: Boolean,
      default: false,
    },
  },
  data () {
    return {
      innerProgram: null,
    }
  },
  methods: {
    ...mapActions({
      addToCart: 'cart/add',
      removeFromCart: 'cart/remove',
    }),
    onAddToCart (item) {
      // this.$emit('onAddCart', item)
      this.addToCart(item)
    },
    onRemoveFromCart (item) {
      this.removeFromCart(item)
    },
  }
  // TODO: on refresh page get list of programs from API
  // created () {
  //   if (!this.program) {
  //     this.innerProgram =
  //   }
  // },
}
</script>
