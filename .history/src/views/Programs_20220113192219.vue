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
      this.isProgramsLoading = true
      try {
        const response = await this.getProgramsByName(string)
        console.log('onSelectCategory response:', string, response)
        this.$set(this.$data, 'programs', response)
      } catch (error) {
        console.log('onSelectCategory', error)
      } finally {
        this.isProgramsLoading = false
        const query = { ...this.$route.query, name: string }
        this.$router.replace({ query })
      }
    },
  },
  async mounted () {
    try {
      const response = await this.getPrograms({ category: this.$route.query.category })
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
