<template>
  <div class="b-program-card">
    <v-card>
      <v-img
        :src="program.img"
        class="white--text align-end"
        gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
        height="400px"
      >
        <v-card-title v-text="program.frontName" />
      </v-img>
      <template>
        <v-card-text class="text--primary">
          {{ program.description }}
        </v-card-text>
      </template>
      <v-divider class="mx-4" />
      <v-card-actions>
        <v-row align="center">
          <v-col
            cols="12"
            align="end"
          >
            <v-btn
              color="primary"
              @click="onCartClick(program)"
            >
              {{ isProgramInCart ? 'Убрать' : 'В корзину' }}
            </v-btn>
          </v-col>
        </v-row>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
export default {
  name: 'ProgramCardFull',
  props: {
    /**
     * @description
     * @param {Image} img
     * @param {String} frontName
     */
    program: {
      type: Object,
      required: true,
    },
    isProgramInCart: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    onCartClick (program) {
      if (this.isProgramInCart) {
        this.$emit('onRemoveFromCart', program)
      } else {
        this.$emit('onAddToCart', program)
      }
    },
    onOpen (program) {
      this.$emit('onOpen', program)
    },
  },
}
</script>

<style></style>
