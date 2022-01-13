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
              <template v-for="category in categories">
                <v-list-item :key="category.id">
                  <v-list-item-content>
                    <v-list-item-title class="text-h6"> {{ category.frontName }} </v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
              </template>
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
    }
  },
  methods: {
    ...mapActions({
      getCategories: 'categories/'
    })
  }
}
</script>

<style></style>
