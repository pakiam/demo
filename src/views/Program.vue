<template>
  <div class="page-program">
    <PopupRouterView label="program-page">
      <PopupOverlay slot="backdrop" />
      <v-container fluid>
        <v-row
          align="center"
          dense
          justify="center"
        >
          <v-col cols="10">
            <div
              v-if="innerProgram"
              class="page-program__program"
            >
              <ProgramCardFull
                :program="innerProgram"
              />
            </div>
            <div
              v-else
              class="page-program__loader"
            >
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
  components: {
    ProgramCardFull,
    PopupOverlay,
    PopupRouterView,
  },
  props: {
    program: {
      type: Object,
    },
  },
  data () {
    return {
      innerProgram: null,
    }
  },
  computed: {
    ...mapGetters({
      checkIsItemInCart: 'cart/isItemIn',
    }),
  },
  async mounted () {
    if (!this.program) {
      try {
        const response = await this.getProgramById(this.$route.params.id)
        this.innerProgram = response
      } catch (error) {
        console.log('Program mounted', error)
      } finally {
      }
    } else {
      this.innerProgram = this.program
    }
  },
  methods: {
    ...mapActions({
      getProgramById: 'programs/getProgramById',
    }),
  },
}
</script>

<style lang="scss">
.page-program__loader {
  background-color: #fff;
  width: 100%;
  height: 100%;
}
</style>
