<template>
  <div class="b-programs-list">
    <v-row dense>
      <v-col
        v-for="program in programs"
        :cols="columns"
        :key="program.id"
        class="b-programs-list__item"
      >
        <ProgramItem
          :program="program"
          :isInCart="isItemInCart(program)"
          @onAddToCart="onAddToCart"
          @onRemoveFromCart="onRemoveFromCart"
          @onOpen="onOpenProgram"
        />
      </v-col>
    </v-row>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
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
  computed: {
    ...mapGetters({
      isItemInCart: 'cart/isItemIn',
    }),
  },
  methods: {
    ...mapActions({
      addToCart: 'cart/add',
      removeFromCart: 'cart/remove',
    }),
    onAddToCart (item) {
      // this.$emit('onAddCart', item)
      this.addToCart(item)
    },
    onRemoveFromCart (item) {
      this.removeFromCart(item)
    },
    onOpenProgram (item) {
      this.$router.push({ name: 'Program', params: { id: item.id, program: item } })
    },
  },
}
</script>

<style lang="scss">
.b-programs-list {
  display: flex;
}
</style>
