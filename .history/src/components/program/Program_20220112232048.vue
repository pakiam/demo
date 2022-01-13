<template>
  <PopupRouterView :label="program.name">
    <PopupOverlay slot="backdrop" />
    <v-container fluid>
      <v-row align="center" dense justify="center">
        <v-col cols="10">
          <div class="b-program">
            <v-card>
              <v-img
                class="white--text align-end"
                height="400px"
                :src="program.img"
              >
                <v-card-title> {{ program.frontName }} </v-card-title>
              </v-img>

              <v-card-subtitle class="pb-0"> Number 10 </v-card-subtitle>

              <v-card-text class="text--primary">
                <div>Whitehaven Beach</div>

                <div>Whitsunday Island, Whitsunday Islands</div>
              </v-card-text>

              <v-card-actions>
                <v-btn color="orange" text> Share </v-btn>

                <v-btn color="orange" text> Explore </v-btn>
              </v-card-actions>
            </v-card>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </PopupRouterView>
</template>

<script>
import PopupOverlay from '../core/Popup/PopupOverlay.vue'
import PopupRouterView from '../core/Popup/PopupRouterView.vue'

export default {
  name: 'Program',
  components: {
    PopupOverlay,
    PopupRouterView,
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
  // TODO: on refresh page get list of programs from API
  // created () {
  //   if (!this.program) {
  //     this.innerProgram =
  //   }
  // },
}
</script>
