<template>
  <div class="b-programs-list">
    <v-row
      v-if="programs.length"
      dense
    >
      <v-col
        v-for="program in programs"
        :key="program.id"
        class="b-programs-list__item col-12 col-xl-3 col-lg-4 col-md-6"
        data-test="program-item"
      >
        <ProgramCardDefault
          :program="program"
          @onOpen="onOpenProgram"
        />
      </v-col>
    </v-row>
    <div v-else>
      Nothing matched...
    </div>
  </div>
</template>

<script>
import ProgramCardDefault from '../core/ProgramCard/ProgramCardDefault.vue'

export default {
  name: 'ProgramsList',
  components: {
    ProgramCardDefault,
  },
  props: {
    programs: {
      type: Array,
      required: true,
    },
  },
  methods: {
    onOpenProgram (program) {
      this.$router.push({
        name: 'Program',
        params: {
          id: program.id,
          program: program,
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
