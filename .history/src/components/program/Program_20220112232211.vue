<template>
  <PopupRouterView :label="program.frontName">
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

              <v-card-text class="text--primary">
                {{ program.description }}
              </v-card-text>

              <v-card-actions>
                <!-- TODO: make buttons -->
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
