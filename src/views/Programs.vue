<template>
  <div class="page-programs">
    <v-container fluid>
      <v-row>
        <v-col cols="12">
          <h1>Программы</h1>
        </v-col>
      </v-row>
      <v-row>
        <template v-if="isLoading">
          <v-col cols="12">
            Loading...
          </v-col>
        </template>
        <template v-else>
          <aside class="col col-12 col-lg-4 col-md-4 col-sm-5">
            <AppAside
              ref="AppAside"
              :on-search-program-by-name="onSearchProgramByName"
              @onSelectCategory="onSelectCategory"
            />
          </aside>
          <main class="col col-12 col-lg-8 col-md-8 col-sm-7">
            <template v-if="isProgramsLoading">
              Loading...
            </template>
            <template v-else>
              <ProgramsList
                :programs="filteredPrograms ? filteredPrograms : programs"
              />
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
  components: {
    AppAside,
    ProgramsList,
  },
  data () {
    return {
      programs: null,
      isLoading: true,
      isProgramsLoading: false,
      searchTimeout: null,
      filteredPrograms: null,
    }
  },
  async mounted () {
    let data
    if (this.$route.query && this.$route.query.category) {
      data = { category: this.$route.query.category }
    }
    try {
      const response = await this.getPrograms(data)
      this.programs = response
    } catch (error) {
      console.log('Programs mounted', error)
    } finally {
      this.isLoading = false
    }
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
      this.isProgramsLoading = true
      this.clearSearch()
      try {
        const response = await this.getPrograms({ category: categoryId })
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
      const str = string.trim().toLowerCase()
      if (str) {
        const res = await this.getProgramsByName({
          programs: this.programs,
          string,
        })
        this.$set(this.$data, 'filteredPrograms', res)
      } else {
        this.$set(this.$data, 'filteredPrograms', null)
      }
    },
    clearSearch () {
      this.$refs.AppAside.clearSearch()
      this.$set(this.$data, 'filteredPrograms', null)
    },
  },
}
</script>

<style lang="scss"></style>
