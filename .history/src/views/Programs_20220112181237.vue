<template>
  <v-container fluid>
    <v-row>
      <template v-if="isLoading">
        <v-col cols="12"> Loading... </v-col>
      </template>
      <template v-else>
        <v-col cols="4"> </v-col>
        <v-col cols="8">
          <ProgramsList :programs="programs"/>
        </v-col>
      </template>
    </v-row>
  </v-container>
</template>

<script>
import { mapActions } from 'vuex'

import ProgramsList from '../components/programs/ProgramsList.vue'
export default {
  name: 'PagePrograms',
  data () {
    return {
      programs: null,
      isLoading: true,
    }
  },
  components: {
    ProgramsList,
  },
  methods: {
    ...mapActions({
      getPrograms: 'programs/getPrograms',
    }),
  },
  async mounted () {
    try {
      const response = await this.getPrograms()
      console.log('2', response)
      this.programs = response
    } catch (error) {
      console.log('Programs mounted', error)
    } finally {
      this.isLoading = false
    }
  },
}
</script>

<style lang="scss"></style>
