<template>
  <div class="app-aside">
    <v-container>
      <v-row dense class="mb-4">
        <v-col cols="12">
          <v-card class="mx-auto" width="256" tile>
            <v-navigation-drawer permanent>
              <v-system-bar>
                <v-subheader> 2 программы - 1528₽ </v-subheader>
              </v-system-bar>
              <!-- Search form -->
              <v-form>
                <v-container>
                  <v-row no-gutters>
                    <v-col cols="12" md="12">
                      <v-text-field
                        v-model="searchString"
                        label="Программы НМО"
                        append-icon="mdi-magnify"
                      ></v-text-field>
                    </v-col>
                  </v-row>
                </v-container>
              </v-form>
              <!-- /Search form -->
            </v-navigation-drawer>
          </v-card>
        </v-col>
      </v-row>

      <v-row dense>
        <v-col cols="12">
          <v-card class="mx-auto" width="256" tile>
            <v-navigation-drawer permanent>
              <v-subheader class="text-h5"> Категории </v-subheader>
            </v-navigation-drawer>

            <v-list v-if="categories">
              <v-list-item-group v-model="selectedCategory" color="primary"
                ><v-list-item v-for="category in categories" :key="category.id">
                  <v-list-item-content>
                    <v-list-item-title class="text-h6">
                      {{ category.frontName }}
                    </v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
              </v-list-item-group>
            </v-list>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'AppAside',
  data () {
    return {
      searchString: null,
      categories: null,
      selectedCategory: 1,
    }
  },
  methods: {
    ...mapActions({
      getCategories: 'categories/getCategories',
    }),
  },
  async mounted () {
    try {
      const response = await this.getCategories()
      response.shift({
        id: -1,
        frontName: 'Все категории',
        name: 'all',
      })
      this.categories = response
    } catch (error) {
      console.log('AppAside mounted', error)
    } finally {
    }
  },
}
</script>

<style></style>
