<template>
  <div class="b-program-card">
    <v-card>
      <v-img
        :src="program.img"
        class="white--text align-end"
        gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
        height="200px"
      >
        <v-card-title v-text="program.frontName" />
      </v-img>
      <v-divider class="mx-4" />
      <v-card-actions>
        <v-row justify="space-between">
          <v-col
            cols="6"
            align="center"
          >
            <v-btn
              color="primary"
              @click="onCartClick(program)"
            >
              {{ isProgramInCart ? 'Убрать' : 'В корзину' }}
            </v-btn>
          </v-col>
          <v-col
            cols="6"
            align="center"
          >
            <v-btn
              color="deep-purple lighten-2"
              text
              @click="onOpen(program)"
            >
              Подробнее
            </v-btn>
          </v-col>
        </v-row>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
export default {
  name: 'ProgramCardDefault',
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
    type: {
      type: String,
      default: 'default',
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
