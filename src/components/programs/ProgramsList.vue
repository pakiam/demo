<template>
  <div class="b-programs-list">
    <v-row v-if="programs.length" dense>
      <v-col
        v-for="program in programs"
        :cols="columns"
        :key="program.id"
        class="b-programs-list__item"
      >
        <ProgramCardDefault
          :program="program"
          :isItemInCart="isItemInCart(program)"
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
import ProgramCardDefault from '../core/ProgramCard/ProgramCardDefault.vue'

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
    ProgramCardDefault,
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
      this.addToCart(item)
    },
    onRemoveFromCart (item) {
      this.removeFromCart(item)
    },
    onOpenProgram (program) {
      this.$router.push({
        name: 'Program',
        params: {
          id: program.id,
          program: program,
          isItemInCart: this.isItemInCart(program),
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
