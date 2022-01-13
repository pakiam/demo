<template>
  <div class="b-programs-list">
    <div
      v-for="program in programs"
      :key="program.id"
      class="b-programs-list__item"
    >
      <ProgramItem :program="program" />
    </div>
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
