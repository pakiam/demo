<template>
  <div class="b-programs-list">
    <v-row dense>
      <v-col
        v-for="program in programs"
        :cols="columns"
        :key="program.id"
        class="b-programs-list__item"
      >
        <ProgramItem :program="program" @onAddToCart="onAddToCart" @onRemoveFromCart="onRemoveFromCart" :isInCart="isItemInCart(program)" />
      </v-col>
    </v-row>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import ProgramItem from './ProgramItem.vue'

export default {
  name: 'ProgramsList',
  props: {
    programs: {
      type: Array,
      required: true,
    },
    columns: {
      type: Number,
      default: 4,
    },
  },
  components: {
    ProgramItem,
  },
  methods: {
    ...mapActions({
      addToCart: 'cart/add',
      isItemInCart: 'cart/isItemIn',
      removeFromCart: 'cart/remove',
    }),
    onAddToCart (item) {
      // this.$emit('onAddCart', item)
      this.addToCart(item)
    },
    onRemoveFromCart (item) {
      this.removeFromCart(item)
    },
  },
}
</script>

<style lang="scss">
.b-programs-list {
  display: flex;
}
</style>
