<template>
  <div class="b-programs-list">
    <v-row dense>
      <v-col
        v-for="program in programs"
        :cols="columns"
        :key="program.id"
        class="b-programs-list__item"
      >
        <ProgramItem :program="program" />
      </v-col>
    </v-row>
  </div>
</template>

<script>
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
}
</script>

<style lang="scss">
.b-programs-list {
  display: flex;
}
</style>
