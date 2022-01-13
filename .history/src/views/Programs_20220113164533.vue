<template>
  <div class="page-programs">
    <v-container fluid>
      <v-row>
        <template v-if="isLoading">
          <v-col cols="12"> Loading... </v-col>
        </template>
        <template v-else>
          <aside class="col col-4">
            <AppAside
              @onSelectCategory="onSelectCategory"
              @onSearchProgramByName="onSearchProgramByName"
            >
            </AppAside>
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
      searchTimeout: null,
    }
  },
  components: {
    AppAside,
    ProgramsList,
  },
  methods: {
    ...mapActions({
      getPrograms: 'programs/getPrograms',
      getProgramsByCategory: 'programs/getProgramsByCategory',
      getProgramsByName: 'programs/getProgramsByName',
    }),
    /**
     * @params data.string
     * @params data.source
     *  */
    async onSearchProgramByName (data) {
      clearTimeout(this.searchTimeout)
      this.isProgramsLoading = true
      try {
        if (data.source === 'form') {
          this.searchProgramByName(data.string)
        } else {
          this.searchTimeout = setTimeout(() => {
            this.searchProgramByName(data.string)
          }, 3000)
        }
        // TODO: set query param with category
      } catch (error) {
        console.log('onSelectCategory', error)
      } finally {
        this.isProgramsLoading = false
      }
    },
    async onSelectCategory (categoryId) {
      this.isProgramsLoading = true
      try {
        const response = await this.getProgramsByCategory(categoryId)
        console.log('onSelectCategory response:', categoryId, response)
        this.$set(this.$data, 'programs', response)
        // TODO: set query param with category
      } catch (error) {
        console.log('onSelectCategory', error)
      } finally {
        this.isProgramsLoading = false
      }
    },
    async searchProgramByName (string) {
      const response = await this.getProgramsByName(string)
      console.log('onSelectCategory response:', string, response)
      this.$set(this.$data, 'programs', response)
    },
  },
  async mounted () {
    // TODO: check query param for category and get programs by it
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
