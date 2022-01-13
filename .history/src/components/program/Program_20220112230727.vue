<template>
  <PopupRouterView :label="product.name">
    <PopupOverlay slot="backdrop" />
    <v-container fluid>
      <v-row align="center" dense>
        <v-col cols="10">
          <div class="b-program">
            <v-card class="mx-auto" max-width="800">
              <v-img
                class="white--text align-end"
                height="400px"
                src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
              >
                <v-card-title>Top 10 Australian beaches</v-card-title>
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
  name: 'ProductImagePopup',
  components: {
    PopupOverlay,
    PopupRouterView,
  },
  data () {
    return {
      product: {},
    }
  },
  created () {
    // Usually you would fetch the product from an API.
    this.product = {
      name: 'Fancy Product',
      img: {
        src: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2789&q=80',
        description: 'Simple white watch on white background.',
      },
    }
  },
}
</script>
