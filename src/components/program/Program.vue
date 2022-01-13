<template>
  <PopupRouterView :label="program.frontName">
    <PopupOverlay slot="backdrop" />
    <v-container fluid>
      <v-row align="center" dense justify="center">
        <v-col cols="10">
          <div class="b-program">
            <ProgramCard
              :program="program"
              :isInCart="isItemInCart(program)"
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
import { mapActions, mapGetters } from 'vuex'

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
  },
  data () {
    return {
      innerProgram: null,
    }
  },
  computed: {
    ...mapGetters({
      isItemInCart: 'cart/isItemIn',
    }),
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
  },
  // TODO: on refresh page get list of programs from API
  // created () {
  //   if (!this.program) {
  //     this.innerProgram =
  //   }
  // },
}
</script>
