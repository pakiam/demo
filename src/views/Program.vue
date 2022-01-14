<template>
<div class="page-program">
  <PopupRouterView label="program-page">
    <PopupOverlay slot="backdrop" />
    <v-container fluid>
      <v-row align="center" dense justify="center">
        <v-col cols="10">
          <div v-if="innerProgram" class="page-program__program">
            <ProgramCardFull
              :program="innerProgram"
              :isProgramInCart="innerIsItemInCart"
              @onAddToCart="onAddToCart"
              @onRemoveFromCart="onRemoveFromCart"
            />
          </div>
          <div v-else class="page-program__loader">
            Loading...
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
    isProgramInCart: {
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
        this.innerProgram = response
        this.innerIsItemInCart = this.checkIsItemInCart(this.innerProgram)
      } catch (error) {
        console.log('Program mounted', error)
      } finally {
      }
    } else {
      this.innerProgram = this.program
      this.innerIsItemInCart = this.isProgramInCart
    }
  },
}
</script>

<style lang="scss">
.page-program__loader{
  background-color: #fff;
  width: 100%;
  height: 100%;
}
</style>
