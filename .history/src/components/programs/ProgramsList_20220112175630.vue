<template>
  <div class="b-programs-list">
    <template v-for="program in programs">
      <ProgramItem :key="program.id" :program="program" />
    </template>
    <v-row dense>  </v-row>
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
