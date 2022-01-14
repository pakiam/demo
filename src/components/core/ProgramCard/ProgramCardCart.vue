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
            cols="12"
            align="end"
          >
            <v-btn
              color="primary"
              @click="onRemoveFromCart"
            >
              {{ 'Убрать' }}
            </v-btn>
          </v-col>
        </v-row>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
import useCartFunctions from '@/hooks/useCartFunctions'

export default {
  name: 'ProgramCardCart',
  setup (props) {
    const { onRemoveFromCart } = useCartFunctions(props)

    return {
      onRemoveFromCart,
    }
  },
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
  },
}
</script>

<style></style>
