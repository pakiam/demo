<template>
  <PopupRouterView :label="program.frontName">
    <PopupOverlay slot="backdrop" />
    <v-container fluid>
      <v-row align="center" dense justify="center">
        <v-col cols="10">
          <div class="b-program">
            <ProgramCard :program="program" :isInCart="isInCart" :showDescription="true" />
          </div>
        </v-col>
      </v-row>
    </v-container>
  </PopupRouterView>
</template>

<script>
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
  // TODO: on refresh page get list of programs from API
  // created () {
  //   if (!this.program) {
  //     this.innerProgram =
  //   }
  // },
}
</script>
