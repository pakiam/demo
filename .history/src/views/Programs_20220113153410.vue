<template>
  <div class="page-programs">
    <v-container fluid>
      <v-row>
        <template v-if="isLoading">
          <v-col cols="12"> Loading... </v-col>
        </template>
        <template v-else>
          <aside class="col col-4">
            <AppAside @onSelectCategory="onSelectCategory"> </AppAside>
          </aside>
          <main class="col col=8">
            <template v-if="isProgramsLoading"> Loading... </template>
            <template v-else>
              <ProgramsList :programs="programs" />
            </template>
          </main>
        </template>
      </v-row>
    </v-container>
    <router-view />
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
      isProgramsLoading: false,
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
    async onSelectCategory (categoryId) {
      try {
        this.isProgramsLoading = true
        const response = await this.getProgramsByCategory(categoryId)
        this.$set(this.$data, 'programs', response)
      } catch (error) {
        console.log('onSelectCategory', error)
      } finally {
        this.isProgramsLoading = false
      }
    },
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
