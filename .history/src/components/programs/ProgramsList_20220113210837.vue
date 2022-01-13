<template>
  <div class="b-programs-list">
    <v-row v-if="programs.length" dense>
      <v-col
        v-for="program in programs"
        :cols="columns"
        :key="program.id"
        class="b-programs-list__item"
      >
        <ProgramCard
          :program="program"
          :isInCart="isItemInCart(program)"
          @onAddToCart="onAddToCart"
          @onRemoveFromCart="onRemoveFromCart"
          @onOpen="onOpenProgram"
        />
      </v-col>
    </v-row>
    <div v-else>Nothing matched...</div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import ProgramCard from './ProgramCard.vue'

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
    ProgramCard,
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
      this.$router.push({
        name: 'Program',
        params: {
          id: item.id,
          program: item,
          isInCart: this.isItemInCart(item),
        },
      })
    },
  },
}
</script>

<style lang="scss">
.b-programs-list {
  display: flex;
}
</style>
