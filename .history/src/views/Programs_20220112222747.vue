<template>
  <div class="page-programs">
    <v-container fluid>
      <v-row>
        <template v-if="isLoading">
          <v-col cols="12"> Loading... </v-col>
        </template>
        <template v-else>
          <aside class="col col-4">
            <AppAside> </AppAside>
          </aside>
          <main class="col col=8">
            <ProgramsList :programs="programs" />
          </main>
        </template>
      </v-row>
    </v-container>
    <router-view/>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

import ProgramsList from '../components/programs/ProgramsList.vue'
import AppAside from '../components/core/AppAside.vue'

export default {
  name: 'PagePrograms',
  data () {
    return {
      programs: null,
      isLoading: true,
    }
  },
  components: {
    AppAside,
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
