<template>
  <div class="b-program-card">
    <template v-if="type === 'full'" />
    <template v-else-if="type === 'cart'" />
    <template v-else />
    <v-card>
      <v-img
        :src="program.img"
        class="white--text align-end"
        gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
        :height="isFull ? '400px' : '200px'"
      >
        <v-card-title v-text="program.frontName" />
      </v-img>
      <template v-if="isFull">
        <v-card-text class="text--primary">
          {{ program.description }}
        </v-card-text>
      </template>
      <v-divider class="mx-4" />
      <v-card-actions>
        <v-row justify="space-between">
          <v-col
            :cols="isFull ? 12 : 6"
            :align="isFull ? 'end' : 'center'"
          >
            <v-btn
              color="primary"
              @click="onCartClick(program)"
            >
              {{ isProgramInCart ? 'Убрать' : 'В корзину' }}
            </v-btn>
          </v-col>
          <v-col
            v-if="!isFull"
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
/**
 * TODO: refac this
 * mb slots ??
 */
export default {
  name: 'ProgramCard',
  props: {
    /**
     * @description
     * img
     * frontName
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
