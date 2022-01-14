<template>
<div class="page-program">
  <PopupRouterView label="program-page">
    <PopupOverlay slot="backdrop" />
    <v-container v-if="innerProgram" fluid>
      <v-row align="center" dense justify="center">
        <v-col cols="10">
          <div class="b-program">
            <ProgramCardFull
              :program="innerProgram"
              :isItemInCart="innerIsItemInCart"
              @onAddToCart="onAddToCart"
              @onRemoveFromCart="onRemoveFromCart"
            />
          </div>
        </v-col>
      </v-row>
    </v-container>
  </PopupRouterView>
</div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

import ProgramCardFull from '../components/core/ProgramCard/ProgramCardFull.vue'
import PopupOverlay from '../components/core/Popup/PopupOverlay.vue'
import PopupRouterView from '../components/core/Popup/PopupRouterView.vue'

export default {
  name: 'PageProgram',
  props: {
    program: {
      type: Object,
    },
    isItemInCart: {
      type: Boolean,
      default: false,
    },
  },
  components: {
    ProgramCardFull,
    PopupOverlay,
    PopupRouterView,
  },
  data () {
    return {
      innerProgram: null,
      innerIsItemInCart: null,
    }
  },
  computed: {
    ...mapGetters({
      checkIsItemInCart: 'cart/isItemIn',
    }),
  },
  methods: {
    ...mapActions({
      getProgramById: 'programs/getProgramById',
      addToCart: 'cart/add',
      removeFromCart: 'cart/remove',
    }),
    onAddToCart (program) {
      this.addToCart(program)
      this.innerIsItemInCart = this.checkIsItemInCart(this.innerProgram)
      this.$nextTick(() => {
        this.innerIsItemInCart = this.checkIsItemInCart(this.innerProgram)
      })
    },
    onRemoveFromCart (program) {
      this.removeFromCart(program)
      this.$nextTick(() => {
        this.innerIsItemInCart = this.checkIsItemInCart(this.innerProgram)
      })
    },
  },
  async mounted () {
    if (!this.program) {
      try {
        const response = await this.getProgramById(this.$route.params.id)
        console.log('123', response)
        this.innerProgram = response
        this.innerIsItemInCart = this.checkIsItemInCart(this.innerProgram)
      } catch (error) {
      } finally {
      }
    } else {
      this.innerProgram = this.program
      this.innerIsItemInCart = this.isItemInCart
    }
  },
}
</script>
