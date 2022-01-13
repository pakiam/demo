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
              :onSearchProgramByName="onSearchProgramByName"
            >
            </AppAside>
          </aside>
          <main class="col col=8">
            <template v-if="isProgramsLoading"> Loading... </template>
            <template v-else-if="programs || filteredPrograms">
              <template v-if="filteredPrograms.length || programs.length">
                <ProgramsList
                  :programs="filteredPrograms ? filteredPrograms : programs"
                />
              </template>
              <template v-else>
                Nothing matched
              </template>
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
      filteredPrograms: null,
    }
  },
  components: {
    AppAside,
    ProgramsList,
  },
  methods: {
    ...mapActions({
      getPrograms: 'programs/getPrograms',
      getProgramsByName: 'programs/getProgramsByName',
    }),
    /**
     * @params data.string
     * @params data.source
     *  */
    async onSearchProgramByName (data) {
      console.log('onSearchProgramByName', data)
      clearTimeout(this.searchTimeout)

      if (data.source === 'form') {
        this.searchProgramByName(data.string)
      } else {
        this.searchTimeout = setTimeout(() => {
          this.searchProgramByName(data.string)
        }, 3000)
      }
    },
    async onSelectCategory (categoryId) {
      try {
        const response = await this.getPrograms({ category: categoryId })
        console.log('onSelectCategory response:', categoryId, response)
        this.$set(this.$data, 'programs', response)
      } catch (error) {
        console.log('onSelectCategory', error)
      } finally {
        this.isProgramsLoading = false
        if (categoryId !== -1) {
          const query = { ...this.$route.query, category: categoryId }
          this.$router.replace({ query })
        } else {
          const query = { ...this.$route.query, category: undefined }
          this.$router.replace({ query })
        }
      }
    },
    async searchProgramByName (string) {
      console.log('searchProgramByName', string)
      const str = string.trim()
      if (str) {
        const res = await this.getProgramsByName({
          programs: this.programs,
          string,
        })
        console.log('onSelectCategory response:', string, res)
        this.$set(this.$data, 'filteredPrograms', res)
      } else {
        this.$set(this.$data, 'filteredPrograms', null)
      }
    },
  },
  async mounted () {
    let data
    if (this.$route.query && this.$route.query.category) {
      data = { category: this.$route.query.category }
    }
    try {
      const response = await this.getPrograms(data)
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
